/*! For license information please see 89571.7b1776fd.js.LICENSE.txt */
(self.webpackChunk_tiktok_webapp_live = self.webpackChunk_tiktok_webapp_live || []).push([["89571"], {
  550178: function(e, t, i) {
      "use strict";
      var s, n, o, r, a, d, l, p, c;
      i.d(t, {
          SZ: () => p,
          Z7: () => c,
          nN: () => o,
          pj: () => u
      }),
      function(e) {
          e[e.Url = 0] = "Url",
          e[e.BdDid = 1] = "BdDid",
          e[e.SessionInCookie = 2] = "SessionInCookie",
          e[e.TTWIDInCookie = 3] = "TTWIDInCookie"
      }(s || (s = {})),
      function(e) {
          e.Protobuf = "protobuf",
          e.Json = "json"
      }(n || (n = {})),
      function(e) {
          e.Anchor = "anchor",
          e.Audience = "audience"
      }(o || (o = {})),
      function(e) {
          e.enable = "1",
          e.disable = "0"
      }(r || (r = {})),
      function(e) {
          e[e.Polling = 0] = "Polling",
          e[e.Socket = 1] = "Socket",
          e[e.PollingWhenSocketConnecting = 2] = "PollingWhenSocketConnecting"
      }(a || (a = {})),
      function(e) {
          e.Close = "close",
          e.Ack = "ack",
          e.Msg = "msg",
          e.Hb = "hb",
          e.EnterRoom = "im_enter_room",
          e.EnterRoomFirstMessage = "im_enter_room_resp"
      }(d || (d = {})),
      function(e) {
          e.Hb = "HeartBeat",
          e.EnterRoom = "EnterRoom"
      }(l || (l = {})),
      function(e) {
          e.FetchConfig = "live_im_fetch_config",
          e.FetchConfigStop = "live_im_fetch_stop",
          e.FetchConfigSuccess = "live_im_fetch_success",
          e.FetchConfigError = "live_im_fetch_error",
          e.SocketStart = "live_im_socket_start",
          e.SocketClose = "live_im_socket_close",
          e.SocketPing = "live_im_socket_ping",
          e.SocketSuccess = "live_im_socket_success",
          e.SocketAck = "live_im_socket_ack",
          e.SocketEnterRoom = "live_im_socket_enter_room",
          e.SocketError = "live_im_socket_failed",
          e.SocketStop = "live_im_socket_stop",
          e.PollingStart = "live_im_polling_start",
          e.PollingSuccess = "live_im_polling_success",
          e.PollingError = "live_im_polling_error",
          e.PollingStop = "live_im_polling_stop",
          e.SocketSwitchToPolling = "live_im_socket_switch_to_polling",
          e.SocketClosePolling = "live_im_socket_close_polling",
          e.PollingSwitchToSocket = "live_im_polling_switch_to_socket",
          e.InitialPollingStart = "live_im_initial_polling_start",
          e.InitialPollingSuccess = "live_im_initial_polling_success",
          e.InitialPollingError = "live_im_initial_polling_error",
          e.DecodeError = "live_im_decode_error",
          e.PauseError = "live_im_pause_error",
          e.ResumeError = "live_im_resume_error",
          e.SwitchRoomToSocket = "live_im_switch_room_to_socket",
          e.SwitchRoomDowngrade = "live_im_switch_room_downgrade"
      }(p || (p = {}));
      let u = ["live_im_fetch_config", "live_im_fetch_stop", "live_im_fetch_success", "live_im_fetch_error", "live_im_socket_start", "live_im_socket_close", "live_im_socket_ping", "live_im_socket_success", "live_im_socket_ack", "live_im_socket_enter_room", "live_im_socket_failed", "live_im_socket_stop", "live_im_polling_start", "live_im_polling_success", "live_im_polling_error", "live_im_polling_stop", "live_im_socket_switch_to_polling", "live_im_socket_close_polling", "live_im_polling_switch_to_socket", "live_im_initial_polling_start", "live_im_initial_polling_success", "live_im_initial_polling_error", "live_im_decode_error", "live_im_pause_error", "live_im_resume_error", "live_im_switch_room_to_socket", "live_im_switch_room_downgrade"];
      !function(e) {
          e[e.http = 0] = "http",
          e[e.socket = 1] = "socket"
      }(c || (c = {}))
  },
  409141: function(module, __unused_webpack_exports, __webpack_require__) {
      module = __webpack_require__.nmd(module),
      function(undefined) {
          "use strict";
          !function(e, t, i) {
              function s(i) {
                  var n = t[i];
                  return n || e[i][0].call(n = t[i] = {
                      exports: {}
                  }, s, n, n.exports),
                  n.exports
              }
              var n = s(i[0]);
              n.util.global.protobuf = n,
              "function" == typeof define && define.amd && define(["long"], function(e) {
                  return e && e.isLong && (n.util.Long = e,
                  n.configure()),
                  n
              }),
              module && module.exports && (module.exports = n)
          }({
              1: [function(e, t, i) {
                  function s(e, t) {
                      for (var i = Array(arguments.length - 1), s = 0, n = 2, o = !0; n < arguments.length; )
                          i[s++] = arguments[n++];
                      return new Promise(function(n, r) {
                          i[s] = function(e) {
                              if (o) {
                                  if (o = !1,
                                  e)
                                      r(e);
                                  else {
                                      for (var t = Array(arguments.length - 1), i = 0; i < t.length; )
                                          t[i++] = arguments[i];
                                      n.apply(null, t)
                                  }
                              }
                          }
                          ;
                          try {
                              e.apply(t || null, i)
                          } catch (e) {
                              o && (o = !1,
                              r(e))
                          }
                      }
                      )
                  }
                  t.exports = s
              }
              , {}],
              2: [function(e, t, i) {
                  var s = i;
                  s.length = function(e) {
                      var t = e.length;
                      if (!t)
                          return 0;
                      for (var i = 0; --t % 4 > 1 && "=" === e.charAt(t); )
                          ++i;
                      return Math.ceil(3 * e.length) / 4 - i
                  }
                  ;
                  for (var n = Array(64), o = Array(123), r = 0; r < 64; )
                      o[n[r] = r < 26 ? r + 65 : r < 52 ? r + 71 : r < 62 ? r - 4 : r - 59 | 43] = r++;
                  s.encode = function(e, t, i) {
                      for (var s, o = null, r = [], a = 0, d = 0; t < i; ) {
                          var l = e[t++];
                          switch (d) {
                          case 0:
                              r[a++] = n[l >> 2],
                              s = (3 & l) << 4,
                              d = 1;
                              break;
                          case 1:
                              r[a++] = n[s | l >> 4],
                              s = (15 & l) << 2,
                              d = 2;
                              break;
                          case 2:
                              r[a++] = n[s | l >> 6],
                              r[a++] = n[63 & l],
                              d = 0
                          }
                          a > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, r)),
                          a = 0)
                      }
                      return (d && (r[a++] = n[s],
                      r[a++] = 61,
                      1 === d && (r[a++] = 61)),
                      o) ? (a && o.push(String.fromCharCode.apply(String, r.slice(0, a))),
                      o.join("")) : String.fromCharCode.apply(String, r.slice(0, a))
                  }
                  ;
                  var a = "invalid encoding";
                  s.decode = function(e, t, i) {
                      for (var s, n = i, r = 0, d = 0; d < e.length; ) {
                          var l = e.charCodeAt(d++);
                          if (61 === l && r > 1)
                              break;
                          if ((l = o[l]) === undefined)
                              throw Error(a);
                          switch (r) {
                          case 0:
                              s = l,
                              r = 1;
                              break;
                          case 1:
                              t[i++] = s << 2 | (48 & l) >> 4,
                              s = l,
                              r = 2;
                              break;
                          case 2:
                              t[i++] = (15 & s) << 4 | (60 & l) >> 2,
                              s = l,
                              r = 3;
                              break;
                          case 3:
                              t[i++] = (3 & s) << 6 | l,
                              r = 0
                          }
                      }
                      if (1 === r)
                          throw Error(a);
                      return i - n
                  }
                  ,
                  s.test = function(e) {
                      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
                  }
              }
              , {}],
              3: [function(e, t, i) {
                  function s(e, t) {
                      "string" == typeof e && (t = e,
                      e = undefined);
                      var i = [];
                      function n(e) {
                          if ("string" != typeof e) {
                              var t = o();
                              if (s.verbose && console.log("codegen: " + t),
                              t = "return " + t,
                              e) {
                                  for (var r = Object.keys(e), a = Array(r.length + 1), d = Array(r.length), l = 0; l < r.length; )
                                      a[l] = r[l],
                                      d[l] = e[r[l++]];
                                  return a[l] = t,
                                  Function.apply(null, a).apply(null, d)
                              }
                              return Function(t)()
                          }
                          for (var p = Array(arguments.length - 1), c = 0; c < p.length; )
                              p[c] = arguments[++c];
                          if (c = 0,
                          e = e.replace(/%([%dfijs])/g, function(e, t) {
                              var i = p[c++];
                              switch (t) {
                              case "d":
                              case "f":
                                  return String(Number(i));
                              case "i":
                                  return String(Math.floor(i));
                              case "j":
                                  return JSON.stringify(i);
                              case "s":
                                  return String(i)
                              }
                              return "%"
                          }),
                          c !== p.length)
                              throw Error("parameter count mismatch");
                          return i.push(e),
                          n
                      }
                      function o(s) {
                          return "function " + (s || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + i.join("\n  ") + "\n}"
                      }
                      return n.toString = o,
                      n
                  }
                  t.exports = s,
                  s.verbose = !1
              }
              , {}],
              4: [function(e, t, i) {
                  function s() {
                      this._listeners = {}
                  }
                  t.exports = s,
                  s.prototype.on = function(e, t, i) {
                      return (this._listeners[e] || (this._listeners[e] = [])).push({
                          fn: t,
                          ctx: i || this
                      }),
                      this
                  }
                  ,
                  s.prototype.off = function(e, t) {
                      if (undefined === e)
                          this._listeners = {};
                      else if (undefined === t)
                          this._listeners[e] = [];
                      else
                          for (var i = this._listeners[e], s = 0; s < i.length; )
                              i[s].fn === t ? i.splice(s, 1) : ++s;
                      return this
                  }
                  ,
                  s.prototype.emit = function(e) {
                      var t = this._listeners[e];
                      if (t) {
                          for (var i = [], s = 1; s < arguments.length; )
                              i.push(arguments[s++]);
                          for (s = 0; s < t.length; )
                              t[s].fn.apply(t[s++].ctx, i)
                      }
                      return this
                  }
              }
              , {}],
              5: [function(e, t, i) {
                  t.exports = o;
                  var s = e(1)
                    , n = e(7)("fs");
                  function o(e, t, i) {
                      return ("function" == typeof t ? (i = t,
                      t = {}) : t || (t = {}),
                      i) ? !t.xhr && n && n.readFile ? n.readFile(e, function(s, n) {
                          return s && "undefined" != typeof XMLHttpRequest ? o.xhr(e, t, i) : s ? i(s) : i(null, t.binary ? n : n.toString("utf8"))
                      }) : o.xhr(e, t, i) : s(o, this, e, t)
                  }
                  o.xhr = function(e, t, i) {
                      var s = new XMLHttpRequest;
                      s.onreadystatechange = function() {
                          if (4 !== s.readyState)
                              return undefined;
                          if (0 !== s.status && 200 !== s.status)
                              return i(Error("status " + s.status));
                          if (t.binary) {
                              var e = s.response;
                              if (!e) {
                                  e = [];
                                  for (var n = 0; n < s.responseText.length; ++n)
                                      e.push(255 & s.responseText.charCodeAt(n))
                              }
                              return i(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e)
                          }
                          return i(null, s.responseText)
                      }
                      ,
                      t.binary && ("overrideMimeType"in s && s.overrideMimeType("text/plain; charset=x-user-defined"),
                      s.responseType = "arraybuffer"),
                      s.open("GET", e),
                      s.send()
                  }
              }
              , {
                  1: 1,
                  7: 7
              }],
              6: [function(e, t, i) {
                  function s(e) {
                      return "undefined" != typeof Float32Array ? function() {
                          var t = new Float32Array([-0])
                            , i = new Uint8Array(t.buffer)
                            , s = 128 === i[3];
                          function n(e, s, n) {
                              t[0] = e,
                              s[n] = i[0],
                              s[n + 1] = i[1],
                              s[n + 2] = i[2],
                              s[n + 3] = i[3]
                          }
                          function o(e, s, n) {
                              t[0] = e,
                              s[n] = i[3],
                              s[n + 1] = i[2],
                              s[n + 2] = i[1],
                              s[n + 3] = i[0]
                          }
                          function r(e, s) {
                              return i[0] = e[s],
                              i[1] = e[s + 1],
                              i[2] = e[s + 2],
                              i[3] = e[s + 3],
                              t[0]
                          }
                          function a(e, s) {
                              return i[3] = e[s],
                              i[2] = e[s + 1],
                              i[1] = e[s + 2],
                              i[0] = e[s + 3],
                              t[0]
                          }
                          e.writeFloatLE = s ? n : o,
                          e.writeFloatBE = s ? o : n,
                          e.readFloatLE = s ? r : a,
                          e.readFloatBE = s ? a : r
                      }() : function() {
                          function t(e, t, i, s) {
                              var n = +(t < 0);
                              if (n && (t = -t),
                              0 === t)
                                  e(1 / t > 0 ? 0 : 0x80000000, i, s);
                              else if (isNaN(t))
                                  e(0x7fc00000, i, s);
                              else if (t > 34028234663852886e22)
                                  e((n << 31 | 0x7f800000) >>> 0, i, s);
                              else if (t < 11754943508222875e-54)
                                  e((n << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, i, s);
                              else {
                                  var o = Math.floor(Math.log(t) / Math.LN2)
                                    , r = 8388607 & Math.round(t * Math.pow(2, -o) * 8388608);
                                  e((n << 31 | o + 127 << 23 | r) >>> 0, i, s)
                              }
                          }
                          function i(e, t, i) {
                              var s = e(t, i)
                                , n = (s >> 31) * 2 + 1
                                , o = s >>> 23 & 255
                                , r = 8388607 & s;
                              return 255 === o ? r ? NaN : 1 / 0 * n : 0 === o ? 1401298464324817e-60 * n * r : n * Math.pow(2, o - 150) * (r + 8388608)
                          }
                          e.writeFloatLE = t.bind(null, n),
                          e.writeFloatBE = t.bind(null, o),
                          e.readFloatLE = i.bind(null, r),
                          e.readFloatBE = i.bind(null, a)
                      }(),
                      "undefined" != typeof Float64Array ? function() {
                          var t = new Float64Array([-0])
                            , i = new Uint8Array(t.buffer)
                            , s = 128 === i[7];
                          function n(e, s, n) {
                              t[0] = e,
                              s[n] = i[0],
                              s[n + 1] = i[1],
                              s[n + 2] = i[2],
                              s[n + 3] = i[3],
                              s[n + 4] = i[4],
                              s[n + 5] = i[5],
                              s[n + 6] = i[6],
                              s[n + 7] = i[7]
                          }
                          function o(e, s, n) {
                              t[0] = e,
                              s[n] = i[7],
                              s[n + 1] = i[6],
                              s[n + 2] = i[5],
                              s[n + 3] = i[4],
                              s[n + 4] = i[3],
                              s[n + 5] = i[2],
                              s[n + 6] = i[1],
                              s[n + 7] = i[0]
                          }
                          function r(e, s) {
                              return i[0] = e[s],
                              i[1] = e[s + 1],
                              i[2] = e[s + 2],
                              i[3] = e[s + 3],
                              i[4] = e[s + 4],
                              i[5] = e[s + 5],
                              i[6] = e[s + 6],
                              i[7] = e[s + 7],
                              t[0]
                          }
                          function a(e, s) {
                              return i[7] = e[s],
                              i[6] = e[s + 1],
                              i[5] = e[s + 2],
                              i[4] = e[s + 3],
                              i[3] = e[s + 4],
                              i[2] = e[s + 5],
                              i[1] = e[s + 6],
                              i[0] = e[s + 7],
                              t[0]
                          }
                          e.writeDoubleLE = s ? n : o,
                          e.writeDoubleBE = s ? o : n,
                          e.readDoubleLE = s ? r : a,
                          e.readDoubleBE = s ? a : r
                      }() : function() {
                          function t(e, t, i, s, n, o) {
                              var r, a = +(s < 0);
                              if (a && (s = -s),
                              0 === s)
                                  e(0, n, o + t),
                                  e(1 / s > 0 ? 0 : 0x80000000, n, o + i);
                              else if (isNaN(s))
                                  e(0, n, o + t),
                                  e(0x7ff80000, n, o + i);
                              else if (s > 17976931348623157e292)
                                  e(0, n, o + t),
                                  e((a << 31 | 0x7ff00000) >>> 0, n, o + i);
                              else if (s < 22250738585072014e-324)
                                  e((r = s / 5e-324) >>> 0, n, o + t),
                                  e((a << 31 | r / 0x100000000) >>> 0, n, o + i);
                              else {
                                  var d = Math.floor(Math.log(s) / Math.LN2);
                                  1024 === d && (d = 1023),
                                  e(0x10000000000000 * (r = s * Math.pow(2, -d)) >>> 0, n, o + t),
                                  e((a << 31 | d + 1023 << 20 | 1048576 * r & 1048575) >>> 0, n, o + i)
                              }
                          }
                          function i(e, t, i, s, n) {
                              var o = e(s, n + t)
                                , r = e(s, n + i)
                                , a = (r >> 31) * 2 + 1
                                , d = r >>> 20 & 2047
                                , l = 0x100000000 * (1048575 & r) + o;
                              return 2047 === d ? l ? NaN : 1 / 0 * a : 0 === d ? 5e-324 * a * l : a * Math.pow(2, d - 1075) * (l + 0x10000000000000)
                          }
                          e.writeDoubleLE = t.bind(null, n, 0, 4),
                          e.writeDoubleBE = t.bind(null, o, 4, 0),
                          e.readDoubleLE = i.bind(null, r, 0, 4),
                          e.readDoubleBE = i.bind(null, a, 4, 0)
                      }(),
                      e
                  }
                  function n(e, t, i) {
                      t[i] = 255 & e,
                      t[i + 1] = e >>> 8 & 255,
                      t[i + 2] = e >>> 16 & 255,
                      t[i + 3] = e >>> 24
                  }
                  function o(e, t, i) {
                      t[i] = e >>> 24,
                      t[i + 1] = e >>> 16 & 255,
                      t[i + 2] = e >>> 8 & 255,
                      t[i + 3] = 255 & e
                  }
                  function r(e, t) {
                      return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
                  }
                  function a(e, t) {
                      return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
                  }
                  t.exports = s(s)
              }
              , {}],
              7: [function(require, module, exports) {
                  function inquire(moduleName) {
                      try {
                          var mod = eval("quire".replace(/^/, "re"))(moduleName);
                          if (mod && (mod.length || Object.keys(mod).length))
                              return mod
                      } catch (e) {}
                      return null
                  }
                  module.exports = inquire
              }
              , {}],
              8: [function(e, t, i) {
                  var s = i
                    , n = s.isAbsolute = function(e) {
                      return /^(?:\/|\w+:)/.test(e)
                  }
                    , o = s.normalize = function(e) {
                      var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/")
                        , i = n(e)
                        , s = "";
                      i && (s = t.shift() + "/");
                      for (var o = 0; o < t.length; )
                          ".." === t[o] ? o > 0 && ".." !== t[o - 1] ? t.splice(--o, 2) : i ? t.splice(o, 1) : ++o : "." === t[o] ? t.splice(o, 1) : ++o;
                      return s + t.join("/")
                  }
                  ;
                  s.resolve = function(e, t, i) {
                      return (i || (t = o(t)),
                      n(t)) ? t : (i || (e = o(e)),
                      (e = e.replace(/(?:\/|^)[^/]+$/, "")).length ? o(e + "/" + t) : t)
                  }
              }
              , {}],
              9: [function(e, t, i) {
                  function s(e, t, i) {
                      var s = i || 8192
                        , n = s >>> 1
                        , o = null
                        , r = s;
                      return function(i) {
                          if (i < 1 || i > n)
                              return e(i);
                          r + i > s && (o = e(s),
                          r = 0);
                          var a = t.call(o, r, r += i);
                          return 7 & r && (r = (7 | r) + 1),
                          a
                      }
                  }
                  t.exports = s
              }
              , {}],
              10: [function(e, t, i) {
                  var s = i;
                  s.length = function(e) {
                      for (var t = 0, i = 0, s = 0; s < e.length; ++s)
                          (i = e.charCodeAt(s)) < 128 ? t += 1 : i < 2048 ? t += 2 : (64512 & i) == 55296 && (64512 & e.charCodeAt(s + 1)) == 56320 ? (++s,
                          t += 4) : t += 3;
                      return t
                  }
                  ,
                  s.read = function(e, t, i) {
                      if (i - t < 1)
                          return "";
                      for (var s, n = null, o = [], r = 0; t < i; )
                          (s = e[t++]) < 128 ? o[r++] = s : s > 191 && s < 224 ? o[r++] = (31 & s) << 6 | 63 & e[t++] : s > 239 && s < 365 ? (s = ((7 & s) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536,
                          o[r++] = 55296 + (s >> 10),
                          o[r++] = 56320 + (1023 & s)) : o[r++] = (15 & s) << 12 | (63 & e[t++]) << 6 | 63 & e[t++],
                          r > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, o)),
                          r = 0);
                      return n ? (r && n.push(String.fromCharCode.apply(String, o.slice(0, r))),
                      n.join("")) : String.fromCharCode.apply(String, o.slice(0, r))
                  }
                  ,
                  s.write = function(e, t, i) {
                      for (var s, n, o = i, r = 0; r < e.length; ++r)
                          (s = e.charCodeAt(r)) < 128 ? t[i++] = s : (s < 2048 ? t[i++] = s >> 6 | 192 : ((64512 & s) == 55296 && (64512 & (n = e.charCodeAt(r + 1))) == 56320 ? (s = 65536 + ((1023 & s) << 10) + (1023 & n),
                          ++r,
                          t[i++] = s >> 18 | 240,
                          t[i++] = s >> 12 & 63 | 128) : t[i++] = s >> 12 | 224,
                          t[i++] = s >> 6 & 63 | 128),
                          t[i++] = 63 & s | 128);
                      return i - o
                  }
              }
              , {}],
              11: [function(e, t, i) {
                  var s = i
                    , n = e(14)
                    , o = e(33);
                  function r(e, t, i, s) {
                      if (t.resolvedType) {
                          if (t.resolvedType instanceof n) {
                              e("switch(d%s){", s);
                              for (var o = t.resolvedType.values, r = Object.keys(o), a = 0; a < r.length; ++a)
                                  o[r[a]] !== t.typeDefault || (e("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', s, s, s),
                                  t.repeated || e("break")),
                                  e("case%j:", r[a])("case %i:", o[r[a]])("m%s=%j", s, o[r[a]])("break");
                              e("}")
                          } else
                              e('if(typeof d%s!=="object")', s)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", s, i, s)
                      } else {
                          var d = !1;
                          switch (t.type) {
                          case "double":
                          case "float":
                              e("m%s=Number(d%s)", s, s);
                              break;
                          case "uint32":
                          case "fixed32":
                              e("m%s=d%s>>>0", s, s);
                              break;
                          case "int32":
                          case "sint32":
                          case "sfixed32":
                              e("m%s=d%s|0", s, s);
                              break;
                          case "uint64":
                              d = !0;
                          case "int64":
                          case "sint64":
                          case "fixed64":
                          case "sfixed64":
                              e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", s, s, d)('else if(typeof d%s==="string")', s)("m%s=parseInt(d%s,10)", s, s)('else if(typeof d%s==="number")', s)("m%s=d%s", s, s)('else if(typeof d%s==="object")', s)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", s, s, s, d ? "true" : "");
                              break;
                          case "bytes":
                              e('if(typeof d%s==="string")', s)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", s, s, s)("else if(d%s.length >= 0)", s)("m%s=d%s", s, s);
                              break;
                          case "string":
                              e("m%s=String(d%s)", s, s);
                              break;
                          case "bool":
                              e("m%s=Boolean(d%s)", s, s)
                          }
                      }
                      return e
                  }
                  function a(e, t, i, s) {
                      if (t.resolvedType)
                          t.resolvedType instanceof n ? e("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", s, i, s, s, i, s, s) : e("d%s=types[%i].toObject(m%s,o)", s, i, s);
                      else {
                          var o = !1;
                          switch (t.type) {
                          case "double":
                          case "float":
                              e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", s, s, s, s);
                              break;
                          case "uint64":
                              o = !0;
                          case "int64":
                          case "sint64":
                          case "fixed64":
                          case "sfixed64":
                              e('if(typeof m%s==="number")', s)("d%s=o.longs===String?String(m%s):m%s", s, s, s)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toString(%s):m%s", s, s, s, s, o ? "true" : "", s);
                              break;
                          case "bytes":
                              e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", s, s, s, s, s);
                              break;
                          default:
                              e("d%s=m%s", s, s)
                          }
                      }
                      return e
                  }
                  s.fromObject = function(e) {
                      var t = e.fieldsArray
                        , i = o.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
                      if (!t.length)
                          return i("return new this.ctor");
                      i("var m=new this.ctor");
                      for (var s = 0; s < t.length; ++s) {
                          var a = t[s].resolve()
                            , d = o.safeProp(a.name);
                          a.map ? (i("if(d%s){", d)('if(typeof d%s!=="object")', d)("throw TypeError(%j)", a.fullName + ": object expected")("m%s={}", d)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", d),
                          r(i, a, s, d + "[ks[i]]")("}")("}")) : a.repeated ? (i("if(d%s){", d)("if(!Array.isArray(d%s))", d)("throw TypeError(%j)", a.fullName + ": array expected")("m%s=[]", d)("for(var i=0;i<d%s.length;++i){", d),
                          r(i, a, s, d + "[i]")("}")("}")) : (a.resolvedType instanceof n || i("if(d%s!=null){", d),
                          r(i, a, s, d),
                          a.resolvedType instanceof n || i("}"))
                      }
                      return i("return m")
                  }
                  ,
                  s.toObject = function(e) {
                      var t = e.fieldsArray.slice().sort(o.compareFieldsById);
                      if (!t.length)
                          return o.codegen()("return {}");
                      for (var i = o.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}"), s = [], r = [], d = [], l = 0; l < t.length; ++l)
                          t[l].partOf || (t[l].resolve().repeated ? s : t[l].map ? r : d).push(t[l]);
                      if (s.length) {
                          for (i("if(o.arrays||o.defaults){"),
                          l = 0; l < s.length; ++l)
                              i("d%s=[]", o.safeProp(s[l].name));
                          i("}")
                      }
                      if (r.length) {
                          for (i("if(o.objects||o.defaults){"),
                          l = 0; l < r.length; ++l)
                              i("d%s={}", o.safeProp(r[l].name));
                          i("}")
                      }
                      if (d.length) {
                          for (i("if(o.defaults){"),
                          l = 0; l < d.length; ++l) {
                              var p = d[l]
                                , c = o.safeProp(p.name);
                              if (p.resolvedType instanceof n)
                                  i("d%s=o.enums===String?%j:%j", c, p.resolvedType.valuesById[p.typeDefault], p.typeDefault);
                              else if (p.long)
                                  i("if(util.Long){")("var n=new util.Long(%i,%i,%j).toString()", p.typeDefault.low, p.typeDefault.high, p.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", c)("}else")("d%s=o.longs===String?%j:%i", c, p.typeDefault.toString(), p.typeDefault.toNumber());
                              else if (p.bytes) {
                                  var u = "[" + Array.prototype.slice.call(p.typeDefault).join(",") + "]";
                                  i("if(o.bytes===String)d%s=%j", c, String.fromCharCode.apply(String, p.typeDefault))("else{")("d%s=%s", c, u)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", c, c)("}")
                              } else
                                  i("d%s=%j", c, p.typeDefault)
                          }
                          i("}")
                      }
                      var h = !1;
                      for (l = 0; l < t.length; ++l) {
                          var p = t[l]
                            , g = e._fieldsArray.indexOf(p)
                            , c = o.safeProp(p.name);
                          p.map ? (h || (h = !0,
                          i("var ks2")),
                          i("if(m%s&&(ks2=Object.keys(m%s)).length){", c, c)("d%s={}", c)("for(var j=0;j<ks2.length;++j){"),
                          a(i, p, g, c + "[ks2[j]]")("}")) : p.repeated ? (i("if(m%s&&m%s.length){", c, c)("d%s=[]", c)("for(var j=0;j<m%s.length;++j){", c),
                          a(i, p, g, c + "[j]")("}")) : (i("if(m%s!=null&&m.hasOwnProperty(%j)){", c, p.name),
                          a(i, p, g, c),
                          p.partOf && i("if(o.oneofs)")("d%s=%j", o.safeProp(p.partOf.name), p.name)),
                          i("}")
                      }
                      return i("return d")
                  }
              }
              , {
                  14: 14,
                  33: 33
              }],
              12: [function(e, t, i) {
                  t.exports = a;
                  var s = e(14)
                    , n = e(32)
                    , o = e(33);
                  function r(e) {
                      return "missing required '" + e.name + "'"
                  }
                  function a(e) {
                      var t = o.codegen(["r", "l"], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter(function(e) {
                          return e.map
                      }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
                      e.group && t("if((t&7)===4)")("break"),
                      t("switch(t>>>3){");
                      for (var i = 0; i < e.fieldsArray.length; ++i) {
                          var a = e._fieldsArray[i].resolve()
                            , d = a.resolvedType instanceof s ? "int32" : a.type
                            , l = "m" + o.safeProp(a.name);
                          t("case %i: {", a.id),
                          a.map ? (t("if(%s===util.emptyObject)", l)("%s={}", l)("var c2 = r.uint32()+r.pos"),
                          n.defaults[a.keyType] !== undefined ? t("k=%j", n.defaults[a.keyType]) : t("k=null"),
                          n.defaults[d] !== undefined ? t("value=%j", n.defaults[d]) : t("value=null"),
                          t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", a.keyType)("case 2:"),
                          n.basic[d] === undefined ? t("value=types[%i].decode(r,r.uint32())", i) : t("value=r.%s()", d),
                          t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"),
                          t(n.long[a.keyType] !== undefined ? '%s[util.Long.isLong(k)?k.toString():typeof k==="object"?util.longToHash(k):k]=value' : "%s[k]=value", l)) : a.repeated ? (t("if(!(%s&&%s.length))", l, l)("%s=[]", l),
                          n.packed[d] !== undefined && t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", l, d)("}else"),
                          n.basic[d] === undefined ? t(a.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", l, i) : t("%s.push(r.%s())", l, d)) : n.basic[d] === undefined ? t(a.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", l, i) : t("%s=r.%s()", l, d),
                          t("break")("}")
                      }
                      for (t("default:")("r.skipType(t&7)")("break")("}")("}"),
                      i = 0; i < e._fieldsArray.length; ++i) {
                          var p = e._fieldsArray[i];
                          p.required && t("if(!m.hasOwnProperty(%j))", p.name)("throw util.ProtocolError(%j,{instance:m})", r(p))
                      }
                      return t("return m")
                  }
              }
              , {
                  14: 14,
                  32: 32,
                  33: 33
              }],
              13: [function(e, t, i) {
                  t.exports = a;
                  var s = e(14)
                    , n = e(32)
                    , o = e(33);
                  function r(e, t, i, s) {
                      return t.resolvedType.group ? e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", i, s, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0) : e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", i, s, (t.id << 3 | 2) >>> 0)
                  }
                  function a(e) {
                      for (var t, i, a = o.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()"), d = e.fieldsArray.slice().sort(o.compareFieldsById), t = 0; t < d.length; ++t) {
                          var l = d[t].resolve()
                            , p = e._fieldsArray.indexOf(l)
                            , c = l.resolvedType instanceof s ? "int32" : l.type
                            , u = n.basic[c];
                          i = "m" + o.safeProp(l.name),
                          l.map ? (a("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", i, l.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", i)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (l.id << 3 | 2) >>> 0, 8 | n.mapKey[l.keyType], l.keyType),
                          undefined === u ? a("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", p, i) : a(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | u, c, i),
                          a("}")("}")) : l.repeated ? (a("if(%s!=null&&%s.length){", i, i),
                          l.packed && n.packed[c] !== undefined ? a("w.uint32(%i).fork()", (l.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", i)("w.%s(%s[i])", c, i)("w.ldelim()") : (a("for(var i=0;i<%s.length;++i)", i),
                          undefined === u ? r(a, l, p, i + "[i]") : a("w.uint32(%i).%s(%s[i])", (l.id << 3 | u) >>> 0, c, i)),
                          a("}")) : (l.optional && a("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", i, l.name),
                          undefined === u ? r(a, l, p, i) : a("w.uint32(%i).%s(%s)", (l.id << 3 | u) >>> 0, c, i))
                      }
                      return a("return w")
                  }
              }
              , {
                  14: 14,
                  32: 32,
                  33: 33
              }],
              14: [function(e, t, i) {
                  t.exports = r;
                  var s = e(22);
                  ((r.prototype = Object.create(s.prototype)).constructor = r).className = "Enum";
                  var n = e(21)
                    , o = e(33);
                  function r(e, t, i, n, o, r) {
                      if (s.call(this, e, i),
                      t && "object" != typeof t)
                          throw TypeError("values must be an object");
                      if (this.valuesById = {},
                      this.values = Object.create(this.valuesById),
                      this.comment = n,
                      this.comments = o || {},
                      this.valuesOptions = r,
                      this.reserved = undefined,
                      t)
                          for (var a = Object.keys(t), d = 0; d < a.length; ++d)
                              "number" == typeof t[a[d]] && (this.valuesById[this.values[a[d]] = t[a[d]]] = a[d])
                  }
                  r.fromJSON = function(e, t) {
                      var i = new r(e,t.values,t.options,t.comment,t.comments);
                      return i.reserved = t.reserved,
                      i
                  }
                  ,
                  r.prototype.toJSON = function(e) {
                      var t = !!e && !!e.keepComments;
                      return o.toObject(["options", this.options, "valuesOptions", this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", t ? this.comment : undefined, "comments", t ? this.comments : undefined])
                  }
                  ,
                  r.prototype.add = function(e, t, i, s) {
                      if (!o.isString(e))
                          throw TypeError("name must be a string");
                      if (!o.isInteger(t))
                          throw TypeError("id must be an integer");
                      if (this.values[e] !== undefined)
                          throw Error("duplicate name '" + e + "' in " + this);
                      if (this.isReservedId(t))
                          throw Error("id " + t + " is reserved in " + this);
                      if (this.isReservedName(e))
                          throw Error("name '" + e + "' is reserved in " + this);
                      if (this.valuesById[t] !== undefined) {
                          if (!(this.options && this.options.allow_alias))
                              throw Error("duplicate id " + t + " in " + this);
                          this.values[e] = t
                      } else
                          this.valuesById[this.values[e] = t] = e;
                      return s && (this.valuesOptions === undefined && (this.valuesOptions = {}),
                      this.valuesOptions[e] = s || null),
                      this.comments[e] = i || null,
                      this
                  }
                  ,
                  r.prototype.remove = function(e) {
                      if (!o.isString(e))
                          throw TypeError("name must be a string");
                      var t = this.values[e];
                      if (null == t)
                          throw Error("name '" + e + "' does not exist in " + this);
                      return delete this.valuesById[t],
                      delete this.values[e],
                      delete this.comments[e],
                      this.valuesOptions && delete this.valuesOptions[e],
                      this
                  }
                  ,
                  r.prototype.isReservedId = function(e) {
                      return n.isReservedId(this.reserved, e)
                  }
                  ,
                  r.prototype.isReservedName = function(e) {
                      return n.isReservedName(this.reserved, e)
                  }
              }
              , {
                  21: 21,
                  22: 22,
                  33: 33
              }],
              15: [function(e, t, i) {
                  t.exports = l;
                  var s, n = e(22);
                  ((l.prototype = Object.create(n.prototype)).constructor = l).className = "Field";
                  var o = e(14)
                    , r = e(32)
                    , a = e(33)
                    , d = /^required|optional|repeated$/;
                  function l(e, t, i, s, o, l, p) {
                      if (a.isObject(s) ? (p = o,
                      l = s,
                      s = o = undefined) : a.isObject(o) && (p = l,
                      l = o,
                      o = undefined),
                      n.call(this, e, l),
                      !a.isInteger(t) || t < 0)
                          throw TypeError("id must be a non-negative integer");
                      if (!a.isString(i))
                          throw TypeError("type must be a string");
                      if (undefined !== s && !d.test(s = s.toString().toLowerCase()))
                          throw TypeError("rule must be a string rule");
                      if (undefined !== o && !a.isString(o))
                          throw TypeError("extend must be a string");
                      "proto3_optional" === s && (s = "optional"),
                      this.rule = s && "optional" !== s ? s : undefined,
                      this.type = i,
                      this.id = t,
                      this.extend = o || undefined,
                      this.required = "required" === s,
                      this.optional = !this.required,
                      this.repeated = "repeated" === s,
                      this.map = !1,
                      this.message = null,
                      this.partOf = null,
                      this.typeDefault = null,
                      this.defaultValue = null,
                      this.long = !!a.Long && r.long[i] !== undefined,
                      this.bytes = "bytes" === i,
                      this.resolvedType = null,
                      this.extensionField = null,
                      this.declaringField = null,
                      this._packed = null,
                      this.comment = p
                  }
                  l.fromJSON = function(e, t) {
                      return new l(e,t.id,t.type,t.rule,t.extend,t.options,t.comment)
                  }
                  ,
                  Object.defineProperty(l.prototype, "packed", {
                      get: function() {
                          return null === this._packed && (this._packed = !1 !== this.getOption("packed")),
                          this._packed
                      }
                  }),
                  l.prototype.setOption = function(e, t, i) {
                      return "packed" === e && (this._packed = null),
                      n.prototype.setOption.call(this, e, t, i)
                  }
                  ,
                  l.prototype.toJSON = function(e) {
                      var t = !!e && !!e.keepComments;
                      return a.toObject(["rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined])
                  }
                  ,
                  l.prototype.resolve = function() {
                      if (this.resolved)
                          return this;
                      if ((this.typeDefault = r.defaults[this.type]) === undefined ? (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type),
                      this.resolvedType.values,
                      this.resolvedType instanceof s ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]) : this.options && this.options.proto3_optional && (this.typeDefault = null),
                      this.options && null != this.options.default && (this.typeDefault = this.options.default,
                      this.resolvedType instanceof o && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])),
                      this.options && (!0 !== this.options.packed && (this.options.packed === undefined || !this.resolvedType || this.resolvedType instanceof o) || delete this.options.packed,
                      Object.keys(this.options).length || (this.options = undefined)),
                      this.long)
                          this.typeDefault = a.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)),
                          Object.freeze && Object.freeze(this.typeDefault);
                      else if (this.bytes && "string" == typeof this.typeDefault) {
                          var e;
                          a.base64.test(this.typeDefault) ? a.base64.decode(this.typeDefault, e = a.newBuffer(a.base64.length(this.typeDefault)), 0) : a.utf8.write(this.typeDefault, e = a.newBuffer(a.utf8.length(this.typeDefault)), 0),
                          this.typeDefault = e
                      }
                      return this.map ? this.defaultValue = a.emptyObject : this.repeated ? this.defaultValue = a.emptyArray : this.defaultValue = this.typeDefault,
                      this.parent instanceof s && (this.parent.ctor.prototype[this.name] = this.defaultValue),
                      n.prototype.resolve.call(this)
                  }
                  ,
                  l.d = function(e, t, i, s) {
                      return "function" == typeof t ? t = a.decorateType(t).name : t && "object" == typeof t && (t = a.decorateEnum(t).name),
                      function(n, o) {
                          a.decorateType(n.constructor).add(new l(o,e,t,i,{
                              default: s
                          }))
                      }
                  }
                  ,
                  l._configure = function(e) {
                      s = e
                  }
              }
              , {
                  14: 14,
                  22: 22,
                  32: 32,
                  33: 33
              }],
              16: [function(e, t, i) {
                  var s = t.exports = e(17);
                  function n(e, t, i) {
                      return "function" == typeof t ? (i = t,
                      t = new s.Root) : t || (t = new s.Root),
                      t.load(e, i)
                  }
                  function o(e, t) {
                      return t || (t = new s.Root),
                      t.loadSync(e)
                  }
                  s.build = "light",
                  s.load = n,
                  s.loadSync = o,
                  s.encoder = e(13),
                  s.decoder = e(12),
                  s.verifier = e(36),
                  s.converter = e(11),
                  s.ReflectionObject = e(22),
                  s.Namespace = e(21),
                  s.Root = e(26),
                  s.Enum = e(14),
                  s.Type = e(31),
                  s.Field = e(15),
                  s.OneOf = e(23),
                  s.MapField = e(18),
                  s.Service = e(30),
                  s.Method = e(20),
                  s.Message = e(19),
                  s.wrappers = e(37),
                  s.types = e(32),
                  s.util = e(33),
                  s.ReflectionObject._configure(s.Root),
                  s.Namespace._configure(s.Type, s.Service, s.Enum),
                  s.Root._configure(s.Type),
                  s.Field._configure(s.Type)
              }
              , {
                  11: 11,
                  12: 12,
                  13: 13,
                  14: 14,
                  15: 15,
                  17: 17,
                  18: 18,
                  19: 19,
                  20: 20,
                  21: 21,
                  22: 22,
                  23: 23,
                  26: 26,
                  30: 30,
                  31: 31,
                  32: 32,
                  33: 33,
                  36: 36,
                  37: 37
              }],
              17: [function(e, t, i) {
                  var s = i;
                  function n() {
                      s.util._configure(),
                      s.Writer._configure(s.BufferWriter),
                      s.Reader._configure(s.BufferReader)
                  }
                  s.build = "minimal",
                  s.Writer = e(38),
                  s.BufferWriter = e(39),
                  s.Reader = e(24),
                  s.BufferReader = e(25),
                  s.util = e(35),
                  s.rpc = e(28),
                  s.roots = e(27),
                  s.configure = n,
                  n()
              }
              , {
                  24: 24,
                  25: 25,
                  27: 27,
                  28: 28,
                  35: 35,
                  38: 38,
                  39: 39
              }],
              18: [function(e, t, i) {
                  t.exports = r;
                  var s = e(15);
                  ((r.prototype = Object.create(s.prototype)).constructor = r).className = "MapField";
                  var n = e(32)
                    , o = e(33);
                  function r(e, t, i, n, r, a) {
                      if (s.call(this, e, t, n, undefined, undefined, r, a),
                      !o.isString(i))
                          throw TypeError("keyType must be a string");
                      this.keyType = i,
                      this.resolvedKeyType = null,
                      this.map = !0
                  }
                  r.fromJSON = function(e, t) {
                      return new r(e,t.id,t.keyType,t.type,t.options,t.comment)
                  }
                  ,
                  r.prototype.toJSON = function(e) {
                      var t = !!e && !!e.keepComments;
                      return o.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined])
                  }
                  ,
                  r.prototype.resolve = function() {
                      if (this.resolved)
                          return this;
                      if (n.mapKey[this.keyType] === undefined)
                          throw Error("invalid key type: " + this.keyType);
                      return s.prototype.resolve.call(this)
                  }
                  ,
                  r.d = function(e, t, i) {
                      return "function" == typeof i ? i = o.decorateType(i).name : i && "object" == typeof i && (i = o.decorateEnum(i).name),
                      function(s, n) {
                          o.decorateType(s.constructor).add(new r(n,e,t,i))
                      }
                  }
              }
              , {
                  15: 15,
                  32: 32,
                  33: 33
              }],
              19: [function(e, t, i) {
                  t.exports = n;
                  var s = e(35);
                  function n(e) {
                      if (e)
                          for (var t = Object.keys(e), i = 0; i < t.length; ++i)
                              this[t[i]] = e[t[i]]
                  }
                  n.create = function(e) {
                      return this.$type.create(e)
                  }
                  ,
                  n.encode = function(e, t) {
                      return this.$type.encode(e, t)
                  }
                  ,
                  n.encodeDelimited = function(e, t) {
                      return this.$type.encodeDelimited(e, t)
                  }
                  ,
                  n.decode = function(e) {
                      return this.$type.decode(e)
                  }
                  ,
                  n.decodeDelimited = function(e) {
                      return this.$type.decodeDelimited(e)
                  }
                  ,
                  n.verify = function(e) {
                      return this.$type.verify(e)
                  }
                  ,
                  n.fromObject = function(e) {
                      return this.$type.fromObject(e)
                  }
                  ,
                  n.toObject = function(e, t) {
                      return this.$type.toObject(e, t)
                  }
                  ,
                  n.prototype.toJSON = function() {
                      return this.$type.toObject(this, s.toJSONOptions)
                  }
              }
              , {
                  35: 35
              }],
              20: [function(e, t, i) {
                  t.exports = o;
                  var s = e(22);
                  ((o.prototype = Object.create(s.prototype)).constructor = o).className = "Method";
                  var n = e(33);
                  function o(e, t, i, o, r, a, d, l, p) {
                      if (n.isObject(r) ? (d = r,
                      r = a = undefined) : n.isObject(a) && (d = a,
                      a = undefined),
                      !(undefined === t || n.isString(t)))
                          throw TypeError("type must be a string");
                      if (!n.isString(i))
                          throw TypeError("requestType must be a string");
                      if (!n.isString(o))
                          throw TypeError("responseType must be a string");
                      s.call(this, e, d),
                      this.type = t || "rpc",
                      this.requestType = i,
                      this.requestStream = !!r || undefined,
                      this.responseType = o,
                      this.responseStream = !!a || undefined,
                      this.resolvedRequestType = null,
                      this.resolvedResponseType = null,
                      this.comment = l,
                      this.parsedOptions = p
                  }
                  o.fromJSON = function(e, t) {
                      return new o(e,t.type,t.requestType,t.responseType,t.requestStream,t.responseStream,t.options,t.comment,t.parsedOptions)
                  }
                  ,
                  o.prototype.toJSON = function(e) {
                      var t = !!e && !!e.keepComments;
                      return n.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : undefined, "parsedOptions", this.parsedOptions])
                  }
                  ,
                  o.prototype.resolve = function() {
                      return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType),
                      this.resolvedResponseType = this.parent.lookupType(this.responseType),
                      s.prototype.resolve.call(this))
                  }
              }
              , {
                  22: 22,
                  33: 33
              }],
              21: [function(e, t, i) {
                  t.exports = c;
                  var s, n, o, r = e(22);
                  ((c.prototype = Object.create(r.prototype)).constructor = c).className = "Namespace";
                  var a = e(15)
                    , d = e(33)
                    , l = e(23);
                  function p(e, t) {
                      if (!(e && e.length))
                          return undefined;
                      for (var i = {}, s = 0; s < e.length; ++s)
                          i[e[s].name] = e[s].toJSON(t);
                      return i
                  }
                  function c(e, t) {
                      r.call(this, e, t),
                      this.nested = undefined,
                      this._nestedArray = null
                  }
                  function u(e) {
                      return e._nestedArray = null,
                      e
                  }
                  c.fromJSON = function(e, t) {
                      return new c(e,t.options).addJSON(t.nested)
                  }
                  ,
                  c.arrayToJSON = p,
                  c.isReservedId = function(e, t) {
                      if (e) {
                          for (var i = 0; i < e.length; ++i)
                              if ("string" != typeof e[i] && e[i][0] <= t && e[i][1] > t)
                                  return !0
                      }
                      return !1
                  }
                  ,
                  c.isReservedName = function(e, t) {
                      if (e) {
                          for (var i = 0; i < e.length; ++i)
                              if (e[i] === t)
                                  return !0
                      }
                      return !1
                  }
                  ,
                  Object.defineProperty(c.prototype, "nestedArray", {
                      get: function() {
                          return this._nestedArray || (this._nestedArray = d.toArray(this.nested))
                      }
                  }),
                  c.prototype.toJSON = function(e) {
                      return d.toObject(["options", this.options, "nested", p(this.nestedArray, e)])
                  }
                  ,
                  c.prototype.addJSON = function(e) {
                      var t = this;
                      if (e)
                          for (var i, r = Object.keys(e), d = 0; d < r.length; ++d)
                              i = e[r[d]],
                              t.add((i.fields !== undefined ? s.fromJSON : i.values !== undefined ? o.fromJSON : i.methods !== undefined ? n.fromJSON : i.id !== undefined ? a.fromJSON : c.fromJSON)(r[d], i));
                      return this
                  }
                  ,
                  c.prototype.get = function(e) {
                      return this.nested && this.nested[e] || null
                  }
                  ,
                  c.prototype.getEnum = function(e) {
                      if (this.nested && this.nested[e]instanceof o)
                          return this.nested[e].values;
                      throw Error("no such enum: " + e)
                  }
                  ,
                  c.prototype.add = function(e) {
                      if (!(e instanceof a && e.extend !== undefined || e instanceof s || e instanceof l || e instanceof o || e instanceof n || e instanceof c))
                          throw TypeError("object must be a valid nested object");
                      if (this.nested) {
                          var t = this.get(e.name);
                          if (t) {
                              if (t instanceof c && e instanceof c && !(t instanceof s || t instanceof n)) {
                                  for (var i = t.nestedArray, r = 0; r < i.length; ++r)
                                      e.add(i[r]);
                                  this.remove(t),
                                  this.nested || (this.nested = {}),
                                  e.setOptions(t.options, !0)
                              } else
                                  throw Error("duplicate name '" + e.name + "' in " + this)
                          }
                      } else
                          this.nested = {};
                      return this.nested[e.name] = e,
                      e.onAdd(this),
                      u(this)
                  }
                  ,
                  c.prototype.remove = function(e) {
                      if (!(e instanceof r))
                          throw TypeError("object must be a ReflectionObject");
                      if (e.parent !== this)
                          throw Error(e + " is not a member of " + this);
                      return delete this.nested[e.name],
                      Object.keys(this.nested).length || (this.nested = undefined),
                      e.onRemove(this),
                      u(this)
                  }
                  ,
                  c.prototype.define = function(e, t) {
                      if (d.isString(e))
                          e = e.split(".");
                      else if (!Array.isArray(e))
                          throw TypeError("illegal path");
                      if (e && e.length && "" === e[0])
                          throw Error("path must be relative");
                      for (var i = this; e.length > 0; ) {
                          var s = e.shift();
                          if (i.nested && i.nested[s]) {
                              if (!((i = i.nested[s])instanceof c))
                                  throw Error("path conflicts with non-namespace objects")
                          } else
                              i.add(i = new c(s))
                      }
                      return t && i.addJSON(t),
                      i
                  }
                  ,
                  c.prototype.resolveAll = function() {
                      for (var e = this.nestedArray, t = 0; t < e.length; )
                          e[t]instanceof c ? e[t++].resolveAll() : e[t++].resolve();
                      return this.resolve()
                  }
                  ,
                  c.prototype.lookup = function(e, t, i) {
                      if ("boolean" == typeof t ? (i = t,
                      t = undefined) : t && !Array.isArray(t) && (t = [t]),
                      d.isString(e) && e.length) {
                          if ("." === e)
                              return this.root;
                          e = e.split(".")
                      } else if (!e.length)
                          return this;
                      if ("" === e[0])
                          return this.root.lookup(e.slice(1), t);
                      var s = this.get(e[0]);
                      if (s) {
                          if (1 === e.length) {
                              if (!t || t.indexOf(s.constructor) > -1)
                                  return s
                          } else if (s instanceof c && (s = s.lookup(e.slice(1), t, !0)))
                              return s
                      } else
                          for (var n = 0; n < this.nestedArray.length; ++n)
                              if (this._nestedArray[n]instanceof c && (s = this._nestedArray[n].lookup(e, t, !0)))
                                  return s;
                      return null === this.parent || i ? null : this.parent.lookup(e, t)
                  }
                  ,
                  c.prototype.lookupType = function(e) {
                      var t = this.lookup(e, [s]);
                      if (!t)
                          throw Error("no such type: " + e);
                      return t
                  }
                  ,
                  c.prototype.lookupEnum = function(e) {
                      var t = this.lookup(e, [o]);
                      if (!t)
                          throw Error("no such Enum '" + e + "' in " + this);
                      return t
                  }
                  ,
                  c.prototype.lookupTypeOrEnum = function(e) {
                      var t = this.lookup(e, [s, o]);
                      if (!t)
                          throw Error("no such Type or Enum '" + e + "' in " + this);
                      return t
                  }
                  ,
                  c.prototype.lookupService = function(e) {
                      var t = this.lookup(e, [n]);
                      if (!t)
                          throw Error("no such Service '" + e + "' in " + this);
                      return t
                  }
                  ,
                  c._configure = function(e, t, i) {
                      s = e,
                      n = t,
                      o = i
                  }
              }
              , {
                  15: 15,
                  22: 22,
                  23: 23,
                  33: 33
              }],
              22: [function(e, t, i) {
                  t.exports = o,
                  o.className = "ReflectionObject";
                  var s, n = e(33);
                  function o(e, t) {
                      if (!n.isString(e))
                          throw TypeError("name must be a string");
                      if (t && !n.isObject(t))
                          throw TypeError("options must be an object");
                      this.options = t,
                      this.parsedOptions = null,
                      this.name = e,
                      this.parent = null,
                      this.resolved = !1,
                      this.comment = null,
                      this.filename = null
                  }
                  Object.defineProperties(o.prototype, {
                      root: {
                          get: function() {
                              for (var e = this; null !== e.parent; )
                                  e = e.parent;
                              return e
                          }
                      },
                      fullName: {
                          get: function() {
                              for (var e = [this.name], t = this.parent; t; )
                                  e.unshift(t.name),
                                  t = t.parent;
                              return e.join(".")
                          }
                      }
                  }),
                  o.prototype.toJSON = function() {
                      throw Error()
                  }
                  ,
                  o.prototype.onAdd = function(e) {
                      this.parent && this.parent !== e && this.parent.remove(this),
                      this.parent = e,
                      this.resolved = !1;
                      var t = e.root;
                      t instanceof s && t._handleAdd(this)
                  }
                  ,
                  o.prototype.onRemove = function(e) {
                      var t = e.root;
                      t instanceof s && t._handleRemove(this),
                      this.parent = null,
                      this.resolved = !1
                  }
                  ,
                  o.prototype.resolve = function() {
                      return this.resolved || this.root instanceof s && (this.resolved = !0),
                      this
                  }
                  ,
                  o.prototype.getOption = function(e) {
                      return this.options ? this.options[e] : undefined
                  }
                  ,
                  o.prototype.setOption = function(e, t, i) {
                      return i && this.options && this.options[e] !== undefined || ((this.options || (this.options = {}))[e] = t),
                      this
                  }
                  ,
                  o.prototype.setParsedOption = function(e, t, i) {
                      this.parsedOptions || (this.parsedOptions = []);
                      var s = this.parsedOptions;
                      if (i) {
                          var o = s.find(function(t) {
                              return Object.prototype.hasOwnProperty.call(t, e)
                          });
                          if (o) {
                              var r = o[e];
                              n.setProperty(r, i, t)
                          } else
                              (o = {})[e] = n.setProperty({}, i, t),
                              s.push(o)
                      } else {
                          var a = {};
                          a[e] = t,
                          s.push(a)
                      }
                      return this
                  }
                  ,
                  o.prototype.setOptions = function(e, t) {
                      if (e)
                          for (var i = Object.keys(e), s = 0; s < i.length; ++s)
                              this.setOption(i[s], e[i[s]], t);
                      return this
                  }
                  ,
                  o.prototype.toString = function() {
                      var e = this.constructor.className
                        , t = this.fullName;
                      return t.length ? e + " " + t : e
                  }
                  ,
                  o._configure = function(e) {
                      s = e
                  }
              }
              , {
                  33: 33
              }],
              23: [function(e, t, i) {
                  t.exports = r;
                  var s = e(22);
                  ((r.prototype = Object.create(s.prototype)).constructor = r).className = "OneOf";
                  var n = e(15)
                    , o = e(33);
                  function r(e, t, i, n) {
                      if (Array.isArray(t) || (i = t,
                      t = undefined),
                      s.call(this, e, i),
                      !(undefined === t || Array.isArray(t)))
                          throw TypeError("fieldNames must be an Array");
                      this.oneof = t || [],
                      this.fieldsArray = [],
                      this.comment = n
                  }
                  function a(e) {
                      if (e.parent)
                          for (var t = 0; t < e.fieldsArray.length; ++t)
                              e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t])
                  }
                  r.fromJSON = function(e, t) {
                      return new r(e,t.oneof,t.options,t.comment)
                  }
                  ,
                  r.prototype.toJSON = function(e) {
                      var t = !!e && !!e.keepComments;
                      return o.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : undefined])
                  }
                  ,
                  r.prototype.add = function(e) {
                      if (!(e instanceof n))
                          throw TypeError("field must be a Field");
                      return e.parent && e.parent !== this.parent && e.parent.remove(e),
                      this.oneof.push(e.name),
                      this.fieldsArray.push(e),
                      e.partOf = this,
                      a(this),
                      this
                  }
                  ,
                  r.prototype.remove = function(e) {
                      if (!(e instanceof n))
                          throw TypeError("field must be a Field");
                      var t = this.fieldsArray.indexOf(e);
                      if (t < 0)
                          throw Error(e + " is not a member of " + this);
                      return this.fieldsArray.splice(t, 1),
                      (t = this.oneof.indexOf(e.name)) > -1 && this.oneof.splice(t, 1),
                      e.partOf = null,
                      this
                  }
                  ,
                  r.prototype.onAdd = function(e) {
                      s.prototype.onAdd.call(this, e);
                      for (var t = this, i = 0; i < this.oneof.length; ++i) {
                          var n = e.get(this.oneof[i]);
                          n && !n.partOf && (n.partOf = t,
                          t.fieldsArray.push(n))
                      }
                      a(this)
                  }
                  ,
                  r.prototype.onRemove = function(e) {
                      for (var t, i = 0; i < this.fieldsArray.length; ++i)
                          (t = this.fieldsArray[i]).parent && t.parent.remove(t);
                      s.prototype.onRemove.call(this, e)
                  }
                  ,
                  r.d = function() {
                      for (var e = Array(arguments.length), t = 0; t < arguments.length; )
                          e[t] = arguments[t++];
                      return function(t, i) {
                          o.decorateType(t.constructor).add(new r(i,e)),
                          Object.defineProperty(t, i, {
                              get: o.oneOfGetter(e),
                              set: o.oneOfSetter(e)
                          })
                      }
                  }
              }
              , {
                  15: 15,
                  22: 22,
                  33: 33
              }],
              24: [function(e, t, i) {
                  t.exports = d;
                  var s, n = e(35), o = n.LongBits, r = n.utf8;
                  function a(e, t) {
                      return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len)
                  }
                  function d(e) {
                      this.buf = e,
                      this.pos = 0,
                      this.len = e.length
                  }
                  var l = "undefined" != typeof Uint8Array ? function(e) {
                      if (e instanceof Uint8Array || Array.isArray(e))
                          return new d(e);
                      throw Error("illegal buffer")
                  }
                  : function(e) {
                      if (Array.isArray(e))
                          return new d(e);
                      throw Error("illegal buffer")
                  }
                    , p = function() {
                      return n.Buffer ? function(e) {
                          return (d.create = function(e) {
                              return n.Buffer.isBuffer(e) ? new s(e) : l(e)
                          }
                          )(e)
                      }
                      : l
                  };
                  function c() {
                      var e = new o(0,0)
                        , t = 0;
                      if (this.len - this.pos > 4) {
                          for (; t < 4; ++t)
                              if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0,
                              this.buf[this.pos++] < 128)
                                  return e;
                          if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0,
                          e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0,
                          this.buf[this.pos++] < 128)
                              return e;
                          t = 0
                      } else {
                          for (; t < 3; ++t) {
                              if (this.pos >= this.len)
                                  throw a(this);
                              if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0,
                              this.buf[this.pos++] < 128)
                                  return e
                          }
                          return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0,
                          e
                      }
                      if (this.len - this.pos > 4) {
                          for (; t < 5; ++t)
                              if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0,
                              this.buf[this.pos++] < 128)
                                  return e
                      } else
                          for (; t < 5; ++t) {
                              if (this.pos >= this.len)
                                  throw a(this);
                              if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0,
                              this.buf[this.pos++] < 128)
                                  return e
                          }
                      throw Error("invalid varint encoding")
                  }
                  function u(e, t) {
                      return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0
                  }
                  function h() {
                      if (this.pos + 8 > this.len)
                          throw a(this, 8);
                      return new o(u(this.buf, this.pos += 4),u(this.buf, this.pos += 4))
                  }
                  d.create = p(),
                  d.prototype._slice = n.Array.prototype.subarray || n.Array.prototype.slice,
                  d.prototype.uint32 = function() {
                      var e = 0xffffffff;
                      return function() {
                          if (e = (127 & this.buf[this.pos]) >>> 0,
                          this.buf[this.pos++] < 128 || (e = (e | (127 & this.buf[this.pos]) << 7) >>> 0,
                          this.buf[this.pos++] < 128) || (e = (e | (127 & this.buf[this.pos]) << 14) >>> 0,
                          this.buf[this.pos++] < 128) || (e = (e | (127 & this.buf[this.pos]) << 21) >>> 0,
                          this.buf[this.pos++] < 128) || (e = (e | (15 & this.buf[this.pos]) << 28) >>> 0,
                          this.buf[this.pos++] < 128))
                              return e;
                          if ((this.pos += 5) > this.len)
                              throw this.pos = this.len,
                              a(this, 10);
                          return e
                      }
                  }(),
                  d.prototype.int32 = function() {
                      return 0 | this.uint32()
                  }
                  ,
                  d.prototype.sint32 = function() {
                      var e = this.uint32();
                      return e >>> 1 ^ -(1 & e) | 0
                  }
                  ,
                  d.prototype.bool = function() {
                      return 0 !== this.uint32()
                  }
                  ,
                  d.prototype.fixed32 = function() {
                      if (this.pos + 4 > this.len)
                          throw a(this, 4);
                      return u(this.buf, this.pos += 4)
                  }
                  ,
                  d.prototype.sfixed32 = function() {
                      if (this.pos + 4 > this.len)
                          throw a(this, 4);
                      return 0 | u(this.buf, this.pos += 4)
                  }
                  ,
                  d.prototype.float = function() {
                      if (this.pos + 4 > this.len)
                          throw a(this, 4);
                      var e = n.float.readFloatLE(this.buf, this.pos);
                      return this.pos += 4,
                      e
                  }
                  ,
                  d.prototype.double = function() {
                      if (this.pos + 8 > this.len)
                          throw a(this, 4);
                      var e = n.float.readDoubleLE(this.buf, this.pos);
                      return this.pos += 8,
                      e
                  }
                  ,
                  d.prototype.bytes = function() {
                      var e = this.uint32()
                        , t = this.pos
                        , i = this.pos + e;
                      if (i > this.len)
                          throw a(this, e);
                      return (this.pos += e,
                      Array.isArray(this.buf)) ? this.buf.slice(t, i) : t === i ? new this.buf.constructor(0) : this._slice.call(this.buf, t, i)
                  }
                  ,
                  d.prototype.string = function() {
                      var e = this.bytes();
                      return r.read(e, 0, e.length)
                  }
                  ,
                  d.prototype.skip = function(e) {
                      if ("number" == typeof e) {
                          if (this.pos + e > this.len)
                              throw a(this, e);
                          this.pos += e
                      } else
                          do
                              if (this.pos >= this.len)
                                  throw a(this);
                          while (128 & this.buf[this.pos++]);
                      return this
                  }
                  ,
                  d.prototype.skipType = function(e) {
                      switch (e) {
                      case 0:
                          this.skip();
                          break;
                      case 1:
                          this.skip(8);
                          break;
                      case 2:
                          this.skip(this.uint32());
                          break;
                      case 3:
                          for (; 4 != (e = 7 & this.uint32()); )
                              this.skipType(e);
                          break;
                      case 5:
                          this.skip(4);
                          break;
                      default:
                          throw Error("invalid wire type " + e + " at offset " + this.pos)
                      }
                      return this
                  }
                  ,
                  d._configure = function(e) {
                      s = e,
                      d.create = p(),
                      s._configure();
                      var t = n.Long ? "toLong" : "toNumber";
                      n.merge(d.prototype, {
                          int64: function() {
                              return c.call(this)[t](!1).toString()
                          },
                          uint64: function() {
                              return c.call(this)[t](!0).toString()
                          },
                          sint64: function() {
                              return c.call(this).zzDecode()[t](!1).toString()
                          },
                          fixed64: function() {
                              return h.call(this)[t](!0).toString()
                          },
                          sfixed64: function() {
                              return h.call(this)[t](!1).toString()
                          }
                      })
                  }
              }
              , {
                  35: 35
              }],
              25: [function(e, t, i) {
                  t.exports = o;
                  var s = e(24);
                  (o.prototype = Object.create(s.prototype)).constructor = o;
                  var n = e(35);
                  function o(e) {
                      s.call(this, e)
                  }
                  o._configure = function() {
                      n.Buffer && (o.prototype._slice = n.Buffer.prototype.slice)
                  }
                  ,
                  o.prototype.string = function() {
                      var e = this.uint32();
                      return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len))
                  }
                  ,
                  o._configure()
              }
              , {
                  24: 24,
                  35: 35
              }],
              26: [function(e, t, i) {
                  t.exports = c;
                  var s, n, o, r = e(21);
                  ((c.prototype = Object.create(r.prototype)).constructor = c).className = "Root";
                  var a = e(15)
                    , d = e(14)
                    , l = e(23)
                    , p = e(33);
                  function c(e) {
                      r.call(this, "", e),
                      this.deferred = [],
                      this.files = []
                  }
                  function u() {}
                  c.fromJSON = function(e, t) {
                      return t || (t = new c),
                      e.options && t.setOptions(e.options),
                      t.addJSON(e.nested)
                  }
                  ,
                  c.prototype.resolvePath = p.path.resolve,
                  c.prototype.fetch = p.fetch,
                  c.prototype.load = function e(t, i, s) {
                      "function" == typeof i && (s = i,
                      i = undefined);
                      var r = this;
                      if (!s)
                          return p.asPromise(e, r, t, i);
                      var a = s === u;
                      function d(e, t) {
                          if (s) {
                              var i = s;
                              if (s = null,
                              a)
                                  throw e;
                              i(e, t)
                          }
                      }
                      function l(e) {
                          var t = e.lastIndexOf("google/protobuf/");
                          if (t > -1) {
                              var i = e.substring(t);
                              if (i in o)
                                  return i
                          }
                          return null
                      }
                      function c(e, t) {
                          try {
                              if (p.isString(t) && "{" === t.charAt(0) && (t = JSON.parse(t)),
                              p.isString(t)) {
                                  n.filename = e;
                                  var s, o = n(t, r, i), c = 0;
                                  if (o.imports)
                                      for (; c < o.imports.length; ++c)
                                          (s = l(o.imports[c]) || r.resolvePath(e, o.imports[c])) && h(s);
                                  if (o.weakImports)
                                      for (c = 0; c < o.weakImports.length; ++c)
                                          (s = l(o.weakImports[c]) || r.resolvePath(e, o.weakImports[c])) && h(s, !0)
                              } else
                                  r.setOptions(t.options).addJSON(t.nested)
                          } catch (e) {
                              d(e)
                          }
                          a || g || d(null, r)
                      }
                      function h(e, t) {
                          if (!(r.files.indexOf(e) > -1)) {
                              if (r.files.push(e),
                              e in o) {
                                  a ? c(e, o[e]) : (++g,
                                  setTimeout(function() {
                                      --g,
                                      c(e, o[e])
                                  }));
                                  return
                              }
                              if (a) {
                                  var i;
                                  try {
                                      i = p.fs.readFileSync(e).toString("utf8")
                                  } catch (e) {
                                      t || d(e);
                                      return
                                  }
                                  c(e, i)
                              } else
                                  ++g,
                                  r.fetch(e, function(i, n) {
                                      if (--g,
                                      s) {
                                          if (i) {
                                              t ? g || d(null, r) : d(i);
                                              return
                                          }
                                          c(e, n)
                                      }
                                  })
                          }
                      }
                      var g = 0;
                      p.isString(t) && (t = [t]);
                      for (var f, y = 0; y < t.length; ++y)
                          (f = r.resolvePath("", t[y])) && h(f);
                      return a ? r : (g || d(null, r),
                      undefined)
                  }
                  ,
                  c.prototype.loadSync = function(e, t) {
                      if (!p.isNode)
                          throw Error("not supported");
                      return this.load(e, t, u)
                  }
                  ,
                  c.prototype.resolveAll = function() {
                      if (this.deferred.length)
                          throw Error("unresolvable extensions: " + this.deferred.map(function(e) {
                              return "'extend " + e.extend + "' in " + e.parent.fullName
                          }).join(", "));
                      return r.prototype.resolveAll.call(this)
                  }
                  ;
                  var h = /^[A-Z]/;
                  function g(e, t) {
                      var i = t.parent.lookup(t.extend);
                      if (i) {
                          var s = new a(t.fullName,t.id,t.type,t.rule,undefined,t.options);
                          return s.declaringField = t,
                          t.extensionField = s,
                          i.add(s),
                          !0
                      }
                      return !1
                  }
                  c.prototype._handleAdd = function(e) {
                      if (e instanceof a)
                          e.extend === undefined || e.extensionField || g(this, e) || this.deferred.push(e);
                      else if (e instanceof d)
                          h.test(e.name) && (e.parent[e.name] = e.values);
                      else if (!(e instanceof l)) {
                          if (e instanceof s)
                              for (var t = 0; t < this.deferred.length; )
                                  g(this, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
                          for (var i = 0; i < e.nestedArray.length; ++i)
                              this._handleAdd(e._nestedArray[i]);
                          h.test(e.name) && (e.parent[e.name] = e)
                      }
                  }
                  ,
                  c.prototype._handleRemove = function(e) {
                      if (e instanceof a) {
                          if (e.extend !== undefined) {
                              if (e.extensionField)
                                  e.extensionField.parent.remove(e.extensionField),
                                  e.extensionField = null;
                              else {
                                  var t = this.deferred.indexOf(e);
                                  t > -1 && this.deferred.splice(t, 1)
                              }
                          }
                      } else if (e instanceof d)
                          h.test(e.name) && delete e.parent[e.name];
                      else if (e instanceof r) {
                          for (var i = 0; i < e.nestedArray.length; ++i)
                              this._handleRemove(e._nestedArray[i]);
                          h.test(e.name) && delete e.parent[e.name]
                      }
                  }
                  ,
                  c._configure = function(e, t, i) {
                      s = e,
                      n = t,
                      o = i
                  }
              }
              , {
                  14: 14,
                  15: 15,
                  21: 21,
                  23: 23,
                  33: 33
              }],
              27: [function(e, t, i) {
                  t.exports = {}
              }
              , {}],
              28: [function(e, t, i) {
                  i.Service = e(29)
              }
              , {
                  29: 29
              }],
              29: [function(e, t, i) {
                  t.exports = n;
                  var s = e(35);
                  function n(e, t, i) {
                      if ("function" != typeof e)
                          throw TypeError("rpcImpl must be a function");
                      s.EventEmitter.call(this),
                      this.rpcImpl = e,
                      this.requestDelimited = !!t,
                      this.responseDelimited = !!i
                  }
                  (n.prototype = Object.create(s.EventEmitter.prototype)).constructor = n,
                  n.prototype.rpcCall = function e(t, i, n, o, r) {
                      if (!o)
                          throw TypeError("request must be specified");
                      var a = this;
                      if (!r)
                          return s.asPromise(e, a, t, i, n, o);
                      if (!a.rpcImpl)
                          return setTimeout(function() {
                              r(Error("already ended"))
                          }, 0),
                          undefined;
                      try {
                          return a.rpcImpl(t, i[a.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), function(e, i) {
                              if (e)
                                  return a.emit("error", e, t),
                                  r(e);
                              if (null === i)
                                  return a.end(!0),
                                  undefined;
                              if (!(i instanceof n))
                                  try {
                                      i = n[a.responseDelimited ? "decodeDelimited" : "decode"](i)
                                  } catch (e) {
                                      return a.emit("error", e, t),
                                      r(e)
                                  }
                              return a.emit("data", i, t),
                              r(null, i)
                          })
                      } catch (e) {
                          return a.emit("error", e, t),
                          setTimeout(function() {
                              r(e)
                          }, 0),
                          undefined
                      }
                  }
                  ,
                  n.prototype.end = function(e) {
                      return this.rpcImpl && (e || this.rpcImpl(null, null, null),
                      this.rpcImpl = null,
                      this.emit("end").off()),
                      this
                  }
              }
              , {
                  35: 35
              }],
              30: [function(e, t, i) {
                  t.exports = a;
                  var s = e(21);
                  ((a.prototype = Object.create(s.prototype)).constructor = a).className = "Service";
                  var n = e(20)
                    , o = e(33)
                    , r = e(28);
                  function a(e, t) {
                      s.call(this, e, t),
                      this.methods = {},
                      this._methodsArray = null
                  }
                  function d(e) {
                      return e._methodsArray = null,
                      e
                  }
                  a.fromJSON = function(e, t) {
                      var i = new a(e,t.options);
                      if (t.methods)
                          for (var s = Object.keys(t.methods), o = 0; o < s.length; ++o)
                              i.add(n.fromJSON(s[o], t.methods[s[o]]));
                      return t.nested && i.addJSON(t.nested),
                      i.comment = t.comment,
                      i
                  }
                  ,
                  a.prototype.toJSON = function(e) {
                      var t = s.prototype.toJSON.call(this, e)
                        , i = !!e && !!e.keepComments;
                      return o.toObject(["options", t && t.options || undefined, "methods", s.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || undefined, "comment", i ? this.comment : undefined])
                  }
                  ,
                  Object.defineProperty(a.prototype, "methodsArray", {
                      get: function() {
                          return this._methodsArray || (this._methodsArray = o.toArray(this.methods))
                      }
                  }),
                  a.prototype.get = function(e) {
                      return this.methods[e] || s.prototype.get.call(this, e)
                  }
                  ,
                  a.prototype.resolveAll = function() {
                      for (var e = this.methodsArray, t = 0; t < e.length; ++t)
                          e[t].resolve();
                      return s.prototype.resolve.call(this)
                  }
                  ,
                  a.prototype.add = function(e) {
                      if (this.get(e.name))
                          throw Error("duplicate name '" + e.name + "' in " + this);
                      return e instanceof n ? (this.methods[e.name] = e,
                      e.parent = this,
                      d(this)) : s.prototype.add.call(this, e)
                  }
                  ,
                  a.prototype.remove = function(e) {
                      if (e instanceof n) {
                          if (this.methods[e.name] !== e)
                              throw Error(e + " is not a member of " + this);
                          return delete this.methods[e.name],
                          e.parent = null,
                          d(this)
                      }
                      return s.prototype.remove.call(this, e)
                  }
                  ,
                  a.prototype.create = function(e, t, i) {
                      for (var s, n = new r.Service(e,t,i), a = 0; a < this.methodsArray.length; ++a) {
                          var d = o.lcFirst((s = this._methodsArray[a]).resolve().name).replace(/[^$\w_]/g, "");
                          n[d] = o.codegen(["r", "c"], o.isReserved(d) ? d + "_" : d)("return this.rpcCall(m,q,s,r,c)")({
                              m: s,
                              q: s.resolvedRequestType.ctor,
                              s: s.resolvedResponseType.ctor
                          })
                      }
                      return n
                  }
              }
              , {
                  20: 20,
                  21: 21,
                  28: 28,
                  33: 33
              }],
              31: [function(e, t, i) {
                  t.exports = m;
                  var s = e(21);
                  ((m.prototype = Object.create(s.prototype)).constructor = m).className = "Type";
                  var n = e(14)
                    , o = e(23)
                    , r = e(15)
                    , a = e(18)
                    , d = e(30)
                    , l = e(19)
                    , p = e(24)
                    , c = e(38)
                    , u = e(33)
                    , h = e(13)
                    , g = e(12)
                    , f = e(36)
                    , y = e(11)
                    , _ = e(37);
                  function m(e, t) {
                      s.call(this, e, t),
                      this.fields = {},
                      this.oneofs = undefined,
                      this.extensions = undefined,
                      this.reserved = undefined,
                      this.group = undefined,
                      this._fieldsById = null,
                      this._fieldsArray = null,
                      this._oneofsArray = null,
                      this._ctor = null
                  }
                  function v(e) {
                      return e._fieldsById = e._fieldsArray = e._oneofsArray = null,
                      delete e.encode,
                      delete e.decode,
                      delete e.verify,
                      e
                  }
                  Object.defineProperties(m.prototype, {
                      fieldsById: {
                          get: function() {
                              if (this._fieldsById)
                                  return this._fieldsById;
                              this._fieldsById = {};
                              for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
                                  var i = this.fields[e[t]]
                                    , s = i.id;
                                  if (this._fieldsById[s])
                                      throw Error("duplicate id " + s + " in " + this);
                                  this._fieldsById[s] = i
                              }
                              return this._fieldsById
                          }
                      },
                      fieldsArray: {
                          get: function() {
                              return this._fieldsArray || (this._fieldsArray = u.toArray(this.fields))
                          }
                      },
                      oneofsArray: {
                          get: function() {
                              return this._oneofsArray || (this._oneofsArray = u.toArray(this.oneofs))
                          }
                      },
                      ctor: {
                          get: function() {
                              return this._ctor || (this.ctor = m.generateConstructor(this)())
                          },
                          set: function(e) {
                              var t = e.prototype;
                              t instanceof l || ((e.prototype = new l).constructor = e,
                              u.merge(e.prototype, t)),
                              e.$type = e.prototype.$type = this,
                              u.merge(e, l, !0),
                              this._ctor = e;
                              for (var i = 0; i < this.fieldsArray.length; ++i)
                                  this._fieldsArray[i].resolve();
                              var s = {};
                              for (i = 0; i < this.oneofsArray.length; ++i)
                                  s[this._oneofsArray[i].resolve().name] = {
                                      get: u.oneOfGetter(this._oneofsArray[i].oneof),
                                      set: u.oneOfSetter(this._oneofsArray[i].oneof)
                                  };
                              i && Object.defineProperties(e.prototype, s)
                          }
                      }
                  }),
                  m.generateConstructor = function(e) {
                      for (var t, i = u.codegen(["p"], e.name), s = 0; s < e.fieldsArray.length; ++s)
                          (t = e._fieldsArray[s]).map ? i("this%s={}", u.safeProp(t.name)) : t.repeated && i("this%s=[]", u.safeProp(t.name));
                      return i("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")
                  }
                  ,
                  m.fromJSON = function(e, t) {
                      var i = new m(e,t.options);
                      i.extensions = t.extensions,
                      i.reserved = t.reserved;
                      for (var l = Object.keys(t.fields), p = 0; p < l.length; ++p)
                          i.add((void 0 !== t.fields[l[p]].keyType ? a.fromJSON : r.fromJSON)(l[p], t.fields[l[p]]));
                      if (t.oneofs)
                          for (l = Object.keys(t.oneofs),
                          p = 0; p < l.length; ++p)
                              i.add(o.fromJSON(l[p], t.oneofs[l[p]]));
                      if (t.nested)
                          for (l = Object.keys(t.nested),
                          p = 0; p < l.length; ++p) {
                              var c = t.nested[l[p]];
                              i.add((c.id !== undefined ? r.fromJSON : c.fields !== undefined ? m.fromJSON : c.values !== undefined ? n.fromJSON : c.methods !== undefined ? d.fromJSON : s.fromJSON)(l[p], c))
                          }
                      return t.extensions && t.extensions.length && (i.extensions = t.extensions),
                      t.reserved && t.reserved.length && (i.reserved = t.reserved),
                      t.group && (i.group = !0),
                      t.comment && (i.comment = t.comment),
                      i
                  }
                  ,
                  m.prototype.toJSON = function(e) {
                      var t = s.prototype.toJSON.call(this, e)
                        , i = !!e && !!e.keepComments;
                      return u.toObject(["options", t && t.options || undefined, "oneofs", s.arrayToJSON(this.oneofsArray, e), "fields", s.arrayToJSON(this.fieldsArray.filter(function(e) {
                          return !e.declaringField
                      }), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", t && t.nested || undefined, "comment", i ? this.comment : undefined])
                  }
                  ,
                  m.prototype.resolveAll = function() {
                      for (var e = this.fieldsArray, t = 0; t < e.length; )
                          e[t++].resolve();
                      var i = this.oneofsArray;
                      for (t = 0; t < i.length; )
                          i[t++].resolve();
                      return s.prototype.resolveAll.call(this)
                  }
                  ,
                  m.prototype.get = function(e) {
                      return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null
                  }
                  ,
                  m.prototype.add = function(e) {
                      if (this.get(e.name))
                          throw Error("duplicate name '" + e.name + "' in " + this);
                      if (e instanceof r && e.extend === undefined) {
                          if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id])
                              throw Error("duplicate id " + e.id + " in " + this);
                          if (this.isReservedId(e.id))
                              throw Error("id " + e.id + " is reserved in " + this);
                          if (this.isReservedName(e.name))
                              throw Error("name '" + e.name + "' is reserved in " + this);
                          return e.parent && e.parent.remove(e),
                          this.fields[e.name] = e,
                          e.message = this,
                          e.onAdd(this),
                          v(this)
                      }
                      return e instanceof o ? (this.oneofs || (this.oneofs = {}),
                      this.oneofs[e.name] = e,
                      e.onAdd(this),
                      v(this)) : s.prototype.add.call(this, e)
                  }
                  ,
                  m.prototype.remove = function(e) {
                      if (e instanceof r && e.extend === undefined) {
                          if (!this.fields || this.fields[e.name] !== e)
                              throw Error(e + " is not a member of " + this);
                          return delete this.fields[e.name],
                          e.parent = null,
                          e.onRemove(this),
                          v(this)
                      }
                      if (e instanceof o) {
                          if (!this.oneofs || this.oneofs[e.name] !== e)
                              throw Error(e + " is not a member of " + this);
                          return delete this.oneofs[e.name],
                          e.parent = null,
                          e.onRemove(this),
                          v(this)
                      }
                      return s.prototype.remove.call(this, e)
                  }
                  ,
                  m.prototype.isReservedId = function(e) {
                      return s.isReservedId(this.reserved, e)
                  }
                  ,
                  m.prototype.isReservedName = function(e) {
                      return s.isReservedName(this.reserved, e)
                  }
                  ,
                  m.prototype.create = function(e) {
                      return new this.ctor(e)
                  }
                  ,
                  m.prototype.setup = function() {
                      for (var e = this.fullName, t = [], i = 0; i < this.fieldsArray.length; ++i)
                          t.push(this._fieldsArray[i].resolve().resolvedType);
                      this.encode = h(this)({
                          Writer: c,
                          types: t,
                          util: u
                      }),
                      this.decode = g(this)({
                          Reader: p,
                          types: t,
                          util: u
                      }),
                      this.verify = f(this)({
                          types: t,
                          util: u
                      }),
                      this.fromObject = y.fromObject(this)({
                          types: t,
                          util: u
                      }),
                      this.toObject = y.toObject(this)({
                          types: t,
                          util: u
                      });
                      var s = _[e];
                      if (s) {
                          var n = Object.create(this);
                          n.fromObject = this.fromObject,
                          this.fromObject = s.fromObject.bind(n),
                          n.toObject = this.toObject,
                          this.toObject = s.toObject.bind(n)
                      }
                      return this
                  }
                  ,
                  m.prototype.encode = function(e, t) {
                      return this.setup().encode(e, t)
                  }
                  ,
                  m.prototype.encodeDelimited = function(e, t) {
                      return this.encode(e, t && t.len ? t.fork() : t).ldelim()
                  }
                  ,
                  m.prototype.decode = function(e, t) {
                      return this.setup().decode(e, t)
                  }
                  ,
                  m.prototype.decodeDelimited = function(e) {
                      return e instanceof p || (e = p.create(e)),
                      this.decode(e, e.uint32())
                  }
                  ,
                  m.prototype.verify = function(e) {
                      return this.setup().verify(e)
                  }
                  ,
                  m.prototype.fromObject = function(e) {
                      return this.setup().fromObject(e)
                  }
                  ,
                  m.prototype.toObject = function(e, t) {
                      return this.setup().toObject(e, t)
                  }
                  ,
                  m.d = function(e) {
                      return function(t) {
                          u.decorateType(t, e)
                      }
                  }
              }
              , {
                  11: 11,
                  12: 12,
                  13: 13,
                  14: 14,
                  15: 15,
                  18: 18,
                  19: 19,
                  21: 21,
                  23: 23,
                  24: 24,
                  30: 30,
                  33: 33,
                  36: 36,
                  37: 37,
                  38: 38
              }],
              32: [function(e, t, i) {
                  var s = i
                    , n = e(33)
                    , o = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
                  function r(e, t) {
                      var i = 0
                        , s = {};
                      for (t |= 0; i < e.length; )
                          s[o[i + t]] = e[i++];
                      return s
                  }
                  s.basic = r([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]),
                  s.defaults = r([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", n.emptyArray, null]),
                  s.long = r([0, 0, 0, 1, 1], 7),
                  s.mapKey = r([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2),
                  s.packed = r([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
              }
              , {
                  33: 33
              }],
              33: [function(e, t, i) {
                  var s, n, o = t.exports = e(35), r = e(27);
                  o.codegen = e(3),
                  o.fetch = e(5),
                  o.path = e(8),
                  o.fs = o.inquire("fs"),
                  o.toArray = function(e) {
                      if (e) {
                          for (var t = Object.keys(e), i = Array(t.length), s = 0; s < t.length; )
                              i[s] = e[t[s++]];
                          return i
                      }
                      return []
                  }
                  ,
                  o.toObject = function(e) {
                      for (var t = {}, i = 0; i < e.length; ) {
                          var s = e[i++]
                            , n = e[i++];
                          undefined !== n && (t[s] = n)
                      }
                      return t
                  }
                  ;
                  var a = /\\/g
                    , d = /"/g;
                  o.isReserved = function(e) {
                      return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e)
                  }
                  ,
                  o.safeProp = function(e) {
                      return !/^[$\w_]+$/.test(e) || o.isReserved(e) ? '["' + e.replace(a, "\\\\").replace(d, '\\"') + '"]' : "." + e
                  }
                  ,
                  o.ucFirst = function(e) {
                      return e.charAt(0).toUpperCase() + e.substring(1)
                  }
                  ;
                  var l = /_([a-z])/g;
                  o.camelCase = function(e) {
                      return e.substring(0, 1) + e.substring(1).replace(l, function(e, t) {
                          return t.toUpperCase()
                      })
                  }
                  ,
                  o.compareFieldsById = function(e, t) {
                      return e.id - t.id
                  }
                  ,
                  o.decorateType = function(t, i) {
                      if (t.$type)
                          return i && t.$type.name !== i && (o.decorateRoot.remove(t.$type),
                          t.$type.name = i,
                          o.decorateRoot.add(t.$type)),
                          t.$type;
                      s || (s = e(31));
                      var n = new s(i || t.name);
                      return o.decorateRoot.add(n),
                      n.ctor = t,
                      Object.defineProperty(t, "$type", {
                          value: n,
                          enumerable: !1
                      }),
                      Object.defineProperty(t.prototype, "$type", {
                          value: n,
                          enumerable: !1
                      }),
                      n
                  }
                  ;
                  var p = 0;
                  o.decorateEnum = function(t) {
                      if (t.$type)
                          return t.$type;
                      n || (n = e(14));
                      var i = new n("Enum" + p++,t);
                      return o.decorateRoot.add(i),
                      Object.defineProperty(t, "$type", {
                          value: i,
                          enumerable: !1
                      }),
                      i
                  }
                  ,
                  o.setProperty = function(e, t, i) {
                      function s(e, t, i) {
                          var n = t.shift();
                          if ("__proto__" === n)
                              return e;
                          if (t.length > 0)
                              e[n] = s(e[n] || {}, t, i);
                          else {
                              var o = e[n];
                              o && (i = [].concat(o).concat(i)),
                              e[n] = i
                          }
                          return e
                      }
                      if ("object" != typeof e)
                          throw TypeError("dst must be an object");
                      if (!t)
                          throw TypeError("path must be specified");
                      return s(e, t = t.split("."), i)
                  }
                  ,
                  Object.defineProperty(o, "decorateRoot", {
                      get: function() {
                          return r.decorated || (r.decorated = new (e(26)))
                      }
                  })
              }
              , {
                  14: 14,
                  26: 26,
                  27: 27,
                  3: 3,
                  31: 31,
                  35: 35,
                  5: 5,
                  8: 8
              }],
              34: [function(e, t, i) {
                  t.exports = n;
                  var s = e(35);
                  function n(e, t) {
                      this.lo = e >>> 0,
                      this.hi = t >>> 0
                  }
                  var o = n.zero = new n(0,0);
                  o.toNumber = function() {
                      return 0
                  }
                  ,
                  o.zzEncode = o.zzDecode = function() {
                      return this
                  }
                  ,
                  o.length = function() {
                      return 1
                  }
                  ;
                  var r = n.zeroHash = "\0\0\0\0\0\0\0\0";
                  n.fromNumber = function(e) {
                      if (0 === e)
                          return o;
                      var t = e < 0;
                      t && (e = -e);
                      var i = e >>> 0
                        , s = (e - i) / 0x100000000 >>> 0;
                      return t && (s = ~s >>> 0,
                      i = ~i >>> 0,
                      ++i > 0xffffffff && (i = 0,
                      ++s > 0xffffffff && (s = 0))),
                      new n(i,s)
                  }
                  ,
                  n.from = function(e) {
                      if ("number" == typeof e)
                          return n.fromNumber(e);
                      if (s.isString(e)) {
                          if (!s.Long)
                              return n.fromNumber(parseInt(e, 10));
                          e = s.Long.fromString(e)
                      }
                      return e.low || e.high ? new n(e.low >>> 0,e.high >>> 0) : o
                  }
                  ,
                  n.prototype.toNumber = function(e) {
                      if (!e && this.hi >>> 31) {
                          var t = ~this.lo + 1 >>> 0
                            , i = ~this.hi >>> 0;
                          return t || (i = i + 1 >>> 0),
                          -(t + 0x100000000 * i)
                      }
                      return this.lo + 0x100000000 * this.hi
                  }
                  ,
                  n.prototype.toLong = function(e) {
                      return s.Long ? new s.Long(0 | this.lo,0 | this.hi,!!e) : {
                          low: 0 | this.lo,
                          high: 0 | this.hi,
                          unsigned: !!e
                      }
                  }
                  ;
                  var a = String.prototype.charCodeAt;
                  n.fromHash = function(e) {
                      return e === r ? o : new n((a.call(e, 0) | a.call(e, 1) << 8 | a.call(e, 2) << 16 | a.call(e, 3) << 24) >>> 0,(a.call(e, 4) | a.call(e, 5) << 8 | a.call(e, 6) << 16 | a.call(e, 7) << 24) >>> 0)
                  }
                  ,
                  n.prototype.toHash = function() {
                      return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
                  }
                  ,
                  n.prototype.zzEncode = function() {
                      var e = this.hi >> 31;
                      return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0,
                      this.lo = (this.lo << 1 ^ e) >>> 0,
                      this
                  }
                  ,
                  n.prototype.zzDecode = function() {
                      var e = -(1 & this.lo);
                      return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0,
                      this.hi = (this.hi >>> 1 ^ e) >>> 0,
                      this
                  }
                  ,
                  n.prototype.length = function() {
                      var e = this.lo
                        , t = (this.lo >>> 28 | this.hi << 4) >>> 0
                        , i = this.hi >>> 24;
                      return 0 === i ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : i < 128 ? 9 : 10
                  }
              }
              , {
                  35: 35
              }],
              35: [function(e, t, i) {
                  var s = i;
                  function n(e, t, i) {
                      for (var s = Object.keys(t), n = 0; n < s.length; ++n)
                          e[s[n]] !== undefined && i || (e[s[n]] = t[s[n]]);
                      return e
                  }
                  function o(e) {
                      function t(e, i) {
                          if (!(this instanceof t))
                              return new t(e,i);
                          Object.defineProperty(this, "message", {
                              get: function() {
                                  return e
                              }
                          }),
                          Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
                              value: Error().stack || ""
                          }),
                          i && n(this, i)
                      }
                      return t.prototype = Object.create(Error.prototype, {
                          constructor: {
                              value: t,
                              writable: !0,
                              enumerable: !1,
                              configurable: !0
                          },
                          name: {
                              get: () => e,
                              set: undefined,
                              enumerable: !1,
                              configurable: !0
                          },
                          toString: {
                              value() {
                                  return this.name + ": " + this.message
                              },
                              writable: !0,
                              enumerable: !1,
                              configurable: !0
                          }
                      }),
                      t
                  }
                  s.asPromise = e(1),
                  s.base64 = e(2),
                  s.EventEmitter = e(4),
                  s.float = e(6),
                  s.inquire = e(7),
                  s.utf8 = e(10),
                  s.pool = e(9),
                  s.LongBits = e(34),
                  s.isNode = !!(void 0 !== __webpack_require__.g && __webpack_require__.g && __webpack_require__.g.process && __webpack_require__.g.process.versions && __webpack_require__.g.process.versions.node),
                  s.global = s.isNode && __webpack_require__.g || "undefined" != typeof window && window || "undefined" != typeof self && self || this,
                  s.emptyArray = Object.freeze ? Object.freeze([]) : [],
                  s.emptyObject = Object.freeze ? Object.freeze({}) : {},
                  s.isInteger = Number.isInteger || function(e) {
                      return "number" == typeof e && isFinite(e) && Math.floor(e) === e
                  }
                  ,
                  s.isString = function(e) {
                      return "string" == typeof e || e instanceof String
                  }
                  ,
                  s.isObject = function(e) {
                      return e && "object" == typeof e
                  }
                  ,
                  s.isset = s.isSet = function(e, t) {
                      var i = e[t];
                      return !!(null != i && e.hasOwnProperty(t)) && ("object" != typeof i || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
                  }
                  ,
                  s.Buffer = function() {
                      try {
                          var e = s.inquire("buffer").Buffer;
                          return e.prototype.utf8Write ? e : null
                      } catch (e) {
                          return null
                      }
                  }(),
                  s._Buffer_from = null,
                  s._Buffer_allocUnsafe = null,
                  s.newBuffer = function(e) {
                      return "number" == typeof e ? s.Buffer ? s._Buffer_allocUnsafe(e) : new s.Array(e) : s.Buffer ? s._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e)
                  }
                  ,
                  s.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                  s.Long = s.global.dcodeIO && s.global.dcodeIO.Long || s.global.Long || s.inquire("long"),
                  s.key2Re = /^true|false|0|1$/,
                  s.key32Re = /^-?(?:0|[1-9][0-9]*)$/,
                  s.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,
                  s.longToHash = function(e) {
                      return e ? s.LongBits.from(e).toHash() : s.LongBits.zeroHash
                  }
                  ,
                  s.longFromHash = function(e, t) {
                      var i = s.LongBits.fromHash(e);
                      return s.Long ? s.Long.fromBits(i.lo, i.hi, t) : i.toNumber(!!t)
                  }
                  ,
                  s.merge = n,
                  s.lcFirst = function(e) {
                      return e.charAt(0).toLowerCase() + e.substring(1)
                  }
                  ,
                  s.newError = o,
                  s.ProtocolError = o("ProtocolError"),
                  s.oneOfGetter = function(e) {
                      for (var t = {}, i = 0; i < e.length; ++i)
                          t[e[i]] = 1;
                      return function() {
                          for (var e = Object.keys(this), i = e.length - 1; i > -1; --i)
                              if (1 === t[e[i]] && this[e[i]] !== undefined && null !== this[e[i]])
                                  return e[i]
                      }
                  }
                  ,
                  s.oneOfSetter = function(e) {
                      return function(t) {
                          for (var i = 0; i < e.length; ++i)
                              e[i] !== t && delete this[e[i]]
                      }
                  }
                  ,
                  s.toJSONOptions = {
                      longs: String,
                      enums: String,
                      bytes: String,
                      json: !0
                  },
                  s._configure = function() {
                      var e = s.Buffer;
                      if (!e) {
                          s._Buffer_from = s._Buffer_allocUnsafe = null;
                          return
                      }
                      s._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, i) {
                          return new e(t,i)
                      }
                      ,
                      s._Buffer_allocUnsafe = e.allocUnsafe || function(t) {
                          return new e(t)
                      }
                  }
              }
              , {
                  1: 1,
                  10: 10,
                  2: 2,
                  34: 34,
                  4: 4,
                  6: 6,
                  7: 7,
                  9: 9
              }],
              36: [function(e, t, i) {
                  t.exports = d;
                  var s = e(14)
                    , n = e(33);
                  function o(e, t) {
                      return e.name + ": " + t + (e.repeated && "array" !== t ? "[]" : e.map && "object" !== t ? "{k:" + e.keyType + "}" : "") + " expected"
                  }
                  function r(e, t, i, n) {
                      if (t.resolvedType) {
                          if (t.resolvedType instanceof s) {
                              e("switch(%s){", n)("default:")("return%j", o(t, "enum value"));
                              for (var r = Object.keys(t.resolvedType.values), a = 0; a < r.length; ++a)
                                  e("case %i:", t.resolvedType.values[r[a]]);
                              e("break")("}")
                          } else
                              e("{")("var e=types[%i].verify(%s);", i, n)("if(e)")("return%j+e", t.name + ".")("}")
                      } else
                          switch (t.type) {
                          case "int32":
                          case "uint32":
                          case "sint32":
                          case "fixed32":
                          case "sfixed32":
                              e("if(!util.isInteger(%s))", n)("return%j", o(t, "integer"));
                              break;
                          case "int64":
                          case "uint64":
                          case "sint64":
                          case "fixed64":
                          case "sfixed64":
                              e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", n, n, n, n)("return%j", o(t, "integer|Long"));
                              break;
                          case "float":
                          case "double":
                              e('if(typeof %s!=="number")', n)("return%j", o(t, "number"));
                              break;
                          case "bool":
                              e('if(typeof %s!=="boolean")', n)("return%j", o(t, "boolean"));
                              break;
                          case "string":
                              e("if(!util.isString(%s))", n)("return%j", o(t, "string"));
                              break;
                          case "bytes":
                              e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', n, n, n)("return%j", o(t, "buffer"))
                          }
                      return e
                  }
                  function a(e, t, i) {
                      switch (t.keyType) {
                      case "int32":
                      case "uint32":
                      case "sint32":
                      case "fixed32":
                      case "sfixed32":
                          e("if(!util.key32Re.test(%s))", i)("return%j", o(t, "integer key"));
                          break;
                      case "int64":
                      case "uint64":
                      case "sint64":
                      case "fixed64":
                      case "sfixed64":
                          e("if(!util.key64Re.test(%s))", i)("return%j", o(t, "integer|Long key"));
                          break;
                      case "bool":
                          e("if(!util.key2Re.test(%s))", i)("return%j", o(t, "boolean key"))
                      }
                      return e
                  }
                  function d(e) {
                      var t = n.codegen(["m"], e.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected")
                        , i = e.oneofsArray
                        , s = {};
                      i.length && t("var p={}");
                      for (var d = 0; d < e.fieldsArray.length; ++d) {
                          var l = e._fieldsArray[d].resolve()
                            , p = "m" + n.safeProp(l.name);
                          if (l.optional && t("if(%s!=null&&m.hasOwnProperty(%j)){", p, l.name),
                          l.map)
                              t("if(!util.isObject(%s))", p)("return%j", o(l, "object"))("var k=Object.keys(%s)", p)("for(var i=0;i<k.length;++i){"),
                              a(t, l, "k[i]"),
                              r(t, l, d, p + "[k[i]]")("}");
                          else if (l.repeated)
                              t("if(!Array.isArray(%s))", p)("return%j", o(l, "array"))("for(var i=0;i<%s.length;++i){", p),
                              r(t, l, d, p + "[i]")("}");
                          else {
                              if (l.partOf) {
                                  var c = n.safeProp(l.partOf.name);
                                  1 === s[l.partOf.name] && t("if(p%s===1)", c)("return%j", l.partOf.name + ": multiple values"),
                                  s[l.partOf.name] = 1,
                                  t("p%s=1", c)
                              }
                              r(t, l, d, p)
                          }
                          l.optional && t("}")
                      }
                      return t("return null")
                  }
              }
              , {
                  14: 14,
                  33: 33
              }],
              37: [function(e, t, i) {
                  var s = i
                    , n = e(19);
                  s[".google.protobuf.Any"] = {
                      fromObject: function(e) {
                          if (e && e["@type"]) {
                              var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1)
                                , i = this.lookup(t);
                              if (i) {
                                  var s = "." === e["@type"].charAt(0) ? e["@type"].slice(1) : e["@type"];
                                  return -1 === s.indexOf("/") && (s = "/" + s),
                                  this.create({
                                      type_url: s,
                                      value: i.encode(i.fromObject(e)).finish()
                                  })
                              }
                          }
                          return this.fromObject(e)
                      },
                      toObject: function(e, t) {
                          var i = "type.googleapis.com/"
                            , s = ""
                            , o = "";
                          if (t && t.json && e.type_url && e.value) {
                              o = e.type_url.substring(e.type_url.lastIndexOf("/") + 1),
                              s = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
                              var r = this.lookup(o);
                              r && (e = r.decode(e.value))
                          }
                          if (!(e instanceof this.ctor) && e instanceof n) {
                              var a = e.$type.toObject(e, t)
                                , d = "." === e.$type.fullName[0] ? e.$type.fullName.slice(1) : e.$type.fullName;
                              return "" === s && (s = i),
                              o = s + d,
                              a["@type"] = o,
                              a
                          }
                          return this.toObject(e, t)
                      }
                  }
              }
              , {
                  19: 19
              }],
              38: [function(e, t, i) {
                  t.exports = c;
                  var s, n = e(35), o = n.LongBits, r = n.base64, a = n.utf8;
                  function d(e, t, i) {
                      this.fn = e,
                      this.len = t,
                      this.next = undefined,
                      this.val = i
                  }
                  function l() {}
                  function p(e) {
                      this.head = e.head,
                      this.tail = e.tail,
                      this.len = e.len,
                      this.next = e.states
                  }
                  function c() {
                      this.len = 0,
                      this.head = new d(l,0,0),
                      this.tail = this.head,
                      this.states = null
                  }
                  var u = function() {
                      return n.Buffer ? function() {
                          return (c.create = function() {
                              return new s
                          }
                          )()
                      }
                      : function() {
                          return new c
                      }
                  };
                  function h(e, t, i) {
                      t[i] = 255 & e
                  }
                  function g(e, t, i) {
                      for (; e > 127; )
                          t[i++] = 127 & e | 128,
                          e >>>= 7;
                      t[i] = e
                  }
                  function f(e, t) {
                      this.len = e,
                      this.next = undefined,
                      this.val = t
                  }
                  function y(e, t, i) {
                      for (; e.hi; )
                          t[i++] = 127 & e.lo | 128,
                          e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0,
                          e.hi >>>= 7;
                      for (; e.lo > 127; )
                          t[i++] = 127 & e.lo | 128,
                          e.lo = e.lo >>> 7;
                      t[i++] = e.lo
                  }
                  function _(e, t, i) {
                      t[i] = 255 & e,
                      t[i + 1] = e >>> 8 & 255,
                      t[i + 2] = e >>> 16 & 255,
                      t[i + 3] = e >>> 24
                  }
                  c.create = u(),
                  c.alloc = function(e) {
                      return new n.Array(e)
                  }
                  ,
                  n.Array !== Array && (c.alloc = n.pool(c.alloc, n.Array.prototype.subarray)),
                  c.prototype._push = function(e, t, i) {
                      return this.tail = this.tail.next = new d(e,t,i),
                      this.len += t,
                      this
                  }
                  ,
                  f.prototype = Object.create(d.prototype),
                  f.prototype.fn = g,
                  c.prototype.uint32 = function(e) {
                      return this.len += (this.tail = this.tail.next = new f((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 0x10000000 ? 4 : 5,e)).len,
                      this
                  }
                  ,
                  c.prototype.int32 = function(e) {
                      return e < 0 ? this._push(y, 10, o.fromNumber(e)) : this.uint32(e)
                  }
                  ,
                  c.prototype.sint32 = function(e) {
                      return this.uint32((e << 1 ^ e >> 31) >>> 0)
                  }
                  ,
                  c.prototype.uint64 = function(e) {
                      var t = o.from(e);
                      return this._push(y, t.length(), t)
                  }
                  ,
                  c.prototype.int64 = c.prototype.uint64,
                  c.prototype.sint64 = function(e) {
                      var t = o.from(e).zzEncode();
                      return this._push(y, t.length(), t)
                  }
                  ,
                  c.prototype.bool = function(e) {
                      return this._push(h, 1, +!!e)
                  }
                  ,
                  c.prototype.fixed32 = function(e) {
                      return this._push(_, 4, e >>> 0)
                  }
                  ,
                  c.prototype.sfixed32 = c.prototype.fixed32,
                  c.prototype.fixed64 = function(e) {
                      var t = o.from(e);
                      return this._push(_, 4, t.lo)._push(_, 4, t.hi)
                  }
                  ,
                  c.prototype.sfixed64 = c.prototype.fixed64,
                  c.prototype.float = function(e) {
                      return this._push(n.float.writeFloatLE, 4, e)
                  }
                  ,
                  c.prototype.double = function(e) {
                      return this._push(n.float.writeDoubleLE, 8, e)
                  }
                  ;
                  var m = n.Array.prototype.set ? function(e, t, i) {
                      t.set(e, i)
                  }
                  : function(e, t, i) {
                      for (var s = 0; s < e.length; ++s)
                          t[i + s] = e[s]
                  }
                  ;
                  c.prototype.bytes = function(e) {
                      var t = e.length >>> 0;
                      if (!t)
                          return this._push(h, 1, 0);
                      if (n.isString(e)) {
                          var i = c.alloc(t = r.length(e));
                          r.decode(e, i, 0),
                          e = i
                      }
                      return this.uint32(t)._push(m, t, e)
                  }
                  ,
                  c.prototype.string = function(e) {
                      var t = a.length(e);
                      return t ? this.uint32(t)._push(a.write, t, e) : this._push(h, 1, 0)
                  }
                  ,
                  c.prototype.fork = function() {
                      return this.states = new p(this),
                      this.head = this.tail = new d(l,0,0),
                      this.len = 0,
                      this
                  }
                  ,
                  c.prototype.reset = function() {
                      return this.states ? (this.head = this.states.head,
                      this.tail = this.states.tail,
                      this.len = this.states.len,
                      this.states = this.states.next) : (this.head = this.tail = new d(l,0,0),
                      this.len = 0),
                      this
                  }
                  ,
                  c.prototype.ldelim = function() {
                      var e = this.head
                        , t = this.tail
                        , i = this.len;
                      return this.reset().uint32(i),
                      i && (this.tail.next = e.next,
                      this.tail = t,
                      this.len += i),
                      this
                  }
                  ,
                  c.prototype.finish = function() {
                      for (var e = this.head.next, t = this.constructor.alloc(this.len), i = 0; e; )
                          e.fn(e.val, t, i),
                          i += e.len,
                          e = e.next;
                      return t
                  }
                  ,
                  c._configure = function(e) {
                      s = e,
                      c.create = u(),
                      s._configure()
                  }
              }
              , {
                  35: 35
              }],
              39: [function(e, t, i) {
                  t.exports = o;
                  var s = e(38);
                  (o.prototype = Object.create(s.prototype)).constructor = o;
                  var n = e(35);
                  function o() {
                      s.call(this)
                  }
                  function r(e, t, i) {
                      e.length < 40 ? n.utf8.write(e, t, i) : t.utf8Write ? t.utf8Write(e, i) : t.write(e, i)
                  }
                  o._configure = function() {
                      o.alloc = n._Buffer_allocUnsafe,
                      o.writeBytesBuffer = n.Buffer && n.Buffer.prototype instanceof Uint8Array && "set" === n.Buffer.prototype.set.name ? function(e, t, i) {
                          t.set(e, i)
                      }
                      : function(e, t, i) {
                          if (e.copy)
                              e.copy(t, i, 0, e.length);
                          else
                              for (var s = 0; s < e.length; )
                                  t[i++] = e[s++]
                      }
                  }
                  ,
                  o.prototype.bytes = function(e) {
                      n.isString(e) && (e = n._Buffer_from(e, "base64"));
                      var t = e.length >>> 0;
                      return this.uint32(t),
                      t && this._push(o.writeBytesBuffer, t, e),
                      this
                  }
                  ,
                  o.prototype.string = function(e) {
                      var t = n.Buffer.byteLength(e);
                      return this.uint32(t),
                      t && this._push(r, t, e),
                      this
                  }
                  ,
                  o._configure()
              }
              , {
                  35: 35,
                  38: 38
              }]
          }, {}, [16])
      }()
  },
  837662: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              is_turn_on: {
                  type: "bool",
                  id: 1
              },
              accept_multi_linkmic: {
                  type: "bool",
                  id: 2
              },
              accept_not_follower_invite: {
                  type: "bool",
                  id: 3
              },
              allow_gift_to_other_anchors: {
                  type: "bool",
                  id: 4
              },
              block_invitation_of_this_live: {
                  type: "bool",
                  id: 5
              },
              receive_friend_multi_host_invites: {
                  type: "bool",
                  id: 6
              },
              receive_friend_multi_host_application: {
                  type: "bool",
                  id: 7
              },
              block_this_multi_host_invites: {
                  type: "bool",
                  id: 8
              },
              block_this_multi_host_application: {
                  type: "bool",
                  id: 9
              },
              receive_not_friend_multi_host_invites: {
                  type: "bool",
                  id: 10
              },
              receive_not_friend_multi_host_application: {
                  type: "bool",
                  id: 11
              },
              allow_live_notice_of_friends: {
                  type: "bool",
                  id: 12
              },
              allow_friend_invites: {
                  type: "bool",
                  id: 13
              },
              allow_suggested_invites: {
                  type: "bool",
                  id: 14
              }
          }
      }
  },
  876170: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              icon: {
                  type: "Image",
                  id: 1
              }
          }
      }
  },
  335664: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              BadgeDisplayType_Unknown: 0,
              BadgeDisplayType_Image: 1,
              BadgeDisplayType_Text: 2,
              BadgeDisplayType_String: 3,
              BadgeDisplayType_Combine: 4
          }
      }
  },
  790030: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              BadgeExhibitionTypeBadge: 0,
              BadgeExhibitionTypeIdentityLabel: 1
          }
      }
  },
  21323: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              BadgePriorityType_Unknown: 0,
              BadgePriorityType_StrongRelation: 10,
              BadgePriorityType_Platform: 20,
              BadgePriorityType_Relation: 30,
              BadgePriorityType_Activity: 40,
              BadgePriorityType_RankList: 50
          }
      }
  },
  831540: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              BadgeSceneType_Unknown: 0,
              BadgeSceneType_Admin: 1,
              BadgeSceneType_FirstRecharge: 2,
              BadgeSceneType_Friends: 3,
              BadgeSceneType_Subscriber: 4,
              BadgeSceneType_Activity: 5,
              BadgeSceneType_Ranklist: 6,
              BadgeSceneType_NewSubscriber: 7,
              BadgeSceneType_UserGrade: 8,
              BadgeSceneType_StateControlledMedia: 9,
              BadgeSceneType_Fans: 10,
              BadgeSceneType_LivePro: 11,
              BadgeSceneType_Anchor: 12
          }
      }
  },
  307188: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          oneofs: {
              Data: {
                  oneof: ["image", "text", "str", "combine"]
              }
          },
          fields: {
              display_type: {
                  type: "BadgeDisplayType",
                  id: 1
              },
              priority_type: {
                  type: "BadgePriorityType",
                  id: 2
              },
              scene_type: {
                  type: "BadgeSceneType",
                  id: 3
              },
              position: {
                  type: "Position",
                  id: 4
              },
              display_status: {
                  type: "DisplayStatus",
                  id: 5
              },
              greyed_by_client: {
                  type: "int64",
                  id: 6
              },
              exhibition_type: {
                  type: "BadgeExhibitionType",
                  id: 7
              },
              OpenWebURL: {
                  type: "string",
                  id: 10
              },
              display: {
                  type: "bool",
                  id: 11
              },
              privilege_log_extra: {
                  type: "PrivilegeLogExtra",
                  id: 12
              },
              is_customized: {
                  type: "bool",
                  id: 24
              },
              image: {
                  type: "ImageBadge",
                  id: 20
              },
              text: {
                  type: "TextBadge",
                  id: 21
              },
              str: {
                  type: "StringBadge",
                  id: 22
              },
              combine: {
                  type: "CombineBadge",
                  id: 23
              }
          }
      }
  },
  467238: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              key: {
                  type: "string",
                  id: 1
              },
              default_pattern: {
                  type: "string",
                  id: 2
              },
              pieces: {
                  rule: "repeated",
                  type: "string",
                  id: 3
              }
          }
      }
  },
  717364: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              BadgeTextPositionUnknown: 0,
              BadgeTextPositionRight: 1,
              BadgeTextPositionBelow: 2
          }
      }
  },
  576215: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              is_turn_on: {
                  type: "bool",
                  id: 1
              },
              accept_not_follower_invite: {
                  type: "bool",
                  id: 2
              },
              allow_gift_to_other_anchors: {
                  type: "bool",
                  id: 3
              }
          }
      }
  },
  559196: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              NO_PERM: 0,
              COHOST_PERM: 1,
              MULTIHOST_PERM: 2
          }
      }
  },
  8710: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              ab_test_type: {
                  type: "CohostABTestType",
                  id: 1
              },
              group: {
                  type: "int64",
                  id: 2
              }
          }
      }
  },
  217362: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              ab_test_list: {
                  rule: "repeated",
                  type: "CohostABTest",
                  id: 1
              }
          }
      }
  },
  158614: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              key: {
                  type: "int64",
                  id: 1
              },
              value: {
                  type: "CohostABTestList",
                  id: 2
              }
          }
      }
  },
  170302: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              COHOST_AB_TEST_TYPE_UNKNOWN: 0,
              COHOST_AB_TEST_TYPE_LINK_TIMEOUT_STRATEGY: 1,
              COHOST_AB_TEST_TYPE_COHOST_RESERVATION: 2,
              COHOST_AB_TEST_TYPE_QUICK_PAIR_NEW_ARCH_SWITCH: 3,
              COHOST_AB_TEST_TYPE_COHOST_INVITATION_TEXT: 4
          }
      }
  },
  774987: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              COHOST_LAYOUT_MODE_NORMAL: 0,
              COHOST_LAYOUT_MODE_SCREEN_SHARE: 1
          }
      }
  },
  207538: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              user_id: {
                  type: "int64",
                  id: 1
              },
              nick_name: {
                  type: "string",
                  id: 2
              },
              avatar_thumb: {
                  type: "webcast.data.Image",
                  id: 3
              },
              linked_time: {
                  type: "int64",
                  id: 4
              },
              play_type: {
                  type: "LinkmicPlayType",
                  id: 5
              },
              room_id: {
                  type: "int64",
                  id: 6
              },
              linkmic_user_status: {
                  type: "LinkmicUserStatus",
                  id: 7
              },
              link_remaining_time: {
                  type: "int64",
                  id: 8
              },
              permission_type: {
                  type: "CoHostPermissoinType",
                  id: 9
              },
              display_id: {
                  type: "string",
                  id: 10
              },
              follow_status: {
                  type: "int64",
                  id: 11
              },
              is_low_version: {
                  type: "bool",
                  id: 12
              },
              rival_user_id: {
                  type: "int64",
                  id: 13
              },
              rival_room_id: {
                  type: "int64",
                  id: 14
              },
              is_initiator: {
                  type: "bool",
                  id: 15
              },
              linkmic_id_str: {
                  type: "string",
                  id: 16
              },
              best_teammate_uid: {
                  type: "int64",
                  id: 17
              },
              has_topic_perm: {
                  type: "bool",
                  id: 18
              },
              inner_channel_id: {
                  type: "int64",
                  id: 19
              }
          }
      }
  },
  488212: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              COHOST_NUDGE_INFO_NONE: 0,
              COHOST_NUDGE_INFO_YOUR_NUDGE: 1,
              COHOST_NUDGE_INFO_NUDGED_YOU: 2
          }
      }
  },
  167172: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              id: {
                  type: "int64",
                  id: 1
              },
              title_key: {
                  type: "string",
                  id: 2
              },
              title_text: {
                  type: "string",
                  id: 3
              },
              liked: {
                  type: "bool",
                  id: 21
              },
              total_heat: {
                  type: "int64",
                  id: 22
              },
              total_rivals: {
                  type: "int64",
                  id: 23
              },
              rivals_avatar: {
                  rule: "repeated",
                  type: "webcast.data.Image",
                  id: 24
              }
          }
      }
  },
  545586: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              display_type: {
                  type: "BadgeDisplayType",
                  id: 1
              },
              icon: {
                  type: "Image",
                  id: 2
              },
              text: {
                  type: "BadgeText",
                  id: 3
              },
              str: {
                  type: "string",
                  id: 4
              },
              padding: {
                  type: "PaddingInfo",
                  id: 5
              },
              font_style: {
                  type: "FontStyle",
                  id: 6
              },
              profile_card_panel: {
                  type: "ProfileCardPanel",
                  id: 7
              },
              background: {
                  type: "CombineBadgeBackground",
                  id: 11
              },
              background_dark_mode: {
                  type: "CombineBadgeBackground",
                  id: 12
              },
              icon_auto_mirrored: {
                  type: "bool",
                  id: 13
              },
              background_auto_mirrored: {
                  type: "bool",
                  id: 14
              },
              public_screen_show_style: {
                  type: "int32",
                  id: 15
              },
              personal_card_show_style: {
                  type: "int32",
                  id: 16
              },
              ranklist_online_audience_show_style: {
                  type: "int32",
                  id: 17
              },
              multi_guest_show_style: {
                  type: "int32",
                  id: 18
              },
              arrow_config: {
                  type: "ArrowConfig",
                  id: 19
              },
              padding_new_font: {
                  type: "PaddingInfo",
                  id: 20
              }
          }
      }
  },
  960416: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              image: {
                  type: "Image",
                  id: 1
              },
              background_color_code: {
                  type: "string",
                  id: 2
              },
              border_color_code: {
                  type: "string",
                  id: 3
              }
          }
      }
  },
  14136: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              method: {
                  type: "string",
                  id: 1
              },
              msg_id: {
                  type: "int64",
                  id: 2
              },
              room_id: {
                  type: "int64",
                  id: 3
              },
              create_time: {
                  type: "int64",
                  id: 4
              },
              monitor: {
                  type: "int32",
                  id: 5
              },
              is_show_msg: {
                  type: "bool",
                  id: 6
              },
              describe: {
                  type: "string",
                  id: 7
              },
              display_text: {
                  type: "webcast.data.Text",
                  id: 8
              },
              fold_type: {
                  type: "int64",
                  id: 9
              },
              anchor_fold_type: {
                  type: "int64",
                  id: 10
              },
              priority_score: {
                  type: "int64",
                  id: 11
              },
              log_id: {
                  type: "string",
                  id: 12
              },
              msg_process_filter_k: {
                  type: "string",
                  id: 13
              },
              msg_process_filter_v: {
                  type: "string",
                  id: 14
              },
              from_idc: {
                  type: "string",
                  id: 15
              },
              to_idc: {
                  type: "string",
                  id: 16
              },
              filter_msg_tags: {
                  rule: "repeated",
                  type: "string",
                  id: 17
              },
              sei: {
                  type: "webcast.data.LiveMessageSEI",
                  id: 18
              },
              depend_root_id: {
                  type: "webcast.data.LiveMessageID",
                  id: 19
              },
              depend_id: {
                  type: "webcast.data.LiveMessageID",
                  id: 20
              },
              anchor_priority_score: {
                  type: "int64",
                  id: 21
              },
              room_message_heat_level: {
                  type: "int64",
                  id: 22
              },
              fold_type_for_web: {
                  type: "int64",
                  id: 23
              },
              anchor_fold_type_for_web: {
                  type: "int64",
                  id: 24
              },
              client_send_time: {
                  type: "int64",
                  id: 25
              },
              dispatch_strategy: {
                  type: "IMDispatchStrategy",
                  id: 26
              }
          }
      }
  },
  909412: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              BlockReasonNone: 0,
              InLinkmic: 100,
              MultiHostFull: 101,
              InCohostLinkmic: 102,
              DealOtherInvite: 103,
              DealOtherApply: 104,
              InPKStatus: 105,
              SelfInPKStatus: 106,
              InCohostInviteApply: 107,
              InAudienceLinkmic: 108,
              WaitingAutoMatch: 109,
              InviteNeedToJoin: 110,
              JoinNeedToInvite: 111,
              InTakeTheStageStatus: 112,
              SelfInTakeTheStageStatus: 113,
              NoLinkmicPermission: 200,
              AnchorLinkmicSettingClosed: 202,
              AnchorLinkmicRefuseNotFollower: 203,
              AnchorLinkmicBlockInvitationOfLive: 204,
              AnchorLinkmicRefuseFriendInvite: 205,
              AnchorLinkmicRefuseFriendApply: 206,
              AnchorLinkmicRefuseNotFriendInvite: 207,
              AnchorLinkmicRefuseNotFriendApply: 208,
              AnchorLinkmicBlockInvitationOfMultiHost: 209,
              AnchorLinkmicBlockApplyOfMultiHost: 210,
              RoomPaused: 300,
              LiveTypeAudio: 301,
              RoomInteractionConflict: 302,
              RivalVersionNotSupport: 303,
              SelfVersionNotSupport: 304,
              MatureThemeMismatch: 305,
              SelfInOfficialChannel: 306,
              RivalInOfficialChannel: 307,
              InOfficialBackupChannel: 308,
              RivalReserveFull: 309,
              AnchorNotLiving: 310,
              AnchorIsSelf: 311,
              PrivateRoom: 312,
              BlockedByRival: 313,
              SelfBlockedRival: 314,
              ViewerRegionNotSupport: 315,
              SubscriberRoom: 316,
              RegionalBlock: 317,
              PenaltyBanned: 318,
              BlockProgramLiveTabRoom: 319,
              NetworkError: 400,
              RoomFilterError: 401
          }
      }
  },
  56363: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              id: {
                  type: "int64",
                  id: 1
              },
              normal_icon_url: {
                  type: "Image",
                  id: 2
              }
          }
      }
  },
  286596: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              DisplayStatusNormal: 0,
              DisplayStatusShadow: 1
          }
      }
  },
  751006: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              round: {
                  type: "int64",
                  id: 1
              },
              title: {
                  type: "string",
                  id: 2
              },
              subtitle: {
                  type: "string",
                  id: 3
              },
              streak_info: {
                  type: "StreakInfo",
                  id: 4
              },
              start_time: {
                  type: "int64",
                  id: 5
              },
              end_time: {
                  type: "int64",
                  id: 6
              },
              announcement_starling_key: {
                  type: "string",
                  id: 7
              },
              description: {
                  type: "string",
                  id: 8
              },
              schema: {
                  type: "string",
                  id: 9
              },
              grade_info: {
                  type: "GradeInfo",
                  id: 10
              }
          },
          nested: {
              MileStone: {
                  fields: {
                      target_value: {
                          type: "int64",
                          id: 1
                      },
                      bonus_times: {
                          type: "int64",
                          id: 2
                      }
                  }
              },
              StreakType: {
                  values: {
                      STREAK_TYPE_UNKNOWN: 0,
                      STREAK_TYPE_COMBO: 1,
                      STREAK_TYPE_WIN: 2
                  }
              },
              StreakInfo: {
                  fields: {
                      streak_type: {
                          type: "StreakType",
                          id: 1
                      },
                      progress: {
                          type: "int64",
                          id: 2
                      },
                      mile_stones: {
                          rule: "repeated",
                          type: "MileStone",
                          id: 3
                      }
                  }
              },
              GradeInfo: {
                  fields: {
                      level: {
                          type: "int64",
                          id: 1
                      },
                      progress: {
                          type: "int64",
                          id: 2
                      },
                      target: {
                          type: "int64",
                          id: 3
                      }
                  }
              }
          }
      }
  },
  565182: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              id: {
                  type: "int64",
                  id: 1
              }
          }
      }
  },
  662784: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              event: {
                  type: "LiveEventInfo",
                  id: 1
              },
              card_start_time: {
                  type: "int64",
                  id: 2
              },
              card_icon_url: {
                  type: "string",
                  id: 3
              }
          }
      }
  },
  601635: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              user_id: {
                  type: "int64",
                  id: 1
              },
              avatar_uri: {
                  type: "string",
                  id: 2
              }
          }
      }
  },
  700810: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              url_list: {
                  rule: "repeated",
                  type: "string",
                  id: 1
              },
              uri: {
                  type: "string",
                  id: 2
              },
              flex_setting: {
                  rule: "repeated",
                  type: "int64",
                  id: 3
              }
          }
      }
  },
  271140: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              font_size: {
                  type: "int32",
                  id: 1
              },
              font_width: {
                  type: "int32",
                  id: 2
              },
              font_color: {
                  type: "string",
                  id: 3
              },
              border_color: {
                  type: "string",
                  id: 4
              }
          }
      }
  },
  84374: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              id: {
                  type: "int64",
                  id: 1
              },
              show_name: {
                  type: "string",
                  id: 2
              },
              short_name: {
                  type: "string",
                  id: 3
              },
              full_name: {
                  type: "string",
                  id: 4
              },
              hashtag_id: {
                  rule: "repeated",
                  type: "int64",
                  id: 5
              },
              hashtag_list: {
                  rule: "repeated",
                  type: "Hashtag",
                  id: 6
              },
              game_category: {
                  rule: "repeated",
                  type: "GameTagCategory",
                  id: 7
              },
              landscape: {
                  type: "int64",
                  id: 8
              },
              package_name: {
                  type: "string",
                  id: 9
              },
              bundle_id: {
                  type: "string",
                  id: 10
              },
              is_new_game: {
                  type: "bool",
                  id: 11
              }
          },
          nested: {
              GameTagType: {
                  values: {
                      Unknown: 0,
                      PCGame: 1,
                      MobileGame: 2,
                      ConsoleGame: 3
                  }
              },
              GameTagCategory: {
                  fields: {
                      game_type: {
                          type: "GameTagType",
                          id: 1
                      },
                      title: {
                          type: "string",
                          id: 2
                      }
                  }
              }
          }
      }
  },
  749805: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              GiftShowDefault: 0,
              GiftShowName: 1
          }
      }
  },
  539701: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              id: {
                  type: "int64",
                  id: 1
              },
              title: {
                  type: "string",
                  id: 2
              },
              image: {
                  type: "webcast.data.Image",
                  id: 3
              },
              namespace: {
                  type: "HashtagNamespace",
                  id: 4
              }
          }
      }
  },
  652210: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              Global: 0,
              Gaming: 1
          }
      }
  },
  766961: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              HorizontalPaddingRuleUseMiddleAndWidth: 0,
              HorizontalPaddingRuleUseLeftAndMiddleAndRight: 1
          }
      }
  },
  953582: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              IM_DISPATCH_STRATEGY_DEFAULT: 0,
              IM_DISPATCH_STRATEGY_BYPASS_DISPATCH_QUEUE: 1
          }
      }
  },
  121946: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              icon: {
                  type: "Image",
                  id: 1
              },
              background: {
                  type: "CombineBadgeBackground",
                  id: 2
              }
          }
      }
  },
  518193: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              url_list: {
                  rule: "repeated",
                  type: "string",
                  id: 1
              },
              uri: {
                  type: "string",
                  id: 2
              },
              height: {
                  type: "int64",
                  id: 3
              },
              width: {
                  type: "int64",
                  id: 4
              },
              avg_color: {
                  type: "string",
                  id: 5
              },
              image_type: {
                  type: "int32",
                  id: 6
              },
              open_web_url: {
                  type: "string",
                  id: 7
              },
              content: {
                  type: "Content",
                  id: 8
              },
              is_animated: {
                  type: "bool",
                  id: 9
              }
          },
          nested: {
              Content: {
                  fields: {
                      name: {
                          type: "string",
                          id: 1
                      },
                      font_color: {
                          type: "string",
                          id: 2
                      },
                      level: {
                          type: "int64",
                          id: 3
                      }
                  }
              }
          }
      }
  },
  553131: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              display_type: {
                  type: "BadgeDisplayType",
                  id: 1
              },
              image: {
                  type: "Image",
                  id: 2
              }
          }
      }
  },
  507506: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              INTERACTION_HUB_GOAL_SOURCE_UNKNOWN: 0,
              INTERACTION_HUB_GOAL_SOURCE_INTERACTION_SYSTEM: 1,
              INTERACTION_HUB_GOAL_SOURCE_INTERACTION_SELF_SELECT: 2
          }
      }
  },
  893665: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              INTERACTION_HUB_GOAL_TYPE_UNKNOWN: 0,
              INTERACTION_HUB_GOAL_TYPE_EXPAND_TEAM: 1,
              INTERACTION_HUB_GOAL_TYPE_TITLE_GIFT: 2,
              INTERACTION_HUB_GOAL_TYPE_MORE_INTERACTION: 3,
              INTERACTION_HUB_GOAL_TYPE_FINISH_WISH_LIST: 4,
              INTERACTION_HUB_GOAL_TYPE_PK: 5,
              INTERACTION_HUB_GOAL_TYPE_START_LIVE: 6,
              INTERACTION_HUB_GOAL_TYPE_COHOST: 7,
              INTERACTION_HUB_GOAL_TYPE_NEW_GIFT: 8,
              INTERACTION_HUB_GOAL_TYPE_CLOSED: 100,
              INTERACTION_HUB_GOAL_TYPE_REOPEN: 101
          }
      }
  },
  649819: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              match_type: {
                  type: "int64",
                  id: 1
              },
              invite_type: {
                  type: "int64",
                  id: 2
              },
              sub_type: {
                  type: "int64",
                  id: 3
              },
              theme: {
                  type: "string",
                  id: 4
              },
              duration: {
                  type: "int64",
                  id: 5
              },
              layout: {
                  type: "int64",
                  id: 6
              },
              tips: {
                  type: "string",
                  id: 7
              },
              extra: {
                  type: "InviterRivalExtra",
                  id: 8
              },
              other_users: {
                  rule: "repeated",
                  type: "InviterRivalExtra",
                  id: 9
              },
              topic_info: {
                  type: "webcast.data.CohostTopic",
                  id: 10
              },
              algo_request_id: {
                  type: "string",
                  id: 11
              }
          },
          nested: {
              InviterRivalExtra: {
                  fields: {
                      TextType: {
                          type: "int64",
                          id: 1
                      },
                      Text: {
                          type: "string",
                          id: 2
                      },
                      Label: {
                          type: "string",
                          id: 3
                      },
                      user_count: {
                          type: "int64",
                          id: 4
                      },
                      avatar_thumb: {
                          type: "Image",
                          id: 5
                      },
                      display_id: {
                          type: "string",
                          id: 6
                      },
                      authentication_info: {
                          type: "AuthenticationInfo",
                          id: 7
                      },
                      nickname: {
                          type: "string",
                          id: 8
                      },
                      follow_status: {
                          type: "int64",
                          id: 9
                      },
                      hashtag: {
                          type: "webcast.data.Hashtag",
                          id: 10
                      },
                      top_host_info: {
                          type: "TopHostInfo",
                          id: 11
                      },
                      user_id: {
                          type: "int64",
                          id: 12
                      },
                      is_best_teammate: {
                          type: "bool",
                          id: 13
                      },
                      opt_pair_info: {
                          type: "webcast.data.OptPairInfo",
                          id: 14
                      },
                      follower_count: {
                          type: "int64",
                          id: 15
                      }
                  },
                  nested: {
                      AuthenticationInfo: {
                          fields: {
                              custom_verify: {
                                  type: "string",
                                  id: 1
                              },
                              enterprise_verify_reason: {
                                  type: "string",
                                  id: 2
                              },
                              authentication_badge: {
                                  type: "Image",
                                  id: 3
                              }
                          }
                      }
                  }
              }
          }
      }
  },
  658777: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              LINKMIC_CHECK_PERMISSION_OPTION_UNKNOWN: 0,
              LINKMIC_CHECK_PERMISSION_OPTION_CHECK_BAN_INFO: 1
          }
      }
  },
  464357: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              UNKNOWN_SCENE: 0,
              LIST_BY_TYPE: 1,
              BEFORE_APPLY: 2,
              BEFORE_REPLY: 3,
              SHOW_AUDIENCE_INFO: 4,
              HOST_LIVE_START: 5,
              HOST_ONE_CLICK_LIVE_START: 6
          }
      }
  },
  873484: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              DEFAULT: 0,
              ANCHOR_USE_NEW_LAYOUT: 1
          }
      }
  },
  340272: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              LINKMIC_PERMIT_STATUS_NONE: 0,
              LINKMIC_PERMIT_STATUS_AGREE: 1,
              LINKMIC_PERMIT_STATUS_REJECT: 2
          }
      }
  },
  44288: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              PLAYTYPE_INVITE: 0,
              PLAYTYPE_APPLY: 1,
              PLAYTYPE_RESERVE: 2
          }
      }
  },
  721530: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              LINKMIC_RTC_EXT_INFO_KEY_DEFAULT: 0,
              LINKMIC_RTC_EXT_INFO_KEY_ANCHOR_FLOAT: 1,
              LINKMIC_RTC_EXT_INFO_KEY_ANCHOR_FLOAT_FIX: 2,
              LINKMIC_RTC_EXT_INFO_KEY_ANCHOR_GRID_2: 3,
              LINKMIC_RTC_EXT_INFO_KEY_ANCHOR_GRID_3: 4,
              LINKMIC_RTC_EXT_INFO_KEY_ANCHOR_GRID_4: 5,
              LINKMIC_RTC_EXT_INFO_KEY_GUEST_FLOAT: 101,
              LINKMIC_RTC_EXT_INFO_KEY_GUEST_FLOAT_FIX: 102,
              LINKMIC_RTC_EXT_INFO_KEY_GUEST_GRID_2: 103,
              LINKMIC_RTC_EXT_INFO_KEY_GUEST_GRID_3: 104,
              LINKMIC_RTC_EXT_INFO_KEY_GUEST_GRID_4: 105
          }
      }
  },
  912133: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              DISABLE: 0,
              ENABLE: 1,
              JUST_FOLLOWING: 2,
              MULTI_LINKING: 3,
              MULTI_LINKING_ONLY_FOLLOWING: 4
          }
      }
  },
  376883: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              Off: 0,
              On: 1
          }
      }
  },
  174627: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              AudioStream: 0,
              VideoStream: 1
          }
      }
  },
  986565: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              USERSTATUS_NONE: 0,
              USERSTATUS_LINKED: 1,
              USERSTATUS_APPLYING: 2,
              USERSTATUS_INVITING: 3
          }
      }
  },
  926668: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              UNKNOWN: 0,
              AGORO: 1,
              ZEGO: 2,
              BYTE: 4,
              TWILIO: 8
          }
      }
  },
  473303: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              event_id: {
                  type: "int64",
                  id: 1
              },
              start_time: {
                  type: "int64",
                  id: 2
              },
              duration: {
                  type: "int64",
                  id: 3
              },
              title: {
                  type: "string",
                  id: 4
              },
              description: {
                  type: "string",
                  id: 5
              },
              has_subscribed: {
                  type: "bool",
                  id: 6
              },
              is_paid_event: {
                  type: "bool",
                  id: 7
              },
              ticket_amount: {
                  type: "int64",
                  id: 8
              },
              pay_method: {
                  type: "EventPayMethod",
                  id: 9
              },
              wallet_pkg_dict: {
                  keyType: "string",
                  type: "WalletPackage",
                  id: 10
              },
              event_user_info: {
                  rule: "repeated",
                  type: "EventUserInfo",
                  id: 11
              },
              subscribed_count: {
                  type: "int64",
                  id: 12
              },
              paid_event_preview: {
                  type: "PaidEventPreview",
                  id: 13
              },
              wallet_package: {
                  type: "WalletPackage",
                  id: 14
              },
              register_type: {
                  type: "int64",
                  id: 15
              },
              periodic_settings: {
                  type: "string",
                  id: 16
              },
              periodic_shows: {
                  type: "string",
                  id: 17
              }
          },
          nested: {
              EventPayMethod: {
                  values: {
                      EventPayMethodInvalid: 0,
                      EventPayMethodCoins: 1,
                      EventPayMethodCash: 2
                  }
              },
              WalletPackage: {
                  fields: {
                      iap_id: {
                          type: "string",
                          id: 1
                      },
                      usd_price_show: {
                          type: "string",
                          id: 2
                      }
                  }
              }
          }
      }
  },
  608714: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              primary_id: {
                  type: "string",
                  id: 1
              },
              message_scene: {
                  type: "string",
                  id: 2
              }
          }
      }
  },
  860937: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              unique_id: {
                  type: "LiveMessageID",
                  id: 1
              },
              timestamp: {
                  type: "int64",
                  id: 2
              }
          }
      }
  },
  506467: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              MUTE: 0,
              UNMUTE: 1
          }
      }
  },
  909625: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              number: {
                  type: "int64",
                  id: 1
              },
              font_style: {
                  type: "FontStyle",
                  id: 2
              },
              background: {
                  type: "CombineBadgeBackground",
                  id: 3
              }
          }
      }
  },
  700190: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              mapping_id: {
                  type: "int64",
                  id: 1
              },
              expected_time_sec: {
                  type: "int64",
                  id: 2
              },
              opt_pair_status: {
                  type: "OptPairStatus",
                  id: 3
              },
              opt_pair_type: {
                  type: "int64",
                  id: 4
              },
              team_info: {
                  rule: "repeated",
                  type: "TeamInfo",
                  id: 5
              }
          },
          nested: {
              TeamInfo: {
                  fields: {
                      team_id: {
                          type: "int64",
                          id: 1
                      },
                      user_id: {
                          rule: "repeated",
                          type: "int64",
                          id: 2
                      }
                  }
              }
          }
      }
  },
  980179: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              OPT_PAIR_STATUS_UNKNOWN: 0,
              OPT_PAIR_STATUS_OFFLINE: 1,
              OPT_PAIR_STATUS_FINISHED: 2
          }
      }
  },
  993907: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              use_specific: {
                  type: "bool",
                  id: 1
              },
              middle_padding: {
                  type: "int32",
                  id: 2
              },
              badge_width: {
                  type: "int32",
                  id: 3
              },
              left_padding: {
                  type: "int32",
                  id: 4
              },
              right_padding: {
                  type: "int32",
                  id: 5
              },
              icon_top_padding: {
                  type: "int32",
                  id: 6
              },
              icon_bottom_padding: {
                  type: "int32",
                  id: 7
              },
              horizontal_padding_rule: {
                  type: "HorizontalPaddingRule",
                  id: 8
              },
              vertical_padding_rule: {
                  type: "VerticalPaddingRule",
                  id: 9
              }
          }
      }
  },
  231044: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              event_id: {
                  type: "int64",
                  id: 1
              },
              paid_type: {
                  type: "PaidType",
                  id: 2
              }
          },
          nested: {
              PaidType: {
                  values: {
                      Free: 0,
                      Paid: 1
                  }
              }
          }
      }
  },
  443669: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              allow_preview: {
                  type: "int64",
                  id: 1
              },
              allow_preview_time: {
                  type: "int64",
                  id: 2
              }
          }
      }
  },
  561905: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              key: {
                  type: "string",
                  id: 1
              },
              default_pattern: {
                  type: "string",
                  id: 2
              }
          }
      }
  },
  484911: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              PositionUnknown: 0,
              PositionLeft: 1,
              PositionRight: 2
          }
      }
  },
  713003: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              data_version: {
                  type: "string",
                  id: 1
              },
              privilege_id: {
                  type: "string",
                  id: 2
              },
              privilege_version: {
                  type: "string",
                  id: 3
              },
              privilege_order_id: {
                  type: "string",
                  id: 4
              },
              level: {
                  type: "string",
                  id: 5
              }
          }
      }
  },
  987339: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              use_new_profile_card_style: {
                  type: "bool",
                  id: 1
              },
              badge_text_position: {
                  type: "BadgeTextPosition",
                  id: 2
              },
              projection_config: {
                  type: "ProjectionConfig",
                  id: 3
              },
              profile_content: {
                  type: "ProfileContent",
                  id: 4
              },
              separator_config: {
                  type: "SeparatorConfig",
                  id: 5
              }
          }
      }
  },
  548254: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              use_content: {
                  type: "bool",
                  id: 1
              },
              icon_list: {
                  rule: "repeated",
                  type: "IconConfig",
                  id: 2
              },
              number_config: {
                  type: "NumberConfig",
                  id: 3
              }
          }
      }
  },
  107677: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              use_projection: {
                  type: "bool",
                  id: 1
              },
              icon: {
                  type: "Image",
                  id: 2
              }
          }
      }
  },
  797467: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              user_label: {
                  type: "webcast.data.Image",
                  id: 1
              },
              user_consume_in_room: {
                  type: "int64",
                  id: 2
              }
          }
      }
  },
  770019: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              scroll_gap_count: {
                  type: "int64",
                  id: 1
              },
              anchor_scroll_gap_count: {
                  type: "int64",
                  id: 2
              },
              release_to_scroll_area: {
                  type: "bool",
                  id: 3
              },
              anchor_release_to_scroll_area: {
                  type: "bool",
                  id: 4
              },
              is_anchor_marked: {
                  type: "bool",
                  id: 5
              },
              creator_success_info: {
                  type: "CreatorSuccessInfo",
                  id: 6
              },
              portrait_info: {
                  type: "PortraitInfo",
                  id: 7
              },
              user_interaction_info: {
                  type: "UserInteractionInfo",
                  id: 8
              },
              admin_fold_type: {
                  type: "int64",
                  id: 9
              }
          },
          nested: {
              CreatorSuccessInfo: {
                  fields: {
                      tags: {
                          rule: "repeated",
                          type: "TagItem",
                          id: 1
                      },
                      topic: {
                          type: "Topic",
                          id: 2
                      }
                  },
                  nested: {
                      TagItem: {
                          fields: {
                              tag_type: {
                                  type: "webcast.data.TagType",
                                  id: 1
                              },
                              tag_text: {
                                  type: "webcast.data.Text",
                                  id: 2
                              }
                          }
                      },
                      Topic: {
                          fields: {
                              topic_action_type: {
                                  type: "webcast.data.TopicActionType",
                                  id: 1
                              },
                              topic_text: {
                                  type: "webcast.data.Text",
                                  id: 2
                              },
                              topic_tips: {
                                  type: "webcast.data.Text",
                                  id: 3
                              }
                          }
                      }
                  }
              },
              PortraitInfo: {
                  fields: {
                      user_metrics: {
                          rule: "repeated",
                          type: "UserMetrics",
                          id: 1
                      },
                      portrait_tag: {
                          rule: "repeated",
                          type: "PortraitTag",
                          id: 2
                      }
                  },
                  nested: {
                      UserMetrics: {
                          fields: {
                              type: {
                                  type: "UserMetricsType",
                                  id: 1
                              },
                              metrics_value: {
                                  type: "string",
                                  id: 2
                              }
                          },
                          nested: {
                              UserMetricsType: {
                                  values: {
                                      USER_METRICS_TYPE_UNKNOWN: 0,
                                      USER_METRICS_TYPE_GRADE: 1,
                                      USER_METRICS_TYPE_SUBSCRIBE: 2,
                                      USER_METRICS_TYPE_FOLLOW: 3,
                                      USER_METRICS_TYPE_FANSCLUB: 4,
                                      USER_METRICS_TYPE_TOPVIEWER: 5,
                                      USER_METRICS_TYPE_GIFT: 6
                                  }
                              }
                          }
                      },
                      PortraitTag: {
                          fields: {
                              tag_id: {
                                  type: "string",
                                  id: 1
                              },
                              priority: {
                                  type: "int64",
                                  id: 2
                              },
                              show_value: {
                                  type: "string",
                                  id: 3
                              },
                              show_args: {
                                  type: "string",
                                  id: 4
                              }
                          }
                      }
                  }
              },
              UserInteractionInfo: {
                  fields: {
                      like_cnt: {
                          type: "int64",
                          id: 1
                      },
                      comment_cnt: {
                          type: "int64",
                          id: 2
                      },
                      share_cnt: {
                          type: "int64",
                          id: 3
                      }
                  }
              }
          }
      }
  },
  551327: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              ReserveReplyStatusUnknown: 0,
              ReserveReplyStatusWaitForMe: 1
          }
      }
  },
  465741: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              text: {
                  type: "string",
                  id: 1
              },
              text_type: {
                  type: "TextType",
                  id: 2
              },
              label: {
                  type: "string",
                  id: 3
              },
              anchor_layer: {
                  type: "AnchorLayer",
                  id: 4
              },
              linker_info: {
                  type: "LinkerInfo",
                  id: 5
              },
              linkmic_user_settings: {
                  type: "webcast.data.AnchorLinkmicUserSettings",
                  id: 6
              },
              battle_user_settings: {
                  type: "webcast.data.BattleUserSettings",
                  id: 7
              },
              invite_block_reason: {
                  type: "InviteBlockReason",
                  id: 8
              },
              show_play_type: {
                  type: "LinkmicPlayType",
                  id: 9
              },
              top_host_info: {
                  type: "TopHostInfo",
                  id: 10
              },
              tag: {
                  type: "Tag",
                  id: 11
              },
              reserve_info: {
                  type: "ReserveInfo",
                  id: 12
              },
              detail_block_reason: {
                  type: "DetailBlockReason",
                  id: 13
              },
              opt_pair_info: {
                  type: "OptPairInfo",
                  id: 14
              },
              tag_v2: {
                  type: "TagV2",
                  id: 15
              },
              eoy_level: {
                  type: "int64",
                  id: 16
              },
              battle_info: {
                  type: "BattleInfo",
                  id: 17
              },
              cohost_layout_mode: {
                  type: "CohostLayoutMode",
                  id: 18
              },
              game_tag: {
                  type: "RivalsGameTag",
                  id: 19
              }
          },
          nested: {
              TextType: {
                  values: {
                      TextTypeUnknown: 0,
                      CurRoomFanTicket: 1,
                      TotalDiamondCount: 2,
                      Distance: 3,
                      DistanceCity: 4
                  }
              },
              AnchorLayer: {
                  values: {
                      AnchorLayerUnknown: 0,
                      AnchorLayerTop: 1,
                      AnchorLayerSMALL: 2
                  }
              },
              LinkerInfo: {
                  fields: {
                      linked_users: {
                          rule: "repeated",
                          type: "UserInfo",
                          id: 1
                      },
                      in_quick_pairing: {
                          type: "bool",
                          id: 2
                      }
                  },
                  nested: {
                      UserInfo: {
                          fields: {
                              user_id: {
                                  type: "int64",
                                  id: 1
                              },
                              nick_name: {
                                  type: "string",
                                  id: 2
                              },
                              avatar_thumb: {
                                  type: "webcast.data.Image",
                                  id: 3
                              }
                          }
                      }
                  }
              },
              InviteBlockReason: {
                  values: {
                      None: 0,
                      IsLinking: 1,
                      InvitationDenied: 2,
                      PermissionDenied: 3,
                      LowClientVersion: 4,
                      RoomPaused: 5,
                      LinkmicFull: 6,
                      MatureThemeNotMatch: 7,
                      ReserveFull: 8,
                      RegionalBlock: 9
                  }
              },
              ReserveInfo: {
                  fields: {
                      reservation_id: {
                          type: "int64",
                          id: 1
                      },
                      reply_status: {
                          type: "ReserveReplyStatus",
                          id: 2
                      },
                      bubble_tip: {
                          type: "string",
                          id: 3
                      },
                      response_time: {
                          type: "int64",
                          id: 4
                      },
                      is_reservation_sender: {
                          type: "bool",
                          id: 5
                      },
                      created_timestamp: {
                          type: "int64",
                          id: 6
                      },
                      viewed: {
                          type: "bool",
                          id: 7
                      }
                  }
              },
              BattleInfo: {
                  fields: {
                      info_type: {
                          type: "BattleInfoType",
                          id: 1
                      },
                      value: {
                          type: "int64",
                          id: 2
                      }
                  },
                  nested: {
                      BattleInfoType: {
                          values: {
                              BATTLE_INFO_TYPE_NONE: 0,
                              BATTLE_INFO_TYPE_AVERAGE_SCORE: 1,
                              BATTLE_INFO_TYPE_MAX_SCORE: 2,
                              BATTLE_INFO_TYPE_LAST_SCORE: 3,
                              BATTLE_INFO_TYPE_WIN_STREAK: 4
                          }
                      }
                  }
              }
          }
      }
  },
  269741: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              tag_id: {
                  type: "int64",
                  id: 1
              },
              tag_display_text: {
                  type: "string",
                  id: 2
              }
          }
      }
  },
  176637: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              color: {
                  type: "string",
                  id: 1
              }
          }
      }
  },
  251855: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              NoMute: 0,
              MuteAll: 1,
              MuteAllTemporary: 2,
              MuteFriends: 3,
              MuteFriendsTemporary: 4,
              MuteSuggestion: 5,
              MuteSuggestionTemporary: 6,
              MatureTheme: 21
          }
      }
  },
  458140: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              display_type: {
                  type: "BadgeDisplayType",
                  id: 1
              },
              str: {
                  type: "string",
                  id: 2
              }
          }
      }
  },
  411391: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              type: {
                  type: "SubTimerStickerChangeType",
                  id: 1
              },
              timer_id: {
                  type: "int64",
                  id: 2
              },
              op_type: {
                  type: "TimerOpType",
                  id: 3
              },
              timer_status: {
                  type: "TimerStatus",
                  id: 4
              },
              anchor_side_title: {
                  type: "string",
                  id: 5
              },
              user_side_title: {
                  type: "string",
                  id: 6
              },
              sub_increase_count: {
                  type: "int32",
                  id: 7
              },
              time_increase_per_sub: {
                  type: "int64",
                  id: 8
              },
              time_increase: {
                  type: "int64",
                  id: 9
              },
              total_time: {
                  type: "int64",
                  id: 10
              },
              remaining_time: {
                  type: "int64",
                  id: 11
              },
              timestamp: {
                  type: "int64",
                  id: 12
              },
              sticker_x: {
                  type: "int64",
                  id: 13
              },
              sticker_y: {
                  type: "int64",
                  id: 14
              },
              screen_w: {
                  type: "int64",
                  id: 15
              },
              screen_h: {
                  type: "int64",
                  id: 16
              }
          }
      }
  },
  868047: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              TitleChange: 0,
              StatusChange: 1,
              PositionChange: 2,
              SubIncrease: 3,
              Align: 4
          }
      }
  },
  570178: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              tag_type: {
                  type: "int32",
                  id: 1
              },
              tag_value: {
                  type: "string",
                  id: 2
              },
              tag_text: {
                  type: "string",
                  id: 3
              }
          }
      }
  },
  525849: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_UNKNOWN: 0,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_USER_GRADE: 1,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_FANS_LEVEL: 2,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_WATCH_ME_DAYS_AGO: 3,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_CUSTOM: 4,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_TITLE_GIFT: 5,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_FIRST_JOINED_TEAM: 6,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_PAY_ACCOMPANY_DAYS: 7,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_SPONSOR_GIFT_LAST_ROOM: 8,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_MATCH_MVP_LAST_ROOM: 9,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_LARGE_AMOUNT_GIFT_LAST_ROOM: 10,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_COMMENT_LAST_ROOM: 11,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_RECENT_TITLED_GIFT: 12,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_MEET_ANNIVERSARY: 13,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_FANS_SLEEP: 14,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_NOT_SEND_HEART_ME: 15,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_NOT_JOIN_TEAM: 16,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_FIRST_WATCH_LIVE: 17,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_RECENT_COMMENT: 18,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_RECENT_GIFT_TIMES: 19,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_RECENT_WATCH_LIVE_DURATION: 20,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_RECENT_GIFT: 21,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_RECENT_LIVE_CONTRIBUTION_TOP: 22,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_JUST_UPGRADE: 28,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_FAN_TOTAL_WATCH_DURATION: 29,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_FAN_TOTAL_COMMENT_NUM: 30,
              TAG_TYPE_CREATOR_CRM_TAG_TYPE_FAN_TOTAL_GIFT_SENT_NUM: 31
          }
      }
  },
  161705: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          oneofs: {
              content: {
                  oneof: ["second_degree_relation_content", "cohost_history_day"]
              }
          },
          fields: {
              tag_classification: {
                  type: "TagClassification",
                  id: 1
              },
              tag_type: {
                  type: "int32",
                  id: 2
              },
              tag_value: {
                  type: "string",
                  id: 3
              },
              starling_key: {
                  type: "string",
                  id: 4
              },
              second_degree_relation_content: {
                  type: "SecondDegreeRelationContent",
                  id: 10
              },
              cohost_history_day: {
                  type: "int64",
                  id: 11
              },
              similar_interest_content: {
                  type: "SimilarInterestContent",
                  id: 12
              }
          },
          nested: {
              SecondDegreeRelationContent: {
                  fields: {
                      related_users: {
                          rule: "repeated",
                          type: "UserInfo",
                          id: 1
                      },
                      total_related_user_cnt: {
                          type: "int64",
                          id: 2
                      }
                  },
                  nested: {
                      UserInfo: {
                          fields: {
                              user_id: {
                                  type: "int64",
                                  id: 1
                              },
                              nick_name: {
                                  type: "string",
                                  id: 2
                              },
                              avatar_thumb: {
                                  type: "webcast.data.Image",
                                  id: 3
                              }
                          }
                      }
                  }
              },
              TagClassification: {
                  values: {
                      Unknown: 0,
                      CohostHistory: 1,
                      FirstDegreeRelation: 2,
                      SecondDegreeRelation: 3,
                      Rank: 4,
                      SimilarInterests: 5
                  }
              },
              SimilarInterestContent: {
                  fields: {
                      content_id: {
                          type: "int64",
                          id: 1
                      },
                      display_text: {
                          type: "string",
                          id: 2
                      }
                  }
              }
          }
      }
  },
  946247: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              value: {
                  type: "string",
                  id: 1
              }
          }
      }
  },
  757859: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              key: {
                  type: "string",
                  id: 1
              },
              default_pattern: {
                  type: "string",
                  id: 2
              },
              default_format: {
                  type: "TextFormat",
                  id: 3
              },
              pieces: {
                  rule: "repeated",
                  type: "TextPiece",
                  id: 4
              }
          }
      }
  },
  188695: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              display_type: {
                  type: "BadgeDisplayType",
                  id: 1
              },
              key: {
                  type: "string",
                  id: 2
              },
              default_pattern: {
                  type: "string",
                  id: 3
              },
              pieces: {
                  rule: "repeated",
                  type: "string",
                  id: 4
              }
          }
      }
  },
  146518: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              color: {
                  type: "string",
                  id: 1
              },
              bold: {
                  type: "bool",
                  id: 2
              },
              italic: {
                  type: "bool",
                  id: 3
              },
              weight: {
                  type: "int32",
                  id: 4
              },
              italic_angle: {
                  type: "int32",
                  id: 5
              },
              font_size: {
                  type: "int32",
                  id: 6
              },
              use_heigh_light_color: {
                  type: "bool",
                  id: 7
              },
              use_remote_clor: {
                  type: "bool",
                  id: 8
              }
          }
      }
  },
  658351: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              type: {
                  type: "int32",
                  id: 1
              },
              format: {
                  type: "TextFormat",
                  id: 2
              },
              string_value: {
                  type: "string",
                  id: 11
              },
              user_value: {
                  type: "TextPieceUser",
                  id: 21
              },
              gift_value: {
                  type: "TextPieceGift",
                  id: 22
              },
              heart_value: {
                  type: "TextPieceHeart",
                  id: 23
              },
              pattern_ref_value: {
                  type: "TextPiecePatternRef",
                  id: 24
              },
              image_value: {
                  type: "TextPieceImage",
                  id: 25
              }
          }
      }
  },
  525070: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              gift_id: {
                  type: "int64",
                  id: 1
              },
              name_ref: {
                  type: "PatternRef",
                  id: 2
              },
              show_type: {
                  type: "GiftShowType",
                  id: 3
              },
              color_id: {
                  type: "int64",
                  id: 4
              }
          }
      }
  },
  668924: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              color: {
                  type: "string",
                  id: 1
              }
          }
      }
  },
  352687: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              image: {
                  type: "webcast.data.Image",
                  id: 1
              }
          }
      }
  },
  983610: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              key: {
                  type: "string",
                  id: 1
              },
              default_pattern: {
                  type: "string",
                  id: 2
              }
          }
      }
  },
  880226: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              user: {
                  type: "User",
                  id: 1
              },
              with_colon: {
                  type: "bool",
                  id: 2
              }
          }
      }
  },
  847628: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              max_title_length: {
                  type: "int32",
                  id: 1
              },
              default_start_countdown_time_s: {
                  type: "int64",
                  id: 2
              },
              max_start_countdown_time_s: {
                  type: "int64",
                  id: 3
              },
              default_time_increase_per_sub_s: {
                  type: "int64",
                  id: 4
              },
              default_time_increase_cap_s: {
                  type: "int64",
                  id: 5
              },
              max_time_increase_cap_s: {
                  type: "int64",
                  id: 6
              },
              bottom_button_text: {
                  type: "string",
                  id: 7
              }
          }
      }
  },
  436671: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              timer_id: {
                  type: "int64",
                  id: 1
              },
              anchor_id: {
                  type: "int64",
                  id: 2
              },
              start_timestamp_s: {
                  type: "int64",
                  id: 3
              },
              start_countdown_time_s: {
                  type: "int64",
                  id: 4
              },
              anchor_side_title: {
                  type: "string",
                  id: 5
              },
              user_side_title: {
                  type: "string",
                  id: 6
              },
              time_increase_per_sub_s: {
                  type: "int64",
                  id: 7
              },
              time_increase_cap_s: {
                  type: "int64",
                  id: 8
              },
              sub_count: {
                  type: "int32",
                  id: 9
              },
              time_increase_reach_cap: {
                  type: "bool",
                  id: 10
              },
              total_pause_time_s: {
                  type: "int64",
                  id: 11
              },
              last_pause_timestamp_s: {
                  type: "int64",
                  id: 12
              },
              total_time_s: {
                  type: "int64",
                  id: 13
              },
              remaining_time_s: {
                  type: "int64",
                  id: 14
              },
              timestamp_s: {
                  type: "int64",
                  id: 15
              },
              sticker_x: {
                  type: "int64",
                  id: 16
              },
              sticker_y: {
                  type: "int64",
                  id: 17
              },
              screen_w: {
                  type: "int64",
                  id: 18
              },
              screen_h: {
                  type: "int64",
                  id: 19
              },
              timer_status: {
                  type: "TimerStatus",
                  id: 20
              },
              antidirt_status: {
                  type: "AntidirtStatus",
                  id: 21
              },
              audit_status: {
                  type: "AuditStatus",
                  id: 22
              },
              audit_info: {
                  type: "AuditInfo",
                  id: 23
              }
          },
          nested: {
              AntidirtStatus: {
                  values: {
                      Pass: 0,
                      Failed: 1
                  }
              },
              AuditStatus: {
                  values: {
                      AuditStatusUnknown: 0,
                      AuditStatusPass: 1,
                      AuditStatusFailed: 2,
                      AuditStatusReviewing: 3,
                      AuditStatusForbidden: 4
                  }
              },
              AuditTaskType: {
                  values: {
                      AUDIT_TASK_TYPE_DEFAULT: 0,
                      AUDIT_TASK_TYPE_APPEAL: 1
                  }
              },
              AuditInfo: {
                  fields: {
                      violation_id: {
                          type: "int64",
                          id: 1
                      },
                      task_type: {
                          type: "AuditTaskType",
                          id: 2
                      }
                  }
              }
          }
      }
  },
  840284: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              TimerOpTypeStart: 0,
              TimerOpTypePause: 1,
              TimerOpTypeResume: 2,
              TimerOpTypeCancel: 3
          }
      }
  },
  156111: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              TimerStatusNotStarted: 0,
              TimerStatusRunning: 1,
              TimerStatusPaused: 2,
              TimerStatusCancelled: 3,
              TimerStatusFinished: 4
          }
      }
  },
  102117: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              rank_type: {
                  type: "string",
                  id: 1
              },
              top_index: {
                  type: "int64",
                  id: 2
              }
          }
      }
  },
  990797: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              TOPIC_ACTION_TYPE_UNKNOWN: 0,
              TOPIC_ACTION_TYPE_FOLLOW: 1
          }
      }
  },
  70511: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              start_time_sec: {
                  type: "int64",
                  id: 1
              },
              end_time_sec: {
                  type: "int64",
                  id: 2
              },
              all_rivals: {
                  type: "int64",
                  id: 3
              },
              all_rivals_avatar: {
                  rule: "repeated",
                  type: "webcast.data.Image",
                  id: 4
              }
          }
      }
  },
  900819: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              session_id: {
                  type: "int64",
                  id: 1
              },
              session_heat: {
                  type: "int64",
                  id: 2
              }
          }
      }
  },
  934558: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              id: {
                  type: "int64",
                  id: 1
              },
              deprecated1: {
                  type: "int64",
                  id: 2
              },
              nickname: {
                  type: "string",
                  id: 3
              },
              deprecated2: {
                  type: "int32",
                  id: 4
              },
              bio_description: {
                  type: "string",
                  id: 5
              },
              deprecated3: {
                  type: "int32",
                  id: 6
              },
              deprecated4: {
                  type: "int64",
                  id: 7
              },
              deprecated5: {
                  type: "string",
                  id: 8
              },
              avatar_thumb: {
                  type: "Image",
                  id: 9
              },
              avatar_medium: {
                  type: "Image",
                  id: 10
              },
              avatar_large: {
                  type: "Image",
                  id: 11
              },
              verified: {
                  type: "bool",
                  id: 12
              },
              deprecated6: {
                  type: "int32",
                  id: 13
              },
              deprecated7: {
                  type: "string",
                  id: 14
              },
              status: {
                  type: "int32",
                  id: 15
              },
              create_time: {
                  type: "int64",
                  id: 16
              },
              modify_time: {
                  type: "int64",
                  id: 17
              },
              secret: {
                  type: "int32",
                  id: 18
              },
              share_qrcode_uri: {
                  type: "string",
                  id: 19
              },
              deprecated8: {
                  type: "int32",
                  id: 20
              },
              badge_image_list: {
                  rule: "repeated",
                  type: "Image",
                  id: 21
              },
              follow_info: {
                  type: "FollowInfo",
                  id: 22
              },
              pay_grade: {
                  type: "PayGrade",
                  id: 23
              },
              fans_club: {
                  type: "FansClub",
                  id: 24
              },
              border: {
                  type: "Border",
                  id: 25
              },
              special_id: {
                  type: "string",
                  id: 26
              },
              avatar_border: {
                  type: "Image",
                  id: 27
              },
              medal: {
                  type: "Image",
                  id: 28
              },
              real_time_icons: {
                  rule: "repeated",
                  type: "Image",
                  id: 29
              },
              new_real_time_icons: {
                  rule: "repeated",
                  type: "Image",
                  id: 30
              },
              top_vip_no: {
                  type: "int64",
                  id: 31
              },
              user_attr: {
                  type: "UserAttr",
                  id: 32
              },
              own_room: {
                  type: "OwnRoom",
                  id: 33
              },
              pay_score: {
                  type: "int64",
                  id: 34
              },
              ticket_count: {
                  type: "int64",
                  id: 35
              },
              anchor_info: {
                  type: "AnchorInfo",
                  id: 36
              },
              link_mic_stats: {
                  type: "webcast.data.LinkmicStatus",
                  id: 37
              },
              display_id: {
                  type: "string",
                  id: 38
              },
              with_commerce_permission: {
                  type: "bool",
                  id: 39
              },
              with_fusion_shop_entry: {
                  type: "bool",
                  id: 40
              },
              deprecated21: {
                  type: "int64",
                  id: 41
              },
              webcast_anchor_level: {
                  type: "AnchorLevel",
                  id: 42
              },
              verified_content: {
                  type: "string",
                  id: 43
              },
              author_stats: {
                  type: "AuthorStats",
                  id: 44
              },
              top_fans: {
                  rule: "repeated",
                  type: "User",
                  id: 45
              },
              sec_uid: {
                  type: "string",
                  id: 46
              },
              user_role: {
                  type: "int32",
                  id: 47
              },
              deprecated9: {
                  type: "DeprecatedType1",
                  id: 48
              },
              activity_reward: {
                  type: "ActivityInfo",
                  id: 49
              },
              deprecated10: {
                  type: "DeprecatedType4",
                  id: 50
              },
              deprecated11: {
                  type: "DeprecatedType5",
                  id: 51
              },
              personal_card: {
                  type: "Image",
                  id: 52
              },
              authentication_info: {
                  type: "AuthenticationInfo",
                  id: 53
              },
              deprecated12: {
                  type: "int32",
                  id: 54
              },
              deprecated13: {
                  type: "int32",
                  id: 55
              },
              deprecated14: {
                  type: "DeprecatedType6",
                  id: 56
              },
              media_badge_image_list: {
                  rule: "repeated",
                  type: "Image",
                  id: 57
              },
              deprecated15: {
                  type: "int32",
                  id: 58
              },
              user_vip_info: {
                  type: "webcast.data.UserVIPInfo",
                  id: 59
              },
              commerce_webcast_config_ids: {
                  rule: "repeated",
                  type: "int64",
                  id: 60
              },
              border_list: {
                  rule: "repeated",
                  type: "Border",
                  id: 61
              },
              combo_badge_info: {
                  type: "ComboBadgeInfo",
                  id: 62
              },
              subscribe_info: {
                  type: "SubscribeInfo",
                  id: 63
              },
              badge_list: {
                  rule: "repeated",
                  type: "BadgeStruct",
                  id: 64
              },
              mint_type_label: {
                  rule: "repeated",
                  type: "int64",
                  id: 65
              },
              fans_club_info: {
                  type: "FansClubInfo",
                  id: 66
              },
              deprecated19: {
                  type: "bool",
                  id: 1001
              },
              allow_find_by_contacts: {
                  type: "bool",
                  id: 1002
              },
              allow_others_download_video: {
                  type: "bool",
                  id: 1003
              },
              allow_others_download_when_sharing_video: {
                  type: "bool",
                  id: 1004
              },
              allow_share_show_profile: {
                  type: "bool",
                  id: 1005
              },
              allow_show_in_gossip: {
                  type: "bool",
                  id: 1006
              },
              allow_show_my_action: {
                  type: "bool",
                  id: 1007
              },
              allow_strange_comment: {
                  type: "bool",
                  id: 1008
              },
              allow_unfollower_comment: {
                  type: "bool",
                  id: 1009
              },
              allow_use_linkmic: {
                  type: "bool",
                  id: 1010
              },
              anchor_level: {
                  type: "AnchorLevel",
                  id: 1011
              },
              avatar_jpg: {
                  type: "Image",
                  id: 1012
              },
              bg_img_url: {
                  type: "string",
                  id: 1013
              },
              deprecated18: {
                  type: "string",
                  id: 1014
              },
              deprecated16: {
                  type: "bool",
                  id: 1015
              },
              block_status: {
                  type: "int32",
                  id: 1016
              },
              comment_restrict: {
                  type: "int32",
                  id: 1017
              },
              constellation: {
                  type: "string",
                  id: 1018
              },
              disable_ichat: {
                  type: "int32",
                  id: 1019
              },
              enable_ichat_img: {
                  type: "int64",
                  id: 1020
              },
              exp: {
                  type: "int32",
                  id: 1021
              },
              fan_ticket_count: {
                  type: "int64",
                  id: 1022
              },
              fold_stranger_chat: {
                  type: "bool",
                  id: 1023
              },
              follow_status: {
                  type: "int64",
                  id: 1024
              },
              deprecated28: {
                  type: "bool",
                  id: 1025
              },
              deprecated29: {
                  type: "string",
                  id: 1026
              },
              ichat_restrict_type: {
                  type: "int32",
                  id: 1027
              },
              id_str: {
                  type: "string",
                  id: 1028
              },
              is_follower: {
                  type: "bool",
                  id: 1029
              },
              is_following: {
                  type: "bool",
                  id: 1030
              },
              need_profile_guide: {
                  type: "bool",
                  id: 1031
              },
              pay_scores: {
                  type: "int64",
                  id: 1032
              },
              push_comment_status: {
                  type: "bool",
                  id: 1033
              },
              push_digg: {
                  type: "bool",
                  id: 1034
              },
              push_follow: {
                  type: "bool",
                  id: 1035
              },
              push_friend_action: {
                  type: "bool",
                  id: 1036
              },
              push_ichat: {
                  type: "bool",
                  id: 1037
              },
              push_status: {
                  type: "bool",
                  id: 1038
              },
              push_video_post: {
                  type: "bool",
                  id: 1039
              },
              push_video_recommend: {
                  type: "bool",
                  id: 1040
              },
              stats: {
                  type: "UserStats",
                  id: 1041
              },
              deprecated17: {
                  type: "bool",
                  id: 1042
              },
              verified_reason: {
                  type: "string",
                  id: 1043
              },
              with_car_management_permission: {
                  type: "bool",
                  id: 1044
              },
              upcoming_event_list: {
                  rule: "repeated",
                  type: "webcast.data.LiveEventInfo",
                  id: 1045
              },
              scm_label: {
                  type: "string",
                  id: 1046
              },
              ecommerce_entrance: {
                  type: "EcommerceEntrance",
                  id: 1047
              },
              is_block: {
                  type: "bool",
                  id: 1048
              },
              is_subscribe: {
                  type: "bool",
                  id: 1090
              },
              is_anchor_marked: {
                  type: "bool",
                  id: 1091
              }
          },
          nested: {
              FollowInfo: {
                  fields: {
                      following_count: {
                          type: "int64",
                          id: 1
                      },
                      follower_count: {
                          type: "int64",
                          id: 2
                      },
                      follow_status: {
                          type: "int64",
                          id: 3
                      },
                      push_status: {
                          type: "int64",
                          id: 4
                      }
                  }
              },
              PayGrade: {
                  fields: {
                      deprecated20: {
                          type: "int64",
                          id: 1
                      },
                      diamond_icon: {
                          type: "Image",
                          id: 2
                      },
                      name: {
                          type: "string",
                          id: 3
                      },
                      icon: {
                          type: "Image",
                          id: 4
                      },
                      next_name: {
                          type: "string",
                          id: 5
                      },
                      level: {
                          type: "int64",
                          id: 6
                      },
                      next_icon: {
                          type: "Image",
                          id: 7
                      },
                      deprecated22: {
                          type: "int64",
                          id: 8
                      },
                      deprecated23: {
                          type: "int64",
                          id: 9
                      },
                      deprecated24: {
                          type: "int64",
                          id: 10
                      },
                      deprecated25: {
                          type: "int64",
                          id: 11
                      },
                      deprecated26: {
                          type: "int64",
                          id: 12
                      },
                      grade_describe: {
                          type: "string",
                          id: 13
                      },
                      grade_icon_list: {
                          rule: "repeated",
                          type: "GradeIcon",
                          id: 14
                      },
                      screen_chat_type: {
                          type: "int64",
                          id: 15
                      },
                      im_icon: {
                          type: "Image",
                          id: 16
                      },
                      im_icon_with_level: {
                          type: "Image",
                          id: 17
                      },
                      live_icon: {
                          type: "Image",
                          id: 18
                      },
                      new_im_icon_with_level: {
                          type: "Image",
                          id: 19
                      },
                      new_live_icon: {
                          type: "Image",
                          id: 20
                      },
                      upgrade_need_consume: {
                          type: "int64",
                          id: 21
                      },
                      next_privileges: {
                          type: "string",
                          id: 22
                      },
                      background: {
                          type: "Image",
                          id: 23
                      },
                      background_back: {
                          type: "Image",
                          id: 24
                      },
                      score: {
                          type: "int64",
                          id: 25
                      },
                      grade_banner: {
                          type: "string",
                          id: 1001
                      },
                      profile_dialog_bg: {
                          type: "Image",
                          id: 1002
                      },
                      profile_dialog_bg_back: {
                          type: "Image",
                          id: 1003
                      }
                  },
                  nested: {
                      GradeIcon: {
                          fields: {
                              icon: {
                                  type: "Image",
                                  id: 1
                              },
                              icon_diamond: {
                                  type: "int64",
                                  id: 2
                              },
                              level: {
                                  type: "int64",
                                  id: 3
                              },
                              level_str: {
                                  type: "string",
                                  id: 4
                              }
                          }
                      }
                  }
              },
              FansClub: {
                  fields: {
                      data: {
                          type: "FansClubData",
                          id: 1
                      },
                      prefer_data: {
                          keyType: "int32",
                          type: "FansClubData",
                          id: 2
                      }
                  },
                  nested: {
                      FansClubData: {
                          fields: {
                              club_name: {
                                  type: "string",
                                  id: 1
                              },
                              level: {
                                  type: "int32",
                                  id: 2
                              },
                              user_fans_club_status: {
                                  type: "UserFansClubStatus",
                                  id: 3
                              },
                              badge: {
                                  type: "UserBadge",
                                  id: 4
                              },
                              available_gift_ids: {
                                  rule: "repeated",
                                  type: "int64",
                                  id: 5
                              },
                              anchor_id: {
                                  type: "int64",
                                  id: 6
                              }
                          },
                          nested: {
                              BadgeIcon: {
                                  values: {
                                      Unknown: 0,
                                      Icon: 1,
                                      SmallIcon: 2
                                  }
                              },
                              UserBadge: {
                                  fields: {
                                      icons: {
                                          keyType: "int32",
                                          type: "data.Image",
                                          id: 1
                                      },
                                      title: {
                                          type: "string",
                                          id: 2
                                      }
                                  }
                              },
                              UserFansClubStatus: {
                                  values: {
                                      NotJoined: 0,
                                      Active: 1,
                                      Inactive: 2
                                  }
                              }
                          }
                      },
                      PreferntialType: {
                          values: {
                              PresonalProfile: 0,
                              OtherRoom: 1
                          }
                      }
                  }
              },
              Border: {
                  fields: {
                      icon: {
                          type: "Image",
                          id: 1
                      },
                      level: {
                          type: "int64",
                          id: 2
                      },
                      source: {
                          type: "string",
                          id: 3
                      },
                      profile_decoration_ribbon: {
                          type: "Image",
                          id: 4
                      },
                      border_privilege_log_extra: {
                          type: "PrivilegeLogExtra",
                          id: 5
                      },
                      profile_privilege_log_extra: {
                          type: "PrivilegeLogExtra",
                          id: 6
                      },
                      avatar_background_color: {
                          type: "string",
                          id: 7
                      },
                      avatar_background_border_color: {
                          type: "string",
                          id: 8
                      }
                  }
              },
              UserAttr: {
                  fields: {
                      is_muted: {
                          type: "bool",
                          id: 1
                      },
                      is_admin: {
                          type: "bool",
                          id: 2
                      },
                      is_super_admin: {
                          type: "bool",
                          id: 3
                      },
                      mute_duration: {
                          type: "int64",
                          id: 4
                      },
                      admin_permissions: {
                          keyType: "int32",
                          type: "int32",
                          id: 5
                      },
                      has_voting_function: {
                          type: "bool",
                          id: 6
                      },
                      is_channel_admin: {
                          type: "bool",
                          id: 7
                      }
                  }
              },
              OwnRoom: {
                  fields: {
                      room_ids: {
                          rule: "repeated",
                          type: "int64",
                          id: 1
                      },
                      room_ids_str: {
                          rule: "repeated",
                          type: "string",
                          id: 2
                      }
                  }
              },
              AnchorInfo: {
                  fields: {
                      level: {
                          type: "int64",
                          id: 1
                      }
                  }
              },
              AnchorLevel: {
                  fields: {
                      level: {
                          type: "int64",
                          id: 1
                      },
                      experience: {
                          type: "int64",
                          id: 2
                      },
                      lowest_experience_this_level: {
                          type: "int64",
                          id: 3
                      },
                      highest_experience_this_level: {
                          type: "int64",
                          id: 4
                      },
                      task_start_experience: {
                          type: "int64",
                          id: 5
                      },
                      task_start_time: {
                          type: "int64",
                          id: 6
                      },
                      task_decrease_experience: {
                          type: "int64",
                          id: 7
                      },
                      task_target_experience: {
                          type: "int64",
                          id: 8
                      },
                      task_end_time: {
                          type: "int64",
                          id: 9
                      },
                      profile_dialog_bg: {
                          type: "Image",
                          id: 10
                      },
                      profile_dialog_bg_back: {
                          type: "Image",
                          id: 11
                      },
                      stage_level: {
                          type: "Image",
                          id: 12
                      },
                      small_icon: {
                          type: "Image",
                          id: 13
                      }
                  }
              },
              AuthorStats: {
                  fields: {
                      video_total_count: {
                          type: "int64",
                          id: 1
                      },
                      video_total_play_count: {
                          type: "int64",
                          id: 2
                      },
                      video_total_share_count: {
                          type: "int64",
                          id: 3
                      },
                      video_total_series_count: {
                          type: "int64",
                          id: 4
                      },
                      variety_show_play_count: {
                          type: "int64",
                          id: 5
                      },
                      video_total_favorite_count: {
                          type: "int64",
                          id: 6
                      }
                  }
              },
              DeprecatedType1: {
                  fields: {
                      deprecated1: {
                          type: "string",
                          id: 1
                      },
                      deprecated2: {
                          type: "int64",
                          id: 2
                      },
                      deprecated3: {
                          type: "int64",
                          id: 3
                      },
                      deprecated4: {
                          type: "string",
                          id: 4
                      },
                      deprecated5: {
                          type: "string",
                          id: 5
                      },
                      deprecated6: {
                          type: "bool",
                          id: 6
                      },
                      deprecated7: {
                          type: "DeprecatedType2",
                          id: 7
                      }
                  },
                  nested: {
                      DeprecatedType2: {
                          fields: {
                              deprecated1: {
                                  type: "string",
                                  id: 1
                              },
                              deprecated2: {
                                  type: "string",
                                  id: 2
                              },
                              deprecated3: {
                                  type: "DeprecatedType3",
                                  id: 3
                              }
                          },
                          nested: {
                              DeprecatedType3: {
                                  fields: {
                                      deprecated1: {
                                          type: "string",
                                          id: 1
                                      },
                                      deprecated2: {
                                          type: "string",
                                          id: 2
                                      },
                                      deprecated3: {
                                          type: "string",
                                          id: 3
                                      }
                                  }
                              }
                          }
                      }
                  }
              },
              ActivityInfo: {
                  fields: {
                      Badge: {
                          type: "Image",
                          id: 1
                      },
                      StoryTag: {
                          type: "Image",
                          id: 2
                      }
                  }
              },
              DeprecatedType4: {
                  fields: {
                      deprecated1: {
                          type: "Image",
                          id: 1
                      },
                      deprecated2: {
                          type: "int64",
                          id: 2
                      },
                      deprecated3: {
                          type: "Image",
                          id: 3
                      },
                      deprecated4: {
                          type: "string",
                          id: 4
                      },
                      deprecated5: {
                          type: "int64",
                          id: 5
                      },
                      deprecated6: {
                          type: "Image",
                          id: 6
                      },
                      deprecated7: {
                          type: "Image",
                          id: 7
                      },
                      deprecated8: {
                          type: "Image",
                          id: 8
                      },
                      deprecated9: {
                          rule: "repeated",
                          type: "string",
                          id: 9
                      }
                  }
              },
              DeprecatedType5: {
                  fields: {
                      deprecated1: {
                          type: "string",
                          id: 1
                      },
                      deprecated2: {
                          type: "int64",
                          id: 2
                      },
                      deprecated3: {
                          type: "Image",
                          id: 3
                      },
                      deprecated4: {
                          type: "string",
                          id: 4
                      }
                  }
              },
              AuthenticationInfo: {
                  fields: {
                      custom_verify: {
                          type: "string",
                          id: 1
                      },
                      enterprise_verify_reason: {
                          type: "string",
                          id: 2
                      },
                      authentication_badge: {
                          type: "Image",
                          id: 3
                      },
                      has_cert: {
                          type: "bool",
                          id: 4
                      }
                  }
              },
              DeprecatedType6: {
                  fields: {
                      deprecated1: {
                          type: "bool",
                          id: 1
                      },
                      deprecated2: {
                          type: "int64",
                          id: 2
                      },
                      deprecated3: {
                          type: "string",
                          id: 3
                      },
                      deprecated4: {
                          type: "string",
                          id: 4
                      }
                  }
              },
              ComboBadgeInfo: {
                  fields: {
                      icon: {
                          type: "Image",
                          id: 1
                      },
                      combo_count: {
                          type: "int64",
                          id: 2
                      }
                  }
              },
              SubscribeBadge: {
                  fields: {
                      origin_img: {
                          type: "webcast.data.Image",
                          id: 3
                      },
                      preview_img: {
                          type: "webcast.data.Image",
                          id: 4
                      },
                      is_customized: {
                          type: "bool",
                          id: 5
                      }
                  }
              },
              SubscribeInfo: {
                  fields: {
                      qualification: {
                          type: "bool",
                          id: 1
                      },
                      is_subscribe: {
                          type: "bool",
                          id: 2
                      },
                      badge: {
                          type: "SubscribeBadge",
                          id: 3
                      },
                      enable_subscription: {
                          type: "bool",
                          id: 4
                      },
                      subscriber_count: {
                          type: "int64",
                          id: 5
                      },
                      is_in_grace_period: {
                          type: "bool",
                          id: 6
                      },
                      is_subscribed_to_anchor: {
                          type: "bool",
                          id: 7
                      },
                      timer_detail: {
                          type: "webcast.data.TimerDetail",
                          id: 8
                      },
                      user_gift_sub_auth: {
                          type: "bool",
                          id: 9
                      },
                      anchor_gift_sub_auth: {
                          type: "bool",
                          id: 10
                      },
                      status: {
                          type: "PayStatus",
                          id: 11
                      },
                      sub_end_time: {
                          type: "int64",
                          id: 12
                      },
                      package_id: {
                          type: "string",
                          id: 13
                      },
                      sol_room_display_text: {
                          type: "string",
                          id: 14
                      },
                      is_sol_eligible: {
                          type: "bool",
                          id: 15
                      }
                  },
                  nested: {
                      PayStatus: {
                          values: {
                              SubStatus_Unknown: 0,
                              SubStatus_OneTime: 1,
                              SubStatus_AutoDeduction: 2,
                              SubStatus_AutoDeductionCanceled: 3,
                              SubStatus_Revoke: 4
                          }
                      }
                  }
              },
              FansClubInfo: {
                  fields: {
                      is_sleeping: {
                          type: "bool",
                          id: 1
                      },
                      fans_level: {
                          type: "int64",
                          id: 2
                      },
                      fans_score: {
                          type: "int64",
                          id: 3
                      },
                      badge: {
                          type: "webcast.data.Image",
                          id: 4
                      },
                      fans_count: {
                          type: "int64",
                          id: 5
                      },
                      fans_club_name: {
                          type: "string",
                          id: 6
                      }
                  }
              },
              UserStats: {
                  fields: {
                      id: {
                          type: "int64",
                          id: 1
                      },
                      id_str: {
                          type: "string",
                          id: 2
                      },
                      following_count: {
                          type: "int64",
                          id: 3
                      },
                      follower_count: {
                          type: "int64",
                          id: 4
                      },
                      record_count: {
                          type: "int64",
                          id: 5
                      },
                      total_duration: {
                          type: "int64",
                          id: 6
                      },
                      daily_fan_ticket_count: {
                          type: "int64",
                          id: 7
                      },
                      daily_income: {
                          type: "int64",
                          id: 8
                      },
                      item_count: {
                          type: "int64",
                          id: 9
                      },
                      favorite_item_count: {
                          type: "int64",
                          id: 10
                      },
                      deprecated27: {
                          type: "int64",
                          id: 11
                      },
                      diamond_consumed_count: {
                          type: "int64",
                          id: 12
                      },
                      tuwen_item_count: {
                          type: "int64",
                          id: 13
                      }
                  }
              },
              EcommerceEntrance: {
                  fields: {
                      entrance_type: {
                          type: "EntranceType",
                          id: 1
                      },
                      creator_type: {
                          type: "CreatorType",
                          id: 2
                      },
                      schema: {
                          type: "string",
                          id: 3
                      },
                      shop_entrance_info: {
                          type: "ShopEntranceInfo",
                          id: 4
                      },
                      showcase_entrance_info: {
                          type: "ShowcaseEntranceInfo",
                          id: 5
                      },
                      view_version: {
                          type: "ViewVersion",
                          id: 6
                      }
                  },
                  nested: {
                      EntranceType: {
                          values: {
                              Profile: 0,
                              Showcase: 1,
                              Shop: 2
                          }
                      },
                      CreatorType: {
                          values: {
                              Undefined: 0,
                              Official: 1,
                              Market: 2,
                              Normal: 3
                          }
                      },
                      SellingPoint: {
                          fields: {
                              show_text: {
                                  type: "string",
                                  id: 1
                              },
                              selling_point_type: {
                                  type: "LiveSellingPointType",
                                  id: 2
                              }
                          },
                          nested: {
                              LiveSellingPointType: {
                                  values: {
                                      UNDEFINED: 0,
                                      QUALITY: 1,
                                      SOLD: 2,
                                      TRUST_BETTER_THAN_OTHER_SHOP: 3,
                                      TRUST_REPLY_IN_TIME: 4,
                                      TRUST_CREATE_SHIP_IN_TIME: 5,
                                      TRUST_POSITIVE_REVIEW_RATE: 6
                                  }
                              }
                          }
                      },
                      ShopEntranceInfo: {
                          fields: {
                              shop_id: {
                                  type: "string",
                                  id: 1
                              },
                              shop_name: {
                                  type: "string",
                                  id: 2
                              },
                              shop_rating: {
                                  type: "string",
                                  id: 3
                              },
                              store_label: {
                                  type: "StoreLabel",
                                  id: 4
                              },
                              format_sold_count: {
                                  type: "string",
                                  id: 5
                              },
                              sold_count: {
                                  type: "int64",
                                  id: 6
                              },
                              exp_rate_percentile: {
                                  type: "int32",
                                  id: 7
                              },
                              exp_rate_top_display: {
                                  type: "string",
                                  id: 8
                              },
                              rate_display_style: {
                                  type: "int32",
                                  id: 9
                              },
                              show_rate_not_applicable: {
                                  type: "bool",
                                  id: 10
                              },
                              selling_point: {
                                  rule: "repeated",
                                  type: "SellingPoint",
                                  id: 11
                              }
                          },
                          nested: {
                              StoreLabel: {
                                  fields: {
                                      official_label: {
                                          type: "StoreOfficialLabel",
                                          id: 1
                                      },
                                      is_bytemall: {
                                          type: "bool",
                                          id: 2
                                      }
                                  },
                                  nested: {
                                      StoreBrandLabelType: {
                                          values: {
                                              None: 0,
                                              Official: 1,
                                              Authorized: 2,
                                              STORE_BRAND_LABEL_TYPE_BLUE_V: 3,
                                              STORE_BRAND_LABEL_TYPE_TOP_CHOICE: 4,
                                              STORE_BRAND_LABEL_TYPE_MALL: 5
                                          }
                                      },
                                      StoreOfficialLabel: {
                                          fields: {
                                              label_image_light: {
                                                  type: "ShopLabelImage",
                                                  id: 1
                                              },
                                              label_image_dark: {
                                                  type: "ShopLabelImage",
                                                  id: 2
                                              },
                                              label_type: {
                                                  type: "StoreBrandLabelType",
                                                  id: 3
                                              },
                                              label_type_str: {
                                                  type: "string",
                                                  id: 4
                                              }
                                          },
                                          nested: {
                                              ShopLabelImage: {
                                                  fields: {
                                                      height: {
                                                          type: "int32",
                                                          id: 1
                                                      },
                                                      width: {
                                                          type: "int32",
                                                          id: 2
                                                      },
                                                      minetype: {
                                                          type: "string",
                                                          id: 3
                                                      },
                                                      thumb_uri: {
                                                          type: "string",
                                                          id: 4
                                                      },
                                                      thumb_uri_list: {
                                                          rule: "repeated",
                                                          type: "string",
                                                          id: 5
                                                      },
                                                      uri: {
                                                          type: "string",
                                                          id: 6
                                                      },
                                                      url_list: {
                                                          rule: "repeated",
                                                          type: "string",
                                                          id: 7
                                                      },
                                                      color: {
                                                          type: "string",
                                                          id: 8
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      },
                      ShowcaseEntranceInfo: {
                          fields: {
                              format_sold_count: {
                                  type: "string",
                                  id: 1
                              },
                              sold_count: {
                                  type: "int64",
                                  id: 2
                              },
                              showcase_name: {
                                  type: "string",
                                  id: 3
                              },
                              selling_point: {
                                  rule: "repeated",
                                  type: "SellingPoint",
                                  id: 11
                              }
                          }
                      },
                      ViewVersion: {
                          values: {
                              VIEW_VERSION_UNKNOWN: 0,
                              VIEW_VERSION_STAR_SHOP: 1
                          }
                      }
                  }
              }
          }
      }
  },
  445676: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              vip_level: {
                  type: "int64",
                  id: 1
              },
              vip_level_name: {
                  type: "string",
                  id: 2
              },
              status: {
                  type: "VIPStatus",
                  id: 3
              },
              start_time: {
                  type: "int64",
                  id: 4
              },
              end_time: {
                  type: "int64",
                  id: 5
              },
              remaining_days: {
                  type: "int64",
                  id: 6
              },
              total_consume: {
                  type: "int64",
                  id: 7
              },
              target_consume: {
                  type: "int64",
                  id: 8
              },
              badge: {
                  type: "VIPBadge",
                  id: 9
              },
              privileges: {
                  keyType: "int64",
                  type: "bool",
                  id: 10
              }
          }
      }
  },
  876712: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              icons: {
                  keyType: "int64",
                  type: "webcast.data.Image",
                  id: 1
              }
          }
      }
  },
  266647: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              VIPBadgeType_Unknown: 0,
              VIPDefault: 1,
              RankBigBadge: 2
          }
      }
  },
  333196: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              open_price: {
                  type: "int64",
                  id: 1
              },
              renew_price: {
                  type: "int64",
                  id: 2
              }
          }
      }
  },
  692377: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              VIPPrivilegeDefinition_Unknown: 0,
              VideoBadge: 1,
              LiveBadge: 201,
              RoomNotify: 202,
              VIPSeat: 203,
              VIPRank: 204,
              ExclusiveVIPGift: 205,
              EnterEffect: 206,
              LiveCommentShading: 207,
              ExclusiveCustomerService: 208,
              AllRoomNotify: 209,
              PreventKickOff: 210
          }
      }
  },
  35721: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              VIPStatus_Unknown: 0,
              Renewing: 1,
              RenewSuccess: 2,
              Protective: 3
          }
      }
  },
  835220: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          values: {
              VerticalPaddingRuleUseDefault: 0,
              VerticalPaddingRuleUseTopAndBottom: 1
          }
      }
  },
  474781: function(e, t, i) {
      "use strict";
      i.d(t, {
          Z: () => s
      });
      let s = {
          fields: {
              send_user_id: {
                  type: "int64",
                  id: 1
              },
              send_timestamp: {
                  type: "int64",
                  id: 2
              },
              avatars: {
                  rule: "repeated",
                  type: "webcast.data.Image",
                  id: 3
              }
          }
      }
  },
  847235: function(e, t, i) {
      "use strict";
      i.r(t),
      i.d(t, {
          default: () => e5
      });
      let s = {
          fields: {
              common: {
                  type: "Common",
                  id: 1
              },
              content: {
                  type: "string",
                  id: 2
              },
              supprot_landscape: {
                  type: "bool",
                  id: 3
              },
              source: {
                  type: "int64",
                  id: 4
              },
              icon: {
                  type: "webcast.data.Image",
                  id: 5
              },
              scene: {
                  type: "string",
                  id: 6
              },
              is_welcome: {
                  type: "bool",
                  id: 7
              },
              public_area_common: {
                  type: "PublicAreaMessageCommon",
                  id: 8
              },
              show_duration_ms: {
                  type: "int64",
                  id: 9
              },
              sub_scene: {
                  type: "string",
                  id: 10
              }
          }
      };
      var n = i(14136)
        , o = i(953582)
        , r = i(797467)
        , a = i(700810)
        , d = i(770019)
        , l = i(561905)
        , p = i(146518)
        , c = i(880226)
        , u = i(749805)
        , h = i(525070)
        , g = i(668924)
        , f = i(983610)
        , y = i(352687)
        , _ = i(658351)
        , m = i(757859)
        , v = i(946247)
        , M = i(934558)
        , b = i(518193)
        , T = i(56363)
        , w = i(926668)
        , S = i(912133)
        , k = i(506467)
        , E = i(44288)
        , R = i(559196)
        , P = i(986565)
        , A = i(251855)
        , I = i(837662)
        , C = i(576215)
        , O = i(102117)
        , L = i(909412)
        , N = i(774987)
        , G = i(465741)
        , B = i(649819)
        , x = i(207538)
        , D = i(570178)
        , U = i(161705)
        , j = i(269741)
        , F = i(873484)
        , Z = i(376883)
        , H = i(174627)
        , Y = i(721530)
        , V = i(340272)
        , W = i(658777)
        , z = i(464357)
        , K = i(551327)
        , $ = i(980179)
        , J = i(700190)
        , q = i(167172)
        , Q = i(900819)
        , X = i(70511)
        , ee = i(170302)
        , et = i(8710)
        , ei = i(217362)
        , es = i(158614)
        , en = i(751006)
        , eo = i(488212)
        , er = i(474781)
        , ea = i(539701)
        , ed = i(652210)
        , el = i(84374)
        , ep = i(35721)
        , ec = i(692377)
        , eu = i(266647)
        , eh = i(876712)
        , eg = i(445676)
        , ef = i(333196)
        , ey = i(335664)
        , e_ = i(21323)
        , em = i(831540)
        , ev = i(790030)
        , eM = i(467238)
        , eb = i(960416)
        , eT = i(286596)
        , ew = i(766961)
        , eS = i(835220)
        , ek = i(993907)
        , eE = i(484911)
        , eR = i(271140)
        , eP = i(717364)
        , eA = i(107677)
        , eI = i(909625)
        , eC = i(121946)
        , eO = i(176637)
        , eL = i(876170)
        , eN = i(548254)
        , eG = i(987339)
        , eB = i(545586)
        , ex = i(553131)
        , eD = i(188695)
        , eU = i(458140)
        , ej = i(307188)
        , eF = i(713003)
        , eZ = i(473303)
        , eH = i(443669)
        , eY = i(231044)
        , eV = i(662784)
        , eW = i(601635)
        , ez = i(840284)
        , eK = i(156111)
        , e$ = i(847628)
        , eJ = i(436671)
        , eq = i(868047)
        , eQ = i(411391)
        , eX = i(507506)
        , e0 = i(893665)
        , e1 = i(525849)
        , e2 = i(990797)
        , e3 = i(565182)
        , e4 = i(860937)
        , e6 = i(608714);
      let e5 = {
          nested: {
              webcast: {
                  nested: {
                      im: {
                          nested: {
                              RoomMessage: s,
                              Common: n.Z,
                              IMDispatchStrategy: o.Z,
                              PublicAreaCommon: r.Z,
                              FlexImageStruct: a.Z,
                              PublicAreaMessageCommon: d.Z
                          }
                      },
                      data: {
                          nested: {
                              PatternRef: l.Z,
                              TextFormat: p.Z,
                              TextPieceUser: c.Z,
                              GiftShowType: u.Z,
                              TextPieceGift: h.Z,
                              TextPieceHeart: g.Z,
                              TextPiecePatternRef: f.Z,
                              TextPieceImage: y.Z,
                              TextPiece: _.Z,
                              Text: m.Z,
                              TestDemo: v.Z,
                              User: M.Z,
                              Image: b.Z,
                              DiggIcon: T.Z,
                              LinkmicVendor: w.Z,
                              LinkmicStatus: S.Z,
                              MuteStatus: k.Z,
                              LinkmicPlayType: E.Z,
                              CoHostPermissoinType: R.Z,
                              LinkmicUserStatus: P.Z,
                              StatusTextType: A.Z,
                              AnchorLinkmicUserSettings: I.Z,
                              BattleUserSettings: C.Z,
                              TopHostInfo: O.Z,
                              DetailBlockReason: L.Z,
                              CohostLayoutMode: N.Z,
                              RivalExtraInfo: G.Z,
                              LinkerInviteMessageExtra: B.Z,
                              CohostListUser: x.Z,
                              Tag: D.Z,
                              TagV2: U.Z,
                              RivalsGameTag: j.Z,
                              LinkmicMultiLiveEnum: F.Z,
                              LinkmicSwitchStatus: Z.Z,
                              LinkmicSwitchType: H.Z,
                              LinkmicRtcExtInfoKey: Y.Z,
                              LinkmicPermitStatus: V.Z,
                              LinkmicCheckPermissionOption: W.Z,
                              LinkmicCheckPermissionScene: z.Z,
                              ReserveReplyStatus: K.Z,
                              OptPairStatus: $.Z,
                              OptPairInfo: J.Z,
                              CohostTopic: q.Z,
                              TopicSessionStatus: Q.Z,
                              TopicExtraInfo: X.Z,
                              CohostABTestType: ee.Z,
                              CohostABTest: et.Z,
                              CohostABTestList: ei.Z,
                              CohostABTestSetting: es.Z,
                              EOYBanner: en.Z,
                              CohostNudgeInfo: eo.Z,
                              VirtualWaitingUser: er.Z,
                              Hashtag: ea.Z,
                              HashtagNamespace: ed.Z,
                              GameTag: el.Z,
                              VIPStatus: ep.Z,
                              VIPPrivilegeDefinition: ec.Z,
                              VIPBadgeType: eu.Z,
                              VIPBadge: eh.Z,
                              UserVIPInfo: eg.Z,
                              VIPOpenInfo: ef.Z,
                              BadgeDisplayType: ey.Z,
                              BadgePriorityType: e_.Z,
                              BadgeSceneType: em.Z,
                              BadgeExhibitionType: ev.Z,
                              BadgeText: eM.Z,
                              CombineBadgeBackground: eb.Z,
                              DisplayStatus: eT.Z,
                              HorizontalPaddingRule: ew.Z,
                              VerticalPaddingRule: eS.Z,
                              PaddingInfo: ek.Z,
                              Position: eE.Z,
                              FontStyle: eR.Z,
                              BadgeTextPosition: eP.Z,
                              ProjectionConfig: eA.Z,
                              NumberConfig: eI.Z,
                              IconConfig: eC.Z,
                              SeparatorConfig: eO.Z,
                              ArrowConfig: eL.Z,
                              ProfileContent: eN.Z,
                              ProfileCardPanel: eG.Z,
                              CombineBadge: eB.Z,
                              ImageBadge: ex.Z,
                              TextBadge: eD.Z,
                              StringBadge: eU.Z,
                              BadgeStruct: ej.Z,
                              PrivilegeLogExtra: eF.Z,
                              LiveEventInfo: eZ.Z,
                              PaidEventPreview: eH.Z,
                              PaidEvent: eY.Z,
                              EventCard: eV.Z,
                              EventUserInfo: eW.Z,
                              TimerOpType: ez.Z,
                              TimerStatus: eK.Z,
                              TimerConfig: e$.Z,
                              TimerDetail: eJ.Z,
                              SubTimerStickerChangeType: eq.Z,
                              SubTimerSticker: eQ.Z,
                              InteractionHubGoalSource: eX.Z,
                              InteractionHubGoalType: e0.Z,
                              TagType: e1.Z,
                              TopicActionType: e2.Z,
                              EmptyForPackerGen: e3.Z,
                              LiveMessageSEI: e4.Z,
                              LiveMessageID: e6.Z
                          }
                      }
                  }
              }
          }
      }
  },
  709164: function(e, t, i) {
      "use strict";
      var s;
      i.d(t, {
          w0: () => s
      }),
      function(e) {
          e.AccessControlMessage = "AccessControlMessage",
          e.AccessRecallMessage = "AccessRecallMessage",
          e.ActivityQuizCardMessage = "ActivityQuizCardMessage",
          e.ActivityQuizUserIdentityMessage = "ActivityQuizUserIdentityMessage",
          e.AILiveSummaryMessage = "AILiveSummaryMessage",
          e.AISummaryMessage = "AISummaryMessage",
          e.AlertBoxAuditResultMessage = "AlertBoxAuditResultMessage",
          e.AnchorGrowLevelMessage = "AnchorGrowLevelMessage",
          e.AnchorReminderWordMessage = "AnchorReminderWordMessage",
          e.AnchorTaskReminderMessage = "AnchorTaskReminderMessage",
          e.AnchorToolModificationMessage = "AnchorToolModificationMessage",
          e.ArcTestMessage = "ArcTestMessage",
          e.AssetMessage = "AssetMessage",
          e.AudioChatMessage = "AudioChatMessage",
          e.AuthorizationNotifyMessage = "AuthorizationNotifyMessage",
          e.AutoCoverMessage = "AutoCoverMessage",
          e.AwemeShopExplainMessage = "AwemeShopExplainMessage",
          e.BALeadGenMessage = "BALeadGenMessage",
          e.BALinkMessage = "BALinkMessage",
          e.BALinkFullMessage = "BALinkFullMessage",
          e.BackpackMessage = "BackpackMessage",
          e.BackRecordVideoMessage = "BackRecordVideoMessage",
          e.BarrageMessage = "BarrageMessage",
          e.BeginnerGuideMessage = "BeginnerGuideMessage",
          e.BizStickerMessage = "BizStickerMessage",
          e.BoostCardMessage = "BoostCardMessage",
          e.BoostedUsersMessage = "BoostedUsersMessage",
          e.BottomMessage = "BottomMessage",
          e.BridgeData = "BridgeData",
          e.BridgeMessage = "BridgeMessage",
          e.BrotherhoodMessage = "BrotherhoodMessage",
          e.CapsuleMessage = "CapsuleMessage",
          e.CaptionMessage = "CaptionMessage",
          e.CarBallShowMessage = "CarBallShowMessage",
          e.CarSeriesInfoMessage = "CarSeriesInfoMessage",
          e.CategoryChangeMessage = "CategoryChangeMessage",
          e.ChatMessage = "ChatMessage",
          e.SubContractStatusMessage = "SubContractStatusMessage",
          e.CNYReward = "CNYReward",
          e.CNYATaskMessage = "CNYATaskMessage",
          e.CohostReserveMessage = "CohostReserveMessage",
          e.CohostTopicMessage = "CohostTopicMessage",
          e.LinkBusinessMessage = "LinkBusinessMessage",
          e.ColdStartMessage = "ColdStartMessage",
          e.CommentTrayMessage = "CommentTrayMessage",
          e.CommentsMessage = "CommentsMessage",
          e.CommerceMessage = "CommerceMessage",
          e.CommerceSaleMessage = "CommerceSaleMessage",
          e.CommercialCustomMessage = "CommercialCustomMessage",
          e.CommonGuideMessage = "CommonGuideMessage",
          e.CommonLuckyMoneyMessage = "CommonLuckyMoneyMessage",
          e.CommonPopupMessage = "CommonPopupMessage",
          e.CommonToastMessage = "CommonToastMessage",
          e.ControlMessage = "ControlMessage",
          e.DecorationModifyMessage = "DecorationModifyMessage",
          e.DecorationModifyMessageVTwo = "DecorationModifyMessageVTwo",
          e.DonationStickerModifyMessage = "DonationStickerModifyMessage",
          e.DiggMessage = "DiggMessage",
          e.DLiveMessage = "DLiveMessage",
          e.OfficialRoomMessage = "OfficialRoomMessage",
          e.CeremonyMessage = "CeremonyMessage",
          e.DonationMessage = "DonationMessage",
          e.DonationInfoMessage = "DonationInfoMessage",
          e.DoodleGiftMessage = "DoodleGiftMessage",
          e.DouplusMessage = "DouplusMessage",
          e.DouplusIndicatorMessage = "DouplusIndicatorMessage",
          e.DriveGiftMessage = "DriveGiftMessage",
          e.ProjectDTaskInfo = "ProjectDTaskInfo",
          e.ProjectDModifyH5 = "ProjectDModifyH5",
          e.DutyGiftMessage = "DutyGiftMessage",
          e.MsgDetectMessage = "MsgDetectMessage",
          e.EcBarrageMessage = "EcBarrageMessage",
          e.EcDrawMessage = "EcDrawMessage",
          e.EcShortItemRefreshMessage = "EcShortItemRefreshMessage",
          e.EcTaskRefreshCouponListMessage = "EcTaskRefreshCouponListMessage",
          e.EcTaskRegisterMessage = "EcTaskRegisterMessage",
          e.EmoteChatMessage = "EmoteChatMessage",
          e.EnvelopeMessage = "EnvelopeMessage",
          e.EnvelopePortalMessage = "EnvelopePortalMessage",
          e.EpiMessage = "EpiMessage",
          e.LiveEventMessage = "LiveEventMessage",
          e.FansclubStatisticsMessage = "FansclubStatisticsMessage",
          e.FansclubMessage = "FansclubMessage",
          e.FansclubReviewMessage = "FansclubReviewMessage",
          e.FansclubGuideMessage = "FansclubGuideMessage",
          e.FansEventMessage = "FansEventMessage",
          e.FeedUserRoomMonitorMessage = "FeedUserRoomMonitorMessage",
          e.FollowCardMessage = "FollowCardMessage",
          e.FollowGuideMessage = "FollowGuideMessage",
          e.FreeCellGiftMessage = "FreeCellGiftMessage",
          e.FreeGiftMessage = "FreeGiftMessage",
          e.GamblingStatusChangedMessage = "GamblingStatusChangedMessage",
          e.WebcastGameChannelMessage = "WebcastGameChannelMessage",
          e.GameEmoteUpdateMessage = "GameEmoteUpdateMessage",
          e.GameServerFeatureMessage = "GameServerFeatureMessage",
          e.GameGiftMessage = "GameGiftMessage",
          e.GameGiftStatusMessage = "GameGiftStatusMessage",
          e.GuessQuestionAuditMessage = "GuessQuestionAuditMessage",
          e.GameGuessWidgetsMessage = "GameGuessWidgetsMessage",
          e.GameStatusMessage = "GameStatusMessage",
          e.LiveGameIntroMessage = "LiveGameIntroMessage",
          e.GameInviteMessage = "GameInviteMessage",
          e.GameInviteReplyMessage = "GameInviteReplyMessage",
          e.GameRoomBroadcastMessage = "GameRoomBroadcastMessage",
          e.GameMomentMessage = "GameMomentMessage",
          e.PreviewGameMomentMessage = "PreviewGameMomentMessage",
          e.GameOCRPingMessage = "GameOCRPingMessage",
          e.PartnershipCardChangeMessage = "PartnershipCardChangeMessage",
          e.PartnershipDownloadCountMessage = "PartnershipDownloadCountMessage",
          e.PartnershipDropsAnchorMessage = "PartnershipDropsAnchorMessage",
          e.PartnershipDropsCardChangeMessage = "PartnershipDropsCardChangeMessage",
          e.PartnershipDropsUpdateMessage = "PartnershipDropsUpdateMessage",
          e.PartnershipGameOfflineMessage = "PartnershipGameOfflineMessage",
          e.PartnershipPunishMessage = "PartnershipPunishMessage",
          e.PartnershipTaskShowMessage = "PartnershipTaskShowMessage",
          e.GameRankNotifyMessage = "GameRankNotifyMessage",
          e.GameRevenueTipsMessage = "GameRevenueTipsMessage",
          e.GameStatusUpdateMessage = "GameStatusUpdateMessage",
          e.GiftMessage = "GiftMessage",
          e.BindingGiftMessage = "BindingGiftMessage",
          e.GiftBroadcastMessage = "GiftBroadcastMessage",
          e.GiftCollectionUpdateMessage = "GiftCollectionUpdateMessage",
          e.GiftDynamicRestrictionMessage = "GiftDynamicRestrictionMessage",
          e.EffectPreloadingMessage = "EffectPreloadingMessage",
          e.GiftGalleryMessage = "GiftGalleryMessage",
          e.GiftGuideMessage = "GiftGuideMessage",
          e.GiftNoticeMessage = "GiftNoticeMessage",
          e.GiftProgressMessage = "GiftProgressMessage",
          e.GiftPromptMessage = "GiftPromptMessage",
          e.GiftRecordCapsuleMessage = "GiftRecordCapsuleMessage",
          e.GiftUnlockMessage = "GiftUnlockMessage",
          e.GiftUpdateMessage = "GiftUpdateMessage",
          e.GiftVoteMessage = "GiftVoteMessage",
          e.GoalUpdateMessage = "GoalUpdateMessage",
          e.GoodyBagMessage = "GoodyBagMessage",
          e.GreetingMessage = "GreetingMessage",
          e.GroupLiveMemberNotifyMessage = "GroupLiveMemberNotifyMessage",
          e.GameGuessPinCardMessage = "GameGuessPinCardMessage",
          e.GuideMessage = "GuideMessage",
          e.GuideTaskMessage = "GuideTaskMessage",
          e.HashtagMessage = "HashtagMessage",
          e.HighlightFragmentReadyMessage = "HighlightFragmentReadyMessage",
          e.HotRoomMessage = "HotRoomMessage",
          e.HourlyRankMessage = "HourlyRankMessage",
          e.HourlyRankRewardMessage = "HourlyRankRewardMessage",
          e.WeeklyRankRewardMessage = "WeeklyRankRewardMessage",
          e.RankTextMessage = "RankTextMessage",
          e.ImDeleteMessage = "ImDeleteMessage",
          e.IMRouteDagMessage = "IMRouteDagMessage",
          e.InRoomBannerMessage = "InRoomBannerMessage",
          e.InRoomBannerEvent = "InRoomBannerEvent",
          e.InRoomBannerRedPoint = "InRoomBannerRedPoint",
          e.InRoomBannerRefreshMessage = "InRoomBannerRefreshMessage",
          e.InstantCommandMessage = "InstantCommandMessage",
          e.InteractionHubGoalMessage = "InteractionHubGoalMessage",
          e.QuestionDeleteMessage = "QuestionDeleteMessage",
          e.QuestionSelectedMessage = "QuestionSelectedMessage",
          e.QuestionSlideDownMessage = "QuestionSlideDownMessage",
          e.QuestionSwitchMessage = "QuestionSwitchMessage",
          e.QuestionNewMessage = "QuestionNewMessage",
          e.InteractiveEffectMessage = "InteractiveEffectMessage",
          e.KaraokeQueueMessage = "KaraokeQueueMessage",
          e.KaraokeQueueListMessage = "KaraokeQueueListMessage",
          e.KaraokeRedDotMessage = "KaraokeRedDotMessage",
          e.KaraokeReqMessage = "KaraokeReqMessage",
          e.KaraokeSwitchMessage = "KaraokeSwitchMessage",
          e.KaraokeYouSingReqMessage = "KaraokeYouSingReqMessage",
          e.LevelUpMessage = "LevelUpMessage",
          e.LikeMessage = "LikeMessage",
          e.LinkerContributeMessage = "LinkerContributeMessage",
          e.LinkMessage = "LinkMessage",
          e.LinkMicAdMessage = "LinkMicAdMessage",
          e.LinkMicAnchorGuideMessage = "LinkMicAnchorGuideMessage",
          e.LinkmicAnimationMessage = "LinkmicAnimationMessage",
          e.LinkMicArmies = "LinkMicArmies",
          e.LinkmicAudienceNoticeMessage = "LinkmicAudienceNoticeMessage",
          e.AudienceReserveUserStateMessage = "AudienceReserveUserStateMessage",
          e.LinkMicBattle = "LinkMicBattle",
          e.LinkMicBattleItemCard = "LinkMicBattleItemCard",
          e.LinkmicBattleNoticeMessage = "LinkmicBattleNoticeMessage",
          e.LinkMicBattlePunishFinish = "LinkMicBattlePunishFinish",
          e.LinkmicBattleTaskMessage = "LinkmicBattleTaskMessage",
          e.LinkMicBattleVictoryLapMessage = "LinkMicBattleVictoryLapMessage",
          e.LinkMicBattleVictoryLap = "LinkMicBattleVictoryLap",
          e.CompetitionMessage = "CompetitionMessage",
          e.LinkMicEnterNoticeMessage = "LinkMicEnterNoticeMessage",
          e.LinkMicFanTicketMethod = "LinkMicFanTicketMethod",
          e.LinkMicGuideMessage = "LinkMicGuideMessage",
          e.LinkLayoutMessage = "LinkLayoutMessage",
          e.LinkMicMethod = "LinkMicMethod",
          e.LinkMicSendEmojiMessage = "LinkMicSendEmojiMessage",
          e.LinkSettingNotifyMessage = "LinkSettingNotifyMessage",
          e.LinkMicSignalingMethod = "LinkMicSignalingMethod",
          e.LinkmicSocialNoticeMessage = "LinkmicSocialNoticeMessage",
          e.MultiGuestPunishCenterActionMsg = "MultiGuestPunishCenterActionMsg",
          e.LinkScreenChangeMessage = "LinkScreenChangeMessage",
          e.LinkLayerMessage = "LinkLayerMessage",
          e.LinkStateMessage = "LinkStateMessage",
          e.MatchMsg = "MatchMsg",
          e.LiveEcomMessage = "LiveEcomMessage",
          e.LiveInfoAuditNoticeMessage = "LiveInfoAuditNoticeMessage",
          e.LiveIntroMessage = "LiveIntroMessage",
          e.LiveJourneyMessage = "LiveJourneyMessage",
          e.LiveShoppingMessage = "LiveShoppingMessage",
          e.LiveStreamControlMessage = "LiveStreamControlMessage",
          e.LotteryMessage = "LotteryMessage",
          e.XGLotteryMessage = "XGLotteryMessage",
          e.LotteryEventMessage = "LotteryEventMessage",
          e.LotteryEventNewMessage = "LotteryEventNewMessage",
          e.LotteryBurstMessage = "LotteryBurstMessage",
          e.LsSubCountdownMessage = "LsSubCountdownMessage",
          e.LuckyBoxMessage = "LuckyBoxMessage",
          e.LuckyMoneyMessage = "LuckyMoneyMessage",
          e.MagicBoxMessage = "MagicBoxMessage",
          e.MarqueeAnnouncementMessage = "MarqueeAnnouncementMessage",
          e.MediaLiveReplayVidMessage = "MediaLiveReplayVidMessage",
          e.MemberMessage = "MemberMessage",
          e.MiddleTouchMessage = "MiddleTouchMessage",
          e.CountdownMessage = "CountdownMessage",
          e.CountdownForAllMessage = "CountdownForAllMessage",
          e.GuestShowdownMessage = "GuestShowdownMessage",
          e.NoticeboardMessage = "NoticeboardMessage",
          e.NoticeboardReviewMessage = "NoticeboardReviewMessage",
          e.PlaybookMessage = "PlaybookMessage",
          e.LiveShowMessage = "LiveShowMessage",
          e.AvatarStyleResultMessage = "AvatarStyleResultMessage",
          e.AvatarGenerateResultMessage = "AvatarGenerateResultMessage",
          e.AvatarReportDeleteMessage = "AvatarReportDeleteMessage",
          e.GuestInviteMessage = "GuestInviteMessage",
          e.GuestInviteGuideMessage = "GuestInviteGuideMessage",
          e.MultiGuestSuggestMessage = "MultiGuestSuggestMessage",
          e.WallpaperMessage = "WallpaperMessage",
          e.WallpaperReviewMessage = "WallpaperReviewMessage",
          e.NabobImNoticeMessage = "NabobImNoticeMessage",
          e.NewAnchorGuideMessage = "NewAnchorGuideMessage",
          e.NobleEnterLeaveMessage = "NobleEnterLeaveMessage",
          e.NobleToastMessage = "NobleToastMessage",
          e.NobleUpgradeMessage = "NobleUpgradeMessage",
          e.NoticeMessage = "NoticeMessage",
          e.NotifyMessage = "NotifyMessage",
          e.OecLiveHotRoomMessage = "OecLiveHotRoomMessage",
          e.OecLiveManagerMessage = "OecLiveManagerMessage",
          e.OecLiveShoppingMessage = "OecLiveShoppingMessage",
          e.OChannelAnchorMessage = "OChannelAnchorMessage",
          e.OChannelUserMessage = "OChannelUserMessage",
          e.OChannelModifyMessage = "OChannelModifyMessage",
          e.StarCommentPushMessage = "StarCommentPushMessage",
          e.StarCommentNotificationMessage = "StarCommentNotificationMessage",
          e.PaidContentLiveShoppingMessage = "PaidContentLiveShoppingMessage",
          e.GiftPanelUpdateMessage = "GiftPanelUpdateMessage",
          e.ForceFetchRecommendationsMessage = "ForceFetchRecommendationsMessage",
          e.PerceptionMessage = "PerceptionMessage",
          e.PicoLikeMessage = "PicoLikeMessage",
          e.PictionaryStartMessage = "PictionaryStartMessage",
          e.PictionaryEndMessage = "PictionaryEndMessage",
          e.PictionaryExitMessage = "PictionaryExitMessage",
          e.PictionaryUpdateMessage = "PictionaryUpdateMessage",
          e.PinMessage = "PinMessage",
          e.PlayTogetherMessage = "PlayTogetherMessage",
          e.PollMessage = "PollMessage",
          e.PopularCardMessage = "PopularCardMessage",
          e.PortalMessage = "PortalMessage",
          e.PrivilegeAdvanceMessage = "PrivilegeAdvanceMessage",
          e.PrivilegeDynamicEffectMessage = "PrivilegeDynamicEffectMessage",
          e.PromoteAdStatusMessage = "PromoteAdStatusMessage",
          e.PropertyNoticeMessage = "PropertyNoticeMessage",
          e.PullStreamUpdateMessage = "PullStreamUpdateMessage",
          e.PushMessage = "PushMessage",
          e.FansclubV1PushMessage = "FansclubV1PushMessage",
          e.QuickChatListMessage = "QuickChatListMessage",
          e.QuizStartMessage = "QuizStartMessage",
          e.QuizResultMessage = "QuizResultMessage",
          e.QuizChangeMessage = "QuizChangeMessage",
          e.QuizBeginMessage = "QuizBeginMessage",
          e.RankToastMessage = "RankToastMessage",
          e.RankListAwardMessage = "RankListAwardMessage",
          e.RankListSprintMessage = "RankListSprintMessage",
          e.RankUpdateMessage = "RankUpdateMessage",
          e.RealtimeLiveCenterMethod = "RealtimeLiveCenterMethod",
          e.RealTimePerformancePageMessage = "RealTimePerformancePageMessage",
          e.GameGuessToastMessage = "GameGuessToastMessage",
          e.CreateRedPacketMessage = "CreateRedPacketMessage",
          e.RushRedPacketMessage = "RushRedPacketMessage",
          e.RoomMessage = "RoomMessage",
          e.PushRoomAdCard = "PushRoomAdCard",
          e.RoomAuthMessage = "RoomAuthMessage",
          e.RoomBottomMessage = "RoomBottomMessage",
          e.RoomChallengeMessage = "RoomChallengeMessage",
          e.RoomConfigMessage = "RoomConfigMessage",
          e.RoomEventMessage = "RoomEventMessage",
          e.RoomHotSentenceMessage = "RoomHotSentenceMessage",
          e.RoomImgMessage = "RoomImgMessage",
          e.RoomIntroMessage = "RoomIntroMessage",
          e.RoomManageMessage = "RoomManageMessage",
          e.RoomStartMessage = "RoomStartMessage",
          e.RoomStickerMessage = "RoomStickerMessage",
          e.RoomStreamAdaptationMessage = "RoomStreamAdaptationMessage",
          e.RoomUserSeqMessage = "RoomUserSeqMessage",
          e.RoomVerifyMessage = "RoomVerifyMessage",
          e.ScreenChatMessage = "ScreenChatMessage",
          e.ShareGuideMessage = "ShareGuideMessage",
          e.ShortTouchAreaMessage = "ShortTouchAreaMessage",
          e.ShortTouchMessage = "ShortTouchMessage",
          e.SocialMessage = "SocialMessage",
          e.SpeakerMessage = "SpeakerMessage",
          e.SpecialPushMessage = "SpecialPushMessage",
          e.UpdateKoiRoomStatusMessage = "UpdateKoiRoomStatusMessage",
          e.StampMessage = "StampMessage",
          e.StickerModifyMessage = "StickerModifyMessage",
          e.StreamControlMessage = "StreamControlMessage",
          e.StreamStatusMessage = "StreamStatusMessage",
          e.SubTimerStickerMessage = "SubTimerStickerMessage",
          e.SubWaveMessage = "SubWaveMessage",
          e.SubscriptionNotifyMessage = "SubscriptionNotifyMessage",
          e.SubNotifyMessage = "SubNotifyMessage",
          e.SubCapsuleMessage = "SubCapsuleMessage",
          e.SubPinEventMessage = "SubPinEventMessage",
          e.AnchorGetSubQuotaMessage = "AnchorGetSubQuotaMessage",
          e.SunDailyRankMessage = "SunDailyRankMessage",
          e.SyncChannelProbeMessage = "SyncChannelProbeMessage",
          e.SystemMessage = "SystemMessage",
          e.TestMessage = "TestMessage",
          e.ToastMessage = "ToastMessage",
          e.ToolbarItemMessage = "ToolbarItemMessage",
          e.TrayMessage = "TrayMessage",
          e.TurntableBurstMessage = "TurntableBurstMessage",
          e.UnauthorizedMemberMessage = "UnauthorizedMemberMessage",
          e.UpgradeMessage = "UpgradeMessage",
          e.UploadCoverMessage = "UploadCoverMessage",
          e.GameReqSetGuessMessage = "GameReqSetGuessMessage",
          e.UserStatsMessage = "UserStatsMessage",
          e.VerificationCodeMessage = "VerificationCodeMessage",
          e.VIPInfoMessage = "VIPInfoMessage",
          e.VIPSeatMessage = "VIPSeatMessage",
          e.WalletLiveRewardsRatioMessage = "WalletLiveRewardsRatioMessage",
          e.WebcastPopularCardMessage = "WebcastPopularCardMessage",
          e.WishlistUpdateMessage = "WishlistUpdateMessage",
          e.VideoLiveGoodsRcmdMessage = "VideoLiveGoodsRcmdMessage",
          e.VideoLiveCouponRcmdMessage = "VideoLiveCouponRcmdMessage",
          e.VideoLiveGoodsOrderMessage = "VideoLiveGoodsOrderMessage"
      }(s || (s = {}))
  },
  296537: function(e, t, i) {
      "use strict";
      i.d(t, {
          ZPm: () => z
      });
      class s {
          constructor() {
              this.ntpDiff = 0
          }
          updateNTPDiff(e, t) {
              let i = Date.now()
                , s = t + (e - i) / 2 - i;
              this.ntpDiff = s
          }
          getNTPClientTime() {
              return Date.now() + this.ntpDiff
          }
          getMessageArriveTime(e) {
              let t = Date.now();
              return {
                  server_now: e,
                  imsdk_recv_time: t,
                  adjusted_imsdk_recv_time: Math.round(t + this.ntpDiff)
              }
          }
      }
      var n = i(603761)
        , o = i(949918)
        , r = i.n(o)
        , a = i(409141)
        , d = i.n(a)
        , l = i(709164);
      let p = {
          [l.w0.AccessControlMessage]: () => i.e("87346").then(i.bind(i, 655881)),
          [l.w0.AccessRecallMessage]: () => i.e("98498").then(i.bind(i, 425576)),
          [l.w0.ActivityQuizCardMessage]: () => i.e("27295").then(i.bind(i, 348019)),
          [l.w0.ActivityQuizUserIdentityMessage]: () => i.e("29860").then(i.bind(i, 770209)),
          [l.w0.AILiveSummaryMessage]: () => i.e("72422").then(i.bind(i, 253952)),
          [l.w0.AISummaryMessage]: () => i.e("85797").then(i.bind(i, 56274)),
          [l.w0.AlertBoxAuditResultMessage]: () => i.e("51514").then(i.bind(i, 147778)),
          [l.w0.AnchorGrowLevelMessage]: () => i.e("75619").then(i.bind(i, 578059)),
          [l.w0.AnchorReminderWordMessage]: () => i.e("39330").then(i.bind(i, 192520)),
          [l.w0.AnchorTaskReminderMessage]: () => i.e("86959").then(i.bind(i, 605682)),
          [l.w0.AnchorToolModificationMessage]: () => i.e("8973").then(i.bind(i, 103197)),
          [l.w0.ArcTestMessage]: () => i.e("59816").then(i.bind(i, 384993)),
          [l.w0.AssetMessage]: () => i.e("68473").then(i.bind(i, 189499)),
          [l.w0.AudioChatMessage]: () => i.e("33981").then(i.bind(i, 779631)),
          [l.w0.AuthorizationNotifyMessage]: () => i.e("6925").then(i.bind(i, 492468)),
          [l.w0.AutoCoverMessage]: () => i.e("76004").then(i.bind(i, 612021)),
          [l.w0.AwemeShopExplainMessage]: () => i.e("26986").then(i.bind(i, 77100)),
          [l.w0.BALeadGenMessage]: () => i.e("46357").then(i.bind(i, 66621)),
          [l.w0.BALinkMessage]: () => i.e("10557").then(i.bind(i, 117132)),
          [l.w0.BALinkFullMessage]: () => i.e("10557").then(i.bind(i, 117132)),
          [l.w0.BackpackMessage]: () => Promise.all([i.e("29360"), i.e("86437")]).then(i.bind(i, 522205)),
          [l.w0.BackRecordVideoMessage]: () => i.e("30133").then(i.bind(i, 926576)),
          [l.w0.BarrageMessage]: () => Promise.all([i.e("89752"), i.e("94655")]).then(i.bind(i, 201852)),
          [l.w0.BeginnerGuideMessage]: () => i.e("54815").then(i.bind(i, 302694)),
          [l.w0.BizStickerMessage]: () => i.e("86582").then(i.bind(i, 662238)),
          [l.w0.BoostCardMessage]: () => i.e("10041").then(i.bind(i, 256709)),
          [l.w0.BoostedUsersMessage]: () => i.e("20647").then(i.bind(i, 8326)),
          [l.w0.BottomMessage]: () => i.e("35041").then(i.bind(i, 518345)),
          [l.w0.BridgeData]: () => i.e("18618").then(i.bind(i, 556880)),
          [l.w0.BridgeMessage]: () => i.e("18618").then(i.bind(i, 556880)),
          [l.w0.BrotherhoodMessage]: () => i.e("71981").then(i.bind(i, 537213)),
          [l.w0.CapsuleMessage]: () => Promise.all([i.e("89752"), i.e("29360"), i.e("36062"), i.e("92783"), i.e("53782")]).then(i.bind(i, 368378)),
          [l.w0.CaptionMessage]: () => i.e("80742").then(i.bind(i, 720471)),
          [l.w0.CarBallShowMessage]: () => i.e("7749").then(i.bind(i, 36443)),
          [l.w0.CarSeriesInfoMessage]: () => i.e("85589").then(i.bind(i, 681322)),
          [l.w0.CategoryChangeMessage]: () => i.e("6382").then(i.bind(i, 328637)),
          [l.w0.ChatMessage]: () => Promise.all([i.e("89752"), i.e("14845")]).then(i.bind(i, 889217)),
          [l.w0.SubContractStatusMessage]: () => Promise.all([i.e("89752"), i.e("22891")]).then(i.bind(i, 57472)),
          [l.w0.CNYReward]: () => i.e("77285").then(i.bind(i, 102706)),
          [l.w0.CNYATaskMessage]: () => i.e("77285").then(i.bind(i, 102706)),
          [l.w0.CohostReserveMessage]: () => i.e("96742").then(i.bind(i, 385573)),
          [l.w0.CohostTopicMessage]: () => i.e("96742").then(i.bind(i, 385573)),
          [l.w0.LinkBusinessMessage]: () => i.e("96742").then(i.bind(i, 385573)),
          [l.w0.ColdStartMessage]: () => i.e("74961").then(i.bind(i, 36355)),
          [l.w0.CommentTrayMessage]: () => i.e("41487").then(i.bind(i, 546715)),
          [l.w0.CommentsMessage]: () => i.e("84727").then(i.bind(i, 668702)),
          [l.w0.CommerceMessage]: () => i.e("23652").then(i.bind(i, 679266)),
          [l.w0.CommerceSaleMessage]: () => i.e("83874").then(i.bind(i, 945686)),
          [l.w0.CommercialCustomMessage]: () => i.e("71758").then(i.bind(i, 497913)),
          [l.w0.CommonGuideMessage]: () => i.e("75251").then(i.bind(i, 31905)),
          [l.w0.CommonLuckyMoneyMessage]: () => i.e("381").then(i.bind(i, 450069)),
          [l.w0.CommonPopupMessage]: () => i.e("61214").then(i.bind(i, 682497)),
          [l.w0.CommonToastMessage]: () => i.e("81245").then(i.bind(i, 336017)),
          [l.w0.ControlMessage]: () => i.e("56038").then(i.bind(i, 536954)),
          [l.w0.DecorationModifyMessage]: () => i.e("45054").then(i.bind(i, 615277)),
          [l.w0.DecorationModifyMessageVTwo]: () => i.e("45054").then(i.bind(i, 615277)),
          [l.w0.DonationStickerModifyMessage]: () => i.e("45054").then(i.bind(i, 615277)),
          [l.w0.DiggMessage]: () => i.e("68714").then(i.bind(i, 921603)),
          [l.w0.DLiveMessage]: () => i.e("81461").then(i.bind(i, 36770)),
          [l.w0.OfficialRoomMessage]: () => i.e("81461").then(i.bind(i, 36770)),
          [l.w0.CeremonyMessage]: () => i.e("81461").then(i.bind(i, 36770)),
          [l.w0.DonationMessage]: () => i.e("55977").then(i.bind(i, 618872)),
          [l.w0.DonationInfoMessage]: () => i.e("55977").then(i.bind(i, 618872)),
          [l.w0.DoodleGiftMessage]: () => i.e("75205").then(i.bind(i, 377453)),
          [l.w0.DouplusMessage]: () => i.e("64257").then(i.bind(i, 226047)),
          [l.w0.DouplusIndicatorMessage]: () => i.e("10939").then(i.bind(i, 176498)),
          [l.w0.DriveGiftMessage]: () => i.e("85597").then(i.bind(i, 977644)),
          [l.w0.ProjectDTaskInfo]: () => i.e("90211").then(i.bind(i, 726791)),
          [l.w0.ProjectDModifyH5]: () => i.e("25322").then(i.bind(i, 689560)),
          [l.w0.DutyGiftMessage]: () => i.e("89033").then(i.bind(i, 176877)),
          [l.w0.MsgDetectMessage]: () => i.e("40674").then(i.bind(i, 943351)),
          [l.w0.EcBarrageMessage]: () => i.e("64872").then(i.bind(i, 992349)),
          [l.w0.EcDrawMessage]: () => i.e("402").then(i.bind(i, 290510)),
          [l.w0.EcShortItemRefreshMessage]: () => i.e("96120").then(i.bind(i, 915119)),
          [l.w0.EcTaskRefreshCouponListMessage]: () => i.e("6909").then(i.bind(i, 962510)),
          [l.w0.EcTaskRegisterMessage]: () => i.e("5504").then(i.bind(i, 101284)),
          [l.w0.EmoteChatMessage]: () => Promise.all([i.e("89752"), i.e("9508")]).then(i.bind(i, 618991)),
          [l.w0.EnvelopeMessage]: () => i.e("74245").then(i.bind(i, 891264)),
          [l.w0.EnvelopePortalMessage]: () => i.e("3680").then(i.bind(i, 247995)),
          [l.w0.EpiMessage]: () => i.e("93572").then(i.bind(i, 966238)),
          [l.w0.LiveEventMessage]: () => i.e("92501").then(i.bind(i, 968770)),
          [l.w0.FansclubStatisticsMessage]: () => i.e("55382").then(i.bind(i, 225961)),
          [l.w0.FansclubMessage]: () => i.e("55382").then(i.bind(i, 225961)),
          [l.w0.FansclubReviewMessage]: () => i.e("55382").then(i.bind(i, 225961)),
          [l.w0.FansclubGuideMessage]: () => i.e("55382").then(i.bind(i, 225961)),
          [l.w0.FansEventMessage]: () => i.e("51614").then(i.bind(i, 526673)),
          [l.w0.FeedUserRoomMonitorMessage]: () => i.e("82643").then(i.bind(i, 359814)),
          [l.w0.FollowCardMessage]: () => i.e("99271").then(i.bind(i, 962592)),
          [l.w0.FollowGuideMessage]: () => i.e("81101").then(i.bind(i, 858340)),
          [l.w0.FreeCellGiftMessage]: () => i.e("60037").then(i.bind(i, 753650)),
          [l.w0.FreeGiftMessage]: () => Promise.all([i.e("29360"), i.e("35696")]).then(i.bind(i, 540232)),
          [l.w0.GamblingStatusChangedMessage]: () => i.e("75039").then(i.bind(i, 305742)),
          [l.w0.WebcastGameChannelMessage]: () => i.e("27909").then(i.bind(i, 261789)),
          [l.w0.GameEmoteUpdateMessage]: () => Promise.all([i.e("89752"), i.e("68116")]).then(i.bind(i, 830006)),
          [l.w0.GameServerFeatureMessage]: () => i.e("8546").then(i.bind(i, 426361)),
          [l.w0.GameGiftMessage]: () => i.e("96810").then(i.bind(i, 918223)),
          [l.w0.GameGiftStatusMessage]: () => i.e("96810").then(i.bind(i, 918223)),
          [l.w0.GuessQuestionAuditMessage]: () => Promise.all([i.e("89752"), i.e("85833")]).then(i.bind(i, 534998)),
          [l.w0.GameGuessWidgetsMessage]: () => Promise.all([i.e("89752"), i.e("78398")]).then(i.bind(i, 232105)),
          [l.w0.GameStatusMessage]: () => i.e("32723").then(i.bind(i, 136481)),
          [l.w0.LiveGameIntroMessage]: () => i.e("38573").then(i.bind(i, 716677)),
          [l.w0.GameInviteMessage]: () => i.e("63614").then(i.bind(i, 480210)),
          [l.w0.GameInviteReplyMessage]: () => i.e("63614").then(i.bind(i, 480210)),
          [l.w0.GameRoomBroadcastMessage]: () => i.e("35740").then(i.bind(i, 312194)),
          [l.w0.GameMomentMessage]: () => i.e("85442").then(i.bind(i, 157681)),
          [l.w0.PreviewGameMomentMessage]: () => i.e("85442").then(i.bind(i, 157681)),
          [l.w0.GameOCRPingMessage]: () => i.e("86766").then(i.bind(i, 84760)),
          [l.w0.PartnershipCardChangeMessage]: () => i.e("16149").then(i.bind(i, 108655)),
          [l.w0.PartnershipDownloadCountMessage]: () => i.e("84284").then(i.bind(i, 432499)),
          [l.w0.PartnershipDropsAnchorMessage]: () => i.e("42103").then(i.bind(i, 93594)),
          [l.w0.PartnershipDropsCardChangeMessage]: () => i.e("18901").then(i.bind(i, 810427)),
          [l.w0.PartnershipDropsUpdateMessage]: () => i.e("19640").then(i.bind(i, 145517)),
          [l.w0.PartnershipGameOfflineMessage]: () => i.e("21766").then(i.bind(i, 16369)),
          [l.w0.PartnershipPunishMessage]: () => i.e("90288").then(i.bind(i, 883142)),
          [l.w0.PartnershipTaskShowMessage]: () => i.e("3452").then(i.bind(i, 836092)),
          [l.w0.GameRankNotifyMessage]: () => i.e("14367").then(i.bind(i, 199499)),
          [l.w0.GameRevenueTipsMessage]: () => i.e("94473").then(i.bind(i, 548011)),
          [l.w0.GameStatusUpdateMessage]: () => i.e("81500").then(i.bind(i, 894452)),
          [l.w0.GiftMessage]: () => Promise.all([i.e("29360"), i.e("14089")]).then(i.bind(i, 798403)),
          [l.w0.BindingGiftMessage]: () => Promise.all([i.e("29360"), i.e("14089")]).then(i.bind(i, 798403)),
          [l.w0.GiftBroadcastMessage]: () => i.e("65329").then(i.bind(i, 51825)),
          [l.w0.GiftCollectionUpdateMessage]: () => Promise.all([i.e("29360"), i.e("16863")]).then(i.bind(i, 660268)),
          [l.w0.GiftDynamicRestrictionMessage]: () => i.e("4463").then(i.bind(i, 177784)),
          [l.w0.EffectPreloadingMessage]: () => Promise.all([i.e("29360"), i.e("11615")]).then(i.bind(i, 30387)),
          [l.w0.GiftGalleryMessage]: () => Promise.all([i.e("29360"), i.e("51822")]).then(i.bind(i, 327005)),
          [l.w0.GiftGuideMessage]: () => i.e("32214").then(i.bind(i, 374369)),
          [l.w0.GiftNoticeMessage]: () => i.e("79824").then(i.bind(i, 534603)),
          [l.w0.GiftProgressMessage]: () => i.e("20466").then(i.bind(i, 870714)),
          [l.w0.GiftPromptMessage]: () => i.e("55184").then(i.bind(i, 192124)),
          [l.w0.GiftRecordCapsuleMessage]: () => i.e("87993").then(i.bind(i, 852294)),
          [l.w0.GiftUnlockMessage]: () => Promise.all([i.e("29360"), i.e("67822")]).then(i.bind(i, 485981)),
          [l.w0.GiftUpdateMessage]: () => i.e("39525").then(i.bind(i, 539331)),
          [l.w0.GiftVoteMessage]: () => i.e("25634").then(i.bind(i, 206463)),
          [l.w0.GoalUpdateMessage]: () => i.e("37329").then(i.bind(i, 353358)),
          [l.w0.GoodyBagMessage]: () => i.e("2129").then(i.bind(i, 457905)),
          [l.w0.GreetingMessage]: () => i.e("11142").then(i.bind(i, 839887)),
          [l.w0.GroupLiveMemberNotifyMessage]: () => i.e("82746").then(i.bind(i, 266728)),
          [l.w0.GameGuessPinCardMessage]: () => Promise.all([i.e("89752"), i.e("768")]).then(i.bind(i, 665246)),
          [l.w0.GuideMessage]: () => i.e("17994").then(i.bind(i, 289519)),
          [l.w0.GuideTaskMessage]: () => i.e("66778").then(i.bind(i, 716277)),
          [l.w0.HashtagMessage]: () => i.e("12606").then(i.bind(i, 865392)),
          [l.w0.HighlightFragmentReadyMessage]: () => i.e("34531").then(i.bind(i, 747669)),
          [l.w0.HotRoomMessage]: () => i.e("93064").then(i.bind(i, 550513)),
          [l.w0.HourlyRankMessage]: () => i.e("42542").then(i.bind(i, 195995)),
          [l.w0.HourlyRankRewardMessage]: () => i.e("42542").then(i.bind(i, 195995)),
          [l.w0.WeeklyRankRewardMessage]: () => i.e("42542").then(i.bind(i, 195995)),
          [l.w0.RankTextMessage]: () => i.e("42542").then(i.bind(i, 195995)),
          [l.w0.ImDeleteMessage]: () => i.e("73556").then(i.bind(i, 501365)),
          [l.w0.IMRouteDagMessage]: () => i.e("62471").then(i.bind(i, 536453)),
          [l.w0.InRoomBannerMessage]: () => i.e("2346").then(i.bind(i, 521338)),
          [l.w0.InRoomBannerEvent]: () => i.e("2346").then(i.bind(i, 521338)),
          [l.w0.InRoomBannerRedPoint]: () => i.e("27559").then(i.bind(i, 996021)),
          [l.w0.InRoomBannerRefreshMessage]: () => i.e("66392").then(i.bind(i, 219683)),
          [l.w0.InstantCommandMessage]: () => i.e("93349").then(i.bind(i, 877952)),
          [l.w0.InteractionHubGoalMessage]: () => Promise.all([i.e("29360"), i.e("50452")]).then(i.bind(i, 823715)),
          [l.w0.QuestionDeleteMessage]: () => i.e("82337").then(i.bind(i, 44779)),
          [l.w0.QuestionSelectedMessage]: () => i.e("82337").then(i.bind(i, 44779)),
          [l.w0.QuestionSlideDownMessage]: () => i.e("82337").then(i.bind(i, 44779)),
          [l.w0.QuestionSwitchMessage]: () => i.e("82337").then(i.bind(i, 44779)),
          [l.w0.QuestionNewMessage]: () => i.e("82337").then(i.bind(i, 44779)),
          [l.w0.InteractiveEffectMessage]: () => i.e("15893").then(i.bind(i, 951914)),
          [l.w0.KaraokeQueueMessage]: () => i.e("76603").then(i.bind(i, 755317)),
          [l.w0.KaraokeQueueListMessage]: () => i.e("69062").then(i.bind(i, 766389)),
          [l.w0.KaraokeRedDotMessage]: () => i.e("90427").then(i.bind(i, 291527)),
          [l.w0.KaraokeReqMessage]: () => i.e("8494").then(i.bind(i, 503396)),
          [l.w0.KaraokeSwitchMessage]: () => i.e("69605").then(i.bind(i, 981789)),
          [l.w0.KaraokeYouSingReqMessage]: () => i.e("9251").then(i.bind(i, 115720)),
          [l.w0.LevelUpMessage]: () => i.e("60071").then(i.bind(i, 540796)),
          [l.w0.LikeMessage]: () => i.e("69212").then(i.bind(i, 721082)),
          [l.w0.LinkerContributeMessage]: () => i.e("54134").then(i.bind(i, 592599)),
          [l.w0.LinkMessage]: () => Promise.all([i.e("19678"), i.e("35094")]).then(i.bind(i, 635365)),
          [l.w0.LinkMicAdMessage]: () => i.e("70971").then(i.bind(i, 570656)),
          [l.w0.LinkMicAnchorGuideMessage]: () => i.e("55352").then(i.bind(i, 599398)),
          [l.w0.LinkmicAnimationMessage]: () => i.e("22888").then(i.bind(i, 242994)),
          [l.w0.LinkMicArmies]: () => Promise.all([i.e("36062"), i.e("16755")]).then(i.bind(i, 220468)),
          [l.w0.LinkmicAudienceNoticeMessage]: () => i.e("36737").then(i.bind(i, 561706)),
          [l.w0.AudienceReserveUserStateMessage]: () => i.e("27573").then(i.bind(i, 246997)),
          [l.w0.LinkMicBattle]: () => Promise.all([i.e("36062"), i.e("66428")]).then(i.bind(i, 120937)),
          [l.w0.LinkMicBattleItemCard]: () => Promise.all([i.e("36062"), i.e("22072")]).then(i.bind(i, 958616)),
          [l.w0.LinkmicBattleNoticeMessage]: () => i.e("7126").then(i.bind(i, 532891)),
          [l.w0.LinkMicBattlePunishFinish]: () => Promise.all([i.e("36062"), i.e("46612")]).then(i.bind(i, 70938)),
          [l.w0.LinkmicBattleTaskMessage]: () => Promise.all([i.e("36062"), i.e("32400")]).then(i.bind(i, 573712)),
          [l.w0.LinkMicBattleVictoryLapMessage]: () => i.e("43363").then(i.bind(i, 814109)),
          [l.w0.LinkMicBattleVictoryLap]: () => i.e("43363").then(i.bind(i, 814109)),
          [l.w0.CompetitionMessage]: () => Promise.all([i.e("36062"), i.e("39394")]).then(i.bind(i, 206319)),
          [l.w0.LinkMicEnterNoticeMessage]: () => Promise.all([i.e("36062"), i.e("52138")]).then(i.bind(i, 402427)),
          [l.w0.LinkMicFanTicketMethod]: () => i.e("82324").then(i.bind(i, 456095)),
          [l.w0.LinkMicGuideMessage]: () => i.e("66165").then(i.bind(i, 114419)),
          [l.w0.LinkLayoutMessage]: () => i.e("96044").then(i.bind(i, 587517)),
          [l.w0.LinkMicMethod]: () => i.e("76881").then(i.bind(i, 415499)),
          [l.w0.LinkMicSendEmojiMessage]: () => i.e("90788").then(i.bind(i, 307970)),
          [l.w0.LinkSettingNotifyMessage]: () => i.e("14898").then(i.bind(i, 661922)),
          [l.w0.LinkMicSignalingMethod]: () => i.e("60545").then(i.bind(i, 897123)),
          [l.w0.LinkmicSocialNoticeMessage]: () => i.e("81771").then(i.bind(i, 425960)),
          [l.w0.MultiGuestPunishCenterActionMsg]: () => i.e("83645").then(i.bind(i, 851929)),
          [l.w0.LinkScreenChangeMessage]: () => i.e("83645").then(i.bind(i, 851929)),
          [l.w0.LinkLayerMessage]: () => Promise.all([i.e("19678"), i.e("66060")]).then(i.bind(i, 846066)),
          [l.w0.LinkStateMessage]: () => Promise.all([i.e("19678"), i.e("66060")]).then(i.bind(i, 846066)),
          [l.w0.MatchMsg]: () => i.e("66159").then(i.bind(i, 467585)),
          [l.w0.LiveEcomMessage]: () => i.e("73352").then(i.bind(i, 21100)),
          [l.w0.LiveInfoAuditNoticeMessage]: () => i.e("26773").then(i.bind(i, 26545)),
          [l.w0.LiveIntroMessage]: () => i.e("36829").then(i.bind(i, 463852)),
          [l.w0.LiveJourneyMessage]: () => i.e("72944").then(i.bind(i, 630402)),
          [l.w0.LiveShoppingMessage]: () => i.e("68085").then(i.bind(i, 129453)),
          [l.w0.LiveStreamControlMessage]: () => i.e("94441").then(i.bind(i, 655002)),
          [l.w0.LotteryMessage]: () => i.e("81639").then(i.bind(i, 592808)),
          [l.w0.XGLotteryMessage]: () => i.e("81639").then(i.bind(i, 592808)),
          [l.w0.LotteryEventMessage]: () => i.e("81639").then(i.bind(i, 592808)),
          [l.w0.LotteryEventNewMessage]: () => i.e("81639").then(i.bind(i, 592808)),
          [l.w0.LotteryBurstMessage]: () => i.e("7125").then(i.bind(i, 768596)),
          [l.w0.LsSubCountdownMessage]: () => i.e("10494").then(i.bind(i, 115310)),
          [l.w0.LuckyBoxMessage]: () => i.e("17303").then(i.bind(i, 592302)),
          [l.w0.LuckyMoneyMessage]: () => i.e("12063").then(i.bind(i, 53210)),
          [l.w0.MagicBoxMessage]: () => i.e("2305").then(i.bind(i, 943780)),
          [l.w0.MarqueeAnnouncementMessage]: () => i.e("4029").then(i.bind(i, 285446)),
          [l.w0.MediaLiveReplayVidMessage]: () => i.e("4396").then(i.bind(i, 428365)),
          [l.w0.MemberMessage]: () => i.e("64492").then(i.bind(i, 143789)),
          [l.w0.MiddleTouchMessage]: () => Promise.all([i.e("89752"), i.e("10995")]).then(i.bind(i, 242115)),
          [l.w0.CountdownMessage]: () => i.e("71519").then(i.bind(i, 480029)),
          [l.w0.CountdownForAllMessage]: () => i.e("73821").then(i.bind(i, 619020)),
          [l.w0.GuestShowdownMessage]: () => i.e("13778").then(i.bind(i, 942240)),
          [l.w0.NoticeboardMessage]: () => Promise.all([i.e("78018"), i.e("31199")]).then(i.bind(i, 758058)),
          [l.w0.NoticeboardReviewMessage]: () => Promise.all([i.e("78018"), i.e("31199")]).then(i.bind(i, 758058)),
          [l.w0.PlaybookMessage]: () => Promise.all([i.e("78018"), i.e("21694")]).then(i.bind(i, 382094)),
          [l.w0.LiveShowMessage]: () => i.e("28198").then(i.bind(i, 20712)),
          [l.w0.AvatarStyleResultMessage]: () => i.e("91477").then(i.bind(i, 969057)),
          [l.w0.AvatarGenerateResultMessage]: () => i.e("91477").then(i.bind(i, 969057)),
          [l.w0.AvatarReportDeleteMessage]: () => i.e("91477").then(i.bind(i, 969057)),
          [l.w0.GuestInviteMessage]: () => i.e("65754").then(i.bind(i, 975317)),
          [l.w0.GuestInviteGuideMessage]: () => i.e("65754").then(i.bind(i, 975317)),
          [l.w0.MultiGuestSuggestMessage]: () => i.e("75450").then(i.bind(i, 329357)),
          [l.w0.WallpaperMessage]: () => i.e("66757").then(i.bind(i, 126424)),
          [l.w0.WallpaperReviewMessage]: () => i.e("66757").then(i.bind(i, 126424)),
          [l.w0.NabobImNoticeMessage]: () => i.e("35551").then(i.bind(i, 737645)),
          [l.w0.NewAnchorGuideMessage]: () => i.e("22397").then(i.bind(i, 646431)),
          [l.w0.NobleEnterLeaveMessage]: () => i.e("15962").then(i.bind(i, 204615)),
          [l.w0.NobleToastMessage]: () => i.e("44404").then(i.bind(i, 157561)),
          [l.w0.NobleUpgradeMessage]: () => i.e("85026").then(i.bind(i, 65290)),
          [l.w0.NoticeMessage]: () => i.e("90590").then(i.bind(i, 159609)),
          [l.w0.NotifyMessage]: () => i.e("83495").then(i.bind(i, 337196)),
          [l.w0.OecLiveHotRoomMessage]: () => i.e("30164").then(i.bind(i, 451731)),
          [l.w0.OecLiveManagerMessage]: () => i.e("95941").then(i.bind(i, 221171)),
          [l.w0.OecLiveShoppingMessage]: () => i.e("74213").then(i.bind(i, 714472)),
          [l.w0.OChannelAnchorMessage]: () => i.e("85666").then(i.bind(i, 75992)),
          [l.w0.OChannelUserMessage]: () => i.e("85666").then(i.bind(i, 75992)),
          [l.w0.OChannelModifyMessage]: () => i.e("85666").then(i.bind(i, 75992)),
          [l.w0.StarCommentPushMessage]: () => i.e("77306").then(i.bind(i, 638989)),
          [l.w0.StarCommentNotificationMessage]: () => i.e("77306").then(i.bind(i, 638989)),
          [l.w0.PaidContentLiveShoppingMessage]: () => i.e("83901").then(i.bind(i, 746585)),
          [l.w0.GiftPanelUpdateMessage]: () => i.e("27949").then(i.bind(i, 231972)),
          [l.w0.ForceFetchRecommendationsMessage]: () => i.e("27949").then(i.bind(i, 231972)),
          [l.w0.PerceptionMessage]: () => i.e("7233").then(i.bind(i, 933820)),
          [l.w0.PicoLikeMessage]: () => i.e("32049").then(i.bind(i, 579357)),
          [l.w0.PictionaryStartMessage]: () => i.e("18530").then(i.bind(i, 244345)),
          [l.w0.PictionaryEndMessage]: () => i.e("18530").then(i.bind(i, 244345)),
          [l.w0.PictionaryExitMessage]: () => i.e("18530").then(i.bind(i, 244345)),
          [l.w0.PictionaryUpdateMessage]: () => i.e("18530").then(i.bind(i, 244345)),
          [l.w0.PinMessage]: () => Promise.all([i.e("89752"), i.e("29360"), i.e("93441")]).then(i.bind(i, 391311)),
          [l.w0.PlayTogetherMessage]: () => i.e("3709").then(i.bind(i, 385016)),
          [l.w0.PollMessage]: () => Promise.all([i.e("29360"), i.e("38805")]).then(i.bind(i, 203824)),
          [l.w0.PopularCardMessage]: () => i.e("16207").then(i.bind(i, 819373)),
          [l.w0.PortalMessage]: () => i.e("76226").then(i.bind(i, 66631)),
          [l.w0.PrivilegeAdvanceMessage]: () => i.e("76420").then(i.bind(i, 792828)),
          [l.w0.PrivilegeDynamicEffectMessage]: () => i.e("46345").then(i.bind(i, 27861)),
          [l.w0.PromoteAdStatusMessage]: () => i.e("58451").then(i.bind(i, 565221)),
          [l.w0.PropertyNoticeMessage]: () => i.e("76977").then(i.bind(i, 500374)),
          [l.w0.PullStreamUpdateMessage]: () => i.e("37348").then(i.bind(i, 265769)),
          [l.w0.PushMessage]: () => i.e("10976").then(i.bind(i, 697204)),
          [l.w0.FansclubV1PushMessage]: () => i.e("10976").then(i.bind(i, 697204)),
          [l.w0.QuickChatListMessage]: () => Promise.all([i.e("89752"), i.e("87634")]).then(i.bind(i, 958550)),
          [l.w0.QuizStartMessage]: () => i.e("12352").then(i.bind(i, 614854)),
          [l.w0.QuizResultMessage]: () => i.e("12352").then(i.bind(i, 614854)),
          [l.w0.QuizChangeMessage]: () => i.e("12352").then(i.bind(i, 614854)),
          [l.w0.QuizBeginMessage]: () => i.e("94478").then(i.bind(i, 786067)),
          [l.w0.RankToastMessage]: () => i.e("92923").then(i.bind(i, 32555)),
          [l.w0.RankListAwardMessage]: () => i.e("65419").then(i.bind(i, 340505)),
          [l.w0.RankListSprintMessage]: () => i.e("25278").then(i.bind(i, 518767)),
          [l.w0.RankUpdateMessage]: () => i.e("86665").then(i.bind(i, 596680)),
          [l.w0.RealtimeLiveCenterMethod]: () => i.e("51375").then(i.bind(i, 105339)),
          [l.w0.RealTimePerformancePageMessage]: () => i.e("51375").then(i.bind(i, 105339)),
          [l.w0.GameGuessToastMessage]: () => i.e("94197").then(i.bind(i, 361335)),
          [l.w0.CreateRedPacketMessage]: () => i.e("65137").then(i.bind(i, 348588)),
          [l.w0.RushRedPacketMessage]: () => i.e("65137").then(i.bind(i, 348588)),
          [l.w0.RoomMessage]: () => Promise.resolve().then(i.bind(i, 847235)),
          [l.w0.PushRoomAdCard]: () => i.e("22573").then(i.bind(i, 44741)),
          [l.w0.RoomAuthMessage]: () => i.e("98429").then(i.bind(i, 64230)),
          [l.w0.RoomBottomMessage]: () => i.e("26521").then(i.bind(i, 856474)),
          [l.w0.RoomChallengeMessage]: () => i.e("90183").then(i.bind(i, 946090)),
          [l.w0.RoomConfigMessage]: () => i.e("8315").then(i.bind(i, 187522)),
          [l.w0.RoomEventMessage]: () => i.e("86776").then(i.bind(i, 101162)),
          [l.w0.RoomHotSentenceMessage]: () => i.e("10721").then(i.bind(i, 249249)),
          [l.w0.RoomImgMessage]: () => i.e("24159").then(i.bind(i, 336831)),
          [l.w0.RoomIntroMessage]: () => i.e("36810").then(i.bind(i, 245087)),
          [l.w0.RoomManageMessage]: () => i.e("83516").then(i.bind(i, 974354)),
          [l.w0.RoomStartMessage]: () => i.e("65001").then(i.bind(i, 388627)),
          [l.w0.RoomStickerMessage]: () => i.e("60353").then(i.bind(i, 983152)),
          [l.w0.RoomStreamAdaptationMessage]: () => i.e("34579").then(i.bind(i, 95699)),
          [l.w0.RoomUserSeqMessage]: () => i.e("61298").then(i.bind(i, 958635)),
          [l.w0.RoomVerifyMessage]: () => i.e("61985").then(i.bind(i, 920521)),
          [l.w0.ScreenChatMessage]: () => i.e("55304").then(i.bind(i, 171343)),
          [l.w0.ShareGuideMessage]: () => i.e("70874").then(i.bind(i, 334555)),
          [l.w0.ShortTouchAreaMessage]: () => Promise.all([i.e("89752"), i.e("29360"), i.e("36062"), i.e("92783"), i.e("39021")]).then(i.bind(i, 807265)),
          [l.w0.ShortTouchMessage]: () => i.e("3586").then(i.bind(i, 961206)),
          [l.w0.SocialMessage]: () => i.e("73542").then(i.bind(i, 645647)),
          [l.w0.SpeakerMessage]: () => i.e("16657").then(i.bind(i, 170668)),
          [l.w0.SpecialPushMessage]: () => i.e("54628").then(i.bind(i, 898485)),
          [l.w0.UpdateKoiRoomStatusMessage]: () => i.e("76945").then(i.bind(i, 889674)),
          [l.w0.StampMessage]: () => i.e("82954").then(i.bind(i, 726897)),
          [l.w0.StickerModifyMessage]: () => i.e("31877").then(i.bind(i, 295726)),
          [l.w0.StreamControlMessage]: () => i.e("35760").then(i.bind(i, 775587)),
          [l.w0.StreamStatusMessage]: () => i.e("30757").then(i.bind(i, 414409)),
          [l.w0.SubTimerStickerMessage]: () => i.e("86450").then(i.bind(i, 221361)),
          [l.w0.SubWaveMessage]: () => Promise.all([i.e("89752"), i.e("21440")]).then(i.bind(i, 573798)),
          [l.w0.SubscriptionNotifyMessage]: () => Promise.all([i.e("89752"), i.e("51535")]).then(i.bind(i, 560863)),
          [l.w0.SubNotifyMessage]: () => Promise.all([i.e("89752"), i.e("51535")]).then(i.bind(i, 560863)),
          [l.w0.SubCapsuleMessage]: () => Promise.all([i.e("89752"), i.e("51535")]).then(i.bind(i, 560863)),
          [l.w0.SubPinEventMessage]: () => Promise.all([i.e("89752"), i.e("51535")]).then(i.bind(i, 560863)),
          [l.w0.AnchorGetSubQuotaMessage]: () => Promise.all([i.e("89752"), i.e("51535")]).then(i.bind(i, 560863)),
          [l.w0.SunDailyRankMessage]: () => i.e("56345").then(i.bind(i, 534468)),
          [l.w0.SyncChannelProbeMessage]: () => i.e("55912").then(i.bind(i, 753919)),
          [l.w0.SystemMessage]: () => i.e("42741").then(i.bind(i, 987994)),
          [l.w0.TestMessage]: () => i.e("61762").then(i.bind(i, 182485)),
          [l.w0.ToastMessage]: () => i.e("94445").then(i.bind(i, 648817)),
          [l.w0.ToolbarItemMessage]: () => i.e("66642").then(i.bind(i, 108304)),
          [l.w0.TrayMessage]: () => i.e("10045").then(i.bind(i, 159459)),
          [l.w0.TurntableBurstMessage]: () => i.e("89576").then(i.bind(i, 607119)),
          [l.w0.UnauthorizedMemberMessage]: () => i.e("67987").then(i.bind(i, 981109)),
          [l.w0.UpgradeMessage]: () => i.e("54422").then(i.bind(i, 408644)),
          [l.w0.UploadCoverMessage]: () => i.e("25896").then(i.bind(i, 25375)),
          [l.w0.GameReqSetGuessMessage]: () => i.e("40198").then(i.bind(i, 923462)),
          [l.w0.UserStatsMessage]: () => i.e("6338").then(i.bind(i, 623520)),
          [l.w0.VerificationCodeMessage]: () => i.e("99452").then(i.bind(i, 822994)),
          [l.w0.VIPInfoMessage]: () => i.e("40037").then(i.bind(i, 16538)),
          [l.w0.VIPSeatMessage]: () => i.e("40037").then(i.bind(i, 16538)),
          [l.w0.WalletLiveRewardsRatioMessage]: () => i.e("14667").then(i.bind(i, 899519)),
          [l.w0.WebcastPopularCardMessage]: () => i.e("80769").then(i.bind(i, 679584)),
          [l.w0.WishlistUpdateMessage]: () => i.e("31310").then(i.bind(i, 419076)),
          [l.w0.VideoLiveGoodsRcmdMessage]: () => i.e("21473").then(i.bind(i, 73041)),
          [l.w0.VideoLiveCouponRcmdMessage]: () => i.e("21473").then(i.bind(i, 73041)),
          [l.w0.VideoLiveGoodsOrderMessage]: () => i.e("21473").then(i.bind(i, 73041))
      }
        , c = {
          nested: {
              webcast: {
                  nested: {
                      im: {
                          nested: {
                              Response: {
                                  fields: {
                                      messages: {
                                          rule: "repeated",
                                          type: "Message",
                                          id: 1
                                      },
                                      cursor: {
                                          type: "string",
                                          id: 2
                                      },
                                      fetch_interval: {
                                          type: "int64",
                                          id: 3
                                      },
                                      now: {
                                          type: "int64",
                                          id: 4
                                      },
                                      internal_ext: {
                                          type: "string",
                                          id: 5
                                      },
                                      fetch_type: {
                                          type: "int32",
                                          id: 6
                                      },
                                      route_params: {
                                          keyType: "string",
                                          type: "string",
                                          id: 7
                                      },
                                      heartbeat_duration: {
                                          type: "int64",
                                          id: 8
                                      },
                                      need_ack: {
                                          type: "bool",
                                          id: 9
                                      },
                                      push_server: {
                                          type: "string",
                                          id: 10
                                      },
                                      is_first: {
                                          type: "bool",
                                          id: 11
                                      },
                                      history_comment_cursor: {
                                          type: "string",
                                          id: 12
                                      },
                                      history_no_more: {
                                          type: "bool",
                                          id: 13
                                      }
                                  }
                              },
                              Message: {
                                  fields: {
                                      method: {
                                          type: "string",
                                          id: 1
                                      },
                                      payload: {
                                          type: "bytes",
                                          id: 2
                                      },
                                      msg_id: {
                                          type: "int64",
                                          id: 3
                                      },
                                      msg_type: {
                                          type: "int32",
                                          id: 4
                                      },
                                      offset: {
                                          type: "int64",
                                          id: 5
                                      },
                                      is_history: {
                                          type: "bool",
                                          id: 6
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
        , u = {
          nested: {
              webcast: {
                  nested: {
                      im: {
                          nested: {
                              HeartBeat: {
                                  fields: {
                                      room_id: {
                                          type: "int64",
                                          id: 1
                                      },
                                      send_packet_seq_id: {
                                          type: "int64",
                                          id: 2
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
        , h = {
          nested: {
              webcast: {
                  nested: {
                      im: {
                          nested: {
                              EnterRoom: {
                                  fields: {
                                      room_id: {
                                          type: "int64",
                                          id: 1
                                      },
                                      room_tag: {
                                          type: "string",
                                          id: 2
                                      },
                                      live_region: {
                                          type: "string",
                                          id: 3
                                      },
                                      live_id: {
                                          type: "int64",
                                          id: 4
                                      },
                                      identity: {
                                          type: "string",
                                          id: 5
                                      },
                                      cursor: {
                                          type: "string",
                                          id: 6
                                      },
                                      account_type: {
                                          type: "int64",
                                          id: 7
                                      },
                                      enter_uniq_id: {
                                          type: "int64",
                                          id: 8
                                      },
                                      filter_welcome_msg: {
                                          type: "string",
                                          id: 9
                                      },
                                      is_anchor_continue_keep_msg: {
                                          type: "bool",
                                          id: 10
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
        , g = {
          nested: {
              webcast: {
                  nested: {
                      im: {
                          nested: {
                              PushHeader: {
                                  fields: {
                                      key: {
                                          type: "string",
                                          id: 1
                                      },
                                      value: {
                                          type: "string",
                                          id: 2
                                      }
                                  }
                              },
                              PushFrame: {
                                  fields: {
                                      SeqID: {
                                          type: "uint64",
                                          id: 1
                                      },
                                      LogID: {
                                          type: "uint64",
                                          id: 2
                                      },
                                      service: {
                                          type: "uint64",
                                          id: 3
                                      },
                                      method: {
                                          type: "uint64",
                                          id: 4
                                      },
                                      headers: {
                                          rule: "repeated",
                                          type: "PushHeader",
                                          id: 5
                                      },
                                      payload_encoding: {
                                          type: "string",
                                          id: 6
                                      },
                                      payload_type: {
                                          type: "string",
                                          id: 7
                                      },
                                      payload: {
                                          type: "bytes",
                                          id: 8
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      };
      var f = i(847235);
      function y(e) {
          let t = [];
          for (let i of e) {
              let e = i.charCodeAt(0);
              e < 128 ? t.push(e) : e < 2048 ? (t.push(192 + (e >> 6)),
              t.push(128 + (63 & e))) : e < 65536 && (t.push(224 + (e >> 12)),
              t.push(128 + (e >> 6 & 63)),
              t.push(128 + (63 & e)))
          }
          return Uint8Array.from(t)
      }
      let _ = {
          hb: "HeartBeat",
          im_enter_room: "EnterRoom"
      }
        , m = {
          hb: u,
          im_enter_room: h
      };
      function v(e) {
          return (0,
          n.__awaiter)(this, void 0, void 0, function*() {
              return new Promise(t => {
                  let i = () => {
                      t(d().Root.fromJSON(e))
                  }
                  ;
                  "function" == typeof requestIdleCallback ? requestIdleCallback(i, {
                      timeout: 100
                  }) : "function" == typeof requestAnimationFrame ? requestAnimationFrame(i) : i()
              }
              )
          })
      }
      class M {
          constructor(e) {
              let {logger: t} = null != e ? e : {};
              this.logger = t,
              this.messageTypesMap = new Map,
              this.messagePBRootMap = new Map,
              this.framePayloadTypeMap = new Map,
              this.framePayloadRootMap = new Map,
              d().util.Long = r(),
              d().configure()
          }
          getFrameType() {
              var e;
              return this.frameType || (this.framePBRoot = null !== (e = this.framePBRoot) && void 0 !== e ? e : d().Root.fromJSON(g),
              this.frameType = this.framePBRoot.lookupType("PushFrame")),
              this.frameType
          }
          getFramePayloadType(e) {
              return (0,
              n.__awaiter)(this, void 0, void 0, function*() {
                  let t = this.framePayloadTypeMap.get(e);
                  if (t)
                      return t;
                  let i = _[e]
                    , s = yield m[e]
                    , n = d().Root.fromJSON(s)
                    , o = n.lookupType(i);
                  return this.framePayloadRootMap.set(e, n),
                  this.framePayloadTypeMap.set(e, o),
                  o
              })
          }
          getResponseType() {
              var e;
              return this.responseType || (this.responsePBRoot = null !== (e = this.responsePBRoot) && void 0 !== e ? e : d().Root.fromJSON(c),
              this.responseType = this.responsePBRoot.lookupType("Response")),
              this.responseType
          }
          getMessageLookup(e) {
              var t, i, s, o;
              return (0,
              n.__awaiter)(this, void 0, void 0, function*() {
                  null === (t = this.logger) || void 0 === t || t.info("[getMessageLookup imMessageType]", () => e);
                  let n = this.messageTypesMap.get(e);
                  if (n)
                      return n;
                  let r = Date.now()
                    , a = e === l.w0.RoomMessage ? f.default : (yield p[e]()).default;
                  null === (i = this.logger) || void 0 === i || i.info("[getMessageLookup DSL]", () => a);
                  let d = (null !== (s = this.messagePBRootMap.get(e)) && void 0 !== s ? s : yield v(a)).lookupType(e);
                  return this.messagePBRootMap.set(e, a),
                  this.messageTypesMap.set(e, d),
                  null === (o = this.logger) || void 0 === o || o.info("[getMessageLookup duration]", () => `${Date.now() - r}`),
                  d
              })
          }
          decodeResponse(e) {
              let t = this.getResponseType()
                , i = new Uint8Array(e)
                , s = t.decode(i);
              return t.toObject(s, {
                  defaults: !0
              })
          }
          decodePayload(e, t) {
              var i;
              return (0,
              n.__awaiter)(this, void 0, void 0, function*() {
                  null === (i = this.logger) || void 0 === i || i.info(`[decodePayload ${e} uint8Array]`, () => ({
                      [e]: t
                  }));
                  let s = yield this.getMessageLookup(e)
                    , n = s.decode(t);
                  return s.toObject(n, {
                      defaults: !0
                  })
              })
          }
          decodeFramePayload(e, t) {
              return (0,
              n.__awaiter)(this, void 0, void 0, function*() {
                  let i = yield this.getFramePayloadType(e)
                    , s = i.decode(t);
                  return i.toObject(s, {
                      defaults: !0
                  })
              })
          }
          decodeFrame(e) {
              let t = this.getFrameType()
                , i = new Uint8Array(e)
                , s = t.decode(i);
              return t.toObject(s, {
                  defaults: !0
              })
          }
          createResponseUnit8Array(e) {
              return this.getResponseType().encode(e).finish()
          }
          createPayloadUnit8Array(e, t) {
              return (0,
              n.__awaiter)(this, void 0, void 0, function*() {
                  return (yield this.getMessageLookup(e)).encode(t).finish()
              })
          }
          createPushFrameUnit8Array(e, t, i={}) {
              return (0,
              n.__awaiter)(this, void 0, void 0, function*() {
                  if (t) {
                      if ("ack" === e)
                          i.payload = y(t);
                      else if (["hb", "im_enter_room"].includes(e)) {
                          let s = yield this.getFramePayloadType(e);
                          i.payload = s.encode(t).finish()
                      }
                  }
                  return i.payload_encoding = "pb",
                  i.payload_type = e,
                  this.getFrameType().encode(i).finish()
              })
          }
      }
      let b = {
          [l.w0.DonationStickerModifyMessage]: "WebcastDonationStickerModifyMethod",
          [l.w0.PinMessage]: "WebcastRoomPinMessage",
          [l.w0.RoomMessage]: "SystemMessage"
      };
      function T(e, t) {
          return b[e] === t || `Webcast${e}` === t || e === t
      }
      function w(e) {
          for (let t of Object.values(l.w0))
              if (T(t, e))
                  return t
      }
      class S {
          constructor(e) {
              this.lastRtt = "0",
              this.internalExt = "",
              this.cursor = "",
              this.historyCommentCursor = "",
              this.roomId = "",
              this.messageIdsForDistinct = new Set,
              this.eventsMap = new Map,
              this.performanceEvents = new Map,
              this.logger = e.logger,
              this.pbReader = e.pbReader
          }
          onPerformanceEvent(e, t) {
              var i;
              let s = null !== (i = this.performanceEvents.get(e)) && void 0 !== i ? i : [];
              s.push(t),
              this.performanceEvents.set(e, s)
          }
          offPerformanceEvent(e, t) {
              var i;
              let s = null !== (i = this.performanceEvents.get(e)) && void 0 !== i ? i : [];
              s.length && this.performanceEvents.set(e, t ? s.filter(e => e !== t) : [])
          }
          emitPerformanceEvent(e, t) {
              var i;
              let s = null !== (i = this.performanceEvents.get(e)) && void 0 !== i ? i : [];
              (null == s ? void 0 : s.length) && (this.logger.info(`emitPerformanceEvent: ${e}`, () => t),
              s.forEach(e => e(t)))
          }
          on(e, t) {
              var i;
              let s = null !== (i = this.eventsMap.get(e)) && void 0 !== i ? i : [];
              s.push(t),
              this.eventsMap.set(e, s)
          }
          off(e, t) {
              var i;
              let s = null !== (i = this.eventsMap.get(e)) && void 0 !== i ? i : [];
              s.length && this.eventsMap.set(e, s.filter(e => !!t && e !== t))
          }
          cleanEvent() {
              this.eventsMap.clear()
          }
          cleanPerformanceEvent() {
              this.performanceEvents.clear()
          }
          setRoomId(e) {
              this.roomId = e
          }
          clean() {
              this.messageIdsForDistinct.clear(),
              this.cursor = "",
              this.internalExt = "",
              this.historyCommentCursor = ""
          }
          emit(e, t) {
              var i;
              let s = null !== (i = e.messages) && void 0 !== i ? i : [];
              e.history_comment_cursor && (this.historyCommentCursor = e.history_comment_cursor),
              e.cursor && (this.cursor = e.cursor),
              e.internal_ext && (this.internalExt = e.internal_ext),
              s.length && s.forEach(e => {
                  let i = e.method
                    , s = `${this.roomId}_${e.msg_id}`;
                  if (i && T(l.w0.RoomMessage, i)) {
                      if (this.messageIdsForDistinct.has(i))
                          return;
                      this.messageIdsForDistinct.add(i)
                  }
                  i && s && !this.messageIdsForDistinct.has(s) && (this.messageIdsForDistinct.add(s),
                  this.runCallbackByMethod(i, e, t))
              }
              )
          }
          toConsumableMessage(e) {
              return (0,
              n.__awaiter)(this, void 0, void 0, function*() {
                  let t = e.msg_id;
                  if (!t || !e.method || void 0 === e.payload || this.messageIdsForDistinct.has(t))
                      return null;
                  this.messageIdsForDistinct.add(t);
                  let i = w(e.method);
                  if (void 0 !== i) {
                      let t = yield this.pbReader.decodePayload(i, e.payload);
                      return {
                          messageType: i,
                          payload: t,
                          message: e
                      }
                  }
                  return null
              })
          }
          runCallbackByMethod(e, t, i) {
              let s;
              let n = [];
              for (let[t,i] of this.eventsMap.entries())
                  i.length && T(t, e) && (s = t,
                  n = i);
              try {
                  let o = s && t.payload ? this.pbReader.decodePayload(s, t.payload) : void 0;
                  o && (null == n ? void 0 : n.length) && o.then(s => {
                      var o, r;
                      for (let a of n)
                          (null === (o = s.common) || void 0 === o ? void 0 : o.room_id) && (null === (r = s.common) || void 0 === r ? void 0 : r.room_id) !== this.roomId || (a(s, t, i),
                          this.logger.info("emit Message:", () => ({
                              msgMethod: e,
                              message: t,
                              payload: s,
                              extraInfo: i
                          })))
                  }
                  )
              } catch (i) {
                  this.logger.info("emit Message Error:", () => ({
                      msgMethod: e,
                      message: t,
                      err: i
                  })),
                  this.emitPerformanceEvent("live_im_decode_error", {
                      config: {},
                      extra: {
                          name: i.name,
                          message: i.message
                      }
                  })
              }
          }
      }
      let k = "2.0.0"
        , E = "180800";
      function R() {
          let {DateTimeFormat: e} = Intl
            , t = e();
          return {
              version_code: E,
              device_platform: "web",
              cookie_enabled: String(navigator.cookieEnabled),
              screen_width: String(screen.width),
              screen_height: String(screen.height),
              browser_language: navigator.language,
              browser_platform: navigator.platform,
              browser_name: navigator.appCodeName,
              browser_version: navigator.appVersion,
              browser_online: String(navigator.onLine),
              tz_name: t.resolvedOptions().timeZone
          }
      }
      let P = "/webcast/im/fetch/"
        , A = "/webcast/im/fetch/history/";
      function I(e) {
          return e.replace(/[A-Z]/g, e => `_${e.toLowerCase()}`).replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "").toLowerCase()
      }
      function C(e) {
          let t = Object.keys(e);
          return t.length ? t.reduce( (t, i) => `${t}${t ? "&" : ""}${I(i)}=${String(e[i])}`, "") : ""
      }
      function O(e) {
          let {didRule: t, deviceId: i} = e
            , s = (0,
          n.__rest)(e, ["didRule", "deviceId"])
            , o = 3 * !i
            , r = Object.assign(Object.assign(Object.assign({}, R()), s), {
              supWsDsOpt: "1",
              respContentType: "protobuf",
              didRule: null != t ? t : o,
              deviceId: i
          });
          for (let e of Object.keys(r))
              (void 0 === r[e] || "" === r[e]) && delete r[e];
          return r
      }
      function L(e) {
          let {appName: t, didRule: i, routeParamsMap: s, pushServer: o} = e
            , r = (0,
          n.__rest)(e, ["appName", "didRule", "routeParamsMap", "pushServer"])
            , a = {};
          if (s)
              for (let[e,t] of Object.entries(s))
                  a[e] = t;
          let d = C(O(Object.assign(Object.assign(Object.assign({
              appName: t,
              didRule: i,
              supWsDsOpt: "1",
              versionCode: E,
              updateVersionCode: k,
              compress: "gzip"
          }, R()), a), r)));
          return `${o}?${d}`
      }
      var N = i(550178);
      class G {
          constructor({ntp: e, pbReader: t}) {
              this.ntp = e,
              this.pbReader = t
          }
          abort() {
              this.xhr && (this.xhr.abort(),
              this.xhr = void 0)
          }
          deserializeFetch(e, t, i=!1) {
              return (0,
              n.__awaiter)(this, void 0, void 0, function*() {
                  let s = Date.now()
                    , n = C(O(Object.assign({}, t)))
                    , o = yield this.fetch(`${e}?${n}`)
                    , r = performance.now() + performance.timeOrigin + this.ntp.ntpDiff
                    , a = this.pbReader.decodeResponse(o)
                    , d = performance.now() + performance.timeOrigin + this.ntp.ntpDiff
                    , l = Number(a.now);
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
                          is_initialize: i
                      }
                  }
              })
          }
          fetch(e) {
              return (0,
              n.__awaiter)(this, void 0, void 0, function*() {
                  this.xhr = new XMLHttpRequest;
                  let {xhr: t} = this;
                  return t.timeout = 1e4,
                  t.responseType = "arraybuffer",
                  new Promise( (i, s) => {
                      try {
                          t.open("GET", e, !0),
                          t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                          t.withCredentials = !0,
                          t.onload = function() {
                              4 === t.readyState && 200 === t.status && t.response ? i(t.response) : s(Error(t.response))
                          }
                          ,
                          t.onerror = e => {
                              s(e)
                          }
                          ,
                          t.ontimeout = e => {
                              s(e)
                          }
                          ,
                          t.send()
                      } catch (e) {
                          s(e)
                      }
                  }
                  )
              })
          }
      }
      class B {
          config(e) {
              this._open = !!e.debug
          }
          info(e, t) {
              if (this._open)
                  try {
                      console.info(`%cLIVE-im %c${e}`, "color:green;", "color:green;", t ? t() : "")
                  } catch (t) {
                      console.info(`%cLIVE-im %c${e}`, "color:red;", "color:red;", t)
                  }
          }
      }
      var x = i(870810)
        , D = i.n(x);
      function U() {
          return `${Date.now()}-${(Math.random() + 1).toString(36).slice(6)}`
      }
      function j(e=1e3) {
          return (0,
          n.__awaiter)(this, void 0, void 0, function*() {
              return new Promise(t => {
                  let i = 0;
                  "undefined" != typeof window && (i = window.setTimeout( () => {
                      t(i)
                  }
                  , e))
              }
              )
          })
      }
      class F {
          constructor(e) {
              this.isStarted = !1,
              this.delayTimer = 0,
              this.currentPollingToken = "",
              this.event = new (D()),
              this.defaultInterval = 1e3,
              this.logger = e.logger,
              this.xhr = e.xhr,
              this.ntp = e.ntp,
              this.messageEvents = e.messageEvents
          }
          on(e, t) {
              this.event.on(e, t)
          }
          emit(e, t) {
              this.event.emit(e, t)
          }
          start(e) {
              if (this.isStarted) {
                  this.logger.info("you have started polling!");
                  return
              }
              this.pollingProps = e,
              this.isStarted = !0,
              this.messageEvents.emitPerformanceEvent("live_im_fetch_config", {
                  config: e
              }),
              this.currentPollingToken = U(),
              this.logger.info("initialization start:", () => e),
              this.fetchConfig({
                  pollingToken: this.currentPollingToken,
                  isInit: !0
              })
          }
          stop() {
              this.isStarted && (this.messageEvents.emitPerformanceEvent("live_im_fetch_stop", {
                  config: this.pollingProps
              }),
              this.isStarted = !1,
              this.currentPollingToken = ""),
              this.event.removeAllListeners()
          }
          fetchConfig(e) {
              return (0,
              n.__awaiter)(this, void 0, void 0, function*() {
                  let t = this.pollingProps
                    , {host: i} = t
                    , s = (0,
                  n.__rest)(t, ["host"])
                    , {pollingToken: o, isInit: r} = e
                    , a = Date.now();
                  r && this.messageEvents.emitPerformanceEvent("live_im_initial_polling_start", {
                      config: this.pollingProps
                  });
                  let d = yield this.xhr.deserializeFetch(`${i}${P}`, Object.assign(Object.assign({}, s), {
                      lastRtt: "-1",
                      cursor: "0",
                      internalExt: "0"
                  })).catch(e => (this.logger.info("initialization error:", () => e),
                  this.messageEvents.emitPerformanceEvent("live_im_fetch_error", {
                      config: this.pollingProps,
                      extra: e
                  }),
                  r && this.messageEvents.emitPerformanceEvent("live_im_initial_polling_error", {
                      config: this.pollingProps,
                      extra: e
                  }),
                  null));
                  if (o === this.currentPollingToken && this.isStarted) {
                      if (d) {
                          r && this.messageEvents.emitPerformanceEvent("live_im_initial_polling_success", {
                              config: this.pollingProps
                          }),
                          this.logger.info("initialization success:", () => d),
                          this.messageEvents.emitPerformanceEvent("live_im_fetch_success", {
                              config: s
                          });
                          let e = Date.now();
                          this.messageEvents.lastRtt = String(e - a),
                          this.isStarted = !1,
                          this.currentPollingToken = "",
                          this.messageEvents.emit(d.data, d.extra),
                          this.emit("success", d)
                      } else
                          this.pollingProps.lastRtt = "-1",
                          yield j(this.defaultInterval),
                          this.messageEvents.emitPerformanceEvent("live_im_fetch_config", {
                              config: s
                          }),
                          yield this.fetchConfig({
                              pollingToken: o,
                              isInit: !1
                          })
                  }
              })
          }
      }
      var Z = i(499936);
      class H {
          on(e, t) {
              this.event.on(e, t)
          }
          off(e, t) {
              this.event.off(e, t)
          }
          emit(e, t) {
              this.event.emit(e, t)
          }
          constructor(e) {
              this.heartbeatDuration = 1e4,
              this.pingToken = "",
              this.pingStarted = !1,
              this.event = new (D()),
              this.pushServer = "",
              this.logger = e.logger,
              this.ntp = e.ntp,
              this.messageEvents = e.messageEvents,
              this.pbReader = e.pbReader
          }
          createClient(e) {
              var t;
              if (this.client)
                  return;
              this.socketProps = Object.assign(Object.assign({}, e), {
                  lastRtt: this.messageEvents.lastRtt,
                  internalExt: this.messageEvents.internalExt,
                  cursor: this.messageEvents.cursor,
                  historyCommentCursor: ""
              }),
              this.pushServer = e.pushServer,
              this.heartbeatDuration = Number(null !== (t = e.heartbeatDuration) && void 0 !== t ? t : this.heartbeatDuration),
              e.heartbeatDuration = String(this.heartbeatDuration);
              let i = L(Object.assign(Object.assign({}, this.socketProps), e));
              this.logger.info("[socket] start", () => i),
              "undefined" != typeof WebSocket && (this.client = new WebSocket(i),
              this.client.binaryType = "arraybuffer",
              this.messageEvents.emitPerformanceEvent("live_im_socket_start", {
                  config: e
              }),
              this.bindClient())
          }
          sendRoomFrame(e) {
              var t;
              return (0,
              n.__awaiter)(this, void 0, void 0, function*() {
                  this.socketProps = Object.assign(this.socketProps, e);
                  let i = {
                      room_id: this.socketProps.roomId,
                      identity: this.socketProps.identity,
                      cursor: this.messageEvents.cursor,
                      room_tag: this.socketProps.roomTag,
                      live_region: this.socketProps.liveRegion,
                      live_id: this.socketProps.liveId,
                      account_type: null !== (t = this.socketProps.accountType) && void 0 !== t ? t : "0",
                      filter_welcome_msg: "0",
                      is_anchor_continue_keep_msg: !1
                  };
                  return this.pbReader.createPushFrameUnit8Array("im_enter_room", i).then(e => {
                      var t;
                      this.messageEvents.emitPerformanceEvent("live_im_socket_enter_room", {
                          config: this.socketProps,
                          extra: {
                              message: `enterRoom state roomId: ${i.room_id} identity: ${i.identity}`
                          }
                      }),
                      this.logger.info("[socket] push", () => ({
                          type: "im_enter_room",
                          enterRoom: i
                      }));
                      try {
                          null === (t = this.client) || void 0 === t || t.send(e)
                      } catch (e) {
                          throw this.messageEvents.emitPerformanceEvent("live_im_socket_failed", {
                              config: this.socketProps,
                              extra: e
                          }),
                          this.emit("fail"),
                          this.stop(),
                          this.logger.info("[socket] enter room error", () => ({
                              error: e
                          })),
                          Error(e)
                      }
                  }
                  )
              })
          }
          switchRoom(e) {
              this.client && (this.sendRoomFrame(e),
              this.pingStarted = !0,
              this.pingToken = U(),
              this.ping({
                  token: this.pingToken
              }))
          }
          stop() {
              if (this.client) {
                  let e = this.client;
                  this.pingStarted = !1,
                  clearTimeout(this.pingTimer),
                  this.client = void 0,
                  e.close(),
                  this.pingToken = "",
                  this.event.removeAllListeners()
              }
          }
          pause() {
              this.pingStarted = !1,
              clearTimeout(this.pingTimer),
              this.pingToken = "",
              this.event.removeAllListeners()
          }
          bindClient() {
              this.client && (this.client.addEventListener("message", e => this.executeMessage(e)),
              this.client.addEventListener("open", e => this.executeOpen(e)),
              this.client.addEventListener("error", e => this.executeError(e)),
              this.client.addEventListener("close", e => this.executeClose(e)))
          }
          ping({token: e}) {
              var t;
              if (!this.pingStarted || e !== this.pingToken)
                  return;
              let i = Math.max(1e4, Math.max(Number(this.heartbeatDuration), 2e3));
              (null === (t = this.client) || void 0 === t ? void 0 : t.readyState) === 1 && this.pbReader.createPushFrameUnit8Array("hb", {
                  room_id: this.socketProps.roomId
              }).then(e => {
                  var t, i;
                  this.logger.info("[socket] push", () => ({
                      type: "hb",
                      room_id: this.socketProps.roomId
                  })),
                  this.messageEvents.emitPerformanceEvent("live_im_socket_ping", {
                      config: this.socketProps,
                      extra: {
                          message: `ping state: ${null === (t = this.client) || void 0 === t ? void 0 : t.readyState}_${this.heartbeatDuration}`
                      }
                  }),
                  null === (i = this.client) || void 0 === i || i.send(e)
              }
              ),
              this.pingTimer = window.setTimeout( () => {
                  this.ping({
                      token: e
                  })
              }
              , i)
          }
          executeOpen(e) {
              var t;
              (null === (t = this.client) || void 0 === t ? void 0 : t.readyState) === 1 && (this.logger.info("socket open:", () => ({
                  event: e,
                  socketProps: this.socketProps
              })),
              this.messageEvents.emitPerformanceEvent("live_im_socket_success", {
                  config: this.socketProps
              }),
              this.pingStarted = !0,
              this.pingToken = U(),
              this.ping({
                  token: this.pingToken
              }),
              "1" === this.socketProps.clientEnter && this.sendRoomFrame(this.socketProps),
              this.emit("success"))
          }
          executeError(e) {
              if (!this.client)
                  return;
              this.logger.info("socket executeError:", () => ({
                  event: e
              }));
              let t = {
                  message: `${e.type}_${e.error}_${e.message}`,
                  name: "live_im_socket_failed"
              };
              this.messageEvents.emitPerformanceEvent("live_im_socket_failed", {
                  config: this.socketProps,
                  extra: t
              }),
              this.emit("fail"),
              this.stop()
          }
          executeClose(e) {
              let t = {
                  name: "live_im_socket_close",
                  message: `${e.type}_${e.code}_${e.reason}`
              };
              this.logger.info("socket close:", () => t),
              this.messageEvents.emitPerformanceEvent("live_im_socket_close", {
                  config: this.socketProps,
                  extra: t
              }),
              this.emit("fail"),
              this.pingStarted = !1,
              clearTimeout(this.pingTimer)
          }
          executeMessage(e) {
              var t, i, s;
              let n;
              if (!this.client)
                  return;
              let o = this.pbReader.decodeFrame(e.data);
              if (!o.payload) {
                  this.logger.info("socket message payload empty:", () => o);
                  return
              }
              let r = Date.now()
                , a = !1;
              if (o.headers)
                  for (let e of o.headers)
                      "compress_type" === e.key && "gzip" === e.value && (a = !0),
                      "im_cursor" === e.key && e.value && (n = e.value);
              if (["im_enter_room_resp", "msg"].includes(o.payload_type)) {
                  let e = performance.now() + performance.timeOrigin + this.ntp.ntpDiff
                    , d = this.pbReader.decodeResponse(a ? (0,
                  Z.ungzip)(o.payload) : o.payload)
                    , l = performance.now() + performance.timeOrigin + this.ntp.ntpDiff;
                  this.logger.info("fetchSocketServer socket message response: ", () => ({
                      payloadType: o.payload_type,
                      frameData: o,
                      deserializeData: d
                  })),
                  d.cursor = null !== (t = null != n ? n : d.cursor) && void 0 !== t ? t : "";
                  let p = Number(d.now);
                  this.ntp.updateNTPDiff(r, p);
                  let c = this.ntp.getMessageArriveTime(p);
                  this.messageEvents.emit(d, {
                      message_from: N.Z7.socket,
                      server_now: c.server_now,
                      imsdk_recv_time: c.imsdk_recv_time,
                      adjusted_imsdk_recv_time: c.adjusted_imsdk_recv_time,
                      decode_start_time: e,
                      decode_end_time: l
                  }),
                  null !== (i = d.need_ack) && void 0 !== i && i && this.pbReader.createPushFrameUnit8Array("ack", null !== (s = d.internal_ext) && void 0 !== s ? s : "", {
                      LogID: o.LogID
                  }).then(e => {
                      var t;
                      this.messageEvents.emitPerformanceEvent("live_im_socket_ack", {
                          config: this.socketProps,
                          extra: {
                              message: `ack state: logid: ${o.LogID}`
                          }
                      }),
                      this.logger.info("[socket] push", () => ({
                          type: "ack"
                      })),
                      null === (t = this.client) || void 0 === t || t.send(e)
                  }
                  )
              }
              "close" === o.payload_type && (this.logger.info("fetchSocketServer socket response close: ", () => ({
                  payloadType: o.payload_type,
                  frameData: o
              })),
              this.stop())
          }
      }
      class Y {
          constructor(e) {
              this.isStarted = !1,
              this.delayTimer = 0,
              this.currentPollingToken = "",
              this.event = new (D()),
              this.defaultInterval = 1e3,
              this.errorInterval = 1e4,
              this.logger = e.logger,
              this.xhr = e.xhr,
              this.ntp = e.ntp,
              this.messageEvents = e.messageEvents
          }
          on(e, t) {
              this.event.on(e, t)
          }
          emit(e, t) {
              this.event.emit(e, t)
          }
          start(e) {
              !this.isStarted && (this.isStarted = !0,
              this.config(e),
              this.recursiveFetch({
                  pollingToken: this.currentPollingToken
              }))
          }
          config(e) {
              this.pollingProps = e,
              this.currentPollingToken = U()
          }
          stop() {
              this.isStarted && (this.isStarted = !1,
              this.currentPollingToken = ""),
              this.event.removeAllListeners()
          }
          recursiveFetch(e) {
              return (0,
              n.__awaiter)(this, void 0, void 0, function*() {
                  let t = this.pollingProps
                    , {host: i, isInitialize: s} = t
                    , o = (0,
                  n.__rest)(t, ["host", "isInitialize"])
                    , {pollingToken: r} = e
                    , a = Date.now();
                  this.logger.info("polling start:", () => o),
                  this.messageEvents.emitPerformanceEvent("live_im_polling_start", {
                      config: this.pollingProps
                  });
                  let d = yield this.xhr.deserializeFetch(`${i}${P}`, Object.assign(Object.assign({}, o), {
                      lastRtt: this.messageEvents.lastRtt,
                      internalExt: this.messageEvents.internalExt,
                      cursor: this.messageEvents.cursor,
                      historyCommentCursor: this.messageEvents.historyCommentCursor
                  }), s).catch(e => (this.logger.info("polling error:", () => e),
                  this.messageEvents.emitPerformanceEvent("live_im_polling_error", {
                      config: this.pollingProps,
                      extra: e
                  }),
                  null));
                  if (r === this.currentPollingToken && this.isStarted) {
                      if (d) {
                          this.logger.info("polling response:", () => d),
                          this.messageEvents.emitPerformanceEvent("live_im_polling_success", {
                              config: this.pollingProps
                          });
                          let e = Date.now();
                          this.messageEvents.lastRtt = String(e - a),
                          this.messageEvents.emit(d.data, d.extra),
                          this.emit("success", d),
                          yield j(Math.max(Number(d.data.fetch_interval), this.defaultInterval))
                      } else
                          this.pollingProps.lastRtt = "-1",
                          this.emit("fail"),
                          yield j(this.errorInterval);
                      yield this.recursiveFetch({
                          pollingToken: r
                      })
                  }
              })
          }
      }
      class V {
          constructor(e) {
              this.historyNoMore = !1,
              this.isLoadingHistory = !1,
              this.props = {},
              this.logger = e.logger,
              this.xhr = e.xhr,
              this.ntp = e.ntp,
              this.messageEvents = e.messageEvents
          }
          init(e) {
              this.props = e,
              this.historyNoMore = !1,
              this.isLoadingHistory = !1
          }
          hasMoreHistory() {
              return !this.historyNoMore
          }
          canLoadHistory() {
              return this.logger.info("sdk history state", () => ({
                  isLoadingHistory: this.isLoadingHistory,
                  historyCommentCursor: this.messageEvents.historyCommentCursor,
                  historyNoMore: this.historyNoMore
              })),
              !this.isLoadingHistory && !!this.props.historyCommentCount && !!this.messageEvents.historyCommentCursor && !this.historyNoMore
          }
          buildHistoryList(e) {
              var t;
              return (0,
              n.__awaiter)(this, void 0, void 0, function*() {
                  let i = null !== (t = e.data.messages) && void 0 !== t ? t : []
                    , s = e => null !== e
                    , n = [];
                  for (let t of i) {
                      let i = yield this.messageEvents.toConsumableMessage(t);
                      i && n.push(Object.assign(Object.assign({}, i), {
                          extra: e.extra
                      }))
                  }
                  return n.filter(s)
              })
          }
          fetchHistory({history_comment_count: e=5}) {
              var t, i;
              return (0,
              n.__awaiter)(this, void 0, void 0, function*() {
                  if (!this.canLoadHistory())
                      return [];
                  this.isLoadingHistory = !0;
                  let s = this.props
                    , {host: o} = s
                    , r = (0,
                  n.__rest)(s, ["host"])
                    , a = yield this.xhr.deserializeFetch(`${o}${A}`, Object.assign(Object.assign({}, r), {
                      fetchRule: 1,
                      historyCommentCount: e,
                      historyCommentCursor: this.messageEvents.historyCommentCursor,
                      lastRtt: this.messageEvents.lastRtt,
                      internalExt: this.messageEvents.internalExt,
                      cursor: this.messageEvents.cursor
                  }))
                    , d = yield this.buildHistoryList(a);
                  return this.messageEvents.historyCommentCursor = null !== (t = a.data.history_comment_cursor) && void 0 !== t ? t : this.messageEvents.historyCommentCursor,
                  this.historyNoMore = null !== (i = a.data.history_no_more) && void 0 !== i && i,
                  this.logger.info("fetch history response", () => a),
                  this.isLoadingHistory = !1,
                  d
              })
          }
      }
      class W {
          constructor() {
              this._stopped = !0,
              this._pause = !1,
              this._config = {},
              this.on = (...e) => {
                  this._messageEvents.on(...e)
              }
              ,
              this.off = (...e) => {
                  this._messageEvents.off(...e)
              }
              ,
              this.onPerformanceEvent = (...e) => {
                  this._messageEvents.onPerformanceEvent(...e)
              }
              ,
              this.offPerformanceEvent = (...e) => {
                  this._messageEvents.offPerformanceEvent(...e)
              }
              ;
              let e = new s
                , t = W.logger
                , i = new M({
                  logger: t
              })
                , n = new S({
                  logger: t,
                  pbReader: i
              })
                , o = new G({
                  ntp: e,
                  pbReader: i
              })
                , r = {
                  ntp: e,
                  xhr: o,
                  logger: t,
                  messageEvents: n,
                  pbReader: i
              };
              this.pbReader = i,
              this.ntp = e,
              this._messageEvents = n,
              this._initialization = new F(r),
              this._socket = new H(r),
              this._polling = new Y(r),
              this.historyList = new V(r),
              this._xhr = o
          }
          _bindPolling() {
              W.logger;
              let e = this._config
                , t = this._socket
                , i = this._polling;
              i.config(Object.assign(Object.assign({}, e), {
                  fetchRule: 1
              })),
              i.on("success", ({data: i}) => {
                  this._stopped || (this.fetchingType = "polling",
                  1 === i.fetch_type && i.push_server && !t.client && (this._messageEvents.emitPerformanceEvent("live_im_polling_switch_to_socket", {
                      config: e
                  }),
                  t.createClient(Object.assign(Object.assign({}, e), {
                      pushServer: i.push_server,
                      routeParamsMap: i.route_params,
                      heartbeatDuration: i.heartbeat_duration
                  }))))
              }
              )
          }
          _bindSocket() {
              W.logger;
              let e = this._config
                , t = this._socket
                , i = this._polling;
              t.on("success", () => {
                  this._messageEvents.emitPerformanceEvent("live_im_socket_close_polling", {
                      config: e
                  }),
                  i.stop(),
                  this.fetchingType = "socket"
              }
              ),
              t.on("fail", () => {
                  this._stopped || (this._messageEvents.emitPerformanceEvent("live_im_socket_switch_to_polling", {
                      config: e
                  }),
                  i.start(Object.assign(Object.assign({}, e), {
                      fetchRule: 1
                  })))
              }
              )
          }
          _bindInitialization() {
              W.logger;
              let e = this._config
                , t = this._initialization
                , i = this._socket
                , s = this._polling;
              t.on("success", ({data: t}) => {
                  !this._stopped && (1 === t.fetch_type ? (s.start(Object.assign(Object.assign({}, e), {
                      fetchRule: 1
                  })),
                  t.push_server && (this._messageEvents.emitPerformanceEvent("live_im_polling_switch_to_socket", {
                      config: e
                  }),
                  i.createClient(Object.assign(Object.assign({}, e), {
                      pushServer: t.push_server,
                      routeParamsMap: t.route_params,
                      heartbeatDuration: t.heartbeat_duration
                  })))) : (i.stop(),
                  s.start(Object.assign(Object.assign({}, e), {
                      fetchRule: 1
                  }))))
              }
              )
          }
          config(e) {
              let t = W.logger;
              this._config = Object.assign(Object.assign({}, this._config), e),
              t.config({
                  debug: this._config.debug
              })
          }
          start(e) {
              e && this.config(e);
              let t = W.logger
                , i = this._config;
              if (!i.roomId)
                  throw Error("roomId is required in config");
              this.stop(),
              this._stopped && (this._messageEvents.setRoomId(i.roomId),
              this._bindPolling(),
              this._bindSocket(),
              this._bindInitialization(),
              this.historyList.init(i),
              this._stopped = !1,
              this._initialization.start(Object.assign(Object.assign({}, i), {
                  fetchRule: 1
              })),
              t.info("live-im instance:", () => this))
          }
          resume({roomId: e}) {
              if (this._stopped)
                  return;
              if ("1" !== this._config.clientEnter) {
                  this._messageEvents.emitPerformanceEvent("live_im_resume_error", {
                      config: this._config,
                      extra: {
                          message: "need enable clientEnter to use switchRoom"
                      }
                  });
                  return
              }
              if (!this._pause)
                  return;
              this.config({
                  roomId: e
              });
              let t = this._socket
                , i = this._messageEvents;
              i.setRoomId(e),
              i.clean(),
              this._pause = !1,
              "socket" === this.fetchingType && t.client ? (this._stopped = !1,
              this._bindPolling(),
              this._bindSocket(),
              this.historyList.init(this._config),
              t.switchRoom(Object.assign(Object.assign({}, this._config), {
                  cursor: "",
                  internalExt: "",
                  pushServer: t.pushServer
              })),
              i.emitPerformanceEvent("live_im_switch_room_to_socket", {
                  config: this._config
              })) : (this.stop(),
              this.start(),
              i.emitPerformanceEvent("live_im_switch_room_downgrade", {
                  config: this._config
              }))
          }
          pause() {
              let e = this._socket
                , t = this._polling
                , i = this._messageEvents
                , s = this._initialization
                , n = this._xhr;
              if ("1" !== this._config.clientEnter) {
                  i.emitPerformanceEvent("live_im_pause_error", {
                      config: this._config,
                      extra: {
                          message: "need enable clientEnter to use im pause"
                      }
                  });
                  return
              }
              this._pause = !0,
              n.abort(),
              e.pause(),
              s.stop(),
              i.clean(),
              t.stop()
          }
          stop() {
              this._stopped = !0,
              this._xhr.abort(),
              this._socket.stop(),
              this._polling.stop(),
              this._initialization.stop(),
              this._messageEvents.clean()
          }
      }
      W.logger = new B;
      let z = W
  }
}]);
