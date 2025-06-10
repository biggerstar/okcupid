import { CustomTitlebar } from 'custom-electron-titlebar'


declare global {
  declare interface Window {
    electronTitlebar: CustomTitlebar
    __VBEN_ADMIN_METADATA__: Record<any, any>
    _SERVER_API_: string
  }

  declare const __API__: {
    login(form: any): Promise<any>
    startTask(): void
    stopTask(): void
    openTikTokWindow(): void
    hideTikTokWindow(): void
    openTiktokBackstageWindow(): void
    hideTiktokBackstageWindow(): void
    resetCheckCounter(): Promise<void>
    getMinutelyCounts(): Promise<Record<any, any>>
    getDayCountsInfo(): Promise<Record<any, any>>
    getCheckedCountInfo(): Promise<Record<any, any>>
    getCurrentStat(): Promise<Record<any, any>>
    getTiktokWindowRunningStatus(): Promise<boolean>
    getTiktokBackstageWindowRunningStatus(): Promise<boolean>
    taskRunningStatus(): Promise<boolean>
    getTiktokWindowShowStatus(): Promise<boolean>
    getTiktokBackstageWindowShowStatus(): Promise<boolean>
    getAppConfig(): Promise<Record<any, any>>
    isLogined(): Promise<boolean>
    updateAppConfig(config: Record<any, any>): Promise<Record<any, any>>
  }

  declare const __TABLE_API__: {
    getAnchorList(options: any): any
    getBossList(options: any): any
    deleteAnchorList(ids: string[]): any
    deleteBossList(ids: string[]): any
  }
}
