import { globalEnv } from '@/global/global-env';
import { AppConfigEntity } from '@/orm/entities/app-config';
import { QueueLiveEntity } from '@/orm/entities/queue-live';
import { TopBossUserEntity } from '@/orm/entities/top-boss-user';
import { toChineseTime } from '@/utils/time';
import { ipcMain } from 'electron';
import { In, IsNull, Like, MoreThan, MoreThanOrEqual, Not } from 'typeorm';
import { globalAppConfig, syncAppConfig } from '../global.app.config';
import { getUserRegion } from '../request-api/get-user-region';
import { taskManager } from '../windows/task';
import { tiktokTaskManager } from '../windows/tiktok';

const maxQueueLimit = 20

export async function updateAppConfig(config) {
  for (const key in config) {
    const value = config[key];
    const fonud = await AppConfigEntity.findOne({
      where: {
        key
      }
    })
    if (fonud) {
      fonud.value = value
      await fonud.save()
    } else {
      const appConfigEntity = new AppConfigEntity()
      appConfigEntity.key = key
      appConfigEntity.value = value
      await appConfigEntity.save()
    }
  }
}

function getTow_week_coins(oneDayCoin: number, created_time: Date, randomRange: [number, number]) {
  const currentTime = new Date();
  const createdTime = new Date(created_time);
  const randomMultiplier = randomRange[0] + Math.random() * randomRange[1];
  const daysDiff = Math.floor((currentTime.getTime() - createdTime.getTime()) / (1000 * 60 * 60 * 24));
  let toWeekCoin = oneDayCoin
  if (daysDiff > 1) {
    toWeekCoin = Math.floor(oneDayCoin * daysDiff * randomMultiplier);
  }
  return {
    toWeekCoin,
    randomMultiplier,
    daysDiff
  }
}

