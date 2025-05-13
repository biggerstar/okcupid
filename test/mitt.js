export function createMitt() {
  "use strict";
  var t = Object.prototype.hasOwnProperty
    , i = "~";
  function n() {}
  function l(e, t, i) {
      this.fn = e,
      this.context = t,
      this.once = i || !1
  }
  function r(e, t, n, r, o) {
      if ("function" != typeof n)
          throw TypeError("The listener must be a function");
      var s = new l(n,r || e,o)
        , a = i ? i + t : t;
      return e._events[a] ? e._events[a].fn ? e._events[a] = [e._events[a], s] : e._events[a].push(s) : (e._events[a] = s,
      e._eventsCount++),
      e
  }
  function o(e, t) {
      0 == --e._eventsCount ? e._events = new n : delete e._events[t]
  }
  function s() {
      this._events = new n,
      this._eventsCount = 0
  }
  Object.create && (n.prototype = Object.create(null),
  new n().__proto__ || (i = !1)),
  s.prototype.eventNames = function() {
      var e, n, l = [];
      if (0 === this._eventsCount)
          return l;
      for (n in e = this._events)
          t.call(e, n) && l.push(i ? n.slice(1) : n);
      return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(e)) : l
  }
  ,
  s.prototype.listeners = function(e) {
      var t = i ? i + e : e
        , n = this._events[t];
      if (!n)
          return [];
      if (n.fn)
          return [n.fn];
      for (var l = 0, r = n.length, o = Array(r); l < r; l++)
          o[l] = n[l].fn;
      return o
  }
  ,
  s.prototype.listenerCount = function(e) {
      var t = i ? i + e : e
        , n = this._events[t];
      return n ? n.fn ? 1 : n.length : 0
  }
  ,
  s.prototype.emit = function(e, t, n, l, r, o) {
      var s = i ? i + e : e;
      if (!this._events[s])
          return !1;
      var a, u, c = this._events[s], h = arguments.length;
      if (c.fn) {
          switch (c.once && this.removeListener(e, c.fn, void 0, !0),
          h) {
          case 1:
              return c.fn.call(c.context),
              !0;
          case 2:
              return c.fn.call(c.context, t),
              !0;
          case 3:
              return c.fn.call(c.context, t, n),
              !0;
          case 4:
              return c.fn.call(c.context, t, n, l),
              !0;
          case 5:
              return c.fn.call(c.context, t, n, l, r),
              !0;
          case 6:
              return c.fn.call(c.context, t, n, l, r, o),
              !0
          }
          for (u = 1,
          a = Array(h - 1); u < h; u++)
              a[u - 1] = arguments[u];
          c.fn.apply(c.context, a)
      } else {
          var d, v = c.length;
          for (u = 0; u < v; u++)
              switch (c[u].once && this.removeListener(e, c[u].fn, void 0, !0),
              h) {
              case 1:
                  c[u].fn.call(c[u].context);
                  break;
              case 2:
                  c[u].fn.call(c[u].context, t);
                  break;
              case 3:
                  c[u].fn.call(c[u].context, t, n);
                  break;
              case 4:
                  c[u].fn.call(c[u].context, t, n, l);
                  break;
              default:
                  if (!a)
                      for (d = 1,
                      a = Array(h - 1); d < h; d++)
                          a[d - 1] = arguments[d];
                  c[u].fn.apply(c[u].context, a)
              }
      }
      return !0
  }
  ,
  s.prototype.on = function(e, t, i) {
      return r(this, e, t, i, !1)
  }
  ,
  s.prototype.once = function(e, t, i) {
      return r(this, e, t, i, !0)
  }
  ,
  s.prototype.removeListener = function(e, t, n, l) {
      var r = i ? i + e : e;
      if (!this._events[r])
          return this;
      if (!t)
          return o(this, r),
          this;
      var s = this._events[r];
      if (s.fn)
          s.fn !== t || l && !s.once || n && s.context !== n || o(this, r);
      else {
          for (var a = 0, u = [], c = s.length; a < c; a++)
              (s[a].fn !== t || l && !s[a].once || n && s[a].context !== n) && u.push(s[a]);
          u.length ? this._events[r] = 1 === u.length ? u[0] : u : o(this, r)
      }
      return this
  }
  ,
  s.prototype.removeAllListeners = function(e) {
      var t;
      return e ? (t = i ? i + e : e,
      this._events[t] && o(this, t)) : (this._events = new n,
      this._eventsCount = 0),
      this
  }
  ,
  s.prototype.off = s.prototype.removeListener,
  s.prototype.addListener = s.prototype.on,
  s.prefixed = i,
  s.EventEmitter = s

  return new s()
}
