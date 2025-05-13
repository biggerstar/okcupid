import { sequelizeStore } from "@/sequelize";
import { DataTypes } from "sequelize";

export const accountStore = sequelizeStore.define('account', {
  id: {  // 汽车URL页面 ID
    type: DataTypes.STRING,
    primaryKey: true
  },
  year: { // 车型年份
    type: DataTypes.STRING,
    primaryKey: true
  },
  yearid: { // 车型年份后端返回识别ID
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {  // 年份款名称
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false
})

accountStore.sync().then()
