import { createLong } from './long';
import { createMitt } from './mitt';
import { optionToWssUrl } from './options-to-wss-url';
import { createProtobufModule } from './protobuf';

class Logger {
  config(e) {
    this._open = !!e.debug;
  }
  info(e, t) {
    if (this._open)
      try {
        console.info(
          `%cLIVE-im %c${e}`,
          'color:green;',
          'color:green;',
          t ? t() : '',
        );
      } catch (t) {
        console.info(`%cLIVE-im %c${e}`, 'color:red;', 'color:red;', t);
      }
  }
}

class Ntp {
  constructor() {
    this.ntpDiff = 0;
  }
  updateNTPDiff(e, t) {
    let i = Date.now(),
      s = t + (e - i) / 2 - i;
    this.ntpDiff = s;
  }
  getNTPClientTime() {
    return Date.now() + this.ntpDiff;
  }
  getMessageArriveTime(e) {
    let t = Date.now();
    return {
      server_now: e,
      imsdk_recv_time: t,
      adjusted_imsdk_recv_time: Math.round(t + this.ntpDiff),
    };
  }
}

class PbReader {
  constructor(e) {
    let { logger: t } = null != e ? e : {};
    (this.logger = t),
      (this.messageTypesMap = new Map()),
      (this.messagePBRootMap = new Map()),
      (this.framePayloadTypeMap = new Map()),
      (this.framePayloadRootMap = new Map());
    const long = createLong();
    const protobuf = createProtobufModule();
    protobuf.util.Long = long;
    protobuf.configure();
  }
  getFrameType() {
    var e;
    return (
      this.frameType ||
        ((this.framePBRoot =
          null !== (e = this.framePBRoot) && void 0 !== e
            ? e
            : d().Root.fromJSON(g)),
        (this.frameType = this.framePBRoot.lookupType('PushFrame'))),
      this.frameType
    );
  }
  getFramePayloadType(e) {
    return (0, n.__awaiter)(this, void 0, void 0, function* () {
      let t = this.framePayloadTypeMap.get(e);
      if (t) return t;
      let i = _[e],
        s = yield m[e],
        n = d().Root.fromJSON(s),
        o = n.lookupType(i);
      return (
        this.framePayloadRootMap.set(e, n),
        this.framePayloadTypeMap.set(e, o),
        o
      );
    });
  }
  getResponseType() {
    var e;
    return (
      this.responseType ||
        ((this.responsePBRoot =
          null !== (e = this.responsePBRoot) && void 0 !== e
            ? e
            : d().Root.fromJSON(c)),
        (this.responseType = this.responsePBRoot.lookupType('Response'))),
      this.responseType
    );
  }
  getMessageLookup(e) {
    var t, i, s, o;
    return (0, n.__awaiter)(this, void 0, void 0, function* () {
      null === (t = this.logger) ||
        void 0 === t ||
        t.info('[getMessageLookup imMessageType]', () => e);
      let n = this.messageTypesMap.get(e);
      if (n) return n;
      let r = Date.now(),
        a = e === l.w0.RoomMessage ? f.default : (yield p[e]()).default;
      null === (i = this.logger) ||
        void 0 === i ||
        i.info('[getMessageLookup DSL]', () => a);
      let d = (
        null !== (s = this.messagePBRootMap.get(e)) && void 0 !== s
          ? s
          : yield v(a)
      ).lookupType(e);
      return (
        this.messagePBRootMap.set(e, a),
        this.messageTypesMap.set(e, d),
        null === (o = this.logger) ||
          void 0 === o ||
          o.info('[getMessageLookup duration]', () => `${Date.now() - r}`),
        d
      );
    });
  }
  decodeResponse(e) {
    let t = this.getResponseType(),
      i = new Uint8Array(e),
      s = t.decode(i);
    return t.toObject(s, {
      defaults: !0,
    });
  }
  decodePayload(e, t) {
    var i;
    return (0, n.__awaiter)(this, void 0, void 0, function* () {
      null === (i = this.logger) ||
        void 0 === i ||
        i.info(`[decodePayload ${e} uint8Array]`, () => ({
          [e]: t,
        }));
      let s = yield this.getMessageLookup(e),
        n = s.decode(t);
      return s.toObject(n, {
        defaults: !0,
      });
    });
  }
  decodeFramePayload(e, t) {
    return (0, n.__awaiter)(this, void 0, void 0, function* () {
      let i = yield this.getFramePayloadType(e),
        s = i.decode(t);
      return i.toObject(s, {
        defaults: !0,
      });
    });
  }
  decodeFrame(e) {
    let t = this.getFrameType(),
      i = new Uint8Array(e),
      s = t.decode(i);
    return t.toObject(s, {
      defaults: !0,
    });
  }
  createResponseUnit8Array(e) {
    return this.getResponseType().encode(e).finish();
  }
  createPayloadUnit8Array(e, t) {
    return (0, n.__awaiter)(this, void 0, void 0, function* () {
      return (yield this.getMessageLookup(e)).encode(t).finish();
    });
  }
  createPushFrameUnit8Array(e, t, i = {}) {
    return (0, n.__awaiter)(this, void 0, void 0, function* () {
      if (t) {
        if ('ack' === e) i.payload = y(t);
        else if (['hb', 'im_enter_room'].includes(e)) {
          let s = yield this.getFramePayloadType(e);
          i.payload = s.encode(t).finish();
        }
      }
      return (
        (i.payload_encoding = 'pb'),
        (i.payload_type = e),
        this.getFrameType().encode(i).finish()
      );
    });
  }
}

