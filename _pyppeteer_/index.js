!
function(n, t, r, i, a, o, e, c, u, f, s, l, m, h, v) {
    var p, d = 387,
    g = "isg",
    y = c,
    b = !!y.addEventListener,
    w = u.getElementsByTagName("head")[0],
    _ = f.userAgent; !
    function(n) {
        function t() {
            return 4294967295 * i.random() >>> 0
        }
        function o(n) {
            var t;
            switch (typeof n) {
            case "function":
                t = w.call(n);
                break;
            case "object":
                try {
                    t = n + ""
                } catch(r) {
                    return ! 1
                }
                break;
            default:
                return ! 1
            }
            return g.test(t)
        }
        function e(n) {
            for (var t = 0,
            r = 0,
            i = n.length; r < i; r++) t = (t << 5) - t + n.charCodeAt(r),
            t >>>= 0;
            return t
        }
        function c(n, t) {
            var r = n.indexOf(t);
            return - 1 === r ? n: n.substr(0, r)
        }
        function f(n, t) {
            var r = n.indexOf(t);
            return - 1 === r ? n: n.substr(r + t.length)
        }
        function s(n) {
            var t = n.match(_);
            if (!t) return null;
            var r = t[1];
            return k.test(r) && (r = f(r, "@"), r = c(r, ":")),
            r
        }
        function l(n) {
            for (var t = 0,
            r = n.length - 1; r >= 0; r--) {
                t = t << 1 | (0 | +n[r])
            }
            return t
        }
        function m(n, t, r, i) {
            b ? n.addEventListener(t, r, i) : n.attachEvent && n.attachEvent("on" + t,
            function() {
                r(event)
            })
        }
        function h(n) {
            try {
                return localStorage[n + "__"]
            } catch(t) {}
        }
        function v(n, t) {
            try {
                localStorage[n + "__"] = t
            } catch(r) {}
        }
        function p() {
            var n = y.outerWidth;
            return null == n && (n = u.documentElement.clientWidth || u.body.clientWidth),
            n
        }
        function d() {
            var n = y.outerHeight;
            return null == n && (n = u.documentElement.clientHeight || u.body.clientHeight),
            n
        }
        n.a = t;
        var g = /native code/,
        w = r.prototype.toString;
        n.b = o,
        n.c = e,
        n.d = a.now ||
        function() {
            return + new a
        },
        n.e = c,
        n.f = f;
        var _ = /^(?:https?:)?\/{2,}([^/ ? #\\] + ) / i,
        k = /[@:]/;
        n.g = s,
        n.h = l,
        n.i = m,
        n.j = h,
        n.k = v,
        n.l = p,
        n.m = d
    } (p || (p = {}));
    var k, x = function() {
        function n(n) {
            this.n = new o("(?:^|; )" + n + "=([^;]+)", "g"),
            this.o = n + "=",
            this.p = ""
        }
        return n.prototype.q = function() {
            try {
                var n = u.cookie
            } catch(i) {
                return
            }
            for (var t, r = []; t = this.n.exec(n);) r.push(t[1]);
            return r
        },
        n.prototype.r = function() {
            return this.q()[0]
        },
        n.prototype.s = function(n) {
            if (!this.p) {
                var t = "";
                this.t && (t += "; domain=" + this.t),
                this.u && (t += "; path=" + this.u),
                this.v && (t += "; expires=" + this.v),
                this.p = t
            }
            try {
                u.cookie = this.o + n + this.p
            } catch(r) {}
        },
        n.prototype.w = function() {
            var n = this.v;
            this.x("Thu, 01 Jan 1970 00:00:00 GMT"),
            this.s(""),
            this.x(n)
        },
        n.prototype.y = function(n) {
            this.t = n,
            this.p = ""
        },
        n.prototype.z = function(n) {
            this.u = n,
            this.p = ""
        },
        n.prototype.x = function(n) {
            this.v = n,
            this.p = ""
        },
        n
    } (); !
    function(n) {
        function t(n) {
            var t = n.stack || n.message;
            s(function(n) {
                r(t)
            },
            1)
        }
        function r(n) {
            var t = u._sufei_log;
            if (null == t && (t = .001), !(i.random() > t)) {
                c({
                    code: 1,
                    msg: (n + "").substr(0, 1e3),
                    pid: "sufeidata",
                    page: l.href.split(/[#?]/)[0],
                    query: l.search.substr(1),
                    hash: l.hash,
                    referrer: u.referrer,
                    title: u.title,
                    ua: f.userAgent,
                    rel: d,
                    c1: o()
                },
                "//gm.mmstat.com/fsp.1.1?")
            }
        }
        function a(n, t, r) {
            if (! (_.indexOf("XueXi") >= 0)) {
                n = (n || "").substr(0, 2e3);
                c({
                    url: n,
                    token: t,
                    cna: o(),
                    ext: r
                },
                "https://fourier.taobao.com/ts?")
            }
        }
        function o() {
            return null == m && (m = new x("cna").r() || ""),
            m
        }
        function c(n, t) {
            var r = [];
            for (var i in n) r.push(i + "=" + e(n[i])); (new v).src = t + r.join("&")
        }
        n.A = t,
        n.B = r,
        n.C = a;
        var m
    } (k || (k = {}));
    var z; !
    function(n) {
        function t() {
            if (fn) {
                var n = F + ":" + sn + ":" + fn.join(",");
                k.C("", n, 4),
                fn = null
            }
        }
        function r(n) {
            K = n.clientX,
            Z = n.clientY,
            F++,
            nn = o(tn, rn)
        }
        function a(n) {
            Y = n.isTrusted;
            var t = n.touches[0];
            K = t.clientX,
            Z = t.clientY,
            F++,
            nn = o(tn, rn)
        }
        function o(n, t) {
            return 0 <= n && n <= p.l() && 0 <= t && t <= p.m()
        }
        function e(n) {
            if (N = n.isTrusted, b) {
                var r = n.target,
                a = r.offsetWidth >> 1,
                o = r.offsetHeight >> 1;
                if (! (a < 10 && o < 10)) {
                    var e = i.abs(n.offsetX - a),
                    u = i.abs(n.offsetY - o),
                    f = e < 2 && u < 2;
                    if (f && sn++, sn >= 3 && (3 === sn && (s(t, 2e4), p.i(c, "unload", t)), fn && fn.length < 20)) {
                        var l = (f ? "": "!") + r.tagName;
                        fn.push(l)
                    }
                }
            }
        }
        function m(n) {
            N = n.isTrusted,
            tn = n.clientX,
            rn = n.clientY,
            Q++
        }
        function v(n) {
            Y = n.isTrusted;
            var t = n.touches[0];
            tn = t.clientX,
            rn = t.clientY,
            Q++
        }
        function d(n) {
            J++
        }
        function g(n) {
            V++
        }
        function w() {
            var n = h.availWidth,
            t = p.l();
            $ = n - t < 20
        }
        function x(n) {
            G = !0,
            an = !0
        }
        function z(n) {
            an = !1
        }
        function A(n) {
            un = n.gamma,
            cn || (cn = s(function(n) {
                removeEventListener("deviceorientation", A),
                s(D, 470)
            },
            30))
        }
        function D() {
            cn = 0,
            addEventListener("deviceorientation", A)
        }
        function E() {
            if ("ontouchmove" in u && (p.i(u, "touchmove", v, !0), p.i(u, "touchstart", a, !0)), p.i(u, "mousemove", m, !0), p.i(u, "mousedown", r, !0), p.i(u, "click", e, !0), p.i(u, "keydown", g, !0), p.i(c, "scroll", d, !0), p.i(c, "focus", x), p.i(c, "blur", z), p.i(c, "resize", w), w(), f.getBattery) {
                var n = f.getBattery();
                n && (n.then(function(n) {
                    U = n
                })["catch"](function(n) {}), on = !0)
            }
            en && D()
        }
        function T() {
            return Q
        }
        function j() {
            return J
        }
        function M() {
            return F
        }
        function L() {
            return V
        }
        function B() {
            var n = K,
            t = Z;
            n || t || (n = tn, t = rn);
            var r = N === undefined && Y === undefined || !0 === N || !0 === Y;
            return N = undefined,
            Y = undefined,
            {
                J: n,
                K: t,
                L: r
            }
        }
        function W() {
            return nn
        }
        function q() {
            var n = u.hidden;
            return null == n && (n = u.mozHidden),
            !n
        }
        function H() {
            return an
        }
        function O() {
            return G
        }
        function S() {
            return $
        }
        function X() {
            return on
        }
        function C() {
            return ! U || U.charging
        }
        function I() {
            return U ? 100 * U.level: 127
        }
        function P() {
            return en && null != un
        }
        function R() {
            return en && null != un ? un + 90 : 255
        }
        var N, Y, $, G, U, Q = 0,
        F = 0,
        J = 0,
        V = 0,
        K = 0,
        Z = 0,
        nn = !0,
        tn = 0,
        rn = 0,
        an = !0,
        on = !1,
        en = !!y.DeviceOrientationEvent; (/dingtalk|youku|uczzd\.cn|sm\.cn|uc\.cn/.test(l.hostname) || /Qianniu|DingTalk|Youku/.test(_)) && (en = !1);
        var cn, un = null,
        fn = [],
        sn = 0;
        n.D = E,
        n.F = T,
        n.G = j,
        n.H = M,
        n.I = L,
        n.M = B,
        n.N = W,
        n.O = q,
        n.P = H,
        n.Q = O,
        n.R = S,
        n.S = X,
        n.T = C,
        n.U = I,
        n.V = P,
        n.W = R
    } (z || (z = {}));
    var A; !
    function(n) {
        function r() {
            return "$cdc_asdjflasutopfhvcZLmcfl_" in u || f.webdriver
        }
        function i() {
            if (o()) return ! 1;
            try {
                var n = u.createElement("canvas"),
                t = n.getContext("webgl");
                if (t) {
                    var r = t.getExtension("WEBGL_lose_context");
                    r && r.loseContext()
                }
                return !! t
            } catch(i) {
                return ! 1
            }
        }
        function o() {
            return "ontouchstart" in u
        }
        function e() {
            return /zh-cn/i.test(f.language || f.systemLanguage)
        }
        function s() {
            return - 480 === (new a).getTimezoneOffset()
        }
        function l() {
            return z.N()
        }
        function m() {
            return z.V()
        }
        function h() {
            return z.S()
        }
        function v() {
            return z.T()
        }
        function d() {
            var n = p.l(),
            t = p.m(),
            r = y.innerWidth,
            i = y.innerHeight;
            if (null == r || null == i) return ! 1;
            var a = n - r,
            o = t - i;
            return a > 240 || o > 150
        }
        function g() {
            return D && ("complete" !== u.readyState || p.d() - E > 1e4 || z.F() || z.G() || z.H() || z.I()) && (D = !1),
            D
        }
        function k() {
            for (var n = 0; n < M.length; n++) T[j.length + n] = M[n]();
            return p.h(T)
        }
        function x() {
            for (var n in O) if (O.hasOwnProperty(n)) {
                var t = O[n];
                if (t()) return + n.substr(1)
            }
            return 0
        }
        function A() {
            E = p.d();
            for (var n = 0; n < j.length; n++) T[n] = j[n]()
        }
        var D = !0,
        E = 0,
        T = t(16),
        j = [r, i, o, e, s],
        M = [l, m, h, v, g, d];
        n.X = g,
        n.Y = k;
        var L = f.vendor,
        B = w.style,
        W = "chrome" in c,
        q = "ActiveXObject" in c,
        H = p.b(y.WeakMap),
        O = {
            _13: function() {
                return "callPhantom" in y || /PhantomJS/i.test(_)
            },
            _14: function() {
                return /python/i.test(f.appVersion)
            },
            _15: function() {
                return "sgAppName" in f
            },
            _16: function() {
                return /Maxthon/i.test(L)
            },
            _17: function() {
                return "opr" in y
            },
            _18: function() {
                return W && /BIDUBrowser/i.test(_)
            },
            _19: function() {
                return W && /LBBROWSER/i.test(_)
            },
            _20: function() {
                return W && /QQBrowser/.test(_)
            },
            _21: function() {
                return W && /UBrowser/i.test(_)
            },
            _22: function() {
                return W && /2345Explorer/.test(_)
            },
            _23: function() {
                return W && /TheWorld/.test(_)
            },
            _24: function() {
                return W && "MSGesture" in y
            },
            _26: function() {
                return "aef" in y && /WW_IMSDK/.test(_)
            },
            _25: function() {
                return /Qianniu/.test(_)
            },
            _1: function() {
                return W
            },
            _2: function() {
                return "mozRTCIceCandidate" in y || "mozInnerScreenY" in y
            },
            _3: function() {
                return "safari" in y
            },
            _4: function() {
                return q && !("maxHeight" in B)
            },
            _5: function() {
                return q && !p.b(y.postMessage)
            },
            _6: function() {
                return q && !b
            },
            _7: function() {
                return q && !p.b(y.Uint8Array)
            },
            _8: function() {
                return q && !H
            },
            _9: function() {
                return q && H
            },
            _10: function() {
                return "Google Inc." === f.vendor
            },
            _11: function() {
                return "Apple Computer, Inc." === f.vendor
            },
            _12: function() {
                return q
            }
        };
        n.Z = x,
        n.D = A
    } (A || (A = {}));
    var D, E = function() {
        function n() {
            var n = this,
            t = y.WeakMap;
            if (t) this.$ = new t;
            else {
                var r = function() {
                    n._ = [],
                    n.aa = []
                };
                r(),
                setInterval(r, 1e4)
            }
        }
        return n.prototype.ba = function(n, t) {
            var r = this.$;
            r ? r.set(n, t) : (this._.push(n), this.aa.push(t))
        },
        n.prototype.ca = function(n) {
            var t = this.$;
            if (t) return t.get(n);
            var r = this._.indexOf(n);
            return r >= 0 ? this.aa[r] : void 0
        },
        n
    } (); !
    function(n) {
        function t() {
            n.da = r("1688.com,95095.com,a-isv.org,aliapp.org,alibaba-inc.com,alibaba.com,alibaba.net,alibabacapital.com,alibabacloud.com,alibabacorp.com,alibabadoctor.com,alibabagroup.com,alicdn.com,alidayu.com,aliexpress.com,alifanyi.com,alihealth.cn,alihealth.com.cn,alihealth.hk,alikmd.com,alimama.com,alimei.com,alios.cn,alipay-corp.com,alipay.com,aliplus.com,alisoft.com,alisports.com,alitianji.com,alitrip.com,alitrip.hk,aliunicorn.com,aliway.com,aliwork.com,alixiaomi.com,aliyun-inc.com,aliyun.com,aliyun.xin,aliyuncs.com,alizhaopin.com,amap.com,antfinancial-corp.com,antsdaq-corp.com,asczwa.com,atatech.org,autonavi.com,b2byao.com,bcvbw.com,cainiao-inc.cn,cainiao-inc.com,cainiao.com,cainiao.com.cn,cainiaoyizhan.com,cheng.xin,cibntv.net,cnzz.com,damai.cn,ddurl.to,dingding.xin,dingtalk.com,dingtalkapps.com,doctoryou.ai,doctoryou.cn,dratio.com,etao.com,feizhu.cn,feizhu.com,fliggy.com,fliggy.hk,freshhema.com,gaode.com,gein.cn,gongyi.xin,guoguo-app.com,hemaos.com,heyi.test,hichina.com,itao.com,jingguan.ai,jiyoujia.com,juhuasuan.com,koubei-corp.com,kumiao.com,laifeng.com,laiwang.com,lazada.co.id,lazada.co.th,lazada.com,lazada.com.my,lazada.com.ph,lazada.sg,lazada.vn,liangxinyao.com,lingshoujia.com,lwurl.to,mashangfangxin.com,mashort.cn,mdeer.com,miaostreet.com,mmstat.com,mshare.cc,mybank-corp.cn,nic.xin,pailitao.com,phpwind.com,phpwind.net,saee.org.cn,shenjing.com,shyhhema.com,sm.cn,soku.com,tanx.com,taobao.com,taobao.org,taopiaopiao.com,tb.cn,tmall.com,tmall.hk,tmall.ru,tmjl.ai,tudou.com,umeng.co,umeng.com,umengcloud.com,umsns.com,umtrack.com,wasu.tv,whalecloud.com,wrating.com,www.net.cn,xiami.com,ykimg.com,youku.com,yowhale.com,yunos-inc.com,yunos.com,yushanfang.com,zmxy-corp.com.cn,zuodao.com"),
            n.ea = r("127.0.0.1,afptrack.alimama.com,aldcdn.tmall.com,delivery.dayu.com,hzapush.aliexpress.com,local.alipcsec.com,localhost.wwbizsrv.alibaba.com,napi.uc.cn,sec.taobao.com,tce.alicdn.com,un.alibaba-inc.com,utp.ucweb.com,ynuf.aliapp.org"),
            n.fa = r("alibaba-inc.com,alicdn.com,aliimg.com,alimama.cn,alimmdn.com,alipay.com,alivecdn.com,aliyun.com,aliyuncs.com,amap.com,autonavi.com,cibntv.net,cnzz.com,facebook.com,googleapis.com,greencompute.org,lesiclub.cn,linezing.com,mmcdn.cn,mmstat.com,sm-tc.cn,sm.cn,soku.com,tanx.com,taobaocdn.com,tbcache.com,tbcdn.cn,tudou.com,uczzd.cn,umeng.com,wrating.com,xiami.net,xiaoshuo1-sm.com,ykimg.com,youku.com,zimgs.cn")
        }
        function r(n) {
            for (var t = {},
            r = n.split(","), i = 0; i < r.length; i++) t[r[i]] = !0;
            return t
        }
        n.D = t
    } (D || (D = {}));
    var T; !
    function(t) {
        function r(n, t, r) {
            switch (r.length) {
            case 0:
                return t();
            case 1:
                return t(r[0]);
            case 2:
                return t(r[0], r[1]);
            default:
                return t(r[0], r[2], r[3])
            }
        }
        function i(n, t) {
            switch (t.length) {
            case 0:
                return new n;
            case 1:
                return new n(t[0]);
            case 2:
                return new n(t[0], t[1]);
            default:
                return new n(t[0], t[2], t[3])
            }
        }
        function a(n, a, o) {
            return function() {
                var e, c = arguments;
                try {
                    e = a(c, this, n)
                } catch(u) {
                    e = c,
                    k.A(u)
                }
                if (e) {
                    if (e === t.ga) return;
                    c = e
                }
                return o ? i(n, c) : "apply" in n ? n.apply(this, c) : r(this, n, c)
            }
        }
        function o(n, t, r) {
            if (!n) return ! 1;
            var i = n[t];
            return !! i && (n[t] = a(i, r, !1), !0)
        }
        function e(n, t, r) {
            if (!n) return ! 1;
            var i = n[t];
            return !! i && (n[t] = a(i, r, !0), !0)
        }
        function c(t, r, i) {
            if (!u) return ! 1;
            var o = u(t, r);
            return ! (!o || !o.set) && (o.set = a(o.set, i, !1), b || (o.get = function(n) {
                return function() {
                    return n.call(this)
                }
            } (o.get)), n.defineProperty(t, r, o), !0)
        }
        t.ga = -1;
        var u = n.getOwnPropertyDescriptor;
        t.ha = o,
        t.ia = e,
        t.ja = c
    } (T || (T = {}));
    var j, M = function() {
        function n(n) {
            this.ka = n;
            for (var t = 0,
            r = n.length; t < r; t++) this[t] = 0
        }
        return n.prototype.la = function() {
            for (var n = this.ka,
            t = [], r = -1, i = 0, a = n.length; i < a; i++) for (var o = this[i], e = n[i], c = r += e; t[c] = 255 & o, 0 != --e;)--c,
            o >>= 8;
            return t
        },
        n.prototype.ma = function(n) {
            for (var t = this.ka,
            r = 0,
            i = 0,
            a = t.length; i < a; i++) {
                var o = t[i],
                e = 0;
                do {
                    e = e << 8 | n[r++]
                } while (-- o > 0 );
                this[i] = e >>> 0
            }
        },
        n
    } (); !
    function(n) {
        function t(n) {
            for (var t = 0,
            r = 0,
            i = n.length; r < i; r++) t = (t << 5) - t + n[r];
            return 255 & t
        }
        function r(n, t, r, i, a) {
            for (var o = n.length; t < o;) r[i++] = n[t++] ^ 255 & a,
            a = ~ (131 * a)
        }
        function i(n) {
            for (var t = [], r = n.length, i = 0; i < r; i += 3) {
                var a = n[i] << 16 | n[i + 1] << 8 | n[i + 2];
                t.push(f.charAt(a >> 18), f.charAt(a >> 12 & 63), f.charAt(a >> 6 & 63), f.charAt(63 & a))
            }
            return t.join("")
        }
        function a(n) {
            for (var t = [], r = 0; r < n.length; r += 4) {
                var i = s[n.charAt(r)] << 18 | s[n.charAt(r + 1)] << 12 | s[n.charAt(r + 2)] << 6 | s[n.charAt(r + 3)];
                t.push(i >> 16, i >> 8 & 255, 255 & i)
            }
            return t
        }
        function o() {
            for (var n = 0; n < 64; n++) {
                var t = f.charAt(n);
                s[t] = n
            }
        }
        function e(n) {
            var a = t(n),
            o = [u, a];
            return r(n, 0, o, 2, a),
            i(o)
        }
        function c(n) {
            var i = a(n),
            o = i[1],
            e = [];
            if (r(i, 2, e, 0, o), t(e) == o) return e
        }
        var u = 4,
        f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        s = {};
        n.D = o,
        n.na = e,
        n.oa = c
    } (j || (j = {}));
    var L; !
    function(n) {
        function t() {
            for (var n = f.platform,
            t = 0; t < r.length; t++) if (r[t].test(n)) return t + 1;
            return 0
        }
        var r = [/^Win32/, /^Win64/, /^Linux armv|^Linux aarch64/, /^Android/, /^iPhone/, /^iPad/, /^MacIntel/, /^Linux [ix]\d+/, /^ARM/, /^iPod/, /^BlackBerry/];
        n.pa = t
    } (L || (L = {}));
    var B; !
    function(n) {
        function t() {
            return p.d() / 1e3 >>> 0
        }
        function r(n) {
            if (z.D(), A.D(), n) {
                var t = j.oa(n);
                t && a.ma(t)
            }
            a[1] = p.a(),
            a[5] = A.Z(),
            a[6] = L.pa(),
            a[8] = p.c(f.userAgent),
            a[7] = 0
        }
        function i(n, r) {
            0 == a[4] && (a[4] = p.a(), a[3] = t()),
            a[2] = t(),
            a[16] = A.Y();
            var i = !1;
            if (!A.X()) {
                a[9] = z.F(),
                a[10] = z.G(),
                a[11] = z.H(),
                a[12] = z.I();
                var e = z.M();
                a[13] = e.J,
                a[14] = e.K,
                i = e.L
            }
            a[17] = z.W(),
            a[18] = z.U();
            var c = z.P(),
            u = z.R(),
            f = z.Q(),
            s = [r, z.O(), n, c, i, !0, f, u];
            n && o++,
            a[15] = p.h(s),
            a[0] = o;
            var l = a.la(),
            m = j.na(l);
            return m
        }
        var a = new M([2, 2, 4, 4, 4, 1, 1, 4, 4, 3, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1]),
        o = 0;
        n.D = r,
        n.qa = i
    } (B || (B = {}));
    var W; !
    function(n) {
        function t(n, t) {
            var r = n.split("."),
            i = r.length - 1,
            a = r[i];
            if (a in t) return ! 0;
            for (var o = i - 1; o >= 0; o--) if ((a = r[o] + "." + a) in t) return ! 0;
            return ! 1
        }
        function r(n) {
            var t = l.hostname;
            if (E.test(t)) return z.s(n),
            t;
            var r = t.split("."),
            i = r.length;
            if (1 === i) return z.s(n),
            t;
            i > 5 && (i = 5),
            t = r.pop();
            for (var a = 2; a <= i && (t = r.pop() + "." + t, z.y(t), z.s(n), !(t in D.da || t in D.ea || t in D.fa)) && z.r() !== n; a++);
            return t
        }
        function i(n) {
            var t = r(n),
            i = "(^|\\.)" + t.replace(/\./g, "\\.") + "$";
            _ = new o(i, "i")
        }
        function e() {
            A = null;
            var n = B.qa(!1, !1);
            z.s(n),
            p.k(g, n)
        }
        function f() {
            var n = B.qa(!0, !1);
            z.s(n),
            null == A && (A = s(e, 20))
        }
        function m(n, t) { / ^\ / \ //.test(n)&&(n=l.protocol+n);var r=B.qa(!0,!1);k.C(n,r,t)}function h(n,t){if(t)for(var r=0;r<t.length;r++){var i=t[r];if(i.test&&i.test(n))return!0}return!1}function v(n){var r;if(null!=n&&(n+="",r=p.g(n)),!r)return f(),!0;if(_.test(r))return f(),!0;if(E.test(r))return!1;var i=p.e(n,"?");return h(i,y.__sufei_point_list)?(m(n,0),!1):!t(r,D.fa)&&(!(r in D.ea)&&(!/\/gw-open\/|\/gw\/|ascp\.alibaba\.com/.test(i)&&(!h(i,y.__sufei_ignore_list)&&(m(n,0),!1))))}function d(n){var r=u.referrer;if(r){var i=p.g(r);if(i&&t(i,D.da))return}m(r,1)}function b(){z.w();for(var n=l.hostname.split("."),t=n.pop();;){var r=n.pop();if(!r)break;t=r+"."+t,z.y(t),z.w()}}function w(){D.D(),z=new x(g);var n=new a(p.d()+15552e6).toUTCString();z.x(n),z.z("/");var t=z.q();t.length>1&&(k.B("exist_multi_isg"),b(),z.q().length>0&&k.B("clear_fail"));var r=t[0];r||(r=p.j(g)),B.D(r),r=B.qa(!1,!1),i(r),0===t.length&&d(r),p.i(c,"unload",function(n){var t=B.qa(!1,!0);z.s(t),p.k(g,t)})}var _,z,A,E=/^(\d+\.)*\d+$/;n.ra=f,n.sa=v,n.D=w}(W||(W={}));var q;!function(n){function t(){r()||(i("insertBefore"),i("appendChild"))}function r(){var n=y.HTMLScriptElement;if(!n)return!1;var t=n.prototype,r=/^src$/i;return T.ha(t,"setAttribute",function(n){var t=n[0],i=n[1];r.test(t)&&o(i)}),T.ja(t,"src",function(n){o(n[0])})}function i(n){var t=y.Element;t?T.ha(t.prototype,n,a):(T.ha(w,n,a),T.ha(u.body,n,a))}function a(n){var t=n[0];t&&"SCRIPT"===t.tagName&&o(t.src)}function o(n){n+="",e.test(n)&&W.sa(n)}n.D=t;var e=/callback=/}(q||(q={}));var H;!function(n){function t(n){return p.e(n.href,"#")}function r(n){var t=n.target;if(!t){var r=f[0];r&&(t=r.target)}return t}function i(n){if(/^https?\:/.test(n.protocol)){var i=r(n);if(!i||/^_self$/i.test(i)){if(t(n)===c&&n.hash)return}W.sa(n.href)}}function a(n){if(!n.defaultPrevented)for(var t=n.target||n.srcElement;t;){var r=t.tagName;if("A"===r||"AREA"===r){i(t);break}t=t.parentNode}}function o(n){var t=n.target||n.srcElement;s.ca(t)!==m&&W.sa(t.action)}function e(){f=u.getElementsByTagName("base"),c=t(l),p.i(u,"click",a),p.i(u,"submit",o);var n=y.HTMLFormElement;n&&T.ha(n.prototype,"submit",function(n,t){var r=t;W.sa(r.action),s.ba(r,++m)})}var c,f,s=new E,m=0;n.D=e}(H||(H={}));var O;!function(n){function t(){r(),/Mobile/.test(_)&&(i(),a()||p.i(u,"DOMContentLoaded",a))}function r(){T.ha(y,"fetch",function(n){var t=n[0],r=n[1];"string"==typeof t&&W.sa(t)&&(r=r||{},r.credentials&&"omit"!==r.credentials||(r.credentials="same-origin"),n[1]=r)})}function i(){var n=y.lib;if(n){var t=!/taobao.com$/.test(l.hostname);T.ha(n.windvane,"call",function(n){if("MtopWVPlugin"===n[0]&&"send"===n[1]){var r=n[2];if(t){(r.ext_headers||{})["X-Sufei-Token"]=B.qa(!0,!1)}else W.ra()}})}}function a(){var n=y.jsbridge;if(n&&(n=n["default"]))return T.ha(n,"pushBack",function(n){"native:"===n[0]&&W.ra()}),!0}n.D=t}(O||(O={}));var S;!function(n){function t(){var n=y.XMLHttpRequest;if(n){var t=n.prototype;t&&r(t)||i()}a()}function r(n){var t=T.ha(n,"open",function(n,t){var r=n[1];o.ba(t,r)}),r=T.ha(n,"send",function(n,t){var r=o.ca(t);W.sa(r)});return t&&r}function i(){T.ia(y,"XMLHttpRequest",function(){W.sa()})}function a(){var n=/XMLHTTP/i;T.ia(y,"ActiveXObject",function(t){var r=t[0];r&&n.test(r)&&W.sa()})}var o=new E;n.D=t}(S||(S={}));var X;!function(n){function t(){j.D(),W.D(),H.D(),S.D(),O.D(),q.D()}var r="_sufei_data2";!function(){if(!u[r]){u[r]=d;try{t()}catch(n){k.A(n)}}}()}(X||(X={}))}(Object,Array,Function,Math,Date,RegExp,encodeURIComponent,window,document,navigator,setTimeout,location,history,screen,Image);
