import { QueueLiveEntity } from '@/orm/entities/queue-live';
import { TopBossUserEntity } from '@/orm/entities/top-boss-user';
import { ipcMain } from 'electron';
import { IsNull, MoreThan, Not } from 'typeorm';
import { globalAppConfig } from '../global.app.config';
export function createUserFinderIpc() {
  ipcMain.handle('get-anchor-list', async (_, options = {}) => {
    const page = options.page - 1 || 0
    const pageSize = options.pageSize || 50
    const res = await QueueLiveEntity.find({
      where: {
        process: 'completed',
        region: Not(IsNull()),
        fans: MoreThan(globalAppConfig.minFans || 0),
        coin: MoreThan(globalAppConfig.anchorMinCoin || 0),
        // ...(name && { name: Like(`%${name}%`) }), 
      },
      take: pageSize,
      skip: page * pageSize
    })
    return {
      items: res,
      total: res.length
    }
  })

  ipcMain.handle('get-boss-list', async (_, options = {}) => {
    const page = options.page - 1 || 0
    const pageSize = options.pageSize || 50
    const res = await TopBossUserEntity.find({
      where: {
      },
      take: pageSize,
      skip: page * pageSize
    })
    return {
      items: res,
      total: res.length
    }
  })
}
