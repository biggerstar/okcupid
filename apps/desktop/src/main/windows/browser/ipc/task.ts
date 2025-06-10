import { CAPCHA_SERVER_API } from '@/config';
import { AppDataSource } from '@/orm/data-source';
import { AppConfigEntity } from '@/orm/entities/app-config';
import { CheckRecordEntity } from '@/orm/entities/check-record';
import { QueueLiveEntity } from '@/orm/entities/queue-live';
import { sleep } from '@/utils/time';
import axios from 'axios';
import { ipcMain } from 'electron';
import md5 from 'md5';
import { globalAppConfig } from '../global.app.config';
import { request } from '../request-api/request';
import { taskManager } from '../windows/task';
import { updateAppConfig } from './tiktok';
async function getMinutelyCounts(minuteAgo: number) {
  if (!Reflect.has(globalAppConfig, 'minFans') || !Reflect.has(globalAppConfig, 'anchorMinCoin')) {
    await sleep(300)
  }
  const startTime = new Date(new Date().getTime() - (minuteAgo * 60 * 1000));
  startTime.setMinutes(0, 0, 0)
  const liveBuilder = await AppDataSource.getRepository(QueueLiveEntity).createQueryBuilder('queue_live')
  const all = await liveBuilder
    .select([
      "strftime('%Y-%m-%d %H:%M:00', queue_live.created_time) as minute",
      'COUNT(*) as count'
    ])
    .where('queue_live.created_time >= :date', { date: startTime })
    .groupBy('minute')
    .getRawMany();
  // console.log("🚀 ~ getMinutelyCounts ~ result:", result)

  const qualified = await liveBuilder
    .select([
      "strftime('%Y-%m-%d %H:%M:00', queue_live.created_time) as minute",
      'COUNT(*) as count'
    ])
    .where('queue_live.created_time >= :date', { date: startTime })
    .andWhere('queue_live.fans >= :minFans', { minFans: globalAppConfig.minFans || 0 })
    .andWhere('queue_live.coin >= :anchorMinCoin', { anchorMinCoin: globalAppConfig.anchorMinCoin || 0 })
    .groupBy('minute')
    .getRawMany();

  // 转换现有数据的时间
  all.forEach(item => item.minute = new Date(new Date(item.minute).getTime()))
  qualified.forEach(item => item.minute = new Date(new Date(item.minute).getTime()))

  // 生成完整的分钟列表
  const completeMinutes = [];
  const now = new Date();
  for (let i = 0; i < minuteAgo; i++) {
    const time = new Date(now.getTime() - (i * 60 * 1000));
    time.setSeconds(0, 0); // 将秒和毫秒设置为0
    completeMinutes.unshift(time);
  }

  // 创建包含所有分钟的完整数据集
  const completeAll = completeMinutes.map(minute => {
    const existingData = all.find(item =>
      item.minute.getFullYear() === minute.getFullYear() &&
      item.minute.getMonth() === minute.getMonth() &&
      item.minute.getDate() === minute.getDate() &&
      item.minute.getHours() === minute.getHours() &&
      item.minute.getMinutes() === minute.getMinutes()
    );
    return existingData ? existingData : { minute, count: 0 };
  });

  const completeQualified = completeMinutes.map(minute => {
    const existingData = qualified.find(item =>
      item.minute.getFullYear() === minute.getFullYear() &&
      item.minute.getMonth() === minute.getMonth() &&
      item.minute.getDate() === minute.getDate() &&
      item.minute.getHours() === minute.getHours() &&
      item.minute.getMinutes() === minute.getMinutes()
    );
    return existingData ? existingData : { minute, count: 0 };
  });

  return {
    all: completeAll,
    qualified: completeQualified,
  }
}