class XHR {
  constructor({ ntp: e, pbReader: t }) {
    (this.ntp = e), (this.pbReader = t);
  }
  abort() {
    this.xhr && (this.xhr.abort(), (this.xhr = void 0));
  }
  deserializeFetch(e, t, i = !1) {
    return (0, n.__awaiter)(this, void 0, void 0, function* () {
      let s = Date.now(),
        n = C(O(Object.assign({}, t))),
        o = yield this.fetch(`${e}?${n}`),
        r = performance.now() + performance.timeOrigin + this.ntp.ntpDiff,
        a = this.pbReader.decodeResponse(o),
        d = performance.now() + performance.timeOrigin + this.ntp.ntpDiff,
        l = Number(a.now);
      this.ntp.updateNTPDiff(s, l);
      let p = this.ntp.getMessageArriveTime(l);
      return {
        data: a,
        extra: {
          message_from: N.Z7.http,
          server_now: p.server_now,
          imsdk_recv_time: p.imsdk_recv_time,
          adjusted_imsdk_recv_time: p.adjusted_imsdk_recv_time,
          decode_start_time: r,
          decode_end_time: d,
          is_initialize: i,
        },
      };
    });
  }
  fetch(e) {
    return (0, n.__awaiter)(this, void 0, void 0, function* () {
      this.xhr = new XMLHttpRequest();
      let { xhr: t } = this;
      return (
        (t.timeout = 1e4),
        (t.responseType = 'arraybuffer'),
        new Promise((i, s) => {
          try {
            t.open('GET', e, !0),
              t.setRequestHeader(
                'Content-Type',
                'application/x-www-form-urlencoded; charset=UTF-8',
              ),
              (t.withCredentials = !0),
              (t.onload = function () {
                4 === t.readyState && 200 === t.status && t.response
                  ? i(t.response)
                  : s(Error(t.response));
              }),
              (t.onerror = (e) => {
                s(e);
              }),
              (t.ontimeout = (e) => {
                s(e);
              }),
              t.send();
          } catch (e) {
            s(e);
          }
        })
      );
    });
  }
}

