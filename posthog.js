// PostHog client snippet — 共用脚本，所有页面引入
// 启用方法：填入 POSTHOG_KEY 即可（公开 key，可入 git）
// PostHog 项目地址 https://posthog.com → Project settings → Project API Key
(function () {
  window.POSTHOG_KEY = ""; // <-- 在这里填入项目 key（如 'phc_xxxxxxxxxxxxxxxxxxxx'）
  window.POSTHOG_HOST = "https://us.i.posthog.com";

  if (!window.POSTHOG_KEY) {
    // 未配置 key 时 cxTrack 变 no-op，所有页面不会触发 PostHog 请求
    window.cxTrack = function () {};
    return;
  }

  !(function (t, e) { var o, n, p, r; e.__SV || (window.posthog = e, e._i = [], e.init = function (i, s, a) { function g(t, e) { var o = e.split("."); 2 == o.length && (t = t[o[0]], e = o[1]), t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } } (p = t.createElement("script")).type = "text/javascript", p.async = !0, p.src = s.api_host + "/static/array.js", (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r); var u = e; for (void 0 !== a ? u = e[a] = [] : a = "posthog", u.people = u.people || [], u.toString = function (t) { var e = "posthog"; return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e }, u.people.toString = function () { return u.toString(1) + ".people (stub)" }, o = "init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing _calculate_event_properties".split(" "), n = 0; n < o.length; n++) g(u, o[n]); e._i.push([i, s, a]) }, e.__SV = 1) })(document, window.posthog || []);

  posthog.init(window.POSTHOG_KEY, {
    api_host: window.POSTHOG_HOST,
    capture_pageview: true,
    autocapture: false,
    persistence: "localStorage",
  });

  window.cxTrack = function (name, props) {
    try { posthog.capture(name, props || {}); } catch (e) { /* swallow */ }
  };
})();
