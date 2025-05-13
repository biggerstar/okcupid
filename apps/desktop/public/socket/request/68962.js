(globalThis.__TIKTOK_CHUNKS__ = globalThis.__TIKTOK_CHUNKS__ || []).push([[68962], {
  720798: (e, t, i) => {
      "use strict";
      i.d(t, {
          p: () => r
      });
      var s = i(25724)
        , n = i(783415)
        , o = i(352404);
      function r(e, ...t) {
          return (0,
          n.U)(e, ( () => {
              const i = (0,
              s.atom)(...t)
                , n = (0,
              o.Lr)(e);
              return i.debugLabel = n.id,
              i
          }
          ))
      }
  }
  ,
  309678: (e, t, i) => {
      "use strict";
      i.d(t, {
          $: () => o
      });
      var s = i(465622)
        , n = i(783415);
      function o(e) {
          return t => (0,
          n.U)(e, ( () => (0,
          s.createContext)(t)))
      }
  }
  ,
  783415: (e, t, i) => {
      "use strict";
      i.d(t, {
          U: () => r
      });
      let s = !1;
      var n = i(352404);
      const o = new Map;
      function r(e, t) {
          const i = "function" == typeof t ? t : () => t;
          return s ? function(e, t) {
              const {scope: i, id: s} = e;
              let n;
              if (o.has(i) ? n = o.get(i) : (n = new Map,
              o.set(i, n)),
              n.has(s))
                  return n.get(s);
              {
                  const e = t();
                  return n.set(s, e),
                  e
              }
          }((0,
          n.Lr)(e), i) : i()
      }
  }
  ,
  352404: (e, t, i) => {
      "use strict";
      i.d(t, {
          Lr: () => a
      });
      const s = "__default_scope__"
        , n = "__default_version__"
        , o = "@"
        , r = "~";
      function a(e) {
          return "string" == typeof e ? function(e) {
              const t = e.indexOf(o)
                , i = e.lastIndexOf(r);
              let a = e
                , c = s
                , l = n;
              return -1 !== t && (a = e.slice(0, t),
              i > t ? (c = e.slice(t, i),
              l = e.slice(i)) : c = e.slice(t)),
              {
                  id: a,
                  scope: c,
                  version: l
              }
          }(e) : {
              id: e[0],
              scope: null !== (t = e[1]) && void 0 !== t ? t : s,
              version: null !== (i = e[2]) && void 0 !== i ? i : n
          };
          var t, i
      }
  }
  ,
  870658: (e, t, i) => {
      "use strict";
      i.d(t, {
          Zi: () => u,
          $U: () => l,
          BJ: () => v,
          Bl: () => c,
          D9: () => p,
          yw: () => d
      });
      var s, n, o = i(611379);
      !function(e) {
          e.ROW = "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/secsdk/secsdk-lastest.umd.js",
          e.TTP = "https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/secsdk/secsdk-lastest.umd.js"
      }(s || (s = {})),
      function(e) {
          e.Acrawler = "acrawler",
          e.SecSdkSG = "secsdk_sg",
          e.SecSdkVA = "secsdk_va",
          e.SecSdkTTP = "secsdk_ttp"
      }(n || (n = {}));
      const r = {
          acrawler: "https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/webmssdk/2.0.0.221/webmssdk.js",
          secsdk_sg: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/secsdk/secsdk-lastest.umd.js",
          secsdk_va: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/secsdk/secsdk-lastest.umd.js",
          secsdk_ttp: "https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/secsdk/secsdk-lastest.umd.js"
      };
      i(327334);
      const a = "script-manager";
      function c(e) {
          var t, i, s;
          let n = {
              imports: {}
          };
          try {
              n = JSON.parse(null !== (i = null === (t = document.querySelector(`#${a}`)) || void 0 === t ? void 0 : t.innerHTML) && void 0 !== i ? i : "")
          } catch (e) {
              console.error("[Init failed]: sdk config is invalid")
          }
          return null !== (s = n.imports[e]) && void 0 !== s ? s : ""
      }
      function l(e) {
          return (0,
          o.sH)(this, void 0, void 0, (function*() {
              const {moduleId: t} = e
                , i = c(t)
                , s = document.createElement("script");
              return s.src = i,
              s.async = !0,
              new Promise(( (e, t) => {
                  var n;
                  i ? (s.parentNode && (null === (n = document.parentNode) || void 0 === n || n.removeChild(s)),
                  document.body.appendChild(s),
                  s.addEventListener("load", ( () => {
                      e(!0)
                  }
                  )),
                  s.addEventListener("error", ( () => {
                      t(new Error("load script failed"))
                  }
                  ))) : t(new Error("empty script src"))
              }
              ))
          }
          ))
      }
      function d(e) {
          const {moduleId: t} = e
            , i = c(t)
            , s = document.querySelector(`script[src="${i}"]`);
          return Boolean(s)
      }
      function u(e="/node-webapp/api/importmap") {
          return (0,
          o.sH)(this, void 0, void 0, (function*() {
              if (document.querySelector(`#${a}`))
                  return;
              let t = {
                  imports: {}
              };
              const i = document.createElement("script");
              i.type = "application/json",
              i.id = a;
              try {
                  const i = yield window.fetch.call(null, e, {
                      method: "Get",
                      redirect: "error"
                  })
                    , {imports: s} = yield i.json();
                  t = {
                      imports: s
                  }
              } catch (e) {
                  t = {
                      imports: r
                  }
              }
              i.innerText = JSON.stringify(t),
              document.head.appendChild(i)
          }
          ))
      }
      function p(e) {
          let t = "secsdk_sg";
          switch (e) {
          case "MALI_VA":
              t = "secsdk_va";
              break;
          case "TTP":
              t = "secsdk_ttp";
              break;
          default:
              t = "secsdk_sg"
          }
          return t
      }
      function v() {
          return "acrawler"
      }
  }
  ,
  20417: (e, t, i) => {
      "use strict";
      i.d(t, {
          Hd: () => o,
          S4: () => a
      });
      var s = i(720798)
        , n = i(529756);
      const o = (0,
      s.p)("basicPlayerAtom@tiktok/webapp-atoms", {
          mute: !0,
          playing: !0,
          volume: 0,
          canAutoPlay: !0,
          playProgress: null
      })
        , {useServiceState: r, useServiceDispatchers: a, useAtomService: c} = (0,
      n.i)(o, ( (e, t) => ({
          setMute(e) {
              t(o, (t => Object.assign(Object.assign({}, t), {
                  mute: e
              })))
          },
          setVolume(e) {
              t(o, (t => Object.assign(Object.assign({}, t), {
                  volume: Math.min(Math.max(0, e), 1)
              })))
          },
          setPlaying(e) {
              t(o, (t => Object.assign(Object.assign({}, t), {
                  playing: e
              })))
          },
          setCanAutoPlay(e) {
              t(o, (t => Object.assign(Object.assign({}, t), {
                  canAutoPlay: e
              })))
          },
          getStaticBasicPlayerState: () => e(o)
      })))
  }
  ,
  919432: (e, t, i) => {
      "use strict";
      i.d(t, {
          $V: () => h,
          LM: () => _,
          Ul: () => k,
          yA: () => f
      });
      var s = i(12110)
        , n = i(972607)
        , o = i(14456)
        , r = i(720798)
        , a = i(529756)
        , c = i(888457)
        , l = i(947568)
        , d = i(367922)
        , u = i(20417);
      const p = "w_g_vv"
        , v = "w_g_fyp_vv"
        , g = 1e6
        , m = {
          prevVideo: null,
          currentVideo: null,
          playType: "hover",
          globalVvCount: 0,
          fypVvCount: 0,
          justWatchedVideo: null,
          predictedPreloadConfig: {},
          defaultResolution: void 0,
          multiInstanceActualResolutions: {}
      }
        , h = () => {
          var e, t, i;
          const s = Object.assign({}, m);
          if ((0,
          c.fU)())
              return s;
          try {
              s.globalVvCount = Number(null !== (e = localStorage.getItem(p)) && void 0 !== e ? e : "0"),
              s.fypVvCount = Number(null !== (t = localStorage.getItem(v)) && void 0 !== t ? t : "0")
          } catch (e) {
              console.warn("getLocalStorage failed for key: webapp_vv_count")
          }
          try {
              const e = null !== (i = localStorage.getItem("resolution")) && void 0 !== i ? i : void 0;
              s.defaultResolution = e
          } catch (e) {
              console.warn("getLocalStorage failed for key: resolution")
          }
          return s
      }
        , f = (0,
      r.p)("videoPlayerAtom@tiktok/webapp-atoms", h())
        , {useServiceState: b, useServiceDispatchers: y, useAtomService: w, getStaticApi: _} = (0,
      a.i)(f, ( (e, t) => ({
          setDefaultResolution(e) {
              t(f, (t => Object.assign(Object.assign({}, t), {
                  defaultResolution: e
              })))
          },
          setDefaultResolutionAndUpdateLocalStorage(e) {
              this.setDefaultResolution(e);
              try {
                  localStorage.setItem("resolution", e)
              } catch (e) {
                  console.warn("setLocalStorage failed for key: resolution")
              }
          },
          setMultiInstanceActualResolution(e, i) {
              t(f, (t => {
                  let s = Object.assign({}, t.multiInstanceActualResolutions);
                  s[e] = i;
                  let n = [...t.recentVideoIndexes || []];
                  return n.includes(e) || (n = [e, ...n]),
                  n.length > 4 && (n = n.slice(0, 4)),
                  s = Object.fromEntries(Object.entries(s).filter(( ([e]) => n.includes(Number(e))))),
                  Object.assign(Object.assign({}, t), {
                      multiInstanceActualResolutions: s,
                      recentVideoIndexes: n
                  })
              }
              ))
          },
          updateVideo(e) {
              const {needResetReport: i=!0, currentVideo: {index: n}, teaParams: {isThreeColumnAuto: r=!1, isVideoDetail: a=!1, enterMethod: p="", backendSourceEventTracking: v=""}={}} = e
                , g = s.l.getInstance(o.Gs);
              g.setIsThreeColumnAuto(r),
              g.setEnterMethod(p),
              g.setBackendSourceEventTracking(v),
              g.setIsVideoDetail(a),
              !(0,
              c.fU)() && window.videoChangedCallback && window.videoChangedCallback(n),
              i && g.reset(),
              (0,
              l.unstable_batchedUpdates)(( () => {
                  var i;
                  t(f, (t => {
                      var i;
                      return Object.assign(Object.assign({}, t), {
                          prevVideo: t.currentVideo,
                          currentVideo: e.currentVideo,
                          current_mode: null === (i = e.currentVideo) || void 0 === i ? void 0 : i.mode,
                          playType: e.playType
                      })
                  }
                  )),
                  t(u.Hd, (t => Object.assign(Object.assign({}, t), {
                      playProgress: e.playProgress
                  }))),
                  t(d.vl, (e => Object.assign(Object.assign({}, e), {
                      isPlayerError: !1
                  }))),
                  !(null == (i = e.currentVideo) ? void 0 : i.id) || void 0 === (null == i ? void 0 : i.mode) || 0 !== (null == i ? void 0 : i.mode) && 2 !== (null == i ? void 0 : i.mode) && 9 !== (null == i ? void 0 : i.mode) && 4 !== (null == i ? void 0 : i.mode) || t(f, (e => Object.assign(Object.assign({}, e), {
                      justWatchedVideo: i
                  })))
              }
              ))
          },
          updateVideoFocusTime(e) {
              s.l.getInstance(o.Gs).updateVideoFocusTime(e.blurTime)
          },
          updateGlobalVVCount(i) {
              const {globalVvCount: s=0, fypVvCount: o=0} = e(f);
              let r = s;
              s <= g && 1 !== i && (r = s + 1,
              (0,
              n.AP)(p, String(r)),
              t(f, (e => Object.assign(Object.assign({}, e), {
                  globalVvCount: r
              })))),
              o <= g && 0 === i && ((0,
              n.AP)(v, String(o + 1)),
              t(f, (e => Object.assign(Object.assign({}, e), {
                  fypVvCount: o + 1
              }))))
          },
          updatePredictedPreloadConfig(e) {
              t(f, (t => Object.assign(Object.assign({}, t), {
                  predictedPreloadConfig: e
              })))
          },
          getStaticPlayerState: () => e(f)
      })))
        , k = () => b((e => e.currentVideo))
  }
  ,
  367922: (e, t, i) => {
      "use strict";
      i.d(t, {
          eu: () => p,
          vl: () => a
      });
      var s = i(720798)
        , n = i(529756)
        , o = i(888457);
      const r = {
          isPlayerError: !1,
          showUnmuteTooltip: !1,
          isAutoScroll: !1
      }
        , a = (0,
      s.p)("videoPlayerViewAtom@tiktok/webapp-atoms", ( () => {
          var e;
          const t = Object.assign({}, r);
          if ((0,
          o.fU)())
              return t;
          try {
              const i = null !== (e = localStorage.getItem("auto_scroll")) && void 0 !== e ? e : "0";
              t.isAutoScroll = "1" === i
          } catch (e) {
              console.warn("getLocalStorage failed for key: auto_scroll")
          }
          return t
      }
      )());
      a.debugLabel = "videoPlayerViewAtom";
      const {useServiceState: c, useServiceDispatchers: l, useAtomService: d, getStaticApi: u} = (0,
      n.i)(a, ( (e, t) => ({
          setAutoScroll(e) {
              t(a, (t => Object.assign(Object.assign({}, t), {
                  isAutoScroll: e
              })))
          },
          setAutoScrollAndUpdateLocalStorage(e) {
              this.setAutoScroll(e);
              try {
                  localStorage.setItem("auto_scroll", e ? "1" : "0")
              } catch (e) {
                  console.warn("setLocalStorage failed for key: auto_scroll")
              }
          },
          toggleAutoScroll() {
              this.setAutoScrollAndUpdateLocalStorage(!e(a).isAutoScroll)
          },
          updateShowUnmuteTooltip(e) {
              t(a, (t => Object.assign(Object.assign({}, t), {
                  showUnmuteTooltip: e
              })))
          },
          setPlayerError() {
              t(a, (e => Object.assign(Object.assign({}, e), {
                  isPlayerError: !0
              })))
          },
          getStaticPlayerUIState: () => e(a)
      })))
        , p = () => {
          var e;
          return null !== (e = c((e => e.isAutoScroll))) && void 0 !== e && e
      }
  }
  ,
  466839: (e, t, i) => {
      "use strict";
      i.d(t, {
          b: () => n
      });
      var s = i(720798);
      const n = (0,
      i(168365)._)((0,
      s.p)("seoMetaStateAtom@tiktok/webapp-atoms", {
          metaParams: {},
          jsonldList: [],
          disableAlternateLink: !1,
          generateAlternateWithCanonical: !1,
          enableAlternateHreflang: !1,
          alternateHreflangList: []
      }), {
          rehydrationKey: "seo.meta.state"
      })
  }
  ,
  397614: (e, t, i) => {
      "use strict";
      i.d(t, {
          hG: () => d,
          VR: () => u
      });
      var s = i(168365)
        , n = i(529756)
        , o = i(720798)
        , r = i(164596)
        , a = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      }
        , c = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const l = (0,
      s._)((0,
      o.p)("businessAtom@tiktok/webapp-atoms", {
          businessPermission: {
              comment: !1,
              message: !1
          },
          businessAccountInfoResponse: {
              statusCode: 1,
              statusMsg: "",
              data: void 0
          }
      }), {
          rehydrationKey: "webapp.business"
      })
        , {useAtomService: d, useServiceState: u, useServiceDispatchers: p, getStaticApi: v} = (0,
      n.i)(l, ( (e, t) => ({
          setBusinessPermission(e) {
              t(l, (t => Object.assign(Object.assign({}, t), {
                  businessPermission: e
              })))
          },
          setBusinessAccountInfoResponse(e) {
              t(l, (t => Object.assign(Object.assign({}, t), {
                  businessAccountInfoResponse: e
              })))
          },
          getBusinessPermissionList() {
              var e;
              return c(this, void 0, void 0, (function*() {
                  const t = yield function() {
                      return a(this, void 0, void 0, (function*() {
                          return r.h.get("/api/ba/business/suite/permission/list/", {
                              query: {
                                  permissionList: "001004,001005"
                              },
                              baseUrlType: 2
                          })
                      }
                      ))
                  }()
                    , i = null !== (e = null == t ? void 0 : t.permissionList) && void 0 !== e ? e : [];
                  this.setBusinessPermission({
                      message: i.indexOf("001004") > -1,
                      comment: i.indexOf("001005") > -1
                  })
              }
              ))
          },
          getBusinessAccountInfoResponse() {
              return c(this, void 0, void 0, (function*() {
                  const e = yield function() {
                      return a(this, void 0, void 0, (function*() {
                          return r.h.get("/api/ba/business/suite/bs/account/info/", {
                              query: {
                                  scene: "dm"
                              },
                              baseUrlType: 2
                          })
                      }
                      ))
                  }();
                  this.setBusinessAccountInfoResponse(e)
              }
              ))
          }
      })))
  }
  ,
  906486: (e, t, i) => {
      "use strict";
      i.d(t, {
          Cx: () => c,
          rP: () => l
      });
      var s = i(168365)
        , n = i(529756)
        , o = i(720798);
      const r = (0,
      s._)((0,
      o.p)("commentPanelAtom@tiktok/webapp-atoms", {
          isActive: !1,
          showSkeleton: !1
      }), {
          rehydrationKey: "webapp.comment.panel"
      })
        , {useAtomService: a, useServiceState: c, useServiceDispatchers: l, getStaticApi: d} = (0,
      n.i)(r, ( (e, t) => ({
          setItemId(e) {
              t(r, (t => Object.assign(Object.assign({}, t), {
                  isActive: !0,
                  itemId: e
              })))
          },
          setShowSkeleton(e) {
              t(r, (t => Object.assign(Object.assign({}, t), {
                  showSkeleton: e
              })))
          },
          removeActiveItem() {
              t(r, {
                  isActive: !1,
                  showSkeleton: !1
              })
          },
          setCloseMethod(e) {
              t(r, (t => Object.assign(Object.assign({}, t), {
                  closeMethod: null != e ? e : void 0
              })))
          },
          closeCommentPanel(e) {
              t(r, (t => Object.assign(Object.assign({}, t), {
                  isActive: !1,
                  showSkeleton: !1,
                  closeMethod: e
              })))
          }
      })))
  }
  ,
  369379: (e, t, i) => {
      "use strict";
      i.d(t, {
          Z9: () => L
      });
      var s = i(919432)
        , n = i(720798)
        , o = i(529756)
        , r = i(184394)
        , a = i(416580)
        , c = i(373491)
        , l = i(939232)
        , d = i(388482)
        , u = i(164596)
        , p = i(168365)
        , v = i(406862)
        , g = i(905183)
        , m = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const h = (0,
      d.M)({
          csr: e => m(void 0, void 0, void 0, (function*() {
              return u.h.get("/api/mix/item_list/", {
                  query: e,
                  baseUrlType: 2
              })
          }
          ))
      })
        , f = (0,
      n.p)("activePlaylistItemListAtom@tiktok/webapp-atoms", v.hA)
        , b = (0,
      p._)((0,
      n.p)("playlistItemListAtom@tiktok/webapp-atoms", {}), {
          rehydrationKey: "desktop.playlistPage.playlistItemList"
      })
        , {useAtomService: y, useServiceDispatchers: w, useServiceState: _} = (0,
      o.i)(b, ( (e, t) => ({
          fetchPlaylistItemList(i) {
              var s;
              return m(this, void 0, void 0, (function*() {
                  const n = e(b)
                    , {mixId: o, itemListKey: r} = i
                    , a = r || o;
                  if (!(a in n) || n[a].hasMore)
                      try {
                          const i = n[a]
                            , c = null !== (s = null == i ? void 0 : i.cursor) && void 0 !== s ? s : "0"
                            , {language: d} = (0,
                          l.x)()
                            , u = yield h({
                              mixId: o,
                              language: d,
                              cursor: c,
                              aid: v.xE,
                              count: v.vu
                          });
                          t(f, (e => {
                              var t;
                              return null !== (t = n[a]) && void 0 !== t ? t : e
                          }
                          )),
                          (0,
                          g.Tj)(e, t, f, a, u, {
                              isPlayList: !0
                          }),
                          t(b, (t => Object.assign(Object.assign(Object.assign({}, t), {
                              [o]: e(f)
                          }), r && {
                              [r]: e(f)
                          })))
                      } catch (e) {
                          (0,
                          g.e_)(t, f)
                      }
                  else
                      t(f, n[a])
              }
              ))
          }
      })))
        , k = (0,
      n.p)("immersivePlayerItemListConfigAtom@tiktok/webapp-atoms", null)
        , j = (0,
      n.p)("immersivePlayerItemListAtom@tiktok/webapp-atoms", (e => {
          const t = e(k);
          if (!t)
              return [];
          if ("single" === t.mode) {
              const i = (0,
              c.D)(t.itemListKey);
              return i ? e(i).list : []
          }
          return "id" === t.mode && "user-playlist" === t.source ? e(b)[t.id].list : []
      }
      ), ( (e, t, i) => {
          t(k, i)
      }
      ))
        , O = (0,
      n.p)("immersivePlayerStateAtom@tiktok/webapp-atoms", {
          index: -1,
          isOpen: !1,
          isCommentsOpen: !1
      })
        , S = (0,
      n.p)("immersivePlayerAtom@tiktok/webapp-atoms", (e => {
          const t = e(O)
            , i = e(j)
            , s = e(k);
          return Object.assign({
              itemList: i,
              itemListSourceConfig: s
          }, t)
      }
      ), ( (e, t, i) => {
          console.warn("Tried to set immersivePlayerAtom with:", i)
      }
      ))
        , {useAtomService: I, useServiceState: L, useServiceDispatchers: P, getStaticApi: x} = (0,
      o.i)(S, ( (e, t) => ({
          syncStateToPlayerAtom({id: t}={}) {
              const i = e(k)
                , {index: n} = e(S)
                , o = null != t ? t : e(j)[n]
                , c = e(a.jD)[o]
                , l = "video" === (null == c ? void 0 : c.contentType) ? c.currentTime : void 0
                , d = {
                  currentVideo: {
                      index: n,
                      id: o,
                      mode: 9
                  },
                  playProgress: null != l ? l : 0,
                  pageType: "single" === (null == i ? void 0 : i.mode) ? r.FB[i.itemListKey] : 999
              };
              (0,
              s.LM)().updateVideo(d),
              "video" === (null == c ? void 0 : c.contentType) ? (0,
              a.Q3)().setVideoInfo({
                  itemId: o,
                  currentTime: l
              }) : "photo" === (null == c ? void 0 : c.contentType) && (0,
              a.Q3)().setPhotoInfo({
                  itemId: o
              })
          },
          openImmersivePlayer({id: e, index: i, itemListSourceConfig: s, teaParams: n, isCommentsOpen: o}) {
              t(k, s),
              t(O, {
                  index: i,
                  isOpen: !0,
                  isCommentsOpen: o,
                  teaParams: n
              }),
              this.syncStateToPlayerAtom({
                  id: e
              })
          },
          closeImmersivePlayer() {
              this.syncStateToPlayerAtom(),
              t(O, {
                  index: -1,
                  isOpen: !1,
                  isCommentsOpen: !1,
                  teaParams: void 0
              }),
              t(k, null)
          },
          setIndex(e, i) {
              t(O, (t => Object.assign(Object.assign({}, t), {
                  index: e
              }))),
              this.syncStateToPlayerAtom({
                  id: i
              })
          },
          setIsCommentsOpen(e) {
              t(O, (t => Object.assign(Object.assign({}, t), {
                  isCommentsOpen: e
              })))
          }
      })))
  }
  ,
  573461: (e, t, i) => {
      "use strict";
      i.d(t, {
          CP: () => O,
          JF: () => y,
          b1: () => j,
          MR: () => _,
          mZ: () => k
      });
      var s = i(445372)
        , n = i.n(s)
        , o = i(669872)
        , r = i(947568)
        , a = i(144636)
        , c = i(939232)
        , l = i(950374)
        , d = i(615263)
        , u = i(329734)
        , p = i(271293)
        , v = i(720798)
        , g = i(168365)
        , m = i(529756);
      const h = {
          isOpen: !1,
          url: "",
          isRedirectToProfilePage: !1,
          closeable: !1,
          isBannerActive: !1,
          bannerEnabled: !1,
          content: {
              title: "",
              desc: "",
              btnOpenText: ""
          },
          iframeStyle: {},
          handleDownload: n(),
          handleLogin: n(),
          closeCallback: n(),
          loginModalShow: !1,
          maskCloseable: !1,
          userId: "",
          groupId: "",
          enterMethod: void 0,
          pageType: 5,
          modalType: "",
          hasCheckedPeriodicLogin: !1,
          hasCheckedPredictionLogin: !1,
          hasCheckedGuestMode: !1,
          showLoginOnLoad: !1,
          isLoginOnLoadClosed: !1,
          redirectToHomePage: !1,
          isGuestMode: !1,
          isGuestModeUI: !1
      };
      function f() {
          return -1 !== (window.location.pathname + window.location.search).indexOf("recharge")
      }
      function b(e) {
          if (e)
              return ["click_like", "click_comment", "click_follow", "share_button", "click_like_comment", "click_reply_comment", "click_dislike", "click_favorite"].includes(e) ? "engagement" : "default"
      }
      const y = (0,
      g._)((0,
      v.p)("loginAtom@tiktok/webapp-atoms", h), {
          rehydrationKey: "webapp.login"
      });
      let w;
      const {useAtomService: _, useServiceState: k, useServiceDispatchers: j, getStaticApi: O} = (0,
      m.i)(y, ( (e, t) => ({
          setCloseable(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  closeable: e
              })))
          },
          setUrl(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  url: e
              })))
          },
          setLoginPath(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  loginPath: e
              })))
          },
          setCloseCallback(e) {
              e && t(y, (t => Object.assign(Object.assign({}, t), {
                  closeCallback: e
              })))
          },
          setIsOpen(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  isOpen: e
              })))
          },
          setContent(e) {
              e && t(y, (t => Object.assign(Object.assign({}, t), {
                  content: e
              })))
          },
          setHandleDownload(e) {
              e && t(y, (t => Object.assign(Object.assign({}, t), {
                  handleDownload: e
              })))
          },
          setHandleLogin(e) {
              e && t(y, (t => Object.assign(Object.assign({}, t), {
                  handleLogin: e
              })))
          },
          setIframeStyle(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  iframeStyle: e
              })))
          },
          setModalType(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  modalType: e
              })))
          },
          setLoginModalShow(e) {
              var i, s;
              if (t(y, (t => Object.assign(Object.assign({}, t), {
                  loginModalShow: e
              }))),
              !e && window.byted_acrawler) {
                  const {vgeo: e} = (0,
                  a.c)();
                  null === (s = (i = window.byted_acrawler).setUserMode) || void 0 === s || s.call(i, (0,
                  u.n)({
                      isVA: "VGeo-US" === e,
                      isLogin: !1,
                      isFTC: !1,
                      isHighRisk: !1
                  }))
              }
          },
          setMaskCloseable(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  maskCloseable: e
              })))
          },
          setPageType(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  pageType: e
              })))
          },
          setUserId(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  userId: e
              })))
          },
          setGroupId(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  groupId: e
              })))
          },
          setLastGroupId(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  lastGroupId: e
              })))
          },
          setEnterMethod(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  enterMethod: e
              })))
          },
          setModalImage(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  modalImage: e
              })))
          },
          setPopupType(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  popupType: e
              })))
          },
          setIsRedirectToProfilePage(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  isRedirectToProfilePage: e
              })))
          },
          setIsGuestMode(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  isGuestMode: e
              })))
          },
          setIsGuestModeUI(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  isGuestModeUI: e
              })))
          },
          setPredictionPayload(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  predictionPayload: e
              })))
          },
          setIsLinkPhoneOrEmail(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  isLinkPhoneOrEmail: e
              })))
          },
          openModal(i) {
              var s, n;
              const {url: a, isRedirectToProfilePage: d=!1, loginPath: u, isSignup: v, closeable: g=!0, query: m={}, iframeStyle: h={}, content: w, handleDownload: _, handleLogin: k, closeCallback: j, maskCloseable: O=!1, userId: S, enterMethod: I, bizActionSource: L, pageType: P=999, popupType: x, groupId: C, lastGroupId: T, isGuestMode: A, isGuestModeUI: U, predictionPayload: E, isLinkPhoneOrEmail: F} = i
                , {language: M} = (0,
              c.x)()
                , {bizContext: V} = e(p.A)
                , R = null != u ? u : "/" + (v ? "signup" : "login")
                , D = null != a ? a : (0,
              o.stringifyUrl)({
                  url: R,
                  query: Object.assign({
                      lang: M,
                      is_modal: 1,
                      hide_close_btn: 1,
                      event_name: v ? "enter_sign_up" : null,
                      type: f() ? "recharge" : "",
                      enter_from: l.f.commonParams.page_name
                  }, m)
              }, {
                  skipNull: !0
              })
                , q = null != I ? I : m.enter_method
                , B = null != C ? C : m.group_id
                , N = null != T ? T : m.last_group_id
                , z = null !== (n = null !== (s = m.type) && void 0 !== s ? s : f() ? "recharge" : "") && void 0 !== n ? n : "";
              D.match(/\/login|\/signup|\/link-phone-or-email/) && !(null == V ? void 0 : V.isMobile) ? (0,
              r.unstable_batchedUpdates)(( () => {
                  t(y, (e => Object.assign(Object.assign({}, e), {
                      url: D,
                      isRedirectToProfilePage: d,
                      modalType: z,
                      closeable: g,
                      popupType: x,
                      enterMethod: q,
                      modalImage: b(q),
                      closeCallback: null != j ? j : e.closeCallback,
                      groupId: B,
                      lastGroupId: N,
                      isGuestMode: null != A && A,
                      isGuestModeUI: null != U && U,
                      predictionPayload: null != E ? E : "",
                      isLinkPhoneOrEmail: null != F && F,
                      bizActionSource: L
                  }))),
                  this.setLoginModalShow(!0)
              }
              )) : t(y, (e => Object.assign(Object.assign({}, e), {
                  url: D,
                  isRedirectToProfilePage: d,
                  closeable: g,
                  isOpen: !0,
                  content: null != w ? w : e.content,
                  handleDownload: null != _ ? _ : e.handleDownload,
                  handleLogin: null != k ? k : e.handleLogin,
                  iframeStyle: h,
                  maskCloseable: O,
                  closeCallback: null != j ? j : e.closeCallback,
                  userId: S,
                  enterMethod: q,
                  pageType: P,
                  popupType: x,
                  groupId: B,
                  lastGroupId: N,
                  isLinkPhoneOrEmail: null != F && F,
                  bizActionSource: L
              })))
          },
          setCheckPeriodicLogin(e) {
              t(y, (e => Object.assign(Object.assign({}, e), {
                  hasCheckedPeriodicLogin: !0
              }))),
              t(y, (t => Object.assign(Object.assign({}, t), {
                  showLoginOnLoad: t.showLoginOnLoad || e.showLoginOnLoad
              })))
          },
          setCheckPredictionLogin(e) {
              t(y, (e => Object.assign(Object.assign({}, e), {
                  hasCheckedPredictionLogin: !0
              }))),
              t(y, (t => Object.assign(Object.assign({}, t), {
                  showLoginOnLoad: t.showLoginOnLoad || e.showLoginOnLoad
              })))
          },
          setCheckGuestModeLogin(e) {
              t(y, (e => Object.assign(Object.assign({}, e), {
                  hasCheckedGuestMode: !0
              }))),
              t(y, (t => Object.assign(Object.assign({}, t), {
                  showLoginOnLoad: t.showLoginOnLoad || e.showLoginOnLoad
              })))
          },
          setIsLoginOnLoadClosed(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  isLoginOnLoadClosed: e.isLoginOnLoadClosed
              })))
          },
          setClearShowLoginOnLoad() {
              t(y, (e => Object.assign(Object.assign({}, e), {
                  hasCheckedPeriodicLogin: !1
              }))),
              t(y, (e => Object.assign(Object.assign({}, e), {
                  hasCheckedPredictionLogin: !1
              }))),
              t(y, (e => Object.assign(Object.assign({}, e), {
                  showLoginOnLoad: !1
              })))
          },
          closeModal(i) {
              const {enter_method: s, disableReport: o} = i;
              if (o)
                  return;
              w || (w = d.$F.getInstance()),
              w.loginNotifyClose({
                  enter_method: s
              });
              const {closeCallback: r=n()} = e(y);
              r(),
              t(y, (e => Object.assign(Object.assign({}, e), {
                  isOpen: !1,
                  url: "",
                  groupId: void 0
              })))
          },
          setIsBannerActive(e) {
              t(y, (t => Object.assign(Object.assign({}, t), {
                  isBannerActive: e
              })))
          }
      })))
  }
  ,
  461924: (e, t, i) => {
      "use strict";
      i.d(t, {
          xt: () => F,
          SE: () => U,
          TP: () => A
      });
      var s = i(919127)
        , n = i.n(s);
      const o = ["like", "favorite", "click_comment", "post_comment", "follow", "share", "download", "head", "finish", "cover", "repost"]
        , r = ["play", "pause", "wait", "unmount"];
      var a, c;
      (c = a || (a = {})).Interested = "i",
      c.NotInterested = "n",
      c.Neutral = "v";
      const l = "nb_classifier"
        , d = ["k_fyp", "k_foryou", "k_foryoupage", "k_parati", "k_fy", "k_fypage", "k_foryourpage", "k_fpy", "k_4u", "k_fouryou", "k_fypviral", "k_fouryoupage", "k_for", "k_foru", "k_fup", "k_typ", "k_4upage", "k_viral", "k_viralvideo", "k_viraltiktok", "k_goviral", "k_videoviral", "k_tiktokviral", "k_viralvideos", "k_viral_video", "k_popular", "k_trending", "k_trendingvideo", "k_new", "k_trendingtiktok", "k_tiktok", "k_tiktokviral", "k_vairal", "k_trend", "k_explore", "k_explorepage", "k_video"];
      var u = i(240715)
        , p = i(825403);
      const v = /[^\s#]+#|#[^\s#]+/g
        , g = (e, t=!1, i=!1) => {
          const s = ( (e, t=!1, i=!1) => {
              const s = (e => {
                  var t;
                  if (!e.textExtra)
                      return [...new Set(null === (t = e.desc.match(v)) || void 0 === t ? void 0 : t.map((e => e.replace("#", "").toLowerCase())))].filter(Boolean).map((e => `k_${e}`));
                  const {textExtra: i} = e;
                  return i.map((e => {
                      var t, i;
                      return null === (i = null === (t = e.hashtagName) || void 0 === t ? void 0 : t.toLowerCase()) || void 0 === i ? void 0 : i.trim()
                  }
                  )).filter(Boolean).map((e => `k_${e}`))
              }
              )(e)
                , n = (e => {
                  const t = e.music;
                  if (!t)
                      return;
                  const {id: i, private: s, original: n} = t;
                  return !i || s || n ? void 0 : `m_${i}`
              }
              )(e)
                , o = t ? (e => {
                  const {duration: t} = e.video;
                  return t > 0 && t <= 7 ? "d_0-7" : t > 7 && t <= 10 ? "d_7-10" : t > 10 && t <= 12 ? "d_10-12" : t > 12 && t <= 14 ? "d_12-14" : t > 14 && t <= 16 ? "d_14-16" : t > 16 && t <= 20 ? "d_16-20" : t > 20 && t <= 26 ? "d_20-26" : t > 26 && t <= 36 ? "d_26-36" : t > 36 && t <= 51 ? "d_36-51" : t > 51 && t <= 62 ? "d_51-62" : t > 62 && t <= 88 ? "d_62-88" : t > 88 && t <= 143 ? "d_88-143" : t > 143 ? "d_>143" : void 0
              }
              )(e) : (e => {
                  const {duration: t} = e.video;
                  return t > 0 && t <= 12 ? "d_0-12" : t > 12 && t <= 23 ? "d_12-23" : t > 23 && t <= 60 ? "d_23-60" : t > 60 ? "d_>60" : void 0
              }
              )(e)
                , r = (e => {
                  var t;
                  const {desc: i, textExtra: s} = e;
                  if (!i)
                      return;
                  if (!s)
                      return (0,
                      u.o0)(i);
                  const n = null === (t = [...s].sort(( (e, t) => e.start - t.start)).filter((e => e.hashtagId))[0]) || void 0 === t ? void 0 : t.start
                    , o = i.substring(0, n);
                  return o ? (0,
                  u.o0)(o) : (0,
                  u.o0)(i)
              }
              )(e)
                , a = [...s, `h_${(new Date).getHours()}`];
              return n && a.push(n),
              o && a.push(o),
              r && a.push(`l_${r}`),
              i && e.diversificationId && a.push(`c_${e.diversificationId}`),
              a
          }
          )(e, t, i)
            , n = e.authorId;
          return n && s.push(`a_${n}`),
          s
      }
      ;
      var m = i(168365)
        , h = i(529756)
        , f = i(720798)
        , b = i(596095)
        , y = i(939232)
        , w = i(966116)
        , _ = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      function k() {
          return _(this, void 0, void 0, (function*() {
              return yield(0,
              w.P2)("nb", 1, {
                  upgrade(e) {
                      e.createObjectStore(l, {
                          keyPath: "id"
                      })
                  }
              })
          }
          ))
      }
      function j(e) {
          return _(this, void 0, void 0, (function*() {
              const {id: t, classifier: i, db: s} = e;
              try {
                  yield s.put(l, {
                      id: t,
                      classifier: i
                  }),
                  p.F.handleStorageWrite({
                      is_success: 1
                  })
              } catch (e) {
                  throw p.F.handleStorageWrite({
                      is_success: 0,
                      fail_error_msg: `${e}`
                  }),
                  e
              }
          }
          ))
      }
      var O = i(950374)
        , S = i(312688);
      const I = (e, t) => !/^(m_|a_|k_)/.test(e) || /^(k_fyp|k_parati|k_fy)/.test(e) || d.includes(e) || 1 === e.length || -1 !== e.indexOf(t);
      var L = i(952602)
        , P = i(938397)
        , x = i(646863)
        , C = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const T = (0,
      m._)((0,
      f.p)("mlModelAtom@tiktok/webapp-atoms", {
          uid: "",
          item: void 0,
          classifier: void 0,
          play_time: 0,
          show_interested: -1,
          docBuffer: [],
          is_preview: !1,
          finish_play: !1,
          suggestedItemList: [],
          isSuggestedItemListReady: !("undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.indexedDB)),
          isMlModelReady: !1
      }), {
          rehydrationKey: "webapp.mlModel"
      })
        , {useAtomService: A, useServiceDispatchers: U, useServiceState: E, getStaticApi: F} = (0,
      h.i)(T, ( (e, t) => ({
          initMlModel() {
              var i, s, o, r, a;
              return C(this, void 0, void 0, (function*() {
                  if ("undefined" == typeof window || !(null === window || void 0 === window ? void 0 : window.indexedDB))
                      return void p.F.handleStorageLoad({
                          is_success: 0,
                          fail_error_msg: "no indexedDB"
                      });
                  const {user: c, odinId: d} = (0,
                  y.x)()
                    , u = null !== (s = null !== (i = null == c ? void 0 : c.uid) && void 0 !== i ? i : d) && void 0 !== s ? s : ""
                    , v = null !== (o = null == c ? void 0 : c.secUid) && void 0 !== o ? o : ""
                    , g = null !== (r = (0,
                  S.d)("enable_ml_model")) && void 0 !== r ? r : "v1"
                    , m = "v0" !== (null !== (a = (0,
                  S.d)("enable_ml_model_suggest_content")) && void 0 !== a ? a : "v0")
                    , h = e(b.WH);
                  if ("v1" === g || c && !c.hasIMPermission || (0,
                  b.PJ)(h))
                      p.F.handleStorageLoad({
                          is_success: 0,
                          fail_error_msg: "no allowed"
                      });
                  else
                      try {
                          const e = yield k()
                            , {classifier: i} = (yield function(e) {
                              var t;
                              return _(this, void 0, void 0, (function*() {
                                  const {uid: i, db: s, secUid: n} = e;
                                  try {
                                      const e = yield s.get(l, i);
                                      if (!e && n) {
                                          const {classifier: e} = null !== (t = yield s.get(l, n)) && void 0 !== t ? t : {};
                                          e && (yield j({
                                              db: s,
                                              id: i,
                                              classifier: e
                                          }),
                                          yield s.delete(l, n))
                                      }
                                      return p.F.handleStorageLoad({
                                          is_success: 1
                                      }),
                                      e
                                  } catch (e) {
                                      throw p.F.handleStorageLoad({
                                          is_success: 0,
                                          fail_error_msg: `${e}`
                                      }),
                                      e
                                  }
                              }
                              ))
                          }({
                              db: e,
                              uid: u,
                              secUid: v
                          })) || {}
                            , s = new (n());
                          i && s.restore(i),
                          t(T, (e => Object.assign(Object.assign({}, e), {
                              uid: u,
                              secUid: v,
                              classifier: s,
                              isSuggestedItemListReady: !m,
                              isMlModelReady: !0
                          })))
                      } catch (e) {
                          throw p.F.handleStorageLoad({
                              is_success: 0,
                              fail_error_msg: `${e}`
                          }),
                          e
                      }
              }
              ))
          },
          trainAndUpdateClassifier() {
              return C(this, void 0, void 0, (function*() {
                  const {docBuffer: i, classifier: s, uid: n} = e(T);
                  if (i.length < 3 && s || !s)
                      return;
                  const o = yield k();
                  try {
                      const e = (e => {
                          const {documents: t=[], classifier: i, maxDocsCount: s=4e3, evictDocsCount: n=1e3} = e;
                          if (0 === t.length)
                              return i;
                          const o = []
                            , r = [];
                          t.forEach(( ({id: e, action: t}) => {
                              o.push(t),
                              r.push(e)
                          }
                          ));
                          const a = {
                              video_interactions: o.join(","),
                              interaction_video_ids: r.join(",")
                          };
                          try {
                              p.F.handleTrainRequest(a),
                              t.forEach(( ({value: e, label: t}) => {
                                  i.addDocument(e, t)
                              }
                              ));
                              const {docs: e} = i;
                              let o = !1;
                              if (e.length > s) {
                                  const t = e.slice(e.length - s + n);
                                  for (const {label: e, value: s} of t)
                                      i.addDocument(s, e);
                                  o = !0
                              }
                              i.train(),
                              p.F.handleTrainReturn(Object.assign({
                                  is_success: 1,
                                  is_slicing: o ? 1 : 0,
                                  docs_count: i.docs.length
                              }, a))
                          } catch (e) {
                              p.F.handleTrainReturn(Object.assign({
                                  is_success: 0,
                                  fail_error_msg: e.message
                              }, a)),
                              console.error(`${e.message} - ${e.stack}`)
                          }
                          return i
                      }
                      )({
                          documents: i,
                          classifier: s
                      });
                      yield j({
                          db: o,
                          classifier: e,
                          id: n
                      }),
                      t(T, (t => Object.assign(Object.assign({}, t), {
                          classifier: e,
                          docBuffer: []
                      })))
                  } catch (e) {}
              }
              ))
          },
          addTrainData(i) {
              var s, n, c;
              return C(this, void 0, void 0, (function*() {
                  const l = e(T)
                    , {classifier: d} = l;
                  if (!d)
                      return;
                  const {item: u, action: p, isPreview: v} = i;
                  if (!u || u.video.id === (null === (s = l.item) || void 0 === s ? void 0 : s.video.id) && l.finish_play && "finish" === p)
                      return;
                  if ("play" === p) {
                      if (u.video.id === (null === (n = l.item) || void 0 === n ? void 0 : n.video.id))
                          return void t(T, (e => Object.assign(Object.assign({}, e), {
                              startPlayTimestamp: Date.now(),
                              is_preview: !!v
                          })));
                      const e = {
                          item: u,
                          finish_play: !1,
                          show_interested: -1,
                          play_time: 0,
                          is_preview: !!v,
                          startPlayTimestamp: Date.now()
                      };
                      if (l.item && !l.is_preview && -1 === l.show_interested) {
                          const t = l.item.video.duration <= 5 || l.item.video.duration > 5 && l.play_time < 5e3;
                          e.docBuffer = [...l.docBuffer, {
                              id: l.item.video.id,
                              action: t ? "skip" : "play",
                              value: g(l.item),
                              label: t ? a.NotInterested : a.Neutral
                          }]
                      }
                      return t(T, (t => Object.assign(Object.assign({}, t), e))),
                      void (yield this.trainAndUpdateClassifier())
                  }
                  if (r.includes(p)) {
                      const e = l.play_time + (l.startPlayTimestamp ? Date.now() - l.startPlayTimestamp : 0);
                      return void t(T, (t => Object.assign(Object.assign({}, t), {
                          play_time: e
                      })))
                  }
                  const m = {}
                    , h = g(u)
                    , f = o.includes(p) ? 1 : 0;
                  m.docBuffer = [...l.docBuffer, {
                      id: u.video.id,
                      action: p,
                      value: h,
                      label: f ? a.Interested : a.NotInterested
                  }],
                  u.video.id === (null === (c = l.item) || void 0 === c ? void 0 : c.video.id) && (m.show_interested = f),
                  "finish" === p && (m.finish_play = !0),
                  t(T, (e => Object.assign(Object.assign({}, e), m))),
                  yield this.trainAndUpdateClassifier()
              }
              ))
          },
          getSuggestedForyouList() {
              var i;
              return C(this, void 0, void 0, (function*() {
                  const {classifier: s, uid: n} = e(T)
                    , o = "1" === (0,
                  L._S)(P.Is);
                  if (!s || !o && !n)
                      return void t(T, (e => Object.assign(Object.assign({}, e), {
                          isSuggestedItemListReady: !0
                      })));
                  const r = ( (e, t) => {
                      var i;
                      let s = 0;
                      const n = []
                        , {docs: o} = e
                        , r = new Set
                        , a = 1e4
                        , {author: c=a} = null !== (i = (0,
                      S.d)("ml_model_suggest_content_threshold")) && void 0 !== i ? i : {};
                      for (let e = 0; e < o.length; e++)
                          for (const i of o[e].value)
                              r.has(i) || (r.add(i),
                              I(i, t) || (n[s] = [s, i]),
                              s++);
                      const l = e.classFeatures;
                      n.sort(( (e, t) => {
                          var i, s, n, o, r, a, c, d, u, p, v, g, m, h, f, b;
                          const y = null !== (s = null === (i = l.i) || void 0 === i ? void 0 : i[e[0]]) && void 0 !== s ? s : 0
                            , w = null !== (o = null === (n = l.i) || void 0 === n ? void 0 : n[t[0]]) && void 0 !== o ? o : 0;
                          if (y !== w)
                              return w - y;
                          const _ = (null !== (a = null === (r = l.i) || void 0 === r ? void 0 : r[e[0]]) && void 0 !== a ? a : 0) + (null !== (d = null === (c = l.v) || void 0 === c ? void 0 : c[e[0]]) && void 0 !== d ? d : 0) - (null !== (p = null === (u = l.n) || void 0 === u ? void 0 : u[e[0]]) && void 0 !== p ? p : 0)
                            , k = (null !== (g = null === (v = l.i) || void 0 === v ? void 0 : v[t[0]]) && void 0 !== g ? g : 0) + (null !== (h = null === (m = l.v) || void 0 === m ? void 0 : m[t[0]]) && void 0 !== h ? h : 0) - (null !== (b = null === (f = l.n) || void 0 === f ? void 0 : f[t[0]]) && void 0 !== b ? b : 0);
                          return _ !== k ? k - _ : t[0] - e[0]
                      }
                      )),
                      ( (e, t) => {
                          const i = {
                              i: {},
                              v: {},
                              n: {}
                          }
                            , s = {
                              i: {},
                              v: {},
                              n: {}
                          }
                            , n = {
                              i: {},
                              v: {},
                              n: {}
                          }
                            , o = {
                              a_: i,
                              k_: s,
                              m_: n
                          };
                          e.forEach(( ([e,i]) => {
                              var s, n, r, a, c, l, d, u, p;
                              const v = o[i.substring(0, 2)]
                                , g = (null !== (n = null === (s = t.i) || void 0 === s ? void 0 : s[e]) && void 0 !== n ? n : 1) - 1
                                , m = (null !== (a = null === (r = t.v) || void 0 === r ? void 0 : r[e]) && void 0 !== a ? a : 1) - 1
                                , h = (null !== (l = null === (c = t.n) || void 0 === c ? void 0 : c[e]) && void 0 !== l ? l : 1) - 1;
                              v.i[g] = (null !== (d = v.i[g]) && void 0 !== d ? d : 0) + 1,
                              v.v[m] = (null !== (u = v.v[m]) && void 0 !== u ? u : 0) + 1,
                              v.n[h] = (null !== (p = v.n[h]) && void 0 !== p ? p : 0) + 1
                          }
                          )),
                          O.f.sendEvent("frontend_rec_author_distribution", {
                              distribution: JSON.stringify(i)
                          }),
                          O.f.sendEvent("frontend_rec_tag_distribution", {
                              distribution: JSON.stringify(s)
                          }),
                          O.f.sendEvent("frontend_rec_music_distribution", {
                              distribution: JSON.stringify(n)
                          })
                      }
                      )(n, l);
                      const d = [];
                      let u = 0
                        , p = 0
                        , v = 0;
                      return n.forEach(( ([e,t]) => {
                          var i, s;
                          const n = (null !== (s = null === (i = l.i) || void 0 === i ? void 0 : i[e]) && void 0 !== s ? s : 1) - 1;
                          t.startsWith("a_") && (n >= c && u < 10 && (d.push(t),
                          u++),
                          n >= 1 && p++,
                          n >= 2 && v++)
                      }
                      )),
                      p >= 1 && O.f.sendEvent("frontend_rec_suggested_content_should_show", {
                          threshold: 1,
                          count: p
                      }),
                      v >= 1 && O.f.sendEvent("frontend_rec_suggested_content_should_show", {
                          threshold: 2,
                          count: v
                      }),
                      d
                  }
                  )(s, n);
                  if (0 === r.length)
                      return void t(T, (e => Object.assign(Object.assign({}, e), {
                          isSuggestedItemListReady: !0
                      })));
                  if ("v0" === (null !== (i = (0,
                  S.d)("enable_ml_model_suggest_content")) && void 0 !== i ? i : "v0"))
                      return;
                  const a = (yield Promise.all(r.map((e => C(this, void 0, void 0, (function*() {
                      var t, i;
                      const s = e.split("_").slice(-1)[0];
                      if (e.startsWith("a_")) {
                          const e = yield(0,
                          x.Gp)().getUserDetail({
                              userId: s
                          });
                          if (0 !== e.statusCode)
                              return;
                          return {
                              type: "author",
                              title: null !== (i = null === (t = e.userInfo) || void 0 === t ? void 0 : t.user.uniqueId) && void 0 !== i ? i : ""
                          }
                      }
                  }
                  )))))).filter((e => !!e));
                  O.f.sendEvent("frontend_rec_suggested_content", {
                      items: JSON.stringify(a),
                      count: a.length
                  }),
                  t(T, (e => Object.assign(Object.assign({}, e), {
                      suggestedItemList: a,
                      isSuggestedItemListReady: !0
                  })))
              }
              ))
          }
      })))
  }
  ,
  297523: (e, t, i) => {
      "use strict";
      i.d(t, {
          Fc: () => r,
          Lq: () => a,
          MW: () => o,
          W$: () => s,
          eh: () => n,
          oG: () => c
      });
      const s = "non_personalized_feeds_web"
        , n = "personalized_search_disabled_list"
        , o = "personalized_feed_disabled_list"
        , r = "personalized_feed_disabled_not_login"
        , a = "personalized_feed_ppf_disabled_list"
        , c = "webapp_popup_personalization_toast"
  }
  ,
  596095: (e, t, i) => {
      "use strict";
      i.d(t, {
          HY: () => m,
          JW: () => h,
          PJ: () => u,
          Qi: () => f,
          WH: () => g,
          nH: () => b
      });
      var s = i(168365)
        , n = i(529756)
        , o = i(720798)
        , r = i(939232)
        , a = i(499971)
        , c = i(713191)
        , l = i(831054)
        , d = i(888457);
      const u = e => {
          const {isFeedPersonalized: t} = e;
          return !t
      }
        , p = {
          isSearchPersonalized: !0,
          isFeedPersonalized: !0,
          isSearchConfigInitialized: !1,
          isFeedConfigInitialized: !1,
          isManageModalOpen: !1,
          isExplanationModalOpen: !1,
          isShowingToast: !1
      }
        , v = {
          isSearchPersonalized: !1,
          isFeedPersonalized: !1,
          isSearchConfigInitialized: !1,
          isFeedConfigInitialized: !1,
          isManageModalOpen: !1,
          isExplanationModalOpen: !1,
          isShowingToast: !1
      }
        , g = (0,
      s._)((0,
      o.p)("personalizationAtom@tiktok/webapp-atoms", ( () => {
          const e = function() {
              if ((0,
              d.fU)())
                  return "";
              const e = (0,
              c.YI)(l.Ow)
                , {user: {uid: t=""}={}} = e || {};
              return t
          }();
          return (0,
          a.mx)(void 0, e) ? v : p
      }
      )()), {
          rehydrationKey: "webapp.personalization"
      })
        , {useAtomService: m, useServiceState: h, useServiceDispatchers: f, getStaticApi: b} = (0,
      n.i)(g, ( (e, t) => ({
          setIsShowingToast(e) {
              t(g, (t => Object.assign(Object.assign({}, t), {
                  isShowingToast: e
              })))
          },
          setIsManageModalOpen(e) {
              t(g, (t => Object.assign(Object.assign({}, t), {
                  isManageModalOpen: e
              })))
          },
          setIsExplanationModalOpen(e) {
              t(g, (t => Object.assign(Object.assign({}, t), {
                  isExplanationModalOpen: e
              })))
          },
          setIsSearchPersonalized(e) {
              t(g, (t => Object.assign(Object.assign({}, t), {
                  isSearchPersonalized: e
              })))
          },
          setIsFeedPersonalized(e) {
              t(g, (t => Object.assign(Object.assign({}, t), {
                  isFeedPersonalized: e
              })))
          },
          setSearchConfigInitialized(e) {
              t(g, (t => Object.assign(Object.assign({}, t), {
                  isSearchConfigInitialized: e
              })))
          },
          setFeedConfigInitialized(e) {
              t(g, (t => Object.assign(Object.assign({}, t), {
                  isFeedConfigInitialized: e
              })))
          },
          init(i) {
              var s, n, o, c, l, d;
              return o = this,
              c = void 0,
              d = function*() {
                  const {isFeed: o} = i
                    , c = (0,
                  r.x)()
                    , {isSearchConfigInitialized: l, isFeedConfigInitialized: d} = e(g);
                  if (l && !o || d && o)
                      return;
                  const u = null !== (n = null === (s = c.user) || void 0 === s ? void 0 : s.uid) && void 0 !== n ? n : ""
                    , p = (0,
                  a.eI)(u, o);
                  t(g, o ? e => Object.assign(Object.assign({}, e), {
                      isFeedPersonalized: !p,
                      isFeedConfigInitialized: !0
                  }) : e => Object.assign(Object.assign({}, e), {
                      isSearchPersonalized: !p,
                      isSearchConfigInitialized: !0
                  }))
              }
              ,
              new ((l = void 0) || (l = Promise))((function(e, t) {
                  function i(e) {
                      try {
                          n(d.next(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function s(e) {
                      try {
                          n(d.throw(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function n(t) {
                      var n;
                      t.done ? e(t.value) : (n = t.value,
                      n instanceof l ? n : new l((function(e) {
                          e(n)
                      }
                      ))).then(i, s)
                  }
                  n((d = d.apply(o, c || [])).next())
              }
              ))
          }
      })))
  }
  ,
  499971: (e, t, i) => {
      "use strict";
      i.d(t, {
          Sw: () => r,
          eI: () => o,
          mx: () => a
      });
      var s = i(876434)
        , n = i(297523);
      const o = (e, t, i, o) => {
          if (!e)
              return !!t && "1" === (0,
              s.MJ)(n.Fc);
          const r = o ? n.Lq : t ? n.MW : n.eh
            , a = (0,
          s.MJ)(r);
          if (a)
              try {
                  const t = i ? decodeURIComponent(a) : a;
                  return JSON.parse(t).includes(e)
              } catch (e) {
                  return console.warn("getIsNonPersonalized get JSON failed"),
                  !1
              }
          return !1
      }
        , r = (e="") => o(e, void 0, void 0, !0)
        , a = (e, t="") => {
          var i;
          const s = "v2" === (null === (i = null == e ? void 0 : e.parameters[n.W$]) || void 0 === i ? void 0 : i.vid)
            , a = r(t);
          let c = !1;
          return (s || a) && (c = o(t, !0, !1)),
          c
      }
  }
  ,
  451218: (e, t, i) => {
      "use strict";
      i.d(t, {
          i: () => s
      });
      const s = {
          [-1]: -1,
          0: 0,
          1: 1,
          2: 2,
          4: 3
      }
  }
  ,
  646863: (e, t, i) => {
      "use strict";
      i.d(t, {
          Gp: () => F,
          JY: () => E,
          eI: () => M,
          nW: () => V,
          p9: () => U
      });
      var s = i(554086)
        , n = i(474668)
        , o = i(34111)
        , r = i(168365)
        , a = i(529756)
        , c = i(720798)
        , l = i(598073)
        , d = i(187749)
        , u = i(253535)
        , p = i(164596)
        , v = i(990064)
        , g = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const m = class extends Error {
          constructor(e, t) {
              super(e),
              this.name = "ApiError",
              this.code = t
          }
      }
        , h = e => {
          var t;
          return e instanceof m && null !== (t = e.code) && void 0 !== t ? t : -1
      }
      ;
      var f, b;
      !function(e) {
          e[e.NIL = -255] = "NIL",
          e[e.UnknownError = -1] = "UnknownError",
          e[e.Ok = 0] = "Ok",
          e[e.ReportLiveFailed = 90002] = "ReportLiveFailed",
          e[e.VerifyCode = 1e4] = "VerifyCode",
          e[e.VideoLikeFreq = 2150] = "VideoLikeFreq",
          e[e.VideoLikeFreq2 = 2210] = "VideoLikeFreq2",
          e[e.VideoUnavailableDeleted = 2054] = "VideoUnavailableDeleted",
          e[e.AdVideoUnavailableChange = 2752] = "AdVideoUnavailableChange",
          e[e.CommentBanCode = 22] = "CommentBanCode",
          e[e.CommentLikePermissionDisable = 3002043] = "CommentLikePermissionDisable",
          e[e.SearchSensitiveCode = 403] = "SearchSensitiveCode",
          e[e.SearchYoungCode = 203] = "SearchYoungCode",
          e[e.SmsInvalidNumber = -1] = "SmsInvalidNumber",
          e[e.SmsSlideVerify = -4] = "SmsSlideVerify",
          e[e.FypVideoListLimit = 10404] = "FypVideoListLimit",
          e[e.ClientPageError = 450] = "ClientPageError",
          e[e.LiveNeedLogin = 10119] = "LiveNeedLogin",
          e[e.SharkBlock = 10114] = "SharkBlock",
          e[e.SharkSlide = 10113] = "SharkSlide",
          e[e.NetError = 10111] = "NetError",
          e[e.ServerErrorNot500 = 10101] = "ServerErrorNot500",
          e[e.VideoRisk = 10228] = "VideoRisk",
          e[e.VideoRMask = 10229] = "VideoRMask",
          e[e.VideoRiskMask = 10230] = "VideoRiskMask",
          e[e.VideoNeedRecheck = 10227] = "VideoNeedRecheck",
          e[e.VideoUnshelveByMusic = 10220] = "VideoUnshelveByMusic",
          e[e.VideoNotExist = 10204] = "VideoNotExist",
          e[e.VideoAbnormal = 10215] = "VideoAbnormal",
          e[e.VideoLowAgeM = 10213] = "VideoLowAgeM",
          e[e.VideoLowAgeT = 10214] = "VideoLowAgeT",
          e[e.VideoFirstReviewUnshelve = 10217] = "VideoFirstReviewUnshelve",
          e[e.VideoPrivateByUser = 10216] = "VideoPrivateByUser",
          e[e.VideoGeofenceBlock = 10231] = "VideoGeofenceBlock",
          e[e.VideoPhoto = 10239] = "VideoPhoto",
          e[e.VideoFriendsOnly = 10240] = "VideoFriendsOnly",
          e[e.VideoDeleted = 10241] = "VideoDeleted",
          e[e.VideoUserBlockedByAuthor = 10242] = "VideoUserBlockedByAuthor",
          e[e.VideoSubscribersOnly = 203005] = "VideoSubscribersOnly",
          e[e.HashtagNotExist = 10205] = "HashtagNotExist",
          e[e.HashtagUnshelve = 10212] = "HashtagUnshelve",
          e[e.HashtagSensitivityWord = 10211] = "HashtagSensitivityWord",
          e[e.HashtagBlackList = 10209] = "HashtagBlackList",
          e[e.UserInboxFollowBan = 24] = "UserInboxFollowBan",
          e[e.UserNotExist = 10202] = "UserNotExist",
          e[e.UserBan = 10221] = "UserBan",
          e[e.UserPrivate = 10222] = "UserPrivate",
          e[e.UserNotLogin = 10102] = "UserNotLogin",
          e[e.UserFtc = 10223] = "UserFtc",
          e[e.UserUniqueSensitivity = 10225] = "UserUniqueSensitivity",
          e[e.QuestionNotAvailable = 10236] = "QuestionNotAvailable",
          e[e.MusicNotExist = 10203] = "MusicNotExist",
          e[e.MusicUnshelve = 10218] = "MusicUnshelve",
          e[e.MusicNoCopyright = 10219] = "MusicNoCopyright",
          e[e.MusicUnavailable = 202001] = "MusicUnavailable",
          e[e.PlaceNotExist = 205001] = "PlaceNotExist",
          e[e.PlaceOffline = 205002] = "PlaceOffline",
          e[e.PlaceUnavailableInRegion = 205003] = "PlaceUnavailableInRegion",
          e[e.GameNotExist = 10224] = "GameNotExist",
          e[e.LiveNotExist = 10210] = "LiveNotExist",
          e[e.GoLiveRoomBaned = 10018] = "GoLiveRoomBaned",
          e[e.GoLiveBaned = 4003035] = "GoLiveBaned",
          e[e.LiveRoomPrepare = 30019] = "LiveRoomPrepare",
          e[e.LiveRoomEnd = 30003] = "LiveRoomEnd",
          e[e.LiveRoomBan = 30012] = "LiveRoomBan",
          e[e.LiveNoGatedAuth = 4003043] = "LiveNoGatedAuth",
          e[e.LiveNoAgeGatedAuth = 4003110] = "LiveNoAgeGatedAuth",
          e[e.LivePaidEvent = 4003072] = "LivePaidEvent",
          e[e.LiveSubscriberOnly = 4003135] = "LiveSubscriberOnly",
          e[e.LiveSuicideCase = 2403] = "LiveSuicideCase",
          e[e.LiveSensitiveTitle = 50004] = "LiveSensitiveTitle",
          e[e.LiveRoomBaned = 10018] = "LiveRoomBaned",
          e[e.LiveEnterRoomNeedLogin = 20003] = "LiveEnterRoomNeedLogin",
          e[e.LiveAccountUnderRiskControl = 20063] = "LiveAccountUnderRiskControl",
          e[e.LiveHitBanStrategy = 30009] = "LiveHitBanStrategy",
          e[e.LiveOBSAccessRecalled = 4003105] = "LiveOBSAccessRecalled",
          e[e.LiveUserNotFound = 19881007] = "LiveUserNotFound",
          e[e.EffectNotExist = 10208] = "EffectNotExist",
          e[e.PlaylistNotExist = 10233] = "PlaylistNotExist",
          e[e.PlaylistInTrill = 10234] = "PlaylistInTrill",
          e[e.VideoPlaylistUnavailable = 10243] = "VideoPlaylistUnavailable",
          e[e.VideoPlaylistIsEmpty = 10244] = "VideoPlaylistIsEmpty",
          e[e.PrivateAccountLimitByBC = 3026002] = "PrivateAccountLimitByBC",
          e[e.PnsPnsPrivateAccountLimitByLiveOn = 3026006] = "PnsPnsPrivateAccountLimitByLiveOn",
          e[e.BlockedAndLogout = 56009] = "BlockedAndLogout",
          e[e.CreatePlaylistWithRiskError = 206001] = "CreatePlaylistWithRiskError",
          e[e.VideoPlaylistVisibleToCreator = 206002] = "VideoPlaylistVisibleToCreator",
          e[e.AddPlaylistVideoWithRiskError = 206003] = "AddPlaylistVideoWithRiskError",
          e[e.VideoPlaylistUnavailableToVisitor = 206004] = "VideoPlaylistUnavailableToVisitor",
          e[e.VideoPlaylistDeleted = 206005] = "VideoPlaylistDeleted"
      }(f || (f = {})),
      function(e) {
          e[e.Hot = 0] = "Hot",
          e[e.Relation = 1] = "Relation",
          e[e.Fresh = 2] = "Fresh",
          e[e.Post = 3] = "Post",
          e[e.Favorite = 4] = "Favorite",
          e[e.Challenge = 5] = "Challenge",
          e[e.Music = 6] = "Music",
          e[e.Category = 7] = "Category",
          e[e.MusicFresh = 8] = "MusicFresh",
          e[e.ChallengeFresh = 9] = "ChallengeFresh",
          e[e.Follow = 10] = "Follow",
          e[e.Trending = 18] = "Trending",
          e[e.TitleRecommend = 20] = "TitleRecommend",
          e[e.Nearby = 21] = "Nearby",
          e[e.Search = 23] = "Search",
          e[e.HotVideo = 24] = "HotVideo",
          e[e.HotMusic = 25] = "HotMusic",
          e[e.FollowerList = 26] = "FollowerList",
          e[e.Inbox = 33] = "Inbox",
          e[e.Live = 27] = "Live"
      }(b || (b = {}));
      var y, w = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      !function(e) {
          e[e.Like = 1] = "Like",
          e[e.Unlike = 2] = "Unlike"
      }(y || (y = {}));
      const _ = e => t => w(void 0, void 0, void 0, (function*() {
          const {itemId: i, like: s, cid: n, parentCid: o} = t;
          if (e && !o)
              throw new m("Reply comments need a parentCid to be provided");
          try {
              return {
                  statusCode: (yield function(e) {
                      return g(this, void 0, void 0, (function*() {
                          return p.h.post("/api/comment/digg/", {
                              query: Object.assign(Object.assign({}, e), {
                                  channel_id: 0
                              }),
                              headers: {
                                  [v.nk]: p.h.csrfToken
                              },
                              baseUrlType: 2
                          })
                      }
                      ))
                  }({
                      aweme_id: i,
                      cid: n,
                      digg_type: s ? 1 : 2
                  })).status_code
              }
          } catch (e) {
              return {
                  statusCode: h(e)
              }
          }
      }
      ));
      var k;
      function j({relation: e, handleIsUnfollow: t, handleIsFollow: i}) {
          switch (e) {
          case 0:
          case -1:
          case 4:
          case 5:
          case 6:
              return t();
          default:
              return i()
          }
      }
      function O({current: e, targetUser: t}) {
          const i = function(e) {
              var t;
              return j({
                  relation: null !== (t = e.relation) && void 0 !== t ? t : -1,
                  handleIsUnfollow: () => {
                      var t;
                      return e.privateAccount ? 1 : (null === (t = e.extraInfo) || void 0 === t ? void 0 : t.followed) || 6 === e.relation ? 2 : 0
                  }
                  ,
                  handleIsFollow: () => 3
              })
          }(t);
          switch (i) {
          case 3:
              return 0;
          case 0:
              return j({
                  relation: e,
                  handleIsFollow: () => e,
                  handleIsUnfollow: () => 1
              });
          case 1:
              return j({
                  relation: e,
                  handleIsFollow: () => e,
                  handleIsUnfollow: () => 3
              });
          case 2:
              return j({
                  relation: e,
                  handleIsFollow: () => e,
                  handleIsUnfollow: () => 2
              });
          default:
              return j({
                  relation: e,
                  handleIsFollow: () => e,
                  handleIsUnfollow: () => -1
              })
          }
      }
      _(!1),
      _(!0),
      function(e) {
          e[e.FollowNormal = 0] = "FollowNormal",
          e[e.FollowPrivate = 1] = "FollowPrivate",
          e[e.FollowFollower = 2] = "FollowFollower",
          e[e.Unfollow = 3] = "Unfollow"
      }(k || (k = {}));
      i(358677);
      var S = i(451218)
        , I = i(2756)
        , L = i(388482)
        , P = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const x = (0,
      L.M)({
          csr: function(e) {
              return P(this, void 0, void 0, (function*() {
                  return (0,
                  I.Ni)("userDetail") || p.h.get("/api/user/detail/", {
                      query: e,
                      baseUrlType: 2
                  })
              }
              ))
          }
      });
      var C = i(960204)
        , T = i(828103)
        , A = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const U = (0,
      r._)((0,
      c.p)("userAtom@tiktok/webapp-atoms", {
          users: {},
          stats: {}
      }), {
          rehydrationKey: "webapp.user"
      })
        , {useAtomService: E, getStaticApi: F, useServiceDispatchers: M, useServiceState: V} = (0,
      a.i)(U, ( (e, t) => ({
          multiSetUser(i) {
              const s = e(U)
                , n = {};
              i.forEach((e => {
                  n[e.uniqueId] = (0,
                  C.HF)(s.users[e.uniqueId], e)
              }
              )),
              t(U, Object.assign(Object.assign({}, s), {
                  users: Object.assign(Object.assign({}, s.users), n)
              }))
          },
          setUser(e, i=!0) {
              t(U, (t => Object.assign(Object.assign({}, t), {
                  users: Object.assign(Object.assign({}, t.users), {
                      [e.uniqueId]: (0,
                      C.HF)(t.users[e.uniqueId], e, i)
                  })
              })))
          },
          setUserRelation({uniqueId: i, relation: s, shouldUpdateFollowed: o, shouldUpdateFollower: r}) {
              var a;
              const c = e(U)
                , l = c.users[i];
              if (!l)
                  return;
              const d = Object.assign(Object.assign({}, l), {
                  relation: s
              });
              o && (d.extraInfo = Object.assign(Object.assign({}, d.extraInfo), {
                  followed: (0,
                  n.z)(s, null === (a = d.extraInfo) || void 0 === a ? void 0 : a.followed)
              })),
              r && (d.extraInfo = Object.assign(Object.assign({}, d.extraInfo), {
                  followerStatus: (0,
                  n.L)(s)
              })),
              t(U, Object.assign(Object.assign({}, c), {
                  users: Object.assign(Object.assign({}, c.users), {
                      [i]: d
                  })
              }))
          },
          setUserStats(e) {
              const {uniqueId: i, stats: s} = e;
              t(U, (e => Object.assign(Object.assign({}, e), {
                  stats: Object.assign(Object.assign({}, e.stats), {
                      [i]: s
                  })
              })))
          },
          multiSetUserStats(i) {
              const s = e(U)
                , n = i.reduce(( (e, t) => (e[t.uniqueId] = t.stats,
              e)), Object.assign({}, s.stats));
              t(U, Object.assign(Object.assign({}, s), {
                  stats: n
              }))
          },
          getUserDetail(e) {
              return A(this, void 0, void 0, (function*() {
                  try {
                      const t = yield x(e);
                      return 0 !== t.statusCode && 10222 !== t.statusCode || !t.userInfo ? console.warn("Get user detail failed for getting wrong response") : (this.setUser(Object.assign(Object.assign({
                          uniqueIdModifyTime: 0
                      }, t.userInfo.user), {
                          extraInfo: {
                              statusCode: t.statusCode
                          }
                      })),
                      this.setUserStats({
                          stats: Object.assign(Object.assign({}, t.userInfo.stats), {
                              needFix: !1
                          }),
                          uniqueId: t.userInfo.user.uniqueId
                      })),
                      t
                  } catch (e) {
                      return {
                          statusCode: -1
                      }
                  }
              }
              ))
          },
          postCommitFollowUser(t) {
              return A(this, void 0, void 0, (function*() {
                  try {
                      const i = e(U).users[t.uniqueId];
                      if (!i)
                          return;
                      const n = (0,
                      T.T)()
                        , {id: r, secUid: a="", relation: c=-1} = i
                        , g = (0,
                      C.gN)(c)
                        , h = {
                          type: 1 === g ? 1 : 0,
                          action_type: 1 === g ? 1 : 0,
                          user_id: r,
                          sec_user_id: a,
                          from: 18,
                          channel_id: 0,
                          from_pre: 0
                      }
                        , {uniqueId: f, useFollowV2: b, resetWebappQuery: y, group_id: w, enter_method: _="click_direct_btn", action_position: k} = t
                        , j = function(e, t) {
                          var i = {};
                          for (var s in e)
                              Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
                          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                              var n = 0;
                              for (s = Object.getOwnPropertySymbols(e); n < s.length; n++)
                                  t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (i[s[n]] = e[s[n]])
                          }
                          return i
                      }(t, ["uniqueId", "useFollowV2", "resetWebappQuery", "group_id", "enter_method", "action_position"]);
                      this.setUserRelation({
                          uniqueId: f,
                          relation: (0,
                          C.A7)({
                              current: c,
                              targetUser: i
                          })
                      });
                      const I = b ? yield function(e) {
                          return P(this, void 0, void 0, (function*() {
                              return p.h.post("/api/follow/", {
                                  signal: (new AbortController).signal,
                                  query: Object.assign(Object.assign({}, e), {
                                      fromWeb: 1
                                  }),
                                  baseUrlType: 2,
                                  headers: {
                                      [v.nk]: p.h.csrfToken
                                  }
                              })
                          }
                          ))
                      }(h) : yield function(e) {
                          return P(this, void 0, void 0, (function*() {
                              return p.h.post("/api/commit/follow/user/", {
                                  query: Object.assign(Object.assign({}, e), {
                                      fromWeb: 1
                                  }),
                                  baseUrlType: 2,
                                  headers: {
                                      [v.nk]: p.h.csrfToken
                                  }
                              })
                          }
                          ))
                      }(h)
                        , {status_code: L, follow_status: x} = I;
                      if (24 === L ? s.F.open({
                          content: n("inbox_follow_failed_banned"),
                          duration: 3,
                          widthType: "half"
                      }) : -1 === L ? s.F.open({
                          content: n("inbox_follow_failed_noconnection"),
                          duration: 3,
                          widthType: "half"
                      }) : 0 !== L ? s.F.open({
                          content: n("inbox_follow_failed_other"),
                          duration: 3,
                          widthType: "half"
                      }) : (0,
                      o.G)(L, [24, -1, 0]),
                      l.t.handleFollowUser(Object.assign(Object.assign({}, j), {
                          status_code: L,
                          follow_status: x,
                          group_id: w,
                          enter_method: _,
                          action_position: k,
                          to_user_id: r,
                          author_id: r,
                          follow_type: 2 === x ? "mutual" : "single",
                          is_private: 4 === x ? 1 : 0
                      }), h.type),
                      j.is_ad_event && j.tag && j.value && j.log_extra && 0 === h.type) {
                          const {tag: e, value: t, log_extra: i} = j;
                          d.pg.handleFollowCancel({
                              log_extra: i,
                              tag: e,
                              value: t,
                              is_ad_event: "1"
                          })
                      }
                      if (0 === L) {
                          if (this.setUserRelation({
                              uniqueId: f,
                              relation: S.i[x],
                              shouldUpdateFollowed: !0
                          }),
                          y) {
                              const e = ["user", f];
                              (0,
                              u.performManualOptimisticUpdate)(e, (e => {
                                  var t;
                                  const {uniqueId: i} = e
                                    , s = ["user", i]
                                    , n = (0,
                                  u.getDataForQueryByKey)(s);
                                  if (!n)
                                      throw new m("target user does not exist",10202);
                                  var o, r;
                                  return Object.assign(Object.assign({}, n), {
                                      user: Object.assign(Object.assign({}, n.user), {
                                          relation: O({
                                              current: n.user.relation,
                                              targetUser: n.user
                                          }),
                                          extraInfo: Object.assign(Object.assign({}, n.user.extraInfo), {
                                              followed: (o = n.user.relation,
                                              r = null === (t = n.user.extraInfo) || void 0 === t ? void 0 : t.followed,
                                              2 === o || 6 === o || 5 !== o && r)
                                          })
                                      })
                                  })
                              }
                              )({
                                  uniqueId: f
                              }))
                          }
                      } else
                          this.setUserRelation({
                              uniqueId: f,
                              relation: c
                          })
                  } catch (e) {}
              }
              ))
          },
          blockOrUnblockUser(e) {
              return A(this, void 0, void 0, (function*() {
                  try {
                      const t = (0,
                      T.T)()
                        , {secUid: i, isBlock: n, uniqueId: o, resetWebappQuery: r} = e
                        , {status_code: a} = yield function(e) {
                          return P(this, void 0, void 0, (function*() {
                              return p.h.post("/api/user/block/", {
                                  query: Object.assign(Object.assign({}, e), {
                                      source: 3
                                  }),
                                  baseUrlType: 2,
                                  headers: {
                                      [v.nk]: p.h.csrfToken
                                  }
                              })
                          }
                          ))
                      }({
                          sec_user_id: null != i ? i : "",
                          block_type: n ? 0 : 1
                      });
                      if (0 === a && (s.F.open({
                          content: t(n ? "webapp_mig_unblocked" : "webapp_mig_blocked"),
                          duration: 3,
                          e2eTag: "block-toast"
                      }),
                      this.setUserRelation({
                          uniqueId: o,
                          relation: n ? 0 : 4
                      }),
                      r)) {
                          const e = ["user", o];
                          (0,
                          u.performManualOptimisticUpdate)(e, (e => {
                              const {uniqueId: t, isBlock: i} = e
                                , s = ["user", t]
                                , n = (0,
                              u.getDataForQueryByKey)(s);
                              if (!n)
                                  throw new m("target user does not exist",10202);
                              return Object.assign(Object.assign({}, n), {
                                  user: Object.assign(Object.assign({}, n.user), {
                                      relation: i ? 0 : 4
                                  })
                              })
                          }
                          )({
                              uniqueId: o,
                              secUid: i,
                              isBlock: n
                          }))
                      }
                  } catch (e) {}
              }
              ))
          },
          handleWebappQueryOptimisticUpdate(e) {
              return A(this, void 0, void 0, (function*() {
                  try {
                      const {uniqueId: t, isBlock: i, targetUser: s, relation: n} = e;
                      void 0 !== i ? this.setUserRelation({
                          uniqueId: t,
                          relation: i ? 0 : 4
                      }) : s && void 0 !== n && this.setUserRelation({
                          uniqueId: t,
                          relation: (0,
                          C.A7)({
                              current: n,
                              targetUser: s
                          }),
                          shouldUpdateFollowed: !0
                      })
                  } catch (e) {}
              }
              ))
          }
      })))
  }
  ,
  960204: (e, t, i) => {
      "use strict";
      i.d(t, {
          A7: () => b,
          HF: () => h,
          gN: () => y
      });
      var s, n = i(474668), o = i(768387), r = i.n(o), a = i(301785), c = i.n(a), l = i(873046), d = i.n(l);
      !function(e) {
          e[e.FollowNormal = 0] = "FollowNormal",
          e[e.FollowPrivate = 1] = "FollowPrivate",
          e[e.FollowFollower = 2] = "FollowFollower",
          e[e.Unfollow = 3] = "Unfollow"
      }(s || (s = {}));
      const u = ["roomId"]
        , p = ["uniqueId", "avatarThumb", "avatarMedium", "avatarLarger", "nickname", "signature"]
        , v = "uniqueIdModifyTime"
        , g = "nickNameModifyTime"
        , m = "ttSeller";
      function h(e, t, i) {
          var s, o;
          if (!e)
              return t;
          const a = null !== (s = t.relation) && void 0 !== s ? s : e.relation
            , l = d()({}, e, t, {
              extraInfo: {
                  followed: (0,
                  n.z)(a, null === (o = e.extraInfo) || void 0 === o ? void 0 : o.followed)
              }
          }, ( (e, t, s) => "canExpPlaylist" === s ? e || t : !u.includes(s) && c()(t) ? e : (i || !p.includes(s) || r()(e) && !r()(t)) && (s !== v && s !== m && s !== g || t) ? void 0 : e));
          return i && void 0 === t.roomId && l.roomId && (l.roomId = void 0),
          l
      }
      function f({relation: e, handleIsUnfollow: t, handleIsFollow: i}) {
          switch (e) {
          case 0:
          case -1:
          case 4:
          case 5:
          case 6:
              return t();
          default:
              return i()
          }
      }
      function b({current: e, targetUser: t}) {
          const i = function(e) {
              var t;
              return f({
                  relation: null !== (t = e.relation) && void 0 !== t ? t : -1,
                  handleIsUnfollow: () => {
                      var t;
                      return e.privateAccount ? 1 : (null === (t = e.extraInfo) || void 0 === t ? void 0 : t.followed) || 6 === e.relation ? 2 : 0
                  }
                  ,
                  handleIsFollow: () => 3
              })
          }(t);
          switch (i) {
          case 3:
              return 0;
          case 0:
              return f({
                  relation: e,
                  handleIsFollow: () => e,
                  handleIsUnfollow: () => 1
              });
          case 1:
              return f({
                  relation: e,
                  handleIsFollow: () => e,
                  handleIsUnfollow: () => 3
              });
          case 2:
              return f({
                  relation: e,
                  handleIsFollow: () => e,
                  handleIsUnfollow: () => 2
              });
          default:
              return f({
                  relation: e,
                  handleIsFollow: () => e,
                  handleIsUnfollow: () => -1
              })
          }
      }
      function y(e) {
          return f({
              relation: e,
              handleIsUnfollow: () => 1,
              handleIsFollow: () => 0
          })
      }
  }
  ,
  828103: (e, t, i) => {
      "use strict";
      i.d(t, {
          T: () => n
      });
      var s = i(669227);
      const n = (0,
      i(388482).M)({
          csr: () => s.Ay.t
      })
  }
  ,
  416580: (e, t, i) => {
      "use strict";
      i.d(t, {
          Q3: () => v,
          jD: () => l
      });
      var s = i(168365)
        , n = i(529756)
        , o = i(720798)
        , r = function(e, t) {
          var i = {};
          for (var s in e)
              Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
              var n = 0;
              for (s = Object.getOwnPropertySymbols(e); n < s.length; n++)
                  t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (i[s[n]] = e[s[n]])
          }
          return i
      };
      const a = {
          contentType: "video",
          duration: 0,
          videoPercent: 0,
          currentTime: 0
      }
        , c = {
          contentType: "photo",
          index: -1,
          length: 0
      }
        , l = (0,
      s._)((0,
      o.p)("playProgressAtom@tiktok/webapp-atoms", {}), {
          rehydrationKey: "webapp.videoControl.playProgress"
      })
        , {useAtomService: d, useServiceState: u, useServiceDispatchers: p, getStaticApi: v} = (0,
      n.i)(l, ( (e, t) => ({
          setVideoInfo(e) {
              var {itemId: i} = e
                , s = r(e, ["itemId"]);
              t(l, (e => ({
                  [i]: Object.assign(Object.assign(Object.assign({}, a), e[i]), s)
              })))
          },
          setPhotoInfo(e) {
              var {itemId: i} = e
                , s = r(e, ["itemId"]);
              t(l, (e => ({
                  [i]: Object.assign(Object.assign(Object.assign({}, c), e[i]), s)
              })))
          }
      })))
  }
  ,
  406862: (e, t, i) => {
      "use strict";
      i.d(t, {
          $H: () => c,
          Bu: () => a,
          HF: () => d,
          Kq: () => r,
          hA: () => s,
          n9: () => l,
          vu: () => o,
          xE: () => n
      });
      const s = {
          statusCode: 0,
          hasMore: !0,
          cursor: "0",
          loading: !0,
          preloadList: [],
          browserList: [],
          list: [],
          items: []
      }
        , n = 1988
        , o = 30
        , r = 15
        , a = "w_g_fyp_vv"
        , c = "w_g_vv"
        , l = "tiktok_webapp_theme_source"
        , d = "tiktok_webapp_theme_manual"
  }
  ,
  905183: (e, t, i) => {
      "use strict";
      i.d(t, {
          Qw: () => b,
          bp: () => _,
          e_: () => j,
          Tj: () => O,
          Fx: () => S,
          UJ: () => I,
          kf: () => k,
          Jl: () => y
      });
      var s = i(939232)
        , n = i(145845)
        , o = i.n(n)
        , r = i(791528)
        , a = i.n(r)
        , c = i(495199)
        , l = i(646863)
        , d = i(947568)
        , u = i(975540)
        , p = i(388482)
        , v = i(445372)
        , g = i.n(v)
        , m = i(410212);
      const h = (0,
      p.M)({
          csr: g()
      });
      var f = i(329790);
      const b = e => `live_${e}`
        , y = e => 2 === (null == e ? void 0 : e.containerType)
        , w = e => (null != e ? e : []).filter((e => 2 !== e.containerType)).map((e => {
          var t, i, s, n;
          return {
              url: null !== (i = null === (t = e.video) || void 0 === t ? void 0 : t.playAddr) && void 0 !== i ? i : "",
              id: null !== (n = null === (s = e.video) || void 0 === s ? void 0 : s.id) && void 0 !== n ? n : ""
          }
      }
      ))
        , _ = ({list: e}) => e.reduce(( (e, {id: t, showNotPass: i, takeDown: s}) => (!i && 6 !== s && t && e.push(t),
      e)), [])
        , k = (e, t, i) => {
          const {itemListKey: s, addToHead: n} = i
            , {list: r, browserList: c} = e
            , l = a()(t, "id").filter((e => !r.includes(e.id)))
            , d = "topic" === s || "messages" === s;
          if ("foryou" === s) {
              const e = t.length
                , i = e - l.length;
              i && (0,
              f.Jk)(i, r.length, e)
          }
          if (n)
              return {
                  list: l.map(( ({id: e}) => e)).concat(r),
                  browserList: [..._({
                      list: l
                  }), ...c]
              };
          {
              const e = o()(r, l.map(( ({id: e}) => e)));
              return {
                  list: d ? r.concat(t.map(( ({id: e}) => e))) : e,
                  browserList: d ? c.concat(_({
                      list: t
                  })) : o()(c, _({
                      list: t
                  }))
              }
          }
      }
        , j = (e, t) => {
          e(t, (e => Object.assign(Object.assign({}, e), {
              loading: !1,
              statusCode: -1
          })))
      }
        , O = (e, t, i, n, o, r) => {
          var a, p, v, g;
          const f = e(i)
            , {list: _, hasLocateItem: j} = f
            , {photoSensitiveVideosSetting: O} = e(c.x)
            , {statusCode: S, hasMore: I=!0, itemList: L=[], cursor: P, log_pb: x, has_locate_item_id: C} = o
            , T = ( (e, t) => {
              let i = (null != e ? e : []).slice();
              const {user: n} = (0,
              s.x)()
                , {itemListKey: o, photoSensitiveVideosSetting: r, secUid: a} = t;
              return 1 !== (null == n ? void 0 : n.photoSensitiveVideosSetting) && (n || 1 !== r) || "user-post" === o && (null == n ? void 0 : n.secUid) === a || !("video" !== o || i.length > 1) || (i = i.filter((e => 2 === e.containerType || 4 !== e.maskType))),
              i = i.map((e => {
                  var t;
                  return y(e) && (e.id = b(null === (t = e.liveRoomInfo) || void 0 === t ? void 0 : t.roomID)),
                  e
              }
              )),
              i
          }
          )(L, {
              itemListKey: n,
              photoSensitiveVideosSetting: O,
              secUid: null == r ? void 0 : r.secUid
          })
            , {list: A, browserList: U} = k(f, T, {
              itemListKey: n,
              addToHead: null == r ? void 0 : r.addToHead
          });
          ( ({currentList: e, itemList: t, statusCode: i, disableReportMore: s=!1, isPlayList: n=!1}) => {
              e.length && !s && m.L.handleListMore({
                  is_success: t.length ? 1 : 0,
                  error_code: i,
                  popup_type: n ? "playlist" : void 0
              })
          }
          )({
              currentList: _,
              itemList: T,
              statusCode: S,
              disableReportMore: null !== (a = null == r ? void 0 : r.disableReportMore) && void 0 !== a && a,
              isPlayList: null !== (p = null == r ? void 0 : r.isPlayList) && void 0 !== p && p
          }),
          h(null === (v = T[0]) || void 0 === v ? void 0 : v.video, n);
          const E = (e => {
              const t = e.filter((e => Boolean(e.author))).map(( ({author: e}) => e))
                , i = e.filter((e => {
                  var t;
                  return Boolean(null === (t = e.liveRoomInfo) || void 0 === t ? void 0 : t.ownerInfo)
              }
              )).map((e => Object.assign(Object.assign({}, e.liveRoomInfo.ownerInfo), {
                  roomId: e.liveRoomInfo.roomID
              })));
              return t.concat(i)
          }
          )(T)
            , F = ( (e, t) => e.map((e => Object.assign(Object.assign({}, e), {
              logId: t
          }))))(T, null == x ? void 0 : x.impr_id)
            , M = {
              statusCode: S,
              hasMore: I,
              cursor: P,
              list: A,
              loading: !1,
              browserList: U,
              preloadList: [...null !== (g = f.preloadList) && void 0 !== g ? g : [], ...w(T)],
              items: F,
              hasLocateItem: !!j || C
          };
          (0,
          d.unstable_batchedUpdates)(( () => {
              (0,
              l.Gp)().multiSetUser(E),
              (0,
              u.ud)().multiSetItem(F),
              t(i, M)
          }
          ))
      }
        , S = (e, t, i) => {
          e(t, (e => Object.assign(Object.assign({}, e), {
              list: e.list.filter((e => e !== i)),
              browserList: e.browserList.filter((e => e !== i))
          })))
      }
        , I = (e, t, i) => {
          const s = new Set(i);
          e(t, (e => Object.assign(Object.assign({}, e), {
              list: e.list.filter((e => !s.has(e))),
              browserList: e.browserList.filter((e => !s.has(e)))
          })))
      }
  }
  ,
  184394: (e, t, i) => {
      "use strict";
      var s, n;
      i.d(t, {
          FB: () => o
      }),
      function(e) {
          e.ForYou = "foryou",
          e.Challenge = "challenge",
          e.ChallengeNew = "challenge_new",
          e.Channel = "channel",
          e.Find = "find",
          e.Following = "following",
          e.Video = "video",
          e.Music = "music",
          e.MusicNew = "music_new",
          e.User = "user",
          e.UserPost = "user-post",
          e.UserPostPublic = "user-post-public",
          e.UserRepost = "user-repost",
          e.UserLiked = "user-liked",
          e.SearchTop = "search_top",
          e.SearchVideo = "search_video",
          e.SearchLive = "search_live",
          e.Question = "question",
          e.Playlist = "playlist",
          e.Topic = "topic",
          e.LiveEvent = "live_event",
          e.VideoPlaylist = "video_playlist",
          e.CreateVideoPlaylist = "create_video_playlist",
          e.Sticker = "sticker",
          e.Effect = "effect",
          e.Messages = "messages",
          e.Discover = "discover",
          e.Poi = "poi",
          e.PoiCategory = "poi_category",
          e.Collection = "collection",
          e.Explore = "explore",
          e.Favorites = "favorites",
          e.KeywordExpansion = "keyword-expansion",
          e.CreatorTab = "creator_tab",
          e.Friends = "friends",
          e.TrendingTopics = "trending_topics"
      }(s || (s = {})),
      function(e) {
          e.HIGH = "high",
          e.MEDIUM = "medium",
          e.LOW = "low"
      }(n || (n = {}));
      const o = {
          foryou: 5,
          following: 11,
          friends: 20,
          topic: 113,
          video: 0,
          effect: 129,
          user: 1,
          "user-post": 1,
          "user-post-public": 1,
          "user-repost": 1,
          "user-liked": 1,
          explore: 19,
          challenge: 3,
          channel: 122,
          collection: 121,
          discover: 103,
          find: 124,
          live_event: 114,
          messages: 13,
          music: 4,
          playlist: 108,
          poi: 18,
          poi_category: 125,
          question: 16,
          sticker: 6
      }
  }
  ,
  567085: (e, t, i) => {
      "use strict";
      i.d(t, {
          Cg: () => u,
          D3: () => a
      });
      var s = i(720798)
        , n = i(168365)
        , o = i(529756)
        , r = i(406862);
      const a = (0,
      n._)((0,
      s.p)("messageListAtom@tiktok/webapp-atoms", r.hA), {
          rehydrationKey: "desktop.messagePage.messageList"
      })
        , {useAtomService: c, useServiceDispatchers: l, useServiceState: d, getStaticApi: u} = (0,
      o.i)(a, ( (e, t) => ({
          setItemListById(e) {
              const {list: i, statusCode: s=0, hasMore: n=!0, cursor: o, level: r} = e;
              t(a, (e => Object.assign(Object.assign({}, e), {
                  list: i,
                  browserList: i,
                  statusCode: s,
                  hasMore: n,
                  cursor: o,
                  level: r
              })))
          },
          getBrowserList: () => e(a).browserList
      })))
  }
  ,
  709573: (e, t, i) => {
      "use strict";
      i.d(t, {
          HG: () => A,
          e4: () => P,
          sL: () => C,
          NY: () => x
      });
      var s = i(939232)
        , n = i(358677)
        , o = i(271293)
        , r = i(888457)
        , a = i(952602)
        , c = i(174760)
        , l = i(187749)
        , d = i(680682)
        , u = i(720798)
        , p = i(168365)
        , v = i(529756)
        , g = i(876434)
        , m = i(406862)
        , h = i(905183)
        , f = i(596095);
      const b = (0,
      p._)((0,
      u.p)("recommendListResponseAtom@tiktok/webapp-atoms", {
          statusCode: 0
      }), {
          rehydrationKey: "desktop.forYouPage.recommendListResponse"
      })
        , {useServiceState: y} = (0,
      v.i)(b, ( () => ({})));
      var w = i(388482)
        , _ = i(255504)
        , k = i(164596)
        , j = i(14280)
        , O = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const S = (0,
      w.M)({
          csr: e => O(void 0, void 0, void 0, (function*() {
              const t = (0,
              _.t$)("recommendItemList");
              if (t)
                  return t;
              const i = (0,
              _.DV)("recommendItemList");
              return i ? (j.P.emit("consume_prefetch_data", performance.now(), "unknown", "recommendItemList"),
              i.catch(( () => (j.P.emit("consume_prefetch_data", performance.now(), "fail", "recommendItemList"),
              k.h.get("/api/recommend/item_list/", {
                  query: e,
                  baseUrlType: 2
              }))))) : k.h.get("/api/recommend/item_list/", {
                  query: e,
                  baseUrlType: 2
              })
          }
          ))
      });
      var I = i(42308)
        , L = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const P = (0,
      p._)((0,
      u.p)("recommendListAtom@tiktok/webapp-atoms", m.hA), {
          rehydrationKey: "desktop.forYouPage.recommendList"
      })
        , {useAtomService: x, useServiceDispatchers: C, useServiceState: T, getStaticApi: A} = (0,
      v.i)(P, ( (e, t) => ({
          getRecommendList(i, u=!1) {
              var p, v, y, w, _;
              return L(this, void 0, void 0, (function*() {
                  const j = u ? I.Hx : P
                    , L = u ? "video" : "foryou";
                  try {
                      const I = e(j)
                        , {bizContext: P} = e(o.A)
                        , {language: C, abTestVersion: T} = (0,
                      s.x)()
                        , {itemId: A, watchLiveLastTime: U, device_type: E, fromPage: F, pullType: M=2, ttamParams: V={}, isNonPersonalized: R=!1, playModeForTea: D="one_column", fypFeederItemId: q, fetchCount: B, enableCDNCache: N} = i
                        , z = (0,
                      r.fU)() ? R : (0,
                      f.PJ)(e(f.WH))
                        , H = (0,
                      n.uk)(C);
                      let $ = 30;
                      const W = null != B ? B : null === (p = null == T ? void 0 : T.parameters.change_list_length_new) || void 0 === p ? void 0 : p.vid;
                      W && ($ = Number(W));
                      const K = Object.assign(Object.assign({
                          isNonPersonalized: z,
                          aid: m.xE,
                          count: 1 === M ? 9 : $,
                          insertedItemID: A,
                          language: H,
                          clientABVersions: null == T ? void 0 : T.versionName,
                          pullType: M,
                          watchLiveLastTime: U,
                          device_type: E
                      }, V), {
                          coverFormat: null === (v = null == P ? void 0 : P.videoCoverSettings) || void 0 === v ? void 0 : v.format,
                          itemID: q,
                          vv_count_fyp: parseInt((0,
                          a._S)(m.Bu, "0"), 10) || 0
                      })
                        , G = function(e, t, i) {
                          var o, r, c;
                          const {language: l="en", abTestVersion: d} = null !== (o = (0,
                          s.x)()) && void 0 !== o ? o : {}
                            , {itemId: u, watchLiveLastTime: p, device_type: v, pullType: h=2, ttamParams: f={}, fypFeederItemId: b, fetchCount: y, enableCDNCache: w} = e
                            , _ = (0,
                          n.uk)(l);
                          let k = 30;
                          const j = null != y ? y : null === (r = null == d ? void 0 : d.parameters.change_list_length_new) || void 0 === r ? void 0 : r.vid;
                          return j && (k = Number(j)),
                          Object.assign(Object.assign({
                              isNonPersonalized: i,
                              aid: m.xE,
                              count: 1 === h ? 9 : k,
                              insertedItemID: u,
                              language: _,
                              clientABVersions: null == d ? void 0 : d.versionName,
                              pullType: h,
                              watchLiveLastTime: p,
                              device_type: v
                          }, f), {
                              coverFormat: null === (c = null == t ? void 0 : t.videoCoverSettings) || void 0 === c ? void 0 : c.format,
                              itemID: b,
                              vv_count_fyp: parseInt((0,
                              a._S)(m.Bu, "0"), 10) || 0,
                              vv_count: parseInt((0,
                              a._S)(m.$H, "0"), 10) || 0,
                              cpu_core_number: "undefined" != typeof navigator && navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 0,
                              dark_mode: "dark" === (0,
                              g.MJ)(m.n9) && "1" === (0,
                              g.MJ)(m.HF),
                              time_of_day: (new Date).getHours(),
                              day_of_week: (new Date).getDay(),
                              enable_cache: Boolean(w),
                              user_is_login: !w && void 0
                          })
                      }(i, P, z);
                      console.debug("[getRecommendList]", "originParams", K, "expParams", G, JSON.stringify(G) === JSON.stringify(K));
                      const J = "v2" !== (null === (w = null === (y = null == T ? void 0 : T.parameters) || void 0 === y ? void 0 : y.foryou_prefetch) || void 0 === w ? void 0 : w.vid) ? K : G;
                      F && Object.assign(J, {
                          from_page: F
                      }),
                      t(j, (e => Object.assign(Object.assign({}, e), {
                          loading: !0
                      })));
                      const Q = yield S(J)
                        , Z = function(e, t) {
                          const {adsOffset: i=0, itemList: s} = t
                            , n = Number(i)
                            , o = null == s ? void 0 : s[n];
                          if (!(null == o ? void 0 : o.isTT4BAds))
                              return t;
                          const r = n >= e ? n - e : 0;
                          return null == s || s.splice(n, 1),
                          null == s || s.splice(r, 0, o),
                          t.itemList = s,
                          t
                      }(I.list.length, Q)
                        , Y = null !== (_ = Z.itemList) && void 0 !== _ ? _ : [];
                      Y.forEach((e => {
                          var t;
                          if (e.ad_info) {
                              const t = (0,
                              c.n5)({
                                  ad_info: e.ad_info,
                                  play_mode: D
                              });
                              l.pg.handleReceive(t)
                          }
                          d.j.handleVideoReceive({
                              item_id: e.id,
                              group_id: null === (t = null == e ? void 0 : e.video) || void 0 === t ? void 0 : t.id
                          })
                      }
                      )),
                      u || t(b, Z),
                      (0,
                      h.Tj)(e, t, j, L, Z);
                      try {
                          N && (x = {
                              aid: m.xE,
                              language: H,
                              itemIds: Y.map((e => e.id)).join(","),
                              clientABVersions: null == T ? void 0 : T.versionName,
                              isNonPersonalized: z
                          },
                          O(void 0, void 0, void 0, (function*() {
                              return k.h.get("/api/record/impression/action/", {
                                  query: x,
                                  baseUrlType: 2
                              })
                          }
                          )))
                      } catch (e) {
                          console.error("Record Impression Action failed in /api/recommend/item_list with CDN Cache", e)
                      }
                  } catch (e) {
                      (0,
                      g.mH)().warn("getRecommendList err", e),
                      (0,
                      h.e_)(t, j)
                  }
                  var x
              }
              ))
          },
          setDeleteVideo(e) {
              (0,
              h.Fx)(t, P, e)
          },
          setListFromCache(i) {
              (0,
              h.Tj)(e, t, P, "foryou", i, {
                  disableReportMore: !0
              })
          },
          getFeedCacheList() {
              var t;
              return L(this, void 0, void 0, (function*() {
                  try {
                      const {bizContext: r} = e(o.A)
                        , {language: c, abTestVersion: l} = (0,
                      s.x)()
                        , d = (0,
                      f.PJ)(e(f.WH))
                        , u = {
                          count: 3,
                          language: (0,
                          n.uk)(c),
                          coverFormat: null === (t = null == r ? void 0 : r.videoCoverSettings) || void 0 === t ? void 0 : t.format,
                          isNonPersonalized: d,
                          vv_count_fyp: parseInt((0,
                          a._S)(m.Bu, "0"), 10) || 0,
                          clientABVersions: null == l ? void 0 : l.versionName
                      };
                      return yield(i = u,
                      O(void 0, void 0, void 0, (function*() {
                          return k.h.get("/api/preload/item_list/", {
                              query: i,
                              baseUrlType: 2
                          })
                      }
                      )))
                  } catch (e) {
                      return null
                  }
                  var i
              }
              ))
          },
          resetRecommendList(e) {
              t(P, Object.assign(Object.assign({}, m.hA), e))
          },
          setRecommendListById(e) {
              const {list: i, browserList: s, preloadList: n} = e;
              t(P, (e => Object.assign(Object.assign({}, e), {
                  list: i,
                  browserList: null != s ? s : i,
                  preloadList: n
              })))
          }
      })))
  }
  ,
  42308: (e, t, i) => {
      "use strict";
      i.d(t, {
          Hx: () => h
      });
      var s = i(358677)
        , n = i(939232)
        , o = i(164596)
        , r = i(271293)
        , a = i(720798)
        , c = i(168365)
        , l = i(529756)
        , d = i(596095)
        , u = i(406862)
        , p = i(905183)
        , v = i(635287)
        , g = i(975540)
        , m = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const h = (0,
      c._)((0,
      a.p)("relatedListAtom@tiktok/webapp-atoms", u.hA), {
          rehydrationKey: "desktop.videoPage.relatedList"
      })
        , {useAtomService: f, useServiceDispatchers: b, useServiceState: y, getStaticApi: w} = (0,
      l.i)(h, ( (e, t) => ({
          getRelatedList(i) {
              var a, c, l, f, b, y;
              return m(this, void 0, void 0, (function*() {
                  try {
                      const {loading: _, hasMore: k, cursor: j="0"} = e(h);
                      if (_)
                          return;
                      const {itemId: O, secUid: S} = i
                        , {language: I, abTestVersion: L, user: P} = (0,
                      n.x)()
                        , {bizContext: x} = e(r.A)
                        , C = (0,
                      s.uk)(I)
                        , T = null === (a = null == x ? void 0 : x.videoCoverSettings) || void 0 === a ? void 0 : a.format
                        , A = (0,
                      d.PJ)(e(d.WH))
                        , U = null !== (l = null === (c = e(g.Pu)[O]) || void 0 === c ? void 0 : c.CategoryType) && void 0 !== l ? l : 0
                        , E = null !== (b = null === (f = null == L ? void 0 : L.parameters.video_detail_yml_creator) || void 0 === f ? void 0 : f.vid) && void 0 !== b ? b : "v0"
                        , F = "v0" !== E && !P
                        , M = "v2" === E;
                      let V;
                      t(h, (e => Object.assign(Object.assign({}, e), {
                          loading: !0
                      }))),
                      F && S && k ? (V = yield(0,
                      v.Ob)({
                          aid: u.xE,
                          count: 16,
                          cursor: j,
                          secUid: S,
                          language: C,
                          coverFormat: T
                      }),
                      V.itemList = null === (y = V.itemList) || void 0 === y ? void 0 : y.filter((e => (M || !e.isPinnedItem) && !e.imagePost)),
                      V.hasMore = !!(V.itemList && V.itemList.length > 3) && V.hasMore) : V = yield(w = {
                          aid: u.xE,
                          count: 16,
                          itemID: O,
                          language: C,
                          coverFormat: T,
                          isNonPersonalized: A,
                          clientABVersions: null == L ? void 0 : L.versionName,
                          cursor: j,
                          CategoryType: U
                      },
                      m(void 0, void 0, void 0, (function*() {
                          return o.h.get("/api/related/item_list/", {
                              query: w,
                              baseUrlType: 2
                          })
                      }
                      ))),
                      (0,
                      p.Tj)(e, t, h, "video", V)
                  } catch (e) {
                      (0,
                      p.e_)(t, h)
                  }
                  var w
              }
              ))
          },
          resetRelatedList() {
              t(h, u.hA)
          }
      })))
  }
  ,
  229341: (e, t, i) => {
      "use strict";
      i.d(t, {
          Ds: () => f
      });
      var s = i(720798)
        , n = i(529756)
        , o = i(845710)
        , r = i(743508)
        , a = i(884098)
        , c = i(178178)
        , l = i(162261)
        , d = i(406862)
        , u = i(905183);
      const p = (0,
      s.p)("atomsMapForItemListKey@tiktok/webapp-atoms", {
          "user-post": r.HP,
          "user-repost": a.O0,
          "user-liked": o.MQ,
          favorites: c.h9
      })
        , v = (0,
      s.p)("userItemListAtom@tiktok/webapp-atoms", (e => ({
          "user-post": e(r.HP),
          "user-repost": e(a.O0),
          "user-liked": e(o.MQ),
          favorites: e(c.h9)
      })), ( () => {}
      ))
        , {useAtomService: g, useServiceDispatchers: m, useServiceState: h, getStaticApi: f} = (0,
      n.i)(v, ( (e, t) => ({
          setLoading(i, s) {
              (0,
              l.yI)(i) && t(e(p)[i], (e => Object.assign(Object.assign({}, e), {
                  loading: s
              })))
          },
          getItemList(e, t) {
              return i = this,
              s = void 0,
              l = function*() {
                  switch (e) {
                  case "user-post":
                  default:
                      return (0,
                      r.s5)().getItemList(t);
                  case "user-repost":
                      return (0,
                      a.rg)().getItemList(t);
                  case "user-liked":
                      return (0,
                      o.vz)().getItemList(t);
                  case "favorites":
                      return (0,
                      c.k6)().getItemList(t)
                  }
              }
              ,
              new ((n = void 0) || (n = Promise))((function(e, t) {
                  function o(e) {
                      try {
                          a(l.next(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function r(e) {
                      try {
                          a(l.throw(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function a(t) {
                      var i;
                      t.done ? e(t.value) : (i = t.value,
                      i instanceof n ? i : new n((function(e) {
                          e(i)
                      }
                      ))).then(o, r)
                  }
                  a((l = l.apply(i, s || [])).next())
              }
              ));
              var i, s, n, l
          },
          setDeleteVideo(i) {
              for (const [s,n] of Object.entries(e(p)))
                  "user-post" === s ? (0,
                  r.s5)().setDeleteVideoForUserPostAtom(i) : (0,
                  u.Fx)(t, n, i)
          },
          resetItemList(i) {
              (0,
              l.yI)(i) && t(e(p)[i], d.hA)
          },
          resetAllLists() {
              (0,
              r.s5)().resetAllLists(),
              t(a.O0, d.hA),
              t(o.MQ, d.hA),
              t(c.h9, d.hA)
          }
      })))
  }
  ,
  178178: (e, t, i) => {
      "use strict";
      i.d(t, {
          h9: () => u,
          k6: () => m
      });
      var s = i(164596)
        , n = i(720798)
        , o = i(168365)
        , r = i(529756)
        , a = i(406862)
        , c = i(905183)
        , l = i(162261)
        , d = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const u = (0,
      o._)((0,
      n.p)("userFavoriteListAtom@tiktok/webapp-atoms", a.hA), {
          rehydrationKey: "desktop.userPage.userFavoriteList"
      })
        , {useAtomService: p, useServiceDispatchers: v, useServiceState: g, getStaticApi: m} = (0,
      r.i)(u, ( (e, t) => ({
          setLoading(e) {
              t(u, (t => Object.assign(Object.assign({}, t), {
                  loading: e
              })))
          },
          getItemList(i) {
              return d(this, void 0, void 0, (function*() {
                  try {
                      t(u, (e => Object.assign(Object.assign({}, e), {
                          loading: !0
                      })));
                      const n = (0,
                      l.bv)(e, u, i)
                        , o = yield(e => d(void 0, void 0, void 0, (function*() {
                          return s.h.get("/api/user/collect/item_list/", {
                              query: e,
                              baseUrlType: 2
                          })
                      }
                      )))(n);
                      (0,
                      c.Tj)(e, t, u, "favorites", o, {
                          secUid: i.secUid
                      }),
                      t(u, (e => {
                          var t;
                          return Object.assign(Object.assign({}, e), {
                              total: String(null !== (t = o.total) && void 0 !== t ? t : 0)
                          })
                      }
                      ))
                  } catch (e) {
                      (0,
                      c.e_)(t, u)
                  }
              }
              ))
          },
          resetItemList() {
              t(u, a.hA)
          }
      })))
  }
  ,
  845710: (e, t, i) => {
      "use strict";
      i.d(t, {
          MQ: () => u,
          vz: () => m
      });
      var s = i(164596)
        , n = i(720798)
        , o = i(168365)
        , r = i(529756)
        , a = i(406862)
        , c = i(905183)
        , l = i(162261)
        , d = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const u = (0,
      o._)((0,
      n.p)("userLikedListAtom@tiktok/webapp-atoms", a.hA), {
          rehydrationKey: "desktop.userPage.userLikedList"
      })
        , {useAtomService: p, useServiceDispatchers: v, useServiceState: g, getStaticApi: m} = (0,
      r.i)(u, ( (e, t) => ({
          setLoading(e) {
              t(u, (t => Object.assign(Object.assign({}, t), {
                  loading: e
              })))
          },
          getItemList(i) {
              return d(this, void 0, void 0, (function*() {
                  try {
                      t(u, (e => Object.assign(Object.assign({}, e), {
                          loading: !0
                      })));
                      const n = (0,
                      l.bv)(e, u, i)
                        , o = yield(e => d(void 0, void 0, void 0, (function*() {
                          return s.h.get("/api/favorite/item_list/", {
                              query: e,
                              baseUrlType: 2
                          })
                      }
                      )))(n);
                      (0,
                      c.Tj)(e, t, u, "user-liked", o, {
                          secUid: i.secUid
                      })
                  } catch (e) {
                      (0,
                      c.e_)(t, u)
                  }
              }
              ))
          },
          resetItemList() {
              t(u, a.hA)
          }
      })))
  }
  ,
  635287: (e, t, i) => {
      "use strict";
      i.d(t, {
          Ku: () => h,
          Ob: () => m,
          Tx: () => w,
          Ym: () => g
      });
      var s = i(720798)
        , n = i(168365)
        , o = i(529756)
        , r = i(406862)
        , a = i(905183)
        , c = i(162261)
        , l = i(388482)
        , d = i(255504)
        , u = i(164596)
        , p = i(14280)
        , v = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const g = (0,
      n._)((0,
      s.p)("userPostListLatestAtom@tiktok/webapp-atoms", r.hA), {
          rehydrationKey: "desktop.userPage.userPostListLatest"
      })
        , m = (0,
      l.M)({
          csr: e => v(void 0, void 0, void 0, (function*() {
              const t = (0,
              d.t$)("userPostList");
              if (t)
                  return t;
              const i = (0,
              d.DV)("userPostList");
              return i ? (p.P.emit("consume_prefetch_data", performance.now(), "unknown", "userPostList"),
              i.catch(( () => (p.P.emit("consume_prefetch_data", performance.now(), "fail", "userPostList"),
              u.h.get("/api/post/item_list/", {
                  query: e,
                  baseUrlType: 2
              }))))) : u.h.get("/api/post/item_list/", {
                  query: e,
                  baseUrlType: 2
              })
          }
          ))
      })
        , h = e => {
          const {useAtomService: t, useServiceDispatchers: i, useServiceState: s, getStaticApi: n} = (0,
          o.i)(e, ( (t, i) => ({
              setLoading(t) {
                  i(e, (e => Object.assign(Object.assign({}, e), {
                      loading: t
                  })))
              },
              getItemList(s) {
                  var n;
                  return v(this, void 0, void 0, (function*() {
                      try {
                          i(e, (e => Object.assign(Object.assign({}, e), {
                              loading: !0
                          })));
                          const {secUid: o, userId: r, count: l, postItemListRequestType: u, filterPhotoContent: p, locateItemID: v, needPinnedItemIds: g=!0} = s
                            , h = (0,
                          c.bv)(t, e, Object.assign({
                              secUid: o,
                              userId: r,
                              count: null != l ? l : d.M4,
                              postItemListRequestType: u,
                              needPinnedItemIds: g
                          }, v && {
                              locateItemID: v
                          }))
                            , f = m(h);
                          i(e, (e => Object.assign(Object.assign({}, e), {
                              prevPromise: f
                          })));
                          const b = yield f;
                          if (t(e).prevPromise !== f)
                              return;
                          p && (b.itemList = null === (n = b.itemList) || void 0 === n ? void 0 : n.filter((e => !e.imagePost))),
                          (0,
                          a.Tj)(t, i, e, "user-post", b, {
                              secUid: o
                          })
                      } catch (t) {
                          console.log("in utils, error getItemList!"),
                          (0,
                          a.e_)(i, e)
                      }
                  }
                  ))
              },
              resetItemList() {
                  i(e, r.hA)
              }
          })));
          return {
              useAtomService: t,
              useServiceDispatchers: i,
              useServiceState: s,
              getStaticApi: n
          }
      }
        , {useAtomService: f, useServiceDispatchers: b, useServiceState: y, getStaticApi: w} = h(g)
  }
  ,
  743508: (e, t, i) => {
      "use strict";
      i.d(t, {
          s5: () => L,
          HP: () => j
      });
      var s = i(720798)
        , n = i(529756)
        , o = i(406862)
        , r = i(162261)
        , a = i(635287);
      const c = (0,
      s.p)("userPostListPopularAtom@tiktok/webapp-atoms", o.hA)
        , {useAtomService: l, useServiceDispatchers: d, useServiceState: u, getStaticApi: p} = (0,
      a.Ku)(c)
        , v = (0,
      s.p)("userPostListOldestAtom@tiktok/webapp-atoms", o.hA)
        , {useAtomService: g, useServiceDispatchers: m, useServiceState: h, getStaticApi: f} = (0,
      a.Ku)(v);
      var b = i(905183);
      const y = (0,
      s.p)("atomsMapForPostItemListRequestType@tiktok/webapp-atoms", {
          0: a.Ym,
          1: c,
          2: v
      })
        , w = (0,
      s.p)("sortTypeAtom@tiktok/webapp-atoms", 0)
        , {useAtomService: _, useServiceState: k} = (0,
      n.i)(w, ( (e, t) => ({
          setUserPostSortType(e) {
              t(w, e)
          }
      })))
        , j = (0,
      s.p)("userPostListAtom@tiktok/webapp-atoms", (e => {
          const t = e(w)
            , i = e(y)[t];
          return e(i)
      }
      ), ( () => {}
      ))
        , {useAtomService: O, useServiceDispatchers: S, useServiceState: I, getStaticApi: L} = (0,
      n.i)(j, ( (e, t) => ({
          setLoading(i) {
              (0,
              r.K8)(e(w)) && t(e(y)[e(w)], (e => Object.assign(Object.assign({}, e), {
                  loading: i
              })))
          },
          getItemList(t) {
              return i = this,
              s = void 0,
              o = function*() {
                  switch (e(w)) {
                  case 0:
                  default:
                      return t.postItemListRequestType = 0,
                      (0,
                      a.Tx)().getItemList(t);
                  case 1:
                      return t.postItemListRequestType = 1,
                      p().getItemList(t);
                  case 2:
                      return t.postItemListRequestType = 2,
                      f().getItemList(t)
                  }
              }
              ,
              new ((n = void 0) || (n = Promise))((function(e, t) {
                  function r(e) {
                      try {
                          c(o.next(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function a(e) {
                      try {
                          c(o.throw(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function c(t) {
                      var i;
                      t.done ? e(t.value) : (i = t.value,
                      i instanceof n ? i : new n((function(e) {
                          e(i)
                      }
                      ))).then(r, a)
                  }
                  c((o = o.apply(i, s || [])).next())
              }
              ));
              var i, s, n, o
          },
          resetItemList() {
              (0,
              r.K8)(e(w)) && t(e(y)[e(w)], o.hA)
          },
          resetAllLists() {
              t(w, 0),
              t(j, o.hA),
              t(a.Ym, o.hA),
              t(c, o.hA),
              t(v, o.hA)
          },
          setDeleteVideoForUserPostAtom(i) {
              for (const s of Object.values(e(y)))
                  (0,
                  b.Fx)(t, s, i)
          }
      })))
  }
  ,
  884098: (e, t, i) => {
      "use strict";
      i.d(t, {
          O0: () => v,
          rg: () => f
      });
      var s = i(164596)
        , n = i(720798)
        , o = i(168365)
        , r = i(529756)
        , a = i(388482)
        , c = i(406862)
        , l = i(905183)
        , d = i(162261)
        , u = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const p = (0,
      a.M)({
          csr: e => u(void 0, void 0, void 0, (function*() {
              return s.h.get("/api/repost/item_list/", {
                  query: e,
                  baseUrlType: 2
              })
          }
          ))
      })
        , v = (0,
      o._)((0,
      n.p)("userRepostListAtom@tiktok/webapp-atoms", c.hA), {
          rehydrationKey: "userPage.userRepostList"
      })
        , {useAtomService: g, useServiceDispatchers: m, useServiceState: h, getStaticApi: f} = (0,
      r.i)(v, ( (e, t) => ({
          setLoading(e) {
              t(v, (t => Object.assign(Object.assign({}, t), {
                  loading: e
              })))
          },
          getItemList(i) {
              return u(this, void 0, void 0, (function*() {
                  try {
                      t(v, (e => Object.assign(Object.assign({}, e), {
                          loading: !0
                      })));
                      const s = (0,
                      d.bv)(e, v, i)
                        , n = p(s);
                      t(v, (e => Object.assign(Object.assign({}, e), {
                          prevPromise: n
                      })));
                      const o = yield n;
                      if (e(v).prevPromise !== n)
                          return;
                      (0,
                      l.Tj)(e, t, v, "user-repost", o, {
                          secUid: i.secUid
                      })
                  } catch (e) {
                      (0,
                      l.e_)(t, v)
                  }
              }
              ))
          },
          resetItemList() {
              t(v, c.hA)
          }
      })))
  }
  ,
  162261: (e, t, i) => {
      "use strict";
      i.d(t, {
          K8: () => u,
          bv: () => l,
          yI: () => d
      });
      var s = i(939232)
        , n = i(271293)
        , o = i(406862);
      const r = 30
        , a = ["user-post", "user-repost", "user-liked", "favorites"]
        , c = [0, 1, 2];
      function l(e, t, i) {
          var a;
          const {secUid: c, userId: l, count: d, postItemListRequestType: u, locateItemID: p, needPinnedItemIds: v=!0} = i
            , g = e(t)
            , {cursor: m="0"} = g
            , {language: h, region: f} = (0,
          s.x)()
            , {bizContext: b} = e(n.A);
          return Object.assign({
              secUid: c,
              aid: o.xE,
              count: null != d ? d : r,
              cursor: m,
              region: f,
              language: h,
              userId: l,
              coverFormat: null === (a = null == b ? void 0 : b.videoCoverSettings) || void 0 === a ? void 0 : a.format,
              post_item_list_request_type: null != u ? u : 0,
              needPinnedItemIds: v
          }, p && {
              locate_item_id: p
          })
      }
      function d(e) {
          return void 0 !== a.find((t => t === e))
      }
      function u(e) {
          return void 0 !== c.find((t => t === e))
      }
  }
  ,
  373491: (e, t, i) => {
      "use strict";
      i.d(t, {
          D: () => te
      }),
      i(445372);
      var s = i(312688)
        , n = i(939232)
        , o = i(388482)
        , r = i(164596)
        , a = i(271293)
        , c = i(720798)
        , l = i(168365)
        , d = i(529756)
        , u = i(406862)
        , p = i(905183)
        , v = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const g = (0,
      o.M)({
          csr: e => v(void 0, void 0, void 0, (function*() {
              return r.h.get("/api/challenge/item_list/", {
                  query: e,
                  baseUrlType: 2
              })
          }
          ))
      })
        , m = (0,
      l._)((0,
      c.p)("challengeListAtom@tiktok/webapp-atoms", u.hA), {
          rehydrationKey: "desktop.challengePage.challengeList"
      })
        , {useAtomService: h, useServiceDispatchers: f, useServiceState: b} = (0,
      d.i)(m, ( (e, t) => ({
          getChallengeList(i) {
              var s;
              return v(this, void 0, void 0, (function*() {
                  try {
                      const {cursor: o="0"} = e(m)
                        , {challengeID: r} = i
                        , {language: c} = (0,
                      n.x)()
                        , {bizContext: l} = e(a.A);
                      t(m, (e => Object.assign(Object.assign({}, e), {
                          loading: !0
                      })));
                      const d = yield g({
                          challengeID: r,
                          language: c,
                          cursor: o,
                          aid: u.xE,
                          count: u.vu,
                          coverFormat: null === (s = null == l ? void 0 : l.videoCoverSettings) || void 0 === s ? void 0 : s.format
                      });
                      (0,
                      p.Tj)(e, t, m, "challenge", d)
                  } catch (e) {
                      (0,
                      p.e_)(t, m)
                  }
              }
              ))
          },
          resetChallengeList() {
              t(m, u.hA)
          }
      })));
      var y = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const w = (0,
      o.M)({
          csr: e => y(void 0, void 0, void 0, (function*() {
              return r.h.get("/api/collection/item_list/", {
                  query: e,
                  baseUrlType: 2
              })
          }
          ))
      })
        , _ = (0,
      l._)((0,
      c.p)("collectionListAtom@tiktok/webapp-atoms", u.hA), {
          rehydrationKey: "desktop.collectionPage.collectionList"
      })
        , {useAtomService: k, useServiceDispatchers: j, useServiceState: O} = (0,
      d.i)(_, ( (e, t) => ({
          getCollectionList(i) {
              return y(this, void 0, void 0, (function*() {
                  try {
                      const {collectionId: s} = i
                        , o = e(_)
                        , {cursor: r="0"} = o
                        , {language: a, abTestVersion: c} = (0,
                      n.x)();
                      t(_, (e => Object.assign(Object.assign({}, e), {
                          loading: !0
                      })));
                      const l = yield w({
                          collectionId: s,
                          language: a,
                          cursor: r,
                          aid: u.xE,
                          count: u.vu,
                          sourceType: 113,
                          clientABVersions: null == c ? void 0 : c.versionName
                      });
                      (0,
                      p.Tj)(e, t, _, "collection", l)
                  } catch (e) {
                      (0,
                      p.e_)(t, _)
                  }
              }
              ))
          },
          resetCollectionList() {
              t(_, Object.assign({}, u.hA))
          },
          addItems(e, i) {
              t(_, (t => {
                  const {list: s, browserList: n} = (0,
                  p.kf)(t, e, {
                      itemListKey: "collection",
                      addToHead: i
                  });
                  return Object.assign(Object.assign({}, t), {
                      list: s,
                      browserList: n
                  })
              }
              ))
          },
          deleteItems(e) {
              (0,
              p.UJ)(t, _, e)
          }
      })));
      var S = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const I = (0,
      l._)((0,
      c.p)("creatorTabListAtom@tiktok/webapp-atoms", u.hA), {
          rehydrationKey: "desktop.creatorTabPage.creatorTabList"
      })
        , {useAtomService: L, useServiceDispatchers: P, useServiceState: x} = (0,
      d.i)(I, ( (e, t) => ({
          getCreatorTabList(i) {
              return S(this, void 0, void 0, (function*() {
                  try {
                      const {secUid: s, createTime: o, fetchType: a} = i
                        , {language: c} = (0,
                      n.x)();
                      t(I, (e => Object.assign(Object.assign({}, e), {
                          loading: !0
                      })));
                      const l = {
                          aid: u.xE,
                          count: u.Kq,
                          cursor: String(o),
                          secUid: s,
                          type: a,
                          language: c
                      }
                        , d = yield(e => S(void 0, void 0, void 0, (function*() {
                          return r.h.get("/api/creator/item_list/", {
                              query: e,
                              baseUrlType: 2
                          })
                      }
                      )))(l)
                        , v = {
                          secUid: s,
                          addToHead: 2 === a
                      };
                      (0,
                      p.Tj)(e, t, I, "creator_tab", d, v),
                      t(I, (e => {
                          var t, i;
                          return Object.assign(Object.assign({}, e), {
                              hasMorePrevious: null !== (t = d.hasMorePrevious) && void 0 !== t && t,
                              hasMoreLatest: null !== (i = d.hasMoreLatest) && void 0 !== i && i
                          })
                      }
                      ))
                  } catch (e) {
                      (0,
                      p.e_)(t, I)
                  }
              }
              ))
          },
          resetCreatorTabList() {
              t(I, u.hA)
          }
      })));
      var C = i(358677)
        , T = i(255504)
        , A = i(14280);
      const U = (0,
      o.M)({
          csr: e => {
              return t = void 0,
              i = void 0,
              n = function*() {
                  const t = (0,
                  T.DV)("exploreItemList");
                  return t ? (A.P.emit("consume_prefetch_data", performance.now(), "unknown", "exploreItemList"),
                  t.catch(( () => (A.P.emit("consume_prefetch_data", performance.now(), "fail", "exploreItemList"),
                  r.h.get("/api/explore/item_list/", {
                      query: e,
                      baseUrlType: 2
                  }))))) : r.h.get("/api/explore/item_list/", {
                      query: e,
                      baseUrlType: 2
                  })
              }
              ,
              new ((s = void 0) || (s = Promise))((function(e, o) {
                  function r(e) {
                      try {
                          c(n.next(e))
                      } catch (e) {
                          o(e)
                      }
                  }
                  function a(e) {
                      try {
                          c(n.throw(e))
                      } catch (e) {
                          o(e)
                      }
                  }
                  function c(t) {
                      var i;
                      t.done ? e(t.value) : (i = t.value,
                      i instanceof s ? i : new s((function(e) {
                          e(i)
                      }
                      ))).then(r, a)
                  }
                  c((n = n.apply(t, i || [])).next())
              }
              ));
              var t, i, s, n
          }
      });
      var E = i(888457)
        , F = i(499971);
      const M = () => {
          var e;
          const {user: t} = (0,
          n.x)();
          let i;
          switch ((0,
          s.d)("pc_non_personalized_explore")) {
          case "v0":
              i = !0;
              break;
          case "v1":
              i = (0,
              F.eI)(null !== (e = null == t ? void 0 : t.uid) && void 0 !== e ? e : "", !0, (0,
              E.fU)())
          }
          return i
      }
      ;
      const V = (0,
      l._)((0,
      c.p)("exploreListAtom@tiktok/webapp-atoms", u.hA), {
          rehydrationKey: "desktop.explorePage.exploreList"
      })
        , {useAtomService: R, useServiceDispatchers: D, useServiceState: q} = (0,
      d.i)(V, ( (e, t) => ({
          getExploreList(i) {
              return s = this,
              o = void 0,
              a = function*() {
                  try {
                      const {categoryType: s} = i
                        , {language: o, abTestVersion: r} = (0,
                      n.x)();
                      t(V, (e => Object.assign(Object.assign({}, e), {
                          loading: !0
                      })));
                      const a = yield U({
                          language: (0,
                          C.uk)(o),
                          aid: u.xE,
                          count: 16,
                          categoryType: s,
                          clientABVersions: null == r ? void 0 : r.versionName,
                          isNonPersonalized: M()
                      });
                      (0,
                      p.Tj)(e, t, V, "explore", a)
                  } catch (e) {
                      (0,
                      p.e_)(t, V)
                  }
              }
              ,
              new ((r = void 0) || (r = Promise))((function(e, t) {
                  function i(e) {
                      try {
                          c(a.next(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function n(e) {
                      try {
                          c(a.throw(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function c(t) {
                      var s;
                      t.done ? e(t.value) : (s = t.value,
                      s instanceof r ? s : new r((function(e) {
                          e(s)
                      }
                      ))).then(i, n)
                  }
                  c((a = a.apply(s, o || [])).next())
              }
              ));
              var s, o, r, a
          },
          resetExploreList() {
              t(V, u.hA)
          }
      })));
      var B = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const N = (0,
      o.M)({
          csr: e => B(void 0, void 0, void 0, (function*() {
              return r.h.get("/api/music/item_list/", {
                  query: e,
                  baseUrlType: 2
              })
          }
          ))
      })
        , z = (0,
      l._)((0,
      c.p)("musicListAtom@tiktok/webapp-atoms", u.hA), {
          rehydrationKey: "desktop.musicPage.musicList"
      })
        , {useAtomService: H, useServiceDispatchers: $, useServiceState: W} = (0,
      d.i)(z, ( (e, t) => ({
          getMusicList(i) {
              var s;
              return B(this, void 0, void 0, (function*() {
                  const o = e(z);
                  try {
                      const {musicID: r} = i
                        , {cursor: c="0"} = o
                        , {language: l} = (0,
                      n.x)()
                        , {bizContext: d} = e(a.A);
                      t(z, (e => Object.assign(Object.assign({}, e), {
                          loading: !0
                      })));
                      const v = yield N({
                          musicID: r,
                          language: l,
                          cursor: c,
                          aid: u.xE,
                          count: u.vu,
                          coverFormat: null === (s = null == d ? void 0 : d.videoCoverSettings) || void 0 === s ? void 0 : s.format
                      });
                      (0,
                      p.Tj)(e, t, z, "music", v)
                  } catch (e) {
                      (0,
                      p.e_)(t, z)
                  }
              }
              ))
          },
          resetMusicList() {
              t(z, u.hA)
          }
      })));
      var K = i(709573)
        , G = i(42308)
        , J = i(567085)
        , Q = i(743508)
        , Z = i(884098)
        , Y = i(845710)
        , X = i(178178);
      const ee = new Map([["foryou", K.e4], ["music", z], ["explore", V], ["challenge", m], ["creator_tab", I], ["user-post", Q.HP], ["user-repost", Z.O0], ["user-liked", Y.MQ], ["favorites", X.h9], ["messages", J.D3], ["video", G.Hx]])
        , te = e => {
          var t;
          if (!e)
              return;
          const i = "v0" !== (null !== (t = (0,
          s.d)("webapp_collection_profile")) && void 0 !== t ? t : "v0");
          return "collection" === e && i ? _ : ee.get(e)
      }
  }
  ,
  975540: (e, t, i) => {
      "use strict";
      i.d(t, {
          ud: () => A,
          Pu: () => C,
          mG: () => U
      });
      var s = i(719994)
        , n = i.n(s)
        , o = i(370577)
        , r = i.n(o)
        , a = i(947568)
        , c = i(939232)
        , l = i(938397)
        , d = i(950374)
        , u = i(800507)
        , p = i(174760)
        , v = i(280937)
        , g = i(373471)
        , m = i(249555)
        , h = i(554086)
        , f = i(603237)
        , b = i(168365)
        , y = i(529756)
        , w = i(720798)
        , _ = i(905183)
        , k = i(646863)
        , j = i(461924)
        , O = i(828103);
      const S = (e, t) => {
          var i, s, n, o, r, a, c, l, d, u, p, v, g, m, h;
          const f = null !== (s = null === (i = e.anchors) || void 0 === i ? void 0 : i.filter((e => 54 === e.type))) && void 0 !== s ? s : []
            , b = null !== (o = null === (n = e.anchors) || void 0 === n ? void 0 : n.filter((e => 28 === e.type))) && void 0 !== o ? o : [];
          return Object.assign(Object.assign({}, e), {
              video: e.video,
              nickname: null === (r = e.author) || void 0 === r ? void 0 : r.nickname,
              author: null === (a = e.author) || void 0 === a ? void 0 : a.uniqueId,
              authorId: null === (c = e.author) || void 0 === c ? void 0 : c.id,
              authorSecId: null === (l = e.author) || void 0 === l ? void 0 : l.secUid,
              avatarThumb: null === (d = e.author) || void 0 === d ? void 0 : d.avatarThumb,
              downloadSetting: null === (u = e.author) || void 0 === u ? void 0 : u.downloadSetting,
              authorPrivate: null === (p = e.author) || void 0 === p ? void 0 : p.privateAccount,
              stateControlledMedia: null === (v = e.author) || void 0 === v ? void 0 : v.stateControlledMedia,
              capcutAnchorsOriginal: f,
              capcutAnchors: (null === (g = e.poi) || void 0 === g ? void 0 : g.id) ? [] : f,
              effectAnchors: b,
              videoSuggestWordsList: null !== (m = e.videoSuggestWordsList) && void 0 !== m ? m : null == t ? void 0 : t.videoSuggestWordsList,
              keywordTags: null !== (h = e.keywordTags) && void 0 !== h ? h : null == t ? void 0 : t.keywordTags
          })
      }
      ;
      var I = i(164596)
        , L = i(990064)
        , P = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      }
        , x = function(e, t, i, s) {
          return new (i || (i = Promise))((function(n, o) {
              function r(e) {
                  try {
                      c(s.next(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function a(e) {
                  try {
                      c(s.throw(e))
                  } catch (e) {
                      o(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value,
                  t instanceof i ? t : new i((function(e) {
                      e(t)
                  }
                  ))).then(r, a)
              }
              c((s = s.apply(e, t || [])).next())
          }
          ))
      };
      const C = (0,
      b._)((0,
      w.p)("itemAtom@tiktok/webapp-atoms", {}), {
          rehydrationKey: "webapp.item"
      })
        , {useAtomService: T, getStaticApi: A, useServiceDispatchers: U, useServiceState: E} = (0,
      y.i)(C, ( (e, t) => ({
          setItem(e) {
              const {id: i} = e;
              t(C, (t => Object.assign(Object.assign({}, t), {
                  [i]: S(e, t[i])
              })))
          },
          multiSetItem(i) {
              const s = e(C)
                , n = Object.assign({}, s);
              i.forEach((e => {
                  const {id: t} = e;
                  n[t] = S(e, s[t])
              }
              )),
              t(C, n)
          },
          updateItem(i) {
              e(C)[i.id] && t(C, (e => Object.assign(Object.assign({}, e), {
                  [i.id]: n()(e[i.id], i)
              })))
          },
          setLike(i) {
              const {id: s, liked: n, count: o} = i
                , r = e(C)[s];
              r && (r.stats && (r.stats = Object.assign(Object.assign({}, r.stats), {
                  diggCount: o
              })),
              r.statsV2 && (r.statsV2 = Object.assign(Object.assign({}, r.statsV2), {
                  diggCount: o.toString()
              })),
              t(C, (e => Object.assign(Object.assign({}, e), {
                  [s]: Object.assign(Object.assign({}, r), {
                      digged: n
                  })
              }))))
          },
          setCollect(i) {
              const {id: s, collected: n, count: o} = i
                , r = e(C)[s];
              r && (r.stats && (r.stats = Object.assign(Object.assign({}, r.stats), {
                  collectCount: o
              })),
              r.statsV2 && (r.statsV2 = Object.assign(Object.assign({}, r.statsV2), {
                  collectCount: o.toString()
              })),
              t(C, (e => Object.assign(Object.assign({}, e), {
                  [s]: Object.assign(Object.assign({}, r), {
                      collected: n
                  })
              }))))
          },
          setCommentCount(i) {
              const {id: s, commentCount: n} = i
                , o = e(C)[s];
              o && (o.stats && (o.stats = Object.assign(Object.assign({}, o.stats), {
                  commentCount: n
              })),
              o.statsV2 && (o.statsV2 = Object.assign(Object.assign({}, o.statsV2), {
                  commentCount: n.toString()
              })),
              t(C, (e => Object.assign(Object.assign({}, e), {
                  [s]: Object.assign({}, o)
              }))))
          },
          setResolutionList(t) {
              const {resolutionList: i, id: s} = t
                , n = e(C)[s];
              n && (n.resolutionList = i)
          },
          prependRepost(i) {
              const {id: s, reposted: n, currentUser: o, count: r} = i
                , a = e(C)[s];
              a && (a.statsV2 && (a.statsV2 = Object.assign(Object.assign({}, a.statsV2), {
                  repostCount: r.toString()
              })),
              t(C, (e => {
                  var t, i, r, c, l;
                  const d = [...null !== (i = null === (t = e[s]) || void 0 === t ? void 0 : t.repostList) && void 0 !== i ? i : []];
                  if (n)
                      d.unshift(Object.assign(Object.assign({}, o), {
                          id: o.uid,
                          avatarThumb: null !== (r = o.avatarUri[0]) && void 0 !== r ? r : "",
                          avatarMedium: null !== (c = o.avatarUri[0]) && void 0 !== c ? c : "",
                          avatarLarger: null !== (l = o.avatarUri[0]) && void 0 !== l ? l : "",
                          nickname: o.nickName,
                          relation: 0
                      }));
                  else {
                      const e = d.findIndex((e => e.secUid === o.secUid));
                      d.splice(e, 1)
                  }
                  return Object.assign(Object.assign({}, e), {
                      [s]: Object.assign(Object.assign({}, a), {
                          repostList: d
                      })
                  })
              }
              )))
          },
          reduceOrIncreaseCommentCount(i) {
              const {id: s, isReduce: n, min: o=0} = i
                , r = e(C)
                , a = r[s];
              if (a) {
                  if (a.stats) {
                      const e = n ? Math.max(o, a.stats.commentCount - 1) : a.stats.commentCount + 1;
                      a.stats = Object.assign(Object.assign({}, a.stats), {
                          commentCount: e
                      })
                  }
                  if (a.statsV2) {
                      let e = n ? BigInt(a.statsV2.commentCount) - BigInt(1) : BigInt(a.statsV2.commentCount) + BigInt(1);
                      e < BigInt(o) && (e = BigInt(o)),
                      a.statsV2 = Object.assign(Object.assign({}, a.statsV2), {
                          commentCount: e.toString()
                      })
                  }
                  t(C, Object.assign(Object.assign({}, r), {
                      [s]: Object.assign({}, a)
                  }))
              }
          },
          addItems(e, t) {
              const i = e.filter((e => Boolean(e.author))).map(( ({author: e}) => e))
                , s = e.filter((e => {
                  var t;
                  return Boolean((null === (t = null == e ? void 0 : e.liveRoomInfo) || void 0 === t ? void 0 : t.ownerInfo) && (0,
                  _.Jl)(e))
              }
              )).map((e => Object.assign(Object.assign({}, e.liveRoomInfo.ownerInfo), {
                  roomId: e.liveRoomInfo.roomID
              })))
                , n = e.map((e => Object.assign(Object.assign({}, e), {
                  logId: t
              })))
                , o = (0,
              k.Gp)();
              (0,
              a.unstable_batchedUpdates)(( () => {
                  o.multiSetUser(i.concat(s)),
                  this.multiSetItem(n)
              }
              ))
          },
          postCollectVideo(t) {
              var i, s, n, o;
              return x(this, void 0, void 0, (function*() {
                  const r = e(C)
                    , a = e(k.p9)
                    , {itemId: c} = t
                    , d = r[c]
                    , p = a.users[null !== (i = null == d ? void 0 : d.author) && void 0 !== i ? i : ""]
                    , {collected: v=!1, stats: g} = d
                    , m = Number(null !== (s = null == g ? void 0 : g.collectCount) && void 0 !== s ? s : 0)
                    , h = v ? 2 : 1
                    , f = {
                      aid: l.xE,
                      itemId: c,
                      action: h,
                      secUid: null !== (n = null == p ? void 0 : p.secUid) && void 0 !== n ? n : ""
                  };
                  this.setCollect({
                      id: c,
                      collected: !v,
                      count: v ? Math.max(0, m - 1) : m + 1
                  });
                  try {
                      const e = yield function(e) {
                          return P(this, void 0, void 0, (function*() {
                              return I.h.post("/api/item/collect/", {
                                  query: e,
                                  baseUrlType: 2,
                                  headers: {
                                      [L.nk]: I.h.csrfToken
                                  }
                              })
                          }
                          ))
                      }(f);
                      u.W.handleFavoriteResult({
                          group_id: c,
                          author_id: null !== (o = null == p ? void 0 : p.id) && void 0 !== o ? o : ""
                      }, h);
                      const {statusCode: t} = e;
                      return 0 !== t ? void setTimeout(( () => {
                          this.setCollect({
                              id: c,
                              collected: v,
                              count: m
                          })
                      }
                      ), 3e3) : (1 === h && (yield this.addMlModelTrainData({
                          id: c,
                          action: "favorite"
                      })),
                      e)
                  } catch (e) {}
              }
              ))
          },
          postLikeVideo(t) {
              var i, s, n, o, r;
              return x(this, void 0, void 0, (function*() {
                  const a = e(C)
                    , l = e(k.p9)
                    , d = a[t.id]
                    , u = l.users[null !== (i = null == d ? void 0 : d.author) && void 0 !== i ? i : ""]
                    , {user: g} = (0,
                  c.x)()
                    , {digged: m, stats: f, poi: b, imagePost: y, subVideoMeta: w, ad_info: _, repostList: j} = d
                    , {id: S, forceLike: x, enter_method: T="click", channel_id: A} = t
                    , U = function(e, t) {
                      var i = {};
                      for (var s in e)
                          Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
                      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                          var n = 0;
                          for (s = Object.getOwnPropertySymbols(e); n < s.length; n++)
                              t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (i[s[n]] = e[s[n]])
                      }
                      return i
                  }(t, ["id", "forceLike", "enter_method", "channel_id"])
                    , E = null !== (s = null == f ? void 0 : f.diggCount) && void 0 !== s ? s : 0
                    , F = {
                      aweme_id: S,
                      channel_id: A,
                      friends_upvote: null == j ? void 0 : j.some((e => e.secUid !== (null == g ? void 0 : g.secUid))),
                      type: x ? 1 : m ? 0 : 1
                  };
                  if (!x || !m)
                      try {
                          let e;
                          this.setLike({
                              id: S,
                              liked: !m,
                              count: m ? Math.max(0, E - 1) : E + 1
                          });
                          try {
                              e = yield function(e) {
                                  return P(this, void 0, void 0, (function*() {
                                      return I.h.post("/api/commit/item/digg/", {
                                          query: e,
                                          baseUrlType: 2,
                                          headers: {
                                              [L.nk]: I.h.csrfToken
                                          }
                                      })
                                  }
                                  ))
                              }(F)
                          } catch (t) {
                              e = {
                                  status_code: -1
                              }
                          }
                          const {status_code: t, status_msg: i, log_pb: s={}, is_digg: a} = e;
                          if (2150 === t || 2210 === t) {
                              const e = (0,
                              O.T)();
                              i && h.F.open({
                                  content: e(i),
                                  duration: 3,
                                  widthType: "half"
                              })
                          }
                          let c = {};
                          _ && (c = (0,
                          p.n5)({
                              ad_info: _,
                              play_mode: null !== (n = U.play_mode) && void 0 !== n ? n : "one_column"
                          })),
                          v.z.handleLikeVideoResult(Object.assign(Object.assign(Object.assign({}, U), c), {
                              group_id: d.id,
                              author_id: null !== (o = null == u ? void 0 : u.id) && void 0 !== o ? o : "",
                              log_pb: s,
                              enter_method: T,
                              poi_id: null == b ? void 0 : b.id,
                              aweme_type: y ? 150 : 0,
                              pic_cnt: null === (r = null == y ? void 0 : y.images) || void 0 === r ? void 0 : r.length,
                              is_sub_only_video: w ? 1 : 0
                          }), F.type),
                          0 !== t || a === F.type ? setTimeout(( () => this.setLike({
                              id: d.id,
                              liked: m,
                              count: E
                          })), 3e3) : 1 === F.type && this.addMlModelTrainData({
                              id: d.id,
                              action: "like"
                          })
                      } catch (e) {}
              }
              ))
          },
          postRepostVideo(t) {
              var i, s;
              return x(this, void 0, void 0, (function*() {
                  const n = (0,
                  O.T)()
                    , o = e(C)[t.id]
                    , {user: r} = (0,
                  c.x)();
                  if (!o || !r)
                      return;
                  const {statsV2: a, repostList: l} = o
                    , {id: u, playMode: p, playlistId: v} = t
                    , g = (null !== (i = null == l ? void 0 : l.findIndex((e => e.secUid === r.secUid))) && void 0 !== i ? i : -1) >= 0
                    , m = Number(null !== (s = null == a ? void 0 : a.repostCount) && void 0 !== s ? s : 0)
                    , b = !g;
                  try {
                      this.prependRepost({
                          id: u,
                          reposted: b,
                          currentUser: r,
                          count: g ? Math.max(0, m - 1) : m + 1
                      });
                      const e = {
                          page_name: d.f.commonParams.page_name,
                          group_id: u,
                          play_mode: p,
                          playlist_id: v
                      };
                      let t;
                      try {
                          const i = {
                              item_id: u
                          };
                          b ? (d.f.sendEvent("click_repost", e),
                          ({status_code: t} = yield function(e) {
                              return P(this, void 0, void 0, (function*() {
                                  return I.h.post("/tiktok/v1/upvote/publish", {
                                      query: e,
                                      baseUrlType: 2
                                  })
                              }
                              ))
                          }(i))) : (d.f.sendEvent("click_repost_remove", e),
                          ({status_code: t} = yield function(e) {
                              return P(this, void 0, void 0, (function*() {
                                  return I.h.post("/tiktok/v1/upvote/delete", {
                                      query: e,
                                      baseUrlType: 2
                                  })
                              }
                              ))
                          }(i)))
                      } catch (e) {
                          t = -1
                      }
                      h.F.destroy();
                      let i = b ? "pcWeb_reposted_toast" : "pcWeb_repostRemoved_toast";
                      0 !== t ? (i = "Sorry, something wrong with the server, please try again.",
                      setTimeout(( () => this.prependRepost({
                          id: u,
                          reposted: g,
                          currentUser: r,
                          count: m
                      })), 3e3)) : b ? (d.f.sendEvent("repost_success", e),
                      this.addMlModelTrainData({
                          id: o.id,
                          action: "repost"
                      })) : d.f.sendEvent("repost_remove_success", e),
                      h.F.open({
                          content: n(i),
                          duration: 3,
                          widthType: "half",
                          getContainer: f.M,
                          getContainerPosition: "fixed"
                      })
                  } catch (e) {}
              }
              ))
          },
          addMlModelTrainData(t) {
              var i;
              return x(this, void 0, void 0, (function*() {
                  const {id: s, action: n, isPreview: o} = t
                    , r = e(C);
                  if (s && r[s] && !(null === (i = r[s]) || void 0 === i ? void 0 : i.liveRoomInfo))
                      return (0,
                      j.xt)().addTrainData({
                          item: r[s],
                          action: n,
                          isPreview: o
                      })
              }
              ))
          },
          postDislikeVideo(t) {
              return x(this, void 0, void 0, (function*() {
                  const i = e(C)
                    , {id: s, author_id: n, play_mode: o} = t
                    , r = i[s]
                    , a = null == r ? void 0 : r.ad_info;
                  let c = {};
                  a && (c = (0,
                  p.n5)({
                      ad_info: a,
                      play_mode: o
                  }),
                  c.refer = g.Hq.Button),
                  m.V.handleClickDislike(Object.assign({
                      group_id: s,
                      author_id: n,
                      play_mode: o
                  }, c));
                  const l = (0,
                  O.T)();
                  h.F.open({
                      content: l("webapp_forYoufeed_videoRemoved_toast"),
                      duration: 3,
                      widthType: "half",
                      getContainer: f.M,
                      getContainerPosition: "fixed"
                  });
                  const d = {
                      item_id: s,
                      item_author_id: n
                  };
                  try {
                      try {
                          yield function(e) {
                              return P(this, void 0, void 0, (function*() {
                                  return I.h.post("/api/dislike/item/", {
                                      query: e,
                                      baseUrlType: 2,
                                      headers: {
                                          [L.nk]: I.h.csrfToken
                                      }
                                  })
                              }
                              ))
                          }(d)
                      } catch (e) {}
                      this.addMlModelTrainData({
                          id: t.id,
                          action: "dislike"
                      })
                  } catch (e) {}
              }
              ))
          },
          checkItemValidation(e) {
              return x(this, void 0, void 0, (function*() {
                  const t = {
                      itemIds: e
                  };
                  try {
                      return yield function(e) {
                          return P(this, void 0, void 0, (function*() {
                              return I.h.get("/api/item/availability/", {
                                  query: e,
                                  baseUrlType: 2
                              })
                          }
                          ))
                      }(t)
                  } catch (e) {}
              }
              ))
          },
          setItemPrivateState(i) {
              const {id: s, visibility: n} = i
                , o = e(C)
                , r = o[s];
              if (!r)
                  return;
              const a = Object.assign(Object.assign({}, r), {
                  forFriend: "3" === n,
                  secret: "2" === n
              });
              t(C, Object.assign(Object.assign({}, o), {
                  [s]: a
              }))
          },
          setDeleteVideo(e) {
              t(C, (t => r()(t, e)))
          },
          getStaticItem: t => e(C)[t]
      })))
  }
  ,
  14280: (e, t, i) => {
      "use strict";
      i.d(t, {
          P: () => s
      });
      const s = new class {
          constructor() {
              this.listeners = {}
          }
          on(e, t) {
              this.listeners[e] || (this.listeners[e] = []),
              this.listeners[e].push(t)
          }
          emit(e, ...t) {
              const i = this.listeners[e];
              i && i.forEach((e => {
                  e(...t)
              }
              ))
          }
          off(e, t) {
              const i = this.listeners[e];
              i && (this.listeners[e] = i.filter((e => e !== t)))
          }
      }
  }
  ,
  243265: (e, t, i) => {
      "use strict";
      i.d(t, {
          zI: () => c
      });
      var s = i(669872)
        , n = i(831054)
        , o = i(713191);
      const r = "/node-webapp/api/common-app-context";
      let a;
      function c(e) {
          const t = (0,
          o.YI)(n.Ow);
          return t ? Promise.resolve(Object.assign(Object.assign({}, t), {
              statusCode: 0
          })) : a || (a = fetch((0,
          s.stringifyUrl)({
              url: r,
              query: {
                  lang: e
              }
          })).then((e => e.json())),
          a)
      }
  }
  ,
  255504: (e, t, i) => {
      "use strict";
      i.d(t, {
          DV: () => c,
          M4: () => n,
          t$: () => r
      });
      var s = i(893768);
      i(445372);
      const n = 35
        , o = {
          recommendItemList: void 0,
          userPlayList: void 0,
          userPostList: void 0,
          poiDetail: void 0,
          poiCategory0: void 0,
          poiCategory1: void 0,
          poiCategory2: void 0,
          relatedKeywords: void 0,
          kapRelatedKeywords: void 0,
          kapProductList: void 0,
          linkerStrategy: void 0,
          exploreItemList: void 0,
          trendingMediaVideoList: void 0,
          trendingPublicVideoList: void 0
      };
      function r(e) {
          const t = o[e];
          return t && (o[e] = void 0),
          t
      }
      const a = "$PREFETCH_CACHE";
      function c(e) {
          var t, i, n, o;
          const r = null !== (t = window[a]) && void 0 !== t ? t : {};
          let c;
          return window[a] = r,
          (null === (i = r[e]) || void 0 === i ? void 0 : i.used) || (c = null === (o = null === (n = r[e]) || void 0 === n ? void 0 : n.request) || void 0 === o ? void 0 : o.then((e => (0,
          s.P)(e).catch((e => {
              if (e instanceof Response) {
                  const t = {
                      status: e.status,
                      url: e.url,
                      logId: e.headers.get("x-tt-logid"),
                      bdturingVerify: e.headers.get("bdturing-verify")
                  };
                  throw new Error(JSON.stringify(t))
              }
              throw e
          }
          ))))),
          r[e] = {
              used: !0,
              result: c
          },
          c
      }
  }
  ,
  2756: (e, t, i) => {
      "use strict";
      i.d(t, {
          Ni: () => n
      });
      const s = {};
      function n(e) {
          const t = s[e];
          return t && (s[e] = void 0),
          t
      }
  }
  ,
  1114: (e, t, i) => {
      "use strict";
      i.d(t, {
          B: () => r
      });
      var s = i(465622)
        , n = i(298281)
        , o = i(122616);
      const r = () => {
          const {userAgent: e} = (0,
          n.L$)((0,
          o.W)(( () => ["userAgent"]), []))
            , t = (null == e ? void 0 : e.includes("tiktok")) && (null == e ? void 0 : e.includes("TTElectron"))
            , i = t && (null == e ? void 0 : e.includes("osName/Mac"))
            , r = t && !i
            , [a,c] = (0,
          s.useState)(t)
            , [l,d] = (0,
          s.useState)(i)
            , [u,p] = (0,
          s.useState)(r);
          return (0,
          s.useEffect)(( () => {
              const {isElectron: e, osVersion: t=""} = (0,
              n.L$)(window.TTE_ENV)
                , i = t.includes("Mac OS");
              c(e),
              d(e && i),
              p(e && !i)
          }
          ), []),
          {
              isElectronApp: a,
              isMacElectronApp: l,
              isWinElectronApp: u
          }
      }
  }
  ,
  352528: (e, t, i) => {
      "use strict";
      i.d(t, {
          s: () => g,
          Y: () => m
      });
      var s = i(465622)
        , n = i(358677)
        , o = i(748215)
        , r = i(965662)
        , a = i(12827)
        , c = i.n(a)
        , l = i(298281)
        , d = i(122616)
        , u = i(293122);
      function p(e) {
          let t = [];
          if (e) {
              const i = e;
              t = c()(i) ? i : [i]
          }
          return t.includes(o.k)
      }
      var v = i(135999);
      const g = (e="Webapp") => {
          const {isSharing: t, isCoinLite: i, isCoinPro: n} = function() {
              const {region: e} = (0,
              l.L$)((0,
              d.W)(( () => ["region"]), []))
                , {coinLiteConfig: t, isIOS: i, queryData: s} = (0,
              l.L$)((0,
              u.U)(( () => ["coinLiteConfig", "isIOS", "queryData"]), []))
                , {share_app_id: n, _r: o} = null != s ? s : {}
                , a = "1" === o
                , c = function(e) {
                  var t, i;
                  const {share_app_id: s, region: n, os: o="android", coinLiteConfig: a} = e
                    , c = null !== (i = null === (t = null == a ? void 0 : a.coinLiteRegion) || void 0 === t ? void 0 : t[o]) && void 0 !== i ? i : r.tt
                    , l = !!n && c.map((e => {
                      var t;
                      return null === (t = null == e ? void 0 : e.toUpperCase) || void 0 === t ? void 0 : t.call(e)
                  }
                  )).includes(n);
                  return p(s) && l
              }({
                  share_app_id: n,
                  region: e,
                  os: i ? "ios" : "android",
                  coinLiteConfig: t
              })
                , v = function(e) {
                  var t, i;
                  const {share_app_id: s, region: n, os: o="android", coinLiteConfig: a} = e
                    , c = null !== (i = null === (t = null == a ? void 0 : a.coinProRegion) || void 0 === t ? void 0 : t[o]) && void 0 !== i ? i : r.G
                    , l = !!n && c.map((e => {
                      var t;
                      return null === (t = null == e ? void 0 : e.toUpperCase) || void 0 === t ? void 0 : t.call(e)
                  }
                  )).includes(n);
                  return p(s) && l
              }({
                  share_app_id: n,
                  region: e,
                  os: i ? "ios" : "android",
                  coinLiteConfig: t
              });
              return {
                  isSharing: a,
                  isCoinLite: c,
                  isCoinPro: v,
                  isCoin: c || v
              }
          }()
            , {t: o} = (0,
          s.useContext)(v.Ss);
          let a = o;
          return t && i ? a = function(e, t=[]) {
              return function(i, s, n) {
                  return t.includes(i) ? e(i, s, n) : e(i, s, n).replace(/(TikTok( Lite)?\b)/g, (function(e, t, i) {
                      return i ? e : `${t} Lite`
                  }
                  ))
              }
          }(o) : t && n && (a = function(e, t=[]) {
              return function(i, s, n) {
                  return t.includes(i) ? e(i, s, n) : e(i, s, n).replace(/(TikTok( Pro)?\b)/g, (function(e, t, i) {
                      return i ? e : `${t} Pro`
                  }
                  ))
              }
          }(o)),
          m([e], t),
          (0,
          s.useCallback)(( (t, i, s) => void 0 === t || "string" == typeof t && !t.length ? s : a(t, Object.assign({
              ns: e
          }, i), s)), [e, a])
      }
      ;
      function m(e, t=!1) {
          t && (0,
          n.qm)();
          const {loadStarling: i, hasLoaded: o} = (0,
          s.useContext)(v.Ss)
            , [r,a] = (0,
          s.useState)((null != e ? e : []).reduce(( (e, t) => e && o(t)), !0));
          return (0,
          s.useEffect)(( () => {
              e && Promise.all(e.map((e => {
                  if (o(e))
                      return !0;
                  const t = (0,
                  n.qm)();
                  return i(e, t)
              }
              ))).then((e => {
                  a(e.reduce(( (e, t) => e && t), !0))
              }
              ))
          }
          ), []),
          r
      }
  }
  ,
  763126: (e, t, i) => {
      "use strict";
      i.d(t, {
          E3: () => v
      });
      var s = i(611379)
        , n = i(327334)
        , o = i(465622)
        , r = i(669227)
        , a = i(135999)
        , c = i(358677)
        , l = i(385490)
        , d = i(356936);
      const u = {
          MT_Analytics: null,
          WebApp_Login: null,
          MT_Reflow: null,
          Webapp: null,
          poi_web: null,
          Webapp_recharge_referral: null,
          kick_user_frontier: null
      }
        , p = {
          MT_Analytics: null,
          WebApp_Login: null,
          MT_Reflow: null,
          Webapp: null,
          poi_web: null,
          Webapp_recharge_referral: null,
          kick_user_frontier: null
      }
        , v = ({children: e, t, initialNamespaces: i, translations: v=u}) => {
          const [g,m,h] = (0,
          l.Dh)(a.rv, v)
            , f = (0,
          o.useRef)(g)
            , [b] = (0,
          o.useState)((0,
          c.qm)())
            , y = (0,
          o.useCallback)((e => Boolean(e && f.current[e])), [])
            , w = (0,
          o.useCallback)(( (e, t) => (0,
          s.sH)(void 0, void 0, void 0, (function*() {
              try {
                  if (!f.current[e]) {
                      p[e] || (p[e] = (0,
                      d.gW)(e, t));
                      const i = yield p[e];
                      r.Ay.addResourceBundle(b, e, i, !0, !0),
                      f.current = Object.assign(Object.assign({}, f.current), {
                          [e]: i
                      })
                  }
                  return !0
              } catch (e) {
                  return console.error("[I18nContext] load starling error", e),
                  !1
              }
          }
          ))), [m])
            , _ = (0,
          o.useMemo)(( () => null != t ? t : r.Ay.t), [t])
            , k = (0,
          o.useMemo)(( () => ({
              t: _,
              hasLoaded: y,
              loadStarling: w,
              initialNamespaces: i,
              lang: b
          })), [y, i, b, w, _]);
          return (0,
          d.EK)(g, b),
          (0,
          n.jsxs)(a.Ss.Provider, {
              value: k,
              children: [e, (0,
              n.jsx)(h, {
                  data: g
              })]
          })
      }
  }
  ,
  356936: (e, t, i) => {
      "use strict";
      i.d(t, {
          gW: () => m,
          EK: () => h,
          Dy: () => u
      });
      var s = i(611379)
        , n = i(522273)
        , o = i.n(n)
        , r = i(195141)
        , a = i(669227)
        , c = i(105726)
        , l = i(848420);
      const d = {
          isPhoenix: "object" == typeof window && "www.tiktok.in" === window.location.host,
          textReplace: "undefined" == typeof window ? null : new (i(359470).A)({
              condition: {
                  APPID: "8660"
              },
              tccUrl: "https://sf-tcc-config.tiktokcdn.com/obj/tcc-config-web-alisg/tcc-v2-data-webcast.starling.proxy-default"
          }),
          loadTcc() {
              return this.isPhoenix ? this.textReplace.getWithCache("webapp-phoenix-tcc") : Promise.resolve()
          },
          getPlugin: e => ({
              type: "postProcessor",
              name: "text-replace-plugin",
              process: (t, i) => d.textReplace.processSync(t, e, i)
          }),
          getProcessName() {
              return this.isPhoenix ? ["text-replace-plugin"] : void 0
          }
      };
      function u(e, t, i) {
          const s = [];
          return new Promise(( (n, o) => {
              d.loadTcc().then((r => {
                  (d.isPhoenix ? a.Ay.use(d.getPlugin(r)) : a.Ay).init({
                      debug: !1,
                      fallbackLng: ["en"],
                      initImmediate: !0,
                      defaultNS: null != t ? t : "Webapp",
                      postProcess: d.getProcessName(),
                      saveMissing: !0,
                      missingKeyHandler: (e, t, n, o) => {
                          s.includes(n) || (console.warn("[i18n] missing key", e, t, n, o),
                          s.push(n)),
                          i && i(t, n, o)
                      }
                  }, (e => {
                      e ? o(e) : n()
                  }
                  )),
                  a.Ay.setLang(e)
              }
              ))
          }
          ))
      }
      const p = ["Webapp_recharge_referral"]
        , v = ["kick_user_frontier"];
      function g(e) {
          return p.includes(e) ? c.Uy : v.includes(e) ? c.AY : c.Lq
      }
      function m(e, t, i=!1) {
          return (0,
          s.sH)(this, void 0, void 0, (function*() {
              const {starling: s, tea: n} = (0,
              l.V)();
              return new r.A({
                  namespace: e,
                  api_key: g(e),
                  locale: t,
                  zoneHost: s,
                  timeout: 1e4,
                  TEAChannelDomain: n,
                  lazyUpdate: i
              }).load()
          }
          ))
      }
      const h = o()(( (e, t) => {
          Object.entries(e).forEach(( ([e,i]) => {
              a.Ay.addResourceBundle(t, e, i, !0, !0)
          }
          ))
      }
      ))
  }
  ,
  166315: (e, t, i) => {
      "use strict";
      i.d(t, {
          $p: () => ne,
          FJ: () => Z,
          Fj: () => P,
          Iy: () => C,
          Iz: () => k,
          K8: () => L,
          Ke: () => A,
          M5: () => ie,
          RR: () => H,
          Tc: () => B,
          U0: () => N,
          b8: () => ee,
          bc: () => oe,
          cj: () => E,
          eD: () => G,
          fJ: () => v,
          gq: () => I,
          ie: () => V,
          j: () => z,
          mQ: () => Q,
          nq: () => T,
          p5: () => $,
          pz: () => F,
          qd: () => x,
          sM: () => W,
          sn: () => O,
          tO: () => j,
          xj: () => re,
          yw: () => ae
      });
      var s = i(263161)
        , n = i(423298)
        , o = i(213732)
        , r = i(584770)
        , a = i(240502)
        , c = i(653814);
      const {getPureLivePath: l, getPureMusicPath: d, getPureTagPath: u, getPureStickerPath: p, getPureUserPath: v, getPureVideoPath: g, getPureQuestionPath: m} = c.h
        , {getPureUniqueId: h, hasIllegalText: f, isPureNumber: b, isRealUniqueId: y, purifyMusicName: w, purifyPlainText: _} = c.A;
      function k(e) {
          const t = e.replace(/\/$/, "");
          return e === n.OZ.home || n.OZ.foryouWithLang.includes(t)
      }
      function j(e) {
          return e.replace(/\/$/, "") === n.OZ.foryou || k(e)
      }
      function O(e) {
          if (j(e))
              return "fyp";
          if (e.match("/following"))
              return "following";
          if (e.match("/friends"))
              return "friend";
          if (e.match("/setting"))
              return "setting";
          if (e.match("/search"))
              return "search";
          if (e.match("/message"))
              return "message";
          if (e.match("/video"))
              return "video";
          if (e.match("/@"))
              return e.match("/live") ? "" : "user";
          if (e.match("/report"))
              return "report";
          if (e.match("/music"))
              return "music";
          if (e.match("/effect"))
              return "effect";
          if (e.match("/tag"))
              return "hashtag";
          if (e.match(/\/discover\/.+/))
              return "expansion";
          if (e.match("/discover"))
              return "discover";
          if (e.match("/live"))
              return "";
          if (S(e)) {
              const t = (0,
              s.B6)(e, {
                  path: n.OZ.topics,
                  exact: !0
              });
              return `topics_${null == t ? void 0 : t.params.name}`
          }
          return e.match("/profile") ? "profile" : e.match("/inbox") ? "inbox" : e.match("/feedback") ? "feedback" : ""
      }
      function S(e) {
          return Boolean((0,
          s.B6)(e, {
              path: n.OZ.topics,
              exact: !0
          }))
      }
      function I(e) {
          return e === n.OZ.following
      }
      function L(e) {
          return e === n.OZ.friends
      }
      function P(e) {
          return /^\/@[^/]*\/video\/\d+/.test(e) || /^\/@[^/]*\/photo\/\d+/.test(e)
      }
      function x(e) {
          return /^\/@.+\/live/.test(e)
      }
      function C(e) {
          return /^\/music\/.+/.test(e)
      }
      function T(e) {
          return /^\/effect\/.+/.test(e)
      }
      function A(e) {
          return /^\/tag\/.+/.test(e)
      }
      function U(e) {
          return /^\/@.*\/collection\/.+/.test(e)
      }
      function E(e) {
          return !/^\/@.+\/live/.test(e) && !/^\/@.*\/video\/\d+/.test(e) && /^\/@.+/.test(e) && !/^\/@.*\/collection\/.+/.test(e)
      }
      function F(e) {
          var t;
          return "expansion" === (null === (t = (0,
          o.fq)(e)) || void 0 === t ? void 0 : t.name)
      }
      function M(e) {
          return e === n.OZ.searchHome
      }
      function V(e) {
          return e === n.OZ.searchUser
      }
      function R(e) {
          return e === n.OZ.searchVideo
      }
      function D(e) {
          return e === n.OZ.searchLive
      }
      function q(e) {
          return /^\/question\/.+/.test(e)
      }
      function B(e) {
          return /^\/messages/.test(e)
      }
      function N(e) {
          const t = [r.vI.liveDiscover, r.vI.liveFollowing, r.vI.liveGaming, r.vI.liveSingleGaming, r.vI.liveEventAggregation, r.vI.liveLifestyle, r.vI.liveCategory, r.vI.liveCategoryGaming, r.vI.liveCategoryLifestyle, r.vI.liveCategorySingleGaming, r.vI.liveCategorySingleLifeStyle, r.vI.liveCategorySingleAction];
          return !!(0,
          s.B6)(e, {
              path: t,
              exact: !0
          })
      }
      function z(e) {
          return /live\/event\/\d/.test(e)
      }
      function H(e) {
          return /live\/event/.test(e)
      }
      function $(e) {
          return e.startsWith("/live") || x(e)
      }
      function W(e) {
          return e.startsWith("/coin")
      }
      function K(e) {
          return Boolean((0,
          s.B6)(e, {
              path: n.OZ.discover,
              exact: !0
          }))
      }
      function G(e) {
          return Boolean((0,
          s.B6)(e, {
              path: n.OZ.explore,
              exact: !0
          }))
      }
      function J(e) {
          return /^\/place\/.+/.test(e) || /^\/travel\/.+/.test(e)
      }
      function Q(e) {
          return /^\/login/.test(e)
      }
      function Z(e) {
          return /^\/signup/.test(e)
      }
      function Y(e) {
          var t;
          return (null === (t = (0,
          n.jN)(e)) || void 0 === t ? void 0 : t.name) === n.eU.channel
      }
      function X(e) {
          var t;
          return (null === (t = (0,
          n.jN)(e)) || void 0 === t ? void 0 : t.name) === n.eU.videoPlaylist
      }
      function ee(e) {
          return e.startsWith(n.OZ.setting)
      }
      const te = {
          5: j,
          11: I,
          20: L,
          0: P,
          4: C,
          129: T,
          3: A,
          121: U,
          1: E,
          106: V,
          107: R,
          123: D,
          105: M,
          16: q,
          113: S,
          13: B,
          103: K,
          104: F,
          122: Y,
          108: X,
          18: J
      };
      function ie(e) {
          var t;
          return null !== (t = Object.keys(te).find((t => te[t](e)))) && void 0 !== t ? t : 5
      }
      const se = e => "business" === new URLSearchParams(e).get("scene");
      function ne(e) {
          var t, i;
          return ["download", "downloadWithLang"].includes(null !== (i = null === (t = (0,
          n.jN)(e)) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : "")
      }
      function oe(e, t) {
          return (!t || !se(t)) && (A(e) || S(e) || I(e) || L(e) || j(e) || C(e) || T(e) || P(e) || E(e) && !function(e) {
              return /^\/@.+\/playlist\/.+/.test(e)
          }(e) || K(e) || M(e) || V(e) || R(e) || D(e) || function(e) {
              return e === n.OZ.searchReminder
          }(e) || q(e) || J(e) || U(e) || G(e) || Y(e) || function(e) {
              var t;
              return (null === (t = (0,
              n.jN)(e)) || void 0 === t ? void 0 : t.name) === n.eU.find
          }(e) || X(e) || function(e) {
              return e.startsWith("/404")
          }(e) || function(e) {
              return e.startsWith("/feedback")
          }(e) || B(e) || ee(e) || F(e) || function(e) {
              return e.startsWith("/upload")
          }(e) || N(e) || x(e) || function(e) {
              return e.startsWith("/live/popout/")
          }(e) || z(e))
      }
      function re(e) {
          return N(e) || x(e) || z(e)
      }
      function ae({uniqueId: e, secUid: t, itemId: i, isPhoto: s}) {
          const n = c.A.getPureUniqueId({
              uniqueId: e,
              secUid: t
          });
          return n && i ? s ? a.Lj.photo({
              uniqueId: n,
              id: i
          }) : a.Lj.video({
              uniqueId: n,
              id: i
          }) : ""
      }
  }
  ,
  164596: (e, t, i) => {
      "use strict";
      i.d(t, {
          J: () => h,
          h: () => w
      });
      var s = i(611379)
        , n = i(783415)
        , o = i(288555)
        , r = i(950374)
        , a = i(41575)
        , c = i(243265)
        , l = i(166315)
        , d = i(571889)
        , u = i(315092);
      const p = new Set
        , v = [];
      let g;
      const m = () => {
          var e;
          if (g && v.length) {
              for (const t of v)
                  try {
                      null === (e = null == g ? void 0 : g.emitEvent) || void 0 === e || e.call(g, "sdkLoad", {
                          duration: t.duration
                      }, {
                          name: t.name
                      })
                  } catch (e) {
                      console.error("flushSdkLog error", e)
                  }
              v.splice(0, v.length)
          }
      }
      ;
      function h(e) {
          g = e,
          m()
      }
      function f(e) {
          return (0,
          s.sH)(this, void 0, void 0, (function*() {
              if (d.Qf.loaded)
                  return;
              const {url: t, method: i, needSign: s} = e;
              let n = Boolean(u.U8.some((e => Boolean(t.match(new RegExp(e))))) || t.startsWith("/") && !t.startsWith("//") && "GET" === i && !u.zv.some((e => Boolean(t.match(new RegExp(e))))));
              if (n = n && !s,
              !n && (yield d.Qf.load(),
              e.requireSecSdk && !d.Qf.sdks[1].initialized))
                  throw new Error("secsdk load error")
          }
          ))
      }
      function b(e) {
          return (0,
          s.sH)(this, void 0, void 0, (function*() {
              if (d.er.loaded)
                  return;
              const {url: t, method: i} = e;
              "POST" === i && u.VF.some((e => Boolean(t.match(new RegExp(e))))) && (yield d.er.load())
          }
          ))
      }
      function y(e) {
          return (0,
          s.sH)(this, void 0, void 0, (function*() {
              const {url: t} = e
                , i = d.Fs.some((e => Boolean(t.match(new RegExp(e)))));
              !d.ZC.loaded && i && (yield d.ZC.load())
          }
          ))
      }
      const w = (0,
      n.U)("fetch@tiktok/webapp-common", ( () => new o.F({
          getBizContextAsync: a.h,
          getAppContextAsync: c.zI,
          getExtraParams: e => (0,
          s.sH)(void 0, void 0, void 0, (function*() {
              var t, i, s;
              const n = yield(0,
              a.h)();
              let o = {};
              return (null === (t = null == n ? void 0 : n.liveCommonConfig) || void 0 === t ? void 0 : t.regionEntry) && [4, 5, 9].includes(null !== (i = e.baseUrlType) && void 0 !== i ? i : 0) && (o = {
                  channel: "local_test",
                  carrier_region: null !== (s = localStorage.getItem("LIVE_OFFICE_REGION")) && void 0 !== s ? s : "TW"
              }),
              Object.assign(Object.assign({}, o), {
                  from_page: (0,
                  l.sn)(location.pathname)
              })
          }
          )),
          beforeHandleQuery: e => (0,
          s.sH)(void 0, void 0, void 0, (function*() {
              yield Promise.all([f(e), b(e), y(e)]).catch((e => {
                  throw e
              }
              ));
              try {
                  [d.ZC, d.Qf, d.er].forEach((e => {
                      e.time && e.time.forEach((e => (e => {
                          try {
                              p.has(e.name) || (p.add(e.name),
                              v.push(e)),
                              m()
                          } catch (e) {
                              console.error("sdkLogger error", e)
                          }
                      }
                      )(e)))
                  }
                  ))
              } catch (e) {
                  console.error("sdkLogger error", e)
              }
              return e
          }
          )),
          beforeFetch: (e, t) => {
              r.f.sendEvent("api_request", {
                  api_path: e,
                  method: t
              })
          }
          ,
          onJsonResponse: e => (0,
          s.sH)(void 0, void 0, void 0, (function*() {
              const {response: t, json: i} = e
                , s = t.headers.get("x-tt-logid");
              return i.__headers = {
                  url: t.url,
                  log_id: s
              },
              i
          }
          )),
          reportFn: () => g
      })))
  }
  ,
  202070: (e, t, i) => {
      "use strict";
      i.d(t, {
          p: () => d
      });
      var s = i(611379)
        , n = i(403057)
        , o = i(719994)
        , r = i.n(o)
        , a = i(90245)
        , c = i(164596);
      function l(e) {
          return (t, i) => new a.c((s => {
              var n;
              const o = "AbortController"in window ? new AbortController : {
                  signal: {
                      aborted: !1
                  },
                  abort() {
                      this.signal.aborted = !0
                  }
              };
              return c.h[e](t, r()(i, {
                  signal: null !== (n = null == i ? void 0 : i.signal) && void 0 !== n ? n : o.signal
              })).then((e => {
                  s.next(e),
                  s.complete()
              }
              )).catch((e => {
                  s.error(e)
              }
              )),
              () => {
                  o.signal.aborted || o.abort()
              }
          }
          ))
      }
      let d = class {
          constructor() {
              this.get = l("get"),
              this.post = l("post"),
              this.delete = l("delete")
          }
          get csrfToken() {
              return c.h.csrfToken
          }
      }
      ;
      d = (0,
      s.Cg)([(0,
      n._)()], d)
  }
  ,
  571889: (e, t, i) => {
      "use strict";
      i.d(t, {
          er: () => y,
          Qf: () => b,
          ZC: () => j,
          Fs: () => k
      });
      var s = i(611379)
        , n = i(358677)
        , o = i(870658)
        , r = i(243265)
        , a = i(315092)
        , c = i(291277)
        , l = i(41575);
      class d {
          constructor() {
              this.initialized = !1,
              this.executionTime = 0,
              this.name = ""
          }
          load() {
              if (this.initialized)
                  return Promise.resolve();
              if (this.promise)
                  return this.promise;
              const {promise: e, cleanup: t} = function() {
                  let e;
                  return {
                      promise: new Promise((t => {
                          e = window.setTimeout(( () => {
                              t(null)
                          }
                          ), 1e4)
                      }
                      )),
                      cleanup: () => {
                          clearTimeout(e)
                      }
                  }
              }();
              return this.promise = Promise.race([e.then(( () => {
                  this.promise = void 0
              }
              )), this.loadSDK()]).then(( () => {
                  t()
              }
              )).catch(( () => {
                  t(),
                  this.promise = void 0
              }
              )),
              this.promise
          }
      }
      class u {
          constructor(e) {
              this.promise = null,
              this.keyword = e
          }
          get(e) {
              return this.promise || (void 0 === this.hasScript && (this.hasScript = (0,
              o.yw)(e)),
              this.hasScript ? this.promise = (t = this.keyword,
              new Promise((e => {
                  const i = () => {
                      window.requestAnimationFrame(( () => {
                          window[t] ? e(null) : i()
                      }
                      ))
                  }
                  ;
                  i()
              }
              ))) : this.promise = (0,
              o.$U)(e).catch((e => {
                  throw this.promise = null,
                  e
              }
              ))),
              this.promise;
              var t
          }
      }
      var p = i(329734);
      const v = new u("byted_acrawler")
        , g = {
          "Singapore-Central": "sg-tiktok",
          "US-East": "va-tiktok",
          "US-EastRed": "gcp-tiktok",
          "US-TTP": "ttp",
          "US-TTP2": "ttp2",
          "EU-TTP": "eu-ttp",
          "EU-TTP2": "eu-ttp2"
      }
        , m = "MSSDK_INITIALIZED"
        , h = new u("secsdk")
        , f = {
          "Singapore-Central": "sg",
          "US-East": "va",
          "US-EastRed": "va",
          "US-TTP": "oci",
          "US-TTP2": "oci",
          "EU-TTP": "eu",
          "EU-TTP2": "eu"
      }
        , b = {
          sdks: [new class extends d {
              constructor(e, t) {
                  super(),
                  this.name = "acrawlersdk",
                  this.getContextProps = e,
                  this.configs = t
              }
              loadSDK() {
                  const e = performance.now();
                  return Promise.all([this.getContextProps(), v.get({
                      moduleId: (0,
                      o.BJ)()
                  })]).then(( ([{appId: t, user: i, wid: s, idc: n, vregion: o=""}]) => {
                      var r;
                      if (window[m])
                          return void (this.initialized = !0);
                      window[m] = !0,
                      this.initialized = !0;
                      const a = 1233 === t
                        , l = void 0 !== n ? (0,
                      c.v)(n) : o
                        , d = null !== (r = g[l]) && void 0 !== r ? r : a ? "va-tiktok" : "sg-tiktok";
                      this.configs.forEach((e => {
                          var t;
                          window.byted_acrawler.init({
                              aid: e.aid,
                              dfp: e.dfp,
                              boe: e.boe,
                              intercept: e.intercept,
                              enablePathList: e.enablePathList,
                              region: d,
                              mode: (0,
                              p.n)({
                                  isVA: a,
                                  isLogin: Boolean(i),
                                  isFTC: null !== (t = null == i ? void 0 : i.ftcUser) && void 0 !== t && t,
                                  isHighRisk: e.isHighRisk
                              }),
                              isSDK: e.isSDK,
                              custom: {
                                  ttwid: s
                              }
                          })
                      }
                      )),
                      this.executionTime = performance.now() - e
                  }
                  ))
              }
          }
          (( () => Promise.all([(0,
          r.zI)((0,
          n.qm)()), (0,
          l.h)()]).then(( ([{appId: e, user: t, wid: i},{idc: s, vregion: n}]) => ({
              appId: e,
              user: t,
              idc: s,
              wid: i,
              vregion: n
          })))),a.TA), new class extends d {
              constructor(e) {
                  super(),
                  this.name = "secsdk",
                  this.getContextProps = e
              }
              loadSDK() {
                  const e = performance.now();
                  return this.getContextProps().then(( ({clusterRegion: e}) => {
                      const t = (0,
                      o.D9)(e);
                      return h.get({
                          moduleId: t
                      })
                  }
                  )).then(( () => {
                      this.initialized || (this.initialized = !0,
                      window.secsdk.csrf.setProtectedHost(a.sh),
                      this.executionTime = performance.now() - e)
                  }
                  ))
              }
          }
          (( () => (0,
          r.zI)((0,
          n.qm)())))],
          load: () => Promise.all(b.sdks.map((e => e.load()))),
          get loaded() {
              return this.sdks.reduce(( (e, {initialized: t}) => e && t), !0)
          },
          get time() {
              if (this.loaded)
                  return this.sdks.map(( ({executionTime: e, name: t}) => ({
                      duration: e,
                      name: t
                  })))
          }
      }
        , y = {
          sdks: [new class extends d {
              constructor(e) {
                  super(),
                  this.loadSDK = () => (0,
                  s.sH)(this, void 0, void 0, (function*() {
                      const e = performance.now();
                      if (this.initialized)
                          return;
                      const {csrf: t} = yield Promise.all([i.e(84641), i.e(49711), i.e(56759), i.e(12495), i.e(29168), i.e(81907), i.e(36288)]).then(i.t.bind(i, 856350, 23));
                      t.setProtectedHost(this.config),
                      this.executionTime = performance.now() - e,
                      this.initialized = !0
                  }
                  )),
                  this.name = "cthulhusdk",
                  this.config = e
              }
          }
          (a.kM)],
          load: () => Promise.all(y.sdks.map((e => e.load()))),
          get loaded() {
              return this.sdks.every(( ({initialized: e}) => e))
          },
          get time() {
              if (this.loaded)
                  return this.sdks.map(( ({executionTime: e, name: t}) => ({
                      duration: e,
                      name: t
                  })))
          }
      }
        , w = ["/passport/web/"]
        , _ = ["/v1/message/send", "/api/update/profile", "/api/v1/item/create/bulk", "/api/v1/web/project/post", "/api/commit/follow/user", "/api/commit/item/digg", "/api/comment/publish", "/api/comment/digg", "/api/item/collect", "/api/aweme/delete", "/tiktok/region/change/precheck/get/v1", "/webcast/room/enter", "/webcast/room/chat", "/webcast/room/share", "/webcast/gift/send", "/webcast/sub/contract/create", "/webcast/wallet_api/diamond_buy_external", "/webcast/wallet_api_tiktok/withdraw/v2", "/webcast/wallet_api/diamond_exchange/", "/webcast/user/relation/update", "/passport/web/"]
        , k = w.concat(_)
        , j = {
          sdks: [new class extends d {
              constructor(e, t) {
                  super(),
                  this.getContextProps = e,
                  this.name = "ztisdk",
                  this.configs = t
              }
              loadSDK() {
                  const e = performance.now();
                  return this.getContextProps().then(( ({appId: t, user: n, wid: o, vregion: r="", idc: a}) => (0,
                  s.sH)(this, void 0, void 0, (function*() {
                      var s;
                      if (this.initialized)
                          return;
                      const l = void 0 !== a ? (0,
                      c.v)(a) : r
                        , d = null !== (s = f[l]) && void 0 !== s ? s : "va"
                        , {SecureSDK: u} = yield Promise.all([i.e(43094), i.e(18433), i.e(91325), i.e(77586)]).then(i.bind(i, 661310));
                      yield u.init(d),
                      u.setRegion(d),
                      u.setConfig(Object.assign({
                          aid: t,
                          scene: "tt_fetch",
                          certType: "header",
                          signVersion: 2
                      }, this.configs)),
                      u.setLoginStatus(Boolean(n)),
                      u.setWebId(o, t),
                      u.setDisableCrossStorage(!0),
                      u.setDisableStorageSignData(!1),
                      u.setType({
                          initType: "pubKey",
                          signType: "pubKey"
                      }),
                      u.setStorageType("local"),
                      u.start(),
                      this.executionTime = performance.now() - e,
                      this.initialized = !0
                  }
                  ))))
              }
          }
          (( () => Promise.all([(0,
          r.zI)((0,
          n.qm)()), (0,
          l.h)()]).then(( ([{appId: e, user: t, wid: i, abTestVersion: s},{vregion: n, idc: o}]) => ({
              appId: e,
              user: t,
              wid: i,
              vregion: n,
              abTestVersion: s,
              idc: o
          })))),{
              providerPathList: w,
              consumerPathList: _
          })],
          load: () => Promise.all(j.sdks.map((e => e.load()))),
          get loaded() {
              return this.sdks.every(( ({initialized: e}) => e))
          },
          get time() {
              if (this.loaded)
                  return this.sdks.map(( ({executionTime: e, name: t}) => ({
                      duration: e,
                      name: t
                  })))
          }
      }
  }
  ,
  315092: (e, t, i) => {
      "use strict";
      i.d(t, {
          TA: () => p,
          U8: () => r,
          VF: () => h,
          kM: () => f,
          sh: () => u,
          zv: () => o
      });
      var s = i(269741)
        , n = i.n(s);
      const o = ["/node/share/", "/share/item/list", "/discover/render/undefined", "/share/item/explore/list", "/api/comment/list/", "/api/comment/list/reply/", "/api/commit/follow/user/", "/api/commit/item/digg/", "/aweme/v1/upload/image2/", "/api/notice/multi/", "/api/notice/count/", "/api/notice/digg/list/", "/api/user/following/request/list/", "/api/commit/follow/request/approve/", "/api/commit/follow/request/reject/", "/api/comment/digg/", "/api/comment/publish/", "/api/comment/delete/", "/api/sticker/item_list/", "/api/user/contact/list/", "/api/at/default/list/", "/api/comment/search/user/", "/web/aweme/v1/search/challengesug", "/web/aweme/v1/discover/search/", "/api/v1/item/create/", "/api/ba/business/suite/permission/list", "/api/search/user/full/", "/api/search/user/preview/", "/api/search/item/full/", "/api/search/general/full/", "/api/music/detail/", "/api/challenge/detail/", "/api/user/detail/", "/api/user/list/", "/api/item/detail/", "/api/question/detail/", "/api/question/item_list/", "/api/discover/challenge/", "/api/discover/user/", "/api/discover/music/", "/api/challenge/item_list/", "/api/music/item_list/", "/api/post/item_list/", "/api/favorite/item_list/", "/api/following/item_list/", "/api/recommend/item_list/", "/api/recommend/user/", "/api/recommend/embed_videos/", "/api/live/detail/", "/api/im/multi_user/", "/api/user/get/animation/", "/api/user/settings/", "/aweme/v1/music/list/", "/aweme/v1/adult/verify/get/accepted/id/types/", "/api/mix/detail", "/api/mix/item_list", "/api/uniqueid/check/", "/api/user/playlist/", "/api/reflow/item/detail/", "/api/reflow/user/detail/", "/api/reflow/recommend/item_list/", "/api/reflow/challenge/item_list/", "/api/reflow/post/item_list/", "/api/reflow/sticker/item_list/", "/api/reflow/playlist/item_list/", "/api/reflow/survey/detail/", "/api/reflow/repost/item_list/", "/api/impression/write/", "/api/user/set/animation/", "/api/aweme/set/react_duet_stitch/", "/api/aweme/modify/visibility/", "/api/aweme/delete/", "/api/schedule/aweme/delete/", "/passport/web/login_name/update/", "/api/update/profile/", "/api/commit/follow/request/approve/", "/api/commit/follow/request/reject/", "/api/commit/follow/user/", "/tiktok/v1/username/save_async/", "/api/ba/business/suite/account/off", "/api/ba/business/suite/account/quitcheck", "/api/playlist/create_with_items/", "/api/playlist/update/", "/api/playlist/modify_items/", "/api/item/collect", "/node/report/reasons", "/aweme/v1/aweme/feedback/", "/aweme/v2/aweme/feedback/", "/webcast.*", "/v1/message/send", "/v2/conversation/create", "/v1/voip/call", "/v1/conversation/add_participants", "/1/conversation/remove_participants", "/v1/conversation/update_participant", "/v1/conversation/set_setting_info", "/v1/conversation/get_setting_info", "/v1/conversation/upsert_core_ext_info", "/v1/conversation/upsert_settings_ext", "/v1/conversation/dissolve", "/v1/message/mark", "/v1/message/batch_unmark", "/v1/message/set_property", "/api-live/event/list", "/api-live/event/related-videos", "/api-live/event/detail", "/api-live/share/live", "/api-live/user/room", "/node-a/send/download_link", "/api/uniqueid/check/", "/api/v3/register/user/info/sync/", "/api/policy/notice/approve/", "/api/private_banner/ack/", "/api/privacy/agreement/record/agree/v1", "/api/v3/register/verification/age/", "/api/register/check/login/name/", "/api/user/detail/self/", "/passport/web/", "/shorten/", "/api/seo/kap/product_list/", "/bi/notification/reporter/record", "/api/repost/item_list"]
        , r = ["/passport/web/account/info/"]
        , a = [/^\/webcast\/diamond/, /^\/webcast\/wallet_api\/(?!fs\/)/, /^\/webcast\/recharge/, /^\/webcast\/wallet_api_tiktok\/notifycenter/, /^\/webcast\/wallet_api_tiktok\/payment/, /^\/webcast\/wallet_api_tiktok\/periodic_payout_onboarding/, /^\/webcast\/wallet_api_tiktok\/payout_onboarding_confirm/, /^\/webcast\/wallet_api_tiktok\/payment_instrument_bind_url/]
        , c = ["/webcast/api/money/kyc/v1/info/detail", "/webcast/api/money/kyc/v1/upload_file", "/webcast/api/compliance/kyc/v1/submission", "/webcast/room/chat/", "/webcast/room/create_info/", "/webcast/room/enter/", "/webcast/room/leave/", "/webcast/room/live_podcast/", "/webcast/room/ping/audience/", "/webcast/user/relation/update/", "/webcast/room/emote_chat/", "/webcast/room/share/", ...a, "/webcast/wallet_api_tiktok/payment/initialize_payment", "/webcast/wallet_api_tiktok/payment/initialize_agreement", "/webcast/wallet_api_tiktok/payment/payment_methods/primary/set", "/webcast/wallet_api_tiktok/payment/payment_methods/delete", "/webcast/wallet_api_tiktok/payment/payment_methods/link", "/webcast/wallet_api_tiktok/income_plus/tax/get_tax/", "/webcast/wallet_api_tiktok/income_plus/tax/create_tax/", "/webcast/wallet_api_tiktok/income_plus/tax/update_tax/", "/webcast/wallet_api_tiktok/income_plus/agreement/", "/webcast/wallet_api_tiktok/payout_onboarding_confirm/"]
        , l = [...a, "/webcast/wallet_api_tiktok/periodic_payout_onboarding/", "/webcast/wallet_api_tiktok/payment_instrument_bind_url/", "/webcast/wallet_api_tiktok/payment/payment_methods", "/webcast/wallet_api_tiktok/notifycenter/notices/", "/webcast/wallet_api_tiktok/income_plus/get_user_region_info/", "/webcast/wallet_api_tiktok/income_plus/account_steps/", "/webcast/wallet_api_tiktok/income_plus/user/"]
        , d = ["/api/private_banner/ack/", "/cloudpush/update_sender_token/", "/cloudpush/app_notice_status/", "/api/user/set/settings/", "/api/reddot/report", "/api/comment/digg/", "/api/comment/publish/", "/api/comment/delete/", "/api/aweme/delete/", "/api/schedule/aweme/delete/", "/api/privacy/user/private_account/update/v1", "/api/privacy/user/settings/update/v1", "/api/im_setting/update/v1", "/api/privacy/agreement/record/agree/v1", "/api/commit/follow/request/approve/", "/api/commit/follow/request/reject/", "/api/commit/follow/user/", "/api/impression/write/", "/api/user/set/animation/", "/api/aweme/set/react_duet_stitch/", "/api/aweme/modify/visibility/", "/passport/web/login_name/update/", "/api/update/profile/", "/api/upload/image/", "/tiktok/v1/username/save_async/", "/api/commit/ads/action/", "/tiktok/v1/kids/commit/item/digg/", "/api/im/stranger/unlimit/"]
        , u = {
          "webcast.tiktok.com": {
              POST: c,
              GET: l
          },
          "webcast-t.tiktok.com": {
              POST: c,
              GET: l
          },
          "webcast-m.tiktok.com": {
              POST: c,
              GET: l
          },
          "webcast.us.tiktok.com": {
              POST: ["/webcast/room/chat/", "/webcast/room/create_info/", "/webcast/room/enter/", "/webcast/room/leave/", "/webcast/room/live_podcast/", "/webcast/room/ping/audience/", "/webcast/user/relation/update/", "/webcast/room/emote_chat/", "/webcast/room/share/", ...a],
              GET: l
          },
          "www.tiktok.com": {
              POST: d
          },
          "us.tiktok.com": {
              POST: d
          },
          "m.tiktok.com": {
              POST: d
          },
          "t.tiktok.com": {
              POST: d
          }
      }
        , p = [{
          aid: 1988,
          dfp: !1,
          boe: !1,
          intercept: !0,
          enablePathList: o,
          isHighRisk: !1,
          isSDK: !1
      }, {
          aid: 368462,
          dfp: !1,
          boe: !1,
          intercept: !0,
          enablePathList: ["/payment/v1/"],
          isHighRisk: !1,
          isSDK: !1
      }]
        , v = ["/api/aweme/modify/visibility/", "/api/ba/business/suite/account/off", "/api/ba/business/suite/account/quitcheck", "/api/playlist/create_with_items/", "/api/schedule/aweme/delete/", "/api/update/profile/", "/api/user/set/settings/", "/api/collection/create/", "/api/collection/move_items/", "/api/collection/modify_items/", "/api/collection/modify_info/", "/api/collection/delete/", "/api/dislike/item/"]
        , g = ["/webcast/gift/send/"]
        , m = ["/webcast/gift/send/"]
        , h = n()([...v, ...g, ...m])
        , f = {
          "www.tiktok.com": {
              POST: v
          },
          "webcast.tiktok.com": {
              POST: g
          },
          "webcast-t.tiktok.com": {
              POST: g
          },
          "webcast-m.tiktok.com": {
              POST: g
          },
          "webcast.us.tiktok.com": {
              POST: m
          }
      }
  }
  ,
  750721: (e, t, i) => {
      "use strict";
      i.d(t, {
          Qq: () => l,
          v7: () => c,
          w1: () => a
      });
      var s = i(952602);
      const n = () => '""'
        , o = () => {}
        , r = () => {}
      ;
      class a {
          constructor(e, t) {
              this.key = e,
              this.type = t,
              this.storageObject = null,
              this.getter = n,
              this.setter = o,
              this.remove = r,
              this.getter = "local" === t ? s._S : s.Hd,
              this.setter = "local" === t ? s.AP : s.J2,
              this.remove = "local" === t ? s.sc : s.X
          }
          get storage() {
              return this.storageObject || (this.storageObject = this.tryParseJson(this.getter(this.key, "{}"))),
              this.storageObject
          }
          getStorage() {
              return this.storage
          }
          setItem(e, t) {
              this.storage[e] = t,
              this.setter(this.key, JSON.stringify(this.storage))
          }
          getItem(e) {
              return this.storage[e]
          }
          removeItem(e) {
              this.storage[e] = void 0,
              this.setter(this.key, JSON.stringify(this.storage))
          }
          removeAll() {
              this.storageObject = null,
              this.remove(this.key)
          }
          tryParseJson(e) {
              try {
                  return JSON.parse(e)
              } catch (e) {
                  return {}
              }
          }
      }
      const c = new a("webapp-common-config","local")
        , l = new a("webapp-common-config","session")
  }
  ,
  312688: (e, t, i) => {
      "use strict";
      i.d(t, {
          TQ: () => k,
          V7: () => p,
          d: () => O,
          qt: () => j
      });
      var s = i(669872)
        , n = i(263161)
        , o = i(241773)
        , r = i(554086)
        , a = i(876434)
        , c = i(939232)
        , l = i(122616)
        , d = i(293122)
        , u = i(298281);
      function p(e, t) {
          var i, s;
          return null === (s = null === (i = null == e ? void 0 : e.parameters) || void 0 === i ? void 0 : i[t]) || void 0 === s ? void 0 : s.vid
      }
      const v = () => "undefined" != typeof window
        , g = () => v() && window.location.host.startsWith("localhost") || "1" === String(void 0);
      let m = !1;
      const h = "AB_TEST_PREFIX_"
        , f = "FEATURE_FLAG_TEST_PREFIX"
        , b = ["0", "1"]
        , y = () => {
          const {env: e} = (0,
          u.L$)((0,
          l.W)(( () => ["env"]), []))
            , {type: t} = (0,
          u.L$)(e)
            , {canUseQuery: i=!1} = (0,
          u.L$)((0,
          d.U)(( () => ["canUseQuery"]), []))
            , s = "ppe" === t || "boe" === t || g();
          return {
              isDebugEnv: s || i,
              isDebugPanelEnable: s
          }
      }
      ;
      function w(e) {
          const {search: t} = (0,
          n.zy)()
            , i = (0,
          u.L$)((0,
          s.parse)(t))
            , {isDebugEnv: o} = y();
          let r = i[e];
          return Array.isArray(r) && (r = r[r.length - 1]),
          {
              searchObj: i,
              useDefaultValue: !o,
              value: r
          }
      }
      function _(e, t, i) {
          e && !m && (m = !0,
          r.F.open({
              content: `feature flag value you provided for ${t} is not valid, valid value are: ${JSON.stringify(i)}`,
              duration: 5,
              widthType: "padding"
          }))
      }
      function k(e) {
          var t;
          const {useDefaultValue: i, value: s} = w(e)
            , n = v()
            , o = (0,
          d.U)(( () => ["config"]), [])
            , r = null === (t = null == o ? void 0 : o.config) || void 0 === t ? void 0 : t.featureFlags
            , a = null == r ? void 0 : r[e];
          return i ? a : s ? b.includes(s) ? (n && sessionStorage.setItem(`${f}${e}`, s),
          Boolean(Number(s))) : (_(n, e, b),
          a) : n && sessionStorage.getItem(`${f}${e}`) ? Boolean(Number(sessionStorage.getItem(`${f}${e}`))) : a
      }
      function j(e, t) {
          var i, s;
          const {useDefaultValue: n, value: r} = w(t)
            , a = v();
          if (n)
              return p(e, t);
          if (r) {
              const n = null !== (s = null === (i = o.JO.find((e => e.name === t))) || void 0 === i ? void 0 : i.vid) && void 0 !== s ? s : [];
              return n.includes(r) ? (a && sessionStorage.setItem(`${h}${t}`, r),
              r) : (_(a, t, n),
              p(e, t))
          }
          return a && sessionStorage.getItem(`${h}${t}`) ? sessionStorage.getItem(`${h}${t}`) : p(e, t)
      }
      function O(e) {
          const {query: t} = (0,
          a.xw)()
            , {abTestVersion: i, env: s} = (0,
          c.x)()
            , n = v()
            , o = "ppe" === (null == s ? void 0 : s.type) || "boe" === (null == s ? void 0 : s.type) || g();
          return n && sessionStorage.getItem(`${h}${e}`) ? sessionStorage.getItem(`${h}${e}`) : o && t[e] ? t[e] : p(i, e)
      }
  }
  ,
  34111: (e, t, i) => {
      "use strict";
      i.d(t, {
          G: () => n,
          d: () => s
      });
      const s = e => null
        , n = (e, t, i) => {}
  }
  ,
  298281: (e, t, i) => {
      "use strict";
      i.d(t, {
          D1: () => g,
          L$: () => n
      });
      const s = Object.freeze({});
      function n(e) {
          return null != e ? e : s
      }
      function o(e, t=1) {
          return Math.round(Number(`${e}e${t}`)) / Math.pow(10, t)
      }
      const r = 1e3
        , a = "K"
        , c = "k"
        , l = 1e3 * r
        , d = "M"
        , u = 1e3 * l
        , p = "B"
        , v = BigInt(4294967296);
      function g(e=0, t) {
          const {isLowerThousandUnit: i=!1} = null != t ? t : {};
          let s, n = Number(e);
          return n < 0 && (n = Number(v + BigInt(e))),
          s = n < 1e4 ? n.toString() : n < l - 1 ? `${o(n / r)}${i ? c : a}` : n < u - 1 ? `${o(n / l)}${d}` : `${o(n / u)}${p}`,
          s
      }
  }
  ,
  952602: (e, t, i) => {
      "use strict";
      i.d(t, {
          AP: () => d,
          Gu: () => h,
          Gz: () => r,
          Hd: () => p,
          J2: () => v,
          Lm: () => a,
          Qy: () => m,
          X: () => g,
          _S: () => l,
          aP: () => c,
          dG: () => f,
          nr: () => o,
          sc: () => u,
          wo: () => b
      });
      var s = i(445372)
        , n = i.n(s);
      function o() {
          return navigator.vendor && -1 !== navigator.vendor.indexOf("Apple") && navigator.userAgent && -1 === navigator.userAgent.indexOf("CriOS") && -1 === navigator.userAgent.indexOf("FxiOS")
      }
      function r(e=n(), t=n()) {
          let i, s;
          function o() {
              i && document[i] ? e() : t()
          }
          return "hidden"in document ? (i = "hidden",
          s = "visibilitychange") : "msHidden"in document ? (i = "msHidden",
          s = "msvisibilitychange") : "webkitHidden"in document && (i = "webkitHidden",
          s = "webkitvisibilitychange"),
          "addEventListener"in document && i && s ? (document.addEventListener(s, o, !1),
          document.removeEventListener.bind(document, s, o, !1)) : n()
      }
      function a() {
          return window.innerHeight < document.body.offsetHeight && "hidden" !== document.body.style.overflow
      }
      function c() {
          return window.innerWidth - document.body.offsetWidth
      }
      function l(e, t="") {
          var i;
          try {
              return null !== (i = localStorage.getItem(e)) && void 0 !== i ? i : t
          } catch (e) {
              return t
          }
      }
      function d(e, t) {
          try {
              localStorage.setItem(e, t)
          } catch (e) {}
      }
      function u(e) {
          try {
              localStorage.removeItem(e)
          } catch (e) {}
      }
      function p(e, t="") {
          var i;
          try {
              return null !== (i = sessionStorage.getItem(e)) && void 0 !== i ? i : t
          } catch (e) {
              return t
          }
      }
      function v(e, t) {
          try {
              sessionStorage.setItem(e, t)
          } catch (e) {}
      }
      function g(e) {
          try {
              sessionStorage.removeItem(e)
          } catch (e) {}
      }
      function m(e) {
          const t = p(e);
          return g(e),
          t
      }
      const h = e => {
          e.preventDefault(),
          e.stopPropagation()
      }
        , f = e => {
          e.stopPropagation()
      }
        , b = e => {
          e.preventDefault()
      }
  }
  ,
  888457: (e, t, i) => {
      "use strict";
      function s() {
          return "undefined" == typeof window || "undefined" == typeof document
      }
      function n() {
          var e;
          if (s())
              return !1;
          const t = document.querySelector("#app");
          return "1" === (null === (e = null == t ? void 0 : t.dataset) || void 0 === e ? void 0 : e.downgrade)
      }
      function o() {
          return !s() && null !== document.querySelector('script[data-chunk="ssg"]')
      }
      function r(e) {
          var t, i;
          return !s() && !!e && "1" !== (null === (i = null === (t = document.querySelector("#app")) || void 0 === t ? void 0 : t.dataset) || void 0 === i ? void 0 : i.downgrade)
      }
      i.d(t, {
          $y: () => o,
          _8: () => r,
          fU: () => s,
          qk: () => n
      })
  }
  ,
  603237: (e, t, i) => {
      "use strict";
      i.d(t, {
          M: () => n,
          e: () => s
      });
      const s = function(e) {
          if (!e)
              return {
                  fullscreenEnabled: "fullscreenEnabled",
                  fullscreenElement: "fullscreenElement",
                  requestFullscreen: "requestFullscreen",
                  exitFullscreen: "exitFullscreen",
                  fullscreenchange: "fullscreenchange",
                  fullscreenerror: "fullscreenerror"
              };
          const t = {
              w3: {
                  fullscreenEnabled: "fullscreenEnabled",
                  fullscreenElement: "fullscreenElement",
                  requestFullscreen: "requestFullscreen",
                  exitFullscreen: "exitFullscreen",
                  fullscreenchange: "fullscreenchange",
                  fullscreenerror: "fullscreenerror"
              },
              webkit: {
                  fullscreenEnabled: "webkitFullscreenEnabled",
                  fullscreenElement: "webkitCurrentFullScreenElement",
                  requestFullscreen: "webkitRequestFullscreen",
                  exitFullscreen: "webkitExitFullscreen",
                  fullscreenchange: "webkitfullscreenchange",
                  fullscreenerror: "webkitfullscreenerror"
              },
              moz: {
                  fullscreenEnabled: "mozFullScreenEnabled",
                  fullscreenElement: "mozFullScreenElement",
                  requestFullscreen: "mozRequestFullScreen",
                  exitFullscreen: "mozCancelFullScreen",
                  fullscreenchange: "mozfullscreenchange",
                  fullscreenerror: "mozfullscreenerror"
              },
              ms: {
                  fullscreenEnabled: "msFullscreenEnabled",
                  fullscreenElement: "msFullscreenElement",
                  requestFullscreen: "msRequestFullscreen",
                  exitFullscreen: "msExitFullscreen",
                  fullscreenchange: "MSFullscreenChange",
                  fullscreenerror: "MSFullscreenError"
              }
          };
          for (const i of Object.values(t))
              if (i.fullscreenEnabled in e)
                  return i;
          return {
              fullscreenEnabled: "fullscreenEnabled",
              fullscreenElement: "fullscreenElement",
              requestFullscreen: "requestFullscreen",
              exitFullscreen: "exitFullscreen",
              fullscreenchange: "fullscreenchange",
              fullscreenerror: "fullscreenerror"
          }
      }("undefined" == typeof document ? void 0 : document)
        , n = () => {
          var e;
          return "undefined" != typeof document ? null !== (e = document[null == s ? void 0 : s.fullscreenElement]) && void 0 !== e ? e : document.body : null
      }
  }
  ,
  474668: (e, t, i) => {
      "use strict";
      function s(e, t) {
          return 2 === e || 6 === e || 5 !== e && t
      }
      function n(e, t) {
          return 2 === e || 6 === e ? 1 : 5 === e ? 0 : t
      }
      i.d(t, {
          L: () => n,
          z: () => s
      })
  }
  ,
  122616: (e, t, i) => {
      "use strict";
      i.d(t, {
          W: () => a
      });
      var s = i(822681)
        , n = i.n(s)
        , o = i(465622)
        , r = i(939232);
      function a(e, t) {
          const i = (0,
          r.x)();
          return (0,
          o.useMemo)(( () => i ? n()(i, ...e()) : i), t)
      }
  }
  ,
  41575: (e, t, i) => {
      "use strict";
      i.d(t, {
          h: () => f,
          a: () => h
      });
      var s = i(611379)
        , n = i(544028)
        , o = i(12110)
        , r = i(856722)
        , a = i(293401)
        , c = i(891109)
        , l = i(358677)
        , d = i(669872)
        , u = i(860564)
        , p = i(713191);
      const v = "/node-webapp/api/biz-context";
      let g;
      var m = i(271293);
      function h(e) {
          var t, i;
          return (0,
          s.sH)(this, void 0, void 0, (function*() {
              if (null === (i = null === (t = window[n.H2]) || void 0 === t ? void 0 : t.BizContext) || void 0 === i ? void 0 : i.initialized)
                  return;
              const s = (0,
              l.qm)()
                , c = o.l.getInstance(m.$)
                , h = yield function(e, t) {
                  const i = (0,
                  p.YI)(u.K);
                  return i ? Promise.resolve(Object.assign(Object.assign({}, i), {
                      statusCode: 0
                  })) : g || (g = fetch((0,
                  d.stringifyUrl)({
                      url: v,
                      query: {
                          lang: e,
                          app_name: t
                      }
                  })).then((e => e.json())),
                  g)
              }(s, e);
              c.store.dispatch(c.getActions().setBizContext(h)),
              c.store.dispatch(c.getActions().setInitialized(!0)),
              yield(0,
              r._)(c.state$.pipe((0,
              a.p)((e => !!e.initialized))))
          }
          ))
      }
      function f() {
          return (0,
          s.sH)(this, void 0, void 0, (function*() {
              const e = o.l.getInstance(m.$);
              return (0,
              r._)(e.state$.pipe((0,
              a.p)((e => !!e.bizContext)), (0,
              c.T)((e => e.bizContext))))
          }
          ))
      }
  }
  ,
  293122: (e, t, i) => {
      "use strict";
      i.d(t, {
          U: () => c,
          y: () => a
      });
      var s = i(734491)
        , n = i(822681)
        , o = i.n(n)
        , r = i(271293);
      function a() {
          return (0,
          s.Ph)(r.$)
      }
      function c(e, t) {
          return (0,
          s.Ph)(r.$, {
              selector: t => {
                  const {bizContext: i} = t;
                  return i ? o()(i, ...e()) : i
              }
              ,
              dependencies: t
          })
      }
  }
  ,
  271293: (e, t, i) => {
      "use strict";
      i.d(t, {
          $: () => k,
          A: () => j
      });
      var s = i(611379)
        , n = i(783415)
        , o = i(983238)
        , r = i(768055)
        , a = i(554954)
        , c = i(459158)
        , l = i(33583)
        , d = i(673766)
        , u = i(90245)
        , p = i(833152)
        , v = i(395831)
        , g = i(433293)
        , m = i(674895)
        , h = i(972038)
        , f = i(403057)
        , b = i(669872)
        , y = i(613919);
      let w = class {
          getBizContext(e, t) {
              return (0,
              y.H)(fetch((0,
              b.stringifyUrl)({
                  url: "/node-webapp/api/biz-context",
                  query: {
                      lang: e,
                      app_name: t
                  }
              })).then((e => e.json())))
          }
      }
      ;
      w = (0,
      s.Cg)([(0,
      f._)()], w);
      var _ = i(88489);
      let k = class extends o.E {
          constructor(e) {
              super(),
              this.service = e,
              this.defaultState = {
                  bizContext: null,
                  initialized: !1
              }
          }
          setBizContext(e, t) {
              var {statusCode: i} = t
                , n = (0,
              s.Tt)(t, ["statusCode"]);
              return 0 !== i ? e : Object.assign(Object.assign({}, e), {
                  bizContext: n
              })
          }
          setInitialized(e, t) {
              return Object.assign(Object.assign({}, e), {
                  initialized: t
              })
          }
          init(e) {
              return e.pipe((0,
              p.E)(this.state$), (0,
              v.p)(( ([{lang: e, app_name: t},{initialized: i}]) => i ? c.w : this.service.getBizContext(e, t).pipe((0,
              g.Z)((e => (0,
              l.h)((0,
              d.of)(this.getActions().setBizContext(e))))), (0,
              m.Z)(this.getActions().setInitialized(!1)), (0,
              h.q)(this.getActions().setInitialized(!0), this.terminate())))))
          }
      }
      ;
      (0,
      s.Cg)([(0,
      r.HI)(), (0,
      s.Sn)("design:type", Function), (0,
      s.Sn)("design:paramtypes", [Object, Object]), (0,
      s.Sn)("design:returntype", Object)], k.prototype, "setBizContext", null),
      (0,
      s.Cg)([(0,
      r.HI)(), (0,
      s.Sn)("design:type", Function), (0,
      s.Sn)("design:paramtypes", [Object, Boolean]), (0,
      s.Sn)("design:returntype", Object)], k.prototype, "setInitialized", null),
      (0,
      s.Cg)([(0,
      r.Mj)({
          payloadGetter: 1
      }), (0,
      s.Sn)("design:type", Function), (0,
      s.Sn)("design:paramtypes", [u.c]), (0,
      s.Sn)("design:returntype", void 0)], k.prototype, "init", null),
      k = (0,
      s.Cg)([(0,
      a.n)("BizContext"), (0,
      s.Sn)("design:paramtypes", [w])], k);
      const j = (0,
      n.U)("readBizContextModuleAtom@tiktok/webapp-common", ( () => (0,
      _.y)(k)))
  }
  ,
  495199: (e, t, i) => {
      "use strict";
      i.d(t, {
          w: () => b,
          x: () => y
      });
      var s = i(611379)
        , n = i(983238)
        , o = i(768055)
        , r = i(554954)
        , a = i(395831)
        , c = i(673766)
        , l = i(891109)
        , d = i(90245)
        , u = i(88489)
        , p = i(783415)
        , v = i(750721)
        , g = i(403057)
        , m = i(990064)
        , h = i(202070);
      let f = class {
          constructor(e) {
              this.fetch = e
          }
          postUserSetting(e) {
              return this.fetch.post("/api/user/set/settings/", {
                  query: Object.assign(Object.assign({}, e), {
                      tt_csrf_token: this.fetch.csrfToken
                  }),
                  headers: {
                      [m.nk]: this.fetch.csrfToken
                  },
                  baseUrlType: 2
              })
          }
      }
      ;
      f = (0,
      s.Cg)([(0,
      g._)(), (0,
      s.Sn)("design:paramtypes", [h.p])], f);
      let b = class extends n.E {
          constructor(e) {
              super(),
              this.service = e,
              this.defaultState = {
                  photoSensitiveVideosSetting: v.v7.getItem("photo_sensitive_video_setting"),
                  hideMaskTempVideoId: "",
                  loginStatePhotoSensitiveVideosSetting: void 0,
                  hasClosedVideoMask: !1
              }
          }
          setSkipPhotoSensitiveAction(e, t) {
              const {skipPhotoSensitiveVideo: i, login: s=!1} = t
                , n = i ? 1 : 2;
              e.photoSensitiveVideosSetting = n,
              s && (e.loginStatePhotoSensitiveVideosSetting = n)
          }
          setHideMaskTempVideoId(e, t) {
              e.hideMaskTempVideoId = t
          }
          setHasClosedMask(e, t) {
              e.hasClosedVideoMask = t
          }
          setPhotoSensitiveVideosSetting(e, t) {
              e.photoSensitiveVideosSetting = t
          }
          setLoginStatePhotoSensitiveVideosSetting(e, t) {
              e.loginStatePhotoSensitiveVideosSetting = t
          }
          setSkipPhotoSensitive(e) {
              return e.pipe((0,
              a.p)(( ({skip: e, hasLogin: t}) => {
                  const i = e ? 1 : 2;
                  return v.v7.setItem("photo_sensitive_video_setting", i),
                  t ? this.service.postUserSetting({
                      field: "photosensitive_videos_setting",
                      value: i
                  }).pipe((0,
                  l.T)(( ({status_code: t}) => 0 === t ? this.getActions().setSkipPhotoSensitiveAction({
                      skipPhotoSensitiveVideo: e,
                      login: !0
                  }) : this.noop()))) : (0,
                  c.of)(this.getActions().setSkipPhotoSensitiveAction({
                      skipPhotoSensitiveVideo: e
                  }))
              }
              )))
          }
      }
      ;
      (0,
      s.Cg)([(0,
      o.h5)(), (0,
      s.Sn)("design:type", Function), (0,
      s.Sn)("design:paramtypes", [Object, Object]), (0,
      s.Sn)("design:returntype", void 0)], b.prototype, "setSkipPhotoSensitiveAction", null),
      (0,
      s.Cg)([(0,
      o.h5)(), (0,
      s.Sn)("design:type", Function), (0,
      s.Sn)("design:paramtypes", [Object, String]), (0,
      s.Sn)("design:returntype", void 0)], b.prototype, "setHideMaskTempVideoId", null),
      (0,
      s.Cg)([(0,
      o.h5)(), (0,
      s.Sn)("design:type", Function), (0,
      s.Sn)("design:paramtypes", [Object, Boolean]), (0,
      s.Sn)("design:returntype", void 0)], b.prototype, "setHasClosedMask", null),
      (0,
      s.Cg)([(0,
      o.h5)(), (0,
      s.Sn)("design:type", Function), (0,
      s.Sn)("design:paramtypes", [Object, Number]), (0,
      s.Sn)("design:returntype", void 0)], b.prototype, "setPhotoSensitiveVideosSetting", null),
      (0,
      s.Cg)([(0,
      o.h5)(), (0,
      s.Sn)("design:type", Function), (0,
      s.Sn)("design:paramtypes", [Object, Number]), (0,
      s.Sn)("design:returntype", void 0)], b.prototype, "setLoginStatePhotoSensitiveVideosSetting", null),
      (0,
      s.Cg)([(0,
      o.Mj)(), (0,
      s.Sn)("design:type", Function), (0,
      s.Sn)("design:paramtypes", [d.c]), (0,
      s.Sn)("design:returntype", void 0)], b.prototype, "setSkipPhotoSensitive", null),
      b = (0,
      s.Cg)([(0,
      r.n)("VideoMaskModule"), (0,
      s.Sn)("design:paramtypes", [f])], b);
      const y = (0,
      p.U)("videoMaskModuleAtom@tiktok/fe-shared", ( () => (0,
      u.y)(b)))
  }
  ,
  76776: (e, t, i) => {
      var s = {
          "./af.js": [916126, 38481],
          "./am.js": [316467, 38481],
          "./ar-dz.js": [718953, 38481],
          "./ar-iq.js": [733373, 38481],
          "./ar-kw.js": [588153, 38481],
          "./ar-ly.js": [713112, 38481],
          "./ar-ma.js": [132105, 38481],
          "./ar-sa.js": [211131, 38481],
          "./ar-tn.js": [624997, 38481],
          "./ar.js": [259746, 38481],
          "./az.js": [782362, 38481],
          "./be.js": [516396, 38481],
          "./bg.js": [511798, 38481],
          "./bi.js": [384104, 38481],
          "./bm.js": [16724, 38481],
          "./bn-bd.js": [63648, 38481],
          "./bn.js": [14845, 38481],
          "./bo.js": [904926, 38481],
          "./br.js": [560905, 38481],
          "./bs.js": [890394, 38481],
          "./ca.js": [414153, 38481],
          "./cs.js": [174615, 38481],
          "./cv.js": [369644, 38481],
          "./cy.js": [383841, 38481],
          "./da.js": [688338, 38481],
          "./de-at.js": [840814, 38481],
          "./de-ch.js": [455784, 38481],
          "./de.js": [72830, 38481],
          "./dv.js": [704523, 38481],
          "./el.js": [842232, 38481],
          "./en-au.js": [551369, 38481],
          "./en-ca.js": [499083, 38481],
          "./en-gb.js": [420986, 38481],
          "./en-ie.js": [985521, 38481],
          "./en-il.js": [846650, 38481],
          "./en-in.js": [126224, 38481],
          "./en-nz.js": [873011, 38481],
          "./en-sg.js": [154689, 38481],
          "./en-tt.js": [870811, 38481],
          "./en.js": [930690, 38481],
          "./eo.js": [798577, 38481],
          "./es-do.js": [43907, 38481],
          "./es-mx.js": [949359, 38481],
          "./es-pr.js": [768940, 38481],
          "./es-us.js": [489010, 38481],
          "./es.js": [892949, 38481],
          "./et.js": [269152, 38481],
          "./eu.js": [858871, 38481],
          "./fa.js": [740756, 38481],
          "./fi.js": [121196, 38481],
          "./fo.js": [409258, 38481],
          "./fr-ca.js": [737202, 38481],
          "./fr-ch.js": [117401, 38481],
          "./fr.js": [492397, 38481],
          "./fy.js": [993948, 38481],
          "./ga.js": [861997, 38481],
          "./gd.js": [342178, 38481],
          "./gl.js": [348442, 38481],
          "./gom-latn.js": [708388, 38481],
          "./gu.js": [565345, 38481],
          "./he.js": [499946, 38481],
          "./hi.js": [203294, 38481],
          "./hr.js": [689571, 38481],
          "./ht.js": [316745, 38481],
          "./hu.js": [69530, 38481],
          "./hy-am.js": [110149, 38481],
          "./id.js": [937884, 38481],
          "./is.js": [165977, 38481],
          "./it-ch.js": [713174, 38481],
          "./it.js": [548780, 38481],
          "./ja.js": [658888, 38481],
          "./jv.js": [585677, 38481],
          "./ka.js": [977713, 38481],
          "./kk.js": [745447, 38481],
          "./km.js": [293509, 38481],
          "./kn.js": [363772, 38481],
          "./ko.js": [519235, 38481],
          "./ku.js": [731485, 38481],
          "./ky.js": [168569, 38481],
          "./lb.js": [734247, 38481],
          "./lo.js": [245668, 38481],
          "./lt.js": [180117, 38481],
          "./lv.js": [964627, 38481],
          "./me.js": [726255, 38481],
          "./mi.js": [255075, 38481],
          "./mk.js": [864037, 38481],
          "./ml.js": [697712, 38481],
          "./mn.js": [177562, 38481],
          "./mr.js": [192094, 38481],
          "./ms-my.js": [182912, 38481],
          "./ms.js": [302013, 38481],
          "./mt.js": [671272, 38481],
          "./my.js": [592435, 38481],
          "./nb.js": [415141, 38481],
          "./ne.js": [698288, 38481],
          "./nl-be.js": [842129, 38481],
          "./nl.js": [303535, 38481],
          "./nn.js": [531409, 38481],
          "./oc-lnc.js": [138737, 38481],
          "./pa-in.js": [919060, 38481],
          "./pl.js": [508857, 38481],
          "./pt-br.js": [972026, 38481],
          "./pt.js": [437233, 38481],
          "./rn.js": [726093, 38481],
          "./ro.js": [181742, 38481],
          "./ru.js": [520204, 38481],
          "./rw.js": [866646, 38481],
          "./sd.js": [71158, 38481],
          "./se.js": [889397, 38481],
          "./si.js": [573601, 38481],
          "./sk.js": [961727, 38481],
          "./sl.js": [490462, 38481],
          "./sq.js": [603913, 38481],
          "./sr-cyrl.js": [719503, 38481],
          "./sr.js": [419376, 38481],
          "./ss.js": [660423, 38481],
          "./sv-fi.js": [159976, 38481],
          "./sv.js": [855452, 38481],
          "./sw.js": [976739, 38481],
          "./ta.js": [399586, 38481],
          "./te.js": [752270, 38481],
          "./tet.js": [258800, 38481],
          "./tg.js": [737348, 38481],
          "./th.js": [135241, 38481],
          "./tk.js": [984880, 38481],
          "./tl-ph.js": [846430, 38481],
          "./tlh.js": [666017, 38481],
          "./tr.js": [69759, 38481],
          "./tzl.js": [382707, 38481],
          "./tzm-latn.js": [768788, 38481],
          "./tzm.js": [77484, 38481],
          "./ug-cn.js": [93031, 38481],
          "./uk.js": [165405, 38481],
          "./ur.js": [159686, 38481],
          "./uz-latn.js": [812566, 38481],
          "./uz.js": [328494, 38481],
          "./vi.js": [363196, 38481],
          "./x-pseudo.js": [701280, 38481],
          "./yo.js": [310269, 38481],
          "./zh-cn.js": [431873, 38481],
          "./zh-hk.js": [3581, 38481],
          "./zh-tw.js": [975317, 38481],
          "./zh.js": [947591, 38481]
      };
      function n(e) {
          if (!i.o(s, e))
              return Promise.resolve().then(( () => {
                  var t = new Error("Cannot find module '" + e + "'");
                  throw t.code = "MODULE_NOT_FOUND",
                  t
              }
              ));
          var t = s[e]
            , n = t[0];
          return i.e(t[1]).then(( () => i.t(n, 23)))
      }
      n.keys = () => Object.keys(s),
      n.id = 76776,
      e.exports = n
  }
}]);
