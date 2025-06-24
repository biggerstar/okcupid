import { CustomTitlebar } from 'custom-electron-titlebar'


declare global {
  declare interface Window {
    electronTitlebar: CustomTitlebar
    __VBEN_ADMIN_METADATA__: Record<any, any>
    _SERVER_API_: string
  }

  declare const __API__: {
    login(form: any): Promise<any>
    getPruductList(options?: any): Promise<any>
    deleteProduct(ids?: string[]): Promise<any>
  }

  declare const __TABLE_API__: {
    getAnchorList(options: any): any
    getBossList(options: any): any
    deleteAnchorList(ids: string[]): any
    deleteBossList(ids: string[]): any
  }
}