class MessageEvents {
  constructor(e) {
    (this.lastRtt = '0'),
      (this.internalExt = ''),
      (this.cursor = ''),
      (this.historyCommentCursor = ''),
      (this.roomId = ''),
      (this.messageIdsForDistinct = new Set()),
      (this.eventsMap = new Map()),
      (this.performanceEvents = new Map()),
      (this.logger = e.logger),
      (this.pbReader = e.pbReader);
  }
  onPerformanceEvent(e, t) {
    var i;
    let s =
      null !== (i = this.performanceEvents.get(e)) && void 0 !== i ? i : [];
    s.push(t), this.performanceEvents.set(e, s);
  }
  offPerformanceEvent(e, t) {
    var i;
    let s =
      null !== (i = this.performanceEvents.get(e)) && void 0 !== i ? i : [];
    s.length &&
      this.performanceEvents.set(e, t ? s.filter((e) => e !== t) : []);
  }
  emitPerformanceEvent(e, t) {
    var i;
    let s =
      null !== (i = this.performanceEvents.get(e)) && void 0 !== i ? i : [];
      s.forEach((e) => e(t));
  }
  on(e, t) {
    var i;
    let s = null !== (i = this.eventsMap.get(e)) && void 0 !== i ? i : [];
    s.push(t), this.eventsMap.set(e, s);
  }
  off(e, t) {
    var i;
    let s = null !== (i = this.eventsMap.get(e)) && void 0 !== i ? i : [];
    s.length &&
      this.eventsMap.set(
        e,
        s.filter((e) => !!t && e !== t),
      );
  }
  cleanEvent() {
    this.eventsMap.clear();
  }
  cleanPerformanceEvent() {
    this.performanceEvents.clear();
  }
  setRoomId(e) {
    this.roomId = e;
  }
  clean() {
    this.messageIdsForDistinct.clear(),
      (this.cursor = ''),
      (this.internalExt = ''),
      (this.historyCommentCursor = '');
  }
  emit(e, t) {
    var i;
    let s = null !== (i = e.messages) && void 0 !== i ? i : [];
    e.history_comment_cursor &&
      (this.historyCommentCursor = e.history_comment_cursor),
      e.cursor && (this.cursor = e.cursor),
      e.internal_ext && (this.internalExt = e.internal_ext),
      s.length &&
        s.forEach((e) => {
          let i = e.method,
            s = `${this.roomId}_${e.msg_id}`;
          if (i && T(l.w0.RoomMessage, i)) {
            if (this.messageIdsForDistinct.has(i)) return;
            this.messageIdsForDistinct.add(i);
          }
          i &&
            s &&
            !this.messageIdsForDistinct.has(s) &&
            (this.messageIdsForDistinct.add(s),
            this.runCallbackByMethod(i, e, t));
        });
  }
  toConsumableMessage(e) {
    return (0, n.__awaiter)(this, void 0, void 0, function* () {
      let t = e.msg_id;
      if (
        !t ||
        !e.method ||
        void 0 === e.payload ||
        this.messageIdsForDistinct.has(t)
      )
        return null;
      this.messageIdsForDistinct.add(t);
      let i = w(e.method);
      if (void 0 !== i) {
        let t = yield this.pbReader.decodePayload(i, e.payload);
        return {
          messageType: i,
          payload: t,
          message: e,
        };
      }
      return null;
    });
  }
  runCallbackByMethod(e, t, i) {
    let s;
    let n = [];
    for (let [t, i] of this.eventsMap.entries())
      i.length && T(t, e) && ((s = t), (n = i));
    try {
      let o =
        s && t.payload ? this.pbReader.decodePayload(s, t.payload) : void 0;
      o &&
        (null == n ? void 0 : n.length) &&
        o.then((s) => {
          var o, r;
          for (let a of n)
            ((null === (o = s.common) || void 0 === o ? void 0 : o.room_id) &&
              (null === (r = s.common) || void 0 === r ? void 0 : r.room_id) !==
                this.roomId) ||
              (a(s, t, i),
              this.logger.info('emit Message:', () => ({
                msgMethod: e,
                message: t,
                payload: s,
                extraInfo: i,
              })));
        });
    } catch (i) {
      this.logger.info('emit Message Error:', () => ({
        msgMethod: e,
        message: t,
        err: i,
      })),
        this.emitPerformanceEvent('live_im_decode_error', {
          config: {},
          extra: {
            name: i.name,
            message: i.message,
          },
        });
    }
  }
}

