export function createProtobufModule() {
  const module = {}
  const window = {}
  'use strict';
  !(function (e, t, i) {
    function s(i) {
      var n = t[i];
      return (
        n ||
          e[i][0].call(
            (n = t[i] =
              {
                exports: {},
              }),
            s,
            n,
            n.exports,
          ),
        n.exports
      );
    }
    var n = s(i[0]);
    (n.util.global.protobuf = n),
      'function' == typeof define &&
        define.amd &&
        define(['long'], function (e) {
          return e && e.isLong && ((n.util.Long = e), n.configure()), n;
        }),
      module && module.exports && (module.exports = n);
  })(
    {
      1: [
        function (e, t, i) {
          function s(e, t) {
            for (
              var i = Array(arguments.length - 1), s = 0, n = 2, o = !0;
              n < arguments.length;

            )
              i[s++] = arguments[n++];
            return new Promise(function (n, r) {
              i[s] = function (e) {
                if (o) {
                  if (((o = !1), e)) r(e);
                  else {
                    for (
                      var t = Array(arguments.length - 1), i = 0;
                      i < t.length;

                    )
                      t[i++] = arguments[i];
                    n.apply(null, t);
                  }
                }
              };
              try {
                e.apply(t || null, i);
              } catch (e) {
                o && ((o = !1), r(e));
              }
            });
          }
          t.exports = s;
        },
        {},
      ],
      2: [
        function (e, t, i) {
          var s = i;
          s.length = function (e) {
            var t = e.length;
            if (!t) return 0;
            for (var i = 0; --t % 4 > 1 && '=' === e.charAt(t); ) ++i;
            return Math.ceil(3 * e.length) / 4 - i;
          };
          for (var n = Array(64), o = Array(123), r = 0; r < 64; )
            o[
              (n[r] =
                r < 26
                  ? r + 65
                  : r < 52
                    ? r + 71
                    : r < 62
                      ? r - 4
                      : (r - 59) | 43)
            ] = r++;
          s.encode = function (e, t, i) {
            for (var s, o = null, r = [], a = 0, d = 0; t < i; ) {
              var l = e[t++];
              switch (d) {
                case 0:
                  (r[a++] = n[l >> 2]), (s = (3 & l) << 4), (d = 1);
                  break;
                case 1:
                  (r[a++] = n[s | (l >> 4)]), (s = (15 & l) << 2), (d = 2);
                  break;
                case 2:
                  (r[a++] = n[s | (l >> 6)]), (r[a++] = n[63 & l]), (d = 0);
              }
              a > 8191 &&
                ((o || (o = [])).push(String.fromCharCode.apply(String, r)),
                (a = 0));
            }
            return (d &&
              ((r[a++] = n[s]), (r[a++] = 61), 1 === d && (r[a++] = 61)),
            o)
              ? (a && o.push(String.fromCharCode.apply(String, r.slice(0, a))),
                o.join(''))
              : String.fromCharCode.apply(String, r.slice(0, a));
          };
          var a = 'invalid encoding';
          (s.decode = function (e, t, i) {
            for (var s, n = i, r = 0, d = 0; d < e.length; ) {
              var l = e.charCodeAt(d++);
              if (61 === l && r > 1) break;
              if ((l = o[l]) === undefined) throw Error(a);
              switch (r) {
                case 0:
                  (s = l), (r = 1);
                  break;
                case 1:
                  (t[i++] = (s << 2) | ((48 & l) >> 4)), (s = l), (r = 2);
                  break;
                case 2:
                  (t[i++] = ((15 & s) << 4) | ((60 & l) >> 2)),
                    (s = l),
                    (r = 3);
                  break;
                case 3:
                  (t[i++] = ((3 & s) << 6) | l), (r = 0);
              }
            }
            if (1 === r) throw Error(a);
            return i - n;
          }),
            (s.test = function (e) {
              return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
                e,
              );
            });
        },
        {},
      ],
      3: [
        function (e, t, i) {
          function s(e, t) {
            'string' == typeof e && ((t = e), (e = undefined));
            var i = [];
            function n(e) {
              if ('string' != typeof e) {
                var t = o();
                if (
                  (s.verbose && console.log('codegen: ' + t),
                  (t = 'return ' + t),
                  e)
                ) {
                  for (
                    var r = Object.keys(e),
                      a = Array(r.length + 1),
                      d = Array(r.length),
                      l = 0;
                    l < r.length;

                  )
                    (a[l] = r[l]), (d[l] = e[r[l++]]);
                  return (a[l] = t), Function.apply(null, a).apply(null, d);
                }
                return Function(t)();
              }
              for (var p = Array(arguments.length - 1), c = 0; c < p.length; )
                p[c] = arguments[++c];
              if (
                ((c = 0),
                (e = e.replace(/%([%dfijs])/g, function (e, t) {
                  var i = p[c++];
                  switch (t) {
                    case 'd':
                    case 'f':
                      return String(Number(i));
                    case 'i':
                      return String(Math.floor(i));
                    case 'j':
                      return JSON.stringify(i);
                    case 's':
                      return String(i);
                  }
                  return '%';
                })),
                c !== p.length)
              )
                throw Error('parameter count mismatch');
              return i.push(e), n;
            }
            function o(s) {
              return (
                'function ' +
                (s || t || '') +
                '(' +
                ((e && e.join(',')) || '') +
                '){\n  ' +
                i.join('\n  ') +
                '\n}'
              );
            }
            return (n.toString = o), n;
          }
          (t.exports = s), (s.verbose = !1);
        },
        {},
      ],
      4: [
        function (e, t, i) {
          function s() {
            this._listeners = {};
          }
          (t.exports = s),
            (s.prototype.on = function (e, t, i) {
              return (
                (this._listeners[e] || (this._listeners[e] = [])).push({
                  fn: t,
                  ctx: i || this,
                }),
                this
              );
            }),
            (s.prototype.off = function (e, t) {
              if (undefined === e) this._listeners = {};
              else if (undefined === t) this._listeners[e] = [];
              else
                for (var i = this._listeners[e], s = 0; s < i.length; )
                  i[s].fn === t ? i.splice(s, 1) : ++s;
              return this;
            }),
            (s.prototype.emit = function (e) {
              var t = this._listeners[e];
              if (t) {
                for (var i = [], s = 1; s < arguments.length; )
                  i.push(arguments[s++]);
                for (s = 0; s < t.length; ) t[s].fn.apply(t[s++].ctx, i);
              }
              return this;
            });
        },
        {},
      ],
      5: [
        function (e, t, i) {
          t.exports = o;
          var s = e(1),
            n = e(7)('fs');
          function o(e, t, i) {
            return ('function' == typeof t
              ? ((i = t), (t = {}))
              : t || (t = {}),
            i)
              ? !t.xhr && n && n.readFile
                ? n.readFile(e, function (s, n) {
                    return s && 'undefined' != typeof XMLHttpRequest
                      ? o.xhr(e, t, i)
                      : s
                        ? i(s)
                        : i(null, t.binary ? n : n.toString('utf8'));
                  })
                : o.xhr(e, t, i)
              : s(o, this, e, t);
          }
          o.xhr = function (e, t, i) {
            var s = new XMLHttpRequest();
            (s.onreadystatechange = function () {
              if (4 !== s.readyState) return undefined;
              if (0 !== s.status && 200 !== s.status)
                return i(Error('status ' + s.status));
              if (t.binary) {
                var e = s.response;
                if (!e) {
                  e = [];
                  for (var n = 0; n < s.responseText.length; ++n)
                    e.push(255 & s.responseText.charCodeAt(n));
                }
                return i(
                  null,
                  'undefined' != typeof Uint8Array ? new Uint8Array(e) : e,
                );
              }
              return i(null, s.responseText);
            }),
              t.binary &&
                ('overrideMimeType' in s &&
                  s.overrideMimeType('text/plain; charset=x-user-defined'),
                (s.responseType = 'arraybuffer')),
              s.open('GET', e),
              s.send();
          };
        },
        {
          1: 1,
          7: 7,
        },
      ],
      6: [
        function (e, t, i) {
          function s(e) {
            return (
              'undefined' != typeof Float32Array
                ? (function () {
                    var t = new Float32Array([-0]),
                      i = new Uint8Array(t.buffer),
                      s = 128 === i[3];
                    function n(e, s, n) {
                      (t[0] = e),
                        (s[n] = i[0]),
                        (s[n + 1] = i[1]),
                        (s[n + 2] = i[2]),
                        (s[n + 3] = i[3]);
                    }
                    function o(e, s, n) {
                      (t[0] = e),
                        (s[n] = i[3]),
                        (s[n + 1] = i[2]),
                        (s[n + 2] = i[1]),
                        (s[n + 3] = i[0]);
                    }
                    function r(e, s) {
                      return (
                        (i[0] = e[s]),
                        (i[1] = e[s + 1]),
                        (i[2] = e[s + 2]),
                        (i[3] = e[s + 3]),
                        t[0]
                      );
                    }
                    function a(e, s) {
                      return (
                        (i[3] = e[s]),
                        (i[2] = e[s + 1]),
                        (i[1] = e[s + 2]),
                        (i[0] = e[s + 3]),
                        t[0]
                      );
                    }
                    (e.writeFloatLE = s ? n : o),
                      (e.writeFloatBE = s ? o : n),
                      (e.readFloatLE = s ? r : a),
                      (e.readFloatBE = s ? a : r);
                  })()
                : (function () {
                    function t(e, t, i, s) {
                      var n = +(t < 0);
                      if ((n && (t = -t), 0 === t))
                        e(1 / t > 0 ? 0 : 0x80000000, i, s);
                      else if (isNaN(t)) e(0x7fc00000, i, s);
                      else if (t > 34028234663852886e22)
                        e(((n << 31) | 0x7f800000) >>> 0, i, s);
                      else if (t < 11754943508222875e-54)
                        e(
                          ((n << 31) | Math.round(t / 1401298464324817e-60)) >>>
                            0,
                          i,
                          s,
                        );
                      else {
                        var o = Math.floor(Math.log(t) / Math.LN2),
                          r =
                            8388607 & Math.round(t * Math.pow(2, -o) * 8388608);
                        e(((n << 31) | ((o + 127) << 23) | r) >>> 0, i, s);
                      }
                    }
                    function i(e, t, i) {
                      var s = e(t, i),
                        n = (s >> 31) * 2 + 1,
                        o = (s >>> 23) & 255,
                        r = 8388607 & s;
                      return 255 === o
                        ? r
                          ? NaN
                          : (1 / 0) * n
                        : 0 === o
                          ? 1401298464324817e-60 * n * r
                          : n * Math.pow(2, o - 150) * (r + 8388608);
                    }
                    (e.writeFloatLE = t.bind(null, n)),
                      (e.writeFloatBE = t.bind(null, o)),
                      (e.readFloatLE = i.bind(null, r)),
                      (e.readFloatBE = i.bind(null, a));
                  })(),
              'undefined' != typeof Float64Array
                ? (function () {
                    var t = new Float64Array([-0]),
                      i = new Uint8Array(t.buffer),
                      s = 128 === i[7];
                    function n(e, s, n) {
                      (t[0] = e),
                        (s[n] = i[0]),
                        (s[n + 1] = i[1]),
                        (s[n + 2] = i[2]),
                        (s[n + 3] = i[3]),
                        (s[n + 4] = i[4]),
                        (s[n + 5] = i[5]),
                        (s[n + 6] = i[6]),
                        (s[n + 7] = i[7]);
                    }
                    function o(e, s, n) {
                      (t[0] = e),
                        (s[n] = i[7]),
                        (s[n + 1] = i[6]),
                        (s[n + 2] = i[5]),
                        (s[n + 3] = i[4]),
                        (s[n + 4] = i[3]),
                        (s[n + 5] = i[2]),
                        (s[n + 6] = i[1]),
                        (s[n + 7] = i[0]);
                    }
                    function r(e, s) {
                      return (
                        (i[0] = e[s]),
                        (i[1] = e[s + 1]),
                        (i[2] = e[s + 2]),
                        (i[3] = e[s + 3]),
                        (i[4] = e[s + 4]),
                        (i[5] = e[s + 5]),
                        (i[6] = e[s + 6]),
                        (i[7] = e[s + 7]),
                        t[0]
                      );
                    }
                    function a(e, s) {
                      return (
                        (i[7] = e[s]),
                        (i[6] = e[s + 1]),
                        (i[5] = e[s + 2]),
                        (i[4] = e[s + 3]),
                        (i[3] = e[s + 4]),
                        (i[2] = e[s + 5]),
                        (i[1] = e[s + 6]),
                        (i[0] = e[s + 7]),
                        t[0]
                      );
                    }
                    (e.writeDoubleLE = s ? n : o),
                      (e.writeDoubleBE = s ? o : n),
                      (e.readDoubleLE = s ? r : a),
                      (e.readDoubleBE = s ? a : r);
                  })()
                : (function () {
                    function t(e, t, i, s, n, o) {
                      var r,
                        a = +(s < 0);
                      if ((a && (s = -s), 0 === s))
                        e(0, n, o + t), e(1 / s > 0 ? 0 : 0x80000000, n, o + i);
                      else if (isNaN(s))
                        e(0, n, o + t), e(0x7ff80000, n, o + i);
                      else if (s > 17976931348623157e292)
                        e(0, n, o + t),
                          e(((a << 31) | 0x7ff00000) >>> 0, n, o + i);
                      else if (s < 22250738585072014e-324)
                        e((r = s / 5e-324) >>> 0, n, o + t),
                          e(((a << 31) | (r / 0x100000000)) >>> 0, n, o + i);
                      else {
                        var d = Math.floor(Math.log(s) / Math.LN2);
                        1024 === d && (d = 1023),
                          e(
                            (0x10000000000000 * (r = s * Math.pow(2, -d))) >>>
                              0,
                            n,
                            o + t,
                          ),
                          e(
                            ((a << 31) |
                              ((d + 1023) << 20) |
                              ((1048576 * r) & 1048575)) >>>
                              0,
                            n,
                            o + i,
                          );
                      }
                    }
                    function i(e, t, i, s, n) {
                      var o = e(s, n + t),
                        r = e(s, n + i),
                        a = (r >> 31) * 2 + 1,
                        d = (r >>> 20) & 2047,
                        l = 0x100000000 * (1048575 & r) + o;
                      return 2047 === d
                        ? l
                          ? NaN
                          : (1 / 0) * a
                        : 0 === d
                          ? 5e-324 * a * l
                          : a * Math.pow(2, d - 1075) * (l + 0x10000000000000);
                    }
                    (e.writeDoubleLE = t.bind(null, n, 0, 4)),
                      (e.writeDoubleBE = t.bind(null, o, 4, 0)),
                      (e.readDoubleLE = i.bind(null, r, 0, 4)),
                      (e.readDoubleBE = i.bind(null, a, 4, 0));
                  })(),
              e
            );
          }
          function n(e, t, i) {
            (t[i] = 255 & e),
              (t[i + 1] = (e >>> 8) & 255),
              (t[i + 2] = (e >>> 16) & 255),
              (t[i + 3] = e >>> 24);
          }
          function o(e, t, i) {
            (t[i] = e >>> 24),
              (t[i + 1] = (e >>> 16) & 255),
              (t[i + 2] = (e >>> 8) & 255),
              (t[i + 3] = 255 & e);
          }
          function r(e, t) {
            return (
              (e[t] | (e[t + 1] << 8) | (e[t + 2] << 16) | (e[t + 3] << 24)) >>>
              0
            );
          }
          function a(e, t) {
            return (
              ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>>
              0
            );
          }
          t.exports = s(s);
        },
        {},
      ],
      7: [
        function (require, module, exports) {
          function inquire(moduleName) {
            try {
              var mod = eval('quire'.replace(/^/, 're'))(moduleName);
              if (mod && (mod.length || Object.keys(mod).length)) return mod;
            } catch (e) {}
            return null;
          }
          module.exports = inquire;
        },
        {},
      ],
      8: [
        function (e, t, i) {
          var s = i,
            n = (s.isAbsolute = function (e) {
              return /^(?:\/|\w+:)/.test(e);
            }),
            o = (s.normalize = function (e) {
              var t = (e = e.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split(
                  '/',
                ),
                i = n(e),
                s = '';
              i && (s = t.shift() + '/');
              for (var o = 0; o < t.length; )
                '..' === t[o]
                  ? o > 0 && '..' !== t[o - 1]
                    ? t.splice(--o, 2)
                    : i
                      ? t.splice(o, 1)
                      : ++o
                  : '.' === t[o]
                    ? t.splice(o, 1)
                    : ++o;
              return s + t.join('/');
            });
          s.resolve = function (e, t, i) {
            return (i || (t = o(t)), n(t))
              ? t
              : (i || (e = o(e)),
                (e = e.replace(/(?:\/|^)[^/]+$/, '')).length
                  ? o(e + '/' + t)
                  : t);
          };
        },
        {},
      ],
      9: [
        function (e, t, i) {
          function s(e, t, i) {
            var s = i || 8192,
              n = s >>> 1,
              o = null,
              r = s;
            return function (i) {
              if (i < 1 || i > n) return e(i);
              r + i > s && ((o = e(s)), (r = 0));
              var a = t.call(o, r, (r += i));
              return 7 & r && (r = (7 | r) + 1), a;
            };
          }
          t.exports = s;
        },
        {},
      ],
      10: [
        function (e, t, i) {
          var s = i;
          (s.length = function (e) {
            for (var t = 0, i = 0, s = 0; s < e.length; ++s)
              (i = e.charCodeAt(s)) < 128
                ? (t += 1)
                : i < 2048
                  ? (t += 2)
                  : (64512 & i) == 55296 &&
                      (64512 & e.charCodeAt(s + 1)) == 56320
                    ? (++s, (t += 4))
                    : (t += 3);
            return t;
          }),
            (s.read = function (e, t, i) {
              if (i - t < 1) return '';
              for (var s, n = null, o = [], r = 0; t < i; )
                (s = e[t++]) < 128
                  ? (o[r++] = s)
                  : s > 191 && s < 224
                    ? (o[r++] = ((31 & s) << 6) | (63 & e[t++]))
                    : s > 239 && s < 365
                      ? ((s =
                          (((7 & s) << 18) |
                            ((63 & e[t++]) << 12) |
                            ((63 & e[t++]) << 6) |
                            (63 & e[t++])) -
                          65536),
                        (o[r++] = 55296 + (s >> 10)),
                        (o[r++] = 56320 + (1023 & s)))
                      : (o[r++] =
                          ((15 & s) << 12) |
                          ((63 & e[t++]) << 6) |
                          (63 & e[t++])),
                  r > 8191 &&
                    ((n || (n = [])).push(String.fromCharCode.apply(String, o)),
                    (r = 0));
              return n
                ? (r &&
                    n.push(String.fromCharCode.apply(String, o.slice(0, r))),
                  n.join(''))
                : String.fromCharCode.apply(String, o.slice(0, r));
            }),
            (s.write = function (e, t, i) {
              for (var s, n, o = i, r = 0; r < e.length; ++r)
                (s = e.charCodeAt(r)) < 128
                  ? (t[i++] = s)
                  : (s < 2048
                      ? (t[i++] = (s >> 6) | 192)
                      : ((64512 & s) == 55296 &&
                        (64512 & (n = e.charCodeAt(r + 1))) == 56320
                          ? ((s = 65536 + ((1023 & s) << 10) + (1023 & n)),
                            ++r,
                            (t[i++] = (s >> 18) | 240),
                            (t[i++] = ((s >> 12) & 63) | 128))
                          : (t[i++] = (s >> 12) | 224),
                        (t[i++] = ((s >> 6) & 63) | 128)),
                    (t[i++] = (63 & s) | 128));
              return i - o;
            });
        },
        {},
      ],
      11: [
        function (e, t, i) {
          var s = i,
            n = e(14),
            o = e(33);
          function r(e, t, i, s) {
            if (t.resolvedType) {
              if (t.resolvedType instanceof n) {
                e('switch(d%s){', s);
                for (
                  var o = t.resolvedType.values, r = Object.keys(o), a = 0;
                  a < r.length;
                  ++a
                )
                  o[r[a]] !== t.typeDefault ||
                    (e('default:')(
                      'if(typeof(d%s)==="number"){m%s=d%s;break}',
                      s,
                      s,
                      s,
                    ),
                    t.repeated || e('break')),
                    e('case%j:', r[a])('case %i:', o[r[a]])(
                      'm%s=%j',
                      s,
                      o[r[a]],
                    )('break');
                e('}');
              } else
                e('if(typeof d%s!=="object")', s)(
                  'throw TypeError(%j)',
                  t.fullName + ': object expected',
                )('m%s=types[%i].fromObject(d%s)', s, i, s);
            } else {
              var d = !1;
              switch (t.type) {
                case 'double':
                case 'float':
                  e('m%s=Number(d%s)', s, s);
                  break;
                case 'uint32':
                case 'fixed32':
                  e('m%s=d%s>>>0', s, s);
                  break;
                case 'int32':
                case 'sint32':
                case 'sfixed32':
                  e('m%s=d%s|0', s, s);
                  break;
                case 'uint64':
                  d = !0;
                case 'int64':
                case 'sint64':
                case 'fixed64':
                case 'sfixed64':
                  e('if(util.Long)')(
                    '(m%s=util.Long.fromValue(d%s)).unsigned=%j',
                    s,
                    s,
                    d,
                  )('else if(typeof d%s==="string")', s)(
                    'm%s=parseInt(d%s,10)',
                    s,
                    s,
                  )('else if(typeof d%s==="number")', s)(
                    'm%s=d%s',
                    s,
                    s,
                  )('else if(typeof d%s==="object")', s)(
                    'm%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)',
                    s,
                    s,
                    s,
                    d ? 'true' : '',
                  );
                  break;
                case 'bytes':
                  e('if(typeof d%s==="string")', s)(
                    'util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)',
                    s,
                    s,
                    s,
                  )('else if(d%s.length >= 0)', s)('m%s=d%s', s, s);
                  break;
                case 'string':
                  e('m%s=String(d%s)', s, s);
                  break;
                case 'bool':
                  e('m%s=Boolean(d%s)', s, s);
              }
            }
            return e;
          }
          function a(e, t, i, s) {
            if (t.resolvedType)
              t.resolvedType instanceof n
                ? e(
                    'd%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s',
                    s,
                    i,
                    s,
                    s,
                    i,
                    s,
                    s,
                  )
                : e('d%s=types[%i].toObject(m%s,o)', s, i, s);
            else {
              var o = !1;
              switch (t.type) {
                case 'double':
                case 'float':
                  e('d%s=o.json&&!isFinite(m%s)?String(m%s):m%s', s, s, s, s);
                  break;
                case 'uint64':
                  o = !0;
                case 'int64':
                case 'sint64':
                case 'fixed64':
                case 'sfixed64':
                  e('if(typeof m%s==="number")', s)(
                    'd%s=o.longs===String?String(m%s):m%s',
                    s,
                    s,
                    s,
                  )('else')(
                    'd%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toString(%s):m%s',
                    s,
                    s,
                    s,
                    s,
                    o ? 'true' : '',
                    s,
                  );
                  break;
                case 'bytes':
                  e(
                    'd%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s',
                    s,
                    s,
                    s,
                    s,
                    s,
                  );
                  break;
                default:
                  e('d%s=m%s', s, s);
              }
            }
            return e;
          }
          (s.fromObject = function (e) {
            var t = e.fieldsArray,
              i = o.codegen(
                ['d'],
                e.name + '$fromObject',
              )('if(d instanceof this.ctor)')('return d');
            if (!t.length) return i('return new this.ctor');
            i('var m=new this.ctor');
            for (var s = 0; s < t.length; ++s) {
              var a = t[s].resolve(),
                d = o.safeProp(a.name);
              a.map
                ? (i('if(d%s){', d)('if(typeof d%s!=="object")', d)(
                    'throw TypeError(%j)',
                    a.fullName + ': object expected',
                  )('m%s={}', d)(
                    'for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){',
                    d,
                  ),
                  r(i, a, s, d + '[ks[i]]')('}')('}'))
                : a.repeated
                  ? (i('if(d%s){', d)('if(!Array.isArray(d%s))', d)(
                      'throw TypeError(%j)',
                      a.fullName + ': array expected',
                    )('m%s=[]', d)('for(var i=0;i<d%s.length;++i){', d),
                    r(i, a, s, d + '[i]')('}')('}'))
                  : (a.resolvedType instanceof n || i('if(d%s!=null){', d),
                    r(i, a, s, d),
                    a.resolvedType instanceof n || i('}'));
            }
            return i('return m');
          }),
            (s.toObject = function (e) {
              var t = e.fieldsArray.slice().sort(o.compareFieldsById);
              if (!t.length) return o.codegen()('return {}');
              for (
                var i = o.codegen(['m', 'o'], e.name + '$toObject')('if(!o)')(
                    'o={}',
                  )('var d={}'),
                  s = [],
                  r = [],
                  d = [],
                  l = 0;
                l < t.length;
                ++l
              )
                t[l].partOf ||
                  (t[l].resolve().repeated ? s : t[l].map ? r : d).push(t[l]);
              if (s.length) {
                for (i('if(o.arrays||o.defaults){'), l = 0; l < s.length; ++l)
                  i('d%s=[]', o.safeProp(s[l].name));
                i('}');
              }
              if (r.length) {
                for (i('if(o.objects||o.defaults){'), l = 0; l < r.length; ++l)
                  i('d%s={}', o.safeProp(r[l].name));
                i('}');
              }
              if (d.length) {
                for (i('if(o.defaults){'), l = 0; l < d.length; ++l) {
                  var p = d[l],
                    c = o.safeProp(p.name);
                  if (p.resolvedType instanceof n)
                    i(
                      'd%s=o.enums===String?%j:%j',
                      c,
                      p.resolvedType.valuesById[p.typeDefault],
                      p.typeDefault,
                    );
                  else if (p.long)
                    i('if(util.Long){')(
                      'var n=new util.Long(%i,%i,%j).toString()',
                      p.typeDefault.low,
                      p.typeDefault.high,
                      p.typeDefault.unsigned,
                    )(
                      'd%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n',
                      c,
                    )('}else')(
                      'd%s=o.longs===String?%j:%i',
                      c,
                      p.typeDefault.toString(),
                      p.typeDefault.toNumber(),
                    );
                  else if (p.bytes) {
                    var u =
                      '[' +
                      Array.prototype.slice.call(p.typeDefault).join(',') +
                      ']';
                    i(
                      'if(o.bytes===String)d%s=%j',
                      c,
                      String.fromCharCode.apply(String, p.typeDefault),
                    )('else{')('d%s=%s', c, u)(
                      'if(o.bytes!==Array)d%s=util.newBuffer(d%s)',
                      c,
                      c,
                    )('}');
                  } else i('d%s=%j', c, p.typeDefault);
                }
                i('}');
              }
              var h = !1;
              for (l = 0; l < t.length; ++l) {
                var p = t[l],
                  g = e._fieldsArray.indexOf(p),
                  c = o.safeProp(p.name);
                p.map
                  ? (h || ((h = !0), i('var ks2')),
                    i(
                      'if(m%s&&(ks2=Object.keys(m%s)).length){',
                      c,
                      c,
                    )(
                      'd%s={}',
                      c,
                    )('for(var j=0;j<ks2.length;++j){'),
                    a(i, p, g, c + '[ks2[j]]')('}'))
                  : p.repeated
                    ? (i('if(m%s&&m%s.length){', c, c)('d%s=[]', c)(
                        'for(var j=0;j<m%s.length;++j){',
                        c,
                      ),
                      a(i, p, g, c + '[j]')('}'))
                    : (i('if(m%s!=null&&m.hasOwnProperty(%j)){', c, p.name),
                      a(i, p, g, c),
                      p.partOf &&
                        i('if(o.oneofs)')(
                          'd%s=%j',
                          o.safeProp(p.partOf.name),
                          p.name,
                        )),
                  i('}');
              }
              return i('return d');
            });
        },
        {
          14: 14,
          33: 33,
        },
      ],
      12: [
        function (e, t, i) {
          t.exports = a;
          var s = e(14),
            n = e(32),
            o = e(33);
          function r(e) {
            return "missing required '" + e.name + "'";
          }
          function a(e) {
            var t = o.codegen(
              ['r', 'l'],
              e.name + '$decode',
            )('if(!(r instanceof Reader))')('r=Reader.create(r)')(
              'var c=l===undefined?r.len:r.pos+l,m=new this.ctor' +
                (e.fieldsArray.filter(function (e) {
                  return e.map;
                }).length
                  ? ',k,value'
                  : ''),
            )('while(r.pos<c){')('var t=r.uint32()');
            e.group && t('if((t&7)===4)')('break'), t('switch(t>>>3){');
            for (var i = 0; i < e.fieldsArray.length; ++i) {
              var a = e._fieldsArray[i].resolve(),
                d = a.resolvedType instanceof s ? 'int32' : a.type,
                l = 'm' + o.safeProp(a.name);
              t('case %i: {', a.id),
                a.map
                  ? (t('if(%s===util.emptyObject)', l)('%s={}', l)(
                      'var c2 = r.uint32()+r.pos',
                    ),
                    n.defaults[a.keyType] !== undefined
                      ? t('k=%j', n.defaults[a.keyType])
                      : t('k=null'),
                    n.defaults[d] !== undefined
                      ? t('value=%j', n.defaults[d])
                      : t('value=null'),
                    t('while(r.pos<c2){')('var tag2=r.uint32()')(
                      'switch(tag2>>>3){',
                    )(
                      'case 1: k=r.%s(); break',
                      a.keyType,
                    )('case 2:'),
                    n.basic[d] === undefined
                      ? t('value=types[%i].decode(r,r.uint32())', i)
                      : t('value=r.%s()', d),
                    t('break')('default:')('r.skipType(tag2&7)')('break')('}')(
                      '}',
                    ),
                    t(
                      n.long[a.keyType] !== undefined
                        ? '%s[util.Long.isLong(k)?k.toString():typeof k==="object"?util.longToHash(k):k]=value'
                        : '%s[k]=value',
                      l,
                    ))
                  : a.repeated
                    ? (t('if(!(%s&&%s.length))', l, l)('%s=[]', l),
                      n.packed[d] !== undefined &&
                        t('if((t&7)===2){')('var c2=r.uint32()+r.pos')(
                          'while(r.pos<c2)',
                        )(
                          '%s.push(r.%s())',
                          l,
                          d,
                        )('}else'),
                      n.basic[d] === undefined
                        ? t(
                            a.resolvedType.group
                              ? '%s.push(types[%i].decode(r))'
                              : '%s.push(types[%i].decode(r,r.uint32()))',
                            l,
                            i,
                          )
                        : t('%s.push(r.%s())', l, d))
                    : n.basic[d] === undefined
                      ? t(
                          a.resolvedType.group
                            ? '%s=types[%i].decode(r)'
                            : '%s=types[%i].decode(r,r.uint32())',
                          l,
                          i,
                        )
                      : t('%s=r.%s()', l, d),
                t('break')('}');
            }
            for (
              t('default:')('r.skipType(t&7)')('break')('}')('}'), i = 0;
              i < e._fieldsArray.length;
              ++i
            ) {
              var p = e._fieldsArray[i];
              p.required &&
                t('if(!m.hasOwnProperty(%j))', p.name)(
                  'throw util.ProtocolError(%j,{instance:m})',
                  r(p),
                );
            }
            return t('return m');
          }
        },
        {
          14: 14,
          32: 32,
          33: 33,
        },
      ],
      13: [
        function (e, t, i) {
          t.exports = a;
          var s = e(14),
            n = e(32),
            o = e(33);
          function r(e, t, i, s) {
            return t.resolvedType.group
              ? e(
                  'types[%i].encode(%s,w.uint32(%i)).uint32(%i)',
                  i,
                  s,
                  ((t.id << 3) | 3) >>> 0,
                  ((t.id << 3) | 4) >>> 0,
                )
              : e(
                  'types[%i].encode(%s,w.uint32(%i).fork()).ldelim()',
                  i,
                  s,
                  ((t.id << 3) | 2) >>> 0,
                );
          }
          function a(e) {
            for (
              var t,
                i,
                a = o.codegen(['m', 'w'], e.name + '$encode')('if(!w)')(
                  'w=Writer.create()',
                ),
                d = e.fieldsArray.slice().sort(o.compareFieldsById),
                t = 0;
              t < d.length;
              ++t
            ) {
              var l = d[t].resolve(),
                p = e._fieldsArray.indexOf(l),
                c = l.resolvedType instanceof s ? 'int32' : l.type,
                u = n.basic[c];
              (i = 'm' + o.safeProp(l.name)),
                l.map
                  ? (a(
                      'if(%s!=null&&Object.hasOwnProperty.call(m,%j)){',
                      i,
                      l.name,
                    )('for(var ks=Object.keys(%s),i=0;i<ks.length;++i){', i)(
                      'w.uint32(%i).fork().uint32(%i).%s(ks[i])',
                      ((l.id << 3) | 2) >>> 0,
                      8 | n.mapKey[l.keyType],
                      l.keyType,
                    ),
                    undefined === u
                      ? a(
                          'types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()',
                          p,
                          i,
                        )
                      : a('.uint32(%i).%s(%s[ks[i]]).ldelim()', 16 | u, c, i),
                    a('}')('}'))
                  : l.repeated
                    ? (a('if(%s!=null&&%s.length){', i, i),
                      l.packed && n.packed[c] !== undefined
                        ? a('w.uint32(%i).fork()', ((l.id << 3) | 2) >>> 0)(
                            'for(var i=0;i<%s.length;++i)',
                            i,
                          )(
                            'w.%s(%s[i])',
                            c,
                            i,
                          )('w.ldelim()')
                        : (a('for(var i=0;i<%s.length;++i)', i),
                          undefined === u
                            ? r(a, l, p, i + '[i]')
                            : a(
                                'w.uint32(%i).%s(%s[i])',
                                ((l.id << 3) | u) >>> 0,
                                c,
                                i,
                              )),
                      a('}'))
                    : (l.optional &&
                        a(
                          'if(%s!=null&&Object.hasOwnProperty.call(m,%j))',
                          i,
                          l.name,
                        ),
                      undefined === u
                        ? r(a, l, p, i)
                        : a(
                            'w.uint32(%i).%s(%s)',
                            ((l.id << 3) | u) >>> 0,
                            c,
                            i,
                          ));
            }
            return a('return w');
          }
        },
        {
          14: 14,
          32: 32,
          33: 33,
        },
      ],
      14: [
        function (e, t, i) {
          t.exports = r;
          var s = e(22);
          ((r.prototype = Object.create(s.prototype)).constructor =
            r).className = 'Enum';
          var n = e(21),
            o = e(33);
          function r(e, t, i, n, o, r) {
            if ((s.call(this, e, i), t && 'object' != typeof t))
              throw TypeError('values must be an object');
            if (
              ((this.valuesById = {}),
              (this.values = Object.create(this.valuesById)),
              (this.comment = n),
              (this.comments = o || {}),
              (this.valuesOptions = r),
              (this.reserved = undefined),
              t)
            )
              for (var a = Object.keys(t), d = 0; d < a.length; ++d)
                'number' == typeof t[a[d]] &&
                  (this.valuesById[(this.values[a[d]] = t[a[d]])] = a[d]);
          }
          (r.fromJSON = function (e, t) {
            var i = new r(e, t.values, t.options, t.comment, t.comments);
            return (i.reserved = t.reserved), i;
          }),
            (r.prototype.toJSON = function (e) {
              var t = !!e && !!e.keepComments;
              return o.toObject([
                'options',
                this.options,
                'valuesOptions',
                this.valuesOptions,
                'values',
                this.values,
                'reserved',
                this.reserved && this.reserved.length
                  ? this.reserved
                  : undefined,
                'comment',
                t ? this.comment : undefined,
                'comments',
                t ? this.comments : undefined,
              ]);
            }),
            (r.prototype.add = function (e, t, i, s) {
              if (!o.isString(e)) throw TypeError('name must be a string');
              if (!o.isInteger(t)) throw TypeError('id must be an integer');
              if (this.values[e] !== undefined)
                throw Error("duplicate name '" + e + "' in " + this);
              if (this.isReservedId(t))
                throw Error('id ' + t + ' is reserved in ' + this);
              if (this.isReservedName(e))
                throw Error("name '" + e + "' is reserved in " + this);
              if (this.valuesById[t] !== undefined) {
                if (!(this.options && this.options.allow_alias))
                  throw Error('duplicate id ' + t + ' in ' + this);
                this.values[e] = t;
              } else this.valuesById[(this.values[e] = t)] = e;
              return (
                s &&
                  (this.valuesOptions === undefined &&
                    (this.valuesOptions = {}),
                  (this.valuesOptions[e] = s || null)),
                (this.comments[e] = i || null),
                this
              );
            }),
            (r.prototype.remove = function (e) {
              if (!o.isString(e)) throw TypeError('name must be a string');
              var t = this.values[e];
              if (null == t)
                throw Error("name '" + e + "' does not exist in " + this);
              return (
                delete this.valuesById[t],
                delete this.values[e],
                delete this.comments[e],
                this.valuesOptions && delete this.valuesOptions[e],
                this
              );
            }),
            (r.prototype.isReservedId = function (e) {
              return n.isReservedId(this.reserved, e);
            }),
            (r.prototype.isReservedName = function (e) {
              return n.isReservedName(this.reserved, e);
            });
        },
        {
          21: 21,
          22: 22,
          33: 33,
        },
      ],
      15: [
        function (e, t, i) {
          t.exports = l;
          var s,
            n = e(22);
          ((l.prototype = Object.create(n.prototype)).constructor =
            l).className = 'Field';
          var o = e(14),
            r = e(32),
            a = e(33),
            d = /^required|optional|repeated$/;
          function l(e, t, i, s, o, l, p) {
            if (
              (a.isObject(s)
                ? ((p = o), (l = s), (s = o = undefined))
                : a.isObject(o) && ((p = l), (l = o), (o = undefined)),
              n.call(this, e, l),
              !a.isInteger(t) || t < 0)
            )
              throw TypeError('id must be a non-negative integer');
            if (!a.isString(i)) throw TypeError('type must be a string');
            if (undefined !== s && !d.test((s = s.toString().toLowerCase())))
              throw TypeError('rule must be a string rule');
            if (undefined !== o && !a.isString(o))
              throw TypeError('extend must be a string');
            'proto3_optional' === s && (s = 'optional'),
              (this.rule = s && 'optional' !== s ? s : undefined),
              (this.type = i),
              (this.id = t),
              (this.extend = o || undefined),
              (this.required = 'required' === s),
              (this.optional = !this.required),
              (this.repeated = 'repeated' === s),
              (this.map = !1),
              (this.message = null),
              (this.partOf = null),
              (this.typeDefault = null),
              (this.defaultValue = null),
              (this.long = !!a.Long && r.long[i] !== undefined),
              (this.bytes = 'bytes' === i),
              (this.resolvedType = null),
              (this.extensionField = null),
              (this.declaringField = null),
              (this._packed = null),
              (this.comment = p);
          }
          (l.fromJSON = function (e, t) {
            return new l(
              e,
              t.id,
              t.type,
              t.rule,
              t.extend,
              t.options,
              t.comment,
            );
          }),
            Object.defineProperty(l.prototype, 'packed', {
              get: function () {
                return (
                  null === this._packed &&
                    (this._packed = !1 !== this.getOption('packed')),
                  this._packed
                );
              },
            }),
            (l.prototype.setOption = function (e, t, i) {
              return (
                'packed' === e && (this._packed = null),
                n.prototype.setOption.call(this, e, t, i)
              );
            }),
            (l.prototype.toJSON = function (e) {
              var t = !!e && !!e.keepComments;
              return a.toObject([
                'rule',
                ('optional' !== this.rule && this.rule) || undefined,
                'type',
                this.type,
                'id',
                this.id,
                'extend',
                this.extend,
                'options',
                this.options,
                'comment',
                t ? this.comment : undefined,
              ]);
            }),
            (l.prototype.resolve = function () {
              if (this.resolved) return this;
              if (
                ((this.typeDefault = r.defaults[this.type]) === undefined
                  ? ((this.resolvedType = (
                      this.declaringField
                        ? this.declaringField.parent
                        : this.parent
                    ).lookupTypeOrEnum(this.type)),
                    this.resolvedType.values,
                    this.resolvedType instanceof s
                      ? (this.typeDefault = null)
                      : (this.typeDefault =
                          this.resolvedType.values[
                            Object.keys(this.resolvedType.values)[0]
                          ]))
                  : this.options &&
                    this.options.proto3_optional &&
                    (this.typeDefault = null),
                this.options &&
                  null != this.options.default &&
                  ((this.typeDefault = this.options.default),
                  this.resolvedType instanceof o &&
                    'string' == typeof this.typeDefault &&
                    (this.typeDefault =
                      this.resolvedType.values[this.typeDefault])),
                this.options &&
                  ((!0 !== this.options.packed &&
                    (this.options.packed === undefined ||
                      !this.resolvedType ||
                      this.resolvedType instanceof o)) ||
                    delete this.options.packed,
                  Object.keys(this.options).length ||
                    (this.options = undefined)),
                this.long)
              )
                (this.typeDefault = a.Long.fromNumber(
                  this.typeDefault,
                  'u' === this.type.charAt(0),
                )),
                  Object.freeze && Object.freeze(this.typeDefault);
              else if (this.bytes && 'string' == typeof this.typeDefault) {
                var e;
                a.base64.test(this.typeDefault)
                  ? a.base64.decode(
                      this.typeDefault,
                      (e = a.newBuffer(a.base64.length(this.typeDefault))),
                      0,
                    )
                  : a.utf8.write(
                      this.typeDefault,
                      (e = a.newBuffer(a.utf8.length(this.typeDefault))),
                      0,
                    ),
                  (this.typeDefault = e);
              }
              return (
                this.map
                  ? (this.defaultValue = a.emptyObject)
                  : this.repeated
                    ? (this.defaultValue = a.emptyArray)
                    : (this.defaultValue = this.typeDefault),
                this.parent instanceof s &&
                  (this.parent.ctor.prototype[this.name] = this.defaultValue),
                n.prototype.resolve.call(this)
              );
            }),
            (l.d = function (e, t, i, s) {
              return (
                'function' == typeof t
                  ? (t = a.decorateType(t).name)
                  : t && 'object' == typeof t && (t = a.decorateEnum(t).name),
                function (n, o) {
                  a.decorateType(n.constructor).add(
                    new l(o, e, t, i, {
                      default: s,
                    }),
                  );
                }
              );
            }),
            (l._configure = function (e) {
              s = e;
            });
        },
        {
          14: 14,
          22: 22,
          32: 32,
          33: 33,
        },
      ],
      16: [
        function (e, t, i) {
          var s = (t.exports = e(17));
          function n(e, t, i) {
            return (
              'function' == typeof t
                ? ((i = t), (t = new s.Root()))
                : t || (t = new s.Root()),
              t.load(e, i)
            );
          }
          function o(e, t) {
            return t || (t = new s.Root()), t.loadSync(e);
          }
          (s.build = 'light'),
            (s.load = n),
            (s.loadSync = o),
            (s.encoder = e(13)),
            (s.decoder = e(12)),
            (s.verifier = e(36)),
            (s.converter = e(11)),
            (s.ReflectionObject = e(22)),
            (s.Namespace = e(21)),
            (s.Root = e(26)),
            (s.Enum = e(14)),
            (s.Type = e(31)),
            (s.Field = e(15)),
            (s.OneOf = e(23)),
            (s.MapField = e(18)),
            (s.Service = e(30)),
            (s.Method = e(20)),
            (s.Message = e(19)),
            (s.wrappers = e(37)),
            (s.types = e(32)),
            (s.util = e(33)),
            s.ReflectionObject._configure(s.Root),
            s.Namespace._configure(s.Type, s.Service, s.Enum),
            s.Root._configure(s.Type),
            s.Field._configure(s.Type);
        },
        {
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
          37: 37,
        },
      ],
      17: [
        function (e, t, i) {
          var s = i;
          function n() {
            s.util._configure(),
              s.Writer._configure(s.BufferWriter),
              s.Reader._configure(s.BufferReader);
          }
          (s.build = 'minimal'),
            (s.Writer = e(38)),
            (s.BufferWriter = e(39)),
            (s.Reader = e(24)),
            (s.BufferReader = e(25)),
            (s.util = e(35)),
            (s.rpc = e(28)),
            (s.roots = e(27)),
            (s.configure = n),
            n();
        },
        {
          24: 24,
          25: 25,
          27: 27,
          28: 28,
          35: 35,
          38: 38,
          39: 39,
        },
      ],
      18: [
        function (e, t, i) {
          t.exports = r;
          var s = e(15);
          ((r.prototype = Object.create(s.prototype)).constructor =
            r).className = 'MapField';
          var n = e(32),
            o = e(33);
          function r(e, t, i, n, r, a) {
            if (
              (s.call(this, e, t, n, undefined, undefined, r, a),
              !o.isString(i))
            )
              throw TypeError('keyType must be a string');
            (this.keyType = i), (this.resolvedKeyType = null), (this.map = !0);
          }
          (r.fromJSON = function (e, t) {
            return new r(e, t.id, t.keyType, t.type, t.options, t.comment);
          }),
            (r.prototype.toJSON = function (e) {
              var t = !!e && !!e.keepComments;
              return o.toObject([
                'keyType',
                this.keyType,
                'type',
                this.type,
                'id',
                this.id,
                'extend',
                this.extend,
                'options',
                this.options,
                'comment',
                t ? this.comment : undefined,
              ]);
            }),
            (r.prototype.resolve = function () {
              if (this.resolved) return this;
              if (n.mapKey[this.keyType] === undefined)
                throw Error('invalid key type: ' + this.keyType);
              return s.prototype.resolve.call(this);
            }),
            (r.d = function (e, t, i) {
              return (
                'function' == typeof i
                  ? (i = o.decorateType(i).name)
                  : i && 'object' == typeof i && (i = o.decorateEnum(i).name),
                function (s, n) {
                  o.decorateType(s.constructor).add(new r(n, e, t, i));
                }
              );
            });
        },
        {
          15: 15,
          32: 32,
          33: 33,
        },
      ],
      19: [
        function (e, t, i) {
          t.exports = n;
          var s = e(35);
          function n(e) {
            if (e)
              for (var t = Object.keys(e), i = 0; i < t.length; ++i)
                this[t[i]] = e[t[i]];
          }
          (n.create = function (e) {
            return this.$type.create(e);
          }),
            (n.encode = function (e, t) {
              return this.$type.encode(e, t);
            }),
            (n.encodeDelimited = function (e, t) {
              return this.$type.encodeDelimited(e, t);
            }),
            (n.decode = function (e) {
              return this.$type.decode(e);
            }),
            (n.decodeDelimited = function (e) {
              return this.$type.decodeDelimited(e);
            }),
            (n.verify = function (e) {
              return this.$type.verify(e);
            }),
            (n.fromObject = function (e) {
              return this.$type.fromObject(e);
            }),
            (n.toObject = function (e, t) {
              return this.$type.toObject(e, t);
            }),
            (n.prototype.toJSON = function () {
              return this.$type.toObject(this, s.toJSONOptions);
            });
        },
        {
          35: 35,
        },
      ],
      20: [
        function (e, t, i) {
          t.exports = o;
          var s = e(22);
          ((o.prototype = Object.create(s.prototype)).constructor =
            o).className = 'Method';
          var n = e(33);
          function o(e, t, i, o, r, a, d, l, p) {
            if (
              (n.isObject(r)
                ? ((d = r), (r = a = undefined))
                : n.isObject(a) && ((d = a), (a = undefined)),
              !(undefined === t || n.isString(t)))
            )
              throw TypeError('type must be a string');
            if (!n.isString(i)) throw TypeError('requestType must be a string');
            if (!n.isString(o))
              throw TypeError('responseType must be a string');
            s.call(this, e, d),
              (this.type = t || 'rpc'),
              (this.requestType = i),
              (this.requestStream = !!r || undefined),
              (this.responseType = o),
              (this.responseStream = !!a || undefined),
              (this.resolvedRequestType = null),
              (this.resolvedResponseType = null),
              (this.comment = l),
              (this.parsedOptions = p);
          }
          (o.fromJSON = function (e, t) {
            return new o(
              e,
              t.type,
              t.requestType,
              t.responseType,
              t.requestStream,
              t.responseStream,
              t.options,
              t.comment,
              t.parsedOptions,
            );
          }),
            (o.prototype.toJSON = function (e) {
              var t = !!e && !!e.keepComments;
              return n.toObject([
                'type',
                ('rpc' !== this.type && this.type) || undefined,
                'requestType',
                this.requestType,
                'requestStream',
                this.requestStream,
                'responseType',
                this.responseType,
                'responseStream',
                this.responseStream,
                'options',
                this.options,
                'comment',
                t ? this.comment : undefined,
                'parsedOptions',
                this.parsedOptions,
              ]);
            }),
            (o.prototype.resolve = function () {
              return this.resolved
                ? this
                : ((this.resolvedRequestType = this.parent.lookupType(
                    this.requestType,
                  )),
                  (this.resolvedResponseType = this.parent.lookupType(
                    this.responseType,
                  )),
                  s.prototype.resolve.call(this));
            });
        },
        {
          22: 22,
          33: 33,
        },
      ],
      21: [
        function (e, t, i) {
          t.exports = c;
          var s,
            n,
            o,
            r = e(22);
          ((c.prototype = Object.create(r.prototype)).constructor =
            c).className = 'Namespace';
          var a = e(15),
            d = e(33),
            l = e(23);
          function p(e, t) {
            if (!(e && e.length)) return undefined;
            for (var i = {}, s = 0; s < e.length; ++s)
              i[e[s].name] = e[s].toJSON(t);
            return i;
          }
          function c(e, t) {
            r.call(this, e, t),
              (this.nested = undefined),
              (this._nestedArray = null);
          }
          function u(e) {
            return (e._nestedArray = null), e;
          }
          (c.fromJSON = function (e, t) {
            return new c(e, t.options).addJSON(t.nested);
          }),
            (c.arrayToJSON = p),
            (c.isReservedId = function (e, t) {
              if (e) {
                for (var i = 0; i < e.length; ++i)
                  if ('string' != typeof e[i] && e[i][0] <= t && e[i][1] > t)
                    return !0;
              }
              return !1;
            }),
            (c.isReservedName = function (e, t) {
              if (e) {
                for (var i = 0; i < e.length; ++i) if (e[i] === t) return !0;
              }
              return !1;
            }),
            Object.defineProperty(c.prototype, 'nestedArray', {
              get: function () {
                return (
                  this._nestedArray ||
                  (this._nestedArray = d.toArray(this.nested))
                );
              },
            }),
            (c.prototype.toJSON = function (e) {
              return d.toObject([
                'options',
                this.options,
                'nested',
                p(this.nestedArray, e),
              ]);
            }),
            (c.prototype.addJSON = function (e) {
              var t = this;
              if (e)
                for (var i, r = Object.keys(e), d = 0; d < r.length; ++d)
                  (i = e[r[d]]),
                    t.add(
                      (i.fields !== undefined
                        ? s.fromJSON
                        : i.values !== undefined
                          ? o.fromJSON
                          : i.methods !== undefined
                            ? n.fromJSON
                            : i.id !== undefined
                              ? a.fromJSON
                              : c.fromJSON)(r[d], i),
                    );
              return this;
            }),
            (c.prototype.get = function (e) {
              return (this.nested && this.nested[e]) || null;
            }),
            (c.prototype.getEnum = function (e) {
              if (this.nested && this.nested[e] instanceof o)
                return this.nested[e].values;
              throw Error('no such enum: ' + e);
            }),
            (c.prototype.add = function (e) {
              if (
                !(
                  (e instanceof a && e.extend !== undefined) ||
                  e instanceof s ||
                  e instanceof l ||
                  e instanceof o ||
                  e instanceof n ||
                  e instanceof c
                )
              )
                throw TypeError('object must be a valid nested object');
              if (this.nested) {
                var t = this.get(e.name);
                if (t) {
                  if (
                    t instanceof c &&
                    e instanceof c &&
                    !(t instanceof s || t instanceof n)
                  ) {
                    for (var i = t.nestedArray, r = 0; r < i.length; ++r)
                      e.add(i[r]);
                    this.remove(t),
                      this.nested || (this.nested = {}),
                      e.setOptions(t.options, !0);
                  } else
                    throw Error("duplicate name '" + e.name + "' in " + this);
                }
              } else this.nested = {};
              return (this.nested[e.name] = e), e.onAdd(this), u(this);
            }),
            (c.prototype.remove = function (e) {
              if (!(e instanceof r))
                throw TypeError('object must be a ReflectionObject');
              if (e.parent !== this)
                throw Error(e + ' is not a member of ' + this);
              return (
                delete this.nested[e.name],
                Object.keys(this.nested).length || (this.nested = undefined),
                e.onRemove(this),
                u(this)
              );
            }),
            (c.prototype.define = function (e, t) {
              if (d.isString(e)) e = e.split('.');
              else if (!Array.isArray(e)) throw TypeError('illegal path');
              if (e && e.length && '' === e[0])
                throw Error('path must be relative');
              for (var i = this; e.length > 0; ) {
                var s = e.shift();
                if (i.nested && i.nested[s]) {
                  if (!((i = i.nested[s]) instanceof c))
                    throw Error('path conflicts with non-namespace objects');
                } else i.add((i = new c(s)));
              }
              return t && i.addJSON(t), i;
            }),
            (c.prototype.resolveAll = function () {
              for (var e = this.nestedArray, t = 0; t < e.length; )
                e[t] instanceof c ? e[t++].resolveAll() : e[t++].resolve();
              return this.resolve();
            }),
            (c.prototype.lookup = function (e, t, i) {
              if (
                ('boolean' == typeof t
                  ? ((i = t), (t = undefined))
                  : t && !Array.isArray(t) && (t = [t]),
                d.isString(e) && e.length)
              ) {
                if ('.' === e) return this.root;
                e = e.split('.');
              } else if (!e.length) return this;
              if ('' === e[0]) return this.root.lookup(e.slice(1), t);
              var s = this.get(e[0]);
              if (s) {
                if (1 === e.length) {
                  if (!t || t.indexOf(s.constructor) > -1) return s;
                } else if (s instanceof c && (s = s.lookup(e.slice(1), t, !0)))
                  return s;
              } else
                for (var n = 0; n < this.nestedArray.length; ++n)
                  if (
                    this._nestedArray[n] instanceof c &&
                    (s = this._nestedArray[n].lookup(e, t, !0))
                  )
                    return s;
              return null === this.parent || i
                ? null
                : this.parent.lookup(e, t);
            }),
            (c.prototype.lookupType = function (e) {
              var t = this.lookup(e, [s]);
              if (!t) throw Error('no such type: ' + e);
              return t;
            }),
            (c.prototype.lookupEnum = function (e) {
              var t = this.lookup(e, [o]);
              if (!t) throw Error("no such Enum '" + e + "' in " + this);
              return t;
            }),
            (c.prototype.lookupTypeOrEnum = function (e) {
              var t = this.lookup(e, [s, o]);
              if (!t)
                throw Error("no such Type or Enum '" + e + "' in " + this);
              return t;
            }),
            (c.prototype.lookupService = function (e) {
              var t = this.lookup(e, [n]);
              if (!t) throw Error("no such Service '" + e + "' in " + this);
              return t;
            }),
            (c._configure = function (e, t, i) {
              (s = e), (n = t), (o = i);
            });
        },
        {
          15: 15,
          22: 22,
          23: 23,
          33: 33,
        },
      ],
      22: [
        function (e, t, i) {
          (t.exports = o), (o.className = 'ReflectionObject');
          var s,
            n = e(33);
          function o(e, t) {
            if (!n.isString(e)) throw TypeError('name must be a string');
            if (t && !n.isObject(t))
              throw TypeError('options must be an object');
            (this.options = t),
              (this.parsedOptions = null),
              (this.name = e),
              (this.parent = null),
              (this.resolved = !1),
              (this.comment = null),
              (this.filename = null);
          }
          Object.defineProperties(o.prototype, {
            root: {
              get: function () {
                for (var e = this; null !== e.parent; ) e = e.parent;
                return e;
              },
            },
            fullName: {
              get: function () {
                for (var e = [this.name], t = this.parent; t; )
                  e.unshift(t.name), (t = t.parent);
                return e.join('.');
              },
            },
          }),
            (o.prototype.toJSON = function () {
              throw Error();
            }),
            (o.prototype.onAdd = function (e) {
              this.parent && this.parent !== e && this.parent.remove(this),
                (this.parent = e),
                (this.resolved = !1);
              var t = e.root;
              t instanceof s && t._handleAdd(this);
            }),
            (o.prototype.onRemove = function (e) {
              var t = e.root;
              t instanceof s && t._handleRemove(this),
                (this.parent = null),
                (this.resolved = !1);
            }),
            (o.prototype.resolve = function () {
              return (
                this.resolved ||
                  (this.root instanceof s && (this.resolved = !0)),
                this
              );
            }),
            (o.prototype.getOption = function (e) {
              return this.options ? this.options[e] : undefined;
            }),
            (o.prototype.setOption = function (e, t, i) {
              return (
                (i && this.options && this.options[e] !== undefined) ||
                  ((this.options || (this.options = {}))[e] = t),
                this
              );
            }),
            (o.prototype.setParsedOption = function (e, t, i) {
              this.parsedOptions || (this.parsedOptions = []);
              var s = this.parsedOptions;
              if (i) {
                var o = s.find(function (t) {
                  return Object.prototype.hasOwnProperty.call(t, e);
                });
                if (o) {
                  var r = o[e];
                  n.setProperty(r, i, t);
                } else ((o = {})[e] = n.setProperty({}, i, t)), s.push(o);
              } else {
                var a = {};
                (a[e] = t), s.push(a);
              }
              return this;
            }),
            (o.prototype.setOptions = function (e, t) {
              if (e)
                for (var i = Object.keys(e), s = 0; s < i.length; ++s)
                  this.setOption(i[s], e[i[s]], t);
              return this;
            }),
            (o.prototype.toString = function () {
              var e = this.constructor.className,
                t = this.fullName;
              return t.length ? e + ' ' + t : e;
            }),
            (o._configure = function (e) {
              s = e;
            });
        },
        {
          33: 33,
        },
      ],
      23: [
        function (e, t, i) {
          t.exports = r;
          var s = e(22);
          ((r.prototype = Object.create(s.prototype)).constructor =
            r).className = 'OneOf';
          var n = e(15),
            o = e(33);
          function r(e, t, i, n) {
            if (
              (Array.isArray(t) || ((i = t), (t = undefined)),
              s.call(this, e, i),
              !(undefined === t || Array.isArray(t)))
            )
              throw TypeError('fieldNames must be an Array');
            (this.oneof = t || []), (this.fieldsArray = []), (this.comment = n);
          }
          function a(e) {
            if (e.parent)
              for (var t = 0; t < e.fieldsArray.length; ++t)
                e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t]);
          }
          (r.fromJSON = function (e, t) {
            return new r(e, t.oneof, t.options, t.comment);
          }),
            (r.prototype.toJSON = function (e) {
              var t = !!e && !!e.keepComments;
              return o.toObject([
                'options',
                this.options,
                'oneof',
                this.oneof,
                'comment',
                t ? this.comment : undefined,
              ]);
            }),
            (r.prototype.add = function (e) {
              if (!(e instanceof n)) throw TypeError('field must be a Field');
              return (
                e.parent && e.parent !== this.parent && e.parent.remove(e),
                this.oneof.push(e.name),
                this.fieldsArray.push(e),
                (e.partOf = this),
                a(this),
                this
              );
            }),
            (r.prototype.remove = function (e) {
              if (!(e instanceof n)) throw TypeError('field must be a Field');
              var t = this.fieldsArray.indexOf(e);
              if (t < 0) throw Error(e + ' is not a member of ' + this);
              return (
                this.fieldsArray.splice(t, 1),
                (t = this.oneof.indexOf(e.name)) > -1 &&
                  this.oneof.splice(t, 1),
                (e.partOf = null),
                this
              );
            }),
            (r.prototype.onAdd = function (e) {
              s.prototype.onAdd.call(this, e);
              for (var t = this, i = 0; i < this.oneof.length; ++i) {
                var n = e.get(this.oneof[i]);
                n && !n.partOf && ((n.partOf = t), t.fieldsArray.push(n));
              }
              a(this);
            }),
            (r.prototype.onRemove = function (e) {
              for (var t, i = 0; i < this.fieldsArray.length; ++i)
                (t = this.fieldsArray[i]).parent && t.parent.remove(t);
              s.prototype.onRemove.call(this, e);
            }),
            (r.d = function () {
              for (
                var e = Array(arguments.length), t = 0;
                t < arguments.length;

              )
                e[t] = arguments[t++];
              return function (t, i) {
                o.decorateType(t.constructor).add(new r(i, e)),
                  Object.defineProperty(t, i, {
                    get: o.oneOfGetter(e),
                    set: o.oneOfSetter(e),
                  });
              };
            });
        },
        {
          15: 15,
          22: 22,
          33: 33,
        },
      ],
      24: [
        function (e, t, i) {
          t.exports = d;
          var s,
            n = e(35),
            o = n.LongBits,
            r = n.utf8;
          function a(e, t) {
            return RangeError(
              'index out of range: ' + e.pos + ' + ' + (t || 1) + ' > ' + e.len,
            );
          }
          function d(e) {
            (this.buf = e), (this.pos = 0), (this.len = e.length);
          }
          var l =
              'undefined' != typeof Uint8Array
                ? function (e) {
                    if (e instanceof Uint8Array || Array.isArray(e))
                      return new d(e);
                    throw Error('illegal buffer');
                  }
                : function (e) {
                    if (Array.isArray(e)) return new d(e);
                    throw Error('illegal buffer');
                  },
            p = function () {
              return n.Buffer
                ? function (e) {
                    return (d.create = function (e) {
                      return n.Buffer.isBuffer(e) ? new s(e) : l(e);
                    })(e);
                  }
                : l;
            };
          function c() {
            var e = new o(0, 0),
              t = 0;
            if (this.len - this.pos > 4) {
              for (; t < 4; ++t)
                if (
                  ((e.lo =
                    (e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0),
                  this.buf[this.pos++] < 128)
                )
                  return e;
              if (
                ((e.lo = (e.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
                (e.hi = (e.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
                this.buf[this.pos++] < 128)
              )
                return e;
              t = 0;
            } else {
              for (; t < 3; ++t) {
                if (this.pos >= this.len) throw a(this);
                if (
                  ((e.lo =
                    (e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0),
                  this.buf[this.pos++] < 128)
                )
                  return e;
              }
              return (
                (e.lo =
                  (e.lo | ((127 & this.buf[this.pos++]) << (7 * t))) >>> 0),
                e
              );
            }
            if (this.len - this.pos > 4) {
              for (; t < 5; ++t)
                if (
                  ((e.hi =
                    (e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>> 0),
                  this.buf[this.pos++] < 128)
                )
                  return e;
            } else
              for (; t < 5; ++t) {
                if (this.pos >= this.len) throw a(this);
                if (
                  ((e.hi =
                    (e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>> 0),
                  this.buf[this.pos++] < 128)
                )
                  return e;
              }
            throw Error('invalid varint encoding');
          }
          function u(e, t) {
            return (
              (e[t - 4] |
                (e[t - 3] << 8) |
                (e[t - 2] << 16) |
                (e[t - 1] << 24)) >>>
              0
            );
          }
          function h() {
            if (this.pos + 8 > this.len) throw a(this, 8);
            return new o(
              u(this.buf, (this.pos += 4)),
              u(this.buf, (this.pos += 4)),
            );
          }
          (d.create = p()),
            (d.prototype._slice =
              n.Array.prototype.subarray || n.Array.prototype.slice),
            (d.prototype.uint32 = (function () {
              var e = 0xffffffff;
              return function () {
                if (
                  ((e = (127 & this.buf[this.pos]) >>> 0),
                  this.buf[this.pos++] < 128 ||
                    ((e = (e | ((127 & this.buf[this.pos]) << 7)) >>> 0),
                    this.buf[this.pos++] < 128) ||
                    ((e = (e | ((127 & this.buf[this.pos]) << 14)) >>> 0),
                    this.buf[this.pos++] < 128) ||
                    ((e = (e | ((127 & this.buf[this.pos]) << 21)) >>> 0),
                    this.buf[this.pos++] < 128) ||
                    ((e = (e | ((15 & this.buf[this.pos]) << 28)) >>> 0),
                    this.buf[this.pos++] < 128))
                )
                  return e;
                if ((this.pos += 5) > this.len)
                  throw ((this.pos = this.len), a(this, 10));
                return e;
              };
            })()),
            (d.prototype.int32 = function () {
              return 0 | this.uint32();
            }),
            (d.prototype.sint32 = function () {
              var e = this.uint32();
              return ((e >>> 1) ^ -(1 & e)) | 0;
            }),
            (d.prototype.bool = function () {
              return 0 !== this.uint32();
            }),
            (d.prototype.fixed32 = function () {
              if (this.pos + 4 > this.len) throw a(this, 4);
              return u(this.buf, (this.pos += 4));
            }),
            (d.prototype.sfixed32 = function () {
              if (this.pos + 4 > this.len) throw a(this, 4);
              return 0 | u(this.buf, (this.pos += 4));
            }),
            (d.prototype.float = function () {
              if (this.pos + 4 > this.len) throw a(this, 4);
              var e = n.float.readFloatLE(this.buf, this.pos);
              return (this.pos += 4), e;
            }),
            (d.prototype.double = function () {
              if (this.pos + 8 > this.len) throw a(this, 4);
              var e = n.float.readDoubleLE(this.buf, this.pos);
              return (this.pos += 8), e;
            }),
            (d.prototype.bytes = function () {
              var e = this.uint32(),
                t = this.pos,
                i = this.pos + e;
              if (i > this.len) throw a(this, e);
              return ((this.pos += e), Array.isArray(this.buf))
                ? this.buf.slice(t, i)
                : t === i
                  ? new this.buf.constructor(0)
                  : this._slice.call(this.buf, t, i);
            }),
            (d.prototype.string = function () {
              var e = this.bytes();
              return r.read(e, 0, e.length);
            }),
            (d.prototype.skip = function (e) {
              if ('number' == typeof e) {
                if (this.pos + e > this.len) throw a(this, e);
                this.pos += e;
              } else
                do if (this.pos >= this.len) throw a(this);
                while (128 & this.buf[this.pos++]);
              return this;
            }),
            (d.prototype.skipType = function (e) {
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
                  for (; 4 != (e = 7 & this.uint32()); ) this.skipType(e);
                  break;
                case 5:
                  this.skip(4);
                  break;
                default:
                  throw Error(
                    'invalid wire type ' + e + ' at offset ' + this.pos,
                  );
              }
              return this;
            }),
            (d._configure = function (e) {
              (s = e), (d.create = p()), s._configure();
              var t = n.Long ? 'toLong' : 'toNumber';
              n.merge(d.prototype, {
                int64: function () {
                  return c.call(this)[t](!1).toString();
                },
                uint64: function () {
                  return c.call(this)[t](!0).toString();
                },
                sint64: function () {
                  return c.call(this).zzDecode()[t](!1).toString();
                },
                fixed64: function () {
                  return h.call(this)[t](!0).toString();
                },
                sfixed64: function () {
                  return h.call(this)[t](!1).toString();
                },
              });
            });
        },
        {
          35: 35,
        },
      ],
      25: [
        function (e, t, i) {
          t.exports = o;
          var s = e(24);
          (o.prototype = Object.create(s.prototype)).constructor = o;
          var n = e(35);
          function o(e) {
            s.call(this, e);
          }
          (o._configure = function () {
            n.Buffer && (o.prototype._slice = n.Buffer.prototype.slice);
          }),
            (o.prototype.string = function () {
              var e = this.uint32();
              return this.buf.utf8Slice
                ? this.buf.utf8Slice(
                    this.pos,
                    (this.pos = Math.min(this.pos + e, this.len)),
                  )
                : this.buf.toString(
                    'utf-8',
                    this.pos,
                    (this.pos = Math.min(this.pos + e, this.len)),
                  );
            }),
            o._configure();
        },
        {
          24: 24,
          35: 35,
        },
      ],
      26: [
        function (e, t, i) {
          t.exports = c;
          var s,
            n,
            o,
            r = e(21);
          ((c.prototype = Object.create(r.prototype)).constructor =
            c).className = 'Root';
          var a = e(15),
            d = e(14),
            l = e(23),
            p = e(33);
          function c(e) {
            r.call(this, '', e), (this.deferred = []), (this.files = []);
          }
          function u() {}
          (c.fromJSON = function (e, t) {
            return (
              t || (t = new c()),
              e.options && t.setOptions(e.options),
              t.addJSON(e.nested)
            );
          }),
            (c.prototype.resolvePath = p.path.resolve),
            (c.prototype.fetch = p.fetch),
            (c.prototype.load = function e(t, i, s) {
              'function' == typeof i && ((s = i), (i = undefined));
              var r = this;
              if (!s) return p.asPromise(e, r, t, i);
              var a = s === u;
              function d(e, t) {
                if (s) {
                  var i = s;
                  if (((s = null), a)) throw e;
                  i(e, t);
                }
              }
              function l(e) {
                var t = e.lastIndexOf('google/protobuf/');
                if (t > -1) {
                  var i = e.substring(t);
                  if (i in o) return i;
                }
                return null;
              }
              function c(e, t) {
                try {
                  if (
                    (p.isString(t) &&
                      '{' === t.charAt(0) &&
                      (t = JSON.parse(t)),
                    p.isString(t))
                  ) {
                    n.filename = e;
                    var s,
                      o = n(t, r, i),
                      c = 0;
                    if (o.imports)
                      for (; c < o.imports.length; ++c)
                        (s =
                          l(o.imports[c]) || r.resolvePath(e, o.imports[c])) &&
                          h(s);
                    if (o.weakImports)
                      for (c = 0; c < o.weakImports.length; ++c)
                        (s =
                          l(o.weakImports[c]) ||
                          r.resolvePath(e, o.weakImports[c])) && h(s, !0);
                  } else r.setOptions(t.options).addJSON(t.nested);
                } catch (e) {
                  d(e);
                }
                a || g || d(null, r);
              }
              function h(e, t) {
                if (!(r.files.indexOf(e) > -1)) {
                  if ((r.files.push(e), e in o)) {
                    a
                      ? c(e, o[e])
                      : (++g,
                        setTimeout(function () {
                          --g, c(e, o[e]);
                        }));
                    return;
                  }
                  if (a) {
                    var i;
                    try {
                      i = p.fs.readFileSync(e).toString('utf8');
                    } catch (e) {
                      t || d(e);
                      return;
                    }
                    c(e, i);
                  } else
                    ++g,
                      r.fetch(e, function (i, n) {
                        if ((--g, s)) {
                          if (i) {
                            t ? g || d(null, r) : d(i);
                            return;
                          }
                          c(e, n);
                        }
                      });
                }
              }
              var g = 0;
              p.isString(t) && (t = [t]);
              for (var f, y = 0; y < t.length; ++y)
                (f = r.resolvePath('', t[y])) && h(f);
              return a ? r : (g || d(null, r), undefined);
            }),
            (c.prototype.loadSync = function (e, t) {
              if (!p.isNode) throw Error('not supported');
              return this.load(e, t, u);
            }),
            (c.prototype.resolveAll = function () {
              if (this.deferred.length)
                throw Error(
                  'unresolvable extensions: ' +
                    this.deferred
                      .map(function (e) {
                        return (
                          "'extend " + e.extend + "' in " + e.parent.fullName
                        );
                      })
                      .join(', '),
                );
              return r.prototype.resolveAll.call(this);
            });
          var h = /^[A-Z]/;
          function g(e, t) {
            var i = t.parent.lookup(t.extend);
            if (i) {
              var s = new a(
                t.fullName,
                t.id,
                t.type,
                t.rule,
                undefined,
                t.options,
              );
              return (
                (s.declaringField = t), (t.extensionField = s), i.add(s), !0
              );
            }
            return !1;
          }
          (c.prototype._handleAdd = function (e) {
            if (e instanceof a)
              e.extend === undefined ||
                e.extensionField ||
                g(this, e) ||
                this.deferred.push(e);
            else if (e instanceof d)
              h.test(e.name) && (e.parent[e.name] = e.values);
            else if (!(e instanceof l)) {
              if (e instanceof s)
                for (var t = 0; t < this.deferred.length; )
                  g(this, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
              for (var i = 0; i < e.nestedArray.length; ++i)
                this._handleAdd(e._nestedArray[i]);
              h.test(e.name) && (e.parent[e.name] = e);
            }
          }),
            (c.prototype._handleRemove = function (e) {
              if (e instanceof a) {
                if (e.extend !== undefined) {
                  if (e.extensionField)
                    e.extensionField.parent.remove(e.extensionField),
                      (e.extensionField = null);
                  else {
                    var t = this.deferred.indexOf(e);
                    t > -1 && this.deferred.splice(t, 1);
                  }
                }
              } else if (e instanceof d)
                h.test(e.name) && delete e.parent[e.name];
              else if (e instanceof r) {
                for (var i = 0; i < e.nestedArray.length; ++i)
                  this._handleRemove(e._nestedArray[i]);
                h.test(e.name) && delete e.parent[e.name];
              }
            }),
            (c._configure = function (e, t, i) {
              (s = e), (n = t), (o = i);
            });
        },
        {
          14: 14,
          15: 15,
          21: 21,
          23: 23,
          33: 33,
        },
      ],
      27: [
        function (e, t, i) {
          t.exports = {};
        },
        {},
      ],
      28: [
        function (e, t, i) {
          i.Service = e(29);
        },
        {
          29: 29,
        },
      ],
      29: [
        function (e, t, i) {
          t.exports = n;
          var s = e(35);
          function n(e, t, i) {
            if ('function' != typeof e)
              throw TypeError('rpcImpl must be a function');
            s.EventEmitter.call(this),
              (this.rpcImpl = e),
              (this.requestDelimited = !!t),
              (this.responseDelimited = !!i);
          }
          ((n.prototype = Object.create(s.EventEmitter.prototype)).constructor =
            n),
            (n.prototype.rpcCall = function e(t, i, n, o, r) {
              if (!o) throw TypeError('request must be specified');
              var a = this;
              if (!r) return s.asPromise(e, a, t, i, n, o);
              if (!a.rpcImpl)
                return (
                  setTimeout(function () {
                    r(Error('already ended'));
                  }, 0),
                  undefined
                );
              try {
                return a.rpcImpl(
                  t,
                  i[a.requestDelimited ? 'encodeDelimited' : 'encode'](
                    o,
                  ).finish(),
                  function (e, i) {
                    if (e) return a.emit('error', e, t), r(e);
                    if (null === i) return a.end(!0), undefined;
                    if (!(i instanceof n))
                      try {
                        i =
                          n[a.responseDelimited ? 'decodeDelimited' : 'decode'](
                            i,
                          );
                      } catch (e) {
                        return a.emit('error', e, t), r(e);
                      }
                    return a.emit('data', i, t), r(null, i);
                  },
                );
              } catch (e) {
                return (
                  a.emit('error', e, t),
                  setTimeout(function () {
                    r(e);
                  }, 0),
                  undefined
                );
              }
            }),
            (n.prototype.end = function (e) {
              return (
                this.rpcImpl &&
                  (e || this.rpcImpl(null, null, null),
                  (this.rpcImpl = null),
                  this.emit('end').off()),
                this
              );
            });
        },
        {
          35: 35,
        },
      ],
      30: [
        function (e, t, i) {
          t.exports = a;
          var s = e(21);
          ((a.prototype = Object.create(s.prototype)).constructor =
            a).className = 'Service';
          var n = e(20),
            o = e(33),
            r = e(28);
          function a(e, t) {
            s.call(this, e, t),
              (this.methods = {}),
              (this._methodsArray = null);
          }
          function d(e) {
            return (e._methodsArray = null), e;
          }
          (a.fromJSON = function (e, t) {
            var i = new a(e, t.options);
            if (t.methods)
              for (var s = Object.keys(t.methods), o = 0; o < s.length; ++o)
                i.add(n.fromJSON(s[o], t.methods[s[o]]));
            return t.nested && i.addJSON(t.nested), (i.comment = t.comment), i;
          }),
            (a.prototype.toJSON = function (e) {
              var t = s.prototype.toJSON.call(this, e),
                i = !!e && !!e.keepComments;
              return o.toObject([
                'options',
                (t && t.options) || undefined,
                'methods',
                s.arrayToJSON(this.methodsArray, e) || {},
                'nested',
                (t && t.nested) || undefined,
                'comment',
                i ? this.comment : undefined,
              ]);
            }),
            Object.defineProperty(a.prototype, 'methodsArray', {
              get: function () {
                return (
                  this._methodsArray ||
                  (this._methodsArray = o.toArray(this.methods))
                );
              },
            }),
            (a.prototype.get = function (e) {
              return this.methods[e] || s.prototype.get.call(this, e);
            }),
            (a.prototype.resolveAll = function () {
              for (var e = this.methodsArray, t = 0; t < e.length; ++t)
                e[t].resolve();
              return s.prototype.resolve.call(this);
            }),
            (a.prototype.add = function (e) {
              if (this.get(e.name))
                throw Error("duplicate name '" + e.name + "' in " + this);
              return e instanceof n
                ? ((this.methods[e.name] = e), (e.parent = this), d(this))
                : s.prototype.add.call(this, e);
            }),
            (a.prototype.remove = function (e) {
              if (e instanceof n) {
                if (this.methods[e.name] !== e)
                  throw Error(e + ' is not a member of ' + this);
                return delete this.methods[e.name], (e.parent = null), d(this);
              }
              return s.prototype.remove.call(this, e);
            }),
            (a.prototype.create = function (e, t, i) {
              for (
                var s, n = new r.Service(e, t, i), a = 0;
                a < this.methodsArray.length;
                ++a
              ) {
                var d = o
                  .lcFirst((s = this._methodsArray[a]).resolve().name)
                  .replace(/[^$\w_]/g, '');
                n[d] = o.codegen(
                  ['r', 'c'],
                  o.isReserved(d) ? d + '_' : d,
                )('return this.rpcCall(m,q,s,r,c)')({
                  m: s,
                  q: s.resolvedRequestType.ctor,
                  s: s.resolvedResponseType.ctor,
                });
              }
              return n;
            });
        },
        {
          20: 20,
          21: 21,
          28: 28,
          33: 33,
        },
      ],
      31: [
        function (e, t, i) {
          t.exports = m;
          var s = e(21);
          ((m.prototype = Object.create(s.prototype)).constructor =
            m).className = 'Type';
          var n = e(14),
            o = e(23),
            r = e(15),
            a = e(18),
            d = e(30),
            l = e(19),
            p = e(24),
            c = e(38),
            u = e(33),
            h = e(13),
            g = e(12),
            f = e(36),
            y = e(11),
            _ = e(37);
          function m(e, t) {
            s.call(this, e, t),
              (this.fields = {}),
              (this.oneofs = undefined),
              (this.extensions = undefined),
              (this.reserved = undefined),
              (this.group = undefined),
              (this._fieldsById = null),
              (this._fieldsArray = null),
              (this._oneofsArray = null),
              (this._ctor = null);
          }
          function v(e) {
            return (
              (e._fieldsById = e._fieldsArray = e._oneofsArray = null),
              delete e.encode,
              delete e.decode,
              delete e.verify,
              e
            );
          }
          Object.defineProperties(m.prototype, {
            fieldsById: {
              get: function () {
                if (this._fieldsById) return this._fieldsById;
                this._fieldsById = {};
                for (
                  var e = Object.keys(this.fields), t = 0;
                  t < e.length;
                  ++t
                ) {
                  var i = this.fields[e[t]],
                    s = i.id;
                  if (this._fieldsById[s])
                    throw Error('duplicate id ' + s + ' in ' + this);
                  this._fieldsById[s] = i;
                }
                return this._fieldsById;
              },
            },
            fieldsArray: {
              get: function () {
                return (
                  this._fieldsArray ||
                  (this._fieldsArray = u.toArray(this.fields))
                );
              },
            },
            oneofsArray: {
              get: function () {
                return (
                  this._oneofsArray ||
                  (this._oneofsArray = u.toArray(this.oneofs))
                );
              },
            },
            ctor: {
              get: function () {
                return (
                  this._ctor || (this.ctor = m.generateConstructor(this)())
                );
              },
              set: function (e) {
                var t = e.prototype;
                t instanceof l ||
                  (((e.prototype = new l()).constructor = e),
                  u.merge(e.prototype, t)),
                  (e.$type = e.prototype.$type = this),
                  u.merge(e, l, !0),
                  (this._ctor = e);
                for (var i = 0; i < this.fieldsArray.length; ++i)
                  this._fieldsArray[i].resolve();
                var s = {};
                for (i = 0; i < this.oneofsArray.length; ++i)
                  s[this._oneofsArray[i].resolve().name] = {
                    get: u.oneOfGetter(this._oneofsArray[i].oneof),
                    set: u.oneOfSetter(this._oneofsArray[i].oneof),
                  };
                i && Object.defineProperties(e.prototype, s);
              },
            },
          }),
            (m.generateConstructor = function (e) {
              for (
                var t, i = u.codegen(['p'], e.name), s = 0;
                s < e.fieldsArray.length;
                ++s
              )
                (t = e._fieldsArray[s]).map
                  ? i('this%s={}', u.safeProp(t.name))
                  : t.repeated && i('this%s=[]', u.safeProp(t.name));
              return i(
                'if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)',
              )('this[ks[i]]=p[ks[i]]');
            }),
            (m.fromJSON = function (e, t) {
              var i = new m(e, t.options);
              (i.extensions = t.extensions), (i.reserved = t.reserved);
              for (var l = Object.keys(t.fields), p = 0; p < l.length; ++p)
                i.add(
                  (void 0 !== t.fields[l[p]].keyType ? a.fromJSON : r.fromJSON)(
                    l[p],
                    t.fields[l[p]],
                  ),
                );
              if (t.oneofs)
                for (l = Object.keys(t.oneofs), p = 0; p < l.length; ++p)
                  i.add(o.fromJSON(l[p], t.oneofs[l[p]]));
              if (t.nested)
                for (l = Object.keys(t.nested), p = 0; p < l.length; ++p) {
                  var c = t.nested[l[p]];
                  i.add(
                    (c.id !== undefined
                      ? r.fromJSON
                      : c.fields !== undefined
                        ? m.fromJSON
                        : c.values !== undefined
                          ? n.fromJSON
                          : c.methods !== undefined
                            ? d.fromJSON
                            : s.fromJSON)(l[p], c),
                  );
                }
              return (
                t.extensions &&
                  t.extensions.length &&
                  (i.extensions = t.extensions),
                t.reserved && t.reserved.length && (i.reserved = t.reserved),
                t.group && (i.group = !0),
                t.comment && (i.comment = t.comment),
                i
              );
            }),
            (m.prototype.toJSON = function (e) {
              var t = s.prototype.toJSON.call(this, e),
                i = !!e && !!e.keepComments;
              return u.toObject([
                'options',
                (t && t.options) || undefined,
                'oneofs',
                s.arrayToJSON(this.oneofsArray, e),
                'fields',
                s.arrayToJSON(
                  this.fieldsArray.filter(function (e) {
                    return !e.declaringField;
                  }),
                  e,
                ) || {},
                'extensions',
                this.extensions && this.extensions.length
                  ? this.extensions
                  : undefined,
                'reserved',
                this.reserved && this.reserved.length
                  ? this.reserved
                  : undefined,
                'group',
                this.group || undefined,
                'nested',
                (t && t.nested) || undefined,
                'comment',
                i ? this.comment : undefined,
              ]);
            }),
            (m.prototype.resolveAll = function () {
              for (var e = this.fieldsArray, t = 0; t < e.length; )
                e[t++].resolve();
              var i = this.oneofsArray;
              for (t = 0; t < i.length; ) i[t++].resolve();
              return s.prototype.resolveAll.call(this);
            }),
            (m.prototype.get = function (e) {
              return (
                this.fields[e] ||
                (this.oneofs && this.oneofs[e]) ||
                (this.nested && this.nested[e]) ||
                null
              );
            }),
            (m.prototype.add = function (e) {
              if (this.get(e.name))
                throw Error("duplicate name '" + e.name + "' in " + this);
              if (e instanceof r && e.extend === undefined) {
                if (
                  this._fieldsById
                    ? this._fieldsById[e.id]
                    : this.fieldsById[e.id]
                )
                  throw Error('duplicate id ' + e.id + ' in ' + this);
                if (this.isReservedId(e.id))
                  throw Error('id ' + e.id + ' is reserved in ' + this);
                if (this.isReservedName(e.name))
                  throw Error("name '" + e.name + "' is reserved in " + this);
                return (
                  e.parent && e.parent.remove(e),
                  (this.fields[e.name] = e),
                  (e.message = this),
                  e.onAdd(this),
                  v(this)
                );
              }
              return e instanceof o
                ? (this.oneofs || (this.oneofs = {}),
                  (this.oneofs[e.name] = e),
                  e.onAdd(this),
                  v(this))
                : s.prototype.add.call(this, e);
            }),
            (m.prototype.remove = function (e) {
              if (e instanceof r && e.extend === undefined) {
                if (!this.fields || this.fields[e.name] !== e)
                  throw Error(e + ' is not a member of ' + this);
                return (
                  delete this.fields[e.name],
                  (e.parent = null),
                  e.onRemove(this),
                  v(this)
                );
              }
              if (e instanceof o) {
                if (!this.oneofs || this.oneofs[e.name] !== e)
                  throw Error(e + ' is not a member of ' + this);
                return (
                  delete this.oneofs[e.name],
                  (e.parent = null),
                  e.onRemove(this),
                  v(this)
                );
              }
              return s.prototype.remove.call(this, e);
            }),
            (m.prototype.isReservedId = function (e) {
              return s.isReservedId(this.reserved, e);
            }),
            (m.prototype.isReservedName = function (e) {
              return s.isReservedName(this.reserved, e);
            }),
            (m.prototype.create = function (e) {
              return new this.ctor(e);
            }),
            (m.prototype.setup = function () {
              for (
                var e = this.fullName, t = [], i = 0;
                i < this.fieldsArray.length;
                ++i
              )
                t.push(this._fieldsArray[i].resolve().resolvedType);
              (this.encode = h(this)({
                Writer: c,
                types: t,
                util: u,
              })),
                (this.decode = g(this)({
                  Reader: p,
                  types: t,
                  util: u,
                })),
                (this.verify = f(this)({
                  types: t,
                  util: u,
                })),
                (this.fromObject = y.fromObject(this)({
                  types: t,
                  util: u,
                })),
                (this.toObject = y.toObject(this)({
                  types: t,
                  util: u,
                }));
              var s = _[e];
              if (s) {
                var n = Object.create(this);
                (n.fromObject = this.fromObject),
                  (this.fromObject = s.fromObject.bind(n)),
                  (n.toObject = this.toObject),
                  (this.toObject = s.toObject.bind(n));
              }
              return this;
            }),
            (m.prototype.encode = function (e, t) {
              return this.setup().encode(e, t);
            }),
            (m.prototype.encodeDelimited = function (e, t) {
              return this.encode(e, t && t.len ? t.fork() : t).ldelim();
            }),
            (m.prototype.decode = function (e, t) {
              return this.setup().decode(e, t);
            }),
            (m.prototype.decodeDelimited = function (e) {
              return (
                e instanceof p || (e = p.create(e)), this.decode(e, e.uint32())
              );
            }),
            (m.prototype.verify = function (e) {
              return this.setup().verify(e);
            }),
            (m.prototype.fromObject = function (e) {
              return this.setup().fromObject(e);
            }),
            (m.prototype.toObject = function (e, t) {
              return this.setup().toObject(e, t);
            }),
            (m.d = function (e) {
              return function (t) {
                u.decorateType(t, e);
              };
            });
        },
        {
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
          38: 38,
        },
      ],
      32: [
        function (e, t, i) {
          var s = i,
            n = e(33),
            o = [
              'double',
              'float',
              'int32',
              'uint32',
              'sint32',
              'fixed32',
              'sfixed32',
              'int64',
              'uint64',
              'sint64',
              'fixed64',
              'sfixed64',
              'bool',
              'string',
              'bytes',
            ];
          function r(e, t) {
            var i = 0,
              s = {};
            for (t |= 0; i < e.length; ) s[o[i + t]] = e[i++];
            return s;
          }
          (s.basic = r([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2])),
            (s.defaults = r([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              !1,
              '',
              n.emptyArray,
              null,
            ])),
            (s.long = r([0, 0, 0, 1, 1], 7)),
            (s.mapKey = r([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2)),
            (s.packed = r([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]));
        },
        {
          33: 33,
        },
      ],
      33: [
        function (e, t, i) {
          var s,
            n,
            o = (t.exports = e(35)),
            r = e(27);
          (o.codegen = e(3)),
            (o.fetch = e(5)),
            (o.path = e(8)),
            (o.fs = o.inquire('fs')),
            (o.toArray = function (e) {
              if (e) {
                for (
                  var t = Object.keys(e), i = Array(t.length), s = 0;
                  s < t.length;

                )
                  i[s] = e[t[s++]];
                return i;
              }
              return [];
            }),
            (o.toObject = function (e) {
              for (var t = {}, i = 0; i < e.length; ) {
                var s = e[i++],
                  n = e[i++];
                undefined !== n && (t[s] = n);
              }
              return t;
            });
          var a = /\\/g,
            d = /"/g;
          (o.isReserved = function (e) {
            return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(
              e,
            );
          }),
            (o.safeProp = function (e) {
              return !/^[$\w_]+$/.test(e) || o.isReserved(e)
                ? '["' + e.replace(a, '\\\\').replace(d, '\\"') + '"]'
                : '.' + e;
            }),
            (o.ucFirst = function (e) {
              return e.charAt(0).toUpperCase() + e.substring(1);
            });
          var l = /_([a-z])/g;
          (o.camelCase = function (e) {
            return (
              e.substring(0, 1) +
              e.substring(1).replace(l, function (e, t) {
                return t.toUpperCase();
              })
            );
          }),
            (o.compareFieldsById = function (e, t) {
              return e.id - t.id;
            }),
            (o.decorateType = function (t, i) {
              if (t.$type)
                return (
                  i &&
                    t.$type.name !== i &&
                    (o.decorateRoot.remove(t.$type),
                    (t.$type.name = i),
                    o.decorateRoot.add(t.$type)),
                  t.$type
                );
              s || (s = e(31));
              var n = new s(i || t.name);
              return (
                o.decorateRoot.add(n),
                (n.ctor = t),
                Object.defineProperty(t, '$type', {
                  value: n,
                  enumerable: !1,
                }),
                Object.defineProperty(t.prototype, '$type', {
                  value: n,
                  enumerable: !1,
                }),
                n
              );
            });
          var p = 0;
          (o.decorateEnum = function (t) {
            if (t.$type) return t.$type;
            n || (n = e(14));
            var i = new n('Enum' + p++, t);
            return (
              o.decorateRoot.add(i),
              Object.defineProperty(t, '$type', {
                value: i,
                enumerable: !1,
              }),
              i
            );
          }),
            (o.setProperty = function (e, t, i) {
              function s(e, t, i) {
                var n = t.shift();
                if ('__proto__' === n) return e;
                if (t.length > 0) e[n] = s(e[n] || {}, t, i);
                else {
                  var o = e[n];
                  o && (i = [].concat(o).concat(i)), (e[n] = i);
                }
                return e;
              }
              if ('object' != typeof e)
                throw TypeError('dst must be an object');
              if (!t) throw TypeError('path must be specified');
              return s(e, (t = t.split('.')), i);
            }),
            Object.defineProperty(o, 'decorateRoot', {
              get: function () {
                return r.decorated || (r.decorated = new (e(26))());
              },
            });
        },
        {
          14: 14,
          26: 26,
          27: 27,
          3: 3,
          31: 31,
          35: 35,
          5: 5,
          8: 8,
        },
      ],
      34: [
        function (e, t, i) {
          t.exports = n;
          var s = e(35);
          function n(e, t) {
            (this.lo = e >>> 0), (this.hi = t >>> 0);
          }
          var o = (n.zero = new n(0, 0));
          (o.toNumber = function () {
            return 0;
          }),
            (o.zzEncode = o.zzDecode =
              function () {
                return this;
              }),
            (o.length = function () {
              return 1;
            });
          var r = (n.zeroHash = '\0\0\0\0\0\0\0\0');
          (n.fromNumber = function (e) {
            if (0 === e) return o;
            var t = e < 0;
            t && (e = -e);
            var i = e >>> 0,
              s = ((e - i) / 0x100000000) >>> 0;
            return (
              t &&
                ((s = ~s >>> 0),
                (i = ~i >>> 0),
                ++i > 0xffffffff && ((i = 0), ++s > 0xffffffff && (s = 0))),
              new n(i, s)
            );
          }),
            (n.from = function (e) {
              if ('number' == typeof e) return n.fromNumber(e);
              if (s.isString(e)) {
                if (!s.Long) return n.fromNumber(parseInt(e, 10));
                e = s.Long.fromString(e);
              }
              return e.low || e.high ? new n(e.low >>> 0, e.high >>> 0) : o;
            }),
            (n.prototype.toNumber = function (e) {
              if (!e && this.hi >>> 31) {
                var t = (~this.lo + 1) >>> 0,
                  i = ~this.hi >>> 0;
                return t || (i = (i + 1) >>> 0), -(t + 0x100000000 * i);
              }
              return this.lo + 0x100000000 * this.hi;
            }),
            (n.prototype.toLong = function (e) {
              return s.Long
                ? new s.Long(0 | this.lo, 0 | this.hi, !!e)
                : {
                    low: 0 | this.lo,
                    high: 0 | this.hi,
                    unsigned: !!e,
                  };
            });
          var a = String.prototype.charCodeAt;
          (n.fromHash = function (e) {
            return e === r
              ? o
              : new n(
                  (a.call(e, 0) |
                    (a.call(e, 1) << 8) |
                    (a.call(e, 2) << 16) |
                    (a.call(e, 3) << 24)) >>>
                    0,
                  (a.call(e, 4) |
                    (a.call(e, 5) << 8) |
                    (a.call(e, 6) << 16) |
                    (a.call(e, 7) << 24)) >>>
                    0,
                );
          }),
            (n.prototype.toHash = function () {
              return String.fromCharCode(
                255 & this.lo,
                (this.lo >>> 8) & 255,
                (this.lo >>> 16) & 255,
                this.lo >>> 24,
                255 & this.hi,
                (this.hi >>> 8) & 255,
                (this.hi >>> 16) & 255,
                this.hi >>> 24,
              );
            }),
            (n.prototype.zzEncode = function () {
              var e = this.hi >> 31;
              return (
                (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ e) >>> 0),
                (this.lo = ((this.lo << 1) ^ e) >>> 0),
                this
              );
            }),
            (n.prototype.zzDecode = function () {
              var e = -(1 & this.lo);
              return (
                (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ e) >>> 0),
                (this.hi = ((this.hi >>> 1) ^ e) >>> 0),
                this
              );
            }),
            (n.prototype.length = function () {
              var e = this.lo,
                t = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
                i = this.hi >>> 24;
              return 0 === i
                ? 0 === t
                  ? e < 16384
                    ? e < 128
                      ? 1
                      : 2
                    : e < 2097152
                      ? 3
                      : 4
                  : t < 16384
                    ? t < 128
                      ? 5
                      : 6
                    : t < 2097152
                      ? 7
                      : 8
                : i < 128
                  ? 9
                  : 10;
            });
        },
        {
          35: 35,
        },
      ],
      35: [
        function (e, t, i) {
          var s = i;
          function n(e, t, i) {
            for (var s = Object.keys(t), n = 0; n < s.length; ++n)
              (e[s[n]] !== undefined && i) || (e[s[n]] = t[s[n]]);
            return e;
          }
          function o(e) {
            function t(e, i) {
              if (!(this instanceof t)) return new t(e, i);
              Object.defineProperty(this, 'message', {
                get: function () {
                  return e;
                },
              }),
                Error.captureStackTrace
                  ? Error.captureStackTrace(this, t)
                  : Object.defineProperty(this, 'stack', {
                      value: Error().stack || '',
                    }),
                i && n(this, i);
            }
            return (
              (t.prototype = Object.create(Error.prototype, {
                constructor: {
                  value: t,
                  writable: !0,
                  enumerable: !1,
                  configurable: !0,
                },
                name: {
                  get: () => e,
                  set: undefined,
                  enumerable: !1,
                  configurable: !0,
                },
                toString: {
                  value() {
                    return this.name + ': ' + this.message;
                  },
                  writable: !0,
                  enumerable: !1,
                  configurable: !0,
                },
              })),
              t
            );
          }
          (s.asPromise = e(1)),
            (s.base64 = e(2)),
            (s.EventEmitter = e(4)),
            (s.float = e(6)),
            (s.inquire = e(7)),
            (s.utf8 = e(10)),
            (s.pool = e(9)),
            (s.LongBits = e(34)),
            (s.isNode = false),
            (s.global = window),
            (s.emptyArray = Object.freeze ? Object.freeze([]) : []),
            (s.emptyObject = Object.freeze ? Object.freeze({}) : {}),
            (s.isInteger =
              Number.isInteger ||
              function (e) {
                return (
                  'number' == typeof e && isFinite(e) && Math.floor(e) === e
                );
              }),
            (s.isString = function (e) {
              return 'string' == typeof e || e instanceof String;
            }),
            (s.isObject = function (e) {
              return e && 'object' == typeof e;
            }),
            (s.isset = s.isSet =
              function (e, t) {
                var i = e[t];
                return (
                  !!(null != i && e.hasOwnProperty(t)) &&
                  ('object' != typeof i ||
                    (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
                );
              }),
            (s.Buffer = (function () {
              try {
                var e = s.inquire('buffer').Buffer;
                return e.prototype.utf8Write ? e : null;
              } catch (e) {
                return null;
              }
            })()),
            (s._Buffer_from = null),
            (s._Buffer_allocUnsafe = null),
            (s.newBuffer = function (e) {
              return 'number' == typeof e
                ? s.Buffer
                  ? s._Buffer_allocUnsafe(e)
                  : new s.Array(e)
                : s.Buffer
                  ? s._Buffer_from(e)
                  : 'undefined' == typeof Uint8Array
                    ? e
                    : new Uint8Array(e);
            }),
            (s.Array = 'undefined' != typeof Uint8Array ? Uint8Array : Array),
            (s.Long =
              (s.global.dcodeIO && s.global.dcodeIO.Long) ||
              s.global.Long ||
              s.inquire('long')),
            (s.key2Re = /^true|false|0|1$/),
            (s.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
            (s.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
            (s.longToHash = function (e) {
              return e ? s.LongBits.from(e).toHash() : s.LongBits.zeroHash;
            }),
            (s.longFromHash = function (e, t) {
              var i = s.LongBits.fromHash(e);
              return s.Long ? s.Long.fromBits(i.lo, i.hi, t) : i.toNumber(!!t);
            }),
            (s.merge = n),
            (s.lcFirst = function (e) {
              return e.charAt(0).toLowerCase() + e.substring(1);
            }),
            (s.newError = o),
            (s.ProtocolError = o('ProtocolError')),
            (s.oneOfGetter = function (e) {
              for (var t = {}, i = 0; i < e.length; ++i) t[e[i]] = 1;
              return function () {
                for (var e = Object.keys(this), i = e.length - 1; i > -1; --i)
                  if (
                    1 === t[e[i]] &&
                    this[e[i]] !== undefined &&
                    null !== this[e[i]]
                  )
                    return e[i];
              };
            }),
            (s.oneOfSetter = function (e) {
              return function (t) {
                for (var i = 0; i < e.length; ++i)
                  e[i] !== t && delete this[e[i]];
              };
            }),
            (s.toJSONOptions = {
              longs: String,
              enums: String,
              bytes: String,
              json: !0,
            }),
            (s._configure = function () {
              var e = s.Buffer;
              if (!e) {
                s._Buffer_from = s._Buffer_allocUnsafe = null;
                return;
              }
              (s._Buffer_from =
                (e.from !== Uint8Array.from && e.from) ||
                function (t, i) {
                  return new e(t, i);
                }),
                (s._Buffer_allocUnsafe =
                  e.allocUnsafe ||
                  function (t) {
                    return new e(t);
                  });
            });
        },
        {
          1: 1,
          10: 10,
          2: 2,
          34: 34,
          4: 4,
          6: 6,
          7: 7,
          9: 9,
        },
      ],
      36: [
        function (e, t, i) {
          t.exports = d;
          var s = e(14),
            n = e(33);
          function o(e, t) {
            return (
              e.name +
              ': ' +
              t +
              (e.repeated && 'array' !== t
                ? '[]'
                : e.map && 'object' !== t
                  ? '{k:' + e.keyType + '}'
                  : '') +
              ' expected'
            );
          }
          function r(e, t, i, n) {
            if (t.resolvedType) {
              if (t.resolvedType instanceof s) {
                e('switch(%s){', n)('default:')('return%j', o(t, 'enum value'));
                for (
                  var r = Object.keys(t.resolvedType.values), a = 0;
                  a < r.length;
                  ++a
                )
                  e('case %i:', t.resolvedType.values[r[a]]);
                e('break')('}');
              } else
                e('{')('var e=types[%i].verify(%s);', i, n)('if(e)')(
                  'return%j+e',
                  t.name + '.',
                )('}');
            } else
              switch (t.type) {
                case 'int32':
                case 'uint32':
                case 'sint32':
                case 'fixed32':
                case 'sfixed32':
                  e('if(!util.isInteger(%s))', n)('return%j', o(t, 'integer'));
                  break;
                case 'int64':
                case 'uint64':
                case 'sint64':
                case 'fixed64':
                case 'sfixed64':
                  e(
                    'if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))',
                    n,
                    n,
                    n,
                    n,
                  )('return%j', o(t, 'integer|Long'));
                  break;
                case 'float':
                case 'double':
                  e('if(typeof %s!=="number")', n)('return%j', o(t, 'number'));
                  break;
                case 'bool':
                  e('if(typeof %s!=="boolean")', n)(
                    'return%j',
                    o(t, 'boolean'),
                  );
                  break;
                case 'string':
                  e('if(!util.isString(%s))', n)('return%j', o(t, 'string'));
                  break;
                case 'bytes':
                  e(
                    'if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',
                    n,
                    n,
                    n,
                  )('return%j', o(t, 'buffer'));
              }
            return e;
          }
          function a(e, t, i) {
            switch (t.keyType) {
              case 'int32':
              case 'uint32':
              case 'sint32':
              case 'fixed32':
              case 'sfixed32':
                e('if(!util.key32Re.test(%s))', i)(
                  'return%j',
                  o(t, 'integer key'),
                );
                break;
              case 'int64':
              case 'uint64':
              case 'sint64':
              case 'fixed64':
              case 'sfixed64':
                e('if(!util.key64Re.test(%s))', i)(
                  'return%j',
                  o(t, 'integer|Long key'),
                );
                break;
              case 'bool':
                e('if(!util.key2Re.test(%s))', i)(
                  'return%j',
                  o(t, 'boolean key'),
                );
            }
            return e;
          }
          function d(e) {
            var t = n.codegen(
                ['m'],
                e.name + '$verify',
              )('if(typeof m!=="object"||m===null)')(
                'return%j',
                'object expected',
              ),
              i = e.oneofsArray,
              s = {};
            i.length && t('var p={}');
            for (var d = 0; d < e.fieldsArray.length; ++d) {
              var l = e._fieldsArray[d].resolve(),
                p = 'm' + n.safeProp(l.name);
              if (
                (l.optional &&
                  t('if(%s!=null&&m.hasOwnProperty(%j)){', p, l.name),
                l.map)
              )
                t('if(!util.isObject(%s))', p)('return%j', o(l, 'object'))(
                  'var k=Object.keys(%s)',
                  p,
                )('for(var i=0;i<k.length;++i){'),
                  a(t, l, 'k[i]'),
                  r(t, l, d, p + '[k[i]]')('}');
              else if (l.repeated)
                t('if(!Array.isArray(%s))', p)('return%j', o(l, 'array'))(
                  'for(var i=0;i<%s.length;++i){',
                  p,
                ),
                  r(t, l, d, p + '[i]')('}');
              else {
                if (l.partOf) {
                  var c = n.safeProp(l.partOf.name);
                  1 === s[l.partOf.name] &&
                    t('if(p%s===1)', c)(
                      'return%j',
                      l.partOf.name + ': multiple values',
                    ),
                    (s[l.partOf.name] = 1),
                    t('p%s=1', c);
                }
                r(t, l, d, p);
              }
              l.optional && t('}');
            }
            return t('return null');
          }
        },
        {
          14: 14,
          33: 33,
        },
      ],
      37: [
        function (e, t, i) {
          var s = i,
            n = e(19);
          s['.google.protobuf.Any'] = {
            fromObject: function (e) {
              if (e && e['@type']) {
                var t = e['@type'].substring(e['@type'].lastIndexOf('/') + 1),
                  i = this.lookup(t);
                if (i) {
                  var s =
                    '.' === e['@type'].charAt(0)
                      ? e['@type'].slice(1)
                      : e['@type'];
                  return (
                    -1 === s.indexOf('/') && (s = '/' + s),
                    this.create({
                      type_url: s,
                      value: i.encode(i.fromObject(e)).finish(),
                    })
                  );
                }
              }
              return this.fromObject(e);
            },
            toObject: function (e, t) {
              var i = 'type.googleapis.com/',
                s = '',
                o = '';
              if (t && t.json && e.type_url && e.value) {
                (o = e.type_url.substring(e.type_url.lastIndexOf('/') + 1)),
                  (s = e.type_url.substring(
                    0,
                    e.type_url.lastIndexOf('/') + 1,
                  ));
                var r = this.lookup(o);
                r && (e = r.decode(e.value));
              }
              if (!(e instanceof this.ctor) && e instanceof n) {
                var a = e.$type.toObject(e, t),
                  d =
                    '.' === e.$type.fullName[0]
                      ? e.$type.fullName.slice(1)
                      : e.$type.fullName;
                return '' === s && (s = i), (o = s + d), (a['@type'] = o), a;
              }
              return this.toObject(e, t);
            },
          };
        },
        {
          19: 19,
        },
      ],
      38: [
        function (e, t, i) {
          t.exports = c;
          var s,
            n = e(35),
            o = n.LongBits,
            r = n.base64,
            a = n.utf8;
          function d(e, t, i) {
            (this.fn = e),
              (this.len = t),
              (this.next = undefined),
              (this.val = i);
          }
          function l() {}
          function p(e) {
            (this.head = e.head),
              (this.tail = e.tail),
              (this.len = e.len),
              (this.next = e.states);
          }
          function c() {
            (this.len = 0),
              (this.head = new d(l, 0, 0)),
              (this.tail = this.head),
              (this.states = null);
          }
          var u = function () {
            return n.Buffer
              ? function () {
                  return (c.create = function () {
                    return new s();
                  })();
                }
              : function () {
                  return new c();
                };
          };
          function h(e, t, i) {
            t[i] = 255 & e;
          }
          function g(e, t, i) {
            for (; e > 127; ) (t[i++] = (127 & e) | 128), (e >>>= 7);
            t[i] = e;
          }
          function f(e, t) {
            (this.len = e), (this.next = undefined), (this.val = t);
          }
          function y(e, t, i) {
            for (; e.hi; )
              (t[i++] = (127 & e.lo) | 128),
                (e.lo = ((e.lo >>> 7) | (e.hi << 25)) >>> 0),
                (e.hi >>>= 7);
            for (; e.lo > 127; )
              (t[i++] = (127 & e.lo) | 128), (e.lo = e.lo >>> 7);
            t[i++] = e.lo;
          }
          function _(e, t, i) {
            (t[i] = 255 & e),
              (t[i + 1] = (e >>> 8) & 255),
              (t[i + 2] = (e >>> 16) & 255),
              (t[i + 3] = e >>> 24);
          }
          (c.create = u()),
            (c.alloc = function (e) {
              return new n.Array(e);
            }),
            n.Array !== Array &&
              (c.alloc = n.pool(c.alloc, n.Array.prototype.subarray)),
            (c.prototype._push = function (e, t, i) {
              return (
                (this.tail = this.tail.next = new d(e, t, i)),
                (this.len += t),
                this
              );
            }),
            (f.prototype = Object.create(d.prototype)),
            (f.prototype.fn = g),
            (c.prototype.uint32 = function (e) {
              return (
                (this.len += (this.tail = this.tail.next =
                  new f(
                    (e >>>= 0) < 128
                      ? 1
                      : e < 16384
                        ? 2
                        : e < 2097152
                          ? 3
                          : e < 0x10000000
                            ? 4
                            : 5,
                    e,
                  )).len),
                this
              );
            }),
            (c.prototype.int32 = function (e) {
              return e < 0
                ? this._push(y, 10, o.fromNumber(e))
                : this.uint32(e);
            }),
            (c.prototype.sint32 = function (e) {
              return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
            }),
            (c.prototype.uint64 = function (e) {
              var t = o.from(e);
              return this._push(y, t.length(), t);
            }),
            (c.prototype.int64 = c.prototype.uint64),
            (c.prototype.sint64 = function (e) {
              var t = o.from(e).zzEncode();
              return this._push(y, t.length(), t);
            }),
            (c.prototype.bool = function (e) {
              return this._push(h, 1, +!!e);
            }),
            (c.prototype.fixed32 = function (e) {
              return this._push(_, 4, e >>> 0);
            }),
            (c.prototype.sfixed32 = c.prototype.fixed32),
            (c.prototype.fixed64 = function (e) {
              var t = o.from(e);
              return this._push(_, 4, t.lo)._push(_, 4, t.hi);
            }),
            (c.prototype.sfixed64 = c.prototype.fixed64),
            (c.prototype.float = function (e) {
              return this._push(n.float.writeFloatLE, 4, e);
            }),
            (c.prototype.double = function (e) {
              return this._push(n.float.writeDoubleLE, 8, e);
            });
          var m = n.Array.prototype.set
            ? function (e, t, i) {
                t.set(e, i);
              }
            : function (e, t, i) {
                for (var s = 0; s < e.length; ++s) t[i + s] = e[s];
              };
          (c.prototype.bytes = function (e) {
            var t = e.length >>> 0;
            if (!t) return this._push(h, 1, 0);
            if (n.isString(e)) {
              var i = c.alloc((t = r.length(e)));
              r.decode(e, i, 0), (e = i);
            }
            return this.uint32(t)._push(m, t, e);
          }),
            (c.prototype.string = function (e) {
              var t = a.length(e);
              return t
                ? this.uint32(t)._push(a.write, t, e)
                : this._push(h, 1, 0);
            }),
            (c.prototype.fork = function () {
              return (
                (this.states = new p(this)),
                (this.head = this.tail = new d(l, 0, 0)),
                (this.len = 0),
                this
              );
            }),
            (c.prototype.reset = function () {
              return (
                this.states
                  ? ((this.head = this.states.head),
                    (this.tail = this.states.tail),
                    (this.len = this.states.len),
                    (this.states = this.states.next))
                  : ((this.head = this.tail = new d(l, 0, 0)), (this.len = 0)),
                this
              );
            }),
            (c.prototype.ldelim = function () {
              var e = this.head,
                t = this.tail,
                i = this.len;
              return (
                this.reset().uint32(i),
                i &&
                  ((this.tail.next = e.next), (this.tail = t), (this.len += i)),
                this
              );
            }),
            (c.prototype.finish = function () {
              for (
                var e = this.head.next,
                  t = this.constructor.alloc(this.len),
                  i = 0;
                e;

              )
                e.fn(e.val, t, i), (i += e.len), (e = e.next);
              return t;
            }),
            (c._configure = function (e) {
              (s = e), (c.create = u()), s._configure();
            });
        },
        {
          35: 35,
        },
      ],
      39: [
        function (e, t, i) {
          t.exports = o;
          var s = e(38);
          (o.prototype = Object.create(s.prototype)).constructor = o;
          var n = e(35);
          function o() {
            s.call(this);
          }
          function r(e, t, i) {
            e.length < 40
              ? n.utf8.write(e, t, i)
              : t.utf8Write
                ? t.utf8Write(e, i)
                : t.write(e, i);
          }
          (o._configure = function () {
            (o.alloc = n._Buffer_allocUnsafe),
              (o.writeBytesBuffer =
                n.Buffer &&
                n.Buffer.prototype instanceof Uint8Array &&
                'set' === n.Buffer.prototype.set.name
                  ? function (e, t, i) {
                      t.set(e, i);
                    }
                  : function (e, t, i) {
                      if (e.copy) e.copy(t, i, 0, e.length);
                      else for (var s = 0; s < e.length; ) t[i++] = e[s++];
                    });
          }),
            (o.prototype.bytes = function (e) {
              n.isString(e) && (e = n._Buffer_from(e, 'base64'));
              var t = e.length >>> 0;
              return (
                this.uint32(t), t && this._push(o.writeBytesBuffer, t, e), this
              );
            }),
            (o.prototype.string = function (e) {
              var t = n.Buffer.byteLength(e);
              return this.uint32(t), t && this._push(r, t, e), this;
            }),
            o._configure();
        },
        {
          35: 35,
          38: 38,
        },
      ],
    },
    {},
    [16],
  );
  return window.protobuf
}

