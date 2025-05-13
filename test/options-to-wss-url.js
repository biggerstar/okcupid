export function optionToWssUrl(options) {
  function R() {
    let { DateTimeFormat: e } = Intl,
      t = e();
    return {
      version_code: '180800',
      device_platform: 'web',
      cookie_enabled: String(navigator.cookieEnabled),
      screen_width: '1800',
      screen_height: '1200',
      browser_language: 'en',
      browser_platform: 'MacIntel',
      browser_name: 'Mozilla',
      browser_version:
        '5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0',
      browser_online: String(true),
      tz_name: t.resolvedOptions().timeZone,
    };
  }
  function I(e) {
    return e
      .replace(/[A-Z]/g, (e) => `_${e.toLowerCase()}`)
      .replace(/\s+/g, '_')
      .replace(/[^a-zA-Z0-9_]/g, '')
      .toLowerCase();
  }
  function C(e) {
    let t = Object.keys(e);
    return t.length
      ? t.reduce((t, i) => `${t}${t ? '&' : ''}${I(i)}=${String(e[i])}`, '')
      : '';
  }
  function O(e) {
    let { didRule: t, deviceId: i } = e,
      s = (0, __rest)(e, ['didRule', 'deviceId']),
      o = 3 * !i,
      r = Object.assign(Object.assign(Object.assign({}, R()), s), {
        supWsDsOpt: '1',
        respContentType: 'protobuf',
        didRule: null != t ? t : o,
        deviceId: i,
      });
    for (let e of Object.keys(r))
      (void 0 === r[e] || '' === r[e]) && delete r[e];
    return r;
  }
  function __rest(t, e) {
    var r = {};
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) &&
        0 > e.indexOf(n) &&
        (r[n] = t[n]);
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols)
      for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
        0 > e.indexOf(n[i]) &&
          Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
          (r[n[i]] = t[n[i]]);
    return r;
  }
  function L(e) {
    let { appName: t, didRule: i, routeParamsMap: s, pushServer: o } = e,
      r = (0, __rest)(e, [
        'appName',
        'didRule',
        'routeParamsMap',
        'pushServer',
      ]),
      a = {};
    if (s) for (let [e, t] of Object.entries(s)) a[e] = t;
    let d = C(
      O(
        Object.assign(
          Object.assign(
            Object.assign(
              {
                appName: t,
                didRule: i,
                supWsDsOpt: '1',
                versionCode: '180800',
                updateVersionCode: '2.0.0',
                compress: 'gzip',
              },
              R(),
            ),
            a,
          ),
          r,
        ),
      ),
    );
    return `${o}?${d}`;
  }
  return L(options)
}
