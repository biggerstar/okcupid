import { globalEnv } from '@/global/global-env';
import { CheckRecordEntity } from '@/orm/entities/check-record';
import { QueueLiveEntity } from '@/orm/entities/queue-live';
import { TopBossUserEntity } from '@/orm/entities/top-boss-user';
import { formatConmonTime, sleep, toChineseTime } from '@/utils/time';
import { app } from 'electron';
import { IsNull, LessThan, Like, MoreThan, Not } from 'typeorm';
import { mainWindow } from '../../app/app';
import { globalAppConfig } from '../global.app.config';
import { addBatchBoss } from '../request-api/upload-boss-data';
import { addBatchAnchors } from '../request-api/upload-check-data';
import { tiktokTaskManager } from './tiktok';
import { tiktokBackstageWindowManager } from './tiktok-backstage';


export function isLogined() {
  return globalAppConfig.token && globalAppConfig.userId
}

async function loopClearDatabase() {
  setInterval(async () => {
    try {
      // 计算14天前的日期
      const someDaysAgo = new Date();
      someDaysAgo.setDate(someDaysAgo.getDate() - 7);
      // const someDaysAgo = new Date();
      // someDaysAgo.setHours(threeHoursAgo.getHours() - 3);

      // 删除QueueLiveEntity中7天前的数据
      const queueDeleteResult = await QueueLiveEntity.delete({
        created_time: LessThan(someDaysAgo)
      });

      // 删除TopBossUserEntity中7天前的数据
      const bossDeleteResult = await TopBossUserEntity.delete({
        created_time: LessThan(someDaysAgo)
      });

      // 删除CheckRecordEntity中7天前的数据
      const recordDeleteResult = await CheckRecordEntity.delete({
        created_time: LessThan(someDaysAgo)
      });

      console.log(`数据清理完成: 删除了 ${queueDeleteResult.affected || 0} 条QueueLiveEntity数据, ${bossDeleteResult.affected || 0} 条TopBossUserEntity数据, ${recordDeleteResult.affected || 0} 条CheckRecordEntity数据`);
    } catch (error) {
      console.error('清理数据库时发生错误:', error);
    }
  }, 5 * 60 * 1000) // 每5分钟执行一次
}

async function autoUploadAnchorData() {
  if (globalAppConfig.autoUpload !== '1') return
  if (!isLogined()) return
  const take = globalEnv.isDev ? 1 : 30
  const needUploadData = await QueueLiveEntity.find({
    where: {
      region: Not(IsNull()),
      fans: MoreThan(globalAppConfig.minFans || 0),
      coin: MoreThan(globalAppConfig.anchorMinCoin || 0),
      check_result: Like('%可邀请%'),
      upload_time: IsNull()
    },
    take
  })

  if (!needUploadData.length) return
  const uploadData = needUploadData.map(item => {
    const canInvite = item.check_result.includes('可邀请')
    if (!canInvite) return
    const verifiedResult = item.is_god_invite === '1' ? '可用金票' : '可用普通'
    const uploadItem = {
      remark: null,
      contact: 0,
      displayId: item.display_id,
      site: 'hs001',
      hid: '9E5C-1F01-8E13-921A-205F',
      coins: item.coin,
      totalCoins: item.tow_week_coins,
      followers: item.fans,
      following: item.follow,
      region: item.region,
      hashtag: item.live_type || '',
      watchers: item.audience_count,
      lastPickTime: formatConmonTime(item.created_time),
      verifyTime: formatConmonTime(parseInt(item.check_time)),
      contactTime: null,
      verifiedResult,
      label: '',
      source: item.data_from,
      broker: null
    };
    return uploadItem
  }).filter(Boolean)

  console.log("上传 ID 列表: ", uploadData.map(i => i.displayId))
  console.log("🚀 ~ autoUploadAnchorData ~ uploadData:", {
    userId: globalAppConfig.userId,
    token: globalAppConfig.token,
    list: uploadData
  })
  addBatchAnchors({
    userId: globalAppConfig.userId,
    token: globalAppConfig.token,
    list: uploadData
  })
    .then(async () => {
      for (const item of needUploadData) {
        item.upload_time = toChineseTime().getTime().toString()
        await item.save()
      }
    })
}

async function autoUploadBossData() {
  if (globalAppConfig.autoUpload !== '1') return
  if (!isLogined()) return
  const take = globalEnv.isDev ? 1 : 30
  const needUploadData = await TopBossUserEntity.find({
    where: {
      upload_time: IsNull()
    },
    take
  })
  if (!needUploadData.length) return
  const uploadData = needUploadData.map(item => {
    const uploadItem = {
      bossId: item.display_name,
      // name: item.nickname,
      coins: item.fan_ticket.toString(),
      source: item.from_live_display_name,
      // lastPickTime: formatConmonTime(item.created_time),
      // verifyTime: formatConmonTime(item.updated_time)
    };
    return uploadItem
  })
  console.log("上传老板 ID 列表: ", uploadData.map(i => i.bossId))
  console.log("🚀 ~ autoUploadBossData ~ uploadData:", uploadData)
  addBatchBoss({
    userId: globalAppConfig.userId,
    token: globalAppConfig.token,
    list: uploadData
  })
    .then(async () => {
      for (const item of needUploadData) {
        item.upload_time = toChineseTime().getTime().toString()
        await item.save()
      }
    })
}

loopClearDatabase()


export class TaskManager {
  private _autoUploadAnchorDataTimer: any
  private _autoUploadBossDataTimer: any
  constructor() {
    app.whenReady()
      .then(async() => {
        await sleep(2000)
        mainWindow.win.webContents.on('did-navigate-in-page', (_, url) => {
          const urlInfo = new URL(url);
          if (urlInfo.hash.startsWith('#/auth/')) {
            taskManager.stopTask()
          }
        });
      })
  }
  startTask() {
    // if (!isLogined()) return
    this._autoUploadAnchorDataTimer = setInterval(autoUploadAnchorData, 5000)
    this._autoUploadBossDataTimer = setInterval(autoUploadBossData, 5000)

    tiktokTaskManager.startTask()
    tiktokBackstageWindowManager.startTask()
  }

  stopTask() {
    clearInterval(this._autoUploadAnchorDataTimer)
    clearInterval(this._autoUploadBossDataTimer)
    tiktokTaskManager.stopTask()
    tiktokBackstageWindowManager.stopTask()
  }

  // 隐藏TK窗口 - 调用TiktokTaskManager中的hideWindow方法
  hideTikTokWindow() {
    return tiktokTaskManager.hideWindow();
  }

  // 显示TK窗口 - 调用TiktokTaskManager中的showWindow方法
  openTikTokWindow() {
    // if (!isLogined()) return
    return tiktokTaskManager.showWindow();
  }

  // 隐藏公会窗口 - 调用TiktokBackstageWindowManager中的hideWindow方法
  hideTiktokBackstageWindow() {
    return tiktokBackstageWindowManager.hideWindow();
  }

  // 显示公会窗口 - 调用TiktokBackstageWindowManager中的showWindow方法
  openTiktokBackstageWindow() {
    return tiktokBackstageWindowManager.showWindow();
  }
}

export const taskManager = new TaskManager()
