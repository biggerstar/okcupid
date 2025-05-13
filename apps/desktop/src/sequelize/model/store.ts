import { globalMainPathParser } from "@/global/global-main-path-parser";
import { Sequelize } from 'sequelize';

/**
 * 请注意这里 devtool 名字是为了在用户数据中隐藏数据库，目的是混淆作用
 * */
const storagePath = globalMainPathParser.resolveDB('devtool')

export const sequelizeStore = new Sequelize({
  dialect: 'sqlite',
  storage: storagePath,
  logging: false
})

sequelizeStore.authenticate().then(_ => console.log('database connected!'))
