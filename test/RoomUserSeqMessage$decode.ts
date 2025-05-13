

export function Contributor$decode(r, l) {
  var c = l === undefined ? r.len : r.pos + l
  var m: Record<any, any> = {}
  while (r.pos < c) {
    var t = r.uint32()
    switch (t >>> 3) {
      case 1: {
        m.score = r.int64()
        break
      }
      case 2: {
        // m.user = types[1].decode(r, r.uint32())
        const i = r.uint32()
        r.pos = r.pos + i
        break
      }
      case 3: {
        m.rank = r.int64()
        break
      }
      case 4: {
        m.delta = r.int64()
        break
      }
      default:
        r.skipType(t & 7)
        break
    }
  }
  return m
}

export function RoomUserSeqMessage$decode(r, l = void 0) {
  var c = l === undefined ? r.len : r.pos + l
  var m: Record<any, any> = {}
  while (r.pos < c) {
    var t = r.uint32()
    switch (t >>> 3) {
      case 1: {
        // m.common = Common$decode(r, r.uint32())
        const i = r.uint32()
        r.pos = r.pos + i
        console.log("🚀 ~ RoomUserSeqMessage$decode ~ r.pos:", t, r.pos)
        break
      }
      case 2: {
        if (!(m.ranks && m.ranks.length)) m.ranks = []
        m.ranks.push(Contributor$decode(r, r.uint32()))
        break
      }
      case 3: {
        m.total = r.int64()
        break
      }
      case 4: {
        m.pop_str = r.string()
        break
      }
      case 5: {
        if (!(m.seats && m.seats.length)) m.seats = []
        const i = r.uint32()
        r.pos = r.pos + i
        break
      }
      case 6: {
        m.popularity = r.int64()
        break
      }
      case 7: {
        m.total_user = r.int64()
        break
      }
      case 8: {
        m.anonymous = r.int64()
        break
      }
      default:
        r.skipType(t & 7)
        break
    }
  }
  return m
}
