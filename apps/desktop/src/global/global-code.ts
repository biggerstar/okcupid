import { ScriptJsNames } from "@/enum/script-js";
import { globalRendererPathParser } from "@/global/global-renderer-path-parser";
import { FingerPrintGenerator } from "@marketing/fingerprint-server";
import fs from "node:fs";
import { globalEnv } from "./global-env";


class GlobalCode {
  public codeCacheMap = new Map<string, string>();

  public async fp(fingerprint: FingerPrintGenerator, mouthId: string = 'fp-inject-code') {
    if (globalEnv.isProd){
      if (this.codeCacheMap.has(ScriptJsNames.fp)) return this.codeCacheMap.get(ScriptJsNames.fp)
    }
    const fpPath = globalRendererPathParser.resolveScriptJs(ScriptJsNames.fp).toString()
    let fpCode = await fs.promises.readFile(fpPath, 'utf8')
    const fpCodeInject = `
    const $FP = ${JSON.stringify(fingerprint || {})};`
    const removeInjectCode = `
      const foundInject = document.querySelector('#${mouthId}')
      if (foundInject) foundInject.remove()
    `
    fpCode = `${fpCodeInject}\n${fpCode}\n${removeInjectCode}`
    this.codeCacheMap.set(ScriptJsNames.fp, fpCode)
    return fpCode
  }
}

export const globalCode = new GlobalCode()