export async function saveFeedList(queueLiveList = []) {
  // console.log("🚀 ~ ipcMain.handle ~ queueLiveList:", queueLiveList)
  const ids = queueLiveList.map(i => i.display_id)
  const foundExistList = await QueueLiveEntity.find({
    where: {
      display_id: In(ids)
    }
  })

  // // 估算金币
  // for (const roomInfo of foundExistList) {
  //   if (roomInfo.process !== 'completed') continue
  //   const { daysDiff, toWeekCoin } = getTow_week_coins(roomInfo.coin, roomInfo.created_time, [-1, 3])
  //   if (daysDiff > 1) {
  //     roomInfo.tow_week_coins = toWeekCoin
  //     await roomInfo.save()
  //       .then(() => {
  //         globalEnv.isDev && console.log('更新成功', roomInfo.nickname, roomInfo.live_type, roomInfo.room_id)
  //       });
  //   }
  // }

  // 添加新主播
  const addList = queueLiveList.filter((c) => !foundExistList.find(d => d.display_id === c.display_id))
  for (const item of addList) {
    const queueLiveEntity = new QueueLiveEntity()
    queueLiveEntity.nickname = item.nickname
    queueLiveEntity.room_id = item.room_id
    queueLiveEntity.display_id = item.display_id
    queueLiveEntity.data_from = item.data_from
    queueLiveEntity.live_type = item.live_type
    queueLiveEntity.fans = item.fans
    queueLiveEntity.follow = item.follow
    queueLiveEntity.audience_count = item.audience_count
    queueLiveEntity.like_count = item.like_count
    queueLiveEntity.is_ecommerce = item.is_ecommerce
    queueLiveEntity.process = 'feedQueue'

    queueLiveEntity.created_time = toChineseTime()
    queueLiveEntity.updated_time = toChineseTime()
    await queueLiveEntity.save()
      .then(() => {
        globalEnv.isDev && console.log('入库成功', item.nickname, item.live_type, item.display_id)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }
}

export async function canLoadMoreFeed() {
  if (!taskManager.isRunning()) return false
  const nowFeedQueue = await QueueLiveEntity.count({
    select: ['process'],
    where: {
      process: 'feedQueue'
    }
  })
  return nowFeedQueue < maxQueueLimit
}

// 更新金币和 BOSS 相关信息，只运行一次， 由 process 字段控制
export async function updateFeedList(queueLiveList = []) {
  // console.log("🚀 ~ ipcMain.handle ~ queueLiveList:", queueLiveList)
  for (const item of queueLiveList) {
    const fonud = await QueueLiveEntity.findOne({
      where: {
        display_id: item.display_id
      }
    })
    if (!fonud) {
      console.error('没有找到对应 display_id entry 在数据库中的信息', item.display_id)
      continue
    }
    // 更新主播房间内信息
    fonud.region = item.region
    const seed = 5 + Math.random() * 20
    const toWeekSeed = 10 + Math.random() * 20
    const coin = item.coin === 0 ? 0 : Math.floor(item.coin * seed);
    const toWeekCoin = Math.floor(coin * toWeekSeed);
    fonud.coin = coin
    fonud.tow_week_coins = toWeekCoin
    fonud.tags = item.tags?.toString()
    fonud.process = 'completed'
    fonud.updated_time = toChineseTime()
    await fonud.save().then(() => {
      console.log('更新金币信息成功: ', item.display_id, item.coin)
    })

    // 保存 boss 信息
    const rankUsers: any[] = item.rankUsers
    const boss_ids = rankUsers.map(f => f.id_str).filter(Boolean)
    const foundList = await TopBossUserEntity.find({
      where: {
        id: In(boss_ids)
      }
    })
    const bossMinCoin = +globalAppConfig.bossMinCoin || 20
    const addUserList = rankUsers.filter((c) => !foundList.find(d => d.id === c.id_str))
    // 修改数据库,如果当前票数高于数据库票数，则改成最高的
    for (const dbUser of foundList) {
      const updateUser = rankUsers.find(c => c.id_str === dbUser.id)
      if (+updateUser.fan_ticket > +dbUser.fan_ticket) {
        if (+updateUser.fan_ticket >= bossMinCoin) {
          dbUser.fan_ticket = updateUser.fan_ticket
          dbUser.from_live_display_name = fonud.display_id
          await dbUser.save().catch(() => void 0)
        }
      }
    }
    // 新增 boss user
    for (const updateUser of addUserList) {
      if (!updateUser.display_id || !updateUser.nickname) {
        continue
      }
      if (+updateUser.fan_ticket >= +bossMinCoin) {
        const topBossUserEntity = new TopBossUserEntity()
        topBossUserEntity.nickname = updateUser.nickname
        topBossUserEntity.display_name = updateUser.display_id
        topBossUserEntity.fan_ticket = updateUser.fan_ticket
        topBossUserEntity.from_live_display_name = fonud.display_id
        topBossUserEntity.id = updateUser.id_str || updateUser.id
        await topBossUserEntity.save().catch(() => void 0)
        console.log('添加排行榜老板成功', updateUser.nickname, updateUser.fan_ticket)
      }
    }
  }
}

export function createTiktokIpc() {
  ipcMain.handle('update-app-config', async (_, config = {}) => {
    return updateAppConfig(config)
  })

  ipcMain.handle('get-next-live-room-task', async (_, num = 1) => {
    if (num <= 0) return []
    num = Math.min(maxQueueLimit, num)

    return QueueLiveEntity.find({
      where: {
        process: 'feedQueue',
      },
      take: num
    })
  })

  ipcMain.handle('get-user-region', async (_, username: string) => {
    return getUserRegion(username)
  })

  ipcMain.handle('get-db-region', async (_, username: string) => {
    return globalAppConfig.region
  })

  ipcMain.handle('get-current-stat', async () => {
    if (Object.keys(globalAppConfig).length === 0) {
      await syncAppConfig()
    }
    const now = new Date();
    // 计算一天前的时间戳
    const oneDayAgo = new Date(now);
    oneDayAgo.setDate(now.getDate() - 1);

    const collectedCount = await QueueLiveEntity.count()
    const qualifiedCount = await QueueLiveEntity.count({
      where: {
        region: Not(IsNull()),
        fans: MoreThanOrEqual(globalAppConfig.minFans || 0),
        coin: MoreThanOrEqual(globalAppConfig.anchorMinCoin || 0),
      }
    })
    const qualifiedCountByOneDay = await QueueLiveEntity.count({
      where: {
        region: Not(IsNull()),
        fans: MoreThanOrEqual(globalAppConfig.minFans || 0),
        coin: MoreThanOrEqual(globalAppConfig.anchorMinCoin || 0),
        created_time: MoreThan(oneDayAgo)
      }
    })
    // const checkedCount = await QueueLiveEntity.count({
    //   where: {
    //     process: 'completed', 
    //   },
    // })
    const regionQualifiedCount = await QueueLiveEntity.count({
      where: {
        fans: MoreThanOrEqual(globalAppConfig.minFans || 0),
        coin: MoreThanOrEqual(globalAppConfig.anchorMinCoin || 0),
        region: globalAppConfig.region
      }
    })
    const regionQualifiedCountByOneDay = await QueueLiveEntity.count({
      where: {
        fans: MoreThanOrEqual(globalAppConfig.minFans || 0),
        coin: MoreThanOrEqual(globalAppConfig.anchorMinCoin || 0),
        region: globalAppConfig.region,
        created_time: MoreThanOrEqual(oneDayAgo)
      }
    })
    const bossCount = await TopBossUserEntity.count()

    const qualifiedAnchorCount = await QueueLiveEntity.count({
      where: {
        region: Not(IsNull()),
        fans: MoreThanOrEqual(globalAppConfig.minFans || 0),
        coin: MoreThanOrEqual(globalAppConfig.anchorMinCoin || 0),
        check_result: Like('%可邀请%'),
      }
    })

    const qualifiedAnchorCountByOneday = await QueueLiveEntity.count({
      where: {
        region: Not(IsNull()),
        fans: MoreThanOrEqual(globalAppConfig.minFans || 0),
        coin: MoreThanOrEqual(globalAppConfig.anchorMinCoin || 0),
        check_result: Like('%可邀请%'),
        created_time: MoreThanOrEqual(oneDayAgo)
      }
    })

    return {
      collectedCount,
      // checkedCount,
      qualifiedAnchorCount,
      qualifiedAnchorCountByOneday,
      regionQualifiedCountByOneDay,
      qualifiedCountByOneDay,
      bossCount,
      qualifiedCount,
      regionQualifiedCount,
      checkCount: 0,
      availableCount: 0,
    }
  })

  ipcMain.handle('get-tiktok-window-running-status', async (_) => {
    return tiktokTaskManager.isRunnning()
  })

  ipcMain.handle('set-tiktok-window-running-status', async (_, isRun) => {
    if (isRun) {
      tiktokTaskManager.startTask()
    } else {
      tiktokTaskManager.stopTask()
    }
  })

  ipcMain.handle('get-tiktok-window-show-status', async (_) => {
    return tiktokTaskManager.currentShowStatus()
  })

  ipcMain.handle('can-load-more-feed', async (_) => {
    return canLoadMoreFeed()
  })

  ipcMain.handle('update-queue-feed-live-list', async (_, queueLiveList = []) => {
    return updateFeedList(queueLiveList)
  })

  ipcMain.handle('remove-queue-feed-live-list', async (_, uniqueIds = []) => {
    return QueueLiveEntity.delete({
      display_id: In(uniqueIds)
    })
  })

  ipcMain.handle('save-queue-feed-live-list', async (_, queueLiveList = []) => {
    return saveFeedList(queueLiveList)
  })
}
