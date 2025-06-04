import { AREA_MAP } from '@/config';
import { AppDataSource } from '@/orm/data-source';
import { CheckRecordEntity } from '@/orm/entities/check-record';
import { QueueLiveEntity } from '@/orm/entities/queue-live';
import { toChineseTime } from '@/utils/time';
import { ipcMain } from 'electron';
import { In, IsNull, MoreThanOrEqual } from 'typeorm';
import { globalAppConfig } from '../global.app.config';
import { taskManager } from '../windows/task';
import { tiktokBackstageWindowManager } from '../windows/tiktok-backstage';
import { updateAppConfig } from './tiktok';

setTimeout(canCheckAnchor, 3000)
setInterval(canCheckAnchor, 10000)

// 获取所属大区的所有国家，如果大区内没找到国家则认为当前使用的 region 自成大区
export function getLargeRegionAllcountry(region: string): string[] {
  let result: string[] = []
  for (const largeRegion of AREA_MAP) {
    if (largeRegion.find(reg => reg.area === region)) {
      result = largeRegion.map(item => item.area);
      break
    }
  }
  if (!result.length && globalAppConfig.region === region) {
    result = [globalAppConfig.region];
  }
  return result;
}

export async function canCheckAnchor() {
  const now = new Date();

  // 计算一小时前的时间戳
  const oneHourAgo = new Date(now);
  oneHourAgo.setHours(now.getHours() - 1 + 8);

  // 计算一天前的时间戳
  const oneDayAgo = new Date(now);
  oneDayAgo.setDate(now.getDate() - 1);
  oneDayAgo.setHours(now.getHours() + 8);

  // 统计一小时内的数据量
  const hourCount = await CheckRecordEntity.count({
    where: {
      created_time: MoreThanOrEqual(oneHourAgo)
    }
  });

  // 统计一天内的数据量
  const dayCount = await CheckRecordEntity.count({
    where: {
      created_time: MoreThanOrEqual(oneDayAgo)
    }
  });

  updateAppConfig({
    hourValue: hourCount,
    dayValue: dayCount,
  })

  if (hourCount >= +globalAppConfig.hourLimit) {
    return false
  }

  if (dayCount >= +globalAppConfig.dayLimit) {
    return false
  }
  if (!globalAppConfig.checkArea || !globalAppConfig.region) return false
  if (!getLargeRegionAllcountry(globalAppConfig.checkArea).includes(globalAppConfig.region)) return false
  if (globalAppConfig.autoCheck !== '1') return false
  return true
}

export function createTiktokBackstageIpc() {
  // 不需要在此处添加新的处理程序，已在task.ts中添加

  ipcMain.handle('get-tiktok-backstage-window-running-status', async (_) => {
    return tiktokBackstageWindowManager.isRunnning()
  })

  ipcMain.handle('get-tiktok-backstage-window-show-status', async (_) => {
    return tiktokBackstageWindowManager.currentShowStatus()
  })

  ipcMain.handle('get-next-tiktok-backstage-anthor-list', async (_) => {
    if (!(await canCheckAnchor()) || !taskManager.isRunning()) return []
    const largeArea = getLargeRegionAllcountry(globalAppConfig.checkArea);
    if (!largeArea.length) return [];
    const anthorLimit = 30
    if (!globalAppConfig.region) return []
    const anthorList = await QueueLiveEntity.find({
      where: {
        region: In(largeArea),
        check_result: IsNull(),
        check_time: IsNull(),
        fans: MoreThanOrEqual(globalAppConfig.minFans || 0),
        coin: MoreThanOrEqual(globalAppConfig.anchorMinCoin || 0),
        process: "completed",
      },
      take: anthorLimit
    })
    if (anthorList.length < anthorLimit) return []
    return anthorList
  })
  ipcMain.handle('can-check-anchor', async () => {
    return canCheckAnchor()
  })
  ipcMain.handle('reset-check-counter', async () => {
    await AppDataSource.manager.clear(CheckRecordEntity);
    await canCheckAnchor()
  })
  ipcMain.handle('update-anthor-info', async (_, checkResultList = []) => {
    let hasInviteCounter = 0
    for (const info of checkResultList) {
      const foundAnthor = await QueueLiveEntity.findOne({
        where: {
          display_id: info.display_id
        }
      })
      if (!foundAnthor) continue
      foundAnthor.check_time = toChineseTime().getTime().toString()
      foundAnthor.check_result = info.check_result
      foundAnthor.is_god_invite = info.is_god_invite || false
      if (info.check_result.includes('可邀请')) {
        hasInviteCounter++
      }
      await foundAnthor
        .save()
        .then(() => {
          console.log('查验入库成功: ', info.display_id, info.check_result)
        })
        .catch((e) => {
          console.log('查验入库失败: ', e.message)
        })
    }
    console.log("🚀 ~ ipcMain.handle ~ hasInviteCounter:", hasInviteCounter)

    const checkRecordEntity = new CheckRecordEntity()
    checkRecordEntity.random = '0'
    // checkRecordEntity.check_count = 30 - Math.round(Math.random() * 3)
    checkRecordEntity.check_count = 30
    checkRecordEntity.check_success = hasInviteCounter
    checkRecordEntity.created_time = toChineseTime()
    checkRecordEntity.updated_time = toChineseTime()
    checkRecordEntity.save()
  })
}
