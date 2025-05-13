/*! For license information please see vendor-acb9857f.4da2a1fcae7fadb9f800.js.LICENSE.txt */
(globalThis.__TIKTOK_CHUNKS__ = globalThis.__TIKTOK_CHUNKS__ || []).push([[94139], {
  810251: function(e) {
      e.exports = function() {
          "use strict";
          var e = "0.2.2"
            , t = function() {
              return (t = Object.assign || function(e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var o in t = arguments[n])
                          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e
              }
              ).apply(this, arguments)
          };
          function n(e, t, n, r) {
              return new (n = n || Promise)((function(o, i) {
                  function a(e) {
                      try {
                          c(r.next(e))
                      } catch (e) {
                          i(e)
                      }
                  }
                  function s(e) {
                      try {
                          c(r.throw(e))
                      } catch (e) {
                          i(e)
                      }
                  }
                  function c(e) {
                      var t;
                      e.done ? o(e.value) : ((t = e.value)instanceof n ? t : new n((function(e) {
                          e(t)
                      }
                      ))).then(a, s)
                  }
                  c((r = r.apply(e, t || [])).next())
              }
              ))
          }
          function r(e, t) {
              var n, r, o, i = {
                  label: 0,
                  sent: function() {
                      if (1 & o[0])
                          throw o[1];
                      return o[1]
                  },
                  trys: [],
                  ops: []
              }, a = {
                  next: s(0),
                  throw: s(1),
                  return: s(2)
              };
              return "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                  return this
              }
              ),
              a;
              function s(a) {
                  return function(s) {
                      var c = [a, s];
                      if (n)
                          throw new TypeError("Generator is already executing.");
                      for (; i; )
                          try {
                              if (n = 1,
                              r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                              0) : r.next) && !(o = o.call(r, c[1])).done)
                                  return o;
                              switch (r = 0,
                              (c = o ? [2 & c[0], o.value] : c)[0]) {
                              case 0:
                              case 1:
                                  o = c;
                                  break;
                              case 4:
                                  return i.label++,
                                  {
                                      value: c[1],
                                      done: !1
                                  };
                              case 5:
                                  i.label++,
                                  r = c[1],
                                  c = [0];
                                  continue;
                              case 7:
                                  c = i.ops.pop(),
                                  i.trys.pop();
                                  continue;
                              default:
                                  if (!(o = 0 < (o = i.trys).length && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                      i = 0;
                                      continue
                                  }
                                  if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                      i.label = c[1];
                                      break
                                  }
                                  if (6 === c[0] && i.label < o[1]) {
                                      i.label = o[1],
                                      o = c;
                                      break
                                  }
                                  if (o && i.label < o[2]) {
                                      i.label = o[2],
                                      i.ops.push(c);
                                      break
                                  }
                                  o[2] && i.ops.pop(),
                                  i.trys.pop();
                                  continue
                              }
                              c = t.call(e, i)
                          } catch (s) {
                              c = [6, s],
                              r = 0
                          } finally {
                              n = o = 0
                          }
                      if (5 & c[0])
                          throw c[1];
                      return {
                          value: c[0] ? c[1] : void 0,
                          done: !0
                      }
                  }
              }
          }
          function o(e) {
              var t = "function" == typeof Symbol && Symbol.iterator
                , n = t && e[t]
                , r = 0;
              if (n)
                  return n.call(e);
              if (e && "number" == typeof e.length)
                  return {
                      next: function() {
                          return {
                              value: (e = e && r >= e.length ? void 0 : e) && e[r++],
                              done: !e
                          }
                      }
                  };
              throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
          }
          function i(e, t) {
              var n = "function" == typeof Symbol && e[Symbol.iterator];
              if (!n)
                  return e;
              var r, o, i = n.call(e), a = [];
              try {
                  for (; (void 0 === t || 0 < t--) && !(r = i.next()).done; )
                      a.push(r.value)
              } catch (e) {
                  o = {
                      error: e
                  }
              } finally {
                  try {
                      r && !r.done && (n = i.return) && n.call(i)
                  } finally {
                      if (o)
                          throw o.error
                  }
              }
              return a
          }
          function a(e, t, n) {
              if (n || 2 === arguments.length)
                  for (var r, o = 0, i = t.length; o < i; o++)
                      !r && o in t || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
              return e.concat(r || Array.prototype.slice.call(t))
          }
          function s() {
              return {}
          }
          function c(e) {
              return "object" == typeof e && null !== e
          }
          var l = Object.prototype;
          function u(e) {
              return "function" == typeof e
          }
          function d(e) {
              if ("[object Array]" !== l.toString.call(e))
                  return null;
              if (e.length) {
                  for (var t = e, n = [], r = t.length, o = 0; o < r; o++) {
                      var i = t[o];
                      "string" == typeof i ? n.push(i.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")) : i && i.source && n.push(i.source)
                  }
                  return new RegExp(n.join("|"),"i")
              }
              return null
          }
          function f(e, t, n) {
              return function() {
                  for (var r = [], o = 0; o < arguments.length; o++)
                      r[o] = arguments[o];
                  if (!e)
                      return s;
                  var c = e[t]
                    , l = n.apply(void 0, a([c], i(r), !1))
                    , d = l;
                  return u(d) && (d = function() {
                      for (var e = [], t = 0; t < arguments.length; t++)
                          e[t] = arguments[t];
                      return l.apply(this, e)
                  }
                  ),
                  e[t] = d,
                  function() {
                      d === e[t] ? e[t] = c : l = c
                  }
              }
          }
          var h = 0;
          function m() {
              if ("object" == typeof window && c(window))
                  return window
          }
          function p() {
              if ("object" == typeof document && c(document))
                  return document
          }
          var g = function(e) {
              var t = e && e.timing || void 0;
              return [t, function() {
                  return e && e.now ? e.now() : (Date.now ? Date.now() : +new Date) - (t && t.navigationStart || 0)
              }
              , function(t) {
                  var n = (e || {}).getEntriesByType;
                  return u(n) && n.call(e, t) || []
              }
              , function() {
                  var t = (e || {}).clearResourceTimings;
                  u(t) && t.call(e)
              }
              , function(t) {
                  var n = (e || {}).getEntriesByName;
                  return u(n) && n.call(e, t) || []
              }
              ]
          }
            , v = function(e, t) {
              return void 0 === e && (e = "SlardarPlugins"),
              (t = void 0 !== t && t) ? function() {
                  for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                  return console.log.apply(console, a(["[".concat(e, "] ")], i(t), !1))
              }
              : function() {}
          }
            , y = (b.prototype.subscribe = function(e) {
              this.observers.push(e)
          }
          ,
          b.prototype.unsubscribe = function(e) {
              this.observers.filter((function(t) {
                  return t !== e
              }
              ))
          }
          ,
          b.prototype.notify = function(e) {
              this.observers.forEach((function(t) {
                  t(e)
              }
              ))
          }
          ,
          b);
          function b() {
              this.observers = []
          }
          w.prototype.get = function(e) {
              var t;
              return this.cache.has(e) ? (t = this.cache.get(e),
              this.cache.delete(e),
              this.cache.set(e, t),
              t) : null
          }
          ,
          w.prototype.put = function(e, t) {
              this.cache.has(e) ? this.cache.delete(e) : this.cache.size >= this.capacity && this.cache.delete(this.cache.keys().next().value),
              this.cache.set(e, t)
          }
          ;
          var C = w;
          function w(e) {
              this.cache = new Map,
              this.capacity = 10,
              this.capacity = e
          }
          function A(e) {
              var t = [];
              return Array.from(e).forEach((function(e) {
                  e instanceof Element && ("img" === e.nodeName.toLocaleLowerCase() ? t.push(e) : null != e && e.querySelectorAll && (e = e.querySelectorAll("img"),
                  t = t.concat(Array.from(e))))
              }
              )),
              t
          }
          var I = function(e) {
              var t = []
                , n = [];
              return (e = void 0 === e ? [] : e).forEach((function(e) {
                  t.push.apply(t, a([], i(A(e.addedNodes)), !1)),
                  n.push.apply(n, a([], i(A(e.removedNodes)), !1))
              }
              )),
              [t, n]
          }
            , F = "undefined" != typeof IntersectionObserver
            , L = (M.prototype.set = function(e) {
              var t;
              F && null != (t = this.intersectionObserver) && t.observe(e),
              this.record.set(e, {
                  visible: !1,
                  observer: this.intersectionObserver
              })
          }
          ,
          M.prototype.del = function(e) {
              var t;
              null != (t = this.record.get(e)) && t.visible || !F || null != (t = this.intersectionObserver) && t.unobserve(e),
              this.record.delete(e)
          }
          ,
          M.prototype.find = function(e) {
              var n, r, a = null;
              try {
                  for (var s = o(this.record), c = s.next(); !c.done; c = s.next()) {
                      var l = i(c.value, 2)
                        , u = l[0]
                        , d = l[1];
                      if (u.currentSrc === e) {
                          a = t({
                              target: u
                          }, d);
                          break
                      }
                  }
              } catch (e) {
                  n = {
                      error: e
                  }
              } finally {
                  try {
                      c && !c.done && (r = s.return) && r.call(s)
                  } finally {
                      if (n)
                          throw n.error
                  }
              }
              return a
          }
          ,
          M);
          function M() {
              var e = this;
              this.record = new Map,
              this.intersectionObserver = null,
              F && (this.intersectionObserver = new IntersectionObserver((function(n) {
                  n.forEach((function(n) {
                      var r;
                      (n.isIntersecting || 0 < n.intersectionRatio) && ((r = e.record.get(n.target)) && e.record.set(n.target, t(t({}, r), {
                          visible: !0
                      })),
                      null != (r = e.intersectionObserver) && r.unobserve(n.target))
                  }
                  ))
              }
              ),{
                  rootMargin: "200px"
              }))
          }
          function B(e, t, n) {
              var r = 1;
              return function() {
                  for (var o = [], s = 0; s < arguments.length; s++)
                      o[s] = arguments[s];
                  var c = e.apply(void 0, a([], i(o), !1))
                    , l = r += 2
                    , u = "string" == typeof o[0] ? o[0] : o[0].url;
                  return t(l, u),
                  c.then((function() {
                      n(l)
                  }
                  ), (function() {
                      n(l)
                  }
                  )),
                  c
              }
          }
          function k(e, t, n) {
              var r = 0;
              return function() {
                  for (var o = [], i = 0; i < arguments.length; i++)
                      o[i] = arguments[i];
                  var a = r += 2;
                  return t(a, this._url),
                  f(this, "onreadystatechange", (function(e) {
                      return function() {
                          for (var t = [], r = 0; r < arguments.length; r++)
                              t[r] = arguments[r];
                          return 4 === this.readyState && n(a),
                          e && e.apply(this, t)
                      }
                  }
                  ))(),
                  e.apply(this, o)
              }
          }
          function D(a, s, l, f, h, y, b) {
              if (void 0 === a && (a = m()),
              void 0 === s && (s = p()),
              void 0 === l && (l = m() && window.location),
              void 0 === f && (f = function() {
                  if ("function" == typeof XMLHttpRequest && u(XMLHttpRequest))
                      return XMLHttpRequest
              }()),
              void 0 === h && (h = function() {
                  if (m() && c(window.performance))
                      return window.performance
              }()),
              void 0 === y && (y = function() {
                  if (m() && u(window.MutationObserver))
                      return window.MutationObserver
              }()),
              void 0 === b && (b = function() {
                  if (m() && u(window.PerformanceObserver))
                      return window.PerformanceObserver
              }()),
              s && a && l)
                  return function(c, l) {
                      var u = c.debug
                        , w = void 0 === (Z = c.sample_rate) ? x : Z
                        , A = void 0 === (Z = c.ignoreUrls) ? [] : Z
                        , F = v("imageReport", u);
                      function M(e) {
                          F("图片资源上报", e),
                          l && l({
                              ev_type: R,
                              payload: e
                          })
                      }
                      F("图片插件已注册，version:", e);
                      var B, k = i(g(h), 2)[1], D = new L, z = new C(10), K = (c = i(_(), 3))[0], V = c[1], W = c[2], U = i(S(a, f, (function(e) {
                          return F("before http 请求, url:", e),
                          !0
                      }
                      ), (function(e) {
                          e = U.get(e),
                          F("after http 请求, url:", e),
                          e && U.size - 1 < O && J.notify({
                              ev_type: j,
                              payload: {
                                  url: e,
                                  remainConnections: O - (U.size - 1)
                              }
                          })
                      }
                      )), 1)[0], Z = i(function(e, t) {
                          var n = e && new e(t);
                          return [function(e, t) {
                              n && e && n.observe(e, t)
                          }
                          , function() {
                              return n && n.disconnect()
                          }
                          ]
                      }(y, (function(e) {
                          var t = (e = i(I(e), 2))[0];
                          e = e[1],
                          (t.length || e.length) && F("监听到DOM变更", t, e),
                          t.forEach((function(e) {
                              return D.set(e)
                          }
                          )),
                          e.forEach((function(e) {
                              return D.del(e)
                          }
                          ))
                      }
                      )), 2), Y = (u = Z[0],
                      Z[1]), X = (u(s, {
                          childList: !0,
                          subtree: !0,
                          characterData: !1,
                          attributes: !1
                      }),
                      c = i(function(e, t, n, r) {
                          var o = e && new e((function(e, o) {
                              e.getEntries ? e.getEntries().forEach((function(e, n, r) {
                                  return t(e, n, r, o)
                              }
                              )) : r && r(),
                              n && o.disconnect()
                          }
                          ));
                          return [function() {
                              for (var t = [], n = 0; n < arguments.length; n++)
                                  t[n] = arguments[n];
                              if (!e || !o)
                                  return r && r();
                              try {
                                  t.forEach((function(t) {
                                      -1 < e.supportedEntryTypes.indexOf(t) && o.observe({
                                          type: t,
                                          buffered: !1
                                      })
                                  }
                                  ))
                              } catch (n) {
                                  try {
                                      o.observe({
                                          entryTypes: t
                                      })
                                  } catch (n) {
                                      return r && r()
                                  }
                              }
                          }
                          , function() {
                              return o && o.disconnect()
                          }
                          ]
                      }(b, (function(e) {
                          var n, r, o, i, a, s, c, l, u, f, h, m, p, g, v, y, b;
                          "img" !== e.initiatorType && "css" !== e.initiatorType || null != (v = d(A)) && v.test(e.name) || (F("监听到resource", e),
                          b = (v = e.toJSON()).name,
                          y = v.initiatorType,
                          n = v.transferSize,
                          r = v.duration,
                          o = v.encodedBodySize,
                          i = v.decodedBodySize,
                          a = v.redirectStart,
                          s = v.redirectEnd,
                          c = v.serverTiming,
                          l = v.domainLookupStart,
                          u = v.domainLookupEnd,
                          f = v.connectStart,
                          h = v.connectEnd,
                          m = v.secureConnectionStart,
                          p = v.requestStart,
                          g = v.responseStart,
                          v = v.responseEnd,
                          "img" === (y = {
                              name: b,
                              source: y,
                              dpr: Math.round(null != (b = null === window || void 0 === window ? void 0 : window.devicePixelRatio) ? b : 1),
                              needCompress: !1,
                              needSizeOptim: !1,
                              needFormatOptim: !1,
                              hitLocalCache: 0 === n || void 0 === n && 0 === r,
                              hitCdnCache: 0 <= (c || []).findIndex((function(e) {
                                  return "cdn-cache" === e.name && 0 <= e.description.toLocaleLowerCase().indexOf("hit")
                              }
                              )),
                              size: 0 !== i ? o : 0,
                              duration: r,
                              redirect: s - a,
                              dns: u - l,
                              tcp: h - f,
                              ssl: void 0 === m || m <= 0 ? 0 : h - m,
                              request: void 0 === p || p <= 0 ? 0 : g - p,
                              download: void 0 === g || g <= 0 ? 0 : v - g,
                              timingDetail: e.toJSON()
                          }).source && (b = D.find(e.name),
                          F("匹配到img", b, D.record),
                          b && (y = t(t({}, y), {
                              isLazyLoad: Boolean(b.visible),
                              width: (null == (n = b.target) ? void 0 : n.naturalWidth) || 0,
                              height: (null == (c = b.target) ? void 0 : c.naturalHeight) || 0,
                              viewerWidth: null == (i = b.target) ? void 0 : i.width,
                              viewerHeight: null == (o = b.target) ? void 0 : o.height
                          }))),
                          J.notify({
                              ev_type: T,
                              payload: y
                          }))
                      }
                      )), 2),
                      Z = c[0],
                      c[1]), Q = function(e) {
                          return n(void 0, void 0, void 0, (function() {
                              var n, o, i, a;
                              return r(this, (function(r) {
                                  switch (r.label) {
                                  case 0:
                                      return F("进行中的请求数：".concat(U.size)),
                                      0 < O - U.size ? (n = z.get(e.name)) ? (F("命中缓存header", e.name, n),
                                      [3, 3]) : [3, 1] : [3, 4];
                                  case 1:
                                      return [4, E(e.name)];
                                  case 2:
                                      n = r.sent(),
                                      z.put(e.name, n),
                                      r.label = 3;
                                  case 3:
                                      if (a = (o = n || {}).format,
                                      i = o.status,
                                      o = o.contentLength,
                                      F("response header：", a, i),
                                      "css" === e.source) {
                                          if (null == a || !a.startsWith("image/"))
                                              return [2]
                                      } else if ((null == a || !a.startsWith("image/")) && Number(i) < 400)
                                          return [2];
                                      return a = t(t({}, e), {
                                          format: a && String(a).startsWith("image/") && null != (a = a.split(/[,;]/)[0]) ? a.slice(6) : void 0,
                                          status: i
                                      }),
                                      !Number(a.size) && Number(i) < 400 && 0 < Number(o) && (a.size = Number(o)),
                                      i = G(a),
                                      M(t(t({}, a), i)),
                                      [3, 5];
                                  case 4:
                                      V(e.name, t({}, e)),
                                      r.label = 5;
                                  case 5:
                                      return [2]
                                  }
                              }
                              ))
                          }
                          ))
                      }, q = function(e, o) {
                          return n(void 0, void 0, void 0, (function() {
                              var n, i, a, s;
                              return r(this, (function(r) {
                                  switch (r.label) {
                                  case 0:
                                      return (n = z.get(e)) ? (F("命中缓存header", e, n),
                                      [3, 3]) : [3, 1];
                                  case 1:
                                      return [4, E(e)];
                                  case 2:
                                      n = r.sent(),
                                      z.put(e, n),
                                      r.label = 3;
                                  case 3:
                                      if (s = (i = n || {}).format,
                                      a = i.status,
                                      i = i.contentLength,
                                      F("response header：", s, a),
                                      "css" === o.source) {
                                          if (null == s || !s.startsWith("image/"))
                                              return W(e),
                                              [2]
                                      } else if ((null == s || !s.startsWith("image/")) && Number(a) < 400)
                                          return W(e),
                                          [2];
                                      return s = t(t({}, o || {}), {
                                          format: s && String(s).startsWith("image/") && null != (s = s.split(/[,;]/)[0]) ? s.slice(6) : void 0,
                                          status: a
                                      }),
                                      !Number(s.size) && Number(a) < 400 && 0 < Number(i) && (s.size = Number(i)),
                                      a = G(s),
                                      M(t(t({}, s), a)),
                                      W(e),
                                      [2]
                                  }
                              }
                              ))
                          }
                          ))
                      };
                      return J.subscribe((function(e) {
                          var n, r, a, s, c;
                          if (e.ev_type === T) {
                              var l = k() - (null == (l = null == (l = e.payload) ? void 0 : l.timingDetail) ? void 0 : l.responseEnd);
                              if (F("资源加载事件: ", e.payload.name),
                              F("资源完成加载时间: ", null == (c = null == (c = e.payload) ? void 0 : c.timingDetail) ? void 0 : c.responseEnd),
                              F("时间间隔: ", l),
                              F("是否命中本地缓存: ", null == (c = e.payload) ? void 0 : c.hitLocalCache),
                              !function(e) {
                                  return Math.random() < Number(e)
                              }(w))
                                  return;
                              if (!N)
                                  return void V(e.payload.name, t({}, e.payload));
                              Q(e.payload)
                          }
                          if (e.ev_type === j && N) {
                              if (F("http请求完成事件"),
                              e.payload.remainConnections <= 0)
                                  return;
                              try {
                                  for (var u = o(K), d = u.next(); !d.done; d = u.next()) {
                                      var f = i(d.value, 2)
                                        , h = f[0];
                                      if (null == (y = f[1]) || !y.__lock) {
                                          V(h, t(t({}, y), {
                                              __lock: !0
                                          })),
                                          q(h, y);
                                          break
                                      }
                                  }
                              } catch (e) {
                                  n = {
                                      error: e
                                  }
                              } finally {
                                  try {
                                      d && !d.done && (r = u.return) && r.call(u)
                                  } finally {
                                      if (n)
                                          throw n.error
                                  }
                              }
                          }
                          if (e.ev_type === H && e.payload.pageLoad) {
                              F("pageload 事件");
                              try {
                                  for (var m = o(K), p = m.next(); !p.done; p = m.next()) {
                                      var g = i(p.value, 2)
                                        , v = g[0]
                                        , y = g[1];
                                      if (!(0 < O - U.size))
                                          break;
                                      null != y && y.__lock || (V(v, t(t({}, y), {
                                          __lock: !0
                                      })),
                                      q(v, y))
                                  }
                              } catch (e) {
                                  a = {
                                      error: e
                                  }
                              } finally {
                                  try {
                                      p && !p.done && (s = m.return) && s.call(m)
                                  } finally {
                                      if (a)
                                          throw a.error
                                  }
                              }
                              N = !0
                          }
                      }
                      )),
                      Z(P),
                      B = function() {
                          J.notify({
                              ev_type: H,
                              payload: {
                                  pageLoad: !0
                              }
                          })
                      }
                      ,
                      u = m(),
                      c = p(),
                      u && c && ("complete" === c.readyState ? B() : u.addEventListener("load", (function() {
                          setTimeout((function() {
                              B()
                          }
                          ), 0)
                      }
                      ), !1)),
                      [function() {
                          F("插件销毁"),
                          Y(),
                          X()
                      }
                      ]
                  }
          }
          var _ = function() {
              var e = new Map;
              return [e, function(t, n) {
                  return e.set(t, n)
              }
              , function(t) {
                  return e.delete(t)
              }
              ]
          }
            , S = function(e, t, n, r) {
              function o(e, t) {
                  n && n(t) && l(e, t)
              }
              function a(e) {
                  r && r(e),
                  u(e)
              }
              var s = i(_(), 3)
                , c = s[0]
                , l = s[1]
                , u = s[2];
              return t && f(t.prototype, "send", k)(o, a),
              e && f(e, "fetch", B)(o, a),
              [c]
          }
            , E = function(e) {
              return n(void 0, void 0, void 0, (function() {
                  var t, n;
                  return r(this, (function(r) {
                      switch (r.label) {
                      case 0:
                          return r.trys.push([0, 2, , 3]),
                          [4, fetch(e, {
                              cache: "force-cache"
                          })];
                      case 1:
                          return t = r.sent(),
                          n = t.headers,
                          [2, {
                              status: t.status,
                              format: n.get("content-type") || "",
                              contentLength: Number(n.get("content-length")) || 0
                          }];
                      case 2:
                          return function() {
                              for (var e = [], t = 0; t < arguments.length; t++)
                                  e[t] = arguments[t];
                              console.log.apply(console, a(["[SDK]", Date.now(), ("" + h++).padStart(8, " ")], i(e), !1))
                          }("获取header失败", r.sent()),
                          [2, null];
                      case 3:
                          return [2]
                      }
                  }
                  ))
              }
              ))
          }
            , G = function(e) {
              var n = {
                  needCompress: !1,
                  needSizeOptim: !1,
                  needFormatOptim: !1
              };
              if (!e.size)
                  return n;
              i = (d = e).width,
              l = d.height,
              a = void 0 === (a = d.format) ? "" : a,
              d = d.size,
              o = navigator && navigator.userAgent.toLocaleLowerCase().includes("chrome"),
              u = {},
              /(jpeg|png|bmp)/.test(a) && (i && l ? (r = Math.round(Math.max(d - i * l * .2, 0)),
              o ? (i = Math.round(Math.max(d - i * l / 6, 0)),
              u.needFormatOptim = 0 < i,
              u.needFormatOptim && (u.webpSavings = r,
              u.avifSavings = i)) : (u.needFormatOptim = 0 < r,
              u.needFormatOptim && (u.webpSavings = r))) : (u.needFormatOptim = !0,
              u.webpSavings = Math.round(/png/.test(a) ? .26 * d : .3 * d),
              o && (u.avifSavings = Math.round(/png/.test(a) ? .408 * d : .44 * d)))),
              /gif/.test(a) && (u.needFormatOptim = !0,
              u.webpSavings = .65 * d,
              o && (u.avifSavings = .65 * d));
              var r, o, i, a, s, c, l = u, u = (r = (i = e).width,
              a = i.height,
              o = void 0 === (o = i.format) ? "" : o,
              i = i.size,
              d = {},
              r && a && (/(jpeg|bmp)/.test(o) && (s = i - r * a * .25,
              d.needCompress = 0 < s,
              d.needCompress && (d.compressSavings = Math.round(s))),
              /png/.test(o) && (s = i - r * a * 4 * .2 * .3,
              d.needCompress = 0 < s,
              d.needCompress && (d.compressSavings = Math.round(s)))),
              d), d = (i = (o = e).width,
              a = e.height,
              s = e.viewerWidth,
              d = e.viewerHeight,
              c = e.dpr,
              o = e.size,
              e = {},
              i && a && s && d && (e.needSizeOptim = 0 < (s = 1 - s * d * c * c / (i * a)),
              e.needSizeOptim && (e.resizeSavings = Math.round((1 - s) * o))),
              e);
              return t(t(t(t({}, n), l), u), d)
          }
            , T = "image_resource"
            , j = "http_custom"
            , H = "pageload"
            , R = "image"
            , x = .1
            , P = "resource"
            , O = 8
            , J = new y
            , N = !1
            , z = {
              sample_rate: x
          };
          return {
              version: e,
              imageReport: function(e) {
                  return void 0 === e && (e = z),
                  {
                      name: "imageReport",
                      setup: function(t) {
                          t.on("init", (function() {
                              var n = i(function(e, t, n, r) {
                                  void 0 === t && (t = {}),
                                  void 0 === r && (r = []);
                                  try {
                                      var o = e.apply(void 0, a([], i(r), !1));
                                      return o && o(t, n) || []
                                  } catch (e) {
                                      return function() {
                                          for (var e = [], t = 0; t < arguments.length; t++)
                                              e[t] = arguments[t];
                                          var n = function(e) {
                                              if (e)
                                                  return e.__SLARDAR_REGISTRY__ || (e.__SLARDAR_REGISTRY__ = {
                                                      Slardar: {
                                                          plugins: [],
                                                          errors: [],
                                                          subject: {}
                                                      }
                                                  }),
                                                  e.__SLARDAR_REGISTRY__.Slardar
                                          }(m());
                                          n && (n.errors || (n.errors = []),
                                          n.errors.push(e))
                                      }(e),
                                      []
                                  }
                              }(D, e, t.report.bind(t)), 1)[0];
                              t.on("beforeDestroy", (function() {
                                  n()
                              }
                              ))
                          }
                          ))
                      }
                  }
              }
          }
      }()
  },
  885195: (e, t, n) => {
      "use strict";
      var r;
      r = function(e) {
          var t = function(e) {
              var t, n = Object.prototype, r = n.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
              function c(e, t, n) {
                  return Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  }),
                  e[t]
              }
              try {
                  c({}, "")
              } catch (e) {
                  c = function(e, t, n) {
                      return e[t] = n
                  }
              }
              function l(e, t, n, r) {
                  var o = t && t.prototype instanceof g ? t : g
                    , i = Object.create(o.prototype)
                    , a = new k(r || []);
                  return i._invoke = function(e, t, n) {
                      var r = d;
                      return function(o, i) {
                          if (r === h)
                              throw new Error("Generator is already running");
                          if (r === m) {
                              if ("throw" === o)
                                  throw i;
                              return _()
                          }
                          for (n.method = o,
                          n.arg = i; ; ) {
                              var a = n.delegate;
                              if (a) {
                                  var s = L(a, n);
                                  if (s) {
                                      if (s === p)
                                          continue;
                                      return s
                                  }
                              }
                              if ("next" === n.method)
                                  n.sent = n._sent = n.arg;
                              else if ("throw" === n.method) {
                                  if (r === d)
                                      throw r = m,
                                      n.arg;
                                  n.dispatchException(n.arg)
                              } else
                                  "return" === n.method && n.abrupt("return", n.arg);
                              r = h;
                              var c = u(e, t, n);
                              if ("normal" === c.type) {
                                  if (r = n.done ? m : f,
                                  c.arg === p)
                                      continue;
                                  return {
                                      value: c.arg,
                                      done: n.done
                                  }
                              }
                              "throw" === c.type && (r = m,
                              n.method = "throw",
                              n.arg = c.arg)
                          }
                      }
                  }(e, n, a),
                  i
              }
              function u(e, t, n) {
                  try {
                      return {
                          type: "normal",
                          arg: e.call(t, n)
                      }
                  } catch (e) {
                      return {
                          type: "throw",
                          arg: e
                      }
                  }
              }
              e.wrap = l;
              var d = "suspendedStart"
                , f = "suspendedYield"
                , h = "executing"
                , m = "completed"
                , p = {};
              function g() {}
              function v() {}
              function y() {}
              var b = {};
              b[i] = function() {
                  return this
              }
              ;
              var C = Object.getPrototypeOf
                , w = C && C(C(D([])));
              w && w !== n && r.call(w, i) && (b = w);
              var A = y.prototype = g.prototype = Object.create(b);
              function I(e) {
                  ["next", "throw", "return"].forEach((function(t) {
                      c(e, t, (function(e) {
                          return this._invoke(t, e)
                      }
                      ))
                  }
                  ))
              }
              function F(e, t) {
                  function n(o, i, a, s) {
                      var c = u(e[o], e, i);
                      if ("throw" !== c.type) {
                          var l = c.arg
                            , d = l.value;
                          return d && "object" == typeof d && r.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                              n("next", e, a, s)
                          }
                          ), (function(e) {
                              n("throw", e, a, s)
                          }
                          )) : t.resolve(d).then((function(e) {
                              l.value = e,
                              a(l)
                          }
                          ), (function(e) {
                              return n("throw", e, a, s)
                          }
                          ))
                      }
                      s(c.arg)
                  }
                  var o;
                  this._invoke = function(e, r) {
                      function i() {
                          return new t((function(t, o) {
                              n(e, r, t, o)
                          }
                          ))
                      }
                      return o = o ? o.then(i, i) : i()
                  }
              }
              function L(e, n) {
                  var r = e.iterator[n.method];
                  if (r === t) {
                      if (n.delegate = null,
                      "throw" === n.method) {
                          if (e.iterator.return && (n.method = "return",
                          n.arg = t,
                          L(e, n),
                          "throw" === n.method))
                              return p;
                          n.method = "throw",
                          n.arg = new TypeError("The iterator does not provide a 'throw' method")
                      }
                      return p
                  }
                  var o = u(r, e.iterator, n.arg);
                  if ("throw" === o.type)
                      return n.method = "throw",
                      n.arg = o.arg,
                      n.delegate = null,
                      p;
                  var i = o.arg;
                  return i ? i.done ? (n[e.resultName] = i.value,
                  n.next = e.nextLoc,
                  "return" !== n.method && (n.method = "next",
                  n.arg = t),
                  n.delegate = null,
                  p) : i : (n.method = "throw",
                  n.arg = new TypeError("iterator result is not an object"),
                  n.delegate = null,
                  p)
              }
              function M(e) {
                  var t = {
                      tryLoc: e[0]
                  };
                  1 in e && (t.catchLoc = e[1]),
                  2 in e && (t.finallyLoc = e[2],
                  t.afterLoc = e[3]),
                  this.tryEntries.push(t)
              }
              function B(e) {
                  var t = e.completion || {};
                  t.type = "normal",
                  delete t.arg,
                  e.completion = t
              }
              function k(e) {
                  this.tryEntries = [{
                      tryLoc: "root"
                  }],
                  e.forEach(M, this),
                  this.reset(!0)
              }
              function D(e) {
                  if (e) {
                      var n = e[i];
                      if (n)
                          return n.call(e);
                      if ("function" == typeof e.next)
                          return e;
                      if (!isNaN(e.length)) {
                          var o = -1
                            , a = function n() {
                              for (; ++o < e.length; )
                                  if (r.call(e, o))
                                      return n.value = e[o],
                                      n.done = !1,
                                      n;
                              return n.value = t,
                              n.done = !0,
                              n
                          };
                          return a.next = a
                      }
                  }
                  return {
                      next: _
                  }
              }
              function _() {
                  return {
                      value: t,
                      done: !0
                  }
              }
              return v.prototype = A.constructor = y,
              y.constructor = v,
              v.displayName = c(y, s, "GeneratorFunction"),
              e.isGeneratorFunction = function(e) {
                  var t = "function" == typeof e && e.constructor;
                  return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
              }
              ,
              e.mark = function(e) {
                  return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
                  c(e, s, "GeneratorFunction")),
                  e.prototype = Object.create(A),
                  e
              }
              ,
              e.awrap = function(e) {
                  return {
                      __await: e
                  }
              }
              ,
              I(F.prototype),
              F.prototype[a] = function() {
                  return this
              }
              ,
              e.AsyncIterator = F,
              e.async = function(t, n, r, o, i) {
                  void 0 === i && (i = Promise);
                  var a = new F(l(t, n, r, o),i);
                  return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                      return e.done ? e.value : a.next()
                  }
                  ))
              }
              ,
              I(A),
              c(A, s, "Generator"),
              A[i] = function() {
                  return this
              }
              ,
              A.toString = function() {
                  return "[object Generator]"
              }
              ,
              e.keys = function(e) {
                  var t = [];
                  for (var n in e)
                      t.push(n);
                  return t.reverse(),
                  function n() {
                      for (; t.length; ) {
                          var r = t.pop();
                          if (r in e)
                              return n.value = r,
                              n.done = !1,
                              n
                      }
                      return n.done = !0,
                      n
                  }
              }
              ,
              e.values = D,
              k.prototype = {
                  constructor: k,
                  reset: function(e) {
                      if (this.prev = 0,
                      this.next = 0,
                      this.sent = this._sent = t,
                      this.done = !1,
                      this.delegate = null,
                      this.method = "next",
                      this.arg = t,
                      this.tryEntries.forEach(B),
                      !e)
                          for (var n in this)
                              "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                  },
                  stop: function() {
                      this.done = !0;
                      var e = this.tryEntries[0].completion;
                      if ("throw" === e.type)
                          throw e.arg;
                      return this.rval
                  },
                  dispatchException: function(e) {
                      if (this.done)
                          throw e;
                      var n = this;
                      function o(r, o) {
                          return s.type = "throw",
                          s.arg = e,
                          n.next = r,
                          o && (n.method = "next",
                          n.arg = t),
                          !!o
                      }
                      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                          var a = this.tryEntries[i]
                            , s = a.completion;
                          if ("root" === a.tryLoc)
                              return o("end");
                          if (a.tryLoc <= this.prev) {
                              var c = r.call(a, "catchLoc")
                                , l = r.call(a, "finallyLoc");
                              if (c && l) {
                                  if (this.prev < a.catchLoc)
                                      return o(a.catchLoc, !0);
                                  if (this.prev < a.finallyLoc)
                                      return o(a.finallyLoc)
                              } else if (c) {
                                  if (this.prev < a.catchLoc)
                                      return o(a.catchLoc, !0)
                              } else {
                                  if (!l)
                                      throw new Error("try statement without catch or finally");
                                  if (this.prev < a.finallyLoc)
                                      return o(a.finallyLoc)
                              }
                          }
                      }
                  },
                  abrupt: function(e, t) {
                      for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                          var o = this.tryEntries[n];
                          if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                              var i = o;
                              break
                          }
                      }
                      i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                      var a = i ? i.completion : {};
                      return a.type = e,
                      a.arg = t,
                      i ? (this.method = "next",
                      this.next = i.finallyLoc,
                      p) : this.complete(a)
                  },
                  complete: function(e, t) {
                      if ("throw" === e.type)
                          throw e.arg;
                      return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                      this.method = "return",
                      this.next = "end") : "normal" === e.type && t && (this.next = t),
                      p
                  },
                  finish: function(e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                          var n = this.tryEntries[t];
                          if (n.finallyLoc === e)
                              return this.complete(n.completion, n.afterLoc),
                              B(n),
                              p
                      }
                  },
                  catch: function(e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                          var n = this.tryEntries[t];
                          if (n.tryLoc === e) {
                              var r = n.completion;
                              if ("throw" === r.type) {
                                  var o = r.arg;
                                  B(n)
                              }
                              return o
                          }
                      }
                      throw new Error("illegal catch attempt")
                  },
                  delegateYield: function(e, n, r) {
                      return this.delegate = {
                          iterator: D(e),
                          resultName: n,
                          nextLoc: r
                      },
                      "next" === this.method && (this.arg = t),
                      p
                  }
              },
              e
          }(e.exports);
          try {
              regeneratorRuntime = t
          } catch (e) {
              Function("r", "regeneratorRuntime = r")(t)
          }
      }
      ,
      r({
          exports: {}
      })
  }
  ,
  619852: function(e, t, n) {
      "use strict";
      var r = this && this.__importDefault || function(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      ;
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.TTWebBanner = t.TTWebBannerTTEHCoinRight = t.TTWebBannerFaceLeft = t.TTWebBannerCoinRight = t.TTWebBannerGiftLeft = t.TTWebBannerCoinLeft = void 0;
      const o = r(n(465622))
        , i = n(628764)
        , a = r(n(751508))
        , s = r(n(561521))
        , c = r(n(101811))
        , l = r(n(543277))
        , u = r(n(460169));
      t.TTWebBannerCoinLeft = ({shortText: e, longText: t}) => o.default.createElement(i.TTWebBannerBasic, {
          shortText: e,
          longText: t,
          textPaddingLeft: "50px",
          textColor: "#FFF5C9",
          backgroundImg: a.default
      }),
      t.TTWebBannerGiftLeft = ({shortText: e, longText: t}) => o.default.createElement(i.TTWebBannerBasic, {
          shortText: e,
          longText: t,
          textPaddingLeft: "49px",
          textColor: "#F4F4F4",
          backgroundImg: c.default
      }),
      t.TTWebBannerCoinRight = ({shortText: e, longText: t}) => o.default.createElement(i.TTWebBannerBasic, {
          shortText: e,
          longText: t,
          textPaddingLeft: "14px",
          textColor: "#F4F4F4",
          backgroundImg: s.default
      }),
      t.TTWebBannerFaceLeft = ({shortText: e, longText: t}) => o.default.createElement(i.TTWebBannerBasic, {
          shortText: e,
          longText: t,
          textPaddingLeft: "51px",
          textColor: "#141414",
          backgroundImg: l.default
      }),
      t.TTWebBannerTTEHCoinRight = ({shortText: e, longText: t}) => o.default.createElement(i.TTWebBannerBasic, {
          shortText: e,
          longText: t,
          textPaddingLeft: "11px",
          textColor: "#000",
          backgroundImg: u.default
      }),
      t.TTWebBanner = ({shortText: e, longText: n}) => o.default.createElement(t.TTWebBannerTTEHCoinRight, {
          shortText: e,
          longText: n
      })
  },
  628764: function(e, t, n) {
      "use strict";
      var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
          void 0 === r && (r = n);
          var o = Object.getOwnPropertyDescriptor(t, n);
          o && !("get"in o ? !t.__esModule : o.writable || o.configurable) || (o = {
              enumerable: !0,
              get: function() {
                  return t[n]
              }
          }),
          Object.defineProperty(e, r, o)
      }
      : function(e, t, n, r) {
          void 0 === r && (r = n),
          e[r] = t[n]
      }
      )
        , o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
              enumerable: !0,
              value: t
          })
      }
      : function(e, t) {
          e.default = t
      }
      )
        , i = this && this.__importStar || function(e) {
          if (e && e.__esModule)
              return e;
          var t = {};
          if (null != e)
              for (var n in e)
                  "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
          return o(t, e),
          t
      }
        , a = this && this.__importDefault || function(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      ;
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.TTWebBannerBasic = t.AlignLongText = t.EHEntranceTextEl = void 0;
      const s = a(n(2032))
        , c = i(n(465622))
        , l = s.default.div`
position: relative;
box-sizing: border-box;
width: 208px;

display: flex;
align-items: center;
justify-content: center;
`
        , u = s.default.img({
          height: "52px",
          borderRadius: "8px",
          display: "block",
          userSelect: "none"
      })
        , d = s.default.div({
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
      });
      t.EHEntranceTextEl = s.default.h4(( ({textColor: e}) => ({
          color: null != e ? e : "#0A0A0A",
          fontSize: "12px",
          fontWeight: 700,
          lineHeight: "16px",
          margin: 0,
          fontFamily: "TikTokFont"
      }))),
      t.AlignLongText = ({shortText: e, longText: n, paddingLeft: r="50px", textColor: o="#0A0A0A", width: i="141px", maxHeight: a="40px"}) => {
          const [s,l] = (0,
          c.useState)(!1);
          return c.default.createElement(d, {
              style: {
                  left: r,
                  textAlign: "start",
                  width: i
              }
          }, c.default.createElement("div", {
              style: {
                  maxHeight: a,
                  overflow: "hidden",
                  width: "100%"
              },
              ref: e => {
                  e && e.clientHeight < e.scrollHeight && l(!0)
              }
          }, c.default.createElement(t.EHEntranceTextEl, {
              textColor: o
          }, s ? e : n)))
      }
      ,
      t.TTWebBannerBasic = ({shortText: e, longText: n, textPaddingLeft: r, textColor: o, backgroundImg: i}) => c.default.createElement(l, null, c.default.createElement(u, {
          src: i,
          alt: "eh-background"
      }), c.default.createElement(t.AlignLongText, {
          shortText: e,
          longText: n,
          paddingLeft: r,
          textColor: o
      }))
  },
  873853: function(e, t, n) {
      "use strict";
      var r = this && this.__importDefault || function(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      ;
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.TTWebBannerLarge = void 0;
      const o = r(n(2032))
        , i = r(n(465622))
        , a = r(n(347700))
        , s = n(628764)
        , c = o.default.div`
position: relative;
width: 432px;

display: flex;
align-items: center;
justify-content: center;
`
        , l = o.default.img`
height: 40px;
border-radius: 8px;
display: block;
user-select: none;
`;
      t.TTWebBannerLarge = ({shortText: e, longText: t}) => i.default.createElement(c, null, i.default.createElement(l, {
          src: a.default,
          alt: "eh-background"
      }), i.default.createElement(s.AlignLongText, {
          shortText: e,
          longText: t,
          textColor: "#000000",
          paddingLeft: "56px",
          width: "275px",
          maxHeight: "20px"
      }))
  },
  713508: (e, t, n) => {
      "use strict";
      t.Lw = void 0;
      n(628764);
      var r = n(619852);
      Object.defineProperty(t, "Lw", {
          enumerable: !0,
          get: function() {
              return r.TTWebBanner
          }
      });
      n(873853)
  }
  ,
  396553: (e, t, n) => {
      "use strict";
      function r(e) {
          return e && "object" == typeof e && "default"in e ? e : {
              default: e
          }
      }
      var o = r(n(465622));
      t.o = function(e, t) {
          var n = o.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current;
          !function(e) {
              return !!e.useServerEffect
          }(n) ? o.default.useEffect((function() {
              var t = e();
              if (Array.isArray(t))
                  return t[1]
          }
          ), t) : n.useServerEffect(e, t)
      }
  }
  ,
  676160: function(e, t, n) {
      "use strict";
      var r, o = this && this.__extends || (r = function(e, t) {
          return r = Object.setPrototypeOf || {
              __proto__: []
          }instanceof Array && function(e, t) {
              e.__proto__ = t
          }
          || function(e, t) {
              for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          ,
          r(e, t)
      }
      ,
      function(e, t) {
          if ("function" != typeof t && null !== t)
              throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
          function n() {
              this.constructor = e
          }
          r(e, t),
          e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
          new n)
      }
      );
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.TtWid = void 0;
      var i = function(e) {
          function t(t) {
              return t.needFid = !1,
              e.call(this, t) || this
          }
          return o(t, e),
          t
      }(n(545264).TtWidCore);
      t.TtWid = i
  },
  545264: function(e, t, n) {
      "use strict";
      var r = this && this.__assign || function() {
          return r = Object.assign || function(e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in t = arguments[n])
                      Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e
          }
          ,
          r.apply(this, arguments)
      }
        , o = this && this.__awaiter || function(e, t, n, r) {
          return new (n || (n = Promise))((function(o, i) {
              function a(e) {
                  try {
                      c(r.next(e))
                  } catch (e) {
                      i(e)
                  }
              }
              function s(e) {
                  try {
                      c(r.throw(e))
                  } catch (e) {
                      i(e)
                  }
              }
              function c(e) {
                  e.done ? o(e.value) : function(e) {
                      return e instanceof n ? e : new n((function(t) {
                          t(e)
                      }
                      ))
                  }(e.value).then(a, s)
              }
              c((r = r.apply(e, t || [])).next())
          }
          ))
      }
        , i = this && this.__generator || function(e, t) {
          var n, r, o, i, a = {
              label: 0,
              sent: function() {
                  if (1 & o[0])
                      throw o[1];
                  return o[1]
              },
              trys: [],
              ops: []
          };
          return i = {
              next: s(0),
              throw: s(1),
              return: s(2)
          },
          "function" == typeof Symbol && (i[Symbol.iterator] = function() {
              return this
          }
          ),
          i;
          function s(i) {
              return function(s) {
                  return function(i) {
                      if (n)
                          throw new TypeError("Generator is already executing.");
                      for (; a; )
                          try {
                              if (n = 1,
                              r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                              0) : r.next) && !(o = o.call(r, i[1])).done)
                                  return o;
                              switch (r = 0,
                              o && (i = [2 & i[0], o.value]),
                              i[0]) {
                              case 0:
                              case 1:
                                  o = i;
                                  break;
                              case 4:
                                  return a.label++,
                                  {
                                      value: i[1],
                                      done: !1
                                  };
                              case 5:
                                  a.label++,
                                  r = i[1],
                                  i = [0];
                                  continue;
                              case 7:
                                  i = a.ops.pop(),
                                  a.trys.pop();
                                  continue;
                              default:
                                  if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                      a = 0;
                                      continue
                                  }
                                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                      a.label = i[1];
                                      break
                                  }
                                  if (6 === i[0] && a.label < o[1]) {
                                      a.label = o[1],
                                      o = i;
                                      break
                                  }
                                  if (o && a.label < o[2]) {
                                      a.label = o[2],
                                      a.ops.push(i);
                                      break
                                  }
                                  o[2] && a.ops.pop(),
                                  a.trys.pop();
                                  continue
                              }
                              i = t.call(e, a)
                          } catch (e) {
                              i = [6, e],
                              r = 0
                          } finally {
                              n = o = 0
                          }
                      if (5 & i[0])
                          throw i[1];
                      return {
                          value: i[0] ? i[1] : void 0,
                          done: !0
                      }
                  }([i, s])
              }
          }
      }
        , a = this && this.__importDefault || function(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      ;
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.TtWidCore = void 0;
      var s = a(n(835254))
        , c = n(198868)
        , l = {
          timeout: 3e3,
          withCredentials: !0,
          headers: {
              "content-type": "application/x-www-form-urlencoded"
          }
      }
        , u = function() {
          function e(e, t) {
              void 0 === t && (t = null),
              this.host = "",
              void 0 === e.union && (e.union = !0),
              void 0 === e.needFid && (e.needFid = !0),
              e.host && (this.host = e.host),
              this.firebaseClient = t,
              e && e.headers && (e.headers["content-type"] = "application/x-www-form-urlencoded",
              l.headers = e.headers,
              delete e.headers),
              e && e.timeout && (l.timeout = e.timeout,
              delete e.timeout),
              this.options = e
          }
          return Object.defineProperty(e.prototype, "setFirebaseClient", {
              set: function(e) {
                  this.firebaseClient = e
              },
              enumerable: !1,
              configurable: !0
          }),
          e.prototype.checkWebId = function(e) {
              var t, n;
              return o(this, void 0, void 0, (function() {
                  var o, a, u, d, f, h, m, p, g, v;
                  return i(this, (function(i) {
                      switch (i.label) {
                      case 0:
                          return i.trys.push([0, 12, , 13]),
                          o = e || c.CookieReadConfigEnum.COOKIE_READ_DEFAULT,
                          a = "",
                          this.options.needFid ? (u = null === (t = this.firebaseClient) || void 0 === t ? void 0 : t.getfid) ? [3, 2] : [4, null === (n = this.firebaseClient) || void 0 === n ? void 0 : n.getInstanceId()] : [3, 3];
                      case 1:
                          u = i.sent(),
                          i.label = 2;
                      case 2:
                          a = u || "",
                          i.label = 3;
                      case 3:
                          return [4, s.default.post("".concat(this.host, "/ttwid/check/"), r(r({}, this.options), {
                              fid: a,
                              migrate_priority: o
                          }), l)];
                      case 4:
                          if (d = i.sent(),
                          f = d.data,
                          m = (h = void 0 === f ? null : f) || d,
                          !(h && h.status_code > 1001))
                              return [3, 11];
                          p = h.migrate_info,
                          i.label = 5;
                      case 5:
                          return i.trys.push([5, 10, , 11]),
                          this.options.union ? [4, this.registerUnionWebId({
                              migrate_info: p,
                              fid: a
                          })] : [3, 7];
                      case 6:
                          return g = i.sent(),
                          m = g,
                          [3, 9];
                      case 7:
                          return [4, this.registerOpenWebId({
                              migrate_info: p,
                              fid: a
                          })];
                      case 8:
                          g = i.sent(),
                          m = g,
                          i.label = 9;
                      case 9:
                          return [3, 11];
                      case 10:
                          return v = i.sent(),
                          console.error("ttwid register error", v, v.message),
                          [2, h || d];
                      case 11:
                          return [2, m];
                      case 12:
                          throw i.sent();
                      case 13:
                          return [2]
                      }
                  }
                  ))
              }
              ))
          }
          ,
          e.prototype.checkWebIdFromTea = function() {
              return o(this, void 0, void 0, (function() {
                  var e, t, n, r, o;
                  return i(this, (function(i) {
                      switch (i.label) {
                      case 0:
                          return i.trys.push([0, 2, , 3]),
                          e = localStorage && localStorage.getItem("__tea_cache_tokens_".concat(this.options.aid)) || "",
                          t = e && JSON.parse(e) || {},
                          n = t.web_id,
                          (r = void 0 === n ? "" : n) && (o = new Date(Date.now() + 864e5).toUTCString(),
                          document.cookie = "_tea_web_id=".concat(r, "; expires=").concat(o, "; path=/;")),
                          [4, this.checkWebId(c.CookieReadConfigEnum.COOKIE_READ_TEA_PRIOR)];
                      case 1:
                          return [2, i.sent()];
                      case 2:
                          throw i.sent();
                      case 3:
                          return [2]
                      }
                  }
                  ))
              }
              ))
          }
          ,
          e.prototype.registerUnionWebId = function(e, t) {
              return o(this, void 0, void 0, (function() {
                  var n, o, a, c, u, d, f, h, m, p, g, v;
                  return i(this, (function(i) {
                      switch (i.label) {
                      case 0:
                          return i.trys.push([0, 6, , 7]),
                          n = this.options,
                          o = n.unionHost,
                          a = void 0 === o ? "" : o,
                          c = n.cbUrlProtocol,
                          u = void 0 === c ? "" : c,
                          [4, s.default.post("".concat(a, "/ttwid/union/register/"), r(r({}, this.options), e), l)];
                      case 1:
                          if (d = i.sent(),
                          f = d.data,
                          !(h = void 0 === f ? null : f) || !h.redirect_url)
                              return [3, 5];
                          i.label = 2;
                      case 2:
                          return i.trys.push([2, 4, , 5]),
                          m = h.redirect_url,
                          u && m && (m = m.replace(/^https?/, u)),
                          [4, s.default.get(m, l)];
                      case 3:
                          return p = i.sent(),
                          t ? [2, t(null, p.data || {})] : [2, p.data || {}];
                      case 4:
                          return g = i.sent(),
                          t ? [2, t(g, h || {})] : [2, h];
                      case 5:
                          if (t)
                              return [2, t(new Error("ttwid union register error"))];
                          throw new Error("ttwid union register error");
                      case 6:
                          if (v = i.sent(),
                          t)
                              return [2, t(v)];
                          throw v;
                      case 7:
                          return [2]
                      }
                  }
                  ))
              }
              ))
          }
          ,
          e.prototype.registerOpenWebId = function(e) {
              return o(this, void 0, void 0, (function() {
                  return i(this, (function(t) {
                      switch (t.label) {
                      case 0:
                          return t.trys.push([0, 2, , 3]),
                          [4, s.default.post("".concat(this.host, "/ttwid/register/"), r(r({}, this.options), e), l)];
                      case 1:
                          return [2, t.sent().data];
                      case 2:
                          throw t.sent();
                      case 3:
                          return [2]
                      }
                  }
                  ))
              }
              ))
          }
          ,
          e.prototype.getInstanceId = function() {
              var e;
              return o(this, void 0, void 0, (function() {
                  return i(this, (function(t) {
                      return [2, (null === (e = this.firebaseClient) || void 0 === e ? void 0 : e.getInstanceId()) || ""]
                  }
                  ))
              }
              ))
          }
          ,
          e.prototype.deleteInstallation = function() {
              var e;
              return o(this, void 0, void 0, (function() {
                  return i(this, (function(t) {
                      return [2, null === (e = this.firebaseClient) || void 0 === e ? void 0 : e.deleteInstallation()]
                  }
                  ))
              }
              ))
          }
          ,
          e
      }();
      t.TtWidCore = u
  },
  198868: (e, t) => {
      "use strict";
      var n;
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.CookieReadConfigEnum = void 0,
      (n = t.CookieReadConfigEnum || (t.CookieReadConfigEnum = {}))[n.COOKIE_READ_DEFAULT = 0] = "COOKIE_READ_DEFAULT",
      n[n.COOKIE_READ_TEA_PRIOR = 1] = "COOKIE_READ_TEA_PRIOR"
  }
  ,
  124633: (e, t, n) => {
      "use strict";
      n.d(t, {
          Ay: () => re,
          SX: () => oe
      });
      var r = n(611379)
        , o = "3.4.2";
      function i(e, t) {
          return new Promise((function(n) {
              return setTimeout(n, e, t)
          }
          ))
      }
      function a(e) {
          return !!e && "function" == typeof e.then
      }
      function s(e, t) {
          try {
              var n = e();
              a(n) ? n.then((function(e) {
                  return t(!0, e)
              }
              ), (function(e) {
                  return t(!1, e)
              }
              )) : t(!0, n)
          } catch (e) {
              t(!1, e)
          }
      }
      function c(e, t, n) {
          return void 0 === n && (n = 16),
          (0,
          r.sH)(this, void 0, void 0, (function() {
              var o, a, s, c;
              return (0,
              r.YH)(this, (function(r) {
                  switch (r.label) {
                  case 0:
                      o = Array(e.length),
                      a = Date.now(),
                      s = 0,
                      r.label = 1;
                  case 1:
                      return s < e.length ? (o[s] = t(e[s], s),
                      (c = Date.now()) >= a + n ? (a = c,
                      [4, i(0)]) : [3, 3]) : [3, 4];
                  case 2:
                      r.sent(),
                      r.label = 3;
                  case 3:
                      return ++s,
                      [3, 1];
                  case 4:
                      return [2, o]
                  }
              }
              ))
          }
          ))
      }
      function l(e) {
          e.then(void 0, (function() {}
          ))
      }
      function u(e, t) {
          e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
          t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
          var n = [0, 0, 0, 0];
          return n[3] += e[3] + t[3],
          n[2] += n[3] >>> 16,
          n[3] &= 65535,
          n[2] += e[2] + t[2],
          n[1] += n[2] >>> 16,
          n[2] &= 65535,
          n[1] += e[1] + t[1],
          n[0] += n[1] >>> 16,
          n[1] &= 65535,
          n[0] += e[0] + t[0],
          n[0] &= 65535,
          [n[0] << 16 | n[1], n[2] << 16 | n[3]]
      }
      function d(e, t) {
          e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
          t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
          var n = [0, 0, 0, 0];
          return n[3] += e[3] * t[3],
          n[2] += n[3] >>> 16,
          n[3] &= 65535,
          n[2] += e[2] * t[3],
          n[1] += n[2] >>> 16,
          n[2] &= 65535,
          n[2] += e[3] * t[2],
          n[1] += n[2] >>> 16,
          n[2] &= 65535,
          n[1] += e[1] * t[3],
          n[0] += n[1] >>> 16,
          n[1] &= 65535,
          n[1] += e[2] * t[2],
          n[0] += n[1] >>> 16,
          n[1] &= 65535,
          n[1] += e[3] * t[1],
          n[0] += n[1] >>> 16,
          n[1] &= 65535,
          n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
          n[0] &= 65535,
          [n[0] << 16 | n[1], n[2] << 16 | n[3]]
      }
      function f(e, t) {
          return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32,
          [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
      }
      function h(e, t) {
          return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
      }
      function m(e, t) {
          return [e[0] ^ t[0], e[1] ^ t[1]]
      }
      function p(e) {
          return e = m(e, [0, e[0] >>> 1]),
          e = m(e = d(e, [4283543511, 3981806797]), [0, e[0] >>> 1]),
          m(e = d(e, [3301882366, 444984403]), [0, e[0] >>> 1])
      }
      function g(e, t) {
          t = t || 0;
          var n, r = (e = e || "").length % 16, o = e.length - r, i = [0, t], a = [0, t], s = [0, 0], c = [0, 0], l = [2277735313, 289559509], g = [1291169091, 658871167];
          for (n = 0; n < o; n += 16)
              s = [255 & e.charCodeAt(n + 4) | (255 & e.charCodeAt(n + 5)) << 8 | (255 & e.charCodeAt(n + 6)) << 16 | (255 & e.charCodeAt(n + 7)) << 24, 255 & e.charCodeAt(n) | (255 & e.charCodeAt(n + 1)) << 8 | (255 & e.charCodeAt(n + 2)) << 16 | (255 & e.charCodeAt(n + 3)) << 24],
              c = [255 & e.charCodeAt(n + 12) | (255 & e.charCodeAt(n + 13)) << 8 | (255 & e.charCodeAt(n + 14)) << 16 | (255 & e.charCodeAt(n + 15)) << 24, 255 & e.charCodeAt(n + 8) | (255 & e.charCodeAt(n + 9)) << 8 | (255 & e.charCodeAt(n + 10)) << 16 | (255 & e.charCodeAt(n + 11)) << 24],
              s = f(s = d(s, l), 31),
              i = u(i = f(i = m(i, s = d(s, g)), 27), a),
              i = u(d(i, [0, 5]), [0, 1390208809]),
              c = f(c = d(c, g), 33),
              a = u(a = f(a = m(a, c = d(c, l)), 31), i),
              a = u(d(a, [0, 5]), [0, 944331445]);
          switch (s = [0, 0],
          c = [0, 0],
          r) {
          case 15:
              c = m(c, h([0, e.charCodeAt(n + 14)], 48));
          case 14:
              c = m(c, h([0, e.charCodeAt(n + 13)], 40));
          case 13:
              c = m(c, h([0, e.charCodeAt(n + 12)], 32));
          case 12:
              c = m(c, h([0, e.charCodeAt(n + 11)], 24));
          case 11:
              c = m(c, h([0, e.charCodeAt(n + 10)], 16));
          case 10:
              c = m(c, h([0, e.charCodeAt(n + 9)], 8));
          case 9:
              c = d(c = m(c, [0, e.charCodeAt(n + 8)]), g),
              a = m(a, c = d(c = f(c, 33), l));
          case 8:
              s = m(s, h([0, e.charCodeAt(n + 7)], 56));
          case 7:
              s = m(s, h([0, e.charCodeAt(n + 6)], 48));
          case 6:
              s = m(s, h([0, e.charCodeAt(n + 5)], 40));
          case 5:
              s = m(s, h([0, e.charCodeAt(n + 4)], 32));
          case 4:
              s = m(s, h([0, e.charCodeAt(n + 3)], 24));
          case 3:
              s = m(s, h([0, e.charCodeAt(n + 2)], 16));
          case 2:
              s = m(s, h([0, e.charCodeAt(n + 1)], 8));
          case 1:
              s = d(s = m(s, [0, e.charCodeAt(n)]), l),
              i = m(i, s = d(s = f(s, 31), g))
          }
          return i = u(i = m(i, [0, e.length]), a = m(a, [0, e.length])),
          a = u(a, i),
          i = u(i = p(i), a = p(a)),
          a = u(a, i),
          ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
      }
      function v(e) {
          return parseInt(e)
      }
      function y(e) {
          return parseFloat(e)
      }
      function b(e, t) {
          return "number" == typeof e && isNaN(e) ? t : e
      }
      function C(e) {
          return e.reduce((function(e, t) {
              return e + (t ? 1 : 0)
          }
          ), 0)
      }
      function w(e, t) {
          if (void 0 === t && (t = 1),
          Math.abs(t) >= 1)
              return Math.round(e / t) * t;
          var n = 1 / t;
          return Math.round(e * n) / n
      }
      function A(e) {
          return e && "object" == typeof e && "message"in e ? e : {
              message: e
          }
      }
      function I(e, t, n) {
          var o = Object.keys(e).filter((function(e) {
              return !function(e, t) {
                  for (var n = 0, r = e.length; n < r; ++n)
                      if (e[n] === t)
                          return !0;
                  return !1
              }(n, e)
          }
          ))
            , i = c(o, (function(n) {
              return function(e, t) {
                  var n = new Promise((function(n) {
                      var r = Date.now();
                      s(e.bind(null, t), (function() {
                          for (var e = [], t = 0; t < arguments.length; t++)
                              e[t] = arguments[t];
                          var o = Date.now() - r;
                          if (!e[0])
                              return n((function() {
                                  return {
                                      error: A(e[1]),
                                      duration: o
                                  }
                              }
                              ));
                          var i = e[1];
                          if (function(e) {
                              return "function" != typeof e
                          }(i))
                              return n((function() {
                                  return {
                                      value: i,
                                      duration: o
                                  }
                              }
                              ));
                          n((function() {
                              return new Promise((function(e) {
                                  var t = Date.now();
                                  s(i, (function() {
                                      for (var n = [], r = 0; r < arguments.length; r++)
                                          n[r] = arguments[r];
                                      var i = o + Date.now() - t;
                                      if (!n[0])
                                          return e({
                                              error: A(n[1]),
                                              duration: i
                                          });
                                      e({
                                          value: n[1],
                                          duration: i
                                      })
                                  }
                                  ))
                              }
                              ))
                          }
                          ))
                      }
                      ))
                  }
                  ));
                  return l(n),
                  function() {
                      return n.then((function(e) {
                          return e()
                      }
                      ))
                  }
              }(e[n], t)
          }
          ));
          return l(i),
          function() {
              return (0,
              r.sH)(this, void 0, void 0, (function() {
                  var e, t, n, a;
                  return (0,
                  r.YH)(this, (function(r) {
                      switch (r.label) {
                      case 0:
                          return [4, i];
                      case 1:
                          return [4, c(r.sent(), (function(e) {
                              var t = e();
                              return l(t),
                              t
                          }
                          ))];
                      case 2:
                          return e = r.sent(),
                          [4, Promise.all(e)];
                      case 3:
                          for (t = r.sent(),
                          n = {},
                          a = 0; a < o.length; ++a)
                              n[o[a]] = t[a];
                          return [2, n]
                      }
                  }
                  ))
              }
              ))
          }
      }
      function F() {
          var e = window
            , t = navigator;
          return C(["MSCSSMatrix"in e, "msSetImmediate"in e, "msIndexedDB"in e, "msMaxTouchPoints"in t, "msPointerEnabled"in t]) >= 4
      }
      function L() {
          var e = window
            , t = navigator;
          return C(["webkitPersistentStorage"in t, "webkitTemporaryStorage"in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL"in e, "BatteryManager"in e, "webkitMediaStream"in e, "webkitSpeechGrammar"in e]) >= 5
      }
      function M() {
          var e = window
            , t = navigator;
          return C(["ApplePayError"in e, "CSSPrimitiveValue"in e, "Counter"in e, 0 === t.vendor.indexOf("Apple"), "getStorageUpdates"in t, "WebKitMediaKeys"in e]) >= 4
      }
      function B() {
          var e = window;
          return C(["safari"in e, !("DeviceMotionEvent"in e), !("ongestureend"in e), !("standalone"in navigator)]) >= 3
      }
      function k() {
          var e = document;
          return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e)
      }
      function D() {
          var e = L()
            , t = function() {
              var e, t, n = window;
              return C(["buildID"in navigator, "MozAppearance"in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}), "onmozfullscreenchange"in n, "mozInnerScreenX"in n, "CSSMozDocumentRule"in n, "CanvasCaptureMediaStream"in n]) >= 4
          }();
          if (!e && !t)
              return !1;
          var n = window;
          return C(["onorientationchange"in n, "orientation"in n, e && !("SharedWorker"in n), t && /android/i.test(navigator.appVersion)]) >= 2
      }
      function _(e) {
          var t = new Error(e);
          return t.name = e,
          t
      }
      function S(e, t, n) {
          var o, a, s;
          return void 0 === n && (n = 50),
          (0,
          r.sH)(this, void 0, void 0, (function() {
              var c, l;
              return (0,
              r.YH)(this, (function(r) {
                  switch (r.label) {
                  case 0:
                      c = document,
                      r.label = 1;
                  case 1:
                      return c.body ? [3, 3] : [4, i(n)];
                  case 2:
                      return r.sent(),
                      [3, 1];
                  case 3:
                      l = c.createElement("iframe"),
                      r.label = 4;
                  case 4:
                      return r.trys.push([4, , 10, 11]),
                      [4, new Promise((function(e, n) {
                          var r = !1
                            , o = function() {
                              r = !0,
                              e()
                          };
                          l.onload = o,
                          l.onerror = function(e) {
                              r = !0,
                              n(e)
                          }
                          ;
                          var i = l.style;
                          i.setProperty("display", "block", "important"),
                          i.position = "absolute",
                          i.top = "0",
                          i.left = "0",
                          i.visibility = "hidden",
                          t && "srcdoc"in l ? l.srcdoc = t : l.src = "about:blank",
                          c.body.appendChild(l);
                          var a = function() {
                              var e, t;
                              r || ("complete" === (null === (t = null === (e = l.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.readyState) ? o() : setTimeout(a, 10))
                          };
                          a()
                      }
                      ))];
                  case 5:
                      r.sent(),
                      r.label = 6;
                  case 6:
                      return (null === (a = null === (o = l.contentWindow) || void 0 === o ? void 0 : o.document) || void 0 === a ? void 0 : a.body) ? [3, 8] : [4, i(n)];
                  case 7:
                      return r.sent(),
                      [3, 6];
                  case 8:
                      return [4, e(l, l.contentWindow)];
                  case 9:
                      return [2, r.sent()];
                  case 10:
                      return null === (s = l.parentNode) || void 0 === s || s.removeChild(l),
                      [7];
                  case 11:
                      return [2]
                  }
              }
              ))
          }
          ))
      }
      function E(e) {
          for (var t = function(e) {
              for (var t, n, r = "Unexpected syntax '".concat(e, "'"), o = /^\s*([a-z-]*)(.*)$/i.exec(e), i = o[1] || void 0, a = {}, s = /([.:#][\w-]+|\[.+?\])/gi, c = function(e, t) {
                  a[e] = a[e] || [],
                  a[e].push(t)
              }; ; ) {
                  var l = s.exec(o[2]);
                  if (!l)
                      break;
                  var u = l[0];
                  switch (u[0]) {
                  case ".":
                      c("class", u.slice(1));
                      break;
                  case "#":
                      c("id", u.slice(1));
                      break;
                  case "[":
                      var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(u);
                      if (!d)
                          throw new Error(r);
                      c(d[1], null !== (n = null !== (t = d[4]) && void 0 !== t ? t : d[5]) && void 0 !== n ? n : "");
                      break;
                  default:
                      throw new Error(r)
                  }
              }
              return [i, a]
          }(e), n = t[0], r = t[1], o = document.createElement(null != n ? n : "div"), i = 0, a = Object.keys(r); i < a.length; i++) {
              var s = a[i]
                , c = r[s].join(" ");
              "style" === s ? G(o.style, c) : o.setAttribute(s, c)
          }
          return o
      }
      function G(e, t) {
          for (var n = 0, r = t.split(";"); n < r.length; n++) {
              var o = r[n]
                , i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);
              if (i) {
                  var a = i[1]
                    , s = i[2]
                    , c = i[4];
                  e.setProperty(a, s, c || "")
              }
          }
      }
      var T = ["monospace", "sans-serif", "serif"]
        , j = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];
      function H(e) {
          return e.toDataURL()
      }
      var R, x;
      function P() {
          var e = screen;
          return [b(y(e.availTop), null), b(y(e.width) - y(e.availWidth) - b(y(e.availLeft), 0), null), b(y(e.height) - y(e.availHeight) - b(y(e.availTop), 0), null), b(y(e.availLeft), null)]
      }
      function O(e) {
          for (var t = 0; t < 4; ++t)
              if (e[t])
                  return !1;
          return !0
      }
      function J(e) {
          var t;
          return (0,
          r.sH)(this, void 0, void 0, (function() {
              var n, o, a, s, c, l, u;
              return (0,
              r.YH)(this, (function(r) {
                  switch (r.label) {
                  case 0:
                      for (n = document,
                      o = n.createElement("div"),
                      a = new Array(e.length),
                      s = {},
                      N(o),
                      u = 0; u < e.length; ++u)
                          "DIALOG" === (c = E(e[u])).tagName && c.show(),
                          N(l = n.createElement("div")),
                          l.appendChild(c),
                          o.appendChild(l),
                          a[u] = c;
                      r.label = 1;
                  case 1:
                      return n.body ? [3, 3] : [4, i(50)];
                  case 2:
                      return r.sent(),
                      [3, 1];
                  case 3:
                      n.body.appendChild(o);
                      try {
                          for (u = 0; u < e.length; ++u)
                              a[u].offsetParent || (s[e[u]] = !0)
                      } finally {
                          null === (t = o.parentNode) || void 0 === t || t.removeChild(o)
                      }
                      return [2, s]
                  }
              }
              ))
          }
          ))
      }
      function N(e) {
          e.style.setProperty("display", "block", "important")
      }
      function z(e) {
          return matchMedia("(inverted-colors: ".concat(e, ")")).matches
      }
      function K(e) {
          return matchMedia("(forced-colors: ".concat(e, ")")).matches
      }
      function V(e) {
          return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
      }
      function W(e) {
          return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
      }
      function U(e) {
          return matchMedia("(dynamic-range: ".concat(e, ")")).matches
      }
      var Z = Math
        , Y = function() {
          return 0
      }
        , X = {
          default: [],
          apple: [{
              font: "-apple-system-body"
          }],
          serif: [{
              fontFamily: "serif"
          }],
          sans: [{
              fontFamily: "sans-serif"
          }],
          mono: [{
              fontFamily: "monospace"
          }],
          min: [{
              fontSize: "1px"
          }],
          system: [{
              fontFamily: "system-ui"
          }]
      }
        , Q = {
          fonts: function() {
              return S((function(e, t) {
                  var n = t.document
                    , r = n.body;
                  r.style.fontSize = "48px";
                  var o = n.createElement("div")
                    , i = {}
                    , a = {}
                    , s = function(e) {
                      var t = n.createElement("span")
                        , r = t.style;
                      return r.position = "absolute",
                      r.top = "0",
                      r.left = "0",
                      r.fontFamily = e,
                      t.textContent = "mmMwWLliI0O&1",
                      o.appendChild(t),
                      t
                  }
                    , c = T.map(s)
                    , l = function() {
                      for (var e = {}, t = function(t) {
                          e[t] = T.map((function(e) {
                              return function(e, t) {
                                  return s("'".concat(e, "',").concat(t))
                              }(t, e)
                          }
                          ))
                      }, n = 0, r = j; n < r.length; n++)
                          t(r[n]);
                      return e
                  }();
                  r.appendChild(o);
                  for (var u = 0; u < T.length; u++)
                      i[T[u]] = c[u].offsetWidth,
                      a[T[u]] = c[u].offsetHeight;
                  return j.filter((function(e) {
                      return t = l[e],
                      T.some((function(e, n) {
                          return t[n].offsetWidth !== i[e] || t[n].offsetHeight !== a[e]
                      }
                      ));
                      var t
                  }
                  ))
              }
              ))
          },
          domBlockers: function(e) {
              var t = (void 0 === e ? {} : e).debug;
              return (0,
              r.sH)(this, void 0, void 0, (function() {
                  var e, n, o, i, a;
                  return (0,
                  r.YH)(this, (function(r) {
                      switch (r.label) {
                      case 0:
                          return M() || D() ? (s = atob,
                          e = {
                              abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', s("I0JveC1CYW5uZXItYWRz")],
                              abpvn: [".quangcao", "#mobileCatfish", s("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                              adBlockFinland: [".mainostila", s("LnNwb25zb3JpdA=="), ".ylamainos", s("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                              adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", s("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                              adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", s("LmhlYWRlci1ibG9ja2VkLWFk"), s("I2FkX2Jsb2NrZXI=")],
                              adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                              adGuardBase: [".BetterJsPopOverlay", s("I2FkXzMwMFgyNTA="), s("I2Jhbm5lcmZsb2F0MjI="), s("I2NhbXBhaWduLWJhbm5lcg=="), s("I0FkLUNvbnRlbnQ=")],
                              adGuardChinese: [s("LlppX2FkX2FfSA=="), s("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", s("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), s("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                              adGuardFrench: ["#pavePub", s("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", s("LmFkc19iYW4=")],
                              adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                              adGuardJapanese: ["#kauli_yad_1", s("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), s("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), s("LmFkZ29vZ2xl"), s("Ll9faXNib29zdFJldHVybkFk")],
                              adGuardMobile: [s("YW1wLWF1dG8tYWRz"), s("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", s("I2FkX2ludmlld19hcmVh")],
                              adGuardRussian: [s("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), s("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', s("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                              adGuardSocial: [s("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), s("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                              adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                              adGuardTrackingProtection: ["#qoo-counter", s("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), s("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), s("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                              adGuardTurkish: ["#backkapat", s("I3Jla2xhbWk="), s("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), s("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), s("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                              bulgarian: [s("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                              easyList: [".yb-floorad", s("LndpZGdldF9wb19hZHNfd2lkZ2V0"), s("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", s("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                              easyListChina: [s("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), s("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                              easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", s("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                              easyListCzechSlovak: ["#onlajny-stickers", s("I3Jla2xhbW5pLWJveA=="), s("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", s("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                              easyListDutch: [s("I2FkdmVydGVudGll"), s("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", s("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                              easyListGermany: ["#SSpotIMPopSlider", s("LnNwb25zb3JsaW5rZ3J1ZW4="), s("I3dlcmJ1bmdza3k="), s("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), s("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                              easyListItaly: [s("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", s("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                              easyListLithuania: [s("LnJla2xhbW9zX3RhcnBhcw=="), s("LnJla2xhbW9zX251b3JvZG9z"), s("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), s("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), s("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                              estonian: [s("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                              fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                              fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                              fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                              fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                              frellwitSwedish: [s("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), s("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", s("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                              greekAdBlock: [s("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), s("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), s("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                              hungarian: ["#cemp_doboz", ".optimonk-iframe-container", s("LmFkX19tYWlu"), s("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                              iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                              icelandicAbp: [s("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                              latvian: [s("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), s("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                              listKr: [s("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), s("I2xpdmVyZUFkV3JhcHBlcg=="), s("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), s("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                              listeAr: [s("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", s("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), s("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), s("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                              listeFr: [s("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), s("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), s("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                              officialPolish: ["#ceneo-placeholder-ceneo-12", s("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), s("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), s("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), s("ZGl2I3NrYXBpZWNfYWQ=")],
                              ro: [s("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), s("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), s("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                              ruAd: [s("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), s("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), s("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                              thaiAds: ["a[href*=macau-uta-popup]", s("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), s("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                              webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", s("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                          },
                          n = Object.keys(e),
                          [4, J((a = []).concat.apply(a, n.map((function(t) {
                              return e[t]
                          }
                          ))))]) : [2, void 0];
                      case 1:
                          return o = r.sent(),
                          t && function(e, t) {
                              for (var n = "DOM blockers debug:\n```", r = 0, o = Object.keys(e); r < o.length; r++) {
                                  var i = o[r];
                                  n += "\n".concat(i, ":");
                                  for (var a = 0, s = e[i]; a < s.length; a++) {
                                      var c = s[a];
                                      n += "\n  ".concat(t[c] ? "🚫" : "➡️", " ").concat(c)
                                  }
                              }
                              console.log("".concat(n, "\n```"))
                          }(e, o),
                          (i = n.filter((function(t) {
                              var n = e[t];
                              return C(n.map((function(e) {
                                  return o[e]
                              }
                              ))) > .6 * n.length
                          }
                          ))).sort(),
                          [2, i]
                      }
                      var s
                  }
                  ))
              }
              ))
          },
          fontPreferences: function() {
              return void 0 === e && (e = 4e3),
              S((function(t, n) {
                  var o = n.document
                    , i = o.body
                    , a = i.style;
                  a.width = "".concat(e, "px"),
                  a.webkitTextSizeAdjust = a.textSizeAdjust = "none",
                  L() ? i.style.zoom = "".concat(1 / n.devicePixelRatio) : M() && (i.style.zoom = "reset");
                  var s = o.createElement("div");
                  return s.textContent = (0,
                  r.fX)([], Array(e / 20 | 0), !0).map((function() {
                      return "word"
                  }
                  )).join(" "),
                  i.appendChild(s),
                  function(e, t) {
                      for (var n = {}, r = {}, o = 0, i = Object.keys(X); o < i.length; o++) {
                          var a = i[o]
                            , s = X[a]
                            , c = s[0]
                            , l = void 0 === c ? {} : c
                            , u = s[1]
                            , d = void 0 === u ? "mmMwWLliI0fiflO&1" : u
                            , f = e.createElement("span");
                          f.textContent = d,
                          f.style.whiteSpace = "nowrap";
                          for (var h = 0, m = Object.keys(l); h < m.length; h++) {
                              var p = m[h]
                                , g = l[p];
                              void 0 !== g && (f.style[p] = g)
                          }
                          n[a] = f,
                          t.appendChild(e.createElement("br")),
                          t.appendChild(f)
                      }
                      for (var v = 0, y = Object.keys(X); v < y.length; v++)
                          r[a = y[v]] = n[a].getBoundingClientRect().width;
                      return r
                  }(o, i)
              }
              ), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
              var e
          },
          audio: function() {
              var e = window
                , t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
              if (!t)
                  return -2;
              if (M() && !B() && !function() {
                  var e = window;
                  return C(["DOMRectList"in e, "RTCPeerConnectionIceEvent"in e, "SVGGeometryElement"in e, "ontransitioncancel"in e]) >= 3
              }())
                  return -1;
              var n = new t(1,5e3,44100)
                , r = n.createOscillator();
              r.type = "triangle",
              r.frequency.value = 1e4;
              var o = n.createDynamicsCompressor();
              o.threshold.value = -50,
              o.knee.value = 40,
              o.ratio.value = 12,
              o.attack.value = 0,
              o.release.value = .25,
              r.connect(o),
              o.connect(n.destination),
              r.start(0);
              var i = function(e) {
                  var t = function() {};
                  return [new Promise((function(n, r) {
                      var o = !1
                        , i = 0
                        , s = 0;
                      e.oncomplete = function(e) {
                          return n(e.renderedBuffer)
                      }
                      ;
                      var c = function() {
                          setTimeout((function() {
                              return r(_("timeout"))
                          }
                          ), Math.min(500, s + 5e3 - Date.now()))
                      }
                        , u = function() {
                          try {
                              var t = e.startRendering();
                              switch (a(t) && l(t),
                              e.state) {
                              case "running":
                                  s = Date.now(),
                                  o && c();
                                  break;
                              case "suspended":
                                  document.hidden || i++,
                                  o && i >= 3 ? r(_("suspended")) : setTimeout(u, 500)
                              }
                          } catch (e) {
                              r(e)
                          }
                      };
                      u(),
                      t = function() {
                          o || (o = !0,
                          s > 0 && c())
                      }
                  }
                  )), t]
              }(n)
                , s = i[0]
                , c = i[1]
                , u = s.then((function(e) {
                  return function(e) {
                      for (var t = 0, n = 0; n < e.length; ++n)
                          t += Math.abs(e[n]);
                      return t
                  }(e.getChannelData(0).subarray(4500))
              }
              ), (function(e) {
                  if ("timeout" === e.name || "suspended" === e.name)
                      return -3;
                  throw e
              }
              ));
              return l(u),
              function() {
                  return c(),
                  u
              }
          },
          screenFrame: function() {
              var e = this
                , t = function() {
                  var e = this;
                  return function() {
                      if (void 0 === x) {
                          var e = function() {
                              var t = P();
                              O(t) ? x = setTimeout(e, 2500) : (R = t,
                              x = void 0)
                          };
                          e()
                      }
                  }(),
                  function() {
                      return (0,
                      r.sH)(e, void 0, void 0, (function() {
                          var e;
                          return (0,
                          r.YH)(this, (function(t) {
                              switch (t.label) {
                              case 0:
                                  return O(e = P()) ? R ? [2, (0,
                                  r.fX)([], R, !0)] : (n = document).fullscreenElement || n.msFullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement ? [4, k()] : [3, 2] : [3, 2];
                              case 1:
                                  t.sent(),
                                  e = P(),
                                  t.label = 2;
                              case 2:
                                  return O(e) || (R = e),
                                  [2, e]
                              }
                              var n
                          }
                          ))
                      }
                      ))
                  }
              }();
              return function() {
                  return (0,
                  r.sH)(e, void 0, void 0, (function() {
                      var e, n;
                      return (0,
                      r.YH)(this, (function(r) {
                          switch (r.label) {
                          case 0:
                              return [4, t()];
                          case 1:
                              return e = r.sent(),
                              [2, [(n = function(e) {
                                  return null === e ? null : w(e, 10)
                              }
                              )(e[0]), n(e[1]), n(e[2]), n(e[3])]]
                          }
                      }
                      ))
                  }
                  ))
              }
          },
          osCpu: function() {
              return navigator.oscpu
          },
          languages: function() {
              var e, t = navigator, n = [], r = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
              if (void 0 !== r && n.push([r]),
              Array.isArray(t.languages))
                  L() && C([!("MediaSettingsRange"in (e = window)), "RTCEncodedAudioFrame"in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || n.push(t.languages);
              else if ("string" == typeof t.languages) {
                  var o = t.languages;
                  o && n.push(o.split(","))
              }
              return n
          },
          colorDepth: function() {
              return window.screen.colorDepth
          },
          deviceMemory: function() {
              return b(y(navigator.deviceMemory), void 0)
          },
          screenResolution: function() {
              var e = screen
                , t = function(e) {
                  return b(v(e), null)
              }
                , n = [t(e.width), t(e.height)];
              return n.sort().reverse(),
              n
          },
          hardwareConcurrency: function() {
              return b(v(navigator.hardwareConcurrency), void 0)
          },
          timezone: function() {
              var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
              if (t) {
                  var n = (new t).resolvedOptions().timeZone;
                  if (n)
                      return n
              }
              var r, o = (r = (new Date).getFullYear(),
              -Math.max(y(new Date(r,0,1).getTimezoneOffset()), y(new Date(r,6,1).getTimezoneOffset())));
              return "UTC".concat(o >= 0 ? "+" : "").concat(Math.abs(o))
          },
          sessionStorage: function() {
              try {
                  return !!window.sessionStorage
              } catch (e) {
                  return !0
              }
          },
          localStorage: function() {
              try {
                  return !!window.localStorage
              } catch (e) {
                  return !0
              }
          },
          indexedDB: function() {
              var e, t;
              if (!(F() || (e = window,
              t = navigator,
              C(["msWriteProfilerMark"in e, "MSStream"in e, "msLaunchUri"in t, "msSaveBlob"in t]) >= 3 && !F())))
                  try {
                      return !!window.indexedDB
                  } catch (e) {
                      return !0
                  }
          },
          openDatabase: function() {
              return !!window.openDatabase
          },
          cpuClass: function() {
              return navigator.cpuClass
          },
          platform: function() {
              var e = navigator.platform;
              return "MacIntel" === e && M() && !B() ? function() {
                  if ("iPad" === navigator.platform)
                      return !0;
                  var e = screen
                    , t = e.width / e.height;
                  return C(["MediaSource"in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
              }() ? "iPad" : "iPhone" : e
          },
          plugins: function() {
              var e = navigator.plugins;
              if (e) {
                  for (var t = [], n = 0; n < e.length; ++n) {
                      var r = e[n];
                      if (r) {
                          for (var o = [], i = 0; i < r.length; ++i) {
                              var a = r[i];
                              o.push({
                                  type: a.type,
                                  suffixes: a.suffixes
                              })
                          }
                          t.push({
                              name: r.name,
                              description: r.description,
                              mimeTypes: o
                          })
                      }
                  }
                  return t
              }
          },
          canvas: function() {
              var e, t, n = !1, r = function() {
                  var e = document.createElement("canvas");
                  return e.width = 1,
                  e.height = 1,
                  [e, e.getContext("2d")]
              }(), o = r[0], i = r[1];
              if (function(e, t) {
                  return !(!t || !e.toDataURL)
              }(o, i)) {
                  n = function(e) {
                      return e.rect(0, 0, 10, 10),
                      e.rect(2, 2, 6, 6),
                      !e.isPointInPath(5, 5, "evenodd")
                  }(i),
                  function(e, t) {
                      e.width = 240,
                      e.height = 60,
                      t.textBaseline = "alphabetic",
                      t.fillStyle = "#f60",
                      t.fillRect(100, 1, 62, 20),
                      t.fillStyle = "#069",
                      t.font = '11pt "Times New Roman"';
                      var n = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                      t.fillText(n, 2, 15),
                      t.fillStyle = "rgba(102, 204, 0, 0.2)",
                      t.font = "18pt Arial",
                      t.fillText(n, 4, 45)
                  }(o, i);
                  var a = H(o);
                  a !== H(o) ? e = t = "unstable" : (t = a,
                  function(e, t) {
                      e.width = 122,
                      e.height = 110,
                      t.globalCompositeOperation = "multiply";
                      for (var n = 0, r = [["#f2f", 40, 40], ["#2ff", 80, 40], ["#ff2", 60, 80]]; n < r.length; n++) {
                          var o = r[n]
                            , i = o[0]
                            , a = o[1]
                            , s = o[2];
                          t.fillStyle = i,
                          t.beginPath(),
                          t.arc(a, s, 40, 0, 2 * Math.PI, !0),
                          t.closePath(),
                          t.fill()
                      }
                      t.fillStyle = "#f9c",
                      t.arc(60, 60, 60, 0, 2 * Math.PI, !0),
                      t.arc(60, 60, 20, 0, 2 * Math.PI, !0),
                      t.fill("evenodd")
                  }(o, i),
                  e = H(o))
              } else
                  e = t = "";
              return {
                  winding: n,
                  geometry: e,
                  text: t
              }
          },
          touchSupport: function() {
              var e, t = navigator, n = 0;
              void 0 !== t.maxTouchPoints ? n = v(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints && (n = t.msMaxTouchPoints);
              try {
                  document.createEvent("TouchEvent"),
                  e = !0
              } catch (t) {
                  e = !1
              }
              return {
                  maxTouchPoints: n,
                  touchEvent: e,
                  touchStart: "ontouchstart"in window
              }
          },
          vendor: function() {
              return navigator.vendor || ""
          },
          vendorFlavors: function() {
              for (var e = [], t = 0, n = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < n.length; t++) {
                  var r = n[t]
                    , o = window[r];
                  o && "object" == typeof o && e.push(r)
              }
              return e.sort()
          },
          cookiesEnabled: function() {
              var e = document;
              try {
                  e.cookie = "cookietest=1; SameSite=Strict;";
                  var t = -1 !== e.cookie.indexOf("cookietest=");
                  return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",
                  t
              } catch (e) {
                  return !1
              }
          },
          colorGamut: function() {
              for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
                  var n = t[e];
                  if (matchMedia("(color-gamut: ".concat(n, ")")).matches)
                      return n
              }
          },
          invertedColors: function() {
              return !!z("inverted") || !z("none") && void 0
          },
          forcedColors: function() {
              return !!K("active") || !K("none") && void 0
          },
          monochrome: function() {
              if (matchMedia("(min-monochrome: 0)").matches) {
                  for (var e = 0; e <= 100; ++e)
                      if (matchMedia("(max-monochrome: ".concat(e, ")")).matches)
                          return e;
                  throw new Error("Too high value")
              }
          },
          contrast: function() {
              return V("no-preference") ? 0 : V("high") || V("more") ? 1 : V("low") || V("less") ? -1 : V("forced") ? 10 : void 0
          },
          reducedMotion: function() {
              return !!W("reduce") || !W("no-preference") && void 0
          },
          hdr: function() {
              return !!U("high") || !U("standard") && void 0
          },
          math: function() {
              var e = Z.acos || Y
                , t = Z.acosh || Y
                , n = Z.asin || Y
                , r = Z.asinh || Y
                , o = Z.atanh || Y
                , i = Z.atan || Y
                , a = Z.sin || Y
                , s = Z.sinh || Y
                , c = Z.cos || Y
                , l = Z.cosh || Y
                , u = Z.tan || Y
                , d = Z.tanh || Y
                , f = Z.exp || Y
                , h = Z.expm1 || Y
                , m = Z.log1p || Y;
              return {
                  acos: e(.12312423423423424),
                  acosh: t(1e308),
                  acoshPf: function(e) {
                      return Z.log(e + Z.sqrt(e * e - 1))
                  }(1e154),
                  asin: n(.12312423423423424),
                  asinh: r(1),
                  asinhPf: Z.log(1 + Z.sqrt(2)),
                  atanh: o(.5),
                  atanhPf: Z.log(3) / 2,
                  atan: i(.5),
                  sin: a(-1e300),
                  sinh: s(1),
                  sinhPf: Z.exp(1) - 1 / Z.exp(1) / 2,
                  cos: c(10.000000000123),
                  cosh: l(1),
                  coshPf: (Z.exp(1) + 1 / Z.exp(1)) / 2,
                  tan: u(-1e300),
                  tanh: d(1),
                  tanhPf: (Z.exp(2) - 1) / (Z.exp(2) + 1),
                  exp: f(1),
                  expm1: h(1),
                  expm1Pf: Z.exp(1) - 1,
                  log1p: m(10),
                  log1pPf: Z.log(11),
                  powPI: Z.pow(Z.PI, -100)
              }
          },
          videoCard: function() {
              var e, t = document.createElement("canvas"), n = null !== (e = t.getContext("webgl")) && void 0 !== e ? e : t.getContext("experimental-webgl");
              if (n && "getExtension"in n) {
                  var r = n.getExtension("WEBGL_debug_renderer_info");
                  if (r)
                      return {
                          vendor: (n.getParameter(r.UNMASKED_VENDOR_WEBGL) || "").toString(),
                          renderer: (n.getParameter(r.UNMASKED_RENDERER_WEBGL) || "").toString()
                      }
              }
          },
          pdfViewerEnabled: function() {
              return navigator.pdfViewerEnabled
          },
          architecture: function() {
              var e = new Float32Array(1)
                , t = new Uint8Array(e.buffer);
              return e[0] = 1 / 0,
              e[0] = e[0] - e[0],
              t[3]
          }
      }
        , q = "$ if upgrade to Pro: https://fpjs.dev/pro";
      function $(e) {
          return JSON.stringify(e, (function(e, t) {
              return t instanceof Error ? (n = t,
              (0,
              r.Cl)({
                  name: n.name,
                  message: n.message,
                  stack: null === (o = n.stack) || void 0 === o ? void 0 : o.split("\n")
              }, n)) : t;
              var n, o
          }
          ), 2)
      }
      function ee(e) {
          return g(function(e) {
              for (var t = "", n = 0, r = Object.keys(e).sort(); n < r.length; n++) {
                  var o = r[n]
                    , i = e[o]
                    , a = i.error ? "error" : JSON.stringify(i.value);
                  t += "".concat(t ? "|" : "").concat(o.replace(/([:|\\])/g, "\\$1"), ":").concat(a)
              }
              return t
          }(e))
      }
      function te(e) {
          return void 0 === e && (e = 50),
          function(e, t) {
              void 0 === t && (t = 1 / 0);
              var n = window.requestIdleCallback;
              return n ? new Promise((function(e) {
                  return n.call(window, (function() {
                      return e()
                  }
                  ), {
                      timeout: t
                  })
              }
              )) : i(Math.min(e, t))
          }(e, 2 * e)
      }
      function ne(e, t) {
          var n = Date.now();
          return {
              get: function(i) {
                  return (0,
                  r.sH)(this, void 0, void 0, (function() {
                      var a, s, c;
                      return (0,
                      r.YH)(this, (function(r) {
                          switch (r.label) {
                          case 0:
                              return a = Date.now(),
                              [4, e()];
                          case 1:
                              return s = r.sent(),
                              c = function(e) {
                                  var t, n = function(e) {
                                      var t = function(e) {
                                          if (D())
                                              return .4;
                                          if (M())
                                              return B() ? .5 : .3;
                                          var t = e.platform.value || "";
                                          return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
                                      }(e)
                                        , n = function(e) {
                                          return w(.99 + .01 * e, 1e-4)
                                      }(t);
                                      return {
                                          score: t,
                                          comment: q.replace(/\$/g, "".concat(n))
                                      }
                                  }(e);
                                  return {
                                      get visitorId() {
                                          return void 0 === t && (t = ee(this.components)),
                                          t
                                      },
                                      set visitorId(e) {
                                          t = e
                                      },
                                      confidence: n,
                                      components: e,
                                      version: o
                                  }
                              }(s),
                              (t || (null == i ? void 0 : i.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(c.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(a - n, "\nvisitorId: ").concat(c.visitorId, "\ncomponents: ").concat($(s), "\n```")),
                              [2, c]
                          }
                      }
                      ))
                  }
                  ))
              }
          }
      }
      var re = {
          load: function(e) {
              var t = void 0 === e ? {} : e
                , n = t.delayFallback
                , i = t.debug
                , a = t.monitoring
                , s = void 0 === a || a;
              return (0,
              r.sH)(this, void 0, void 0, (function() {
                  return (0,
                  r.YH)(this, (function(e) {
                      switch (e.label) {
                      case 0:
                          return s && function() {
                              if (!(window.__fpjs_d_m || Math.random() >= .001))
                                  try {
                                      var e = new XMLHttpRequest;
                                      e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(o, "/npm-monitoring"), !0),
                                      e.send()
                                  } catch (e) {
                                      console.error(e)
                                  }
                          }(),
                          [4, te(n)];
                      case 1:
                          return e.sent(),
                          [2, ne(I(Q, {
                              debug: i
                          }, []), i)]
                      }
                  }
                  ))
              }
              ))
          },
          hashComponents: ee,
          componentsToDebugString: $
      }
        , oe = g
  }
  ,
  252097: (e, t, n) => {
      "use strict";
      n.d(t, {
          n4: () => C,
          f8: () => w
      });
      var r = n(327334)
        , o = n(465622)
        , i = n(835254)
        , a = n.n(i);
      const s = {
          AD: "va",
          AE: "sg",
          AF: "sg",
          AG: "va",
          AI: "va",
          AL: "va",
          AM: "sg",
          AO: "va",
          AQ: "va",
          AR: "va",
          AS: "ttp",
          AT: "gcp",
          AU: "sg",
          AW: "va",
          AX: "va",
          AZ: "sg",
          BA: "va",
          BB: "va",
          BD: "sg",
          BE: "gcp",
          BF: "va",
          BG: "gcp",
          BH: "sg",
          BI: "va",
          BJ: "va",
          BL: "va",
          BM: "va",
          BN: "sg",
          BO: "va",
          BQ: "va",
          BR: "va",
          BS: "va",
          BT: "sg",
          BV: "va",
          BW: "va",
          BY: "va",
          BZ: "va",
          CA: "va",
          CC: "va",
          CD: "va",
          CF: "va",
          CG: "va",
          CH: "gcp",
          CI: "va",
          CK: "sg",
          CL: "va",
          CM: "va",
          CN: "sg",
          CO: "va",
          CR: "va",
          CU: "va",
          CV: "va",
          CW: "va",
          CX: "sg",
          CY: "gcp",
          CZ: "gcp",
          DE: "gcp",
          DJ: "va",
          DK: "gcp",
          DM: "va",
          DO: "va",
          DZ: "va",
          EC: "va",
          EE: "gcp",
          EG: "sg",
          EH: "va",
          ER: "va",
          ES: "gcp",
          ET: "va",
          FI: "gcp",
          FJ: "sg",
          FK: "va",
          FM: "sg",
          FO: "va",
          FR: "gcp",
          GA: "va",
          GB: "gcp",
          GD: "va",
          GE: "sg",
          GF: "gcp",
          GG: "va",
          GH: "va",
          GI: "va",
          GL: "va",
          GM: "va",
          GN: "va",
          GP: "gcp",
          GQ: "va",
          GR: "gcp",
          GS: "va",
          GT: "va",
          GU: "ttp",
          GW: "va",
          GY: "va",
          HK: "sg",
          HM: "va",
          HN: "va",
          HR: "gcp",
          HT: "va",
          HU: "gcp",
          ID: "va",
          IE: "gcp",
          IL: "sg",
          IM: "va",
          IN: "sg",
          IO: "va",
          IQ: "sg",
          IR: "sg",
          IS: "gcp",
          IT: "gcp",
          JE: "va",
          JM: "va",
          JO: "sg",
          JP: "sg",
          KE: "va",
          KG: "sg",
          KH: "sg",
          KI: "sg",
          KM: "va",
          KN: "va",
          KP: "sg",
          KR: "sg",
          KW: "sg",
          KY: "va",
          KZ: "va",
          LA: "sg",
          LB: "sg",
          LC: "va",
          LI: "gcp",
          LK: "sg",
          LR: "va",
          LS: "va",
          LT: "gcp",
          LU: "gcp",
          LV: "gcp",
          LY: "va",
          MA: "va",
          MC: "va",
          MD: "va",
          ME: "va",
          MF: "gcp",
          MG: "va",
          MH: "sg",
          MK: "va",
          ML: "va",
          MM: "sg",
          MN: "sg",
          MO: "sg",
          MP: "ttp",
          MQ: "gcp",
          MR: "va",
          MS: "va",
          MT: "gcp",
          MU: "va",
          MV: "sg",
          MW: "va",
          MX: "va",
          MY: "sg",
          MZ: "va",
          NA: "va",
          NC: "sg",
          NE: "va",
          NF: "sg",
          NG: "va",
          NI: "va",
          NL: "ie",
          NO: "gcp",
          NP: "sg",
          NR: "sg",
          NU: "sg",
          NZ: "sg",
          OM: "sg",
          PA: "va",
          PE: "va",
          PF: "sg",
          PG: "sg",
          PH: "va",
          PK: "va",
          PL: "gcp",
          PM: "va",
          PN: "sg",
          PR: "ttp",
          PS: "sg",
          PT: "gcp",
          PW: "sg",
          PY: "va",
          QA: "sg",
          RE: "gcp",
          RO: "gcp",
          RS: "va",
          RU: "sg",
          RW: "va",
          SA: "sg",
          SB: "sg",
          SC: "va",
          SD: "va",
          SE: "gcp",
          SG: "sg",
          SH: "va",
          SI: "gcp",
          SJ: "va",
          SK: "gcp",
          SL: "va",
          SM: "va",
          SN: "va",
          SO: "va",
          SR: "va",
          SS: "va",
          ST: "va",
          SV: "va",
          SX: "va",
          SY: "sg",
          SZ: "va",
          TC: "va",
          TD: "va",
          TF: "va",
          TG: "va",
          TH: "sg",
          TJ: "sg",
          TK: "sg",
          TL: "sg",
          TM: "sg",
          TN: "va",
          TO: "sg",
          TR: "va",
          TT: "va",
          TV: "sg",
          TW: "va",
          TZ: "va",
          UA: "va",
          UG: "va",
          UM: "ttp",
          US: "ttp",
          UY: "va",
          UZ: "sg",
          VA: "va",
          VC: "va",
          VE: "va",
          VG: "va",
          VI: "ttp",
          VN: "sg",
          VU: "sg",
          WF: "sg",
          WS: "sg",
          XK: "va",
          YE: "sg",
          YT: "gcp",
          ZA: "va",
          ZM: "va",
          ZW: "va"
      }
        , c = (new Set(Object.values({
          ar: "ar",
          bg: "bg-BG",
          "bn-IN": "bn-IN",
          ca: "ca",
          ceb: "ceb",
          cs: "cs-CZ",
          da: "da-DK",
          de: "de-DE",
          el: "el-GR",
          en: "en",
          "en-GB": "en-GB",
          es: "es",
          et: "et-EE",
          fi: "fi",
          fil: "fil",
          fr: "fr",
          "fr-CA": "fr-CA",
          ga: "ga",
          gu: "gu-IN",
          he: "he-IL",
          hi: "hi-IN",
          hr: "hr-HR",
          hu: "hu-HU",
          id: "id-ID",
          is: "is",
          it: "it-IT",
          ja: "ja-JP",
          kk: "kk",
          km: "km",
          kn: "kn-IN",
          ko: "ko-KR",
          lt: "lt-LT",
          lv: "lv-LV",
          ml: "ml-IN",
          mr: "mr-IN",
          ms: "ms-MY",
          mt: "mt",
          my: "my-MM",
          nb: "nb-NO",
          nl: "nl",
          or: "or-IN",
          pa: "pa-IN",
          pl: "pl-PL",
          pt: "pt",
          "pt-BR": "pt-BR",
          ro: "ro-RO",
          ru: "ru-RU",
          sk: "sk-SK",
          sl: "sl",
          sq: "sq",
          sv: "sv-SE",
          ta: "ta-IN",
          te: "te-IN",
          th: "th",
          tl: "tl",
          tr: "tr-TR",
          uk: "uk",
          ur: "ur",
          uz: "uz",
          vi: "vi-VN",
          "zh-Hans": "zh-Hans",
          "zh-Hant": "zh-Hant-TW",
          jv: "jv"
      })),
      ( () => {
          const e = new Map;
          return [["ar", "ar-ae", "ar-bh", "ar-dz", "ar-eg", "ar-iq", "ar-jo", "ar-kw", "ar-lb", "ar-ly", "ar-ma", "ar-mena", "ar-om", "ar-qa", "ar-sa", "ar-sy", "ar-tn", "ar-ye"], ["bg", "bg-BG"], ["bn-IN", "bn", "bn-in", "bn-BD"], ["ca"], ["ceb", "ceb-ph", "ceb-PH"], ["cs", "cs-CZ", "cs_CZ"], ["da", "da-DK"], ["de", "de-DE", "de-at", "de-ch", "de-de", "de-li", "de-lu"], ["el", "el-GR", "el_GR"], ["en", "en-US", "en-AU", "en-CA", "en-ZA", "en-NZ", "en-SG"], ["en-GB"], ["es", "es-es", "es-ES", "es-xl", "es-latam"], ["et", "et-EE", "et-ET"], ["fi", "fi-FI", "fi-fi", "fi-FL"], ["fil", "fil-PH", "fil-ph"], ["fr", "fr-fr", "fr-be", "fr-ch", "fr-lu", "fr-mc"], ["fr-CA"], ["ga"], ["gu", "gu-IN", "gu_IN"], ["he", "he-IL", "he_IL", "he-il"], ["hi", "hi-IN", "hi_IN"], ["hr", "hr-HR"], ["hu", "hu-HU", "hu_HU"], ["id", "id-ID", "in", "in-id", "id-id"], ["is"], ["it", "it-IT", "it_IT", "it-ch"], ["ja", "ja-JP", "ja-jp", "ja-jpan"], ["jv", "jv-ID", "jv-jv"], ["kk"], ["km", "km-KH"], ["kn", "kn-IN"], ["ko", "ko-KR", "ko-kore", "ko-kr"], ["lo", "lo-LA"], ["lt", "lt-LT"], ["lv", "lv-LV"], ["ml", "ml-IN", "ml_in"], ["mr", "mr-IN"], ["ms", "ms-MY", "ms_MY", "ms-bn", "ms-my"], ["mt"], ["my", "my-MM", "my", "my-mm"], ["nb", "nb-NO", "nb-SJ", "nn"], ["nl", "nl-be", "nl-NL"], ["or", "or-IN"], ["pa", "pa-IN"], ["pl", "pl-PL", "pl-pl"], ["pt", "pt-pt", "pu"], ["pt-BR", "pt-br", "pt_BR"], ["ro", "ro-RO", "ro_RO", "ro-ro"], ["ru", "ru-RU", "ru_RU", "ru-kz", "ru-ru", "ru-KZ"], ["sk", "sk-SK"], ["sl"], ["sq"], ["sv", "sv-SE", "sv_SE", "sv-se"], ["ta", "ta-IN"], ["te", "te-IN"], ["th", "th-TH"], ["tl", "tl-ph", "tl-PH"], ["tr", "tr-TR", "tr-tr"], ["uk", "uk-UA", "uk-ua"], ["ur", "ur-IN", "ur-PK"], ["uz"], ["vi", "vi-VN", "vi-vn"], ["zh-Hans"], ["zh-Hant", "zh_Hant", "zh_Hant_TW", "zh-hant-tw", "zh_TW", "zh-tw", "zh-hk"]].forEach((t => {
              if (Array.isArray(t) && t.length >= 1) {
                  const n = t[0];
                  t.forEach((t => {
                      e.set(t.toLocaleLowerCase(), n)
                  }
                  ))
              }
          }
          )),
          e
      }
      )());
      function l(e, t, n, r, o, i, a) {
          try {
              var s = e[i](a)
                , c = s.value
          } catch (e) {
              return void n(e)
          }
          s.done ? t(c) : Promise.resolve(c).then(r, o)
      }
      function u(e) {
          return function() {
              var t = this
                , n = arguments;
              return new Promise((function(r, o) {
                  var i = e.apply(t, n);
                  function a(e) {
                      l(i, r, o, a, s, "next", e)
                  }
                  function s(e) {
                      l(i, r, o, a, s, "throw", e)
                  }
                  a(void 0)
              }
              ))
          }
      }
      const d = (f = u((function*(e, t) {
          if ("undefined" != typeof window && "function" == typeof window.fetch) {
              const n = yield fetch(e, t);
              if (!n.ok)
                  throw new Error(`HTTP error! status: ${n.status}`);
              return n.json()
          }
          return (yield a()({
              url: e,
              method: t.method,
              headers: t.headers,
              data: t.body
          })).data
      }
      )),
      function(e, t) {
          return f.apply(this, arguments)
      }
      );
      var f;
      const h = function() {
          var e = u((function*({slug: e, locale: t, preview: n, pageName: r, countryCode: o, showLangSelector: i, langCodeList: a}) {
              try {
                  const u = (e => {
                      const t = (null == e ? void 0 : e.trim().toLowerCase()) || "en";
                      return c.get(t) || "en"
                  }
                  )(t)
                    , f = (e => {
                      if (!e)
                          return "US";
                      const t = e.trim().toUpperCase() || "";
                      return t in s ? t : "US"
                  }
                  )(o)
                    , h = (l = a) && 0 !== l.length ? l.filter((e => "" !== e.trim())).map((e => c.get(e.trim().toLowerCase()))).filter((e => !!e)).reduce(( (e, t) => (e.includes(t) || e.push(t),
                  e)), []) : []
                    , m = "https://www.tiktok.com/api/global-footer"
                    , p = JSON.stringify({
                      query: '\n  query GetFooterLangReference($preview: Boolean) {\n    countryListReference(slug: "country-region-mapping-all", preview: $preview) {\n      countryList\n    }\n    languagesListReference(slug: "privacy-center-list", preview: $preview) {\n      languagesList\n    }\n  }\n',
                      variables: {
                          preview: n || !1
                      }
                  });
                  let g;
                  try {
                      g = yield d(`${m}/graphql`, {
                          method: "POST",
                          headers: {
                              "Content-Type": "application/json"
                          },
                          body: p,
                          redirect: "follow"
                      })
                  } catch (e) {
                      throw console.log("Client side, headlessX graphql data fetching failed for reference tables:", e),
                      new Error(`In fetchFooterDataClient, Failed to fetch reference table data on client, error: ${e}`)
                  }
                  const v = g
                    , y = null == e ? void 0 : e.trim().toLowerCase()
                    , b = y || (r ? `footer-${r}-${!0 === i ? "lang" : "no-lang"}` : void 0) || (!0 === i ? "footer-lang" : "footer-no-lang")
                    , C = u || "en"
                    , w = JSON.stringify({
                      query: "\n  query GetFooterContent($slug: ID!, $locale: String, $preview: Boolean) {\n    footer(slug: $slug, locale: $locale, preview: $preview) {\n      logo {\n        ... on Logo {\n          logoCta\n          shouldShowLogo\n          logo {\n            description\n            name\n            urls {\n              boei18n\n              gcp\n              ie\n              sg\n              ttp\n              ttp2\n              va\n            }\n          }\n        }\n      }\n      navigation {\n        ... on NavSection {\n          navTitle\n          navTitleFontWeight\n          navTitleFontColor\n          navTitleFontSize\n          shouldShowOnMobile\n          mobileNavTitle\n          navTabs {\n            ... on Link {\n              id\n              fontColor\n              fontSize\n              fontWeight\n              mobileTitle\n              mobileUrl\n              openNewTab\n              shouldShowOnMobile\n              shortTitle\n              includeByRegion\n              excludeByRegion\n              image {\n                description\n                name\n                urls {\n                  boei18n\n                  gcp\n                  ie\n                  sg\n                  ttp\n                  ttp2\n                  va\n                }\n              }\n              title\n              url\n            }\n          }\n        }\n      }\n      languageSelector {\n        ... on LanguageSelector {\n          shouldShow\n          showFullName\n          showLanguageCode\n        }\n      }\n      sys {\n        publishedLanguages\n      }\n    }\n  }\n",
                      variables: {
                          slug: b,
                          locale: C,
                          preview: n || !1
                      }
                  });
                  let A, I;
                  try {
                      A = yield d(`${m}/graphql`, {
                          method: "POST",
                          headers: {
                              "Content-Type": "application/json"
                          },
                          body: w,
                          redirect: "follow"
                      }),
                      I = yield A
                  } catch (e) {
                      throw console.log("Client side, headlessX graphql data fetching failed for footer content:", e),
                      new Error(`In fetchFooterDataClient, Failed to fetch footer data on client, error: ${e}`)
                  }
                  const F = I.data.footer.sys.publishedLanguages
                    , L = v.data.languagesListReference.languagesList
                    , M = ( (e, t, n) => {
                      let r = [];
                      r = e && 0 !== e.length ? e : n;
                      const o = {};
                      return r.forEach((e => {
                          if (e in t) {
                              const n = t[e];
                              o[e] = {
                                  languageCode: n.languageCode,
                                  fullName: n.fullName,
                                  isRTL: n.isRTL
                              }
                          }
                      }
                      )),
                      o
                  }
                  )(h, JSON.parse(L), F)
                    , B = Object.values(M).find((e => e.languageCode === C)) || {
                      languageCode: "en",
                      fullName: "English",
                      isRTL: !1
                  }
                    , k = ( (e, t) => {
                      for (const n of e) {
                          const e = n.navTabs || [];
                          n.navTabs = e.filter((e => {
                              const n = e.includeByRegion || []
                                , r = e.excludeByRegion || [];
                              return (0 === n.length || n.includes(t)) && !r.includes(t)
                          }
                          ))
                      }
                      return e
                  }
                  )(I.data.footer.navigation, f);
                  return I.data.footer.navigation = k,
                  I.data.footer.populatedLanguages = M,
                  I.data.footer.idc = s[f],
                  I.data.footer.defaultLanguage = B,
                  I.data.footer
              } catch (e) {
                  return console.log("fetchFooterData client error:", e),
                  {}
              }
              var l
          }
          ));
          return function(t) {
              return e.apply(this, arguments)
          }
      }()
        , m = (0,
      o.createContext)(void 0);
      var p = n(115829);
      function g(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      function v(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }
              )))),
              r.forEach((function(t) {
                  g(e, t, n[t])
              }
              ))
          }
          return e
      }
      const y = {
          channel: "sg",
          channel_type: "tcpy"
      }
        , b = {
          isInitialized: !1,
          init() {
              p.default.init(v({
                  app_id: 1988,
                  log: !1
              }, y)),
              p.default.start(),
              this.isInitialized = !0
          },
          teaReport(e, t={}) {
              p.default.event(e, v({
                  host: location.host,
                  user_agent: navigator.userAgent,
                  referrer: document.referrer
              }, t))
          }
      }
        , C = ({slug: e, locale: t, preview: n, pageName: i, countryCode: a, showLangSelector: s, langCodeList: c, initialState: l, children: u}) => {
          const d = (0,
          o.useRef)(!1)
            , [f,p] = (0,
          o.useState)(null != l ? l : {});
          return (0,
          o.useEffect)(( () => {
              b.isInitialized || b.init(),
              b.teaReport("show_footer_view", {
                  page_name: location.href,
                  enter_from: location.href,
                  lang: t,
                  country_code: a
              }),
              "undefined" != typeof window && (d.current || f && Object.keys(f).length > 0 && f.navigation && Object.keys(f.navigation).length > 0 || (d.current = !0,
              h({
                  slug: e,
                  locale: t,
                  preview: n,
                  pageName: i,
                  countryCode: a,
                  showLangSelector: s,
                  langCodeList: c
              }).then((e => {
                  p(e)
              }
              )).catch((e => {
                  console.log("In FooterDataProvider, inside useEffect, fetch error:", e)
              }
              ))))
          }
          ), [e, t, n, i, a, c]),
          (0,
          r.jsx)(m.Provider, {
              value: f,
              children: u
          })
      }
        , w = () => {
          const e = (0,
          o.useContext)(m);
          if (void 0 === e)
              throw new Error("useFooter must be used within a FooterDataProvider");
          return e
      }
      ;
      var A, I, F, L;
      (I = A || (A = {})).Black = "black",
      I.White = "white",
      (L = F || (F = {})).None = "none",
      L.Mobile = "mobile",
      L.Tablet = "tablet",
      n.p,
      n.p
  }
  ,
  281591: (e, t, n) => {
      "use strict";
      n.d(t, {
          Qn: () => r,
          tz: () => o
      });
      const r = {
          row: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/slardar/fe/sdk-web/browser.sg.js",
          eu: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/slardar/fe/sdk-web/browser.sg.js",
          us: "https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/slardar/fe/sdk-web/browser.oci.js"
      }
        , o = {
          row: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/slardar/fe/sdk-web/plugins",
          eu: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/slardar/fe/sdk-web/plugins",
          us: "https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/slardar/fe/sdk-web/plugins"
      }
  }
  ,
  747950: (e, t, n) => {
      "use strict";
      var r, o;
      n.d(t, {
          O: () => Ie
      }),
      (o = r || (r = {})).OnConnect = "onConnect",
      o.OnInit = "onInit",
      o.OnCreate = "onCreate",
      o.OnBeforeInit = "onBeforeInit";
      const i = {}
        , a = () => {}
      ;
      class s {
          create(e) {
              const t = new s(e)
                , n = this._instance.create(t._prefix);
              return t._inject(n),
              t._setConfigInjector(this._configInjector),
              t._callSyncHook(this._plugins, {
                  prefix: e
              }, r.OnCreate, ( ({returnValue: e}) => {
                  t._plugins.push(e)
              }
              )),
              t._callSyncHook(t._plugins, t._extends, r.OnConnect),
              t
          }
          setGlobalSlardarName(e) {
              this._instance.setGlobalSlardarName?.(e)
          }
          _inject(e) {
              this._instance = e,
              this._injected = !0
          }
          _setConfigInjector(e) {
              this._configInjector = e
          }
          assertInjected() {
              if (!this._injected)
                  throw Error("[Slardar] instance has not injected into container")
          }
          init(e) {
              const t = this._configInjector();
              this._doInit({
                  ...t,
                  ...e
              })
          }
          async _doInit(e) {
              if (this._inited)
                  return;
              this.assertInjected(),
              this._callSyncHook(this._plugins, e, r.OnBeforeInit);
              const t = this._instance;
              t.context(e.context),
              t.init(e),
              this._inited = !0,
              await this._callAsyncHook(this._plugins, e, r.OnInit),
              e.autoStart && this.start()
          }
          config(e) {
              return this._instance.config(e)
          }
          context(e) {
              this._instance.context(e)
          }
          start() {
              this._instance.start()
          }
          captureException(e, t, n) {
              this._instance.captureException(e, t, n)
          }
          sendEvent(e) {
              this._instance.sendEvent(e)
          }
          sendLog(e) {
              this._instance.sendLog(e)
          }
          sendCustomPerfMetric(e) {
              this._instance.sendCustomPerfMetric(e)
          }
          sendPageview(e) {
              return this._instance.sendPageview?.(e)
          }
          on(e, t) {
              this._instance.on(e, t)
          }
          rawInstance() {
              return this._instance.rawInstance()
          }
          use(e) {
              this._plugins.push(e),
              this._callSyncHook([e], this._extends, r.OnConnect)
          }
          _callSyncHook(e, t, n, r=a) {
              e.forEach(( (e, o) => {
                  const i = e[n];
                  if (i) {
                      const n = i.call(e, {
                          data: t,
                          container: this
                      });
                      r({
                          plugin: e,
                          index: o,
                          returnValue: n
                      })
                  }
              }
              ))
          }
          _callAsyncHook(e, t, n) {
              const r = [];
              return e.forEach((e => {
                  const o = e[n];
                  if (o) {
                      const n = o.call(e, {
                          data: t,
                          container: this
                      });
                      n && "then"in n && r.push(n)
                  }
              }
              )),
              Promise.all(r).catch((e => console.error(e)))
          }
          reportActualFMP() {
              const e = this.ttap.reportActualFMP?.();
              return this.sparkTracing?.reportActualFMP(),
              e ?? 0
          }
          reportActualLCP() {
              throw Error("not implement")
          }
          reportCustomRequest(e, t, n) {
              throw Error("not implement")
          }
          getContainerInitTotalTime() {
              throw Error("not implement")
          }
          reportFirstScreenRequest(e, t) {
              throw Error("not implement")
          }
          reportRenderStart() {
              throw Error("not implement")
          }
          reportRenderEnd() {
              throw Error("not implement")
          }
          reportRouteRenderStart() {
              throw Error("not implement")
          }
          reportRouteRenderEnd() {
              throw Error("not implement")
          }
          reportPageReady() {
              throw Error("not implement")
          }
          reportStabilityEvent(e) {
              throw Error("not implement")
          }
          reportStabilityStack(e) {
              throw Error("not implement")
          }
          reportPageCrash(e) {
              throw Error("not implement")
          }
          constructor(e="global") {
              this._instance = i,
              this._injected = !1,
              this._plugins = [],
              this._configInjector = () => null,
              this._inited = !1,
              this._extends = (e, t) => {
                  this[e] = t
              }
              ,
              this.ttap = {},
              this._prefix = e
          }
      }
      const c = {};
      function l(e) {
          return window[e]
      }
      class u {
          setGlobalSlardarName(e) {
              this._globalSlardarName = e,
              this._onSlardarLoaded()
          }
          _onSlardarLoaded() {
              if (!this._createNew)
                  return;
              const {loaded: e, initPromise: t, instanceGetter: n} = function(e) {
                  const t = c[e] || function(e) {
                      let t = "function" == typeof window[e].create;
                      const n = t ? Promise.resolve(!0) : new Promise((n => {
                          window[e]("on", "init", ( () => {
                              t = !0,
                              n(!0)
                          }
                          ))
                      }
                      ));
                      return {
                          slardarName: e,
                          loaded: t,
                          initPromise: n,
                          instanceGetter: l.bind(null, e)
                      }
                  }(e);
                  return c[e] = t,
                  t
              }(this._globalSlardarName);
              if (e) {
                  const e = n().create();
                  return void (this._instanceGetter = () => e)
              }
              const r = function() {
                  const e = []
                    , t = function(...n) {
                      t.mock ? e.push(n) : (Object.setPrototypeOf(t, t.slardar),
                      t.slardar(...n))
                  };
                  return t.flush = function(n) {
                      e.forEach((e => {
                          n.apply(n, e)
                      }
                      )),
                      t.mock = !1,
                      t.slardar = n
                  }
                  ,
                  t.mock = !0,
                  t
              }();
              this._instanceGetter = () => r,
              t.then(( () => {
                  const e = n().create();
                  this._instanceGetter().flush(e),
                  this._instanceGetter = () => e
              }
              )).catch(( () => {}
              ))
          }
          get _instance() {
              return this._instanceGetter()
          }
          rawInstance() {
              return this._instance
          }
          init(e) {
              return this._instance("init", e)
          }
          config(e) {
              return this._instance("config", e)
          }
          start() {
              return this._instance("start")
          }
          context(e) {
              if (!e)
                  return;
              const t = this._instance;
              let n = 0;
              Object.keys(e).forEach((r => {
                  void 0 === e[r] || null === e[r] ? t("context.delete", r) : (t("context.set", r, e[r]),
                  n++)
              }
              )),
              n > 40 && setTimeout(( () => {
                  const e = Error(`Exceed slardar context maximum count 40. The number of your slardar context is ${n}, slardar will drop all your events.`);
                  throw console.error(e),
                  e
              }
              ), 20)
          }
          sendPageview(e) {
              return this._instance("sendPageview", e)
          }
          captureException(e, t, n) {
              this._instance("captureException", e, t, n)
          }
          sendEvent(e) {
              this._instance("sendEvent", e)
          }
          sendLog(e) {
              this._instance("sendLog", e)
          }
          sendCustomPerfMetric(e) {
              this._instance("sendCustomPerfMetric", e)
          }
          on(e, t) {
              return this._instance("on", e, t)
          }
          create(e="") {
              const t = new u(e);
              return t.setGlobalSlardarName(this._globalSlardarName),
              t
          }
          constructor(e="") {
              this._globalSlardarName = "SlardarWeb",
              this._instanceGetter = () => window[this._globalSlardarName],
              this._createNew = Boolean(e)
          }
      }
      var d, f, h, m, p, g, v, y;
      (f = d || (d = {})).TLB_ERROR = "tlb error",
      f.AG_BLOCK = "ag block",
      f.BIZ_CODE_NOT_ZERO = "biz code not zero",
      f.RISK_CONTROL = " risk control",
      (m = h || (h = {}))[m.OK = 200] = "OK",
      m[m.AG_BLOCK = 403] = "AG_BLOCK",
      (g = p || (p = {})).BIZ_STATUS_CODE = "biz_status_code",
      g.BIZ_CODE_HEADER = "biz_code_header",
      g.SYSTEM_ERROR_HEADER = "system_error_header",
      g.STABILITY_ABNORMAL_TYPE = "stability_abnormal_type",
      g.HAS_VERIFY_HEADER = "has_verify_header",
      (y = v || (v = {})).CONTENT_TYPE = "content-type",
      y.BIZ_CODE_HEADER = "bd-tt-error-code",
      y.SYSTEM_ERROR = "x-tt-system-error",
      y.RISK_CONTROL = "bdturing-verify";
      const b = [/mcs.*\.tiktok[vw]?\.(com|us|eu)/, "mon.tiktokv.(com|us|eu)"]
        , C = [40001, 40002, 40003, 40004, 40005, 40006, 40007, 40008, 40009, 5e4, 50001, 50002, 50003, 6e4]
        , w = e => {
          const {bizStatusCode: t, bizCodeHeader: n, systemErrorHeader: r, resBody: o, httpStatus: i, hasVerifyHeader: a, isApi: s} = e;
          return r ? "tlb error" : 403 === i && void 0 !== t && C.includes(Number(t)) ? "ag block" : a || s && [200, 403].includes(i) && (e => !(null != e && "null" !== e && "" !== e && '""' !== e))(o) ? " risk control" : void 0 !== t && ![0, "0"].includes(t) || "" !== n && ![0, "0"].includes(n) ? "biz code not zero" : void 0
      }
        , A = (e, t, n, r) => {
          const o = n.response.headers?.["bd-tt-error-code"] ?? ""
            , i = n.response.headers?.["x-tt-system-error"] ?? ""
            , a = !!n.response.headers?.["bdturing-verify"]
            , s = !!n.response.headers?.["content-type"]?.includes("application/json")
            , c = n.response.status;
          try {
              const e = "string" == typeof t ? JSON.parse(t) : t
                , r = e?.status_code ?? e?.statusCode ?? e?.code ?? e?.status
                , l = w({
                  resBody: t,
                  bizCodeHeader: o,
                  bizStatusCode: r,
                  systemErrorHeader: i,
                  httpStatus: c,
                  url: n.request.url,
                  hasVerifyHeader: a,
                  isApi: s
              });
              n.extra = {
                  biz_status_code: void 0 === r ? "undefined" : String(r),
                  ...a ? {
                      has_verify_header: String(a)
                  } : {},
                  ...o ? {
                      biz_code_header: String(o)
                  } : {},
                  ...i ? {
                      system_error_header: String(i)
                  } : {},
                  ...l ? {
                      stability_abnormal_type: String(l)
                  } : {}
              }
          } catch {
              const e = w({
                  resBody: t,
                  bizCodeHeader: o,
                  httpStatus: c,
                  systemErrorHeader: i,
                  hasVerifyHeader: a,
                  isApi: s
              });
              n.extra = {
                  ...a ? {
                      has_verify_header: String(a)
                  } : {},
                  ...e ? {
                      stability_abnormal_type: String(e)
                  } : {},
                  ...o ? {
                      biz_code_header: String(o)
                  } : {},
                  ...i ? {
                      system_error_header: String(i)
                  } : {}
              }
          }
          if (e) {
              const o = Object.values(p)
                , i = {
                  set(e, t, n) {
                      if (o.includes(t))
                          throw new Error(`[solution-slardar-reliability]: extra field '${t}' is frozen, you can report by other field name.`);
                      return e[t] = n,
                      !0
                  }
              };
              n.extra = new Proxy(n.extra,i);
              const a = new Proxy(n,{
                  set(e, t, n) {
                      if ("extra" === t)
                          throw new Error('[solution-slardar-reliability]: cannot assign payload.extra, you can report extra filed like "payload.extra.{fieldName} = {fieldVal}"');
                      return e[t] = n,
                      !0
                  }
              });
              try {
                  const n = e(t, a, r);
                  "[object Object]" === Object.prototype.toString.call(n) && console.error('[solution-slardar-reliability]: return object is forbidden because it will delete the default reliability fields. You can report extra filed like "payload.extra.{fieldName} = {fieldVal}" and return false')
              } catch (e) {
                  console.error(e)
              }
              n.extra = a.extra
          }
          return !1
      }
        , I = (e, t) => {
          if (void 0 === e)
              return t;
          const n = [...e]
            , r = e.map((e => e.toString()));
          return t.forEach((e => {
              r.includes(e.toString()) || n.push(e)
          }
          )),
          n
      }
      ;
      function F(e) {
          return new Promise((t => setTimeout(t, e)))
      }
      function L() {
          return /(iPhone|iPad|iPod)/i.test(window.navigator.userAgent)
      }
      function M() {
          var e;
          return (null === (e = null === performance || void 0 === performance ? void 0 : performance.timing) || void 0 === e ? void 0 : e.navigationStart) || (null === performance || void 0 === performance ? void 0 : performance.timeOrigin)
      }
      function B() {
          const e = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation")[0];
          if (e && (t = e).responseStart > 0 && t.responseStart < window.performance.now())
              return e;
          var t
      }
      class k {
          constructor() {
              this.isResolved = !1,
              this.isRejected = !1,
              this.promise = new Promise(( (e, t) => {
                  this._resolve = e,
                  this._reject = t
              }
              ))
          }
          resolve(e) {
              this.isResolved || this.isRejected || (this._resolve(e),
              this.resolvedValue = e,
              this.isResolved = !0)
          }
          reject(e) {
              this.isResolved || this.isRejected || (this._reject(e),
              this.error = e,
              this.isRejected = !0)
          }
          reset() {
              this.resolvedValue = void 0,
              this.isResolved = !1,
              this.promise = new Promise((e => {
                  this._resolve = e
              }
              ))
          }
      }
      function D(e, t) {
          var n, r;
          return "undefined" != typeof window && (null === (r = null === (n = window.__VOM_GLOBAL_TIMING_STORE_KEY) || void 0 === n ? void 0 : n[e]) || void 0 === r ? void 0 : r[t]) || 0
      }
      class _ extends Error {
          constructor() {
              super("detect cancel")
          }
      }
      class S {
          constructor(e, {registerTimeout: t=300, detectTimeout: n=3e4, isSpa: r=!0}={}) {
              this._deferred = new k,
              this._teardownList = [],
              this._onReportActualFMP = e,
              this._options = {
                  isSpa: r,
                  registerTimeout: t,
                  detectTimeout: n
              }
          }
          async preRegister(e) {
              const t = e => {
                  e instanceof _ ? console.debug("detect canceled") : console.error("error", e)
              }
              ;
              this._options.isSpa && e.slardar.on("beforeConfig", (n => {
                  const r = performance.now();
                  n.pid && n.pid !== e.slardar.getState().pid && (this._deferred.reject(new _),
                  this._deferred = new k,
                  this._deferred.promise.then((t => {
                      const {fmp: n, elements: o} = t
                        , i = (n < r ? performance.now() : n) - r;
                      e.slardar.callClient("sendCustomPerfMetric", {
                          name: "ttap_spa_load",
                          value: i
                      }),
                      console.debug("ttap_spa_load", i, null == o ? void 0 : o[0])
                  }
                  )).catch(t).finally(( () => {
                      this._teardown()
                  }
                  )),
                  setTimeout(( () => {
                      this._detect()
                  }
                  )))
              }
              ));
              const n = this._deferred.promise.then((e => {
                  const {fmp: t, elements: n} = e;
                  this._onReportActualFMP(t, n),
                  console.debug("fmp", t, null == n ? void 0 : n[0])
              }
              )).catch(t).finally(( () => {
                  this._teardown()
              }
              ));
              if (this._detect(!0))
                  return n
          }
          _detect(e=!1) {
              try {
                  const t = Array.from(document.body.querySelectorAll("[data-fmp]"));
                  if (t.length > 0) {
                      const {completedImages: n, incompleteImages: r, others: o} = this._classify(t);
                      if (o.length > 0)
                          return e ? (this._setTimeout(this._options.registerTimeout),
                          this._detectFCP(o),
                          !0) : (this._deferred.resolve({
                              fmp: performance.now(),
                              elements: o
                          }),
                          !1);
                      if (n.length > 0)
                          return e ? (this._setTimeout(this._options.registerTimeout),
                          this._detectResponseEndTime(n),
                          !0) : (this._deferred.resolve({
                              fmp: performance.now(),
                              elements: n.map((e => e.element))
                          }),
                          !1);
                      if (r.length > 0)
                          return this._setTimeout(this._options.detectTimeout),
                          this._detectLoadedTime(r),
                          !1
                  }
                  const n = new MutationObserver((e => {
                      const t = e.flatMap((e => "attributes" === e.type ? "data-fmp" === e.attributeName && "string" == typeof e.target.getAttribute("data-fmp") ? [e.target] : [] : Array.from(e.addedNodes).flatMap((e => e instanceof Element ? e.getAttribute("data-fmp") ? [e] : Array.from(e.querySelectorAll("[data-fmp]")) : []))))
                        , {completedImages: n, incompleteImages: r, others: o} = this._classify(Array.from(t));
                      o.length > 0 ? this._deferred.resolve({
                          fmp: performance.now(),
                          elements: o
                      }) : n.length > 0 ? this._deferred.resolve({
                          fmp: performance.now(),
                          elements: n.map((e => e.element))
                      }) : r.length > 0 && this._detectLoadedTime(r)
                  }
                  ));
                  n.observe(document.body, {
                      childList: !0,
                      subtree: !0,
                      attributeFilter: ["data-fmp"]
                  }),
                  this._teardownList.push(( () => {
                      n.disconnect()
                  }
                  )),
                  this._setTimeout(this._options.detectTimeout)
              } catch (e) {
                  this._deferred.reject(e)
              }
              return !1
          }
          async postRegister() {}
          _teardown() {
              try {
                  this._teardownList.forEach((e => e())),
                  this._teardownList = []
              } catch (e) {
                  console.error("teardown error", e)
              }
          }
          _classify(e) {
              const t = []
                , n = []
                , r = [];
              return e.forEach((e => {
                  var o, i;
                  if ("IMG" === e.tagName && (e.src || (null !== (i = null === (o = e.srcset) || void 0 === o ? void 0 : o.length) && void 0 !== i ? i : 0) > 0)) {
                      const r = e;
                      return r.complete ? void t.push({
                          image: r,
                          element: r
                      }) : void n.push({
                          image: r,
                          element: r
                      })
                  }
                  if ("VIDEO" === e.tagName && e.poster) {
                      const r = new Image;
                      return r.src = e.poster,
                      r.complete ? void t.push({
                          image: r,
                          element: e
                      }) : void n.push({
                          image: r,
                          element: e
                      })
                  }
                  r.push(e)
              }
              )),
              {
                  completedImages: t,
                  incompleteImages: n,
                  others: r
              }
          }
          _detectFCP(e) {
              console.debug("detectFCP");
              const t = new PerformanceObserver((t => {
                  const n = t.getEntriesByName("first-contentful-paint")[0];
                  n && this._deferred.resolve({
                      fmp: n.startTime,
                      elements: e
                  })
              }
              ));
              t.observe({
                  type: "paint",
                  buffered: !0
              }),
              this._teardownList.push(( () => {
                  t.disconnect()
              }
              ))
          }
          _detectResponseEndTime(e) {
              console.debug("detectResponseEndTime", e),
              Promise.allSettled(e.map(( ({image: e, element: t}) => new Promise(( (n, r) => {
                  if (0 === e.naturalWidth || 0 === e.naturalHeight)
                      return void r(new Error("Image is not loaded"));
                  if (e.currentSrc.startsWith("data:"))
                      return void n({
                          fmp: performance.now(),
                          elements: [t]
                      });
                  const o = new PerformanceObserver((r => {
                      const o = r.getEntriesByName(e.currentSrc)[0];
                      o && n({
                          fmp: o.responseEnd,
                          elements: [t]
                      })
                  }
                  ));
                  o.observe({
                      type: "resource",
                      buffered: !0
                  }),
                  this._teardownList.push(( () => {
                      o.disconnect()
                  }
                  ))
              }
              ))))).then((e => {
                  e.every((e => "rejected" === e.status)) ? this._deferred.reject(new Error("All images are not loaded")) : this._deferred.resolve(e.filter((e => "fulfilled" === e.status)).reduce(( (e, t) => {
                      const n = t;
                      return n.value.fmp < e.fmp ? n.value : e
                  }
                  ), {
                      fmp: 1 / 0,
                      elements: []
                  }))
              }
              ))
          }
          _detectLoadedTime(e) {
              console.debug("detectLoadedTime", e),
              e.forEach(( ({image: e, element: t}) => {
                  const n = () => {
                      this._deferred.resolve({
                          fmp: performance.now(),
                          elements: [t]
                      })
                  }
                  ;
                  e.addEventListener("load", n),
                  this._teardownList.push(( () => {
                      e.removeEventListener("load", n)
                  }
                  ))
              }
              ))
          }
          _setTimeout(e) {
              const t = setTimeout(( () => {
                  this._deferred.reject(new Error("Timeout"))
              }
              ), e);
              this._teardownList.push(( () => {
                  clearTimeout(t)
              }
              ))
          }
      }
      class E {
          _isAfterActualFmp(e) {
              return void 0 !== this._actualFmp && e > this._actualFmp
          }
          async preRegister(e) {
              e.slardar.on("beforeSend", (e => {
                  var t, n, r;
                  if (null !== (t = (r = e.common).context) && void 0 !== t || (r.context = {}),
                  void 0 === this._actualFmp && "performance" === e.ev_type && !0 === e.payload.isCustom && "actual_fmp" === e.payload.name)
                      return this._actualFmp = e.payload.value,
                      e;
                  if ("resource" === e.ev_type && !("resources"in e.payload))
                      return e.common.context[E._ACTUAL_FMP_CONTEXT_KEY] = String(this._isAfterActualFmp(e.payload.responseEnd)),
                      e;
                  if ("http" === e.ev_type && e.payload.response.timing)
                      return e.common.context[E._ACTUAL_FMP_CONTEXT_KEY] = String(this._isAfterActualFmp(e.payload.response.timing.responseEnd)),
                      e;
                  if ("custom" === e.ev_type && "jsb_event" === e.payload.name && (e.common.context[E._ACTUAL_FMP_CONTEXT_KEY] = String(this._isAfterActualFmp(e.payload.metrics.responseEnd))),
                  "performance_longtask" === e.ev_type) {
                      const t = null !== (n = e.payload.longtasks) && void 0 !== n ? n : [];
                      e.common.context[E._ACTUAL_FMP_CONTEXT_KEY] = String(this._isAfterActualFmp(t[0].startTime + t[0].duration))
                  }
                  return e
              }
              ))
          }
          async postRegister() {}
      }
      var G;
      E._ACTUAL_FMP_CONTEXT_KEY = "ttap_is_actual_fmp_reported",
      function(e) {
          e.Js = "js",
          e.Css = "css",
          e.Image = "image",
          e.Font = "font",
          e.Html = "html",
          e.Media = "media",
          e.Other = "other"
      }(G || (G = {}));
      class T {
          async preRegister(e) {
              e.slardar.on("beforeSend", (t => ("performance" === t.ev_type && !0 === t.payload.isCustom && ("container_init_cost" === t.payload.name ? this._containerInitTime = t.payload.value : "render_start" === t.payload.name ? this._renderStartTime = t.payload.value : "render_end" === t.payload.name ? this._renderEndTime = t.payload.value : "route_render_start" === t.payload.name ? this._routeRenderStartTime = t.payload.value : "route_render_end" === t.payload.name ? this._routeRenderEndTime = t.payload.value : "actual_fmp" === t.payload.name && (this._actualFMPDuration = t.payload.value,
              this._sendEvent(e.slardar))),
              "custom" === t.ev_type && "event" === t.payload.type && ("ttapplugin_info" === t.payload.name ? (this._appParseStartTime = t.payload.metrics.appParseStart,
              this._vmokReadyToLoadTime = t.payload.metrics.vmokReadyToLoad,
              this._vmokLoadedTime = t.payload.metrics.vmokLoaded) : "ttapplugin_first_screen_request" === t.payload.name ? (this._requestStartTime = t.payload.metrics.requestStart,
              this._requestEndTime = t.payload.metrics.requestEnd) : "ttapplugin_inapp_info" === t.payload.name && (this._containerInitTotalTime = t.payload.metrics.containerInitTotalTime)),
              t)))
          }
          async postRegister() {}
          _sendEvent(e) {
              const t = {
                  count: 1,
                  ttfb: this._getTTFB(),
                  container_init_cost: this._containerInitTime,
                  container_init_total_time: this._containerInitTotalTime,
                  app_parse_start: this._appParseStartTime,
                  vmok_ready_to_load: this._vmokReadyToLoadTime,
                  vmok_loaded: this._vmokLoadedTime,
                  render_start: this._renderStartTime,
                  render_end: this._renderEndTime,
                  route_render_start: this._routeRenderStartTime,
                  route_render_end: this._routeRenderEndTime,
                  request_start: this._requestStartTime,
                  request_end: this._requestEndTime,
                  actual_fmp: this._actualFMPDuration,
                  ...this._getResourceSize()
              };
              Promise.resolve().then(( () => e.callClient("sendEvent", {
                  name: T._EVENT_NAME,
                  metrics: Object.fromEntries(Object.entries(t).filter(( ([,e]) => void 0 !== e)))
              })))
          }
          _getTTFB() {
              const e = B();
              if (e)
                  return e.responseEnd - e.startTime
          }
          _getResourceSize() {
              var e;
              if (void 0 === this._actualFMPDuration)
                  return {};
              const t = this._actualFMPDuration
                , n = {
                  total_size: 0,
                  total_transfer_size: 0,
                  js_size: 0,
                  css_size: 0,
                  image_size: 0,
                  font_size: 0,
                  html_size: 0,
                  media_size: 0,
                  other_size: 0,
                  not_support_size: 0
              }
                , r = window.performance.getEntriesByType("resource")
                , o = window.performance.getEntriesByType("navigation");
              return (null === (e = o[0]) || void 0 === e ? void 0 : e.encodedBodySize) && (n.total_size += o[0].encodedBodySize,
              n.total_transfer_size += o[0].transferSize,
              n.html_size = o[0].encodedBodySize),
              r.some((e => {
                  var r;
                  if (e.responseEnd > t)
                      return !1;
                  const o = function(e) {
                      const t = e.match(/\/([^\/?#]+\.[^\/?#.]+)(?:\?.*)?$/);
                      return t ? t[1] : null
                  }(e.name);
                  if (null === o)
                      return !1;
                  const i = function(e) {
                      for (const [t,n] of Object.entries(j))
                          if (n.test(e))
                              return t;
                      return G.Other
                  }(o);
                  if (i !== G.Other && (0 === e.encodedBodySize || e.encodedBodySize > 1e9))
                      return n.not_support_size = 1,
                      !0;
                  n.total_size += e.encodedBodySize,
                  n.total_transfer_size += e.transferSize;
                  const a = `${i}_size`;
                  return n[a] = (null !== (r = n[a]) && void 0 !== r ? r : 0) + e.encodedBodySize,
                  !1
              }
              )),
              1 === n.not_support_size ? {
                  not_support_size: 1
              } : n
          }
      }
      T._EVENT_NAME = "ttapplugin_effective_open_page";
      const j = {
          [G.Js]: /\.m?js$/i,
          [G.Css]: /\.css$/i,
          [G.Html]: /\.html?$/i,
          [G.Image]: /\.(jpe?g|png|svg|gif|webp|heif|bmp)$/i,
          [G.Font]: /\.(otf|ttf|eot|woff2?)$/i,
          [G.Media]: /\.(mp4|webm|mkv|flv|avi|wmv)$/i
      }
        , H = {
          containerInitCost: {
              query: e => {
                  var t;
                  const n = null === (t = e.templateResData) || void 0 === t ? void 0 : t.container_init_cost;
                  return {
                      isResolved: 0 === n || Boolean(n),
                      val: n
                  }
              }
              ,
              value: new k
          },
          containerInitTotalTime: {
              query: e => {
                  let t = 0;
                  const n = e.containerInitTime;
                  return n && (t = M() - parseInt(n)),
                  {
                      isResolved: null != n,
                      val: t
                  }
              }
              ,
              value: new k
          },
          htmlFromGecko: {
              query: e => {
                  var t;
                  const n = null === (t = e.templateResData) || void 0 === t ? void 0 : t.res_from
                    , r = "gecko" === n ? "true" : "false";
                  return {
                      isResolved: Boolean(n),
                      val: {
                          resFrom: n,
                          fromGecko: r
                      }
                  }
              }
              ,
              fallback: () => {
                  var e;
                  let t = "serverTiming_unknown"
                    , n = "unknown";
                  if (!L()) {
                      const r = null === (e = null === performance || void 0 === performance ? void 0 : performance.getEntriesByType("navigation")) || void 0 === e ? void 0 : e[0];
                      (null == r ? void 0 : r.serverTiming) && (t = 0 === r.serverTiming.length ? "serverTiming_true" : "serverTiming_false",
                      n = 0 === r.serverTiming.length ? "true" : "false")
                  }
                  return {
                      isResolved: !0,
                      val: {
                          resFrom: t,
                          fromGecko: n
                      }
                  }
              }
              ,
              value: new k
          },
          geckoChannelName: {
              query: e => {
                  var t;
                  const n = null === (t = e.templateResData) || void 0 === t ? void 0 : t.gecko_channel;
                  return {
                      isResolved: null != n,
                      val: n
                  }
              }
              ,
              value: new k
          },
          deviceScore: {
              query: e => {
                  var t;
                  if (L())
                      return {
                          isResolved: !0,
                          val: void 0
                      };
                  const n = null === (t = e.deviceScore) || void 0 === t ? void 0 : t.overall_score;
                  return {
                      isResolved: null != n,
                      val: {
                          score: null != n ? n : 0,
                          scoreRounded: n ? Math.floor(n) : 0
                      }
                  }
              }
              ,
              value: new k
          },
          networkLevel: {
              query: e => {
                  const t = e.networkLevel;
                  return {
                      isResolved: null != t,
                      val: null != t ? t : void 0
                  }
              }
              ,
              value: new k
          },
          appVersion: {
              query: e => {
                  const t = e.appVersion;
                  return {
                      isResolved: null != t,
                      val: t
                  }
              }
              ,
              value: new k
          }
      };
      function R(e) {
          var t, n, r;
          let o;
          try {
              const n = null === (t = window.__globalprops) || void 0 === t ? void 0 : t.getGlobalProps();
              if (o = JSON.parse(n),
              !o)
                  throw new Error("no globalProps");
              return H[e].query(o)
          } catch {
              try {
                  const t = null === (r = (n = H[e]).fallback) || void 0 === r ? void 0 : r.call(n);
                  if (t)
                      return t
              } catch {}
              return {
                  isResolved: !0,
                  val: void 0
              }
          }
      }
      const x = {};
      function P() {
          for (const e of Object.values(x))
              e()
      }
      async function O(e) {
          if (H[e].value.isResolved)
              return H[e].value.promise;
          const t = R(e);
          if (t.isResolved)
              H[e].value.resolve(t.val);
          else {
              const t = function(e, t) {
                  const n = `sub_${t}_${Date.now()}_${Math.floor(1e4 * Math.random())}`;
                  return x[n] = e,
                  n
              }(( () => {
                  const n = R(e);
                  n.isResolved && (H[e].value.resolve(n.val),
                  function(e) {
                      e && delete x[e]
                  }(t))
              }
              ), e)
          }
          return H[e].value.promise
      }
      const J = {
          actualFmp: {},
          afterVmokResolve: {},
          onVmokLoad: {}
      };
      function N(e, t) {
          J[e] && "object" == typeof J[e] && Object.keys(J[e]).forEach((n => {
              J[e][n](t)
          }
          ))
      }
      function z(e, t) {
          const n = `sub_${e}_${Date.now()}_${Math.floor(1e4 * Math.random())}`;
          return J[e] && "object" == typeof J[e] ? (J[e][n] = t,
          {
              unsubscribe: () => function(e, t) {
                  delete J[e][t]
              }(e, n)
          }) : {
              unsubscribe: () => {}
          }
      }
      const K = "<unknown>"
        , V = "<overlong>"
        , W = ["type", "name", "title", "alt"];
      function U(e, t) {
          try {
              let n = e;
              const r = 5
                , o = 256
                , i = [];
              let a = 0
                , s = 0;
              const c = " > "
                , l = c.length;
              let u;
              for (; n && a++ < r && (u = Z(n, t),
              !("html" === u || a > 1 && s + i.length * l + u.length >= o)); )
                  i.push(u.length >= o ? V : u),
                  s += u.length,
                  n = n.parentNode;
              const d = i.reverse().join(c);
              return d.length > o ? V : d
          } catch (e) {
              return K
          }
      }
      function Z(e, {attrlist: t=W}={}) {
          var n, r;
          const o = e
            , i = [];
          let a, s, c, l;
          if (!o || !o.tagName)
              return "";
          if (i.push(o.tagName.toLowerCase()),
          o.id)
              return `#${o.id}`;
          const u = o.className;
          if (u && "string" == typeof u && u.length > 0)
              for (a = u.split(/\s+/),
              l = 0; l < a.length; l++)
                  i.push(`.${a[l]}`);
          for (l = 0; l < t.length; l++)
              s = t[l],
              c = o.getAttribute(s),
              c && i.push(`[${s}="${c}"]`);
          let d = o
            , f = 1
            , h = !0;
          for (; d = d.previousElementSibling; )
              (null === (n = d.tagName) || void 0 === n ? void 0 : n.toLowerCase()) === (null === (r = o.tagName) || void 0 === r ? void 0 : r.toLowerCase()) && (d.className === o.className && t.every((e => o.getAttribute(e) === (null == d ? void 0 : d.getAttribute(e)))) && (h = !1),
              f++);
          return f > 1 && !h && i.push(`:nth-of-type(${f})`),
          i.join("")
      }
      function Y(e, t, n) {
          const r = X({
              performanceMarkPoint: "ActualFMP:end",
              performanceMeasureName: "ActualFMP",
              value: t
          })
            , {elements: o, attrlist: i} = null != n ? n : {};
          return e.callClient("sendCustomPerfMetric", {
              name: "actual_fmp",
              value: r,
              extra: {
                  element: o && o.length > 0 ? U(o[0], {
                      attrlist: i
                  }) : "<unknown>"
              }
          }),
          r
      }
      function X(e) {
          var t, n;
          if (!function() {
              var e, t, n;
              return !!((null === (e = window.performance) || void 0 === e ? void 0 : e.now) && (null === (t = window.performance) || void 0 === t ? void 0 : t.mark) && (null === (n = window.performance) || void 0 === n ? void 0 : n.measure))
          }())
              return null !== (t = e.value) && void 0 !== t ? t : Date.now() - M();
          try {
              return performance.mark(e.performanceMarkPoint, {
                  startTime: e.value
              }),
              e.value ? performance.measure(e.performanceMeasureName, {
                  start: 0,
                  end: e.value
              }).duration : performance.measure(e.performanceMeasureName, {}, e.performanceMarkPoint).duration
          } catch (t) {
              return console.error(t),
              null !== (n = e.value) && void 0 !== n ? n : Date.now() - M()
          }
      }
      let Q = null;
      const q = new Map;
      function $(e) {
          const t = e ? q.get(e) : Q;
          if (!t)
              throw new Error("Please register the plugin first.");
          return t
      }
      const ee = async e => {
          try {
              if ("undefined" == typeof window || !e.slardar || q.has(e.slardar))
                  return Promise.resolve();
              const {slardar: t, scenario: n} = e
                , r = {
                  register$: new k,
                  slardarClient: t,
                  scenarioInstance: n(t),
                  isAutoDetectFMP: Boolean(e.autoDetectFMP)
              };
              return async function(e, t, n, r) {
                  var o, i;
                  n.setRegisterStart();
                  const a = [new E, new T];
                  e.autoDetectFMP && a.push(new S(( (n, r) => {
                      var o, i, a;
                      const s = $(t);
                      return s.slardarClient && s.scenarioInstance ? (null === (i = null === (o = s.slardarClient) || void 0 === o ? void 0 : o.getState()) || void 0 === i ? void 0 : i.isSpaRouteCheck) ? 0 : (s.isFirstScreenRequestSent || te(s.scenarioInstance.getFirstScreenRequests().filter((e => e.endTime < n + M())), s),
                      void (s.actualFMPDuration || (s.actualFMPDuration = Y(s.slardarClient, n, {
                          elements: r,
                          attrlist: "boolean" == typeof e.autoDetectFMP || null === (a = e.autoDetectFMP) || void 0 === a ? void 0 : a.attrlist
                      }),
                      N("actualFmp", s.actualFMPDuration)))) : 0
                  }
                  ),{
                      ..."boolean" == typeof e.autoDetectFMP ? {} : e.autoDetectFMP,
                      isSpa: e.isSpa
                  }));
                  const s = async function(e, t, n) {
                      await e.preRegister(),
                      await Promise.all((null != t ? t : []).map((e => e.preRegister({
                          slardar: n
                      }))))
                  }(n, [...a, ...null !== (o = e.extensions) && void 0 !== o ? o : []], t);
                  await Promise.race([s, F(300)]),
                  await t.registerClient({
                      disableEnvAutoConfig: e.disableEnvAutoConfig,
                      disableReleaseVersionAutoConfig: e.disableReleaseVersionAutoConfig,
                      env: e.env,
                      release: e.release,
                      isSpa: null !== (i = e.isSpa) && void 0 !== i && i,
                      ignoreApiUrl: e.ignoreApiUrl,
                      includeApiUrl: e.includeApiUrl,
                      vmok: e.vmok
                  }),
                  n.setRegisterEnd(),
                  r.resolve(),
                  await F(1),
                  function(e, t, n) {
                      e.postRegister();
                      for (const r of null != t ? t : [])
                          r.postRegister({
                              slardar: n,
                              subscribeMetric: z,
                              scenarioState: e.getState()
                          })
                  }(n, e.extensions, t)
              }(e, r.slardarClient, r.scenarioInstance, r.register$),
              function(e) {
                  Q || (Q = {
                      ...e
                  }),
                  q.set(e.slardarClient, e)
              }(r),
              r.register$.promise
          } catch {
              return Promise.resolve()
          }
      }
      ;
      function te(e, t) {
          var n, r;
          t.slardarClient && !t.isFirstScreenRequestSent && ((null === (r = null === (n = t.slardarClient) || void 0 === n ? void 0 : n.getState()) || void 0 === r ? void 0 : r.isSpaRouteCheck) || 0 !== e.length && (function(e, t) {
              if (0 === e.length)
                  return;
              const n = e.map((e => e.startTime))
                , r = Math.min(...n) - M()
                , o = e.map((e => e.endTime))
                , i = Math.max(...o) - M();
              t.callClient("sendEvent", {
                  name: "ttapplugin_first_screen_request",
                  metrics: {
                      requestStart: r,
                      requestEnd: i,
                      duration: i - r
                  }
              })
          }(e, t.slardarClient),
          t.isFirstScreenRequestSent = !0))
      }
      const ne = e => {
          var t, n;
          try {
              const r = $(e);
              return r.slardarClient && r.scenarioInstance && !r.isAutoDetectFMP ? (null === (n = null === (t = r.slardarClient) || void 0 === t ? void 0 : t.getState()) || void 0 === n ? void 0 : n.isSpaRouteCheck) ? 0 : (r.isFirstScreenRequestSent || te(r.scenarioInstance.getFirstScreenRequests(), r),
              r.actualFMPDuration || (r.actualFMPDuration = Y(r.slardarClient),
              N("actualFmp", r.actualFMPDuration)),
              r.actualFMPDuration) : 0
          } catch {
              return 0
          }
      }
        , re = () => O("containerInitTotalTime");
      class oe {
          constructor(e) {
              this._state = {
                  bid: void 0,
                  pid: void 0,
                  isSpaRouteCheck: !1,
                  ignoreApiUrl: [/mcs.*\.tiktok[vw]?\.(com|us|eu)/, /mon\.tiktokv\.(com|us|eu)/],
                  includeApiUrl: [],
                  vmok: void 0
              },
              this._tempSlardarCalls = [],
              this._tempSlardarOns = [],
              this._isReady = !1,
              this._hasAdditionalContext = !1,
              this.callClient = (e, t) => {
                  this._isReady ? this._callSlardarWeb(e, t) : this._tempSlardarCalls.push({
                      m: e,
                      e: t
                  })
              }
              ,
              this.on = (e, t) => {
                  this._isReady ? this._onSlardarWeb(e, t) : this._tempSlardarOns.push({
                      e,
                      handler: t
                  })
              }
              ,
              this._flushTempSlardarCalls = () => {
                  this._tempSlardarCalls.forEach(( ({m: e, e: t}) => {
                      this.callClient(e, t)
                  }
                  )),
                  this._tempSlardarCalls = []
              }
              ,
              this._flushTempSlardarOns = () => {
                  this._tempSlardarOns.forEach(( ({e, handler: t}) => {
                      this.on(e, t)
                  }
                  )),
                  this._tempSlardarOns = []
              }
              ,
              this._updateConfigSlardarWeb = e => {
                  var t;
                  null === (t = this._slardarClientFn()) || void 0 === t || t("config", e)
              }
              ,
              this._callSlardarWeb = (e, t) => {
                  const n = this._slardarClientFn();
                  n && ("report" === e || "sendEvent" === e || "sendCustomPerfMetric" === e || "sendLog" === e) && n(e, t)
              }
              ,
              this._onSlardarWeb = (e, t) => {
                  const n = this._slardarClientFn();
                  n && n("on", e, (e => {
                      try {
                          return t(e)
                      } catch {
                          return e
                      }
                  }
                  ))
              }
              ,
              this._slardarClientFn = e
          }
          getState() {
              return this._state
          }
          setState(e, t=!1) {
              var n, r;
              try {
                  const {bid: o, pid: i} = null !== (r = null === (n = this._slardarClientFn()) || void 0 === n ? void 0 : n("config")) && void 0 !== r ? r : {};
                  this._state = {
                      ...this._state,
                      ...e,
                      ...t ? {
                          bid: o,
                          pid: i
                      } : {}
                  }
              } catch {}
          }
          deregisterClient() {
              this._hasAdditionalContext = !1,
              this._isReady = !1
          }
          start() {
              var e;
              null === (e = this._slardarClientFn()) || void 0 === e || e("start")
          }
          registerClient(e) {
              const {includeApiUrl: t, ignoreApiUrl: n, vmok: r, isSpa: o} = e
                , i = {}
                , a = this._slardarClientFn();
              if (!a)
                  return Promise.resolve(!1);
              if (t && Array.isArray(t) && (i.includeApiUrl = [...t]),
              n && Array.isArray(n) && (i.ignoreApiUrl = Array.isArray(i.ignoreApiUrl) ? [...i.ignoreApiUrl, ...n] : [...n]),
              (null == r ? void 0 : r.name) && (i.vmok = r),
              this._hasAdditionalContext && a("on", "start", ( () => {
                  var e;
                  try {
                      const t = this._slardarClientFn()
                        , n = null !== (e = null == t ? void 0 : t.getPreStartQueue()) && void 0 !== e ? e : [];
                      n.forEach(( (e, r) => {
                          var o, i;
                          n[r] = {
                              ...e,
                              overrides: {
                                  ...null !== (o = e.overrides) && void 0 !== o ? o : {},
                                  context: (null === (i = null == t ? void 0 : t.context) || void 0 === i ? void 0 : i.toString()) || {}
                              }
                          }
                      }
                      ))
                  } catch {}
              }
              )),
              o)
                  try {
                      const {name: e} = B() || {};
                      if (e) {
                          const t = new URL(e)
                            , n = new URL(document.URL);
                          i.isSpaRouteCheck = t.pathname !== n.pathname
                      }
                      a("on", "beforeConfig", (e => {
                          var t, n;
                          try {
                              const r = null == e ? void 0 : e.pid
                                , o = null === (n = null === (t = this._slardarClientFn()) || void 0 === t ? void 0 : t("config")) || void 0 === n ? void 0 : n.pid;
                              o && r && r !== o && this.setState({
                                  isSpaRouteCheck: !0
                              })
                          } catch (e) {}
                      }
                      )),
                      a("on", "config", ( () => {
                          try {
                              this.setState({}, !0)
                          } catch {}
                      }
                      ))
                  } catch (e) {
                      console.error("ttap plugin error", e)
                  }
              return new Promise((t => {
                  a("on", "init", ( () => {
                      const n = (e => {
                          try {
                              const t = {};
                              if (!e.disableReleaseVersionAutoConfig)
                                  try {
                                      let n = e.release;
                                      n || (n = process.env.BUILD_VERSION),
                                      n && (t.release = n)
                                  } catch {}
                              if (!e.disableEnvAutoConfig)
                                  try {
                                      let n = e.env;
                                      n || (n = process.env.CUSTOM_BUILD_ENV),
                                      n && (t.env = n)
                                  } catch {}
                              if (Object.keys(t).length > 0)
                                  return t
                          } catch {}
                      }
                      )(e);
                      n && this._updateConfigSlardarWeb(n),
                      this._isReady = !0,
                      this._flushTempSlardarOns(),
                      this._flushTempSlardarCalls(),
                      this.setState(i, !0),
                      t(!0)
                  }
                  ))
              }
              ))
          }
          updateContext(e, t) {
              const n = this._slardarClientFn();
              n && (n("context.set", e, t),
              this._hasAdditionalContext = !0)
          }
      }
      const ie = {
          start: 0,
          end: 0
      };
      function ae() {
          ie.start = Date.now()
      }
      function se() {
          ie.end = Date.now()
      }
      function ce(e) {
          const {vmok: t} = e.getState()
            , n = {};
          if (n.registerDuration = ie.end - ie.start,
          n.navigationStartTime = M(),
          window.TTAP_DOMPARSE_STARTTIME && (n.domParseStart = window.TTAP_DOMPARSE_STARTTIME - n.navigationStartTime),
          window.TTAP_APPPARSE_STARTTIME && (n.appParseStart = window.TTAP_APPPARSE_STARTTIME - n.navigationStartTime),
          t) {
              const e = t.name
                , r = D(e, "afterResolve")
                , o = D(e, "onLoad");
              r && o && (n.vmokReadyToLoad = r - n.navigationStartTime,
              n.vmokLoaded = o - n.navigationStartTime)
          }
          const r = {}
            , o = "1.14.3";
          o && (r.version = o),
          e.callClient("sendEvent", {
              name: "ttapplugin_info",
              metrics: n,
              categories: r
          })
      }
      let le = []
        , ue = !1;
      function de(e, t) {
          const n = {};
          e.globalConfig({
              onInvokeStart: e => {
                  if (!e)
                      return e;
                  const {method: t, params: r} = e;
                  if ("sendLogV3" === t)
                      return e;
                  const o = Date.now();
                  return e.ttap_id = `method_${o}_${Math.floor(1e3 * Math.random())}`,
                  n[e.ttap_id] = "fetch" === t || "request" === t ? {
                      request: {
                          method: r.method,
                          url: r.url,
                          timestamp: o
                      },
                      startTimestamp: o
                  } : {
                      request: void 0,
                      startTimestamp: o
                  },
                  e
              }
              ,
              onInvokeEnd: e => {
                  var r, o, i, a;
                  if (!e)
                      return;
                  const {response: s, config: c} = e;
                  if (!c)
                      return;
                  const {method: l, ttap_id: u} = c;
                  if ("sendLogV3" === l || !u || !n[u])
                      return;
                  const d = Date.now()
                    , f = Math.round(d - performance.now())
                    , {request: h} = n[u];
                  if ("fetch" !== l && "request" !== l || !h)
                      t.callClient("sendEvent", {
                          name: "jsb_event",
                          metrics: {
                              duration: d - n[u].startTimestamp,
                              requestStart: n[u].startTimestamp - f,
                              responseEnd: d - f
                          },
                          categories: {
                              jsb_method: l
                          }
                      });
                  else {
                      const e = h.timestamp - f
                        , n = d - f
                        , c = n - e
                        , l = {
                          is_custom_error: !1,
                          status: null !== (o = null === (r = null == s ? void 0 : s.data) || void 0 === r ? void 0 : r.httpCode) && void 0 !== o ? o : 200,
                          timestamp: d,
                          timing: {
                              name: h.url,
                              startTime: e,
                              requestStart: e,
                              responseStart: n,
                              responseEnd: n,
                              duration: c
                          }
                      }
                        , {ignoreApiUrl: u=[], includeApiUrl: m=[]} = null !== (a = null === (i = null == t ? void 0 : t.getState) || void 0 === i ? void 0 : i.call(t)) && void 0 !== a ? a : {};
                      u.length && u.some((e => "string" == typeof e ? h.url.includes(e) : e.test(h.url))) || t.callClient("report", {
                          ev_type: "http",
                          payload: {
                              api: "jsbridge",
                              request: h,
                              response: l,
                              duration: c
                          }
                      }),
                      ue || (u.length || m.length ? m.length ? m.some((e => "string" == typeof e ? h.url.includes(e) : e.test(h.url))) && le.push({
                          startTime: h.timestamp,
                          endTime: d
                      }) : u.some((e => "string" == typeof e ? h.url.includes(e) : e.test(h.url))) || le.push({
                          startTime: h.timestamp,
                          endTime: d
                      }) : le.push({
                          startTime: h.timestamp,
                          endTime: d
                      }))
                  }
                  delete n[u]
              }
          })
      }
      const fe = {
          script: !0,
          link: !0,
          img: !0,
          css: !0
      }
        , he = {
          isActualFMPSent: !1
      };
      let me, pe, ge = [];
      const ve = (e, t) => {
          O("htmlFromGecko").then((t => {
              t && (e.callClient("sendEvent", {
                  name: "from_gecko",
                  categories: {
                      html: t.fromGecko,
                      resFrom: t.resFrom
                  }
              }),
              e.updateContext("htmlResFrom", t.resFrom))
          }
          )),
          (async (e, t) => {
              try {
                  if (L())
                      return;
                  pe = z("actualFmp", ( () => {
                      he.isActualFMPSent = !0,
                      null == pe || pe.unsubscribe(),
                      ge.forEach((e => {
                          t({
                              path: e.path,
                              fromGecko: e.fromGecko,
                              isFirstScreen: "true",
                              resourceType: "unknown"
                          })
                      }
                      )),
                      ge = []
                  }
                  ));
                  const n = {}
                    , r = {
                      common: ["/gando_libs/", "/tiktok_fonts/"],
                      app: []
                  };
                  e && r.app.push(e);
                  try {
                      const e = process.env.GECKO_PATH_PREFIX;
                      e && r.app.push(e)
                  } catch {}
                  try {
                      const e = "tiktok/webapp/main";
                      e && r.app.push(e)
                  } catch {}
                  const o = await O("geckoChannelName");
                  o && r.app.push(o),
                  me = new PerformanceObserver((e => ( (e, t, n, r) => {
                      e.getEntries().forEach((e => {
                          var o, i;
                          const a = e
                            , s = null !== (i = null === (o = a.name) || void 0 === o ? void 0 : o.toLowerCase()) && void 0 !== i ? i : "";
                          if (s && !t[s] && fe[a.initiatorType]) {
                              let e = "unknown";
                              n.common.find((e => s.includes(e))) ? e = "common" : n.app.find((e => s.includes(e))) && (e = "app");
                              const o = a;
                              let i = "unknown";
                              o.serverTiming && (i = 0 === o.serverTiming.length ? "true" : "false"),
                              t[s] = !0,
                              "unknown" === e ? he.isActualFMPSent || (c = {
                                  path: a.name,
                                  fromGecko: i
                              },
                              ge.push(c),
                              ge.length > 5 && ge.shift()) : r({
                                  path: a.name,
                                  fromGecko: i,
                                  isFirstScreen: he.isActualFMPSent ? "false" : "true",
                                  resourceType: e
                              })
                          } else
                              t[s] || (t[s] = !0);
                          var c
                      }
                      ))
                  }
                  )(e, n, r, t))),
                  me.observe({
                      type: "resource",
                      buffered: !0
                  })
              } catch {}
          }
          )(t.geckoResPath, (t => {
              e.callClient("sendEvent", {
                  name: "from_gecko",
                  categories: {
                      resource: t.fromGecko,
                      path: t.path,
                      isFirstScreen: t.isFirstScreen,
                      resourceType: t.resourceType
                  }
              })
          }
          ))
      }
        , ye = () => (ue = !0,
      le)
        , be = (e, t={}) => {
          const n = [];
          return Array.isArray(e) ? n.push(...e) : n.push(e),
          e => ({
              setRegisterStart: ae,
              setRegisterEnd: se,
              preRegister: async () => {
                  await (async (e, t) => {
                      if (!e[0])
                          return;
                      !function(e, t) {
                          for (const n of e)
                              try {
                                  de(n, t)
                              } catch {}
                      }(e, t),
                      function(e) {
                          try {
                              e.on("globalPropsUpdated", P)
                          } catch {}
                      }(e[0]);
                      const n = O("appVersion").then((e => {
                          e && t.updateContext("app_version", e)
                      }
                      )).catch(( () => {}
                      ))
                        , r = O("deviceScore").then((e => {
                          e && t.updateContext("device_score", e.scoreRounded.toString())
                      }
                      )).catch(( () => {}
                      ))
                        , o = O("networkLevel").then((e => {
                          e && t.updateContext("network_level", e.toString())
                      }
                      )).catch(( () => {}
                      ));
                      await Promise.all([n, r, o])
                  }
                  )(n, e)
              }
              ,
              postRegister: () => {
                  ( (e, t) => {
                      t.disableGeckoCheck || ve(e, t),
                      (e => {
                          O("containerInitCost").then((t => {
                              t && e.callClient("sendCustomPerfMetric", {
                                  name: "container_init_cost",
                                  value: t
                              })
                          }
                          ))
                      }
                      )(e),
                      (e => {
                          Promise.all([O("containerInitTotalTime"), O("deviceScore")]).then(( ([t,n]) => {
                              const r = {};
                              t && (r.containerInitTotalTime = t),
                              n && (r.deviceScore = n.score),
                              Object.keys(r).length > 0 && e.callClient("sendEvent", {
                                  name: "ttapplugin_inapp_info",
                                  metrics: r
                              })
                          }
                          ))
                      }
                      )(e),
                      ce(e)
                  }
                  )(e, t)
              }
              ,
              getFirstScreenRequests: ye,
              getState: () => ({
                  type: "inapp",
                  jsb: n[0]
              })
          })
      }
        , Ce = new Map
        , we = () => {
          const e = (e, t) => {
              var n;
              const {isSpaRouteCheck: r} = e.getState()
                , o = M()
                , i = {
                  duration: D(t, "onLoad") - D(t, "afterResolve")
              };
              r || (i.vmokReadyToLoad = D(t, "afterResolve") - o,
              i.vmokLoaded = D(t, "onLoad") - o),
              console.debug("ttap_vmok_load", t, i),
              e.callClient("sendEvent", {
                  name: "ttap_vmok_load",
                  metrics: i,
                  categories: {
                      vmok_name: t,
                      vmok_version: null !== (n = Ce.get(t)) && void 0 !== n ? n : "unknown"
                  }
              })
          }
          ;
          return t => ({
              setRegisterStart: ae,
              setRegisterEnd: se,
              preRegister: async () => {
                  t.getState().vmok || z("onVmokLoad", (n => {
                      e(t, n)
                  }
                  ))
              }
              ,
              postRegister: () => {
                  try {
                      const {isSpaRouteCheck: n, vmok: r} = t.getState();
                      n || ce(t),
                      r && e(t, r.name)
                  } catch {}
              }
              ,
              getFirstScreenRequests: () => (e => {
                  var t, n;
                  try {
                      const {ignoreApiUrl: r=[], includeApiUrl: o=[]} = null !== (n = null === (t = null == e ? void 0 : e.getState) || void 0 === t ? void 0 : t.call(e)) && void 0 !== n ? n : {}
                        , i = performance.getEntriesByType("resource").filter((e => {
                          const t = e;
                          return ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) && (!r.length && !o.length || (o.length ? o.some((e => "string" == typeof e ? t.name.includes(e) : e.test(t.name))) : !r.some((e => "string" == typeof e ? t.name.includes(e) : e.test(t.name)))))
                      }
                      ))
                        , a = M();
                      return i.map((e => ({
                          startTime: e.startTime + a,
                          endTime: e.startTime + e.duration + a
                      })))
                  } catch (e) {
                      const t = performance.getEntriesByType("resource").filter((e => {
                          const t = e;
                          return "xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType
                      }
                      ))
                        , n = M();
                      return t.map((e => ({
                          startTime: e.startTime + n,
                          endTime: e.startTime + e.duration + n
                      })))
                  }
              }
              )(t),
              getState: () => ({
                  type: "webapp"
              })
          })
      }
      ;
      class Ae {
          onConnect(e) {
              const t = {
                  reportCustomRequest: (e, t, n) => function(e, t, n, r) {
                      var o, i;
                      try {
                          const a = $(r);
                          if (!a.slardarClient)
                              return;
                          if (null === (i = null === (o = a.slardarClient) || void 0 === o ? void 0 : o.getState()) || void 0 === i ? void 0 : i.isSpaRouteCheck)
                              return;
                          !function(e, t, n, r) {
                              const o = n - t;
                              r.callClient("sendEvent", {
                                  name: "ttapplugin_custom_request",
                                  metrics: {
                                      requestStart: t - M(),
                                      requestEnd: n - M(),
                                      duration: o
                                  },
                                  categories: {
                                      requestName: e
                                  }
                              })
                          }(e, t, n, a.slardarClient)
                      } catch {
                          return
                      }
                  }(e, t, n, this.slardarClient),
                  getContainerInitTotalTime: re,
                  reportFirstScreenRequest: (e, t) => function(e, t, n) {
                      te([{
                          startTime: e,
                          endTime: t
                      }], $(n))
                  }(e, t, this.slardarClient),
                  reportActualFMP: () => ne(this.slardarClient),
                  reportActualLCP: () => ne(this.slardarClient),
                  reportRenderStart: () => (e => {
                      var t, n;
                      try {
                          const r = $(e);
                          return r.slardarClient && r.scenarioInstance ? (null === (n = null === (t = r.slardarClient) || void 0 === t ? void 0 : t.getState()) || void 0 === n ? void 0 : n.isSpaRouteCheck) ? 0 : (r.renderStartDuration || (r.renderStartDuration = function(e) {
                              const t = X({
                                  performanceMarkPoint: "Render:start",
                                  performanceMeasureName: "RenderStart"
                              });
                              return e.callClient("sendCustomPerfMetric", {
                                  name: "render_start",
                                  value: t
                              }),
                              t
                          }(r.slardarClient)),
                          r.renderStartDuration) : 0
                      } catch {
                          return 0
                      }
                  }
                  )(this.slardarClient),
                  reportRenderEnd: () => (e => {
                      var t, n;
                      try {
                          const r = $(e);
                          return r.slardarClient && r.scenarioInstance ? (null === (n = null === (t = r.slardarClient) || void 0 === t ? void 0 : t.getState()) || void 0 === n ? void 0 : n.isSpaRouteCheck) ? 0 : (r.renderEndDuration || (r.renderEndDuration = function(e) {
                              const t = X({
                                  performanceMarkPoint: "Render:end",
                                  performanceMeasureName: "RenderEnd"
                              });
                              return e.callClient("sendCustomPerfMetric", {
                                  name: "render_end",
                                  value: t
                              }),
                              t
                          }(r.slardarClient)),
                          r.renderEndDuration) : 0
                      } catch {
                          return 0
                      }
                  }
                  )(this.slardarClient),
                  reportRouteRenderStart: () => (e => {
                      var t, n;
                      try {
                          const r = $(e);
                          return r.slardarClient && r.scenarioInstance ? (null === (n = null === (t = r.slardarClient) || void 0 === t ? void 0 : t.getState()) || void 0 === n ? void 0 : n.isSpaRouteCheck) ? 0 : (r.routeRenderStartDuration || (r.routeRenderStartDuration = function(e) {
                              const t = X({
                                  performanceMarkPoint: "RouteRender:start",
                                  performanceMeasureName: "RouteRenderStart"
                              });
                              return e.callClient("sendCustomPerfMetric", {
                                  name: "route_render_start",
                                  value: t
                              }),
                              t
                          }(r.slardarClient)),
                          r.routeRenderStartDuration) : 0
                      } catch {
                          return 0
                      }
                  }
                  )(this.slardarClient),
                  reportRouteRenderEnd: () => (e => {
                      var t, n;
                      try {
                          const r = $(e);
                          return r.slardarClient && r.scenarioInstance ? (null === (n = null === (t = r.slardarClient) || void 0 === t ? void 0 : t.getState()) || void 0 === n ? void 0 : n.isSpaRouteCheck) ? 0 : (r.routeRenderEndDuration || (r.routeRenderEndDuration = function(e) {
                              const t = X({
                                  performanceMarkPoint: "RouteRender:end",
                                  performanceMeasureName: "RouteRenderEnd"
                              });
                              return e.callClient("sendCustomPerfMetric", {
                                  name: "route_render_end",
                                  value: t
                              }),
                              t
                          }(r.slardarClient)),
                          r.routeRenderEndDuration) : 0
                      } catch {
                          return 0
                      }
                  }
                  )(this.slardarClient),
                  reportPageReady: () => (e => {
                      try {
                          const t = $(e);
                          if (!t.slardarClient || !t.scenarioInstance)
                              return;
                          !function(e) {
                              e.callClient("sendEvent", {
                                  name: "page_ready",
                                  metrics: {
                                      count: 1
                                  }
                              })
                          }(t.slardarClient)
                      } catch {}
                  }
                  )(this.slardarClient),
                  reportStabilityEvent: e => ( (e, t) => {
                      try {
                          const n = $(t);
                          if (!n.slardarClient || !n.scenarioInstance)
                              return;
                          !function(e, t) {
                              const {cuj: n, isEndStep: r, eventName: o, isSuccess: i, statusCode: a, bizCode: s, api: c, errorMsg: l} = t;
                              o && void 0 !== i && e.callClient("sendEvent", {
                                  name: "biz_common_stability_event",
                                  metrics: {
                                      count: 1
                                  },
                                  categories: {
                                      event_name: o,
                                      is_success: String(i),
                                      ...n ? {
                                          cuj: n
                                      } : {},
                                      ...a ? {
                                          status_code: String(a)
                                      } : {},
                                      ...s ? {
                                          biz_code: String(s)
                                      } : {},
                                      ...c ? {
                                          api: c
                                      } : {},
                                      ...l ? {
                                          error_msg: l
                                      } : {},
                                      ...r ? {
                                          is_end_step: String(r)
                                      } : {}
                                  }
                              })
                          }(n.slardarClient, e)
                      } catch {}
                  }
                  )(e, this.slardarClient),
                  reportStabilityStack: e => ( (e, t) => {
                      try {
                          const n = $(t);
                          if (!n.slardarClient || !n.scenarioInstance)
                              return;
                          !function(e, t) {
                              const {level: n="info", stack: r, title: o} = t;
                              o && e.callClient("sendLog", {
                                  level: n,
                                  content: r,
                                  extra: {
                                      title: o
                                  }
                              })
                          }(n.slardarClient, e)
                      } catch {}
                  }
                  )(e, this.slardarClient),
                  reportPageCrash: e => ( (e, t) => {
                      try {
                          const n = $(t);
                          if (!n.slardarClient || !n.scenarioInstance)
                              return;
                          !function(e, t) {
                              const {errorMsg: n=""} = t;
                              e.callClient("sendEvent", {
                                  name: "page_crash",
                                  metrics: {
                                      count: 1
                                  },
                                  categories: {
                                      error_msg: n
                                  }
                              })
                          }(n.slardarClient, e)
                      } catch {}
                  }
                  )(e, this.slardarClient)
              };
              e.data("ttap", t),
              e.data("reportActualLCP", t.reportActualFMP),
              e.data("reportCustomRequest", t.reportCustomRequest),
              e.data("getContainerInitTotalTime", t.getContainerInitTotalTime),
              e.data("reportFirstScreenRequest", t.reportFirstScreenRequest),
              e.data("reportRenderStart", t.reportRenderStart),
              e.data("reportRenderEnd", t.reportRenderEnd),
              e.data("reportRouteRenderStart", t.reportRouteRenderStart),
              e.data("reportRouteRenderEnd", t.reportRouteRenderEnd),
              e.data("reportPageReady", t.reportPageReady),
              e.data("reportStabilityEvent", t.reportStabilityEvent),
              e.data("reportStabilityStack", t.reportStabilityStack),
              e.data("reportPageCrash", t.reportPageCrash)
          }
          onInit({container: e, data: t}) {
              const {ttap: n} = t
                , r = (e => {
                  if (e())
                      return new oe(e)
              }
              )(( () => e.rawInstance()));
              return this.slardarClient = r,
              ee({
                  slardar: r,
                  scenario: n?.jsb ? be(n.jsb) : we(),
                  ...n
              })
          }
          onCreate() {
              return new Ae
          }
          constructor() {
              this.name = "ttap_plugin",
              this.slardarClient = void 0
          }
      }
      const Ie = new s;
      Ie._inject(new u),
      Ie.use(new Ae),
      Ie.use(new class {
          onBeforeInit(e) {
              !function(e) {
                  void 0 === e.plugins && (e.plugins = {});
                  const t = e.plugins.ajax;
                  if (void 0 === t)
                      e.plugins.ajax = {
                          extraExtractor: (...e) => A(void 0, ...e),
                          ignoreUrls: b
                      };
                  else if ("boolean" != typeof t) {
                      const e = t.extraExtractor;
                      t.extraExtractor = function t(n, r, o) {
                          return A(e?.name === t.name ? void 0 : e, n, r, o)
                      }
                      ,
                      t.ignoreUrls = I(t.ignoreUrls, b)
                  }
                  const n = e.plugins.fetch;
                  if (void 0 === n)
                      e.plugins.fetch = {
                          extraExtractor: (...e) => A(void 0, ...e),
                          ignoreUrls: b
                      };
                  else if ("boolean" != typeof n) {
                      const e = n.extraExtractor;
                      n.extraExtractor = function t(n, r, o) {
                          return A(e?.name === t.name ? void 0 : e, n, r, o)
                      }
                      ,
                      n.ignoreUrls = I(n.ignoreUrls, b)
                  }
              }(e.data)
          }
          onCreate() {
              return this
          }
          constructor() {
              this.name = "Reliability_ajax_fetch"
          }
      }
      )
  }
  ,
  495166: (e, t, n) => {
      "use strict";
      n.d(t, {
          default: () => Y
      });
      var r = {};
      n.r(r),
      n.d(r, {
          getConsent: () => Z,
          loadCookieBanner: () => z,
          setDisabled: () => U,
          updateBannerLocale: () => V
      });
      var o = n(835254)
        , i = n.n(o);
      function a(e, t, n, r, o, i, a) {
          try {
              var s = e[i](a)
                , c = s.value
          } catch (e) {
              return void n(e)
          }
          s.done ? t(c) : Promise.resolve(c).then(r, o)
      }
      function s(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      function c() {
          var e;
          return e = function*(e) {
              const {rawResponse: t=!1} = e
                , n = function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {}
                        , r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                          return Object.getOwnPropertyDescriptor(n, e).enumerable
                      }
                      )))),
                      r.forEach((function(t) {
                          s(e, t, n[t])
                      }
                      ))
                  }
                  return e
              }({}, {
                  url: "",
                  method: "GET",
                  params: {},
                  config: {
                      timeout: 6e4
                  }
              }, function(e, t) {
                  if (null == e)
                      return {};
                  var n, r, o = function(e, t) {
                      if (null == e)
                          return {};
                      var n, r, o = {}, i = Object.keys(e);
                      for (r = 0; r < i.length; r++)
                          n = i[r],
                          t.indexOf(n) >= 0 || (o[n] = e[n]);
                      return o
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      for (r = 0; r < i.length; r++)
                          n = i[r],
                          t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                  }
                  return o
              }(e, ["rawResponse"]));
              try {
                  const e = yield i()(n);
                  if (t)
                      return e;
                  var r, o;
                  const a = null !== (o = null !== (r = e.data.statusCode) && void 0 !== r ? r : e.data.code) && void 0 !== o ? o : e.data.status;
                  if (0 === a || 200 === a)
                      return e.data.body;
                  throw new Error(`web-privacy-sdk fetch error response=${JSON.stringify(e)}`)
              } catch (e) {
                  if (i().isCancel(e))
                      return null;
                  throw e
              }
          }
          ,
          c = function() {
              var t = this
                , n = arguments;
              return new Promise((function(r, o) {
                  var i = e.apply(t, n);
                  function s(e) {
                      a(i, r, o, s, c, "next", e)
                  }
                  function c(e) {
                      a(i, r, o, s, c, "throw", e)
                  }
                  s(void 0)
              }
              ))
          }
          ,
          c.apply(this, arguments)
      }
      const l = 345918
        , u = "default"
        , d = 1988
        , f = "https://www.tiktok.com"
        , h = !0
        , m = "en"
        , p = {
          channel: "sg",
          channel_type: "tcpy"
      };
      function g(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      let v = null
        , y = {};
      function b(e) {
          return e !== Object(e)
      }
      function C(e, t) {
          if (e === t)
              return !0;
          if (b(e) && b(t))
              return e === t;
          if (Object.keys(e).length !== Object.keys(t).length)
              return !1;
          for (const n in e) {
              if (!(n in t))
                  return !1;
              if (!C(e[n], t[n]))
                  return !1
          }
          return !0
      }
      function w(e) {
          return "undefined" == typeof window ? Promise.resolve(null) : (e = e ? function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {}
                    , r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }
                  )))),
                  r.forEach((function(t) {
                      g(e, t, n[t])
                  }
                  ))
              }
              return e
          }({}, y, e) : y,
          v && C(e, y) || (y = e,
          v = function(e) {
              const {locale: t=m, appId: n=d, theme: r=u, enableTea: o=h, apiDomain: i=f} = e;
              return function(e) {
                  return c.apply(this, arguments)
              }({
                  url: `${i}/api/v1/web-cookie-privacy/config`,
                  params: {
                      locale: t,
                      appId: n,
                      theme: r,
                      tea: o ? 1 : 0
                  },
                  withCredentials: !0,
                  headers: {
                      "x-web-privacy-sdk-ver": "1.0.1",
                      "x-pns-referrer": `${location.protocol}//${location.host}${location.pathname}`
                  }
              })
          }(e)),
          v)
      }
      function A() {
          return y
      }
      var I = n(115829);
      function F(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      function L(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }
              )))),
              r.forEach((function(t) {
                  F(e, t, n[t])
              }
              ))
          }
          return e
      }
      const M = "undefined" != typeof window ? new I.Collector("cookie_banner_tea_sdk") : null;
      let B = !1;
      function k(e, t={}) {
          if (!B || !M)
              return;
          const n = `${location.protocol}//${location.host}${location.pathname}`;
          M.event(e, L({
              page_url: n,
              host: location.host,
              user_agent: navigator.userAgent,
              referrer: n,
              loader_version: "1.0.1"
          }, t))
      }
      function D(e, t, n, r, o, i, a) {
          try {
              var s = e[i](a)
                , c = s.value
          } catch (e) {
              return void n(e)
          }
          s.done ? t(c) : Promise.resolve(c).then(r, o)
      }
      function _(e) {
          return function() {
              var t = this
                , n = arguments;
              return new Promise((function(r, o) {
                  var i = e.apply(t, n);
                  function a(e) {
                      D(i, r, o, a, s, "next", e)
                  }
                  function s(e) {
                      D(i, r, o, a, s, "throw", e)
                  }
                  a(void 0)
              }
              ))
          }
      }
      function S(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      function E(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }
              )))),
              r.forEach((function(t) {
                  S(e, t, n[t])
              }
              ))
          }
          return e
      }
      function G(e, t) {
          return t = null != t ? t : {},
          Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e) {
              var t = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, n)
              }
              return t
          }(Object(t)).forEach((function(n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
          )),
          e
      }
      let T, j, H = !1, R = !1, x = "";
      const P = "tiktok-cookie-banner-config"
        , O = ["enableTea", "theme", "appId", "apiDomain"];
      let J = ""
        , N = [];
      function z() {
          return K.apply(this, arguments)
      }
      function K() {
          return (K = _((function*(e={}) {
              if (H || "undefined" == typeof window)
                  return;
              const t = document.getElementsByTagName("tiktok-cookie-banner");
              if (null == t ? void 0 : t.length)
                  return;
              H = !0;
              const {locale: n=A().locale, enableTea: r=h} = e;
              e.consentApiDomain && (J = e.consentApiDomain),
              e.customTheme && (N = e.customTheme);
              const o = {};
              for (const t of O) {
                  const n = e[t];
                  void 0 !== n && Reflect.set(o, t, n)
              }
              n && (j = n,
              Reflect.set(o, "locale", n));
              try {
                  var i;
                  const t = yield w(o);
                  if (!t)
                      return;
                  r && function(e) {
                      if (B || !M)
                          return;
                      B = !0;
                      const t = null != e ? e : p;
                      M.init(L({
                          app_id: l
                      }, t)),
                      M.start()
                  }(null == t ? void 0 : t.tea);
                  let n = document.getElementById(P);
                  n || (n = document.createElement("script"),
                  n.id = P,
                  n.setAttribute("type", "application/json"),
                  document.body.appendChild(n)),
                  n.textContent = JSON.stringify(G(E({}, t), {
                      consentApiDomain: J,
                      customTheme: N
                  }));
                  const a = null == t || null === (i = t.cookieBanner) || void 0 === i ? void 0 : i.resource;
                  if (!a)
                      return;
                  if (T)
                      return;
                  const {baseUrl: s, esm: c} = a;
                  !function(e) {
                      const t = document.createElement("script");
                      t.src = e,
                      k("cookie_banner_cdn_load", {
                          resource_url: e
                      }),
                      t.crossOrigin = "anonymous",
                      t.onerror = () => k("cookie_banner_cdn_load_failed", {
                          resource_url: e
                      }),
                      document.body.appendChild(t)
                  }(`${s}${c}`),
                  T = document.createElement("tiktok-cookie-banner"),
                  T.setAttribute("locale", j),
                  T.setAttribute("user-config-ele-id", P),
                  T.setAttribute("disabled", `${R}`),
                  T.setAttribute("disabled-access-key", `${x}`),
                  T.addEventListener("bannerEvents", (t => {
                      const {detail: n} = t;
                      if (!n || "string" != typeof n.type)
                          return;
                      let {type: r, payload: o} = n;
                      Array.isArray(o) || (o = [o]);
                      const i = `on${r.replace(/^\w/, (e => e.toUpperCase()))}`;
                      "function" == typeof e[i] && e[i](...o)
                  }
                  )),
                  document.body.appendChild(T)
              } catch (e) {
                  console.error(e)
              }
          }
          ))).apply(this, arguments)
      }
      function V(e) {
          return W.apply(this, arguments)
      }
      function W() {
          return (W = _((function*(e) {
              try {
                  if (!H)
                      return;
                  j = e;
                  const t = yield w({
                      locale: e
                  });
                  if (!t || e !== j)
                      return;
                  let n = document.getElementById(P);
                  n || (n = document.createElement("script"),
                  n.id = P,
                  n.setAttribute("type", "application/json"),
                  document.body.appendChild(n)),
                  n.textContent = JSON.stringify(G(E({}, t), {
                      consentApiDomain: J,
                      customTheme: N
                  })),
                  T && T.setAttribute("locale", e)
              } catch (e) {
                  console.error(e)
              }
          }
          ))).apply(this, arguments)
      }
      function U(e, t) {
          k("cookie_banner_set_disabled", {
              disabled: e ? 1 : 0
          }),
          R = e,
          x = t,
          T && (T.setAttribute("disabled", `${e}`),
          T.setAttribute("disabled-access-key", `${t}`))
      }
      function Z(e) {
          if ("function" != typeof e)
              return;
          let t = T;
          var n;
          t || (t = null === (n = document.getElementsByTagName("tiktok-cookie-banner")) || void 0 === n ? void 0 : n[0]),
          t && t.addEventListener("getConsent", (t => {
              const {detail: n} = t;
              if (!n)
                  return;
              let {cookieConsent: r, consentOptions: o} = n.payload || {};
              e(r, o)
          }
          ))
      }
      var Y = r
  }
  ,
  919127: (e, t, n) => {
      e.exports = n(372753)
  }
  ,
  372753: (e, t, n) => {
      var r = n(258006);
      function o() {
          if (!(this instanceof o))
              return new o;
          this.stemmer = r,
          this.docs = [],
          this.lastAdded = 0,
          this.features = {},
          this.classFeatures = {},
          this.classTotals = {},
          this.totalExamples = 1,
          this.smoothing = 1
      }
      o.prototype.addDocument = function(e, t) {
          if (this._size(e)) {
              this._isString(e) && (e = this.stemmer.tokenizeAndStem(e));
              var n = {
                  label: t,
                  value: e
              };
              this.docs.push(n);
              for (var r = 0; r < e.length; r++)
                  this.features[e[r]] = 1
          }
      }
      ,
      o.prototype.addDocuments = function(e, t) {
          for (var n = 0; n < e.length; n++)
              this.addDocument(e[n], t)
      }
      ,
      o.prototype.docToFeatures = function(e) {
          var t = [];
          for (var n in this._isString(e) && (e = this.stemmer.tokenizeAndStem(e)),
          this.features)
              t.push(Number(!!~e.indexOf(n)));
          return t
      }
      ,
      o.prototype.classify = function(e) {
          var t = this.getClassifications(e);
          if (!this._size(t))
              throw "Not trained";
          return t[0].label
      }
      ,
      o.prototype.train = function() {
          for (var e = this.docs.length, t = this.lastAdded; t < e; t++) {
              var n = this.docToFeatures(this.docs[t].value);
              this.addExample(n, this.docs[t].label),
              this.lastAdded++
          }
      }
      ,
      o.prototype.addExample = function(e, t) {
          if (this.classFeatures[t] || (this.classFeatures[t] = {},
          this.classTotals[t] = 1),
          this.totalExamples++,
          this._isArray(e)) {
              var n = e.length;
              for (this.classTotals[t]++; n--; )
                  e[n] && (this.classFeatures[t][n] ? this.classFeatures[t][n]++ : this.classFeatures[t][n] = 1 + this.smoothing)
          } else
              for (var r in e)
                  value = e[r],
                  this.classFeatures[t][value] ? this.classFeatures[t][value]++ : this.classFeatures[t][value] = 1 + this.smoothing
      }
      ,
      o.prototype.probabilityOfClass = function(e, t) {
          var n = 0
            , r = 0;
          if (this._isArray(e))
              for (var o = e.length; o--; )
                  e[o] && (n = this.classFeatures[t][o] || this.smoothing,
                  r += Math.log(n / this.classTotals[t]));
          else
              for (var i in e)
                  n = this.classFeatures[t][e[i]] || this.smoothing,
                  r += Math.log(n / this.classTotals[t]);
          return this.classTotals[t] / this.totalExamples * Math.exp(r)
      }
      ,
      o.prototype.getClassifications = function(e) {
          var t = [];
          for (var n in this.classFeatures)
              t.push({
                  label: n,
                  value: this.probabilityOfClass(this.docToFeatures(e), n)
              });
          return t.sort((function(e, t) {
              return t.value - e.value
          }
          ))
      }
      ,
      o.prototype.restore = function(e) {
          return this.docs = e.docs,
          this.lastAdded = e.lastAdded,
          this.features = e.features,
          this.classFeatures = e.classFeatures,
          this.classTotals = e.classTotals,
          this.totalExamples = e.totalExamples,
          this.smoothing = e.smoothing,
          this.stemmer = r,
          this
      }
      ,
      o.prototype._isString = function(e) {
          return "string" == typeof e || e instanceof String
      }
      ,
      o.prototype._isArray = function(e) {
          return Array.isArray(e)
      }
      ,
      o.prototype._isObject = function(e) {
          return e instanceof Object
      }
      ,
      o.prototype._size = function(e) {
          return this._isArray(e) || this._isString(e) || this._isObject(e) ? e.length : 0
      }
      ,
      "undefined" != typeof window && (window.BayesClassifier = o),
      e.exports = o
  }
  ,
  258006: e => {
      function t(e) {
          return e.replace(/[^aeiou]+/g, "C").replace(/[aeiouy]+/g, "V")
      }
      function n(e) {
          return e.replace(/[^aeiou]/g, "C").replace(/[aeiouy]/g, "V")
      }
      function r(e) {
          return e ? t(e).replace(/^C/, "").replace(/V$/, "").length / 2 : -1
      }
      function o(e) {
          return e.match(/([^aeiou])\1$/)
      }
      function i(e, t, n, r) {
          var o = null;
          return "string" == typeof t && e.substr(0 - t.length) == t ? o = e.replace(new RegExp(t + "$"), n) : t instanceof RegExp && e.match(t) && (o = e.replace(t, n)),
          o && r ? r(o) : o
      }
      function a(e, t, n) {
          for (var o = null, a = 0; a < t.length && ((!n || r(i(e, t[a][0], "")) > n) && (o = i(e, t[a][0], t[a][1])),
          !o); a++)
              ;
          return o
      }
      function s(e, t, n) {
          return a(e, t, n) || e
      }
      var c = function() {};
      c.stopwords = ["about", "after", "all", "also", "am", "an", "and", "another", "any", "are", "as", "at", "be", "because", "been", "before", "being", "between", "both", "but", "by", "came", "can", "come", "could", "did", "do", "each", "for", "from", "get", "got", "has", "had", "he", "have", "her", "here", "him", "himself", "his", "how", "if", "in", "into", "is", "it", "like", "make", "many", "me", "might", "more", "most", "much", "must", "my", "never", "now", "of", "on", "only", "or", "other", "our", "out", "over", "said", "same", "see", "should", "since", "some", "still", "such", "take", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "those", "through", "to", "too", "under", "up", "very", "was", "way", "we", "well", "were", "what", "where", "which", "while", "who", "with", "would", "you", "your", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "$", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "_"],
      c.prototype.trim = function(e) {
          for (; "" === e[e.length - 1]; )
              e.pop();
          for (; "" === e[0]; )
              e.shift();
          return e
      }
      ,
      c.prototype.tokenize = function(e) {
          return this.trim(e.split(/\W+/))
      }
      ;
      var l = function() {};
      l.prototype.stem = function(e) {
          return function(e) {
              return r(e) > 1 && o(e) && "ll" == e.substr(-2) ? e.replace(/ll$/, "l") : e
          }(function(e) {
              var t = r(e);
              return e.length > 3 && (t > 1 && "e" == e.substr(-1) || 1 == t && ("CVC" != n(e).substr(-4, 3) || !e.match(/[^wxy].$/))) ? e.replace(/e$/, "") : e
          }(function(e) {
              return s(e, [["al", ""], ["ance", ""], ["ence", ""], ["er", ""], ["ic", ""], ["able", ""], ["ible", ""], ["ant", ""], ["ement", ""], ["ment", ""], ["ent", ""], [/([st])ion/, "$1"], ["ou", ""], ["ism", ""], ["ate", ""], ["iti", ""], ["ous", ""], ["ive", ""], ["ize", ""]], 1)
          }(function(e) {
              return s(e, [["icate", "ic"], ["ative", ""], ["alize", "al"], ["iciti", "ic"], ["ical", "ic"], ["ful", ""], ["ness", ""]], 0)
          }(function(e) {
              return s(e, [["ational", "ate"], ["tional", "tion"], ["enci", "ence"], ["anci", "ance"], ["izer", "ize"], ["abli", "able"], ["alli", "al"], ["entli", "ent"], ["eli", "e"], ["ousli", "ous"], ["ization", "ize"], ["ation", "ate"], ["ator", "ate"], ["alism", "al"], ["iveness", "ive"], ["fulness", "ful"], ["ousness", "ous"], ["aliti", "al"], ["iviti", "ive"], ["biliti", "ble"]], 0)
          }(function(e) {
              return "V" == t(e).substr(-2, 1) && "y" == e.substr(-1) ? e.replace(/y$/, "i") : e
          }(function(e) {
              if ("eed" == e.substr(-3)) {
                  if (r(e.substr(0, e.length - 3)) > 0)
                      return e.replace(/eed$/, "ee")
              } else {
                  var s = i(e, /ed|ing$/, "", (function(e) {
                      return t(e).indexOf("V") >= 0 ? a(e, [["at", "ate"], ["bl", "ble"], ["iz", "ize"]]) || (o(e) && e.match(/[^lsz]$/) ? e.replace(/([^aeiou])\1$/, "$1") : 1 == r(e) && "CVC" == n(e).substr(-3) && e.match(/[^wxy]$/) ? e + "e" : e) : null
                  }
                  ));
                  if (s)
                      return s
              }
              return e
          }(function(e) {
              return e.match(/(ss|i)es$/) ? e.replace(/(ss|i)es$/, "$1") : "s" == e.substr(-1) && "s" != e.substr(-2, 1) && e.length > 3 ? e.replace(/s?$/, "") : e
          }(e.toLowerCase())))))))).toString()
      }
      ,
      l.prototype.addStopWord = function(e) {
          c.stopwords.push(e)
      }
      ,
      l.prototype.addStopWords = function(e) {
          c.stopwords = c.stopwords.concat(e)
      }
      ,
      l.prototype.tokenizeAndStem = function(e, t) {
          var n = [];
          return (new c).tokenize(e).forEach(function(e) {
              (t || -1 == c.stopwords.indexOf(e)) && n.push(this.stem(e))
          }
          .bind(this)),
          n
      }
      ,
      e.exports = new l
  }
  ,
  588568: (e, t, n) => {
      "use strict";
      n.d(t, {
          A: () => C
      });
      var r = function() {
          return r = Object.assign || function(e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in t = arguments[n])
                      Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e
          }
          ,
          r.apply(this, arguments)
      }
        , o = {
          [a("Abidjan")]: [-5.55, 7.53],
          [a("Accra")]: [-1.19, 7.83],
          [a("Addis_Ababa")]: [39.62, 8.64],
          [a("Algiers")]: [2.68, 28.26],
          [a("Asmara")]: [39.26, 15.4],
          [a("Bamako")]: [-3.52, 17.35],
          [a("Bangui")]: [20.49, 6.57],
          [a("Banjul")]: [-15.62, 13.44],
          [a("Bissau")]: [-15.36, 11.8],
          [a("Blantyre")]: [34.3, -13.21],
          [a("Brazzaville")]: [15.18, -.88],
          [a("Bujumbura")]: [29.89, -3.36],
          [a("Cairo")]: [30.09, 26.57],
          [a("Casablanca")]: [-6.44, 31.9],
          [a("Ceuta")]: [-4.34, 35.64],
          [a("Conakry")]: [-11.07, 10.42],
          [a("Dakar")]: [-14.62, 14.37],
          [a("Dar_es_Salaam")]: [35.03, -6.3],
          [a("Djibouti")]: [42.71, 11.78],
          [a("Douala")]: [12.69, 5.65],
          [a("El_Aaiun")]: [-13.33, 24.62],
          [a("Freetown")]: [-11.93, 8.46],
          [a("Gaborone")]: [23.81, -22.19],
          [a("Harare")]: [29.87, -19],
          [a("Johannesburg")]: [12.71, -50.61],
          [a("Juba")]: [30.2, 7.36],
          [a("Kampala")]: [32.39, 1.28],
          [a("Khartoum")]: [30.06, 16.03],
          [a("Kigali")]: [29.93, -2],
          [a("Kinshasa")]: [19.22, -1.6],
          [a("Lagos")]: [8.05, 9.5],
          [a("Libreville")]: [11.62, -.65],
          [a("Lome")]: [.99, 8.49],
          [a("Luanda")]: [17.41, -12.27],
          [a("Lubumbashi")]: [25.82, -3.5],
          [a("Lusaka")]: [27.79, -13.46],
          [a("Malabo")]: [9.75, 1.78],
          [a("Maputo")]: [35.7, -17.38],
          [a("Maseru")]: [28.25, -29.58],
          [a("Mbabane")]: [31.5, -26.57],
          [a("Mogadishu")]: [46.01, 6.16],
          [a("Monrovia")]: [-9.35, 6.33],
          [a("Nairobi")]: [37.92, .45],
          [a("Ndjamena")]: [18.67, 15.38],
          [a("Niamey")]: [9.4, 17.42],
          [a("Nouakchott")]: [-10.42, 20.24],
          [a("Ouagadougou")]: [-1.75, 12.27],
          [a("Porto-Novo")]: [2.34, 9.58],
          [a("Sao_Tome")]: [6.95, .84],
          [a("Tripoli")]: [18.05, 27.16],
          [a("Tunis")]: [9.77, 34.38],
          [a("Windhoek")]: [17.1, -22.18],
          [s("Adak")]: [-36.33, 52.15],
          [s("Anchorage")]: [-152.31, 64.32],
          [s("Anguilla")]: [-63.22, 18.4],
          [s("Antigua")]: [-61.87, 17.29],
          [s("Aruba")]: [-69.97, 12.54],
          [s("Araguaina")]: [-48.33, -10.15],
          [s("Argentina/Buenos_Aires")]: [-60.35, -36.8],
          [s("Argentina/Catamarca")]: [-67.85, -39.82],
          [s("Argentina/Cordoba")]: [-61.07, -29.26],
          [s("Argentina/Jujuy")]: [-65.76, -23.32],
          [s("Argentina/La_Rioja")]: [-67.18, -29.68],
          [s("Argentina/Mendoza")]: [-68.58, -34.63],
          [s("Argentina/Rio_Gallegos")]: [-69.59, -48.74],
          [s("Argentina/Salta")]: [-66.62, -35.78],
          [s("Argentina/San_Juan")]: [-68.89, -30.86],
          [s("Argentina/San_Luis")]: [-66.03, -33.76],
          [s("Argentina/Tucuman")]: [-65.36, -26.95],
          [s("Argentina/Ushuaia")]: [-53.88, -77.02],
          [s("Asuncion")]: [-58.39, -23.24],
          [s("Atikokan")]: [-85.11, 62.07],
          [s("Bahia")]: [-41.59, -12.6],
          [s("Bahia_Banderas")]: [-105.48, 20.82],
          [s("Barbados")]: [-59.56, 13.18],
          [s("Belem")]: [-50.35, -2.8],
          [s("Belize")]: [-88.44, 17.22],
          [s("Blanc-Sablon")]: [-60.57, 50.58],
          [s("Boa_Vista")]: [-61.39, 2.08],
          [s("Bogota")]: [-73.4, 4.31],
          [s("Boise")]: [-114.62, 43.57],
          [s("Cambridge_Bay")]: [-104.36, 70.71],
          [s("Campo_Grande")]: [-54.85, -20.33],
          [s("Cancun")]: [-87.84, 19.71],
          [s("Caracas")]: [-66.18, 7.78],
          [s("Cayenne")]: [-53.18, 4.05],
          [s("Cayman")]: [-80.61, 19.51],
          [s("Chicago")]: [-94.7, 37.9],
          [s("Chihuahua")]: [-106.56, 28.36],
          [s("Costa_Rica")]: [-84.3, 9.78],
          [s("Creston")]: [-116.47, 49.27],
          [s("Cuiaba")]: [-55.91, -12.95],
          [s("Curacao")]: [-68.94, 12.17],
          [s("Danmarkshavn")]: [-20.1, 74.22],
          [s("Dawson")]: [-139.5, 64.98],
          [s("Dawson_Creek")]: [-121.78, 56.48],
          [s("Denver")]: [-107.48, 41.32],
          [s("Detroit")]: [-85.6, 44.82],
          [s("Dominica")]: [-61.35, 15.4],
          [s("Edmonton")]: [-114.56, 54.91],
          [s("Eirunepe")]: [-70.72, -6.52],
          [s("El_Salvador")]: [-88.86, 13.65],
          [s("Fort_Nelson")]: [-123.44, 59.08],
          [s("Fortaleza")]: [-42.38, -5.8],
          [s("Glace_Bay")]: [-60.88, 46.17],
          [s("Goose_Bay")]: [-61.92, 54.64],
          [s("Grand_Turk")]: [-71.77, 21.54],
          [s("Grenada")]: [-61.63, 12.19],
          [s("Guadeloupe")]: [-61.44, 16.19],
          [s("Guatemala")]: [-90.36, 15.65],
          [s("Guayaquil")]: [-78.67, -1.44],
          [s("Guyana")]: [-58.95, 4.91],
          [s("Halifax")]: [-63.32, 46.02],
          [s("Havana")]: [-79.55, 21.64],
          [s("Hermosillo")]: [-111.06, 29.63],
          [s("Indiana/Indianapolis")]: [-86.07, 40.09],
          [s("Indiana/Knox")]: [-86.65, 41.28],
          [s("Indiana/Marengo")]: [-86.45, 38.29],
          [s("Indiana/Petersburg")]: [-87.23, 38.4],
          [s("Indiana/Tell_City")]: [-86.64, 38.08],
          [s("Indiana/Vevay")]: [-85.04, 38.83],
          [s("Indiana/Vincennes")]: [-87.08, 38.62],
          [s("Indiana/Winamac")]: [-86.7, 41.04],
          [s("Inuvik")]: [-125.73, 67.7],
          [s("Iqaluit")]: [-77.82, 69.4],
          [s("Jamaica")]: [-77.33, 17.73],
          [s("Juneau")]: [-135.22, 58.37],
          [s("Kentucky/Louisville")]: [-85.85, 38.28],
          [s("Kentucky/Monticello")]: [-84.83, 36.8],
          [s("Kralendijk")]: [-66.12, 14.48],
          [s("La_Paz")]: [-64.66, -16.71],
          [s("Lima")]: [-76.15, -10.27],
          [s("Los_Angeles")]: [-119.31, 41.22],
          [s("Lower_Princes")]: [-63.1, 17.94],
          [s("Maceio")]: [-36.86, -10.02],
          [s("Managua")]: [-85.02, 12.83],
          [s("Manaus")]: [-63.85, -3.84],
          [s("Marigot")]: [-63.08, 18.07],
          [s("Martinique")]: [-61.01, 14.65],
          [s("Matamoros")]: [-101.04, 27.79],
          [s("Mazatlan")]: [-109.56, 24.86],
          [s("Miquelon")]: [-56.36, 46.92],
          [s("Menominee")]: [-88.49, 46.07],
          [s("Merida")]: [-89.92, 19.87],
          [s("Metlakatla")]: [-131.5, 55.13],
          [s("Mexico_City")]: [-99.08, 19.39],
          [s("Moncton")]: [-66.06, 46.61],
          [s("Monterrey")]: [-102, 25.27],
          [s("Montevideo")]: [-55.99, -33.04],
          [s("Montserrat")]: [-62.18, 16.72],
          [s("Nassau")]: [-76.6, 23.86],
          [s("New_York")]: [-78.63, 37.72],
          [s("Nipigon")]: [-84.06, 49.79],
          [s("Nome")]: [-165.02, 62.83],
          [s("Noronha")]: [-32.44, -3.83],
          [s("North_Dakota/Beulah")]: [-101.83, 47.31],
          [s("North_Dakota/Center")]: [-101.34, 47.12],
          [s("North_Dakota/New_Salem")]: [-101.28, 46.72],
          [s("Nuuk")]: [-40.26, 74.69],
          [s("Ojinaga")]: [-106.15, 30.41],
          [s("Panama")]: [-80.15, 8.45],
          [s("Pangnirtung")]: [-65.51, 68.33],
          [s("Paramaribo")]: [-55.89, 4.24],
          [s("Phoenix")]: [-111.88, 34],
          [s("Port-au-Prince")]: [-72.98, 18.92],
          [s("Port_of_Spain")]: [-61.13, 10.66],
          [s("Porto_Velho")]: [-62.84, -10.91],
          [s("Puerto_Rico")]: [-66.53, 18.21],
          [s("Punta_Arenas")]: [-69.71, -54.85],
          [s("Rainy_River")]: [-92.16, 51.9],
          [s("Rankin_Inlet")]: [-92.38, 69.91],
          [s("Recife")]: [-37.89, -8.32],
          [s("Regina")]: [-104.35, 54.28],
          [s("Resolute")]: [-94.86, 75.11],
          [s("Rio_Branco")]: [-70.47, -9.21],
          [s("Santarem")]: [-55.2, -3.75],
          [s("Santiago")]: [-71.73, -34.86],
          [s("Santo_Domingo")]: [-70.2, 19.29],
          [s("Sao_Paulo")]: [-48.33, -21.8],
          [s("Scoresbysund")]: [-22.86, 71.15],
          [s("Sitka")]: [-133.1, 56.13],
          [s("St_Barthelemy")]: [-62.8, 17.88],
          [s("St_Johns")]: [-56.25, 49.14],
          [s("St_Kitts")]: [-62.68, 17.24],
          [s("St_Lucia")]: [-60.97, 13.89],
          [s("St_Thomas")]: [-64.81, 17.95],
          [s("St_Vincent")]: [-61.24, 13.03],
          [s("Swift_Current")]: [-108.4, 54.67],
          [s("Tegucigalpa")]: [-86.15, 15.11],
          [s("Thule")]: [-67.21, 77.49],
          [s("Thunder_Bay")]: [-89.11, 48.35],
          [s("Tijuana")]: [-115.01, 30.27],
          [s("Toronto")]: [-72.19, 53.16],
          [s("Tortola")]: [-64.45, 18.56],
          [s("Vancouver")]: [-126.03, 54.01],
          [s("Whitehorse")]: [-133.69, 63.14],
          [s("Winnipeg")]: [-97.44, 54.88],
          [s("Yakutat")]: [-139.34, 59.6],
          [s("Yellowknife")]: [-113.29, 68.02],
          [c("Casey")]: [108.15, -67.24],
          [c("Davis")]: [81.86, -76.23],
          [c("DumontDUrville")]: [140, -67.5],
          [c("Macquarie")]: [158.83, -54.73],
          [c("Mawson")]: [65.88, -75.97],
          [c("McMurdo")]: [3.87, -84.89],
          [c("Palmer")]: [-64.54, -64.66],
          [c("Rothera")]: [-50.44, -77.67],
          [c("Syowa")]: [40.5, -75.97],
          [c("Troll")]: [12.5, -77],
          [c("Vostok")]: [99.48, -76.76],
          [i("Arctic", "Longyearbyen")]: [19.33, 78.68],
          [l("Aden")]: [47.58, 15.66],
          [l("Almaty")]: [73.98, 48.3],
          [l("Amman")]: [36.79, 31.24],
          [l("Anadyr")]: [98.73, 66.64],
          [l("Aqtau")]: [53.7, 44.14],
          [l("Aqtobe")]: [58.6, 48.6],
          [l("Ashgabat")]: [59.06, 39.2],
          [l("Atyrau")]: [52.06, 47.49],
          [l("Baghdad")]: [43.78, 33.04],
          [l("Bahrain")]: [50.61, 26.11],
          [l("Baku")]: [47.8, 40.27],
          [l("Bangkok")]: [101.91, 15.66],
          [l("Barnaul")]: [84.14, 51.96],
          [l("Beirut")]: [35.74, 33.93],
          [l("Bishkek")]: [74.52, 41.46],
          [l("Brunei")]: [114.73, 4.57],
          [l("Chita")]: [116.2, 52.85],
          [l("Choibalsan")]: [114.7, 47.4],
          [l("Colombo")]: [80.64, 7.75],
          [l("Damascus")]: [38.46, 35.04],
          [l("Dhaka")]: [90.33, 23.67],
          [l("Dili")]: [125.98, -8.77],
          [l("Dubai")]: [54.1, 24.18],
          [l("Dushanbe")]: [71, 38.52],
          [l("Famagusta")]: [33.77, 35.43],
          [l("Gaza")]: [34.31, 31.48],
          [l("Hebron")]: [35.26, 31.95],
          [l("Ho_Chi_Minh")]: [107.27, 11.75],
          [l("Hong_Kong")]: [114.19, 22.34],
          [l("Hovd")]: [94.17, 47.33],
          [l("Irkutsk")]: [107.29, 56.06],
          [l("Jakarta")]: [105.07, -1.95],
          [l("Jayapura")]: [132.07, -3.52],
          [l("Jerusalem")]: [35.01, 31.65],
          [l("Kabul")]: [66.03, 33.83],
          [l("Kamchatka")]: [162.99, 58.68],
          [l("Karachi")]: [69.29, 29.85],
          [l("Kathmandu")]: [83.95, 28.26],
          [l("Khandyga")]: [136.37, 62.74],
          [l("Kolkata")]: [79.73, 22.28],
          [l("Krasnoyarsk")]: [95.67, 67.82],
          [l("Kuala_Lumpur")]: [102.21, 3.99],
          [l("Kuching")]: [114.84, 3.87],
          [l("Kuwait")]: [47.85, 29.3],
          [l("Macau")]: [113.58, 22.15],
          [l("Magadan")]: [154.07, 62.46],
          [l("Makassar")]: [120.34, -3.35],
          [l("Manila")]: [121.99, 10.86],
          [l("Muscat")]: [56.27, 20.63],
          [l("Nicosia")]: [33.01, 34.89],
          [l("Novokuznetsk")]: [87.21, 54.78],
          [l("Novosibirsk")]: [79.77, 55.28],
          [l("Omsk")]: [73.34, 56.1],
          [l("Oral")]: [50.67, 49.81],
          [l("Phnom_Penh")]: [104.73, 12.47],
          [l("Pontianak")]: [111.76, -1.53],
          [l("Pyongyang")]: [127.16, 40.05],
          [l("Qatar")]: [51.42, 25.4],
          [l("Qostanay")]: [64.02, 51.6],
          [l("Qyzylorda")]: [63.64, 45.19],
          [l("Riyadh")]: [44.35, 24.02],
          [l("Samarkand")]: [62.17, 41.93],
          [l("Sakhalin")]: [142.76, 50.08],
          [l("Seoul")]: [127.44, 35.95],
          [l("Shanghai")]: [104.35, 36.31],
          [l("Singapore")]: [103.93, 1.33],
          [l("Srednekolymsk")]: [150.18, 67.8],
          [l("Taipei")]: [120.76, 23.57],
          [l("Tashkent")]: [69.49, 40.73],
          [l("Tbilisi")]: [43.31, 42.21],
          [l("Tehran")]: [54.28, 32.37],
          [l("Thimphu")]: [90.43, 27.4],
          [l("Tokyo")]: [136.68, 36.11],
          [l("Tomsk")]: [82.14, 58.49],
          [l("Ulaanbaatar")]: [104.46, 46.49],
          [l("Urumqi")]: [85.18, 41.12],
          [l("Ust-Nera")]: [144.12, 59.03],
          [l("Vientiane")]: [103.77, 18.5],
          [l("Vladivostok")]: [137.75, 60.28],
          [l("Yakutsk")]: [121.77, 64.14],
          [l("Yangon")]: [96.49, 20.26],
          [l("Yekaterinburg")]: [68.6, 62.47],
          [l("Yerevan")]: [44.94, 40.29],
          [u("Azores")]: [-27.25, 38.28],
          [u("Bermuda")]: [-64.77, 32.32],
          [u("Canary")]: [-15.69, 28.42],
          [u("Cape_Verde")]: [-23.89, 15.97],
          [u("Faroe")]: [-6.88, 61.97],
          [u("Madeira")]: [-16.56, 32.21],
          [u("Reykjavik")]: [-19.07, 65.04],
          [u("South_Georgia")]: [-32.18, -56.08],
          [u("St_Helena")]: [-10.93, -28.68],
          [u("Stanley")]: [-59.68, -51.76],
          [d("Adelaide")]: [135.87, -30.37],
          [d("Brisbane")]: [144.65, -22.23],
          [d("Broken_Hill")]: [141.48, -31.92],
          [d("Currie")]: [143.98, -39.86],
          [d("Darwin")]: [133.38, -19.08],
          [d("Eucla")]: [127.05, -31.78],
          [d("Hobart")]: [146.72, -41.9],
          [d("Lindeman")]: [149.02, -20.28],
          [d("Lord_Howe")]: [159.16, -31.64],
          [d("Melbourne")]: [144.35, -36.92],
          [d("Perth")]: [133.69, -65.03],
          [d("Sydney")]: [147.11, -32.19],
          [function() {
              return i("Etc", "UTC")
          }()]: [-11.13, -77.99],
          [f("Amsterdam")]: [5.38, 52.39],
          [f("Andorra")]: [1.58, 42.55],
          [f("Astrakhan")]: [47.44, 46.9],
          [f("Athens")]: [24, 38.25],
          [f("Belgrade")]: [20.8, 44.03],
          [f("Berlin")]: [10.37, 51.32],
          [f("Bratislava")]: [19.48, 48.71],
          [f("Brussels")]: [4.58, 50.67],
          [f("Bucharest")]: [25.07, 45.81],
          [f("Budapest")]: [19.41, 47.17],
          [f("Busingen")]: [8.69, 47.7],
          [f("Chisinau")]: [28.46, 47.2],
          [f("Copenhagen")]: [10.44, 56],
          [f("Dublin")]: [-8.35, 53.18],
          [f("Gibraltar")]: [-5.34, 36.11],
          [f("Guernsey")]: [-2.49, 49.58],
          [f("Helsinki")]: [25.9, 64.25],
          [f("Isle_of_Man")]: [-4.56, 54.2],
          [f("Istanbul")]: [34.85, 39.1],
          [f("Jersey")]: [-2.19, 49.13],
          [f("Kaliningrad")]: [21.15, 54.77],
          [f("Kiev")]: [31.29, 49.18],
          [f("Kirov")]: [49.83, 58.68],
          [f("Lisbon")]: [-8.19, 39.5],
          [f("Ljubljana")]: [14.81, 46.11],
          [f("London")]: [-3.35, 54.73],
          [f("Luxembourg")]: [6.09, 49.78],
          [f("Madrid")]: [-3.24, 40.34],
          [f("Malta")]: [14.38, 35.94],
          [f("Mariehamn")]: [20.27, 60.16],
          [f("Minsk")]: [28.05, 53.54],
          [f("Monaco")]: [7.47, 43.64],
          [f("Moscow")]: [45.02, 62.16],
          [f("Oslo")]: [14.25, 65.08],
          [f("Paris")]: [2.34, 46.53],
          [f("Podgorica")]: [19.2, 42.7],
          [f("Prague")]: [15.33, 49.74],
          [f("Riga")]: [24.57, 56.93],
          [f("Rome")]: [12.45, 41.99],
          [f("Samara")]: [51.55, 55.08],
          [f("San_Marino")]: [12.46, 43.94],
          [f("Sarajevo")]: [17.79, 44.17],
          [f("Saratov")]: [46.8, 51.58],
          [f("Simferopol")]: [34.36, 45.22],
          [f("Skopje")]: [21.7, 41.6],
          [f("Sofia")]: [25.39, 42.76],
          [f("Stockholm")]: [16.91, 62.35],
          [f("Tallinn")]: [24.85, 58.71],
          [f("Tirane")]: [19.99, 41.1],
          [f("Ulyanovsk")]: [47.95, 53.89],
          [f("Uzhgorod")]: [23.28, 48.4],
          [f("Vaduz")]: [9.55, 47.14],
          [f("Vatican")]: [12.45, 41.9],
          [f("Vienna")]: [14.14, 47.59],
          [f("Vilnius")]: [23.8, 55.35],
          [f("Volgograd")]: [44.15, 49.62],
          [f("Warsaw")]: [19.32, 52.21],
          [f("Zagreb")]: [16.13, 44.54],
          [f("Zaporozhye")]: [35.77, 47.17],
          [f("Zurich")]: [8.23, 46.8],
          [h("Antananarivo")]: [46.71, -19.18],
          [h("Chagos")]: [71.85, -6.17],
          [h("Christmas")]: [105.63, -10.49],
          [h("Cocos")]: [96.85, -12.04],
          [h("Comoro")]: [43.8, -12.01],
          [h("Kerguelen")]: [66.21, -47.8],
          [h("Mahe")]: [52.33, -7.07],
          [h("Maldives")]: [73.19, 3.47],
          [h("Mauritius")]: [58.91, -17.88],
          [h("Mayotte")]: [45.11, -12.83],
          [h("Reunion")]: [55.53, -21.13],
          [m("Apia")]: [-172.12, -13.77],
          [m("Auckland")]: [167.68, -41.62],
          [m("Bougainville")]: [155.14, -4.94],
          [m("Chatham")]: [-176.39, -43.98],
          [m("Chuuk")]: [147.34, 7.89],
          [m("Easter")]: [-109.35, -27.13],
          [m("Efate")]: [168, -16.23],
          [m("Enderbury")]: [-172.13, -3.8],
          [m("Fakaofo")]: [-171.81, -9.07],
          [m("Fiji")]: [15.61, -17.96],
          [m("Funafuti")]: [175.57, -8.03],
          [m("Galapagos")]: [-90.74, -.15],
          [m("Gambier")]: [-135.6, -22.23],
          [m("Guadalcanal")]: [160.32, -9.1],
          [m("Guam")]: [144.77, 13.45],
          [m("Honolulu")]: [-159.58, 21.31],
          [m("Kiritimati")]: [-155.81, -2.5],
          [m("Kosrae")]: [162.97, 5.31],
          [m("Kwajalein")]: [167.39, 9.13],
          [m("Majuro")]: [168.48, 9.04],
          [m("Marquesas")]: [-139.66, -9.22],
          [m("Midway")]: [-177.75, 28.29],
          [m("Nauru")]: [166.94, -.53],
          [m("Niue")]: [-169.86, -19.05],
          [m("Norfolk")]: [167.95, -29.06],
          [m("Noumea")]: [164.81, -20.65],
          [m("Pago_Pago")]: [-170.34, -13.6],
          [m("Palau")]: [133.69, 6.29],
          [m("Pitcairn")]: [-128.47, -24.5],
          [m("Pohnpei")]: [156.91, 6.17],
          [m("Port_Moresby")]: [147.19, -5.68],
          [m("Rarotonga")]: [-160.35, -16.06],
          [m("Saipan")]: [145.59, 17.16],
          [m("Tahiti")]: [-144.82, -17.6],
          [m("Tarawa")]: [174.06, .08],
          [m("Tongatapu")]: [-175.18, -19.89],
          [m("Wake")]: [166.63, 19.3],
          [m("Wallis")]: [-177.1, -13.77]
      };
      function i(...e) {
          return e.join("/")
      }
      function a(e) {
          return i("Africa", e)
      }
      function s(e) {
          return i("America", e)
      }
      function c(e) {
          return i("Antarctica", e)
      }
      function l(e) {
          return i("Asia", e)
      }
      function u(e) {
          return i("Atlantic", e)
      }
      function d(e) {
          return i("Australia", e)
      }
      function f(e) {
          return i("Europe", e)
      }
      function h(e) {
          return i("Indian", e)
      }
      function m(e) {
          return i("Pacific", e)
      }
      var p = Math.PI
        , g = p / 180
        , v = 15 * g * 1.0027379
        , y = function(e) {
          return e > 0 ? 1 : e < 0 ? -1 : 0
      }
        , b = o
        , C = function(e) {
          var t = r(r({}, w()), e)
            , n = A(t.timeZone);
          if (!n)
              throw new Error('Timezone "'.concat(t.timeZone, '" not found'));
          var o = n[0]
            , i = n[1]
            , a = function(e, t, n) {
              var r = [0, 0]
                , o = [0, 0]
                , i = [0, 0]
                , a = [0, 0, 0]
                , s = [0, 0, 0]
                , c = [0, 0, 0]
                , l = function(e, t, n) {
                  var i, l, u, d, f, h, m, p, b, C, w = new Array(3);
                  return w[0] = t - a[0] + e * v,
                  w[2] = t - a[2] + e * v + v,
                  w[1] = (w[2] + w[0]) / 2,
                  s[1] = (s[2] + s[0]) / 2,
                  h = Math.sin(n * g),
                  u = Math.cos(n * g),
                  m = Math.cos(90.833 * g),
                  e <= 0 && (c[0] = h * Math.sin(s[0]) + u * Math.cos(s[0]) * Math.cos(w[0]) - m),
                  c[2] = h * Math.sin(s[2]) + u * Math.cos(s[2]) * Math.cos(w[2]) - m,
                  y(c[0]) == y(c[2]) || (c[1] = h * Math.sin(s[1]) + u * Math.cos(s[1]) * Math.cos(w[1]) - m,
                  i = 2 * c[0] - 4 * c[1] + 2 * c[2],
                  (d = (l = -3 * c[0] + 4 * c[1] - c[2]) * l - 4 * i * c[0]) < 0 || (((f = (-l + (d = Math.sqrt(d))) / (2 * i)) > 1 || f < 0) && (f = (-l - d) / (2 * i)),
                  C = e + f + 1 / 120,
                  p = Math.floor(C),
                  b = Math.floor(60 * (C - p)),
                  w[0],
                  w[2],
                  w[0],
                  c[0] < 0 && c[2] > 0 && (r[0] = p,
                  r[1] = b),
                  c[0] > 0 && c[2] < 0 && (o[0] = p,
                  o[1] = b))),
                  c[2]
              }
                , u = function(e, t) {
                  var n, r, o, a, s, c;
                  r = .779072 + .00273790931 * e,
                  r = 2 * (r -= Math.floor(r)) * p,
                  n = .993126 + .0027377785 * e,
                  n = 2 * (n -= Math.floor(n)) * p,
                  s = .39785 * Math.sin(r),
                  s -= .01 * Math.sin(r - n),
                  s += .00333 * Math.sin(r + n),
                  s -= 21e-5 * t * Math.sin(r),
                  a = 1 - .03349 * Math.cos(n),
                  a -= 14e-5 * Math.cos(2 * r),
                  a += 8e-5 * Math.cos(r),
                  c = -1e-4 - .04129 * Math.sin(2 * r),
                  c += .03211 * Math.sin(n),
                  c += .00104 * Math.sin(2 * r - n),
                  c -= 35e-5 * Math.sin(2 * r + n),
                  o = (c -= 8e-5 * t * Math.sin(n)) / Math.sqrt(a - s * s),
                  i[0] = r + Math.atan(o / Math.sqrt(1 - o * o)),
                  o = s / Math.sqrt(a),
                  i[1] = Math.atan(o / Math.sqrt(1 - o * o))
              }
                , d = Math.round(e.getTimezoneOffset() / 60)
                , f = function(e) {
                  var t, n, r, o = e.getMonth() + 1, i = e.getDate(), a = e.getFullYear();
                  return r = !(a < 1583),
                  1 != o && 2 != o || (a -= 1,
                  o += 12),
                  t = Math.floor(a / 100),
                  n = r ? 2 - t + Math.floor(t / 4) : 0,
                  Math.floor(365.25 * (a + 4716)) + Math.floor(30.6001 * (o + 1)) + i + n - 1524.5
              }(e) - 2451545
                , h = d / 24
                , m = f / 36525 + 1
                , b = function(e, t, n) {
                  var r = 24110.5 + 8640184.813 * t / 36525 + 86636.6 * n + 86400 * e;
                  return r /= 86400,
                  360 * (r -= Math.floor(r)) * g
              }(t /= 360, f, h);
              u(f += h, m);
              var C = i[0]
                , w = i[1];
              u(++f, m);
              var A = i[0]
                , I = i[1];
              A < C && (A += 2 * p),
              a[0] = C,
              s[0] = w;
              for (var F = 0; F < 24; ++F)
                  a[2] = C + (F + 1) * (A - C) / 24,
                  s[2] = w + (F + 1) * (I - w) / 24,
                  c[2] = l(F, b, n),
                  a[0] = a[2],
                  s[0] = s[2],
                  c[0] = c[2];
              var L = new Date(e.getTime())
                , M = new Date(e.getTime());
              return L.setHours(o[0]),
              L.setMinutes(o[1]),
              L.setSeconds(0),
              M.setHours(r[0]),
              M.setMinutes(r[1]),
              M.setSeconds(0),
              {
                  sunrise: M,
                  sunset: L
              }
          }(t.date, o, i)
            , s = a.sunrise
            , c = a.sunset
            , l = function(e) {
              var t = e[1]
                , n = function(e) {
                  var t = e.cycle
                    , n = e.start
                    , r = e.end;
                  return function(e) {
                      var o = Math.abs(n - r)
                        , i = n + o / 2
                        , a = r + (t - o) / 2
                        , s = r - t
                        , c = function(t, n) {
                          return (e - Math.min(t, n)) / Math.abs(t - n) / 2
                      };
                      return n <= e && e < i ? .5 + c(n, i) : i <= e && e < r ? 1 - c(i, r) : r <= e && e < a ? .5 - c(r, a) : s <= e && e < n ? c(s, n) : 0
                  }
              }({
                  cycle: 864e5,
                  start: e[0].valueOf(),
                  end: t.valueOf()
              });
              return function(e) {
                  return n(e.valueOf())
              }
          }([s, c])(t.date)
            , u = t.date < s || t.date > c;
          return {
              brightness: l,
              coordinates: n,
              dark: u,
              light: !u,
              sunrise: s,
              sunset: c,
              theme: u ? "night" : "day",
              timezone: t.timeZone
          }
      }
        , w = function() {
          return {
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              date: new Date
          }
      }
        , A = function(e) {
          return b[e]
      }
  }
  ,
  769566: (e, t, n) => {
      t.formatArgs = function(t) {
          if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff),
          !this.useColors)
              return;
          const n = "color: " + this.color;
          t.splice(1, 0, n, "color: inherit");
          let r = 0
            , o = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e => {
              "%%" !== e && (r++,
              "%c" === e && (o = r))
          }
          )),
          t.splice(o, 0, n)
      }
      ,
      t.save = function(e) {
          try {
              e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
          } catch (e) {}
      }
      ,
      t.load = function() {
          let e;
          try {
              e = t.storage.getItem("debug")
          } catch (e) {}
          return !e && "undefined" != typeof process && "env"in process && (e = process.env.DEBUG),
          e
      }
      ,
      t.useColors = function() {
          if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs))
              return !0;
          if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
              return !1;
          let e;
          return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
      }
      ,
      t.storage = function() {
          try {
              return localStorage
          } catch (e) {}
      }(),
      t.destroy = ( () => {
          let e = !1;
          return () => {
              e || (e = !0,
              console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
          }
      }
      )(),
      t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
      t.log = console.debug || console.log || ( () => {}
      ),
      e.exports = n(802017)(t);
      const {formatters: r} = e.exports;
      r.j = function(e) {
          try {
              return JSON.stringify(e)
          } catch (e) {
              return "[UnexpectedJSONParseError]: " + e.message
          }
      }
  }
  ,
  802017: (e, t, n) => {
      e.exports = function(e) {
          function t(e) {
              let n, o, i, a = null;
              function s(...e) {
                  if (!s.enabled)
                      return;
                  const r = s
                    , o = Number(new Date)
                    , i = o - (n || o);
                  r.diff = i,
                  r.prev = n,
                  r.curr = o,
                  n = o,
                  e[0] = t.coerce(e[0]),
                  "string" != typeof e[0] && e.unshift("%O");
                  let a = 0;
                  e[0] = e[0].replace(/%([a-zA-Z%])/g, ( (n, o) => {
                      if ("%%" === n)
                          return "%";
                      a++;
                      const i = t.formatters[o];
                      if ("function" == typeof i) {
                          const t = e[a];
                          n = i.call(r, t),
                          e.splice(a, 1),
                          a--
                      }
                      return n
                  }
                  )),
                  t.formatArgs.call(r, e),
                  (r.log || t.log).apply(r, e)
              }
              return s.namespace = e,
              s.useColors = t.useColors(),
              s.color = t.selectColor(e),
              s.extend = r,
              s.destroy = t.destroy,
              Object.defineProperty(s, "enabled", {
                  enumerable: !0,
                  configurable: !1,
                  get: () => null !== a ? a : (o !== t.namespaces && (o = t.namespaces,
                  i = t.enabled(e)),
                  i),
                  set: e => {
                      a = e
                  }
              }),
              "function" == typeof t.init && t.init(s),
              s
          }
          function r(e, n) {
              const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
              return r.log = this.log,
              r
          }
          function o(e) {
              return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
          }
          return t.debug = t,
          t.default = t,
          t.coerce = function(e) {
              return e instanceof Error ? e.stack || e.message : e
          }
          ,
          t.disable = function() {
              const e = [...t.names.map(o), ...t.skips.map(o).map((e => "-" + e))].join(",");
              return t.enable(""),
              e
          }
          ,
          t.enable = function(e) {
              let n;
              t.save(e),
              t.namespaces = e,
              t.names = [],
              t.skips = [];
              const r = ("string" == typeof e ? e : "").split(/[\s,]+/)
                , o = r.length;
              for (n = 0; n < o; n++)
                  r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.slice(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
          }
          ,
          t.enabled = function(e) {
              if ("*" === e[e.length - 1])
                  return !0;
              let n, r;
              for (n = 0,
              r = t.skips.length; n < r; n++)
                  if (t.skips[n].test(e))
                      return !1;
              for (n = 0,
              r = t.names.length; n < r; n++)
                  if (t.names[n].test(e))
                      return !0;
              return !1
          }
          ,
          t.humanize = n(872251),
          t.destroy = function() {
              console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
          }
          ,
          Object.keys(e).forEach((n => {
              t[n] = e[n]
          }
          )),
          t.names = [],
          t.skips = [],
          t.formatters = {},
          t.selectColor = function(e) {
              let n = 0;
              for (let t = 0; t < e.length; t++)
                  n = (n << 5) - n + e.charCodeAt(t),
                  n |= 0;
              return t.colors[Math.abs(n) % t.colors.length]
          }
          ,
          t.enable(t.load()),
          t
      }
  }
  ,
  591144: e => {
      "use strict";
      var t = "%[a-f0-9]{2}"
        , n = new RegExp("(" + t + ")|([^%]+?)","gi")
        , r = new RegExp("(" + t + ")+","gi");
      function o(e, t) {
          try {
              return [decodeURIComponent(e.join(""))]
          } catch (e) {}
          if (1 === e.length)
              return e;
          t = t || 1;
          var n = e.slice(0, t)
            , r = e.slice(t);
          return Array.prototype.concat.call([], o(n), o(r))
      }
      function i(e) {
          try {
              return decodeURIComponent(e)
          } catch (i) {
              for (var t = e.match(n) || [], r = 1; r < t.length; r++)
                  t = (e = o(t, r).join("")).match(n) || [];
              return e
          }
      }
      e.exports = function(e) {
          if ("string" != typeof e)
              throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
          try {
              return e = e.replace(/\+/g, " "),
              decodeURIComponent(e)
          } catch (t) {
              return function(e) {
                  for (var t = {
                      "%FE%FF": "��",
                      "%FF%FE": "��"
                  }, n = r.exec(e); n; ) {
                      try {
                          t[n[0]] = decodeURIComponent(n[0])
                      } catch (e) {
                          var o = i(n[0]);
                          o !== n[0] && (t[n[0]] = o)
                      }
                      n = r.exec(e)
                  }
                  t["%C2"] = "�";
                  for (var a = Object.keys(t), s = 0; s < a.length; s++) {
                      var c = a[s];
                      e = e.replace(new RegExp(c,"g"), t[c])
                  }
                  return e
              }(e)
          }
      }
  }
  ,
  545020: e => {
      "use strict";
      e.exports = function(e, t) {
          for (var n = {}, r = Object.keys(e), o = Array.isArray(t), i = 0; i < r.length; i++) {
              var a = r[i]
                , s = e[a];
              (o ? -1 !== t.indexOf(a) : t(a, s, e)) && (n[a] = s)
          }
          return n
      }
  }
  ,
  630460: (e, t, n) => {
      "use strict";
      var r = n(902846)
        , o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
      }
        , i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
      }
        , a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
      }
        , s = {};
      function c(e) {
          return r.isMemo(e) ? a : s[e.$$typeof] || o
      }
      s[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0
      },
      s[r.Memo] = a;
      var l = Object.defineProperty
        , u = Object.getOwnPropertyNames
        , d = Object.getOwnPropertySymbols
        , f = Object.getOwnPropertyDescriptor
        , h = Object.getPrototypeOf
        , m = Object.prototype;
      e.exports = function e(t, n, r) {
          if ("string" != typeof n) {
              if (m) {
                  var o = h(n);
                  o && o !== m && e(t, o, r)
              }
              var a = u(n);
              d && (a = a.concat(d(n)));
              for (var s = c(t), p = c(n), g = 0; g < a.length; ++g) {
                  var v = a[g];
                  if (!(i[v] || r && r[v] || p && p[v] || s && s[v])) {
                      var y = f(n, v);
                      try {
                          l(t, v, y)
                      } catch (e) {}
                  }
              }
          }
          return t
      }
  }
  ,
  95516: e => {
      "use strict";
      e.exports = function(e, t, n, r, o, i, a, s) {
          if (!e) {
              var c;
              if (void 0 === t)
                  c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
              else {
                  var l = [n, r, o, i, a, s]
                    , u = 0;
                  (c = new Error(t.replace(/%s/g, (function() {
                      return l[u++]
                  }
                  )))).name = "Invariant Violation"
              }
              throw c.framesToPop = 1,
              c
          }
      }
  }
  ,
  872251: e => {
      var t = 1e3
        , n = 60 * t
        , r = 60 * n
        , o = 24 * r
        , i = 7 * o;
      function a(e, t, n, r) {
          var o = t >= 1.5 * n;
          return Math.round(e / n) + " " + r + (o ? "s" : "")
      }
      e.exports = function(e, s) {
          s = s || {};
          var c, l, u = typeof e;
          if ("string" === u && e.length > 0)
              return function(e) {
                  if (!((e = String(e)).length > 100)) {
                      var a = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                      if (a) {
                          var s = parseFloat(a[1]);
                          switch ((a[2] || "ms").toLowerCase()) {
                          case "years":
                          case "year":
                          case "yrs":
                          case "yr":
                          case "y":
                              return 315576e5 * s;
                          case "weeks":
                          case "week":
                          case "w":
                              return s * i;
                          case "days":
                          case "day":
                          case "d":
                              return s * o;
                          case "hours":
                          case "hour":
                          case "hrs":
                          case "hr":
                          case "h":
                              return s * r;
                          case "minutes":
                          case "minute":
                          case "mins":
                          case "min":
                          case "m":
                              return s * n;
                          case "seconds":
                          case "second":
                          case "secs":
                          case "sec":
                          case "s":
                              return s * t;
                          case "milliseconds":
                          case "millisecond":
                          case "msecs":
                          case "msec":
                          case "ms":
                              return s;
                          default:
                              return
                          }
                      }
                  }
              }(e);
          if ("number" === u && isFinite(e))
              return s.long ? (c = e,
              (l = Math.abs(c)) >= o ? a(c, l, o, "day") : l >= r ? a(c, l, r, "hour") : l >= n ? a(c, l, n, "minute") : l >= t ? a(c, l, t, "second") : c + " ms") : function(e) {
                  var i = Math.abs(e);
                  return i >= o ? Math.round(e / o) + "d" : i >= r ? Math.round(e / r) + "h" : i >= n ? Math.round(e / n) + "m" : i >= t ? Math.round(e / t) + "s" : e + "ms"
              }(e);
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
      }
  }
  ,
  20067: (e, t, n) => {
      "use strict";
      var r = 65536
        , o = n(126490).Buffer
        , i = n.g.crypto || n.g.msCrypto;
      i && i.getRandomValues ? e.exports = function(e, t) {
          if (e > 4294967295)
              throw new RangeError("requested too many random bytes");
          var n = o.allocUnsafe(e);
          if (e > 0)
              if (e > r)
                  for (var a = 0; a < e; a += r)
                      i.getRandomValues(n.slice(a, a + r));
              else
                  i.getRandomValues(n);
          return "function" == typeof t ? process.nextTick((function() {
              t(null, n)
          }
          )) : n
      }
      : e.exports = function() {
          throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
      }
  }
  ,
  832022: (e, t, n) => {
      "use strict";
      var r, o, i = n(465622), a = (n(327334),
      Object.create), s = Object.defineProperty, c = Object.getOwnPropertyDescriptor, l = Object.getOwnPropertyNames, u = Object.getPrototypeOf, d = Object.prototype.hasOwnProperty, f = (r = (e, t) => {
          var r, o;
          r = e,
          o = function(e) {
              var t, n = void 0 === Number.MAX_SAFE_INTEGER ? 9007199254740991 : Number.MAX_SAFE_INTEGER, r = 536870912, o = 2 * r, i = new WeakMap, a = function(e, t) {
                  return function(i) {
                      var a = t.get(i)
                        , s = void 0 === a ? i.size : a < o ? a + 1 : 0;
                      if (!i.has(s))
                          return e(i, s);
                      if (i.size < r) {
                          for (; i.has(s); )
                              s = Math.floor(Math.random() * o);
                          return e(i, s)
                      }
                      if (i.size > n)
                          throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
                      for (; i.has(s); )
                          s = Math.floor(Math.random() * n);
                      return e(i, s)
                  }
              }((t = i,
              function(e, n) {
                  return t.set(e, n),
                  n
              }
              ), i), s = function(e) {
                  return function(t) {
                      var n = e(t);
                      return t.add(n),
                      n
                  }
              }(a);
              e.addUniqueNumber = s,
              e.generateUniqueNumber = a
          }
          ,
          "object" == typeof e && typeof t < "u" ? o(e) : "function" == typeof define && n.amdO ? define(["exports"], o) : o((r = typeof globalThis < "u" ? globalThis : r || self).fastUniqueNumbers = {})
      }
      ,
      () => (o || r((o = {
          exports: {}
      }).exports, o),
      o.exports));
      i.Component;
      ( (e, t, n) => {
          n = null != e ? a(u(e)) : {},
          ( (e, t, n, r) => {
              if (t && "object" == typeof t || "function" == typeof t)
                  for (let n of l(t))
                      !d.call(e, n) && undefined !== n && s(e, n, {
                          get: () => t[n],
                          enumerable: !(r = c(t, n)) || r.enumerable
                      })
          }
          )(e && e.__esModule ? n : s(n, "default", {
              value: e,
              enumerable: !0
          }), e)
      }
      )(f());
      var h = "object" == (typeof window > "u" ? "undefined" : typeof window);
      h ? setTimeout.bind(window) : setTimeout,
      h ? clearTimeout.bind(window) : clearTimeout,
      h ? setInterval.bind(window) : setInterval,
      h ? clearInterval.bind(window) : clearInterval;
      typeof window > "u" || "function" == typeof window.BroadcastChannel && window.BroadcastChannel,
      (0,
      i.createContext)(null).Consumer
  }
  ,
  126490: (e, t, n) => {
      var r = n(262736)
        , o = r.Buffer;
      function i(e, t) {
          for (var n in e)
              t[n] = e[n]
      }
      function a(e, t, n) {
          return o(e, t, n)
      }
      o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? e.exports = r : (i(r, t),
      t.Buffer = a),
      a.prototype = Object.create(o.prototype),
      i(o, a),
      a.from = function(e, t, n) {
          if ("number" == typeof e)
              throw new TypeError("Argument must not be a number");
          return o(e, t, n)
      }
      ,
      a.alloc = function(e, t, n) {
          if ("number" != typeof e)
              throw new TypeError("Argument must be a number");
          var r = o(e);
          return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0),
          r
      }
      ,
      a.allocUnsafe = function(e) {
          if ("number" != typeof e)
              throw new TypeError("Argument must be a number");
          return o(e)
      }
      ,
      a.allocUnsafeSlow = function(e) {
          if ("number" != typeof e)
              throw new TypeError("Argument must be a number");
          return r.SlowBuffer(e)
      }
  }
  ,
  292112: (e, t, n) => {
      "use strict";
      var r = n(20067)
        , o = function() {
          for (var e = r(16), t = "", n = 0; n < 16; ++n)
              t += e[n].toString(16);
          return t
      }()
        , i = new RegExp('(\\\\)?"@__(F|R|D|M|S|A|U|I|B|L)-' + o + '-(\\d+)__@"',"g")
        , a = /\{\s*\[native code\]\s*\}/g
        , s = /function.*?\(/
        , c = /.*?=>.*?/
        , l = /[<>\/\u2028\u2029]/g
        , u = ["*", "async"]
        , d = {
          "<": "\\u003C",
          ">": "\\u003E",
          "/": "\\u002F",
          "\u2028": "\\u2028",
          "\u2029": "\\u2029"
      };
      function f(e) {
          return d[e]
      }
      e.exports = function e(t, n) {
          n || (n = {}),
          "number" != typeof n && "string" != typeof n || (n = {
              space: n
          });
          var r, d = [], h = [], m = [], p = [], g = [], v = [], y = [], b = [], C = [], w = [];
          return n.ignoreFunction && "function" == typeof t && (t = void 0),
          void 0 === t ? String(t) : (r = n.isJSON && !n.space ? JSON.stringify(t) : JSON.stringify(t, n.isJSON ? null : function(e, t) {
              if (n.ignoreFunction && function(e) {
                  var t = [];
                  for (var n in e)
                      "function" == typeof e[n] && t.push(n);
                  for (var r = 0; r < t.length; r++)
                      delete e[t[r]]
              }(t),
              !t && void 0 !== t && t !== BigInt(0))
                  return t;
              var r = this[e]
                , i = typeof r;
              if ("object" === i) {
                  if (r instanceof RegExp)
                      return "@__R-" + o + "-" + (h.push(r) - 1) + "__@";
                  if (r instanceof Date)
                      return "@__D-" + o + "-" + (m.push(r) - 1) + "__@";
                  if (r instanceof Map)
                      return "@__M-" + o + "-" + (p.push(r) - 1) + "__@";
                  if (r instanceof Set)
                      return "@__S-" + o + "-" + (g.push(r) - 1) + "__@";
                  if (r instanceof Array && r.filter((function() {
                      return !0
                  }
                  )).length !== r.length)
                      return "@__A-" + o + "-" + (v.push(r) - 1) + "__@";
                  if (r instanceof URL)
                      return "@__L-" + o + "-" + (w.push(r) - 1) + "__@"
              }
              return "function" === i ? "@__F-" + o + "-" + (d.push(r) - 1) + "__@" : "undefined" === i ? "@__U-" + o + "-" + (y.push(r) - 1) + "__@" : "number" !== i || isNaN(r) || isFinite(r) ? "bigint" === i ? "@__B-" + o + "-" + (C.push(r) - 1) + "__@" : t : "@__I-" + o + "-" + (b.push(r) - 1) + "__@"
          }
          , n.space),
          "string" != typeof r ? String(r) : (!0 !== n.unsafe && (r = r.replace(l, f)),
          0 === d.length && 0 === h.length && 0 === m.length && 0 === p.length && 0 === g.length && 0 === v.length && 0 === y.length && 0 === b.length && 0 === C.length && 0 === w.length ? r : r.replace(i, (function(t, r, o, i) {
              return r ? t : "D" === o ? 'new Date("' + m[i].toISOString() + '")' : "R" === o ? "new RegExp(" + e(h[i].source) + ', "' + h[i].flags + '")' : "M" === o ? "new Map(" + e(Array.from(p[i].entries()), n) + ")" : "S" === o ? "new Set(" + e(Array.from(g[i].values()), n) + ")" : "A" === o ? "Array.prototype.slice.call(" + e(Object.assign({
                  length: v[i].length
              }, v[i]), n) + ")" : "U" === o ? "undefined" : "I" === o ? b[i] : "B" === o ? 'BigInt("' + C[i] + '")' : "L" === o ? "new URL(" + e(w[i].toString(), n) + ")" : function(e) {
                  var t = e.toString();
                  if (a.test(t))
                      throw new TypeError("Serializing native function: " + e.name);
                  if (s.test(t))
                      return t;
                  if (c.test(t))
                      return t;
                  var n = t.indexOf("(")
                    , r = t.substr(0, n).trim().split(" ").filter((function(e) {
                      return e.length > 0
                  }
                  ));
                  return r.filter((function(e) {
                      return -1 === u.indexOf(e)
                  }
                  )).length > 0 ? (r.indexOf("async") > -1 ? "async " : "") + "function" + (r.join("").indexOf("*") > -1 ? "*" : "") + t.substr(n) : t
              }(d[i])
          }
          ))))
      }
  }
  ,
  577008: e => {
      e.exports = function(e, t, n, r) {
          var o = n ? n.call(r, e, t) : void 0;
          if (void 0 !== o)
              return !!o;
          if (e === t)
              return !0;
          if ("object" != typeof e || !e || "object" != typeof t || !t)
              return !1;
          var i = Object.keys(e)
            , a = Object.keys(t);
          if (i.length !== a.length)
              return !1;
          for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < i.length; c++) {
              var l = i[c];
              if (!s(l))
                  return !1;
              var u = e[l]
                , d = t[l];
              if (!1 === (o = n ? n.call(r, u, d, l) : void 0) || void 0 === o && u !== d)
                  return !1
          }
          return !0
      }
  }
  ,
  702328: e => {
      "use strict";
      e.exports = (e, t) => {
          if ("string" != typeof e || "string" != typeof t)
              throw new TypeError("Expected the arguments to be of type `string`");
          if ("" === t)
              return [e];
          const n = e.indexOf(t);
          return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)]
      }
  }
  ,
  359808: e => {
      "use strict";
      e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, (e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`))
  }
  ,
  751508: (e, t, n) => {
      "use strict";
      e.exports = n.p + "8152caf0c8e8bc67ae0d.png"
  }
  ,
  561521: (e, t, n) => {
      "use strict";
      e.exports = n.p + "4d9b158e034c342314aa.png"
  }
  ,
  543277: (e, t, n) => {
      "use strict";
      e.exports = n.p + "03f738305908ad30a254.png"
  }
  ,
  101811: (e, t, n) => {
      "use strict";
      e.exports = n.p + "fb4ff15a5a204248d79e.png"
  }
  ,
  347700: (e, t, n) => {
      "use strict";
      e.exports = n.p + "99d9096e2a708c8d3f28.png"
  }
  ,
  460169: (e, t, n) => {
      "use strict";
      e.exports = n.p + "021d2ed936cbb9f7033f.png"
  }
  ,
  669872: (e, t, n) => {
      "use strict";
      const r = n(359808)
        , o = n(591144)
        , i = n(702328)
        , a = n(545020)
        , s = Symbol("encodeFragmentIdentifier");
      function c(e) {
          if ("string" != typeof e || 1 !== e.length)
              throw new TypeError("arrayFormatSeparator must be single character string")
      }
      function l(e, t) {
          return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
      }
      function u(e, t) {
          return t.decode ? o(e) : e
      }
      function d(e) {
          return Array.isArray(e) ? e.sort() : "object" == typeof e ? d(Object.keys(e)).sort(( (e, t) => Number(e) - Number(t))).map((t => e[t])) : e
      }
      function f(e) {
          const t = e.indexOf("#");
          return -1 !== t && (e = e.slice(0, t)),
          e
      }
      function h(e) {
          const t = (e = f(e)).indexOf("?");
          return -1 === t ? "" : e.slice(t + 1)
      }
      function m(e, t) {
          return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()),
          e
      }
      function p(e, t) {
          c((t = Object.assign({
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1
          }, t)).arrayFormatSeparator);
          const n = function(e) {
              let t;
              switch (e.arrayFormat) {
              case "index":
                  return (e, n, r) => {
                      t = /\[(\d*)\]$/.exec(e),
                      e = e.replace(/\[\d*\]$/, ""),
                      t ? (void 0 === r[e] && (r[e] = {}),
                      r[e][t[1]] = n) : r[e] = n
                  }
                  ;
              case "bracket":
                  return (e, n, r) => {
                      t = /(\[\])$/.exec(e),
                      e = e.replace(/\[\]$/, ""),
                      t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
                  }
                  ;
              case "colon-list-separator":
                  return (e, n, r) => {
                      t = /(:list)$/.exec(e),
                      e = e.replace(/:list$/, ""),
                      t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
                  }
                  ;
              case "comma":
              case "separator":
                  return (t, n, r) => {
                      const o = "string" == typeof n && n.includes(e.arrayFormatSeparator)
                        , i = "string" == typeof n && !o && u(n, e).includes(e.arrayFormatSeparator);
                      n = i ? u(n, e) : n;
                      const a = o || i ? n.split(e.arrayFormatSeparator).map((t => u(t, e))) : null === n ? n : u(n, e);
                      r[t] = a
                  }
                  ;
              case "bracket-separator":
                  return (t, n, r) => {
                      const o = /(\[\])$/.test(t);
                      if (t = t.replace(/\[\]$/, ""),
                      !o)
                          return void (r[t] = n ? u(n, e) : n);
                      const i = null === n ? [] : n.split(e.arrayFormatSeparator).map((t => u(t, e)));
                      void 0 !== r[t] ? r[t] = [].concat(r[t], i) : r[t] = i
                  }
                  ;
              default:
                  return (e, t, n) => {
                      void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                  }
              }
          }(t)
            , r = Object.create(null);
          if ("string" != typeof e)
              return r;
          if (!(e = e.trim().replace(/^[?#&]/, "")))
              return r;
          for (const o of e.split("&")) {
              if ("" === o)
                  continue;
              let[e,a] = i(t.decode ? o.replace(/\+/g, " ") : o, "=");
              a = void 0 === a ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? a : u(a, t),
              n(u(e, t), a, r)
          }
          for (const e of Object.keys(r)) {
              const n = r[e];
              if ("object" == typeof n && null !== n)
                  for (const e of Object.keys(n))
                      n[e] = m(n[e], t);
              else
                  r[e] = m(n, t)
          }
          return !1 === t.sort ? r : (!0 === t.sort ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce(( (e, t) => {
              const n = r[t];
              return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = d(n) : e[t] = n,
              e
          }
          ), Object.create(null))
      }
      t.extract = h,
      t.parse = p,
      t.stringify = (e, t) => {
          if (!e)
              return "";
          c((t = Object.assign({
              encode: !0,
              strict: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ","
          }, t)).arrayFormatSeparator);
          const n = n => t.skipNull && (e => null == e)(e[n]) || t.skipEmptyString && "" === e[n]
            , r = function(e) {
              switch (e.arrayFormat) {
              case "index":
                  return t => (n, r) => {
                      const o = n.length;
                      return void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [l(t, e), "[", o, "]"].join("")] : [...n, [l(t, e), "[", l(o, e), "]=", l(r, e)].join("")]
                  }
                  ;
              case "bracket":
                  return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [l(t, e), "[]"].join("")] : [...n, [l(t, e), "[]=", l(r, e)].join("")];
              case "colon-list-separator":
                  return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [l(t, e), ":list="].join("")] : [...n, [l(t, e), ":list=", l(r, e)].join("")];
              case "comma":
              case "separator":
              case "bracket-separator":
                  {
                      const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                      return n => (r, o) => void 0 === o || e.skipNull && null === o || e.skipEmptyString && "" === o ? r : (o = null === o ? "" : o,
                      0 === r.length ? [[l(n, e), t, l(o, e)].join("")] : [[r, l(o, e)].join(e.arrayFormatSeparator)])
                  }
              default:
                  return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, l(t, e)] : [...n, [l(t, e), "=", l(r, e)].join("")]
              }
          }(t)
            , o = {};
          for (const t of Object.keys(e))
              n(t) || (o[t] = e[t]);
          const i = Object.keys(o);
          return !1 !== t.sort && i.sort(t.sort),
          i.map((n => {
              const o = e[n];
              return void 0 === o ? "" : null === o ? l(n, t) : Array.isArray(o) ? 0 === o.length && "bracket-separator" === t.arrayFormat ? l(n, t) + "[]" : o.reduce(r(n), []).join("&") : l(n, t) + "=" + l(o, t)
          }
          )).filter((e => e.length > 0)).join("&")
      }
      ,
      t.parseUrl = (e, t) => {
          t = Object.assign({
              decode: !0
          }, t);
          const [n,r] = i(e, "#");
          return Object.assign({
              url: n.split("?")[0] || "",
              query: p(h(e), t)
          }, t && t.parseFragmentIdentifier && r ? {
              fragmentIdentifier: u(r, t)
          } : {})
      }
      ,
      t.stringifyUrl = (e, n) => {
          n = Object.assign({
              encode: !0,
              strict: !0,
              [s]: !0
          }, n);
          const r = f(e.url).split("?")[0] || ""
            , o = t.extract(e.url)
            , i = t.parse(o, {
              sort: !1
          })
            , a = Object.assign(i, e.query);
          let c = t.stringify(a, n);
          c && (c = `?${c}`);
          let u = function(e) {
              let t = "";
              const n = e.indexOf("#");
              return -1 !== n && (t = e.slice(n)),
              t
          }(e.url);
          return e.fragmentIdentifier && (u = `#${n[s] ? l(e.fragmentIdentifier, n) : e.fragmentIdentifier}`),
          `${r}${c}${u}`
      }
      ,
      t.pick = (e, n, r) => {
          r = Object.assign({
              parseFragmentIdentifier: !0,
              [s]: !1
          }, r);
          const {url: o, query: i, fragmentIdentifier: c} = t.parseUrl(e, r);
          return t.stringifyUrl({
              url: o,
              query: a(i, n),
              fragmentIdentifier: c
          }, r)
      }
      ,
      t.exclude = (e, n, r) => {
          const o = Array.isArray(n) ? e => !n.includes(e) : (e, t) => !n(e, t);
          return t.pick(e, o, r)
      }
  }
  ,
  622446: (e, t, n) => {
      "use strict";
      n.d(t, {
          ll: () => x,
          rD: () => N,
          UU: () => J,
          cY: () => P,
          BN: () => O
      });
      const r = Math.min
        , o = Math.max
        , i = Math.round
        , a = Math.floor
        , s = e => ({
          x: e,
          y: e
      })
        , c = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
      }
        , l = {
          start: "end",
          end: "start"
      };
      function u(e, t, n) {
          return o(e, r(t, n))
      }
      function d(e, t) {
          return "function" == typeof e ? e(t) : e
      }
      function f(e) {
          return e.split("-")[0]
      }
      function h(e) {
          return e.split("-")[1]
      }
      function m(e) {
          return "x" === e ? "y" : "x"
      }
      function p(e) {
          return "y" === e ? "height" : "width"
      }
      function g(e) {
          return ["top", "bottom"].includes(f(e)) ? "y" : "x"
      }
      function v(e) {
          return m(g(e))
      }
      function y(e) {
          return e.replace(/start|end/g, (e => l[e]))
      }
      function b(e) {
          return e.replace(/left|right|bottom|top/g, (e => c[e]))
      }
      function C(e) {
          const {x: t, y: n, width: r, height: o} = e;
          return {
              width: r,
              height: o,
              top: n,
              left: t,
              right: t + r,
              bottom: n + o,
              x: t,
              y: n
          }
      }
      function w(e, t, n) {
          let {reference: r, floating: o} = e;
          const i = g(t)
            , a = v(t)
            , s = p(a)
            , c = f(t)
            , l = "y" === i
            , u = r.x + r.width / 2 - o.width / 2
            , d = r.y + r.height / 2 - o.height / 2
            , m = r[s] / 2 - o[s] / 2;
          let y;
          switch (c) {
          case "top":
              y = {
                  x: u,
                  y: r.y - o.height
              };
              break;
          case "bottom":
              y = {
                  x: u,
                  y: r.y + r.height
              };
              break;
          case "right":
              y = {
                  x: r.x + r.width,
                  y: d
              };
              break;
          case "left":
              y = {
                  x: r.x - o.width,
                  y: d
              };
              break;
          default:
              y = {
                  x: r.x,
                  y: r.y
              }
          }
          switch (h(t)) {
          case "start":
              y[a] -= m * (n && l ? -1 : 1);
              break;
          case "end":
              y[a] += m * (n && l ? -1 : 1)
          }
          return y
      }
      async function A(e, t) {
          var n;
          void 0 === t && (t = {});
          const {x: r, y: o, platform: i, rects: a, elements: s, strategy: c} = e
            , {boundary: l="clippingAncestors", rootBoundary: u="viewport", elementContext: f="floating", altBoundary: h=!1, padding: m=0} = d(t, e)
            , p = function(e) {
              return "number" != typeof e ? function(e) {
                  return {
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      ...e
                  }
              }(e) : {
                  top: e,
                  right: e,
                  bottom: e,
                  left: e
              }
          }(m)
            , g = s[h ? "floating" === f ? "reference" : "floating" : f]
            , v = C(await i.getClippingRect({
              element: null == (n = await (null == i.isElement ? void 0 : i.isElement(g))) || n ? g : g.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating)),
              boundary: l,
              rootBoundary: u,
              strategy: c
          }))
            , y = "floating" === f ? {
              x: r,
              y: o,
              width: a.floating.width,
              height: a.floating.height
          } : a.reference
            , b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating))
            , w = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
              x: 1,
              y: 1
          }
            , A = C(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: s,
              rect: y,
              offsetParent: b,
              strategy: c
          }) : y);
          return {
              top: (v.top - A.top + p.top) / w.y,
              bottom: (A.bottom - v.bottom + p.bottom) / w.y,
              left: (v.left - A.left + p.left) / w.x,
              right: (A.right - v.right + p.right) / w.x
          }
      }
      var I = n(593489);
      function F(e) {
          const t = (0,
          I.L9)(e);
          let n = parseFloat(t.width) || 0
            , r = parseFloat(t.height) || 0;
          const o = (0,
          I.sb)(e)
            , a = o ? e.offsetWidth : n
            , s = o ? e.offsetHeight : r
            , c = i(n) !== a || i(r) !== s;
          return c && (n = a,
          r = s),
          {
              width: n,
              height: r,
              $: c
          }
      }
      function L(e) {
          return (0,
          I.vq)(e) ? e : e.contextElement
      }
      function M(e) {
          const t = L(e);
          if (!(0,
          I.sb)(t))
              return s(1);
          const n = t.getBoundingClientRect()
            , {width: r, height: o, $: a} = F(t);
          let c = (a ? i(n.width) : n.width) / r
            , l = (a ? i(n.height) : n.height) / o;
          return c && Number.isFinite(c) || (c = 1),
          l && Number.isFinite(l) || (l = 1),
          {
              x: c,
              y: l
          }
      }
      const B = s(0);
      function k(e) {
          const t = (0,
          I.zk)(e);
          return (0,
          I.Tc)() && t.visualViewport ? {
              x: t.visualViewport.offsetLeft,
              y: t.visualViewport.offsetTop
          } : B
      }
      function D(e, t, n, r) {
          void 0 === t && (t = !1),
          void 0 === n && (n = !1);
          const o = e.getBoundingClientRect()
            , i = L(e);
          let a = s(1);
          t && (r ? (0,
          I.vq)(r) && (a = M(r)) : a = M(e));
          const c = function(e, t, n) {
              return void 0 === t && (t = !1),
              !(!n || t && n !== (0,
              I.zk)(e)) && t
          }(i, n, r) ? k(i) : s(0);
          let l = (o.left + c.x) / a.x
            , u = (o.top + c.y) / a.y
            , d = o.width / a.x
            , f = o.height / a.y;
          if (i) {
              const e = (0,
              I.zk)(i)
                , t = r && (0,
              I.vq)(r) ? (0,
              I.zk)(r) : r;
              let n = e
                , o = (0,
              I._m)(n);
              for (; o && r && t !== n; ) {
                  const e = M(o)
                    , t = o.getBoundingClientRect()
                    , r = (0,
                  I.L9)(o)
                    , i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x
                    , a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                  l *= e.x,
                  u *= e.y,
                  d *= e.x,
                  f *= e.y,
                  l += i,
                  u += a,
                  n = (0,
                  I.zk)(o),
                  o = (0,
                  I._m)(n)
              }
          }
          return C({
              width: d,
              height: f,
              x: l,
              y: u
          })
      }
      function _(e) {
          return D((0,
          I.ep)(e)).left + (0,
          I.CP)(e).scrollLeft
      }
      function S(e, t, n) {
          let r;
          if ("viewport" === t)
              r = function(e, t) {
                  const n = (0,
                  I.zk)(e)
                    , r = (0,
                  I.ep)(e)
                    , o = n.visualViewport;
                  let i = r.clientWidth
                    , a = r.clientHeight
                    , s = 0
                    , c = 0;
                  if (o) {
                      i = o.width,
                      a = o.height;
                      const e = (0,
                      I.Tc)();
                      (!e || e && "fixed" === t) && (s = o.offsetLeft,
                      c = o.offsetTop)
                  }
                  return {
                      width: i,
                      height: a,
                      x: s,
                      y: c
                  }
              }(e, n);
          else if ("document" === t)
              r = function(e) {
                  const t = (0,
                  I.ep)(e)
                    , n = (0,
                  I.CP)(e)
                    , r = e.ownerDocument.body
                    , i = o(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
                    , a = o(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
                  let s = -n.scrollLeft + _(e);
                  const c = -n.scrollTop;
                  return "rtl" === (0,
                  I.L9)(r).direction && (s += o(t.clientWidth, r.clientWidth) - i),
                  {
                      width: i,
                      height: a,
                      x: s,
                      y: c
                  }
              }((0,
              I.ep)(e));
          else if ((0,
          I.vq)(t))
              r = function(e, t) {
                  const n = D(e, !0, "fixed" === t)
                    , r = n.top + e.clientTop
                    , o = n.left + e.clientLeft
                    , i = (0,
                  I.sb)(e) ? M(e) : s(1);
                  return {
                      width: e.clientWidth * i.x,
                      height: e.clientHeight * i.y,
                      x: o * i.x,
                      y: r * i.y
                  }
              }(t, n);
          else {
              const n = k(e);
              r = {
                  ...t,
                  x: t.x - n.x,
                  y: t.y - n.y
              }
          }
          return C(r)
      }
      function E(e, t) {
          const n = (0,
          I.$4)(e);
          return !(n === t || !(0,
          I.vq)(n) || (0,
          I.eu)(n)) && ("fixed" === (0,
          I.L9)(n).position || E(n, t))
      }
      function G(e, t, n) {
          const r = (0,
          I.sb)(t)
            , o = (0,
          I.ep)(t)
            , i = "fixed" === n
            , a = D(e, !0, i, t);
          let c = {
              scrollLeft: 0,
              scrollTop: 0
          };
          const l = s(0);
          if (r || !r && !i)
              if (("body" !== (0,
              I.mq)(t) || (0,
              I.ZU)(o)) && (c = (0,
              I.CP)(t)),
              r) {
                  const e = D(t, !0, i, t);
                  l.x = e.x + t.clientLeft,
                  l.y = e.y + t.clientTop
              } else
                  o && (l.x = _(o));
          return {
              x: a.left + c.scrollLeft - l.x,
              y: a.top + c.scrollTop - l.y,
              width: a.width,
              height: a.height
          }
      }
      function T(e) {
          return "static" === (0,
          I.L9)(e).position
      }
      function j(e, t) {
          return (0,
          I.sb)(e) && "fixed" !== (0,
          I.L9)(e).position ? t ? t(e) : e.offsetParent : null
      }
      function H(e, t) {
          const n = (0,
          I.zk)(e);
          if ((0,
          I.Tf)(e))
              return n;
          if (!(0,
          I.sb)(e)) {
              let t = (0,
              I.$4)(e);
              for (; t && !(0,
              I.eu)(t); ) {
                  if ((0,
                  I.vq)(t) && !T(t))
                      return t;
                  t = (0,
                  I.$4)(t)
              }
              return n
          }
          let r = j(e, t);
          for (; r && (0,
          I.Lv)(r) && T(r); )
              r = j(r, t);
          return r && (0,
          I.eu)(r) && T(r) && !(0,
          I.sQ)(r) ? n : r || (0,
          I.gJ)(e) || n
      }
      const R = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
              let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
              const i = "fixed" === o
                , a = (0,
              I.ep)(r)
                , c = !!t && (0,
              I.Tf)(t.floating);
              if (r === a || c && i)
                  return n;
              let l = {
                  scrollLeft: 0,
                  scrollTop: 0
              }
                , u = s(1);
              const d = s(0)
                , f = (0,
              I.sb)(r);
              if ((f || !f && !i) && (("body" !== (0,
              I.mq)(r) || (0,
              I.ZU)(a)) && (l = (0,
              I.CP)(r)),
              (0,
              I.sb)(r))) {
                  const e = D(r);
                  u = M(r),
                  d.x = e.x + r.clientLeft,
                  d.y = e.y + r.clientTop
              }
              return {
                  width: n.width * u.x,
                  height: n.height * u.y,
                  x: n.x * u.x - l.scrollLeft * u.x + d.x,
                  y: n.y * u.y - l.scrollTop * u.y + d.y
              }
          },
          getDocumentElement: I.ep,
          getClippingRect: function(e) {
              let {element: t, boundary: n, rootBoundary: i, strategy: a} = e;
              const s = [..."clippingAncestors" === n ? (0,
              I.Tf)(t) ? [] : function(e, t) {
                  const n = t.get(e);
                  if (n)
                      return n;
                  let r = (0,
                  I.v9)(e, [], !1).filter((e => (0,
                  I.vq)(e) && "body" !== (0,
                  I.mq)(e)))
                    , o = null;
                  const i = "fixed" === (0,
                  I.L9)(e).position;
                  let a = i ? (0,
                  I.$4)(e) : e;
                  for (; (0,
                  I.vq)(a) && !(0,
                  I.eu)(a); ) {
                      const t = (0,
                      I.L9)(a)
                        , n = (0,
                      I.sQ)(a);
                      n || "fixed" !== t.position || (o = null),
                      (i ? !n && !o : !n && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || (0,
                      I.ZU)(a) && !n && E(e, a)) ? r = r.filter((e => e !== a)) : o = t,
                      a = (0,
                      I.$4)(a)
                  }
                  return t.set(e, r),
                  r
              }(t, this._c) : [].concat(n), i]
                , c = s[0]
                , l = s.reduce(( (e, n) => {
                  const i = S(t, n, a);
                  return e.top = o(i.top, e.top),
                  e.right = r(i.right, e.right),
                  e.bottom = r(i.bottom, e.bottom),
                  e.left = o(i.left, e.left),
                  e
              }
              ), S(t, c, a));
              return {
                  width: l.right - l.left,
                  height: l.bottom - l.top,
                  x: l.left,
                  y: l.top
              }
          },
          getOffsetParent: H,
          getElementRects: async function(e) {
              const t = this.getOffsetParent || H
                , n = this.getDimensions
                , r = await n(e.floating);
              return {
                  reference: G(e.reference, await t(e.floating), e.strategy),
                  floating: {
                      x: 0,
                      y: 0,
                      width: r.width,
                      height: r.height
                  }
              }
          },
          getClientRects: function(e) {
              return Array.from(e.getClientRects())
          },
          getDimensions: function(e) {
              const {width: t, height: n} = F(e);
              return {
                  width: t,
                  height: n
              }
          },
          getScale: M,
          isElement: I.vq,
          isRTL: function(e) {
              return "rtl" === (0,
              I.L9)(e).direction
          }
      };
      function x(e, t, n, i) {
          void 0 === i && (i = {});
          const {ancestorScroll: s=!0, ancestorResize: c=!0, elementResize: l="function" == typeof ResizeObserver, layoutShift: u="function" == typeof IntersectionObserver, animationFrame: d=!1} = i
            , f = L(e)
            , h = s || c ? [...f ? (0,
          I.v9)(f) : [], ...(0,
          I.v9)(t)] : [];
          h.forEach((e => {
              s && e.addEventListener("scroll", n, {
                  passive: !0
              }),
              c && e.addEventListener("resize", n)
          }
          ));
          const m = f && u ? function(e, t) {
              let n, i = null;
              const s = (0,
              I.ep)(e);
              function c() {
                  var e;
                  clearTimeout(n),
                  null == (e = i) || e.disconnect(),
                  i = null
              }
              return function l(u, d) {
                  void 0 === u && (u = !1),
                  void 0 === d && (d = 1),
                  c();
                  const {left: f, top: h, width: m, height: p} = e.getBoundingClientRect();
                  if (u || t(),
                  !m || !p)
                      return;
                  const g = {
                      rootMargin: -a(h) + "px " + -a(s.clientWidth - (f + m)) + "px " + -a(s.clientHeight - (h + p)) + "px " + -a(f) + "px",
                      threshold: o(0, r(1, d)) || 1
                  };
                  let v = !0;
                  function y(e) {
                      const t = e[0].intersectionRatio;
                      if (t !== d) {
                          if (!v)
                              return l();
                          t ? l(!1, t) : n = setTimeout(( () => {
                              l(!1, 1e-7)
                          }
                          ), 1e3)
                      }
                      v = !1
                  }
                  try {
                      i = new IntersectionObserver(y,{
                          ...g,
                          root: s.ownerDocument
                      })
                  } catch (e) {
                      i = new IntersectionObserver(y,g)
                  }
                  i.observe(e)
              }(!0),
              c
          }(f, n) : null;
          let p, g = -1, v = null;
          l && (v = new ResizeObserver((e => {
              let[r] = e;
              r && r.target === f && v && (v.unobserve(t),
              cancelAnimationFrame(g),
              g = requestAnimationFrame(( () => {
                  var e;
                  null == (e = v) || e.observe(t)
              }
              ))),
              n()
          }
          )),
          f && !d && v.observe(f),
          v.observe(t));
          let y = d ? D(e) : null;
          return d && function t() {
              const r = D(e);
              !y || r.x === y.x && r.y === y.y && r.width === y.width && r.height === y.height || n(),
              y = r,
              p = requestAnimationFrame(t)
          }(),
          n(),
          () => {
              var e;
              h.forEach((e => {
                  s && e.removeEventListener("scroll", n),
                  c && e.removeEventListener("resize", n)
              }
              )),
              null == m || m(),
              null == (e = v) || e.disconnect(),
              v = null,
              d && cancelAnimationFrame(p)
          }
      }
      const P = function(e) {
          return void 0 === e && (e = 0),
          {
              name: "offset",
              options: e,
              async fn(t) {
                  var n, r;
                  const {x: o, y: i, placement: a, middlewareData: s} = t
                    , c = await async function(e, t) {
                      const {placement: n, platform: r, elements: o} = e
                        , i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating))
                        , a = f(n)
                        , s = h(n)
                        , c = "y" === g(n)
                        , l = ["left", "top"].includes(a) ? -1 : 1
                        , u = i && c ? -1 : 1
                        , m = d(t, e);
                      let {mainAxis: p, crossAxis: v, alignmentAxis: y} = "number" == typeof m ? {
                          mainAxis: m,
                          crossAxis: 0,
                          alignmentAxis: null
                      } : {
                          mainAxis: 0,
                          crossAxis: 0,
                          alignmentAxis: null,
                          ...m
                      };
                      return s && "number" == typeof y && (v = "end" === s ? -1 * y : y),
                      c ? {
                          x: v * u,
                          y: p * l
                      } : {
                          x: p * l,
                          y: v * u
                      }
                  }(t, e);
                  return a === (null == (n = s.offset) ? void 0 : n.placement) && null != (r = s.arrow) && r.alignmentOffset ? {} : {
                      x: o + c.x,
                      y: i + c.y,
                      data: {
                          ...c,
                          placement: a
                      }
                  }
              }
          }
      }
        , O = function(e) {
          return void 0 === e && (e = {}),
          {
              name: "shift",
              options: e,
              async fn(t) {
                  const {x: n, y: r, placement: o} = t
                    , {mainAxis: i=!0, crossAxis: a=!1, limiter: s={
                      fn: e => {
                          let {x: t, y: n} = e;
                          return {
                              x: t,
                              y: n
                          }
                      }
                  }, ...c} = d(e, t)
                    , l = {
                      x: n,
                      y: r
                  }
                    , h = await A(t, c)
                    , p = g(f(o))
                    , v = m(p);
                  let y = l[v]
                    , b = l[p];
                  if (i) {
                      const e = "y" === v ? "bottom" : "right";
                      y = u(y + h["y" === v ? "top" : "left"], y, y - h[e])
                  }
                  if (a) {
                      const e = "y" === p ? "bottom" : "right";
                      b = u(b + h["y" === p ? "top" : "left"], b, b - h[e])
                  }
                  const C = s.fn({
                      ...t,
                      [v]: y,
                      [p]: b
                  });
                  return {
                      ...C,
                      data: {
                          x: C.x - n,
                          y: C.y - r
                      }
                  }
              }
          }
      }
        , J = function(e) {
          return void 0 === e && (e = {}),
          {
              name: "flip",
              options: e,
              async fn(t) {
                  var n, r;
                  const {placement: o, middlewareData: i, rects: a, initialPlacement: s, platform: c, elements: l} = t
                    , {mainAxis: u=!0, crossAxis: m=!0, fallbackPlacements: C, fallbackStrategy: w="bestFit", fallbackAxisSideDirection: I="none", flipAlignment: F=!0, ...L} = d(e, t);
                  if (null != (n = i.arrow) && n.alignmentOffset)
                      return {};
                  const M = f(o)
                    , B = g(s)
                    , k = f(s) === s
                    , D = await (null == c.isRTL ? void 0 : c.isRTL(l.floating))
                    , _ = C || (k || !F ? [b(s)] : function(e) {
                      const t = b(e);
                      return [y(e), t, y(t)]
                  }(s))
                    , S = "none" !== I;
                  !C && S && _.push(...function(e, t, n, r) {
                      const o = h(e);
                      let i = function(e, t, n) {
                          const r = ["left", "right"]
                            , o = ["right", "left"]
                            , i = ["top", "bottom"]
                            , a = ["bottom", "top"];
                          switch (e) {
                          case "top":
                          case "bottom":
                              return n ? t ? o : r : t ? r : o;
                          case "left":
                          case "right":
                              return t ? i : a;
                          default:
                              return []
                          }
                      }(f(e), "start" === n, r);
                      return o && (i = i.map((e => e + "-" + o)),
                      t && (i = i.concat(i.map(y)))),
                      i
                  }(s, F, I, D));
                  const E = [s, ..._]
                    , G = await A(t, L)
                    , T = [];
                  let j = (null == (r = i.flip) ? void 0 : r.overflows) || [];
                  if (u && T.push(G[M]),
                  m) {
                      const e = function(e, t, n) {
                          void 0 === n && (n = !1);
                          const r = h(e)
                            , o = v(e)
                            , i = p(o);
                          let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                          return t.reference[i] > t.floating[i] && (a = b(a)),
                          [a, b(a)]
                      }(o, a, D);
                      T.push(G[e[0]], G[e[1]])
                  }
                  if (j = [...j, {
                      placement: o,
                      overflows: T
                  }],
                  !T.every((e => e <= 0))) {
                      var H, R;
                      const e = ((null == (H = i.flip) ? void 0 : H.index) || 0) + 1
                        , t = E[e];
                      if (t)
                          return {
                              data: {
                                  index: e,
                                  overflows: j
                              },
                              reset: {
                                  placement: t
                              }
                          };
                      let n = null == (R = j.filter((e => e.overflows[0] <= 0)).sort(( (e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : R.placement;
                      if (!n)
                          switch (w) {
                          case "bestFit":
                              {
                                  var x;
                                  const e = null == (x = j.filter((e => {
                                      if (S) {
                                          const t = g(e.placement);
                                          return t === B || "y" === t
                                      }
                                      return !0
                                  }
                                  )).map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(( (e, t) => e + t), 0)])).sort(( (e, t) => e[1] - t[1]))[0]) ? void 0 : x[0];
                                  e && (n = e);
                                  break
                              }
                          case "initialPlacement":
                              n = s
                          }
                      if (o !== n)
                          return {
                              reset: {
                                  placement: n
                              }
                          }
                  }
                  return {}
              }
          }
      }
        , N = (e, t, n) => {
          const r = new Map
            , o = {
              platform: R,
              ...n
          }
            , i = {
              ...o.platform,
              _c: r
          };
          return (async (e, t, n) => {
              const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: a} = n
                , s = i.filter(Boolean)
                , c = await (null == a.isRTL ? void 0 : a.isRTL(t));
              let l = await a.getElementRects({
                  reference: e,
                  floating: t,
                  strategy: o
              })
                , {x: u, y: d} = w(l, r, c)
                , f = r
                , h = {}
                , m = 0;
              for (let n = 0; n < s.length; n++) {
                  const {name: i, fn: p} = s[n]
                    , {x: g, y: v, data: y, reset: b} = await p({
                      x: u,
                      y: d,
                      initialPlacement: r,
                      placement: f,
                      strategy: o,
                      middlewareData: h,
                      rects: l,
                      platform: a,
                      elements: {
                          reference: e,
                          floating: t
                      }
                  });
                  u = null != g ? g : u,
                  d = null != v ? v : d,
                  h = {
                      ...h,
                      [i]: {
                          ...h[i],
                          ...y
                      }
                  },
                  b && m <= 50 && (m++,
                  "object" == typeof b && (b.placement && (f = b.placement),
                  b.rects && (l = !0 === b.rects ? await a.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: o
                  }) : b.rects),
                  ({x: u, y: d} = w(l, f, c))),
                  n = -1)
              }
              return {
                  x: u,
                  y: d,
                  placement: f,
                  strategy: o,
                  middlewareData: h
              }
          }
          )(e, t, {
              ...o,
              platform: i
          })
      }
  }
  ,
  290857: (e, t, n) => {
      "use strict";
      n.d(t, {
          BN: () => h,
          UU: () => m,
          cY: () => f,
          we: () => d
      });
      var r = n(622446)
        , o = n(465622)
        , i = n(947568)
        , a = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function s(e, t) {
          if (e === t)
              return !0;
          if (typeof e != typeof t)
              return !1;
          if ("function" == typeof e && e.toString() === t.toString())
              return !0;
          let n, r, o;
          if (e && t && "object" == typeof e) {
              if (Array.isArray(e)) {
                  if (n = e.length,
                  n !== t.length)
                      return !1;
                  for (r = n; 0 != r--; )
                      if (!s(e[r], t[r]))
                          return !1;
                  return !0
              }
              if (o = Object.keys(e),
              n = o.length,
              n !== Object.keys(t).length)
                  return !1;
              for (r = n; 0 != r--; )
                  if (!{}.hasOwnProperty.call(t, o[r]))
                      return !1;
              for (r = n; 0 != r--; ) {
                  const n = o[r];
                  if (!("_owner" === n && e.$$typeof || s(e[n], t[n])))
                      return !1
              }
              return !0
          }
          return e != e && t != t
      }
      function c(e) {
          return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }
      function l(e, t) {
          const n = c(e);
          return Math.round(t * n) / n
      }
      function u(e) {
          const t = o.useRef(e);
          return a(( () => {
              t.current = e
          }
          )),
          t
      }
      function d(e) {
          void 0 === e && (e = {});
          const {placement: t="bottom", strategy: n="absolute", middleware: d=[], platform: f, elements: {reference: h, floating: m}={}, transform: p=!0, whileElementsMounted: g, open: v} = e
            , [y,b] = o.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
          })
            , [C,w] = o.useState(d);
          s(C, d) || w(d);
          const [A,I] = o.useState(null)
            , [F,L] = o.useState(null)
            , M = o.useCallback((e => {
              e !== _.current && (_.current = e,
              I(e))
          }
          ), [])
            , B = o.useCallback((e => {
              e !== S.current && (S.current = e,
              L(e))
          }
          ), [])
            , k = h || A
            , D = m || F
            , _ = o.useRef(null)
            , S = o.useRef(null)
            , E = o.useRef(y)
            , G = null != g
            , T = u(g)
            , j = u(f)
            , H = o.useCallback(( () => {
              if (!_.current || !S.current)
                  return;
              const e = {
                  placement: t,
                  strategy: n,
                  middleware: C
              };
              j.current && (e.platform = j.current),
              (0,
              r.rD)(_.current, S.current, e).then((e => {
                  const t = {
                      ...e,
                      isPositioned: !0
                  };
                  R.current && !s(E.current, t) && (E.current = t,
                  i.flushSync(( () => {
                      b(t)
                  }
                  )))
              }
              ))
          }
          ), [C, t, n, j]);
          a(( () => {
              !1 === v && E.current.isPositioned && (E.current.isPositioned = !1,
              b((e => ({
                  ...e,
                  isPositioned: !1
              }))))
          }
          ), [v]);
          const R = o.useRef(!1);
          a(( () => (R.current = !0,
          () => {
              R.current = !1
          }
          )), []),
          a(( () => {
              if (k && (_.current = k),
              D && (S.current = D),
              k && D) {
                  if (T.current)
                      return T.current(k, D, H);
                  H()
              }
          }
          ), [k, D, H, T, G]);
          const x = o.useMemo(( () => ({
              reference: _,
              floating: S,
              setReference: M,
              setFloating: B
          })), [M, B])
            , P = o.useMemo(( () => ({
              reference: k,
              floating: D
          })), [k, D])
            , O = o.useMemo(( () => {
              const e = {
                  position: n,
                  left: 0,
                  top: 0
              };
              if (!P.floating)
                  return e;
              const t = l(P.floating, y.x)
                , r = l(P.floating, y.y);
              return p ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...c(P.floating) >= 1.5 && {
                      willChange: "transform"
                  }
              } : {
                  position: n,
                  left: t,
                  top: r
              }
          }
          ), [n, p, P.floating, y.x, y.y]);
          return o.useMemo(( () => ({
              ...y,
              update: H,
              refs: x,
              elements: P,
              floatingStyles: O
          })), [y, H, x, P, O])
      }
      const f = (e, t) => ({
          ...(0,
          r.cY)(e),
          options: [e, t]
      })
        , h = (e, t) => ({
          ...(0,
          r.BN)(e),
          options: [e, t]
      })
        , m = (e, t) => ({
          ...(0,
          r.UU)(e),
          options: [e, t]
      })
  }
  ,
  455972: (e, t, n) => {
      "use strict";
      n.d(t, {
          XF: () => ue,
          iB: () => Le,
          s9: () => ve,
          we: () => ye,
          iQ: () => be,
          Mk: () => $,
          bv: () => we,
          It: () => Ae,
          $X: () => Ie
      });
      var r = n(465622)
        , o = n.t(r, 2);
      function i(e) {
          return s(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }
      function a(e) {
          var t;
          return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }
      function s(e) {
          return e instanceof Node || e instanceof a(e).Node
      }
      function c(e) {
          return e instanceof Element || e instanceof a(e).Element
      }
      function l(e) {
          return e instanceof HTMLElement || e instanceof a(e).HTMLElement
      }
      function u(e) {
          return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof a(e).ShadowRoot)
      }
      function d(e) {
          if ("html" === i(e))
              return e;
          const t = e.assignedSlot || e.parentNode || u(e) && e.host || function(e) {
              var t;
              return null == (t = (s(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
          }(e);
          return u(t) ? t.host : t
      }
      function f(e) {
          let t = e.activeElement;
          for (; null != (null == (n = t) || null == (r = n.shadowRoot) ? void 0 : r.activeElement); ) {
              var n, r;
              t = t.shadowRoot.activeElement
          }
          return t
      }
      function h(e, t) {
          if (!e || !t)
              return !1;
          const n = t.getRootNode && t.getRootNode();
          if (e.contains(t))
              return !0;
          if (n && u(n)) {
              let n = t;
              for (; n; ) {
                  if (e === n)
                      return !0;
                  n = n.parentNode || n.host
              }
          }
          return !1
      }
      function m(e) {
          if (0 === e.mozInputSource && e.isTrusted)
              return !0;
          const t = /Android/i;
          return (t.test(function() {
              const e = navigator.userAgentData;
              return null != e && e.platform ? e.platform : navigator.platform
          }()) || t.test(function() {
              const e = navigator.userAgentData;
              return e && Array.isArray(e.brands) ? e.brands.map((e => {
                  let {brand: t, version: n} = e;
                  return t + "/" + n
              }
              )).join(" ") : navigator.userAgent
          }())) && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType
      }
      function p(e) {
          return 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" !== e.pointerType || e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail
      }
      function g(e, t) {
          const n = ["mouse", "pen"];
          return t || n.push("", void 0),
          n.includes(e)
      }
      function v(e) {
          return (null == e ? void 0 : e.ownerDocument) || document
      }
      function y(e, t) {
          if (null == t)
              return !1;
          if ("composedPath"in e)
              return e.composedPath().includes(t);
          const n = e;
          return null != n.target && t.contains(n.target)
      }
      function b(e) {
          return "composedPath"in e ? e.composedPath()[0] : e.target
      }
      var C = n(593489)
        , w = n(290857)
        , A = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"].join(",")
        , I = "undefined" == typeof Element
        , F = I ? function() {}
      : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
        , L = !I && Element.prototype.getRootNode ? function(e) {
          var t;
          return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
      }
      : function(e) {
          return null == e ? void 0 : e.ownerDocument
      }
        , M = function e(t, n) {
          var r;
          void 0 === n && (n = !0);
          var o = null == t || null === (r = t.getAttribute) || void 0 === r ? void 0 : r.call(t, "inert");
          return "" === o || "true" === o || n && t && e(t.parentNode)
      }
        , B = function e(t, n, r) {
          for (var o = [], i = Array.from(t); i.length; ) {
              var a = i.shift();
              if (!M(a, !1))
                  if ("SLOT" === a.tagName) {
                      var s = a.assignedElements()
                        , c = e(s.length ? s : a.children, !0, r);
                      r.flatten ? o.push.apply(o, c) : o.push({
                          scopeParent: a,
                          candidates: c
                      })
                  } else {
                      F.call(a, A) && r.filter(a) && (n || !t.includes(a)) && o.push(a);
                      var l = a.shadowRoot || "function" == typeof r.getShadowRoot && r.getShadowRoot(a)
                        , u = !M(l, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
                      if (l && u) {
                          var d = e(!0 === l ? a.children : l.children, !0, r);
                          r.flatten ? o.push.apply(o, d) : o.push({
                              scopeParent: a,
                              candidates: d
                          })
                      } else
                          i.unshift.apply(i, a.children)
                  }
          }
          return o
      }
        , k = function(e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
      }
        , D = function(e) {
          if (!e)
              throw new Error("No node provided");
          return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
              var t, n = null == e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
              return "" === n || "true" === n
          }(e)) && !k(e) ? 0 : e.tabIndex
      }
        , _ = function(e, t) {
          return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
      }
        , S = function(e) {
          return "INPUT" === e.tagName
      }
        , E = function(e) {
          var t = e.getBoundingClientRect()
            , n = t.width
            , r = t.height;
          return 0 === n && 0 === r
      }
        , G = function(e, t) {
          return !(t.disabled || M(t) || function(e) {
              return S(e) && "hidden" === e.type
          }(t) || function(e, t) {
              var n = t.displayCheck
                , r = t.getShadowRoot;
              if ("hidden" === getComputedStyle(e).visibility)
                  return !0;
              var o = F.call(e, "details>summary:first-of-type") ? e.parentElement : e;
              if (F.call(o, "details:not([open]) *"))
                  return !0;
              if (n && "full" !== n && "legacy-full" !== n) {
                  if ("non-zero-area" === n)
                      return E(e)
              } else {
                  if ("function" == typeof r) {
                      for (var i = e; e; ) {
                          var a = e.parentElement
                            , s = L(e);
                          if (a && !a.shadowRoot && !0 === r(a))
                              return E(e);
                          e = e.assignedSlot ? e.assignedSlot : a || s === e.ownerDocument ? a : s.host
                      }
                      e = i
                  }
                  if (function(e) {
                      var t, n, r, o, i = e && L(e), a = null === (t = i) || void 0 === t ? void 0 : t.host, s = !1;
                      if (i && i !== e)
                          for (s = !!(null !== (n = a) && void 0 !== n && null !== (r = n.ownerDocument) && void 0 !== r && r.contains(a) || null != e && null !== (o = e.ownerDocument) && void 0 !== o && o.contains(e)); !s && a; ) {
                              var c, l, u;
                              s = !(null === (l = a = null === (c = i = L(a)) || void 0 === c ? void 0 : c.host) || void 0 === l || null === (u = l.ownerDocument) || void 0 === u || !u.contains(a))
                          }
                      return s
                  }(e))
                      return !e.getClientRects().length;
                  if ("legacy-full" !== n)
                      return !0
              }
              return !1
          }(t, e) || function(e) {
              return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some((function(e) {
                  return "SUMMARY" === e.tagName
              }
              ))
          }(t) || function(e) {
              if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                  for (var t = e.parentElement; t; ) {
                      if ("FIELDSET" === t.tagName && t.disabled) {
                          for (var n = 0; n < t.children.length; n++) {
                              var r = t.children.item(n);
                              if ("LEGEND" === r.tagName)
                                  return !!F.call(t, "fieldset[disabled] *") || !r.contains(e)
                          }
                          return !0
                      }
                      t = t.parentElement
                  }
              return !1
          }(t))
      }
        , T = function(e, t) {
          return !(function(e) {
              return function(e) {
                  return S(e) && "radio" === e.type
              }(e) && !function(e) {
                  if (!e.name)
                      return !0;
                  var t, n = e.form || L(e), r = function(e) {
                      return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
                  };
                  if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape)
                      t = r(window.CSS.escape(e.name));
                  else
                      try {
                          t = r(e.name)
                      } catch (e) {
                          return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message),
                          !1
                      }
                  var o = function(e, t) {
                      for (var n = 0; n < e.length; n++)
                          if (e[n].checked && e[n].form === t)
                              return e[n]
                  }(t, e.form);
                  return !o || o === e
              }(e)
          }(t) || D(t) < 0 || !G(e, t))
      }
        , j = function(e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0)
      }
        , H = function e(t) {
          var n = []
            , r = [];
          return t.forEach((function(t, o) {
              var i = !!t.scopeParent
                , a = i ? t.scopeParent : t
                , s = function(e, t) {
                  var n = D(e);
                  return n < 0 && t && !k(e) ? 0 : n
              }(a, i)
                , c = i ? e(t.candidates) : a;
              0 === s ? i ? n.push.apply(n, c) : n.push(a) : r.push({
                  documentOrder: o,
                  tabIndex: s,
                  item: t,
                  isScope: i,
                  content: c
              })
          }
          )),
          r.sort(_).reduce((function(e, t) {
              return t.isScope ? e.push.apply(e, t.content) : e.push(t.content),
              e
          }
          ), []).concat(n)
      }
        , R = function(e, t) {
          var n;
          return n = (t = t || {}).getShadowRoot ? B([e], t.includeContainer, {
              filter: T.bind(null, t),
              flatten: !1,
              getShadowRoot: t.getShadowRoot,
              shadowRootFilter: j
          }) : function(e, t, n) {
              if (M(e))
                  return [];
              var r = Array.prototype.slice.apply(e.querySelectorAll(A));
              return t && F.call(e, A) && r.unshift(e),
              r.filter(n)
          }(e, t.includeContainer, T.bind(null, t)),
          H(n)
      }
        , x = n(947568);
      var P = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function O() {
          return O = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          O.apply(this, arguments)
      }
      let J = !1
        , N = 0;
      const z = () => "floating-ui-" + N++
        , K = o["useId".toString()] || function() {
          const [e,t] = r.useState(( () => J ? z() : void 0));
          return P(( () => {
              null == e && t(z())
          }
          ), []),
          r.useEffect(( () => {
              J || (J = !0)
          }
          ), []),
          e
      }
      ;
      const V = r.createContext(null)
        , W = r.createContext(null)
        , U = () => {
          var e;
          return (null == (e = r.useContext(V)) ? void 0 : e.id) || null
      }
        , Z = () => r.useContext(W);
      function Y(e) {
          return "data-floating-ui-" + e
      }
      function X(e) {
          const t = (0,
          r.useRef)(e);
          return P(( () => {
              t.current = e
          }
          )),
          t
      }
      const Q = Y("safe-polygon");
      function q(e, t, n) {
          return n && !g(n) ? 0 : "number" == typeof e ? e : null == e ? void 0 : e[t]
      }
      function $(e, t) {
          void 0 === t && (t = {});
          const {open: n, onOpenChange: o, dataRef: i, events: a, elements: {domReference: s, floating: l}, refs: u} = e
            , {enabled: d=!0, delay: f=0, handleClose: m=null, mouseOnly: p=!1, restMs: y=0, move: b=!0} = t
            , C = Z()
            , w = U()
            , A = X(m)
            , I = X(f)
            , F = r.useRef()
            , L = r.useRef()
            , M = r.useRef()
            , B = r.useRef()
            , k = r.useRef(!0)
            , D = r.useRef(!1)
            , _ = r.useRef(( () => {}
          ))
            , S = r.useCallback(( () => {
              var e;
              const t = null == (e = i.current.openEvent) ? void 0 : e.type;
              return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
          }
          ), [i]);
          r.useEffect(( () => {
              if (d)
                  return a.on("dismiss", e),
                  () => {
                      a.off("dismiss", e)
                  }
                  ;
              function e() {
                  clearTimeout(L.current),
                  clearTimeout(B.current),
                  k.current = !0
              }
          }
          ), [d, a]),
          r.useEffect(( () => {
              if (!d || !A.current || !n)
                  return;
              function e(e) {
                  S() && o(!1, e)
              }
              const t = v(l).documentElement;
              return t.addEventListener("mouseleave", e),
              () => {
                  t.removeEventListener("mouseleave", e)
              }
          }
          ), [l, n, o, d, A, i, S]);
          const E = r.useCallback((function(e, t) {
              void 0 === t && (t = !0);
              const n = q(I.current, "close", F.current);
              n && !M.current ? (clearTimeout(L.current),
              L.current = setTimeout(( () => o(!1, e)), n)) : t && (clearTimeout(L.current),
              o(!1, e))
          }
          ), [I, o])
            , G = r.useCallback(( () => {
              _.current(),
              M.current = void 0
          }
          ), [])
            , T = r.useCallback(( () => {
              if (D.current) {
                  const e = v(u.floating.current).body;
                  e.style.pointerEvents = "",
                  e.removeAttribute(Q),
                  D.current = !1
              }
          }
          ), [u]);
          return r.useEffect(( () => {
              if (d && c(s)) {
                  const e = s;
                  return n && e.addEventListener("mouseleave", u),
                  null == l || l.addEventListener("mouseleave", u),
                  b && e.addEventListener("mousemove", r, {
                      once: !0
                  }),
                  e.addEventListener("mouseenter", r),
                  e.addEventListener("mouseleave", a),
                  () => {
                      n && e.removeEventListener("mouseleave", u),
                      null == l || l.removeEventListener("mouseleave", u),
                      b && e.removeEventListener("mousemove", r),
                      e.removeEventListener("mouseenter", r),
                      e.removeEventListener("mouseleave", a)
                  }
              }
              function t() {
                  return !!i.current.openEvent && ["click", "mousedown"].includes(i.current.openEvent.type)
              }
              function r(e) {
                  if (clearTimeout(L.current),
                  k.current = !1,
                  p && !g(F.current) || y > 0 && 0 === q(I.current, "open"))
                      return;
                  const t = q(I.current, "open", F.current);
                  t ? L.current = setTimeout(( () => {
                      o(!0, e)
                  }
                  ), t) : o(!0, e)
              }
              function a(r) {
                  if (t())
                      return;
                  _.current();
                  const o = v(l);
                  if (clearTimeout(B.current),
                  A.current) {
                      n || clearTimeout(L.current),
                      M.current = A.current({
                          ...e,
                          tree: C,
                          x: r.clientX,
                          y: r.clientY,
                          onClose() {
                              T(),
                              G(),
                              E(r)
                          }
                      });
                      const t = M.current;
                      return o.addEventListener("mousemove", t),
                      void (_.current = () => {
                          o.removeEventListener("mousemove", t)
                      }
                      )
                  }
                  ("touch" !== F.current || !h(l, r.relatedTarget)) && E(r)
              }
              function u(n) {
                  t() || null == A.current || A.current({
                      ...e,
                      tree: C,
                      x: n.clientX,
                      y: n.clientY,
                      onClose() {
                          T(),
                          G(),
                          E(n)
                      }
                  })(n)
              }
          }
          ), [s, l, d, e, p, y, b, E, G, T, o, n, C, I, A, i]),
          P(( () => {
              var e;
              if (d && n && null != (e = A.current) && e.__options.blockPointerEvents && S()) {
                  const e = v(l).body;
                  if (e.setAttribute(Q, ""),
                  e.style.pointerEvents = "none",
                  D.current = !0,
                  c(s) && l) {
                      var t, r;
                      const e = s
                        , n = null == C || null == (t = C.nodesRef.current.find((e => e.id === w))) || null == (r = t.context) ? void 0 : r.elements.floating;
                      return n && (n.style.pointerEvents = ""),
                      e.style.pointerEvents = "auto",
                      l.style.pointerEvents = "auto",
                      () => {
                          e.style.pointerEvents = "",
                          l.style.pointerEvents = ""
                      }
                  }
              }
          }
          ), [d, n, w, l, s, C, A, i, S]),
          P(( () => {
              n || (F.current = void 0,
              G(),
              T())
          }
          ), [n, G, T]),
          r.useEffect(( () => () => {
              G(),
              clearTimeout(L.current),
              clearTimeout(B.current),
              T()
          }
          ), [d, s, G, T]),
          r.useMemo(( () => {
              if (!d)
                  return {};
              function e(e) {
                  F.current = e.pointerType
              }
              return {
                  reference: {
                      onPointerDown: e,
                      onPointerEnter: e,
                      onMouseMove(e) {
                          n || 0 === y || (clearTimeout(B.current),
                          B.current = setTimeout(( () => {
                              k.current || o(!0, e.nativeEvent)
                          }
                          ), y))
                      }
                  },
                  floating: {
                      onMouseEnter() {
                          clearTimeout(L.current)
                      },
                      onMouseLeave(e) {
                          a.emit("dismiss", {
                              type: "mouseLeave",
                              data: {
                                  returnFocus: !1
                              }
                          }),
                          E(e.nativeEvent, !1)
                      }
                  }
              }
          }
          ), [a, d, y, n, o, E])
      }
      function ee(e, t) {
          let n = e.filter((e => {
              var n;
              return e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
          }
          ))
            , r = n;
          for (; r.length; )
              r = e.filter((e => {
                  var t;
                  return null == (t = r) ? void 0 : t.some((t => {
                      var n;
                      return e.parentId === t.id && (null == (n = e.context) ? void 0 : n.open)
                  }
                  ))
              }
              )),
              n = n.concat(r);
          return n
      }
      const te = () => ({
          getShadowRoot: !0,
          displayCheck: "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
      });
      function ne(e, t) {
          const n = R(e, te());
          "prev" === t && n.reverse();
          const r = n.indexOf(f(v(e)));
          return n.slice(r + 1)[0]
      }
      function re(e, t) {
          const n = t || e.currentTarget
            , r = e.relatedTarget;
          return !r || !h(n, r)
      }
      function oe(e) {
          R(e, te()).forEach((e => {
              e.dataset.tabindex = e.getAttribute("tabindex") || "",
              e.setAttribute("tabindex", "-1")
          }
          ))
      }
      function ie(e) {
          e.querySelectorAll("[data-tabindex]").forEach((e => {
              const t = e.dataset.tabindex;
              delete e.dataset.tabindex,
              t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex")
          }
          ))
      }
      const ae = {
          border: 0,
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "fixed",
          whiteSpace: "nowrap",
          width: "1px",
          top: 0,
          left: 0
      };
      function se(e) {
          "Tab" === e.key && (e.target,
          clearTimeout(void 0))
      }
      const ce = r.forwardRef((function(e, t) {
          const [n,o] = r.useState();
          P(( () => (/apple/i.test(navigator.vendor) && o("button"),
          document.addEventListener("keydown", se),
          () => {
              document.removeEventListener("keydown", se)
          }
          )), []);
          const i = {
              ref: t,
              tabIndex: 0,
              role: n,
              "aria-hidden": !n || void 0,
              [Y("focus-guard")]: "",
              style: ae
          };
          return r.createElement("span", O({}, e, i))
      }
      ))
        , le = r.createContext(null);
      function ue(e) {
          let {children: t, id: n, root: o=null, preserveTabOrder: i=!0} = e;
          const a = function(e) {
              let {id: t, root: n} = void 0 === e ? {} : e;
              const [o,i] = r.useState(null)
                , a = K()
                , s = de()
                , l = r.useMemo(( () => ({
                  id: t,
                  root: n,
                  portalContext: s,
                  uniqueId: a
              })), [t, n, s, a])
                , u = r.useRef();
              return P(( () => () => {
                  null == o || o.remove()
              }
              ), [o, l]),
              P(( () => {
                  if (u.current === l)
                      return;
                  u.current = l;
                  const {id: e, root: t, portalContext: n, uniqueId: r} = l
                    , o = e ? document.getElementById(e) : null
                    , a = Y("portal");
                  if (o) {
                      const e = document.createElement("div");
                      e.id = r,
                      e.setAttribute(a, ""),
                      o.appendChild(e),
                      i(e)
                  } else {
                      let o = t || (null == n ? void 0 : n.portalNode);
                      o && !c(o) && (o = o.current),
                      o = o || document.body;
                      let s = null;
                      e && (s = document.createElement("div"),
                      s.id = e,
                      o.appendChild(s));
                      const l = document.createElement("div");
                      l.id = r,
                      l.setAttribute(a, ""),
                      o = s || o,
                      o.appendChild(l),
                      i(l)
                  }
              }
              ), [l]),
              o
          }({
              id: n,
              root: o
          })
            , [s,l] = r.useState(null)
            , u = r.useRef(null)
            , d = r.useRef(null)
            , f = r.useRef(null)
            , h = r.useRef(null)
            , m = !!s && !s.modal && s.open && i && !(!o && !a);
          return r.useEffect(( () => {
              if (a && i && (null == s || !s.modal))
                  return a.addEventListener("focusin", e, !0),
                  a.addEventListener("focusout", e, !0),
                  () => {
                      a.removeEventListener("focusin", e, !0),
                      a.removeEventListener("focusout", e, !0)
                  }
                  ;
              function e(e) {
                  a && re(e) && ("focusin" === e.type ? ie : oe)(a)
              }
          }
          ), [a, i, null == s ? void 0 : s.modal]),
          r.createElement(le.Provider, {
              value: r.useMemo(( () => ({
                  preserveTabOrder: i,
                  beforeOutsideRef: u,
                  afterOutsideRef: d,
                  beforeInsideRef: f,
                  afterInsideRef: h,
                  portalNode: a,
                  setFocusManagerState: l
              })), [i, a])
          }, m && a && r.createElement(ce, {
              "data-type": "outside",
              ref: u,
              onFocus: e => {
                  if (re(e, a)) {
                      var t;
                      null == (t = f.current) || t.focus()
                  } else {
                      const e = ne(document.body, "prev") || (null == s ? void 0 : s.refs.domReference.current);
                      null == e || e.focus()
                  }
              }
          }), m && a && r.createElement("span", {
              "aria-owns": a.id,
              style: ae
          }), a && (0,
          x.createPortal)(t, a), m && a && r.createElement(ce, {
              "data-type": "outside",
              ref: d,
              onFocus: e => {
                  if (re(e, a)) {
                      var t;
                      null == (t = h.current) || t.focus()
                  } else {
                      const t = ne(document.body, "next") || (null == s ? void 0 : s.refs.domReference.current);
                      null == t || t.focus(),
                      (null == s ? void 0 : s.closeOnFocusOut) && (null == s || s.onOpenChange(!1, e.nativeEvent))
                  }
              }
          }))
      }
      const de = () => r.useContext(le)
        , fe = o["useInsertionEffect".toString()] || (e => e());
      function he(e) {
          const t = r.useRef(( () => {}
          ));
          return fe(( () => {
              t.current = e
          }
          )),
          r.useCallback((function() {
              for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                  n[r] = arguments[r];
              return null == t.current ? void 0 : t.current(...n)
          }
          ), [])
      }
      const me = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick"
      }
        , pe = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture"
      }
        , ge = e => {
          var t, n;
          return {
              escapeKeyBubbles: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
              outsidePressBubbles: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n
          }
      }
      ;
      function ve(e, t) {
          void 0 === t && (t = {});
          const {open: n, onOpenChange: o, events: s, nodeId: u, elements: {reference: f, domReference: g, floating: w}, dataRef: A} = e
            , {enabled: I=!0, escapeKey: F=!0, outsidePress: L=!0, outsidePressEvent: M="pointerdown", referencePress: B=!1, referencePressEvent: k="pointerdown", ancestorScroll: D=!1, bubbles: _} = t
            , S = Z()
            , E = null != U()
            , G = he("function" == typeof L ? L : () => !1)
            , T = "function" == typeof L ? G : L
            , j = r.useRef(!1)
            , {escapeKeyBubbles: H, outsidePressBubbles: R} = ge(_)
            , x = he((e => {
              if (!n || !I || !F || "Escape" !== e.key)
                  return;
              const t = S ? ee(S.nodesRef.current, u) : [];
              if (!H && (e.stopPropagation(),
              t.length > 0)) {
                  let e = !0;
                  if (t.forEach((t => {
                      var n;
                      null == (n = t.context) || !n.open || t.context.dataRef.current.__escapeKeyBubbles || (e = !1)
                  }
                  )),
                  !e)
                      return
              }
              s.emit("dismiss", {
                  type: "escapeKey",
                  data: {
                      returnFocus: {
                          preventScroll: !1
                      }
                  }
              }),
              o(!1, function(e) {
                  return "nativeEvent"in e
              }(e) ? e.nativeEvent : e)
          }
          ))
            , P = he((e => {
              const t = j.current;
              if (j.current = !1,
              t)
                  return;
              if ("function" == typeof T && !T(e))
                  return;
              const n = b(e)
                , r = "[" + Y("inert") + "]"
                , f = v(w).querySelectorAll(r);
              let C = c(n) ? n : null;
              for (; C && !["html", "body", "#document"].includes(i(C)); ) {
                  const e = d(C);
                  if (e === v(w).body || !c(e))
                      break;
                  C = e
              }
              var A;
              if (f.length && c(n) && !n.matches("html,body") && !h(n, w) && Array.from(f).every((e => !h(C, e))))
                  return;
              if (l(n) && w) {
                  const t = n.clientWidth > 0 && n.scrollWidth > n.clientWidth
                    , r = n.clientHeight > 0 && n.scrollHeight > n.clientHeight;
                  let o = r && e.offsetX > n.clientWidth;
                  if (r && "rtl" === (A = n,
                  a(A).getComputedStyle(A)).direction && (o = e.offsetX <= n.offsetWidth - n.clientWidth),
                  o || t && e.offsetY > n.clientHeight)
                      return
              }
              const I = S && ee(S.nodesRef.current, u).some((t => {
                  var n;
                  return y(e, null == (n = t.context) ? void 0 : n.elements.floating)
              }
              ));
              if (y(e, w) || y(e, g) || I)
                  return;
              const F = S ? ee(S.nodesRef.current, u) : [];
              if (F.length > 0) {
                  let e = !0;
                  if (F.forEach((t => {
                      var n;
                      null == (n = t.context) || !n.open || t.context.dataRef.current.__outsidePressBubbles || (e = !1)
                  }
                  )),
                  !e)
                      return
              }
              s.emit("dismiss", {
                  type: "outsidePress",
                  data: {
                      returnFocus: E ? {
                          preventScroll: !0
                      } : m(e) || p(e)
                  }
              }),
              o(!1, e)
          }
          ));
          return r.useEffect(( () => {
              if (!n || !I)
                  return;
              function e(e) {
                  o(!1, e)
              }
              A.current.__escapeKeyBubbles = H,
              A.current.__outsidePressBubbles = R;
              const t = v(w);
              F && t.addEventListener("keydown", x),
              T && t.addEventListener(M, P);
              let r = [];
              return D && (c(g) && (r = (0,
              C.v9)(g)),
              c(w) && (r = r.concat((0,
              C.v9)(w))),
              !c(f) && f && f.contextElement && (r = r.concat((0,
              C.v9)(f.contextElement)))),
              r = r.filter((e => {
                  var n;
                  return e !== (null == (n = t.defaultView) ? void 0 : n.visualViewport)
              }
              )),
              r.forEach((t => {
                  t.addEventListener("scroll", e, {
                      passive: !0
                  })
              }
              )),
              () => {
                  F && t.removeEventListener("keydown", x),
                  T && t.removeEventListener(M, P),
                  r.forEach((t => {
                      t.removeEventListener("scroll", e)
                  }
                  ))
              }
          }
          ), [A, w, g, f, F, T, M, n, o, D, I, H, R, x, P]),
          r.useEffect(( () => {
              j.current = !1
          }
          ), [T, M]),
          r.useMemo(( () => I ? {
              reference: {
                  onKeyDown: x,
                  [me[k]]: e => {
                      B && (s.emit("dismiss", {
                          type: "referencePress",
                          data: {
                              returnFocus: !1
                          }
                      }),
                      o(!1, e.nativeEvent))
                  }
              },
              floating: {
                  onKeyDown: x,
                  [pe[M]]: () => {
                      j.current = !0
                  }
              }
          } : {}), [I, s, B, M, k, o, x])
      }
      function ye(e) {
          var t;
          void 0 === e && (e = {});
          const {open: n=!1, onOpenChange: o, nodeId: i} = e
            , [a,s] = r.useState(null)
            , l = (null == (t = e.elements) ? void 0 : t.reference) || a
            , u = (0,
          w.we)(e)
            , d = Z()
            , f = he(( (e, t) => {
              e && (m.current.openEvent = t),
              null == o || o(e, t)
          }
          ))
            , h = r.useRef(null)
            , m = r.useRef({})
            , p = r.useState(( () => function() {
              const e = new Map;
              return {
                  emit(t, n) {
                      var r;
                      null == (r = e.get(t)) || r.forEach((e => e(n)))
                  },
                  on(t, n) {
                      e.set(t, [...e.get(t) || [], n])
                  },
                  off(t, n) {
                      var r;
                      e.set(t, (null == (r = e.get(t)) ? void 0 : r.filter((e => e !== n))) || [])
                  }
              }
          }()))[0]
            , g = K()
            , v = r.useCallback((e => {
              const t = c(e) ? {
                  getBoundingClientRect: () => e.getBoundingClientRect(),
                  contextElement: e
              } : e;
              u.refs.setReference(t)
          }
          ), [u.refs])
            , y = r.useCallback((e => {
              (c(e) || null === e) && (h.current = e,
              s(e)),
              (c(u.refs.reference.current) || null === u.refs.reference.current || null !== e && !c(e)) && u.refs.setReference(e)
          }
          ), [u.refs])
            , b = r.useMemo(( () => ({
              ...u.refs,
              setReference: y,
              setPositionReference: v,
              domReference: h
          })), [u.refs, y, v])
            , C = r.useMemo(( () => ({
              ...u.elements,
              domReference: l
          })), [u.elements, l])
            , A = r.useMemo(( () => ({
              ...u,
              refs: b,
              elements: C,
              dataRef: m,
              nodeId: i,
              floatingId: g,
              events: p,
              open: n,
              onOpenChange: f
          })), [u, i, g, p, n, f, b, C]);
          return P(( () => {
              const e = null == d ? void 0 : d.nodesRef.current.find((e => e.id === i));
              e && (e.context = A)
          }
          )),
          r.useMemo(( () => ({
              ...u,
              context: A,
              refs: b,
              elements: C
          })), [u, b, C, A])
      }
      function be(e, t) {
          void 0 === t && (t = {});
          const {open: n, onOpenChange: o, dataRef: i, events: a, refs: s, elements: {floating: u, domReference: d}} = e
            , {enabled: m=!0, keyboardOnly: p=!0} = t
            , g = r.useRef("")
            , b = r.useRef(!1)
            , C = r.useRef();
          return r.useEffect(( () => {
              if (!m)
                  return;
              const e = v(u).defaultView || window;
              function t() {
                  !n && l(d) && d === f(v(d)) && (b.current = !0)
              }
              return e.addEventListener("blur", t),
              () => {
                  e.removeEventListener("blur", t)
              }
          }
          ), [u, d, n, m]),
          r.useEffect(( () => {
              if (m)
                  return a.on("dismiss", e),
                  () => {
                      a.off("dismiss", e)
                  }
                  ;
              function e(e) {
                  "referencePress" !== e.type && "escapeKey" !== e.type || (b.current = !0)
              }
          }
          ), [a, m]),
          r.useEffect(( () => () => {
              clearTimeout(C.current)
          }
          ), []),
          r.useMemo(( () => m ? {
              reference: {
                  onPointerDown(e) {
                      let {pointerType: t} = e;
                      g.current = t,
                      b.current = !(!t || !p)
                  },
                  onMouseLeave() {
                      b.current = !1
                  },
                  onFocus(e) {
                      var t;
                      b.current || "focus" === e.type && "mousedown" === (null == (t = i.current.openEvent) ? void 0 : t.type) && y(i.current.openEvent, d) || o(!0, e.nativeEvent)
                  },
                  onBlur(e) {
                      b.current = !1;
                      const t = e.relatedTarget
                        , n = c(t) && t.hasAttribute(Y("focus-guard")) && "outside" === t.getAttribute("data-type");
                      C.current = setTimeout(( () => {
                          h(s.floating.current, t) || h(d, t) || n || o(!1, e.nativeEvent)
                      }
                      ))
                  }
              }
          } : {}), [m, p, d, s, i, o])
      }
      function Ce(e, t, n) {
          const r = new Map;
          return {
              ..."floating" === n && {
                  tabIndex: -1
              },
              ...e,
              ...t.map((e => e ? e[n] : null)).concat(e).reduce(( (e, t) => t ? (Object.entries(t).forEach((t => {
                  let[n,o] = t;
                  var i;
                  0 === n.indexOf("on") ? (r.has(n) || r.set(n, []),
                  "function" == typeof o && (null == (i = r.get(n)) || i.push(o),
                  e[n] = function() {
                      for (var e, t = arguments.length, o = new Array(t), i = 0; i < t; i++)
                          o[i] = arguments[i];
                      return null == (e = r.get(n)) ? void 0 : e.map((e => e(...o))).find((e => void 0 !== e))
                  }
                  )) : e[n] = o
              }
              )),
              e) : e), {})
          }
      }
      function we(e) {
          void 0 === e && (e = []);
          const t = e
            , n = r.useCallback((t => Ce(t, e, "reference")), t)
            , o = r.useCallback((t => Ce(t, e, "floating")), t)
            , i = r.useCallback((t => Ce(t, e, "item")), e.map((e => null == e ? void 0 : e.item)));
          return r.useMemo(( () => ({
              getReferenceProps: n,
              getFloatingProps: o,
              getItemProps: i
          })), [n, o, i])
      }
      function Ae(e, t) {
          void 0 === t && (t = {});
          const {open: n, floatingId: o} = e
            , {enabled: i=!0, role: a="dialog"} = t
            , s = K();
          return r.useMemo(( () => {
              const e = {
                  id: o,
                  role: a
              };
              return i ? "tooltip" === a ? {
                  reference: {
                      "aria-describedby": n ? o : void 0
                  },
                  floating: e
              } : {
                  reference: {
                      "aria-expanded": n ? "true" : "false",
                      "aria-haspopup": "alertdialog" === a ? "dialog" : a,
                      "aria-controls": n ? o : void 0,
                      ..."listbox" === a && {
                          role: "combobox"
                      },
                      ..."menu" === a && {
                          id: s
                      }
                  },
                  floating: {
                      ...e,
                      ..."menu" === a && {
                          "aria-labelledby": s
                      }
                  }
              } : {}
          }
          ), [i, a, n, o, s])
      }
      function Ie(e, t) {
          void 0 === t && (t = {});
          const {open: n, elements: {floating: o}} = e
            , {duration: i=250} = t
            , a = ("number" == typeof i ? i : i.close) || 0
            , [s,c] = r.useState(!1)
            , [l,u] = r.useState("unmounted")
            , d = function(e, t) {
              const [n,o] = r.useState(e);
              return e && !n && o(!0),
              r.useEffect(( () => {
                  if (!e) {
                      const e = setTimeout(( () => o(!1)), t);
                      return () => clearTimeout(e)
                  }
              }
              ), [e, t]),
              n
          }(n, a);
          return P(( () => {
              s && !d && u("unmounted")
          }
          ), [s, d]),
          P(( () => {
              if (o) {
                  if (n) {
                      u("initial");
                      const e = requestAnimationFrame(( () => {
                          u("open")
                      }
                      ));
                      return () => {
                          cancelAnimationFrame(e)
                      }
                  }
                  c(!0),
                  u("close")
              }
          }
          ), [n, o]),
          {
              isMounted: d,
              status: l
          }
      }
      function Fe(e, t) {
          const [n,r] = e;
          let o = !1;
          const i = t.length;
          for (let e = 0, a = i - 1; e < i; a = e++) {
              const [i,s] = t[e] || [0, 0]
                , [c,l] = t[a] || [0, 0];
              s >= r != l >= r && n <= (c - i) * (r - s) / (l - s) + i && (o = !o)
          }
          return o
      }
      function Le(e) {
          void 0 === e && (e = {});
          const {buffer: t=.5, blockPointerEvents: n=!1, requireIntent: r=!0} = e;
          let o, i = !1, a = null, s = null, l = performance.now();
          const u = e => {
              let {x: n, y: u, placement: d, elements: f, onClose: m, nodeId: p, tree: g} = e;
              return function(e) {
                  function v() {
                      clearTimeout(o),
                      m()
                  }
                  if (clearTimeout(o),
                  !f.domReference || !f.floating || null == d || null == n || null == u)
                      return;
                  const {clientX: y, clientY: C} = e
                    , w = [y, C]
                    , A = b(e)
                    , I = "mouseleave" === e.type
                    , F = h(f.floating, A)
                    , L = h(f.domReference, A)
                    , M = f.domReference.getBoundingClientRect()
                    , B = f.floating.getBoundingClientRect()
                    , k = d.split("-")[0]
                    , D = n > B.right - B.width / 2
                    , _ = u > B.bottom - B.height / 2
                    , S = function(e, t) {
                      return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height
                  }(w, M)
                    , E = B.width > M.width
                    , G = B.height > M.height
                    , T = (E ? M : B).left
                    , j = (E ? M : B).right
                    , H = (G ? M : B).top
                    , R = (G ? M : B).bottom;
                  if (F && (i = !0,
                  !I))
                      return;
                  if (L && (i = !1),
                  L && !I)
                      return void (i = !0);
                  if (I && c(e.relatedTarget) && h(f.floating, e.relatedTarget))
                      return;
                  if (g && ee(g.nodesRef.current, p).some((e => {
                      let {context: t} = e;
                      return null == t ? void 0 : t.open
                  }
                  )))
                      return;
                  if ("top" === k && u >= M.bottom - 1 || "bottom" === k && u <= M.top + 1 || "left" === k && n >= M.right - 1 || "right" === k && n <= M.left + 1)
                      return v();
                  let x = [];
                  switch (k) {
                  case "top":
                      x = [[T, M.top + 1], [T, B.bottom - 1], [j, B.bottom - 1], [j, M.top + 1]];
                      break;
                  case "bottom":
                      x = [[T, B.top + 1], [T, M.bottom - 1], [j, M.bottom - 1], [j, B.top + 1]];
                      break;
                  case "left":
                      x = [[B.right - 1, R], [B.right - 1, H], [M.left + 1, H], [M.left + 1, R]];
                      break;
                  case "right":
                      x = [[M.right - 1, R], [M.right - 1, H], [B.left + 1, H], [B.left + 1, R]]
                  }
                  if (!Fe([y, C], x)) {
                      if (i && !S)
                          return v();
                      if (!I && r) {
                          const t = function(e, t) {
                              const n = performance.now()
                                , r = n - l;
                              if (null === a || null === s || 0 === r)
                                  return a = e,
                                  s = t,
                                  l = n,
                                  null;
                              const o = e - a
                                , i = t - s
                                , c = Math.sqrt(o * o + i * i);
                              return a = e,
                              s = t,
                              l = n,
                              c / r
                          }(e.clientX, e.clientY);
                          if (null !== t && t < .1)
                              return v()
                      }
                      Fe([y, C], function(e) {
                          let[n,r] = e;
                          switch (k) {
                          case "top":
                              return [[E ? n + t / 2 : D ? n + 4 * t : n - 4 * t, r + t + 1], [E ? n - t / 2 : D ? n + 4 * t : n - 4 * t, r + t + 1], [B.left, D || E ? B.bottom - t : B.top], [B.right, D ? E ? B.bottom - t : B.top : B.bottom - t]];
                          case "bottom":
                              return [[E ? n + t / 2 : D ? n + 4 * t : n - 4 * t, r - t], [E ? n - t / 2 : D ? n + 4 * t : n - 4 * t, r - t], [B.left, D || E ? B.top + t : B.bottom], [B.right, D ? E ? B.top + t : B.bottom : B.top + t]];
                          case "left":
                              {
                                  const e = [n + t + 1, G ? r + t / 2 : _ ? r + 4 * t : r - 4 * t]
                                    , o = [n + t + 1, G ? r - t / 2 : _ ? r + 4 * t : r - 4 * t];
                                  return [[_ || G ? B.right - t : B.left, B.top], [_ ? G ? B.right - t : B.left : B.right - t, B.bottom], e, o]
                              }
                          case "right":
                              return [[n - t, G ? r + t / 2 : _ ? r + 4 * t : r - 4 * t], [n - t, G ? r - t / 2 : _ ? r + 4 * t : r - 4 * t], [_ || G ? B.left + t : B.right, B.top], [_ ? G ? B.left + t : B.right : B.left + t, B.bottom]]
                          }
                      }([n, u])) ? !i && r && (o = window.setTimeout(v, 40)) : v()
                  }
              }
          }
          ;
          return u.__options = {
              blockPointerEvents: n
          },
          u
      }
  }
  ,
  593489: (e, t, n) => {
      "use strict";
      function r(e) {
          return a(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }
      function o(e) {
          var t;
          return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }
      function i(e) {
          var t;
          return null == (t = (a(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }
      function a(e) {
          return e instanceof Node || e instanceof o(e).Node
      }
      function s(e) {
          return e instanceof Element || e instanceof o(e).Element
      }
      function c(e) {
          return e instanceof HTMLElement || e instanceof o(e).HTMLElement
      }
      function l(e) {
          return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof o(e).ShadowRoot)
      }
      function u(e) {
          const {overflow: t, overflowX: n, overflowY: r, display: o} = v(e);
          return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
      }
      function d(e) {
          return ["table", "td", "th"].includes(r(e))
      }
      function f(e) {
          return [":popover-open", ":modal"].some((t => {
              try {
                  return e.matches(t)
              } catch (e) {
                  return !1
              }
          }
          ))
      }
      function h(e) {
          const t = p()
            , n = s(e) ? v(e) : e;
          return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
      }
      function m(e) {
          let t = b(e);
          for (; c(t) && !g(t); ) {
              if (h(t))
                  return t;
              if (f(t))
                  return null;
              t = b(t)
          }
          return null
      }
      function p() {
          return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }
      function g(e) {
          return ["html", "body", "#document"].includes(r(e))
      }
      function v(e) {
          return o(e).getComputedStyle(e)
      }
      function y(e) {
          return s(e) ? {
              scrollLeft: e.scrollLeft,
              scrollTop: e.scrollTop
          } : {
              scrollLeft: e.scrollX,
              scrollTop: e.scrollY
          }
      }
      function b(e) {
          if ("html" === r(e))
              return e;
          const t = e.assignedSlot || e.parentNode || l(e) && e.host || i(e);
          return l(t) ? t.host : t
      }
      function C(e) {
          const t = b(e);
          return g(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : c(t) && u(t) ? t : C(t)
      }
      function w(e, t, n) {
          var r;
          void 0 === t && (t = []),
          void 0 === n && (n = !0);
          const i = C(e)
            , a = i === (null == (r = e.ownerDocument) ? void 0 : r.body)
            , s = o(i);
          if (a) {
              const e = A(s);
              return t.concat(s, s.visualViewport || [], u(i) ? i : [], e && n ? w(e) : [])
          }
          return t.concat(i, w(i, [], n))
      }
      function A(e) {
          return Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }
      n.d(t, {
          $4: () => b,
          CP: () => y,
          L9: () => v,
          Lv: () => d,
          Tc: () => p,
          Tf: () => f,
          ZU: () => u,
          _m: () => A,
          ep: () => i,
          eu: () => g,
          gJ: () => m,
          mq: () => r,
          sQ: () => h,
          sb: () => c,
          v9: () => w,
          vq: () => s,
          zk: () => o
      })
  }
  ,
  240715: (e, t, n) => {
      "use strict";
      n.d(t, {
          o0: () => S
      });
      var r = /[,.。，、#%&/\\+*¡!¿?[\]！？;:…„“«»”"“_–—~]/gi
        , o = /[0-9]/g
        , i = /[\uFF10-\uFF19]/g
        , a = /\s\s+/g
        , s = /’/gi
        , c = /[\u0300-\u036f]/g;
      function l(e) {
          return e.normalize("NFD").replace(c, "")
      }
      var u = {
          light: {
              TRAINING_UNIQUE_GRAMS: [1, 2, 3, 4],
              TOP_LANGUAGE_UNIQUE_GRAMS: 60,
              TOP_LANGUAGE_STATS_GRAMS: 50
          },
          normal: {
              TRAINING_UNIQUE_GRAMS: [1, 2, 3, 4, 5],
              TOP_LANGUAGE_UNIQUE_GRAMS: 100,
              TOP_LANGUAGE_STATS_GRAMS: 180
          },
          heavy: {
              TRAINING_UNIQUE_GRAMS: [1, 2, 3, 4, 5],
              TOP_LANGUAGE_UNIQUE_GRAMS: 320,
              TOP_LANGUAGE_STATS_GRAMS: 1024
          }
      }
        , d = "light"
        , f = u[d].TRAINING_UNIQUE_GRAMS
        , h = (u[d].TOP_LANGUAGE_UNIQUE_GRAMS,
      u[d].TOP_LANGUAGE_STATS_GRAMS,
      1e4);
      function m(e) {
          return Math.round(e * h) / h
      }
      var p = e => {
          let t = {
              only: [],
              verbose: !1
          };
          return e ? Object.assign(t, e) : t
      }
        , g = {
          afr: {
              code: "af",
              region: "africa",
              name: "Afrikaans",
              skipLight: !0
          },
          amh: {
              code: "am",
              region: "africa",
              name: "Amharic",
              skipLight: !0,
              coefProb: 0
          },
          ber: {
              code: "ber",
              region: "africa",
              name: "Berber",
              skipLight: !0,
              coefProb: .25
          },
          run: {
              code: "rn",
              region: "africa",
              name: "Kirundi",
              skipLight: !0
          },
          jpn: {
              code: "ja",
              region: "asia-east",
              name: "Japanese",
              alias: ["jp"],
              coefProb: 0
          },
          cmn: {
              code: "zh",
              region: "asia-east",
              name: "Chinese",
              alias: ["cn"],
              coefProb: .25
          },
          kor: {
              code: "ko",
              region: "asia-east",
              name: "Korean",
              alias: ["kr"],
              coefProb: 0
          },
          mya: {
              code: "my",
              region: "asia",
              name: "Burmese",
              skipLight: !0,
              coefProb: 0
          },
          tha: {
              code: "th",
              region: "asia",
              name: "Thai",
              coefProb: 0
          },
          vie: {
              code: "vi",
              region: "asia",
              name: "Vietnamese",
              skipLight: !0,
              coefProb: 0
          },
          ind: {
              code: "id",
              region: "asia",
              name: "Indonesian",
              skipLight: !0
          },
          khm: {
              code: "km",
              region: "asia",
              name: "Khmer",
              skipLight: !0,
              coefProb: 0
          },
          tgl: {
              code: "tl",
              region: "asia",
              name: "Tagalog",
              skipLight: !0
          },
          ben: {
              code: "bn",
              region: "asia-south",
              name: "Bengali",
              coefProb: 0
          },
          tam: {
              code: "ta",
              region: "asia-south",
              name: "Tamil",
              skipLight: !0,
              coefProb: 0
          },
          hin: {
              code: "hi",
              region: "asia-south",
              name: "Hindi",
              coefProb: 0
          },
          urd: {
              code: "ur",
              region: "asia-south",
              name: "Urdu",
              skipLight: !0,
              coefProb: 0
          },
          guj: {
              code: "gu",
              region: "asia-south",
              name: "Gujarati",
              skipLight: !0,
              coefProb: 0
          },
          kan: {
              code: "kn",
              region: "asia-south",
              name: "Kannada",
              skipLight: !0,
              coefProb: 0
          },
          tel: {
              code: "te",
              region: "asia-south",
              name: "Telugu",
              skipLight: !0,
              coefProb: 0
          },
          fra: {
              code: "fr",
              region: "europe-west",
              name: "French"
          },
          eng: {
              code: "en",
              region: "europe-west",
              name: "English",
              alias: ["us", "gb"]
          },
          deu: {
              code: "de",
              region: "europe-west",
              name: "German",
              coefProb: .5
          },
          spa: {
              code: "es",
              region: "europe-west",
              name: "Spanish"
          },
          por: {
              code: "pt",
              region: "europe-west",
              name: "Portuguese",
              alias: ["po"]
          },
          ita: {
              code: "it",
              region: "europe-west",
              name: "Italian"
          },
          nld: {
              code: "nl",
              region: "europe-west",
              name: "Dutch"
          },
          gle: {
              code: "ga",
              region: "europe-west",
              name: "Irish",
              skipLight: !0
          },
          lat: {
              code: "la",
              region: "europe",
              name: "Latin",
              skipLight: !0
          },
          ces: {
              code: "cs",
              region: "europe",
              name: "Czech",
              skipLight: !0
          },
          srp: {
              code: "sr",
              region: "europe",
              name: "Serbian",
              skipLight: !0
          },
          ell: {
              code: "el",
              region: "europe",
              name: "Greek",
              alias: ["gr"],
              coefProb: 0
          },
          mkd: {
              code: "mk",
              region: "europe",
              name: "Macedonian",
              skipLight: !0,
              coefProb: 1.5
          },
          slk: {
              code: "sk",
              region: "europe",
              name: "Slovak",
              skipLight: !0
          },
          dan: {
              code: "da",
              region: "europe-north",
              name: "Danish",
              skipLight: !0,
              coefProb: 1.5
          },
          swe: {
              code: "sv",
              region: "europe-north",
              name: "Swedish"
          },
          fin: {
              code: "fi",
              region: "europe-north",
              name: "Finnish"
          },
          nob: {
              code: "no",
              region: "europe-north",
              name: "Norwegian",
              coefProb: 1.5
          },
          isl: {
              code: "is",
              region: "europe-north",
              name: "Icelandic",
              skipLight: !0,
              coefProb: .5
          },
          hun: {
              code: "hu",
              region: "europe-east",
              name: "Hungarian"
          },
          ron: {
              code: "ro",
              region: "europe-east",
              name: "Romanian",
              coefProb: .5
          },
          bul: {
              code: "bg",
              region: "europe-east",
              name: "Bulgarian",
              skipLight: !0
          },
          bel: {
              code: "be",
              region: "europe-east",
              name: "Belarusian",
              skipLight: !0
          },
          rus: {
              code: "ru",
              region: "europe-east",
              name: "Russian"
          },
          ukr: {
              code: "uk",
              region: "europe-east",
              name: "Ukrainian",
              skipLight: !0
          },
          pol: {
              code: "pl",
              region: "europe-east",
              name: "Polish",
              coefProb: .5
          },
          lit: {
              code: "lt",
              region: "europe-east",
              name: "Lithuanian",
              skipLight: !0
          },
          est: {
              code: "et",
              region: "europe-east",
              name: "Estonian",
              skipLight: !0
          },
          lvs: {
              code: "lv",
              region: "europe-east",
              name: "Latvian",
              skipLight: !0
          },
          hye: {
              code: "hy",
              region: "middle-east",
              name: "Armenian",
              skipLight: !0,
              coefProb: 0
          },
          tur: {
              code: "tr",
              region: "middle-east",
              name: "Turkish"
          },
          heb: {
              code: "he",
              region: "middle-east",
              name: "Hebrew",
              coefProb: 0
          },
          yid: {
              code: "yi",
              region: "middle-east",
              name: "Yiddish",
              skipLight: !0,
              coefProb: .5
          },
          ara: {
              code: "ar",
              region: "middle-east",
              name: "Arabic",
              coefProb: 0
          },
          pes: {
              code: "fa",
              region: "middle-east",
              name: "Persian",
              skipLight: !0,
              coefProb: 0
          },
          tat: {
              code: "tt",
              region: "middle-east",
              name: "Tatar",
              skipLight: !0,
              coefProb: 0
          },
          kaz: {
              code: "kk",
              region: "middle-east",
              name: "Kazakh",
              skipLight: !0
          },
          mon: {
              code: "mn",
              region: "middle-east",
              name: "Mongolian",
              skipLight: !0
          },
          tuk: {
              code: "tk",
              region: "middle-east",
              name: "Turkmen",
              skipLight: !0
          },
          epo: {
              code: "eo",
              region: "other",
              name: "Esperanto",
              skipLight: !0,
              coefProb: .5
          },
          vol: {
              code: "vo",
              region: "other",
              name: "Volapuk",
              skipLight: !0,
              coefProb: .5
          },
          tlh: {
              code: "tlh",
              region: "other",
              name: "Klingon",
              skipLight: !0,
              coefProb: .25
          }
      }
        , v = new Set(Object.entries(g).filter((e => !e[1].skipLight)).map((e => e[0])))
        , y = [...v.values()]
        , b = (Object.fromEntries(y.map(( (e, t) => [e, t + 1]))),
      Object.fromEntries(y.map(( (e, t) => [t + 1, e]))));
      function C(e) {
          return e in g ? g[e].code : e
      }
      var w = {
          id: "tinyld-dict",
          multiples: {
              " '": "D07M0B",
              " aa": "B02D34G13",
              " aan": "DA9",
              " ac": "72F812907A3YB7VC1GD0GF06JEKM0U",
              " ace": "A18B0SJEKM0B",
              " ai": "73F809A08B21C2DG61J7AM0U",
              " all": "74J83H94XA11C6PD5QF6ZG0UH68I04M0C",
              " am ": "80U91WJG6",
              " are": "86UA04B05C0IJ5WL04",
              " at ": "84LA02D08H93M05",
              " att": "72K80Q902C1MFKTH04I0FM0D",
              " av ": "F5YHAJ",
              " az": "A0CB0BC06IJAJ0LL02M12",
              " az ": "IS8M0T",
              " be ": "87GF0AI31",
              " bir": "80EC11I09J0RMRC",
              " bli": "80490KD2AF2SH5IL0A",
              " bu ": "707MD7",
              " bun": "802903H05I03J4LM8V",
              " by": "81MF0RH0QL8N",
              " był": "L86",
              " c'": "75MC1N",
              " ce ": "7C9C0EJEM",
              " che": "74080T907A05B2KCO5D04F05J1JL02",
              " ci": "71580DA2XB2KC6ID02F04I0LJ5UL5OM0S",
              " com": "7BX83Z907ACUBKZCASD0UJ45",
              " con": "7A482ZAITBCQCFLD13J80",
              " cos": "704808A29B0SCIXJ0N",
              " cs": "I84",
              " csa": "IAK",
              " cu": "70V80LA8EB2DC22D02I07JGCL0AM09",
              " cu ": "JFJ",
              " cz": "LBQ",
              " czy": "L8V",
              " câ": "B08J84",
              " că": "JF8",
              " că ": "JIJ",
              " d'": "78TB02C0T",
              " da ": "91KA0LB7UC6LH1OJ0UL07M1L",
              " das": "9JRA03B1MD02",
              " dat": "70480A903A04B03C18DK0F0EH0SJ3EL02",
              " de ": "7SGASGBQWDRVF6KH7JI5FJSGM2H",
              " deg": "702803C0XD08H7UJ0D",
              " değ": "M9Z",
              " di ": "A09CPSH04",
              " did": "881",
              " die": "70M80N9LQA16B02C0XD67J05L03",
              " dig": "704802A0OB0WC05F6Y",
              " do ": "8BRB9QC02LAM",
              " don": "73E86X903A0UB05C0SD0DM08",
              " dov": "C8DJ0C",
              " du ": "77Q9CNFK1HM3",
              " dzi": "L83",
              " dé": "76IA0DB03I0A",
              " dü": "904I04M86",
              " e ": "A08BAPC5BI02J6I",
              " ee": "D9C",
              " een": "DP5",
              " egy": "803D03F02G02IQ2",
              " ei ": "902B02D02GHXH09J61",
              " ein": "9NHD0O",
              " el ": "APOI82JBXM08",
              " ela": "B8PI0Q",
              " ell": "7BLA8QD03F1QG06H27I2CM0D",
              " em ": "BB7",
              " en ": "7D2AM9D9FFH6GBVHJIM2Q",
              " er ": "9AWD8MF24HSCM02",
              " era": "A2YB2TC8VD09F09J6I",
              " es ": "71L9C0AKI",
              " est": "7KG803AQJBPDC10D02G09I1KJPIM03",
              " et ": "7ANG2PH8AM0I",
              " ett": "F7BGDGH32I0TM3Y",
              " eu ": "716BLEJ43",
              " ez": "IAFJ03M05",
              " ez ": "IE3",
              " fai": "7D780FC0FJ07",
              " faz": "B7KM1Y",
              " fö": "FF1I0R",
              " för": "FI0",
              " fø": "H23",
              " ger": "702809933A03B0JC0ND0ZF0DI03J0OM97",
              " gj": "F1OH3T",
              " gjø": "H5G",
              " gy": "F03I4G",
              " gå": "F4SH2D",
              " gö": "F41I05MAO",
              " gör": "F57I0AM8D",
              " ha ": "A3PCFSF2XH3CI7B",
              " hab": "70Z80399WA8PB08I05M0K",
              " hav": "87ZB0XD02F07G05H0EI0GM1C",
              " he ": "8C6A2JG40",
              " heb": "903A02B02DH2",
              " hee": "DD1",
              " her": "70287O92HA2FB06D1CF08G22H2ZI08L0DM71",
              " het": "DQKF0PG1IH0DI0I",
              " hij": "A1HDFL",
              " his": "70G86WA0QB0OF0DG0AH0MI25L0MM1D",
              " hj": "F25H1S",
              " ho ": "C9Y",
              " hog": "A04D07INN",
              " hon": "70H808902A0CB0BD25FC8G03I0KL02",
              " hun": "80J915A03D1DF1XG03HBCI03",
              " hv": "H8E",
              " hva": "H6S",
              " hvo": "H89",
              " hä": "910F9RGGY",
              " hän": "90GF1SGOM",
              " här": "FA7G03",
              " i'": "844",
              " ic": "71E8049BTF02L0JM02",
              " ich": "9NPL0S",
              " ih": "94PF0JG2SM1R",
              " ik": "DCMF05G1FHAKI02M29",
              " ik ": "DSG",
              " ikk": "G0KHMB",
              " il ": "7JVCKY",
              " in ": "8CU9AMCP2DGHF1CJ0A",
              " io": "B02C89J03",
              " io ": "CCM",
              " is ": "8FTDQJF03H05I9O",
              " iss": "80490AB8F",
              " ist": "9IXB1WC07F05G1AI0YJ0EL0CMBN",
              " it ": "881",
              " iç": "MBC",
              " içi": "MBB",
              " j'": "78W",
              " j'a": "7BH",
              " ja ": "90QD0EF0CGBYH0II05L1B",
              " jag": "903D02FSG",
              " jak": "G0DH06L8G",
              " je ": "7QE90EDN0L0L",
              " jeg": "HSGI0KL2P",
              " jes": "805A03B03F02LN0",
              " kel": "903D03G1EIBSL02M0I",
              " kj": "F02H2C",
              " kn": "849906D07F0OH09",
              " kno": "86F904D07",
              " kom": "92YD43F8KG0KH6UI0XL18M10",
              " kä": "906F2EG65",
              " ké": "I6F",
              " kö": "91CF2BG0AI5TM2K",
              " l'": "7D8C6R",
              " l'a": "7ACC3S",
              " le ": "7O2A71CBKF02I2MJ1E",
              " les": "7HW80990JA13B03C03D0CG02H1QI4GL03",
              " ll": "A5B",
              " lo ": "ABKC6EH06",
              " los": "80S90CADJD09L03",
              " lä": "90IF5MG3Y",
              " mai": "77L808903B85C3YG1PI0AJDX",
              " me ": "77J874ADPB7JC3TD7MG38",
              " meg": "C14HB1IQXL02",
              " mi ": "A8LCB4H06I5SJ0NL59M56",
              " mig": "70680XA02C17F9TI02L02",
              " mij": "DD6J0BL02",
              " mit": "70697SA07B02C02F22GC7H1JI5T",
              " moe": "B04D9J",
              " mui": "B8ED05G24",
              " my": "703838F2WG26H19L2C",
              " má": "A54B0GI66",
              " már": "IAZ",
              " må": "F4UH2G",
              " mé": "71AA0FB0MI4I",
              " n'": "79SC03",
              " na ": "903B6QD0VI0NLEF",
              " nag": "70J902D05F03IA3L0J",
              " ne ": "7JPC21G1QI6OJ2ZM8Q",
              " nek": "H06ID2",
              " nem": "B13C0HD0NISFJ06M02",
              " nie": "70292PA0HC1HDN2G03LQT",
              " no ": "826APLB77C0NG0LL06",
              " noe": "D0AH7AM09",
              " non": "718806CSG",
              " nou": "7DUD09G11J2Q",
              " nu ": "702D2AF2PJS4",
              " nã": "BLO",
              " não": "BOG",
              " nä": "90DF3PG5K",
              " nå": "F4NH2C",
              " oc": "70K807A19B0UC10D03F6ZJ1PL12M02",
              " och": "A0AD08F8NJ10L0D",
              " of ": "8CFD2K",
              " og": "C21D06F03H6LL15",
              " og ": "HEI",
              " old": "80XI0QMA0",
              " ole": "GNML02",
              " oli": "A02C03D07F0AGFEI02L02",
              " om ": "D7WF8ZH6JJ0Z",
              " on ": "73X860GSGL58M0P",
              " onu": "MD6",
              " op ": "DB4",
              " opp": "705807C05D04G18H5B",
              " os ": "702A0OB8L",
              " ov": "80QA03B0BC06D1EF06G3KH1N",
              " pe ": "JF5",
              " pou": "7G1804B1R",
              " pow": "808L89",
              " prz": "LGN",
              " pue": "A97",
              " på": "FCSH7H",
              " på ": "FG6HGP",
              " q": "76F80H903ABABB7C5I",
              " qu": "7OD80Z905AQPBSGCIB",
              " qu'": "7A1",
              " qua": "73L806906B9SCCM",
              " que": "7O880L903ARRBSGCFQ",
              " qui": "78480ZA93B1CC3J",
              " qué": "A7V",
              " sch": "7028159FXC0ND6WF0BI03J1HL0C",
              " se ": "76NAEWBA7C3FF17GC2H1YI0XJA1",
              " she": "888G02",
              " si ": "74TA4NB0CC8DH1DJ05",
              " sie": "7069G7A3MC2KG1QH1FI0FL1C",
              " się": "LJL",
              " ska": "802F50G03H5AL0D",
              " sl": "80PC07D12F2VH1NJ0WM04",
              " sn": "809D0MF24H2AL04",
              " som": "72583U90AA0UB0WC0FD0OF7CG02HATJ0E",
              " son": "7B780K91JA4MB0SCFPF0HI02M4O",
              " su ": "704A8VC1AM0H",
              " sun": "80FG0UH07JFLM05",
              " sz": "IHAL53",
              " sze": "IGNL0N",
              " sä": "906F3ZG1V",
              " så": "F59H2X",
              " så ": "F4OH6M",
              " sö": "F0UG0LI0HMAA",
              " söy": "MAI",
              " să": "JPO",
              " să ": "JSD",
              " te ": "74FA7DB2VC1UDF0F0EG25H08I5SJ7ZL0W",
              " tha": "8LQC02D02",
              " the": "8SG90DD0L",
              " thi": "8CJ",
              " tie": "70J80490IAA4C05D0NG8XI04",
              " til": "803FB5G13HHKI09",
              " to ": "8QRH1NLG5",
              " tod": "81890DA8UB58G3Y",
              " tou": "7CB80C902D02G03",
              " tu ": "7CQ903A42B0XC3MJ2BL1V",
              " tud": "B23IFT",
              " tul": "704G9PH09I0D",
              " tä": "904F1BGDN",
              " um": "80291PBK5C08G02H05J0NL18M1D",
              " um ": "938BFJ",
              " uma": "902BBTC07J09L07M0F",
              " un ": "7GWAHNCGSJF1",
              " una": "804907AD8CB2I0CJ0T",
              " une": "7D5804908G0JJ15",
              " vad": "C3TD1AF6WI0OJ0C",
              " vag": "704A04B03C02IDR",
              " van": "704803A0JB03C3IDIJF0TG37H3AIHT",
              " ve ": "A0GC05M8F",
              " vi ": "A0KB0MC2HF9WH97",
              " vil": "715805A02B03C05F8TG0KH9OI28",
              " voc": "702A03BJYC0CD02J0A",
              " voi": "74Z806C3SGBNJ58",
              " vol": "71480490QA1RB1NC5BD2CF04H05IFJJ07M02",
              " voo": "B05DAT",
              " vou": "7H6B2Q",
              " vr": "71ID2BF02J6G",
              " vä": "F6CG42",
              " væ": "H2M",
              " vær": "H6J",
              " w ": "LD1",
              " wa": "7028CH97BA02B03D8OF02G02L1XM02",
              " was": "8D396KD9LL0H",
              " wat": "818DA4",
              " we ": "85MD9QL0B",
              " wh": "88WB02",
              " wie": "96ZD2NL86",
              " wir": "9B3",
              " wit": "86Q906D0GL05",
              " wo": "85K92WD26L22",
              " wy": "L8Z",
              " y ": "72JA8M",
              " yap": "MFB",
              " ye": "70F81KA05F02J04M8R",
              " you": "7028LO",
              " za": "908A0DB07C02D1VI0EJ07LELM6A",
              " ze": "91FB03C0AD5QI0AJ0LL2FM0W",
              " ze ": "DCCL1J",
              " zij": "DII",
              " zu": "989A03C06D0PI03L0C",
              " zu ": "9D5",
              " à": "73CB0Y",
              " à ": "7F0B37",
              " á": "A08B0EI2W",
              " ä": "90BFCOG13",
              " är": "904FOEG05",
              " är ": "FRS",
              " å": "F1MH6J",
              " å ": "F02H94",
              " ç": "70OM8P",
              " ço": "MAT",
              " çok": "M9Q",
              " è": "C5N",
              " è ": "CIM",
              " é": "727A21B4XD05H03I9Z",
              " é ": "BI9",
              " él": "70NA5YI2E",
              " él ": "A8XI0R",
              " és": "A0BB08I5O",
              " és ": "B0AICW",
              " ét": "76PI0I",
              " ê": "70N",
              " î": "JBJ",
              " în": "JQR",
              " în ": "JMV",
              " înt": "JCC",
              " ö": "905F1SI2KM50",
              " ø": "H18",
              " ü": "917I13M24",
              " ş": "J0EM61",
              " şe": "M8W",
              " şey": "M8F",
              " ż": "L5R",
              " że": "L8U",
              " że ": "LAM",
              " ș": "J49",
              " și": "J8Y",
              " și ": "JBW",
              " б": "KFE",
              " бы": "KFG",
              " был": "KCH",
              " в": "KQJ",
              " в ": "KJ7",
              " все": "K7D",
              " вы": "KF9",
              " вы ": "KD5",
              " д": "KHK",
              " до": "KCG",
              " за": "KFA",
              " зна": "KAI",
              " к": "KGJ",
              " ка": "KCG",
              " как": "KBV",
              " ко": "KCE",
              " м": "KM1",
              " мен": "KAA",
              " мн": "KCI",
              " мне": "KDC",
              " мо": "KET",
              " мы ": "K9E",
              " мэр": "K7K",
              " н": "KS4",
              " на": "KOV",
              " на ": "KGM",
              " не": "KSG",
              " не ": "KSG",
              " о": "KLC",
              " он": "KIF",
              " он ": "KE5",
              " она": "K8T",
              " п": "KR9",
              " по": "KSD",
              " пр": "KMB",
              " при": "KCM",
              " про": "KEF",
              " ра": "KCG",
              " с": "KQB",
              " ска": "K8F",
              " т": "KPP",
              " так": "K94",
              " те": "KBU",
              " теб": "KAT",
              " то": "KPV",
              " том": "KQN",
              " ты": "KEE",
              " ты ": "KIB",
              " хо": "KBV",
              " ч": "KEK",
              " чт": "KKA",
              " что": "KOQ",
              " эт": "KL4",
              " это": "KNI",
              " я": "KGE",
              " я ": "KQH",
              " 他": "2I4",
              " 他们": "2F5",
              " 你": "2IJ",
              " 你可以": "2R5",
              " 你知道": "2O9",
              " 她": "29B",
              " 如果": "2E7",
              " 如果你": "2SA",
              " 我": "2SG",
              " 我不": "2OU",
              " 我不想": "2O0",
              " 我不知": "2SD",
              " 我们": "2QU",
              " 我們": "2O2",
              " 我喜欢": "2P1",
              " 我在": "2CQ",
              " 我希望": "2PL",
              " 我想": "2I9",
              " 我的": "2IV",
              " 我知道": "2RE",
              " 我觉得": "2O9",
              " 汤": "261",
              " 汤姆": "2SG",
              " 汤姆不": "2OI",
              " 湯姆": "2MC",
              " 这": "26O",
              "' ": "802902C0CD02I02",
              "'a": "753C19L02M1D",
              "'ai": "79OC02",
              "'ai ": "7B4",
              "'d": "80LM1N",
              "'e": "73DC0GM04",
              "'es": "7AHC0R",
              "'est": "7ENC0E",
              "'h": "70JC0H",
              "'i": "71DC0IM08",
              "'l": "80RM0F",
              "'m": "814",
              "'o": "70MC0B",
              "'r": "80S",
              "'s": "83K905D0C",
              "'s ": "875908D0I",
              "'t": "863M06",
              "'t ": "8BS",
              "'u": "70PC0BM3K",
              "'un ": "73HM8K",
              "'v": "80Q",
              "'è": "C0K",
              "'é": "70X",
              "-a": "B02G05I02J4T",
              "-a ": "B05J9K",
              "-c": "70KB02",
              "-l": "707802B0KJ0H",
              "-v": "70TB02G02I02J03",
              "a'": "809D03M16",
              aa: "90BDDZGD4I03L02M0R",
              "aa ": "GJO",
              aan: "D5AGGL",
              "aan ": "DE7GMY",
              aar: "90CB02D9PG0V",
              "aar ": "90KDMG",
              aat: "904D2KG38L02M1O",
              abl: "72E81L902A41F02I0DJ08L03M05",
              aca: "70B803A1RB1LC16J1OL0IM9H",
              acc: "71R80JA0LC5GD02F06J0V",
              ach: "72581596DA0KB46C04D28J07L2M",
              aci: "70P805A5WB1LC1GI02J1JL1VM05",
              "ado ": "AEOBB8C40",
              adı: "MB0",
              "ag ": "80491FD2LFR8H1OI0JJ04",
              agy: "IBH",
              agyo: "ICV",
              aid: "71B837A02B02D02G0KI09J04",
              aik: "G8VI03",
              air: "76K80SA08B0TC02D04G0NI02M0G",
              ais: "7HE805902A09B8ZG9TJ02",
              "ais ": "7JNA0BBAO",
              ait: "7DS80KG2QI09M07",
              "ait ": "7JB80HD05G08I0MM06",
              akk: "D0GG1NH2KI15M2R",
              alc: "707802A0HB0BC47J0LL06M07",
              alı: "MAI",
              "amo ": "A0EB0FCDVL0C",
              ando: "70E804A97BA4C8CD06I07J05",
              anno: "70680ECA6F07G0I",
              "ant ": "7AE84R90ED1RF10H2MI0GJ1SL03",
              any: "82UI1SL1PM0N",
              anı: "MAY",
              aq: "707A0UB18",
              aqu: "710A2RB5A",
              arı: "MFI",
              ası: "MAT",
              "ato ": "802A1KB1HCLFG04I02L05",
              att: "72M80S917C7BD09FJ8G4FH2VI22M1S",
              "att ": "90CFLIH40I26",
              "au ": "76S90PB08D04H02J9V",
              auf: "70894RF02L04",
              "av ": "F52H4LJ0BM04",
              "ave ": "70C88PA0IB0EC0KD02H0D",
              aw: "80OD02L5H",
              "ay ": "702852A2KC0IM1L",
              aya: "708803A0YMBU",
              "az ": "A0JB1KIGQJ0AL1YM4J",
              aze: "802B5MC02D02I02J06L0LM0Q",
              azi: "704805903B0BC5OD03I0BJ17L0CM0D",
              aç: "702B1FM2A",
              añ: "A1M",
              ać: "L4M",
              "ać ": "L99",
              ağ: "M4L",
              ał: "LBO",
              "ał ": "L8S",
              aş: "J08M62",
              aș: "J23",
              aț: "J20",
              "ban ": "702802A19G02IG8M06",
              "bb ": "F0HH07I4H",
              "ben ": "7029AIA0KC04DCFF0CH0IIBNM83",
              bia: "803A0LB10C4EG02J08L0Y",
              bili: "70E809A0IB0FC0SI03J0OL0BMA4",
              bir: "808A0JB04C0OI04J0MMQH",
              "bir ": "A0MB03MP9",
              bt: "803919A02D0EF04I02",
              "bu ": "704L05MBU",
              bí: "A0MI0I",
              bø: "H0K",
              "c'": "715C0F",
              "ca ": "805A5EB6RC5NI05J60L1MM30",
              cas: "70Q80BA4VB59C30J30L02M0B",
              cer: "71H80GA51B3SC3VD02F08I05J4AL0CM0H",
              "ch ": "70583I9MMA02B02C04D1CF6PL76",
              "che ": "73K80396OA35B07CQ7D12J0H",
              chen: "7078059C9A03D0NF09",
              cho: "72W80V914A4PB3PD0WF06L41",
              cht: "9EFD4M",
              "cht ": "9LXD9D",
              "ci ": "72SB0HC6GI03J8EL52M15",
              cie: "71O809A39B10C0UD04F05J0SL8J",
              ció: "A59I0DL0G",
              cke: "70280O912F6U",
              cl: "70G80YA0QB0GC06D02J0M",
              "co ": "702802A56B5FC60D02L4Q",
              "com ": "BARL03",
              con: "77S81YAENBDQCC5D0DI02J5FL05",
              "con ": "704A9TC8LI05",
              cont: "74680TA58B79C49D0KJ2N",
              cor: "72F80FA2GB3XC55D03J1PL05",
              cos: "703805A2TB1TCEHI02J0Q",
              cost: "703808A0WB0YCCHJ0N",
              cq: "C06",
              cs: "702802I9B",
              csa: "I4X",
              ct: "70R81PA16B03D0EJ1DL02",
              cu: "70V80QA4KB1NC20D06I05J8FL13M1D",
              "cu ": "706JA2L0PM0H",
              cz: "LFV",
              czy: "LCZ",
              "czy ": "L92",
              câ: "B02J2M",
              cê: "B4R",
              "cê ": "BFB",
              cí: "A0FB03I03",
              có: "A0NB03I02L0B",
              că: "J7G",
              "că ": "JJZ",
              "d'": "720808C08M03",
              dad: "803A61B6BF0RM0I",
              dag: "902C09D12F45H2BI0C",
              dans: "79QD0CF0DH0HJ0AM0D",
              das: "999A2HB43C02F0AG09I08L08M0S",
              "das ": "9EVA3QB4TD04F07G05",
              "dat ": "703DKNF06G07I27J2V",
              dde: "806C03D0MF1JH2KI05M0R",
              "dde ": "C02D0KF1LH5OM02",
              "deg ": "H7UI0L",
              "des ": "7BQ807934A3RB1GD04F1SG0MH09I0CJ0D",
              "det ": "91DFOHG0MHPFI1QM02",
              dett: "704C4GF1KG0OH5QI1HM09",
              değ: "M8T",
              deği: "M9M",
              did: "70384IA18B0YC03I02M04",
              "die ": "70I8079HZA1LC02D5AJ05",
              dig: "70680290QA0KB0TC05D1JF7PH2UI24",
              "dig ": "90MD3XF7PH66I5A",
              dl: "80990BF0DH0II03L1L",
              "dn'": "83U",
              "dn't": "86Y",
              dos: "706A66B79C0EG09I06L0XM09",
              "dos ": "707A8WB8HI04",
              dov: "C5FJ09",
              dt: "90AD0RF02H1EI2Z",
              "dt ": "90BD14H1XI11",
              duğu: "M85",
              dz: "D02I04LEG",
              dzi: "LKJ",
              dzie: "LFS",
              dä: "902F0XG2I",
              då: "F0DH07",
              dé: "71SA0AF04H02I1D",
              dì: "C06",
              dí: "A10B02I0F",
              dó: "A0NB03I0FL07",
              dø: "H0O",
              dü: "903I0FM5O",
              dı: "MBL",
              "dı ": "MBL",
              "e'": "81MM07",
              ear: "83I902A0IB08C03J1E",
              "eb ": "906A02C02D34J0CL04M02",
              ece: "70480FA4BB5TC0SD02F02I03J2LL08MCC",
              eci: "70P80LA3QB5NC1LD04F0HJ2HL2FM0B",
              eef: "D3M",
              eeft: "DB7",
              eel: "80L903D2OF02G13",
              "een ": "83J905A07C03DRHGBPH05",
              eer: "808909A0OD4BG04H03",
              "eer ": "80A90AA0VD8WH06",
              eft: "80ID3OF1HH04J04M03",
              "eft ": "80XDCTH07",
              "ego ": "803A17B0PC0BLFR",
              egy: "802F02H0KIFW",
              "egy ": "ILW",
              "ein ": "70H9HCD13G30H0AI03",
              eine: "70R9NGD0IG0VH0BI05",
              eir: "80Y908B69H02I02",
              eit: "807952A04B3BD0AG40H08I0A",
              "ej ": "F0NI03L9Z",
              "ek ": "80C902D23F0FH02IDUL3HME0",
              eke: "804902C02D1XF09G1AH09I7BJ03L04M1D",
              "ele ": "91PA0NBDIC0MD1VG0XH1JI2QJCTL1BM0I",
              elig: "706806907A11B0HC06D09F05H6BI02J0HL08",
              ella: "809A7WC70D02F0NG7PI02M02",
              elle: "7J2808929A08C3ND20F25G4WH5GI6VM0L",
              enc: "74281LA4OB34C02I0QL0FM1W",
              "ene ": "80390OA5AB02C3MD0JG0SHAUI1XJ0FM0O",
              enge: "70380590OB03D20F0WG03H72I4MM09",
              erc: "71I807A1AB13C5JI0FJ1KL0GM0L",
              "ere ": "89L92JA1NB0CCF5D1WF02H7FI0XJ54M1L",
              "ero ": "802AB0B3XCA2G0DL07",
              ery: "831G03L0TM06",
              esc: "70H80791NA4HB66C27D0JJ6A",
              está: "AB8BAN",
              esz: "I7ML7R",
              "ete ": "80491CA0ZB0TC9QD0EF0MH0DI1CJ0ZM0I",
              "ett ": "90LF8EH45IBZ",
              ette: "76P81D911C2ZD17F0HG4GHANIA4M0H",
              että: "GDJ",
              "eu ": "72Z902BOVJ6F",
              eux: "78N",
              "eux ": "7CV",
              ey: "82CA08G05M8V",
              "ey ": "83UA0DB02C03M4U",
              ez: "72F90DA1CB19C0ID21I9UJ2LL23M1N",
              "ez ": "782A2EB39I6OJ1QL1YM1Z",
              ezt: "I4L",
              eä: "G0N",
              eç: "702B0PM1Q",
              eñ: "A0L",
              eğ: "M6O",
              eği: "MEV",
              eğil: "M8S",
              eș: "J2L",
              eșt: "J80",
              fai: "78Y80AC09J04M02",
              faz: "B6BM1Q",
              fd: "D0L",
              fj: "F04H09",
              "for ": "87KB07F02HE2",
              fs: "702908D07",
              fy: "F07H08",
              få: "F12H0R",
              fè: "702C04",
              fö: "F6RI0K",
              för: "FG8M02",
              "för ": "FCB",
              fø: "H1K",
              fü: "91XI0E",
              gee: "D25",
              "ger ": "72Y812921A09B04C0FD26F4HH9KI08J05M02",
              ggi: "802C4J",
              ght: "84F",
              "ght ": "702871",
              gio: "706805902A0CB0FC5ZF02H03J03",
              gj: "F0MH2YI0R",
              gje: "H1MI05",
              gjø: "H2B",
              gjør: "H5Q",
              gs: "80I90WD0DF0OH11I0T",
              gt: "705921D0NF25H0RI18",
              "gt ": "705926D0UF5SH0S",
              gv: "H08I0K",
              gy: "804F02G02H0EIMM",
              "gy ": "805IMK",
              gye: "I6I",
              gyo: "I62",
              gå: "F23H1M",
              gö: "F1GI0CM47",
              gör: "F3YI05M7E",
              gü: "902A03I0AM3I",
              hab: "70Z80294BA5UB07I02M0M",
              hac: "707903A53F05L02",
              "han ": "81RA13D02FFHG3AHF6",
              "har ": "A0FB1NFG4HIEI05J04M06",
              "hat ": "70L8MX986D05G0FI0VM0E",
              hav: "84JB1BD02F06G06H07I06M16",
              have: "87PB0KD05F06H07I03",
              hd: "802903G1WM02",
              heb: "903A02D53",
              "heb ": "DB7",
              hee: "807C0BD3ZG0O",
              heef: "DAM",
              "her ": "71R89B93HB0XH2NM4Y",
              here: "87T90CA03B0CC08D03G04",
              "het ": "702DQGF1BG09H2HI3C",
              hey: "83MM0D",
              hij: "A0YD4Q",
              "hij ": "DFK",
              "his ": "7038CMJ0QM02",
              hj: "F0SG09H15",
              hje: "G08H1Q",
              hl: "80292QG05L03M0A",
              hm: "91CG0NL05M04",
              "ho ": "819A3LB96C71G03L04",
              hog: "A05D02IBW",
              hogy: "IOC",
              "hon ": "705928F9PG0GI19",
              hou: "708843B0UD1EG05",
              hr: "70480N965D0FG02L05M07",
              "hr ": "94G",
              hre: "80P93ID07G06M04",
              ht: "8279A9D32G2BM15",
              "ht ": "83W9BLD2K",
              "hun ": "D1DG0MHA3",
              hv: "G08H5IM0B",
              hva: "G08H2QM08",
              "hva ": "G06H6R",
              hve: "G02H1RM0L",
              hvo: "H3D",
              hvor: "H89",
              há: "A02B0MI2Z",
              hã: "B0F",
              hä: "910F3NG5S",
              hän: "90AF1EGHN",
              "hän ": "GKG",
              häne: "GA2",
              här: "F7RG02",
              "här ": "F9X",
              hå: "F0XH0F",
              hé: "70EA02C0XI0W",
              hö: "914F1JG03I09",
              hø: "H0X",
              "i'": "827M0D",
              iac: "A03C4II02L0B",
              iam: "702804A08B18C9YG04I0BJ0GL0S",
              iamo: "A03B02CCY",
              iał: "L8P",
              "ich ": "70380X9SGA02C04D2AL2Q",
              icht: "9LFD2V",
              ici: "72X80GA3MB20C4DD05F08I0CJ9ZL0JM0P",
              "ido ": "A84B4WC0OL02",
              iedz: "L7I",
              iene: "90BA7WB02C0WD08G0MH05L0Z",
              "iet ": "702807905DLBF0DG02H0PL03",
              igh: "70282ZC02D05F0SH11J02",
              igt: "70490KD07F53",
              "igt ": "70390YD0RF6P",
              iin: "G9UJ0K",
              "iin ": "GC9",
              "ij ": "D81L0L",
              ijk: "D3I",
              ijn: "D87",
              "ijn ": "DN9",
              ikk: "D07G6PHCOI04M0R",
              ikke: "D0RG0YHNRI06",
              inde: "703807933A07B07C03D3JF0CH0CI9EJ0YM5U",
              inge: "70780892UA06B03C0CD3AF60H86I09J0Q",
              inh: "903B93G07",
              inha: "702904B7L",
              "ini ": "70FC20G1IJ0VMCC",
              inul: "GBJJ0Q",
              inun: "90GA02B02C02GAYJ0O",
              inä: "GBK",
              "inä ": "GI2",
              iq: "70PA04B07",
              "ire ": "7E380MA0CB05CFCD05G0AH0FI2AJ1DM07",
              isk: "803903D04F3JG2JH1WI0QL0SM09",
              iss: "74080M91ABAGC1UD0JF1VG6UH0TI1BM16",
              isso: "70PB99G06",
              "ist ": "80T9K6D26F0FH1BJ0WL0HM06",
              ith: "70283XB02F02G02L02M03",
              "ito ": "803A2PBA0C68G08",
              "itt ": "90DF4QH6NI5U",
              ità: "C4G",
              itä: "907GDT",
              "itä ": "GGE",
              iy: "MDH",
              iyo: "MIL",
              iyor: "MKC",
              "iz ": "702A0OB1VM9Q",
              ià: "C08",
              iä: "G14",
              iç: "B0BM6B",
              içi: "MAF",
              için: "MBE",
              iè: "70N",
              ié: "70CA0PI16",
              ië: "D0F",
              iñ: "A0G",
              iò: "C0A",
              ió: "A3DI0KL0H",
              "ió ": "A4EI0A",
              ión: "A6G",
              "ión ": "A9N",
              iù: "C0W",
              ię: "LBV",
              "ię ": "LH5",
              iğ: "M3S",
              iği: "M94",
              ił: "L4K",
              iş: "J02M3V",
              "j'": "71U",
              "j'a": "774",
              "j'ai": "79W",
              jag: "FQD",
              "jag ": "FSG",
              jd: "D14F06I0OL0L",
              jeg: "HHRI0DL2S",
              "jeg ": "HSG",
              jest: "G0MLM6",
              jf: "D0GI02",
              jg: "D07L02",
              jk: "D2BF05I02L05",
              "jk ": "D2B",
              jn: "D5II0BL0I",
              "jn ": "D7O",
              "jo ": "A43B0UG15H09",
              js: "D0BI0AL0Y",
              jt: "D08I1E",
              jv: "D0A",
              já: "B0LI3H",
              jä: "F1LG1I",
              jæ: "H08",
              jø: "H2I",
              jør: "H2P",
              kaa: "D0JGB7",
              "kaa ": "G9I",
              kai: "G6LI0EM02",
              "kan ": "D67FA6G1JH8PI0FM0M",
              kell: "903G2CIB9",
              "ker ": "80A90PC02D2ZF7KHCUI05M09",
              "ki ": "703A03B03C02G4MH02I5ZL5GM65",
              kj: "D04F05H2NI03",
              kje: "D05H2A",
              kjø: "H1J",
              "kk ": "H29",
              kke: "D14G0YHEJI0PM07",
              "kke ": "D06G02HNM",
              kla: "90GD0GF26G06H1TI04L0JM5A",
              kn: "825905D06F0TH0DI0TL0XM08",
              kno: "83L902D02L07M02",
              know: "86E",
              kom: "91ZD1MF6ZG0VH31I0ML17M0V",
              komm: "94HD03F6VG09H56I07",
              kor: "905D07F2CG1HH0FI4RL0KM1Q",
              ksi: "GAZH04L1LM14",
              "ksi ": "GDQM05",
              kt: "91CD1YF2ZG05H2SI0UL2OM5D",
              "kt ": "912D29F2SH17L0S",
              kte: "90ID0MF2LH1TI0CL03M4S",
              kv: "F0PH0II04",
              kw: "902D0HL0B",
              kä: "906F15G43",
              ké: "I52",
              kö: "90VF0ZG17I44M0Y",
              kı: "M4K",
              "l'": "72VC2GM04",
              "l'a": "76DC3D",
              "lar ": "80F90DA2UB2WD08F5NH19J0JMAE",
              ları: "MBV",
              lc: "70280290EA08B03C14I0LJ0AL06M08",
              ldi: "807908A02C12D0AF1AH1MI04M5D",
              ldu: "902J06M9W",
              leri: "702905C02F02G03H06M97",
              lh: "702902B32F02G02H03I0Z",
              lho: "B5XI03",
              "lig ": "90LD0KF2MH9JI0Q",
              lij: "D3EG0UI02J03L02",
              lijk: "D9Y",
              lik: "82U902D04F10G0TH2KI0IL0GM3S",
              lj: "D02F16G15H07I2A",
              "lle ": "7IR931A0HC53D1AF5MGGRH9VM04",
              ller: "73080890YA08C0BD0MF3KG09H5OI05M0X",
              llä: "F03G91",
              "llä ": "GDN",
              lma: "702A0AB0CC04D02F02G36I18J05MAM",
              "los ": "70480490MAG6B1ID05G0ZI0AJ0JL02",
              lr: "807A02F06I0E",
              "ls ": "74S80V92BD2BF0LH02",
              lui: "73BA04B06C4ED0FG0KJ8J",
              "lui ": "74PB02C6WD03G04JD9",
              lw: "80BD02L09",
              lá: "A0AB0EI6D",
              lä: "90QF2SG4R",
              "lä ": "F02GAF",
              lå: "F1FH0G",
              læ: "H0T",
              lé: "70XA0EB03I2X",
              lì: "C06",
              lí: "A0KB0EI0F",
              lö: "909F0XG0II0P",
              lø: "H0X",
              lă: "J26",
              lı: "M7Q",
              "m'": "70N80CC02L02M4R",
              "m'u": "M8S",
              "m'un": "M8B",
              maa: "D2VG78M06",
              "mai ": "702C40I0EJEE",
              mais: "782B8IG1H",
              "mak ": "D02H04I02L03M8H",
              md: "903D0EF0AH02M20",
              "med ": "80YF8WHB7I05",
              meg: "C0PH4LIEJL07",
              "meg ": "HAXICL",
              mek: "G0NH03I0JL09M8Z",
              "mek ": "I0CL0BM8F",
              "mer ": "71C80G93SA1FB0YD23F6RH77I07L06M02",
              meu: "70GB59J2U",
              mig: "70580JA1WB2FC17D04F7FI02J03L03",
              "mig ": "F9TI02",
              mij: "D3RJ06L03",
              mijn: "DA7",
              mind: "80J906B08D0DF0AH0CIE3M07",
              minä: "GB9",
              "mit ": "708807979F0AG03ICJJ1M",
              mitä: "G9U",
              ml: "906D02F0HH0AI0JL05M1R",
              mma: "70F804902C0TD02F4UG1MH05I0H",
              mme: "77Z80E93PC0WD0HF58G7KH5KI0AM0A",
              "mme ": "76190PC02D05F0CGAWH3U",
              "mo ": "A6FB71CC8G0NL0K",
              moe: "B04D2V",
              mond: "72480F906C0OD0AIAYJ07",
              "mos ": "AB3BAVI0HJ0Q",
              mt: "90QD0EF0RH0UI07J05L06",
              mui: "B6ZD02G19",
              muit: "B8EG09",
              "my ": "835L7R",
              má: "A23B09I5K",
              már: "B03I4Q",
              "már ": "I98",
              más: "A5TB0AI3O",
              "más ": "A8QB0AI40",
              mã: "B0P",
              mä: "90DF0QG3S",
              må: "F1WH1W",
              "må ": "F08H1N",
              mé: "70MA08B08I44",
              mí: "A0HB05I0H",
              mø: "H0J",
              mă: "J2Y",
              mı: "M5R",
              "n'": "722866C0CM14",
              "n't": "8BS",
              "n't ": "8JF",
              naa: "D2MG1V",
              nagy: "IAD",
              "nak ": "IGBL08M04",
              nb: "90BD0AF08H06I0OM02",
              "nde ": "743931A3VB4IC1XD3MF69H3GJ4FM4K",
              "ndo ": "804AE4BFICBZ",
              nek: "F02G0FH05IATL0FM0I",
              "nek ": "ID8L0LM08",
              neke: "G03I9R",
              "nem ": "93MB14ISGJ0AL0WM0F",
              "nen ": "9DJA1AD8VF3KGKGH5FI0JM09",
              ngen: "70794GA06B04C07D4ZF60G03H78",
              nger: "72I812917C0PD1LF1RH6XI0QJ0B",
              nha: "802907B8LF02G0VI02",
              "nha ": "B7WG0S",
              nho: "904B7KD02G0BI03",
              nich: "7029HRC02D02L0C",
              "nie ": "70J91LC02D09F02I0ZJ17LSG",
              niet: "A03DLNL02",
              "nin ": "F02G26M9Y",
              nlar: "M9D",
              "nn ": "94SF0PH3EI06L02",
              "nno ": "CA8L05",
              noe: "D0EH2ZM08",
              non: "71G804COCF02G0RI03",
              "non ": "71ICSGG0LI07",
              "nos ": "70UA7LB5TI14J0AL02",
              nou: "79980FB0SD02G0NJ1O",
              nous: "7CNG0U",
              now: "84JL2D",
              "now ": "86W",
              nq: "70AA06B07C06",
              nsk: "F3EG2CH30",
              "nte ": "73J92AAERBERCEGD0MFKMH2EI0OJ3S",
              "nu ": "70YB02D0MF29G05JMAL0XMG5",
              nul: "708C0UG6OI1GJ48M03",
              null: "705902C1DGB4I03",
              nun: "90QA1LB28C08G6LI0EJ0YM94",
              "nun ": "90AGAZM89",
              "nut ": "D02F04GB6J0UL0BM02",
              nyt: "80MF08G5XH0AI0T",
              "nyt ": "GA6I1M",
              nz: "91JA0FB02C1ND0CI0VJ09M08",
              ná: "B05I3E",
              nál: "I49",
              nã: "B64",
              não: "BLP",
              "não ": "BOH",
              nä: "90BF1NG61",
              "nä ": "GDF",
              nå: "F1PH1N",
              någ: "F4E",
              næ: "H09",
              nç: "707B0SM0N",
              né: "70UA07B02I3W",
              nó: "A08B0QI04L0B",
              nø: "H0I",
              nă: "J2E",
              nı: "M9X",
              "nı ": "MBV",
              "o'": "804C0AD05M05",
              oar: "804B07F04J9D",
              och: "714931A28B05C0AD0ZF6HJ0UL38",
              "och ": "959D11F8NL03",
              ocê: "BH6",
              "ocê ": "BHX",
              odo: "A4HB3GC0QG18I0GL1E",
              "oe ": "802A02B03C02D1NG02H1P",
              oen: "B0FD1WF04G05H1L",
              oet: "A02B03C02D2FG08J02L02",
              "of ": "876904B02D10",
              ogy: "803IC3",
              "ogy ": "805INQ",
              "oi ": "773B46C7MD07G5MJ5UL0D",
              oin: "72X832A03B02C03G5IJ05L03",
              oir: "75XG12",
              ois: "75N805A06B40C02G6MJ04L03",
              oit: "73EB1JD0TG7BJ03",
              oj: "A0JB0IF08G0RI04L4BM04",
              oldu: "I02MAA",
              "ole ": "71I80I903A04B04C48D02GB2H0EL0P",
              "oli ": "705C0VGAPI02J05L0L",
              "olt ": "903F06H0AIBO",
              "om'": "80OC07G02L04MBW",
              "om'u": "M9Y",
              "omi ": "B05C05F04GAUI5IL02M02",
              omm: "77880D924C0HD09F5NG1AH2UI0E",
              omme: "7AP80693JC0LD0HF5BG0FH6P",
              "on'": "83XM23",
              "on't": "86Y",
              "ono ": "A0OB0GCJ3G0EL0E",
              "ons ": "7BI81I902B09D2QF02",
              "ont ": "7BI809902D0UF0JI13J06",
              oor: "80JD5G",
              "oor ": "80VDB7",
              opp: "70980E902C1OD06F1OG1NH2TI02",
              "oro ": "A0HB0IC8EG04L0D",
              orum: "902J05ME3",
              "osa ": "703A24B18C8DG0CI08L04",
              oss: "71080K90CB4YC4SD04F1SG2WH1GI1L",
              "ost ": "81Q905D0KF0DH0EI5IJBJL06M02",
              ostr: "A0JB0LCGKF03J0UL15",
              "ott ": "90DF0UH08ICP",
              "ou ": "71H8AJBHKD23J1E",
              oul: "72N84VG1AJ0O",
              ould: "88L",
              "our ": "7CD85E",
              ous: "7K381UB04G0S",
              "ous ": "7QP81LG07",
              out: "76K840B20D0BF02G0N",
              "out ": "76186GD0P",
              ouv: "767B1AG03",
              "ow ": "86KB02",
              owi: "806L8I",
              oy: "70G80EA1VM1K",
              "oy ": "80CA5LM08",
              oz: "903A09B0DC0AD04I4BJ0BL2JM09",
              "pas ": "7NKA0DB0ED0AF0OG06",
              pg: "D07H03",
              "por ": "ACDB9GF04I02M0E",
              pou: "7AH803B1LG02",
              pour: "7DN803",
              powi: "L7U",
              prz: "LD2",
              prze: "LAN",
              przy: "L8S",
              pue: "A6S",
              pued: "A7I",
              py: "809G10L0NM02",
              pä: "908F03G2D",
              på: "F4UH4S",
              "på ": "FCIH7D",
              pø: "H0F",
              pă: "J23",
              "qu'": "77B",
              qua: "72G808903B8NC8V",
              que: "7LK80K904ANZBSDCB0",
              "que ": "7OQ806ARCBRKC0W",
              quer: "70V903A28B88",
              ques: "73480LA0EB0DCBK",
              qui: "75S80PA81B5UC2J",
              qué: "70PA5C",
              "qué ": "70RA7Y",
              "r'": "804M04",
              rai: "79P810902A06B0XC1GG0KI04J08",
              "rea ": "806A0GB04C06D02F02G02JC1",
              rec: "71780R91DA5CB72C0ZD0GF0GI03J4NL08M1H",
              rer: "71X80290YA0LB0QC0XD02F0JH2HJ0OM09",
              "res ": "77K80K90SA8NB49D0GH18I0ZJ04L0AM02",
              rij: "B02D22J10",
              rj: "D02F0LG1JI10M03",
              rui: "70N804A0GB0EC7MD0SG03J0I",
              ruir: "704A05B04CBL",
              "rum ": "926D04F0MJ0BL03MDZ",
              rw: "80390KD0EL10",
              rz: "912A06C05D0BI0MJ0ALDCM03",
              rze: "90LC03D03I0GLDD",
              rzy: "LAE",
              rà: "C0V",
              rá: "A1GB17I48",
              rä: "90MF2IG0U",
              rå: "F1VH0X",
              rè: "70U",
              ré: "71YA0UB04I1F",
              rí: "A2EB08I0C",
              ría: "A6MB0D",
              "ría ": "A7S",
              rò: "C0U",
              ró: "A0NB0AI21L29",
              rö: "909F19G02I0T",
              rø: "H1H",
              rü: "918I13M2J",
              ră: "J4A",
              "ră ": "J82",
              rı: "M7Z",
              "s'": "70W802C05M04",
              "s-": "71BB02I02J1E",
              saa: "B02G63M1K",
              "sak ": "F0AI96M06",
              sco: "709808A0XB2WC4FD03J0VL02",
              sd: "902A08B03D06F04H05I0H",
              seg: "A1TB2UC2PF04H1XI1D",
              sei: "70Q947A09B2RC2HG1YH03I06J07",
              "ser ": "73P80593KA2LB3FD05F2PH60I02L03M07",
              she: "855903D02F02G02I04",
              "she ": "86Z",
              sic: "70380H93MA0RB0WC20J0KL02M02",
              "sie ": "70E9FHC02D0KJ08L11",
              "sin ": "70I803904A21F2TG9TH2PM5X",
              sinu: "GCBJ05",
              się: "LF3",
              "się ": "LJI",
              sj: "D0EF0WH1JL06",
              "sk ": "80HF1EH2OL04M02",
              "ska ": "F8TG1UI0QL0J",
              ske: "80O902C02D03F18G2YH4SI09M0C",
              skj: "F0CH1O",
              "sn'": "83H",
              sna: "802D04F1DH1QI0NL04M02",
              "so ": "81B91ZA65BDOCBNG0IL04",
              "som ": "B04F79HATI0R",
              sono: "B07CFS",
              "ss ": "81Y94GF2LH1XI0F",
              "ssa ": "709802B3KC1ZF0XGL5I0C",
              sse: "76S80V94CB7NC63D0VF0SG06H1RI0FM14",
              "sse ": "74H91EB79C3YD06F02H1NI04",
              "sso ": "BC7C7N",
              ssz: "I4N",
              ssä: "F02G6O",
              "ssä ": "GAI",
              "sti ": "B02C2UGA5I05M06",
              "sto ": "905A4RB4RCCZF03G0FH0DL1C",
              stá: "A7LB8XI0A",
              "stá ": "A81BA5",
              stä: "90EF2NG9I",
              "stä ": "GB6",
              "su ": "704A5WC0TG0DL12M0W",
              sunt: "A0AB09C04G08JEJ",
              sv: "903C0AD03F18G0BH13I04M02",
              sw: "80E906D03L1G",
              sz: "906INDLFB",
              "sz ": "I7GL8Z",
              sza: "I4KL2O",
              sze: "903ID4L4V",
              szer: "IFSL06",
              szo: "I4BL0K",
              szt: "I4HL0Q",
              szé: "I4E",
              sá: "A03B07I2S",
              sã: "B10",
              sä: "907F1RG3S",
              "sä ": "G8R",
              så: "F24H24",
              "så ": "F41H35",
              sé: "70XA0KB05I3U",
              ség: "I4N",
              sì: "C0K",
              sí: "A0IB07I0Q",
              sö: "F0WG06I0NM42",
              söy: "M9A",
              söyl: "MAI",
              sø: "H0T",
              să: "JA3",
              "să ": "JP5",
              sı: "M84",
              sın: "M92",
              "t'": "70E81F902C03M02",
              taa: "904D1DGBNM02",
              "taa ": "GD1",
              tai: "76K80KB0DC0PD02G4VI0CJ0N",
              "tam ": "B0UIECJ09L1TM0W",
              tb: "802905A02D08F06H05I0QJ02M04",
              tc: "80FD02F02I05J04L06",
              "ted ": "86VA1DH0FI39",
              "tem ": "805909B6QD06IDHJ2NL51M02",
              "tet ": "92XF28G09H5WI2CL03",
              tg: "907D09F02H02",
              "th ": "70284YA02B02L02M02",
              tha: "7028DL904D02G06I0TM02",
              that: "8KNI1A",
              "the ": "7028QB",
              ther: "70288H903D02",
              they: "86H",
              thi: "703891903M02",
              thin: "89L905",
              this: "86S",
              tid: "702A19B1GC07F3EH22J02M0A",
              tien: "71K807904A87C0DD0VF02G1HJ06",
              "til ": "70680G902A0BB0DD08F04HFHJ07M04",
              till: "70981L907A0DD03FBDG0AH1A",
              tj: "D0IF0FH0BI0U",
              tk: "903D03F03G2YH02I0WL2BM0A",
              toi: "72GC0CG5SL04",
              "tom'": "817G03L05MDE",
              tomi: "C02F03GIAI7HL04",
              tos: "704903A41B4RC0ZG2FI1UJ07L07M05",
              tou: "78F807B5UG06",
              "tre ": "7EE802A17B12C3KF1VH24I0NJ3HM06",
              treb: "903C0NJC8",
              trui: "70GA09B08CBPD05J0B",
              "ts ": "75S83C913D1RF16H0EI09",
              "tt ": "90PFO9H70IEH",
              tta: "70E805906C4WF5UGDTH04I3EM0L",
              "tte ": "76080294LC2ZD1BF0UG3BH96I4BM0G",
              tti: "70780J902C55D06F0RG6YH0HI05M72",
              tto: "707804CB1F0AG1UH04I03",
              "tto ": "CEAF02G0B",
              ttä: "902GCR",
              "ttä ": "GDI",
              "tu ": "7BBA2PB0RC2AG1QJ1EL2HM1M",
              tw: "80E90YD0SL2N",
              tz: "92DD05",
              tà: "C1H",
              "tà ": "C5K",
              tá: "A2IB2DI5A",
              "tá ": "A5CB8H",
              tã: "B11",
              tä: "90IF1GGF4",
              "tä ": "GNT",
              täm: "F0IG61",
              tämä: "G9W",
              tää: "GA5",
              "tää ": "G9V",
              tå: "F0XH0U",
              té: "721A0EB0EI4Z",
              "té ": "773A0UB19",
              tò: "C05",
              tó: "A0QB0AI2HL1I",
              tö: "905F0CG0WI38M03",
              tø: "H0F",
              tă: "J68",
              "tă ": "JG5",
              tı: "M71",
              "u'": "71I80O",
              ual: "70480M902A18B2AC4TG02J0FL05",
              uan: "71SA2RB57C3AG1PH05M03",
              uch: "71481793NA4AD0AL1F",
              ued: "804A6CB04J02",
              uer: "71M90QA5RB75C0AF02H05",
              ues: "72N80J904A3DB0FC7IG04H02",
              uest: "71180NA4BB09CBJG02",
              ugh: "82V902J05",
              uh: "70290LG1QH02I0CM0J",
              "ui ": "786A0CB3SC6WD02G2LJBB",
              uie: "70H803A5PB03J59",
              uir: "70M804A0MB0OC7PG02J03",
              uire: "70S805B02CBP",
              uis: "76N803A0LB0XC07D1FG21",
              uit: "72L80KA0IB75C0BD2MG0LJ3E",
              uito: "A06B7BC0AJ06",
              uld: "84T90DB07D0BF07M1F",
              ull: "70580F902A09C1KD1NF48G93H1QI09M1D",
              "uma ": "A06BD8C02G0EI02J09M0H",
              una: "703805903AA9B07C7TG2CI06J2TM1P",
              "una ": "AE3B04CBLG1DJ3EM1L",
              "und ": "81R9C1F1DH0SJ09",
              une: "7AJ805908A0AB02C0LG0ZH03J4QL05",
              "une ": "7FQ804904C0EJ3S",
              unk: "80690EF0DG0OH07I58L0IM02",
              "unk ": "808I9F",
              unn: "807902C07D0NF14G33H27",
              "unt ": "80A902D1HF0DJD4",
              unu: "G1QJ1CMEA",
              "unu ": "G02J06MC2",
              uo: "70IA03B03C3JG58L02",
              utt: "70380690HC4WF0IG78H17I02M0K",
              uu: "D0RG5F",
              uw: "D1ZL0Q",
              "ux ": "7A6",
              uy: "70280CA12M3V",
              uz: "903A07B09C04D07I04J10L0GM2X",
              uá: "A0MI02",
              ué: "70DA20B0H",
              "ué ": "715A5F",
              uí: "A0OB06",
              uò: "C0C",
              uğ: "M3G",
              uğu: "M8G",
              "v'": "C04",
              vad: "A0DB0IC2ED0DF5DI0CJ0BM05",
              "vad ": "F6YI03",
              vag: "706A03B08C08F04I5VJ02",
              vagy: "IDS",
              vai: "76E802A03B2QC2BG67I03",
              "van ": "A0MDGZF06G4GIGPJ05M05",
              "var ": "A0KB0RFCEHAII06M72",
              "vat ": "D06F04GCVI05J0VM05",
              vd: "F06H09M0L",
              "ver ": "72084M904A29B35C0LD4NF4ZH5UI05J05M12",
              "vet ": "F3TG05H5JI2CM0L",
              "vil ": "804A06B02H7M",
              vill: "717805A0AC05F68G0NH2HI0F",
              vl: "D0FF0BH03M0K",
              vn: "F03H0GI04",
              "vo ": "A2HB2SC51G03",
              voc: "705A0EBH9C0DD02J0D",
              você: "BJX",
              voi: "75I806C2DG7OJ50",
              volt: "B1KC21D02IDFJ08",
              voo: "B04D34G02",
              voor: "DB7",
              vor: "706807921A1MB23C4UD0BF0JH3IJ4EM04",
              vou: "7E5804B2LD02",
              vous: "7JG805",
              vr: "712B0MC0PD1PF04H02I02J1TM0I",
              vv: "C0GI03",
              vá: "B07I3Y",
              vä: "F3EG46",
              vå: "F15H0L",
              væ: "H1T",
              vær: "H2W",
              vé: "70KA03B02I2Z",
              waa: "D2P",
              waar: "D93",
              wan: "83890OD0ML2P",
              war: "80M93ZC02D0QL1A",
              was: "87K93ND2PL0G",
              "was ": "8BP97SD9DL0A",
              wat: "80OD2TL08",
              "wat ": "D93L03",
              wd: "D06L18",
              "we ": "835D30L1J",
              wee: "70480QC04D2KJ03L04",
              wh: "84L",
              wha: "83GB02",
              wie: "937D0PLE2",
              wil: "821914D23L0O",
              wir: "94UL02",
              wit: "83S904D06L0B",
              with: "86O",
              wn: "80OL1S",
              wo: "83292CD24L5L",
              wr: "80EL0T",
              ws: "80FD03L33",
              wy: "L6E",
              xa: "704805A05B0KD02F05J05",
              xc: "704805A04B03J03",
              xp: "70680FA0AB09J0A",
              xt: "70380D902A0CB06F05J04",
              "y'": "80HM2E",
              yap: "I05MDO",
              yb: "809I0GL1FM0E",
              yc: "803F2FL3XM02",
              yck: "F6T",
              ycke: "F6Q",
              "ye ": "703804A05H1LI0SM7Z",
              yg: "F0IH0FI04L14M0D",
              yh: "F02G17I09",
              yi: "80KG0NI2CM64",
              "yi ": "G16I0UM9T",
              yk: "F06G1CH14I09L1ZM09",
              yle: "707804G0LI0DL0CMB8",
              ym: "702807902F07G12H05I0DL53M0D",
              yor: "702802A0OB02C02F03G03I0MJ03MRC",
              "yor ": "A0JMH0",
              yoru: "MF8",
              you: "7028DI",
              "you ": "8HL",
              yt: "80JF0FG41H0QI16L22",
              "yt ": "F02G6BH03I0XL0R",
              yv: "F02G1DH04I0UM07",
              yy: "G1C",
              yö: "G1VI0AM06",
              yı: "M4L",
              ył: "L4H",
              "z-": "70S",
              "ze ": "70780A90QB0AC0OD4ZI0YJ1FL6VM2C",
              zer: "80290BB5YC09D03I6YJ08L11M1C",
              zere: "B02IAGM0A",
              zie: "90RC19D1PJ0DLCA",
              zij: "D5P",
              zijn: "DGG",
              zio: "B02C7OL0E",
              zion: "CALL08",
              zt: "916I8EL0J",
              "zt ": "918I70",
              zu: "964A03B02C02D0II0UJ0SL22M0T",
              "zu ": "95XL0KM0D",
              zw: "90RD0EL1Z",
              zy: "802LEPM06",
              "zy ": "804LA5",
              zá: "A02I3U",
              zé: "I3I",
              ß: "90P",
              ße: "910",
              à: "71SB0EC13",
              "à ": "73TB0QC2N",
              á: "A2OB2SIDM",
              "á ": "A2NB46I11",
              áb: "A05B03I2U",
              ág: "A03B0AI37",
              ál: "A09B07I9K",
              án: "A1AI66",
              ár: "A08B0OI8U",
              "ár ": "I55",
              ás: "A2HB0EI5X",
              "ás ": "A7NB16I3G",
              át: "A06B06I77",
              "át ": "I6B",
              â: "706B04J34M0B",
              ân: "B09J3Z",
              ã: "B4L",
              "ã ": "B0I",
              ão: "BA3",
              "ão ": "BS0",
              ä: "91MFDYGMG",
              "ä ": "F02GKQ",
              äg: "907F1J",
              äh: "90SG1S",
              äi: "G2M",
              äk: "F0OG1G",
              äl: "90IF3OG2M",
              äm: "905F0ZG2C",
              ämä: "G6Z",
              än: "90ZF5FGBF",
              "än ": "F2NGNO",
              änd: "90PF3P",
              äne: "903G67",
              är: "90QFFXG1K",
              "är ": "FRUG03",
              äs: "90BF1AG2E",
              ät: "90YF2FG2Y",
              ätt: "90MF4NG23",
              äv: "F0BG1F",
              äy: "G20",
              ää: "G7Z",
              "ää ": "GB6",
              ään: "GBF",
              "ään ": "GGF",
              å: "F8XH5K",
              "å ": "F7PHDU",
              åd: "F0KH0G",
              åg: "F2T",
              ågo: "F41",
              åk: "F0SH0I",
              ål: "F17H0J",
              ån: "F2PH0I",
              ång: "F43",
              åp: "F02H0F",
              år: "F33H3Q",
              "år ": "F69H4L",
              ås: "F15H05",
              åt: "F1MH0Z",
              æ: "H0V",
              ær: "H3E",
              ære: "H2U",
              ç: "70IB1HM61",
              "ç ": "M3F",
              ça: "70WB1GM3B",
              çi: "M5A",
              çin: "MAH",
              "çin ": "MAR",
              ço: "706B0OM4H",
              çok: "M95",
              "çok ": "MA9",
              çã: "B18",
              è: "71AC2O",
              "è ": "C6A",
              èr: "719",
              ère: "764",
              ès: "70R",
              "é ": "74LA3LB5BC0ZD02F04I0W",
              éc: "718A03B04I02",
              ée: "71I",
              "ée ": "75J",
              ég: "70BI6T",
              "ég ": "I55",
              ék: "I32",
              él: "70IA1WI6U",
              "él ": "A5YI3F",
              ém: "70AA02B0SI14",
              én: "70AA0RD05H03I61",
              ép: "70PI2H",
              ér: "714A08B0AI81",
              ért: "I5V",
              és: "711A13B07I7V",
              "és ": "72RA34B0MI6O",
              ét: "728A03B03I45",
              ê: "70WB2M",
              "ê ": "B43",
              ên: "B0I",
              ês: "B1J",
              "ês ": "B6H",
              êt: "71I",
              ë: "D05",
              "ë ": "D0B",
              ì: "C0F",
              "ì ": "C10",
              í: "A2XB0XI2F",
              "í ": "A1ZB03",
              ía: "A4PB05",
              "ía ": "ABLB02",
              íc: "A0DB0F",
              ít: "A05B04I3K",
              î: "707J50",
              în: "703J9M",
              "în ": "JFS",
              ñ: "A0X",
              ña: "A13",
              ño: "A1H",
              ò: "C0T",
              "ò ": "C1Z",
              ó: "A2SB0YI3TL4P",
              "ó ": "A41B0FI3D",
              ól: "A0AB04I3BL0G",
              "ól ": "I4SL0C",
              óm: "A0JI07",
              ón: "A33I0I",
              "ón ": "A8FI07",
              ós: "A03B0VI0OL08",
              ô: "707B06",
              õ: "B07",
              õe: "B0I",
              ö: "915F7KG2BI4TM3Z",
              "ö ": "F06G1A",
              ön: "915F0OG0LI3MM2G",
              ör: "90WF98G08I2SM3B",
              "ör ": "903FBII0EM09",
              örs: "902F3R",
              öv: "F1QG02I12M04",
              öve: "F47I11",
              öy: "G0IM43",
              öyl: "MAC",
              öyle: "MAX",
              ø: "H33",
              ød: "H0Z",
              øk: "H0S",
              øl: "H0S",
              øm: "H0G",
              øn: "H11",
              øp: "H0P",
              ør: "H4D",
              "ør ": "H27",
              øre: "H2H",
              øs: "H0R",
              øt: "H0Q",
              øv: "H0M",
              øy: "H12",
              ù: "706C0E",
              "ù ": "70DC0X",
              ú: "A0KB0CI1I",
              ún: "A0KB05I04",
              û: "706",
              ü: "924I2XM80",
              üb: "91HM03",
              üc: "915M0C",
              ül: "908I4UM18",
              ün: "90LI2GM7P",
              "ünk ": "I97",
              ür: "926I0CM3B",
              ă: "JGA",
              "ă ": "JN9",
              ăr: "J36",
              ăt: "J1W",
              ą: "L5Z",
              "ą ": "L82",
              ć: "L55",
              "ć ": "LC4",
              ę: "LAM",
              "ę ": "LHC",
              ğ: "M63",
              ği: "M95",
              ğin: "M8G",
              ğu: "M3T",
              ğı: "M5K",
              ı: "MIA",
              "ı ": "MJR",
              ık: "M4Q",
              ıl: "M4N",
              ım: "M8D",
              "ım ": "MEZ",
              ın: "MFG",
              "ın ": "MFK",
              ınd: "M9C",
              ında: "MA4",
              ını: "MD9",
              "ını ": "MB3",
              ır: "M6S",
              ıy: "M5K",
              ıyo: "MAH",
              ıyor: "MBU",
              ız: "M4Y",
              ış: "M42",
              ł: "LD6",
              "ł ": "L9M",
              ła: "L7F",
              łe: "L66",
              łem: "L8V",
              "łem ": "LCC",
              ło: "L5O",
              ń: "L11",
              ő: "I3H",
              "ő ": "I36",
              œ: "704",
              ś: "L5Z",
              "ś ": "L4S",
              ş: "J0HM73",
              şa: "J03M3L",
              şe: "J03M4F",
              şı: "M3O",
              ţ: "J0J",
              ű: "I0Q",
              ź: "L0Q",
              ż: "L6C",
              że: "L6F",
              "że ": "L97",
              ș: "J4G",
              și: "J3U",
              "și ": "J9Z",
              șt: "J4E",
              ști: "JAL",
              ț: "J47",
              ți: "J78",
              "ți ": "JDV",
              "̇": "M0I",
              а: "KPL",
              "а ": "KQP",
              "ает ": "K8F",
              ал: "KFF",
              "ал ": "KEI",
              ать: "KHM",
              "ать ": "KJY",
              б: "K8X",
              в: "KGE",
              во: "KDH",
              г: "K7J",
              "гда ": "K8F",
              го: "KFL",
              "го ": "KIF",
              гово: "K7T",
              д: "KDR",
              "да ": "KBW",
              де: "KEC",
              дел: "KBG",
              дела: "KAA",
              е: "KQR",
              "е ": "KSG",
              "ебе ": "K7E",
              его: "KD0",
              "его ": "KEP",
              "ему ": "K8J",
              ен: "KFZ",
              "еня ": "K9Q",
              ет: "KEY",
              "ет ": "KH9",
              "ешь ": "K8B",
              ж: "K55",
              з: "K7K",
              и: "KLO",
              "и ": "KOL",
              ит: "KEI",
              ить: "KBZ",
              "ить ": "KDO",
              й: "K5A",
              "й ": "KFB",
              к: "KCN",
              ка: "KDZ",
              каза: "K8T",
              "как ": "K8Q",
              ко: "KFV",
              л: "KH7",
              "л ": "KFG",
              "ла ": "KBG",
              ли: "KD3",
              "ли ": "KFU",
              м: "KGY",
              "м ": "KLY",
              меня: "KA4",
              "мне ": "KD2",
              "му ": "KB9",
              мэри: "K7J",
              н: "KNA",
              на: "KM8",
              "на ": "KL5",
              не: "KO8",
              "не ": "KSF",
              ни: "KGM",
              но: "KGF",
              "но ": "KH9",
              о: "KSG",
              "о ": "KSG",
              ов: "KD4",
              овор: "K7V",
              огда: "K7L",
              "ого ": "KC5",
              "ой ": "KE1",
              ом: "KKG",
              "ом ": "KOQ",
              он: "KEA",
              "он ": "KC6",
              "она ": "K9G",
              ост: "KD5",
              п: "KBR",
              по: "KKF",
              пр: "KE6",
              про: "KDL",
              р: "KG0",
              ра: "KHG",
              ро: "KEM",
              с: "KJD",
              сказ: "K7O",
              ст: "KJO",
              "сть ": "K7P",
              "сь ": "KC0",
              "ся ": "KIV",
              т: "KPL",
              "т ": "KHV",
              та: "KD7",
              те: "KG3",
              "те ": "KCM",
              то: "KSA",
              "то ": "KRY",
              том: "KOJ",
              "том ": "KO7",
              "тся ": "KC4",
              "ты ": "KFY",
              ть: "KIB",
              "ть ": "KR5",
              у: "KCT",
              "у ": "KIJ",
              ф: "K0T",
              х: "K3O",
              ц: "K1K",
              ч: "K84",
              что: "KKH",
              "что ": "KLT",
              ш: "K4M",
              щ: "K19",
              ъ: "K05",
              ы: "K9R",
              "ы ": "KJX",
              ь: "KAJ",
              "ь ": "KP3",
              "ься ": "K8D",
              э: "K3E",
              "эри ": "K7I",
              это: "KJ4",
              "это ": "KIC",
              ю: "K3E",
              я: "KBD",
              "я ": "KRD",
              ё: "K2N",
              "​": "207",
              一: "2H5",
              不: "2I1",
              不知道: "2DC",
              了: "2N1",
              "了 ": "2I3",
              人: "2AJ",
              "什么 ": "2E0",
              什么时候: "2Q1",
              他: "2JJ",
              你: "2K8",
              "吗 ": "275",
              "嗎 ": "25T",
              在: "2FQ",
              她: "29M",
              "工作 ": "2C6",
              我: "2SG",
              我不知道: "2SG",
              我们: "27C",
              我的: "26P",
              是: "2JR",
              有: "2E7",
              汤姆: "27V",
              的: "2S3",
              "的 ": "29E",
              "的时候 ": "2RL",
              要: "28S"
          },
          uniques: {
              " aan": "d",
              " aic": "j",
              " aik": "g",
              " aiu": "c",
              " ao ": "b",
              " aos": "b",
              " as-": 7,
              " até": "b",
              " auf": 9,
              " auz": "j",
              " aí": "b",
              " aú": "a",
              " cee": "j",
              " chc": "l",
              " cs": "i",
              " ctr": "k",
              " cu ": "j",
              " cua": "a",
              " cóm": "a",
              " daa": "d",
              " dl": "l",
              " dzi": "l",
              " där": "f",
              " dår": "h",
              " dés": 7,
              " día": "a",
              " dón": "a",
              " död": "f",
              " ea ": "j",
              " ear": 8,
              " eat": 8,
              " een": "d",
              " eft": "f",
              " elä": "g",
              " em ": "b",
              " epl": "h",
              " etm": "m",
              " etw": 9,
              " ez ": "i",
              " ezt": "i",
              " fez": "b",
              " fi ": "j",
              " fiq": "b",
              " fje": "h",
              " gaa": "d",
              " gi ": "h",
              " gic": "f",
              " gik": "h",
              " gje": "h",
              " gân": "j",
              " göz": "m",
              " hje": "h",
              " hoz": "i",
              " htt": "k",
              " hv": "h",
              " há ": "b",
              " hâl": "m",
              " hög": "f",
              " i'": 8,
              " i-": "j",
              " iar": "j",
              " ied": "d",
              " iet": "d",
              " if ": 8,
              " iga": "i",
              " igj": "h",
              " ihn": 9,
              " iht": "m",
              " ik ": "d",
              " ilg": "m",
              " ilm": "g",
              " ils": 7,
              " ily": "i",
              " isn": 8,
              " it'": 8,
              " iub": "j",
              " iy": "m",
              " iş": "m",
              " já ": "b",
              " kje": "h",
              " ks": "l",
              " kt": "l",
              " kuo": "g",
              " kuu": "g",
              " kå": "h",
              " l-": "j",
              " lh": "b",
              " lj": "f",
              " lle": "a",
              " luu": "g",
              " lá ": "b",
              " låt": "f",
              " m'a": 7,
              " m-": "j",
              " mj": "f",
              " mni": "l",
              " muj": "a",
              " mè": 7,
              " n'a": 7,
              " n-a": "j",
              " ne-": "j",
              " når": "h",
              " nós": "b",
              " oam": "j",
              " ock": "f",
              " odp": "l",
              " og ": "h",
              " ogg": "c",
              " ogs": "h",
              " ohn": 9,
              " oik": "g",
              " olh": "b",
              " olm": "m",
              " op ": "d",
              " oth": 8,
              " oí": "a",
              " pe ": "j",
              " päi": "g",
              " rz": "l",
              " s'e": 7,
              " s-": "j",
              " sb": "c",
              " sd": "c",
              " sg": "c",
              " sje": "h",
              " szc": "l",
              " szü": "i",
              " te-": "j",
              " tiv": "b",
              " tym": "l",
              " työ": "g",
              " täm": "g",
              " tè": "c",
              " töb": "i",
              " tú ": "a",
              " túl": "i",
              " ucc": "c",
              " un'": "c",
              " uo": "c",
              " up ": 8,
              " usc": "c",
              " usk": "g",
              " v-": "j",
              " veu": 7,
              " vri": "d",
              " vro": "d",
              " vän": "f",
              " way": 8,
              " wij": "d",
              " wo ": 9,
              " ws": "l",
              " wur": 9,
              " xí": "b",
              " yh": "g",
              " yk": "g",
              " yl": "g",
              " ym": "g",
              " yri": "g",
              " ys": "g",
              " yü": "m",
              " za ": "l",
              " zas": "l",
              " zaw": "l",
              " zd": "l",
              " zi ": "j",
              " zij": "d",
              " zm": "l",
              " zn": "l",
              " zo ": "d",
              " zos": "l",
              " zr": "l",
              " zu ": 9,
              " |": 6,
              " ° ": "c",
              " ½": 9,
              " áll": "i",
              " án": "a",
              " äls": "f",
              " än ": "f",
              " är ": "f",
              " äta": "f",
              " äte": "f",
              " åk": "f",
              " åp": "h",
              " åt ": "f",
              " ça ": 7,
              " çal": "m",
              " ço": "m",
              " è ": "c",
              " é ": "b",
              " ért": "i",
              " éta": 7,
              " été": 7,
              " éx": "a",
              " éé": "d",
              " ír": "i",
              " îm": "j",
              " în": "j",
              " ôn": "b",
              " önc": "m",
              " öpp": "f",
              " öss": "i",
              " úg": "i",
              " új": "i",
              " ō": 9,
              " şe": "m",
              " şi ": "j",
              " şt": "j",
              " ।": 6,
              " २": 6,
              " ঈ": 5,
              " ঋ": 5,
              " ঔ": 5,
              " ৩": 5,
              " ৪": 5,
              " ৬": 5,
              " ৮": 5,
              " ―": "k",
              " ‟": 9,
              " №": "k",
              " ご": 1,
              " ウサギ": 1,
              " エレベ": 1,
              " コ": 1,
              " ジ": 1,
              " テ": 1,
              " ド": 1,
              " ネズミ": 1,
              " バ": 1,
              " パ": 1,
              " フ": 1,
              " ボ": 1,
              " マ": 1,
              " メ": 1,
              " 一人": 1,
              " 一日": 1,
              " 一般的": 1,
              " 不好意": 2,
              " 両親": 1,
              " 中国語": 1,
              " 二人": 1,
              " 交通事": 1,
              " 今 ": 1,
              " 今夜": 1,
              " 今度": 1,
              " 今晩": 1,
              " 今朝": 1,
              " 今週末": 1,
              " 他一": 2,
              " 他不": 2,
              " 他人": 1,
              " 他可能": 2,
              " 他在": 2,
              " 他把": 2,
              " 他有": 2,
              " 会議": 1,
              " 何時": 1,
              " 俺": 1,
              " 僕": 1,
              " 先週": 1,
              " 列車": 1,
              " 労働者": 1,
              " 北海道": 1,
              " 午前中": 1,
              " 博物館": 1,
              " 合衆国": 1,
              " 君": 1,
              " 因為": 2,
              " 地下鉄": 1,
              " 基本的": 1,
              " 外国": 1,
              " 多分 ": 1,
              " 大学": 1,
              " 大家": 2,
              " 如": 2,
              " 子": 1,
              " 実際": 1,
              " 宿題": 1,
              " 富士山": 1,
              " 少年": 1,
              " 心配": 1,
              " 我今": 2,
              " 我从来": 2,
              " 我从没": 2,
              " 我以": 2,
              " 我会": 2,
              " 我叔叔": 2,
              " 我只": 2,
              " 我可": 2,
              " 我和": 2,
              " 我哥哥": 2,
              " 我喜": 2,
              " 我妹妹": 2,
              " 我完全": 2,
              " 我就": 2,
              " 我希": 2,
              " 我弟弟": 2,
              " 我必須": 2,
              " 我必须": 2,
              " 我感觉": 2,
              " 我打算": 2,
              " 我把": 2,
              " 我无法": 2,
              " 我明": 2,
              " 我昨": 2,
              " 我更喜": 2,
              " 我最近": 2,
              " 我正在": 2,
              " 我没": 2,
              " 我無法": 2,
              " 我父": 2,
              " 我爸爸": 2,
              " 我現在": 2,
              " 我相信": 2,
              " 我看": 2,
              " 我知": 2,
              " 我能": 2,
              " 我覺得": 2,
              " 我觉": 2,
              " 我認為": 2,
              " 我认": 2,
              " 我讨厌": 2,
              " 我需": 2,
              " 我非常": 2,
              " 所以": 2,
              " 所有": 2,
              " 放課後": 1,
              " 政治家": 1,
              " 新聞": 1,
              " 旅行": 1,
              " 日曜": 1,
              " 昨夜": 1,
              " 是的 ": 2,
              " 時々 ": 1,
              " 晩ご飯": 1,
              " 最初": 1,
              " 最近 ": 1,
              " 最近彼": 1,
              " 月日": 1,
              " 有些人": 2,
              " 来週": 1,
              " 残念": 1,
              " 湯": 2,
              " 現在 ": 1,
              " 看護婦": 1,
              " 私": 1,
              " 科学者": 1,
              " 突然 ": 1,
              " 結婚": 1,
              " 結局": 1,
              " 萨米": 2,
              " 請": 2,
              " 警察官": 1,
              " 谢谢 ": 2,
              " 這": 2,
              " 那": 2,
              " 電話番": 1,
              " 電車": 1,
              " 風邪": 1,
              " 飛行": 1,
              " 갈 ": 3,
              " 같": 3,
              " 걱정": 3,
              " 걸": 3,
              " 결국 ": 3,
              " 결혼": 3,
              " 경찰": 3,
              " 계속": 3,
              " 곧 ": 3,
              " 공": 3,
              " 과학": 3,
              " 괜찮": 3,
              " 궁금": 3,
              " 날": 3,
              " 남": 3,
              " 넌 ": 3,
              " 널 ": 3,
              " 네": 3,
              " 년 ": 3,
              " 노래": 3,
              " 노력": 3,
              " 누": 3,
              " 당": 3,
              " 대": 3,
              " 더": 3,
              " 동": 3,
              " 돼 ": 3,
              " 되": 3,
              " 될 ": 3,
              " 두 ": 3,
              " 둘 ": 3,
              " 때": 3,
              " 떠났": 3,
              " 또 ": 3,
              " 많": 3,
              " 먹": 3,
              " 메": 3,
              " 몇 ": 3,
              " 모": 3,
              " 몰랐": 3,
              " 못": 3,
              " 문": 3,
              " 뭘 ": 3,
              " 미": 3,
              " 바": 3,
              " 방법": 3,
              " 배": 3,
              " 번역": 3,
              " 벌써 ": 3,
              " 본 ": 3,
              " 볼 ": 3,
              " 봐 ": 3,
              " 부": 3,
              " 비": 3,
              " 살": 3,
              " 새 ": 3,
              " 생": 3,
              " 선생": 3,
              " 소": 3,
              " 싶": 3,
              " 알": 3,
              " 언": 3,
              " 엄청 ": 3,
              " 영": 3,
              " 오": 3,
              " 완전": 3,
              " 왜": 3,
              " 운전": 3,
              " 음식": 3,
              " 음악": 3,
              " 잘": 3,
              " 재미": 3,
              " 저": 3,
              " 적": 3,
              " 전": 3,
              " 절대": 3,
              " 점심 ": 3,
              " 정": 3,
              " 조금": 3,
              " 좀": 3,
              " 죄송": 3,
              " 줄 ": 3,
              " 중": 3,
              " 줘 ": 3,
              " 진짜": 3,
              " 질문": 3,
              " 집": 3,
              " 참 ": 3,
              " 처음 ": 3,
              " 친구": 3,
              " 침대": 3,
              " 커피": 3,
              " 컴퓨": 3,
              " 큰 ": 3,
              " 텔레비": 3,
              " 파티": 3,
              " 프": 3,
              " 학교": 3,
              " 학생": 3,
              " 할": 3,
              " 함께": 3,
              " 항상": 3,
              " 행복": 3,
              " 훨씬 ": 3,
              " －": 9,
              "'ae": "c",
              "'ai ": 7,
              "'aim": 7,
              "'cl": 8,
              "'d ": 8,
              "'da": "m",
              "'e-": "c",
              "'ea": 7,
              "'eb": "c",
              "'ell": 7,
              "'ep": "c",
              "'eq": "c",
              "'fb": "c",
              "'ha ": "c",
              "'ho ": "c",
              "'hu": 7,
              "'il ": 7,
              "'j": "d",
              "'k": "d",
              "'ll": 8,
              "'ni": "m",
              "'on ": 7,
              "'ou": 7,
              "'ov": "c",
              "'re ": 8,
              "'uc": "c",
              "'uf": "c",
              "'ug": "c",
              "'une": 7,
              "'uo": "c",
              "'uv": "c",
              "'ve": 8,
              "'y ": 7,
              "'ye ": "m",
              "'yi": "m",
              "'à": 7,
              "'á": "b",
              "'â": 7,
              "'è ": "c",
              "'é": 7,
              "'ê": 7,
              "'î": 7,
              "'ü": "m",
              "(-": "k",
              "(q": "b",
              "(y": "a",
              "(z": 9,
              "-$": "n",
              "-'": "m",
              "-ai ": "j",
              "-am ": "j",
              "-ar ": "j",
              "-au ": "j",
              "-ce ": 7,
              "-ell": 7,
              "-il ": 7,
              "-je ": 7,
              "-l ": "j",
              "-lh": "b",
              "-lo ": "b",
              "-là": 7,
              "-me ": "b",
              "-mi ": "j",
              "-moi": 7,
              "-t-": 7,
              "-tu ": 7,
              "-ul": "j",
              "-vou": 7,
              "-à": 7,
              "-ã": "b",
              "-ê": 7,
              "-í": "b",
              "-ó": "i",
              "-ö": "i",
              "-ş": "j",
              "a'd": "m",
              "a'y": "m",
              "aag ": "d",
              "aak ": "d",
              aakt: "d",
              "aam ": "d",
              aav: "g",
              abg: 9,
              acj: "l",
              acz: "l",
              adei: "b",
              afí: "a",
              agte: 9,
              "agy ": "i",
              ahd: "g",
              "ahr ": 9,
              aike: "g",
              aior: "b",
              "ais-": 7,
              aiut: "c",
              aixo: "b",
              ajud: "b",
              alál: "i",
              amay: "m",
              ambé: "b",
              "an't": 8,
              apm: "m",
              aquí: "a",
              ardz: "l",
              areb: "c",
              arfö: "f",
              arum: 9,
              arü: 9,
              arş: "m",
              aszt: "i",
              atok: "i",
              atât: "j",
              aufe: 9,
              augh: 8,
              auj: 7,
              autt: "g",
              avea: "j",
              avev: "c",
              avne: "h",
              avve: "c",
              avô: "b",
              ayac: "m",
              ayud: "a",
              ayó: "a",
              azla: "m",
              "azt ": "i",
              azón: "a",
              azú: "a",
              aá: "i",
              aã: "b",
              aä: "g",
              aî: 7,
              aö: "i",
              aún: "a",
              baix: "b",
              baş: "m",
              berä: "f",
              besz: "i",
              bge: 9,
              "biz ": "m",
              bién: "a",
              blij: "d",
              "bly ": 8,
              brz: "l",
              brí: "a",
              "bst ": 9,
              buie: "j",
              bunu: "m",
              buon: "c",
              buu: "d",
              "bym ": "l",
              bã: "b",
              bäs: "f",
              bäu: 9,
              "bè ": "c",
              bém: "b",
              "bí ": "a",
              "bía ": "a",
              bî: 7,
              bô: "b",
              börj: "f",
              bù: "c",
              büc: 9,
              "c'es": 7,
              "c'è": "c",
              cche: "c",
              ccia: "c",
              cció: "a",
              ceea: "j",
              cepu: "j",
              chce: "l",
              chg: 9,
              chk: 9,
              chod: "l",
              chä: 9,
              chí: "a",
              chö: 9,
              chü: 9,
              ciod: "j",
              ciun: "j",
              ciut: "c",
              cji: "l",
              ckan: "f",
              cma: "j",
              cois: "b",
              coj: "a",
              colh: "b",
              conh: "b",
              "cos'": "c",
              csa: "i",
              cse: "i",
              csi: "i",
              cuan: "a",
              cuch: "a",
              cuel: "a",
              cuen: "a",
              cug: "c",
              cuie: "j",
              cuol: "c",
              cuá: "a",
              "cz ": "l",
              czas: "l",
              "cze ": "l",
              czeg: "l",
              czek: "l",
              czn: "l",
              czo: "l",
              czu: "l",
              czy: "l",
              câi: "j",
              câm: "b",
              cât: "j",
              cã: "b",
              cä: 9,
              cç: "b",
              cên: "b",
              "cí ": "a",
              "d'h": 7,
              "d'v": 8,
              "d'è": "c",
              "d)": 8,
              daag: "d",
              daar: "d",
              daq: "b",
              davv: "c",
              daví: "a",
              daş: "m",
              ddl: 8,
              degl: "c",
              deia: "b",
              dein: 9,
              deir: "b",
              "deu ": "b",
              deut: 9,
              dey: "m",
              didn: 8,
              dijo: "a",
              dinh: "b",
              dly: 8,
              "dn'": 8,
              "don'": 8,
              dovr: "c",
              dovu: "c",
              drik: "h",
              drz: "l",
              drí: "a",
              drü: 9,
              "dta ": "i",
              dtam: "i",
              "du-": "j",
              duw: "d",
              duy: "m",
              "dzi ": "l",
              dzia: "l",
              dzie: "l",
              dzis: "l",
              dzo: "l",
              dzy: "l",
              dà: "c",
              "dá-": "b",
              dã: "b",
              "dä ": "g",
              "dän ": "g",
              dät: "g",
              "då ": "f",
              dål: "f",
              dè: 7,
              dép: 7,
              dê: "b",
              "dí ": "a",
              "día ": "a",
              días: "a",
              dîn: 7,
              dô: "b",
              dörr: "f",
              dúv: "b",
              dû: 7,
              "dü ": "m",
              "dün ": "m",
              dō: 9,
              "e'r": 8,
              "e'v": 8,
              eady: 8,
              easc: "j",
              eaun: "j",
              eave: 8,
              ebè: "c",
              ecek: "m",
              eceu: "b",
              ecir: "a",
              ecv: "j",
              ediy: "m",
              edzi: "l",
              "eea ": "j",
              eeft: "d",
              efd: "d",
              egou: "b",
              egé: "i",
              "ehe ": 9,
              "ehr ": 9,
              ehs: 9,
              "eht ": 9,
              einm: 9,
              "eio ": "b",
              eix: "b",
              ejor: "a",
              ejó: "a",
              "ekk ": "h",
              elbs: 9,
              eliy: "m",
              ellä: "g",
              elq: 7,
              emey: "m",
              emiy: "m",
              emps: 7,
              "emu ": "l",
              "en't": 8,
              enx: "b",
              enía: "a",
              eopl: 8,
              eoz: "c",
              epoi: "b",
              epui: 7,
              erug: "d",
              "es-t": 7,
              "es-v": 7,
              "esc ": "j",
              esoi: 7,
              eszc: "l",
              euch: 9,
              eux: 7,
              "ev'": "c",
              evn: "h",
              ewh: 8,
              eyec: "m",
              "eyi ": "m",
              "ezt ": "i",
              ezte: "i",
              ezza: "c",
              ezó: "a",
              eã: "b",
              "eä ": "g",
              eça: "b",
              "eço ": "b",
              eë: "d",
              "eí ": "a",
              eía: "a",
              eíb: "a",
              eíd: "a",
              eî: "j",
              eïn: "d",
              eón: "a",
              eû: 7,
              "e‘": 9,
              "fa'": "c",
              fap: "j",
              faut: 7,
              fazl: "m",
              "fd ": "d",
              "fde ": "d",
              fds: "d",
              feel: 8,
              fej: "i",
              few: 8,
              ffn: 9,
              fft: 9,
              fiec: "j",
              figl: "c",
              fikk: "h",
              filh: "b",
              flé: 7,
              foar: "j",
              fois: 7,
              forh: "h",
              frum: "j",
              frå: "f",
              frè: 7,
              frü: 9,
              fuer: "a",
              fuo: "c",
              fà: "c",
              fâr: "j",
              fã: "b",
              fäh: 9,
              fåg: "f",
              fç: "m",
              "fè ": "c",
              fèr: 7,
              fía: "a",
              fô: "b",
              förs: "f",
              förä: "f",
              fû: 7,
              füh: 9,
              "g)": 8,
              gaat: "d",
              ganh: "b",
              gdy: "l",
              gdz: "l",
              gece: "m",
              geef: "d",
              geht: 9,
              gesa: 9,
              geï: "d",
              ggh: "c",
              "ggi ": "c",
              ggia: "c",
              ggs: 8,
              ghb: 8,
              ghl: 8,
              giap: "c",
              gick: "f",
              gikk: "h",
              gioc: "c",
              giov: "c",
              gitm: "m",
              gjer: "h",
              glei: 9,
              glez: "j",
              glio: "c",
              glöm: "f",
              glü: 9,
              goed: "d",
              gof: "c",
              good: 8,
              "gou ": "b",
              gråd: "h",
              grü: 9,
              gså: "h",
              gth: 8,
              guf: "c",
              guma: "b",
              guv: "j",
              gye: "i",
              gyi: "i",
              gynn: "h",
              gynt: "h",
              gyo: "i",
              gysz: "i",
              "g ": 9,
              gând: "j",
              gã: "b",
              gåe: "h",
              gån: "f",
              gè: 7,
              gée: 7,
              gía: "a",
              görm: "m",
              görü: "m",
              gù: "c",
              "gún ": "a",
              "gün ": "m",
              güz: "m",
              "h)": 9,
              hace: "a",
              haci: "a",
              hagy: "i",
              hci: "l",
              hdä: "g",
              "he'": 8,
              hear: 8,
              hebb: "d",
              "hed ": 8,
              heef: "d",
              "hey'": 8,
              hiam: "c",
              "hij ": "d",
              hijo: "a",
              hjem: "h",
              hjer: "h",
              hlen: 9,
              hlt: 9,
              hly: 8,
              hlä: 9,
              hnen: 9,
              hnl: 9,
              "ho'": 8,
              hodz: "l",
              hogy: "i",
              homb: "a",
              houd: "d",
              houg: 8,
              hoy: "a",
              "hoz ": "i",
              hoş: "m",
              hrer: 9,
              hrh: 9,
              hrl: 9,
              hrs: 9,
              hrt: 9,
              "hst ": 9,
              http: "k",
              htä: "g",
              huo: "g",
              huvu: "f",
              huw: "d",
              hvé: "a",
              hyv: "g",
              hár: "i",
              hã: "b",
              "hän ": "g",
              häne: "g",
              "här ": "f",
              hål: "f",
              hån: "h",
              håp: "h",
              hç: "m",
              "hí ": "a",
              hís: "a",
              hív: "i",
              hô: 7,
              höv: "f",
              hō: 9,
              hş: "m",
              "h‘": 9,
              "i'l": 8,
              "i'm": 8,
              "i'v": 8,
              iacc: "c",
              iagg: "c",
              iapp: "c",
              ibt: 9,
              icz: "l",
              idzi: "l",
              idä: "g",
              "iec ": "l",
              iedy: "l",
              iedz: "l",
              "iej ": "l",
              iejs: "l",
              ielä: "g",
              igje: "h",
              igk: 9,
              igvi: "h",
              igå: "f",
              "ihm ": 9,
              ihmi: "g",
              "ihn ": 9,
              "ihr ": 9,
              ihå: "f",
              iic: "j",
              iik: "g",
              iim: "g",
              "iin ": "g",
              ijb: "d",
              ijd: "d",
              ijf: "d",
              ijg: "d",
              ijh: "d",
              "ijk ": "d",
              ijke: "d",
              "ijn ": "d",
              ijp: "d",
              ijt: "d",
              ijv: "d",
              ijz: "d",
              iliy: "m",
              ilye: "i",
              incs: "i",
              inál: "i",
              iní: "b",
              ioda: "j",
              ious: 8,
              ioè: "c",
              irim: "m",
              irj: "g",
              irkl: 9,
              "is-j": 7,
              issz: "i",
              isä: "g",
              "it's": 8,
              "iu-": "b",
              iua: "j",
              iuc: "c",
              iune: "j",
              iuo: "c",
              iusc: "c",
              iuto: "c",
              ivät: "g",
              ixar: "b",
              iye: "m",
              iyi: "m",
              iyo: "m",
              izio: "c",
              ià: "c",
              iã: "b",
              "iä ": "g",
              iça: "b",
              iço: "b",
              ièm: 7,
              iée: 7,
              "ién ": "a",
              iê: "b",
              ië: "d",
              ií: "i",
              iô: "b",
              iù: "c",
              iü: "i",
              "iş ": "m",
              işe: "m",
              işi: "m",
              "j'": 7,
              "j-": "i",
              jaar: "d",
              "jag ": "f",
              jahr: 9,
              jds: "d",
              jdt: "d",
              jedz: "l",
              "jeg ": "h",
              jego: "l",
              jelp: "h",
              jert: "h",
              jetz: 9,
              jeun: 7,
              "jf ": "d",
              jft: "d",
              "jg ": "d",
              jge: "d",
              jgt: "d",
              jij: "d",
              jj: "i",
              jkh: "d",
              jks: "d",
              jkt: "d",
              "jl ": "d",
              jls: "d",
              jnl: "d",
              jns: "d",
              jnt: "d",
              joit: "g",
              jota: "g",
              joue: 7,
              "jp ": "d",
              jpe: "d",
              jpt: "d",
              jull: "d",
              juo: "g",
              juu: "g",
              jze: "d",
              jzi: "d",
              jà: 7,
              jár: "i",
              ját: "i",
              jã: "b",
              "jä ": "g",
              jälv: "f",
              jå: "h",
              "jé ": "a",
              jól: "i",
              "kaa ": "g",
              kauf: 9,
              kijk: "d",
              kims: "m",
              kiş: "m",
              kjed: "h",
              kjel: "h",
              kjem: "h",
              kjen: "h",
              kjer: "h",
              kkä: "g",
              knew: 8,
              know: 8,
              kolm: "g",
              komt: "d",
              ksj: "h",
              kså: "f",
              kuin: "g",
              kvel: "h",
              kvä: "f",
              kâ: "m",
              "kä ": "g",
              känd: "f",
              käv: "g",
              kåt: "h",
              kç: "m",
              kép: "i",
              kér: "i",
              kés: "i",
              két: "i",
              "kö ": "g",
              köny: "i",
              köz: "i",
              kú: "i",
              kû: "m",
              kō: 9,
              kş: "m",
              "l'f": "c",
              laub: 9,
              laş: "m",
              lbst: 9,
              lcos: "c",
              lcun: "c",
              "ldu ": "m",
              left: 8,
              letz: 9,
              "lf-": 8,
              lfd: "d",
              lgd: "d",
              lgoz: "i",
              lgui: "a",
              lgum: "b",
              lgú: "a",
              ligv: "h",
              lijk: "d",
              liw: "l",
              lkä: "g",
              "ll'a": "c",
              "ll'e": "c",
              "llä ": "g",
              lmay: "m",
              lmiy: "m",
              lox: "c",
              lsj: "d",
              ltc: "j",
              ltij: "d",
              ludz: "l",
              lvf: "h",
              lví: "a",
              lway: 8,
              lyck: "f",
              "lz ": 9,
              lâng: "j",
              lã: "b",
              lära: "f",
              låd: "f",
              låg: "f",
              "låt ": "f",
              lè: 7,
              lên: "b",
              "lí ": "a",
              lía: "a",
              lû: 7,
              "m'u": "m",
              "m'è": "c",
              "m-v": "b",
              mawi: "l",
              mbié: "a",
              "mdi ": "m",
              megt: "i",
              megy: "i",
              mehr: 9,
              meir: "b",
              mejo: "a",
              melh: "b",
              meye: "m",
              meyi: "m",
              miei: "c",
              migh: 8,
              migl: "c",
              mijn: "d",
              "miz ": "m",
              miè: 7,
              miş: "m",
              mjö: "f",
              mmt: 9,
              mmä: "g",
              "mo-": "b",
              moet: "d",
              moje: "l",
              mq: "c",
              mulh: "b",
              muut: "g",
              "muy ": "a",
              myck: "f",
              mye: "h",
              myö: "g",
              "m ": "b",
              mâi: "j",
              mânc: "j",
              mã: "b",
              "mä ": "g",
              mås: "f",
              måte: "h",
              mèr: 7,
              mée: 7,
              mêm: 7,
              "mí ": "a",
              mía: "a",
              mój: "l",
              möc: 9,
              mún: "a",
              mû: 7,
              müss: 9,
              mş: "m",
              "n'ai": 7,
              "n'd": "m",
              "n't ": 8,
              "n'y": 7,
              "n'è": "c",
              nagy: "i",
              namn: "f",
              nauc: "l",
              nció: "a",
              nehm: 9,
              neue: 9,
              next: 8,
              nft: 9,
              nfí: "a",
              nhec: "b",
              "nho ": "b",
              nhv: "h",
              niej: "l",
              niin: "g",
              niy: "m",
              niè: 7,
              nká: "i",
              nly: 8,
              nnhe: "h",
              nnr: "h",
              nnsk: "h",
              nnst: 9,
              "nnt ": 9,
              nnte: 9,
              nnå: "h",
              nodi: "d",
              nooi: "d",
              noth: 8,
              nouv: 7,
              "now ": 8,
              noë: 7,
              "nq ": 7,
              nskj: "h",
              "nu-": "j",
              nuev: "a",
              nung: 9,
              nuov: "c",
              nuw: "d",
              nuş: "m",
              nvän: "f",
              nych: "l",
              nyel: "i",
              nyth: 8,
              nyv: "i",
              nyá: "i",
              "nz'": "c",
              nzio: "c",
              "n­": 9,
              "nál ": "i",
              nã: "b",
              "nä ": "g",
              näi: "g",
              näk: "g",
              någ: "f",
              "når ": "h",
              nçai: 7,
              nças: "b",
              nè: 7,
              née: 7,
              nék: "i",
              néz: "i",
              "nía ": "a",
              níc: "b",
              "nós ": "b",
              nù: "c",
              nş: "m",
              "n‘": 9,
              "o'c": 8,
              obú: "a",
              ocm: "j",
              ocui: "j",
              ocuk: "m",
              ocz: "l",
              odob: "l",
              odpo: "l",
              odzi: "l",
              oede: "d",
              oeg: "d",
              oek: "d",
              oesn: 8,
              oew: "d",
              ofd: "d",
              oike: "g",
              oitt: "g",
              oiu: "j",
              oix: 7,
              ojc: "l",
              ojeg: "l",
              olur: "m",
              omú: "a",
              onnt: 9,
              ooit: "d",
              opd: "d",
              opg: "d",
              oruz: "m",
              osaa: "g",
              ossz: "i",
              otde: "j",
              "ou'": 8,
              ough: 8,
              oujo: 7,
              ould: 8,
              ourq: 7,
              ourr: 7,
              ouw: "d",
              oué: 7,
              "ov'": "c",
              ovre: "c",
              ovv: "c",
              "ow'": 8,
              owd: 8,
              "owi ": "l",
              oyf: 8,
              oyn: "m",
              oyé: 7,
              ozw: "l",
              oã: "b",
              oå: "f",
              oça: "b",
              oço: "b",
              "oè ": "c",
              oël: 7,
              oír: "a",
              oî: 7,
              oó: "b",
              où: 7,
              oû: 7,
              "o₂": 9,
              palj: "g",
              panh: "b",
              paur: "c",
              peak: 8,
              pegn: "c",
              peop: 8,
              peó: "a",
              "pf ": 9,
              pfl: 9,
              pge: "d",
              piè: 7,
              pmak: "m",
              pmay: "m",
              "po'": "c",
              poat: "j",
              pouv: 7,
              powi: "l",
              prek: "d",
              prz: "l",
              prè: 7,
              pued: "a",
              puhu: "g",
              puoi: "c",
              pués: "a",
              pyta: "l",
              pà: "c",
              pâi: "j",
              pã: "b",
              pè: 7,
              pée: 7,
              péu: "b",
              pôd: "b",
              pş: "m",
              "q-": "i",
              qq: "c",
              "qu'": 7,
              qur: 8,
              "quí ": "a",
              "r-o ": "j",
              raag: "d",
              rawd: "l",
              "re's": 8,
              "ren'": 8,
              reí: "a",
              rför: "f",
              rgd: "d",
              rijk: "d",
              "rió ": "a",
              rjoi: "g",
              rkj: "h",
              rlf: 8,
              rly: 8,
              rmí: "a",
              rodz: "l",
              roun: 8,
              "row ": 8,
              rquo: 7,
              rrow: 8,
              rske: "h",
              rskj: "h",
              rsoa: "j",
              rsq: 7,
              rsök: "f",
              ruik: "d",
              ruke: "h",
              rvä: "f",
              rykk: "h",
              rzt: 9,
              rzy: "l",
              "r­": 9,
              rà: "c",
              "rá-": "b",
              râd: "j",
              râs: "j",
              rã: "b",
              räff: "f",
              räg: 9,
              räu: 9,
              råg: "f",
              rån: "f",
              "rè ": "c",
              rèr: 7,
              "rí ": "a",
              rías: "a",
              rív: "b",
              rôl: 7,
              rù: "c",
              rû: 7,
              rō: 9,
              "s'es": 7,
              "s'il": 7,
              "s's": 8,
              "s'è": "c",
              "saa ": "g",
              saan: "g",
              says: 8,
              saí: "b",
              saú: "b",
              sciu: "c",
              scuc: "a",
              segí: "i",
              sehr: 9,
              selb: 9,
              setz: 9,
              "seu ": "b",
              seul: 7,
              "she ": 8,
              shed: 8,
              shl: 8,
              shr: 8,
              sicu: "c",
              siin: "g",
              siit: "g",
              siy: "m",
              "siz ": "m",
              siä: "g",
              siè: 7,
              sión: "a",
              sjuk: "f",
              sjö: "f",
              skje: "h",
              sks: 8,
              "sn'": 8,
              snil: "h",
              snö: "f",
              soas: "b",
              sotr: "a",
              spué: "a",
              ssoa: "b",
              ssza: "i",
              ssze: "i",
              suno: "c",
              suoi: "c",
              suur: "g",
              svå: "f",
              syy: "g",
              syö: "g",
              szab: "i",
              szik: "i",
              szy: "l",
              szá: "i",
              szé: "i",
              szí: "i",
              szül: "i",
              "s­": 9,
              sà: "c",
              sári: "b",
              "sä ": "g",
              såd: "f",
              såg: "f",
              sè: 7,
              sée: 7,
              ség: "i",
              sê: "b",
              "sí ": "a",
              sív: "b",
              sólo: "a",
              sô: "b",
              söy: "m",
              sù: "c",
              sû: 7,
              süre: "m",
              "t'v": 8,
              "t'è": "c",
              "t-ce": 7,
              "t-il": 7,
              "t-o ": "j",
              "taa ": "g",
              tasj: "h",
              tci: "j",
              tdea: "j",
              teir: "b",
              temt: "h",
              tení: "a",
              tept: "j",
              "teu ": "b",
              tfen: "m",
              thd: 8,
              they: 8,
              thre: 8,
              tidl: "h",
              tilb: "h",
              tinh: "b",
              tiy: "m",
              tiè: 7,
              tjen: "h",
              tly: 8,
              tmek: "m",
              tmey: "m",
              tné: "i",
              toar: "j",
              "tog ": "f",
              touj: 7,
              tq: 9,
              "tr-": "j",
              trl: "k",
              trz: "l",
              träd: "f",
              trè: 7,
              ttaa: "g",
              ttè: "c",
              tuom: "g",
              tuvo: "a",
              tué: 7,
              tvä: "f",
              två: "f",
              "ty-": 8,
              tylk: "l",
              tyy: "g",
              "tze ": 9,
              tzl: 9,
              "tzt ": 9,
              tzte: 9,
              tzu: 9,
              tà: "c",
              "tá-": "b",
              "tál ": "i",
              táx: "b",
              tâi: "j",
              tâl: "j",
              tâmp: "j",
              târ: "j",
              "tât ": "j",
              tã: "b",
              "tä ": "g",
              täi: "g",
              tåg: "f",
              tç: "m",
              "tè ": "c",
              tée: 7,
              ték: "i",
              "tél ": "i",
              têm: "b",
              tên: "b",
              "tí ": "a",
              tío: "a",
              "tól ": "i",
              tóq: "b",
              tù: "c",
              "tü ": "m",
              "tün ": "m",
              tünk: "i",
              tō: 9,
              "t‘": 9,
              "u'a": 7,
              "u'e": 7,
              "u'i": 7,
              "u'l": 8,
              "u'o": 7,
              "u'r": 8,
              "u'u": 7,
              "u'v": 8,
              "u-i": "j",
              "u-mi": "j",
              ualc: "c",
              uap: "a",
              uase: "b",
              ucru: "j",
              ucz: "l",
              udc: "c",
              udom: "i",
              udzi: "l",
              uede: "a",
              uego: "a",
              ueva: "a",
              uevo: "a",
              ufen: 9,
              ufg: 9,
              ufz: 9,
              ught: 8,
              ugü: "m",
              uii: "c",
              uink: "g",
              uiu: "b",
              uién: "a",
              uió: "a",
              ujb: "j",
              ujer: "a",
              ukaa: "g",
              umg: 9,
              umne: "j",
              "unn ": "h",
              unns: "h",
              unuz: "m",
              uoc: "c",
              uog: "c",
              "urd'": 7,
              ureu: 7,
              urü: 9,
              used: 8,
              usst: 9,
              uude: "g",
              uul: "g",
              "uur ": "d",
              uuri: "g",
              uuta: "g",
              uutt: "g",
              uvez: 7,
              "uvo ": "a",
              uvé: 7,
              "uw ": "d",
              uwd: "d",
              uws: "d",
              uwt: "d",
              "ux-": 7,
              uyd: "m",
              uyor: "m",
              uyu: "m",
              uyó: "a",
              uán: "a",
              uã: "b",
              uä: 9,
              uè: 7,
              uée: 7,
              "uém ": "b",
              uên: "b",
              uó: "a",
              uşu: "m",
              "v'e": "c",
              "v'è": "c",
              "v-a": "j",
              "vaa ": "g",
              vagy: "i",
              vaik: "g",
              való: "i",
              varf: "f",
              "vec ": 7,
              veie: "h",
              very: 8,
              vesz: "i",
              veva: "c",
              "vez-": 7,
              vgj: "h",
              vij: "d",
              vió: "a",
              "vn ": "h",
              vnet: "h",
              voas: "j",
              vogl: "c",
              voln: "i",
              voor: "d",
              votr: 7,
              "vou ": "b",
              voul: 7,
              vreb: "c",
              vreo: "j",
              vroe: "d",
              vrou: "d",
              vuel: "a",
              vuoi: "c",
              vuol: "c",
              vuto: "c",
              vver: "c",
              vvo: "c",
              vz: "m",
              vâr: "j",
              vã: "b",
              "vä ": "g",
              väg: "f",
              väh: "g",
              väld: "f",
              vänd: "f",
              "vät ": "g",
              "vå ": "f",
              våk: "h",
              vån: "f",
              vè: 7,
              vée: 7,
              "vía ": "a",
              vî: 7,
              "vô ": "b",
              vú: "i",
              vş: "m",
              "w's": 8,
              waar: "d",
              wahr: 9,
              wasn: 8,
              wav: 8,
              ways: 8,
              wcz: "l",
              "we'": 8,
              wea: 8,
              weer: "d",
              weh: 9,
              wf: 8,
              whe: 8,
              why: 8,
              wia: "l",
              widz: "l",
              wiec: "l",
              wiek: "l",
              wiem: "l",
              "wil ": "d",
              "wir ": 9,
              wird: 9,
              wirk: 9,
              with: 8,
              "wl ": 8,
              wly: 8,
              woh: 9,
              woi: "l",
              woj: "l",
              "won'": 8,
              woon: "d",
              woor: "d",
              woul: 8,
              wró: "l",
              wsz: "l",
              wurd: 9,
              wv: "d",
              www: "c",
              wyc: "l",
              wye: 8,
              wyg: "l",
              wyj: "l",
              wyk: "l",
              wym: "l",
              wyp: "l",
              wys: "l",
              wz: "l",
              wá: "a",
              wä: 9,
              wó: "l",
              wö: 9,
              wü: 9,
              xad: "b",
              xb: "i",
              "xe-": "b",
              xed: 8,
              xei: "b",
              xg: 9,
              xk: 9,
              xm: 9,
              xou: "b",
              xr: "i",
              xs: 9,
              xz: 9,
              xã: "b",
              xíc: "b",
              xō: "a",
              "y'l": 8,
              "y'n": "m",
              "y'r": 8,
              "y'v": 8,
              "y'y": "m",
              yaca: "m",
              yapt: "m",
              yaş: "m",
              yby: "l",
              yci: "l",
              ycka: "f",
              ycke: "f",
              yckl: "f",
              ycz: "l",
              "ydi ": "m",
              yea: 8,
              yece: "m",
              yeu: 7,
              yfr: 8,
              ygd: "h",
              yhd: "g",
              yht: "g",
              "yim ": "m",
              yiy: "m",
              ykd: "h",
              ymr: "h",
              ynyt: "g",
              yord: "m",
              yoru: "m",
              your: 8,
              yrit: "g",
              ythi: 8,
              ytä: "g",
              yvin: "g",
              ywh: 8,
              yâ: "m",
              yä: "g",
              yí: "i",
              yō: 9,
              "z'a": "c",
              "z'o": "c",
              "z-v": 7,
              zaws: "l",
              zco: "a",
              zcz: "l",
              zego: "l",
              ziec: "l",
              ziej: "l",
              "zij ": "d",
              zijn: "d",
              zinh: "b",
              ziy: "m",
              "zla ": "m",
              zoe: "d",
              zond: "d",
              zost: "l",
              zott: "i",
              zq: "a",
              zro: "l",
              ztá: "i",
              zuu: "d",
              zwei: 9,
              zyb: "l",
              zyc: "l",
              zyj: "l",
              zyma: "l",
              zys: "l",
              zyt: "l",
              zyw: "l",
              "zz'": "c",
              "zzo ": "c",
              zzá: "i",
              zám: "i",
              zâm: "j",
              zã: "b",
              zä: 9,
              zê: "b",
              zô: "b",
              zúc: "a",
              "| ": 6,
              " =": 9,
              " i": 9,
              " p": 7,
              " u": 9,
              " w": "l",
              " z": "l",
              ª: "b",
              "­b": 9,
              "­d": 9,
              "­s": 9,
              "²'": "m",
              "· ": "e",
              ºc: "a",
              "½ ": 9,
              ß: 9,
              "à-": 7,
              àq: "b",
              às: "b",
              "à ": 7,
              "á'": "i",
              "á-l": "b",
              áa: "i",
              ább: "i",
              "ád ": "i",
              "ág ": "i",
              água: "b",
              áis: "a",
              ák: "i",
              áln: "i",
              álta: "i",
              "ám ": "i",
              ána: "i",
              ány: "i",
              áo: "i",
              "ár ": "i",
              "ára ": "i",
              ário: "b",
              áro: "i",
              áso: "i",
              "ást ": "i",
              ásá: "i",
              "át ": "i",
              áts: "i",
              átt: "i",
              ável: "b",
              áy: "a",
              áá: "i",
              áé: "i",
              áí: "i",
              áó: "i",
              áú: "i",
              áü: "i",
              "â ": "m",
              âc: 7,
              âg: 7,
              âh: "m",
              "âi ": "j",
              âin: "j",
              âk: "m",
              âln: "j",
              âmpl: "j",
              ânca: "j",
              "ând ": "j",
              ânz: "j",
              ârs: "j",
              ârt: "j",
              ârz: "j",
              "âs ": "j",
              âu: "j",
              ây: "m",
              "ã ": "b",
              "ã-": "b",
              ãe: "b",
              ãos: "b",
              ãs: "b",
              ãz: "b",
              "ä-": "g",
              äa: "g",
              äch: 9,
              ädc: 9,
              ädd: "f",
              äffa: "f",
              äga: "f",
              ägg: "f",
              ägt: 9,
              ähd: "g",
              ähl: 9,
              ähr: 9,
              ähä: "g",
              äin: "g",
              äisi: "g",
              äit: "g",
              äiv: "g",
              äj: "g",
              äks: "g",
              äkt: "f",
              äkä: "g",
              "äl ": "f",
              äldi: "f",
              "äll ": "f",
              ällä: "g",
              älp: "f",
              älsk: "f",
              "älv ": "f",
              älä: "g",
              ämn: "f",
              ämä: "g",
              ända: "f",
              änel: "g",
              "äni ": "g",
              äny: "g",
              änä: "g",
              äq: 9,
              ärn: "f",
              "äsi ": "g",
              ästa: "f",
              "äta ": "f",
              "ätt ": "f",
              ätta: "f",
              ätz: 9,
              ätä: "g",
              äuf: 9,
              äum: 9,
              ävi: "g",
              ävä: "g",
              äx: "f",
              äy: "g",
              äz: 9,
              ää: "g",
              äö: "g",
              åa: "f",
              åb: "f",
              åda: "f",
              ådi: "h",
              åel: "h",
              "åg ": "f",
              åga: "f",
              åge: "f",
              ågo: "f",
              ågr: "f",
              åh: "f",
              åka: "f",
              åkt: "f",
              åla: "f",
              åll: "f",
              åm: "f",
              "ån ": "f",
              åna: "f",
              åned: "h",
              ång: "f",
              ånn: "h",
              åpn: "h",
              åra: "f",
              "åre ": "h",
              årl: "h",
              årn: "h",
              åste: "f",
              åta: "f",
              "åte ": "h",
              åtte: "h",
              åvi: "h",
              æ: "h",
              "ç ": "m",
              "ç'": "m",
              "ças ": "b",
              çb: "m",
              çe: "m",
              çg: "m",
              çi: "m",
              çk: "m",
              çl: "m",
              çm: "m",
              çoc: "m",
              çok: "m",
              ços: "b",
              çou: "b",
              çr: "m",
              çs: "m",
              çt: "m",
              çy: "m",
              çá: "b",
              çã: "b",
              çç: "m",
              çó: "b",
              çö: "m",
              çú: "b",
              çü: "m",
              èb: 7,
              èc: 7,
              èd: 7,
              èg: 7,
              èl: 7,
              èq: 7,
              ès: 7,
              èt: 7,
              èv: 7,
              "è ": "c",
              "é'": "i",
              écl: 7,
              écou: 7,
              écr: 7,
              ées: 7,
              éfé: 7,
              "ég ": "i",
              "ék ": "i",
              éke: "i",
              élet: "i",
              éln: "i",
              éno: 7,
              ény: "i",
              énz: "i",
              "ért ": "i",
              ész: "i",
              "ét ": "i",
              étai: 7,
              étud: 7,
              "été ": 7,
              "éu ": "b",
              éâ: 7,
              éç: 7,
              één: "d",
              éü: "i",
              "ê ": "b",
              "ê-": "b",
              êb: "b",
              êc: 7,
              êl: 7,
              "êm ": "b",
              "ême ": 7,
              ênc: "b",
              ênd: "b",
              êni: "b",
              êp: 7,
              ês: "b",
              êt: 7,
              êu: "b",
              êv: 7,
              êx: "b",
              ëe: "d",
              ëi: "d",
              ën: "d",
              ër: "d",
              ëz: "d",
              ì: "c",
              "í-": "b",
              ían: "a",
              ík: "i",
              íng: "b",
              "ío ": "a",
              íos: "a",
              íss: "b",
              íç: "b",
              "î ": "m",
              îc: 7,
              îi: "j",
              "îl ": "j",
              îmb: "j",
              îmi: "j",
              împ: "j",
              "în ": "j",
              înc: "j",
              înd: "j",
              înf: "j",
              îng: "j",
              înn: "j",
              înr: "j",
              îns: "j",
              înt: "j",
              înv: "j",
              ît: 7,
              îş: "j",
              ïf: 7,
              ïnt: "d",
              ñ: "a",
              ò: "c",
              "ó-": "i",
              óa: "i",
              ócu: "b",
              óe: "i",
              óh: "i",
              "ój ": "l",
              "ólo ": "a",
              "ómo ": "a",
              ónd: "a",
              óo: "i",
              ópr: "b",
              óry: "l",
              óu: "i",
              ów: "l",
              óá: "i",
              óé: "i",
              óí: "i",
              ôni: "b",
              ôp: 7,
              ôq: "b",
              ôr: "b",
              ôs: "b",
              ôt: 7,
              ôv: "b",
              õ: "b",
              öbb: "i",
              öch: 9,
              öda: "f",
              öe: 9,
              ögon: "f",
              öhn: 9,
              öi: "g",
              öjd: "f",
              öjl: "f",
              önce: "m",
              önnt: 9,
              öo: "g",
              öra: "f",
              örja: "f",
              örsö: "f",
              örté: "i",
              össz: "i",
              ötü: "m",
              öw: 9,
              öyle: "m",
              öä: "g",
              öç: "m",
              öö: "g",
              öş: "m",
              ø: "h",
              "ú-": "i",
              úe: "a",
              úgy: "i",
              úi: "i",
              "új ": "i",
              úk: "i",
              úo: "a",
              úvi: "b",
              úy: "a",
              "û ": 7,
              ûl: 7,
              ûr: 7,
              ût: 7,
              "ü'": "m",
              üch: 9,
              ück: 9,
              üen: "a",
              ühl: 9,
              ühr: 9,
              ünf: 9,
              "ünk ": "i",
              ünm: "m",
              ünü: "m",
              ütf: "m",
              ütz: 9,
              ütü: "m",
              üy: "m",
              "üz ": "m",
              üç: "m",
              üé: "a",
              üí: "a",
              üş: "m",
              ā: 8,
              ă: "j",
              ą: "l",
              ć: "l",
              ę: "l",
              ğ: "m",
              "ī ": 9,
              ı: "m",
              ł: "l",
              ń: "l",
              "ō ": 9,
              ōb: 9,
              ōc: "a",
              ōg: 9,
              ōk: 9,
              ōs: 9,
              ōt: 9,
              ő: "i",
              œ: 7,
              ś: "l",
              "ş'": "m",
              şam: "m",
              şan: "m",
              şar: "m",
              şb: "m",
              şek: "m",
              şey: "m",
              şf: "m",
              şg: "m",
              şh: "m",
              "şi-": "j",
              şim: "m",
              şk: "m",
              şl: "m",
              şm: "m",
              şr: "m",
              şs: "m",
              ştu: "m",
              şv: "m",
              şy: "m",
              şç: "m",
              şö: "m",
              şü: "m",
              şş: "m",
              š: "g",
              ţ: "j",
              ū: 9,
              ű: "i",
              ź: "l",
              ż: "l",
              ș: "j",
              ț: "j",
              "́": "k",
              "̇": "m",
              "΄": "e",
              ΐ: "e",
              ά: "e",
              έ: "e",
              ή: "e",
              ί: "e",
              α: "e",
              β: "e",
              γ: "e",
              δ: "e",
              ε: "e",
              ζ: "e",
              η: "e",
              θ: "e",
              ι: "e",
              κ: "e",
              λ: "e",
              μ: "e",
              ν: "e",
              ξ: "e",
              ο: "e",
              π: "e",
              ρ: "e",
              ς: "e",
              σ: "e",
              τ: "e",
              υ: "e",
              φ: "e",
              χ: "e",
              ψ: "e",
              ω: "e",
              ϊ: "e",
              ό: "e",
              ύ: "e",
              ώ: "e",
              а: "k",
              б: "k",
              в: "k",
              г: "k",
              д: "k",
              е: "k",
              ж: "k",
              з: "k",
              и: "k",
              й: "k",
              к: "k",
              л: "k",
              м: "k",
              н: "k",
              о: "k",
              п: "k",
              р: "k",
              с: "k",
              т: "k",
              у: "k",
              ф: "k",
              х: "k",
              ц: "k",
              ч: "k",
              ш: "k",
              щ: "k",
              ъ: "k",
              ы: "k",
              ь: "k",
              э: "k",
              ю: "k",
              я: "k",
              ё: "k",
              ѣ: "k",
              "ְ": "n",
              "ֱ": "n",
              "ֲ": "n",
              "ִ": "n",
              "ֵ": "n",
              "ֶ": "n",
              "ַ": "n",
              "ָ": "n",
              "ֹ": "n",
              "ֻ": "n",
              "ּ": "n",
              "ֽ": "n",
              "־": "n",
              "ׁ": "n",
              "ׂ": "n",
              א: "n",
              ב: "n",
              ג: "n",
              ד: "n",
              ה: "n",
              ו: "n",
              ז: "n",
              ח: "n",
              ט: "n",
              י: "n",
              ך: "n",
              כ: "n",
              ל: "n",
              ם: "n",
              מ: "n",
              ן: "n",
              נ: "n",
              ס: "n",
              ע: "n",
              ף: "n",
              פ: "n",
              ץ: "n",
              צ: "n",
              ק: "n",
              ר: "n",
              ש: "n",
              ת: "n",
              "׳": "n",
              "״": "n",
              "،": "o",
              "؛": "o",
              "؟": "o",
              ء: "o",
              آ: "o",
              أ: "o",
              ؤ: "o",
              إ: "o",
              ئ: "o",
              ا: "o",
              ب: "o",
              ة: "o",
              ت: "o",
              ث: "o",
              ج: "o",
              ح: "o",
              خ: "o",
              د: "o",
              ذ: "o",
              ر: "o",
              ز: "o",
              س: "o",
              ش: "o",
              ص: "o",
              ض: "o",
              ط: "o",
              ظ: "o",
              ع: "o",
              غ: "o",
              ـ: "o",
              ف: "o",
              ق: "o",
              ك: "o",
              ل: "o",
              م: "o",
              ن: "o",
              ه: "o",
              و: "o",
              ى: "o",
              ي: "o",
              "ً": "o",
              "ٌ": "o",
              "ٍ": "o",
              "َ": "o",
              "ُ": "o",
              "ِ": "o",
              "ّ": "o",
              "ْ": "o",
              "٠": "o",
              "١": "o",
              "٩": "o",
              ٱ: "o",
              ک: "o",
              ی: "o",
              "ँ": 6,
              "ं": 6,
              "ः ": 6,
              अ: 6,
              आ: 6,
              इ: 6,
              ई: 6,
              उ: 6,
              ऊ: 6,
              ए: 6,
              ऐ: 6,
              ऑ: 6,
              ओ: 6,
              औ: 6,
              क: 6,
              ख: 6,
              ग: 6,
              घ: 6,
              च: 6,
              छ: 6,
              ज: 6,
              झ: 6,
              ट: 6,
              ठ: 6,
              ड: 6,
              ढ: 6,
              ण: 6,
              त: 6,
              थ: 6,
              द: 6,
              ध: 6,
              न: 6,
              प: 6,
              फ: 6,
              ब: 6,
              भ: 6,
              म: 6,
              य: 6,
              र: 6,
              ल: 6,
              व: 6,
              श: 6,
              ष: 6,
              स: 6,
              ह: 6,
              "़": 6,
              "ा": 6,
              "ि": 6,
              "ी": 6,
              "ु": 6,
              "ू": 6,
              "ृ": 6,
              "ॅ": 6,
              "े": 6,
              "ै": 6,
              "ॉ": 6,
              "ो": 6,
              "ौ": 6,
              "्": 6,
              "०": 6,
              "१": 6,
              "२ ": 6,
              "५ ": 6,
              "९": 6,
              "ঁ": 5,
              "ং": 5,
              অ: 5,
              আ: 5,
              ই: 5,
              উ: 5,
              এ: 5,
              ঐ: 5,
              ও: 5,
              ক: 5,
              খ: 5,
              গ: 5,
              ঘ: 5,
              ঙ: 5,
              চ: 5,
              ছ: 5,
              জ: 5,
              ঝ: 5,
              ঞ: 5,
              ট: 5,
              ঠ: 5,
              ড: 5,
              ঢ: 5,
              ণ: 5,
              ত: 5,
              থ: 5,
              দ: 5,
              ধ: 5,
              ন: 5,
              প: 5,
              ফ: 5,
              ব: 5,
              ভ: 5,
              ম: 5,
              য: 5,
              র: 5,
              ল: 5,
              শ: 5,
              ষ: 5,
              স: 5,
              হ: 5,
              "়": 5,
              "া": 5,
              "ি": 5,
              "ী": 5,
              "ু": 5,
              "ূ": 5,
              "ৃ": 5,
              "ে": 5,
              "ৈ": 5,
              "ো": 5,
              "ৌ": 5,
              "্": 5,
              ৎ: 5,
              "০": 5,
              "১": 5,
              "২": 5,
              "৩ ": 5,
              "৪ ": 5,
              "৫": 5,
              "৬ ": 5,
              "৭": 5,
              "৮ ": 5,
              "৯": 5,
              ก: 4,
              ข: 4,
              ค: 4,
              ง: 4,
              จ: 4,
              ฉ: 4,
              ช: 4,
              ซ: 4,
              ญ: 4,
              ฎ: 4,
              ฏ: 4,
              ฐ: 4,
              ณ: 4,
              ด: 4,
              ต: 4,
              ถ: 4,
              ท: 4,
              ธ: 4,
              น: 4,
              บ: 4,
              ป: 4,
              ผ: 4,
              ฝ: 4,
              พ: 4,
              ฟ: 4,
              ภ: 4,
              ม: 4,
              ย: 4,
              ร: 4,
              ฤ: 4,
              ล: 4,
              ว: 4,
              ศ: 4,
              ษ: 4,
              ส: 4,
              ห: 4,
              ฬ: 4,
              อ: 4,
              ฮ: 4,
              ะ: 4,
              "ั": 4,
              า: 4,
              ำ: 4,
              "ิ": 4,
              "ี": 4,
              "ึ": 4,
              "ื": 4,
              "ุ": 4,
              "ู": 4,
              เ: 4,
              แ: 4,
              โ: 4,
              ใ: 4,
              ไ: 4,
              ๆ: 4,
              "็": 4,
              "่": 4,
              "้": 4,
              "๊": 4,
              "๋": 4,
              "์": 4,
              ὰ: "e",
              ὸ: "e",
              "​e": "d",
              "​v": "d",
              "​y": "m",
              "‌": 5,
              "‏": "o",
              "― ": "k",
              "‘ ": 9,
              "‘s": "d",
              "‚": 9,
              "‟ ": 9,
              "‬": "o",
              "‮": "o",
              " °": 9,
              "№ ": "k",
              "−": 9,
              あ: 1,
              い: 1,
              う: 1,
              え: 1,
              お: 1,
              か: 1,
              が: 1,
              き: 1,
              く: 1,
              け: 1,
              こ: 1,
              さ: 1,
              し: 1,
              じ: 1,
              す: 1,
              せ: 1,
              そ: 1,
              た: 1,
              だ: 1,
              ち: 1,
              っ: 1,
              つ: 1,
              て: 1,
              で: 1,
              と: 1,
              ど: 1,
              な: 1,
              に: 1,
              ね: 1,
              の: 1,
              は: 1,
              ば: 1,
              へ行: 1,
              べ: 1,
              ま: 1,
              み: 1,
              め: 1,
              も: 1,
              ゃ: 1,
              や: 1,
              よ: 1,
              ら: 1,
              り: 1,
              る: 1,
              れ: 1,
              ろ: 1,
              わ: 1,
              を: 1,
              ん: 1,
              ア: 1,
              イ: 1,
              オオカミ: 1,
              カナダ: 1,
              カ合衆国: 1,
              キャプテ: 1,
              ク: 1,
              シャ: 1,
              ジャ: 1,
              ジョ: 1,
              ス: 1,
              タバコ: 1,
              チョコ: 1,
              ッ: 1,
              ティ: 1,
              テレ: 1,
              ディズニ: 1,
              ト: 1,
              ニュ: 1,
              プレゼ: 1,
              プロジェ: 1,
              ミュニケ: 1,
              ム: 1,
              ラ: 1,
              リ: 1,
              ル: 1,
              レビ: 1,
              ン: 1,
              "・・・": 1,
              ー: 1,
              一下: 2,
              一度: 1,
              一日中: 1,
              "一本書 ": 2,
              一生懸: 1,
              一番: 1,
              一緒: 1,
              一起: 2,
              一週間: 1,
              上げ: 1,
              上手: 1,
              "下雨 ": 2,
              不会: 2,
              不可能的: 2,
              "不在家 ": 2,
              不思議: 1,
              不想: 2,
              不是: 2,
              不注意: 1,
              不知: 2,
              不能: 2,
              不要: 2,
              世界一周: 1,
              世界上: 2,
              世界中: 1,
              世界大戦: 1,
              世界平和: 1,
              "东西 ": 2,
              个: 2,
              中華料理: 1,
              为: 2,
              丽: 2,
              么: 2,
              之: 2,
              也: 2,
              书: 2,
              "了 ": 2,
              了一: 2,
              了他: 2,
              了我: 2,
              事務所: 1,
              二次世界: 1,
              交通渋滞: 1,
              人々: 1,
              人間: 1,
              什: 2,
              今天: 2,
              "今日 ": 1,
              仕事: 1,
              "他 ": 2,
              他是: 2,
              他的: 2,
              们: 2,
              "任何人 ": 2,
              会社: 1,
              但: 2,
              住在: 2,
              "作 ": 2,
              你: 2,
              來: 2,
              "個問題 ": 2,
              "個小時 ": 2,
              們: 2,
              "候 ": 2,
              做: 2,
              儿: 2,
              冷蔵庫: 1,
              出発: 1,
              到了: 2,
              勉強: 1,
              動車事故: 1,
              医者: 1,
              "去 ": 2,
              "去学校 ": 2,
              友達: 1,
              发: 2,
              可以: 2,
              可俗話又: 2,
              "可能的 ": 2,
              名前: 1,
              "名字 ": 2,
              吗: 2,
              吧: 2,
              告诉: 2,
              "呢 ": 2,
              "咖啡 ": 2,
              哪: 2,
              "啊 ": 2,
              嗎: 2,
              "回家 ": 2,
              図書館: 1,
              在波士頓: 2,
              在波士顿: 2,
              "地方 ": 2,
              "多少錢 ": 2,
              "多少钱 ": 2,
              大丈夫: 1,
              大統領: 1,
              天早上: 2,
              天然資源: 1,
              她: 2,
              "好 ": 2,
              好的: 2,
              如果: 2,
              姆: 2,
              委員会: 1,
              子供: 1,
              "学习 ": 2,
              学校へ: 1,
              学生時代: 1,
              孩: 2,
              學: 2,
              它: 2,
              宇宙飛行: 1,
              宙飛行士: 1,
              家族: 1,
              对: 2,
              對: 2,
              就是: 2,
              工作: 2,
              "巧克力 ": 2,
              已: 2,
              庁所在地: 1,
              应该: 2,
              开: 2,
              弁護士: 1,
              彼女: 1,
              很: 2,
              怎: 2,
              息子: 1,
              您: 2,
              想要: 2,
              "意思 ": 2,
              "感兴趣 ": 2,
              懸命勉: 1,
              "我 ": 2,
              我々: 1,
              我一: 2,
              我不: 2,
              我在: 2,
              我希望: 2,
              我想: 2,
              我是: 2,
              我有: 2,
              我的: 2,
              我第一次: 2,
              我要: 2,
              我觉得: 2,
              我需要: 2,
              "房子 ": 2,
              所有的: 2,
              手伝: 1,
              手紙: 1,
              "打網球 ": 2,
              打電話給: 2,
              携帯電話: 1,
              日本語: 1,
              早寝早起: 1,
              时: 2,
              明天: 2,
              明日: 1,
              映画: 1,
              昨天: 2,
              昨日: 1,
              是一: 2,
              是不: 2,
              "是多少 ": 2,
              是我: 2,
              時候: 2,
              時間以上: 1,
              晚: 2,
              曜日: 1,
              會: 2,
              有一: 2,
              有人: 2,
              朋: 2,
              本当: 1,
              "来的 ": 2,
              "東西 ": 2,
              样: 2,
              欢: 2,
              歡: 2,
              殺人事件: 1,
              毎日: 1,
              每: 2,
              民主主義: 1,
              気: 1,
              汤: 2,
              沒: 2,
              没有: 2,
              "波士頓 ": 2,
              "波士顿 ": 2,
              海外旅行: 1,
              "游泳 ": 2,
              澳大利亚: 2,
              现: 2,
              生懸命: 1,
              "生活 ": 2,
              的东西: 2,
              的事: 2,
              的人: 2,
              的名字: 2,
              "的問題 ": 2,
              "的国家 ": 2,
              的地方: 2,
              "的城市 ": 2,
              "的女人 ": 2,
              "的想法 ": 2,
              的房子: 2,
              "的房間 ": 2,
              "的故事 ": 2,
              "的照片 ": 2,
              "的話 ": 2,
              "看电视 ": 2,
              看起来: 2,
              "看電視 ": 2,
              県庁所在: 1,
              真的: 2,
              知道: 2,
              私達: 1,
              科学技術: 1,
              第二次世: 1,
              約束: 1,
              经: 2,
              给: 2,
              而: 2,
              自分: 1,
              自動車: 1,
              自己的: 2,
              自己紹介: 1,
              自転車: 1,
              "色的 ": 2,
              行方不明: 1,
              裡: 2,
              西班牙: 2,
              见: 2,
              言葉: 1,
              計画: 1,
              試験: 1,
              誕生日: 1,
              說: 2,
              読む価値: 1,
              话: 2,
              语: 2,
              说: 2,
              请: 2,
              跟: 2,
              车: 2,
              过: 2,
              还: 2,
              这: 2,
              這個: 2,
              運転: 1,
              部屋: 1,
              郵便局: 1,
              "里 ": 2,
              "重要 ": 2,
              重要的: 2,
              間違: 1,
              "问题 ": 2,
              间: 2,
              電話番号: 1,
              音楽: 1,
              飛行機: 1,
              高校時代: 1,
              高速道路: 1,
              麼: 2,
              點: 2,
              가: 3,
              거: 3,
              "건 ": 3,
              "걸 ": 3,
              것: 3,
              게: 3,
              "계속 ": 3,
              고: 3,
              "과 ": 3,
              그: 3,
              기: 3,
              "까 ": 3,
              나: 3,
              난: 3,
              내: 3,
              너: 3,
              "네 ": 3,
              는: 3,
              니: 3,
              다: 3,
              "더 ": 3,
              "데 ": 3,
              도: 3,
              "든 ": 3,
              들: 3,
              라: 3,
              로: 3,
              를: 3,
              리: 3,
              마: 3,
              만: 3,
              말: 3,
              "면 ": 3,
              무: 3,
              보: 3,
              사: 3,
              생각: 3,
              서: 3,
              선생님: 3,
              세: 3,
              수: 3,
              스: 3,
              시: 3,
              신: 3,
              아: 3,
              안: 3,
              않: 3,
              야: 3,
              어: 3,
              없: 3,
              었: 3,
              에: 3,
              여: 3,
              오늘: 3,
              "와 ": 3,
              "왜 ": 3,
              요: 3,
              우: 3,
              으: 3,
              은: 3,
              을: 3,
              의: 3,
              이: 3,
              인: 3,
              일: 3,
              있: 3,
              자: 3,
              "절대 ": 3,
              제: 3,
              "좀 ": 3,
              좋: 3,
              주: 3,
              지: 3,
              "처럼 ": 3,
              컴퓨터: 3,
              "테 ": 3,
              텔레비전: 3,
              톰: 3,
              프랑: 3,
              하: 3,
              한: 3,
              "할 ": 3,
              "함께 ": 3,
              "항상 ": 3,
              해: 3,
              했: 3,
              "히 ": 3,
              𝑥: 9,
              "－ ": 9,
              "；可俗話": 2,
              "�": 9
          }
      }
        , A = /([,，、。!¿?！？":;()「」{}„“«»”"“<>⋯《》*]|[.[\]\\])+/
        , I = /[ ]+/;
      function F(e) {
          return e.split(I)
      }
      function L(e, t, n=!0) {
          let r = []
            , o = n ? " ".repeat(t - 1) + e + " ".repeat(t - 1) : e;
          for (let e = 0; e < o.length - (t - 1); e++) {
              let n = []
                , i = 0;
              for (let r = 0; r < t; r++)
                  " " === o[e + r] ? i += 1 : i = 0,
                  !(i > 1) && n.push(o[e + r]);
              let a = n.join("");
              a.trim().length > 0 && a.length === t && r.push(a)
          }
          return r
      }
      function M(e, t, n, r) {
          for (let o of f) {
              let i = L(e, o);
              for (let e of i) {
                  if (!n.has(e))
                      continue;
                  let i = C(t.uniques[e]);
                  if (!(r.only.length > 0) || r.only.includes(i))
                      return r.verbose && console.log(`[Pass 1] detectUniqueGrams ${o}-grams - match '${e}' to ${i}`),
                      i
              }
          }
          return ""
      }
      function B(e, t, n) {
          let r = new Map
            , o = f.map((t => L(e, t))).flat();
          n.verbose && console.log("[Pass 2] DetectPotentialGrams", e, o);
          let i = new Set([...v.values()].filter((e => !(n.only.length > 0) || n.only.includes(e) || n.only.includes(C(e)))));
          i.forEach((e => r.set(e, 0)));
          for (let e of o) {
              let o = l(e)
                , a = t.multiples[o];
              if (!a)
                  continue;
              let s = new Set(Object.keys(a))
                , c = [];
              for (let e of i)
                  s.has(e) && (r.set(e, (r.get(e) || 0) + a[e] * o.length / 4),
                  c.push(`${e} = ${a[e] / 1024 * 100}%`));
              n.verbose && c.length > 0 && console.log(`Gram '${o}'`, c)
          }
          let a = [...r.entries()];
          a.sort(( (e, t) => t[1] - e[1]));
          let s = Math.max(...a.map((e => e[1]))) || 1
            , c = a.slice(0, 8).map((e => ({
              lang: C(e[0]),
              accuracy: 1 - m((s - e[1]) / s),
              score: m(e[1])
          })));
          return n.verbose && console.log("Result", e, c),
          c
      }
      var k = w
        , D = {
          uniques: Object.fromEntries(Object.entries(k.uniques).map((e => [e[0], b[parseInt(e[1].toString(), 36)]]))),
          multiples: Object.fromEntries(Object.entries(k.multiples).map((e => {
              let t = Object.fromEntries(e[1].match(/(.{1,3})/g)?.map((e => {
                  let t = e.slice(0, 1)
                    , n = e.slice(1);
                  return [b[parseInt(t, 36)], parseInt(n, 36)]
              }
              )) || []);
              return [e[0], t]
          }
          )))
      }
        , _ = new Set(Object.keys(w.uniques));
      function S(e, t) {
          let n = function(e, t) {
              let n = p(t);
              return function(e) {
                  return "string" == typeof e || e instanceof String
              }(e) ? function(e, t, n, c) {
                  let l = function(e) {
                      return e.split(A)
                  }(e);
                  l = l.map((e => function(e) {
                      return e.toLowerCase().replace(s, "'").replace(r, " ").replace(i, (e => String.fromCharCode(e.charCodeAt(0) - 65248))).replace(o, "").replace(a, " ").trim()
                  }(e))).filter((e => !!e)),
                  l.sort(( (e, t) => t.length - e.length)),
                  l = l.slice(0, 7),
                  t.verbose && console.log("Analize chunks", l);
                  let u = 0
                    , d = {};
                  for (let e of l) {
                      let r = M(e, n, c, t);
                      if (r) {
                          d[r] = (d[r] || 0) + 1 * e.length,
                          u += e.length;
                          continue
                      }
                      let o = F(e);
                      for (let e of o)
                          B(e, n, t).forEach((e => {
                              d[e.lang] = (d[e.lang] || 0) + e.accuracy
                          }
                          )),
                          u += e.length
                  }
                  let f = Object.entries(d).filter((e => e[1] > 0));
                  f.sort(( (e, t) => t[1] - e[1]));
                  let h = f.map((e => ({
                      lang: e[0],
                      accuracy: e[1] / u
                  })));
                  return t.verbose && console.log("Merge Results", h),
                  h
              }(e, n, D, _) : []
          }(e, t);
          return n.length > 0 ? n[0].lang : ""
      }
  }
}]);