async function getDailyCounts(daysAgo: number) {
  const startTime = new Date(Date.now() - (daysAgo * 24 * 60 * 60 * 1000))
  startTime.setHours(0, 0, 0, 0)

  // console.log("🚀 ~ getDailyCounts ~ startTime:", startTime)
  const liveBuilder = await AppDataSource.getRepository(QueueLiveEntity).createQueryBuilder('queue_live')
  const all = await liveBuilder
    .select([
      "strftime('%Y-%m-%d', queue_live.created_time) as day",
      'COUNT(*) as count'
    ])
    .where('queue_live.created_time >= :date', { date: startTime })
    .groupBy('day')
    .getRawMany();

  const qualified = await liveBuilder
    .select([
      "strftime('%Y-%m-%d', queue_live.created_time) as day",
      'COUNT(*) as count'
    ])
    .where('queue_live.created_time >= :date', { date: startTime })
    .andWhere('queue_live.fans >= :minFans', { minFans: globalAppConfig.minFans || 0 })
    .andWhere('queue_live.coin >= :anchorMinCoin', { anchorMinCoin: globalAppConfig.anchorMinCoin || 0 })
    .groupBy('day')
    .getRawMany();

  // 生成完整的日期列表
  const completeDays = [];
  const now = new Date();
  for (let i = 0; i < daysAgo; i++) {
    const date = new Date(now.getTime() - (i * 24 * 60 * 60 * 1000));
    date.setHours(0, 0, 0, 0); // 设置为当天的开始时间
    completeDays.unshift(date);
  }

  // 创建包含所有日期的完整数据集
  const completeAll = completeDays.map(day => {
    const dateStr = `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`;
    const existingData = all.find(item => item.day === dateStr);
    return existingData ? existingData : { day: dateStr, count: 0 };
  });

  const completeQualified = completeDays.map(day => {
    const dateStr = `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`;
    const existingData = qualified.find(item => item.day === dateStr);
    return existingData ? existingData : { day: dateStr, count: 0 };
  });

  return {
    all: completeAll,
    qualified: completeQualified,
  }
}

async function getCheckedCountInfo(takeCount = 60) {
  const result = await CheckRecordEntity.find({
    // take: takeCount
  })
  return {
    qualified: result,
  }
}

export function createTaskIpc() {
  ipcMain.handle('startTask', () => {
    taskManager.startTask()
  })

  ipcMain.handle('stopTask', () => {
    taskManager.stopTask()
  })

  // 添加隐藏TK窗口的IPC处理程序
  ipcMain.handle('hideTikTokWindow', () => {
    console.log('IPC: 收到隐藏TK窗口请求');
    const result = taskManager.hideTikTokWindow();
    console.log("IPC: 隐藏TK窗口结果:", result ? "成功" : "失败");
    return result;
  })

  // 添加隐藏公会窗口的IPC处理程序
  ipcMain.handle('hideTiktokBackstageWindow', () => {
    console.log('IPC: 收到隐藏公会窗口请求');
    const result = taskManager.hideTiktokBackstageWindow();
    console.log("IPC: 隐藏公会窗口结果:", result ? "成功" : "失败");
    return result;
  })

  // 修改打开TK窗口的IPC处理程序
  ipcMain.handle('openTikTokWindow', () => {
    console.log('IPC: 收到打开TK窗口请求');
    const result = taskManager.openTikTokWindow();
    console.log("IPC: 打开TK窗口结果:", result ? "成功" : "失败");
    return result;
  })

  // 修改打开公会窗口的IPC处理程序
  ipcMain.handle('openTiktokBackstageWindow', () => {
    console.log('IPC: 收到打开公会窗口请求');
    const result = taskManager.openTiktokBackstageWindow();
    console.log("IPC: 打开公会窗口结果:", result ? "成功" : "失败");
    return result;
  })

  ipcMain.handle('get-app-config', () => {
    return AppConfigEntity.find()
  })

  ipcMain.handle('get-minutely-counts', () => {
    return getMinutelyCounts(120)
  })

  ipcMain.handle('get-minutely-counts-info', async (_, minuteAgo = 1440) => {
    return await getMinutelyCounts(minuteAgo)
  })

  ipcMain.handle('get-day-counts-info', async (_, daysAgo = 14) => {
    return await getDailyCounts(daysAgo);
  })

  ipcMain.handle('get-checked-counts-info', async (_, takeCount = 60) => {
    return await getCheckedCountInfo(takeCount);
  })
  ipcMain.handle('get-task-running-status', async (_) => {
    return taskManager.isRunning();
  })
  ipcMain.handle('app-login', async (_, form) => {
    const { data } = await request.post('/bsanchor/sysApi/open/login', {
      loginName: form.username,
      password: md5(form.password),
    });
    if (data?.code === 200) {
      updateAppConfig({
        userId: data?.data?.userId || null,
        token: data?.data?.token || null,
      })
    }
    return data
  })
  ipcMain.handle('capcha-solve', async (_, data) => {
    return axios.request({
      baseURL: CAPCHA_SERVER_API,
      url: '/web/captcha/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    })
      .then(res => res.data)
  })
}
