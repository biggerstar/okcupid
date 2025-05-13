import {DataTypes} from "sequelize";
import {sequelizeStore} from "@/sequelize";

export const printFingerStore = sequelizeStore.define('account', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  type: {  // 账号类型，例如：FB, INS, TK等
    type: DataTypes.STRING,
    primaryKey: true
  },
  account: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false
})
