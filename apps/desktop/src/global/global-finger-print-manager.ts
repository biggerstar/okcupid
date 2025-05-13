import {FingerPrintGenerator} from "@marketing/fingerprint-server";

export class GlobalFingerPrintManager {
  /**
   * Map 的 key 是窗口 ID, value 是指纹信息
   * */
  public fingerPrintMap: Map<string, string> = new Map()

  public getByWindowId(windowId: string): string | undefined {
    return this.fingerPrintMap.get(windowId);
  }

  public setByWindowId(windowId: string, fingerPrint: string): void {
    this.fingerPrintMap.set(windowId, fingerPrint);
  }

  public deleteByWindowId(windowId: string): void {
    this.fingerPrintMap.delete(windowId);
  }

  public clear(): void {
    this.fingerPrintMap.clear();
  }

  /**
   * 创建一个指纹，如果没传入参数的话将会自动生成，如果传入 false 的话将会使用浏览器的默认配置
   * */
  public createFingerPrint(options?: Partial<FingerPrintGenerator>): FingerPrintGenerator {
    return JSON.parse(JSON.stringify(new FingerPrintGenerator(options)))
  }
}

export const globalFingerPrintManager = new GlobalFingerPrintManager();