class Socket {
  on(e, t) {
    this.event.on(e, t);
  }
  off(e, t) {
    this.event.off(e, t);
  }
  emit(e, t) {
    this.event.emit(e, t);
  }
  constructor(e) {
    (this.heartbeatDuration = 1e4),
      (this.pingToken = ''),
      (this.pingStarted = !1),
      (this.event = createMitt()),
      (this.pushServer = ''),
      (this.logger = e.logger),
      (this.ntp = e.ntp),
      (this.messageEvents = e.messageEvents),
      (this.pbReader = e.pbReader);
  }
  createClient(e) {
    var t;
    if (this.client) return;
    (this.socketProps = Object.assign(Object.assign({}, e), {
      lastRtt: this.messageEvents.lastRtt,
      internalExt: this.messageEvents.internalExt,
      cursor: this.messageEvents.cursor,
      historyCommentCursor: '',
    })),
      (this.pushServer = e.pushServer),
      (this.heartbeatDuration = Number(
        null !== (t = e.heartbeatDuration) && void 0 !== t
          ? t
          : this.heartbeatDuration,
      )),
      (e.heartbeatDuration = String(this.heartbeatDuration));
    let i = optionToWssUrl(
      Object.assign(Object.assign({}, this.socketProps), e),
    );
    this.logger.info('[socket] start', () => i),
      'undefined' != typeof WebSocket &&
        ((this.client = new WebSocket(i)),
        (this.client.binaryType = 'arraybuffer'),
        this.messageEvents.emitPerformanceEvent('live_im_socket_start', {
          config: e,
        }),
        this.bindClient());
  }
  sendRoomFrame(e) {
    var t;
    return (0, n.__awaiter)(this, void 0, void 0, function* () {
      this.socketProps = Object.assign(this.socketProps, e);
      let i = {
        room_id: this.socketProps.roomId,
        identity: this.socketProps.identity,
        cursor: this.messageEvents.cursor,
        room_tag: this.socketProps.roomTag,
        live_region: this.socketProps.liveRegion,
        live_id: this.socketProps.liveId,
        account_type:
          null !== (t = this.socketProps.accountType) && void 0 !== t ? t : '0',
        filter_welcome_msg: '0',
        is_anchor_continue_keep_msg: !1,
      };
      return this.pbReader
        .createPushFrameUnit8Array('im_enter_room', i)
        .then((e) => {
          var t;
          this.messageEvents.emitPerformanceEvent('live_im_socket_enter_room', {
            config: this.socketProps,
            extra: {
              message: `enterRoom state roomId: ${i.room_id} identity: ${i.identity}`,
            },
          }),
            this.logger.info('[socket] push', () => ({
              type: 'im_enter_room',
              enterRoom: i,
            }));
          try {
            null === (t = this.client) || void 0 === t || t.send(e);
          } catch (e) {
            throw (
              (this.messageEvents.emitPerformanceEvent(
                'live_im_socket_failed',
                {
                  config: this.socketProps,
                  extra: e,
                },
              ),
              this.emit('fail'),
              this.stop(),
              this.logger.info('[socket] enter room error', () => ({
                error: e,
              })),
              Error(e))
            );
          }
        });
    });
  }
  switchRoom(e) {
    this.client &&
      (this.sendRoomFrame(e),
      (this.pingStarted = !0),
      (this.pingToken = U()),
      this.ping({
        token: this.pingToken,
      }));
  }
  stop() {
    if (this.client) {
      let e = this.client;
      (this.pingStarted = !1),
        clearTimeout(this.pingTimer),
        (this.client = void 0),
        e.close(),
        (this.pingToken = ''),
        this.event.removeAllListeners();
    }
  }
  pause() {
    (this.pingStarted = !1),
      clearTimeout(this.pingTimer),
      (this.pingToken = ''),
      this.event.removeAllListeners();
  }
  bindClient() {
    this.client &&
      (this.client.addEventListener('message', (e) => this.executeMessage(e)),
      this.client.addEventListener('open', (e) => this.executeOpen(e)),
      this.client.addEventListener('error', (e) => this.executeError(e)),
      this.client.addEventListener('close', (e) => this.executeClose(e)));
  }
  ping({ token: e }) {
    console.log('🚀 ~ Socket ~ ping ~ e:', e);
    var t;
    if (!this.pingStarted || e !== this.pingToken) return;
    let i = Math.max(1e4, Math.max(Number(this.heartbeatDuration), 2e3));
    (null === (t = this.client) || void 0 === t ? void 0 : t.readyState) ===
      1 &&
      this.pbReader
        .createPushFrameUnit8Array('hb', {
          room_id: this.socketProps.roomId,
        })
        .then((e) => {
          var t, i;
          this.logger.info('[socket] push', () => ({
            type: 'hb',
            room_id: this.socketProps.roomId,
          })),
            this.messageEvents.emitPerformanceEvent('live_im_socket_ping', {
              config: this.socketProps,
              extra: {
                message: `ping state: ${null === (t = this.client) || void 0 === t ? void 0 : t.readyState}_${this.heartbeatDuration}`,
              },
            }),
            null === (i = this.client) || void 0 === i || i.send(e);
        }),
      (this.pingTimer = window.setTimeout(() => {
        this.ping({
          token: e,
        });
      }, i));
  }
  executeOpen(e) {
    console.log('🚀 ~ Socket ~ executeOpen ~ e:', e);
    var t;
    (null === (t = this.client) || void 0 === t ? void 0 : t.readyState) ===
      1 &&
      (this.logger.info('socket open:', () => ({
        event: e,
        socketProps: this.socketProps,
      })),
      this.messageEvents.emitPerformanceEvent('live_im_socket_success', {
        config: this.socketProps,
      }),
      (this.pingStarted = !0),
      (this.pingToken = U()),
      this.ping({
        token: this.pingToken,
      }),
      '1' === this.socketProps.clientEnter &&
        this.sendRoomFrame(this.socketProps),
      this.emit('success'));
  }
  executeError(e) {
    console.log('🚀 ~ Socket ~ executeError ~ e:', e);
    if (!this.client) return;
    this.logger.info('socket executeError:', () => ({
      event: e,
    }));
    let t = {
      message: `${e.type}_${e.error}_${e.message}`,
      name: 'live_im_socket_failed',
    };
    this.messageEvents.emitPerformanceEvent('live_im_socket_failed', {
      config: this.socketProps,
      extra: t,
    }),
      this.emit('fail'),
      this.stop();
  }
  executeClose(e) {
    console.log('🚀 ~ Socket ~ executeClose ~ e:', e);
    let t = {
      name: 'live_im_socket_close',
      message: `${e.type}_${e.code}_${e.reason}`,
    };
    this.logger.info('socket close:', () => t),
      this.messageEvents.emitPerformanceEvent('live_im_socket_close', {
        config: this.socketProps,
        extra: t,
      }),
      this.emit('fail'),
      (this.pingStarted = !1),
      clearTimeout(this.pingTimer);
  }
  executeMessage(e) {
    console.log('🚀 ~ Socket ~ executeMessage ~ e:', e);
    var t, i, s;
    let n;
    if (!this.client) return;
    let o = this.pbReader.decodeFrame(e.data);
    if (!o.payload) {
      this.logger.info('socket message payload empty:', () => o);
      return;
    }
    let r = Date.now(),
      a = !1;
    if (o.headers)
      for (let e of o.headers)
        'compress_type' === e.key && 'gzip' === e.value && (a = !0),
          'im_cursor' === e.key && e.value && (n = e.value);
    if (['im_enter_room_resp', 'msg'].includes(o.payload_type)) {
      let e = performance.now() + performance.timeOrigin + this.ntp.ntpDiff,
        d = this.pbReader.decodeResponse(
          a ? (0, Z.ungzip)(o.payload) : o.payload,
        ),
        l = performance.now() + performance.timeOrigin + this.ntp.ntpDiff;
      this.logger.info('fetchSocketServer socket message response: ', () => ({
        payloadType: o.payload_type,
        frameData: o,
        deserializeData: d,
      })),
        (d.cursor =
          null !== (t = null != n ? n : d.cursor) && void 0 !== t ? t : '');
      let p = Number(d.now);
      this.ntp.updateNTPDiff(r, p);
      let c = this.ntp.getMessageArriveTime(p);
      this.messageEvents.emit(d, {
        message_from: N.Z7.socket,
        server_now: c.server_now,
        imsdk_recv_time: c.imsdk_recv_time,
        adjusted_imsdk_recv_time: c.adjusted_imsdk_recv_time,
        decode_start_time: e,
        decode_end_time: l,
      }),
        null !== (i = d.need_ack) &&
          void 0 !== i &&
          i &&
          this.pbReader
            .createPushFrameUnit8Array(
              'ack',
              null !== (s = d.internal_ext) && void 0 !== s ? s : '',
              {
                LogID: o.LogID,
              },
            )
            .then((e) => {
              var t;
              this.messageEvents.emitPerformanceEvent('live_im_socket_ack', {
                config: this.socketProps,
                extra: {
                  message: `ack state: logid: ${o.LogID}`,
                },
              }),
                this.logger.info('[socket] push', () => ({
                  type: 'ack',
                })),
                null === (t = this.client) || void 0 === t || t.send(e);
            });
    }
    'close' === o.payload_type &&
      (this.logger.info('fetchSocketServer socket response close: ', () => ({
        payloadType: o.payload_type,
        frameData: o,
      })),
      this.stop());
  }
}

const logger = new Logger();
const pbReader = new PbReader({ logger });
const ntp = new Ntp();
const xhr = new XHR({ ntp, pbReader });
const messageEvents = new MessageEvents({ logger, pbReader });
const socket = new Socket({
  messageEvents,
  logger,
  ntp,
  pbReader,
  xhr,
});

const connectInfo = {
  host: 'https://webcast.tiktok.com',
  aid: '1988',
  appName: 'tiktok_web',
  liveId: '12',
  versionCode: '270000',
  debug: false,
  appLanguage: 'en',
  clientEnter: '1',
  roomId: '7496618394049841927',
  identity: 'audience',
  historyCommentCount: 6,
  pushServer:
    'wss://webcast16-ws-alisg.tiktok.com/webcast/im/ws_proxy/ws_reuse_supplement/',
  routeParamsMap: {
    imprp: '',
    wrss: 'aSOG5WEHLxMXikAOm_RLSYbEhP034-1DGmWJKUBS0ag',
  },
  heartbeatDuration: '0',
};

socket.createClient(connectInfo);
