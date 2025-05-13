import { io } from "socket.io-client";
import { ARR } from "./arr";
import { createModule } from "./protobuf";
import { RoomUserSeqMessage$decode } from "./RoomUserSeqMessage$decode";
const exportModule = createModule()
const BufferReader = exportModule.BufferReader

const buf = new Uint8Array(Object.values(ARR))
const res = RoomUserSeqMessage$decode(new BufferReader(buf))
console.log("🚀 ~ res:", {
  '评分详情': res.ranks,
  '当前观众': res.total,
  '总共观看': res.total_user,
})

console.log("🚀 ~ io:", io)
