export function createLong() {
  var t = (function (i) {
    'use strict';
    Object.defineProperty(i, '__esModule', {
      value: !0,
    }),
      (i.default = void 0);
    var t = null;
    try {
      t = new WebAssembly.Instance(
        new WebAssembly.Module(
          new Uint8Array([
            0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127,
            127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1,
            65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95,
            115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95,
            115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95,
            104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1,
            126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
            173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4,
            167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132,
            32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135,
            167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173,
            66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34,
            4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0,
            173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32,
            134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36,
            1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32,
            3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32,
            4, 167, 11,
          ]),
        ),
        {},
      ).exports;
    } catch (i) {}
    function n(i, t, n) {
      (this.low = 0 | i), (this.high = 0 | t), (this.unsigned = !!n);
    }
    function h(i) {
      return !0 === (i && i.__isLong__);
    }
    function s(i) {
      var t = Math.clz32(i & -i);
      return i ? 31 - t : t;
    }
    n.prototype.__isLong__,
      Object.defineProperty(n.prototype, '__isLong__', {
        value: !0,
      }),
      (n.isLong = h);
    var e = {},
      r = {};
    function u(i, t) {
      var n, h, s;
      return t
        ? ((i >>>= 0), (s = 0 <= i && i < 256) && (h = r[i]))
          ? h
          : ((n = g(i, 0, !0)), s && (r[i] = n), n)
        : ((i |= 0), (s = -128 <= i && i < 128) && (h = e[i]))
          ? h
          : ((n = g(i, i < 0 ? -1 : 0, !1)), s && (e[i] = n), n);
    }
    function o(i, t) {
      if (isNaN(i)) return t ? p : m;
      if (t) {
        if (i < 0) return p;
        if (i >= c) return y;
      } else {
        if (i <= -w) return q;
        if (i + 1 >= w) return _;
      }
      return i < 0 ? o(-i, t).neg() : g(i % d | 0, (i / d) | 0, t);
    }
    function g(i, t, h) {
      return new n(i, t, h);
    }
    (n.fromInt = u), (n.fromNumber = o), (n.fromBits = g);
    var f = Math.pow;
    function l(i, t, n) {
      if (0 === i.length) throw Error('empty string');
      if (
        ('number' == typeof t ? ((n = t), (t = !1)) : (t = !!t),
        'NaN' === i ||
          'Infinity' === i ||
          '+Infinity' === i ||
          '-Infinity' === i)
      )
        return t ? p : m;
      if ((n = n || 10) < 2 || 36 < n) throw RangeError('radix');
      if ((h = i.indexOf('-')) > 0) throw Error('interior hyphen');
      if (0 === h) return l(i.substring(1), t, n).neg();
      for (var h, s = o(f(n, 8)), e = m, r = 0; r < i.length; r += 8) {
        var u = Math.min(8, i.length - r),
          g = parseInt(i.substring(r, r + u), n);
        if (u < 8) {
          var a = o(f(n, u));
          e = e.mul(a).add(o(g));
        } else e = (e = e.mul(s)).add(o(g));
      }
      return (e.unsigned = t), e;
    }
    function a(i, t) {
      return 'number' == typeof i
        ? o(i, t)
        : 'string' == typeof i
          ? l(i, t)
          : g(i.low, i.high, 'boolean' == typeof t ? t : i.unsigned);
    }
    (n.fromString = l), (n.fromValue = a);
    var d = 0x100000000,
      c = 0xffffffffffffffff,
      w = 0x8000000000000000,
      v = u(0x1000000),
      m = u(0);
    n.ZERO = m;
    var p = u(0, !0);
    n.UZERO = p;
    var N = u(1);
    n.ONE = N;
    var b = u(1, !0);
    n.UONE = b;
    var E = u(-1);
    n.NEG_ONE = E;
    var _ = g(-1, 0x7fffffff, !1);
    n.MAX_VALUE = _;
    var y = g(-1, -1, !0);
    n.MAX_UNSIGNED_VALUE = y;
    var q = g(0, -0x80000000, !1);
    n.MIN_VALUE = q;
    var B = n.prototype;
    return (
      (B.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
      }),
      (B.toNumber = function () {
        return this.unsigned
          ? (this.high >>> 0) * d + (this.low >>> 0)
          : this.high * d + (this.low >>> 0);
      }),
      (B.toString = function (i) {
        if ((i = i || 10) < 2 || 36 < i) throw RangeError('radix');
        if (this.isZero()) return '0';
        if (this.isNegative()) {
          if (!this.eq(q)) return '-' + this.neg().toString(i);
          var t = o(i),
            n = this.div(t),
            h = n.mul(t).sub(this);
          return n.toString(i) + h.toInt().toString(i);
        }
        for (var s = o(f(i, 6), this.unsigned), e = this, r = ''; ; ) {
          var u = e.div(s),
            g = (e.sub(u.mul(s)).toInt() >>> 0).toString(i);
          if ((e = u).isZero()) return g + r;
          for (; g.length < 6; ) g = '0' + g;
          r = '' + g + r;
        }
      }),
      (B.getHighBits = function () {
        return this.high;
      }),
      (B.getHighBitsUnsigned = function () {
        return this.high >>> 0;
      }),
      (B.getLowBits = function () {
        return this.low;
      }),
      (B.getLowBitsUnsigned = function () {
        return this.low >>> 0;
      }),
      (B.getNumBitsAbs = function () {
        if (this.isNegative())
          return this.eq(q) ? 64 : this.neg().getNumBitsAbs();
        for (
          var i = 0 != this.high ? this.high : this.low, t = 31;
          t > 0 && (i & (1 << t)) == 0;
          t--
        );
        return 0 != this.high ? t + 33 : t + 1;
      }),
      (B.isZero = function () {
        return 0 === this.high && 0 === this.low;
      }),
      (B.eqz = B.isZero),
      (B.isNegative = function () {
        return !this.unsigned && this.high < 0;
      }),
      (B.isPositive = function () {
        return this.unsigned || this.high >= 0;
      }),
      (B.isOdd = function () {
        return (1 & this.low) == 1;
      }),
      (B.isEven = function () {
        return (1 & this.low) == 0;
      }),
      (B.equals = function (i) {
        return (
          h(i) || (i = a(i)),
          (this.unsigned === i.unsigned ||
            this.high >>> 31 != 1 ||
            i.high >>> 31 != 1) &&
            this.high === i.high &&
            this.low === i.low
        );
      }),
      (B.eq = B.equals),
      (B.notEquals = function (i) {
        return !this.eq(i);
      }),
      (B.neq = B.notEquals),
      (B.ne = B.notEquals),
      (B.lessThan = function (i) {
        return 0 > this.comp(i);
      }),
      (B.lt = B.lessThan),
      (B.lessThanOrEqual = function (i) {
        return 0 >= this.comp(i);
      }),
      (B.lte = B.lessThanOrEqual),
      (B.le = B.lessThanOrEqual),
      (B.greaterThan = function (i) {
        return this.comp(i) > 0;
      }),
      (B.gt = B.greaterThan),
      (B.greaterThanOrEqual = function (i) {
        return this.comp(i) >= 0;
      }),
      (B.gte = B.greaterThanOrEqual),
      (B.ge = B.greaterThanOrEqual),
      (B.compare = function (i) {
        if ((h(i) || (i = a(i)), this.eq(i))) return 0;
        var t = this.isNegative(),
          n = i.isNegative();
        return t && !n
          ? -1
          : !t && n
            ? 1
            : this.unsigned
              ? i.high >>> 0 > this.high >>> 0 ||
                (i.high === this.high && i.low >>> 0 > this.low >>> 0)
                ? -1
                : 1
              : this.sub(i).isNegative()
                ? -1
                : 1;
      }),
      (B.comp = B.compare),
      (B.negate = function () {
        return !this.unsigned && this.eq(q) ? q : this.not().add(N);
      }),
      (B.neg = B.negate),
      (B.add = function (i) {
        h(i) || (i = a(i));
        var t,
          n,
          s = this.high >>> 16,
          e = 65535 & this.high,
          r = this.low >>> 16,
          u = 65535 & this.low,
          o = i.high >>> 16,
          f = 65535 & i.high,
          l = i.low >>> 16,
          d = 65535 & i.low,
          c = 0,
          w = 0;
        return (
          (t = 0 + ((n = 0 + (u + d)) >>> 16)),
          (n &= 65535),
          (t += r + l),
          (w += t >>> 16),
          (t &= 65535),
          (w += e + f),
          (c += w >>> 16),
          (w &= 65535),
          (c += s + o),
          g((t << 16) | n, ((c &= 65535) << 16) | w, this.unsigned)
        );
      }),
      (B.subtract = function (i) {
        return h(i) || (i = a(i)), this.add(i.neg());
      }),
      (B.sub = B.subtract),
      (B.multiply = function (i) {
        if (this.isZero()) return this;
        if ((h(i) || (i = a(i)), t))
          return g(
            t.mul(this.low, this.high, i.low, i.high),
            t.get_high(),
            this.unsigned,
          );
        if (i.isZero()) return this.unsigned ? p : m;
        if (this.eq(q)) return i.isOdd() ? q : m;
        if (i.eq(q)) return this.isOdd() ? q : m;
        if (this.isNegative())
          return i.isNegative()
            ? this.neg().mul(i.neg())
            : this.neg().mul(i).neg();
        if (i.isNegative()) return this.mul(i.neg()).neg();
        if (this.lt(v) && i.lt(v))
          return o(this.toNumber() * i.toNumber(), this.unsigned);
        var n,
          s,
          e = this.high >>> 16,
          r = 65535 & this.high,
          u = this.low >>> 16,
          f = 65535 & this.low,
          l = i.high >>> 16,
          d = 65535 & i.high,
          c = i.low >>> 16,
          w = 65535 & i.low,
          N = 0,
          b = 0;
        return (
          (n = 0 + ((s = 0 + f * w) >>> 16)),
          (s &= 65535),
          (n += u * w),
          (b += n >>> 16),
          (n &= 65535),
          (n += f * c),
          (b += n >>> 16),
          (n &= 65535),
          (b += r * w),
          (N += b >>> 16),
          (b &= 65535),
          (b += u * c),
          (N += b >>> 16),
          (b &= 65535),
          (b += f * d),
          (N += b >>> 16),
          (b &= 65535),
          (N += e * w + r * c + u * d + f * l),
          g((n << 16) | s, ((N &= 65535) << 16) | b, this.unsigned)
        );
      }),
      (B.mul = B.multiply),
      (B.divide = function (i) {
        if ((h(i) || (i = a(i)), i.isZero())) throw Error('division by zero');
        if (t) {
          var n, s, e;
          return this.unsigned ||
            -0x80000000 !== this.high ||
            -1 !== i.low ||
            -1 !== i.high
            ? g(
                (this.unsigned ? t.div_u : t.div_s)(
                  this.low,
                  this.high,
                  i.low,
                  i.high,
                ),
                t.get_high(),
                this.unsigned,
              )
            : this;
        }
        if (this.isZero()) return this.unsigned ? p : m;
        if (this.unsigned) {
          if ((i.unsigned || (i = i.toUnsigned()), i.gt(this))) return p;
          if (i.gt(this.shru(1))) return b;
          e = p;
        } else {
          if (this.eq(q))
            return i.eq(N) || i.eq(E)
              ? q
              : i.eq(q)
                ? N
                : (n = this.shr(1).div(i).shl(1)).eq(m)
                  ? i.isNegative()
                    ? N
                    : E
                  : ((s = this.sub(i.mul(n))), (e = n.add(s.div(i))));
          if (i.eq(q)) return this.unsigned ? p : m;
          if (this.isNegative())
            return i.isNegative()
              ? this.neg().div(i.neg())
              : this.neg().div(i).neg();
          if (i.isNegative()) return this.div(i.neg()).neg();
          e = m;
        }
        for (s = this; s.gte(i); ) {
          for (
            var r = Math.ceil(
                Math.log(
                  (n = Math.max(1, Math.floor(s.toNumber() / i.toNumber()))),
                ) / Math.LN2,
              ),
              u = r <= 48 ? 1 : f(2, r - 48),
              l = o(n),
              d = l.mul(i);
            d.isNegative() || d.gt(s);

          )
            (n -= u), (d = (l = o(n, this.unsigned)).mul(i));
          l.isZero() && (l = N), (e = e.add(l)), (s = s.sub(d));
        }
        return e;
      }),
      (B.div = B.divide),
      (B.modulo = function (i) {
        return (h(i) || (i = a(i)), t)
          ? g(
              (this.unsigned ? t.rem_u : t.rem_s)(
                this.low,
                this.high,
                i.low,
                i.high,
              ),
              t.get_high(),
              this.unsigned,
            )
          : this.sub(this.div(i).mul(i));
      }),
      (B.mod = B.modulo),
      (B.rem = B.modulo),
      (B.not = function () {
        return g(~this.low, ~this.high, this.unsigned);
      }),
      (B.countLeadingZeros = function () {
        return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
      }),
      (B.clz = B.countLeadingZeros),
      (B.countTrailingZeros = function () {
        return this.low ? s(this.low) : s(this.high) + 32;
      }),
      (B.ctz = B.countTrailingZeros),
      (B.and = function (i) {
        return (
          h(i) || (i = a(i)),
          g(this.low & i.low, this.high & i.high, this.unsigned)
        );
      }),
      (B.or = function (i) {
        return (
          h(i) || (i = a(i)),
          g(this.low | i.low, this.high | i.high, this.unsigned)
        );
      }),
      (B.xor = function (i) {
        return (
          h(i) || (i = a(i)),
          g(this.low ^ i.low, this.high ^ i.high, this.unsigned)
        );
      }),
      (B.shiftLeft = function (i) {
        return (h(i) && (i = i.toInt()), 0 == (i &= 63))
          ? this
          : i < 32
            ? g(
                this.low << i,
                (this.high << i) | (this.low >>> (32 - i)),
                this.unsigned,
              )
            : g(0, this.low << (i - 32), this.unsigned);
      }),
      (B.shl = B.shiftLeft),
      (B.shiftRight = function (i) {
        return (h(i) && (i = i.toInt()), 0 == (i &= 63))
          ? this
          : i < 32
            ? g(
                (this.low >>> i) | (this.high << (32 - i)),
                this.high >> i,
                this.unsigned,
              )
            : g(this.high >> (i - 32), this.high >= 0 ? 0 : -1, this.unsigned);
      }),
      (B.shr = B.shiftRight),
      (B.shiftRightUnsigned = function (i) {
        return (h(i) && (i = i.toInt()), 0 == (i &= 63))
          ? this
          : i < 32
            ? g(
                (this.low >>> i) | (this.high << (32 - i)),
                this.high >>> i,
                this.unsigned,
              )
            : 32 === i
              ? g(this.high, 0, this.unsigned)
              : g(this.high >>> (i - 32), 0, this.unsigned);
      }),
      (B.shru = B.shiftRightUnsigned),
      (B.shr_u = B.shiftRightUnsigned),
      (B.rotateLeft = function (i) {
        var t;
        return (h(i) && (i = i.toInt()), 0 == (i &= 63))
          ? this
          : 32 === i
            ? g(this.high, this.low, this.unsigned)
            : i < 32
              ? ((t = 32 - i),
                g(
                  (this.low << i) | (this.high >>> t),
                  (this.high << i) | (this.low >>> t),
                  this.unsigned,
                ))
              : ((i -= 32),
                (t = 32 - i),
                g(
                  (this.high << i) | (this.low >>> t),
                  (this.low << i) | (this.high >>> t),
                  this.unsigned,
                ));
      }),
      (B.rotl = B.rotateLeft),
      (B.rotateRight = function (i) {
        var t;
        return (h(i) && (i = i.toInt()), 0 == (i &= 63))
          ? this
          : 32 === i
            ? g(this.high, this.low, this.unsigned)
            : i < 32
              ? ((t = 32 - i),
                g(
                  (this.high << t) | (this.low >>> i),
                  (this.low << t) | (this.high >>> i),
                  this.unsigned,
                ))
              : ((i -= 32),
                (t = 32 - i),
                g(
                  (this.low << t) | (this.high >>> i),
                  (this.high << t) | (this.low >>> i),
                  this.unsigned,
                ));
      }),
      (B.rotr = B.rotateRight),
      (B.toSigned = function () {
        return this.unsigned ? g(this.low, this.high, !1) : this;
      }),
      (B.toUnsigned = function () {
        return this.unsigned ? this : g(this.low, this.high, !0);
      }),
      (B.toBytes = function (i) {
        return i ? this.toBytesLE() : this.toBytesBE();
      }),
      (B.toBytesLE = function () {
        var i = this.high,
          t = this.low;
        return [
          255 & t,
          (t >>> 8) & 255,
          (t >>> 16) & 255,
          t >>> 24,
          255 & i,
          (i >>> 8) & 255,
          (i >>> 16) & 255,
          i >>> 24,
        ];
      }),
      (B.toBytesBE = function () {
        var i = this.high,
          t = this.low;
        return [
          i >>> 24,
          (i >>> 16) & 255,
          (i >>> 8) & 255,
          255 & i,
          t >>> 24,
          (t >>> 16) & 255,
          (t >>> 8) & 255,
          255 & t,
        ];
      }),
      (n.fromBytes = function (i, t, h) {
        return h ? n.fromBytesLE(i, t) : n.fromBytesBE(i, t);
      }),
      (n.fromBytesLE = function (i, t) {
        return new n(
          i[0] | (i[1] << 8) | (i[2] << 16) | (i[3] << 24),
          i[4] | (i[5] << 8) | (i[6] << 16) | (i[7] << 24),
          t,
        );
      }),
      (n.fromBytesBE = function (i, t) {
        return new n(
          (i[4] << 24) | (i[5] << 16) | (i[6] << 8) | i[7],
          (i[0] << 24) | (i[1] << 16) | (i[2] << 8) | i[3],
          t,
        );
      }),
      (i.default = n),
      'default' in i ? i.default : i
    );
  })({});
  return t;
}
