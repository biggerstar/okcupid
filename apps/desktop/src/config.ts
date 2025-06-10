// # 配置信息

import { globalEnv } from "./global/global-env";


/* ----------------  服务器地址  --------------------*/
// 测试服务器地址
const TEST_SERVER_API = 'http://119.28.92.31:7071'
// 正式服务器地址
const PROD_SERVER_API = 'http://43.135.20.146:7071'
export const SERVER_API = globalEnv.isDev ? TEST_SERVER_API : PROD_SERVER_API

/* ---------------  验证码服务器地址  ----------------*/
export const CAPCHA_SERVER_API = 'http://119.28.92.31:9999'

/* ---------------- 合并查验的区域 ------------------ */
// 澳大利亚
const oceaniaIslands = [
  { name: "科科斯群岛", area: "CC" },
  { name: "库克群岛", area: "CK" },
  { name: "圣诞岛", area: "CX" },
  { name: "斐济", area: "FJ" },
  { name: "密克罗尼西亚", area: "FM" },
  { name: "基里巴斯", area: "KI" },
  { name: "马绍尔群岛", area: "MH" },
  { name: "诺福克群岛", area: "NF" },
  { name: "瑙鲁", area: "NR" },
  { name: "纽埃", area: "NU" },
  { name: "巴布亚新几内亚", area: "PG" },
  { name: "皮特凯恩", area: "PN" },
  { name: "帕劳", area: "PW" },
  { name: "所罗门群岛", area: "SB" },
  { name: "托克劳", area: "TK" },
  { name: "汤加", area: "TO" },
  { name: "图瓦卢", area: "TV" },
  { name: "瓦努阿图共和国", area: "VU" },
  { name: "瓦利斯和富图纳", area: "WF" },
  { name: "萨摩亚", area: "WS" }
];

// 中亚
const centralAsiaRegions = [
  { name: "白俄罗斯", area: "BY" },
  { name: "哈萨克斯坦", area: "KZ" },
  { name: "格鲁吉亚", area: "GE" },
  { name: "土库曼斯坦", area: "TM" },
  { name: "吉尔吉斯斯坦", area: "KG" },
  { name: "塔吉克斯坦", area: "TJ" },
  { name: "亚美尼亚", area: "AM" },
  { name: "摩尔多瓦", area: "MD" },
  { name: "乌兹别克斯坦", area: "UZ" }
];

// 中东
const middleEastAndNorthAfrica = [
  { name: "阿联酋", area: "AE" },
  { name: "埃及", area: "EG" },
  { name: "沙特", area: "SA" },
  { name: "摩洛哥", area: "MA" },
  { name: "科威特", area: "KW" },
  { name: "苏丹", area: "SD" },
  { name: "阿尔及利亚", area: "DZ" },
  { name: "伊拉克", area: "IQ" },
  { name: "也门", area: "YE" },
  { name: "乍得", area: "TD" },
  { name: "突尼斯", area: "TN" },
  { name: "索马里", area: "SO" },
  { name: "利比亚", area: "LY" },
  { name: "约旦", area: "JO" },
  { name: "厄立特里亚", area: "ER" },
  { name: "黎巴嫩", area: "LB" },
  { name: "毛里塔尼亚", area: "MR" },
  { name: "阿曼", area: "OM" },
  { name: "卡塔尔", area: "QA" },
  { name: "吉布提", area: "DJ" },
  { name: "巴林", area: "BH" },
  { name: "科摩罗", area: "KM" },
  { name: "巴勒斯坦", area: "PS" },
  { name: "南苏丹", area: "SS" }
];

// 拉美
const latinAmericaRegions = [
  { name: "阿根廷", area: "AR" },
  { name: "哥伦比亚", area: "CO" },
  { name: "秘鲁", area: "PE" },
  { name: "委内瑞拉", area: "VE" },
  { name: "智利", area: "CL" },
  { name: "危地马拉", area: "GT" },
  { name: "厄瓜多尔", area: "EC" },
  { name: "古巴", area: "CU" },
  { name: "玻利维亚", area: "BO" },
  { name: "多米尼加共和国", area: "DO" },
  { name: "洪都拉斯", area: "HN" },
  { name: "巴拉圭", area: "PY" },
  { name: "萨尔瓦多", area: "SV" },
  { name: "尼加拉瓜", area: "NI" },
  { name: "哥斯达黎加", area: "CR" },
  { name: "巴拿马", area: "PA" },
  { name: "乌拉圭", area: "UY" },
  { name: "波多黎各", area: "PR" },
  { name: "赤道几内亚", area: "GQ" }
];

// 北欧
const nordicCountries = [
  { name: "xibanya", area: "ES" },
  { name: "挪威", area: "NO" },
  { name: "瑞典", area: "SE" },
  { name: "芬兰", area: "FI" },
  { name: "丹麦", area: "DK" }
];

export const AREA_MAP = [
  oceaniaIslands,
  centralAsiaRegions,
  middleEastAndNorthAfrica,
  latinAmericaRegions,
  nordicCountries
]
