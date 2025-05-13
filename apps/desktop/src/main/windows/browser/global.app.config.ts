import { AppConfigEntity } from "@/orm/entities/app-config"

export let globalAppConfig: Record<any, any> = {}

export async function syncAppConfig() {
  const appConfig = await AppConfigEntity.find()
  globalAppConfig = {}
  appConfig.forEach(item => {
    globalAppConfig[item.key] = item.value
  })
}

setInterval(syncAppConfig, 2e3)
setInterval(syncAppConfig, 2e4)

