"use strict";
(globalThis.__TIKTOK_CHUNKS__ = globalThis.__TIKTOK_CHUNKS__ || []).push([[87221], {
    140414: (e, t, n) => {
        n.d(t, {
            _: () => r
        });
        var i = n(611379);
        const o = ["fetch"]
          , s = ["includes"]
          , a = ["values", "entries", "getOwnPropertyDescriptors"];
        function r() {
            return (0,
            i.sH)(this, void 0, void 0, (function*() {
                "Promise"in window ? (o.some((e => !(e in window))) && (yield n.e(62844).then(n.bind(n, 22313))),
                (s.some((e => !(e in Array.prototype))) || a.some((e => !(e in Object)))) && (yield Promise.all([n.e(72837).then(n.t.bind(n, 319687, 23)), n.e(72837).then(n.t.bind(n, 863186, 23)), n.e(72837).then(n.t.bind(n, 387630, 23)), n.e(72837).then(n.t.bind(n, 77554, 23))]))) : window.location.href = "https://www.tiktok.com/unsupported"
            }
            ))
        }
    }
    ,
    621730: (e, t, n) => {
        n.d(t, {
            ZC: () => c,
            _g: () => l,
            d7: () => d
        });
        var i = n(942824)
          , o = n.n(i)
          , s = n(723791)
          , a = n.n(s)
          , r = n(465622);
        function l(e, t, n) {
            return (0,
            r.useMemo)(( () => o()(e, n)), t)
        }
        function d(e, t, n) {
            return (0,
            r.useMemo)(( () => a()(e, n)), t)
        }
        function c(e) {
            const t = (0,
            r.useRef)(e);
            return (0,
            r.useEffect)(( () => {
                t.current = e
            }
            ), [e]),
            t.current
        }
    }
    ,
    356295: (e, t, n) => {
        n.d(t, {
            $mG: () => d,
            G2o: () => o,
            fJR: () => l,
            l3z: () => v
        });
        var i = n(653814);
        const {getPureLivePath: o, getPureMusicPath: s, getPureTagPath: a, getPureStickerPath: r, getPureUserPath: l, getPureVideoPath: d, getPureQuestionPath: c} = i.h
          , {getPureUniqueId: v, hasIllegalText: u, isPureNumber: p, isRealUniqueId: g, purifyMusicName: _, purifyPlainText: m} = i.A
    }
    ,
    595763: (e, t, n) => {
        n.d(t, {
            n: () => a
        });
        var i = n(459158)
          , o = n(947733)
          , s = n(894488);
        const a = ({msg: e, shouldShowMsg: t=!1, prevent: n=!0, callback: a}) => r => r.pipe((0,
        s.W)((s => (t && console.error("Effect error: ", null != e ? e : s),
        null == a || a(),
        n ? i.w : (0,
        o.$)(( () => s))))))
    }
    ,
    910593: (e, t, n) => {
        n.d(t, {
            rO: () => o
        });
        const i = "assets/perf_images/performance.jpeg"
          , o = () => {
            const e = Boolean("");
            Boolean("sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static");
            return e ? `https:///tiktok/webapp/main/${i}` : `https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/${i}`
        }
    }
    ,
    129278: (e, t, n) => {
        n.d(t, {
            gc: () => c
        });
        var i = n(888457)
          , o = n(952602);
        const s = 'video/mp4;codecs="hev1.1.6.L93.B0"'
          , a = "hevc_support_key_v4"
          , r = "hevc_support_key_time"
          , l = 12096e5;
        let d;
        function c() {
            if ((0,
            i.fU)())
                return !1;
            if (void 0 !== d)
                return d;
            const e = (0,
            o._S)(a, "")
              , t = Number((0,
            o._S)(r, "0"));
            return Date.now() - t > l || "" === e ? (d = !(0,
            i.fU)() && "undefined" != typeof MediaSource && !(!MediaSource.isTypeSupported(s) || "probably" !== document.createElement("video").canPlayType(s)),
            (0,
            o.AP)(a, d ? "1" : "0"),
            (0,
            o.AP)(r, String(Date.now())),
            d && navigator.mediaCapabilities.decodingInfo({
                type: "file",
                video: {
                    contentType: s,
                    width: 1920,
                    height: 1080,
                    bitrate: 1e4,
                    framerate: 30
                }
            }).then(( ({supported: e}) => {
                d = e,
                (0,
                o.AP)(a, e ? "1" : "0")
            }
            )).catch((e => console.error(e))),
            d) : "1" === e
        }
    }
    ,
    904251: (e, t, n) => {
        let i;
        function o(e) {
            i = e
        }
        function s(e, t) {
            var n, i;
            return (null === (n = e.match(/stream-[0-9_a-z]+/)) || void 0 === n ? void 0 : n[0]) === (null === (i = t.match(/stream-[0-9_a-z]+/)) || void 0 === i ? void 0 : i[0])
        }
        function a(e) {
            return e ? `${e}${e.includes("?") ? "&" : "?"}_webnoredir=1` : e
        }
        n.d(t, {
            Kd: () => s,
            T4: () => o,
            X$: () => a
        }),
        n(669872),
        n(465622)
    }
    ,
    984770: (e, t, n) => {
        n.d(t, {
            ey: () => a,
            d0: () => s
        }),
        n(465622);
        const i = "ENTER_ROOM_TIME_STAMP_STORAGE_KEY";
        var o = n(952602);
        const s = () => (0,
        o.AP)(i, String(Date.now()))
          , a = () => (0,
        o._S)(i, "")
    }
    ,
    990028: (e, t, n) => {
        n.d(t, {
            Xc: () => i,
            qt: () => r
        });
        const i = "LIVE_AUTO_PLAY_STORAGE_KEY";
        var o, s, a;
        !function(e) {
            e[e.On = 1] = "On",
            e[e.Off = 2] = "Off"
        }(o || (o = {})),
        function(e) {
            e[e.init = 0] = "init",
            e[e.connect = 1] = "connect",
            e[e.stop = 8] = "stop"
        }(s || (s = {})),
        function(e) {
            e.LD = "ld",
            e.SD = "sd",
            e.HD = "hd",
            e.HD60 = "hd_60",
            e.UHD = "uhd",
            e.UHD60 = "uhd_60",
            e.ORIGIN = "origin",
            e.AUTO = "auto"
        }(a || (a = {}));
        const r = {
            origin: "Original",
            uhd_60: "1080p60",
            uhd: "1080p",
            hd_60: "720p60",
            hd: "720p",
            sd: "540p",
            ld: "360p"
        };
        var l, d, c;
        !function(e) {
            e.H264 = "h264",
            e.Bytevc1 = "bytevc1",
            e.H265 = "h265"
        }(l || (l = {})),
        function(e) {
            e[e.NORMAL = 0] = "NORMAL",
            e[e.OBS = 1] = "OBS",
            e[e.MEDIA = 2] = "MEDIA",
            e[e.AUDIO = 3] = "AUDIO",
            e[e.SCREEN = 4] = "SCREEN",
            e[e.SOCIAL_LIVE = 5] = "SOCIAL_LIVE",
            e[e.STUDIO = 6] = "STUDIO"
        }(d || (d = {})),
        function(e) {
            e.Normal = "normal",
            e.PoorConnection = "poor_connection",
            e.Offline = "offline"
        }(c || (c = {}))
    }
    ,
    605651: (e, t, n) => {
        n.d(t, {
            Eo: () => c,
            Yx: () => v
        });
        var i = n(56139)
          , o = n(74055)
          , s = n(465622)
          , a = n(29219)
          , r = n(298281)
          , l = n(122616);
        const d = () => {
            const e = new Date;
            return Math.floor((e.getTime() - 6e4 * e.getTimezoneOffset()) / 864e5)
        }
        ;
        function c() {
            var e;
            const [t] = (0,
            i.S)(o.P)
              , [n,r] = (0,
            s.useState)(!1)
              , [l,d] = (0,
            s.useState)(!1)
              , c = (0,
            a.Us)();
            return (0,
            s.useEffect)(( () => {
                r(t.engagementCountHide),
                d(t.guardianComplianceSettingInited)
            }
            ), [t.engagementCountHide, t.guardianComplianceSettingInited]),
            !!Boolean(null === (e = c.appContext) || void 0 === e ? void 0 : e.user) && (!l || n)
        }
        const v = () => {
            const {user: e} = (0,
            r.L$)((0,
            l.W)(( () => ["user"]), []))
              , t = (0,
            i.w)(o.P);
            (0,
            s.useEffect)(( () => {
                e && t.getGuardianComplianceSettingsEffect({
                    date: d()
                })
            }
            ), [t, e])
        }
    }
    ,
    74055: (e, t, n) => {
        n.d(t, {
            P: () => M
        });
        var i = n(611379)
          , o = n(983238)
          , s = n(768055)
          , a = n(554954)
          , r = n(433293)
          , l = n(891109)
          , d = n(894488)
          , c = n(673766)
          , v = n(90245)
          , u = n(403057)
          , p = n(202070);
        let g = class {
            constructor(e) {
                this.fetch = e
            }
            getComplianceSettings() {
                return this.fetch.get("/api/compliance/settings/", {
                    query: {
                        aid: 1988,
                        fromWeb: 1
                    }
                })
            }
            getGuardianComplianceSettings(e) {
                return this.fetch.get("/tiktok/v1/compliance/guadig/settings/", {
                    query: e,
                    baseUrlType: 2
                })
            }
        }
        ;
        var _, m, h, y, b, f, w, S, C, k, L, I, T, x, P, O, j;
        g = (0,
        i.Cg)([(0,
        u._)(), (0,
        i.Sn)("design:paramtypes", [p.p])], g),
        function(e) {
            e[e.OpenApp = 1] = "OpenApp",
            e[e.ExitApp = 2] = "ExitApp",
            e[e.Interval = 3] = "Interval",
            e[e.LogOutAccount = 4] = "LogOutAccount",
            e[e.ForceUpload = 5] = "ForceUpload"
        }(_ || (_ = {})),
        function(e) {
            e[e.Mon = 1] = "Mon",
            e[e.Tue = 2] = "Tue",
            e[e.Wed = 3] = "Wed",
            e[e.Thu = 4] = "Thu",
            e[e.Fri = 5] = "Fri",
            e[e.Sat = 6] = "Sat",
            e[e.Sun = 7] = "Sun"
        }(m || (m = {})),
        function(e) {
            e[e.ScreenTimeManagementEligibleEnum_NonDefaultEnabled = 0] = "ScreenTimeManagementEligibleEnum_NonDefaultEnabled",
            e[e.ScreenTimeManagementEligibleEnum_DefaultEnabledEligible = 1] = "ScreenTimeManagementEligibleEnum_DefaultEnabledEligible",
            e[e.ScreenTimeManagementEligibleEnum_DefaultEnabledIneligible = 2] = "ScreenTimeManagementEligibleEnum_DefaultEnabledIneligible"
        }(h || (h = {})),
        function(e) {
            e[e.ScreenTimeManagementRepeatTypeEnum_Everyday = 1] = "ScreenTimeManagementRepeatTypeEnum_Everyday",
            e[e.ScreenTimeManagementRepeatTypeEnum_Week = 2] = "ScreenTimeManagementRepeatTypeEnum_Week"
        }(y || (y = {})),
        function(e) {
            e[e.Regular = 1] = "Regular",
            e[e.MinorDefaultEnable = 2] = "MinorDefaultEnable",
            e[e.FamilyPairing = 3] = "FamilyPairing"
        }(b || (b = {})),
        function(e) {
            e[e.Preset = 0] = "Preset",
            e[e.Custom = 1] = "Custom"
        }(f || (f = {})),
        function(e) {
            e[e.EveryDay = 1] = "EveryDay",
            e[e.PerDay = 2] = "PerDay"
        }(w || (w = {})),
        function(e) {
            e[e.UserNightScreenTimePopupActionEnum_Delay = 1] = "UserNightScreenTimePopupActionEnum_Delay",
            e[e.UserNightScreenTimePopupActionEnum_Dismiss = 2] = "UserNightScreenTimePopupActionEnum_Dismiss",
            e[e.UserNightScreenTimePopupActionEnum_View = 3] = "UserNightScreenTimePopupActionEnum_View"
        }(S || (S = {})),
        function(e) {
            e[e.Unlink = 1] = "Unlink",
            e[e.child = 2] = "child",
            e[e.parent = 3] = "parent",
            e[e.child_punished = 4] = "child_punished"
        }(C || (C = {})),
        function(e) {
            e[e.Unknow = 0] = "Unknow",
            e[e.RestrictedModeSwitch = 1] = "RestrictedModeSwitch",
            e[e.ScreenTimeLockSwitch = 2] = "ScreenTimeLockSwitch",
            e[e.ChangePasscode = 3] = "ChangePasscode",
            e[e.ScreenTimeUpdate = 4] = "ScreenTimeUpdate",
            e[e.SessionDurationDefault = 5] = "SessionDurationDefault",
            e[e.SessionDurationCustom = 6] = "SessionDurationCustom",
            e[e.ForgotPasscode = 7] = "ForgotPasscode",
            e[e.ScreenTimeEnable = 8] = "ScreenTimeEnable",
            e[e.ScreenTimeType = 9] = "ScreenTimeType",
            e[e.ScreenTimeManagementAcknowledge = 10] = "ScreenTimeManagementAcknowledge"
        }(k || (k = {})),
        function(e) {
            e[e.Preset = 0] = "Preset",
            e[e.Custom = 1] = "Custom"
        }(L || (L = {})),
        function(e) {
            e[e.enum = 0] = "enum",
            e[e.custom = 1] = "custom"
        }(I || (I = {})),
        function(e) {
            e.upload = "upload",
            e.updateDailySTM = "updateDailySTM",
            e.updateSleepTime = "updateSleepTime",
            e.updateTimeBreak = "updateTimeBreak",
            e.updateActiveTimeUsage = "updateActiveTimeUsage"
        }(T || (T = {})),
        function(e) {
            e[e.None = 0] = "None",
            e[e.SchedulePage = 1] = "SchedulePage",
            e[e.CustomPage = 2] = "CustomPage",
            e[e.LearnMorePage = 3] = "LearnMorePage"
        }(x || (x = {})),
        function(e) {
            e[e.default = 0] = "default",
            e[e.custom = 1] = "custom"
        }(P || (P = {})),
        function(e) {
            e[e.off = 0] = "off",
            e[e.on = 1] = "on"
        }(O || (O = {})),
        function(e) {
            e[e.off = 0] = "off",
            e[e.on = 1] = "on"
        }(j || (j = {}));
        let M = class extends o.E {
            constructor(e) {
                super(),
                this.service = e,
                this.defaultState = {
                    engagementCountHide: !1,
                    guardianComplianceSettingInited: !1
                }
            }
            setEngagementCountHide(e, t) {
                e.engagementCountHide = t
            }
            setGuardianComplianceSettingInited(e, t) {
                e.guardianComplianceSettingInited = t
            }
            getComplianceSettings(e) {
                return e.pipe((0,
                r.Z)(( () => this.service.getComplianceSettings().pipe((0,
                l.T)((e => (null == e || e.status_code,
                this.noop())))))))
            }
            getGuardianComplianceSettingsEffect(e) {
                return e.pipe((0,
                r.Z)((e => this.getGuardianComplianceSettings(e).pipe((0,
                l.T)(( () => this.noop()))))))
            }
            getGuardianComplianceSettings(e) {
                return this.service.getGuardianComplianceSettings(e).pipe((0,
                l.T)((e => {
                    var t, n;
                    if (this.store.dispatch(this.getActions().setGuardianComplianceSettingInited(!0)),
                    0 === (null == e ? void 0 : e.status_code)) {
                        const i = null === (n = null === (t = e.fp.restriction) || void 0 === t ? void 0 : t.engagement_count_settings) || void 0 === n ? void 0 : n.engagement_count_status;
                        return this.store.dispatch(this.getActions().setEngagementCountHide(i === j.off)),
                        e
                    }
                    return null
                }
                )), (0,
                d.W)((e => (this.store.dispatch(this.getActions().setGuardianComplianceSettingInited(!0)),
                (0,
                c.of)(null)))))
            }
        }
        ;
        (0,
        i.Cg)([(0,
        s.uk)(), (0,
        i.Sn)("design:type", v.c)], M.prototype, "dispose$", void 0),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", void 0)], M.prototype, "setEngagementCountHide", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", void 0)], M.prototype, "setGuardianComplianceSettingInited", null),
        (0,
        i.Cg)([(0,
        s.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [v.c]), (0,
        i.Sn)("design:returntype", void 0)], M.prototype, "getComplianceSettings", null),
        (0,
        i.Cg)([(0,
        s.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [v.c]), (0,
        i.Sn)("design:returntype", void 0)], M.prototype, "getGuardianComplianceSettingsEffect", null),
        M = (0,
        i.Cg)([(0,
        a.n)("ComplianceSettingsModule"), (0,
        i.Sn)("design:paramtypes", [g])], M)
    }
    ,
    189728: (e, t, n) => {
        n.d(t, {
            q: () => f
        });
        var i = n(298281)
          , o = n(122616)
          , s = n(702576)
          , a = n(499971)
          , r = n(465622)
          , l = n(596095)
          , d = n(611379)
          , c = n(25724)
          , v = n(529756)
          , u = n(164596);
        const p = {
            isPPFInitialized: !1,
            isNonPersonalized: !1
        }
          , g = (0,
        c.atom)(p);
        g.debugLabel = "ppfAtom";
        const {useAtomService: _, useServiceState: m, useServiceDispatchers: h} = (0,
        v.i)(g, ( (e, t) => ({
            setPPFState(e) {
                t(g, (t => Object.assign(Object.assign({}, t), e)))
            },
            setIsNonPersonalization(e) {
                t(g, (t => Object.assign(Object.assign({}, t), {
                    isNonPersonalized: e
                })))
            },
            setIsPPFInitialized(e) {
                t(g, (t => Object.assign(Object.assign({}, t), {
                    isPPFInitialized: e
                })))
            }
        })));
        var y = n(952602);
        n(545489);
        const b = "webapp_popup_ppf_personalization_toast"
          , f = () => {
            const e = (0,
            i.L$)((0,
            o.W)(( () => ["user", "abTestVersion"]), []))
              , t = (0,
            l.Qi)()
              , [{isNonPersonalized: n, isPPFInitialized: c}] = ( () => {
                const e = m()
                  , t = h()
                  , n = (0,
                i.L$)((0,
                o.W)(( () => ["user", "abTestVersion"]), []))
                  , {user: {uid: s=""}={}} = n;
                return (0,
                r.useEffect)(( () => {
                    s && !e.isPPFInitialized && (0,
                    d.sH)(void 0, void 0, void 0, (function*() {
                        const e = yield( (e, t) => (0,
                        d.sH)(void 0, void 0, void 0, (function*() {
                            const n = yield(e => (0,
                            d.sH)(void 0, void 0, void 0, (function*() {
                                return u.h.post("/tiktok/ppf/api/eligibility/v1", {
                                    body: JSON.stringify({
                                        uid: e
                                    }),
                                    baseUrlType: 2,
                                    headers: {}
                                })
                            }
                            )))(e)
                              , i = 0 === n.status_code && "object" == typeof n.eligibility_list && n.eligibility_list.length > 0 && n.eligibility_list.some((e => "ca_no_personalized_go_rule" === e.id_value && e.is_eligible));
                            return Object.assign(Object.assign({}, t), {
                                isNonPersonalized: i
                            })
                        }
                        )))(s, p);
                        t.setPPFState(Object.assign(Object.assign({}, e), {
                            isPPFInitialized: !0
                        }))
                    }
                    ))
                }
                ), [s, e.isPPFInitialized, t]),
                [e]
            }
            )()
              , {abTestVersion: v, user: {uid: g=""}={}} = e
              , _ = (0,
            s.Vq)(!0)
              , f = (0,
            s.Vq)()
              , w = (0,
            s.Vq)(void 0, !0)
              , S = (e, n=!0) => {
                const i = !e;
                n && (_(i),
                f(i),
                w(i)),
                t.setIsSearchPersonalized(i),
                t.setIsFeedPersonalized(i)
            }
              , C = ( (e, t) => {
                const n = (0,
                s.o0)(!t);
                return (0,
                r.useEffect)(( () => {
                    e && (0,
                    y.Hd)(b, void 0) && ((0,
                    y.X)(b),
                    n())
                }
                ), [e, n]),
                () => {
                    e && (0,
                    y.J2)(b, "1")
                }
            }
            )(Boolean(g && c), n);
            (0,
            r.useEffect)(( () => {
                if (!g || !c)
                    return;
                const e = (0,
                a.Sw)(g)
                  , t = (0,
                a.mx)(v, g);
                n !== e ? (S(n),
                setTimeout(( () => {
                    C(),
                    window.location.reload()
                }
                ), 100)) : e && t && S(t, !1)
            }
            ), [g, v, n, c])
        }
    }
    ,
    188149: (e, t, n) => {
        n.d(t, {
            $4: () => q,
            $r: () => I,
            AP: () => O,
            E1: () => D,
            Eg: () => $,
            Eo: () => h,
            Fl: () => j,
            KK: () => Q,
            LK: () => Z,
            M4: () => S,
            NF: () => N,
            Oj: () => H,
            Pl: () => A,
            RC: () => P,
            TP: () => C,
            Tt: () => L,
            Vn: () => K,
            Vv: () => U,
            WE: () => E,
            ZO: () => T,
            aO: () => G,
            ac: () => w,
            cE: () => y,
            cV: () => J,
            eb: () => x,
            fy: () => F,
            gQ: () => V,
            gR: () => f,
            hn: () => M,
            kb: () => b,
            ng: () => R,
            oJ: () => Y,
            rl: () => z,
            tc: () => k,
            vh: () => B,
            yc: () => W
        });
        var i = n(263161)
          , o = n(423298)
          , s = n(584770)
          , a = n(364183)
          , r = n(166315)
          , l = (n(12883),
        n(465622))
          , d = n(757180)
          , c = n(122616)
          , v = n(297523)
          , u = n(75935)
          , p = n(270965)
          , g = n(298281)
          , _ = n(312688);
        const m = "abTestVersion";
        function h() {
            const {isSmartPlayer: e} = (0,
            d.Qt)();
            return {
                isMobileUiOptimize: !e
            }
        }
        const y = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => [m]), []));
            return {
                hasNonPersonalizedMenu: "v2" === (null !== (e = (0,
                _.qt)(t, v.W$)) && void 0 !== e ? e : "v1")
            }
        }
          , b = e => {
            var t, n;
            const {abTestVersion: i} = (0,
            g.L$)((0,
            c.W)(( () => [m]), []))
              , o = null !== (t = (0,
            _.qt)(i, "desktop_ui_reply")) && void 0 !== t ? t : "v1"
              , s = "v5" === o
              , a = "v6" === o;
            return {
                shouldAvatarShowNickName: "v2" === (null !== (n = (0,
                _.qt)(i, "desktop_avatar_nick_name")) && void 0 !== n ? n : "v1"),
                shouldOptimizeCta: "v2" === o || s,
                allowRightPanelScroll: s || a,
                shouldOptimizeReply: s || a,
                onlyOptimizeCta: "v2" === o,
                shouldShowCommentsCnt: "v2" === o || "v3" === o || s || a,
                isDesktopUiOptDebugOn: (0,
                _.TQ)("desktop_ui_opt_debug") && !e,
                shouldIncludeV3V4: a
            }
        }
        ;
        function f() {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => [m]), []))
              , n = null !== (e = (0,
            _.qt)(t, "remove_tooltip")) && void 0 !== e ? e : "v0";
            return {
                removeUploadPop: "v1" === n,
                removeLivePop: "v1" === n,
                removeEditProfilePop: "v1" === n,
                removeOtherPop: "v4" === n,
                removeShortcutPop: "v5" === n
            }
        }
        function w() {
            const {pathname: e} = (0,
            i.zy)()
              , t = (0,
            u.Ig)() ? "v1" : "v2"
              , n = (0,
            r.Fj)(e)
              , o = "v1" !== t
              , s = "v1" !== t;
            return {
                isVideoPlayerOptimization: o,
                hasPip: s,
                isUIOptimization: !1,
                isVideoDetailUIOptimization: !1,
                hasVideoDetailPip: s && n,
                isVideoDetailExperiment: "v1" !== t && n,
                isVideoDetailPlayerExperiment: o && n
            }
        }
        const S = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []));
            return {
                isOpenNewTab: "v2" === (null !== (e = (0,
                _.qt)(t, "webapp_browser_mode_new_tab")) && void 0 !== e ? e : "v1")
            }
        }
          , C = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []));
            return "v2" === (null !== (e = (0,
            _.qt)(t, "sidenav_test")) && void 0 !== e ? e : "v1")
        }
          , k = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []));
            return "v2" === (null !== (e = (0,
            _.qt)(t, "use_follow_v2")) && void 0 !== e ? e : "v1")
        }
          , L = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []));
            return "v1" === (null !== (e = (0,
            _.qt)(t, "enable_ml_model_suggest_content")) && void 0 !== e ? e : "v0")
        }
          , I = ({enterFrom: e, linkIncludeVid: t}) => {
            var n;
            const {abTestVersion: i} = (0,
            g.L$)((0,
            c.W)(( () => [m]), []))
              , o = null !== (n = (0,
            _.qt)(i, "studio_web_eh_entrance_v3")) && void 0 !== n ? n : "v1";
            let s = "https://effecthouse.tiktok.com/download?utm_source=tiktok_webapp_main";
            return e && (s = `${s}&enter_from=${e}`),
            t && (s = `${s}&utm_campaign=ttweb_entrance_${o}`),
            {
                showEhEntrance: !0,
                entranceVariant: o,
                ehLink: s
            }
        }
          , T = () => {
            const {abTestVersion: e} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []))
              , t = (0,
            _.qt)(e, "project_ace_control");
            return "v0" === t || "v1" === t
        }
          , x = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []))
              , n = null !== (e = (0,
            _.qt)(t, "add_profile_left_bar")) && void 0 !== e ? e : "v0";
            return {
                showProfileLeftBar: "v1" === n || "v3" === n,
                enableClickTopRightIcon: "v2" === n || "v3" === n
            }
        }
          , P = () => {
            var e;
            const {abTestVersion: t, user: n} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion", "user"]), []))
              , i = !!n;
            return "v1" === (null !== (e = (0,
            _.qt)(t, "friends_tab")) && void 0 !== e ? e : "v0") && i
        }
          , O = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []));
            return "v2" === (null !== (e = (0,
            _.qt)(t, "use_profile_avatar")) && void 0 !== e ? e : "v1")
        }
          , j = () => {
            var e, t, n, i;
            return {
                isRepostLabelEnabled: "v0" !== (null !== (e = (0,
                _.d)("webapp_repost_label")) && void 0 !== e ? e : "v0"),
                isRepostTabEnabled: "v0" !== (null !== (t = (0,
                _.d)("webapp_repost_tab")) && void 0 !== t ? t : "v0"),
                repostActionVid: null !== (n = (0,
                _.d)("webapp_repost_action")) && void 0 !== n ? n : "v0",
                isRepostNoticeEnabled: "v0" !== (null !== (i = (0,
                _.d)("webapp_repost_notice")) && void 0 !== i ? i : "v0")
            }
        }
          , M = () => j()
          , E = () => {
            var e;
            const t = "webapp_auto_dark_mode"
              , {abTestVersion: n} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []))
              , i = null !== (e = (0,
            p.S_)(n, t, !0)) && void 0 !== e ? e : "v0"
              , {isInAutoDarkModeExperiment: o, isInAutoDarkModeControl: s, isInAutoDarkModeTreatment: a} = (0,
            l.useMemo)(( () => ({
                isInAutoDarkModeExperiment: "v0" === i || "v1" === i,
                isInAutoDarkModeControl: "v0" === i,
                isInAutoDarkModeTreatment: "v1" === i
            })), [i]);
            return {
                baseExpId: t,
                isInAutoDarkModeControl: s,
                isInAutoDarkModeTreatment: a,
                isInAutoDarkModeExperiment: o
            }
        }
          , A = () => {
            const {abTestVersion: e} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []))
              , t = (0,
            _.qt)(e, "browser_fingerprint_basic")
              , n = (0,
            _.qt)(e, "browser_fingerprint_verify");
            return {
                isInBasicTreatment: "v1" === t,
                isInVerification: "v0" === n || "v1" === n
            }
        }
          , R = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []))
              , n = null !== (e = (0,
            _.qt)(t, "top_right_button")) && void 0 !== e ? e : "v0"
              , {pathname: o} = (0,
            i.zy)()
              , s = (0,
            r.tO)(o) || (0,
            r.gq)(o) || (0,
            r.K8)(o);
            return {
                isInTopRightButtonTreatment: "v0" !== n && s,
                isInTopRightButtonLeftNavHide: ("v2" === n || "v4" === n) && s,
                isInTopRightButtonProfile: ("v3" === n || "v4" === n) && s
            }
        }
          , F = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []))
              , n = null !== (e = (0,
            _.qt)(t, "keyboard_shortcut")) && void 0 !== e ? e : "v0"
              , {pathname: o} = (0,
            i.zy)()
              , s = (0,
            r.tO)(o) || (0,
            r.gq)(o) || (0,
            r.K8)(o);
            return {
                isInKeyboardShortcutTreatment: "v0" !== n && s,
                isInKeyboardShortcutV1: "v1" === n && s,
                isInKeyboardShortcutV2: "v2" === n && s
            }
        }
          , U = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []))
              , n = null !== (e = (0,
            _.qt)(t, "use_container_exp")) && void 0 !== e ? e : "v0";
            return {
                isInProductHoldout: "v1" === n || "v3" === n,
                isInPerformanceHoldout: "v2" === n || "v3" === n
            }
        }
          , V = () => {
            var e, t;
            const {abTestVersion: n} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []));
            return {
                count: null !== (t = {
                    v0: 10,
                    v1: 5,
                    v2: 8,
                    v3: 12
                }[null !== (e = (0,
                _.qt)(n, "search_yml_guess_count")) && void 0 !== e ? e : "v0"]) && void 0 !== t ? t : 10
            }
        }
          , D = () => {
            var e;
            const {abTestVersion: t, user: n} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion", "user"]), []))
              , i = null !== (e = (0,
            _.qt)(t, "use_navigation_refactor")) && void 0 !== e ? e : "v0";
            return {
                showUpload: !("v5" === i && !n),
                condenseProfileDropdown: "v5" === i
            }
        }
          , N = () => {
            var e, t;
            const {abTestVersion: n, user: i} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion", "user"]), []))
              , o = !!i;
            return {
                enableUploadRefactor: "v1" === (null !== (e = (0,
                _.qt)(n, "enable_upload_refactor")) && void 0 !== e ? e : "v0") && o,
                enableMessageRefactor: "v1" === (null !== (t = (0,
                _.qt)(n, "enable_message_refactor")) && void 0 !== t ? t : "v0") && o
            }
        }
          , B = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []))
              , n = null !== (e = (0,
            _.qt)(t, "use_left_navigation_refactor")) && void 0 !== e ? e : "v0";
            return {
                showNewLiveIcon: "v1" === n || "v3" === n,
                isCollapsibleFooter: "v2" === n || "v3" === n
            }
        }
          , W = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []));
            return null !== (e = (0,
            _.qt)(t, "webapp_explore_nav_order")) && void 0 !== e ? e : "v0"
        }
          , $ = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []));
            return {
                inWebappFypCacheExperiment: "v1" === (null !== (e = (0,
                _.qt)(t, "webapp_fyp_cache")) && void 0 !== e ? e : "v0")
            }
        }
          , q = () => {
            var e;
            const t = null !== (e = (0,
            _.d)("webapp_inapp_notice")) && void 0 !== e ? e : "v0";
            return {
                isInAppNotificationEnabled: "v0" !== t,
                placement: "v1" === t || "v2" === t ? "topEnd" : "bottomEnd",
                layoutType: "v1" === t || "v3" === t ? "withoutHeader" : "withHeader"
            }
        }
          , H = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []))
              , n = null !== (e = (0,
            _.qt)(t, "nav_phase_3")) && void 0 !== e ? e : "v0"
              , r = "v0" !== n
              , l = "v1" === (0,
            _.qt)(t, "enable_dm_side_nav")
              , d = "v1" === (0,
            _.qt)(t, "enable_setting_side_nav")
              , v = [o.OZ.feedback, o.OZ.feedbackReport, o.OZ.feedbackHistory, o.OZ.upload, s.vI.kycSubmission, s.vI.kyc, s.vI.kycLoading, s.vI.kycPoa, a.tH.loginHome, a.tH.signupHome, o.OZ.download, ...o.OZ.downloadWithLang, ...l ? [] : [o.OZ.messages], ...d ? [] : [o.OZ.setting, o.OZ.settingBlockList]]
              , {pathname: u} = (0,
            i.zy)();
            return {
                vid: n,
                isInNavPhase3: r,
                showFullSideNav: !(0,
                i.B6)(u, {
                    path: v,
                    exact: !0
                }) && "v0" !== n
            }
        }
          , z = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []))
              , n = null !== (e = (0,
            _.qt)(t, "enable_dm_side_nav")) && void 0 !== e ? e : "v0"
              , i = (0,
            u.Ig)();
            return "v0" !== n && !i
        }
          , K = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []));
            return "v0" !== (null !== (e = (0,
            _.qt)(t, "global_web_footer")) && void 0 !== e ? e : "v0")
        }
          , G = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []))
              , n = null !== (e = (0,
            _.qt)(t, "guest_mode_interest")) && void 0 !== e ? e : "v0";
            return {
                showGuestModeInterestSelector: "v0" !== n,
                showContinueButton: "v2" !== n
            }
        }
          , Z = () => {
            const {abTestVersion: e} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []))
              , t = (0,
            p.S_)(e, "redesign_login_popup");
            return {
                showLoginOptionSlider: "v3" === t || "v4" === t,
                showLoginOptionButton: "v1" === t || "v2" === t,
                showPopupWhenInitiallyLand: "v2" === t || "v4" === t,
                isInRedesignLoginPopupControl: "v0" === t,
                isInRedesignLoginPopupTreatment: void 0 !== t && "v0" !== t
            }
        }
          , J = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []));
            return "v2" === (null !== (e = (0,
            _.qt)(t, "web_dm_group_chat")) && void 0 !== e ? e : "v1")
        }
          , Q = () => {
            var e;
            const {abTestVersion: t} = (0,
            g.L$)((0,
            c.W)(( () => ["abTestVersion"]), []));
            return "v1" === (null !== (e = (0,
            _.qt)(t, "pns_communication_service_sdk")) && void 0 !== e ? e : "v0")
        }
          , Y = () => {
            var e;
            const t = null !== (e = (0,
            _.d)("side_nav_preload_cache")) && void 0 !== e ? e : "v0";
            return {
                enableSideNavPreloadAndCache: "v0" !== t,
                enableFYPSideNavPreloadAndCache: "v1" === t || "v2" === t || "v4" === t,
                cacheRange: "v1" === t ? 1 : "v2" === t ? 2 : 0,
                cacheAfter: "v4" === t
            }
        }
    }
    ,
    614218: (e, t, n) => {
        n.d(t, {
            Ah: () => N,
            F3: () => d,
            HF: () => V,
            Iw: () => k,
            Kt: () => o,
            LA: () => O,
            Lf: () => v,
            Ly: () => M,
            M2: () => P,
            Nd: () => W,
            Nj: () => L,
            O_: () => w,
            RM: () => m,
            S0: () => b,
            Uw: () => E,
            VD: () => R,
            Z3: () => a,
            _: () => u,
            _O: () => g,
            aF: () => x,
            em: () => f,
            fm: () => l,
            gM: () => y,
            iJ: () => S,
            i_: () => F,
            je: () => h,
            n9: () => D,
            rd: () => j,
            se: () => H,
            sj: () => c,
            tD: () => _,
            tS: () => U,
            un: () => p,
            vt: () => s,
            vu: () => A,
            xE: () => T,
            xl: () => C,
            z$: () => I,
            z3: () => r
        });
        var i = n(129343);
        const o = "webapp-live-nav-click"
          , s = "webapp_showed_profile_tip"
          , a = "search_history_list"
          , r = "webapp_showed_explore_new_label"
          , l = "showed_desktop_app_download"
          , d = "time_of_last_prediction"
          , c = "timeOfLastPopup"
          , v = "last_inference"
          , u = "pc_app_auto_tip"
          , p = "pc_floating_player_guide_show_3"
          , g = "pc_floating_player_guide_ack_3"
          , _ = "pc_floating_player_guide_show_4"
          , m = "pc_floating_player_guide_ack_4"
          , h = "pc_floating_player_guide_show_sw"
          , y = "suggest_account_bind_last_show"
          , b = "last_watch_live_on_pc"
          , f = "webapp_original_traffic_type"
          , w = "webapp_launch_mode"
          , S = "webapp_tiktok_open"
          , C = "webapp_tiktok_privious"
          , k = "webapp_open_edit_profile_modal_from"
          , L = "watch_live_on_pc"
          , I = "Sorry, something wrong with the server, please try again."
          , T = 1988
          , x = "tiktok_web"
          , P = 12
          , O = 3e4
          , j = 9
          , M = 9
          , E = 9
          , A = 30
          , R = 30
          , F = "tiktok_webapp_feed_mode"
          , U = "tiktok_webapp_theme"
          , V = "tiktok_webapp_theme_manual"
          , D = "tiktok_webapp_theme_source"
          , N = {
            secure: !0,
            expires: 300,
            domain: "www.tiktok.com"
        };
        var B;
        !function(e) {
            e.DarkTheme = "dark",
            e.LightTheme = "light"
        }(B || (B = {}));
        const W = i.$m.concat(["CH", "US", "GB"])
          , $ = "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/"
          , q = "https://lf16-tiktok-web.tiktokcdn-us.com/obj/tiktok-web-tx/"
          , H = {
            ROW: {
                remScript: `${$}tiktok/static/nginx/rem-script.js`,
                slardarWeb: `${$}slardar/sdk-pre/browser.web.pre.js`,
                serviceWorker: `${$}tiktok/static/nginx/service-worker.js`
            },
            TTP: {
                remScript: `${q}tiktok/static/nginx/rem-script.js`,
                slardarWeb: "https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/tiktok-infra/csp/sdk-pre/slardar.web.pre.js",
                serviceWorker: `${q}tiktok/static/nginx/service-worker.js`
            }
        }
    }
    ,
    580312: (e, t, n) => {
        n.d(t, {
            lD: () => i,
            yH: () => o
        });
        const i = "tiktok_webapp_live"
          , o = "tiktok_webapp_login"
    }
    ,
    775572: (e, t, n) => {
        n.d(t, {
            g9: () => c,
            li: () => d
        });
        var i = n(445372)
          , o = n.n(i)
          , s = n(465622)
          , a = n(309678)
          , r = n(952602);
        const l = (0,
        a.$)("ModalContext@tiktok/fe-shared")({
            counterRef: {
                current: 0
            },
            scrollWidthRef: {
                current: 0
            },
            subscribeRef: {
                current: []
            },
            setCounter: o(),
            setScrollWidth: o(),
            subscribeModalChange: () => o()
        });
        function d() {
            const e = (0,
            s.useRef)(0)
              , t = (0,
            s.useRef)(0)
              , n = (0,
            s.useRef)([])
              , i = (0,
            s.useCallback)((t => {
                e.current = t
            }
            ), [])
              , o = (0,
            s.useCallback)((e => {
                t.current = e
            }
            ), [])
              , a = (0,
            s.useCallback)((e => (n.current.push(e),
            () => {
                const t = n.current.indexOf(e);
                n.current.splice(t)
            }
            )), [])
              , r = (0,
            s.useMemo)(( () => ({
                counterRef: e,
                subscribeRef: n,
                scrollWidthRef: t,
                setCounter: i,
                setScrollWidth: o,
                subscribeModalChange: a
            })), [a, i, o]);
            return {
                GlobalModalProvider: l.Provider,
                value: r
            }
        }
        function c() {
            const {counterRef: e, setCounter: t, setScrollWidth: n, subscribeRef: i, scrollWidthRef: o, subscribeModalChange: a} = (0,
            s.useContext)(l)
              , d = (0,
            s.useCallback)((e => {
                i.current.forEach((t => {
                    t({
                        hasModal: e,
                        scrollWidth: o.current
                    })
                }
                ))
            }
            ), [o, i]);
            return {
                showModal: (0,
                s.useCallback)(( (i, o) => {
                    if (!(0,
                    r.Lm)() && !i || o)
                        return;
                    const {current: s} = e;
                    if (t(s + 1),
                    0 === s) {
                        const e = (0,
                        r.aP)();
                        n(e),
                        document.body.style.paddingRight = `${e}px`,
                        document.body.className += " hidden",
                        d(!0)
                    }
                }
                ), [e, d, t, n]),
                hideModal: (0,
                s.useCallback)(( () => {
                    const {current: i} = e
                      , o = Math.max(0, i - 1);
                    t(o),
                    0 === o && (n(0),
                    document.body.className = document.body.className.replace(/\s?hidden/g, ""),
                    document.body.style.paddingRight = "0px",
                    d(!1))
                }
                ), [e, d, t, n]),
                subscribeModalChange: a
            }
        }
    }
    ,
    75935: (e, t, n) => {
        n.d(t, {
            Ig: () => l,
            _Y: () => d
        });
        var i = n(263161)
          , o = n(423298)
          , s = n(397614)
          , a = n(461942)
          , r = n(1114);
        const l = () => {
            const {search: e} = (0,
            i.zy)();
            return "business" === new URLSearchParams(e).get("scene")
        }
          , d = e => {
            const t = (0,
            s.VR)((e => e.businessPermission), a.bN)
              , {isElectronApp: n} = (0,
            r.B)();
            return {
                path: t.message ? `/business-suite/messages?from=homepage&lang=${e}` : `${o.OZ.messages}?lang=${e}`,
                target: n && t.message ? "_blank" : void 0
            }
        }
    }
    ,
    254552: (e, t, n) => {
        n.d(t, {
            OC: () => p,
            h$: () => g
        });
        var i, o = n(611379), s = n(141735), a = n(25724), r = n(529756), l = n(814424), d = n(938397), c = n(954410), v = n(197747);
        !function(e) {
            e.Base = "base",
            e.Model = "model"
        }(i || (i = {}));
        const u = (0,
        a.atom)({});
        u.debugLabel = "spaExperimentAtom";
        const {useServiceDispatchers: p, useServiceState: g} = (0,
        r.i)(u, ( (e, t) => ({
            getAbTestVidWithQuerySPA({projectName: n, isInSpaExperiment: o, expVid: s, wid: a, globalModelInfo: r, vgeo: l, user: d, disableAutoTrigger: c=!1}) {
                const v = e(u);
                if (null == v ? void 0 : v[n])
                    return;
                let p = i.Base
                  , g = s
                  , _ = []
                  , m = 1
                  , h = [];
                if (o) {
                    const {projectLevelModelInfo: e} = ( (e, t) => {
                        let n = {};
                        if ("string" == typeof e)
                            try {
                                n = JSON.parse(e)
                            } catch (e) {
                                console.error("Error: Failed to parse uplift model info.", e)
                            }
                        else
                            "object" == typeof e && null !== e && (n = e);
                        return {
                            projectLevelModelInfo: null == n ? void 0 : n[t]
                        }
                    }
                    )(null != r ? r : {}, n) || {}
                      , {inference_effective_duration: t, inference_disabled_vgeo_list: i} = e || {}
                      , {type: o, default_vid: a, treatment_list: l} = (null == e ? void 0 : e[s]) || {};
                    o && (p = o),
                    a && (g = a),
                    Array.isArray(l) && (_ = l),
                    t && (m = t),
                    Array.isArray(i) && (h = i)
                }
                t(u, (e => Object.assign(Object.assign({}, e), {
                    [n]: {
                        projectName: n,
                        vid: g,
                        wid: a,
                        experimentType: p,
                        inferenceCount: 0,
                        treatmentList: _,
                        inferenceEffectiveDuration: m,
                        inferenceDisabledVGeoList: h
                    }
                }))),
                c || this.maybeTriggerInference({
                    projectName: n,
                    vgeo: l,
                    user: d
                })
            },
            maybeTriggerInference({projectName: n, vgeo: a="", user: r, enterMethod: p="", pageName: g=""}) {
                return (0,
                o.sH)(this, void 0, void 0, (function*() {
                    const o = e(u)[n];
                    if (!o)
                        return void console.log("Error. Unable to find the experiment: ", n);
                    const {wid: _, experimentType: m, vid: h, inferenceCount: y, treatmentList: b, inferenceEffectiveDuration: f, inferenceDisabledVGeoList: w} = o
                      , S = (0,
                    l.ZC)(_, d.uV, c.gb);
                    if (m === i.Base)
                        s.w.handleInferenceTrigger({
                            enter_method: p,
                            page_name: g,
                            model_name: `${n}_${h}`,
                            full_payload: null == S ? void 0 : S.toString(),
                            payload: null == S ? void 0 : S.toString(),
                            threshold_exceed: -1,
                            inference_result: -1
                        });
                    else if (m === i.Model && 0 === y && (0,
                    v.Iz)(w, a, !!r)) {
                        const {isCacheValid: e, cachedVid: i} = (0,
                        v.OG)(n, f, p, `${n}_${h}`, g);
                        if (e && i)
                            return void t(u, (e => Object.assign(Object.assign({}, e), {
                                [n]: Object.assign(Object.assign({}, o), {
                                    vid: i,
                                    inferenceCount: y + 1
                                })
                            })));
                        const {isSuccessful: s, resultVid: a} = (yield(0,
                        v.Ho)(n, h, _, b, p, g)) || {};
                        t(u, (e => Object.assign(Object.assign({}, e), {
                            [n]: Object.assign(Object.assign({}, o), {
                                vid: a || o.vid,
                                inferenceCount: s ? y + 1 : y
                            })
                        })))
                    }
                }
                ))
            },
            disqualifyForInference: (e, t, n, i) => {
                s.w.handleInferenceDisqualify({
                    enter_method: t,
                    model_name: e,
                    reason: i,
                    page_name: n
                })
            }
        })))
    }
    ,
    270965: (e, t, n) => {
        n.d(t, {
            P7: () => O,
            S_: () => j
        });
        var i, o = n(611379), s = n(465622), a = n(263161), r = n(122616), l = n(293122), d = n(298281), c = n(312688), v = n(746834), u = n(197747), p = n(952602), g = n(166315), _ = n(614218), m = n(905577), h = n(964667), y = n(720798), b = n(529756);
        !function(e) {
            e[e.None = 0] = "None",
            e[e.PromotePopupTip = 1] = "PromotePopupTip",
            e[e.LoginPopupRedesign = 2] = "LoginPopupRedesign",
            e[e.LoginPopup = 3] = "LoginPopup",
            e[e.InterestSelector = 4] = "InterestSelector"
        }(i || (i = {}));
        const f = new class {
            constructor() {
                this.priorityKeys = [],
                this.endPriorityKeys = []
            }
            start(e) {
                this.endPriorityKeys.filter((t => t !== e))
            }
            end(e) {
                if (!this.endPriorityKeys.includes(e)) {
                    this.endPriorityKeys.push(e);
                    const t = this.priorityKeys.find((e => !this.endPriorityKeys.includes(e)));
                    if (t)
                        return t
                }
                return null
            }
            remove(e) {
                this.priorityKeys.filter((t => t !== e))
            }
            add(e) {
                this.priorityKeys.includes(e) || (this.priorityKeys = [...this.priorityKeys, e].sort(( (e, t) => e - t)))
            }
            clean() {
                this.priorityKeys = [],
                this.endPriorityKeys = []
            }
        }
          , w = {
            0: !0,
            1: !1,
            3: !1
        }
          , S = (0,
        y.p)("popupPriorityAtom@tiktok/fe-shared", {
            priority: 0,
            isReadyList: w
        })
          , C = (0,
        y.p)("isAllReadyAtom@tiktok/fe-shared", (e => Object.values(e(S).isReadyList).reduce(( (e, t) => e && t))))
          , {useAtomService: k, useServiceDispatchers: L, useServiceState: I} = (0,
        b.i)(S, ( (e, t) => ({
            setIsPopupPriorityReady(n) {
                const i = e(S);
                if (t(S, Object.assign(Object.assign({}, i), {
                    isReadyList: Object.assign(Object.assign({}, i.isReadyList), {
                        [n]: !0
                    })
                })),
                e(C)) {
                    const n = f.end(0);
                    n ? t(S, Object.assign(Object.assign({}, e(S)), {
                        priority: n
                    })) : f.clean()
                }
            },
            clearReadyListOnRouteChange() {
                const n = e(S);
                t(S, Object.assign(Object.assign({}, n), {
                    isReadyList: w
                })),
                f.clean()
            },
            getPriorityPopup: n => ({
                handlePopoverInitial: () => {
                    f.start(n)
                }
                ,
                handlePopoverEnd: () => {
                    const i = e(S).priority;
                    if (n !== i)
                        f.remove(n);
                    else {
                        const i = f.end(n);
                        i ? t(S, Object.assign(Object.assign({}, e(S)), {
                            priority: i
                        })) : (f.clean(),
                        t(S, Object.assign(Object.assign({}, e(S)), {
                            priority: 0
                        })))
                    }
                }
                ,
                handlePopoverAdd: () => {
                    if (f.add(n),
                    e(C)) {
                        const n = f.end(0);
                        n && t(S, Object.assign(Object.assign({}, e(S)), {
                            priority: n
                        }))
                    }
                }
            })
        })));
        var T = n(254552)
          , x = n(573461)
          , P = n(461942);
        function O(e={}) {
            const t = (0,
            d.L$)((0,
            r.W)(( () => ["user", "wid", "abTestVersion", "webIdCreatedTime"]), []))
              , {user: n, abTestVersion: i, webIdCreatedTime: l} = t
              , y = (0,
            c.qt)(i, "webapp_login_prediction_full")
              , b = (0,
            c.qt)(i, "webapp_login_prediction_reverse")
              , f = (0,
            c.qt)(i, "webapp_login_causal_inference_validation")
              , {pathname: w} = (0,
            a.zy)()
              , S = (0,
            u.mv)(l)
              , C = y || b
              , k = !!f && "v1" !== f
              , {getPriorityPopup: T} = L()
              , {popupPriority: P} = I((e => ({
                popupPriority: e.priority,
                isReady: e.isReadyList[3]
            })))
              , {handlePopoverInitial: O, handlePopoverEnd: j} = (0,
            s.useMemo)(( () => T(3)), [T])
              , M = () => {
                var t;
                null === (t = e.closeCallback) || void 0 === t || t.call(e),
                j()
            }
              , E = (0,
            v.G)({
                modalConfig: Object.assign(Object.assign({
                    closeable: !1,
                    isGuestMode: !1,
                    query: {
                        enter_method: "model_based"
                    }
                }, e), {
                    closeCallback: M
                })
            })
              , A = (0,
            v.G)({
                modalConfig: Object.assign(Object.assign({
                    query: {
                        enter_method: "guest_mode"
                    },
                    isGuestMode: !1,
                    isGuestModeUI: !0
                }, e), {
                    closeCallback: M
                })
            })
              , R = (0,
            x.b1)()
              , F = (0,
            s.useCallback)(( (e, t, i) => (0,
            o.sH)(this, void 0, void 0, (function*() {
                if (n)
                    return;
                void 0 !== t && -1 >= t && (0,
                u.CE)(i) && 3 === P && ((0,
                p.AP)(_.sj, Date.now().toString()),
                A(),
                O()),
                R.setCheckPredictionLogin({
                    showLoginOnLoad: Boolean(!1)
                })
            }
            ))), [n, C, k, f, P, R, E, O, A]);
            return {
                loginPredictionHandler: (0,
                s.useCallback)(( () => {
                    const e = (0,
                    p.Hd)(_.iJ)
                      , t = (0,
                    u.Vw)(S, e)
                      , i = [{
                        expId: "webapp_login_prediction_full",
                        segmentId: t,
                        versionId: y,
                        propertyList: ["prediction_threshold"]
                    }, {
                        expId: "webapp_login_prediction_reverse",
                        segmentId: t,
                        versionId: b,
                        propertyList: ["prediction_threshold"]
                    }]
                      , {prediction_threshold: o, guest_mode_threshold: s, popup_interval: a} = (0,
                    m.J)(h.a, i);
                    n || void 0 === o && void 0 === s && !f ? R.setCheckPredictionLogin({
                        showLoginOnLoad: !1
                    }) : !(0,
                    u.oX)("app_load", "", "") || (0,
                    g.mQ)(w) || (0,
                    g.FJ)(w) || F(o, s, a)
                }
                ), [S, y, b, n, f, w, F, R])
            }
        }
        function j(e, t, n, i) {
            const {wid: o, user: s} = (0,
            d.L$)((0,
            r.W)(( () => ["wid", "user"]), []))
              , {upliftModelInfo: a={}, vgeo: v=""} = (0,
            d.L$)((0,
            l.U)(( () => ["upliftModelInfo", "vgeo"]), []))
              , u = null != i ? i : `${t}_spa`
              , p = (0,
            c.qt)(e, t)
              , g = (0,
            c.qt)(e, u)
              , _ = (0,
            T.OC)();
            g ? _.getAbTestVidWithQuerySPA({
                projectName: t,
                isInSpaExperiment: !0,
                expVid: g,
                wid: o,
                globalModelInfo: a,
                vgeo: v,
                user: s,
                disableAutoTrigger: n
            }) : p && _.getAbTestVidWithQuerySPA({
                projectName: t,
                isInSpaExperiment: !1,
                expVid: p,
                wid: o,
                globalModelInfo: a,
                vgeo: v,
                user: s,
                disableAutoTrigger: n
            });
            const {vid: m} = (0,
            d.L$)((0,
            T.h$)((e => e[t]), P.bN));
            return m
        }
    }
    ,
    197747: (e, t, n) => {
        n.d(t, {
            Ho: () => w,
            Vw: () => C,
            OG: () => L,
            CE: () => I,
            Iz: () => k,
            mv: () => S,
            oX: () => b
        });
        var i, o = n(611379), s = n(669872), a = n(952602);
        !function(e) {
            e[e.S = 1] = "S",
            e[e.T = 2] = "T",
            e[e.X = 3] = "X",
            e[e.R = 4] = "R"
        }(i || (i = {}));
        const r = {
            s: i.S,
            t: i.T,
            x: i.X,
            r: i.R
        }
          , l = e => {
            var t;
            return null !== (t = r[e.toLowerCase()]) && void 0 !== t ? t : null
        }
          , d = "/node-webapp/api/inference";
        var c = n(614218)
          , v = n(814424)
          , u = n(938397)
          , p = n(954410)
          , g = n(141735);
        const _ = ["homepage_hot", "others_homepage"]
          , m = (e, t) => {
            if (e.length !== t.length)
                throw new Error("Array and mask must be of the same length.");
            return e.filter(( (e, n) => "1" === t[n]))
        }
          , h = e => {
            var t, n, i;
            const o = atob(e)
              , s = [];
            for (let e = 0; e < o.length; e++) {
                const i = null === (n = null === (t = null == o ? void 0 : o.charCodeAt(e)) || void 0 === t ? void 0 : t.toString(2)) || void 0 === n ? void 0 : n.padStart(8, "0");
                s.push(i)
            }
            return null === (i = null == s ? void 0 : s.join("")) || void 0 === i ? void 0 : i.split("")
        }
        ;
        function y(e, t, i) {
            return (0,
            o.sH)(this, void 0, void 0, (function*() {
                try {
                    const o = yield n.g.fetch((0,
                    s.stringifyUrl)({
                        url: d,
                        query: {
                            fvaluesString: e.toString(),
                            modelName: t,
                            modelType: i
                        }
                    })).then((e => e.json()));
                    return 0 === o.statusCode && Array.isArray(o.result) ? o.result : (console.error(`Unable to get causal inference: ${o.statusCode}`),
                    [-1])
                } catch (e) {
                    return console.error("Error fetching inference result:", e),
                    [-1]
                }
            }
            ))
        }
        const b = (e, t="", n="") => {
            const i = (0,
            a._S)(c.F3);
            return !i || Date.now() - parseInt(i, 10) >= 1e3 ? ((0,
            a.AP)(c.F3, Date.now().toString()),
            !0) : (g.w.handleInferenceDisqualify({
                enter_method: e,
                model_name: t,
                reason: "api_rate_control",
                page_name: n
            }),
            !1)
        }
          , f = (e, t) => {
            const n = c.Lf
              , i = (0,
            a._S)(n) || "{}"
              , o = JSON.parse(i);
            o[e] = {
                timestamp: Date.now().toString(),
                vid: t
            },
            (0,
            a.AP)(n, JSON.stringify(o))
        }
        ;
        function w(e, t, n, i=[], s, a) {
            var r;
            return (0,
            o.sH)(this, void 0, void 0, (function*() {
                let o = {
                    vid: t,
                    inference_result: -1 / 0
                }
                  , d = !0;
                for (const e of i) {
                    const {treatment_vid: t, model_name: i="", model_type: c="", feature_number: _=0, prediction_threshold: b=0, feature_mask: f=""} = null != e ? e : {}
                      , w = (0,
                    v.ZC)(n || "", u.uV, p.gb);
                    if (0 === w.length) {
                        g.w.handleInferenceDisqualify({
                            enter_method: s,
                            model_name: i,
                            reason: "failed_to_generate_payload",
                            page_name: a
                        });
                        continue
                    }
                    let S = []
                      , C = [];
                    try {
                        const e = (null === (r = h(f || "")) || void 0 === r ? void 0 : r.slice(0, _)) || [];
                        C = m(w, e);
                        const t = l(c);
                        if (0 === C.length || !i || !t)
                            throw new Error(`Missing key parameters, unable to call inference API! maskedPayload.length: ${C.length}, modelName: ${i}, modelType: ${t}`);
                        S = yield y(C, i, t)
                    } catch (e) {
                        console.error("Unable to call inference API!", e),
                        g.w.handleInferenceTrigger({
                            enter_method: s,
                            page_name: a,
                            model_name: i,
                            full_payload: w.toString(),
                            payload: C.toString(),
                            threshold_exceed: 0,
                            inference_result: -1
                        });
                        continue
                    }
                    const [k] = S
                      , L = void 0 !== k && -1 !== k
                      , I = !!L && k > b;
                    g.w.handleInferenceTrigger({
                        enter_method: s,
                        page_name: a,
                        model_name: i,
                        full_payload: w.toString(),
                        payload: C.toString(),
                        threshold_exceed: I ? 1 : 0,
                        inference_result: k
                    }),
                    L ? I && k > o.inference_result && (o = {
                        vid: t,
                        inference_result: k
                    }) : d = !1
                }
                return d && f(e, o.vid),
                {
                    isSuccessful: d,
                    resultVid: o.vid
                }
            }
            ))
        }
        const S = (e=0) => {
            const t = (0,
            a._S)("old_user_ppe_test");
            return "1" !== t && ("0" === t || Date.now() / 1e3 - (e || 0) < 86400)
        }
          , C = (e=!0, t="") => e ? "segment_1" : (_.includes(t),
        "segment_default")
          , k = (e, t="", n=!1) => !!n || !e.includes(t)
          , L = (e, t=1, n, i="", o="") => {
            try {
                const s = (0,
                a._S)(c.Lf) || "{}"
                  , r = JSON.parse(s)[e]
                  , l = null == r ? void 0 : r.timestamp
                  , d = null == r ? void 0 : r.vid;
                if (!d || !l)
                    return {
                        isCacheValid: !1
                    };
                const v = 24 * t * 60 * 60 * 1e3;
                return Date.now() - parseInt(l, 10) <= v ? (g.w.handleInferenceDisqualify({
                    enter_method: n,
                    model_name: i,
                    reason: "inference_cached",
                    page_name: o
                }),
                {
                    isCacheValid: !0,
                    cachedVid: d
                }) : {
                    isCacheValid: !1
                }
            } catch (e) {
                return console.error("Error in getValidInferenceCache:", e),
                {
                    isCacheValid: !1
                }
            }
        }
          , I = (e=6e4) => {
            const t = (0,
            a._S)(c.sj);
            return !t || Date.now() - parseInt(t, 10) >= e
        }
    }
    ,
    964667: (e, t, n) => {
        n.d(t, {
            a: () => i
        });
        const i = {
            online: {
                segment_default: {
                    v1: [{
                        name: "popup_interval",
                        value: 432e5,
                        priority: 0
                    }]
                }
            },
            webapp_mobile_web2app_cta_guide: {
                segment_default: {
                    v1: [{
                        name: "prediction_threshold",
                        value: .001,
                        priority: 1
                    }],
                    v2: [{
                        name: "prediction_threshold",
                        value: .009,
                        priority: 1
                    }],
                    v3: [{
                        name: "prediction_threshold",
                        value: .03,
                        priority: 1
                    }],
                    v4: [{
                        name: "prediction_threshold",
                        value: .07,
                        priority: 1
                    }]
                }
            },
            webapp_login_prediction: {
                segment_default: {
                    v2: [{
                        name: "prediction_threshold",
                        value: .602572,
                        priority: 1
                    }, {
                        name: "popup_interval",
                        value: -1,
                        priority: 1
                    }],
                    v3: [{
                        name: "prediction_threshold",
                        value: .261145,
                        priority: 1
                    }, {
                        name: "popup_interval",
                        value: -1,
                        priority: 1
                    }],
                    v4: [{
                        name: "prediction_threshold",
                        value: .114536,
                        priority: 1
                    }, {
                        name: "popup_interval",
                        value: -1,
                        priority: 1
                    }],
                    v5: [{
                        name: "prediction_threshold",
                        value: .067758,
                        priority: 1
                    }, {
                        name: "popup_interval",
                        value: -1,
                        priority: 1
                    }],
                    v6: [{
                        name: "prediction_threshold",
                        value: .031474,
                        priority: 1
                    }, {
                        name: "popup_interval",
                        value: -1,
                        priority: 1
                    }],
                    v7: [{
                        name: "prediction_threshold",
                        value: .018922,
                        priority: 1
                    }, {
                        name: "popup_interval",
                        value: -1,
                        priority: 1
                    }],
                    v8: [{
                        name: "prediction_threshold",
                        value: .012345,
                        priority: 1
                    }, {
                        name: "popup_interval",
                        value: -1,
                        priority: 1
                    }],
                    v9: [{
                        name: "prediction_threshold",
                        value: .008136,
                        priority: 1
                    }, {
                        name: "popup_interval",
                        value: -1,
                        priority: 1
                    }]
                }
            },
            webapp_causal_inference_periodic_popup_validation: {
                segment_default: {
                    v1: [{
                        name: "popup_interval",
                        value: 432e5,
                        priority: 1
                    }],
                    v2: [{
                        name: "popup_interval",
                        value: 36e5,
                        priority: 1
                    }],
                    v3: [{
                        name: "popup_interval",
                        value: 36e5,
                        priority: 1
                    }],
                    v4: [{
                        name: "popup_interval",
                        value: 36e5,
                        priority: 1
                    }],
                    v5: [{
                        name: "popup_interval",
                        value: 432e5,
                        priority: 1
                    }],
                    v6: [{
                        name: "popup_interval",
                        value: 432e5,
                        priority: 1
                    }],
                    v7: [{
                        name: "popup_interval",
                        value: 432e5,
                        priority: 1
                    }]
                }
            },
            webapp_login_prediction_full: {
                segment_1: {
                    v1: [{
                        name: "prediction_threshold",
                        value: .012345,
                        priority: 1
                    }, {
                        name: "popup_interval",
                        value: -1,
                        priority: 1
                    }],
                    v2: [{
                        name: "prediction_threshold",
                        value: .012345,
                        priority: 1
                    }, {
                        name: "popup_interval",
                        value: -1,
                        priority: 1
                    }]
                },
                segment_2: {
                    v1: [{
                        name: "prediction_threshold",
                        value: .114536,
                        priority: 1
                    }, {
                        name: "popup_interval",
                        value: -1,
                        priority: 1
                    }],
                    v2: [{
                        name: "prediction_threshold",
                        value: .114536,
                        priority: 1
                    }, {
                        name: "popup_interval",
                        value: -1,
                        priority: 1
                    }]
                }
            },
            webapp_login_prediction_reverse: {
                segment_1: {
                    v1: [{
                        name: "prediction_threshold",
                        value: .012345,
                        priority: 1
                    }, {
                        name: "popup_interval",
                        value: -1,
                        priority: 1
                    }]
                },
                segment_2: {
                    v1: [{
                        name: "prediction_threshold",
                        value: .114536,
                        priority: 1
                    }, {
                        name: "popup_interval",
                        value: -1,
                        priority: 1
                    }]
                }
            },
            webapp_guest_mode: {
                segment_default: {
                    v2: [{
                        name: "cta_style",
                        value: "default",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_without",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_withoutSignup",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !1,
                        priority: 0
                    }],
                    v3: [{
                        name: "cta_style",
                        value: "default",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_without",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_withoutSignup",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !0,
                        priority: 0
                    }],
                    v4: [{
                        name: "cta_style",
                        value: "default",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !1
                    }],
                    v5: [{
                        name: "cta_style",
                        value: "default",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !0
                    }],
                    v6: [{
                        name: "cta_style",
                        value: "line",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_without",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_withoutSignup",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !1,
                        priority: 0
                    }],
                    v7: [{
                        name: "cta_style",
                        value: "line",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_without",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_withoutSignup",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !0,
                        priority: 0
                    }],
                    v8: [{
                        name: "cta_style",
                        value: "line",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !1
                    }],
                    v9: [{
                        name: "cta_style",
                        value: "line",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !0
                    }],
                    v10: [{
                        name: "cta_style",
                        value: "primary",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_without",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_withoutSignup",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !1,
                        priority: 0
                    }],
                    v11: [{
                        name: "cta_style",
                        value: "primary",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_without",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_withoutSignup",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !0,
                        priority: 0
                    }],
                    v12: [{
                        name: "cta_style",
                        value: "primary",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !1
                    }],
                    v13: [{
                        name: "cta_style",
                        value: "primary",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !0
                    }],
                    v14: [{
                        name: "cta_style",
                        value: "text",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_without",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_withoutSignup",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !1,
                        priority: 0
                    }],
                    v15: [{
                        name: "cta_style",
                        value: "text",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_without",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_withoutSignup",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !0,
                        priority: 0
                    }],
                    v16: [{
                        name: "cta_style",
                        value: "text",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !1
                    }],
                    v17: [{
                        name: "cta_style",
                        value: "text",
                        priority: 0
                    }, {
                        name: "login_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "signup_text",
                        value: "pcWeb_guestLogin_guest",
                        priority: 0
                    }, {
                        name: "close_icon",
                        value: !0
                    }]
                }
            },
            mobile_predictive_data: {
                segment_default: {
                    v0: [{
                        name: "vv_count",
                        value: -1,
                        priority: 0
                    }],
                    v1: [{
                        name: "vv_count",
                        value: 3,
                        priority: 0
                    }],
                    v2: [{
                        name: "vv_count",
                        value: 4,
                        priority: 0
                    }],
                    v3: [{
                        name: "vv_count",
                        value: 5,
                        priority: 0
                    }],
                    v4: [{
                        name: "vv_count",
                        value: 6,
                        priority: 0
                    }],
                    v5: [{
                        name: "vv_count",
                        value: 7,
                        priority: 0
                    }],
                    v6: [{
                        name: "vv_count",
                        value: 8,
                        priority: 0
                    }],
                    v7: [{
                        name: "vv_count",
                        value: 9,
                        priority: 0
                    }],
                    v8: [{
                        name: "vv_count",
                        value: 10,
                        priority: 0
                    }],
                    v9: [{
                        name: "vv_count",
                        value: 11,
                        priority: 0
                    }],
                    v10: [{
                        name: "vv_count",
                        value: 12,
                        priority: 0
                    }],
                    v11: [{
                        name: "vv_count",
                        value: 13,
                        priority: 0
                    }],
                    v12: [{
                        name: "vv_count",
                        value: 14,
                        priority: 0
                    }],
                    v13: [{
                        name: "vv_count",
                        value: 15,
                        priority: 0
                    }],
                    v14: [{
                        name: "vv_count",
                        value: 16,
                        priority: 0
                    }],
                    v15: [{
                        name: "vv_count",
                        value: 17,
                        priority: 0
                    }],
                    v16: [{
                        name: "vv_count",
                        value: 18,
                        priority: 0
                    }],
                    v17: [{
                        name: "vv_count",
                        value: 19,
                        priority: 0
                    }],
                    v18: [{
                        name: "vv_count",
                        value: 20,
                        priority: 0
                    }],
                    v19: [{
                        name: "vv_count",
                        value: 21,
                        priority: 0
                    }],
                    v20: [{
                        name: "vv_count",
                        value: 22,
                        priority: 0
                    }],
                    v21: [{
                        name: "vv_count",
                        value: 23,
                        priority: 0
                    }],
                    v22: [{
                        name: "vv_count",
                        value: 24,
                        priority: 0
                    }],
                    v23: [{
                        name: "vv_count",
                        value: 25,
                        priority: 0
                    }],
                    v24: [{
                        name: "vv_count",
                        value: 26,
                        priority: 0
                    }],
                    v25: [{
                        name: "vv_count",
                        value: 27,
                        priority: 0
                    }],
                    v26: [{
                        name: "vv_count",
                        value: 28,
                        priority: 0
                    }],
                    v27: [{
                        name: "vv_count",
                        value: 29,
                        priority: 0
                    }],
                    v28: [{
                        name: "vv_count",
                        value: 30,
                        priority: 0
                    }],
                    v29: [{
                        name: "vv_count",
                        value: 31,
                        priority: 0
                    }]
                }
            }
        }
    }
    ,
    905577: (e, t, n) => {
        function i(e, t) {
            const n = {}
              , i = function(e) {
                const t = e.reduce(( (e, t) => {
                    const {expId: n, segmentId: i, versionId: o, propertyList: s} = t;
                    return n && i && o ? (s.forEach((t => {
                        const s = {
                            expId: n,
                            segmentId: i,
                            versionId: o,
                            propertyName: t
                        };
                        e[t] = e[t] || [],
                        e[t].push(s)
                    }
                    )),
                    e) : e
                }
                ), {});
                return t
            }(t);
            for (const [t,s] of Object.entries(i)) {
                const i = o(e, s);
                n[t] = i
            }
            return n
        }
        function o(e, t) {
            const n = t.map((t => function(e, {expId: t, segmentId: n, versionId: i, propertyName: o}) {
                const s = e[t];
                if (!s)
                    return void console.error(`Error. Experiment: ${t} not found!`);
                const a = s[n];
                if (!a)
                    return;
                if (!i)
                    return;
                const r = a[i];
                return r ? r.find((e => e.name === o)) : void 0
            }(e, t))).filter((e => void 0 !== e));
            if (0 !== n.length)
                return n.reduce(( (e, t) => t.priority > e.priority ? t : e)).value
        }
        n.d(t, {
            J: () => i
        })
    }
    ,
    419258: (e, t, n) => {
        n.d(t, {
            HZ: () => l,
            dg: () => a,
            ug: () => s
        }),
        n(327334);
        var i = n(309678)
          , o = (n(292112),
        n(281591));
        (0,
        i.$)("SlardarControlContext@tiktok/fe-shared")(!1);
        const s = (0,
        i.$)("InlineSlardarConfigContext@tiktok/fe-shared")({
            enable: !0
        })
          , a = {
            plugins: {
                ajax: {
                    ignoreUrls: [".byteoversea.com", /mcs.*\.tiktok[vw]?\.(com|us|eu)/, ".tiktokcdn.com", ".tiktokcdn-us.com", "mon.tiktokv.(com|us|eu)", "ttwid/check", "passport/token/beat/web", /.*-webapp-prime\.(.*\.)?tiktok\.com/]
                },
                fetch: {
                    ignoreUrls: [".tiktokcdn.com", ".tiktokcdn-us.com", "mon.tiktokv.(com|us|eu)", "policy/notice", "feedback/v1/newest_reply", "ba/business/suite/permission/list", /.*-webapp-prime\.(.*\.)?tiktok\.com/]
                },
                jsError: {
                    ignoreErrors: ["Blocked a frame with origin", "__msg_type", "vid_mate_check is not defined", "ResizeObserver loop limit exceeded", 'Video playback error: {"errorCode":', "Object Not Found Matching Id", "The play method is not allowed by the user agent", "The play() request was interrupted", "Failed to load because no supported source was found", "The request is not allowed by the user agent or the platform in the current context", "Fetch is aborted", "The operation was aborted"]
                },
                resource: {
                    slowSessionThreshold: 1e5
                },
                fmp: !1,
                tti: !1,
                pageview: {
                    sendInit: !0,
                    routeMode: "manual"
                }
            },
            sample: {
                sample_rate: 1,
                sample_granularity: "session",
                include_users: [],
                rules: {
                    resource: {
                        enable: !0,
                        sample_rate: .01,
                        conditional_sample_rules: []
                    },
                    resource_error: {
                        enable: !0,
                        sample_rate: .05,
                        conditional_sample_rules: []
                    },
                    performance_longtask: {
                        enable: !0,
                        sample_rate: .001,
                        conditional_sample_rules: []
                    }
                }
            },
            env: "production",
            release: "1.0.0.6093",
            slardarClient: "SlardarClient",
            manual: 1,
            sdkUrl: o.Qn.row,
            pluginPathPrefix: o.tz.row
        };
        var r;
        !function(e) {
            e.P0 = "fatal",
            e.P1 = "error",
            e.P2 = "warning",
            e.P3 = "info",
            e.P4 = "debug",
            e.P5 = "critical"
        }(r || (r = {}));
        const l = ["lcp", "fp", "fid", "ttfb", "mpfid", "fcp", "actual_fmp"];
        var d;
        !function(e) {
            e.TTAPPluginInfo = "ttapplugin_info",
            e.TTAPPluginFirstScreenRequest = "ttapplugin_first_screen_request",
            e.TTAPPluginEffectiveOpenPage = "ttapplugin_effective_open_page",
            e.TTAPPluginCustomRequest = "ttapplugin_custom_request",
            e.actualFMP = "actual_fmp",
            e.LoginClickToNotifyDuration = "login_click_to_notify_duration"
        }(d || (d = {}))
    }
    ,
    814962: (e, t, n) => {
        n.d(t, {
            s: () => i
        });
        const i = ["live_im_sdk_socket_link", "live_edenx_runtime", "live_www_host", "live_starling_optimize", "live_chat_refactor_phase1", "fyp_live_card_open_direct", "live_non_logged_in_time_restriction_pc", "live_disable_header_skeleton", "image_fetch_priority", "video_reflow_skeleton_ui", "video_reflow_mpa_optimization", "video_reflow_csr_skeleton_enhance", "user_bundle_opt", "sharing_video_first", "live_recharge_login_sdk", "page_loading_tiny_changes", "react_upgrade_experiment", "kep_streaming", "web_dm_icon_click_check", "web_dm_quote_message", "web_dm_list_load_optimize", "web_dm_combo", "user_ssg", "organic_video_streaming"]
    }
    ,
    508941: (e, t, n) => {
        n.d(t, {
            rF: () => l,
            sZ: () => d,
            yf: () => r
        });
        var i = n(911991)
          , o = n(465622)
          , s = n(499325)
          , a = n(419258);
        function r() {
            const {enable: e=!0, enableHeadComponent: t, enableInlineScript: n, enableUseSlardarPageViewHook: i} = (0,
            o.useContext)(a.ug);
            return {
                enable: e,
                enableHeadComponent: null != t ? t : e,
                enableInlineScript: null != n ? n : e,
                enableUseSlardarPageViewHook: null != i ? i : e
            }
        }
        function l({pid: e}) {
            const t = (0,
            i.Nj)(s.V$)
              , {enableUseSlardarPageViewHook: n} = r();
            (0,
            o.useEffect)(( () => {
                n && (t.config({
                    pid: e
                }),
                t.start(e))
            }
            ), [e, t, n])
        }
        function d() {
            const {enable: e} = r();
            return e
        }
    }
    ,
    499325: (e, t, n) => {
        n.d(t, {
            V$: () => S,
            Yr: () => C,
            ng: () => k
        });
        var i = n(611379)
          , o = n(783415)
          , s = n(403057)
          , a = n(61284)
          , r = n(12110)
          , l = (n(810251),
        n(950374))
          , d = n(580312)
          , c = n(419258)
          , v = n(747950)
          , u = n(888457)
          , p = n(187079)
          , g = n(281591)
          , _ = n(135706)
          , m = n.n(_)
          , h = n(687924)
          , y = n.n(h)
          , b = n(814962);
        const f = ({message: e, defaultResult: t}={}) => (n, i, o) => {
            const s = o.value;
            return o.value = function(...o) {
                try {
                    const r = s.apply(this, o);
                    return (a = r) && a instanceof Promise || ("object" == typeof a || "function" == typeof a) && "function" == typeof a.then && "function" == typeof a.catch ? r.catch((o => (console.error(`${n.constructor.name}.${i.toString()}${e ? ` ${e}` : ""}: ${o}`),
                    t))) : r
                } catch (o) {
                    return console.error(`${n.constructor.name}.${i.toString()}${e ? ` ${e}` : ""}: ${o}`),
                    t
                }
                var a
            }
            ,
            o
        }
        ;
        var w = n(911991);
        (0,
        u.fU)() || v.O.setGlobalSlardarName("SlardarClient");
        let S = class {
            constructor() {
                this.cachePreBid = "",
                this._isPvFirstlyReported = !1,
                this._config = null,
                this._extraInfo = null,
                this._hasStart = !1,
                this._slardar = v.O
            }
            hasStarted() {
                return this._hasStart
            }
            mountBeforeSendEvent() {
                this._slardar.on("beforeSend", (e => {
                    var t, n, i, o, s, a;
                    try {
                        if ("performance" === e.ev_type && ("metrics"in e.payload ? e.payload.metrics.forEach(this.collectSlardarMetricsToTea) : this.collectSlardarMetricsToTea(e.payload, null === (t = e.common) || void 0 === t ? void 0 : t.pid)),
                        "performance_timing" === e.ev_type) {
                            const {responseEnd: t, responseStart: s, domContentLoadedEventEnd: a, fetchStart: r, navigationStart: d} = null !== (n = e.payload.timing) && void 0 !== n ? n : {}
                              , c = null !== (o = null === (i = e.payload.common) || void 0 === i ? void 0 : i.pid) && void 0 !== o ? o : "unknown"
                              , v = a - r
                              , u = t - s
                              , p = s - d;
                            l.f.event("slardar_perf_domready", {
                                metric_duration: v && v > 0 ? v.toString() : -1,
                                pid: c
                            }),
                            l.f.event("slardar_perf_response", {
                                metric_duration: u && u > 0 ? u.toString() : -1,
                                pid: c
                            }),
                            l.f.event("slardar_perf_ttfb", {
                                metric_duration: p && p > 0 ? p.toString() : -1,
                                pid: c
                            })
                        }
                        if ("custom" === e.ev_type && "video_play_end" === (null === (s = e.payload) || void 0 === s ? void 0 : s.name)) {
                            const {idc: t} = null !== (a = e.common.context) && void 0 !== a ? a : {};
                            e.common.context = t ? {
                                idc: t
                            } : {}
                        }
                    } catch (e) {}
                    return e
                }
                ))
            }
            init(e, t=!1, n={}, i) {
                this._option = i,
                t ? this.preserveConfig(e) : this._slardar.init(Object.assign({
                    ttap: Object.assign({}, n)
                }, e))
            }
            start(e="") {
                this._config && e && !this._hasStart && (this.init(Object.assign(Object.assign({}, this._config), {
                    pid: e
                })),
                this._hasStart = !0,
                this._extraInfo && this.config(this._extraInfo)),
                this._slardar.start()
            }
            config(e) {
                "pid"in e && !this._isPvFirstlyReported && (this._isPvFirstlyReported = !0,
                this.context({
                    isLandingPage: 0
                })),
                this._slardar.config(e)
            }
            registerImageXPlugin(e, t=.01) {
                return e ? (console.warn("[Slardar]imagex plugin not provided"),
                []) : []
            }
            toggleLoginSlardar(e) {
                var t, n;
                (null === (t = this._option) || void 0 === t ? void 0 : t.disableToggleLoginSlardar) || (e ? ((null === (n = this._slardar.config()) || void 0 === n ? void 0 : n.bid) && (this.cachePreBid = this._slardar.config().bid),
                this.config({
                    bid: d.yH
                })) : this.config({
                    bid: this.cachePreBid
                }))
            }
            context(e) {
                Object.entries(e).forEach(( ([e,t]) => {
                    this._slardar.context({
                        [e]: t
                    })
                }
                ))
            }
            captureMessage(e="", t, n={}) {
                this._slardar.captureException("string" == typeof e ? new Error(e) : e, t ? Object.assign(Object.assign({}, n), {
                    level: t
                }) : n)
            }
            emitEvent(e, t, n) {
                this._slardar.sendEvent({
                    name: e,
                    categories: n,
                    metrics: t
                })
            }
            reportI18nLoadedFailed(e, t) {
                this.emitEvent("I18nLoadFailed", {
                    count: 1
                }, {
                    staringName: e,
                    lang: t
                })
            }
            sendLog(e, t, n) {
                this._slardar.sendLog({
                    content: e,
                    level: t,
                    extra: n
                })
            }
            sendPV(e) {
                this._slardar.rawInstance()("sendPageview", e)
            }
            previousPid() {
                var e;
                return null === (e = this._slardar.config()) || void 0 === e ? void 0 : e.pid
            }
            sendCustomPerfMetric(e, t) {
                const n = null != t ? t : performance.now();
                this._slardar.sendCustomPerfMetric({
                    name: e,
                    value: n,
                    isCustom: !0
                })
            }
            preserveConfig(e) {
                this._config = e
            }
            preserveExtraInfo(e) {
                this._extraInfo = e
            }
            collectSlardarMetricsToTea(e, t) {
                if (e.isSupport || e.isPolyfill) {
                    const n = e.name.toLowerCase();
                    c.HZ.includes(n) && l.f.event(`slardar_perf_${n}`, {
                        metric_duration: e.value.toString(),
                        pid: null != t ? t : "unknown",
                        is_support: e.isSupport ? "1" : "0"
                    })
                }
            }
            reportActualFMP() {
                return this._slardar.reportActualFMP()
            }
            reportRenderStart() {
                return this._slardar.reportRenderStart()
            }
            reportRenderEnd() {
                return this._slardar.reportRenderEnd()
            }
            reportFirstScreenRequest(e, t) {
                this._slardar.reportFirstScreenRequest(e, t)
            }
            reportCustomRequest({name: e, startTime: t, endTime: n}) {
                var i;
                const o = (null === (i = null === performance || void 0 === performance ? void 0 : performance.timing) || void 0 === i ? void 0 : i.navigationStart) || (null === performance || void 0 === performance ? void 0 : performance.timeOrigin);
                this._slardar.reportCustomRequest(e, null != t ? t : o, n)
            }
            reportPageReady() {
                this._slardar.reportPageReady()
            }
            reportPageCrash({errorMsg: e}) {
                this._slardar.reportPageCrash({
                    errorMsg: e
                })
            }
            reportStabilityEvent(e) {
                this._slardar.reportStabilityEvent(e)
            }
            reportStabilityStack(e) {
                this._slardar.reportStabilityStack(e)
            }
            reportRouteRenderStart() {
                this._slardar.reportRouteRenderStart()
            }
            reportRouteRenderEnd() {
                this._slardar.reportRouteRenderEnd()
            }
        }
        ;
        S.start = (e, {bid: t, initLocation: n, appContext: i, bizContext: o, reportImage: s, slardarConfig: a={}, ttapOption: r={}, disableToggleLoginSlardar: l=!1, extractPid: d=e => e, customContext: v, beforeStart: _}) => {
            var h, f, w, S;
            const {abTestVersion: C, env: k, botType: L, user: I, wid: T, region: x} = null != i ? i : {}
              , {isMobile: P, isTTP: O, domains: j, idc: M, config: E} = null != o ? o : {}
              , A = !!s || "v2" === (null === (h = null == C ? void 0 : C.parameters.enable_slardar_image) || void 0 === h ? void 0 : h.vid)
              , R = e => {
                const t = d(e);
                return "delay_start_until_manually_called" === t ? "unknown" : t
            }
            ;
            return e.context(Object.assign(Object.assign(Object.assign({
                region: null != x ? x : "",
                botType: null != L ? L : "",
                isMobile: Boolean(P).toString(),
                isDowngrade: (0,
                u.qk)().toString(),
                isLogin: Boolean(I).toString(),
                isPPE: "ppe" === (null == k ? void 0 : k.type),
                isLandingPage: 1,
                isSSGPage: (0,
                u.$y)(),
                launchMode: (0,
                u.fU)() ? "" : (0,
                p.o7)()
            }, y()(m()(null !== (f = null == C ? void 0 : C.parameters) && void 0 !== f ? f : {}, (e => null == e ? void 0 : e.vid)), ( (e, t) => b.s.includes(t)))), {
                uid: null !== (w = null == I ? void 0 : I.uid) && void 0 !== w ? w : "",
                idc: null != M ? M : "unknown"
            }), v)),
            e.mountBeforeSendEvent(),
            e.init(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, c.dg), {
                bid: t,
                env: "boe" === (null == k ? void 0 : k.type) || "ppe" === (null == k ? void 0 : k.type) ? "test" : "production",
                domain: (null === (S = null == E ? void 0 : E.featureFlags) || void 0 === S ? void 0 : S.slardar_sg_domain) && "SG" === x ? "mon-sg.tiktokv.com" : null == j ? void 0 : j.slardar,
                useLocalConfig: "ppe" === (null == k ? void 0 : k.type) || "boe" === (null == k ? void 0 : k.type),
                integrations: [...e.registerImageXPlugin(A, s && "boolean" != typeof s ? s.sample : void 0)]
            }), O ? {
                sdkUrl: g.Qn.us,
                pluginPathPrefix: g.tz.us
            } : {}), {
                pid: R("string" == typeof n ? n : n.pathname),
                userId: T
            }), a), !1, Object.assign({
                isSpa: !0
            }, r), {
                disableToggleLoginSlardar: l
            }),
            "function" == typeof _ ? _().finally(( () => {
                e.start()
            }
            )).catch((e => {
                console.error("beforeStart failed", e)
            }
            )) : e.start(),
            {
                handleLocationChange: t => {
                    const n = R("string" == typeof t ? t : t.pathname);
                    e.context({
                        isLandingPage: 0
                    }),
                    e.sendPV(n)
                }
                ,
                slardar: e
            }
        }
        ,
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", []), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "mountBeforeSendEvent", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object, Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "init", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [String]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "start", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "config", null),
        (0,
        i.Cg)([f({
            defaultResult: []
        }), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Boolean, Object]), (0,
        i.Sn)("design:returntype", Object)], S.prototype, "registerImageXPlugin", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Boolean]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "toggleLoginSlardar", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "context", null),
        (0,
        i.Cg)([f({
            message: "capture exception error"
        }), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, String, Object]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "captureMessage", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [String, Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "emitEvent", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [String, String]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "reportI18nLoadedFailed", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [String, String, Object]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "sendLog", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [String]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "sendPV", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", []), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "previousPid", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [String, Number]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "sendCustomPerfMetric", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "preserveConfig", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "preserveExtraInfo", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "collectSlardarMetricsToTea", null),
        (0,
        i.Cg)([f({
            defaultResult: 0
        }), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", []), (0,
        i.Sn)("design:returntype", Number)], S.prototype, "reportActualFMP", null),
        (0,
        i.Cg)([f({
            defaultResult: 0
        }), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", []), (0,
        i.Sn)("design:returntype", Number)], S.prototype, "reportRenderStart", null),
        (0,
        i.Cg)([f({
            defaultResult: 0
        }), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", []), (0,
        i.Sn)("design:returntype", Number)], S.prototype, "reportRenderEnd", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Number, Number]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "reportFirstScreenRequest", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "reportCustomRequest", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", []), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "reportPageReady", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "reportPageCrash", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "reportStabilityEvent", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object]), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "reportStabilityStack", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", []), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "reportRouteRenderStart", null),
        (0,
        i.Cg)([f(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", []), (0,
        i.Sn)("design:returntype", void 0)], S.prototype, "reportRouteRenderEnd", null),
        S = (0,
        i.Cg)([(0,
        s._)()], S);
        const C = e => {
            const t = `createIsolatedSlardarService_${e}@tiktok/fe-shared`
              , n = (0,
            o.U)(t, ( () => new a.n(e)));
            r.l.addProvider({
                provide: n,
                useClass: S
            });
            const l = {
                provide: n,
                useExisting: n
            };
            let d, u = class extends S {
                constructor() {
                    super(),
                    this._slardar = v.O.create(e)
                }
                reportActualFMP() {
                    return 0
                }
                reportFirstScreenRequest() {}
                reportRenderEnd() {
                    return 0
                }
                reportRenderStart() {
                    return 0
                }
                reportCustomRequest() {}
                reportRouteRenderEnd() {}
                reportRouteRenderStart() {}
            }
            ;
            return u = (0,
            i.Cg)([(0,
            s._)(), (0,
            i.Sn)("design:paramtypes", [])], u),
            {
                inject: (e=u) => {
                    r.l.addProvider({
                        provide: n,
                        useClass: e
                    })
                }
                ,
                getInstance: () => r.l.getInstance(l),
                useInstance: () => (0,
                w.Nj)(l),
                isIsolated: () => r.l.getInstance(l)instanceof u,
                start: e => {
                    var t;
                    const n = r.l.getInstance(l);
                    if (n instanceof u)
                        return d ? d.handleLocationChange(e.initLocation) : void (d = S.start(n, Object.assign(Object.assign({}, e), {
                            slardarConfig: Object.assign(Object.assign({}, e.slardarConfig), {
                                plugins: Object.assign(Object.assign(Object.assign({}, c.dg.plugins), {
                                    performance: !1
                                }), null === (t = e.slardarConfig) || void 0 === t ? void 0 : t.plugins)
                            })
                        })))
                }
                ,
                handleLocationChange: e => {
                    null == d || d.handleLocationChange(e)
                }
                ,
                INJECTION_TOKEN: n
            }
        }
          , k = r.l.getInstance(S)
    }
    ,
    759960: (e, t, n) => {
        n.d(t, {
            TJ: () => u
        });
        var i = n(611379)
          , o = n(545198)
          , s = n(950374)
          , a = n(175792)
          , r = n(25724)
          , l = n(529756);
        const d = e => {
            const t = {};
            for (const [n,i] of e)
                t[n] = i;
            return t
        }
          , c = Object.assign({
            globalWid: "",
            canvasId: "",
            hasReportedOnLanding: !1
        }, d(["fonts", "domBlockers", "fontPreferences", "audio", "screenFrame", "osCpu", "languages", "colorDepth", "deviceMemory", "screenResolution", "hardwareConcurrency", "timezone", "sessionStorage", "localStorage", "indexedDB", "openDatabase", "cpuClass", "platform", "plugins", "canvas", "touchSupport", "vendor", "vendorFlavors", "cookiesEnabled", "colorGamut", "invertedColors", "forcedColors", "monochrome", "contrast", "reducedMotion", "hdr", "math", "videoCard", "pdfViewerEnabled", "architecture", "userAgent", "webglUnmaskedVendor", "webglUnmaskedRenderer", "webglImageHash"].map((e => [e, ""]))))
          , v = (0,
        r.atom)(c);
        v.debugLabel = "globalWidAtom";
        const {useServiceDispatchers: u, useServiceState: p} = (0,
        l.i)(v, ( (e, t) => ({
            maybeGenerateAndReportGlobalWidInfo: n => (0,
            i.sH)(void 0, void 0, void 0, (function*() {
                var i, r;
                const {isLanding: l=!1, enterMethod: c, hashedIP: u="", region: p=""} = n;
                try {
                    let n = ""
                      , g = ""
                      , _ = {};
                    if (!e(v).globalWid) {
                        const e = yield(0,
                        o.e)(u, p);
                        n = null !== (i = null == e ? void 0 : e.gwid) && void 0 !== i ? i : "",
                        g = null !== (r = null == e ? void 0 : e.canvasId) && void 0 !== r ? r : "",
                        _ = null != e ? e : {},
                        n && t(v, (e => Object.assign(Object.assign(Object.assign({}, e), {
                            globalWid: n,
                            canvasId: g
                        }), _)))
                    }
                    return l && e(v).hasReportedOnLanding || a.u.handleSendGlobalWid(Object.assign({
                        global_wid: e(v).globalWid,
                        canvas_id: e(v).canvasId,
                        enter_method: c,
                        page_name: s.f.commonParams.page_name
                    }, d(Object.entries(e(v)).filter(( ([e]) => !["globalWid", "canvasId", "hasReportedOnLanding"].includes(e)))))),
                    e(v).globalWid
                } catch (e) {
                    return console.error("Error in maybeGenerateAndReportGlobalWidInfo:", e),
                    null
                }
            }
            )),
            setLandingPageETSentFlag: e => {
                const {hasReportedOnLanding: n} = e;
                t(v, (e => Object.assign(Object.assign({}, e), {
                    hasReportedOnLanding: n
                })))
            }
        })))
    }
    ,
    376769: (e, t, n) => {
        n.d(t, {
            ct: () => h,
            tF: () => m
        });
        var i = n(611379)
          , o = n(669872)
          , s = n(465622)
          , a = n(263161)
          , r = n(136125)
          , l = n(6023)
          , d = n(888457)
          , c = n(166315)
          , v = n(122616)
          , u = n(293122)
          , p = n(499971)
          , g = n(298281)
          , _ = n(270965);
        function m(e, t, n) {
            var i;
            const o = (0,
            g.L$)((0,
            v.W)(( () => ["region", "user", "wid", "abTestVersion", "language", "odinId"]), []))
              , a = (0,
            g.L$)((0,
            u.U)(( () => ["domains", "vgeo"]), []))
              , {abTestVersion: l, user: c} = o
              , m = (0,
            p.mx)(l, null !== (i = null == c ? void 0 : c.uid) && void 0 !== i ? i : "");
            (0,
            r.W0)(Object.assign(Object.assign({}, a), o), ( () => Object.assign(Object.assign({}, e()), {
                is_downgrade: (0,
                d.qk)(),
                is_non_personalized: m ? "1" : "0"
            })), t);
            const {loginPredictionHandler: h} = (0,
            _.P7)(n);
            (0,
            s.useEffect)(( () => {
                h()
            }
            ), [h])
        }
        function h({eParams: e}) {
            var t, n;
            const {botType: r, webIdCreatedTime: d} = null !== (t = (0,
            v.W)(( () => ["botType", "webIdCreatedTime"]), [])) && void 0 !== t ? t : {}
              , {isMobile: p} = null !== (n = (0,
            u.U)(( () => ["isMobile"]), [])) && void 0 !== n ? n : {}
              , {search: g, pathname: _} = (0,
            a.zy)()
              , m = (0,
            o.parse)(g);
            return (0,
            s.useCallback)(( () => {
                const t = e || {}
                  , {is_from_webapp: n} = t
                  , o = (0,
                i.Tt)(t, ["is_from_webapp"])
                  , s = m.sender_web_id ? {
                    sender_device: m.sender_device,
                    sender_web_id: m.sender_web_id
                } : {}
                  , a = p || (0,
                c.tO)(_) || (v = `#${location.pathname}`,
                /^#\/@.*\/video\/\d+$/.test(v)) || location.search.indexOf("item_id") > -1 ? Object.assign({
                    is_from_webapp: n || ["v1", "v2", "v3"].indexOf(m.is_from_webapp) > -1 ? m.is_from_webapp : "0"
                }, s) : {};
                var v;
                const u = {
                    browser_height: "undefined" != typeof window ? window.innerHeight : 0,
                    browser_width: "undefined" != typeof window ? window.innerWidth : 0
                }
                  , g = Object.assign(Object.assign(Object.assign({
                    bot_type: null != r ? r : "others",
                    keyword: m.keyword,
                    sub_keyword: m.sub_keyword,
                    duration: performance.now(),
                    webIdCreatedTime: d
                }, o), a), u);
                l.O.handlePageView(g)
            }
            ), [e, m.sender_web_id, m.sender_device, m.is_from_webapp, p, m.keyword, m.sub_keyword, _, r])
        }
    }
    ,
    360690: (e, t, n) => {
        n.d(t, {
            BO: () => a,
            i0: () => r,
            lH: () => s,
            sg: () => l
        });
        const i = 99
          , o = "99+";
        function s(e, t=i, n=o) {
            return e > t ? n : String(e)
        }
        function a(e) {
            var t;
            return void 0 === e ? "" : e.url_list && (null === (t = e.url_list) || void 0 === t ? void 0 : t.length) > 0 ? e.url_list[0] : ""
        }
        const r = {
            [-1]: -1,
            0: 0,
            1: 1,
            2: 2,
            4: 3
        };
        function l(e, t=!1) {
            const {follower_count: n, following_count: i, aweme_count: o} = e;
            return {
                diggCount: 0,
                followerCount: null != n ? n : 0,
                followingCount: null != i ? i : 0,
                heart: 0,
                heartCount: 0,
                videoCount: null != o ? o : 0,
                needFix: t
            }
        }
    }
    ,
    428986: (e, t, n) => {
        n.d(t, {
            Bv: () => r,
            LU: () => c,
            PC: () => l,
            _w: () => s,
            bc: () => o,
            lL: () => d
        });
        var i = n(750721);
        const o = new i.w1("frequency-control-config","local")
          , s = new i.w1("flip-control-config","local");
        var a;
        !function(e) {
            e.Manual = "manual",
            e.BrowserMode = "browser_mode"
        }(a || (a = {})),
        new i.w1("webapp-video-mute","local");
        const r = new i.w1("keyboard-shortcut-config","local")
          , l = (new i.w1("webapp-comment-url","session"),
        new i.w1("search-entry-block-map-storage","local"))
          , d = new i.w1("fyp-feed-cache","local")
          , c = new i.w1("search_history_map","local");
        new i.w1("multi-account-info","local")
    }
    ,
    581050: (e, t, n) => {
        n.d(t, {
            AF: () => _,
            N2: () => p,
            Q2: () => g,
            oN: () => c
        });
        var i = n(263161)
          , o = n(213732)
          , s = n(423298)
          , a = n(584770)
          , r = n(364183)
          , l = n(166315);
        const d = 1e3;
        function c(e) {
            var t, n, a, r;
            return e.length > d ? "" : (0,
            l.tO)(e) ? "homepage_hot" : /^\/@(.*?)\/video\/(.*?)/.test(e) ? "video_detail" : /^\/@(.*?)/.test(e) ? "others_homepage" : /^\/music\//.test(e) ? "single_song" : /^\/effect\//.test(e) ? "effect_detail" : /^\/tag\//.test(e) ? "challenge" : /^\/following/.test(e) ? "homepage_follow" : /^\/explore/.test(e) ? "explore_page" : "expansion" === (null === (t = (0,
            o.uZ)(e)) || void 0 === t ? void 0 : t.name) ? "discover_kw" : /^\/channel\/.+/.test(e) ? "channel" : "discover" === (null === (n = (0,
            s.kv)(e)) || void 0 === n ? void 0 : n.name) ? "discovery" : /^\/profile/.test(e) ? "personal_homepage" : /^\/topics/.test(e) ? `topic_${e.slice(1).split("/")[1]}` : /^\/inbox/.test(e) ? "homepage_message" : /^\/report/.test(e) ? "report" : /^\/ad-report/.test(e) ? "report_ad" : /^\/feedback\/report/.test(e) ? "feedback_report" : /^\/feedback\/history/.test(e) ? "feedback_history" : /^\/feedback/.test(e) ? "feedback" : (0,
            i.B6)(e, {
                path: s.OZ.searchHome,
                exact: !0
            }) ? "general_search" : (0,
            i.B6)(e, {
                path: s.OZ.searchUser,
                exact: !0
            }) ? "search_user" : (0,
            i.B6)(e, {
                path: s.OZ.searchVideo,
                exact: !0
            }) ? "search_video" : /^\/playlist-music/.test(e) ? "music_playlist" : /^\/messages/.test(e) ? "messages" : /^\/setting/.test(e) ? "setting" : /^\/place/.test(e) ? "place" : /^\/@(.*?)\/collection\/(.*?)/.test(e) ? "collection" : /^\/@(.*?)\/playlist\/(.*?)/.test(e) ? "reflow_video_playlist" : /^\/download/.test(e) ? "download" : "trendingDetail" === (null === (a = (0,
            o.uZ)(e)) || void 0 === a ? void 0 : a.name) || "trendingDetailWithinDiscover" === (null === (r = (0,
            o.uZ)(e)) || void 0 === r ? void 0 : r.name) ? "discover_pro" : ""
        }
        function v(e) {
            return e.length > d ? "" : /^\/@(.*?)\/live\/(.*?)/.test(e) ? "live_detail" : (0,
            i.B6)(e, {
                path: a.vI.liveGoLive,
                exact: !0
            }) ? "live_take" : (0,
            l.U0)(e) ? "live_discover" : (0,
            l.j)(e) ? "live_event" : (0,
            l.RR)(e) ? "live_event_aggregation" : (0,
            i.B6)(e, {
                path: a.vI.liveRoomEmbed,
                exact: !0
            }) ? "live_embed_detail" : (0,
            i.B6)(e, {
                path: a.vI.liveRoom,
                exact: !0
            }) ? "live_detail" : ""
        }
        function u(e) {
            return (0,
            i.B6)(e, {
                path: r.tH.loginHome,
                exact: !1
            }) || (0,
            i.B6)(e, {
                path: r.tH.oauth,
                exact: !1
            }) || (0,
            i.B6)(e, {
                path: r.tH.oauthLine,
                exact: !1
            }) ? "login" : (0,
            i.B6)(e, {
                path: r.tH.signupHome,
                exact: !1
            }) ? "signup" : ""
        }
        function p(e) {
            for (const t of [c, v, u]) {
                const n = t(e);
                if (n)
                    return n
            }
            return "unknown"
        }
        function g() {
            return location.pathname.startsWith(s.OZ.musicPlaylist.split(":")[0]) && location.pathname.length <= d ? `${location.origin}${location.pathname.replace(/%23|%3F|%2F/g, "")}${location.search}` : location.href
        }
        function _() {
            return location.pathname.startsWith(s.OZ.musicPlaylist.split(":")[0]) && location.pathname.length <= d ? `${location.origin}${location.pathname.replace(/%23|%3F|%2F/g, "")}` : `${location.origin}${location.pathname}`
        }
    }
    ,
    593295: (e, t, n) => {
        n.d(t, {
            W: () => _
        });
        var i = n(327334)
          , o = n(911991)
          , s = n(465622)
          , a = n(545400)
          , r = n(499325)
          , l = n(2032)
          , d = n(623810);
        const c = (0,
        l.default)("div", {
            target: "emuynwa0"
        })(( ({isFullScreen: e}) => e ? {
            flex: "1 1 auto"
        } : null), {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: "0 auto"
        }, "label:DivErrorContainer;")
          , v = (0,
        l.default)("p", {
            target: "emuynwa1"
        })(( ({theme: {typography: e, fontWeights: t, fontFamilies: n, colors: i}}) => [e.H4, {
            fontFamily: n.TikTokDisplayFont,
            fontWeight: t.bold,
            color: i.TextPrimary,
            marginTop: "24px"
        }]), "label:PTitle;")
          , u = (0,
        l.default)("p", {
            target: "emuynwa2"
        })(( ({theme: {typography: e, fontWeights: t, fontFamilies: n, colors: i}}) => [e.P2, {
            fontFamily: n.TikTokFont,
            fontWeight: t.normal,
            color: i.TextSecondary,
            marginTop: "8px"
        }]), "label:PDesc;")
          , p = l.default.div`
  margin-top: 24px;
`
          , g = (0,
        l.default)(d.y, {
            target: "emuynwa3"
        })({
            marginTop: "24px"
        }, "label:StyledButton;")
          , _ = function(e) {
            const {iconElem: t, title: n, desc: l, buttonText: d, button: _, isFullScreen: m, style: h, brightness: y=1, e2eTitle: b, e2eDesc: f, e2eButton: w, onButtonShow: S, ignoreErrorReport: C=!1} = e
              , k = (0,
            o.Nj)(r.V$);
            return (0,
            s.useEffect)(( () => {
                (d || _) && (null == S || S()),
                C || (k.emitEvent("handled_error_report", {}, {}),
                a.T.handleRenderErrorEvent())
            }
            ), [d, _, S, C, k]),
            (0,
            i.jsxs)(c, {
                isFullScreen: m,
                style: h,
                children: [t, n && (0,
                i.jsx)(v, {
                    "data-e2e": b,
                    brightness: y,
                    children: n
                }), l && (0,
                i.jsx)(u, {
                    "data-e2e": f,
                    brightness: y,
                    children: l
                }), _ && (0,
                i.jsx)(p, {
                    "data-e2e": w,
                    children: _
                }), !_ && Boolean(d) && (0,
                i.jsx)(g, {
                    type: "button",
                    onClick: e.onButtonClick,
                    buttonTheme: "default",
                    size: "large",
                    e2eTag: w,
                    children: d
                })]
            })
        }
    }
    ,
    981618: (e, t, n) => {
        n.d(t, {
            p: () => S
        });
        var i = n(327334)
          , o = n(500556)
          , s = n(56139)
          , a = n(465622)
          , r = n(69146)
          , l = n(74055)
          , d = n(298281)
          , c = n(508941)
          , v = n(122616);
        const u = function({iconSrc: e="https://www.tiktok.com/favicon.ico"}) {
            return (0,
            i.jsxs)(r.mg, {
                children: [(0,
                i.jsx)("meta", {
                    name: "google",
                    content: "notranslate"
                }, "google"), ",", (0,
                i.jsx)("meta", {
                    name: "format-detection",
                    content: "telephone=no"
                }, "format-detection"), ",", (0,
                i.jsx)("link", {
                    rel: "shortcut icon",
                    href: e,
                    type: "image/x-icon"
                }, "shortcut")]
            })
        };
        var p = n(911991)
          , g = n(187079)
          , _ = n(888457)
          , m = n(814962)
          , h = n(499325)
          , y = n(419258)
          , b = n(614218);
        const f = function({appContext: e, bizContext: t, slardarBid: n, initialPid: o, async: s=!1, reportImage: l}) {
            var d, v;
            const {abTestVersion: u, env: f, botType: w, user: S, wid: C, region: k} = null != e ? e : {}
              , {isMobile: L, domains: I, isTTP: T, idc: x, config: P} = null != t ? t : {}
              , O = (0,
            p.Nj)(h.V$)
              , j = (0,
            a.useMemo)(( () => null == P ? void 0 : P.featureFlags), [])
              , M = (0,
            a.useMemo)(( () => {
                var e;
                return Object.assign(Object.assign({
                    region: null != k ? k : "",
                    botType: null != w ? w : "",
                    isMobile: Boolean(L).toString(),
                    isDowngrade: (0,
                    _.qk)().toString(),
                    isLogin: Boolean(S).toString(),
                    isPPE: "ppe" === (null == f ? void 0 : f.type),
                    isLandingPage: 1,
                    launchMode: (0,
                    _.fU)() ? "" : (0,
                    g.o7)()
                }, ( (e={
                    parameters: {},
                    versionName: ""
                }) => {
                    const t = {};
                    try {
                        const n = e.parameters || {};
                        Object.entries(n).forEach(( ([e,n]) => {
                            m.s.includes(e) && (t[e] = n.vid)
                        }
                        ))
                    } catch (e) {
                        console.error("Abtest config parse error", e)
                    }
                    return t
                }
                )(u)), {
                    uid: null !== (e = null == S ? void 0 : S.uid) && void 0 !== e ? e : "",
                    idc: null != x ? x : "unknown"
                })
            }
            ), [k, w, L, S, null == f ? void 0 : f.type, u])
              , {enableInlineScript: E} = (0,
            c.yf)()
              , A = !!l || "v2" === (null === (v = null === (d = null == u ? void 0 : u.parameters) || void 0 === d ? void 0 : d.enable_slardar_image) || void 0 === v ? void 0 : v.vid)
              , R = (0,
            a.useMemo)(( () => Object.assign(Object.assign(Object.assign({}, y.dg), {
                bid: n,
                env: "boe" === (null == f ? void 0 : f.type) || "ppe" === (null == f ? void 0 : f.type) ? "test" : "production",
                domain: (null == j ? void 0 : j.slardar_sg_domain) && "SG" === k ? "mon-sg.tiktokv.com" : null == I ? void 0 : I.slardar,
                disableInit: !0,
                useLocalConfig: "ppe" === (null == f ? void 0 : f.type) || "boe" === (null == f ? void 0 : f.type),
                integrations: [...O.registerImageXPlugin(A, l && "boolean" != typeof l ? l.sample : void 0)]
            }), T ? {
                sdkUrl: "https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/slardar/fe/sdk-web/browser.oci.js",
                pluginPathPrefix: "https://lf16-cdn-tos.tiktokcdn-us.com/obj/static-tx/slardar/fe/sdk-web/plugins"
            } : {})), [null == I ? void 0 : I.slardar, null == f ? void 0 : f.type, T, n, j, k])
              , F = (0,
            a.useMemo)(( () => JSON.stringify(R)), [R]);
            return (0,
            a.useEffect)(( () => {
                let e;
                const t = () => {
                    window.SlardarClient ? O.hasStarted() || (O.mountBeforeSendEvent(),
                    O.init(Object.assign(Object.assign({}, R), {
                        pid: o
                    })),
                    O.config({
                        userId: C
                    }),
                    O.start()) : e = window.requestIdleCallback ? window.requestIdleCallback(t) : window.setTimeout(t, 1)
                }
                ;
                return O.context(M),
                "delay_start_until_manually_called" === o ? (O.preserveConfig(R),
                O.preserveExtraInfo({
                    userId: C
                })) : (O.mountBeforeSendEvent(),
                O.init(Object.assign(Object.assign({}, R), {
                    pid: o
                })),
                O.config({
                    userId: C
                }),
                O.start(),
                e = window.requestIdleCallback ? window.requestIdleCallback(t) : window.setTimeout(t, 1)),
                () => {
                    window.cancelIdleCallback ? window.cancelIdleCallback(e) : window.clearTimeout(e)
                }
            }
            ), []),
            !E || (0,
            _._8)(s) ? null : (0,
            i.jsxs)(r.mg, {
                children: [(0,
                i.jsx)("script", {
                    id: "slardar-config",
                    type: "application/json",
                    children: F
                }), s ? (0,
                i.jsx)("script", {
                    src: b.se[T ? "TTP" : "ROW"].slardarWeb,
                    async: "DO_NOT_DELETE_FOR_REHYDRATE_ERROR"
                }) : (0,
                i.jsx)("script", {
                    src: b.se[T ? "TTP" : "ROW"].slardarWeb
                })]
            })
        }
          , w = function({isLogin: e, isFtc: t}) {
            return (0,
            i.jsx)(r.mg, {
                children: (0,
                i.jsx)("meta", {
                    name: "pumbaa-ctx",
                    content: `login=${e ? 1 : 0},ftc=${t ? 1 : 0}`
                })
            })
        }
          , S = function({appContext: e, bizContext: t, slardarBid: n, iconSrc: p, initialPid: g, asyncSlardar: _=!1, usePumbaaMeta: m=!1, slardarReportImage: h}) {
            var y;
            const {language: b} = (0,
            d.L$)(e)
              , {isDark: S} = (0,
            o.u)()
              , {user: C} = null !== (y = (0,
            v.W)(( () => ["user"]), [])) && void 0 !== y ? y : {}
              , {enableHeadComponent: k} = (0,
            c.yf)()
              , L = Boolean(C)
              , I = Boolean(null == C ? void 0 : C.ftcUser)
              , T = (0,
            s.w)(l.P);
            return (0,
            a.useEffect)(( () => {
                L && T.getComplianceSettings()
            }
            ), [L, T]),
            (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(r.mg, {
                    htmlAttributes: {
                        lang: b,
                        "data-theme": S ? "dark" : "light"
                    }
                }), (0,
                i.jsx)(u, {
                    iconSrc: p
                }), m && (0,
                i.jsx)(w, {
                    isLogin: L,
                    isFtc: I
                }), k && (0,
                i.jsx)(f, {
                    appContext: e,
                    bizContext: t,
                    slardarBid: n,
                    initialPid: g,
                    async: _,
                    reportImage: h
                })]
            })
        }
    }
    ,
    746834: (e, t, n) => {
        n.d(t, {
            G: () => a,
            K: () => r
        });
        var i = n(465622)
          , o = n(122616)
          , s = n(573461);
        function a({actionWhenUserLoggedIn: e, modalConfig: t={}, reportClickEvent: n, openModalWhenUserLoggedIn: a}) {
            const r = (0,
            o.W)(( () => ["user"]), [])
              , l = (0,
            s.b1)();
            return (0,
            i.useCallback)(( (...i) => {
                null == n || n(...i);
                const o = "function" == typeof t ? t() : t;
                if ((null == r ? void 0 : r.user) && !a) {
                    if (!o.isLinkPhoneOrEmail)
                        return null == e ? void 0 : e(...i);
                    l.openModal(o)
                } else
                    l.openModal(o)
            }
            ), [e, null == r ? void 0 : r.user, l, t, n, a])
        }
        function r(e={}, t, n) {
            return a({
                modalConfig: "function" == typeof e ? e() : e,
                reportClickEvent: t,
                openModalWhenUserLoggedIn: n
            })
        }
    }
    ,
    765804: (e, t, n) => {
        n.d(t, {
            aF: () => j
        });
        var i, o = n(327334), s = n(445372), a = n.n(s), r = n(465622), l = n(947568), d = n(845291), c = n(599628), v = n(352528), u = n(775572), p = n(611379), g = n(2032), _ = n(30367), m = n(953240);
        !function(e) {
            e[e.None = 0] = "None",
            e[e.Outer = 1] = "Outer",
            e[e.Inner = 2] = "Inner",
            e[e.InnerLarge = 3] = "InnerLarge",
            e[e.InnerSmall = 4] = "InnerSmall",
            e[e.Mobile = 5] = "Mobile",
            e[e.Revamp = 6] = "Revamp",
            e[e.LargeSelector = 7] = "LargeSelector"
        }(i || (i = {}));
        const h = (0,
        g.default)("div", {
            target: "e1gjoq3k0"
        })({
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            zIndex: 3001,
            overflow: "auto",
            outline: "0px",
            transition: "all 500ms cubic-bezier(.075, .82, .165, 1)"
        }, ( ({status: e, isShow: t}) => ({
            display: t || e === c.ze ? "flex" : "none",
            opacity: Number(e !== c.ze && e !== c.kp)
        })), "label:DivModalContainer;")
          , y = (0,
        g.default)("div", {
            target: "e1gjoq3k1"
        })(( ({left: e, top: t, isBottomRightQRPopup: n}) => [{
            position: "fixed",
            top: t ? `${t}px` : "62px",
            boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.12)",
            zIndex: 401,
            overflow: "auto",
            outline: "1px",
            transition: n ? "none" : "all 500ms cubic-bezier(.075, .82, .165, 1)",
            borderRadius: "8px"
        }, ({status: t, isShow: i, isQRPopup: o}) => ({
            display: i || t === c.ze ? "flex" : "none",
            opacity: Number(t !== c.ze && t !== c.kp),
            width: n ? "164px" : "360px",
            height: o ? "387px" : n ? "175px" : "309px",
            left: `${e}px`
        })]), "label:DivPopupModalContainer;")
          , b = (0,
        g.default)("div", {
            target: "e1gjoq3k2"
        })(( ({theme: {colors: e}}) => ({
            background: e.SDSecondary,
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        })), "label:DivModalMask;")
          , f = (0,
        g.default)("div", {
            target: "e1gjoq3k3"
        })({
            position: "relative",
            borderRadius: "8px",
            margin: "auto",
            transition: "all 300ms cubic-bezier(.075, .82, .165, 1)"
        }, (e => {
            var {status: t, theme: {colors: n}} = e
              , i = e.contentStyle
              , {transform: o} = i
              , s = (0,
            p.Tt)(i, ["transform"]);
            return [{
                transform: t === c.kp || t === c.ze ? o || "scale(0.1, 0.1)" : "none",
                backgroundColor: n.BGPrimary
            }, s]
        }
        ), "label:DivContentContainer;")
          , w = (0,
        g.default)("div", {
            target: "e1gjoq3k4"
        })({
            position: "relative",
            borderRadius: "8px",
            margin: "auto",
            transition: "all 300ms cubic-bezier(.075, .82, .165, 1)"
        }, (e => {
            var {status: t, theme: {colors: n}} = e
              , i = e.contentStyle
              , {transform: o} = i
              , s = (0,
            p.Tt)(i, ["transform"])
              , {isBottomRightQRPopup: a} = e;
            return [{
                transform: t === c.kp || t === c.ze ? o || "scale(0.1, 0.1)" : "none",
                backgroundColor: n.BGPrimary,
                width: a ? "164px" : "360px",
                height: "100% !important"
            }, s]
        }
        ), "label:DivPopupContentContainer;")
          , S = (0,
        g.default)(_.A, {
            target: "e1gjoq3k5"
        })("label:StyledIcon;");
        function C(e) {
            const {closeStyle: t, theme: {colors: n, direction: i}} = e
              , o = [(0,
            m.mp)({
                direction: i,
                end: 6 === t ? "16px" : "24px"
            })];
            switch (t) {
            case 2:
                o.push({
                    width: "24px",
                    height: "24px",
                    background: n.BGView,
                    [`${S}`]: {
                        width: "15px",
                        height: "15px"
                    }
                });
                break;
            case 3:
                o.push({
                    width: "24px",
                    height: "24px",
                    [`${S}`]: {
                        width: "24px",
                        height: "24px",
                        fill: n.TextPrimary
                    }
                });
                break;
            case 4:
                o.push({
                    width: "20px",
                    height: "20px",
                    [`${S}`]: {
                        width: "20px",
                        height: "20px",
                        fill: n.TextPrimary
                    }
                });
                break;
            case 5:
                o.push({
                    width: "19px",
                    height: "19px",
                    [`${S}`]: {
                        width: "19px",
                        height: "19px",
                        fill: n.TextPrimary
                    }
                });
                break;
            case 1:
                o.push({
                    width: "40px",
                    height: "40px",
                    background: n.BGPrimary,
                    [`${S}`]: {
                        width: "24px",
                        height: "24px"
                    }
                });
                break;
            case 6:
                o.push({
                    width: "32px",
                    height: "32px",
                    background: n.BGView,
                    [`${S}`]: {
                        width: "24px",
                        height: "24px",
                        fill: n.TextSecondary
                    }
                });
                break;
            case 7:
                o.push({
                    width: "32px",
                    height: "32px",
                    [`${S}`]: {
                        width: "32px",
                        height: "32px",
                        fill: n.TextSecondary
                    }
                })
            }
            return o
        }
        const k = (0,
        g.default)("div", {
            target: "e1gjoq3k6"
        })(( ({closeStyle: e}) => [{
            position: "absolute",
            top: 6 === e ? "16px" : "24px",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1
        }, C]), "label:DivCloseWrapper;")
          , L = (0,
        g.default)("div", {
            target: "e1gjoq3k7"
        })({
            width: "100vw",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }, "label:DivCenterWrapper;")
          , I = (0,
        g.default)("div", {
            target: "e1gjoq3k8"
        })({
            height: "100%",
            width: "360px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }, "label:DivPopupCenterWrapper;");
        var T = n(464658)
          , x = n(906486)
          , P = n(461942);
        const O = "login-modal"
          , j = function({children: e, onClose: t, visible: n, timeout: i, onWheel: s=a(), closeStyle: p=0, closeStyles: g={}, containerStyle: _={}, maskCloseable: m=!0, keyboardCloseable: C=!0, zIndex: j=3001, mask: M=!0, fixed: E=!0, contentStyle: A={}, maskStyle: R={}, e2eData: F="", backgroundColor: U, parentRef: V, cancelMouseLeaveBubble: D=!1, returnFocus: N=!0, focusTrapDisabled: B=!1, autoFocus: W=!1, onCloseFocusHandler: $, popupType: q, maskOnClickAction: H}) {
            const z = (0,
            r.useRef)()
              , K = (0,
            r.useRef)(Boolean(n))
              , {showModal: G, hideModal: Z} = (0,
            u.g9)()
              , [J,Q] = (0,
            r.useState)(!1)
              , Y = (0,
            v.s)()
              , {isRTL: X} = (0,
            T.m)()
              , ee = (0,
            r.useRef)(!0)
              , [te,ne] = (0,
            r.useState)(0)
              , [ie,oe] = (0,
            r.useState)(0)
              , {isCommentPanelActive: se} = (0,
            x.Cx)((e => ({
                isCommentPanelActive: e.isActive
            })), P.bN)
              , ae = () => {
                var e, t, n, i;
                const o = null === (e = document.getElementById("close-button-at-bottom-right")) || void 0 === e ? void 0 : e.getBoundingClientRect();
                o && (ne(X ? (null !== (t = o.right) && void 0 !== t ? t : 0) - 36 : (null !== (n = o.left) && void 0 !== n ? n : 0) - 130),
                oe((null !== (i = o.top) && void 0 !== i ? i : 300) - 190))
            }
            ;
            (0,
            r.useEffect)(( () => {
                if (n && M) {
                    const e = "qr_bottom_right" === q;
                    ae(),
                    G(ee.current, e),
                    i && (clearTimeout(z.current),
                    z.current = window.setTimeout(( () => {
                        null == t || t(2)
                    }
                    ), i))
                } else
                    K.current && (Z(),
                    clearTimeout(z.current));
                K.current = Boolean(n),
                ee.current = !1
            }
            ), [n, M]),
            (0,
            r.useEffect)(( () => (Q(!0),
            () => {
                K.current && Z()
            }
            )), []),
            (0,
            r.useEffect)(( () => {
                const e = e => {
                    n && C && 27 === e.keyCode && (null == t || t(1))
                }
                ;
                return n && window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e)
                }
            }
            ), [C, t, n]);
            const re = (0,
            r.useCallback)(( () => {
                m && (null == t || t(3)),
                null == H || H()
            }
            ), [m, H, t])
              , le = (0,
            r.useCallback)(( () => {
                null == t || t(0)
            }
            ), [t])
              , de = (0,
            r.useRef)(null)
              , ce = (0,
            r.useRef)(null)
              , ve = (0,
            r.useCallback)((e => {
                const t = e.target;
                (null == t ? void 0 : t.id) === O && t.setAttribute("tabindex", "-1")
            }
            ), [])
              , ue = (0,
            r.useCallback)((e => {
                13 === e.keyCode && (null == t || t(0))
            }
            ), [t])
              , pe = (0,
            r.useCallback)((e => {
                D && e.stopPropagation()
            }
            ), [D]);
            return (0,
            r.useEffect)(( () => {
                ae(),
                q && window.addEventListener("resize", ae)
            }
            ), [q, X]),
            J ? q ? (0,
            o.jsx)(c.Ay, {
                timeout: 300,
                in: n,
                nodeRef: de,
                children: t => (0,
                o.jsx)(y, {
                    status: t,
                    isShow: n && !("qr_bottom_right" === q && se),
                    onWheel: s,
                    onKeyDown: ve,
                    ref: de,
                    style: Object.assign(Object.assign({}, _), {
                        position: E ? "fixed" : "relative"
                    }),
                    isQRPopup: "qr" === q,
                    isBottomRightQRPopup: "qr_bottom_right" === q,
                    left: te,
                    top: ie,
                    children: (0,
                    o.jsx)(c.Ay, {
                        timeout: 300,
                        in: n,
                        unmountOnExit: !0,
                        nodeRef: ce,
                        children: t => (0,
                        o.jsx)(I, {
                            isQRPopup: "qr" === q,
                            children: (0,
                            o.jsxs)(w, {
                                "data-e2e": F,
                                status: t,
                                ref: ce,
                                contentStyle: A,
                                style: {
                                    backgroundColor: U
                                },
                                tabIndex: 0,
                                id: O,
                                isQRPopup: "qr" === q,
                                isBottomRightQRPopup: "qr_bottom_right" === q,
                                children: [e, 0 !== p && 1 !== p && "qr_bottom_right" !== q && (0,
                                o.jsx)(k, {
                                    closeStyle: p,
                                    onClick: le,
                                    onKeyDown: ue,
                                    "data-e2e": "modal-close-inner-button",
                                    style: g,
                                    role: "button",
                                    tabIndex: 0,
                                    children: (0,
                                    o.jsx)(S, {})
                                })]
                            })
                        })
                    })
                })
            }) : (0,
            l.createPortal)((0,
            o.jsx)(c.Ay, {
                timeout: 300,
                in: n,
                nodeRef: de,
                children: t => (0,
                o.jsxs)(h, {
                    status: t,
                    isShow: n,
                    onWheel: s,
                    onKeyDown: ve,
                    ref: de,
                    style: Object.assign(Object.assign({}, _), {
                        zIndex: j,
                        position: E ? "fixed" : "relative"
                    }),
                    children: [M && (0,
                    o.jsx)(b, {
                        style: R,
                        onClick: re,
                        onMouseLeave: pe,
                        children: 1 === p && (0,
                        o.jsx)(k, {
                            closeStyle: p,
                            onClick: le,
                            style: g,
                            children: (0,
                            o.jsx)(S, {})
                        })
                    }), (0,
                    o.jsx)(c.Ay, {
                        timeout: 300,
                        in: n,
                        unmountOnExit: !0,
                        nodeRef: ce,
                        children: t => (0,
                        o.jsx)(d.Ay, {
                            autoFocus: W,
                            returnFocus: N,
                            disabled: B,
                            onDeactivation: $,
                            children: (0,
                            o.jsx)(L, {
                                children: (0,
                                o.jsxs)(f, {
                                    "data-e2e": F,
                                    status: t,
                                    ref: ce,
                                    contentStyle: A,
                                    style: {
                                        backgroundColor: U
                                    },
                                    tabIndex: 0,
                                    id: O,
                                    children: [e, 0 !== p && 1 !== p && (0,
                                    o.jsx)(k, {
                                        closeStyle: p,
                                        onClick: le,
                                        onKeyDown: ue,
                                        "data-e2e": "modal-close-inner-button",
                                        style: g,
                                        role: "button",
                                        tabIndex: 0,
                                        "aria-label": Y("link_close_popup"),
                                        children: (0,
                                        o.jsx)(S, {})
                                    })]
                                })
                            })
                        })
                    })]
                })
            }), null != V ? V : document.body) : null
        }
    }
    ,
    757180: (e, t, n) => {
        n.d(t, {
            Qt: () => s
        }),
        n(465622),
        n(263161);
        var i = n(298281)
          , o = n(293122);
        function s() {
            const {playerInfo: e} = (0,
            i.L$)((0,
            o.U)(( () => ["playerInfo"]), []))
              , {name: t="", isSmartPlayer: n=!1, type: s=0, loop: a=!1, replyComment: r=!0, hideNavBar: l=!1} = (0,
            i.L$)(e);
            return {
                brand: t,
                isEchoShow: "echoshow" === t,
                isTtincar: "ttincar" === t,
                launchType: s,
                isSmartPlayer: n,
                loop: a,
                replyComment: r,
                hideNavBar: l
            }
        }
    }
    ,
    812129: (e, t, n) => {
        n.d(t, {
            K8: () => _,
            Sd: () => y,
            W3: () => h,
            _j: () => m,
            gG: () => b,
            sy: () => f
        });
        var i = n(611379)
          , o = n(465622)
          , s = n(263161)
          , a = n(1114)
          , r = n(865669)
          , l = n.n(r)
          , d = n(952602)
          , c = n(166315)
          , v = n(614218)
          , u = n(298281)
          , p = n(312688)
          , g = n(122616);
        const _ = () => {
            const e = (0,
            d.Hd)(v.O_);
            return ["pwa", "msft", "twa"].includes(e)
        }
          , m = () => {
            var e;
            const {abTestVersion: t} = (0,
            u.L$)((0,
            g.W)(( () => ["abTestVersion"]), []))
              , n = null !== (e = (0,
            p.qt)(t, "desktop_app_test")) && void 0 !== e ? e : "v1";
            return {
                desktopAppTestVid: n,
                isDesktopTestV1: "v1" === n,
                isDesktopTestV2: "v2" === n
            }
        }
          , h = () => {
            const [e,t] = (0,
            o.useState)(!0);
            return (0,
            o.useEffect)(( () => {
                var e;
                t(Boolean("MAIN_WINDOW" === (null === (e = null === window || void 0 === window ? void 0 : window.TTE_ENV) || void 0 === e ? void 0 : e.windowName)))
            }
            ), []),
            e
        }
          , y = () => {
            const {pathname: e} = (0,
            s.zy)();
            return (0,
            c.tO)(e) || (0,
            c.gq)(e) || (0,
            c.U0)(e) || (0,
            c.eD)(e)
        }
          , b = () => {
            const {isElectronApp: e} = (0,
            a.B)();
            (0,
            o.useEffect)(( () => {
                if (e) {
                    const e = Element.prototype.requestFullscreen;
                    Element.prototype.requestFullscreen = function(...t) {
                        return (0,
                        i.sH)(this, void 0, void 0, (function*() {
                            yield l().app.setFullScreenable(!0),
                            e.call(this, ...t)
                        }
                        ))
                    }
                }
            }
            ), [e])
        }
          , f = () => {
            const [e,t] = (0,
            o.useState)("undefined" != typeof window && null !== (s = null === (i = null === (n = null === window || void 0 === window ? void 0 : window.matchMedia) || void 0 === n ? void 0 : n.call(window, "(prefers-color-scheme: dark)")) || void 0 === i ? void 0 : i.matches) && void 0 !== s && s);
            var n, i, s;
            const a = e => {
                var n;
                t(null !== (n = null == e ? void 0 : e.matches) && void 0 !== n && n)
            }
            ;
            return (0,
            o.useEffect)(( () => {
                var e;
                const t = null === (e = null === window || void 0 === window ? void 0 : window.matchMedia) || void 0 === e ? void 0 : e.call(window, "(prefers-color-scheme: dark)");
                return t.addListener(a),
                () => t.removeListener(a)
            }
            ), []),
            e
        }
    }
    ,
    464658: (e, t, n) => {
        n.d(t, {
            m: () => s
        });
        var i = n(298281)
          , o = n(122616);
        const s = () => {
            const {language: e} = (0,
            i.L$)((0,
            o.W)(( () => ["language"]), []));
            return {
                isRTL: "ar" === e || "ur" === e || "he-IL" === e
            }
        }
    }
    ,
    926711: (e, t, n) => {
        n.d(t, {
            $G: () => d,
            SV: () => c
        });
        var i = n(611379)
          , o = n(545489)
          , s = n.n(o)
          , a = n(259910)
          , r = n.n(a);
        s().extend(r());
        const l = {
            az: "az",
            ar: "ar",
            ca: "ca",
            da: "da",
            et: "et",
            "en-GB": "en-gb",
            "es-419": "es",
            "fr-CA": "fr-ca",
            ga: "ga",
            hr: "hr",
            is: "is",
            sw: "sw",
            lv: "lv",
            lt: "lt",
            nb: "nb",
            uz: "uz",
            pt: "pt",
            sq: "sq",
            sk: "sk",
            sl: "sl",
            bg: "bg",
            kk: "kk",
            "bn-IN": "bn",
            "ceb-PH": "en",
            "cs-CZ": "cs",
            "de-DE": "de",
            "el-GR": "el",
            en: "en",
            es: "es",
            "fi-FI": "fi",
            "fil-PH": "en",
            fr: "fr",
            "he-IL": "he",
            "hi-IN": "hi",
            "hu-HU": "hu",
            "id-ID": "id",
            "it-IT": "it",
            "ja-JP": "ja",
            "jv-ID": "jv",
            "km-KH": "km",
            "ko-KR": "ko",
            "ms-MY": "ms",
            "my-MM": "my",
            "nl-NL": "nl",
            "pl-PL": "pl",
            "pt-BR": "pt-br",
            "ro-RO": "ro",
            "ru-RU": "ru",
            "sv-SE": "sv",
            "th-TH": "th",
            "tr-TR": "tr",
            "uk-UA": "uk",
            ur: "ur",
            "vi-VN": "vi",
            "zh-Hans": "zh",
            "zh-Hant-TW": "zh-tw"
        };
        function d(e) {
            var t, o;
            return (0,
            i.sH)(this, void 0, void 0, (function*() {
                const i = null !== (o = null !== (t = l[e]) && void 0 !== t ? t : e.split("-")[0]) && void 0 !== o ? o : "en";
                try {
                    yield n(76776)(`./${i}.js`)
                } catch (e) {
                    yield n.e(38481).then(n.t.bind(n, 930690, 23))
                }
            }
            ))
        }
        function c(e, t, n="MM-DD-YYYY HH:mm") {
            var i, o;
            const a = null !== (o = null !== (i = l[t]) && void 0 !== i ? i : t.split("-")[0]) && void 0 !== o ? o : "en";
            return s().unix(e).locale(a).format(n)
        }
    }
    ,
    29219: (e, t, n) => {
        n.d(t, {
            Us: () => s
        });
        var i = n(318898)
          , o = (n(822681),
        n(954469));
        function s() {
            return (0,
            i.P)(o.L)
        }
    }
    ,
    954469: (e, t, n) => {
        n.d(t, {
            L: () => m
        });
        var i = n(611379)
          , o = n(983238)
          , s = n(768055)
          , a = n(554954)
          , r = n(459158)
          , l = n(673766)
          , d = n(90245)
          , c = n(833152)
          , v = n(891109)
          , u = n(395831)
          , p = n(433293)
          , g = n(674895)
          , _ = n(972038);
        let m = class extends o.E {
            constructor() {
                super(...arguments),
                this.defaultState = {
                    appContext: null,
                    initialized: !1,
                    lang: "en",
                    sideNavActive: !1
                }
            }
            setSideNavActive(e, t) {
                return Object.assign(Object.assign({}, e), {
                    sideNavActive: t
                })
            }
            toggleSideNav(e) {
                return e.pipe((0,
                c.E)(this.state$), (0,
                v.T)(( ([e,t]) => this.getActions().setSideNavActive(!t.sideNavActive))))
            }
            setAppContext(e, t) {
                var {statusCode: n} = t
                  , o = (0,
                i.Tt)(t, ["statusCode"]);
                return 0 !== n ? e : Object.assign(Object.assign({}, e), {
                    appContext: o
                })
            }
            setInitialized(e, t) {
                return Object.assign(Object.assign({}, e), {
                    initialized: t
                })
            }
            setLang(e, t) {
                return Object.assign(Object.assign({}, e), {
                    lang: t
                })
            }
            init(e) {
                return e.pipe((0,
                c.E)(this.state$), (0,
                u.p)(( ([{appContext: e},{initialized: t}]) => t ? r.w : (0,
                l.of)(Object.assign(Object.assign({}, e), {
                    statusCode: 0
                })).pipe((0,
                p.Z)((t => (0,
                l.of)(this.getActions().setAppContext(t), this.getActions().setLang(e.language)))), (0,
                g.Z)(this.getActions().setInitialized(!1)), (0,
                _.q)(this.getActions().setInitialized(!0), this.terminate())))))
            }
        }
        ;
        (0,
        i.Cg)([(0,
        s.HI)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", Object)], m.prototype, "setSideNavActive", null),
        (0,
        i.Cg)([(0,
        s.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [d.c]), (0,
        i.Sn)("design:returntype", void 0)], m.prototype, "toggleSideNav", null),
        (0,
        i.Cg)([(0,
        s.HI)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", Object)], m.prototype, "setAppContext", null),
        (0,
        i.Cg)([(0,
        s.HI)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", Object)], m.prototype, "setInitialized", null),
        (0,
        i.Cg)([(0,
        s.HI)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, String]), (0,
        i.Sn)("design:returntype", Object)], m.prototype, "setLang", null),
        (0,
        i.Cg)([(0,
        s.Mj)({
            payloadGetter: 1
        }), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [d.c]), (0,
        i.Sn)("design:returntype", void 0)], m.prototype, "init", null),
        m = (0,
        i.Cg)([(0,
        a.n)("AppContext")], m)
    }
    ,
    782686: (e, t, n) => {
        n.d(t, {
            o: () => d
        });
        var i = n(611379)
          , o = n(403057)
          , s = n(676160)
          , a = n(202070)
          , r = n(614218)
          , l = n(950374);
        let d = class {
            constructor(e) {
                this.fetch = e,
                this.initTargetIdcRequest = () => this.fetch.get("/passport/web/account/info/", {
                    credentials: "include",
                    baseUrlType: 2,
                    query: {
                        aid: 1459
                    }
                })
            }
            checkTTwid() {
                return (0,
                i.sH)(this, void 0, void 0, (function*() {
                    const e = new s.TtWid({
                        aid: r.xE,
                        service: "www.tiktok.com",
                        union: !1,
                        unionHost: "",
                        needFid: !1
                    });
                    try {
                        yield e.checkWebId()
                    } catch (e) {
                        l.f.sendEvent("check_ttwid_error", {
                            error_msg: e
                        }),
                        console.error(e)
                    }
                }
                ))
            }
        }
        ;
        d = (0,
        i.Cg)([(0,
        o._)(), (0,
        i.Sn)("design:paramtypes", [a.p])], d)
    }
    ,
    806530: (e, t, n) => {
        n.d(t, {
            $T: () => ie,
            bc: () => le,
            JD: () => se
        });
        var i = n(611379)
          , o = n(25724)
          , s = n(529756)
          , a = n(596488)
          , r = n(919432)
          , l = n(184394)
          , d = n(229341)
          , c = n(709573)
          , v = n(416580)
          , u = n(894995)
          , p = n(255148)
          , g = n(373491)
          , _ = n(905183);
        const m = (e, t, n, i, o) => {
            var s, a;
            let r = "next" === o ? e + 1 : e - 1;
            if (1 === i) {
                const i = null !== (s = t[r]) && void 0 !== s ? s : "";
                let l = (0,
                _.Jl)(n[i]);
                for (; l; ) {
                    r = "next" === o ? r + 1 : r - 1;
                    const i = null !== (a = t[r]) && void 0 !== a ? a : "";
                    if (l = (0,
                    _.Jl)(n[i]),
                    r > t.length - 1 || r < 0 || "" === i)
                        return e
                }
            }
            return Math.max(Math.min(r, t.length - 1), 0)
        }
          , h = (e, t) => {
            var n;
            const i = (0,
            g.D)(t);
            return i ? e(i) : null !== (n = e(u.D)[null != t ? t : ""]) && void 0 !== n ? n : {}
        }
        ;
        var y = n(866148)
          , b = n(237920);
        const f = e => {
            const t = (0,
            b.L)(y.AU);
            null == t || t.reportVideoInteractStart({
                startTime: Date.now(),
                situation: e
            })
        }
        ;
        var w = n(164596)
          , S = n(990064)
          , C = n(34111);
        const k = {
            statusCode: 0,
            statusMessage: "",
            toastNotShown: !1
        }
          , L = (0,
        o.atom)(Object.assign({}, k))
          , {getStaticApi: I, useAtomService: T} = (0,
        s.i)(L, ( (e, t) => ({
            setBrowserModeStatus(e) {
                t(L, Object.assign(Object.assign({}, e), {
                    toastNotShown: !0
                }))
            },
            clearBrowserModeStatus() {
                t(L, Object.assign({}, k))
            }
        })));
        var x = n(768387)
          , P = n.n(x)
          , O = n(370577)
          , j = n.n(O);
        const M = (0,
        o.atom)({})
          , E = (0,
        o.atom)(null, ( (e, t, n, i) => {
            if (i) {
                const s = e(M)[n];
                s ? t(s, i) : t(M, (e => Object.assign(Object.assign({}, e), {
                    [n]: (0,
                    o.atom)(i)
                })))
            } else
                t(M, (e => j()(e, n)))
        }
        ))
          , A = (0,
        o.atom)(null)
          , R = (0,
        o.atom)([])
          , F = (0,
        o.atom)((e => {
            const {browserList: t=[]} = h(e, "creator_tab");
            return t
        }
        ))
          , U = (0,
        o.atom)((e => {
            const t = []
              , n = e(R);
            for (const i of n) {
                const {browserList: n=[]} = h(e, i.itemListKey);
                if (i.skip >= n.length)
                    break;
                const o = Math.min(i.skip + i.limit, n.length);
                if (t.push(...n.slice(i.skip, o)),
                i.limit === 1 / 0)
                    break
            }
            return t
        }
        ))
          , V = (0,
        o.atom)((e => {
            const t = e(R)
              , n = e(U);
            let i = null
              , o = 0;
            for (const s of t) {
                const {browserList: t=[], hasMore: a=!0} = h(e, s.itemListKey);
                if (o += a ? s.limit : t.length - s.skip,
                n.length < o && a) {
                    i = s.itemListKey;
                    break
                }
            }
            return {
                activeItemListKey: e(A),
                browserListSources: t,
                keyToLoadMore: i,
                browserList: n,
                creatorBrowserList: e(F)
            }
        }
        ), ( (e, t, n) => {
            n.activeItemListKey && t(A, n.activeItemListKey),
            n.browserListSources && t(R, n.browserListSources)
        }
        ))
          , {useAtomService: D, useServiceState: N, useServiceDispatchers: B, getStaticApi: W} = (0,
        s.i)(V, ( (e, t) => ({
            registerBrowserListConfig(e) {
                const {itemListKey: n, config: i} = e;
                t(E, null != n ? n : "", i)
            },
            setupBrowserList(n) {
                var i;
                const {itemListKey: o, enterIndex: s} = n
                  , a = e(M)[null != o ? o : ""]
                  , r = a ? e(a) : null
                  , l = [];
                if ("explore" !== o || P()(r))
                    l.push({
                        itemListKey: o,
                        skip: 0,
                        limit: 1 / 0
                    });
                else {
                    const e = null !== (i = null == r ? void 0 : r.sources) && void 0 !== i ? i : [];
                    l.push(...function(e, t, n) {
                        const i = {}
                          , o = [];
                        return n.forEach(( ({itemListKey: n, limit: s}, a) => {
                            var r;
                            if (n) {
                                const l = null !== (r = i[n]) && void 0 !== r ? r : 0
                                  , d = 0 === a && n === e ? t + s : s;
                                o.push({
                                    itemListKey: n,
                                    skip: l,
                                    limit: d
                                }),
                                i[n] = l + d
                            }
                        }
                        )),
                        o
                    }(o, s, e))
                }
                t(A, o),
                t(R, l)
            },
            clearBrowserList() {
                t(A, null),
                t(R, [])
            },
            freezeSourceWithKey(n) {
                const i = e(R)
                  , o = [];
                for (const t of i)
                    if (t.itemListKey !== n)
                        o.push(t);
                    else {
                        const {browserList: n=[]} = h(e, t.itemListKey);
                        t.skip < n.length && (t.limit = Math.min(n.length - t.skip, t.limit),
                        o.push(t))
                    }
                t(R, o)
            },
            getSourceIndex(t) {
                var n, i;
                const o = e(U)
                  , s = e(R);
                let a = 0;
                for (const n of s) {
                    const {browserList: i=[], hasMore: s=!0} = h(e, n.itemListKey)
                      , r = s ? n.limit : i.length - n.skip;
                    if (t < a + r || o.length < a + r)
                        return {
                            itemListKey: n.itemListKey,
                            index: n.skip + (Math.min(t, o.length) - a)
                        };
                    a += r
                }
                const r = null !== (i = null === (n = s[s.length - 1]) || void 0 === n ? void 0 : n.itemListKey) && void 0 !== i ? i : null
                  , {browserList: l=[]} = h(e, r);
                return {
                    itemListKey: r,
                    index: Math.max(l.length - 1, 0)
                }
            }
        })));
        (0,
        o.atom)(null);
        var $ = n(231118)
          , q = n(952602)
          , H = n(312688)
          , z = n(614218)
          , K = n(950374);
        const G = {
            isDocumentPipSupporting: "undefined" != typeof window && "documentPictureInPicture"in window && function() {
                const e = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\./)
                  , t = e ? Number(e[1]) : -1;
                return t >= 126 && 133 !== t
            }(),
            pipWindow: null,
            isMiniPlayerShowing: !1,
            itemListKey: null,
            currentIndex: 0,
            prevPlayMode: null,
            miniPlayerRef: null,
            svgChangeObserver: null,
            enterTimestamp: 0,
            windowHeight: 598,
            windowWidth: 306,
            enableNewLocalStorageKey: !1,
            isIndicatorAcked: !1,
            isLandingIndicatorDismissed: !1,
            isAfterSwitchTabOrWindowSizeChange: !1,
            isAfterSwitchTabOrWindowSizeChangeIndicatorShown: Boolean((0,
            q._S)(z.je)),
            isAfterSwitchTabOrWindowSizeChangeIndicatorDismissed: !1
        }
          , Z = (0,
        o.atom)(G);
        Z.debugLabel = "miniPlayerAtom";
        const J = (0,
        o.atom)((e => {
            const {itemListKey: t} = e(Z);
            return h(e, t)
        }
        ))
          , {useServiceState: Q, useServiceDispatchers: Y, useAtomService: X, getStaticApi: ee} = (0,
        s.i)(Z, ( (e, t) => ({
            setItemListKey(e) {
                t(Z, (t => Object.assign(Object.assign({}, t), {
                    itemListKey: e
                })))
            },
            setCurrentIndex(e) {
                t(Z, (t => Object.assign(Object.assign({}, t), {
                    currentIndex: e
                })))
            },
            setPrevPlayMode(e) {
                t(Z, (t => Object.assign(Object.assign({}, t), {
                    prevPlayMode: e
                })))
            },
            setIsMiniPlayerShowing(e) {
                t(Z, (t => Object.assign(Object.assign({}, t), {
                    isMiniPlayerShowing: e
                })))
            },
            setMiniPlayerRef(e) {
                t(Z, (t => Object.assign(Object.assign({}, t), {
                    miniPlayerRef: e
                })))
            },
            setIsLandingIndicatorDismissed(e) {
                t(Z, (t => Object.assign(Object.assign({}, t), {
                    isLandingIndicatorDismissed: e
                })))
            },
            initEnableNewLocalStorageKey() {
                const e = !!(0,
                H.d)("enable_mini_player_switch_tab_popup");
                t(Z, (t => Object.assign(Object.assign({}, t), {
                    enableNewLocalStorageKey: e
                })))
            },
            setIsAfterSwitchTabOrWindowSizeChange(e) {
                t(Z, (t => Object.assign(Object.assign({}, t), {
                    isAfterSwitchTabOrWindowSizeChange: e
                })))
            },
            setIsAfterSwitchTabOrWindowSizeChangeIndicatorDismissed(e) {
                t(Z, (t => Object.assign(Object.assign({}, t), {
                    isAfterSwitchTabOrWindowSizeChangeIndicatorDismissed: e
                })))
            },
            updateMiniPlayerSize() {
                const {pipWindow: n} = e(Z);
                if (!n)
                    return;
                const i = n.innerHeight
                  , o = n.innerWidth;
                t(Z, (e => Object.assign(Object.assign({}, e), {
                    windowHeight: i,
                    windowWidth: o
                })))
            },
            updateVideoIndex(n) {
                const {newIndex: i, newId: o, playProgress: s, isMiniPlayerNotSupported: a} = n
                  , {prevPlayMode: l} = e(Z);
                t(Z, (e => Object.assign(Object.assign({}, e), {
                    currentIndex: i
                })));
                const d = {
                    currentVideo: {
                        index: i,
                        id: o,
                        mode: a ? l : 8
                    },
                    playProgress: null != s ? s : 0
                };
                (0,
                r.LM)().updateVideo(d);
                const {showingBrowserMode: c} = e(ie);
                c && le().updateVideoIndex({
                    newId: o,
                    newIndex: i,
                    isIndexInvalid: !1
                })
            },
            closeMiniPlayer(n) {
                var i, o, s;
                const {playMode: a, enter_method: l} = n
                  , {currentIndex: d, prevPlayMode: c, pipWindow: v, miniPlayerRef: u, svgChangeObserver: p, enterTimestamp: g} = e(Z)
                  , {list: _=[]} = e(J)
                  , m = null !== (i = _[d]) && void 0 !== i ? i : ""
                  , h = _.findIndex((e => m === e))
                  , y = null !== (s = null === (o = null == u ? void 0 : u.current) || void 0 === o ? void 0 : o.currentTime) && void 0 !== s ? s : 0;
                if (v) {
                    null == v || v.close(),
                    K.f.sendEvent("turn_off_mini_player", {
                        play_mode: $.Jr[null != c ? c : "-1"],
                        group_id: m,
                        enter_method: l,
                        stay_duration: (Date.now() - g) / 1e3,
                        has_more: d < _.length - 1
                    });
                    const e = {
                        currentVideo: {
                            index: h,
                            id: m,
                            mode: null != a ? a : c
                        },
                        playProgress: y
                    };
                    (0,
                    r.LM)().updateVideo(e),
                    null == p || p.disconnect(),
                    t(Z, (e => Object.assign(Object.assign({}, e), {
                        pipWindow: null,
                        isMiniPlayerShowing: !1,
                        itemListKey: null,
                        currentIndex: 0,
                        prevPlayMode: null,
                        miniPlayerRef: null,
                        svgChangeObserver: null,
                        enterTimestamp: 0
                    })))
                }
            },
            openMiniPlayer(n) {
                return (0,
                i.sH)(this, void 0, void 0, (function*() {
                    const {index: i=0, playMode: o, playProgress: s, itemListKey: a} = n
                      , {pipWindow: l, isDocumentPipSupporting: d, windowHeight: c, windowWidth: v} = e(Z);
                    if (!d || "undefined" == typeof window || null !== l)
                        return;
                    const {list: u} = h(e, a)
                      , {showingBrowserMode: p, isCreatorBrowserMode: g} = e(ie)
                      , {browserList: _} = e(V)
                      , m = p && !g ? _[i] : u[i];
                    try {
                        const e = Date.now();
                        documentPictureInPicture.addEventListener("enter", ( () => {
                            K.f.sendEvent("enter_mini_player", {
                                latency: Date.now() - e,
                                play_mode: $.Jr[o],
                                group_id: m
                            })
                        }
                        ), {
                            once: !0
                        });
                        const n = yield window.documentPictureInPicture.requestWindow({
                            width: v,
                            height: c
                        });
                        n.addEventListener("pagehide", ( () => {
                            this.closeMiniPlayer({
                                playMode: o
                            })
                        }
                        ), {
                            once: !0
                        }),
                        [...document.styleSheets].forEach((e => {
                            try {
                                const t = [...e.cssRules].map((e => e.cssText)).join("")
                                  , i = document.createElement("style");
                                i.textContent = t,
                                n.document.head.appendChild(i)
                            } catch (t) {
                                const i = document.createElement("link");
                                if (null === e.href)
                                    return;
                                i.rel = "stylesheet",
                                i.type = e.type,
                                i.media = e.media.toString(),
                                i.href = e.href,
                                n.document.head.appendChild(i)
                            }
                        }
                        )),
                        this.createOrUpdateSVGSprite(n);
                        const l = document.querySelector("#svg-sprite-container")
                          , d = new MutationObserver(( () => this.createOrUpdateSVGSprite(n)));
                        l && d.observe(l, {
                            subtree: !0,
                            childList: !0
                        });
                        const u = {
                            currentVideo: {
                                index: i,
                                id: m,
                                mode: 8
                            },
                            playProgress: s
                        };
                        (0,
                        r.LM)().updateVideo(u),
                        t(Z, (e => Object.assign(Object.assign({}, e), {
                            enterTimestamp: Date.now(),
                            itemListKey: a,
                            prevPlayMode: o,
                            isMiniPlayerShowing: !0,
                            currentIndex: i,
                            pipWindow: n,
                            svgChangeObserver: d
                        })))
                    } catch (e) {
                        console.error("DocumentPIP error", e)
                    }
                }
                ))
            },
            createOrUpdateSVGSprite(e) {
                const t = document.querySelector("#svg-sprite-container");
                try {
                    let n = e.document.body.querySelector("svg");
                    n || (n = document.createElement("svg"),
                    e.document.body.appendChild(n)),
                    n.innerHTML = (null == t ? void 0 : t.outerHTML) || ""
                } catch (e) {
                    console.log("error to copy svg sprite", e)
                }
            },
            handleNextVideo() {
                var t;
                try {
                    const {currentIndex: n} = e(Z)
                      , {list: i} = e(J)
                      , o = n + 1
                      , s = null !== (t = i[o]) && void 0 !== t ? t : "";
                    if (!i.length || o < 0 || o >= i.length)
                        return void console.warn("cannot switch to next video for some reasons");
                    this.updateVideoIndex({
                        newIndex: o,
                        newId: s
                    })
                } catch (e) {}
            },
            handlePrevVideo() {
                var t;
                try {
                    const {currentIndex: n} = e(Z)
                      , {list: i} = e(J)
                      , o = n - 1
                      , s = !i.length || o < 0 || o >= i.length
                      , a = null !== (t = i[o]) && void 0 !== t ? t : "";
                    if (s)
                        return void console.warn("cannot switch to prev video for some reasons");
                    this.updateVideoIndex({
                        newIndex: o,
                        newId: a
                    })
                } catch (e) {}
            },
            updateLandingIndicatorShowTimes() {
                const {enableNewLocalStorageKey: t} = e(Z)
                  , n = t ? z.tD : z.un;
                (0,
                q.AP)(n, (Number((0,
                q._S)(n, "0")) + 1).toString())
            },
            updateIndicatorAckedStatus() {
                const {enableNewLocalStorageKey: n} = e(Z)
                  , i = n ? z.RM : z._O;
                (0,
                q.AP)(i, "1"),
                t(Z, (e => Object.assign(Object.assign({}, e), {
                    isIndicatorAcked: !0
                })))
            }
        })))
          , te = {
            foryou: 0,
            topic: 0,
            following: 0,
            video: 0,
            find: 1,
            music: 1,
            music_new: 1,
            challenge: 1,
            challenge_new: 1,
            sticker: 1,
            effect: 1,
            user: 1,
            "user-post": 1,
            "user-repost": 1,
            "user-liked": 1,
            search_top: 1,
            search_video: 1,
            question: 1,
            playlist: 1,
            live_event: 1,
            video_playlist: 0,
            create_video_playlist: 0,
            messages: 0,
            discover: 1,
            poi: 1,
            collection: 1,
            "user-post-public": 0,
            explore: 0,
            channel: 1,
            poi_category: 1,
            search_live: 1,
            favorites: 1,
            "keyword-expansion": 1,
            creator_tab: 2,
            friends: 0,
            trending_topics: 1
        }
          , ne = {
            3: "friends",
            2: "private",
            1: "public"
        }
          , ie = (0,
        o.atom)({
            currentIndex: 0,
            enterIndex: 0,
            prevFeedItemIndex: null,
            itemListKey: null,
            prevFeedItemListKey: null,
            jumpSamePageTime: 0,
            belowPlayMode: 0,
            enterWindowTimeSec: Number(new Date),
            showingBrowserMode: !1,
            isCreatorBrowserMode: !1
        });
        ie.debugLabel = "browserModeAtom";
        const oe = (0,
        o.atom)((e => {
            const {itemListKey: t} = e(ie);
            return h(e, t)
        }
        ))
          , {useServiceState: se, useServiceDispatchers: ae, useAtomService: re, getStaticApi: le} = (0,
        s.i)(ie, ( (e, t) => ({
            setItemListKey(e) {
                t(ie, (t => Object.assign(Object.assign({}, t), {
                    itemListKey: e
                })))
            },
            setCurrentIndex(e) {
                t(ie, (t => Object.assign(Object.assign({}, t), {
                    currentIndex: e
                })))
            },
            setClickSamePage() {
                t(ie, (e => Object.assign(Object.assign({}, e), {
                    jumpSamePageTime: Date.now()
                })))
            },
            setShowingBrowserMode(e) {
                t(ie, (t => Object.assign(Object.assign({}, t), {
                    showingBrowserMode: e
                })))
            },
            updateVideoIndexAndSavePrev({newFeedIndex: n, isIndexInvalid: i, newId: o, playProgress: s, itemListKey: a, currentIndex: l, newItemListKey: d, playMode: c}) {
                if (i)
                    return;
                const {isMiniPlayerShowing: v} = e(Z);
                if (t(ie, (e => Object.assign(Object.assign({}, e), {
                    itemListKey: d,
                    currentIndex: n,
                    prevFeedItemIndex: l,
                    prevFeedItemListKey: a
                }))),
                v)
                    return ee().setItemListKey("creator_tab"),
                    void ee().updateVideoIndex({
                        newIndex: n,
                        newId: o
                    });
                const u = {
                    currentVideo: {
                        index: n,
                        id: o,
                        mode: c
                    },
                    playProgress: null != s ? s : 0
                };
                (0,
                r.LM)().updateVideo(u)
            },
            handleEnterCreatorMode(n) {
                var i;
                try {
                    f("enter_creator_mode");
                    const {creatorFeedIndex: o} = n
                      , {itemListKey: s, currentIndex: a} = e(ie)
                      , r = e(F)
                      , l = !r.length
                      , d = null !== (i = r[o]) && void 0 !== i ? i : "";
                    this.updateVideoIndexAndSavePrev({
                        newFeedIndex: o,
                        isIndexInvalid: l,
                        newId: d,
                        itemListKey: s,
                        currentIndex: a,
                        newItemListKey: "creator_tab",
                        playMode: 2
                    }),
                    t(ie, (e => Object.assign(Object.assign({}, e), {
                        isCreatorBrowserMode: !0
                    })))
                } catch (e) {}
            },
            handleExitCreatorMode() {
                var n;
                try {
                    f("exit_creator_mode");
                    const {prevFeedItemIndex: i, prevFeedItemListKey: o} = e(ie)
                      , s = e(U)
                      , a = null != i ? i : 0
                      , l = !s.length
                      , d = null !== (n = s[a]) && void 0 !== n ? n : "";
                    this.handleClearCreatorModeData({
                        newIndex: a,
                        isIndexInvalid: l,
                        prevFeedItemListKey: o
                    });
                    const c = {
                        currentVideo: {
                            index: a,
                            id: d,
                            mode: 2
                        },
                        playProgress: 0
                    };
                    (0,
                    r.LM)().updateVideo(c),
                    t(ie, (e => Object.assign(Object.assign({}, e), {
                        isCreatorBrowserMode: !1
                    })))
                } catch (e) {}
            },
            handleCreatorModeVideoClick(t) {
                var n;
                try {
                    f("click_creator_video");
                    const {creatorFeedIndex: i} = t
                      , {isMiniPlayerShowing: o} = e(Z)
                      , s = e(F)
                      , a = !s.length
                      , r = null !== (n = s[i]) && void 0 !== n ? n : "";
                    o ? ee().updateVideoIndex({
                        newIndex: i,
                        newId: r
                    }) : this.updateVideoIndex({
                        newIndex: i,
                        newId: r,
                        isIndexInvalid: a
                    })
                } catch (e) {}
            },
            updateVideoIndex(n) {
                const {newIndex: i, isIndexInvalid: o, newId: s, playProgress: a} = n
                  , {isMiniPlayerShowing: d} = e(Z)
                  , {itemListKey: c} = e(ie);
                if (o)
                    return;
                if (t(ie, (e => Object.assign(Object.assign({}, e), {
                    currentIndex: i
                }))),
                d)
                    return;
                const v = {
                    currentVideo: {
                        index: i,
                        id: s,
                        mode: 2
                    },
                    playProgress: null != a ? a : 0,
                    pageType: c ? l.FB[c] : 999
                };
                (0,
                r.LM)().updateVideo(v)
            },
            updateDeleteVideo(n) {
                const {currentIndex: i} = e(ie)
                  , o = e(U)
                  , s = o.length
                  , a = s - 1 <= 0
                  , r = s - 1 === i
                  , l = a ? "" : o[r ? i - 1 : i + 1]
                  , v = r ? i - 1 : i;
                if (n) {
                    this.updateVideoIndex({
                        newIndex: v,
                        newId: l,
                        isIndexInvalid: a
                    });
                    const e = (0,
                    d.Ds)()
                      , i = (0,
                    c.HG)();
                    e.setDeleteVideo(n),
                    i.setDeleteVideo(n),
                    t(u.D, "setDeleteVideo", n),
                    t(p.t, "setDeleteVideo", n)
                }
            },
            handleClearCreatorModeData(e) {
                const {prevFeedItemListKey: n, newIndex: i, isIndexInvalid: o} = e;
                o || t(ie, (e => Object.assign(Object.assign({}, e), {
                    currentIndex: i,
                    itemListKey: n,
                    prevFeedItemIndex: null,
                    prevFeedItemListKey: null
                })))
            },
            postVideoDelete(e) {
                return (0,
                i.sH)(this, void 0, void 0, (function*() {
                    const t = I();
                    try {
                        const {status_code: n, status_msg: o} = yield function(e) {
                            return (0,
                            i.sH)(this, void 0, void 0, (function*() {
                                return w.h.post("/api/aweme/delete/", {
                                    query: Object.assign(Object.assign({}, e), {
                                        tt_csrf_token: w.h.csrfToken
                                    }),
                                    headers: {
                                        [S.nk]: w.h.csrfToken
                                    },
                                    baseUrlType: 2
                                })
                            }
                            ))
                        }(e);
                        t.setBrowserModeStatus({
                            statusCode: n,
                            statusMessage: o,
                            action: "delete"
                        }),
                        0 === n && (a.y.handleVideoDelete("delete"),
                        this.updateDeleteVideo(e.aweme_id))
                    } catch (e) {
                        t.setBrowserModeStatus({
                            statusCode: -1,
                            statusMessage: ""
                        })
                    }
                }
                ))
            },
            postScheduleDelete(e) {
                return (0,
                i.sH)(this, void 0, void 0, (function*() {
                    const t = I();
                    try {
                        yield function(e) {
                            return (0,
                            i.sH)(this, void 0, void 0, (function*() {
                                return w.h.post("/api/schedule/aweme/delete/", {
                                    query: e,
                                    headers: {
                                        [S.nk]: w.h.csrfToken
                                    },
                                    baseUrlType: 2
                                })
                            }
                            ))
                        }({
                            aweme_id: e
                        }),
                        t.setBrowserModeStatus({
                            statusCode: 0,
                            statusMessage: "",
                            action: "delete"
                        }),
                        this.updateDeleteVideo(e),
                        a.y.handleScheduleDelete("delete")
                    } catch (e) {
                        t.setBrowserModeStatus({
                            statusCode: -1,
                            statusMessage: ""
                        })
                    }
                }
                ))
            },
            postDuetOrStitchChange({type: e, enable: n, aweme_id: o}) {
                return (0,
                i.sH)(this, void 0, void 0, (function*() {
                    const s = I();
                    try {
                        const {status_code: r} = yield function(e) {
                            return (0,
                            i.sH)(this, void 0, void 0, (function*() {
                                return w.h.post("/api/aweme/set/react_duet_stitch/", {
                                    query: Object.assign(Object.assign({}, e), {
                                        tt_csrf_token: w.h.csrfToken
                                    }),
                                    headers: {
                                        [S.nk]: w.h.csrfToken
                                    },
                                    baseUrlType: 2
                                })
                            }
                            ))
                        }({
                            aweme_id: o,
                            [e]: n
                        });
                        if (0 !== r)
                            s.setBrowserModeStatus({
                                statusCode: r,
                                statusMessage: ""
                            }),
                            2054 === r && this.updateDeleteVideo(o);
                        else {
                            a.y.handlePrivateSetting({
                                target: e,
                                to_status: n ? "on" : "off"
                            });
                            const i = "item_duet" === e ? "duetEnabled" : "stitchEnabled";
                            t(p.t, "updateItem", {
                                id: o,
                                [i]: 0 === n
                            })
                        }
                    } catch (e) {
                        s.setBrowserModeStatus({
                            statusCode: -1,
                            statusMessage: ""
                        })
                    }
                }
                ))
            },
            postModifyVisibility(e) {
                return (0,
                i.sH)(this, void 0, void 0, (function*() {
                    const n = I();
                    try {
                        const {status_code: o, status_msg: s} = yield function(e) {
                            return (0,
                            i.sH)(this, void 0, void 0, (function*() {
                                return w.h.post("/api/aweme/modify/visibility/", {
                                    query: Object.assign(Object.assign({}, e), {
                                        tt_csrf_token: w.h.csrfToken
                                    }),
                                    headers: {
                                        [S.nk]: w.h.csrfToken
                                    },
                                    baseUrlType: 2
                                })
                            }
                            ))
                        }(e);
                        0 !== o ? (n.setBrowserModeStatus({
                            statusCode: o,
                            statusMessage: s
                        }),
                        2054 === o && this.updateDeleteVideo(e.aweme_id)) : (a.y.handleSelectPrivacySettingVideo({
                            to_status: ne[e.type]
                        }),
                        (0,
                        C.G)(o, [0]),
                        t(p.t, "setItemPrivateState", {
                            id: e.aweme_id,
                            visibility: e.type
                        }))
                    } catch (e) {
                        n.setBrowserModeStatus({
                            statusCode: -1,
                            statusMessage: ""
                        })
                    }
                }
                ))
            },
            postUserSetting(e) {
                var n, o;
                return (0,
                i.sH)(this, void 0, void 0, (function*() {
                    const s = I();
                    try {
                        const {status_code: r} = yield function(e) {
                            return (0,
                            i.sH)(this, void 0, void 0, (function*() {
                                return w.h.post("/api/user/set/settings/", {
                                    baseUrlType: 2,
                                    query: Object.assign(Object.assign({}, e), {
                                        tt_csrf_token: w.h.csrfToken
                                    }),
                                    headers: {
                                        [S.nk]: w.h.csrfToken
                                    }
                                })
                            }
                            ))
                        }(e);
                        0 !== r ? (s.setBrowserModeStatus({
                            statusCode: r,
                            statusMessage: ""
                        }),
                        2054 === r && this.updateDeleteVideo(null !== (n = e.aweme_id) && void 0 !== n ? n : "")) : (a.y.handlePrivateSetting({
                            target: "comment",
                            to_status: 0 === e.private_setting ? "on" : "off"
                        }),
                        t(p.t, "updateItem", {
                            id: null !== (o = e.aweme_id) && void 0 !== o ? o : "",
                            itemCommentStatus: e.private_setting
                        }))
                    } catch (e) {
                        s.setBrowserModeStatus({
                            statusCode: -1,
                            statusMessage: ""
                        })
                    }
                }
                ))
            },
            closeBrowserMode(n) {
                var i;
                const {playProgress: o=0, shouldPause: s=!1} = null != n ? n : {}
                  , {itemListKey: a, currentIndex: d, belowPlayMode: c, isCreatorBrowserMode: v, prevFeedItemIndex: u, prevFeedItemListKey: p, afterCloseBrowserMode: g} = e(ie)
                  , _ = v ? null != p ? p : "" : null != a ? a : ""
                  , m = v ? null != u ? u : 0 : d
                  , h = e(U)
                  , {list: y} = e(oe)
                  , b = !h.length
                  , f = null !== (i = h[m]) && void 0 !== i ? i : ""
                  , w = y.findIndex((e => f === e));
                v && (t(ie, (e => Object.assign(Object.assign({}, e), {
                    isCreatorBrowserMode: !1
                }))),
                this.handleClearCreatorModeData({
                    prevFeedItemListKey: _,
                    newIndex: m,
                    isIndexInvalid: b
                }));
                const S = {
                    currentVideo: {
                        index: s ? -1 : w,
                        id: s ? "" : f,
                        mode: null != c ? c : te[_],
                        pageType: _ ? l.FB[_] : 999
                    },
                    playProgress: o
                };
                (0,
                r.LM)().updateVideo(S),
                null == g || g(),
                t(ie, (e => Object.assign(Object.assign({}, e), {
                    showingBrowserMode: !1,
                    belowPlayMode: null,
                    afterCloseBrowserMode: void 0
                }))),
                W().clearBrowserList()
            },
            showBrowserMode(n) {
                const {index: i=0, playProgress: o=0, belowPlayMode: s, forceUseIndexLocation: a, shouldUsePreviousProgress: r=!1, afterCloseBrowserMode: l} = n
                  , {browserList: d, list: c} = e(oe)
                  , u = c[i]
                  , p = e(v.jD)[u]
                  , {currentTime: g} = "video" === (null == p ? void 0 : p.contentType) ? p : {
                    currentTime: 0
                }
                  , _ = a ? i : Math.max(0, Math.min(d.length - 1, d.findIndex((e => u === e))))
                  , {itemListKey: m} = e(ie)
                  , {isMiniPlayerShowing: h} = e(Z);
                W().setupBrowserList({
                    itemListKey: m,
                    enterIndex: _
                }),
                h && ee().setPrevPlayMode(2),
                this.updateVideoIndex({
                    newIndex: _,
                    newId: u,
                    isIndexInvalid: !1,
                    playProgress: r ? g : o
                }),
                t(ie, (e => Object.assign(Object.assign(Object.assign({}, e), s ? {
                    belowPlayMode: s
                } : {}), {
                    afterCloseBrowserMode: l,
                    showingBrowserMode: !0,
                    enterIndex: _
                })))
            },
            handleNextVideo() {
                var t;
                try {
                    f("browser_mode_next");
                    const {currentIndex: n, isCreatorBrowserMode: i} = e(ie)
                      , o = e(i ? F : U)
                      , {liveCardDisplay: s} = e(oe)
                      , a = e(p.t)
                      , {isMiniPlayerShowing: r} = e(Z)
                      , l = m(n, o, a, s, "next")
                      , d = !o.length || l < 0
                      , c = null !== (t = o[l]) && void 0 !== t ? t : "";
                    if (d)
                        return void console.warn("cannot switch to next video for some reasons");
                    r ? ee().handleNextVideo() : this.updateVideoIndex({
                        newIndex: l,
                        newId: c,
                        isIndexInvalid: !1
                    })
                } catch (e) {}
            },
            handlePrevVideo() {
                var t;
                try {
                    f("browser_mode_prev");
                    const {currentIndex: n, isCreatorBrowserMode: i} = e(ie)
                      , o = e(oe)
                      , s = e(i ? F : U)
                      , {liveCardDisplay: a} = o
                      , r = e(p.t)
                      , {isMiniPlayerShowing: l} = e(Z)
                      , d = m(n, s, r, a, "prev")
                      , c = !s.length || d > s.length - 1
                      , v = null !== (t = s[d]) && void 0 !== t ? t : "";
                    if (c)
                        return void console.warn("cannot switch to prev video for some reasons");
                    l ? ee().handlePrevVideo() : this.updateVideoIndex({
                        newIndex: d,
                        newId: v,
                        isIndexInvalid: !1
                    })
                } catch (e) {}
            },
            getAdjacentVideoInfo() {
                const {currentIndex: t, isCreatorBrowserMode: n} = e(ie)
                  , i = e(n ? F : U);
                return [i[t - 1], i[t + 1]].map((e => null != e ? e : 0))
            }
        })))
    }
    ,
    603369: (e, t, n) => {
        n.d(t, {
            vK: () => u
        });
        var i, o = n(327334), s = n(12883), a = n.n(s), r = n(445372), l = n.n(r), d = n(465622), c = n(614218);
        !function(e) {
            e.OneColumnMode = "one_column_mode",
            e.SwiperMode = "swiper_mode"
        }(i || (i = {}));
        const v = (0,
        d.createContext)({
            feedMode: "swiper_mode",
            switchFeedMode: l()
        })
          , u = (0,
        d.memo)(( ({feedMode: e, children: t}) => {
            const n = null != e ? e : a().get(c.i_) || "swiper_mode"
              , [i,s] = (0,
            d.useState)(n)
              , r = (0,
            d.useCallback)((e => {
                s(e)
            }
            ), [])
              , l = (0,
            d.useMemo)(( () => ({
                feedMode: i,
                switchFeedMode: r
            })), [i, r]);
            return (0,
            o.jsx)(v.Provider, {
                value: l,
                children: t
            })
        }
        ))
    }
    ,
    570500: (e, t, n) => {
        n.d(t, {
            b: () => l
        });
        var i = n(611379)
          , o = n(983238)
          , s = n(768055)
          , a = n(554954)
          , r = n(90245);
        let l = class extends o.E {
            constructor() {
                super(),
                this.defaultState = {
                    isCookieBannerShowing: !1
                }
            }
            setCookieBannerShowing(e, t) {
                e.isCookieBannerShowing = t
            }
        }
        ;
        (0,
        i.Cg)([(0,
        s.uk)(), (0,
        i.Sn)("design:type", r.c)], l.prototype, "dispose$", void 0),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", void 0)], l.prototype, "setCookieBannerShowing", null),
        l = (0,
        i.Cg)([(0,
        a.n)("FixBottomModule"), (0,
        i.Sn)("design:paramtypes", [])], l)
    }
    ,
    554386: (e, t, n) => {
        n.d(t, {
            k: () => g
        });
        var i = n(611379)
          , o = n(983238)
          , s = n(768055)
          , a = n(554954)
          , r = n(445372)
          , l = n.n(r)
          , d = n(673766)
          , c = n(90245)
          , v = n(433293)
          , u = n(88489)
          , p = n(573461);
        let g = class extends o.E {
            constructor() {
                super(),
                this.defaultState = {
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
                    handleDownload: l(),
                    handleLogin: l(),
                    closeCallback: l(),
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
                }
            }
            setCloseable(e, t) {
                (0,
                p.CP)().setCloseable(t)
            }
            setUrl(e, t) {
                (0,
                p.CP)().setUrl(t)
            }
            setLoginPath(e, t) {
                (0,
                p.CP)().setLoginPath(t)
            }
            setCloseCallback(e, t) {
                t && (0,
                p.CP)().setCloseCallback(t)
            }
            setIsOpen(e, t) {
                (0,
                p.CP)().setIsOpen(t)
            }
            setContent(e, t) {
                t && (0,
                p.CP)().setContent(t)
            }
            setHandleDownload(e, t) {
                t && (0,
                p.CP)().setHandleDownload(t)
            }
            setHandleLogin(e, t) {
                t && (0,
                p.CP)().setHandleLogin(t)
            }
            setIframeStyle(e, t) {
                (0,
                p.CP)().setIframeStyle(t)
            }
            setModalType(e, t) {
                (0,
                p.CP)().setModalType(t)
            }
            setLoginModalShow(e, t) {
                (0,
                p.CP)().setLoginModalShow(t)
            }
            setMaskCloseable(e, t) {
                (0,
                p.CP)().setMaskCloseable(t)
            }
            setPageType(e, t) {
                (0,
                p.CP)().setPageType(t)
            }
            setUserId(e, t) {
                (0,
                p.CP)().setUserId(t)
            }
            setGroupId(e, t) {
                (0,
                p.CP)().setGroupId(t)
            }
            setLastGroupId(e, t) {
                (0,
                p.CP)().setLastGroupId(t)
            }
            setEnterMethod(e, t) {
                (0,
                p.CP)().setEnterMethod(t)
            }
            setModalImage(e, t) {
                (0,
                p.CP)().setModalImage(t)
            }
            setPopupType(e, t) {
                (0,
                p.CP)().setPopupType(t)
            }
            setIsRedirectToProfilePage(e, t) {
                (0,
                p.CP)().setIsRedirectToProfilePage(t)
            }
            setIsGuestMode(e, t) {
                (0,
                p.CP)().setIsGuestMode(t)
            }
            setIsGuestModeUI(e, t) {
                (0,
                p.CP)().setIsGuestModeUI(t)
            }
            setPredictionPayload(e, t) {
                (0,
                p.CP)().setPredictionPayload(t)
            }
            setIsLinkPhoneOrEmail(e, t) {
                (0,
                p.CP)().setIsLinkPhoneOrEmail(t)
            }
            openModal(e) {
                return e.pipe((0,
                v.Z)((e => (0,
                d.of)((0,
                p.CP)().openModal(e)).pipe((0,
                v.Z)(( () => (0,
                d.of)(this.noop())))))))
            }
            setCheckPeriodicLogin(e, t) {
                (0,
                p.CP)().setCheckPeriodicLogin(t)
            }
            setCheckPredictionLogin(e, t) {
                (0,
                p.CP)().setCheckPredictionLogin(t)
            }
            setCheckGuestModeLogin(e, t) {
                (0,
                p.CP)().setCheckGuestModeLogin(t)
            }
            setIsLoginOnLoadClosed(e, t) {
                (0,
                p.CP)().setIsLoginOnLoadClosed(t)
            }
            setClearShowLoginOnLoad(e) {
                (0,
                p.CP)().setClearShowLoginOnLoad()
            }
            closeModal(e) {
                return e.pipe((0,
                v.Z)((e => (0,
                d.of)((0,
                p.CP)().closeModal(e)).pipe((0,
                v.Z)(( () => (0,
                d.of)(this.noop())))))))
            }
            setIsBannerActive(e, t) {
                (0,
                p.CP)().setIsBannerActive(t)
            }
        }
        ;
        g.jotaiAtom = p.JF,
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setCloseable", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, String]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setUrl", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, String]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setLoginPath", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setCloseCallback", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setIsOpen", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setContent", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setHandleDownload", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setHandleLogin", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setIframeStyle", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setModalType", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setLoginModalShow", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setMaskCloseable", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Number]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setPageType", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setUserId", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setGroupId", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setLastGroupId", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setEnterMethod", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setModalImage", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setPopupType", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setIsRedirectToProfilePage", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setIsGuestMode", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setIsGuestModeUI", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, String]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setPredictionPayload", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setIsLinkPhoneOrEmail", null),
        (0,
        i.Cg)([(0,
        s.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [c.c]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "openModal", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setCheckPeriodicLogin", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setCheckPredictionLogin", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setCheckGuestModeLogin", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setIsLoginOnLoadClosed", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setClearShowLoginOnLoad", null),
        (0,
        i.Cg)([(0,
        s.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [c.c]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "closeModal", null),
        (0,
        i.Cg)([(0,
        s.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Boolean]), (0,
        i.Sn)("design:returntype", void 0)], g.prototype, "setIsBannerActive", null),
        g = (0,
        i.Cg)([(0,
        a.n)("LoginModal"), (0,
        i.Sn)("design:paramtypes", [])], g),
        p.JF.__SIGI_MODULE__ = g,
        (0,
        u.y)(g)
    }
    ,
    226075: (e, t, n) => {
        n.d(t, {
            nH: () => o
        });
        var i = n(122616);
        n(465622),
        n(263117);
        const o = () => {
            var e;
            const {user: t} = null !== (e = (0,
            i.W)(( () => ["user"]), [])) && void 0 !== e ? e : {};
            return Boolean(t)
        }
    }
    ,
    702576: (e, t, n) => {
        n.d(t, {
            OB: () => $,
            D0: () => z,
            o0: () => W,
            Vq: () => H
        });
        var i = n(327334)
          , o = n(465622)
          , s = n(931397)
          , a = n(263161)
          , r = n(423298)
          , l = n(554086)
          , d = n(73200)
          , c = n(623810)
          , v = n(950374)
          , u = n(12883)
          , p = n.n(u)
          , g = n(30367)
          , _ = n(297523)
          , m = n(188149)
          , h = n(428986)
          , y = n(352528)
          , b = n(543793)
          , f = n(821870)
          , w = (n(468079),
        n(2032))
          , S = n(953240);
        const C = (0,
        w.default)("div", {
            target: "esswpn50"
        })({
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }, "label:DivModalWrapper;")
          , k = (0,
        w.default)("div", {
            target: "esswpn51"
        })(( ({theme: {colors: e}}) => ({
            fontSize: "24px",
            lineHeight: "36px",
            fontWeight: 700,
            color: e.TextPrimary,
            padding: "24px",
            width: "100%",
            borderBottom: `0.5px solid ${e.LinePrimary2}`,
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "700px"
        })), "label:DivModalHeader;")
          , L = (0,
        w.default)("div", {
            target: "esswpn52"
        })({
            maxWidth: "700px",
            padding: "24px 24px 16px 24px"
        }, "label:DivModalBody;")
          , I = (0,
        w.default)("div", {
            target: "esswpn53"
        })(( ({theme: {colors: e}}) => ({
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "22px",
            color: e.TextSecondary,
            whiteSpace: "pre-wrap"
        })), "label:DivTextPara;")
          , T = (0,
        w.default)("div", {
            target: "esswpn54"
        })(( ({theme: {colors: e, isDark: t}, checked: n}) => ({
            display: "flex",
            width: "calc(100% - 48px)",
            paddingTop: "16px",
            paddingBottom: "24px",
            alignItems: "center",
            borderTop: `0.5px solid ${e.LinePrimary2}`,
            justifyContent: "space-between",
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: 400,
            color: e.TextPrimary,
            "button div:hover": !n && t ? {
                background: "rgba(255, 255, 255, 0.2)"
            } : {}
        })), "label:DivSwitchSection;")
          , x = (0,
        w.default)("a", {
            target: "esswpn55"
        })(( ({theme: {colors: e, direction: t}}) => [{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "22px",
            color: e.Primary,
            textDecoration: "none",
            outline: "none",
            ":visited": {
                color: e.Primary
            }
        }, (0,
        S.mp)({
            direction: t,
            marginStart: "8px"
        })]), "label:ALink;")
          , P = (0,
        w.default)("div", {
            target: "esswpn56"
        })(( ({theme: {colors: e}}) => ({
            padding: "24px",
            width: "100%",
            borderTop: `0.5px solid ${e.LinePrimary2}`,
            display: "flex",
            justifyContent: "flex-end"
        })), "label:DivModalFooter;")
          , O = (0,
        w.default)("div", {
            target: "esswpn57"
        })({
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            cursor: "pointer"
        }, "label:DivCloseMarkWrapper;");
        var j = n(806530)
          , M = n(122616)
          , E = n(952602)
          , A = n(596095)
          , R = n(499971)
          , F = n(369379)
          , U = n(461942)
          , V = n(939232);
        const D = r.OZ.searchReminder
          , N = (e, t) => {
            const [n,i] = (0,
            A.HY)((e => e.isShowingToast), U.bN);
            return (0,
            o.useCallback)(( () => {
                n || (i.setIsShowingToast(!0),
                setTimeout(( () => {
                    i.setIsShowingToast(!1)
                }
                ), 3e3),
                l.F.open({
                    content: e,
                    duration: 3,
                    style: t ? {
                        width: "400px"
                    } : {}
                }))
            }
            ), [n, t, i, e])
        }
          , B = e => (0,
        y.s)()(e ? "nonpersonalizedFeeds_LIVEfeed_label_mainString_personalizationOn" : "nonpersonalizedFeeds_LIVEfeed_label_mainString")
          , W = e => {
            const t = B(e);
            return N(t, !0)
        }
          , $ = e => {
            var t;
            const {hasNonPersonalizedMenu: n} = (0,
            m.cE)()
              , {user: {uid: i=""}={}} = null !== (t = (0,
            M.W)(( () => ["user"]), [])) && void 0 !== t ? t : {}
              , o = (0,
            A.JW)((t => e ? t.isFeedPersonalized : t.isSearchPersonalized), U.bN);
            return !((0,
            R.Sw)(i) || n || !e) || o
        }
          , q = {
            expires: 365
        }
          , H = (e, t) => {
            var n;
            const {user: i} = (0,
            V.x)()
              , s = null !== (n = null == i ? void 0 : i.uid) && void 0 !== n ? n : ""
              , a = t ? _.Lq : e ? _.MW : _.eh;
            return (0,
            o.useCallback)((t => {
                if (!s)
                    return void (e && p().set(_.Fc, t ? "0" : "1", q));
                const n = s
                  , i = p().get(a);
                let o = [];
                if (i) {
                    o = JSON.parse(i);
                    const e = o.indexOf(n)
                      , s = e >= 0;
                    t ? s && o.splice(e, 1) : s || o.push(n)
                } else
                    o = [n];
                p().set(a, JSON.stringify(o), q)
            }
            ), [e, a, s])
        }
          , z = (e={}) => {
            const {beforeModalCloseCallback: t, beforeStatusChangeCallback: n, afterModalCloseCallback: l, afterStatusChangeCallback: u, beforeModalOpenCallback: p, afterModalOpenCallback: m, onSwitchClickCallback: w, onLearnMoreClickCallback: S, isFeed: M, preSearchId: R, isLiveFeed: U, showToastRightAfterChange: V} = e
              , W = (0,
            y.s)()
              , {pathname: q} = (0,
            a.zy)()
              , z = !Boolean((0,
            a.B6)(q, {
                path: D
            })) && Boolean((0,
            a.B6)(q, {
                path: r.OZ.searchHome
            }))
              , K = $(M)
              , G = (0,
            A.Qi)()
              , {showingBrowserMode: Z, itemListKey: J} = (0,
            j.JD)((e => ({
                showingBrowserMode: e.showingBrowserMode,
                itemListKey: e.itemListKey
            })))
              , Q = (0,
            F.Z9)((e => {
                var t;
                if ("single" === (null === (t = e.itemListSourceConfig) || void 0 === t ? void 0 : t.mode))
                    return e.itemListSourceConfig.itemListKey
            }
            ))
              , [Y,X] = (0,
            o.useState)(K)
              , ee = (0,
            o.useCallback)(( () => {
                null == t || t()
            }
            ), [t])
              , te = M && !U
              , ne = "explore" === J || "explore" === Q
              , ie = (0,
            o.useCallback)((e => {
                var n, i, o;
                null == t || t(),
                "backdrop" !== e && "closeButton" !== e || (X(K),
                te ? b.$.handleCloseManageFeedsPopUp() : U || (i = null !== (n = v.f.commonParams.page_name) && void 0 !== n ? n : "",
                o = "backdrop" === e ? "click_blank_space" : "click_close",
                f.$G.handleManageSearchPopupClick({
                    enter_from: i,
                    button_type: o
                })),
                G.setIsManageModalOpen(!1)),
                null == l || l()
            }
            ), [t, l, K, te, U, G])
              , oe = (0,
            s.eb)({
                closeOnBackdropClick: !0,
                closeOnEsc: !1,
                onCloseComplete: ie,
                onClose: ee
            });
            (0,
            o.useEffect)(( () => {
                X(K)
            }
            ), [K]);
            const se = H(M)
              , ae = (0,
            o.useCallback)(( () => {
                var e;
                null == p || p(),
                G.setIsManageModalOpen(!0),
                X(K),
                oe.open(),
                null == m || m(),
                U || ( (e, t, n, i) => {
                    if (i)
                        return b.$.handleClickManageFeeds(),
                        void b.$.handleManageFeedsPopUp();
                    f.$G.handleManageSearchPopupShow({
                        enter_from: e,
                        switch_status: t ? "on" : "off",
                        search_id: n
                    })
                }
                )(null !== (e = v.f.commonParams.page_name) && void 0 !== e ? e : "", K, z ? R : void 0, M)
            }
            ), [p, G, oe, m, U, K, z, R, M])
              , re = (0,
            o.useCallback)(( () => {
                b.$.handleCloseManageFeedsPopUp(),
                oe.close()
            }
            ), [oe])
              , le = (0,
            o.useCallback)((e => {
                te && b.$.handleSwitchPersonalizationToggle({
                    value: e ? "on" : "off"
                }),
                null == w || w(e),
                X(e)
            }
            ), [te, w])
              , de = ( (e, t) => {
                const n = B(e)
                  , o = (0,
                i.jsxs)("div", {
                    onClick: t,
                    children: [n, t]
                });
                return N(o)
            }
            )(Y)
              , ce = (0,
            o.useCallback)(( () => {
                var e;
                const t = K !== Y;
                t && (null == n || n(Y),
                G[M ? "setIsFeedPersonalized" : "setIsSearchPersonalized"](Y),
                se(Y),
                V ? de() : (0,
                E.J2)(_.oG, "1"),
                null == u || u(Y),
                M && (h.lL.removeAll(),
                setTimeout(( () => {
                    Z && !U ? window.location.replace(ne ? "/explore" : "/") : window.location.reload()
                }
                ), 100))),
                U || (M ? b.$.handleConfirmPersonalizationStatusChange({
                    flag: t ? 1 : 0,
                    status: Y ? "on" : "off"
                }) : ( (e, t, n) => {
                    let i;
                    i = t === n ? n ? 4 : 3 : n ? 2 : 1,
                    f.$G.handleManageSearchPopupClick({
                        enter_from: e,
                        button_type: "click_done",
                        switch_status: i
                    })
                }
                )(null !== (e = v.f.commonParams.page_name) && void 0 !== e ? e : "", K, Y)),
                re()
            }
            ), [K, Y, U, ne, re, n, G, M, se, u, Z])
              , ve = (0,
            o.useCallback)(( () => {
                null == S || S()
            }
            ), [S])
              , ue = (0,
            o.useMemo)(( () => {
                if (M && K) {
                    const e = W("filterKeywordsWeb_fypEntry_modal_desc1", {
                        s_keywordLink: "$$kw-link$$"
                    }).split("$$kw-link$$");
                    return [(0,
                    i.jsx)("p", {
                        children: [e[0], (0,
                        i.jsx)(x, {
                            href: "https://www.tiktok.com/setting/keyword-filtering",
                            target: "_blank",
                            children: W("filterKeywordsWeb_fypEntry_manageFeeds_popup")
                        }, "kw-link"), e[1]]
                    }, "desc1"), (0,
                    i.jsx)("p", {
                        children: W("filterKeywordsWeb_fypEntry_modal_desc2", {
                            s_learnLink: ""
                        })
                    }, "desc2")]
                }
                return W(M ? "nonpersonalizedFeeds_turnOn_modal_toggle_bodyFull" : K ? "personalisedSearch_searchResults_actionSheet_bodyPara1" : "personalisedSearch_searchResults_actionSheet_bodyPara1V2")
            }
            ), [M, K, W]);
            return {
                PersonalizedModal: (0,
                o.useMemo)(( () => {
                    const e = W(M ? "nonpersonalizedFeeds_turnOn_modal_toggle_headline" : "personalisedSearch_searchResults_actionSheet_header");
                    return (0,
                    i.jsx)(s.nO, Object.assign({
                        width: "Compact",
                        height: "Compact"
                    }, oe, {
                        children: (0,
                        i.jsxs)(C, {
                            children: [(0,
                            i.jsxs)(k, {
                                children: [e, (0,
                                i.jsx)(O, {
                                    onClick: re,
                                    children: (0,
                                    i.jsx)(g.A, {
                                        width: 32,
                                        height: 32
                                    })
                                })]
                            }), (0,
                            i.jsx)(L, {
                                children: (0,
                                i.jsxs)(I, {
                                    children: [ue, (0,
                                    i.jsx)(x, {
                                        href: "https://support.tiktok.com/en/using-tiktok/exploring-videos/managing-personalization-on-tiktok",
                                        target: "_blank",
                                        onClick: ve,
                                        children: W(M ? "nonpersonalizedFeeds_modal_allScenarios_body_learnMore_articleLink" : "personalisedSearch_searchResults_actionSheet_bodyPara2Bold1")
                                    })]
                                })
                            }), (0,
                            i.jsxs)(T, {
                                checked: Y,
                                children: [W(M ? "nonpersonalizedFeeds_settings_contentPreferences_entrypoint" : "personalisedSearch_searchResults_actionSheet_toggle"), (0,
                                i.jsx)(d.d, {
                                    checked: Y,
                                    onChange: le
                                })]
                            }), (0,
                            i.jsx)(P, {
                                children: (0,
                                i.jsx)(c.y, {
                                    buttonTheme: "primary",
                                    size: "medium",
                                    onClick: ce,
                                    children: W(M ? "nonpersonalizedFeeds_turnOn_modal_toggle_CTA" : "personalisedSearch_searchResults_actionSheet_btn")
                                })
                            })]
                        })
                    }))
                }
                ), [ue, ce, re, ve, le, M, oe, Y, W]),
                handleOpenModal: ae,
                handleCloseModal: re
            }
        }
    }
    ,
    948282: (e, t, n) => {
        n.d(t, {
            y: () => f
        });
        var i = n(327334)
          , o = n(791528)
          , s = n.n(o)
          , a = n(465622)
          , r = n(69146)
          , l = n(263161)
          , d = n(396553)
          , c = n(74413)
          , v = n(461942)
          , u = n(760893)
          , p = n(105726)
          , g = n(466839)
          , _ = n(166315)
          , m = n(122285);
        function h(e) {
            return null == e || "number" == typeof e || "boolean" == typeof e ? e : "string" == typeof e ? e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : Array.isArray(e) ? e.map((e => h(e))) : "[object Object]" === Object.prototype.toString.call(e) ? Object.keys(e).reduce(( (t, n) => (t[n] = h(e[n]),
            t)), {}) : h(String(e))
        }
        class y extends a.PureComponent {
            dynamicAddCompKey(e=[]) {
                return e && e.length ? e.map(h).reduce(( (e, t, n) => {
                    var o;
                    const [s="",a={},r] = t;
                    return "" !== s && 0 !== Object.keys(a).length && e.push((0,
                    i.jsx)(m.hp, {
                        dangerouslyExposeHtml: !0,
                        id: null !== (o = null == r ? void 0 : r.name) && void 0 !== o ? o : s,
                        children: (0,
                        i.jsx)(m.ck, {
                            genericType: s,
                            genericKey: s,
                            schema: a
                        })
                    }, `${s}-${n}`)),
                    e
                }
                ), []) : null
            }
            render() {
                const {wrappedHead: e, metaParams: t={}, jsonldList: n=[], children: o} = this.props
                  , {title: s="", keywords: a="", description: r="", robotsContent: l="", canonicalHref: d="", alternateHref: c="", amphtmlHref: v="", applicableDevice: u="", hreflangList: p=[]} = t;
                return (0,
                i.jsxs)(i.Fragment, {
                    children: [(0,
                    i.jsxs)(e, {
                        children: [s && (0,
                        i.jsx)("title", {
                            children: s
                        }), a && (0,
                        i.jsx)("meta", {
                            name: "keywords",
                            content: a
                        }, "keywords"), r && (0,
                        i.jsx)("meta", {
                            name: "description",
                            content: r
                        }, "description"), l && (0,
                        i.jsx)("meta", {
                            name: "robots",
                            content: l
                        }, "robots"), u && (0,
                        i.jsx)("meta", {
                            name: "applicable-device",
                            content: u
                        }, "applicable-device"), d && (0,
                        i.jsx)("link", {
                            rel: "canonical",
                            href: d
                        }, "canonical"), v && (0,
                        i.jsx)("link", {
                            rel: "amphtml",
                            href: v
                        }, "amphtml"), c && (0,
                        i.jsx)("link", {
                            rel: "alternate",
                            media: "only screen and (max-width: 640px)",
                            href: c
                        }, "alternate-media"), p.length ? p.map(( ({hreflang: e, href: t}) => (0,
                        i.jsx)("link", {
                            rel: "alternate",
                            hrefLang: e,
                            href: t
                        }, e))) : null, o]
                    }), this.dynamicAddCompKey(n)]
                })
            }
        }
        const b = y
          , f = function({appContext: e}) {
            const {pathname: t} = (0,
            l.zy)()
              , {metaParams: n, jsonldList: o, disableAlternateLink: m, generateAlternateWithCanonical: h, enableAlternateHreflang: y, alternateHreflangList: f} = (0,
            c.X)(g.b, {
                selector: ({metaParams: e, jsonldList: t, disableAlternateLink: n, generateAlternateWithCanonical: i, enableAlternateHreflang: o, alternateHreflangList: s}) => ({
                    metaParams: e,
                    jsonldList: t,
                    disableAlternateLink: n,
                    generateAlternateWithCanonical: i,
                    enableAlternateHreflang: o,
                    alternateHreflangList: s
                }),
                equalityFn: v.bN
            });
            let w = t;
            try {
                w = encodeURI(decodeURI(t))
            } catch (e) {}
            const S = (0,
            a.useMemo)(( () => {
                let e = [];
                const {robotsContent: t, canonicalHref: i} = null != n ? n : {}
                  , o = t && !t.includes("noindex")
                  , a = h && null != i ? i : `${u.C}${w}`;
                if (o && y)
                    return Object.assign(Object.assign({}, n), {
                        hreflangList: s()(f, "hreflang")
                    });
                if (o && !m) {
                    const t = (0,
                    _.Iz)(w);
                    e = [{
                        hreflang: "x-default",
                        href: t ? u.C : a
                    }],
                    p.wX.forEach(( ({value: n}) => {
                        const i = n.replace(/(^zh([_-]\w+)*)/g, "zh-Hant")
                          , o = t ? `${u.C}/${i}/` : `${a}?lang=${i}`;
                        e.push({
                            hreflang: i,
                            href: o
                        })
                    }
                    ))
                }
                return Object.assign(Object.assign({}, n), {
                    hreflangList: s()(e, "hreflang")
                })
            }
            ), [e, m, h, n, w, y, f]);
            return (0,
            d.o)(( () => Promise.resolve()), []),
            (0,
            i.jsx)(b, {
                wrappedHead: r.mg,
                metaParams: S,
                jsonldList: o
            })
        };
        f.deferSSREffects = !0
    }
    ,
    235219: (e, t, n) => {
        n.d(t, {
            U: () => E
        });
        var i = n(611379)
          , o = n(768055)
          , s = n(554954)
          , a = n(121317)
          , r = n(673766)
          , l = n(459158)
          , d = n(613919)
          , c = n(121438)
          , v = n(90245)
          , u = n(460057)
          , p = n(267658)
          , g = n(433293)
          , _ = n(850717)
          , m = n(833152)
          , h = n(891109)
          , y = n(894488)
          , b = n(674895)
          , f = n(395831)
          , w = n(88489)
          , S = n(598073)
          , C = n(187749)
          , k = n(554086)
          , L = n(858475)
          , I = n(646863)
          , T = n(960204)
          , x = n(595763)
          , P = n(34111)
          , O = n(135999)
          , j = n(360690)
          , M = n(895524);
        let E = class extends L.E {
            constructor(e, t) {
                super(),
                this.service = e,
                this.t = t,
                this.defaultState = {
                    users: {},
                    stats: {}
                }
            }
            multiSetUser(e, t) {
                (0,
                I.Gp)().multiSetUser(t)
            }
            setUser(e, t) {
                (0,
                I.Gp)().setUser(t)
            }
            setUserRelation(e, t) {
                (0,
                I.Gp)().setUserRelation(t)
            }
            setUserStats(e, t) {
                (0,
                I.Gp)().setUserStats(t)
            }
            multiSetUserStats(e, t) {
                (0,
                I.Gp)().multiSetUserStats(t)
            }
            getUserDetail(e) {
                return e.pipe((0,
                u.n)((e => this.service.getUserDetail(e).pipe((0,
                p.M)((e => {
                    (0 !== e.statusCode && 10222 !== e.statusCode || !e.userInfo) && console.warn("Get user detail failed for getting wrong response")
                }
                )), (0,
                g.Z)((e => 0 !== e.statusCode && 10222 !== e.statusCode || !e.userInfo ? l.w : (0,
                r.of)(this.getActions().setUser(Object.assign(Object.assign({}, e.userInfo.user), {
                    extraInfo: {
                        statusCode: e.statusCode
                    }
                })), this.getActions().setUserStats({
                    stats: Object.assign(Object.assign({}, e.userInfo.stats), {
                        needFix: !1
                    }),
                    uniqueId: e.userInfo.user.uniqueId
                })))), (0,
                x.n)({})))))
            }
            postCommitFollowUser(e) {
                return e.pipe((0,
                _.$)(( ({uniqueId: e}) => e)), (0,
                g.Z)((e => e.pipe((0,
                m.E)(this.state$), (0,
                h.T)(( ([e,t]) => {
                    const n = t.users[e.uniqueId]
                      , {id: o, secUid: s="", relation: a=-1} = n
                      , r = (0,
                    T.gN)(a)
                      , l = {
                        type: 1 === r ? 1 : 0,
                        action_type: 1 === r ? 1 : 0,
                        user_id: o,
                        sec_user_id: s,
                        from: 18,
                        channel_id: 0,
                        from_pre: 0
                    }
                      , {uniqueId: d, useFollowV2: c, group_id: v, enter_method: u="click_direct_btn", action_position: p} = e;
                    return {
                        query: l,
                        type: r,
                        group_id: v,
                        enter_method: u,
                        action_position: p,
                        restReportParams: (0,
                        i.Tt)(e, ["uniqueId", "useFollowV2", "group_id", "enter_method", "action_position"]),
                        id: o,
                        uniqueId: d,
                        useFollowV2: c,
                        relation: a,
                        targetUser: n
                    }
                }
                )), (0,
                u.n)(( ({query: e, group_id: t, enter_method: n, action_position: i, restReportParams: o, id: s, uniqueId: a, useFollowV2: r, relation: l, targetUser: c}) => (r ? this.service.postCommitFollowUserV2(e) : this.service.postCommitFollowUser(e)).pipe((0,
                y.W)((e => (0,
                d.H)(e.json()))), (0,
                h.T)((e => Object.assign({
                    status_code: null == e ? void 0 : e.status_code,
                    follow_status: null == e ? void 0 : e.follow_status
                }, e))), (0,
                p.M)(( ({status_code: a, follow_status: r}) => {
                    if (24 === a ? k.F.open({
                        content: this.t("inbox_follow_failed_banned"),
                        duration: 3,
                        widthType: "half"
                    }) : -1 === a ? k.F.open({
                        content: this.t("inbox_follow_failed_noconnection"),
                        duration: 3,
                        widthType: "half"
                    }) : 0 !== a ? k.F.open({
                        content: this.t("inbox_follow_failed_other"),
                        duration: 3,
                        widthType: "half"
                    }) : (0,
                    P.G)(a, [24, -1, 0]),
                    S.t.handleFollowUser(Object.assign(Object.assign({}, o), {
                        status_code: a,
                        follow_status: r,
                        group_id: t,
                        enter_method: n,
                        action_position: i,
                        to_user_id: s,
                        author_id: s,
                        follow_type: 2 === r ? "mutual" : "single",
                        is_private: 4 === r ? 1 : 0
                    }), e.type),
                    o.is_ad_event && o.tag && o.value && o.log_extra && 0 === e.type) {
                        const {tag: e, value: t, log_extra: n} = o;
                        C.pg.handleFollowCancel({
                            log_extra: n,
                            tag: e,
                            value: t,
                            is_ad_event: "1"
                        })
                    }
                }
                )), (0,
                h.T)(( ({follow_status: e, status_code: t}) => 0 === t ? this.getActions().setUserRelation({
                    uniqueId: a,
                    relation: j.i0[e],
                    shouldUpdateFollowed: !0
                }) : this.getActions().setUserRelation({
                    uniqueId: a,
                    relation: l
                }))), (0,
                b.Z)(this.getActions().setUserRelation({
                    uniqueId: a,
                    relation: (0,
                    T.A7)({
                        current: l,
                        targetUser: c
                    })
                })), (0,
                x.n)({}))))))))
            }
            blockOrUnblockUser(e) {
                return e.pipe((0,
                f.p)(( ({secUid: e, isBlock: t, uniqueId: n}) => this.service.blockUser({
                    sec_user_id: null != e ? e : "",
                    block_type: t ? 0 : 1
                }).pipe((0,
                p.M)(( ({status_code: e}) => {
                    0 === e && k.F.open({
                        content: this.t(t ? "webapp_mig_unblocked" : "webapp_mig_blocked"),
                        duration: 3,
                        e2eTag: "block-toast"
                    })
                }
                )), (0,
                h.T)(( ({status_code: e}) => 0 === e ? this.getActions().setUserRelation({
                    uniqueId: n,
                    relation: t ? 0 : 4
                }) : this.noop())), (0,
                x.n)({})))))
            }
            getLiveStatus(e) {
                return e.pipe((0,
                u.n)(( () => (0,
                c.Y)(6e5).pipe((0,
                m.E)(this.state$), (0,
                h.T)(( ([e,{users: t}]) => Object.values(t).filter((e => Boolean(null == e ? void 0 : e.roomId))))), (0,
                g.Z)((e => (0,
                r.of)(...e.map((e => this.getActions().getUserDetail({
                    secUid: null == e ? void 0 : e.secUid
                }))))))))))
            }
        }
        ;
        E.jotaiAtom = I.p9,
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Array]), (0,
        i.Sn)("design:returntype", void 0)], E.prototype, "multiSetUser", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], E.prototype, "setUser", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], E.prototype, "setUserRelation", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], E.prototype, "setUserStats", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Array]), (0,
        i.Sn)("design:returntype", void 0)], E.prototype, "multiSetUserStats", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [v.c]), (0,
        i.Sn)("design:returntype", void 0)], E.prototype, "getUserDetail", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [v.c]), (0,
        i.Sn)("design:returntype", void 0)], E.prototype, "postCommitFollowUser", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [v.c]), (0,
        i.Sn)("design:returntype", void 0)], E.prototype, "blockOrUnblockUser", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [v.c]), (0,
        i.Sn)("design:returntype", void 0)], E.prototype, "getLiveStatus", null),
        E = (0,
        i.Cg)([(0,
        s.n)("UserModule"), (0,
        i.Qj)(1, (0,
        a.y)(O.hp)), (0,
        i.Sn)("design:paramtypes", [M.D, Function])], E),
        I.p9.__SIGI_MODULE__ = E,
        (0,
        w.y)(E)
    }
    ,
    895524: (e, t, n) => {
        n.d(t, {
            D: () => d
        });
        var i = n(611379)
          , o = n(403057)
          , s = n(673766)
          , a = n(990064)
          , r = n(202070)
          , l = n(2756);
        let d = class {
            constructor(e) {
                this.fetch = e
            }
            getUserDetail(e) {
                const t = (0,
                l.Ni)("userDetail");
                return t ? (0,
                s.of)(t) : this.fetch.get("/api/user/detail/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            postCommitFollowUser(e) {
                return this.fetch.post("/api/commit/follow/user/", {
                    query: Object.assign(Object.assign({}, e), {
                        fromWeb: 1
                    }),
                    baseUrlType: 2,
                    headers: {
                        [a.nk]: this.fetch.csrfToken
                    }
                })
            }
            postCommitFollowUserV2(e) {
                return this.fetch.post("/api/follow/", {
                    signal: (new AbortController).signal,
                    query: Object.assign(Object.assign({}, e), {
                        fromWeb: 1
                    }),
                    baseUrlType: 2,
                    headers: {
                        [a.nk]: this.fetch.csrfToken
                    }
                })
            }
            blockUser(e) {
                return this.fetch.post("/api/user/block/", {
                    query: Object.assign(Object.assign({}, e), {
                        source: 3
                    }),
                    baseUrlType: 2,
                    headers: {
                        [a.nk]: this.fetch.csrfToken
                    }
                })
            }
        }
        ;
        d = (0,
        i.Cg)([(0,
        o._)(), (0,
        i.Sn)("design:paramtypes", [r.p])], d)
    }
    ,
    894995: (e, t, n) => {
        n.d(t, {
            O: () => G,
            D: () => Z
        });
        var i = n(611379)
          , o = n(768055)
          , s = n(554954)
          , a = n(121317)
          , r = (n(82446),
        n(145845))
          , l = n.n(r)
          , d = n(791528)
          , c = n.n(d)
          , v = n(673766)
          , u = n(33583)
          , p = n(90245)
          , g = n(894488)
          , _ = n(460057)
          , m = n(891109)
          , h = n(972038)
          , y = n(833152)
          , b = n(395831)
          , f = n(433293)
          , w = n(267658)
          , S = n(66028)
          , C = n(674895)
          , k = n(88314)
          , L = n(88489)
          , I = n(721676)
          , T = n(410212)
          , x = n(554086)
          , P = n(858475)
          , O = n(905183)
          , j = n(596095)
          , M = n(888457)
          , E = n(135999)
          , A = n(614218)
          , R = n(495199)
          , F = n(255148)
          , U = n(61284)
          , V = n(445372)
          , D = n.n(V);
        const N = {
            provide: (0,
            n(783415).U)("FirstVideoCover@tiktok/fe-shared", ( () => new U.n("FirstVideoCover"))),
            useValue: D()
        };
        var B = n(403057)
          , W = n(613919)
          , $ = n(255504)
          , q = n(202070)
          , H = n(499325);
        let z = class {
            constructor(e, t) {
                this.fetch = e,
                this.slardar = t
            }
            getCollectionList(e) {
                return this.fetch.get("/api/collection/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getRecommendList(e) {
                const t = (0,
                $.t$)("recommendItemList");
                if (t)
                    return (0,
                    W.H)(t);
                const n = (0,
                $.DV)("recommendItemList");
                return n ? (this.slardar.emitEvent("consume_prefetch_data", {
                    now: performance.now()
                }, {
                    status: "unknown",
                    from: "recommendItemList"
                }),
                (0,
                W.H)(n).pipe((0,
                g.W)(( () => (this.slardar.emitEvent("consume_prefetch_data", {
                    now: performance.now()
                }, {
                    status: "fail",
                    from: "recommendItemList"
                }),
                this.fetch.get("/api/recommend/item_list/", {
                    query: e,
                    baseUrlType: 2
                })))))) : this.fetch.get("/api/recommend/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getTopicList(e) {
                return this.fetch.get("/api/topic/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getFollowingList(e) {
                return this.fetch.get("/api/following/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getFriendsList(e) {
                return this.fetch.get("/api/friends/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getQuestionList(e) {
                return this.fetch.get("/api/question/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getPlaylistVideoList(e) {
                return this.fetch.get("/api/mix/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getChallengeList(e) {
                return this.fetch.get("/api/challenge/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getUserPostList(e) {
                const t = (0,
                $.t$)("userPostList");
                if (t)
                    return (0,
                    W.H)(t);
                const n = (0,
                $.DV)("userPostList");
                return n ? (this.slardar.emitEvent("consume_prefetch_data", {
                    now: performance.now()
                }, {
                    status: "unknown",
                    from: "userPostList"
                }),
                (0,
                W.H)(n).pipe((0,
                g.W)((t => (console.log("-===error", t),
                this.slardar.emitEvent("consume_prefetch_data", {
                    now: performance.now()
                }, {
                    status: "fail",
                    from: "userPostList"
                }),
                this.fetch.get("/api/post/item_list/", {
                    query: e,
                    baseUrlType: 2
                })))))) : this.fetch.get("/api/post/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getUserPostListByType(e) {
                return this.fetch.get("/api/post/item_list/v1/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getUserPostListBiDirection(e) {
                return this.fetch.get("/api/creator/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getUserLikedList(e) {
                return this.fetch.get("/api/favorite/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getUserFavoriteList(e) {
                return this.fetch.get("/api/user/collect/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getPoiList(e) {
                return this.fetch.get("/api/poi/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getExploreList(e) {
                const t = (0,
                $.DV)("exploreItemList");
                return t ? (this.slardar.emitEvent("consume_prefetch_data", {
                    now: performance.now()
                }, {
                    status: "unknown",
                    from: "exploreItemList"
                }),
                (0,
                W.H)(t).pipe((0,
                g.W)(( () => (this.slardar.emitEvent("consume_prefetch_data", {
                    now: performance.now()
                }, {
                    status: "fail",
                    from: "exploreItemList"
                }),
                this.fetch.get("/api/explore/item_list/", {
                    query: e,
                    baseUrlType: 2
                })))))) : this.fetch.get("/api/explore/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            getFeedCacheList(e) {
                return this.fetch.get("/api/preload/item_list/", {
                    query: e,
                    baseUrlType: 2
                })
            }
            checkItemValidation(e) {
                return this.fetch.get("/api/item/availability/", {
                    query: e,
                    baseUrlType: 2
                })
            }
        }
        ;
        z = (0,
        i.Cg)([(0,
        B._)({
            providers: [N]
        }), (0,
        i.Sn)("design:paramtypes", [q.p, H.V$])], z);
        var K = n(271293);
        let G = class extends P.E {
            constructor(e, t, n, i, o, s, a) {
                super(),
                this.service = e,
                this.item = t,
                this.videoMask = n,
                this.bizContext = i,
                this.jotaiStore = o,
                this.t = s,
                this.getFirstVideoCover = a,
                this.defaultState = {},
                this.createItemListErrorCatcher = e => t => t.pipe((0,
                g.W)((t => (x.F.destroy(),
                x.F.open({
                    content: this.t("server_error_title"),
                    duration: 3,
                    widthType: "padding"
                }),
                null == e || e(t),
                (0,
                v.of)({
                    statusCode: -1
                })))))
            }
            resetItemList(e, t) {
                const {key: n, hasMore: i=!0, loading: o=!0, cursor: s="0"} = t;
                e[n] = {
                    list: [],
                    browserList: [],
                    loading: o,
                    statusCode: 0,
                    hasMore: i,
                    cursor: s,
                    preloadList: []
                }
            }
            addItemList(e, t) {
                var n;
                const {key: i, list: o, statusCode: s=0, hasMore: a, hasMorePrevious: r, hasMoreLatest: d, cursor: v, level: u, preloadList: p, addToHead: g, liveCardDisplay: _, unviewedCursor: m, viewedCursor: h, unique: y=!0} = t
                  , b = "topic" === i || "messages" === i;
                e[i] || (e[i] = {
                    list: [],
                    browserList: [],
                    loading: !1,
                    statusCode: s,
                    hasMore: Boolean(a),
                    cursor: v,
                    preloadList: []
                });
                const f = e[i].list
                  , w = y ? c()(o, "id").filter((e => !f.includes(e.id))) : o;
                if (g)
                    e[i].list.unshift(...w.map(( ({id: e}) => e))),
                    e[i].browserList = [...(0,
                    O.bp)({
                        list: w
                    }), ...e[i].browserList];
                else {
                    const t = l()(e[i].list, w.map(( ({id: e}) => e)));
                    y ? (e[i].list = b ? f.concat(o.map(( ({id: e}) => e))) : t,
                    e[i].browserList = b ? e[i].browserList.concat((0,
                    O.bp)({
                        list: o
                    })) : l()(e[i].browserList, (0,
                    O.bp)({
                        list: w
                    }))) : (e[i].list = o.map(( ({id: e}) => e)),
                    e[i].browserList = (0,
                    O.bp)({
                        list: w
                    }))
                }
                e[i].statusCode = s,
                e[i].hasMore = a,
                e[i].cursor = v,
                e[i].level = u,
                e[i].liveCardDisplay = _,
                e[i].preloadList = (null !== (n = e[i].preloadList) && void 0 !== n ? n : []).concat(null != p ? p : []),
                "creator_tab" === i && (e[i].hasMorePrevious = null != r ? r : e[i].hasMorePrevious,
                e[i].hasMoreLatest = null != d ? d : e[i].hasMoreLatest),
                "friends" === i && (e[i].unviewedCursor = null != m ? m : e[i].unviewedCursor,
                e[i].viewedCursor = null != h ? h : e[i].viewedCursor)
            }
            setItemListById(e, t) {
                const {key: n, list: i, statusCode: o=0, hasMore: s=!0, cursor: a, level: r} = t;
                e[n] || (e[n] = {
                    list: [],
                    browserList: [],
                    loading: !1,
                    statusCode: o,
                    hasMore: Boolean(s),
                    cursor: a,
                    preloadList: []
                }),
                e[n].list = i,
                e[n].browserList = i,
                e[n].statusCode = o,
                e[n].hasMore = s,
                e[n].cursor = a,
                e[n].level = r
            }
            removeItemListById(e, t) {
                var n;
                const {key: i, groupId: o} = t;
                (null === (n = e[i]) || void 0 === n ? void 0 : n.list) && (e[i].list = e[i].list.filter((e => e !== o)))
            }
            setLoading(e, t) {
                const {loading: n, key: i} = t;
                e[i] || (e[i] = {
                    list: [],
                    browserList: [],
                    loading: n,
                    statusCode: 0,
                    hasMore: !0,
                    cursor: "0"
                }),
                e[i].loading = n
            }
            setListKeyword(e, t) {
                const {keyword: n, key: i} = t;
                e[i] || (e[i] = {
                    keyword: n,
                    list: [],
                    browserList: [],
                    loading: !1,
                    statusCode: 0,
                    hasMore: !0,
                    cursor: "0"
                }),
                e[i].keyword = n
            }
            getTopicList(e) {
                return e.pipe((0,
                _.n)(( ({topic: e, abTestVersion: t, user: n, language: i}) => this.service.getTopicList({
                    topic: e,
                    language: i,
                    count: A.Uw,
                    aid: A.xE
                }).pipe((0,
                m.T)((e => Object.assign(Object.assign({}, e), {
                    hasMore: !0
                }))), this.createItemListErrorCatcher(), this.handleListData({
                    key: "topic",
                    abTestVersion: t,
                    user: n,
                    language: i
                }), (0,
                h.q)(this.terminate())))))
            }
            getFollowingList(e) {
                return e.pipe((0,
                y.E)(this.state$, this.bizContext.state$), (0,
                b.p)(( ([{pullType: e=1, abTestVersion: t, user: n, language: i},o,s]) => {
                    var a, r, l;
                    const {cursor: d="", level: c=1} = null !== (a = o.following) && void 0 !== a ? a : {};
                    return this.service.getFollowingList({
                        aid: A.xE,
                        count: A.rd,
                        language: i,
                        cursor: d,
                        pullType: e,
                        level: c,
                        isResetCounterUsed: !0,
                        isNonPersonalized: !(0,
                        M.fU)() && (0,
                        j.PJ)(this.jotaiStore.get(j.WH)),
                        coverFormat: null === (l = null === (r = s.bizContext) || void 0 === r ? void 0 : r.videoCoverSettings) || void 0 === l ? void 0 : l.format,
                        clientABVersions: null == t ? void 0 : t.versionName
                    }).pipe(this.createItemListErrorCatcher(), this.handleListData({
                        key: "following",
                        language: i,
                        user: n,
                        abTestVersion: t
                    }))
                }
                )))
            }
            getFriendsList(e) {
                return e.pipe((0,
                y.E)(this.state$, this.bizContext.state$), (0,
                b.p)(( ([{pullType: e=1, abTestVersion: t, user: n, language: i},o,s]) => {
                    var a, r, l;
                    const {unviewedCursor: d="0", viewedCursor: c="0", level: v=1} = null !== (a = o.friends) && void 0 !== a ? a : {};
                    return this.service.getFriendsList({
                        aid: A.xE,
                        count: A.Ly,
                        language: i,
                        unviewedCursor: d,
                        viewedCursor: c,
                        pullType: e,
                        level: v,
                        isResetCounterUsed: !0,
                        isNonPersonalized: !(0,
                        M.fU)() && (0,
                        j.PJ)(this.jotaiStore.get(j.WH)),
                        coverFormat: null === (l = null === (r = s.bizContext) || void 0 === r ? void 0 : r.videoCoverSettings) || void 0 === l ? void 0 : l.format,
                        clientABVersions: null == t ? void 0 : t.versionName
                    }).pipe(this.createItemListErrorCatcher(), this.handleListData({
                        key: "friends",
                        language: i,
                        user: n,
                        abTestVersion: t
                    }))
                }
                )))
            }
            getQuestionList(e) {
                return e.pipe((0,
                f.Z)((e => this.getQuestionList$(e))))
            }
            getQuestionList$(e) {
                return (0,
                v.of)(e).pipe((0,
                y.E)(this.state$), (0,
                b.p)(( ([{questionID: e, abTestVersion: t, language: n, user: i},o]) => {
                    var s, a;
                    return this.service.getQuestionList({
                        questionID: e,
                        language: n,
                        cursor: null !== (a = null === (s = o.question) || void 0 === s ? void 0 : s.cursor) && void 0 !== a ? a : "0",
                        aid: A.xE,
                        count: A.vu
                    }).pipe(this.createItemListErrorCatcher(), this.handleListData({
                        key: "question",
                        abTestVersion: t,
                        language: n,
                        user: i
                    }))
                }
                )))
            }
            getPlaylistVideoList(e) {
                return e.pipe((0,
                f.Z)((e => this.getPlaylistVideoList$(e))))
            }
            getPlaylistVideoList$(e, t) {
                return (0,
                v.of)(e).pipe((0,
                y.E)(this.state$), (0,
                b.p)(( ([{mixId: e, key: n, abTestVersion: i, language: o, user: s, isPlayList: a},r]) => {
                    var l, d;
                    return this.service.getPlaylistVideoList({
                        mixId: e,
                        language: o,
                        cursor: null !== (d = null === (l = r[null != n ? n : e]) || void 0 === l ? void 0 : l.cursor) && void 0 !== d ? d : "0",
                        aid: A.xE,
                        count: A.vu
                    }).pipe(this.createItemListErrorCatcher(), (0,
                    w.M)((e => {
                        var n;
                        return null === (n = null == t ? void 0 : t.onVideoList) || void 0 === n ? void 0 : n.call(t, e.itemList)
                    }
                    )), this.handleListData({
                        key: null != n ? n : e,
                        abTestVersion: i,
                        language: o,
                        user: s,
                        isPlayList: a
                    }))
                }
                )))
            }
            getCollectionList(e) {
                return e.pipe((0,
                f.Z)((e => this.getCollectionList$(e))))
            }
            getCollectionList$(e) {
                return (0,
                v.of)(e).pipe((0,
                y.E)(this.state$), (0,
                b.p)(( ([{collectionId: e, abTestVersion: t, language: n, user: i},o]) => {
                    var s, a;
                    return this.service.getCollectionList({
                        collectionId: e,
                        language: n,
                        cursor: null !== (a = null === (s = o.collection) || void 0 === s ? void 0 : s.cursor) && void 0 !== a ? a : "0",
                        aid: A.xE,
                        count: A.vu,
                        sourceType: 113
                    }).pipe(this.createItemListErrorCatcher(), this.handleListData({
                        key: "collection",
                        abTestVersion: t,
                        language: n,
                        user: i
                    }))
                }
                )))
            }
            getUserVideoListByType(e) {
                return e.pipe((0,
                f.Z)((e => this.getUserVideoListByType$(e))))
            }
            getUserVideoListByType$(e) {
                return (0,
                v.of)(e).pipe((0,
                y.E)(this.state$), (0,
                _.n)(( ([{count: e=A.VD, postItemType: t=2, key: n, abTestVersion: i, language: o, user: s},a]) => {
                    var r, l;
                    const d = {
                        appId: A.xE,
                        count: e,
                        cursor: null !== (l = null === (r = a[n]) || void 0 === r ? void 0 : r.cursor) && void 0 !== l ? l : "0",
                        language: o,
                        postItemType: t
                    };
                    return this.service.getUserPostListByType(d).pipe(this.createItemListErrorCatcher(), this.handleListData({
                        key: n,
                        abTestVersion: i,
                        language: o,
                        user: s,
                        otherInfo: {
                            secUid: null == s ? void 0 : s.secUid
                        }
                    }))
                }
                )))
            }
            getPoiList(e) {
                return e.pipe((0,
                f.Z)((e => this.getPoiList$(e))))
            }
            getPoiList$(e) {
                return (0,
                v.of)(e).pipe((0,
                y.E)(this.state$), (0,
                b.p)(( ([{poiId: e, abTestVersion: t, language: n, user: i},o]) => {
                    var s, a;
                    return this.service.getPoiList({
                        poiId: e,
                        language: n,
                        cursor: null !== (a = null === (s = o.poi) || void 0 === s ? void 0 : s.cursor) && void 0 !== a ? a : "0",
                        aid: A.xE,
                        count: A.vu
                    }).pipe(this.createItemListErrorCatcher(), this.handleListData({
                        key: "poi",
                        abTestVersion: t,
                        user: i,
                        language: n
                    }))
                }
                )))
            }
            setDeleteVideo(e, t) {
                for (const n of Object.keys(e)) {
                    const i = e[n];
                    if (i) {
                        const o = i.list.filter((e => e !== t));
                        e[n].list = o,
                        e[n].browserList = i.browserList.filter((e => e !== t))
                    }
                }
            }
            deleteLiveItem(e, t) {
                for (const n of Object.keys(e)) {
                    const i = e[n];
                    if (i) {
                        const e = i.list.filter((e => e !== t));
                        i.list = e,
                        i.browserList = i.browserList.filter((e => e !== t))
                    }
                    e[n] = i
                }
            }
            setList(e) {
                return e.pipe((0,
                y.E)(this.state$, this.videoMask.state$), (0,
                w.M)(( ([{key: e, response: t, disableReportMore: n=!1, isPlayList: i=!1},o]) => {
                    var s, a, r;
                    (null !== (a = null === (s = o[e]) || void 0 === s ? void 0 : s.list) && void 0 !== a ? a : []).length && !n && T.L.handleListMore({
                        is_success: (null === (r = t.itemList) || void 0 === r ? void 0 : r.length) ? 1 : 0,
                        error_code: t.statusCode,
                        popup_type: i ? "playlist" : void 0
                    })
                }
                )), (0,
                m.T)(( ([{key: e, response: t, otherInfo: n, user: i},o,s]) => {
                    var a, r;
                    const l = null !== (r = null !== (a = t.itemList) && void 0 !== a ? a : t.items) && void 0 !== r ? r : [];
                    return t.itemList || (t.itemList = l),
                    1 !== (null == i ? void 0 : i.photoSensitiveVideosSetting) && (i || 1 !== s.photoSensitiveVideosSetting) || "user-post" === e && (null == i ? void 0 : i.secUid) === (null == n ? void 0 : n.secUid) || !("video" !== e || l.length > 1) || (t.itemList = l.filter((e => 2 === e.containerType || 4 !== (null == e ? void 0 : e.maskType)))),
                    t.itemList = t.itemList.map((e => {
                        var t;
                        return (0,
                        O.Jl)(e) && (e.id = (0,
                        O.Qw)(null === (t = e.liveRoomInfo) || void 0 === t ? void 0 : t.roomID)),
                        e
                    }
                    )),
                    {
                        key: e,
                        response: t,
                        otherInfo: n
                    }
                }
                )), (0,
                w.M)(( ({key: e, response: t}) => {}
                )), (0,
                f.Z)(( ({key: e, response: t, otherInfo: n}) => {
                    const {log_pb: i, itemList: o=[], statusCode: s=0, hasMore: a=!1, hasMorePrevious: r, liveCardDisplay: l, hasMoreLatest: d, cursor: c="0", level: u, viewedCursor: p="0", unviewedCursor: g="0"} = t
                      , _ = o.filter((e => 2 !== e.containerType)).map((e => {
                        var t, n, i, o;
                        return {
                            url: null !== (n = null === (t = e.video) || void 0 === t ? void 0 : t.playAddr) && void 0 !== n ? n : "",
                            id: null !== (o = null === (i = e.video) || void 0 === i ? void 0 : i.id) && void 0 !== o ? o : ""
                        }
                    }
                    ));
                    return 0 === s && "creator_tab" === e ? (0,
                    v.of)(...this.item.addItems(o, null == i ? void 0 : i.impr_id), this.getActions().addItemList({
                        key: e,
                        list: o,
                        statusCode: s,
                        hasMore: a,
                        hasMorePrevious: r,
                        hasMoreLatest: d,
                        preloadList: _,
                        addToHead: null == n ? void 0 : n.addToHead
                    })) : 0 !== s && 10404 !== s || "friends" !== e ? 0 === s || 10404 === s ? (0,
                    v.of)(...this.item.addItems(o, null == i ? void 0 : i.impr_id), this.getActions().addItemList({
                        key: e,
                        list: o,
                        statusCode: s,
                        hasMore: a,
                        cursor: c,
                        level: u,
                        preloadList: _,
                        liveCardDisplay: l
                    })) : (0,
                    v.of)(this.getActions().addItemList({
                        key: e,
                        list: [],
                        statusCode: s,
                        hasMore: !0,
                        preloadList: _
                    })) : (0,
                    v.of)(...this.item.addItems(o, null == i ? void 0 : i.impr_id), this.getActions().addItemList({
                        key: e,
                        list: o,
                        statusCode: s,
                        hasMore: a,
                        level: u,
                        preloadList: _,
                        addToHead: null == n ? void 0 : n.addToHead,
                        viewedCursor: p,
                        unviewedCursor: g
                    }))
                }
                )))
            }
            handleListData({key: e, language: t, user: n, otherInfo: i, onResponse: o, isPlayList: s}) {
                return a => a.pipe((0,
                S.w)(A.LA), (0,
                f.Z)((a => {
                    var r;
                    return (0,
                    u.h)((0,
                    v.of)(this.getActions().setList({
                        key: e,
                        response: a,
                        otherInfo: i,
                        language: t,
                        user: n,
                        isPlayList: s
                    })), null !== (r = null == o ? void 0 : o(a)) && void 0 !== r ? r : (0,
                    v.of)(this.noop()))
                }
                )), (0,
                C.Z)(this.getActions().setLoading({
                    key: e,
                    loading: !0
                })), (0,
                h.q)(this.getActions().setLoading({
                    key: e,
                    loading: !1
                })), (0,
                k.Q)(this.dispose$))
            }
        }
        ;
        (0,
        i.Cg)([(0,
        o.uk)(), (0,
        i.Sn)("design:type", p.c)], G.prototype, "dispose$", void 0),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "resetItemList", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "addItemList", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "setItemListById", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "removeItemListById", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "setLoading", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "setListKeyword", null),
        (0,
        i.Cg)([(0,
        o.Mj)({
            payloadGetter: 1,
            skipFirstClientDispatch: !1
        }), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [p.c]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "getTopicList", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [p.c]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "getFollowingList", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [p.c]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "getFriendsList", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [p.c]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "getQuestionList", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [p.c]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "getPlaylistVideoList", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [p.c]), (0,
        i.Sn)("design:returntype", p.c)], G.prototype, "getCollectionList", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [p.c]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "getUserVideoListByType", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [p.c]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "getPoiList", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, String]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "setDeleteVideo", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, String]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "deleteLiveItem", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [p.c]), (0,
        i.Sn)("design:returntype", void 0)], G.prototype, "setList", null),
        G = (0,
        i.Cg)([(0,
        s.n)("ItemList"), (0,
        i.Qj)(4, (0,
        a.y)(I.J7)), (0,
        i.Qj)(5, (0,
        a.y)(E.hp)), (0,
        i.Qj)(6, (0,
        a.y)(N.provide)), (0,
        i.Sn)("design:paramtypes", [z, F.k, R.w, K.$, Object, Function, Function])], G);
        const Z = (0,
        L.y)(G)
    }
    ,
    255148: (e, t, n) => {
        n.d(t, {
            k: () => H,
            t: () => z
        });
        var i = n(611379)
          , o = n(768055)
          , s = n(554954)
          , a = n(121317)
          , r = n(31862)
          , l = n(673766)
          , d = n(332363)
          , c = n(459158)
          , v = n(613919)
          , u = n(90245)
          , p = n(460057)
          , g = n(833152)
          , _ = n(891109)
          , m = n(433293)
          , h = n(267658)
          , y = n(674895)
          , b = n(850717)
          , f = n(455416)
          , w = n(829665)
          , S = n(894488)
          , C = n(88489)
          , k = n(721676)
          , L = n(975540)
          , I = n(461924)
          , T = n(800507)
          , x = n(174760)
          , P = n(280937)
          , O = n(373471)
          , j = n(249555)
          , M = n(554086)
          , E = n(858475)
          , A = n(939232)
          , R = n(595763)
          , F = n(135999)
          , U = n(905183)
          , V = n(614218)
          , D = n(235219)
          , N = n(403057)
          , B = n(990064)
          , W = n(202070);
        let $ = class {
            constructor(e) {
                this.fetch = e
            }
            postLikeVideo(e) {
                return this.fetch.post("/api/commit/item/digg/", {
                    query: e,
                    baseUrlType: 2,
                    headers: {
                        [B.nk]: this.fetch.csrfToken
                    }
                })
            }
            postDislikeVideo(e) {
                return this.fetch.post("/api/dislike/item/", {
                    query: e,
                    baseUrlType: 2,
                    headers: {
                        [B.nk]: this.fetch.csrfToken
                    }
                })
            }
            collectVideo(e) {
                return this.fetch.post("/api/item/collect/", {
                    query: e,
                    baseUrlType: 2,
                    headers: {
                        [B.nk]: this.fetch.csrfToken
                    }
                })
            }
        }
        ;
        $ = (0,
        i.Cg)([(0,
        N._)(), (0,
        i.Sn)("design:paramtypes", [W.p])], $);
        var q = n(603237);
        let H = class extends E.E {
            constructor(e, t, n, i) {
                super(),
                this.service = e,
                this.userModule = t,
                this.jotaiStore = n,
                this.t = i,
                this.defaultState = {}
            }
            setItem(e, t) {
                (0,
                L.ud)().setItem(t)
            }
            updateItem(e, t) {
                (0,
                L.ud)().updateItem(t)
            }
            multiSetItem(e, t) {
                (0,
                L.ud)().multiSetItem(t)
            }
            setLike(e, t) {
                (0,
                L.ud)().setLike(t)
            }
            setCollect(e, t) {
                (0,
                L.ud)().setCollect(t)
            }
            setCommentCount(e, t) {
                (0,
                L.ud)().setCommentCount(t)
            }
            setResolutionList(e, t) {
                (0,
                L.ud)().setResolutionList(t)
            }
            reduceOrIncreaseCommentCount(e, t) {
                (0,
                L.ud)().reduceOrIncreaseCommentCount(t)
            }
            addItems(e, t) {
                const n = e.filter((e => Boolean(e.author))).map(( ({author: e}) => e))
                  , i = e.filter((e => {
                    var t;
                    return Boolean((null === (t = null == e ? void 0 : e.liveRoomInfo) || void 0 === t ? void 0 : t.ownerInfo) && (0,
                    U.Jl)(e))
                }
                )).map((e => Object.assign(Object.assign({}, e.liveRoomInfo.ownerInfo), {
                    roomId: e.liveRoomInfo.roomID
                })))
                  , o = e.map((e => Object.assign(Object.assign({}, e), {
                    logId: t
                })));
                return [this.userModule.getActions().multiSetUser(n.concat(i)), this.getActions().multiSetItem(o)]
            }
            addItems$(e) {
                return e.pipe((0,
                p.n)((e => this.addItems(e))))
            }
            postCollectVideo(e) {
                return e.pipe((0,
                g.E)(this.state$, this.userModule.state$), (0,
                _.T)(( ([e,t,n]) => {
                    var i, o, s, a;
                    const {itemId: r} = e
                      , l = t[r]
                      , d = n.users[null !== (i = null == l ? void 0 : l.author) && void 0 !== i ? i : ""]
                      , {collected: c=!1, stats: v} = l
                      , u = c ? 2 : 1;
                    return {
                        collectCount: Number(null !== (o = null == v ? void 0 : v.collectCount) && void 0 !== o ? o : 0),
                        collected: c,
                        action: u,
                        query: {
                            aid: V.xE,
                            itemId: r,
                            action: u,
                            secUid: null !== (s = null == d ? void 0 : d.secUid) && void 0 !== s ? s : ""
                        },
                        group_id: r,
                        author_id: null !== (a = null == d ? void 0 : d.id) && void 0 !== a ? a : ""
                    }
                }
                )), (0,
                m.Z)(( ({collectCount: e, collected: t, query: n, group_id: i, author_id: o, action: s}) => this.service.collectVideo(n).pipe((0,
                h.M)(( () => {
                    T.W.handleFavoriteResult({
                        group_id: i,
                        author_id: o
                    }, s)
                }
                )), (0,
                m.Z)((n => {
                    const {statusCode: o} = n;
                    return 0 !== o ? (0,
                    r.O)(3e3).pipe((0,
                    _.T)(( () => this.getActions().setCollect({
                        id: i,
                        collected: t,
                        count: e
                    })))) : (0,
                    l.of)(1 === s ? this.getActions().addMlModelTrainData({
                        id: i,
                        action: "favorite"
                    }) : this.noop())
                }
                )), (0,
                y.Z)(this.getActions().setCollect({
                    id: i,
                    collected: !t,
                    count: t ? Math.max(0, e - 1) : e + 1
                })), (0,
                R.n)({})))))
            }
            postLikeVideo(e) {
                return e.pipe((0,
                b.$)(( ({id: e}) => e)), (0,
                m.Z)((e => {
                    const t = new d.t(0);
                    return e.pipe((0,
                    g.E)(this.state$, this.userModule.state$, t), (0,
                    m.Z)(( ([e,t,n,o]) => {
                        var s, a, r;
                        const {language: d, play_mode: v} = e
                          , u = t[e.id]
                          , p = n.users[null !== (s = null == u ? void 0 : u.author) && void 0 !== s ? s : ""]
                          , {user: g} = (0,
                        A.x)()
                          , {digged: _, stats: m, poi: h, imagePost: y, subVideoMeta: b, ad_info: f, repostList: w} = u
                          , {id: S, forceLike: C, enter_method: k="click", channel_id: L} = e
                          , I = (0,
                        i.Tt)(e, ["id", "forceLike", "enter_method", "channel_id"])
                          , T = null !== (a = null == m ? void 0 : m.diggCount) && void 0 !== a ? a : 0
                          , x = {
                            aweme_id: S,
                            channel_id: L,
                            friends_upvote: null == w ? void 0 : w.some((e => e.secUid !== (null == g ? void 0 : g.secUid))),
                            type: C ? 1 : _ ? 0 : 1
                        };
                        return C && _ ? c.w : (0,
                        l.of)({
                            query: x,
                            enter_method: k,
                            diggCount: T,
                            digged: _,
                            author_id: null !== (r = null == p ? void 0 : p.id) && void 0 !== r ? r : "",
                            group_id: u.id,
                            poi_id: null == h ? void 0 : h.id,
                            restReportParams: I,
                            changeKey: `${x.type}_${o}`,
                            language: d,
                            imagePost: y,
                            play_mode: v,
                            is_sub_only_video: b ? 1 : 0,
                            ad_info: f
                        })
                    }
                    )), (0,
                    f.w)("changeKey"), (0,
                    p.n)(( ({query: e, enter_method: n, diggCount: i, author_id: o, group_id: s, digged: a, poi_id: d, imagePost: c, is_sub_only_video: v, restReportParams: u, ad_info: p}) => {
                        let g = !1;
                        const b = (0,
                        r.O)(3e3).pipe((0,
                        _.T)(( () => this.getActions().setLike({
                            id: s,
                            liked: a,
                            count: i
                        }))), (0,
                        w.j)(( () => {
                            const e = t.getValue();
                            t.next(e + 1)
                        }
                        )))
                          , f = this.getActions().setLike({
                            id: s,
                            liked: !a,
                            count: a ? Math.max(0, i - 1) : i + 1
                        });
                        return this.service.postLikeVideo(e).pipe((0,
                        S.W)(( () => (0,
                        l.of)({
                            status_code: -1
                        }))), (0,
                        h.M)(( ({status_code: t, status_msg: i, log_pb: a={}}) => {
                            var r, l;
                            2150 !== t && 2210 !== t || i && M.F.open({
                                content: this.t(i),
                                duration: 3,
                                widthType: "half"
                            }),
                            g = !0;
                            let _ = {};
                            p && (_ = (0,
                            x.n5)({
                                ad_info: p,
                                play_mode: null !== (r = u.play_mode) && void 0 !== r ? r : "one_column"
                            })),
                            P.z.handleLikeVideoResult(Object.assign(Object.assign(Object.assign({}, u), _), {
                                group_id: s,
                                author_id: o,
                                log_pb: a,
                                enter_method: n,
                                poi_id: d,
                                aweme_type: c ? 150 : 0,
                                pic_cnt: null === (l = null == c ? void 0 : c.images) || void 0 === l ? void 0 : l.length,
                                is_sub_only_video: v
                            }), e.type)
                        }
                        )), (0,
                        w.j)(( () => {
                            var t, i;
                            let a = {};
                            p && (a = (0,
                            x.n5)({
                                ad_info: p,
                                play_mode: null !== (t = u.play_mode) && void 0 !== t ? t : "one_column"
                            })),
                            g || P.z.handleLikeVideoResult(Object.assign(Object.assign(Object.assign({}, u), a), {
                                group_id: s,
                                author_id: o,
                                log_pb: {},
                                enter_method: n,
                                poi_id: d,
                                aweme_type: c ? 150 : 0,
                                pic_cnt: null === (i = null == c ? void 0 : c.images) || void 0 === i ? void 0 : i.length,
                                is_sub_only_video: v
                            }), e.type)
                        }
                        )), (0,
                        m.Z)((t => {
                            const {status_code: n, is_digg: i} = t;
                            return 0 !== n || i === e.type ? b : (0,
                            l.of)(1 === e.type ? this.getActions().addMlModelTrainData({
                                id: s,
                                action: "like"
                            }) : this.noop())
                        }
                        )), (0,
                        y.Z)(f), (0,
                        R.n)({}))
                    }
                    )))
                }
                )))
            }
            addMlModelTrainData(e) {
                return e.pipe((0,
                g.E)(this.state$), (0,
                m.Z)(( ([e,t]) => {
                    var n;
                    const {id: i, action: o, isPreview: s} = e;
                    return i && t[i] && !(null === (n = t[i]) || void 0 === n ? void 0 : n.liveRoomInfo) ? (0,
                    v.H)((0,
                    I.xt)().addTrainData({
                        item: t[i],
                        action: o,
                        isPreview: s
                    })).pipe((0,
                    m.Z)(( () => (0,
                    l.of)(this.noop())))) : (0,
                    l.of)(this.noop())
                }
                )))
            }
            postDislikeVideo(e) {
                return e.pipe((0,
                g.E)(this.state$), (0,
                h.M)(( ([e,t]) => {
                    const {id: n, author_id: i, play_mode: o} = e
                      , s = t[n]
                      , a = null == s ? void 0 : s.ad_info;
                    let r = {};
                    a && (r = (0,
                    x.n5)({
                        ad_info: a,
                        play_mode: o
                    }),
                    r.refer = O.Hq.Button),
                    j.V.handleClickDislike(Object.assign({
                        group_id: n,
                        author_id: i,
                        play_mode: o
                    }, r)),
                    M.F.open({
                        content: this.t("webapp_forYoufeed_videoRemoved_toast"),
                        duration: 3,
                        widthType: "half",
                        getContainer: q.M,
                        getContainerPosition: "fixed"
                    })
                }
                )), (0,
                m.Z)(( ([e]) => {
                    const {id: t, author_id: n} = e
                      , i = {
                        item_id: t,
                        item_author_id: n
                    };
                    return this.service.postDislikeVideo(i).pipe((0,
                    S.W)(( () => (0,
                    l.of)({
                        status_code: -1
                    }))), (0,
                    _.T)(( () => this.getActions().addMlModelTrainData({
                        id: e.id,
                        action: "dislike"
                    }))), (0,
                    R.n)({}))
                }
                )))
            }
            setItemPrivateState(e, t) {
                (0,
                L.ud)().setItemPrivateState(t)
            }
            setDeleteVideo(e, t) {
                (0,
                L.ud)().setDeleteVideo(t)
            }
        }
        ;
        H.jotaiAtom = L.Pu,
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], H.prototype, "setItem", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], H.prototype, "updateItem", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Array]), (0,
        i.Sn)("design:returntype", void 0)], H.prototype, "multiSetItem", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], H.prototype, "setLike", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], H.prototype, "setCollect", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], H.prototype, "setCommentCount", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], H.prototype, "setResolutionList", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], H.prototype, "reduceOrIncreaseCommentCount", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [u.c]), (0,
        i.Sn)("design:returntype", void 0)], H.prototype, "addItems$", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [u.c]), (0,
        i.Sn)("design:returntype", u.c)], H.prototype, "postCollectVideo", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [u.c]), (0,
        i.Sn)("design:returntype", void 0)], H.prototype, "postLikeVideo", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [u.c]), (0,
        i.Sn)("design:returntype", void 0)], H.prototype, "addMlModelTrainData", null),
        (0,
        i.Cg)([(0,
        o.Mj)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [u.c]), (0,
        i.Sn)("design:returntype", void 0)], H.prototype, "postDislikeVideo", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, Object]), (0,
        i.Sn)("design:returntype", void 0)], H.prototype, "setItemPrivateState", null),
        (0,
        i.Cg)([(0,
        o.h5)(), (0,
        i.Sn)("design:type", Function), (0,
        i.Sn)("design:paramtypes", [Object, String]), (0,
        i.Sn)("design:returntype", void 0)], H.prototype, "setDeleteVideo", null),
        H = (0,
        i.Cg)([(0,
        s.n)("ItemModule"), (0,
        i.Qj)(2, (0,
        a.y)(k.J7)), (0,
        i.Qj)(3, (0,
        a.y)(F.hp)), (0,
        i.Sn)("design:paramtypes", [$, D.U, Object, Function])], H);
        const z = (0,
        C.y)(H)
    }
    ,
    288555: (e, t, n) => {
        n.d(t, {
            F: () => f
        });
        var i = n(611379)
          , o = n(669872)
          , s = n(490163)
          , a = n(990064)
          , r = n(225493)
          , l = n(499297)
          , d = n(729854)
          , c = n(291277)
          , v = n(102074)
          , u = n(182950)
          , p = n(329734);
        const g = "content-type"
          , _ = ["application/pdf"]
          , m = ["/api/update/profile/", "/api/commit/follow/user", "/api/comment/publish"]
          , h = "webapp-session-referer"
          , y = "device_id"
          , b = {
            "Singapore-Central": "sg",
            "US-East": "va",
            "US-EastRed": "in",
            "US-TTP": "ttp",
            "US-TTP2": "ttp2",
            "EU-TTP": "ie",
            "EU-TTP2": "no1a"
        };
        class f {
            constructor(e) {
                this.verify = d.MX,
                this.isPageVisible = !0,
                this.isFocus = !0,
                this.handleAppContext = e => (0,
                i.sH)(this, void 0, void 0, (function*() {
                    return this.appContext || (this.appContext = yield this.options.getAppContextAsync()),
                    e
                }
                )),
                this.handleBizContext = e => (0,
                i.sH)(this, void 0, void 0, (function*() {
                    this.bizContext || e.ignoreBizContext || (this.bizContext = yield this.options.getBizContextAsync());
                    const {ignoreBizContext: t} = e;
                    return (0,
                    i.Tt)(e, ["ignoreBizContext"])
                }
                )),
                this.handleQuery = e => (0,
                i.sH)(this, void 0, void 0, (function*() {
                    var t, n, i, o, s, r, l, d;
                    const c = this.getRiskParams(null !== (t = e.riskParamsType) && void 0 !== t ? t : 0)
                      , v = {}
                      , u = null === (n = this.bizContext) || void 0 === n ? void 0 : n.canUseQuery
                      , {type: p} = null !== (o = null === (i = this.appContext) || void 0 === i ? void 0 : i.env) && void 0 !== o ? o : {
                        type: ""
                    }
                      , g = null === (s = this.appContext) || void 0 === s ? void 0 : s.odinId
                      , _ = "ppe" === p || "boe" === p
                      , m = null !== (l = new URLSearchParams(null === (r = window.location) || void 0 === r ? void 0 : r.search).get(y)) && void 0 !== l ? l : void 0;
                    (u || _) && m && (v[y] = m);
                    const h = {
                        WebIdLastTime: null === (d = this.appContext) || void 0 === d ? void 0 : d.webIdCreatedTime
                    };
                    g && (h.odinId = g);
                    const b = (0,
                    a.F0)()
                      , f = b.to ? b.dispatchParams : {}
                      , w = yield this.options.getExtraParams(e);
                    return e.query = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, c), e.query), w), f), v), h),
                    e
                }
                )),
                this.handleURL = e => {
                    var t;
                    let {url: n} = e;
                    const i = null !== (t = e.query) && void 0 !== t ? t : {};
                    return n.startsWith("http:") || n.startsWith("https:") || (n = `${(0,
                    a.$_)(e.baseUrlType)}${n}`),
                    n = (0,
                    o.stringifyUrl)({
                        url: n,
                        query: i
                    }),
                    e.url = n,
                    e
                }
                ,
                this.options = e,
                "undefined" != typeof window && ((0,
                v.Gz)(this.handleVisibilityChange.bind(this, !1), this.handleVisibilityChange.bind(this, !0)),
                this.bindFocusChange())
            }
            init(e) {
                return (0,
                i.sH)(this, void 0, void 0, (function*() {
                    const t = yield this.options.getAppContextAsync(e);
                    this.appContext = t
                }
                ))
            }
            get csrfToken() {
                var e, t;
                return this.appContext,
                null !== (t = null === (e = this.appContext) || void 0 === e ? void 0 : e.csrfToken) && void 0 !== t ? t : ""
            }
            get(e, t) {
                return this.runFetch(e, Object.assign(Object.assign({}, t), {
                    method: "GET"
                }))
            }
            post(e, t={}) {
                var {omitContentType: n=!1} = t
                  , o = (0,
                i.Tt)(t, ["omitContentType"]);
                const s = new Headers(o.headers);
                return s.get(g) || n || s.set(g, "application/x-www-form-urlencoded"),
                o.body || (o.body = ""),
                o.headers = s,
                this.runFetch(e, Object.assign(Object.assign({}, o), {
                    method: "POST"
                }))
            }
            delete(e, t={}) {
                var {omitContentType: n=!1} = t
                  , o = (0,
                i.Tt)(t, ["omitContentType"]);
                return this.runFetch(e, Object.assign(Object.assign({}, o), {
                    method: "DELETE"
                }))
            }
            getRiskParams(e) {
                if (!this.appContext)
                    return {};
                if (2 === e)
                    return {};
                if ((0,
                v.Hd)(h) || (0,
                v.J2)(h, document.referrer),
                1 === e)
                    return Object.assign({}, (0,
                    r.Y)());
                const t = {};
                (0,
                l.Yp)() && (t.security_verification_aid = "1459");
                const n = navigator.userAgent;
                return Object.assign(Object.assign({}, (0,
                r.w)(Object.assign(Object.assign({}, this.appContext), {
                    isMobile: (0,
                    s.Ny)(n),
                    os: (0,
                    s.R0)(n)
                }), this.isPageVisible, this.isFocus)), t)
            }
            runFetch(e, t) {
                var n, o, s, {credentials: a="include"} = t, r = (0,
                i.Tt)(t, ["credentials"]);
                return (0,
                i.sH)(this, void 0, void 0, (function*() {
                    let t = Object.assign({
                        url: e,
                        credentials: a
                    }, r);
                    t = yield Promise.all([this.options.beforeHandleQuery(t), this.handleAppContext(t), this.handleBizContext(t)]).then(( ([,,e]) => this.handleQuery(e))).then((e => this.handleURL(e)));
                    const {url: l} = t
                      , d = (0,
                    i.Tt)(t, ["url"])
                      , c = new Set(["query", "riskParamsType", "baseUrlType", "requireSecSdk"])
                      , v = Object.keys(d).reduce(( (e, t) => (c.has(t) || (e[t] = d[t]),
                    e)), {});
                    return v.credentials = a,
                    null === (o = (n = this.options).beforeFetch) || void 0 === o || o.call(n, l, null !== (s = r.method) && void 0 !== s ? s : "GET"),
                    this.fetchData(l, v)
                }
                ))
            }
            fetchData(e, t) {
                var n, o, s, r, d, v, m, h, y, b, f, w, S, C, k, L, I, T, x, P, O, j;
                return (0,
                i.sH)(this, void 0, void 0, (function*() {
                    let i;
                    try {
                        i = yield window.fetch.call(null, e, t)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    if (i) {
                        if (i.status >= 400)
                            return (0,
                            u.Gy)(i, e),
                            Promise.reject(i);
                        {
                            const u = i.headers.get(g);
                            if (null == u ? void 0 : u.includes("application/json"))
                                try {
                                    let u = i.headers.has(l.Si) ? JSON.parse(null !== (n = i.headers.get(l.Si)) && void 0 !== n ? n : "{}") : yield i.json();
                                    const g = this._getVerifyJson(u, e)
                                      , _ = "TTP" === (null === (o = this.appContext) || void 0 === o ? void 0 : o.clusterRegion)
                                      , T = (null === (s = this.bizContext) || void 0 === s ? void 0 : s.idc) ? (0,
                                    c.v)(this.bizContext.idc) : null === (r = this.bizContext) || void 0 === r ? void 0 : r.vregion;
                                    i.headers.has(l.Si) && (null === (d = this.options) || void 0 === d ? void 0 : d.reportFn) && (null === (y = null === (h = null === (m = (v = this.options).reportFn) || void 0 === m ? void 0 : m.call(v)) || void 0 === h ? void 0 : h.context) || void 0 === y || y.call(h, {
                                        firstScreenRequest: "abort",
                                        verify: "1"
                                    }));
                                    const x = yield this.verify.checkVerify(g, null !== (f = null === (b = this.appContext) || void 0 === b ? void 0 : b.wid) && void 0 !== f ? f : "0", _, a.si.captcha, {
                                        lang: null === (w = this.appContext) || void 0 === w ? void 0 : w.language,
                                        userMode: (0,
                                        p.n)({
                                            isVA: "US-TTP" === T || "US-TTP2" === T,
                                            isLogin: Boolean(null === (S = this.appContext) || void 0 === S ? void 0 : S.user),
                                            isFTC: null !== (L = null === (k = null === (C = this.appContext) || void 0 === C ? void 0 : C.user) || void 0 === k ? void 0 : k.ftcUser) && void 0 !== L && L,
                                            isHighRisk: !1,
                                            isEU: (null == T ? void 0 : T.startsWith("EU-TTP")) || "US-EAST-RED" === T
                                        })
                                    });
                                    return 0 === x ? ((null === (I = this.options) || void 0 === I ? void 0 : I.onJsonResponse) && (u = this.options.onJsonResponse({
                                        response: i,
                                        config: t,
                                        json: u
                                    })),
                                    u) : 2 === x ? this.fetchData(e, t) : {
                                        statusCode: -1
                                    }
                                } catch (e) {
                                    return null === (O = null === (P = null === (x = null === (T = this.options) || void 0 === T ? void 0 : T.reportFn) || void 0 === x ? void 0 : x.call(T)) || void 0 === P ? void 0 : P.context) || void 0 === O || O.call(P, {
                                        firstScreenRequest: "abort"
                                    }),
                                    Promise.reject(i)
                                }
                            else {
                                if (null === (j = i.headers.get(g)) || void 0 === j ? void 0 : j.includes("text/"))
                                    return i.text();
                                if (-1 !== _.indexOf(String(u)))
                                    return i.blob();
                                if (null == u ? void 0 : u.includes("application/x-protobuf"))
                                    return i.arrayBuffer()
                            }
                            return i.text()
                        }
                    }
                }
                ))
            }
            _getVerifyJson(e, t) {
                var n, i, o, s;
                const r = e.status_code || e.code
                  , d = r === l.CQ
                  , v = r === l.Zu;
                if (m.some((e => t.includes(e))) && (d || v)) {
                    const {idc: e} = null !== (n = this.bizContext) && void 0 !== n ? n : {}
                      , t = (0,
                    c.v)(e);
                    return {
                        code: "10000",
                        from: "shark_admin",
                        type: "verify",
                        version: 1,
                        region: null !== (s = null !== (i = b[t]) && void 0 !== i ? i : l.sG[null !== (o = a.si.kind) && void 0 !== o ? o : ""]) && void 0 !== s ? s : "va",
                        subtype: d ? "slide" : "text",
                        verify_event: "",
                        detail: {},
                        fp: -1
                    }
                }
                return e
            }
            handleVisibilityChange(e) {
                this.isPageVisible = e
            }
            bindFocusChange() {
                const e = () => {
                    this.isFocus = !0
                }
                  , t = () => {
                    this.isFocus = !1
                }
                ;
                return window.addEventListener("focus", e),
                window.addEventListener("blur", t),
                () => {
                    window.removeEventListener("focus", e),
                    window.removeEventListener("blur", t)
                }
            }
        }
        window.FetchUtils = new f({
          getBizContextAsync: ()=> void 0,
          getAppContextAsync: ()=> void 0,
          getExtraParams: ()=> void 0,
          beforeHandleQuery: ()=> void 0,
          beforeFetch: ()=> void 0,
          onJsonResponse: ()=> void 0,
          reportFn: ()=> void 0,
        });
    }
    ,
    990064: (e, t, n) => {
        n.d(t, {
            $_: () => d,
            F0: () => c,
            Ty: () => r,
            Z4: () => s,
            nk: () => a,
            si: () => i
        });
        const i = (0,
        n(848420).V)();
        var o, s;
        !function(e) {
            e[e.Default = 0] = "Default",
            e[e.Simple = 1] = "Simple",
            e[e.None = 2] = "None"
        }(o || (o = {})),
        function(e) {
            e[e.None = 0] = "None",
            e[e.AWEME = 1] = "AWEME",
            e[e.FixedWww = 2] = "FixedWww",
            e[e.AutoMOrT = 3] = "AutoMOrT",
            e[e.Webcast = 4] = "Webcast",
            e[e.AutoWebcastMOrT = 5] = "AutoWebcastMOrT",
            e[e.AWEMEV1 = 6] = "AWEMEV1",
            e[e.CommentTest = 8] = "CommentTest",
            e[e.WebcastT = 9] = "WebcastT",
            e[e.Now = 10] = "Now"
        }(s || (s = {}));
        const a = "tt-csrf-token"
          , r = {
            FORM_ENCODE: "application/x-www-form-urlencoded; charset=UTF-8",
            JSON: "application/json; charset=UTF-8"
        }
          , l = () => {
            var e, t, n;
            try {
                const i = document.getElementById("__REGION__DATA__INJECTED__");
                return null === (n = null === (t = JSON.parse(null !== (e = null == i ? void 0 : i.textContent) && void 0 !== e ? e : "{}").__DATA__) || void 0 === t ? void 0 : t.region_data_domains) || void 0 === n ? void 0 : n.WEBAPP_WEBCAST_API
            } catch (e) {
                return
            }
        }
        ;
        function d(e=0) {
            var t, n, o, s, a, r, d, c;
            switch (e) {
            case 9:
                {
                    let e = "https://webcast.tiktok.com";
                    return "us" === i.kind && (e = "https://webcast.us.tiktok.com"),
                    e
                }
            case 2:
                return null !== (t = i.rootApi) && void 0 !== t ? t : "https://www.tiktok.com";
            case 3:
                return null !== (n = i.mTApi) && void 0 !== n ? n : "";
            case 6:
                return null !== (o = i.rootApi) && void 0 !== o ? o : "";
            case 4:
                return null !== (a = null !== (s = l()) && void 0 !== s ? s : i.webcastRootApi) && void 0 !== a ? a : "https://webcast.tiktok.com";
            case 5:
                return null !== (r = i.webcastApi) && void 0 !== r ? r : "";
            case 0:
                return null !== (d = i.rootApi) && void 0 !== d ? d : "";
            case 8:
                return null !== (c = i.rootApi) && void 0 !== c ? c : "";
            case 10:
                return "https://now.tiktok.com";
            default:
                return ""
            }
        }
        function c() {
            var e, t;
            try {
                const n = JSON.parse(null !== (t = null === (e = window.document.getElementById("__SCHEDULE_INFO__")) || void 0 === e ? void 0 : e.textContent) && void 0 !== t ? t : "{}");
                if (n.to)
                    return n
            } catch (e) {
                console.warn(e)
            }
            return {
                from: "",
                to: "",
                dispatchParams: {}
            }
        }
    }
    ,
    182950: (e, t, n) => {
        n.d(t, {
            Rh: () => l,
            gk: () => d,
            LZ: () => v,
            Gy: () => u
        });
        class i {
            constructor() {
                this.events = {}
            }
            on(e, t, n={}) {
                var i;
                let o = t;
                return n.once && (o = function(e) {
                    let t, n = !1;
                    return i => (n || (t = e.apply(this, i),
                    n = !0),
                    t)
                }(t)),
                this.events[e] ? null === (i = this.events[e]) || void 0 === i || i.push(o) : this.events[e] = [o],
                () => {
                    var n;
                    this.events[e] = null === (n = this.events[e]) || void 0 === n ? void 0 : n.filter((e => t !== e))
                }
            }
            emit(e, ...t) {
                const n = this.events[e] || [];
                for (const e of n)
                    e(...t)
            }
            clear(e) {
                this.events[e] = []
            }
        }
        const o = 503
          , s = "X-TT-System-Error"
          , a = "23"
          , r = "/api/v3/register/verification/age"
          , l = "sig_api_geoblocked"
          , d = "sig_signup_api_geoblocked";
        class c {
            constructor() {
                this.emitter = new i
            }
            static getInstance() {
                return c.instance || (c.instance = new c),
                c.instance
            }
            on(...e) {
                return this.emitter.on(...e)
            }
            emit(e, t) {
                this.emitter.emit(e, t)
            }
            clear(e) {
                this.emitter.clear(e)
            }
        }
        const v = c.getInstance();
        function u(e, t) {
            const n = function(e) {
                if (!e || e.status !== o || !e.headers)
                    return !1;
                const t = e.headers.get ? e.headers.get(s) : e.headers[s.toLowerCase()];
                return !(!t || t !== a)
            }(e);
            if (n)
                if (function(e) {
                    return e.includes(r)
                }(t)) {
                    const e = function(e) {
                        const t = e.split("?")[0]
                          , n = t.indexOf(r);
                        return {
                            domain: t.substring(0, n),
                            path: t.substring(n)
                        }
                    }(t);
                    v.emit(d, e)
                } else
                    v.emit(l)
        }
    }
    ,
    893768: (e, t, n) => {
        n.d(t, {
            P: () => g
        });
        var i = n(611379)
          , o = n(182950)
          , s = n(499297)
          , a = n(729854)
          , r = n(990064)
          , l = n(329734)
          , d = n(291277);
        const c = "content-type"
          , v = ["/api/update/profile/", "/api/commit/follow/user", "/api/comment/publish"]
          , u = ["application/pdf"]
          , p = {
            "Singapore-Central": "sg",
            "US-East": "va",
            "US-EastRed": "in",
            "US-TTP": "ttp",
            "US-TTP2": "ttp2",
            "EU-TTP": "ie",
            "EU-TTP2": "no1a"
        };
        function g({url: e, response: t, appContext: n, bizContext: _, options: m, config: h, retryFn: y= () => (0,
        i.sH)(this, void 0, void 0, (function*() {}
        ))}, b) {
            var f, w, S, C, k, L, I, T, x, P, O, j;
            return (0,
            i.sH)(this, void 0, void 0, (function*() {
                if (null === (f = null == b ? void 0 : b.emitEvent) || void 0 === f || f.call(b, "request_status", {
                    now: performance.now()
                }, {
                    statusCode: "unknown"
                }),
                t.status >= 400)
                    return (0,
                    o.Gy)(t, e),
                    null === (w = null == b ? void 0 : b.emitEvent) || void 0 === w || w.call(b, "request_status", {
                        now: performance.now()
                    }, {
                        statusCode: `${t.status}`
                    }),
                    Promise.reject(t);
                {
                    const i = t.headers.get(c);
                    if (null == i ? void 0 : i.includes("application/json"))
                        try {
                            let i = t.headers.has(s.Si) ? JSON.parse(null !== (S = t.headers.get(s.Si)) && void 0 !== S ? S : "{}") : yield t.json();
                            const o = t.headers.has(s.Si);
                            null === (C = null == b ? void 0 : b.emitEvent) || void 0 === C || C.call(b, "request_status", {
                                now: performance.now()
                            }, {
                                statusCode: `${t.status}`,
                                needVerify: `${o}`
                            }),
                            o && (null === (k = null == b ? void 0 : b.context) || void 0 === k || k.call(b, {
                                firstScreenRequest: "abort",
                                verify: "1"
                            }));
                            const c = function(e, t, n) {
                                var i, o, a;
                                const l = e.status_code || e.code
                                  , c = l === s.CQ
                                  , u = l === s.Zu;
                                if (v.some((e => t.includes(e))) && (c || u)) {
                                    const e = (0,
                                    d.v)(n);
                                    return {
                                        code: "10000",
                                        from: "shark_admin",
                                        type: "verify",
                                        version: 1,
                                        region: null !== (a = null !== (i = p[e]) && void 0 !== i ? i : s.sG[null !== (o = r.si.kind) && void 0 !== o ? o : ""]) && void 0 !== a ? a : "va",
                                        subtype: c ? "slide" : "text",
                                        verify_event: "",
                                        detail: {},
                                        fp: -1
                                    }
                                }
                                return e
                            }(i, e, null == _ ? void 0 : _.idc)
                              , u = "TTP" === (null == n ? void 0 : n.clusterRegion)
                              , f = (null == _ ? void 0 : _.idc) ? (0,
                            d.v)(_.idc) : null == _ ? void 0 : _.vregion
                              , w = yield a.MX.checkVerify(c, null !== (L = null == n ? void 0 : n.wid) && void 0 !== L ? L : "0", u, r.si.captcha, {
                                lang: null == n ? void 0 : n.language,
                                userMode: (0,
                                l.n)({
                                    isVA: "US-TTP" === f || "US-TTP2" === f,
                                    isLogin: Boolean(null == n ? void 0 : n.user),
                                    isFTC: null !== (T = null === (I = null == n ? void 0 : n.user) || void 0 === I ? void 0 : I.ftcUser) && void 0 !== T && T,
                                    isHighRisk: !1,
                                    isEU: (null == f ? void 0 : f.startsWith("EU-TTP")) || "US-EAST-RED" === f
                                })
                            });
                            return 0 === w ? ((null == m ? void 0 : m.onJsonResponse) && (i = m.onJsonResponse({
                                response: t,
                                config: h,
                                json: i
                            })),
                            null === (x = null == b ? void 0 : b.emitEvent) || void 0 === x || x.call(b, "request_status", {
                                now: performance.now()
                            }, {
                                statusCode: `${t.status}`,
                                status: "success"
                            }),
                            i) : 2 === w ? y().then((t => g({
                                url: e,
                                response: t,
                                appContext: n,
                                bizContext: _,
                                options: m,
                                config: h,
                                retryFn: y
                            }, b))) : {
                                statusCode: -1
                            }
                        } catch (e) {
                            return null === (P = null == b ? void 0 : b.emitEvent) || void 0 === P || P.call(b, "request_status", {
                                now: performance.now()
                            }, {
                                statusCode: `${t.status}`,
                                status: "fail",
                                needVerify: `${t.headers.has(s.Si)}`,
                                isRiskControlBlock: `${"0, 0" === t.headers.get("content-length") && "Janus-Mini(fast)" === t.headers.get("x-janus-mini-api-forward")}`,
                                errorMessage: null == e ? void 0 : e.message
                            }),
                            null === (O = null == b ? void 0 : b.context) || void 0 === O || O.call(b, {
                                firstScreenRequest: "abort"
                            }),
                            Promise.reject(t)
                        }
                    else {
                        if (null === (j = t.headers.get(c)) || void 0 === j ? void 0 : j.includes("text/"))
                            return t.text();
                        if (-1 !== u.indexOf(String(i)))
                            return t.blob();
                        if (null == i ? void 0 : i.includes("application/x-protobuf"))
                            return t.arrayBuffer()
                    }
                    return t.text()
                }
            }
            ))
        }
    }
    ,
    225493: (e, t, n) => {
        n.d(t, {
            Y: () => a,
            w: () => s
        });
        const i = (e, t) => {
            try {
                return sessionStorage.getItem(e) || t
            } catch (e) {
                return console.warn("sessionStorage get failed"),
                t
            }
        }
        ;
        function o(e, t="") {
            var n;
            try {
                return null !== (n = localStorage.getItem(e)) && void 0 !== n ? n : t
            } catch (e) {
                return t
            }
        }
        const s = (e, t, n) => {
            var s, a, r;
            const l = document.cookie.match(/s_v_web_id=(\w+)/);
            try {
                const d = "v1" === (null === (r = null === (a = null === (s = e.abTestVersion) || void 0 === s ? void 0 : s.parameters) || void 0 === a ? void 0 : a.webapp_odin_id_fe_reverse) || void 0 === r ? void 0 : r.vid)
                  , c = !!(e || {}).user
                  , v = Object.assign(Object.assign({
                    aid: "1988",
                    app_name: "tiktok_web",
                    channel: "tiktok_web",
                    device_platform: (e || {}).isMobile ? "web_mobile" : "web_pc",
                    device_id: (e || {}).wid,
                    region: (e || {}).region,
                    priority_region: ((e || {}).user || {}).region || "",
                    os: (e || {}).os,
                    referer: document.referrer,
                    root_referer: i("webapp-session-referer"),
                    cookie_enabled: navigator.cookieEnabled,
                    screen_width: screen.width,
                    screen_height: screen.height,
                    browser_language: navigator.language,
                    browser_platform: navigator.platform,
                    browser_name: navigator.appCodeName,
                    browser_version: navigator.appVersion,
                    browser_online: navigator.onLine,
                    verifyFp: (l || "")[1],
                    app_language: (e || {}).language,
                    webcast_language: (e || {}).language,
                    tz_name: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    is_page_visible: t,
                    focus_state: n,
                    is_fullscreen: window.matchMedia("(display-mode: fullscreen)").matches,
                    history_len: window.history.length
                }, d ? {} : {
                    user_is_login: c
                }), {
                    data_collection_enabled: c || "1" === o("guest-mode-flag", "0")
                });
                return "ageVerify" === i("enter_method") && (v.security_verification_aid = "1459"),
                v
            } catch (e) {}
            return {}
        }
          , a = () => ({
            cookie_enabled: navigator.cookieEnabled,
            screen_width: screen.width,
            screen_height: screen.height,
            browser_language: navigator.language,
            browser_platform: navigator.platform,
            browser_name: navigator.appCodeName,
            browser_version: navigator.appVersion,
            browser_online: navigator.onLine,
            timezone_name: Intl.DateTimeFormat().resolvedOptions().timeZone
        })
    }
    ,
    499297: (e, t, n) => {
        n.d(t, {
            CQ: () => a,
            Si: () => d,
            Yp: () => s,
            Zu: () => r,
            sG: () => l
        });
        var i, o = n(102074);
        !function(e) {
            e[e.Unknown = 0] = "Unknown",
            e[e.WebLoggedIn = 513] = "WebLoggedIn",
            e[e.WebUSNotLoggedIn = 514] = "WebUSNotLoggedIn",
            e[e.WebUSNotLoggedInHighRisk = 515] = "WebUSNotLoggedInHighRisk",
            e[e.WebNonUSNotLoggedIn = 516] = "WebNonUSNotLoggedIn",
            e[e.WebUnder13 = 517] = "WebUnder13",
            e[e.WebEUNotLoggedIn = 518] = "WebEUNotLoggedIn",
            e[e.WebEUNotLoggedInHighRisk = 519] = "WebEUNotLoggedInHighRisk"
        }(i || (i = {}));
        const s = () => "ageVerify" === (0,
        o.Hd)("enter_method")
          , a = 3058
          , r = 3059
          , l = {
            m: "va",
            t: "sg",
            us: "ttp",
            boe: "boe",
            "": void 0
        }
          , d = "bdturing-verify"
    }
    ,
    329734: (e, t, n) => {
        n.d(t, {
            n: () => i
        });
        const i = ({isVA: e, isLogin: t, isFTC: n, isHighRisk: i, isEU: o=!1}) => n ? 517 : t ? 513 : o && i ? 519 : o && !i ? 518 : e && i ? 515 : e && !i ? 514 : 516
    }
    ,
    102074: (e, t, n) => {
        n.d(t, {
            Gz: () => o,
            Hd: () => s,
            J2: () => a
        });
        const i = () => {}
        ;
        function o(e=i, t=i) {
            let n, o;
            function s() {
                n && document[n] ? e() : t()
            }
            return "hidden"in document ? (n = "hidden",
            o = "visibilitychange") : "msHidden"in document ? (n = "msHidden",
            o = "msvisibilitychange") : "webkitHidden"in document && (n = "webkitHidden",
            o = "webkitvisibilitychange"),
            "addEventListener"in document && n && o ? (document.addEventListener(o, s, !1),
            document.removeEventListener.bind(document, o, s, !1)) : i
        }
        function s(e, t="") {
            var n;
            try {
                return null !== (n = sessionStorage.getItem(e)) && void 0 !== n ? n : t
            } catch (e) {
                return t
            }
        }
        function a(e, t) {
            try {
                sessionStorage.setItem(e, t)
            } catch (e) {}
        }
    }
    ,
    291277: (e, t, n) => {
        n.d(t, {
            v: () => o
        });
        const i = {
            useast1a: "US-East",
            useast2a: "US-EastRed",
            useast5: "US-TTP",
            useast8: "US-TTP2",
            sg1: "Singapore-Central",
            my: "Singapore-Central",
            my2: "Singapore-Central",
            ie: "EU-TTP",
            no1a: "EU-TTP2"
        };
        function o(e) {
            var t;
            return void 0 !== e && null !== (t = i[e]) && void 0 !== t ? t : "UNKNOWN"
        }
    }
    ,
    729854: (e, t, n) => {
        n.d(t, {
            MX: () => a
        });
        var i = n(611379);
        const o = 1e4;
        var s;
        !function(e) {
            e[e.Pass = 0] = "Pass",
            e[e.Reject = 1] = "Reject",
            e[e.Retry = 2] = "Retry"
        }(s || (s = {}));
        const a = new class {
            constructor() {
                this.domId = "tiktok-verify-ele",
                this.captcha = null,
                this.verifyElement = null,
                this.open = !1,
                this.rejectPass = !1,
                this.checkVerify = (e, t, n, s, a) => (0,
                i.sH)(this, void 0, void 0, (function*() {
                    var i;
                    if ("object" != typeof e)
                        return e;
                    const {statusCode: r, code: l} = null != e ? e : {};
                    if (r === o || l === String(o)) {
                        const r = l === String(o) ? e : e.verifyConfig
                          , d = s && n && !r.region.startsWith("ttp") ? "ttp" : r.region
                          , c = yield this.loadCaptcha(d, t);
                        if (-1 === r.fp) {
                            const e = yield null === (i = this.captcha) || void 0 === i ? void 0 : i.getFp();
                            r.fp = e
                        }
                        return c ? this.open ? (yield this.updateState(),
                        this.rejectPass ? 1 : 2) : yield this.goVerify(r, s, null == a ? void 0 : a.lang, null == a ? void 0 : a.userMode) : 1
                    }
                    return 0
                }
                )),
                this.destroy = () => {
                    var e;
                    null === (e = this.captcha) || void 0 === e || e.close(),
                    this.verifyElement && (document.body.removeChild(this.verifyElement),
                    this.verifyElement = null)
                }
            }
            init() {
                this.verifyElement || (this.verifyElement = document.createElement("div"),
                this.verifyElement.setAttribute("id", this.domId),
                document.body.appendChild(this.verifyElement))
            }
            goVerify(e, t, n, i) {
                return this.init(),
                new Promise((o => {
                    this.openVerify(( () => {
                        this.closeVerify(),
                        o(2)
                    }
                    ), ( () => {
                        this.closeVerify(!0),
                        o(1)
                    }
                    ), e, t, n, i)
                }
                ))
            }
            closeVerify(e=!1) {
                var t;
                this.open = !1,
                this.rejectPass = e,
                null === (t = this.captcha) || void 0 === t || t.close()
            }
            openVerify(e, t, n, i, o, s) {
                var a;
                const r = {
                    ele: this.domId,
                    lang: null != o ? o : "en",
                    successCb: e,
                    showMode: "mask",
                    closeCb: t,
                    errorCb: () => {}
                    ,
                    fpCookieOption: {
                        domain: ".tiktok.com",
                        sameSite: "None",
                        secure: !0
                    }
                };
                i && (r.host = i),
                this.open = !0,
                this.rejectPass = !0,
                null === (a = this.captcha) || void 0 === a || a.render({
                    userMode: s,
                    verify_data: n,
                    captchaOptions: r
                })
            }
            updateState() {
                return new Promise((e => {
                    if (!this.open)
                        return void e();
                    const t = setInterval(( () => {
                        this.open || (clearInterval(t),
                        e())
                    }
                    ), 800)
                }
                ))
            }
            loadCaptcha(e, t) {
                return (0,
                i.sH)(this, void 0, void 0, (function*() {
                    if (!this.captcha) {
                        let i;
                        switch (e) {
                        case "boe":
                        case "sg":
                            i = n.e(34336).then(n.bind(n, 779755));
                            break;
                        case "va":
                            i = n.e(80241).then(n.bind(n, 483444));
                            break;
                        case "ie":
                            i = n.e(63392).then(n.bind(n, 680555));
                            break;
                        case "no1a":
                            i = n.e(7181).then(n.bind(n, 8524));
                            break;
                        case "gcp":
                        case "in":
                            i = n.e(91427).then(n.bind(n, 640782));
                            break;
                        case "ttp":
                            i = n.e(22318).then(n.bind(n, 953413));
                            break;
                        case "ttp2":
                            i = n.e(35112).then(n.bind(n, 766159));
                            break;
                        case "useastred":
                            i = n.e(51618).then(n.bind(n, 378317));
                            break;
                        default:
                            return !1
                        }
                        const o = yield i;
                        this.captcha = o,
                        o.init({
                            commonOptions: {
                                aid: 1988,
                                did: t || "0",
                                iid: "0"
                            },
                            captchaOptions: {
                                fpCookieOption: {
                                    domain: ".tiktok.com",
                                    sameSite: "None",
                                    secure: !0
                                }
                            }
                        })
                    }
                    return !0
                }
                ))
            }
        }
    }
    ,
    241773: (e, t, n) => {
        var i, o, s, a, r, l, d;
        n.d(t, {
            JO: () => c
        }),
        function(e) {
            e[e.UNDEFINED = 0] = "UNDEFINED",
            e[e.CREATE = 1] = "CREATE",
            e[e.LIVING = 2] = "LIVING",
            e[e.STOP = 3] = "STOP"
        }(i || (i = {})),
        function(e) {
            e[e.DEFAULT = 0] = "DEFAULT",
            e[e.PREPARE = 1] = "PREPARE",
            e[e.ONLINE = 2] = "ONLINE",
            e[e.PAUSE = 3] = "PAUSE",
            e[e.OFFLINE = 4] = "OFFLINE",
            e[e.SUSPENDED = -1] = "SUSPENDED",
            e[e.LIVE_AND_LEAVE = -2] = "LIVE_AND_LEAVE",
            e[e.PAID_EVENT = -3] = "PAID_EVENT",
            e[e.SUBSCRIBER_ONLY = -4] = "SUBSCRIBER_ONLY",
            e[e.UNAVAILABLE = -5] = "UNAVAILABLE",
            e[e.REGIONAL_UNAVAILABLE = -6] = "REGIONAL_UNAVAILABLE",
            e[e.Blocked = -7] = "Blocked",
            e[e.USER_RM_BLOCK = -8] = "USER_RM_BLOCK",
            e[e.PARENT_RM_BLOCK = -9] = "PARENT_RM_BLOCK",
            e[e.KickOut = -10] = "KickOut",
            e[e.E_COMMERCE_BLOCK = -11] = "E_COMMERCE_BLOCK",
            e[e.E_COMMERCE_USER_RM = -12] = "E_COMMERCE_USER_RM",
            e[e.E_COMMERCE_PARENT_RM = -13] = "E_COMMERCE_PARENT_RM"
        }(o || (o = {})),
        function(e) {
            e.Live = "tiktok_live_view_window"
        }(s || (s = {})),
        function(e) {
            e[e.TRILL = 1180] = "TRILL",
            e[e.MUSICALLY = 1233] = "MUSICALLY"
        }(a || (a = {})),
        function(e) {
            e.TRILL = "t",
            e.MUSICALLY = "m",
            e.LITE = "lite"
        }(r || (r = {})),
        function(e) {
            e[e.Normal = 0] = "Normal",
            e[e.SmartPlayer = 1] = "SmartPlayer"
        }(l || (l = {})),
        function(e) {
            e[e.UNSET = 0] = "UNSET",
            e[e.CLOSE = 1] = "CLOSE",
            e[e.OPEN = 2] = "OPEN"
        }(d || (d = {}));
        const c = [{
            name: "use_container_exp",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "share_button_part1_test",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "expose_recharge_entry_pc",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "fyp_live_preview_265",
            vid: ["v0", "v1"]
        }, {
            name: "live_studio_download_type",
            vid: ["v1", "v2"]
        }, {
            name: "live_studio_entry",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "live_context_optimize",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "live_react_query_cache",
            vid: ["v0", "v1"]
        }, {
            name: "live_discover_draw_hover",
            vid: ["v0", "v1"]
        }, {
            name: "live_www_host",
            vid: ["v0", "v1"]
        }, {
            name: "live_persister",
            vid: ["v0", "v1"]
        }, {
            name: "live_discover_enter_shortcut",
            vid: ["v0", "v1"]
        }, {
            name: "live_shortcuts_all",
            vid: ["v0", "v1"]
        }, {
            name: "live_shortcuts_video",
            vid: ["v0", "v1"]
        }, {
            name: "live_seamless_enter_room",
            vid: ["v1", "v2"]
        }, {
            name: "live_player_h265",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "live_player_switch_button",
            vid: ["v1", "v2"]
        }, {
            name: "live_loading_icon",
            vid: ["v1", "v2"]
        }, {
            name: "live_player_mute_text",
            vid: ["v1", "v2"]
        }, {
            name: "live_player_handler",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "live_player_icon",
            vid: ["v1", "v2"]
        }, {
            name: "live_detail_non_logged_in_entry",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "live_dynamic_bg",
            vid: ["v1", "v2"]
        }, {
            name: "live_player_enable_1080p",
            vid: ["v1", "v2"]
        }, {
            name: "live_auto_definition_tips",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "live_room_age_restriction",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "live_feed_preload",
            vid: ["v0", "v1"]
        }, {
            name: "live_feed_style",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "live_feed_auto_play_3",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "live_player_e2e_low_delay_preload_time_test",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "show_player_stats_entry",
            vid: ["v1", "v2"]
        }, {
            name: "live_lcp_perf_optimize",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "live_report_reason_api",
            vid: ["v1", "v2"]
        }, {
            name: "live_report_comment_reason_api",
            vid: ["v1", "v2"]
        }, {
            name: "live_recharge_by_amount",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "live_recharge_login",
            vid: ["v1", "v2"]
        }, {
            name: "exchange_retention_popup",
            vid: ["v1", "v2"]
        }, {
            name: "live_recharge_homescreen",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "live_wallet_performance_packup",
            vid: ["v0", "v1"]
        }, {
            name: "live_subscription_cashier",
            vid: ["v1", "v2"]
        }, {
            name: "show_recharge_advantage",
            vid: ["v1", "v2"]
        }, {
            name: "live_stack_insert_context",
            vid: ["v1", "v2"]
        }, {
            name: "live_csr_insert_context",
            vid: ["v1", "v2"]
        }, {
            name: "live_room_csr",
            vid: ["v1", "v2"]
        }, {
            name: "webapp_fyp_live_opt",
            vid: ["v0", "v1"]
        }, {
            name: "live_survey_open",
            vid: ["v0", "v1"]
        }, {
            name: "live_volume_balance",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "live_abr_rt_bitrate",
            vid: ["v0", "v1"]
        }, {
            name: "live_abr_preload_stream",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "live_abr_bb4live_optimize",
            vid: ["v0", "v1"]
        }, {
            name: "live_mse_in_worker",
            vid: ["v0", "v1"]
        }, {
            name: "live_gift_logged_out_control",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "live_abr_memo",
            vid: ["v0", "v1"]
        }, {
            name: "live_stage_definition",
            vid: ["v0", "v1"]
        }, {
            name: "live_recharge_path_shortening_home_screen",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "live_recharge_get_coins_entrance_for_you_page",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "enable_ec_lcc",
            vid: ["v0", "v1"]
        }, {
            name: "live_chat_message_cache_opt",
            vid: ["v0", "v1"]
        }, {
            name: "live_screen_radio_opt_display_bottom",
            vid: ["v0", "v1"]
        }, {
            name: "live_screen_radio_opt_side_nav",
            vid: ["v0", "v1"]
        }, {
            name: "live_quick_chat_expand",
            vid: ["v0", "v1"]
        }, {
            name: "live_chat_refresh_rate_opt",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "live_chat_like_btn_animate_downgrade",
            vid: ["v0", "v1"]
        }, {
            name: "live_chat_other_animate_downgrade",
            vid: ["v0", "v1"]
        }, {
            name: "live_discover_animate_downgrade",
            vid: ["v0", "v1"]
        }, {
            name: "live_edenx_runtime",
            vid: ["v1", "v2"]
        }, {
            name: "webapp_live_nav_avatar",
            vid: ["v0", "v1"]
        }, {
            name: "live_nav_entrance",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "live_new_sidenav",
            vid: ["v0", "v1"]
        }, {
            name: "live_detail_endlive_auto_feed",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "live_recharge_one_tap_polling_optimize",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "live_recharge_supply_entrances_for_us_mobile",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "live_recharge_supply_entrances_for_us",
            vid: ["v0", "v1"]
        }, {
            name: "live_previewcard_opt",
            vid: ["v0", "v1"]
        }, {
            name: "live_chat_refactor_phase1",
            vid: ["v0", "v1"]
        }, {
            name: "one_tap_ios_deep_link",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "webapp_live_avator_animation",
            vid: ["v0", "v1"]
        }, {
            name: "fyp_live_card_open_direct",
            vid: ["v0", "v1"]
        }, {
            name: "live_disable_header_skeleton",
            vid: ["v0", "v1"]
        }, {
            name: "live_non_logged_in_time_restriction_pc",
            vid: ["v0", "v1"]
        }, {
            name: "live_non_logged_in_time_restriction_mobile",
            vid: ["v0", "v1"]
        }, {
            name: "live_room_preview_card_opt",
            vid: ["v0", "v1"]
        }, {
            name: "webapp_live_explore_card",
            vid: ["v0", "v1"]
        }, {
            name: "video_feed_mode_url_test",
            vid: ["v1", "v2"]
        }, {
            name: "browser_device_id",
            vid: ["v1"]
        }, {
            name: "volume_normalize",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "xgplayer_preload_config",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "hevc_desktop_server",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "hevc_mobile_server",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "video_serverpush",
            vid: ["v1", "v2"]
        }, {
            name: "mobile_vodkit",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "web_player_refactor",
            vid: ["v1", "v2"]
        }, {
            name: "xg_volume_test",
            vid: ["v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "feed_scroll_opt",
            vid: ["v0", "v1"]
        }, {
            name: "multiple_ins_model",
            vid: ["v0", "v2"]
        }, {
            name: "multiple_ins_new",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "video_bitrate_adapt",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "explore_trending_topics",
            vid: ["v0", "v1"]
        }, {
            name: "islands_arch_phase1",
            vid: ["v0", "v1"]
        }, {
            name: "islands_arch_phase2",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "islands_arch_video_detail",
            vid: ["v0", "v1"]
        }, {
            name: "islands_arch_explore",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "bundle_size_reverse",
            vid: ["v0", "v1"]
        }, {
            name: "remove_tooltip",
            vid: ["v0", "v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "optimize_bot_ssr_count",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "sharing_reverse_recommend",
            vid: ["v1", "v2", "v3", "v4", "v5", "v6"]
        }, {
            name: "sharing_use_jump_best_practice",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "sharing_jump_best_practice_ins_afdp",
            vid: ["v0", "v1"]
        }, {
            name: "sharing_android_skeleton_jump_optimization",
            vid: ["v0", "v1"]
        }, {
            name: "sharing_android_auto_awaken_perf",
            vid: ["v0", "v1"]
        }, {
            name: "reflow_video_s2s",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "mobile_s2s",
            vid: ["v1", "v2"]
        }, {
            name: "s2s_afdp",
            vid: ["v0", "v1"]
        }, {
            name: "yml_ui_optimize",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "islands_arch_user_profile",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "islands_arch_rest_page",
            vid: ["v0", "v1"]
        }, {
            name: "feed_scroll_opt_data_collection",
            vid: ["v0", "v2"]
        }, {
            name: "explore_ui_change",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "mobile_search_test",
            vid: ["v1", "v2"]
        }, {
            name: "pumbaa_enable_test",
            vid: ["v1", "v2"]
        }, {
            name: "tt4b_ads",
            vid: ["v1", "v2"]
        }, {
            name: "foryou_prefetch",
            vid: ["v1", "v2"]
        }, {
            name: "studio_web_eh_entrance_v3",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "tteh_effect_anchor_v1",
            vid: ["v1", "v2"]
        }, {
            name: "periodic_login_popup_interval",
            vid: ["v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "enable_slardar_image",
            vid: ["v1", "v2"]
        }, {
            name: "explore_shunt_test",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "new_redirect",
            vid: ["v0", "v1"]
        }, {
            name: "search_video",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "fyp_clips",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "video_reflow_optimization",
            vid: ["v1", "v6"]
        }, {
            name: "video_reflow_andriod_call_phase2_api",
            vid: ["v1", "v2"]
        }, {
            name: "video_reflow_andriod_call_phase2_time",
            vid: ["v1", "v4"]
        }, {
            name: "video_reflow_onelink_preconnect",
            vid: ["v1", "v2"]
        }, {
            name: "video_reflow_android_auto_awaken",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "video_reflow_awaken_fb",
            vid: ["v1", "v2"]
        }, {
            name: "video_reflow_awaken_delay",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "sharing_video_remove_rem",
            vid: ["v1", "v2"]
        }, {
            name: "sharing_hashtag_pns",
            vid: ["v1", "v2"]
        }, {
            name: "video_reflow_csr_render",
            vid: ["v0", "v1"]
        }, {
            name: "video_reflow_csr_skeleton_enhance",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "video_reflow_mpa_optimization",
            vid: ["v0", "v1"]
        }, {
            name: "video_reflow_skeleton_ui",
            vid: ["v0", "v1"]
        }, {
            name: "video_reflow_downgrade",
            vid: ["v1", "v2"]
        }, {
            name: "video_reflow_refactor_server_recommend_list",
            vid: ["v0", "v1"]
        }, {
            name: "video_reflow_coin_install_reverse",
            vid: ["v0", "v1"]
        }, {
            name: "video_reflow_recommend_vertical_list",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "video_reflow_recommend_sort_type",
            vid: ["0", "1", "2"]
        }, {
            name: "video_reflow_preload_install",
            vid: ["v0", "v1"]
        }, {
            name: "video_reflow_onelink_retargeting",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "video_reflow_gp_referer",
            vid: ["v0", "v1"]
        }, {
            name: "video_reflow_facebook_af_dp",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "webapp_vdc_scedule",
            vid: ["v1", "v2"]
        }, {
            name: "search_add_live",
            vid: ["v1", "v2"]
        }, {
            name: "page_loading_tiny_changes",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "device_score_fetch",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "search_transfer_history",
            vid: ["v1", "v2"]
        }, {
            name: "search_transfer_guesssearch",
            vid: ["v1", "v2"]
        }, {
            name: "search_top_author_card",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "search_yml_guess_count",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "sharing_video_use_smart",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "sharing_video_reduce_consumption",
            vid: ["v0", "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"]
        }, {
            name: "sharing_video_coin_ui_perf",
            vid: ["v0", "v1"]
        }, {
            name: "sharing_short_dl",
            vid: ["v0", "v1"]
        }, {
            name: "sharing_redirect_page_strategy",
            vid: ["v0", "v1"]
        }, {
            name: "sharing_video_first",
            vid: ["v0", "v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "sharing_video_first_use_campaign",
            vid: ["v0", "v1"]
        }, {
            name: "sharing_skeleton_lite",
            vid: ["v0", "v1"]
        }, {
            name: "search_bar_style_opt",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "search_remove_related_search",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "search_add_non_personalized_switch",
            vid: ["v1", "v2"]
        }, {
            name: "search_mobile_add_search_recommendations",
            vid: ["v1", "v2"]
        }, {
            name: "feed_data_cache",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "webapp_browser_mode_new_tab",
            vid: ["v1", "v2"]
        }, {
            name: "qr_sso_popup",
            vid: ["v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "desktop_ui_opt",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "non_personalized_feeds_web",
            vid: ["v1", "v2"]
        }, {
            name: "desktop_ui_reply",
            vid: ["v1", "v2", "v3", "v4", "v5", "v6"]
        }, {
            name: "desktop_avatar_nick_name",
            vid: ["v1", "v2"]
        }, {
            name: "search_entry_search_bar",
            vid: ["v1", "v2"]
        }, {
            name: "search_entry_comment_top",
            vid: ["v1", "v2"]
        }, {
            name: "use_inbox_notice_count_api",
            vid: ["v1", "v2"]
        }, {
            name: "autoscroll_reposition",
            vid: ["v0", "v1"]
        }, {
            name: "banner_ad_enable",
            vid: ["v0"]
        }, {
            name: "sidenav_test",
            vid: ["v1", "v2"]
        }, {
            name: "enable_dm_side_nav",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "creator_center_connect",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "creator_center_connect_global",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "webapp_auto_refresh",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "change_list_length_new",
            vid: ["30", "20", "15"]
        }, {
            name: "preload_with_left",
            vid: ["0", "2", "3", "4", "5"]
        }, {
            name: "browser_mode_video_controller",
            vid: ["v1", "v2"]
        }, {
            name: "one_column_player_size",
            vid: ["v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "sign_up_webapp_region_change",
            vid: ["v1", "v2"]
        }, {
            name: "video_detail_search_bar",
            vid: ["v1", "v2"]
        }, {
            name: "search_entry_comment_word",
            vid: ["v1", "v2"]
        }, {
            name: "confirm_logout",
            vid: ["v1", "v2"]
        }, {
            name: "creator_center_reverse",
            vid: ["v1", "v2"]
        }, {
            name: "desktop_app_test",
            vid: ["v1", "v2"]
        }, {
            name: "browser_login_redirect",
            vid: ["v1", "v2"]
        }, {
            name: "webapp_switch_account",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "search_report",
            vid: ["v1", "v2"]
        }, {
            name: "search_keep_sug_show",
            vid: ["v1", "v2"]
        }, {
            name: "webapp_login_email_phone",
            vid: ["v1", "v2"]
        }, {
            name: "use_follow_v2",
            vid: ["v1", "v2"]
        }, {
            name: "search_server",
            vid: {}
        }, {
            name: "add_kap_entry",
            vid: ["v1", "v2"]
        }, {
            name: "enable_ml_model",
            vid: ["v1", "v2", "v3", "v4", "v5", "v6"]
        }, {
            name: "enable_ml_model_suggest_content",
            vid: ["v0", "v1"]
        }, {
            name: "mobile_csr_test",
            vid: ["v1", "v2"]
        }, {
            name: "webapp_login_prediction",
            vid: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"]
        }, {
            name: "login_modal_ui_revamp",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "browser_mode_encourage_login",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "project_ace_control",
            vid: ["v0", "v1"]
        }, {
            name: "soft_bank_test",
            vid: ["v1", "v2"]
        }, {
            name: "enable_ads",
            vid: ["v1", "v2"]
        }, {
            name: "enable_about_this_ad",
            vid: ["v1", "v2"]
        }, {
            name: "digital_wellbeing_web",
            vid: ["v0", "v1"]
        }, {
            name: "scheduled_breaks_teens",
            vid: ["v0", "v1"]
        }, {
            name: "fix_tea_session",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "enable_profile_pinned_video",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "enable_fb_sdk",
            vid: ["v1", "v2"]
        }, {
            name: "live_preview_web",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "live_preview_web_son",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "live_login_reflow_btn",
            vid: ["v1", "v2"]
        }, {
            name: "comment_self_send_optimize",
            vid: ["v0", "v1"]
        }, {
            name: "mobile_consumption_limit_logged_in",
            vid: ["v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "mobile_consumption_limit_non_logged_in",
            vid: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"]
        }, {
            name: "add_profile_left_bar",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "explore_all_tab",
            vid: ["v0", "v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "report_item_tag",
            vid: ["v1", "v2"]
        }, {
            name: "login_option_order_by_metrics",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "friends_tab",
            vid: ["v0", "v1"]
        }, {
            name: "remove_bottom_banner",
            vid: ["v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "webapp_login_prediction_full",
            vid: ["v1", "v2"]
        }, {
            name: "webapp_login_prediction_reverse",
            vid: ["v1", "v2"]
        }, {
            name: "video_detail_reflow_card",
            vid: ["v0", "v1"]
        }, {
            name: "show_aigc_label_web",
            vid: ["v0", "v1"]
        }, {
            name: "webapp_feature_expansion",
            vid: ["v0", "v1"]
        }, {
            name: "webapp_login_causal_inference",
            vid: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10", "v11", "v12", "v13", "v14", "v15", "v16", "v17", "v18", "v19", "v20", "v21", "v22", "v23", "v24", "v25", "v26", "v27", "v28", "v29", "v30"]
        }, {
            name: "non_logged_in_comments",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "s2s",
            vid: ["v0", "v1"]
        }, {
            name: "kap_prefetch",
            vid: ["v1", "v2"]
        }, {
            name: "kap_jumper_opt",
            vid: ["v1", "v2"]
        }, {
            name: "auto_scroll",
            vid: ["v1", "v3"]
        }, {
            name: "tiktok",
            vid: []
        }, {
            name: "mobile_consumption_limit_login",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "preview_cover",
            vid: ["v0", "v1"]
        }, {
            name: "search_preview_ui_change",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "seo_preview_ui_change",
            vid: ["v0", "v1"]
        }, {
            name: "use_profile_avatar",
            vid: ["v1", "v2"]
        }, {
            name: "perf_blur_background",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "webapp_login_causal_inference_validation",
            vid: ["v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "webapp_login_causal_inference_data_collection",
            vid: ["v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "webapp_causal_inference_dark_mode_data_collection",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "webapp_causal_inference_auto_mute_data_collection",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "webapp_causal_inference_auto_scroll_data_collection",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "webapp_causal_inference_auto_scroll_validation",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "webapp_causal_inference_landing_page",
            vid: ["v0", "v1"]
        }, {
            name: "webapp_causal_inference_dark_mode_validation",
            vid: ["v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "webapp_causal_inference_periodic_popup_validation",
            vid: ["v1", "v2", "v3", "v4", "v5", "v6", "v7"]
        }, {
            name: "webapp_causal_inference_auto_mute_validation",
            vid: ["v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "last_login_method",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "webapp_moderation",
            vid: ["v0", "v1"]
        }, {
            name: "mobile_swiping_gesture",
            vid: ["v0", "v1"]
        }, {
            name: "should_recom_reduce_icon_risk",
            vid: ["v0", "v1"]
        }, {
            name: "browser_content_logic",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "mobile_predictive_data",
            vid: ["v0", "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10", "v11", "v12", "v13", "v14", "v15", "v16", "v17", "v18", "v19", "v20", "v21", "v22", "v23", "v24", "v25", "v26", "v27", "v28", "v29"]
        }, {
            name: "mobile_fps_logger",
            vid: ["v0", "v1"]
        }, {
            name: "delay_guest",
            vid: ["0", "1", "2", "3", "5", "8", "10"]
        }, {
            name: "delay_guest_fyp",
            vid: ["0", "1", "2", "3", "5", "8", "10"]
        }, {
            name: "delay_guest_others_homepage",
            vid: ["0", "1", "2", "3", "5", "8", "10"]
        }, {
            name: "delay_guest_videos",
            vid: ["0", "1", "2", "3", "5", "8", "10"]
        }, {
            name: "delay_guest_discover",
            vid: ["0", "1", "2", "3", "5", "8", "10"]
        }, {
            name: "delay_guest_explore",
            vid: ["0", "1", "2", "3", "5", "8", "10"]
        }, {
            name: "delay_guest_other",
            vid: ["0", "1", "2", "3", "5", "8", "10"]
        }, {
            name: "webapp_auto_dark_mode",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "webapp_dynamic_bottom_right",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "browser_fingerprint_basic",
            vid: ["v0", "v1"]
        }, {
            name: "browser_fingerprint_verify",
            vid: ["v0", "v1"]
        }, {
            name: "top_right_button",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "top_right_button_group",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "keyboard_shortcut",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "webapp_odin_id_fe_reverse",
            vid: ["v0", "v1"]
        }, {
            name: "pc_non_personalized_suggested_account",
            vid: ["v0", "v1"]
        }, {
            name: "pc_non_personalized_explore",
            vid: ["v0", "v1"]
        }, {
            name: "mobile_non_personalized_suggest_account",
            vid: ["v0", "v1"]
        }, {
            name: "video_detail_page_video_play",
            vid: ["v1", "v2"]
        }, {
            name: "mobile_replace_signup_with_login",
            vid: ["v0", "v1"]
        }, {
            name: "use_aligned_copies",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "pns_communication_service_sdk",
            vid: ["v0", "v1"]
        }, {
            name: "desktop_web_survey_new",
            vid: ["v0", "v1"]
        }, {
            name: "desktop_web_survey_old",
            vid: ["v0", "v1"]
        }, {
            name: "promote_qr_code",
            vid: ["v0", "v1"]
        }, {
            name: "mobile_remove_music_info",
            vid: ["v0", "v1"]
        }, {
            name: "mobile_enable_xg",
            vid: ["v0", "v1"]
        }, {
            name: "enable_mini_player",
            vid: ["v0", "v1", "v2", "v3", "v4", "v5", "v6"]
        }, {
            name: "enable_mini_player_new_design",
            vid: ["v0", "v1"]
        }, {
            name: "enable_mini_player_switch_tab_popup",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "enable_upload_refactor",
            vid: ["v0", "v1"]
        }, {
            name: "enable_language_expansion",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "enable_message_refactor",
            vid: ["v0", "v1"]
        }, {
            name: "guest_mode_redesign",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "sharing_aso",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "webapp_repost_label",
            vid: ["v0", "v1"]
        }, {
            name: "webapp_repost_tab",
            vid: ["v0", "v1"]
        }, {
            name: "webapp_repost_action",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "webapp_repost_notice",
            vid: ["v0", "v1"]
        }, {
            name: "webapp_creator_post_sort",
            vid: ["v0", "v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "webapp_creator_just_watched",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "guide_user_to_next_video",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "creator_to_fyp",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "video_detail_end_card",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "detail_to_explore",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "three_column_gif",
            vid: ["v0", "v1"]
        }, {
            name: "creator_header_height",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "encourage_share_repost",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "webapp_jotai_detail",
            vid: ["v0", "v1"]
        }, {
            name: "video_detail_yml_ui",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "webapp_mobile_web2app_cta_guide",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "video_detail_auto_pip_opt",
            vid: ["v0", "v1", "v2", "v3", "v4", "v5", "v6"]
        }, {
            name: "fyp_redesign",
            vid: ["v0", "v1"]
        }, {
            name: "video_detail_yml_creator",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "video_detail_author_card",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "video_detail_nav_opt",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "video_detail_nav_shortcut",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "playback_refactor_desktop",
            vid: ["v0", "v1"]
        }, {
            name: "playback_refactor_mobile",
            vid: ["v0", "v1"]
        }, {
            name: "tt_player_hevc_ignore_env",
            vid: ["v0", "v1"]
        }, {
            name: "tt_player_hevc_local",
            vid: ["v0", "v1"]
        }, {
            name: "tt_player_reuse",
            vid: ["v0", "v1"]
        }, {
            name: "video_details_player_redesign_engagement",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "video_details_player_redesign_player",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "web_on_device_ml",
            vid: ["v1", "v2", "v3", "v4"]
        }, {
            name: "use_navigation_refactor",
            vid: ["v0", "v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "use_left_navigation_refactor",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "video_detail_responsive_ui",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "webapp_explore_nav_order",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "webapp_explore_video_info",
            vid: ["v0", "v1", "v2", "v3", "v4", "v5", "v6"]
        }, {
            name: "explore_category_ranking",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "webapp_collection_profile",
            vid: ["v0", "v1"]
        }, {
            name: "webapp_collection_adder",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "webapp_inapp_notice",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "webapp_node_opt",
            vid: ["v0", "v1"]
        }, {
            name: "fyf_profile_uj",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "side_nav_preload_cache",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "immersive_player",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "new_guest_mode_hot",
            vid: ["v0", "v1"]
        }, {
            name: "new_guest_mode_other",
            vid: ["v0", "v1"]
        }, {
            name: "kep_skeleton_cta",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "kep_streaming",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "user_ssg",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "kep_cta_style",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "fyp_comments_panel",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "web_dm_test_force_http",
            vid: ["v1", "v2"]
        }, {
            name: "reduce_user_item_list",
            vid: ["v0", "v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "web_dm_enable_debug",
            vid: ["v1", "v2"]
        }, {
            name: "web_dm_multimedia_msg",
            vid: ["v1", "v2"]
        }, {
            name: "web_dm_sticker_msg_display",
            vid: ["v1", "v2"]
        }, {
            name: "web_dm_combo",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "web_dm_group_chat",
            vid: ["v1", "v2"]
        }, {
            name: "web_dm_decrease_lcp",
            vid: ["v1", "v2"]
        }, {
            name: "web_dm_share_panel_fix",
            vid: ["v1", "v2"]
        }, {
            name: "web_dm_icon_click_check",
            vid: ["v1", "v2"]
        }, {
            name: "web_dm_quote_message",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "web_dm_message_reaction",
            vid: ["v1", "v2"]
        }, {
            name: "web_dm_list_load_optimize",
            vid: ["v1", "v2"]
        }, {
            name: "webapp_query_comments_popover",
            vid: ["v0", "v1"]
        }, {
            name: "user_cta_optimization_user_phase2",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "kep_coin_app",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "fyp_hide_music_info",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "detail_page_comments_redesign",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "enable_autoscroll_moremenu",
            vid: ["v0", "v1"]
        }, {
            name: "enable_video_detail_moremenu_refactor",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "kep_reverse_cta_fix",
            vid: ["v0", "v1"]
        }, {
            name: "detail_page_comments_right_side",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "fyp_on_detail",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "webapp_fyp_cache",
            vid: ["v0", "v1"]
        }, {
            name: "aggregation_page_cta_enhancement",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "user_page_redesign",
            vid: ["v0", "v1"]
        }, {
            name: "kep_pop_up_auto_dismiss",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "kep_returning_popup",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "revamp_share_menu",
            vid: ["v0", "v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "remove_disclaimer",
            vid: ["v0", "v1"]
        }, {
            name: "player_error_optimize",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "video_closed_caption",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "video_resolution",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "video_resolution_auto",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "for_you_page_cta_enhancement",
            vid: ["v0", "v1", "v2", "v3", "v4", "v5"]
        }, {
            name: "nav_phase_3",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "live_manager_entrance",
            vid: ["v0", "v1"]
        }, {
            name: "image_fetch_priority",
            vid: ["v0", "v1"]
        }, {
            name: "km_webapp_stm",
            vid: ["v0", "v1"]
        }, {
            name: "km_default_limit",
            vid: ["v0", "v1"]
        }, {
            name: "kep_video_skeleton_cta",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "feed_change_optimize_image",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "feed_change_optimize_ff",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "solaria_portrait_service",
            vid: ["v0", "v1"]
        }, {
            name: "enable_post_translation",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "global_web_footer",
            vid: ["v0", "v1"]
        }, {
            name: "user_bundle_opt",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "kep_click_opt_phase1",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "kep_click_opt_phase2",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "mobile_android_jump_optimization",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "seo_jump_optimization",
            vid: ["v0", "v1"]
        }, {
            name: "guest_mode_interest",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "redesign_login_popup",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "react_upgrade_experiment",
            vid: ["v0", "v1"]
        }, {
            name: "desktop_faas_render",
            vid: ["v1", "v2"]
        }, {
            name: "ui_layout_alignment",
            vid: ["v1", "v2", "v3"]
        }, {
            name: "seo_smart_awaken",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "live_public_screen_skeleton",
            vid: ["v0", "v1"]
        }, {
            name: "long_video_popup_display_optimization",
            vid: ["false", "true"]
        }, {
            name: "video_reflow_poi_anchor",
            vid: ["v0", "v1"]
        }, {
            name: "search_add_related_search",
            vid: ["v1", "v2"]
        }, {
            name: "should_highlight_hashtag",
            vid: ["v1", "v2"]
        }, {
            name: "download_page_apk",
            vid: ["v1", "v2"]
        }, {
            name: "hashtag_to_top_search",
            vid: ["v1", "v2"]
        }, {
            name: "it_or_us",
            vid: ["v1", "v2"]
        }, {
            name: "seo_non_us_lite_copy",
            vid: ["v0", "v1"]
        }, {
            name: "fyp_up_down",
            vid: ["v0", "v1"]
        }, {
            name: "video_auto_play_optimize",
            vid: ["v0", "v1"]
        }, {
            name: "mobile_fyp_pwa",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "grid_to_fyp",
            vid: ["v0", "v1", "v2", "v3", "v4"]
        }, {
            name: "app_style_share",
            vid: ["v0", "v1"]
        }, {
            name: "all_one_tap_login",
            vid: ["v0", "v1"]
        }, {
            name: "media_card_redesign",
            vid: ["v0", "v1"]
        }, {
            name: "kep_exp_migration",
            vid: ["v0", "v1", "v2"]
        }, {
            name: "organic_video_streaming",
            vid: ["v0", "v1", "v2", "v3"]
        }, {
            name: "enable_setting_side_nav",
            vid: ["v0", "v1"]
        }, {
            name: "community_notes_starling",
            vid: ["v0", "v1"]
        }, {
            name: "tt_player_openmse",
            vid: ["v0", "v1"]
        }]
    }
    ,
    141906: (e, t, n) => {
        n.d(t, {
            D1: () => l,
            ET: () => o,
            FR: () => i,
            _G: () => a,
            gd: () => s,
            wS: () => r
        });
        const i = "webapp.a-b"
          , o = "b_c"
          , s = "-1"
          , a = "0"
          , r = "1"
          , l = {
            Browser_Impersonator: "2",
            HTTP_Libraries: "3",
            Session_Validation_Failed: "4",
            Scraper_Reputation: "5",
            Web_Search_Engine_Bots: "6",
            Declared_Bots: "7",
            Impersonators_of_Known_Bots: "8",
            "Headless_Browsers/Automation_Tools": "9",
            Site_Monitoring_and_Web_Development_Bots: "10",
            "Open_Source_Crawlers/Scraping_Platforms": "11",
            SEO__Analytics_or_Marketing_Bots: "12",
            Social_Media_or_Blog_Bots: "13",
            RSS_Feed_Reader_Bots: "14",
            Web_Archiver_Bots: "15",
            Media_or_Entertainment_Search_Bots: "16",
            News_Aggregator_Bots: "17",
            Development_Frameworks: "18",
            Cookie_Integrity_Failed: "19",
            Online_Advertising_Bots: "20",
            Academic_or_Research_Bots: "21",
            Business_Intelligence_Bots: "22",
            Enterprise_Data_Aggregator_Bots: "23",
            Aggressive_Web_Crawlers: "24",
            Web_Services_Libraries: "25",
            "E-Commerce_Search_Engine_Bots": "26",
            Financial_Account_Aggregator_Bots: "27",
            Job_Search_Engine_Bots: "28"
        }
    }
    ,
    748215: (e, t, n) => {
        n.d(t, {
            k: () => i
        });
        const i = "473824"
    }
    ,
    129343: (e, t, n) => {
        n.d(t, {
            $C: () => s,
            $m: () => i,
            _v: () => o,
            s0: () => a
        });
        const i = ["AT", "BE", "BG", "HR", "CY", "CZ", "DE", "DK", "EE", "EL", "FI", "FR", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "NO", "IS", "LI"]
          , o = i.concat(["GB", "CH"]);
        var s, a;
        !function(e) {
            e.DEFAULT = "DEFAULT",
            e.SG = "ALL_SG",
            e.VA = "MALI_VA",
            e.TTP = "TTP",
            e.BOE = "BOE"
        }(s || (s = {})),
        function(e) {
            e.DEFAULT = "DEFAULT",
            e.BOE = "BOE",
            e.US_BOE = "US_BOE",
            e.SG = "ALL_SG",
            e.VA = "MALI_VA",
            e.TTP = "TTP",
            e.EU_TTP = "EU_TTP",
            e.US_TTP = "US_TTP",
            e.US_TTP2 = "US_TTP2"
        }(a || (a = {}))
    }
    ,
    501853: (e, t, n) => {
        n.d(t, {
            n: () => i
        });
        const i = /(facebookexternalhit|whatsapp|twitterbot|developers\.snap\.com\/robots|Linespider|LinkedInBot|Discordbot|TelegramBot|LarkBot|vk\.com\/dev\/Share)|redditbot/i
    }
    ,
    965662: (e, t, n) => {
        n.d(t, {
            CM: () => p,
            ED: () => r,
            G: () => u,
            Kf: () => s,
            O_: () => o,
            RC: () => c,
            UH: () => l,
            Uw: () => i,
            gx: () => d,
            q7: () => a,
            tt: () => v
        });
        const i = {
            MO: 8,
            HK: 8,
            TW: 8,
            JP: 9,
            KR: 9,
            ID: 7,
            MY: 8,
            KH: 7,
            MM: 6.5,
            LA: 7,
            PH: 8,
            TH: 7,
            VN: 7,
            SG: 8
        }
          , o = ["MO", "TW", "JP", "KR", "ID", "MY", "KH", "MM", "LA", "PH", "TH", "VN", "SG", "PK", "LK", "NP"]
          , s = ["PK", "LK", "NP"]
          , a = ["AT", "BE", "BG", "HR", "CY", "CZ", "DE", "DK", "EE", "EL", "FI", "FR", "GB", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "NO", "IS", "LI"]
          , r = ["US", "RU", "DE", "GB", "ES", "IT", "CA", "BR", "PL", "IN", "JP", "KR", "AU", "FR", "SA", "AE", "ZA", "NG", "ID", "MX"]
          , l = ["AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "KE", "KM", "LR", "LS", "MG", "ML", "MU", "MW", "MZ", "NA", "NE", "NG", "RW", "SC", "SD", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TG", "TZ", "UG", "ZM", "ZW"]
          , d = [...l, "ZA"]
          , c = ["SA", "KW", "MA", "IQ", "TH", "PH", "KH", "ZA", "AR", "VN", "MX", "TR", "AE", "MY", "PK", "IL", "PE", "EG", "CL", "CO", "ID", "QA", "BR", "BY", "LB", "OM", "UY", "JO", "BD", "BH", "CR", "DO", "EC", "GT", "KZ", "PA", "AL", "DZ", "AO", "AG", "AM", "AW", "AZ", "BS", "BZ", "BJ", "BM", "BO", "BA", "BW", "VG", "BF", "CM", "CV", "KY", "TD", "KM", "CD", "CI", "DJ", "DM", "SV", "ER", "FJ", "GA", "GM", "GE", "GH", "GD", "GN", "GW", "HT", "HN", "JM", "KE", "KG", "LA", "LR", "LY", "MO", "MV", "ML", "MU", "FM", "MD", "MZ", "NA", "NP", "NI", "NE", "NG", "MK", "PG", "PY", "RW", "WS", "SN", "RS", "SC", "SL", "SB", "SO", "LK", "KN", "LC", "SD", "SR", "TJ", "TZ", "TG", "TO", "TT", "TN", "TM", "TC", "UG", "UZ", "VU", "VE", "YE", "ZM", "ZW", "CG", "ET", "RU", "TW", "UA"]
          , v = ["JP", "KR"]
          , u = ["ES", "DE", "PT"]
          , p = ["JP", "KR"]
    }
    ,
    105726: (e, t, n) => {
        n.d(t, {
            AY: () => r,
            Lq: () => i,
            NQ: () => l,
            Nl: () => d,
            Nm: () => _,
            TZ: () => p,
            Uy: () => s,
            WU: () => m,
            YZ: () => u,
            d4: () => c,
            ff: () => a,
            uj: () => v,
            wX: () => g,
            yl: () => o
        });
        const i = "5dc26cf008d511e9b571e1bc0c9e23b5"
          , o = "FE_i18n"
          , s = "3f4a780066b911eba8eda5a15496ac5a"
          , a = "TikTok_LIVE_FE"
          , r = "c5156440043611eab3e269e42dc9b378"
          , l = "Passport"
          , d = {
            az: {
                displayName: "Azərbaycan",
                alias: []
            },
            "id-ID": {
                displayName: "Bahasa Indonesia",
                alias: ["id", "id-id", "in-id", "in"]
            },
            "ms-MY": {
                displayName: "Bahasa Melayu",
                alias: ["ms", "ms-bn", "ms-my"]
            },
            "jv-ID": {
                displayName: "Basa Jawa",
                alias: ["jv", "jv-jv"]
            },
            ca: {
                displayName: "Català",
                alias: []
            },
            "ceb-PH": {
                displayName: "Cebuano",
                alias: ["ceb", "ceb-ph"]
            },
            "cs-CZ": {
                displayName: "Čeština",
                alias: ["cs", "cs-cz"]
            },
            da: {
                displayName: "Dansk",
                alias: []
            },
            "de-DE": {
                displayName: "Deutsch",
                alias: ["de", "de-at", "de-ch", "de-de", "de-li", "de-lu"]
            },
            et: {
                displayName: "Eesti",
                alias: []
            },
            "en-GB": {
                displayName: "English (UK)",
                alias: ["en-pk", "en-bd", "en-bt", "en-bn", "en-kh", "en-la", "en-mm", "en-np", "en-lk", "af", "en-au", "en-nz", "en-sg", "en-ag", "en-ai", "en-bb", "en-bm", "en-bs", "en-bw", "en-bz", "en-dm", "en-fj", "en-gd", "en-gh", "en-gm", "en-gy", "en-in", "en-ie", "en-jm", "en-rw", "en-kn", "en-ky", "en-lc", "si-lk", "en-ms", "en-my", "en-mt", "en-mu", "en-mw", "en-na", "en-ng", "ne-np", "en-nr", "en-pg", "en-sb", "en-za", "en-sc", "en-sl", "en-tc", "en-to", "en-tt", "en-vc", "en-vg", "en-vu", "en-zm", "en-zw", "en-sz", "en-hk", "en-mo"]
            },
            en: {
                displayName: "English (US)",
                alias: []
            },
            es: {
                displayName: "Español",
                alias: ["es-es", "es-gq", "es-ad"]
            },
            "es-419": {
                displayName: "Español (Latinoamérica)",
                alias: ["es"]
            },
            "fil-PH": {
                displayName: "Filipino",
                alias: ["fil", "tl-ph", "tl", "fil-ph"]
            },
            fr: {
                displayName: "Français",
                alias: ["fr-be", "fr-ch", "fr-fr", "fr-lu", "fr-mc"]
            },
            "fr-CA": {
                displayName: "Français (Canada)",
                alias: ["fr-ca"]
            },
            ga: {
                displayName: "Gaeilge",
                alias: []
            },
            hr: {
                displayName: "Hrvatski",
                alias: []
            },
            is: {
                displayName: "Íslenska",
                alias: []
            },
            "it-IT": {
                displayName: "Italiano",
                alias: ["it", "it-ch", "it-it"]
            },
            sw: {
                displayName: "Kiswahili",
                alias: []
            },
            lv: {
                displayName: "Latviešu",
                alias: []
            },
            lt: {
                displayName: "Lietuvių",
                alias: []
            },
            "hu-HU": {
                displayName: "Magyar",
                alias: ["hu", "hu-hu"]
            },
            "nl-NL": {
                displayName: "Nederlands",
                alias: ["nl", "nl-be", "nl-nl"]
            },
            nb: {
                displayName: "norsk (bokmål)",
                alias: []
            },
            uz: {
                displayName: "Oʻzbek",
                alias: []
            },
            "pl-PL": {
                displayName: "Polski",
                alias: ["pl", "pl-pl"]
            },
            pt: {
                displayName: "Português",
                alias: ["pu"]
            },
            "pt-BR": {
                displayName: "Português (Brasil)",
                alias: ["pt_BR", "pt-br"]
            },
            "ro-RO": {
                displayName: "Română",
                alias: ["ro", "ro-ro"]
            },
            sq: {
                displayName: "Shqip",
                alias: []
            },
            sk: {
                displayName: "Slovenčina",
                alias: []
            },
            sl: {
                displayName: "Slovenščina",
                alias: []
            },
            "fi-FI": {
                displayName: "Suomi",
                alias: ["fi", "fi-fi"]
            },
            "sv-SE": {
                displayName: "Svenska",
                alias: ["sv", "sv-se"]
            },
            "vi-VN": {
                displayName: "Tiếng Việt",
                alias: ["vi", "vi-vn"]
            },
            "tr-TR": {
                displayName: "Türkçe",
                alias: ["tr", "tr-tr"]
            },
            "el-GR": {
                displayName: "Ελληνικά",
                alias: ["el", "el-gr"]
            },
            bg: {
                displayName: "Български",
                alias: []
            },
            kk: {
                displayName: "Қазақша",
                alias: []
            },
            "ru-RU": {
                displayName: "Русский",
                alias: ["ru", "ru-ru"]
            },
            "uk-UA": {
                displayName: "Українська",
                alias: ["uk", "uk-ua"]
            },
            "he-IL": {
                displayName: "עברית",
                alias: ["he", "he-il", "iw"]
            },
            ur: {
                displayName: "اردو",
                alias: []
            },
            ar: {
                displayName: "العربية",
                alias: ["ar-ae", "ar-bh", "ar-dz", "ar-eg", "ar-iq", "ar-jo", "ar-kw", "ar-lb", "ar-ly", "ar-ma", "ar-om", "ar-qa", "ar-sa", "ar-sy", "ar-tn", "ar-ye"]
            },
            "hi-IN": {
                displayName: "हिंदी",
                alias: ["hi", "hi-in"]
            },
            "bn-IN": {
                displayName: "বাংলা",
                alias: ["bn", "bn-in"]
            },
            "th-TH": {
                displayName: "ภาษาไทย",
                alias: ["th", "th-th"]
            },
            "my-MM": {
                displayName: "မြန်မာ",
                alias: ["my", "my", "my-mm"]
            },
            "km-KH": {
                displayName: "ខ្មែរ",
                alias: ["km", "km-kh"]
            },
            "ja-JP": {
                displayName: "日本語",
                alias: ["ja", "ja-jpan", "ja-jp"]
            },
            "zh-Hant-TW": {
                displayName: "中文 (繁體)",
                alias: ["zh", "zh_Hant", "zh_TW", "zh-tw", "zh-hk", "zh-Hant", "zh-hant-tw"]
            },
            "zh-Hans": {
                displayName: "中文 (简体)",
                alias: ["zh-hans", "zh_hans", "zh_Hans", "zh-cn", "zh-sg"]
            },
            "ko-KR": {
                displayName: "한국어",
                alias: ["ko", "ko-kr", "ko-kore"]
            }
        }
          , c = ["az", "ca", "da", "et", "en-GB", "es-419", "fr-CA", "ga", "hr", "is", "sw", "lv", "lt", "nb", "uz", "pt", "sq", "sk", "sl", "bg", "kk"]
          , v = ["en", "id", "ms", "jv", "ceb", "cs", "de", "es", "fil", "fr", "it", "hu", "nl", "pl", "pt", "ro", "sv", "vi", "tr", "el", "ru", "uk", "mr", "hi", "bn", "pa", "gu", "or", "ta", "te", "kn", "ml", "th", "my", "ko", "ja", "zh", "ar"]
          , u = Object.entries(d).map(( ([e,{alias: t}]) => [e, ...t]))
          , p = new Map(u.reduce(( (e, t) => {
            const n = t[0];
            return t.forEach((t => {
                e.push([t.toLocaleLowerCase(), n])
            }
            )),
            e
        }
        ), []))
          , g = Object.entries(d).map(( ([e,{displayName: t}]) => ({
            label: t,
            value: e
        })))
          , _ = "en"
          , m = "tiktok_webapp_lang"
    }
    ,
    757314: (e, t, n) => {
        n.d(t, {
            i: () => i
        });
        const i = "tea_sid"
    }
    ,
    760893: (e, t, n) => {
        n.d(t, {
            C: () => i,
            U: () => o
        });
        const i = "https://www.tiktok.com"
          , o = "https://sf-static.tiktokcdn.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png"
    }
    ,
    857725: (e, t, n) => {
        n.d(t, {
            o: () => i
        });
        const i = "webapp.browserRedirect-context"
    }
    ,
    831054: (e, t, n) => {
        n.d(t, {
            BR: () => a,
            Ow: () => s,
            QG: () => r
        });
        var i = n(327334)
          , o = n(309678);
        const s = "webapp.app-context"
          , a = (0,
        o.$)("AppContext@tiktok/isomorphic")(null)
          , r = ({value: e, children: t}) => (0,
        i.jsx)(a.Provider, {
            value: e,
            children: t
        })
    }
    ,
    860564: (e, t, n) => {
        n.d(t, {
            K: () => i
        });
        const i = "webapp.biz-context"
    }
    ,
    135999: (e, t, n) => {
        n.d(t, {
            CY: () => v,
            Ss: () => l,
            hp: () => d,
            rv: () => c
        });
        var i = n(327334)
          , o = n(61284)
          , s = n(82446)
          , a = n.n(s)
          , r = n(783415);
        const l = (0,
        n(309678).$)("I18nContextV2@tiktok/isomorphic")({
            t: (e, t, n) => n && "string" == typeof n ? n : e,
            hasLoaded: a(),
            loadStarling: a(),
            initialNamespaces: [],
            lang: ""
        })
          , d = (0,
        r.U)("I18nInjectionToken@tiktok/isomorphic", ( () => new o.n("i18n")))
          , c = "webapp.i18n-translation"
          , v = function({children: e, value: t}) {
            return (0,
            i.jsx)(l.Provider, {
                value: t,
                children: e
            })
        }
    }
    ,
    358677: (e, t, n) => {
        n.d(t, {
            Qs: () => c,
            Z0: () => p,
            i_: () => i,
            kC: () => g,
            qm: () => _,
            uk: () => d,
            x_: () => u
        });
        var i, o = n(669872), s = n(876434), a = n(105726), r = n(501853);
        !function(e) {
            e.WebApp = "Webapp",
            e.Analytics = "MT_Analytics",
            e.Reflow = "MT_Reflow",
            e.Login = "WebApp_Login",
            e.POI = "poi_web",
            e.RechargeReferral = "Webapp_recharge_referral",
            e.KickUserFrontier = "kick_user_frontier"
        }(i || (i = {}));
        const l = ["^/@.*/now", "^/@.*/playlist/.*", "^/sticker/", "^/@.*/post/.*", "^/@.*/invite", "^/now", "^/messages/chat"]
          , d = (e="") => "zh-Hans" === e ? e : e.split("-")[0].replace("zh", "zh-Hant") || e || a.Nm;
        function c({isMobile: e, pathname: t, search: n, isSearchbot: i, isNow: s}) {
            const a = (0,
            o.parse)(n);
            return e && /^\/@.*\/video\/.+/.test(t) ? ["MT_Reflow", "Webapp"] : l.some((e => new RegExp(e).test(t))) || s || e && /^\/@.*\/collection\/.+/.test(t) ? ["MT_Reflow"] : e && "1" === a._r ? ["MT_Reflow", "Webapp"] : t.startsWith("/login") || t.startsWith("/signup") || t.startsWith("/logout") ? ["WebApp_Login"] : t.startsWith("/search/campaign/") || t.startsWith("/question/") || t.startsWith("/messages/group") || e && i ? ["MT_Reflow", "Webapp"] : ["Webapp"]
        }
        function v(e) {
            let t;
            return t = Array.isArray(e) ? e[e.length - 1] : null != e ? e : "",
            t
        }
        function u(e) {
            const t = v(e).toLocaleLowerCase();
            return !!t && a.TZ.has(t)
        }
        function p(e) {
            var t, n;
            const i = v(e).toLocaleLowerCase();
            if (u(i))
                return null !== (t = a.TZ.get(i)) && void 0 !== t ? t : a.Nm;
            const o = d(i).toLowerCase();
            return null !== (n = a.TZ.get(o)) && void 0 !== n ? n : a.Nm
        }
        function g(e) {
            if (u(e))
                return p(e)
        }
        function _(e) {
            var t, n;
            const {pathname: i, query: o} = (0,
            s.xw)()
              , {userAgent: l, acceptLanguage: d} = (0,
            s.T6)();
            let c = (null != e ? e : i).split("/")[1];
            if (function(e) {
                return Boolean(e.startsWith("/download"))
            }(null != e ? e : i) && (c = (null != e ? e : i).split("/")[2]),
            c && u(c))
                return p(c);
            const {lang: v, langCountry: g, language: _, sharer_language: m} = o
              , h = [g, v, _];
            r.n.test(l) && h.push(m);
            for (const e of h)
                if (e && u(e))
                    return p(e);
            const y = (0,
            s.MJ)(a.WU);
            if (y && u(y))
                return p(y);
            const b = null === (t = l.match(/ByteFullLocale\/([\w\-_]+)/)) || void 0 === t ? void 0 : t[1];
            if (b && u(b))
                return p(b);
            const f = null === (n = l.match(/ByteLocale\/([\w\-_]+)/)) || void 0 === n ? void 0 : n[1];
            if (f && u(f))
                return p(f);
            for (const e of d)
                if (e && u(e))
                    return p(e);
            return m && u(m) ? p(m) : /yandex\.com\/bots/i.test(l) ? p("ru-RU") : a.Nm
        }
    }
    ,
    490163: (e, t, n) => {
        n.d(t, {
            KJ: () => u,
            Ny: () => p,
            R0: () => c,
            TB: () => g,
            qu: () => v
        });
        const i = /\(i[^;]+;( U;)? CPU.+Mac OS X/
          , o = /Android|android|Adr/
          , s = /X11/
          , a = /\(Macintosh; Intel /
          , r = /(Mac|iPhone|iPod|iPad)/i
          , l = /Win\d{2}|Windows/
          , d = 1e3;
        function c(e) {
            return e.length > d ? "unknown" : o.test(e) ? "android" : s.test(e) ? "linux" : i.test(e) ? "ios" : a.test(e) ? "mac" : l.test(e) ? "windows" : "unknown"
        }
        function v(e) {
            return !(e.length > d) && i.test(e)
        }
        function u(e) {
            return o.test(e)
        }
        function p(e) {
            return v(e) || u(e)
        }
        function g(e) {
            return r.test(e)
        }
    }
    ,
    476324: (e, t, n) => {
        function i(e) {
            return !!e && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e)
        }
        function o(e, t) {
            return parseInt(e, 10) <= parseInt(t, 10)
        }
        n.d(t, {
            a: () => i,
            i: () => o
        })
    }
    ,
    939232: (e, t, n) => {
        n.d(t, {
            D: () => a,
            x: () => s
        });
        const i = (0,
        n(783415).U)("GLOBAL_STORE@tiktok/isomorphic", ( () => new Map))
          , o = "WEBAPP_APP_CONTEXT"
          , s = () => {
            const e = i.get(o);
            return e || console.error("Consume appContext before init"),
            e
        }
          , a = e => {
            i.get(o) && console.warn("AppContext will be overwritten"),
            i.set(o, e)
        }
    }
    ,
    848420: (e, t, n) => {
        n.d(t, {
            V: () => s
        });
        const i = {
            kind: "m",
            captcha: "",
            imApi: "https://im-api-va.tiktok.com",
            imFrontier: "wss://im-ws-va.tiktok.com/ws/v2",
            mTApi: "https://m.tiktok.com",
            rootApi: "https://www.tiktok.com",
            secSDK: "",
            slardar: "mon.tiktokv.com",
            starling: "https://starling-va.tiktokv.com",
            tea: "https://mcs-va.tiktokv.com",
            teaChannel: "va",
            teaChannelType: "tcpy",
            libraWebSDK: "https://libraweb-va.tiktok.com",
            webcastApi: "https://webcast.tiktok.com",
            webcastRootApi: "https://webcast.tiktok.com",
            tcc: "https://sf-tcc-config.tiktokcdn.com/obj/tcc-config-web-maliva/",
            locationApi: "https://location-va.tiktokv.com"
        };
        let o = null;
        const s = () => {
            var e, t;
            if (o)
                return o;
            try {
                const n = JSON.parse(null !== (t = null === (e = document.querySelector("#api-domains")) || void 0 === e ? void 0 : e.innerHTML) && void 0 !== t ? t : "");
                return n ? (o = n,
                n) : i
            } catch (e) {
                return i
            }
        }
    }
    ,
    144636: (e, t, n) => {
        n.d(t, {
            c: () => s
        });
        const i = {
            vregion: "Singapore-Central",
            vgeo: "VGeo-ROW"
        };
        let o = null;
        const s = () => {
            var e, t;
            if (o)
                return o;
            try {
                const n = JSON.parse(null !== (t = null === (e = document.querySelector("#service-region")) || void 0 === e ? void 0 : e.innerHTML) && void 0 !== t ? t : "");
                return n ? (o = n,
                n) : i
            } catch (e) {
                return i
            }
        }
    }
}]);
