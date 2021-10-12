! function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  function n(e) {
      var t = e.length,
          n = J.type(e);
      return "function" === n || J.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
  }

  function r(e, t, n) {
      if (J.isFunction(t)) return J.grep(e, function(e, r) {
          return !!t.call(e, r, e) !== n
      });
      if (t.nodeType) return J.grep(e, function(e) {
          return e === t !== n
      });
      if ("string" == typeof t) {
          if (st.test(t)) return J.filter(t, e, n);
          t = J.filter(t, e)
      }
      return J.grep(e, function(e) {
          return Z.call(t, e) >= 0 !== n
      })
  }

  function i(e, t) {
      for (;
          (e = e[t]) && 1 !== e.nodeType;);
      return e
  }

  function a(e) {
      var t = ft[e] = {};
      return J.each(e.match(dt) || [], function(e, n) {
          t[n] = !0
      }), t
  }

  function o() {
      Q.removeEventListener("DOMContentLoaded", o, !1), e.removeEventListener("load", o, !1), J.ready()
  }

  function s() {
      Object.defineProperty(this.cache = {}, 0, {
          get: function() {
              return {}
          }
      }), this.expando = J.expando + Math.random()
  }

  function l(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType)
          if (r = "data-" + t.replace(vt, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
              try {
                  n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : bt.test(n) ? J.parseJSON(n) : n
              } catch (i) {}
              yt.set(e, t, n)
          } else n = void 0;
      return n
  }

  function c() {
      return !0
  }

  function u() {
      return !1
  }

  function p() {
      try {
          return Q.activeElement
      } catch (e) {}
  }

  function h(e, t) {
      return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function d(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function f(e) {
      var t = $t.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function m(e, t) {
      for (var n = 0, r = e.length; r > n; n++) kt.set(e[n], "globalEval", !t || kt.get(t[n], "globalEval"))
  }

  function g(e, t) {
      var n, r, i, a, o, s, l, c;
      if (1 === t.nodeType) {
          if (kt.hasData(e) && (a = kt.access(e), o = kt.set(t, a), c = a.events)) {
              delete o.handle, o.events = {};
              for (i in c)
                  for (n = 0, r = c[i].length; r > n; n++) J.event.add(t, i, c[i][n])
          }
          yt.hasData(e) && (s = yt.access(e), l = J.extend({}, s), yt.set(t, l))
      }
  }

  function k(e, t) {
      var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
      return void 0 === t || t && J.nodeName(e, t) ? J.merge([e], n) : n
  }

  function y(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Ot.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
  }

  function b(t, n) {
      var r, i = J(n.createElement(t)).appendTo(n.body),
          a = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : J.css(i[0], "display");
      return i.detach(), a
  }

  function v(e) {
      var t = Q,
          n = Ht[e];
      return n || (n = b(e, t), "none" !== n && n || (qt = (qt || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = qt[0].contentDocument, t.write(), t.close(), n = b(e, t), qt.detach()), Ht[e] = n), n
  }

  function T(e, t, n) {
      var r, i, a, o, s = e.style;
      return n = n || Wt(e), n && (o = n.getPropertyValue(t) || n[t]), n && ("" !== o || J.contains(e.ownerDocument, e) || (o = J.style(e, t)), Ft.test(o) && Mt.test(t) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a)), void 0 !== o ? o + "" : o
  }

  function w(e, t) {
      return {
          get: function() {
              return e() ? void delete this.get : (this.get = t).apply(this, arguments)
          }
      }
  }

  function x(e, t) {
      if (t in e) return t;
      for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Yt.length; i--;)
          if (t = Yt[i] + n, t in e) return t;
      return r
  }

  function O(e, t, n) {
      var r = Bt.exec(t);
      return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function j(e, t, n, r, i) {
      for (var a = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2) "margin" === n && (o += J.css(e, n + wt[a], !0, i)), r ? ("content" === n && (o -= J.css(e, "padding" + wt[a], !0, i)), "margin" !== n && (o -= J.css(e, "border" + wt[a] + "Width", !0, i))) : (o += J.css(e, "padding" + wt[a], !0, i), "padding" !== n && (o += J.css(e, "border" + wt[a] + "Width", !0, i)));
      return o
  }

  function D(e, t, n) {
      var r = !0,
          i = "width" === t ? e.offsetWidth : e.offsetHeight,
          a = Wt(e),
          o = "border-box" === J.css(e, "boxSizing", !1, a);
      if (0 >= i || null == i) {
          if (i = T(e, t, a), (0 > i || null == i) && (i = e.style[t]), Ft.test(i)) return i;
          r = o && (V.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
      }
      return i + j(e, t, n || (o ? "border" : "content"), r, a) + "px"
  }

  function S(e, t) {
      for (var n, r, i, a = [], o = 0, s = e.length; s > o; o++) r = e[o], r.style && (a[o] = kt.get(r, "olddisplay"), n = r.style.display, t ? (a[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && xt(r) && (a[o] = kt.access(r, "olddisplay", v(r.nodeName)))) : (i = xt(r), "none" === n && i || kt.set(r, "olddisplay", i ? n : J.css(r, "display"))));
      for (o = 0; s > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? a[o] || "" : "none"));
      return e
  }

  function C(e, t, n, r, i) {
      return new C.prototype.init(e, t, n, r, i)
  }

  function _() {
      return setTimeout(function() {
          Vt = void 0
      }), Vt = J.now()
  }

  function N(e, t) {
      var n, r = 0,
          i = {
              height: e
          };
      for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = wt[r], i["margin" + n] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
  }

  function I(e, t, n) {
      for (var r, i = (nn[t] || []).concat(nn["*"]), a = 0, o = i.length; o > a; a++)
          if (r = i[a].call(n, t, e)) return r
  }

  function E(e, t, n) {
      var r, i, a, o, s, l, c, u, p = this,
          h = {},
          d = e.style,
          f = e.nodeType && xt(e),
          m = kt.get(e, "fxshow");
      n.queue || (s = J._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
          s.unqueued || l()
      }), s.unqueued++, p.always(function() {
          p.always(function() {
              s.unqueued--, J.queue(e, "fx").length || s.empty.fire()
          })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], c = J.css(e, "display"), u = "none" === c ? kt.get(e, "olddisplay") || v(e.nodeName) : c, "inline" === u && "none" === J.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", p.always(function() {
          d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
      }));
      for (r in t)
          if (i = t[r], Kt.exec(i)) {
              if (delete t[r], a = a || "toggle" === i, i === (f ? "hide" : "show")) {
                  if ("show" !== i || !m || void 0 === m[r]) continue;
                  f = !0
              }
              h[r] = m && m[r] || J.style(e, r)
          } else c = void 0;
      if (J.isEmptyObject(h)) "inline" === ("none" === c ? v(e.nodeName) : c) && (d.display = c);
      else {
          m ? "hidden" in m && (f = m.hidden) : m = kt.access(e, "fxshow", {}), a && (m.hidden = !f), f ? J(e).show() : p.done(function() {
              J(e).hide()
          }), p.done(function() {
              var t;
              kt.remove(e, "fxshow");
              for (t in h) J.style(e, t, h[t])
          });
          for (r in h) o = I(f ? m[r] : 0, r, p), r in m || (m[r] = o.start, f && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
      }
  }

  function A(e, t) {
      var n, r, i, a, o;
      for (n in e)
          if (r = J.camelCase(n), i = t[r], a = e[n], J.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), o = J.cssHooks[r], o && "expand" in o) {
              a = o.expand(a), delete e[r];
              for (n in a) n in e || (e[n] = a[n], t[n] = i)
          } else t[r] = i
  }

  function P(e, t, n) {
      var r, i, a = 0,
          o = tn.length,
          s = J.Deferred().always(function() {
              delete l.elem
          }),
          l = function() {
              if (i) return !1;
              for (var t = Vt || _(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, a = 1 - r, o = 0, l = c.tweens.length; l > o; o++) c.tweens[o].run(a);
              return s.notifyWith(e, [c, a, n]), 1 > a && l ? n : (s.resolveWith(e, [c]), !1)
          },
          c = s.promise({
              elem: e,
              props: J.extend({}, t),
              opts: J.extend(!0, {
                  specialEasing: {}
              }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: Vt || _(),
              duration: n.duration,
              tweens: [],
              createTween: function(t, n) {
                  var r = J.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                  return c.tweens.push(r), r
              },
              stop: function(t) {
                  var n = 0,
                      r = t ? c.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; r > n; n++) c.tweens[n].run(1);
                  return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
              }
          }),
          u = c.props;
      for (A(u, c.opts.specialEasing); o > a; a++)
          if (r = tn[a].call(c, e, u, c.opts)) return r;
      return J.map(u, I, c), J.isFunction(c.opts.start) && c.opts.start.call(e, c), J.fx.timer(J.extend(l, {
          elem: e,
          anim: c,
          queue: c.opts.queue
      })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }

  function L(e) {
      return function(t, n) {
          "string" != typeof t && (n = t, t = "*");
          var r, i = 0,
              a = t.toLowerCase().match(dt) || [];
          if (J.isFunction(n))
              for (; r = a[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
  }

  function $(e, t, n, r) {
      function i(s) {
          var l;
          return a[s] = !0, J.each(e[s] || [], function(e, s) {
              var c = s(t, n, r);
              return "string" != typeof c || o || a[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
          }), l
      }
      var a = {},
          o = e === wn;
      return i(t.dataTypes[0]) || !a["*"] && i("*")
  }

  function z(e, t) {
      var n, r, i = J.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && J.extend(!0, e, r), e
  }

  function R(e, t, n) {
      for (var r, i, a, o, s = e.contents, l = e.dataTypes;
          "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)
          for (i in s)
              if (s[i] && s[i].test(r)) {
                  l.unshift(i);
                  break
              } if (l[0] in n) a = l[0];
      else {
          for (i in n) {
              if (!l[0] || e.converters[i + " " + l[0]]) {
                  a = i;
                  break
              }
              o || (o = i)
          }
          a = a || o
      }
      return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
  }

  function q(e, t, n, r) {
      var i, a, o, s, l, c = {},
          u = e.dataTypes.slice();
      if (u[1])
          for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
      for (a = u.shift(); a;)
          if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
              if ("*" === a) a = l;
              else if ("*" !== l && l !== a) {
          if (o = c[l + " " + a] || c["* " + a], !o)
              for (i in c)
                  if (s = i.split(" "), s[1] === a && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
                      o === !0 ? o = c[i] : c[i] !== !0 && (a = s[0], u.unshift(s[1]));
                      break
                  } if (o !== !0)
              if (o && e["throws"]) t = o(t);
              else try {
                  t = o(t)
              } catch (p) {
                  return {
                      state: "parsererror",
                      error: o ? p : "No conversion from " + l + " to " + a
                  }
              }
      }
      return {
          state: "success",
          data: t
      }
  }

  function H(e, t, n, r) {
      var i;
      if (J.isArray(t)) J.each(t, function(t, i) {
          n || Dn.test(e) ? r(e, i) : H(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
      });
      else if (n || "object" !== J.type(t)) r(e, t);
      else
          for (i in t) H(e + "[" + i + "]", t[i], n, r)
  }

  function M(e) {
      return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  var F = [],
      W = F.slice,
      U = F.concat,
      B = F.push,
      Z = F.indexOf,
      X = {},
      G = X.toString,
      Y = X.hasOwnProperty,
      V = {},
      Q = e.document,
      K = "2.1.1",
      J = function(e, t) {
          return new J.fn.init(e, t)
      },
      et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      tt = /^-ms-/,
      nt = /-([\da-z])/gi,
      rt = function(e, t) {
          return t.toUpperCase()
      };
  J.fn = J.prototype = {
      jquery: K,
      constructor: J,
      selector: "",
      length: 0,
      toArray: function() {
          return W.call(this)
      },
      get: function(e) {
          return null != e ? 0 > e ? this[e + this.length] : this[e] : W.call(this)
      },
      pushStack: function(e) {
          var t = J.merge(this.constructor(), e);
          return t.prevObject = this, t.context = this.context, t
      },
      each: function(e, t) {
          return J.each(this, e, t)
      },
      map: function(e) {
          return this.pushStack(J.map(this, function(t, n) {
              return e.call(t, n, t)
          }))
      },
      slice: function() {
          return this.pushStack(W.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(e) {
          var t = this.length,
              n = +e + (0 > e ? t : 0);
          return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor(null)
      },
      push: B,
      sort: F.sort,
      splice: F.splice
  }, J.extend = J.fn.extend = function() {
      var e, t, n, r, i, a, o = arguments[0] || {},
          s = 1,
          l = arguments.length,
          c = !1;
      for ("boolean" == typeof o && (c = o, o = arguments[s] || {}, s++), "object" == typeof o || J.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++)
          if (null != (e = arguments[s]))
              for (t in e) n = o[t], r = e[t], o !== r && (c && r && (J.isPlainObject(r) || (i = J.isArray(r))) ? (i ? (i = !1, a = n && J.isArray(n) ? n : []) : a = n && J.isPlainObject(n) ? n : {}, o[t] = J.extend(c, a, r)) : void 0 !== r && (o[t] = r));
      return o
  }, J.extend({
      expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
          return "function" === J.type(e)
      },
      isArray: Array.isArray,
      isWindow: function(e) {
          return null != e && e === e.window
      },
      isNumeric: function(e) {
          return !J.isArray(e) && e - parseFloat(e) >= 0
      },
      isPlainObject: function(e) {
          return "object" !== J.type(e) || e.nodeType || J.isWindow(e) ? !1 : e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
      },
      isEmptyObject: function(e) {
          var t;
          for (t in e) return !1;
          return !0
      },
      type: function(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? X[G.call(e)] || "object" : typeof e
      },
      globalEval: function(e) {
          var t, n = eval;
          e = J.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
      },
      camelCase: function(e) {
          return e.replace(tt, "ms-").replace(nt, rt)
      },
      nodeName: function(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t, r) {
          var i, a = 0,
              o = e.length,
              s = n(e);
          if (r) {
              if (s)
                  for (; o > a && (i = t.apply(e[a], r), i !== !1); a++);
              else
                  for (a in e)
                      if (i = t.apply(e[a], r), i === !1) break
          } else if (s)
              for (; o > a && (i = t.call(e[a], a, e[a]), i !== !1); a++);
          else
              for (a in e)
                  if (i = t.call(e[a], a, e[a]), i === !1) break;
          return e
      },
      trim: function(e) {
          return null == e ? "" : (e + "").replace(et, "")
      },
      makeArray: function(e, t) {
          var r = t || [];
          return null != e && (n(Object(e)) ? J.merge(r, "string" == typeof e ? [e] : e) : B.call(r, e)), r
      },
      inArray: function(e, t, n) {
          return null == t ? -1 : Z.call(t, e, n)
      },
      merge: function(e, t) {
          for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
          return e.length = i, e
      },
      grep: function(e, t, n) {
          for (var r, i = [], a = 0, o = e.length, s = !n; o > a; a++) r = !t(e[a], a), r !== s && i.push(e[a]);
          return i
      },
      map: function(e, t, r) {
          var i, a = 0,
              o = e.length,
              s = n(e),
              l = [];
          if (s)
              for (; o > a; a++) i = t(e[a], a, r), null != i && l.push(i);
          else
              for (a in e) i = t(e[a], a, r), null != i && l.push(i);
          return U.apply([], l)
      },
      guid: 1,
      proxy: function(e, t) {
          var n, r, i;
          return "string" == typeof t && (n = e[t], t = e, e = n), J.isFunction(e) ? (r = W.call(arguments, 2), i = function() {
              return e.apply(t || this, r.concat(W.call(arguments)))
          }, i.guid = e.guid = e.guid || J.guid++, i) : void 0
      },
      now: Date.now,
      support: V
  }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
      X["[object " + t + "]"] = t.toLowerCase()
  });
  var it = function(e) {
      function t(e, t, n, r) {
          var i, a, o, s, l, c, p, d, f, m;
          if ((t ? t.ownerDocument || t : H) !== E && I(t), t = t || E, n = n || [], !e || "string" != typeof e) return n;
          if (1 !== (s = t.nodeType) && 9 !== s) return [];
          if (P && !r) {
              if (i = yt.exec(e))
                  if (o = i[1]) {
                      if (9 === s) {
                          if (a = t.getElementById(o), !a || !a.parentNode) return n;
                          if (a.id === o) return n.push(a), n
                      } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && R(t, a) && a.id === o) return n.push(a), n
                  } else {
                      if (i[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                      if ((o = i[3]) && T.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(o)), n
                  } if (T.qsa && (!L || !L.test(e))) {
                  if (d = p = q, f = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                      for (c = j(e), (p = t.getAttribute("id")) ? d = p.replace(vt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + h(c[l]);
                      f = bt.test(e) && u(t.parentNode) || t, m = c.join(",")
                  }
                  if (m) try {
                      return J.apply(n, f.querySelectorAll(m)), n
                  } catch (g) {} finally {
                      p || t.removeAttribute("id")
                  }
              }
          }
          return S(e.replace(lt, "$1"), t, n, r)
      }

      function n() {
          function e(n, r) {
              return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
          }
          var t = [];
          return e
      }

      function r(e) {
          return e[q] = !0, e
      }

      function i(e) {
          var t = E.createElement("div");
          try {
              return !!e(t)
          } catch (n) {
              return !1
          } finally {
              t.parentNode && t.parentNode.removeChild(t), t = null
          }
      }

      function a(e, t) {
          for (var n = e.split("|"), r = e.length; r--;) w.attrHandle[n[r]] = t
      }

      function o(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
          if (r) return r;
          if (n)
              for (; n = n.nextSibling;)
                  if (n === t) return -1;
          return e ? 1 : -1
      }

      function s(e) {
          return function(t) {
              var n = t.nodeName.toLowerCase();
              return "input" === n && t.type === e
          }
      }

      function l(e) {
          return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
          }
      }

      function c(e) {
          return r(function(t) {
              return t = +t, r(function(n, r) {
                  for (var i, a = e([], n.length, t), o = a.length; o--;) n[i = a[o]] && (n[i] = !(r[i] = n[i]))
              })
          })
      }

      function u(e) {
          return e && typeof e.getElementsByTagName !== X && e
      }

      function p() {}

      function h(e) {
          for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
          return r
      }

      function d(e, t, n) {
          var r = t.dir,
              i = n && "parentNode" === r,
              a = F++;
          return t.first ? function(t, n, a) {
              for (; t = t[r];)
                  if (1 === t.nodeType || i) return e(t, n, a)
          } : function(t, n, o) {
              var s, l, c = [M, a];
              if (o) {
                  for (; t = t[r];)
                      if ((1 === t.nodeType || i) && e(t, n, o)) return !0
              } else
                  for (; t = t[r];)
                      if (1 === t.nodeType || i) {
                          if (l = t[q] || (t[q] = {}), (s = l[r]) && s[0] === M && s[1] === a) return c[2] = s[2];
                          if (l[r] = c, c[2] = e(t, n, o)) return !0
                      }
          }
      }

      function f(e) {
          return e.length > 1 ? function(t, n, r) {
              for (var i = e.length; i--;)
                  if (!e[i](t, n, r)) return !1;
              return !0
          } : e[0]
      }

      function m(e, n, r) {
          for (var i = 0, a = n.length; a > i; i++) t(e, n[i], r);
          return r
      }

      function g(e, t, n, r, i) {
          for (var a, o = [], s = 0, l = e.length, c = null != t; l > s; s++)(a = e[s]) && (!n || n(a, r, i)) && (o.push(a), c && t.push(s));
          return o
      }

      function k(e, t, n, i, a, o) {
          return i && !i[q] && (i = k(i)), a && !a[q] && (a = k(a, o)), r(function(r, o, s, l) {
              var c, u, p, h = [],
                  d = [],
                  f = o.length,
                  k = r || m(t || "*", s.nodeType ? [s] : s, []),
                  y = !e || !r && t ? k : g(k, h, e, s, l),
                  b = n ? a || (r ? e : f || i) ? [] : o : y;
              if (n && n(y, b, s, l), i)
                  for (c = g(b, d), i(c, [], s, l), u = c.length; u--;)(p = c[u]) && (b[d[u]] = !(y[d[u]] = p));
              if (r) {
                  if (a || e) {
                      if (a) {
                          for (c = [], u = b.length; u--;)(p = b[u]) && c.push(y[u] = p);
                          a(null, b = [], c, l)
                      }
                      for (u = b.length; u--;)(p = b[u]) && (c = a ? tt.call(r, p) : h[u]) > -1 && (r[c] = !(o[c] = p))
                  }
              } else b = g(b === o ? b.splice(f, b.length) : b), a ? a(null, o, b, l) : J.apply(o, b)
          })
      }

      function y(e) {
          for (var t, n, r, i = e.length, a = w.relative[e[0].type], o = a || w.relative[" "], s = a ? 1 : 0, l = d(function(e) {
                  return e === t
              }, o, !0), c = d(function(e) {
                  return tt.call(t, e) > -1
              }, o, !0), u = [function(e, n, r) {
                  return !a && (r || n !== C) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
              }]; i > s; s++)
              if (n = w.relative[e[s].type]) u = [d(f(u), n)];
              else {
                  if (n = w.filter[e[s].type].apply(null, e[s].matches), n[q]) {
                      for (r = ++s; i > r && !w.relative[e[r].type]; r++);
                      return k(s > 1 && f(u), s > 1 && h(e.slice(0, s - 1).concat({
                          value: " " === e[s - 2].type ? "*" : ""
                      })).replace(lt, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && h(e))
                  }
                  u.push(n)
              } return f(u)
      }

      function b(e, n) {
          var i = n.length > 0,
              a = e.length > 0,
              o = function(r, o, s, l, c) {
                  var u, p, h, d = 0,
                      f = "0",
                      m = r && [],
                      k = [],
                      y = C,
                      b = r || a && w.find.TAG("*", c),
                      v = M += null == y ? 1 : Math.random() || .1,
                      T = b.length;
                  for (c && (C = o !== E && o); f !== T && null != (u = b[f]); f++) {
                      if (a && u) {
                          for (p = 0; h = e[p++];)
                              if (h(u, o, s)) {
                                  l.push(u);
                                  break
                              } c && (M = v)
                      }
                      i && ((u = !h && u) && d--, r && m.push(u))
                  }
                  if (d += f, i && f !== d) {
                      for (p = 0; h = n[p++];) h(m, k, o, s);
                      if (r) {
                          if (d > 0)
                              for (; f--;) m[f] || k[f] || (k[f] = Q.call(l));
                          k = g(k)
                      }
                      J.apply(l, k), c && !r && k.length > 0 && d + n.length > 1 && t.uniqueSort(l)
                  }
                  return c && (M = v, C = y), m
              };
          return i ? r(o) : o
      }
      var v, T, w, x, O, j, D, S, C, _, N, I, E, A, P, L, $, z, R, q = "sizzle" + -new Date,
          H = e.document,
          M = 0,
          F = 0,
          W = n(),
          U = n(),
          B = n(),
          Z = function(e, t) {
              return e === t && (N = !0), 0
          },
          X = "undefined",
          G = 1 << 31,
          Y = {}.hasOwnProperty,
          V = [],
          Q = V.pop,
          K = V.push,
          J = V.push,
          et = V.slice,
          tt = V.indexOf || function(e) {
              for (var t = 0, n = this.length; n > t; t++)
                  if (this[t] === e) return t;
              return -1
          },
          nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          rt = "[\\x20\\t\\r\\n\\f]",
          it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          at = it.replace("w", "w#"),
          ot = "\\[" + rt + "*(" + it + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + at + "))|)" + rt + "*\\]",
          st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
          lt = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
          ct = new RegExp("^" + rt + "*," + rt + "*"),
          ut = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
          pt = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
          ht = new RegExp(st),
          dt = new RegExp("^" + at + "$"),
          ft = {
              ID: new RegExp("^#(" + it + ")"),
              CLASS: new RegExp("^\\.(" + it + ")"),
              TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
              ATTR: new RegExp("^" + ot),
              PSEUDO: new RegExp("^" + st),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + nt + ")$", "i"),
              needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
          },
          mt = /^(?:input|select|textarea|button)$/i,
          gt = /^h\d$/i,
          kt = /^[^{]+\{\s*\[native \w/,
          yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          bt = /[+~]/,
          vt = /'|\\/g,
          Tt = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
          wt = function(e, t, n) {
              var r = "0x" + t - 65536;
              return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
          };
      try {
          J.apply(V = et.call(H.childNodes), H.childNodes), V[H.childNodes.length].nodeType
      } catch (xt) {
          J = {
              apply: V.length ? function(e, t) {
                  K.apply(e, et.call(t))
              } : function(e, t) {
                  for (var n = e.length, r = 0; e[n++] = t[r++];);
                  e.length = n - 1
              }
          }
      }
      T = t.support = {}, O = t.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return t ? "HTML" !== t.nodeName : !1
      }, I = t.setDocument = function(e) {
          var t, n = e ? e.ownerDocument || e : H,
              r = n.defaultView;
          return n !== E && 9 === n.nodeType && n.documentElement ? (E = n, A = n.documentElement, P = !O(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
              I()
          }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
              I()
          })), T.attributes = i(function(e) {
              return e.className = "i", !e.getAttribute("className")
          }), T.getElementsByTagName = i(function(e) {
              return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
          }), T.getElementsByClassName = kt.test(n.getElementsByClassName) && i(function(e) {
              return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
          }), T.getById = i(function(e) {
              return A.appendChild(e).id = q, !n.getElementsByName || !n.getElementsByName(q).length
          }), T.getById ? (w.find.ID = function(e, t) {
              if (typeof t.getElementById !== X && P) {
                  var n = t.getElementById(e);
                  return n && n.parentNode ? [n] : []
              }
          }, w.filter.ID = function(e) {
              var t = e.replace(Tt, wt);
              return function(e) {
                  return e.getAttribute("id") === t
              }
          }) : (delete w.find.ID, w.filter.ID = function(e) {
              var t = e.replace(Tt, wt);
              return function(e) {
                  var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
                  return n && n.value === t
              }
          }), w.find.TAG = T.getElementsByTagName ? function(e, t) {
              return typeof t.getElementsByTagName !== X ? t.getElementsByTagName(e) : void 0
          } : function(e, t) {
              var n, r = [],
                  i = 0,
                  a = t.getElementsByTagName(e);
              if ("*" === e) {
                  for (; n = a[i++];) 1 === n.nodeType && r.push(n);
                  return r
              }
              return a
          }, w.find.CLASS = T.getElementsByClassName && function(e, t) {
              return typeof t.getElementsByClassName !== X && P ? t.getElementsByClassName(e) : void 0
          }, $ = [], L = [], (T.qsa = kt.test(n.querySelectorAll)) && (i(function(e) {
              e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && L.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || L.push(":checked")
          }), i(function(e) {
              var t = n.createElement("input");
              t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
          })), (T.matchesSelector = kt.test(z = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && i(function(e) {
              T.disconnectedMatch = z.call(e, "div"), z.call(e, "[s!='']:x"), $.push("!=", st)
          }), L = L.length && new RegExp(L.join("|")), $ = $.length && new RegExp($.join("|")), t = kt.test(A.compareDocumentPosition), R = t || kt.test(A.contains) ? function(e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e,
                  r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } : function(e, t) {
              if (t)
                  for (; t = t.parentNode;)
                      if (t === e) return !0;
              return !1
          }, Z = t ? function(e, t) {
              if (e === t) return N = !0, 0;
              var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !T.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === H && R(H, e) ? -1 : t === n || t.ownerDocument === H && R(H, t) ? 1 : _ ? tt.call(_, e) - tt.call(_, t) : 0 : 4 & r ? -1 : 1)
          } : function(e, t) {
              if (e === t) return N = !0, 0;
              var r, i = 0,
                  a = e.parentNode,
                  s = t.parentNode,
                  l = [e],
                  c = [t];
              if (!a || !s) return e === n ? -1 : t === n ? 1 : a ? -1 : s ? 1 : _ ? tt.call(_, e) - tt.call(_, t) : 0;
              if (a === s) return o(e, t);
              for (r = e; r = r.parentNode;) l.unshift(r);
              for (r = t; r = r.parentNode;) c.unshift(r);
              for (; l[i] === c[i];) i++;
              return i ? o(l[i], c[i]) : l[i] === H ? -1 : c[i] === H ? 1 : 0
          }, n) : E
      }, t.matches = function(e, n) {
          return t(e, null, null, n)
      }, t.matchesSelector = function(e, n) {
          if ((e.ownerDocument || e) !== E && I(e), n = n.replace(pt, "='$1']"), !(!T.matchesSelector || !P || $ && $.test(n) || L && L.test(n))) try {
              var r = z.call(e, n);
              if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
          } catch (i) {}
          return t(n, E, null, [e]).length > 0
      }, t.contains = function(e, t) {
          return (e.ownerDocument || e) !== E && I(e), R(e, t)
      }, t.attr = function(e, t) {
          (e.ownerDocument || e) !== E && I(e);
          var n = w.attrHandle[t.toLowerCase()],
              r = n && Y.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
          return void 0 !== r ? r : T.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }, t.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
      }, t.uniqueSort = function(e) {
          var t, n = [],
              r = 0,
              i = 0;
          if (N = !T.detectDuplicates, _ = !T.sortStable && e.slice(0), e.sort(Z), N) {
              for (; t = e[i++];) t === e[i] && (r = n.push(i));
              for (; r--;) e.splice(n[r], 1)
          }
          return _ = null, e
      }, x = t.getText = function(e) {
          var t, n = "",
              r = 0,
              i = e.nodeType;
          if (i) {
              if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
              } else if (3 === i || 4 === i) return e.nodeValue
          } else
              for (; t = e[r++];) n += x(t);
          return n
      }, w = t.selectors = {
          cacheLength: 50,
          createPseudo: r,
          match: ft,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              }
          },
          preFilter: {
              ATTR: function(e) {
                  return e[1] = e[1].replace(Tt, wt), e[3] = (e[3] || e[4] || e[5] || "").replace(Tt, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
              },
              CHILD: function(e) {
                  return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
              },
              PSEUDO: function(e) {
                  var t, n = !e[6] && e[2];
                  return ft.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ht.test(n) && (t = j(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
              }
          },
          filter: {
              TAG: function(e) {
                  var t = e.replace(Tt, wt).toLowerCase();
                  return "*" === e ? function() {
                      return !0
                  } : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t
                  }
              },
              CLASS: function(e) {
                  var t = W[e + " "];
                  return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && W(e, function(e) {
                      return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
                  })
              },
              ATTR: function(e, n, r) {
                  return function(i) {
                      var a = t.attr(i, e);
                      return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === r : "!=" === n ? a !== r : "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice(-r.length) === r : "~=" === n ? (" " + a + " ").indexOf(r) > -1 : "|=" === n ? a === r || a.slice(0, r.length + 1) === r + "-" : !1) : !0
                  }
              },
              CHILD: function(e, t, n, r, i) {
                  var a = "nth" !== e.slice(0, 3),
                      o = "last" !== e.slice(-4),
                      s = "of-type" === t;
                  return 1 === r && 0 === i ? function(e) {
                      return !!e.parentNode
                  } : function(t, n, l) {
                      var c, u, p, h, d, f, m = a !== o ? "nextSibling" : "previousSibling",
                          g = t.parentNode,
                          k = s && t.nodeName.toLowerCase(),
                          y = !l && !s;
                      if (g) {
                          if (a) {
                              for (; m;) {
                                  for (p = t; p = p[m];)
                                      if (s ? p.nodeName.toLowerCase() === k : 1 === p.nodeType) return !1;
                                  f = m = "only" === e && !f && "nextSibling"
                              }
                              return !0
                          }
                          if (f = [o ? g.firstChild : g.lastChild], o && y) {
                              for (u = g[q] || (g[q] = {}), c = u[e] || [], d = c[0] === M && c[1], h = c[0] === M && c[2], p = d && g.childNodes[d]; p = ++d && p && p[m] || (h = d = 0) || f.pop();)
                                  if (1 === p.nodeType && ++h && p === t) {
                                      u[e] = [M, d, h];
                                      break
                                  }
                          } else if (y && (c = (t[q] || (t[q] = {}))[e]) && c[0] === M) h = c[1];
                          else
                              for (;
                                  (p = ++d && p && p[m] || (h = d = 0) || f.pop()) && ((s ? p.nodeName.toLowerCase() !== k : 1 !== p.nodeType) || !++h || (y && ((p[q] || (p[q] = {}))[e] = [M, h]), p !== t)););
                          return h -= i, h === r || h % r === 0 && h / r >= 0
                      }
                  }
              },
              PSEUDO: function(e, n) {
                  var i, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                  return a[q] ? a(n) : a.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                      for (var r, i = a(e, n), o = i.length; o--;) r = tt.call(e, i[o]), e[r] = !(t[r] = i[o])
                  }) : function(e) {
                      return a(e, 0, i)
                  }) : a
              }
          },
          pseudos: {
              not: r(function(e) {
                  var t = [],
                      n = [],
                      i = D(e.replace(lt, "$1"));
                  return i[q] ? r(function(e, t, n, r) {
                      for (var a, o = i(e, null, r, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                  }) : function(e, r, a) {
                      return t[0] = e, i(t, null, a, n), !n.pop()
                  }
              }),
              has: r(function(e) {
                  return function(n) {
                      return t(e, n).length > 0
                  }
              }),
              contains: r(function(e) {
                  return function(t) {
                      return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                  }
              }),
              lang: r(function(e) {
                  return dt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Tt, wt).toLowerCase(),
                      function(t) {
                          var n;
                          do
                              if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1
                      }
              }),
              target: function(t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id
              },
              root: function(e) {
                  return e === A
              },
              focus: function(e) {
                  return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: function(e) {
                  return e.disabled === !1
              },
              disabled: function(e) {
                  return e.disabled === !0
              },
              checked: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function(e) {
                  return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
              },
              empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                  return !0
              },
              parent: function(e) {
                  return !w.pseudos.empty(e)
              },
              header: function(e) {
                  return gt.test(e.nodeName)
              },
              input: function(e) {
                  return mt.test(e.nodeName)
              },
              button: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
              },
              text: function(e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: c(function() {
                  return [0]
              }),
              last: c(function(e, t) {
                  return [t - 1]
              }),
              eq: c(function(e, t, n) {
                  return [0 > n ? n + t : n]
              }),
              even: c(function(e, t) {
                  for (var n = 0; t > n; n += 2) e.push(n);
                  return e
              }),
              odd: c(function(e, t) {
                  for (var n = 1; t > n; n += 2) e.push(n);
                  return e
              }),
              lt: c(function(e, t, n) {
                  for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                  return e
              }),
              gt: c(function(e, t, n) {
                  for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                  return e
              })
          }
      }, w.pseudos.nth = w.pseudos.eq;
      for (v in {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
          }) w.pseudos[v] = s(v);
      for (v in {
              submit: !0,
              reset: !0
          }) w.pseudos[v] = l(v);
      return p.prototype = w.filters = w.pseudos, w.setFilters = new p, j = t.tokenize = function(e, n) {
          var r, i, a, o, s, l, c, u = U[e + " "];
          if (u) return n ? 0 : u.slice(0);
          for (s = e, l = [], c = w.preFilter; s;) {
              (!r || (i = ct.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(a = [])), r = !1, (i = ut.exec(s)) && (r = i.shift(), a.push({
                  value: r,
                  type: i[0].replace(lt, " ")
              }), s = s.slice(r.length));
              for (o in w.filter) !(i = ft[o].exec(s)) || c[o] && !(i = c[o](i)) || (r = i.shift(), a.push({
                  value: r,
                  type: o,
                  matches: i
              }), s = s.slice(r.length));
              if (!r) break
          }
          return n ? s.length : s ? t.error(e) : U(e, l).slice(0)
      }, D = t.compile = function(e, t) {
          var n, r = [],
              i = [],
              a = B[e + " "];
          if (!a) {
              for (t || (t = j(e)), n = t.length; n--;) a = y(t[n]), a[q] ? r.push(a) : i.push(a);
              a = B(e, b(i, r)), a.selector = e
          }
          return a
      }, S = t.select = function(e, t, n, r) {
          var i, a, o, s, l, c = "function" == typeof e && e,
              p = !r && j(e = c.selector || e);
          if (n = n || [], 1 === p.length) {
              if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && T.getById && 9 === t.nodeType && P && w.relative[a[1].type]) {
                  if (t = (w.find.ID(o.matches[0].replace(Tt, wt), t) || [])[0], !t) return n;
                  c && (t = t.parentNode), e = e.slice(a.shift().value.length)
              }
              for (i = ft.needsContext.test(e) ? 0 : a.length; i-- && (o = a[i], !w.relative[s = o.type]);)
                  if ((l = w.find[s]) && (r = l(o.matches[0].replace(Tt, wt), bt.test(a[0].type) && u(t.parentNode) || t))) {
                      if (a.splice(i, 1), e = r.length && h(a), !e) return J.apply(n, r), n;
                      break
                  }
          }
          return (c || D(e, p))(r, t, !P, n, bt.test(e) && u(t.parentNode) || t), n
      }, T.sortStable = q.split("").sort(Z).join("") === q, T.detectDuplicates = !!N, I(), T.sortDetached = i(function(e) {
          return 1 & e.compareDocumentPosition(E.createElement("div"))
      }), i(function(e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || a("type|href|height|width", function(e, t, n) {
          return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), T.attributes && i(function(e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || a("value", function(e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
      }), i(function(e) {
          return null == e.getAttribute("disabled")
      }) || a(nt, function(e, t, n) {
          var r;
          return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }), t
  }(e);
  J.find = it, J.expr = it.selectors, J.expr[":"] = J.expr.pseudos, J.unique = it.uniqueSort, J.text = it.getText, J.isXMLDoc = it.isXML, J.contains = it.contains;
  var at = J.expr.match.needsContext,
      ot = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      st = /^.[^:#\[\.,]*$/;
  J.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? J.find.matchesSelector(r, e) ? [r] : [] : J.find.matches(e, J.grep(t, function(e) {
          return 1 === e.nodeType
      }))
  }, J.fn.extend({
      find: function(e) {
          var t, n = this.length,
              r = [],
              i = this;
          if ("string" != typeof e) return this.pushStack(J(e).filter(function() {
              for (t = 0; n > t; t++)
                  if (J.contains(i[t], this)) return !0
          }));
          for (t = 0; n > t; t++) J.find(e, i[t], r);
          return r = this.pushStack(n > 1 ? J.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
      },
      filter: function(e) {
          return this.pushStack(r(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(r(this, e || [], !0))
      },
      is: function(e) {
          return !!r(this, "string" == typeof e && at.test(e) ? J(e) : e || [], !1).length
      }
  });
  var lt, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      ut = J.fn.init = function(e, t) {
          var n, r;
          if (!e) return this;
          if ("string" == typeof e) {
              if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ct.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || lt).find(e) : this.constructor(t).find(e);
              if (n[1]) {
                  if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), ot.test(n[1]) && J.isPlainObject(t))
                      for (n in t) J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                  return this
              }
              return r = Q.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Q, this.selector = e, this
          }
          return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? "undefined" != typeof lt.ready ? lt.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
      };
  ut.prototype = J.fn, lt = J(Q);
  var pt = /^(?:parents|prev(?:Until|All))/,
      ht = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };
  J.extend({
      dir: function(e, t, n) {
          for (var r = [], i = void 0 !== n;
              (e = e[t]) && 9 !== e.nodeType;)
              if (1 === e.nodeType) {
                  if (i && J(e).is(n)) break;
                  r.push(e)
              } return r
      },
      sibling: function(e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n
      }
  }), J.fn.extend({
      has: function(e) {
          var t = J(e, this),
              n = t.length;
          return this.filter(function() {
              for (var e = 0; n > e; e++)
                  if (J.contains(this, t[e])) return !0
          })
      },
      closest: function(e, t) {
          for (var n, r = 0, i = this.length, a = [], o = at.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; i > r; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
                      a.push(n);
                      break
                  } return this.pushStack(a.length > 1 ? J.unique(a) : a)
      },
      index: function(e) {
          return e ? "string" == typeof e ? Z.call(J(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  }), J.each({
      parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
          return J.dir(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
          return J.dir(e, "parentNode", n)
      },
      next: function(e) {
          return i(e, "nextSibling")
      },
      prev: function(e) {
          return i(e, "previousSibling")
      },
      nextAll: function(e) {
          return J.dir(e, "nextSibling")
      },
      prevAll: function(e) {
          return J.dir(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
          return J.dir(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
          return J.dir(e, "previousSibling", n)
      },
      siblings: function(e) {
          return J.sibling((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return J.sibling(e.firstChild)
      },
      contents: function(e) {
          return e.contentDocument || J.merge([], e.childNodes)
      }
  }, function(e, t) {
      J.fn[e] = function(n, r) {
          var i = J.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = J.filter(r, i)), this.length > 1 && (ht[e] || J.unique(i), pt.test(e) && i.reverse()), this.pushStack(i)
      }
  });
  var dt = /\S+/g,
      ft = {};
  J.Callbacks = function(e) {
      e = "string" == typeof e ? ft[e] || a(e) : J.extend({}, e);
      var t, n, r, i, o, s, l = [],
          c = !e.once && [],
          u = function(a) {
              for (t = e.memory && a, n = !0, s = i || 0, i = 0, o = l.length, r = !0; l && o > s; s++)
                  if (l[s].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
                      t = !1;
                      break
                  } r = !1, l && (c ? c.length && u(c.shift()) : t ? l = [] : p.disable())
          },
          p = {
              add: function() {
                  if (l) {
                      var n = l.length;
                      ! function a(t) {
                          J.each(t, function(t, n) {
                              var r = J.type(n);
                              "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && a(n)
                          })
                      }(arguments), r ? o = l.length : t && (i = n, u(t))
                  }
                  return this
              },
              remove: function() {
                  return l && J.each(arguments, function(e, t) {
                      for (var n;
                          (n = J.inArray(t, l, n)) > -1;) l.splice(n, 1), r && (o >= n && o--, s >= n && s--)
                  }), this
              },
              has: function(e) {
                  return e ? J.inArray(e, l) > -1 : !(!l || !l.length)
              },
              empty: function() {
                  return l = [], o = 0, this
              },
              disable: function() {
                  return l = c = t = void 0, this
              },
              disabled: function() {
                  return !l
              },
              lock: function() {
                  return c = void 0, t || p.disable(), this
              },
              locked: function() {
                  return !c
              },
              fireWith: function(e, t) {
                  return !l || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? c.push(t) : u(t)), this
              },
              fire: function() {
                  return p.fireWith(this, arguments), this
              },
              fired: function() {
                  return !!n
              }
          };
      return p
  }, J.extend({
      Deferred: function(e) {
          var t = [
                  ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                  ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                  ["notify", "progress", J.Callbacks("memory")]
              ],
              n = "pending",
              r = {
                  state: function() {
                      return n
                  },
                  always: function() {
                      return i.done(arguments).fail(arguments), this
                  },
                  then: function() {
                      var e = arguments;
                      return J.Deferred(function(n) {
                          J.each(t, function(t, a) {
                              var o = J.isFunction(e[t]) && e[t];
                              i[a[1]](function() {
                                  var e = o && o.apply(this, arguments);
                                  e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                              })
                          }), e = null
                      }).promise()
                  },
                  promise: function(e) {
                      return null != e ? J.extend(e, r) : r
                  }
              },
              i = {};
          return r.pipe = r.then, J.each(t, function(e, a) {
              var o = a[2],
                  s = a[3];
              r[a[1]] = o.add, s && o.add(function() {
                  n = s
              }, t[1 ^ e][2].disable, t[2][2].lock), i[a[0]] = function() {
                  return i[a[0] + "With"](this === i ? r : this, arguments), this
              }, i[a[0] + "With"] = o.fireWith
          }), r.promise(i), e && e.call(i, i), i
      },
      when: function(e) {
          var t, n, r, i = 0,
              a = W.call(arguments),
              o = a.length,
              s = 1 !== o || e && J.isFunction(e.promise) ? o : 0,
              l = 1 === s ? e : J.Deferred(),
              c = function(e, n, r) {
                  return function(i) {
                      n[e] = this, r[e] = arguments.length > 1 ? W.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                  }
              };
          if (o > 1)
              for (t = new Array(o), n = new Array(o), r = new Array(o); o > i; i++) a[i] && J.isFunction(a[i].promise) ? a[i].promise().done(c(i, r, a)).fail(l.reject).progress(c(i, n, t)) : --s;
          return s || l.resolveWith(r, a), l.promise()
      }
  });
  var mt;
  J.fn.ready = function(e) {
      return J.ready.promise().done(e), this
  }, J.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
          e ? J.readyWait++ : J.ready(!0)
      },
      ready: function(e) {
          (e === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, e !== !0 && --J.readyWait > 0 || (mt.resolveWith(Q, [J]), J.fn.triggerHandler && (J(Q).triggerHandler("ready"), J(Q).off("ready"))))
      }
  }), J.ready.promise = function(t) {
      return mt || (mt = J.Deferred(), "complete" === Q.readyState ? setTimeout(J.ready) : (Q.addEventListener("DOMContentLoaded", o, !1), e.addEventListener("load", o, !1))), mt.promise(t)
  }, J.ready.promise();
  var gt = J.access = function(e, t, n, r, i, a, o) {
      var s = 0,
          l = e.length,
          c = null == n;
      if ("object" === J.type(n)) {
          i = !0;
          for (s in n) J.access(e, t, s, n[s], !0, a, o)
      } else if (void 0 !== r && (i = !0, J.isFunction(r) || (o = !0), c && (o ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
              return c.call(J(e), n)
          })), t))
          for (; l > s; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : c ? t.call(e) : l ? t(e[0], n) : a
  };
  J.acceptData = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }, s.uid = 1, s.accepts = J.acceptData, s.prototype = {
      key: function(e) {
          if (!s.accepts(e)) return 0;
          var t = {},
              n = e[this.expando];
          if (!n) {
              n = s.uid++;
              try {
                  t[this.expando] = {
                      value: n
                  }, Object.defineProperties(e, t)
              } catch (r) {
                  t[this.expando] = n, J.extend(e, t)
              }
          }
          return this.cache[n] || (this.cache[n] = {}), n
      },
      set: function(e, t, n) {
          var r, i = this.key(e),
              a = this.cache[i];
          if ("string" == typeof t) a[t] = n;
          else if (J.isEmptyObject(a)) J.extend(this.cache[i], t);
          else
              for (r in t) a[r] = t[r];
          return a
      },
      get: function(e, t) {
          var n = this.cache[this.key(e)];
          return void 0 === t ? n : n[t]
      },
      access: function(e, t, n) {
          var r;
          return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, J.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
          var n, r, i, a = this.key(e),
              o = this.cache[a];
          if (void 0 === t) this.cache[a] = {};
          else {
              J.isArray(t) ? r = t.concat(t.map(J.camelCase)) : (i = J.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(dt) || [])), n = r.length;
              for (; n--;) delete o[r[n]]
          }
      },
      hasData: function(e) {
          return !J.isEmptyObject(this.cache[e[this.expando]] || {})
      },
      discard: function(e) {
          e[this.expando] && delete this.cache[e[this.expando]]
      }
  };
  var kt = new s,
      yt = new s,
      bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      vt = /([A-Z])/g;
  J.extend({
      hasData: function(e) {
          return yt.hasData(e) || kt.hasData(e)
      },
      data: function(e, t, n) {
          return yt.access(e, t, n)
      },
      removeData: function(e, t) {
          yt.remove(e, t)
      },
      _data: function(e, t, n) {
          return kt.access(e, t, n)
      },
      _removeData: function(e, t) {
          kt.remove(e, t)
      }
  }), J.fn.extend({
      data: function(e, t) {
          var n, r, i, a = this[0],
              o = a && a.attributes;
          if (void 0 === e) {
              if (this.length && (i = yt.get(a), 1 === a.nodeType && !kt.get(a, "hasDataAttrs"))) {
                  for (n = o.length; n--;) o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = J.camelCase(r.slice(5)), l(a, r, i[r])));
                  kt.set(a, "hasDataAttrs", !0)
              }
              return i
          }
          return "object" == typeof e ? this.each(function() {
              yt.set(this, e)
          }) : gt(this, function(t) {
              var n, r = J.camelCase(e);
              if (a && void 0 === t) {
                  if (n = yt.get(a, e), void 0 !== n) return n;
                  if (n = yt.get(a, r), void 0 !== n) return n;
                  if (n = l(a, r, void 0), void 0 !== n) return n
              } else this.each(function() {
                  var n = yt.get(this, r);
                  yt.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && yt.set(this, e, t)
              })
          }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
          return this.each(function() {
              yt.remove(this, e)
          })
      }
  }), J.extend({
      queue: function(e, t, n) {
          var r;
          return e ? (t = (t || "fx") + "queue", r = kt.get(e, t), n && (!r || J.isArray(n) ? r = kt.access(e, t, J.makeArray(n)) : r.push(n)), r || []) : void 0
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var n = J.queue(e, t),
              r = n.length,
              i = n.shift(),
              a = J._queueHooks(e, t),
              o = function() {
                  J.dequeue(e, t)
              };
          "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, o, a)), !r && a && a.empty.fire()
      },
      _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return kt.get(e, n) || kt.access(e, n, {
              empty: J.Callbacks("once memory").add(function() {
                  kt.remove(e, [t + "queue", n])
              })
          })
      }
  }), J.fn.extend({
      queue: function(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? J.queue(this[0], e) : void 0 === t ? this : this.each(function() {
              var n = J.queue(this, e, t);
              J._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && J.dequeue(this, e)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              J.dequeue(this, e)
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          var n, r = 1,
              i = J.Deferred(),
              a = this,
              o = this.length,
              s = function() {
                  --r || i.resolveWith(a, [a])
              };
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = kt.get(a[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
          return s(), i.promise(t)
      }
  });
  var Tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      wt = ["Top", "Right", "Bottom", "Left"],
      xt = function(e, t) {
          return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
      },
      Ot = /^(?:checkbox|radio)$/i;
  ! function() {
      var e = Q.createDocumentFragment(),
          t = e.appendChild(Q.createElement("div")),
          n = Q.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), V.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", V.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var jt = "undefined";
  V.focusinBubbles = "onfocusin" in e;
  var Dt = /^key/,
      St = /^(?:mouse|pointer|contextmenu)|click/,
      Ct = /^(?:focusinfocus|focusoutblur)$/,
      _t = /^([^.]*)(?:\.(.+)|)$/;
  J.event = {
      global: {},
      add: function(e, t, n, r, i) {
          var a, o, s, l, c, u, p, h, d, f, m, g = kt.get(e);
          if (g)
              for (n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = J.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(t) {
                      return typeof J !== jt && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0
                  }), t = (t || "").match(dt) || [""], c = t.length; c--;) s = _t.exec(t[c]) || [], d = m = s[1], f = (s[2] || "").split(".").sort(), d && (p = J.event.special[d] || {}, d = (i ? p.delegateType : p.bindType) || d, p = J.event.special[d] || {}, u = J.extend({
                  type: d,
                  origType: m,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && J.expr.match.needsContext.test(i),
                  namespace: f.join(".")
              }, a), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, p.setup && p.setup.call(e, r, f, o) !== !1 || e.addEventListener && e.addEventListener(d, o, !1)), p.add && (p.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, u) : h.push(u), J.event.global[d] = !0)
      },
      remove: function(e, t, n, r, i) {
          var a, o, s, l, c, u, p, h, d, f, m, g = kt.hasData(e) && kt.get(e);
          if (g && (l = g.events)) {
              for (t = (t || "").match(dt) || [""], c = t.length; c--;)
                  if (s = _t.exec(t[c]) || [], d = m = s[1], f = (s[2] || "").split(".").sort(), d) {
                      for (p = J.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, h = l[d] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = h.length; a--;) u = h[a], !i && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (h.splice(a, 1), u.selector && h.delegateCount--, p.remove && p.remove.call(e, u));
                      o && !h.length && (p.teardown && p.teardown.call(e, f, g.handle) !== !1 || J.removeEvent(e, d, g.handle), delete l[d])
                  } else
                      for (d in l) J.event.remove(e, d + t[c], n, r, !0);
              J.isEmptyObject(l) && (delete g.handle, kt.remove(e, "events"))
          }
      },
      trigger: function(t, n, r, i) {
          var a, o, s, l, c, u, p, h = [r || Q],
              d = Y.call(t, "type") ? t.type : t,
              f = Y.call(t, "namespace") ? t.namespace.split(".") : [];
          if (o = s = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(d + J.event.triggered) && (d.indexOf(".") >= 0 && (f = d.split("."), d = f.shift(), f.sort()), c = d.indexOf(":") < 0 && "on" + d, t = t[J.expando] ? t : new J.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : J.makeArray(n, [t]), p = J.event.special[d] || {}, i || !p.trigger || p.trigger.apply(r, n) !== !1)) {
              if (!i && !p.noBubble && !J.isWindow(r)) {
                  for (l = p.delegateType || d, Ct.test(l + d) || (o = o.parentNode); o; o = o.parentNode) h.push(o), s = o;
                  s === (r.ownerDocument || Q) && h.push(s.defaultView || s.parentWindow || e)
              }
              for (a = 0;
                  (o = h[a++]) && !t.isPropagationStopped();) t.type = a > 1 ? l : p.bindType || d, u = (kt.get(o, "events") || {})[t.type] && kt.get(o, "handle"), u && u.apply(o, n), u = c && o[c], u && u.apply && J.acceptData(o) && (t.result = u.apply(o, n), t.result === !1 && t.preventDefault());
              return t.type = d, i || t.isDefaultPrevented() || p._default && p._default.apply(h.pop(), n) !== !1 || !J.acceptData(r) || c && J.isFunction(r[d]) && !J.isWindow(r) && (s = r[c], s && (r[c] = null), J.event.triggered = d, r[d](), J.event.triggered = void 0, s && (r[c] = s)), t.result
          }
      },
      dispatch: function(e) {
          e = J.event.fix(e);
          var t, n, r, i, a, o = [],
              s = W.call(arguments),
              l = (kt.get(this, "events") || {})[e.type] || [],
              c = J.event.special[e.type] || {};
          if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
              for (o = J.event.handlers.call(this, e, l), t = 0;
                  (i = o[t++]) && !e.isPropagationStopped();)
                  for (e.currentTarget = i.elem, n = 0;
                      (a = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, r = ((J.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, e), e.result
          }
      },
      handlers: function(e, t) {
          var n, r, i, a, o = [],
              s = t.delegateCount,
              l = e.target;
          if (s && l.nodeType && (!e.button || "click" !== e.type))
              for (; l !== this; l = l.parentNode || this)
                  if (l.disabled !== !0 || "click" !== e.type) {
                      for (r = [], n = 0; s > n; n++) a = t[n], i = a.selector + " ", void 0 === r[i] && (r[i] = a.needsContext ? J(i, this).index(l) >= 0 : J.find(i, this, null, [l]).length), r[i] && r.push(a);
                      r.length && o.push({
                          elem: l,
                          handlers: r
                      })
                  } return s < t.length && o.push({
              elem: this,
              handlers: t.slice(s)
          }), o
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
          props: "char charCode key keyCode".split(" "),
          filter: function(e, t) {
              return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
          }
      },
      mouseHooks: {
          props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
          filter: function(e, t) {
              var n, r, i, a = t.button;
              return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
          }
      },
      fix: function(e) {
          if (e[J.expando]) return e;
          var t, n, r, i = e.type,
              a = e,
              o = this.fixHooks[i];
          for (o || (this.fixHooks[i] = o = St.test(i) ? this.mouseHooks : Dt.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new J.Event(a), t = r.length; t--;) n = r[t], e[n] = a[n];
          return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, a) : e
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  return this !== p() && this.focus ? (this.focus(), !1) : void 0
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  return this === p() && this.blur ? (this.blur(), !1) : void 0
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
              },
              _default: function(e) {
                  return J.nodeName(e.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
          }
      },
      simulate: function(e, t, n, r) {
          var i = J.extend(new J.Event, n, {
              type: e,
              isSimulated: !0,
              originalEvent: {}
          });
          r ? J.event.trigger(i, null, t) : J.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
      }
  }, J.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1)
  }, J.Event = function(e, t) {
      return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : u) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(e, t)
  }, J.Event.prototype = {
      isDefaultPrevented: u,
      isPropagationStopped: u,
      isImmediatePropagationStopped: u,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
      }
  }, J.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(e, t) {
      J.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
              var n, r = this,
                  i = e.relatedTarget,
                  a = e.handleObj;
              return (!i || i !== r && !J.contains(r, i)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
          }
      }
  }), V.focusinBubbles || J.each({
      focus: "focusin",
      blur: "focusout"
  }, function(e, t) {
      var n = function(e) {
          J.event.simulate(t, e.target, J.event.fix(e), !0)
      };
      J.event.special[t] = {
          setup: function() {
              var r = this.ownerDocument || this,
                  i = kt.access(r, t);
              i || r.addEventListener(e, n, !0), kt.access(r, t, (i || 0) + 1)
          },
          teardown: function() {
              var r = this.ownerDocument || this,
                  i = kt.access(r, t) - 1;
              i ? kt.access(r, t, i) : (r.removeEventListener(e, n, !0), kt.remove(r, t))
          }
      }
  }), J.fn.extend({
      on: function(e, t, n, r, i) {
          var a, o;
          if ("object" == typeof e) {
              "string" != typeof t && (n = n || t, t = void 0);
              for (o in e) this.on(o, t, n, e[o], i);
              return this
          }
          if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = u;
          else if (!r) return this;
          return 1 === i && (a = r, r = function(e) {
              return J().off(e), a.apply(this, arguments)
          }, r.guid = a.guid || (a.guid = J.guid++)), this.each(function() {
              J.event.add(this, e, r, n, t)
          })
      },
      one: function(e, t, n, r) {
          return this.on(e, t, n, r, 1)
      },
      off: function(e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj) return r = e.handleObj, J(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
          if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this
          }
          return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = u), this.each(function() {
              J.event.remove(this, e, n, t)
          })
      },
      trigger: function(e, t) {
          return this.each(function() {
              J.event.trigger(e, t, this)
          })
      },
      triggerHandler: function(e, t) {
          var n = this[0];
          return n ? J.event.trigger(e, t, n, !0) : void 0
      }
  });
  var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      It = /<([\w:]+)/,
      Et = /<|&#?\w+;/,
      At = /<(?:script|style|link)/i,
      Pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Lt = /^$|\/(?:java|ecma)script/i,
      $t = /^true\/(.*)/,
      zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Rt = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
      };
  Rt.optgroup = Rt.option, Rt.tbody = Rt.tfoot = Rt.colgroup = Rt.caption = Rt.thead, Rt.th = Rt.td, J.extend({
      clone: function(e, t, n) {
          var r, i, a, o, s = e.cloneNode(!0),
              l = J.contains(e.ownerDocument, e);
          if (!(V.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
              for (o = k(s), a = k(e), r = 0, i = a.length; i > r; r++) y(a[r], o[r]);
          if (t)
              if (n)
                  for (a = a || k(e), o = o || k(s), r = 0, i = a.length; i > r; r++) g(a[r], o[r]);
              else g(e, s);
          return o = k(s, "script"), o.length > 0 && m(o, !l && k(e, "script")), s
      },
      buildFragment: function(e, t, n, r) {
          for (var i, a, o, s, l, c, u = t.createDocumentFragment(), p = [], h = 0, d = e.length; d > h; h++)
              if (i = e[h], i || 0 === i)
                  if ("object" === J.type(i)) J.merge(p, i.nodeType ? [i] : i);
                  else if (Et.test(i)) {
              for (a = a || u.appendChild(t.createElement("div")), o = (It.exec(i) || ["", ""])[1].toLowerCase(), s = Rt[o] || Rt._default, a.innerHTML = s[1] + i.replace(Nt, "<$1></$2>") + s[2], c = s[0]; c--;) a = a.lastChild;
              J.merge(p, a.childNodes), a = u.firstChild, a.textContent = ""
          } else p.push(t.createTextNode(i));
          for (u.textContent = "", h = 0; i = p[h++];)
              if ((!r || -1 === J.inArray(i, r)) && (l = J.contains(i.ownerDocument, i), a = k(u.appendChild(i), "script"), l && m(a), n))
                  for (c = 0; i = a[c++];) Lt.test(i.type || "") && n.push(i);
          return u
      },
      cleanData: function(e) {
          for (var t, n, r, i, a = J.event.special, o = 0; void 0 !== (n = e[o]); o++) {
              if (J.acceptData(n) && (i = n[kt.expando], i && (t = kt.cache[i]))) {
                  if (t.events)
                      for (r in t.events) a[r] ? J.event.remove(n, r) : J.removeEvent(n, r, t.handle);
                  kt.cache[i] && delete kt.cache[i]
              }
              delete yt.cache[n[yt.expando]]
          }
      }
  }), J.fn.extend({
      text: function(e) {
          return gt(this, function(e) {
              return void 0 === e ? J.text(this) : this.empty().each(function() {
                  (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
              })
          }, null, e, arguments.length)
      },
      append: function() {
          return this.domManip(arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = h(this, e);
                  t.appendChild(e)
              }
          })
      },
      prepend: function() {
          return this.domManip(arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = h(this, e);
                  t.insertBefore(e, t.firstChild)
              }
          })
      },
      before: function() {
          return this.domManip(arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return this.domManip(arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      remove: function(e, t) {
          for (var n, r = e ? J.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || J.cleanData(k(n)), n.parentNode && (t && J.contains(n.ownerDocument, n) && m(k(n, "script")), n.parentNode.removeChild(n));
          return this
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (J.cleanData(k(e, !1)), e.textContent = "");
          return this
      },
      clone: function(e, t) {
          return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
              return J.clone(this, e, t)
          })
      },
      html: function(e) {
          return gt(this, function(e) {
              var t = this[0] || {},
                  n = 0,
                  r = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if ("string" == typeof e && !At.test(e) && !Rt[(It.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = e.replace(Nt, "<$1></$2>");
                  try {
                      for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (J.cleanData(k(t, !1)), t.innerHTML = e);
                      t = 0
                  } catch (i) {}
              }
              t && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function() {
          var e = arguments[0];
          return this.domManip(arguments, function(t) {
              e = this.parentNode, J.cleanData(k(this)), e && e.replaceChild(t, this)
          }), e && (e.length || e.nodeType) ? this : this.remove()
      },
      detach: function(e) {
          return this.remove(e, !0)
      },
      domManip: function(e, t) {
          e = U.apply([], e);
          var n, r, i, a, o, s, l = 0,
              c = this.length,
              u = this,
              p = c - 1,
              h = e[0],
              m = J.isFunction(h);
          if (m || c > 1 && "string" == typeof h && !V.checkClone && Pt.test(h)) return this.each(function(n) {
              var r = u.eq(n);
              m && (e[0] = h.call(this, n, r.html())), r.domManip(e, t)
          });
          if (c && (n = J.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
              for (i = J.map(k(n, "script"), d), a = i.length; c > l; l++) o = n, l !== p && (o = J.clone(o, !0, !0), a && J.merge(i, k(o, "script"))), t.call(this[l], o, l);
              if (a)
                  for (s = i[i.length - 1].ownerDocument, J.map(i, f), l = 0; a > l; l++) o = i[l], Lt.test(o.type || "") && !kt.access(o, "globalEval") && J.contains(s, o) && (o.src ? J._evalUrl && J._evalUrl(o.src) : J.globalEval(o.textContent.replace(zt, "")))
          }
          return this
      }
  }), J.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, t) {
      J.fn[e] = function(e) {
          for (var n, r = [], i = J(e), a = i.length - 1, o = 0; a >= o; o++) n = o === a ? this : this.clone(!0), J(i[o])[t](n), B.apply(r, n.get());
          return this.pushStack(r)
      }
  });
  var qt, Ht = {},
      Mt = /^margin/,
      Ft = new RegExp("^(" + Tt + ")(?!px)[a-z%]+$", "i"),
      Wt = function(e) {
          return e.ownerDocument.defaultView.getComputedStyle(e, null)
      };
  ! function() {
      function t() {
          o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", i.appendChild(a);
          var t = e.getComputedStyle(o, null);
          n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(a)
      }
      var n, r, i = Q.documentElement,
          a = Q.createElement("div"),
          o = Q.createElement("div");
      o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", V.clearCloneStyle = "content-box" === o.style.backgroundClip, a.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", a.appendChild(o), e.getComputedStyle && J.extend(V, {
          pixelPosition: function() {
              return t(), n
          },
          boxSizingReliable: function() {
              return null == r && t(), r
          },
          reliableMarginRight: function() {
              var t, n = o.appendChild(Q.createElement("div"));
              return n.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", o.style.width = "1px", i.appendChild(a), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(a), t
          }
      }))
  }(), J.swap = function(e, t, n, r) {
      var i, a, o = {};
      for (a in t) o[a] = e.style[a], e.style[a] = t[a];
      i = n.apply(e, r || []);
      for (a in t) e.style[a] = o[a];
      return i
  };
  var Ut = /^(none|table(?!-c[ea]).+)/,
      Bt = new RegExp("^(" + Tt + ")(.*)$", "i"),
      Zt = new RegExp("^([+-])=(" + Tt + ")", "i"),
      Xt = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      },
      Gt = {
          letterSpacing: "0",
          fontWeight: "400"
      },
      Yt = ["Webkit", "O", "Moz", "ms"];
  J.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) {
                      var n = T(e, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {
          "float": "cssFloat"
      },
      style: function(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i, a, o, s = J.camelCase(t),
                  l = e.style;
              return t = J.cssProps[s] || (J.cssProps[s] = x(l, s)), o = J.cssHooks[t] || J.cssHooks[s], void 0 === n ? o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : l[t] : (a = typeof n, "string" === a && (i = Zt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(J.css(e, t)), a = "number"), null != n && n === n && ("number" !== a || J.cssNumber[s] || (n += "px"), V.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (l[t] = n)), void 0)
          }
      },
      css: function(e, t, n, r) {
          var i, a, o, s = J.camelCase(t);
          return t = J.cssProps[s] || (J.cssProps[s] = x(e.style, s)), o = J.cssHooks[t] || J.cssHooks[s], o && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = T(e, t, r)), "normal" === i && t in Gt && (i = Gt[t]), "" === n || n ? (a = parseFloat(i), n === !0 || J.isNumeric(a) ? a || 0 : i) : i
      }
  }), J.each(["height", "width"], function(e, t) {
      J.cssHooks[t] = {
          get: function(e, n, r) {
              return n ? Ut.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, Xt, function() {
                  return D(e, t, r)
              }) : D(e, t, r) : void 0
          },
          set: function(e, n, r) {
              var i = r && Wt(e);
              return O(e, n, r ? j(e, t, r, "border-box" === J.css(e, "boxSizing", !1, i), i) : 0)
          }
      }
  }), J.cssHooks.marginRight = w(V.reliableMarginRight, function(e, t) {
      return t ? J.swap(e, {
          display: "inline-block"
      }, T, [e, "marginRight"]) : void 0
  }), J.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(e, t) {
      J.cssHooks[e + t] = {
          expand: function(n) {
              for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + wt[r] + t] = a[r] || a[r - 2] || a[0];
              return i
          }
      }, Mt.test(e) || (J.cssHooks[e + t].set = O)
  }), J.fn.extend({
      css: function(e, t) {
          return gt(this, function(e, t, n) {
              var r, i, a = {},
                  o = 0;
              if (J.isArray(t)) {
                  for (r = Wt(e), i = t.length; i > o; o++) a[t[o]] = J.css(e, t[o], !1, r);
                  return a
              }
              return void 0 !== n ? J.style(e, t, n) : J.css(e, t)
          }, e, t, arguments.length > 1)
      },
      show: function() {
          return S(this, !0)
      },
      hide: function() {
          return S(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
              xt(this) ? J(this).show() : J(this).hide()
          })
      }
  }), J.Tween = C, C.prototype = {
      constructor: C,
      init: function(e, t, n, r, i, a) {
          this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (J.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var e = C.propHooks[this.prop];
          return e && e.get ? e.get(this) : C.propHooks._default.get(this)
      },
      run: function(e) {
          var t, n = C.propHooks[this.prop];
          return this.pos = t = this.options.duration ? J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : C.propHooks._default.set(this), this
      }
  }, C.prototype.init.prototype = C.prototype, C.propHooks = {
      _default: {
          get: function(e) {
              var t;
              return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
          },
          set: function(e) {
              J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
          }
      }
  }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  }, J.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      }
  }, J.fx = C.prototype.init, J.fx.step = {};
  var Vt, Qt, Kt = /^(?:toggle|show|hide)$/,
      Jt = new RegExp("^(?:([+-])=|)(" + Tt + ")([a-z%]*)$", "i"),
      en = /queueHooks$/,
      tn = [E],
      nn = {
          "*": [function(e, t) {
              var n = this.createTween(e, t),
                  r = n.cur(),
                  i = Jt.exec(t),
                  a = i && i[3] || (J.cssNumber[e] ? "" : "px"),
                  o = (J.cssNumber[e] || "px" !== a && +r) && Jt.exec(J.css(n.elem, e)),
                  s = 1,
                  l = 20;
              if (o && o[3] !== a) {
                  a = a || o[3], i = i || [], o = +r || 1;
                  do s = s || ".5", o /= s, J.style(n.elem, e, o + a); while (s !== (s = n.cur() / r) && 1 !== s && --l)
              }
              return i && (o = n.start = +o || +r || 0, n.unit = a, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
          }]
      };
  J.Animation = J.extend(P, {
          tweener: function(e, t) {
              J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
              for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nn[n] = nn[n] || [], nn[n].unshift(t)
          },
          prefilter: function(e, t) {
              t ? tn.unshift(e) : tn.push(e)
          }
      }), J.speed = function(e, t, n) {
          var r = e && "object" == typeof e ? J.extend({}, e) : {
              complete: n || !n && t || J.isFunction(e) && e,
              duration: e,
              easing: n && t || t && !J.isFunction(t) && t
          };
          return r.duration = J.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in J.fx.speeds ? J.fx.speeds[r.duration] : J.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
              J.isFunction(r.old) && r.old.call(this), r.queue && J.dequeue(this, r.queue)
          }, r
      }, J.fn.extend({
          fadeTo: function(e, t, n, r) {
              return this.filter(xt).css("opacity", 0).show().end().animate({
                  opacity: t
              }, e, n, r)
          },
          animate: function(e, t, n, r) {
              var i = J.isEmptyObject(e),
                  a = J.speed(t, n, r),
                  o = function() {
                      var t = P(this, J.extend({}, e), a);
                      (i || kt.get(this, "finish")) && t.stop(!0)
                  };
              return o.finish = o, i || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
          },
          stop: function(e, t, n) {
              var r = function(e) {
                  var t = e.stop;
                  delete e.stop, t(n)
              };
              return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                  var t = !0,
                      i = null != e && e + "queueHooks",
                      a = J.timers,
                      o = kt.get(this);
                  if (i) o[i] && o[i].stop && r(o[i]);
                  else
                      for (i in o) o[i] && o[i].stop && en.test(i) && r(o[i]);
                  for (i = a.length; i--;) a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1));
                  (t || !n) && J.dequeue(this, e)
              })
          },
          finish: function(e) {
              return e !== !1 && (e = e || "fx"), this.each(function() {
                  var t, n = kt.get(this),
                      r = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      a = J.timers,
                      o = r ? r.length : 0;
                  for (n.finish = !0, J.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                  for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                  delete n.finish
              })
          }
      }), J.each(["toggle", "show", "hide"], function(e, t) {
          var n = J.fn[t];
          J.fn[t] = function(e, r, i) {
              return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(N(t, !0), e, r, i)
          }
      }), J.each({
          slideDown: N("show"),
          slideUp: N("hide"),
          slideToggle: N("toggle"),
          fadeIn: {
              opacity: "show"
          },
          fadeOut: {
              opacity: "hide"
          },
          fadeToggle: {
              opacity: "toggle"
          }
      }, function(e, t) {
          J.fn[e] = function(e, n, r) {
              return this.animate(t, e, n, r)
          }
      }), J.timers = [], J.fx.tick = function() {
          var e, t = 0,
              n = J.timers;
          for (Vt = J.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
          n.length || J.fx.stop(), Vt = void 0
      }, J.fx.timer = function(e) {
          J.timers.push(e), e() ? J.fx.start() : J.timers.pop()
      }, J.fx.interval = 13, J.fx.start = function() {
          Qt || (Qt = setInterval(J.fx.tick, J.fx.interval))
      }, J.fx.stop = function() {
          clearInterval(Qt), Qt = null
      }, J.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
      }, J.fn.delay = function(e, t) {
          return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
              var r = setTimeout(t, e);
              n.stop = function() {
                  clearTimeout(r)
              }
          })
      },
      function() {
          var e = Q.createElement("input"),
              t = Q.createElement("select"),
              n = t.appendChild(Q.createElement("option"));
          e.type = "checkbox", V.checkOn = "" !== e.value, V.optSelected = n.selected, t.disabled = !0, V.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", V.radioValue = "t" === e.value
      }();
  var rn, an, on = J.expr.attrHandle;
  J.fn.extend({
      attr: function(e, t) {
          return gt(this, J.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
          return this.each(function() {
              J.removeAttr(this, e)
          })
      }
  }), J.extend({
      attr: function(e, t, n) {
          var r, i, a = e.nodeType;
          if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === jt ? J.prop(e, t, n) : (1 === a && J.isXMLDoc(e) || (t = t.toLowerCase(), r = J.attrHooks[t] || (J.expr.match.bool.test(t) ? an : rn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = J.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void J.removeAttr(e, t))
      },
      removeAttr: function(e, t) {
          var n, r, i = 0,
              a = t && t.match(dt);
          if (a && 1 === e.nodeType)
              for (; n = a[i++];) r = J.propFix[n] || n, J.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
      },
      attrHooks: {
          type: {
              set: function(e, t) {
                  if (!V.radioValue && "radio" === t && J.nodeName(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t
                  }
              }
          }
      }
  }), an = {
      set: function(e, t, n) {
          return t === !1 ? J.removeAttr(e, n) : e.setAttribute(n, n), n
      }
  }, J.each(J.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = on[t] || J.find.attr;
      on[t] = function(e, t, r) {
          var i, a;
          return r || (a = on[t], on[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, on[t] = a), i
      }
  });
  var sn = /^(?:input|select|textarea|button)$/i;
  J.fn.extend({
      prop: function(e, t) {
          return gt(this, J.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
          return this.each(function() {
              delete this[J.propFix[e] || e]
          })
      }
  }), J.extend({
      propFix: {
          "for": "htmlFor",
          "class": "className"
      },
      prop: function(e, t, n) {
          var r, i, a, o = e.nodeType;
          if (e && 3 !== o && 8 !== o && 2 !== o) return a = 1 !== o || !J.isXMLDoc(e), a && (t = J.propFix[t] || t, i = J.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  return e.hasAttribute("tabindex") || sn.test(e.nodeName) || e.href ? e.tabIndex : -1
              }
          }
      }
  }), V.optSelected || (J.propHooks.selected = {
      get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
      }
  }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      J.propFix[this.toLowerCase()] = this
  });
  var ln = /[\t\r\n\f]/g;
  J.fn.extend({
      addClass: function(e) {
          var t, n, r, i, a, o, s = "string" == typeof e && e,
              l = 0,
              c = this.length;
          if (J.isFunction(e)) return this.each(function(t) {
              J(this).addClass(e.call(this, t, this.className))
          });
          if (s)
              for (t = (e || "").match(dt) || []; c > l; l++)
                  if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : " ")) {
                      for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                      o = J.trim(r), n.className !== o && (n.className = o)
                  } return this
      },
      removeClass: function(e) {
          var t, n, r, i, a, o, s = 0 === arguments.length || "string" == typeof e && e,
              l = 0,
              c = this.length;
          if (J.isFunction(e)) return this.each(function(t) {
              J(this).removeClass(e.call(this, t, this.className))
          });
          if (s)
              for (t = (e || "").match(dt) || []; c > l; l++)
                  if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : "")) {
                      for (a = 0; i = t[a++];)
                          for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                      o = e ? J.trim(r) : "", n.className !== o && (n.className = o)
                  } return this
      },
      toggleClass: function(e, t) {
          var n = typeof e;
          return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(J.isFunction(e) ? function(n) {
              J(this).toggleClass(e.call(this, n, this.className, t), t)
          } : function() {
              if ("string" === n)
                  for (var t, r = 0, i = J(this), a = e.match(dt) || []; t = a[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
              else(n === jt || "boolean" === n) && (this.className && kt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : kt.get(this, "__className__") || "")
          })
      },
      hasClass: function(e) {
          for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
              if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ln, " ").indexOf(t) >= 0) return !0;
          return !1
      }
  });
  var cn = /\r/g;
  J.fn.extend({
      val: function(e) {
          var t, n, r, i = this[0]; {
              if (arguments.length) return r = J.isFunction(e), this.each(function(n) {
                  var i;
                  1 === this.nodeType && (i = r ? e.call(this, n, J(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : J.isArray(i) && (i = J.map(i, function(e) {
                      return null == e ? "" : e + ""
                  })), t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
              });
              if (i) return t = J.valHooks[i.type] || J.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(cn, "") : null == n ? "" : n)
          }
      }
  }), J.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = J.find.attr(e, "value");
                  return null != t ? t : J.trim(J.text(e))
              }
          },
          select: {
              get: function(e) {
                  for (var t, n, r = e.options, i = e.selectedIndex, a = "select-one" === e.type || 0 > i, o = a ? null : [], s = a ? i + 1 : r.length, l = 0 > i ? s : a ? i : 0; s > l; l++)
                      if (n = r[l], !(!n.selected && l !== i || (V.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                          if (t = J(n).val(), a) return t;
                          o.push(t)
                      } return o
              },
              set: function(e, t) {
                  for (var n, r, i = e.options, a = J.makeArray(t), o = i.length; o--;) r = i[o], (r.selected = J.inArray(r.value, a) >= 0) && (n = !0);
                  return n || (e.selectedIndex = -1), a
              }
          }
      }
  }), J.each(["radio", "checkbox"], function() {
      J.valHooks[this] = {
          set: function(e, t) {
              return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
          }
      }, V.checkOn || (J.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
      })
  }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      J.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
  }), J.fn.extend({
      hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
      },
      bind: function(e, t, n) {
          return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
          return this.off(e, null, t)
      },
      delegate: function(e, t, n, r) {
          return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
  });
  var un = J.now(),
      pn = /\?/;
  J.parseJSON = function(e) {
      return JSON.parse(e + "")
  }, J.parseXML = function(e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
          n = new DOMParser, t = n.parseFromString(e, "text/xml")
      } catch (r) {
          t = void 0
      }
      return (!t || t.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + e), t
  };
  var hn, dn, fn = /#.*$/,
      mn = /([?&])_=[^&]*/,
      gn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      kn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      yn = /^(?:GET|HEAD)$/,
      bn = /^\/\//,
      vn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Tn = {},
      wn = {},
      xn = "*/".concat("*");
  try {
      dn = location.href
  } catch (On) {
      dn = Q.createElement("a"), dn.href = "", dn = dn.href
  }
  hn = vn.exec(dn.toLowerCase()) || [], J.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: dn,
          type: "GET",
          isLocal: kn.test(hn[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": xn,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /xml/,
              html: /html/,
              json: /json/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": J.parseJSON,
              "text xml": J.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? z(z(e, J.ajaxSettings), t) : z(J.ajaxSettings, e)
      },
      ajaxPrefilter: L(Tn),
      ajaxTransport: L(wn),
      ajax: function(e, t) {
          function n(e, t, n, o) {
              var l, u, k, y, v, w = t;
              2 !== b && (b = 2, s && clearTimeout(s), r = void 0, a = o || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = R(p, T, n)), y = q(p, y, T, l), l ? (p.ifModified && (v = T.getResponseHeader("Last-Modified"), v && (J.lastModified[i] = v), v = T.getResponseHeader("etag"), v && (J.etag[i] = v)), 204 === e || "HEAD" === p.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = y.state, u = y.data, k = y.error, l = !k)) : (k = w, (e || !w) && (w = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || w) + "", l ? f.resolveWith(h, [u, w, T]) : f.rejectWith(h, [T, w, k]), T.statusCode(g), g = void 0, c && d.trigger(l ? "ajaxSuccess" : "ajaxError", [T, p, l ? u : k]), m.fireWith(h, [T, w]), c && (d.trigger("ajaxComplete", [T, p]), --J.active || J.event.trigger("ajaxStop")))
          }
          "object" == typeof e && (t = e, e = void 0), t = t || {};
          var r, i, a, o, s, l, c, u, p = J.ajaxSetup({}, t),
              h = p.context || p,
              d = p.context && (h.nodeType || h.jquery) ? J(h) : J.event,
              f = J.Deferred(),
              m = J.Callbacks("once memory"),
              g = p.statusCode || {},
              k = {},
              y = {},
              b = 0,
              v = "canceled",
              T = {
                  readyState: 0,
                  getResponseHeader: function(e) {
                      var t;
                      if (2 === b) {
                          if (!o)
                              for (o = {}; t = gn.exec(a);) o[t[1].toLowerCase()] = t[2];
                          t = o[e.toLowerCase()]
                      }
                      return null == t ? null : t
                  },
                  getAllResponseHeaders: function() {
                      return 2 === b ? a : null
                  },
                  setRequestHeader: function(e, t) {
                      var n = e.toLowerCase();
                      return b || (e = y[n] = y[n] || e, k[e] = t), this
                  },
                  overrideMimeType: function(e) {
                      return b || (p.mimeType = e), this
                  },
                  statusCode: function(e) {
                      var t;
                      if (e)
                          if (2 > b)
                              for (t in e) g[t] = [g[t], e[t]];
                          else T.always(e[T.status]);
                      return this
                  },
                  abort: function(e) {
                      var t = e || v;
                      return r && r.abort(t), n(0, t), this
                  }
              };
          if (f.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || dn) + "").replace(fn, "").replace(bn, hn[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = J.trim(p.dataType || "*").toLowerCase().match(dt) || [""], null == p.crossDomain && (l = vn.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === hn[1] && l[2] === hn[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (hn[3] || ("http:" === hn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = J.param(p.data, p.traditional)), $(Tn, p, t, T), 2 === b) return T;
          c = p.global, c && 0 === J.active++ && J.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !yn.test(p.type), i = p.url, p.hasContent || (p.data && (i = p.url += (pn.test(i) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = mn.test(i) ? i.replace(mn, "$1_=" + un++) : i + (pn.test(i) ? "&" : "?") + "_=" + un++)), p.ifModified && (J.lastModified[i] && T.setRequestHeader("If-Modified-Since", J.lastModified[i]), J.etag[i] && T.setRequestHeader("If-None-Match", J.etag[i])), (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + xn + "; q=0.01" : "") : p.accepts["*"]);
          for (u in p.headers) T.setRequestHeader(u, p.headers[u]);
          if (p.beforeSend && (p.beforeSend.call(h, T, p) === !1 || 2 === b)) return T.abort();
          v = "abort";
          for (u in {
                  success: 1,
                  error: 1,
                  complete: 1
              }) T[u](p[u]);
          if (r = $(wn, p, t, T)) {
              T.readyState = 1, c && d.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                  T.abort("timeout")
              }, p.timeout));
              try {
                  b = 1, r.send(k, n)
              } catch (w) {
                  if (!(2 > b)) throw w;
                  n(-1, w)
              }
          } else n(-1, "No Transport");
          return T
      },
      getJSON: function(e, t, n) {
          return J.get(e, t, n, "json")
      },
      getScript: function(e, t) {
          return J.get(e, void 0, t, "script")
      }
  }), J.each(["get", "post"], function(e, t) {
      J[t] = function(e, n, r, i) {
          return J.isFunction(n) && (i = i || r, r = n, n = void 0), J.ajax({
              url: e,
              type: t,
              dataType: i,
              data: n,
              success: r
          })
      }
  }), J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      J.fn[t] = function(e) {
          return this.on(t, e)
      }
  }), J._evalUrl = function(e) {
      return J.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          "throws": !0
      })
  }, J.fn.extend({
      wrapAll: function(e) {
          var t;
          return J.isFunction(e) ? this.each(function(t) {
              J(this).wrapAll(e.call(this, t))
          }) : (this[0] && (t = J(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
              for (var e = this; e.firstElementChild;) e = e.firstElementChild;
              return e
          }).append(this)), this)
      },
      wrapInner: function(e) {
          return this.each(J.isFunction(e) ? function(t) {
              J(this).wrapInner(e.call(this, t))
          } : function() {
              var t = J(this),
                  n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e)
          })
      },
      wrap: function(e) {
          var t = J.isFunction(e);
          return this.each(function(n) {
              J(this).wrapAll(t ? e.call(this, n) : e)
          })
      },
      unwrap: function() {
          return this.parent().each(function() {
              J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
          }).end()
      }
  }), J.expr.filters.hidden = function(e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0
  }, J.expr.filters.visible = function(e) {
      return !J.expr.filters.hidden(e)
  };
  var jn = /%20/g,
      Dn = /\[\]$/,
      Sn = /\r?\n/g,
      Cn = /^(?:submit|button|image|reset|file)$/i,
      _n = /^(?:input|select|textarea|keygen)/i;
  J.param = function(e, t) {
      var n, r = [],
          i = function(e, t) {
              t = J.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
          };
      if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function() {
          i(this.name, this.value)
      });
      else
          for (n in e) H(n, e[n], t, i);
      return r.join("&").replace(jn, "+")
  }, J.fn.extend({
      serialize: function() {
          return J.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = J.prop(this, "elements");
              return e ? J.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !J(this).is(":disabled") && _n.test(this.nodeName) && !Cn.test(e) && (this.checked || !Ot.test(e))
          }).map(function(e, t) {
              var n = J(this).val();
              return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(Sn, "\r\n")
                  }
              }) : {
                  name: t.name,
                  value: n.replace(Sn, "\r\n")
              }
          }).get()
      }
  }), J.ajaxSettings.xhr = function() {
      try {
          return new XMLHttpRequest
      } catch (e) {}
  };
  var Nn = 0,
      In = {},
      En = {
          0: 200,
          1223: 204
      },
      An = J.ajaxSettings.xhr();
  e.ActiveXObject && J(e).on("unload", function() {
      for (var e in In) In[e]()
  }), V.cors = !!An && "withCredentials" in An, V.ajax = An = !!An, J.ajaxTransport(function(e) {
      var t;
      return V.cors || An && !e.crossDomain ? {
          send: function(n, r) {
              var i, a = e.xhr(),
                  o = ++Nn;
              if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                  for (i in e.xhrFields) a[i] = e.xhrFields[i];
              e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
              for (i in n) a.setRequestHeader(i, n[i]);
              t = function(e) {
                  return function() {
                      t && (delete In[o], t = a.onload = a.onerror = null, "abort" === e ? a.abort() : "error" === e ? r(a.status, a.statusText) : r(En[a.status] || a.status, a.statusText, "string" == typeof a.responseText ? {
                          text: a.responseText
                      } : void 0, a.getAllResponseHeaders()))
                  }
              }, a.onload = t(), a.onerror = t("error"), t = In[o] = t("abort");
              try {
                  a.send(e.hasContent && e.data || null)
              } catch (s) {
                  if (t) throw s
              }
          },
          abort: function() {
              t && t()
          }
      } : void 0
  }), J.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /(?:java|ecma)script/
      },
      converters: {
          "text script": function(e) {
              return J.globalEval(e), e
          }
      }
  }), J.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), J.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
          var t, n;
          return {
              send: function(r, i) {
                  t = J("<script>").prop({
                      async: !0,
                      charset: e.scriptCharset,
                      src: e.url
                  }).on("load error", n = function(e) {
                      t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                  }), Q.head.appendChild(t[0])
              },
              abort: function() {
                  n && n()
              }
          }
      }
  });
  var Pn = [],
      Ln = /(=)\?(?=&|$)|\?\?/;
  J.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var e = Pn.pop() || J.expando + "_" + un++;
          return this[e] = !0, e
      }
  }), J.ajaxPrefilter("json jsonp", function(t, n, r) {
      var i, a, o, s = t.jsonp !== !1 && (Ln.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ln.test(t.data) && "data");
      return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ln, "$1" + i) : t.jsonp !== !1 && (t.url += (pn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
          return o || J.error(i + " was not called"), o[0]
      }, t.dataTypes[0] = "json", a = e[i], e[i] = function() {
          o = arguments
      }, r.always(function() {
          e[i] = a, t[i] && (t.jsonpCallback = n.jsonpCallback, Pn.push(i)), o && J.isFunction(a) && a(o[0]), o = a = void 0
      }), "script") : void 0
  }), J.parseHTML = function(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || Q;
      var r = ot.exec(e),
          i = !n && [];
      return r ? [t.createElement(r[1])] : (r = J.buildFragment([e], t, i), i && i.length && J(i).remove(), J.merge([], r.childNodes))
  };
  var $n = J.fn.load;
  J.fn.load = function(e, t, n) {
      if ("string" != typeof e && $n) return $n.apply(this, arguments);
      var r, i, a, o = this,
          s = e.indexOf(" ");
      return s >= 0 && (r = J.trim(e.slice(s)), e = e.slice(0, s)), J.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), o.length > 0 && J.ajax({
          url: e,
          type: i,
          dataType: "html",
          data: t
      }).done(function(e) {
          a = arguments, o.html(r ? J("<div>").append(J.parseHTML(e)).find(r) : e)
      }).complete(n && function(e, t) {
          o.each(n, a || [e.responseText, t, e])
      }), this
  }, J.expr.filters.animated = function(e) {
      return J.grep(J.timers, function(t) {
          return e === t.elem
      }).length
  };
  var zn = e.document.documentElement;
  J.offset = {
      setOffset: function(e, t, n) {
          var r, i, a, o, s, l, c, u = J.css(e, "position"),
              p = J(e),
              h = {};
          "static" === u && (e.style.position = "relative"), s = p.offset(), a = J.css(e, "top"), l = J.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (a + l).indexOf("auto") > -1, c ? (r = p.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(l) || 0), J.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (h.top = t.top - s.top + o), null != t.left && (h.left = t.left - s.left + i), "using" in t ? t.using.call(e, h) : p.css(h)
      }
  }, J.fn.extend({
      offset: function(e) {
          if (arguments.length) return void 0 === e ? this : this.each(function(t) {
              J.offset.setOffset(this, e, t)
          });
          var t, n, r = this[0],
              i = {
                  top: 0,
                  left: 0
              },
              a = r && r.ownerDocument;
          if (a) return t = a.documentElement, J.contains(t, r) ? (typeof r.getBoundingClientRect !== jt && (i = r.getBoundingClientRect()), n = M(a), {
              top: i.top + n.pageYOffset - t.clientTop,
              left: i.left + n.pageXOffset - t.clientLeft
          }) : i
      },
      position: function() {
          if (this[0]) {
              var e, t, n = this[0],
                  r = {
                      top: 0,
                      left: 0
                  };
              return "fixed" === J.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), J.nodeName(e[0], "html") || (r = e.offset()), r.top += J.css(e[0], "borderTopWidth", !0), r.left += J.css(e[0], "borderLeftWidth", !0)), {
                  top: t.top - r.top - J.css(n, "marginTop", !0),
                  left: t.left - r.left - J.css(n, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              for (var e = this.offsetParent || zn; e && !J.nodeName(e, "html") && "static" === J.css(e, "position");) e = e.offsetParent;
              return e || zn
          })
      }
  }), J.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(t, n) {
      var r = "pageYOffset" === n;
      J.fn[t] = function(i) {
          return gt(this, function(t, i, a) {
              var o = M(t);
              return void 0 === a ? o ? o[n] : t[i] : void(o ? o.scrollTo(r ? e.pageXOffset : a, r ? a : e.pageYOffset) : t[i] = a)
          }, t, i, arguments.length, null)
      }
  }), J.each(["top", "left"], function(e, t) {
      J.cssHooks[t] = w(V.pixelPosition, function(e, n) {
          return n ? (n = T(e, t), Ft.test(n) ? J(e).position()[t] + "px" : n) : void 0
      })
  }), J.each({
      Height: "height",
      Width: "width"
  }, function(e, t) {
      J.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
      }, function(n, r) {
          J.fn[r] = function(r, i) {
              var a = arguments.length && (n || "boolean" != typeof r),
                  o = n || (r === !0 || i === !0 ? "margin" : "border");
              return gt(this, function(t, n, r) {
                  var i;
                  return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? J.css(t, n, o) : J.style(t, n, r, o)
              }, t, a ? r : void 0, a, null)
          }
      })
  }), J.fn.size = function() {
      return this.length
  }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return J
  });
  var Rn = e.jQuery,
      qn = e.$;
  return J.noConflict = function(t) {
      return e.$ === J && (e.$ = qn), t && e.jQuery === J && (e.jQuery = Rn), J
  }, typeof t === jt && (e.jQuery = e.$ = J), J
}),
function() {
  ! function(e) {
      return "function" == typeof define && define.amd ? define(["jquery"], e) : e(window.jQuery)
  }(function(e) {
      "use strict";
      var t, n, r, i, a, o, s, l, c, u, p;
      return u = "caret", t = function() {
          function t(e) {
              this.$inputor = e, this.domInputor = this.$inputor[0]
          }
          return t.prototype.setPos = function() {
              return this.domInputor
          }, t.prototype.getIEPosition = function() {
              return e.noop()
          }, t.prototype.getPosition = function() {
              return e.noop()
          }, t.prototype.getOldIEPos = function() {
              var e, t;
              return t = s.selection.createRange(), e = s.body.createTextRange(), e.moveToElementText(this.domInputor), e.setEndPoint("EndToEnd", t), e.text.length
          }, t.prototype.getPos = function() {
              var e, t, n;
              return (n = this.range()) ? (e = n.cloneRange(), e.selectNodeContents(this.domInputor), e.setEnd(n.endContainer, n.endOffset), t = e.toString().length, e.detach(), t) : s.selection ? this.getOldIEPos() : void 0
          }, t.prototype.getOldIEOffset = function() {
              var e, t;
              return e = s.selection.createRange().duplicate(), e.moveStart("character", -1), t = e.getBoundingClientRect(), {
                  height: t.bottom - t.top,
                  left: t.left,
                  top: t.top
              }
          }, t.prototype.getOffset = function() {
              var t, n, r, i;
              if (c.getSelection && (r = this.range())) {
                  if (r.endOffset - 1 < 0) return null;
                  t = r.cloneRange(), t.setStart(r.endContainer, r.endOffset - 1), t.setEnd(r.endContainer, r.endOffset), i = t.getBoundingClientRect(), n = {
                      height: i.height,
                      left: i.left + i.width,
                      top: i.top
                  }, t.detach()
              } else s.selection && (n = this.getOldIEOffset());
              return n && !l && (n.top += e(c).scrollTop(), n.left += e(c).scrollLeft()), n
          }, t.prototype.range = function() {
              var e;
              if (c.getSelection) return e = c.getSelection(), e.rangeCount > 0 ? e.getRangeAt(0) : null
          }, t
      }(), n = function() {
          function t(e) {
              this.$inputor = e, this.domInputor = this.$inputor[0]
          }
          return t.prototype.getIEPos = function() {
              var e, t, n, r, i, a, o;
              return t = this.domInputor, a = s.selection.createRange(), i = 0, a && a.parentElement() === t && (r = t.value.replace(/\r\n/g, "\n"), n = r.length, o = t.createTextRange(), o.moveToBookmark(a.getBookmark()), e = t.createTextRange(), e.collapse(!1), i = o.compareEndPoints("StartToEnd", e) > -1 ? n : -o.moveStart("character", -n)), i
          }, t.prototype.getPos = function() {
              return s.selection ? this.getIEPos() : this.domInputor.selectionStart
          }, t.prototype.setPos = function(e) {
              var t, n;
              return t = this.domInputor, s.selection ? (n = t.createTextRange(), n.move("character", e), n.select()) : t.setSelectionRange && t.setSelectionRange(e, e), t
          }, t.prototype.getIEOffset = function(e) {
              var t, n, r, i;
              return n = this.domInputor.createTextRange(), e || (e = this.getPos()), n.move("character", e), r = n.boundingLeft, i = n.boundingTop, t = n.boundingHeight, {
                  left: r,
                  top: i,
                  height: t
              }
          }, t.prototype.getOffset = function(t) {
              var n, r, i;
              return n = this.$inputor, s.selection ? (r = this.getIEOffset(t), r.top += e(c).scrollTop() + n.scrollTop(), r.left += e(c).scrollLeft() + n.scrollLeft(), r) : (r = n.offset(), i = this.getPosition(t), r = {
                  left: r.left + i.left - n.scrollLeft(),
                  top: r.top + i.top - n.scrollTop(),
                  height: i.height
              })
          }, t.prototype.getPosition = function(e) {
              var t, n, i, a, o, s;
              return t = this.$inputor, i = function(e) {
                  return e.replace(/</g, "&lt").replace(/>/g, "&gt").replace(/`/g, "&#96").replace(/"/g, "&quot").replace(/\r\n|\r|\n/g, "<br />")
              }, void 0 === e && (e = this.getPos()), s = t.val().slice(0, e), a = "<span>" + i(s) + "</span>", a += "<span id='caret'>|</span>", o = new r(t), n = o.create(a).rect()
          }, t.prototype.getIEPosition = function(e) {
              var t, n, r, i, a;
              return r = this.getIEOffset(e), n = this.$inputor.offset(), i = r.left - n.left, a = r.top - n.top, t = r.height, {
                  left: i,
                  top: a,
                  height: t
              }
          }, t
      }(), r = function() {
          function t(e) {
              this.$inputor = e
          }
          return t.prototype.css_attr = ["overflowY", "height", "width", "paddingTop", "paddingLeft", "paddingRight", "paddingBottom", "marginTop", "marginLeft", "marginRight", "marginBottom", "fontFamily", "borderStyle", "borderWidth", "wordWrap", "fontSize", "lineHeight", "overflowX", "text-align"], t.prototype.mirrorCss = function() {
              var t, n = this;
              return t = {
                  position: "absolute",
                  left: -9999,
                  top: 0,
                  zIndex: -2e4,
                  "white-space": "pre-wrap"
              }, e.each(this.css_attr, function(e, r) {
                  return t[r] = n.$inputor.css(r)
              }), t
          }, t.prototype.create = function(t) {
              return this.$mirror = e("<div></div>"), this.$mirror.css(this.mirrorCss()), this.$mirror.html(t), this.$inputor.after(this.$mirror), this
          }, t.prototype.rect = function() {
              var e, t, n;
              return e = this.$mirror.find("#caret"), t = e.position(), n = {
                  left: t.left,
                  top: t.top,
                  height: e.height()
              }, this.$mirror.remove(), n
          }, t
      }(), i = {
          contentEditable: function(e) {
              return !(!e[0].contentEditable || "true" !== e[0].contentEditable)
          }
      }, o = {
          pos: function(e) {
              return e || 0 === e ? this.setPos(e) : this.getPos()
          },
          position: function(e) {
              return s.selection ? this.getIEPosition(e) : this.getPosition(e)
          },
          offset: function(t) {
              var n, r;
              return r = this.getOffset(t), l && (n = e(l).offset(), r.top += n.top, r.left += n.left), r
          }
      }, s = null, c = null, l = null, p = function(e) {
          return l = e, c = e.contentWindow, s = e.contentDocument || c.document
      }, a = function(t, n) {
          var r, i;
          if (e.isPlainObject(n) && (i = n.iframe)) return t.data("caret-iframe", i), p(i);
          if (i = t.data("caret-iframe")) return p(i);
          s = t[0].ownerDocument, c = s.defaultView || s.parentWindow;
          try {
              return l = c.frameElement
          } catch (a) {
              r = a
          }
      }, e.fn.caret = function(r) {
          var s;
          return "object" == typeof r ? (a(this, r), this) : o[r] ? (a(this), s = i.contentEditable(this) ? new t(this) : new n(this), o[r].apply(s, Array.prototype.slice.call(arguments, 1))) : e.error("Method " + r + " does not exist on jQuery.caret")
      }, e.fn.caret.EditableCaret = t, e.fn.caret.InputCaret = n, e.fn.caret.Utils = i, e.fn.caret.apis = o
  })
}.call(this),
  function() {
      ! function(e) {
          return "function" == typeof define && define.amd ? define(["jquery"], e) : e(window.jQuery)
      }(function(e) {
          var t, n, r, i, a, o, s, l, c, u = [].slice;
          r = function() {
              function t(t) {
                  this.current_flag = null, this.controllers = {}, this.alias_maps = {}, this.$inputor = e(t), this.iframe = null, this.setIframe(), this.listen()
              }
              return t.prototype.setIframe = function(e) {
                  var t;
                  if (e) return this.window = e.contentWindow, this.document = e.contentDocument || this.window.document, this.iframe = e, this;
                  this.document = this.$inputor[0].ownerDocument, this.window = this.document.defaultView || this.document.parentWindow;
                  try {
                      return this.iframe = this.window.frameElement
                  } catch (n) {
                      t = n
                  }
              }, t.prototype.controller = function(e) {
                  var t, n, r, i;
                  if (this.alias_maps[e]) n = this.controllers[this.alias_maps[e]];
                  else {
                      i = this.controllers;
                      for (r in i)
                          if (t = i[r], r === e) {
                              n = t;
                              break
                          }
                  }
                  return n ? n : this.controllers[this.current_flag]
              }, t.prototype.set_context_for = function(e) {
                  return this.current_flag = e, this
              }, t.prototype.reg = function(e, t) {
                  var n, r;
                  return n = (r = this.controllers)[e] || (r[e] = new a(this, e)), t.alias && (this.alias_maps[t.alias] = e), n.init(t), this
              }, t.prototype.listen = function() {
                  return this.$inputor.on("keyup.atwhoInner", function(e) {
                      return function(t) {
                          return e.on_keyup(t)
                      }
                  }(this)).on("keydown.atwhoInner", function(e) {
                      return function(t) {
                          return e.on_keydown(t)
                      }
                  }(this)).on("scroll.atwhoInner", function(e) {
                      return function(t) {
                          var n;
                          return null != (n = e.controller()) ? n.view.hide(t) : void 0
                      }
                  }(this)).on("blur.atwhoInner", function(e) {
                      return function(t) {
                          var n;
                          return (n = e.controller()) ? n.view.hide(t, n.get_opt("display_timeout")) : void 0
                      }
                  }(this))
              }, t.prototype.shutdown = function() {
                  var e, t, n;
                  n = this.controllers;
                  for (t in n) e = n[t], e.destroy(), delete this.controllers[t];
                  return this.$inputor.off(".atwhoInner")
              }, t.prototype.dispatch = function() {
                  return e.map(this.controllers, function(e) {
                      return function(t) {
                          var n;
                          return (n = t.get_opt("delay")) ? (clearTimeout(e.delayedCallback), e.delayedCallback = setTimeout(function() {
                              return t.look_up() ? e.set_context_for(t.at) : void 0
                          }, n)) : t.look_up() ? e.set_context_for(t.at) : void 0
                      }
                  }(this))
              }, t.prototype.on_keyup = function(t) {
                  var n;
                  switch (t.keyCode) {
                      case s.ESC:
                          t.preventDefault(), null != (n = this.controller()) && n.view.hide();
                          break;
                      case s.DOWN:
                      case s.UP:
                      case s.CTRL:
                          e.noop();
                          break;
                      case s.P:
                      case s.N:
                          t.ctrlKey || this.dispatch();
                          break;
                      default:
                          this.dispatch()
                  }
              }, t.prototype.on_keydown = function(t) {
                  var n, r;
                  if (n = null != (r = this.controller()) ? r.view : void 0, n && n.visible()) switch (t.keyCode) {
                      case s.ESC:
                          t.preventDefault(), n.hide(t);
                          break;
                      case s.UP:
                          t.preventDefault(), n.prev();
                          break;
                      case s.DOWN:
                          t.preventDefault(), n.next();
                          break;
                      case s.P:
                          if (!t.ctrlKey) return;
                          t.preventDefault(), n.prev();
                          break;
                      case s.N:
                          if (!t.ctrlKey) return;
                          t.preventDefault(), n.next();
                          break;
                      case s.TAB:
                      case s.ENTER:
                          if (!n.visible()) return;
                          t.preventDefault(), n.choosing = !0, n.choose(t);
                          break;
                      default:
                          e.noop()
                  }
              }, t
          }(), a = function() {
              function n(n, r) {
                  this.app = n, this.at = r, this.$inputor = this.app.$inputor, this.id = this.$inputor[0].id || this.uid(), this.setting = null, this.query = null, this.pos = 0, this.cur_rect = null, this.range = null, t.append(this.$el = e("<div id='atwho-ground-" + this.id + "'></div>")), this.model = new l(this), this.view = new c(this)
              }
              return n.prototype.uid = function() {
                  return (Math.random().toString(16) + "000000000").substr(2, 8) + (new Date).getTime()
              }, n.prototype.init = function(t) {
                  return this.setting = e.extend({}, this.setting || e.fn.atwho["default"], t), this.view.init(), this.model.reload(this.setting.data)
              }, n.prototype.destroy = function() {
                  return this.trigger("beforeDestroy"), this.model.destroy(), this.view.destroy(), this.$el.remove()
              }, n.prototype.call_default = function() {
                  var t, n, r;
                  r = arguments[0], t = 2 <= arguments.length ? u.call(arguments, 1) : [];
                  try {
                      return o[r].apply(this, t)
                  } catch (i) {
                      return n = i, e.error("" + n + " Or maybe At.js doesn't have function " + r)
                  }
              }, n.prototype.trigger = function(e, t) {
                  var n, r;
                  return null == t && (t = []), t.push(this), n = this.get_opt("alias"), r = n ? "" + e + "-" + n + ".atwho" : "" + e + ".atwho", this.$inputor.trigger(r, t)
              }, n.prototype.callbacks = function(e) {
                  return this.get_opt("callbacks")[e] || o[e]
              }, n.prototype.get_opt = function(e) {
                  var t;
                  try {
                      return this.setting[e]
                  } catch (n) {
                      return t = n, null
                  }
              }, n.prototype.content = function() {
                  return this.$inputor.is("textarea, input") ? this.$inputor.val() : this.$inputor.text()
              }, n.prototype.catch_query = function() {
                  var e, t, n, r, i, a;
                  return t = this.content(), e = this.$inputor.caret("pos"), a = t.slice(0, e), r = this.callbacks("matcher").call(this, this.at, a, this.get_opt("start_with_space")), "string" == typeof r && r.length <= this.get_opt("max_len", 20) ? (i = e - r.length, n = i + r.length, this.pos = i, r = {
                      text: r,
                      head_pos: i,
                      end_pos: n
                  }, this.trigger("matched", [this.at, r.text])) : (r = null, this.view.hide()), this.query = r
              }, n.prototype.rect = function() {
                  var e, t;
                  if (e = this.$inputor.caret({
                          iframe: this.app.iframe
                      }).caret("offset", this.pos - 1)) return "true" === this.$inputor.attr("contentEditable") && (e = this.cur_rect || (this.cur_rect = e) || e), t = this.app.document.selection ? 0 : 2, {
                      left: e.left,
                      top: e.top,
                      bottom: e.top + e.height + t
                  }
              }, n.prototype.reset_rect = function() {
                  return "true" === this.$inputor.attr("contentEditable") ? this.cur_rect = null : void 0
              }, n.prototype.mark_range = function() {
                  return "true" === this.$inputor.attr("contentEditable") && (this.app.window.getSelection && (this.range = this.app.window.getSelection().getRangeAt(0)), this.app.document.selection) ? this.ie8_range = this.app.document.selection.createRange() : void 0
              }, n.prototype.insert_content_for = function(t) {
                  var n, r, i;
                  return r = t.data("value"), i = this.get_opt("insert_tpl"), this.$inputor.is("textarea, input") || !i ? r : (n = e.extend({}, t.data("item-data"), {
                      "atwho-data-value": r,
                      "atwho-at": this.at
                  }), this.callbacks("tpl_eval").call(this, i, n))
              }, n.prototype.insert = function(t, n) {
                  var r, i, a, o, s, l, c, u, p, h, d;
                  return r = this.$inputor, "true" === r.attr("contentEditable") && (a = "atwho-view-flag atwho-view-flag-" + (this.get_opt("alias") || this.at), o = "" + t + "<span contenteditable='false'>&nbsp;<span>", s = "<span contenteditable='false' class='" + a + "'>" + o + "</span>", i = e(s, this.app.document).data("atwho-data-item", n.data("item-data")), this.app.document.selection && (i = e("<span contenteditable='true'></span>", this.app.document).html(i))), r.is("textarea, input") ? (t = this.get_opt("space_after") ? t + " " : "" + t, p = r.val(), h = p.slice(0, Math.max(this.query.head_pos - this.at.length, 0)), d = "" + h + t + p.slice(this.query.end_pos || 0), r.val(d), r.caret("pos", h.length + t.length)) : (c = this.range) ? (l = c.startOffset - (this.query.end_pos - this.query.head_pos) - this.at.length, c.setStart(c.endContainer, Math.max(l, 0)), c.setEnd(c.endContainer, c.endOffset), c.deleteContents(), c.insertNode(i[0]), c.collapse(!1), u = this.app.window.getSelection(), u.removeAllRanges(), u.addRange(c)) : (c = this.ie8_range) && (c.moveStart("character", this.query.end_pos - this.query.head_pos - this.at.length), c.pasteHTML(o), c.collapse(!1), c.select()), r.is(":focus") || r.focus(), r.change()
              }, n.prototype.render_view = function(e) {
                  var t;
                  return t = this.get_opt("search_key"), e = this.callbacks("sorter").call(this, this.query.text, e.slice(0, 1001), t), this.view.render(e.slice(0, this.get_opt("limit")))
              }, n.prototype.look_up = function() {
                  var t, n;
                  if (t = this.catch_query()) return n = function(e) {
                      return e && e.length > 0 ? this.render_view(e) : this.view.hide()
                  }, this.model.query(t.text, e.proxy(n, this)), t
              }, n
          }(), l = function() {
              function t(e) {
                  this.context = e, this.at = this.context.at, this.storage = this.context.$inputor
              }
              return t.prototype.destroy = function() {
                  return this.storage.data(this.at, null)
              }, t.prototype.saved = function() {
                  return this.fetch() > 0
              }, t.prototype.query = function(e, t) {
                  var n, r, i;
                  return n = this.fetch(), r = this.context.get_opt("search_key"), n = this.context.callbacks("filter").call(this.context, e, n, r) || [], i = this.context.callbacks("remote_filter"), n.length > 0 || !i && 0 === n.length ? t(n) : i.call(this.context, e, t)
              }, t.prototype.fetch = function() {
                  return this.storage.data(this.at) || []
              }, t.prototype.save = function(e) {
                  return this.storage.data(this.at, this.context.callbacks("before_save").call(this.context, e || []))
              }, t.prototype.load = function(e) {
                  return !this.saved() && e ? this._load(e) : void 0
              }, t.prototype.reload = function(e) {
                  return this._load(e)
              }, t.prototype._load = function(t) {
                  return "string" == typeof t ? e.ajax(t, {
                      dataType: "json"
                  }).done(function(e) {
                      return function(t) {
                          return e.save(t)
                      }
                  }(this)) : this.save(t)
              }, t
          }(), c = function() {
              function t(t) {
                  this.context = t, this.$el = e("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>"), this.timeout_id = null, this.context.$el.append(this.$el), this.bind_event()
              }
              return t.prototype.init = function() {
                  var e;
                  return e = this.context.get_opt("alias") || this.context.at.charCodeAt(0), this.$el.attr({
                      id: "at-view-" + e
                  })
              }, t.prototype.destroy = function() {
                  return this.$el.remove()
              }, t.prototype.bind_event = function() {
                  var t;
                  return t = this.$el.find("ul"), t.on("mouseenter.atwho-view", "li", function(n) {
                      return t.find(".cur").removeClass("cur"), e(n.currentTarget).addClass("cur")
                  }).on("click", function(e) {
                      return function(t) {
                          return e.choose(t), t.preventDefault()
                      }
                  }(this))
              }, t.prototype.visible = function() {
                  return this.$el.is(":visible")
              }, t.prototype.choose = function(e) {
                  var t, n;
                  return (t = this.$el.find(".cur")).length ? (n = this.context.insert_content_for(t), this.context.insert(this.context.callbacks("before_insert").call(this.context, n, t), t), this.context.trigger("inserted", [t, e]), this.hide(e)) : void 0
              }, t.prototype.reposition = function(t) {
                  var n, r;
                  return t.bottom + this.$el.height() - e(window).scrollTop() > e(window).height() && (t.bottom = t.top - this.$el.height()), n = {
                      left: t.left,
                      top: t.bottom
                  }, null != (r = this.context.callbacks("before_reposition")) && r.call(this.context, n), this.$el.offset(n), this.context.trigger("reposition", [n])
              }, t.prototype.next = function() {
                  var e, t;
                  return e = this.$el.find(".cur").removeClass("cur"), t = e.next(), t.length || (t = this.$el.find("li:first")), t.addClass("cur")
              }, t.prototype.prev = function() {
                  var e, t;
                  return e = this.$el.find(".cur").removeClass("cur"), t = e.prev(), t.length || (t = this.$el.find("li:last")), t.addClass("cur")
              }, t.prototype.show = function() {
                  var e;
                  return this.choosing ? void(this.choosing = !1) : (this.context.mark_range(), this.visible() || (this.$el.show(), this.context.trigger("shown")), (e = this.context.rect()) ? this.reposition(e) : void 0)
              }, t.prototype.hide = function(e, t) {
                  var n;
                  if (this.visible()) return isNaN(t) ? (this.context.reset_rect(), this.$el.hide(), this.context.trigger("hidden", [e])) : (n = function(e) {
                      return function() {
                          return e.hide()
                      }
                  }(this), clearTimeout(this.timeout_id), this.timeout_id = setTimeout(n, t))
              }, t.prototype.render = function(t) {
                  var n, r, i, a, o, s, l;
                  if (!(e.isArray(t) && t.length > 0)) return void this.hide();
                  for (this.$el.find("ul").empty(), r = this.$el.find("ul"), o = this.context.get_opt("tpl"), s = 0, l = t.length; l > s; s++) i = t[s], i = e.extend({}, i, {
                      "atwho-at": this.context.at
                  }), a = this.context.callbacks("tpl_eval").call(this.context, o, i), n = e(this.context.callbacks("highlighter").call(this.context, a, this.context.query.text)), n.data("item-data", i), r.append(n);
                  return this.show(), this.context.get_opt("highlight_first") ? r.find("li:first").addClass("cur") : void 0
              }, t
          }(), s = {
              DOWN: 40,
              UP: 38,
              ESC: 27,
              TAB: 9,
              ENTER: 13,
              CTRL: 17,
              P: 80,
              N: 78
          }, o = {
              before_save: function(t) {
                  var n, r, i, a;
                  if (!e.isArray(t)) return t;
                  for (a = [], r = 0, i = t.length; i > r; r++) n = t[r], a.push(e.isPlainObject(n) ? n : {
                      name: n
                  });
                  return a
              },
              matcher: function(e, t, n) {
                  var r, i;
                  return e = e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), n && (e = "(?:^|\\s)" + e), i = new RegExp(e + "([A-Za-z0-9_+-]*)$|" + e + "([^\\x00-\\xff]*)$", "gi"), r = i.exec(t), r ? r[2] || r[1] : null
              },
              filter: function(e, t, n) {
                  var r, i, a, o;
                  for (o = [], i = 0, a = t.length; a > i; i++) r = t[i], ~r[n].toLowerCase().indexOf(e.toLowerCase()) && o.push(r);
                  return o
              },
              remote_filter: null,
              sorter: function(e, t, n) {
                  var r, i, a, o;
                  if (!e) return t;
                  for (o = [], i = 0, a = t.length; a > i; i++) r = t[i], r.atwho_order = r[n].toLowerCase().indexOf(e.toLowerCase()), r.atwho_order > -1 && o.push(r);
                  return o.sort(function(e, t) {
                      return e.atwho_order - t.atwho_order
                  })
              },
              tpl_eval: function(e, t) {
                  var n;
                  try {
                      return e.replace(/\$\{([^\}]*)\}/g, function(e, n) {
                          return t[n]
                      })
                  } catch (r) {
                      return n = r, ""
                  }
              },
              highlighter: function(e, t) {
                  var n;
                  return t ? (n = new RegExp(">\\s*(\\w*?)(" + t.replace("+", "\\+") + ")(\\w*)\\s*<", "ig"), e.replace(n, function(e, t, n, r) {
                      return "> " + t + "<strong>" + n + "</strong>" + r + " <"
                  })) : e
              },
              before_insert: function(e) {
                  return e
              }
          }, n = {
              load: function(e, t) {
                  var n;
                  return (n = this.controller(e)) ? n.model.load(t) : void 0
              },
              getInsertedItemsWithIDs: function(t) {
                  var n, r, i;
                  return (n = this.controller(t)) ? (t && (t = "-" + (n.get_opt("alias") || n.at)), r = [], i = e.map(this.$inputor.find("span.atwho-view-flag" + (t || "")), function(t) {
                      var n;
                      return n = e(t).data("atwho-data-item"), r.indexOf(n.id) > -1 ? void 0 : (n.id && (r.push = n.id), n)
                  }), [r, i]) : [null, null]
              },
              getInsertedItems: function(e) {
                  return n.getInsertedItemsWithIDs.apply(this, [e])[1]
              },
              getInsertedIDs: function(e) {
                  return n.getInsertedItemsWithIDs.apply(this, [e])[0]
              },
              setIframe: function(e) {
                  return this.setIframe(e)
              },
              run: function() {
                  return this.dispatch()
              },
              destroy: function() {
                  return this.shutdown(), this.$inputor.data("atwho", null)
              }
          }, i = {
              init: function(t) {
                  var n, i;
                  return i = (n = e(this)).data("atwho"), i || n.data("atwho", i = new r(this)), i.reg(t.at, t), this
              }
          }, t = e("<div id='atwho-container'></div>"), e.fn.atwho = function(r) {
              var a, o;
              return o = arguments, e("body").append(t), a = null, this.filter("textarea, input, [contenteditable=true]").each(function() {
                  var t;
                  return "object" != typeof r && r ? n[r] ? (t = e(this).data("atwho")) ? a = n[r].apply(t, Array.prototype.slice.call(o, 1)) : void 0 : e.error("Method " + r + " does not exist on jQuery.caret") : i.init.apply(this, o)
              }), a || this
          }, e.fn.atwho["default"] = {
              at: void 0,
              alias: void 0,
              space_after: !0,
              data: null,
              tpl: "<li data-value='${atwho-at}${name}'>${name}</li>",
              insert_tpl: "<span>${atwho-data-value}</span>",
              callbacks: o,
              search_key: "name",
              start_with_space: !0,
              highlight_first: !0,
              limit: 5,
              max_len: 20,
              display_timeout: 300,
              delay: null
          }
      })
  }.call(this),
  function(e) {
      var t, n = {
              className: "autosizejs",
              id: "autosizejs",
              append: "\n",
              callback: !1,
              resizeDelay: 10,
              placeholder: !0
          },
          r = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',
          i = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent", "whiteSpace"],
          a = e(r).data("autosize", !0)[0];
      a.style.lineHeight = "99px", "99px" === e(a).css("lineHeight") && i.push("lineHeight"), a.style.lineHeight = "", e.fn.autosize = function(r) {
          return this.length ? (r = e.extend({}, n, r || {}), a.parentNode !== document.body && e(document.body).append(a), this.each(function() {
              function n() {
                  var t, n = window.getComputedStyle ? window.getComputedStyle(h, null) : !1;
                  n ? (t = h.getBoundingClientRect().width, (0 === t || "number" != typeof t) && (t = parseInt(n.width, 10)), e.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(e, r) {
                      t -= parseInt(n[r], 10)
                  })) : t = d.width(), a.style.width = Math.max(t, 0) + "px"
              }

              function o() {
                  var o = {};
                  if (t = h, a.className = r.className, a.id = r.id, c = parseInt(d.css("maxHeight"), 10), e.each(i, function(e, t) {
                          o[t] = d.css(t)
                      }), e(a).css(o).attr("wrap", d.attr("wrap")), n(), window.chrome) {
                      var s = h.style.width;
                      h.style.width = "0px"; {
                          h.offsetWidth
                      }
                      h.style.width = s
                  }
              }

              function s() {
                  var e, i;
                  t !== h ? o() : n(), a.value = !h.value && r.placeholder ? d.attr("placeholder") || "" : h.value, a.value += r.append || "", a.style.overflowY = h.style.overflowY, i = parseInt(h.style.height, 10), a.scrollTop = 0, a.scrollTop = 9e4, e = a.scrollTop, c && e > c ? (h.style.overflowY = "scroll", e = c) : (h.style.overflowY = "hidden", u > e && (e = u)), e += f, i !== e && (h.style.height = e + "px", m && r.callback.call(h, h), d.trigger("autosize.resized"))
              }

              function l() {
                  clearTimeout(p), p = setTimeout(function() {
                      var e = d.width();
                      e !== k && (k = e, s())
                  }, parseInt(r.resizeDelay, 10))
              }
              var c, u, p, h = this,
                  d = e(h),
                  f = 0,
                  m = e.isFunction(r.callback),
                  g = {
                      height: h.style.height,
                      overflow: h.style.overflow,
                      overflowY: h.style.overflowY,
                      wordWrap: h.style.wordWrap,
                      resize: h.style.resize
                  },
                  k = d.width(),
                  y = d.css("resize");
              d.data("autosize") || (d.data("autosize", !0), ("border-box" === d.css("box-sizing") || "border-box" === d.css("-moz-box-sizing") || "border-box" === d.css("-webkit-box-sizing")) && (f = d.outerHeight() - d.height()), u = Math.max(parseInt(d.css("minHeight"), 10) - f || 0, d.height()), d.css({
                  overflow: "hidden",
                  overflowY: "hidden",
                  wordWrap: "break-word"
              }), "vertical" === y ? d.css("resize", "none") : "both" === y && d.css("resize", "horizontal"), "onpropertychange" in h ? "oninput" in h ? d.on("input.autosize keyup.autosize", s) : d.on("propertychange.autosize", function() {
                  "value" === event.propertyName && s()
              }) : d.on("input.autosize", s), r.resizeDelay !== !1 && e(window).on("resize.autosize", l), d.on("autosize.resize", s), d.on("autosize.resizeIncludeStyle", function() {
                  t = null, s()
              }), d.on("autosize.destroy", function() {
                  t = null, clearTimeout(p), e(window).off("resize", l), d.off("autosize").off(".autosize").css(g).removeData("autosize")
              }), s())
          })) : this
      }
  }(jQuery || $),
  function(e) {
      "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
  }(function(e) {
      "use strict";

      function t(t) {
          return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = c), void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = e.extend({}, e.fn.swipe.defaults, t), this.each(function() {
              var r = e(this),
                  i = r.data(S);
              i || (i = new n(this, t), r.data(S, i))
          })
      }

      function n(t, n) {
          function C(t) {
              if (!(ct() || e(t.target).closest(n.excludedElements, Ut).length > 0)) {
                  var r, i = t.originalEvent ? t.originalEvent : t,
                      a = O ? i.touches[0] : i;
                  return Bt = v, O ? Zt = i.touches.length : t.preventDefault(), Lt = 0, $t = null, Ft = null, zt = 0, Rt = 0, qt = 0, Ht = 1, Mt = 0, Xt = ft(), Wt = kt(), st(), !O || Zt === n.fingers || n.fingers === y || W() ? (pt(0, a), Gt = Dt(), 2 == Zt && (pt(1, i.touches[1]), Rt = qt = vt(Xt[0].start, Xt[1].start)), (n.swipeStatus || n.pinchStatus) && (r = L(i, Bt))) : r = !1, r === !1 ? (Bt = x, L(i, Bt), r) : (n.hold && (en = setTimeout(e.proxy(function() {
                      Ut.trigger("hold", [i.target]), n.hold && (r = n.hold.call(Ut, i, i.target))
                  }, this), n.longTapThreshold)), ut(!0), null)
              }
          }

          function _(e) {
              var t = e.originalEvent ? e.originalEvent : e;
              if (Bt !== w && Bt !== x && !lt()) {
                  var r, i = O ? t.touches[0] : t,
                      a = ht(i);
                  if (Yt = Dt(), O && (Zt = t.touches.length), n.hold && clearTimeout(en), Bt = T, 2 == Zt && (0 == Rt ? (pt(1, t.touches[1]), Rt = qt = vt(Xt[0].start, Xt[1].start)) : (ht(t.touches[1]), qt = vt(Xt[0].end, Xt[1].end), Ft = wt(Xt[0].end, Xt[1].end)), Ht = Tt(Rt, qt), Mt = Math.abs(Rt - qt)), Zt === n.fingers || n.fingers === y || !O || W()) {
                      if ($t = jt(a.start, a.end), M(e, $t), Lt = xt(a.start, a.end), zt = bt(), mt($t, Lt), (n.swipeStatus || n.pinchStatus) && (r = L(t, Bt)), !n.triggerOnTouchEnd || n.triggerOnTouchLeave) {
                          var o = !0;
                          if (n.triggerOnTouchLeave) {
                              var s = St(this);
                              o = Ct(a.end, s)
                          }!n.triggerOnTouchEnd && o ? Bt = P(T) : n.triggerOnTouchLeave && !o && (Bt = P(w)), (Bt == x || Bt == w) && L(t, Bt)
                      }
                  } else Bt = x, L(t, Bt);
                  r === !1 && (Bt = x, L(t, Bt))
              }
          }

          function N(e) {
              var t = e.originalEvent;
              return O && t.touches.length > 0 ? (ot(), !0) : (lt() && (Zt = Qt), Yt = Dt(), zt = bt(), R() || !z() ? (Bt = x, L(t, Bt)) : n.triggerOnTouchEnd || 0 == n.triggerOnTouchEnd && Bt === T ? (e.preventDefault(), Bt = w, L(t, Bt)) : !n.triggerOnTouchEnd && V() ? (Bt = w, $(t, Bt, d)) : Bt === T && (Bt = x, L(t, Bt)), ut(!1), null)
          }

          function I() {
              Zt = 0, Yt = 0, Gt = 0, Rt = 0, qt = 0, Ht = 1, st(), ut(!1)
          }

          function E(e) {
              var t = e.originalEvent;
              n.triggerOnTouchLeave && (Bt = P(w), L(t, Bt))
          }

          function A() {
              Ut.unbind(Nt, C), Ut.unbind(Pt, I), Ut.unbind(It, _), Ut.unbind(Et, N), At && Ut.unbind(At, E), ut(!1)
          }

          function P(e) {
              var t = e,
                  r = H(),
                  i = z(),
                  a = R();
              return !r || a ? t = x : !i || e != T || n.triggerOnTouchEnd && !n.triggerOnTouchLeave ? !i && e == w && n.triggerOnTouchLeave && (t = x) : t = w, t
          }

          function L(e, t) {
              var n = void 0;
              return X() || Z() ? n = $(e, t, p) : (U() || W()) && n !== !1 && (n = $(e, t, h)), it() && n !== !1 ? n = $(e, t, f) : at() && n !== !1 ? n = $(e, t, m) : rt() && n !== !1 && (n = $(e, t, d)), t === x && I(e), t === w && (O ? 0 == e.touches.length && I(e) : I(e)), n
          }

          function $(t, c, u) {
              var g = void 0;
              if (u == p) {
                  if (Ut.trigger("swipeStatus", [c, $t || null, Lt || 0, zt || 0, Zt, Xt]), n.swipeStatus && (g = n.swipeStatus.call(Ut, t, c, $t || null, Lt || 0, zt || 0, Zt, Xt), g === !1)) return !1;
                  if (c == w && B()) {
                      if (Ut.trigger("swipe", [$t, Lt, zt, Zt, Xt]), n.swipe && (g = n.swipe.call(Ut, t, $t, Lt, zt, Zt, Xt), g === !1)) return !1;
                      switch ($t) {
                          case r:
                              Ut.trigger("swipeLeft", [$t, Lt, zt, Zt, Xt]), n.swipeLeft && (g = n.swipeLeft.call(Ut, t, $t, Lt, zt, Zt, Xt));
                              break;
                          case i:
                              Ut.trigger("swipeRight", [$t, Lt, zt, Zt, Xt]), n.swipeRight && (g = n.swipeRight.call(Ut, t, $t, Lt, zt, Zt, Xt));
                              break;
                          case a:
                              Ut.trigger("swipeUp", [$t, Lt, zt, Zt, Xt]), n.swipeUp && (g = n.swipeUp.call(Ut, t, $t, Lt, zt, Zt, Xt));
                              break;
                          case o:
                              Ut.trigger("swipeDown", [$t, Lt, zt, Zt, Xt]), n.swipeDown && (g = n.swipeDown.call(Ut, t, $t, Lt, zt, Zt, Xt))
                      }
                  }
              }
              if (u == h) {
                  if (Ut.trigger("pinchStatus", [c, Ft || null, Mt || 0, zt || 0, Zt, Ht, Xt]), n.pinchStatus && (g = n.pinchStatus.call(Ut, t, c, Ft || null, Mt || 0, zt || 0, Zt, Ht, Xt), g === !1)) return !1;
                  if (c == w && F()) switch (Ft) {
                      case s:
                          Ut.trigger("pinchIn", [Ft || null, Mt || 0, zt || 0, Zt, Ht, Xt]), n.pinchIn && (g = n.pinchIn.call(Ut, t, Ft || null, Mt || 0, zt || 0, Zt, Ht, Xt));
                          break;
                      case l:
                          Ut.trigger("pinchOut", [Ft || null, Mt || 0, zt || 0, Zt, Ht, Xt]), n.pinchOut && (g = n.pinchOut.call(Ut, t, Ft || null, Mt || 0, zt || 0, Zt, Ht, Xt))
                  }
              }
              return u == d ? (c === x || c === w) && (clearTimeout(Jt), clearTimeout(en), Q() && !et() ? (Kt = Dt(), Jt = setTimeout(e.proxy(function() {
                  Kt = null, Ut.trigger("tap", [t.target]), n.tap && (g = n.tap.call(Ut, t, t.target))
              }, this), n.doubleTapThreshold)) : (Kt = null, Ut.trigger("tap", [t.target]), n.tap && (g = n.tap.call(Ut, t, t.target)))) : u == f ? (c === x || c === w) && (clearTimeout(Jt), Kt = null, Ut.trigger("doubletap", [t.target]), n.doubleTap && (g = n.doubleTap.call(Ut, t, t.target))) : u == m && (c === x || c === w) && (clearTimeout(Jt), Kt = null, Ut.trigger("longtap", [t.target]), n.longTap && (g = n.longTap.call(Ut, t, t.target))), g
          }

          function z() {
              var e = !0;
              return null !== n.threshold && (e = Lt >= n.threshold), e
          }

          function R() {
              var e = !1;
              return null !== n.cancelThreshold && null !== $t && (e = gt($t) - Lt >= n.cancelThreshold), e
          }

          function q() {
              return null !== n.pinchThreshold ? Mt >= n.pinchThreshold : !0
          }

          function H() {
              var e;
              return e = n.maxTimeThreshold && zt >= n.maxTimeThreshold ? !1 : !0
          }

          function M(e, t) {
              if (n.allowPageScroll === c || W()) e.preventDefault();
              else {
                  var s = n.allowPageScroll === u;
                  switch (t) {
                      case r:
                          (n.swipeLeft && s || !s && n.allowPageScroll != g) && e.preventDefault();
                          break;
                      case i:
                          (n.swipeRight && s || !s && n.allowPageScroll != g) && e.preventDefault();
                          break;
                      case a:
                          (n.swipeUp && s || !s && n.allowPageScroll != k) && e.preventDefault();
                          break;
                      case o:
                          (n.swipeDown && s || !s && n.allowPageScroll != k) && e.preventDefault()
                  }
              }
          }

          function F() {
              var e = G(),
                  t = Y(),
                  n = q();
              return e && t && n
          }

          function W() {
              return !!(n.pinchStatus || n.pinchIn || n.pinchOut)
          }

          function U() {
              return !(!F() || !W())
          }

          function B() {
              var e = H(),
                  t = z(),
                  n = G(),
                  r = Y(),
                  i = R(),
                  a = !i && r && n && t && e;
              return a
          }

          function Z() {
              return !!(n.swipe || n.swipeStatus || n.swipeLeft || n.swipeRight || n.swipeUp || n.swipeDown)
          }

          function X() {
              return !(!B() || !Z())
          }

          function G() {
              return Zt === n.fingers || n.fingers === y || !O
          }

          function Y() {
              return 0 !== Xt[0].end.x
          }

          function V() {
              return !!n.tap
          }

          function Q() {
              return !!n.doubleTap
          }

          function K() {
              return !!n.longTap
          }

          function J() {
              if (null == Kt) return !1;
              var e = Dt();
              return Q() && e - Kt <= n.doubleTapThreshold
          }

          function et() {
              return J()
          }

          function tt() {
              return (1 === Zt || !O) && (isNaN(Lt) || Lt < n.threshold)
          }

          function nt() {
              return zt > n.longTapThreshold && b > Lt
          }

          function rt() {
              return !(!tt() || !V())
          }

          function it() {
              return !(!J() || !Q())
          }

          function at() {
              return !(!nt() || !K())
          }

          function ot() {
              Vt = Dt(), Qt = event.touches.length + 1
          }

          function st() {
              Vt = 0, Qt = 0
          }

          function lt() {
              var e = !1;
              if (Vt) {
                  var t = Dt() - Vt;
                  t <= n.fingerReleaseThreshold && (e = !0)
              }
              return e
          }

          function ct() {
              return !(Ut.data(S + "_intouch") !== !0)
          }

          function ut(e) {
              e === !0 ? (Ut.bind(It, _), Ut.bind(Et, N), At && Ut.bind(At, E)) : (Ut.unbind(It, _, !1), Ut.unbind(Et, N, !1), At && Ut.unbind(At, E, !1)), Ut.data(S + "_intouch", e === !0)
          }

          function pt(e, t) {
              var n = void 0 !== t.identifier ? t.identifier : 0;
              return Xt[e].identifier = n, Xt[e].start.x = Xt[e].end.x = t.pageX || t.clientX, Xt[e].start.y = Xt[e].end.y = t.pageY || t.clientY, Xt[e]
          }

          function ht(e) {
              var t = void 0 !== e.identifier ? e.identifier : 0,
                  n = dt(t);
              return n.end.x = e.pageX || e.clientX, n.end.y = e.pageY || e.clientY, n
          }

          function dt(e) {
              for (var t = 0; t < Xt.length; t++)
                  if (Xt[t].identifier == e) return Xt[t]
          }

          function ft() {
              for (var e = [], t = 0; 5 >= t; t++) e.push({
                  start: {
                      x: 0,
                      y: 0
                  },
                  end: {
                      x: 0,
                      y: 0
                  },
                  identifier: 0
              });
              return e
          }

          function mt(e, t) {
              t = Math.max(t, gt(e)), Wt[e].distance = t
          }

          function gt(e) {
              return Wt[e] ? Wt[e].distance : void 0
          }

          function kt() {
              var e = {};
              return e[r] = yt(r), e[i] = yt(i), e[a] = yt(a), e[o] = yt(o), e
          }

          function yt(e) {
              return {
                  direction: e,
                  distance: 0
              }
          }

          function bt() {
              return Yt - Gt
          }

          function vt(e, t) {
              var n = Math.abs(e.x - t.x),
                  r = Math.abs(e.y - t.y);
              return Math.round(Math.sqrt(n * n + r * r))
          }

          function Tt(e, t) {
              var n = t / e * 1;
              return n.toFixed(2)
          }

          function wt() {
              return 1 > Ht ? l : s
          }

          function xt(e, t) {
              return Math.round(Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)))
          }

          function Ot(e, t) {
              var n = e.x - t.x,
                  r = t.y - e.y,
                  i = Math.atan2(r, n),
                  a = Math.round(180 * i / Math.PI);
              return 0 > a && (a = 360 - Math.abs(a)), a
          }

          function jt(e, t) {
              var n = Ot(e, t);
              return 45 >= n && n >= 0 ? r : 360 >= n && n >= 315 ? r : n >= 135 && 225 >= n ? i : n > 45 && 135 > n ? o : a
          }

          function Dt() {
              var e = new Date;
              return e.getTime()
          }

          function St(t) {
              t = e(t);
              var n = t.offset(),
                  r = {
                      left: n.left,
                      right: n.left + t.outerWidth(),
                      top: n.top,
                      bottom: n.top + t.outerHeight()
                  };
              return r
          }

          function Ct(e, t) {
              return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
          }
          var _t = O || D || !n.fallbackToMouseEvents,
              Nt = _t ? D ? j ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
              It = _t ? D ? j ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
              Et = _t ? D ? j ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
              At = _t ? null : "mouseleave",
              Pt = D ? j ? "MSPointerCancel" : "pointercancel" : "touchcancel",
              Lt = 0,
              $t = null,
              zt = 0,
              Rt = 0,
              qt = 0,
              Ht = 1,
              Mt = 0,
              Ft = 0,
              Wt = null,
              Ut = e(t),
              Bt = "start",
              Zt = 0,
              Xt = null,
              Gt = 0,
              Yt = 0,
              Vt = 0,
              Qt = 0,
              Kt = 0,
              Jt = null,
              en = null;
          try {
              Ut.bind(Nt, C), Ut.bind(Pt, I)
          } catch (tn) {
              e.error("events not supported " + Nt + "," + Pt + " on jQuery.swipe")
          }
          this.enable = function() {
              return Ut.bind(Nt, C), Ut.bind(Pt, I), Ut
          }, this.disable = function() {
              return A(), Ut
          }, this.destroy = function() {
              return A(), Ut.data(S, null), Ut
          }, this.option = function(t, r) {
              if (void 0 !== n[t]) {
                  if (void 0 === r) return n[t];
                  n[t] = r
              } else e.error("Option " + t + " does not exist on jQuery.swipe.options");
              return null
          }
      }
      var r = "left",
          i = "right",
          a = "up",
          o = "down",
          s = "in",
          l = "out",
          c = "none",
          u = "auto",
          p = "swipe",
          h = "pinch",
          d = "tap",
          f = "doubletap",
          m = "longtap",
          g = "horizontal",
          k = "vertical",
          y = "all",
          b = 10,
          v = "start",
          T = "move",
          w = "end",
          x = "cancel",
          O = "ontouchstart" in window,
          j = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
          D = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
          S = "TouchSwipe",
          C = {
              fingers: 1,
              threshold: 75,
              cancelThreshold: null,
              pinchThreshold: 20,
              maxTimeThreshold: null,
              fingerReleaseThreshold: 250,
              longTapThreshold: 500,
              doubleTapThreshold: 200,
              swipe: null,
              swipeLeft: null,
              swipeRight: null,
              swipeUp: null,
              swipeDown: null,
              swipeStatus: null,
              pinchIn: null,
              pinchOut: null,
              pinchStatus: null,
              click: null,
              tap: null,
              doubleTap: null,
              longTap: null,
              hold: null,
              triggerOnTouchEnd: !0,
              triggerOnTouchLeave: !1,
              allowPageScroll: "auto",
              fallbackToMouseEvents: !0,
              excludedElements: "label, button, input, select, textarea, a, .noSwipe"
          };
      e.fn.swipe = function(n) {
          var r = e(this),
              i = r.data(S);
          if (i && "string" == typeof n) {
              if (i[n]) return i[n].apply(this, Array.prototype.slice.call(arguments, 1));
              e.error("Method " + n + " does not exist on jQuery.swipe")
          } else if (!(i || "object" != typeof n && n)) return t.apply(this, arguments);
          return r
      }, e.fn.swipe.defaults = C, e.fn.swipe.phases = {
          PHASE_START: v,
          PHASE_MOVE: T,
          PHASE_END: w,
          PHASE_CANCEL: x
      }, e.fn.swipe.directions = {
          LEFT: r,
          RIGHT: i,
          UP: a,
          DOWN: o,
          IN: s,
          OUT: l
      }, e.fn.swipe.pageScroll = {
          NONE: c,
          HORIZONTAL: g,
          VERTICAL: k,
          AUTO: u
      }, e.fn.swipe.fingers = {
          ONE: 1,
          TWO: 2,
          THREE: 3,
          ALL: y
      }
  }),
  function() {
      var e, t, n, r, i, a, o, s, l, c;
      e = window.device, window.device = {}, n = window.document.documentElement, c = window.navigator.userAgent.toLowerCase(), device.ios = function() {
          return device.iphone() || device.ipod() || device.ipad()
      }, device.iphone = function() {
          return r("iphone")
      }, device.ipod = function() {
          return r("ipod")
      }, device.ipad = function() {
          return r("ipad")
      }, device.android = function() {
          return r("android")
      }, device.androidPhone = function() {
          return device.android() && r("mobile")
      }, device.androidTablet = function() {
          return device.android() && !r("mobile")
      }, device.blackberry = function() {
          return r("blackberry") || r("bb10") || r("rim")
      }, device.blackberryPhone = function() {
          return device.blackberry() && !r("tablet")
      }, device.blackberryTablet = function() {
          return device.blackberry() && r("tablet")
      }, device.windows = function() {
          return r("windows")
      }, device.windowsPhone = function() {
          return device.windows() && r("phone")
      }, device.windowsTablet = function() {
          return device.windows() && r("touch") && !device.windowsPhone()
      }, device.fxos = function() {
          return (r("(mobile;") || r("(tablet;")) && r("; rv:")
      }, device.fxosPhone = function() {
          return device.fxos() && r("mobile")
      }, device.fxosTablet = function() {
          return device.fxos() && r("tablet")
      }, device.meego = function() {
          return r("meego")
      }, device.cordova = function() {
          return window.cordova && "file:" === location.protocol
      }, device.nodeWebkit = function() {
          return "object" == typeof window.process
      }, device.mobile = function() {
          return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego()
      }, device.tablet = function() {
          return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet()
      }, device.desktop = function() {
          return !device.tablet() && !device.mobile()
      }, device.portrait = function() {
          return window.innerHeight / window.innerWidth > 1
      }, device.landscape = function() {
          return window.innerHeight / window.innerWidth < 1
      }, device.noConflict = function() {
          return window.device = e, this
      }, r = function(e) {
          return -1 !== c.indexOf(e)
      }, a = function(e) {
          var t;
          return t = new RegExp(e, "i"), n.className.match(t)
      }, t = function(e) {
          return a(e) ? void 0 : n.className += " " + e
      }, s = function(e) {
          return a(e) ? n.className = n.className.replace(e, "") : void 0
      }, device.ios() ? device.ipad() ? t("ios ipad tablet") : device.iphone() ? t("ios iphone mobile") : device.ipod() && t("ios ipod mobile") : t(device.android() ? device.androidTablet() ? "android tablet" : "android mobile" : device.blackberry() ? device.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" : device.windows() ? device.windowsTablet() ? "windows tablet" : device.windowsPhone() ? "windows mobile" : "desktop" : device.fxos() ? device.fxosTablet() ? "fxos tablet" : "fxos mobile" : device.meego() ? "meego mobile" : device.nodeWebkit() ? "node-webkit" : "desktop"), device.cordova() && t("cordova"), i = function() {
          return device.landscape() ? (s("portrait"), t("landscape")) : (s("landscape"), t("portrait"))
      }, l = "onorientationchange" in window, o = l ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(o, i, !1) : window.attachEvent ? window.attachEvent(o, i) : window[o] = i, i()
  }.call(this);
var AvroPhonetic = function(e, t, n) {
  return new function(e, t, n) {
      function r() {}

      function a() {
          this._init()
      }

      function o(e, t) {
          "function" == typeof e && (this._loadCandidateSelectionsFromFile = e), "function" == typeof t && (this._saveCandidateSelectionsToFile = t), this._init()
      }
      var s, l = {},
          c = function(e) {
              l[s] = {};
              for (dkeys in e) l[s][dkeys] = e[dkeys]
          };
      s = "utf8", c({
          utf8Decode: function(e) {
              return e
          }
      }), s = "version", l.version = "2013.12.9", s = "suffixdict";
      var u = {
          e: "ে",
          r: "র",
          y: "য়",
          o: "ও",
          i: "ই",
          eo: "েও",
          ei: "েই",
          er: "ের",
          gon: "গণ",
          ke: "কে",
          ro: "রও",
          ri: "রই",
          ra: "রা",
          re: "রে",
          te: "তে",
          yo: "য়ও",
          yi: "য়ই",
          ye: "য়ে",
          shob: "সব",
          sob: "সব",
          ta: "টা",
          ti: "টি",
          shoho: "সহ",
          soho: "সহ",
          der: "দের",
          digo: "দিগ",
          ero: "েরও",
          eri: "েরই",
          era: "েরা",
          ere: "েরে",
          ete: "েতে",
          gono: "গণও",
          goni: "গণই",
          gone: "গণে",
          keo: "কেও",
          kei: "কেই",
          rao: "রাও",
          rai: "রাই",
          reo: "রেও",
          rei: "রেই",
          teo: "তেও",
          tei: "তেই",
          yeo: "য়েও",
          yei: "য়েই",
          yer: "য়ের",
          kul: "কুল",
          shobo: "সবও",
          shobi: "সবই",
          shobe: "সবে",
          shokol: "সকল",
          sobo: "সবও",
          sobi: "সবই",
          sobe: "সবে",
          sokol: "সকল",
          tao: "টাও",
          tai: "টাই",
          tar: "টার",
          tay: "টায়",
          tio: "টিও",
          tii: "টিই",
          tir: "টির",
          shohoo: "সহও",
          shohoi: "সহই",
          sohoo: "সহও",
          sohoi: "সহই",
          tuk: "টুক",
          gun: "গুণ",
          dero: "দেরও",
          deri: "দেরই",
          dige: "দিগে",
          digoo: "দিগও",
          digoi: "দিগই",
          erao: "েরাও",
          erai: "েরাই",
          ereo: "েরেও",
          erei: "েরেই",
          eteo: "েতেও",
          etei: "েতেই",
          goneo: "গণেও",
          gonei: "গণেই",
          goner: "গণের",
          gonke: "গণকে",
          gula: "গুলা",
          guli: "গুলি",
          gulo: "গুলো",
          yero: "য়েরও",
          yeri: "য়েরই",
          yera: "য়েরা",
          yere: "য়েরে",
          yete: "য়েতে",
          borgo: "বর্গ",
          borrgo: "বর্গ",
          gonra: "গণরা",
          khana: "খানা",
          khani: "খানি",
          kulo: "কুলও",
          kuli: "কুলই",
          kule: "কুলে",
          mala: "মালা",
          raji: "রাজি",
          razi: "রাজি",
          shobeo: "সবেও",
          shobei: "সবেই",
          shober: "সবের",
          shobke: "সবকে",
          shokolo: "সকলও",
          shokoli: "সকলই",
          shokole: "সকলে",
          shomuho: "সমূহ",
          sobeo: "সবেও",
          sobei: "সবেই",
          sober: "সবের",
          sobke: "সবকে",
          sokolo: "সকলও",
          sokoli: "সকলই",
          sokole: "সকলে",
          somuho: "সমূহ",
          take: "টাকে",
          taro: "টারও",
          tari: "টারই",
          tare: "টারে",
          tate: "টাতে",
          tayo: "টায়ও",
          tayi: "টায়ই",
          tike: "টিকে",
          tiro: "টিরও",
          tiri: "টিরই",
          tire: "টিরে",
          tite: "টিতে",
          mulok: "মূলক",
          shuchok: "সূচক",
          shucok: "সূচক",
          suchok: "সূচক",
          sucok: "সূচক",
          gaca: "গাছা",
          gacha: "গাছা",
          gachha: "গাছা",
          gachhi: "গাছি",
          gachi: "গাছি",
          gaci: "গাছি",
          tuko: "টুকও",
          tuki: "টুকই",
          tuke: "টুকে",
          tuku: "টুকু",
          guno: "গুণও",
          guni: "গুণই",
          derke: "দেরকে",
          digeo: "দিগেও",
          digei: "দিগেই",
          diger: "দিগের",
          digoke: "দিগকে",
          digore: "দিগরে",
          gonero: "গণেরও",
          goneri: "গণেরই",
          gonkeo: "গণকেও",
          gonkei: "গণকেই",
          gulao: "গুলাও",
          gulai: "গুলাই",
          gulan: "গুলান",
          gular: "গুলার",
          gulio: "গুলিও",
          gulii: "গুলিই",
          gulir: "গুলির",
          guloo: "গুলোও",
          guloi: "গুলোই",
          gulor: "গুলোর",
          yerao: "য়েরাও",
          yerai: "য়েরাই",
          yereo: "য়েরেও",
          yerei: "য়েরেই",
          yeteo: "য়েতেও",
          yetei: "য়েতেই",
          borge: "বর্গে",
          borgoo: "বর্গও",
          borgoi: "বর্গই",
          borrge: "বর্গে",
          borrgoo: "বর্গও",
          borrgoi: "বর্গই",
          brindo: "বৃন্দ",
          brrindo: "বৃন্দ",
          gonrao: "গণরাও",
          gonrai: "গণরাই",
          khanao: "খানাও",
          khanai: "খানাই",
          khanar: "খানার",
          khanay: "খানায়",
          khaner: "খানের",
          khanio: "খানিও",
          khanii: "খানিই",
          khanir: "খানির",
          kuleo: "কুলেও",
          kulei: "কুলেই",
          kuler: "কুলের",
          kulke: "কুলকে",
          malao: "মালাও",
          malai: "মালাই",
          malar: "মালার",
          malay: "মালায়",
          punjo: "পুঞ্জ",
          rajio: "রাজিও",
          rajii: "রাজিই",
          rajir: "রাজির",
          razio: "রাজিও",
          razii: "রাজিই",
          shobero: "সবেরও",
          shoberi: "সবেরই",
          shobkeo: "সবকেও",
          shobkei: "সবকেই",
          shokoleo: "সকলেও",
          shokolei: "সকলেই",
          shokoler: "সকলের",
          shokolke: "সকলকে",
          shokolre: "সকলরে",
          shomuhe: "সমূহে",
          shomuhoo: "সমূহও",
          shomuhoi: "সমূহই",
          sobero: "সবেরও",
          soberi: "সবেরই",
          sobkeo: "সবকেও",
          sobkei: "সবকেই",
          sokoleo: "সকলেও",
          sokolei: "সকলেই",
          sokoler: "সকলের",
          sokolke: "সকলকে",
          sokolre: "সকলরে",
          somuhe: "সমূহে",
          somuhoo: "সমূহও",
          somuhoi: "সমূহই",
          takeo: "টাকেও",
          takei: "টাকেই",
          tareo: "টারেও",
          tarei: "টারেই",
          tateo: "টাতেও",
          tatei: "টাতেই",
          tikeo: "টিকেও",
          tikei: "টিকেই",
          tireo: "টিরেও",
          tirei: "টিরেই",
          titeo: "টিতেও",
          titei: "টিতেই",
          bises: "বিশেষ",
          bishesh: "বিশেষ",
          jatio: "জাতীয়",
          jatiyo: "জাতীয়",
          muloko: "মূলকও",
          muloki: "মূলকই",
          shuchoko: "সূচকও",
          shuchoki: "সূচকই",
          shucoko: "সূচকও",
          shucoki: "সূচকই",
          suchoko: "সূচকও",
          suchoki: "সূচকই",
          sucoko: "সূচকও",
          sucoki: "সূচকই",
          gacao: "গাছাও",
          gacai: "গাছাই",
          gacar: "গাছার",
          gachao: "গাছাও",
          gachai: "গাছাই",
          gachar: "গাছার",
          gachhao: "গাছাও",
          gachhai: "গাছাই",
          gachhar: "গাছার",
          gachhio: "গাছিও",
          gachhii: "গাছিই",
          gachhir: "গাছির",
          gachio: "গাছিও",
          gachii: "গাছিই",
          gachir: "গাছির",
          gacio: "গাছিও",
          gacii: "গাছিই",
          gacir: "গাছির",
          tukeo: "টুকেও",
          tukei: "টুকেই",
          tuker: "টুকের",
          tukke: "টুককে",
          tukre: "টুকরে",
          tukte: "টুকতে",
          tukuo: "টুকুও",
          tukui: "টুকুই",
          tukun: "টুকুন",
          tukur: "টুকুর",
          guner: "গুণের",
          gunke: "গুণকে",
          gunre: "গুণরে",
          dara: "দ্বারা",
          derkeo: "দেরকেও",
          derkei: "দেরকেই",
          digero: "দিগেরও",
          digeri: "দিগেরই",
          digere: "দিগেরে",
          digete: "দিগেতে",
          digokeo: "দিগকেও",
          digokei: "দিগকেই",
          digoreo: "দিগরেও",
          digorei: "দিগরেই",
          dwara: "দ্বারা",
          gulake: "গুলাকে",
          gulano: "গুলানও",
          gulani: "গুলানই",
          gularo: "গুলারও",
          gulari: "গুলারই",
          gulate: "গুলাতে",
          gulike: "গুলিকে",
          guliro: "গুলিরও",
          guliri: "গুলিরই",
          gulite: "গুলিতে",
          guloke: "গুলোকে",
          guloro: "গুলোরও",
          gulori: "গুলোরই",
          gulote: "গুলোতে",
          korrtrrik: "কর্তৃক",
          kortrik: "কর্তৃক",
          borgeo: "বর্গেও",
          borgei: "বর্গেই",
          borger: "বর্গের",
          borgoke: "বর্গকে",
          borrgeo: "বর্গেও",
          borrgei: "বর্গেই",
          borrger: "বর্গের",
          borrgoke: "বর্গকে",
          brinde: "বৃন্দে",
          brindoo: "বৃন্দও",
          brindoi: "বৃন্দই",
          brrinde: "বৃন্দে",
          brrindoo: "বৃন্দও",
          brrindoi: "বৃন্দই",
          khanake: "খানাকে",
          khanaro: "খানারও",
          khanari: "খানারই",
          khanare: "খানারে",
          khanate: "খানাতে",
          khanayo: "খানায়ও",
          khanayi: "খানায়ই",
          khanero: "খানেরও",
          khaneri: "খানেরই",
          khanete: "খানেতে",
          khanike: "খানিকে",
          khaniro: "খানিরও",
          khaniri: "খানিরই",
          khanire: "খানিরে",
          khanite: "খানিতে",
          kulero: "কুলেরও",
          kuleri: "কুলেরই",
          kulkeo: "কুলকেও",
          kulkei: "কুলকেই",
          malake: "মালাকে",
          malaro: "মালারও",
          malari: "মালারই",
          malara: "মালারা",
          malate: "মালাতে",
          malayo: "মালায়ও",
          malayi: "মালায়ই",
          mondoli: "মণ্ডলী",
          punje: "পুঞ্জে",
          punjoo: "পুঞ্জও",
          punjoi: "পুঞ্জই",
          rajike: "রাজিকে",
          rajiro: "রাজিরও",
          rajiri: "রাজিরই",
          rajira: "রাজিরা",
          rajite: "রাজিতে",
          shokolero: "সকলেরও",
          shokoleri: "সকলেরই",
          shokolera: "সকলেরা",
          shokolkeo: "সকলকেও",
          shokolkei: "সকলকেই",
          shokolreo: "সকলরেও",
          shokolrei: "সকলরেই",
          shomuheo: "সমূহেও",
          shomuhei: "সমূহেই",
          shomuher: "সমূহের",
          shomuhoke: "সমূহকে",
          shomuhore: "সমূহরে",
          shomuhote: "সমূহতে",
          sokolero: "সকলেরও",
          sokoleri: "সকলেরই",
          sokolera: "সকলেরা",
          sokolkeo: "সকলকেও",
          sokolkei: "সকলকেই",
          sokolreo: "সকলরেও",
          sokolrei: "সকলরেই",
          somuheo: "সমূহেও",
          somuhei: "সমূহেই",
          somuher: "সমূহের",
          somuhoke: "সমূহকে",
          somuhore: "সমূহরে",
          somuhote: "সমূহতে",
          biseso: "বিশেষও",
          bisesi: "বিশেষই",
          bishesho: "বিশেষও",
          bisheshi: "বিশেষই",
          jatioo: "জাতীয়ও",
          jatioi: "জাতীয়ই",
          jatiyoo: "জাতীয়ও",
          jatiyoi: "জাতীয়ই",
          shorup: "স্বরূপ",
          shworup: "স্বরূপ",
          sorup: "স্বরূপ",
          sworup: "স্বরূপ",
          gacake: "গাছাকে",
          gacaro: "গাছারও",
          gacari: "গাছারই",
          gacare: "গাছারে",
          gacate: "গাছাতে",
          gachake: "গাছাকে",
          gacharo: "গাছারও",
          gachari: "গাছারই",
          gachare: "গাছারে",
          gachate: "গাছাতে",
          gachhake: "গাছাকে",
          gachharo: "গাছারও",
          gachhari: "গাছারই",
          gachhare: "গাছারে",
          gachhate: "গাছাতে",
          gachhike: "গাছিকে",
          gachhiro: "গাছিরও",
          gachhiri: "গাছিরই",
          gachhire: "গাছিরে",
          gachhite: "গাছিতে",
          gachike: "গাছিকে",
          gachiro: "গাছিরও",
          gachiri: "গাছিরই",
          gachire: "গাছিরে",
          gachite: "গাছিতে",
          gacike: "গাছিকে",
          gaciro: "গাছিরও",
          gaciri: "গাছিরই",
          gacire: "গাছিরে",
          gacite: "গাছিতে",
          tukero: "টুকেরও",
          tukeri: "টুকেরই",
          tukkeo: "টুককেও",
          tukkei: "টুককেই",
          tukreo: "টুকরেও",
          tukrei: "টুকরেই",
          tukteo: "টুকতেও",
          tuktei: "টুকতেই",
          tukuke: "টুকুকে",
          tukuno: "টুকুনও",
          tukuni: "টুকুনই",
          tukune: "টুকুনে",
          tukuro: "টুকুরও",
          tukuri: "টুকুরই",
          tukure: "টুকুরে",
          tukute: "টুকুতে",
          gunero: "গুণেরও",
          guneri: "গুণেরই",
          gunkeo: "গুণকেও",
          gunkei: "গুণকেই",
          gunreo: "গুণরেও",
          gunrei: "গুণরেই",
          darao: "দ্বারাও",
          darai: "দ্বারাই",
          digereo: "দিগেরেও",
          digerei: "দিগেরেই",
          digeteo: "দিগেতেও",
          digetei: "দিগেতেই",
          dwarao: "দ্বারাও",
          dwarai: "দ্বারাই",
          gulakeo: "গুলাকেও",
          gulakei: "গুলাকেই",
          gulaner: "গুলানের",
          gulateo: "গুলাতেও",
          gulatei: "গুলাতেই",
          gulikeo: "গুলিকেও",
          gulikei: "গুলিকেই",
          guliteo: "গুলিতেও",
          gulitei: "গুলিতেই",
          gulokeo: "গুলোকেও",
          gulokei: "গুলোকেই",
          guloteo: "গুলোতেও",
          gulotei: "গুলোতেই",
          korrtrriko: "কর্তৃকও",
          korrtrriki: "কর্তৃকই",
          kortriko: "কর্তৃকও",
          kortriki: "কর্তৃকই",
          borgero: "বর্গেরও",
          borgeri: "বর্গেরই",
          borgera: "বর্গেরা",
          borgokeo: "বর্গকেও",
          borgokei: "বর্গকেই",
          borrgero: "বর্গেরও",
          borrgeri: "বর্গেরই",
          borrgera: "বর্গেরা",
          borrgokeo: "বর্গকেও",
          borrgokei: "বর্গকেই",
          brindeo: "বৃন্দেও",
          brindei: "বৃন্দেই",
          brinder: "বৃন্দের",
          brindoke: "বৃন্দকে",
          brindora: "বৃন্দরা",
          brrindeo: "বৃন্দেও",
          brrindei: "বৃন্দেই",
          brrinder: "বৃন্দের",
          brrindoke: "বৃন্দকে",
          brrindora: "বৃন্দরা",
          khanakeo: "খানাকেও",
          khanakei: "খানাকেই",
          khanareo: "খানারেও",
          khanarei: "খানারেই",
          khanateo: "খানাতেও",
          khanatei: "খানাতেই",
          khaneteo: "খানেতেও",
          khanetei: "খানেতেই",
          khanikeo: "খানিকেও",
          khanikei: "খানিকেই",
          khanireo: "খানিরেও",
          khanirei: "খানিরেই",
          khaniteo: "খানিতেও",
          khanitei: "খানিতেই",
          malakeo: "মালাকেও",
          malakei: "মালাকেই",
          malarao: "মালারাও",
          malarai: "মালারাই",
          malateo: "মালাতেও",
          malatei: "মালাতেই",
          mondolio: "মণ্ডলীও",
          mondolii: "মণ্ডলীই",
          mondolir: "মণ্ডলীর",
          punjeo: "পুঞ্জেও",
          punjei: "পুঞ্জেই",
          punjer: "পুঞ্জের",
          punjoke: "পুঞ্জকে",
          punjora: "পুঞ্জরা",
          punjote: "পুঞ্জতে",
          rajikeo: "রাজিকেও",
          rajikei: "রাজিকেই",
          rajirao: "রাজিরাও",
          rajirai: "রাজিরাই",
          rajiteo: "রাজিতেও",
          rajitei: "রাজিতেই",
          shokolerao: "সকলেরাও",
          shokolerai: "সকলেরাই",
          shomuhero: "সমূহেরও",
          shomuheri: "সমূহেরই",
          shomuhokeo: "সমূহকেও",
          shomuhokei: "সমূহকেই",
          shomuhoreo: "সমূহরেও",
          shomuhorei: "সমূহরেই",
          shomuhoteo: "সমূহতেও",
          shomuhotei: "সমূহতেই",
          sokolerao: "সকলেরাও",
          sokolerai: "সকলেরাই",
          somuhero: "সমূহেরও",
          somuheri: "সমূহেরই",
          somuhokeo: "সমূহকেও",
          somuhokei: "সমূহকেই",
          somuhoreo: "সমূহরেও",
          somuhorei: "সমূহরেই",
          somuhoteo: "সমূহতেও",
          somuhotei: "সমূহতেই",
          bishishto: "বিশিষ্ট",
          bisisto: "বিশিষ্ট",
          shorupo: "স্বরূপও",
          shorupi: "স্বরূপই",
          shworupo: "স্বরূপও",
          shworupi: "স্বরূপই",
          sorupo: "স্বরূপও",
          sorupi: "স্বরূপই",
          sworupo: "স্বরূপও",
          sworupi: "স্বরূপই",
          gacakeo: "গাছাকেও",
          gacakei: "গাছাকেই",
          gacareo: "গাছারেও",
          gacarei: "গাছারেই",
          gacateo: "গাছাতেও",
          gacatei: "গাছাতেই",
          gachakeo: "গাছাকেও",
          gachakei: "গাছাকেই",
          gachareo: "গাছারেও",
          gacharei: "গাছারেই",
          gachateo: "গাছাতেও",
          gachatei: "গাছাতেই",
          gachhakeo: "গাছাকেও",
          gachhakei: "গাছাকেই",
          gachhareo: "গাছারেও",
          gachharei: "গাছারেই",
          gachhateo: "গাছাতেও",
          gachhatei: "গাছাতেই",
          gachhikeo: "গাছিকেও",
          gachhikei: "গাছিকেই",
          gachhireo: "গাছিরেও",
          gachhirei: "গাছিরেই",
          gachhiteo: "গাছিতেও",
          gachhitei: "গাছিতেই",
          gachikeo: "গাছিকেও",
          gachikei: "গাছিকেই",
          gachireo: "গাছিরেও",
          gachirei: "গাছিরেই",
          gachiteo: "গাছিতেও",
          gachitei: "গাছিতেই",
          gacikeo: "গাছিকেও",
          gacikei: "গাছিকেই",
          gacireo: "গাছিরেও",
          gacirei: "গাছিরেই",
          gaciteo: "গাছিতেও",
          gacitei: "গাছিতেই",
          tukukeo: "টুকুকেও",
          tukukei: "টুকুকেই",
          tukuneo: "টুকুনেও",
          tukunei: "টুকুনেই",
          tukuner: "টুকুনের",
          tukunke: "টুকুনকে",
          tukunre: "টুকুনরে",
          tukureo: "টুকুরেও",
          tukurei: "টুকুরেই",
          tukuteo: "টুকুতেও",
          tukutei: "টুকুতেই",
          gulanero: "গুলানেরও",
          gulaneri: "গুলানেরই",
          borgerao: "বর্গেরাও",
          borgerai: "বর্গেরাই",
          borrgerao: "বর্গেরাও",
          borrgerai: "বর্গেরাই",
          brindero: "বৃন্দেরও",
          brinderi: "বৃন্দেরই",
          brindera: "বৃন্দেরা",
          brindokeo: "বৃন্দকেও",
          brindokei: "বৃন্দকেই",
          brindorao: "বৃন্দরাও",
          brindorai: "বৃন্দরাই",
          brrindero: "বৃন্দেরও",
          brrinderi: "বৃন্দেরই",
          brrindera: "বৃন্দেরা",
          brrindokeo: "বৃন্দকেও",
          brrindokei: "বৃন্দকেই",
          brrindorao: "বৃন্দরাও",
          brrindorai: "বৃন্দরাই",
          mondolike: "মণ্ডলীকে",
          mondoliro: "মণ্ডলীরও",
          mondoliri: "মণ্ডলীরই",
          mondolira: "মণ্ডলীরা",
          punjero: "পুঞ্জেরও",
          punjeri: "পুঞ্জেরই",
          punjokeo: "পুঞ্জকেও",
          punjokei: "পুঞ্জকেই",
          punjorao: "পুঞ্জরাও",
          punjorai: "পুঞ্জরাই",
          punjoteo: "পুঞ্জতেও",
          punjotei: "পুঞ্জতেই",
          bishishtoo: "বিশিষ্টও",
          bishishtoi: "বিশিষ্টই",
          bisistoo: "বিশিষ্টও",
          bisistoi: "বিশিষ্টই",
          tukunero: "টুকুনেরও",
          tukuneri: "টুকুনেরই",
          tukunkeo: "টুকুনকেও",
          tukunkei: "টুকুনকেই",
          tukunreo: "টুকুনরেও",
          tukunrei: "টুকুনরেই",
          brinderao: "বৃন্দেরাও",
          brinderai: "বৃন্দেরাই",
          brrinderao: "বৃন্দেরাও",
          brrinderai: "বৃন্দেরাই",
          mondolikeo: "মণ্ডলীকেও",
          mondolikei: "মণ্ডলীকেই",
          mondolirao: "মণ্ডলীরাও",
          mondolirai: "মণ্ডলীরাই",
          shombondhio: "সম্বন্ধীয়",
          shombondhiyo: "সম্বন্ধীয়",
          shongkranto: "সংক্রান্ত",
          shonkanto: "সংক্রান্ত",
          sombondhio: "সম্বন্ধীয়",
          sombondhiyo: "সম্বন্ধীয়",
          songkranto: "সংক্রান্ত",
          sonkanto: "সংক্রান্ত",
          tukdara: "টুকদ্বারা",
          tukdwara: "টুকদ্বারা",
          shombondhioo: "সম্বন্ধীয়ও",
          shombondhioi: "সম্বন্ধীয়ই",
          shombondhiyoo: "সম্বন্ধীয়ও",
          shombondhiyoi: "সম্বন্ধীয়ই",
          shongkrantoo: "সংক্রান্তও",
          shongkrantoi: "সংক্রান্তই",
          shonkantoo: "সংক্রান্তও",
          shonkantoi: "সংক্রান্তই",
          sombondhioo: "সম্বন্ধীয়ও",
          sombondhioi: "সম্বন্ধীয়ই",
          sombondhiyoo: "সম্বন্ধীয়ও",
          sombondhiyoi: "সম্বন্ধীয়ই",
          songkrantoo: "সংক্রান্তও",
          songkrantoi: "সংক্রান্তই",
          sonkantoo: "সংক্রান্তও",
          sonkantoi: "সংক্রান্তই",
          gacadara: "গাছাদ্বারা",
          gacadwara: "গাছাদ্বারা",
          gachadara: "গাছাদ্বারা",
          gachadwara: "গাছাদ্বারা",
          gachhadara: "গাছাদ্বারা",
          gachhadwara: "গাছাদ্বারা",
          gachhidara: "গাছিদ্বারা",
          gachhidwara: "গাছিদ্বারা",
          gachidara: "গাছিদ্বারা",
          gachidwara: "গাছিদ্বারা",
          gacidara: "গাছিদ্বারা",
          gacidwara: "গাছিদ্বারা",
          tukdarao: "টুকদ্বারাও",
          tukdarai: "টুকদ্বারাই",
          tukdwarao: "টুকদ্বারাও",
          tukdwarai: "টুকদ্বারাই",
          tukudara: "টুকুদ্বারা",
          tukudwara: "টুকুদ্বারা",
          gacadarao: "গাছাদ্বারাও",
          gacadarai: "গাছাদ্বারাই",
          gacadwarao: "গাছাদ্বারাও",
          gacadwarai: "গাছাদ্বারাই",
          gachadarao: "গাছাদ্বারাও",
          gachadarai: "গাছাদ্বারাই",
          gachadwarao: "গাছাদ্বারাও",
          gachadwarai: "গাছাদ্বারাই",
          gachhadarao: "গাছাদ্বারাও",
          gachhadarai: "গাছাদ্বারাই",
          gachhadwarao: "গাছাদ্বারাও",
          gachhadwarai: "গাছাদ্বারাই",
          gachhidarao: "গাছিদ্বারাও",
          gachhidarai: "গাছিদ্বারাই",
          gachhidwarao: "গাছিদ্বারাও",
          gachhidwarai: "গাছিদ্বারাই",
          gachidarao: "গাছিদ্বারাও",
          gachidarai: "গাছিদ্বারাই",
          gachidwarao: "গাছিদ্বারাও",
          gachidwarai: "গাছিদ্বারাই",
          gacidarao: "গাছিদ্বারাও",
          gacidarai: "গাছিদ্বারাই",
          gacidwarao: "গাছিদ্বারাও",
          gacidwarai: "গাছিদ্বারাই",
          tukudarao: "টুকুদ্বারাও",
          tukudarai: "টুকুদ্বারাই",
          tukudwarao: "টুকুদ্বারাও",
          tukudwarai: "টুকুদ্বারাই",
          tukundara: "টুকুনদ্বারা",
          tukundwara: "টুকুনদ্বারা",
          tukundarao: "টুকুনদ্বারাও",
          tukundarai: "টুকুনদ্বারাই",
          tukundwarao: "টুকুনদ্বারাও",
          tukundwarai: "টুকুনদ্বারাই"
      };
      c({
          db: u
      }), s = "autocorrect", u = {
          "#:-S": "#:-S",
          "#-o": "#-o",
          "$-)": "$-)",
          "&": "O",
          "(:|": "(:|",
          "*)": "*)",
          "*-:)": "*-:)",
          ":!!": ":!!",
          ':-"': ':-"',
          ':">': ':">',
          ":#": ":#",
          ":-#": ":-#",
          ":-$": ":-$",
          ":&": ":&",
          ":-&": ":-&",
          ":(": ":(",
          ":'(": ":'(",
          ":-(": ":-(",
          ":((": ":((",
          ":(:)": ":(:)",
          ":(|)": ":(|)",
          ":)": ":)",
          ":-)": ":-)",
          ":))": ":))",
          ":)]": ":)]",
          ":)~": ":)~",
          ":)>-": ":)>-",
          ":-)>....": ":-)>....",
          ":*": ":*",
          ":-*": ":-*",
          ":/": ":/",
          ":-/": ":-/",
          ":-?": ":-?",
          ":-??": ":-??",
          ":-@": ":-@",
          ":@)": ":@)",
          ":[": ":[",
          ":\\": ":\\",
          ":]": ":]",
          ":^)": ":^)",
          ":^o": ":^o",
          ":{": ":{",
          ":|": ":|",
          ":}": ":}",
          ":í(": ":í(",
          ":<": ":<",
          ":-<": ":-<",
          ":>": ":>",
          ":3": ":3",
          ":-9": ":-9",
          ":ar!": ":ar!",
          ":b": ":b",
          ":-b": ":-b",
          ":-B": ":-B",
          ":-bd": ":-bd",
          ":bz": ":bz",
          ":c": ":c",
          ":-c": ":-c",
          ":c)": ":c)",
          ":D": ":D",
          ":-D": ":-D",
          ":-h": ":-h",
          ":-j": ":-j",
          ":-L": ":-L",
          ":O": ":O",
          ":-O": ":-O",
          ":o)": ":o)",
          ":O)": ":O)",
          ":o3": ":o3",
          ":p": ":p",
          ":-p": ":-p",
          ":P": ":P",
          ":-P": ":-P",
          ":-q": ":-q",
          ":S": ":S",
          ":-S": ":-S",
          ":-SS": ":-SS",
          ":-t": ":-t",
          ":u": ":u",
          ":-w": ":-w",
          ":x": ":x",
          ":X": ":X",
          ":-X": ":-X",
          ";(": ";(",
          ";)": ";)",
          ";-)": ";-)",
          ";))": ";))",
          ";*(": ";*(",
          ";]": ";]",
          ";^)": ";^)",
          ";D": ";D",
          ";o_o;": ";o_o;",
          "@}-;-'---": "@}-;-'---",
          "[:|]": "[:|]",
          "[-O<": "[-O<",
          "[-X": "[-X",
          "\\,,/": "\\,,/",
          "\\:D/": "\\:D/",
          "\\m/": "\\m/",
          "\\o/": "\\o/",
          "^#(^": "^#(^",
          "^:)^": "^:)^",
          "~:>": "~:>",
          "~O)": "~O)",
          "~X(": "~X(",
          "<):)": "<):)",
          "</3": "</3",
          "<:-P": "<:-P",
          "<=3": "<=3",
          "<=8": "<=8",
          "<3": "<3",
          "<333": "<333",
          "=:)": "=:)",
          "=3": "=3",
          "=D": "=D",
          "=D>": "=D>",
          "=p": "=p",
          "=P": "=P",
          "=P~": "=P~",
          ">.<": ">.<",
          ">:(": ">:(",
          ">:-(": ">:-(",
          ">:)": ">:)",
          ">:-)": ">:-)",
          ">:/": ">:/",
          ">:D<": ">:D<",
          ">:P": ">:P",
          ">;)": ">;)",
          "0:3": "0:3",
          "0_o": "0_o",
          "0-0": "0-0",
          "0w0": "0w0",
          "10th": "10m",
          "1st": "1m",
          "2nd": "2Y",
          "3:-O": "3:-O",
          "3rd": "3Y",
          "4th": "4rrth",
          "5th": "5m",
          "6th": "6ShTh",
          "7th": "7m",
          "8)": "8)",
          "8-)": "8-)",
          "8-|": "8-|",
          "8-}": "8-}",
          "8->": "8->",
          "8D": "8D",
          "8O": "8O",
          "8th": "8m",
          "8-X": "8-X",
          "9th": "9m",
          abdomen: "oZabDOmen",
          academy: "oZakaDemi",
          access: "oZaxes",
          account: "oZakaunT",
          acer: "esar",
          acharya: "acarrz",
          action: "oZakSan",
          active: "oZakTiv",
          activity: "oZakTiviTi",
          adapter: "oZaDapTar",
          add: "oZaD",
          aditya: "adity",
          adjust: "oZaDjasT",
          adobe: "oZaDOb",
          adrita: "adrrita",
          adsense: "aZDsens",
          advertisement: "oZaDvarrTaijmenT",
          adwords: "oZaD`OyarrDs",
          aeroplane: "erOplen",
          africa: "afrika",
          aids: "eiDs",
          aingoto: "ain`goto",
          ainjIbI: "ain`jIbI",
          ainkanun: "ain`kanun",
          ainmafik: "ain`mafik",
          ainmaphik: "ain`maphik",
          ainmontrI: "ain`montrI",
          ainmontroNaloy: "ain`montroNaloy",
          ainmote: "ain`mote",
          ainmoto: "ain`moto",
          ainsocib: "ain`socib",
          ainsommoto: "ain`sommoto",
          ainsongoto: "ain`songoto",
          airport: "eyarpOrrT",
          airtel: "eyarTel",
          airway: "ear`we",
          airways: "ear`wej",
          akbar: "akbor",
          akkelguRum: "akkel`guRum",
          aktel: "ekoTel",
          alarm: "aZlarrm",
          album: "oZal`bam",
          algOch: "al`gOch",
          almari: "al`mari",
          alOkmala: "alOk`mala",
          alOkmoy: "alOk`moy",
          alOksojja: "alOk`sojja",
          alOksongket: "alOk`songket",
          alOkstombho: "alOk`stombho",
          alOkstomvo: "alOk`stomvo",
          alphabet: "oZalfabeT",
          alpin: "al`pin",
          alt: "olT",
          amartya: "omorrtyo",
          america: "amerika",
          american: "amerikan",
          amrita: "omrrita",
          ananda: "anond",
          anandabajar: "anondobajar",
          anandabazar: "anondobajar",
          anatomy: "oZanaTomi",
          and: "oZanD",
          andhra: "ondhro",
          angle: "oZangel",
          anirban: "onirrbaN",
          aniruddha: "oniruddho",
          antenna: "oZanTena",
          antivirus: "aZnTivairas",
          anurima: "oNurima",
          apna: "ap`na",
          apnaapni: "ap`naap`ni",
          aponkar: "apon`kar",
          app: "oZap",
          apple: "oZapol",
          application: "oZaplikeSan",
          apply: "aZplai",
          april: "epril",
          arab: "arb",
          arabia: "arob",
          archive: "arrkaiv",
          argentina: "arrjenTina",
          army: "arrmi",
          article: "arrTikel",
          artist: "arrTisT",
          asbenna: "asben`na",
          asenni: "asen`ni",
          ashraful: "ash`raful",
          asia: "eSia",
          aslam: "as`lam",
          asle: "as`le",
          aslen: "as`len",
          asli: "as`li",
          asma: "as`ma",
          asman: "as`man",
          asmanI: "as`manI",
          assistant: "oZasisTyanT",
          association: "oZasOsiyeSan",
          atm: "eTiem",
          audio: "oDiO",
          auditorium: "oDiTOriam",
          august: "ogasT",
          australia: "osTreliya",
          authority: "othoriTi",
          auto: "oTO",
          automatic: "oTOmeTik",
          automobile: "oTOmObail",
          autopsy: "oTOpsi",
          avast: "oZavasT",
          avenue: "oZavenyu",
          avro: "ovro",
          avroo: "ovroO",
          "b-(": "b-(",
          "B(": "B(",
          "B)": "B)",
          "B-)": "B-)",
          babohar: "bybohar",
          back: "byak",
          background: "byakgraunD",
          backspace: "byak`spes",
          backup: "byak`ap",
          badminton: "byaDminTon",
          baksongzom: "bak`songzom",
          baksongzomI: "bak`songzomI",
          baksorrboswo: "bak`sorrboswo",
          ballot: "byaloT",
          ballygunge: "baligonj",
          bamfront: "bam`fronT",
          bampash: "bam`pash",
          banasree: "bonSrI",
          banerjee: "byanarrji",
          bank: "byangk",
          baseball: "besbol",
          basu: "bosu",
          basundhara: "bosundhora",
          battery: "byaTari",
          beat: "biT",
          begum: "begom",
          bengal: "bengol",
          bengali: "bengoli",
          bharat: "bharot",
          bhattacharya: "voTTacarrz",
          bhowmik: "vOUmik",
          bicycle: "baisaikel",
          bidyut: "bidyut``",
          bikkhato: "bikhyato",
          bill: "bil",
          biochemistry: "bayOkemisTri",
          biology: "bayOlji",
          birla: "biRla",
          birthday: "barrthDe",
          bismilla: "bis`milla",
          bismillah: "bis`millah",
          bismillahir: "bis`millahir",
          bit: "biT",
          blackberry: "blyakberi",
          bloc: "blok",
          block: "blok",
          blogger: "blogar",
          blouse: "blauj",
          blue: "blu",
          bluetooth: "bluTuth",
          board: "bOrrD",
          bodmaish: "bod`maish",
          bodmaishi: "bod`maishi",
          bodmash: "bod`mash",
          bodmashi: "bod`mashi",
          bodmayeshi: "bod`mayeshi",
          bodmejaj: "bod`mejaj",
          bodmejajI: "bod`mejajI",
          bodrag: "bod`rag",
          bodragI: "bod`ragI",
          bodrul: "bod`rul",
          bogra: "boguRa",
          bolbona: "bol`bona",
          bolenni: "bolen`ni",
          bollywood: "boliuD",
          bonna: "bonya",
          "boolean": "bulian",
          bosenni: "bosen`ni",
          botany: "bOTani",
          brake: "brek",
          brazil: "brajil",
          brb: "ek`Tu pore aschi",
          "break": "brek",
          britain: "briTen",
          british: "briTiS",
          britney: "briTni",
          broadband: "broDbyanD",
          browser: "braujar",
          brush: "brash",
          bsc: "bi`es`si",
          btv: "biTivi",
          buddha: "buddho",
          buddhadeb: "buddhodeb",
          building: "bilDing",
          bulb: "balb",
          bullet: "buleT",
          bus: "bas",
          business: "bijnes",
          button: "baTon",
          buzz: "baj",
          byarrtho: "by`rrtho",
          byay: "by`Y",
          byrrth: "by`rrth",
          byrrthta: "by`rrthta",
          byrrthtay: "by`rrthtay",
          "byte": "baiT",
          byy: "by`Y",
          "C:": "C:",
          cable: "kebl",
          cadre: "kyaDar",
          cake: "kek",
          cakladar: "cak`ladar",
          cakranI: "cak`ranI",
          cakri: "cak`ri",
          cakribakri: "cak`ribak`ri",
          "cakri-bakri": "cak`ri-bak`ri",
          cakrihIn: "cak`rihIn",
          calculator: "kyal`kuleTor",
          calcutta: "kyal`kaTa",
          calendar: "kyalenDar",
          calkata: "kol`kata",
          calkumRa: "cal`kumRa",
          calkumRO: "cal`kumRO",
          call: "kol",
          camera: "kyamera",
          canada: "kanaDa",
          cancel: "kyan`sel",
          canon: "kyanon",
          canvas: "kyanvas",
          capacity: "kyapasiTi",
          capgeminee: "kyapjemini",
          capisna: "capis`na",
          capisne: "capis`ne",
          capital: "kyapiTal",
          caplam: "cap`lam",
          caple: "cap`le",
          caplei: "cap`lei",
          caplen: "cap`len",
          caplo: "cap`lo",
          caplO: "cap`lO",
          caps: "kyap,,s",
          captam: "cap`tam",
          capte: "cap`te",
          capten: "cap`ten",
          capti: "cap`ti",
          captis: "cap`tis",
          capture: "kyapcar",
          card: "karrD",
          cargo: "karrgO",
          carrier: "kyariyar",
          carry: "kyari",
          cartoon: "karrTun",
          cassette: "kyaseT",
          castro: "kastrO",
          catalog: "kyaTalog",
          catalogue: "kyaTalog",
          cd: "siDi",
          cell: "sel",
          cent: "senT",
          century: "sencuri",
          certificate: "sarrTifikeT",
          certification: "sarrTifikeSan",
          chair: "ceyar",
          chairman: "ceyarmyan",
          chalk: "cok",
          chamber: "cembar",
          chandan: "condon",
          channel: "cyanel",
          character: "kyarekTar",
          charge: "carrj",
          charger: "carrjar",
          chatterjee: "cyaTarrji",
          checkpost: "cekpOsT",
          "check-post": "cekpOsT",
          chemical: "kemikyal",
          chemistry: "kemisTri",
          chennai: "cennai",
          chicken: "ciken",
          china: "cayna",
          chinese: "cainIj",
          chittagong: "cTrgram",
          chokkagoj: "chok`kagoj",
          chokkaTa: "chok`kaTa",
          chokkaTO: "chok",
          chokkaTun: "chok",
          chrome: "krOm",
          cikmik: "cik`mik",
          cikmike: "cik`mike",
          cimney: "cim`ni",
          cinema: "sinema",
          circle: "sarrkel",
          circular: "sarrkular",
          circus: "sarrkas",
          city: "siTi",
          citycell: "siTisel",
          civil: "sivil",
          "class": "klas",
          clear: "kliyar",
          click: "klik",
          clip: "klip",
          clipboard: "klipbOrrD",
          close: "klOj",
          "close-up": "klOs-ap",
          club: "klab",
          cm: "semi.`",
          coach: "kOc",
          coal: "kOl",
          code: "kOD",
          coin: "koyen",
          college: "kolej",
          comilla: "kumilla",
          comment: "komenT",
          commerce: "komarrs",
          commercial: "komarrshial",
          commission: "komish`n",
          committee: "komiTi",
          community: "komiuniTi",
          compaq: "kom`pyak",
          complain: "kom`plein",
          computer: "kompiuTar",
          computing: "kompiuTing",
          conductor: "konDakTor",
          conference: "konfarens",
          configuration: "konfigareshon",
          congress: "kong`gres",
          consortium: "konsorrTiam",
          control: "konTrOl",
          convert: "konvarrT",
          converter: "konvarrTar",
          cookie: "kuki",
          copy: "kpi",
          copyright: "kpiraiT",
          correct: "karekT",
          council: "kaunsil",
          courier: "kZuriyar",
          court: "kOrrT",
          courtship: "kOrrTSip",
          coxsbajar: "koxbajar",
          cpi: "sipi`ai",
          cpm: "sipiem",
          crack: "kryak",
          cream: "krim",
          credit: "kreDiT",
          crest: "kresT",
          cricket: "krikeT",
          cricketer: "krikeTar",
          crime: "kraim",
          criminal: "kriminal",
          cross: "kros",
          crystal: "krisTal",
          css: "sies`es",
          cuba: "kiuba",
          current: "karenT",
          cursor: "karrsor",
          custom: "kasTm",
          cycle: "saikel",
          "d'-'": "d'-'",
          "D:": "D:",
          "d:-)": "d:-)",
          "D:<": "D:<",
          "D-:<": "D-:<",
          "D;": "D;",
          "d'_'": "d'_'",
          "d'_'b": "d'_'b",
          "D<": "D<",
          "D=": "D=",
          D8: "D8",
          dairy: "Deyari",
          darjeeling: "darrjiling",
          dashboard: "DyaSbOrrD",
          "d'-'b": "d'-'b",
          dead: "DeD",
          debbhokti: "deb`bhokti",
          debbhokto: "deb`bhokto",
          debit: "DebiT",
          debug: "Dibag",
          december: "Disembor",
          "default": "DifolT",
          define: "Difain",
          definite: "DefiniT",
          definitely: "DefineTli",
          definition: "DefineSan",
          defragment: "Difryag`menT",
          defragmenter: "Difryag`menTar",
          degree: "Digri",
          "delete": "DiliT",
          delhi: "dilli",
          delivery: "Delivari",
          dell: "Del",
          dentist: "DenTisT",
          design: "Dijain",
          designer: "Dijainar",
          desktop: "DeksTp",
          detective: "DiTekTiv",
          developar: "Developar",
          developer: "Developar",
          development: "DevelopmenT",
          device: "Divais",
          dhaka: "Dhaka",
          dhUmpan: "dhUm`pan",
          dhUmpayI: "dhUm`payI",
          dialog: "Daylog",
          dialogue: "Daylog",
          diamond: "DaymonD",
          diary: "Dayeri",
          dictionary: "Dik`shonarI",
          diesel: "Dijel",
          digicam: "Dijikyam",
          digit: "DijiT",
          digital: "DijiTal",
          dingoto: "din`goto",
          dinkal: "din`kal",
          dinman: "din`man",
          dinmane: "din`mane",
          dinmojur: "din`mojur",
          dinner: "Dinar",
          diplay: "Disople",
          director: "DirekTor",
          directx: "DirekT-x",
          disk: "Disk",
          display: "Dis`ple",
          dissection: "DisekSan",
          dj: "Dije",
          djuice: "Dijyus",
          doctor: "Daktar",
          document: "DokumenT",
          documents: "DokumenTs",
          Dogmog: "Dog`mog",
          dOkandar: "dOkan`dar",
          dOkandari: "dOkan`dari",
          dOkla: "dOk`la",
          dollar: "Dolar",
          domain: "DOmein",
          dongle: "Dongol",
          doshombar: "doshom`bar",
          doSombar: "doSom`bar",
          download: "DaunlOD",
          "dr.": "dr.",
          "Dr.": "Dr.",
          "DR.": "DR.",
          draft: "DrafT",
          drawing: "Droying",
          dreamweaver: "Drim`wevar",
          drive: "Draiv",
          driver: "Draivar",
          drug: "Drag",
          dur: "dUr",
          durga: "durrga",
          dutch: "Dac",
          dutt: "dotto",
          dutta: "dotto",
          dvd: "DiviDi",
          DX: "DX",
          earth: "arrth",
          east: "isT",
          easy: "iji",
          edit: "eDiT",
          edition: "eDishon",
          editor: "eDiTor",
          eid: "Id",
          einstein: "ainsTain",
          ekhonkar: "ekhon`kar",
          ekkal: "ek`kal",
          ekkalIn: "ek`kalIn",
          ekkendrIyo: "ek`kendrIyo",
          ekkotha: "ek`kotha",
          ekla: "ek`la",
          ekmatra: "ek`matra",
          ekmatro: "ek`matro",
          ekmatrrik: "ek`matrrik",
          ekmon: "ek`mon",
          ekmona: "ek`mona",
          ekmot: "ek`mot",
          ekmotalombI: "ek`motalombI",
          ekmukh: "ek`mukh",
          ekmukhI: "ek`mukhI",
          ekmukhIkoroN: "ek`mukhIkoroN",
          ekmukhO: "ek`mukhO",
          ekrob: "ek`rob",
          ekrOkha: "ek`rOkha",
          ekrokom: "ek`rokom",
          ekrokombhabe: "ek`rokom`bhabe",
          ekrokomvabe: "ek`rokom`vabe",
          ekrotti: "ek`rotti",
          ekrUp: "ek`rUp",
          eksathe: "ek`sathe",
          eksonge: "ek`songe",
          eksthan: "ek`sthan",
          ekTa: "ek`Ta",
          ekTaka: "ek`Taka",
          ektal: "ek`tal",
          ektala: "ek`tala",
          ekTana: "ek`Tana",
          ekTane: "ek`Tane",
          ekTao: "ek`Tao",
          ektara: "ek`tara",
          ekTi: "ek`Ti",
          ektil: "ek`til",
          ektola: "ek`tola",
          ektolay: "ek`tolay",
          ektomo: "ek`tomo",
          ektontrI: "ek`tontrI",
          ektontro: "ek`tontro",
          ektoro: "ek`toro",
          ektorofa: "ek`torofa",
          ektoropha: "ek`toropha",
          ekTu: "ek`Tu",
          ekTuk: "ek`Tuk",
          ekTuku: "ek`Tuku",
          election: "ilekSan",
          electric: "ilekTrik",
          electrical: "ilekTrikyal",
          electricity: "ilekTrisiTi",
          electronic: "ilekTronik",
          electronics: "ilekTroniks",
          email: "imeil",
          "e-mail": "i-mel",
          emirates: "emireTs",
          emni: "em`ni",
          emnikore: "em`nikore",
          emnitoro: "em`nitoro",
          emnivabe: "em`nivabe",
          emonki: "emon`ki",
          emonTa: "emon`Ta",
          emonTi: "emon`Ti",
          emontoro: "emon`toro",
          empire: "empayar",
          encoding: "en`kODing",
          end: "enD",
          engine: "injin",
          engineer: "injiniyar",
          engineering: "injiniyaring",
          england: "inglyanD",
          english: "inglish",
          enrique: "en`rik",
          enter: "enTar",
          entrance: "enTrans",
          entries: "enTrij",
          entry: "enTri",
          epsiode: "episOD",
          epson: "ep`son",
          erricson: "erik`san",
          etc: "ityadi",
          etyadi: "ityadi",
          euro: "iurO",
          europe: "iurOp",
          event: "ivenT",
          everest: "evaresT",
          excel: "exel",
          exchange: "xcenj",
          exercise: "exarsaij",
          explorer: "explOrar",
          express: "xpres",
          extension: "xTen`shon",
          "fa^ktal": "fa^k`tal",
          facebook: "feisbuk",
          fantasy: "fyanTasi",
          fashion: "fyashan",
          father: "fadar",
          fatna: "fat`na",
          february: "februarI",
          fedora: "feDOra",
          feed: "feeD",
          felbe: "fel`be",
          felben: "fel`ben",
          felbi: "fel`bi",
          felbo: "fel`bo",
          fellam: "fel`lam",
          felle: "fel`le",
          fellen: "fel`len",
          felleo: "fel`leo",
          felli: "fel`li",
          fello: "fel`lo",
          feynman: "fain`myan",
          fiction: "fikSan",
          file: "fail",
          filter: "filTar",
          "final": "fainal",
          finance: "fainans",
          find: "fainD",
          fine: "fain",
          finki: "fin`ki",
          firefox: "fayarfox",
          firenni: "firen`ni",
          firewire: "fayar`war",
          fitna: "fit`na",
          fixed: "fixD",
          flash: "flyaS",
          flickr: "flikar",
          floppy: "flopi",
          flyover: "flaiOvar",
          folder: "fOlDar",
          footage: "fuTej",
          football: "fuTbol",
          forensic: "forensik",
          form: "forrm",
          format: "formyaT",
          forum: "fOram",
          forward: "for`warrD",
          fossil: "fosil",
          fossils: "fosil`s",
          foundation: "faunDeshon",
          fountain: "faunTen",
          france: "frans",
          freeware: "freeOyZar",
          friend: "frenD",
          front: "fronT",
          frontpage: "fronTpej",
          fulbabu: "ful`babu",
          fulbagan: "ful`bagan",
          fulkopi: "ful`kopi",
          fund: "fanD",
          fuslanO: "fus`lanO",
          fusle: "fus`le",
          fusliye: "fus`liye",
          fuzzy: "faji",
          galgolpo: "gal`golpo",
          gallery: "gyalari",
          galmondo: "gal`mondo",
          game: "gem",
          gamla: "gam`la",
          gandhi: "gandhI",
          ganesh: "goNeS",
          ganguly: "ganguli",
          ganI: "gganI",
          gargi: "garrgI",
          gariahat: "goRiahaT",
          gatarrthe: "ggatarrthe",
          gates: "geTs",
          gautam: "gOUtom",
          gb: "jibi",
          generation: "jenareSon",
          geography: "jiografi",
          george: "jorrj",
          german: "jarrman",
          germany: "jarrmani",
          ghagra: "ghag`ra",
          ghapla: "ghap`la",
          ghora: "ghORa",
          ghori: "ghoRi",
          ghosh: "ghOSh",
          ghumanni: "ghuman`ni",
          ghurenni: "ghuren`ni",
          gilTi: "gil`Ti",
          girl: "garrl",
          github: "giT`hab",
          gland: "glyanD",
          glass: "glas",
          global: "glObal",
          globalisation: "glObalaijeSan",
          globalization: "glObalaijeSan",
          gmail: "jimeil",
          gObre: "gOb`re",
          gogoncarI: "gogon`carI",
          gogoncor: "gogon`cor",
          gogoncumbI: "gogon`cumbI",
          gogonsporrshI: "gogon`sporrshI",
          gOlgal: "gOl`gal",
          gOlmal: "gOl`mal",
          gOlmele: "gOl`mele",
          gOlmoric: "gOl`moric",
          gOlpata: "gOl`pata",
          gomes: "gOmej",
          good: "gooD",
          google: "googol",
          government: "govorrn`menT",
          grasnalI: "gras`nalI",
          great: "greT",
          greece: "grIs",
          greenland: "grInlyanD",
          group: "grup",
          guard: "garrD",
          gubre: "gub`re",
          guharoy: "guhoray",
          guhathakurata: "guhThakurota",
          guide: "gaiD",
          gujrat: "guj`rat",
          gunda: "gunDa",
          gynaecology: "gainekOloji",
          "ha^Tenni": "ha^Ten`ni",
          hack: "hyak",
          haj: "hoj",
          hall: "hol",
          hamla: "ham`la",
          hanger: "hyaNggar",
          haora: "haORa",
          haque: "hok",
          hard: "harrD",
          harddisk: "harrDoDisk",
          hardware: "harrD`OyZar",
          harmonium: "harmOniam",
          harry: "hyari",
          hature: "hatuRe",
          head: "heD",
          health: "hel`th",
          heart: "harrT",
          heatsink: "hiTsink",
          hekmot: "hek`mot",
          hell: "hel",
          helper: "helpar",
          hertz: "harrj",
          "hi-fi": "hai-fai",
          hifi: "haifai",
          hi5: "haifaiv",
          highfive: "haifaiv",
          history: "hisTri",
          hitler: "hiTlar",
          hmm: "hum",
          hockey: "hoki",
          hokkotha: "hok`kotha",
          hollywood: "holiuD",
          home: "hOm",
          hostel: "hOsTel",
          hotel: "hOTel",
          hotkey: "hoT-ki",
          howra: "haORa",
          howrah: "haORa",
          hp: "eicpi",
          html: "eicTiem`el",
          human: "hiumyan",
          hyderabad: "hayderabad",
          hydrojen: "haiDrOjen",
          hype: "haip",
          "I-)": "I-)",
          ibm: "aibiem",
          icon: "aikon",
          idiot: "iDiyoT",
          ie: "aii",
          image: "imej",
          imageready: "imej`reDi",
          imageshack: "imejSyak",
          imambaRi: "imam`baRi",
          imandar: "iman`dar",
          imandarI: "iman`darI",
          imranur: "im`ranur",
          inch: "inci",
          inches: "inci",
          include: "inokluD",
          indhondata: "indhon`data",
          indhondatrI: "indhon`datrI",
          india: "inDia",
          indian: "inDian",
          indradeep: "indrodIp",
          info: "infO",
          information: "inforrmeSon",
          infrared: "infrareD",
          injection: "injekshan",
          input: "inpuT",
          install: "insTol",
          institute: "insiTiuT",
          insurance: "in`siOrens",
          insure: "insiOr",
          "interface": "inTarfes",
          international: "inTarnyashonal",
          internet: "inTarneT",
          iphone: "aifOn",
          ipod: "aipoD",
          ipad: "aipyaD",
          plus: "plas",
          iron: "ayron",
          islam: "is`lam",
          island: "ailyanD",
          italy: "iTali",
          item: "aiTem",
          itihaslekhok: "itihas`lekhok",
          jabe: "zabe",
          jalpaiguri: "jol`paiguRi",
          jamrul: "jam`rul",
          janenna: "janen`na",
          jantam: "jan`tam",
          jante: "jan`te",
          janten: "jan`ten",
          janti: "jan`ti",
          janto: "jan`to",
          january: "januarI",
          je: "ze",
          jeans: "jin`s",
          jedin: "zedin",
          jehetu: "zehetu",
          jekhan: "zekhan",
          jemon: "zemon",
          jet: "jeT",
          jholkacche: "jhol`kacche",
          jholkacchilo: "jhol`kacchilo",
          jholkani: "jhol`kani",
          jholkanO: "jhol`kanO",
          jholmol: "jhol`mol",
          jholmole: "jhol`mole",
          jibon: "jIbon",
          jodi: "zodi",
          joint: "joyenT",
          jokhon: "zokhon",
          jonno: "jonyo",
          jOsna: "jZOt``sna",
          josna: "jZOt``sna",
          jOsnamoy: "jZOt``snamoy",
          josnamoy: "jZOt``snamoy",
          jOsnarat: "jZOt``snarat",
          josnarat: "jZOt``snarat",
          jOsnaratri: "jZOt``snaratri",
          josnaratri: "jZOt``snaratri",
          journalism: "jarrnalijm",
          journalist: "jarrnalisT",
          jukti: "zukti",
          july: "julai",
          jyoti: "jyOti",
          jyotirmoy: "jyOtirrmoy",
          jyatirmoy: "jyOtirrmoy",
          jyatirmay: "jyOtirrmoy",
          kaktal: "kak`tal",
          kaktalIyo: "kak`talIyo",
          kalbela: "kal`bela",
          kalbilombe: "kal`bilombe",
          kalbilombo: "kal`bilombo",
          kalbOISakhI: "kal`bOISakhI",
          kalbOIshakhI: "kal`bOIshakhI",
          kalbOSekhI: "kal`bOSekhI",
          kalbOshekhI: "kal`bOshekhI",
          kalke: "kal`ke",
          kalkrome: "kal`krome",
          kalprobahe: "kal`probahe",
          kalprobaho: "kal`probaho",
          kalprobhab: "kal`probhab",
          kalprovab: "kal`provab",
          kalpuruSh: "kal`puruSh",
          kalrat: "kal`rat",
          kalratri: "kal`ratri",
          kalratrire: "kal`ratrire",
          kamla: "kam`la",
          kamra: "kam`ra",
          kangkhito: "kaNgkkhito",
          kankaTa: "kan`kaTa",
          kankhaRa: "kan`khaRa",
          kankO: "kan`kO",
          kartik: "karrttik",
          kasba: "kosba",
          katrani: "kat`rani",
          katranO: "kat`ranO",
          kb: "kebi",
          key: "kee",
          keyboard: "kibOrrD",
          keypad: "kI-pyaD",
          khanni: "khan`ni",
          kharagpur: "khoRgpur",
          khelenni: "khelen`ni",
          khetre: "kkhetre",
          khetro: "kkhetro",
          khetrobisheSh: "kkhetrobisheSh",
          khetrofol: "kxetrofol",
          khoda: "khOda",
          khoma: "kxoma",
          khoti: "kkhoti",
          khotibriddhi: "kkhotibrriddhi",
          khotibrriddhi: "kkhotibrriddhi",
          khotikor: "kkhotikor",
          khulbe: "khul`be",
          khulben: "khul`ben",
          khulbO: "khul`bO",
          khullam: "khul`lam",
          khulle: "khul`le",
          khullen: "khul`len",
          khulli: "khul`li",
          kilbil: "kil`bil",
          kilbile: "kil`bile",
          kilo: "kilO",
          kingdom: "kingDom",
          kintam: "kin`tam",
          kinte: "kin`te",
          kinten: "kin`ten",
          kinti: "kin`ti",
          kipTa: "kip`Ta",
          kipTami: "kip`Tami",
          kipTamO: "kip`TamO",
          kisu: "kichu",
          kisui: "kichui",
          kitchen: "kicen",
          km: "kimi.`",
          kobji: "kob`ji",
          kolkarkhana: "kol`karkhana",
          kolkata: "kol`kata",
          kolkobja: "kol`kobja",
          kolkol: "kol`kol",
          kolkollOl: "kol`kollOl",
          kolkonTh: "kol`konTh",
          kollaN: "kolyaN",
          kollaNpur: "kolyaNpur",
          kolma: "kol`ma",
          kolombaj: "kolom`baj",
          kolombajI: "kolom`bajI",
          kOmolmoti: "kOmol`moti",
          kompokkhe: "kom`pokkhe",
          konjuspona: "konjus`pona",
          konkon: "kon`kon",
          konkonani: "kon`konani",
          konkone: "kon`kone",
          konokmoy: "konok`moy",
          konokmukuT: "konok`mukuT",
          konokmukuTe: "konok`mukuTe",
          kOnTa: "kOn`Ta",
          kOnTi: "kOn`Ti",
          korenni: "koren`ni",
          korrtitto: "korrtrritwo",
          korrtobbo: "korrtobyo",
          kosrot: "kos`rot",
          kosrote: "kos`rote",
          kosroter: "kos`roter",
          kosrotI: "kos`rotI",
          koththo: "kothyo",
          kotokkhani: "kotok`khani",
          kotokTa: "kotok`Ta",
          koyekTa: "koyek`Ta",
          koyekTi: "koyek`Ti",
          kukkhato: "kukhyato",
          kulgorima: "kul`gorima",
          kulgorrbe: "kul`gorrbe",
          kulgorrbo: "kul`gorrbo",
          kulgOUrob: "kul`gOUrob",
          kulgOUrobe: "kul`gOUrobe",
          kulguru: "kul`guru",
          kulkaminI: "kul`kaminI",
          kulkolonker: "kul`kolonker",
          kulkolonkI: "kul`kolonkI",
          kulkolonkinI: "kul`kolonkinI",
          kulkolonko: "kul`kolonko",
          kulkonya: "kul`konya",
          kulkuc: "kul`kuc",
          kulkuca: "kul`kuca",
          kulkucO: "kul`kucO",
          kulkul: "kul`kul",
          kulTa: "kul`Ta",
          "L-)": "L-)",
          lab: "lyab",
          lace: "les",
          lane: "len",
          language: "lyanguyej",
          lansdown: "lyansDaun",
          laptop: "lyap`Top",
          lassi: "lacchi",
          launch: "lonc",
          lawrence: "lorens",
          lawyer: "loiyar",
          layer: "leyar",
          layout: "le`auT",
          lbw: "el`biDobliu",
          lcd: "elsiDi",
          lecture: "lekcar",
          legal: "ligal",
          lenovo: "lenOvO",
          letter: "leTar",
          letterhead: "leTarheD",
          lg: "elji",
          library: "laibreri",
          life: "laif",
          light: "laiT",
          line: "lain",
          linkin: "lin,,kin",
          linux: "linax",
          live: "laiv",
          llb: "el.`el.`bi",
          lobby: "lobi",
          local: "lOkal",
          location: "lOkeSan",
          lock: "lok",
          logic: "lojik",
          logical: "lojikal",
          logo: "lOgO",
          loklok: "lok`lok",
          london: "lonDon",
          lotion: "lOSan,,",
          lounge: "launj",
          lunch: "lanc",
          luxury: "laxari",
          "m.b.b.s": "em.`bi.`bi.`es",
          mac: "myak",
          macintosh: "myakin`TOsh",
          machine: "meSin",
          macro: "myakrO",
          maddox: "myaDox",
          magazine: "myagajin",
          magistrate: "myajisTreT",
          maharashtra: "moharaShTr",
          mahatma: "mhatma",
          mail: "meil",
          maitreyee: "mOItreyI",
          majumdar: "mojumdar",
          maldah: "maldoh",
          mall: "mol",
          mallik: "mollik",
          mallika: "mollika",
          mamata: "momota",
          mamla: "mam`la",
          mamtaj: "momtaj",
          management: "myanejmenT",
          manager: "myanejar",
          managing: "myanejing",
          mandela: "myanDela",
          mangOUrob: "man`gOUrob",
          manmohan: "mon`mOhon",
          mansommoto: "man`sommoto",
          mante: "man`te",
          manten: "man`ten",
          manti: "man`ti",
          manto: "man`to",
          maradona: "maradOna",
          march: "marrc",
          market: "marrkeT",
          markin: "marrkin",
          marksbad: "marrk`sbad",
          marx: "marrks",
          massenger: "mesenjar",
          matador: "myaTaDor",
          maths: "myaths",
          maximize: "myaximaij",
          maximum: "myaximam",
          mb: "em`bi",
          mbbs: "em`bi`bi`es",
          "md.": "emDi.`",
          mechanic: "mekanik",
          mechanical: "mekanikyal",
          mechanism: "mekanijm",
          media: "miDia",
          medical: "meDikel",
          medicine: "meDisin",
          medinipur: "medinIpur",
          medium: "miDiam",
          member: "membar",
          memory: "memOri",
          mercedes: "marrsiDij",
          mess: "mes",
          message: "mesej",
          messenger: "mesenjar",
          metric: "meTrik",
          mexico: "mexikO",
          micro: "maikrO",
          microbiology: "maikrObayOloji",
          microphone: "maikrOfOn",
          microscope: "maikrOskOp",
          microsoft: "maikrOsofT",
          military: "miliTari",
          mill: "mil",
          minimize: "minimaij",
          minimum: "minimam",
          minister: "minisTar",
          minus: "mainas",
          ml: "mili.`",
          mm: "mimi.`",
          mms: "em`em`es",
          mobile: "mObail",
          mohot: "mohot``",
          money: "mani",
          monitor: "moniTor",
          mongolbar: "mongol`bar",
          mongolgIt: "mongol`gIt",
          mongolgroh: "mongol`groh",
          mongolgroho: "mongol`groho",
          mongolia: "mongOlia",
          mongolkamI: "mongol`kamI",
          mongolkamona: "mongol`kamona",
          mongolkarI: "mongol`karI",
          mongolkariNI: "mongol`kariNI",
          mongolkor: "mongol`kor",
          mongolmoy: "mongol`moy",
          morgue: "morrg",
          morning: "morrning",
          mother: "madar",
          motherboard: "madarbOrrD",
          motor: "mOTor",
          motorolla: "moTOrOla",
          mou: "mOU",
          mount: "maunT",
          mouse: "maus",
          mouth: "mauth",
          movie: "mubhi",
          mozilla: "mOjila",
          mrigoya: "mrrigoya",
          mrinmoy: "mrrinmoy",
          ms: "em`es",
          msn: "em`es`en",
          muffler: "maf`lar",
          mukherjee: "mukharrji",
          multimedia: "malTimiDia",
          munmun: "mun`mun",
          museum: "miujiam",
          music: "miujik",
          mutton: "maTn",
          my: "mai",
          myanmar: "mayan`mar",
          mymensingh: "moymonosing`h",
          myspace: "maispes",
          nakkan: "nak`kan",
          nakkaTa: "nak`kaTa",
          nakkhot: "nak`khot",
          namaskar: "nomoskar",
          namenni: "namen`ni",
          nandigram: "nondIgram",
          napkin: "nyapkin",
          narayan: "narayN",
          national: "nyashonal",
          "native": "neTiv",
          naxal: "noxal",
          naxalbari: "noxal`baRi",
          nazmun: "najmun",
          negro: "nigrO",
          net: "neT",
          network: "neT`warrk",
          "new": "niu",
          news: "niuj",
          newspaper: "niujpepar",
          newyork: "niuiyorrk",
          next: "nexT",
          nicobar: "nikObar",
          nidankal: "nidan`kal",
          nidankale: "nidan`kale",
          night: "naiT",
          nimokharam: "nimok`haram",
          nimokharami: "nimok`harami",
          niponwave: "nipon`Oyebh",
          nobel: "nObel",
          nobombar: "nobom`bar",
          nojrana: "noj`rana",
          nokia: "nOkia",
          nokri: "nok`ri",
          nolkUp: "nol`kUp",
          nonsense: "non`sens",
          nOnta: "nOn`ta",
          norokkunDe: "norok`kunDe",
          norokkunDo: "norok`kunDo",
          north: "norrth",
          norton: "norTn",
          norway: "nor`we",
          note: "nOT",
          notebook: "nOTbuk",
          notepad: "nOTpyaD",
          notes: "nOT`s",
          notification: "nOTifikeSan",
          nouka: "nOUka",
          november: "novembor",
          noyongOcor: "noyon`gOcor",
          noyonjol: "noyon`jol",
          noyonkON: "noyon`kON",
          noyonmoNi: "noyon`moNi",
          noyonronjon: "noyon`ronjon",
          noyonsnigdhokor: "noyon`snigdhokor",
          noyontara: "noyon`tara",
          noyontaray: "noyon`taray",
          ntfs: "en`Ti`ef`es",
          number: "nambar",
          numeric: "niumerik",
          nurse: "narrs",
          nylon: "nailon",
          "o...o": "o...o",
          "O:)": "O:)",
          "O:-)": "O:-)",
          o_o: "o_o",
          O_o: "O_o",
          O_O: "O_O",
          "o-+": "o-+",
          "o=>": "o=>",
          "o->": "o->",
          o0o: "o0o",
          O3O: "O3O",
          obyrrtho: "oby`rrtho",
          october: "okTObor",
          odolbodol: "odol`bodol",
          offic: "ofis",
          office: "ofis",
          officer: "ofisar",
          ogganjonito: "oggan`jonito",
          oggankrrito: "oggan`krrito",
          oggantimir: "oggan`timir",
          ogotta: "ogotya",
          Ojondar: "Ojon`dar",
          ok: "Oke",
          Ok: "Oke",
          OK: "Oke",
          okalbarrdhokyo: "okal`barrdhokyo",
          okalborrShoN: "okal`borrShoN",
          okalbrriddho: "okal`brriddho",
          okalbrriShTi: "okal`brriShTi",
          Okalotnama: "Okalot`nama",
          Okalotnamate: "Okalot`namate",
          Okalotnamay: "Okalot`namay",
          okaTmUrrkho: "okaT`mUrrkho",
          okaTTo: "okaTyo",
          okollaN: "okolyaN",
          okorrtobbo: "okorrtobyo",
          okoththo: "okothyo",
          Olkopi: "Ol`kopi",
          olokmegh: "olok`megh",
          OlTanO: "Ol`TanO",
          olympic: "olimpik",
          omicronlab: "Omikronlyab",
          Omicronlab: "Omikronlyab",
          omlanmukh: "omlan`mukh",
          omlanmukhe: "omlan`mukhe",
          Omra: "Om`ra",
          Omrah: "Om`rah,,",
          oncolprobhab: "oncol`probhab",
          oncolprovab: "oncol`provab",
          onekTa: "onek`Ta",
          onkontuli: "onkon`tuli",
          onkontulika: "onkon`tulika",
          onolborrShI: "onol`borrShI",
          onolborrShoN: "onol`borrShoN",
          ononna: "ononya",
          ononno: "ononyo",
          onudbayI: "onudwayI",
          onudbeg: "onudweg",
          onudbigno: "onudwigno",
          onujjol: "onujjwol",
          "O-O": "O-O",
          open: "Open",
          openoffice: "Open`ofis",
          operating: "opareTing",
          operation: "opareSan",
          opomangrostho: "opoman`grostho",
          opomanjonok: "opoman`jonok",
          opomanjonokvabe: "opoman`jonokvabe",
          opomankor: "opoman`kor",
          optical: "opTikal",
          option: "op`shon",
          options: "op`shon`s",
          optionti: "op`shon`Ti",
          orange: "orenj",
          original: "orijinal",
          orkut: "orrkuT",
          orkutbaj: "orrkuTbaj",
          orkuting: "orrkuTing",
          orrthat: "orrthat``",
          os: "Oes",
          OS: "Oes",
          osabdhan: "osab`dhan",
          osabdhane: "osab`dhane",
          osabdhanI: "osab`dhanI",
          osabdhanota: "osab`dhanota",
          oShTombar: "oShTom`bar",
          osonkho: "osongkhyo",
          ostacolgamI: "ostacol`gamI",
          ostacolgoto: "ostacol`goto",
          otopor: "ot:por",
          ounce: "auns",
          out: "auT",
          outbox: "auTbox",
          outline: "auTlain",
          over: "Obhar",
          overhead: "OvarheD",
          ovyasmoto: "ovyas`moto",
          OwO: "OwO",
          oxford: "oxfOrrD",
          oxygen: "oxijen",
          oyoncolon: "oyon`colon",
          oyonkal: "oyon`kal",
          pack: "pyak",
          paediatric: "peDiaTrik",
          paediatrics: "peDiaTriks",
          page: "peij",
          pagla: "pag`la",
          paglami: "pag`lami",
          paglamO: "pag`lamO",
          paglI: "pag`lI",
          paint: "peinT",
          painting: "peinTing",
          palki: "pal`ki",
          "palki-behara": "pal`ki-behara",
          palmtop: "pamTp",
          palokmata: "palok`mata",
          palokmatar: "palok`matar",
          palta: "palTa",
          palTa: "pal`Ta",
          palTanO: "pal`TanO",
          palTay: "pal`Tay",
          palTe: "pal`Te",
          palTi: "pal`Ti",
          palTiye: "pal`Tiye",
          pancayet: "poncayet",
          panel: "pyanel",
          panroto: "pan`roto",
          pant: "pyanT",
          panty: "pyanTi",
          pappUNyo: "pap`pUNyo",
          pargana: "porgoNa",
          park: "parrk",
          parker: "parrkar",
          partha: "parrth",
          partition: "parrTiSon",
          party: "parrTi",
          paShaNmoy: "paShaN`moy",
          patel: "pyaTel",
          patent: "peTenT",
          pathology: "pyatholoji",
          patrika: "potrika",
          pause: "poj",
          pc: "pisi",
          pencil: "pensil",
          pentagon: "penTagon",
          perfume: "parfium",
          pervez: "parrvej",
          petro: "peTrO",
          petrol: "peTrOl",
          "pha^ktal": "pha^k`tal",
          pharmacology: "farrmakOloji",
          pharmacy: "farrmesi",
          phatna: "phat`na",
          phelbe: "phel`be",
          phelben: "phel`ben",
          phelbi: "phel`bi",
          phelbo: "phel`bo",
          phellam: "phel`lam",
          phelle: "phel`le",
          phellen: "phel`len",
          phelleo: "phel`leo",
          phelli: "phel`li",
          phello: "phel`lo",
          phinki: "phin`ki",
          phirenni: "phiren`ni",
          phitna: "phit`na",
          phone: "fOn",
          phonetic: "phoneTik",
          photo: "phTO",
          photocopy: "fTOkpi",
          photoshop: "fTOshop",
          php: "pieicpi",
          phulbabu: "phul`babu",
          phulbabura: "phul`babura",
          phulbagan: "phul`bagan",
          phulkopi: "phul`kopi",
          phuslanO: "phus`lanO",
          phusle: "phus`le",
          phusliye: "phus`liye",
          physics: "fijik,,s",
          picnic: "piknik",
          picture: "pikcar",
          piracy: "pairesi",
          pirate: "paireT",
          place: "ples",
          plane: "plen",
          plate: "pleT",
          play: "ple",
          player: "plear",
          plug: "plag",
          point: "poyenT",
          pOkhraj: "pOkh`raj",
          police: "puliS",
          political: "poliTikal",
          politics: "poliTix",
          poncombar: "poncom`bar",
          poRenni: "poRen`ni",
          porjonto: "porrzonto",
          poroborti: "poroborrtI",
          port: "pOrrT",
          portable: "pOrrTeb`l",
          portugal: "porrtugal",
          poScimbongo: "poScim`bongo",
          poshcimbangla: "poshcim`bangla",
          poshcimbongo: "poshcim`bongo",
          poshcimbong: "poshcim`bongo",
          post: "pOsT",
          postmortem: "pOsTmorrTem",
          postpaid: "pOsTpeD",
          potter: "poTar",
          pound: "paunD",
          power: "paOyar",
          powerpoint: "paOyarpoyenT",
          prabir: "probIr",
          pradesh: "prodeS",
          pranab: "pr`N`b",
          pratiti: "protIti",
          pregnancy: "preg`nyansi",
          pregnant: "preg`nyanT",
          prepaid: "pripeD",
          presentation: "prejenTeSan",
          president: "presiDenT",
          press: "pres",
          preview: "priviu",
          prime: "praim",
          print: "prinT",
          printer: "prinTar",
          prize: "praij",
          processor: "prosesor",
          product: "prODakT",
          professional: "prOfes`nal",
          professor: "prOfesor",
          profile: "prOfail",
          program: "prOgram",
          programme: "prOgram",
          programming: "prOgraming",
          progress: "prOgres",
          project: "prOjekT",
          projector: "prOjekTor",
          prokashman: "prokash`man",
          prokaSman: "prokaS`man",
          properties: "proparrTij",
          property: "proparrTi",
          prothombar: "prothom`bar",
          prottasha: "protyasha",
          prottutponnomoti: "protyut``ponnomoti",
          proyojon: "proyOjon",
          proyOjonmafik: "proyOjon`mafik",
          proyOjonmaphik: "proyOjon`maphik",
          proyOjonmoto: "proyOjon`moto",
          publish: "pab`liS",
          publisher: "pab`liSar",
          pulse: "pal,,s",
          "qB-)": "qB-)",
          race: "res",
          racing: "resing",
          rack: "ryak",
          racket: "ryakeT",
          radio: "reDiO",
          ragging: "ryaging",
          rail: "rel",
          railline: "rel`lain",
          railway: "rel`we",
          railways: "rel`wej",
          rajarshi: "rajorrShi",
          rajat: "rojot",
          rajpat: "rajpaT",
          rakhenni: "rakhen`ni",
          ranabir: "roNobIr",
          rape: "rep",
          rashtrapati: "raShTrpoti",
          rastrapati: "raShTrpoti",
          raw: "r'",
          reader: "riDar",
          recent: "risenT",
          reception: "risepSan",
          receptionist: "risepSanisT",
          recipe: "resipi",
          recycle: "risaikel",
          referee: "refaree",
          refresh: "rifreS",
          register: "rejisTar",
          registration: "rejisTreSan",
          relgaRi: "rel`gaRi",
          reliance: "rilayens",
          rellain: "rel`lain",
          relpoth: "rel`poth",
          relpothe: "rel`pothe",
          relpother: "rel`pother",
          remote: "rimOT",
          remove: "rimuv",
          repair: "ripeyar",
          replace: "riples",
          resize: "risaij",
          resolution: "rejOliuSan",
          restaurant: "resTurenT",
          rhombus: "rombos",
          richard: "ricarrD",
          right: "raiT",
          rights: "raiT`s",
          ringtone: "ringTOn",
          rituparna: "rrituporrNa",
          rizwanur: "rij`wanur",
          rObbar: "rOb`bar",
          robot: "rOboT",
          rodon: "rOdon",
          rOgmukti: "rOg`mukti",
          rOgmukto: "rOg`mukto",
          rohman: "roh`man",
          ronaldinho: "rOnalDinhO",
          ronaldo: "rOnalDO",
          rong: "roNg",
          ronger: "roNger",
          route: "ruT",
          row: "rO",
          rriNgrahI: "rriN`grahI",
          rriNgrohIta: "rriN`grohIta",
          rriNgrohoN: "rriN`grohoN",
          rriNgrostho: "rriN`grostho",
          rriNmOcon: "rriN`mOcon",
          rriNmukti: "rriN`mukti",
          rriNmukto: "rriN`mukto",
          rss: "ar.`es.`es",
          RSS: "ar.`es.`es",
          rubber: "rabar",
          rugby: "ragbi",
          rumpa: "rUmpa",
          rupam: "rUpom",
          russia: "raSia",
          sabdhan: "sab`dhan",
          sabdhanI: "sab`dhanI",
          sabdhanota: "sab`dhanota",
          sabyasaci: "sobysacI",
          saint: "senT",
          saltlake: "solTlek",
          samla: "sam`la",
          samlan: "sam`lan",
          samlanO: "sam`lanO",
          samlao: "sam`lao",
          samna: "sam`na",
          samnasamni: "sam`nasam`ni",
          "samna-samni": "sam`na-sam`ni",
          samne: "sam`ne",
          samni: "sam`ni",
          samsung: "syamsaNg",
          sanitary: "syaniTari",
          sanjana: "sonjona",
          saptarshi: "soptorrShi",
          saraswati: "soroswtI",
          saswata: "SaSwot",
          satej: "sotej",
          sauce: "sos",
          saudi: "sOUdi",
          saurav: "sOUrobh",
          save: "sev",
          scanner: "skyanar",
          scholar: "skolar",
          school: "skul",
          science: "sayens",
          scooter: "skuTar",
          scotch: "skoc",
          scotland: "skoTlyanD",
          scrap: "skryap",
          screen: "skreen",
          scroll: "skrol",
          scrollbar: "skrol`bar",
          sealda: "Sialda",
          sealdah: "Sialdoh",
          search: "sarrc",
          sekhetre: "sekkhetre",
          select: "silekT",
          "semi-final": "semi-fainal",
          sengupta: "sen`gupt",
          september: "sepTembor",
          serial: "sirial",
          series: "sirij",
          service: "sarrvis",
          services: "sarrvises",
          session: "seSan",
          set: "seT",
          setting: "seTing",
          settings: "seTings",
          sexy: "sexi",
          shampoo: "shyampu",
          shanghai: "sang`hai",
          shankar: "Sonkor",
          shantiniketan: "Santiniketon",
          shapla: "shap`la",
          sharatchandra: "Sorot``condro",
          share: "sheyar",
          sharma: "Sorrma",
          shift: "shifT",
          shirt: "sharrT",
          shobdaho: "shob`daho",
          shobdahok: "shob`dahok",
          shobdahon: "shob`dahon",
          shobdeho: "shob`deho",
          shock: "Sk",
          shocker: "Skar",
          shoe: "Su",
          ShOloana: "ShOlo`ana",
          shOnni: "shOn`ni",
          shopping: "Soping",
          shortcut: "SorrTkaT",
          shounak: "SOUnok",
          show: "SO",
          shreyasee: "SreysI",
          shreyasi: "SreysI",
          shunno: "shunyo",
          shunnota: "shunyota",
          shuntam: "shun`tam",
          shunte: "shun`te",
          shunten: "shun`ten",
          shunti: "shun`ti",
          siddhartha: "siddharrth",
          siemens: "simens",
          sign: "sain",
          signature: "sig`necar",
          siliguri: "SiliguRi",
          sIlmOhor: "sIl`mOhor",
          simanto: "sImant",
          singapore: "singapur",
          singh: "sing`h",
          sir: "syar",
          site: "saiT",
          size: "saij",
          skirt: "skarrT",
          slide: "slaiD",
          small: "smol",
          smart: "smarrT",
          sms: "es`em`es",
          Sobdaho: "Sob`daho",
          Sobdahok: "Sob`dahok",
          Sobdahon: "Sob`dahon",
          Sobdeho: "Sob`deho",
          sobji: "sob`ji",
          sobkhetre: "sobkxetre",
          sobkhetro: "sobkxetro",
          soft: "sofT",
          software: "sofT`OyZar",
          soldier: "sOljar",
          somadhanTi: "somadhan`Ti",
          somak: "sOmok",
          sOmbar: "sOm`bar",
          somen: "sOmen",
          sommanjonok: "somman`jonok",
          sommankor: "somman`kor",
          somrat: "somraT",
          sonali: "sOnali",
          sonar: "sOnar",
          sondha: "sondhya",
          sondhamaloti: "sondhyamaloti",
          SOnni: "SOn`ni",
          sony: "soni",
          soptombar: "soptom`bar",
          sot: "sot``",
          sotti: "sotyi",
          sotto: "sotyo",
          soumya: "sOUmyo",
          soumyajyoti: "sOUmyjyOti",
          sound: "saunD",
          source: "sOrrs",
          south: "sauth",
          space: "spes",
          speaker: "spikar",
          spider: "spaiDar",
          sports: "spOrrTs",
          spy: "spai",
          spycam: "spaikyam",
          spyware: "spaiOyZar",
          square: "skOyar",
          sri: "shrI",
          srijani: "SrIjonI",
          srikanta: "SrIkant",
          srilanka: "SrIlonka",
          sriman: "shrIman",
          srimati: "shrImti",
          srizon: "srrijon",
          stamp: "sTyamp",
          stand: "sTyanD",
          standard: "sTZanDarrD",
          star: "sTar",
          start: "sTarrT",
          states: "sTeT,,s",
          status: "sTyaTas",
          steam: "sTim",
          steering: "sTiaring",
          sthankalpatro: "sthan`kal`patro",
          stick: "sTik",
          stock: "sTk",
          stool: "sTul",
          street: "sTriT",
          string: "sTring",
          stupid: "sTupiD",
          style: "sTail",
          subarna: "suborrNa",
          subhodip: "shuvodIp",
          subject: "sab`jekT",
          suchitra: "sucitra",
          sudoku: "suDOku",
          suitcase: "suTkes",
          suite: "sZuT",
          suman: "sumon",
          sumana: "sumona",
          superman: "suparmyan",
          support: "sapOrrT",
          surf: "sarrf",
          surgery: "sarrjari",
          swarnendu: "sworrnendu",
          sweater: "sOyeTar",
          sweety: "suiTi",
          swiss: "suis",
          "switch": "suic",
          sydney: "siDni",
          syria: "siria",
          system: "sisTem",
          "T.T": "T.T",
          T_T: "T_T",
          tab: "Tyab",
          tabla: "tob`la",
          table: "Tebil",
          tagore: "TegOr",
          tajmahal: "tajmohol",
          Takri: "Tak`ri",
          Talbahana: "Tal`bahana",
          talgach: "tal`gach",
          talk: "Tk",
          talkana: "tal`kana",
          talmafik: "tal`mafik",
          talmaphik: "tal`maphik",
          TalmaTal: "Tal`maTal",
          talmoto: "tal`moto",
          talpata: "tal`pata",
          talpatar: "tal`patar",
          talpatay: "tal`patay",
          talpotre: "tal`potre",
          talpotrer: "tal`potrer",
          talpotro: "tal`potro",
          tamali: "tomali",
          tank: "Tyank",
          tarzan: "Tarjan",
          task: "Task",
          taskbar: "Taskbar",
          tata: "TaTa",
          tax: "Tyax",
          taxi: "Tyaxi",
          team: "Tim",
          tech: "Tek",
          technician: "TekniSian",
          technology: "TeknOlji",
          techpointer: "TekpoyenTar",
          telephone: "TeliphOn",
          telescope: "TeliskOp",
          teletalk: "TeliTk",
          television: "TeliviSan",
          temni: "tem`ni",
          temnibhabe: "tem`nibhabe",
          temnikore: "tem`nikore",
          temnivabe: "tem`nivabe",
          temporary: "TempOrari",
          tennis: "Tenis",
          testimonial: "TesTimOniyal",
          text: "TexT",
          textmate: "TexT`meT",
          textbox: "TexTbox",
          textile: "TexTail",
          tft: "TiefTi",
          thakenni: "thaken`ni",
          thaklam: "thak`lam",
          thakle: "thak`le",
          thaklo: "thak`lo",
          Thakrun: "Thak`run",
          thaktam: "thak`tam",
          thakte: "thak`te",
          thakten: "thak`ten",
          thakti: "thak`ti",
          thakur: "Thakur",
          Thandi: "Than`di",
          Thandidi: "Than`didi",
          theater: "thiyeTar",
          Thikmoto: "Thik`moto",
          ThikThik: "Thik`Thik",
          ThonThon: "Thon`Thon",
          ThonThone: "Thon`Thone",
          threat: "threT",
          TikTik: "Tik`Tik",
          TikTiki: "Tik`Tiki",
          tilottoma: "tilOttoma",
          time: "Taim",
          times: "Taim,,s",
          tingun: "tin`gun",
          tinjon: "tin`jon",
          tinjona: "tin`jona",
          tinkal: "tin`kal",
          tinrokom: "tin`rokom",
          tinTa: "tin`Ta",
          tinTaka: "tin`Taka",
          tinTane: "tin`Tane",
          tinTanei: "tin`Tanei",
          tinTi: "tin`Ti",
          tintin: "Tin`Tin",
          Tips: "Tip`s",
          Tipsohi: "Tip`sohi",
          Tipsoi: "Tip`soi",
          TipTip: "Tip`Tip",
          titanic: "TaiTanik",
          tobla: "tob`la",
          tohfa: "tOhfa",
          toirI: "tOIrI",
          tokhonkar: "tokhon`kar",
          toklif: "tok`lif",
          tokliph: "tok`liph",
          tokma: "tok`ma",
          toktok: "tok`tok",
          TokTok: "Tok`Tok",
          toktoke: "tok`toke",
          tokyo: "TOkiyO",
          tollygunge: "Taligonj",
          Tolmol: "Tol`mol",
          tolpeT: "tol`peT",
          TolTol: "Tol`Tol",
          TolTole: "Tol`Tole",
          tomato: "TomeTO",
          tOmra: "tOm`ra",
          tOmrai: "tOm`rai",
          tOmrao: "tOm`rao",
          tOmratO: "tOm`ratO",
          tonic: "Tnik",
          TonTon: "Ton`Ton",
          TonTonani: "Ton`Tonani",
          TonTone: "Ton`Tone",
          tool: "Tool",
          toolbar: "Tul`bar",
          tools: "Tuls",
          torolbuddhi: "torol`buddhi",
          torolmoti: "torol`moti",
          torolprokrriti: "torol`prokrriti",
          torrent: "TorenT",
          TosTos: "Tos`Tos",
          TosTosa: "Tos`Tosa",
          TosTose: "Tos`Tose",
          total: "TOTal",
          touchpad: "TacpyaD",
          touchscreen: "TacskrIn",
          toufik: "tOUfik",
          tourism: "Tyurij,,m",
          tourist: "TyurisT",
          town: "Taun",
          tower: "TaoYar",
          toyota: "ToyOTa",
          tractor: "TryakTor",
          trademark: "TreDmarrk",
          traffic: "Trafik",
          train: "Tren",
          trapezium: "Trapijiam",
          tray: "Tre",
          trinamul: "trriNomUl",
          trouser: "Traujar",
          truck: "Trak",
          tsunami: "sunami",
          TT_TT: "TT_TT",
          tube: "Tiub",
          tubelight: "Tiub`laiT",
          Tukra: "Tuk`ra",
          TukragulO: "Tuk`ragulO",
          TukraTa: "Tuk`raTa",
          TukraTakra: "Tuk`raTak`ra",
          "Tukra-Takra": "Tuk`ra-Tak`ra",
          TukraTi: "Tuk`raTi",
          Tukri: "Tuk`ri",
          Tukrite: "Tuk`rite",
          TukTak: "Tuk`Tak",
          TukTuke: "Tuk`Tuke",
          tumpa: "Tumpa",
          TunTun: "Tun`Tun",
          TunTuni: "Tun`Tuni",
          TusTus: "Tus`Tus",
          TusTusa: "Tus`Tusa",
          TusTuse: "Tus`Tuse",
          tv: "Tivi",
          twitter: "TuiTar",
          type: "Taip",
          typing: "Taiping",
          tyre: "Tayar",
          uae: "iuei",
          udbayI: "udwayI",
          udbek: "udwek",
          udbigno: "udwigno",
          uddOg: "udyOg",
          ujjol: "ujjwol",
          ulTa: "ul`Ta",
          ulTanO: "ul`TanO",
          ulTapalTa: "ul`Tapal`Ta",
          ulTapiTh: "ul`TapiTh",
          ulTapiThe: "ul`TapiThe",
          ulTaroth: "ul`Taroth",
          ulTarothe: "ul`Tarothe",
          ulTe: "ul`Te",
          ulTO: "ul`TO",
          ulTOpoth: "ul`TOpoth",
          ulTOroth: "ul`TOroth",
          under: "anDar",
          underpant: "anDarpyanT",
          unibijoy: "iunibijoy",
          unicode: "iunikOD",
          uninstall: "an`insTl",
          union: "iuniyon",
          unit: "iuniT",
          united: "iunaiTeD",
          university: "iunivarrsiTi",
          update: "apDeT",
          uponyaskar: "uponyas`kar",
          uponyaslekhok: "uponyas`lekhok",
          uponyasrocoyita: "uponyas`rocoyita",
          ups: "iupies",
          urine: "iurin",
          uRonconDI: "uRon`conDI",
          usb: "iuesbi",
          user: "iujar",
          uShno: "uShNo",
          uThenni: "uThen`ni",
          utkoT: "ut``koT",
          utrai: "ut`rai",
          utralam: "ut`ralam",
          utralen: "ut`ralen",
          utrali: "ut`rali",
          utralO: "ut`ralO",
          utranO: "ut`ranO",
          utse: "ut``se",
          utser: "ut``ser",
          utso: "ut``so",
          uttamkumar: "uttomkumar",
          "v.v": "v.v",
          valobastam: "valobas`tam",
          valobaste: "valobas`te",
          valobasten: "valobas`ten",
          valobasti: "valobas`ti",
          valobasto: "valobas`to",
          vasha: "vaSha",
          version: "varrson",
          victoria: "vikTOriya",
          video: "viDio",
          view: "viu",
          violin: "vayOlin",
          virtual: "varrcuyal",
          vodafone: "vODafOn",
          volume: "volium",
          voumik: "vOUmik",
          wait: "weT",
          wallpaper: "wal`pepar",
          warming: "warrming",
          warning: "warrning",
          webcam: "Oyebkyam",
          webmaster: "webmasTar",
          webpage: "Oyebpej",
          website: "websaiT",
          weight: "weT",
          wellington: "welingTon",
          west: "wesT",
          wheel: "huil",
          whisky: "huiski",
          wifi: "waifai",
          wiki: "uiki",
          wikipedia: "uikipeDia",
          winamp: "uinaZmp",
          window: "uinDO",
          windows: "uinDOj",
          windscreen: "uinDskrIn",
          wine: "wain",
          wipro: "uiprO",
          wireless: "warles",
          "with": "uith",
          word: "OarrD",
          wordpad: "OarrDpyaD",
          wordpress: "warrDpres",
          world: "warrlD",
          wow: "waw",
          writer: "raiTar",
          "x-(": "x-(",
          "X(": "X(",
          X_X: "X_X",
          X3: "X3",
          xD: "xD",
          XD: "XD",
          xerox: "jerox",
          xhtml: "x`eicTiem`el",
          xml: "x`em`el",
          xcode: "xkOD",
          xp: "xpi",
          yard: "yarrD",
          year: "iyar",
          youtube: "iuTiub",
          zaman: "jaman",
          zanni: "zan`ni",
          zemni: "zem`ni",
          zemnibhabe: "zem`nibhabe",
          zemnikore: "zem`nikore",
          zemnivabe: "zem`nivabe",
          zia: "jia",
          zitu: "jitu",
          zOgandar: "zOgan`dar",
          zOgandarI: "zOgan`darI",
          zokhonkar: "zokhon`kar",
          zokhontokhon: "zokhon`tokhon",
          bdnews: "বিডিনিউজ",
          bdnews24: "বিডিনিউজ২৪",
          banglanews: "বাংলানিউজ",
          banglanews24: "বাংলানিউজ২৪",
          sachalayatan: "সচলায়তন",
          sachalayatani: "সচলায়তনই",
          sachalayataner: "সচলায়তনের",
          avropad: "অভ্রপ্যাড",
          avropader: "অভ্রপ্যাডের",
          avropaD: "অভ্রপ্যাড",
          avropaDer: "অভ্রপ্যাডের",
          iavro: "আইঅভ্র",
          iavror: "আইঅভ্রর",
          zompUrI: "zom`pUrI"
      }, c({
          db: u
      }), s = "avrodict", c({
          tables: {
              w_a: "অ অংক অংকিত অংকন অংকবাচক অংকুর অংশ অংশু অংশক অংশুক অংশকল্পনা অংশগত অংশগ্রাহী অংশগ্রহণ অংশগ্রহণকারী অংশগ্রহণরত অংশঘটিত অংশাংশি অংশাঙ্কিত অংশাদি অংশানো অংশানুযায়ী অংশিত অংশী অংশচ্ছেদ অংশীদার অংশীদারি অংশীদারযোগ্য অংশীভূত অংশীয় অংশজাত অংশুজাল অংশজুড়ে অংশযুক্ত অংশত অংশুধর অংশন অংশনীয় অংশপত্র অংশপ্রশ্ন অংশভাগ অংশভাগিনী অংশভাগী অংশভূত অংশুমান অংশুমালা অংশুমালী অংশুমতী অংশরক্ষা অংশরূপ অংশুল অংশসম্মুখ অংশহীন অংস অংসকূট অংসফলক অংসফলকাস্থি অংহ অঋণাত্মক অঋণী অক্কা অক্কাপাওয়া অক্কাপ্রাপ্তি অক্কালাভ অকাজ অকাজুয়া অকাট অকাট্য অকাট্যতা অকাণ্ড অকাতর অকাতরতা অকাম অকাম্য অকারান্ত অকার্য অকার্যকারিতা অকার্যকর অকার্যকরী অকারণ অকারত অকাল অকালঅপক্ব অকালকুষ্মাণ্ড অকালকুসুম অকালজ অকালজাত অকালতারা অকালপক্ব অকালপক্বতা অকালপুরুষ অকালবার্ধক্য অকালবোধন অকালবৃদ্ধ অকালবর্ষণ অকালমৃত্যু অকালসন্ধ্যা অকিঞ্চিৎ অকিঞ্চিৎকর অকিঞ্চিৎকরতা অকিঞ্চন অকিঞ্চনতা অকিঞ্চনত্ব অকীর্ত অকীর্তি অকীর্তিকর অকীর্তিত অকেজো অকেন্দ্রিক অকৈতব অকোষীয় অকৌশল অক্টাল অকুটিল অকুটিলা অকুটিলতা অকটেন অক্টোপাস অক্টোবর অকটবিকট অকঠিন অকঠোর অকণ্টক অকুণ্ঠ অকুণ্ঠিত অকুণ্ঠচিত্ত অকুণ্ঠভাব অকুণ্ঠমন অকুণ্ঠহৃদয় অকৃত অক্ত অকৃতকার্য অকৃতকার্যতা অকৃতাপরাধ অকৃতার্থ অকৃতিত্ব অকৃতী অকৃতোদ্বাহ অকৃতোদ্বাহা অকুতোভয় অকুতোভয়া অকুতোভয়তা অকৃতজ্ঞ অকৃতজ্ঞতা অকৃত্য অকৃত্যকারী অকৃতদার অকৃত্রিম অকৃত্রিমতা অকৃত্রিমরূপ অকথা অকথিত অকথ্য অকথ্যকথন অকথন অকথনীয় অকুপেশনাল অকপট অকপটচিত্ত অকপটতা অকৃপণ অকৃপণতা অকম্পিত অক্রিয় অক্রিয়া অক্রিয়ান্বিত অক্রিয়ারত অক্রিয়াসক্ত অক্রিয়ভাবে অক্রেয় অক্রেয়তা অকরোটি অক্রোধ অক্রোধিত অক্রোধী অক্রোধন অকরণ অকরুণ অকর্ণ অকরণী অকরণীয় অকর্তৃক অকর্তা অকর্তৃত্ব অকর্তব্য অকর্ম অক্রম অকর্মক অকর্মকক্রিয়া অকর্মা অকর্মণ্য অকর্মণ্যতা অক্রূর অকুল অকূল অকলঙ্ক অকলঙ্কিত অকলঙ্কী অকুলান অক্লান্ত অক্লান্তকর্মা অক্লিষ্ট অক্লিষ্টকর্মা অকুলীন অক্লেশ অকল্যাণ অকল্যাণকারিণী অকল্যাণকর অকল্যান্ড অক্লুডেন্স অকূলদরিয়া অকুলন অকূলপাথার অকল্পিত অকল্পনীয় অকলুষ অকলুষিত অকুশল অক্ষ অক্ষক্রীড়া অক্ষকর্ণ অক্ষকুশল অক্ষাংশ অক্ষার অক্ষারলবণ অক্ষি অক্ষিকাচ অক্ষিকোটর অক্ষিগোলক অক্ষিগত অক্ষিযুক্ত অক্ষিতারকা অক্ষিতারা অক্ষিপক্ষ্ম অক্ষিপট অক্ষিপুট অক্ষিপটল অক্ষিবিভ্রম অক্ষিলোম অক্ষচুক্তি অক্ষীয় অক্ষোভ অক্ষোভিত অক্ষৌহিণী অক্ষজ অকষ্ট অকৃষ্ট অকষ্টকল্পিত অকষ্টকল্পনা অকৃষ্টপচ্য অকষ্টবদ্ধ অক্ষুণ্ণ অক্ষুণ্ণতা অক্ষত অক্ষতিকর অক্ষতযোনি অক্ষতদেহ অক্ষতশরীর অক্ষদণ্ড অক্ষুদ্র অক্ষপাটি অক্ষপাদ অক্ষবাট অক্ষবিচলন অক্ষবিৎ অক্ষবিদ অক্ষবিমুখ অক্ষবেত্তা অক্ষবতী অক্ষবৃত্ত অক্ষুব্ধ অক্ষবর্তী অক্ষম অক্ষমা অক্ষমালা অক্ষমতা অক্ষমতাবশত অক্ষমতারোগ অক্ষর অক্ষরকেন্দ্র অক্ষরাদি অক্ষরান্ত অক্ষরারম্ভ অক্ষরচেনা অক্ষরেখা অক্ষরজীবক অক্ষরজীবিক অক্ষরজীবী অক্ষরজ্ঞান অক্ষরজ্ঞানহীন অক্ষরযুক্ত অক্ষরপরিচয় অক্ষরপরিচয়হীন অক্ষরবিন্যাস অক্ষরবৃত্ত অক্ষরবদ্ধ অক্ষরমালা অক্ষরস্থাপক অক্ষরসমষ্টি অক্ষশক্তি অক্ষসমান্তরাল অক্ষসম্বন্ধীয় অক্ষয় অক্ষয়কীর্তি অক্ষয়কুমার অক্ষয়চন্দ্র অক্ষয়তৃতীয়া অক্ষয়বট অক্ষয়লোক অক্ষয়স্বর্গলোক অক্সাইড অক্সিজেন অক্সিজেনপূর্ণ অক্সিজেনবাহী অক্সিজেনশূন্য অক্সিজেনহীন অক্সিটোসিন অকুস্থান অকুস্থল অক্সফোর্ড অকস্মাৎ অখাত অখাদ্য অখিল অখিলআধান অখিলখণ্ড অখিলপ্রিয় অখেলোয়াড় অখ্যাত অখ্যাতি অখ্যাতিকারক অখ্যাতিকর অখ্যাতিজনক অখ্যাতিযুক্ত অখ্যাতনামা অখণ্ড অখণ্ডিত অখণ্ড্য অখণ্ডতা অখণ্ডনীয় অখণ্ডনীয়তা অখণ্ডমণ্ডল অখন অখল অখলা অখুশি অগা অগাকান্ত অগাচণ্ডী অগাধ অগাধীয় অগামারা অগারাম অগাস্ট অগাস্টাস অগাস্টিন অগো অগোচর অগোচরা অগোছালো অগোপন অগোপনীয় অগৌণ অগৌর অগৌরী অগৌরব অগৌরবা অগৌরবর্ণ অগৌরবর্ণা অগুণ অগণিত অগণ্য অগণতান্ত্রিক অগণন অগণনীয় অগণনযোগ্য অগতি অগতিক অগত্যা অগ্নি অগ্নিকার্য অগ্নিকেতু অগ্নিকোণ অগ্নিকণা অগ্নিকুণ্ড অগ্নিকুমার অগ্নিক্রিয়া অগ্নিক্রীড়া অগ্নিকর্ম অগ্নিকল্প অগ্নিগিরি অগ্নিগোলক অগ্নিগর্ভ অগ্নিগৃহ অগ্নিচূর্ণ অগ্নিচূর্ণক অগ্নিজিহ্বা অগ্নিযুগ অগ্নিযোগ অগুনিত অগ্নিতাপ অগ্নিতপ্ত অগ্নিত্রয় অগ্নিতুল্য অগ্নিদগ্ধ অগ্নিদাতা অগ্নিদাত্রী অগ্নিদান অগ্নিদাহ অগ্নিদাহ্য অগ্নিদীপক অগ্নিদীপ্ত অগ্নিদীপন অগ্নিদেব অগ্নিদেবতা অগ্নিনিবারক অগ্নিনির্বাপক অগ্নিনির্বাপণ অগ্নিনিয়ন্ত্রক অগ্নিপিণ্ড অগ্নিপূজক অগ্নিপুত্র অগ্নিপুরাণ অগ্নিপরীক্ষা অগ্নিপ্রবেশ অগ্নিপ্রভ অগ্নিপ্রভা অগ্নিপুরুষ অগ্নিপ্রস্তর অগ্নিবাণ অগ্নিবিস্ফোরণ অগ্নিবীণা অগ্নিবৃদ্ধি অগ্নিবর্ণ অগ্নিবর্ধক অগ্নিবর্ষী অগ্নিবর্ষণ অগ্নিবৃষ্টি অগ্নিমুখ অগ্নিমুখী অগ্নিমান্দ্য অগ্নিমন্ত্র অগ্নিমূর্তি অগ্নিমূল্য অগ্নিময় অগ্নিরথ অগ্নিশিখা অগ্নিশয্যা অগ্নিশুদ্ধ অগ্নিশুদ্ধি অগ্নিশপথ অগ্নিশর্মা অগ্নিসংযোগ অগ্নিসংযোগকারী অগ্নিসংস্কার অগ্নিসখা অগ্নিসঙ্কেত অগ্নিসাক্ষী অগ্নিসাৎ অগ্নিসেতু অগ্নিসৎকার অগ্নিস্ফুলিঙ্গ অগ্নিসহ অগ্নিহীন অগ্নিহোত্র অগ্নিহোত্রাদি অগ্নিহোত্রী অগ্নীশ্বর অগ্ন্যুৎপাত অগ্ন্যূৎপাত অগ্ন্যুৎপাতগত অগ্ন্যুৎসব অগ্ন্যুদগার অগ্ন্যুদগম অগ্ন্যস্ত্র অগুনতি অগ্নুৎপাত অগন্তব্য অগভীর অগভীরতা অগভীরভাবে অগম্য অগম্যগমন অগম্যা অগম্যাগামী অগম্যাগমন অগম্ভীর অগ্র অগ্রগামিনী অগ্রগামী অগ্রগণ্য অগ্রগণ্যতা অগ্রগতি অগ্রগমন অগ্রাধিকার অগ্রাভিসারী অগ্রাহ্য অগ্রিম অগ্রিমক অগ্রে অগ্রোন্মুখ অগ্রজ অগ্রজিহ্বা অগ্রজিহ্বামূলীয় অগ্রজ্ঞান অগ্রজতুল্য অগ্রজন্মা অগ্রজপ্রতিম অগ্রযাত্রা অগ্রণী অগ্রণীশোভন অগ্রতালব্য অগুরুত্বপূর্ণ অগ্রথিত অগ্রদানী অগ্রদূত অগ্রদত্ত অগ্রদন্ত্য অগ্রদন্তমূলীয় অগ্রদ্বীপ অগ্রনায়ক অগ্রনেতা অগ্রপথিক অগ্রপ্রতিবেষ্টিত অগ্রপশ্চাৎ অগ্রবর্তিনী অগ্রবর্তী অগ্রবর্তীকরণ অগ্রভাগ অগ্রভাব অগ্রমুখী অগ্রমাংস অগ্রমাস অগ্রমহিষী অগ্ররাশি অগ্রসূচনা অগ্রস্থ অগ্রস্থিত অগ্রসর অগ্রসরমান অগ্রহায়ণ অগ্রহায়ণী অগ্রহায়ণমাস অগ্রহণ অগ্রহণীয় অগ্রহণযোগ্য অগ্রহণযোগ্যতা অগস্ত্য অগস্ত্যোদয় অগস্ত্যযাত্রা অগস্ত্যমুনি অগড় অগড়ম অঘ অঘা অঘাট অঘোর অঘোরকামিনী অঘোরী অঘোরতন্ত্রী অঘোরনাথ অঘোরপন্থি অঘোরপন্থী অঘোরমন্ত্র অঘোষ অঘোষিত অঘোষিতভাবে অঘোষতা অঘোষধ্বনি অঘোষবর্ণ অঘটন অঘটনীয় অঘনাশন অঘমর্ষণ অঘর অঘ্রাণ অঘ্রাত অঘ্রান অঘূর্ণায়মান অঙ্ক অঙ্কিত অঙ্কযুক্ত অঙ্কদেশ অঙ্কন অঙ্কনকাজ অঙ্কনি অঙ্কনীয় অঙ্কনযোগ্য অঙ্কনপদ্ধতি অঙ্কনভঙ্গি অঙ্কনরীতি অঙ্কপাত অঙ্কপাতন অঙ্কপ্রণালী অঙ্কবাচক অঙ্কবাদ অঙ্কবিদ অঙ্কবিদ্যা অঙ্কুর অঙ্কুরিত অঙ্কুরোদগম অঙ্কুরোদ্গম অঙ্কুরোদ্ভেদ অঙ্কুরোদয় অঙ্কলক্ষ্মী অঙ্কুশ অঙ্কশাস্ত্র অঙ্কশাস্ত্রবিদ অঙ্কশাস্ত্রবেত্তা অঙ্কশায়িনী অঙ্কশায়ী অঙ্কুশতুল্য অঙ্কস্থ অঙ্কস্থিত অঙ্কস্থিতা অঙ্গ অঙ্গগ্লানি অঙ্গাঙ্গী অঙ্গাঙ্গীভাব অঙ্গাঙ্গীভাবে অঙ্গাণু অঙ্গাবরণ অঙ্গার অঙ্গারক অঙ্গারঘটিত অঙ্গারাম্ল অঙ্গারিত অঙ্গারীয় অঙ্গারযৌগিক অঙ্গারধানিকা অঙ্গারধানী অঙ্গিকা অঙ্গী অঙ্গীকার অঙ্গীকারকরণ অঙ্গীকারাবদ্ধ অঙ্গীকারনির্দিষ্ট অঙ্গীকারপত্র অঙ্গীকারবদ্ধ অঙ্গীকৃত অঙ্গীকরণ অঙ্গচালন অঙ্গচালনা অঙ্গচ্ছেদ অঙ্গচ্ছেদন অঙ্গীভূত অঙ্গের অঙ্গজ অঙ্গজা অঙ্গজাত অঙ্গযুক্ত অঙ্গযুক্তা অঙ্গতন্ত্র অঙ্গত্র অঙ্গত্রাণ অঙ্গদেশ অঙ্গদ্বয় অঙ্গদল অঙ্গন অঙ্গনা অঙ্গন্যাস অঙ্গপ্রায়শ্চিত্ত অঙ্গপ্রতিষ্ঠান অঙ্গপ্রত্যঙ্গ অঙ্গবাক্য অঙ্গবিকৃতি অঙ্গবিক্ষেপ অঙ্গবিন্যাস অঙ্গবিহীন অঙ্গবিহীনা অঙ্গব্যবচ্ছেদ অঙ্গব্যবচ্ছেদবিদ্যা অঙ্গভঙ্গি অঙ্গভঙ্গিমা অঙ্গমার্জন অঙ্গমার্জনা অঙ্গমাল্য অঙ্গমোটন অঙ্গমর্দন অঙ্গরক্ষা অঙ্গরাখা অঙ্গরাজ অঙ্গরাজ্য অঙ্গুরি অঙ্গুরীয় অঙ্গুরীয়ক অঙ্গরূপ অঙ্গরুহ অঙ্গুল অঙ্গুলি অঙ্গুলিত্র অঙ্গুলিত্রাণ অঙ্গুলিনির্দেশ অঙ্গুলিমাল অঙ্গুলিমেয় অঙ্গুলিমোটন অঙ্গুলিমূল অঙ্গুলিসংকেত অঙ্গুলিস্ফোটন অঙ্গুলিহেলন অঙ্গুলনির্দেশ অঙ্গুলসংকেত অঙ্গুলহেলন অঙ্গশোভা অঙ্গশোভাবর্ধন অঙ্গুষ্ঠ অঙ্গসংগঠন অঙ্গসংবাহন অঙ্গসংস্কার অঙ্গসংস্থা অঙ্গসংস্থান অঙ্গসংস্থানগত অঙ্গসংস্থানবিদ্যা অঙ্গসৌষ্ঠব অঙ্গসজ্জা অঙ্গসঞ্চালন অঙ্গসম্বন্ধীয় অঙ্গহানি অঙ্গহার অঙ্গহীন অঙ্গহীনতা অঙ্ঘ্রি অচকিত অচক্ষু অচাঞ্চল্য অচাল্য অচালন অচালনীয় অচিক্কণ অচিকিৎসা অচিকিৎসিত অচিকিৎস্য অচিকিৎসনীয় অচিকির্ষা অচিকীর্ষু অচিন অচিনকূল অচিনা অচিন্তা অচিন্তিত অচিন্তিতপূর্ব অচিন্ত্য অচিন্ত্যকুমার অচিন্তনীয় অচির অচিরকারী অচিরকাল অচিরক্রিয় অচিরাৎ অচিরজীবী অচিরতা অচিরদ্যুতি অচিরপ্রবৃত্ত অচিরপ্রভা অচিরপ্রসূতা অচিরস্থায়ী অচিরসম্পন্ন অচিহ্নিত অচেত অচেতচিত্ত অচেতন অচেতনা অচেতনতা অচেনা অচেনাজীবন অচেষ্ট অচেষ্টা অচেষ্টিত অচৈতন্য অচ্ছ অচ্ছিদ্র অচ্ছিন্ন অচ্ছিন্নত্বক অচ্ছেদ্য অচ্ছেদনীয় অচ্ছোদ অচ্ছুত অচ্ছুৎ অচ্ছুতজাতি অচ্ছুৎজাতি অচ্ছদ অচ্ছন্ন অচঞ্চল অচঞ্চলা অচঞ্চলতা অচ্যুত অচ্যুতি অচতুর অচতুরা অচপল অচর অচরিতার্থ অচর্চিত অচূর্ণ অচূর্ণিত অচর্বিত অচর্বনীয় অচল অচলা অচলাবস্থা অচলায়তন অচলিত অচলিষ্ণু অচলন অচলনীয় অচলপ্রতিষ্ঠ অচলরাজ অচষা অছি অছিলা অছিয়তনামা অজ অজু অজগর অজাচার অজাত অজাতকুজাত অজাতশত্রু অজাতশ্মশ্রু অজানা অজানিত অজান্তে অজিজ্ঞাস অজিজ্ঞাসু অজিজ্ঞাসিত অজিজ্ঞাস্য অজিত অজিতকুমার অজিতেন্দ্রিয় অজিতেশ অজীবিক অজীর্ণ অজীর্ণজনিত অজেয় অজৈব অজ্ঞ অজ্ঞাত অজ্ঞাতই অজ্ঞাতকুলশীল অজ্ঞাতনামা অজ্ঞাতপরিচয় অজ্ঞাতপূর্ব অজ্ঞাতবাস অজ্ঞাতবাসকাল অজ্ঞাতবাসকালীন অজ্ঞাতরাশি অজ্ঞাতসার অজ্ঞান অজ্ঞানকৃত অজ্ঞানী অজ্ঞানজনিত অজ্ঞানতা অজ্ঞানতাবশত অজ্ঞানতিমির অজ্ঞানবাদ অজ্ঞানরূপ অজ্ঞাবাদ অজ্ঞাবাদী অজ্ঞেয় অজ্ঞেয়বাদ অজ্ঞেয়বাদী অজ্ঞতা অজ্ঞতাজনিত অজ্ঞতাপ্রসূত অজ্ঞতাবশত অজন্ত অজন্তা অজন্মা অজপালক অজর অজুরা অজরামর অজরাময় অজুরদার অজস্র অজস্রতা অজুহাত অজয় অজয়া অঝোর অঝর অঞ্চিত অঞ্চিতভ্রূ অঞ্চল অঞ্চলানুসারে অঞ্চলনিধি অঞ্চলনির্ভরশীল অঞ্চলপ্রধান অঞ্চলপ্রভাব অঞ্চলবাসী অঞ্চলভিত্তিক অঞ্চলভেদ অঞ্চলসমেত অঞ্জন অঞ্জনগাঁও অঞ্জনি অঞ্জনিকা অঞ্জলি অঞ্জলিপুট অঞ্জলিপূর্ণ অঞ্জলিবদ্ধ অঞ্জলিবন্ধ অঞ্জলিবন্ধন অঞ্জলিয়া অযুক্ত অযুক্তি অযুক্তিযুক্ত অযুগ্ম অ্যা অ্যাঁ অ্যাংকর অ্যাংগার অ্যাংগল অ্যাংগ্লীয় অ্যাংলিকান অ্যাংলো অ্যাংলোফিল অ্যাংস্ট্রম অ্যাই অ্যাওয়ার্ড অ্যাওয়ার্ডস অ্যাওয়ে অ্যাকাউন্ট অ্যাকাডেমি অ্যাকিলিস অ্যাকেমেনীয় অ্যাকেরনার অ্যাকোনড্রাইট অ্যাক্ট অ্যাকটিন অ্যাক্টিনাইড অ্যাক্টিনাইডশ্রেণী অ্যাকটিনিয়াম অ্যাক্টিনিয়াম অ্যাকটিনোমাইসিটিস অ্যাকটিনোমাইসিন অ্যাক্টিয়াম অ্যাক্রোব্যাট অ্যাক্রোমেগালি অ্যাক্রোম্যাটিক অ্যাক্রনিম অ্যাক্রস অ্যাক্রস্টিক অ্যাকশন অ্যাকশনরিপ্লে অ্যাকসিডেন্ট অ্যাকসেপ্টেন্স অ্যাকসেস অ্যাক্সেস অ্যাক্সেসকোড অ্যাক্সেসটাইম অ্যাকুয়া অ্যাকুয়ারি অ্যাকুয়াস অ্যাঙ্গেল অ্যাঙ্গোলা অযাচাই অযাচিত অযাচিতভাবে অ্যাচিভমেন্ট অযাচ্য অযাচনীয় অ্যাজ অ্যাজাক্স অ্যাজিথ্রোমাইসিন অ্যাজিয়ান অ্যাজেম অযাজ্য অ্যাজটেক অ্যাজটেকস অযাজ্যযাজী অযাজ্যযাজন অ্যাজট্রিওনাম অযাজনীয় অ্যাজুলগ্রানাস অ্যাজলোসিলিন অ্যাঞ্জেল অ্যাঞ্জেলো অ্যাঞ্জেলস অ্যাঞ্জেলসে অ্যাট অ্যাটকিনসন অ্যাটাক অ্যাটাকার অ্যাটাকিং অ্যাটারনিয়াস অ্যাটিকাম অ্যাটিরস অ্যাটিস অ্যাটেকার অ্যাটেনবার্গ অ্যাটো অ্যাটম অ্যাটমিক অ্যাট্রিবিউট অ্যাট্রোপস অ্যাটলান্টিক অ্যাটলাস অ্যাটলেটিকো অ্যাটল্যান্টিক অ্যাড অ্যাডা অ্যাডাম অ্যাডামস অ্যাডামসটাউন অ্যাডিলোফোন অ্যাডিশনাল অ্যাডেনিন অ্যাডেলেইড অ্যাডেলেড অ্যাডোনিস অ্যাডোবি অ্যাডোবির অ্যাডজুটান্ট অ্যাডবি অ্যাডভাইজর অ্যাডভানস অ্যাডভান্সড অ্যাডভারটাইজমেনট অ্যাডভেঞ্চার অ্যাডভেঞ্চারস অ্যাডভেঞ্চার্স অ্যাডভোকেট অ্যাডমিন অ্যাডমিনিস্ট্রেশন অ্যাডমিরাল অ্যাড্রাস্টাস অ্যাড্রিনাল অ্যাড্রিয়াটিক অ্যাড্রিয়ান অ্যাড্রিয়েন অ্যাড্রেইন অ্যাড্রেনাল অ্যাড্রেনালিন অ্যাড্রেস অ্যাডলফ অযাত্রা অযাত্রিক অ্যাথেইজম অ্যাথেন্স অ্যাথলেট অ্যাথলেটিক অ্যাথলেটিক্স অ্যান অ্যানুইটি অ্যানা অ্যানাগ্রাম অ্যানাগ্রামিস্ট অ্যানাগ্রামীয় অ্যানাগ্রামবিদ অ্যানাটমি অ্যানাদার অ্যানাপ্লাসিয়া অ্যানাপ্লাস্টিক অ্যানাফাইল্যাক্টিক অ্যানাবলিক অ্যানালগ অ্যানালাইটিক অ্যানালিটিকাল অ্যানায়ন অ্যানি অ্যানিউরা অ্যানিমালিয়া অ্যানিমিয়া অ্যানিমেটেড অ্যানিমেটর অ্যানিমেলিয়া অ্যানিমেশন অ্যানিমেশনভিডিও অ্যানিম্যাল অ্যানিসোট্রপি অ্যানিয়াস অ্যানো অ্যানোফিলিস অ্যানজিওগ্রাফি অ্যান্ট অ্যান্টার্কটিক অ্যান্টার্কটিকা অ্যান্টি অ্যান্টিকোয়াগুল্যান্ট অ্যান্টিক্লাইম্যাক্স অ্যান্টিগনি অ্যান্টিগুয়া অ্যান্টিজেন অ্যান্টিজেনিক অ্যান্টিট্রাস্ট অ্যান্টিনর অ্যান্টিফাঙ্গাল অ্যান্টিফেব্রিন অ্যান্টিবায়োটিক অ্যান্টিবডি অ্যান্টিমনি অ্যান্টেনা অ্যান্টন অ্যান্টনি অ্যান্ড অ্যান্ডারসন অ্যান্ডি অ্যান্ডোরা অ্যান্ডোরান অ্যান্ডোরাবাসী অ্যান্ড্রোমাকি অ্যান্ড্রোমিডা অ্যানড্রুজ অযান্ত্রিক অ্যান্থনি অ্যান্থ্রাক্স অ্যানথ্রপলজি অ্যান্থলজি অ্যান্সিলিয়া অ্যান্সিলত্তি অ্যানসিয়েন্ট অ্যানসেরিস অ্যানহাইড্রাইড অ্যাপাচি অ্যাপারচার অ্যাপারেটাস অ্যাপেন্ডিক্স অ্যাপেল অ্যাপেলো অ্যাপোলো অ্যাপোলোগ্রহাণুপুঞ্জ অ্যাপোলোর অ্যাপোলজি অ্যাপোলজিয়া অ্যাপল অ্যাপ্লাইড অ্যাপ্লাস্টিক অ্যাপ্লায়েড অ্যাপ্লিকেশান অ্যাপলিকেশন অ্যাপ্লিকেশন অ্যাপ্লিকেশন্স অ্যাপলেট অ্যাপলের অ্যাপলটন অ্যাপয়েন্টমেন্ট অ্যাফিলিয়েট অ্যাফিলিয়েশন অ্যাফেয়ার্স অ্যাবাউট অ্যাবাকার অ্যাবাকাস অ্যাবালাইন অ্যাবিলিটি অ্যাবসার্ড অ্যাবসোলুট অ্যাবস্ট্রাক্টস অ্যাভিনিউ অ্যাভেঞ্জারস অ্যাভোগাড্রো অ্যামক্সিসিলিন অ্যামাইড অ্যামাইন অ্যামাইনো অ্যামাইনোগ্লাইকোসাইড অ্যামাজোনিয়ান অ্যামাজন অ্যামিনো অ্যামেচার অ্যামেরিকা অ্যামেরিকান অ্যামেরিকানা অ্যামোনিয়া অ্যামোনিয়াম অ্যামনেস্টি অ্যাম্পিসিলিন অ্যাম্পিয়ার অ্যামপ্লিফায়ার অ্যামফোটেরিক অ্যাম্বার অ্যাম্বারসনস অ্যাম্বাসেডর অ্যামবিগ্রাম অ্যামব্যাসাডরস অ্যামব্রোস অ্যাম্বুলেন্স অ্যামবুশ অ্যামস্টারডাম অ্যারিজোনা অ্যারিস্টটল অ্যারিয়ান অ্যারে অ্যারেনা অ্যারো অ্যারোকেনেথ অ্যারোগ্রাফার অ্যারোনটিকস অ্যারোবিক অ্যারোমাটিক অ্যারোস্পেস অ্যারোহেড অ্যাল্কালাইন অ্যালকোহল অ্যালগোরিদম অ্যালগোরিদমিক অ্যালগরিদম অ্যালাইভ অ্যালানিন অ্যালাব্যামা অ্যালার্জি অ্যালার্ম অ্যালায়েন্স অ্যালিফেটিক অ্যালেকজান্ডার অ্যালেক্স অ্যালেক্সান্ডার অ্যালফাবেট অ্যালফ্রেড অ্যালবা অ্যালবাম অ্যালবেনিয়া অ্যালভিওলাই অ্যালভিওলার অ্যালভিওলিয় অ্যালুমিনিয়াম অ্যালুমিনোসিলিকেট অ্যালরয় অ্যাস্কারিয়াস অ্যাসকি অ্যাসাম্পশন অ্যাসিংক্রোনাস অ্যাসিটাইল অ্যাসিটিক অ্যাসিটোন অ্যাসিট্যামাইড অ্যাসিড অ্যাসিরিয়া অ্যাসিরীয় অ্যাসিস্ট্যান্ট অ্যাসেটিলিন অ্যাসেন্ডিং অ্যাসেম্বলার অ্যাসেম্বলি অ্যাসোসিয়েটিভিটি অ্যাসোসিয়েশান অ্যাসোসিয়েশন অ্যাস্টাটিন অ্যাস্ট্রাইয়া অ্যাস্ট্রোনোমার অ্যাস্ট্রোনটিকস অ্যাস্ট্রোনমি অ্যাস্ট্রোনমিক্যাল অ্যাস্ট্রোনমির অ্যাস্ট্রোফাইন্ড অ্যাস্ট্রোফিজিক্যাল অ্যাস্ট্রোফিজিক্স অ্যাস্পারাজিন অ্যাস্পারজিয়া অ্যাস্পার্টিক অ্যাসপিরিন অটিজম অটিস্টিক অটিস্টিকস অটো অযোগ অযোগ্য অযোগ্যা অযোগ্যতা অযোগ্যভাবে অযোগবাহ অযোগবাহবর্ণ অটোগ্রাফ অটোজোমাল অযোজ্যতা অটোডেক্স অযোদ্ধা অযোধ্য অযোধ্যা অযোধ্যাকাণ্ড অযোধ্যাপতি অযোনি অযোনিজ অযোনিজা অযোনিসম্ভূত অযোনিসম্ভূতা অযোনিসম্ভব অযোনিসম্ভবা অটোবায়োগ্রাফি অটোভন অটোমাটা অটোমান অটোমার অটোমেটিক অটোমেটেড অটোমেশন অটোমোবাইল অটোম্যাট অটোম্যাটা অটোম্যাটিক অটোম্যাটন অটোম্যান অটোরিকশা অটোয়া অটোয়ার অযৌক্তিক অযৌক্তিকতা অযৌক্তিকভাবে অযৌগিক অযৌন অযৌনজনন অটুট অট্ট অট্টালিকা অয্যোধ্যা অট্টট্ট অট্টনাদ অট্টনিনাদ অট্টরোল অট্টরব অট্টহাস অট্টহাসি অট্টহাস্য অযুত অযত্ন অযত্নকৃত অযত্নজাত অযত্নবান অযত্নলব্ধ অযত্নশীল অযত্নসম্ভূত অযথা অযথার্থ অযথার্থতা অযথার্থভাবে অটনি অটবি অটবী অটল অযশ অডিও অডিকলন অডিট অডিটোরিয়াম অডিটর অডিশন অডিসি অঢেল অণু অণুঘটক অণুঘটিত অণুচক্রাধিক্য অণুচক্রিকা অণুচ্ছেদ অণুজীব অণুজীববিজ্ঞান অণুজীববিজ্ঞানী অণুজীববিদ্যা অণ্ড অণ্ডকোষ অণ্ডাকার অণ্ডাকৃতি অণ্ডালু অণ্ডজ অণ্ডযুক্ত অণ্ডহীন অণুত্ব অণুতর অণুতরঙ্গ অণুবীক্ষণ অণুবীক্ষণযন্ত্র অণুভিত্তিক অণুমাত্র অণুসহায়িকা অত অতঃপর অতএব অতকাল অতক্রম অতক্ষণ অতি অতিকামুকতা অতিকার অতিকায় অতিকায়তা অতিকথা অতিকথন অতিক্রান্ত অতিক্রম অতিক্রমকারী অতিক্রম্য অতিক্রমণ অতিক্রমণীয় অতিকল্পিত অতিক্ষেত্রিক অতিকষ্ট অতিক্ষণিক অতিক্ষুদ্র অতিঘরন্তী অতিচালাক অতিতারল্য অতিতপ্ত অতিতর অতিথ অতিথি অতিথিপূজা অতিথিপরায়ণ অতিথিপরায়ণতা অতিথিপ্রিয় অতিথিবৎসল অতিথিবৃন্দ অতিথিরূপ অতিথিশালা অতিথিশিল্পী অতিথিসেবক অতিথিসেবা অতিথিসৎকার অতিদানব অতিদীর্ঘ অতিদূর অতিদ্রুত অতিদ্রুততা অতিদর্প অতিদর্পহেতু অতিদূরবর্তী অতিনাটক অতিনাটকীয় অতিনাটকীয়তা অতিনিযুক্তি অতিনিম্ন অতিনিয়োজিত অতিনীল অতিনৈকট্য অতিপৃক্ত অতিপান অতিপূজনীয় অতিপৃথকীকরণ অতিপ্রাকৃত অতিপ্রাচীন অতিপরিবাহিতা অতিপরিবাহী অতিপ্রচলিত অতিপ্রজনন অতিপ্রবাহী অতিপ্রবল অতিপ্রশস্তি অতিপ্রসারণ অতিপ্রয়োজনীয় অতিবাদ অতিবাহিত অতিবাহন অতিবাহনকারী অতিবাড় অতিবিলম্ব অতিবিলম্বিত অতিবেগ অতিবেগুনি অতিবেগুনী অতিবোকা অতিব্যাপ্ত অতিব্যবহৃত অতিব্যস্ত অতিবৃদ্ধ অতিবুদ্ধি অতিবর্ণনা অতিবর্তী অতিবল অতিবৃষ্টি অতিবৃহৎ অতিবড় অতিভক্তি অতিভাষী অতিভোজন অতিভুজ অতিমুখী অতিমুগ্ধতা অতিমাত্র অতিমাত্রা অতিমান অতিমানব অতিমানবিক অতিমানবী অতিমানুষ অতিমানুষিক অতিমানুষবাদ অতিমিষ্ট অতিমন্দা অতিমূর্খ অতিমর্ত্য অতিরিক্ত অতিরিক্ততা অতিরঞ্জিত অতিরঞ্জন অতিরথ অতিলালন অতিলোভ অতিলোভী অতিশক্তিশালী অতিশীঘ্র অতিশীতল অতিশৈত্য অতিশুদ্ধি অতিশুদ্ধিকরণ অতিশয় অতিশয়োক্তি অতিষ্ঠ অতিসূক্ষ্ম অতিসাধারণ অতিসাধারণীকরণ অতিসার অতিসৌরভ অতিসজ্জিত অতিসত্বর অতিসুন্দর অতিসন্নিধান অতিসম্প্রতি অতিসম্মুখিত অতিহার অতিহিসাবি অতিহ্রস্ব অতীক্ষ্ণ অতীত অতীতকাল অতীতবেত্তা অতীতস্মৃতি অতীন্দ্রিয় অতীন্দ্রিয়তা অতীন্দ্রিয়বাদ অতীন্দ্রনাথ অতীন্দ্রমোহন অতীব অতীবা অতীব্র অতেজস্ক্রিয় অতো অতোধিক অতট অত্যুক্তি অত্যুগ্র অত্যুঙ্গ অত্যাচার অত্যাচারকারী অত্যাচারিণী অত্যাচারিত অত্যাচারিতা অত্যাচারী অত্যাজ্য অত্যাদর অত্যাধুনিক অত্যাবশ্যক অত্যাবশ্যকীয় অত্যাশ্চর্য অত্যাসক্ত অত্যাসক্তি অত্যুজ্জ্বল অত্যুতকৃষ্ট অত্যুৎকৃষ্ট অত্যুত্তম অত্যুৎপাদন অত্যুৎসাহ অত্যধিক অত্যন্ত অত্যন্তগামিক অত্যুন্নত অত্যুন্নতি অত্যল্প অত্যল্পকাল অত্যল্পপরিমাণ অত্যুষ্ণ অত্যহিত অত্যয় অত্যয়িত অত্যয়পত্র অতথ্য অতনু অতন্দ্র অতন্দ্রিত অতন্দ্রিতা অতনুরতি অতৃপ্ত অতৃপ্তি অতৃপ্তিকর অতপ্রকার অতবার অতভাবে অত্র অতর্ক অতর্কিত অতর্কিতভাবে অতর্কনীয় অতরকম অতরকমভাবে অত্রাঞ্চল অতরল অত্রস্থ অতল অতুল অতলান্ত অতলান্তিক অতুলচন্দ্র অতুল্য অতুল্যতেজ অতলতল অতুলন অতুলনীয় অতুলনীয়া অতুলপ্রসাদ অতলস্পর্শ অতশত অতুষ্ট অতুষ্টি অতুষ্টিকর অতসী অথই অথচ অথেনটিক অথেনটিকেশন অথৈ অথৈজল অথোরাইজেশন অথোরিটি অথবা অথরাইজ অথরাইজড অথরিটি অথর্ব অথর্বতা অদক্ষ অদক্ষতা অদখল অদগ্ধ অদাতা অদান অদাহ্য অদাহ্যতা অদিক অদিতি অদিতিনন্দন অদিন অদীক্ষিত অদীন অদীপ অদেখা অদেয় অদ্য অদ্যকার অদ্যাপি অদ্যাবধি অদ্যতন অদণ্ডনীয় অদন্ত অদ্বিতীয় অদ্বিতীয়া অদ্বৈত অদ্বৈতাচার্য অদ্বৈতবাদ অদ্বৈতবাদী অদ্বয় অদ্বয়বাদ অদ্বয়বাদী অদ্ভুত অদ্ভুতকর্মা অদ্ভুতদর্শন অদ্ভুতভাবে অদ্ভুতরস অদ্ভুতুড়ে অদম্য অদমনীয় অদমনীয়তা অদূর অদরকার অদরকারি অদরকারী অদ্রি অদরিদ্র অদ্রিনাথ অদ্রিরাজ অদ্রিশিখর অদ্রোহ অদূরদর্শিতা অদূরদর্শিনী অদূরদর্শী অদ্রব অদ্রবণীয় অদূরবদ্ধ অদূরবদ্ধদৃষ্টি অদূরবর্তিতা অদূরবর্তিনী অদূরবর্তী অদূরভবিষ্যৎ অদর্শন অদূরস্থ অদূরস্পর্শী অদল অদলীয় অদলবদল অদলসূচক অদৃশ্য অদৃশ্যকরণ অদৃশ্যকরণশক্তি অদৃশ্যপ্রায় অদৃশ্যবস্তু অদৃশ্যভাবে অদৃশ্যমান অদৃষ্ট অদৃষ্টক্রমে অদৃষ্টিগোচর অদৃষ্টচর অদৃষ্টপরীক্ষা অদৃষ্টপূর্ব অদৃষ্টপুরুষ অদৃষ্টবাদ অদৃষ্টবাদী অদৃষ্টবৈগুণ্য অদৃষ্টলিপি অদহনীয় অদহনীয়তা অদৃঢ় অদৃঢ়তা অধঃ অধঃকৃত অধঃকরণ অধঃক্রম অধঃক্রমানুসারে অধঃক্ষিপ্ত অধঃক্ষেপণ অধঃপাত অধঃপাতিত অধঃপাতিয়া অধঃপেতে অধঃপতিত অধঃপতন অধঃশির অধঃশিরা অধঃস্তর অধঃস্তরিক অধঃস্থ অধাতু অধাতব অধাতুশ্রেণী অধার্মিক অধার্মিকতা অধি অধিক অধিকা অধিকাংশ অধিকার অধিকারকাল অধিকারক্ষেত্র অধিকারগত অধিকারিণী অধিকারী অধিকারচ্যুত অধিকারজাত অধিকারযুক্ত অধিকারদান অধিকারপ্রাপ্ত অধিকারভুক্ত অধিকারভেদ অধিকারভ্রষ্ট অধিকারসম্পন্ন অধিকারহীন অধিকাল অধিকেন্দ্র অধিকৃত অধিকৃতি অধিকতম অধিকতর অধিকন্তু অধিকবয়স্ক অধিকভাষা অধিকমাত্রা অধিকরণ অধিকর্তা অধিকর্ত্রী অধিকর্ম অধিক্ষিপ্ত অধিক্ষেত্র অধিক্ষেপ অধিগঠন অধিগত অধিগম অধিগম্য অধিগম্যতা অধিগমন অধিগ্রহণ অধিগৃহীত অধিজিহ্বা অধিজ্যামিতিক অধিজ্যামিতীয় অধিটাইপ অধিদেব অধিদেবতা অধিদৈবত অধিদপ্তর অধিদফতর অধিধ্বনি অধিধ্বনিমূল অধিধ্বনীয় অধিনালিকা অধিনায়ক অধিনায়কোচিত অধিনায়কত্ব অধিনিয়ম অধিপ অধিপতি অধিপুরুষ অধিপ্রয়োগিক অধিবক্তা অধিবাচন অধিবাস অধিবাসিনী অধিবাসী অধিবাসীরূপে অধিবাস্তব অধিবাস্তববাদ অধিবাসন অধিবিদ অধিবিদ্যা অধিবিন্না অধিবেত্তা অধিবেদন অধিবেশন অধিবৃত্ত অধিবৃত্তি অধিবৃত্তিক অধিবৃত্তীয় অধিবর্ষ অধিভূ অধিভুক্ত অধিভার অধিভাষা অধিভাষাতত্ত্ব অধিভাষাবিজ্ঞান অধিভাষী অধিমূল্য অধিমূল্যায়িত অধিমূল্যায়ন অধিষ্ঠাতা অধিষ্ঠাত্রী অধিষ্ঠান অধিষ্ঠানক্ষেত্র অধিষ্ঠানচক্র অধিষ্ঠানভূমি অধিষ্ঠিত অধিষ্ঠিতা অধীত অধীতি অধীতব্য অধীন অধীনা অধীনত অধীনতা অধীনত্ব অধীনস্থ অধীর অধীরা অধীরতা অধীশ অধীশ্বর অধীয়মান অধৈর্য অধোগামী অধোগঠন অধোগত অধোগতি অধোগতিশীল অধোগমন অধোদেশ অধোবাস অধোবায়ু অধোবদন অধোবদনা অধোভাগ অধোভাগস্থ অধোভুবন অধোমুখ অধোমুখী অধোলোক অধৌত অধ্যক্ষ অধ্যক্ষা অধ্যক্ষতা অধ্যক্ষত্ব অধ্যাদেশ অধ্যাপক অধ্যাপিকা অধ্যাপিত অধ্যাপন অধ্যাপনা অধ্যাপনাকাল অধ্যাপয়িতা অধ্যাপয়িত্রী অধ্যারোপ অধ্যারোপণ অধ্যারূঢ় অধ্যাস অধ্যাসিত অধ্যাসীন অধ্যাসন অধ্যাহার অধ্যাহার্য অধ্যাহৃত অধ্যাহরণ অধ্যায় অধ্যায়যুক্ত অধ্যবসায় অধ্যবসায়ী অধ্যবসায়যুক্ত অধ্যবসায়শীল অধ্যবসায়হীন অধ্যবসায়হীনতা অধ্যুষিত অধ্যয়ন অধ্যয়নকারী অধ্যয়নকাল অধ্যয়নযোগ্য অধ্যয়ননিবিষ্ট অধ্যয়ননিরত অধ্যয়নপ্রিয় অধ্যয়নমগ্ন অধ্যয়নরত অধ্যয়নশীল অধুনা অধুনাতন অধুনাতনী অধুনালুপ্ত অধবা অধ্বনিমূলক অধম অধমাঙ্গ অধমাধম অধমতারণ অধূমপায়ী অধমর্ণ অধর অধরা অধরামৃত অধরীকৃত অধরোষ্ঠ অধরপান অধরপল্লব অধ্রুব অধর্ম অধর্মাচারী অধর্মাচরণ অধর্মী অধর্মচারী অধর্ম্য অধরমধু অধরমধুপান অধর্মপরায়ণ অধরসুধা অধরসুধাপান অধস্তন অনুকার অনুকারী অনুকারধ্বনি অনুকারশব্দ অনুকৃত অনুক্ত অনুকৃতি অনুক্ততা অনুকম্পা অনুকম্পাযুক্ত অনুকম্পন অনুকরণ অনুকরণকারী অনুকরণাত্মক অনুকরণীয় অনুকরণপ্রিয় অনুকরণপ্রবৃত্তি অনুকরণবৃত্তি অনুক্রম অনুক্রমিক অনুক্রমণ অনুক্রমণিকা অনুক্রমণী অনুকূল অনুকূলতা অনুকল্প অনুকল্পসমৃদ্ধ অনুকূলভাবে অনুক্ষণ অনক্ষর অনক্ষরিক অনক্ষরী অনুগামিতা অনুগামিনী অনুগামী অনগণ্য অনুগত অনুগমন অনুগমনকারী অনুগ্র অনুগ্রাহক অনুগ্রাহী অনুগ্রতা অনগ্রসর অনগ্রসরতা অনুগ্রহ অনুগ্রহকারী অনুগ্রহদৃষ্টি অনুগ্রহপ্রাপ্ত অনুগ্রহপ্রার্থী অনুগ্রহপ্রদত্ত অনুগ্রহপূর্বক অনুগ্রহবর্ষণ অনুগ্রহসূচক অনুগৃহীত অনুগৃহীতা অনুঘটক অনুঘটিত অনঙ্কুরিত অনঙ্গ অনঙ্গকলা অনঙ্গদেব অনঙ্গমোহন অনা অনাকাঙ্ক্ষা অনাকাঙ্ক্ষিত অনাক্রান্ত অনাক্রম্য অনাক্রম্যতা অনাক্রম্যতত্ত্ব অনাক্রম্যতন্ত্র অনাক্রমণ অনাকুল অনাগত অনাগতবিধাতা অনাগরিক অনাগ্রহ অনাগ্রহী অনাঘ্রাত অনাঘ্রাতা অনাচার অনাচারকারী অনাচারিক অনাচারী অনাচ্ছাদিত অনাচরণীয় অনাটন অনাত্মীয় অনাত্মীয়া অনাত্মীয়তা অনাথ অনাথআলয় অনাথা অনাথাশ্রম অনাথিনী অনাথনাথ অনাথনিবাস অনাথবন্ধু অনাদায় অনাদায়ী অনাদি অনাদিকাল অনাদিকুমার অনাদেয় অনাদ্য অনাদ্যন্ত অনাদৃত অনাদর অনাদরণীয় অনানুষ্ঠানিক অনাবাদ অনাবাদী অনাবাসিক অনাবাসী অনাবাসযোগ্য অনাবিল অনাবিলা অনাবিষ্কৃত অনাবিষ্ট অনাবৃত অনাবৃতি অনাবদ্ধ অনাবশ্য অনাবশ্যক অনাবশ্যকীয় অনাবৃষ্টি অনাভাব অনামা অনামিক অনামিকা অনার অনারারি অনারারী অনারেবল অনার্য অনার্যজাতি অনার্যতা অনার্যসুলভ অনার্দ্র অনার্দ্রতা অনারব অনারম্ভ অনার্স অনালোকিত অনালোচিত অনালোচ্য অনালোচনীয় অনাশ্রিত অনাশ্রয় অনাসক্ত অনাসক্তা অনাসক্তি অনাস্থা অনাস্থাপ্রস্তাব অনাস্বাদ অনাস্বাদিত অনাস্বাদিতপূর্ব অনাসৃষ্টি অনাহার অনাহারক্লিষ্ট অনাহারী অনাহুত অনাহূত অনাড়ম্বর অনায়াস অনায়াসকৃত অনায়াসগম্য অনায়াসলব্ধ অনায়াসলভ্য অনায়াসসাধ্য অনায়াসসিদ্ধ অনায়ত্ত অনিঃশেষ অনিকেত অনিকেতন অনিকট অনিচ্ছু অনিচ্ছুক অনিচ্ছা অনিচ্ছাকৃত অনিচ্ছাবশত অনিচ্ছাসত্ত্বে অনিত্য অনিত্যতা অনিদ্র অনিদ্রা অনিন্দা অনিন্দিত অনিন্দিতা অনিন্দ্য অনিন্দ্যসুন্দর অনিন্দনীয় অনিপুণ অনিপুণা অনিপুণতা অনিবার অনিবারিত অনিবার্য অনিবার্যভাবে অনিবারণীয় অনিবিড় অনিবেদিত অনিবদ্ধ অনিবর্তিত অনিবর্তন অনিমিখ অনিমিষ অনিমিষনেত্রে অনিমেষ অনিমেষনেত্রে অনিমন্ত্রিত অনিরাপদ অনির্ণীত অনির্ণেয় অনির্ণেয়তা অনির্দিষ্ট অনির্দিষ্টকাল অনির্দিষ্টনামা অনির্দিষ্টভাবে অনির্দেশ অনির্দেশক অনির্দেশিতদিক অনির্দেশ্য অনিরুদ্ধ অনির্ধারিত অনিরূপিত অনির্বাচিত অনির্বাচ্য অনির্বাণ অনির্বাহী অনির্বচনীয় অনির্বচনীয়া অনির্ভর অনির্ভরতা অনির্ভরশীলতা অনিল অনিশ্চিত অনিশ্চয় অনিশ্চয়ার্থ অনিশ্চয়তা অনিষিদ্ধ অনিষ্ট অনিষ্টকারক অনিষ্টকারী অনিষ্টকর অনিষ্টাচরণ অনিষ্টাপাত অনিষ্টচিন্তা অনিষ্টজনক অনিষ্টদায়ক অনিষ্টসাধন অনিষ্ঠ অনিষ্ঠকারী অনিষ্ঠকর অনিষ্ঠাচরণ অনিষ্ঠাশঙ্কা অনিষ্ঠজনক অনিষ্ঠদায়ক অনিষ্পত্তি অনিষ্পন্ন অনিয়ত অনিয়তাকার অনিয়ন্ত্রিত অনিয়ন্ত্রিতভাবে অনিয়ন্ত্রণযোগ্য অনিয়ম অনিয়মিত অনিয়মিতভাবে অনুচারী অনুচিকীর্ষু অনুচিকীর্ষা অনুচিত অনুচিন্তা অনুচিন্তন অনুচ্চ অনুচ্চকথা অনুচ্চার অনুচ্চারিত অনুচ্চার্য অনুচ্চারণীয় অনুচ্চস্বর অনুচ্ছেদ অনুচর অনুচরী অনুচরদ্বয় অনীশ অনীশ্বর অনীশ্বরবাদ অনীশ্বরবাদী অনীহ অনীহা অনেক অনেককাল অনেককিছু অনেকক্ষেত্র অনেকক্ষণ অনেকাংশ অনেকার্থক অনেকদিন অনেকদূর অনেকপ্রকার অনেকবার অনেকবিধ অনেকভাবে অনেকরকম অনেকরকমভাবে অনেকরূপ অনেকসংখ্যক অনেকসময় অনৈক্য অনৈক্যমূলক অনৈক্যরহিত অনৈচ্ছিক অনৈচ্ছিকভাবে অনৈতিক অনৈতিকতা অনৈপুণ্য অনৈসর্গিক অনুজ অনুজকল্প অনুজা অনুজাত অনুজীবী অনুজীব্য অনুজ্জ্বল অনুজ্জ্বলতা অনুজ্ঞা অনুজ্ঞাত অনুজন্মা অন্য অন্যকিছু অন্যকে অন্যকোন অন্যকোনো অনুযুক্ত অন্যকৃত অন্যকথা অন্যগত অন্যগতি অন্যঘর অন্যায্য অন্যায্যতা অনুযাত্র অনুযাত্রিক অন্যান্য অন্যান্যভাবে অন্যান্যরকম অন্যান্যরূপে অন্টারিও অন্যাসক্ত অন্যাসক্তা অন্যায় অন্যায়কারী অন্যায়কর্ম অন্যায়াচার অন্যায়াচারী অন্যায়াচরণ অনুযায়ী অন্যায়চারী অন্যায়ত অন্যায়পথ অন্যায়পূর্বক অন্যায়ভাবে অন্যচেষ্টা অনুযোক্তা অনুযোগ অনুযোগকারী অনুযোগিনী অনুযোগী অনুযোগ্য অনুযোজ্য অন্যোন্য অন্যজন অন্যত অন্যতম অন্যতমা অন্যতর অন্যত্র অন্যথা অন্যথাকরণ অন্যথাচারী অন্যথাচরণ অন্যদিক অন্যদিন অন্যদীয় অন্যদেশ অন্যদুটি অন্যদুটো অন্যদল অন্যধারা অনটন অন্যূন অন্যনাম অন্যপক্ষ অন্যপাত অন্যপাশ অন্যপ্রকার অন্যপ্রকাশ অন্যপূর্ব অন্যপূর্বা অন্যপুষ্ট অন্যবার অন্যবিধ অন্যবিষয়ক অন্যভাগ অন্যভাব অন্যভাবে অন্যভাষা অন্যমত অন্যমনা অন্যমনে অন্যমনস্ক অন্যমনস্কতা অন্যমনস্কভাবে অন্যরকম অন্যরকমভাবে অন্যরাশি অন্যরূপ অন্যসাপেক্ষ অন্যস্থান অন্যসব অন্যসময় অনূঢ় অনূঢ়া অনৃত অন্ত অন্তঃ অন্তঃঅবস্থান্তর অন্তঃকক্ষ অন্তঃকঙ্কাল অন্তঃকেন্দ্রিক অন্তঃকোণ অন্তঃকোষীয় অন্তঃক্রীড়া অন্তঃকরণ অন্তঃকর্ণ অন্তঃকরণবৃত্তি অন্তঃকলহ অন্তঃক্ষরা অন্তঃগ্রথিত অন্তঃত্বক অন্তঃনাসারন্ধ্র অন্তঃপাতী অন্তঃপট অন্তঃপুর অন্তঃপ্রক্ষেপণ অন্তঃপুরিকা অন্তঃপুরের অন্তঃপ্রত্যয় অন্তঃপুরত্ব অন্তঃপুরবাসিনী অন্তঃপ্রবাহ অন্তঃপ্রবিষ্ট অন্তঃপ্রবেশন অন্তঃপুরস্ত্রী অন্তঃবৃত্ত অন্তঃশাব্দিক অন্তঃশিলা অন্তঃশীল অন্তঃশীলা অন্তঃশত্রু অন্তঃশ্বসন অন্তঃশুল্ক অন্তঃসংগঠন অন্তঃসংজ্ঞা অন্তঃসংযোগ অন্তঃসার অন্তঃসারবিহীন অন্তঃসারশূন্য অন্তঃসারহীনভাবে অন্তঃসত্ত্বা অন্তঃস্থ অন্তঃস্থিত অন্তঃস্থধ্বনি অন্তঃস্থভিতর অন্তঃস্থল অন্তঃস্ফোটী অন্তঃস্ফোটন অন্তঃস্বরাগম অন্তঃস্বরীয় অন্তঃস্রাববিদ্যা অন্তঃসলিল অন্তঃসলিলা অন্তকাল অন্তকালীন অনুৎকর্ষ অনুৎকৃষ্ট অন্তক্ষরা অনুতাপ অনুতাপকারী অনুতাপসূচক অনুতাপহীন অনতি অনতিকাল অনতিক্রান্ত অনতিক্রম অনতিক্রম্য অনতিক্রমণ অনতিক্রমণীয় অনতিজোর অনতিতৃপ্ত অনতিদীর্ঘ অনতিদূর অনতিপূর্ব অনতিবিলম্ব অনতিবিস্তৃত অন্তিম অন্তিমকাল অন্তিমদশা অন্তিমশয্যা অন্তিমসময় অনতীত অনতীতবাল্য অন্তেবাসী অন্ত্য অন্ত্যেষ্টি অন্ত্যেষ্টিক্রিয়া অন্ত্যজ অন্ত্যদেশ অন্ত্যধ্বনি অন্ত্যধ্বনিলোপ অন্ত্যপ্রত্যয় অন্ত্যবিভক্তি অন্ত্যব্যঞ্জনাগম অন্ত্যবর্ণ অন্ত্যমিল অন্ত্যমিলযুক্ত অন্ত্যমিলহীন অন্ত্যস্বরাগম অন্ত্যস্বরলোপ অন্তত অনুত্তীর্ণ অনুত্তেজিত অন্ততপক্ষে অনুত্তম অনুত্তর অনুৎপাদক অনুতপ্ত অনৃতবাদিনী অনৃতবাদী অন্তবিশিষ্ট অন্তবিহীন অন্তভাগ অনৃতভাষিণী অনৃতভাষী অন্তর অন্ত্র অন্তরক অন্ত্রক্ষত অন্তর্গঠন অন্তর্গত অন্তর্গৃহ অন্তর্গূঢ় অন্তর্ঘাত অন্তর্ঘাতক অন্তর্ঘাতকারী অন্তর্ঘাতী অন্ত্রঘটিত অন্তরঙ্গ অন্তরঙ্গার্থ অন্তরঙ্গতা অন্তরঙ্গভাবে অন্তরা অন্তরাত্মা অন্তরাল অন্তরালবর্তিনী অন্তরালবর্তী অন্তরালহীন অন্তরায়িত অন্তরিক্ষ অন্তরীকরণ অন্তরীক্ষ অন্তরীক্ষচারী অন্তরীক্ষবাসিনী অন্তরীক্ষবাসী অন্তরীক্ষমণ্ডল অন্তরীপ অন্তরীয় অন্তর্জগত অন্তর্জগৎ অন্তর্জাত অন্তর্জাতিক অন্তর্জাতীয় অন্তরজ্ঞ অন্তরজ্বালা অন্তরজ্বলা অন্তর্জল অন্তর্জলি অন্তর্জলিযাত্রা অন্তর্জলী অন্তর্যামী অন্তরটিপুনি অন্তরণ অন্তরতম অন্তর্দাহ অন্তর্দেশ অন্তর্দেশীয় অন্তর্দর্শন অন্তর্দৃষ্টি অন্তর্দৃষ্টিসম্পন্ন অন্তর্ধান অন্তর্নিবিষ্ট অন্তর্নিহিত অন্তরপথ অন্ত্রপথ অন্তরপ্রদাহ অন্তরফল অন্তর্বাণিজ্য অন্তর্বাষ্প অন্তর্বাস অন্তর্বাহ অন্তর্বাহী অন্তর্বিগ্রহ অন্তর্বিপ্লব অন্তর্বিবাহ অন্তর্বিভাগীয় অন্তর্বিরোধ অন্তর্বেদি অন্তর্বেদী অন্তর্বেদনা অন্ত্রবৃদ্ধি অন্তর্বর্তী অন্তর্বর্তীকালীন অন্তর্ভুক্ত অন্তর্ভুক্তি অন্তর্ভুক্তিযোগ্য অন্তর্ভেদী অন্তর্ভূত অন্তর্মুখ অন্তর্মুখিতা অন্তর্মুখী অন্তর্মাধুর্য অন্তরস্থ অন্তর্হিত অনুৎসাহ অনুৎসাহিত অনুৎসাহী অন্তস্তল অন্তস্থ অন্তস্থঃতল অন্তহীন অন্তহীনতা অনুদ্ঘাত অনুদ্ঘাতিনী অনুদ্ঘাতী অনুদাত্ত অনুদান অনুদার অনুদিত অনূদিত অনুদিন অনুদ্যত অনুদ্যম অনুদ্দিষ্ট অনুদ্দেশ অনুদ্ধারেয় অনুদ্ধত অনুদ্বায়িতা অনুদ্বায়ী অনুদ্বিগ্ন অনুদ্বেগ অনুদ্ভিন্ন অন্দর অন্দরমহল অন্ধ অন্ধকার অন্ধকারাচ্ছন্ন অন্ধকারাবৃত অন্ধকারাবৃতা অন্ধকারপ্রায় অন্ধকারপূর্ণ অন্ধকারময় অন্ধকারময়ী অন্ধকাররূপ অন্ধকূপ অনুধাবিত অনুধাবন অনুধাবনীয় অনধিক অনধিকার অনধিকারী অনধিকারচর্চা অনধিকারপ্রবেশ অনধিকৃত অনধিগত অনধিগম্য অন্ধিসন্ধি অনধীত অন্ধজন অনুধ্যাত অনুধ্যান অনধ্যায় অনুধ্যায়ী অনুধ্যেয় অনধ্যবসায় অন্ধতা অন্ধত্ব অন্ধধাতু অন্ধপ্রেম অন্ধবায়ু অন্ধবিন্দু অন্ধবিন্দুযুক্ত অন্ধবিশ্বাস অন্ধবিশ্বাসী অন্ধবেগ অন্ধভক্ত অন্ধভাবে অন্ধ্র অন্ধ্রপ্রদেশ অন্ধ্ররাজ্য অন্ন অন্নকূট অননুকম্পায়ী অননুকরণীয় অন্নক্ষেত্র অন্নকষ্ট অন্নগত অন্নগতপ্রাণ অন্নগ্রহণ অনুনাদ অনুনাদিত অন্নাভাব অনুনাসিক অনুনাসিকতা অন্নচিন্তা অন্নছত্র অন্নজল অনন্য অনন্যকর্মা অনন্যগতি অনন্যা অনন্যচিত্ত অনন্যচিত্তা অনন্যোপায় অনন্যোপায় অনন্যতা অনন্যদৃষ্টি অনন্যপর অনন্যপরতা অনন্যবৃত্তি অনন্যব্রত অনন্যভাবে অনন্যমন অনন্যমনা অনন্যসাধারণ অনন্যসুলভ অনন্যসহায় অনন্ত অনন্তকাল অনন্তচতুর্দশী অনন্তযৌবনা অনন্তদাস অনন্তদেব অনন্তনাগ অনন্তনিদ্রা অনন্তপাত অননুতপ্ত অনন্তবিস্তার অনন্তমূল অনন্তর অনন্তরূপী অনন্তশয্যা অনন্তশয্যারূপে অনন্তশয়ন অন্নদা অন্নদাচরণ অন্নদাতা অন্নদাত্রী অন্নদান অন্নদানকারিণী অন্নদানকারী অন্নদাপ্রসাদ অন্নদামঙ্গল অন্নদাশংকর অন্নদাশঙ্কর অন্নদাস অন্নধ্বংস অন্ননালী অনুন্নত অনুন্নতি অনুন্নয়ন অনুন্নয়নমূলক অন্নপ্রাশন অন্নপূর্ণ অন্নপূর্ণা অনন্বিত অন্নব্যঞ্জন অন্নবস্ত্র অনন্বয় অন্নভোগ অন্নভোজী অননুভূত অননুভূতপূর্ব অননুভবনীয় অননুমানযোগ্য অননুমানযোগ্যতা অননুমেয় অননুমোদিত অননুমোদন অন্নময় অন্নরস অননুশীলিত অননুশীলন অননুষ্ঠিত অন্নসংস্থান অন্নসংস্থানহীন অন্নসত্র অন্নহীন অনুনয় অনুনয়ী অনুনয়যুক্ত অনুনয়বিনয় অনুনয়সূচক অনুপ অনুপকার অনুপকারক অনুপকারী অনুপকৃত অনুপুঙ্খ অনুপুঙ্খসমেত অনুপাত অনুপান অনুপানরূপে অনুপাম অনুপায় অনপেক্ষ অনপেক্ষিত অনপেক্ষতা অনপেক্ষবাদ অনুপযুক্ত অনুপযুক্ততা অনুপযোগ অনুপযোগিতা অনুপযোগী অনুপ্ত অনপত্য অনপত্যতা অনুপদ অনুপদিষ্ট অনুপদী অনুপম অনুপমা অনুপমেয় অনুপূরক অনুপ্রাণ অনুপ্রাণিত অনুপ্রাণন অনুপ্রাণনা অনপরাধ অনপরাধিনী অনপরাধী অনুপ্রাস অনুপ্রাসিক অনুপ্রেরিত অনুপ্রেরণা অনুপূর্ব অনুপ্রবিষ্ট অনুপ্রবেশ অনুপ্রবেশকারী অনুপ্রভা অনুপ্রস্থ অনুপস্থিত অনুপস্থিতি অনবকাশ অনবগুণ্ঠিত অনবগুণ্ঠিতা অনবগত অনুবাদ অনুবাদক অনুবাদকারী অনুবাদকৃত অনুবাদকর্ম অনুবাদগ্রন্থ অনুবাদিকা অনুবাদিত অনুবাদী অনুবাদতত্ত্ব অনুবাসিত অনুবাসন অন্বিত অনুবিদ্ধ অনুবিধান অনুবিধি অন্বিষ্ট অন্বীক্ষা অন্বীক্ষিত অন্বীক্ষণ অনবচ্ছিন্ন অনবচ্ছিন্নভাবে অনবচ্ছেদ অনুবেদন অন্বেষক অন্বেষিত অন্বেষী অন্বেষণ অন্বেষণকারী অনুবৃত্ত অনুবৃত্তি অনবদ্য অনবদ্ধ অনবধান অনবধানতা অনুবন্ধ অনুবন্ধী অনুবন্ধযুক্ত অনবরোধ অনুব্রজ অনুব্রজী অনুব্রজন অনবরত অনুবর্তিতা অনুবর্তিনী অনুবর্তী অনুবর্তন অন্বর্থ অন্বর্থনামা অনবরুদ্ধ অনুবল অনবস্থা অনবসর অন্বয় অন্বয়ী অন্বয়যুক্ত অন্বয়তত্ত্ব অন্বয়সংগত অন্বয়সাধন অন্বয়সূচক অনুভাব অনুভাবিত অনুভাবী অনভিজাত অনভিজ্ঞ অনভিজ্ঞতা অনভিপ্রায় অনভিপ্রেত অনভিব্যক্ত অনভিভূত অনভিভবনীয় অনভিমত অনভিলাষ অনভিলাষী অনভিলষিত অনভিলষণীয় অনভ্যাস অনভ্যস্ত অনুভূত অনুভূতি অনুভূতিজাত অনুভূতিপ্রবণ অনুভূতিলোপকারী অনুভূতিশীল অনুভূতিশীলতা অনুভূতিসূচক অনুভূতিহীন অনুভব অনুভবকারী অনুভবযোগ্য অনুভবনীয় অনুভবশক্তি অনুভূমিক অনুভূমিকভাবে অনুমান অনুমানজাত অনুমানজনক অনুমানযোগ্য অনুমাপক অনুমিত অনুমিতি অনুমেয় অনুমোদক অনুমোদিত অনুমোদন অনুমোদনকারী অনুমত অনুমৃত অনুমৃতা অনুমতি অনুমতিক্রমে অনুমতিপত্র অনুমতিপ্রাপ্ত অনমনীয় অনমনীয়তা অনম্বর অনম্বরা অনুমরণ অনুরক্ত অনুরক্তা অনুরক্তি অনর্গল অনর্ঘ অনুরাগ অনুরাগিণী অনুরাগী অনুরাগযুক্ত অনুরাগপূর্ণ অনুরাগরঞ্জিত অনুরাগহীন অনুরাধা অনুরোধ অনুরোধকারী অনুরোধক্রমে অনুরোধবাচক অনুরোধমাফিক অনুরোধমত অনুরোধসূচক অনর্জিত অনুরঞ্জক অনুরঞ্জিত অনুরঞ্জন অনুরণিত অনুরণন অনুরণশীল অনুরত অনুরতি অনর্থ অনর্থক অনর্থকতা অনর্থকর অনর্থপাত অনুরুদ্ধ অনূর্ধ্ব অনুরূপ অনুরূপা অনুরূপতা অনুরূপভাবে অনল অনলংকার অনলংকৃত অনলঙ্কার অনলাইন অনুলাপ অনুলিখন অনুলিপি অনুলিপ্ত অনুলেখ অনুলেখক অনুলেপ অনুলেপিত অনুলেপন অনুলোম অনুলোম্য অনুলোমভাবে অনল্প অনলবর্ষী অনুলম্ব অনুল্লঙ্ঘ্য অনুল্লঙ্ঘন অনুল্লঙ্ঘনীয় অনুল্লিখিত অনুল্লেখ অনুল্লেখিত অনুল্লেখে অনুল্লেখ্য অনলস অনুশাসন অনুশাসনসংবলিত অনুশিষ্য অনুশীলিত অনুশীলন অনুশীলনী অনুশীলনীয় অনুশীলনরীতি অনুশোচিত অনুশোচন অনুশোচনা অনুশোচনাকারী অনশন অনশনক্লিষ্ট অনশনকৃশ অনশনা অনশনধর্মঘট অনশনব্রত অনুশব্দ অনশ্বর অনশ্বরতা অনুষঙ্গ অনুষঙ্গার্থ অনুষঙ্গত অনুষঙ্গস্বরূপ অনুষ্ঠাতা অনুষ্ঠান অনুষ্ঠানকারিণী অনুষ্ঠানকারী অনুষ্ঠানকর্তা অনুষ্ঠানযোগ্য অনুষ্ঠানধারা অনুষ্ঠানমালা অনুষ্ঠানশেষ অনুষ্ঠানসূচী অনুষ্ঠিত অনুষ্ঠিতব্য অনুষ্ঠেয় অনুষ্ণ অনুষদ অনুসার অনুসারিণী অনুসারী অনুসিদ্ধান্ত অনুসূচক অনসেট অনুসৃত অনুসৃতি অনস্তিত্ব অনস্তিত্বসূচক অনুসন্ধান অনুসন্ধানকারী অনুসন্ধানী অনুসন্ধায়ক অনুসন্ধায়ী অনুসন্ধিত অনুসন্ধিৎসু অনুসন্ধিৎসা অনুসন্ধেয় অনুস্বার অনস্বীকার্য অনুস্বর অনুস্মৃতি অনুস্মরণ অনুসর্গ অনুসর্গরূপে অনুসরণ অনুসরণকারী অনসূয় অনসূয়া অনড় অনড়ভাবে অনূঢ়ান্ন অপ অপু অপকার অপকারক অপকারী অপকীর্তি অপকেন্দ্র অপকৃত অপকৃতি অপক্ব অপক্বতা অপক্ববুদ্ধি অপক্রিয়া অপকর্ম অপকর্মকারী অপকর্মা অপকর্ষ অপকলঙ্ক অপকৃষ্ট অপক্ষপাত অপক্ষপাতিতা অপক্ষপাতিত্ব অপক্ষপাতী অপক্ষরণ অপগুণ অপগত অপগম অপগমন অপগ্রহ অপঘাত অপঘাতক অপঘাতী অপঘর্ষক অপঘর্ষণ অপাংক্তেয় অপাচ্য অপাঠ্য অপাত্র অপাদান অপাপ অপাপবিদ্ধ অপাবরণ অপার অপারগ অপারগতা অপারেটিং অপারেটিংসিস্টেম অপারেটর অপারেশন অপারেশনাল অপার্থিব অপার্থিবা অপারদর্শিতা অপারদর্শী অপালন অপি অপিনিহিত অপিনিহিতি অপচিকীর্ষু অপচিকীর্ষা অপচেষ্টা অপচ্ছায়া অপচ্য অপচয় অপেক্ষ অপেক্ষক অপেক্ষা অপেক্ষাকারী অপেক্ষাকৃত অপেক্ষাকৃতভাবে অপেক্ষাজনিত অপেক্ষাযুক্ত অপেক্ষারত অপেক্ষিত অপেক্ষবাদ অপেক্ষবাদিক অপেক্ষমাণ অপেক্ষমাণতা অপেরা অপেশাদার অপেশাদারি অপেয় অপোগণ্ড অপোষ্য অপছন্দ অপৌরুষ অপজাত অপজাতি অপূজিত অপজ্ঞান অপটু অপটিক অপটিকাল অপটিকের অপটিক্যাল অপটিকস অপটিক্স অপটিমা অপটিমাইজেশন অপটিমাম অপ্টিমাম অপটিমালিটি অপটুতা অপটুত্ব অপটুভাবে অপযশ অপযশকারক অপযশশর অপঠিত অপুণ্য অপণ্ডিত অপতিত অপত্য অপত্যার্থে অপত্যনির্বিশেষে অপত্যস্নেহ অপত্যহীন অপতত্ত্ব অপতন অপত্নীক অপুত্রক অপথ অপথালমোলজি অপথ্য অপথ্যালমিয়া অপদার্থ অপদার্থতা অপদেবতা অপদূর অপদ্রব্য অপদস্থ অপধাতু অপধাতুশ্রেণী অপপাঠ অপপ্রচার অপপ্রয়োগ অপবাদ অপবাদক অপবাদকারী অপবাদগ্রস্ত অপবিত্র অপবিত্রতা অপবিদ্যা অপব্যবহার অপব্যবহৃত অপব্যয় অপব্যয়িত অপব্যয়িতা অপব্যয়ী অপবর্গ অপবর্জন অপবর্তন অপভাষ অপভাষা অপভ্রংশ অপভ্রষ্ট অপমান অপমানকর অপমানিত অপমানজনক অপমানবোধ অপমিশ্রণ অপমৃত্যু অপর অপূরক অপ্রকাশ অপ্রকাশিত অপ্রকাশ্য অপ্রকাশ্যতা অপ্রকট অপ্রকটিত অপ্রকটলীলা অপ্রকৃত অপ্রকৃতিস্থ অপ্রকৃতিস্থতা অপ্রকৃতস্থ অপ্রক্রিয়াজাত অপ্রকৃষ্ট অপ্রখর অপ্রখরতা অপ্রাকৃত অপ্রাচীন অপ্রাচুর্য অপরাজিত অপরাজিতা অপরাজেয় অপরাজেয়তা অপ্রাণ অপ্রাণী অপ্রাতিষ্ঠানিক অপ্রাথমিক অপরাধ অপরাধকাহিনী অপরাধিনী অপরাধী অপরাধীন অপরাধজনক অপরাধবিজ্ঞানী অপরাধস্বীকার অপরাধহীন অপরাধহীনতা অপ্রাপ্য অপ্রাপ্যতা অপ্রাপ্ত অপ্রাপ্তি অপ্রাপ্তযৌবন অপ্রাপ্তযৌবনা অপ্রাপ্তবয়স অপ্রাপ্তবয়স্ক অপ্রাপ্তবয়স্কা অপরাপর অপরাবিদ্যা অপ্রামাণিক অপ্রামাণিকতা অপ্রামাণ্য অপ্রার্থিত অপরাশক্তি অপ্রাসঙ্গিক অপ্রাসঙ্গিকতা অপরাহ্ণ অপরাহ্ণকালীন অপরাহ্ণসম্বন্ধীয় অপরাহত অপরিকল্পিত অপরিগ্রহ অপরিচিত অপরিচিতা অপরিচিতি অপরিচ্ছন্ন অপরিচ্ছন্নতা অপরিচয় অপরিজ্ঞাত অপরিজ্ঞেয় অপরিণামদর্শিতা অপরিণামদর্শী অপরিণত অপরিণতবুদ্ধি অপরিণতবয়স অপরিত্যাজ্য অপরিতুষ্ট অপরিপক্ব অপরিপক্বতা অপরিপাটি অপরিপূর্ণ অপরিপূর্ণতা অপরিবাহিতা অপরিবাহী অপরিবর্তিত অপরিবর্তিতভাবে অপরিবর্তন অপরিবর্তনীয় অপরিবর্তনীয়তা অপরিবর্তনশীল অপরিমাণ অপরিমার্জিত অপরিমিত অপরিমেয় অপরিশোধ অপরিশোধিত অপরিশোধ্য অপরিশোধনীয় অপরিশুদ্ধ অপরিষ্কার অপরিষ্কৃত অপরিসীম অপরিস্ফুট অপরিসর অপরিস্রুত অপরিহার্য অপ্রিয় অপ্রিয়কারী অপ্রিয়কর অপ্রিয়বাদিনী অপ্রিয়বাদী অপ্রিয়ভাষিণী অপ্রিয়ভাষী অপরীক্ষিত অপ্রচার অপ্রচারিত অপ্রীতি অপ্রীতিকর অপ্রীতিজনক অপ্রীতিভাজন অপরচুনিটি অপ্রচুর অপ্রচলিত অপ্রচলন অপ্রেম অপ্রেমিক অপরোক্ষ অপরোক্ষতা অপরজন অপ্রযুক্ত অপ্রযুক্ততা অপর্যাপ্ত অপর্যাপ্ততা অপর্যাবৃত্ত অপর্যায়ক্রমিক অপ্রযোজ্য অপূরণ অপূর্ণ অপর্ণা অপূর্ণা অপূর্ণাঙ্গ অপূর্ণাঙ্গতা অপূরণীয় অপূর্ণতা অপ্রণয় অপ্রণয়ী অপ্রতিকার অপ্রতিকার্য অপ্রতিদ্বন্দ্বী অপ্রতিপন্ন অপ্রতিবিধান অপ্রতিবিধেয় অপ্রতিবিহিত অপ্রতিবন্ধ অপ্রতিবন্ধক অপ্রতিভ অপ্রতিরোধ্য অপ্রতিষ্ঠ অপ্রতিষ্ঠা অপ্রতিষ্ঠিত অপ্রতিসাম্য অপ্রতিস্থাপন অপ্রতিসম অপ্রতিহত অপ্রতিহতভাবে অপ্রত্যংশমূলক অপ্রত্যক্ষ অপ্রত্যাখ্যাত অপ্রত্যাখ্যান অপ্রত্যাগামী অপ্রত্যাশা অপ্রত্যাশিত অপ্রত্যাশিতভাবে অপ্রত্যয় অপ্রত্যয়ী অপ্রতুল অপ্রতুলতা অপ্রদান অপরদিক অপ্রদীপ অপ্রধান অপরূপ অপরপক্ষ অপরূপা অপূর্ব অপ্রবাস অপ্রবাসী অপ্রবীণ অপূর্বতা অপ্রবৃত্তি অপূর্বদৃষ্ট অপূর্বদৃষ্টি অপ্রবল অপ্রবলতা অপরভাব অপ্রমাণ অপ্রমাণিত অপ্রমাদ অপ্রমেয় অপ্রমত্ত অপররূপে অপ্রশংসা অপ্রশংসিত অপ্রশংসনীয় অপ্রশিক্ষিত অপ্রশমিত অপ্রশস্ত অপ্রশস্তকাল অপ্রশস্ততা অপুরুষ অপ্রসিদ্ধ অপ্রসিদ্ধি অপ্রস্তুত অপ্রস্তুতি অপ্রসন্ন অপ্রসন্নতা অপ্রয়াস অপ্রয়োগ অপ্রয়োজন অপ্রয়োজনীয় অপ্রয়োজনীয়তা অপলক অপলকা অপলাপ অপশাসন অপশিক্ষা অপশন অপশনাল অপশব্দ অপশ্রুতি অপুষ্ট অপুষ্টি অপুষ্পক অপসংস্কৃতি অপসারক অপসারিত অপসারণ অপসারণকারী অপসারণজনিত অপসিদ্ধান্ত অপসৃত অপ্সরা অপস্রিয়মাণ অপ্সরী অপসরণ অপসরণকারী অপহারক অপহারী অপহত অপহৃত অপহরণ অপহরণকারী অপয়া অফ অফকোর্স অফার অফিশিয়াল অফিশিয়ালি অফিস অফিসকক্ষ অফিসঘেরাও অফিসার অফিসারমাস্টার অফিসারস অফিসারসার্জেন্ট অফিসিয়াল অফিসিয়ালি অফিসিয়ালভাবে অফিসেরছুটি অফিসবন্ধ অফুটন্ত অফব্রেক অফর অফুরান অফুরন্ত অফল অফুল অফলা অফলাইন অফলদায়ক অফলন অফলপ্রসূ অফসেট অব অবকাঠামো অবকাঠামোগত অবকাশ অবকাশকেন্দ্র অবক্তা অবক্তব্য অবক্র অবকলন অবকলনযোগ্য অবকলনরূপে অবক্ষিত অবক্ষিপ্ত অবক্ষেপ অবক্ষেপণ অবক্ষয় অবগাহ অবগাহন অবগঠন অবগুণ অবগুণ্ঠিত অবগুণ্ঠিতা অবগুণ্ঠন অবগত অবগতি অবাক অবাকজলপান অবাঙ্গালি অবাঙ্গালী অবাঙালি অবাঙালী অবাচ্য অবাছাই অবাঞ্ছিত অবাঞ্ছনীয় অবাণিজ্যিক অবাধ অবাধ্য অবাধ্যতা অবাধবাণিজ্য অবাধলভ্য অবান্তর অবান্ধব অবামপন্থী অবারিত অবাসযোগ্য অবাস্তব অবাস্তবতা অবিকার অবিকারী অবিকার্য অবিকৃত অবিকৃতি অবিকৃতরূপে অবিক্রীত অবিক্রেয় অবিকল অবিকল্প অবিকল্পবোধক অবিকশিত অবিখ্যাত অবিঘ্ন অবিচক্ষণ অবিচার অবিচারক অবিচারকারী অবিচারী অবিচ্ছিন্ন অবিচ্ছিন্নতা অবিচ্ছিন্নভাবে অবিচ্ছেদ অবিচ্ছেদী অবিচ্ছেদ্য অবিচল অবিচলিত অবিচলতা অবিজ্ঞ অবিজ্ঞাত অবিজ্ঞেয় অবিজ্ঞতা অবিতর্কিত অবিদিত অবিদ্যা অবিদ্যমান অবিদ্যমানতা অবিদ্বান অবিধান অবিধি অবিধেয় অবিধেয়ক অবিনাশ অবিনাশী অবিনাশপুর অবিনিময়যোগ্য অবিনীত অবিনীতা অবিন্যাস অবিন্যস্ত অবিন্যস্ততা অবিনশ্বর অবিনয় অবিনয়ী অবিবাদ অবিবাহিত অবিবাহিতা অবিবেক অবিবেকী অবিবেচক অবিবেচনা অবিবেচনাপ্রসূত অবিভক্ত অবিভাজ্য অবিমিশ্র অবিরাম অবিরামভাবে অবিরোধ অবিরোধী অবিরত অবিরতি অবিরুদ্ধ অবিরল অবিরলভাবে অবিলম্ব অবিলম্বিত অবিশিষ্ট অবিশিষ্টতা অবিশেষ অবিশোধিত অবিশ্যি অবিশুদ্ধ অবিশ্বকোষীয় অবিশ্বাস অবিশ্বাসী অবিশ্বাসীবাদ অবিশ্বাস্য অবিশ্বাসসূচক অবিশ্বস্ত অবিশ্বস্ততা অবিশ্রান্ত অবিশ্রান্তভাবে অবিশ্রাম অবিশ্লেষিত অবিশ্লেষণীয় অবিষহ্য অবিষয় অবিসংবাদ অবিসংবাদিত অবিসংবাদিতভাবে অবিসংবাদিনী অবিসংবাদী অবিস্তীর্ণ অবিস্ফোরিত অবিস্মৃত অবিস্মরণীয় অবিহিত অবিহিতকাল অবিহ্বল অবচেতন অবচেতনা অবচেতনভাবে অবীজ অবীজপত্রী অবীর অবীরা অবেক্ষক অবেক্ষা অবেক্ষাধীন অবেক্ষিত অবেক্ষ্যমাণ অবেক্ষণ অবেক্ষণীয় অবেক্ষমাণ অবেক্ষমাণা অবেণীবদ্ধ অবেণীসংবদ্ধ অবেদ্য অবেদন অবেদনিক অবেদনীয় অবেদনবিজ্ঞান অবেলা অবেলায় অবৈজ্ঞানিক অবৈতনিক অবৈধ অবৈধতা অবৈধভাবে অবোদ্ধা অবোধ অবোধিনী অবোধ্য অবোল অবোলা অবজারভার অবজারভেটরি অবজেক্ট অবজেক্টিভ অবজেক্টিভিটি অবজ্ঞা অবজ্ঞাকারী অবজ্ঞাত অবজ্ঞার্থে অবজ্ঞাসূচক অবজ্ঞেয় অবুঝ অব্যক্ত অব্যগ্র অব্যগ্রতা অব্যাকুল অব্যাখ্যা অব্যাখ্যাত অব্যাপার অব্যাপ্ত অব্যাহত অব্যাহতি অব্যাহতিদান অব্যাহতরূপে অব্যতিক্রম অব্যতিক্রমী অব্যবধান অব্যবসায় অব্যবসায়ী অব্যবস্থা অব্যবস্থাপনা অব্যবস্থিত অব্যবহার অব্যবহার্য অব্যবহার্যতা অব্যবহিত অব্যবহিতপূর্ব অব্যবহৃত অব্যভিচার অব্যভিচারী অব্যর্থ অব্যয় অব্যয়ীভাব অব্যয়যুক্ত অবণ্টিত অবতার অবতারণ অবতারণা অবতারণী অবতাররূপে অবতীর্ণ অবতরণ অবতরণকারী অবতরণিকা অবতরণযান অবতল অব্দ অবদান অবদানকারী অবদানকৃত অবদ্ধ অবুদ্ধি অবুদ্ধিমান অবুদ্ধিমতী অবদ্ধতা অবদমিত অবদমন অবধান অবধারিত অবধারিতভাবে অবধার্য অবধারণ অবধারণা অবধারণার্থক অবধায়ক অবধি অব্ধি অবনি অবনিতল অবনিপতি অবনিবনা অবনিবনাও অবনিমণ্ডল অবনিয়োগ অবনী অবনীতল অবনীন্দ্র অবনীন্দ্রনাথ অবনীপতি অবনীমণ্ডল অবনীল অবনত অবনতকরণ অবনতা অবনতি অবন্তী অবনতমস্তক অবন্ধু অবন্ধ্য অবন্ধ্যা অবন্ধন অবন্ধুর অবন্ধুরতা অবনমিত অবনমন অবপাত অবপাতক অববাহিকা অববুদ্ধ অবমুক্ত অবমুক্তি অবমান অবমানকারী অবমানিত অবমাননা অবমাননাকর অবমোচন অবমত অবমতি অবমন্তা অবমর্দিত অবমর্দন অবমর্ষ অবমূল্যায়ন অব্রাহ্মণ অব্রাহ্মণ্য অবরে অবরেণ্য অবরোধ অবরোধক অবরোধকারী অবরোধকাল অবরোধপ্রথা অবরোধবাসিনী অবরোপণ অবরোহ অবরোহিক অবরোহী অবরোহণ অবরোহণকারী অবরোহণী অবর্জনীয় অবর্ণনীয় অব্রতী অবর্তমান অবর্তমানতা অবরুদ্ধ অবর্ধক অবর্ধিত অবল অবলঙ্গাটা অবলা অবলাজাতি অবলিপ্ত অবলী অবলীলা অবলীলাকৃত অবলীলাক্রমে অবলীঢ় অবলেপ অবলেপন অবলেহ অবলেহন অবলোকিত অবলোকন অবলোপ অবলোপন অবলোহিত অবলুণ্ঠিত অবলুণ্ঠিতা অবলুণ্ঠন অবলুপ্ত অবলুপ্তকরন অবলুপ্তগুলোর অবলুপ্তি অবলুপ্তিকরণ অবলম্ব অবলম্বিত অবলম্বী অবলম্বন অবলম্বনকারী অবলম্বনীয় অবলম্বনহীন অবশ অবশিষ্ট অবশিষ্টাংশ অবশিষ্টাঞ্চল অবশী অবশীভাব অবশীভূত অবশীভূতা অবশীভূততা অবশে অবশেষ অবশেষযুক্ত অবশেষরূপে অবশ্য অবশ্যকার্য অবশ্যকরণীয় অবশ্যকর্তব্য অবশ্যপাঠ্য অবশ্যপালনীয় অবশ্যপ্রয়োজনীয় অবশ্যম্ভাবিতা অবশ্যম্ভাবী অবশ্যম্ভব অবশতা অবসংযোগ অবস্কিওরড অবসাদ অবসাদগ্রস্ত অবসাদজনিত অবসাদহীন অবসান অবসানকাল অবসানকল্প অবসানপ্রাপ্ত অবসিত অবসঞ্চয় অবসৃত অবস্তু অবস্তুগত অবস্তুনির্বন্ধ অবস্থা অবস্থাগতিকে অবস্থাজ্ঞাপক অবস্থাযুক্ত অবস্থাদৃষ্টে অবস্থান অবস্থানকারী অবস্থানকালীন অবস্থানকালে অবস্থানগত অবস্থানঘটিত অবস্থানঘনত্ব অবস্থানান্তর অবস্থানচিত্র অবস্থানজনিত অবস্থানযুক্ত অবস্থানুযায়ী অবস্থান্তর অবস্থান্তরপ্রাপ্তি অবস্থান্তরশ্রেণী অবস্থাননির্দেশক অবস্থানবাচক অবস্থানভিত্তিক অবস্থানভেদে অবস্থানরত অবস্থানরূপে অবস্থানশীর্ষ অবস্থানস্থল অবস্থাপিত অবস্থাপন অবস্থাপন্ন অবস্থাপ্রাপ্ত অবস্থাপ্রাপ্তি অবস্থাপূর্ণ অবস্থাবাচক অবস্থাভেদ অবস্থাসংকট অবস্থাসঙ্কট অবস্থাস্তর অবস্থায়ত্ত অবস্থিত অবস্থিতা অবস্থিতি অবস্থিতচিত্ত অবসন্ন অবসন্নতা অবসর অবসরক্লাব অবসরগ্রহণ অবসরজীবন অবসরযুক্ত অবসরযাপন অবসরপ্রাপ্ত অবসরভাতা অবসরহীন অবহিত অবহিতি অবহেলা অবহেলাপূর্ণ অবহেলাভরে অবহেলিত অবহেলন অবহৃত অবয় অবয়ব অবয়বী অবয়বযুক্ত অবয়বপ্রাপ্ত অবয়বহীন অবয়বহীনতা অভক্ত অভুক্ত অভক্তি অভক্ষ্য অভক্ষণীয় অভগ্ন অভঙ্গ অভঙ্গুর অভাগা অভাগিনী অভাগী অভাগ্য অভাজন অভাব অভাবগ্রস্ত অভাবঘটিত অভাবাত্মক অভাবার্থক অভাবিত অভাবিতপূর্ব অভাবী অভাবজনিত অভাব্য অভাবনা অভাবনীয় অভাবপূরণ অভাবমোচন অভাবহেতু অভারতীয় অভাষিক অভিকেন্দ্র অভিকম্পন অভিক্রম অভিকর্ষ অভিকর্ষীয় অভিকর্ষজ অভিক্ষিপ্ত অভিক্ষেপ অভিক্ষেপী অভিক্ষেপণ অভিগামিনী অভিগামী অভিগত অভিগম অভিগমন অভিগ্রস্ত অভিগ্রহ অভিগ্রহণ অভিঘাত অভিঘাতিনী অভিঘাতী অভিঘাতজনিত অভিচার অভিচারক্রিয়া অভিচারিণী অভিচারী অভিজাত অভিজাততন্ত্র অভিজিত অভিজিৎ অভিজ্ঞ অভিজ্ঞা অভিজ্ঞাত অভিজ্ঞান অভিজ্ঞানপত্র অভিজ্ঞজন অভিজ্ঞতা অভিজ্ঞতাজনিত অভিজ্ঞতাপ্রসূত অভিজ্ঞতাবাদ অভিজ্ঞতাবাদী অভিজ্ঞতাভিত্তিক অভিজ্ঞতালব্ধ অভিজ্ঞতাসম্পন্ন অভিজন অভিযুক্ত অভিযাচিত অভিযাত্রা অভিযাত্রিক অভিযাত্রী অভিযান অভিযানকারী অভিযানভিত্তিক অভিযোক্তা অভিযোগ অভিযোগকারী অভিযোগ্য অভিযোগহীন অভিযোজিত অভিযোজ্য অভিযোজ্যতা অভিযোজন অভিতপ্ত অভিদান অভিধা অভিধাগত অভিধান অভিধানকার অভিধানগত অভিধানপ্রণেতা অভিধানবিজ্ঞান অভিধানসিদ্ধ অভিধেয় অভিধর্ম অভিনিবিষ্ট অভিনিবেশ অভিনিবেশযুক্ত অভিনিবেশপূর্ণ অভিনিবেশসহকারে অভিনির্দেশক অভিনীত অভিনেতা অভিনেতাসুলভ অভিনেত্রী অভিনেয় অভিন্ন অভিন্নতা অভিন্নত্ব অভিনন্দিত অভিনন্দন অভিনন্দনপত্র অভিন্নপরিবার অভিন্নভাবে অভিন্নহৃদয় অভিনব অভিনবত্ব অভিনয় অভিনয়কারী অভিনয়কৃত অভিনয়গৃহ অভিনয়োপযোগী অভিনয়জীবন অভিনয়যোগ্য অভিনয়প্রহসন অভিনয়বিদ্যা অভিনয়মঞ্চ অভিনয়শিল্পী অভিনয়সংক্রান্ত অভিপন্ন অভিপ্রকাশ অভিপ্রায় অভিপ্রায়ার্থক অভিপ্রায়যুক্ত অভিপ্রায়বোধ অভিপ্রেত অভিপ্রজনন অভিবাদক অভিবাদিকা অভিবাদ্য অভিবাদন অভিবাদনকারী অভিবাসী অভিবাসন অভিবাসনকারী অভিব্যক্ত অভিব্যক্তি অভিব্যক্তিবাদ অভিব্যপ্ত অভিব্যপ্তি অভিবন্দনা অভিভাবক অভিভাবকতা অভিভাবকত্ব অভিভাবকহীন অভিভাবিকা অভিভাবিতা অভিভাষণ অভিভূত অভিভূতি অভিভূততা অভিমুখ অভিমুখিতা অভিমুখিনী অভিমুখী অভিমান অভিমানকারী অভিমানিনী অভিমানী অভিমানজনিত অভিমান্য অভিমানশূন্য অভিমানহীন অভিমত অভিমন্যু অভিরুচি অভিরূপ অভিলাষ অভিলাষিণী অভিলাষিত অভিলাষী অভিশংসক অভিশংসন অভিশঙ্কা অভিশঙ্কিত অভিশঙ্কী অভিশাপ অভিশাপগ্রস্ত অভিশপ্ত অভিশ্রুতি অভিষিক্ত অভিষিক্তা অভিষিক্তজন অভিষেক অভিষেচন অভিষ্যন্দ অভিষ্যন্দী অভিসার অভিসারক অভিসারিক অভিসারিকা অভিসারিণী অভিসারী অভিসিঞ্চন অভিসন্তাপ অভিসন্দর্ভ অভিসন্ধান অভিসন্ধি অভিসম্পাত অভিসম্বন্ধমূলক অভিসরণ অভিস্রবণ অভিস্রবণিক অভিহিত অভিহিতার্থ অভীক্ষা অভীত অভীতি অভীপ্সু অভীপ্সা অভীপ্সিত অভীষ্ট অভীষ্টতম অভীষ্টপূরক অভীষ্টপূরণ অভীষ্টপূরণকারিণী অভীষ্টলাভ অভীষ্টসিদ্ধি অভেদ অভেদক অভেদকল্পনা অভেদাত্মা অভেদানন্দ অভেদী অভেদ্য অভেদনীয় অভেদমূর্তি অভোগ অভোগ্য অভোজ্য অভোজন অভ্যঙ্গ অভ্যাগত অভ্যাগম অভ্যাগমন অভ্যাস অভ্যাসকারী অভ্যাসিত অভ্যাসিনী অভ্যাসী অভ্যাসদ্বারা অভ্যাসবর্জন অভ্যাসবশত অভ্যাহার অভ্যাহৃত অভ্যঞ্জন অভ্যুত্থান অভ্যুত্থিত অভ্যুদাহরণ অভ্যুদিত অভ্যুদয় অভ্যন্তর অভ্যন্তরীণ অভ্যন্তরভাগ অভ্যন্তরস্থ অভ্যন্তরস্থান অভ্যর্থিত অভ্যর্থনা অভ্যর্থনাকারী অভ্যর্থনাসভা অভ্যর্থনাসমিতি অভ্যস্ত অভ্যস্ততা অভূত অভূতপূর্ব অভদ্র অভদ্রোচিত অভদ্রতা অভব্য অভব্যতা অভ্র অভ্রংলিহ অভ্রইজি অভ্রখনি অভ্রাতৃক অভ্রান্ত অভ্রান্তি অভ্রান্ততা অভ্রান্তলক্ষ্য অভ্রচ্ছায়া অভ্রধাতু অভ্রনীল অভ্রপুস্প অভ্রভেদী অভ্রম অভরসা অভূষিত অভূষিতা অভয় অভয়া অভয়ারণ্য অভয়দাতা অভয়দান অভয়নগর অভয়বাক্য অভয়বাণী অভয়বচন অভয়মুদ্রা অমুক অমুকচন্দ্র অমুক্ত অমুক্তি অমুখাপেক্ষী অমঙ্গল অমঙ্গলকর অমঙ্গলজনক অমঙ্গল্য অমঙ্গলশঙ্কী অমা অমাংসল অমাতৃক অমাত্য অমাত্যতন্ত্র অমানান অমানিশা অমানিশি অমানী অমান্য অমান্যতা অমাননা অমানব অমানবিক অমানুষ অমানুষিক অমানুষিকতা অমানুষী অমাবস্যা অমাবস্যাতিথি অমার্জিত অমারজনী অমার্জনীয় অমায়িক অমায়িকতা অমি অমিক্রন অমিত অমিতকুমার অমিতাচার অমিতাচারিতা অমিতাচারী অমিতাভ অমিততেজা অমিতবাক অমিতবিক্রম অমিতব্যয় অমিতব্যয়িতা অমিতব্যয়ী অমিতভাষী অমিত্র অমিত্রাক্ষর অমিত্রতা অমিতশক্তি অমিল অমিলহেতু অমিশুক অমিশ্র অমিশ্রিত অমিয় অমিয়া অমিয়াজিত অমীমাংসা অমীমাংসিত অমেধাবী অমেধ্য অমেরুদণ্ডী অমেয় অমোঘ অমোচনীয় অমুণ্ডিত অমত অমৃত অমৃতা অমতি অমৃতি অমৃতোপম অমৃতযোগ অমৃততুল্য অমৃতদ্বীপ অমৃতপান অমৃতপূর্ণ অমৃতফল অমৃতবাজার অমৃতবাদ অমৃতবারি অমৃতবল্লি অমৃতবৃষ্টি অমৃতভাষিণী অমৃতভাষী অমৃতমন্থন অমৃতরস অমৃতলাল অমৃতলোক অমৃতস্য অমৃতসর অমৃতহ্রদ অমন অমনই অমনগুণ অমনি অমনিবাস অমনো অমনোযোগ অমনোযোগিতা অমনোযোগী অমনোনীত অমনোনয়ন অমন্থর অমন্দ অমনধারা অমনভাবে অমনুষ্য অমনুষ্যত্ব অম্বু অম্বা অম্বালিকা অম্বিকা অম্বিকাচরণ অম্বিকানাথ অম্বিকাপতি অম্বিকাপুর অম্বিকারাগ অম্বুজ অম্বুজা অম্বুদ অম্বুধি অম্বুনিধি অম্বুবাচি অম্বুবাচী অম্বুবাসী অম্বুবাহ অম্বুবাহী অম্বুবিম্ব অম্বুমুখ অম্বর অম্বরি অম্বুরি অম্বরচুম্বিত অম্বরবক্ষ অম্বল অমর অমরু অমরকান্ত অমরকোষ অমরকণ্টক অমরকণ্টকা অমরা অমরাত্মা অমরাবতী অমরালয় অমরেশ অমরেশ্বর অমর্যাদা অমর্যাদাকর অমূর্ত অমরতা অমর্ত্য অমর্ত্যভুবন অমর্ত্যলোক অমরত্ব অমরতরু অমরদেব অমরধাম অমরনাথ অমরপুর অমরলোক অমর্ষ অমর্ষিত অমর্ষী অমর্ষণ অমরসিংহ অমল অমূল অম্ল অমলক অমূলক অমূলকতা অম্লকষা অমলকৃষ্ণ অম্লগন্ধ অম্লগন্ধযুক্ত অমলা অম্লাক্ত অম্লাধিক্য অম্লান অম্লানকুসুম অম্লানবদন অম্লানমুখ অম্লাসক্ত অম্লায়ন অম্লিত অমলিন অম্লীকৃত অম্লীকরণ অম্লীয় অমলেট অমলেন্দু অম্লেয় অম্লোদ্গার অম্লজান অম্লজানজারিত অমূল্য অম্লযুক্ত অমূল্যকুমার অমূল্যচরণ অম্লযোগ অম্লতা অম্লত্ব অমূলদ অমলধবল অম্লধর্মী অম্লপিত্ত অম্লফল অম্লবৃষ্টি অম্লমিতি অম্লমৃত্তিকা অম্লমধুর অম্লরাজ অম্লরোগ অম্লরস অম্লরসাত্মক অম্লরসযুক্ত অম্লশূল অম্লস্বাদ অম্লস্বাদযুক্ত অমসৃণ অমসৃণতা অমুসলিম অমুসলমান অরওয়েল অর্ক অর্কিড অর্কেস্ট্রা অর্কপত্র অর্কপ্রভ অর্কফলা অরক্ষিত অরক্ষণীয় অরক্ষণীয়া অর্গাজম অর্গান অর্গানাইজেশন অর্গানবাদক অরগ্যান অর্গল অর্গলিত অর্গলহীন অর্ঘ অর্ঘ্য অরঘট্ট অর্ঘ্যপাত্র অরাজক অরাজকীয় অরাজকতা অরাজি অরাজনৈতিক অরাতি অরাতিদমন অরি অরিগন অরিজিন অরিজিনাল অরিত্র অরিন্দম অরিয়েন্টেশন অরিয়ন অর্চক অর্চা অরুচি অর্চি অরুচিকর অরচিত অর্চিত অর্চ্য অর্চন অর্চনা অর্চনীয় অরেঞ্জ অরৈখিক অরৈখিকতা অরোগ অরোগী অরোরা অর্জক অর্জিত অর্জিলাম অর্জন অর্জুন অর্জনকারী অর্জুনগাছ অর্জুনরূপে অর্জনসহ অর্জনসহায়ক অর্জয়িতা অর্ডার অর্ডারি অর্ডারস অর্ডিন্যান্স অরুণ অরুণা অরুণাচল অরুণাভ অরণি অরণিকাষ্ঠ অরুণিত অরুণিম অরুণিমা অরণী অরুণোদয় অরণ্য অরণ্যকাণ্ড অরণ্যানী অরণ্যচারী অরণ্যচর অরণ্যজাত অরণ্যদেবী অরণ্যবাস অরণ্যবাসী অরণ্যবেষ্টিত অরণ্যবহ্নি অরণ্যষষ্ঠী অরণ্যসংকুল অরুণধাপ অর্ণব অর্ণবযান অর্ণবতরি অর্ণবপোত অরুণরাগ অরুণরাগরঞ্জিত অরুণলেখা অরণসারথি অর্থ অর্থকৃচ্ছ্র অর্থকরী অর্থকষ্ট অর্থকড়ি অর্থাগম অর্থাৎ অর্থানুকূল অর্থানুকূল্যে অর্থান্তর অর্থান্তরিত অর্থান্তরন্যাস অর্থান্তর্ভুক্তি অর্থানুমান অর্থানুরূপ অর্থাপত্তি অর্থাবনতি অর্থাভাব অর্থার অর্থালংকার অর্থালঙ্কার অর্থায়িত অর্থায়ন অর্থায়নকৃত অর্থিত অর্থী অর্থোডক্স অর্থোদ্ঘাটন অর্থোদ্ভেদ অর্থোন্নতি অর্থোপার্জন অর্থযুক্ত অর্থযতি অর্থতত্ত্ব অর্থতত্ত্ববাদী অর্থদান অর্থদণ্ড অর্থনাশ অর্থনির্দেশনা অর্থনিয়োগ অর্থনীতি অর্থনীতিক অর্থনীতিবিদ অর্থনৈতিক অর্থনৈতিকচক্র অর্থনৈতিকভাবে অর্থপিপাসু অর্থপিশাচ অর্থপ্রকাশ অর্থপ্রকাশক অর্থপ্রকাশকারী অর্থপ্রাপ্তি অর্থপূর্ণ অর্থপ্রদ অর্থপ্রদান অর্থপর্ব অর্থপ্রসার অর্থপ্রসারণ অর্থপুস্তক অর্থবাচক অর্থবাদ অর্থবাদী অর্থবান অর্থবিজ্ঞান অর্থবিজ্ঞানী অর্থবিদ অর্থবিদ্যা অর্থবিনিয়োগ অর্থবিভ্রাট অর্থবিলয় অর্থবিশিষ্ট অর্থবোধ অর্থবোধক অর্থবোধিকা অর্থবোধনশক্তি অর্থবছর অর্থব্যবস্থা অর্থব্যয় অর্থবরাদ্দ অর্থবল অর্থবহ অর্থভাগ্য অর্থভাণ্ডার অর্থভিত্তিক অর্থভেদ অর্থমিতি অর্থমন্ত্রী অর্থমূল অর্থমূল্য অর্থময় অর্থরাশি অর্থলগ্নি অর্থলাভ অর্থলিপ্সু অর্থলিপ্সা অর্থলোভী অর্থলুব্ধ অর্থশালী অর্থশাস্ত্র অর্থশূন্য অর্থসংকোচ অর্থসংকোচন অর্থসংকট অর্থসংক্রান্ত অর্থসংক্রম অর্থসংগ্রহ অর্থসংবলিত অর্থসংশ্লিষ্ট অর্থসংস্থান অর্থসঙ্কট অর্থসাহায্য অর্থসূচক অর্থসঞ্চয় অর্থসম্বন্ধী অর্থসমস্যা অর্থসহ অর্থহানি অর্থহীন অর্ধ অর্ধঅবগুণ্ঠন অর্ধকৃত অর্ধকথিত অর্ধকথন অর্ধগোলকাকৃতি অর্ধগোলাকার অর্ধগ্রাস অর্ধাংশ অর্ধাংশকাল অর্ধাঙ্গ অর্ধাঙ্গিনী অর্ধাধিক অর্ধার্ধ অর্ধার্ধি অর্ধাশন অর্ধাসন অর্ধাহার অর্ধায়ু অর্ধায়ুকাল অর্ধচন্দ্র অর্ধচন্দ্রাকার অর্ধচন্দ্রাকৃতি অর্ধে অর্ধেক অর্ধেককাল অর্ধেন্দু অর্ধেন্দুকুমার অর্ধেন্দুমৌলি অর্ধেন্দুশেখর অর্ধোচ্চারিত অর্ধোদিত অর্ধোদয় অর্ধজীবিত অর্ধঝাঁপতাল অর্ধযতি অর্ধদগ্ধ অর্ধদিবস অর্ধনারীশ্বর অর্ধনারীশ্বরমূর্তি অর্ধনিখুঁত অর্ধনিমীলিত অর্ধনির্মিত অর্ধনমিত অর্ধনর অর্ধপাচিত অর্ধপথ অর্ধপ্রকাশিত অর্ধপরিবাহী অর্ধপরিস্ফুট অর্ধপূর্ণ অর্ধপ্রস্ফুটিত অর্ধপ্রহর অর্ধবঙ্গ অর্ধবিবৃত অর্ধব্যঞ্জনধ্বনি অর্ধবৃত্ত অর্ধবৃত্তাকার অর্ধবৃত্তস্থ অর্ধবয়স্ক অর্ধভাগ অর্ধমাত্রা অর্ধমাস অর্ধমৃত অর্ধরাত্র অর্ধরাত্রি অর্ধরতি অর্ধশত অর্ধশতক অর্ধশতাধিক অর্ধসংবৃত অর্ধসিংহরূপী অর্ধসৌর অর্ধসত্য অর্ধস্থায়ী অর্ধস্ফুট অর্ধস্বচ্ছ অর্ধস্বর অর্ধস্বরধ্বনি অর্ধসমাপ্ত অর্ধসহ অরুন্তুদ অরুন্ধতী অরন্ধন অরূপ অরূপা অর্পিত অর্পিতা অর্পণ অর্পণকারী অর্পণাচরণ অর্পণীয় অরূপরতন অর্পয়িতা অর্পয়িত্রী অর্বাচীন অর্বাচীনতা অরবিকুলারিস অরবিটার অরবিটাল অর্বিটাল অরবিন্দ অরবিন্দের অরবিন্দশ্রী অর্বুদ অর্বুদবিদ্যা অরলান্ডো অর্লান্ডো অর্লান্ডোতে অরলিন্স অর্শ অর্শা অর্শানো অর্শরোগ অরসিক অরসিকা অল অলংকার অলংকারিক অলংকারচন্দ্রিকা অলংকাররূপে অলংকারশাস্ত্র অলংকারহীন অলংকৃত অলংকৃতি অলংকরণ অলংকর্তা অলংকর্ত্রী অলওয়েজ অলক অলুক অলকা অলকানন্দা অলকমেঘ অলক্ষিত অলক্ষিতভাবে অলক্ষ্য অলক্ষণ অলক্ষণা অলক্ষুণে অলক্ষ্মী অলকসিঞ্চিত অলুকসমাস অলগ্ন অলঘু অলঙ্কার অলঙ্কারবহুল অলঙ্কারশাস্ত্র অলঙ্কৃত অলঙ্কৃতি অলঙ্করণ অলঙ্করণযুক্ত অলঙ্কর্তা অলঙ্কর্ত্রী অলঙ্ঘিত অলঙ্ঘ্য অলঙ্ঘন অলঙ্ঘনীয় অলাবু অলাভ অলাভজনক অলি অলিক অলিকুল অলিখিত অলিগলি অলিজিহ্বা অলিন্দ অলিন্দদ্বয় অলিভ অলিভওয়েল অলিভা অলিভার অলিভিন অলিভিয়া অলিভিয়েরা অলিভেইরা অলিম্পাস অলিম্পায়াডে অলিম্পিক অলিম্পিকগেমস অলিম্পিকা অলিম্পিকো অলিম্পিকস অলিম্পিকসে অলিম্পিয়াড অলিম্পিয়ান অলীক অলীকতা অলোক অলোকদৃষ্টি অলোকলোক অলোকসাধারণ অলোকসামান্য অলোকসামান্যা অলোকসুন্দর অলোকসুন্দরী অলোচনা অলৌকিক অলৌকিকতা অলৌকিকত্ব অলৌকিকভাবে অলজ্জ অলজ্জিত অল্টারনেট অল্টারনেটিং অলটারনেটিভ অল্টারনেটিভ অল্টারনেটিভস অল্টারনেটর অল্প অল্পকাল অল্পকালস্থায়ী অল্পকিছু অল্পক্ষণ অল্পাংশ অল্পাধিক অল্পাধিক্য অল্পার্থে অল্পাশয় অল্পাহার অল্পাহারী অল্পায়ু অল্পেঅল্পে অল্পজীবিতা অল্পজীবী অল্পজ্ঞ অল্পতা অল্পতাবোধক অল্পত্ব অল্পদিন অল্পদর্শী অলপ্পেয়ে অল্পপ্রাণ অল্পপরিমাণ অল্পপ্রচলিত অল্পবিদ্যা অল্পবিস্তর অল্পবুদ্ধি অল্পবুদ্ধিসম্পন্ন অল্পবয়স্ক অল্পবয়স্কা অল্পবয়সী অল্পভার অল্পভাষী অল্পমাত্রা অল্পমতি অল্পশিক্ষিত অল্পশিক্ষিতা অল্পসংখ্যক অল্পসিদ্ধ অল্পস্বল্প অল্পসমাস অল্পসময় অলব্ধ অলুব্ধ অলব্রাইট অলভ্য অলমাইটি অলম্যান অলম্বুষ অলরাইট অলরাউন্ডার অলরেডি অলস অলসগতি অলসতা অশক্য অশক্ত অশক্তি অশঙ্কিত অশঙ্কনীয় অশা অশান্ত অশান্তি অশান্তিজনক অশান্তিপূর্ণ অশালীন অশালীনতা অশাশ্বত অশাসিত অশাস্য অশাস্ত্র অশাস্ত্রীয় অশাসন অশাসনীয় অশিক্ষা অশিক্ষাপটু অশিক্ষিত অশিক্ষিতা অশিব অশিষ্ট অশিষ্টতা অশুচ অশুচি অশুচিতা অশীতি অশীতিতম অশীতিপর অশীল অশীলতা অশেষ অশেষবিধ অশোক অশোককানন অশোকচক্র অশোকতরু অশোকনগর অশোকবন অশোকলাট অশোকলিপি অশোকষষ্ঠী অশোকস্তম্ভ অশোচ্য অশোচনীয় অশোধিত অশোধন অশোভিত অশোভন অশোভনা অশোভনতা অশোভনভাবে অশৌচ অশৌচকাল অশৌচান্ত অশথ অশুদ্ধ অশুদ্ধি অশুদ্ধিপত্র অশুদ্ধিরূপ অশুদ্ধতা অশন অশনি অশনিনির্ঘাত অশনিপাত অশনিসংকেত অশনিসম্পাত অশূন্য অশনবসন অশ্ব অশ্বকোবিদ অশ্বখুর অশ্বখুরাকৃতি অশ্বগন্ধা অশ্বা অশ্বারোহী অশ্বারোহণ অশ্বারূঢ় অশ্বারূঢ়া অশ্বিনী অশ্বিনীকুমার অশ্বিনীকুমারদ্বয় অশ্বিনীসূত অশ্বেতাঙ্গ অশ্বজ অশ্বজাতীয় অশ্বযুগল অশ্বযান অশ্বডিম্ব অশ্বত্থ অশ্বত্থামা অশ্বত্ব অশ্বতর অশ্বতরী অশ্বপাল অশ্বপালন অশ্বপতি অশ্ববাহ অশ্ববাহিত অশ্ববৈদ্য অশ্বমুখী অশ্বমেধ অশ্বরক্ষক অশ্বরূপিনী অশ্বশক্তি অশ্বশালা অশ্বসাদী অশুভ অশুভংকর অশুভকামনা অশুভকাল অশুভকর অশুভচিহ্ন অশুভতিথি অশুভবিধ অশুভলক্ষণযুক্ত অশুভলক্ষণযুক্তা অশ্ম অশ্মীভূত অশ্মমণ্ডল অশ্মর অশ্মরী অশ্রু অশ্রুকণা অশ্রান্ত অশ্রান্তগতি অশ্রান্তি অশ্রাব্য অশ্রুচিহ্ন অশরীর অশরীরিণী অশরীরী অশ্রেয় অশ্রেয়স্কর অশ্রোতব্য অশ্রোত্রিয় অশ্রুজল অশ্রুঝরা অশরণ অশরণা অশ্রুত অশ্রুতপূর্ব অশ্রদ্ধ অশ্রদ্ধা অশ্রদ্ধাজনক অশ্রদ্ধেয় অশ্রুধার অশ্রুধারা অশ্রুনীর অশ্রুপাত অশ্রুপরিপ্লুত অশ্রুপূর্ণ অশ্রুপূর্ণতা অশ্রুপ্লাবিত অশ্রুবারি অশ্রুবিন্দু অশ্রুবিপ্লুত অশ্রুবিমোচন অশ্রুবিসর্জন অশ্রবণ অশ্রবণীয় অশ্রুবর্ষণ অশ্রুভারাক্রান্ত অশ্রুমুখী অশ্রুমোচন অশ্রুরোধ অশ্রুরুদ্ধ অশ্রুসিক্ত অশ্রুস্নাত অশ্রুহীন অশুল্ক অশ্লীল অশ্লীলতা অশ্লেষা অশুষ্ক অষ্ট অষ্টক অষ্টগ্রাম অষ্টাংশ অষ্টাংশিত অষ্টাংশমণ্ডলী অষ্টাঙ্গ অষ্টাঙ্গিক অষ্টাত্রিংশ অষ্টাত্রিংশত অষ্টাদশ অষ্টাদশী অষ্টাধিক অষ্টাধ্যায়ী অষ্টাপদ অষ্টাবক্র অষ্টাবিংশ অষ্টাবিংশতি অষ্টাবিংশতিতম অষ্টাশি অষ্টাশীতি অষ্টাশীতিতম অষ্টাহ অষ্টি অষ্টেপৃষ্ঠে অষ্টদিক অষ্টদিকপাল অষ্টধাতু অষ্টনাগ অষ্টনায়িকা অষ্টনিধি অষ্টনবতি অষ্টনবতিতম অষ্টনব্বই অষ্টপাদ অষ্টপঞ্চাশ অষ্টপঞ্চাশত্তম অষ্টপুত্রভব অষ্টপদ অষ্টপদী অষ্টপর অষ্টপ্রহর অষ্টবিধ অষ্টবিভূতি অষ্টবজ্র অষ্টবসু অষ্টভাগ অষ্টভুজ অষ্টভুজা অষ্টম অষ্টমঙ্গলা অষ্টমী অষ্টমত অষ্টমবার অষ্টমবর্ষীয়া অষ্টমূর্তি অষ্ট্রিয়া অষ্টরম্ভা অষ্টশক্তি অষ্টষষ্টি অষ্টষষ্টিতম অষ্টসিদ্ধি অষ্টসপ্ততি অষ্টসপ্ততিতম অষ্টহস্তী অসংকুচিত অসংকীর্ণ অসংকোচ অসংকোচনীয় অসংক্রামক অসংক্রমিত অসংখ্য অসংখ্যাত অসংখ্যায়িত অসংখ্যেয় অসংখ্যবার অসংগঠিত অসংগত অসংগতি অসংগতভাবে অসংযুক্ত অসংযোগ অসংযত অসংযতভাবে অসংযতরসনা অসংযম অসংযমী অসংবৃত অসংবৃতা অসংবদ্ধ অসংরক্ষিত অসংলগ্ন অসংলগ্নতা অসংশোধিত অসংশোধন অসংশোধনীয় অসংশ্লিষ্ট অসংশয় অসংশয়িত অসংস্কার অসংসক্ত অসংস্কৃত অসংস্কৃতবাক্য অসংসারী অসংস্থান অসংহত অসওয়াল্ড অসওয়াল্ডস অস্কার অস্কারপ্রাপ্ত অসকাল অসূক্ষ্ম অসূক্ষ্মদর্শিতা অসূক্ষ্মদর্শী অসুখ অসুখকর অসুখাবহ অসুখী অসখ্য অসুখদায়ক অসুখবিসুখ অস্খলিত অস্খলন অসঙ্কুচিত অসঙ্কোচ অসঙ্গ অসঙ্গত অসঙ্গতি অসঙ্গতিপূর্ণ অসাংবিধানিক অসাক্ষাত অসাক্ষাৎ অসাজন্ত অসাদৃশ্য অসাধ অসাধু অসাধারণ অসাধারণতা অসাধারণত্ব অসাধ্য অসাধ্যসাধন অসাধ্যসাধনকারী অসাধুতা অসাধুভাবে অসাফল্য অসাবধান অসাবধানতা অসামাজিক অসামান্য অসামান্যতা অসামাল অসামঞ্জস্য অসামঞ্জস্যতা অসামঞ্জস্যপূর্ণ অসাম্য অসাম্প্রদায়িক অসাম্প্রদায়িকতা অসামরিক অসামর্থ্য অসাময়িক অসাময়িকী অসার অসারতা অসারত্ব অসার্থক অসারল্য অসাড় অসাড়তা অসি অসিচালন অসিচালনা অসিচর্যা অসিচর্ম অসিযুদ্ধ অসিতা অসিতাঙ্গ অসিতাঙ্গী অসিতনয়ন অসিতনয়না অসিতবরণ অসিদ্ধ অসিদ্ধি অসিধারা অসিপত্র অসিশিক্ষা অসী অসচ্চরিত্র অসচ্চরিত্রা অসচ্চরিত্রতা অসচেতন অসচ্ছল অসচ্ছলতা অসীম অসীমতা অসীমতট অসীমতটীয় অসীমরকম অসীমসংখ্যক অসোয়াস্তি অসৌজন্য অসৌষ্ঠব অসৌহার্দ অসৌহৃদ্য অসজ্জিত অসজ্জন অসঞ্চিত অস্টিন অস্ট্রিয়া অস্ট্রিয়ান অস্ট্রীয় অস্ট্রেলিয়া অস্ট্রেলিয়ান অস্ট্রেলীয় অসৎ অস্তগামী অস্তগিরি অস্তগত অস্তগমন অস্তগমনোম্মুখ অস্তাচল অস্তাচলগামী অস্তায়মান অস্তিত্ব অস্তিত্বধারণ অস্তিত্ববাচক অস্তিত্ববাদ অস্তিত্ববাদী অস্তিত্বমাত্র অস্তিত্বশীল অস্তিত্বশীলতা অস্তিত্বহানি অস্তিত্বহীন অস্তিত্বহীনতা অস্তিনাস্তি অস্তিবাচক অস্তিবাদী অস্তিমান অসতী অসতীত্ব অস্তোদয় অস্তোন্মুখ অসত্য অসত্যতা অসত্যবাদী অস্ত্যর্থ অস্ত্যর্থক অসততা অসত্তা অসৎপথ অস্তব্যস্ত অস্তবৃত্ত অস্তমান অস্তমিত অস্তমন অস্তর অস্ত্র অসতর্ক অস্ত্রকোবিদ অসতর্কতা অসতর্কতাবশত অস্ত্রক্ষেপণ অস্ত্রক্ষত অস্ত্রগোলাবারুদ অস্ত্রগুরু অস্ত্রগ্রহণ অস্ত্রাগার অস্ত্রাঘাত অস্ত্রাহত অস্ত্রী অস্ত্রীক অস্ত্রচালনা অস্ত্রচিকিৎসক অস্ত্রচিকিৎসা অস্তরীভূত অস্ত্রোপচার অস্ত্রোপচারকারী অস্ত্রোপচারবিদ্যা অস্ত্রজীবী অস্ত্রযুদ্ধ অস্ত্রত্যাগ অস্ত্রদ্বারা অস্ত্রধারিণী অস্ত্রধারী অস্ত্রধারণ অস্ত্রনিবারণ অস্ত্রনির্মাণ অস্ত্রপাতি অস্ত্রপ্রয়োগ অস্ত্রবিদ অস্ত্রবল অস্ত্রবৃষ্টি অস্ত্রভাণ্ডার অস্ত্ররূপে অস্ত্রলেখা অস্ত্রশিক্ষা অস্ত্রশস্ত্র অস্ত্রসংবরণ অস্ত্রসজ্জিত অস্ত্রসস্ত্রসহ অস্ত্রহীন অসৎসংসর্গ অসৎসঙ্গ অস্থান অস্থাবর অস্থায়িতা অস্থায়িত্ব অস্থায়ী অস্থায়ীভাবে অস্থি অস্থিকোষ অস্থিকলা অস্থিকলাধাত্র অস্থিচূর্ণ অস্থিচর্মসার অস্থিযুক্ত অস্থিতি অস্থিতিশীল অস্থিতিশীলতা অস্থিতিস্থাপক অস্থিতিস্থাপকতা অস্থিদান অস্থিনির্মিত অস্থিবিজ্ঞান অস্থিবিদ্যা অস্থিভঙ্গ অস্থিমজ্জা অস্থির অস্থিরতা অস্থিরত্ব অস্থিরবুদ্ধি অস্থিরসংকল্প অস্থিরসঙ্কল্প অস্থিশল্যচিকিৎসা অস্থিসার অস্থিসদৃশ অস্থিসন্ধি অস্থিসন্ধিযুক্ত অস্থিহীন অস্থৈর্য অসদগ্রাহিতা অসদগ্রাহী অসদাচার অসদাচারী অসদাচরণ অসদুদ্দেশ্য অসদুপায় অসদুপদেশ অসদবিম্ব অসদ্ব্যবহার অসদবৃত্তি অসদ্বুদ্ধি অসদ্ভাব অসদৃশ অসদৃশতা অস্নাত অস্নাতক অস্নান অস্নিগ্ধ অস্নিগ্ধতা অস্নেহ অসন্তোষ অসন্তোষজনক অসন্তোষহেতু অসন্তুষ্ট অসন্তুষ্টি অসন্দিগ্ধ অসন্দিগ্ধচিত্ত অসুন্দর অসন্নিহিত অসপত্ন অস্পন্দ অস্পন্দিত অস্পন্দন অস্পর্শ অস্পর্শ্য অস্পর্শন অস্পর্শনীয় অস্পৃশ্য অস্পৃশ্যা অস্পৃশ্যতা অস্পষ্ট অস্পৃষ্ট অস্পষ্টতা অস্পষ্টভাবে অস্ফুট অস্ফুটবাক অস্ফুটভাবে অসফল অস্বগন্ধা অস্বাচ্ছন্দ্য অস্বাতন্ত্রিক অস্বাতন্ত্র্য অস্বাদু অস্বাদুতা অস্বাদন অস্বাভাবিক অস্বাভাবিকতা অস্বাভাবিকত্ব অস্বাভাবিকভাবে অস্বাভাবিকরকম অস্বামিক অস্বাস্থ্য অস্বাস্থ্যকর অসুবিধা অসুবিধাগ্রস্ত অসুবিধাজনক অসুবিধাদায়ক অসুবিধে অস্বীকার অস্বীকারকারী অস্বীকার্য অস্বীকৃত অস্বীকৃতি অস্বীকৃতিপূর্ণ অস্বচ্ছ অস্বচ্ছতা অস্বচ্ছন্দ অস্বচ্ছলতা অসবর্ণ অসবর্ণা অসবর্ণবিবাহ অস্বস্তি অস্বস্তিকর অস্বস্তিজনক অস্বস্তিদায়ক অস্বস্তিপূর্ণ অসভ্য অসভ্যতা অসম অসমকক্ষ অসমকক্ষতা অসমকালীন অসমক্ষ অসমগোত্রজ অসমাদৃত অসমাধান অসমাধানকৃত অসমান অসমানুপাত অসমাপিকা অসমাপিত অসমাপ্ত অসমাপ্তি অসমাপ্তিজ্ঞাপক অসমাপন অস্মার অস্মিতা অসমিয়াম অসমীকরণ অসমীক্ষা অসমীক্ষিত অসমীক্ষণ অসমীচীন অসমীচীনতা অসমীয়া অসমঞ্জ অসমঞ্জস অসমঞ্জস্য অসমতা অসমতটীয় অসমতল অসমতলীয় অসমৃদ্ধ অসমৃদ্ধি অসমদর্শিতা অসমদর্শী অসম্পৃক্ত অসম্পৃক্ততা অসমপক্ষতা অসম্পাদিত অসম্পাদন অসম্পন্ন অসম্পন্নতা অসম্পর্ক অসম্পর্কিত অসম্পর্কীয় অসম্পূর্ণ অসম্পূর্ণতা অসম্পূর্ণভাবে অসম্প্রসারণশীল অসম্বাধ অসম্বন্ধ অসমবর্গীয় অসমবয়স্ক অসমবয়সী অসম্ভাবিত অসম্ভাব্য অসম্ভাব্যতা অসম্ভাবনা অসম্ভাবনীয় অসম্ভূত অসম্ভব অসম্ভবতা অসম্ভবপ্রায় অসম্ভ্রান্ত অসম্ভ্রম অসমমাত্রা অসম্মান অসম্মানিত অসম্মানজনক অসম্মাননা অসম্মত অসম্মতি অসম্মতিসূচক অসমমূল অসমর্থ অসমর্থা অসমর্থিত অসমর্থিতভাবে অসমর্থতা অসমর্থন অসমর্পিত অসমষ্টিবাচক অসমসাহস অসমসাহসিক অসমসাহসিকা অসমসাহসী অসময় অসুর অসুরঘাতন অসুরী অসূর্যস্পশ্য অসূর্যস্পশ্যা অসুরতুল্য অসুরদলন অসুরদলনী অসুরবিনাশিনী অসরল অসরলতা অসুস্থ অসুস্থতা অসুস্থতাজনিত অসহ অসহায় অসহায়া অসহায়তা অসহায়ত্ব অসহায়ভাবে অসহ্য অসহযোগ অসহযোগিতা অসহযোগিতাপূর্ণ অসহযোগী অসহন অসহনীয় অসহনশীল অসহমান অসূয়ক অসূয়া অসূয়াযুক্ত অসূয়াপর অসূয়াপরবশ অহং অহংকার অহংকারী অহংকারপূর্ণ অহংকারশূন্য অহংকৃত অহংবাদী অহংবোধ অহংবুদ্ধি অহঙ্কৃত অহি অহিংস অহিংসক অহিংসা অহিংসামন্ত্র অহিংস্র অহিত অহিতকামী অহিতকারী অহিতকর অহিতাচার অহিতাচরণ অহিনকুল অহিন্দু অহেতুক অহেতুকী অহো অহোরাত্র অহোরাত্রযুক্ত অহ্ন অহমিকা অহমীয়া অহর্নিশ অহর্নিশি অহরহ অহল্যা অহল্যাবাই অহৃষ্ট অড়বড়ই অড়র অড়হর অয়েল অয়েলক্লথ অয়েলিং অয়েলপেইন্টিং অয়েলপেপার অয়োমুখ অয়োময় অয়্যার অয়ন অয়নাংশ অয়নান্ত অয়নান্তরেখা অয়নচলন অয়নবৃত্ত অয়নমণ্ডল অয়লার".split(" "),
              w_aa: "আ আংটা আংটাওয়ালা আংটাহীন আংটি আংরা আংরাখা আংশিক আংশিকভাবে আঃ আই আইকন আইচ আইজ আইজাক আইজ্যাক আইটি আইটিউন আইটিউন্স আইটেম আইডি আইডিই আইডিয়া আইডিয়াল আইডিয়াস আইডেন্টিটি আইডেন্টিফায়ার আইঢাই আইন আইনঅনুষদ আইনকানুন আইনগত আইনগ্রাহ্য আইনানুগ আইনানুযায়ী আইনানুসারে আইনি আইনজারি আইনজীবী আইনজ্ঞ আইনত আইননুসারে আইনপ্রণয়ন আইনবিদ আইনবিভাগ আইনব্যবসায়ী আইনবল আইনমাফিক আইনমোতাবেক আইনমন্ত্রী আইনলঙ্ঘন আইনশৃঙ্খলা আইনশৃঙ্খলাভঙ্গকারী আইনশাস্ত্র আইনশিক্ষা আইনসংকলন আইনসংগত আইনসিদ্ধ আইনস্টাইন আইনসভা আইনসম্মত আইপড আইফেল আইবেরীয় আইবুড়ো আইভান আইভানহো আইভার আইভি আইভরি আইভরিকোষ্ট আইভরিকোস্ট আইরিন আইরিশ আইল আইলাম আইলে আইলেট আইল্যান্ড আইল্যান্ডস আঁইশ আইসক্রিম আইসা আইসাছে আইসিসি আইসোটোপ আইসোট্রপি আইসোট্রপিক আইসোট্রপীয় আইসোপট্রপি আইসোপট্রপীয় আইসোমারেজ আইসোলিউসিন আইসোলেটেড আইসোসায়ানেট আইসবার্গ আইসল্যান্ড আইসল্যান্ডিক আইসল্যান্ডীয় আইসল্যান্ডীয়রা আইয়ুব আউ আউট আউটডোর আউটপোস্ট আউটপুট আউটফিল্ড আউটলুক আউটলাইন আউটসাইডার আউটসোর্সিং আউটস্ট্যান্ডিং আউন্স আউরে আউরেছ আউরেছি আউরেছিল আউরেছিলাম আউরেছিলি আউরেছিলে আউরেছিলেন আউরেছিলেম আউরেছিলুম আউরেছিস আউরেছে আউরেছেন আউরত আউরৎ আউল আউলা আউলানো আউলিয়া আউলচাঁদ আউশ আউশধান আউড় আউড়ে আউড়েছ আউড়েছি আউড়েছিল আউড়েছিলাম আউড়েছিলি আউড়েছিলে আউড়েছিলেন আউড়েছিলেম আউড়েছিলুম আউড়েছিস আউড়েছে আউড়েছেন আউড়ো আউড়ত আওটাইতাম আওটাইতিস আওটাইতে আওটাইতেছ আওটাইতেছি আওটাইতেছিল আওটাইতেছিলাম আওটাইতেছিলি আওটাইতেছিলে আওটাইতেছিলেন আওটাইতেছিস আওটাইতেছে আওটাইতেছেন আওটাইতেন আওটাইব আওটাইবার আওটাইবি আওটাইবে আওটাইবেন আওটাইল আওটাইলাম আওটাইলি আওটাইলে আওটাইলেন আওটাইয়া আওটাইয়াছ আওটাইয়াছি আওটাইয়াছিল আওটাইয়াছিলাম আওটাইয়াছিলি আওটাইয়াছিলে আওটাইয়াছিলেন আওটাইয়াছিস আওটাইয়াছে আওটাইয়াছেন আওটাইয়ো আওটাও আওটাক আওটাচ্ছ আওটাচ্ছি আওটাচ্ছিল আওটাচ্ছিলাম আওটাচ্ছিলি আওটাচ্ছিলে আওটাচ্ছিলেন আওটাচ্ছিলেম আওটাচ্ছিলুম আওটাচ্ছিস আওটাচ্ছে আওটাচ্ছেন আওটাত আওটাতাম আওটাতিস আওটাতে আওটাতেন আওটাতেম আওটাতুম আওটান আওটানো আওটাব আওটাবার আওটাবি আওটাবে আওটাবেন আওটাবো আওটাল আওটালাম আওটালি আওটালে আওটালেন আওটালেম আওটালুম আওটাস আওটায় আওতা আওতাধীন আওতাবহির্ভূত আওতাভুক্ত আওরঙ্গাবাদ আওরঙ্গজেব আওরঙ্গবাদ আওরা আওরাই আওরাইও আওরাইত আওরাইতাম আওরাইতিস আওরাইতে আওরাইতেছ আওরাইতেছি আওরাইতেছিল আওরাইতেছিলাম আওরাইতেছিলি আওরাইতেছিলে আওরাইতেছিলেন আওরাইতেছিস আওরাইতেছে আওরাইতেছেন আওরাইতেন আওরাইব আওরাইবার আওরাইবি আওরাইবে আওরাইবেন আওরাইল আওরাইলাম আওরাইলি আওরাইলে আওরাইলেন আওরাইয়া আওরাইয়াছ আওরাইয়াছি আওরাইয়াছিল আওরাইয়াছিলাম আওরাইয়াছিলি আওরাইয়াছিলে আওরাইয়াছিলেন আওরাইয়াছিস আওরাইয়াছে আওরাইয়াছেন আওরাইয়ো আওরাও আওরাক আওরাচ্ছ আওরাচ্ছি আওরাচ্ছিল আওরাচ্ছিলাম আওরাচ্ছিলি আওরাচ্ছিলে আওরাচ্ছিলেন আওরাচ্ছিলেম আওরাচ্ছিলুম আওরাচ্ছিস আওরাচ্ছে আওরাচ্ছেন আওরাত আওরাতাম আওরাতিস আওরাতে আওরাতেন আওরাতেম আওরাতুম আওরান আওরানো আওরাব আওরাবার আওরাবি আওরাবে আওরাবেন আওরাবো আওরাল আওরালাম আওরালি আওরালে আওরালেন আওরালেম আওরালুম আওরাস আওরায় আওরৎ আওলাত আওলাদ আওড় আওড়া আওড়াই আওড়াইও আওড়াইত আওড়াইতাম আওড়াইতিস আওড়াইতে আওড়াইতেছ আওড়াইতেছি আওড়াইতেছিল আওড়াইতেছিলাম আওড়াইতেছিলি আওড়াইতেছিলে আওড়াইতেছিলেন আওড়াইতেছিস আওড়াইতেছে আওড়াইতেছেন আওড়াইতেন আওড়াইব আওড়াইবার আওড়াইবি আওড়াইবে আওড়াইবেন আওড়াইল আওড়াইলাম আওড়াইলি আওড়াইলে আওড়াইলেন আওড়াইয়া আওড়াইয়াছ আওড়াইয়াছি আওড়াইয়াছিল আওড়াইয়াছিলাম আওড়াইয়াছিলি আওড়াইয়াছিলে আওড়াইয়াছিলেন আওড়াইয়াছিস আওড়াইয়াছে আওড়াইয়াছেন আওড়াইয়ো আওড়াও আওড়াক আওড়াচ্ছ আওড়াচ্ছি আওড়াচ্ছিল আওড়াচ্ছিলাম আওড়াচ্ছিলি আওড়াচ্ছিলে আওড়াচ্ছিলেন আওড়াচ্ছিলেম আওড়াচ্ছিলুম আওড়াচ্ছিস আওড়াচ্ছে আওড়াচ্ছেন আওড়াত আওড়াতাম আওড়াতিস আওড়াতে আওড়াতেন আওড়াতেম আওড়াতুম আওড়ান আওড়ানো আওড়াব আওড়াবার আওড়াবি আওড়াবে আওড়াবেন আওড়াবো আওড়াল আওড়ালাম আওড়ালি আওড়ালে আওড়ালেন আওড়ালেম আওড়ালুম আওড়াস আওড়ায় আওয়াজ আওয়াজি আওয়াজযুক্ত আওয়াজপূর্ণ আওয়াজসহ আওয়াজহীন আওয়াদ আওয়াম আওয়ামী আওয়ামীপন্থী আওয়ামীলীগ আঁক আঁকুক আক্কেল আক্কেলগুড়ুম আক্কেলযুক্ত আক্কেলদাঁত আক্কেলপুর আক্কেলমন্ত আক্কেলমন্দ আক্কেলসেলামি আককুটে আকখুটে আকা আঁকা আঁকাই আঁকাইও আঁকাইত আঁকাইতাম আঁকাইতিস আঁকাইতে আঁকাইতেছ আঁকাইতেছি আঁকাইতেছিল আঁকাইতেছিলাম আঁকাইতেছিলি আঁকাইতেছিলে আঁকাইতেছিলেন আঁকাইতেছিস আঁকাইতেছে আঁকাইতেছেন আঁকাইতেন আঁকাইব আঁকাইবার আঁকাইবি আঁকাইবে আঁকাইবেন আঁকাইল আঁকাইলাম আঁকাইলি আঁকাইলে আঁকাইলেন আঁকাইয়া আঁকাইয়াছ আঁকাইয়াছি আঁকাইয়াছিল আঁকাইয়াছিলাম আঁকাইয়াছিলি আঁকাইয়াছিলে আঁকাইয়াছিলেন আঁকাইয়াছিস আঁকাইয়াছে আঁকাইয়াছেন আঁকাইয়ো আঁকাও আঁকাক আকাঙ্ক্ষা আকাঙ্ক্ষাপূরণ আকাঙ্ক্ষাশূন্য আকাঙ্ক্ষাহীন আকাঙ্ক্ষাহীনতা আকাঙ্ক্ষিণী আকাঙ্ক্ষিত আকাঙ্ক্ষী আকাঙ্ক্ষীয় আঁকাচ্ছ আঁকাচ্ছি আঁকাচ্ছিল আঁকাচ্ছিলাম আঁকাচ্ছিলি আঁকাচ্ছিলে আঁকাচ্ছিলেন আঁকাচ্ছিলেম আঁকাচ্ছিলুম আঁকাচ্ছিস আঁকাচ্ছে আঁকাচ্ছেন আঁকাজোকা আঁকাজোখা আকাটা আকাঠ আকাঠা আঁকাত আঁকাতাম আঁকাতিস আঁকাতে আঁকাতেন আঁকাতেম আঁকাতুম আকাদেমি আঁকান আঁকানো আঁকাব আঁকাবাঁকা আঁকাবার আঁকাবি আঁকাবে আঁকাবেন আঁকাবো আকাম আকার আঁকার আকারইঙ্গিত আকারযুক্ত আকারপ্রকার আকারমাত্রিক আকারহীন আকাল আঁকাল আঁকালাম আঁকালি আকালিক আকালী আঁকালে আঁকালেন আঁকালেম আঁকালুম আকাশ আকাশকক্ষ আকাশকুসুম আকাশগঙ্গা আকাশগামী আকাশী আকাশচারিণী আকাশচারী আকাশচুম্বী আকাশীরং আকাশছোঁয়া আকাশছুঁয়া আকাশজাত আকাশযান আকাশদীপ আকাশদেবতা আকাশদেশ আকাশপাতাল আকাশপট আকাশপথ আকাশপ্রান্ত আকাশপ্রদীপ আকাশপ্রমাণ আকাশবাণী আকাশভ্রমণ আকাশমার্গ আকাশমণি আকাশমণ্ডল আকাশরূপ আকাশস্থ আকাশস্থান আকাশস্পর্শী আঁকাস আকাঁড়া আঁকি আঁকিও আকিকা আকিঞ্চন আঁকিত আঁকিতাম আঁকিতিস আঁকিতে আঁকিতেছ আঁকিতেছি আঁকিতেছিল আঁকিতেছিলাম আঁকিতেছিলি আঁকিতেছিলে আঁকিতেছিলেন আঁকিতেছিস আঁকিতেছে আঁকিতেছেন আকিতেন আঁকিতেন আঁকিব আঁকিবুঁকি আঁকিবার আঁকিবি আঁকিবে আঁকিবেন আঁকিল আঁকিলাম আঁকিলি আঁকিলে আঁকিলেন আঁকিস আঁকিয়া আঁকিয়াছ আঁকিয়াছি আঁকিয়াছিল আঁকিয়াছিলাম আঁকিয়াছিলি আঁকিয়াছিলে আঁকিয়াছিলেন আঁকিয়াছিস আঁকিয়াছে আঁকিয়াছেন আঁকিয়ে আঁকিয়েছ আঁকিয়েছি আঁকিয়েছিল আঁকিয়েছিলাম আঁকিয়েছিলি আঁকিয়েছিলে আঁকিয়েছিলেন আঁকিয়েছিলেম আঁকিয়েছিলুম আঁকিয়েছিস আঁকিয়েছে আঁকিয়েছেন আঁকিয়ো আকচাআকচি আকচার আকীর্ণ আঁকে আঁকেন আঁকছ আকছার আঁকছি আঁকছিল আঁকছিলাম আঁকছিলি আঁকছিলে আঁকছিলেন আঁকছিলেম আঁকছিলুম আঁকছিস আঁকছে আঁকছেন আকুঞ্চিত আকুঞ্চন আকট আকণ্ঠ আকণ্ঠমগ্ন আকূত আঁকত আঁকতাম আকতার আক্তার আকুতি আকৃতি আকৃতিগত আকৃতিযুক্ত আকৃতিপ্রকৃতি আঁকতিস আকৃতিসদৃশ আঁকতে আঁকতেন আঁকতেম আঁকতুম আক্দ আঁকন আঁকুন আকন্দ আকুপাংচার আকুপাকু আঁকুপাঁকু আঁকব আঁকবার আঁকবি আঁকবে আঁকবেন আঁকবো আকবর আকবরি আকবরনগর আকম্প আকম্পিত আকম্পন আকম্পমান আকর আকরগ্রন্থ আক্রা আক্রান্ত আকরাম আকরামুজ্জামান আকরিক আকরীয় আক্রোশ আকর্ণ আকর্ণিত আকর্ণন আকর্ণনয়ন আকর্ণবিস্তৃত আক্রমণ আক্রমণকারী আক্রমণাত্মক আক্রমণীয় আক্রমণোদ্যত আক্রমণযোগ্য আক্রমণপূর্বক আক্রমণভাগ আক্রমণহীনতা আকর্ষ আকর্ষক আকর্ষিক আকর্ষিণী আকর্ষিত আকর্ষী আকর্ষণ আকর্ষণকারী আকর্ষণী আকর্ষণীয় আকর্ষণীয়ভাবে আকর্ষণযুক্ত আকর্ষণবোধ আকর্ষণশক্তি আকর্ষণশূন্য আকর্ষণসহ আকর্ষণহীন আকর্ষণহেতু আকুল আকলগড় আকুলা আঁকলাম আকুলি আঁকলি আকুলিত আকুলিবিকুলি আকুলিভূত আকুলীকৃত আঁকলে আঁকলেন আঁকলেম আকুলতা আকুলভাবে আঁকলুম আঁকশা আঁকশি আঁকুশি আঁকশলি আক্ষেপ আক্ষেপকারী আক্ষেপযুক্ত আক্ষেপসূচক আকৃষ্ট আক্ষরিক আক্ষরিকতা আকসার আকস্মিক আকস্মিকতা আকস্মিকতাবোধ আকস্মিকভাবে আঁকড়া আঁকড়াআঁকড়ি আঁকড়াই আঁকড়াইও আঁকড়াইত আঁকড়াইতাম আঁকড়াইতিস আঁকড়াইতে আঁকড়াইতেছ আঁকড়াইতেছি আঁকড়াইতেছিল আঁকড়াইতেছিলাম আঁকড়াইতেছিলি আঁকড়াইতেছিলে আঁকড়াইতেছিলেন আঁকড়াইতেছিস আঁকড়াইতেছে আঁকড়াইতেছেন আঁকড়াইতেন আঁকড়াইব আঁকড়াইবার আঁকড়াইবি আঁকড়াইবে আঁকড়াইবেন আঁকড়াইল আঁকড়াইলাম আঁকড়াইলি আঁকড়াইলে আঁকড়াইলেন আঁকড়াইয়া আঁকড়াইয়াছ আঁকড়াইয়াছি আঁকড়াইয়াছিল আঁকড়াইয়াছিলাম আঁকড়াইয়াছিলি আঁকড়াইয়াছিলে আঁকড়াইয়াছিলেন আঁকড়াইয়াছিস আঁকড়াইয়াছে আঁকড়াইয়াছেন আঁকড়াইয়ো আঁকড়াও আঁকড়াক আঁকড়াচ্ছ আঁকড়াচ্ছি আঁকড়াচ্ছিল আঁকড়াচ্ছিলাম আঁকড়াচ্ছিলি আঁকড়াচ্ছিলে আঁকড়াচ্ছিলেন আঁকড়াচ্ছিলেম আঁকড়াচ্ছিলুম আঁকড়াচ্ছিস আঁকড়াচ্ছে আঁকড়াচ্ছেন আঁকড়াত আঁকড়াতাম আঁকড়াতিস আঁকড়াতে আঁকড়াতেন আঁকড়াতেম আঁকড়াতুম আঁকড়ান আঁকড়ানো আঁকড়াব আঁকড়াবার আঁকড়াবি আঁকড়াবে আঁকড়াবেন আঁকড়াবো আঁকড়াল আঁকড়ালাম আঁকড়ালি আঁকড়ালে আঁকড়ালেন আঁকড়ালেম আঁকড়ালুম আঁকড়াস আঁকড়ায় আঁকড়ি আঁকড়ে আঁকড়েছ আঁকড়েছি আঁকড়েছিল আঁকড়েছিলাম আঁকড়েছিলি আঁকড়েছিলে আঁকড়েছিলেন আঁকড়েছিলেম আঁকড়েছিলুম আঁকড়েছিস আঁকড়েছে আঁকড়েছেন আঁকড়ো আখ আঁখ আখা আখাউড়া আখাম্বা আঁখি আঁখিকোণ আঁখিজল আঁখিঠার আঁখিদুটি আঁখিপাত আঁখিপাতা আখির আখিরাত আখের আখেরি আখোলা আখুঞ্জি আখ্যা আখ্যাযুক্ত আখ্যাত আখ্যান আখ্যানশৈলী আখ্যাপন আখ্যায়ক আখ্যায়িকা আখ্যায়িত আখ্যায়ী আখটি আখুটি আখুটিয়া আখুটে আখ্যেয় আখণ্ডল আখণ্ডলধনু আখতা আখতার আখতারুজ্জামান আখন্দ আখমাড়াই আঁখর আখরোট আখড়া আখড়াই আখড়াধারী আগ আগু আগা আগাই আগাইও আগাইত আগাইতাম আগাইতিস আগাইতে আগাইতেছ আগাইতেছি আগাইতেছিল আগাইতেছিলাম আগাইতেছিলি আগাইতেছিলে আগাইতেছিলেন আগাইতেছিস আগাইতেছে আগাইতেছেন আগাইতেন আগাইব আগাইবার আগাইবি আগাইবে আগাইবেন আগাইল আগাইলাম আগাইলি আগাইলে আগাইলেন আগাইয়া আগাইয়াছ আগাইয়াছি আগাইয়াছিল আগাইয়াছিলাম আগাইয়াছিলি আগাইয়াছিলে আগাইয়াছিলেন আগাইয়াছিস আগাইয়াছে আগাইয়াছেন আগাইয়ো আগাও আগাক আগাগোড়া আগাগলুই আগাচ্ছ আগাচ্ছি আগাচ্ছিল আগাচ্ছিলাম আগাচ্ছিলি আগাচ্ছিলে আগাচ্ছিলেন আগাচ্ছিলেম আগাচ্ছিলুম আগাচ্ছিস আগাচ্ছে আগাচ্ছেন আগাছা আগাত আগাতাম আগাতিস আগাতে আগাতেন আগাতেম আগাতুম আগাথা আগান আগানা আগানো আগাপাছতলা আগাব আগাবার আগাবি আগাবিশিষ্ট আগাবে আগাবেন আগাবো আগাম আগামী আগামীকাল আগার আগালাম আগালি আগালে আগালেই আগালেন আগালেম আগালুম আগাস আগায়া আগি আগিও আগিলা আগিয়ে আগিয়েছ আগিয়েছি আগিয়েছিল আগিয়েছিলাম আগিয়েছিলি আগিয়েছিলে আগিয়েছিলেন আগিয়েছিলেম আগিয়েছিলুম আগিয়েছিস আগিয়েছে আগিয়েছেন আগিয়ো আগে আগেই আগেও আগেকার আগেপাছে আগেভাগে আগডাল আগডুম আগত আগতি আগুতে আগতপ্রায় আগদুয়ার আগধড় আগুন আগ্নেয় আগ্নেয়গিরি আগ্নেয়াস্ত্র আগ্নেয়ভাবে আগুনজ্বলা আগুনজ্বলানো আগন্তুক আগুনবরণ আগুনমুখা আগপাছ আগুপাছ আগুপাছু আগুপিছু আগপর্যন্ত আগবাড়া আগুবাড়া আগবাড়ান আগবাড়ানো আগম আগমযথা আগমন আগমনকারী আগমনী আগমনবার্তা আগমবেদী আগমশাস্ত্র আগমশুল্ক আগমুহূর্ত আগর আগ্রা আগ্রাবাদ আগ্রাসী আগ্রাসন আগরতলা আগরবাতি আগ্রহ আগ্রহাতিশয্য আগ্রহাতিশয় আগ্রহাতিশয়তা আগ্রহান্বিত আগ্রহান্বিতা আগ্রহী আগ্রহযুক্ত আগ্রহপূর্ণ আগ্রহভরে আগ্রহশীল আগ্রহশূন্য আগ্রহসহকারে আগ্রহহীন আগলা আগলাই আগলাইও আগলাইত আগলাইতাম আগলাইতিস আগলাইতে আগলাইতেছ আগলাইতেছি আগলাইতেছিল আগলাইতেছিলাম আগলাইতেছিলি আগলাইতেছিলে আগলাইতেছিলেন আগলাইতেছিস আগলাইতেছে আগলাইতেছেন আগলাইতেন আগলাইব আগলাইবার আগলাইবি আগলাইবে আগলাইবেন আগলাইল আগলাইলাম আগলাইলি আগলাইলে আগলাইলেন আগলাইয়া আগলাইয়াছ আগলাইয়াছি আগলাইয়াছিল আগলাইয়াছিলাম আগলাইয়াছিলি আগলাইয়াছিলে আগলাইয়াছিলেন আগলাইয়াছিস আগলাইয়াছে আগলাইয়াছেন আগলাইয়ো আগলাও আগলাক আগলাচ্ছ আগলাচ্ছি আগলাচ্ছিল আগলাচ্ছিলাম আগলাচ্ছিলি আগলাচ্ছিলে আগলাচ্ছিলেন আগলাচ্ছিলেম আগলাচ্ছিলুম আগলাচ্ছিস আগলাচ্ছে আগলাচ্ছেন আগলাত আগলাতাম আগলাতিস আগলাতে আগলাতেন আগলাতেম আগলাতুম আগলান আগলানো আগলানোর আগলাব আগলাবার আগলাবি আগলাবে আগলাবেন আগলাবো আগলাল আগলালাম আগলালি আগলালে আগলালেন আগলালেম আগলালুম আগলাস আগলায় আগলি আগলে আগলেছ আগলেছি আগলেছিল আগলেছিলাম আগলেছিলি আগলেছিলে আগলেছিলেন আগলেছিলেম আগলেছিলুম আগলেছিস আগলেছে আগলেছেন আগুসার আগস্ট আগড় আগড়ম আগুয়ান আঘাট আঘাটা আঘাত আঘাতক আঘাতকারী আঘাতজনিত আঘাতন আঘাতপ্রাপ্ত আঘাতপ্রাপ্তি আঘাতসহ আঘ্রাণ আঘ্রাত আঙ্কল আঙ্গার আঙ্গিক আঙ্গিকবাদ আঙ্গিনা আঙ্গিরস আঙ্গিয়া আঙ্গোট আঙ্গুর আঙ্গুল আঙার আঙিনা আঙিয়া আঙটা আঙটি আঙন আঙুর আঙুরলতা আঙুল আঙলানো আঙুলহানি আচ আঁচ আঁচুক আচকা আচকান আচা আঁচা আঁচাআঁচি আঁচাই আঁচাইও আঁচাইত আঁচাইতাম আঁচাইতিস আঁচাইতে আঁচাইতেছ আঁচাইতেছি আঁচাইতেছিল আঁচাইতেছিলাম আঁচাইতেছিলি আঁচাইতেছিলে আঁচাইতেছিলেন আঁচাইতেছিস আঁচাইতেছে আঁচাইতেছেন আঁচাইতেন আঁচাইব আঁচাইবার আঁচাইবি আঁচাইবে আঁচাইবেন আঁচাইল আঁচাইলাম আঁচাইলি আঁচাইলে আঁচাইলেন আঁচাইয়া আঁচাইয়াছ আঁচাইয়াছি আঁচাইয়াছিল আঁচাইয়াছিলাম আঁচাইয়াছিলি আঁচাইয়াছিলে আঁচাইয়াছিলেন আঁচাইয়াছিস আঁচাইয়াছে আঁচাইয়াছেন আঁচাইয়ো আঁচাও আঁচাক আঁচাচ্ছ আঁচাচ্ছি আঁচাচ্ছিল আঁচাচ্ছিলাম আঁচাচ্ছিলি আঁচাচ্ছিলে আঁচাচ্ছিলেন আঁচাচ্ছিলেম আঁচাচ্ছিলুম আঁচাচ্ছিস আঁচাচ্ছে আঁচাচ্ছেন আঁচাত আঁচাতাম আঁচাতিস আঁচাতে আঁচাতেন আঁচাতেম আঁচাতুম আঁচান আচানক আঁচানো আঁচাব আঁচাবার আঁচাবি আঁচাবে আঁচাবেন আঁচাবো আচাভুয়া আচার আঁচার আচারি আচারিক আচারী আচার্য আচার্যা আচার্যানী আচারনিষ্ঠ আচারনিষ্ঠা আচারপ্রিয় আচারবিচার আচারবোধসম্পন্ন আচারব্যবহার আচারবতী আচারভ্রষ্ট আচারভ্রষ্টা আচারসর্বস্ব আঁচাল আচালা আঁচালাম আঁচালি আঁচালে আঁচালেন আঁচালেম আঁচালুম আঁচাস আঁচায় আঁচি আঁচিও আঁচিত আঁচিতাম আঁচিতিস আঁচিতে আঁচিতেছ আঁচিতেছি আঁচিতেছিল আঁচিতেছিলাম আঁচিতেছিলি আঁচিতেছিলে আঁচিতেছিলেন আঁচিতেছিস আঁচিতেছে আঁচিতেছেন আঁচিতেন আঁচিব আঁচিবার আঁচিবি আঁচিবে আঁচিবেন আঁচিল আঁচিলাম আঁচিলি আঁচিলে আঁচিলেন আঁচিস আঁচিয়া আঁচিয়াছ আঁচিয়াছি আঁচিয়াছিল আঁচিয়াছিলাম আঁচিয়াছিলি আঁচিয়াছিলে আঁচিয়াছিলেন আঁচিয়াছিস আঁচিয়াছে আঁচিয়াছেন আঁচিয়ে আঁচিয়েছ আঁচিয়েছি আঁচিয়েছিল আঁচিয়েছিলাম আঁচিয়েছিলি আঁচিয়েছিলে আঁচিয়েছিলেন আঁচিয়েছিলেম আঁচিয়েছিলুম আঁচিয়েছিস আঁচিয়েছে আঁচিয়েছেন আঁচিয়ো আঁচে আঁচেন আচোট আচ্ছা আচ্ছাদ আচ্ছাদক আচ্ছাদকারী আচ্ছাদিত আচ্ছাদ্য আচ্ছাদন আচ্ছাদনকারী আচ্ছাদনীয় আচ্ছাদনযুক্ত আচ্ছাদনহীন আচ্ছিন্ন আঁচছিল আঁচছিলাম আঁচছিলি আঁচছিলে আঁচছিলেন আঁচছিলেম আঁচছিলুম আঁচছিস আঁচছে আচ্ছন্ন আচ্ছন্নতা আচ্ছন্নদৃষ্টি আচ্ছন্নভাব আঁচত আঁচতাম আঁচতিস আঁচতে আঁচতেন আঁচতেম আঁচতুম আঁচুন আঁচব আঁচবার আঁচবি আঁচবে আঁচবেন আঁচবো আচমকা আচমকাসুন্দরী আচমন আচমনীয় আচম্বিত আচর আঁচর আচরাচর আচরিক আচরিত আচরণ আচরণও আচরণকারিণী আচরণকারী আচরণকরী আচরণগত আচরণিক আচরণীয় আচরণবাদ আচরণবাদী আচরণবিধি আচরণমুক্ত আচল আঁচল আঁচলা আঁচলাম আঁচলি আঁচলেগিরা আঁচলেগেরো আঁচলেন আঁচলেম আঁচলের আঁচলধরা আচলপুর আঁচলুম আঁচড় আঁচড়া আঁচড়াআঁচড়ি আঁচড়াই আঁচড়াইও আঁচড়াইত আঁচড়াইতাম আঁচড়াইতিস আঁচড়াইতে আঁচড়াইতেছ আঁচড়াইতেছি আঁচড়াইতেছিল আঁচড়াইতেছিলাম আঁচড়াইতেছিলি আঁচড়াইতেছিলে আঁচড়াইতেছিলেন আঁচড়াইতেছিস আঁচড়াইতেছে আঁচড়াইতেছেন আঁচড়াইতেন আঁচড়াইব আঁচড়াইবার আঁচড়াইবি আঁচড়াইবে আঁচড়াইবেন আঁচড়াইল আঁচড়াইলাম আঁচড়াইলি আঁচড়াইলে আঁচড়াইলেন আঁচড়াইয়া আঁচড়াইয়াছ আঁচড়াইয়াছি আঁচড়াইয়াছিল আঁচড়াইয়াছিলাম আঁচড়াইয়াছিলি আঁচড়াইয়াছিলে আঁচড়াইয়াছিলেন আঁচড়াইয়াছিস আঁচড়াইয়াছে আঁচড়াইয়াছেন আঁচড়াইয়ো আঁচড়াও আঁচড়াক আঁচড়াচ্ছ আঁচড়াচ্ছি আঁচড়াচ্ছিল আঁচড়াচ্ছিলাম আঁচড়াচ্ছিলি আঁচড়াচ্ছিলে আঁচড়াচ্ছিলেন আঁচড়াচ্ছিলেম আঁচড়াচ্ছিলুম আঁচড়াচ্ছিস আঁচড়াচ্ছে আঁচড়াচ্ছেন আঁচড়াত আঁচড়াতাম আঁচড়াতিস আঁচড়াতে আঁচড়াতেন আঁচড়াতেম আঁচড়াতুম আঁচড়ান আঁচড়ানো আঁচড়াব আঁচড়াবার আঁচড়াবি আঁচড়াবে আঁচড়াবেন আঁচড়াবো আঁচড়াল আঁচড়ালাম আঁচড়ালি আঁচড়ালে আঁচড়ালেন আঁচড়ালেম আঁচড়ালুম আঁচড়াস আঁচড়ায় আঁচড়ি আঁচড়ে আঁচড়েই আঁচড়েছ আঁচড়েছি আঁচড়েছিল আঁচড়েছিলাম আঁচড়েছিলি আঁচড়েছিলে আঁচড়েছিলেন আঁচড়েছিলেম আঁচড়েছিলুম আঁচড়েছিস আঁচড়েছে আঁচড়েছেন আঁচড়ের আঁচড়ো আছ আছা আছাঁকা আছাঁটা আছাড় আছাড়ি আছি আছিলেন আছিস আছিয়া আছে আছেই আছেন আছো আছোই আছোলা আছর আছড়া আছড়াআছড়ি আছড়াই আছড়াইও আছড়াইত আছড়াইতাম আছড়াইতিস আছড়াইতে আছড়াইতেছ আছড়াইতেছি আছড়াইতেছিল আছড়াইতেছিলাম আছড়াইতেছিলি আছড়াইতেছিলে আছড়াইতেছিলেন আছড়াইতেছিস আছড়াইতেছে আছড়াইতেছেন আছড়াইতেন আছড়াইব আছড়াইবার আছড়াইবি আছড়াইবে আছড়াইবেন আছড়াইল আছড়াইলাম আছড়াইলি আছড়াইলে আছড়াইলেন আছড়াইয়া আছড়াইয়াছ আছড়াইয়াছি আছড়াইয়াছিল আছড়াইয়াছিলাম আছড়াইয়াছিলি আছড়াইয়াছিলে আছড়াইয়াছিলেন আছড়াইয়াছিস আছড়াইয়াছে আছড়াইয়াছেন আছড়াইয়ো আছড়াও আছড়াক আছড়াচ্ছ আছড়াচ্ছি আছড়াচ্ছিল আছড়াচ্ছিলাম আছড়াচ্ছিলি আছড়াচ্ছিলে আছড়াচ্ছিলেন আছড়াচ্ছিলেম আছড়াচ্ছিলুম আছড়াচ্ছিস আছড়াচ্ছে আছড়াচ্ছেন আছড়াত আছড়াতাম আছড়াতিস আছড়াতে আছড়াতেন আছড়াতেম আছড়াতুম আছড়ান আছড়ানো আছড়াব আছড়াবার আছড়াবি আছড়াবে আছড়াবেন আছড়াবো আছড়াল আছড়ালাম আছড়ালি আছড়ালে আছড়ালেন আছড়ালেম আছড়ালুম আছড়াস আছড়ায় আছড়ে আছড়েছ আছড়েছি আছড়েছিল আছড়েছিলাম আছড়েছিলি আছড়েছিলে আছড়েছিলেন আছড়েছিলেম আছড়েছিলুম আছড়েছিস আছড়েছে আছড়েছেন আছড়ো আজ আজই আজও আজকা আজকার আজকাল আজকালকার আজকে আজকেই আজকেও আজগবি আজগুবি আজগুবিকথা আজগর আজা আজাইরা আজাদ আজাদি আজান আজানু আজানুচুম্বিত আজানুলম্বিত আজানুলম্বিতবাহু আজার আজারি আজারবাইজান আজারবাইজানী আজারবাইজানীয় আজি আজিকার আজিকালি আজিকে আজিজ আজিজুর আজিজুল আজিব আজিম আজিমউদ্দিন আজিমপুর আজিমুল্লাহ আজীব আজীব্য আজীবন আজীমা আজীর্ণ আজেবাজে আজো আজ্জানো আজ্ঞা আজ্ঞাকারিণী আজ্ঞাকারী আজ্ঞাধীন আজ্ঞাধীনতা আজ্ঞানুবর্তী আজ্ঞাপক আজ্ঞাপালন আজ্ঞাপিত আজ্ঞাপত্র আজ্ঞাপন আজ্ঞাপ্রাপ্ত আজ্ঞাবাহক আজ্ঞাবহ আজ্ঞাবহন আজ্ঞাবহরূপে আজ্ঞালিপি আজ্ঞে আজ্ঞপ্ত আজ্ঞপ্তি আজতক আজতো আজদাহা আজনাই আঁজনাই আজন্ম আজন্মকাল আজব আজবক আজবখানা আজবঘর আজম আজমির আজমিরিগঞ্জ আজমীঢ় আজমপুর আজমল আজরা আজুরা আজরাইল আঁজল আঁজলা আজহার আজহারউদ্দীন আঝালা আঝালি আঝাড়া আঞ্চলিক আঞ্চলিকজোট আঞ্চলিকতা আঞ্জ আঞ্জা আঞ্জাম আঞ্জি আঞ্জিনা আঞ্জিনে আঞ্জিনেয় আঞ্জির আঞ্জীর আঞ্জন আঞ্জনি আঞ্জুনি আঞ্জনেয় আঞ্জুমান আট আঁট আঁটু আটআনা আটই আটক আঁটুক আটকা আটকাই আটকাইও আটকাইত আটকাইতাম আটকাইতিস আটকাইতে আটকাইতেছ আটকাইতেছি আটকাইতেছিল আটকাইতেছিলাম আটকাইতেছিলি আটকাইতেছিলে আটকাইতেছিলেন আটকাইতেছিস আটকাইতেছে আটকাইতেছেন আটকাইতেন আটকাইব আটকাইবার আটকাইবি আটকাইবে আটকাইবেন আটকাইল আটকাইলাম আটকাইলি আটকাইলে আটকাইলেন আটকাইয়া আটকাইয়াছ আটকাইয়াছি আটকাইয়াছিল আটকাইয়াছিলাম আটকাইয়াছিলি আটকাইয়াছিলে আটকাইয়াছিলেন আটকাইয়াছিস আটকাইয়াছে আটকাইয়াছেন আটকাইয়ো আটকাও আটকাক আটকাচ্ছ আটকাচ্ছি আটকাচ্ছিল আটকাচ্ছিলাম আটকাচ্ছিলি আটকাচ্ছিলে আটকাচ্ছিলেন আটকাচ্ছিলেম আটকাচ্ছিলুম আটকাচ্ছিস আটকাচ্ছে আটকাচ্ছেন আটকাত আটকাতাম আটকাতিস আটকাতে আটকাতেন আটকাতেম আটকাতুম আটকান আটকানো আটকাব আটকাবার আটকাবি আটকাবে আটকাবেন আটকাবো আটকাল আটকালাম আটকালি আটকালে আটকালেন আটকালেম আটকালুম আটকাস আটকায় আটকায়া আটকায়না আটকি আটকিয়া আটকিয়ে আটকে আটকেছ আটকেছি আটকেছিল আটকেছিলাম আটকেছিলি আটকেছিলে আটকেছিলেন আটকেছিলেম আটকেছিলুম আটকেছিস আটকেছে আটকেছেন আটকো আটকৌড়ে আ্যক্টিনিয়াম আটকপালিয়া আটকপালী আটকপালে আঁটকুড়া আটকড়াই আঁটকুড়ী আঁটকুড়ে আঁটকুড়ো আটখানা আটঘাট আটঘরিয়া আটা আঁটা আঁটাআঁটি আটাইম আটাইশ আটাছাঁকা আটাত্তর আযান আঁটান আঁটানো আটান্ন আটানব্বই আটাশ আটাশি আঁটাসাঁটা আঁটাসাঁটি আটি আঁটি আঁটিও আঁটিযুক্ত আঁটিত আঁটিতাম আঁটিতিস আঁটিতে আঁটিতেছ আঁটিতেছি আঁটিতেছিল আঁটিতেছিলাম আঁটিতেছিলি আঁটিতেছিলে আঁটিতেছিলেন আঁটিতেছিস আঁটিতেছে আঁটিতেছেন আঁটিতেন আঁটিব আঁটিবার আঁটিবি আঁটিবে আঁটিবেন আঁটিল আঁটিলাম আঁটিলি আঁটিলে আঁটিলেন আঁটিস আঁটিসাঁটি আটিয়া আঁটিয়া আঁটিয়াছ আঁটিয়াছি আঁটিয়াছিল আঁটিয়াছিলাম আঁটিয়াছিলি আঁটিয়াছিলে আঁটিয়াছিলেন আঁটিয়াছিস আঁটিয়াছে আঁটিয়াছেন আঁটিয়ো আটচালা আটচল্লিশ আটেক আঁটেন আঁটো আটোপ আটোপটঙ্কার আঁটছ আঁটছি আঁটছিল আঁটছিলাম আঁটছিলি আঁটছিলে আঁটছিলেন আঁটছিলেম আঁটছিলুম আঁটছিস আঁটছে আঁটছেন আটজন আঁটত আঁটতাম আঁটতিস আঁটতে আঁটতেন আঁটতেম আঁটতুম আটত্রিশ আটদিন আঁটুন আঁটনি আঁটুনি আটপওর আটপাড়া আটপিঠা আটপিঠে আটপেজি আটপৌরে আটপ্রকার আটপ্রহর আটপহর আঁটব আঁটুবাঁটু আটবার আঁটবার আঁটবি আঁটবে আঁটবেন আঁটবো আটভাগ আযম আটমাস আটরকম আঁটল আটলান্টা আটলান্টিক আটলান্টিকডিভিশন আটলান্টিস আঁটলাম আঁটলি আঁটুলি আঁটলে আঁটলেন আঁটলেম আঁটলুম আটষট্টি আটসংখ্যক আঁটসাঁট আযহা আটহাতি আঠা আঠাকাঠি আঠাযুক্ত আঠামাখানো আঠার আঠারই আঠারো আঠারোই আঠারোর্ধ আঠারজন আঠাল আঠালো আঠালোভাব আঠি আঁঠি আঠেরো আডিডাস আড্ডা আড্ডাচলা আড্ডাধারী আড্ডাবাজ আডভান্স আণ্ডা আণ্ডাবাচ্চা আণ্ডিল আণ্ডীর আণ্ডীল আণবিক আণবিকজীববিজ্ঞান আণুবীক্ষণিক আঁত আতংক আতংকিত আতুআতু আঁতকা আঁতকাই আঁতকাইও আঁতকাইত আঁতকাইতাম আঁতকাইতিস আঁতকাইতে আঁতকাইতেছ আঁতকাইতেছি আঁতকাইতেছিল আঁতকাইতেছিলাম আঁতকাইতেছিলি আঁতকাইতেছিলে আঁতকাইতেছিলেন আঁতকাইতেছিস আঁতকাইতেছে আঁতকাইতেছেন আঁতকাইতেন আঁতকাইব আঁতকাইবার আঁতকাইবি আঁতকাইবে আঁতকাইবেন আঁতকাইল আঁতকাইলাম আঁতকাইলি আঁতকাইলে আঁতকাইলেন আঁতকাইয়া আঁতকাইয়াছ আঁতকাইয়াছি আঁতকাইয়াছিল আঁতকাইয়াছিলাম আঁতকাইয়াছিলি আঁতকাইয়াছিলে আঁতকাইয়াছিলেন আঁতকাইয়াছিস আঁতকাইয়াছে আঁতকাইয়াছেন আঁতকাইয়ো আঁতকাও আঁতকাক আঁতকাচ্ছ আঁতকাচ্ছি আঁতকাচ্ছিল আঁতকাচ্ছিলাম আঁতকাচ্ছিলি আঁতকাচ্ছিলে আঁতকাচ্ছিলেন আঁতকাচ্ছিলেম আঁতকাচ্ছিলুম আঁতকাচ্ছিস আঁতকাচ্ছে আঁতকাচ্ছেন আঁতকাত আঁতকাতাম আঁতকাতিস আঁতকাতে আঁতকাতেন আঁতকাতেম আঁতকাতুম আঁতকান আঁতকানো আঁতকাব আঁতকাবার আঁতকাবি আঁতকাবে আঁতকাবেন আঁতকাবো আঁতকাল আঁতকালাম আঁতকালি আঁতকালে আঁতকালেন আঁতকালেম আঁতকালুম আঁতকাস আঁতকায় আঁতকে আঁতকেছ আঁৎকেছ আঁতকেছি আঁৎকেছি আঁতকেছিল আঁৎকেছিল আঁতকেছিলাম আঁৎকেছিলাম আঁতকেছিলি আঁৎকেছিলি আঁতকেছিলে আঁৎকেছিলে আঁতকেছিলেন আঁৎকেছিলেন আঁতকেছিলেম আঁৎকেছিলেম আঁতকেছিলুম আঁৎকেছিলুম আঁতকেছিস আঁৎকেছিস আঁতকেছে আঁৎকেছে আঁতকেছেন আঁৎকেছেন আঁতকো আঁৎকো আতঙ্ক আতঙ্কগ্রস্ত আতঙ্কিত আতঙ্কজনক আতঙ্কদায়ক আতঙ্কবাদী আতঙ্কসৃষ্টি আতঙ্কহীন আতা আতাউর আতাউল আতাকুরা আতাখান আঁতাত আঁতাতবদ্ধ আতান্তর আতাবেগ আতাম্র আতাহার আতিউর আতিক আতিকুর আতিকুল আতিকুল্লাহ আতিথেয় আতিথেয়ী আতিথেয়তা আতিথ্য আতিথ্যগ্রহণ আতিথ্যগ্রহণকারী আতিথ্যস্বীকার আতিপাতি আঁতিপাঁতি আতিশয্য আতিশয্যজনিত আতিশয্যবর্জিত আতিয়া আতেল আঁতেল আতেলা আত্যন্তিক আত্যন্তিকতা আত্তাহিয়াতু আততায়ী আত্তি আত্তীকৃত আত্তীকরণ আতপ আতপান্ন আতপচাইল আতপচাউল আতপচাল আতপ্ত আতপস্নান আতপহীন আত্ম আত্মক আত্মকাহিনী আত্মকেন্দ্রিক আত্মকৃত আত্মকথা আত্মকর্ম আত্মকর্মসংস্থান আত্মকলহ আত্মগোপন আত্মগোপনকারী আত্মগৌরব আত্মগত আত্মগরিমা আত্মগরজ আত্মগর্ব আত্মগর্বী আত্মগ্লানি আত্মঘাত আত্মঘাতিনী আত্মঘাতী আত্মা আত্মাজল আত্মাদর আত্মাদর্শ আত্মাধীন আত্মান্বেষী আত্মান্বেষণ আত্মান্বেষণকারী আত্মানুশাসন আত্মানুসন্ধান আত্মানুসন্ধানকারী আত্মানুসন্ধায়ী আত্মাপরাধ আত্মাপুরুষ আত্মাপহার আত্মাপহারক আত্মাপহারী আত্মাবাদ আত্মাভিমান আত্মাভিমানিনী আত্মাভিমানী আত্মারাম আত্মাশ্রয় আত্মাশ্রয়ী আত্মাহুতি আত্মিক আত্মিকবাদী আত্মচিন্তা আত্মচেতনা আত্মচরিত আত্মীয় আত্মীয়অনাত্মীয় আত্মীয়করণ আত্মীয়া আত্মীয়জ্ঞান আত্মীয়তা আত্মীয়তাজ্ঞাপক আত্মীয়তাপূর্ণ আত্মীয়তাবাচক আত্মীয়পরিজন আত্মীয়বিহীন আত্মীয়বিয়োগ আত্মীয়বন্ধু আত্মীয়স্বজন আত্মীয়সভা আত্মীয়হীন আত্মীয়হীনতা আত্মোৎকর্ষ আত্মোৎসর্গ আত্মোৎসর্গকারী আত্মোদরপূর্তি আত্মোন্নতি আত্মোন্নতিবিধান আত্মোপম আত্মৌপম্য আত্মজ আত্মজা আত্মজীবন আত্মজীবনী আত্মজীবনীগ্রন্থ আত্মজৈবনিক আত্মজ্ঞ আত্মজ্ঞান আত্মজ্ঞানী আত্মজ্ঞানসম্পন্ন আত্মজয় আত্মত্যাগ আত্মত্যাগকারী আত্মত্যাগী আত্মতত্ত্ব আত্মতত্ত্বজ্ঞ আত্মতৃপ্ত আত্মতৃপ্তি আত্মত্রাণ আত্মতুল্য আত্মতুল্যা আত্মতুষ্ট আত্মতুষ্টি আত্মদান আত্মদানকারী আত্মদেবতা আত্মদোষ আত্মদোষজ্ঞ আত্মদমন আত্মদ্রোহ আত্মদ্রোহী আত্মদর্শী আত্মদর্শন আত্মদ্রষ্টা আত্মদৃষ্টি আত্মনাশ আত্মনিগ্রহ আত্মনিবেদিত আত্মনিবেদন আত্মনির্ভর আত্মনির্ভরতা আত্মনির্ভরশীল আত্মনিষ্ঠ আত্মনিয়োগ আত্মনিয়ন্ত্রণ আত্মপক্ষ আত্মপীড়ন আত্মপর আত্মপ্রকাশ আত্মপ্রকাশকারী আত্মপ্রকটন আত্মপরিচিতি আত্মপরিচয় আত্মপরীক্ষা আত্মপ্রচার আত্মপ্রজননশীল আত্মপর্যালোচনা আত্মপ্রতারক আত্মপ্রতারিত আত্মপ্রতারণ আত্মপ্রতারণা আত্মপ্রতিকৃতি আত্মপ্রতিষ্ঠা আত্মপ্রত্যয় আত্মপ্রবঞ্চনা আত্মপ্রশংসা আত্মপ্রশংসাকারী আত্মপ্রসাদ আত্মবিকাশ আত্মবিকাশকারী আত্মবিক্রয় আত্মবিচ্ছেদ আত্মবিৎ আত্মবিদ আত্মবিদ্যা আত্মবিরোধ আত্মবিলাপ আত্মবিলোপ আত্মবিলোপী আত্মবিশ্বাস আত্মবিশ্বাসী আত্মবিষয়ক আত্মবিস্মৃত আত্মবিস্মৃতি আত্মবিস্মরণ আত্মবিসর্জন আত্মবেদ আত্মবেদিতা আত্মবেদিনী আত্মবেদী আত্মবোধ আত্মবঞ্চক আত্মবঞ্চিকা আত্মবঞ্চন আত্মবঞ্চনা আত্মবৎ আত্মবুদ্ধি আত্মবন্ধু আত্মবর্গ আত্মবলি আত্মবলিদান আত্মবলিদানকারী আত্মবশ আত্মভাব আত্মভোলা আত্মভূত আত্মমগ্ন আত্মমাত্রিক আত্মম্ভরি আত্মম্ভরিতা আত্মম্ভরিত্ব আত্মমর্যাদা আত্মরক্ষা আত্মরক্ষাকারী আত্মরক্ষণ আত্মরত আত্মরতি আত্মরূপ আত্মরূপা আত্মলোপ আত্মশক্তি আত্মশাসন আত্মশোধন আত্মশুদ্ধি আত্মশ্লাঘা আত্মসংজ্ঞা আত্মসংযম আত্মসংযমিনী আত্মসংযমী আত্মসংবৃতি আত্মসংবরণ আত্মসুখী আত্মসাৎ আত্মসাৎকারী আত্মসাৎকৃত আত্মসাৎকরণ আত্মসার আত্মসিদ্ধি আত্মসচেতনতা আত্মস্থ আত্মস্থকরণ আত্মস্বরূপ আত্মসমাহিত আত্মসমাহিতি আত্মস্মৃতি আত্মসম্পর্কীয় আত্মসম্ভ্রম আত্মসম্মান আত্মসম্মানবোধ আত্মসম্মানহীন আত্মসমর্পণ আত্মসমর্পণকারী আত্মসর্বস্ব আত্মসর্বস্বতা আত্মহা আত্মহারা আত্মহত্যা আত্মহত্যাকারী আত্মহত্যাস্পৃহা আত্মহন্তা আত্মহন্ত্রী আত্মহনন আতর আতুর আতরওয়ালা আত্রাই আতুরাশ্রম আত্রেয়ী আতরদান আতরদানি আতুরনিবাস আঁতলামো আতশ আতশখানায় আতশি আতশবাজি আতস আতসি আতসবাজি আঁতুড় আঁতুড়ঘর আঁতড়ি আঁতুড়ি আথান্তর আথারটন আথাল আথালিপাথালি আথালপাথাল আথালভরা আদ আদা আদাজল আদান আদানপ্রদান আদানপ্রদানকারিণী আদানপ্রদানকারী আদাব আদার আদালত আদালতকক্ষ আদালতঘটিত আদালতি আদাড় আদাড়েপাদাড়ে আদাড়পাদাড় আদাড়বাদাড় আদায় আদায়কারী আদায়কৃত আদায়ীকৃত আদায়পূর্বক আদি আদিঅকৃত্রিম আদিকাণ্ড আদিকাব্য আদিকারণ আদিকাল আদিকবি আদিখ্যেতা আদিগন্ত আদিযুগ আদিতাল আদিত্য আদিতম আদিদেব আদিধ্বনি আদিনা আদিনাথ আদিনামসজিদ আদিপুরাণ আদিপ্রতীক আদিপর্ব আদিপুরুষ আদিপুরুষরূপে আদিবাস আদিবাসী আদিবিন্দু আদিব্যঞ্জণাগম আদিভাষা আদিভূত আদিভূতা আদিম আদিমতা আদিমতম আদিরূপ আদিরস আদিরসাত্মক আদিরসমিশ্রিত আদিষ্ট আদিসত্তা আদিস্তর আদিস্বর আদিস্বরাগম আদিস্বরলোপ আদিস্রষ্টা আদিহীন আদেখ আদেখা আদেখলা আদেখলাপনা আদেখলে আদেখলেপনা আদৌ আদেশ আদেশক আদেশকারী আদেশক্রমে আদেশাদি আদেশানুরূপ আদেশানুসারে আদেশদাতা আদেশদান আদেশদানকারী আদেশনামা আদেশনির্দেশাদি আদেশপালন আদেশপত্র আদেশপ্রাপ্ত আদেশবদ্ধ আদেশবল আদেশসংবলিত আদেষ্টা আদৌ আদ্য আদ্যকৃত্য আদ্যক্ষর আদ্যক্ষররূপে আদ্যা আদ্যাক্ষর আদ্যাশক্তি আদ্যি আদ্যিকাল আদ্যোপান্ত আদ্যতাল আদ্যন্ত আদ্যপ্রান্ত আদ্যপরিচয় আদ্যবীজ আদ্যরস আদ্যশক্তি আদ্যশ্রাদ্ধ আদত আদৃত আদদ আদ্দি আদ্ধেক আদনান আদপে আদব আদবকায়দা আদবকায়দাদোরস্ত আদবকায়দাদুরস্ত আদবে আদম আদমি আদমজী আদমজীনগর আদমজীমিলস আদমদিঘী আদমদীঘি আদমপুর আদমশাহ আদমশুমার আদমশুমারি আদমসুরাত আদর আদুর আঁদরু আদ্রক আদরার্থক আদরার্থে আদ্রিয়ানা আদ্রিয়ানো আদুরী আদুরে আদরযুক্ত আদরযত্ন আদরণীয় আদরপ্রাপ্ত আদর্শ আদর্শগত আদর্শিক আদর্শচ্যুত আদর্শচ্যুতি আদর্শনিষ্ঠ আদর্শবাদী আদর্শবান আদর্শভাবে আদর্শভিত্তিক আদর্শলিপি আদর্শহীন আদর্শহীনতা আদল আদুল আধ আধকাঁচা আধকপালি আধকপালিয়া আধকপালে আধক্রোশ আধখানা আধখেঁচড়া আধঘণ্টা আধঘুমন্ত আধা আধাআধি আধাখেঁচড়া আধাঘণ্টা আধান আধানযুক্ত আধানদ্বয় আধানশূন্য আধাপোড়া আধাবয়সী আধার আঁধার আধারিত আঁধারিয়া আঁধারচিত্র আধারস্থ আধারহীন আধাসামরিক আধাসরকারী আধি আঁধি আধিকারিক আধিক্য আধিক্যেতা আধিক্যজনিত আধিক্যযুক্ত আধিক্যনাশক আধিক্যপ্রকাশ আধিক্যহেতু আধিকরণ আধিক্লিষ্ট আধিখ্যেতা আধিদৈবিক আধিপত্য আধিপত্যকাল আধিপত্যবিস্তার আধিভৌতিক আধিরাজ্য আঁধিয়ার আঁধিয়ারা আধেক আধেয় আধো আধোআধো আধোপনা আধোয়া আধটু আধ্যাত্মিক আধ্যাত্মিকা আধ্যাত্মিকতা আধ্যাত্মীয় আধ্যাত্মবাদ আধ্যাত্মবাদী আধ্যাত্মবিদ্যা আধ্যাত্মলোক আধ্যাত্মসাধক আধুত আধূত আধৃত আধুতা আধুনিক আধুনিককাল আধুনিকগ্রিক আধুনিকগ্রিস আধুনিকা আধুনিকায়ন আধুনিকীকৃত আধুনিকীকরণ আধুনিকতা আধুনিকতাবাদ আধুনিকতাবাদী আধুনিকতম আধুনিকতর আধুনিকমত আধুনিকমনস্ক আধুনিকমনস্কতা আধপাকা আধপাগল আধপেটা আধপোড়া আধফোটা আধফুট আধবোজা আধবুড়া আধবুড়ি আধবুড়ো আধবয়সী আধমণি আধমনী আধমরা আধময়লা আধলা আঁধলা আধলি আধুলি আধশোয়া আধসিদ্ধ আধহাত আন আনঅফিসিয়াল আনআইডেন্টিফাইড আনইন্সটল আনকালেক্টেড আনকো আনকোরা আনুকূল্য আনুগত্য আনা আনাই আনাইও আনাইত আনাইতাম আনাইতিস আনাইতে আনাইতেছ আনাইতেছি আনাইতেছিল আনাইতেছিলাম আনাইতেছিলি আনাইতেছিলে আনাইতেছিলেন আনাইতেছিস আনাইতেছে আনাইতেছেন আনাইতেন আনাইব আনাইবার আনাইবি আনাইবে আনাইবেন আনাইল আনাইলাম আনাইলি আনাইলে আনাইলেন আনাইয়া আনাইয়াছ আনাইয়াছি আনাইয়াছিল আনাইয়াছিলাম আনাইয়াছিলি আনাইয়াছিলে আনাইয়াছিলেন আনাইয়াছিস আনাইয়াছে আনাইয়াছেন আনাইয়ো আনাও আনাক আনাগোনা আনাচকানাচ আনাচেকানাচে আনাচ্ছ আনাচ্ছি আনাচ্ছিল আনাচ্ছিলাম আনাচ্ছিলি আনাচ্ছিলে আনাচ্ছিলেন আনাচ্ছিলেম আনাচ্ছিলুম আনাচ্ছিস আনাচ্ছে আনাচ্ছেন আনাজ আনাজি আনাজপাতি আনাজপত্র আনাত আনাতাম আনাতিস আনাতে আনাতেন আনাতেম আনাতুম আনান আনানো আনাবার আনাবি আনাবে আনাবেন আনাবো আনাম আনার আনারকলি আনারস আনারসি আনাল আনালাম আনালি আনালে আনালেন আনালেম আনালুম আনাস আনাড়ি আনাড়িপনা আনায় আনি আনিও আনিত আনিতাম আনিতিস আনিতে আনিতেছ আনিতেছি আনিতেছিল আনিতেছিলাম আনিতেছিলি আনিতেছিলে আনিতেছিলেন আনিতেছিস আনিতেছে আনিতেছেন আনিতেন আনিনি আনিব আনিবার আনিবি আনিবে আনিবেন আনিলাম আনিলি আনিলে আনিলেন আনিস আনিসুজ্জামান আনিসুর আনিসুল আনিয়া আনিয়াছ আনিয়াছি আনিয়াছিল আনিয়াছিলাম আনিয়াছিলি আনিয়াছিলে আনিয়াছিলেন আনিয়াছিস আনিয়াছে আনিয়াছেন আনিয়ে আনিয়েছ আনিয়েছি আনিয়েছিল আনিয়েছিলাম আনিয়েছিলি আনিয়েছিলে আনিয়েছিলেন আনিয়েছিলেম আনিয়েছিলুম আনিয়েছিস আনিয়েছে আনিয়েছেন আনিয়ো আনচান আনে আনেন আনো আনোয়ার আনোয়ারউদ্দীন আনোয়ারউল্লাহ আনোয়ারা আনোয়ারুল আনছ আনছান আনছি আনছিল আনছিলাম আনছিলি আনছিলে আনছিলেন আনছিলেম আনছিলুম আনছিস আনছে আনছেন আনজাম আন্টোনিও আন্টন আন্টনি আন্ডার আন্ডারআর্ম আন্ডারওয়ার্ল্ড আন্ডারগ্রাউন্ড আন্ডারস্ট্যান্ডিং আনত আন্ত আন্তঃ আন্তঃআঞ্চলিক আন্তঃআণবিক আন্তঃউইকি আন্তঃকোষীয় আন্তঃকশেরুকীয় আন্তঃক্ষেত্রীয় আন্তঃগ্রন্থাগার আন্তঃগ্রহ আন্তঃগ্রহীয় আন্তঃচতুর্থক আন্তঃছায়াপথীয় আন্তঃজেলা আন্তঃযোগাযোগ আন্তঃথানা আন্তঃনগর আন্তঃনাক্ষত্রিক আন্তঃপাজরীয় আন্তঃপার্লামেন্টারি আন্তঃপ্রাদেশিক আন্তঃপ্রজনন আন্তঃপ্রজন্ম আন্তঃবক্ষীয় আন্তঃবিভাগ আন্তঃবিভাগীয় আন্তঃবিশ্ববিদ্যালয় আন্তঃভ্রাতৃসংঘীয় আন্তঃমন্ত্রণালয় আন্তঃরাজ্য আন্তঃশাস্ত্রীয় আন্তঃশহর আন্তঃসংযোগ আন্তঃসীমানা আন্তঃসম্পর্ক আন্তঃসম্পর্কিত আন্তউইকি আন্তক্রিয়া আনতা আনতাম আনতি আনতিস আনতে আনতেন আনতেম আনুতোষিক আনতুম আন্তরিক আন্ত্রিক আন্তরিকতা আন্তরিকতাপূর্ণ আন্তরিকতাহীন আন্তরিকভাবে আন্তর্জাতিক আন্তর্জাতিককেন্দ্র আন্তর্জাতিকচুক্তি আন্তর্জাতিকীকরণ আন্তর্জাতিকতাবাদ আন্তর্জাতিকতহবিল আন্তর্জাতিকভাবে আন্তর্জাতিকলিপি আন্তর্জাতিকসংস্থা আন্তর্ধ্বনিমালা আন্তর্পারমাণবিক আন্তর্সম্পর্ক আন্থ্রাক্স আন্দাজ আন্দাজি আন্দাম আন্দামান আন্দামানি আন্দালিব আন্দালুসিয়া আন্দিজ আন্দোলিত আন্দোলন আন্দোলনকারী আন্দোলনচালানো আন্দোলনজনিত আন্দোলনরত আন্দরকিল্লা আন্ধাইর আন্ধার আন্ধি আন্ধল আনন আনুন আনন্দ আনন্দউদ্যান আনন্দকন্দ আনন্দঘন আনন্দাদি আনন্দানুভূতি আনন্দাশ্রু আনন্দিত আনন্দিতকরণ আনন্দচন্দ্র আনন্দোৎসব আনন্দজনক আনন্দজনিত আনন্দদান আনন্দদানকারী আনন্দদায়ক আনন্দদায়িনী আনন্দধাম আনন্দধারা আনন্দধ্বনি আনন্দন আনন্দনিকেতন আনন্দপুর আনন্দপূর্ণ আনন্দবাজার আনন্দবিধান আনন্দবিধানকারী আনন্দবিহার আনন্দবর্ধন আনন্দভট্ট আনন্দমেলা আনন্দমোহন আনন্দমঠ আনন্দময় আনন্দময়ী আনন্দরূপ আনন্দলোক আনন্দলহরি আনন্দসাগর আনন্দসাধন আনন্দহীন আনন্দহীনতা আনুপাতিক আনপাবলিশড আনুপূর্ব আনুপূর্বিক আনুপূর্বিকভাবে আনুপূর্ব্য আনফিট আনব আনবার আনবি আনবে আনবেন আনবো আনুভূমিক আনুভূমিকভাবে আনুম আনুমানিক আনুমানিকভাবে আনমিত আনমন আনমনা আনমনীয় আনমনীয়া আনম্র আনর্থ আনর্থ্য আনুরূপ্য আনল আনলা আনলাইক আনলাম আনলি আনলে আনলেন আনলেম আনলুম আনুষঙ্গ আনুষঙ্গিক আনুষঙ্গিকতা আনুষ্ঠানিক আনুষ্ঠানিকতা আনুষ্ঠানিকভাবে আনসার আনসারিং আনয়ন আনয়নকারী আনয়নকর্তা আনয়নযথা আপ আপু আপকাওয়াস্তে আপকি আপক্ব আপখোরাকি আপগ্রেড আপগ্রেডেশন আপা আপাকা আপাণ্ডু আপাণ্ডুর আপাত আপাতঅসম্ভব আপাতকঠিন আপাতকঠোর আপাতত আপাতদর্শন আপাতদৃশ্য আপাতদৃষ্ট আপাতদৃষ্টি আপাতবিরোধী আপাতভাবে আপাতমান আপাতমধুর আপাতরমণীয় আপাতসফল আপাতস্ববিরোধী আপাদ আপাদমস্তক আপান আপামর আপামরজনসাধারণ আপামরসাধারণ আপার আপিল আপিস আপীত আপীন আপীল আপীড়িত আপীড়ন আপেক্ষিক আপেক্ষিকতা আপেক্ষিকতাবাদ আপেক্ষিকতাভিত্তিক আপেক্ষিকতারতত্ত্ব আপেক্ষিকতত্ত্ব আপেক্ষিকবাদ আপেক্ষিকভাবে আপেল আপোষ আপোষহীন আপোষহীনভাবে আপ্যায়িত আপ্যায়ন আপ্যায়নকারী আপডেট আপ্ত আপৎকাল আপ্তগরজি আপত্তি আপত্তিকর আপত্তিজ্ঞাপন আপত্তিজনক আপত্তিদায়ক আপত্তিহীন আপ্তবাক্য আপ্তবচন আপ্তসুখী আপদ আপদগ্রস্ত আপদধর্ম আপদবালাই আপদবিপদ আপদভঞ্জন আপদশান্তি আপন আপনকার আপনগরজ আপনা আপনাআপনি আপনাকে আপনাতে আপনাদিকে আপনাবিস্মৃত আপনার আপনারা আপনাহারা আপনি আপুনি আপনজন আপন্ন আপন্নসত্ত্বা আপনপর আপনভোলা আপনমন আপনসর্বস্ব আপনহারা আপ্রাণ আপরুচি আপ্লাব আপ্লাবিত আপ্লাবন আপ্লিকেশন আপ্লিকেশন্স আপলিঙ্ক আপলোড আপলোড আপ্লুত আপ্লূত আপ্লব আপস আপসোস আপসবিরোধী আপসরফা আপসহীন আফগান আফগানি আফগানিরা আফগানিস্তান আফগানী আফিং আফিম আফিমফল আফোটা আফছার আফজাল আফজালপুর আফুটা আফটার আফটারনুন আফুটন্ত আফতাব আফতাবউদ্দিন আফ্রিকা আফ্রিকাকেন্দ্রীয় আফ্রিকান আফ্রিকানস আফ্রিকাবাসী আফ্রিকামহাদেশ আফ্রিকারজাতি আফ্রিদি আফরিন আফরোজ আফরোজা আফ্রোদিতি আফসান আফসানা আফসানি আফসানো আফসোস আবু আবকার আবকারি আবক্ষ আবক্ষলম্বিত আবখোরা আবগার আবগারি আবাগী আবাছা আবাদ আবাদি আবাদযোগ্য আবাঁধা আবার আবারো আবারো আবাল আবালি আবালী আবাল্য আবালবৃদ্ধ আবালবৃদ্ধবনিতা আবালবৃদ্ধরমণী আবাস আবাসিক আবাস্থল আবাসন আবাসভূমি আবাসস্থল আবাহন আবাহনী আবাহনীচক্র আবিদ আবিদা আবির আবিরখেলা আবির্ভাব আবির্ভাবকাল আবির্ভাবস্থান আবির্ভূত আবির্ভূতা আবির্ভূতি আবির্ভবন আবিল আবিলতা আবিষ্কার আবিষ্কারক আবিষ্কারযোগ্য আবিষ্কারপূর্ব আবিষ্কৃত আবিষ্কৃতা আবিষ্ক্রিয়া আবিষ্করণ আবিষ্করণীয় আবিষ্কর্তা আবিষ্ট আবিষ্টমন আবীর আবীরখেলা আবেগ আবেগকেন্দ্রিক আবেগজাত আবেগজনিত আবেগধর্মী আবেগপরায়ণ আবেগপূর্ণ আবেগপ্রধান আবেগপ্রবণ আবেগময় আবেগসঞ্চার আবেগহীন আবেদ আবেদক আবেদন আবেদনকারী আবেদনাদি আবেদনীয় আবেদনযোগ্য আবেদনপত্র আবেশ আবেশক আবেশায়ন আবেশিত আবেশজনিত আবেশযুক্ত আবেশন আবেশবিভোর আবেষ্টক আবেষ্টিত আবেষ্টন আবেষ্টনী আবোল আবোলগ্রুপ আবোলতাবোল আবছা আবছায়া আবুজাফর আবজুশ আবডাল আবণ্টন আবৃত আবৃতকরণ আবৃতি আবৃত্ত আবৃত্তা আবৃত্তি আবদার আবদাল আবদ্ধ আবদ্ধক আবদ্ধকারী আবদ্ধকরণ আবদ্ধতা আব্দুর আবদুল আব্দুল আবদুল্লা আবদুল্লাহ আব্দুল্লাহ আব্দুল্লাহেল আব্দুল্লাহপুর আবুধাবি আবন্ধন আব্বু আবুবকর আব্বা আব্বাজান আব্বাস আব্বাসউদ্দিন আব্রু আবরক আবরাহাম আব্রাহাম আবরিত আবর্জিত আবর্জিতচিত্ত আবর্জন আবর্জনকারী আবর্জনা আবর্জনাপূর্ণ আবর্জনাভূমি আবর্জনামুক্ত আবরণ আবরণকারী আবরণী আবরণীযুক্ত আবরণীরূপ আবরণযুক্ত আবরণবস্ত্র আবরণমুক্ত আবরণহীন আবর্ত আবর্তক আবর্তিত আবর্তযুক্ত আবর্তন আবর্তনকাল আবর্তনী আবর্তনদণ্ড আবর্তনধর্মী আবর্তনভিত্তিক আবর্তনরত আবর্তনশীল আবর্তমান আব্রহ্ম আব্রহ্মস্তম্ভ আবুল আবশ্যক আবশ্যকীয় আবশ্যকীয়তা আবশ্যকতা আবশ্যকরণীয় আবশ্যিক আবশ্যিকভাবে আবশ্যতা আবহ আবহাওয়া আবহাওয়াগত আবহবিজ্ঞান আবহবিদ্যা আবহমান আবহমানকাল আবহমণ্ডল আবহমণ্ডলীয় আবহসংবাদ আবহসঙ্গীত আবড়া আভ আভা আভাং আভাঙ্গ আভাঙ্গা আভাঙা আভাযুক্ত আভাষ আভাষিত আভাষণ আভাস আভাসিত আভাসদায়ক আভাসমাত্র আভাসমান আভিজাতিক আভিজাতিকচিহ্ন আভিজাত্য আভিজাত্যগর্বী আভিজাত্যপূর্ণ আভিজন আভিধানিক আভিমুখ্য আভোগ আভোগী আভ্যুদয়িক আভ্যন্তর আভ্যন্তরিক আভ্যন্তরীণ আভূমি আভূমিনত আভরণ আভরণহীন আম আমু আমআম আমুক্ত আমগাছ আমগো আমগন্ধী আমা আমাকে আমাগো আমাজন আমাদের আমান আমানগঞ্জ আমানত আমানতি আমানতদার আমানতদারিতা আমানতদারী আমানুল্লাহ আমাবস্যা আমার আমাশা আমাশয় আমায় আমি আমিতা আমিতো আমিত্ব আমিত্ববোধ আমিত্বভাব আমিন আমিনা আমিনপুর আমিনবাজার আমিনুর আমিনুল আমির আমিরাত আমিরাবাদ আমিষ আমিষাশী আমিষবর্জিত আমিষবর্জন আমিষভোজী আমিষভোজন আমিষভোজনকারী আমচাষী আমীন আমীনরূপক আমীর আমচুর আমীরউদ্দিন আমেজ আমেদাবাদ আমেরিকা আমেরিকান আমেরত্বক আমোদ আমোদআহ্লাদ আমোদিত আমোদিনী আমোদী আমোদজনক আমোদন আমোদপ্রিয় আমোদপ্রিয়া আমোদপ্রমোদ আমোদপ্রমোদরত আমজাম আমজনতা আমট আমডাল আমতা আমতাআমতা আমৃত্যু আমতলা আমতলী আমদানি আমদানিকৃত আমদানিজনিত আমদানিরপ্তানি আমদানিশুল্ক আমুদে আমুদেপনা আমদরবার আমধুর আমন আমন্ত্রক আমন্ত্রিত আমন্ত্রিতা আমন্ত্রণ আমন্ত্রণকারী আমন্ত্রণমূলক আমন্ত্রয়িতা আমন্ত্রয়িত্রী আমনধান আমপারা আম্পায়ার আম্পায়ারদ্বয় আমবাগান আমবাত আমবালা আম্বিকা আম্বিকানগর আম্বিয়া আমবন আম্বর আমবড়া আম্মা আম্মাজান আমমোক্তার আমমোক্তারগিরি আমমোক্তারনামা আমর আম্র আম্রকানন আমরক্ত আমরা আমরি আমরণ আম্রপালি আম্রপল্লব আম্রফল আম্রমঞ্জরি আম্রমঞ্জরী আমরুল আম্রশাখা আমরস আমল আমূল আমলক আমলকী আমলা আমলাতান্ত্রিক আমলাতান্ত্রিকতা আমলাতেল আমলাতন্ত্র আমলান আমলানো আম্লিক আম্লিকা আম্লীকা আমলনামা আমশি আমসি আমস্টারডাম আমসত্ত্ব আমহাঁড়ি আমড়া আমড়াগাছি আময় আময়দা আর আরক আর্ক আর্কাইভ আর্কাইভস আরকান আরকি আরকিওলজি আর্কিটেকচার আর্কিটেক্ট আর্কিপেলাগো আর্কিব্যাক্টেরিয়া আর্কিবল্ড আর্কিমিডিস আরকজন আরকটি আর্কটিক আর্কটিকমেরু আরক্ত আরক্তিম আরক্তচক্ষু আরক্তনেত্র আরক্তনয়ন আরক্তমুখ আরক্তলোচন আর্কনেট আর্কফলা আরক্ষা আরক্ষিক আরক্ষী আরক্ষণ আর্গ আর্গন আর্গুমেন্ট আরা আরাকান আরাকানি আরাকানবাসী আরাকানরাজ্য আরাধক আরাধ্য আরাধ্যদেবতা আরাধ্যমান আরাধন আরাধনা আরাধনাকারী আরাধনাশক্তি আরাধনীয় আরাফাত আরাম আরামকেদারা আরামকুর্সি আরামদায়ক আরামপ্রিয় আরামপ্রিয়া আরামপ্রদ আরামবাগ আরারুট আরি আরিচা আরিফ আরিফুল আরিয়ান আরিয়ানা আরিয়াল আর্চ আর্চি আর্চডিউক আর্চবিশপ আরে আরেক আরেকজন আরেকদিক আরেকদিন আরেকবার আরেকরকম আরো আরেফিন আরেরে আরোগ্য আরোগ্যাতীত আরোগ্যনিকেতন আরোগ্যপ্রাপ্ত আরোগ্যলাভ আরোপ আরোপক আরোপকারী আরোপকৃত আরোপকরণ আরোপিত আরোপণ আরোপণকারী আরোপবাচক আরোহ আরোহিণী আরোহী আরোহণ আরোহণকারী আরোহণী আরোহণপূর্বক আর্জি আর্জেন্ট আর্জেন্টাইন আর্জেন্টিনা আর্জেন্টিনীয় আর্ট আর্টিকেল আর্টিফিশিয়াল আরটিভি আর্টিলারি আর্টিস্ট আর্যজাতি আর্যতা আর্যদেব আর্টপেপার আর্যপুত্র আর্যপথ আর্যভাষা আর্যভাষী আর্টস আর্টসেল আর্যসত্য আর্যসমাজ আর্যসমাজী আর্টহাউস আরণ্য আরণ্যক আরত আর্ত আরতি আর্তি আর্তজন আর্তনাদ আর্তনাদকারী আর্তনাদধ্বনি আর্তস্বর আর্থ আর্থকুয়েক আর্থকুয়েকস আর্থারক্লার্ক আর্থিক আর্থিকভাবে আর্থোপ্রোডা আর্থসামাজিক আরদালি আর্দালি আরদ্ধ আর্দ্র আর্দ্রক আর্দ্রতা আর্দ্রনয়ন আর্নল্ড আরব আরবান আরবি আরবিভাষী আরবজাতি আরব্য আরব্যোপন্যাস আরবদেশ আরবদেশীয় আরবসাগর আর্মাড আর্মাডিলো আরমান আরমানি আরমানিটোলা আরমানী আরমার্ড আর্মি আরমেনিয়া আর্মেনিয়া আর্মেনিয়ান আর্মেনীয় আর্মড আরম্ভ আরম্ভক আরম্ভকারী আরম্ভকাল আরম্ভকালীন আরম্ভিক আরম্ভস্থল আর্মস আর্মস্ট্রং আর্লি আরশাদ আরশি আরশিযুগল আরশোলা আর্সেনাল আর্সেনিক আর্সেনিকযুক্ত আল আলু আলংকারিক আলওয়ান আলকাটা আলকাতরা আলকেমি আলকুশি আলখাল্লা আলগ আলগা আলগাভাবে আলগোছ আলগোছভাবে আলঙ্কারিক আলা আলাইকুম আলাইবালাই আলাইহি আলাইহিসালাম আলাউদ্দিন আলাওল আলাদা আলাদাভাবে আলাদীন আলাপ আলাপআলোচনা আলাপকারী আলাপিত আলাপিনী আলাপী আলাপচারী আলাপযোগ্য আলাপন আলাপপরিচয় আলাপপ্রিয় আলাপসালাপ আলাভোলা আলামত আলাস্কা আলি আলিঙ্গন আলিঙ্গনকারী আলিঙ্গনাবদ্ধ আলিঙ্গনপাশ আলিনগর আলিপনা আলিপুর আলিফ আলিবাগ আলিবর্দি আলিম আলিম্পন আলিম্পনা আলিরাজপুর আলী আলীগড় আলীপুর আলীবর্দি আলীম আলেকজান্ডার আলেকজান্দ্রা আলেকজান্দ্রিয়া আলেখা আলেখ্য আলেখ্যযুক্ত আলেখ্যদর্শন আলেখ্যসমর্পিত আলোচনা আলেম আলেমসমাজ আলেয়া আলেয়ারআলো আলো আলোআঁধারি আলোক আলোকিত আলোকচক্র আলোকচিত্র আলোকচিত্রগ্রাহক আলোকচিত্রিত আলোকচ্ছটা আলোকীয় আলোকোজ্জ্বল আলোকছটা আলোকযুক্তা আলোকতীব্রতা আলোকতরঙ্গ আলোকতড়িৎ আলোকদান আলোকদায়িনী আলোকধারা আলোকন আলোকপাত আলোকপ্রাপ্ত আলোকপ্রাপ্তি আলোকবিজ্ঞান আলোকবিজ্ঞানী আলোকবিদ্যা আলোকবিন্দু আলোকবিশিষ্ট আলোকবর্তিকা আলোকবর্ষ আলোকবর্ষী আলোকমণ্ডল আলোকময় আলোকরশ্মি আলোকরশ্মিগুচ্ছ আলোকরশ্মিবর্ষণ আলোকলাভ আলোকলতা আলোকশক্তি আলোকসংকেত আলোকসংবেদী আলোকসঙ্কেত আলোকসজ্জা আলোকস্তম্ভ আলোকসম্পাত আলোকহীন আলোকহীনতা আলোচক আলোচকরা আলোচিত আলোচ্য আলোচ্যমান আলোচনা আলোচনাকারী আলোচনাকাল আলোচনাক্রমে আলোচনাচক্র আলোচনাদি আলোচনারত আলোচনার্থ আলোচনাস্থান আলোচনাসভা আলোচনাহীন আলোচনী আলোচনীয় আলোছায়া আলোজ্বলা আলোপাখা আলোপ্যাথি আলোবাতাস আলোল আলোলবিলোল আলোহিত আলোহীন আলোড়ক আলোড়িত আলোড়ন আলোড়নকারী আলোড়নদণ্ড আলোড়নসৃষ্টিকারী আলোয়ান আলজিব আলজিভ আলজেরিয়া আলজেরীয় আলঝাইমার্স আলঝেইমার্স আল্টিমেট আল্টিমেটাম আলটিমেটলি আলটপকা আলট্রা আলট্রাসাউন্ড আলতা আলতাফ আলতামিরা আলতো আলতোভাবে আলুথালু আলনা আলুনি আলুনী আলপাকা আলপিন আলুপোস্তা আলপথ আলপনা আলপুর আল্পস আলফা আলফাডাঙ্গা আলফাতিহা আলফারশ্মি আলফ্রেড আলফ্রেডো আলফ্রেদ আলবাটি আলবাট্রস আলবাত আলবার্ট আলবার্তো আলবাল আলবিদা আলবেদা আলবেনিয়া আলবেনীয় আলুবোখারা আলবত আলবৎ আলবদর আলভী আলুভর্তা আলম আলমগির আলমগঞ্জ আলমারি আলমেরা আলমপানি আলমপুর আলুরদোষ আল্লা আল্লামা আল্লারাখা আল্লারবান্দা আল্লাহ আল্লাহু আল্লাহ্‌ আল্লাহতালা আলুলায়িত আলশামস আলস আলসার আলুসিদ্ধ আলসে আলসেমি আলসেমো আলস্য আলস্যজনক আলস্যজনিত আলস্যযুক্ত আলস্যত্যাগ আলস্যদোষ আলস্যহীন আলহাজ্ব আলহামদুলিল্লাহ আলহামদুলিল্লাহ্‌ আলয় আশ আশু আঁশ আশংকা আশংকাজনক আশংকাদায়ক আশংকাপ্রদ আশংকাস্থল আশংকিত আশংকনীয় আশংসু আশংসা আশংসিত আশংসন আঁশওয়ালা আশক আশকারা আশকারাদান আশুগ আশুগামিনী আশুগামী আশুগঞ্জ আশুগতি আশঙ্কা আশঙ্কাজনক আশঙ্কাদায়ক আশঙ্কাপ্রদ আশঙ্কাস্থল আশঙ্কিত আশঙ্কনীয় আশা আশাকরি আশাজাগানিয়া আশাজনক আশাযুক্ত আশাটোড়ী আশাটোড়ীরাগ আশাতিরিক্ত আশাতীত আশাতীতভাবে আশাতীতরকম আশাদায়ক আশান্বিত আশান্বিতা আশানুরূপ আশাপতি আশাপূরণ আশাপূর্ণা আশাপ্রদ আশাবাদ আশাবাদী আশাব্যঞ্জক আশাবরি আশাবরী আশাভঙ্গ আশাভঙ্গজনিত আশাভরসা আশারাগ আঁশালো আশালতা আশাহীন আশাহীনতা আশাহত আশি আশিক আশিকা আশিকুর আশিস আশিয়ান আশী আশীবিষ আশ্চর্য আশ্চর্যকথা আশ্চর্যান্বিত আশ্চর্যজনক আশ্চর্যজনকভাবে আশ্চর্যদায়ক আশ্চর্যবোধক আশ্চর্যরকম আশ্চর্যরকমভাবে আশীর্বাদ আশীর্বাদক আশীর্বাদকারী আশীর্বাদকাল আশীর্বাদিকা আশীর্বাদী আশীর্বাদপ্রাপ্তি আশীর্বচন আশীর্বচনযুক্ত আশেপাশে আশৈশব আশোকা আশোয়ারি আঁশযুক্ত আঁশটে আশুতোষ আশুধান্য আশনা আশনাই আশুপাতী আশপাশ আঁশফল আশ্বাস আশ্বাসক আশ্বাসিত আশ্বাসূচক আশ্বাসদাতা আশ্বাসদান আশ্বাসদানকারী আশ্বাসদায়ক আশ্বাসন আশ্বাসবাণী আশ্বাসব্যঞ্জক আশ্বাসহীন আশ্বিন আশ্বিনমাস আশ্বস্ত আঁশবহুল আশুরা আশরাফ আশরাফউদ্দিন আশরাফপুর আশরাফুল আশ্রিত আশ্রিতা আশ্রিতজন আশ্রিতবৎসল আশ্রিতবৎসলা আশ্রম আশ্রমিক আশ্রমী আশ্রমধর্ম আশ্রমবালক আশ্রমবাসী আশ্রয় আশ্রয়কারী আশ্রয়কেন্দ্র আশ্রয়কর্তা আশ্রয়গ্রহণ আশ্রয়গ্রহণকারী আশ্রয়ার্থিনী আশ্রয়ার্থী আশ্রয়ী আশ্রয়চ্যুত আশ্রয়ণ আশ্রয়ণীয় আশ্রয়ণীয়া আশ্রয়দাতা আশ্রয়দান আশ্রয়প্রাপ্ত আশ্রয়প্রার্থী আশ্রয়প্রদান আশ্রয়রূপে আশ্রয়শূন্য আশ্রয়স্থল আশ্রয়সন্ধানী আশ্রয়হীন আশ্রয়হীনতা আশ্লিষ্ট আশুলিয়া আশ্লেষ আঁশহীন আষাঢ়িয়া আষাঢ়ে আষাঢ় আষাঢ়মাস আষ্টেপৃষ্ঠে আস আসক আসুক আস্কারা আসক্ত আসক্তি আসক্তিকর আসক্তিপূর্ণ আসক্তিহীন আসক্তিহীনতা আস্কন্দিত আসগর আসঙ্গ আসঙ্গলিপ্সু আসঙ্গলিপ্সা আসা আসাআসি আসাযাওয়া আসাদ আসাদগেট আসাদুজ্জামান আসাদুল আসাদুল্লাহ আসান আসানসোল আসাবরদার আসাম আসামাত্র আসামি আসামী আসার আসারকাঠ আসায় আসি আসিত আসিতাম আসিতিস আসিতে আসিতেছ আসিতেছি আসিতেছিল আসিতেছিলাম আসিতেছিলি আসিতেছিলে আসিতেছিলেন আসিতেছিস আসিতেছে আসিতেছেন আসিতেন আসিদ্ধ আসিফ আসিবার আসিবি আসিবে আসিবেন আসিমভ আসিলাম আসিলি আসিলে আসিলেন আসিস আসিয়া আসিয়াছ আসিয়াছি আসিয়াছিল আসিয়াছিলাম আসিয়াছিলি আসিয়াছিলে আসিয়াছিলেন আসিয়াছিস আসিয়াছে আসিয়াছেন আসীন আসীনা আসে আসেন আসেনা আসেনি আসেননি আসো আসোবার আসোয়ার আসছ আসছি আসছিল আসছিলাম আসছিলি আসছিলে আসছিলেন আসছিলেম আসছিলো আসছিলনা আসছিলুম আসছিস আসছে আসছেন আসত আস্ত আস্তা আস্তানা আস্তাবল আসতাম আসতি আস্তিক আস্তিকতা আস্তিকত্ব আস্তিন আসতিস আস্তীর্ণ আসতে আস্তে আসতেছি আসতেছে আসতেন আসতেম আসতো আসত্তি আস্তব্যস্ত আসতুম আস্তর আস্তরণ আস্তরণযুক্ত আস্থা আস্থান আস্থাবান আস্থাশীল আস্থাহীন আস্থাহীনতা আস্থায়ী আসন আসুন আসনগ্রহণ আসনাই আসন্ন আসন্নকাল আসন্নপ্রসবা আসন্নমৃত্যু আসনপিঁড়ি আসনসংখ্যা আসনসংরক্ষণ আস্পর্ধা আস্ফাল আস্ফালিত আস্ফালন আস্ফালনকারী আস্ফালনপূর্বক আস্ফোট আস্ফোটন আসব আস্বাদ আস্বাদক আস্বাদগ্রহণ আস্বাদগ্রহণকারী আস্বাদিত আস্বাদ্য আস্বাদযোগ্য আস্বাদন আস্বাদনীয় আসবাব আসবাবপত্র আসবে আসবেই আসবেন আসবেনা আসবো আসমান আসমানি আসমুদ্র আসমুদ্রহিমাচল আসর আসুর আসুরিক আসুরিকী আসুরী আসরজমা আসল আসলাম আসলি আসলেন আসলেম আসলের আসলো আসলুম আসসালাতু আসসালামু আসহাব আহ আহা আহাজারি আহাদ আহাম্মক আহাম্মুক আহাম্মদ আহামরি আহার আহারাদি আহারান্ত আহারার্থী আহারী আহার্য আহারবিহার আহিত আহেল আহেলি আহো আহত আহুত আহূত আহৃত আহতাবস্থা আহুতি আহূতি আহতথাকা আহ্নিক আহ্নিকগতি আহবান আহ্বান আহ্বানকারী আহ্বানধ্বনি আহ্বানপূর্বক আহ্বানবাণী আহবায়ক আহ্বায়ক আহ্বায়িকা আহ্বায়িত আহমাদিয়া আহমেদ আহমেদগড় আহমেদাবাদ আহমেদনগর আহমদ আহমদিয়া আহমদপুর আহম্মদ আহরক আহরিত আহরণ আহরণকারী আহরণযোগ্য আহরণপূর্বক আহল আহ্লাদ আহ্লাদিত আহ্লাদী আহ্লাদজনক আহ্লাদযুক্ত আহ্লাদন আহসান আহসানউদ্দিন আহসানউল্লাহ আহসানুদ্দিন আহসানুল আহসানুল্লাহ আড় আড়ং আড়ংঘাটা আড়ংধোলাই আড়কাটি আড়কাঠ আড়কাঠা আড়কাঠি আড়কোলা আড়খেমটা আড়গিলে আড়গড়া আড়ঘোমটা আড়ঙ্গ আড়ঙ্গঘাটা আড়ঙ্গধোলাই আড়া আড়াআড়ি আড়াআড়িভাবে আড়াই আড়াইঅক্ষরে আড়াইঘন্টা আড়াইসের আড়াইহাজার আড়াইহাতি আড়াঠেকা আড়ানা আড়ানারাগ আড়ানি আড়ানী আড়াল আড়ালকারী আড়ি আড়িপাতা আড়িয়াল আড়চোখ আড়ে আড়েদিঘে আড়েহাতে আড়ত আড়তদার আড়ৎদার আড়তদারি আড়ৎদারি আড়দৃষ্টি আড়নয়ন আড়পাগলা আড়পার আড়বাঁশি আড়ভাবে আড়মোড়া আড়ম্বর আড়ম্বরি আড়ম্বরপূর্ণ আড়ম্বরপ্রধান আড়ম্বরবর্জিত আড়ম্বরশূন্য আড়ম্বরহীন আড়ষ্ট আড়ষ্টতা আড়ষ্টভাব আয় আয়ু আয়কৃত আয়কর আয়করদান আয়গত আয়া আয়াত আয়াতুল্লাহ আয়ারল্যান্ড আয়ারল্যান্ডীয় আয়াস আয়াসসাধ্য আয়াসহীনতা আয়েগা আয়েগি আয়োজন আয়েন আয়েশ আয়েশা আয়েশি আয়েস আয়েসি আয়োগ আয়োজক আয়োজিত আয়োজন আয়োজনকারী আয়োজনমালা আয়োডাইড আয়োডিন আয়জনক আয়ুযুক্ত আয়ত আয়তকার আয়তক্ষেত্র আয়তক্ষেত্রাকার আয়তঘন আয়তাকার আয়তি আয়তিক আয়তচিত্র আয়ত্ত আয়ত্তাধীন আয়তন আয়তনগত আয়তনেত্র আয়তনজনিত আয়তনযুক্ত আয়তলোচন আয়তলোচনা আয়ুধ আয়ন আয়না আয়নাইজেসন আয়নাদার আয়নিক আয়নিত আয়নিয়ন্ত্রণ আয়নীকরণ আয়নীভবন আয়নীয় আয়নোস্ফিয়ার আয়নন্ত আয়নবাদ আয়নমণ্ডল আয়নসৃষ্টিকারী আয়পদ্ধতি আয়ব্যয় আয়ব্যয়ক আয়রে আয়ুরেখা আয়রন আয়ুর্বিজ্ঞান আয়ুর্বেদ আয়ুর্বেদিক আয়ুর্বেদী আয়ুর্বেদীয় আয়ুর্বৃদ্ধি আয়ুর্বৃদ্ধিকর আয়ুষ্কাল আয়ুষ্কর আয়ুষ্মান আয়ুষ্মতী া".split(" "),
              w_i: "ই ইংগিত ইংরাজ ইংরাজি ইংরেজ ইংরেজি ইংরেজিচলচ্চিত্র ইংরেজিনাম ইংরেজিভাষা ইংরেজিভাষী ইংরেজজাতি ইংরেজবাহিনী ইংরেজভাবাপন্ন ইংরেজভাষী ইংরেজরাজত্ব ইংরেজশাসন ইংলিশ ইংলিশম্যান ইংল্যান্ড ইউকে ইউকেন ইউক্যালিপটাস ইউক্রেইন ইউক্রেন ইউক্রেনীয় ইউক্লিড ইউক্লিডীয় ইউজ ইউজার ইউজড ইউজনেট ইউজলেস ইউটিউব ইউটিলাইজ ইউটিলিটি ইউডোরা ইউনাইটেড ইউনানি ইউনিকোড ইউনিকোডভিত্তিক ইউনিকর্ন ইউনিক্স ইউনিজয় ইউনিট ইউনিটি ইউনিফিকেশন ইউনিফরম ইউনিফর্ম ইউনিফর্মিটি ইউনিবিজয় ইউনিভার্স ইউনিভারসাল ইউনিভার্সাল ইউনিভারসিটি ইউনিভার্সিটি ইউনিসেফ ইউনিয়ন ইউনিয়নবোর্ড ইউনেস্কো ইউনো ইউনুছ ইউনুস ইউপি ইউপ্যাক ইউফোরিয়া ইউরিয়া ইউরেকা ইউরেটার ইউরেথ্রা ইউরেনাইল ইউরেনাস ইউরেনিয়াম ইউরেশিয়া ইউরেশিয়ান ইউরেশীয় ইউরো ইউরোকাপ ইউরোপ ইউরোপকেন্দ্রীয় ইউরোপিয়ান ইউরোপীয় ইউরোপীয়দল ইউরোপমহাদেশ ইউসুফ ইউসুফগঞ্জ ইকুইটি ইকুইপমেন্ট ইকুইভ্যালেন্ট ইকুইভ্যালেন্স ইকার ইকারুস ইকেবানা ইকো ইকোনোমিক ইকোনোমিকস ইকোনমিক ইকোনমিকস ইকোনমিক্স ইকোপার্ক ইকোলজি ইকনোমিক ইকনোমিকস ইকনমিক ইকনমিকস ইকনমিক্স ইকবাল ইক্ষু ইক্ষুজাত ইক্ষুদণ্ড ইক্ষুরস ইক্ষুসমুদ্র ইকড়ি ইকুয়ালিটি ইকুয়েডোর ইকুয়েডর ইকুয়েশন ইখতিয়ার ইখতিয়ারউদ্দিন ইখলাস ইগলু ইঙ্গ ইঙ্গুইনাল ইঙ্গিত ইঙ্গিতকার ইঙ্গিতকারী ইঙ্গিতবহ ইঙ্গিতময় ইঙ্গবঙ্গ ইচিং ইচ্ছুক ইচ্ছা ইচ্ছাকারী ইচ্ছাকৃত ইচ্ছাক্রমে ইচ্ছাজ্ঞাপক ইচ্ছাযুক্ত ইচ্ছাধীন ইচ্ছানুযায়ী ইচ্ছানুবর্তিতা ইচ্ছানুরূপ ইচ্ছানুসারে ইচ্ছাপত্র ইচ্ছাপূরণ ইচ্ছাবিরুদ্ধ ইচ্ছামাফিক ইচ্ছামত ইচ্ছামতো ইচ্ছামৃত্যু ইচ্ছামতন ইচ্ছাময় ইচ্ছাময়ী ইচ্ছার্থক ইচ্ছাশক্তি ইচ্ছাসুখ ইচ্ছাসত্ত্বেও ইচ্ছে ইচ্ছেজাগা ইচ্ছেমত ইঁচড় ইঁচড়েপাকা ইছাপুর ইছামতী ইজ ইজা ইজাজত ইজার ইজারা ইজারাদার ইজারদার ইজি ইজিচেয়ার ইজিপ্ট ইজিলি ইজ্জত ইজ্জৎ ইজ্জতভ্রষ্ট ইজরাইল ইজরায়েল ইঞ্চ ইঞ্চি ইঞ্জিন ইঞ্জিনিয়ার ইঞ্জিনিয়ারিং ইঞ্জিনিয়ারস ইঞ্জিনিয়ার্স ইঞ্জিনচালিত ইঞ্জিনবিহীন ইঞ্জিনরুম ইঞ্জিল ইট ইটখোলা ইটা ইটাখোলা ইটানগর ইটামুগুর ইটারেশন ইটার্নিটি ইটালি ইটালিয়ান ইটালীয় ইটি ইটিসিটি ইটনা ইটপাটকেল ইটপাথর ইট্রিয়াম ইডিয়ট ইডেন ইতঃপূর্বে ইতালি ইতালিয়া ইতালিয়ান ইতালিয়ানো ইতালীয় ইতি ইতিউতি ইতিকথা ইতিকর্তব্য ইতিকর্তব্যতা ইতিকর্তব্যবিমূঢ় ইতিকর্তব্যবিমূঢ়তা ইতিপূর্বে ইতিবাচক ইতিবাচকতা ইতিবৃত্ত ইতিবৃত্তাকার ইতিমধ্যে ইতিহাস ইতিহাসকর্ম ইতিহাসখ্যাত ইতিহাসখ্যাতি ইতিহাসাশ্রয়ী ইতিহাসচলন ইতিহাসজ্ঞ ইতিহাসবিজ্ঞান ইতিহাসবিদ ইতিহাসবিশ্রুত ইতিহাসবেত্তা ইতিহাসরচয়িতা ইতিহাসসংযুক্ত ইতো ইতোপূর্বে ইতোমধ্যে ইত্যাকার ইত্যাদি ইত্যাদিস্থানীয় ইত্যনুসারে ইত্যবকাশে ইত্যবসরে ইত্তেফাক ইত্তেহাদ ইতনা ইতর ইতরামি ইতরামো ইতরেতর ইতরতা ইতরবিশেষ ইতরভাষা ইতস্তত ইতস্ততবিক্ষিপ্ত ইতস্ততভাবে ইথাইমোলজি ইথাইল ইথানল ইথার ইথারিং ইথারীয় ইথারজনিত ইথারনেট ইথিওনামাইড ইথিওপিয়া ইথিওপিয়ান ইথিওপীয় ইথিয়পীয় ইথে ইথেন ইদানীং ইদানীংকাল ইদানীন্তন ইঁদারা ইঁদুর ইদ্রিস ইঁদুরশিকার ইন ইনকা ইনকাবাসী ইনকাম ইনকার ইনকিলাব ইনকর্পোরেটেড ইনক্লুড ইনাম ইনামুল ইনি ইনিংস ইনিউমারেশন ইনিশিয়াল ইনিশিয়ালি ইনিশিয়েটিভ ইনিয়ে ইনিয়েবিনিয়ে ইনো ইনোভেটর ইনোসেন্ট ইনোসেন্স ইনজিন ইনজিল ইনজেকশন ইনজুরি ইনটু ইন্টার ইন্টারউইকি ইন্টারকন্টিনেন্টাল ইন্টারেক্টিভ ইন্টারেকশন ইন্টারেস্ট ইন্টারেস্টিং ইন্টারেস্টেড ইন্টারোগেশন ইন্টার‌্যাক্টিভ ইন্টার‌্যাক্টিভিটি ইন্টার‌্যাকশন ইন্টার‌্যাকশনস ইন্টার্ন ইন্টারনাল ইন্টারনালি ইন্টারনিক ইন্টার্নিশিপ ইন্টারনেট ইন্টারনেটভিত্তিক ইন্টারন্যাশনাল ইন্টারন্যাশনালিজম ইন্টার্নশিপ ইন্টারপোল ইন্টারপ্রেট ইন্টারপ্রেটকৃত ইন্টারপ্রেটার ইন্টারপ্রেটেশন ইন্টারফেস ইন্টারফেয়ারেন্স ইন্টার্ভিউ ইন্টারমিডিয়েট ইন্টার্র্নি ইন্টারসেকশন ইন্টারস্টিসিয়াল ইন্টারস্টেট ইন্টিগ্রাল ইন্টিগ্রেটেড ইন্টিগ্রেটর ইন্টিগ্রেশন ইনটেক ইন্টেগ্রাল ইন্টেগ্রিটি ইন্টেগ্রেট ইন্টেগ্রেশন ইনটেল ইন্টেল ইনটেলিজেন্ট ইন্টেলিজেন্স ইন্টেলেকচুয়াল ইন্ট্রানেট ইন্ট্রাভেনাস ইন্ট্রডিউস ইন্ডাক্টর ইন্ডাক্সন ইন্ডাস্ট্রি ইন্ডাস্ট্রিয়াল ইন্ডিক ইনডিকেটর ইনডিকেটরস ইন্ডিজ ইনডিপেন্ডেন্ট ইন্ডিপেনডেন্ট ইন্ডিপেন্ডেন্ট ইন্ডিপেন্ডেন্স ইনডিয়াম ইনডেক্স ইনডেক্সিং ইন্ডেক্সিং ইনডেন্ট ইন্ডেন্ট ইনডেমনিটি ইনডোর ইন্তিজাম ইন্তেকাল ইন্তেজার ইন্দু ইন্দুকান্ত ইন্দুকলা ইন্দিবর ইন্দিরা ইন্দো ইন্দোইউরোপীয় ইন্দোচায়না ইন্দোনেশিয়া ইন্দোনেশিয়ান ইন্দোনেশীয় ইন্দুনিভানন ইন্দুনিভাননা ইন্দুনিভাননী ইন্দুপ্রভা ইন্দুভূষণ ইন্দুমুখী ইন্দুমাধব ইন্দুমৌলি ইন্দুমতী ইন্দুর ইন্দ্র ইন্দ্রকন্যা ইন্দ্রগোপ ইন্দ্রগড় ইন্দ্রাণী ইন্দ্রালয় ইন্দ্রাসন ইন্দ্রায়ুধ ইন্দ্রিয় ইন্দ্রিয়ক্ষোভ ইন্দ্রিয়গোচর ইন্দ্রিয়গত ইন্দ্রিয়গম্য ইন্দ্রিয়গ্রাহ্য ইন্দ্রিয়গ্রাহ্যভাবে ইন্দ্রিয়াতীত ইন্দ্রিয়াসক্ত ইন্দ্রিয়জগৎ ইন্দ্রিয়জাত ইন্দ্রিয়জয় ইন্দ্রিয়জয়কারী ইন্দ্রিয়জয়ী ইন্দ্রিয়দোষ ইন্দ্রিয়দমন ইন্দ্রিয়দমনকারী ইন্দ্রিয়নিগ্রহ ইন্দ্রিয়পর ইন্দ্রিয়পরায়ণ ইন্দ্রিয়পরায়ণতা ইন্দ্রিয়পরতন্ত্র ইন্দ্রিয়পরবশ ইন্দ্রিয়পরবশতা ইন্দ্রিয়বৈকল্য ইন্দ্রিয়বৃত্তি ইন্দ্রিয়মুখ ইন্দ্রিয়লব্ধ ইন্দ্রিয়শাসন ইন্দ্রিয়সংযম ইন্দ্রিয়সুখ ইন্দ্রিয়সেবা ইন্দ্রিয়সেবী ইন্দ্রিয়স্থান ইন্দ্রিয়হীন ইন্দ্রচাপ ইন্দ্রজাল ইন্দ্রজালিক ইন্দ্রজালবিদ্যা ইন্দ্রজিত ইন্দ্রজিৎ ইন্দ্রত্ব ইন্দ্রধনু ইন্দ্রনগর ইন্দ্রনাথ ইন্দ্রনীল ইন্দ্রপাত ইন্দ্রপাল ইন্দ্রপতন ইন্দ্রপত্নী ইন্দ্রপুত্র ইন্দ্রপুরী ইন্দ্রপ্রস্থ ইন্দ্রবরুণাদি ইন্দ্রমোহন ইন্দ্রমণি ইন্দ্রমণির ইন্দ্রলাল ইন্দ্রলোক ইন্দ্রলুপ্ত ইন্দ্রসেন ইন্দ্রসুত ইন্দ্রসভা ইন্দুলেখা ইন্দুশেখর ইন্ধন ইনপুট ইনফান্ডিবুলাম ইনফান্ডিবুলার ইনফিনিট ইনফিনিটি ইনফিল্ড ইনফেকশন ইনফো ইনফোকম ইনফোটেইনমেন্ট ইনফোবক্স ইনফোসিস ইনফ্যান্ট ইনফ্যান্ট্রি ইনফরমেশন ইনফ্লুয়েঞ্জা ইনভাইটেশন ইনভার্ট ইনভারশন ইনভায়রনমেন্ট ইনভিজিলেটর ইনভিসিবল ইনভেন্টর ইনভেনশনস ইনভেস্টিগেশন ইনভেস্টমেন্ট ইনভ্যারিয়েন্ট ইনভল্যুশনাল ইনলাইন ইনলেট ইনশাআল্লাহ ইনশাআল্লাহ্‌ ইনশাল্লাহ ইনস্ক্রিপশন ইনসাইডার ইনসান ইনসানিয়াত ইনসাফ ইন্সিডেন্ট ইনসেট ইনসেন্টিভ ইন্সটিটিউট ইন্সটিটিউশন ইন্সটিটিউশনাল ইনস্ট্যান্ট ইনসট্রাক্টর ইনস্ট্রাক্টর ইন্সট্রাকটর ইন্সট্রাক্টর ইন্সট্রাকশন ইনস্যুরেন্স ইনস্ট্রুমেন্টস ইন্সটল ইন্সটলার ইন্সটলেশন ইন্সপিরেশন ইনস্পেকটর ইনস্পেক্টর ইন্সপেক্টর ইন্সপেকশন ইনসুলিন ইনহিবিটরি ইনহেরিটেন্স ইপিআর ইপিআরটিসি ইপিডি ইফ ইফেক্ট ইফতার ইফতারি ইফতেখার ইফতেখারউদ্দিন ইফতেখারুজ্জামান ইবাদত ইবাদতখানা ইবনে ইবরাহিম ইব্রাহিম ইবরাহীম ইব্রাহীম ইবলিশ ইবলিস ইভ ইভিপি ইভেন ইভেন্ট ইভোলিউশন ইভনিং ইভল্যুশন ইমান ইমানদার ইমানদারি ইমানুয়েল ইমাম ইমামগঞ্জ ইমামুজ্জামান ইমামত ইমামুদ্দিন ইমামুদ্দীন ইমামবাড়া ইমারত ইমারৎ ইমারতি ইমারসন ইমিউনোগ্লোবিউলিন ইমিউনোলজিক্যাল ইমিউনলজি ইমিনো ইমেইল ইমেজ ইমেজিং ইমেজেস ইমেজরেডি ইমেডিয়েট ইমোশনাল ইম্যাজিন ইম্যুনো ইমতিহান ইমতিয়াজ ইমদাদুল ইমন ইমনরাগ ইমপেরিয়াল ইম্পেরিয়াল ইমপেয়ারমেন্ট ইমপ্যাক্ট ইম্প্রেশোনিজম ইম্প্রেশন ইম্প্রেশনিজম ইমপ্রেশনিস্ট ইম্প্রেশনিস্ট ইমপ্রেশনস ইমপ্রেস ইম্পরট্যান্ট ইম্প্রুভ ইমপ্রুভমেন্ট ইম্প্রুভমেন্ট ইমপ্লিমেন্ট ইমপ্লিমেন্টেশন ইমপ্ল্যান্ট ইম্পসিবল ইমরান ইমুলেটর ইরা ইরাক ইরাকি ইরাকী ইরাদা ইরান ইরানি ইরানী ইরানীয় ইরানীয়ান ইরাবতী ইরি ইরিডিয়াম ইরিত্রিয়া ইরিধান ইরশাদ ইলা ইলামবাজার ইলাস্টিক ইলাস্টিসিটি ইলাস্ট্রেট ইলাস্ট্রেটেড ইলাস্ট্রেটর ইলাহ ইলাহি ইলিউমিনেসন ইলিউশান ইলিউশনস ইলিউসিভ ইলিরিয়ান ইলিরীয় ইলিশ ইলিশেরডিম ইলিয়াড ইলিয়াম ইলিয়াস ইলিয়টগঞ্জ ইলেক্টেড ইলেক্ট্রা ইলেকট্রিক ইলেকট্রিকাল ইলেকট্রিক্যাল ইলেক্ট্রিক্যাল ইলেক্ট্রিশিয়ান ইলেক্ট্রিসিটি ইলেক্ট্রো ইলেক্ট্রোকার্ডিওগ্রাফ ইলেক্ট্রোকেমিস্ট ইলেকট্রোটেকনিক্যাল ইলেকট্রোমিটার ইলেক্ট্রোমেকানিক্যাল ইলেক্ট্রোমেক্যানিক্যাল ইলেক্ট্রোম্যাগনেটিক ইলেক্ট্রোলাইট ইলেকট্রন ইলেকট্রনিক ইলেক্ট্রনিক ইলেকট্রনিকা ইলেকট্রনিকস ইলেকট্রনিক্স ইলেক্ট্রনিকস ইলেক্ট্রনিক্স ইলেকট্রনীয় ইলেক্ট্রনীয় ইলেকশন ইল্লা ইল্লাল্লাহ ইল্লাল্লাহু ইলশাগুঁড়ি ইলশে ইলশেগুঁড়ি ইলুশনিস্ট ইশক ইশকাপন ইশকাবন ইশকুল ইশারা ইশতিহার ইশতিয়াক ইশতেহার ইশপ ইষ্ট ইষ্টক ইষ্টকুটুম্ব ইষ্টকর্ম ইষ্টি ইষ্টিকুটুম ইষ্টিপত্র ইষ্টচিন্তা ইষ্টজন ইষ্টদেব ইষ্টদেবতা ইষ্টনাম ইষ্টপূরণ ইষ্টবিয়োগ ইষ্টমন্ত্র ইষ্টমন্ত্রাদি ইষ্টমন্ত্রদান ইষ্টলাভ ইষ্টসাধন ইষ্টসিদ্ধি ইস্কাটন ইস্কান্দার ইস্কান্দারিয়া ইস্কান্দর ইসকাপন ইস্কাবন ইস্কিমিয়া ইস্ক্রুপ ইসাবেল ইস্ট ইস্যু ইস্টওয়েস্ট ইস্যুকৃত ইস্টার ইস্টার্ন ইস্টিমার ইস্টুপিট ইসটুপিড ইস্টবেঙ্গল ইস্তক ইস্তকনাগাত ইস্তকনাগাদ ইস্তাফা ইস্তাম্বুল ইস্তাহার ইস্তিরি ইস্তিহার ইস্তেমাল ইস্তেহার ইস্তফা ইস্ত্রি ইস্ত্রুপ ইস্পাত ইস্পাতনগরী ইস্পাতনির্মিত ইস্পাহান ইস্পাহানী ইসবগুল ইসমাইল ইসমাইলি ইসরাইল ইসরাইলি ইসরাইলী ইসরাফিল ইসরায়েল ইসলাম ইসলামাবাদ ইসলামি ইসলামিক ইসলামিকসংস্থা ইসলামিয়া ইসলামী ইসলামীজোট ইসলামীয় ইসলামেরখলিফা ইসলামেরনবী ইসলামধর্ম ইসলামপন্থী ইসলামপুর ইসলামবাদী ইসলামবিরোধী ইসলামশাস্ত্র ইসলামশাস্ত্রানুযায়ী ইসলামসেক্টর ইসহাক ইহ ইহকাল ইহা ইহজগৎ ইহজীবন ইহজন্ম ইহুদি ইহুদিকরণ ইহুদিধর্ম ইহুদিরাষ্ট্র ইহুদী ইহুদীধর্ম ইহুদীবাদ ইহবাদ ইহবাদী ইহলোক ইহসান ইয়াকুব ইয়াঙ্কি ইয়াঙ্গুন ইয়াজ ইয়াজউদ্দিন ইয়াজউদ্দীন ইয়াজিদ ইয়াজুজ ইয়াজদানী ইয়াজুদ্দিন ইয়াদ ইয়াদগির ইয়াপ ইয়ামিন ইয়ার ইয়ার্কি ইয়ার্ড ইয়ারবকশি ইয়ারস ইয়ার্স ইয়াশিকা ইয়াসিন ইয়াসির ইয়াসুজিরো ইয়াসমিন ইয়াহ ইয়াহু ইয়াহুগ্রুপ ইয়াহিয়া ইয়ে ইয়েট ইয়েন ইয়েপ ইয়েমেন ইয়েমেনীয় ইয়েল ইয়েলিং ইয়েলো ইয়েশিম ইয়েস ইয়োকোহামা ইয়োগো ইয়োগোস্লাভিয়া ইয়োর ইয়োরোপ ইয়োরোপীয় ইয়োরসেলফ ইয়োলো ইয়ত্তা ইয়ত্তারহিত ইয়থ ইয়ুথ ইয়র্ক ইয়র্কশায়ার ি".split(" "),
              w_ii: "ঈ ঈকার ঈক্ষিত ঈক্ষণ ঈক্ষণকাম ঈগল ঈগলস ঈগলস্বভাব ঈদ ঈদগা ঈদগাহ ঈদেরছুটি ঈদুল ঈদৃশ ঈদৃশী ঈদসংখ্যা ঈপ্সু ঈপ্সা ঈপ্সিত ঈপ্সনীয় ঈমান ঈর্ষা ঈর্ষাকারী ঈর্ষান্বিত ঈর্ষান্বিতা ঈর্ষাপরায়ণ ঈর্ষাবিদ্বেষ ঈর্ষালু ঈর্ষাসঞ্জাত ঈর্ষাহীনতা ঈর্ষী ঈশ ঈশা ঈশান ঈশানকোণ ঈশানী ঈশানের ঈশিতা ঈশিত্ব ঈশ্বর ঈশ্বরগঞ্জ ঈশ্বরাজ্ঞা ঈশ্বরাদেশ ঈশ্বরাধীন ঈশ্বরী ঈশ্বরচিন্তা ঈশ্বরচন্দ্র ঈশ্বরীয় ঈশ্বরোপাসনা ঈশ্বরোপাসনাকাল ঈশ্বরতা ঈশ্বরত্ব ঈশ্বরদী ঈশ্বরদত্ত ঈশ্বরদ্বেষী ঈশ্বরধীন ঈশ্বরনিষ্ঠ ঈশ্বরনিষ্ঠা ঈশ্বরনিয়ন্ত্রিত ঈশ্বরপ্রাপ্তি ঈশ্বরপরায়ণ ঈশ্বরপরায়ণতা ঈশ্বরপুরী ঈশ্বরপ্রেরিত ঈশ্বরপ্রদত্ত ঈশ্বরবাচক ঈশ্বরবাদ ঈশ্বরবিদ্বেষী ঈশ্বরবিরোধ ঈশ্বরবিরোধী ঈশ্বরবিশ্বাস ঈশ্বরবন্দনা ঈশ্বরভক্ত ঈশ্বরহীন ঈষা ঈষিকা ঈষীকা ঈষৎ ঈষদুচ্চ ঈষদচ্ছ ঈষদুষ্ণ ঈসা ঈসাখাঁ ঈসাপুর ী".split(" "),
              w_u: "ু উ উঁ উঃ উই উইং উইংস উইক উইকি উইকিউক্তি উইকিউৎস উইকিক্যাম্প উইকিকমন্স উইকিখবর উইকিট্রাভেল উইকিনিউজ উইকিপিডিয়া উইকিপিডিয়াচারী উইকিপিডিয়ান উইকিপিডিয়াসংখ্যা উইকিপদক উইকিপ্রকল্প উইকিপ্রজাতি উইকিপ্রজেক্ট উইকিপৃষ্ঠা উইকিফিকেশন উইকিবই উইকিভার্সিটি উইকিভিত্তিক উইকিভ্রমণ উইকিমিডিয়া উইকিম্যানিয়া উইকিমত্ত উইকিমত্ততা উইকিলিংক উইকিলিঙ্ক উইকিলিপি উইকিশিষ্টাচার উইকিসংযোগ উইকিসংবাদ উইকিসংস্কৃতি উইকিসিডি উইকেট উইকেটরক্ষক উইকেটরক্ষণ উইগ উইগ্যান উইচক্র্যাফট উইজার্ড উইজার্ডিং উইজার্ডস উইটনেস উইঢিপি উইঢিবি উইথ উইদাউট উইদিন উইধরা উইন উইনার্স উইনিং উইন্টার উইন্ড উইন্ডো উইন্ডোজ উইনস্টন উইপোকা উইপন উইমেন উইমেনস উইল উইলকৃত উইলাগা উইলার উইলার্ড উইলি উইলিয়াম উইলস উইলসন উইলহেম উইলহেলম উইশ উইসডম উকার উকি উঁকি উঁকিঝুঁকি উকিল উকিলি উকিলেরচিঠি উকিলনামা উকিলবাবু উকিলসমাজ উকিলসুলভ উক্ত উক্তি উক্তিকারী উক্তিক্রম উক্তিযোগ্য উক্তিবাক্য উক্তিভাব উকুন উকুনবাছা উখা উখিয়া উখড়া উখড়ান উখড়ানো উগান্ডা উগ্র উগ্রকণ্ঠ উগ্রকর্মা উগ্রক্ষত্রিয় উগ্রগন্ধী উগরা উগ্রা উগরাই উগরাইও উগরাইত উগরাইতাম উগরাইতিস উগরাইতে উগরাইতেছ উগরাইতেছি উগরাইতেছিল উগরাইতেছিলাম উগরাইতেছিলি উগরাইতেছিলে উগরাইতেছিলেন উগরাইতেছিস উগরাইতেছে উগরাইতেছেন উগরাইতেন উগরাইব উগরাইবার উগরাইবি উগরাইবে উগরাইবেন উগরাইল উগরাইলাম উগরাইলি উগরাইলে উগরাইলেন উগরাইয়া উগরাইয়াছ উগরাইয়াছি উগরাইয়াছিল উগরাইয়াছিলাম উগরাইয়াছিলি উগরাইয়াছিলে উগরাইয়াছিলেন উগরাইয়াছিস উগরাইয়াছে উগরাইয়াছেন উগরাইয়ো উগরাও উগরাক উগরান উগরানো উগরাস উগরায় উগরিও উগরিয়ে উগরিয়েছ উগরিয়েছি উগরিয়েছিল উগরিয়েছিলাম উগরিয়েছিলি উগরিয়েছিলে উগরিয়েছিলেন উগরিয়েছিলেম উগরিয়েছিলুম উগরিয়েছিস উগরিয়েছে উগরিয়েছেন উগরিয়ো উগরচ্ছ উগরচ্ছি উগরচ্ছিল উগরচ্ছিলাম উগরচ্ছিলি উগরচ্ছিলে উগরচ্ছিলেন উগরচ্ছিলেম উগরচ্ছিলুম উগরচ্ছিস উগরচ্ছে উগরচ্ছেন উগ্রচণ্ডা উগ্রচণ্ডী উগরে উগরেছ উগরেছি উগরেছিল উগরেছিলাম উগরেছিলি উগরেছিলে উগরেছিলেন উগরেছিলেম উগরেছিলুম উগরেছিস উগরেছে উগরেছেন উগরো উগরোবার উগরত উগ্রতা উগ্রতাবিহীন উগরতাম উগরতিস উগরতে উগরতেন উগরতেম উগরতুম উগরন উগরনো উগ্রপন্থা উগ্রপন্থী উগ্রপ্রকৃতি উগরব উগ্রবাদী উগরবি উগ্রবীর্য উগরবে উগরবেন উগরবো উগ্রভাব উগ্রমেজাজী উগ্রমূর্তি উগরল উগরলাম উগরলি উগরলে উগরলেন উগরলেম উগরলুম উগরস উগ্রস্বভাব উগ্রস্বভাবা উগ্রস্বর উগরয় উগলা উগলানো উগড়ে উঁচু উঁচকপালি উঁচকপালে উঁচা উচাটন উঁচান উঁচানিচা উঁচানো উচিত উচিৎ উচিতকাজ উচিতকর্ম উচিতানুচিত উচিতবক্তা উঁচিয়ে উচ্চ উচ্চকিত উচ্চকোটি উচ্চকণ্ঠ উচ্চক্রমে উচ্চগিরি উচ্চগতি উচ্চগমন উচ্চগ্রাম উচ্চঘর উচ্চা উচ্চাকাঙ্ক্ষ উচ্চাকাঙ্ক্ষা উচ্চাকাঙ্ক্ষী উচ্চাঙ্গ উচ্চাঙ্গনির্ভর উচ্চাঙ্গসংগীত উচ্চাঙ্গসঙ্গীত উচ্চাভিলাষ উচ্চাভিলাষী উচ্চারক উচ্চারিত উচ্চারিবে উচ্চার্য উচ্চার্যমাণ উচ্চারণ উচ্চারণকারী উচ্চারণকাল উচ্চারণকেন্দ্র উচ্চারণগত উচ্চারণীয় উচ্চারণতত্ত্ব উচ্চারণদ্রুতি উচ্চারণনির্দেশক উচ্চারণবিকৃতি উচ্চারণবিকৃতিঘটিত উচ্চারণবিভ্রাট উচ্চারণভিত্তিক উচ্চারণমাত্র উচ্চারণরীতি উচ্চারণসাধ্য উচ্চারণস্থান উচ্চাশা উচ্চাশয় উচ্চিংড়া উচ্চিংড়ে উচ্চচাপ উচ্চৈঃ উচ্চৈঃশ্রবাঃ উচ্চৈঃস্বর উচচ্ছ উচচ্ছি উচচ্ছিল উচচ্ছিলাম উচচ্ছিলি উচচ্ছিলে উচচ্ছিলেন উচচ্ছিলেম উচচ্ছিলুম উচচ্ছিস উচচ্ছে উচচ্ছেন উচ্চণ্ড উচ্চতা উচ্চতাযুক্ত উচ্চতাপ উচ্চতাপমাত্রা উচ্চতাবৃদ্ধি উচ্চতাভেদ উচ্চতাসাম্য উচ্চতম উচ্চতর উচ্চধ্বনি উচ্চনাদ উচ্চনীচ উচ্চনীয় উচ্চপদ উচ্চপদাধিকারী উচ্চপদস্থ উচ্চপর্যায় উচ্চপ্রশংসা উচ্চবংশীয় উচ্চবংশজাত উচ্চবৃক্ষ উচ্চবাচ্য উচ্চবিচারালয় উচ্চবিত্ত উচ্চবিদ্যালয় উচ্চবিভাগ উচ্চবর্গ উচ্চবর্ণ উচ্চভাবে উচ্চভাষী উচ্চভূমি উচ্চমাত্রা উচ্চমাধ্যমিক উচ্চমান উচ্চমার্গ উচ্চমধ্য উচ্চমনা উচ্চমূল্য উচ্চরোল উচ্চরব উচ্চলম্ফন উচ্চশক্তি উচ্চশিক্ষা উচ্চশিক্ষার্থে উচ্চশিক্ষিত উচ্চশিক্ষিতা উচ্চশিখর উচ্চশ্রেণী উচ্চস্তর উচ্চস্বর উচ্চস্বরযুক্ত উচ্চসম্মুখ উচ্চহার উচ্চহাসি উচ্চহৃদয় উচ্চয় উচ্ছৃঙ্খল উচ্ছৃঙ্খলা উচ্ছৃঙ্খলতা উচ্ছৃঙ্খলভাবে উচ্ছা উচ্ছিদ্যমান উচ্ছিন্ন উচ্ছিষ্ট উচ্ছিষ্টান্ন উচ্ছিষ্টভক্ষণ উচ্ছিষ্টভক্ষণকারী উচ্ছিষ্টভোজী উচ্ছিষ্টভোজন উচ্ছিষ্টভোজনকারী উচ্ছে উচ্ছেদ উচ্ছেদক উচ্ছেদকারী উচ্ছেদকৃত উচ্ছেদকরণ উচ্ছেদ্য উচ্ছেদযোগ্য উচ্ছেদনীয় উচ্ছোষক উচ্ছোষিত উচ্ছোষণ উচ্ছন্ন উচ্ছ্বাস উচ্ছ্বাসিত উচ্ছ্বাসোক্তি উচ্ছ্বসা উচ্ছ্বসিত উচ্ছ্বসন উচ্ছ্রায় উচ্ছ্রায়ী উচ্ছ্রিত উচ্ছ্রিতি উচ্ছ্রিয়া উচ্ছ্রয় উচ্ছল উচ্ছলিত উচ্ছলতা উচ্ছলসৌন্দর্য উঁচুতম উঁচুতলা উঁচুদর উঁচন উঁচুনিচু উঁচুনজর উঁচুভূমি উঁচুমাত্রা উঁচুমান উঁচুশ্রেণী উছলান উছলানো উজান উজানি উজানো উজানভাটা উজানভাটি উজানস্রোত উজাড় উজির উজিরালি উজিরি উজিরপুর উজ্জীবিত উজ্জীবন উজ্জ্বল উজ্জ্বলকারী উজ্জ্বলকরণ উজ্জ্বলিত উজ্জ্বলীকৃত উজ্জ্বলতা উজ্জ্বলতাযুক্ত উজ্জ্বলতাহীন উজ্জ্বলতম উজবুক উজবেক উজবেকিস্তান উজবেকিস্থান উট উটকো উটপাখি উঠ উঠক উঠুক উঠা উঠাই উঠাইও উঠাইত উঠাইতাম উঠাইতিস উঠাইতে উঠাইতেছ উঠাইতেছি উঠাইতেছিল উঠাইতেছিলাম উঠাইতেছিলি উঠাইতেছিলে উঠাইতেছিলেন উঠাইতেছিস উঠাইতেছে উঠাইতেছেন উঠাইতেন উঠাইব উঠাইবার উঠাইবি উঠাইবে উঠাইবেন উঠাইল উঠাইলাম উঠাইলি উঠাইলে উঠাইলেন উঠাইয়া উঠাইয়াছ উঠাইয়াছি উঠাইয়াছিল উঠাইয়াছিলাম উঠাইয়াছিলি উঠাইয়াছিলে উঠাইয়াছিলেন উঠাইয়াছিস উঠাইয়াছে উঠাইয়াছেন উঠাইয়ো উঠাউঠি উঠাও উঠাক উঠান উঠানামা উঠানি উঠানে উঠানো উঠাস উঠি উঠিছে উঠিত উঠিতাম উঠিতিস উঠিতে উঠিতেছ উঠিতেছি উঠিতেছিল উঠিতেছিলাম উঠিতেছিলি উঠিতেছিলে উঠিতেছিলেন উঠিতেছিস উঠিতেছে উঠিতেছেন উঠিতেন উঠিব উঠিবার উঠিবি উঠিবে উঠিবেন উঠিল উঠিলাম উঠিলি উঠিলে উঠিলেন উঠিস উঠিয়া উঠিয়াছ উঠিয়াছি উঠিয়াছিল উঠিয়াছিলাম উঠিয়াছিলি উঠিয়াছিলে উঠিয়াছিলেন উঠিয়াছিস উঠিয়াছে উঠিয়াছেন উঠিয়ে উঠিয়েছ উঠিয়েছি উঠিয়েছিল উঠিয়েছিলাম উঠিয়েছিলি উঠিয়েছিলে উঠিয়েছিলেন উঠিয়েছিলেম উঠিয়েছিলুম উঠিয়েছিস উঠিয়েছে উঠিয়েছেন উঠিয়ো উঠচ্ছ উঠচ্ছি উঠচ্ছিল উঠচ্ছিলাম উঠচ্ছিলি উঠচ্ছিলে উঠচ্ছিলেন উঠচ্ছিলেম উঠচ্ছিলুম উঠচ্ছিস উঠচ্ছে উঠচ্ছেন উঠে উঠেই উঠেছ উঠেছি উঠেছিল উঠেছিলাম উঠেছিলি উঠেছিলে উঠেছিলেন উঠেছিলেম উঠেছিলো উঠেছিলুম উঠেছিস উঠেছে উঠেছেন উঠেন উঠেনি উঠেপড়ে উঠো উঠোন উঠছ উঠছি উঠছিল উঠছিলাম উঠছিলি উঠছিলে উঠছিলেন উঠছিলেম উঠছিলুম উঠছিস উঠছে উঠছেন উঠত উঠতাম উঠতি উঠতিস উঠতে উঠতেই উঠতেছে উঠতেন উঠতেম উঠতোনা উঠতুম উঠন উঠুন উঠন্ত উঠবার উঠবি উঠবে উঠবেন উঠবো উঠবস উঠল উঠলাম উঠলি উঠলে উঠলেন উঠলেম উঠলো উঠলুম উঠস উঠয় উড উডি উডেনফ্লোর উড্ডীন উড্ডীয় উড্ডীয়মান উড্ডয়ন উড্ডয়নশীল উড্ডয়মান উডবার্ন উড্রো উডস্টক উৎকিরণ উৎকীর্ণ উৎকীর্ণলিপি উৎকীর্তিত উৎকীর্তন উৎকেন্দ্রিক উৎকেন্দ্রিকতা উৎকেন্দ্রতা উৎকোচ উৎকোচক উৎকোচগ্রাহী উৎকোচগ্রহণ উৎকোচগ্রহণকারী উৎকোচদাতা উৎকোচদান উৎকট উৎকটদর্শন উৎকটভাবে উৎকণ্ঠ উৎকণ্ঠা উৎকণ্ঠাযুক্ত উৎকণ্ঠিত উৎকণ্ঠিতা উৎক্রান্ত উৎক্রান্তি উৎক্রোশ উৎকর্ণ উৎক্রম উৎক্রমণ উৎকর্ষ উৎকর্ষতা উৎকর্ষপ্রাপ্ত উৎকর্ষসাধক উৎকর্ষসাধন উৎকল উৎকলিকা উৎকলিত উৎকূলিত উৎকলদেশ উৎকলন উৎক্ষিপ্ত উৎক্ষেপ উৎক্ষেপক উৎক্ষেপিত উৎক্ষেপণ উৎকৃষ্ট উৎকৃষ্টতা উৎকৃষ্টতম উৎকৃষ্টতর উৎখাত উৎখাতকারী উৎখনন উত্যক্ত উৎযাপন উত্তান উত্তাপ উত্তাপিত উত্তাপজনিত উত্তাপযুক্ত উত্তাপন উত্তাপনাশক উত্তাল উত্তালতা উত্তীর্ণ উত্তেজক উত্তেজিত উত্তেজিতকরণ উত্তেজন উত্তেজনা উত্তেজনাকর উত্তেজনাজনক উত্তেজনাজনিত উত্তেজনাপ্রাপ্ত উত্তেজনাপূর্ণ উত্তেজনাবৃদ্ধি উত্তেজনাহীন উত্তেজনাহেতু উত্তোলক উত্তোলিত উত্তোলন উত্তোলনকারী উত্ত্যক্ত উত্তপ্ত উত্তম উত্তমকুমার উত্তমা উত্তমাঙ্গ উত্তমাশা উত্তমপুরুষ উত্তমবীর উত্তমমধ্যম উত্তমর্ণ উত্তমরূপে উত্তর উত্তরকাণ্ড উত্তরকারী উত্তরকাল উত্তরকালীন উত্তরকোরিয়া উত্তরক্রিয়া উত্তরখণ্ড উত্তরঙ্গ উত্তরা উত্তরাংশ উত্তরাকাণ্ড উত্তরাখণ্ড উত্তরাঞ্চল উত্তরাঞ্চলীয় উত্তরাথানা উত্তরাধিকার উত্তরাধিকারাদি উত্তরাধিকারিণী উত্তরাধিকারী উত্তরাধিকারসূত্র উত্তরাপথ উত্তরাশা উত্তরাসঙ্গ উত্তরাস্য উত্তরায়ণ উত্তরায়ণান্তবৃত্ত উত্তরী উত্তরীয় উত্তরীয়বস্ত্র উত্তরীয়রূপে উত্তুরে উত্তরোত্তর উত্তরজেলা উত্তরণ উত্তরতম উত্তরদাতা উত্তরদান উত্তরদানকারী উত্তরদায়ক উত্তরদিক উত্তরপক্ষ উত্তরপাড়া উত্তরপত্র উত্তরপদ উত্তরপদরূপে উত্তরপরগণা উত্তরপ্রান্ত উত্তরপ্রান্তীয় উত্তরপ্রদেশ উত্তরপূর্ব উত্তরপূর্বাঞ্চল উত্তরপূর্বস্থ উত্তরপুরুষ উত্তরপশ্চিম উত্তরপশ্চিমাঞ্চল উত্তরফল্গুনী উত্তরবঙ্গ উত্তরভাগ উত্তরভাদ্রপদ উত্তরভারত উত্তরভারতীয় উত্তরমুখী উত্তরমালা উত্তরমীমাংসা উত্তরমেরু উত্তরমেরুস্থিত উত্তরমহাসাগর উত্তরমহাসমুদ্র উত্তররূপ উত্তরলিপি উত্তরসাধক উত্তরসাধিকা উত্তরস্থ উত্তরসূরি উত্তরহীন উত্তল উত্তলিত উত্তলতা উত্থ উত্থান উত্থানপতন উত্থানশক্তি উত্থাপক উত্থাপিত উত্থাপন উত্থাপনকারী উত্থাপনীয় উত্থিত উত্থিতা উৎপাটক উৎপাটিত উৎপাটন উৎপাটনকারী উৎপাটনীয় উৎপাত উৎপাতসৃষ্টিকারী উৎপাতহীন উৎপাদ উৎপাদক উৎপাদকযন্ত্র উৎপাদকতা উৎপাদিকা উৎপাদিত উৎপাদী উৎপাদ্য উৎপাদ্যমান উৎপাদন উৎপাদনকারিণী উৎপাদনকারী উৎপাদনকাল উৎপাদনক্ষম উৎপাদনীয় উৎপাদননির্ভর উৎপাদনভিত্তিক উৎপাদনশক্তি উৎপাদনশীল উৎপাদনশীলতা উৎপাদনশুল্ক উৎপাদয়িতা উৎপাদয়িত্রী উৎপিঞ্জর উৎপিপাসু উৎপীড়ক উৎপীড়িত উৎপীড়ন উৎপীড়নকারী উৎপীড়নগ্রস্ত উৎপতিত উৎপত্তি উৎপত্তিগত উৎপত্তিগতভাবে উৎপত্তিলাভ উৎপত্তিস্থান উৎপত্তিস্থল উৎপতন উৎপথ উৎপথগামিতা উৎপথগামিনী উৎপথগামী উৎপদ্যমান উৎপন্ন উৎপন্নজাত উৎপন্নদ্রব্য উৎপন্নমতি উৎপন্নমতিত্ব উৎপ্রাস উৎপ্রাসন উৎপ্রেক্ষা উৎপল উৎপলাক্ষ উৎপলাক্ষী উৎপলেন্দু উৎফুল্ল উৎফুল্লতা উৎরক উতরা উৎরা উতরাই উৎরাই উৎরাইও উৎরাইত উৎরাইতাম উৎরাইতিস উৎরাইতে উৎরাইতেছ উৎরাইতেছি উৎরাইতেছিল উৎরাইতেছিলাম উৎরাইতেছিলি উৎরাইতেছিলে উৎরাইতেছিলেন উৎরাইতেছিস উৎরাইতেছে উৎরাইতেছেন উৎরাইতেন উৎরাইব উৎরাইবার উৎরাইবি উৎরাইবে উৎরাইবেন উৎরাইল উৎরাইলাম উৎরাইলি উৎরাইলে উৎরাইলেন উৎরাইয়া উৎরাইয়াছ উৎরাইয়াছি উৎরাইয়াছিল উৎরাইয়াছিলাম উৎরাইয়াছিলি উৎরাইয়াছিলে উৎরাইয়াছিলেন উৎরাইয়াছিস উৎরাইয়াছে উৎরাইয়াছেন উৎরাইয়ের উৎরাইয়ো উৎরাও উৎরাক উতরান উৎরান উতরানো উৎরানো উৎরাস উৎরায় উৎরিও উৎরিয়ে উৎরিয়েছ উৎরিয়েছি উৎরিয়েছিল উৎরিয়েছিলাম উৎরিয়েছিলি উৎরিয়েছিলে উৎরিয়েছিলেন উৎরিয়েছিলেম উৎরিয়েছিলুম উৎরিয়েছিস উৎরিয়েছে উৎরিয়েছেন উৎরিয়ো উৎরচ্ছ উৎরচ্ছি উৎরচ্ছিল উৎরচ্ছিলাম উৎরচ্ছিলি উৎরচ্ছিলে উৎরচ্ছিলেন উৎরচ্ছিলেম উৎরচ্ছিলুম উৎরচ্ছিস উৎরচ্ছে উৎরচ্ছেন উতরে উৎরে উৎরেছ উৎরেছি উৎরেছিল উৎরেছিলাম উৎরেছিলি উৎরেছিলে উৎরেছিলেন উৎরেছিলেম উৎরেছিলুম উৎরেছিস উতরেছে উৎরেছে উৎরেছেন উৎরো উৎরোবার উতরোল উৎরত উৎরতাম উৎরতিস উৎরতে উৎরতেন উৎরতেম উৎরতুম উৎরন উৎরনো উৎরব উৎরবি উৎরবে উৎরবেন উৎরবো উৎরল উৎরলাম উৎরলি উৎরলে উৎরলেন উৎরলেম উৎরলুম উৎরস উৎরয় উতল উতলা উতলিবে উতলিল উৎস উৎসুক উৎসুকভাব উৎসুকভাবে উৎসগত উৎসঙ্গ উৎসাদিত উৎসাদন উৎসাদনীয় উৎসার উৎসারক উৎসারিত উৎসারিতা উৎসারণ উৎসারণকারী উৎসারণীয় উৎসাহ উৎসাহক উৎসাহিত উৎসাহিতকরণ উৎসাহী উৎসাহযুক্ত উৎসাহদাতা উৎসাহদান উৎসাহদানকারী উৎসাহন উৎসাহনীয় উৎসাহপ্রাপ্ত উৎসাহব্যঞ্জক উৎসাহভঙ্গ উৎসাহভরে উৎসাহশীল উৎসাহসঞ্চার উৎসাহসঞ্চারী উৎসাহহীন উৎসাহহীনতা উৎসিক্ত উৎসেচ উৎসেচক উৎসেচন উৎসজাত উৎসজাতি উৎসনির্দেশ উৎসন্ন উৎসপঞ্জি উৎসপঞ্জী উৎসপূর্ব উৎসব উৎসবাদি উৎসবিহীন উৎসবপ্রাঙ্গণ উৎসবমুখর উৎসভাষা উৎসমুখ উৎসর্গ উৎসর্গকারী উৎসর্গকাল উৎসর্গিত উৎসর্গীকৃত উৎসর্গপত্র উৎসর্জক উৎসর্জন উৎসরূপে উৎসৃষ্ট উৎসস্থল উৎসস্বরূপ উথাল উথালপাতাল উথল উথলক উথলা উথলাই উথলাইও উথলাইত উথলাইতাম উথলাইতিস উথলাইতে উথলাইতেছ উথলাইতেছি উথলাইতেছিল উথলাইতেছিলাম উথলাইতেছিলি উথলাইতেছিলে উথলাইতেছিলেন উথলাইতেছিস উথলাইতেছে উথলাইতেছেন উথলাইতেন উথলাইব উথলাইবার উথলাইবি উথলাইবে উথলাইবেন উথলাইল উথলাইলাম উথলাইলি উথলাইলে উথলাইলেন উথলাইয়া উথলাইয়াছ উথলাইয়াছি উথলাইয়াছিল উথলাইয়াছিলাম উথলাইয়াছিলি উথলাইয়াছিলে উথলাইয়াছিলেন উথলাইয়াছিস উথলাইয়াছে উথলাইয়াছেন উথলাইয়ো উথলাও উথলাক উথলান উথলানো উথলাস উথলায় উথলি উথলিও উথলিত উথলিয়ে উথলিয়েছ উথলিয়েছি উথলিয়েছিল উথলিয়েছিলাম উথলিয়েছিলি উথলিয়েছিলে উথলিয়েছিলেন উথলিয়েছিলেম উথলিয়েছিলুম উথলিয়েছিস উথলিয়েছে উথলিয়েছেন উথলিয়ো উথলচ্ছ উথলচ্ছি উথলচ্ছিল উথলচ্ছিলাম উথলচ্ছিলি উথলচ্ছিলে উথলচ্ছিলেন উথলচ্ছিলেম উথলচ্ছিলুম উথলচ্ছিস উথলচ্ছে উথলচ্ছেন উথলে উথলেছ উথলেছি উথলেছিল উথলেছিলাম উথলেছিলি উথলেছিলে উথলেছিলেন উথলেছিলেম উথলেছিলুম উথলেছিস উথলেছে উথলেছেন উথলো উথলোবার উথলত উথলতাম উথলতিস উথলতে উথলতেন উথলতেম উথলতুম উথলন উথলনো উথলপাথল উথলব উথলবি উথলবে উথলবেন উথলবো উথলল উথললাম উথললি উথললে উথললেন উথললেম উথললুম উথলস উথলয় উদগ্র উদগ্রীব উদা উদাত্ত উদাত্তকণ্ঠ উদাত্তচরিত্র উদাত্তস্বর উদাম উদার উদারা উদারীকরণ উদারচিত্ত উদারচেতা উদারচরিত্র উদারতা উদারতাবাদ উদারনীতি উদারনীতিক উদারনৈতিক উদারনৈতিকতা উদারনৈতিকতার উদারপন্থী উদারভাবে উদারমতি উদারমনা উদারস্বভাব উদারহৃদয় উদাস উদাসিতা উদাসিনী উদাসিনীবেশ উদাসী উদাসীন উদাসীনা উদাসীনতা উদাসীনতার উদাসভাব উদাহৃত উদাহরণ উদাহরণদান উদাহরণস্বরূপ উদাহরণসমূহ উদিত উদীচী উদীচীন উদীচ্য উদীপ্ত উদীরিত উদীর্যমাণ উদীরণ উদীর্ণ উদীয়মান উদীয়মানা উদোম উদ্যুক্ত উদ্যান উদ্যানাদি উদ্যানতত্ত্ব উদ্যানপাল উদ্যানপালক উদ্যানবাটিকা উদ্যানবাটী উদ্যানরক্ষক উদ্যানরক্ষা উদযাপিত উদযাপন উদযাপনকারী উদ্যোগ উদ্যোক্তা উদ্যোগ উদ্যোগকারী উদ্যোগী উদ্যোগশীল উদ্যোগস্বরূপ উদ্যত উদ্যতি উদ্যতমুষ্টি উদ্যম উদ্যমী উদ্যমযুক্ত উদ্যমনাশ উদ্যমশীল উদ্যমহানি উদ্যমহারা উদ্যমহীন উদ্যমহীনতা উদ্দাম উদ্দামতা উদ্দিন উদ্দিষ্ট উদ্দীপক উদ্দীপিত উদ্দীপ্ত উদ্দীপন উদ্দীপনকারী উদ্দীপনা উদ্দীপনাজ্ঞাপক উদ্দীপনাযুক্ত উদ্দীপনাপূর্ণ উদ্দীপনাসঞ্চার উদ্দীপনীয় উদ্দীপনযোগ্য উদ্দেশ উদ্দেশক উদ্দেশকারী উদ্দেশ্য উদ্দেশ্যগত উদ্দেশ্যাবলী উদ্দেশ্যযুক্ত উদ্দেশ্যপ্রণোদিত উদ্দেশ্যবিধেয় উদ্দেশ্যবিহীন উদ্দেশ্যসাধক উদ্দেশ্যসাধন উদ্দেশ্যসাধনার্থ উদ্দেশ্যসিদ্ধি উদ্দেশ্যহীন উদ্দেশ্যহীনতা উদ্দেশ্যহীনভাবে উদ্দেশহীন উদ্ধার উদ্ধারক উদ্ধারকাজ উদ্ধারকারী উদ্ধারকার্য উদ্ধারকৃত উদ্ধারকর্তা উদ্ধারাশ্রম উদ্ধারচিহ্ন উদ্ধারপ্রাপ্ত উদ্ধারলাভ উদ্ধারসাধন উদ্ধত উদ্ধৃত উদ্ধৃতি উদ্ধৃতিকারী উদ্ধৃতিচিহ্ন উদ্ধতস্বভাব উদ্ধরণ উদ্বাস্তু উদ্বাস্তুপুনর্বাসন উদ্বাসন উদ্বাহ উদ্বাহু উদ্বাহক্রিয়া উদ্বাহিক উদ্বাহিত উদ্বাহিনী উদ্বাহী উদ্বাহন উদ্বায়িতা উদ্বায়ী উদ্বিগ্ন উদ্বিগ্নচিত্ত উদ্বিগ্নতা উদ্বেগ উদ্বেগজনক উদ্বেগযুক্ত উদ্বেগপূর্ণ উদ্বেগরহিত উদ্বেগশূন্য উদ্বেগশূন্যতা উদ্বেগসৃষ্টিকারী উদ্বেগহীন উদ্বেগহীনতা উদ্বেজক উদ্বেজিত উদ্বেজন উদ্বেজয়িতা উদ্বেজয়িত্রী উদ্বেল উদ্বেলিত উদ্বোধ উদ্বোধক উদ্বোধিত উদ্বোধন উদ্বোধনকারী উদ্বোধনি উদ্বোধনী উদ্বোধনীয় উদ্বৃতিসমূহ উদ্বৃত্ত উদ্বৃত্তভোক্তা উদ্বুদ্ধ উদ্বুদ্ধকরণ উদ্বন্ধন উদ্বন্ধনরজ্জু উদ্বর্ত উদ্বর্তন উদ্বর্তপত্র উদ্ভাবক উদ্ভাবিত উদ্ভাব্য উদ্ভাবন উদ্ভাবনকারী উদ্ভাবনা উদ্ভাবনী উদ্ভাবনীশক্তি উদ্ভাবনীয় উদ্ভাবনযোগ্য উদ্ভাস উদ্ভাসক উদ্ভাসিত উদ্ভাসিতা উদ্ভাসন উদ্ভাসনকারী উদ্ভিজ্জ উদ্ভিদ উদ্ভিদকলা উদ্ভিদজাত উদ্ভিদদেহ উদ্ভিদধর্মী উদ্ভিদবিজ্ঞান উদ্ভিদবিজ্ঞানী উদ্ভিদবিদ্যা উদ্ভিদভোজী উদ্ভিদভ্রুণ উদ্ভিদশূন্য উদ্ভিদসংক্রান্ত উদ্ভিন্ন উদ্ভিন্নযৌবন উদ্ভিন্নযৌবনা উদ্ভেদ উদ্ভেদী উদ্ভেদযুক্ত উদ্ভট উদ্ভুট্টি উদ্ভূত উদ্ভূতা উদ্ভব উদ্ভবায়ন উদ্ভবজনিত উদম উদমাদা উদর উদরান্ন উদরাময় উদরাময়রোধক উদ্রিক্ত উদরী উদরীরোগ উদ্রেক উদ্রেককারী উদরপরায়ণ উদরপরায়ণা উদরপূর্তি উদরসাৎ উদরস্থ উদরস্থকরা উদরসর্বস্ব উদলা উদয় উদয়কাল উদয়গিরি উদয়াচল উদয়াস্ত উদয়োন্মুখ উদয়ন উদয়নাচার্য উদয়পুর উদয়শংকর উদয়সম উধাও উনআশি উনকোটি উনা উনার উনারা উনি উনিশ উনিশবিশ উনচল্লিশ উনো উনত্রিশ উনুন উন্নাসিক উন্নাসিকতা উন্নাসিকতাজাত উন্নীত উন্নত উন্নতকরণ উন্নতগঠন উন্নতি উন্নতিকামী উন্নতিকল্প উন্নতিপ্রাপ্ত উন্নতিবিধান উন্নতিবিধায়ক উন্নতিরচেষ্টা উন্নতিলাভ উন্নতিশীল উন্নতিসাধন উন্নতচরিত্র উন্নতজনতা উন্নততর উন্নতমান উন্নতমনা উন্নতমস্তক উন্নতশির উন্নতশীল উন্নতহৃদয় উননব্বই উনুনমুখী উন্নমিত উন্নমন উন্নয়ন উন্নয়নকাজ উন্নয়নকারী উন্নয়নকার্য উন্নয়নকর্মী উন্নয়নকল্প উন্নয়নবিদ উন্নয়নমুখী উন্নয়নশীল উন্নয়নশীলতা উন্নয়নসাধক উনপঞ্চাশ উন্মুক্ত উন্মুক্ততা উন্মুক্তদ্বার উন্মুক্তসোর্স উন্মুক্তসোর্সকোড উন্মুখ উন্মুখতা উন্মগ্ন উন্মাতাল উন্মাদ উন্মাদক উন্মাদাগার উন্মাদিত উন্মাদিনী উন্মাদী উন্মাদযুক্ত উন্মাদন উন্মাদনা উন্মাদরোগ উন্মান উন্মার্গ উন্মার্গগামী উন্মীলিত উন্মীলন উন্মেষ উন্মেষিত উন্মেষণ উন্মোচক উন্মোচিত উন্মোচন উন্মোচনকারী উন্মজ্জন উন্মত্ত উন্মত্তকারী উন্মত্তা উন্মত্ততা উন্মত্তভাবে উন্মথিত উন্মথন উন্মদ উন্মদা উন্মন উন্মনা উন্মনাঃ উনষাট উনসত্তর উপ উপকক্ষপথ উপকার উপকারক উপকারকারী উপকারিকা উপকারিণী উপকারিতা উপকারী উপকার্য উপকারপ্রাপ্ত উপকারভিত্তিক উপকারলাভ উপকারসাধন উপকাহিনী উপকেন্দ্র উপকণ্ঠ উপকৃত উপকৃতি উপকথা উপকমিটি উপক্রান্ত উপক্রিত উপক্রিয়া উপক্রোশ উপকরণ উপকরণগত উপকরণাদি উপকরণরূপে উপকরণসংগ্রহ উপকরণসময় উপকরণসহ উপকরণহীন উপকর্তা উপকর্ত্রী উপক্রন্তা উপক্রম উপক্রমকারী উপক্রমণিকা উপক্রমণীয় উপক্রমমাণ উপক্রমমাত্র উপকূল উপকূলীয় উপকূলবর্তী উপকূলভূমি উপকূলরেখা উপক্ষার উপক্ষারধারী উপক্ষারহীন উপক্ষয় উপগিরি উপগোত্র উপগোষ্ঠী উপগত উপগম উপগমন উপগুরু উপগ্রুপ উপগ্রহ উপগ্রহকৃত উপগ্রহচিত্র উপগ্রহবলয় উপগ্রহভিত্তিক উপগ্রহসমূহ উপঘাতক উপা উপাখ্যান উপাগত উপাঙ্গ উপাচার্য উপাত্ত উপাত্তনির্ভর উপাত্তভিত্তিক উপাদান উপাদানী উপাদেয় উপাধান উপাধি উপাধিক উপাধিজাত উপাধিযুক্ত উপাধিধারী উপাধিপত্র উপাধিপ্রাপ্ত উপাধিলাভ উপাধিহীন উপাধ্যক্ষ উপাধ্যায় উপাধ্যায়ানী উপাধ্যায়ী উপান্ত উপান্ত্য উপান্তবর্তী উপার্জক উপার্জিত উপার্জন উপার্জনকারী উপার্জনক্ষম উপার্জনশীল উপার্থন উপারম্ভ উপাশ্রয় উপাস উপাসক উপাসিকা উপাসিত উপাস্য উপাস্যমান উপাস্থি উপাসন উপাসনা উপাসনাকারী উপাসনাগীত উপাসনাগৃহ উপাসনাদি উপাসনাবিধি উপাসনামন্দির উপাসনালয় উপাহার উপাহৃত উপাড়া উপাড়ি উপাড়িয়া উপাড়ন উপায় উপায়ক্ষম উপায়ান্তর উপায়ী উপায়চিন্তা উপায়জ্ঞ উপায়ন উপায়ন্তর উপায়হীন উপচই উপচও উপচক উপচক্ষু উপচা উপচাই উপচাইও উপচাইত উপচাইতাম উপচাইতিস উপচাইতে উপচাইতেছ উপচাইতেছি উপচাইতেছিল উপচাইতেছিলাম উপচাইতেছিলি উপচাইতেছিলে উপচাইতেছিলেন উপচাইতেছিস উপচাইতেছে উপচাইতেছেন উপচাইতেন উপচাইব উপচাইবার উপচাইবি উপচাইবে উপচাইবেন উপচাইল উপচাইলাম উপচাইলি উপচাইলে উপচাইলেন উপচাইয়া উপচাইয়াছ উপচাইয়াছি উপচাইয়াছিল উপচাইয়াছিলাম উপচাইয়াছিলি উপচাইয়াছিলে উপচাইয়াছিলেন উপচাইয়াছিস উপচাইয়াছে উপচাইয়াছেন উপচাইয়ো উপচাও উপচাক উপচান উপচানো উপচার উপচারিক উপচারপ্রাপ্ত উপচারশালা উপচাস উপচায় উপচিও উপচিকীর্ষু উপচিকীর্ষা উপচিত উপচিতি উপচিয়ে উপচিয়েছ উপচিয়েছি উপচিয়েছিল উপচিয়েছিলাম উপচিয়েছিলি উপচিয়েছিলে উপচিয়েছিলেন উপচিয়েছিলেম উপচিয়েছিলুম উপচিয়েছিস উপচিয়েছে উপচিয়েছেন উপচিয়ো উপচচ্ছ উপচচ্ছি উপচচ্ছিল উপচচ্ছিলাম উপচচ্ছিলি উপচচ্ছিলে উপচচ্ছিলেন উপচচ্ছিলেম উপচচ্ছিলুম উপচচ্ছিস উপচচ্ছে উপচচ্ছেন উপচীয়মান উপচে উপচেছ উপচেছি উপচেছিল উপচেছিলাম উপচেছিলি উপচেছিলে উপচেছিলেন উপচেছিলেম উপচেছিলুম উপচেছিস উপচেছে উপচেছেন উপচো উপচোবার উপচ্ছায়া উপচত উপচতাম উপচতিস উপচতে উপচতেন উপচতেম উপচতুম উপচন উপচনো উপচব উপচবি উপচবে উপচবেন উপচবো উপচরিত উপচর্যা উপচল উপচলাম উপচলি উপচলে উপচলেন উপচলেম উপচলুম উপচস উপচয় উপেক্ষক উপেক্ষা উপেক্ষাকারী উপেক্ষাযুক্ত উপেক্ষার্থে উপেক্ষিত উপেক্ষিতা উপেক্ষণ উপেক্ষণীয় উপেন্দ্র উপেন্দ্রকিশোর উপেন্দ্রনাথ উপোষ উপোষিত উপোষী উপোষণ উপজাত উপজাতি উপজাতিক উপজাতীয় উপজাতদ্রব্য উপজিহ্বা উপজীবিকা উপজীবী উপজীব্য উপজেলা উপজেলাক্ষেত্র উপজেলাজাত উপজেলাধীন উপজেলাসদর উপজ্ঞা উপজনন উপযুক্ত উপযুক্তা উপযুক্তি উপযুক্ততা উপযুক্তভাবে উপযাচক উপযাচিকা উপযাচিত উপযোগ উপযোগিতা উপযোগী উপযোগবাদ উপযোগবিধি উপযোজিত উপযোজন উপঢৌকন উপঢৌকনাদি উপ্ত উপতারা উপতালিকা উপত্যকা উপতত্ত্ব উপদংশ উপদিষ্ট উপদেব উপদেবী উপদেবতা উপদেশ উপদেশক উপদেশগ্রন্থ উপদেশগ্রহণ উপদেশাত্মক উপদেশাবলি উপদেশদাতা উপদেশদান উপদেশদানকারী উপদেশপ্রাপ্ত উপদেশপূর্ণ উপদেশবর্ষণ উপদেশমূলক উপদেষ্টা উপদেষ্টাজন উপদেষ্টাধী উপদেষ্টব্য উপদ্বীপ উপদ্বীপীয় উপদ্রুত উপদ্রব উপদ্রবকারী উপদ্রবপীড়িত উপদ্রবহীনতা উপদর্শক উপদল উপধা উপধাতু উপধান উপধানীয় উপধারা উপধায়ক উপধায়ী উপধ্বনি উপধর্ম উপনক্ষত্র উপনগর উপনগরী উপনাম উপনায়ক উপনিবিষ্ট উপনিবেশ উপনিবেশকারী উপনিবেশিক উপনিবেশিকতাবাদ উপনিবেশিত উপনিবেশপূর্ব উপনিবেশবাদ উপনির্বাচন উপনিষৎ উপনিষদ উপনিহিত উপনীত উপনেতা উপনেত্র উপন্যাস উপন্যাসিক উপন্যাসিকা উপন্যাসত্রয়ী উপন্যাসদ্বয় উপন্যাসপ্রণেতা উপন্যাসপর্ব উপন্যাসসমগ্র উপন্যস্ত উপনদ উপনদী উপনয়ন উপনয়নকর্তা উপনয়নান্তে উপনয়নদাতা উপপাত উপপাতক উপপাদ উপপাদক উপপাদ্য উপপাদন উপপাদনীয় উপপাপ উপপতি উপপত্তি উপপত্নী উপপথ উপপদ উপপুরাণ উপপ্রান্ত উপপরিচালক উপপরিবার উপপ্রজাতি উপপ্রধানমন্ত্রী উপপর্ব উপপ্রবেশদ্বার উপপররাষ্ট্রমন্ত্রী উপপ্রশ্ন উপবৃক্ষ উপবাক্য উপবাক্যগত উপবামন উপবাস উপবাসক উপবাসকারী উপবাসী উপবিধি উপবিভক্ত উপবিভাগ উপবিভাজন উপবিষ্ট উপবিষয়শ্রেনী উপবীত উপবীতী উপবেদ উপবেশ উপবেশিত উপবেশন উপব্যবস্থা উপবৃত্ত উপবৃত্তক উপবৃত্তাকার উপবৃত্তি উপবৃত্তিক উপবৃত্তীয় উপবৃত্ততা উপবন উপবর্গ উপবর্গীকরণ উপভুক্ত উপভাষা উপভাষাতত্ত্ব উপভাষাবিজ্ঞান উপভোক্তা উপভোগ উপভোগকারী উপভোগ্য উপভোগ্যতা উপমা উপমাতা উপমান উপমানবস্তু উপমাবিহীন উপমারহিত উপমাসূচক উপমিত উপমিতি উপমেয় উপমেয়রূপে উপমন্ত্রী উপমহাদেশ উপমহাদেশীয় উপর উপরঅলা উপরআলা উপরওয়ালা উপরকার উপরাংশ উপরাউপরি উপরাগ উপরাজ উপরাজ্য উপরাষ্ট্রপতি উপরি উপরিউক্ত উপরিচর উপরিতন উপরিতল উপরিপাতিত উপরিপাতন উপরিভাগ উপরিসিক্ত উপরিস্থ উপরিস্থিত উপরচাল উপরচালাক উপরচালাকি উপরচড়া উপরচড়াও উপরোক্ত উপরোধ উপরোধক উপরোধকারী উপরোল্লিখিত উপর্যুক্ত উপরটপকা উপর্যুপরি উপরত উপরতি উপরত্ন উপরতলা উপরদিক উপরুদ্ধ উপরনিচ উপরন্তু উপরূপ উপরপাওনা উপরূপমূল উপরপড়া উপরপড়াভাবে উপরমহল উপরস্থ উপরহাত উপলক্ষ উপলক্ষক উপলক্ষিত উপলক্ষণ উপলক্ষণা উপলখণ্ড উপলিপি উপলিপ্ত উপলেপ উপলেপন উপলব্ধ উপলব্ধি উপলব্ধিকারী উপলব্ধিকৃত উপলব্ধিকরণ উপলভ্য উপলময় উপশক্তি উপশক্তিস্তর উপশাখা উপশান্ত উপশাস্ত্রীয় উপশিরা উপশিরোনাম উপশিষ্য উপশৈল উপশব্দ উপশম উপশমক উপশমকারী উপশমনীয় উপশমপদ্ধতি উপশমপ্রাপ্ত উপশ্রেণী উপশহর উপশয় উপশয়ী উপসংযোজক উপসংহার উপসংহারভাগ উপসংহৃত উপসংহৃতি উপসাগর উপসাগরীয় উপসেক উপসেচন উপসেট উপসেবক উপসেবা উপসেবাকারী উপসেবিত উপসেবী উপসেবন উপসেবনকারী উপস্ত্রী উপস্থ উপস্থাপক উপস্থাপিকা উপস্থাপিত উপস্থাপন উপস্থাপনকারী উপস্থাপনা উপস্থাপয়িতা উপস্থাপয়িত্রী উপস্থিত উপস্থিতকাল উপস্থিতকরণ উপস্থিতি উপস্থিতিজনিত উপস্থিতবক্তা উপস্থিতবুদ্ধি উপস্থিতবুদ্ধিযুক্ত উপস্থিতমতো উপস্বত্ব উপস্বর উপসমিতি উপসম্পাদক উপসম্প্রদায় উপসর্গ উপসর্গীকৃত উপসর্গরূপে উপহার উপহারাদি উপহারদান উপহারদানকারী উপহাস উপহাস্য উপহত উপহৃত উপহ্রদ উপহসিত উপুড় উপড়ই উপড়ও উপড়ক উপড়া উপড়াই উপড়াইও উপড়াইত উপড়াইতাম উপড়াইতিস উপড়াইতে উপড়াইতেছ উপড়াইতেছি উপড়াইতেছিল উপড়াইতেছিলাম উপড়াইতেছিলি উপড়াইতেছিলে উপড়াইতেছিলেন উপড়াইতেছিস উপড়াইতেছে উপড়াইতেছেন উপড়াইতেন উপড়াইব উপড়াইবার উপড়াইবি উপড়াইবে উপড়াইবেন উপড়াইল উপড়াইলাম উপড়াইলি উপড়াইলে উপড়াইলেন উপড়াইয়া উপড়াইয়াছ উপড়াইয়াছি উপড়াইয়াছিল উপড়াইয়াছিলাম উপড়াইয়াছিলি উপড়াইয়াছিলে উপড়াইয়াছিলেন উপড়াইয়াছিস উপড়াইয়াছে উপড়াইয়াছেন উপড়াইয়ো উপড়াও উপড়াক উপড়ান উপড়ানো উপড়াস উপড়ায় উপড়িও উপড়িয়ে উপড়িয়েছ উপড়িয়েছি উপড়িয়েছিল উপড়িয়েছিলাম উপড়িয়েছিলি উপড়িয়েছিলে উপড়িয়েছিলেন উপড়িয়েছিলেম উপড়িয়েছিলুম উপড়িয়েছিস উপড়িয়েছে উপড়িয়েছেন উপড়িয়ো উপড়চ্ছ উপড়চ্ছি উপড়চ্ছিল উপড়চ্ছিলাম উপড়চ্ছিলি উপড়চ্ছিলে উপড়চ্ছিলেন উপড়চ্ছিলেম উপড়চ্ছিলুম উপড়চ্ছিস উপড়চ্ছে উপড়চ্ছেন উপড়ে উপড়েছ উপড়েছি উপড়েছিল উপড়েছিলাম উপড়েছিলি উপড়েছিলে উপড়েছিলেন উপড়েছিলেম উপড়েছিলুম উপড়েছিস উপড়েছে উপড়েছেন উপড়ো উপড়োবার উপড়ত উপড়তাম উপড়তিস উপড়তে উপড়তেন উপড়তেম উপড়তুম উপড়ন উপড়নো উপড়ব উপড়বি উপড়বে উপড়বেন উপড়বো উপড়ল উপড়লাম উপড়লি উপড়লে উপড়লেন উপড়লেম উপড়লুম উপড়স উপড়য় উফ উবা উবি উবিত উবিতাম উবিতিস উবিতে উবিতেছ উবিতেছি উবিতেছিল উবিতেছিলাম উবিতেছিলি উবিতেছিলে উবিতেছিলেন উবিতেছিস উবিতেছে উবিতেছেন উবিতেন উবিব উবিবার উবিবি উবিবে উবিবেন উবিল উবিলাম উবিলি উবিলে উবিলেন উবিস উবিয়া উবিয়াছ উবিয়াছি উবিয়াছিল উবিয়াছিলাম উবিয়াছিলি উবিয়াছিলে উবিয়াছিলেন উবিয়াছিস উবিয়াছে উবিয়াছেন উবিয়ো উবে উবেছ উবেছি উবেছিল উবেছিলাম উবেছিলি উবেছিলে উবেছিলেন উবেছিলেম উবেছিলুম উবেছিস উবেছে উবেছেন উবেন উবছ উবছি উবছিল উবছিলাম উবছিলি উবছিলে উবছিলেন উবছিলেম উবছিলুম উবছিস উবছে উবছেন উবত উবতাম উবতিস উবতে উবতেন উবতেম উবতুম উবুন উবুন্টু উবব উববি উববে উববেন উববো উবরা উবরান উবরানো উবরেছে উবল উবলাম উবলি উবলে উবলেন উবলেম উবলুম উবুড় উভ উভউত্তল উভচর উভচরী উভমুখী উভলিঙ্গ উভয় উভয়ক্ষেত্রে উভয়চর উভয়ত উভয়তোমুখ উভয়তোমুখী উভয়ত্র উভয়থা উভয়দল উভয়পক্ষ উভয়প্রকার উভয়প্রান্ত উভয়বিধ উভয়মুখী উভয়লিঙ্গ উভয়সংকট উভয়সংকটকালীন উভয়সঙ্কট উমান উমানাথ উমানো উমাপতি উমিচাঁদ উমিদ উমেদ উমেদার উমেদারি উমেশ উমেশচন্দ্র উম্মাহ উম্মীভবন উম্মে উম্মত উম্মুল উমর উমরা উমরাতুল উমরাহ উমরাহ্‌ উরু উরুগুয়ে উরঙ্গ উরঙ্গী উরঙ্গম উরঙ্গমী উর্ণ উর্ণা উর্ণাময় উর্ণনাভি উর্দু উর্দুওয়ালা উর্দুগ্রন্থ উর্দি উর্দুনবিশ উর্দুনবিস উর্দুভাষা উর্দুভাষী উর্দুমিশ্রিত উর্দুশিক্ষক উর্বর উর্বরা উর্বরাশক্তি উর্বরতা উর্বরতাবৃদ্ধি উর্বরতাবৃদ্ধিকারী উর্বরতাবর্ধক উর্বরমস্তিষ্ক উর্বশী উরুস্তম্ভ উরস্ত্র উরস্ত্রাণ উল উলু উল্কা উল্কাণু উল্কাপাত উল্কাপিণ্ড উল্কাবেগ উল্কামুখী উল্কি উলুখাগড়া উলুখড় উলঙ্গ উলঙ্গা উলঙ্গিনী উলঙ্গী উলেরকাঁটা উলট উলটক উলটকম্বল উলটা উল্টা উলটাই উলটাইও উলটাইত উলটাইতাম উলটাইতিস উলটাইতে উলটাইতেছ উলটাইতেছি উলটাইতেছিল উলটাইতেছিলাম উলটাইতেছিলি উলটাইতেছিলে উলটাইতেছিলেন উলটাইতেছিস উলটাইতেছে উলটাইতেছেন উলটাইতেন উলটাইব উলটাইবার উলটাইবি উলটাইবে উলটাইবেন উলটাইল উলটাইলাম উলটাইলি উলটাইলে উলটাইলেন উলটাইয়া উলটাইয়াছ উলটাইয়াছি উলটাইয়াছিল উলটাইয়াছিলাম উলটাইয়াছিলি উলটাইয়াছিলে উলটাইয়াছিলেন উলটাইয়াছিস উলটাইয়াছে উলটাইয়াছেন উলটাইয়ো উলটাও উলটাক উল্টাঠেলা উল্টাদাঁড়া উলটান উলটানো উল্টানো উলটাপালটা উল্টাপাল্টা উলটারথ উল্টারথ উলটালে উল্টালে উলটাস উলটিও উলটিপালটি উল্টিপাল্টি উলটিয়ে উল্টিয়ে উলটিয়েছ উলটিয়েছি উলটিয়েছিল উলটিয়েছিলাম উলটিয়েছিলি উলটিয়েছিলে উলটিয়েছিলেন উলটিয়েছিলেম উলটিয়েছিলুম উলটিয়েছিস উলটিয়েছে উলটিয়েছেন উলটিয়ো উলটচ্ছ উলটচ্ছি উলটচ্ছিল উলটচ্ছিলাম উলটচ্ছিলি উলটচ্ছিলে উলটচ্ছিলেন উলটচ্ছিলেম উলটচ্ছিলুম উলটচ্ছিস উলটচ্ছে উলটচ্ছেন উলটে উল্টে উলটেছ উলটেছি উলটেছিল উলটেছিলাম উলটেছিলি উলটেছিলে উলটেছিলেন উলটেছিলেম উলটেছিলুম উলটেছিস উলটেছে উলটেছেন উলটেপালটে উল্টেপাল্টে উলটো উল্টো উলটোদিক উল্টোদিক উলটোপালটা উল্টোপাল্টা উলটোবার উলটোভাবে উল্টোভাবে উলটোমুখ উল্টোমুখ উলটোরথ উল্টোরথ উলটোষষ্ঠী উল্টোষষ্ঠী উলটত উলটতাম উলটতিস উলটতে উলটতেন উলটতেম উলটতুম উলটন উলটনো উলটপালট উলটব উলটবি উলটবে উলটবেন উলটবো উলটল উলটলাম উলটলি উলটলে উলটলেন উলটলেম উলটলুম উলটস উলটয় উলুধ্বনি উলফ উল্ফ উলুবেড়িয়া উলবোনা উল্লুক উল্লঙ্ঘা উল্লঙ্ঘিত উল্লঙ্ঘ্য উল্লঙ্ঘন উল্লঙ্ঘনীয় উল্লাপাড়া উল্লাস উল্লাসকর উল্লাসিত উল্লাসিনী উল্লাসী উল্লাসযুক্ত উল্লাসধ্বনি উল্লাসনগর উল্লাহ উল্লাহ্‌ উল্লিখিত উল্লেখ উল্লেখকারী উল্লেখকৃত উল্লেখিত উল্লেখজনিত উল্লেখ্য উল্লেখযুক্ত উল্লেখযোগ্য উল্লেখযোগ্যতা উল্লেখন উল্লেখনীয় উল্লেখপূর্বক উল্লেখমাত্র উল্লেখহীন উল্লোল উল্লম্ফ উল্লম্ফন উল্লম্ফনীয় উল্লসিত উল্লসিতা উশ উশখুশ উশো উশুল উষ্কখুষ্ক উষ্ণ উষ্ণা উষ্ণাগম উষ্ণীকৃত উষ্ণীষ উষ্ণীষকমল উষ্ণীয় উষ্ণতা উষ্ণতাযুক্ত উষ্ণতাপরিমাপক উষ্ণতামাপক উষ্ণত্ব উষ্ণতম উষ্ণতর উষ্ণপ্রধান উষ্ণপ্রস্রবণ উষ্ণবীর্য উষ্ণমণ্ডল উষ্ম উষ্মা উষ্মীভবন উষ্মতাহীন উষ্মধ্বনি উষ্মবর্ণ উসকই উসকও উসকক উসকা উসকাই উসকাইও উসকাইত উসকাইতাম উসকাইতিস উসকাইতে উসকাইতেছ উসকাইতেছি উসকাইতেছিল উসকাইতেছিলাম উসকাইতেছিলি উসকাইতেছিলে উসকাইতেছিলেন উসকাইতেছিস উসকাইতেছে উসকাইতেছেন উসকাইতেন উসকাইব উসকাইবার উসকাইবি উসকাইবে উসকাইবেন উসকাইল উসকাইলাম উসকাইলি উসকাইলে উসকাইলেন উসকাইয়া উসকাইয়াছ উসকাইয়াছি উসকাইয়াছিল উসকাইয়াছিলাম উসকাইয়াছিলি উসকাইয়াছিলে উসকাইয়াছিলেন উসকাইয়াছিস উসকাইয়াছে উসকাইয়াছেন উসকাইয়ো উসকাও উসকাক উসকান উস্কান উসকানি উস্কানি উসকানো উস্কানো উসকাস উসকায় উসকিও উসকিয়ে উসকিয়েছ উসকিয়েছি উসকিয়েছিল উসকিয়েছিলাম উসকিয়েছিলি উসকিয়েছিলে উসকিয়েছিলেন উসকিয়েছিলেম উসকিয়েছিলুম উসকিয়েছিস উসকিয়েছে উসকিয়েছেন উসকিয়ো উসকচ্ছ উসকচ্ছি উসকচ্ছিল উসকচ্ছিলাম উসকচ্ছিলি উসকচ্ছিলে উসকচ্ছিলেন উসকচ্ছিলেম উসকচ্ছিলুম উসকচ্ছিস উসকচ্ছে উসকচ্ছেন উসকে উস্কে উসকেছ উসকেছি উসকেছিল উসকেছিলাম উসকেছিলি উসকেছিলে উসকেছিলেন উসকেছিলেম উসকেছিলুম উসকেছিস উসকেছে উসকেছেন উসকো উসকোখুসকো উসকোবার উসকত উসকতাম উসকতিস উসকতে উসকতেন উসকতেম উসকতুম উসকন উসকনো উসকব উসকবি উসকবে উসকবেন উসকবো উসকল উসকলাম উসকলি উসকলে উসকলেন উসকলেম উসকলুম উসকস উসকয় উসখুস উসমান উসমানী উসুল উহু উঁহু উহা উহারা উহ্য উহ্যমান উড় উড়ু উড়ুউড়ু উড়ুক উড়ুক্কু উড়কি উড়া উড়াই উড়াইও উড়াইত উড়াইতাম উড়াইতিস উড়াইতে উড়াইতেছ উড়াইতেছি উড়াইতেছিল উড়াইতেছিলাম উড়াইতেছিলি উড়াইতেছিলে উড়াইতেছিলেন উড়াইতেছিস উড়াইতেছে উড়াইতেছেন উড়াইতেন উড়াইব উড়াইবার উড়াইবি উড়াইবে উড়াইবেন উড়াইল উড়াইলাম উড়াইলি উড়াইলে উড়াইলেন উড়াইয়া উড়াইয়াছ উড়াইয়াছি উড়াইয়াছিল উড়াইয়াছিলাম উড়াইয়াছিলি উড়াইয়াছিলে উড়াইয়াছিলেন উড়াইয়াছিস উড়াইয়াছে উড়াইয়াছেন উড়াইয়ো উড়াও উড়াক উড়ান উড়ানি উড়ানো উড়ানোব উড়াবার উড়াল উড়ালপুল উড়ালসেতু উড়াস উড়ি উড়িও উড়িছে উড়িত উড়িতাম উড়িতিস উড়িতে উড়িতেছ উড়িতেছি উড়িতেছিল উড়িতেছিলাম উড়িতেছিলি উড়িতেছিলে উড়িতেছিলেন উড়িতেছিস উড়িতেছে উড়িতেছেন উড়িতেন উড়িধান উড়িব উড়িবার উড়িবি উড়িবে উড়িবেন উড়ির উড়িল উড়িলাম উড়িলি উড়িলেন উড়িষ্যা উড়িস উড়িয়া উড়িয়াছ উড়িয়াছি উড়িয়াছিল উড়িয়াছিলাম উড়িয়াছিলি উড়িয়াছিলে উড়িয়াছিলেন উড়িয়াছিস উড়িয়াছে উড়িয়াছেন উড়িয়ে উড়িয়েছ উড়িয়েছি উড়িয়েছিল উড়িয়েছিলাম উড়িয়েছিলি উড়িয়েছিলে উড়িয়েছিলেন উড়িয়েছিলেম উড়িয়েছিলুম উড়িয়েছিস উড়িয়েছে উড়িয়েছেন উড়িয়ো উড়চ্ছ উড়চ্ছি উড়চ্ছিল উড়চ্ছিলাম উড়চ্ছিলি উড়চ্ছিলে উড়চ্ছিলেন উড়চ্ছিলেম উড়চ্ছিলুম উড়চ্ছিস উড়চ্ছে উড়চ্ছেন উড়ে উড়েছ উড়েছি উড়েছিল উড়েছিলাম উড়েছিলি উড়েছিলে উড়েছিলেন উড়েছিলেম উড়েছিলুম উড়েছিস উড়েছে উড়েছেন উড়েন উড়েপড়া উড়ো উড়োচিঠি উড়োজাহাজ উড়োযান উড়ছ উড়ছি উড়ছিল উড়ছিলাম উড়ছিলি উড়ছিলে উড়ছিলেন উড়ছিলেম উড়ছিলুম উড়ছিস উড়ছে উড়ছেন উড়ত উড়তাম উড়তি উড়তিস উড়তে উড়তেন উড়তেম উড়তুম উড়ন উড়ুন উড়নি উড়ুনি উড়নচণ্ডী উড়নচণ্ডে উড়নচড়ে উড়নো উড়ন্ত উড়ুপ উড়ব উড়বার উড়বি উড়বে উড়বেন উড়বো উড়ুম্বর উড়ল উড়লাম উড়লি উড়লে উড়লেন উড়লেম উড়লুম উড়শ উড়স উড়য় উয়েফাকাপ".split(" "),
              w_uu: "ূ ঊ ঊকার ঊন ঊনআশি ঊনকোটি ঊনচল্লিশ ঊনত্রিংশ ঊনত্রিংশত্তম ঊনত্রিশ ঊননব্বই ঊনপঞ্চাশ ঊনপঞ্চাশপবন ঊনবিংশতি ঊনবিংশতিতম ঊনবিংশতিতমী ঊনষাট ঊনসত্তর ঊরু ঊরুযুক্ত ঊর্ধ্ব ঊর্ধ্বকমা ঊর্ধ্বগগন ঊর্ধ্বগামী ঊর্ধ্বগত ঊর্ধ্বগতি ঊর্ধ্বগতিশীল ঊর্ধ্বগমন ঊর্ধ্বাংশ ঊর্ধ্বাকাশ ঊর্ধ্বাঙ্গ ঊর্ধ্বাভিমুখ ঊর্ধ্বায়ন ঊর্ধ্বচারী ঊর্ধ্বতন ঊর্ধ্বতম ঊর্ধ্বদিক ঊর্ধ্বদেশ ঊর্ধ্বদেহ ঊর্ধ্বদৃষ্টি ঊর্ধ্বনেত্র ঊর্ধ্বপক্ষ ঊর্ধ্বপাতিত ঊর্ধ্বপাতন ঊর্ধ্বপদ ঊর্ধ্বপুরুষ ঊর্ধ্ববাহু ঊর্ধ্বভাগ ঊর্ধ্বমুখ ঊর্ধ্বমুখী ঊর্ধ্বরেখা ঊর্ধ্বরেতা ঊর্ধ্বরেতাঃ ঊর্ধ্বলোক ঊর্ধ্বশায়ী ঊর্ধ্বশ্বাস ঊর্ধ্বসীমা ঊর্ধ্বস্থ ঊরুভঙ্গ ঊর্মি ঊর্মিভঙ্গ ঊর্মিমুখর ঊর্মিমালা ঊর্মিমালী ঊর্মিলা ঊরুস্তম্ভ ঊরুসন্ধি ঊরুহীন ঊষা ঊষাকাল ঊষালগ্ন ঊহ্য ঊহ্যতা ঊহ্যবাক্য".split(" "),
              w_rri: "ৃ ঋ ঋক্‌ ঋকার ঋক্‌বেদ ঋক্ষ ঋক্ষমণ্ডল ঋক্ষরাজ ঋগ্বেদ ঋগ্বেদী ঋগ্বেদীয় ঋগ্বেদজ্ঞ ঋজু ঋজুক ঋজুতা ঋজুভাব ঋজুরেখা ঋণ ঋণকরণ ঋণগ্রস্ত ঋণগ্রহীতা ঋণগ্রহণ ঋণগ্রহণকারী ঋণাত্মক ঋণাত্মকীকরণ ঋণাত্মকতা ঋণাদি ঋণী ঋণচিহ্ন ঋণেজড়িত ঋণজাল ঋণজনিত ঋণযোগ্য ঋণদাতা ঋণদান ঋণদানকারী ঋণদানযোগ্য ঋণদাস ঋণনির্যাতন ঋণপত্র ঋণপরিশোধ ঋণপ্রতিগ্রহ ঋণপ্রতিদান ঋণপ্রদান ঋণবদ্ধ ঋণভিত্তিক ঋণমুক্ত ঋণমুক্তি ঋণমধ্যস্থতাকারী ঋণরূপে ঋণশোধ ঋণশুদ্ধি ঋণস্বীকার ঋণস্বীকারপত্র ঋণসম্পর্কীয় ঋতু ঋতুকাল ঋতুগত ঋতুচক্র ঋতুধর্মী ঋতুপতি ঋতুপরিবর্তন ঋতুপর্ণা ঋত্বিক ঋতুবদল ঋতুবন্ধ ঋতব্রত ঋতুভেদ ঋতুমতী ঋতম্ভর ঋতম্ভরা ঋতুরাজ ঋতুশ্রেষ্ঠ ঋতুসংখ্যা ঋতুসংহার ঋতুস্নান ঋতুস্রাব ঋদ্ধ ঋদ্ধি ঋদ্ধিমান ঋদ্ধতা ঋভু ঋষি ঋষিকল্প ঋষিজ ঋষিতুল্য ঋষিদ্বয় ঋষিপুত্র ঋষিপ্রোক্ত ঋষিবন্ধু ঋষিব্রাহ্মণ ঋষিশাপ ঋষিশ্রাদ্ধ ঋষিশ্রেষ্ঠ ঋষিসেবিত ঋষ্য ঋষ্টি ঋষ্যমূক ঋষ্যশৃঙ্গ".split(" "),
              w_e: "এ এই এইকাল এইখান এইঘটলে এইজন্য এইট এইযে এইড এইডা এইডস এইতো এইদিক এইদিককার এইদিন এইধরন এইপাশ এইপ্রকার এইবার এইবিভাগ এইবেলা এইভাবে এইমাত্র এইরকম এইরকমভাবে এইরে এইরূপ এইসকল এইসব এইসময় এইহান এওয়ার্ড এওয়ার্ডস এক একআধটা একইদিন একইধরন একুইনাস একইভাবে একইরকম একইসঙ্গে একইসাথে একইসময় একএকদিন একক এককক্ষীয় এক্কা এক্কাগাড়ি এককাট্টা এক্কাদোক্কা এককার্থ এককাল এককালিক এককালীন এককেন্দ্রিক এক্কেবারে এক্কেরে এককোণ এককোল এককোষী এককতারা এককতথ্য এককথা এককদেশ এককপদ এককভাবে এককভাষণ এককুলজাত এককলমি এককস্বর এককসমষ্টি এককড়া একখান একখানা একখানি একখণ্ড একখণ্ডিক একগাছা একগাছি একগাদা একগাল একগুচ্ছ একগোছা একগোটা একগুটি একগুণ একগ্রাম একগলা একগুঁয়ে একগুঁয়েভাবে একগুঁয়েমি একঘেয়ে একঘেয়েমি একঘেয়েমিজনিত একঘণ্টা একঘর একা একাংশ একাউন্ট একাউন্টিং একাউন্টেন্ট একাউন্টস একাকার একাকারা একাকিনী একাকী একাকীত্ব একাক্ষর একাক্ষরিক একাক্ষরিতা একাক্ষরী একাগ্র একাগ্রচিত্ত একাগ্রতা একাগ্রদৃষ্টি একাগ্রভাবে একাঙ্ক একাঙ্কিকা একাজ একাট্টা একাডেমী একাত্তর একাত্ম একাত্মা একাত্মতা একাত্মবাদ একাত্মবাদী একাত্মবোধ একাদিক্রমে একাদশ একাদশী একাধার একাধিক একাধিকার একাধিকারী একাধিপতি একাধিপত্য একান্ত একান্তচারী একান্তপক্ষে একান্তভাবে একান্তর একান্তরকোণ একান্তসচিব একান্ন একান্নবর্তী একান্নভুক্ত একানব্বই একাবলি একাবলী একাভিমুখী একার একারণ একার্থ একার্থক একার্থবোধক একার্থবোধকত্ব একাল একাশি একাশ্রিত একাশ্রয় একাসন একাহার একাহারী একি একিভাবে একী একীকারক একীকৃত একীকরণ একচক্ষু একচালা একচিত্ত একচিমটি একচেটিয়া একচেটিয়াত্ব একচেটিয়াধর্মী একচেটিয়াভাবে একচেটে একচোখ একচোখা একচোখো একচোখোমি একচোট একচোটিয়া একচ্ছত্র একচ্ছত্রবাদ একচতুর্থাংশ একচন্দ্রস্থল একীভূত একীভূতকরণ একীভবন একচর একচুল একচল্লিশ একে এঁকে একেক একেকক্ষেত্র একেকজন একেকদিন একেকভাবে একেকরকম এঁকেছ এঁকেছি এঁকেছিল এঁকেছিলাম এঁকেছিলি এঁকেছিলে এঁকেছিলেন এঁকেছিলেম এঁকেছিলুম এঁকেছিস এঁকেছে এঁকেছেন একেবারে একেলা একেলে একেশ্বর একেশ্বরী একেশ্বরবাদ একেশ্বরবাদী এঁকো একছিটা একছিটে একছুট একছত্র একছবি একজাতি একজাতিভুক্ত একজাতীয় একজাতীয়তা একজীবন একজোট একজোড়া একজ্যাক্ট একজন একজনমাত্র একটু একটুআধটু একটুকরা একটুকরো একটুক্ষণ একটুখানি একযুগ একটা একটাকা একটাকিছু একটান একটানা একটানাভাবে একটামাত্র একটি একটিজামাত এক্টিনাইড এক্টিনিয়াম একটিপ একটিবার একটিভ একটিভেট একটিমাত্র একটেল একযোগ একযোজী একটুমাত্র একঠাঁই একডাক একঢিল একতা একতান একতাবদ্ধ একতাবদ্ধভাবে একতারা একতাল একতালা একতিল এক্তিয়ার একতৃতীয়াংশ একতন্ত্রী একত্ব একত্ববাদ একত্ববাদী একতম একতমা একত্র একত্রকরণ একত্রিংশ একত্রিংশত্তম একত্রিত একত্রিশ একত্রীকারক একত্রীকৃত একত্রীকরণ একত্রীত একত্রীভূত একত্রীভবন একতরফ একতরফা একত্রবদ্ধ একত্ররূপ একতল একতলা একতুড়ি একথা একদা একদিক একদিন একদেশ একদেশদর্শী একদেহ একদৌড় একদণ্ড একদন্ত একদম একদর একদল একদলীয় একদলতা একদৃষ্টি একদৃষ্টে একধাপ একধার একধরণ একধরন একধর্মা একধর্মিতা একধর্মী একনাগাড় একনাম একনায়ক একনায়কতন্ত্র একনিষ্ঠ একনিষ্ঠা একনিষ্ঠতা একনেত্রী একনজর একনম্বর একনলা একপক্ষ একপক্ষাবলম্বী একপক্ষীয় একপাটি একপাদ একপাল একপাশ একপেট একপেশে একপোয়া একপঞ্চাশ একপত্নীক একপত্নীব্রত একপদী একপদীকরণ একপ্রকার একপ্রাণ একপ্রান্ত একপর্যায় একপুরুষ একপ্রস্ত একপশলা একফোঁটা একবংশ একবগগা একবাক্য একবাক্যতা একবার একবারমাত্র একবাস একবাহু একবিংশ একবিংশতি একবিংশতিতম একবিধ একবিধতা একবিন্দু একবিবাহ একবিহীন একবীজপত্রী একবচন একবেলা একবছর একব্যক্তি একবন্ধন একবর্গা একবর্ণ একবর্ষজীবী একবস্ত্র একবস্ত্রা একবয়সী একভাগ একভাব একভাষিকতা একভাষিতা একভাঁড় একমুখ একমুখী একমুখীন একমুখো একমাত্র একমাত্রাব্যাপী একমাত্রিক একমাথা একমালিকানা একমাস একমাস্তুল একমিনিট একমেটে একমৌসুম একমুঠ একমুঠো একমত একমতাবলম্বী একমন একমনা একমুষ্টি একর একরকম একরঙা একরাত একরাত্রি একরামুল একরার একরাশ একুরিয়াম একরৈখিক একরোখা একরতি একরত্তি একরূপ একরূপী একরূপণ একরূপতা একূল একলক্ষ একলগে একলা একলিঙ্গ একলোক একশ একুশ একশৃঙ্গ একশৃঙ্গী একশা একশিরা একশিলা একশেষ একশো একশত একশতাধিক একশতবর্ষব্যাপী একশন একশবার একশভাগ একশ্রেণী এক্ষেত্র একষট্টি এক্ষণ এক্ষণকার এক্স এক্সক্লুসিভ একসঙ্গ একসা এক্সাইটেড একসাথে একসারি এক্সারসাইজ এক্সিডেন্ট এক্সিডেন্টাল এক্সিম এক্সিলারেটর এক্সচেঞ্জ একসেট একসেপ্ট এক্সেল এক্সেস এক্স্যাক্ট এক্সটারনাল এক্সটেনশন এক্সটেনসিভ এক্সট্রা একস্থান একস্থানিক এক্সপার্ট এক্সপার্টাইজ এক্সপার্টস এক্সপেক্ট এক্সপেকটেশানস এক্সপেকটেশন এক্সপেরিমেন্ট এক্সপেরিমেন্টার এক্সপেরিমেন্টাল এক্সপেরিমেন্টস এক্সপোর্ট এক্সপোর্টিং এক্সপ্রেশন এক্সপ্রেস এক্সপ্লোর এক্সপ্লোরার এক্সপ্লোরেশন এক্সপ্লয়েট এক্সবক্স একসময় একসময়কার এক্সরে এক্সরশ্মি এক্সস্কেল একসহস্র একহাজার একহাঁটু একহাত একহাতি একহারা একহৃদয় একুয়াডোর এখান এখানকার এখেলা এখতিয়ার এখন এখনকার এখনি এখুনি এখনো এগ এগার এগারো এগারোজন এগারজন এগারতম এগিয়ে এগিয়েছে এগুচ্ছে এগুচ্ছেন এগুচ্ছো এগো এগোচ্ছ এগোচ্ছে এগোতে এগোন এগোনো এগোরা এগোল এগোলে এগোয় এগোয়নি এগুতে এগুনো এগুবে এগ্রি এগ্রিকালচার এগ্রিকালচারাল এগ্রিমেন্ট এগ্রো এগহেড এঙ্গেল এঙ্গেলস এঙ্গোলা এচিভমেন্ট এঁচেছ এঁচেছি এঁচেছিল এঁচেছিলাম এঁচেছিলি এঁচেছিলে এঁচেছিলেন এঁচেছিলেম এঁচেছিলুম এঁচেছিস এঁচেছে এঁচেছেন এঁচো এঁচোড় এছাড়া এজ এজাতীয় এজাহার এজিদ এজিন এজেন্ট এজেন্সি এজ্যাক্স এজন্য এজমালি এজলা এজলাস এঞ্জিন এঞ্জেল এঞ্জেলা এঞ্জেলো এঞ্জেলস এযুগ এটা এটাইচাই এ্যাওয়ার্ড এ্যাক্সিলারি এযাত্রা এযাবৎ এযাবতকাল এ্যাম্বুলেন্স এ্যালবাম এ্যাসোসিয়েশন এটি এযে এঁটে এঁটেছ এঁটেছি এঁটেছিল এঁটেছিলাম এঁটেছিলি এঁটেছিলে এঁটেছিলেন এঁটেছিলেম এঁটেছিলুম এঁটেছিস এঁটেছে এঁটেছেন এটেল এঁটেল এঁটো এঁটোকাঁটা এঁটোখেকো এটমিক এটর্নি এটলাস এঁটুলি এড এডউইন এডওয়ার্ড এডুকেটর এডুকেশন এডগার এডিট এডিটিং এডিটর এডিডাস এডিনবার্গ এডিনবারা এডিশন এডোবি এডবার্গ এডভান্টেজ এডভান্স এডভান্সড এডভেঞ্চার এডভোকেট এডমিন এডমিনিস্ট্রেট এডমিনিস্ট্রেশন এডমিরাল এড্রেনাল এড্রেস এডলফ এত এতকাল এতকিছু এতক্ষণ এতাদৃশ এতাদৃশী এতাবৎ এতাবৎকাল এতালা এতিম এতিমখানা এতীম এতে এতেক এতেলা এতো এতজন এতদিন এতদূর এতপ্রকার এতবার এতবেলা এতভাবে এতরকম এতরাত এতলোক এতসব এথা এথিকস এথেকে এথেন্স এথলেট এথলেটিক এথলেটিক্স এদিক এদিকওদিক এদিককার এদিন এদের এঁদের এদেশ এদেশি এদেশীয় এঁদো এধার এধারওধার এধরণ এধরন এনকোড এনকোডার এনকোডিং এনা এনাটমি এনাম এনামেল এনার এনার্জি এনালগ এনালাইসিস এনালিস্ট এনায়েত এনায়েতগঞ্জ এনায়েতনগর এনিগমা এনিমেলচলচ্চিত্র এনিমেশন এনিয়ে এনে এনেছ এনেছি এনেছিল এনেছিলাম এনেছিলি এনেছিলে এনেছিলেন এনেছিলেম এনেছিলুম এনেছিস এনেছে এনেছেন এনেস্থিসিয়া এনো এনোড এনজাইম এন্টামিবা এন্টার্কটিক এন্টার্কটিকা এন্টারটেইনিং এন্টারটেইনমেন্ট এন্টারপ্রাইজ এন্টিগুয়া এন্টিজেন এন্টিনিউট্রিনো এন্টিবায়োটিক এন্টিবডি এন্টিভাইরাস এন্টিমনি এন্টেনা এন্টেরোটক্সিন এন্টোনি এন্টোমলজিস্ট এনট্রানস এনট্রান্স এন্ট্রান্স এন্ট্রি এনট্রপি এন্ট্রপি এন্ড এন্ডোপ্লাজমিক এনড্রোমিডা এন্ড্রোমিডা এন্তাকাল এন্তেকাল এন্তেজাম এন্তেজার এনথালপি এনফিল্ড এনফোর্স এনভায়রনমেন্ট এনভায়রনমেন্টাল এনভেলাপ এনভেলপ এনসাইক্লোপিডিয়া এপার এপারওপার এপার্টমেন্ট এপাশ এপিগ্রাফ এপিগ্রাফবিদ এপিগ্রাম এপিটাফ এপিঠ এপিডেমিক এপিসোড এপেক এপেক্স এপেন্ডিসাইটিস এপোক্রিন এপোলো এপথ এপ্রকার এপ্রিল এপ্রিলফুল এপর্যন্ত এপ্রশ্ন এপ্রসঙ্গ এপল এপ্লিকেশন এফেক্ট এফেয়ার এফোঁড় এফোঁড়ওফোঁড় এবং এবাদত এবাদতখানা এবাদতনামা এবার এবারকার এবারো এবারডিন এবিধায় এবিষয় এবিসি এবেলা এবছর এব্যাপার এবম্প্রকার এবমস্তু এবড়ো এবড়োখেবড়ো এভাবে এভারেস্ট এভারেস্টমাউন্টেইন এভারডিন এভিনিউ এম এমু এমুখো এমানুয়েল এমাস এমিটিং এমিনেম এমিরেটস এমিল এমেচার এমত এমতাবস্থায় এমন এমনকি এমনকিছু এমনি এমনিতর এমনতর এমনভাবে এমনসব এমপ্লিফায়ার এমপ্লয়মেন্ট এমফিল এমবাসি এম্বাসেডর এমব্যাসি এমব্রয়ডারি এম্বুলেন্স এমুহূর্ত এমুড়া এমুড়োওমুড়ো এর এঁর এরকম এরকমভাবে এরা এঁরা এরারুট এরিখ এরিজোনা এরিথ্রোমাইসিন এরিনা এরিমধ্য এরিস্টটল এরিস্টন এরচেয়ে এরে এরেস্ট এরোপ্লেন এরোস্পেস এরোসল এরণ্ড এরণ্ডতেল এরণ্ডতৈল এরূপ এরপর এরপরে এরফল এরমাঝ এরমধ্য এরশাদ এরসাথে এলকোহল এলগোরিদম এলগরিদম এলাইত এলাইতাম এলাইতে এলাইতেছ এলাইতেছি এলাইতেছিল এলাইতেছিলাম এলাইতেছিলি এলাইতেছিলে এলাইতেছিলেন এলাইতেছিস এলাইতেছে এলাইতেছেন এলাইতেন এলাইব এলাইবি এলাইবে এলাইবেন এলাইল এলাইলাম এলাইলি এলাইলে এলাইলেন এলাইয়াছ এলাইয়াছি এলাইয়াছিল এলাইয়াছিলাম এলাইয়াছিলি এলাইয়াছিলে এলাইয়াছিলেন এলাইয়াছিস এলাইয়াছে এলাইয়াছেন এলাকা এলাকাজুড়ে এলাকাবাসী এলাকাভুক্ত এলাকাভিত্তিক এলাকাস্থিত এলাচ এলাচি এলাচ্ছিলি এলাচ্ছিলে এলাচ্ছিলেন এলাচ্ছিলেম এলাচ্ছিস এলাচ্ছে এলাচ্ছেন এলাচদানা এলানো এলাবেন এলাম এলালাম এলালি এলালে এলালেন এলালেম এলালুম এলাহাবাদ এলাহি এলায়িত এলিজাবেথ এলিভেটর এলিয়ে এলিয়েছ এলিয়েছি এলিয়েছিল এলিয়েছিলাম এলিয়েছিলি এলিয়েছিলে এলিয়েছিলেন এলিয়েছিলেম এলিয়েছিলুম এলিয়েছিস এলিয়েছে এলিয়েছেন এলিয়েন এলে এলেনবুর্গ এলেবেলে এলেম এলেমদার এলেমবাজ এলো এলোকেশ এলোকেশী এলোধাবাড়ি এলোপাথাড়ি এলোপ্যাথি এলোমেলো এলোমেলোকৃত এলোমেলোভাবে এলোমেলোমি এলবাম এলুম এলুমিনিয়াম এশা এশিয়া এশিয়াউইক এশিয়াকেন্দ্রীয় এশিয়াটিক এশিয়াড এশিয়ান এশিয়ানগেমস এশিয়াবাসী এশিয়ামধ্য এশিয়ামহাদেশ এশিয়েটিক এস এসংক্রান্ত এসংসার এস্কিমো এস্কেলেটর এসকল এসিটিক এসিটোন এসিড এসিডদগ্ধ এসে এসেক্স এসেছ এসেছি এসেছিল এসেছিলাম এসেছিলি এসেছিলে এসেছিলেন এসেছিলেম এসেছিলো এসেছিলুম এসেছিস এসেছে এসেছেন এসেনশিয়াল এসেন্স এসেন্সিয়াল এসেম্বলি এসো এসোসিয়েট এসোসিয়েটেড এসোসিয়েশন এস্টার এস্টেট এস্টেটদ্বয় এস্ট্রোনোমিকাল এস্ট্রোনমি এস্তেমাল এস্তেহার এস্থান এসপারওসপার এসপিওনাজ এসপ্ল্যানেড এসব এসবক্ষেত্র এসবেস্টস এসমাধি এসম্পর্কিত এসমস্ত এসময় এসময়কার এসরাজ এস্রাজ এহেন এহসান এড়া এড়ানো এড়াবার এড়াবেন এড়ায় এড়িলেন এড়িয়ে এড়িয়েও এঁড়ে এঁড়েতর্ক এয়ারওয়েজ এয়ারক্রু এয়ারক্রাফট এয়ারপোর্ট এয়ারব্যাগ এয়ারমার্শাল এয়ারলাইন এয়ারলাইন্স এয়ারসেল এয়ারস্পিড এয়ো এয়োজ এয়োতি এয়োতী এয়োস্ত্রী ে".split(" "),
              w_oi: "ঐ ঐকান্তিক ঐকান্তিকতা ঐকার ঐকাহিক ঐকিক ঐক্য ঐক্যজোট ঐক্যবিধান ঐক্যবোধ ঐক্যবদ্ধ ঐক্যবদ্ধকরণ ঐক্যবদ্ধভাবে ঐক্যমত্য ঐক্যসূত্র ঐক্যস্থাপন ঐকতান ঐকতানবাদক ঐকপত্য ঐকপদ্য ঐকবাক্য ঐকমত ঐকমত্য ঐকরাজ্য ঐকসূত্র ঐখান ঐচ্ছিক ঐচ্ছিকতা ঐচ্ছিকভাবে ঐযে ঐতিহাসিক ঐতিহাসিকযুগ ঐতিহাসিকতা ঐতিহাসিকভাবে ঐতিহ্য ঐতিহ্যগত ঐতিহ্যগতভাবে ঐতিহ্যবাহী ঐতিহ্যমুখী ঐতিহ্যময় ঐতিহ্যময়ী ঐতিহ্যশালী ঐদিক ঐদিককার ঐদিন ঐন্দ্রিলা ঐন্দ্রজালিক ঐপ্রকার ঐভাবে ঐমত ঐরকম ঐরকমভাবে ঐরাবত ঐরাবতসহ ঐরূপ ঐশী ঐশীগুণ ঐশীমায়া ঐশীশক্তি ঐশ্বরিক ঐশ্বরিয়া ঐশ্বর্য ঐশ্বর্যগর্ব ঐশ্বর্যাদি ঐশ্বর্যযুক্ত ঐশ্বর্যযথা ঐশ্বর্যপূর্ণ ঐশ্বর্যবান ঐশ্বর্যবিনাশ ঐশ্বর্যবতী ঐশ্বর্যমণ্ডিত ঐশ্বর্যময় ঐশ্বর্যলাভ ঐশ্বর্যশালিতা ঐশ্বর্যশালিনী ঐশ্বর্যশালী ঐশ্বর্যহীন ঐসকল ঐসব ঐসময় ঐহিক ঐহলৌকিক ৈ".split(" "),
              w_o: "ও ওঁ ওংকার ওঃ ওই ওইখান ওইঘর ওইজাতীয় ওইদিক ওইদিককার ওইদিন ওইধরন ওইপাশ ওইপ্রকার ওইবার ওইভাবে ওইরকম ওইরূপ ওইসব ওইসময় ওক ওকার ওকালত ওকালতি ওকালতনামা ওকি ওকে ওকথা ওকূল ওকলাহোমা ওকল্যান্ড ওখান ওখানকার ওখড়ানো ওগো ওগরাই ওগরাও ওগরাক ওগরাচ্ছ ওগরাচ্ছি ওগরাচ্ছিলাম ওগরাচ্ছিলি ওগরাচ্ছিলে ওগরাচ্ছিলেন ওগরাচ্ছিলেম ওগরাচ্ছিলুম ওগরাচ্ছিস ওগরাচ্ছে ওগরাচ্ছেন ওগরাত ওগরাতাম ওগরাতিস ওগরাতে ওগরাতেন ওগরাতেম ওগরাতুম ওগরান ওগরানো ওগরাব ওগরাবার ওগরাবি ওগরাবে ওগরাবেন ওগরাবো ওগরাল ওগরালাম ওগরালি ওগরালে ওগরালেন ওগরালেম ওগরালুম ওগরাস ওগরায় ওগুলি ওগুলো ওঘর ওঙ্কার ওঙ্কারনাথ ওঙ্কারপূর্বক ওচা ওঁচা ওচাক ওচাচ্ছ ওচাচ্ছি ওচাচ্ছিল ওচাচ্ছিলাম ওচাচ্ছিলি ওচাচ্ছিলে ওচাচ্ছিলেন ওচাচ্ছিলেম ওচাচ্ছিলুম ওচাচ্ছিস ওচাচ্ছে ওচাচ্ছেন ওচাত ওচাতাম ওচাতিস ওচাতে ওচাতেন ওচাতেম ওচাতুম ওচান ওচানো ওচাবে ওচাবেন ওচাবো ওচাল ওচালাম ওচালি ওচালে ওচালেন ওচালেম ওচালুম ওচাস ওচায় ওছাড়া ওছি ওছিয়তনামা ওজু ওজারত ওজারতি ওজোগুণ ওজোন ওজোনস্তর ওজন ওজনকারী ওজনদার ওজনদর ওজনশূন্যতা ওজর ওজরশূন্য ওজস্বিতা ওজস্বিনী ওজস্বী ওজস্বল ওজুহাত ওঝা ওঝাগিরি ওঝাবৃত্তি ওযু ওটুকু ওটুকুন ওটা ওটাং ওটাতো ওটি ওঠ ওঠা ওঠাউঠি ওঠাওঠি ওঠাচ্ছ ওঠাচ্ছি ওঠাচ্ছিল ওঠাচ্ছিলাম ওঠাচ্ছিলি ওঠাচ্ছিলে ওঠাচ্ছিলেন ওঠাচ্ছিলেম ওঠাচ্ছিলুম ওঠাচ্ছিস ওঠাচ্ছে ওঠাচ্ছেন ওঠাত ওঠাতাম ওঠাতিস ওঠাতে ওঠাতেই ওঠাতেন ওঠাতেম ওঠাতুম ওঠান ওঠানামা ওঠানো ওঠানোনামানো ওঠাপড়া ওঠাব ওঠাবার ওঠাবি ওঠাবে ওঠাবেন ওঠাবো ওঠার ওঠাল ওঠালাম ওঠালি ওঠালে ওঠালেন ওঠালেম ওঠালুম ওঠাস ওঠায় ওঠে ওঠেন ওঠেনা ওঠেনি ওঠো ওঠবার ওঠবস ওডিকলোন ওডিমিয়াম ওত ওঁত ওতে ওতপাতা ওতপ্রোত ওতপ্রোতভাবে ওতরা ওৎরাই ওৎরাও ওতরাক ওতরাচ্ছ ওৎরাচ্ছ ওতরাচ্ছি ওৎরাচ্ছি ওতরাচ্ছিল ওৎরাচ্ছিল ওতরাচ্ছিলাম ওৎরাচ্ছিলাম ওতরাচ্ছিলি ওৎরাচ্ছিলি ওতরাচ্ছিলে ওৎরাচ্ছিলে ওতরাচ্ছিলেন ওৎরাচ্ছিলেন ওতরাচ্ছিলেম ওৎরাচ্ছিলেম ওতরাচ্ছিলুম ওৎরাচ্ছিলুম ওতরাচ্ছিস ওৎরাচ্ছিস ওতরাচ্ছে ওৎরাচ্ছে ওতরাচ্ছেন ওৎরাচ্ছেন ওতরাত ওৎরাত ওতরাতাম ওৎরাতাম ওতরাতিস ওৎরাতিস ওতরাতে ওৎরাতে ওতরাতেন ওৎরাতেন ওতরাতেম ওৎরাতেম ওতরাতুম ওৎরাতুম ওতরান ওৎরান ওতরানো ওৎরানো ওতরাব ওৎরাব ওতরাবার ওৎরাবার ওতরাবি ওৎরাবি ওতরাবে ওৎরাবে ওতরাবেন ওৎরাবেন ওতরাবো ওৎরাবো ওতরাল ওৎরাল ওতরালাম ওৎরালাম ওতরালি ওৎরালি ওতরালে ওৎরালে ওতরালেন ওৎরালেন ওতরালেম ওৎরালেম ওতরালুম ওৎরালুম ওতরাস ওৎরাস ওতরায় ওৎরায় ওথেলো ওথলাও ওথলাক ওথলাচ্ছ ওথলাচ্ছি ওথলাচ্ছিল ওথলাচ্ছিলাম ওথলাচ্ছিলি ওথলাচ্ছিলে ওথলাচ্ছিলেন ওথলাচ্ছিলেম ওথলাচ্ছিলুম ওথলাচ্ছিস ওথলাচ্ছে ওথলাচ্ছেন ওথলাত ওথলাতাম ওথলাতিস ওথলাতে ওথলাতেন ওথলাতেম ওথলাতুম ওথলান ওথলানো ওথলাব ওথলাবার ওথলাবি ওথলাবে ওথলাবেন ওথলাবো ওথলাল ওথলালাম ওথলালি ওথলালে ওথলালেন ওথলালেম ওথলালুম ওথলায় ওদিক ওদিককার ওদিন ওদের ওদেশ ওদেশী ওধার ওনা ওপাট ওপার ওপাশ ওপাড় ওপিঠ ওপচা ওপচাই ওপচাও ওপচাক ওপচাচ্ছ ওপচাচ্ছিস ওপচাচ্ছে ওপচাচ্ছেন ওপচাত ওপচাতাম ওপচাতিস ওপচাতে ওপচাতেন ওপচাতেম ওপচাতুম ওপচান ওপচানো ওপচাব ওপচাবার ওপচাবি ওপচাবে ওপচাবেন ওপচাবো ওপচাল ওপচালাম ওপচালি ওপচালে ওপচালেন ওপচালেম ওপচালুম ওপচাস ওপচায় ওপেক ওপেন ওপেনার ওপেনিং ওপেন্টি ওপর ওপরঅলা ওপরআলা ওপরওয়ালা ওপ্রকার ওপরচাল ওপরচালাক ওপরচালাকি ওপরচড়াও ওপরে ওপড়াই ওপড়াও ওপড়াক ওপড়াচ্ছ ওপড়াচ্ছি ওপড়াচ্ছিল ওপড়াচ্ছিলাম ওপড়াচ্ছিলি ওপড়াচ্ছিলে ওপড়াচ্ছিলেন ওপড়াচ্ছিলেম ওপড়াচ্ছিলুম ওপড়াচ্ছে ওপড়াচ্ছেন ওপড়াত ওপড়াতাম ওপড়াতিস ওপড়াতে ওপড়াতেন ওপড়াতেম ওপড়াতুম ওপড়ান ওপড়ানো ওপড়াব ওপড়াবার ওপড়াবি ওপড়াবে ওপড়াবেন ওপড়াবো ওপড়াল ওপড়ালাম ওপড়ালি ওপড়ালে ওপড়ালেন ওপড়ালেম ওপড়ালুম ওপড়াস ওপড়ায় ওফোঁড় ওবার ওভাবে ওভার ওভারটাইম ওভারব্রিজ ওভারভিউ ওভারসীয়ার ওভারহেড ওভাল ওভেন ওম ওমা ওমাটি ওমান ওমানি ওমাস ওমিক্রন ওমিক্রনল্যাব ওমিক্রনল্যাব.কম ওমেগা ওমেন ওমোর ওমনি ওমর ওমরা ওমরাহ ওমরাহ্‌ ওমুড়া ওমুড়ো ওর ওঁর ওরক ওরকম ওরকমি ওরকমভাবে ওরা ওরাং ওরাংওটাং ওরিজিন ওরিজিনাল ওরিয়েন্ট ওরিয়েন্টাল ওরিয়েন্টেড ওরিয়ন ওরে ওরেব্বাস ওর্ডিন্যান্স ওরফে ওরস ওরস্যালাইন ওল ওলকচু ওলকপি ওলা ওলাউঠা ওলাওঠা ওলান ওলানো ওলাবিবি ওলামা ওলিকুল ওলিম্পাস ওলট ওলটকম্বল ওলটা ওলটাই ওলটাও ওলটাক ওলটাচ্ছ ওলটাচ্ছি ওলটাচ্ছিল ওলটাচ্ছিলাম ওলটাচ্ছিলি ওলটাচ্ছিলে ওলটাচ্ছিলেন ওলটাচ্ছিলেম ওলটাচ্ছিলুম ওলটাচ্ছিস ওলটাচ্ছে ওলটাচ্ছেন ওলটাত ওলটাতাম ওলটাতিস ওলটাতে ওলটাতেন ওলটাতেম ওলটাতুম ওলটান ওলটানো ওলটাব ওলটাবার ওলটাবি ওলটাবে ওলটাবেন ওলটাবো ওলটাল ওলটালাম ওলটালি ওলটালে ওলটালেন ওলটালেম ওলটালুম ওলটাস ওলটায় ওলটপালট ওল্ড ওল্ডম্যান ওল্ডহ্যাম ওলন ওলন্দাজ ওলফৎ ওশেনিয়া ওশেনীয় ওষ্ঠ ওষ্ঠাগত ওষ্ঠাগতপ্রাণ ওষ্ঠাগতপ্রায় ওষ্ঠদ্বয় ওষ্ঠপুট ওষ্ঠব্রণ ওষুধ ওষধি ওষধিনাথ ওষধিপতি ওষুধেরঝাঁজ ওষুধপাতি ওষুধপোরা ওষুধপত্র ওষুধপথ্য ওষুধরূপে ওসকাচ্ছ ওসকাচ্ছি ওসকাচ্ছিল ওসকাচ্ছিলাম ওসকাচ্ছিলি ওসকাচ্ছিলে ওসকাচ্ছিলেন ওসকাচ্ছিলেম ওসকাচ্ছিলুম ওসকাচ্ছিস ওসকাচ্ছে ওসকাচ্ছেন ওসকাত ওসকাতাম ওসকাতিস ওসকাতে ওসকাতেন ওসকাতেম ওসকাতুম ওসকান ওসকানো ওসকাব ওসকাবার ওসকাবি ওসকাবে ওসকাবেন ওসকাবো ওসকাল ওসকালাম ওসকালি ওসকালে ওসকালেন ওসকালেম ওসকালুম ওসকাস ওসকায় ওসাকা ওসামা ওসি ওস্তাগর ওস্তাদ ওস্তাদি ওস্তাদিগান ওস্তাদহীন ওসব ওসমানী ওহ ওহাইও ওহাব ওহি ওহী ওহে ওহো ওহম ওহহো ওড় ওড়া ওড়াই ওড়াইও ওড়াইত ওড়াইতাম ওড়াইতিস ওড়াইতে ওড়াইতেছ ওড়াইতেছি ওড়াইতেছিল ওড়াইতেছিলাম ওড়াইতেছিলি ওড়াইতেছিলে ওড়াইতেছিলেন ওড়াইতেছিস ওড়াইতেছে ওড়াইতেছেন ওড়াইতেন ওড়াইব ওড়াইবার ওড়াইবি ওড়াইবে ওড়াইবেন ওড়াইয়া ওড়াইয়াছ ওড়াইয়াছি ওড়াইয়াছিল ওড়াইয়াছিলাম ওড়াইয়াছিলি ওড়াইয়াছিলে ওড়াইয়াছিলেন ওড়াইয়াছিস ওড়াইয়াছে ওড়াইয়াছেন ওড়াচ্ছি ওড়াচ্ছিল ওড়াচ্ছিলাম ওড়াচ্ছিলি ওড়াচ্ছিলে ওড়াচ্ছিলেন ওড়াচ্ছিলেম ওড়াচ্ছিলুম ওড়াচ্ছিস ওড়াচ্ছে ওড়াচ্ছেন ওড়াত ওড়াতাম ওড়াতিস ওড়াতে ওড়াতেন ওড়াতেম ওড়াতুম ওড়ান ওড়ানো ওড়াব ওড়াবার ওড়াবি ওড়াবে ওড়াবেন ওড়াবো ওড়ার ওড়াল ওড়ালাম ওড়ালি ওড়ালে ওড়ালেন ওড়ালেম ওড়ালুম ওড়াস ওড়ায় ওড়িশা ওড়িশি ওড়িয়া ওড়ে ওড়েন ওড়ন ওড়না ওড়পুষ্প ওড়ব ওড়বড়ই ওয়াইন ওয়াইফ ওয়াইল্ড ওয়াও ওয়াক ওয়াকওভার ওয়াকিং ওয়াকিটকি ওয়াকিফ ওয়াকিব ওয়াকিবহাল ওয়াক্ত ওয়াক্‌ফ ওয়াক্‌ফনামা ওয়াগন ওয়াচ ওয়াচড ওয়াজিদ ওয়াজিব ওয়াজির ওয়াজেদ ওয়াট ওয়াটার ওয়াটারপোলো ওয়াটারফ্রন্ট ওয়াটারলু ওয়াটার্স ওয়াটারহুইল ওয়াটসন ওয়াদা ওয়ান ওয়ান্টেড ওয়ান্ডার ওয়ান্ডারফুল ওয়ান্ডারল্যান্ড ওয়ানডে ওয়ান্স ওয়াপ ওয়ার ওয়ারউলফ ওয়ার্ক ওয়ার্কার ওয়ার্কার্স ওয়ার্কিং ওয়ার্কবুক ওয়ার্কশীট ওয়ার্কশপ ওয়ার্কস ওয়ারিদ ওয়ারিশ ওয়ারিশান ওয়ারী ওয়ারেন্ট ওয়ারেন্টওয়ালা ওয়ারেন্টওয়ালী ওয়ার্ড ওয়ার্ডার ওয়ার্ডেন ওয়ারড্রব ওয়ার্ডস ওয়ার্ডসওয়ার্থ ওয়ার্নিং ওয়ারফেজ ওয়ার্ম ওয়ারলেস ওয়ার্ল্ড ওয়ার্স ওয়ার্স্ট ওয়ালা ওয়ালাইকুম ওয়ালি ওয়ালী ওয়াল্টার ওয়ালপেপার ওয়াশিংটন ওয়াশিংটনডিসি ওয়াসা ওয়াসিম ওয়াস্তা ওয়াস্তে ওয়াড় ওয়েট ওয়েটার ওয়েটিং ওয়েটিংরুম ওয়েটস ওয়েদার ওয়েদারিং ওয়েন ওয়েব ওয়েবক্যাম ওয়েবপেইজ ওয়েবপেজ ওয়েবব্রাউজার ওয়েবসাইট ওয়েবস্পেস ওয়েভ ওয়েম্বলি ওয়ের ওয়েল ওয়েলকাম ওয়েলিংটন ওয়েল্ডিং ওয়েলফেয়ার ওয়েলস ওয়েস্ট ওয়েস্টকোট ওয়েস্টার্ন ওয়েস্টবেঙ্গল ওয়েস্টমিনিস্টার ওয়্যাপ ওয়্যার ওয়্যারলেস ওয়্যারহাউজ ো".split(" "),
              w_ou: "ঔ ঔকার ঔচিত্য ঔচিত্যবোধ ঔজ্জ্বল্য ঔজ্জ্বল্যযুক্ত ঔৎকর্ষ ঔৎসুক ঔৎসুক্য ঔদার্য ঔদাস্য ঔদ্ধত্য ঔদ্ধত্যপূর্ণ ঔদ্বাহিক ঔপনিবেশিক ঔপনিবেশিকতা ঔপনিষদ ঔপনিষদিক ঔপন্যাসিক ঔপসর্গিক ঔরস ঔরসজাত ঔরস্য ঔষধ ঔষধগিলা ঔষধগেলা ঔষধাদি ঔষধালয় ঔষধালয়শক্তি ঔষধি ঔষধিগাছ ঔষধিগুণ ঔষধীয় ঔষধদান ঔষধধরা ঔষধবিদ্যা ঔষধশিল্প ঔষধসেবন ৌ".split(" "),
              w_b: "ব বু বং বংগ বংগাব্দ বংগাল বংগদেশ বংশ বংশকৌলীন্য বংশক্রম বংশক্ষয় বংশগৌরব বংশগত বংশগতি বংশগতিবিদ বংশগতিবিদ্যা বংশগতভাবে বংশঘটিত বংশাঙ্কুর বংশানুক্রম বংশানুক্রমিক বংশানুগতিক বংশানুচরিত বংশানুরচিত বংশাবতংস বংশাবলি বংশাবলী বংশাল বংশী বংশচ্যুত বংশীধারী বংশীধ্বনি বংশীধর বংশীবাদক বংশীবাদন বংশীবট বংশীবদন বংশীবয়ান বংশচরিত বংশীলোচন বংশীয় বংশীয়াল বংশেরবাতি বংশোদ্ভূত বংশোদ্ভব বংশজ বংশজাত বংশ্য বংশতালিকা বংশতিলক বংশতরু বংশদণ্ড বংশধারা বংশধ্বংস বংশধ্বজ বংশধর বংশধরহীন বংশনাশ বংশনাশক বংশপত্র বংশপরিচয় বংশপ্রবর্তক বংশপরম্পরা বংশবিলোপ বংশবিস্তার বংশবদ বংশবৃদ্ধি বংশভিত্তিক বংশমণ্ডপ বংশমর্যাদা বংশমর্যাদাহানি বংশমর্যাদাহীন বংশরক্ষা বংশরোচনা বংশলোচন বংশলোপ বংশলতা বংশলতিকা বংশশলাকা বংশসুদ্ধ বংশহীন বৃংহিত বৃংহণ বঅন বআ বই বইকি বইখাতা বঁইচ বঁইচি বইছ বইছি বইছিল বইছিলাম বইছিলি বইছিলে বইছিলেন বইছিলেম বইছিলুম বইছিস বইছে বইছেন বুইঝা বইটই বইঠা বইত বইতাম বইতিস বইতে বইতেছিল বইতেছিলাম বইতেছিলি বইতেছিলে বইতেছিলেন বইতেছিলেম বইতেছিলুম বইতেন বইতেম বইতুম বইদুটি বইন বইপাগল বইপাঠ বইপত্র বইপড়া বইব বইবাজার বইবার বইবি বইবে বইবেন বইবো বইমেলা বইল বুইল বইলা বইলাম বইলি বইলে বইলেন বইলেম বইলো বইলুম বইসা বইয়ে বইয়েছ বইয়েছি বইয়েছিল বইয়েছিলাম বইয়েছিলি বইয়েছিলে বইয়েছিলেন বইয়েছিলেম বইয়েছিলুম বইয়েছিস বইয়েছে বইয়েছেন বইয়েন বইয়েরপোকা বইয়ো বউ বউকাঁটকি বউগড়া বউচি বউঝি বউটুবানি বউঠান বউদি বউদিদি বউনি বউনী বউবেটি বউভাত বউমা বউমানুষ বউল বউলা বউলি বউলী বউড়ি বউড়ী বও বওয়া বওয়াক বওয়াচ্ছ বওয়াচ্ছি বওয়াচ্ছিল বওয়াচ্ছিলাম বওয়াচ্ছিলি বওয়াচ্ছিলে বওয়াচ্ছিলেন বওয়াচ্ছিলেম বওয়াচ্ছিলুম বওয়াচ্ছিস বওয়াচ্ছে বওয়াচ্ছেন বওয়াট বওয়াটে বওয়াত বওয়াতাম বওয়াতিস বওয়াতে বওয়াতেন বওয়াতেম বওয়াতুম বওয়ান বওয়ানো বওয়াব বওয়াবার বওয়াবি বওয়াবে বওয়াবেন বওয়াবো বওয়াল বওয়ালাম বওয়ালি বওয়ালে বওয়ালেন বওয়ালেম বওয়ালুম বওয়াস বক বুক বৃক বকুক বুক্ক বৃক্ক বুক্কা বক্কাল বুককিপার বুককিপিং বৃক্কীয় বক্কেশ্বর বৃক্কবিদ্যা বুক্কুশী বৃক্কশল্যবিদ্যা বুকখোলা বকা বকাই বকাইও বকাইত বকাইতাম বকাইতিস বকাইতে বকাইতেছ বকাইতেছি বকাইতেছিল বকাইতেছিলাম বকাইতেছিলি বকাইতেছিলে বকাইতেছিলেন বকাইতেছিস বকাইতেছে বকাইতেছেন বকাইতেন বকাইব বকাইবার বকাইবি বকাইবে বকাইবেন বকাইল বকাইলাম বকাইলি বকাইলে বকাইলেন বকাইয়া বকাইয়াছ বকাইয়াছি বকাইয়াছিল বকাইয়াছিলাম বকাইয়াছিলি বকাইয়াছিলে বকাইয়াছিলেন বকাইয়াছিস বকাইয়াছে বকাইয়াছেন বকাইয়ো বকাক বকাচ্ছ বকাচ্ছি বকাচ্ছিল বকাচ্ছিলাম বকাচ্ছিলি বকাচ্ছিলে বকাচ্ছিলেন বকাচ্ছিলেম বকাচ্ছিলুম বকাচ্ছিস বকাচ্ছে বকাচ্ছেন বকাঝকা বকাট বকাণ্ডন্যায় বকাণ্ডপ্রত্যাশা বকাত বকাতাম বকাতিস বকাতে বকাতেন বকাতেম বকাতুম বকান বকানো বকাব বকাবকি বকাবার বকাবি বকাবে বকাবেন বকাবো বকামি বকামো বুকার বকাল বকালাম বকালি বকালে বকালেন বকালেম বকালুম বকাস বকি বুকি বুকিং বকিত বকিতাম বকিতিস বকিতে বকিতেছ বকিতেছি বকিতেছিল বকিতেছিলাম বকিতেছিলি বকিতেছিলে বকিতেছিলেন বকিতেছিস বকিতেছে বকিতেছেন বকিতেন বকিব বকিবার বকিবি বকিবে বকিবেন বকিল বকিলাম বকিলি বকিলে বকিলেন বকিস বকিয়া বকিয়াছ বকিয়াছি বকিয়াছিল বকিয়াছিলাম বকিয়াছিলি বকিয়াছিলে বকিয়াছিলেন বকিয়াছিস বকিয়াছে বকিয়াছেন বকিয়ে বকিয়েছ বকিয়েছি বকিয়েছিল বকিয়েছিলাম বকিয়েছিলি বকিয়েছিলে বকিয়েছিলেন বকিয়েছিলেম বকিয়েছিলুম বকিয়েছিস বকিয়েছে বকিয়েছেন বকিয়ো বুকচিতিয়ে বুকচেরা বকচর বকে বকেছ বকেছি বকেছিল বকেছিলাম বকেছিলি বকেছিলে বকেছিলেন বকেছিলেম বকেছিলুম বকেছিস বকেছে বকেছেন বকেন বুকেপিঠে বুকেরপাটা বকেয়া বকেয়াখাজনা বকো বৃকোদর বকছ বকছি বকছিল বকছিলাম বকছিলি বকছিলে বকছিলেন বকছিলেম বকছিলুম বকছিস বকছে বকছেন বকৌলি বুকজোড়া বুকজল বুকজুড়ানো বুকযুক্ত বকযন্ত্র বুকঠোকা বকঠুঁটো বুকডন বকত বক্তা বকতাম বক্তাশ্রোতা বক্তিমে বকতিস বকতে বকতেন বকতেম বক্তৃতা বক্তৃতাকার বক্তৃতাকারী বক্তৃতাপটু বক্তৃতামঞ্চ বক্তব্য বক্তব্যগত বক্তব্যধর্মী বকতুম বক্ত্র বুকদিয়া বকধার্মিক বকধ্যান বকুন বকনা বকুনি বুকনি বকুনিঝকুনি বুকপকেট বুকপাতা বুকপোস্ট বুকফাটা বকফুল বকব বকবক বকবকানি বকবকানো বকবকম বকবকুম বকবাকুম বুকবাঁধা বকবার বকবি বকবে বকবেন বকবো বকবৃত্তি বকব্রতী বুকভাঙ্গা বুকভরা বকম বকমকাঠ বকমুখ বুকমার্ক বকমণ্ডলী বকর বক্র বক্রকটাক্ষ বক্রগামী বক্রগতি বক্রগ্রীব বকরা বক্রাক্ষ বক্রাদি বকরি বকরিদ বকরিদি বক্রিমা বকরী বক্রী বক্রীকৃত বক্রীকরণ বকরীদ বকরীদি বক্রেশ্বর বক্রোক্তি বক্রণ বক্রতা বক্রতাজনিত বক্রতাযুক্ত বক্রতল বক্রদৃষ্টি বক্রপথ বক্রপৃষ্ঠ বকরবকর বক্রব্যবহার বক্রভাবে বক্ররেখা বক্ররৈখিক বকুল বকলাম বকলি বকলে বুকলেট বকলেন বকলেম বকলম বকলুম বকলশ বকলস বকশি বকশিশ বকশিস বকশী বকশীবাজার বুকশেলফ বক্ষ বৃক্ষ বক্ষঃপঞ্জর বক্ষঃস্থল বক্ষঃস্পন্দন বৃক্ষকাণ্ড বৃক্ষকোটর বক্ষকোষ্ঠক বক্ষগহ্বর বৃক্ষাগ্র বৃক্ষাদি বৃক্ষান্তরাল বৃক্ষচারী বৃক্ষচিত্র বৃক্ষচ্ছায় বৃক্ষচ্ছায়া বৃক্ষচ্যুত বৃক্ষচর বৃক্ষচূড়া বক্ষোজ বক্ষোজাত বক্ষোপরি বক্ষোভূষণ বক্ষোরুহ বৃক্ষছক বৃক্ষজাত বৃক্ষযুক্ত বক্ষযন্ত্রণা বক্ষ্যমাণ বৃক্ষত্বক বৃক্ষত্রয় বৃক্ষতল বক্ষদেশ বৃক্ষনির্যাস বক্ষপিঞ্জর বক্ষপঞ্জর বক্ষপট বৃক্ষপত্র বৃক্ষবাটিকা বক্ষবাস বৃক্ষবাসী বক্ষবন্ধনী বক্ষভাগ বৃক্ষমূল বৃক্ষরাজি বৃক্ষরোপণ বৃক্ষরস বৃক্ষলতা বৃক্ষলতাদি বৃক্ষলতাপাতা বৃক্ষশাখা বৃক্ষশোভিত বৃক্ষশ্রেষ্ঠ বক্ষস্থ বক্ষস্থল বক্ষস্পন্দন বৃক্ষহীন বক্স বুকস বুকসই বক্সকৃত বক্সার বকসি বক্সিং বকসিস বকসী বক্সী বুকসেলার বুকস্টল বুকড়ি বুকড়ী বখুক বখা বখাই বখাইও বখাইত বখাইতাম বখাইতিস বখাইতে বখাইতেছ বখাইতেছি বখাইতেছিল বখাইতেছিলাম বখাইতেছিলি বখাইতেছিলে বখাইতেছিলেন বখাইতেছিস বখাইতেছে বখাইতেছেন বখাইতেন বখাইব বখাইবার বখাইবি বখাইবে বখাইবেন বখাইল বখাইলাম বখাইলি বখাইলে বখাইলেন বখাইয়া বখাইয়াছ বখাইয়াছি বখাইয়াছিল বখাইয়াছিলাম বখাইয়াছিলি বখাইয়াছিলে বখাইয়াছিলেন বখাইয়াছিস বখাইয়াছে বখাইয়াছেন বখাইয়ো বখাক বখাচ্ছ বখাচ্ছি বখাচ্ছিল বখাচ্ছিলাম বখাচ্ছিলি বখাচ্ছিলে বখাচ্ছিলেন বখাচ্ছিলেম বখাচ্ছিলুম বখাচ্ছিস বখাচ্ছে বখাচ্ছেন বখাটে বখাটেপনা বখাত বখাতাম বখাতিস বখাতেন বখাতেম বখাতুম বখান বখানো বখাব বখাবার বখাবি বখাবে বখাবেন বখাবো বখামি বখামো বখাল বখালাম বখালে বখালেন বখালেম বখালুম বখাস বখি বখিত বখিতাম বখিতিস বখিতে বখিতেছ বখিতেছি বখিতেছিল বখিতেছিলাম বখিতেছিলি বখিতেছিলে বখিতেছিলেন বখিতেছিস বখিতেছে বখিতেছেন বখিতেন বখিব বখিবার বখিবি বখিবে বখিবেন বখিল বখিলাম বখিলি বখিলে বখিলেন বখিস বখিয়া বখিয়াছ বখিয়াছি বখিয়াছিল বখিয়াছিলাম বখিয়াছিলি বখিয়াছিলে বখিয়াছিলেন বখিয়াছিস বখিয়াছে বখিয়াছেন বখিয়ে বখিয়েছ বখিয়েছি বখিয়েছিল বখিয়েছিলাম বখিয়েছিলি বখিয়েছিলে বখিয়েছিলেন বখিয়েছিলেম বখিয়েছিলুম বখিয়েছিস বখিয়েছে বখিয়েছেন বখিয়ো বখে বখেছ বখেছি বখেছিল বখেছিলাম বখেছিলি বখেছিলে বখেছিলেন বখেছিলেম বখেছিলুম বখেছিস বখেছে বখেছেন বখেন বখেড়া বখেয়া বখো বখছ বখছি বখছিল বখছিলাম বখছিলি বখছিলে বখছিলেন বখছিলেম বখছিলুম বখছিস বখছে বখছেন বখত বখতাম বখতিস বখতিয়ার বখতে বখতেন বখতেম বখতুম বখুন বখব বখবার বখবি বখবে বখবেন বখবো বখরা বখরাদার বখরাদারি বখল বখলাম বখলি বখলে বখলেন বখলেম বখলুম বখশ বখশিশ বখশী বগ বুগ বগা বগি বগী বগচর বগদুল বগুনা বুগবুগি বগল বগলা বগুলা বগলি বগলদাবা বগলস বগড় বগুড়া বগড়ম বগয়রহ বঙ্ক বঙ্কা বঙ্কিম বঙ্কিমা বঙ্কিমতা বঙ্কিমবিহারী বঙ্খুর বঙ্গ বঙ্গা বঙ্গানুবাদ বঙ্গানুবাদক বঙ্গাব্দ বঙ্গাল বঙ্গালী বুঙ্গি বঙ্গীয় বঙ্গেত বঙ্গেশ্বর বঙ্গোপসাগর বঙ্গজ বঙ্গদেশ বঙ্গদর্শন বঙ্গনারী বঙ্গবাণী বঙ্গবাসী বঙ্গবীর বঙ্গবন্ধু বঙ্গভঙ্গ বঙ্গভাষা বঙ্গভাষিণী বঙ্গভাষী বঙ্গভবন বঙ্গভূমি বঙ্গমহিলা বঙ্গশ্রী বঙ্গসংস্কৃতি বঙ্গসাহিত্য বঙ্গসমাজ বা বাঁ বাংগি বাংগিদার বাংরেজি বাংলা বাংলাচ্যানেল বাংলাচরিত্র বাংলাচলচ্চিত্র বাংলাতালিকা বাংলাদেশ বাংলাদেশি বাংলাদেশী বাংলাদেশীয় বাংলাদেশে বাংলাদেশের বাংলানাম বাংলাপিডিয়া বাংলাপঞ্জিকা বাংলাপত্রিকা বাংলাবই বাংলাবাজার বাংলাবিশ্বকোষ বাংলাব্যাকরণ বাংলাব্যান্ড বাংলাবর্ণ বাংলাবর্ণমালা বাংলাভাষা বাংলাভাষী বাংলামাস বাংলামটর বাংলামতে বাংলারখাদ্য বাংলারূপ বাংলারপাখি বাংলারমিষ্টি বাংলালিংক বাংলালিপি বাংলালোকসাহিত্য বাংলাসংবাদপত্র বাংলাসংস্কৃতি বাংলাসঙ্গীত বাংলাসাহিত্য বাংলাসন বাংলিশ বাংলো বাঃ বাঅ বাঅন বাআদাব বাই বাঁই বাইক বাইচ বাইচালি বাইছ বাইছা বাইছি বাইছিল বাইছিলাম বাইছিলি বাইছিলে বাইছিলেন বাইছিলেম বাইছিলুম বাইছিস বাইছে বাইজ বাইজি বাইজী বাইজীগান বাইটা বাইত বাইতাম বাইতি বাইতিস বাইতে বাইতেছিল বাইতেছিলাম বাইতেছিলি বাইতেছিলে বাইতেছিলেন বাইতেছিলেম বাইতেছিলুম বাইতেন বাইতেম বাইতুম বাইদ বাইন বাইনাচ বাইনোকুলার বাইন্ড বাইন্ডিং বাইন্দা বাইপাস বাইপোলার বাইব বাঁইবাঁই বাইবার বাইবি বাইবে বাইবেন বাইবেল বাইবেলীয় বাইবো বাইম বাইর বাইরে বাইরেবাহির বাইল বাইলাম বাইলি বাইলে বাইলেন বাইলেম বাইলুম বাইশ বাইশা বাইশে বাইশজন বাইস বাইসাইকেল বাইসিকল বাইসম্যান বাইড়ান বাইয়া বাঁইয়া বাঈ বাউ বাউই বাউকুড়ানি বাউটা বাউটি বাউটী বাউণ্ডুলিপনা বাউণ্ডুলে বাউণ্ডুলেপনা বাউনি বাউন্ডারি বাউরা বাউরি বাউরী বাউল বাউলকূল বাউলগান বাউলা বাউলি বাউলিয়ানা বাউলী বাউলসুর বাউস বাও বাঁও বাওটা বাওডিম বাঁওড় বাওড়ি বাওয়া বাওয়াডিম বাওয়ালি বাওয়ালী বাক বাঁক বাঁকুক বাককলহ বাঁকা বাঁকাই বাঁকাইও বাঁকাইত বাঁকাইতাম বাঁকাইতিস বাঁকাইতে বাঁকাইতেছ বাঁকাইতেছি বাঁকাইতেছিল বাঁকাইতেছিলাম বাঁকাইতেছিলি বাঁকাইতেছিলে বাঁকাইতেছিলেন বাঁকাইতেছিস বাঁকাইতেছে বাঁকাইতেছেন বাঁকাইতেন বাঁকাইব বাঁকাইবার বাঁকাইবি বাঁকাইবে বাঁকাইবেন বাঁকাইল বাঁকাইলাম বাঁকাইলি বাঁকাইলে বাঁকাইলেন বাঁকাইয়া বাঁকাইয়াছ বাঁকাইয়াছি বাঁকাইয়াছিল বাঁকাইয়াছিলাম বাঁকাইয়াছিলি বাঁকাইয়াছিলে বাঁকাইয়াছিলেন বাঁকাইয়াছিস বাঁকাইয়াছে বাঁকাইয়াছেন বাঁকাইয়ো বাঁকাক বাঁকাকথা বাঁকাচোরা বাঁকাচ্ছ বাঁকাচ্ছি বাঁকাচ্ছিল বাঁকাচ্ছিলাম বাঁকাচ্ছিলি বাঁকাচ্ছিলে বাঁকাচ্ছিলেন বাঁকাচ্ছিলেম বাঁকাচ্ছিলুম বাঁকাচ্ছিস বাঁকাচ্ছে বাঁকাচ্ছেন বাঁকাত বাঁকাতাম বাঁকাতিস বাঁকাতে বাঁকাতেন বাঁকাতেম বাঁকাতুম বাঁকান বাঁকানো বাঁকাব বাঁকাবার বাঁকাবি বাঁকাবে বাঁকাবেন বাঁকাবো বাঁকাভাব বাঁকারি বাঁকাল বাঁকালাম বাঁকালি বাঁকালে বাঁকালেন বাঁকালেম বাঁকালুম বাঁকাস বাকি বাঁকি বাকিজায় বাঁকিত বাঁকিতাম বাঁকিতিস বাঁকিতে বাঁকিতেছ বাঁকিতেছি বাঁকিতেছিল বাঁকিতেছিলাম বাঁকিতেছিলি বাঁকিতেছিলে বাঁকিতেছিলেন বাঁকিতেছিস বাঁকিতেছে বাঁকিতেছেন বাঁকিতেন বাকিদের বাঁকিব বাকিবকেয়া বাঁকিবার বাঁকিবি বাঁকিবে বাঁকিবেন বাঁকিল বাঁকিলাম বাঁকিলি বাঁকিলে বাঁকিলেন বাঁকিস বাকিয়া বাঁকিয়া বাঁকিয়াছ বাঁকিয়াছি বাঁকিয়াছিল বাঁকিয়াছিলাম বাঁকিয়াছিলি বাঁকিয়াছিলে বাঁকিয়াছিলেন বাঁকিয়াছিস বাঁকিয়াছে বাঁকিয়াছেন বাঁকিয়ে বাঁকিয়েছ বাঁকিয়েছি বাঁকিয়েছিল বাঁকিয়েছিলাম বাঁকিয়েছিলি বাঁকিয়েছিলে বাঁকিয়েছিলেন বাঁকিয়েছিলেম বাঁকিয়েছিলুম বাঁকিয়েছিস বাঁকিয়েছে বাঁকিয়েছেন বাঁকিয়ো বাকী বাকচাতুরী বাকচাতুর্য বাকীবকেয়া বাঁকে বাঁকেন বাঁকছ বাঁকছি বাঁকছিল বাঁকছিলাম বাঁকছিলি বাঁকছিলে বাঁকছিলেন বাঁকছিলেম বাঁকছিলুম বাঁকছিস বাঁকছে বাঁকছেন বাকছল বাক্য বাক্যকাঠামো বাক্যখেলা বাক্যগঠনগত বাক্যগঠনরীতি বাক্যগত বাক্যাংশ বাক্যাতীত বাক্যান্তর বাক্যার্থ বাক্যালংকার বাক্যালংকারযুক্ত বাক্যালাপ বাক্যচ্ছেদ বাক্যজাল বাক্যতাত্ত্বিক বাক্যতত্ত্ব বাক্যদান বাকযুদ্ধ বাক্যনিঃসরণ বাক্যনিপুণ বাক্যনিষ্ঠা বাক্যনবাব বাক্যপ্রবাহ বাক্যবাগীশ বাক্যবাণ বাক্যবিনিময় বাক্যবিভাজন বাক্যবিশারদ বাক্যবিশ্লেষণ বাক্যবীর বাক্যব্যয় বাক্যরীতি বাক্যরচনা বাক্যশিক্ষা বাক্যসংগীত বাক্যসংযম বাক্যসংহার বাক্যস্থ বাক্যস্থিত বাক্যস্ফূর্তি বাক্যস্রোত বাক্যহারা বাক্যহীন বাঁকত বাঁকতাম বাকতাল্লা বাঁকতিস বাঁকতে বাঁকতেন বাঁকতেম বাঁকতুম বাকত্রিয়া বাকত্রীয় বাকত্রুটি বাক্ত্রুটি বাঁকুন বাঁকনল বাকপারুষ্য বাকপটু বাকপটুতা বাকপতি বাকপ্রণালি বাঁকব বাকবাকম বাঁকবার বাঁকবি বাকবিতণ্ডা বাকবিভূতি বাঁকবে বাঁকবেন বাঁকবো বাকম বাঁকমল বাকরীতি বাকরোধ বাকল বাঁকল বাকলা বাঁকলাম বাঁকলি বাকলে বাঁকলে বাঁকলেন বাঁকলেম বাকলো বাঁকলুম বাকশক্তি বাকশৈলী বাক্স বাকসংকেত বাকসংযম বাকসিদ্ধ বাকসিদ্ধা বাক্সজাত বাক্সযুক্ত বাকস্পন্দ বাকস্ফূর্তি বাক্সবন্দি বাক্সবন্দী বাকসর্বস্ব বাকড় বাকুড়া বাঁকড়া বাঁকুড়া বাঁকুয়া বাখান বাখানি বাখানে বাখারি বাঁখারি বাখারী বাখরখানি বাখরাবাদ বাখড় বাখড়া বাগ বাগা বাগাই বাগাইও বাগাইত বাগাইতাম বাগাইতিস বাগাইতে বাগাইতেছ বাগাইতেছি বাগাইতেছিল বাগাইতেছিলাম বাগাইতেছিলি বাগাইতেছিলে বাগাইতেছিলেন বাগাইতেছিস বাগাইতেছে বাগাইতেছেন বাগাইতেন বাগাইব বাগাইবার বাগাইবি বাগাইবে বাগাইবেন বাগাইল বাগাইলাম বাগাইলি বাগাইলে বাগাইলেন বাগাইয়া বাগাইয়াছ বাগাইয়াছি বাগাইয়াছিল বাগাইয়াছিলাম বাগাইয়াছিলি বাগাইয়াছিলে বাগাইয়াছিলেন বাগাইয়াছিস বাগাইয়াছে বাগাইয়াছেন বাগাইয়ো বাগাক বাগাচ্ছ বাগাচ্ছি বাগাচ্ছিল বাগাচ্ছিলাম বাগাচ্ছিলি বাগাচ্ছিলে বাগাচ্ছিলেন বাগাচ্ছিলেম বাগাচ্ছিলুম বাগাচ্ছিস বাগাচ্ছে বাগাচ্ছেন বাগাত বাগাতাম বাগাতিস বাগাতে বাগাতেন বাগাতেম বাগাতুম বাগান বাগানো বাগানবাড়ি বাগানবাড়ী বাগানশোভিত বাগানসমন্বিত বাগাব বাগাবার বাগাবি বাগাবে বাগাবেন বাগাবো বাগার বাগাল বাগালাম বাগালি বাগালে বাগালেন বাগালেম বাগালুম বাগাস বাগাড় বাগাড়ম্বর বাগি বাগিচা বাগিন্দ্রিয় বাগিয়ে বাগিয়েছ বাগিয়েছি বাগিয়েছিল বাগিয়েছিলাম বাগিয়েছিলি বাগিয়েছিলে বাগিয়েছিলেন বাগিয়েছিলেম বাগিয়েছিলুম বাগিয়েছিস বাগিয়েছে বাগিয়েছেন বাগিয়ো বাগী বাগীশ বাগীশা বাগীশ্বর বাগীশ্বরী বাগে বাগেএরাম বাগেবাগ বাগেরহাট বাগেশ্রী বাগেশ্রীরাগ বাগজাল বাগযুদ্ধ বাগডাশ বাগডাসা বাগডোর বাগডুম বাগডম্বর বাগদাচিংড়ি বাগদাচিংড়ী বাগদাদ বাগদান বাগদি বাগদী বাগদেবী বাগদত্তা বাগধারা বাগবাকম বাগবাগিচা বাগবাজার বাগবাদিনী বাগবান বাগবানি বাগবিতণ্ডা বাগবিদগ্ধ বাগবিধি বাগ্বিধি বাগ্বিধিসম্মত বাগ্বিন্যাস বাগবিভূতি বাগ্বিস্তার বাগ্বৈদগ্ধ্য বাগ্বৈশিষ্ট্য বাগ্মিতা বাগ্মী বাগুরা বাগুলা বাগড় বাগড়া বাগুড়া বাগড়ি বাগড়ম বাঘ বাঘা বাঘাটে বাঘাম্বর বাঘারপাড়া বাঘাড় বাঘিনী বাঘী বাঘেরচামড়া বাঘেরদুধ বাঘেরপাড়া বাঘেরমাসি বাঘছাল বাঘছড়ি বাঘডাশা বাঘনখ বাঘবন্দি বাঘমারা বাঘমারি বাঘসিংহাদি বাঙ্কার বাঙ্গাল বাঙ্গালা বাঙ্গালি বাঙ্গালী বাঙ্গালনী বাঙ্গি বাঙ্গিদার বাঙ্গী বাঙাল বাঙালি বাঙালিগায়ক বাঙালিগীতিকার বাঙালিচিকিৎসক বাঙালিচিত্রশিল্পী বাঙালিচিন্তাবিদ বাঙালিজাতি বাঙালিলেখক বাঙালিসুলভ বাঙালী বাঙালীজাতি বাঙালীবাবু বাঙালসুলভ বাঙনিষ্ঠ বাঙনিষ্ঠা বাঙনিষ্পত্তি বাঙমুখ বাঙ্মাত্র বাঙমন বাঙমনস বাঙময় বাঙময়ী বাঙলা বাচ বাঁচ বাচক বাঁচুক বাচকতা বাচা বাঁচা বাঁচাই বাঁচাইও বাঁচাইত বাঁচাইতাম বাঁচাইতিস বাঁচাইতে বাঁচাইতেছ বাঁচাইতেছি বাঁচাইতেছিল বাঁচাইতেছিলাম বাঁচাইতেছিলি বাঁচাইতেছিলে বাঁচাইতেছিলেন বাঁচাইতেছিস বাঁচাইতেছে বাঁচাইতেছেন বাঁচাইতেন বাঁচাইব বাঁচাইবার বাঁচাইবি বাঁচাইবে বাঁচাইবেন বাঁচাইল বাঁচাইলাম বাঁচাইলি বাঁচাইলে বাঁচাইলেন বাঁচাইয়া বাঁচাইয়াছ বাঁচাইয়াছি বাঁচাইয়াছিল বাঁচাইয়াছিলাম বাঁচাইয়াছিলি বাঁচাইয়াছিলে বাঁচাইয়াছিলেন বাঁচাইয়াছিস বাঁচাইয়াছে বাঁচাইয়াছেন বাঁচাইয়ো বাঁচাক বাঁচাচ্ছ বাঁচাচ্ছি বাঁচাচ্ছিল বাঁচাচ্ছিলাম বাঁচাচ্ছিলি বাঁচাচ্ছিলে বাঁচাচ্ছিলেন বাঁচাচ্ছিলেম বাঁচাচ্ছিলুম বাঁচাচ্ছিস বাঁচাচ্ছে বাঁচাচ্ছেন বাচাটি বাঁচাত বাঁচাতাম বাঁচাতিস বাঁচাতে বাঁচাতেন বাঁচাতেম বাঁচাতুম বাঁচান বাঁচানো বাঁচাব বাঁচাবার বাঁচাবি বাঁচাবে বাঁচাবেন বাঁচাবো বাচাল বাঁচাল বাঁচালাম বাঁচালি বাঁচালে বাঁচালেন বাঁচালেম বাঁচালো বাচালতা বাঁচালুম বাঁচাস বাঁচি বাচিক বাচিকপত্র বাচিকহারক বাঁচিত বাঁচিতাম বাঁচিতিস বাঁচিতে বাঁচিতেছ বাঁচিতেছি বাঁচিতেছিল বাঁচিতেছিলাম বাঁচিতেছিলি বাঁচিতেছিলে বাঁচিতেছিলেন বাঁচিতেছিস বাঁচিতেছে বাঁচিতেছেন বাঁচিতেন বাঁচিব বাঁচিবার বাঁচিবি বাঁচিবে বাঁচিবেন বাঁচিল বাঁচিলাম বাঁচিলি বাঁচিলে বাঁচিলেন বাঁচিস বাঁচিয়া বাঁচিয়াছ বাঁচিয়াছি বাঁচিয়াছিল বাঁচিয়াছিলাম বাঁচিয়াছিলি বাঁচিয়াছিলে বাঁচিয়াছিলেন বাঁচিয়াছিস বাঁচিয়াছে বাঁচিয়াছেন বাঁচিয়ে বাঁচিয়েছ বাঁচিয়েছি বাঁচিয়েছিল বাঁচিয়েছিলাম বাঁচিয়েছিলি বাঁচিয়েছিলে বাঁচিয়েছিলেন বাঁচিয়েছিলেম বাঁচিয়েছিলুম বাঁচিয়েছিস বাঁচিয়েছে বাঁচিয়েছেন বাঁচিয়ো বাচ্চু বাচ্চা বাচ্চাকাচ্চা বাঁচে বাঁচেন বাঁচেনা বাঁচো বাঁচোয়া বাঁচছ বাঁচছি বাঁচছিল বাঁচছিলাম বাঁচছিলি বাঁচছিলে বাঁচছিলেন বাঁচছিলেম বাঁচছিলুম বাঁচছিস বাঁচছে বাঁচছেন বাচ্য বাচ্যার্থ বাচ্যার্থসংশ্লিষ্ট বাঁচত বাঁচতাম বাঁচতিস বাঁচতে বাঁচতেন বাঁচতেম বাঁচতুম বাচন বাঁচন বাঁচুন বাচনকৌশল বাচনিক বাচনীয় বাচনপথ বাচনভঙ্গি বাঁচনমরণ বাঁচব বাঁচবার বাঁচবি বাচবিচার বাঁচবে বাঁচবেন বাঁচবো বাঁচল বাঁচলাম বাঁচলি বাঁচলে বাঁচলেন বাঁচলেম বাঁচলুম বাচস্পতি বাছ বাছুক বাছা বাছাই বাছাইকৃত বাছাইকরা বাছাইকরণ বাছাইপর্ব বাছাধন বাছান বাছানো বাছাবাছা বাছাবাছি বাছাল বাছি বাছিও বাছিত বাছিতাম বাছিতিস বাছিতে বাছিতেছ বাছিতেছি বাছিতেছিল বাছিতেছিলাম বাছিতেছিলি বাছিতেছিলে বাছিতেছিলেন বাছিতেছিস বাছিতেছে বাছিতেছেন বাছিতেন বাছিব বাছিবার বাছিবি বাছিবে বাছিবেন বাছিল বাছিলাম বাছিলি বাছিলে বাছিলেন বাছিস বাছিয়া বাছিয়াছ বাছিয়াছি বাছিয়াছিল বাছিয়াছিলাম বাছিয়াছিলি বাছিয়াছিলে বাছিয়াছিলেন বাছিয়াছিস বাছিয়াছে বাছিয়াছেন বাছিয়ো বাছে বাছেন বাছছ বাছছি বাছছিল বাছছিলাম বাছছিলি বাছছিলে বাছছিলেন বাছছিলেম বাছছিলুম বাছছিস বাছছে বাছছেন বাছত বাছতাম বাছতিস বাছতে বাছতেন বাছতেম বাছতুম বাছন বাছুন বাছনি বাছুনি বাছপড়া বাছব বাছবার বাছবি বাছবিচার বাছবিচারহীন বাছবে বাছবেন বাছবো বাছুর বাছল বাছলাম বাছলি বাছলে বাছলেন বাছলেম বাছলুম বাজ বাজু বাজুক বাজখাঁই বাজা বাঁজা বাজাই বাজাইও বাজাইত বাজাইতাম বাজাইতিস বাজাইতে বাজাইতেছ বাজাইতেছি বাজাইতেছিল বাজাইতেছিলাম বাজাইতেছিলি বাজাইতেছিলে বাজাইতেছিলেন বাজাইতেছিস বাজাইতেছে বাজাইতেছেন বাজাইতেন বাজাইব বাজাইবার বাজাইবি বাজাইবে বাজাইবেন বাজাইল বাজাইলাম বাজাইলি বাজাইলে বাজাইলেন বাজাইয়া বাজাইয়াছ বাজাইয়াছি বাজাইয়াছিল বাজাইয়াছিলাম বাজাইয়াছিলি বাজাইয়াছিলে বাজাইয়াছিলেন বাজাইয়াছিস বাজাইয়াছে বাজাইয়াছেন বাজাইয়ো বাজাক বাজাচ্ছ বাজাচ্ছি বাজাচ্ছিল বাজাচ্ছিলাম বাজাচ্ছিলি বাজাচ্ছিলে বাজাচ্ছিলেন বাজাচ্ছিলেম বাজাচ্ছিলুম বাজাচ্ছিস বাজাচ্ছে বাজাচ্ছেন বাজাত বাজাতাম বাজাতিস বাজাতে বাজাতেন বাজাতেম বাজাতো বাজাতুম বাজান বাজানো বাজাব বাজাবার বাজাবি বাজাবে বাজাবেন বাজাবো বাজার বাজারকৃত বাজারখরচ বাজারগপ বাজারগরম বাজারচড়া বাজারজাত বাজারজাতকরণ বাজারদর বাজারনিবন্ধিত বাজারব্যবস্থা বাজারবসা বাজারমূল্য বাজারসরকার বাজারহাট বাজাল বাজালাম বাজালি বাজালে বাজালেন বাজালেম বাজালুম বাজাস বাজায় বাজায়ে বাজি বাজিকর বাজিখেলা বাজিগর বাজিত বাজিতাম বাজিতিস বাজিতে বাজিতেছ বাজিতেছি বাজিতেছিল বাজিতেছিলাম বাজিতেছিলি বাজিতেছিলে বাজিতেছিলেন বাজিতেছিস বাজিতেছে বাজিতেছেন বাজিতেন বাজিতপুর বাজিনী বাজিব বাজিবার বাজিবি বাজিবে বাজিবেন বাজিমাত বাজিমাৎ বাজিরাখা বাজিরাজি বাজিল বাজিলাম বাজিলি বাজিলে বাজিলেন বাজিস বাজিয়া বাজিয়াছ বাজিয়াছি বাজিয়াছিল বাজিয়াছিলাম বাজিয়াছিলি বাজিয়াছিলে বাজিয়াছিলেন বাজিয়াছিস বাজিয়াছে বাজিয়াছেন বাজিয়ে বাজিয়েছ বাজিয়েছি বাজিয়েছিল বাজিয়েছিলাম বাজিয়েছিলি বাজিয়েছিলে বাজিয়েছিলেন বাজিয়েছিলেম বাজিয়েছিলুম বাজিয়েছিস বাজিয়েছে বাজিয়েছেন বাজিয়ো বাজী বাজীকর বাজীকরণ বাজীগর বাজীপাল বাজীমাত বাজীমাৎ বাজে বাজেজমা বাজেট বাজেটগঠন বাজেটীয় বাজেমার্কা বাজেয়াপ্ত বাজেয়াপ্তি বাজেয়াফত বাজো বাজছ বাজছি বাজছিল বাজছিলাম বাজছিলি বাজছিলে বাজছিলেন বাজছিলেম বাজছিলুম বাজছিস বাজছে বাজছেন বাজ্জ বাজত বাজতাম বাজতিস বাজতে বাজতেন বাজতেম বাজতুম বাজন বাজুন বাজনা বাজনাওয়ালা বাজনাদার বাজনদার বাজপাখি বাজপেয় বাজপেয়ী বাজব বাজবার বাজবি বাজবে বাজবেন বাজবো বাজুবন্দ বাজুবন্ধ বাজরা বাজল বাজলাম বাজলি বাজলে বাজলেন বাজলেম বাজলো বাজলুম বাঁঝা বাঞ্চত বাঞ্ছা বাঞ্ছাকল্পতরু বাঞ্ছারামপুর বাঞ্ছিত বাঞ্ছিতা বাঞ্ছিতভাব বাঞ্ছন বাঞ্ছনীয় বাট বাঁট বাঁটু বাটওয়ার বাঁটওয়ারা বাটুক বাটকে বাঁটকুল বাটখারা বাটা বাঁটা বাটাজোড়া বাটান বাটানো বাঁটানো বাঁটাবাঁটি বাটাভরা বাটার বাটাল বাটালি বাটালী বাটি বাটিক বাটিকা বাটিত বাটিতাম বাটিতিস বাটিতে বাটিতেছ বাটিতেছি বাটিতেছিল বাটিতেছিলাম বাটিতেছিলি বাটিতেছিলে বাটিতেছিলেন বাটিতেছিস বাটিতেছে বাটিতেছেন বাটিতেন বাটিব বাটিবার বাটিবি বাটিবে বাটিবেন বাটিভরতি বাটিল বাটিলাম বাটিলি বাটিলে বাটিলেন বাটিস বাটিয়া বাটিয়াছ বাটিয়াছি বাটিয়াছিল বাটিয়াছিলাম বাটিয়াছিলি বাটিয়াছিলে বাটিয়াছিলেন বাটিয়াছিস বাটিয়াছে বাটিয়াছেন বাটিয়ো বাটী বাটে বাটেন বাঁটো বাটোয়ারা বাঁটোয়ারা বাটছ বাটছি বাটছিল বাটছিলাম বাটছিলি বাটছিলে বাটছিলেন বাটছিলেম বাটছিলুম বাটছিস বাটছে বাটছেন বাট্টা বাট্টাকেন্দ্র বাট্টাকৃত বাট্টাকরণ বাট্টাদার বাট্টায়িত বাটত বাটতাম বাটতিস বাটতে বাটতেন বাটতেম বাটতুম বাটদান বাটন বাটুন বাঁটন বাটনা বাটপার বাটপারি বাটপাড় বাটপাড়ি বাটব বাটবার বাটবি বাটবে বাটবেন বাটবো বাটল বাটুল বাঁটুল বাটলাম বাটলার বাটলি বাটলিন বাটলে বাটলেন বাটলেম বাটলুম বাড্ডা বাণ বাণকাড়া বাণকাড়াদুধ বাণাঘাত বাণাসুর বাণিজ্য বাণিজ্যকারী বাণিজ্যকেন্দ্র বাণিজ্যকুঠি বাণিজ্যিক বাণিজ্যিকভাবে বাণিজ্যচক্র বাণিজ্যতরী বাণিজ্যদেবতা বাণিজ্যদূত বাণিজ্যধানী বাণিজ্যপথ বাণিজ্যবাণী বাণিজ্যবাদ বাণিজ্যবন্দর বাণিজ্যমন্ত্রী বাণিজ্যশিক্ষা বাণিজ্যশূন্য বাণিয়া বাণী বাণীঅর্চনা বাণীপ্রধান বাণীবদ্ধকরণ বাণীমন্দির বাণছাড়া বাণ্ডিল বাণতৃণ বাণদণ্ড বাণধি বাণনিক্ষেপ বাণপাণি বাণপ্রস্থ বাণবার বাণবিদ্ধ বাণবর্ষণ বাণমারা বাণমোক্ষণ বাণমোচন বাণলিঙ্গ বাত বাতকেতু বাতকম্প বাতকর্ম বাতগর্ভ বাতগ্রস্ত বাতা বাতাক বাতানুকূল বাতানো বাতান্দোলিত বাতান্বিত বাতাপি বাতাবি বাতাবিলেবু বাতাবী বাতাবীলেবু বাতাবরণ বাতাবর্ত বাতাস বাতাসকরণ বাতাসা বাতাসি বাতাসী বাতায়ন বাতায়নবর্তিনী বাতি বাতিক বাতিকওয়ালা বাতিকগ্রস্ত বাতিগোল বাতিঘর বাতিদান বাতিল বাতচিত বাৎচিত বাতেন বাতেনি বাতযুক্ত বাত্যা বাত্যাচক্র বাত্যাতাড়িত বাত্যাপীড়িত বাত্যাবিক্ষুব্ধ বাত্যাবিধ্বস্ত বাত্যাহত বাতনাশক বাতবিদ্যা বাতরক্ত বাতরোগ বাতরোগগ্রস্ত বাতুল বাতূল বাতলা বাতলাই বাতলাইও বাৎলাইও বাতলাইত বাৎলাইত বাতলাইতাম বাৎলাইতাম বাতলাইতিস বাৎলাইতিস বাতলাইতে বাৎলাইতে বাতলাইতেছ বাৎলাইতেছ বাতলাইতেছি বাৎলাইতেছি বাতলাইতেছিল বাৎলাইতেছিল বাতলাইতেছিলাম বাৎলাইতেছিলাম বাতলাইতেছিলি বাৎলাইতেছিলি বাতলাইতেছিলে বাৎলাইতেছিলে বাতলাইতেছিলেন বাৎলাইতেছিলেন বাতলাইতেছিস বাৎলাইতেছিস বাতলাইতেছে বাৎলাইতেছে বাতলাইতেছেন বাৎলাইতেছেন বাতলাইতেন বাৎলাইতেন বাতলাইব বাৎলাইব বাতলাইবার বাৎলাইবার বাতলাইবি বাৎলাইবি বাতলাইবে বাৎলাইবে বাতলাইবেন বাৎলাইবেন বাতলাইল বাৎলাইল বাতলাইলাম বাৎলাইলাম বাতলাইলি বাৎলাইলি বাতলাইলে বাৎলাইলে বাতলাইলেন বাৎলাইলেন বাতলাইয়া বাৎলাইয়া বাতলাইয়াছ বাৎলাইয়াছ বাতলাইয়াছি বাৎলাইয়াছি বাতলাইয়াছিল বাৎলাইয়াছিল বাতলাইয়াছিলাম বাৎলাইয়াছিলাম বাতলাইয়াছিলি বাৎলাইয়াছিলি বাতলাইয়াছিলে বাৎলাইয়াছিলে বাতলাইয়াছিলেন বাৎলাইয়াছিলেন বাতলাইয়াছিস বাৎলাইয়াছিস বাতলাইয়াছে বাৎলাইয়াছে বাতলাইয়াছেন বাৎলাইয়াছেন বাতলাইয়ো বাৎলাইয়ো বাৎলাও বাতলাক বাৎলাক বাতুলাগার বাতলাচ্ছ বাৎলাচ্ছ বাতলাচ্ছি বাৎলাচ্ছি বাতলাচ্ছিল বাৎলাচ্ছিল বাতলাচ্ছিলাম বাৎলাচ্ছিলাম বাতলাচ্ছিলি বাৎলাচ্ছিলি বাতলাচ্ছিলে বাৎলাচ্ছিলে বাতলাচ্ছিলেন বাৎলাচ্ছিলেন বাতলাচ্ছিলেম বাৎলাচ্ছিলেম বাতলাচ্ছিলুম বাৎলাচ্ছিলুম বাতলাচ্ছিস বাৎলাচ্ছিস বাতলাচ্ছে বাৎলাচ্ছে বাতলাচ্ছেন বাৎলাচ্ছেন বাতলাত বাৎলাত বাতলাতাম বাৎলাতাম বাতলাতিস বাৎলাতিস বাতলাতে বাৎলাতে বাতলাতেন বাৎলাতেন বাতলাতেম বাৎলাতেম বাতলাতুম বাৎলাতুম বাতলান বাৎলান বাতলানো বাৎলানো বাতলাব বাৎলাব বাতলাবার বাৎলাবার বাতলাবি বাৎলাবি বাতলাবে বাৎলাবে বাতলাবেন বাৎলাবেন বাতলাবো বাৎলাবো বাতলাল বাৎলাল বাতলালাম বাৎলালাম বাতলালি বাৎলালি বাতলালে বাৎলালে বাতলালেন বাৎলালেন বাতলালেম বাৎলালেম বাতলালুম বাৎলালুম বাতলাস বাৎলাস বাৎলায় বাতলে বাৎলে বাতলেছ বাৎলেছ বাতলেছি বাৎলেছি বাতলেছিল বাৎলেছিল বাতলেছিলাম বাৎলেছিলাম বাতলেছিলি বাৎলেছিলি বাতলেছিলে বাৎলেছিলে বাতলেছিলেন বাৎলেছিলেন বাতলেছিলেম বাৎলেছিলেম বাতলেছিলুম বাৎলেছিলুম বাতলেছিস বাৎলেছিস বাতলেছে বাৎলেছে বাতলেছেন বাৎলেছেন বাতলো বাৎলো বাতুলতা বাৎস্যায়ন বাৎসরিক বাৎসল্য বাৎসল্যরস বাথ বাথান বাথানিয়া বাথরুম বাথুয়া বাদ বাদক বাদা বাদাচিংড়ি বাদানুবাদ বাদাম বাদামি বাদামী বাদাড় বাঁদি বাঁদিক বাদিত বাদিতা বাদিত্র বাদিনী বাঁদিপোতা বাদিয়া বাদী বাদীপক্ষ বাদীপোতা বাঁদীপোতা বাদীপ্রতিবাদী বাদে বাদ্য বাদ্যকর বাদ্যযন্ত্র বাদ্যযন্ত্রী বাদ্যধ্বনি বাদ্যনিপুণ বাদ্যবাদন বাদ্যবৃন্দ বাদ্যভাণ্ড বাদ্যমান বাদদেওয়া বাদন বাদনরীতি বাদনরত বাদপ্রতিবাদ বাদবাকি বাদবিতণ্ডা বাদবিসংবাদ বাদুর বাঁদর বাঁদরগড়া বাঁদরামি বাঁদরামো বাঁদরী বাঁদুরে বাঁদরনাচ বাঁদরমুখি বাঁদরমুখো বাঁদরলাঠি বাঁদরসুলভ বাদল বাদলা বাদুলে বাদলপোকা বাদশাই বাদশাহ বাদশাহি বাদশাহজাদা বাদশাহজাদি বাদশাহজাদী বাদশাহনবাব বাদসাদ বাদসাধা বাদহাটা বাদুড় বাদুড়চোষা বাদুড়ঝোলা বাধ বাঁধ বাধক বাধুক বাঁধুক বাধা বাঁধা বাধাই বাঁধাই বাধাইও বাঁধাইও বাঁধাইকরা বাধাইত বাঁধাইত বাধাইতাম বাঁধাইতাম বাধাইতিস বাঁধাইতিস বাধাইতে বাঁধাইতে বাধাইতেছ বাঁধাইতেছ বাধাইতেছি বাঁধাইতেছি বাধাইতেছিল বাঁধাইতেছিল বাধাইতেছিলাম বাঁধাইতেছিলাম বাধাইতেছিলি বাঁধাইতেছিলি বাধাইতেছিলে বাঁধাইতেছিলে বাধাইতেছিলেন বাঁধাইতেছিলেন বাধাইতেছিস বাঁধাইতেছিস বাধাইতেছে বাঁধাইতেছে বাধাইতেছেন বাঁধাইতেছেন বাধাইতেন বাঁধাইতেন বাধাইব বাঁধাইব বাধাইবার বাঁধাইবার বাধাইবি বাঁধাইবি বাধাইবে বাঁধাইবে বাধাইবেন বাঁধাইবেন বাধাইল বাঁধাইল বাধাইলাম বাঁধাইলাম বাধাইলি বাঁধাইলি বাধাইলে বাঁধাইলে বাধাইলেন বাঁধাইলেন বাধাইয়া বাঁধাইয়া বাধাইয়াছ বাঁধাইয়াছ বাধাইয়াছি বাঁধাইয়াছি বাধাইয়াছিল বাঁধাইয়াছিল বাধাইয়াছিলাম বাঁধাইয়াছিলাম বাধাইয়াছিলি বাঁধাইয়াছিলি বাধাইয়াছিলে বাঁধাইয়াছিলে বাধাইয়াছিলেন বাঁধাইয়াছিলেন বাধাইয়াছিস বাঁধাইয়াছিস বাধাইয়াছে বাঁধাইয়াছে বাধাইয়াছেন বাঁধাইয়াছেন বাঁধাইয়ের বাধাইয়ো বাঁধাইয়ো বাধাও বাঁধাও বাধাক বাঁধাক বাঁধাকপি বাঁধাগৎ বাধাগ্রস্ত বাঁধাগ্রস্ত বাধাচ্ছ বাঁধাচ্ছ বাধাচ্ছি বাঁধাচ্ছি বাধাচ্ছিল বাঁধাচ্ছিল বাধাচ্ছিলাম বাঁধাচ্ছিলাম বাধাচ্ছিলি বাঁধাচ্ছিলি বাধাচ্ছিলে বাঁধাচ্ছিলে বাধাচ্ছিলেন বাঁধাচ্ছিলেন বাধাচ্ছিলেম বাঁধাচ্ছিলেম বাধাচ্ছিলুম বাঁধাচ্ছিলুম বাধাচ্ছিস বাঁধাচ্ছিস বাধাচ্ছে বাঁধাচ্ছে বাধাচ্ছেন বাঁধাচ্ছেন বাঁধাছাঁদা বাধাযুক্ত বাধাত বাঁধাত বাধাতাম বাঁধাতাম বাঁধাতার বাধাতিস বাঁধাতিস বাধাতে বাঁধাতে বাধাতেন বাঁধাতেন বাধাতেম বাঁধাতেম বাধাতুম বাঁধাতুম বাধাদান বাধাদানকারী বাধাদায়ক বাধাদেয় বাঁধাধরা বাধান বাঁধান বাধানিষেধ বাধানিষেধহীন বাধানো বাঁধানো বাধাপ্রাপ্ত বাধাব বাঁধাব বাঁধাবাঁধি বাধাবার বাঁধাবার বাধাবি বাঁধাবি বাধাবিঘ্ন বাধাবিঘ্নযুক্ত বাধাবিঘ্নহীন বাধাবিপত্তি বাধাবিমুক্ত বাধাবে বাঁধাবে বাধাবেন বাঁধাবেন বাধাবো বাঁধাবো বাধাবন্ধ বাধামুক্ত বাধামুক্তি বাঁধারোশনাই বাধাল বাঁধাল বাধালাম বাঁধালাম বাধালি বাঁধালি বাধালে বাঁধালে বাধালেন বাঁধালেন বাধালেম বাঁধালেম বাধালুম বাঁধালুম বাঁধাশরীর বাধাস বাঁধাস বাধাস্বরূপ বাধাহীন বাধাহীনতা বাধাহীনভাবে বাধি বাঁধি বাধিত বাঁধিত বাধিতাম বাঁধিতাম বাধিতিস বাঁধিতিস বাধিতে বাঁধিতে বাধিতেছ বাঁধিতেছ বাধিতেছি বাঁধিতেছি বাধিতেছিল বাঁধিতেছিল বাধিতেছিলাম বাঁধিতেছিলাম বাধিতেছিলি বাঁধিতেছিলি বাধিতেছিলে বাঁধিতেছিলে বাধিতেছিলেন বাঁধিতেছিলেন বাধিতেছিস বাঁধিতেছিস বাধিতেছে বাঁধিতেছে বাধিতেছেন বাঁধিতেছেন বাধিতেন বাঁধিতেন বাঁধিনু বাধিব বাঁধিব বাধিবার বাঁধিবার বাধিবি বাঁধিবি বাধিবে বাঁধিবে বাধিবেন বাঁধিবেন বাধিল বাঁধিল বাধিলাম বাঁধিলাম বাধিলি বাঁধিলি বাধিলে বাঁধিলে বাধিলেন বাঁধিলেন বাধিস বাঁধিস বাধিয়া বাঁধিয়া বাধিয়াছ বাঁধিয়াছ বাধিয়াছি বাঁধিয়াছি বাধিয়াছিল বাঁধিয়াছিল বাধিয়াছিলাম বাঁধিয়াছিলাম বাধিয়াছিলি বাঁধিয়াছিলি বাধিয়াছিলে বাঁধিয়াছিলে বাধিয়াছিলেন বাঁধিয়াছিলেন বাধিয়াছিস বাঁধিয়াছিস বাধিয়াছে বাঁধিয়াছে বাধিয়াছেন বাঁধিয়াছেন বাধিয়ে বাঁধিয়ে বাধিয়েছ বাঁধিয়েছ বাধিয়েছি বাঁধিয়েছি বাধিয়েছিল বাঁধিয়েছিল বাধিয়েছিলাম বাঁধিয়েছিলাম বাধিয়েছিলি বাঁধিয়েছিলি বাধিয়েছিলে বাঁধিয়েছিলে বাধিয়েছিলেন বাঁধিয়েছিলেন বাধিয়েছিলেম বাঁধিয়েছিলেম বাধিয়েছিলুম বাঁধিয়েছিলুম বাধিয়েছিস বাঁধিয়েছিস বাধিয়েছে বাঁধিয়েছে বাধিয়েছেন বাঁধিয়েছেন বাধিয়ো বাঁধিয়ো বাধেন বাঁধেন বাঁধেনি বাঁধো বাধোবাধো বাধছ বাঁধছ বাধছি বাঁধছি বাধছিল বাঁধছিল বাধছিলাম বাঁধছিলাম বাধছিলি বাঁধছিলি বাধছিলে বাঁধছিলে বাধছিলেন বাঁধছিলেন বাধছিলেম বাঁধছিলেম বাধছিলুম বাঁধছিলুম বাধছিস বাঁধছিস বাধছে বাঁধছে বাধছেন বাঁধছেন বাধ্য বাঁধযুক্ত বাধ্যতা বাধ্যতামূলক বাধ্যতামূলকভাবে বাধ্যবাধকতা বাধত বাঁধত বাধতাম বাঁধতাম বাধতিস বাঁধতিস বাধতে বাঁধতে বাধতেন বাঁধতেন বাধতেম বাঁধতেম বাধতুম বাঁধতুম বাধন বাধুন বাঁধন বাঁধুন বাঁধনি বাঁধুনি বাঁধনছাড়া বাঁধনছেঁড়া বাঁধনটা বাঁধনদার বাঁধনহারা বাধব বাঁধব বাধবাধ বাধবার বাঁধবার বাধবি বাঁধবি বাধবে বাঁধবে বাধবেন বাঁধবেন বাধবো বাঁধবো বাঁধভাঙ্গা বাঁধভাঙা বাধল বাঁধল বাধলাম বাঁধলাম বাধলি বাঁধলি বাঁধুলি বাধলে বাঁধলে বাধলেন বাঁধলেন বাধলেম বাঁধলেম বাধলুম বাঁধলুম বান বানু বানা বানাই বানাইও বানাইত বানাইতাম বানাইতিস বানাইতে বানাইতেছ বানাইতেছি বানাইতেছিল বানাইতেছিলাম বানাইতেছিলি বানাইতেছিলে বানাইতেছিলেন বানাইতেছিস বানাইতেছে বানাইতেছেন বানাইতেন বানাইব বানাইবার বানাইবি বানাইবে বানাইবেন বানাইল বানাইলাম বানাইলি বানাইলে বানাইলেন বানাইয়া বানাইয়াছ বানাইয়াছি বানাইয়াছিল বানাইয়াছিলাম বানাইয়াছিলি বানাইয়াছিলে বানাইয়াছিলেন বানাইয়াছিস বানাইয়াছে বানাইয়াছেন বানাইয়ো বানাওট বানাক বানাচ্ছ বানাচ্ছি বানাচ্ছিল বানাচ্ছিলাম বানাচ্ছিলি বানাচ্ছিলে বানাচ্ছিলেন বানাচ্ছিলেম বানাচ্ছিলুম বানাচ্ছিস বানাচ্ছে বানাচ্ছেন বানাত বানাতাম বানাতিস বানাতে বানাতেন বানাতেম বানাতুম বানান বানানো বানানবিধি বানানবিহিত বানানভিত্তিক বানানভেদ বানানরীতি বানানসূত্র বানানসহ বানাব বানাবা বানাবার বানাবি বানাবে বানাবেন বানাবো বানারসি বানাল বানালাম বানালি বানালে বানালেন বানালেম বানালুম বানাস বানায়া বানি বানিয়া বানিয়ানি বানিয়ে বানিয়েছ বানিয়েছি বানিয়েছিল বানিয়েছিলাম বানিয়েছিলি বানিয়েছিলে বানিয়েছিলেন বানিয়েছিলেম বানিয়েছিলুম বানিয়েছিস বানিয়েছে বানিয়েছেন বানিয়ো বানী বানচাল বানীর বানীরনিকুঞ্জ বানেয় বানোয়াট বানডাকা বান্ডিল বান্ত বান্তি বান্দা বান্দি বান্দে বান্দর বান্দরবন বান্ধা বান্ধিয়া বান্ধে বান্ধব বান্ধবী বান্ধুলি বানপ্রস্থ বানভাসি বানর বানরকুল বানরী বানুরে বানরদল বানররাজ বানরসৈন্য বানরসুলভ বানস্পত্য বাপ বাপু বাপক বাপকা বাপকেলে বাপা বাপাট বাপাত বাপাতি বাপান্ত বাঁপাশ বাপি বাপিত বাপী বাপেরবেটা বাপুজি বাপঠাকুরদা বাপঠাকুরদাদা বাপুতি বাপ্তিস্মা বাপদাদা বাপধন বাপন বাপনকারী বাপন্ত বাপমা বাপুর বাপরে বাপস বাপুড়া বাপুড়ী বাফার বাফারিং বাফোই বাফতা বাফুফে বাব বাবু বাবই বাবুই বাবুইতুলসী বাবইপাখি বাবুইপাখি বাবুকালচার বাবুগিরি বাবুগঞ্জ বাবা বাবাগো বাবাজান বাবাজি বাবাজী বাবাজীবন বাবামা বাবারে বাবুজি বাবুটা বাবত বাবদ বাবদূক বাবুবাজার বাবুমশাই বাবুরাম বাবরি বাবরিকাটা বাবরিছাঁটা বাবরী বাবর্চি বাবুর্চি বাবুর্চিখানা বাবলা বাবলাগাছ বাবুসাহেব বাবুয়ানা বাবুয়ানি বাম বামা বামাকণ্ঠ বামাক্ষী বামাচার বামাচারী বামাপদ বামাবর্ত বামাবর্তী বামাল বামী বামচোখ বামে বামেতর বামদিক বামদল বামন বামুন বামনি বামনী বামুনঠাকুর বামনতারা বামনদেব বামনরূপ বামপক্ষ বামপন্থা বামপন্থি বামপন্থী বামফ্রন্ট বাম্ভন বামলোচনা বামহাত বামহাতি বার বারংবার বারংবারতা বারই বারুই বারুইজাতি বারক বার্কিনা বারকোড বারকোশ বারকোস বারকরা বারকয়েক বার্গান্ডি বার্গার বারা বারাঙ্গনা বারাণ্ডা বারানি বারানী বারান্তর বারান্দা বারান্দাযুক্ত বারানসি বারাম বারামখানা বারাসাত বারাহ বারাহী বারি বারিক বারিকোষ বারিগর্ভ বারিগ্রহ বারিঘরট্ট বারিচামর বারিচর বারিজ বারিযন্ত্র বারিত বারিত্রা বারিতস্কর বারিদ বারিদুর্গ বারিধানী বারিধারা বারিধি বারিধর বারিনাথ বারিনিধি বারিপর্ণী বারিপ্রবাহ বারিবাহ বারিবাহক বারিবাহন বারিবিন্দু বারিবরণ বারিবর্ষণ বারিবর্ষণকারী বারিমুক বারিরাশি বারিরুহ বারিয়াতি বারী বারীন্দ্র বারীন্দ্রাণী বারীশ বারে বারেক বারেন্দ্র বারেন্দ্রী বারের বারো বারোইয়ারি বারোজন বারোটা বারোটি বারোভুঁইয়া বারোভূঁইয়া বারোভূঁঞা বারোভূত বারোমাস বারোমাসি বারোমাস্যা বারোমেসে বারোর বারোয়া বারোয়াঁ বারোয়ারি বারোয়ারী বারুজীবী বার্য বারটা বারটি বারযোষিৎ বার্যমান বার্ড বারডেম বার্ডফ্লু বার্ডস বারণ বারুণ বারণকারী বারুণা বারণাবত বার্ণিক বার্ণিশ বার্ণিস বারুণী বারুণীস্নান বারণীয় বারণযোগ্য বারণবল্লভা বারতা বার্তা বার্তাকু বার্তাজীবী বার্তাদি বার্তাবাহক বার্তাবাহী বার্তাবহ বার্তাবহন বার্তিক বার্ত্তাকু বার্থ বার্থডে বারুদ বারুদখানা বারুদঘর বারদিগর বার্দ্ধক্য বারদরিয়া বারদুয়ারি বারদুয়ারী বার্ধক্য বার্ধক্যজনিত বার্ধক্যপ্রাপ্ত বার্ধক্যবশত বার্ধক্যভাতা বার্ধক্যহীন বার্ধক্যহেতু বার্ধ্রীণস বার্ন বার্নইয়ার্ড বারনারী বার্নিশ বারফট্টাই বার্বাডোস বারবার বারবিলাসিনী বারবেলা বারবধূ বারবনিতা বারবরদার বারবরদারি বারবরদারী বারভূঁইয়া বারমুখো বারমুখ্যা বার্মা বারমাসি বারমাস্যা বার্মিজ বার্মীয় বারমেসে বারমুডা বারমতি বারম্বার বারলাইব্রেরি বার্লি বার্লিন বারশিঙ্গা বার্ষিক বার্ষিকগতি বার্ষিকী বার্সা বার্সিলোনা বার্সেলোনা বারসমিতি বার্হস্পত্য বারয়িতা বারয়িত্রী বাল বালু বালক বালুকা বালকাণ্ড বালুকাপূর্ণ বালুকাবেলা বালুকাময় বালকোচিত বালুকণা বালুকণাময় বালকতা বালকত্ব বালকবালিকা বালকবয়স বালকভৃত্য বালক্রীড়া বালকসুলভ বালখিল্য বালুগাঁও বালগোপাল বালগর্ভিণী বালঘ্ন বালা বালাই বালাইনাশক বালাইষাট বালাখানা বালাঞ্চি বালাতপ বালাপোশ বালাপোষ বালাম বালামচি বালামুসিবত বালার্ক বালি বালিকা বালিকাবধূ বালিকাবস্থা বালিপূর্ণ বালিশ বালিহাঁস বালিহীন বালিয়াড়ি বালচাপল্য বালুচর বালুচরি বালচর্যা বালেন্দু বাল্য বাল্যকাল বাল্যাবধি বাল্যাবস্থা বাল্যজীবন বাল্যপ্রেম বাল্যপ্রণয় বাল্যবিধবা বাল্যবিবাহ বাল্যবন্ধু বাল্যরচিত বাল্যলীলাভূমি বাল্যশিক্ষা বাল্যসখা বাল্যসঙ্গী বাল্যসহচর বাল্যসুহৃদ বালতি বালতী বালদো বাল্ব বালবাচ্চা বালবিধবা বালবৈধব্য বালম বাল্মীক বাল্মীকি বাল্মীকিবিরচিত বাল্মীকিরচিত বালুময় বালরোগ বালশা বালশানো বালশশী বালসা বালুসাই বালসানো বালসূর্য বালসুলভ বালহস্ত বাঁশ বাঁশগাছ বাঁশগাড়ি বাঁশি বাশিন্দা বাঁশী বাঁশীবাদক বাশেন্দা বাঁশেরগাঁট বাঁশঝাড় বাঁশদেওয়া বাঁশপাতা বাঁশবন বাঁশরি বাঁশরী বাশুলী বাষট্টি বাষ্প বাষ্পঘনত্ব বাষ্পাকুল বাষ্পায়ন বাষ্পচালিত বাষ্পীভূত বাষ্পীভবন বাষ্পীয় বাষ্পযান বাষ্পযানাদি বাষ্পপোত বাষ্পপুঞ্জ বাষ্পপরিপ্লুত বাষ্পপূর্ণ বাষ্পমোচন বাষ্পরথ বাষ্পশকট বাষ্পস্তব্ধ বাষ্পস্নান বাষ্পসমান বাষ্পসলিল বাস বাসক বাসকারিণী বাসকারী বাসুকি বাস্কেট বাস্কেটবল বাসুকেয় বাসকরণ বাসকসজ্জা বাসগাড়ি বাসগৃহ বাসগৃহাদি বাসগৃহসংলগ্ন বাসা বাসাত বাসাদেখা বাসানো বাসাবাড়ি বাসাবো বাসাড়িয়া বাসাড়ে বাসি বাসিকাপড় বাসিজল বাসিত বাসিতাম বাসিতিস বাসিতে বাসিতেছ বাসিতেছি বাসিতেছিল বাসিতেছিলাম বাসিতেছিলি বাসিতেছিলে বাসিতেছিলেন বাসিতেছিস বাসিতেছে বাসিতেছেন বাসিতেন বাসিদুধ বাসিনী বাসিন্দা বাসিন্দাশূন্য বাসিপানি বাসিফুল বাসিব বাসিবার বাসিবি বাসিবিয়ে বাসিবে বাসিবেন বাসিভাত বাসিমুখ বাসিমড়া বাসিল বাসিলাম বাসিলে বাসিলেন বাসিস বাসিয়া বাসিয়াছ বাসিয়াছি বাসিয়াছিল বাসিয়াছিলাম বাসিয়াছিলি বাসিয়াছিলে বাসিয়াছিলেন বাসিয়াছিস বাসিয়াছে বাসিয়াছেন বাসিয়ে বাসিয়ো বাসী বাসচালক বাসেত বাসেন বাসোপযোগী বাসছ বাসছি বাসছিল বাসছিলাম বাসছিলি বাসছিলে বাসছিলেন বাসছিলেম বাসছিলুম বাসছিস বাসছে বাসছেন বাসযাত্রী বাস্টার্ড বাসযোগ বাসযোগ্য বাসযোগ্যতা বাসট্রাম বাসডিপো বাসত বাস্তু বাস্তুক বাস্তুকার বাস্তুকর্ম বাস্তুকলাবিদ বাস্তুঘুঘু বাসতাম বাসতিস বাসতে বাসতেন বাসতেম বাস্তুত্যাগী বাস্তুতন্ত্র বাস্তুদেবতা বাস্তুপূজা বাস্তুপুরুষ বাস্তব বাস্তবক্ষেত্র বাস্তবানুগ বাস্তবায়িত বাস্তবায়ন বাস্তবায়নাধীন বাস্তবায়নযোগ্য বাস্তবিক বাস্তবিকতা বাস্তবিকপক্ষে বাস্তুবিজ্ঞান বাস্তুবিদ্যা বাস্তবোচিত বাস্তবজ্ঞান বাস্তব্য বাস্তবতা বাস্তববাদ বাস্তববাদিতা বাস্তববাদী বাস্তববোধ বাস্তববোধশূন্য বাস্তবভিত্তিক বাস্তবমুখী বাস্তবরূপ বাস্তবসম্মত বাস্তুভিটা বাস্তুভূমি বাসতুম বাস্তুশিল্প বাস্তুশুদ্ধি বাস্তুসংস্থান বাস্তুসাপ বাস্তুহারা বাসুদেব বাসন বাসুন বাসনকোসন বাসনা বাসনাকুল বাসনাযুক্ত বাসনাদি বাসনাপূরক বাসনাপূরণ বাসনাশূন্য বাসনাসম্পন্ন বাসনাহীন বাসন্ত বাসন্তিক বাসন্তী বাসন্তীদেবী বাসন্তীপূজা বাসন্তীরং বাসনপত্তর বাসনপত্র বাসপূর্বক বাসব বাসবার বাসবি বাসবে বাসবেন বাসবো বাসবদত্তা বাসভবন বাসভূমি বাসভূমে বাসভ্রমণ বাসমতী বাসর বাসরঘর বাসরীয় বাসরজাগানি বাসরূপ বাসরশয্যা বাসল বাসলাম বাসলি বাসুলী বাসলে বাসলেন বাসলেম বাসলুম বাসস বাসসজ্জা বাসস্টপ বাসস্টপেজ বাসস্থান বাসস্থানরূপ বাসস্থল বাহ বাহু বাহক বাহা বাহাই বাহাছ বাঁহাত বাঁহাতি বাঁহাতে বাহাত্তর বাহাত্তরিয়া বাহাত্তরে বাহাত্তুরে বাহাদুর বাহাদুরগঞ্জ বাহাদুরগড় বাহাদুরাবাদ বাহাদুরি বাহাদুরিকাঠ বাহাদুরীকাঠ বাহাদুরপুর বাহানা বাহানাবাজ বাহান্ন বাহাবাহা বাহামা বাহার বাহারি বাহারিয়া বাহাল বাহাস বাহি বাহিক বাহিকা বাহিত বাহিতা বাহিতাম বাহিতিস বাহিতে বাহিতেছ বাহিতেছি বাহিতেছিল বাহিতেছিলাম বাহিতেছিলি বাহিতেছিলে বাহিতেছিলেন বাহিতেছিস বাহিতেছে বাহিতেছেন বাহিতেন বাহিনী বাহিনীর বাহিব বাহিবার বাহিবি বাহিবে বাহিবেন বাহির বাহিরা বাহিরানো বাহিরিল বাহিরে বাহিরমহল বাহিল বাহিলাম বাহিলি বাহিলে বাহিলেন বাহিস বাহিয়া বাহিয়াছ বাহিয়াছি বাহিয়াছিল বাহিয়াছিলাম বাহিয়াছিলি বাহিয়াছিলে বাহিয়াছিলেন বাহিয়াছিস বাহিয়াছে বাহিয়াছেন বাহিয়ো বাহী বাহে বাহ্য বাহুযুক্ত বাহ্যকৃত্য বাহ্যকরা বাহ্যক্রিয়া বাহ্যিক বাহ্যিকতা বাহ্যেন্দ্রিয় বাহ্যজগৎ বাহ্যজ্ঞান বাহ্যজ্ঞানরহিত বাহ্যজ্ঞানশূন্য বাহ্যজ্ঞানহীন বাহ্যত বাহুযুদ্ধ বাহ্যদৃষ্টি বাহ্যবিষয় বাহ্যবস্তু বাহ্যমান বাহ্যরেখা বাহ্যলক্ষণ বাহ্যশক্তি বাহ্যসংগঠন বাহুডোর বাহুত্র বাহুত্রাণ বাহুদ্বয় বাহন বাহনরূপ বাহবা বাহ্বাস্ফোট বাহুবন্ধ বাহুবন্ধন বাহুবল বাহুমূল বাহরাইন বাহুল্য বাহুল্যযুক্ত বাহুল্যপূর্ণ বাহুল্যবর্জিত বাহুল্যবর্জন বাহুল্যসূত্র বাহুল্যহীন বাহুলতা বাহুসমষ্টি বাহুড় বাহুড়া বাহুড়ানো বাহুড়াব বাড় বাড়ই বাড়ুই বাড়ুক বাড়া বাঁড়া বাড়াই বাড়াইও বাড়াইত বাড়াইতাম বাড়াইতিস বাড়াইতে বাড়াইতেছ বাড়াইতেছি বাড়াইতেছিল বাড়াইতেছিলাম বাড়াইতেছিলি বাড়াইতেছিলে বাড়াইতেছিলেন বাড়াইতেছিস বাড়াইতেছে বাড়াইতেছেন বাড়াইতেন বাড়াইব বাড়াইবার বাড়াইবি বাড়াইবে বাড়াইবেন বাড়াইল বাড়াইলাম বাড়াইলি বাড়াইলে বাড়াইলেন বাড়াইয়া বাড়াইয়াছ বাড়াইয়াছি বাড়াইয়াছিল বাড়াইয়াছিলাম বাড়াইয়াছিলি বাড়াইয়াছিলে বাড়াইয়াছিলেন বাড়াইয়াছিস বাড়াইয়াছে বাড়াইয়াছেন বাড়াইয়ো বাড়াক বাড়াচ্ছ বাড়াচ্ছি বাড়াচ্ছিল বাড়াচ্ছিলাম বাড়াচ্ছিলি বাড়াচ্ছিলে বাড়াচ্ছিলেন বাড়াচ্ছিলেম বাড়াচ্ছিলুম বাড়াচ্ছিস বাড়াচ্ছে বাড়াচ্ছেন বাড়াত বাড়াতাম বাড়াতিস বাড়াতে বাড়াতেন বাড়াতেম বাড়াতুম বাড়ান বাড়ানো বাড়াব বাড়াবার বাড়াবাড়ি বাড়াবি বাড়াবে বাড়াবেন বাড়াবো বাড়াল বাড়ালাম বাড়ালি বাড়ালে বাড়ালেন বাড়ালেম বাড়ালুম বাড়াস বাড়ায় বাড়ায়া বাড়ি বাড়িওয়ালা বাড়িওয়ালী বাড়িঘর বাড়িছাড়া বাড়িছে বাড়িত বাড়িতাম বাড়িতিস বাড়িতে বাড়িতেছ বাড়িতেছি বাড়িতেছিল বাড়িতেছিলাম বাড়িতেছিলি বাড়িতেছিলে বাড়িতেছিলেন বাড়িতেছিস বাড়িতেছে বাড়িতেছেন বাড়িতেন বাড়িব বাড়িবার বাড়িবি বাড়িবে বাড়িবেন বাড়িবদল বাড়িভাড়া বাড়িমুখো বাড়িময় বাড়িল বাড়িলাম বাড়িলি বাড়িলে বাড়িলেন বাড়িস বাড়িসুদ্ধ বাড়িসহ বাড়িয়া বাড়িয়াছ বাড়িয়াছি বাড়িয়াছিল বাড়িয়াছিলাম বাড়িয়াছিলি বাড়িয়াছিলে বাড়িয়াছিলেন বাড়িয়াছিস বাড়িয়াছে বাড়িয়াছেন বাড়িয়ে বাড়িয়েছ বাড়িয়েছি বাড়িয়েছিল বাড়িয়েছিলাম বাড়িয়েছিলি বাড়িয়েছিলে বাড়িয়েছিলেন বাড়িয়েছিলেম বাড়িয়েছিলুম বাড়িয়েছিস বাড়িয়েছে বাড়িয়েছেন বাড়িয়ো বাড়ী বাড়ীওয়ালা বাড়ে বাড়েন বাড়েনা বাড়েনি বাড়ের বাড়ছ বাড়ছি বাড়ছিল বাড়ছিলাম বাড়ছিলি বাড়ছিলে বাড়ছিলেন বাড়ছিলেম বাড়ছিলো বাড়ছিলুম বাড়ছিস বাড়ছে বাড়ছেন বাড়ত বাড়তাম বাড়তি বাড়তিস বাড়তে বাড়তেন বাড়তেম বাড়তুম বাড়ন বাড়ুন বাড়ন্ত বাড়ব বাড়বাগ্নি বাড়বার বাড়বাড়ন্ত বাড়বি বাড়বে বাড়বেন বাড়বো বাড়ববহ্নি বাড়ল বাড়লাম বাড়লি বাড়লে বাড়লেন বাড়লেম বাড়লুম বাড়য়ে বায় বায়ু বায়ক বায়ুকেতু বায়ুকোণ বায়ুকোষ বায়ুগতি বায়ুগ্রস্ত বায়ুগ্রহণ বায়ুঘরট্ট বায়া বাঁয়া বায়াত্তর বায়াত্তরিয়া বায়াত্তরে বায়াত্তুরে বায়ান্ন বায়ার বায়ার্ন বায়ুচাপ বায়ুচাপসম্পন্ন বায়ুচালিত বায়ুচলাচল বায়ুচলন বাঁয়ে বায়েত বায়েন বায়োকেমিক্যাল বায়োকেমিস্ট বায়োকেমিস্ট্রি বায়োগ্যাস বায়োটিন বায়োটেকনোলজি বায়োডিজেল বায়োনিক বায়োফিল্ম বায়োবট বায়োলজি বায়োলজিক্যাল বায়ুজাত বায়ুজীবী বায়ুজনিত বায়ুযান বায়ুযন্ত্র বায়ুতাড়িত বায়ুতনয় বায়ুতরঙ্গ বায়তুল বায়তুলমাল বায়তুল্লাহ বায়ুথলী বায়ুদূষণ বায়ন বায়না বায়নাক্কা বায়নাপত্র বায়ুনালী বায়ুনিরোধক বায়ুনন্দন বায়ুপথ বায়ুপরিবর্তন বায়ুপূর্ণ বায়ুপ্রবাহ বায়ুপ্রবাহজাত বায়ুপ্রবাহবিশেষ বায়ুপ্রবাহবেগ বায়ুপ্রবেশ বায়ব বায়ুবাহিত বায়ুবাহিনী বায়ুবিজ্ঞান বায়বীয় বায়ুবেগ বায়ব্য বায়ব্যাস্ত্র বায়ব্যবায়ু বায়ব্যমূল বায়ুভুক বায়ুভ্রমণ বায়ুমান বায়ুমণ্ডল বায়ুমণ্ডলীয় বায়ুময় বায়ুরোগ বায়ুরোগগ্রস্ত বায়ুরোধী বায়ুশূন্য বায়স বায়স্কোপ বায়ুসখ বায়ুসখা বায়সান্তক বায়সারি বায়সী বায়ুসেবন বায়ুসঞ্চালক বায়ুসঞ্চালন বায়ুস্তর বায়ুস্রোত বায়ুসহ বায়ুহীন বি বিংশ বিংশতি বিংশতিতম বিংশতিতমী বিংশতম বিংশশতাব্দী বিউগল বিউটাইরিক বিউটানল বিউটি বিউটিফুল বিউটেন বিউটেনিস বিউনি বিউনী বিউর বিউলি বিউলী বিক বিকও বিকক বিকা বিকাই বিকাইও বিকাইত বিকাইতাম বিকাইতিস বিকাইতে বিকাইতেছ বিকাইতেছি বিকাইতেছিল বিকাইতেছিলাম বিকাইতেছিলি বিকাইতেছিলে বিকাইতেছিলেন বিকাইতেছিস বিকাইতেছে বিকাইতেছেন বিকাইতেন বিকাইব বিকাইবার বিকাইবি বিকাইবে বিকাইবেন বিকাইল বিকাইলাম বিকাইলি বিকাইলে বিকাইলেন বিকাইয়া বিকাইয়াছ বিকাইয়াছি বিকাইয়াছিল বিকাইয়াছিলাম বিকাইয়াছিলি বিকাইয়াছিলে বিকাইয়াছিলেন বিকাইয়াছিস বিকাইয়াছে বিকাইয়াছেন বিকাইয়ো বিকাক বিকান বিকানো বিকাবে বিকার বিকারক বিকারগ্রস্ত বিকারাদি বিকারী বিকারযুক্ত বিকারযোগ্য বিকারপ্রাপ্ত বিকারহীন বিকারহীনতা বিকাল বিকালবেলা বিকাশ বিকাশকারী বিকাশকাল বিকাশগত বিকাশোন্মুখ বিকাশন বিকাশভিত্তিক বিকাশমান বিকাশশীল বিকাশশূন্য বিকাশসাধন বিকাস বিকি বিকিকিনি বিকিনি বিকির বিকিরক বিকিরিত বিকিরণ বিকিরণকারী বিকিরণগত বিকিরণজনিত বিকিয়ে বিকিয়েছ বিকিয়েছি বিকিয়েছিল বিকিয়েছিলাম বিকিয়েছিলি বিকিয়েছিলে বিকিয়েছিলেন বিকিয়েছিলেম বিকিয়েছিলুম বিকিয়েছিস বিকিয়েছে বিকিয়েছেন বিকিয়ো বিকচ বিকচিত বিকচ্ছ বিকচ্ছি বিকচ্ছিল বিকচ্ছিলাম বিকচ্ছিলি বিকচ্ছিলে বিকচ্ছিলেন বিকচ্ছিলেম বিকচ্ছিলুম বিকচ্ছিস বিকচ্ছে বিকচ্ছেন বিকীর্যমান বিকীর্ণ বিকেন্দ্রিত বিকেন্দ্রীকরণ বিকেন্দ্রীভূত বিকেন্দ্রণ বিকেল বিকেলবেলা বিকো বিকট বিকটা বিকটাকার বিকটতা বিকটদর্শন বিকুণ্ঠ বিকুণ্ঠিত বিকৃত বিকৃতকণ্ঠ বিকৃতাকৃতি বিকৃতাঙ্গ বিকতাম বিকৃতি বিকৃতিগ্রস্ত বিকতিস বিকতে বিকতেন বিকতেম বিকত্থন বিকৃতদেহ বিকৃতভাবে বিকতুম বিকৃতমস্তিষ্ক বিকৃতরুচি বিকৃতরূপ বিকৃতসাধন বিকৃতস্বর বিকনো বিকব বিকবার বিকবি বিকবে বিকবেন বিকবো বিকম বিকম্প বিকম্পিত বিকম্পন বিক্রান্ত বিক্রান্তি বিক্রি বিক্রিত বিক্রিলব্ধ বিক্রিয়ক বিক্রিয়া বিক্রিয়াকারী বিক্রীত বিক্রীড়িত বিক্রেতা বিক্রেয় বিকরণ বিকর্ণ বিকর্তন বিকর্ম বিক্রম বিক্রমাদিত্য বিক্রমী বিক্রমপুর বিক্রমবীর বিক্রমশালী বিক্রমশীল বিক্রমশীলা বিকর্ষ বিকর্ষক বিকর্ষী বিকর্ষণ বিকর্ষণকারী বিক্রয় বিক্রয়কারী বিক্রয়কেন্দ্র বিক্রয়ার্থ বিক্রয়িক বিক্রয়িকা বিক্রয়িনী বিক্রয়ী বিক্রয়জাত বিক্রয়যোগ্য বিক্রয়পত্র বিক্রয়মূল্য বিক্রয়লব্ধ বিক্রয়সাধ্য বিকল বিকুল বিকলা বিকলাঙ্গ বিকলাঙ্গতা বিকলাম বিকুলি বিকলে বিকলেন বিকলেন্দ্রিয় বিকলেম বিকলতা বিকল্প বিকল্পাত্মক বিকল্পায়ন বিকল্পিত বিকল্পযুক্ত বিকল্পন বিকল্পবাচক বিকল্পবোধক বিকল্পরূপ বিকল্পসূচক বিকল্পহীন বিক্লব বিকলুম বিকশিত বিকশল বিক্ষিপ্ত বিক্ষিপ্তভাবে বিক্ষেপ বিক্ষেপকারী বিক্ষেপণ বিক্ষেপণচিত্র বিক্ষোভ বিক্ষোভরত বিক্ষোভহীন বিকৃষ্ট বিক্ষত বিক্ষুব্ধ বিক্ষুব্ধচিত্ত বিকয় বিখ বিখাউজ বিখ্যাত বিখ্যাতা বিখ্যাতি বিখ্যাতপ্রবাদ বিখ্যাপন বিগ বিগার বিগুণ বিগত বিগতা বিগতযৌবন বিগতযৌবনা বিগতপ্রাণ বিগতপ্রাণা বিগতশোক বিগতশ্রী বিগতশ্রম বিগতস্পৃহ বিগ্ন বিগম বিগ্রেড বিগ্রেডিয়ার বিগর্হ বিগ্রহ বিগ্রহাদি বিগর্হিত বিগর্হণ বিগর্হণা বিগ্রহবাক্য বিগ্রহসেবা বিগুল বিগলিত বিগলিতা বিগলিতবসনা বিগলন বিগড় বিগড়ক বিগড়া বিগড়াই বিগড়াইও বিগড়াইত বিগড়াইতাম বিগড়াইতিস বিগড়াইতে বিগড়াইতেছ বিগড়াইতেছি বিগড়াইতেছিল বিগড়াইতেছিলাম বিগড়াইতেছিলি বিগড়াইতেছিলে বিগড়াইতেছিলেন বিগড়াইতেছিস বিগড়াইতেছে বিগড়াইতেছেন বিগড়াইতেন বিগড়াইব বিগড়াইবার বিগড়াইবি বিগড়াইবে বিগড়াইবেন বিগড়াইল বিগড়াইলাম বিগড়াইলি বিগড়াইলে বিগড়াইলেন বিগড়াইয়া বিগড়াইয়াছ বিগড়াইয়াছি বিগড়াইয়াছিল বিগড়াইয়াছিলাম বিগড়াইয়াছিলি বিগড়াইয়াছিলে বিগড়াইয়াছিলেন বিগড়াইয়াছিস বিগড়াইয়াছে বিগড়াইয়াছেন বিগড়াইয়ো বিগড়াক বিগড়ান বিগড়ানো বিগড়াবে বিগড়াস বিগড়ায় বিগড়চ্ছ বিগড়চ্ছি বিগড়চ্ছিল বিগড়চ্ছিলাম বিগড়চ্ছিলি বিগড়চ্ছিলে বিগড়চ্ছিলেন বিগড়চ্ছিলেম বিগড়চ্ছিলুম বিগড়চ্ছিস বিগড়চ্ছে বিগড়চ্ছেন বিগড়ে বিগড়েছ বিগড়েছি বিগড়েছিল বিগড়েছিলাম বিগড়েছিলি বিগড়েছিলে বিগড়েছিলেন বিগড়েছিলেম বিগড়েছিলুম বিগড়েছিস বিগড়েছে বিগড়েছেন বিগড়ো বিগড়োবার বিগড়ত বিগড়তাম বিগড়তিস বিগড়তে বিগড়তেন বিগড়তেম বিগড়তুম বিগড়ন বিগড়নো বিগড়ব বিগড়বি বিগড়বে বিগড়বেন বিগড়বো বিগড়ল বিগড়লাম বিগড়লি বিগড়লে বিগড়লেন বিগড়লেম বিগড়লুম বিগড়স বিগড়য় বিঘা বিঘাকালি বিঘাত বিঘাতক বিঘাতী বিঘাতন বিঘাপ্রতি বিঘার বিঘিনি বিঘোর বিঘোষিত বিঘোষণ বিঘটিত বিঘটন বিঘত বিঘৎ বিঘ্ন বিঘ্নকারী বিঘ্নকর বিঘ্নিত বিঘ্নজনক বিঘ্নযুক্ত বিঘ্নত বিঘ্ননাশ বিঘ্ননাশক বিঘ্ননাশন বিঘ্নপূর্ণ বিঘ্নবিনাশন বিঘ্নময় বিঘ্নশূন্য বিঘ্নসঙ্কুল বিঘ্নহারী বিঘ্নহীন বিঘ্নহর বিঘূর্ণিত বিঘূর্ণন বিচ বিচক্ষণ বিচক্ষণতা বিচার বিচারঅবতার বিচারক বিচারকারী বিচারকার্য বিচারকালীন বিচারকর্তা বিচারক্ষম বিচারক্ষমতা বিচারা বিচারাধীন বিচারার্থ বিচারালয় বিচারি বিচারিত বিচারিল বিচারী বিচার্য বিচারণ বিচারণা বিচারণীয় বিচারদিন বিচারনির্দিষ্ট বিচারপতি বিচারপূর্বক বিচারফল বিচারবিবেচনা বিচারবিভাগ বিচারবিভাগীয় বিচারবিহীন বিচারবোধ বিচারবোধহীন বিচারব্যবস্থা বিচারবুদ্ধি বিচারলু বিচারশক্তি বিচারশক্তিসম্পন্ন বিচারশূন্য বিচারসাপেক্ষ বিচারসদন বিচারসভা বিচারহীন বিচালি বিচি বিচিকিচ্ছি বিচিকিৎসা বিচিত বিচিত্ত বিচিত্র বিচিত্রা বিচিত্রানুষ্ঠান বিচিত্রারাগ বিচিত্রিত বিচিত্রিতা বিচিত্রতা বিচিত্রবীর্য বিচিত্রবর্ণ বিচিন্তা বিচিন্তিত বিচিন্ত্য বিচিন্ত্যমান বিচিন্তন বিচেতন বিচেষ্ট বিচেষ্টিত বিচেয় বিচ্ছু বিচ্ছায় বিচ্ছিত্তি বিচ্ছিন্ন বিচ্ছিন্নকরণ বিচ্ছিন্না বিচ্ছিন্নতা বিচ্ছিন্নতাবাদ বিচ্ছিন্নতাবাদী বিচ্ছিন্নতাবোধ বিচ্ছিন্নভাবে বিচ্ছিরি বিচ্ছিরী বিচ্ছেদ বিচ্ছেদকাতর বিচ্ছেদকামী বিচ্ছেদক্লিষ্ট বিচ্ছেদী বিচ্ছেদ্য বিচ্ছেদযুক্ত বিচ্ছেদযোগ্য বিচ্ছেদন বিচ্ছেদপন্থী বিচ্ছেদব্যথা বিচ্ছেদরহিত বিচ্ছেদহীন বিচ্ছুরিত বিচ্ছুরণ বিচঞ্চল বিচ্যুত বিচ্যুতা বিচ্যুতি বিচ্যুতিযুক্ত বিচনী বিচরা বিচরানো বিচরিত বিচর্চিকা বিচরে বিচরণ বিচূর্ণ বিচরণকারিণী বিচরণকারী বিচরণক্ষম বিচূর্ণিত বিচূর্ণন বিচরণপূর্বক বিচরণরত বিচরণশীল বিচরণস্থান বিচরণস্থল বিচল বিচলা বিচুলি বিচলিত বিচলিতা বিচলন বিচয় বিচয়ন বিছ বিছক বিছা বিছাই বিছাইও বিছাইত বিছাইতাম বিছাইতিস বিছাইতে বিছাইতেছ বিছাইতেছি বিছাইতেছিল বিছাইতেছিলাম বিছাইতেছিলি বিছাইতেছিলে বিছাইতেছিলেন বিছাইতেছিস বিছাইতেছে বিছাইতেছেন বিছাইতেন বিছাইব বিছাইবার বিছাইবি বিছাইবে বিছাইবেন বিছাইল বিছাইলাম বিছাইলি বিছাইলে বিছাইলেন বিছাইয়া বিছাইয়াছ বিছাইয়াছি বিছাইয়াছিল বিছাইয়াছিলাম বিছাইয়াছিলি বিছাইয়াছিলে বিছাইয়াছিলেন বিছাইয়াছিস বিছাইয়াছে বিছাইয়াছেন বিছাইয়ো বিছাও বিছাক বিছাতি বিছান বিছানা বিছানাতোলা বিছানাপত্তর বিছানাপত্র বিছানারচাদর বিছানো বিছাবার বিছাস বিছায়েছ বিছি বিছিয়ে বিছিয়েছ বিছিয়েছি বিছিয়েছিল বিছিয়েছিলাম বিছিয়েছিলি বিছিয়েছিলে বিছিয়েছিলেন বিছিয়েছিলেম বিছিয়েছিলুম বিছিয়েছিস বিছিয়েছে বিছিয়েছেন বিছিয়ো বিছচ্ছ বিছচ্ছি বিছচ্ছিল বিছচ্ছিলাম বিছচ্ছিলি বিছচ্ছিলে বিছচ্ছিলেন বিছচ্ছিলেম বিছচ্ছিলুম বিছচ্ছিস বিছচ্ছে বিছচ্ছেন বিছে বিছেহার বিছুটি বিছুটী বিছত বিছতাম বিছুতি বিছতিস বিছতে বিছতেন বিছতেম বিছতুম বিছন বিছনো বিছব বিছবার বিছবি বিছবে বিছবেন বিছবো বিছর বিছরানো বিছুরিনু বিছুরিল বিছরণ বিছুরন বিছুরল বিছল বিছলাম বিছলি বিছলে বিছলেন বিছলেম বিছলুম বিছস বিজাত বিজাতি বিজাতীয় বিজাতীয়তা বিজাতীয়ভেদ বিজারক বিজারিত বিজারণ বিজিগীষু বিজিগীষা বিজিত বিজিতা বিজেতা বিজেত্রী বিজেয় বিজোড় বিজ্ঞ বিজ্ঞা বিজ্ঞাত বিজ্ঞান বিজ্ঞানকাহিনী বিজ্ঞানী বিজ্ঞানপ্রিয় বিজ্ঞানবিদ বিজ্ঞানভিত্তিক বিজ্ঞানশাস্ত্র বিজ্ঞানশিক্ষক বিজ্ঞানশিক্ষা বিজ্ঞানসম্পাদনা বিজ্ঞানসম্মত বিজ্ঞানসম্মতভাবে বিজ্ঞাপিত বিজ্ঞাপন বিজ্ঞাপনী বিজ্ঞাপনীয় বিজ্ঞাপনদাতা বিজ্ঞাপনপত্র বিজ্ঞেয় বিজ্ঞজন বিজ্ঞতা বিজ্ঞত্ব বিজ্ঞপ্তি বিজ্ঞপ্তিপ্রচার বিজুত বিজন বিজনে বিজনেস বিজনেসম্যান বিজনতা বিজনন বিজনবাসী বিজন্মা বিজবিজ বিজ্বর বিজৃম্ভিত বিজৃম্ভণ বিজর বিজুরি বিজুরিরেহা বিজুরী বিজল বিজলা বিজলি বিজুলি বিজলিবাতি বিজলী বিজুলী বিজলীবাতি বিজল্প বিজল্পিত বিজড়িত বিজয় বিজয়কেতন বিজয়কুঞ্জর বিজয়গাঁথা বিজয়গর্ব বিজয়ঘোষণা বিজয়া বিজয়াদশমী বিজয়াধূম বিজয়াসংগীত বিজয়াসঙ্গীত বিজয়িনী বিজয়ী বিজয়ীদল বিজয়োৎসব বিজয়োন্মত্ত বিজয়দিবস বিজয়দুন্দুভি বিজয়দৃপ্ত বিজয়নগর বিজয়নিশান বিজয়পুর বিজয়বার্তা বিজয়বৈজয়ন্তী বিজয়বসন্ত বিজয়মিছিল বিজয়মর্দল বিজয়রাগ বিজয়লক্ষ্মী বিজয়লাভ বিজয়স্তম্ভ বিট বিটকাল বিটকেল বিযুক্ত বিটঙ্ক বিটারশ্মি বিটেল বিযোজন বিযোড় বিযুত বিটপ বিটপালং বিটপালম বিটপী বিটমাক্ষিক বিটলা বিটলে বিটলবণ বিডি বিতং বিতংস বিতান বিতানীকৃত বিতারিখ বিতাড়িত বিতিকিচ্চি বিতিকিচ্ছি বিতিকিচ্ছিরি বিতীর্ণ বিতোপন বিতৃণ বিতণ্ডা বিতত বিত্ত বিত্তকাম বিত্তা বিত্তাঢ্য বিত্তিবেসাত বিত্তবান বিত্তবাসনা বিত্তলাভ বিত্তশালী বিত্তসমাগম বিত্তহীন বিতথ বিতথ্য বিতদ্রু বিতনু বিতন্ত্রী বিতর বিতরক বিতর্ক বিতর্কিকা বিতর্কিত বিতর্কিতভাবে বিতর্কসভা বিতরা বিতরিত বিতরণ বিতরণকারী বিতরণকৃত বিতরণী বিতরণযোগ্য বিতরণস্থান বিত্রস্ত বিতল বিতৃষ্ণ বিতৃষ্ণা বিতস্তা বিতস্তি বিথান বিথাম বিথার বিথারা বিথারি বিথারিত বিথারল বিদ বিদআত বিদআতি বিদকুটে বিদগ্ধ বিদগ্ধা বিদগ্ধজন বিদগ্ধসমাজ বিদঘুটে বিদার বিদারক বিদারা বিদারিত বিদারী বিদারণ বিদারণরেখা বিদাহী বিদায় বিদায়উপহার বিদায়কাল বিদায়কালীন বিদায়কালোচিত বিদায়গ্রহণ বিদায়ি বিদায়ী বিদায়দান বিদায়দানকারী বিদায়বেলা বিদায়ভোগী বিদায়সংবর্ধনা বিদায়সম্ভাষণ বিদিক বিদিত বিদিশা বিদীর্ণ বিদীর্ণকারী বিদেশ বিদেশগত বিদেশগমন বিদেশাগত বিদেশি বিদেশিনী বিদেশী বিদেশীয় বিদেশযাত্রা বিদেশযাত্রী বিদেশনীতি বিদেশপরিক্রমা বিদেশবাস বিদেশবাসিনী বিদেহ বিদেহা বিদেহী বিদ্যা বিদ্যাকেন্দ্র বিদ্যাচুঞ্চু বিদ্যাচর্চা বিদ্যাজাহির বিদ্যাতীর্থ বিদ্যাদাতা বিদ্যাদাত্রী বিদ্যাদান বিদ্যাদানকারী বিদ্যাদিগগজ বিদ্যাদেবী বিদ্যাধর বিদ্যাধরী বিদ্যানিকেতন বিদ্যানিধি বিদ্যানুরাগ বিদ্যানুরাগিণী বিদ্যানুরাগী বিদ্যাপীঠ বিদ্যাপতি বিদ্যাপ্রতিষ্ঠান বিদ্যাবাগীশ বিদ্যাবান বিদ্যাবিনোদ বিদ্যাবিশারদ বিদ্যাবিহীন বিদ্যাবিহীনা বিদ্যাব্যবসায়ী বিদ্যাবতী বিদ্যাবত্তা বিদ্যাবুদ্ধি বিদ্যাবল বিদ্যাভ্যাস বিদ্যাভূষণ বিদ্যামন্দির বিদ্যাময়ী বিদ্যার্জন বিদ্যার্ণব বিদ্যারত্ন বিদ্যার্থিনী বিদ্যার্থী বিদ্যারম্ভ বিদ্যালংকার বিদ্যালঙ্কার বিদ্যালাপ বিদ্যালাভ বিদ্যালয় বিদ্যালয়াদি বিদ্যালয়রূপ বিদ্যাশূন্য বিদ্যাশূন্যা বিদ্যাশ্রম বিদ্যাসাগর বিদ্যাহীন বিদ্যাহীনা বিদ্যোৎসাহিনী বিদ্যোৎসাহী বিদ্যোপার্জন বিদ্যুজ্জিহ্ব বিদ্যুৎ বিদ্যুৎকোষ বিদ্যুৎকটাক্ষ বিদ্যুৎচালিত বিদ্যুৎচমক বিদ্যুৎতরঙ্গ বিদ্যুৎপূর্ণ বিদ্যুৎপ্রবাহ বিদ্যুৎপ্রবাহক বিদ্যুৎপ্রভ বিদ্যুৎপ্রভা বিদ্যুৎবাহী বিদ্যুৎমন্ত্রী বিদ্যুতশক্তি বিদ্যুৎশক্তি বিদ্যুতশক্তিচালিত বিদ্যুৎসংযুক্ত বিদ্যুৎস্পন্দ বিদ্যুৎস্পন্দন বিদ্যুৎস্পৃষ্ট বিদ্যুৎস্ফুরণ বিদ্যুৎস্ফুলিঙ্গ বিদ্যুদগর্ভ বিদ্যুদ্দাম বিদ্যুদ্দীপ্ত বিদ্যুদ্দীপ্তি বিদ্যুদ্বিকাশ বিদ্যুদ্বেগ বিদ্যুন্মালা বিদ্যমান বিদ্যমানতা বিদ্যুল্লতা বিদ্দমান বিদ্ধ বিদ্ধকারী বিদ্ধকরণ বিদ্বান বিদ্বিষ্ট বিদ্বেষ বিদ্বেষকারী বিদ্বেষানল বিদ্বেষী বিদ্বেষযুক্ত বিদ্বেষ্টা বিদ্বেষপরায়ণ বিদ্বেষপূর্ণ বিদ্বেষপ্রসূত বিদ্বেষবুদ্ধি বিদ্বেষবুদ্ধিজনিত বিদ্বেষবহ্নি বিদ্বেষভাজন বিদ্বেষভাব বিদ্বেষভাবাপন্ন বিদ্বজ্জন বিদ্বৎকুল বিদ্বৎকল্প বিদ্বৎসমাজ বিদর বিদুর বিদূর বিদরা বিদ্রাবিত বিদ্রাবণ বিদরি বিদূরিত বিদরী বিদূরে বিদ্রোহ বিদ্রোহকারী বিদ্রোহাচরণ বিদ্রোহাত্মক বিদ্রোহানল বিদ্রোহিণী বিদ্রোহী বিদ্রুত বিদ্রূপ বিদ্রূপাত্মক বিদ্রূপার্থে বিদ্রূপযোগ্য বিদ্রূপপূর্ণ বিদ্রূপমাখা বিদর্ভ বিদ্রুম বিদল বিদলিত বিদলন বিদূষক বিদূষিত বিদুষী বিদূষণ বিধ বিধু বিঁধ বিঁধক বিঁধুক বিধা বিঁধা বিঁধাই বিঁধাইও বিঁধাইত বিঁধাইতাম বিঁধাইতিস বিঁধাইতে বিঁধাইতেছ বিঁধাইতেছি বিঁধাইতেছিল বিঁধাইতেছিলাম বিঁধাইতেছিলি বিঁধাইতেছিলে বিঁধাইতেছিলেন বিঁধাইতেছিস বিঁধাইতেছে বিঁধাইতেছেন বিঁধাইতেন বিঁধাইব বিঁধাইবার বিঁধাইবি বিঁধাইবে বিঁধাইবেন বিঁধাইল বিঁধাইলাম বিঁধাইলি বিঁধাইলে বিঁধাইলেন বিঁধাইয়া বিঁধাইয়াছ বিঁধাইয়াছি বিঁধাইয়াছিল বিঁধাইয়াছিলাম বিঁধাইয়াছিলি বিঁধাইয়াছিলে বিঁধাইয়াছিলেন বিঁধাইয়াছিস বিঁধাইয়াছে বিঁধাইয়াছেন বিঁধাইয়ো বিঁধাক বিধাতা বিধাতাপুরুষ বিধাতব্য বিধান বিঁধান বিধানকারিণী বিধানকারী বিধানকর্তা বিধানানুযায়ী বিঁধানো বিধানপরিষদ বিধানমূলীয় বিধানসংবলিত বিধানসভা বিঁধাস বিধায় বিঁধায় বিধায়ক বিধায়িকা বিধায়িনী বিধায়ী বিধি বিঁধি বিধিগত বিধিগতভাবে বিধিজ্ঞ বিঁধিত বিঁধিতাম বিঁধিতিস বিঁধিতে বিঁধিতেছ বিঁধিতেছি বিঁধিতেছিল বিঁধিতেছিলাম বিঁধিতেছিলি বিঁধিতেছিলে বিঁধিতেছিলেন বিঁধিতেছিস বিঁধিতেছে বিঁধিতেছেন বিঁধিতেন বিধিৎসু বিধিৎসা বিধিদর্শী বিধিনির্দিষ্ট বিধিনির্দেশ বিধিনির্ভর বিধিনিষেধ বিধিনিষেধাবলি বিধিনিষেধহীন বিধিনিয়ম বিঁধিব বিধিবাদ বিধিবাদী বিধিবাম বিঁধিবার বিঁধিবি বিধিবিধান বিধিবিড়ম্বনা বিঁধিবে বিঁধিবেন বিধিব্যবস্থা বিধিবদ্ধ বিধিবদ্ধকরণ বিধিবদ্ধভাবে বিধিবহির্ভূত বিধিভঙ্গ বিধিমালা বিধিমত বিধিমতে বিধিমতো বিঁধিল বিঁধিলাম বিঁধিলি বিধিলিপি বিঁধিলে বিঁধিলেন বিধিশাস্ত্র বিঁধিস বিধিসংগত বিধিসংবলিত বিধিসঙ্গত বিধিসম্মত বিধিসম্মতভাবে বিঁধিয়া বিঁধিয়াছ বিঁধিয়াছি বিঁধিয়াছিল বিঁধিয়াছিলাম বিঁধিয়াছিলি বিঁধিয়াছিলে বিঁধিয়াছিলেন বিঁধিয়াছিস বিঁধিয়াছে বিঁধিয়াছেন বিঁধিয়ে বিঁধিয়েছ বিঁধিয়েছি বিঁধিয়েছিল বিঁধিয়েছিলাম বিঁধিয়েছিলি বিঁধিয়েছিলে বিঁধিয়েছিলেন বিঁধিয়েছিলেম বিঁধিয়েছিলুম বিঁধিয়েছিস বিঁধিয়েছে বিঁধিয়েছেন বিঁধিয়ো বিঁধচ্ছ বিঁধচ্ছি বিঁধচ্ছিল বিঁধচ্ছিলাম বিঁধচ্ছিলি বিঁধচ্ছিলে বিঁধচ্ছিলেন বিঁধচ্ছিলেম বিঁধচ্ছিলুম বিঁধচ্ছিস বিঁধচ্ছে বিঁধচ্ছেন বিঁধে বিঁধেছ বিঁধেছি বিঁধেছিল বিঁধেছিলাম বিঁধেছিলি বিঁধেছিলে বিঁধেছিলেন বিঁধেছিলেম বিঁধেছিলুম বিঁধেছিস বিঁধেছে বিঁধেছেন বিঁধেন বিধেয় বিধেয়ক বিধেয়হীন বিঁধো বিঁধছ বিঁধছি বিঁধছিল বিঁধছিলাম বিঁধছিলি বিঁধছিলে বিঁধছিলেন বিঁধছিলেম বিঁধছিলুম বিঁধছিস বিঁধছে বিঁধছেন বিধৌত বিধুত বিধূত বিধৃত বিঁধত বিঁধতাম বিঁধতিস বিঁধতে বিঁধতেন বিঁধতেম বিঁধতুম বিঁধন বিঁধুন বিধুনিত বিধূনিত বিঁধনো বিধুন্তুদ বিধুনন বিধূনন বিঁধব বিধ্বংস বিধ্বংসিত বিধ্বংসী বিধবা বিধবাবিবাহ বিঁধবার বিঁধবি বিঁধবে বিধুবেদনা বিঁধবেন বিঁধবো বিধুবদন বিধুবদনা বিধ্বস্ত বিধুমুখ বিধুমুখী বিধুর বিধুরা বিধুরে বিধুরতা বিধর্মা বিধর্মী বিঁধল বিঁধলাম বিঁধলি বিঁধলে বিঁধলেন বিঁধলেম বিঁধলুম বিঁধস বিঁধয় বিনু বিনা বিনাখরচা বিনাচিকিৎসা বিনাটিকেট বিনাযুদ্ধ বিনাদোষ বিনানিয়া বিনানো বিনাবাক্য বিনাবাধা বিনাবিচার বিনাবেতন বিনামা বিনামূল্য বিনাশ বিনাশক বিনাশকারী বিনাশকর বিনাশকরণ বিনাশিত বিনাশিনী বিনাশী বিনাশযোগ্য বিনাশধর্মী বিনাশন বিনাশপ্রাপ্ত বিনাশ্রম বিনাশশীল বিনাশশীলতা বিনায়ক বিনি বিনিঃশেষ বিনিঃসৃত বিনিঃসরণ বিনিক্ষিপ্ত বিনিক্ষেপ বিনিযুক্ত বিনিদ্র বিনিন্দিত বিনিন্দিতা বিনিপাত বিনিবারিত বিনিবেশ বিনিবেশিত বিনিবৃত্ত বিনিবর্তিত বিনিবর্তন বিনিমিত বিনিমেয় বিনিময় বিনিময়কারী বিনিময়াদি বিনিময়যোগ্য বিনিময়যোগ্যতা বিনিময়প্রথা বিনিময়সহ বিনিময়হার বিনির্গত বিনির্গম বিনির্গমন বিনির্জিত বিনির্জয় বিনির্ণীত বিনির্ণয় বিনির্দিষ্ট বিনির্দেশ বিনির্বৃত্ত বিনির্মুক্ত বিনির্মাণ বিনিশ্চিত বিনিশ্চিতি বিনিশ্চল বিনিশ্চয় বিনিয়ে বিনিয়োগ বিনিয়োগকারী বিনিয়োগসৃষ্ট বিনিয়োগসহ বিনিয়োজিত বিনীত বিনীতা বিনীতভাবে বিনে বিনেতা বিনেত্রী বিনেয় বিনোদ বিনোদিত বিনোদিনী বিনোদিয়া বিনোদী বিনোদন বিনোদনকারী বিনোদনধর্মী বিন্যাস বিন্যাস্ত বিন্যস্ত বিন্যস্তকরণ বিন্যস্ততা বিনত বিনতা বিনতানন্দন বিনতি বিন্তি বিন্তী বিন্দ বিন্দু বিন্দুগামী বিন্দা বিন্দেদূতী বিন্দুযুক্ত বিন্দুধারণ বিন্দুবিসর্গ বিন্দুবৎ বিন্দুবৃত্ত বিন্দুমাত্র বিন্দুস্থ বিন্দুসদৃশ বিন্দুসমষ্টি বিন্দুসহযোগ বিন্ধ বিন্ধা বিন্ধ্য বিন্ধ্যাচল বিন্ধ্যারণ্য বিন্ধ্যপর্বত বিন্ধ্যবাসিনী বিন্ন বিননি বিনুনি বিননিয়া বিননী বিননো বিনমিত বিনম্র বিনম্রা বিনম্রতা বিনশ্বর বিনশ্বরতা বিনষ্ট বিনষ্টকারী বিনষ্টি বিনষ্টিকরণ বিনয় বিনয়াবনত বিনয়াবনতা বিনয়ী বিনয়ন বিনয়পূর্বক বিনয়সহকারে বিপক্ষ বিপক্ষীয় বিপক্ষতা বিপক্ষদল বিপক্ষভুক্ত বিপাক বিপাকগ্রস্ত বিপাকিয়া বিপাকীয় বিপাক্যা বিপাশা বিপিতা বিপিন বিপিনচন্দ্র বিপিনবিহারী বিপণ বিপণি বিপণী বিপণীকেন্দ্র বিপণন বিপৎ বিপৎকাল বিপৎকালীন বিপতি বিপত্তি বিপত্তিকর বিপত্নীক বিপৎপাত বিপৎপূর্ণ বিপৎসংকুল বিপথ বিপথগামিনী বিপথগামী বিপথগমন বিপথচারিণী বিপথচারিতা বিপথচারী বিপদ বিপদআপদ বিপদকাল বিপদগর্ভ বিপদগ্রস্ত বিপদাত্মক বিপদাপদ বিপদাপন্ন বিপদচিহ্ন বিপদেআপদে বিপদেরগন্ধ বিপদজনক বিপদডাকা বিপদুত্তীর্ণ বিপদুদ্ধার বিপদনাশিনী বিপদপ্রাজ্ঞ বিপদবহুল বিপদভঞ্জন বিপদমুক্ত বিপদমুক্তি বিপদরেখা বিপদশূন্য বিপদশূন্যতা বিপদসংকেত বিপদসংকুল বিপদসীমা বিপদসৃষ্টিকারী বিপদহীন বিপদহীনতা বিপন্ন বিপন্না বিপ্র বিপ্রকর্ষ বিপ্রকর্ষী বিপ্রকর্ষণ বিপ্রকৃষ্ট বিপরিণাম বিপরিণামী বিপরিণত বিপরিণতি বিপরিবর্তিত বিপরিবর্তন বিপরীত বিপরীতকাল বিপরীতকরণ বিপরীতগামী বিপরীতা বিপরীতার্থক বিপরীতার্থর্কতা বিপরীতায়ন বিপরীতদিক বিপরীতধর্মিতা বিপরীতধর্মী বিপরীতপ্রান্তিক বিপরীতভাবে বিপরীতমুখী বিপরীতরূপ বিপ্রযুক্ত বিপর্যাস বিপর্যায় বিপর্যস্ত বিপর্যস্তমূল বিপর্যয় বিপর্যয়কারী বিপর্যয়গ্রস্ত বিপ্রতিপত্তি বিপ্রতিপন্ন বিপ্রতীপ বিপ্রতীপতা বিপ্রলাপ বিপ্রলব্ধ বিপ্রলব্ধা বিপ্রলম্ভ বিপ্রসাৎ বিপ্রয়োগ বিপল বিপুল বিপুলকায় বিপুলা বিপ্লাবিত বিপ্লাবন বিপুলায়তন বিপ্লুত বিপুলতা বিপুলপরিমাণ বিপ্লব বিপ্লবাত্মক বিপ্লবী বিপ্লবোত্তর বিপ্লববাদ বিপ্লববাদী বিপ্লবমুখী বিপুলভাবে বিপশ্চিৎ বিফল বিফলকাম বিফলীকৃত বিফলতা বিফলমনোরথ বিবক্ষু বিবক্ষা বিবক্ষিত বিবা বিবাগ বিবাগী বিবাদ বিবাদকামী বিবাদকারী বিবাদিনী বিবাদী বিবাদপ্রিয় বিবাদবিসংবাদ বিবাদসংবাদ বিবাদহীন বিবাদহীনতা বিবাধ বিবাস বিবাসিত বিবাসন বিবাহ বিবাহআসর বিবাহকাব্য বিবাহকারী বিবাহকাল বিবাহকর্তা বিবাহঘটিত বিবাহাদি বিবাহানুষ্ঠান বিবাহিত বিবাহিতা বিবাহোত্তর বিবাহোপযোগী বিবাহোপলক্ষ্য বিবাহযাত্রা বিবাহযোগ্য বিবাহযোগ্যা বিবাহদান বিবাহপদ্ধতি বিবাহপ্রথা বিবাহপূর্ব বিবাহপয়গাম বিবাহবার্ষিকী বিবাহবাসর বিবাহবিচ্ছেদ বিবাহব্যাপার বিবাহবন্ধন বিবাহবহির্ভূত বিবাহরজনী বিবাহসূত্র বিবাহসভা বিবি বিবিক্ত বিবিক্তসেবী বিবিক্ষু বিবিক্ষা বিবিজান বিবিধ বিবিধার্থ বিবিসাহেব বিবিয়ানা বিবচনায় বিবেক বিবেকী বিবেকবান বিবেকবোধ বিবেকবুদ্ধি বিবেকরহিত বিবেকসম্পন্ন বিবেকহীন বিবেকহীনতা বিবেচক বিবেচিত বিবেচ্য বিবেচনা বিবেচনাযোগ্য বিবেচনাধীন বিবেচনাপ্রসূত বিবেচনারহিত বিবেচনাহীন বিবেচনাহীনভাবে বিবেচনীয় বিবৃত বিবৃতাক্ষ বিবৃতি বিবৃত্ত বিবৃত্তি বিবৎসা বিবৃদ্ধ বিবৃদ্ধি বিবদমান বিবদমানা বিবুধ বিবুধমণ্ডলী বিবমিষু বিবমিষা বিবর বিবরা বিবর্জক বিবর্জিত বিবর্জিতা বিবর্জন বিবরণ বিবর্ণ বিবর্ণা বিবরণী বিবরণীয় বিবরণটাইপ বিবর্ণতা বিবরণদাতা বিবরণপত্র বিবর্ণমুখ বিবরণসংবলিত বিবরণসহ বিবর্ত বিব্রত বিবর্তিত বিবর্তন বিবর্তনতত্ত্ব বিবর্তনবাদ বিবর্তনবাদী বিবর্তবাদ বিব্রতভাব বিবর্ধক বিবর্ধিত বিবর্ধন বিবর্ধনকারী বিবশ বিবশা বিবশতা বিবসিনী বিবস্ত্র বিবস্ত্রা বিবসন বিবসনা বিবস্বান বিভু বিভূঁই বিভক্ত বিভক্তকারী বিভক্তি বিভক্তিকরণ বিভক্তিযুক্ত বিভক্তিযোগ বিভক্তিপ্রধান বিভক্তিসিদ্ধ বিভক্তিহীন বিভঙ্গ বিভঙ্গি বিভঙ্গী বিভা বিভাকর বিভাগ বিভাগকারী বিভাগকর্তা বিভাগীয় বিভাজক বিভাজিকা বিভাজিত বিভাজ্য বিভাজ্যতা বিভাজন বিভাজনক্ষম বিভাজনীয় বিভাজনজাত বিভাজনপূর্ব বিভাজনরত বিভাব বিভাবক বিভাবিত বিভাব্য বিভাবন বিভাবনা বিভাবনীয় বিভাবনযোগ্য বিভাবরী বিভাবসু বিভাষা বিভাষাযুক্ত বিভাষিত বিভাস বিভাসা বিভাসিত বিভাসরাগ বিভিন্ন বিভিন্নক্ষেত্র বিভিন্নার্থ বিভিন্নার্থক বিভিন্নজন বিভিন্নতা বিভিন্নদিক বিভিন্নবক্ষ বিভিন্নভাব বিভিন্নমুখী বিভিন্নরকম বিভিন্নস্থান বিভিন্নসময় বিভীতক বিভীতকী বিভীষিকা বিভীষিকাপূর্ণ বিভীষিকাময় বিভীষিকাসন বিভীষণ বিভীষণপত্নী বিভীষণবাহিনী বিভেদ বিভেদক বিভেদকামী বিভেদকারী বিভেদকরণ বিভেদন বিভেদপন্থা বিভেদপন্থী বিভোর বিভোল বিভজ্যমান বিভজনীয় বিভুতা বিভূতি বিভূতিভূষণ বিভুত্ব বিভব বিভবশক্তি বিভ্রাট বিভ্রান্ত বিভ্রান্তি বিভ্রান্তিকর বিভ্রান্তিজনক বিভ্রম বিভ্রমযুক্ত বিভ্রমণ বিভূষিত বিভূষিতা বিভূষণ বিভূষণা বিম বিমুক্ত বিমুক্তকরণ বিমুক্তি বিমুখ বিমুখী বিমুখতা বিমুগ্ধ বিমুগ্ধা বিমুগ্ধতা বিমা বিমাকারী বিমাচুক্তি বিমাতা বিমাতৃজ বিমাতৃসুলভ বিমান বিমানঘাঁটি বিমানচারী বিমানচালক বিমানচলন বিমানযাত্রী বিমানযোগে বিমাননা বিমানপোত বিমানপত্তন বিমানপথ বিমানপরিবহন বিমানবালা বিমানবাহিনী বিমানবাহী বিমানবিদ্যা বিমানবিধ্বংসী বিমানবন্দর বিমানবল বিমানবহর বিমানশালা বিমানসংস্থা বিমানসেবিকা বিমাপত্র বিমার বিমারি বিমারিস্তান বিমারী বিমিশ্র বিমিশ্রণ বিমিষ্ট বিমোচিত বিমোচন বিমোচনে বিমোহ বিমোহা বিমোহিত বিমোহন বিমূঢ় বিমূঢ়তা বিমত বিমতী বিমৎসর বিমথিত বিমনা বিমনীকৃত বিমনীভূত বিমন্দ্রিত বিমনস্ক বিম্ব বিম্বু বিম্বাগত বিম্বাধর বিম্বাধরা বিম্বিত বিম্বোষ্ঠ বিম্বোষ্ঠা বিম্বৌষ্ঠ বিম্বৌষ্ঠা বিম্বুপাত বিমরিষ বিমূর্ত বিমূর্তায়ন বিমূর্ততা বিমূর্তভাব বিমূর্তভাবে বিমর্দ বিমর্দক বিমর্দিত বিমর্দন বিমর্দনক বিমর্দনকারী বিমর্শ বিমর্শন বিমর্ষ বিমর্ষতা বিমল বিমলা বিমলতা বিমৃশ্যকারিতা বিমৃশ্যকারী বিমৃষ্ট বিমৃষ্যকারিতা বিমৃষ্যকারী বিরক্ত বিরক্তি বিরক্তিকর বিরক্তিকরভাবে বিরক্তিপ্রকাশ বিরক্তিপ্রকাশক বিরক্তিভাজন বিরাগ বিরাগিণী বিরাগী বিরাগযুক্ত বিরাগভাজন বিরাঙ বিরাজ বিরাজিত বিরাজমান বিরাট বিরাটকার বিরাটকায় বিরাটত্ব বিরাটনগর বিরাটরাজ বিরাটরাজ্য বিরাটরূপ বিরান বিরানি বিরানপাথার বিরানপ্রান্তর বিরানব্বই বিরানব্বুই বিরানভূমি বিরাবান বিরাম বিরামচিহ্ন বিরামবিধি বিরামবিহীন বিরামভাবে বিরামস্থান বিরামহীন বিরামহীনতা বিরামহীনভাবে বিরাশি বিরাশী বিরাড় বিরিখ বিরিঞ্চি বিরিশিরি বিরিয়ানি বিরচিত বিরচন বিরোধিতা বিরোধী বিরেচক বিরেচিত বিরেচন বিরোচন বিরোধ বিরোধক বিরোধাভাস বিরোধালঙ্কার বিরোধিত বিরোধিতা বিরোধিতাপূর্ণ বিরোধিতাহীন বিরোধিনী বিরোধী বিরোধীদল বিরোধীদলীয় বিরোধজনিত বিরোধযুক্ত বিরোধনির্দেশক বিরোধপূর্ণ বিরোধবাচক বিরোধভিত্তিক বিরোধভঞ্জন বিরোধহীন বিরজা বিরজাধাম বিরজাসুন্দরী বিরত বিরতা বিরতি বিরতিযুক্ত বিরতিহীন বিরুদ্ধ বিরুদ্ধাচার বিরুদ্ধাচরণ বিরুদ্ধচারী বিরুদ্ধতা বিরুদ্ধপক্ষ বিরুদ্ধবাদ বিরুদ্ধবাদিতা বিরুদ্ধবাদী বিরুদ্ধমতাবলম্বী বিরূপ বিরূপাক্ষ বিরূপাক্ষী বিরূপতা বিরূপত্ব বিরূপভাব বিরমাণ বিরল বিরলকেশ বিরলতা বিরলদন্ত বিরলদর্শন বিরলপ্রয়োগ বিরলভাবে বিরস বিরসতা বিরসবদন বিরসভাব বিরহ বিরহাতুর বিরহানল বিরহিণী বিরহিত বিরহিয়া বিরহী বিরহীকাজরী বিরহজীবন বিরহজনিত বিরহজ্বালা বিরহতাপ বিরহপীড়িত বিরহপীড়িতা বিরহবিধুর বিরহবেদনা বিরয়ানী বিল বিলকুল বিলক্ষণ বিলঙ্ঘিত বিলঙ্ঘ্য বিলঙ্ঘন বিলঙ্ঘনীয় বিলা বিলাই বিলাইও বিলাইত বিলাইতাম বিলাইতিস বিলাইতে বিলাইতেছ বিলাইতেছি বিলাইতেছিল বিলাইতেছিলাম বিলাইতেছিলি বিলাইতেছিলে বিলাইতেছিলেন বিলাইতেছিস বিলাইতেছে বিলাইতেছেন বিলাইতেন বিলাইন বিলাইব বিলাইবার বিলাইবি বিলাইবে বিলাইবেন বিলাইল বিলাইলাম বিলাইলি বিলাইলে বিলাইলেন বিলাইয়া বিলাইয়াছ বিলাইয়াছি বিলাইয়াছিল বিলাইয়াছিলাম বিলাইয়াছিলি বিলাইয়াছিলে বিলাইয়াছিলেন বিলাইয়াছিস বিলাইয়াছে বিলাইয়াছেন বিলাইয়ো বিলাক বিলাত বিলাতি বিলাতিকুমড়া বিলাতিবেগুন বিলাতিয়ানা বিলাতী বিলাতযাত্রী বিলাতফেরত বিলাতফেরতা বিলাতবাকি বিলান বিলানো বিলান্দাপুর বিলাপ বিলাপকারী বিলাপা বিলাপিনী বিলাপী বিলাপধ্বনি বিলাস বিলাসকক্ষ বিলাসকানন বিলাসিতা বিলাসিনী বিলাসী বিলাসদ্রব্য বিলাসপরায়ণ বিলাসপ্রিয় বিলাসপূর্ণ বিলাসবর্জিত বিলাসবহুল বিলাসভঙ্গি বিলাসভবন বিলাসসামগ্রী বিলি বিলিকৃত বিলিখিত বিলিখন বিলিতি বিলিপ্ত বিলিরুবিন বিলিস বিলিয়ার্ড বিলিয়ে বিলিয়েছ বিলিয়েছি বিলিয়েছিল বিলিয়েছিলাম বিলিয়েছিলি বিলিয়েছিলে বিলিয়েছিলেন বিলিয়েছিলেম বিলিয়েছিলুম বিলিয়েছিস বিলিয়েছে বিলিয়েছেন বিলিয়ো বিলিয়ন বিলিয়নিয়ার বিলচ্ছ বিলচ্ছি বিলচ্ছিল বিলচ্ছিলাম বিলচ্ছিলি বিলচ্ছিলে বিলচ্ছিলেন বিলচ্ছিলেম বিলচ্ছিলুম বিলচ্ছিস বিলচ্ছে বিলচ্ছেন বিলীন বিলীয়মান বিলেখন বিলেত বিলেতি বিলেতফেরত বিলেতবাসী বিলেপ বিলেপন বিলেপনদ্রব্য বিলোকিত বিলোকন বিলোচন বিলোপ বিলোপিত বিলোপী বিলোপন বিলোপসাধন বিলোভন বিলোল বিলোড়িত বিলোড়ন বিলজ্জ বিল্ডিং বিলুণ্ঠিত বিলুণ্ঠিতা বিলুণ্ঠন বিলত বিলতাম বিলতিস বিলতে বিলতেন বিলতেম বিলতুম বিলন বিলনো বিলপা বিলুপ্ত বিলুপ্তি বিলুপ্তপ্রায় বিলপন বিলপমান বিল্ব বিলবার বিলবি বিলবে বিলবেন বিলবোর্ড বিল্বদল বিল্বপত্র বিল্বফল বিল্বস্তনী বিলম্ব বিলম্বকারী বিলম্বাহ বিলম্বিত বিলম্বিতা বিলম্বী বিলম্বজনিত বিলম্বযুক্ত বিলম্বন বিলম্বনকারী বিলম্বশুল্ক বিলম্বহীন বিলল বিললি বিললে বিললেন বিললেম বিললুম বিলসই বিলসা বিলসিত বিলসন বিলসব বিলসয়ে বিলয় বিলয়প্রাপ্ত বিশ বিশকাপ বিশৃঙ্খল বিশৃঙ্খলা বিশৃঙ্খলাবস্থা বিশৃঙ্খলতা বিশৃঙ্খলভাবে বিশা বিশাই বিশাখ বিশাখা বিশারদ বিশাল বিশালাকার বিশালাকৃতি বিশালাক্ষী বিশালায়তন বিশালী বিশালতা বিশালত্ব বিশিখ বিশিষ্ট বিশিষ্টা বিশিষ্টতা বিশিষ্টতাবর্জিত বিশিষ্টভাবে বিশীর্ণ বিশীর্ণা বিশীর্ণতা বিশীর্ণত্ব বিশে বিশেক বিশেষ বিশেষক বিশেষকারক বিশেষক্ষেত্রে বিশেষাধিকার বিশেষার্থক বিশেষার্থবাচক বিশেষার্থবোধক বিশেষায়িত বিশেষিত বিশেষিতকরণ বিশেষীকরণ বিশেষীভূত বিশেষীভবন বিশেষোক্তি বিশেষজ্ঞ বিশেষ্য বিশেষটান বিশেষ্যপদ বিশেষ্যপদীয় বিশেষ্যবাচক বিশেষ্যবিশেষণ বিশেষণ বিশেষণীয় বিশেষণবাচক বিশেষণরূপে বিশেষত বিশেষত্ব বিশেষত্বহীন বিশেষপ্রকার বিশেষপ্রক্রিয়া বিশেষভাবে বিশেষরূপে বিশোক বিশোকা বিশোধক বিশোধিত বিশোধ্য বিশোধন বিশোধনীয় বিশোধনযোগ্য বিশোর্ধ বিশোষিত বিশোষণ বিশটা বিশটি বিশতম বিশদ বিশদতা বিশুদ্ধ বিশুদ্ধি বিশুদ্ধিকারক বিশুদ্ধিকরণ বিশুদ্ধতা বিশুদ্ধতাসাধন বিশুদ্ধভাবে বিশদভাবে বিশ্ব বিশ্বকাপ বিশ্বকাপজয়ী বিশ্বকোষ বিশ্বকোষীয় বিশ্বকোষসুলভ বিশ্বকবি বিশ্বকর্তা বিশ্বকর্মা বিশ্বখ্যাত বিশবাঁও বিশ্বামিত্র বিশ্বাশ্লেষী বিশ্বাস বিশ্বাসকারক বিশ্বাসকারী বিশ্বাসঘাতক বিশ্বাসঘাতকতা বিশ্বাসঘাতিকা বিশ্বাসঘাতিনী বিশ্বাসঘাতী বিশ্বাসানুসারে বিশ্বাসী বিশ্বাসীবাদ বিশ্বাস্য বিশ্বাসযোগ্য বিশ্বাসযোগ্যতা বিশ্বাসপাত্র বিশ্বাসপরায়ণা বিশ্বাসবিজয়ী বিশ্বাসভঙ্গ বিশ্বাসভঙ্গকারী বিশ্বাসভঙ্গতা বিশ্বাসভাজন বিশ্বাসভূমি বিশ্বাসমত বিশ্বাসমতে বিশ্বাসহানি বিশ্বাসহীনতা বিশ্বাসহন্তা বিশ্বাসহন্ত্রী বিশ্বায়ন বিশ্বচাদর বিশ্বচ্যাম্পিয়ন বিশ্বচরাচর বিশ্বচরাচরব্যাপী বিশ্বেশ্বর বিশ্বেশ্বরী বিশ্বজগত বিশ্বজগৎ বিশ্বজিত বিশ্বজিৎ বিশ্বজোড়া বিশ্বজন বিশ্বজনীন বিশ্বজনীনতা বিশ্বজনীনভাবে বিশ্বজুড়ে বিশ্বজয় বিশ্বজয়ী বিশ্বযুদ্ধ বিশ্বযুদ্ধকালীন বিশ্বযুদ্ধদ্বয় বিশ্বত বিশ্বতাত্ত্বিক বিশ্বতালিকা বিশ্বতত্ত্ব বিশ্বতত্ত্ববিদ বিশ্বত্রাস বিশ্বদেব বিশ্বনাথ বিশ্বনিখিল বিশ্বনিন্দক বিশ্বনিন্দুক বিশ্বনেতা বিশ্বনবী বিশ্বপা বিশ্বপাতা বিশ্বপতি বিশ্বপ্রকৃতি বিশ্বপরিক্রমা বিশ্বপ্রেম বিশ্বপ্রেমিক বিশ্বপ্রসিদ্ধ বিশ্ববকাটে বিশ্ববখাটে বিশ্ববাজার বিশ্ববাণিজ্য বিশ্ববাসী বিশ্ববিখ্যাত বিশ্ববিজয় বিশ্ববিজয়ী বিশ্ববিদ্যালয় বিশ্ববিধাতা বিশ্ববিমোহিনী বিশ্ববিমোহী বিশ্ববিমোহন বিশ্ববিলোপ বিশ্ববিশ্রুত বিশ্বব্যাংক বিশ্বব্যাপক বিশ্বব্যাপিনী বিশ্বব্যাপী বিশ্ববন্দিত বিশ্ববরেণ্য বিশ্বব্রহ্মাণ্ড বিশ্বভারতী বিশ্বভাষা বিশ্বমান বিশ্বমানব বিশ্বমৈত্রী বিশ্বমঞ্চ বিশ্বম্ভরা বিশ্বমূর্তি বিশ্বময় বিশ্বরেকর্ড বিশ্বরূপ বিশ্বলোক বিশ্বশক্তি বিশ্বশান্তি বিশ্বসংবাদ বিশ্বসংসার বিশ্বসংস্থা বিশ্বসঙ্গীত বিশ্বসাহিত্য বিশ্বসিত বিশ্বসেরা বিশ্বস্ত বিশ্বস্ততা বিশ্বস্তরূপে বিশ্বস্তসূত্রে বিশ্বসভ্যতা বিশ্বস্রষ্টা বিশ্বসৃষ্টি বিশ্বসৃষ্টিতত্ত্ব বিশ্বহৃদয় বিশভাগ বিশ্রান্ত বিশ্রান্তি বিশ্রান্তভাবে বিশরাম বিশ্রাম বিশ্রামকক্ষ বিশ্রামগ্রহণ বিশ্রামঘর বিশ্রামাগার বিশ্রামাবস্থায় বিশ্রামযুক্ত বিশ্রামরত বিশ্রী বিশ্রীভাবে বিশ্রীরকম বিশ্রুত বিশ্রুতি বিশ্রদ্ধ বিশ্রম্ভ বিশ্রম্ভালাপ বিশ্লিষ্ট বিশ্লেষ বিশ্লেষক বিশ্লেষিত বিশ্লেষণ বিশ্লেষণকারী বিশ্লেষণাত্মক বিশ্লেষণী বিশ্লেষণীয় বিশ্লেষণধর্মিতা বিশ্লেষণধর্মী বিশল্য বিশল্যকরণী বিশল্যা বিশুষ্ক বিশুষ্কতা বিশহাত বিষ বিষকণ্ঠ বিষকন্যা বিষকুম্ভ বিষ্কম্ভক বিষকর বিষক্রিয়া বিষক্রিয়ানাশক বিষঘ্ন বিষা বিষাই বিষাইও বিষাইছে বিষাইত বিষাইতাম বিষাইতিস বিষাইতে বিষাইতেছ বিষাইতেছি বিষাইতেছিল বিষাইতেছিলাম বিষাইতেছিলি বিষাইতেছিলে বিষাইতেছিলেন বিষাইতেছিস বিষাইতেছে বিষাইতেছেন বিষাইতেন বিষাইব বিষাইবার বিষাইবি বিষাইবে বিষাইবেন বিষাইল বিষাইলাম বিষাইলি বিষাইলে বিষাইলেন বিষাইয়া বিষাইয়াছ বিষাইয়াছি বিষাইয়াছিল বিষাইয়াছিলাম বিষাইয়াছিলি বিষাইয়াছিলে বিষাইয়াছিলেন বিষাইয়াছিস বিষাইয়াছে বিষাইয়াছেন বিষাইয়ো বিষাক বিষাক্ত বিষাণ বিষাদ বিষাদগম্ভীর বিষাদগ্রস্ত বিষাদিত বিষাদিতা বিষাদিনী বিষাদী বিষাদযুক্ত বিষাদময় বিষাদসিন্ধু বিষানো বিষাস বিষি বিষিত বিষিস বিষিয়ে বিষিয়েছ বিষিয়েছি বিষিয়েছিল বিষিয়েছিলাম বিষিয়েছিলি বিষিয়েছিলে বিষিয়েছিলেন বিষিয়েছিলেম বিষিয়েছিলুম বিষিয়েছিস বিষিয়েছে বিষিয়েছেন বিষিয়ো বিষচক্র বিষচক্ষে বিষচ্ছ বিষচ্ছি বিষচ্ছিল বিষচ্ছিলাম বিষচ্ছিলি বিষচ্ছিলে বিষচ্ছিলেন বিষচ্ছিলেম বিষচ্ছিলুম বিষচ্ছিস বিষচ্ছে বিষচ্ছেন বিষজড়া বিষ্য বিষ্টু বিষযুক্ত বিষ্টিভদ্রা বিষ্টব্ধ বিষ্টম্ভ বিষ্ঠা বিষ্ঠাত্যাগ বিষ্ঠাবর্জন বিষণ বিষ্ণু বিষ্ণুউপাসক বিষণ্ণ বিষণ্ণা বিষণ্ণতা বিষণ্ণবদন বিষ্ণুপত্নী বিষ্ণুপ্রিয়া বিষ্ণুবাহন বিষ্ণুভক্ত বিষ্ণুমূর্তি বিষ্ণুলোক বিষত বিষতাম বিষতিস বিষতে বিষতেন বিষতেম বিষতুম বিষদ বিষদাঁত বিষদাঁতহীন বিষদায়ক বিষদিগ্ধ বিষদিগ্ধা বিষদন্ত বিষদষ্ট বিষদৃষ্টি বিষধর বিষনাই বিষনাশক বিষনো বিষনয়ন বিষপান বিষপ্রয়োগ বিষফোড়া বিষফোঁড়া বিষফল বিষব বিষুব বিষবৃক্ষ বিষবার বিষবি বিষবিজ্ঞান বিষবিদ্যা বিষুবীয় বিষবে বিষবেন বিষবৈদ্য বিষবো বিষুবতল বিষুবপ্রদেশ বিষুববিন্দু বিষুববৃত্ত বিষুবরেখা বিষুবরৈখিক বিষুবলম্ব বিষুবসংক্রান্তি বিষবড়ি বিষম বিষমকাল বিষমুখ বিষমাখা বিষমিশ্রিত বিষমজ্বর বিষমবাহু বিষল বিষলাম বিষলি বিষলে বিষলেন বিষলেম বিষলুম বিষসঞ্চার বিষহীন বিষহর বিষহরা বিষহরী বিষয় বিষয়আশয় বিষয়ক বিষয়কর্ম বিষয়গৌরব বিষয়াদি বিষয়ানুক্রমিক বিষয়ান্তর বিষয়ানুবদ্ধতা বিষয়াবলী বিষয়াসক্ত বিষয়াসক্তি বিষয়ী বিষয়ীভূত বিষয়জ্ঞান বিষয়তালিকা বিষয়তৃষ্ণা বিষয়নির্দেশ বিষয়নিরপেক্ষ বিষয়পরায়ণ বিষয়পূর্ণ বিষয়বাসনা বিষয়বাসনামুক্ত বিষয়বাসনারহিত বিষয়বিভাগ বিষয়বৈরাগ্য বিষয়বুদ্ধি বিষয়বুদ্ধিসম্পন্ন বিষয়বস্তু বিষয়বহির্ভূত বিষয়ভিত্তিক বিষয়ভোগ বিষয়লালসা বিষয়শ্রেণী বিষয়সূচি বিষয়সম্পত্তি বিস বিসংকুল বিসংগত বিসংবাদ বিসংবাদকারী বিসংবাদিত বিসংবাদী বিস্কিট বিসকুট বিস্কুট বিসকম্মা বিসঙ্কুল বিসঙ্গত বিসা বিসার বিসারিণী বিসারিত বিসারী বিসিক বিসূচিকা বিসেখী বিসোঁরিআ বিস্ট বিসৃত বিস্ত বিস্তার বিস্তারকারী বিস্তারিত বিস্তারিল বিস্তার্য বিস্তারযুক্ত বিস্তারযোগ্য বিস্তাররোধ বিস্তারশীল বিস্তীর্ণ বিস্তৃত বিস্তৃতঅঞ্চল বিস্তৃতি বিস্তৃতিলাভ বিস্তৃততর বিস্তৃতভাবে বিস্তর বিসদৃশ বিসদৃশতা বিস্ফার বিস্ফারিত বিস্ফারণ বিস্ফোট বিস্ফোটক বিস্ফোটিত বিস্ফোরক বিস্ফোরিত বিস্ফোরণ বিস্ফোরণকারী বিস্ফোরণজনিত বিস্ফোরণমুখী বিস্ফোরণশীল বিস্ফুরিত বিস্ফুরণ বিস্ফুলিঙ্গ বিস্বাদ বিসমাথ বিস্মাপন বিস্মিত বিস্মিতকরণ বিস্মিতা বিসমিল্লা বিসমিল্লাহ বিসমিল্লাহ্‌ বিসমিল্লাহির বিস্মৃত বিস্মৃতা বিস্মৃতি বিস্মৃতিজনিত বিস্মৃতিযুক্ত বিস্মরণ বিস্মরণীয় বিস্মরণজনিত বিস্মরণযোগ্য বিস্মরণশীল বিস্ময় বিস্ময়কর বিস্ময়াকুল বিস্ময়াদি বিস্ময়ান্বিত বিস্ময়াপন্ন বিস্ময়াবিষ্ট বিস্ময়াবহ বিস্ময়াভিভূত বিস্ময়চিহ্ন বিস্ময়োৎপাদক বিস্ময়োৎফুল্ল বিস্ময়জনক বিস্ময়জনিত বিস্ময়যুক্ত বিস্ময়প্রকাশক বিস্ময়বিমুগ্ধ বিস্ময়বিমূঢ় বিস্ময়বিহ্বল বিস্ময়বিহ্বলতা বিস্ময়বোধক বিস্রংস বিস্রংসী বিস্রংসন বিসর্গ বিসরা বিসরান বিসরি বিসরিত বিসরী বিসর্জা বিসর্জিত বিসর্জিতা বিসর্জন বিসর্জনীয় বিসর্জনযোগ্য বিসরণ বিস্রুত বিস্রুতি বিসর্প বিসর্পিণী বিসর্পিত বিসর্পিল বিসর্পী বিসর্পণ বিসর্পণশীল বিসরল বিস্রস্ত বিসৃষ্ট বিহগ বিহগী বিহঙ্গ বিহঙ্গিকা বিহঙ্গিনী বিহঙ্গী বিহঙ্গম বিহঙ্গমা বিহঙ্গমী বিহা বিহাই বিহাইন বিহান বিহানবেলা বিহার বিহারকারী বিহারি বিহারিণী বিহারী বিহি বিহিত বিহিতক বিহিতকাল বিহিশত বিহীন বিহীনা বিহীনতা বিহেভিয়ার বিহত বিহন বিহনে বিহুনে বিহুন্নে বিহ্বল বিহ্বলা বিহ্বলতা বিহরই বিহরা বিহরত বিহসি বিহসিত বিহসন বিহসলি বিহড়া বিহড়াইল বিহড়িল বিড়ঙ্গ বিড়া বিঁড়া বিড়াল বিড়ালকুকুর বিড়ালাক্ষী বিড়ালি বিড়ালী বিড়ালচোখ বিড়ালচোখী বিড়ালছানা বিড়ালতপস্বী বিড়ালসুলভ বিড়ি বিঁড়ি বিড়িরবিড়ির বিড়ী বিড়ে বিঁড়ে বিড়বিড় বিড়ম্বিত বিড়ম্বন বিড়ম্বনা বিয়া বিয়াই বিয়াইন বিয়াকুল বিয়ান বিয়ানীবাজার বিয়ানো বিয়াবান বিয়ার বিয়ারিং বিয়াল্লিশ বিয়াশাদী বিয়ে বিয়েথা বিয়েন বিয়েপাগলা বিয়েবাড়ি বিয়েরডালা বিয়েরতত্ত্ব বিয়োগ বিয়োগাত্মক বিয়োগান্ত বিয়োগান্তক বিয়োগিনী বিয়োগী বিয়োগচিহ্ন বিয়োগধর্মী বিয়োগফল বিয়োগবিধুর বিয়োগব্যথা বিয়োগস্থল বিয়োজক বিয়োজিত বিয়োজ্য বিয়োজন বিয়োন বিয়ৎ বিয়ন্ত বচ বুঁচকি বীক্ষিত বীক্ষ্যমাণ বীক্ষণ বীক্ষণকোণ বীক্ষণীয় বীক্ষণযোগ্য বীক্ষমাণ বচা বচাবচ বীচ বীচি বীচিকলা বীচিভঙ্গ বীচিশূন্য বীচচারা বীচতা বচ্ছর বচ্ছরকার বীজ বীজক বীজকোশ বীজকোষ বীজগাণিতিক বীজগণিত বীজগণিতজ্ঞ বীজগণিতবিদ বীজঘ্ন বীজাঙ্কুর বীজাণু বীজাণুমুক্ত বীজাধার বীজিত বীজিতা বীজীপুরুষ বীজযুক্ত বীজত্বক বীজতলা বীজদল বীজধান বীজন বীজপুট বীজপত্র বীজপত্রী বীজবাক্য বীজবারক বীজবারণ বীজমন্ত্র বীজরোপণ বীজহীন বীট বীটী বীটপালং বীটপালম বীণ বীণকার বীণা বীণাজাতীয় বীণাতন্ত্র বীণানিন্দিত বীণানিন্দিতা বীণাপাণি বীণাবাদক বীণাবাদন বীণাবিনিন্দিত বীণাবিনিন্দিতা বীণাবিশেষ বীণামণ্ডলী বীণামণ্ডলীয় বীত বীতংস বীতকাম বীতাগ্নি বীতিহোত্র বীতনিদ্র বীতভয় বীতরাগ বীতশোক বীতশ্রদ্ধ বীতস্কন্ধ বীতস্পৃহ বীতস্পৃহা বীথি বীথিকা বীথী বচন বীনকার বচনাতীত বচনান্ত বচনামৃত বচনীয় বচনীয়তা বচনপ্রপঞ্চ বচনবাগীশ বচনবদ্ধ বচনহীন বীপ্সা বীবর বীভৎস বীভৎসতা বীভৎসভাবে বীম বীমা বীমাপত্র বীর বীরউত্তম বীরকুঞ্জর বীরকুলর্ষভ বীরখণ্ডি বীরখণ্ডী বীরগাঁও বীরা বীরাঙ্গনা বীরাচার বীরাচারী বীরেশ বীরেশ্বর বীরোচিত বীর্য বীরযোদ্ধা বীর্যপাত বীর্যবান বীর্যবতী বীর্যবত্তা বীর্যবন্ত বীর্যবর্ধক বীর্যশালিনী বীর্যশালী বীর্যহীন বীরত্ব বীরত্বকাব্য বীরত্বপূর্ণ বীরত্বপূর্ণা বীরত্বব্যঞ্জক বীরত্বহীন বীরুধ বীরধর্ম বীরনগর বীরনারী বীরপুঙ্গব বীরপূজা বীরপ্রতীক বীরপুরুষ বীরপ্রসূ বীরপ্রসবিনী বীরবালা বীরবিক্রম বীরবৌলী বীরবর বীরবল বীরভোগ্যা বীরভদ্র বীরভূম বীররস বীরশিশু বীরশূন্য বীরশ্রেষ্ঠ বীরসিংহ বীরহীন বীরহীনা বচসা বচসারত বীড়া বে বেংতড়কা বেংতড়কি বেঅ বেআইন বেআইনি বেআইনিভাবে বেআক্কেল বেআকুল বেআদব বেআদবি বেআন্দাজ বেআন্দাজি বেআবরু বেআরাম বেআলি বেইজিং বেইজ্জত বেইজ্জতি বেইমান বেইমানি বেইমানী বেঈমান বেঈমানি বেউফা বেউল বেউড় বেউড়বাঁশ বেএক্তিয়ার বেওজর বেওফা বেওয়া বেওয়ারিশ বেওয়ারিশি বেক বেঁকা বেঁকানো বেকানুন বেকার বেকারি বেকারত্ব বেকারভাতা বেকায়দা বেকায়দায় বেঁকিয়ে বেঁকে বেঁকেছ বেঁকেছি বেঁকেছিল বেঁকেছিলাম বেঁকেছিলি বেঁকেছিলে বেঁকেছিলেন বেঁকেছিলেম বেঁকেছিলুম বেঁকেছিস বেঁকেছে বেঁকেছেন বেঁকো বেকত বেকুব বেকুবি বেকবুল বেকল বেকসুর বেখাপ বেখাপ্পা বেখেয়াল বেখেয়ালি বেখরচ বেখরচা বেগ বেগানা বেগার বেগারখাটা বেগারি বেগারঠেলা বেগার্ত বেগিত বেগী বেগোছ বেগোড় বেগযুক্ত বেগতিক বেগধারণ বেগুন বেগুনগাছ বেগনি বেগুনি বেগুনী বেগুনবাড়ি বেগুনভাজা বেগুনভাজি বেগপূর্ণ বেগবান বেগবতী বেগম বেগমগঞ্জ বেগর বেগসম্পন্ন বেগহীন বেগড়ানো বেঘোর বেঘুম বেঙ বেঙ্গ বেঙ্গাচি বেঙ্গমা বেঙ্গমী বেঙ্গল বেঙাচি বেঙাছি বেঙতড়কা বেঙতড়কি বেচ বেচঈন বেচুক বেচা বেচাকেনা বেচান বেচানো বেচারা বেচারি বেচাল বেচি বেচিত বেচিতাম বেচিতিস বেচিতে বেচিতেছ বেচিতেছি বেচিতেছিল বেচিতেছিলাম বেচিতেছিলি বেচিতেছিলে বেচিতেছিলেন বেচিতেছিস বেচিতেছে বেচিতেছেন বেচিতেন বেচিব বেচিবার বেচিবি বেচিবে বেচিবেন বেচিল বেচিলাম বেচিলি বেচিলে বেচিলেন বেচিস বেচিয়া বেচিয়াছ বেচিয়াছি বেচিয়াছিল বেচিয়াছিলাম বেচিয়াছিলি বেচিয়াছিলে বেচিয়াছিলেন বেচিয়াছিস বেচিয়াছে বেচিয়াছেন বেচিয়ো বেচে বেঁচে বেচেছ বেঁচেছ বেচেছি বেঁচেছি বেচেছিল বেঁচেছিল বেচেছিলাম বেঁচেছিলাম বেচেছিলি বেঁচেছিলি বেচেছিলে বেঁচেছিলে বেচেছিলেন বেঁচেছিলেন বেচেছিলেম বেঁচেছিলেম বেচেছিলুম বেঁচেছিলুম বেচেছিস বেঁচেছিস বেচেছে বেঁচেছে বেচেছেন বেঁচেছেন বেচেন বেঁচেবর্তে বেচো বেঁচো বেচছ বেচছি বেচছিল বেচছিলাম বেচছিলি বেচছিলে বেচছিলেন বেচছিলেম বেচছিলুম বেচছিস বেচছে বেচছেন বেচত বেচতাম বেচতিস বেচতে বেচতেন বেচতেম বেচতুম বেচুন বেচব বেচবার বেচবি বেচবে বেচবেন বেচবো বেচল বেচলাম বেচলি বেচলে বেচলেন বেচলেম বেচলুম বেছে বেঁছে বেছেছ বেছেছি বেছেছিল বেছেছিলাম বেছেছিলি বেছেছিলে বেছেছিলেন বেছেছিলেম বেছেছিলুম বেছেছিস বেছেছে বেছেছেন বেছো বেছন বেজ বেজা বেজাত বেজান বেজার বেজায় বেজায়গা বেজি বেঁজি বেজী বেঁজী বেজে বেজেছ বেজেছি বেজেছিল বেজেছিলাম বেজেছিলি বেজেছিলে বেজেছিলেন বেজেছিলেম বেজেছিলুম বেজেছিস বেজেছে বেজেছেন বেজো বেজোড় বেজুত বেজন্মা বেজবল বেঞ্চ বেঞ্চার বেঞ্চি বেট বেটা বেটাইম বেটাচ্ছেলে বেটাছেলে বেটার বেটি বেটিং বেটিল বেটিয়া বেটী বেঁটে বেঁটেখাটো বেঁটেখেঁটে বেটেছ বেটেছি বেটেছিল বেটেছিলাম বেটেছিলি বেটেছিলে বেটেছিলেন বেটেছিলেম বেটেছিলুম বেটেছিস বেটেছে বেটেছেন বেঁটেমতো বেটন বেটম বেঠিক বেডকভার বেডোল বেডৌল বেডরুম বেঢং বেঢক বেঢঙ্গ বেঢপ বেণু বেণুক বেণুকা বেণা বেণি বেণিবন্ধন বেণিরচনা বেণিসংহার বেণিয়া বেণী বেণীগাঁথন বেণীসংহার বেণে বেণ্ডুয়া বেণুধ্বনি বেণুবন বেণুরব বেত বেতগাছ বেতা বেতাগ বেতান বেতানো বেতাব বেতার বেতারকেন্দ্র বেতারিখ বেতারযোগে বেতারযন্ত্র বেতারবাণী বেতারবার্তা বেতারসংকেত বেতাল বেতালা বেতিয়ে বেতো বেত্তা বেতদবির বেতন বেতনগ্রাহী বেতনগ্রহণ বেতনবাবদ বেতনবৃদ্ধি বেতনভুক বেতনভোগী বেতবন বেতবুনিয়া বেতমারা বেতমিজ বেতমীয বেতর বেত্র বেত্রকুঞ্জ বেত্রাঘাত বেত্রাঘাতরূপ বেত্রাদি বেত্রাহত বেতরিবত বেত্রদণ্ড বেত্রদণ্ডধারিণী বেত্রদণ্ডধারী বেত্রধারী বেত্রধর বেত্রপাণি বেত্রবতী বেতল বেতস বেতসবৃত্তি বেতসলতা বেথো বেথুন বেথুয়া বেদ বেদআত বেদুইন বেদুঈন বেদখল বেদখলি বেদগান বেদাগ বেদাঙ্গ বেদাত বেদাতি বেদাধ্যয়ন বেদানা বেদান্ত বেদান্তী বেদান্তদর্শন বেদান্তবাদ বেদান্তবাদী বেদান্তসূত্র বেদান্তসম্মত বেদানুমত বেদানুশীলন বেদাভ্যাস বেদাশ্রিত বেদাশ্রয় বেদাঁড়া বেদি বেদিকা বেদিত বেদিতব্য বেদিতল বেদিমূল বেদিয়া বেদিয়ানী বেদী বেদচতুষ্টয় বেদীন বেদচর্চা বেদচর্চাকারী বেদীয় বেদে বেদেনী বেদেরেগ বেদোক্ত বেদজ্ঞ বেদ্য বেদন বেদনা বেদনাগ্রস্ত বেদনাজনিত বেদনাযুক্ত বেদনাদায়ক বেদনানাশক বেদনাবোধ বেদনাব্যঞ্জক বেদনাময় বেদনার্ত বেদনাহীন বেদনাহত বেদনীয় বেদনহীন বেদপাঠ বেদপ্রবচন বেদবাক্য বেদবাক্যতুল্য বেদবিদ বেদবিরুদ্ধ বেদবিহিত বেদব্যাস বেদম বেদমাতা বেদমদার বেদমন্ত্র বেদর বেদরকারি বেদরদি বেদল বেদলীয় বেদশিক্ষক বেদস্তুর বেদুয়িন বেধ বেঁধ বেধক বেধা বেঁধা বেঁধাই বেঁধাও বেঁধাক বেঁধাচ্ছ বেঁধাচ্ছি বেঁধাচ্ছিল বেঁধাচ্ছিলাম বেঁধাচ্ছিলি বেঁধাচ্ছিলে বেঁধাচ্ছিলেন বেঁধাচ্ছিলেম বেঁধাচ্ছিলুম বেঁধাচ্ছিস বেঁধাচ্ছে বেঁধাচ্ছেন বেঁধাত বেঁধাতাম বেঁধাতিস বেঁধাতে বেঁধাতেন বেঁধাতেম বেঁধাতুম বেঁধান বেঁধানো বেঁধাব বেঁধাবার বেঁধাবি বেঁধাবে বেঁধাবেন বেঁধাবো বেঁধাল বেঁধালাম বেঁধালি বেঁধালে বেঁধালেন বেঁধালেম বেঁধালুম বেঁধাস বেধিত বেধে বেঁধে বেধেছ বেঁধেছ বেধেছি বেঁধেছি বেধেছিল বেঁধেছিল বেধেছিলাম বেঁধেছিলাম বেধেছিলি বেঁধেছিলি বেধেছিলে বেঁধেছিলে বেধেছিলেন বেঁধেছিলেন বেধেছিলেম বেঁধেছিলেম বেধেছিলুম বেঁধেছিলুম বেধেছিস বেঁধেছিস বেধেছে বেঁধেছে বেধেছেন বেঁধেছেন বেঁধেন বেধো বেঁধো বেধ্য বেধন বেঁধন বেধনকারী বেধনাস্ত্র বেধনিকা বেধনী বেধনীয় বেধনযোগ্য বেধনযন্ত্র বেধনসাধ্য বেঁধবার বেধহীন বেধড়ক বেনা বেনাপোল বেনাম বেনামা বেনামাজি বেনামি বেনামী বেনামদার বেনারস বেনারসি বেনিশ বেনিয়া বেনিয়ান বেনিয়ে বেনিয়ম বেনে বেনেনি বেনো বেনোজল বেপাত্তা বেপার বেপারি বেপারী বেপালট বেপাড়া বেপছন্দ বেপথু বেপথুমান বেপন বেপমান বেপমানা বেপরোয়া বেপরদা বেপর্দা বেফাঁস বেফায়দা বেফজুল বেবাক বেবাহা বেবি বেবিট্যাক্সি বেবে বেবুন বেবন্দোবস্ত বেবহা বেভার বেভুল বেমওকা বেমক্কা বেমানান বেমানানরকম বেমার বেমারি বেমালুম বেমিল বেমেরামত বেমতলব বেমনাসিব বেমরশুমি বের বেরং বেরই বেরুই বেরক বেরঙ বেরঙ্গ বেরা বেরাদার বেরান বেরানো বেরাম বেরাল বেরাসিয়া বেরি বেরিবেরি বেরিল বেরিলিয়াম বেরিয়াম বেরিয়ে বেরিয়েছ বেরিয়েছি বেরিয়েছিল বেরিয়েছিলাম বেরিয়েছিলি বেরিয়েছিলে বেরিয়েছিলেন বেরিয়েছিলেম বেরিয়েছিলুম বেরিয়েছিস বেরিয়েছে বেরিয়েছেন বেরিয়েথাকা বেরিয়ো বেরচ্ছ বেরুচ্ছ বেরচ্ছি বেরুচ্ছি বেরচ্ছিল বেরুচ্ছিল বেরচ্ছিলাম বেরুচ্ছিলাম বেরচ্ছিলি বেরুচ্ছিলি বেরচ্ছিলে বেরুচ্ছিলে বেরচ্ছিলেন বেরুচ্ছিলেন বেরচ্ছিলেম বেরুচ্ছিলেম বেরচ্ছিলুম বেরুচ্ছিলুম বেরচ্ছিস বেরুচ্ছিস বেরচ্ছে বেরুচ্ছে বেরচ্ছেন বেরুচ্ছেন বেরেষেরকাঠ বেরো বেরোখ বেরোচ্ছে বেরোতে বেরোনা বেরোনো বেরোবার বেরোবে বেরোল বেরোয় বেরুণ বেরত বেরুত বেরতাম বেরুতাম বেরতিস বেরুতিস বেরতে বেরুতে বেরতেন বেরুতেন বেরতেম বেরুতেম বেরতুম বেরুতুম বেরন বেরুন বেরুনিয়া বেরনো বেরুনো বেরব বেরুব বেরবার বেরবি বেরুবি বেরবে বেরুবে বেরবেন বেরুবেন বেরুবেনা বেরবো বেরুবো বেরল বেরুল বেরলাম বেরুলাম বেরলি বেরুলি বেরলে বেরুলে বেরলেন বেরুলেন বেরলেম বেরুলেম বেরুলো বেরলুম বেরুলুম বেরস বেরসিক বেরয় বেল বেলক বেলুক বেলকাঁটা বেলকাঠ বেলকুচি বেলগ বেলগাউম বেলগাছ বেলগাছিয়া বেলা বেলাওল বেলাবেলি বেলাবো বেলাভূমি বেলারুশ বেলারুশীয় বেলাল বেলি বেলিজ বেলিত বেলিতাম বেলিতিস বেলিতে বেলিতেছ বেলিতেছি বেলিতেছিল বেলিতেছিলাম বেলিতেছিলি বেলিতেছিলে বেলিতেছিলেন বেলিতেছিস বেলিতেছে বেলিতেছেন বেলিতেন বেলিফ বেলিব বেলিবার বেলিবি বেলিবে বেলিবেন বেলিল বেলিলাম বেলিলি বেলিলে বেলিলেন বেলিস বেলিয়া বেলিয়াছ বেলিয়াছি বেলিয়াছিল বেলিয়াছিলাম বেলিয়াছিলি বেলিয়াছিলে বেলিয়াছিলেন বেলিয়াছিস বেলিয়াছে বেলিয়াছেন বেলিয়ো বেলচা বেলুচিস্তান বেলে বেলেছ বেলেছি বেলেছিল বেলেছিলাম বেলেছিলি বেলেছিলে বেলেছিলেন বেলেছিলেম বেলেছিলুম বেলেছিস বেলেছে বেলেছেন বেলেন বেলেপাথর বেলেমাছ বেলেমাটি বেলেল্লা বেলেল্লাগিরি বেলেল্লাপনা বেলেস্তারা বেলেহাজ বেলো বেলোর বেলোয়ারি বেলোয়ারী বেলছ বেলছি বেলছিল বেলছিলাম বেলছিলি বেলছিলে বেলছিলেন বেলছিলেম বেলছিলুম বেলছিস বেলছে বেলছেন বেলজিয়াম বেলজীয় বেল্ট বেলত বেলতাম বেলতিস বেলতে বেলতেন বেলতেম বেলতুম বেলতলা বেলদার বেলদারনি বেলন বেলুন বেলনা বেলনাকার বেলনচাকি বেলপাতা বেলফল বেলফুল বেলব বেলবার বেলবি বেলবে বেলবেন বেলবো বেলবটম বেলমুক্তা বেলমোক্তা বেলল বেললাম বেললি বেল্লিক বেল্লিত বেললে বেললেন বেললেম বেললুম বেলশিল বেলশুঁঠ বেলসাম বেশ বেশক বেশকিছু বেশকম বেশকরা বেশি বেশিক্ষণ বেশিদিন বেশিদূর বেশিনী বেশিপরিমাণ বেশিবার বেশিভাগ বেশিরভাগ বেশী বেশীক্ষণ বেশীদিন বেশীদেখা বেশীমাত্রা বেশীরভাগ বেশ্যা বেশ্যাগিরি বেশ্যাগমন বেশ্যাবাড়ি বেশ্যাবৃত্তি বেশ্যালয় বেশধারী বেশধারণ বেশপরিগ্রহ বেশবার বেশবাস বেশবিন্যাস বেশবেশী বেশভূষা বেশম বেশ্ম বেশুমার বেশর বেশরা বেশরম বেষ্ট বেষ্টক বেষ্টিত বেষ্টন বেষ্টনকারী বেষ্টনী বেষ্টনরেখা বেষ্টবংশ বেস বেসাইত বেসাত বেসাতি বেসাতী বেসামাল বেসামরিক বেসার বেসারি বেসালি বেসিক বেসিক্যালি বেসিন বেসে বেসেছ বেসেছি বেসেছিল বেসেছিলাম বেসেছিলি বেসেছিলে বেসেছিলেন বেসেছিলেম বেসেছিলুম বেসেছিস বেসেছে বেসেছেন বেসো বেস্ট বেস্টসেলার বেসন বেসবল বেসম বেসর বেসুর বেসরকারি বেসরকারিকরণ বেসরকারিভাবে বেসুরা বেসুরে বেসুরো বেহাই বেহাইন বেহাগ বেহাগের বেহাগরাগ বেহাত বেহান বেহানবেলা বেহার বেহারা বেহারিব বেহাল বেহালা বেহালাবাদক বেহায়া বেহায়াপনা বেহিসাব বেহিসাবি বেহেড বেহেরা বেহেশত বেহেস্ত বেহোশ বেহদ বেহুদা বেহদ্দ বেহুলা বেহুশ বেহুঁশ বেহুড়া বেড় বেড়া বেড়াই বেড়াইও বেড়াইত বেড়াইতাম বেড়াইতিস বেড়াইতে বেড়াইতেছ বেড়াইতেছি বেড়াইতেছিল বেড়াইতেছিলাম বেড়াইতেছিলি বেড়াইতেছিলে বেড়াইতেছিলেন বেড়াইতেছিস বেড়াইতেছে বেড়াইতেছেন বেড়াইতেন বেড়াইব বেড়াইবার বেড়াইবি বেড়াইবে বেড়াইবেন বেড়াইল বেড়াইলাম বেড়াইলি বেড়াইলে বেড়াইলেন বেড়াইয়া বেড়াইয়াছ বেড়াইয়াছি বেড়াইয়াছিল বেড়াইয়াছিলাম বেড়াইয়াছিলি বেড়াইয়াছিলে বেড়াইয়াছিলেন বেড়াইয়াছিস বেড়াইয়াছে বেড়াইয়াছেন বেড়াইয়ো বেড়াএ বেড়াক বেড়াচেছ বেড়াচ্ছ বেড়াচ্ছি বেড়াচ্ছিল বেড়াচ্ছিলাম বেড়াচ্ছিলি বেড়াচ্ছিলে বেড়াচ্ছিলেন বেড়াচ্ছিলেম বেড়াচ্ছিলুম বেড়াচ্ছিস বেড়াচ্ছে বেড়াচ্ছেন বেড়াজাল বেড়াত বেড়াতাম বেড়াতিস বেড়াতে বেড়াতেন বেড়াতেম বেড়াতো বেড়াতুম বেড়ান বেড়ানি বেড়ানিয়া বেড়ানো বেড়ান্ত বেড়াপাক বেড়াব বেড়াবার বেড়াবি বেড়াবে বেড়াবেন বেড়াবো বেড়াল বেড়ালাম বেড়ালি বেড়ালে বেড়ালেন বেড়ালেম বেড়ালুম বেড়াস বেড়ায় বেড়ায়িএ বেড়ায়িবোঁ বেড়ি বেড়িবাঁধ বেড়িয়ে বেড়িয়েছ বেড়িয়েছি বেড়িয়েছিল বেড়িয়েছিলাম বেড়িয়েছিলি বেড়িয়েছিলে বেড়িয়েছিলেন বেড়িয়েছিলেম বেড়িয়েছিলুম বেড়িয়েছিস বেড়িয়েছে বেড়িয়েছেন বেড়িয়ো বেড়ী বেড়ীবাঁধ বেড়ে বেঁড়ে বেড়েওঠা বেড়েছ বেড়েছি বেড়েছিল বেড়েছিলাম বেড়েছিলি বেড়েছিলে বেড়েছিলেন বেড়েছিলেম বেড়েছিলুম বেড়েছিস বেড়েছে বেড়েছেন বেড়েন বেঁড়েবাঁদর বেড়যুক্ত বেঢ়া বেঢ়ল বেঢ়লি বেয়াই বেয়াইন বেয়াকুফ বেয়াকুব বেয়াকুল বেয়াদব বেয়াদবি বেয়াধি বেয়ান বেয়ান্দাজ বেয়ার বেয়ারা বেয়ারাম বেয়ারিং বেয়ারিংপোস্ট বেয়াল্লিশ বেয়াড়া বেয়াড়াপনা বেয়ে বেঁয়ে বেয়েছ বেয়েছি বেয়েছিল বেয়েছিলাম বেয়েছিলি বেয়েছিলে বেয়েছিলেন বেয়েছিলেম বেয়েছিলুম বেয়েছিস বেয়েছে বেয়েছেন বেয়ের বেয়ো বেয়োনেট বেয়ধি বেয়নেট বৈ বৈকাল বৈকালি বৈকালিক বৈকালিকী বৈকালী বৈকালীন বৈকি বৈকুণ্ঠ বৈকুণ্ঠধাম বৈকুণ্ঠনাথ বৈকুণ্ঠপতি বৈকুণ্ঠপুরী বৈকুণ্ঠলোক বৈকুন্ঠপুর বৈকর্তন বৈকল্য বৈকল্পিক বৈক্লব্য বৈগুণ্য বৈচক্ষণ্য বৈঁচি বৈচিত্ত্য বৈচিত্র্য বৈচিত্র্যপূর্ণ বৈচিত্র্যময় বৈচিত্র্যহীন বৈজাত্য বৈজাত্যবোধ বৈজ্ঞানিক বৈজ্ঞানিকী বৈজ্ঞানিকযুক্তি বৈজ্ঞানিকতথ্য বৈজ্ঞানিকভাব বৈজ্ঞানিকমতে বৈজয়িক বৈজয়ন্ত বৈজয়ন্তী বৈঠক বৈঠকখানা বৈঠকি বৈঠকিরি বৈঠা বৈঠায়ব বৈঠায়ল বৈঁঠি বৈঠিয়া বৈঠত বৈঠনু বৈঠনি বৈঠবি বৈণ বৈণিক বৈতংসিক বৈতান বৈতানিক বৈতাল বৈতালিক বৈতালিকী বৈতালী বৈঁতিক বৈতনিক বৈতরণী বৈতস বৈদগ্ধ বৈদগধি বৈদগধী বৈদগ্ধ্য বৈদান্তিক বৈদিক বৈদেশিক বৈদেহ বৈদেহিক বৈদেহী বৈদ্য বৈদ্যক বৈদ্যজাতি বৈদ্যুত বৈদ্যুতিক বৈদ্যুতিকভাবে বৈদ্যুতিকস্পর্শ বৈদ্যনাথ বৈদ্যনাথতলা বৈদ্যনাথধাম বৈদ্যবংশ বৈদ্যবর্ণ বৈদ্যশালা বৈদ্যশাস্ত্র বৈদ্যসংকট বৈদূর্য বৈদূর্যমণি বৈদর্ভ বৈদর্ভী বৈধ বৈধকরণ বৈধেয় বৈধতা বৈধৃতি বৈধপত্র বৈধব্য বৈধব্যদশা বৈধব্যব্রত বৈধভাবে বৈধুর্য বৈধর্ম্য বৈনাশিক বৈনতেয় বৈপিত্র বৈপিত্রী বৈপিত্রেয় বৈপিত্রেয়ী বৈপরীত্য বৈপরীত্যজ্ঞাপক বৈপরীত্যযুক্ত বৈপ্লবিক বৈফল্য বৈবাহিক বৈবাহিকা বৈবাহিকী বৈবর্ণ বৈবর্ণ্য বৈবস্বত বৈভাষিক বৈভব বৈভবশালী বৈমুখ বৈমুখ্য বৈমাত্র বৈমাত্রেয় বৈমাত্রেয়ী বৈমানিক বৈমনস্য বৈর বৈরাগ বৈরাগী বৈরাগ্য বৈরাগ্যযুক্ত বৈরাগ্যভাব বৈরাগ্যসাধন বৈরাট বৈরাতী বৈরি বৈরিতা বৈরিতাবিহীন বৈরী বৈরীগৃহ বৈরীদমন বৈরীভাবাপন্ন বৈরুত বৈরনির্যাতন বৈরূপ্য বৈরসাধন বৈল বৈলক্ষণ্য বৈলগাড়ী বৈশাখ বৈশাখী বৈশাখমাস বৈশালী বৈশিষ্ট্য বৈশিষ্ট্যাবলী বৈশিষ্ট্যযুক্ত বৈশিষ্ট্যপ্রকাশক বৈশিষ্ট্যপূর্ণ বৈশিষ্ট্যবিহীন বৈশিষ্ট্যবোধক বৈশিষ্ট্যময় বৈশিষ্ট্যস্বরূপ বৈশিষ্ট্যসম্পন্ন বৈশিষ্ট্যসম্ভার বৈশিষ্ট্যহীন বৈশেষিক বৈশ্য বৈশ্যা বৈশ্যজাতি বৈশ্যজাতীয়া বৈশ্যবৃত্তি বৈশ্যবুদ্ধি বৈশ্যহিন্দু বৈশদ্য বৈশ্বানর বৈশ্বিক বৈশম্পায়ন বৈষ্ণব বৈষ্ণবগ্রন্থ বৈষ্ণবী বৈষ্ণবজাতি বৈষ্ণবতীর্থ বৈষ্ণবদল বৈষ্ণবধর্ম বৈষ্ণবমত বৈষম্য বৈষম্যবিহীন বৈষম্যভেদ্য বৈষম্যহীন বৈষয়িক বৈসা বৈসাদৃশ্য বৈসায় বৈসন্ত বৈসল বৈহাসিক বৈড়াল বৈড়ালব্রত বৈয়াকরণ বৈয়াঘ্র বৈয়াম বৈয়াসক বৈয়াসকি বৈয়াসকী বৈয়াসিক বৈয়াসিকী বৈয়ম বৈয়র্থ্য বো বোঁ বোকা বোকাকান্ত বোকাচণ্ডী বোকাটে বোকাপাঁঠা বোকাবোকা বোকামি বোকামো বোকারাম বোকাসোকা বোকড়া বোগনা বোগনো বোগড়া বোঙ্গা বোঁচ বোচকা বোঁচকা বোঁচকাবুচকি বোচা বোঁচা বোজ বোজা বোজাক বোজাচ্ছ বোজাচ্ছি বোজাচ্ছিল বোজাচ্ছিলাম বোজাচ্ছিলি বোজাচ্ছিলে বোজাচ্ছিলেন বোজাচ্ছিলেম বোজাচ্ছিলুম বোজাচ্ছিস বোজাচ্ছে বোজাচ্ছেন বোজাত বোজাতাম বোজাতিস বোজাতে বোজাতেন বোজাতেম বোজাতুম বোজান বোজানো বোজাব বোজাবার বোজাবি বোজাবে বোজাবেন বোজাবো বোজাল বোজালাম বোজালি বোজালে বোজালেন বোজালেম বোজালুম বোজাস বোজে বোজেন বোজবার বোজম বোঝ বোঝা বোঝাক বোঝাচ্ছ বোঝাচ্ছি বোঝাচ্ছিল বোঝাচ্ছিলাম বোঝাচ্ছিলি বোঝাচ্ছিলে বোঝাচ্ছিলেন বোঝাচ্ছিলেম বোঝাচ্ছিলুম বোঝাচ্ছিস বোঝাচ্ছে বোঝাচ্ছেন বোঝাত বোঝাতাম বোঝাতিস বোঝাতে বোঝাতেন বোঝাতেম বোঝাতো বোঝাতুম বোঝান বোঝানে বোঝানো বোঝাপড়া বোঝাব বোঝাবার বোঝাবাহক বোঝাবি বোঝাবে বোঝাবেন বোঝাবো বোঝাবোঝি বোঝাবুঝি বোঝাল বোঝালাম বোঝালি বোঝালে বোঝালেন বোঝালেম বোঝালুম বোঝাস বোঝে বোঝেন বোঝেনইতো বোঝেনি বোঝেননি বোঝো বোঝতে বোঝনো বোঝবার বোট বোঁট বোটকা বোঁটা বোঁটাযুক্ত বোটানি বোটানিক্যাল বোটম বোঠান বোঠে বোত বোতখানা বোতাম বোতামঘর বোতামযুক্ত বোতামহীন বোতপরস্ত বোতপরস্তি বোতল বোতসওয়ানা বোতসোয়ানা বোদা বোদাল বোঁদে বোদ্ধৃ বোদ্ধা বোদ্ধব্য বোধ বোধক বোধকরি বোধগত বোধগম্য বোধগম্যতা বোধাতীত বোধি বোধিকা বোধিত বোধিতব্য বোধিদ্রুম বোধিপ্রিয় বোধিবৃক্ষ বোধিবাদ বোধিবিজ্ঞান বোধিসত্ত্ব বোধোদয় বোধ্য বোধযুক্ত বোধদান বোধদানকারিণী বোধদানকারী বোধন বোধপ্রাপ্ত বোধবিজ্ঞান বোধবুদ্ধি বোধবুদ্ধিযুক্ত বোধবুদ্ধিহীন বোধরহিত বোধশক্তি বোধশক্তিসম্পন্ন বোধশক্তিহীন বোধশোধ বোধসম্পাদন বোধসম্পন্ন বোধহীন বোধহীনতা বোধহয় বোধয়িতা বোধয়িত্রী বোন বোনা বোনাই বোনান বোনানো বোনাস বোনে বোনেন বোনঝি বোনদ্বয় বোনপো বোনবার বোবা বোবাকান্না বোবাকালা বোঁবোঁ বোম বোমা বোমানিক্ষেপক বোমাবাজ বোমাবাজি বোমাবর্ষণ বোমারু বোম্বাই বোমবাজি বোম্বাটে বোম্বিয়েরি বোম্বে বোম্বেটে বোর বোরকা বোরখা বোরা বোরাক বোরিং বোরো বোরোধান বোর্ড বোর্ডিং বোর্দো বোরন বোররাক বোরহান বোরহানি বোল বোলই বোলইআঁ বোলএ বোলওঁ বোলা বোলাই বোলাইলেঁ বোলাইলোঁ বোলাও বোলাক বোলাচ্ছ বোলাচ্ছি বোলাচ্ছিল বোলাচ্ছিলাম বোলাচ্ছিলি বোলাচ্ছিলে বোলাচ্ছিলেন বোলাচ্ছিলেম বোলাচ্ছিলুম বোলাচ্ছিস বোলাচ্ছে বোলাচ্ছেন বোলাত বোলাতাম বোলাতিস বোলাতে বোলাতেন বোলাতেম বোলাতুম বোলান বোলানি বোলানো বোলাব বোলাবার বোলাবি বোলাবে বোলাবেন বোলাবো বোলাবুলি বোলার বোলাল বোলালাম বোলালি বোলালে বোলালেন বোলালেম বোলালুম বোলাস বোলিং বোলচাল বোলো বোলটু বোল্টু বোলযুক্ত বোল্ড বোলত বোলতা বোলতে বোলতহঁ বোলতহুঁ বোলতহিঁ বোলন বোলন্ত বোলপুর বোলব বোলবোলা বোলসি বোলহ বোলহিঁ বোস্টন বোস্তান বোসরা বোহেমিয়ান বোহেমীয় বোহরিয়াম বোড়া বোড়ে বোড়েটেপা বোড়েরচাল বোঢ়া বোয়া বোয়াল বোয়ালমাছ বোয়ালমারী বৌ বৌগনা বৌছি বৌঠান বৌদি বৌদিদি বৌদ্ধ বৌদ্ধগান বৌদ্ধযুগ বৌদ্ধতন্ত্র বৌদ্ধদর্শন বৌদ্ধধর্ম বৌদ্ধধর্মগ্রন্থ বৌদ্ধধর্মাবলম্বী বৌদ্ধধর্মপ্রচারক বৌদ্ধবিহার বৌদ্ধভিক্ষু বৌদ্ধমত বৌদ্ধমন্দির বৌদ্ধমূর্তি বৌদ্ধশাস্ত্র বৌদ্ধশাস্ত্রকার বৌভাত বৌমা বৌমানুষ বছর বছরকার বছরিয়া বছরবিজয়ী বছরবছর বছরব্যাপী বছরভর বৌলি বৌহারী বৌয়ারী বৌয়াড়ী বুজ বুজক বুজুক বুজকুড়ি বজা বুজা বজাআনা বুজাই বুজাইও বুজাইত বুজাইতাম বুজাইতিস বুজাইতে বুজাইতেছ বুজাইতেছি বুজাইতেছিল বুজাইতেছিলাম বুজাইতেছিলি বুজাইতেছিলে বুজাইতেছিলেন বুজাইতেছিস বুজাইতেছে বুজাইতেছেন বুজাইতেন বুজাইব বুজাইবার বুজাইবি বুজাইবে বুজাইবেন বুজাইল বুজাইলাম বুজাইলি বুজাইলে বুজাইলেন বুজাইয়া বুজাইয়াছ বুজাইয়াছি বুজাইয়াছিল বুজাইয়াছিলাম বুজাইয়াছিলি বুজাইয়াছিলে বুজাইয়াছিলেন বুজাইয়াছিস বুজাইয়াছে বুজাইয়াছেন বুজাইয়ো বুজাক বজাজ বুজান বুজানো বুজাস বজায় বুজি বুজিত বুজিতাম বুজিতিস বুজিতে বুজিতেছ বুজিতেছি বুজিতেছিল বুজিতেছিলাম বুজিতেছিলি বুজিতেছিলে বুজিতেছিলেন বুজিতেছিস বুজিতেছে বুজিতেছেন বুজিতেন বুজিব বুজিবার বুজিবি বুজিবে বুজিবেন বুজিল বুজিলাম বুজিলি বুজিলে বুজিলেন বুজিস বুজিয়া বুজিয়াছ বুজিয়াছি বুজিয়াছিল বুজিয়াছিলাম বুজিয়াছিলি বুজিয়াছিলে বুজিয়াছিলেন বুজিয়াছিস বুজিয়াছে বুজিয়াছেন বুজিয়ে বুজিয়েছ বুজিয়েছি বুজিয়েছিল বুজিয়েছিলাম বুজিয়েছিলি বুজিয়েছিলে বুজিয়েছিলেন বুজিয়েছিলেম বুজিয়েছিলুম বুজিয়েছিস বুজিয়েছে বুজিয়েছেন বুজিয়ো বজী বুজচ্ছ বুজচ্ছি বুজচ্ছিল বুজচ্ছিলাম বুজচ্ছিলি বুজচ্ছিলে বুজচ্ছিলেন বুজচ্ছিলেম বুজচ্ছিলুম বুজচ্ছিস বুজচ্ছে বুজচ্ছেন বুজে বুজেছ বুজেছি বুজেছিল বুজেছিলাম বুজেছিলি বুজেছিলে বুজেছিলেন বুজেছিলেম বুজেছিলুম বুজেছিস বুজেছে বুজেছেন বুজেন বুজো বুজছ বুজছি বুজছিল বুজছিলাম বুজছিলি বুজছিলে বুজছিলেন বুজছিলেম বুজছিলুম বুজছিস বুজছে বুজছেন বজ্জ বজ্জাত বজ্জাৎ বজ্জাতি বজ্জর বুজত বুজতাম বুজতিস বুজতে বুজতেন বুজতেম বুজতুম বুজদিল বুজন বুজুন বজনিশ বজনিস বুজনো বুজব বুজবার বুজবি বুজবে বুজবেন বুজবো বজবজ বজর বজ্র বজ্রআঁটুনি বুজরুক বুজরুকি বুজরুকী বজ্রকীট বজ্রকেতু বজ্রকঠিন বজ্রকঠোর বজ্রকন্ঠ বজ্রকুল বুজুর্গ বুজরুগি বুজুর্গি বজ্রগুণন বজ্রগম্ভীর বজ্রগর্ভ বজরা বজ্রাগ্নি বজ্রাঘাত বজ্রাদপি বজ্রাস্ত্র বজ্রাসন বজ্রাহত বজ্রী বজ্রচিহ্ন বজ্রযান বজ্রধ্বনি বজ্রধর বজ্রনাদ বজ্রনির্ঘোষ বজ্রপাণি বজ্রপাত বজ্রবাঁটুল বজ্রমুকুট বজ্রমুঠি বজ্রমণি বজ্রমুষ্টি বজ্রলেপ বজ্রলেপময় বজ্রশায়ক বজ্রশলাকা বুজল বুজলাম বুজলি বুজলে বুজলেন বুজলেম বুজলুম বুজস বুজয় বুঝ বুঝক বুঝুক বুঝা বুঝাই বুঝাইও বুঝাইত বুঝাইতাম বুঝাইতিস বুঝাইতে বুঝাইতেছ বুঝাইতেছি বুঝাইতেছিল বুঝাইতেছিলাম বুঝাইতেছিলি বুঝাইতেছিলে বুঝাইতেছিলেন বুঝাইতেছিস বুঝাইতেছে বুঝাইতেছেন বুঝাইতেন বুঝাইব বুঝাইবার বুঝাইবি বুঝাইবে বুঝাইবেন বুঝাইল বুঝাইলাম বুঝাইলি বুঝাইলে বুঝাইলেন বুঝাইয়া বুঝাইয়াছ বুঝাইয়াছি বুঝাইয়াছিল বুঝাইয়াছিলাম বুঝাইয়াছিলি বুঝাইয়াছিলে বুঝাইয়াছিলেন বুঝাইয়াছিস বুঝাইয়াছে বুঝাইয়াছেন বুঝাইয়ো বুঝাক বুঝাতে বুঝাতো বুঝান বুঝানো বুঝাপড়া বুঝাব বুঝাবুঝি বুঝালাম বুঝাস বুঝায় বুঝায়না বুঝি বুঝিত বুঝিতাম বুঝিতিস বুঝিতে বুঝিতেছ বুঝিতেছি বুঝিতেছিল বুঝিতেছিলাম বুঝিতেছিলি বুঝিতেছিলে বুঝিতেছিলেন বুঝিতেছিস বুঝিতেছে বুঝিতেছেন বুঝিতেন বুঝিব বুঝিবার বুঝিবি বুঝিবে বুঝিবেন বুঝিল বুঝিলাম বুঝিলি বুঝিলে বুঝিলেন বুঝিস বুঝিয়া বুঝিয়াছ বুঝিয়াছি বুঝিয়াছিল বুঝিয়াছিলাম বুঝিয়াছিলি বুঝিয়াছিলে বুঝিয়াছিলেন বুঝিয়াছিস বুঝিয়াছে বুঝিয়াছেন বুঝিয়ে বুঝিয়েছ বুঝিয়েছি বুঝিয়েছিল বুঝিয়েছিলাম বুঝিয়েছিলি বুঝিয়েছিলে বুঝিয়েছিলেন বুঝিয়েছিলেম বুঝিয়েছিলুম বুঝিয়েছিস বুঝিয়েছে বুঝিয়েছেন বুঝিয়ো বুঝচ্ছ বুঝচ্ছি বুঝচ্ছিল বুঝচ্ছিলাম বুঝচ্ছিলি বুঝচ্ছিলে বুঝচ্ছিলেন বুঝচ্ছিলেম বুঝচ্ছিলুম বুঝচ্ছিস বুঝচ্ছে বুঝচ্ছেন বুঝে বুঝেছ বুঝেছি বুঝেছিল বুঝেছিলাম বুঝেছিলি বুঝেছিলে বুঝেছিলেন বুঝেছিলেম বুঝেছিলুম বুঝেছিস বুঝেছে বুঝেছেন বুঝেন বুঝেশুঝে বুঝো বুঝছ বুঝছি বুঝছিল বুঝছিলাম বুঝছিলি বুঝছিলে বুঝছিলেন বুঝছিলেম বুঝছিলুম বুঝছিস বুঝছে বুঝছেন বুঝণু বুঝত বুঝতাম বুঝতামনা বুঝতিস বুঝতে বুঝতেছি বুঝতেন বুঝতেম বুঝতুম বুঝদার বুঝন বুঝনু বুঝুন বুঝনো বুঝব বুঝবা বুঝবার বুঝবি বুঝবে বুঝবেন বুঝবেনা বুঝবো বুঝবোনা বুঝমত বুঝল বুঝলা বুঝলাম বুঝলি বুঝলে বুঝলেন বুঝলেম বুঝলুম বুঝস বুঝসুঝ বুঝসমঝ বঞ্চক বঞ্চুক বঞ্চা বঞ্চিত বঞ্চিতা বঞ্চিমো বঞ্চিলোঁ বঞ্চে বঞ্চন বঞ্চনা বঞ্চনাকারী বঞ্চনীয় বঞ্চব বঞ্চহ বঞ্জুল বট বটু বুট ব্য বটুক বটকিরি বটকেরা ব্যক্ত ব্যক্তার্থ ব্যক্তি ব্যক্তিক ব্যক্তিকেন্দ্রিক ব্যক্তিকেন্দ্রিকতা ব্যক্তিকর্তৃক ব্যক্তিগত ব্যক্তিগতজীবন ব্যক্তিগতভাবে ব্যক্তিজীবন ব্যক্তিতা ব্যক্তিতন্ত্র ব্যক্তিত্ব ব্যক্তিত্বসম্পন্ন ব্যক্তিত্বহীন ব্যক্তিনাম ব্যক্তিনিরপেক্ষ ব্যক্তিনিষ্ঠ ব্যক্তিপূজা ব্যক্তিবাচক ব্যক্তিবাদ ব্যক্তিভিত্তিক ব্যক্তিভোগ্য ব্যক্তিমালিকানাধীন ব্যক্তিরূপ ব্যক্তিসত্তা ব্যক্তিস্বাতন্ত্র্য ব্যক্তিস্বাধীনতা ব্যক্তিসম্পর্ক ব্যক্তিসম্পর্কিত ব্যক্তিসমষ্টি ব্যক্তীকৃত ব্যক্ত্যর্থ ব্যক্ততা ব্যক্তরাশি বটখিরি বটখেরা বটগাছ ব্যগ্র ব্যগ্রতা ব্যঙ্গ ব্যঙ্গাত্মক ব্যঙ্গার্থ ব্যঙ্গার্থক ব্যঙ্গার্থে ব্যঙ্গচিত্র ব্যঙ্গোক্তি ব্যঙ্গ্য ব্যঙ্গ্যার্থ ব্যঙ্গ্যোক্তি ব্যঙ্গপ্রিয় ব্যঙ্গবাণী ব্যঙ্গবিদ্রূপ ব্যঙ্গব্যঙ্গাত্মক ব্যঙ্গরচনা ব্যঙ্গলেখক বটা ব্যাং ব্যাংক ব্যাংকক ব্যাংকার ব্যাংকিং ব্যাওয়া ব্যাক ব্যাকআপ ব্যাকগ্রাউন্ড ব্যাকটেরিয়া ব্যাক্টেরিয়াম ব্যাকটেরিয়াল ব্যাকৃতি ব্যাকব্রাশ ব্যাকরণ ব্যাকরণগত ব্যাকরণাদি ব্যাকরণচর্চা ব্যাকরণদোষ ব্যাকরণদুষ্ট ব্যাকরণনির্দিষ্ট ব্যাকরণপ্রণেতা ব্যাকরণবিদ ব্যাকরণবিরুদ্ধ ব্যাকরণবহির্ভূত ব্যাকরণসিদ্ধ ব্যাকরণসম্মত ব্যাকুল ব্যাকুলা ব্যাকুলি ব্যাকুলিত ব্যাকুলিতা ব্যাকুলতা ব্যাকুলতাশূন্য ব্যাকুলতাহীন ব্যাকুলভাবে ব্যাকস্পেস ব্যাখ্যা ব্যাখ্যাকার ব্যাখ্যাকারক ব্যাখ্যাকারী ব্যাখ্যাকৃত ব্যাখ্যাকরণ ব্যাখ্যাকর্তা ব্যাখ্যাগ্রন্থ ব্যাখ্যাযুক্ত ব্যাখ্যাযোগ্য ব্যাখ্যাত ব্যাখ্যাতা ব্যাখ্যাদান ব্যাখ্যান ব্যাখ্যানত ব্যাখ্যানতা ব্যাখ্যানুসারে ব্যাখ্যাপুস্তক ব্যাখ্যাসংবলিত ব্যাগ ব্যাগার ব্যাগপত্র ব্যাঘাত ব্যাঘাতক ব্যাঘাতকারী ব্যাঘাতসৃষ্টিকারী ব্যাঘাতহীন ব্যাঘাতহীনতা ব্যাঘ্র ব্যাঘ্রী ব্যাঘ্রচর্ম ব্যাঘ্রচর্মাবৃত ব্যাঘ্রদেবতা ব্যাঘ্রনখ ব্যাঘ্রপ্রাপ্তি ব্যাঘ্রলাঞ্ছন ব্যাঙ ব্যাঙ্ক ব্যাঙ্গ ব্যাঙ্গমা ব্যাঙ্গমাব্যাঙ্গমী ব্যাঙ্গমি ব্যাঙ্গমী ব্যাঙেরআধুলি ব্যাঙেরছাতা ব্যাঙেরলাথি ব্যাঙেরসিকি ব্যাঙব্যাঙের ব্যাচ ব্যাচেলার ব্যাচেলর ব্যাচেলর্স ব্যাজ ব্যাজার ব্যাজোক্তি ব্যাজনিন্দা ব্যাজস্তুতি ব্যাজসহিত ব্যাজহীন ব্যাট ব্যাটা ব্যাটাচ্ছেলে ব্যাটাছেলে ব্যাটারি ব্যাটারিচালিত ব্যাটালিয়ন ব্যাটিং ব্যাটেল ব্যাটেলিয়ন ব্যাটধারী ব্যাটবল ব্যাটল ব্যাটলশিপ ব্যাটস ব্যাটসম্যান ব্যাড ব্যাডমিন্টন ব্যাত্ত ব্যাদান ব্যাদিত ব্যাদত্ত ব্যাদড়া ব্যাধ ব্যাধি ব্যাধিগ্রস্ত ব্যাধিজনিত ব্যাধিত ব্যাধিমন্দির ব্যাধপত্নী ব্যান ব্যানার বটানি ব্যান্ড ব্যান্ডউইথ ব্যান্ডেজ ব্যান্ডদল ব্যান্ডপার্টি ব্যান্ডমাস্টার ব্যান্ডস ব্যান্ডসংগীত ব্যান্নন ব্যাপক ব্যাপকতা ব্যাপকতর ব্যাপকভাবে ব্যাপকহার ব্যাপা ব্যাপাদিত ব্যাপাদন ব্যাপার ব্যাপারী ব্যাপারস্যাপার ব্যাপিকা ব্যাপিনী ব্যাপিয়া ব্যাপী ব্যাপ্টিজম ব্যাপটিস্ট ব্যাপ্টিস্ট ব্যাপৃত ব্যাপ্ত ব্যাপৃতা ব্যাপ্তার্থ ব্যাপৃতি ব্যাপ্তি ব্যাপ্তিকাল ব্যাপ্তিযোগ্য ব্যাপ্তিশীল ব্যাপন ব্যাপনীয় ব্যাপনশীল ব্যাপনশীলতা ব্যাবচ্ছেদ ব্যাবৃত্ত ব্যাবৃত্তি ব্যাবর্তক ব্যাবর্তিত ব্যাবর্তন ব্যাবহার ব্যাবহারিক ব্যাভার ব্যাম ব্যামো ব্যামোহ ব্যারাক ব্যারাকপুর ব্যারাম ব্যারামি ব্যারিকেড ব্যারিস্টার ব্যারিস্টারি ব্যারেল ব্যারো ব্যারোমিটার ব্যাল ব্যালগ্রাহ ব্যালগ্রাহী ব্যালী ব্যালেন্স ব্যালেরিনা ব্যালোল ব্যালট ব্যাল্যান্স ব্যালটপেপার ব্যালমৃগ ব্যাস ব্যাসকূট ব্যাসক্ত ব্যাসক্তি ব্যাসার্ধ ব্যাসিলাস ব্যাসবাক্য ব্যাসম ব্যাহত ব্যাহৃতি ব্যাড় ব্যায়াম ব্যায়ামকৌশল ব্যায়ামাগার ব্যায়ামচর্চা ব্যায়ামপটু ব্যায়ামবীর ব্যায়রাম ব্যায়রামি বটি বুটি বঁটি বটিকা বঁটিঝাঁপ বুটিযুক্ত বুটিদার বটিস বটী বুটী বুটীদার বটে বুটে বটেক বটেন ব্যোম ব্যোমকেশ ব্যোমচারী ব্যোমচর ব্যোমযাত্রা ব্যোমযাত্রী ব্যোমযান বুটজুতো ব্যজন ব্যজনী ব্যঞ্জক ব্যঞ্জিত ব্যঞ্জন ব্যঞ্জনক ব্যঞ্জনা ব্যঞ্জনাদি ব্যঞ্জনান্ত ব্যঞ্জনাপূর্ণ ব্যঞ্জনাবৃত্তি ব্যঞ্জনাময় ব্যঞ্জনচিহ্ন ব্যঞ্জনযুক্ত ব্যঞ্জনধ্বনি ব্যঞ্জনবিকৃতি ব্যঞ্জনবর্ণ ব্যঞ্জনমাত্রিক ব্যঞ্জনরূপ ব্যঞ্জনলোপ ব্যঞ্জনসদৃশ ব্যঞ্জনসন্ধি বটঠাকুর ব্যূঢ় ব্যূঢ়োরস্ক ব্যুৎক্রান্ত ব্যুৎক্রম ব্যতিক্রান্ত ব্যতিক্রম ব্যতিক্রমী ব্যতিক্রমযুক্ত ব্যতিক্রমধর্মী ব্যতিক্রমরূপ ব্যতিক্রমহীন ব্যতিক্রমহীনতা ব্যতিব্যস্ত ব্যতিব্যস্ততা ব্যতিরিক্ত ব্যতিরেক ব্যতিরেকাত্মক ব্যতিরেকী ব্যতিরেকে ব্যতিহার ব্যতিহারী ব্যতীত ব্যতীপাত ব্যতীপাতঘটিত ব্যতীহার ব্যত্যাস ব্যত্যস্ত ব্যত্যয় ব্যুৎপাদক ব্যুৎপাদিকা ব্যুৎপাদিত ব্যুৎপাদ্য ব্যুৎপত্তি ব্যুৎপত্তিগত ব্যুৎপত্তিগতভাবে বু্যৎপত্তিতত্ত্ব ব্যুৎপত্তিদানকারী ব্যুৎপত্তিবহির্ভূত ব্যুৎপত্তিহীন ব্যুৎপন্ন বটতলা বটতলী ব্যথা ব্যথাযুক্ত ব্যথাতুর ব্যথানাশক ব্যথানিবারণ ব্যথাশূন্য ব্যথাহত ব্যথিত ব্যথিতা ব্যথিনী ব্যথী ব্যধিকরণ বটপাতা ব্যপদিষ্ট ব্যপদেশ ব্যপদেশযুক্ত ব্যপদেষ্টা ব্যপনীত ব্যপনয়ন ব্যপহরণ ব্যবকলিত ব্যবকলন ব্যবকলনীয় বটবৃক্ষ ব্যবচ্ছিন্ন ব্যবচ্ছেদ বটব্যাল ব্যবধা ব্যবধান ব্যবধানযুক্ত ব্যবধানহীন ব্যবধি ব্যবসা ব্যবসাকেন্দ্র ব্যবসাদার ব্যবসাপাতি ব্যবসাপ্রতিষ্ঠান ব্যবসাবাণিজ্য ব্যবসাবুদ্ধিহীন ব্যবসামূল্য ব্যবসাসফল ব্যবসায়ী ব্যবসায়ীবুদ্ধি ব্যবসায়ীমহল ব্যবসায়ীশ্রেণী ব্যবসায়ীসম্প্রদায় ব্যবসিত ব্যবস্থা ব্যবস্থাগ্রহণ ব্যবস্থাযুক্ত ব্যবস্থাদি ব্যবস্থাধর্ম ব্যবস্থান ব্যবস্থানুযায়ী ব্যবস্থাপক ব্যবস্থাপিকা ব্যবস্থাপিত ব্যবস্থাপত্র ব্যবস্থাপন ব্যবস্থাপনা ব্যবস্থাপনাকারী ব্যবস্থাবলি ব্যবস্থাসংযুক্ত ব্যবস্থাসংবলিত ব্যবস্থাসম্পন্ন ব্যবস্থাহীন ব্যবস্থিত ব্যবহার ব্যবহারকারী ব্যবহারকৃত ব্যবহারকর্তা ব্যবহারাজীব ব্যবহারাধিকার ব্যবহারিক ব্যবহারজীবী ব্যবহারজীর্ণ ব্যবহারজনিত ব্যবহার্য ব্যবহারযোগ্য ব্যবহারযোগ্যতা ব্যবহার্যতা ব্যবহারবিধি ব্যবহারবিন্যাস ব্যবহারশাস্ত্র ব্যবহিত ব্যবহৃত ব্যবহৃতনাম ব্যবহৃতব্য ব্যবহর্তা ব্যবহর্তব্য ব্যভিচার ব্যভিচারকারী ব্যভিচারিণী ব্যভিচারী ব্যভিচারজাত বটমূল ব্যুরো ব্যুরোক্র্যাট ব্যর্থ ব্যর্থকাম ব্যর্থতা ব্যর্থমনোরথ ব্যষ্টি ব্যষ্টিক ব্যষ্টিকেন্দ্রিক ব্যষ্টিবাচক ব্যস ব্যস্ত ব্যস্তানুপাতিক ব্যস্ততা ব্যস্ততাযুক্ত ব্যস্ততম ব্যস্তবাগীশ ব্যস্তসমস্ত ব্যসন ব্যসনী ব্যূহ ব্যূহাদি ব্যূহিত ব্যূহনির্মাণ ব্যূহপথ ব্যূহভেদ ব্যূহরচনা ব্যয় ব্যয়কারী ব্যয়কুণ্ঠ ব্যয়কুণ্ঠতা ব্যয়গত বটুয়া ব্যয়াধিক্য ব্যয়িত ব্যয়ী ব্যয়জনিত ব্যয়যোগ্য ব্যয়ন ব্যয়নির্বাহ ব্যয়বাহুল্য ব্যয়বরাদ্দ ব্যয়বহুল ব্যয়বহুলতা ব্যয়ভার ব্যয়ভিত্তিক ব্যয়মাফিক ব্যয়লাঘব ব্যয়শীল ব্যয়সংকোচ ব্যয়সংকোচন ব্যয়সংক্ষেপ ব্যয়সাধ্য ব্যয়সাপেক্ষ ব্যয়হ্রাস বঠিয়া বডি বডিস বডী বড্ড বড্ডত বড্ডতো বুঢঢা বণিক বণিকিনী বণিকজাতি বণিকদল বণিকবৃত্তি বণিকসংঘ বণিজ বণিজার বণিতা বণ্টক বণ্টিকা বণ্টিত বণ্টন বণ্টনকারী বণ্টনীয় বণ্ঠ বণ্ড বণ্ডা বুত বৃত বতক বুতখানা বতান বুতাম বতারিখ বৃতি বতী বৃত্য বত্ত বৃত্ত বৃত্তক্রম বৃত্তকলা বৃত্তখণ্ড বৃত্তগন্ধি বৃত্তা বৃত্তাংশ বৃত্তাকার বৃত্তাকৃতি বৃত্তাদি বৃত্তাদর্শী বৃত্তান্ত বৃত্তান্তদর্শী বৃত্তানুবর্তী বৃত্তাভাস বৃত্তি বৃত্তিকার বৃত্তিগত বৃত্তিচ্ছেদ বৃত্তিজীবী বৃত্তিদান বৃত্তিপ্রদান বৃত্তিভেদ বৃত্তিভোগী বৃত্তিসম্পন্ন বৃত্তিহীন বৃত্তচাপ বৃত্তীয় বৃত্তপথ বৃত্তপরিধি বৃত্তপুষ্প বৃত্তবান বৃত্তস্থ বুৎপত্তি বুতপরস্ত বুতপরস্তি বতর বৃত্র বৃত্রারি বৃত্রাসুর বত্রিশ বত্রিশা বত্রিশনাড়ি বৃত্রসংহার বৃত্রসংহারক বৃত্রহা বৎসাদনী বৎসতর বৎসতরী বৎসর বৎসরকাল বৎসরাজ বৎসরান্তে বৎসরব্যাপী বৎসলা বৎসলতা বৎসহীনা বুথ বৃথা বৃথাই বৃথাতর্ক বৃথামাংস বদ বুদ বুঁদ বদকাম বদকার বদকারী বদকথা বদখাসলত বদখেয়াল বদখেয়ালি বদখত বদখৎ বদখদ বদগন্ধ বদা বদান্য বদান্যতা বুদাপেস্ট বদাবদ বদি বুঁদি বঁদিয়া বুঁদিয়া বদিয়াতি বদী বঁদে বুঁদে বদছুরত বদৌলতে বদজাত বদজাতি বদজোবান বদজবান বদ্দু বুদ্দু বদ্দি বদদোয়া বদ্ধ বুদ্ধ বুদ্ধু বৃদ্ধ বৃদ্ধকাক বদ্ধকালা বৃদ্ধগঙ্গা বুদ্ধগয়া বৃদ্ধা বৃদ্ধাঙ্গুলি বৃদ্ধাঙ্গুষ্ঠ বদ্ধাঞ্জলি বুদ্ধাবতার বদ্ধাবস্থা বৃদ্ধাবস্থা বৃদ্ধাশ্রম বুদ্ধি বৃদ্ধি বৃদ্ধিকারক বৃদ্ধিকাল বুদ্ধিকৌশল বৃদ্ধিকর বৃদ্ধিকরণ বৃদ্ধিক্রম বুদ্ধিগুণ বুদ্ধিগম্য বুদ্ধিগ্রাহ্য বুদ্ধিচাতুর্য বুদ্ধিজীবী বৃদ্ধিজনক বৃদ্ধিজনিত বুদ্ধিযুক্ত বৃদ্ধিযুক্ত বুদ্ধিদীপ্ত বুদ্ধিনাশ বৃদ্ধিপায় বৃদ্ধিপ্রাপ্ত বৃদ্ধিপ্রাপ্তি বুদ্ধিবাদ বুদ্ধিবিনিয়োগ বুদ্ধিবিবেচনা বুদ্ধিব্যয় বুদ্ধিবৃত্তি বুদ্ধিবৃত্তিক বুদ্ধিবল বুদ্ধিভ্রংশ বুদ্ধিভ্রম বুদ্ধিভ্রষ্ট বুদ্ধিমান বৃদ্ধিমাপক বুদ্ধিমতী বুদ্ধিমত্তা বৃদ্ধিরোধ বুদ্ধিরজয় বুদ্ধিরঢেঁকি বুদ্ধিরঢেঁকী বুদ্ধিরূপ বুদ্ধিলোপ বুদ্ধিশালী বৃদ্ধিশীল বুদ্ধিশুদ্ধি বুদ্ধিশূন্য বৃদ্ধিশ্রাদ্ধ বৃদ্ধিসাধন বুদ্ধিসম্পন্ন বুদ্ধিসহকারে বৃদ্ধিসহিত বুদ্ধিহানি বুদ্ধিহীন বুদ্ধিহীনতা বুদ্ধিহত বদ্ধচিত্ত বুদ্ধীন্দ্রিয় বৃদ্ধোক্ষ বদ্ধজীব বদ্ধজলা বুদ্ধত্ব বৃদ্ধত্ব বুদ্ধত্বলাভ বুদ্ধদেব বদ্ধদ্বার বদ্ধদৃষ্টি বদ্ধধারণা বৃদ্ধনাভী বদ্ধপুকুর বদ্ধপাগল বদ্ধপ্রান্ত বদ্ধপরিকর বুদ্ধপূর্ণিমা বৃদ্ধপ্রপিতামহ বৃদ্ধপ্রপিতামহী বৃদ্ধপ্রমাতামহ বৃদ্ধপ্রমাতামহী বদ্ধমৌন বদ্ধমূল বদ্ধমুষ্টি বদ্ধরূপ বৃদ্ধস্য বদ্ধস্রোত বদন বদনইন্দু বদনকান্তি বদনখানি বদনা বদনাম বদনামকারী বদনামৃত বদনিয়ত বদনচন্দ্রমা বদনেশা বদনমদিরা বদনসিব বদফাল বদবু বদবখত বদবখতি বদ্বীপ বদবো বুদবুদ বুদ্বুদ বুদ্বুদিত বুদ্বুদী বুদবুদযুক্ত বুদ্বুদযুক্ত বদবুদ্ধি বুদ্বুদন বদভ্যাস বদমাইশ বদমাইশি বদমাশ বদমাশি বদমায়েশ বদমায়েশি বদমেজাজ বদমেজাজি বদমতলব বদর বদরং বদরক্ত বদরঙ বদরাগ বদরাগী বদরিকা বদরিকাশ্রম বদরিনাথ বদরী বদরুচি বদরীতি বদরীফল বদরোখা বদরসিক বদরসিকতা বদল বদলা বদলাই বদলাইও বদলাইত বদলাইতাম বদলাইতিস বদলাইতে বদলাইতেছ বদলাইতেছি বদলাইতেছিল বদলাইতেছিলাম বদলাইতেছিলি বদলাইতেছিলে বদলাইতেছিলেন বদলাইতেছিস বদলাইতেছে বদলাইতেছেন বদলাইতেন বদলাইব বদলাইবার বদলাইবি বদলাইবে বদলাইবেন বদলাইল বদলাইলাম বদলাইলি বদলাইলে বদলাইলেন বদলাইয়া বদলাইয়াছ বদলাইয়াছি বদলাইয়াছিল বদলাইয়াছিলাম বদলাইয়াছিলি বদলাইয়াছিলে বদলাইয়াছিলেন বদলাইয়াছিস বদলাইয়াছে বদলাইয়াছেন বদলাইয়ো বদলাক বদলাচ্ছ বদলাচ্ছি বদলাচ্ছিল বদলাচ্ছিলাম বদলাচ্ছিলি বদলাচ্ছিলে বদলাচ্ছিলেন বদলাচ্ছিলেম বদলাচ্ছিলুম বদলাচ্ছিস বদলাচ্ছে বদলাচ্ছেন বদলাত বদলাতাম বদলাতিস বদলাতে বদলাতেন বদলাতেম বদলাতুম বদলান বদলানো বদলাব বদলাবার বদলাবি বদলাবে বদলাবেন বদলাবো বদলাবদলি বদলাল বদলালাম বদলালি বদলালে বদলালেন বদলালেম বদলালুম বদলাস বদলায়নি বদলি বদলিয়ে বদলী বদলে বদলেছ বদলেছি বদলেছিল বদলেছিলাম বদলেছিলি বদলেছিলে বদলেছিলেন বদলেছিলেম বদলেছিলুম বদলেছিস বদলেছে বদলেছেন বদলের বদলো বদশলা বদস্ত বদস্তুর বদসুরত বদসলা বদহাল বদহজম বদহজমি বধ বধূ বুধ বঁধু বধওঁ বধক বধকারী বুধগ্রহ বধার্থ বধার্হ বধিবে বধির বধিরতা বধিরত্ব বধী বুধী বধূচরণ বুধো বধোদ্যত বধোদ্যতা বধোদ্যম বধূজন বধ্য বধূটী বধযোগ্য বধ্যভূমি বধূৎসব বধূধন বধূপক্ষ বুধবার বধূবরণ বধূমাতা বধূমূর্তি বধস্থান বধস্থলী বধূহত্যা বঁধুয়া বন বুন বনুক বুনুক বনকুক্কুট বনকাপাসি বনকার্পাসী বনকদলী বনকন্দ বনকপোত বনকর বনখণ্ড বনগাঁ বনগীতি বনগোচর বনগমন বনগরু বনগ্রাম বনগহন বনা বুনা বনাই বনাইও বনাইত বনাইতাম বনাইতিস বনাইতে বনাইতেছ বনাইতেছি বনাইতেছিল বনাইতেছিলাম বনাইতেছিলি বনাইতেছিলে বনাইতেছিলেন বনাইতেছিস বনাইতেছে বনাইতেছেন বনাইতেন বনাইব বনাইবার বনাইবি বনাইবে বনাইবেন বনাইল বনাইলাম বনাইলি বনাইলে বনাইলেন বনাইয়া বনাইয়াছ বনাইয়াছি বনাইয়াছিল বনাইয়াছিলাম বনাইয়াছিলি বনাইয়াছিলে বনাইয়াছিলেন বনাইয়াছিস বনাইয়াছে বনাইয়াছেন বনাইয়ো বনাক বনাগ্নি বনাচ্ছ বনাচ্ছি বনাচ্ছিল বনাচ্ছিলাম বনাচ্ছিলি বনাচ্ছিলে বনাচ্ছিলেন বনাচ্ছিলেম বনাচ্ছিলুম বনাচ্ছিস বনাচ্ছে বনাচ্ছেন বনাঞ্চল বুনাট বনাত বনাতওয়ালা বনাতাম বনাতিস বনাতে বনাতেন বনাতেম বনাতুম বনান বুনান বুনানি বনানী বনানো বুনানো বনান্ত বনান্তর বনাব বনাবার বনাবি বনাবে বনাবেন বনাবো বনাবনি বনাবন্তি বনাম বনারস বনারসি বনারসী বনাল বনালাম বনালি বনালে বনালেন বনালেম বনালুম বনাশ্রিত বনাশ্রম বনাশ্রয় বনাস বনায়ত বনায়ন বনি বুনি বনিক বনিজ বনিজার বনিত বুনিত বনিতা বনিতাম বুনিতাম বনিতিস বুনিতিস বনিতে বুনিতে বনিতেছ বুনিতেছ বনিতেছি বুনিতেছি বনিতেছিল বুনিতেছিল বনিতেছিলাম বুনিতেছিলাম বনিতেছিলি বুনিতেছিলি বনিতেছিলে বুনিতেছিলে বনিতেছিলেন বুনিতেছিলেন বনিতেছিস বুনিতেছিস বনিতেছে বুনিতেছে বনিতেছেন বুনিতেছেন বনিতেন বুনিতেন বুনিন বনিব বুনিব বনিবার বুনিবার বনিবি বুনিবি বনিবে বুনিবে বনিবেন বুনিবেন বনিবনা বনিবনাত বনিল বুনিল বনিলাম বুনিলাম বনিলি বুনিলি বনিলে বুনিলে বনিলেন বুনিলেন বনিস বুনিস বনিয়া বুনিয়া বনিয়াছ বুনিয়াছ বনিয়াছি বুনিয়াছি বনিয়াছিল বুনিয়াছিল বনিয়াছিলাম বুনিয়াছিলাম বনিয়াছিলি বুনিয়াছিলি বনিয়াছিলে বুনিয়াছিলে বনিয়াছিলেন বুনিয়াছিলেন বনিয়াছিস বুনিয়াছিস বনিয়াছে বুনিয়াছে বনিয়াছেন বুনিয়াছেন বনিয়াদ বুনিয়াদ বনিয়াদি বুনিয়াদি বুনিয়াদী বনিয়ে বুনিয়ে বনিয়েছ বনিয়েছি বনিয়েছিল বনিয়েছিলাম বনিয়েছিলি বনিয়েছিলে বনিয়েছিলেন বনিয়েছিলেম বনিয়েছিলুম বনিয়েছিস বনিয়েছে বনিয়েছেন বনিয়ো বুনিয়ো বনী বনীকরণ বনচারী বনচাঁড়াল বনচর বুনে বনেচর বনেছ বুনেছ বনেছি বুনেছি বনেছিল বুনেছিল বনেছিলাম বুনেছিলাম বনেছিলি বুনেছিলি বনেছিলে বুনেছিলে বনেছিলেন বুনেছিলেন বনেছিলেম বুনেছিলেম বনেছিলুম বুনেছিলুম বনেছিস বুনেছিস বনেছে বুনেছে বনেছেন বুনেছেন বনেজঙ্গলে বনেট বনেদ বনেদি বনেদিআনা বনেদিপনা বনেদী বনেন বুনেন বনো বুনো বনোসা বুনোহাঁস বনোয়ারি বনোয়ারী বনছ বুনছ বনছি বুনছি বনছিল বুনছিল বনছিলাম বুনছিলাম বনছিলি বুনছিলি বনছিলে বুনছিলে বনছিলেন বুনছিলেন বনছিলেম বুনছিলেম বনছিলুম বুনছিলুম বনছিস বুনছিস বনছে বুনছে বনছেন বুনছেন বনৌষধি বনজ বনজঙ্গল বনজাত বনজ্যোৎস্না বন্য বুনট বন্যা বন্যাজাত বন্যাজল বন্যাদুর্গত বন্যাপ্লাবিত বন্যাবাহিত বন্যাবিধ্বস্ত বন্যার্ত বন্যাসঙ্কুল বন্টিত বনযোগী বন্যজাতি বুনটযুক্ত বন্যতা বন্যদশা বন্যপ্রাণী বন্ড বনত বন্ত বুনত বৃন্ত বৃন্তাক বনতাম বুনতাম বনতি বনতিস বুনতিস বৃন্তচ্যুত বনতে বুনতে বনতেন বুনতেন বনতেম বুনতেম বৃন্তের বৃন্তযুক্ত বনতুম বুনতুম বনতুলসী বৃন্তহীন বন্দ বৃন্দ বন্দক বন্দুক বন্দুকাদি বন্দুকচালক বন্দুকচি বন্দুকছোড়া বন্দুকছোঁড়া বন্দুকছুড়া বন্দুকছুঁড়া বন্দুকধারী বন্দুকবাজ বৃন্দগান বন্দা বুন্দা বৃন্দা বৃন্দাদূতী বৃন্দাবন বন্দি বুন্দি বন্দিঘর বন্দিজীবন বন্দিত বন্দিতা বন্দিত্ব বন্দিদশা বন্দিনী বন্দিশালা বন্দী বন্দীঘর বন্দীদশা বন্দীনিবাস বন্দীশালা বন্দীশিবির বন্দে বন্দেগি বন্দেগী বনদেবী বনদেবতা বন্দেবন্দে বন্দেমাতরম বন্দো বন্দোবস্ত বন্দোবস্তকৃত বন্দ্য বন্দ্যা বন্দ্যোপাধ্যায় বন্দ্যবংশ বন্দন বন্দনা বন্দনাকারী বন্দনাগান বন্দনাগায়ক বন্দনীয় বন্দনীয়া বন্দবস্ত বন্দর বন্দরটিলা বন্দরনগরী বন্ধ বন্ধু বন্ধক বন্ধুক বন্ধূক বন্ধকগ্রহীতা বন্ধকি বন্ধকিতমসুক বন্ধকী বন্ধুকৃত্য বন্ধকদাতা বন্ধকনামা বন্ধকপত্র বন্ধুকবন্ধু বন্ধকরূপ বন্ধখানা বন্ধান বন্ধাবস্থা বন্ধী বন্ধুজীব বন্ধুজীবক বন্ধ্য বন্ধ্যা বন্ধ্যাসূত বন্ধ্যতা বন্ধ্যত্ব বন্ধুতা বন্ধুত্ব বন্ধুত্বপূর্ণ বন্ধুত্বপূর্ণভাবে বন্ধুত্ব্ব বন্ধুত্বসুলভ বন্ধদ্বার বন্ধন বন্ধনাদি বন্ধনালয় বন্ধনী বন্ধুনী বন্ধনীচিহ্ন বন্ধনীয় বন্ধনে বন্ধনযুক্ত বন্ধনযোগ্য বন্ধনযোগ্যা বন্ধনডোর বন্ধনদশা বন্ধনমুক্ত বন্ধনমুক্তি বন্ধনসূত্র বন্ধনহীন বন্ধনহীনতা বন্ধুপ্রীতি বন্ধুবাৎসল্য বন্ধুবান্ধব বন্ধুবিচ্ছেদ বন্ধুবৎসল বন্ধুবর বন্ধুবর্গ বন্ধুভাব বন্ধুর বন্ধুরা বন্ধুরতা বন্ধরূপ বন্ধুলাভ বন্ধুলি বন্ধুলী বন্ধুসহিত বন্ধুহীন বন্ধুয়া বন্ন বুনন বন্নক বুননকারী বুননি বুনুনি বননিবাসিনী বনপাল বনপথ বনপ্রায় বনফুল বুনব বনবাদাড় বনবার বনবাস বনবাসিনী বনবাসী বনবি বুনবি বনবিবি বনবিভাগ বনবিহারী বনবিড়াল বনবীথিকা বনবে বুনবে বনবেন বুনবেন বনবো বুনবো বনবন বনবরা বনভূঁই বনভোজ বনভোজন বনভূমি বনমানুষ বনমালা বনমালী বনমোরগ বনমধ্যে বনমল্লিকা বনরক্ষক বনরাজি বনরাজী বনল বুনল বনলাম বুনলাম বনলি বুনলি বনলে বুনলে বনলেন বুনলেন বনলেম বুনলেম বনলতা বনলুম বুনলুম বনশোভিনী বনশ্রী বনসংরক্ষক বনসাই বনসারি বনস্থ বনস্থলী বনসুপারি বনস্পতি বনসম্পদ বনয়ারি বনয়ারী বপ বপু বপা বপ্তা বপ্তব্য বপন বপনকারী বপ্র বপ্রকেলি বপ্রক্রিয়া বপ্রক্রীড়া বপুষ্মান বপুষ্মতী বফলা বব বুবু ববমবম বুভুক্ষু বুভুক্ষা বুভুক্ষিত বভ্রু বভ্রুবাহন বম বমাল বমি বমিত বমিবমি বমিভাব বমচুলি বঁমচুলি বুমেরাং বমন বমনীয় বমনেচ্ছু বমনেচ্ছা বমনযোগ্য বম্বু বুম্বুক বম্বাটে বম্বার্ড বম্বে বম্বেটে বমবম বম্ভ বমভোলা বমভোলানাথ বম্ভতেল বর ব্র বরং ব্রংকাই ব্রংকাইটিস ব্রংকিওল ব্রংকিয়াল বরই বরওয়ালা বরক বরকত বরকনে বরকন্যা বরকন্দাজ বরকন্দাজি বরকন্দাজী বরকবারি বরকবারী বরকর্তা ব্রুকলিন বরখাস্ত বরখাস্তকৃত বরখাস্তি বরখিলাফ বরখেলাপ বরখেলাফ বরখত বরখন্তি বরখন্তিয়া বর্গ বর্গকিমি বর্গকিলোমিটার বর্গক্ষেত্র বর্গক্ষেত্রদ্বয় বর্গগজ বরগা বর্গা বর্গাইত বর্গাকার বর্গাকৃতি বরগাদার বর্গাদার বর্গাপ্রথা বর্গাভাগ বর্গি বর্গিরাজ বর্গী বর্গীকরণ বর্গীরাজ বর্গীয় বর্গীয়করণ বর্গ্য বরগুনা বর্গফুট বর্গফল বর্গভুক্ত বর্গমাইল বর্গমাইলব্যাপী বর্গমি বর্গমিটার বর্গমূল বর্গসেন্টিমিটার ব্রঙ্কাইটিস বরা বুরা ব্রা বরাঅ বরাই বরাইগ্রাম ব্রাইট ব্রাইড ব্রাইডাল ব্রাউজার ব্রাউজিং ব্রাউন বরাক বরাকী ব্রাকেট বরাখুরে বরাঙ্গ বরাঙ্গী বরাঙ্গনা ব্রাজিল ব্রাজিলীয় ব্রাঞ্চ বরাট বরাটক বরাটিয়া ব্রাণ্ডি বরাত বরাতি বরাতিয়া বরাতী ব্রাত্য ব্রাত্যভাষা ব্রাদার ব্রাদারস ব্রাদার্স ব্রাদারহুড বরাদ্দ বরাদ্দকৃত বরানুগামী বরানুগমন ব্রান্ড ব্রান্ডি বরাননা ব্রাবুন বরাবর বরাবরি বরাবরের বরাবরেষু বরাভরণ বরাভয় বরামোদ বরামদ বরারোহা ব্রাশ ব্রাসিলিয়া ব্রাসেল ব্রাসেলস বরাসন বরাহ ব্রাহ্ম ব্রাহ্মিকা ব্রাহ্মী ব্রাহ্মীলিপি ব্রাহ্মণ ব্রাহ্মণকন্যা ব্রাহ্মণকুমার ব্রাহ্মণাদি ব্রাহ্মণী ব্রাহ্মণেতর ব্রাহ্মণজাতি ব্রাহ্মণ্য ব্রাহ্মণত্ব ব্রাহ্মণপাড়া ব্রাহ্মণবালক ব্রাহ্মণবাড়িয়া ব্রাহ্মণবিদায় ব্রাহ্মণবিহীন ব্রাহ্মণবধ ব্রাহ্মণভোজন ব্রাহ্মণসন্তান ব্রাহ্মণসমাজ ব্রাহ্মধর্ম ব্রাহ্মধর্মাবলম্বী ব্রাহ্মনারী ব্রাহ্মবিবাহ ব্রাহ্মমুহূর্ত ব্রাহ্মসভা ব্রাহ্মসমাজ ব্রাহ্মসমাজী বরিখ বরিখা বরিখত বরিখনিয়া বরিখন্তিয়া বরিখব ব্রিগেড ব্রিগেডিয়ার ব্রিজ ব্রিজটাউন ব্রিটানিকা ব্রিটিশ ব্রিটিশকোম্পানি ব্রিটিশবিরোধী ব্রিটেন ব্রিটেনবাসী ব্রিডার ব্রিডিং ব্রিফিং বরিশাল বরিশালবিভাগ বরিষ বরিষা বরিষে বরিষ্ঠ বরিষ্ঠা বরিষণ বরিয়াতী বুরুচ ব্রুচ বর্চঃকুটির বর্চা বরচন্দন ব্রীহি ব্রীড়া ব্রীড়াযুক্ত ব্রীড়ানত ব্রীড়ানতা ব্রীড়িত ব্রেইন ব্রেইল ব্রেক ব্রেকফাস্ট ব্রেড বরেণ্য ব্রেন বরেন্দ্র বরেন্দ্রভূমি ব্রেসলেট ব্রোকার ব্রোকেন বুরোক্রাটিক ব্রোচ ব্রোঞ্জ ব্রোঞ্জপদক বরোন্মুখ ব্রোমিন বরজ বুরুজ ব্রজ বর্জক ব্রজকিশোর ব্রজকিশোরী ব্রজগোপাল ব্রজগ্রাম বর্জাইস ব্রজাঙ্গনা বর্জি বর্জিত বর্জিতা বর্জিল বর্জী ব্রজেন ব্রজেনকলেজ ব্রজেন্দ্র ব্রজেশ্বর ব্রজেশ্বরী বুর্জেয়া বুরজোয়া বুর্জোয়া বুর্জোয়াতন্ত্র বুর্জোয়াসুলভ বর্জ্য ব্রজ্যা ব্রজদেবী ব্রজদুলাল ব্রজধাম বর্জন বর্জনকারী বর্জনীয় বর্জনীয়া বর্জনশীল ব্রজপরিক্রমা ব্রজবাসী ব্রজবিলাস ব্রজবিহারী ব্রজবুলি ব্রজবল্লভ ব্রজভাষা ব্রজমোহন ব্রজমণ্ডল ব্রজরাজ ব্রজলাল ব্রজলীলা ব্রজলেপ ব্রজসুন্দর ব্রজসুন্দরী বুর্জুয়া বর্জয়িতা বরঞ্চ বরট বর্য বরটা ব্র্যাক ব্র্যাকেট বরযাত্র বরযাত্রা বরযাত্রী ব্র্যান্ড ব্র্যান্ডি বরযুবতী ব্রডকাস্ট ব্রডকাস্টার ব্রডকাস্টিং ব্রডগেজ বর্ডার ব্রডব্যান্ড বরণ বরুণ বর্ণ ব্রণ বরণকারী বরণকর্তা বর্ণক্রম বর্ণক্রমিক বর্ণগুচ্ছ বর্ণগুরু বর্ণা বর্ণাইয়া বর্ণাঢ্য বর্ণাত্মক বর্ণান বর্ণানুক্রম বর্ণানুক্রমিক বর্ণানুক্রমিকভাবে বরুণানী বর্ণানো বর্ণান্তর বর্ণান্ধ বর্ণান্ধতা বর্ণালি বর্ণালিমিতি বর্ণালী বর্ণালীগত বর্ণালীবীক্ষণ বর্ণালীভিত্তিক বর্ণালীমিতি বর্ণালীরেখা বরুণালয় বর্ণাশ্রম বর্ণিক বর্ণিকা বর্ণিত বর্ণিনী বর্ণিল বর্ণী বর্ণচোর বর্ণচোরা বর্ণচ্ছটা বর্ণীত বর্ণীল বরণীয় বরণীয়া বর্ণজ্ঞান বর্ণজ্ঞানহীন বর্ণজ্যেষ্ঠ বর্ণজ্যেষ্ঠা বর্ণযুক্ত বর্ণযুগল বরণযোগ্য বরণ্ড বরণ্ডক বরণ্ডারি বরণডালা বর্ণতালিকা বর্ণতত্ত্ব বর্ণত্রয় বর্ণদাসী বরুণদেব বর্ণদ্বিজ বর্ণধর্ম বর্ণন বর্ণনা বর্ণনাকারী বর্ণনাকুশল বর্ণনাজনিত বর্ণনাতীত বর্ণনানুযায়ী বর্ণনানুসারে বর্ণনাপত্র বর্ণনাপূর্ণ বর্ণনাবৈশিষ্ট্য বর্ণনাভঙ্গি বর্ণনামতে বর্ণনাসংবলিত বর্ণনায়িত বর্ণনীয় বর্ণপরিচয় বর্ণপরিচয়হীন বরুণবাণ বর্ণবাদ বর্ণবিদ্বেষ বর্ণবিদ্বেষী বর্ণবিন্যাস বর্ণবিপর্যয় বর্ণবিশ্লেষণ বর্ণবৈচিত্র্য বর্ণবৈষম্য বর্ণব্রাহ্মণ বর্ণবহুল বর্ণভুক্ত বর্ণভিত্তিক বর্ণভেদ বরণমালা বর্ণমালা বর্ণমালাতত্ত্ব বর্ণমণ্ডল বর্ণমূল বর্ণময় বর্ণরঞ্জিত বর্ণরূপ বর্ণরূপভেদ বর্ণলিপি বর্ণলোপ বর্ণশ্রেষ্ঠ বর্ণশ্রেষ্ঠা বর্ণসংকট বর্ণসংকর বর্ণসংকরতা বর্ণসংকরত্ব বর্ণসাংকর্ষ বর্ণস্থল বর্ণসমষ্টি বর্ণহীন বরত ব্রত ব্রতউপবাস ব্রতউপবাসাদি বর্তক বর্তুক ব্রতকথা বর্তা বর্তাই বর্তাইও বর্তাইত বর্তাইতাম বর্তাইতিস বর্তাইতে বর্তাইতেছ বর্তাইতেছি বর্তাইতেছিল বর্তাইতেছিলাম বর্তাইতেছিলি বর্তাইতেছিলে বর্তাইতেছিলেন বর্তাইতেছিস বর্তাইতেছে বর্তাইতেছেন বর্তাইতেন বর্তাইব বর্তাইবার বর্তাইবি বর্তাইবে বর্তাইবেন বর্তাইল বর্তাইলাম বর্তাইলি বর্তাইলে বর্তাইলেন বর্তাইয়া বর্তাইয়াছ বর্তাইয়াছি বর্তাইয়াছিল বর্তাইয়াছিলাম বর্তাইয়াছিলি বর্তাইয়াছিলে বর্তাইয়াছিলেন বর্তাইয়াছিস বর্তাইয়াছে বর্তাইয়াছেন বর্তাইয়ো বর্তাক বর্তাচ্ছ বর্তাচ্ছি বর্তাচ্ছিল বর্তাচ্ছিলাম বর্তাচ্ছিলি বর্তাচ্ছিলে বর্তাচ্ছিলেন বর্তাচ্ছিলেম বর্তাচ্ছিলুম বর্তাচ্ছিস বর্তাচ্ছে বর্তাচ্ছেন বর্তাত বর্তাতাম বর্তাতিস বর্তাতে বর্তাতেন বর্তাতেম বর্তাতুম ব্রতাদি বর্তান বর্তানো ব্রতানুষ্ঠান বর্তাব বর্তাবার বর্তাবি বর্তাবে বর্তাবেন বর্তাবো বর্তামান বর্তাল বর্তালাম বর্তালি বর্তালে বর্তালেন বর্তালেম বর্তালুম বর্তাস বর্তায়না বর্তি বর্তিক বর্তিকা বর্তিত বর্তিনী ব্রতিনী বর্তিষ্ণু বর্তী ব্রতী ব্রতচারিণী ব্রতচারী বর্তে ব্রতে বর্তেছ বর্তেছি বর্তেছিল বর্তেছিলাম বর্তেছিলি বর্তেছিলে বর্তেছিলেন বর্তেছিলেম বর্তেছিলুম বর্তেছিস বর্তেছে বর্তেছেন বর্ত্তা ব্রততি বর্ত্তিকা ব্রততী বর্ত্তন বর্ত্তমান বর্ত্তুল ব্রতদিবস ব্রতধারিণী ব্রতধারী বরতন বরতনু বর্তন বর্তনী বর্তনীবিন্যাস ব্রতপালন ব্রতপালনকারী ব্রতভিক্ষা ব্রতভ্রষ্ট বর্ত্ম বর্তমান বর্তমানকাল বর্তমানকালীন বর্তমানতা বর্তমাননাম ব্রতরূপ বরতরফ বরতরফি বর্তুল বর্তুলাকার বর্তুলতা ব্রতসমাপন ব্রতহীন বরদ বরদা বরদাতা বরদার বরদাশত বরদাস্ত বর্দ্ধক বর্দ্ধন বর্দ্ধমান বুর্দনে বর্ধক বর্ধকী বর্ধিত বর্ধিষ্ণু বর্ধন বর্ধনকারী বর্ধনশীল বর্ধমান বরন বর্না ব্রুনাই বর্নান বর্নানো বরনারী বরনাহ ব্রুনেই বরন্তী বরপক্ষ বরপণ বরপুত্র বরপ্রদ বরফ বরফকল বরফগলা বরফাচ্ছাদিত বরফাচ্ছন্ন বর্ফান বরফি বরফিকাটা বরফজমা বরফযুগ বরফট্টাই বরফপথ বরফমুক্ত বর্ব বরবাদ বরবটি বর্বটী বর্বণা বরবধূ বর্বর বর্বরোচিত বরবর্ণিনী বর্বরতা বর্বরদশা বর্ম বর্মা বর্মাচ্ছাদিত বর্মাদেশ বর্মাবৃত বরমাল্য বর্মি বর্মিত বর্মী বর্মীয় বর্মণ বর্মধারী বর্মপরিহিত বর্মসম বুররাক বররামা বুরুল বুরুশ বরশা বর্শা বর্শাধারী বরশী বরষ বর্ষ বর্ষুক বর্ষকাল বর্ষকর বর্ষগণনা বরষা বর্ষা বর্ষাঋতু বর্ষাকাল বর্ষাকালীন বর্ষাগম বরষাত বরষাতি বর্ষাতি বর্ষাধোয়া বর্ষানামা বর্ষানো বর্ষাপ্লাবিত বর্ষাবাদল বর্ষাবিধৌত বর্ষাবে বর্ষাবসান বর্ষামাপক বর্ষাহীন বর্ষিণী বর্ষিত বর্ষিষ্ঠ বর্ষী বর্ষচক্র বর্ষীয় বর্ষীয়া বর্ষীয়ান বর্ষীয়সী বর্ষোপল বর্ষজীবী বরষণ বর্ষণ বর্ষণকারী বর্ষণোন্মুখ বর্ষণমুখর বর্ষণশীল বর্ষণসিক্ত বর্ষণস্নাত বরষন বর্ষপঞ্জি বর্ষপঞ্জী বর্ষপূর্তি বর্ষপ্রবেশ বর্ষপর্বত বর্ষফল বর্ষব্যাপী বর্ষবরণ বর্ষমান বর্ষশেষ বর্ষসেরা বরসমাজ বরসরোজিনী বরহ বর্হ বরহক বর্হী ব্রহ্ম ব্রহ্মকুণ্ড ব্রহ্মা ব্রহ্মাণী ব্রহ্মাণ্ড ব্রহ্মাণ্ডরচনা ব্রহ্মারণ্য ব্রহ্মাস্ত্র ব্রহ্মচারিণী ব্রহ্মচারী ব্রহ্মচিন্তা ব্রহ্মচর্য ব্রহ্মচর্যাদি ব্রহ্মচর্যাশ্রম ব্রহ্মোত্তর ব্রহ্মোপাসনা ব্রহ্মজ্ঞ ব্রহ্মজ্ঞান ব্রহ্মজ্ঞানী ব্রহ্মজ্ঞানজনিত ব্রহ্মজ্ঞানবিৎ ব্রহ্মজ্ঞানবিষয়ক ব্রহ্মজ্ঞানলাভ ব্রহ্মজ্ঞানসম্পন্ন ব্রহ্মযোগ ব্রহ্মযজ্ঞ ব্রহ্মডাঙ্গা ব্রহ্মণ্য ব্রহ্মণ্যদেব ব্রহ্মতালু ব্রহ্মতেজ ব্রহ্মতেজোময় ব্রহ্মতত্ত্ব ব্রহ্মত্ব ব্রহ্মত্র ব্রহ্মত্রা ব্রহ্মতুল্য ব্রহ্মদেব ব্রহ্মদেশ ব্রহ্মদেশীয় ব্রহ্মদেশবাসী ব্রহ্মদৈত্য ব্রহ্মধ্যান ব্রহ্মনাভ ব্রহ্মনিষ্ঠ ব্রহ্মপিশাচ ব্রহ্মপুত্র বরহমপুর ব্রহ্মপুর ব্রহ্মপুরাণ ব্রহ্মপুরী ব্রহ্মবাদ ব্রহ্মবাদিনী ব্রহ্মবাদী ব্রহ্মবিদ্যা ব্রহ্মবিহার ব্রহ্মবৈবর্ত ব্রহ্মময়ী ব্রহ্মরাক্ষস ব্রহ্মরন্ধ্র ব্রহ্মর্ষি ব্রহ্মলোক ব্রহ্মশাপ ব্রহ্মশির ব্রহ্মশিরা ব্রহ্মসংগীত ব্রহ্মসংহিতা ব্রহ্মসঙ্গীত ব্রহ্মসাবর্ণি ব্রহ্মসূত্র ব্রহ্মস্ব ব্রহ্মস্বহরণ ব্রহ্মহত্যা বরড়া বরুয়া বরয়িতা বরয়িত্রী বল বুল ব্লু বলক বলুক বল্ক বুলক ব্লক বলকা বল্কা বলকান বলকারক বলকযুক্ত বলকর বলকরা বল্কল বল্কলধারী বলক্ষ বলক্ষেত্র বলক্ষপক্ষ ব্লগ বলগা ব্লগার বলগাহরিণ বুলগেরিয়া বুলগেরীয় বলগর্বিত বলা বুলা বলাই বুলাই বলাইও বুলাইও বলাইত বুলাইত বলাইতাম বুলাইতাম বলাইতিস বুলাইতিস বলাইতে বুলাইতে বলাইতেছ বুলাইতেছ বলাইতেছি বুলাইতেছি বলাইতেছিল বুলাইতেছিল বলাইতেছিলাম বুলাইতেছিলাম বলাইতেছিলি বুলাইতেছিলি বলাইতেছিলে বুলাইতেছিলে বলাইতেছিলেন বুলাইতেছিলেন বলাইতেছিস বুলাইতেছিস বলাইতেছে বুলাইতেছে বলাইতেছেন বুলাইতেছেন বলাইতেন বুলাইতেন বলাইব বুলাইব বলাইবার বুলাইবার বলাইবি বুলাইবি বলাইবে বুলাইবে বলাইবেন বুলাইবেন বলাইল বুলাইল বলাইলাম বুলাইলাম বলাইলি বুলাইলি বলাইলে বুলাইলে বলাইলেন বুলাইলেন বলাইয়া বুলাইয়া বলাইয়াছ বুলাইয়াছ বলাইয়াছি বুলাইয়াছি বলাইয়াছিল বুলাইয়াছিল বলাইয়াছিলাম বুলাইয়াছিলাম বলাইয়াছিলি বুলাইয়াছিলি বলাইয়াছিলে বুলাইয়াছিলে বলাইয়াছিলেন বুলাইয়াছিলেন বলাইয়াছিস বুলাইয়াছিস বলাইয়াছে বুলাইয়াছে বলাইয়াছেন বুলাইয়াছেন বলাইয়ো বুলাইয়ো ব্লাউজ বলাক বুলাক বলাকওয়া বলাকা ব্লাকবোর্ড বলাচ্ছ বলাচ্ছি বলাচ্ছিল বলাচ্ছিলাম বলাচ্ছিলি বলাচ্ছিলে বলাচ্ছিলেন বলাচ্ছিলেম বলাচ্ছিলুম বলাচ্ছিস বলাচ্ছে বলাচ্ছেন বলাট ব্লাড ব্লাডগ্রুপ ব্লাডার ব্লাডডোনার বলাত বলাৎকার বলাৎকৃত বলাৎকৃতা বলাতাম বলাতিস বলাতে বলাতেন বলাতেম বলাতুম বলাধান বলাধিক্য বলাধ্যক্ষ বলান বুলান বলানো বুলানো বলানুজ বলান্বিত বলাব বলাবার বলাবি বলাবে বলাবেন বলাবো বলাবল বলাবলি বুলাবুলি বলাবলেপ বলাভিমুখী বলাভিমুখে বলামাত্র বলার বলাল বলালাম বলালি বলালে বলালেন বলালেম বলালুম বলাস বলাসান বলাহক বলাহয় বলি বুলি বলিউড বলিযুক্ত বলিত বলিতাম বলিতিস বলিতে বলিতেছ বলিতেছি বলিতেছিল বলিতেছিলাম বলিতেছিলি বলিতেছিলে বলিতেছিলেন বলিতেছিস বলিতেছে বলিতেছেন বলিতেন বলিদান বলিদানকারী বলিনি বলিপুষ্ট বলিব বলিবার বলিবি বলিবে বলিবেন বলিভুক বলিভিয়া বলিরাজ বলিরেখা বলিল বলিলাম বলিলি বলিলে বলিলেন বলিলেন্ত বলিষ্ঠ বলিস বলিসনি বলিহার বলিহারি বলিয়া বলিয়াছ বলিয়াছি বলিয়াছিল বলিয়াছিলাম বলিয়াছিলি বলিয়াছিলে বলিয়াছিলেন বলিয়াছিস বলিয়াছে বলিয়াছেন বলিয়ান বলিয়ে বুলিয়ে বলিয়েকইয়ে বলিয়েকহিয়ে বলিয়েছ বুলিয়েছ বলিয়েছি বুলিয়েছি বলিয়েছিল বুলিয়েছিল বলিয়েছিলাম বুলিয়েছিলাম বলিয়েছিলি বুলিয়েছিলি বলিয়েছিলে বুলিয়েছিলে বলিয়েছিলেন বুলিয়েছিলেন বলিয়েছিলেম বুলিয়েছিলেম বলিয়েছিলুম বুলিয়েছিলুম বলিয়েছিস বুলিয়েছিস বলিয়েছে বুলিয়েছে বলিয়েছেন বুলিয়েছেন বলিয়ো বুলিয়ো বলী বলীক বুলচ্ছ বুলচ্ছি বুলচ্ছিল বুলচ্ছিলাম বুলচ্ছিলি বুলচ্ছিলে বুলচ্ছিলেন বুলচ্ছিলেম বুলচ্ছিলুম বুলচ্ছিস বুলচ্ছে বুলচ্ছেন বলীন্দ্র বলীবর্দ বলীরেখা বলীয়ান বলীয়সী বলে বুলে বলেআসা বলেই বলেইছি বলেইছেন বলেকয়ে বলেছ বলেছি বলেছিল বলেছিলাম বলেছিলি বলেছিলে বলেছিলেন বলেছিলেম বলেছিলুম বলেছিস বলেছে বলেছেন ব্লেজার বুলেট বুলেটেড বুলেটপ্রুফ ব্লেড ব্লেডযুক্ত বলেন বলেনা বলেনি ব্লেন্ডার বলেননি বলেরাখা বলোনি বলছ বলৌকা বলছি বলছিনা বলছিল বলছিলাম বলছিলি বলছিলে বলছিলেন বলছিলেম বলছিলুম বলছিস বলছে বলছেন বলছেনা বলজনিত বলটু বল্য বল্টু ব্ল্যাংক ব্ল্যাক ব্ল্যাকবার্ন ব্ল্যাকবোর্ড ব্লটিং ব্লটিংপেপার বুলডগ বলত বুলত বলৎকার বলতা বলতাত্ত্বিক বলতাম বুলতাম বলতি বলতিস বুলতিস বলতে বুলতে বলতেছ বলতেছি বলতেন বুলতেন বলতেম বুলতেম বলতো বলতুম বুলতুম বলদ বলদায়ক বলদেব বলদৃপ্ত বলদর্পিত বলন বলুন বুলন বলনাচ বলনামক বলনি বলনিসূদন বলনী বলনে বুলনো বুলন্দ বুলন্দনসিব বলপেন বলপূর্বক বলপ্রয়োগ বলপ্রয়োগহীন বলপয়েন্ট ব্লুফিল্ম বলব বুলব ব্লুবুক বলবা বলবান বলবার বুলবার বলবি বুলবি বলবিজ্ঞান বলবিজ্ঞানী বলবিদ্যা বলবিন্যাস বলবে বুলবে বলবেন বুলবেন বলবৈজ্ঞানিক বলবো বুলবো বলবত বলবতী বলবত্তা বলবুদ্ধিহীন বুলবন বলবন্ত বলবর্ধক বলবর্ধন বুলবুল বুলবুলি বুলবুলিস্তান বলভি বলভী বলভদ্র বুলভরি বলভরসা বল্মিক বল্মীক বলরাম বলরেখা বলল বুলল বল্লুকা বল্লকী বল্লা বললাম বুললাম বল্লার বল্লারচাক বল্লালী বল্লালীবালাই বললি বল্লি বুললি বল্লিতনু বল্লিবিতান বল্লী বল্লীতনু বল্লীবিতান বললে বুললে বললেন বুললেন বললেম বুললেম বললের বললেল বল্লব বল্লবী বল্লভ বল্লভা বললুম বল্লম বুললুম বল্লুর বল্লূর বল্লরি বল্লরী বলশালিতা বলশালিনী বলশালী বলশেভিক বলসেভিক বলসঞ্চার বলসঞ্চালন বলস্থিতি বলহীন বলহীনা বলহীনতা বলহেতু বলয় বুলয় বলয়কাল বলয়গ্রাস বলয়া বলয়াকার বলয়াকৃতি বলয়িত বলয়যুক্ত বলয়হীন বশ বশংগত বশংবদ বশকারী বশিতা বশিত্ব বশিত্বযোগ বশিষ্ঠ বশিষ্ঠপত্নী বশিষ্ঠমুনি বশী বশীকৃত বশীকৃতা বশীকরণ বশীকরণাদি বৃশ্চিক বৃশ্চিকদংশন বৃশ্চিকরাশি বশীভূত বশীভূতা বশীভবন বশ্য বশ্যা বশ্যতা বশত বশতা বশবর্তিতা বশবর্তিনী বশবর্তী বুশম্যান বৃষ বৃষকাষ্ঠ বৃষালী বৃষোৎসর্গ বৃষ্য বৃষ্যা বৃষ্টি বৃষ্টিক্লান্ত বৃষ্টিজল বৃষ্টিথামা বৃষ্টিধারা বৃষ্টিপাত বৃষ্টিপ্রেমী বৃষ্টিবাদল বৃষ্টিবিন্দু বৃষ্টিবহুল বৃষ্টিমানযন্ত্র বৃষ্টিমাপক বৃষ্টিস্নাত বৃষ্টিহীন বৃষ্ণি বৃষ্ণিবংশীয় বৃষধ্বজ বৃষবাহন বৃষরাশি বৃষল বৃষস্কন্ধ বস বসু বৃস বসুকীট বসা বুসা বসাই বসাইও বসাইত বসাইতাম বসাইতিস বসাইতে বসাইতেছ বসাইতেছি বসাইতেছিল বসাইতেছিলাম বসাইতেছিলি বসাইতেছিলে বসাইতেছিলেন বসাইতেছিস বসাইতেছে বসাইতেছেন বসাইতেন বসাইব বসাইবার বসাইবি বসাইবে বসাইবেন বসাইল বসাইলা বসাইলাম বসাইলি বসাইলে বসাইলেন বসাইয়া বসাইয়াছ বসাইয়াছি বসাইয়াছিল বসাইয়াছিলাম বসাইয়াছিলি বসাইয়াছিলে বসাইয়াছিলেন বসাইয়াছিস বসাইয়াছে বসাইয়াছেন বসাইয়ো বসাক বসাচ্ছ বসাচ্ছি বসাচ্ছিল বসাচ্ছিলাম বসাচ্ছিলি বসাচ্ছিলে বসাচ্ছিলেন বসাচ্ছিলেম বসাচ্ছিলুম বসাচ্ছিস বসাচ্ছে বসাচ্ছেন বসাত বসাতাম বসাতিস বসাতে বসাতেন বসাতেম বসাতুম বসান বুসান বসানো বসাব বসাবার বসাবি বসাবে বসাবেন বসাবো বসামাত্র বসার বসাল বসালাম বসালি বসালে বসালেন বসালেম বসালুম বসাস বসায় বসায়ল বসি বসিত বসিতাম বসিতিস বসিতে বসিতেছ বসিতেছি বসিতেছিল বসিতেছিলাম বসিতেছিলি বসিতেছিলে বসিতেছিলেন বসিতেছিস বসিতেছে বসিতেছেন বসিতেন বসিধ বসিনি বসিব বসিবার বসিবি বসিবে বসিবেন বসিল বসিলাম বসিলি বসিলে বসিলেন বসিষ্ঠ বসিস বসিয়া বসিয়াছ বসিয়াছি বসিয়াছিল বসিয়াছিলাম বসিয়াছিলি বসিয়াছিলে বসিয়াছিলেন বসিয়াছিস বসিয়াছে বসিয়াছেন বসিয়ে বসিয়েছ বসিয়েছি বসিয়েছিল বসিয়েছিলাম বসিয়েছিলি বসিয়েছিলে বসিয়েছিলেন বসিয়েছিলেম বসিয়েছিলুম বসিয়েছিস বসিয়েছে বসিয়েছেন বসিয়ো বসে বসেছ বসেছি বসেছিল বসেছিলাম বসেছিলি বসেছিলে বসেছিলেন বসেছিলেম বসেছিলুম বসেছিস বসেছে বসেছেন বসেথাকা বসেন বসেনি বসেবসে বসছ বসছি বসছিল বসছিলাম বসছিলি বসছিলে বসছিলেন বসছিলেম বসছিলুম বসছিস বসছে বসছেন বসত বস্তু বস্তুকায়া বস্তুকণা বস্তুগত বস্তুগত্যা বস্তা বুস্তাঁ বস্তান বুস্তান বস্তানি বস্তানী বস্তাপচা বস্তাবন্দী বসতাম বসতি বস্তি বস্তিঘর বস্তিবাসী বসতিস্থাপক বসতী বস্তী বসতে বসতেন বসতেম বসতো বস্তুজগৎ বসতজমি বস্তুত বস্তুতান্ত্রিক বস্তুতান্ত্রিকতা বস্তুতত্ত্ব বস্তুতন্ত্র বস্তুতন্ত্রী বস্তুতন্ত্রীয় বস্তুতন্ত্রবাদী বস্তুতপক্ষে বস্তুদ্বয় বস্তুনিষ্ঠ বস্তুনিষ্ঠা বস্তুপিণ্ড বস্তুপ্রকৃতি বস্তুপরিমাণ বস্তুবাচক বসতবাটি বস্তুবাদ বস্তুবাদী বসতবাড়ি বস্তুবিচার বস্তুবিজ্ঞান বস্তব্য বস্তুভিত্তিক বসতুম বস্তুমান বস্ত্র বস্ত্রকুট্টিম বস্ত্রখণ্ড বস্ত্রগৃহ বস্ত্রাঞ্চল বস্ত্রাদি বস্ত্রাদিনির্মিত বস্ত্রাবাস বস্ত্রাবৃত বস্ত্রালয় বস্ত্রদান বস্ত্রপ্রতিমন্ত্রী বস্ত্রবয়ন বস্ত্ররঞ্জন বস্ত্রশিল্প বস্ত্রহীন বস্ত্রহরণ বস্তুসংক্ষেপ বস্তুসংগ্রহ বস্তুসম্পর্কহীন বস্তুহানি বস্তুহীন বসুদেব বসুধা বসুধারা বসন বসুন বসনখানি বসনাঞ্চল বসনিয়া বসন্ত বসন্তঋতু বসন্তকাল বসন্তকালীন বসন্তকুমারী বসন্তী বসন্তীরঙ বসন্তেরকোকিল বসন্তোৎসব বসন্ততিলক বসন্তদিন বসন্তদূত বসন্তদূতী বসন্তপঞ্চমী বসন্তবাউরি বসন্তবাহার বসন্তবায়ু বসন্তবিষুবন বসন্তবিহার বসন্তবৌরি বসন্তমুখারি বসন্তরাগ বসন্তরোগ বসন্তসখ বসন্তসখা বসুন্ধর বসুন্ধরা বসুন্ধরাগ্রুপ বসুনন্দিত বসনপ্রান্ত বসনভূষণ বসনহীন বসফোড়া বসব বসবানা বসবার বসবাস বসবাসকারী বসবাসযোগ্য বসবাসরত বসবি বসুবিহার বসবে বসবেন বসবো বসুমাতা বসুমতী বসুর বসরা বসল বসলাম বসলি বসলে বসলেন বসলেম বসলো বসলুম বসয় বহ বহু বহুকাল বহুকালব্যাপী বহুকেলে বহুকোটি বহুকোষী বহুকোষীয় বহুকোষীয়তা বহুকৌশল বহুক্ষেত্রিক বহুক্ষেত্রে বহুকষ্ট বহুক্ষণ বহুগামিতা বহুগুণ বহা বহাঅ বহাই বহাইত বহাইতাম বহাইতিস বহাইতে বহাইতেছ বহাইতেছি বহাইতেছিল বহাইতেছিলাম বহাইতেছিলি বহাইতেছিলে বহাইতেছিলেন বহাইতেছিস বহাইতেছে বহাইতেছেন বহাইতেন বহাইব বহাইবার বহাইবি বহাইবে বহাইবেন বহাইল বহাইলাম বহাইলি বহাইলে বহাইলেন বহাইয়া বহাইয়াছ বহাইয়াছি বহাইয়াছিল বহাইয়াছিলাম বহাইয়াছিলি বহাইয়াছিলে বহাইয়াছিলেন বহাইয়াছিস বহাইয়াছে বহাইয়াছেন বহাইয়ো বহাএ বহাক বহান বহানো বহাল বহালকারী বহালি বহালতবিয়ত বহাস বহায় বহায়িআঁ বহায়িলোঁ বহি বহিঃ বহিঃকেন্দ্রিক বহিঃকোষীয় বহিঃক্ষেপক বহিঃক্ষরা বহিঃপ্রকাশ বহিঃপ্রাচীর বহিঃপরিচ্ছদ বহিঃরঙ্গ বহিঃশত্রু বহিঃশুল্ক বহিঃসংগঠন বহিঃসংযোগ বহিঃসৌর বহিঃসূত্র বহিঃস্থ বহিঃস্থিত বহিঃস্ফোটক বহিঃস্ফোটী বহিঃস্ফোটন বহিঃস্বরচ্ছেদ বহিঃসমুদ্র বহিছে বহিত বুহিত বহিতাম বহিতিস বহিতে বহিতেছ বহিতেছি বহিতেছিল বহিতেছিলাম বহিতেছিলি বহিতেছিলে বহিতেছিলেন বহিতেছিস বহিতেছে বহিতেছেন বহিতেন বহিত্র বহিন বহিনঝি বহিনপো বহিব বহিবার বহিবি বহিবে বহিবেন বহিভেঁ বহির্গামী বহির্গত বহির্গতা বহির্গমন বহিরঙ্গ বহিরাংশ বহিরাক্রমণ বহিরাগত বহিরাগমন বহিরাবরণ বহিরিন্দ্রিয় বহির্চাপ বহির্জগত বহির্জগৎ বহির্জগতে বহির্জাগতিক বহির্দেশ বহির্দেশস্থ বহির্দ্বার বহির্বাটী বহির্বাণিজ্য বহির্বাস বহির্বিন্যাস বহির্বিভাগ বহির্বিশ্ব বহির্বিষয় বহির্ভাগ বহির্ভাষাবিজ্ঞান বহির্ভূত বহির্ভূতভাবে বহির্ভবন বহির্মুখ বহির্মুখা বহির্মুখী বহির্লোক বহির্সংযোগ বহিল বহিলাঁ বহিলাম বহিলি বহিলে বহিলেন বহিশ্চর বহিশুল্ক বহিষ্কার বহিষ্কারাদেশ বহিষ্কৃত বহিষ্ক্রান্ত বহিষ্করণ বহিস বহিস্থ বহিয়া বহিয়াছ বহিয়াছি বহিয়াছিল বহিয়াছিলাম বহিয়াছিলি বহিয়াছিলে বহিয়াছিলেন বহিয়াছিস বহিয়াছে বহিয়াছেন বহিয়ো বহী বহুচক্রী বহুচ্ছিদ্রময় বহুচলক বহে বহেন বহেড়া বহোঁ বহুছিদ্রযুক্ত বহুজাতিক বহুজ্ঞ বহুজন বহুযুগ বহুটাকা বহুযোজী বহত বহুত বৃহৎ বৃহৎগ্রহ বৃহৎঘটনাপঞ্জি বহতা বহুতা বহুতারা বৃহতী বৃহত্তম বৃহত্তমা বৃহত্তর বৃহত্তরভাবে বহুতন্ত্র বহুত্ব বহুত্বক বৃহৎবিস্ফোরণ বহুত্ববাদী বহুত্ববোধক বহুতর বহুত্র বহুতল বহুতলক বৃহদাংশ বৃহদাকার বৃহদাকৃতি বৃহদান্ত্র বৃহদায়তন বহুদিক বহুদিন বহুদোষ বহুদূর বহুদূরগামী বহুদূরব্যাপী বহুদূরবর্তী বহুদর্শিতা বহুদর্শিনী বহুদর্শী বহুদর্শন বহুদল বহুদলীয় বহুধা বহুধার বহুধার্মিক বহন বহুন বহনকারী বহনক্ষমতা বহুনি বহ্নি বহ্নিকোণ বহ্নিগর্ভা বহ্নিজ্বালা বহ্নিবিবিক্ষু বহ্নিভোগ্য বহ্নিমুখ বহ্নিমান বহ্নিমিত্র বহ্নিমন্থ বহ্নিশিখা বহ্নিসংস্কার বহ্নিসখ বহ্নিসখা বহুনী বহনীয় বহনযোগ্য বহনযোগ্যতা বহুপাক্ষিক বহুপত্নীক বহুপদ বহুপদী বহুপদীয় বহুপ্রকার বহুপরিমাণ বহুপ্রচলিত বহুপুরোনো বহুপ্রজ বহুপর্ণা বহুপ্রতিসম বহুপ্রতীক্ষিত বহুপ্রসবিনী বহুপল্লবিত বহুপুষ্প বহুবাচক বহুবার বহ্বারম্ভ বহ্বাশী বহ্বাস্ফোট বহ্বাড়ম্বর বহুবিচিত্র বহুবিৎ বহুবিদ বহুবিধ বহুবিবাহ বহুবিস্তীর্ণ বহুবিস্তৃত বহুবীজ বহুবচন বহুবচনাত্মক বহুবেত্তা বহুবোধক বহুবোধকতা বহুবছর বহুব্যয়ী বহুব্রীহি বহুব্রীহিসমাস বহুবর্ষজীবী বহুবল বহুবল্লভ বহুবল্লভা বহুভঙ্গিম বহুভাগ বহুভাগী বহুভাগ্য বহুভাবে বহুভাষাবিদ বহুভাষিণী বহুভাষী বহুভেক্টর বহুভোজী বহুভুজ বহুমুখ বহুমুখী বহুমুখীকরণ বহুমাত্রিক বহমান বহুমান বহমানা বহুমানাস্পদ বহুমার্গ বহুমঞ্জরি বহুমত বহুমূত্র বহুমূর্তি বহুমূল বহুমূলক বহুমূল্য বহর বহুরকম বহুরাত বহুরাশিক বহরি বহরে বহুরৈখিক বহুরন্ধ্র বহুরূপ বহুরূপী বহুরূপীয়া বহুরূপতা বহরমপুর বহল বহুল বহুলা বহুলাংশ বহুলালোচিত বহলি বহুলীকৃত বহুলীকরণ বহুলোক বহুলোকপূর্ণ বহুলতা বহুলত্ব বহুলপ্রচলিত বহুলব্যবহৃত বহুলভাবে বহুশ বহুশক্র বহুশাখ বহুশাব্দিক বহুশাস্ত্রজ্ঞ বহুশিখ বহুশ্রুত বহস বহুসংখ্যক বহসি বহুস্ত্রীক বহুসন্ততি বৃহস্পতি বৃহস্পতিগ্রহ বৃহস্পতিবার বহুস্বামিক বহুসহস্র বহুড়ি বহুড়ী বহয়ে বড় বড়ু বুড় বড়আম্মা বড়ই বড়ুই বুড়ই বড়ঈ বড়একটা বড়ওয়াদা বুড়ক বড়কাটরা বড়কুটুম বড়কুটুম্ব বড়কুঠি বড়কথা বড়করা বড়কর্তা বড়গাছ বড়গলা বড়গল্প বড়া বুড়া বুড়াআঙ্গুল বড়াই বুড়াই বুড়াইও বড়াইকারী বুড়াইত বুড়াইতাম বুড়াইতিস বুড়াইতে বুড়াইতেছ বুড়াইতেছি বুড়াইতেছিল বুড়াইতেছিলাম বুড়াইতেছিলি বুড়াইতেছিলে বুড়াইতেছিলেন বুড়াইতেছিস বুড়াইতেছে বুড়াইতেছেন বুড়াইতেন বুড়াইব বুড়াইবার বুড়াইবি বুড়াইবে বুড়াইবেন বড়াইবুড়ি বুড়াইল বুড়াইলাম বুড়াইলি বুড়াইলে বুড়াইলেন বুড়াইয়া বুড়াইয়াছ বুড়াইয়াছি বুড়াইয়াছিল বুড়াইয়াছিলাম বুড়াইয়াছিলি বুড়াইয়াছিলে বুড়াইয়াছিলেন বুড়াইয়াছিস বুড়াইয়াছে বুড়াইয়াছেন বুড়াইয়ো বুড়াক বুড়াটে বুড়ান বুড়ানো বুড়াপনা বড়াভাজা বুড়ামি বুড়ামো বড়াল বুড়াস বড়ায়ি বড়ায়ী বড়ি বুড়ি বুড়িকিয়া বড়িখাড়া বুড়িগঙ্গা বড়িশপ্রায় বুড়িশ্বর বড়িয়া বুড়িয়ে বুড়িয়েছ বুড়িয়েছি বুড়িয়েছিল বুড়িয়েছিলাম বুড়িয়েছিলি বুড়িয়েছিলে বুড়িয়েছিলেন বুড়িয়েছিলেম বুড়িয়েছিলুম বুড়িয়েছিস বুড়িয়েছে বুড়িয়েছেন বুড়িয়ো বড়ী বুড়ী বড়চাল বুড়চ্ছ বুড়চ্ছি বুড়চ্ছিল বুড়চ্ছিলাম বুড়চ্ছিলি বুড়চ্ছিলে বুড়চ্ছিলেন বুড়চ্ছিলেম বুড়চ্ছিলুম বুড়চ্ছিস বুড়চ্ছে বুড়চ্ছেন বড়ে বুড়ে বুড়েছে বড়েরচাল বড়ো বুড়ো বুড়োআঙুল বড়োএকটা বড়োজোর বুড়োটে বুড়োধাড়ি বুড়োন বুড়োনো বুড়োপনা বড়োমানুষ বড়োমানষি বড়োমানুষি বুড়োমি বুড়োমো বুড়োর বড়োলাট বড়োলোক বড়োলোকি বড়োসাহেব বুড়োহাবড়া বুড়োহাড় বড়ছেলে বড়ছোট বড়জোর বড়জোড়া বুড়ুটে বড়ঠাকুর বুড়ত বুড়তাম বড়তামাক বুড়তিস বুড়তে বুড়তেন বুড়তেম বড়ত্ব বুড়তুম বড়তরফ বড়দা বড়দাদা বড়দারোগা বড়দি বড়দিদি বড়দিন বড়দেখা বড়দর বুড়ন বুড়নো বড়পাত্র বড়পেট বড়পরিবার বড়পর্দা বড়ফট্টাই বুড়ব বুড়বক বড়বা বড়বাগ্নি বড়বাজার বড়বানল বড়বাবু বড়বার বুড়বার বড়বাড়ি বড়বি বুড়বি বুড়বে বুড়বেন বড়বেলা বুড়বো বড়বোন বড়বড় বড়বড়ানি বড়বড়ানো বুড়বুড়ি বড়বড়িয়া বড়বড়ে বড়ভাই বড়মুখ বড়মা বড়মাঠ বড়মাত্রা বড়মানুষ বড়মানষি বড়মানুষি বড়মানুষিয়ানা বড়মামা বুড়মি বড়মিঞা বুড়মো বড়মন বড়রা বুড়ল বড়লাট বুড়লাম বুড়লি বুড়লে বড়লেখা বুড়লেন বুড়লেম বড়লোক বড়লোকি বুড়লুম বড়শি বঁড়শি বড়শিগাঁথা বড়শিযন্ত্র বড়শী বঁড়শী বুড়স বড়সাহেব বড়সড় বড়হাজরি বড়হুজুর বড়হর বুড়য় বড়ুয়া বড়য়ি বয় বয়ঃকনিষ্ঠ বয়ঃক্রম বয়ঃক্রমিক বয়ঃগোষ্ঠী বয়ঃপ্রাপ্ত বয়ঃপ্রাপ্তা বয়ঃপ্রাপ্তি বয়ঃভিত্তিক বয়ঃস্থ বয়ঃস্থা বয়ঃসন্ধি বয়ঃসন্ধিকাল বয়ঃসন্ধিস্থল বয়কট বয়া বুয়া বয়াটে বয়াত বয়াতি বয়ান বয়াম বয়ার বয়ে বয়েছ বয়েছি বয়েছিল বয়েছিলাম বয়েছিলি বয়েছিলে বয়েছিলেন বয়েছিলেম বয়েছিলুম বয়েছিস বয়েছে বয়েছেন বয়েজ বুয়েট বয়েত বয়েদ বয়েম বয়েল বয়েলগাড়ি বয়েস বয়ো বয়োকনিষ্ঠ বয়োগুণ বয়োজীর্ণ বয়োজ্যেষ্ঠ বয়োধিক বয়োধিকা বয়োধর্ম বয়োবৃদ্ধ বয়োবৃদ্ধা বয়োবৃদ্ধি বয়োব্রণ বয়জা বয়দা বয়ন বয়নকার্য বয়নকৌশল বয়নাক্কা বয়নামা বয়নী বয়নযন্ত্র বয়নশিল্প বয়রা বয়ল বয়লা বয়লার বয়স বয়স্ক বয়স্কা বয়স্কাউট বয়স্কাউটিং বয়সকাল বয়স্কপাঠ্য বয়স্কশিক্ষা বয়স্কসেবিত বয়সগত বয়সা বয়সিনী বয়সী বয়সোচিত বয়স্য বয়সযুক্ত বয়স্যা বয়স্থ বয়স্থা বয়সপ্রাপ্ত বয়সফোড়া বয়স্বী বয়ড়া".split(" "),
              w_bh: "ভ ভঁ ভংত ভঅ ভঅল ভআ ভআঁ ভুঁই ভুঁইকদম ভুঁইকুমড়া ভুঁইকুমড়ো ভুইগলামি ভুঁইচাপা ভুইঞা ভইন ভইনী ভুঁইফোড় ভুঁইফোঁড় ভুঁইফোড়া ভুঁইমালী ভইল ভুইলা ভইলী ভইষ ভঁইষ ভইষা ভঁইষা ভইস ভঁইস ভইসা ভঁইসা ভুঁইয়া ভূঁইয়া ভএল ভুও ভওয়া ভক ভুক ভূকক্ষ ভকা ভুকা ভুঁকা ভকিল ভূকেন্দ্র ভূকেন্দ্রাভিমুখ ভূকেন্দ্রিক ভৃকুটি ভৃকুটী ভকত ভক্ত ভুক্ত ভক্তগোষ্ঠী ভক্তাগ্রগণ্য ভক্তাধীন ভুক্তাবশিষ্ট ভুক্তাবশেষ ভকতি ভক্তি ভুক্তি ভক্তিগীতি ভক্তিগ্রন্থ ভক্তিচিহ্ন ভক্তিচটা ভক্তিযুক্ত ভক্তিযোগ ভক্তিতত্ত্ব ভক্তিপথ ভক্তিবাদ ভক্তিবিহ্বল ভক্তিবিহ্বলতা ভক্তিবল ভক্তিভাজন ভক্তিভাব ভক্তিভরে ভক্তিমান ভক্তিমার্গ ভক্তিমিশ্রিত ভক্তিমতী ভক্তিরস ভক্তিসহকারে ভক্তিহীন ভক্তিহীনতা ভুক্তদ্রব্য ভক্তদল ভুক্তন ভুক্তপূর্ব ভক্তবাঞ্ছাকল্পতরু ভক্তবিটেল ভক্তবৎসল ভুক্তভোগী ভক্তশ্রেণী ভক্তশ্রেষ্ঠ ভক্তহৃদয় ভুকপিয়াস ভকভক ভুকভুক ভূকম্প ভূকম্পীয় ভূকম্পন ভূকম্পনবিজ্ঞান ভূকম্পনবিদ্যা ভক্ষ ভক্ষক ভক্ষিত ভক্ষ্য ভক্ষ্যাবশেষ ভক্ষ্যাভক্ষ্য ভক্ষ্যসামগ্রী ভক্ষণ ভক্ষণকারিণী ভক্ষণকারী ভক্ষণীয় ভক্ষদ্রব্য ভুখ ভখা ভুখা ভুখামিছিল ভুখালু ভুখিল ভূখণ্ড ভূখন ভুখমিছিল ভুখল ভুখলি ভগ ভুগ ভৃগু ভুগক ভুগুক ভুগা ভুগাই ভুগাইও ভুগাইত ভুগাইতাম ভুগাইতিস ভুগাইতে ভুগাইতেছ ভুগাইতেছি ভুগাইতেছিল ভুগাইতেছিলাম ভুগাইতেছিলি ভুগাইতেছিলে ভুগাইতেছিলেন ভুগাইতেছিস ভুগাইতেছে ভুগাইতেছেন ভুগাইতেন ভুগাইব ভুগাইবার ভুগাইবি ভুগাইবে ভুগাইবেন ভুগাইল ভুগাইলাম ভুগাইলি ভুগাইলে ভুগাইলেন ভুগাইয়া ভুগাইয়াছ ভুগাইয়াছি ভুগাইয়াছিল ভুগাইয়াছিলাম ভুগাইয়াছিলি ভুগাইয়াছিলে ভুগাইয়াছিলেন ভুগাইয়াছিস ভুগাইয়াছে ভুগাইয়াছেন ভুগাইয়ো ভুগাক ভগাঙ্কুর ভূগাঠনিক ভুগান ভুগানো ভুগাস ভুগায় ভুগি ভুগিত ভুগিতাম ভুগিতিস ভুগিতে ভুগিতেছ ভুগিতেছি ভুগিতেছিল ভুগিতেছিলাম ভুগিতেছিলি ভুগিতেছিলে ভুগিতেছিলেন ভুগিতেছিস ভুগিতেছে ভুগিতেছেন ভুগিতেন ভগিনী ভগিনীপতি ভুগিব ভুগিবার ভুগিবি ভুগিবে ভুগিবেন ভুগিল ভুগিলাম ভুগিলি ভুগিলে ভুগিলেন ভুগিস ভুগিয়া ভুগিয়াছ ভুগিয়াছি ভুগিয়াছিল ভুগিয়াছিলাম ভুগিয়াছিলি ভুগিয়াছিলে ভুগিয়াছিলেন ভুগিয়াছিস ভুগিয়াছে ভুগিয়াছেন ভুগিয়ে ভুগিয়েছ ভুগিয়েছি ভুগিয়েছিল ভুগিয়েছিলাম ভুগিয়েছিলি ভুগিয়েছিলে ভুগিয়েছিলেন ভুগিয়েছিলেম ভুগিয়েছিলুম ভুগিয়েছিস ভুগিয়েছে ভুগিয়েছেন ভুগিয়ো ভুগচ্ছ ভুগচ্ছি ভুগচ্ছিল ভুগচ্ছিলাম ভুগচ্ছিলি ভুগচ্ছিলে ভুগচ্ছিলেন ভুগচ্ছিলেম ভুগচ্ছিলুম ভুগচ্ছিস ভুগচ্ছে ভুগচ্ছেন ভগীরথ ভুগে ভুগেছ ভুগেছি ভুগেছিল ভুগেছিলাম ভুগেছিলি ভুগেছিলে ভুগেছিলেন ভুগেছিলেম ভুগেছিলুম ভুগেছিস ভুগেছে ভুগেছেন ভুগেন ভুগো ভগোল ভূগোল ভূগোলবিদ ভূগোলবিদ্যা ভুগছ ভুগছি ভুগছিল ভুগছিলাম ভুগছিলি ভুগছিলে ভুগছিলেন ভুগছিলেম ভুগছিলুম ভুগছিস ভুগছে ভুগছেন ভূগঠন ভূগঠনপ্রণালী ভগণ ভুগত ভুগতাম ভুগুতি ভুগতিস ভুগতে ভুগতেন ভুগতেম ভুগতুম ভৃগুদেশ ভগ্ন ভুগন ভুগুন ভুগ্ন ভগ্নকণ্ঠ ভগ্নগৃহ ভগ্নাংশ ভগ্নাঙ্ক ভগ্নাবশিষ্ট ভগ্নাবশেষ ভগ্নাবস্থা ভগ্নি ভগ্নী ভগ্নচিত্ত ভগ্নীপতি ভুগনো ভগ্নোৎসাহ ভগ্নোদ্যম ভগ্নদেহ ভগ্নদূত ভগন্দর ভগ্নদর্প ভগ্নদশা ভগ্নপাইক ভগ্নপাত্র ভগ্নপ্রাসাদ ভগ্নপ্রায় ভগ্নপৃষ্ঠ ভগ্নমনোরথ ভগ্নমনস্ক ভগ্নশ্রী ভগ্নসৌধ ভগ্নস্তূপ ভগ্নস্বর ভগ্নহৃদয় ভৃগুপতি ভৃগুপতন ভৃগুপদচিহ্ন ভুগব ভৃগুবংশজাত ভগবান ভগবানচন্দ্র ভুগবার ভুগবি ভুগবে ভুগবেন ভুগবো ভগবৎ ভগবৎকৃপা ভগবতী ভগবদগীতা ভগবদদত্ত ভগবদ্ভক্ত ভগবদ্ভক্তি ভগবন ভৃগুমান ভৃগুর ভূগর্ভ ভূগর্ভস্থ ভুগল ভুগলাম ভুগলামি ভুগলি ভুগলে ভুগলেন ভুগলেম ভুগলুম ভুগস ভুগয় ভঙ্গ ভৃঙ্গ ভঙ্গকারী ভঙ্গকুলীন ভঙ্গা ভৃঙ্গার ভৃঙ্গারিকা ভঙ্গি ভৃঙ্গি ভঙ্গিযুক্ত ভঙ্গিম ভঙ্গিমা ভঙ্গিমাযুক্ত ভঙ্গিমান ভঙ্গিমাপূর্ণ ভঙ্গিল ভঙ্গিয়ান ভঙ্গী ভৃঙ্গী ভঙ্গ্য ভঙ্গ্যান ভৃঙ্গপ্রিয়া ভঙ্গপ্রবণ ভঙ্গপয়ার ভঙ্গুর ভৃঙ্গরাজ ভৃঙ্গরোল ভঙ্গুরতা ভা ভাং ভাংখোর ভাংচি ভাংচুর ভাংছে ভাংটা ভাংতি ভাংরা ভাই ভাইকিং ভাইকিংস ভাইঙ্গা ভাইজ ভাইজান ভাইঝি ভাইটাল ভাইপো ভাইফোঁটা ভাইবউ ভাইবা ভাইবেরাদর ভাইবোন ভাইবর্গ ভাইভাই ভাইর ভাইরা ভাইরাল ভাইরাস ভাইরাসঘটিত ভাইরাসজনিত ভাইস ভাইসা ভাইসচ্যান্সেলর ভাইসে ভাইসব ভাইসরয় ভাইয়া ভাইয়ে ভাইয়েভাইয়ে ভাউ ভাউজ ভাঁউরি ভাউলিয়া ভাউলে ভাও ভাঁওতা ভাঁওতাবাজ ভাঁওতাবাজি ভাওর ভাঁওর ভাঁওরা ভাঁওরানো ভাঁওরি ভাওলাদিয়া ভাওলি ভাওয়াইয়া ভাওয়াল ভাক ভাক্ত ভাখ ভাখা ভাখি ভাখী ভাগ ভাগউ ভাগুক ভাগকারী ভাগকরণ ভাগা ভাগাক ভাগাচ্ছ ভাগাচ্ছি ভাগাচ্ছিল ভাগাচ্ছিলাম ভাগাচ্ছিলি ভাগাচ্ছিলে ভাগাচ্ছিলেন ভাগাচ্ছিলেম ভাগাচ্ছিলুম ভাগাচ্ছিস ভাগাচ্ছে ভাগাচ্ছেন ভাগাত ভাগাতাম ভাগাতিস ভাগাতে ভাগাতেন ভাগাতেম ভাগাতুম ভাগান ভাগানো ভাগাব ভাগাবার ভাগাবি ভাগাবে ভাগাবেন ভাগাবো ভাগাভাগি ভাগার ভাগাল ভাগালাম ভাগালি ভাগালে ভাগালেন ভাগালেম ভাগালুম ভাগাস ভাগাড় ভাগি ভাগিত ভাগিতাম ভাগিতিস ভাগিতে ভাগিতেছ ভাগিতেছি ভাগিতেছিল ভাগিতেছিলাম ভাগিতেছিলি ভাগিতেছিলে ভাগিতেছিলেন ভাগিতেছিস ভাগিতেছে ভাগিতেছেন ভাগিতেন ভাগিদারী ভাঁগিন ভাগিনা ভাগিনী ভাগিনীপতি ভাগিনেয় ভাগিনেয়ী ভাগিব ভাগিবার ভাগিবি ভাগিবে ভাগিবেন ভাগিল ভাগিলাম ভাগিলি ভাগিলে ভাগিলেন ভাগিস ভাগিয়া ভাগিয়াছ ভাগিয়াছি ভাগিয়াছিল ভাগিয়াছিলাম ভাগিয়াছিলি ভাগিয়াছিলে ভাগিয়াছিলেন ভাগিয়াছিস ভাগিয়াছে ভাগিয়াছেন ভাগিয়ে ভাগিয়েছ ভাগিয়েছি ভাগিয়েছিল ভাগিয়েছিলাম ভাগিয়েছিলি ভাগিয়েছিলে ভাগিয়েছিলেন ভাগিয়েছিলেম ভাগিয়েছিলুম ভাগিয়েছিস ভাগিয়েছে ভাগিয়েছেন ভাগিয়ো ভাগী ভাগচাষী ভাগীদার ভাগীরথী ভাগেন ভাগেল ভাগছ ভাগছি ভাগছিল ভাগছিলাম ভাগছিলি ভাগছিলে ভাগছিলেন ভাগছিলেম ভাগছিলুম ভাগছিস ভাগছে ভাগছেন ভাগ্য ভাগ্যওয়ালা ভাগ্যক্রমে ভাগ্যগুণ ভাগ্যগণনা ভাগ্যাকাশ ভাগ্যান্বেষণ ভাগ্যায়ত্ত ভাগ্যি ভাগ্যিমান ভাগ্যিমানী ভাগ্যিস ভাগ্যচক্র ভাগ্যে ভাগযোগ্য ভাগযোগ্যতা ভাগ্যোদয় ভাগ্যদেবী ভাগ্যদেবতা ভাগ্যদোষ ভাগ্যদয় ভাগ্যধর ভাগ্যনির্দেশক ভাগ্যনিয়ন্তা ভাগ্যপরীক্ষা ভাগ্যফল ভাগ্যবান ভাগ্যবিচার ভাগ্যবিধাতা ভাগ্যবিধাত্রী ভাগ্যবিপর্যয় ভাগ্যবিমুখ ভাগ্যবতী ভাগ্যবন্ত ভাগ্যবল ভাগ্যবশে ভাগ্যবশত ভাগ্যমন্ত ভাগ্যরেখা ভাগ্যরূপ ভাগ্যলক্ষ্মী ভাগ্যলিখন ভাগ্যলিপি ভাগ্যলব্ধ ভাগ্যহীন ভাগ্যহীনা ভাগ্যহীনতা ভাগ্যহত ভাগ্যহতা ভাগত ভাগতাম ভাগতিস ভাগতে ভাগতেন ভাগতেম ভাগতুম ভাগধেয় ভাগুন ভাগনা ভাগ্নি ভাগনে ভাগ্নে ভাগ্নেভাগ্নি ভাগফল ভাগব ভাগবখরা ভাগবাটোয়ারা ভাগবার ভাগবি ভাগবে ভাগবেন ভাগবো ভাগবত ভাগবতোক্ত ভাগবতপুরাণ ভাগরা ভাগল ভাগলাম ভাগলি ভাগলে ভাগলেন ভাগলেম ভাগলপুর ভাগলুম ভাগশেষ ভাগহার ভাগহর ভাঙ ভাঙুক ভাঙ্গ ভাঙ্গুক ভাঙ্গখোর ভাঙ্গা ভাঙ্গাই ভাঙ্গাইও ভাঙ্গাইত ভাঙ্গাইতাম ভাঙ্গাইতিস ভাঙ্গাইতে ভাঙ্গাইতেছ ভাঙ্গাইতেছি ভাঙ্গাইতেছিল ভাঙ্গাইতেছিলাম ভাঙ্গাইতেছিলি ভাঙ্গাইতেছিলে ভাঙ্গাইতেছিলেন ভাঙ্গাইতেছিস ভাঙ্গাইতেছে ভাঙ্গাইতেছেন ভাঙ্গাইতেন ভাঙ্গাইব ভাঙ্গাইবার ভাঙ্গাইবি ভাঙ্গাইবে ভাঙ্গাইবেন ভাঙ্গাইল ভাঙ্গাইলাম ভাঙ্গাইলি ভাঙ্গাইলে ভাঙ্গাইলেন ভাঙ্গাইয়া ভাঙ্গাইয়াছ ভাঙ্গাইয়াছি ভাঙ্গাইয়াছিল ভাঙ্গাইয়াছিলাম ভাঙ্গাইয়াছিলি ভাঙ্গাইয়াছিলে ভাঙ্গাইয়াছিলেন ভাঙ্গাইয়াছিস ভাঙ্গাইয়াছে ভাঙ্গাইয়াছেন ভাঙ্গাইয়ো ভাঙ্গাক ভাঙ্গাগড়া ভাঙ্গাচোরা ভাঙ্গাচ্ছ ভাঙ্গাচ্ছি ভাঙ্গাচ্ছিল ভাঙ্গাচ্ছিলাম ভাঙ্গাচ্ছিলি ভাঙ্গাচ্ছিলে ভাঙ্গাচ্ছিলেন ভাঙ্গাচ্ছিলেম ভাঙ্গাচ্ছিলুম ভাঙ্গাচ্ছিস ভাঙ্গাচ্ছে ভাঙ্গাচ্ছেন ভাঙ্গাচুরা ভাঙ্গাত ভাঙ্গাতাম ভাঙ্গাতিস ভাঙ্গাতে ভাঙ্গাতেন ভাঙ্গাতেম ভাঙ্গাতুম ভাঙ্গান ভাঙ্গানি ভাঙ্গানে ভাঙ্গানো ভাঙ্গাব ভাঙ্গাবার ভাঙ্গাবি ভাঙ্গাবে ভাঙ্গাবেন ভাঙ্গাবো ভাঙ্গাভাঙ্গা ভাঙ্গাল ভাঙ্গালা ভাঙ্গালাম ভাঙ্গালি ভাঙ্গালে ভাঙ্গালেন ভাঙ্গালেম ভাঙ্গালুম ভাঙ্গাস ভাঙ্গি ভাঙ্গিত ভাঙ্গিতাম ভাঙ্গিতিস ভাঙ্গিতে ভাঙ্গিতেছ ভাঙ্গিতেছি ভাঙ্গিতেছিল ভাঙ্গিতেছিলাম ভাঙ্গিতেছিলি ভাঙ্গিতেছিলে ভাঙ্গিতেছিলেন ভাঙ্গিতেছিস ভাঙ্গিতেছে ভাঙ্গিতেছেন ভাঙ্গিতেন ভাঙ্গিব ভাঙ্গিবার ভাঙ্গিবি ভাঙ্গিবে ভাঙ্গিবেন ভাঙ্গিল ভাঙ্গিলাম ভাঙ্গিলি ভাঙ্গিলে ভাঙ্গিলেন ভাঙ্গিস ভাঙ্গিয়া ভাঙ্গিয়াছ ভাঙ্গিয়াছি ভাঙ্গিয়াছিল ভাঙ্গিয়াছিলাম ভাঙ্গিয়াছিলি ভাঙ্গিয়াছিলে ভাঙ্গিয়াছিলেন ভাঙ্গিয়াছিস ভাঙ্গিয়াছে ভাঙ্গিয়াছেন ভাঙ্গিয়ে ভাঙ্গিয়েছ ভাঙ্গিয়েছি ভাঙ্গিয়েছিল ভাঙ্গিয়েছিলাম ভাঙ্গিয়েছিলি ভাঙ্গিয়েছিলে ভাঙ্গিয়েছিলেন ভাঙ্গিয়েছিলেম ভাঙ্গিয়েছিলুম ভাঙ্গিয়েছিস ভাঙ্গিয়েছে ভাঙ্গিয়েছেন ভাঙ্গিয়ো ভাঙ্গচি ভাঙ্গে ভাঙ্গেন ভাঙ্গছ ভাঙ্গছি ভাঙ্গছিল ভাঙ্গছিলাম ভাঙ্গছিলি ভাঙ্গছিলে ভাঙ্গছিলেন ভাঙ্গছিলেম ভাঙ্গছিলুম ভাঙ্গছিস ভাঙ্গছে ভাঙ্গছেন ভাঙ্গটা ভাঙ্গত ভাঙ্গতাম ভাঙ্গতিস ভাঙ্গতে ভাঙ্গতেন ভাঙ্গতেম ভাঙ্গতুম ভাঙ্গন ভাঙ্গুন ভাঙ্গনের ভাঙ্গব ভাঙ্গবার ভাঙ্গবি ভাঙ্গবে ভাঙ্গবেন ভাঙ্গবো ভাঙ্গর ভাঙ্গুরা ভাঙ্গল ভাঙ্গলাম ভাঙ্গলি ভাঙ্গলে ভাঙ্গলেন ভাঙ্গলেম ভাঙ্গলুম ভাঙ্গড় ভাঙা ভাঙাই ভাঙাইও ভাঙাইত ভাঙাইতাম ভাঙাইতিস ভাঙাইতে ভাঙাইতেছ ভাঙাইতেছি ভাঙাইতেছিল ভাঙাইতেছিলাম ভাঙাইতেছিলি ভাঙাইতেছিলে ভাঙাইতেছিলেন ভাঙাইতেছিস ভাঙাইতেছে ভাঙাইতেছেন ভাঙাইতেন ভাঙাইব ভাঙাইবার ভাঙাইবি ভাঙাইবে ভাঙাইবেন ভাঙাইল ভাঙাইলাম ভাঙাইলি ভাঙাইলে ভাঙাইলেন ভাঙাইয়া ভাঙাইয়াছ ভাঙাইয়াছি ভাঙাইয়াছিল ভাঙাইয়াছিলাম ভাঙাইয়াছিলি ভাঙাইয়াছিলে ভাঙাইয়াছিলেন ভাঙাইয়াছিস ভাঙাইয়াছে ভাঙাইয়াছেন ভাঙাইয়ো ভাঙাও ভাঙাক ভাঙাগাছ ভাঙাগড়া ভাঙাচোরা ভাঙাচ্ছ ভাঙাচ্ছি ভাঙাচ্ছিল ভাঙাচ্ছিলাম ভাঙাচ্ছিলি ভাঙাচ্ছিলে ভাঙাচ্ছিলেন ভাঙাচ্ছিলেম ভাঙাচ্ছিলুম ভাঙাচ্ছিস ভাঙাচ্ছে ভাঙাচ্ছেন ভাঙাচুরা ভাঙাত ভাঙাতাম ভাঙাতিস ভাঙাতে ভাঙাতেন ভাঙাতেম ভাঙাতুম ভাঙান ভাঙানি ভাঙানে ভাঙানো ভাঙাব ভাঙাবুক ভাঙাবার ভাঙাবি ভাঙাবে ভাঙাবেন ভাঙাবো ভাঙাভাঙা ভাঙাল ভাঙালাম ভাঙালি ভাঙালে ভাঙালেন ভাঙালেম ভাঙালুম ভাঙাস ভাঙি ভাঙিছে ভাঙিত ভাঙিতাম ভাঙিতিস ভাঙিতে ভাঙিতেছ ভাঙিতেছি ভাঙিতেছিল ভাঙিতেছিলাম ভাঙিতেছিলি ভাঙিতেছিলে ভাঙিতেছিলেন ভাঙিতেছিস ভাঙিতেছে ভাঙিতেছেন ভাঙিতেন ভাঙিব ভাঙিবার ভাঙিবি ভাঙিবে ভাঙিবেন ভাঙিল ভাঙিলাম ভাঙিলি ভাঙিলে ভাঙিলেন ভাঙিস ভাঙিয়া ভাঙিয়াছ ভাঙিয়াছি ভাঙিয়াছিল ভাঙিয়াছিলাম ভাঙিয়াছিলি ভাঙিয়াছিলে ভাঙিয়াছিলেন ভাঙিয়াছিস ভাঙিয়াছে ভাঙিয়াছেন ভাঙিয়ে ভাঙিয়েছ ভাঙিয়েছি ভাঙিয়েছিল ভাঙিয়েছিলাম ভাঙিয়েছিলি ভাঙিয়েছিলে ভাঙিয়েছিলেন ভাঙিয়েছিলেম ভাঙিয়েছিলুম ভাঙিয়েছিস ভাঙিয়েছে ভাঙিয়েছেন ভাঙিয়ো ভাঙচি ভাঙচুর ভাঙে ভাঙেন ভাঙেনি ভাঙো ভাঙছ ভাঙছি ভাঙছিল ভাঙছিলাম ভাঙছিলি ভাঙছিলে ভাঙছিলেন ভাঙছিলেম ভাঙছিলুম ভাঙছিস ভাঙছে ভাঙছেন ভাঙটা ভাঙত ভাঙতাম ভাঙতিস ভাঙতে ভাঙতেন ভাঙতেম ভাঙতুম ভাঙন ভাঙুন ভাঙনা ভাঙনে ভাঙনধরা ভাঙব ভাঙবার ভাঙবি ভাঙবে ভাঙবেন ভাঙবো ভাঙর ভাঙরি ভাঙল ভাঙলাম ভাঙলি ভাঙলে ভাঙলেন ভাঙলেম ভাঙলুম ভাঙড় ভাজ ভাঁজ ভাজুং ভাজক ভাজুক ভাঁজুক ভাঁজকরা ভাজা ভাঁজা ভাজাং ভাজাভাজা ভাজাভুজা ভাজাভুজি ভাজি ভাঁজি ভাঁজিও ভাজিত ভাঁজিত ভাজিতাম ভাঁজিতাম ভাজিতিস ভাঁজিতিস ভাজিতে ভাঁজিতে ভাজিতেছ ভাঁজিতেছ ভাজিতেছি ভাঁজিতেছি ভাজিতেছিল ভাঁজিতেছিল ভাজিতেছিলাম ভাঁজিতেছিলাম ভাজিতেছিলি ভাঁজিতেছিলি ভাজিতেছিলে ভাঁজিতেছিলে ভাজিতেছিলেন ভাঁজিতেছিলেন ভাজিতেছিস ভাঁজিতেছিস ভাজিতেছে ভাঁজিতেছে ভাজিতেছেন ভাঁজিতেছেন ভাজিতেন ভাঁজিতেন ভাজিব ভাঁজিব ভাজিবার ভাঁজিবার ভাজিবি ভাঁজিবি ভাজিবে ভাঁজিবে ভাজিবেন ভাঁজিবেন ভাজিল ভাঁজিল ভাজিলাম ভাঁজিলাম ভাজিলি ভাঁজিলি ভাজিলে ভাঁজিলে ভাজিলেন ভাঁজিলেন ভাজিস ভাঁজিস ভাজিয়া ভাঁজিয়া ভাজিয়াছ ভাঁজিয়াছ ভাজিয়াছি ভাঁজিয়াছি ভাজিয়াছিল ভাঁজিয়াছিল ভাজিয়াছিলাম ভাঁজিয়াছিলাম ভাজিয়াছিলি ভাঁজিয়াছিলি ভাজিয়াছিলে ভাঁজিয়াছিলে ভাজিয়াছিলেন ভাঁজিয়াছিলেন ভাজিয়াছিস ভাঁজিয়াছিস ভাজিয়াছে ভাঁজিয়াছে ভাজিয়াছেন ভাঁজিয়াছেন ভাজিয়ো ভাঁজিয়ো ভাজেন ভাঁজেন ভাজছ ভাঁজছ ভাজছি ভাঁজছি ভাজছিল ভাঁজছিল ভাজছিলাম ভাঁজছিলাম ভাজছিলি ভাঁজছিলি ভাজছিলে ভাঁজছিলে ভাজছিলেন ভাঁজছিলেন ভাজছিলেম ভাঁজছিলেম ভাজছিলুম ভাঁজছিলুম ভাজছিস ভাঁজছিস ভাজছে ভাঁজছে ভাজছেন ভাঁজছেন ভাজ্য ভাজযুক্ত ভাঁজযুক্ত ভাজত ভাঁজত ভাজতাম ভাঁজতাম ভাজতিস ভাঁজতিস ভাজতে ভাঁজতে ভাজতেছে ভাজতেন ভাঁজতেন ভাজতেম ভাঁজতেম ভাজতুম ভাঁজতুম ভাজন ভাজুন ভাঁজুন ভাজনা ভাজনাখোলা ভাজব ভাঁজব ভাজবার ভাঁজবার ভাজবি ভাঁজবি ভাজবে ভাঁজবে ভাজবেন ভাঁজবেন ভাজবো ভাঁজবো ভাঁজভাঙা ভাজল ভাঁজল ভাজলাম ভাঁজলাম ভাজলি ভাঁজলি ভাজলে ভাঁজলে ভাজলেন ভাঁজলেন ভাজলেম ভাঁজলেম ভাজলুম ভাঁজলুম ভাঁজহীন ভাট ভাঁট ভাটক ভাটকবিতা ভাটা ভাঁটা ভাটানি ভাটানো ভাটালি ভাটি ভাঁটি ভাটিখানা ভাঁটিখানা ভাটিগাঙ ভাঁটিগাঙ ভাটিপড়া ভাঁটিপড়া ভাটিবেলা ভাঁটিবেলা ভাটিয়ারী ভাটিয়াল ভাটিয়ালি ভাটিয়ালী ভাট্টারি ভাঁটফুল ভাটশালিক ভাটুয়া ভাণ ভাণা ভাণিকা ভাণ্ড ভাণ্ডাগার ভাণ্ডানো ভাণ্ডার ভাণ্ডারকর ভাণ্ডারী ভাণ্ডি ভাণ্ডীর ভাণ্ডপুট ভাত ভাতগলা ভাতা ভাতার ভাতারকামড়া ভাতারখাকি ভাতারখাগি ভাতারি ভাতাসি ভাতি ভাতিজা ভাতিজি ভাতিজী ভাতেমারা ভাতৃজা ভাতজড়ানো ভাতডাল ভাতমাছ ভাতুড়িয়া ভাতুড়ে ভাদাল ভাদোই ভাদ্দর ভাদ্দুরে ভাদ্দরবউ ভাদ্দরমাস ভাদর ভাদ্র ভাদ্রআশ্বিন ভাদুরে ভাদ্রপদ ভাদ্রপদা ভাদ্রবউ ভাদ্রবৌ ভাদ্রবধূ ভাদ্রমাস ভাদ্রমাসীয় ভান ভানু ভানকারী ভানুকর ভানকরা ভানা ভানাকুটা ভানান ভানানি ভানানো ভানার ভানি ভানিত ভানিতাম ভানিতিস ভানিতে ভানিতেছ ভানিতেছি ভানিতেছিল ভানিতেছিলাম ভানিতেছিলি ভানিতেছিলে ভানিতেছিলেন ভানিতেছিস ভানিতেছে ভানিতেছেন ভানিতেন ভানিব ভানিবার ভানিবি ভানিবে ভানিবেন ভানিল ভানিলা ভানিলাম ভানিলি ভানিলে ভানিলেন ভানিস ভানিয়া ভানিয়াছ ভানিয়াছি ভানিয়াছিল ভানিয়াছিলাম ভানিয়াছিলি ভানিয়াছিলে ভানিয়াছিলেন ভানিয়াছিস ভানিয়াছে ভানিয়াছেন ভানিয়ো ভানে ভানেন ভানছ ভানছি ভানছিল ভানছিলাম ভানছিলি ভানছিলে ভানছিলেন ভানছিলেম ভানছিলুম ভানছিস ভানছে ভানছেন ভানত ভানতাম ভানতিস ভানতে ভান্তে ভানতেন ভানতেম ভানতুম ভানধারী ভানব ভানবার ভানুবার ভানবি ভানবে ভানবেন ভানবো ভানুমান ভানুমতী ভানল ভানলাম ভানলি ভানলে ভানলেন ভানলেম ভানলুম ভানুয়াটু ভাপ ভাপা ভাপানো ভাপরা ভাপসা ভাব ভাবঅনুযায়ী ভাবক ভাবুক ভাবকানি ভাবুকতা ভাবকরা ভাবগাম্ভীর্য ভাবগত ভাবগতিক ভাবগ্রাহী ভাবগর্ভ ভাবগ্রহ ভাবঘন ভাবা ভাবাই ভাবাইও ভাবাইত ভাবাইতাম ভাবাইতিস ভাবাইতে ভাবাইতেছ ভাবাইতেছি ভাবাইতেছিল ভাবাইতেছিলাম ভাবাইতেছিলি ভাবাইতেছিলে ভাবাইতেছিলেন ভাবাইতেছিস ভাবাইতেছে ভাবাইতেছেন ভাবাইতেন ভাবাইব ভাবাইবার ভাবাইবি ভাবাইবে ভাবাইবেন ভাবাইল ভাবাইলাম ভাবাইলি ভাবাইলে ভাবাইলেন ভাবাইয়া ভাবাইয়াছ ভাবাইয়াছি ভাবাইয়াছিল ভাবাইয়াছিলাম ভাবাইয়াছিলি ভাবাইয়াছিলে ভাবাইয়াছিলেন ভাবাইয়াছিস ভাবাইয়াছে ভাবাইয়াছেন ভাবাইয়ো ভাবাক ভাবাগোনা ভাবাচ্ছ ভাবাচ্ছি ভাবাচ্ছিল ভাবাচ্ছিলাম ভাবাচ্ছিলি ভাবাচ্ছিলে ভাবাচ্ছিলেন ভাবাচ্ছিলেম ভাবাচ্ছিলুম ভাবাচ্ছিস ভাবাচ্ছে ভাবাচ্ছেন ভাবাত ভাবাতাম ভাবাতিস ভাবাতে ভাবাতেন ভাবাতেম ভাবাতুম ভাবাত্মক ভাবাদর্শ ভাবান ভাবানুগ ভাবানো ভাবান্তর ভাবানুবাদ ভাবান্বিত ভাবানুষঙ্গ ভাবাপন্ন ভাবাব ভাবাবার ভাবাবি ভাবাবিষ্ট ভাবাবে ভাবাবেগ ভাবাবেগপূর্ণ ভাবাবেগবশত ভাবাবেন ভাবাবেশ ভাবাবো ভাবাভাস ভাবার্থ ভাবাল ভাবালু ভাবালাম ভাবালি ভাবালে ভাবালেন ভাবালেম ভাবালুতা ভাবালুম ভাবাশ্রয়ী ভাবাস ভাবি ভাবিক ভাবিছে ভাবিজি ভাবিজী ভাবিত ভাবিতাম ভাবিতিস ভাবিতে ভাবিতেছ ভাবিতেছি ভাবিতেছিল ভাবিতেছিলাম ভাবিতেছিলি ভাবিতেছিলে ভাবিতেছিলেন ভাবিতেছিস ভাবিতেছে ভাবিতেছেন ভাবিতেন ভাবিনি ভাবিনী ভাবিব ভাবিবার ভাবিবি ভাবিবে ভাবিবেন ভাবির ভাবিল ভাবিলাম ভাবিলি ভাবিলে ভাবিলেন ভাবিস ভাবিয়া ভাবিয়াছ ভাবিয়াছি ভাবিয়াছিল ভাবিয়াছিলাম ভাবিয়াছিলি ভাবিয়াছিলে ভাবিয়াছিলেন ভাবিয়াছিস ভাবিয়াছে ভাবিয়াছেন ভাবিয়ে ভাবিয়েছ ভাবিয়েছি ভাবিয়েছিল ভাবিয়েছিলাম ভাবিয়েছিলি ভাবিয়েছিলে ভাবিয়েছিলেন ভাবিয়েছিলেম ভাবিয়েছিলুম ভাবিয়েছিস ভাবিয়েছে ভাবিয়েছেন ভাবিয়ো ভাবী ভাবীকাল ভাবচিত্র ভাবচোর ভাবচ্ছবি ভাবীজান ভাবচুরি ভাবেন ভাবেনি ভাবেননি ভাবো ভাবোচ্ছ্বাস ভাবোদ্দীপক ভাবোদ্দীপন ভাবোদয় ভাবোনি ভাবোন্মাদ ভাবোন্মেষ ভাবোন্মত্ত ভাবছ ভাবছি ভাবছিল ভাবছিলাম ভাবছিলি ভাবছিলে ভাবছিলেন ভাবছিলেম ভাবছিলুম ভাবছিস ভাবছে ভাবছেন ভাবজগত ভাবজনিত ভাব্য ভাবযুক্ত ভাব্যমান ভাবত ভাবতাম ভাবতিস ভাবতে ভাবতেছি ভাবতেন ভাবতেম ভাবতো ভাবতুম ভাবতরঙ্গ ভাবদ্যোতক ভাবধারা ভাবধারানুসারী ভাবন ভাবুন ভাবনা ভাবনাগ্রস্ত ভাবনাচিন্তা ভাবনাযুক্ত ভাবনাহীন ভাবনাহীনতা ভাবনি ভাবনী ভাবুনী ভাবনীয় ভাবুনে ভাবুনতো ভাবপ্রকার ভাবপ্রকাশ ভাবপ্রকাশক ভাবপ্রাপ্ত ভাবপূর্ণ ভাবপ্রত্যয় ভাবপ্রধান ভাবপ্রবণ ভাবপ্রবণতা ভাবব ভাববাচক ভাববাচ্য ভাববাদ ভাববাদী ভাববার ভাববি ভাববিলাসী ভাববে ভাববেন ভাববৈচিত্র ভাববো ভাবব্যক্তি ভাবব্যঞ্জক ভাবভঙ্গি ভাবভঙ্গিযুক্ত ভাবভঙ্গী ভাবভালোবাসা ভাবভালবাসা ভাবভোলা ভাবমগ্ন ভাবমাধুর্য ভাবমূর্তি ভাবময় ভাবময়ী ভাবরস ভাবল ভাবলাগা ভাবলাম ভাবলি ভাবলে ভাবলেন ভাবলেম ভাবলেশহীন ভাবলোক ভাবলুম ভাবশুদ্ধি ভাবসমাধি ভাবসমৃদ্ধ ভাবসম্পদ ভাবসম্পন্ন ভাবসর্বস্ব ভাবয়িত্রী ভাম ভামিনী ভামী ভাম্পায়ার ভামুর ভার ভারই ভারুই ভারকেন্দ্র ভারগ্রস্ত ভারা ভারাক্রান্ত ভারাভারা ভারার্পিত ভারার্পণ ভারালো ভারি ভারিক ভারিক্কি ভারিক্কী ভারিক্কে ভারিভুরি ভারী ভারচুয়াল ভার্চুয়াল ভারোত্তোলন ভার্জিন ভার্জিনিয়া ভারযুক্ত ভার্যা ভার্যানী ভারটেক্স ভার্টেক্স ভারযষ্টি ভারত ভারতকোষ ভারতগীতি ভারতী ভারতীয় ভারতীয়তা ভারতীয়ত্ব ভারতজুড়ে ভারততত্ত্ব ভারতনাট্যম ভারতপূর্ব ভারতবাসী ভারতব্যাপী ভারতবর্ষ ভারতবর্ষীয় ভারতভূমি ভারতভূষণ ভারতমাতা ভারতমহাসাগর ভারতমহাসমুদ্র ভারতরাষ্ট্র ভারতরত্ন ভারদ্বাজ ভার্নাকুলার ভারপ্রাপ্ত ভারবাহ ভারবাহক ভারবাহী ভারবহন ভারবহনকারী ভারভুর ভারমুথ ভার্শন ভারসাম্য ভারসাম্যাবস্থা ভারসাম্যপূর্ণ ভারসাম্যহীন ভারসাম্যহীনতা ভার্সিটি ভার্সেস ভারস্থাপন ভার্সন ভারসহ ভারহীন ভাল ভালুক ভালুকা ভালকেবাঁশ ভালগার ভালা ভালাই ভালাবুরা ভালি ভালী ভালে ভালো ভালো ভালোআপদ ভালোকথা ভালোচোখ ভালোজ্বালা ভালোত্ব ভালোবাসা ভালোবাসাযুক্ত ভালোবাসি ভালোবাসে ভালোবাসেন ভালোবাসেনি ভালোবাসো ভালোবাসতেন ভালোবাসতো ভালোবেসে ভালোভাবে ভালোমানছত ভালোমানুষ ভালোমানুষি ভালোমতো ভালোমন ভালোমন্দ ভালোমন্দচেনা ভালোমন্দজ্ঞানহীন ভালোমন্দবোধ ভালোরকম ভালোলাগা ভালবাসুক ভালবাসা ভালবাসি ভালবাসিত ভালবাসিতাম ভালবাসিতিস ভালবাসিতে ভালবাসিতেছ ভালবাসিতেছি ভালবাসিতেছিল ভালবাসিতেছিলাম ভালবাসিতেছিলি ভালবাসিতেছিলে ভালবাসিতেছিলেন ভালবাসিতেছিস ভালবাসিতেছে ভালবাসিতেছেন ভালবাসিতেন ভালবাসিব ভালবাসিবার ভালবাসিবি ভালবাসিবে ভালবাসিবেন ভালবাসিল ভালবাসিলাম ভালবাসিলি ভালবাসিলে ভালবাসিলেন ভালবাসিস ভালবাসিয়া ভালবাসিয়াছ ভালবাসিয়াছি ভালবাসিয়াছিল ভালবাসিয়াছিলাম ভালবাসিয়াছিলি ভালবাসিয়াছিলে ভালবাসিয়াছিলেন ভালবাসিয়াছিস ভালবাসিয়াছে ভালবাসিয়াছেন ভালবাসিয়ো ভালবাসে ভালবাসেন ভালবাসছ ভালবাসছি ভালবাসছিল ভালবাসছিলাম ভালবাসছিলি ভালবাসছিলে ভালবাসছিলেন ভালবাসছিলেম ভালবাসছিলুম ভালবাসছিস ভালবাসছে ভালবাসছেন ভালবাসত ভালবাসতাম ভালবাসতিস ভালবাসতে ভালবাসতেন ভালবাসতেম ভালবাসতুম ভালবাসুন ভালবাসব ভালবাসবার ভালবাসবি ভালবাসবে ভালবাসবেন ভালবাসবো ভালবাসল ভালবাসলাম ভালবাসলি ভালবাসলে ভালবাসলেন ভালবাসলেম ভালবাসলুম ভালবেসে ভালবেসেছ ভালবেসেছি ভালবেসেছিল ভালবেসেছিলাম ভালবেসেছিলি ভালবেসেছিলে ভালবেসেছিলেন ভালবেসেছিলেম ভালবেসেছিলুম ভালবেসেছিস ভালবেসেছে ভালবেসেছেন ভালবেসো ভালভাবে ভালমানুষ ভালমতো ভালমন ভালমন্দ ভাল্লুক ভাল্লাগেনা ভাশুর ভাশুরঝি ভাশুরপো ভাষ ভাষক ভাষা ভাষাংশ ভাষাগোষ্ঠী ভাষাচিন্তা ভাষাচলচ্চিত্র ভাষাজ্ঞান ভাষাতীত ভাষাতত্ত্ব ভাষাতত্ত্বগত ভাষাতত্ত্বজ্ঞ ভাষাতত্ত্ববিদ ভাষান্তর ভাষান্তরকারী ভাষান্তরকরণ ভাষান্তরিক ভাষান্তরিত ভাষানুবাদ ভাষাপ্রকাশ ভাষাপরিবর্তন ভাষাপূর্ব ভাষাপ্রশিক্ষণ ভাষাপ্রয়োগ ভাষাবিকাশ ভাষাবিজ্ঞান ভাষাবিজ্ঞানী ভাষাবিজ্ঞানসম্মত ভাষাবিদ ভাষাবিভাগ ভাষাবিস্তার ভাষাবোধ ভাষাব্যাকরণ ভাষাব্যবহার ভাষাব্যবহাররূপ ভাষাভঙ্গি ভাষাভাষী ভাষাভিজ্ঞ ভাষাভিত্তিক ভাষাভেদ ভাষারীতি ভাষার্জন ভাষারূপ ভাষাশিক্ষা ভাষাসংগ্রামী ভাষাসংযুক্ত ভাষাসংযোগ ভাষাসংস্কৃতি ভাষাসমৃদ্ধ ভাষাহীন ভাষিক ভাষিকা ভাষিণী ভাষিত ভাষী ভাষে ভাষ্য ভাষ্যকার ভাষ্যমতে ভাষণ ভাষণদান ভাস ভাসুক ভাস্কর ভাস্করাচার্য ভাস্কর্য ভাস্কর্যসমৃদ্ধ ভাস্কুলার ভাসা ভাসাই ভাসাইও ভাসাইত ভাসাইতাম ভাসাইতিস ভাসাইতে ভাসাইতেছ ভাসাইতেছি ভাসাইতেছিল ভাসাইতেছিলাম ভাসাইতেছিলি ভাসাইতেছিলে ভাসাইতেছিলেন ভাসাইতেছিস ভাসাইতেছে ভাসাইতেছেন ভাসাইতেন ভাসাইব ভাসাইবার ভাসাইবি ভাসাইবে ভাসাইবেন ভাসাইল ভাসাইলাম ভাসাইলি ভাসাইলে ভাসাইলেন ভাসাইয়া ভাসাইয়াছ ভাসাইয়াছি ভাসাইয়াছিল ভাসাইয়াছিলাম ভাসাইয়াছিলি ভাসাইয়াছিলে ভাসাইয়াছিলেন ভাসাইয়াছিস ভাসাইয়াছে ভাসাইয়াছেন ভাসাইয়ো ভাসাক ভাসাচ্ছ ভাসাচ্ছি ভাসাচ্ছিল ভাসাচ্ছিলাম ভাসাচ্ছিলি ভাসাচ্ছিলে ভাসাচ্ছিলেন ভাসাচ্ছিলেম ভাসাচ্ছিলুম ভাসাচ্ছিস ভাসাচ্ছে ভাসাচ্ছেন ভাসাত ভাসাতাম ভাসাতিস ভাসাতে ভাসাতেন ভাসাতেম ভাসাতুম ভাসান ভাসানো ভাসাব ভাসাবার ভাসাবি ভাসাবে ভাসাবেন ভাসাবো ভাসাভাসা ভাসাল ভাসালাম ভাসালি ভাসালে ভাসালেন ভাসালেম ভাসালুম ভাসাস ভাসি ভাসিত ভাসিতাম ভাসিতিস ভাসিতে ভাসিতেছ ভাসিতেছি ভাসিতেছিল ভাসিতেছিলাম ভাসিতেছিলি ভাসিতেছিলে ভাসিতেছিলেন ভাসিতেছিস ভাসিতেছে ভাসিতেছেন ভাসিতেন ভাসিব ভাসিবার ভাসিবি ভাসিবে ভাসিবেন ভাসিল ভাসিলাম ভাসিলি ভাসিলে ভাসিলেন ভাসিস ভাসিয়া ভাসিয়াছ ভাসিয়াছি ভাসিয়াছিল ভাসিয়াছিলাম ভাসিয়াছিলি ভাসিয়াছিলে ভাসিয়াছিলেন ভাসিয়াছিস ভাসিয়াছে ভাসিয়াছেন ভাসিয়ে ভাসিয়েছ ভাসিয়েছি ভাসিয়েছিল ভাসিয়েছিলাম ভাসিয়েছিলি ভাসিয়েছিলে ভাসিয়েছিলেন ভাসিয়েছিলেম ভাসিয়েছিলুম ভাসিয়েছিস ভাসিয়েছে ভাসিয়েছেন ভাসিয়ো ভাসে ভাসেন ভাসছ ভাসছি ভাসছিল ভাসছিলাম ভাসছিলি ভাসছিলে ভাসছিলেন ভাসছিলেম ভাসছিলুম ভাসছিস ভাসছে ভাসছেন ভাসত ভাসতাম ভাসতিস ভাসতে ভাসতেছে ভাসতেন ভাসতেম ভাসতো ভাসতুম ভাসুন ভাসন্ত ভাসব ভাস্বান ভাসবার ভাসবি ভাসবে ভাসবেন ভাসবো ভাস্বতী ভাস্বর ভাসমান ভাসুর ভাসুরক ভাসুরঝি ভাসুরপো ভাসল ভাসলাম ভাসলি ভাসলে ভাসলেন ভাসলেম ভাসলুম ভাসসি ভাঁড় ভাড়া ভাঁড়া ভাঁড়াই ভাঁড়াইও ভাঁড়াইত ভাঁড়াইতাম ভাঁড়াইতিস ভাঁড়াইতে ভাঁড়াইতেছ ভাঁড়াইতেছি ভাঁড়াইতেছিল ভাঁড়াইতেছিলাম ভাঁড়াইতেছিলি ভাঁড়াইতেছিলে ভাঁড়াইতেছিলেন ভাঁড়াইতেছিস ভাঁড়াইতেছে ভাঁড়াইতেছেন ভাঁড়াইতেন ভাঁড়াইব ভাঁড়াইবার ভাঁড়াইবি ভাঁড়াইবে ভাঁড়াইবেন ভাঁড়াইল ভাঁড়াইলাম ভাঁড়াইলি ভাঁড়াইলে ভাঁড়াইলেন ভাঁড়াইয়া ভাঁড়াইয়াছ ভাঁড়াইয়াছি ভাঁড়াইয়াছিল ভাঁড়াইয়াছিলাম ভাঁড়াইয়াছিলি ভাঁড়াইয়াছিলে ভাঁড়াইয়াছিলেন ভাঁড়াইয়াছিস ভাঁড়াইয়াছে ভাঁড়াইয়াছেন ভাঁড়াইয়ো ভাঁড়াক ভাড়াকরা ভাড়াখাটা ভাড়াগাড়ি ভাঁড়াচ্ছ ভাঁড়াচ্ছি ভাঁড়াচ্ছিল ভাঁড়াচ্ছিলাম ভাঁড়াচ্ছিলি ভাঁড়াচ্ছিলে ভাঁড়াচ্ছিলেন ভাঁড়াচ্ছিলেম ভাঁড়াচ্ছিলুম ভাঁড়াচ্ছিস ভাঁড়াচ্ছে ভাঁড়াচ্ছেন ভাড়াটিয়া ভাড়াটে ভাঁড়াত ভাঁড়াতাম ভাঁড়াতিস ভাঁড়াতে ভাঁড়াতেন ভাঁড়াতেম ভাঁড়াতুম ভাঁড়ান ভাঁড়ানো ভাঁড়াব ভাঁড়াবার ভাড়াবাড়ি ভাঁড়াবি ভাঁড়াবে ভাঁড়াবেন ভাঁড়াবো ভাঁড়াভাঁড়ি ভাঁড়ামি ভাঁড়ামো ভাড়ার ভাঁড়ার ভাঁড়ারি ভাঁড়ারী ভাঁড়াল ভাঁড়ালাম ভাঁড়ালি ভাঁড়ালে ভাঁড়ালেন ভাঁড়ালেম ভাঁড়ালুম ভাঁড়াস ভাঁড়ি ভাঁড়িয়ে ভাঁড়িয়েছ ভাঁড়িয়েছি ভাঁড়িয়েছিল ভাঁড়িয়েছিলাম ভাঁড়িয়েছিলি ভাঁড়িয়েছিলে ভাঁড়িয়েছিলেন ভাঁড়িয়েছিলেম ভাঁড়িয়েছিলুম ভাঁড়িয়েছিস ভাঁড়িয়েছে ভাঁড়িয়েছেন ভাঁড়িয়ো ভাড়ুয়া ভায় ভায়া ভায়াদ ভায়াদি ভায়োলিন ভায়োলিনটি ভায়োলেট ভায়রা ভায়রাভাই ভিউ ভিউয়ার ভিক ভিক্টোরিয়া ভিক্টোরিয়াক্রস ভিক্টোরিয়ান ভিক্টোরীয় ভিক্টর ভিক্টরি ভিক্ষু ভিক্ষুক ভিক্ষুকাশ্রম ভিক্ষা ভিক্ষাকারী ভিক্ষাকাল ভিক্ষাগ্রহণ ভিক্ষাচর্যা ভিক্ষাজীবিনী ভিক্ষাজীবী ভিক্ষাদান ভিক্ষান্ন ভিক্ষাপাত্র ভিক্ষাপুত্র ভিক্ষাপ্রাপ্ত ভিক্ষাপ্রার্থী ভিক্ষাবৃত্তি ভিক্ষাভাণ্ড ভিক্ষামা ভিক্ষার্থিনী ভিক্ষার্থী ভিক্ষালব্ধ ভিক্ষিত ভিক্ষোপজীবিনী ভিক্ষোপজীবী ভিক্ষুণী ভিক্ষুতা ভিক্ষুধর্ম ভিখ ভিখারি ভিখারিনী ভিখারিবিদায় ভিখি ভিখিরি ভিখিরিনী ভিজ ভিজক ভিজুক ভিজা ভিজাই ভিজাইও ভিজাইত ভিজাইতাম ভিজাইতিস ভিজাইতে ভিজাইতেছ ভিজাইতেছি ভিজাইতেছিল ভিজাইতেছিলাম ভিজাইতেছিলি ভিজাইতেছিলে ভিজাইতেছিলেন ভিজাইতেছিস ভিজাইতেছে ভিজাইতেছেন ভিজাইতেন ভিজাইব ভিজাইবার ভিজাইবি ভিজাইবে ভিজাইবেন ভিজাইল ভিজাইলাম ভিজাইলি ভিজাইলে ভিজাইলেন ভিজাইয়া ভিজাইয়াছ ভিজাইয়াছি ভিজাইয়াছিল ভিজাইয়াছিলাম ভিজাইয়াছিলি ভিজাইয়াছিলে ভিজাইয়াছিলেন ভিজাইয়াছিস ভিজাইয়াছে ভিজাইয়াছেন ভিজাইয়ো ভিজাক ভিজান ভিজানো ভিজাবিড়াল ভিজাবেড়াল ভিজাস ভিজি ভিজিট ভিজিটিং ভিজিটর ভিজিত ভিজিতাম ভিজিতিস ভিজিতে ভিজিতেছ ভিজিতেছি ভিজিতেছিল ভিজিতেছিলাম ভিজিতেছিলি ভিজিতেছিলে ভিজিতেছিলেন ভিজিতেছিস ভিজিতেছে ভিজিতেছেন ভিজিতেন ভিজিব ভিজিবার ভিজিবি ভিজিবে ভিজিবেন ভিজিল ভিজিলাম ভিজিলি ভিজিলে ভিজিলেন ভিজিস ভিজিয়া ভিজিয়াছ ভিজিয়াছি ভিজিয়াছিল ভিজিয়াছিলাম ভিজিয়াছিলি ভিজিয়াছিলে ভিজিয়াছিলেন ভিজিয়াছিস ভিজিয়াছে ভিজিয়াছেন ভিজিয়ে ভিজিয়েছ ভিজিয়েছি ভিজিয়েছিল ভিজিয়েছিলাম ভিজিয়েছিলি ভিজিয়েছিলে ভিজিয়েছিলেন ভিজিয়েছিলেম ভিজিয়েছিলুম ভিজিয়েছিস ভিজিয়েছে ভিজিয়েছেন ভিজিয়ো ভিজচ্ছ ভিজচ্ছি ভিজচ্ছিল ভিজচ্ছিলাম ভিজচ্ছিলি ভিজচ্ছিলে ভিজচ্ছিলেন ভিজচ্ছিলেম ভিজচ্ছিলুম ভিজচ্ছিস ভিজচ্ছে ভিজচ্ছেন ভিজে ভিজেছ ভিজেছি ভিজেছিল ভিজেছিলাম ভিজেছিলি ভিজেছিলে ভিজেছিলেন ভিজেছিলেম ভিজেছিলুম ভিজেছিস ভিজেছে ভিজেছেন ভিজেন ভিজেবিড়াল ভিজেভিজে ভিজো ভিজছ ভিজছি ভিজছিল ভিজছিলাম ভিজছিলি ভিজছিলে ভিজছিলেন ভিজছিলেম ভিজছিলুম ভিজছিস ভিজছে ভিজছেন ভিজত ভিজতাম ভিজতিস ভিজতে ভিজতেন ভিজতেম ভিজতুম ভিজন ভিজুন ভিজনো ভিজব ভিজবার ভিজবি ভিজবে ভিজবেন ভিজবেড়াল ভিজবো ভিজল ভিজলাম ভিজলি ভিজলে ভিজলেন ভিজলেম ভিজলুম ভিজস ভিজয় ভিজুয়াল ভিজুয়ালাইজার ভিট ভিটকিলামি ভিটকিলিমি ভিটা ভিটাছাড়া ভিটামাটি ভিটামিন ভিটি ভিটে ভিটেমাটি ভিটরে ভিডিও ভিডিওগ্রাফি ভিডিওটেপ ভিডিওব্লগ ভিণ্ডিবাল ভিত ভিতু ভিতাভিতি ভিত্ত ভিত্তি ভিত্তিক ভিত্তিকা ভিত্তিচোর ভিত্তিপ্রস্তর ভিত্তিপ্রস্তরস্থাপন ভিত্তিব্যয় ভিত্তিবর্ষ ভিত্তিভূমি ভিত্তিমুদ্রা ভিত্তিমূল ভিত্তিরেখা ভিত্তিরূপ ভিত্তিস্থাপন ভিত্তিহীন ভিতর ভিতরকার ভিতরদিক ভিতরদেশ ভিতরবাড়ি ভিতরস্থ ভিদা ভিদ্য ভিদ্যমান ভিদভিদে ভিন ভিনগ্রহ ভিনিগার ভিনেগার ভিনজগত ভিন্দিপাল ভিনদেশ ভিনদেশি ভিনদেশী ভিন্ন ভিন্নক্রম ভিন্নগোত্র ভিন্নার্থ ভিন্নার্থক ভিন্নজাতীয় ভিন্নতা ভিন্নত্ব ভিন্নতর ভিন্নদেশীয় ভিন্নদেশবাসী ভিন্নধর্মী ভিন্নবাক্য ভিন্নবৃত্তি ভিন্নবর্ণ ভিন্নভাব ভিন্নভাষী ভিন্নমুখী ভিন্নমত ভিন্নমতাবলম্বিনী ভিন্নমতাবলম্বী ভিন্নমতপোষণকারী ভিন্নরকম ভিন্নরুচি ভিন্নরূপ ভিন্নস্থান ভিন্নস্থানজাত ভিপিপোস্ট ভিবি ভিব্রিও ভিব্রিওজীবাণু ভিম্মি ভিমরাজ ভিমরুল ভিরকুটি ভিরকুটী ভিরমি ভির্মি ভিল ভিলা ভিলাই ভিলেন ভিল্লা ভিষক ভিষকপ্রিয়া ভিসা ভিস্ত ভিস্তি ভিস্তিওয়ালা ভিস্তী ভিস্তীওয়ালা ভিসুভিয়াস ভিড় ভিড়ক ভিড়ুক ভিড়া ভিড়াই ভিড়াইও ভিড়াইত ভিড়াইতাম ভিড়াইতিস ভিড়াইতে ভিড়াইতেছ ভিড়াইতেছি ভিড়াইতেছিল ভিড়াইতেছিলাম ভিড়াইতেছিলি ভিড়াইতেছিলে ভিড়াইতেছিলেন ভিড়াইতেছিস ভিড়াইতেছে ভিড়াইতেছেন ভিড়াইতেন ভিড়াইব ভিড়াইবার ভিড়াইবি ভিড়াইবে ভিড়াইবেন ভিড়াইল ভিড়াইলাম ভিড়াইলি ভিড়াইলে ভিড়াইলেন ভিড়াইয়া ভিড়াইয়াছ ভিড়াইয়াছি ভিড়াইয়াছিল ভিড়াইয়াছিলাম ভিড়াইয়াছিলি ভিড়াইয়াছিলে ভিড়াইয়াছিলেন ভিড়াইয়াছিস ভিড়াইয়াছে ভিড়াইয়াছেন ভিড়াইয়ো ভিড়াক ভিড়ান ভিড়ানো ভিড়াবার ভিড়াস ভিড়ি ভিড়িত ভিড়িতাম ভিড়িতিস ভিড়িতে ভিড়িতেছ ভিড়িতেছি ভিড়িতেছিল ভিড়িতেছিলাম ভিড়িতেছিলি ভিড়িতেছিলে ভিড়িতেছিলেন ভিড়িতেছিস ভিড়িতেছে ভিড়িতেছেন ভিড়িতেন ভিড়িব ভিড়িবার ভিড়িবি ভিড়িবে ভিড়িবেন ভিড়িল ভিড়িলাম ভিড়িলি ভিড়িলে ভিড়িলেন ভিড়িস ভিড়িয়া ভিড়িয়াছ ভিড়িয়াছি ভিড়িয়াছিল ভিড়িয়াছিলাম ভিড়িয়াছিলি ভিড়িয়াছিলে ভিড়িয়াছিলেন ভিড়িয়াছিস ভিড়িয়াছে ভিড়িয়াছেন ভিড়িয়ে ভিড়িয়েছ ভিড়িয়েছি ভিড়িয়েছিল ভিড়িয়েছিলাম ভিড়িয়েছিলি ভিড়িয়েছিলে ভিড়িয়েছিলেন ভিড়িয়েছিলেম ভিড়িয়েছিলুম ভিড়িয়েছিস ভিড়িয়েছে ভিড়িয়েছেন ভিড়িয়ো ভিড়চ্ছ ভিড়চ্ছি ভিড়চ্ছিল ভিড়চ্ছিলাম ভিড়চ্ছিলি ভিড়চ্ছিলে ভিড়চ্ছিলেন ভিড়চ্ছিলেম ভিড়চ্ছিলুম ভিড়চ্ছিস ভিড়চ্ছে ভিড়চ্ছেন ভিড়েছ ভিড়েছি ভিড়েছিল ভিড়েছিলাম ভিড়েছিলি ভিড়েছিলে ভিড়েছিলেন ভিড়েছিলেম ভিড়েছিলুম ভিড়েছিস ভিড়েছে ভিড়েছেন ভিড়েন ভিড়ো ভিড়ছ ভিড়ছি ভিড়ছিল ভিড়ছিলাম ভিড়ছিলি ভিড়ছিলে ভিড়ছিলেন ভিড়ছিলেম ভিড়ছিলুম ভিড়ছিস ভিড়ছে ভিড়ছেন ভিড়ত ভিড়তাম ভিড়তিস ভিড়তে ভিড়তেন ভিড়তেম ভিড়তুম ভিড়ন ভিড়ুন ভিড়নো ভিড়ব ভিড়বার ভিড়বি ভিড়বে ভিড়বেন ভিড়বো ভিড়ভাঙা ভিড়ভাট্টা ভিড়ভাড় ভিড়ল ভিড়লাম ভিড়লি ভিড়লে ভিড়লেন ভিড়লেম ভিড়লুম ভিড়স ভিড়য় ভিয়ান ভিয়েতনাম ভিয়েতনামযুদ্ধ ভিয়েতনামপন্থী ভিয়েন ভিয়েনা ভিয়োলা ভুচকুনি ভচক্র ভূচক্র ভূচিত্র ভচ্চা ভূচ্ছায়া ভীত ভীতু ভীতা ভীতি ভীতিকর ভীতিগ্রস্ত ভীতিজনক ভীতিপূর্ণ ভীতিপ্রদ ভীতিপ্রদর্শন ভীতিবিহ্বল ভীতিসঞ্চার ভীতচিত্ত ভীতসন্ত্রস্ত ভীনে ভীনেভীনে ভীম ভীমকান্ত ভীমকর্মা ভীমখণ্ডা ভীমা ভীমাকৃতি ভীমদর্শন ভীমনাদ ভীমপরাক্রম ভীমপলাশি ভীমপলশ্রী ভীমপলশ্রীরাগ ভীমবিক্রম ভীম্মি ভীমরাগ ভীমরতি ভীমরতিগ্রস্ত ভীমরথী ভীমরুল ভীমশাসক ভীমশাসন ভীর ভীরু ভূচর ভীরুক ভুচরা ভূচরী ভীরুতা ভীল ভীষণ ভীষণা ভীষণাকার ভীষণাকৃতি ভীষণতা ভীষণত্ব ভীষণতর ভীষণদর্শন ভীষণভাবে ভীষণরকম ভীষ্ম ভীষ্মেরপ্রতিজ্ঞা ভীষ্মপর্ব ভীড়ন ভেংচা ভেংচাই ভেংচাইও ভেংচাইত ভেংচাইতাম ভেংচাইতিস ভেংচাইতে ভেংচাইতেছ ভেংচাইতেছি ভেংচাইতেছিল ভেংচাইতেছিলাম ভেংচাইতেছিলি ভেংচাইতেছিলে ভেংচাইতেছিলেন ভেংচাইতেছিস ভেংচাইতেছে ভেংচাইতেছেন ভেংচাইতেন ভেংচাইব ভেংচাইবার ভেংচাইবি ভেংচাইবে ভেংচাইবেন ভেংচাইল ভেংচাইলাম ভেংচাইলি ভেংচাইলে ভেংচাইলেন ভেংচাইয়া ভেংচাইয়াছ ভেংচাইয়াছি ভেংচাইয়াছিল ভেংচাইয়াছিলাম ভেংচাইয়াছিলি ভেংচাইয়াছিলে ভেংচাইয়াছিলেন ভেংচাইয়াছিস ভেংচাইয়াছে ভেংচাইয়াছেন ভেংচাইয়ো ভেংচাক ভেংচাচ্ছ ভেংচাচ্ছি ভেংচাচ্ছিল ভেংচাচ্ছিলাম ভেংচাচ্ছিলি ভেংচাচ্ছিলে ভেংচাচ্ছিলেন ভেংচাচ্ছিলেম ভেংচাচ্ছিলুম ভেংচাচ্ছিস ভেংচাচ্ছে ভেংচাচ্ছেন ভেংচাত ভেংচাতাম ভেংচাতিস ভেংচাতে ভেংচাতেন ভেংচাতেম ভেংচাতুম ভেংচান ভেংচানি ভেংচানো ভেংচাব ভেংচাবার ভেংচাবি ভেংচাবে ভেংচাবেন ভেংচাবো ভেংচাল ভেংচালাম ভেংচালি ভেংচালে ভেংচালেন ভেংচালেম ভেংচালুম ভেংচাস ভেংচায় ভেংচি ভেংচে ভেংচেছ ভেংচেছি ভেংচেছিল ভেংচেছিলাম ভেংচেছিলি ভেংচেছিলে ভেংচেছিলেন ভেংচেছিলেম ভেংচেছিলুম ভেংচেছিস ভেংচেছে ভেংচেছেন ভেংচো ভেইনবার্গ ভেউ ভেউভেউ ভেউর ভেঁউড় ভেক ভেকা ভেকান্সি ভেকাসন ভেকী ভেকো ভেকট ভেকুট ভেকটি ভেক্টর ভেক্টররূপ ভেকধারী ভেকধারণ ভেকধরা ভেকভুক ভেকসিন ভেকুয়া ভেখ ভেখধারী ভেগাস ভেগে ভেগেছ ভেগেছি ভেগেছিল ভেগেছিলাম ভেগেছিলি ভেগেছিলে ভেগেছিলেন ভেগেছিলেম ভেগেছিলুম ভেগেছিস ভেগেছে ভেগেছেন ভেগো ভেগদখল ভেঙ্গা ভেঙ্গাই ভেঙ্গাইও ভেঙ্গাইত ভেঙ্গাইতাম ভেঙ্গাইতিস ভেঙ্গাইতে ভেঙ্গাইতেছ ভেঙ্গাইতেছি ভেঙ্গাইতেছিল ভেঙ্গাইতেছিলাম ভেঙ্গাইতেছিলি ভেঙ্গাইতেছিলে ভেঙ্গাইতেছিলেন ভেঙ্গাইতেছিস ভেঙ্গাইতেছে ভেঙ্গাইতেছেন ভেঙ্গাইতেন ভেঙ্গাইব ভেঙ্গাইবার ভেঙ্গাইবি ভেঙ্গাইবে ভেঙ্গাইবেন ভেঙ্গাইল ভেঙ্গাইলাম ভেঙ্গাইলি ভেঙ্গাইলে ভেঙ্গাইলেন ভেঙ্গাইয়া ভেঙ্গাইয়াছ ভেঙ্গাইয়াছি ভেঙ্গাইয়াছিল ভেঙ্গাইয়াছিলাম ভেঙ্গাইয়াছিলি ভেঙ্গাইয়াছিলে ভেঙ্গাইয়াছিলেন ভেঙ্গাইয়াছিস ভেঙ্গাইয়াছে ভেঙ্গাইয়াছেন ভেঙ্গাইয়ো ভেঙ্গাক ভেঙ্গাচ্ছ ভেঙ্গাচ্ছি ভেঙ্গাচ্ছিল ভেঙ্গাচ্ছিলাম ভেঙ্গাচ্ছিলি ভেঙ্গাচ্ছিলে ভেঙ্গাচ্ছিলেন ভেঙ্গাচ্ছিলেম ভেঙ্গাচ্ছিলুম ভেঙ্গাচ্ছিস ভেঙ্গাচ্ছে ভেঙ্গাচ্ছেন ভেঙ্গাত ভেঙ্গাতাম ভেঙ্গাতিস ভেঙ্গাতে ভেঙ্গাতেন ভেঙ্গাতেম ভেঙ্গাতুম ভেঙ্গান ভেঙ্গানি ভেঙ্গানো ভেঙ্গাব ভেঙ্গাবার ভেঙ্গাবি ভেঙ্গাবে ভেঙ্গাবেন ভেঙ্গাবো ভেঙ্গাল ভেঙ্গালাম ভেঙ্গালি ভেঙ্গালে ভেঙ্গালেন ভেঙ্গালেম ভেঙ্গালুম ভেঙ্গাস ভেঙ্গি ভেঙ্গিয়ে ভেঙ্গিয়েছ ভেঙ্গিয়েছি ভেঙ্গিয়েছিল ভেঙ্গিয়েছিলাম ভেঙ্গিয়েছিলি ভেঙ্গিয়েছিলে ভেঙ্গিয়েছিলেন ভেঙ্গিয়েছিলেম ভেঙ্গিয়েছিলুম ভেঙ্গিয়েছিস ভেঙ্গিয়েছে ভেঙ্গিয়েছেন ভেঙ্গিয়ো ভেঙ্গচি ভেঙ্গে ভেঙ্গেচুরে ভেঙ্গেছ ভেঙ্গেছি ভেঙ্গেছিল ভেঙ্গেছিলাম ভেঙ্গেছিলি ভেঙ্গেছিলে ভেঙ্গেছিলেন ভেঙ্গেছিলেম ভেঙ্গেছিলুম ভেঙ্গেছিস ভেঙ্গেছে ভেঙ্গেছেন ভেঙ্গো ভেঙা ভেঙাই ভেঙাইও ভেঙাইত ভেঙাইতাম ভেঙাইতিস ভেঙাইতে ভেঙাইতেছ ভেঙাইতেছি ভেঙাইতেছিল ভেঙাইতেছিলাম ভেঙাইতেছিলি ভেঙাইতেছিলে ভেঙাইতেছিলেন ভেঙাইতেছিস ভেঙাইতেছে ভেঙাইতেছেন ভেঙাইতেন ভেঙাইব ভেঙাইবার ভেঙাইবি ভেঙাইবে ভেঙাইবেন ভেঙাইল ভেঙাইলাম ভেঙাইলি ভেঙাইলে ভেঙাইলেন ভেঙাইয়া ভেঙাইয়াছ ভেঙাইয়াছি ভেঙাইয়াছিল ভেঙাইয়াছিলাম ভেঙাইয়াছিলি ভেঙাইয়াছিলে ভেঙাইয়াছিলেন ভেঙাইয়াছিস ভেঙাইয়াছে ভেঙাইয়াছেন ভেঙাইয়ো ভেঙাক ভেঙাচ্ছ ভেঙাচ্ছি ভেঙাচ্ছিল ভেঙাচ্ছিলাম ভেঙাচ্ছিলি ভেঙাচ্ছিলে ভেঙাচ্ছিলেন ভেঙাচ্ছিলেম ভেঙাচ্ছিলুম ভেঙাচ্ছিস ভেঙাচ্ছে ভেঙাচ্ছেন ভেঙাত ভেঙাতাম ভেঙাতিস ভেঙাতে ভেঙাতেন ভেঙাতেম ভেঙাতুম ভেঙান ভেঙানি ভেঙানো ভেঙাব ভেঙাবার ভেঙাবি ভেঙাবে ভেঙাবেন ভেঙাবো ভেঙাল ভেঙালাম ভেঙালি ভেঙালে ভেঙালেন ভেঙালেম ভেঙালুম ভেঙাস ভেঙি ভেঙিয়ে ভেঙিয়েছ ভেঙিয়েছি ভেঙিয়েছিল ভেঙিয়েছিলাম ভেঙিয়েছিলি ভেঙিয়েছিলে ভেঙিয়েছিলেন ভেঙিয়েছিলেম ভেঙিয়েছিলুম ভেঙিয়েছিস ভেঙিয়েছে ভেঙিয়েছেন ভেঙিয়ো ভেঙচি ভেঙে ভেঙেছ ভেঙেছি ভেঙেছিল ভেঙেছিলাম ভেঙেছিলি ভেঙেছিলে ভেঙেছিলেন ভেঙেছিলেম ভেঙেছিলুম ভেঙেছিস ভেঙেছে ভেঙেছেন ভেঙেযাওয়া ভেঙেপড়া ভেঙো ভেজ ভেজা ভেজাই ভেজাইও ভেজাইত ভেজাইতাম ভেজাইতিস ভেজাইতে ভেজাইতেছ ভেজাইতেছি ভেজাইতেছিল ভেজাইতেছিলাম ভেজাইতেছিলি ভেজাইতেছিলে ভেজাইতেছিলেন ভেজাইতেছিস ভেজাইতেছে ভেজাইতেছেন ভেজাইতেন ভেজাইব ভেজাইবার ভেজাইবি ভেজাইবে ভেজাইবেন ভেজাইল ভেজাইলাম ভেজাইলি ভেজাইলে ভেজাইলেন ভেজাইল্যা ভেজাইয়া ভেজাইয়াছ ভেজাইয়াছি ভেজাইয়াছিল ভেজাইয়াছিলাম ভেজাইয়াছিলি ভেজাইয়াছিলে ভেজাইয়াছিলেন ভেজাইয়াছিস ভেজাইয়াছে ভেজাইয়াছেন ভেজাইয়ো ভেজাক ভেজাচ্ছ ভেজাচ্ছি ভেজাচ্ছিল ভেজাচ্ছিলাম ভেজাচ্ছিলি ভেজাচ্ছিলে ভেজাচ্ছিলেন ভেজাচ্ছিলেম ভেজাচ্ছিলুম ভেজাচ্ছিস ভেজাচ্ছে ভেজাচ্ছেন ভেজাত ভেজাতাম ভেজাতিস ভেজাতে ভেজাতেন ভেজাতেম ভেজাতুম ভেজান ভেজানো ভেজাব ভেজাবার ভেজাবি ভেজাবে ভেজাবেন ভেজাবো ভেজার ভেজাল ভেজালাম ভেজালি ভেজালে ভেজালেন ভেজালেম ভেজালযুক্ত ভেজালুম ভেজালমুক্ত ভেজালহীন ভেজাস ভেজায় ভেজি ভেজিটেরিয়ান ভেজিয়ে ভেজিয়েছ ভেজিয়েছি ভেজিয়েছিল ভেজিয়েছিলাম ভেজিয়েছিলি ভেজিয়েছিলে ভেজিয়েছিলেন ভেজিয়েছিলেম ভেজিয়েছিলুম ভেজিয়েছিস ভেজিয়েছে ভেজিয়েছেন ভেজিয়ো ভেজে ভেঁজে ভেজেছ ভেঁজেছ ভেজেছি ভেঁজেছি ভেজেছিল ভেঁজেছিল ভেজেছিলাম ভেঁজেছিলাম ভেজেছিলি ভেঁজেছিলি ভেজেছিলে ভেঁজেছিলে ভেজেছিলেন ভেঁজেছিলেন ভেজেছিলেম ভেঁজেছিলেম ভেজেছিলুম ভেঁজেছিলুম ভেজেছিস ভেঁজেছিস ভেজেছে ভেঁজেছে ভেজেছেন ভেঁজেছেন ভেজেন ভেজো ভেঁজো ভেজবার ভেট ভেটকানো ভেটকি ভেটকিমাছ ভেটা ভেটেরাখানা ভেটেরিনারি ভেটেল ভেটো ভেণ্ডার ভেতো ভেত্তা ভেতর ভেতরকার ভেতরবাড়ি ভেদ ভেদক ভেদকারক ভেদকারী ভেদা ভেদাঘাট ভেদাভেদ ভেদাভেদহীন ভেদিত ভেদিয়া ভেদী ভেদো ভেদজ্ঞান ভেদ্য ভেদ্যতা ভেদন ভেদনীতি ভেদনীয় ভেদপ্রত্যয় ভেদবিসংবাদ ভেদবুদ্ধি ভেদবুদ্ধিসম্পন্ন ভেদবমি ভেদভাবহীন ভেদমান ভেদরগঞ্জ ভেদশূন্য ভেদহীন ভেনাস ভেনিজুয়েলা ভেনিস ভেনে ভেনেছ ভেনেছি ভেনেছিল ভেনেছিলাম ভেনেছিলি ভেনেছিলে ভেনেছিলেন ভেনেছিলেম ভেনেছিলুম ভেনেছিস ভেনেছে ভেনেছেন ভেনো ভেনোনা ভেন্টিলেটর ভেন্ডার ভেনম ভেঁপু ভেপসা ভেবা ভেবাগঙ্গারাম ভেবাচেকা ভেবে ভেবেচিন্তে ভেবেছ ভেবেছি ভেবেছিনু ভেবেছিল ভেবেছিলাম ভেবেছিলি ভেবেছিলে ভেবেছিলেন ভেবেছিলেম ভেবেছিলো ভেবেছিলুম ভেবেছিস ভেবেছে ভেবেছেন ভেবো ভেবড়া ভেবড়ান ভেবড়ানো ভেমো ভেরি ভেরী ভেরেণ্ডা ভেরেণ্ডাবীজ ভেরেণ্ডাভাজা ভেরন ভেরুয়া ভেল ভেলক ভেলকি ভেল্কি ভেলকিবাজি ভেল্কিবাজি ভেল্কী ভেলা ভেলাগাছ ভেলি ভেলিগুড় ভেলী ভেলীগুড় ভেলপুরি ভেলভেট ভেলভেল ভেলসা ভেশ ভেষজ ভেষজগুণ ভেষজগুণসম্পন্ন ভেষজাঙ্গ ভেষজদ্রব্য ভেষজবিদ্যা ভেষজরূপ ভেসকা ভেসাল ভেসিকল ভেসে ভেসেছ ভেসেছি ভেসেছিল ভেসেছিলাম ভেসেছিলি ভেসেছিলে ভেসেছিলেন ভেসেছিলেম ভেসেছিলুম ভেসেছিস ভেসেছে ভেসেছেন ভেসেল ভেস্ত ভেস্তা ভেস্তাই ভেস্তাইও ভেস্তাইত ভেস্তাইতাম ভেস্তাইতিস ভেস্তাইতে ভেস্তাইতেছ ভেস্তাইতেছি ভেস্তাইতেছিল ভেস্তাইতেছিলাম ভেস্তাইতেছিলি ভেস্তাইতেছিলে ভেস্তাইতেছিলেন ভেস্তাইতেছিস ভেস্তাইতেছে ভেস্তাইতেছেন ভেস্তাইতেন ভেস্তাইব ভেস্তাইবার ভেস্তাইবি ভেস্তাইবে ভেস্তাইবেন ভেস্তাইল ভেস্তাইলাম ভেস্তাইলি ভেস্তাইলে ভেস্তাইলেন ভেস্তাইয়া ভেস্তাইয়াছ ভেস্তাইয়াছি ভেস্তাইয়াছিল ভেস্তাইয়াছিলাম ভেস্তাইয়াছিলি ভেস্তাইয়াছিলে ভেস্তাইয়াছিলেন ভেস্তাইয়াছিস ভেস্তাইয়াছে ভেস্তাইয়াছেন ভেস্তাইয়ো ভেস্তাক ভেস্তাচ্ছ ভেস্তাচ্ছি ভেস্তাচ্ছিল ভেস্তাচ্ছিলাম ভেস্তাচ্ছিলি ভেস্তাচ্ছিলে ভেস্তাচ্ছিলেন ভেস্তাচ্ছিলেম ভেস্তাচ্ছিলুম ভেস্তাচ্ছিস ভেস্তাচ্ছে ভেস্তাচ্ছেন ভেস্তাত ভেস্তাতাম ভেস্তাতিস ভেস্তাতে ভেস্তাতেন ভেস্তাতেম ভেস্তাতুম ভেস্তান ভেস্তানো ভেস্তাব ভেস্তাবার ভেস্তাবি ভেস্তাবে ভেস্তাবেন ভেস্তাবো ভেস্তাল ভেস্তালাম ভেস্তালি ভেস্তালে ভেস্তালেন ভেস্তালেম ভেস্তালুম ভেস্তাস ভেস্তে ভেস্তেছ ভেস্তেছি ভেস্তেছিল ভেস্তেছিলাম ভেস্তেছিলি ভেস্তেছিলে ভেস্তেছিলেন ভেস্তেছিলেম ভেস্তেছিলুম ভেস্তেছিস ভেস্তেছে ভেস্তেছেন ভেস্তো ভেসলিন ভেহিকাল ভেহিকল ভেড় ভেড়া ভেড়াক ভেড়াকান্ত ভেড়াচ্ছ ভেড়াচ্ছি ভেড়াচ্ছিল ভেড়াচ্ছিলাম ভেড়াচ্ছিলি ভেড়াচ্ছিলে ভেড়াচ্ছিলেন ভেড়াচ্ছিলেম ভেড়াচ্ছিলুম ভেড়াচ্ছিস ভেড়াচ্ছে ভেড়াচ্ছেন ভেড়াত ভেড়াতাম ভেড়াতিস ভেড়াতে ভেড়াতেন ভেড়াতেম ভেড়াতুম ভেড়ান ভেড়ানো ভেড়াব ভেড়াবার ভেড়াবি ভেড়াবে ভেড়াবেন ভেড়াবো ভেড়াল ভেড়ালাম ভেড়ালি ভেড়ালে ভেড়ালেন ভেড়ালেম ভেড়ালুম ভেড়াস ভেড়ি ভেড়ী ভেড়ে ভেড়েন ভেড়ো ভেড়বার ভেড়ুয়া ভেয়ান ভৈইলা ভৈইলি ভৈক্ষ ভৈক্ষ্য ভৈক্ষ্যচর্যা ভৈক্ষ্যজীবী ভৈন ভৈঁরো ভৈরব ভৈরবী ভৈরবীচক্র ভৈরবীরাগ ভৈল ভৈলি ভৈষজ ভৈষজউদ্যান ভৈষজ্য ভৈয়িলি ভো ভোঁ ভোক ভোকাল ভোকেশনাল ভোক্তা ভোক্তব্য ভোক্ত্রী ভোগ ভোগকারী ভোগকাল ভোগক্লিষ্ট ভোগগৃহ ভোগা ভোগাক ভোগাচ্ছ ভোগাচ্ছি ভোগাচ্ছিল ভোগাচ্ছিলাম ভোগাচ্ছিলি ভোগাচ্ছিলে ভোগাচ্ছিলেন ভোগাচ্ছিলেম ভোগাচ্ছিলুম ভোগাচ্ছিস ভোগাচ্ছে ভোগাচ্ছেন ভোগাত ভোগাতাম ভোগাতিস ভোগাতে ভোগাতেন ভোগাতেম ভোগাতুম ভোগাদি ভোগান ভোগানি ভোগানে ভোগানো ভোগান্ত ভোগান্তি ভোগাব ভোগাবার ভোগাবি ভোগাবে ভোগাবেন ভোগাবো ভোগার্হ ভোগাল ভোগালাম ভোগালি ভোগালে ভোগালেন ভোগালেম ভোগালুম ভোগাস ভোগাসক্ত ভোগাসক্তি ভোগায়তন ভোগিনী ভোগী ভোগেচ্ছা ভোগেন ভোগৈশ্বর্য ভোগোত্তর ভোগ্য ভোগ্যা ভোগ্যদ্বৃত্ত ভোগ্যপণ্য ভোগ্যবস্তু ভোগতৃষ্ণা ভোগদখল ভোগদখলকার ভোগদখলিকার ভোগদেহ ভোগপাল ভোগপিপাসা ভোগপ্রবণতা ভোগফল ভোগবাদী ভোগবার ভোগবাসনা ভোগবাসনাবিমুখ ভোগবিমুখ ভোগবিলাস ভোগবিলাসী ভোগবতী ভোগমত্ত ভোগমত্ততা ভোগরেখা ভোগলিপ্সা ভোগসুখ ভোগসমৃদ্ধ ভোচকানি ভোজ ভোজং ভোজালি ভোজিনী ভোজী ভোজ্য ভোজ্যাদি ভোজ্যদ্রব্য ভোজ্যদ্রব্যাদি ভোজ্যবস্তু ভোজ্যসামগ্রী ভোজন ভোজনকারী ভোজনকাল ভোজনাগার ভোজনেচ্ছু ভোজনোৎসব ভোজনযোগ্য ভোজনপাত্র ভোজনপটু ভোজনপর্ব ভোজনবিলাসী ভোজনরত ভোজনলালসা ভোজনশালা ভোজনশেষে ভোজনসভা ভোজপাতা ভোজপুরি ভোজপুরী ভোজবাজি ভোজবাজী ভোজবাড়ি ভোজবিদ্যা ভোজরি ভোজলি ভোজসভা ভোজয়িতা ভোজয়িত্রী ভোট ভোঁটকা ভোটকেন্দ্র ভোটকম্বল ভোটাধিকার ভোটাধিকারপ্রাপ্ত ভোটাভোটি ভোটাভুটি ভোটার ভোটদান ভোটপত্র ভোটপ্রার্থী ভোতা ভোঁতা ভোঁতড়া ভোদা ভোঁদা ভোঁদাই ভোঁদাভুঁদো ভোঁদৌড় ভোঁদড় ভোঁদড়া ভোঁভোঁ ভোম ভোমা ভোমর ভোমরা ভোর ভোরঙ্গ ভোরা ভোরাই ভোরি ভোরবেলা ভোররাত ভোল ভোলা ভোলাক ভোলাচ্ছ ভোলাচ্ছি ভোলাচ্ছিল ভোলাচ্ছিলাম ভোলাচ্ছিলি ভোলাচ্ছিলে ভোলাচ্ছিলেন ভোলাচ্ছিলেম ভোলাচ্ছিলুম ভোলাচ্ছিস ভোলাচ্ছে ভোলাচ্ছেন ভোলাত ভোলাতাম ভোলাতিস ভোলাতে ভোলাতেন ভোলাতেম ভোলাতুম ভোলান ভোলানাথ ভোলানি ভোলানে ভোলানো ভোলাব ভোলাবার ভোলাবি ভোলাবে ভোলাবেন ভোলাবো ভোলাল ভোলালাম ভোলালি ভোলালে ভোলালেন ভোলালেম ভোলালুম ভোলাস ভোলী ভোলে ভোল্ট ভোল্টা ভোল্টামিটার ভোল্টেজ ভোল্টমিটার ভোলবার ভোঁস ভোঁসভোঁস ভোড়ং ভৌগলিকপদ্ধতি ভৌগলিকপ্রক্রিয়া ভৌগলিকবিপর্যয় ভৌত ভৌতিক ভৌতিকরাশি ভৌতবিজ্ঞান ভৌম ভৌমিক ভৌমী ভৌমজল ভুজ ভুজুং ভুজুংভাজুং ভুজংভাজাং ভজুক ভুজকোটর ভজকট ভুজগ ভুজগী ভুজঙ্গ ভুজঙ্গিনী ভুজঙ্গী ভুজঙ্গপ্রয়াত ভুজঙ্গম ভুজঙ্গমী ভজা ভুজা ভজাই ভজাইও ভজাইত ভজাইতাম ভজাইতিস ভজাইতে ভজাইতেছ ভজাইতেছি ভজাইতেছিল ভজাইতেছিলাম ভজাইতেছিলি ভজাইতেছিলে ভজাইতেছিলেন ভজাইতেছিস ভজাইতেছে ভজাইতেছেন ভজাইতেন ভজাইব ভজাইবার ভজাইবি ভজাইবে ভজাইবেন ভজাইল ভজাইলাম ভজাইলি ভজাইলে ভজাইলেন ভজাইয়া ভজাইয়াছ ভজাইয়াছি ভজাইয়াছিল ভজাইয়াছিলাম ভজাইয়াছিলি ভজাইয়াছিলে ভজাইয়াছিলেন ভজাইয়াছিস ভজাইয়াছে ভজাইয়াছেন ভজাইয়ো ভজাক ভুজাকুণ্ঠ ভুজাগ্র ভজাচ্ছ ভজাচ্ছি ভজাচ্ছিল ভজাচ্ছিলাম ভজাচ্ছিলি ভজাচ্ছিলে ভজাচ্ছিলেন ভজাচ্ছিলেম ভজাচ্ছিলুম ভজাচ্ছিস ভজাচ্ছে ভজাচ্ছেন ভজাত ভজাতাম ভজাতিস ভজাতে ভজাতেন ভজাতেম ভজাতুম ভুজাদল ভজান ভজানো ভুজান্তর ভুজান্তরাল ভজাব ভজাবার ভজাবি ভজাবে ভজাবেন ভজাবো ভজাল ভজালাম ভজালি ভুজালি ভজালে ভজালেন ভজালেম ভজালুম ভজাস ভজি ভজিআঁ ভজিত ভজিতাম ভজিতিস ভজিতে ভজিতেছ ভজিতেছি ভজিতেছিল ভজিতেছিলাম ভজিতেছিলি ভজিতেছিলে ভজিতেছিলেন ভজিতেছিস ভজিতেছে ভজিতেছেন ভজিতেন ভজিব ভজিবার ভজিবি ভজিবে ভজিবেন ভজিল ভজিলাম ভজিলি ভজিলে ভজিলেন ভুজিষ্য ভজিস ভজিয়া ভজিয়াছ ভজিয়াছি ভজিয়াছিল ভজিয়াছিলাম ভজিয়াছিলি ভজিয়াছিলে ভজিয়াছিলেন ভজিয়াছিস ভজিয়াছে ভজিয়াছেন ভজিয়ে ভজিয়েছ ভজিয়েছি ভজিয়েছিল ভজিয়েছিলাম ভজিয়েছিলি ভজিয়েছিলে ভজিয়েছিলেন ভজিয়েছিলেম ভজিয়েছিলুম ভজিয়েছিস ভজিয়েছে ভজিয়েছেন ভজিয়ো ভজে ভজেছ ভজেছি ভজেছিল ভজেছিলাম ভজেছিলি ভজেছিলে ভজেছিলেন ভজেছিলেম ভজেছিলুম ভজেছিস ভজেছে ভজেছেন ভজেন ভজো ভজছ ভজছি ভজছিল ভজছিলাম ভজছিলি ভজছিলে ভজছিলেন ভজছিলেম ভজছিলুম ভজছিস ভজছে ভজছেন ভজ্যমান ভজত ভজতাম ভজতিস ভজতে ভজতেন ভজতেম ভজতুম ভুজদণ্ড ভজন ভজুন ভজনকারী ভজনা ভজনাকারী ভজনালয় ভজনপূজন ভজনস্থান ভুজপাশ ভজব ভজবার ভজবি ভজবে ভজবেন ভজবো ভুজবন্ধ ভুজবন্ধন ভুজবল ভজমান ভজমানা ভুজমধ্য ভজল ভজলাম ভজলি ভজলে ভজলেন ভজলেম ভুজলতা ভজলুম ভুজশির ভুজস্তম্ভ ভুঞা ভূঞা ভুঞি ভঞ্জক ভঞ্জা ভুঞ্জা ভুঞ্জানো ভুঞ্জিত ভুঞ্জেছি ভঞ্জন ভুঞ্জন ভঞ্জনকারী ভট ভটকে ভ্যা ভ্যাংচানো ভ্যাকান্সি ভ্যাকসিন ভ্যাক্সিন ভ্যাক্সিনেশন ভ্যাকুয়াম ভ্যাজানো ভ্যাজাল ভ্যাজরভ্যাজর ভ্যাটকানো ভ্যাটিকান ভ্যাটিকানসিটি ভ্যাদা ভ্যাদভ্যাদ ভুটান ভ্যান ভ্যানগাড়ি ভ্যানাডিয়াম ভুটানি ভ্যানিটিব্যাগ ভ্যানিলা ভ্যানে ভ্যানভ্যান ভ্যানভ্যানর ভ্যানরভ্যানর ভ্যাপসা ভ্যাঁপসা ভ্যাবা ভ্যাবাগঙ্গারাম ভ্যাবাচেকা ভ্যাবাচ্যাকা ভ্যাবলা ভটাভট ভ্যারেণ্ডা ভ্যালা ভ্যালি ভ্যালিড ভ্যালিডিটি ভ্যালী ভ্যালেন্টাইন ভ্যালেন্টিন ভ্যালভ্যাল ভ্যালসা ভ্যাসকা ভ্যাস্তা ভ্যাড়াকান্ত ভুটি ভুটিয়া ভুটী ভটচায্যি ভট্ট ভুট্টা ভট্টাচার্য ভট্টারক ভট্টারিকা ভট্টি ভট্টিনী ভট্টপল্লি ভুটভাট ভটভট ভুটভুট ভটভটানি ভুডু ভণা ভণিত ভণিতা ভণিতি ভণ্ড ভণ্ডানো ভণ্ডাম ভণ্ডামি ভণ্ডামো ভণ্ডতা ভণ্ডত্ব ভণ্ডন ভণ্ডুল ভুত ভূত ভৃত ভূতং ভৃতক ভূতকাল ভূতগত ভূতগ্রস্ত ভূতঘটিত ভূতাত্ত্বিক ভূতাত্মা ভূতাবাস ভূতাবিষ্ট ভূতাবেশ ভূতার্ত ভূতার্থ ভুতি ভূতি ভৃতি ভূতিকাম ভূতিকর্ম ভৃতিভুক ভূতিভূতি ভূতিয়া ভূতচক্র ভূতচালা ভূতচতুর্দশী ভূতছাড়ানো ভূতঝাড়া ভূতঝাড়ানো ভৃত্য ভৃত্যা ভূতযোনি ভূতযজ্ঞ ভৃত্যদিগ ভৃত্যবর্গ ভূতত্ত্ব ভূতত্ত্ববিদ ভূতত্ত্ববিদ্যা ভূতধারিণী ভূতনাথ ভূতপ্রেত ভূতপ্রেতাদি ভূতপূর্ব ভূত্বক ভূতবিদ্যা ভূতবলি ভূতবলিরূপ ভূতভাবন ভূতভবিষ্যৎ ভূতময় ভূতুরে ভূতল ভূতলবাসী ভূতলশায়ী ভূতশুদ্ধি ভূতসঞ্চার ভূতসঞ্চারী ভুতুড়ি ভুতুড়ে ভূতুড়ে ভুঁদি ভূঁদি ভূদেব ভুঁদো ভদন্ত ভদ্র ভদ্রকালী ভদ্রা ভদ্রানী ভদ্রাম ভদ্রাসন ভদ্রোচিত ভদ্রজন ভদ্রজনোচিত ভদ্রতা ভদ্রতাপূর্ণ ভদ্রতাব্যঞ্জক ভদ্রতাসূচক ভদ্রত্ব ভদ্রপল্লি ভদ্রবংশ ভদ্রবংশীয় ভদ্রবেশী ভদ্রভাবে ভদ্রমহিলা ভদ্রমহোদয় ভদ্রমহোদয়া ভদ্রলোক ভদ্রলোকসুলভ ভদ্রস্থতা ভদ্রসন্তান ভদ্রসমাজ ভূধর ভন ভনা ভুনা ভুনাখিচুড়ি ভুনি ভুনিখিচুড়ি ভন্তে ভনভন ভনভনানি ভনভনানো ভনভনিয়ে ভূপ ভূপাত ভূপাতিত ভূপাল ভূপালি ভূপালী ভূপালীরাগ ভূপতি ভূপতিত ভূপতিমোহন ভূপতিশ্রেষ্ঠ ভূপুত্র ভূপদার্থবিজ্ঞান ভূপ্রকৃতি ভূপর্যস্ত ভূপ্রদক্ষিণ ভূপৃষ্ঠ ভূপৃষ্ঠতল ভূপৃষ্ঠস্থ ভব ভবকারা ভবঘুরে ভবাদৃশ ভবানী ভবানীতন্ত্র ভবানীপতি ভবাপন্ন ভবাবেগ ভবার্ণব ভবি ভূবিজ্ঞান ভূবিজ্ঞানী ভবিতা ভবিতব্য ভবিতব্যতা ভবিত্রী ভূবিদ্যা ভবিষ্যৎ ভবিষ্যৎকাল ভবিষ্যতদ্রষ্টা ভবিষ্যৎবক্তা ভবিষ্যতবাণী ভবিষ্যৎবাণী ভবিষ্যৎবাদ ভবিষ্যতমুখী ভবিষ্যতহবিল ভবিষ্যদ্বক্তা ভবিষ্যদ্বাণী ভবিষ্যনিধি ভবিষ্যপুরাণ ভবিষ্যসূচনা ভবিষ্যসম্ভব্য ভবিষ্ণু ভবিষৎবাণী ভূবিষুবরেখা ভবী ভব্য ভব্যা ভব্যিযুক্ত ভব্যতা ভবযন্ত্রণা ভবতারিণী ভবতারণ ভবতী ভবদীয় ভবদম ভবধাম ভবন ভুবন ভুবনকানা ভবনাদি ভুবনেশ্বর ভুবনেশ্বরী ভুবনজয়ী ভুবনত্রয় ভুবনপাবন ভুবনবিখ্যাত ভুবনবিজয়ী ভুবনমোহিনী ভুবনমোহন ভবপার ভবপারাবার ভববন্ধন ভবভার ভুবর্লোক ভবলীলা ভবলীলাসাঙ্গ ভবলোক ভূবলয় ভবসংসার ভবসুখদুঃখ ভবসাগর ভবসিন্ধু ভবসমুদ্র ভঁভঁ ভূভাগ ভূভার ভূভারত ভূভূৎ ভূভৃৎ ভভম ভভম্বম ভভম্ভম ভূম ভূমা ভূমাবাদী ভূমি ভূমিকা ভূমিকাগত ভূমিকাগ্রহণ ভূমিকেন্দ্রিক ভূমিকম্প ভূমিকর ভূমিকুষ্মাণ্ড ভূমিখণ্ড ভূমিগর্ভ ভূমিগর্ভস্থ ভূমিজ ভূমিজাত ভূমিজীবী ভূমিতি ভূমিতল ভূমিধ্বস ভূমিপিশাচ ভূমিপুত্র ভূমিবিন্যাস ভূমিবেষ্টিত ভূমিব্যবহার ভূমিবল ভূমিভাগ ভূমিরূপ ভূমিরুহ ভূমিশয্যা ভূমিষ্ঠ ভূমিষ্ঠা ভূমিসংলগ্ন ভূমিসংস্কার ভূমিসাৎ ভূমিস্তর ভূমিস্থিত ভূমিস্বত্ব ভূমিহীন ভূমী ভূমীন্দ্র ভূমীরুহ ভূমে ভূম্যধিকারিণী ভূম্যধিকারী ভূমণ্ডল ভূমণ্ডলীয় ভূমধ্য ভূমধ্যরেখা ভূমধ্যসাগর ভূমধ্যসাগরীয় ভম্পেয়ার ভমর ভমরী ভর ভুর ভুরু ভুরূ ভ্রু ভ্রূ ভ্রংশ ভ্রংশিত ভ্রংশন ভরই ভরুক ভরকেন্দ্র ভ্রুকুঞ্চন ভ্রুকুটি ভ্রূকুটি ভ্রুকুণ্ডা ভ্রূকুণ্ডা ভুরকরা ভ্রুক্ষেপ ভ্রূক্ষেপ ভুরুখানি ভর্গ ভরা ভুরা ভরাই ভরাইও ভরাইত ভরাইতাম ভরাইতিস ভরাইতে ভরাইতেছ ভরাইতেছি ভরাইতেছিল ভরাইতেছিলাম ভরাইতেছিলি ভরাইতেছিলে ভরাইতেছিলেন ভরাইতেছিস ভরাইতেছে ভরাইতেছেন ভরাইতেন ভরাইব ভরাইবার ভরাইবি ভরাইবে ভরাইবেন ভরাইল ভরাইলাম ভরাইলি ভরাইলে ভরাইলেন ভরাইয়া ভরাইয়াছ ভরাইয়াছি ভরাইয়াছিল ভরাইয়াছিলাম ভরাইয়াছিলি ভরাইয়াছিলে ভরাইয়াছিলেন ভরাইয়াছিস ভরাইয়াছে ভরাইয়াছেন ভরাইয়ো ভরাক ভরাচ্ছ ভরাচ্ছি ভরাচ্ছিল ভরাচ্ছিলাম ভরাচ্ছিলি ভরাচ্ছিলে ভরাচ্ছিলেন ভরাচ্ছিলেম ভরাচ্ছিলুম ভরাচ্ছিস ভরাচ্ছে ভরাচ্ছেন ভরাট ভরাডুবি ভরাত ভ্রাতৃ ভ্রাতৃক ভ্রাতৃকন্যা ভ্রাতা ভরাতাম ভরাতিস ভরাতে ভরাতেন ভরাতেম ভ্রাতৃজায়া ভ্রাতৃত্ব ভ্রাতৃতুল্য ভ্রাতৃদ্বিতীয়া ভ্রাতৃদ্বয় ভ্রাতৃপ্রীতি ভ্রাতৃপ্রেম ভ্রাতৃপ্রতিম ভ্রাতৃবিরোধ ভ্রাতৃব্য ভ্রাতৃবধূ ভ্রাতৃভাব ভরাতুম ভ্রাত্রীয় ভ্রাতুষ্পুত্র ভ্রাতুষ্পুত্রী ভ্রাতৃসংঘ ভ্রাতৃস্থানীয় ভ্রাতৃস্নেহ ভ্রাতৃহীন ভ্রাতৃহত্যা ভরান ভরানো ভ্রান্ত ভ্রান্তি ভ্রান্তিজনক ভ্রান্তিযুক্ত ভ্রান্তিপাঠ ভ্রান্তিপ্রদ ভ্রান্তিবিলাস ভ্রান্তিবশত ভ্রান্তিমান ভ্রান্ততা ভ্রান্তবিশ্লেষন ভ্রান্তমত ভরাপেট ভরাপুরা ভরাব ভরাবার ভরাবি ভরাবে ভরাবেন ভরাবো ভরাভরতি ভ্রামক ভ্রাম্য ভ্রাম্যমাণ ভ্রামরী ভ্রামরীমিত্রতা ভরাল ভরালাম ভরালি ভরালে ভরালেন ভরালেম ভরালুম ভরাস ভরাস্বাস্থ্য ভরি ভুরি ভূরি ভরিত ভরিতাম ভরিতিস ভরিতে ভরিতেছ ভরিতেছি ভরিতেছিল ভরিতেছিলাম ভরিতেছিলি ভরিতেছিলে ভরিতেছিলেন ভরিতেছিস ভরিতেছে ভরিতেছেন ভরিতেন ভরিব ভরিবার ভরিবি ভরিবে ভরিবেন ভূরিভোজন ভরিল ভরিলাম ভরিলি ভরিলে ভরিলেন ভূরিশ ভরিস ভরিয়া ভরিয়াছ ভরিয়াছি ভরিয়াছিল ভরিয়াছিলাম ভরিয়াছিলি ভরিয়াছিলে ভরিয়াছিলেন ভরিয়াছিস ভরিয়াছে ভরিয়াছেন ভরিয়ে ভরিয়েছ ভরিয়েছি ভরিয়েছিল ভরিয়েছিলাম ভরিয়েছিলি ভরিয়েছিলে ভরিয়েছিলেন ভরিয়েছিলেম ভরিয়েছিলুম ভরিয়েছিস ভরিয়েছে ভরিয়েছেন ভরিয়ো ভরী ভর্চা ভরে ভরেছ ভরেছি ভরেছিল ভরেছিলাম ভরেছিলি ভরেছিলে ভরেছিলেন ভরেছিলেম ভরেছিলুম ভরেছিস ভরেছে ভরেছেন ভরেন ভরো ভুরো ভরছ ভরছি ভরছিল ভরছিলাম ভরছিলি ভরছিলে ভরছিলেন ভরছিলেম ভরছিলুম ভরছিস ভরছে ভরছেন ভরছন ভূর্জ ভর্জিত ভর্জন ভরজনিত ভর্জনপাত্র ভূর্জপাত ভূর্জপত্র ভরযুক্ত ভরযোয়ান ভরযুয়ান ভরণ ভ্রূণ ভ্রূণগ্রহীয় ভ্রূণঘ্ন ভ্রূণায়মানতা ভরণী ভরণীয় ভ্রূণজীব ভরণদান ভরণপোষণ ভ্রূণমধ্যস্থ ভ্রূণহা ভ্রূণহীন ভ্রূণহত্যা ভরত ভর্তৃ ভরতুকি ভর্তুকি ভরতা ভর্তা ভর্তাযুক্ত ভরতাম ভরতি ভর্তি ভরতিস ভরতে ভুরুতে ভরতেন ভরতেম ভরতের ভর্ত্তৃ ভর্তৃদারক ভরতবাক্য ভরতবচন ভর্তব্য ভরতুম ভর্ত্রিণী ভর্ত্রী ভর্তৃহীনা ভরদুপুর ভরদ্বাজ ভ্রূদ্বয় ভরন ভরুন ভরনা ভরন্ত ভরপেট ভরপুর ভরব ভরবার ভরবি ভ্রুবিভঙ্গ ভ্রূবিভঙ্গ ভ্রুবিভ্রম ভ্রূবিভ্রম ভ্রুবিলাস ভ্রূবিলাস ভরবিহীন ভরবে ভরবেগ ভরবেন ভরবো ভরবহন ভ্রুভঙ্গ ভ্রূভঙ্গ ভ্রুভঙ্গি ভ্রূভঙ্গি ভুরভাঙ্গা ভুরভাঙা ভরভর ভুরভুর ভুরভুরে ভরম ভ্রম ভ্রমক্রমে ভ্রমা ভ্রমাত্মক ভ্রমানো ভ্রমান্ধ ভ্রমান্ধতা ভ্রমি ভ্রমিক ভ্রমী ভ্রমযুক্ত ভ্রমযুক্ততা ভ্রমণ ভ্রমণকারী ভ্রমণকাল ভ্রমণকাহিনী ভ্রমণপথ ভ্রমণবিলাস ভ্রমণবৃত্তান্ত ভ্রমণরত ভ্রমণশীল ভ্রমণসঙ্গী ভ্রুমধ্য ভ্রূমধ্য ভ্রূমধ্যস্থ ভ্রমনিরসন ভ্রমপূর্ণ ভ্রমপ্রমাদ ভ্রমবিশ্লেষণ ভ্রমবশত ভ্রমভঙ্গ ভ্রমমাণ ভ্রমর ভ্রমরক ভ্রমরকৃষ্ণ ভ্রমরী ভ্রমরজাত ভ্রমরূপ ভ্রমসংকুল ভ্রমসংশোধন ভ্রমসঙ্কুল ভ্রমসি ভ্রমহীন ভ্রমহীনতা ভ্রমহেতু ভ্রুর ভ্রূর ভরল ভরলাম ভরলি ভরলে ভরলেন ভরলেম ভূর্লোক ভ্রুলতা ভ্রূলতা ভরলুম ভ্রষ্ট ভ্রষ্টা ভ্রষ্টাচার ভ্রষ্টাচারিণী ভ্রষ্টাচারী ভ্রষ্টাচারণ ভ্রষ্টতা ভ্রুসংকেত ভ্রূসংকেত ভরসংখ্যাবিশিষ্ট ভরসা ভরসাদান ভরসাদানকারী ভরসাদায়ক ভরসাব্যঞ্জক ভরসাস্থান ভরসাস্থল ভরসাহীন ভরসাহীনতা ভরস্থির ভরসন্ধ্যা ভরসম্পন্ন ভরসহ ভল ভুল ভুলু ভুলক ভুলুক ভলকা ভলকেনো ভুলক্রমে ভুলগারি ভুলা ভুলাই ভুলাইও ভুলাইত ভুলাইতাম ভুলাইতিস ভুলাইতে ভুলাইতেছ ভুলাইতেছি ভুলাইতেছিল ভুলাইতেছিলাম ভুলাইতেছিলি ভুলাইতেছিলে ভুলাইতেছিলেন ভুলাইতেছিস ভুলাইতেছে ভুলাইতেছেন ভুলাইতেন ভুলাইব ভুলাইবার ভুলাইবি ভুলাইবে ভুলাইবেন ভুলাইল ভুলাইলাম ভুলাইলি ভুলাইলে ভুলাইলেন ভুলাইয়া ভুলাইয়াছ ভুলাইয়াছি ভুলাইয়াছিল ভুলাইয়াছিলাম ভুলাইয়াছিলি ভুলাইয়াছিলে ভুলাইয়াছিলেন ভুলাইয়াছিস ভুলাইয়াছে ভুলাইয়াছেন ভুলাইয়ো ভুলাক ভুলাথ ভ্লাদিমি ভুলান ভুলানি ভুলানে ভুলানো ভলান্টিয়ার ভলান্টিয়ার্স ভুলাস ভুলি ভলিউম ভুলিত ভুলিতাম ভুলিতিস ভুলিতে ভুলিতেছ ভুলিতেছি ভুলিতেছিল ভুলিতেছিলাম ভুলিতেছিলি ভুলিতেছিলে ভুলিতেছিলেন ভুলিতেছিস ভুলিতেছে ভুলিতেছেন ভুলিতেন ভুলিব ভুলিবার ভুলিবি ভুলিবে ভুলিবেন ভলিবল ভুলিল ভুলিলাম ভুলিলি ভুলিলে ভুলিলেন ভুলিস ভুলিয়া ভুলিয়াছ ভুলিয়াছি ভুলিয়াছিল ভুলিয়াছিলাম ভুলিয়াছিলি ভুলিয়াছিলে ভুলিয়াছিলেন ভুলিয়াছিস ভুলিয়াছে ভুলিয়াছেন ভুলিয়ে ভুলিয়েছ ভুলিয়েছি ভুলিয়েছিল ভুলিয়েছিলাম ভুলিয়েছিলি ভুলিয়েছিলে ভুলিয়েছিলেন ভুলিয়েছিলেম ভুলিয়েছিলুম ভুলিয়েছিস ভুলিয়েছে ভুলিয়েছেন ভুলিয়ো ভুলচুক ভুলচ্ছ ভুলচ্ছি ভুলচ্ছিল ভুলচ্ছিলাম ভুলচ্ছিলি ভুলচ্ছিলে ভুলচ্ছিলেন ভুলচ্ছিলেম ভুলচ্ছিলুম ভুলচ্ছিস ভুলচ্ছে ভুলচ্ছেন ভুলে ভুলেছ ভুলেছি ভুলেছিল ভুলেছিলাম ভুলেছিলি ভুলেছিলে ভুলেছিলেন ভুলেছিলেম ভুলেছিলুম ভুলেছিস ভুলেছে ভুলেছেন ভুলেন ভুলো ভূলোক ভুলছ ভুলছি ভুলছিল ভুলছিলাম ভুলছিলি ভুলছিলে ভুলছিলেন ভুলছিলেম ভুলছিলুম ভুলছিস ভুলছে ভুলছেন ভল্ট ভূলুণ্ঠিত ভুলত ভুলতা ভূলতা ভুলতাম ভুলতিস ভুলতে ভুলতেন ভুলতেম ভুলতুম ভুলত্রুটি ভুলন ভুলুন ভুলনা ভুলুনি ভুলুনে ভুলনো ভুলব ভুলবার ভুলবি ভুলবে ভুলবেন ভুলবো ভুলবশত ভুলভাঙা ভুলভাবে ভুলভাল ভুলভ্রান্তি ভল্ল ভুলল ভল্লুক ভল্লূক ভল্লুকা ভল্লুকী ভুললাম ভল্লি ভুললি ভুললে ভুললেন ভুললেম ভল্লম ভুললুম ভুলস ভুলহীন ভুলয় ভুশ ভৃশ ভূশয্যা ভুশণ্ডি ভুশুণ্ডি ভূশণ্ডি ভুশুড়ি ভূষ ভষক ভুষা ভূষা ভুষাকালি ভুষি ভূষিত ভূষিতা ভুষিমাল ভুষো ভৃষ্ট ভুষ্টিনাশ ভূষণ ভূষণাই ভূষণ্ড ভুষণ্ডি ভূষণ্ডি ভূষণপ্রিয় ভূষণহীন ভষল ভুষুড়ি ভস ভুস ভসকা ভস্কা ভুসঙ্গ ভুসা ভুসাকালি ভুসি ভুসিমাল ভুসো ভুসোকালি ভস্ত্রা ভূস্বামী ভূস্বর্গ ভসভস ভসম ভস্ম ভস্মক ভস্মকীট ভস্মাচ্ছাদিত ভস্মাচ্ছন্ন ভস্মাধার ভস্মান্ত ভস্মাবৃত ভস্মাবশেষ ভস্মিত ভস্মীকৃত ভস্মীকরণ ভস্মীভূত ভস্মতূল্য ভূসম্পত্তি ভস্মরূপ ভস্মলিপ্ত ভস্মলোচন ভস্মসাৎ ভস্মস্তূপ ভড় ভুড় ভড়ং ভড়ংদার ভড়ক ভড়কা ভড়কাই ভড়কাইও ভড়কাইত ভড়কাইতাম ভড়কাইতিস ভড়কাইতে ভড়কাইতেছ ভড়কাইতেছি ভড়কাইতেছিল ভড়কাইতেছিলাম ভড়কাইতেছিলি ভড়কাইতেছিলে ভড়কাইতেছিলেন ভড়কাইতেছিস ভড়কাইতেছে ভড়কাইতেছেন ভড়কাইতেন ভড়কাইব ভড়কাইবার ভড়কাইবি ভড়কাইবে ভড়কাইবেন ভড়কাইল ভড়কাইলাম ভড়কাইলি ভড়কাইলে ভড়কাইলেন ভড়কাইয়া ভড়কাইয়াছ ভড়কাইয়াছি ভড়কাইয়াছিল ভড়কাইয়াছিলাম ভড়কাইয়াছিলি ভড়কাইয়াছিলে ভড়কাইয়াছিলেন ভড়কাইয়াছিস ভড়কাইয়াছে ভড়কাইয়াছেন ভড়কাইয়ো ভড়কাক ভড়কাচ্ছ ভড়কাচ্ছি ভড়কাচ্ছিল ভড়কাচ্ছিলাম ভড়কাচ্ছিলি ভড়কাচ্ছিলে ভড়কাচ্ছিলেন ভড়কাচ্ছিলেম ভড়কাচ্ছিলুম ভড়কাচ্ছিস ভড়কাচ্ছে ভড়কাচ্ছেন ভড়কাত ভড়কাতাম ভড়কাতিস ভড়কাতে ভড়কাতেন ভড়কাতেম ভড়কাতুম ভড়কান ভড়কানি ভড়কানো ভড়কাব ভড়কাবার ভড়কাবি ভড়কাবে ভড়কাবেন ভড়কাবো ভড়কাল ভড়কালাম ভড়কালি ভড়কালে ভড়কালেন ভড়কালেম ভড়কালো ভড়কালুম ভড়কাস ভড়কি ভড়কে ভড়কেছ ভড়কেছি ভড়কেছিল ভড়কেছিলাম ভড়কেছিলি ভড়কেছিলে ভড়কেছিলেন ভড়কেছিলেম ভড়কেছিলুম ভড়কেছিস ভড়কেছে ভড়কেছেন ভড়কো ভুড়ুকভুড়ুক ভুড়া ভুঁড়া ভুঁড়াশেয়াল ভুঁড়ি ভুঁড়িওয়ালা ভুড়ে ভুঁড়ে ভুড়েশেয়াল ভুড়ো ভুঁড়ো ভুড়োশেয়াল ভড়ভড় ভুড়ভুড় ভড়ভড়ানি ভড়ভড়ানো ভুড়ভুড়ি ভয় ভয়ংকর ভয়ংকরী ভয়ংকরতম ভয়কাতর ভয়কাতুরে ভয়করা ভয়ক্লিষ্ট ভয়ক্লিষ্টা ভয়খাওয়া ভয়ঙ্কর ভয়ঙ্করী ভয়ঙ্করতম ভুয়া ভয়াকুল ভুয়াযুদ্ধ ভয়াতুর ভয়াদি ভয়ানক ভয়াবহ ভয়াবহতা ভয়াবহতম ভয়াবহভাবে ভয়াবহরকম ভয়ার্ত ভয়াল ভয়ালযুদ্ধ ভয়িলা ভূয়িষ্ঠ ভূয়িষ্ঠক ভূয়িষ্ঠতা ভয়চকিত ভয়চঞ্চল ভয়েরচিহ্ন ভুঁয়েস ভুয়ো ভয়োৎপাদক ভয়োৎপাদন ভূয়োদর্শিতা ভূয়োদর্শন ভূয়োভূয় ভয়জনিত ভয়জন্মানো ভয়জড়িত ভয়যুক্ত ভয়ডর ভয়তরাসে ভয়ত্রাসে ভয়দ ভয়নাশক ভয়নাশিনী ভয়নাশন ভয়পাওয়া ভয়প্রদ ভয়প্রদর্শন ভয়ভাঙ্গা ভয়ভাঙা ভয়ভীতি ভয়ভঞ্জন ভয়মুক্ত ভয়মিশ্রিত ভয়রোঁ ভয়লজ্জাদি ভয়শীল ভয়শীলতা ভয়শূন্য ভয়শূন্যতা ভয়ষা ভঁয়ষা ভয়সা ভঁয়সা ভূয়সী ভয়সূচক ভয়হীন ভয়হীনতা".split(" "),
              w_c: "চ চু চং চুং চংক্রমণ চংগাল চংগল চই চুই চইচই চুঁইচুঁই চইত চুইত চুইতাম চুইতিস চুইতে চুইতেছ চুইতেছি চুইতেছিল চুইতেছিলাম চুইতেছিলি চুইতেছিলে চুইতেছিলেন চুইতেছিস চুইতেছে চুইতেছেন চুইতেন চুইতেম চুইতুম চুইব চুইবার চুইবি চুইবে চুইবেন চুইল চইলা চুইলাম চুইলি চুইলে চুইলেন চুইলেম চুইলুম চইড় চুইয়া চুইয়াছ চুইয়াছি চুইয়াছিল চুইয়াছিলাম চুইয়াছিলি চুইয়াছিলে চুইয়াছিলেন চুইয়াছিস চুইয়াছে চুইয়াছেন চুইয়ে চুইয়েছ চুইয়েছি চুইয়েছিল চুইয়েছিলাম চুইয়েছিলি চুইয়েছিলে চুইয়েছিলেন চুইয়েছিলেম চুইয়েছিলুম চুইয়েছিস চুইয়েছে চুইয়েছেন চুইয়ো চউখ চউতোর চওক চঁওকি চওগান চওড়া চওড়াপাড় চওড়ারাস্তা চুওয়াল চক চুক চুকক চুকুক চক্কোর চক্কর চকখড়ি চকা চুকা চুকাইত চুকাইতাম চুকাইতিস চুকাইতে চুকাইতেছ চুকাইতেছি চুকাইতেছিল চুকাইতেছিলাম চুকাইতেছিলি চুকাইতেছিলে চুকাইতেছিলেন চুকাইতেছিস চুকাইতেছে চুকাইতেছেন চুকাইতেন চুকাইব চুকাইবার চুকাইবি চুকাইবে চুকাইবেন চুকাইল চুকাইলাম চুকাইলি চুকাইলে চুকাইলেন চুকাইয়া চুকাইয়াছ চুকাইয়াছি চুকাইয়াছিল চুকাইয়াছিলাম চুকাইয়াছিলি চুকাইয়াছিলে চুকাইয়াছিলেন চুকাইয়াছিস চুকাইয়াছে চুকাইয়াছেন চুকাইয়ো চুকাক চকাচকি চুকান চুকানো চকারবকার চুকাস চকি চুকি চকিঘাটি চকিত চুকিত চকিতা চুকিতাম চুকিতিস চুকিতে চুকিতেছ চুকিতেছি চুকিতেছিল চুকিতেছিলাম চুকিতেছিলি চুকিতেছিলে চুকিতেছিলেন চুকিতেছিস চুকিতেছে চুকিতেছেন চুকিতেন চকিতের চকিতদৃষ্টি চকিনী চুকিব চুকিবার চুকিবি চুকিবে চুকিবেন চুকিল চুকিলাম চুকিলি চুকিলে চুকিলেন চুকিস চুকিয়া চুকিয়াছ চুকিয়াছি চুকিয়াছিল চুকিয়াছিলাম চুকিয়াছিলি চুকিয়াছিলে চুকিয়াছিলেন চুকিয়াছিস চুকিয়াছে চুকিয়াছেন চুকিয়ে চুকিয়েছ চুকিয়েছি চুকিয়েছিল চুকিয়েছিলাম চুকিয়েছিলি চুকিয়েছিলে চুকিয়েছিলেন চুকিয়েছিলেম চুকিয়েছিলুম চুকিয়েছিস চুকিয়েছে চুকিয়েছেন চুকিয়ো চকী চকচক চুকচুক চকচকান চকচকানি চকচকানো চুকচ্ছ চুকচ্ছি চুকচ্ছিল চুকচ্ছিলাম চুকচ্ছিলি চুকচ্ছিলে চুকচ্ছিলেন চুকচ্ছিলেম চুকচ্ছিলুম চুকচ্ছিস চুকচ্ছে চুকচ্ছেন চুকে চুকেছ চুকেছি চুকেছিল চুকেছিলাম চুকেছিলি চুকেছিলে চুকেছিলেন চুকেছিলেম চুকেছিলুম চুকেছিস চুকেছে চুকেছেন চুকেন চুকো চকোর চকোরিনী চকোরিয়া চকোরী চকোলেট চকোয়া চুকছ চুকছি চুকছিল চুকছিলাম চুকছিলি চুকছিলে চুকছিলেন চুকছিলেম চুকছিলুম চুকছিস চুকছে চুকছেন চুকত চুকতাম চুক্তি চুক্তিগুলো চুক্তিনামা চুক্তিপত্র চুক্তিবিরোধী চুক্তিবদ্ধ চুক্তিভঙ্গ চুক্তিভিত্তিক চুক্তিমত চুকতিস চুকতে চুকতেন চুকতেম চুকতুম চুকন চুকুন চুকনো চুকব চকবাজার চুকবার চুকবি চুকবে চুকবেন চুকবো চকবোর্ড চকবন্দ চকবন্দি চকবন্দী চকমক চকমকান চকমকানি চকমকানো চকমকি চকমকে চকমিলান চকমিলানো চক্র চক্রকবি চক্রগতি চক্রাকার চক্রাকৃতি চক্রান্ত চক্রান্তকারী চক্রান্তিক চক্রাবর্ত চক্রিকা চকরিয়া চক্রী চক্রচিহ্ন চক্রচিহ্নযুক্ত চক্রীয় চক্রযুক্ত চক্রতীর্থ চক্রদার চক্রধারী চক্রধুরা চক্রনাভি চক্রনেমি চক্রপাণি চক্রপাদ চক্রপুর চক্রবক্র চক্রবাক চক্রবাকী চক্রবাত চক্রবাল চক্রবাড় চক্রবিরোধী চক্রব্যূহ চক্রবত চক্রবৃদ্ধি চক্রবৃদ্ধিহার চক্রবর্তী চক্রমুক্তি চক্রসৃষ্টি চুকল চুকলাম চুকলি চুকলিখোর চকলেট চুকলেন চুকলেম চুকলুম চক্ষ চক্ষু চক্ষুঃ চক্ষুকর্ণ চক্ষুকর্ণাদি চক্ষুকর্ণনাসিকা চক্ষুক্ষত চক্ষুখাদিকা চক্ষুগোচর চক্ষুগোলক চক্ষুচড়ক চক্ষেরপুতলি চক্ষুছানাবড়া চক্ষুযুক্ত চক্ষুযুক্তা চক্ষুদান চক্ষুদ্বয় চক্ষুপল্লব চক্ষুবিজ্ঞান চক্ষুর্গোচর চক্ষুরোগ চক্ষূরোগ চক্ষুরঞ্জন চক্ষুর্দান চক্ষুরুন্মীলন চক্ষুর্লজ্জা চক্ষুলজ্জা চক্ষুলজ্জাহীন চক্ষুশূল চক্ষুষ্মান চক্ষুষ্মতী চক্ষুসত্তা চক্ষুস্থির চক্ষুস্নায়ু চক্ষুহীন চক্ষুহীনা চুকস চকসা চকহরি চখা চখাচখি চখি চখী চুগল চুগলখোর চুগলখোরি চঙক্রমণ চঙ্গ চুঙ্গি চুঙ্গিকর চুঙ্গী চুঙ্গীকর চঙ্গল চুঙা চুঙি চুঙিকর চা চাং চাংগা চাংগারি চাংগাড়ি চাংড়া চাই চাঁই চাঁইচুঁই চাঁইচোর চাইছ চাইছি চাইছিল চাইছিলাম চাইছিলি চাইছিলে চাইছিলেন চাইছিলেম চাইছিলুম চাইছিস চাইছে চাইছেন চাইত চাইতাম চাইতিস চাইতে চাইতেই চাইতেও চাইতেছিল চাইতেছিলাম চাইতেছিলি চাইতেছিলে চাইতেছিলেন চাইতেছিলেম চাইতেছিলুম চাইতেন চাইতেম চাইতো চাইতুম চাইনা চাইনি চাইনিজ চাইব চাইবার চাইবি চাইবে চাইবেন চাইবো চাইম চাইল চাইলাম চাইলি চাইলে চাইলেন চাইলেম চাইলো চাইল্ড চাইল্ডহুড চাইলপড়া চাইলুম চাউনি চাউর চাউল চাও চাওন চাওলা চাওয়া চাওয়াচাওয়ি চাওয়ান চাওয়ানো চাক চাকু চাক্কা চাক্কি চাক্কী চাকা চাকাচাকা চাকাযুক্ত চাকান চাকার চাকি চাকিবেলন চাকী চাকচক্য চাকচিক্য চাকচিক্যবিহীন চাকচিক্যময় চাকচিক্যহীন চাকতি চাক্তি চাকনাচুর চাকনচিকন চাকন্দা চাকুন্দা চাকফি চাকবি চাকভাউর চাকভাউরি চাকভাঁউরি চাকভাঙ্গা চাকভাঙা চাকমা চাকুমচাকুম চাকর চাকরগিরি চাকরান চাকরানি চাকরানী চাকরানজমি চাকরি চাকরিক্ষেত্র চাকরিজীবী চাকরিজীবন চাকরিবাকরি চাকরিরত চাকুরিয়া চাকরী চাকুরী চাকুরীক্ষেত্র চাকুরীগত চাকরীচ্যুত চাকুরীজীবী চাকুরীজীবন চাকুরীবাকরি চাকুরীরত চাকরীস্থল চাকুরীহীন চাকুরে চাকরনফর চাকরবাকর চাকলা চাকলাদার চাক্ষুষ চাক্ষুষী চাখ চাখুক চাখা চাখান চাখানো চাখি চাখিত চাখিতাম চাখিতিস চাখিতে চাখিতেছ চাখিতেছি চাখিতেছিল চাখিতেছিলাম চাখিতেছিলি চাখিতেছিলে চাখিতেছিলেন চাখিতেছিস চাখিতেছে চাখিতেছেন চাখিতেন চাখিনি চাখিব চাখিবার চাখিবি চাখিবে চাখিবেন চাখিল চাখিলাম চাখিলি চাখিলে চাখিলেন চাখিস চাখিয়া চাখিয়াছ চাখিয়াছি চাখিয়াছিল চাখিয়াছিলাম চাখিয়াছিলি চাখিয়াছিলে চাখিয়াছিলেন চাখিয়াছিস চাখিয়াছে চাখিয়াছেন চাখিয়ো চাখেন চাখো চাখোর চাখছ চাখছি চাখছিল চাখছিলাম চাখছিলি চাখছিলে চাখছিলেন চাখছিলেম চাখছিলুম চাখছিস চাখছে চাখছেন চাখত চাখতাম চাখতিস চাখতে চাখতেন চাখতেম চাখতুম চাখন চাখুন চাখনাচুর চাখনদার চাখব চাখবার চাখবি চাখবে চাখবেন চাখবো চাখল চাখলাম চাখলি চাখলে চাখলেন চাখলেম চাখলুম চাখড়ি চাগা চাগান চাগানো চাগাড় চাগিয়ে চাগিয়েছে চাঙ চাঙ্গ চাঙ্গা চাঙ্গাড়ি চাঙ্গড় চাঙ্গড়া চাঙা চাঙারি চাঙড় চাঙড়া চাঁচ চাঁচুক চাচা চাঁচা চাঁচাছোলা চাচাজি চাচাত চাচাতো চাঁচাড়ি চাচি চাঁচি চাঁচিতেছ চাঁচিতেছি চাঁচিতেছিল চাঁচিতেছিলাম চাঁচিতেছিলি চাঁচিতেছিলে চাঁচিতেছিলেন চাঁচিতেছিস চাঁচিতেছে চাঁচিতেছেন চাঁচিতেন চাঁচিব চাঁচিবার চাঁচিবি চাঁচিবে চাঁচিবেন চাঁচিল চাঁচিলাম চাঁচিলি চাঁচিলে চাঁচিলেন চাঁচিস চাঁচিয়া চাঁচিয়াছ চাঁচিয়াছি চাঁচিয়াছিল চাঁচিয়াছিলাম চাঁচিয়াছিলি চাঁচিয়াছিলে চাঁচিয়াছিলেন চাঁচিয়াছিস চাঁচিয়াছে চাঁচিয়াছেন চাঁচিয়ো চাচী চাঁচে চাঁচেন চাঁচ্ছ চাচ্ছি চাঁচছি চাচ্ছিল চাঁচছিল চাচ্ছিলাম চাঁচছিলাম চাচ্ছিলি চাঁচছিলি চাচ্ছিলে চাঁচছিলে চাচ্ছিলেন চাঁচছিলেন চাচ্ছিলেম চাঁচছিলেম চাচ্ছিলুম চাঁচছিলুম চাঁচছিস চাচ্ছে চাঁচছে চাচ্ছেন চাঁচছেন চাঁচত চাঁচতাম চাঁচতিস চাঁচতে চাঁচতেন চাঁচতেম চাঁচতুম চাঁচদা চাঁচুন চাঁচনি চাঁচব চাঁচবার চাঁচবি চাঁচবে চাঁচবেন চাঁচবো চাঁচর চাঁচল চাঁচলাম চাঁচলি চাঁচলে চাঁচলেন চাঁচলেম চাঁচলুম চাঁছা চাছাঁকা চাঁছাছোলা চাঁছার চাঁছাড়ি চাঁছি চাঁছনি চাঞা চাঞ্চল্য চাঞ্চল্যকর চাঞ্চল্যযুক্ত চাঞ্চল্যহীন চাট চাটু চাঁট চাটুক চাটুকার চাটুকারিতা চাটূক্তি চাটগাঁইয়া চাটগাঁও চাটা চাঁটা চাটাই চাটাচাটি চাটান চাটানো চাটাল চাটালো চাটি চাঁটি চাটিত চাটিতাম চাটিতিস চাটিতে চাটিতেছ চাটিতেছি চাটিতেছিল চাটিতেছিলাম চাটিতেছিলি চাটিতেছিলে চাটিতেছিলেন চাটিতেছিস চাটিতেছে চাটিতেছেন চাটিতেন চাটিব চাটিবাটি চাটিবার চাটিবি চাটিবে চাটিবেন চাটিম চাটিল চাটিলাম চাটিলি চাটিলে চাটিলেন চাটিস চাটিয়া চাটিয়াছ চাটিয়াছি চাটিয়াছিল চাটিয়াছিলাম চাটিয়াছিলি চাটিয়াছিলে চাটিয়াছিলেন চাটিয়াছিস চাটিয়াছে চাটিয়াছেন চাটিয়ো চাটে চাটেন চাটছ চাটছি চাটছিল চাটছিলাম চাটছিলি চাটছিলে চাটছিলেন চাটছিলেম চাটছিলুম চাটছিস চাটছে চাটছেন চাটুজ্জে চাটুজ্যে চাট্টি চাট্টে চাটুয্যে চাটত চাটতাম চাটুতি চাটতিস চাটতে চাটতেন চাটতেম চাটতুম চাটুন চাটনি চাটব চাটুবাক্য চাটুবাণী চাটুবাদ চাটুবাদিনী চাটুবাদী চাটবার চাটবি চাটুবচন চাটবে চাটবেন চাটবো চাটুবৃত্তি চাটুভাষিণী চাটুভাষী চাটমোহর চাটল চাটলাম চাটলি চাটলে চাটলেন চাটলেম চাটলুম চাণক্য চাতক চাতকিনী চাতকী চাতাল চাতর চাতুর চাতুরী চাতুর্য চাতুর্যপূর্ণ চাতুর্যময় চাতুর্বর্ণ্য চাতুর্মাস্য চাতুর্মাস্যা চাঁদ চাঁদকপালি চাঁদকপালে চাঁদকুড়া চাঁদকুড়ো চাঁদা চাঁদাআদায়কারী চাঁদাকুড়া চাঁদাতোলা চাদান চাদানি চাদানী চাঁদাবাজ চাঁদাবাজি চাঁদামাছ চাঁদামামা চাঁদাসংগ্রহ চাঁদি চাঁদিনী চাঁদিমা চাঁদেকলঙ্ক চাঁদেরকণা চাঁদেরহাট চাঁদোয়া চাঁদোয়ারঝালর চাঁদনি চাঁদনিচক চাঁদনিরাত চাঁদনী চাঁদপানা চাঁদপাল্লা চাঁদপুর চাঁদবদন চাঁদবদনী চাঁদমুখ চাঁদমারি চাঁদমালা চাদর চান চানক চানকা চানকাচ্ছে চানকাচ্ছেন চানকাতে চানকান চানকানো চানা চানাচুর চানাচুরওয়ালা চানতলা চান্দ চান্দু চান্দা চান্দিনা চান্দোয়া চান্দ্র চান্দ্রায়ণ চান্দ্রায়ণিক চান্দ্রায়ণব্রত চান্দ্রবৎসর চান্দ্রমাস চান্দ্রমাসব্যাপী চান্দশ চাননি চান্স চাপ চাপুক চাপকান চাপগত চাপগ্রস্থ চাপা চাঁপা চাপাঅসোন্তষ চাপাআক্রোশ চাপাইত চাপাইতাম চাপাইতিস চাপাইতে চাপাইতেছ চাপাইতেছি চাপাইতেছিল চাপাইতেছিলাম চাপাইতেছিলি চাপাইতেছিলে চাপাইতেছিলেন চাপাইতেছিস চাপাইতেছে চাপাইতেছেন চাপাইতেন চাঁপাইনবাবগঞ্জ চাপাইব চাপাইবার চাপাইবি চাপাইবে চাপাইবেন চাপাইল চাপাইলাম চাপাইলি চাপাইলে চাপাইলেন চাপাইয়া চাপাইয়াছ চাপাইয়াছি চাপাইয়াছিল চাপাইয়াছিলাম চাপাইয়াছিলি চাপাইয়াছিলে চাপাইয়াছিলেন চাপাইয়াছিস চাপাইয়াছে চাপাইয়াছেন চাপাইয়ো চাপাক চাপাকান্না চাঁপাগাছ চাপাগলা চাপাচাপি চাপাচ্ছ চাপাচ্ছি চাপাচ্ছিল চাপাচ্ছিলাম চাপাচ্ছিলি চাপাচ্ছিলে চাপাচ্ছিলেন চাপাচ্ছিলেম চাপাচ্ছিলুম চাপাচ্ছিস চাপাচ্ছে চাপাচ্ছেন চাপাচুপি চাপাটি চাঁপাডাঙা চাপাত চাপাতাম চাপাতি চাপাতিস চাপাতে চাপাতেন চাপাতেম চাপাতুম চাপান চাপানউতোর চাপানো চাপাপড়া চাঁপাফুল চাপাব চাপাবাজ চাপাবাজি চাপাবার চাপাবি চাপাবে চাপাবেদনা চাপাবেন চাপাবো চাপাল চাপালাম চাপালি চাপালে চাপালেন চাপালেম চাপালুম চাপাস চাপাহাসি চাপি চাপিত চাপিতাম চাপিতিস চাপিতে চাপিতেছ চাপিতেছি চাপিতেছিল চাপিতেছিলাম চাপিতেছিলি চাপিতেছিলে চাপিতেছিলেন চাপিতেছিস চাপিতেছে চাপিতেছেন চাপিতেন চাপিব চাপিবার চাপিবি চাপিবে চাপিবেন চাপিল চাপিলা চাপিলাম চাপিলি চাপিলে চাপিলেন চাপিস চাপিয়া চাপিয়াছ চাপিয়াছি চাপিয়াছিল চাপিয়াছিলাম চাপিয়াছিলি চাপিয়াছিলে চাপিয়াছিলেন চাপিয়াছিস চাপিয়াছে চাপিয়াছেন চাপিয়ে চাপিয়েছ চাপিয়েছি চাপিয়েছিল চাপিয়েছিলাম চাপিয়েছিলি চাপিয়েছিলে চাপিয়েছিলেন চাপিয়েছিলেম চাপিয়েছিলুম চাপিয়েছিস চাপিয়েছে চাপিয়েছেন চাপিয়ো চাপচাপ চাপেন চাপছ চাপছি চাপছিল চাপছিলাম চাপছিলি চাপছিলে চাপছিলেন চাপছিলেম চাপছিলুম চাপছিস চাপছে চাপছেন চাপজনিত চাপট চাপটালি চাপটি চাপটী চাপত চাপতাম চাপতিস চাপতে চাপতেন চাপতেম চাপতুম চাপদই চাপদাড়ি চাপদণ্ড চাপন চাপুন চাপপ্রয়োগ চাপব চাপবার চাপবি চাপবে চাপবেন চাপবো চাপমুক্ত চাপমান চাপমানযন্ত্র চাপমাপক চাপমোচন চাপরা চাপরাশ চাপরাশি চাপরাশধারী চাপরাস চাপরাসি চাপল চাপলাম চাপলি চাপলে চাপলেন চাপলেম চাপল্য চাপলুম চাপসৃষ্টি চাপড় চাপড়া চাপড়াইত চাপড়াইতাম চাপড়াইতিস চাপড়াইতে চাপড়াইতেছ চাপড়াইতেছি চাপড়াইতেছিল চাপড়াইতেছিলাম চাপড়াইতেছিলি চাপড়াইতেছিলে চাপড়াইতেছিলেন চাপড়াইতেছিস চাপড়াইতেছে চাপড়াইতেছেন চাপড়াইতেন চাপড়াইব চাপড়াইবার চাপড়াইবি চাপড়াইবে চাপড়াইবেন চাপড়াইল চাপড়াইলাম চাপড়াইলি চাপড়াইলে চাপড়াইলেন চাপড়াইয়া চাপড়াইয়াছ চাপড়াইয়াছি চাপড়াইয়াছিল চাপড়াইয়াছিলাম চাপড়াইয়াছিলি চাপড়াইয়াছিলে চাপড়াইয়াছিলেন চাপড়াইয়াছিস চাপড়াইয়াছে চাপড়াইয়াছেন চাপড়াইয়ো চাপড়াক চাপড়াচ্ছ চাপড়াচ্ছি চাপড়াচ্ছিল চাপড়াচ্ছিলাম চাপড়াচ্ছিলি চাপড়াচ্ছিলে চাপড়াচ্ছিলেন চাপড়াচ্ছিলেম চাপড়াচ্ছিলুম চাপড়াচ্ছিস চাপড়াচ্ছে চাপড়াচ্ছেন চাপড়াত চাপড়াতাম চাপড়াতিস চাপড়াতে চাপড়াতেন চাপড়াতেম চাপড়াতুম চাপড়ান চাপড়ানো চাপড়াব চাপড়াবার চাপড়াবি চাপড়াবে চাপড়াবেন চাপড়াবো চাপড়াল চাপড়ালাম চাপড়ালি চাপড়ালে চাপড়ালেন চাপড়ালেম চাপড়ালুম চাপড়াস চাপড়ি চাপড়ে চাপড়েছ চাপড়েছি চাপড়েছিল চাপড়েছিলাম চাপড়েছিলি চাপড়েছিলে চাপড়েছিলেন চাপড়েছিলেম চাপড়েছিলুম চাপড়েছিস চাপড়েছে চাপড়েছেন চাপড়ো চাব চাবুক চাবকা চাবকাইত চাবকাইতাম চাবকাইতিস চাবকাইতে চাবকাইতেছ চাবকাইতেছি চাবকাইতেছিল চাবকাইতেছিলাম চাবকাইতেছিলি চাবকাইতেছিলে চাবকাইতেছিলেন চাবকাইতেছিস চাবকাইতেছে চাবকাইতেছেন চাবকাইতেন চাবকাইব চাবকাইবার চাবকাইবি চাবকাইবে চাবকাইবেন চাবকাইল চাবকাইলাম চাবকাইলি চাবকাইলে চাবকাইলেন চাবকাইয়া চাবকাইয়াছ চাবকাইয়াছি চাবকাইয়াছিল চাবকাইয়াছিলাম চাবকাইয়াছিলি চাবকাইয়াছিলে চাবকাইয়াছিলেন চাবকাইয়াছিস চাবকাইয়াছে চাবকাইয়াছেন চাবকাইয়ো চাবকাক চাবকাচ্ছ চাবকাচ্ছি চাবকাচ্ছিল চাবকাচ্ছিলাম চাবকাচ্ছিলি চাবকাচ্ছিলে চাবকাচ্ছিলেন চাবকাচ্ছিলেম চাবকাচ্ছিলুম চাবকাচ্ছিস চাবকাচ্ছে চাবকাচ্ছেন চাবকাত চাবকাতাম চাবকাতিস চাবকাতে চাবকাতেন চাবকাতেম চাবকাতুম চাবকান চাবকানি চাবকানো চাবকাব চাবকাবার চাবকাবি চাবকাবে চাবকাবেন চাবকাবো চাবকাল চাবকালাম চাবকালি চাবকালে চাবকালেন চাবকালেম চাবকালুম চাবকাস চাবকে চাবকেছ চাবকেছি চাবকেছিল চাবকেছিলাম চাবকেছিলি চাবকেছিলে চাবকেছিলেন চাবকেছিলেম চাবকেছিলুম চাবকেছিস চাবকেছে চাবকেছেন চাবকো চাবা চাবাগান চাবানো চাবি চাবিকাঠি চাবিতালা চাবিরতোড়া চাবেন চাবো চাম চামুক্ষ চামাটি চামাতি চামার চামারজাতি চামারটুলি চামারনি চামারনী চামচ চামচা চামচাকৃতি চামচামি চামচিকা চামচিকে চামচিটে চামচিটেল চামেলি চামেলিফুল চামটি চামুণ্ডা চাম্পা চামর চামরিণী চামরী চামরযুক্ত চামরধারিণী চামড়া চার চারু চারআনা চারআনি চারইয়ারি চারইয়ারী চারক চারকক্ষ চারকোণা চারকোনা চারুকলা চারখানি চারগুণ চারঘাট চারা চারাইত চারাইতাম চারাইতিস চারাইতে চারাইতেছ চারাইতেছি চারাইতেছিল চারাইতেছিলাম চারাইতেছিলি চারাইতেছিলে চারাইতেছিলেন চারাইতেছিস চারাইতেছে চারাইতেছেন চারাইতেন চারাইব চারাইবার চারাইবি চারাইবে চারাইবেন চারাইল চারাইলাম চারাইলি চারাইলে চারাইলেন চারাইয়া চারাইয়াছ চারাইয়াছি চারাইয়াছিল চারাইয়াছিলাম চারাইয়াছিলি চারাইয়াছিলে চারাইয়াছিলেন চারাইয়াছিস চারাইয়াছে চারাইয়াছেন চারাইয়ো চারাক চারাগাছ চারাচ্ছ চারাচ্ছি চারাচ্ছিল চারাচ্ছিলাম চারাচ্ছিলি চারাচ্ছিলে চারাচ্ছিলেন চারাচ্ছিলেম চারাচ্ছিলুম চারাচ্ছিস চারাচ্ছে চারাচ্ছেন চারাত চারাতাম চারাতিস চারাতে চারাতেন চারাতেম চারাতুম চারান চারানো চারাপোনা চারাব চারাবার চারাবি চারাবে চারাবেচারা চারাবেন চারাবো চারাল চারালাম চারালি চারালে চারালেন চারালেম চারালুম চারাস চারি চারিআনা চারিআনি চারিইয়ারি চারিইয়ারী চারিকার চারিকোণা চারিকোনা চারিচালা চারিচোখ চারিচৌকা চারিজন চারিণী চারিত চারিত্র চারিত্রিক চারিত্র্য চারিত্রপূজা চারিতরফ চারিত্রশক্তি চারিদিক চারিধার চারিপাই চারিপার্স্বস্থ চারিপাশ চারিপায়া চারিপোয়া চারিসন্ধ্যা চারিহাত চারিয়ে চারিয়েছ চারিয়েছি চারিয়েছিল চারিয়েছিলাম চারিয়েছিলি চারিয়েছিলে চারিয়েছিলেন চারিয়েছিলেম চারিয়েছিলুম চারিয়েছিস চারিয়েছে চারিয়েছেন চারিয়ো চারী চার্চ চার্চইয়ার্ড চারচাকা চারচালা চার্চিল চারচোখ চারচোখো চারচৌকা চারচৌকো চারুচন্দ্র চারেক চারো চার্জ চার্জকৃত চারজন চার্জবিহীন চার্জশিট চার্জশীট চার্ট চার্টার চার্টার্ড চারটে চারণ চারণক্ষেত্র চারণা চারণযোগ্য চারণভূমি চারুতা চারতালা চারতরফ চারতলা চারদিক চারদিকস্থ চারদিন চারদেওয়ারি চারদল চারদলীয় চারদলীয়জোট চারুনেত্র চারুনেত্রা চারপাই চারুপাঠ চারপাশ চারপায়া চারপেয়ে চারপো চারপোয়া চারপত্র চারপথ চারপ্রকার চারফোঁটা চারফোঁটাযুক্ত চার্বাক চার্বাকী চার্বাকদর্শন চারবার চারুবিকাশ চারবোন চারবছর চারভাগ চারভাবে চার্ম চারমাস চার্মিং চারমিনার চারমহল চাররকম চার্লি চারুলতা চার্লস চারুশিল্প চারুশীলা চারশো চারশোবিশ চারশত চারশতবিশ চারসন্ধ্যা চারহাত চাল চালু চালক চালুক চালুকারবার চালকযন্ত্র চালকদ্বয় চালকুমড়া চালকুমড়ি চালকুমড়ো চালুকরা চালুকরণ চালগুঁড়া চালগুঁড়ো চালা চালাইত চালাইতাম চালাইতিস চালাইতে চালাইতেছ চালাইতেছি চালাইতেছিল চালাইতেছিলাম চালাইতেছিলি চালাইতেছিলে চালাইতেছিলেন চালাইতেছিস চালাইতেছে চালাইতেছেন চালাইতেন চালাইব চালাইবার চালাইবি চালাইবে চালাইবেন চালাইল চালাইলাম চালাইলি চালাইলে চালাইলেন চালাইয়া চালাইয়াছ চালাইয়াছি চালাইয়াছিল চালাইয়াছিলাম চালাইয়াছিলি চালাইয়াছিলে চালাইয়াছিলেন চালাইয়াছিস চালাইয়াছে চালাইয়াছেন চালাইয়ো চালাক চালাকি চালাকচোস্ত চালাকচতুর চালাখানা চালাঘর চালাচালি চালাচ্ছ চালাচ্ছি চালাচ্ছিল চালাচ্ছিলাম চালাচ্ছিলি চালাচ্ছিলে চালাচ্ছিলেন চালাচ্ছিলেম চালাচ্ছিলুম চালাচ্ছিস চালাচ্ছে চালাচ্ছেন চালাযুক্ত চালাত চালাতাম চালাতিস চালাতে চালাতেন চালাতেম চালাতুম চালান চালানি চালানী চালানো চালানপত্র চালাব চালাবার চালাবি চালাবে চালাবেন চালাবো চালাল চালালাম চালালি চালালে চালালেন চালালেম চালালুম চালাস চালি চালিকা চালিকাশক্তি চালিত চালিতা চালিতাম চালিতিস চালিতে চালিতেছ চালিতেছি চালিতেছিল চালিতেছিলাম চালিতেছিলি চালিতেছিলে চালিতেছিলেন চালিতেছিস চালিতেছে চালিতেছেন চালিতেন চালিব চালিবার চালিবি চালিবে চালিবেন চালিল চালিলাম চালিলি চালিলে চালিলেন চালিশা চালিস চালিয়া চালিয়াছ চালিয়াছি চালিয়াছিল চালিয়াছিলাম চালিয়াছিলি চালিয়াছিলে চালিয়াছিলেন চালিয়াছিস চালিয়াছে চালিয়াছেন চালিয়াত চালিয়াতি চালিয়ে চালিয়েছ চালিয়েছি চালিয়েছিল চালিয়েছিলাম চালিয়েছিলি চালিয়েছিলে চালিয়েছিলেন চালিয়েছিলেম চালিয়েছিলুম চালিয়েছিস চালিয়েছে চালিয়েছেন চালিয়ো চালচাল চালচিত্র চালচিড়ে চালচিঁড়ে চালচর চালচুলা চালচুলো চালচুলোহীন চালচলন চালচলনযুক্ত চালচলনযুক্তা চালচলনসম্পন্ন চালেডালে চালো চালছ চালছি চালছিল চালছিলাম চালছিলি চালছিলে চালছিলেন চালছিলেম চালছিলুম চালছিস চালছে চালছেন চালযুক্ত চালডাল চালুডিজাইন চালত চালতা চালতাম চালতিস চালতে চালতেন চালতেম চালতুম চালন চালুন চালনা চালনাকারী চালনি চালুনি চালনী চালনীয় চালনযোগ্য চালপড়া চালব চালবাজ চালবাজি চালবাটা চালবার চালবি চালবেন চালবো চালভাজা চালমুগরা চালমাৎ চালুমাল চালুমনা চালমুড়ি চালল চাললাম চাললি চাললে চাললেন চাললেম চাললুম চালশে চাশত চাশনাই চাষ চাষআবাদ চাষকারী চাষা চাষাবাদ চাষাভুষা চাষাভুষো চাষাড়ে চাষি চাষযোগ্য চাষবাস চাস চাহ চাহুক চাহা চাহারম চাহি চাহিত চাহিতাম চাহিতিস চাহিতে চাহিতেছ চাহিতেছি চাহিতেছিল চাহিতেছিলাম চাহিতেছিলি চাহিতেছিলে চাহিতেছিলেন চাহিতেছিস চাহিতেছে চাহিতেছেন চাহিতেন চাহিদা চাহিদাকারী চাহিদাকালীন চাহিদাজনিত চাহিদাতত্ত্ব চাহিদামাত্র চাহিদামত চাহিদাসূত্র চাহিব চাহিবামাত্র চাহিবার চাহিবি চাহিবে চাহিবেন চাহিল চাহিলাম চাহিলি চাহিলে চাহিলেন চাহিস চাহিয়া চাহিয়াছ চাহিয়াছি চাহিয়াছিল চাহিয়াছিলাম চাহিয়াছিলি চাহিয়াছিলে চাহিয়াছিলেন চাহিয়াছিস চাহিয়াছে চাহিয়াছেন চাহিয়ো চাহে চাহেন চাহত চাহতা চাহন চাহুন চাহনি চাহনিযুক্ত চাড় চাড়া চাঁড়া চাঁড়াল চাড়ি চাড়েন চায় চায়েন চায়না চায়নাটাউন চায়নাম্যান চায়নিজ চি চিঁ চিং চিংড়ি চিংড়িমাছ চিংড়ী চিক চিক্কার চিক্কণ চিক্কণতা চিক্কুর চিকা চিকারি চিকিচ্ছে চিকিৎসক চিকিৎসা চিকিৎসাকারী চিকিৎসাকেন্দ্র চিকিৎসাক্ষেত্র চিকিৎসাগার চিকিৎসাতন্ত্র চিকিৎসাদর্শন চিকিৎসাধীন চিকিৎসাপদ্ধতি চিকিৎসাবিজ্ঞান চিকিৎসাবিজ্ঞানী চিকিৎসাবিদ চিকিৎসাবিদ্যা চিকিৎসাবিভ্রাট চিকিৎসাব্যবস্থা চিকিৎসার্থে চিকিৎসালয় চিকিৎসাশাস্ত্র চিকিৎসাসংকট চিকিৎসাসেবা চিকিৎসিত চিকিৎস্য চিকিৎসনীয় চিকিনিয়া চিকিমিকি চিকচিক চিকীর্ষু চিকীর্ষা চিকীর্ষিত চিকেন চিকণ চিকন চিকনকালা চিকনা চিকনাই চিকনচাকন চিকনীয়া চিকমিক চিকমিকি চিকুর চিকুরজাল চিকুরঝালা চিকরুনি চিখ চিঙ্গট চিঙ্গটি চিঙ্গড় চিঁচিঁ চিচিং চিচিংগা চিচিংগে চিচিংফাঁক চিচিঙ্গা চিচিঙ্গে চিচ্চিড় চিচ্ছক্তি চিজ চিট চিটা চিটাগাং চিটাগুড় চিটিংবাজ চিটচিট চিটে চিটেগুড় চিটশিট চিঠা চিঠি চিঠিচাপাটি চিঠিচৌপটি চিঠিপত্তর চিঠিপত্র চিঠিপত্রাদি চিঠিসহ চিত চিতক চিৎকার চিৎকৃত চিতা চিতাইত চিতাইতাম চিতাইতিস চিতাইতে চিতাইতেছ চিতাইতেছি চিতাইতেছিল চিতাইতেছিলাম চিতাইতেছিলি চিতাইতেছিলে চিতাইতেছিলেন চিতাইতেছিস চিতাইতেছে চিতাইতেছেন চিতাইতেন চিতাইব চিতাইবার চিতাইবি চিতাইবে চিতাইবেন চিতাইল চিতাইলাম চিতাইলি চিতাইলে চিতাইলেন চিতাইয়া চিতাইয়াছ চিতাইয়াছি চিতাইয়াছিল চিতাইয়াছিলাম চিতাইয়াছিলি চিতাইয়াছিলে চিতাইয়াছিলেন চিতাইয়াছিস চিতাইয়াছে চিতাইয়াছেন চিতাইয়ো চিতাক চিতান চিতানো চিতাবাঘ চিতাভষ্ম চিতারোহণ চিতাস চিতি চিতিস চিতিসাপ চিতিয়ে চিতিয়েছ চিতিয়েছি চিতিয়েছিল চিতিয়েছিলাম চিতিয়েছিলি চিতিয়েছিলে চিতিয়েছিলেন চিতিয়েছিলেম চিতিয়েছিলুম চিতিয়েছিস চিতিয়েছে চিতিয়েছেন চিতিয়ো চিতচকোর চিতচ্ছ চিতচ্ছি চিতচ্ছিল চিতচ্ছিলাম চিতচ্ছিলি চিতচ্ছিলে চিতচ্ছিলেন চিতচ্ছিলেম চিতচ্ছিলুম চিতচ্ছিস চিতচ্ছে চিতচ্ছেন চিতেন চিতো চিত্ত চিত্তক্ষোভ চিত্তগুরু চিত্তগ্রাহী চিত্তাকর্ষক চিত্তাকর্ষণ চিততাম চিত্তির চিততিস চিত্তচকোর চিত্তচাঞ্চল্য চিত্তচাঞ্চল্যকর চিত্তচালন চিত্তচোর চিত্তচমৎকারী চিততে চিত্তে চিততেন চিততেম চিত্তোদ্বেগ চিত্তোন্নতি চিত্তোন্মাদী চিত্তদাহ চিত্তদোষ চিত্তদমন চিত্তদ্রাবক চিত্তনামা চিত্তনিরোধ চিত্তপুত্তলি চিত্তপুত্তলিকা চিত্তপ্রসাদ চিত্তবিকার চিত্তবিক্রিয়া চিত্তবিক্ষেপ চিত্তবিক্ষোভ চিত্তবিনোদন চিত্তবিনোদনকারী চিত্তবিপ্লব চিত্তবিভ্রম চিত্তবিমোহন চিত্তবৈকল্য চিত্তব্যাসঙ্গ চিত্তবৃত্তি চিত্তভ্রংশ চিততুম চিত্তরঙ্গিলা চিত্তরঞ্জিনী চিত্তরঞ্জিনীবৃত্তি চিত্তরঞ্জন চিত্তরূপ চিত্তরস চিত্তশুদ্ধি চিত্তসংযম চিত্তস্থৈর্য চিত্তসমর্পণ চিত্তহারিণী চিত্তহারী চিতন চিতনো চিতপাত চিৎপাত চিতপটাং চিৎপটাং চিৎপ্রকর্ষ চিতব চিতবার চিতবি চিতবে চিতবেন চিতবো চিত্র চিত্রক চিত্রকাব্য চিত্রকার চিত্রকূট চিত্রকৃৎ চিত্রকম্বল চিত্রকর চিত্রকরী চিত্রকরণ চিত্রকর্ম চিত্রকর্মা চিত্রকলা চিত্রকল্প চিত্রগত চিত্রগন্ধ চিত্রগুপ্ত চিত্রগ্রাহক চিত্রগ্রহণ চিত্রা চিত্রাক্ষর চিত্রাঙ্কিত চিত্রাঙ্কন চিত্রাঙ্কনকারী চিত্রাঙ্কনাদি চিত্রাঙ্গ চিত্রাঙ্গদা চিত্রাদি চিত্রানুগ চিত্রানদী চিত্রাবলী চিত্রাভাষ চিত্রাভাস চিত্রার্পিত চিত্রালঙ্কার চিত্রাশ্রয়ী চিত্রায়িত চিত্রায়ন চিত্রিক চিত্রিকা চিত্রিণী চিত্রিত চিত্রিতকরণ চিত্রিতা চিত্রিতদেহ চিত্রজগত চিত্রযুক্ত চিত্রণ চিত্রতারকা চিত্রতারা চিত্রদীপ চিত্রদ্বারা চিত্রদুর্গ চিত্রনাট্য চিত্রনাট্যকার চিত্রনাট্যনির্ভর চিত্রনায়ক চিত্রনায়িকা চিত্রনির্মাণ চিত্রনির্মাতা চিত্রনেত্রা চিত্রনৈপুণ্য চিত্রপট চিত্রপুত্তলিকা চিত্রপরিচালক চিত্রপ্রতীক চিত্রফল চিত্রফলক চিত্রবিচিত্র চিত্রবিৎ চিত্রবিদ চিত্রবিদ্যা চিত্রভিত্তিক চিত্রময় চিত্রময়ী চিত্ররচনা চিত্ররথ চিত্ররূপ চিত্রল চিত্রলিপি চিত্রলেখ চিত্রলেখা চিত্রলেখনী চিত্রলৈখিক চিত্রশালা চিত্রশালিকা চিত্রশিল্প চিত্রশিল্পী চিত্রসংবলিত চিত্রসজ্জা চিতল চিতলাম চিতলি চিতলে চিতলেন চিতলেম চিতলুম চিতলমাছ চিৎশক্তি চিতস চিতসঞ্চিত চিদাকাশ চিদাত্মা চিদানন্দ চিদাভাস চিদ্রূপ চিন চিনক চিনুক চিনা চিনাইত চিনাইতাম চিনাইতিস চিনাইতে চিনাইতেছ চিনাইতেছি চিনাইতেছিল চিনাইতেছিলাম চিনাইতেছিলি চিনাইতেছিলে চিনাইতেছিলেন চিনাইতেছিস চিনাইতেছে চিনাইতেছেন চিনাইতেন চিনাইব চিনাইবার চিনাইবি চিনাইবে চিনাইবেন চিনাইল চিনাইলাম চিনাইলি চিনাইলে চিনাইলেন চিনাইয়া চিনাইয়াছ চিনাইয়াছি চিনাইয়াছিল চিনাইয়াছিলাম চিনাইয়াছিলি চিনাইয়াছিলে চিনাইয়াছিলেন চিনাইয়াছিস চিনাইয়াছে চিনাইয়াছেন চিনাইয়ো চিনাক চিনাচিনি চিনাজোঁক চিনান চিনানো চিনাপরিচয় চিনাবাদাম চিনামাটি চিনাশোনা চিনাশুনা চিনাস চিনি চিনিকল চিনিগুড়া চিনিচিনি চিনিযুক্ত চিনিত চিনিতাম চিনিতিস চিনিতে চিনিতেছ চিনিতেছি চিনিতেছিল চিনিতেছিলাম চিনিতেছিলি চিনিতেছিলে চিনিতেছিলেন চিনিতেছিস চিনিতেছে চিনিতেছেন চিনিতেন চিনিপাতা চিনিব চিনিবার চিনিবি চিনিবে চিনিবেন চিনিমিশ্রিত চিনিরবলদ চিনিল চিনিলাম চিনিলি চিনিলে চিনিলেন চিনিস চিনিয়া চিনিয়াছ চিনিয়াছি চিনিয়াছিল চিনিয়াছিলাম চিনিয়াছিলি চিনিয়াছিলে চিনিয়াছিলেন চিনিয়াছিস চিনিয়াছে চিনিয়াছেন চিনিয়ে চিনিয়েছ চিনিয়েছি চিনিয়েছিল চিনিয়েছিলাম চিনিয়েছিলি চিনিয়েছিলে চিনিয়েছিলেন চিনিয়েছিলেম চিনিয়েছিলুম চিনিয়েছিস চিনিয়েছে চিনিয়েছেন চিনিয়ো চিনচিন চিনচ্ছ চিনচ্ছি চিনচ্ছিল চিনচ্ছিলাম চিনচ্ছিলি চিনচ্ছিলে চিনচ্ছিলেন চিনচ্ছিলেম চিনচ্ছিলুম চিনচ্ছিস চিনচ্ছে চিনচ্ছেন চিনে চিনেছ চিনেছি চিনেছিল চিনেছিলাম চিনেছিলি চিনেছিলে চিনেছিলেন চিনেছিলেম চিনেছিলুম চিনেছিস চিনেছে চিনেছেন চিনেন চিনেনা চিনেবাজি চিনো চিনছ চিনছি চিনছিল চিনছিলাম চিনছিলি চিনছিলে চিনছিলেন চিনছিলেম চিনছিলুম চিনছিস চিনছে চিনছেন চিনত চিন্তক চিন্তা চিন্তাকারী চিন্তাকুল চিন্তাকুলিত চিন্তাক্লিষ্ট চিন্তাকুলতা চিন্তাগম্য চিন্তাগ্রস্ত চিন্তাছাড়া চিন্তাজগত চিন্তাজনক চিন্তাজ্বর চিন্তাযুক্ত চিন্তাতীত চিন্তাতরঙ্গ চিন্তাদায়ক চিন্তাদূর চিন্তাধারা চিন্তান্বিত চিন্তাপর চিন্তাপ্রবণ চিন্তাবিদ চিন্তাবৃত্তি চিন্তাভাবনা চিন্তাভাবনাকারী চিনতাম চিন্তামুক্ত চিন্তামগ্ন চিন্তামণি চিন্তামূলক চিন্তারাজ্য চিন্তাশক্তি চিন্তাশক্তিহীন চিন্তাশীল চিন্তাশীলতা চিন্তাশূন্য চিন্তাসূত্র চিন্তাহীন চিন্তাহরণ চিন্তিত চিনতিস চিন্তে চিনতেন চিনতেম চিনতো চিন্ত্য চিন্ত্যমান চিন্তন চিন্তনীয় চিনতুম চিনন চিনুন চিননো চিনপরিচয় চিনব চিনবার চিনবি চিনবে চিনবেন চিনবো চিন্ময় চিন্ময়ী চিনল চিনলাম চিনলি চিনলে চিনলেন চিনলেম চিনলুম চিনস চিপ চিপা চিপাগলি চিপিটক চিপট চিপটক চিপটা চিপটাইত চিপটাইতাম চিপটাইতিস চিপটাইতে চিপটাইতেছ চিপটাইতেছি চিপটাইতেছিল চিপটাইতেছিলাম চিপটাইতেছিলি চিপটাইতেছিলে চিপটাইতেছিলেন চিপটাইতেছিস চিপটাইতেছে চিপটাইতেছেন চিপটাইতেন চিপটাইব চিপটাইবার চিপটাইবি চিপটাইবে চিপটাইবেন চিপটাইল চিপটাইলাম চিপটাইলি চিপটাইলে চিপটাইলেন চিপটাইয়া চিপটাইয়াছ চিপটাইয়াছি চিপটাইয়াছিল চিপটাইয়াছিলাম চিপটাইয়াছিলি চিপটাইয়াছিলে চিপটাইয়াছিলেন চিপটাইয়াছিস চিপটাইয়াছে চিপটাইয়াছেন চিপটাইয়ো চিপটাক চিপটান চিপটানি চিপটানো চিপটাস চিপটি চিপটচ্ছ চিপটচ্ছি চিপটচ্ছিল চিপটচ্ছিলাম চিপটচ্ছিলি চিপটচ্ছিলে চিপটচ্ছিলেন চিপটচ্ছিলেম চিপটচ্ছিলুম চিপটচ্ছিস চিপটচ্ছে চিপটচ্ছেন চিপটে চিপটেছ চিপটেছি চিপটেছিল চিপটেছিলাম চিপটেছিলি চিপটেছিলে চিপটেছিলেন চিপটেছিলেম চিপটেছিলুম চিপটেছিস চিপটেছে চিপটেছেন চিপটেন চিপটো চিপটোবার চিপটত চিপটতাম চিপটতিস চিপটতে চিপটতেন চিপটতেম চিপটতুম চিপটন চিপটব চিপটবি চিপটবে চিপটবেন চিপটবো চিপটল চিপটলাম চিপটলি চিপটলে চিপটলেন চিপটলেম চিপটলুম চিপটস চিপলুন চিপস চিপসা চিপসান চিপসানো চিফ চিব চিবক চিবুক চিবা চিবাইত চিবাইতাম চিবাইতিস চিবাইতে চিবাইতেছ চিবাইতেছি চিবাইতেছিল চিবাইতেছিলাম চিবাইতেছিলি চিবাইতেছিলে চিবাইতেছিলেন চিবাইতেছিস চিবাইতেছে চিবাইতেছেন চিবাইতেন চিবাইব চিবাইবার চিবাইবি চিবাইবে চিবাইবেন চিবাইল চিবাইলাম চিবাইলি চিবাইলে চিবাইলেন চিবাইয়া চিবাইয়াছ চিবাইয়াছি চিবাইয়াছিল চিবাইয়াছিলাম চিবাইয়াছিলি চিবাইয়াছিলে চিবাইয়াছিলেন চিবাইয়াছিস চিবাইয়াছে চিবাইয়াছেন চিবাইয়ো চিবাক চিবাচ্ছে চিবাচ্ছেন চিবান চিবানি চিবানো চিবালে চিবাস চিবি চিবিস চিবিয়ে চিবিয়েছ চিবিয়েছি চিবিয়েছিল চিবিয়েছিলাম চিবিয়েছিলি চিবিয়েছিলে চিবিয়েছিলেন চিবিয়েছিলেম চিবিয়েছিলুম চিবিয়েছিস চিবিয়েছে চিবিয়েছেন চিবিয়ো চিবচ্ছ চিবচ্ছি চিবচ্ছিল চিবচ্ছিলাম চিবচ্ছিলি চিবচ্ছিলে চিবচ্ছিলেন চিবচ্ছিলেম চিবচ্ছিলুম চিবচ্ছিস চিবচ্ছে চিবুচ্ছে চিবচ্ছেন চিবো চিবোচ্ছে চিবোনো চিবত চিবতাম চিবতিস চিবতে চিবতেন চিবতেম চিবতুম চিবন চিবুনি চিবনো চিবুনো চিবব চিববার চিববি চিববে চিববেন চিববো চিবল চিবলাম চিবলি চিবলে চিবলেন চিবলেম চিবলুম চিবস চিমট চিমটক চিমটা চিমটাইত চিমটাইতাম চিমটাইতিস চিমটাইতে চিমটাইতেছ চিমটাইতেছি চিমটাইতেছিল চিমটাইতেছিলাম চিমটাইতেছিলি চিমটাইতেছিলে চিমটাইতেছিলেন চিমটাইতেছিস চিমটাইতেছে চিমটাইতেছেন চিমটাইতেন চিমটাইব চিমটাইবার চিমটাইবি চিমটাইবে চিমটাইবেন চিমটাইল চিমটাইলাম চিমটাইলি চিমটাইলে চিমটাইলেন চিমটাইয়া চিমটাইয়াছ চিমটাইয়াছি চিমটাইয়াছিল চিমটাইয়াছিলাম চিমটাইয়াছিলি চিমটাইয়াছিলে চিমটাইয়াছিলেন চিমটাইয়াছিস চিমটাইয়াছে চিমটাইয়াছেন চিমটাইয়ো চিমটাক চিমটান চিমটানি চিমটানো চিমটাস চিমটি চিমটচ্ছ চিমটচ্ছি চিমটচ্ছিল চিমটচ্ছিলাম চিমটচ্ছিলি চিমটচ্ছিলে চিমটচ্ছিলেন চিমটচ্ছিলেম চিমটচ্ছিলুম চিমটচ্ছিস চিমটচ্ছে চিমটচ্ছেন চিমটে চিমটেছ চিমটেছি চিমটেছিল চিমটেছিলাম চিমটেছিলি চিমটেছিলে চিমটেছিলেন চিমটেছিলেম চিমটেছিলুম চিমটেছিস চিমটেছে চিমটেছেন চিমটো চিমটোবার চিমটত চিমটতাম চিমটতিস চিমটতে চিমটতেন চিমটতেম চিমটতুম চিমটন চিমটনো চিমটব চিমটবি চিমটবে চিমটবেন চিমটবো চিমটল চিমটলাম চিমটলি চিমটলে চিমটলেন চিমটলেম চিমটলুম চিমটস চিমনি চিমনী চিম্বুক চিমস চিমসক চিমসা চিমসাইত চিমসাইতাম চিমসাইতিস চিমসাইতে চিমসাইতেছ চিমসাইতেছি চিমসাইতেছিল চিমসাইতেছিলাম চিমসাইতেছিলি চিমসাইতেছিলে চিমসাইতেছিলেন চিমসাইতেছিস চিমসাইতেছে চিমসাইতেছেন চিমসাইতেন চিমসাইব চিমসাইবার চিমসাইবি চিমসাইবে চিমসাইবেন চিমসাইল চিমসাইলাম চিমসাইলি চিমসাইলে চিমসাইলেন চিমসাইয়া চিমসাইয়াছ চিমসাইয়াছি চিমসাইয়াছিল চিমসাইয়াছিলাম চিমসাইয়াছিলি চিমসাইয়াছিলে চিমসাইয়াছিলেন চিমসাইয়াছিস চিমসাইয়াছে চিমসাইয়াছেন চিমসাইয়ো চিমসাক চিমসান চিমসানো চিমসাস চিমসচ্ছ চিমসচ্ছি চিমসচ্ছিল চিমসচ্ছিলাম চিমসচ্ছিলি চিমসচ্ছিলে চিমসচ্ছিলেন চিমসচ্ছিলেম চিমসচ্ছিলুম চিমসচ্ছিস চিমসচ্ছে চিমসচ্ছেন চিমসে চিমসেছ চিমসেছি চিমসেছিল চিমসেছিলাম চিমসেছিলি চিমসেছিলে চিমসেছিলেন চিমসেছিলেম চিমসেছিলুম চিমসেছিস চিমসেছে চিমসেছেন চিমসো চিমসোবার চিমসত চিমসতাম চিমসতিস চিমসতে চিমসতেন চিমসতেম চিমসতুম চিমসন চিমসব চিমসবি চিমসবে চিমসবেন চিমসবো চিমসল চিমসলাম চিমসলি চিমসলে চিমসলেন চিমসলেম চিমসলুম চিমসস চিমড়া চিমড়াগড়ন চিমড়ালুচি চিমড়ে চির চিরক চিরুক চিরকাঙ্ক্ষিত চিরকারী চিরকাল চিরকালিক চিরকালীন চিরকালব্যাপী চিরকেলে চিরকুট চিরকৃতজ্ঞ চিরকুমার চিরকুমারী চিরক্রিয় চিরক্রিয়তা চিরক্রীত চিরকর্মা চিরা চিরাইত চিরাইতাম চিরাইতিস চিরাইতে চিরাইতেছ চিরাইতেছি চিরাইতেছিল চিরাইতেছিলাম চিরাইতেছিলি চিরাইতেছিলে চিরাইতেছিলেন চিরাইতেছিস চিরাইতেছে চিরাইতেছেন চিরাইতেন চিরাইব চিরাইবার চিরাইবি চিরাইবে চিরাইবেন চিরাইল চিরাইলাম চিরাইলি চিরাইলে চিরাইলেন চিরাইয়া চিরাইয়াছ চিরাইয়াছি চিরাইয়াছিল চিরাইয়াছিলাম চিরাইয়াছিলি চিরাইয়াছিলে চিরাইয়াছিলেন চিরাইয়াছিস চিরাইয়াছে চিরাইয়াছেন চিরাইয়ো চিরাক চিরাগ চিরাগী চিরাগীমহাল চিরাগত চিরাগদান চিরাগদানি চিরাগদানী চিরাচরিত চিরাচরিতভাবে চিরানো চিরান্ধ চিরানন্দ চিরানুরক্ত চিরাভ্যাস চিরাভ্যস্ত চিরাস চিরায়ু চিরায়ত চিরায়ুতা চিরায়মানা চিরায়ুষ্মান চিরায়ুষ্মতী চিরি চিরিত চিরিতাম চিরিতিস চিরিতে চিরিতেছ চিরিতেছি চিরিতেছিল চিরিতেছিলাম চিরিতেছিলি চিরিতেছিলে চিরিতেছিলেন চিরিতেছিস চিরিতেছে চিরিতেছেন চিরিতেন চিরিব চিরিবার চিরিবি চিরিবে চিরিবেন চিরিল চিরিলাম চিরিলি চিরিলে চিরিলেন চিরিস চিরিয়া চিরিয়াছ চিরিয়াছি চিরিয়াছিল চিরিয়াছিলাম চিরিয়াছিলি চিরিয়াছিলে চিরিয়াছিলেন চিরিয়াছিস চিরিয়াছে চিরিয়াছেন চিরিয়ে চিরিয়েছ চিরিয়েছি চিরিয়েছিল চিরিয়েছিলাম চিরিয়েছিলি চিরিয়েছিলে চিরিয়েছিলেন চিরিয়েছিলেম চিরিয়েছিলুম চিরিয়েছিস চিরিয়েছে চিরিয়েছেন চিরিয়ো চিরচ্ছ চিরচ্ছি চিরচ্ছিল চিরচ্ছিলাম চিরচ্ছিলি চিরচ্ছিলে চিরচ্ছিলেন চিরচ্ছিলেম চিরচ্ছিলুম চিরচ্ছিস চিরচ্ছে চিরচ্ছেন চিরে চিরেছ চিরেছি চিরেছিল চিরেছিলাম চিরেছিলি চিরেছিলে চিরেছিলেন চিরেছিলেম চিরেছিলুম চিরেছিস চিরেছে চিরেছেন চিরেন চিরো চিরছ চিরছি চিরছিল চিরছিলাম চিরছিলি চিরছিলে চিরছিলেন চিরছিলেম চিরছিলুম চিরছিস চিরছে চিরছেন চিরজীবী চিরজীবন চিরজীবনব্যাপী চিরঞ্জীব চিরঞ্জীবিনী চিরঞ্জীবী চিরযৌবন চিরযৌবনা চিরুণদাঁতী চিরত চিরতা চিরতাম চিরতিস চিরতে চিরতেন চিরতেম চিরতুম চিরতরে চিরতুষার চিরতুষাররেখা চিরদুঃখ চিরদারিদ্র চিরদারিদ্র্য চিরদিন চিরদীন চিরদীনতা চিরদৈন্য চিরন চিরুন চিরনি চিরুনি চিরনিদ্রা চিরনির্দিষ্ট চিরনির্বাসন চিরনির্ভর চিরনীহার চিরনীহাররেখা চিরনো চিরনতুন চিরনূতন চিরন্তন চিরন্তনী চিরন্তনতা চিরনদাঁতি চিরনবীন চিরপরিচিত চিরপ্রচলিত চিরপ্রতিদ্বন্দ্বী চিরপ্রবাস চিরপ্রসিদ্ধ চিরপ্রস্থান চিরব চিরবার চিরবি চিরবিচ্ছেদ চিরবিদায় চিরবিস্ময় চিরবে চিরবেকার চিরবেন চিরবৈর চিরবৈরিতা চিরবৈরী চিরবো চিরবন্ধু চিরবর্তমান চিরবসন্ত চিররুগ্ন চিররোগী চিররহস্য চিরল চিরলাম চিরলি চিরলে চিরলেন চিরলেম চিরলুম চিরশান্তি চিরশ্যামল চিরশত্রু চিরশত্রুতা চিরস চিরসক্রিয় চিরসুখী চিরসুখময় চিরসত্য চিরস্থায়িত্ব চিরস্থায়ী চিরস্থায়ীভাবে চিরস্থির চিরসধবা চিরসুন্দর চিরসবুজ চিরস্বপ্রকাশ চিরস্মরণীয় চিরসহচর চিরসুহৃদ চিরহরিৎ চিল চিলা চিলাকোঠা চিলাখানা চিলি চিলিক চিলিমচি চিলিমচী চিলিয়ান চিলে চিলেকোঠা চিলেঘর চিলেঘুড়ি চিলেন চিলেরছোঁ চিলড্রেন চিলতা চিলতে চিলুনী চিলম চিলমচি চিলুমচি চিল্লা চিল্লাকশী চিল্লাখানা চিল্লাচিল্লি চিল্লান চিল্লানি চিল্লানী চিল্লানো চিল্লাফাল্লা চিল্লাবিল্লা চিশতিয়া চিশতী চিহু চিঁহি চিঁহিল চিঁহিঁহিঁ চিহ্ন চিহ্নক চিহ্নাদি চিহ্নিত চিহ্নিতকারক চিহ্নিতকারী চিহ্নিতকরণ চিহ্নচতুষ্টয় চিহ্নযুক্ত চিহ্নতালিকা চিহ্নতত্ত্ব চিহ্নদ্বারা চিহ্নধারী চিহ্নবিজ্ঞান চিহ্নবিহীন চিহ্নভেদ চিহ্নমুক্ত চিহ্নমাত্র চিহ্নরূপ চিহ্নস্বরূপ চিহ্নহীন চিহুয়া চিড় চিড়া চিঁড়া চিড়াচেপটা চিঁড়াচেপটা চিড়াচ্যাপটা চিঁড়াচ্যাপটা চিড়িক চিড়িতন চিড়িমার চিড়িয়া চিড়িয়াখানা চিড়চিড় চিড়ে চিঁড়ে চিড়েচেপটা চিঁড়েচেপটা চিড়েচ্যাপটা চিঁড়েচ্যাপটা চিড়েতন চিড়বিড় চিড়ল চিয়া চিয়ারি চিয়ার্স চুঁচুঁ চীক চুচুক চূচুক চুচুকৃতি চুঁচি চচ্চর চচ্চড় চচ্চড়ি চুঁচেরা চুচ্ছ চুচ্ছি চুচ্ছিলাম চুচ্ছিলি চুচ্ছিলে চুচ্ছিলেন চুচ্ছিলেম চুচ্ছিলুম চুচ্ছিস চুচ্ছে চুচ্ছেন চীজ চীৎকার চীন চীনা চীনাংশুক চীনাঘাস চীনাজোঁক চীনাবাদাম চীনাবাসী চীনাভাষা চীনামাটি চীনে চীনেঘাস চীনেজোঁক চীনেবাদাম চীনেমাটি চীনেরপ্রাচীর চীনদেশ চীনদেশীয় চীনপন্থি চীনপ্রজাতন্ত্রী চীনবাস চীফ চীফমেজর চীবর চীর চীরা চীর্ণ চুঁচড়া চুঁচুড়া চুঁচড়ো চুঁচড়োমুখো চে চেং চেংঝোলা চেংদোলা চেংমুড়ি চেংড়া চেংড়াপানা চেংড়ামি চেংড়ামো চেইন চেক চেকআপে চেকওয়ার চেকওয়ারি চেককাটা চেককাপড় চেকার চেকচেক চেকীয় চেকোস্লোভাকিয়া চেকদাখিলা চেকনা চেকনাই চেকপোস্ট চেকপ্রজাতন্ত্র চেকপয়েন্ট চেকবক্স চেকমুড়ি চেখ চেখে চেখেছ চেখেছি চেখেছিল চেখেছিলাম চেখেছিলি চেখেছিলে চেখেছিলেন চেখেছিলেম চেখেছিলুম চেখেছিস চেখেছে চেখেছেন চেখো চেগার চেঙ চেঙ্গ চেঙ্গারি চেঙ্গিস চেঙ্গরা চেঙারি চেঙঝোলা চেঙরা চেঙরাপানা চেঙরামি চেঁচা চেঁচাইত চেঁচাইতাম চেঁচাইতিস চেঁচাইতে চেঁচাইতেছ চেঁচাইতেছি চেঁচাইতেছিল চেঁচাইতেছিলাম চেঁচাইতেছিলি চেঁচাইতেছিলে চেঁচাইতেছিলেন চেঁচাইতেছিস চেঁচাইতেছে চেঁচাইতেছেন চেঁচাইতেন চেঁচাইব চেঁচাইবার চেঁচাইবি চেঁচাইবে চেঁচাইবেন চেঁচাইল চেঁচাইলাম চেঁচাইলি চেঁচাইলে চেঁচাইলেন চেঁচাইয়া চেঁচাইয়াছ চেঁচাইয়াছি চেঁচাইয়াছিল চেঁচাইয়াছিলাম চেঁচাইয়াছিলি চেঁচাইয়াছিলে চেঁচাইয়াছিলেন চেঁচাইয়াছিস চেঁচাইয়াছে চেঁচাইয়াছেন চেঁচাইয়ো চেঁচাক চেঁচাচেচি চেঁচাচ্ছ চেঁচাচ্ছি চেঁচাচ্ছিল চেঁচাচ্ছিলাম চেঁচাচ্ছিলি চেঁচাচ্ছিলে চেঁচাচ্ছিলেন চেঁচাচ্ছিলেম চেঁচাচ্ছিলুম চেঁচাচ্ছিস চেঁচাচ্ছে চেঁচাচ্ছেন চেঁচাত চেঁচাতাম চেঁচাতিস চেঁচাতে চেঁচাতেন চেঁচাতেম চেঁচাতুম চেঁচান চেঁচানি চেঁচানো চেঁচাব চেঁচাবার চেঁচাবি চেঁচাবে চেঁচাবেন চেঁচাবো চেঁচামিচি চেঁচামেচি চেঁচাল চেঁচালাম চেঁচালি চেঁচালে চেঁচালেন চেঁচালেম চেঁচালুম চেঁচাস চেঁচাড়ি চেঁচি চেঁচিয়ে চেঁচিয়েছ চেঁচিয়েছি চেঁচিয়েছিল চেঁচিয়েছিলাম চেঁচিয়েছিলি চেঁচিয়েছিলে চেঁচিয়েছিলেন চেঁচিয়েছিলেম চেঁচিয়েছিলুম চেঁচিয়েছিস চেঁচিয়েছে চেঁচিয়েছেন চেঁচিয়ো চেঁচে চেঁচেছ চেঁচেছি চেঁচেছিল চেঁচেছিলাম চেঁচেছিলি চেঁচেছিলে চেঁচেছিলেন চেঁচেছিলেম চেঁচেছিলুম চেঁচেছিস চেঁচেছে চেঁচেছেন চেঁচেপুঁছে চেঁচেমুছে চেঁচো চেঁছে চেঁছেপুঁছে চৌদ্দ চৌধুরী চেঞ্জ চেঞ্জড চেট চেটক চেটিকা চেটী চেটে চেটেছ চেটেছি চেটেছিল চেটেছিলাম চেটেছিলি চেটেছিলে চেটেছিলেন চেটেছিলেম চেটেছিলুম চেটেছিস চেটেছে চেটেছেন চেটেপুটে চেটো চেটুয়া চেত চেতক চেতকী চেতা চেতান চেতানি চেতানো চেতাবনি চেতি চেতিয়ো চেত্তা চেতন চেতনউষা চেতনঊষা চেতনা চেতনাযুক্ত চেতনাত্মক চেতনাত্মিকা চেতনাদান চেতনাদানকারী চেতনাপ্রাপ্ত চেতনাবিধান চেতনাবিহীন চেতনারহিত চেতনালাভ চেতনাশূন্য চেতনাসূচক চেতনাসঞ্চার চেতনাসম্পাদন চেতনাহীন চেতনাহীনতা চেতনজগত চেতস্বান চেদি চেন চেনা চেনাক চেনাচিনি চেনাচ্ছ চেনাচ্ছি চেনাচ্ছিল চেনাচ্ছিলাম চেনাচ্ছিলি চেনাচ্ছিলে চেনাচ্ছিলেন চেনাচ্ছিলেম চেনাচ্ছিলুম চেনাচ্ছিস চেনাচ্ছে চেনাচ্ছেন চেনাজানা চেনাত চেনাতাম চেনাতিস চেনাতে চেনাতেন চেনাতেম চেনাতুম চেনান চেনানো চেনাপরিচয় চেনাব চেনাবার চেনাবি চেনাবে চেনাবেন চেনাবো চেনাল চেনালাম চেনালি চেনালে চেনালেন চেনালেম চেনালোক চেনালুম চেনাশোনা চেনাশুনা চেনাস চেনে চেনেন চেন্নাই চেনবার চেপা চেপে চেপেছ চেপেছি চেপেছিল চেপেছিলাম চেপেছিলি চেপেছিলে চেপেছিলেন চেপেছিলেম চেপেছিলুম চেপেছিস চেপেছে চেপেছেন চেপো চেপটা চেপটাইত চেপটাইতাম চেপটাইতিস চেপটাইতে চেপটাইতেছ চেপটাইতেছি চেপটাইতেছিল চেপটাইতেছিলাম চেপটাইতেছিলি চেপটাইতেছিলে চেপটাইতেছিলেন চেপটাইতেছিস চেপটাইতেছে চেপটাইতেছেন চেপটাইতেন চেপটাইব চেপটাইবার চেপটাইবি চেপটাইবে চেপটাইবেন চেপটাইল চেপটাইলাম চেপটাইলি চেপটাইলে চেপটাইলেন চেপটাইয়া চেপটাইয়াছ চেপটাইয়াছি চেপটাইয়াছিল চেপটাইয়াছিলাম চেপটাইয়াছিলি চেপটাইয়াছিলে চেপটাইয়াছিলেন চেপটাইয়াছিস চেপটাইয়াছে চেপটাইয়াছেন চেপটাইয়ো চেপটাক চেপটাচ্ছ চেপটাচ্ছি চেপটাচ্ছিল চেপটাচ্ছিলাম চেপটাচ্ছিলি চেপটাচ্ছিলে চেপটাচ্ছিলেন চেপটাচ্ছিলেম চেপটাচ্ছিলুম চেপটাচ্ছিস চেপটাচ্ছে চেপটাচ্ছেন চেপটাত চেপটাতাম চেপটাতিস চেপটাতে চেপটাতেন চেপটাতেম চেপটাতুম চেপটান চেপটানাক চেপটানো চেপটাব চেপটাবার চেপটাবি চেপটাবে চেপটাবেন চেপটাবো চেপটাল চেপটালাম চেপটালি চেপটালে চেপটালেন চেপটালেম চেপটালুম চেপটাস চেপটে চেপ্টে চেপটেছ চেপটেছি চেপটেছিল চেপটেছিলাম চেপটেছিলি চেপটেছিলে চেপটেছিলেন চেপটেছিলেম চেপটেছিলুম চেপটেছিস চেপটেছে চেপটেছেন চেপটো চেবেল্লা চেম্বার চের চেরা চেরাই চেরাক চেরাগ চেরাগি চেরাগিমহাল চেরাগচি চেরাগচী চেরাগদান চেরাগদানি চেরাচোখ চেরাচ্ছ চেরাচ্ছি চেরাচ্ছিল চেরাচ্ছিলাম চেরাচ্ছিলি চেরাচ্ছিলে চেরাচ্ছিলেন চেরাচ্ছিলেম চেরাচ্ছিলুম চেরাচ্ছিস চেরাচ্ছে চেরাচ্ছেন চেরাত চেরাতাম চেরাতিস চেরাতে চেরাতেন চেরাতেম চেরাতুম চেরান চেরানো চেরাপুঞ্জি চেরাব চেরাবার চেরাবি চেরাবে চেরাবেন চেরাবো চেরাবন্দি চেরাল চেরালাম চেরালি চেরালে চেরালেন চেরালেম চেরালুম চেরাস চেরি চেরেন চেরনোবিল চেরবার চেরয়াট চেল চেলা চেলাকাঠ চেলাগিরি চেলাচামুণ্ডা চেলাঞ্চল চেলান চেলানো চেলি চেলিকা চেলিবস্ত্র চেলী চেলেছ চেলেছি চেলেছিল চেলেছিলাম চেলেছিলি চেলেছিলে চেলেছিলেন চেলেছিলেম চেলেছিলুম চেলেছিস চেলেছে চেলেছেন চেলো চেলুনি চেল্লাচিল্লি চেল্লাচেল্লি চেল্লান চেল্লানো চেলসি চেষ্টক চেষ্টা চেষ্টাকারী চেষ্টাকরণ চেষ্টাচরিত্র চেষ্টাযুক্ত চেষ্টাদ্বারা চেষ্টানো চেষ্টান্তর চেষ্টান্বিত চেষ্টাবিহীন চেষ্টাবেষ্টা চেষ্টারহিত চেষ্টাশীল চেষ্টাশূন্য চেষ্টাসাধ্য চেষ্টাহীন চেষ্টাহীনতা চেষ্টিত চেষ্টিতব্য চেষ্টমান চেস্ট চেস্টনাট চেহারা চেহারাযুক্ত চেহারাবন্দি চেহেলসতুন চেহলাম চেড় চেড়ী চেয় চেয়ার চেয়ারপার্সন চেয়ারম্যান চেয়াড়ি চেয়ে চেয়েছ চেয়েছি চেয়েছিল চেয়েছিলাম চেয়েছিলি চেয়েছিলে চেয়েছিলেন চেয়েছিলেম চেয়েছিলুম চেয়েছিস চেয়েছে চেয়েছেন চেয়ো চৈ চৈচৈ চৈত চৈতারবউ চৈতালি চৈতি চৈতী চৈত্য চৈত্যগ্রাম চৈত্যপাল চৈত্যবৃক্ষ চৈত্তিক চৈত্ত্য চৈতন চৈতনক চৈতনচুটকি চৈতন্য চৈতন্যোদ্রেক চৈতন্যোদয় চৈতন্যদেব চৈতন্যবাদ চৈতন্যবান চৈতন্যবাহিনী চৈতন্যময় চৈতন্যরূপ চৈতন্যরূপিণী চৈতন্যরূপী চৈতন্যলাভ চৈতন্যলোপ চৈতন্যলুপ্তি চৈতন্যশক্তি চৈতন্যস্বরূপ চৈতন্যহীনতা চৈতনফক্কা চৈতপূজা চৈত্র চৈত্রিক চৈত্রী চৈত্রপূর্ণিমা চৈত্রবৈশাখ চৈত্রমাস চৈত্ররথ চৈত্রসংক্রান্তি চৈন চৈনিক চৈনিকী চৈনী চৈনেয় চৈনেয়ী চৈনযূষ চৈব চো চোঁ চোংগা চোক চোকা চোকাক চোকাচ্ছ চোকাচ্ছি চোকাচ্ছিল চোকাচ্ছিলাম চোকাচ্ছিলি চোকাচ্ছিলে চোকাচ্ছিলেন চোকাচ্ছিলেম চোকাচ্ছিলুম চোকাচ্ছিস চোকাচ্ছে চোকাচ্ছেন চোকাত চোকাতাম চোকাতিস চোকাতে চোকাতেন চোকাতেম চোকাতুম চোকান চোকানো চোকাব চোকাবার চোকাবি চোকাবে চোকাবেন চোকাবো চোকাল চোকালাম চোকালি চোকালে চোকালেন চোকালেম চোকালুম চোকাস চোকেন চোকবার চোকরি চোকল চোকলা চোখ চোখকান চোখখাকি চোখখাগি চোখখেকো চোখখেগো চোখখোলা চোখগালা চোখগেলো চোখা চোখাউত্তর চোখাকথা চোখাচোখা চোখাচোখি চোখান চোখানো চোখাবুদ্ধি চোখাবুলি চোখাল চোখালো চোখালোক চোখে চোখেআঙুল চোখেচোখে চোখেঠুলি চোখেধুলা চোখেমুখে চোখের চোখেরচামড়া চোখেরজ্যোতি চোখেরজুত চোখেরজুৎ চোখেরজল চোখেরপাতা চোখেরপানি চোখেরপর্দা চোখেরবালি চোখেরভুল চোখেরমাথা চোখেরসুখ চোখেলাগা চোখছানাবড়া চোখজোড়া চোখজ্বালা চোখজ্বলা চোখযুক্ত চোখটিপা চোখটেপা চোখতোলা চোখদুটি চোখদুটো চোখনাচা চোখবিধুঁলি চোখবড় চোখমুখ চোখল চোগা চোগল চোগলখোর চোগলখোরি চোঙ চোঙ্গ চোঙ্গা চোঙ্গাকার চোঙ্গদার চোঙা চোঙাকার চোঙাকৃতি চোঙযুক্ত চোঙদার চোঁচ চোঁচা চোঁচাদৌড় চোঁচালো চোঁচোঁ চোট চোটা চোটাখোর চোটানো চোট্টা চোট্টামি চোটপাট চোণা চোত চোতা চোঁতা চোতাকাগজ চোঁতাকাগজ চোতাদার চোঁতাদার চোত্তির চোতবোশেখ চোতমাস চোতরা চোথা চোদ্দ চোদ্দকথা চোদ্দঠাঁই চোদ্দপোয়া চোদ্দপুরুষ চোদ্দবার চোদ্দবাসি চোদ্দবছর চোদ্দশাক চোন চোনা চোনান চোনানো চোনেন্দা চোপ চোপা চোপাইয়া চোপান চোপানো চোপদার চোপদারি চোপর চোপরও চোপরা চোপরাও চোপসা চোপসাক চোপসাগাল চোপসাচ্ছ চোপসাচ্ছি চোপসাচ্ছিল চোপসাচ্ছিলাম চোপসাচ্ছিলি চোপসাচ্ছিলে চোপসাচ্ছিলেন চোপসাচ্ছিলেম চোপসাচ্ছিলুম চোপসাচ্ছিস চোপসাচ্ছে চোপসাচ্ছেন চোপসাত চোপসাতাম চোপসাতিস চোপসাতে চোপসাতেন চোপসাতেম চোপসাতুম চোপসান চোপসানি চোপসানো চোপসাব চোপসাবার চোপসাবি চোপসাবে চোপসাবেন চোপসাবো চোপসাল চোপসালাম চোপসালি চোপসালে চোপসালেন চোপসালেম চোপসালুম চোপসাস চোপসনো চোপড় চোপড়া চোব চোবা চোবাক চোবাচ্ছ চোবাচ্ছি চোবাচ্ছিল চোবাচ্ছিলাম চোবাচ্ছিলি চোবাচ্ছিলে চোবাচ্ছিলেন চোবাচ্ছিলেম চোবাচ্ছিলুম চোবাচ্ছিস চোবাচ্ছে চোবাচ্ছেন চোবাত চোবাতাম চোবাতিস চোবাতে চোবাতেন চোবাতেম চোবাতুম চোবান চোবানি চোবানো চোবাব চোবাবার চোবাবি চোবাবে চোবাবেন চোবাবো চোবাল চোবালাম চোবালি চোবালে চোবালেন চোবালেম চোবালুম চোবাস চোবচীনী চোবে চোঁবোঁ চোবদার চোবল চোমরানো চোর চোরকাঁটা চোরকুঠরি চোরকুঠুরি চোরখণ্ডা চোরা চোরাই চোরাইদলিল চোরাইমাল চোরাও চোরাকারবার চোরাকারবারি চোরাকটাক্ষ চোরাগোপ্তা চোরাগর্ত চোরাগলি চোরাচালান চোরাচালানকারী চোরাচাহনি চোরাজমি চোরাদ্রব্য চোরাধন চোরানো চোরাপকেট চোরাপাহাড় চোরাপথ চোরাবালি চোরামাল চোরায়ল চোরি চোরিত চোরচোর চোরেচোরে চোরছেঁচড় চোরছ্যাঁচড় চোরনি চোরনী চোরপাহারা চোরপ্রপাত চোল চোলক চোলাই চোলাইকৃত চোলি চোলিকা চোলী চোষ চোষক চোষকাগজ চোষা চোষান চোষানো চোষাসুপারি চোষেন চোষ্য চোষণ চোষণীয় চোষবার চোস্ত চোস্তচালাক চোস্তপায়জামা চোস্তপুস্ত চোহেল চোয় চোয়া চোঁয়া চোয়াইত চোয়াইতাম চোয়াইতিস চোয়াইতে চোয়াইতেছ চোয়াইতেছি চোয়াইতেছিল চোয়াইতেছিলাম চোয়াইতেছিলি চোয়াইতেছিলে চোয়াইতেছিলেন চোয়াইতেছিস চোয়াইতেছে চোয়াইতেছেন চোয়াইতেন চোয়াইব চোয়াইবার চোয়াইবি চোয়াইবে চোয়াইবেন চোয়াইল চোয়াইলাম চোয়াইলি চোয়াইলে চোয়াইলেন চোয়াইয়া চোয়াইয়াছ চোয়াইয়াছি চোয়াইয়াছিল চোয়াইয়াছিলাম চোয়াইয়াছিলি চোয়াইয়াছিলে চোয়াইয়াছিলেন চোয়াইয়াছিস চোয়াইয়াছে চোয়াইয়াছেন চোয়াইয়ো চোয়াক চোঁয়াচোঁয়া চোয়াচ্ছ চোয়াচ্ছি চোয়াচ্ছিল চোয়াচ্ছিলাম চোয়াচ্ছিলি চোয়াচ্ছিলে চোয়াচ্ছিলেন চোয়াচ্ছিলেম চোয়াচ্ছিলুম চোয়াচ্ছিস চোয়াচ্ছে চোয়াচ্ছেন চোঁয়াঢেঁকুর চোয়াত চোয়াতাম চোয়াতিস চোঁয়াতে চোয়াতেন চোয়াতেম চোয়াতুম চোয়ান চোঁয়ান চোয়ানি চোয়ানো চোঁয়ানো চোয়ানোপানি চোয়ানোমদ চোয়াব চোয়াবার চোয়াবি চোয়াবে চোয়াবেন চোয়াবো চোঁয়াব্যঞ্জন চোয়াল চোয়ালাম চোয়ালি চোয়ালে চোয়ালেন চোয়ালেম চোয়ালযুক্ত চোয়ালুম চোয়াস চোয়াড় চোয়াড়পনা চৌ চৌক চৌকা চৌকাঠ চৌকি চৌকিদার চৌকিদারি চৌকী চৌকো চৌকোণ চৌকোণা চৌকোনা চৌকুনে চৌকশ চৌকস চৌখণ্ড চৌখণ্ডি চৌখণ্ডী চৌখুপি চৌখুপী চৌখুরি চৌখুরী চৌগাছা চৌগান চৌগোঁপ্পা চৌগুণ চৌঘাট চৌঘরি চৌঘুড়ি চৌঙকি চৌচাক্কা চৌচাকা চৌচাপট চৌচাপড় চৌচালা চৌচালি চৌচির চৌছরা চৌযুগ চৌঠা চৌতারা চৌতাল চৌতালা চৌতিশা চৌত্রিশ চৌতলা চৌথ চৌদানি চৌদিক চৌদিশ চৌদিশা চৌদোল চৌদোলা চৌদ্দ চৌদ্দকথা চৌদ্দগ্রাম চৌদ্দঠাঁই চৌদ্দদল চৌদ্দদলীয় চৌদ্দপোয়া চৌদ্দপুরুষ চৌদ্দবার চৌদ্দবছর চৌদ্দশাক চৌদল চৌধুরানী চৌধুরী চৌপাটি চৌপাঠি চৌপাল চৌপালা চৌপাশ চৌপাড় চৌপাড়ি চৌপাড়ী চৌপায়া চৌপট চৌপথ চৌপদ চৌপদী চৌপর চৌপল চৌপহর চৌবাচ্চা চৌবে চৌবন্দি চৌমাথা চৌমোহানা চৌমোহনা চৌম্বক চৌম্বকক্ষেত্র চৌম্বকীয় চৌম্বকত্ব চৌম্বকমণ্ডল চৌম্বকশক্তি চৌমুহনী চৌমহলা চৌর চৌরকার্য চৌরঙ্গী চৌরঙ্গীবাত চৌরাশি চৌরাস্তা চৌরি চৌরী চৌরোদ্ধরণিক চৌর্য চৌর্যদোষ চৌর্যবৃত্তি চৌরশ চৌরস চৌশাল চৌশালা চৌশিঙ্গা চৌশিঙা চৌষট্টি চৌহান চৌহানী চৌহদ্দি চৌহুদ্দি চৌয়ারি চৌয়ারী চৌয়াড়ি চঞ্চু চঞ্চূ চুঞ্চু চঞ্চুপুট চঞ্চর চঞ্চরিকা চঞ্চরী চঞ্চুরী চঞ্চরীক চঞ্চরীকা চঞ্চল চঞ্চলা চঞ্চলিত চঞ্চলিয়া চঞ্চলীকৃত চঞ্চলচিত্ত চঞ্চলতা চঞ্চলদৃষ্টি চঞ্চলনয়ন চঞ্চলনয়না চঞ্চলমতি চট চটু চটক চটুক চটকা চটকাইত চটকাইতাম চটকাইতিস চটকাইতে চটকাইতেছ চটকাইতেছি চটকাইতেছিল চটকাইতেছিলাম চটকাইতেছিলি চটকাইতেছিলে চটকাইতেছিলেন চটকাইতেছিস চটকাইতেছে চটকাইতেছেন চটকাইতেন চটকাইব চটকাইবার চটকাইবি চটকাইবে চটকাইবেন চটকাইল চটকাইলাম চটকাইলি চটকাইলে চটকাইলেন চটকাইয়া চটকাইয়াছ চটকাইয়াছি চটকাইয়াছিল চটকাইয়াছিলাম চটকাইয়াছিলি চটকাইয়াছিলে চটকাইয়াছিলেন চটকাইয়াছিস চটকাইয়াছে চটকাইয়াছেন চটকাইয়ো চটকাও চটকাক চটকাচ্ছ চটকাচ্ছি চটকাচ্ছিল চটকাচ্ছিলাম চটকাচ্ছিলি চটকাচ্ছিলে চটকাচ্ছিলেন চটকাচ্ছিলেম চটকাচ্ছিলুম চটকাচ্ছিস চটকাচ্ছে চটকাচ্ছেন চটকাত চটকাতাম চটকাতিস চটকাতে চটকাতেন চটকাতেম চটকাতুম চটকান চটকানি চটকানো চটকাব চটকাবার চটকাবি চটকাবে চটকাবেন চটকাবো চটকাল চটকালাম চটকালি চটকালে চটকালেন চটকালেম চটকালুম চটকাস চটকি চুটকি চুটকিগান চটকী চুটকী চটকে চটকেছ চটকেছি চটকেছিল চটকেছিলাম চটকেছিলি চটকেছিলে চটকেছিলেন চটকেছিলেম চটকেছিলুম চটকেছিস চটকেছে চটকেছেন চটকো চটকতাল চটকদার চটকল চটকলকর্মী চটা চুটা চ্যাঁ চ্যাং চ্যাংচিত্র চ্যাংঝোলা চ্যাংদোলা চ্যাংমুড়ি চ্যাংড়া চ্যাংড়াপানা চ্যাংড়ামি চ্যাংড়ামো চটাইত চটাইতাম চটাইতিস চটাইতে চটাইতেছ চটাইতেছি চটাইতেছিল চটাইতেছিলাম চটাইতেছিলি চটাইতেছিলে চটাইতেছিলেন চটাইতেছিস চটাইতেছে চটাইতেছেন চটাইতেন চটাইব চটাইবার চটাইবি চটাইবে চটাইবেন চটাইল চটাইলাম চটাইলি চটাইলে চটাইলেন চটাইয়া চটাইয়াছ চটাইয়াছি চটাইয়াছিল চটাইয়াছিলাম চটাইয়াছিলি চটাইয়াছিলে চটাইয়াছিলেন চটাইয়াছিস চটাইয়াছে চটাইয়াছেন চটাইয়ো চটাক চ্যাঙ চ্যাঙ্গারী চ্যাঙা চ্যাঙাব্যাঙা চ্যাঙারী চ্যাঁচানো চ্যাঁচামেচি চ্যাঁচারি চটাচ্ছ চটাচ্ছি চটাচ্ছিল চটাচ্ছিলাম চটাচ্ছিলি চটাচ্ছিলে চটাচ্ছিলেন চটাচ্ছিলেম চটাচ্ছিলুম চটাচ্ছিস চটাচ্ছে চটাচ্ছেন চটাচট চ্যাঁচ্যাঁ চটাচটি চ্যাট চ্যাঁট চ্যাটা চ্যাটাং চ্যাটাংচ্যাটাং চ্যাটফিল্ড চটাত চটাতাম চটাতিস চটাতে চটাতেন চটাতেম চটাতুম চটান চুটান চ্যানেল চটানো চুটানো চ্যান্সেলর চ্যাপেল চ্যাপটা চ্যাপ্টা চ্যাপ্টাকৃতি চ্যাপটান চ্যাপটানাক চ্যাপটানো চ্যাপ্টার চ্যাপলিন চটাব চটাবার চটাবি চটাবে চটাবেন চটাবো চ্যাঁভ্যাঁ চ্যাম্পিয়ন চ্যাম্পিয়নশিপ চ্যাম্পিয়নস চ্যাম্পিয়ন্স চ্যারিটি চ্যারিটেবল চটাল চ্যালা চ্যালাকাঠ চটালাম চটালি চটালে চ্যালেঞ্জ চ্যালেঞ্জার চটালেন চটালেম চটালো চটালুম চটাস চটি চুঁটি চটিকা চটিজুতা চটিজুতো চটিত চটিতং চটিতাম চটিতিস চটিতে চটিতেছ চটিতেছি চটিতেছিল চটিতেছিলাম চটিতেছিলি চটিতেছিলে চটিতেছিলেন চটিতেছিস চটিতেছে চটিতেছেন চটিতেন চটিব চটিবার চটিবি চটিবে চটিবেন চটিল চটিলাম চটিলি চটিলে চটিলেন চটিস চটিয়া চটিয়াছ চটিয়াছি চটিয়াছিল চটিয়াছিলাম চটিয়াছিলি চটিয়াছিলে চটিয়াছিলেন চটিয়াছিস চটিয়াছে চটিয়াছেন চটিয়ে চুটিয়ে চটিয়েছ চটিয়েছি চটিয়েছিল চটিয়েছিলাম চটিয়েছিলি চটিয়েছিলে চটিয়েছিলেন চটিয়েছিলেম চটিয়েছিলুম চটিয়েছিস চটিয়েছে চটিয়েছেন চুটিয়েপ্রেম চটিয়ো চটী চটচট চটে চটেছ চটেছি চটেছিল চটেছিলাম চটেছিলি চটেছিলে চটেছিলেন চটেছিলেম চটেছিলুম চটেছিস চটেছে চটেছেন চটেন চটো চটছ চটছি চটছিল চটছিলাম চটছিলি চটছিলে চটছিলেন চটছিলেম চটছিলুম চটছিস চটছে চটছেন চটজলদি চট্টগ্রাম চট্টগ্রামকলেজ চট্টগ্রামবিভাগ চট্টগ্রামবন্দর চট্টি চট্টোপাধ্যায় চট্টল চট্টলা চটত চ্যুত চ্যুতা চ্যুতাধিকার চ্যুতাধিকারা চটতাম চ্যুতি চ্যুতিচিহ্ন চটতিস চটতে চটতেন চটতেম চটতুম চটুন চুটনো চটপট চটপটা চটপটি চটপটে চটব চটবার চটবি চটবে চটবেন চটবো চ্যবন চ্যবনপ্রাশ চটল চটুল চটুলা চটলাম চটলি চটলে চটলেন চটলেম চটুলতা চটলুম চটুলরচনা চটুলস্বভাব চণক চণা চণ্ড চণ্ডু চণ্ডুখানা চণ্ডুখোর চণ্ডা চণ্ডাল চণ্ডালাদি চণ্ডালিকা চণ্ডালিনী চণ্ডালী চণ্ডাশোক চণ্ডিকা চণ্ডিকাদেবী চণ্ডিদাস চণ্ডী চণ্ডীকাব্য চণ্ডীগড় চণ্ডীদাস চণ্ডীদেবী চণ্ডীপাঠ চণ্ডীমঙ্গল চণ্ডীমণ্ডপ চণ্ডপ্রকৃতি চণ্ডবিক্রম চণ্ডমুণ্ড চণ্ডরশ্মি চণ্ডুসেবন চণ্ডস্বভাব চুত চূত চতুঃকোষ চতুঃগ্রাম চতুঃপার্শ্ব চতুঃপঞ্চাশৎ চতুঃপঞ্চাশত্তম চতুঃপঞ্চাশত্তমী চতুঃপ্রকোষ্ঠ চতুঃশাখ চতুঃশাল চতুঃশালা চতুঃষষ্টি চতুঃষষ্টিতম চতুঃষষ্টিতমী চতুঃসীমা চতুঃসীমাযুক্ত চতুঃসপ্ততি চতুঃসপ্ততিতম চতুঃসপ্ততিতমী চতুঃস্বর চুতিয়া চত্বারি চত্বারিংশ চত্বারিংশত চত্বারিংশত্তম চত্বারিংশত্তমী চত্বাল চত্বর চুতমারানি চূতমঞ্জরি চূতমঞ্জরী চতুর চতুরংশ চতুরংশিত চতুরক্ষর চতুর্গুণ চতুর্গুণিত চতুর্ঘাত চতুরঙ্গ চতুরঙ্গিণী চতুরঙ্গসেনা চতুরা চুতরা চতুরাক্ষরিক চতুরাক্ষরিত চতুরানন চতুরালি চতুরালী চতুরাশ্রম চতুর্যুগ চতুরতা চতুর্থ চতুর্থাংশ চতুর্থাশ্রমী চতুর্থী চতুর্থীবিভক্তি চতুর্থত চতুর্থতম চতুর্দিক চতুর্দোল চতুর্দোলা চতুর্দলীয় চতুর্দশ চতুর্দশাক্ষর চতুর্দশী চতুর্দশীযুক্ত চতুর্দশপদী চতুর্দশপুরুষ চতুর্দশবিদ্যা চতুর্দশভুবন চতুর্ধা চতুর্নবতি চতুর্নবতিতম চতুর্নবতিতমী চতুর্বিংশ চতুর্বিংশতি চতুর্বিংশতিতম চতুর্বিংশতিতমী চতুর্বিধ চতুর্বিধা চতুর্বেদ চতুর্বেদী চতুর্বর্গ চতুর্বর্গধর্ম চতুর্বর্ণ চতুর্ভুজ চতুর্ভুজা চতুর্ভুজাকৃতি চতুর্মুখ চতুর্মাত্রা চতুর্মাত্রিক চতুরশীতি চতুরশীতিতম চতুরশীতিতমী চতুরশ্ব চতুরস্র চূতলতা চতুশ্চত্বারিংশ চতুশ্চত্বারিংশত্তম চতুষ্ক চতুষ্কী চতুষ্কোণ চতুষ্কোণাকৃতি চতুষ্কন্ধ চতুষ্কপ্রাসাদ চতুষ্কভবন চতুষ্টয় চতুষ্পাঠী চতুষ্পাদ চতুষ্পার্শ্ব চতুষ্পার্শ্বস্থ চতুষ্পায়া চতুষ্পথ চতুষ্পথযুক্ত চতুষ্পদ চতুষ্পদী চতুস্ত্রিংশ চতুস্ত্রিংশত চতুস্ত্রিংশত্তম চতুস্ত্রিংশত্তমী চতুস্তল চুদ চুন চুনকাম চুনকালি চুনকুড়ি চুনগোলা চুনা চুনাট চুনাপাথর চুনাপাথরীয় চুনাপুঁটি চুনারি চুনি চুনিন্দা চুনিবালা চুনিয়া চনচন চুনেন্দা চুনো চুনোগলি চুনোট চুনোপাথর চুনোপুঁটি চুনোমাছ চুনট চুনযুক্ত চন্দ চন্দক চন্দা চন্দন চন্দনকাঠ চন্দনকাষ্ঠ চন্দনগাছ চন্দনা চন্দনাদি চন্দনাপক্ষী চন্দনি চন্দনী চন্দনচর্চিত চন্দনযুক্ত চন্দনদস্যু চন্দনধেনু চন্দননগর চন্দনপঙ্ক চন্দনপিঁড়ি চন্দনপুষ্প চন্দনবৃক্ষ চন্দনবিলেপ চন্দনলাঞ্ছিত চন্দনলিপ্ত চন্দমুখী চন্দমা চন্দ্র চন্দ্রক চন্দ্রকান্ত চন্দ্রকান্তা চন্দ্রকান্তি চন্দ্রকান্তমণি চন্দ্রকামিনী চন্দ্রকিরণ চন্দ্রকোনা চন্দ্রকুমার চন্দ্রকর চন্দ্রকলা চন্দ্রকলাপ চন্দ্রগামী চন্দ্রগিরি চন্দ্রগুপ্ত চন্দ্রগর্ভ চন্দ্রগ্রস্ত চন্দ্রগ্রহণ চন্দ্রঘোনা চন্দ্রঘণ্টা চন্দ্রাংশু চন্দ্রাকার চন্দ্রাকৃতি চন্দ্রাকর্ষণ চন্দ্রাতপ চন্দ্রানন চন্দ্রাননা চন্দ্রাননী চন্দ্রাপীড় চন্দ্রাবতী চন্দ্রাবলী চন্দ্রালোক চন্দ্রালোকিত চন্দ্রাহত চন্দ্রিকা চন্দ্রিমা চন্দ্রচূড় চন্দ্রীয় চন্দ্রের চন্দ্রোদয় চন্দ্রদেব চন্দ্রদেবতা চন্দ্রদ্বীপ চন্দ্রধর চন্দ্রনাথ চন্দ্রনিবাস চন্দ্রপত্নী চন্দ্রপুত্র চন্দ্রপথ চন্দ্রপুর চন্দ্রপ্রভ চন্দ্রপ্রভা চন্দ্রপুলি চন্দ্রপৃষ্ঠ চন্দ্রবংশ চন্দ্রবংশীয় চন্দ্রবাণ চন্দ্রবান চন্দ্রবাবু চন্দ্রবিন্দু চন্দ্রবোড়া চন্দ্রবদন চন্দ্রবদনা চন্দ্রভাগা চন্দ্রমুখ চন্দ্রমুখী চন্দ্রমা চন্দ্রমাস চন্দ্রমোহন চন্দ্রমণি চন্দ্রমল্লিকা চন্দ্ররেখা চন্দ্ররেণু চন্দ্রলেখা চন্দ্রলোক চন্দ্রশালা চন্দ্রশালিকা চন্দ্রশেখর চন্দ্রসুধা চন্দ্রসম্ভব চন্দ্রসূর্য চন্দ্রসূর্যাদি চন্দ্রহার চন্দ্রহাস চুনন চুননু চন্নামেত্ত চুন্নি চুন্নিবিল্লি চন্নন চুনবালি চনমন চুনরি চুনুরি চুনুরী চুনসুরকি চপ চুপ চপকাটলেট চুপি চুপিচাপি চুপিচুপি চুপিসারে চুপচাপ চপচপ চুপে চুপেচুপে চপেট চপেটা চপেটাঘাত চপেটিকা চপেটী চুপটি চপ্পল চপল চপলা চপলালক্ষ্মী চপলতা চপলতাপূর্ণ চপলদৃষ্টি চপলবুদ্ধি চপলমতি চপশা চুপস চুপসক চুপসা চুপসাইত চুপসাইতাম চুপসাইতিস চুপসাইতে চুপসাইতেছ চুপসাইতেছি চুপসাইতেছিল চুপসাইতেছিলাম চুপসাইতেছিলি চুপসাইতেছিলে চুপসাইতেছিলেন চুপসাইতেছিস চুপসাইতেছে চুপসাইতেছেন চুপসাইতেন চুপসাইব চুপসাইবার চুপসাইবি চুপসাইবে চুপসাইবেন চুপসাইল চুপসাইলাম চুপসাইলি চুপসাইলে চুপসাইলেন চুপসাইয়া চুপসাইয়াছ চুপসাইয়াছি চুপসাইয়াছিল চুপসাইয়াছিলাম চুপসাইয়াছিলি চুপসাইয়াছিলে চুপসাইয়াছিলেন চুপসাইয়াছিস চুপসাইয়াছে চুপসাইয়াছেন চুপসাইয়ো চুপসাও চুপসাক চুপসান চুপসানো চুপসাস চুপসি চুপসিয়ে চুপসিয়েছ চুপসিয়েছি চুপসিয়েছিল চুপসিয়েছিলাম চুপসিয়েছিলি চুপসিয়েছিলে চুপসিয়েছিলেন চুপসিয়েছিলেম চুপসিয়েছিলুম চুপসিয়েছিস চুপসিয়েছে চুপসিয়েছেন চুপসিয়ো চুপসচ্ছ চুপসচ্ছি চুপসচ্ছিল চুপসচ্ছিলাম চুপসচ্ছিলি চুপসচ্ছিলে চুপসচ্ছিলেন চুপসচ্ছিলেম চুপসচ্ছিলুম চুপসচ্ছিস চুপসচ্ছে চুপসচ্ছেন চুপসে চুপসেছ চুপসেছি চুপসেছিল চুপসেছিলাম চুপসেছিলি চুপসেছিলে চুপসেছিলেন চুপসেছিলেম চুপসেছিলুম চুপসেছিস চুপসেছে চুপসেছেন চুপসো চুপসোবার চুপসত চুপসতাম চুপসতিস চুপসতে চুপসতেন চুপসতেম চুপসতুম চুপসন চুপসনো চুপসব চুপসবি চুপসবে চুপসবেন চুপসবো চুপসল চুপসলাম চুপসলি চুপসলে চুপসলেন চুপসলেম চুপসলুম চুপসস চুপড়ি চুব চুবক চুবা চুবাইত চুবাইতাম চুবাইতিস চুবাইতে চুবাইতেছ চুবাইতেছি চুবাইতেছিল চুবাইতেছিলাম চুবাইতেছিলি চুবাইতেছিলে চুবাইতেছিলেন চুবাইতেছিস চুবাইতেছে চুবাইতেছেন চুবাইতেন চুবাইব চুবাইবার চুবাইবি চুবাইবে চুবাইবেন চুবাইল চুবাইলাম চুবাইলি চুবাইলে চুবাইলেন চুবাইয়া চুবাইয়াছ চুবাইয়াছি চুবাইয়াছিল চুবাইয়াছিলাম চুবাইয়াছিলি চুবাইয়াছিলে চুবাইয়াছিলেন চুবাইয়াছিস চুবাইয়াছে চুবাইয়াছেন চুবাইয়ো চুবাক চুবাচুবি চুবান চুবানি চুবানো চুবাস চুবি চুবিয়ে চুবিয়েছ চুবিয়েছি চুবিয়েছিল চুবিয়েছিলাম চুবিয়েছিলি চুবিয়েছিলে চুবিয়েছিলেন চুবিয়েছিলেম চুবিয়েছিলুম চুবিয়েছিস চুবিয়েছে চুবিয়েছেন চুবিয়ো চুবচ্ছ চুবচ্ছি চুবচ্ছিল চুবচ্ছিলাম চুবচ্ছিলি চুবচ্ছিলে চুবচ্ছিলেন চুবচ্ছিলেম চুবচ্ছিলুম চুবচ্ছিস চুবচ্ছে চুবচ্ছেন চবচব চবচবে চুবো চুবত চুবতাম চবুতারা চুবতিস চুবতে চুবতেন চুবতেম চুবতুম চবুতর চবুতরা চুবন চুবনি চুবুনি চুবনো চুবব চুববার চুববি চব্বিশ চব্বিশঘণ্টা চব্বিশতম চুববে চুববেন চুববো চবর্গ চুবল চুবলাম চুবলি চুবলে চুবলেন চুবলেম চুবলুম চুবস চুবড়ি চূবড়ি চম চমূ চুম চুমু চমক চুমুক চমকা চমকাইত চমকাইতাম চমকাইতিস চমকাইতে চমকাইতেছ চমকাইতেছি চমকাইতেছিল চমকাইতেছিলাম চমকাইতেছিলি চমকাইতেছিলে চমকাইতেছিলেন চমকাইতেছিস চমকাইতেছে চমকাইতেছেন চমকাইতেন চমকাইব চমকাইবার চমকাইবি চমকাইবে চমকাইবেন চমকাইল চমকাইলাম চমকাইলি চমকাইলে চমকাইলেন চমকাইয়া চমকাইয়াছ চমকাইয়াছি চমকাইয়াছিল চমকাইয়াছিলাম চমকাইয়াছিলি চমকাইয়াছিলে চমকাইয়াছিলেন চমকাইয়াছিস চমকাইয়াছে চমকাইয়াছেন চমকাইয়ো চমকাক চমকাচ্ছ চমকাচ্ছি চমকাচ্ছিল চমকাচ্ছিলাম চমকাচ্ছিলি চমকাচ্ছিলে চমকাচ্ছিলেন চমকাচ্ছিলেম চমকাচ্ছিলুম চমকাচ্ছিস চমকাচ্ছে চমকাচ্ছেন চমকাত চমকাতাম চমকাতিস চমকাতে চমকাতেন চমকাতেম চমকাতুম চমকান চমকানি চমকানো চমকাব চমকাবার চমকাবি চমকাবে চমকাবেন চমকাবো চমকাল চমকালাম চমকালি চমকালে চমকালেন চমকালেম চমকালুম চমকাস চমকি চুমকি চুমকিঘটি চমকিত চমকিতা চমকিয়ে চমকিয়েছ চমকিয়েছি চমকিয়েছিল চমকিয়েছিলাম চমকিয়েছিলি চমকিয়েছিলে চমকিয়েছিলেন চমকিয়েছিলেম চমকিয়েছিলুম চমকিয়েছিস চমকিয়েছে চমকিয়েছেন চমকেছ চমকেছি চমকেছিল চমকেছিলাম চমকেছিলি চমকেছিলে চমকেছিলেন চমকেছিলেম চমকেছিলুম চমকেছিস চমকেছে চমকেছেন চমকদাতা চমকদাত্রী চমকদান চমকদার চমকদায়ক চমকপ্রাপ্ত চমকপ্রদ চমকভাঙা চমকসৃষ্টি চুমকুড়ি চুমকুড়ী চুমা চুমাচুমি চমচম চুমুচুমি চুমো চুমোচুমি চমৎকার চমৎকারক চমৎকারা চমৎকারিণী চমৎকারিতা চমৎকারিত্ব চমৎকারী চমৎকারজনক চমৎকারত্ব চমৎকারভাবে চমৎকৃত চমৎকরণ চমন চমনবাগ চম্পূ চম্পক চম্পকদাম চম্পকফুল চম্পকমালা চম্পকরাগ চম্পা চম্পাকলি চম্পট চম্পটি চুম্ব চুম্বক চুম্বকায়িত চুম্বকীয় চুম্বকতা চুম্বকত্ব চুম্বকন চুম্বকপাথর চুম্বকশলাকা চুম্বিত চুম্বী চুম্বন চুম্বনদৃশ্য চুম্বনরস চম্বল চমর চুমর চুমরক চুমরা চুমরাইত চুমরাইতাম চুমরাইতিস চুমরাইতে চুমরাইতেছ চুমরাইতেছি চুমরাইতেছিল চুমরাইতেছিলাম চুমরাইতেছিলি চুমরাইতেছিলে চুমরাইতেছিলেন চুমরাইতেছিস চুমরাইতেছে চুমরাইতেছেন চুমরাইতেন চুমরাইব চুমরাইবার চুমরাইবি চুমরাইবে চুমরাইবেন চুমরাইল চুমরাইলাম চুমরাইলি চুমরাইলে চুমরাইলেন চুমরাইয়া চুমরাইয়াছ চুমরাইয়াছি চুমরাইয়াছিল চুমরাইয়াছিলাম চুমরাইয়াছিলি চুমরাইয়াছিলে চুমরাইয়াছিলেন চুমরাইয়াছিস চুমরাইয়াছে চুমরাইয়াছেন চুমরাইয়ো চুমরাক চুমরান চুমরানো চুমরাস চুমরি চুমুরি চুমরিয়ে চুমরিয়েছ চুমরিয়েছি চুমরিয়েছিল চুমরিয়েছিলাম চুমরিয়েছিলি চুমরিয়েছিলে চুমরিয়েছিলেন চুমরিয়েছিলেম চুমরিয়েছিলুম চুমরিয়েছিস চুমরিয়েছে চুমরিয়েছেন চুমরিয়ো চমরী চুমুরী চমরীগাই চুমরচ্ছ চুমরচ্ছি চুমরচ্ছিল চুমরচ্ছিলাম চুমরচ্ছিলি চুমরচ্ছিলে চুমরচ্ছিলেন চুমরচ্ছিলেম চুমরচ্ছিলুম চুমরচ্ছিস চুমরচ্ছে চুমরচ্ছেন চুমরে চুমরেছ চুমরেছি চুমরেছিল চুমরেছিলাম চুমরেছিলি চুমরেছিলে চুমরেছিলেন চুমরেছিলেম চুমরেছিলুম চুমরেছিস চুমরেছে চুমরেছেন চুমরো চুমরোবার চুমরত চুমরতাম চুমরতিস চুমরতে চুমরতেন চুমরতেম চুমরতুম চুমরন চুমরনো চুমরব চুমরবি চুমরবে চুমরবেন চুমরবো চুমরল চুমরলাম চুমরলি চুমরলে চুমরলেন চুমরলেম চুমরলুম চুমরস চমস চর চরু চুর চুরু চূর চরক চরুক চরকা চরকাচরণ চরকি চর্কি চরকিবাজি চর্কিবাজী চরকসংহিতা চরখি চরখিবাজি চরা চুরা চরাইত চরাইতাম চরাইতিস চরাইতে চরাইতেছ চরাইতেছি চরাইতেছিল চরাইতেছিলাম চরাইতেছিলি চরাইতেছিলে চরাইতেছিলেন চরাইতেছিস চরাইতেছে চরাইতেছেন চরাইতেন চরাইব চরাইবার চরাইবি চরাইবে চরাইবেন চরাইল চরাইলাম চরাইলি চরাইলে চরাইলেন চরাইয়া চরাইয়াছ চরাইয়াছি চরাইয়াছিল চরাইয়াছিলাম চরাইয়াছিলি চরাইয়াছিলে চরাইয়াছিলেন চরাইয়াছিস চরাইয়াছে চরাইয়াছেন চরাইয়ো চরাক চরাচ্ছ চরাচ্ছি চরাচ্ছিল চরাচ্ছিলাম চরাচ্ছিলি চরাচ্ছিলে চরাচ্ছিলেন চরাচ্ছিলেম চরাচ্ছিলুম চরাচ্ছিস চরাচ্ছে চরাচ্ছেন চরাচর চরাচরা চরাট চরাত চরাতাম চরাতিস চরাতে চরাতেন চরাতেম চরাতুম চরান চরানো চুরানো চুরানব্বই চরাব চরাবার চরাবি চরাবে চরাবেন চরাবো চরাল চরালাম চরালি চরালে চরালেন চরালেম চরালুম চুরাশি চুরাশী চরাস চরি চুরি চুরিঘটিত চুরিচামারি চুরিডাকাতি চরিত চরিতইতিহাস চরিতকার চরিতকথা চরিতাখ্যান চরিতাবলি চরিতাবলী চরিতাভিধান চরিতামৃত চরিতার্থ চরিতার্থতা চরিতিস চরিতে চরিতেছ চরিতেছি চরিতেছিল চরিতেছিলাম চরিতেছিলি চরিতেছিলে চরিতেছিলেন চরিতেছিস চরিতেছে চরিতেছেন চরিতেন চরিত্র চরিত্রগত চরিত্রাবলি চরিত্রায়ন চরিত্রচিত্রণ চরিত্রদোষ চরিত্রনাশ চরিত্রপূজা চরিত্রবান চরিত্রবতী চরিত্রমাহাত্ম্য চরিত্রস্খলন চরিত্রসৌন্দর্য চরিত্রহীন চরিত্রহীনা চরিত্রহীনতা চরিত্রহনন চরিব চরিবার চরিবি চুরিবিদ্যা চরিবে চরিবেন চুরিরোগ চরিল চরিলাম চরিলি চরিলে চরিলেন চরিষ্ণু চরিস চরিয়া চরিয়াছ চরিয়াছি চরিয়াছিল চরিয়াছিলাম চরিয়াছিলি চরিয়াছিলে চরিয়াছিলেন চরিয়াছিস চরিয়াছে চরিয়াছেন চরিয়ে চরিয়েছ চরিয়েছি চরিয়েছিল চরিয়েছিলাম চরিয়েছিলি চরিয়েছিলে চরিয়েছিলেন চরিয়েছিলেম চরিয়েছিলুম চরিয়েছিস চরিয়েছে চরিয়েছেন চরিয়ো চর্চা চর্চাক্ষেত্র চর্চিকা চর্চিত চুরচুর চর্চরিকা চর্চরী চর্চরীকা চরেছ চরেছি চরেছিল চরেছিলাম চরেছিলি চরেছিলে চরেছিলেন চরেছিলেম চরেছিলুম চরেছিস চরেছে চরেছেন চরেন চরৈবেতি চরছ চরছি চরছিল চরছিলাম চরছিলি চরছিলে চরছিলেন চরছিলেম চরছিলুম চরছিস চরছে চরছেন চর্য চুরট চুরুট চর্যা চর্যাগীতি চর্যাগীতিকা চর্যাচর্য চর্যাচর্যবিনিশ্চয় চর্যাপদ চরণ চূর্ণ চূর্ণক চূর্ণকার চূর্ণকুন্তল চরণকমল চরণকমলেষু চরণামৃত চরণাম্বুজ চরণারবিন্দ চরণাশ্রিত চরণাশ্রয় চরণাশ্রয়প্রার্থী চূর্ণিকা চূর্ণিত চূর্ণীকৃত চূর্ণীকরণ চরণচারী চরণচারণ চরণচিহ্ন চূর্ণীত চূর্ণীভূত চূর্ণযুক্ত চরণযুক্তা চরণতল চরণদাসী চরণদ্বারা চরণধুলা চরণধূলি চূর্ণন চূর্ণনীয় চূর্ণনযোগ্য চরণপদ্ম চরণপ্রান্ত চরণবাবু চূর্ণবিচূর্ণ চরণবন্দনা চরণরেখা চরণরেণু চরণরূপ চরণসেবা চরণস্থাপন চরণস্পর্শ চরত চরতাম চরতিস চরতে চরতেন চরতেম চরতুম চরুন চুরনি চুরুনী চরন্তী চর্পট চর্পটী চরফ্যাশন চরব চরবার চরবি চর্বি চর্বিযুক্ত চর্বিত চর্বিতচর্বণ চর্বিদার চর্বিহীন চর্বী চরবে চরবেন চরবো চর্ব্য চর্ব্যচোষ্য চর্ব্যচূষ্য চর্বণ চর্বণীয় চর্বণযোগ্য চর্বণযন্ত্র চরবদার চর্ভট চরম চর্ম চরমঅসন্তোষ চর্মকার চর্মকীল চরমক্ষেত্র চর্মখণ্ড চর্মাচ্ছাদিত চর্মাচ্ছদিত চর্মাদি চর্মাবৃত চর্মাবরণ চর্মার চুরমার চর্মাসন চর্মিন চর্মী চর্মচক্ষু চর্মচোষা চর্মচটক চর্মচটকা চর্মচটিকা চর্মচটী চরমোৎকর্ষ চর্মজ চর্মণ্বতী চরমদুঃখ চরমদশা চর্মধারী চরমনির্দেশ চর্মপেটিকা চর্মপেটী চরমপত্র চরমপন্থা চরমপন্থি চর্মপ্রসেবক চর্মবাদ্যবিশেষ চর্মবিজ্ঞান চর্মবৃত চরমভাবাপন্ন চরমভাবে চর্ম্ম চর্মরেণু চর্মরোগ চরমরূপ চর্মশিল্প চর্মসার চরমসিদ্ধান্ত চর্মসূত্র চর্মস্থলী চরমসময় চুররস চরল চরলাম চরলি চুরুলিয়া চরলে চরলেন চরলেম চরলুম চরস চরসদ্বীপ চুরহাত চল চুল চূল চলক চলুক চুলক চলকা চুলকা চলকাইত চুলকাইত চলকাইতাম চুলকাইতাম চলকাইতিস চুলকাইতিস চলকাইতে চুলকাইতে চলকাইতেছ চুলকাইতেছ চলকাইতেছি চুলকাইতেছি চলকাইতেছিল চুলকাইতেছিল চলকাইতেছিলাম চুলকাইতেছিলাম চলকাইতেছিলি চুলকাইতেছিলি চলকাইতেছিলে চুলকাইতেছিলে চলকাইতেছিলেন চুলকাইতেছিলেন চলকাইতেছিস চুলকাইতেছিস চলকাইতেছে চুলকাইতেছে চলকাইতেছেন চুলকাইতেছেন চলকাইতেন চুলকাইতেন চলকাইব চুলকাইব চলকাইবার চুলকাইবার চলকাইবি চুলকাইবি চলকাইবে চুলকাইবে চলকাইবেন চুলকাইবেন চলকাইল চুলকাইল চলকাইলাম চুলকাইলাম চলকাইলি চুলকাইলি চলকাইলে চুলকাইলে চলকাইলেন চুলকাইলেন চলকাইয়া চুলকাইয়া চলকাইয়াছ চুলকাইয়াছ চলকাইয়াছি চুলকাইয়াছি চলকাইয়াছিল চুলকাইয়াছিল চলকাইয়াছিলাম চুলকাইয়াছিলাম চলকাইয়াছিলি চুলকাইয়াছিলি চলকাইয়াছিলে চুলকাইয়াছিলে চলকাইয়াছিলেন চুলকাইয়াছিলেন চলকাইয়াছিস চুলকাইয়াছিস চলকাইয়াছে চুলকাইয়াছে চলকাইয়াছেন চুলকাইয়াছেন চলকাইয়ো চুলকাইয়ো চলকাক চুলকাক চলকাচ্ছ চলকাচ্ছি চলকাচ্ছিল চলকাচ্ছিলাম চলকাচ্ছিলি চলকাচ্ছিলে চলকাচ্ছিলেন চলকাচ্ছিলেম চলকাচ্ছিলুম চলকাচ্ছিস চলকাচ্ছে চুলকাচ্ছে চলকাচ্ছেন চলকাত চলকাতাম চলকাতিস চলকাতে চলকাতেন চলকাতেম চলকাতুম চলকান চুলকান চুলকানি চুলকানিযুক্ত চলকানো চুলকানো চলকাব চলকাবার চলকাবি চলকাবে চলকাবেন চলকাবো চলকাল চলকালাম চলকালি চলকালে চলকালেন চলকালেম চলকালুম চলকাস চুলকাস চুলকি চুলকিয়ে চুলকিয়েছ চুলকিয়েছি চুলকিয়েছিল চুলকিয়েছিলাম চুলকিয়েছিলি চুলকিয়েছিলে চুলকিয়েছিলেন চুলকিয়েছিলেম চুলকিয়েছিলুম চুলকিয়েছিস চুলকিয়েছে চুলকিয়েছেন চুলকিয়ো চুলকচ্ছ চুলকচ্ছি চুলকচ্ছিল চুলকচ্ছিলাম চুলকচ্ছিলি চুলকচ্ছিলে চুলকচ্ছিলেন চুলকচ্ছিলেম চুলকচ্ছিলুম চুলকচ্ছিস চুলকচ্ছে চুলকচ্ছেন চলকেছ চুলকেছ চলকেছি চুলকেছি চলকেছিল চুলকেছিল চলকেছিলাম চুলকেছিলাম চলকেছিলি চুলকেছিলি চলকেছিলে চুলকেছিলে চলকেছিলেন চুলকেছিলেন চলকেছিলেম চুলকেছিলেম চলকেছিলুম চুলকেছিলুম চলকেছিস চুলকেছিস চলকেছে চুলকেছে চলকেছেন চুলকেছেন চলকো চুলকো চুলকোবার চলকুণ্ডলী চুলকত চুলকতাম চুলকতিস চুলকতে চুলকতেন চুলকতেম চুলকতুম চলকদৈব চুলকন চুলকনা চুলকনি চুলকুনি চুলকনো চুলকব চুলকবি চুলকবে চুলকবেন চুলকবো চুলকল চুলকলাম চুলকলি চুলকলে চুলকলেন চুলকলেম চুলকলুম চুলকস চলগুজা চলা চুলা চলাকাল চলাকালীন চলাচল চলাচলকারী চুলাচুলি চলাচলপথ চলান চলানো চলাফিরা চলাফেরা চুলারজ্বাল চলি চুলি চলিছে চলিত চলিতাম চলিতিস চলিতে চলিতেছ চলিতেছি চলিতেছিল চলিতেছিলাম চলিতেছিলি চলিতেছিলে চলিতেছিলেন চলিতেছিস চলিতেছে চলিতেছেন চলিতেন চলিতভাষা চলিতরূপ চলিব চলিবার চলিবি চলিবে চলিবেন চলিল চলিলা চলিলাম চলিলি চলিলে চলিলেন চলিষ্ণু চলিষ্ণুতা চলিস চলিয়া চলিয়াছ চলিয়াছি চলিয়াছিল চলিয়াছিলাম চলিয়াছিলি চলিয়াছিলে চলিয়াছিলেন চলিয়াছিস চলিয়াছে চলিয়াছেন চলিয়েছে চলিয়ো চলচিত্ত চুলচিরে চলচ্চিত্ত চলচ্চিত্র চলচ্চিত্রকার চলচ্চিত্রানুরাগী চলচ্চিত্রাভিনেতা চলচ্চিত্রাভিনেত্রী চলচ্চিত্রায়িত চলচ্চিত্রায়ন চলচ্চিত্রনির্মাতা চলচ্চিত্রপুরস্কার চলচ্চিত্রশিল্পী চুলচেরা চলচ্ছক্তি চলচঞ্চল চলে চুলে চলেছ চলেছি চলেছিল চলেছিলাম চলেছিলি চলেছিলে চলেছিলেন চলেছিলেম চলেছিলুম চলেছিস চলেছে চলেছেন চলেন চলেনা চলেফিরে চলো চুলো চুলোচুলি চলোর্মি চলোর্মিচঞ্চল চুলোয়যাক চলছ চুলছাঁটা চলছি চলছিল চলছিলাম চলছিলি চলছিলে চলছিলেন চলছিলেম চলছিলো চলছিলুম চলছিস চলছে চলছেন চুলযুক্ত চলত চলতাম চলতি চলতিকারবার চলতিঘর চলতিপ্রথা চলতিবৎসর চলতিবলতি চলতিভাষা চলতিরিকশা চলতিস চলতে চলতেছে চলতেন চলতেম চলতো চলতুম চলৎশক্তি চলতড়িৎ চুলদাড়ি চলদল চলন চলুন চলনক্ষম চলনেবলনে চলন্ত চলনধর্ম চলনবলন চলনভঙ্গি চলনশক্তি চলনশক্তিরহিত চলনশীল চলনসই চুলপাকা চলব চুলবাঁধা চলবার চলবি চলবিচল চলবে চলবেন চলবো চুলবুল চুলবুলানি চুলবুলুনি চলমান চলমানতা চলমানতাবিহীন চুলরাশি চলল চললাম চললি চুল্লি চল্লিশ চল্লিশা চল্লিশতম চুল্লী চললেন চললেম চললুম চুঁশব্দ চশম চশমখোর চশমা চশমাদি চশমাপরা চষ চুষ চষক চষুক চুষুক চষা চুষা চষান চুষান চষানো চুষানো চষি চুষি চুষিকাটি চুষিকাঠি চষিত চুষিত চূষিত চুষিতা চষিতাম চুষিতাম চষিতিস চুষিতিস চষিতে চুষিতে চষিতেছ চুষিতেছ চষিতেছি চুষিতেছি চষিতেছিল চুষিতেছিল চষিতেছিলাম চুষিতেছিলাম চষিতেছিলি চুষিতেছিলি চষিতেছিলে চুষিতেছিলে চষিতেছিলেন চুষিতেছিলেন চষিতেছিস চুষিতেছিস চষিতেছে চুষিতেছে চষিতেছেন চুষিতেছেন চষিতেন চুষিতেন চুষিপিঠা চুষিপিঠে চষিব চুষিব চষিবার চুষিবার চষিবি চুষিবি চষিবে চুষিবে চষিবেন চুষিবেন চষিল চুষিল চষিলাম চুষিলাম চষিলি চুষিলি চষিলে চুষিলে চষিলেন চুষিলেন চষিস চুষিস চষিয়া চুষিয়া চষিয়াছ চুষিয়াছ চষিয়াছি চুষিয়াছি চষিয়াছিল চুষিয়াছিল চষিয়াছিলাম চুষিয়াছিলাম চষিয়াছিলি চুষিয়াছিলি চষিয়াছিলে চুষিয়াছিলে চষিয়াছিলেন চুষিয়াছিলেন চষিয়াছিস চুষিয়াছিস চষিয়াছে চুষিয়াছে চষিয়াছেন চুষিয়াছেন চষিয়ো চুষিয়ো চুষী চষেছ চুষেছ চষেছি চুষেছি চষেছিল চুষেছিল চষেছিলাম চুষেছিলাম চষেছিলি চুষেছিলি চষেছিলে চুষেছিলে চষেছিলেন চুষেছিলেন চষেছিলেম চুষেছিলেম চষেছিলুম চুষেছিলুম চষেছিস চুষেছিস চষেছে চুষেছে চষেছেন চুষেছেন চষেন চুষেন চষো চুষো চষছ চুষছ চষছি চুষছি চষছিল চুষছিল চষছিলাম চুষছিলাম চষছিলি চুষছিলি চষছিলে চুষছিলে চষছিলেন চুষছিলেন চষছিলেম চুষছিলেম চষছিলুম চুষছিলুম চষছিস চুষছিস চষছে চুষছে চষছেন চুষছেন চূষ্য চূষণীয় চষত চুষত চষতাম চুষতাম চষতিস চুষতিস চষতে চুষতে চষতেন চুষতেন চষতেম চুষতেম চষতুম চুষতুম চষুন চুষুন চষব চুষব চষবার চষবি চুষবি চষবে চুষবে চষবেন চুষবেন চষবো চুষবো চষল চুষল চষলাম চুষলাম চষলি চুষলি চষলে চুষলে চষলেন চুষলেন চষলেম চুষলেম চষলুম চুষলুম চুস্ত চুস্তচালাক চুস্তপায়জামা চুস্তপুস্ত চসম চসমখোর চহট চহরম চড় চুড় চূড় চড়ই চড়ুই চড়ুইপাখি চড়ুইভাতি চড়ক চড়কগাছ চড়কগাছে চড়ুকে চড়কেরপিঠ চড়কেরবাদ্যি চড়ুকেহাসি চড়কসংক্রান্তি চড়া চুড়া চূড়া চড়াআঁচ চড়াই চড়াইত চড়াইতাম চড়াইতিস চড়াইতে চড়াইতেছ চড়াইতেছি চড়াইতেছিল চড়াইতেছিলাম চড়াইতেছিলি চড়াইতেছিলে চড়াইতেছিলেন চড়াইতেছিস চড়াইতেছে চড়াইতেছেন চড়াইতেন চড়াইব চড়াইবার চড়াইবি চড়াইবে চড়াইবেন চড়াইভাতি চড়াইল চড়াইলাম চড়াইলি চড়াইলে চড়াইলেন চড়াইয়া চড়াইয়াছ চড়াইয়াছি চড়াইয়াছিল চড়াইয়াছিলাম চড়াইয়াছিলি চড়াইয়াছিলে চড়াইয়াছিলেন চড়াইয়াছিস চড়াইয়াছে চড়াইয়াছেন চড়াইয়ো চড়াও চড়াক চড়াকথা চূড়াকরণ চূড়াকর্ম চড়াগলা চড়াচ্ছ চড়াচ্ছি চড়াচ্ছিল চড়াচ্ছিলাম চড়াচ্ছিলি চড়াচ্ছিলে চড়াচ্ছিলেন চড়াচ্ছিলেম চড়াচ্ছিলুম চড়াচ্ছিস চড়াচ্ছে চড়াচ্ছেন চূড়াযুক্ত চড়াত চড়াতাম চড়াতিস চড়াতচড়াত চড়াতে চড়াতেন চড়াতেম চড়াতুম চড়ান চড়ানো চূড়ান্ত চূড়ান্তকরণ চূড়ান্তবাদ চূড়ান্তভাবে চড়াপড়া চড়াব চূড়াবাঁধা চড়াবার চড়াবি চড়াবে চড়াবেন চড়াবো চড়ামেজাজ চূড়ামণি চড়াল চড়ালাম চড়ালি চড়ালে চড়ালেন চড়ালেম চড়ালুম চড়াস চড়াসুদ চড়ি চুড়ি চুড়িওয়ালা চুড়িকার চুড়িদার চড়িনু চড়িভাতি চড়িয়া চড়িয়ে চড়িয়েছ চড়িয়েছি চড়িয়েছিল চড়িয়েছিলাম চড়িয়েছিলি চড়িয়েছিলে চড়িয়েছিলেন চড়িয়েছিলেম চড়িয়েছিলুম চড়িয়েছিস চড়িয়েছে চড়িয়েছেন চড়িয়ো চড়চাপড় চড়চড় চড়চড়ি চড়েছে চড়েন চুড়ো চুড়োখোঁপা চড়ছে চড়তি চড়তে চড়ন চড়নদার চড়ন্দার চড়বে চড়বড় চয় চুয় চুয়ক চুয়া চুঁয়া চুয়াইত চুয়াইতাম চুয়াইতিস চুয়াইতে চুয়াইতেছ চুয়াইতেছি চুয়াইতেছিল চুয়াইতেছিলাম চুয়াইতেছিলি চুয়াইতেছিলে চুয়াইতেছিলেন চুয়াইতেছিস চুয়াইতেছে চুয়াইতেছেন চুয়াইতেন চুয়াইব চুয়াইবার চুয়াইবি চুয়াইবে চুয়াইবেন চুয়াইল চুয়াইলাম চুয়াইলি চুয়াইলে চুয়াইলেন চুয়াইয়া চুয়াইয়াছ চুয়াইয়াছি চুয়াইয়াছিল চুয়াইয়াছিলাম চুয়াইয়াছিলি চুয়াইয়াছিলে চুয়াইয়াছিলেন চুয়াইয়াছিস চুয়াইয়াছে চুয়াইয়াছেন চুয়াইয়ো চুয়াক চুয়াডাঙ্গা চুয়াত্তর চুয়ান চুয়ানি চুয়ানো চুয়ান্ন চুয়াল্লিশ চুয়াস চুয়াড় চুয়াড়পনা চুয়ি চয়িত চয়িনী চুয়িয়ে চুয়িয়েছ চুয়িয়েছি চুয়িয়েছিল চুয়িয়েছিলাম চুয়িয়েছিলি চুয়িয়েছিলে চুয়িয়েছিলেন চুয়িয়েছিলেম চুয়িয়েছিলুম চুয়িয়েছিস চুয়িয়েছে চুয়িয়েছেন চুয়িয়ো চুয়চ্ছ চুয়চ্ছি চুয়চ্ছিল চুয়চ্ছিলাম চুয়চ্ছিলি চুয়চ্ছিলে চুয়চ্ছিলেন চুয়চ্ছিলেম চুয়চ্ছিলুম চুয়চ্ছিস চুয়চ্ছে চুয়চ্ছেন চুয়ে চুয়েছ চুয়েছি চুয়েছিল চুয়েছিলাম চুয়েছিলি চুয়েছিলে চুয়েছিলেন চুয়েছিলেম চুয়েছিলুম চুয়েছিস চুয়েছে চুয়েছেন চুয়েট চয়েন চয়েস চুয়ো চুয়ত চুয়তাম চুয়তিস চুয়তে চুয়তেন চুয়তেম চুয়তুম চয়ন চুয়ন চয়নকারী চয়নিকা চয়নীয় চুয়নো চয়নযোগ্য চুয়ব চুয়বার চুয়বি চুয়বে চুয়বেন চুয়বো চুয়ল চুয়লাম চুয়লি চুয়লে চুয়লেন চুয়লেম চুয়লুম চুয়স".split(" "),
              w_ch: "ছ ছই ছুঁই ছইওয়ালা ছুঁইছুঁই ছইযুক্ত ছুঁইত ছুঁইতাম ছুঁইতিস ছুঁইতে ছুঁইতেছ ছুঁইতেছি ছুঁইতেছিল ছুঁইতেছিলাম ছুঁইতেছিলি ছুঁইতেছিলে ছুঁইতেছিলেন ছুঁইতেছিস ছুঁইতেছে ছুঁইতেছেন ছুঁইতেন ছুঁইব ছুঁইবার ছুঁইবি ছুঁইবে ছুঁইবেন ছুঁইল ছুঁইলাম ছুঁইলি ছুঁইলে ছুঁইলেন ছুঁইয়া ছুঁইয়াছ ছুঁইয়াছি ছুঁইয়াছিল ছুঁইয়াছিলাম ছুঁইয়াছিলি ছুঁইয়াছিলে ছুঁইয়াছিলেন ছুঁইয়াছিস ছুঁইয়াছে ছুঁইয়াছেন ছইয়াল ছুঁইয়ে ছুঁইয়েছ ছুঁইয়েছি ছুঁইয়েছিল ছুঁইয়েছিলাম ছুঁইয়েছিলি ছুঁইয়েছিলে ছুঁইয়েছিলেন ছুঁইয়েছিলেম ছুঁইয়েছিলুম ছুঁইয়েছিস ছুঁইয়েছে ছুঁইয়েছেন ছুঁইয়ো ছউই ছওগন্দ ছওম ছওয়াব ছক ছুঁক ছক্কা ছককাটা ছক্কাপাঞ্জা ছক্কড় ছকা ছুকরি ছকড়া ছকড়ানকড়া ছুকড়ি ছখানা ছখানি ছঙ্গদিল ছঙ্গমরমর ছা ছাই ছাইকপালে ছাইগাদা ছাঁইচ ছাইচাপা ছাঁইচতলা ছাইছ ছাঁইছুঁই ছাইছি ছাইছিল ছাইছিলাম ছাইছিলি ছাইছিলে ছাইছিলেন ছাইছিলেম ছাইছিলুম ছাইছিস ছাইছে ছাইছেন ছাইজাবা ছাইত ছাইতাম ছাইতিস ছাইতে ছাইতেছিল ছাইতেছিলাম ছাইতেছিলি ছাইতেছিলে ছাইতেছিলেন ছাইতেছিলেম ছাইতেছিলুম ছাইতেন ছাইতেম ছাইতুম ছাইদানি ছাইপাঁশ ছাইব ছাইবার ছাইবি ছাইবে ছাইবেন ছাইবো ছাইবর্ণ ছাইভস্ম ছাইরঙা ছাইল ছাইলাম ছাইলি ছাইলে ছাইলেন ছাইলেম ছাইলুম ছাইড়া ছাইয়ে ছাইয়েছ ছাইয়েছি ছাইয়েছিল ছাইয়েছিলাম ছাইয়েছিলি ছাইয়েছিলে ছাইয়েছিলেন ছাইয়েছিলেম ছাইয়েছিলুম ছাইয়েছিস ছাইয়েছে ছাইয়েছেন ছাইয়ের ছাইয়ো ছাউনি ছাও ছাওয়া ছাওয়াক ছাওয়াচ্ছ ছাওয়াচ্ছি ছাওয়াচ্ছিল ছাওয়াচ্ছিলাম ছাওয়াচ্ছিলি ছাওয়াচ্ছিলে ছাওয়াচ্ছিলেন ছাওয়াচ্ছিলেম ছাওয়াচ্ছিলুম ছাওয়াচ্ছিস ছাওয়াচ্ছে ছাওয়াচ্ছেন ছাওয়াত ছাওয়াতাম ছাওয়াতিস ছাওয়াতে ছাওয়াতেন ছাওয়াতেম ছাওয়াতুম ছাওয়ান ছাওয়ানো ছাওয়াব ছাওয়াবার ছাওয়াবি ছাওয়াবে ছাওয়াবেন ছাওয়াবো ছাওয়াল ছাওয়ালাম ছাওয়ালি ছাওয়ালে ছাওয়ালেন ছাওয়ালেম ছাওয়ালুম ছাওয়াস ছাঁক ছাঁকুক ছাঁকা ছাঁকাকথা ছাঁকাজল ছাঁকাতেল ছাঁকাদুধ ছাঁকি ছাঁকিজাল ছাঁকিত ছাঁকিতাম ছাঁকিতিস ছাঁকিতে ছাঁকিতেছ ছাঁকিতেছি ছাঁকিতেছিল ছাঁকিতেছিলাম ছাঁকিতেছিলি ছাঁকিতেছিলে ছাঁকিতেছিলেন ছাঁকিতেছিস ছাঁকিতেছে ছাঁকিতেছেন ছাঁকিতেন ছাঁকিব ছাঁকিবার ছাঁকিবি ছাঁকিবে ছাঁকিবেন ছাঁকিল ছাঁকিলাম ছাঁকিলি ছাঁকিলে ছাঁকিলেন ছাঁকিস ছাঁকিয়া ছাঁকিয়াছ ছাঁকিয়াছি ছাঁকিয়াছিল ছাঁকিয়াছিলাম ছাঁকিয়াছিলি ছাঁকিয়াছিলে ছাঁকিয়াছিলেন ছাঁকিয়াছিস ছাঁকিয়াছে ছাঁকিয়াছেন ছাঁকিয়ো ছাঁকে ছাঁকেন ছাঁকছ ছাঁকছি ছাঁকছিল ছাঁকছিলাম ছাঁকছিলি ছাঁকছিলে ছাঁকছিলেন ছাঁকছিলেম ছাঁকছিলুম ছাঁকছিস ছাঁকছে ছাঁকছেন ছাঁকজালি ছাঁকত ছাঁকতাম ছাঁকতিস ছাঁকতে ছাঁকতেন ছাঁকতেম ছাঁকতুম ছাঁকন ছাঁকুন ছাঁকনা ছাকনি ছাঁকনি ছাকনী ছাঁকব ছাঁকবার ছাঁকবি ছাঁকবে ছাঁকবেন ছাঁকবো ছাঁকল ছাঁকলাম ছাঁকলি ছাঁকলে ছাঁকলেন ছাঁকলেম ছাঁকলুম ছাগ ছাগাদি ছাগি ছাগী ছাগবাহন ছাগমাংস ছাগল ছাগলাদাড়ি ছাগলাদ্য ছাগলাদ্যঘৃত ছাগলি ছাগলী ছাগলদাড়ি ছাগলনাইয়া ছাগশিশু ছাঁচ ছাঁচি ছাঁচিকুমড়া ছাঁচিকুমড়ো ছাঁচতলা ছাট ছাঁট ছাঁটুক ছাটকাট ছাঁটকাট ছাটকাপড় ছাঁটকাপড় ছাটা ছাঁটা ছাঁটান ছাঁটানি ছাটানো ছাঁটানো ছাঁটি ছাঁটিত ছাঁটিতাম ছাঁটিতিস ছাঁটিতে ছাঁটিতেছ ছাঁটিতেছি ছাঁটিতেছিল ছাঁটিতেছিলাম ছাঁটিতেছিলি ছাঁটিতেছিলে ছাঁটিতেছিলেন ছাঁটিতেছিস ছাঁটিতেছে ছাঁটিতেছেন ছাঁটিতেন ছাঁটিব ছাঁটিবার ছাঁটিবি ছাঁটিবে ছাঁটিবেন ছাঁটিল ছাঁটিলাম ছাঁটিলি ছাঁটিলে ছাঁটিলেন ছাঁটিস ছাঁটিয়া ছাঁটিয়াছ ছাঁটিয়াছি ছাঁটিয়াছিল ছাঁটিয়াছিলাম ছাঁটিয়াছিলি ছাঁটিয়াছিলে ছাঁটিয়াছিলেন ছাঁটিয়াছিস ছাঁটিয়াছে ছাঁটিয়াছেন ছাঁটিয়ে ছাঁটিয়ো ছাঁটে ছাঁটেন ছাঁটছ ছাঁটছি ছাঁটছিল ছাঁটছিলাম ছাঁটছিলি ছাঁটছিলে ছাঁটছিলেন ছাঁটছিলেম ছাঁটছিলুম ছাঁটছিস ছাঁটছে ছাঁটছেন ছাঁটত ছাঁটতু ছাঁটতাম ছাঁটতিস ছাঁটতে ছাঁটতেন ছাঁটতেম ছাঁটতুম ছাটন ছাঁটন ছাঁটুন ছাটনি ছাঁটনি ছাঁটব ছাঁটবার ছাঁটবি ছাঁটবে ছাঁটবেন ছাঁটবো ছাঁটল ছাঁটলাম ছাঁটলি ছাঁটলে ছাঁটলেন ছাঁটলেম ছাঁটলুম ছাত ছাতু ছাঁৎ ছাতক ছাতুখোর ছাতা ছাতাপেটা ছাতারিয়া ছাতারে ছাতি ছাতিপেটা ছাতিম ছাতিমগাছ ছাতিয়া ছাতুভোজী ছাত্র ছাত্রকল্যাণ ছাত্রাগার ছাত্রাবাস ছাত্রাবস্থা ছাত্রী ছাত্রীবস্থা ছাত্রীহল ছাত্রছাত্রী ছাত্রজীবন ছাত্রজনতা ছাত্রযোদ্ধা ছাত্রধর্মঘট ছাত্রনিবাস ছাত্রনেতা ছাত্রপরিচালক ছাত্রবিক্ষোভ ছাত্রবৃত্তি ছাত্রবৃন্দ ছাত্ররাজনীতি ছাত্রলীগ ছাত্রশালা ছাত্রশিক্ষক ছাত্রশিবির ছাত্রসংখ্যা ছাত্রসমাজ ছাত্রসম্প্রদায় ছাত্রহল ছাতলা ছাতলাযুক্ত ছাদ ছাঁদ ছাদক ছাঁদা ছাদিত ছাদযুক্ত ছাদন ছাঁদন ছাদনাতলা ছাঁদনাতলা ছাঁদনদড়ি ছাদসম্পন্ন ছান ছানা ছানাকাটা ছানাপানা ছানাপোনা ছানাবড়া ছানি ছানিত ছানছি ছানতা ছান্দ ছান্দোগ্য ছান্দস ছান্দসিক ছানলাতলা ছাপ ছাপওয়ালা ছাপুক ছাপা ছাপাইত ছাপাইতাম ছাপাইতিস ছাপাইতে ছাপাইতেছ ছাপাইতেছি ছাপাইতেছিল ছাপাইতেছিলাম ছাপাইতেছিলি ছাপাইতেছিলে ছাপাইতেছিলেন ছাপাইতেছিস ছাপাইতেছে ছাপাইতেছেন ছাপাইতেন ছাপাইনি ছাপাইব ছাপাইবার ছাপাইবি ছাপাইবে ছাপাইবেন ছাপাইল ছাপাইলাম ছাপাইলি ছাপাইলে ছাপাইলেন ছাপাইয়া ছাপাইয়াছ ছাপাইয়াছি ছাপাইয়াছিল ছাপাইয়াছিলাম ছাপাইয়াছিলি ছাপাইয়াছিলে ছাপাইয়াছিলেন ছাপাইয়াছিস ছাপাইয়াছে ছাপাইয়াছেন ছাপাইয়ো ছাপাক ছাপাখানা ছাপাচ্ছ ছাপাচ্ছি ছাপাচ্ছিল ছাপাচ্ছিলাম ছাপাচ্ছিলি ছাপাচ্ছিলে ছাপাচ্ছিলেন ছাপাচ্ছিলেম ছাপাচ্ছিলুম ছাপাচ্ছিস ছাপাচ্ছে ছাপাচ্ছেন ছাপাছাপি ছাপাত ছাপাতাম ছাপাতিস ছাপাতে ছাপাতেন ছাপাতেম ছাপাতুম ছাপান ছাপানো ছাপাব ছাপাবার ছাপাবি ছাপাবে ছাপাবেন ছাপাবো ছাপাল ছাপালাম ছাপালি ছাপালে ছাপালেন ছাপালেম ছাপালুম ছাপাস ছাপায়ল ছাপি ছাপিত ছাপিতাম ছাপিতিস ছাপিতে ছাপিতেছ ছাপিতেছি ছাপিতেছিল ছাপিতেছিলাম ছাপিতেছিলি ছাপিতেছিলে ছাপিতেছিলেন ছাপিতেছিস ছাপিতেছে ছাপিতেছেন ছাপিতেন ছাপিব ছাপিবার ছাপিবি ছাপিবে ছাপিবেন ছাপিল ছাপিলাম ছাপিলি ছাপিলে ছাপিলেন ছাপিস ছাপিয়া ছাপিয়াছ ছাপিয়াছি ছাপিয়াছিল ছাপিয়াছিলাম ছাপিয়াছিলি ছাপিয়াছিলে ছাপিয়াছিলেন ছাপিয়াছিস ছাপিয়াছে ছাপিয়াছেন ছাপিয়ে ছাপিয়েছ ছাপিয়েছি ছাপিয়েছিল ছাপিয়েছিলাম ছাপিয়েছিলি ছাপিয়েছিলে ছাপিয়েছিলেন ছাপিয়েছিলেম ছাপিয়েছিলুম ছাপিয়েছিস ছাপিয়েছে ছাপিয়েছেন ছাপিয়ো ছাপচিত্র ছাপে ছাপেন ছাপোষা ছাপছ ছাপছি ছাপছিল ছাপছিলাম ছাপছিলি ছাপছিলে ছাপছিলেন ছাপছিলেম ছাপছিলুম ছাপছিস ছাপছে ছাপছেন ছাপযুক্ত ছাপত ছাপতাম ছাপতিস ছাপতে ছাপতেন ছাপতেম ছাপতুম ছাপুন ছাপ্পান্ন ছাপ্পর ছাপ্পরবন্ধি ছাপ্পড় ছাপ্পড়বন্ধি ছাপব ছাপবার ছাপবি ছাপবে ছাপবেন ছাপবো ছাপর ছাপরখাট ছাপরা ছাপল ছাপলাম ছাপলি ছাপলে ছাপলেন ছাপলেম ছাপলুম ছাপশিল্পী ছাপড় ছাপড়বন্ধি ছাফামারওয়া ছাবাল ছাবি ছাবে ছাবেন ছাবো ছাব্বিশ ছাব্বিশজন ছাবলা ছামুম ছার ছারকপাল ছারকপালী ছারকপালে ছারখার ছারেখারে ছার্তক ছারপোকা ছাল ছালওয়া ছালা ছালামত ছালিক্য ছালেক ছালট ছালযুক্ত ছালটি ছালন ছালুন ছালবাকল ছাহ ছাহুক ছাহা ছাহাইত ছাহাইতাম ছাহাইতিস ছাহাইতে ছাহাইতেছ ছাহাইতেছি ছাহাইতেছিল ছাহাইতেছিলাম ছাহাইতেছিলি ছাহাইতেছিলে ছাহাইতেছিলেন ছাহাইতেছিস ছাহাইতেছে ছাহাইতেছেন ছাহাইতেন ছাহাইব ছাহাইবি ছাহাইবে ছাহাইবেন ছাহাইল ছাহাইলাম ছাহাইলি ছাহাইলে ছাহাইলেন ছাহাইয়াছ ছাহাইয়াছি ছাহাইয়াছিল ছাহাইয়াছিলাম ছাহাইয়াছিলি ছাহাইয়াছিলে ছাহাইয়াছিলেন ছাহাইয়াছিস ছাহাইয়াছে ছাহাইয়াছেন ছাহাইয়ো ছাহাক ছাহান ছাহাস ছাহি ছাহিত ছাহিতাম ছাহিতিস ছাহিতে ছাহিতেছ ছাহিতেছি ছাহিতেছিল ছাহিতেছিলাম ছাহিতেছিলি ছাহিতেছিলে ছাহিতেছিলেন ছাহিতেছিস ছাহিতেছে ছাহিতেছেন ছাহিতেন ছাহিব ছাহিবার ছাহিবি ছাহিবে ছাহিবেন ছাহিল ছাহিলাম ছাহিলি ছাহিলে ছাহিলেন ছাহিস ছাহিয়া ছাহিয়াছ ছাহিয়াছি ছাহিয়াছিল ছাহিয়াছিলাম ছাহিয়াছিলি ছাহিয়াছিলে ছাহিয়াছিলেন ছাহিয়াছিস ছাহিয়াছে ছাহিয়াছেন ছাহিয়ো ছাহে ছাহেন ছাহুন ছাড় ছাড়ুক ছাড়া ছাড়াইত ছাড়াইতাম ছাড়াইতিস ছাড়াইতে ছাড়াইতেছ ছাড়াইতেছি ছাড়াইতেছিল ছাড়াইতেছিলাম ছাড়াইতেছিলি ছাড়াইতেছিলে ছাড়াইতেছিলেন ছাড়াইতেছিস ছাড়াইতেছে ছাড়াইতেছেন ছাড়াইতেন ছাড়াইব ছাড়াইবার ছাড়াইবি ছাড়াইবে ছাড়াইবেন ছাড়াইল ছাড়াইলাম ছাড়াইলি ছাড়াইলে ছাড়াইলেন ছাড়াইয়া ছাড়াইয়াছ ছাড়াইয়াছি ছাড়াইয়াছিল ছাড়াইয়াছিলাম ছাড়াইয়াছিলি ছাড়াইয়াছিলে ছাড়াইয়াছিলেন ছাড়াইয়াছিস ছাড়াইয়াছে ছাড়াইয়াছেন ছাড়াইয়ো ছাড়াক ছাড়াচ্ছ ছাড়াচ্ছি ছাড়াচ্ছিল ছাড়াচ্ছিলাম ছাড়াচ্ছিলি ছাড়াচ্ছিলে ছাড়াচ্ছিলেন ছাড়াচ্ছিলেম ছাড়াচ্ছিলুম ছাড়াচ্ছিস ছাড়াচ্ছে ছাড়াচ্ছেন ছাড়াছাড়া ছাড়াছাড়ি ছাড়াত ছাড়াতাম ছাড়াতিস ছাড়াতে ছাড়াতেন ছাড়াতেম ছাড়াতুম ছাড়ান ছাড়ানো ছাড়াপাখি ছাড়াব ছাড়াবার ছাড়াবি ছাড়াবে ছাড়াবেন ছাড়াবো ছাড়াল ছাড়ালাম ছাড়ালি ছাড়ালে ছাড়ালেন ছাড়ালেম ছাড়ালুম ছাড়াস ছাড়ায়া ছাড়ি ছাড়িত ছাড়িতাম ছাড়িতিস ছাড়িতে ছাড়িতেছ ছাড়িতেছি ছাড়িতেছিল ছাড়িতেছিলাম ছাড়িতেছিলি ছাড়িতেছিলে ছাড়িতেছিলেন ছাড়িতেছিস ছাড়িতেছে ছাড়িতেছেন ছাড়িতেন ছাড়িব ছাড়িবার ছাড়িবি ছাড়িবে ছাড়িবেন ছাড়িল ছাড়িলাম ছাড়িলি ছাড়িলে ছাড়িলেন ছাড়িস ছাড়িয়া ছাড়িয়াছ ছাড়িয়াছি ছাড়িয়াছিল ছাড়িয়াছিলাম ছাড়িয়াছিলি ছাড়িয়াছিলে ছাড়িয়াছিলেন ছাড়িয়াছিস ছাড়িয়াছে ছাড়িয়াছেন ছাড়িয়ে ছাড়িয়েছ ছাড়িয়েছি ছাড়িয়েছিল ছাড়িয়েছিলাম ছাড়িয়েছিলি ছাড়িয়েছিলে ছাড়িয়েছিলেন ছাড়িয়েছিলেম ছাড়িয়েছিলুম ছাড়িয়েছিস ছাড়িয়েছে ছাড়িয়েছেন ছাড়িয়ো ছাড়েন ছাড়েননি ছাড়ো ছাড়ছ ছাড়ছি ছাড়ছিল ছাড়ছিলাম ছাড়ছিলি ছাড়ছিলে ছাড়ছিলেন ছাড়ছিলেম ছাড়ছিলুম ছাড়ছিস ছাড়ছে ছাড়ছেন ছাড়ছোড় ছাড়ত ছাড়তাম ছাড়তিস ছাড়তে ছাড়তেন ছাড়তেম ছাড়তুম ছাড়ন ছাড়ুন ছাড়পত্র ছাড়ব ছাড়বার ছাড়বি ছাড়বে ছাড়বেন ছাড়বো ছাড়বনা ছাড়ল ছাড়লাম ছাড়লি ছাড়লে ছাড়লেন ছাড়লেম ছাড়লুম ছায়া ছায়াকর ছায়াকরী ছায়াগ্নি ছায়াঘেরা ছায়াঘন ছায়াচিত্র ছায়াচ্ছন্ন ছায়াছবি ছায়াঢাকা ছায়াতরু ছায়াতল ছায়াদেহ ছায়ানট ছায়াপথ ছায়াপ্রধান ছায়াপুরুষ ছায়াবাজি ছায়াবীথি ছায়াবৃত ছায়ামণ্ডপ ছায়ামূর্তি ছায়াময় ছায়ারাগ ছায়ালহরী ছায়াশরীর ছায়াহীন ছায়াহীনতা ছায়েল ছি ছিঃ ছিঁইড়া ছিচকা ছিঁচকা ছিঁচকাঁদুনী ছিঁচকাঁদুনে ছিচকে ছিঁচকে ছিঁচকেচোর ছিঁচেপানি ছিছি ছিছিক্কার ছিছিছি ছিজ্জিন ছিট ছিটক ছিটকক ছিটকা ছিটকাইত ছিটকাইতাম ছিটকাইতিস ছিটকাইতে ছিটকাইতেছ ছিটকাইতেছি ছিটকাইতেছিল ছিটকাইতেছিলাম ছিটকাইতেছিলি ছিটকাইতেছিলে ছিটকাইতেছিস ছিটকাইতেছে ছিটকাইতেছেন ছিটকাইতেন ছিটকাইব ছিটকাইবার ছিটকাইবি ছিটকাইবে ছিটকাইবেন ছিটকাইল ছিটকাইলাম ছিটকাইলি ছিটকাইলে ছিটকাইলেন ছিটকাইয়া ছিটকাইয়াছ ছিটকাইয়াছি ছিটকাইয়াছিল ছিটকাইয়াছিলাম ছিটকাইয়াছিলি ছিটকাইয়াছিলে ছিটকাইয়াছিলেন ছিটকাইয়াছিস ছিটকাইয়াছে ছিটকাইয়াছেন ছিটকাইয়ো ছিটকাক ছিটকান ছিটকানি ছিটকানো ছিটকাপড় ছিটকাস ছিটকিনি ছিটকচ্ছ ছিটকচ্ছি ছিটকচ্ছিল ছিটকচ্ছিলাম ছিটকচ্ছিলি ছিটকচ্ছিলে ছিটকচ্ছিলেন ছিটকচ্ছিলেম ছিটকচ্ছিলুম ছিটকচ্ছিস ছিটকচ্ছে ছিটকচ্ছেন ছিটকে ছিটকেছ ছিটকেছি ছিটকেছিল ছিটকেছিলাম ছিটকেছিলি ছিটকেছিলে ছিটকেছিলেন ছিটকেছিলেম ছিটকেছিলুম ছিটকেছিস ছিটকেছে ছিটকেছেন ছিটকো ছিটকোবার ছিটকত ছিটকতাম ছিটকতিস ছিটকতে ছিটকতেন ছিটকতেম ছিটকতুম ছিটকন ছিটকব ছিটকবি ছিটকবে ছিটকবেন ছিটকবো ছিটকল ছিটকলাম ছিটকলি ছিটকলে ছিটকলেন ছিটকলেম ছিটকলুম ছিটকস ছিটগ্রস্ত ছিটা ছিটাইত ছিটাইতাম ছিটাইতিস ছিটাইতে ছিটাইতেছ ছিটাইতেছি ছিটাইতেছিল ছিটাইতেছিলাম ছিটাইতেছিলি ছিটাইতেছিলে ছিটাইতেছিলেন ছিটাইতেছিস ছিটাইতেছে ছিটাইতেছেন ছিটাইতেন ছিটাইব ছিটাইবা ছিটাইবার ছিটাইবি ছিটাইবে ছিটাইবেন ছিটাইল ছিটাইলাম ছিটাইলি ছিটাইলে ছিটাইলেন ছিটাইয়া ছিটাইয়াছ ছিটাইয়াছি ছিটাইয়াছিল ছিটাইয়াছিলাম ছিটাইয়াছিলি ছিটাইয়াছিলে ছিটাইয়াছিলেন ছিটাইয়াছিস ছিটাইয়াছে ছিটাইয়াছেন ছিটাইয়ো ছিটাক ছিটাছিটি ছিটান ছিটানো ছিটাপাড়া ছিটাফোঁটা ছিটাবার ছিটাবেড়া ছিটাস ছিটি ছিটিস ছিটিয়ে ছিটিয়েছ ছিটিয়েছি ছিটিয়েছিল ছিটিয়েছিলাম ছিটিয়েছিলি ছিটিয়েছিলে ছিটিয়েছিলেন ছিটিয়েছিলেম ছিটিয়েছিলুম ছিটিয়েছিস ছিটিয়েছে ছিটিয়েছেন ছিটিয়ো ছিটচ্ছ ছিটচ্ছি ছিটচ্ছিল ছিটচ্ছিলাম ছিটচ্ছিলি ছিটচ্ছিলে ছিটচ্ছিলেন ছিটচ্ছিলেম ছিটচ্ছিলুম ছিটচ্ছিস ছিটচ্ছে ছিটচ্ছেন ছিটে ছিটেছিটি ছিটেফোঁটা ছিটো ছিটছে ছিটজমি ছিটত ছিটতাম ছিটতিস ছিটতে ছিটতেন ছিটতেম ছিটতুম ছিটন ছিটুনি ছিঁটুনি ছিটনো ছিটব ছিটবার ছিটবি ছিটবে ছিটবেন ছিটবো ছিটমহল ছিটল ছিটলাম ছিটলি ছিটলে ছিটলেন ছিটলেম ছিটলুম ছিটস ছিণ্ড ছিণ্ডন ছিতম ছিতরা ছিতরানো ছিদ্যমান ছিদর ছিদ্র ছিদ্রাদি ছিদ্রান্বেষী ছিদ্রান্বেষণ ছিদ্রানুসন্ধান ছিদ্রানুসন্ধানী ছিদ্রিত ছিদ্রযুক্ত ছিদ্রদ্বয় ছিদ্রদর্শী ছিদ্রপথ ছিদ্রবহুল ছিদ্রহীন ছিন ছিনক ছিনা ছিনাইত ছিনাইতাম ছিনাইতিস ছিনাইতে ছিনাইতেছ ছিনাইতেছি ছিনাইতেছিল ছিনাইতেছিলাম ছিনাইতেছিলি ছিনাইতেছিলে ছিনাইতেছিলেন ছিনাইতেছিস ছিনাইতেছে ছিনাইতেছেন ছিনাইতেন ছিনাইব ছিনাইবার ছিনাইবি ছিনাইবে ছিনাইবেন ছিনাইল ছিনাইলাম ছিনাইলি ছিনাইলে ছিনাইলেন ছিনাইয়া ছিনাইয়াছ ছিনাইয়াছি ছিনাইয়াছিল ছিনাইয়াছিলাম ছিনাইয়াছিলি ছিনাইয়াছিলে ছিনাইয়াছিলেন ছিনাইয়াছিস ছিনাইয়াছে ছিনাইয়াছেন ছিনাইয়ো ছিনাক ছিনাজোঁক ছিনান ছিনানো ছিনারি ছিনারী ছিনাল ছিনালি ছিনালী ছিনাস ছিনি ছিনিমিনি ছিনিস ছিনিয়া ছিনিয়ে ছিনিয়েছ ছিনিয়েছি ছিনিয়েছিল ছিনিয়েছিলাম ছিনিয়েছিলি ছিনিয়েছিলে ছিনিয়েছিলেন ছিনিয়েছিলেম ছিনিয়েছিলুম ছিনিয়েছিস ছিনিয়েছে ছিনিয়েছেন ছিনিয়ো ছিনচ্ছ ছিনচ্ছি ছিনচ্ছিল ছিনচ্ছিলাম ছিনচ্ছিলি ছিনচ্ছিলে ছিনচ্ছিলেন ছিনচ্ছিলেম ছিনচ্ছিলুম ছিনচ্ছিস ছিনচ্ছে ছিনচ্ছেন ছিনে ছিনেজোঁক ছিনো ছিনত ছিনতাই ছিনতাইকারী ছিনতাইকৃত ছিনতাইবাজ ছিনতাম ছিনতিস ছিনতে ছিনতেন ছিনতেম ছিনতুম ছিনন ছিন্ন ছিন্নকারী ছিন্নকেশ ছিন্নকর্ণ ছিন্না ছিন্নায়িত ছিননো ছিন্নদ্বৈধ ছিন্নপক্ষ ছিন্নপত্র ছিন্নপ্রায় ছিন্নবিচ্ছিন্ন ছিন্নবস্ত্র ছিন্নভিন্ন ছিন্নমাথা ছিন্নমূল ছিন্নমস্তক ছিন্নমস্তা ছিন্নসংশয় ছিন্নহস্ত ছিনব ছিনবার ছিনবি ছিনবে ছিনবেন ছিনবো ছিনভিন ছিনল ছিনলাম ছিনলি ছিনলে ছিনলেন ছিনলেম ছিনলুম ছিনস ছিপ ছিপা ছিপান ছিপানো ছিপি ছিপী ছিপছিপ ছিপন ছিপনো ছিবলেমি ছিবড়া ছিবড়ে ছিম ছিমছাম ছিরি ছিরিছাঁদ ছিল ছিলকা ছিলকে ছিলা ছিলাযুক্ত ছিলাম ছিলি ছিলিম ছিলিমচি ছিলিমটেক ছিলে ছিলো ছিলেচড়ানো ছিলেন ছিলেননা ছিলেম ছিলোনা ছিলন ছিলনা ছিলনে ছিলম ছিলুম ছিলমচি ছিষ্টি ছিঁড় ছিঁড়ুক ছিঁড়া ছিঁড়াখোঁড়া ছিঁড়াছিঁড়ি ছিঁড়াজামা ছিঁড়ান ছিঁড়ানো ছিঁড়ি ছিঁড়িত ছিঁড়িতাম ছিঁড়িতিস ছিঁড়িতে ছিঁড়িতেছ ছিঁড়িতেছি ছিঁড়িতেছিল ছিঁড়িতেছিলাম ছিঁড়িতেছিলি ছিঁড়িতেছিলে ছিঁড়িতেছিলেন ছিঁড়িতেছিস ছিঁড়িতেছে ছিঁড়িতেছেন ছিঁড়িতেন ছিঁড়িব ছিঁড়িবার ছিঁড়িবি ছিঁড়িবে ছিঁড়িবেন ছিঁড়িল ছিঁড়িলাম ছিঁড়িলি ছিঁড়িলে ছিঁড়িলেন ছিঁড়িস ছিঁড়িয়া ছিঁড়িয়াছ ছিঁড়িয়াছি ছিঁড়িয়াছিল ছিঁড়িয়াছিলাম ছিঁড়িয়াছিলি ছিঁড়িয়াছিলে ছিঁড়িয়াছিলেন ছিঁড়িয়াছিস ছিঁড়িয়াছে ছিঁড়িয়াছেন ছিঁড়িয়ো ছিঁড়ে ছিঁড়েখুঁড়ে ছিঁড়েছ ছিঁড়েছি ছিঁড়েছিল ছিঁড়েছিলাম ছিঁড়েছিলি ছিঁড়েছিলে ছিঁড়েছিলেন ছিঁড়েছিলেম ছিঁড়েছিলুম ছিঁড়েছিস ছিঁড়েছে ছিঁড়েছেন ছিঁড়েন ছিঁড়ো ছিঁড়ছ ছিঁড়ছি ছিঁড়ছিল ছিঁড়ছিলাম ছিঁড়ছিলি ছিঁড়ছিলে ছিঁড়ছিলেন ছিঁড়ছিলেম ছিঁড়ছিলুম ছিঁড়ছিস ছিঁড়ছে ছিঁড়ছেন ছিঁড়ছস ছিঁড়ত ছিঁড়তাম ছিঁড়তিস ছিঁড়তে ছিঁড়তেন ছিঁড়তেম ছিঁড়তুম ছিঁড়ুন ছিঁড়ব ছিঁড়বি ছিঁড়বে ছিঁড়বেন ছিঁড়বো ছিঁড়ল ছিঁড়লাম ছিঁড়লি ছিঁড়লে ছিঁড়লেন ছিঁড়লেম ছিঁড়লুম ছিয়াত্তর ছিয়ানব্বই ছিয়ানব্বুই ছিয়াল ছিয়াশি ছিয়ে ছুঁচ ছুঁচা ছুঁচাবাজি ছুঁচাবাজী ছুঁচাল ছুঁচালো ছচি ছুঁচি ছুঁচিবাই ছচিমচি ছুঁচিয়ে ছুঁচিয়েছ ছুঁচিয়েছি ছুঁচিয়েছিল ছুঁচিয়েছিলাম ছুঁচিয়েছিলি ছুঁচিয়েছিলে ছুঁচিয়েছিলেন ছুঁচিয়েছিলেম ছুঁচিয়েছিলুম ছুঁচিয়েছিস ছুঁচিয়েছে ছুঁচিয়েছেন ছুঁচিয়ো ছুঁচো ছুঁচোবাজি ছুঁচোবাজী ছুঁচোরকেত্তন ছুঁচ্ছ ছুঁচ্ছি ছুঁচ্ছিল ছুঁচ্ছিলাম ছুঁচ্ছিলি ছুঁচ্ছিলে ছুঁচ্ছিলেন ছুঁচ্ছিলেম ছুঁচ্ছিলুম ছুঁচ্ছিস ছুঁচ্ছে ছুঁচ্ছেন ছুচন্দর ছুঁচল ছুঁচলো ছচল্লিশ ছুঁচসুতো ছীয়াল ছে ছেং ছেইছেই ছেউড়িয়া ছেও ছেক ছেঁক ছেঁকুক ছেঁকা ছেঁকি ছেঁকিত ছেঁকিতাম ছেঁকিতিস ছেঁকিতে ছেঁকিতেছ ছেঁকিতেছি ছেঁকিতেছিল ছেঁকিতেছিলাম ছেঁকিতেছিলি ছেঁকিতেছিলে ছেঁকিতেছিলেন ছেঁকিতেছিস ছেঁকিতেছে ছেঁকিতেছেন ছেঁকিতেন ছেঁকিব ছেঁকিবার ছেঁকিবি ছেঁকিবে ছেঁকিবেন ছেঁকিল ছেঁকিলাম ছেঁকিলি ছেঁকিলে ছেঁকিলেন ছেঁকিস ছেঁকিয়া ছেঁকিয়াছ ছেঁকিয়াছি ছেঁকিয়াছিল ছেঁকিয়াছিলাম ছেঁকিয়াছিলি ছেঁকিয়াছিলে ছেঁকিয়াছিলেন ছেঁকিয়াছিস ছেঁকিয়াছে ছেঁকিয়াছেন ছেঁকিয়ো ছেঁকে ছেঁকেছ ছেঁকেছি ছেঁকেছিল ছেঁকেছিলাম ছেঁকেছিলি ছেঁকেছিলে ছেঁকেছিলেন ছেঁকেছিলেম ছেঁকেছিলুম ছেঁকেছিস ছেঁকেছে ছেঁকেছেন ছেঁকেন ছেঁকো ছেঁকছ ছেঁকছি ছেঁকছিল ছেঁকছিলাম ছেঁকছিলি ছেঁকছিলে ছেঁকছিলেন ছেঁকছিলেম ছেঁকছিলুম ছেঁকছিস ছেঁকছে ছেঁকছেঁক ছেঁকছেন ছেঁকত ছেঁকতাম ছেঁকতিস ছেঁকতে ছেঁকতেন ছেঁকতেম ছেঁকতুম ছেঁকুন ছেঁকব ছেঁকবার ছেঁকবি ছেঁকবে ছেঁকবেন ছেঁকবো ছেঁকল ছেঁকলাম ছেঁকলি ছেঁকলে ছেঁকলেন ছেঁকলেম ছেঁকলুম ছেকড়া ছেঁচ ছেঁচুক ছেচকি ছেঁচকি ছেঁচা ছেঁচান ছেঁচানো ছেঁচার ছেঁচি ছেঁচিত ছেঁচিতাম ছেঁচিতিস ছেঁচিতে ছেঁচিতেছ ছেঁচিতেছি ছেঁচিতেছিল ছেঁচিতেছিলাম ছেঁচিতেছিলি ছেঁচিতেছিলে ছেঁচিতেছিলেন ছেঁচিতেছিস ছেঁচিতেছে ছেঁচিতেছেন ছেঁচিতেন ছেঁচিব ছেঁচিবার ছেঁচিবি ছেঁচিবে ছেঁচিবেন ছেঁচিল ছেঁচিলাম ছেঁচিলি ছেঁচিলে ছেঁচিলেন ছেঁচিস ছেঁচিয়া ছেঁচিয়াছ ছেঁচিয়াছি ছেঁচিয়াছিল ছেঁচিয়াছিলাম ছেঁচিয়াছিলি ছেঁচিয়াছিলে ছেঁচিয়াছিলেন ছেঁচিয়াছিস ছেঁচিয়াছে ছেঁচিয়াছেন ছেঁচিয়ো ছেঁচে ছেঁচেছ ছেঁচেছি ছেঁচেছিল ছেঁচেছিলাম ছেঁচেছিলি ছেঁচেছিলে ছেঁচেছিলেন ছেঁচেছিলেম ছেঁচেছিলুম ছেঁচেছিস ছেঁচেছে ছেঁচেছেন ছেঁচেন ছেঁচো ছেঁচোড় ছেঁচছ ছেঁচছি ছেঁচছিল ছেঁচছিলাম ছেঁচছিলি ছেঁচছিলে ছেঁচছিলেন ছেঁচছিলেম ছেঁচছিলুম ছেঁচছিস ছেঁচছে ছেঁচছেন ছেঁচত ছেঁচতাম ছেঁচতিস ছেঁচতে ছেঁচতেন ছেঁচতেম ছেঁচতুম ছেঁচতলা ছেঁচুন ছেঁচব ছেঁচবার ছেঁচবি ছেঁচবে ছেঁচবেন ছেঁচবো ছেঁচল ছেঁচলাম ছেঁচলি ছেঁচলে ছেঁচলেন ছেঁচলেম ছেঁচলুম ছেচল্লিশ ছেঁচড় ছেঁচড়া ছেঁচড়ান ছেঁচড়ানো ছেঁচড়ে ছেটা ছেটাক ছেটাচ্ছ ছেটাচ্ছি ছেটাচ্ছিল ছেটাচ্ছিলাম ছেটাচ্ছিলি ছেটাচ্ছিলে ছেটাচ্ছিলেন ছেটাচ্ছিলেম ছেটাচ্ছিলুম ছেটাচ্ছিস ছেটাচ্ছে ছেটাচ্ছেন ছেটাছিটি ছেটাত ছেটাতাম ছেটাতিস ছেটাতে ছেটাতেন ছেটাতেম ছেটাতুম ছেটান ছেটানো ছেটাব ছেটাবার ছেটাবি ছেটাবে ছেটাবেন ছেটাবো ছেটাল ছেটালাম ছেটালি ছেটালে ছেটালেন ছেটালেম ছেটালুম ছেটাস ছেঁটে ছেঁটেছ ছেঁটেছি ছেঁটেছিল ছেঁটেছিলাম ছেঁটেছিলি ছেঁটেছিলে ছেঁটেছিলেন ছেঁটেছিলেম ছেঁটেছিলুম ছেঁটেছিস ছেঁটেছে ছেঁটেছেন ছেঁটো ছেতো ছেত্তা ছেদ ছেঁদ ছেদক ছেঁদা ছেঁদাযুক্ত ছেদিত ছেদিয়া ছেঁদো ছেদ্য ছেদযুক্ত ছেদন ছেদনকারী ছেদনী ছেদনীয় ছেদনযোগ্য ছেদনযন্ত্র ছেদনসংস্কার ছেদবিন্দু ছেদরেখা ছেদহীন ছেদহীনভাবে ছেনাল ছেনালি ছেনি ছেনী ছেপ ছেপারা ছেপায়া ছেপে ছেপেছ ছেপেছি ছেপেছিল ছেপেছিলাম ছেপেছিলি ছেপেছিলে ছেপেছিলেন ছেপেছিলেম ছেপেছিলুম ছেপেছিস ছেপেছে ছেপেছেন ছেপো ছেপত ছেফলা ছেব ছেবল ছেবলা ছেবলাম ছেবলামি ছেবলামো ছেবড় ছেমোচাপা ছেমরি ছেমহলা ছেমড়া ছেমড়ি ছেরি ছেরেফ ছেলি ছেলিয়া ছেলী ছেলে ছেলেখেলা ছেলেছোকরা ছেলেছোকড়া ছেলেধরা ছেলেপিলে ছেলেপেলে ছেলেপুলে ছেলেবেলা ছেলেভোলানো ছেলেভুলানো ছেলেমানুষ ছেলেমানুষি ছেলেমি ছেলেমেয়ে ছেলেমো ছেলেসন্তান ছেলম ছেষট্টি ছেহের ছেহেরা ছেঁড় ছেড়া ছেঁড়া ছেঁড়াখোঁড়া ছেঁড়াছিঁড়ি ছেঁড়ান ছেঁড়ানো ছেড়ে ছেঁড়ে ছেড়েছ ছেড়েছি ছেড়েছিল ছেড়েছিলাম ছেড়েছিলি ছেড়েছিলে ছেড়েছিলেন ছেড়েছিলেম ছেড়েছিলুম ছেড়েছিস ছেড়েছে ছেড়েছেন ছেড়েছেড়ে ছেঁড়েন ছেড়ো ছেঁড়বার ছেয়া ছেয়ানি ছেয়াল ছেয়ে ছেয়েছ ছেয়েছি ছেয়েছিল ছেয়েছিলাম ছেয়েছিলি ছেয়েছিলে ছেয়েছিলেন ছেয়েছিলেম ছেয়েছিলুম ছেয়েছিস ছেয়েছে ছেয়েছেন ছেয়ো ছৈ ছৈওয়ালা ছৈল ছৈলা ছৈয়াল ছো ছোঁ ছোঁও ছোঁওয়া ছোঁকা ছোঁকছোঁক ছোকরা ছোকলা ছোঁচা ছোঁচাইত ছোঁচাইতাম ছোঁচাইতিস ছোঁচাইতে ছোঁচাইতেছ ছোঁচাইতেছি ছোঁচাইতেছিল ছোঁচাইতেছিলাম ছোঁচাইতেছিলি ছোঁচাইতেছিলে ছোঁচাইতেছিলেন ছোঁচাইতেছিস ছোঁচাইতেছে ছোঁচাইতেছেন ছোঁচাইতেন ছোঁচাইব ছোঁচাইবার ছোঁচাইবি ছোঁচাইবে ছোঁচাইবেন ছোঁচাইল ছোঁচাইলাম ছোঁচাইলি ছোঁচাইলে ছোঁচাইলেন ছোঁচাইয়া ছোঁচাইয়াছ ছোঁচাইয়াছি ছোঁচাইয়াছিল ছোঁচাইয়াছিলাম ছোঁচাইয়াছিলি ছোঁচাইয়াছিলে ছোঁচাইয়াছিলেন ছোঁচাইয়াছিস ছোঁচাইয়াছে ছোঁচাইয়াছেন ছোঁচাইয়ো ছোঁচাক ছোঁচাচ্ছ ছোঁচাচ্ছি ছোঁচাচ্ছিল ছোঁচাচ্ছিলাম ছোঁচাচ্ছিলি ছোঁচাচ্ছিলে ছোঁচাচ্ছিলেন ছোঁচাচ্ছিলেম ছোঁচাচ্ছিলুম ছোঁচাচ্ছিস ছোঁচাচ্ছে ছোঁচাচ্ছেন ছোঁচাত ছোঁচাতাম ছোঁচাতিস ছোঁচাতে ছোঁচাতেন ছোঁচাতেম ছোঁচাতুম ছোঁচান ছোঁচানো ছোঁচাব ছোঁচাবার ছোঁচাবি ছোঁচাবে ছোঁচাবেন ছোঁচাবো ছোঁচাল ছোঁচালাম ছোঁচালি ছোঁচালে ছোঁচালেন ছোঁচালেম ছোঁচালুম ছোঁচাস ছোট ছোটআকার ছোটআদালত ছোটকাটরা ছোটকাল ছোটখাটো ছোটগল্প ছোটগল্পকার ছোটা ছোটাক ছোটাচ্ছ ছোটাচ্ছি ছোটাচ্ছিল ছোটাচ্ছিলাম ছোটাচ্ছিলি ছোটাচ্ছিলে ছোটাচ্ছিলেন ছোটাচ্ছিলেম ছোটাচ্ছিলুম ছোটাচ্ছিস ছোটাচ্ছে ছোটাচ্ছেন ছোটাছুটি ছোটাত ছোটাতাম ছোটাতিস ছোটাতে ছোটাতেন ছোটাতেম ছোটাতুম ছোটান ছোটানো ছোটাব ছোটাবার ছোটাবি ছোটাবে ছোটাবেন ছোটাবো ছোটাল ছোটালাম ছোটালি ছোটালে ছোটালেন ছোটালেম ছোটালুম ছোটাস ছোটি ছোটিসি ছোটে ছোটেন ছোটো ছোটোখাটো ছোটোগল্প ছোটোবড়ো ছোটছোট ছোটজাত ছোটজন ছোট্ট ছোট্টখাট্টো ছোট্টছোট্ট ছোটদাদা ছোটদারোগা ছোটদিদি ছোটপর্দা ছোটবউ ছোটবাবু ছোটবার ছোটবেলা ছোটবোন ছোটবড় ছোটভাই ছোটমুখ ছোটমা ছোটমামা ছোটমোটো ছোটমন ছোটলাট ছোটলোক ছোটলোকামি ছোটলোকি ছোটহাজরি ছোন ছোপ ছোপা ছোপাইত ছোপাইতাম ছোপাইতিস ছোপাইতে ছোপাইতেছ ছোপাইতেছি ছোপাইতেছিল ছোপাইতেছিলাম ছোপাইতেছিলি ছোপাইতেছিলে ছোপাইতেছিলেন ছোপাইতেছিস ছোপাইতেছে ছোপাইতেছেন ছোপাইতেন ছোপাইব ছোপাইবার ছোপাইবি ছোপাইবে ছোপাইবেন ছোপাইল ছোপাইলাম ছোপাইলি ছোপাইলে ছোপাইলেন ছোপাইয়া ছোপাইয়াছ ছোপাইয়াছি ছোপাইয়াছিল ছোপাইয়াছিলাম ছোপাইয়াছিলি ছোপাইয়াছিলে ছোপাইয়াছিলেন ছোপাইয়াছিস ছোপাইয়াছে ছোপাইয়াছেন ছোপাইয়ো ছোপাক ছোপাচ্ছ ছোপাচ্ছি ছোপাচ্ছিল ছোপাচ্ছিলাম ছোপাচ্ছিলি ছোপাচ্ছিলে ছোপাচ্ছিলেন ছোপাচ্ছিলেম ছোপাচ্ছিলুম ছোপাচ্ছিস ছোপাচ্ছে ছোপাচ্ছেন ছোপাত ছোপাতাম ছোপাতিস ছোপাতে ছোপাতেন ছোপাতেম ছোপাতুম ছোপান ছোপানো ছোপাব ছোপাবার ছোপাবি ছোপাবে ছোপাবেন ছোপাবো ছোপাল ছোপালাম ছোপালি ছোপালে ছোপালেন ছোপালেম ছোপালুম ছোপাস ছোব ছোঁব ছোবা ছোবান ছোবানো ছোঁবে ছোঁবেন ছোঁবো ছোবল ছোবলা ছোবলাইত ছোবলাইতাম ছোবলাইতিস ছোবলাইতে ছোবলাইতেছ ছোবলাইতেছি ছোবলাইতেছিল ছোবলাইতেছিলাম ছোবলাইতেছিলি ছোবলাইতেছিলে ছোবলাইতেছিলেন ছোবলাইতেছিস ছোবলাইতেছে ছোবলাইতেছেন ছোবলাইতেন ছোবলাইব ছোবলাইবার ছোবলাইবি ছোবলাইবে ছোবলাইবেন ছোবলাইল ছোবলাইলাম ছোবলাইলি ছোবলাইলে ছোবলাইলেন ছোবলাইয়া ছোবলাইয়াছ ছোবলাইয়াছি ছোবলাইয়াছিল ছোবলাইয়াছিলাম ছোবলাইয়াছিলি ছোবলাইয়াছিলে ছোবলাইয়াছিলেন ছোবলাইয়াছিস ছোবলাইয়াছে ছোবলাইয়াছেন ছোবলাইয়ো ছোবলাক ছোবলাচ্ছ ছোবলাচ্ছি ছোবলাচ্ছিল ছোবলাচ্ছিলাম ছোবলাচ্ছিলি ছোবলাচ্ছিলে ছোবলাচ্ছিলেন ছোবলাচ্ছিলেম ছোবলাচ্ছিলুম ছোবলাচ্ছিস ছোবলাচ্ছে ছোবলাচ্ছেন ছোবলাত ছোবলাতাম ছোবলাতিস ছোবলাতে ছোবলাতেন ছোবলাতেম ছোবলাতুম ছোবলান ছোবলানো ছোবলাব ছোবলাবার ছোবলাবি ছোবলাবে ছোবলাবেন ছোবলাবো ছোবলাল ছোবলালাম ছোবলালি ছোবলালে ছোবলালেন ছোবলালেম ছোবলালুম ছোবলাস ছোবড়া ছোরা ছোরাখেলা ছোল ছোলঙ্গ ছোলা ছোলান ছোলানো ছোলেন ছোলতান ছোলদারি ছোলবার ছোহারা ছোড় ছোঁড় ছোড়ই ছোড়া ছোঁড়া ছোড়াছুড়ি ছোড়াছুঁড়ি ছোঁড়াছুড়ি ছোঁড়াছুঁড়ি ছোড়ান ছোঁড়ান ছোড়ানো ছোঁড়ানো ছোড়েন ছোঁড়েন ছোড়দা ছোড়দাদা ছোড়দি ছোড়দিদি ছোড়ন ছোড়ব ছোড়বার ছোঁড়বার ছোড়বি ছোড়ভঙ্গ ছোঁয় ছোঁয়া ছোঁয়াইত ছোঁয়াইতাম ছোঁয়াইতিস ছোঁয়াইতে ছোঁয়াইতেছ ছোঁয়াইতেছি ছোঁয়াইতেছিল ছোঁয়াইতেছিলাম ছোঁয়াইতেছিলি ছোঁয়াইতেছিলে ছোঁয়াইতেছিলেন ছোঁয়াইতেছিস ছোঁয়াইতেছে ছোঁয়াইতেছেন ছোঁয়াইতেন ছোঁয়াইব ছোঁয়াইবার ছোঁয়াইবি ছোঁয়াইবে ছোঁয়াইবেন ছোঁয়াইল ছোঁয়াইলাম ছোঁয়াইলি ছোঁয়াইলে ছোঁয়াইলেন ছোঁয়াইয়া ছোঁয়াইয়াছ ছোঁয়াইয়াছি ছোঁয়াইয়াছিল ছোঁয়াইয়াছিলাম ছোঁয়াইয়াছিলি ছোঁয়াইয়াছিলে ছোঁয়াইয়াছিলেন ছোঁয়াইয়াছিস ছোঁয়াইয়াছে ছোঁয়াইয়াছেন ছোঁয়াইয়ো ছোঁয়াক ছোঁয়াখাবার ছোঁয়াচ ছোঁয়াচে ছোঁয়াচ্ছ ছোঁয়াচ্ছি ছোঁয়াচ্ছিল ছোঁয়াচ্ছিলাম ছোঁয়াচ্ছিলি ছোঁয়াচ্ছিলে ছোঁয়াচ্ছিলেন ছোঁয়াচ্ছিলেম ছোঁয়াচ্ছিলুম ছোঁয়াচ্ছিস ছোঁয়াচ্ছে ছোঁয়াচ্ছেন ছোঁয়াছুঁয়ি ছোঁয়াত ছোঁয়াতাম ছোঁয়াতিস ছোঁয়াতে ছোঁয়াতেন ছোঁয়াতেম ছোঁয়াতুম ছোঁয়ান ছোঁয়ানো ছোঁয়াব ছোঁয়াবার ছোঁয়াবি ছোঁয়াবে ছোঁয়াবেন ছোঁয়াবো ছোঁয়াল ছোঁয়ালাম ছোঁয়ালি ছোঁয়ালে ছোঁয়ালেন ছোঁয়ালেপা ছোঁয়ালেম ছোঁয়ালুম ছোঁয়াস ছুছুন্দর ছুছুন্দরী ছজুদ ছজন ছট ছুট ছুটক ছুটুক ছটকা ছুটকা ছটকাইত ছটকাইতাম ছটকাইতিস ছটকাইতে ছটকাইতেছ ছটকাইতেছি ছটকাইতেছিল ছটকাইতেছিলাম ছটকাইতেছিলি ছটকাইতেছিলে ছটকাইতেছিলেন ছটকাইতেছিস ছটকাইতেছে ছটকাইতেছেন ছটকাইতেন ছটকাইব ছটকাইবার ছটকাইবি ছটকাইবে ছটকাইবেন ছটকাইল ছটকাইলাম ছটকাইলি ছটকাইলে ছটকাইলেন ছটকাইয়া ছটকাইয়াছ ছটকাইয়াছি ছটকাইয়াছিল ছটকাইয়াছিলাম ছটকাইয়াছিলি ছটকাইয়াছিলে ছটকাইয়াছিলেন ছটকাইয়াছিস ছটকাইয়াছে ছটকাইয়াছেন ছটকাইয়ো ছটকাক ছটকাচ্ছ ছটকাচ্ছি ছটকাচ্ছিল ছটকাচ্ছিলাম ছটকাচ্ছিলি ছটকাচ্ছিলে ছটকাচ্ছিলেন ছটকাচ্ছিলেম ছটকাচ্ছিলুম ছটকাচ্ছিস ছটকাচ্ছে ছটকাচ্ছেন ছুটকাছাটকা ছটকাত ছটকাতাম ছটকাতিস ছটকাতে ছটকাতেন ছটকাতেম ছটকাতুম ছটকান ছটকানো ছটকাব ছটকাবার ছটকাবি ছটকাবে ছটকাবেন ছটকাবো ছটকাল ছটকালাম ছটকালি ছটকালে ছটকালেন ছটকালেম ছটকালুম ছটকাস ছুটকি ছুটকী ছটকে ছটকেছ ছটকেছি ছটকেছিল ছটকেছিলাম ছটকেছিলি ছটকেছিলে ছটকেছিলেন ছটকেছিলেম ছটকেছিলুম ছটকেছিস ছটকেছেন ছটকো ছুটকো ছুটকোকাজ ছুটকোছাটকা ছটা ছুটা ছ্যা ছ্যাঃ ছুটাইত ছুটাইতাম ছুটাইতিস ছুটাইতে ছুটাইতেছ ছুটাইতেছি ছুটাইতেছিল ছুটাইতেছিলাম ছুটাইতেছিলি ছুটাইতেছিলে ছুটাইতেছিলেন ছুটাইতেছিস ছুটাইতেছে ছুটাইতেছেন ছুটাইতেন ছুটাইব ছুটাইবার ছুটাইবি ছুটাইবে ছুটাইবেন ছুটাইল ছুটাইলাম ছুটাইলি ছুটাইলে ছুটাইলেন ছুটাইয়া ছুটাইয়াছ ছুটাইয়াছি ছুটাইয়াছিল ছুটাইয়াছিলাম ছুটাইয়াছিলি ছুটাইয়াছিলে ছুটাইয়াছিলেন ছুটাইয়াছিস ছুটাইয়াছে ছুটাইয়াছেন ছুটাইয়ো ছটাক ছুটাক ছ্যাঁক ছটাকি ছ্যাঁকছ্যাঁক ছ্যাকরা ছ্যাকড়া ছ্যাকড়াগাড়ি ছ্যাঁচোর ছ্যাঁচোড় ছ্যাঁচড় ছ্যাঁচড়া ছ্যাঁচড়াপনা ছ্যাঁচড়ামি ছ্যাঁচড়ামো ছ্যাছ্যা ছুটাছুটি ছ্যাঁত ছ্যাতলা ছুটান ছুটানো ছ্যাপ ছ্যাবলা ছ্যাবলামি ছ্যাবলামো ছটামণ্ডল ছুটাস ছটি ছুটি ছুটিছাটা ছুটিছে ছুটিত ছুটিতাম ছুটিতিস ছুটিতে ছুটিতেছ ছুটিতেছি ছুটিতেছিল ছুটিতেছিলাম ছুটিতেছিলি ছুটিতেছিলে ছুটিতেছিলেন ছুটিতেছিস ছুটিতেছে ছুটিতেছেন ছুটিতেন ছুটিব ছুটিবার ছুটিবি ছুটিবে ছুটিবেন ছুটিরঘণ্টা ছুটিল ছুটিলাম ছুটিলি ছুটিলে ছুটিলেন ছুটিস ছুটিয়া ছুটিয়াছ ছুটিয়াছি ছুটিয়াছিল ছুটিয়াছিলাম ছুটিয়াছিলি ছুটিয়াছিলে ছুটিয়াছিলেন ছুটিয়াছিস ছুটিয়াছে ছুটিয়াছেন ছুটিয়ে ছুটিয়েছ ছুটিয়েছি ছুটিয়েছিল ছুটিয়েছিলাম ছুটিয়েছিলি ছুটিয়েছিলে ছুটিয়েছিলেন ছুটিয়েছিলেম ছুটিয়েছিলুম ছুটিয়েছিস ছুটিয়েছে ছুটিয়েছেন ছুটিয়ো ছুটচ্ছ ছুটচ্ছি ছুটচ্ছিল ছুটচ্ছিলাম ছুটচ্ছিলি ছুটচ্ছিলে ছুটচ্ছিলেন ছুটচ্ছিলেম ছুটচ্ছিলুম ছুটচ্ছিস ছুটচ্ছে ছুটচ্ছেন ছুটে ছুটেছ ছুটেছি ছুটেছিল ছুটেছিলাম ছুটেছিলি ছুটেছিলে ছুটেছিলেন ছুটেছিলেম ছুটেছিলুম ছুটেছিস ছুটেছে ছুটেছেন ছুটেন ছুটো ছুটোছুটি ছুটছ ছুটছি ছুটছিল ছুটছিলাম ছুটছিলি ছুটছিলে ছুটছিলেন ছুটছিলেম ছুটছিলুম ছুটছিস ছুটছে ছুটছেন ছুটত ছুটতাম ছুটতিস ছুটতে ছুটতেন ছুটতেম ছুটতুম ছুটন ছুটুন ছুটনো ছুটন্ত ছটফট ছটফটান ছটফটানি ছটফটানো ছুটব ছুটবার ছুটবি ছুটবে ছুটবেন ছুটবো ছুটল ছুটলাম ছুটলি ছুটলে ছুটলেন ছুটলেম ছুটলুম ছুটস ছুত ছুৎ ছুঁত ছুঁৎ ছুতা ছুতানাতা ছুঁতাম ছুতার ছুতারমিস্ত্রি ছুতারমিস্ত্রী ছতিছন্ন ছুঁতিস ছুঁতেন ছুঁতেম ছুতো ছুতোনাতা ছুতোর ছত্তিসগড় ছত্তর ছুতবাই ছুঁতবাই ছুঁৎবাই ছুঁতুম ছুতমার্গ ছুৎমার্গ ছুঁতমার্গ ছুঁৎমার্গ ছুতমার্গী ছুঁতমার্গী ছুঁৎমার্গী ছুতমার্গীয় ছুঁতমার্গীয় ছুঁৎমার্গীয় ছতর ছত্র ছত্রক ছত্রখান ছত্রাক ছত্রাকঘাতী ছত্রাকার ছত্রাকৃতি ছত্রাকবিজ্ঞান ছত্রাকবিদ ছত্রাকবিদ্যা ছতরি ছত্রি ছত্রিদণ্ড ছত্রিশ ছত্রিশজাত ছত্রী ছত্রীসেনা ছত্রীসৈন্য ছত্রেছত্রে ছুতরোগ ছুঁতরোগ ছুঁৎরোগ ছত্রছায়া ছত্রদণ্ড ছত্রধারী ছত্রধর ছত্রপতি ছত্রবাহক ছত্রভঙ্গ ছত্রশালা ছুঁৎলাগা ছদ ছদকা ছদি ছদিন ছদ্ম ছদমা ছদ্মনাম ছদ্মপ্রশ্ন ছদ্মবেশ ছদ্মবেশিনী ছদ্মবেশী ছদ্মবেশধারী ছদ্মরূপ ছন ছনছন ছন্দ ছন্দঃ ছন্দানুগামী ছন্দানুগমন ছন্দানুবৃত্তি ছন্দানুবর্তী ছন্দানুবর্তন ছন্দানুসারী ছন্দানুসরণ ছন্দিত ছন্দেবন্ধে ছন্দোবদ্ধ ছন্দজ্ঞানী ছন্দযুক্ত ছন্দপাত ছন্দপতন ছন্দপ্রকারণ ছন্দবিজ্ঞান ছন্দবদ্ধ ছন্দবন্ধ ছন্দময় ছন্দরীতি ছন্ন ছন্নছাড়া ছন্নতা ছন্নমতি ছনমন ছনমনা ছুপ ছুপা ছুপান ছুপানো ছুপি ছুপিয়ে ছুপিয়েছ ছুপিয়েছি ছুপিয়েছিল ছুপিয়েছিলাম ছুপিয়েছিলি ছুপিয়েছিলে ছুপিয়েছিলেন ছুপিয়েছিলেম ছুপিয়েছিলুম ছুপিয়েছিস ছুপিয়েছে ছুপিয়েছেন ছুপিয়ো ছপছপ ছুপছুপ ছপ্পর ছপ্পরবন্ধি ছপ্পড় ছপ্পড়বন্ধি ছফ ছফুট ছবক ছুবান ছুবানি ছুবানো ছবার ছবি ছবিওয়ালা ছবিতোলা ছবছর ছুবনানো ছবর ছুবল ছুবলক ছুবলা ছুবলাইত ছুবলাইতিস ছুবলাইতে ছুবলাইতেছ ছুবলাইতেছি ছুবলাইতেছিল ছুবলাইতেছিলাম ছুবলাইতেছিলি ছুবলাইতেছিলে ছুবলাইতেছিলেন ছুবলাইতেছিস ছুবলাইতেছে ছুবলাইতেন ছুবলাইব ছুবলাইবার ছুবলাইবি ছুবলাইবে ছুবলাইবেন ছুবলাইল ছুবলাইলাম ছুবলাইলি ছুবলাইলে ছুবলাইলেন ছুবলাইয়া ছুবলাইয়াছ ছুবলাইয়াছি ছুবলাইয়াছিল ছুবলাইয়াছিলাম ছুবলাইয়াছিলি ছুবলাইয়াছিলে ছুবলাইয়াছিলেন ছুবলাইয়াছিস ছুবলাইয়াছে ছুবলাইয়াছেন ছুবলাইয়ো ছুবলাক ছুবলান ছুবলানো ছুবলাস ছুবলি ছুবলিয়ে ছুবলিয়েছ ছুবলিয়েছি ছুবলিয়েছিল ছুবলিয়েছিলাম ছুবলিয়েছিলি ছুবলিয়েছিলে ছুবলিয়েছিলেন ছুবলিয়েছিলেম ছুবলিয়েছিলুম ছুবলিয়েছিস ছুবলিয়েছে ছুবলিয়েছেন ছুবলিয়ো ছুবলচ্ছ ছুবলচ্ছি ছুবলচ্ছিল ছুবলচ্ছিলাম ছুবলচ্ছিলি ছুবলচ্ছিলে ছুবলচ্ছিলেন ছুবলচ্ছিলেম ছুবলচ্ছিলুম ছুবলচ্ছিস ছুবলচ্ছে ছুবলচ্ছেন ছুবলে ছুবলেছ ছুবলেছি ছুবলেছিল ছুবলেছিলাম ছুবলেছিলি ছুবলেছিলে ছুবলেছিলেন ছুবলেছিলেম ছুবলেছিলুম ছুবলেছিস ছুবলেছে ছুবলেছেন ছুবলো ছুবলোবার ছুবলত ছুবলতাম ছুবলতিস ছুবলতে ছুবলতেন ছুবলতেম ছুবলতুম ছুবলন ছুবলনো ছুবলব ছুবলবি ছুবলবে ছুবলবেন ছুবলবো ছুবলল ছুবললাম ছুবললি ছুবললে ছুবললেন ছুবললেম ছুবললুম ছুবলস ছভাগ ছমছম ছুমন্তর ছরকোট ছরকট ছুরি ছুরিকা ছুরিকাঘাত ছুরিকাঁচি ছুরিকাঁটা ছুরিকাহত ছুরিত ছুরী ছুরত ছুরৎ ছর্দি ছররা ছল ছুল ছুঁল ছলকা ছলকাইত ছলকাইতাম ছলকাইতিস ছলকাইতে ছলকাইতেছ ছলকাইতেছি ছলকাইতেছিল ছলকাইতেছিলাম ছলকাইতেছিলি ছলকাইতেছিলে ছলকাইতেছিলেন ছলকাইতেছিস ছলকাইতেছে ছলকাইতেছেন ছলকাইতেন ছলকাইব ছলকাইবার ছলকাইবি ছলকাইবে ছলকাইবেন ছলকাইল ছলকাইলাম ছলকাইলি ছলকাইলে ছলকাইলেন ছলকাইয়া ছলকাইয়াছ ছলকাইয়াছি ছলকাইয়াছিল ছলকাইয়াছিলাম ছলকাইয়াছিলি ছলকাইয়াছিলে ছলকাইয়াছিলেন ছলকাইয়াছিস ছলকাইয়াছে ছলকাইয়াছেন ছলকাইয়ো ছলকাক ছলকাচ্ছ ছলকাচ্ছি ছলকাচ্ছিল ছলকাচ্ছিলাম ছলকাচ্ছিলি ছলকাচ্ছিলে ছলকাচ্ছিলেন ছলকাচ্ছিলেম ছলকাচ্ছিলুম ছলকাচ্ছিস ছলকাচ্ছে ছলকাচ্ছেন ছলকাত ছলকাতাম ছলকাতিস ছলকাতে ছলকাতেন ছলকাতেম ছলকাতুম ছলকান ছলকানি ছলকানো ছলকাব ছলকাবার ছলকাবি ছলকাবে ছলকাবেন ছলকাবো ছলকারী ছলকাল ছলকালাম ছলকালি ছলকালে ছলকালেন ছলকালেম ছলকালুম ছলকাস ছলকে ছলকেছ ছলকেছি ছলকেছিল ছলকেছিলাম ছলকেছিলি ছলকেছিলে ছলকেছিলেন ছলকেছিলেম ছলকেছিলুম ছলকেছিস ছলকেছে ছলকেছেন ছলকো ছলকপট ছলগ্রাহী ছলা ছুলা ছলাকলা ছলাৎছলাৎ ছুলান ছুলানো ছুঁলাম ছুলি ছুঁলি ছলিত ছুলিত ছুলিতাম ছুলিতিস ছুলিতে ছুলিতেছ ছুলিতেছি ছুলিতেছিল ছুলিতেছিলাম ছুলিতেছিলি ছুলিতেছিলে ছুলিতেছিলেন ছুলিতেছিস ছুলিতেছে ছুলিতেছেন ছুলিতেন ছুলিব ছুলিবার ছুলিবি ছুলিবে ছুলিবেন ছুলিল ছুলিলাম ছুলিলি ছুলিলে ছুলিলেন ছুলিস ছলিয়া ছুলিয়া ছুলিয়াছ ছুলিয়াছি ছুলিয়াছিল ছুলিয়াছিলাম ছুলিয়াছিলি ছুলিয়াছিলে ছুলিয়াছিলেন ছুলিয়াছিস ছুলিয়াছে ছুলিয়াছেন ছুলিয়ো ছলচাতুরী ছলচ্ছল ছুলেছ ছুলেছি ছুলেছিল ছুলেছিলাম ছুলেছিলি ছুলেছিলে ছুলেছিলেন ছুলেছিলেম ছুলেছিলুম ছুলেছিস ছুলেছে ছুলেছেন ছুলেন ছুঁলেন ছলেবলে ছুঁলেম ছুলো ছুলছ ছুলছি ছুলছিল ছুলছিলাম ছুলছিলি ছুলছিলে ছুলছিলেন ছুলছিলেম ছুলছিলুম ছুলছিস ছুলছে ছুলছেন ছলছুতা ছলছুতো ছলছল ছলছলানি ছুলত ছুলতাম ছুলতিস ছুলতে ছুলতেন ছুলতেম ছুলতুম ছলন ছুলুন ছলনা ছলনাকারী ছলনাযুক্ত ছলনাপূর্ণ ছলনাপূর্বক ছলনাময় ছলনাময়ী ছলনাশূন্য ছলনাহীন ছলপাতা ছলপূর্ণ ছুলব ছুলবি ছুলবে ছুলবেন ছুলবো ছলবলানো ছলম ছুঁলুম ছুলল ছুললাম ছুললি ছুললে ছুললেন ছুললেম ছুললুম ছষট্টি ছুঁস ছসাত ছহি ছড় ছুড় ছুঁড় ছড়ুক ছুড়ুক ছুঁড়ুক ছড়া ছুড়া ছুঁড়া ছড়াইত ছড়াইতাম ছড়াইতিস ছড়াইতে ছড়াইতেছ ছড়াইতেছি ছড়াইতেছিল ছড়াইতেছিলাম ছড়াইতেছিলি ছড়াইতেছিলে ছড়াইতেছিলেন ছড়াইতেছিস ছড়াইতেছে ছড়াইতেছেন ছড়াইতেন ছড়াইব ছড়াইবার ছড়াইবি ছড়াইবে ছড়াইবেন ছড়াইল ছড়াইলাম ছড়াইলি ছড়াইলে ছড়াইলেন ছড়াইয়া ছড়াইয়াছ ছড়াইয়াছি ছড়াইয়াছিল ছড়াইয়াছিলাম ছড়াইয়াছিলি ছড়াইয়াছিলে ছড়াইয়াছিলেন ছড়াইয়াছিস ছড়াইয়াছে ছড়াইয়াছেন ছড়াইয়ো ছড়াক ছড়াকাটা ছড়াকার ছড়াগান ছড়াগ্রন্থ ছড়াচ্ছ ছড়াচ্ছি ছড়াচ্ছিল ছড়াচ্ছিলাম ছড়াচ্ছিলি ছড়াচ্ছিলে ছড়াচ্ছিলেন ছড়াচ্ছিলেম ছড়াচ্ছিলুম ছড়াচ্ছিস ছড়াচ্ছে ছড়াচ্ছেন ছড়াছড়ি ছুড়াছুড়ি ছুড়াছুঁড়ি ছুঁড়াছুঁড়ি ছড়াত ছড়াতাম ছড়াতিস ছড়াতে ছড়াতেন ছড়াতেম ছড়াতুম ছড়ান ছুড়ান ছুঁড়ান ছড়ানো ছুড়ানো ছুঁড়ানো ছড়াব ছড়াবার ছড়াবি ছড়াবে ছড়াবেন ছড়াবো ছড়াল ছড়ালাম ছড়ালি ছড়ালে ছড়ালেন ছড়ালেম ছড়ালুম ছড়াস ছড়ায়না ছড়ি ছুড়ি ছুঁড়ি ছড়িত ছুড়িত ছুঁড়িত ছড়িতাম ছুড়িতাম ছুঁড়িতাম ছড়িতিস ছুড়িতিস ছুঁড়িতিস ছড়িতে ছুড়িতে ছুঁড়িতে ছড়িতেছ ছুড়িতেছ ছুঁড়িতেছ ছড়িতেছি ছুড়িতেছি ছুঁড়িতেছি ছড়িতেছিল ছুড়িতেছিল ছুঁড়িতেছিল ছড়িতেছিলাম ছুড়িতেছিলাম ছুঁড়িতেছিলাম ছড়িতেছিলি ছুড়িতেছিলি ছুঁড়িতেছিলি ছড়িতেছিলে ছুড়িতেছিলে ছুঁড়িতেছিলে ছড়িতেছিলেন ছুড়িতেছিলেন ছুঁড়িতেছিলেন ছড়িতেছিস ছুড়িতেছিস ছুঁড়িতেছিস ছড়িতেছে ছুড়িতেছে ছুঁড়িতেছে ছড়িতেছেন ছুড়িতেছেন ছুঁড়িতেছেন ছড়িতেন ছুড়িতেন ছুঁড়িতেন ছড়িদার ছড়িধারী ছড়িব ছুড়িব ছুঁড়িব ছড়িবার ছুড়িবার ছুঁড়িবার ছড়িবি ছুড়িবি ছুঁড়িবি ছড়িবে ছুড়িবে ছুঁড়িবে ছড়িবেন ছুড়িবেন ছুঁড়িবেন ছড়িভঙ্গ ছড়িল ছুড়িল ছুঁড়িল ছড়িলাম ছুড়িলাম ছুঁড়িলাম ছড়িলি ছুড়িলি ছুঁড়িলি ছড়িলে ছুড়িলে ছুঁড়িলে ছড়িলেন ছুড়িলেন ছুঁড়িলেন ছড়িস ছুড়িস ছুঁড়িস ছড়িয়া ছুড়িয়া ছুঁড়িয়া ছড়িয়াছ ছুড়িয়াছ ছুঁড়িয়াছ ছড়িয়াছি ছুড়িয়াছি ছুঁড়িয়াছি ছড়িয়াছিল ছুড়িয়াছিল ছুঁড়িয়াছিল ছড়িয়াছিলাম ছুড়িয়াছিলাম ছুঁড়িয়াছিলাম ছড়িয়াছিলি ছুড়িয়াছিলি ছুঁড়িয়াছিলি ছড়িয়াছিলে ছুড়িয়াছিলে ছুঁড়িয়াছিলে ছড়িয়াছিলেন ছুড়িয়াছিলেন ছুঁড়িয়াছিলেন ছড়িয়াছিস ছুড়িয়াছিস ছুঁড়িয়াছিস ছড়িয়াছে ছুড়িয়াছে ছুঁড়িয়াছে ছড়িয়াছেন ছুড়িয়াছেন ছুঁড়িয়াছেন ছড়িয়ে ছড়িয়েছ ছড়িয়েছি ছড়িয়েছিল ছড়িয়েছিলাম ছড়িয়েছিলি ছড়িয়েছিলে ছড়িয়েছিলেন ছড়িয়েছিলেম ছড়িয়েছিলুম ছড়িয়েছিস ছড়িয়েছে ছড়িয়েছেন ছড়িয়ো ছুড়িয়ো ছুঁড়িয়ো ছড়ী ছুঁড়ী ছড়ীদার ছড়ীভঙ্গ ছড়েছ ছুড়েছ ছুঁড়েছ ছড়েছি ছুড়েছি ছুঁড়েছি ছড়েছিল ছুড়েছিল ছুঁড়েছিল ছড়েছিলাম ছুড়েছিলাম ছুঁড়েছিলাম ছড়েছিলি ছুড়েছিলি ছুঁড়েছিলি ছড়েছিলে ছুড়েছিলে ছুঁড়েছিলে ছড়েছিলেন ছুড়েছিলেন ছুঁড়েছিলেন ছড়েছিলেম ছুড়েছিলেম ছুঁড়েছিলেম ছড়েছিলুম ছুড়েছিলুম ছুঁড়েছিলুম ছড়েছিস ছুড়েছিস ছুঁড়েছিস ছড়েছে ছুড়েছে ছুঁড়েছে ছড়েছেন ছুড়েছেন ছুঁড়েছেন ছড়েন ছুড়েন ছুঁড়েন ছড়ো ছুড়ো ছুঁড়ো ছড়ছ ছুড়ছ ছুঁড়ছ ছড়ছি ছুড়ছি ছুঁড়ছি ছড়ছিল ছুড়ছিল ছুঁড়ছিল ছড়ছিলাম ছুড়ছিলাম ছুঁড়ছিলাম ছড়ছিলি ছুড়ছিলি ছুঁড়ছিলি ছড়ছিলে ছুড়ছিলে ছুঁড়ছিলে ছড়ছিলেন ছুড়ছিলেন ছুঁড়ছিলেন ছড়ছিলেম ছুড়ছিলেম ছুঁড়ছিলেম ছড়ছিলুম ছুড়ছিলুম ছুঁড়ছিলুম ছড়ছিস ছুড়ছিস ছুঁড়ছিস ছড়ছে ছুড়ছে ছুঁড়ছে ছড়ছেন ছুড়ছেন ছুঁড়ছেন ছড়ত ছুড়ত ছুঁড়ত ছড়তাম ছুড়তাম ছুঁড়তাম ছড়তিস ছুড়তিস ছুঁড়তিস ছড়তে ছুড়তে ছুঁড়তে ছড়তেন ছুড়তেন ছুঁড়তেন ছড়তেম ছুড়তেম ছুঁড়তেম ছড়তুম ছুড়তুম ছুঁড়তুম ছড়ুন ছুড়ুন ছুঁড়ুন ছড়ব ছুড়ব ছুঁড়ব ছড়বার ছুড়বার ছড়বি ছুড়বি ছুঁড়বি ছড়বে ছুড়বে ছুঁড়বে ছড়বেন ছুড়বেন ছুঁড়বেন ছড়বো ছুড়বো ছুঁড়বো ছড়ল ছুড়ল ছুঁড়ল ছড়লাম ছুড়লাম ছুঁড়লাম ছড়লি ছুড়লি ছুঁড়লি ছড়লে ছুড়লে ছুঁড়লে ছড়লেন ছুড়লেন ছুঁড়লেন ছড়লেম ছুড়লেম ছুঁড়লেম ছড়লুম ছুড়লুম ছুঁড়লুম ছয় ছুঁয়া ছুঁয়াখাবার ছুঁয়াচ ছুঁয়াচে ছুঁয়াছুঁয়ি ছুঁয়ান ছুয়ানি ছুঁয়ানো ছয়চরণ ছুঁয়ে ছয়েক ছুঁয়েছ ছুঁয়েছি ছুঁয়েছিল ছুঁয়েছিলাম ছুঁয়েছিলি ছুঁয়েছিলে ছুঁয়েছিলেন ছুঁয়েছিলেম ছুঁয়েছিলুম ছুঁয়েছিস ছুঁয়েছে ছুঁয়েছেন ছুঁয়ো ছয়জন ছয়দিন ছয়দফা ছয়প্রকার ছয়বার ছয়ভাগ ছয়মাত্রা ছয়মাস ছয়রকম ছয়লাপ ছয়শ ছয়শতাধিক".split(" "),
              w_d: "দ দু দংগল দংশ দংশক দংশা দংশাই দংশাইও দংশাইত দংশাইতাম দংশাইতিস দংশাইতে দংশাইতেছ দংশাইতেছি দংশাইতেছিল দংশাইতেছিলাম দংশাইতেছিলি দংশাইতেছিলে দংশাইতেছিলেন দংশাইতেছিস দংশাইতেছে দংশাইতেছেন দংশাইতেন দংশাইব দংশাইবার দংশাইবি দংশাইবে দংশাইবেন দংশাইল দংশাইলাম দংশাইলি দংশাইলে দংশাইলেন দংশাইয়া দংশাইয়াছ দংশাইয়াছি দংশাইয়াছিল দংশাইয়াছিলাম দংশাইয়াছিলি দংশাইয়াছিলে দংশাইয়াছিলেন দংশাইয়াছিস দংশাইয়াছে দংশাইয়াছেন দংশাইয়ো দংশাক দংশাচ্ছ দংশাচ্ছি দংশাচ্ছিল দংশাচ্ছিলাম দংশাচ্ছিলি দংশাচ্ছিলে দংশাচ্ছিলেন দংশাচ্ছিলেম দংশাচ্ছিলুম দংশাচ্ছিস দংশাচ্ছে দংশাচ্ছেন দংশাত দংশাতাম দংশাতিস দংশাতে দংশাতেন দংশাতেম দংশাতুম দংশান দংশানো দংশাব দংশাবার দংশাবি দংশাবে দংশাবেন দংশাবো দংশাল দংশালাম দংশালি দংশালে দংশালেন দংশালেম দংশালুম দংশাস দংশিত দংশিল দংশী দংশে দংশেছ দংশেছি দংশেছিল দংশেছিলাম দংশেছিলি দংশেছিলে দংশেছিলেন দংশেছিলেম দংশেছিলুম দংশেছিস দংশেছে দংশেছেন দংশো দংশন দংশনকারী দংশমক্ষিকা দংশল দংষ্ট্র দংষ্ট্রা দংষ্ট্রাল দংষ্ট্রী দঃ দুঃখ দুঃখকর দুঃখক্লিষ্ট দুঃখকষ্ট দুঃখান্ত দুঃখাবহ দুঃখার্ত দুঃখাহত দুঃখিত দুঃখিতা দুঃখিনী দুঃখী দুঃখচাপা দুঃখজনক দুঃখজনিত দুঃখযুক্ত দুঃখদ দুঃখদায়ক দুঃখদায়িনী দুঃখদায়ী দুঃখদৈন্য দুঃখদূরকারী দুঃখধান্ধা দুঃখনাশক দুঃখনাশী দুঃখনিবারণ দুঃখনিবেদন দুঃখনিবন্ধন দুঃখপীড়িত দুঃখপ্রকাশ দুঃখপ্রাপ্ত দুঃখপূর্ণ দুঃখপ্রদ দুঃখপ্রশমন দুঃখবাদ দুঃখবাদী দুঃখবিলাস দুঃখবোধ দুঃখবহন দুঃখভোগ দুঃখভোগকারী দুঃখমোচন দুঃখময় দুঃখসুখ দুঃখস্বীকার দুঃখহারিণী দুঃখহারী দুঃখহীন দুঃখহর দুঃখহরা দুঃখহরণ দুঃশাসন দুঃশীল দুঃশীলা দুঃশ্রব দুঃসংবাদ দুঃসাধ্য দুঃসাহস দুঃসাহসিক দুঃসাহসিকতা দুঃসাহসী দুঃসাহসসম্পন্ন দুঃস্থ দুঃস্থিত দুঃস্থিতি দুঃস্থতা দুঃস্পর্শ দুঃস্বপ্ন দুঃস্মৃতি দুঃসম্পর্ক দুঃসম্পর্কিত দুঃসময় দুঃসহ দুঅজ দুআঙুল দুআধারী দুআনা দুআনি দুআব দুআভুআ দই দুই দুইই দুইএক দুইএকটা দইওয়ালা দুইকক্ষ দুইক্ষেত্র দুইখান দুইগুণ দুইচির দইছাতু দুইজোড়া দুইজন দইজমা দুইত দুইতাম দুইতিস দুইতে দুইতেছ দুইতেছি দুইতেছিল দুইতেছিলাম দুইতেছিলি দুইতেছিলে দুইতেছিলেন দুইতেছিস দুইতেছে দুইতেছেন দুইতেন দুইতেম দুইতুম দুইতলা দুইদিক দুইদিন দুইদিনব্যাপী দুইদল দইপাতা দুইপাশ দুইপ্রকার দুইপ্রান্ত দুইব দুইবার দুইবি দুইবে দুইবেন দুইবেলা দুইবছর দইবড়া দুইভাগ দুইভাবে দইমাখা দইমাছ দুইমাস দুইরকম দুইল দুইলাম দুইলি দুইলে দুইলেন দুইলেম দুইলুম দুইশ দুইশত দুইসারি দুইহাতে দুইয়া দুইয়াছ দুইয়াছি দুইয়াছিল দুইয়াছিলাম দুইয়াছিলি দুইয়াছিলে দুইয়াছিলেন দুইয়াছিস দুইয়াছে দুইয়াছেন দইয়ে দুইয়ে দুইয়েছ দুইয়েছি দুইয়েছিল দুইয়েছিলাম দুইয়েছিলি দুইয়েছিলে দুইয়েছিলেন দুইয়েছিলেম দুইয়েছিলুম দুইয়েছিস দুইয়েছে দুইয়েছেন দুইয়ের দুইয়ো দইয়ম দউ দুএক দুএকবার দও দুও দওর দওরা দওলত দক দুক দঁক দৃক দুকাঠি দুকান দকেপড়া দঁকেপড়া দক্তি দক্তী দুকথা দৃকপাত দুকুরে দুকূল দুকলম দৃকশক্তি দক্ষ দুক্ষু দক্ষকন্যা দক্ষা দক্ষিণ দক্ষিণআফ্রিকা দক্ষিণকেন্দ্র দক্ষিণকোরিয়া দক্ষিণা দক্ষিণাংশ দক্ষিণাচার দক্ষিণাচারী দক্ষিণাচল দক্ষিণাঞ্চল দক্ষিণাঞ্চলীয় দক্ষিণাদান দক্ষিণান্ত দক্ষিণাপথ দক্ষিণাপ্রবণ দক্ষিণাবর্ত দক্ষিণাবহ দক্ষিণামুখ দক্ষিণামুখী দক্ষিণাস্য দক্ষিণাস্যা দক্ষিণায়ন দক্ষিণায়নান্ত দক্ষিণায়নান্তবৃত্ত দক্ষিণে দক্ষিণেশ্বর দক্ষিণতা দক্ষিণতম দক্ষিণদিক দক্ষিণদিকস্থ দক্ষিণদেশ দক্ষিণদেশীয় দক্ষিণদল দক্ষিণপদ দক্ষিণপবন দক্ষিণপরগণা দক্ষিণপ্রান্ত দক্ষিণপূর্ব দক্ষিণপশ্চিম দক্ষিণবঙ্গ দক্ষিণবায় দক্ষিণবায়ু দক্ষিণভাগ দক্ষিণভারত দক্ষিণভারতীয় দক্ষিণমেরু দক্ষিণস্থ দক্ষিণসমুদ্র দক্ষিণহস্ত দক্ষজা দক্ষযজ্ঞ দক্ষতা দক্ষতাসম্পন্ন দক্ষতাসম্পন্না দক্ষবালা দক্ষভাবে দুখ দুখু দুখান দুখানা দুখানি দখিণা দখিন দখিনা দুখিনী দুখী দুখজ্বালা দুখণ্ড দখন দুখভার দখল দখলকার দখলকারী দখলকৃত দখলি দখলিকার দখলিত দখলিদার দখলিস্বত্ব দখলী দখলীকৃত দখলদার দখলদারি দখলদারিত্ব দখলনামা দখলপ্রাপ্ত দখলবিষয়ক দখলমুক্ত দুগাল দুগুণ দগদগ দগদগানি দগদগি দগ্ধ দুগ্ধ দগ্ধঅঙ্গার দগধই দগ্ধকাষ্ঠ দুগ্ধগ্রন্থি দগ্ধা দগ্ধাই দগ্ধাইও দগ্ধাইত দগ্ধাইতাম দগ্ধাইতিস দগ্ধাইতে দগ্ধাইতেছ দগ্ধাইতেছি দগ্ধাইতেছিল দগ্ধাইতেছিলাম দগ্ধাইতেছিলি দগ্ধাইতেছিলে দগ্ধাইতেছিলেন দগ্ধাইতেছিস দগ্ধাইতেছে দগ্ধাইতেছেন দগ্ধাইতেন দগ্ধাইব দগ্ধাইবার দগ্ধাইবি দগ্ধাইবে দগ্ধাইবেন দগ্ধাইল দগ্ধাইলাম দগ্ধাইলি দগ্ধাইলে দগ্ধাইলেন দগ্ধাইয়া দগ্ধাইয়াছ দগ্ধাইয়াছি দগ্ধাইয়াছিল দগ্ধাইয়াছিলাম দগ্ধাইয়াছিলি দগ্ধাইয়াছিলে দগ্ধাইয়াছিলেন দগ্ধাইয়াছিস দগ্ধাইয়াছে দগ্ধাইয়াছেন দগ্ধাইয়ো দগ্ধাক দগ্ধাচ্ছ দগ্ধাচ্ছি দগ্ধাচ্ছিল দগ্ধাচ্ছিলাম দগ্ধাচ্ছিলি দগ্ধাচ্ছিলে দগ্ধাচ্ছিলেন দগ্ধাচ্ছিলেম দগ্ধাচ্ছিলুম দগ্ধাচ্ছিস দগ্ধাচ্ছে দগ্ধাচ্ছেন দগ্ধাত দগ্ধাতাম দগ্ধাতিস দগ্ধাতে দগ্ধাতেন দগ্ধাতেম দগ্ধাতুম দুগ্ধাদির দগ্ধান দগ্ধানো দগ্ধাব দগ্ধাবার দগ্ধাবি দগ্ধাবে দগ্ধাবেন দগ্ধাবো দগ্ধাল দগ্ধালাম দগ্ধালি দগ্ধালে দগ্ধালেন দগ্ধালেম দগ্ধালুম দগ্ধাস দগ্ধি দগ্ধিত দগ্ধিতাম দগ্ধিতিস দগ্ধিতে দগ্ধিতেছ দগ্ধিতেছি দগ্ধিতেছিল দগ্ধিতেছিলাম দগ্ধিতেছিলি দগ্ধিতেছিলে দগ্ধিতেছিলেন দগ্ধিতেছিস দগ্ধিতেছে দগ্ধিতেছেন দগ্ধিতেন দগধিনী দগ্ধিব দগ্ধিবার দগ্ধিবি দগ্ধিবে দগ্ধিবেন দগ্ধিল দগ্ধিলাম দগ্ধিলি দগধিলে দগ্ধিলে দগ্ধিলেন দগ্ধিস দগ্ধিয়া দগ্ধিয়াছ দগ্ধিয়াছি দগ্ধিয়াছিল দগ্ধিয়াছিলাম দগ্ধিয়াছিলি দগ্ধিয়াছিলে দগ্ধিয়াছিলেন দগ্ধিয়াছিস দগ্ধিয়াছে দগ্ধিয়াছেন দগ্ধিয়ে দগ্ধিয়ো দগ্ধীকৃত দগ্ধচক্ষু দগ্ধীভূত দগধে দগ্ধে দগ্ধেছ দগ্ধেছি দগ্ধেছিল দগ্ধেছিলাম দগ্ধেছিলি দগ্ধেছিলে দগ্ধেছিলেন দগ্ধেছিলেম দগ্ধেছিলুম দগ্ধেছিস দগ্ধেছে দগ্ধেছেন দগ্ধেন দগ্ধো দগ্ধোদর দুগ্ধজাত দুগ্ধদোহন দুগ্ধদোহনকারী দুগ্ধদোহনপাত্র দুগ্ধধবল দুগ্ধনিভ দুগ্ধপক্ব দুগ্ধপায়ী দুগ্ধপোষ্য দুগ্ধপ্রকল্প দগ্ধপ্রাণ দগ্ধপ্রায় দুগ্ধফেননিভ দুগ্ধবতী দগ্ধভাগ্য দুগ্ধমুখ দগ্ধমাংস দগ্ধলৌহ দগ্ধহস্ত দগর দগড় দগড়া দুঘণ্টা দুঘড়ি দঙ্গল দা দাঁ দাংগা দাই দাইন দাইমা দাইল দাইড়া দাউদ দাউদকান্দি দাউদাউ দাউলি দাও দাঁও দাওত দাওন দাওনগির দাওনগীর দাওনা দাঁওপেচ দাঁওপ্যাঁচ দাওলি দাওয়া দাওয়াই দাওয়াইখানা দাওয়াখানা দাওয়াত দাওয়াতি দাওয়াদার দাওয়াল দাকাটা দাকুমড়া দাক্ষায়ণী দাক্ষায়নী দাক্ষিণাত্য দাক্ষিণ্য দাক্ষ্য দাখিল দাখিলখারিজ দাখিলা দাখিলাদাতা দাখিলি দাখিলী দাগ দাগওয়ালা দাগুক দাগকাটা দাগা দাগাদার দাগাদারি দাগান দাগানো দাগাবাজ দাগাবাজি দাগাষাঁড় দাগি দাগিচোর দাগিত দাগিতাম দাগিতিস দাগিতে দাগিতেছ দাগিতেছি দাগিতেছিল দাগিতেছিলাম দাগিতেছিলি দাগিতেছিলে দাগিতেছিলেন দাগিতেছিস দাগিতেছে দাগিতেছেন দাগিতেন দাগিব দাগিবার দাগিবি দাগিবে দাগিবেন দাগিল দাগিলাম দাগিলি দাগিলে দাগিলেন দাগিস দাগিয়া দাগিয়াছ দাগিয়াছি দাগিয়াছিল দাগিয়াছিলাম দাগিয়াছিলি দাগিয়াছিলে দাগিয়াছিলেন দাগিয়াছিস দাগিয়াছে দাগিয়াছেন দাগিয়ে দাগিয়ো দাগী দাগেন দাগছ দাগছি দাগছিল দাগছিলাম দাগছিলি দাগছিলে দাগছিলেন দাগছিলেম দাগছিলুম দাগছিস দাগছে দাগছেন দাগযুক্ত দাগত দাগতাম দাগতিস দাগতে দাগতেন দাগতেম দাগতুম দাগদেওয়া দাগুন দাগনি দাগব দাগবার দাগবি দাগবিলি দাগবে দাগবেন দাগবো দাগরাজি দাগল দাগলাম দাগলি দাগলে দাগলেন দাগলেম দাগলুম দাগহীন দাগড়া দাঙ্গা দাঙ্গাজনিত দাঙ্গাফাসাদ দাঙ্গাফেসাদ দাঙ্গাবাজ দাঙ্গাহাঙ্গামা দাঙ্গর দাঢ়া দাঢ়ি দাঢ়িয়াল দাণ দাণিলোঁ দাণী দাণ্ডা দাণ্ডাখাণ্ডা দাণ্ডাল দাণ্ডি দাণ্ডিক দাণ্ডিকী দাঁত দাঁতওয়ালা দাঁতকনকন দাঁতকনকনানি দাঁতকপাটি দাঁতখামটি দাঁতখামুটি দাঁতখিঁচুনি দাঁতখিলানি দাঁতখুঁটে দাতা দাতাকর্ণ দাতাগোষ্ঠী দাঁতান দাঁতানো দাতারা দাঁতাল দাতালি দাঁতালো দাঁতছোলা দাঁতযুক্ত দাঁত্যা দাত্যূহ দাতৃত্ব দাঁতন দাতব্য দাতব্যচিকিৎসালয় দাঁতভাঙ্গা দাঁতভাঙা দাত্র দাত্রী দাঁতহীন দাদ দাদু দাদূ দাদখাই দাদখানি দাদা দাদাঠাকুর দাদাবাবু দাদাভাই দাদামশাই দাদামশায় দাদামহাশয় দাদাল দাদালান দাদালানো দাদালিয়া দাদাশ্বশুর দাদাসাহেব দাদি দাদী দাদীমা দাদযুক্ত দাদন দাদনাশক দাদনি দাদনী দাদনদাতা দাদনদার দাদুপন্থি দাদফরিয়াদ দাদফরেদ দাদরা দাদুরি দাদুরী দাদূরী দাদলানো দাদলি দাদলিয়া দাঁদুড়িয়া দাদুড়ে দাঁদুড়ে দান দানকারিতা দানকারী দানকুনা দানকুনি দানকরা দানকর্ম দানখণ্ড দানখয়রাত দানগ্রহীতা দানগ্রহণ দানগ্রহণকারী দানা দানাওয়ালা দানাদার দানাদারকরণ দানাপানি দানাবাঁধা দানি দানিশবন্দ দানিশমন্দ দানী দানচালা দানীয় দানেচ্ছা দানেশ দানেশমন্দ দানেশমন্দি দানেশমন্দী দানো দানযোগ্য দান্ত দান্তি দান্দান দানধ্যান দানধর্ম দানপত্র দানপ্রার্থক দানপ্রতি দানপ্রতিদান দানপূর্বক দানব দানবাক্স দানবারি দানবিক দানবী দানবীয় দানবদলন দানবদলনী দানবনিধন দানবনিধনকর্তা দানব্রত দানবসংহার দানরূপ দানশালা দানশীল দানশীলা দানশীলতা দানশৌণ্ড দানসাগর দানসামগ্রী দানসজ্জা দানসত্র দানুয়া দাপ দাপক দাপা দাপাই দাপাইও দাপাইত দাপাইতাম দাপাইতিস দাপাইতে দাপাইতেছ দাপাইতেছি দাপাইতেছিল দাপাইতেছিলাম দাপাইতেছিলি দাপাইতেছিলে দাপাইতেছিলেন দাপাইতেছিস দাপাইতেছে দাপাইতেছেন দাপাইতেন দাপাইব দাপাইবার দাপাইবি দাপাইবে দাপাইবেন দাপাইল দাপাইলাম দাপাইলি দাপাইলে দাপাইলেন দাপাইয়া দাপাইয়াছ দাপাইয়াছি দাপাইয়াছিল দাপাইয়াছিলাম দাপাইয়াছিলি দাপাইয়াছিলে দাপাইয়াছিলেন দাপাইয়াছিস দাপাইয়াছে দাপাইয়াছেন দাপাইয়ো দাপাক দাপাচ্ছ দাপাচ্ছি দাপাচ্ছিল দাপাচ্ছিলাম দাপাচ্ছিলি দাপাচ্ছিলে দাপাচ্ছিলেন দাপাচ্ছিলেম দাপাচ্ছিলুম দাপাচ্ছিস দাপাচ্ছে দাপাচ্ছেন দাপাত দাপাতাম দাপাতিস দাপাতে দাপাতেন দাপাতেম দাপাতুম দাপাদাপি দাপান দাপানি দাপানো দাপাব দাপাবার দাপাবি দাপাবে দাপাবেন দাপাবো দাপাল দাপালাম দাপালি দাপালে দাপালেন দাপালেম দাপালুম দাপাস দাপি দাপিত দাপিয়ে দাপিয়েছ দাপিয়েছি দাপিয়েছিল দাপিয়েছিলাম দাপিয়েছিলি দাপিয়েছিলে দাপিয়েছিলেন দাপিয়েছিলেম দাপিয়েছিলুম দাপিয়েছিস দাপিয়েছে দাপিয়েছেন দাপিয়ো দাপী দাপে দাপট দাপ্য দাপ্তরিক দাপদুপ দাপন দাপনা দাপনি দাপুনি দাফন দাফনকাজ দাব দাবুক দাবকি দাবা দাবাই দাবাইও দাবাইখানা দাবাইত দাবাইতাম দাবাইতিস দাবাইতে দাবাইতেছ দাবাইতেছি দাবাইতেছিল দাবাইতেছিলাম দাবাইতেছিলি দাবাইতেছিলে দাবাইতেছিলেন দাবাইতেছিস দাবাইতেছে দাবাইতেছেন দাবাইতেন দাবাইব দাবাইবার দাবাইবি দাবাইবে দাবাইবেন দাবাইল দাবাইলাম দাবাইলি দাবাইলে দাবাইলেন দাবাইয়া দাবাইয়াছ দাবাইয়াছি দাবাইয়াছিল দাবাইয়াছিলাম দাবাইয়াছিলি দাবাইয়াছিলে দাবাইয়াছিলেন দাবাইয়াছিস দাবাইয়াছে দাবাইয়াছেন দাবাইয়ো দাবাক দাবাখেলা দাবাখেলুড়ে দাবাগ্নি দাবাচ্ছ দাবাচ্ছি দাবাচ্ছিল দাবাচ্ছিলাম দাবাচ্ছিলি দাবাচ্ছিলে দাবাচ্ছিলেন দাবাচ্ছিলেম দাবাচ্ছিলুম দাবাচ্ছিস দাবাচ্ছে দাবাচ্ছেন দাবাত দাবাতাম দাবাতিস দাবাতে দাবাতেন দাবাতেম দাবাতুম দাবান দাবানো দাবানল দাবাব দাবাবার দাবাবি দাবাবে দাবাবেন দাবাবো দাবাবোড়ে দাবাবড়ে দাবাল দাবালাম দাবালি দাবালে দাবালেন দাবালেম দাবালুম দাবাস দাবাড় দাবাড়ু দাবাড়ে দাবি দাবিজ্ঞাপক দাবিত দাবিতাম দাবিতিস দাবিতে দাবিতেছ দাবিতেছি দাবিতেছিল দাবিতেছিলাম দাবিতেছিলি দাবিতেছিলে দাবিতেছিলেন দাবিতেছিস দাবিতেছে দাবিতেছেন দাবিতেন দাবিত্যাগ দাবিদাওয়া দাবিদার দাবিনুযায়ী দাবিপত্র দাবিপূরণ দাবিব দাবিবার দাবিবি দাবিবে দাবিবেন দাবিমাত্র দাবিল দাবিলাম দাবিলি দাবিলে দাবিলেন দাবিস দাবিসম্পন্ন দাবিহীন দাবিয়া দাবিয়াছ দাবিয়াছি দাবিয়াছিল দাবিয়াছিলাম দাবিয়াছিলি দাবিয়াছিলে দাবিয়াছিলেন দাবিয়াছিস দাবিয়াছে দাবিয়াছেন দাবিয়ে দাবিয়েছ দাবিয়েছি দাবিয়েছিল দাবিয়েছিলাম দাবিয়েছিলি দাবিয়েছিলে দাবিয়েছিলেন দাবিয়েছিলেম দাবিয়েছিলুম দাবিয়েছিস দাবিয়েছে দাবিয়েছেন দাবিয়ো দাবী দাবীকৃত দাবীদার দাবে দাবেন দাবছ দাবছি দাবছিল দাবছিলাম দাবছিলি দাবছিলে দাবছিলেন দাবছিলেম দাবছিলুম দাবছিস দাবছে দাবছেন দাবত দাবতাম দাবতিস দাবতে দাবতেন দাবতেম দাবতুম দাবদগ্ধ দাবদাহ দাবদাহন দাবন দাবুন দাবনা দাবব দাববার দাববি দাববে দাববেন দাববো দাবল দাবলাম দাবলি দাবলে দাবলেন দাবলেম দাবলো দাবলুম দাবড় দাবড়া দাবড়ান দাবড়ানি দাবড়ানো দাবড়ি দাবুড়ি দাম দামগত দামগ্রাহক দামা দামাদ দামাদকুশ দামাদামি দামান দামানকুশ দামান্দ দামান্দকুশ দামামা দামাল দামি দামিনী দামী দামচড়া দামেস্ক দামোদর দামোদরব্রত দামদর দামন দামনগির দামনগীর দামনি দামনির্ধারক দামনির্ধারণ দাম্নী দাম্পত্য দাম্পত্যকলহ দাম্পত্যজীবন দাম্পত্যপ্রেম দাম্পত্যপ্রণয় দামবাবদ দাম্বাল দামব্যবস্থা দাম্ভিক দাম্ভিকতা দামরা দামসাপেক্ষ দামসন্ধান দামস্ফীতি দামড়া দামড়ি দামুড়ী দার দারু দারওয়ান দারওয়ানি দারক দারুক দারুকা দারকর্ম দারগা দারুগোলা দারগ্রহণ দারা দারাইছ দারাজ দারাজদিল দারাজদিলী দারাজসিনা দারাপুত্র দারাসুত দারি দারিকা দারিত দারিদ দারিদ্র দারিদ্র্য দারিদ্র্যের দারিদ্র্যতার দারিদ্রমুক্ত দারিদ্রসীমা দারী দারচিনি দারুচিনি দারচিনী দারোগা দারোয়ান দারোয়ানি দারুজ দার্জিলিং দার্ঢ্য দারণ দারুণ দারুণকষ্ট দারুণতৃষ্ণা দারুণভাবে দারুণমূর্তি দারুণরকম দারুণশীত দার্দুর দারুদহন দারুপাত্র দারুপিপীলিকা দারপরিগ্রহ দারব দারুব্রহ্ম দারভাঙ্গা দারুময় দাররক্ষী দারুল দারুলইসলাম দারুলউলুম দারুশিল্পী দার্শনিক দার্শনিকই দার্শনিকের দার্শনিকতা দার্শনিকদের দার্শনিকরা দারুসসালাম দারহাম দাল দালাই দালান দালানকোঠা দালানবাড়ি দালাল দালালি দালালী দালিম দালনা দালপুরি দালমুট দাশ দাশকন্যা দাশী দাশরথ দাশরথি দাস দাসকৃত দাসখত দাসানুদাস দাসী দাসীপুত্র দাসীপনা দাসীবাঁদী দাসীবৃত্তি দাসেয় দাস্য দাস্যা দাস্যবৃত্তি দাস্যভাব দাস্ত দাস্তকারবালা দাসত্ব দাসত্বপ্রথা দাসত্রাণ দাসদাসী দাসপাড়া দাসপ্রথা দাসব্যবসা দাসবৃত্তি দাসমনোভাব দাসুসাহি দাসসুলভ দাহ দাহক দাহকারী দাহকার্য দাহকাল দাহকর দাহক্রিয়া দাহকর্ম দাহঘ্ন দাহা দাহিকা দাহিকাশক্তি দাহিত দাহী দাহজনক দাহজনিত দাহজ্বর দাহ্য দাহন দাহরূপ দাড় দাঁড় দাড়ুক দাঁড়ুকা দাঁড়কাক দাঁড়কোদাল দাড়া দাঁড়া দাঁড়াই দাঁড়াইও দাঁড়াইত দাঁড়াইতাম দাঁড়াইতিস দাঁড়াইতে দাঁড়াইতেছ দাঁড়াইতেছি দাঁড়াইতেছিল দাঁড়াইতেছিলাম দাঁড়াইতেছিলি দাঁড়াইতেছিলে দাঁড়াইতেছিলেন দাঁড়াইতেছিস দাঁড়াইতেছে দাঁড়াইতেছেন দাঁড়াইতেন দাঁড়াইব দাঁড়াইবার দাঁড়াইবি দাঁড়াইবে দাঁড়াইবেন দাঁড়াইল দাঁড়াইলাম দাঁড়াইলি দাঁড়াইলে দাঁড়াইলেন দাঁড়াইয়া দাঁড়াইয়াছ দাঁড়াইয়াছি দাঁড়াইয়াছিল দাঁড়াইয়াছিলাম দাঁড়াইয়াছিলি দাঁড়াইয়াছিলে দাঁড়াইয়াছিলেন দাঁড়াইয়াছিস দাঁড়াইয়াছে দাঁড়াইয়াছেন দাঁড়াইয়ো দাড়াওয়ালা দাঁড়াক দাঁড়াকবি দাঁড়াগোপন দাঁড়াচ্ছ দাঁড়াচ্ছি দাঁড়াচ্ছিল দাঁড়াচ্ছিলাম দাঁড়াচ্ছিলি দাঁড়াচ্ছিলে দাঁড়াচ্ছিলেন দাঁড়াচ্ছিলেম দাঁড়াচ্ছিলুম দাঁড়াচ্ছিস দাঁড়াচ্ছে দাঁড়াচ্ছেন দাঁড়াত দাঁড়াতাম দাঁড়াতিস দাঁড়াতে দাঁড়াতেন দাঁড়াতেম দাঁড়াতুম দাঁড়ান দাঁড়ানিয়া দাঁড়ানে দাঁড়ানো দাঁড়াব দাঁড়াবার দাঁড়াবি দাঁড়াবে দাঁড়াবেন দাঁড়াবো দাঁড়াল দাঁড়ালাম দাঁড়ালি দাঁড়ালে দাঁড়ালেন দাঁড়ালেম দাঁড়ালো দাঁড়ালুম দাঁড়াশ দাঁড়াস দাড়ি দাঁড়ি দাড়িওয়ালা দাঁড়িকা দাড়িকানা দাঁড়িকসি দাড়িগোঁফ দাড়িযুক্ত দাঁড়িটানা দাঁড়িপাল্লা দাড়িফেলা দাড়িম দাঁড়িমাঝি দাড়িম্ব দাড়িম্বফল দাড়িয়াবান্ধা দাড়িয়াল দাঁড়িয়ে দাঁড়িয়েছ দাঁড়িয়েছি দাঁড়িয়েছিল দাঁড়িয়েছিলাম দাঁড়িয়েছিলি দাঁড়িয়েছিলে দাঁড়িয়েছিলেন দাঁড়িয়েছিলেম দাঁড়িয়েছিলো দাঁড়িয়েছিলুম দাঁড়িয়েছিস দাঁড়িয়েছে দাঁড়িয়েছেন দাঁড়িয়ো দাঁড়ী দায় দায়ক দায়গ্রাহক দায়গ্রস্ত দায়াদ দায়াদি দায়িক দায়িকা দায়িত্ব দায়িত্বগ্রহণ দায়িত্বগ্রহণকারী দায়িত্বজ্ঞান দায়িত্বজ্ঞানসম্পন্ন দায়িত্বজ্ঞানহীন দায়িত্বযুক্ত দায়িত্বপালন দায়িত্বপ্রাপ্ত দায়িত্বপূর্ণ দায়িত্ববান দায়িত্ববোধ দায়িত্ববোধসম্পন্ন দায়িত্ববহন দায়িত্বভার দায়িত্বমুক্ত দায়িত্বশীল দায়িত্বশীলতা দায়িত্বহীন দায়িত্বহীনভাবে দায়িনী দায়ী দায়েঠেকা দায়ের দায়েরকোপ দায়েরকৃত দায়ঠেলা দায়দায়াদি দায়দায়িত্ব দায়দায়িত্বহীন দায়নমহর দায়পড়া দায়বদ্ধ দায়বদ্ধতা দায়বন্ধন দায়ভাগ দায়ভার দায়মুক্ত দায়মুক্তি দায়মাল দায়মূল দায়মূলী দায়রা দায়রাজজ দায়রাসোপর্দ দায়রাসোপরদ্দ দায়শূন্য দায়সারা দায়সারাভাবে দি দিআর দিই দিইনি দিইলাম দিইয়ে দিইয়েছ দিইয়েছি দিইয়েছিল দিইয়েছিলাম দিইয়েছিলি দিইয়েছিলে দিইয়েছিলেন দিইয়েছিলেম দিইয়েছিলুম দিইয়েছিস দিইয়েছে দিইয়েছেন দিইয়ো দিও দিওয়ান দিওয়ানা দিওয়ালী দিক দিককার দিকাদিক দিকিন দিকিনি দিকচক্র দিকচক্রবাল দিকদারি দিকদিগন্ত দিকদর্শী দিকনির্দেশক দিকনির্দেশিত দিকনির্দেশনা দিকনির্ভর দিকপাল দিকপতি দিকপরিবর্তন দিক্বিদিক দিকভ্রান্ত দিকশূল দিকস্থ দিকসম্বলিত দিগক্ষরা দিগগজ দিগঙ্গনা দিগারী দিগজ্ঞান দিগঞ্চল দিগুণ দিগদারি দিগদারী দিগদিগন্ত দিগদর্শী দিগদর্শন দিগদর্শনযন্ত্র দিগদড়া দিগদড়ি দিগ্ধ দিগ্ধা দিগধাউড়ি দিগধেড়েঙ্গা দিগন্ত দিগন্তপ্রসারী দিগন্তবিস্তৃত দিগন্তব্যাপী দিগন্তবৃত্ত দিগন্তর দিগন্তরেখা দিগবারণ দিগবালা দিগবালিকা দিগ্বিজয় দিগ্বিজয়কারী দিগবিজয়ী দিগ্বিদিক দিগবিলীন দিগবধূ দিগ্বলয় দিগ্বসন দিগ্বসনা দিগভ্রান্ত দিগভ্রান্তি দিগভ্রম দিগম্বর দিগম্বরী দিগর দিঘ দিঘালিপাতালি দিঘি দিঘী দিঘল দিচ্ছ দিচ্ছি দিচ্ছিনা দিচ্ছিল দিচ্ছিলাম দিচ্ছিলি দিচ্ছিলে দিচ্ছিলেন দিচ্ছিলেম দিচ্ছিলুম দিচ্ছিস দিচ্ছে দিচ্ছেন দিচ্ছেনা দিছ দিছি দিছিলাম দিছে দিছেন দিছলাম দিঞাঁ দিট দিঠ দিঠি দিঠে দিত দিতাছে দিতাম দিতি দিতিস দিতে দিতেছ দিতেছি দিতেছিল দিতেছিলাম দিতেছিলি দিতেছিলে দিতেছিলেন দিতেছিস দিতেছে দিতেছেন দিতেন দিতেম দিতো দিতুম দিৎসু দিৎসা দিদু দিদৃক্ষু দিদৃক্ষা দিদৃক্ষমাণ দিদা দিদাঠাকুরানী দিদাঠাকরুন দিদামণি দিদার দিদাশাশুড়ি দিদি দিদিঠাকুরানী দিদিঠাকরুন দিদিমা দিদিমাসি দিদিমণি দিদিশাশুড়ি দিধক্ষু দিধিষু দিন দিনআনা দিনকাল দিনকর দিনকরণ দিনক্ষণ দিনক্ষয় দিনগোনা দিনগুজরানো দিনগত দিনাজপুর দিনাত্যয় দিনান্ত দিনাবশেষ দিনাবসান দিনার দিনচলা দিনেকানা দিনেডাকাতি দিনেদিনে দিনেদুপুরে দিনেমার দিনেরাতে দিনেরশ্রম দিনেশ দিনযাপন দিনযাপনকারী দিনযামিনী দিনতারিখ দিনদগ্ধা দিনদার দিনদিন দিনদুনিয়া দিনদুপুর দিননাথ দিনপাত দিনপানা দিনপঞ্জি দিনপতি দিনপত্রী দিনব্যাপী দিনভাগ দিনভোর দিনভর দিনমুখ দিনমুখরবি দিনমান দিনমালা দিনমজুর দিনমণি দিনরাত দিনরাত্রি দিনলিপি দিনশেষ দিনসংখ্যা দিনহি দিব দিবা দিবাকর দিবাগত দিবাচর দিবানা দিবানিদ্রা দিবানিশি দিবান্ধ দিবাবিহার দিবাবসু দিবাবসান দিবাভাগ দিবাভীত দিবামণি দিবারাত্র দিবারাত্রি দিবালোক দিবাস্বপ্ন দিবি দিবে দিবেন দিবো দিব্য দিব্যাংশু দিব্যাঙ্গনা দিব্যাস্ত্র দিব্যি দিব্যচক্ষু দিব্যোদক দিব্যজ্ঞান দিব্যযোনি দিব্যদর্শী দিব্যদর্শন দিব্যদৃষ্টি দিব্যনেত্র দিব্যপ্রকাশ দিব্যরথ দিব্যলোক দিব্ব দিব্বি দিবস দিবস্পতি দিবসব্যাপী দিমু দিমুনি দিরহাম দিল দিলআফরোজ দিলওয়ার দিলওয়ালে দিলকোঠা দিলখোলা দিলখোলাসা দিলখোলসা দিলখোশ দিলখোস দিলখুলাসা দিলখুশ দিলগির দিলা দিলাবার দিলাম দিলাসা দিলির দিলীর দিলে দিলেন দিলেম দিলো দিলদাগা দিলদার দিলদরাজি দিলদরিয়া দিলপিয়ারা দিলবন্দ দিলুম দিলমাতানো দিলমে দিলমোহর দিলরুবা দিল্লগি দিল্লাগি দিল্লি দিল্লিকা দিল্লিকালাড্ডু দিল্লিগামী দিল্লী দিল্লীকা দিশ দিশা দিশাবিশা দিশামিশা দিশারি দিশারী দিশাহারা দিশি দিশিদিশি দিশী দিশে দিশেহারা দিশপাশ দিষ্ট দিষ্টি দিস দিস্তা দিস্তাপড়া দিস্তে দিস্তেপড়া দিহ দিড় দিঢ় দিয় দিয়া দিয়াছ দিয়াছি দিয়াছিল দিয়াছিলাম দিয়াছিলি দিয়াছিলে দিয়াছিলেন দিয়াছিস দিয়াছে দিয়াছেন দিয়াটি দিয়ান দিয়াম দিয়ার দিয়ালা দিয়ালি দিয়ালী দিয়াশলাই দিয়াড়া দিয়ে দিয়েছ দিয়েছি দিয়েছিল দিয়েছিলাম দিয়েছিলি দিয়েছিলে দিয়েছিলেন দিয়েছিলেম দিয়েছিলো দিয়েছিলুম দিয়েছিস দিয়েছে দিয়েছেন দিয়েছন দিয়েন দিয়ো দিয়ড়ি দী দীউওয়ানা দীওয়ানা দীওয়ানে দীক্ষক দীক্ষা দীক্ষাগুরু দীক্ষাদাতা দীক্ষাদান দীক্ষাদানকারী দীক্ষামন্ত্র দীক্ষার্থী দীক্ষালাভ দীক্ষিত দীক্ষণীয় দীগর দীঘ দীঘি দীঘিনালা দীঘল দুচাকা দুচামচ দুচার দুচারিণী দুচালা দুচুচকো দুচোখ দুচ্ছ দুচ্ছি দুচ্ছিল দুচ্ছিলাম দুচ্ছিলি দুচ্ছিলে দুচ্ছিলেন দুচ্ছিলেম দুচ্ছিলুম দুচ্ছিস দুচ্ছে দুচ্ছেন দীঠ দীঠিয়া দীঠে দীদিবি দীধিতি দীন দীনআখেরী দীনা দীনার দীনি দীনিইলম দীনী দীনেশ দীনজন দীনতা দীনতাহীন দীনদুঃখী দীনদার দীনদুনিয়া দীনদরিদ্র দীননাথ দীনবেশ দীনবন্ধু দীনভাবাপন্ন দীনশরণ দীনহীন দীপ দীপক দীপকরাগ দীপঙ্কর দীপা দীপাগার দীপাধার দীপান্বিত দীপান্বিতা দীপাবলি দীপালি দীপালী দীপালোক দীপিকা দীপিছে দীপিত দীপোৎসব দীপজ্যোতি দীপ্য দীপ্যমান দীপ্ত দীপ্তক দীপ্তকারিণী দীপ্তকারী দীপ্তকীর্তি দীপ্তকরণ দীপ্তাংশু দীপ্তাক্ষ দীপতি দীপ্তি দীপ্তিযুক্ত দীপ্তিদায়ক দীপ্তিমান দীপ্তিমাপক দীপ্তিমিতি দীপ্তিমিতীয় দীপ্তিমতী দীপ্তিময় দীপ্তিশালিনী দীপ্তিশালী দীপ্তিশীল দীপ্তিশূন্য দীপ্তিসাধক দীপ্তিসম্পন্ন দীপ্তিসহ দীপ্তিহীন দীপ্তোজ্জ্বল দীপ্তভাবে দীপ্তমূর্তি দীপ্তলোক দীপদান দীপন দীপনকারী দীপনা দীপনির্বাণ দীপনীয় দীপনেভা দীপনযোগ্য দীপপুঞ্জ দীপবর্তিকা দীপমালা দীপমালাসজ্জিত দীপ্র দীপ্রাস্ত্র দীপশিখা দীপশলাকা দীর্ঘ দীর্ঘকাল দীর্ঘকালীন দীর্ঘকালব্যাপী দীর্ঘকায় দীর্ঘকণ্ঠ দীর্ঘকন্দ দীর্ঘক্ষণ দীর্ঘগ্রীব দীর্ঘা দীর্ঘাকার দীর্ঘাকৃতি দীর্ঘাগ্র দীর্ঘায়ু দীর্ঘায়ত দীর্ঘিকা দীর্ঘচৌপদী দীর্ঘজীবিনী দীর্ঘজীবী দীর্ঘজীবন দীর্ঘতা দীর্ঘতাল দীর্ঘতনু দীর্ঘতপা দীর্ঘতম দীর্ঘতর দীর্ঘত্রিপদী দীর্ঘদিন দীর্ঘদেহ দীর্ঘদেহী দীর্ঘদর্শিনী দীর্ঘদর্শী দীর্ঘনাস দীর্ঘনিঃশ্বাস দীর্ঘনিদ্রা দীর্ঘনিশ্বাস দীর্ঘপাদ দীর্ঘপথ দীর্ঘপ্রচলিত দীর্ঘপ্রস্থ দীর্ঘবাহু দীর্ঘবিরতি দীর্ঘভাবে দীর্ঘভুজা দীর্ঘভবন দীর্ঘমেয়াদি দীর্ঘমেয়াদী দীর্ঘরি দীর্ঘরোমা দীর্ঘল দীর্ঘশ্বাস দীর্ঘসূত্র দীর্ঘসূত্রিতা দীর্ঘসূত্রী দীর্ঘসূত্রতা দীর্ঘস্থায়ী দীর্ঘস্বর দীর্ঘস্বরধ্বনি দীর্ঘসময় দীর্ণ দীর্ণবিদীর্ণ দীহি দীয়া দীয়মান দে দেআসিনী দেই দেইখা দেইখেন দেইখো দেইজি দেইজী দেউ দেউটি দেউটী দেউদে দেউরি দেউরী দেউল দেউলা দেউলিয়া দেউলে দেউড়ি দেউড়ী দেও দেওদার দেওদাশা দেওন দেওনাই দেওনের দেওর দেওরঝি দেওরপো দেওয়া দেওয়াই দেওয়াইও দেওয়াইত দেওয়াইতাম দেওয়াইতিস দেওয়াইতে দেওয়াইতেছ দেওয়াইতেছি দেওয়াইতেছিল দেওয়াইতেছিলাম দেওয়াইতেছিলি দেওয়াইতেছিলে দেওয়াইতেছিলেন দেওয়াইতেছিস দেওয়াইতেছে দেওয়াইতেছেন দেওয়াইতেন দেওয়াইব দেওয়াইবার দেওয়াইবি দেওয়াইবে দেওয়াইবেন দেওয়াইল দেওয়াইলাম দেওয়াইলি দেওয়াইলে দেওয়াইলেন দেওয়াইয়া দেওয়াইয়াছ দেওয়াইয়াছি দেওয়াইয়াছিল দেওয়াইয়াছিলাম দেওয়াইয়াছিলি দেওয়াইয়াছিলে দেওয়াইয়াছিলেন দেওয়াইয়াছিস দেওয়াইয়াছে দেওয়াইয়াছেন দেওয়াইয়ো দেওয়াও দেওয়াক দেওয়াকে দেওয়াচ্ছ দেওয়াচ্ছি দেওয়াচ্ছিল দেওয়াচ্ছিলাম দেওয়াচ্ছিলি দেওয়াচ্ছিলে দেওয়াচ্ছিলেন দেওয়াচ্ছিলেম দেওয়াচ্ছিলুম দেওয়াচ্ছিস দেওয়াচ্ছে দেওয়াচ্ছেন দেওয়াটা দেওয়াত দেওয়াতাম দেওয়াতিস দেওয়াতে দেওয়াতেন দেওয়াতেম দেওয়াতুম দেওয়াথোওয়া দেওয়ান দেওয়ানখানা দেওয়ানগঞ্জ দেওয়ানা দেওয়ানি দেওয়ানিমামলা দেওয়ানিমোকদ্দমা দেওয়ানী দেওয়ানীমামলা দেওয়ানীমোকদ্দমা দেওয়ানেওয়া দেওয়ানো দেওয়াব দেওয়াবার দেওয়াবি দেওয়াবে দেওয়াবেন দেওয়াবো দেওয়াল দেওয়ালগির দেওয়ালগিরি দেওয়ালগিরী দেওয়ালগীর দেওয়ালঘড়ি দেওয়ালাম দেওয়ালি দেওয়ালিপোকা দেওয়ালিমক্ষী দেওয়ালী দেওয়ালচিত্র দেওয়ালেন দেওয়ালেম দেওয়ালপঞ্জি দেওয়ালবিজ্ঞাপন দেওয়ালুম দেওয়াললিখন দেওয়ালসংলগ্ন দেওয়াস দেক দেকসেক দেখ দেখুক দেখা দেখাই দেখাইও দেখাইত দেখাইতাম দেখাইতিস দেখাইতে দেখাইতেছ দেখাইতেছি দেখাইতেছিল দেখাইতেছিলাম দেখাইতেছিলি দেখাইতেছিলে দেখাইতেছিলেন দেখাইতেছিস দেখাইতেছে দেখাইতেছেন দেখাইতেছস দেখাইতেন দেখাইব দেখাইবার দেখাইবি দেখাইবে দেখাইবেন দেখাইল দেখাইলাম দেখাইলি দেখাইলে দেখাইলেন দেখাইয়া দেখাইয়াছ দেখাইয়াছি দেখাইয়াছিল দেখাইয়াছিলাম দেখাইয়াছিলি দেখাইয়াছিলে দেখাইয়াছিলেন দেখাইয়াছিস দেখাইয়াছে দেখাইয়াছেন দেখাইয়ো দেখাও দেখাক দেখাচ্ছ দেখাচ্ছি দেখাচ্ছিল দেখাচ্ছিলাম দেখাচ্ছিলি দেখাচ্ছিলে দেখাচ্ছিলেন দেখাচ্ছিলেম দেখাচ্ছিলুম দেখাচ্ছিস দেখাচ্ছে দেখাচ্ছেন দেখাছে দেখাত দেখাতাম দেখাতিস দেখাতে দেখাতেন দেখাতেম দেখাতো দেখাতুম দেখাদেখি দেখান দেখানো দেখাব দেখাবার দেখাবি দেখাবে দেখাবেন দেখাবো দেখামাত্র দেখাল দেখালাম দেখালি দেখালে দেখালেও দেখালেন দেখালেম দেখালুম দেখাশোনা দেখাশুনা দেখাশুনো দেখাস দেখাসাক্ষাৎ দেখায় দেখায়ও দেখায়নি দেখায়লি দেখায়সি দেখি দেখিআঁ দেখিইনি দেখিও দেখিত দেখিতাম দেখিতিস দেখিতে দেখিতেছ দেখিতেছি দেখিতেছিল দেখিতেছিলাম দেখিতেছিলি দেখিতেছিলে দেখিতেছিলেন দেখিতেছিস দেখিতেছে দেখিতেছেন দেখিতেন দেখিনা দেখিনি দেখিব দেখিবামাত্র দেখিবার দেখিবি দেখিবে দেখিবেন দেখিল দেখিলুঁ দেখিলাম দেখিলি দেখিলে দেখিলেন দেখিস দেখিয়া দেখিয়াছ দেখিয়াছি দেখিয়াছিল দেখিয়াছিলাম দেখিয়াছিলি দেখিয়াছিলে দেখিয়াছিলেন দেখিয়াছিস দেখিয়াছে দেখিয়াছেন দেখিয়ে দেখিয়েছ দেখিয়েছি দেখিয়েছিল দেখিয়েছিলাম দেখিয়েছিলি দেখিয়েছিলে দেখিয়েছিলেন দেখিয়েছিলেম দেখিয়েছিলুম দেখিয়েছিস দেখিয়েছে দেখিয়েছেন দেখিয়ো দেখে দেখেই দেখেইতো দেখেও দেখেছ দেখেছি দেখেছিল দেখেছিলাম দেখেছিলি দেখেছিলে দেখেছিলেন দেখেছিলেম দেখেছিলো দেখেছিলুম দেখেছিস দেখেছে দেখেছেন দেখেছো দেখেন দেখেনি দেখেননা দেখেননি দেখেশুনে দেখেহি দেখো দেখছ দেখছি দেখছিনা দেখছিল দেখছিলাম দেখছিলি দেখছিলে দেখছিলেন দেখছিলেম দেখছিলুম দেখছিস দেখছে দেখছেন দেখছস দেখত দেখতা দেখতাম দেখতিস দেখতে দেখতেই দেখতেও দেখতেছি দেখতেছিলাম দেখতেন দেখতেম দেখতুম দেখন দেখনু দেখুন দেখনাই দেখনি দেখুনতো দেখনহাসি দেখব দেখবা দেখবার দেখবি দেখবে দেখবেন দেখবো দেখভাল দেখুম দেখমার দেখল দেখলু দেখলাম দেখলি দেখলে দেখলেই দেখলেন দেখলেম দেখলুম দেগে দেগেছ দেগেছি দেগেছিল দেগেছিলাম দেগেছিলি দেগেছিলে দেগেছিলেন দেগেছিলেম দেগেছিলুম দেগেছিস দেগেছে দেগেছেন দেগজা দেছ দেণ্ডারা দেতে দেঁতে দেঁতো দেঁতোহাসি দেদার দেদীপ্যমান দেদো দেধান দেন দেনা দেনাদার দেনাপাওনা দেনাশূন্য দেনায়ডুবা দেনেওয়ালা দেনেয়াল দেনো দেন্ত দেনদার দেননি দেনমোহর দেনমহর দেনুয়া দেব দেবকার্য দেবকাষ্ঠ দেবকী দেবকীনন্দন দেবকোট দেবকন্যা দেবকুল দেবকল্প দেবখাত দেবগণ দেবগুরু দেবগৃহ দেবা দেবাংশ দেবাকৃতি দেবাগার দেবাত্মা দেবাদিদেব দেবাদেশ দেবানুগ্রহ দেবানুগৃহীত দেবার দেবারি দেবার্চনা দেবার্চনাদি দেবালয় দেবাশ্রিত দেবাসুর দেবায়তন দেবী দেবীগঞ্জ দেবীগণ দেবীচৌধুরানী দেবীদ্বার দেবীপুর দেবীপুরাণ দেবীমাহাত্ম্য দেবীমূর্তি দেবীমহিমা দেবে দেবেছ দেবেছি দেবেছিল দেবেছিলাম দেবেছিলি দেবেছিলে দেবেছিলেন দেবেছিলেম দেবেছিলুম দেবেছিস দেবেছে দেবেছেন দেবেত দেবেন দেবেনা দেবেন্দ্র দেবেন্দ্রনগর দেবেশ দেবো দেবোচিত দেবোত্তম দেবোত্তর দেবোপম দেবজ্যোতি দেব্যা দেবযাত্রা দেবযান দেবযানী দেবযোনি দেবযজ্ঞ দেবতা দেবতাকর্তৃক দেবতাত্মা দেবতামূর্তি দেবতাসুলভ দেবত্ব দেবত্বপ্রাপ্ত দেবত্র দেবতুল্য দেবদারু দেবদাস দেবদাসী দেবদেব দেবদেবী দেবদূত দেবদত্ত দেবদ্বিজ দেবদ্বেষী দেবদুর্গ দেবদুর্লভ দেবদর্শন দেবধান্য দেবধূপ দেবন দেবনগরী দেবনাগর দেবনাগরী দেবনাথ দেবনদী দেবপক্ষ দেবপাল দেবপিতা দেবপূজক দেবপূজা দেবপতি দেবপরিচর্যা দেবপুরী দেবপ্রতিষ্ঠা দেবপ্রসাদ দেবপশু দেববাক্য দেববাণী দেববার্তা দেবব্রত দেবভাষা দেবভূমি দেবমাতৃক দেবমাতা দেবমান দেবমায়া দেবমন্দির দেবমূর্তি দেবর দেবরাজ দেবরথ দেবর্ষি দেবল দেবলোক দেবশিল্পী দেবশত্রু দেবশর্মা দেবসেনা দেবসেনাপতি দেবসদৃশ দেবস্ব দেমাক দেমাকি দেমাগ দেমাগি দের দেরকো দেরাকত দেরাক্ত দেরাজ দেরাজযুক্ত দেরাদুন দেরি দেরিপথ দেরী দেরেগ দেরেঙ্গ দেল দেলকো দেলখোশ দেলখোস দেলগির দেলগীর দেলাসা দেলোয়ার দেলদুয়ার দেলবন্দ দেশ দেশকার দেশকাল দেশকালোচিত দেশকালপাত্র দেশগত দেশাচার দেশাত্মবোধ দেশাত্মবোধক দেশান্তর দেশান্তরি দেশান্তরিত দেশান্তরী দেশান্তরীকরণ দেশাল দেশি দেশিক দেশিকোত্তম দেশিকুমড়ো দেশিত দেশিনী দেশী দেশীয় দেশীয়চাল দেশেবিদেশে দেশেরটান দেশোদ্ধার দেশোয়ালি দেশছাড়া দেশজ দেশজাত দেশজানিত দেশজোড়া দেশজুড়ে দেশজয় দেশ্য দেশত্যাগ দেশত্যাগী দেশদেশ দেশদেশান্তর দেশদ্রোহ দেশদ্রোহিতা দেশদ্রোহী দেশধর্ম দেশনা দেশনায়ক দেশনেতা দেশনেত্রী দেশপূজ্য দেশপ্রিয় দেশপ্রেম দেশপ্রেমিক দেশপ্রেমী দেশপ্রসিদ্ধ দেশবাসী দেশবিখ্যাত দেশবিদেশ দেশবিভাগ দেশব্যাপী দেশবন্ধু দেশবরেণ্য দেশভক্ত দেশভক্তি দেশভাগ দেশভিত্তিক দেশভ্রমণ দেশমুখ দেশমাতৃকা দেশমাতা দেশমান্য দেশময় দেশরক্ষা দেশলাই দেশলাইকাঠি দেশশাসন দেশসেবক দেশসেবা দেশসুদ্ধ দেশহিত দেশহিতৈষী দেশহিতব্রত দেশহিতব্রতী দেশড়ি দেশড়ী দেহ দেহকোষ দেহক্ষয় দেহগঠন দেহগত দেহা দেহাংশ দেহাঙ্গ দেহাত দেহাতি দেহাতী দেহাতীত দেহাত্যয় দেহাত্মপ্রত্যয় দেহাত্মবাদ দেহাত্মবাদী দেহান্ত দেহান্তর দেহান্তর্গত দেহাবরণ দেহাবশেষ দেহাবসান দেহাভ্যন্তর দেহাভ্যন্তরীণ দেহাভ্যন্তরস্থ দেহারা দেহালা দেহাশ্রিত দেহি দেহী দেহচালনা দেহচর্চা দেহচর্যা দেহচর্ম দেহেরা দেহোপজীবিনী দেহজ দেহজা দেহজাত দেহজ্ঞান দেহজ্ঞানরহিত দেহযুক্ত দেহযাত্রা দেহযন্ত্র দেহতাত্ত্বিক দেহত্যাগ দেহতত্ত্ব দেহত্বক দেহদান দেহধারী দেহধারণ দেহপাত দেহপিঞ্জর দেহবিহীন দেহব্যাপী দেহব্যবসা দেহভঙ্গি দেহভঙ্গিযুক্ত দেহভাগ দেহমধ্য দেহমধ্যস্থ দেহমন দেহরক্ষা দেহরক্ষী দেহুরী দেহরস দেহলি দেহলী দেহলতা দেহশোধন দেহশুদ্ধি দেহসংস্কার দেহসার দেহসৌষ্ঠব দেহসৌষ্ঠবসম্পন্না দেহসজ্জা দেহস্থ দেহহীন দেহুড়ী দেড় দেড়কিয়া দেড়কো দেড়খানা দেড়গজি দেড়গুণ দেড়া দেড়ি দেড়ে দেড়েক দেড়েল দেড়ো দেড়যুগ দেড়টা দেড়শ দেড়শত দেয় দেয়া দেয়ান দেয়ানখানা দেয়ারদ্য দেয়াল দেয়ালগির দেয়ালগিরি দেয়ালগিরী দেয়ালগীর দেয়ালঘেরা দেয়ালঘড়ি দেয়ালা দেয়ালি দেয়ালচিত্র দেয়াশিনী দেয়াশী দেয়াসিনি দেয়াসী দেয়াড় দেয়াড়া দেয়না দেয়নি দেয়ব দৈ দৈত্য দৈত্যকুল দৈত্যগুরু দৈত্যাকার দৈত্যাকৃতি দৈত্যারি দৈত্যদানব দৈত্যনিধন দৈত্যবিশেষ দৈত্যমাতা দৈত্যরাজ দৈন দৈনিক দৈনিককাগজ দৈনিকভাবে দৈন্য দৈন্যদশা দৈনন্দিন দৈনন্দিনতা দৈব দৈবকী দৈবকৃত দৈবক্রম দৈবগতি দৈবগত্যা দৈবঘটনা দৈবাগত দৈবাৎ দৈবাদেশ দৈবাধীন দৈবায়ত্ত দৈবিক দৈবী দৈবচয়িত দৈবে দৈবেঁ দৈবোপহত দৈবজাত দৈবজ্ঞ দৈব্য দৈবযোগ দৈবত দৈবদোষ দৈবদুর্বিপাক দৈবনিরপেক্ষ দৈববাণী দৈববিপাক দৈববিড়ম্বনা দৈববশ দৈববশত দৈবশক্তি দৈবশক্তিসম্পন্ন দৈর্ঘ্য দৈর্ঘ্যগত দৈর্ঘ্যপ্রস্থ দৈশিক দৈসত দৈহিক দৈহিকতা দো দোআ দোআনি দোআব দোআঁশ দোআঁশলা দোআঁসলা দোকা দোকাতারি দোকান দোকানখোলা দোকানঘর দোকানি দোকানী দোকানদার দোকানদারি দোকানদারী দোকানপাট দোকানপসার দোকানবাজার দোকানহাট দোকতা দোক্তা দোক্তাতামাক দোকর দোকলা দোগানা দোগাশাল দোগজা দোগ্ধা দোগধ্রী দোগুনা দোঘাশাল দোচালা দোচোখা দোচ্ছুট দোছোট দোছটি দোছুটি দোছতরি দোজখ দোজবেরে দোজবর দোজবরে দোজমি দোযখ দোটানা দোতারা দোতালা দোতি দোতন দোতমান দোতরফা দোতলা দোথরি দোদেল দোদমা দোদুল দোদুল্যমান দোধারি দোধারী দোন দোনা দোনী দোনো দোনোমনা দোনলা দোপাক দোপাটি দোপাট্টা দোপাল্লা দোপাল্লি দোপিয়াজা দোপিয়াজি দোপেয়াজা দোপেয়ে দোপটী দোপট্টি দোপড়া দোফাঁকড়া দোফাল দোফালি দোফ্যাকড়া দোফরকা দোফলা দোফসলি দোবারা দোবে দোবজা দোবুটি দোবরা দোভাপা দোভাষী দোমুখো দোমালা দোমেটে দোমতি দোমনা দোমহলা দোমড়া দোমড়াক দোমড়াচ্ছ দোমড়াচ্ছি দোমড়াচ্ছিল দোমড়াচ্ছিলাম দোমড়াচ্ছিলি দোমড়াচ্ছিলে দোমড়াচ্ছিলেন দোমড়াচ্ছিলেম দোমড়াচ্ছিলুম দোমড়াচ্ছিস দোমড়াচ্ছে দোমড়াচ্ছেন দোমড়াত দোমড়াতাম দোমড়াতিস দোমড়াতে দোমড়াতেন দোমড়াতেম দোমড়াতুম দোমড়ান দোমড়ানো দোমড়াব দোমড়াবার দোমড়াবি দোমড়াবে দোমড়াবেন দোমড়াবো দোমড়াল দোমড়ালাম দোমড়ালি দোমড়ালে দোমড়ালেন দোমড়ালেম দোমড়ালুম দোমড়াস দোর দোরক দোরকা দোরগোড়া দোরাখা দোরে দোরোকা দোরোন দোর্দণ্ড দোর্দণ্ডপ্রতাপ দোর্দণ্ডশাসন দোরধরা দোরমা দোররা দোরষষ্ঠী দোরসা দোরস্ত দোল দোলক দোলখেলা দোলা দোলাক দোলাচ্ছ দোলাচ্ছি দোলাচ্ছিল দোলাচ্ছিলাম দোলাচ্ছিলি দোলাচ্ছিলে দোলাচ্ছিলেন দোলাচ্ছিলেম দোলাচ্ছিলুম দোলাচ্ছিস দোলাচ্ছে দোলাচ্ছেন দোলাচল দোলাত দোলাতাম দোলাতিস দোলাতে দোলাতেন দোলাতেম দোলাতুম দোলান দোলানো দোলাব দোলাবার দোলাবি দোলাবে দোলাবেন দোলাবো দোলাল দোলালাম দোলালি দোলালে দোলালেন দোলালেম দোলালুম দোলাস দোলায় দোলায়িত দোলায়িতচিত্ত দোলায়মান দোলিকা দোলিত দোলী দোলে দোলেন দোলযাত্রা দোলদুর্গোৎসব দোলন দোলনা দোলনচাঁপা দোলন্ত দোলনতল দোলপূজা দোলপূর্ণিমা দোলবার দোলমা দোলমঞ্চ দোশাল দোশালা দোষ দোষকারী দোষকীর্তন দোষক্ষালন দোষগুণ দোষগ্রাহী দোষা দোষাতন দোষাদোষ দোষানো দোষাবহ দোষারোপ দোষারোপযোগ্য দোষাশ্রিত দোষিণী দোষী দোষেন দোষৈকদৃক দোষৈকদর্শী দোষজ্ঞ দোষজনক দোষজনিত দোষযুক্ত দোষঢাকা দোষত্রুটি দোষত্রয় দোষদায়ক দোষদর্শী দোষবার দোষবর্জিত দোষমুক্ত দোষরহিত দোষল দোষশূন্যতা দোষহীন দোসা দোসারি দোসালা দোস্ত দোস্তআশনা দোসুতি দোস্তি দোসুতী দোসূতী দোস্তে দোস্তো দোস্তদার দোসর দোসরা দোসরী দোহ দোহক দোহা দোঁহা দোহাই দোহাইও দোহাইত দোহাইতাম দোহাইতিস দোহাইতে দোহাইতেছ দোহাইতেছি দোহাইতেছিল দোহাইতেছিলাম দোহাইতেছিলি দোহাইতেছিলে দোহাইতেছিলেন দোহাইতেছিস দোহাইতেছে দোহাইতেছেন দোহাইতেন দোহাইব দোহাইবার দোহাইবি দোহাইবে দোহাইবেন দোহাইল দোহাইলাম দোহাইলি দোহাইলে দোহাইলেন দোহাইয়া দোহাইয়াছ দোহাইয়াছি দোহাইয়াছিল দোহাইয়াছিলাম দোহাইয়াছিলি দোহাইয়াছিলে দোহাইয়াছিলেন দোহাইয়াছিস দোহাইয়াছে দোহাইয়াছেন দোহাইয়ো দোহাক দোঁহাকার দোহাচ্ছ দোহাচ্ছি দোহাচ্ছিল দোহাচ্ছিলাম দোহাচ্ছিলি দোহাচ্ছিলে দোহাচ্ছিলেন দোহাচ্ছিলেম দোহাচ্ছিলুম দোহাচ্ছিস দোহাচ্ছে দোহাচ্ছেন দোহাত দোহাতাম দোহাতিস দোহাতিয়া দোহাতে দোহাতেন দোহাতেম দোহাতুম দোহাথিয়া দোহান দোহানো দোহাব দোহাবার দোহাবি দোহাবে দোহাবেন দোহাবো দোহার দোঁহার দোহারকি দোহারা দোহারি দোহাল দোহালাম দোহালি দোহালে দোহালেন দোহালেম দোহালো দোহালুম দোহাস দোঁহে দোহ্য দোহদ দোহদদান দোহদবতী দোহদলক্ষণ দোহন দোহনকারী দোহনকাল দোহনী দোহনীয় দোহনযোগ্য দোহনপাত্র দোহরান দোহরানো দোয়া দোয়াক দোয়াচ্ছ দোয়াচ্ছি দোয়াচ্ছিল দোয়াচ্ছিলাম দোয়াচ্ছিলি দোয়াচ্ছিলে দোয়াচ্ছিলেন দোয়াচ্ছিলেম দোয়াচ্ছিলুম দোয়াচ্ছিস দোয়াচ্ছে দোয়াচ্ছেন দোয়াজ দোয়াজা দোয়াজি দোয়াজদহম দোয়াত দোয়াতকলম দোয়াতাম দোয়াতিস দোয়াতে দোয়াতেন দোয়াতেম দোয়াতদানি দোয়াতুম দোয়াদরুদ দোয়ান দোয়ানি দোয়ানো দোয়াব দোয়াবার দোয়াবি দোয়াবে দোয়াবেন দোয়াবো দোয়ার দোয়ারকি দোয়ারি দোয়াল দোয়ালাম দোয়ালি দোয়ালে দোয়ালেন দোয়ালেম দোয়ালুম দোয়াস দোয়াড় দোয়াড়ি দোয়েম দোয়েমজমি দোয়েল দোয়েলচত্বর দোয়েলপাখি দোয়জ দোয়জি দৌত্য দৌত্যকার্য দৌত্যকর্ম দৌবারিক দৌবারিকী দৌর দৌর্গত্য দৌর্গন্ধ্য দৌরাত্ম্য দৌরাত্ম্যকারী দৌর্জন্য দৌর্বল্য দৌর্ভাগ্য দৌর্মনস্য দৌলত দৌলৎ দৌলতকান্দি দৌলতখানা দৌলতদার দৌলতদারি দৌলতদিয়া দৌলতপুর দৌলতমন্দ দৌলতশালা দৌহিত্র দৌহিত্রী দৌড় দৌড়ুই দৌড়ক দৌড়ুক দৌড়া দৌড়াই দৌড়াইও দৌড়াইত দৌড়াইতাম দৌড়াইতিস দৌড়াইতে দৌড়াইতেছ দৌড়াইতেছি দৌড়াইতেছিল দৌড়াইতেছিলাম দৌড়াইতেছিলি দৌড়াইতেছিলে দৌড়াইতেছিলেন দৌড়াইতেছিস দৌড়াইতেছে দৌড়াইতেছেন দৌড়াইতেন দৌড়াইব দৌড়াইবার দৌড়াইবি দৌড়াইবে দৌড়াইবেন দৌড়াইল দৌড়াইলাম দৌড়াইলি দৌড়াইলে দৌড়াইলেন দৌড়াইয়া দৌড়াইয়াছ দৌড়াইয়াছি দৌড়াইয়াছিল দৌড়াইয়াছিলাম দৌড়াইয়াছিলি দৌড়াইয়াছিলে দৌড়াইয়াছিলেন দৌড়াইয়াছিস দৌড়াইয়াছে দৌড়াইয়াছেন দৌড়াইয়ো দৌড়াক দৌড়াতে দৌড়াদৌড়ি দৌড়ান দৌড়ানো দৌড়াস দৌড়িব দৌড়িবি দৌড়িবে দৌড়িবেন দৌড়িবো দৌড়িয়ে দৌড়িয়েছ দৌড়িয়েছি দৌড়িয়েছিল দৌড়িয়েছিলাম দৌড়িয়েছিলি দৌড়িয়েছিলে দৌড়িয়েছিলেন দৌড়িয়েছিলেম দৌড়িয়েছিলুম দৌড়িয়েছিস দৌড়িয়েছে দৌড়িয়েছেন দৌড়ী দৌড়চ্ছ দৌড়ুচ্ছ দৌড়চ্ছি দৌড়ুচ্ছি দৌড়চ্ছিল দৌড়ুচ্ছিল দৌড়চ্ছিলাম দৌড়ুচ্ছিলাম দৌড়চ্ছিলি দৌড়ুচ্ছিলি দৌড়চ্ছিলে দৌড়ুচ্ছিলে দৌড়চ্ছিলেন দৌড়ুচ্ছিলেন দৌড়চ্ছিলেম দৌড়ুচ্ছিলেম দৌড়চ্ছিলুম দৌড়ুচ্ছিলুম দৌড়চ্ছিস দৌড়ুচ্ছিস দৌড়চ্ছে দৌড়ুচ্ছে দৌড়চ্ছেন দৌড়ুচ্ছেন দৌড়ে দৌড়েছ দৌড়েছি দৌড়েছিল দৌড়েছিলাম দৌড়েছিলি দৌড়েছিলে দৌড়েছিলেন দৌড়েছিলেম দৌড়েছিলুম দৌড়েছিস দৌড়েছে দৌড়েছেন দৌড়েরচক্র দৌড়ো দৌড়োদৌড়ি দৌড়োবার দৌড়ঝাঁপ দৌড়ত দৌড়ুত দৌড়তাম দৌড়ুতাম দৌড়তিস দৌড়ুতিস দৌড়ুতে দৌড়তেন দৌড়ুতেন দৌড়তেম দৌড়ুতেম দৌড়তুম দৌড়ুতুম দৌড়ধাপ দৌড়ন দৌড়ুন দৌড়নো দৌড়প্রতিযোগিতা দৌড়ব দৌড়ুব দৌড়বাজ দৌড়বাজি দৌড়বি দৌড়ুবি দৌড়বিদ দৌড়বীর দৌড়বে দৌড়ুবে দৌড়বেন দৌড়ুবেন দৌড়বো দৌড়ুবো দৌড়মারা দৌড়ল দৌড়ুল দৌড়লাম দৌড়ুলাম দৌড়লি দৌড়ুলি দৌড়লে দৌড়ুলে দৌড়লেন দৌড়ুলেন দৌড়লেম দৌড়ুলেম দৌড়লুম দৌড়ুলুম দৌড়স দৌড়য় দুজায়গা দজ্জাল দুজন দুজনা দ্য দ্যু দুটা দ্যা দুটাকা দ্যাখ দ্যাখা দ্যাখো দ্যাখতা দ্যাখনহাসি দুটানা দ্যাবাপৃথিবী দ্যালে দুটি দুটিভাগে দুটিমাত্র দ্যুচর দুটো দ্যো দ্যোতক দ্যোতি দ্যোতিত দ্যোতিতবদল দ্যোতনা দ্যোতনাময় দ্যোতনি দ্যূত দ্যূতকার দ্যূতকর দ্যূতক্রীড়া দ্যুতি দ্যুতিজীব দ্যুতিমান দ্যুতিময় দ্যুমণি দ্যুলোক দৃঢ়কণ্ঠ দৃঢ়কল্প দৃঢ়ীকৃত দৃঢ়ীকরণ দৃঢ়চিত্ত দৃঢ়ীভূত দৃঢ়ীভবন দৃঢ়তা দৃঢ়দেহ দৃঢ়প্রতিজ্ঞ দৃঢ়ব্রত দৃঢ়ভক্তি দৃঢ়মুষ্টি দৃঢ়সংকল্প দৃঢ়সন্ধ দৃঢ়স্বর দৃঢ়হস্ত দণ্ড দণ্ডক দুণ্ডুক দণ্ডকা দণ্ডকাক দণ্ডকারণ্য দণ্ডকারণ্যস্থ দণ্ডকাল দণ্ডকলস দণ্ডগ্রহণ দণ্ডা দণ্ডাকৃতি দণ্ডাকর দণ্ডাঘাত দণ্ডাজ্ঞা দণ্ডাদেশ দণ্ডাদণ্ডি দণ্ডার্হ দণ্ডায়মান দণ্ডি দণ্ডিত দণ্ডী দণ্ডে দণ্ড্য দণ্ডযুক্ত দণ্ডযাত্রা দণ্ডদাতা দণ্ডদান দণ্ডধারী দণ্ডধর দণ্ডন দণ্ডনায়ক দণ্ডনীতি দণ্ডনীয় দণ্ডনীয়া দণ্ডপাণি দণ্ডপারুষ্য দণ্ডপাল দণ্ডপালক দণ্ডপ্রাপ্ত দণ্ডপ্রণেতা দণ্ডবিধাতা দণ্ডবিধান দণ্ডবিধানকারী দণ্ডবিধানকর্তা দণ্ডবিধি দণ্ডবৎ দণ্ডবৎপ্রণাম দুণ্ডুভ দণ্ডভোগ দণ্ডমুণ্ড দণ্ডরায় দণ্ডসত্র দণ্ডস্থান দূত দূতাবাস দুতারা দুতালা দূতালি দূতি দূতিকা দূতিগিরি দুতিন দুতিনদিন দুতিনমিনিট দূতিয়ালি দূতী দূতীগিরি দত্যি দত্যিদানো দত্ত দত্তক দত্তকপুত্র দত্তা দত্তাত্রেয় দত্তাপহারী দুত্তোর দত্তজা দুত্তরি দত্তহারী দুতর দুতরফা দুতলা দুদু দুদিক দুদিন দুঁদিয়া দুঁদে দুদেশ দুদোক দুদণ্ড দুদ্দাড় দদ্রু দদ্রূ দদ্রুঘ্ন দুদল দুধ দুধকচু দুধকুমার দুধকমল দুধকলা দুধকুসুম্ভ দুধাপ দুধারি দুধারী দুধাল দুধালী দুধালো দধি দুধিআকন দধিকর্ম দধিছাতু দধিদুগ্ধ দধিবামন দধিমুখ দধিমঙ্গল দধিমন্থন দধিসার দধীচ দধীচি দুধেআলতা দুধেভাতে দুধেল দুধছাঁকা দুধছানা দধ্যম্ল দুধডাবা দুধঢালা দুধদাঁত দুধনিঃসারণ দুধনিঃসারণকারী দুধফেনি দুধবিয়ানি দুধভাই দুধভাত দুধভর দুধরাজ দুধরণ দুধরন দুধুল দুধুলি দুধসহযোগে দন দনু দুন দুনু দূন দনা দুনা দনারছাট দুনালা দুনি দুনিয়া দুনিয়াখ্যাত দুনিয়াজোড়া দুনিয়াদার দুনিয়াদারি দুনিয়াদারী দুনিয়াবি দুনিয়াময় দুনিয়াশুদ্ধ দুনী দুনীতি দুনো দনুজ দনুজা দনুজদলনী দনুজমর্দন দন্ত দন্তক দন্তকাষ্ঠ দন্তকচকচি দন্তাগ্র দন্তাঘাত দন্তাদন্তি দন্তাবল দন্তাল দন্তালিকা দন্তিল দন্তী দন্তচিকিৎসা দন্তচ্ছদ দন্তোদগম দন্তোন্মীলন দন্ত্য দন্তযুক্ত দন্তযুক্তা দন্ত্যধ্বনি দন্ত্যবর্ণ দন্তধাবক দন্তধাবন দন্তপংক্তি দন্তপঙক্তি দন্তপুষ্প দন্তবিকাশ দন্তবিকাশকারী দন্তবেষ্ট দন্তমাংস দন্তমজ্জা দন্তমঞ্জন দন্তমূল দন্তমূলীয় দন্তুর দন্তরুচি দন্তরোগ দন্তশূল দন্তসংলগ্ন দন্তস্ফুট দন্তহীন দুন্দুভি দুন্দুভিধ্বনি দুন্দুভিনিনাদ দুন্দুভিবাদ্য দুন্দুমার দন্দশূক দুন্ধুমার দুনম্বরি দুনম্বরী দুনলা দুনয়ন দপ দুপ দৃপ দুপক্ষ দুপাক দুপাখা দুপাটা দুপাটি দুপাশ দুপেয়ে দৃপ্ত দৃপ্তকণ্ঠ দপ্তি দৃপ্ততা দপ্তর দপ্তরখানা দপ্তরি দপ্তরিক দপ্তরী দুপদাপ দপদপ দুপদুপ দপদপানি দপ্প দপ্পন দুপর দুপুর দৃপ্র দুপুরবেলা দুপশলা দুপহর দপড়া দফ দফা দফাওয়ারি দফাদার দফানিকাশ দফারফা দফাল দুফাল দুফালি দফাশেষ দফাসারা দফেদফে দফতর দফতরখানা দফতরি দফন দফরা দুফলা দব দবকান দবকানো দবা দ্বা দুবাই দ্বাচত্বারিংশ দ্বাচত্বারিংশত্তম দ্বাচত্বারিংশত্তমী দ্বাত্রিংশ দ্বাত্রিংশত্তম দ্বাত্রিংশত্তমী দ্বাদশ দ্বাদশগুণ দ্বাদশাঙ্গুলি দ্বাদশী দ্বাদশবর্ষ দ্বাদশবর্ষীয়া দ্বাদশবর্ষব্যাপী দ্বাদশস্থানীয়া দ্বাপর দ্বাপরযুগ দ্বাবিংশ দ্বাবিংশতি দ্বাবিংশতিতম দ্বাবিংশতিতমী দুবার দ্বার দ্বারকা দ্বারকাধিপতি দ্বারকানাথ দ্বারকাপতি দ্বারকার দ্বারকেশ দ্বারা দ্বারাবতী দ্বারিক দ্বারিকা দ্বারিকানাথ দ্বারিকাপতি দ্বারী দ্বারেদ্বারে দ্বারোদঘাটন দ্বারযুক্ত দ্বারদেশ দ্বারপাল দ্বারপণ্ডিত দ্বারপ্রান্ত দ্বারবান দ্বারবতী দ্বারভাঙ্গা দ্বারমোচন দ্বাররক্ষক দ্বাররক্ষা দ্বাররক্ষী দ্বাররোধ দ্বারস্থ দ্বাষষ্টি দ্বাষষ্টিতম দ্বাষষ্টিতমী দুবাসা দ্বাসপ্ততি দ্বাসপ্ততিতম দ্বাসপ্ততিতমী দুবাহু দ্বি দ্বিকক্ষ দ্বিকাক্ষ দ্বিকর্মক দ্বিকর্মিকা দ্বিখণ্ডিত দ্বিগু দ্বিগুণ দ্বিগুণিত দ্বিগুণীকৃত দ্বিগুণত্ব দ্বিগুসমাস দুবিঘা দ্বিঘাত দ্বিচারিণী দ্বিচারণ দ্বিচেটিয়া দ্বিচন্দ্র দ্বিচরণ দ্বিচলক দ্বিজ দ্বিজগণ দ্বিজা দ্বিজাতিতত্ত্ব দ্বিজিহ্ব দ্বিজেন্দ্র দ্বিজোত্তম দ্বিজত্ব দ্বিজন্মা দ্বিজপতি দ্বিজবর দ্বিজরাজ দ্বিজশ্রেষ্ঠ দ্বিজসহ দ্বিতীয় দ্বিতীয়া দ্বিতীয়াংশ দ্বিতীয়ার্ধ দ্বিতীয়াশ্রম দ্বিতীয়োক্ত দ্বিতীয়জন দ্বিতীয়যুদ্ধ দ্বিতীয়ত দ্বিতীয়বার দ্বিতীয়বিশ্বযুদ্ধ দ্বিতন্ত্রী দ্বিতন্ত্রীভঙ্গ দ্বিত্ব দ্বিত্বতা দ্বিত্ববাচক দ্বিত্বব্যঞ্জন দ্বিত্বশব্দ দ্বিতল দ্বিদল দ্বিদলতা দ্বিধা দ্বিধাকরণ দ্বিধাখণ্ডিত দ্বিধাগ্রস্ত দ্বিধাজনক দ্বিধাজড়িত দ্বিধাদ্বন্দ্ব দ্বিধান্বিত দ্বিধাবিভক্ত দ্বিধামুক্ত দ্বিধাহীন দ্বিধাহীনতা দ্বিধীকরণ দ্বিনবতি দ্বিনবতিতম দ্বিনবতিতমী দ্বিপ দ্বিপক্ষীয় দ্বিপক্ষবাদ দ্বিপাক্ষিক দ্বিপাদ দ্বিপার্শ্বিক দ্বিপোল দ্বিপঞ্চাশৎ দ্বিপঞ্চাশত্তম দ্বিপদ দ্বিপদী দ্বিপর্যায়ী দ্বিপরমাণু দ্বিপরমাণুক দ্বিপ্রহর দ্বিপৃষ্ঠ দ্বিবার্ষিক দ্বিবিধ দ্বিবিধতা দ্বিবিধত্ব দ্বিবিভক্ত দ্বিবিভাজিত দ্বিবিভাজন দ্বিবীজ দ্বিবীজপত্র দ্বিবীজপত্রী দ্বিবচন দ্বিবন্ধন দ্বিভাজন দ্বিভাব দ্বিভাষা দ্বিভাষিক দ্বিভাষিকতা দ্বিভাষী দ্বিভুজ দ্বিমুখী দ্বিমাত্রিক দ্বিমাত্রিকতা দ্বিমাসিক দ্বিমেরু দ্বিমত দ্বিরুক্ত দ্বিরুক্তি দবিরখাস দ্বিরাগমন দ্বিরেফ দ্বিরদ দ্বিরদরদ দ্বিলিপি দ্বিলিপিরূপ দ্বিলেখ দ্বিশত দ্বিশততম দ্বিশততমী দ্বিষ্ট দ্বিষত দ্বিষৎ দ্বিস্তর দ্বিস্তরী দ্বিসপ্ততি দ্বিসপ্ততিতম দ্বিসপ্ততিতমী দ্বিস্বর দ্বিস্বরীভবন দ্বিস্বরধ্বনি দ্বিস্বরভবন দ্বিস্বরমধ্যবর্তী দ্বিসম্ভব দ্বীন দ্বীনদার দ্বীনবন্ধু দ্বীপ দ্বীপাঞ্চল দ্বীপান্তর দ্বীপান্তরিত দ্বীপী দ্বীপীয় দ্বীপদেশ দ্বীপপুঞ্জ দ্বীপবাসী দ্বীপমালা দ্বীপরাষ্ট্র দুবে দুবেলা দ্বেষ দ্বেষক দ্বেষকারী দ্বেষকরণ দ্বেষিণী দ্বেষী দ্বেষ্য দ্বেষযুক্ত দ্বেষ্টা দ্বেষণ দ্বেষশীল দ্বেষহীনতা দ্বৈত দ্বৈতাদ্বৈত দ্বৈতী দ্বৈততা দ্বৈতনীতি দ্বৈতবাদ দ্বৈতবাদী দ্বৈতবাদসম্মত দ্বৈতভূমিকা দ্বৈতশাসন দ্বৈতশব্দ দ্বৈতসংগীত দ্বৈতসঙ্গীত দ্বৈতহীন দ্বৈধ দ্বৈধীভাব দ্বৈপ দ্বৈপায়ন দ্বৈপায়নতা দ্বৈপ্য দ্বৈবার্ষিক দ্বৈবিধ্য দ্বৈভাষিকী দ্বৈমাতৃক দ্বৈরাজ্য দ্বৈরথ দ্বৈরথসমর দুবোন দ্বৌযাম দুবছর দবজ দব্জ দ্ব্যক্ষর দ্ব্যঙ্গুল দ্ব্যাত্মবাদী দ্ব্যাহিক দ্ব্যণুক দ্ব্যর্থ দ্ব্যর্থক দ্ব্যর্থবোধক দ্ব্যশীতি দ্ব্যশীতিতম দ্ব্যহ দবদব দবদবা দবদবানি দ্বন্দ্ব দ্বন্দ্বকারী দ্বন্দ্বাতীত দ্বন্দ্বী দ্বন্দ্বযুক্ত দ্বন্দ্বযুদ্ধ দ্বন্দ্বসমাস দুবন্ধু দুব্ব দুব্বা দুব্বো দুবর দুবরি দুবরী দুবলা দুবুড়া দ্বয় দ্বয়ী দুভাই দুভাগ দুভাপা দুভাবে দুভাষী দম দুম দমক দমুক দমকা দুমকা দমকাখরচ দমকল দমকলকর্মী দমকলবাহিনী দুমুখো দমা দুমা দমাই দমাইও দমাইত দমাইতাম দমাইতিস দমাইতে দমাইতেছ দমাইতেছি দমাইতেছিল দমাইতেছিলাম দমাইতেছিলি দমাইতেছিলে দমাইতেছিলেন দমাইতেছিস দমাইতেছে দমাইতেছেন দমাইতেন দমাইব দমাইবার দমাইবি দমাইবে দমাইবেন দমাইল দমাইলাম দমাইলি দমাইলে দমাইলেন দমাইয়া দমাইয়াছ দমাইয়াছি দমাইয়াছিল দমাইয়াছিলাম দমাইয়াছিলি দমাইয়াছিলে দমাইয়াছিলেন দমাইয়াছিস দমাইয়াছে দমাইয়াছেন দমাইয়ো দমাক দমাচ্ছ দমাচ্ছি দমাচ্ছিল দমাচ্ছিলাম দমাচ্ছিলি দমাচ্ছিলে দমাচ্ছিলেন দমাচ্ছিলেম দমাচ্ছিলুম দমাচ্ছিস দমাচ্ছে দমাচ্ছেন দমাত দমাতাম দমাতিস দমাতে দমাতেন দমাতেম দমাতুম দমাদ্দম দুমাদ্দুম দমাদম দুমাদুম দমান দমানো দমাব দমাবার দমাবি দমাবে দমাবেন দমাবো দমাল দমালাম দমালি দমালে দমালেন দমালেম দমালুম দমাস দুমাস দমি দমিত দমিতাম দমিতিস দমিতে দমিতেছ দমিতেছি দমিতেছিল দমিতেছিলাম দমিতেছিলি দমিতেছিলে দমিতেছিলেন দমিতেছিস দমিতেছে দমিতেছেন দমিতেন দমিব দমিবার দমিবি দমিবে দমিবেন দমিল দমিলাম দমিলি দমিলে দমিলেন দমিস দমিয়া দমিয়াছ দমিয়াছি দমিয়াছিল দমিয়াছিলাম দমিয়াছিলি দমিয়াছিলে দমিয়াছিলেন দমিয়াছিস দমিয়াছে দমিয়াছেন দমিয়ে দমিয়েছ দমিয়েছি দমিয়েছিল দমিয়েছিলাম দমিয়েছিলি দমিয়েছিলে দমিয়েছিলেন দমিয়েছিলেম দমিয়েছিলুম দমিয়েছিস দমিয়েছে দমিয়েছেন দমিয়ো দমী দুমচি দমে দমেছ দমেছি দমেছিল দমেছিলাম দমেছিলি দমেছিলে দমেছিলেন দমেছিলেম দমেছিলুম দমেছিস দমেছে দমেছেন দুমেটে দমেন দমেনি দমো দমছ দমছি দমছিল দমছিলাম দমছিলি দমছিলে দমছিলেন দমছিলেম দমছিলুম দমছিস দমছে দমছেন দম্য দুমুঠা দুমুঠো দমত দমতাম দমতিস দমতে দমতেন দমতেম দমতুম দুমদাম দমদার দমদম দুমদুম দমদমা দুমদুমি দমন দমুন দমনকারিণী দমনকারী দমনগির দমনগীর দুমনা দমনীয় দমনীয়া দমনযোগ্য দমননীতি দমনশীল দমনসাধ্য দম্প দুমপটাস দম্পতি দম্পতী দম্ফ দমফাটা দমব দুম্বা দমবাজ দমবাজি দমবার দমবাহির দমবি দমবে দমবেন দমবো দম্বদার দমবন্ধ দমবন্ধকারী দম্বল দম্ভ দম্ভক দম্ভকারী দম্ভী দম্ভোক্তি দম্ভোল দম্ভোলি দম্ভযুক্ত দম্ভন দম্ভপ্রকাশ দম্ভপ্রকাশকারী দম্ভপূর্ণ দম্ভভারে দম্ভভরে দমল দমলাম দমলি দমলে দমলেন দমলেম দমলুম দমসম দুমড় দুমড়ক দুমড়া দুমড়াই দুমড়াইও দুমড়াইত দুমড়াইতাম দুমড়াইতিস দুমড়াইতে দুমড়াইতেছ দুমড়াইতেছি দুমড়াইতেছিল দুমড়াইতেছিলাম দুমড়াইতেছিলি দুমড়াইতেছিলে দুমড়াইতেছিলেন দুমড়াইতেছিস দুমড়াইতেছে দুমড়াইতেছেন দুমড়াইতেন দুমড়াইব দুমড়াইবার দুমড়াইবি দুমড়াইবে দুমড়াইবেন দুমড়াইল দুমড়াইলাম দুমড়াইলি দুমড়াইলে দুমড়াইলেন দুমড়াইয়া দুমড়াইয়াছ দুমড়াইয়াছি দুমড়াইয়াছিল দুমড়াইয়াছিলাম দুমড়াইয়াছিলি দুমড়াইয়াছিলে দুমড়াইয়াছিলেন দুমড়াইয়াছিস দুমড়াইয়াছে দুমড়াইয়াছেন দুমড়াইয়ো দুমড়াক দুমড়ান দুমড়ানো দুমড়াল দুমড়াস দুমড়ি দুমড়িয়ে দুমড়িয়েছ দুমড়িয়েছি দুমড়িয়েছিল দুমড়িয়েছিলাম দুমড়িয়েছিলি দুমড়িয়েছিলে দুমড়িয়েছিলেন দুমড়িয়েছিলেম দুমড়িয়েছিলুম দুমড়িয়েছিস দুমড়িয়েছে দুমড়িয়েছেন দুমড়িয়ো দুমড়চ্ছ দুমড়চ্ছি দুমড়চ্ছিল দুমড়চ্ছিলাম দুমড়চ্ছিলি দুমড়চ্ছিলে দুমড়চ্ছিলেন দুমড়চ্ছিলেম দুমড়চ্ছিলুম দুমড়চ্ছিস দুমড়চ্ছে দুমড়চ্ছেন দুমড়ে দুমড়েছ দুমড়েছি দুমড়েছিল দুমড়েছিলাম দুমড়েছিলি দুমড়েছিলে দুমড়েছিলেন দুমড়েছিলেম দুমড়েছিলুম দুমড়েছিস দুমড়েছে দুমড়েছেন দুমড়ো দুমড়োবার দুমড়ত দুমড়তাম দুমড়তিস দুমড়তে দুমড়তেন দুমড়তেম দুমড়তুম দুমড়ন দুমড়নো দুমড়ব দুমড়বি দুমড়বে দুমড়বেন দুমড়বো দুমড়ল দুমড়লাম দুমড়লি দুমড়লে দুমড়লেন দুমড়লেম দুমড়লুম দুমড়স দুময় দময়িতা দময়িত্রী দময়ন্তী দর দুর দূর দরইজারা দরওয়াজা দরকাঁচা দরকার দরকারি দূরকারিণী দূরকারী দরকারমত দরকচা দুরুক্ত দুরুক্তি দুরকম দূরকরা দরকল্পনা দুরক্ষ দরকষা দরকষাকষি দুরক্ষর দরকসর দরখাস্ত দরখাস্তকারী দরখি দরখত দুর্গ দূরগ দরগা দর্গা দুর্গা দুর্গাদেবী দুর্গাধিপতি দুর্গানাম দুর্গাপূজা দুর্গাপ্রতিমা দূরগামিনী দূরগামী দুর্গামণ্ডা দুর্গামূর্তি দরগাহ দুর্গেশ দুর্গেশনন্দিনী দুর্গোৎসব দুর্গোৎসবতত্ত্ব দুর্গোমণ্ডা দরগুজার দুর্গত দুর্গতি দুর্গতিনাশিনী দুর্গন্ধ দুর্গন্ধী দুর্গন্ধযুক্ত দুর্গন্ধযুক্ততা দুর্গন্ধময় দুর্গপতি দুর্গপ্রাচীর দুর্গম দুর্গমতা দুর্গরক্ষা দুরগ্রহ দুর্গ্রহ দুর্গশির দ্রগড় দুর্ঘট দুর্ঘটনা দুর্ঘটনাক্রমে দুর্ঘটনাজনিত দুর্ঘটনাপ্রবণ দুর্ঘটনাবশত দুর্ঘটনাস্থল দরা দুরাকাঙ্ক্ষ দুরাকাঙ্ক্ষা দুরাকাঙ্ক্ষাসম্পন্ন দুরাকাঙ্ক্ষিণী দুরাকাঙ্ক্ষী দুরাক্রম দুরাক্রম্য দ্রাক্ষা দ্রাক্ষাকুঞ্জ দ্রাক্ষাফল দ্রাক্ষারস দ্রাক্ষালতা দুরাক্ষর দূরাগত দুরাগ্রহ দ্রাঘিমা দ্রাঘিমাংশ দ্রাঘিমান্তর দ্রাঘিমারেখা দ্রাঘীয়ান দুরাচার দুরাচারিণী দুরাচারী দুরাচরণীয় দরাজ দরাজগোছ দরাজগলা দরাজছাতি দরাজদিল দরাজদিলি দরাজদস্ত দরাজসিনা দরাজহাত দরাণি দুরাত্মা দরাদরি দুরাধর্ষ দরান দরানি দরানো দূরান্ত দূরান্তর দুরাপ দ্রাব দ্রাবক দ্রাবিত দ্রাবিড় দ্রাবিড়ি দ্রাবিড়ীয় দ্রাব্য দ্রাব্যতা দ্রাবণ দুরারোগ্য দুরারোধ্য দুরারোহ দুরালাপ দূরালাপনি দুরালভ দুরাশ দুরাশা দুরাশয় দুরাসদ দূরায়নী দরি দুরি দরিত দুরিত দরিদ্র দরিদ্রা দরিদ্রিত দরিদ্রোচিত দরিদ্রজীবন দরিদ্রতা দরিদ্রতর দরিদ্রনারায়ণ দরিদ্রপল্লি দরিদ্ররূপী দরিদ্রহীন দরিপ্রাণ দ্রিমদ্রিম দরিয়া দরিয়াপ্ত দরী দুরী দূরীকৃত দূরীক্রিয়মাণ দূরীকরণ দুরুচ্চার দুরুচ্চার্য দুরুচ্ছেদ দরীপ্রাণ দূরীভূত দূরীভবন দরেগ দরোজা দ্রোণ দ্রোণকাক দ্রোণাচার্য দ্রোণি দ্রোণিদল দ্রোণী দ্রোণীদল দ্রোণপুত্র দ্রোণপুষ্প দরোদর দুরোদর দরোবস্ত দ্রোহ দ্রোহকারী দ্রোহিতা দ্রোহী দরোয়ান দরোয়ানি দূরছাই দূরজ দরজা দরজাকবাট দরজাজানালা দরজাযুক্ত দর্জামতো দরজি দর্জি দরজী দুর্জ্জন দুর্জ্জয় দুর্জ্ঞেয় দুর্জ্ঞেয়তা দুরজন দুর্জন দুর্জয় দূরযায়ী দুর্যোগ দুর্যোগকাল দুর্যোগকালীন দুর্যোগপূর্ণ দুর্যোগময় দুর্যোধন দুর্যোধনাদি দ্রঢ়িষ্ঠ দ্রঢ়িষ্ঠা দ্রঢ়ীয়সী দরণ দূরত দ্রুত দ্রতগামী দ্রুতগামী দ্রুতগতি দ্রুতগতিবোধক দ্রুতগতিসম্পন্ন দূরতা দ্রুতি দুরতিক্রম দুরতিক্রম্য দুরতিক্রম্যা দুরতিক্রমণ দুরতিক্রমণীয় দুরতিক্রমণীয়া দ্রুতিসম্পন্ন দ্রুতচারী দ্রুতচাল দ্রুতজাতি দুরত্যয় দ্রুততা দ্রুততাল দ্রুততম দুরুত্তর দ্রুততর দ্রুতপদ দ্রুতপরিবহন দূরত্ব দ্রুতবেগ দূরত্বযুক্ত দূরত্বহীন দূরত্বহীনতা দ্রুতভাবে দূরতম দূরতর দরদ দরুদ দরূদ দরদা দুর্দান্ত দরদাম দূরদারাজ দরদালান দরদি দুর্দিন দরদিয়া দরদী দূরদেশ দূরদেশী দুর্দৈব দুর্দ্ধর্ষতা দরুদপাঠ দুর্দম দুর্দম্য দুর্দমনীয় দরদর দর্দুর দুরদুর দুরুদুরু দূরদূর দূরদূরান্ত দূরদূরান্তর দরদরিয়া দুর্দর্শ দূরদর্শিতা দূরদর্শী দূরদর্শন দুর্দশা দুর্দশাগ্রস্ত দুর্দশাপন্ন দুর্দশাপ্রাপ্ত দুর্দশাপ্রাপ্তি দুরদৃষ্ট দূরদৃষ্টি দূরদৃষ্টিসম্পন্ন দরদস্তুর দুর্দহন দুরধিগ দুরধিগম দুরধিগম্য দুরধিগম্যা দুরধিগম্যতা দুর্ধী দূরধীত দুরধ্যয় দুর্ধর দুর্ধর্ষ দুর্ধর্ষতা দরুন দুর্না দুর্নাম দুর্নামগ্রস্ত দরনামা দুর্নিবার দুর্নিবার্য দুর্নিমিত্ত দুর্নিরীক্ষ্য দুর্নিরোধ্য দুর্নিয়তি দুর্নীতি দুর্নীতিদমন দুর্নীতিপরায়ণ দুর্নীতিবাজ দুর্নীতিবিরোধী দুর্নীতিমুক্ত দুরন্ত দুরন্তপনা দুরন্তর দুরন্বয় দুর্নমিত দুর্নয় দর্প দর্পক দর্পকারী দরপাট্টা দর্পান্ধ দূরপাল্লা দুর্পিটা দর্পিণী দর্পিত দর্পী দর্পচূর্ণ দরপেশ দরপেস দর্পোদ্ধত দর্পযুক্ত দরপণ দর্পণ দর্পণতল দরপত্তনি দরপত্তনিদার দরপত্তনী দরপতন দরপত্র দূরপথ দরপন দর্পনাশকারী দুরপনেয় দর্পভরে দূরপ্রাচ্য দরপরদা দূরপ্রসারিত দূরপ্রসারী দুরুপস্থান দুরুপসদ দর্পহারী দর্পহর দর্পহরণ দ্রব দ্রবকারক দুরবগাহ দুরবগম দুরবগম্য দুরবগম্যা দুরবগ্রহ দূর্বা দ্রবা দুর্বাক দুর্বাক্য দূর্বাঘাস দুর্বাচ্য দূরবাণী দূর্বাদি দূর্বাদল দূর্বাদলশ্যাম দুরবাপ দরবার দুরুবার দুর্বার দরবারি দরবারী দরবারীরাগ দুর্বারণ দুর্বার্তা দূর্বাষ্টমী দুর্বাসা দুর্বাসাপ্রদত্ত দুর্বাসিত দূরবাসী দুর্বাসনা দর্বি দর্বিকা দুর্বিগাহ দরবিগলিত দ্রবিণ দুরবিন দুর্বিনীত দুর্বিনীতভাবে দুর্বিনেয় দূরবিন্দু দুর্বিনয় দুর্বিপাক দুর্বিষহ দুর্বিষহতা দূরবিস্তৃত দ্রবিড় দর্বী দ্রবীকৃত দ্রবীকরণ দূরবীক্ষণ দুর্বচন দূরবীন দ্রবীভাব দ্রবীভূত দ্রবীভবন দুরবেক্ষিত দুর্বেদ দূরবেধী দরবেশ দুর্বোধ দুর্বোধ্য দুর্বোধ্যতা দ্রব্য দ্রব্যগুণ দ্রব্যাদি দ্রব্যজাত দ্রব্যযুক্ত দ্রব্যত্যাগ দ্রব্যনির্মাতা দ্রব্যবিনিময় দুর্ব্যবহার দ্রব্যমূল্য দ্রব্যময় দ্রব্যসামগ্রী দ্রব্যসম্ভার দ্রব্যসমষ্টি দ্রবণ দ্রবণীয় দুর্বৃত্ত দুর্বৃত্তি দুর্বৃত্ততা দ্রবত্ব দুর্বৎসর দুর্বুদ্ধি দুর্বুদ্ধিগ্রস্ত দুর্বুদ্ধিযুক্ত দূরবদ্ধদৃষ্টি দরবদর দুর্বর্ণ দূরবর্তিতা দূরবর্তী দুর্বল দুর্বলকারী দুর্বলা দুর্বলচেতা দুর্বলতা দুর্বলতাজনিত দুর্বলতাযুক্ত দুর্বলতারূপ দুর্বলতম দুর্বলভাবে দুর্বলশ্রেণী দুরবস্থ দুরবস্থা দুরবস্থাযুক্ত দুরবস্থাপন্ন দুর্বহ দুর্বহতা দর্ভ দুর্ভক্ষ দুর্ভক্ষ্য দুর্ভগ দুর্ভগা দুর্ভাগা দুর্ভাগিনী দুর্ভাগী দুর্ভাগ্য দুর্ভাগ্যক্রমে দুর্ভাগ্যগ্রস্ত দুর্ভাগ্যজনক দুর্ভাগ্যজনকভাবে দুর্ভাগ্যদায়ক দুর্ভাগ্যবশত দুর্ভাগ্যসূচক দর্ভাঙ্কুর দুর্ভাবনা দুর্ভাবনাগ্রস্ত দূরভাষ দর্ভাসন দুর্ভিক্ষ দুর্ভিক্ষপীড়িত দুরভিগম্য দুরভিগ্রহ দুর্ভিতা দুরভিপ্রায় দুরভিসন্ধি দুরভিসন্ধিযুক্ত দুরভিসন্ধিপূর্ণ দুর্ভেদ দুর্ভেদ্য দুর্ভেদ্যতা দুর্ভোগ দর্ভপাণি দর্ভময় দুর্ভর দুর্ভরতা দ্রুম দুর্মুখ দুর্মুখতা দরমা দর্মা দুর্মা দরমাহা দরমাহাদার দরমিয়ান দুর্মেধা দুর্মো দুর্মোচ্য দুর্মোচ্যা দুর্মোচ্যতা দুর্মতি দুর্মদ দ্রুমদলশোভিনী দুর্মনা দুর্মনায়মান দুর্মনায়মানা দুর্মর দ্রুমরাজ দুর্মরতা দুর্মূল্য দুর্মূল্যভাতা দুরমুশ দুর্লক্ষ্য দুর্লক্ষ্যতা দুর্লক্ষণ দুর্লক্ষণা দুর্লঙ্ঘ দুর্লঙ্ঘ্য দুর্লঙ্ঘতা দুর্লেখ্য দুর্লভ দুর্লভতা দরশ দর্শ দর্শক দর্শকজনপ্রিয় দর্শকনন্দিত দর্শকপ্রিয় দর্শকপ্রিয়তা দর্শকবৃন্দ দর্শকমাত্র দর্শকমণ্ডলী দর্শকমহল দর্শকশ্রোতা দর্শকসংখ্যা দর্শা দরশাই দর্শাই দর্শাইও দর্শাইত দর্শাইতাম দর্শাইতিস দরশাইতে দর্শাইতে দর্শাইতেছ দর্শাইতেছি দর্শাইতেছিল দর্শাইতেছিলাম দর্শাইতেছিলি দর্শাইতেছিলে দর্শাইতেছিলেন দর্শাইতেছিস দর্শাইতেছে দর্শাইতেছেন দর্শাইতেন দর্শাইব দর্শাইবার দর্শাইবি দর্শাইবে দর্শাইবেন দর্শাইল দর্শাইলাম দর্শাইলি দর্শাইলে দর্শাইলেন দর্শাইয়া দর্শাইয়াছ দর্শাইয়াছি দর্শাইয়াছিল দর্শাইয়াছিলাম দর্শাইয়াছিলি দর্শাইয়াছিলে দর্শাইয়াছিলেন দর্শাইয়াছিস দর্শাইয়াছে দর্শাইয়াছেন দর্শাইয়ো দর্শাক দর্শাচ্ছ দর্শাচ্ছি দর্শাচ্ছিল দর্শাচ্ছিলাম দর্শাচ্ছিলি দর্শাচ্ছিলে দর্শাচ্ছিলেন দর্শাচ্ছিলেম দর্শাচ্ছিলুম দর্শাচ্ছিস দর্শাচ্ছে দর্শাচ্ছেন দর্শাত দর্শাতাম দর্শাতিস দর্শাতে দর্শাতেন দর্শাতেম দর্শাতুম দর্শান দর্শানো দর্শাব দর্শাবার দর্শাবি দর্শাবে দর্শাবেন দর্শাবো দরশাল দর্শাল দর্শালাম দর্শালি দর্শালে দর্শালেন দর্শালেম দর্শালুম দর্শাস দরশায় দর্শায় দরশায়নু দরশায়বি দরশায়য়ি দরশি দর্শিকা দর্শিত দর্শিয়েছে দর্শী দর্শে দর্শেছ দর্শেছি দর্শেছিল দর্শেছিলাম দর্শেছিলি দর্শেছিলে দর্শেছিলেন দর্শেছিলেম দর্শেছিলুম দর্শেছিস দর্শেছে দর্শেছেন দর্শো দরশন দর্শন দর্শনকারী দর্শনকোষ দর্শনগত দর্শনানুসারে দর্শনাভিলাষী দর্শনার্থী দর্শনি দর্শনী দর্শনচিন্তা দর্শনচেতনা দর্শনীয় দর্শনেন্দ্রিয় দর্শনযোগ্য দর্শনডারি দর্শনডারী দর্শনডালি দর্শনদান দর্শনদারি দর্শনদারী দর্শনধারা দর্শনপ্রার্থী দর্শনপ্রণেতা দর্শনবিধি দর্শনবিধিগত দর্শনবিষয়ক দর্শনভাষা দর্শনরূপ দর্শনলাভ দর্শনশাস্ত্র দর্শনশাস্ত্রজ্ঞ দর্শনশাস্ত্রবিদ দরশনহরা দূরশ্রুত দূরশ্রবণ দরশলু দর্শয়িতা দ্রষ্টা দ্রষ্টব্য দূরসংযোগ দূরসঞ্চার দুরস্ত দুরুস্ত দূরস্থ দূরস্থিত দূরস্মৃত দূরসম্পর্ক দুরূহ দ্রুহ দূরহউক দরহাম দরহাল দূরহি দূরহোক দ্রুহ্য দুর্হৃৎ দুরূহতা দুর্হৃদ দুর্হৃদয় দুরূহপাঠ্য দ্রঢ়িমা দ্রঢ়ীয়ান দল দুল দলুই দুলই দলও দুলও দলক দুলুক দলকানো দুলকি দলকচু দলকেন্দ্র দুলক্ষ দলগোষ্ঠী দলগঠন দলগত দলঘটিত দলা দুলা দলাই দুলাই দলাইও দুলাইও দলাইত দুলাইত দলাইতাম দুলাইতাম দলাইতিস দুলাইতিস দলাইতে দুলাইতে দলাইতেছ দুলাইতেছ দলাইতেছি দুলাইতেছি দলাইতেছিল দুলাইতেছিল দলাইতেছিলাম দুলাইতেছিলাম দলাইতেছিলি দুলাইতেছিলি দলাইতেছিলে দুলাইতেছিলে দলাইতেছিলেন দুলাইতেছিলেন দলাইতেছিস দুলাইতেছিস দলাইতেছে দুলাইতেছে দলাইতেছেন দুলাইতেছেন দলাইতেন দুলাইতেন দুলাইন দলাইব দুলাইব দলাইবার দুলাইবার দলাইবি দুলাইবি দলাইবে দুলাইবে দলাইবেন দুলাইবেন দলাইমলাই দলাইল দুলাইল দলাইলাম দুলাইলাম দলাইলামা দলাইলি দুলাইলি দলাইলে দুলাইলে দলাইলেন দুলাইলেন দলাইয়া দুলাইয়া দলাইয়াছ দুলাইয়াছ দলাইয়াছি দুলাইয়াছি দলাইয়াছিল দুলাইয়াছিল দলাইয়াছিলাম দুলাইয়াছিলাম দলাইয়াছিলি দুলাইয়াছিলি দলাইয়াছিলে দুলাইয়াছিলে দলাইয়াছিলেন দুলাইয়াছিলেন দলাইয়াছিস দুলাইয়াছিস দলাইয়াছে দুলাইয়াছে দলাইয়াছেন দুলাইয়াছেন দলাইয়ো দুলাইয়ো দলাও দুলাও দলাক দুলাক দলাচ্ছ দলাচ্ছি দলাচ্ছিল দলাচ্ছিলাম দলাচ্ছিলি দলাচ্ছিলে দলাচ্ছিলেন দলাচ্ছিলেম দলাচ্ছিলুম দলাচ্ছিস দলাচ্ছে দলাচ্ছেন দলাত দলাতাম দলাতিস দলাতে দলাতেন দলাতেম দলাতুম দলাদলি দলান দুলান দলানো দুলানো দলাব দলাবার দলাবি দলাবে দলাবেন দলাবো দুলাভাই দুলামিঞা দুলার দুলারি দুলারী দলাল দুলাল দলালাম দলালি দুলালী দলালে দলালেন দলালেম দলালুম দলাস দুলাস দলি দুলি দুলিচা দুলিছে দলিজ দলিজঘর দলিজা দলিত দুলিত দলিতাম দুলিতাম দলিতিস দুলিতিস দলিতে দুলিতে দলিতেছ দুলিতেছ দলিতেছি দুলিতেছি দলিতেছিল দুলিতেছিল দলিতেছিলাম দুলিতেছিলাম দলিতেছিলি দুলিতেছিলি দলিতেছিলে দুলিতেছিলে দলিতেছিলেন দুলিতেছিলেন দলিতেছিস দুলিতেছিস দলিতেছে দুলিতেছে দলিতেছেন দুলিতেছেন দলিতেন দুলিতেন দলিপ দলিব দুলিব দলিবার দুলিবার দলিবি দুলিবি দলিবে দুলিবে দলিবেন দুলিবেন দলিল দুলিল দলিলগ্রহীতা দলিলাম দুলিলাম দলিলি দুলিলি দলিলে দুলিলে দলিলেন দুলিলেন দলিলজাল দলিলদাতা দলিলদস্তাবেজ দলিলপেশ দলিলপত্র দলিলপত্রাদি দলিস দুলিস দলিয়া দুলিয়া দলিয়াছ দুলিয়াছ দলিয়াছি দুলিয়াছি দলিয়াছিল দুলিয়াছিল দলিয়াছিলাম দুলিয়াছিলাম দলিয়াছিলি দুলিয়াছিলি দলিয়াছিলে দুলিয়াছিলে দলিয়াছিলেন দুলিয়াছিলেন দলিয়াছিস দুলিয়াছিস দলিয়াছে দুলিয়াছে দলিয়াছেন দুলিয়াছেন দলিয়ে দুলিয়ে দলিয়েছ দুলিয়েছ দলিয়েছি দুলিয়েছি দলিয়েছিল দুলিয়েছিল দলিয়েছিলাম দুলিয়েছিলাম দলিয়েছিলি দুলিয়েছিলি দলিয়েছিলে দুলিয়েছিলে দলিয়েছিলেন দুলিয়েছিলেন দলিয়েছিলেম দুলিয়েছিলেম দলিয়েছিলুম দুলিয়েছিলুম দলিয়েছিস দুলিয়েছিস দলিয়েছে দুলিয়েছে দলিয়েছেন দুলিয়েছেন দলিয়ো দুলিয়ো দুলী দলচিহ্ন দুলচ্ছ দুলচ্ছি দুলচ্ছিল দুলচ্ছিলাম দুলচ্ছিলি দুলচ্ছিলে দুলচ্ছিলেন দুলচ্ছিলেম দুলচ্ছিলুম দুলচ্ছিস দুলচ্ছে দুলচ্ছেন দলচ্যুত দলীল দলীলদস্তাবেজ দলীলপত্র দলীয় দলীয়করণ দলীয়ভাবে দলেছ দুলেছ দলেছি দুলেছি দলেছিল দুলেছিল দলেছিলাম দুলেছিলাম দলেছিলি দুলেছিলি দলেছিলে দুলেছিলে দলেছিলেন দুলেছিলেন দলেছিলেম দুলেছিলেম দলেছিলুম দুলেছিলুম দলেছিস দুলেছিস দলেছে দুলেছে দলেছেন দুলেছেন দলেদলে দলেন দুলেন দুলেনী দলো দুলো দলছ দুলছ দলছাঁটা দলছাড়া দলছি দুলছি দলছিল দুলছিল দলছিলাম দুলছিলাম দলছিলি দুলছিলি দলছিলে দুলছিলে দলছিলেন দুলছিলেন দলছিলেম দুলছিলেম দলছিলুম দুলছিলুম দলছিস দুলছিস দলছে দুলছে দলছেন দুলছেন দলছুট দলুজ দলযুক্ত দুল্যমান দলত দুলত দলতাম দুলতাম দলতিস দুলতিস দলতে দুলতে দলতেন দুলতেন দলতেম দুলতেম দুলতো দলত্যাগ দলতুম দুলতুম দলদল দুলদুল দলধর্মী দলন দলুন দুলন দুলুন দলনকারিণী দলনকারী দলনায়ক দুলনি দুলুনি দলনী দলনেতা দুলনো দলনমলন দলপিপি দলপতি দলব দুলব দলবাজি দলবাঁধা দলবার দুলবার দলবি দুলবি দলবিভাজন দলবে দুলবে দলবেঁধে দলবেন দুলবেন দলবো দুলবো দলবদ্ধ দলবদ্ধভাবে দলবদল দলবল দলবলসমেত দলভুক্ত দলভিত্তিক দলভ্রষ্ট দলমাত্র দলমত দলম্মল দলমল দলল দুলল দললাম দুললাম দললি দুললি দললিপি দুল্লিল দুল্লীল দললে দুললে দললেন দুললেন দললেম দুললেম দললুম দুললুম দুলস দলসংখ্যা দলসংগঠন দুলহ দুলহা দুলহানি দুলহানিয়া দুলহিন দলহীন দুলহন দুলয় দলুয়া দশ দুশ দৃশ দশআনা দশএগারো দশক দশকিয়া দশকোষী দশকথা দশকব্যাপী দশকর্ম দশকর্মান্বিত দশকর্মভাণ্ডার দশকুশী দশগীতিকা দশগুণ দশগুণোত্তর দশা দশান্তর দশানন দশাপ্রাপ্ত দশাপ্রাপ্তি দশাবিপর্যয় দশাবতার দশাশ্ব দশাশ্বমেধ দশাসই দশাহ দশাহকৃত দশি দশী দশচক্র দুশ্চারিণী দুশ্চিকিৎসা দুশ্চিকিৎস্য দুশ্চিন্তা দুশ্চিন্তাকারী দুশ্চিন্তাগ্রস্ত দুশ্চিন্তাহীন দুশ্চিন্তিত দুশ্চেষ্টা দুশ্চেষ্টিত দুশ্চর দুশ্চরিত দুশ্চরিততা দুশ্চরিত্র দুশ্চরিত্রা দুশ্চরিত্রতা দশেক দুশো দুশ্ছেদ্য দশজন দৃশ্য দৃশ্যকাব্য দৃশ্যকরণ দৃশ্যগত দৃশ্যগ্রহণ দৃশ্যান্তর দৃশ্যাবলী দৃশ্যায়ন দৃশ্যত দৃশ্যপট দৃশ্যপটহীন দৃশ্যমান দৃশ্যরূপ দৃশ্যসংগীত দৃশ্যসঙ্গীত দৃশ্যসম্বলিত দশদিক দশদিন দশদিশ দশদিশি দশদশা দশধা দশন দশনামী দশনদন্ত দশপঁচিশ দশবাই দশবার দশবারো দশবিধ দশবল দশভাগ দশভুজা দশম দশমুখ দশমাংশ দশমাবতার দশমাস দশমিক দশমিনিট দশমী দশমীদশা দশমীস্থ দুশমন দুশমনি দশমূল দশমহাবিদ্যা দশরকম দশরত্ন দশরথ দশরথপত্নী দশরথপুত্র দশলাখ দশসালা দশসমা দশহরা দুষ দুষুক দূষক দুষ্কার্য দুষ্কার্যকারী দুষ্কাল দুষ্কৃত দুষ্কৃতকারী দুষ্কৃতকর্ম দুষ্কৃতি দুষ্কৃতিকারী দুষ্কৃতী দুষ্কর দুষ্ক্রিয় দুষ্ক্রিয়া দুষ্ক্রিয়ান্বিত দুষ্ক্রীত দুষ্কর্ম দুষ্কর্মকারী দুষ্কর্মা দুষা দুষি দূষি দূষিকা দুষিত দূষিত দূষিতা দুষিতাম দুষিতিস দুষিতে দুষিতেছ দুষিতেছি দুষিতেছিল দুষিতেছিলাম দুষিতেছিলি দুষিতেছিলে দুষিতেছিলেন দুষিতেছিস দুষিতেছে দুষিতেছেন দুষিতেন দুষিব দুষিবার দুষিবি দুষিবে দুষিবেন দুষিল দুষিলাম দুষিলি দুষিলে দুষিলেন দুষিস দুষিয়া দূষিয়া দুষিয়াছ দুষিয়াছি দুষিয়াছিল দুষিয়াছিলাম দুষিয়াছিলি দুষিয়াছিলে দুষিয়াছিলেন দুষিয়াছিস দুষিয়াছে দুষিয়াছেন দুষিয়ো দুষী দূষী দুষে দুষেছ দুষেছি দুষেছিল দুষেছিলাম দুষেছিলি দুষেছিলে দুষেছিলেন দুষেছিলেম দুষেছিলুম দুষেছিস দুষেছে দুষেছেন দুষেন দুষো দুষছ দুষছি দুষছিল দুষছিলাম দুষছিলি দুষছিলে দুষছিলেন দুষছিলেম দুষছিলুম দুষছিস দুষছে দুষছেন দষ্ট দুষ্ট দুষ্টু দূষ্য দৃষ্ট দুষ্টকে দুষ্টকর্মা দুষ্টক্ষত দুষ্টক্ষুধা দুষ্টুখিদা দুষ্টুখিদে দুষ্টুখিধা দুষ্টুখিধে দুষ্টগ্রহ দুষ্টা দৃষ্টাদৃষ্ট দৃষ্টান্ত দৃষ্টান্তবিহীন দৃষ্টান্তরূপে দৃষ্টান্তস্থল দৃষ্টান্তস্বরূপ দৃষ্টান্তসহকারে দৃষ্টান্তহীন দুষ্টামি দুষ্টাশয় দৃষ্টি দৃষ্টিকোণ দৃষ্টিকটু দৃষ্টিকৃপণ দৃষ্টিক্ষীণতা দৃষ্টিক্ষেত্র দৃষ্টিক্ষুধা দৃষ্টিক্ষমতা দৃষ্টিগোচর দৃষ্টিগ্রাহ্য দৃষ্টিচালন দৃষ্টিচালনা দৃষ্টিযুক্ত দৃষ্টিদান দৃষ্টিনিক্ষেপ দৃষ্টিনন্দন দৃষ্টিপাত দৃষ্টিপট দৃষ্টিপথ দৃষ্টিপথবর্তী দৃষ্টিপ্রদীপ দৃষ্টিবিজ্ঞান দৃষ্টিবিনিময় দৃষ্টিবিভ্রম দৃষ্টিভঙ্গি দৃষ্টিভ্রম দৃষ্টিরেখা দৃষ্টিশক্তি দৃষ্টিশোভন দৃষ্টিসুখ দৃষ্টিসাধ্য দৃষ্টিসীমা দৃষ্টিসীমানা দৃষ্টিসম্পন্ন দৃষ্টিসহায়ক দৃষ্টিহীন দৃষ্টিহীনা দৃষ্টিহীনতা দুষ্টচক্র দৃষ্টচর দুষ্টচরিত্র দৃষ্টপূর্ব দৃষ্টব্য দুষ্টবুদ্ধি দুষ্টবুদ্ধিসম্পন্ন দুষ্টব্রণ দুষ্টুমি দৃষ্টরজা দুষ্টশ্বাস দুষ্টস্বভাব দূষণ দূষণকারী দূষণীয় দুষত দুষতাম দুষতিস দুষতে দুষতেন দুষতেম দুষতুম দুষুন দুষ্পাচ্য দুষ্পাচ্যতা দুষ্পাঠ্য দুষ্পচ দুষ্পূর দুষ্পরাজেয় দুষ্পরাজয় দুষ্প্রাপ দুষ্প্রাপ্য দুষ্প্রাপ্যতা দুষ্প্রাপ্যতাজনিত দুষ্পরিহার্য দুষ্পরিহর দুষ্পূরণীয় দুষ্প্রধর্ষ দুষ্প্রধর্ষণীয় দুষ্প্রবেশ দুষ্প্রবেশ্য দুষ্প্রবৃত্তি দুষ্প্রমেয় দুষ্প্রমেয়তা দুষ্পর্শ দুষ্প্রসহ দুষ্প্রসহনীয় দুষব দুষবি দুষবে দুষবেন দুষবো দুষমন দুষমনি দুষল দুষলাম দুষলি দুষলে দুষলেন দুষলেম দুষলুম দূষয়িতা দুস দুসেট দুসের দস্যু দস্যি দস্যিপনা দস্যুতা দস্যুদল দস্যুবৃত্তি দস্তক দস্তখত দস্তখৎ দস্তখতী দস্তা দস্তানা দস্তানারূপে দস্তাবিজ দস্তাবেজ দস্তারবন্দী দুসুতি দুস্তি দস্তিদার দুসুতী দুস্ত্যজ দস্তমুবারক দস্তুর দুস্তর দস্তরখান দস্তরখানা দস্তরি দস্তুরি দস্তুরী দুস্তরতা দস্তুরমাফিক দস্তুরমত দস্তুরমতো দুস্থ দুস্থিত দুস্থিতি দুসন্ধ্যা দুস্পর্শ দুসর দুসরা দুসরী দুসলি দহ দহু দুহ দুহু দুহুঁ দুঁহ দুঁহু দুঁহুঁ দহই দহুক দহা দুহা দুহাঁ দুঁহা দুহাকার দুহাঁকার দুঁহাকার দুহাজার দুহাত দুহাতিয়া দুহাত্তা দুহাথিয়া দুহান দুহানো দুঁহার দুহারা দুহারী দহি দুহি দহিও দুহিও দহিত দুহিত দুহিতা দহিতাম দুহিতাম দহিতিস দুহিতিস দহিতে দুহিতে দহিতেছ দুহিতেছ দহিতেছি দুহিতেছি দহিতেছিল দুহিতেছিল দহিতেছিলাম দুহিতেছিলাম দহিতেছিলি দুহিতেছিলি দহিতেছিলে দুহিতেছিলে দহিতেছিলেন দুহিতেছিলেন দহিতেছিস দুহিতেছিস দহিতেছে দুহিতেছে দহিতেছেন দুহিতেছেন দহিতেন দুহিতেন দহিব দুহিব দহিবার দুহিবার দহিবি দুহিবি দহিবে দুহিবে দহিবেন দুহিবেন দহিল দুহিল দহিলাম দুহিলাম দহিলি দুহিলি দহিলে দুহিলে দহিলেন দুহিলেন দহিস দুহিস দহিয়া দুহিয়া দহিয়াছ দুহিয়াছ দহিয়াছি দুহিয়াছি দহিয়াছিল দুহিয়াছিল দহিয়াছিলাম দুহিয়াছিলাম দহিয়াছিলি দুহিয়াছিলি দহিয়াছিলে দুহিয়াছিলে দহিয়াছিলেন দুহিয়াছিলেন দহিয়াছিস দুহিয়াছিস দহিয়াছে দুহিয়াছে দহিয়াছেন দুহিয়াছেন দহিয়াল দুহিয়ে দুহিয়েছ দুহিয়েছি দুহিয়েছিল দুহিয়েছিলাম দুহিয়েছিলি দুহিয়েছিলে দুহিয়েছিলেন দুহিয়েছিলেম দুহিয়েছিলুম দুহিয়েছিস দুহিয়েছে দুহিয়েছেন দহিয়ো দুহিয়ো দহে দুহে দহেন দুহেন দুহ্য দহ্যমান দুহ্যমান দুহ্যমানা দহন দহুন দহনকারী দহনক্রিয়া দহনীয় দহনযোগ্য দহনবায়ু দহর দহরম দহরমমহরম দহল দহলা দহলানহ্লা দহলিজ দহশত দহসি দহসত দড় দড়কা দড়কাঁচা দড়কচা দড়কচ্চা দড়া দুড়া দড়াদড়ি দড়ান দড়ানো দড়াম দড়ি দড়িকাটা দড়িকলসি দড়িছেঁড়া দড়িদড়া দড়ী দড়ো দুড়দাড় দুড়দুড় দড়বেলা দড়বড় দড়বড়ি দুড়ুম দড়মা দুড়ুমদুড়ুম দঢ় দৃঢ় দৃঢ়কায় দৃঢ়গ্রন্থি দঢ়ান দঢ়ানো দৃঢ়চেতা দৃঢ়তাব্যঞ্জক দৃঢ়তম দৃঢ়তর দৃঢ়প্রতিজ্ঞা দৃঢ়প্রত্যয় দৃঢ়বদ্ধ দৃঢ়বন্ধন দৃঢ়ভাব দৃঢ়ভাবে দৃঢ়ভিত্তি দৃঢ়মূল দৃঢ়রূপ দৃঢ়রূপে দৃঢ়সন্ধি দয় দয়া দুয়া দয়াগুণ দুয়াজ দুয়াজি দয়াদাক্ষিণ্য দুয়াদশ দয়াধর্ম দুয়ানি দুয়াপতি দয়াপূর্ণ দয়াপরতন্ত্র দয়াপ্রদর্শন দয়াপরবশ দুয়াব দয়াবান দয়াবতী দয়ামায়া দয়ামায়াহীন দয়াময় দয়াময়ী দুয়ার দুয়ারি দুয়ারী দয়ার্দ্র দয়াল দয়ালু দয়াশীল দয়াশীলা দয়াশীলতা দয়াহীন দয়িত দয়িতা দয়ে দুয়ে দুয়েক দুয়েছ দুয়েছি দুয়েছিল দুয়েছিলাম দুয়েছিলি দুয়েছিলে দুয়েছিলেন দুয়েছিলেম দুয়েছিলুম দুয়েছিস দুয়েছে দুয়েছেন দুয়েম দয়েমজান দুয়েমজমি দুয়েরো দয়েল দুয়ো দুয়োধ্বনি দুয়োর দুয়োরাণী দুয়োরানী দুয়জ দুয়নি দুয়ম".split(" "),
              w_dh: "ধ ধু ধুই ধুইও ধইঞ্চা ধুইত ধুইতাম ধুইতিস ধুইতে ধুইতেছ ধুইতেছি ধুইতেছিল ধুইতেছিলাম ধুইতেছিলি ধুইতেছিলে ধুইতেছিলেন ধুইতেছিস ধুইতেছে ধুইতেছেন ধুইতেন ধুইব ধুইবার ধুইবি ধুইবে ধুইবেন ধইরা ধুইল ধুইলাম ধুইলি ধুইলে ধুইলেন ধুইয়া ধুইয়াছ ধুইয়াছি ধুইয়াছিল ধুইয়াছিলাম ধুইয়াছিলি ধুইয়াছিলে ধুইয়াছিলেন ধুইয়াছিস ধুইয়াছে ধুইয়াছেন ধুইয়ে ধুইয়েছ ধুইয়েছি ধুইয়েছিল ধুইয়েছিলাম ধুইয়েছিলি ধুইয়েছিলে ধুইয়েছিলেন ধুইয়েছিলেম ধুইয়েছিলুম ধুইয়েছিস ধুইয়েছে ধুইয়েছেন ধুইয়ো ধক ধুক ধুঁক ধুঁকুক ধুকা ধুঁকা ধুঁকি ধুঁকিত ধুঁকিতাম ধুঁকিতিস ধুঁকিতে ধুঁকিতেছ ধুঁকিতেছি ধুঁকিতেছিল ধুঁকিতেছিলাম ধুঁকিতেছিলি ধুঁকিতেছিলে ধুঁকিতেছিলেন ধুঁকিতেছিস ধুঁকিতেছে ধুঁকিতেছেন ধুঁকিতেন ধুঁকিব ধুঁকিবার ধুঁকিবি ধুঁকিবে ধুঁকিবেন ধুঁকিল ধুঁকিলাম ধুঁকিলি ধুঁকিলে ধুঁকিলেন ধুঁকিস ধুঁকিয়া ধুঁকিয়াছ ধুঁকিয়াছি ধুঁকিয়াছিল ধুঁকিয়াছিলাম ধুঁকিয়াছিলি ধুঁকিয়াছিলে ধুঁকিয়াছিলেন ধুঁকিয়াছিস ধুঁকিয়াছে ধুঁকিয়াছেন ধুঁকিয়ো ধুঁকে ধুঁকেছ ধুঁকেছি ধুঁকেছিল ধুঁকেছিলাম ধুঁকেছিলি ধুঁকেছিলে ধুঁকেছিলেন ধুঁকেছিলেম ধুঁকেছিলুম ধুঁকেছিস ধুঁকেছে ধুঁকেছেন ধুঁকেন ধুঁকো ধুঁকছ ধুঁকছি ধুঁকছিল ধুঁকছিলাম ধুঁকছিলি ধুঁকছিলে ধুঁকছিলেন ধুঁকছিলেম ধুঁকছিলুম ধুঁকছিস ধুকছে ধুঁকছে ধুঁকছেন ধুঁকত ধুঁকতাম ধুঁকতিস ধুঁকতে ধুঁকতেন ধুঁকতেম ধুঁকতুম ধকধক ধুকধুক ধকধকানি ধুকধুকানি ধকধকানো ধুকধুকি ধুকধুকী ধুঁকুন ধুঁকনি ধুঁকুনি ধুকপুক ধুকপুকানি ধুকপুকুনি ধুঁকব ধুঁকবি ধুঁকবে ধুঁকবেন ধুঁকবো ধুকুরপুকুর ধকল ধুঁকল ধুঁকলাম ধুঁকলি ধুঁকলে ধুঁকলেন ধুঁকলেম ধুঁকলুম ধুকড়ি ধা ধাঁ ধাই ধাঁই ধাইও ধাইত ধাইতাম ধাইতিস ধাইতে ধাইতেছ ধাইতেছি ধাইতেছিল ধাইতেছিলাম ধাইতেছিলি ধাইতেছিলে ধাইতেছিলেন ধাইতেছিস ধাইতেছে ধাইতেছেন ধাইতেন ধাইতেলা ধাইব ধাইবার ধাইবি ধাইবে ধাইবেন ধাইমা ধাইল ধাইলাম ধাইলি ধাইলে ধাইলেন ধাইয়া ধাইয়াছ ধাইয়াছি ধাইয়াছিল ধাইয়াছিলাম ধাইয়াছিলি ধাইয়াছিলে ধাইয়াছিলেন ধাইয়াছিস ধাইয়াছে ধাইয়াছেন ধাইয়ো ধাউত ধাউর ধাউস ধাউড় ধাউড়িয়া ধাও ধাওলা ধাওড়া ধাওড়ী ধাওয়া ধাওয়ান ধাওয়ানো ধাক্কা ধাক্কাচ্ছ ধাক্কাধাক্কি ধাক্কানো ধাকড়া ধাগা ধাগড়া ধাঙ ধাঙ্গড় ধাঙসা ধাঙড় ধাঙড়ী ধাঁচ ধাঁচা ধাচ্ছ ধাচ্ছি ধাচ্ছিল ধাচ্ছিলাম ধাচ্ছিলি ধাচ্ছিলে ধাচ্ছিলেন ধাচ্ছিলেম ধাচ্ছিলুম ধাচ্ছিস ধাচ্ছে ধাচ্ছেন ধাঁজ ধাঢী ধাত ধাতু ধাতকান ধাতকী ধাতুকোষ ধাতুকল্প ধাতুকুশল ধাতুক্ষয় ধাতুখণ্ড ধাতুগোলক ধাতুগত ধাতুগর্ভ ধাতুঘটিত ধাতুঘ্ন ধাতা ধাতান ধাতানি ধাতানো ধাতি ধাতুতে ধাতুদৌর্বল্য ধাতুদ্রাবক ধাতুদ্রাবিকা ধাতুদ্রব্য ধাতুদ্রব্যাদি ধাতুনাশক ধাতুনির্মিত ধাতুপ ধাতুপাঠ ধাতুপাত ধাতুপাত্র ধাতুপিণ্ড ধাতুপোষক ধাতুপদার্থ ধাতুপূর্ণ ধাতুপ্রত্যয় ধাতুপল ধাতুপুষ্প ধাতুপুষ্পিকা ধাতুফলক ধাতব ধাতুবিজ্ঞান ধাতুবিদ ধাতুবিদ্যা ধাতুবৈরী ধাতবপ্রকৃতি ধাতবস্বর ধাতুভৃৎ ধাতুমারিণী ধাতুমুদ্রা ধাতুমল ধাতুময় ধাত্র ধাত্রিকা ধাত্রী ধাত্রীগ্রাম ধাত্রীদেবতা ধাত্রীফল ধাত্রীবিদ্যা ধাত্রীভূমি ধাত্রেয়িকা ধাত্রেয়ী ধাতুরূপ ধাতুশিল্প ধাতুসাম্য ধাতস্থ ধাতুস্থ ধাতসহ ধাঁদ ধাঁদা ধাঁদি ধাঁদিত ধাঁদিতাম ধাঁদিতিস ধাঁদিতে ধাঁদিতেছ ধাঁদিতেছি ধাঁদিতেছিল ধাঁদিতেছিলাম ধাঁদিতেছিলি ধাঁদিতেছিলে ধাঁদিতেছিলেন ধাঁদিতেছিস ধাঁদিতেছে ধাঁদিতেছেন ধাঁদিতেন ধাঁদিব ধাঁদিবার ধাঁদিবি ধাঁদিবে ধাঁদিবেন ধাঁদিল ধাঁদিলাম ধাঁদিলি ধাঁদিলে ধাঁদিলেন ধাঁদিস ধাঁদিয়া ধাঁদিয়াছ ধাঁদিয়াছি ধাঁদিয়াছিল ধাঁদিয়াছিলাম ধাঁদিয়াছিলি ধাঁদিয়াছিলে ধাঁদিয়াছিলেন ধাঁদিয়াছিস ধাঁদিয়াছে ধাঁদিয়াছেন ধাঁদিয়ো ধাঁদে ধাঁদেন ধাঁদছি ধাঁদছিল ধাঁদছিলাম ধাঁদছিলি ধাঁদছিলে ধাঁদছিলেন ধাঁদছিলেম ধাঁদছিলুম ধাঁদছিস ধাঁদছে ধাঁদছেন ধাঁদত ধাঁদতাম ধাঁদতিস ধাঁদতে ধাঁদতেন ধাঁদতেম ধাঁদতুম ধাঁদুন ধাঁদব ধাঁদবার ধাঁদবি ধাঁদবে ধাঁদবেন ধাঁদবো ধাঁদল ধাঁদলাম ধাঁদলি ধাঁদলে ধাঁদলেন ধাঁদলেম ধাঁদলুম ধাঁধা ধাঁধাঁ ধাঁধান ধাঁধানো ধান ধানক ধানুকি ধানুকী ধানকুটনি ধানকন্যা ধানকমল ধানক্ষেত ধানগাছ ধানগড়া ধানাইপানাই ধানি ধানিকী ধানিজমি ধানিলংকা ধানিলঙ্কা ধানী ধানচাল ধানঝাড়া ধান্য ধান্যক ধান্যক্ষেত্র ধান্যাক ধান্যাদি ধান্যারি ধান্যাস্থি ধান্যচমস ধান্যে ধান্যেশ্বরী ধান্যত্বক ধান্যপঞ্চক ধান্যবীজ ধান্যবীর ধান্যবপন ধান্যম্ল ধান্যরাজ ধান্যরাশি ধান্যশীর্ষক ধান্দ ধান্দা ধানদুব্বো ধানদূর্বা ধান্ধা ধাননেড়ে ধানপালা ধানবাড়ি ধানভানা ধানভানতে ধানমাড়াই ধানশি ধানুষ্ক ধানসি ধানসিদ্ধ ধানসিঁড়ি ধানসমেত ধাপ ধাপা ধাপার ধাপে ধাপেধাপে ধাপযুক্ত ধাপধাড়া ধাপ্পা ধাপ্পাবাজ ধাপ্পাবাজি ধাপুসধুপুস ধাপড়া ধাপড়ানো ধাব ধাবক ধাবকা ধাবকি ধাবাধাবি ধাবার ধাবি ধাবিকা ধাবিত ধাবিতা ধাবে ধাবেন ধাবন ধাবনকারী ধাবনকুর্দন ধাবমান ধাবড়া ধাবড়ান ধাবড়ানো ধাম ধামগুজারি ধামা ধামাচাপা ধামাধামা ধামাধরা ধামানগর ধামার ধামারি ধামাল ধামালি ধামালী ধামি ধামী ধামন ধামনা ধামনিক ধামনিকী ধামনী ধামরাই ধামসা ধামসাই ধামসাইও ধামসাইত ধামসাইতাম ধামসাইতিস ধামসাইতে ধামসাইতেছ ধামসাইতেছি ধামসাইতেছিল ধামসাইতেছিলাম ধামসাইতেছিলি ধামসাইতেছিলে ধামসাইতেছিলেন ধামসাইতেছিস ধামসাইতেছে ধামসাইতেছেন ধামসাইতেন ধামসাইব ধামসাইবার ধামসাইবি ধামসাইবে ধামসাইবেন ধামসাইল ধামসাইলাম ধামসাইলি ধামসাইলে ধামসাইলেন ধামসাইয়া ধামসাইয়াছ ধামসাইয়াছি ধামসাইয়াছিল ধামসাইয়াছিলাম ধামসাইয়াছিলি ধামসাইয়াছিলে ধামসাইয়াছিলেন ধামসাইয়াছিস ধামসাইয়াছে ধামসাইয়াছেন ধামসাইয়ো ধামসাও ধামসাক ধামসাচ্ছ ধামসাচ্ছি ধামসাচ্ছিল ধামসাচ্ছিলাম ধামসাচ্ছিলি ধামসাচ্ছিলে ধামসাচ্ছিলেন ধামসাচ্ছিলেম ধামসাচ্ছিলুম ধামসাচ্ছিস ধামসাচ্ছে ধামসাচ্ছেন ধামসাত ধামসাতাম ধামসাতিস ধামসাতে ধামসাতেন ধামসাতেম ধামসাতুম ধামসান ধামসানি ধামসানো ধামসাব ধামসাবার ধামসাবি ধামসাবে ধামসাবেন ধামসাবো ধামসাল ধামসালাম ধামসালি ধামসালে ধামসালেন ধামসালেম ধামসালুম ধামসাস ধামসে ধামসেছ ধামসেছি ধামসেছিল ধামসেছিলাম ধামসেছিলি ধামসেছিলে ধামসেছিলেন ধামসেছিলেম ধামসেছিলুম ধামসেছিস ধামসেছে ধামসেছেন ধামসো ধার ধারওয়ালা ধারক ধারুক ধারকতা ধারকত্ব ধারকর্জ ধারা ধারাঅনুযায়ী ধারাকদম্ব ধারাক্রম ধারাগৃহ ধারাঙ্কুর ধারাঙ্গ ধারাজল ধারাযুক্ত ধারাযন্ত্র ধারাধর ধারানিবদ্ধ ধারানো ধারানুযায়ী ধারাপাত ধারাপতন ধারাপূর্ব ধারাবাহিক ধারাবাহিকতা ধারাবাহিকতাহীন ধারাবাহিকভাবে ধারাবাহিতা ধারাবাহী ধারাবিকল্প ধারাবিবরণী ধারাবিষ ধারাবর্ণনা ধারাবর্ষ ধারাবর্ষণ ধারাভাষ্য ধারাভাষ্যকার ধারাল ধারালো ধারাসার ধারাসম্পাত ধারি ধারিণী ধারিত ধারিতাম ধারিতিস ধারিতে ধারিতেছ ধারিতেছি ধারিতেছিল ধারিতেছিলাম ধারিতেছিলি ধারিতেছিলে ধারিতেছিলেন ধারিতেছিস ধারিতেছে ধারিতেছেন ধারিতেন ধারিব ধারিবার ধারিবি ধারিবে ধারিবেন ধারিল ধারিলাম ধারিলি ধারিলে ধারিলেন ধারিস ধারিয়া ধারিয়াছ ধারিয়াছি ধারিয়াছিল ধারিয়াছিলাম ধারিয়াছিলি ধারিয়াছিলে ধারিয়াছিলেন ধারিয়াছিস ধারিয়াছে ধারিয়াছেন ধারিয়ো ধারী ধারে ধারেকাছে ধারেন ধারছ ধারছি ধারছিল ধারছিলাম ধারছিলি ধারছিলে ধারছিলেন ধারছিলেম ধারছিলুম ধারছিস ধারছে ধারছেন ধার্য ধারযুক্ত ধার্যমাণ ধারণ ধারণকারিণী ধারণকারী ধারণকৃত ধারণক্ষম ধারণক্ষমতা ধারণক্ষমতাসম্পন্ন ধারণা ধারণাগত ধারণাতীত ধারণাভিত্তিক ধারণামতে ধারণাশক্তি ধারণীয় ধারণযোগ্য ধারণব্যবস্থা ধারণশীল ধারত ধারতাম ধারতিস ধারতে ধারতেন ধারতেম ধারতুম ধার্তরাষ্ট্র ধারদেনা ধারদুটি ধারধারা ধারধোর ধারনা ধারনাকেন্দ্রিক ধারনাগত ধারনাভিত্তিক ধারনামতে ধারব ধারবান ধারবার ধারবি ধারবে ধারবেন ধারবো ধার্মিক ধার্মিকা ধার্মিকী ধার্মিকতা ধার্মিকপ্রবর ধারল ধারলাম ধারলি ধারলে ধারলেন ধারলেম ধারলুম ধার্ষ্টামি ধার্ষ্টামো ধার্ষ্ট্য ধারুয়া ধারয়িতা ধারয়িত্রী ধারয়িষ্ণু ধাড়া ধাড়ি ধাড়ী ধায় ধিক ধিককার ধিক্কার ধিক্কৃত ধিকাধিক ধিকিধিকি ধিকধিক ধিঙ্গি ধিঙ্গিনাচ ধিঙ্গিপনা ধিঙ্গী ধিঙি ধিঙিনাচ ধিঙিপনা ধিৎকার ধিন ধিনতাধিন ধিনধিন ধিমা ধিমে ধী ধীগুণ ধুচ্ছ ধুচ্ছি ধুচ্ছিল ধুচ্ছিলাম ধুচ্ছিলি ধুচ্ছিলে ধুচ্ছিলেন ধুচ্ছিলেম ধুচ্ছিলুম ধুচ্ছিস ধুচ্ছে ধুচ্ছেন ধীত ধীদীপ্ত ধুচন ধুচনি ধুচুনি ধুচনিটুপি ধুচুনিটুপি ধুচুনির ধীবর ধীবরকন্যা ধীবরী ধীমান ধীমতী ধীর ধীরগামিনী ধীরগামী ধীরগতি ধীরগতিসম্পন্ন ধীরগতিসম্পন্না ধীরগমন ধীরা ধীরাধীরা ধীরি ধীরিধীরি ধীরচিত্ত ধীরচলন ধীরে ধীরেধীরে ধীরেসুস্থে ধীরোদাত্ত ধীরোদ্ধত ধীরতা ধীরত্ব ধীরতম ধীরপ্রশান্ত ধীরভাব ধীরললিত ধীরস্বভাব ধীশক্তি ধীশক্তিসম্পন্ন ধীসচিব ধীসম্পন্ন ধীহারা ধেআই ধেআন ধেইধেই ধেঞা ধেঞান ধেৎ ধেঁদে ধেঁদেছ ধেঁদেছি ধেঁদেছিল ধেঁদেছিলাম ধেঁদেছিলি ধেঁদেছিলে ধেঁদেছিলেন ধেঁদেছিলেম ধেঁদেছিলুম ধেঁদেছিস ধেঁদেছে ধেঁদেছেন ধেঁদো ধেনু ধেনো ধেনুদুগ্ধ ধেনুমক্ষিকা ধেনুষ্যা ধেবড়া ধেবড়াই ধেবড়াইও ধেবড়াইত ধেবড়াইতাম ধেবড়াইতিস ধেবড়াইতে ধেবড়াইতেছ ধেবড়াইতেছি ধেবড়াইতেছিল ধেবড়াইতেছিলাম ধেবড়াইতেছিলি ধেবড়াইতেছিলে ধেবড়াইতেছিলেন ধেবড়াইতেছিস ধেবড়াইতেছে ধেবড়াইতেছেন ধেবড়াইতেন ধেবড়াইব ধেবড়াইবার ধেবড়াইবি ধেবড়াইবে ধেবড়াইবেন ধেবড়াইল ধেবড়াইলাম ধেবড়াইলি ধেবড়াইলে ধেবড়াইলেন ধেবড়াইয়া ধেবড়াইয়াছ ধেবড়াইয়াছি ধেবড়াইয়াছিল ধেবড়াইয়াছিলাম ধেবড়াইয়াছিলি ধেবড়াইয়াছিলে ধেবড়াইয়াছিলেন ধেবড়াইয়াছিস ধেবড়াইয়াছে ধেবড়াইয়াছেন ধেবড়াইয়ো ধেবড়াও ধেবড়াক ধেবড়াচ্ছ ধেবড়াচ্ছি ধেবড়াচ্ছিল ধেবড়াচ্ছিলাম ধেবড়াচ্ছিলি ধেবড়াচ্ছিলে ধেবড়াচ্ছিলেন ধেবড়াচ্ছিলেম ধেবড়াচ্ছিলুম ধেবড়াচ্ছিস ধেবড়াচ্ছে ধেবড়াচ্ছেন ধেবড়াত ধেবড়াতাম ধেবড়াতিস ধেবড়াতে ধেবড়াতেন ধেবড়াতেম ধেবড়াতুম ধেবড়ান ধেবড়ানো ধেবড়াব ধেবড়াবার ধেবড়াবি ধেবড়াবে ধেবড়াবেন ধেবড়াবো ধেবড়াল ধেবড়ালাম ধেবড়ালি ধেবড়ালে ধেবড়ালেন ধেবড়ালেম ধেবড়ালুম ধেবড়াস ধেবড়ায় ধেবড়ে ধেবড়েছ ধেবড়েছি ধেবড়েছিল ধেবড়েছিলাম ধেবড়েছিলি ধেবড়েছিলে ধেবড়েছিলেন ধেবড়েছিলেম ধেবড়েছিলুম ধেবড়েছিস ধেবড়েছে ধেবড়েছেন ধেবড়ো ধেরে ধেরেছ ধেরেছি ধেরেছিল ধেরেছিলাম ধেরেছিলি ধেরেছিলে ধেরেছিলেন ধেরেছিলেম ধেরেছিলুম ধেরেছিস ধেরেছে ধেরেছেন ধেরেধেরে ধেরো ধেড়া ধেড়াই ধেড়াইও ধেড়াইত ধেড়াইতাম ধেড়াইতিস ধেড়াইতে ধেড়াইতেছ ধেড়াইতেছি ধেড়াইতেছিল ধেড়াইতেছিলাম ধেড়াইতেছিলি ধেড়াইতেছিলে ধেড়াইতেছিলেন ধেড়াইতেছিস ধেড়াইতেছে ধেড়াইতেছেন ধেড়াইতেন ধেড়াইব ধেড়াইবার ধেড়াইবি ধেড়াইবে ধেড়াইবেন ধেড়াইল ধেড়াইলাম ধেড়াইলি ধেড়াইলে ধেড়াইলেন ধেড়াইয়া ধেড়াইয়াছ ধেড়াইয়াছি ধেড়াইয়াছিল ধেড়াইয়াছিলাম ধেড়াইয়াছিলি ধেড়াইয়াছিলে ধেড়াইয়াছিলেন ধেড়াইয়াছিস ধেড়াইয়াছে ধেড়াইয়াছেন ধেড়াইয়ো ধেড়াক ধেড়াচ্ছ ধেড়াচ্ছি ধেড়াচ্ছিল ধেড়াচ্ছিলাম ধেড়াচ্ছিলি ধেড়াচ্ছিলে ধেড়াচ্ছিলেন ধেড়াচ্ছিলেম ধেড়াচ্ছিলুম ধেড়াচ্ছিস ধেড়াচ্ছে ধেড়াচ্ছেন ধেড়াত ধেড়াতাম ধেড়াতিস ধেড়াতে ধেড়াতেন ধেড়াতেম ধেড়াতুম ধেড়ান ধেড়ানো ধেড়াব ধেড়াবার ধেড়াবি ধেড়াবে ধেড়াবেন ধেড়াবো ধেড়াল ধেড়ালাম ধেড়ালি ধেড়ালে ধেড়ালেন ধেড়ালেম ধেড়ালুম ধেড়াস ধেড়ি ধেড়িয়ে ধেড়িয়েছ ধেড়িয়েছি ধেড়িয়েছিল ধেড়িয়েছিলাম ধেড়িয়েছিলি ধেড়িয়েছিলে ধেড়িয়েছিলেন ধেড়িয়েছিলেম ধেড়িয়েছিলুম ধেড়িয়েছিস ধেড়িয়েছে ধেড়িয়েছেন ধেড়িয়ো ধেড়ে ধেয় ধেয়া ধেয়ান ধেয়ানি ধেয়ানী ধেয়ানো ধেয়ে ধেয়েছ ধেয়েছি ধেয়েছিল ধেয়েছিলাম ধেয়েছিলি ধেয়েছিলে ধেয়েছিলেন ধেয়েছিলেম ধেয়েছিলুম ধেয়েছিস ধেয়েছে ধেয়েছেন ধেয়ো ধৈনুক ধৈবত ধৈরজ ধৈরয ধৈর্য ধৈর্যাবলম্বন ধৈর্যচ্যুত ধৈর্যচ্যুতি ধৈর্যধারণ ধৈর্যবান ধৈর্যবতী ধৈর্যময়ী ধৈর্যশালিনী ধৈর্যশালী ধৈর্যশীল ধৈর্যশীলা ধৈর্যহানি ধৈর্যহারা ধৈর্যহীন ধোও ধোওয়া ধোঁওয়া ধোঁক ধোঁকা ধোঁকাবাজ ধোঁকাবাজি ধোঁকে ধোঁকেন ধোঁকবার ধোকড় ধোকড়া ধোচনা ধোনকার ধোনা ধোনার ধোনে ধোপ ধোপা ধোপানী ধোপার ধোপদোরস্ত ধোপদুরস্ত ধোপদস্ত ধোব ধোবানী ধোবার ধোবি ধোবিখানা ধোবী ধোবে ধোবেন ধোবো ধোরিত ধোরণ ধোলাই ধোলাইখাল ধোস ধোসা ধোড়া ধোয় ধোয়া ধোঁয়া ধোয়াই ধোয়াইও ধোয়াইত ধোয়াইতাম ধোয়াইতিস ধোয়াইতে ধোয়াইতেছ ধোয়াইতেছি ধোয়াইতেছিল ধোয়াইতেছিলাম ধোয়াইতেছিলি ধোয়াইতেছিলে ধোয়াইতেছিলেন ধোয়াইতেছিস ধোয়াইতেছে ধোয়াইতেছেন ধোয়াইতেন ধোয়াইব ধোয়াইবার ধোয়াইবি ধোয়াইবে ধোয়াইবেন ধোয়াইল ধোয়াইলাম ধোয়াইলি ধোয়াইলে ধোয়াইলেন ধোয়াইয়া ধোয়াইয়াছ ধোয়াইয়াছি ধোয়াইয়াছিল ধোয়াইয়াছিলাম ধোয়াইয়াছিলি ধোয়াইয়াছিলে ধোয়াইয়াছিলেন ধোয়াইয়াছিস ধোয়াইয়াছে ধোয়াইয়াছেন ধোয়াইয়ো ধোয়াও ধোয়াক ধোয়াচ্ছ ধোয়াচ্ছি ধোয়াচ্ছিল ধোয়াচ্ছিলাম ধোয়াচ্ছিলি ধোয়াচ্ছিলে ধোয়াচ্ছিলেন ধোয়াচ্ছিলেম ধোয়াচ্ছিলুম ধোয়াচ্ছিস ধোয়াচ্ছে ধোয়াচ্ছেন ধোয়াট ধোঁয়াট ধোঁয়াটে ধোয়াত ধোয়াতাম ধোয়াতিস ধোয়াতে ধোঁয়াতে ধোয়াতেন ধোয়াতেম ধোয়াতুম ধোয়ান ধোয়ানি ধোয়ানো ধোঁয়ানো ধোয়ানোটা ধোয়াপোঁছা ধোয়াব ধোয়াবার ধোয়াবি ধোঁয়াবিহীন ধোয়াবে ধোয়াবেন ধোয়াবো ধোয়ামোছা ধোয়াল ধোয়ালাম ধোয়ালি ধোঁয়ালি ধোয়ালে ধোয়ালেন ধোয়ালেম ধোয়ালুম ধোঁয়াশা ধোঁয়াসৃষ্টিকারী ধোঁয়াহীন ধৌত ধৌতকোষেয় ধৌতকট ধৌতকরণ ধৌতশীলা ধৌরেয় ধূঞী ধঞ্চে ধট ধ্যাত ধ্যাতা ধ্যাতব্য ধ্যান ধ্যানকারী ধ্যানগম্য ধ্যানগম্ভীর ধ্যানাসন ধ্যানিষ্ঠ ধ্যানী ধ্যানজ্ঞান ধ্যানযোগ ধ্যানযোগ্য ধ্যানধারণা ধ্যাননিবিষ্ট ধ্যাননেত্র ধ্যানভঙ্গ ধ্যানমগ্ন ধ্যানমগ্নতা ধ্যানরত ধ্যানলব্ধ ধ্যানস্থ ধ্যাবড়া ধ্যাবড়ান ধ্যাবড়ানো ধটি ধটিকা ধটী ধ্যেয় ধ্যেয়ায় ধটধারী ধুত ধূত ধৃত ধৃতগর্ভা ধৃতাত্মা ধুতাম ধৃতাস্ত্র ধুতি ধূতি ধৃতি ধৃতিমান ধৃতিমতী ধুতিশাড়ি ধুতিস ধুতে ধুতেন ধুতেম ধুত্তোর ধুত্তুরি ধুতপাপ ধূতপাপ ধৃতব্রত ধৃতব্রতা ধৃতবর্মা ধুতুম ধুতরা ধুতুরা ধুতরাগাছ ধুতুরাগাছ ধুতরাফুল ধুতুরাফুল ধুতরাবীজ ধুতুরাবীজ ধৃতরাষ্ট্র ধুতরো ধুতরোগাছ ধুতরোফুল ধুতরোবীজ ধুদ্ধুড়ি ধুঁদুল ধুধু ধূধূ ধঁধুল ধন ধনু ধনুঃকাণ্ড ধনুঃপট ধনুঃশর ধনঐশ্বর্য ধনুক ধুনক ধনুকাকৃতি ধনকাম ধনুকধারী ধনকুবের ধনুকভাঙ্গা ধনকষ্ট ধনক্ষয় ধনুখা ধুনখারা ধনুখরা ধনগৌরব ধনগৃধ্নু ধনগর্ব ধনগর্বিত ধনগর্বিতা ধনগর্বী ধনঘড়া ধুনা ধূনা ধনাকাঙ্ক্ষা ধনাকাঙ্ক্ষী ধনাগার ধনাগম ধুনাচি ধনাঢ্য ধনাঢ্যা ধনাঢ্যতা ধনাত্মক ধনাত্মিকা ধনাধার ধনাধিকার ধনাধিকারিণী ধনাধিকৃত ধনাধিকৃতা ধনাধিপ ধনাধিপা ধনাধিপতি ধনাধ্যক্ষ ধনাপহারিণী ধনাপহারী ধুনারি ধনার্চিত ধনার্চিতা ধনার্জিত ধনার্জন ধনার্জনকারী ধনার্থিনী ধনার্থী ধনি ধুনি ধনিক ধনিকা ধনিকতন্ত্র ধনিকবধূ ধনিকসম্প্রদায় ধনিচা ধনিনী ধনিষ্ঠা ধনিয়া ধনিয়াপাতা ধনী ধুনী ধুনচি ধুনুচি ধনচিহ্ন ধনচে ধনীব্যক্তি ধনে ধুনে ধনেপাতা ধনেপ্রাণে ধনেশ ধনেশপাখি ধনেশ্বর ধনৈষী ধুনো ধনজন ধনজয় ধনজয়কারী ধনঞ্জয় ধন্য ধন্যা ধন্যাক ধন্যাকগোত্রীয় ধন্যবাদ ধন্যবাদান্ত ধন্যবাদান্তে ধন্যবাদজ্ঞাপক ধন্যবাদজ্ঞাপন ধন্যবাদজ্ঞাপনকারী ধনতান্ত্রিক ধনতন্ত্র ধনতন্ত্রের ধনতন্ত্রবাদ ধনতৃষা ধনতৃষ্ণা ধনদ ধন্দ ধুন্দকার ধুন্দুকার ধনদা ধন্দা ধনদাতা ধনদাত্রী ধনদান ধনদানকারিণী ধনদানকারী ধনদাস ধনদাসী ধনদায়ক ধনদায়িকা ধনদায়িনী ধনদায়ী ধনদেব ধনদেবী ধনদেবতা ধনদৌলত ধনদণ্ড ধনদর্প ধুন্দল ধুন্দুল ধন্ধ ধুন্ধুকার ধনধান্য ধন্ধিত ধুন্ধুমার ধুনন ধূনন ধন্না ধননাশ ধননিয়োগ ধনপাল ধনপিপাসা ধনপিশাচ ধনপতি ধনপ্রাণ ধনপ্রাপ্তি ধনপ্রয়োগ ধন্ব ধন্বা ধনবান ধনবিজ্ঞান ধনবিজ্ঞানী ধনবিদ্যা ধনবিনাশ ধনবিনিয়োগ ধনবিভাগ ধনবিষয়ক ধন্বী ধনবৈজ্ঞানিক ধনবণ্টন ধনবণ্টনকারী ধনবতী ধনবত্তা ধনবৃদ্ধি ধন্বধারী ধন্বন্তরি ধনবল ধনভাণ্ডার ধনমান ধনমত্ত ধনমত্ততা ধনমদ ধনুর ধনুর্গুণ ধনরাজ ধনরাশি ধনুরাশি ধুনরি ধুনুরি ধনরত্ন ধনুর্ধারী ধনুর্ধর ধনুর্বাণ ধনুর্বিদ্যা ধনুর্বেদ ধনুর্ভঙ্গপণ ধনুর্মার্গ ধনলাভ ধনলাভকারী ধনলালসা ধনলিপ্সা ধনলোভ ধনলুব্ধ ধনশালিতা ধনশালিনী ধনশালী ধনশ্রী ধনুষ্কাণ্ড ধনুষ্কোটি ধনুষ্কর ধনুষ্টংকার ধনুষ্টঙ্কার ধনুষ্মান ধনসত্ত্বে ধনস্থান ধনুসন্ধানকারী ধনসম্পত্তি ধনসম্পদ ধনহানি ধনহারী ধনহীন ধনহীনা ধনহীনতা ধনহর ধনহরি ধপ ধুপ ধূপ ধূপাগুরু ধূপাঙ্গ ধপাৎ ধূপাদি ধূপাধার ধপাস ধূপায়িত ধূপায়িতা ধুপি ধূপিকা ধূপিত ধূপিতা ধুপিপিঠা ধুপচি ধুপুচি ধূপচি ধুপছায়া ধূপছায়া ধূপযন্ত্র ধূপতি ধূপদান ধূপদীপ ধুপধাপ ধপধপ ধুপধুপ ধপধপে ধূপন ধূপপাত্র ধূপবাস ধূপল ধুপুসধাপুস ধুপুসধুপুস ধব ধ্বংস ধ্বংসক ধ্বংসকাণ্ড ধ্বংসকারক ধ্বংসকারী ধ্বংসকাল ধ্বংসক্ষমতা ধ্বংসা ধ্বংসাত্মক ধ্বংসান ধ্বংসানো ধ্বংসাবশেষ ধ্বংসিকা ধ্বংসিত ধ্বংসী ধ্বংসীভূত ধ্বংসোন্মুখ ধ্বংসযজ্ঞ ধ্বংসন ধ্বংসনীয় ধ্বংসপ্রাপ্ত ধ্বংসপ্রবণতা ধ্বংসমুখ ধ্বংসলীলা ধ্বংসশেষ ধ্বংসসাধন ধ্বংসস্তূপ ধুবকা ধ্বাঙ্ক্ষ ধ্বান্ত ধ্বান্তারি ধ্বান্তোন্মেষ ধুবি ধূবি ধুবিনী ধ্বজ ধ্বজা ধ্বজাধারী ধ্বজাধরা ধ্বজাফলক ধ্বজাবর্দার ধ্বজি ধ্বজিনী ধ্বজী ধ্বজচিহ্ন ধ্বজযুক্ত ধ্বজদণ্ড ধ্বজপট ধ্বজপতাকা ধ্বজবান ধ্বজবহ ধ্বজভঙ্গ ধ্বজস্তম্ভ ধবধব ধুবন ধ্বনা ধ্বনি ধ্বনিকাব্য ধ্বনিকাল ধ্বনিখণ্ড ধ্বনিখণ্ডগত ধ্বনিগুণ ধ্বনিগত ধ্বনিগতরূপ ধ্বনিচিত্র ধ্বনিচিহ্ন ধ্বনিজাত ধ্বনিযুক্ত ধ্বনিযোগে ধ্বনিত ধ্বনিতা ধ্বনিতে ধ্বনিতেছে ধ্বনিতত্ত্ব ধ্বনিতত্ত্বগত ধ্বনিতত্ত্বরূপ ধ্বনিতরঙ্গগত ধ্বনিতরঙ্গচিত্র ধ্বনিতরঙ্গবিজ্ঞান ধ্বনিতরঙ্গবিস্তার ধ্বনিদৈর্ঘ্য ধ্বনিদ্বার ধ্বনিদ্বারীয় ধ্বনিনালা ধ্বনিনিঃসারক ধ্বনিনির্দেশক ধ্বনিপদ্ধতি ধ্বনিপ্রকার ধ্বনিপরিবর্তন ধ্বনিপূর্ণ ধ্বনিপ্রতিসাম্য ধ্বনিপরম্পরা ধ্বনিবিচার ধ্বনিবিজ্ঞান ধ্বনিবিজ্ঞানী ধ্বনিবিধি ধ্বনিবিন্যাস ধ্বনিবিপর্যয় ধ্বনিবিবর্ধক ধ্বনিবৈশিষ্ট্য ধ্বনিবৈষম্য ধ্বনিব্যঞ্জনা ধ্বনিভিত্তিক ধ্বনিভোট ধ্বনিমাধুর্য ধ্বনিমান ধ্বনিমিতি ধ্বনিমূল ধ্বনিমূলক ধ্বনিমূলগত ধ্বনিমূলীয় ধ্বনিমূলবিচার ধ্বনিমূলবিজ্ঞান ধ্বনিরাগ ধ্বনিরেখা ধ্বনিরেখাচিত্র ধ্বনিরূপ ধ্বনিলিপি ধ্বনিলোপ ধ্বনিশূন্য ধ্বনিশ্রুতিতত্ত্ব ধ্বনিসংযোগ ধ্বনিসংস্থা ধ্বনিসংস্থিতি ধ্বনিসাম্য ধ্বনিসীমা ধ্বনিসূত্র ধ্বনিস্তর ধ্বনিসম্ভার ধ্বন্যাত্মক ধ্বনন ধবল ধবলগিরি ধবলা ধবলাগিরি ধবলিত ধবলিমা ধবলিয়া ধবলী ধবলীকৃত ধবলীকৃতা ধবলীভূত ধবলীভূতা ধবলপক্ষ ধবলমৃত্তিকা ধবলরোগ ধ্বস ধ্বসা ধ্বস্ত ধ্বস্তাধস্তি ধ্বস্তবিধ্বস্ত ধ্বসন ধবহীনা ধম ধুম ধূম ধমক ধমকা ধমকাই ধমকাইও ধমকাইত ধমকাইতাম ধমকাইতিস ধমকাইতে ধমকাইতেছ ধমকাইতেছি ধমকাইতেছিল ধমকাইতেছিলাম ধমকাইতেছিলি ধমকাইতেছিলে ধমকাইতেছিলেন ধমকাইতেছিস ধমকাইতেছে ধমকাইতেছেন ধমকাইতেন ধমকাইব ধমকাইবার ধমকাইবি ধমকাইবে ধমকাইবেন ধমকাইল ধমকাইলাম ধমকাইলি ধমকাইলে ধমকাইলেন ধমকাইয়া ধমকাইয়াছ ধমকাইয়াছি ধমকাইয়াছিল ধমকাইয়াছিলাম ধমকাইয়াছিলি ধমকাইয়াছিলে ধমকাইয়াছিলেন ধমকাইয়াছিস ধমকাইয়াছে ধমকাইয়াছেন ধমকাইয়ো ধমকাক ধমকাচ্ছ ধমকাচ্ছি ধমকাচ্ছিল ধমকাচ্ছিলাম ধমকাচ্ছিলি ধমকাচ্ছিলে ধমকাচ্ছিলেন ধমকাচ্ছিলেম ধমকাচ্ছিলুম ধমকাচ্ছিস ধমকাচ্ছে ধমকাচ্ছেন ধমকাত ধমকাতাম ধমকাতিস ধমকাতে ধমকাতেন ধমকাতেম ধমকাতুম ধমকান ধমকানি ধমকানো ধমকাব ধমকাবার ধমকাবি ধমকাবে ধমকাবেন ধমকাবো ধমকাল ধমকালাম ধমকালি ধমকালে ধমকালেন ধমকালেম ধমকালুম ধমকাস ধমকি ধমকে ধমকেছ ধমকেছি ধমকেছিল ধমকেছিলাম ধমকেছিলি ধমকেছিলে ধমকেছিলেন ধমকেছিলেম ধমকেছিলুম ধমকেছিস ধমকেছে ধমকেছেন ধূমকেতু ধূমকেতন ধমকো ধুমখাওর ধুমা ধ্মা ধূমাকার ধুমাকল ধূমাঙ্কিত ধ্মাত ধমাধম ধ্মান ধূমাবতী ধূমাভ ধূমাভা ধমাস ধূমায়িত ধূমায়মান ধূমিত ধুমো ধূমোদগার ধূমজা ধূমজাল ধূমযোনি ধূমদর্শী ধুমধাম ধূমধাম ধূমধামী ধুমধাড়াক্কা ধূমধাড়াক্কা ধূমধেমে ধূমধ্বজ ধমধম ধুমধড়ক্কা ধূমধড়াক্কা ধমন ধূমন ধমনি ধমনিজাল ধমনী ধূমপ ধূমপা ধূমপান ধূমপানকারী ধূমপায়িনী ধূমপায়ী ধুমপটাস ধূমপত্র ধূমপথ ধূমপূর্ণ ধুম্ব ধুম্বা ধুম্বি ধম্বন ধূমবর্ণ ধুম্বল ধুম্বুল ধুম্বলোচন ধম্ম ধম্মিল ধম্মিল্ল ধূম্র ধূম্রক ধূম্রকেশা ধূম্রকেশিনী ধূম্রকেশী ধূম্রাক্ষ ধূম্রাক্ষী ধূম্রালোক ধূম্রবর্ণ ধূম্রবর্ণা ধূম্রল ধূম্রলোচন ধূম্রলোচনা ধুমুল ধূমল ধূমুল ধূমলেখা ধুমসা ধুমসানো ধুমসি ধূমসি ধুমসে ধুমসো ধুমসুনি ধুমসুনী ধূমহীন ধুমড়া ধুমড়ি ধুমুড়ী ধর ধুর ধ্রু ধরুক ধরা ধুরা ধরাই ধরাইও ধরাইত ধরাইতাম ধরাইতিস ধরাইতে ধরাইতেছ ধরাইতেছি ধরাইতেছিল ধরাইতেছিলাম ধরাইতেছিলি ধরাইতেছিলে ধরাইতেছিলেন ধরাইতেছিস ধরাইতেছে ধরাইতেছেন ধরাইতেন ধরাইব ধরাইবার ধরাইবি ধরাইবে ধরাইবেন ধরাইল ধরাইলাম ধরাইলি ধরাইলে ধরাইলেন ধরাইয়া ধরাইয়াছ ধরাইয়াছি ধরাইয়াছিল ধরাইয়াছিলাম ধরাইয়াছিলি ধরাইয়াছিলে ধরাইয়াছিলেন ধরাইয়াছিস ধরাইয়াছে ধরাইয়াছেন ধরাইয়ো ধরাও ধরাক ধরাকাট ধরাকথা ধরাগন্ধ ধরাচ্ছ ধরাচ্ছি ধরাচ্ছিল ধরাচ্ছিলাম ধরাচ্ছিলি ধরাচ্ছিলে ধরাচ্ছিলেন ধরাচ্ছিলেম ধরাচ্ছিলুম ধরাচ্ছিস ধরাচ্ছে ধরাচ্ছেন ধরাছোঁয়া ধরাট ধরাযাক ধরাত ধরাতাম ধরাতিস ধরাতে ধরাতেন ধরাতেম ধরাতুম ধরাতল ধরাধাম ধরাধর ধরাধরি ধরান ধরানা ধরানো ধরাব ধরাবাঁধা ধরাবার ধরাবি ধরাবে ধরাবেন ধরাবো ধরাল ধরালাম ধরালি ধরালে ধরালেন ধরালেম ধরালুম ধরাশায়ী ধরাস ধরাসন ধরায়া ধরি ধরিত ধরিতু ধরিতাম ধরিতিস ধরিতে ধরিতেছ ধরিতেছি ধরিতেছিল ধরিতেছিলাম ধরিতেছিলি ধরিতেছিলে ধরিতেছিলেন ধরিতেছিস ধরিতেছে ধরিতেছেন ধরিতেন ধরিত্রী ধরিনু ধরিব ধরিবার ধরিবি ধরিবে ধরিবেন ধরিল ধরিলাম ধরিলি ধরিলে ধরিলেন ধরিস ধরিয়া ধরিয়াছ ধরিয়াছি ধরিয়াছিল ধরিয়াছিলাম ধরিয়াছিলি ধরিয়াছিলে ধরিয়াছিলেন ধরিয়াছিস ধরিয়াছে ধরিয়াছেন ধরিয়ে ধরিয়েছ ধরিয়েছি ধরিয়েছিল ধরিয়েছিলাম ধরিয়েছিলি ধরিয়েছিলে ধরিয়েছিলেন ধরিয়েছিলেম ধরিয়েছিলুম ধরিয়েছিস ধরিয়েছে ধরিয়েছেন ধরিয়ো ধ্রিয়মাণ ধ্রিয়মাণা ধুরীণ ধুরীয় ধরে ধরেছ ধরেছি ধরেছিল ধরেছিলাম ধরেছিলি ধরেছিলে ধরেছিলেন ধরেছিলেম ধরেছিলুম ধরেছিস ধরেছে ধরেছেন ধরেন ধরো ধরছ ধরছি ধরছিল ধরছিলাম ধরছিলি ধরছিলে ধরছিলেন ধরছিলেম ধরছিলুম ধরছিস ধরছে ধরছেন ধ্রৌব্য ধূর্জটি ধুর্য ধরণ ধরণি ধরণিভৃৎ ধরণী ধরণীজ ধরণীজা ধরণীতল ধরণীধর ধরণীপতি ধরণীশ্বর ধরণীসুত ধরণীসুতা ধরত ধূর্ত ধূর্তক ধরতা ধরতাম ধূর্তামি ধূর্তামো ধরতি ধরতিস ধরতে ধরতেন ধরতেম ধূর্ততা ধর্তব্য ধরতুম ধূর্ধর ধরন ধরুন ধরনা ধর্না ধরন্তি ধরনধারণ ধুরন্ধর ধরপাকড় ধ্রুপদ ধ্রুপদী ধরব ধ্রুব ধ্রুবক ধ্রুবা ধ্রুবাবর্ত ধরবার ধরবি ধরবে ধরবেন ধরবেনা ধরবো ধ্রুবতা ধ্রুবতারা ধ্রুবদূরত্ব ধ্রুবনক্ষত্র ধ্রুবপদ ধ্রুববিশ্বাস ধ্রুবরাশি ধ্রুবরেখা ধ্রুবলোক ধ্রুবসংখ্যা ধ্রুবসত্য ধূর্বহ ধরম ধর্ম ধুরুম ধর্মঅধর্ম ধর্মউপদেষ্টা ধর্মকাম ধর্মকার্য ধরমকোট ধর্মকৃৎ ধর্মকৃত্য ধর্মকন্যা ধর্মক্রিয়া ধরমকরম ধর্মকর্ম ধর্মকর্মাদি ধর্মকর্মরহিত ধর্মক্ষেত্র ধর্মগুরু ধর্মগ্রন্থ ধর্মগ্রহণ ধর্মগৃহ ধর্মঘট ধর্মঘটকারী ধর্মঘটী ধর্মাচারী ধর্মাচার্য ধর্মাচরণ ধর্মাত্মা ধর্মাদি ধর্মাধিকার ধর্মাধিকারী ধর্মাধিকরণ ধর্মাধিকরণিক ধর্মাধ্যক্ষ ধর্মাধর্ম ধর্মানুগামী ধর্মানুগত ধর্মানুযায়ী ধর্মান্তর ধর্মান্তরকরণ ধর্মান্তরিত ধর্মান্দোলন ধর্মান্ধ ধর্মান্ধা ধর্মান্ধতা ধর্মানুমোদিত ধর্মানুরাগ ধর্মানুরাগী ধর্মানুষ্ঠান ধর্মানুসারী ধর্মানুসারে ধর্মাবতার ধর্মাবলী ধর্মাবলম্বিনী ধর্মাবলম্বী ধর্মার্থ ধর্মার্থে ধর্মালয় ধর্মাশ্রয়ী ধর্মাসন ধর্মিণী ধর্মিষ্ঠ ধর্মিষ্ঠা ধর্মী ধর্মচক্র ধর্মচারিণী ধর্মচারী ধর্মচিন্তা ধর্মচ্যুত ধর্মচর্চা ধর্মচর্যা ধর্মচর্যাকারী ধর্মীয় ধর্মীয়গ্রন্থ ধর্মীয়ান ধর্মীয়ভাবে ধর্মেরগ্লানি ধর্মেরঢাক ধর্মেরষাঁড় ধর্মোত্তর ধর্মোৎসব ধর্মোদ্দেশে ধর্মোন্মাদ ধর্মোন্মাদনা ধর্মোপাসক ধর্মোপাসিকা ধর্মোপাসনা ধর্মোপেত ধর্মোপদেশ ধর্মোপদেশক ধর্মোপদেশিকা ধর্মোপদেশদাত্রী ধর্মোপদেষ্টা ধর্মজ ধর্মজায়া ধর্মজীবন ধর্মজ্ঞ ধর্মজ্ঞান ধর্ম্য ধর্মযুক্ত ধর্ম্যা ধর্মযাজক ধর্মযোদ্ধা ধর্মযুদ্ধ ধর্মঠাকুর ধর্মত ধর্মতাত্ত্বিক ধর্মত্যাগ ধর্মত্যাগিনী ধর্মত্যাগী ধর্মতত্ত্ব ধর্মতত্ত্ববিদ ধর্মতলা ধর্মদূত ধর্মদ্বেষিণী ধর্মদ্বেষী ধর্মদ্রোহ ধর্মদ্রোহিণী ধর্মদ্রোহিতা ধর্মদ্রোহী ধর্মদর্শন ধর্মধ্বজিনী ধর্মধ্বজী ধর্মনাশ ধরমনাশা ধর্মনিধি ধর্মনিরপেক্ষ ধর্মনিরপেক্ষতা ধর্মনিষ্ঠ ধর্মনিষ্ঠা ধর্মনিষ্ঠতা ধর্মনীতি ধর্মনেতা ধর্মপাল ধর্মপালন ধর্মপালনকারী ধর্মপিতা ধর্মপিপাসা ধর্মপুত্তুর ধর্মপত্নী ধর্মপুত্র ধর্মপথ ধর্মপুর ধর্মপ্রাণ ধর্মপ্রাণা ধর্মপ্রাণতা ধর্মপরায়ণ ধর্মপরায়ণা ধর্মপরায়ণতা ধর্মপরায়ণত্ব ধর্মপ্রচার ধর্মপ্রচারক ধর্মপ্রতিমন্ত্রী ধর্মপ্রবক্তা ধর্মপ্রবণ ধর্মপ্রবণতা ধর্মপ্রবর্তক ধর্মপ্রমাণ ধর্মপুস্তক ধর্মবাপ ধর্মবিদ ধর্মবিপ্লব ধর্মবিভা ধর্মবিরোধিতা ধর্মবিরোধী ধর্মবিরুদ্ধ ধর্মবিশ্বাস ধর্মবিশ্বাসে ধর্মবিষয়ক ধর্মবিহিত ধর্মবীর ধর্মবেত্তা ধর্মবোধ ধর্মবোন ধর্মব্যবসা ধর্মবৃদ্ধ ধর্মবুদ্ধি ধর্মবড়াই ধর্মভগ্নি ধর্মভাই ধর্মভাব ধর্মভিত্তিক ধর্মভীরু ধর্মভীরুতা ধর্মভেদে ধর্মভ্রাতা ধর্মভ্রষ্ট ধর্মভ্রষ্টা ধর্মভয় ধর্মমঙ্গল ধর্মমাতা ধর্মমেয়ে ধর্মমত ধর্মমন্দির ধর্মময় ধর্মরক্ষক ধর্মরক্ষা ধর্মরক্ষাকারী ধর্মরক্ষাকরণ ধর্মরক্ষার্থে ধর্মরাজ ধর্মরাজ্য ধর্মরহিত ধর্মলক্ষণ ধর্মলোপ ধরমশালা ধর্মশালা ধর্মশাস্ত্র ধর্মশাস্ত্রকার ধর্মশাস্ত্রপাঠ ধর্মশাস্ত্রপ্রণেতা ধর্মশাস্ত্রবিদ ধর্মশাসন ধর্মশিক্ষা ধর্মশীল ধর্মশীলা ধর্মশূন্য ধূর্মুশপেটা ধর্মসংকর ধর্মসংক্রান্ত ধর্মসংগীত ধর্মসংগত ধর্মসংস্কার ধর্মসংস্কারক ধর্মসংস্কারকারী ধর্মসংস্থাপক ধর্মসংস্থাপন ধর্মসংহিতা ধর্মসঙ্গত ধর্মসাক্ষী ধর্মসাধক ধর্মসাধন ধর্মসাধনকারী ধর্মসাহিত্য ধর্মস্থান ধর্মসভা ধর্মসম্প্রদায় ধর্মসম্মত ধর্মসুলভ ধর্মহানি ধর্মহীন ধরল ধরলা ধরলাম ধরলি ধরলে ধরলেন ধরলেম ধরলুম ধর্ষক ধর্ষকাম ধর্ষকামী ধর্ষিত ধর্ষিতা ধর্ষণ ধর্ষণকাম ধর্ষণকারী ধর্ষণী ধর্ষণীয় ধর্ষণশীল ধল ধুল ধূল ধলা ধুলা ধূলা ধুলাখেলা ধুলাঘর ধুলাপা ধুলাপূর্ণ ধুলাপড়া ধুলাবালি ধুলাম ধূলি ধূলিকণা ধূলিঝড় ধূলিধ্বজ ধূলিধূসর ধূলিধূসরিত ধূলিপুঞ্জ ধূলিপটল ধূলিপূর্ণ ধূলিপূর্ণা ধূলিবসন ধূলিমেঘ ধূলিমলিন ধূলিময় ধূলিরাশি ধূলিরহিত ধূলিলিপ্ত ধূলিলুণ্ঠিত ধূলিলুণ্ঠিতা ধূলিশায়িনী ধূলিশায়ী ধূলিশয্যা ধূলিশূন্য ধূলিসাৎ ধূলিস্রোত ধলী ধূলী ধূলীভূত ধুলে ধুলেন ধুলেম ধলেশ্বরী ধুলো ধুলোঝাড়া ধুলোপড়া ধুলোবালি ধুলোমাখা ধুলোমাটি ধুলোমুঠি ধুলোময়লা ধুলট ধূলট ধূল্যবলুণ্ঠিত ধূলদন্তী ধুলপরিমাণ ধুলুম ধৃষ্ট ধৃষ্টা ধৃষ্টতা ধৃষ্টতাযুক্ত ধৃষ্টতাপূর্ণ ধৃষ্টত্ব ধৃষ্টদ্যুম্ন ধস ধুস ধসুক ধসকা ধসকাই ধসকাইও ধসকাইত ধসকাইতাম ধসকাইতিস ধসকাইতে ধসকাইতেছ ধসকাইতেছি ধসকাইতেছিল ধসকাইতেছিলাম ধসকাইতেছিলি ধসকাইতেছিলে ধসকাইতেছিলেন ধসকাইতেছিস ধসকাইতেছে ধসকাইতেছেন ধসকাইতেন ধসকাইব ধসকাইবার ধসকাইবি ধসকাইবে ধসকাইবেন ধসকাইল ধসকাইলাম ধসকাইলি ধসকাইলে ধসকাইলেন ধসকাইয়া ধসকাইয়াছ ধসকাইয়াছি ধসকাইয়াছিল ধসকাইয়াছিলাম ধসকাইয়াছিলি ধসকাইয়াছিলে ধসকাইয়াছিলেন ধসকাইয়াছিস ধসকাইয়াছে ধসকাইয়াছেন ধসকাইয়ো ধসকাও ধসকাক ধসকাচ্ছ ধসকাচ্ছি ধসকাচ্ছিল ধসকাচ্ছিলাম ধসকাচ্ছিলি ধসকাচ্ছিলে ধসকাচ্ছিলেন ধসকাচ্ছিলেম ধসকাচ্ছিলুম ধসকাচ্ছিস ধসকাচ্ছে ধসকাচ্ছেন ধসকাত ধসকাতাম ধসকাতিস ধসকাতে ধসকাতেন ধসকাতেম ধসকাতুম ধসকান ধসকানো ধসকাব ধসকাবার ধসকাবি ধসকাবে ধসকাবেন ধসকাবো ধসকাল ধসকালাম ধসকালি ধসকালে ধসকালেন ধসকালেম ধসকালুম ধসকাস ধসকায় ধসকে ধসকেছ ধসকেছি ধসকেছিল ধসকেছিলাম ধসকেছিলি ধসকেছিলে ধসকেছিলেন ধসকেছিলেম ধসকেছিলুম ধসকেছিস ধসকেছে ধসকেছেন ধসকো ধসা ধুসা ধসান ধসানো ধসি ধসিত ধসিতাম ধসিতিস ধসিতে ধসিতেছ ধসিতেছি ধসিতেছিল ধসিতেছিলাম ধসিতেছিলি ধসিতেছিলে ধসিতেছিলেন ধসিতেছিস ধসিতেছে ধসিতেছেন ধসিতেন ধসিব ধসিবার ধসিবি ধসিবে ধসিবেন ধসিল ধসিলাম ধসিলি ধসিলে ধসিলেন ধসিস ধসিয়া ধসিয়াছ ধসিয়াছি ধসিয়াছিল ধসিয়াছিলাম ধসিয়াছিলি ধসিয়াছিলে ধসিয়াছিলেন ধসিয়াছিস ধসিয়াছে ধসিয়াছেন ধসিয়ে ধসিয়ো ধসে ধসেছ ধসেছি ধসেছিল ধসেছিলাম ধসেছিলি ধসেছিলে ধসেছিলেন ধসেছিলেম ধসেছিলুম ধসেছিস ধসেছে ধসেছেন ধসেন ধসো ধসছ ধসছি ধসছিল ধসছিলাম ধসছিলি ধসছিলে ধসছিলেন ধসছিলেম ধসছিলুম ধসছিস ধসছে ধসছেন ধসত ধস্ত ধস্তাধস্তি ধসতাম ধসতিস ধসতে ধসতেন ধসতেম ধস্তবিধ্বস্ত ধসতুম ধুস্তুর ধুস্তূর ধূস্তুর ধসধস ধসন ধসুন ধসনামা ধসব ধসবার ধসবি ধসবে ধসবেন ধসবো ধূসর ধূসরা ধূসরিত ধূসরিমা ধূসরতা ধূসররূপ ধসল ধসলাম ধসলি ধসলে ধসলেন ধসলেম ধসলুম ধড় ধড়া ধড়াচূড়া ধড়াচুড়ো ধড়াস ধড়াসধড়াস ধড়ি ধড়িবাজ ধড়িবাজি ধড়ী ধুড়ধুড়ি ধড়পড় ধড়ফড় ধড়ফড়ানি ধড়ফড়িয়া ধড়মড় ধড়মড়ানি ধড়মড়ানো ধুয়া ধূয়া ধুঁয়া ধুয়ান ধুয়ানো ধুয়ে ধুয়েছ ধুয়েছি ধুয়েছিল ধুয়েছিলাম ধুয়েছিলি ধুয়েছিলে ধুয়েছিলেন ধুয়েছিলেম ধুয়েছিলুম ধুয়েছিস ধুয়েছে ধুয়েছেন ধুয়ো ধূয়মান".split(" "),
              w_dd: "ড ডু ডং ডংডং ডঃ ডউয়া ডওর ডওরা ডওরপানি ডক ডকইয়ার্ড ডক্টর ডক্টরাল ডক্টরেট ডক্টরস ডকবুস ডকুমেন্ট ডকুমেন্টারি ডকুমেন্টেশান ডকুমেন্টেশন ডুকর ডুকরক ডুকরা ডুকরাই ডুকরাইও ডুকরাইত ডুকরাইতাম ডুকরাইতিস ডুকরাইতে ডুকরাইতেছ ডুকরাইতেছি ডুকরাইতেছিল ডুকরাইতেছিলাম ডুকরাইতেছিলি ডুকরাইতেছিলে ডুকরাইতেছিলেন ডুকরাইতেছিস ডুকরাইতেছে ডুকরাইতেছেন ডুকরাইতেন ডুকরাইব ডুকরাইবার ডুকরাইবি ডুকরাইবে ডুকরাইবেন ডুকরাইল ডুকরাইলাম ডুকরাইলি ডুকরাইলে ডুকরাইলেন ডুকরাইয়া ডুকরাইয়াছ ডুকরাইয়াছি ডুকরাইয়াছিল ডুকরাইয়াছিলাম ডুকরাইয়াছিলি ডুকরাইয়াছিলে ডুকরাইয়াছিলেন ডুকরাইয়াছিস ডুকরাইয়াছে ডুকরাইয়াছেন ডুকরাইয়ো ডুকরাক ডুকরান ডুকরানো ডুকরাস ডুকরায় ডুকরি ডুকরিয়ে ডুকরিয়েছ ডুকরিয়েছি ডুকরিয়েছিল ডুকরিয়েছিলাম ডুকরিয়েছিলি ডুকরিয়েছিলে ডুকরিয়েছিলেন ডুকরিয়েছিলেম ডুকরিয়েছিলুম ডুকরিয়েছিস ডুকরিয়েছে ডুকরিয়েছেন ডুকরিয়ো ডুকরচ্ছ ডুকরচ্ছি ডুকরচ্ছিল ডুকরচ্ছিলাম ডুকরচ্ছিলি ডুকরচ্ছিলে ডুকরচ্ছিলেন ডুকরচ্ছিলেম ডুকরচ্ছিলুম ডুকরচ্ছিস ডুকরচ্ছে ডুকরচ্ছেন ডুকরে ডুকরেছ ডুকরেছি ডুকরেছিল ডুকরেছিলাম ডুকরেছিলি ডুকরেছিলে ডুকরেছিলেন ডুকরেছিলেম ডুকরেছিলুম ডুকরেছিস ডুকরেছে ডুকরেছেন ডুকরো ডুকরোবার ডুকরত ডুকরতাম ডুকরতিস ডুকরতে ডুকরতেন ডুকরতেম ডুকরতুম ডুকরন ডুকরনো ডুকরব ডুকরবি ডুকরবে ডুকরবেন ডুকরবো ডুকরল ডুকরলাম ডুকরলি ডুকরলে ডুকরলেন ডুকরলেম ডুকরলুম ডুকরস ডুকলা ডকল্যান্ড ডক্সিসাইক্লিন ডগ ডুগ ডুগং ডগা ডগারিয়া ডগি ডুগি ডগিডগি ডুগিতবলা ডগিরা ডুগী ডগডগ ডুগডুগ ডুগডুগি ডগডগিয়া ডগডগে ডগমগ ডগমগানো ডগমগি ডগমগিয়া ডগর ডগরা ডগলা ডগস ডঙ্ক ডঙ্কা ডঙ্কাপেটা ডুঙ্গা ডুঙ্গি ডুঙি ডুঙুর ডা ডাং ডাংগুলি ডাংপিটে ডাংরা ডাঃ ডাই ডাঁই ডাইং ডাইক ডাইজেস্ট ডাইন ডাইনা ডাইনামিক ডাইনামিকভাবে ডাইনামিকস ডাইনামো ডাইনি ডাইনিং ডাইনিউক্লিওটাইড ডাইনিপনা ডাইনী ডাইনীবিদ্যা ডাইনে ডাইনোসর ডাইনোসরগোষ্ঠী ডাইন্যামিক ডাইন্যামিক্যাল ডাইনদিক ডাইনপনা ডাইনহাত ডাইপোল ডাইফসফিন ডাইবোরেন ডাইমিথাইল ডাইরি ডাইরিয়া ডাইরিয়াল ডাইরেক্ট ডাইরেক্টর ডাইরেক্টরি ডাইল ডাইলিউট ডাইলেমা ডাইলভাত ডাইলমুট ডাইস ডাইয়া ডাইয়িং ডাউন ডাউনফল ডাউনলোড ডাউল ডাউলভাত ডাও ডাঁওর ডাক ডাকু ডাকওয়ার্থ ডাকওয়াল ডাকুক ডাককারী ডাকখানা ডাকখরচ ডাকখরচা ডাকগাড়ি ডাকঘর ডাকা ডাকাই ডাকাইও ডাকাইত ডাকাইতাম ডাকাইতিস ডাকাইতে ডাকাইতেছ ডাকাইতেছি ডাকাইতেছিল ডাকাইতেছিলাম ডাকাইতেছিলি ডাকাইতেছিলে ডাকাইতেছিলেন ডাকাইতেছিস ডাকাইতেছে ডাকাইতেছেন ডাকাইতেন ডাকাইব ডাকাইবার ডাকাইবি ডাকাইবে ডাকাইবেন ডাকাইল ডাকাইলাম ডাকাইলি ডাকাইলে ডাকাইলেন ডাকাইয়া ডাকাইয়াছ ডাকাইয়াছি ডাকাইয়াছিল ডাকাইয়াছিলাম ডাকাইয়াছিলি ডাকাইয়াছিলে ডাকাইয়াছিলেন ডাকাইয়াছিস ডাকাইয়াছে ডাকাইয়াছেন ডাকাইয়ো ডাকাও ডাকাক ডাকাচ্ছ ডাকাচ্ছি ডাকাচ্ছিল ডাকাচ্ছিলাম ডাকাচ্ছিলি ডাকাচ্ছিলে ডাকাচ্ছিলেন ডাকাচ্ছিলেম ডাকাচ্ছিলুম ডাকাচ্ছিস ডাকাচ্ছে ডাকাচ্ছেন ডাকাডাকি ডাকাত ডাকাতাম ডাকাতি ডাকাতিয়া ডাকাতে ডাকাতেন ডাকাতেম ডাকাততুল্য ডাকাতদল ডাকাতুম ডাকান ডাকানো ডাকাব ডাকাবুকা ডাকাবুকো ডাকাবার ডাকাবি ডাকাবে ডাকাবেন ডাকাবো ডাকাল ডাকালাম ডাকালি ডাকালে ডাকালেন ডাকালেম ডাকালুম ডাকাস ডাকি ডাকিছে ডাকিত ডাকিতাম ডাকিতিস ডাকিতে ডাকিতেছ ডাকিতেছি ডাকিতেছিল ডাকিতেছিলাম ডাকিতেছিলি ডাকিতেছিলে ডাকিতেছিলেন ডাকিতেছিস ডাকিতেছে ডাকিতেছেন ডাকিতেন ডাকিনী ডাকিনীপনা ডাকিনীবিদ্যা ডাকিব ডাকিবার ডাকিবি ডাকিবে ডাকিবেন ডাকিল ডাকিলাম ডাকিলি ডাকিলে ডাকিলেন ডাকিস ডাকিয়া ডাকিয়াছ ডাকিয়াছি ডাকিয়াছিল ডাকিয়াছিলাম ডাকিয়াছিলি ডাকিয়াছিলে ডাকিয়াছিলেন ডাকিয়াছিস ডাকিয়াছে ডাকিয়াছেন ডাকিয়ে ডাকিয়েছ ডাকিয়েছি ডাকিয়েছিল ডাকিয়েছিলাম ডাকিয়েছিলি ডাকিয়েছিলে ডাকিয়েছিলেন ডাকিয়েছিলেম ডাকিয়েছিলুম ডাকিয়েছিস ডাকিয়েছে ডাকিয়েছেন ডাকিয়ো ডাকচৌকি ডাকচড়া ডাকেতি ডাকেন ডাকেননি ডাকেরকথা ডাকেরবচন ডাকেরসাজ ডাকেরসুন্দরী ডাকো ডাকোটা ডাকোয়া ডাকছ ডাকছাড়া ডাকছি ডাকছিল ডাকছিলাম ডাকছিলি ডাকছিলে ডাকছিলেন ডাকছিলেম ডাকছিলুম ডাকছিস ডাকছে ডাকছেন ডাকটিকিট ডাকটিকেট ডাকযোগ ডাকডোক ডাকত ডাকতাম ডাক্তার ডাক্তারখানা ডাক্তারি ডাক্তারবাবু ডাকতি ডাকতিস ডাকতে ডাকতেছে ডাকতেন ডাকতেম ডাকতো ডাকতুম ডাকুন ডাকনাম ডাকনামা ডাকপাখি ডাকপাড়া ডাকপিয়ন ডাকপেয়াদা ডাকপুরুষ ডাকফেরত ডাকফেরতা ডাকব ডাকবাংলা ডাকবাংলো ডাকবাক্স ডাকবার ডাকবাহী ডাকবাড়া ডাকবি ডাকবিভাগ ডাকবিলি ডাকবে ডাকবেন ডাকবো ডাকমাশুল ডাকমুনশি ডাকমুন্সী ডাকল ডাকলাম ডাকলি ডাকলে ডাকলেন ডাকলেম ডাকলুম ডাকশুনে ডাকসু ডাকসংক্রান্তি ডাকসাইটে ডাকসিদ্ধ ডাকসুর ডাকসুরত ডাকহাঁক ডাকহরকরা ডাগ ডাগর ডাগরআঁখি ডাগরডাগর ডাগরডোগর ডাগরমেয়ে ডাগল ডাঙ ডাঙ্গ ডাঙ্গগুলি ডাঙ্গা ডাঙ্গাজমি ডাঙ্গাপথ ডাঙ্গর ডাঙগুলি ডাঙ্গশ ডাঙা ডাঙাপথ ডাঙর ডাঙশ ডাঙস ডাচ ডাচেস ডাচম্যান ডাঁট ডাটা ডাঁটা ডাঁটাকল ডাটাগ্রাম ডাটাফ্লো ডাটাবেইজ ডাটাবেইস ডাটাবেজ ডাটাবেস ডাঁটালো ডাঁটাশাক ডাটি ডাঁটি ডাঁটিয়াল ডাটেয়া ডাঁটো ডাঁটোআম ডাঁটোমানুষ ডাঁটন ডাটনা ডাডলি ডাণ্ডা ডাণ্ডাগুলি ডাণ্ডাবাজি ডাণ্ডি ডান ডানকান ডানকনা ডানকুনি ডানা ডানাওয়ালা ডানাকাটা ডানাযুক্ত ডানাযুক্তা ডানাবিহীন ডানাবর্তী ডানাভাঙা ডানামারা ডানি ডান্ডি ডানদিক ডানপক্ষ ডানপাশ ডানপিটে ডানপন্থা ডানপন্থী ডান্স ডান্সটেবল ডানহাত ডানহাতি ডাঁপ ডাব ডাবু ডাবা ডাবিং ডাবো ডাবধান ডাব্বা ডাবর ডাবরা ডাবরি ডাবল ডাবলু ডাব্লিউ ডাবলিন ডাবলডে ডাবলস ডাবুষ ডাভ ডাম ডামাডোল ডাম্প ডাম্পিং ডাম্ব ডাম্বার ডাম্বেল ডামর ডার ডারউইন ডার্ক ডার্কনেস ডারা ডাঁরাস ডারি ডারিয়া ডার্ট ডার্টস ডার্বি ডার্বিশায়ার ডার্লিং ডার্লিঙ ডারহাম ডাল ডালকুত্তা ডালগলা ডালঘুটনি ডালঘুটুনি ডালঘুঁটনি ডালা ডালাওয়ালা ডালাযুক্ত ডালানো ডালাস ডালি ডালিম ডালিমকুমার ডালিম্ব ডালিয়া ডালী ডালচিনি ডালটন ডাল্টন ডালডা ডালনা ডালপালা ডালপুরি ডালবাটা ডালবড়া ডালভাঙা ডালভাজি ডালমুট ডালহৌসি ডাঁশ ডাঁশা ডাঁশিয়ে ডাঁশমাছি ডাঁসা ডাস্ট ডাস্টার ডাস্টবিন ডাহ ডাহুক ডাহুকা ডাহুকী ডাহা ডাহামিথ্যে ডাহিন ডাহিনা ডাহিনদিক ডাঁড় ডাঁড়ুকা ডাঁড়কাক ডাঁড়া ডাঁড়ানো ডাঁড়াশ ডাঁড়াস ডাঁড়ি ডাঁড়িকা ডাঁড়ী ডায়াগন ডায়াগনোসিস ডায়াগনস্টিক ডায়াগ্রাম ডায়াফ্রাম ডায়াবেটিক ডায়াবেটিকস ডায়াবেটিস ডায়ামিটার ডায়ার ডায়ার্কি ডায়াল ডায়ালগ ডায়েট ডায়েটকন্ট্রোল ডায়েনসেফালন ডায়েরি ডায়েরী ডায়োড ডায়নামাইট ডায়নামিক ডায়নামো ডায়মন ডায়মন্ড ডায়রি ডায়রিয়া ডায়লগ ডি ডিঅক্সিরাইবোনিউক্লিক ডিউটি ডিউটিস ডিউটেরিয়াম ডিওডেনাম ডিক ডিঁকি ডিকেন্টর ডিকোড ডিকোডার ডিকোডিং ডিক্টেটর ডিক্টেটরশিপ ডিকমপ্রেস ডিক্রি ডিক্রিজারি ডিক্রিদার ডিক্রী ডিক্রীজারি ডিক্রীদার ডিক্লেয়ার ডিক্লেয়ারেশন ডিকশনারি ডিগডিগ ডিগদড়ি ডিগবাজি ডিগবাজী ডিগ্রি ডিগ্রিধারী ডিগ্রিপ্রাপ্ত ডিগ্রী ডিগ্রীধারী ডিগ্রীপ্রাপ্ত ডিগ্রীলাভ ডিঙ ডিঙক ডিঙ্গ ডিঙ্গক ডিঙ্গা ডিঙ্গাই ডিঙ্গাইও ডিঙ্গাইত ডিঙ্গাইতাম ডিঙ্গাইতিস ডিঙ্গাইতে ডিঙ্গাইতেছ ডিঙ্গাইতেছি ডিঙ্গাইতেছিল ডিঙ্গাইতেছিলাম ডিঙ্গাইতেছিলি ডিঙ্গাইতেছিলে ডিঙ্গাইতেছিলেন ডিঙ্গাইতেছিস ডিঙ্গাইতেছে ডিঙ্গাইতেছেন ডিঙ্গাইতেন ডিঙ্গাইব ডিঙ্গাইবার ডিঙ্গাইবি ডিঙ্গাইবে ডিঙ্গাইবেন ডিঙ্গাইল ডিঙ্গাইলাম ডিঙ্গাইলি ডিঙ্গাইলে ডিঙ্গাইলেন ডিঙ্গাইয়া ডিঙ্গাইয়াছ ডিঙ্গাইয়াছি ডিঙ্গাইয়াছিল ডিঙ্গাইয়াছিলাম ডিঙ্গাইয়াছিলি ডিঙ্গাইয়াছিলে ডিঙ্গাইয়াছিলেন ডিঙ্গাইয়াছিস ডিঙ্গাইয়াছে ডিঙ্গাইয়াছেন ডিঙ্গাইয়ো ডিঙ্গাক ডিঙ্গাতে ডিঙ্গান ডিঙ্গানো ডিঙ্গাস ডিঙ্গি ডিঙ্গিস ডিঙ্গিয়ে ডিঙ্গিয়েছ ডিঙ্গিয়েছি ডিঙ্গিয়েছিল ডিঙ্গিয়েছিলাম ডিঙ্গিয়েছিলি ডিঙ্গিয়েছিলে ডিঙ্গিয়েছিলেন ডিঙ্গিয়েছিলেম ডিঙ্গিয়েছিলুম ডিঙ্গিয়েছিস ডিঙ্গিয়েছে ডিঙ্গিয়েছেন ডিঙ্গিয়ো ডিঙ্গচ্ছ ডিঙ্গচ্ছি ডিঙ্গচ্ছিল ডিঙ্গচ্ছিলাম ডিঙ্গচ্ছিলি ডিঙ্গচ্ছিলে ডিঙ্গচ্ছিলেন ডিঙ্গচ্ছিলেম ডিঙ্গচ্ছিলুম ডিঙ্গচ্ছিস ডিঙ্গচ্ছে ডিঙ্গচ্ছেন ডিঙ্গো ডিঙ্গত ডিঙ্গতাম ডিঙ্গতিস ডিঙ্গতে ডিঙ্গতেন ডিঙ্গতেম ডিঙ্গতুম ডিঙ্গন ডিঙ্গনো ডিঙ্গব ডিঙ্গবার ডিঙ্গবি ডিঙ্গবে ডিঙ্গবেন ডিঙ্গবো ডিঙ্গল ডিঙ্গলাম ডিঙ্গলি ডিঙ্গলে ডিঙ্গলেন ডিঙ্গলেম ডিঙ্গলুম ডিঙ্গস ডিঙা ডিঙাই ডিঙাইও ডিঙাইত ডিঙাইতাম ডিঙাইতিস ডিঙাইতে ডিঙাইতেছ ডিঙাইতেছি ডিঙাইতেছিল ডিঙাইতেছিলাম ডিঙাইতেছিলি ডিঙাইতেছিলে ডিঙাইতেছিলেন ডিঙাইতেছিস ডিঙাইতেছে ডিঙাইতেছেন ডিঙাইতেন ডিঙাইব ডিঙাইবার ডিঙাইবি ডিঙাইবে ডিঙাইবেন ডিঙাইল ডিঙাইলাম ডিঙাইলি ডিঙাইলে ডিঙাইলেন ডিঙাইয়া ডিঙাইয়াছ ডিঙাইয়াছি ডিঙাইয়াছিল ডিঙাইয়াছিলাম ডিঙাইয়াছিলি ডিঙাইয়াছিলে ডিঙাইয়াছিলেন ডিঙাইয়াছিস ডিঙাইয়াছে ডিঙাইয়াছেন ডিঙাইয়ো ডিঙাক ডিঙান ডিঙানো ডিঙাস ডিঙি ডিঙিস ডিঙিয়ে ডিঙিয়েছ ডিঙিয়েছি ডিঙিয়েছিল ডিঙিয়েছিলাম ডিঙিয়েছিলি ডিঙিয়েছিলে ডিঙিয়েছিলেন ডিঙিয়েছিলেম ডিঙিয়েছিলুম ডিঙিয়েছিস ডিঙিয়েছে ডিঙিয়েছেন ডিঙিয়ো ডিঙচ্ছ ডিঙচ্ছি ডিঙচ্ছিল ডিঙচ্ছিলাম ডিঙচ্ছিলি ডিঙচ্ছিলে ডিঙচ্ছিলেন ডিঙচ্ছিলেম ডিঙচ্ছিলুম ডিঙচ্ছিস ডিঙচ্ছে ডিঙচ্ছেন ডিঙো ডিঙত ডিঙতাম ডিঙতিস ডিঙতে ডিঙতেন ডিঙতেম ডিঙতুম ডিঙন ডিঙনো ডিঙব ডিঙবার ডিঙবি ডিঙবে ডিঙবেন ডিঙবো ডিঙল ডিঙলাম ডিঙলি ডিঙলে ডিঙলেন ডিঙলেম ডিঙলুম ডিঙস ডিজঅর্ডার ডিজাইন ডিজাইনার ডিজাইনিং ডিজাইনস ডিজাস্টার ডিজাস্টার্স ডিজায়ার ডিজিজ ডিজিট ডিজিটাল ডিজিটালক্যামেরা ডিজিটালিস ডিজেবল ডিজেবল্ড ডিজেল ডিজনি ডিজুস ডিটেক্ট ডিটেকটিভ ডিটেকটেড ডিটেক্টর ডিটেকশন ডিটেল ডিড ডিডকা ডিণ্ডিম ডিণ্ডির ডিণ্ডিশ ডিন ডিনামাইট ডিনার ডিনারপার্টি ডিনেচার ডিপ ডিপার্টমেন্ট ডিপো ডিপোজিট ডিপোজিটর ডিপোজিটরি ডিপুটি ডিপুটিগিরি ডিপথেরিয়া ডিপ্রেশন ডিপলেশন ডিপ্লোমা ডিপ্লোম্যাটিক ডিপ্লোম্যাসি ডিফাইন ডিফারেন্ট ডিফারেন্স ডিফারেন্সিয়াল ডিফারেন্সিয়েশন ডিফিকাল্ট ডিফেন্ডার ডিফেন্স ডিফেন্সিভ ডিফল্ট ডিবা ডিবাগার ডিবি ডিবিপুলিশ ডিবিয়া ডিবে ডিবেঞ্চার ডিবেট ডিব্বা ডিভাইডিং ডিভাইন ডিভাইস ডিভান ডিভিডেন্ড ডিভিশন ডিভোর্স ডিভোর্সি ডিম ডিমওলা ডিমওয়ালা ডিমকি ডিমাই ডিমান্ড ডিমান্ডিং ডিমারেজ ডিমিকি ডিমিডিমি ডিমোক্রিটাস ডিমছাড়া ডিম্যান্ড ডিমপ্রসবকারী ডিম্পল ডিম্ব ডিম্বক ডিম্বকোষ ডিম্বাকার ডিম্বাকৃতি ডিম্বাণু ডিম্বাশয় ডিম্বিকা ডিম্বজ ডিম্বজাত ডিম্ববহুল ডিম্বসাচ ডিম্ভ ডিম্ভক ডিরেক্ট ডিরেক্টওয়ে ডিরেক্টর ডিরেক্টরি ডিরেল ডিল ডিলার ডিলিউসন ডিলিট ডিশ ডিশএন্টেনা ডিস ডিসঅর্ডার ডিসঅর্ডারস ডিসএন্টেনা ডিসএবিলিটি ডিস্ক ডিসকাউন্ট ডিসকাভারি ডিসকাভারিস ডিসকাশন ডিসকাস ডিসকাসড ডিসকভারি ডিসক্রিট ডিসগ্রেস ডিসগ্রেসফুল ডিসায়ার ডিসিপ্লিন ডিসিশন ডিসিশনস ডিসচার্জ ডিসেন্ট ডিসেন্ডিং ডিসেপশন ডিসেম্বর ডিসজয়েন্ট ডিস্টার্ব ডিস্টালিস ডিস্টিংগুইশড ডিস্টিংগুয়িশড ডিস্টিংশন ডিস্টিলারি ডিসটেম্পার ডিসট্যান্ট ডিসট্রিক্ট ডিসট্রিক্টবোর্ড ডিস্ট্রিবিউট ডিস্ট্রিবিউটার্স ডিস্ট্রিবিউটেড ডিস্ট্রিবিউশন ডিসপেনসারি ডিসপেপসিয়া ডিসপ্লে ডিসমিস ডিসমিসাল ডিহাইড্রোজিনেজ ডিহান ডিহি ডিহিদার ডিহিবন্দী ডিয়ার ডিয়েগো ডী ডীন ডীপ ডে ডেংগু ডেইজ ডেইরি ডেইরী ডেইল ডেইলি ডেইয়া ডেউড়ি ডেউয়া ডেও ডেক ডেকি ডেকচি ডেকচী ডেকচেয়ার ডেকেছ ডেকেছি ডেকেছিল ডেকেছিলাম ডেকেছিলি ডেকেছিলে ডেকেছিলেন ডেকেছিলেম ডেকেছিলুম ডেকেছিস ডেকেছে ডেকেছেন ডেকো ডেকোরেশন ডেকরা ডেকুরা ডেকরামি ডেকরি ডেক্রন ডেক্সটপ ডেগ ডেগচি ডেগচী ডেগরা ডেগুরা ডেঙ্গু ডেঙ্গো ডেঙ্গুজ্বর ডেঙ্গর ডেঙো ডেজ ডেজিগনেশন ডেঞ্জারাস ডেট ডেটা ডেটিং ডেট্রয়েট ডেটল ডেটলাইন ডেড ডেডিকেটেড ডেডলক ডেডলাইন ডেডলি ডেথ ডেথওয়াচ ডেথলাইভ ডেথলি ডেনিশ ডেনীয় ডেন্টাল ডেন্টিন ডেন্টেট ডেন্টন ডেনভার ডেনমার্ক ডেনসিটি ডেঁপ ডেঁপো ডেঁপোছেলে ডেঁপোমি ডেপুটি ডেপুটিগিরি ডেপুটিত্ব ডেপুটিপনা ডেপুরা ডেপল ডেঁপল ডেফিনিট ডেফিনিশন ডেফিসিয়েন্ট ডেফিসিয়েন্সি ডেঁফো ডেফোডিল ডেফল ডেবিট ডেবিয়ান ডেবিয়ে ডেবডেবে ডেবরা ডেবরী ডেভিড ডেভিল ডেভিলস ডেভেলপ ডেভেলপার ডেভেলপিং ডেভেলপমেন্ট ডেম ডেমাক ডেমাগ ডেমারেজ ডেমি ডেমিয়েন ডেমী ডেমেজ ডেমো ডেমোক্রিটাস ডেমোক্রেট ডেমোক্রেটিক ডেমোক্রেসি ডেমোক্র্যাটিক ডেমোগ্রাফি ডেমনস্ট্রেশন ডেমরা ডের ডেরা ডেরাডাণ্ডা ডেরিভেটিভ ডেল ডেলকো ডেলা ডেলাইট ডেলাক্ষীর ডেলানো ডেলামারা ডেলি ডেলিকেট ডেলিগেশন ডেলিপ্যাসেঞ্জার ডেলিভারি ডেলিয়াম ডেলো ডেলটা ডেল্টা ডেলপোর্ট ডেশ ডেস ডেস্ক ডেস্কটপ ডেসক্রিপটিভ ডেসক্রিপশন ডেসা ডেসার্ট ডেসার্টা ডেসি ডেসিগনেশন ডেসিবল ডেসিমাল ডেসিমিটার ডেসিম্যাল ডেসিলিটার ডেস্টিনি ডেসটিনেশন ডেস্ট্রয়ার ডেস্পারাডো ডেস্পারেট ডেহান ডেহেরি ডেহুয়া ডেড়ি ডেড়িবাড়ি ডেড়ী ডেড়ীবাড়ি ডেয়ারি ডেঁয়ে ডেঁয়েপিঁপড়া ডেঁয়েপিঁপড়ে ডেঁয়ো ডেঁয়োপিঁপড়া ডেঁয়োপিঁপড়ে ডোইরে ডোকরা ডোকরান ডোকরানো ডোকলা ডোঙ্গা ডোঙ্গাকল ডোঙ্গাচোর ডোঙ্গর ডোঙা ডোঙাকল ডোজ ডোজার ডোনার ডোন্ট ডোপ ডোপামিন ডোব ডোবা ডোবাক ডোবাচ্ছ ডোবাচ্ছি ডোবাচ্ছিল ডোবাচ্ছিলাম ডোবাচ্ছিলি ডোবাচ্ছিলে ডোবাচ্ছিলেন ডোবাচ্ছিলেম ডোবাচ্ছিলুম ডোবাচ্ছিস ডোবাচ্ছে ডোবাচ্ছেন ডোবাত ডোবাতাম ডোবাতিস ডোবাতে ডোবাতেন ডোবাতেম ডোবাতুম ডোবান ডোবানো ডোবাব ডোবাবার ডোবাবি ডোবাবে ডোবাবেন ডোবাবো ডোবাল ডোবালাম ডোবালি ডোবালে ডোবালেন ডোবালেম ডোবালুম ডোবাস ডোবে ডোবেন ডোববার ডোবর ডোম ডোমকাক ডোমিনিকা ডোমিনিকান ডোমিনিয়ন ডোমচিল ডোমেইন ডোমেন ডোমেনিকা ডোমেনিকান ডোমেনিকো ডোমেস্টিক ডোমনা ডোমনি ডোমনী ডোম্ব ডোম্বি ডোম্বী ডোর ডোরকৌপীন ডোরা ডোরাকাটা ডোরাকৃতি ডোরাডোরা ডোরি ডোরী ডোরবেল ডোরস ডোরসেট ডোল ডোলা ডোলি ডোলী ডোলভরা ডোলশুদ্ধ ডৌল ডৌলশুদ্ধ ডজন ডট ডটকম ড্যাং ড্যাংডেঙিয়ে ড্যাংড্যাং ড্যাংপাড়া ড্যাক ড্যাকরা ড্যাগার ড্যাঙড্যাঙ ড্যানিয়েল ড্যান্স ড্যান্সহল ড্যাপ ড্যাঁপ ড্যাফোডিল ড্যাবডেবে ড্যাবড্যাব ড্যাবড্যাবা ড্যাবড্যাবে ড্যাবরা ড্যাম ড্যামেজ ডটার ডটার্স ড্যালা ড্যাশ ডডনং ডণ্ড ডণ্ডি ডুণ্ডুভ ডন ডনকুস্তি ডনগির ডনগিরি ডনবৈঠক ডপলার ডুপ্লিকেট ডুপ্লেক্স ডুব ডুবু ডুবক ডুবুক ডবকা ডবকাই ডবকানো ডবকাবয়স ডুবকি ডুবগি ডুবা ডুবাই ডুবাইও ডুবাইত ডুবাইতাম ডুবাইতিস ডুবাইতে ডুবাইতেছ ডুবাইতেছি ডুবাইতেছিল ডুবাইতেছিলাম ডুবাইতেছিলি ডুবাইতেছিলে ডুবাইতেছিলেন ডুবাইতেছিস ডুবাইতেছে ডুবাইতেছেন ডুবাইতেন ডুবাইব ডুবাইবার ডুবাইবি ডুবাইবে ডুবাইবেন ডুবাইল ডুবাইলাম ডুবাইলি ডুবাইলে ডুবাইলেন ডুবাইয়া ডুবাইয়াছ ডুবাইয়াছি ডুবাইয়াছিল ডুবাইয়াছিলাম ডুবাইয়াছিলি ডুবাইয়াছিলে ডুবাইয়াছিলেন ডুবাইয়াছিস ডুবাইয়াছে ডুবাইয়াছেন ডুবাইয়ো ডুবাক ডুবান ডুবানো ডুবারু ডুবারি ডুবারী ডুবাস ডবি ডুবি ডুবিত ডুবিতাম ডুবিতিস ডুবিতে ডুবিতেছ ডুবিতেছি ডুবিতেছিল ডুবিতেছিলাম ডুবিতেছিলি ডুবিতেছিলে ডুবিতেছিলেন ডুবিতেছিস ডুবিতেছে ডুবিতেছেন ডুবিতেন ডুবিব ডুবিবার ডুবিবি ডুবিবে ডুবিবেন ডুবিল ডুবিলাম ডুবিলি ডুবিলে ডুবিলেন ডুবিস ডুবিয়া ডুবিয়াছ ডুবিয়াছি ডুবিয়াছিল ডুবিয়াছিলাম ডুবিয়াছিলি ডুবিয়াছিলে ডুবিয়াছিলেন ডুবিয়াছিস ডুবিয়াছে ডুবিয়াছেন ডুবিয়ে ডুবিয়েছ ডুবিয়েছি ডুবিয়েছিল ডুবিয়েছিলাম ডুবিয়েছিলি ডুবিয়েছিলে ডুবিয়েছিলেন ডুবিয়েছিলেম ডুবিয়েছিলুম ডুবিয়েছিস ডুবিয়েছে ডুবিয়েছেন ডুবিয়ো ডবী ডুবচ্ছ ডুবচ্ছি ডুবচ্ছিল ডুবচ্ছিলাম ডুবচ্ছিলি ডুবচ্ছিলে ডুবচ্ছিলেন ডুবচ্ছিলেম ডুবচ্ছিলুম ডুবচ্ছিস ডুবচ্ছে ডুবচ্ছেন ডুবে ডুবেছ ডুবেছি ডুবেছিল ডুবেছিলাম ডুবেছিলি ডুবেছিলে ডুবেছিলেন ডুবেছিলেম ডুবেছিলুম ডুবেছিস ডুবেছে ডুবেছেন ডুবেডুবে ডুবেন ডুবো ডুবোজাহাজ ডুবোপাহাড় ডবোল ডুবছ ডুবছি ডুবছিল ডুবছিলাম ডুবছিলি ডুবছিলে ডুবছিলেন ডুবছিলেম ডুবছিলুম ডুবছিস ডুবছে ডুবছেন ডুবজল ডবডব ডুবুডুবু ডুবডুবি ডবডবে ডুবত ডুবতাম ডুবতিস ডুবতে ডুবতেন ডুবতেম ডুবতুম ডুবন ডুবুন ডুবনিয়াম ডুবনো ডুবন্ত ডুবব ডুববার ডুববি ডুববে ডুববেন ডুববো ডুবুরি ডুবুরী ডবল ডবলু ডুবল ডবলা ডুবলাম ডুবলি ডবলিউ ডব্লিউ ডুবলে ডুবলেন ডুবলেম ডবলডেকার ডবলপ্রমোশন ডবলব্যারেল ডুবলুম ডবলস ডুবস ডুবসাঁতার ডুম ডুমকি ডুমা ডুমাডুমা ডমিনিকা ডমিনিকান ডমিন্যান্ট ডমেস্টিকা ডুমো ডমডম ডুমনি ডুমনী ডম্ফ ডম্বর ডম্বরু ডম্বুর ডম্বুরু ডুম্বুর ডম্বুরা ডম্বুরামধ্য ডম্বরী ডম্বরুমধ্য ডম্বুরুমধ্য ডম্বল ডমর ডমরু ডুমুর ডুমুরিয়া ডুমুরেরফুল ডমরুধ্বনি ডুমুরফুল ডমরুমধ্য ডর ড্র ড্রইং ড্রইংক্লাশ ড্রইংপেনসিল ড্রইংবুক ড্রইংরুম ডরা ডুরা ড্রাংকেন ডরাঅ ডরাই ড্রাই ডরাইও ডরাইত ডরাইতাম ডরাইতিস ডরাইতে ডরাইতেছ ডরাইতেছি ডরাইতেছিল ডরাইতেছিলাম ডরাইতেছিলি ডরাইতেছিলে ডরাইতেছিলেন ডরাইতেছিস ডরাইতেছে ডরাইতেছেন ডরাইতেন ডরাইব ডরাইবার ডরাইবি ডরাইবে ডরাইবেন ড্রাইভ ড্রাইভওয়ে ড্রাইভার ড্রাইভিং ডরাইল ডরাইলাম ডরাইলি ডরাইলে ডরাইলেন ডরাইয়া ডরাইয়াছ ডরাইয়াছি ডরাইয়াছিল ডরাইয়াছিলাম ডরাইয়াছিলি ডরাইয়াছিলে ডরাইয়াছিলেন ডরাইয়াছিস ডরাইয়াছে ডরাইয়াছেন ডরাইয়ো ড্রাউট ডরাক ড্রাকো ড্রাকুলা ড্রাগ ড্রাগন ড্রাগস ডরাচ্ছ ডরাচ্ছি ডরাচ্ছিল ডরাচ্ছিলাম ডরাচ্ছিলি ডরাচ্ছিলে ডরাচ্ছিলেন ডরাচ্ছিলেম ডরাচ্ছিলুম ডরাচ্ছিস ডরাচ্ছে ডরাচ্ছেন ডরাত ডরাতাম ডরাতিস ডরাতে ডরাতেন ডরাতেম ডরাতুম ডরান ডরানিয়া ডরানে ডরানো ড্রাফট ড্রাফটসম্যান ডরাব ডরাবার ডরাবি ডরাবে ডরাবেন ডরাবো ড্রাম ড্রামাটিক ড্রামার ড্রামাস ড্রামবাদক ড্রামস ডরাল ডরালাম ডরালি ডরালে ডরালেন ডরালেম ডরালুম ডরাস ডরাসি ডরায় ডরায়িলী ডরি ডুরি ড্রিংক ড্রিঙ্ক ড্রিঙ্কিনওয়াটার ড্রিবল ড্রিবলিং ড্রিম ড্রিমিং ড্রিমস ড্রিল ড্রিলমাস্টার ডুরিয়া ডরিয়ে ডরিয়েছ ডরিয়েছি ডরিয়েছিল ডরিয়েছিলাম ডরিয়েছিলি ডরিয়েছিলে ডরিয়েছিলেন ডরিয়েছিলেম ডরিয়েছিলুম ডরিয়েছিস ডরিয়েছে ডরিয়েছেন ডরিয়ো ডুরে ড্রেন ডুরেশাড়ি ড্রেস ড্রেসিং ড্রেসিংটেবিল ড্রেসিংরুম ড্রেসমেকার ডরন ড্রপ ড্রপার ড্রপসিন ডরমিটরি ড্রসোফিলা ড্রয়ার ড্রয়িং ড্রয়িংরুম ডল ডলক ডলুক ডলা ডুলা ডলাই ডলাইও ডলাইত ডলাইতাম ডলাইতিস ডলাইতে ডলাইতেছ ডলাইতেছি ডলাইতেছিল ডলাইতেছিলাম ডলাইতেছিলি ডলাইতেছিলে ডলাইতেছিলেন ডলাইতেছিস ডলাইতেছে ডলাইতেছেন ডলাইতেন ডলাইব ডলাইবার ডলাইবি ডলাইবে ডলাইবেন ডলাইমলাই ডলাইল ডলাইলাম ডলাইলি ডলাইলে ডলাইলেন ডলাইয়া ডলাইয়াছ ডলাইয়াছি ডলাইয়াছিল ডলাইয়াছিলাম ডলাইয়াছিলি ডলাইয়াছিলে ডলাইয়াছিলেন ডলাইয়াছিস ডলাইয়াছে ডলাইয়াছেন ডলাইয়ো ডলাও ডলাক ডলাচ্ছ ডলাচ্ছি ডলাচ্ছিল ডলাচ্ছিলাম ডলাচ্ছিলি ডলাচ্ছিলে ডলাচ্ছিলেন ডলাচ্ছিলেম ডলাচ্ছিলুম ডলাচ্ছিস ডলাচ্ছে ডলাচ্ছেন ডলাডলি ডলাত ডলাতাম ডলাতিস ডলাতে ডলাতেন ডলাতেম ডলাতুম ডলান ডলানো ডলাব ডলাবার ডলাবি ডলাবে ডলাবেন ডলাবো ডলার ডলাল ডলালাম ডলালি ডলালে ডলালেন ডলালেম ডলালুম ডলাস ডলি ডুলি ডুলিকা ডলিডলি ডলিত ডলিতাম ডলিতিস ডলিতে ডলিতেছ ডলিতেছি ডলিতেছিল ডলিতেছিলাম ডলিতেছিলি ডলিতেছিলে ডলিতেছিলেন ডলিতেছিস ডলিতেছে ডলিতেছেন ডলিতেন ডলিব ডলিবার ডলিবি ডলিবে ডলিবেন ডলিল ডলিলাম ডলিলি ডলিলে ডলিলেন ডলিস ডলিয়া ডলিয়াছ ডলিয়াছি ডলিয়াছিল ডলিয়াছিলাম ডলিয়াছিলি ডলিয়াছিলে ডলিয়াছিলেন ডলিয়াছিস ডলিয়াছে ডলিয়াছেন ডলিয়ে ডলিয়েছ ডলিয়েছি ডলিয়েছিল ডলিয়েছিলাম ডলিয়েছিলি ডলিয়েছিলে ডলিয়েছিলেন ডলিয়েছিলেম ডলিয়েছিলুম ডলিয়েছিস ডলিয়েছে ডলিয়েছেন ডলিয়ো ডুলী ডলে ডলেছ ডলেছি ডলেছিল ডলেছিলাম ডলেছিলি ডলেছিলে ডলেছিলেন ডলেছিলেম ডলেছিলুম ডলেছিস ডলেছে ডলেছেন ডলেন ডলো ডলছ ডলছি ডলছিল ডলছিলাম ডলছিলি ডলছিলে ডলছিলেন ডলছিলেম ডলছিলুম ডলছিস ডলছে ডলছেন ডলত ডলতাম ডলতিস ডলতে ডলতেন ডলতেম ডলতুম ডলন ডলুন ডলনা ডলফিন ডলব ডলবার ডলবি ডলবে ডলবেন ডলবো ডলল ডল্লক ডললাম ডললি ডললে ডললেন ডললেম ডললুম ডস ডসন ডহা ডহর ডহরা ডহরাজমি ডহরপানি ডুয়েট ডুয়েল ডয়ন".split(" "),
              w_ddh: "ঢ ঢু ঢুঁ ঢং ঢংঢং ঢুইকা ঢক ঢুক ঢক্ক ঢুকক ঢুকুক ঢক্কা ঢক্কাধ্বনি ঢক্কানাদ ঢক্কানিনাদ ঢুকা ঢুকাই ঢুকাইও ঢুকাইত ঢুকাইতাম ঢুকাইতিস ঢুকাইতে ঢুকাইতেছ ঢুকাইতেছি ঢুকাইতেছিল ঢুকাইতেছিলাম ঢুকাইতেছিলি ঢুকাইতেছিলে ঢুকাইতেছিলেন ঢুকাইতেছিস ঢুকাইতেছে ঢুকাইতেছেন ঢুকাইতেন ঢুকাইব ঢুকাইবার ঢুকাইবি ঢুকাইবে ঢুকাইবেন ঢুকাইল ঢুকাইলাম ঢুকাইলি ঢুকাইলে ঢুকাইলেন ঢুকাইয়া ঢুকাইয়াছ ঢুকাইয়াছি ঢুকাইয়াছিল ঢুকাইয়াছিলাম ঢুকাইয়াছিলি ঢুকাইয়াছিলে ঢুকাইয়াছিলেন ঢুকাইয়াছিস ঢুকাইয়াছে ঢুকাইয়াছেন ঢুকাইয়ো ঢুকাক ঢুকান ঢুকানো ঢকার ঢকাস ঢুকাস ঢুকায়া ঢুকি ঢুকিত ঢুকিতাম ঢুকিতিস ঢুকিতে ঢুকিতেছ ঢুকিতেছি ঢুকিতেছিল ঢুকিতেছিলাম ঢুকিতেছিলি ঢুকিতেছিলে ঢুকিতেছিলেন ঢুকিতেছিস ঢুকিতেছে ঢুকিতেছেন ঢুকিতেন ঢুকিব ঢুকিবার ঢুকিবি ঢুকিবে ঢুকিবেন ঢুকিল ঢুকিলাম ঢুকিলি ঢুকিলে ঢুকিলেন ঢুকিস ঢুকিয়া ঢুকিয়াছ ঢুকিয়াছি ঢুকিয়াছিল ঢুকিয়াছিলাম ঢুকিয়াছিলি ঢুকিয়াছিলে ঢুকিয়াছিলেন ঢুকিয়াছিস ঢুকিয়াছে ঢুকিয়াছেন ঢুকিয়ে ঢুকিয়েছ ঢুকিয়েছি ঢুকিয়েছিল ঢুকিয়েছিলাম ঢুকিয়েছিলি ঢুকিয়েছিলে ঢুকিয়েছিলেন ঢুকিয়েছিলেম ঢুকিয়েছিলুম ঢুকিয়েছিস ঢুকিয়েছে ঢুকিয়েছেন ঢুকিয়ো ঢুকচ্ছ ঢুকচ্ছি ঢুকচ্ছিল ঢুকচ্ছিলাম ঢুকচ্ছিলি ঢুকচ্ছিলে ঢুকচ্ছিলেন ঢুকচ্ছিলেম ঢুকচ্ছিলুম ঢুকচ্ছিস ঢুকচ্ছে ঢুকচ্ছেন ঢুকে ঢুকেছ ঢুকেছি ঢুকেছিল ঢুকেছিলাম ঢুকেছিলি ঢুকেছিলে ঢুকেছিলেন ঢুকেছিলেম ঢুকেছিলুম ঢুকেছিস ঢুকেছে ঢুকেছেন ঢুকেন ঢুকো ঢুকছ ঢুকছি ঢুকছিল ঢুকছিলাম ঢুকছিলি ঢুকছিলে ঢুকছিলেন ঢুকছিলেম ঢুকছিলুম ঢুকছিস ঢুকছে ঢুকছেন ঢকঢক ঢুকঢুক ঢুকত ঢুকতাম ঢুকতিস ঢুকতে ঢুকতেছে ঢুকতেন ঢুকতেম ঢুকতুম ঢুকন ঢুকুন ঢুকনো ঢুকব ঢুকবার ঢুকবি ঢুকবে ঢুকবেন ঢুকবো ঢুকল ঢুকলাম ঢুকলি ঢুকলে ঢুকলেন ঢুকলেম ঢুকলুম ঢুকস ঢঙ ঢঙ্গ ঢঙ্গি ঢঙ্গী ঢঙি ঢঙী ঢাঁই ঢাইকা ঢাউস ঢাক ঢাকুক ঢাকা ঢাকাই ঢাকাইয়া ঢাকাওয়াসা ঢাকাক্লাব ঢাকাকলেজ ঢাকাগামী ঢাকাচিত্র ঢাকাঢাকা ঢাকাঢাকি ঢাকাবাসী ঢাকাবিভাগ ঢাকারশাড়ি ঢাকাশহর ঢাকাস্থ ঢাকি ঢাকিত ঢাকিতাম ঢাকিতিস ঢাকিতে ঢাকিতেছ ঢাকিতেছি ঢাকিতেছিল ঢাকিতেছিলাম ঢাকিতেছিলি ঢাকিতেছিলে ঢাকিতেছিলেন ঢাকিতেছিস ঢাকিতেছে ঢাকিতেছেন ঢাকিতেন ঢাকিব ঢাকিবার ঢাকিবি ঢাকিবে ঢাকিবেন ঢাকিল ঢাকিলাম ঢাকিলি ঢাকিলে ঢাকিলেন ঢাকিস ঢাকিয়া ঢাকিয়াছ ঢাকিয়াছি ঢাকিয়াছিল ঢাকিয়াছিলাম ঢাকিয়াছিলি ঢাকিয়াছিলে ঢাকিয়াছিলেন ঢাকিয়াছিস ঢাকিয়াছে ঢাকিয়াছেন ঢাকিয়ো ঢাকেন ঢাকেশ্বরী ঢাকো ঢাকছ ঢাকছি ঢাকছিল ঢাকছিলাম ঢাকছিলি ঢাকছিলে ঢাকছিলেন ঢাকছিলেম ঢাকছিলুম ঢাকছিস ঢাকছে ঢাকছেন ঢাকঢাক ঢাকঢোল ঢাকত ঢাকতাম ঢাকতিস ঢাকতে ঢাকতেন ঢাকতেম ঢাকতুম ঢাকন ঢাকুন ঢাকনা ঢাকনাওয়ালা ঢাকনি ঢাকুনি ঢাকনিযুক্ত ঢাকব ঢাকবাজান ঢাকবাজানো ঢাকবাজনাদার ঢাকবার ঢাকবি ঢাকবে ঢাকবেন ঢাকবো ঢাকুম ঢাকুরিয়া ঢাকল ঢাকলাম ঢাকলি ঢাকলে ঢাকলেন ঢাকলেম ঢাকলুম ঢাঙ্গাতি ঢাচা ঢাঁচা ঢাঁট ঢাঁটী ঢাপা ঢাবি ঢাবস ঢামাল ঢামালি ঢামন ঢাল ঢালু ঢালুক ঢালকি ঢালুগিরি ঢালা ঢালাই ঢালাইকর ঢালাইখানা ঢালাইদার ঢালাউ ঢালাও ঢালাওবিছানা ঢালাওভাবে ঢালাকড়াই ঢালাঢালি ঢালালোহা ঢালি ঢালিত ঢালিতাম ঢালিতিস ঢালিতে ঢালিতেছ ঢালিতেছি ঢালিতেছিল ঢালিতেছিলাম ঢালিতেছিলি ঢালিতেছিলে ঢালিতেছিলেন ঢালিতেছিস ঢালিতেছে ঢালিতেছেন ঢালিতেন ঢালিনী ঢালিব ঢালিবার ঢালিবি ঢালিবে ঢালিবেন ঢালিল ঢালিলাম ঢালিলি ঢালিলে ঢালিলেন ঢালিস ঢালিয়া ঢালিয়াছ ঢালিয়াছি ঢালিয়াছিল ঢালিয়াছিলাম ঢালিয়াছিলি ঢালিয়াছিলে ঢালিয়াছিলেন ঢালিয়াছিস ঢালিয়াছে ঢালিয়াছেন ঢালিয়ো ঢালী ঢালীপাইক ঢালে ঢালেন ঢালছ ঢালছি ঢালছিল ঢালছিলাম ঢালছিলি ঢালছিলে ঢালছিলেন ঢালছিলেম ঢালছিলুম ঢালছিস ঢালছে ঢালছেন ঢালত ঢালতাম ঢালতিস ঢালতে ঢালতেন ঢালতেম ঢালতুম ঢালধারী ঢালন ঢালুন ঢালনি ঢালনদার ঢালব ঢালবার ঢালবি ঢালবে ঢালবেন ঢালবো ঢালল ঢাললাম ঢাললি ঢাললে ঢাললেন ঢাললেম ঢাললুম ঢালশুমার ঢালসুমর ঢিক ঢিকক ঢিকা ঢিকাই ঢিকাইও ঢিকাইত ঢিকাইতাম ঢিকাইতিস ঢিকাইতে ঢিকাইতেছ ঢিকাইতেছি ঢিকাইতেছিল ঢিকাইতেছিলাম ঢিকাইতেছিলি ঢিকাইতেছিলে ঢিকাইতেছিলেন ঢিকাইতেছিস ঢিকাইতেছে ঢিকাইতেছেন ঢিকাইতেন ঢিকাইব ঢিকাইবার ঢিকাইবি ঢিকাইবে ঢিকাইবেন ঢিকাইল ঢিকাইলাম ঢিকাইলি ঢিকাইলে ঢিকাইলেন ঢিকাইয়া ঢিকাইয়াছ ঢিকাইয়াছি ঢিকাইয়াছিল ঢিকাইয়াছিলাম ঢিকাইয়াছিলি ঢিকাইয়াছিলে ঢিকাইয়াছিলেন ঢিকাইয়াছিস ঢিকাইয়াছে ঢিকাইয়াছেন ঢিকাইয়ো ঢিকাক ঢিকান ঢিকানো ঢিকাস ঢিকি ঢিকিস ঢিকিয়ে ঢিকিয়েছ ঢিকিয়েছি ঢিকিয়েছিল ঢিকিয়েছিলাম ঢিকিয়েছিলি ঢিকিয়েছিলে ঢিকিয়েছিলেন ঢিকিয়েছিলেম ঢিকিয়েছিলুম ঢিকিয়েছিস ঢিকিয়েছে ঢিকিয়েছেন ঢিকিয়ো ঢিকচ্ছ ঢিকচ্ছি ঢিকচ্ছিল ঢিকচ্ছিলাম ঢিকচ্ছিলি ঢিকচ্ছিলে ঢিকচ্ছিলেন ঢিকচ্ছিলেম ঢিকচ্ছিলুম ঢিকচ্ছিস ঢিকচ্ছে ঢিকচ্ছেন ঢিকো ঢিকত ঢিকতাম ঢিকতিস ঢিকতে ঢিকতেন ঢিকতেম ঢিকতুম ঢিকন ঢিকনো ঢিকব ঢিকবার ঢিকবি ঢিকবে ঢিকবেন ঢিকবো ঢিকরানো ঢিকল ঢিকলাম ঢিকলি ঢিকলে ঢিকলেন ঢিকলেম ঢিকলুম ঢিকস ঢিট ঢিটানি ঢিটেমি ঢিটপনা ঢিঠ ঢিড ঢিডঢিকার ঢিঢি ঢিঢিক্কার ঢিঢিকার ঢিঢিরব ঢিপ ঢিপান ঢিপানো ঢিপি ঢিপী ঢিপেশোকা ঢিপঢিপ ঢিপন ঢিপনি ঢিপুনি ঢিপলা ঢিপুলি ঢিপলে ঢিবি ঢিবী ঢিবরি ঢিবলে ঢিমা ঢিমাতাল ঢিমাতেতালা ঢিমে ঢিমেতাল ঢিমেতেতালা ঢিল ঢিলা ঢিলাজামা ঢিলাঢালা ঢিলাঢিলি ঢিলান ঢিলানো ঢিলামানুষ ঢিলামি ঢিলাহাতা ঢিলে ঢিলেগল্প ঢিলেঢালা ঢিলেমি ঢিসঢিস ঢীট ঢীটপনা ঢীঢী ঢীঢীক্কার ঢীঢীকার ঢীঢীরব ঢেউ ঢেউখেলানো ঢেউগোনা ঢেউটিন ঢেউতোলা ঢেউহীন ঢেউয়ানো ঢেকা ঢেঁকি ঢেঁকিকল ঢেঁকিগেলা ঢেঁকিঘর ঢেঁকিশাক ঢেঁকিশাল ঢেঁকিশালা ঢেঁকী ঢেঁকীশাক ঢেঁকীশাল ঢেকে ঢেকেছ ঢেকেছি ঢেকেছিল ঢেকেছিলাম ঢেকেছিলি ঢেকেছিলে ঢেকেছিলেন ঢেকেছিলেম ঢেকেছিলুম ঢেকেছিস ঢেকেছে ঢেকেছেন ঢেকো ঢেকনি ঢেকুর ঢেঁকুর ঢেকস ঢেঙ্গা ঢেঙা ঢেঁটা ঢেঁটামি ঢেঁটামো ঢেঁটরা ঢেপ ঢেপা ঢেপসা ঢেপসী ঢেপড়া ঢেপুয়া ঢেবরা ঢেমচা ঢেমন ঢেমনা ঢেমনি ঢেমসা ঢের ঢেরা ঢেরাকাটা ঢেরাসই ঢেরাসহি ঢেরি ঢেরঢের ঢেলা ঢেলামারা ঢেলে ঢেলেছ ঢেলেছি ঢেলেছিল ঢেলেছিলাম ঢেলেছিলি ঢেলেছিলে ঢেলেছিলেন ঢেলেছিলেম ঢেলেছিলুম ঢেলেছিস ঢেলেছে ঢেলেছেন ঢেলো ঢেঁশকেল ঢেঁশা ঢেঁস্কেল ঢেসা ঢেঁড় ঢেঁড়া ঢেঁড়াপেটা ঢেড়ি ঢেঁড়ি ঢেঁড়িপেটা ঢেঁড়স ঢো ঢোক ঢোঁক ঢোকা ঢোকাক ঢোকাচ্ছ ঢোকাচ্ছি ঢোকাচ্ছিল ঢোকাচ্ছিলাম ঢোকাচ্ছিলি ঢোকাচ্ছিলে ঢোকাচ্ছিলেন ঢোকাচ্ছিলেম ঢোকাচ্ছিলুম ঢোকাচ্ছিস ঢোকাচ্ছে ঢোকাচ্ছেন ঢোকাত ঢোকাতাম ঢোকাতিস ঢোকাতে ঢোকাতেন ঢোকাতেম ঢোকাতুম ঢোকান ঢোকানো ঢোকাব ঢোকাবার ঢোকাবি ঢোকাবে ঢোকাবেন ঢোকাবো ঢোকামাত্র ঢোকাল ঢোকালাম ঢোকালি ঢোকালে ঢোকালেন ঢোকালেম ঢোকালুম ঢোকাস ঢোকে ঢোকেন ঢোকেনি ঢোকবার ঢোকরা ঢোঁরা ঢোল ঢোলক ঢোলকাকার ঢোলা ঢোলাই ঢোলাঢুলা ঢোলান ঢোলানো ঢোলী ঢোলে ঢোলেন ঢোলতা ঢোলন ঢোলপেটা ঢোলবাদক ঢোলবার ঢোল্লা ঢোলশোহরত ঢোলশহরত ঢোলসমুদ্র ঢোসকা ঢোস্কা ঢোসা ঢোসর ঢোঁড় ঢোড়া ঢোঁড়া ঢোঁড়াসাপ ঢোঁড়েন ঢোঁড়ন ঢোঁড়বার ঢোয়া ঢোয়াই ঢৌকন ঢৌল ঢ্যাংগা ঢ্যাকস ঢ্যাঙ্গা ঢ্যাঙা ঢ্যাডরা ঢ্যাঁডরা ঢ্যাডড়া ঢ্যাঁডড়া ঢ্যাপ ঢ্যাপেরখই ঢ্যাপঢ্যাপ ঢ্যাপসা ঢ্যাবঢ্যাব ঢ্যামনা ঢ্যারা ঢ্যারাসই ঢ্যারাসহি ঢ্যালা ঢ্যালাঢেলা ঢ্যাঁশা ঢ্যাঁড়া ঢ্যাঁড়শ ঢ্যাঁড়স ঢুঢু ঢুঁঢু ঢুণ্ঢন ঢন ঢনা ঢনঢন ঢপ ঢুপ ঢুপি ঢুপঢাপ ঢপঢপ ঢবঢব ঢুমারা ঢুঁমারা ঢুরা ঢরঢর ঢল ঢুল ঢুলু ঢলক ঢলুক ঢল্ক ঢুলুক ঢলকান ঢলকানো ঢলকি ঢুলকি ঢল্কো ঢলা ঢুলা ঢলাই ঢলাইও ঢলাইত ঢলাইতাম ঢলাইতিস ঢলাইতে ঢলাইতেছ ঢলাইতেছি ঢলাইতেছিল ঢলাইতেছিলাম ঢলাইতেছিলি ঢলাইতেছিলে ঢলাইতেছিলেন ঢলাইতেছিস ঢলাইতেছে ঢলাইতেছেন ঢলাইতেন ঢলাইব ঢলাইবার ঢলাইবি ঢলাইবে ঢলাইবেন ঢলাইল ঢলাইলাম ঢলাইলি ঢলাইলে ঢলাইলেন ঢলাইয়া ঢলাইয়াছ ঢলাইয়াছি ঢলাইয়াছিল ঢলাইয়াছিলাম ঢলাইয়াছিলি ঢলাইয়াছিলে ঢলাইয়াছিলেন ঢলাইয়াছিস ঢলাইয়াছে ঢলাইয়াছেন ঢলাইয়ো ঢলাক ঢলাচ্ছ ঢলাচ্ছি ঢলাচ্ছিল ঢলাচ্ছিলাম ঢলাচ্ছিলি ঢলাচ্ছিলে ঢলাচ্ছিলেন ঢলাচ্ছিলেম ঢলাচ্ছিলুম ঢলাচ্ছিস ঢলাচ্ছে ঢলাচ্ছেন ঢলাঢল ঢলাঢলি ঢলাত ঢলাতাম ঢলাতিস ঢলাতে ঢলাতেন ঢলাতেম ঢলাতুম ঢলান ঢুলান ঢলানি ঢলানে ঢলানো ঢুলানো ঢলাব ঢলাবার ঢলাবি ঢলাবে ঢলাবেন ঢলাবো ঢলাল ঢলালাম ঢলালি ঢলালে ঢলালেন ঢলালেম ঢলালুম ঢলাস ঢুলায়ত ঢলি ঢুলি ঢলিত ঢুলিত ঢলিতাম ঢুলিতাম ঢলিতিস ঢুলিতিস ঢলিতে ঢুলিতে ঢলিতেছ ঢুলিতেছ ঢলিতেছি ঢুলিতেছি ঢলিতেছিল ঢুলিতেছিল ঢলিতেছিলাম ঢুলিতেছিলাম ঢলিতেছিলি ঢুলিতেছিলি ঢলিতেছিলে ঢুলিতেছিলে ঢলিতেছিলেন ঢুলিতেছিলেন ঢলিতেছিস ঢুলিতেছিস ঢলিতেছে ঢুলিতেছে ঢলিতেছেন ঢুলিতেছেন ঢলিতেন ঢুলিতেন ঢলিব ঢুলিব ঢলিবার ঢুলিবার ঢলিবি ঢুলিবি ঢলিবে ঢুলিবে ঢলিবেন ঢুলিবেন ঢলিল ঢুলিল ঢলিলাম ঢুলিলাম ঢলিলি ঢুলিলি ঢলিলে ঢুলিলে ঢলিলেন ঢুলিলেন ঢলিস ঢুলিস ঢলিয়া ঢুলিয়া ঢলিয়াছ ঢুলিয়াছ ঢলিয়াছি ঢুলিয়াছি ঢলিয়াছিল ঢুলিয়াছিল ঢলিয়াছিলাম ঢুলিয়াছিলাম ঢলিয়াছিলি ঢুলিয়াছিলি ঢলিয়াছিলে ঢুলিয়াছিলে ঢলিয়াছিলেন ঢুলিয়াছিলেন ঢলিয়াছিস ঢুলিয়াছিস ঢলিয়াছে ঢুলিয়াছে ঢলিয়াছেন ঢুলিয়াছেন ঢলিয়ে ঢলিয়েছ ঢলিয়েছি ঢলিয়েছিল ঢলিয়েছিলাম ঢলিয়েছিলি ঢলিয়েছিলে ঢলিয়েছিলেন ঢলিয়েছিলেম ঢলিয়েছিলুম ঢলিয়েছিস ঢলিয়েছে ঢলিয়েছেন ঢলিয়ো ঢুলিয়ো ঢুলী ঢলে ঢুলে ঢলেছ ঢুলেছ ঢলেছি ঢুলেছি ঢলেছিল ঢুলেছিল ঢলেছিলাম ঢুলেছিলাম ঢলেছিলি ঢুলেছিলি ঢলেছিলে ঢুলেছিলে ঢলেছিলেন ঢুলেছিলেন ঢলেছিলেম ঢুলেছিলেম ঢলেছিলুম ঢুলেছিলুম ঢলেছিস ঢুলেছিস ঢলেছে ঢুলেছে ঢলেছেন ঢুলেছেন ঢলেন ঢুলেন ঢলো ঢুলো ঢলছ ঢুলছ ঢলছি ঢুলছি ঢলছিল ঢুলছিল ঢলছিলাম ঢুলছিলাম ঢলছিলি ঢুলছিলি ঢলছিলে ঢুলছিলে ঢলছিলেন ঢুলছিলেন ঢলছিলেম ঢুলছিলেম ঢলছিলুম ঢুলছিলুম ঢলছিস ঢুলছিস ঢলছে ঢুলছে ঢলছেন ঢুলছেন ঢলঢল ঢুলঢুল ঢুলুঢুলু ঢলঢলিয়া ঢলঢলে ঢুলঢুলে ঢলত ঢুলত ঢলতা ঢলতাম ঢুলতাম ঢলতিস ঢুলতিস ঢলতে ঢুলতে ঢলতেন ঢুলতেন ঢলতেম ঢুলতেম ঢলতুম ঢুলতুম ঢলন ঢলুন ঢুলুন ঢুলনি ঢুলুনি ঢুলনো ঢলব ঢুলব ঢলবার ঢলবি ঢুলবি ঢলবে ঢুলবে ঢলবেন ঢুলবেন ঢলবো ঢুলবো ঢলল ঢুলল ঢললাম ঢুললাম ঢললি ঢুললি ঢললে ঢুললে ঢললেন ঢুললেন ঢললেম ঢুললেম ঢললুম ঢুললুম ঢুষ ঢুষাঢুষি ঢুষানো ঢুষনা ঢুষনী ঢুস ঢসকা ঢসকিয়া ঢুসা ঢুসাঢুসি ঢুসান ঢুসানো ঢুসোঢুসি ঢুসোঢুসো ঢসন ঢুসনা ঢুঁড় ঢুঁড়ুক ঢুঁড়া ঢুঁড়ি ঢুঁড়িত ঢুঁড়িতাম ঢুঁড়িতিস ঢুঁড়িতে ঢুঁড়িতেছ ঢুঁড়িতেছি ঢুঁড়িতেছিল ঢুঁড়িতেছিলাম ঢুঁড়িতেছিলি ঢুঁড়িতেছিলে ঢুঁড়িতেছিলেন ঢুঁড়িতেছিস ঢুঁড়িতেছে ঢুঁড়িতেছেন ঢুঁড়িতেন ঢুঁড়িব ঢুঁড়িবার ঢুঁড়িবি ঢুঁড়িবে ঢুঁড়িবেন ঢুঁড়িল ঢুঁড়িলাম ঢুঁড়িলি ঢুঁড়িলে ঢুঁড়িলেন ঢুঁড়িস ঢুঁড়িয়া ঢুঁড়িয়াছ ঢুঁড়িয়াছি ঢুঁড়িয়াছিল ঢুঁড়িয়াছিলাম ঢুঁড়িয়াছিলি ঢুঁড়িয়াছিলে ঢুঁড়িয়াছিলেন ঢুঁড়িয়াছিস ঢুঁড়িয়াছে ঢুঁড়িয়াছেন ঢুঁড়িয়ো ঢুঁড়ে ঢুঁড়েছ ঢুঁড়েছি ঢুঁড়েছিল ঢুঁড়েছিলাম ঢুঁড়েছিলি ঢুঁড়েছিলে ঢুঁড়েছিলেন ঢুঁড়েছিলেম ঢুঁড়েছিলুম ঢুঁড়েছিস ঢুঁড়েছে ঢুঁড়েছেন ঢুঁড়েন ঢুঁড়ো ঢুঁড়ছ ঢুঁড়ছি ঢুঁড়ছিল ঢুঁড়ছিলাম ঢুঁড়ছিলি ঢুঁড়ছিলে ঢুঁড়ছিলেন ঢুঁড়ছিলেম ঢুঁড়ছিলুম ঢুঁড়ছিস ঢুঁড়ছে ঢুঁড়ছেন ঢুঁড়ত ঢুঁড়তাম ঢুঁড়তিস ঢুঁড়তে ঢুঁড়তেন ঢুঁড়তেম ঢুঁড়তুম ঢুঁড়ুন ঢুঁড়ব ঢুঁড়বি ঢুঁড়বে ঢুঁড়বেন ঢুঁড়বো ঢুঁড়ল ঢুঁড়লাম ঢুঁড়লি ঢুঁড়লে ঢুঁড়লেন ঢুঁড়লেম ঢুঁড়লুম".split(" "),
              w_g: "গ গু গ.সা.গু গং গুই গইচ গইন গইবি গইবী গওর গওরাজ গওস গওহর গুখোর গুখোরি গুখোরবেটা গুখোরবেটী গুগগুল গুগগুলু গুগোল গগন গগনাঙ্গন গগনাম্বু গগনচারী গগনচুম্বী গগনে গগনতল গগনপার গগনপট গগনপথ গগনপ্রান্ত গগনপৃষ্ঠ গগনবিদারী গগনবিহারী গগনবেড় গগনমার্গ গগনমণ্ডল গগনমূল গগনস্পর্শী গুগল গুগলগ্রুপ গুগলি গগলস গুগলসার্চ গঙ্গা গঙ্গাগর্ভ গঙ্গাছড়া গঙ্গাজ গঙ্গাজাত গঙ্গাজল গঙ্গাজলি গঙ্গাজলী গঙ্গাযাত্রা গঙ্গাযাত্রী গঙ্গাযমুনা গঙ্গাতীর গঙ্গাদেবী গঙ্গাধর গঙ্গানগর গঙ্গানারায়ণ গঙ্গানদী গঙ্গাপুত্র গঙ্গাপুর গঙ্গাপ্রাপ্ত গঙ্গাপ্রাপ্তি গঙ্গাপ্রবাহ গঙ্গাফড়িং গঙ্গাবক্ষ গঙ্গাবাসী গঙ্গারাম গঙ্গারিডি গঙ্গারিদ্ধি গঙ্গালাভ গঙ্গাসংগম গঙ্গাসঙ্গম গঙ্গাসাগর গঙ্গাস্নান গঙ্গোত্তরী গঙ্গোত্রী গঙ্গোদক গঙ্গোপাধ্যায় গুঙা গুঙিও গুঙিয়ে গুঙিয়েছ গুঙিয়েছি গুঙিয়েছিল গুঙিয়েছিলাম গুঙিয়েছিলি গুঙিয়েছিলে গুঙিয়েছিলেন গুঙিয়েছিলেম গুঙিয়েছিলুম গুঙিয়েছিস গুঙিয়েছে গুঙিয়েছেন গুঙিয়ো গা গাঁ গাং গাংগ গাংচিল গাংদাড়া গাংশালিক গাই গাঁই গাইকোয়ার গাঁইগুঁই গাঁইগোত্তর গাঁইগোত্র গাইগরু গাইছ গাইছি গাইছিল গাইছিলাম গাইছিলি গাইছিলে গাইছিলেন গাইছিলেম গাইছিলুম গাইছিস গাইছে গাইছেন গাঁইট গাঁইটকাটা গাঁইটছড়া গাইড গাইডিং গাইডবুক গাইডলাইন গাইত গাইতাম গাঁইতি গাইতিস গাইতে গাইতেই গাইতেছিল গাইতেছিলাম গাইতেছিলি গাইতেছিলে গাইতেছিলেন গাইতেছিলেম গাইতেছিলুম গাইতেন গাইতেম গাইতুম গাইন গাইব গাইবান্ধা গাইবার গাইবি গাইবে গাইবেন গাইবো গাইল গাইলাম গাইলি গাইলে গাইলেন গাইলেম গাইলুম গাঁইয়া গাইয়ে গাইয়েছ গাইয়েছি গাইয়েছিল গাইয়েছিলাম গাইয়েছিলি গাইয়েছিলে গাইয়েছিলেন গাইয়েছিলেম গাইয়েছিলুম গাইয়েছিস গাইয়েছে গাইয়েছেন গাইয়েবাজিয়ে গাউচ গাউট গাউন গাউস গাউসিয়ান গাউসীয় গাও গাঁও গাওনা গাওবার গাঁওবুড়া গাঁওবুড়ো গাওরা গাওড়া গাওয়া গাওয়াক গাওয়াগান গাওয়াঘি গাওয়াচ্ছ গাওয়াচ্ছি গাওয়াচ্ছিল গাওয়াচ্ছিলাম গাওয়াচ্ছিলি গাওয়াচ্ছিলে গাওয়াচ্ছিলেন গাওয়াচ্ছিলেম গাওয়াচ্ছিলুম গাওয়াচ্ছিস গাওয়াচ্ছে গাওয়াচ্ছেন গাওয়াত গাওয়াতাম গাওয়াতিস গাওয়াতে গাওয়াতেন গাওয়াতেম গাওয়াতুম গাওয়ান গাওয়ানো গাওয়াব গাওয়াবার গাওয়াবি গাওয়াবে গাওয়াবেন গাওয়াবো গাওয়াল গাওয়ালাম গাওয়ালি গাওয়ালে গাওয়ালেন গাওয়ালেম গাওয়ালুম গাওয়াস গাক গাঁকগাঁক গাঁকগ্যাঁক গাকাঁটা গাকাঁপা গাঁগাঁ গাগতর গাগরা গাগরি গাগরী গাগরম গাগুলানো গাঘেঁষা গাঙ গাঙ্গ গাঙ্গিনী গাঙ্গচিল গাঙ্গেয় গাঙ্গদাড়া গাঙ্গশালিক গাঙিনী গাঙচিল গাঙদাড়া গাঙশালিক গাচাটাচাটি গাচ্ছিল গাচ্ছিলাম গাচ্ছিলি গাচ্ছিলে গাচ্ছিলেন গাচ্ছিলেম গাচ্ছিলুম গাছ গাছকোমর গাছগাছালি গাছগাছড়া গাছা গাছালি গাছালী গাছি গাছী গাছেকাঁঠাল গাছেচড়া গাছেচড়ানো গাছেতুলে গাছযুক্ত গাছতলা গাছপাকা গাছপাথর গাছপালা গাছলতাফল গাছড়া গাঁজ গাঁজুক গাজা গাঁজা গাঁজাইও গাঁজাইত গাঁজাইতাম গাঁজাইতিস গাঁজাইতে গাঁজাইতেছ গাঁজাইতেছি গাঁজাইতেছিল গাঁজাইতেছিলাম গাঁজাইতেছিলি গাঁজাইতেছিলে গাঁজাইতেছিলেন গাঁজাইতেছিস গাঁজাইতেছে গাঁজাইতেছেন গাঁজাইতেন গাঁজাইব গাঁজাইবার গাঁজাইবি গাঁজাইবে গাঁজাইবেন গাঁজাইল গাঁজাইলাম গাঁজাইলি গাঁজাইলে গাঁজাইলেন গাঁজাইয়া গাঁজাইয়াছ গাঁজাইয়াছি গাঁজাইয়াছিল গাঁজাইয়াছিলাম গাঁজাইয়াছিলি গাঁজাইয়াছিলে গাঁজাইয়াছিলেন গাঁজাইয়াছিস গাঁজাইয়াছে গাঁজাইয়াছেন গাঁজাইয়ো গাঁজাক গাঁজাখোর গাঁজাখুরি গাঁজাচ্ছ গাঁজাচ্ছি গাঁজাচ্ছিল গাঁজাচ্ছিলাম গাঁজাচ্ছিলি গাঁজাচ্ছিলে গাঁজাচ্ছিলেন গাঁজাচ্ছিলেম গাঁজাচ্ছিলুম গাঁজাচ্ছিস গাঁজাচ্ছে গাঁজাচ্ছেন গাঁজাযুক্ত গাঁজাত গাঁজাতাম গাঁজাতিস গাঁজাতে গাঁজাতেন গাঁজাতেম গাঁজাতুম গাঁজান গাঁজানো গাঁজাব গাঁজাবার গাঁজাবি গাঁজাবে গাঁজাবেন গাঁজাবো গাঁজাল গাঁজালাম গাঁজালি গাঁজালে গাঁজালেন গাঁজালেম গাঁজালুম গাঁজাস গাজি গাঁজি গাঁজিত গাঁজিতাম গাঁজিতিস গাঁজিতে গাঁজিতেছ গাঁজিতেছি গাঁজিতেছিল গাঁজিতেছিলাম গাঁজিতেছিলি গাঁজিতেছিলে গাঁজিতেছিলেন গাঁজিতেছিস গাঁজিতেছে গাঁজিতেছেন গাঁজিতেন গাঁজিব গাঁজিবার গাঁজিবি গাঁজিবে গাঁজিবেন গাজিরকিচ্ছা গাজিরগান গাজিরগীত গাজিরপট গাঁজিল গাঁজিলাম গাঁজিলি গাঁজিলে গাঁজিলেন গাঁজিস গাঁজিয়া গাঁজিয়াছ গাঁজিয়াছি গাঁজিয়াছিল গাঁজিয়াছিলাম গাঁজিয়াছিলি গাঁজিয়াছিলে গাঁজিয়াছিলেন গাঁজিয়াছিস গাঁজিয়াছে গাঁজিয়াছেন গাঁজিয়ে গাঁজিয়েছ গাঁজিয়েছি গাঁজিয়েছিল গাঁজিয়েছিলাম গাঁজিয়েছিলি গাঁজিয়েছিলে গাঁজিয়েছিলেন গাঁজিয়েছিলেম গাঁজিয়েছিলুম গাঁজিয়েছিস গাঁজিয়েছে গাঁজিয়েছেন গাঁজিয়ো গাজী গাজীপুর গাঁজেন গাজোরি গাজোয়ারি গাঁজছ গাঁজছি গাঁজছিল গাঁজছিলাম গাঁজছিলি গাঁজছিলে গাঁজছিলেন গাঁজছিলেম গাঁজছিলুম গাঁজছিস গাঁজছে গাঁজছেন গাঁজত গাঁজতাম গাঁজতিস গাঁজতে গাঁজতেন গাঁজতেম গাঁজতুম গাজন গাঁজন গাঁজুন গাঁজনকৃত গাঁজনি গাঁজব গাঁজবার গাজ্বালা গাঁজবি গাঁজবে গাঁজবেন গাঁজবো গাজর গাজুরি গাঁজল গাঁজলা গাঁজলাম গাঁজলি গাঁজলে গাঁজলেন গাঁজলেম গাঁজলুম গাজুড়ানো গাঝাড়া গাঝিমঝিম গাঞ্জা গাঁট গাঁটকাটা গাঁটগচ্চা গাযা গাযী গাঁটেরপয়সা গাঁটছড়া গাঁটযুক্ত গাট্টা গাঁট্টা গাঁট্টাগোট্টা গাঁট্টাগোঁট্টা গাট্টামারা গাঁটরি গাঁটুরী গাঁঠ গাঁঠকাটা গাঁঠিয়া গাঁঠছড়া গাঠনিক গাঠরি গাঁঠরি গাঁঠুরি গাড্ডা গাঢ় গাঢ়অন্ধকার গাঢাকা গাঢ়তা গাঢ়ত্ব গাঢ়দুধ গাঢ়নিদ্রা গাঢ়ভালোবাসা গাঢ়মেঘ গাঢ়রং গাঢ়শোক গাঢ়স্বর গাণিতিক গাণিতিকযুক্তি গাণিতিকযন্ত্র গাণিতিকধারা গাণিতিকধ্রুবক গাণিতিকপদ্ধতি গাণিতিকপরিভাষা গাণিতিকপ্রতীক গাণিতিকবিধি গাণিতিকবিশ্লেষণ গাণিতিকভাবে গাণিতিকসারণি গাণ্ডিব গাণ্ডিবধারী গাণ্ডীব গাণ্ডীবী গাণ্ডীবধারী গাণ্ডীবধন্বা গাণ্ডেপিণ্ডে গাণনিক গাণপত্য গাত গাঁত গাতা গাঁতা গাঁতি গাঁতিদার গাঁতেরমাল গাতব্য গাত্র গাত্রকণ্ডূয়ন গাত্রানুলেপনী গাত্রাবরণ গাত্রাবরণী গাত্রচর্ম গাত্রোত্থান গাত্রজ্বালা গাত্রদাহ গাত্রবাস গাত্রবর্ণ গাত্রবস্ত্র গাত্রমার্জনী গাত্রস্তম্ভ গাত্রহরিদ্রা গাথ গাঁথ গাথক গাঁথুক গাথা গাঁথা গাথানি গাঁথি গাথিক গাথিকা গাঁথিত গাঁথিতাম গাঁথিতিস গাঁথিতে গাঁথিতেছ গাঁথিতেছি গাঁথিতেছিল গাঁথিতেছিলাম গাঁথিতেছিলি গাঁথিতেছিলে গাঁথিতেছিলেন গাঁথিতেছিস গাঁথিতেছে গাঁথিতেছেন গাঁথিতেন গাঁথিনু গাঁথিব গাঁথিবার গাঁথিবি গাঁথিবে গাঁথিবেন গাঁথিল গাঁথিলাম গাঁথিলি গাঁথিলে গাঁথিলেন গাঁথিস গাঁথিয়া গাঁথিয়াছ গাঁথিয়াছি গাঁথিয়াছিল গাঁথিয়াছিলাম গাঁথিয়াছিলি গাঁথিয়াছিলে গাঁথিয়াছিলেন গাঁথিয়াছিস গাঁথিয়াছে গাঁথিয়াছেন গাঁথিয়ো গাঁথছ গাঁথছি গাঁথছিল গাঁথছিলাম গাঁথছিলি গাঁথছিলে গাঁথছিলেন গাঁথছিলেম গাঁথছিলুম গাঁথছিস গাঁথছে গাঁথছেন গাঁথত গাঁথতাম গাঁথতিস গাঁথতে গাঁথতেন গাঁথতেম গাঁথতুম গাঁথন গাঁথুন গাঁথনি গাঁথুনি গাঁথব গাঁথবার গাঁথবি গাঁথবে গাঁথবেন গাঁথবো গাঁথল গাঁথলাম গাঁথলি গাঁথলে গাঁথলেন গাঁথলেম গাঁথলুম গাদ গাদকাটা গাদা গাঁদা গাদাগাদা গাদাগাদি গাদানো গাঁদাফুল গাদাবন্দুক গাঁদাল গাদি গাঁদি গাদন গাধ গাধা গাধাখাটনি গাধাবোট গাধামি গাধারখাটুনি গাধারপিটুনি গাঁধাল গাঁধি গাঁধিপোকা গাধী গাধেয় গাধোওয়া গান গানওলা গানকারী গানা গানাবাজানা গানার গানার্স গানেরগলা গানেরদল গান্টার গান্দা গান্ধার গান্ধারী গান্ধারীরাগ গান্ধারদেশ গান্ধাররাজ গান্ধি গান্ধিপোকা গান্ধী গান্ধীজী গান্ধীনগর গান্ধীবাদ গান্ধর্ব গান্ধর্ব্ব গান্ধর্ববিদ্যা গান্ধর্ববিধান গান্ধর্ব্ববিদ্যা গান্ধর্ব্ববিধান গাননা গাননি গানপাউডার গানবাজনা গানবোট গানমুখ গানমেটাল গাপ গাপটি গাপুসগুপুস গাফিল গাফিলি গাফিলতি গাফেল গাফেলি গাফলত গাফলতি গাব গাবখান গাবগাছ গাবগুবাগুব গাবা গাবাইয়া গাবান গাবানো গাবি গাবিয়ে গাবচটা গাবে গাবেন গাবো গাবতলি গাবদা গাব্দা গাবদাগোবদা গাবদাগোব্দা গাব্দাগোবদা গাব্দাগোব্দা গাব্বু গাবুর গাবুরালি গাঁভার গাভারী গাভিন গাভী গাভীজাত গাভীন গাভীরূপ গাভূর গাভুরালি গাভরতি গাম গামা গামাপালোয়ান গামার গামারশ্মি গামিনী গামী গামোছা গামোড়া গামছা গামছাবাঁধা গাম্বিয়া গাম্ভারি গাম্ভীর্য গাম্ভীর্যপূর্ণ গাম্ভীর্যহীন গামলা গার গার্গী গারি গারী গারো গারোভাষা গার্জিয়ান গার্জেন গার্টার গার্ড গার্ডার গার্ডিং গার্ডিয়ান গার্ডচেন গার্ডেন গার্ডেনার গার্ডেনস গার্ডনার গারত গারদ গারফিল্ড গার্মেন্টস গারল গার্ল গার্লস গারসন গার্হপত্য গার্হস্থ গার্হস্থজীবন গার্হস্থ্য গার্হস্থ্যজীবন গার্হস্থ্যধর্ম গার্হস্থধর্ম গারুড় গারুড়িক গারুড়ী গারুয়া গাল গালুক গালগল্প গালা গালাগানো গালাগাল গালাগালি গালান গালানো গালাস গালি গালিগালাজ গালিচা গালিত গালিতাম গালিতিস গালিতে গালিতেছ গালিতেছি গালিতেছিল গালিতেছিলাম গালিতেছিলি গালিতেছিলে গালিতেছিলেন গালিতেছিস গালিতেছে গালিতেছেন গালিতেন গালিব গালিবার গালিবি গালিবে গালিবেন গালিভার গালিভারস গালিম গালিমি গালিমী গালিল গালিলাম গালিলি গালিলে গালিলেন গালিস গালিয়া গালিয়াছ গালিয়াছি গালিয়াছিল গালিয়াছিলাম গালিয়াছিলি গালিয়াছিলে গালিয়াছিলেন গালিয়াছিস গালিয়াছে গালিয়াছেন গালিয়ে গালিয়ো গালচে গালে গালেগালে গালেটোল গালেন গালেব গালেলাগা গালেহাত গালছ গালছি গালছিল গালছিলাম গালছিলি গালছিলে গালছিলেন গালছিলেম গালছিলুম গালছিস গালছে গালছেন গালজোড়া গালত গালতাম গালতিস গালতে গালতেন গালতেম গালতুম গালধরা গালন গালুন গালপাট্টা গালপারা গালফ গালব গালবাদ্য গালবার গালবি গালবে গালবেন গালবো গালভারী গালভরা গালমন্দ গালল গাললাম গাললি গাললে গাললেন গাললেম গাললুম গালসি গাসওয়া গাসহা গাহ গাহক গাহুক গাহা গাহাই গাহাইও গাহাইত গাহাইতাম গাহাইতিস গাহাইতে গাহাইতেছ গাহাইতেছি গাহাইতেছিল গাহাইতেছিলাম গাহাইতেছিলি গাহাইতেছিলে গাহাইতেছিলেন গাহাইতেছিস গাহাইতেছে গাহাইতেছেন গাহাইতেন গাহাইব গাহাইবি গাহাইবে গাহাইবেন গাহাইল গাহাইলাম গাহাইলি গাহাইলে গাহাইলেন গাহাইয়াছ গাহাইয়াছি গাহাইয়াছিল গাহাইয়াছিলাম গাহাইয়াছিলি গাহাইয়াছিলে গাহাইয়াছিলেন গাহাইয়াছিস গাহাইয়াছে গাহাইয়াছেন গাহাইয়ো গাহাক গাহাত গাহান গাহাস গাহি গাহিছে গাহিত গাহিতাম গাহিতিস গাহিতে গাহিতেছ গাহিতেছি গাহিতেছিল গাহিতেছিলাম গাহিতেছিলি গাহিতেছিলে গাহিতেছিলেন গাহিতেছিস গাহিতেছে গাহিতেছেন গাহিতেন গাহিব গাহিবার গাহিবি গাহিবে গাহিবেন গাহিল গাহিলাম গাহিলি গাহিলে গাহিলেন গাহিস গাহিয়া গাহিয়াছ গাহিয়াছি গাহিয়াছিল গাহিয়াছিলাম গাহিয়াছিলি গাহিয়াছিলে গাহিয়াছিলেন গাহিয়াছিস গাহিয়াছে গাহিয়াছেন গাহিয়ো গাহে গাহেন গাহন গাহুন গাড় গাড়ু গাঁড় গাড়ওয়ান গাড়ুক গাড়া গাড়ানো গাড়ার গাড়ি গাড়িকরা গাড়িঘোড়া গাড়িচাপা গাড়িচাপান গাড়িচাপানো গাড়িচালক গাড়িটানা গাড়িডাকা গাড়িত গাড়িতাম গাড়িতিস গাড়িতেচাপা গাড়িতেচাপান গাড়িতেচাপানো গাড়িতেচড়া গাড়িতেছ গাড়িতেছি গাড়িতেছিল গাড়িতেছিলাম গাড়িতেছিলি গাড়িতেছিলে গাড়িতেছিলেন গাড়িতেছিস গাড়িতেছে গাড়িতেছেন গাড়িতেন গাড়িদেখা গাড়িব গাড়িবার গাড়িবারান্দা গাড়িবি গাড়িবে গাড়িবেন গাড়িভাড়া গাড়িরচাকা গাড়িল গাড়িলাম গাড়িলি গাড়িলে গাড়িলেন গাড়িস গাড়িয়া গাড়িয়াছ গাড়িয়াছি গাড়িয়াছিল গাড়িয়াছিলাম গাড়িয়াছিলি গাড়িয়াছিলে গাড়িয়াছিলেন গাড়িয়াছিস গাড়িয়াছে গাড়িয়াছেন গাড়িয়ে গাড়িয়ো গাড়ী গাড়ীকরা গাড়ীডাকা গাড়ীবারান্দা গাড়ে গাড়েন গাড়োয়ান গাড়োয়ানি গাড়োয়ানী গাড়োয়াল গাড়ছ গাড়ছি গাড়ছিল গাড়ছিলাম গাড়ছিলি গাড়ছিলে গাড়ছিলেন গাড়ছিলেম গাড়ছিলুম গাড়ছিস গাড়ছে গাড়ছেন গাড়ত গাড়তাম গাড়তিস গাড়তে গাড়তেন গাড়তেম গাড়তুম গাড়ুন গাড়ব গাড়বার গাড়বি গাড়বে গাড়বেন গাড়বো গাড়ল গাড়লাম গাড়লি গাড়লে গাড়লেন গাড়লেম গাড়লুম গাঢ়া গাঢ়তম গাঢ়তর গাঢ়রূপ গায় গায়ক গায়কী গায়কোয়ার গায়করূপ গায়ানা গায়িকা গায়েগায়ে গায়েছাতলা গায়েজ্বর গায়েথুথু গায়েধুলা গায়েন গায়েফুঁ গায়েফোসকা গায়েব গায়েবি গায়েবী গায়েবীখেলা গায়েমাংস গায়েমাখা গায়েমাস গায়েরচাদর গায়েরচামড়া গায়েরঝাল গায়েলাগা গায়েহাত গায়েহলুদ গায়ত্রী গায়ন গায়নপদ্ধতি গায়নবাদন গায়নরীতি গায়নশৈলী গায়ব গায়বি গায়বী গায়রজারী গায়রমহরম গায়রমহরুম গায়রহাজির গি গিগা গিগাটন গিগাবাইট গিগাবিট গিগাবিটস গিগাহার্জ গিজগিজ গিজার গিঞ্জি গিট গিঁট গিটকারি গিটকারী গিটকিরি গিঁটানো গিটার গিটারিস্ট গিটারবাদক গিঁটযুক্ত গিটঠু গিঁঠ গিঁঠা গিদ্ধড় গিধড় গিনি গিনিপিগ গিনিসোনা গিনেস গিনেসরেকর্ড গিন্নি গিন্নিপনা গিন্নিবান্নি গিন্নিবান্নী গিন্নী গিন্নীপনা গিন্নীবান্নি গিন্নীবান্নী গিফট গিবত গিভ গিম গিমা গিমহার গিরগিটি গিরগিটী গিরা গিরি গিরিকা গিরিকন্দর গিরিকুমারী গিরিখাত গিরিগিটী গিরিগুহা গিরিগহ্বর গিরিজা গিরিজায়া গিরিডি গিরিতট গিরিতরঙ্গিণী গিরিতল গিরিদুর্গ গিরিদরী গিরিনিতম্ব গিরিনির্ঝর গিরিনদী গিরিনন্দিনী গিরিপুঞ্জ গিরিপথ গিরিফতার গিরিবাজ গিরিবালা গিরিবর গিরিব্রজ গিরিবর্ত্ম গিরিমাটি গিরিমাটী গিরিম্বাড়ি গিরিমল্লিকা গিরিরাজ গিরিরানী গিরিশ গিরিশৃঙ্গ গিরিশৃঙ্গবৎ গিরিশচন্দ্র গিরিসংকট গিরিসঙ্কট গিরীশ গিরীষি গিরে গির্জা গির্দ গিরদা গির্দা গির্ধড় গিরবাজ গিরুবাজ গিরবি গিরবী গিরস্থালি গিল গিলং গিলক গিলুক গিলা গিলাইও গিলাইত গিলাইতাম গিলাইতিস গিলাইতে গিলাইতেছ গিলাইতেছি গিলাইতেছিল গিলাইতেছিলাম গিলাইতেছিলি গিলাইতেছিলে গিলাইতেছিলেন গিলাইতেছিস গিলাইতেছে গিলাইতেছেন গিলাইতেন গিলাইব গিলাইবার গিলাইবি গিলাইবে গিলাইবেন গিলাইল গিলাইলাম গিলাইলি গিলাইলে গিলাইলেন গিলাইয়া গিলাইয়াছ গিলাইয়াছি গিলাইয়াছিল গিলাইয়াছিলাম গিলাইয়াছিলি গিলাইয়াছিলে গিলাইয়াছিলেন গিলাইয়াছিস গিলাইয়াছে গিলাইয়াছেন গিলাইয়ো গিলাও গিলাক গিলান গিলানো গিলাফ গিলাব গিলাস গিলি গিলিত গিলিতান্ন গিলিতাম গিলিতিস গিলিতচর্বণ গিলিতে গিলিতেছ গিলিতেছি গিলিতেছিল গিলিতেছিলাম গিলিতেছিলি গিলিতেছিলে গিলিতেছিলেন গিলিতেছিস গিলিতেছে গিলিতেছেন গিলিতেন গিলিব গিলিবার গিলিবি গিলিবে গিলিবেন গিলিল গিলিলাম গিলিলি গিলিলে গিলিলেন গিলিস গিলিয়া গিলিয়াছ গিলিয়াছি গিলিয়াছিল গিলিয়াছিলাম গিলিয়াছিলি গিলিয়াছিলে গিলিয়াছিলেন গিলিয়াছিস গিলিয়াছে গিলিয়াছেন গিলিয়ে গিলিয়েছ গিলিয়েছি গিলিয়েছিল গিলিয়েছিলাম গিলিয়েছিলি গিলিয়েছিলে গিলিয়েছিলেন গিলিয়েছিলেম গিলিয়েছিলুম গিলিয়েছিস গিলিয়েছে গিলিয়েছেন গিলিয়ো গিলচ্ছ গিলচ্ছি গিলচ্ছিল গিলচ্ছিলাম গিলচ্ছিলি গিলচ্ছিলে গিলচ্ছিলেন গিলচ্ছিলেম গিলচ্ছিলুম গিলচ্ছিস গিলচ্ছে গিলচ্ছেন গিলে গিলেছ গিলেছি গিলেছিল গিলেছিলাম গিলেছিলি গিলেছিলে গিলেছিলেন গিলেছিলেম গিলেছিলুম গিলেছিস গিলেছে গিলেছেন গিলেন গিলেমান গিলো গিলোটিন গিলোটীন গিলছ গিলছি গিলছিল গিলছিলাম গিলছিলি গিলছিলে গিলছিলেন গিলছিলেম গিলছিলুম গিলছিস গিলছে গিলছেন গিলটি গিল্টি গিলটিকরা গিল্টিকরা গিলটিসোনা গিল্টিসোনা গিলত গিলতাম গিলতিস গিলতে গিলতেন গিলতেম গিলতুম গিলন গিলুন গিলনো গিলব গিলবার গিলবি গিলবে গিলবেন গিলবো গিলমান গিলল গিল্লা গিললাম গিললি গিললে গিললেন গিললেম গিললুম গিলস গিলয় গিসগিস গিয়া গিয়াছ গিয়াছি গিয়াছিল গিয়াছিলাম গিয়াছিলি গিয়াছিলে গিয়াছিলেন গিয়াছিস গিয়াছে গিয়াছেন গিয়াত গিয়াঁত গিয়ার গিয়ারিং গিয়াস গিয়ে গিয়েছ গিয়েছি গিয়েছিল গিয়েছিলই গিয়েছিলাম গিয়েছিলি গিয়েছিলে গিয়েছিলেন গিয়েছিলেম গিয়েছিলো গিয়েছিলুম গিয়েছিস গিয়েছে গিয়েছেন গিয়েহলো গী গীঃপতি গচ্চা গুচ্ছ গুচ্ছক গচ্ছা গুচ্ছাকার গচ্ছানো গচ্ছামি গুচ্ছায়ন গচ্ছিত গুচ্ছবিন্যাস গুচ্ছমূল গুচ্ছস্তবক গীটার গীত গীতকারী গীতগোবিন্দ গীতা গীতাগ্রন্থ গীতাঞ্জলী গীতাভাষ্য গীতাভিনয় গীতালি গীতি গীতিকা গীতিকাব্য গীতিকার গীতিকবিতা গীতিগুঞ্জ গীতিনাট্য গীতিনাট্যশালা গীতিপঞ্চক গীতিময়ী গীতিশতদল গীতযোগ্য গীতধ্বনি গীতধর্মী গীতপ্রধান গীতবাদ্য গীতবিতান গীতরচয়িতা গীতল গীতলতা গীতশ্রী গীতসংবলিত গীবত গীম গীর্ণ গীর্দেবী গীর্বাণ গীর্বাণী গীষ্পতি গে গেংগানো গেইট গেইন গেইম গেইমস গেইল গেও গেওয়া গেঙা গেঙানো গেছ গেছি গেছিল গেছিলাম গেছিলেন গেছিলো গেছিস গেছে গেছেন গেছো গেছোস গেছল গেছলা গেছলাম গৌরীপুর গেজ গেঁজ গেজা গেঁজা গেঁজান গেঁজানো গেঁজিয়া গেঁজিয়ে গেঁজে গেঁজেছ গেঁজেছি গেঁজেছিল গেঁজেছিলাম গেঁজেছিলি গেঁজেছিলে গেঁজেছিলেন গেঁজেছিলেম গেঁজেছিলুম গেঁজেছিস গেঁজেছে গেঁজেছেন গেজেট গেজেটিয়ার গেঁজেল গেঁজো গেজলা গেঁজলা গেঞ্জি গেঞ্জিভরা গেট গেঁট গেটওয়ে গেঁটা গেঁটাগোঁটা গেঁটাগোঁট্টা গেঁটে গেঁটেগেঁটে গেঁট্টাগোঁট্টা গেটপাস গেটস গেণ্ডু গেণ্ডুক গেণ্ডারিয়া গেণ্ডুয়া গেঁথে গেঁথেছ গেঁথেছি গেঁথেছিল গেঁথেছিলাম গেঁথেছিলি গেঁথেছিলে গেঁথেছিলেন গেঁথেছিলেম গেঁথেছিলুম গেঁথেছিস গেঁথেছে গেঁথেছেন গেঁথো গেদু গেদা গেঁদা গেঁদাফুল গেঁদেবসা গেনু গেন্দুক গেন্দা গেন্দাফুল গেন্দী গেম গেমার গেমিং গেমপ্লে গেমস গেরানি গেরি গেরিমাটি গেরিলা গেরিলাযুদ্ধ গেরিলাদল গেরিল্লা গেরেপতার গেরেপ্তার গেরেফতার গেরো গেরোবাজ গেরদ গের্দ গেরদা গের্দা গেরন গেরবাজ গেরুবাজ গেরস্ত গেরস্থ গেরস্থালী গেরুয়া গেল গেলা গেলাক গেলাচ্ছ গেলাচ্ছি গেলাচ্ছিল গেলাচ্ছিলাম গেলাচ্ছিলি গেলাচ্ছিলে গেলাচ্ছিলেন গেলাচ্ছিলেম গেলাচ্ছিলুম গেলাচ্ছিস গেলাচ্ছে গেলাচ্ছেন গেলাত গেলাতাম গেলাতিস গেলাতে গেলাতেন গেলাতেম গেলাতুম গেলান গেলানো গেলান্ত গেলান্তি গেলাপ গেলাফ গেলাব গেলাবার গেলাবি গেলাবে গেলাবেন গেলাবো গেলাম গেলাল গেলালাম গেলালি গেলালে গেলালেন গেলালেম গেলালুম গেলাস গেলি গেলী গেলে গেলেছ গেলেছি গেলেছিল গেলেছিলাম গেলেছিলি গেলেছিলে গেলেছিলেন গেলেছিলেম গেলেছিলুম গেলেছিস গেলেছে গেলেছেন গেলেন গেলেম গেলেমান গেলো গেলছে গেলনা গেলব গেলবার গেলবছর গেলুম গেলমান গেলহাটে গেস্ট গেহ গেহুঁ গেঁহু গেহে গেঁড় গেঁড়ু গেঁড়া গেঁড়াকল গেঁড়ানো গেঁড়ামতন গেঁড়ি গেঁড়িয়েছে গেড়ে গেড়েছ গেড়েছি গেড়েছিল গেড়েছিলাম গেড়েছিলি গেড়েছিলে গেড়েছিলেন গেড়েছিলেম গেড়েছিলুম গেড়েছিস গেড়েছে গেড়েছেন গেড়েবসা গেড়ো গেঁড়ো গেঁড়ুয়া গেয় গেয়া গেয়ান গেয়ানবোধ গেয়ে গেঁয়ে গেয়েছ গেয়েছি গেয়েছিল গেয়েছিলাম গেয়েছিলি গেয়েছিলে গেয়েছিলেন গেয়েছিলেম গেয়েছিলুম গেয়েছিস গেয়েছে গেয়েছেন গেয়ো গেঁয়ো গৈবি গৈবী গৈরিক গৈরিকধারী গৈরেয় গো গোঁ গোংরানি গোই গোইন্দাগিরি গোকাক গোকর্ণ গোকল গোকুল গোকুলেবাড়া গোকুলেরষাঁড় গোক্ষীর গোক্ষুর গোক্ষুরা গোখাদক গোখাদ্য গোখুর গোখুরা গোখরো গোখলে গোগাল গোগালচি গোঁগোঁ গোগোল গোগ্রাস গোগ্রাসী গোগর্দভ গোগ্রন্থি গোগর্ভ গোগল গোগৃহ গোঘাতক গোঘৃত গোঘ্ন গোঙ্গান গোঙ্গানি গোঙ্গানো গোঙ্গায়ব গোঙা গোঙাইও গোঙাইত গোঙাইতাম গোঙাইতিস গোঙাইতে গোঙাইতেছ গোঙাইতেছি গোঙাইতেছিল গোঙাইতেছিলাম গোঙাইতেছিলি গোঙাইতেছিলে গোঙাইতেছিলেন গোঙাইতেছিস গোঙাইতেছে গোঙাইতেছেন গোঙাইতেন গোঙাইব গোঙাইবার গোঙাইবি গোঙাইবে গোঙাইবেন গোঙাইল গোঙাইলাম গোঙাইলি গোঙাইলে গোঙাইলেন গোঙাইয়া গোঙাইয়াছ গোঙাইয়াছি গোঙাইয়াছিল গোঙাইয়াছিলাম গোঙাইয়াছিলি গোঙাইয়াছিলে গোঙাইয়াছিলেন গোঙাইয়াছিস গোঙাইয়াছে গোঙাইয়াছেন গোঙাইয়ো গোঙাও গোঙাক গোঙাচ্ছ গোঙাচ্ছি গোঙাচ্ছিল গোঙাচ্ছিলাম গোঙাচ্ছিলি গোঙাচ্ছিলে গোঙাচ্ছিলেন গোঙাচ্ছিলেম গোঙাচ্ছিলুম গোঙাচ্ছিস গোঙাচ্ছে গোঙাচ্ছেন গোঙাত গোঙাতাম গোঙাতিস গোঙাতে গোঙাতেন গোঙাতেম গোঙাতুম গোঙান গোঙানি গোঙানো গোঙাব গোঙাবার গোঙাবি গোঙাবে গোঙাবেন গোঙাবো গোঙাল গোঙালাম গোঙালি গোঙালে গোঙালেন গোঙালেম গোঙালুম গোঙাস গোঙায় গোঙরানি গোচ গোচারক গোচারণ গোচারণক্ষেত্র গোচারণভূমি গোচিকিৎসা গোচন্দন গোচর গোচরীভূত গোছ গোছগাছ গোছা গোছাক গোছাগোছা গোছাচ্ছ গোছাচ্ছি গোছাচ্ছিল গোছাচ্ছিলাম গোছাচ্ছিলি গোছাচ্ছিলে গোছাচ্ছিলেন গোছাচ্ছিলেম গোছাচ্ছিলুম গোছাচ্ছিস গোছাচ্ছে গোছাচ্ছেন গোছাত গোছাতাম গোছাতিস গোছাতে গোছাতেন গোছাতেম গোছাতুম গোছান গোছানে গোছানো গোছাব গোছাবার গোছাবি গোছাবে গোছাবেন গোছাবো গোছাল গোছালাম গোছালি গোছালে গোছালেন গোছালেম গোছালো গোছালোঘর গোছালোব্যক্তি গোছালুম গোছাস গোছল গোছলখানা গোঁজ গোজা গোঁজা গোজাতি গোঁজান গোঁজানো গোঁজামিল গোঁজামিলপূর্ণ গোঁজেন গোঁজবার গোঞ্জা গোট গোঁট গোটগাট গোটা গোটাক গোটাকত গোটাকতক গোটাকয়েক গোটাগোটা গোটাচ্ছ গোটাচ্ছি গোটাচ্ছিল গোটাচ্ছিলাম গোটাচ্ছিলি গোটাচ্ছিলে গোটাচ্ছিলেন গোটাচ্ছিলেম গোটাচ্ছিলুম গোটাচ্ছিস গোটাচ্ছে গোটাচ্ছেন গোটাত গোটাতাম গোটাতিস গোটাতে গোটাতেন গোটাতেম গোটাতুম গোটান গোটানাল গোটানো গোটাব গোটাবার গোটাবি গোটাবে গোটাবেন গোটাবো গোটাল গোটালাম গোটালি গোটালে গোটালেন গোটালেম গোটালুম গোটাস গোটাসিদ্ধ গোটিক গোটেগোটে গোটছড়া গোঁট্টাগাট্টা গোঠ গোডাউন গোডিম গোডিমওয়ালা গোণা গোণী গোঁৎখাওয়া গোতা গোঁতা গোঁতাক গোঁতাচ্ছ গোঁতাচ্ছি গোঁতাচ্ছিল গোঁতাচ্ছিলাম গোঁতাচ্ছিলি গোঁতাচ্ছিলে গোঁতাচ্ছিলেন গোঁতাচ্ছিলেম গোঁতাচ্ছিলুম গোঁতাচ্ছিস গোঁতাচ্ছে গোঁতাচ্ছেন গোঁতাত গোঁতাতাম গোঁতাতিস গোঁতাতে গোঁতাতেন গোঁতাতেম গোঁতাতুম গোঁতান গোঁতানো গোঁতাব গোঁতাবার গোঁতাবি গোঁতাবে গোঁতাবেন গোঁতাবো গোঁতামারা গোঁতাল গোঁতালাম গোঁতালি গোঁতালে গোঁতালেন গোঁতালেম গোঁতালুম গোঁতাস গোত্তা গোঁত্তা গোতম গোঁৎমারা গোতমবংশীয় গোত্র গোত্রীয় গোত্রজ গোত্রযুক্ত গোত্রদ্বয় গোত্রপতি গোত্রপ্রীতি গোত্রপ্রধান গোত্রপ্রবর্তক গোত্রভুক্ত গোত্রভিৎ গোত্রভিদ গোত্রশ্রেষ্ঠ গোত্রহীন গোদ গোদওয়ারি গোদুগ্ধ গোদুগ্ধজাত গোদা গোদাগারী গোদাগাড়ী গোদাচিল গোদান গোদাবরী গোদোহিনী গোদোহন গোদোহনী গোদযুক্ত গোধা গোধিকা গোধন গোধুম গোধূম গোধূমচূর্ণ গোধূলি গোন গোনা গোনাগাঁথা গোনাগনতি গোনাগুনতি গোনাডোট্রোপ গোনাহ গোনাহখাতা গোনাহগার গোনাহগারি গোনাহগারী গোনে গোনেন গোনবার গোপ গোঁপ গোপকন্যা গোপকুলবধূ গোঁপখেজুরে গোপা গোপাঙ্গনা গোপাল গোপালক গোপালকাছা গোপালগঞ্জ গোপালন গোপালপুর গোপালভোগ গোপাষ্টমী গোপিকা গোপিত গোপিনী গোপিনীবল্লভ গোপী গোপীচন্দন গোপীচন্দ্র গোপীজন গোপীজনবল্লভ গোপীযন্ত্র গোপীনাথপুর গোপীবাগ গোপীবল্লভ গোপীমোহন গোপ্য গোপ্তা গোপতি গোপ্তব্য গোপ্ত্রী গোপথ গোপন গোপনকারী গোপনারী গোপনচারিণী গোপনীয় গোপনীয়তা গোপনীয়তারক্ষা গোপনতা গোপনসঞ্চারী গোপপল্লি গোপপল্লী গোপবালা গোপবধূ গোপবল্লভ গোপুর গোপ্রজনন গোঁফ গোঁফখেজুরে গোফা গোঁফযুক্ত গোঁফদাড়ি গোবাঘ গোবাঘা গোবিন্দ গোবিন্দগঞ্জ গোবিন্দগড় গোবিন্দচন্দ্র গোবিন্দদাস গোবিন্দপুর গোবিন্দপ্রসাদ গোবিন্দসুন্দর গোবিন্দস্বামী গোবিষ্ঠা গোবুচন্দ্র গোবেচারা গোবেচারি গোবেচারী গোবেড়েন গোবৈদ্য গোবৎস গোবদা গোব্দা গোবধ গোবর গোবরগঙ্গা গোবরগাদা গোবরগোলা গোবরগণেশ গোবরাট গোবরাঠ গোবরছড়া গোব্রজ গোবরজল গোবর্দ্ধন গোবর্ধন গোবর্ধনধারী গোবরভরা গোবলি গোবলিঘটিত গোভাগাড় গোমক্ষিকা গোমুখ গোমুখাকৃতি গোমুখী গোমুখ্যু গোমাংস গোমাংসভোজী গোমাতা গোমায়ু গোমেদ গোমেধ গোমতী গোমূত্র গোমতল্লাশ গোমতল্লাস গোমূর্খ গোমরা গোমরাক গোমরাচ্ছ গোমরাচ্ছি গোমরাচ্ছিল গোমরাচ্ছিলাম গোমরাচ্ছিলি গোমরাচ্ছিলে গোমরাচ্ছিলেন গোমরাচ্ছিলেম গোমরাচ্ছিলুম গোমরাচ্ছিস গোমরাচ্ছে গোমরাচ্ছেন গোমরাত গোমরাতাম গোমরাতিস গোমরাতে গোমরাতেন গোমরাতেম গোমরাতুম গোমরান গোমরানো গোমরাব গোমরাবার গোমরাবি গোমরাবে গোমরাবেন গোমরাবো গোমরাল গোমরালাম গোমরালি গোমরালে গোমরালেন গোমরালেম গোমরালুম গোমরাস গোমরাহ গোমরাহি গোমসা গোমস্তা গোমস্তাগিরি গোমস্তারা গোমহিষ গোমহিষাদি গোমড়ক গোমড়া গোময় গোময়াদি গোময়লিপ্ত গোর গোরু গোরআজাব গোরক্ত গোরক্ষক গোরক্ষনাথ গোরখ গোর্খা গোরুখোঁজা গোরখনাথ গোর্খনাথ গোরা গোরাচাঁদ গোরান গোরাপ গোরাভাবে গোরারূপ গোরারবাদ্য গোরুচোর গোরোচনা গোরোচনাগোরী গোর্জ গোর্দা গোরবত গোরুমোষ গোরস গোরস্তান গোরস্থান গোল গোলই গোলউৎসব গোলক গোলকাকার গোলকিপার গোলকীয় গোলকুণ্ডা গোলকত্ব গোলকধাঁধা গোলকধাম গোলকপৃষ্ঠ গোলকৃমি গোলগাল গোলা গোলাক গোলাকার গোলাকৃতি গোলাগুলি গোলাঘর গোলাচ্ছ গোলাচ্ছি গোলাচ্ছিল গোলাচ্ছিলাম গোলাচ্ছিলি গোলাচ্ছিলে গোলাচ্ছিলেন গোলাচ্ছিলেম গোলাচ্ছিলুম গোলাচ্ছিস গোলাচ্ছে গোলাচ্ছেন গোলাজাত গোলাত গোলাতাম গোলাতিস গোলাতেন গোলাতেম গোলাতুম গোলাদ গোলান গোলানিক্ষেপকারী গোলানো গোলান্দায গোলাপ গোলাপগুচ্ছ গোলাপি গোলাপিনেশা গোলাপজাম গোলাপজল গোলাপঝাড় গোলাপঝোরা গোলাপদান গোলাপপানি গোলাপপাশ গোলাপফুল গোলাপবাগ গোলাপবালা গোলাব গোলাবগঞ্জ গোলাবারুদ গোলাবাড়ি গোলাবি গোলাবে গোলাবেন গোলাবো গোলাবজাম গোলাবজল গোলাবঝোরা গোলাবদান গোলাবপানি গোলাবপাশ গোলাবর্ষণ গোলাবৃষ্টি গোলাম গোলামআজম গোলামখানা গোলামগদ্দিস গোলামগর্দিশ গোলামগর্দিস গোলামি গোলামী গোলামচোর গোলামনফর গোলামসমঝ গোলার্ধ গোলারহাঁড়ি গোলাল গোলালাম গোলালি গোলালে গোলালেন গোলালেম গোলালো গোলালুম গোলাস গোলাহাঁড়ি গোলী গোলচক্কর গোলীয় গোলোক গোলোকধাম গোলোকনাথ গোলোকপতি গোলোকবিহারী গোলজার গোলটেবিল গোলযোগ গোলযোগপূর্ণ গোল্ড গোল্ডকাপ গোল্ডেন গোল্ডেনবল গোল্ডম্যান গোল্ডস্মিথ গোলদাতা গোলদানকারী গোলদার গোলদারি গোলদারী গোলদিঘি গোলন্দাজ গোলন্দাজি গোলন্দাজী গোলপাতা গোলপোস্ট গোলবার গোলমুখ গোলমাল গোলমেলে গোলমোর গোলমোহর গোলমরিচ গোলরক্ষক গোল্লা গোললাইন গোল্লাছুট গোলশূন্য গোলসংখ্যা গোলসর্ব গোলসহায়তা গোশা গোশাঘর গোশালা গোশিশু গোশীর্ষ গোশত গোশতখোর গোশশা গোশশাঘর গোষ্ঠ গোষ্ঠগৃহ গোষ্ঠাগার গোষ্ঠাধ্যক্ষ গোষ্ঠী গোষ্ঠীজীবন গোষ্ঠীতালিকা গোষ্ঠীদ্বন্দ্ব গোষ্ঠীনিরপেক্ষ গোষ্ঠীপতি গোষ্ঠীবদ্ধ গোষ্ঠীবর্গ গোষ্ঠীভুক্ত গোষ্ঠীভাষা গোষ্ঠীসুখ গোষ্ঠযাত্রা গোষ্ঠবিহার গোষ্ঠবিহারী গোষ্ঠলীলা গোষ্পদ গোস গোসা গোসাই গোসাঁই গোঁসাই গোসাঘর গোসাঞি গোসাপ গোসারা গোসেবা গোসোয়ারা গোস্ট গোস্টস্ক্রিপ্ট গোসত গোস্ত গোস্তখোর গোস্তা গোস্তাকি গোস্তাখি গোস্তাখী গোস্তন গোস্তনী গোসদৃশ গোস্বা গোস্বাঘর গোস্বামী গোসল গোসলখানা গোসসা গোসসাঘর গোহাট্টা গোহারা গোহারান গোহারি গোহারী গোহাল গোহালট গোহাড় গোহত্যা গোহত্যাকারী গোহরি গোড় গোঁড় গোড়গ্রাম গোঁড়া গোড়াইল গোঁড়াক গোড়াকার গোড়াকেটে গোড়াগুড়ি গোঁড়াচ্ছ গোঁড়াচ্ছি গোঁড়াচ্ছিল গোঁড়াচ্ছিলাম গোঁড়াচ্ছিলি গোঁড়াচ্ছিলে গোঁড়াচ্ছিলেন গোঁড়াচ্ছিলেম গোঁড়াচ্ছিলুম গোঁড়াচ্ছিস গোঁড়াচ্ছে গোঁড়াচ্ছেন গোঁড়াত গোঁড়াতাম গোঁড়াতিস গোড়াতে গোঁড়াতে গোঁড়াতেন গোঁড়াতেম গোঁড়াতুম গোঁড়ান গোড়ানেবু গোঁড়ানেবু গোড়ানো গোঁড়ানো গোড়াপত্তন গোঁড়াপন্থি গোঁড়াব গোঁড়াবার গোঁড়াবি গোঁড়াবে গোঁড়াবেন গোঁড়াবো গোঁড়াভাবে গোঁড়াম গোঁড়ামি গোঁড়ামিপূর্ণ গোঁড়ামো গোঁড়াল গোঁড়ালাম গোড়ালি গোঁড়ালেন গোড়ালেবু গোঁড়ালেবু গোঁড়ালেম গোঁড়ালুম গোঁড়াস গোড়ে গোড়তোলা গোঁড়রাগ গোয় গোয়া গোঁয়া গোঁয়ানো গোয়ার গোঁয়ার গোঁয়ারগোবিন্দ গোঁয়ারা গোয়ার্তমি গোঁয়ারতমি গোঁয়ারতুমি গোঁয়ার্তমি গোঁয়ার্তুমি গোয়াল গোয়ালঘর গোয়ালা গোয়ালিনী গোয়ালিয়র গোয়ালটুলি গোয়ালন্দ গোয়ালপাড়া গোয়ালভরা গোয়ালহাটি গোয়াহাটি গোঁয়ায়লু গোয়িং গোয়েন্দা গোয়েন্দাগিরি গছ গুছ গুছক গৌখানা গছা গুছা গছাই গুছাই গছাইও গুছাইও গছাইত গুছাইত গছাইতাম গুছাইতাম গছাইতিস গুছাইতিস গছাইতে গুছাইতে গছাইতেছ গুছাইতেছ গছাইতেছি গুছাইতেছি গছাইতেছিল গুছাইতেছিল গছাইতেছিলাম গুছাইতেছিলাম গছাইতেছিলি গুছাইতেছিলি গছাইতেছিলে গুছাইতেছিলে গছাইতেছিলেন গুছাইতেছিলেন গছাইতেছিস গুছাইতেছিস গছাইতেছে গুছাইতেছে গছাইতেছেন গুছাইতেছেন গছাইতেন গুছাইতেন গছাইব গুছাইব গছাইবার গুছাইবার গছাইবি গুছাইবি গছাইবে গুছাইবে গছাইবেন গুছাইবেন গছাইল গুছাইল গছাইলাম গুছাইলাম গছাইলি গুছাইলি গছাইলে গুছাইলে গছাইলেন গুছাইলেন গছাইয়া গুছাইয়া গছাইয়াছ গুছাইয়াছ গছাইয়াছি গুছাইয়াছি গছাইয়াছিল গুছাইয়াছিল গছাইয়াছিলাম গুছাইয়াছিলাম গছাইয়াছিলি গুছাইয়াছিলি গছাইয়াছিলে গুছাইয়াছিলে গছাইয়াছিলেন গুছাইয়াছিলেন গছাইয়াছিস গুছাইয়াছিস গছাইয়াছে গুছাইয়াছে গছাইয়াছেন গুছাইয়াছেন গছাইয়ো গুছাইয়ো গছাও গুছাও গছাক গুছাক গছাচ্ছ গছাচ্ছি গছাচ্ছিল গছাচ্ছিলাম গছাচ্ছিলি গছাচ্ছিলে গছাচ্ছিলেন গছাচ্ছিলেম গছাচ্ছিলুম গছাচ্ছিস গছাচ্ছে গছাচ্ছেন গছাত গছাতাম গছাতিস গছাতে গছাতেন গছাতেম গছাতুম গছান গুছান গুছানে গছানো গুছানো গছাব গছাবার গছাবি গছাবে গছাবেন গছাবো গছাল গছালাম গছালি গছালে গছালেন গছালেম গছালুম গছাস গুছাস গুছি গছিও গুছিও গছিয়ে গুছিয়ে গছিয়েছ গুছিয়েছ গছিয়েছি গুছিয়েছি গছিয়েছিল গুছিয়েছিল গছিয়েছিলাম গুছিয়েছিলাম গছিয়েছিলি গুছিয়েছিলি গছিয়েছিলে গুছিয়েছিলে গছিয়েছিলেন গুছিয়েছিলেন গছিয়েছিলেম গুছিয়েছিলেম গছিয়েছিলুম গুছিয়েছিলুম গছিয়েছিস গুছিয়েছিস গছিয়েছে গুছিয়েছে গছিয়েছেন গুছিয়েছেন গছিয়ো গুছিয়ো গুছচ্ছ গুছচ্ছি গুছচ্ছিল গুছচ্ছিলাম গুছচ্ছিলি গুছচ্ছিলে গুছচ্ছিলেন গুছচ্ছিলেম গুছচ্ছিলুম গুছচ্ছিস গুছচ্ছে গুছচ্ছেন গছে গুছো গৌণ গৌণকর্ম গৌণার্থ গৌণতা গৌণবৃত্ত গৌণমুখ্য গুছত গুছতাম গুছতিস গুছতে গুছতেন গুছতেম গৌতম গুছতুম গৌতমপ্রণীত গৌতমমুনি গুছন গুছনো গুছব গুছবার গুছবি গুছবে গুছবেন গুছবো গৌর গৌরকিশোর গৌরাঙ্গ গৌরাঙ্গা গৌরাঙ্গাবতার গৌরাঙ্গী গৌরি গৌরিদান গৌরিশঙ্কর গৌরিশৃঙ্গ গৌরিসেন গৌরিসেনী গৌরী গৌরীকান্ত গৌরীজননী গৌরীদান গৌরচন্দ্র গৌরচন্দ্রিকা গৌরীপট্ট গৌরীপুর গৌরীরাগ গৌরীশঙ্কর গৌরীশৃঙ্গ গৌরীসেন গৌরীসেনী গৌরনদী গৌরব গৌরবকাব্য গৌরবকীর্তন গৌরবগাঁথা গৌরবাঙ্গন গৌরবান্বিত গৌরবান্বিতা গৌরবিণী গৌরবিত গৌরবচ্যুত গৌরবোজ্জ্বল গৌরবজনক গৌরবযুক্ত গৌরবযুক্তা গৌরববতী গৌরববৃদ্ধি গৌরববর্ধন গৌরবমণ্ডিত গৌরবময় গৌরবময়ী গৌরবর্ণ গৌরবর্ণা গৌরবশালিনী গৌরবশালী গৌরবসম্পন্ন গৌরবহানি গৌরবহীন গুছল গুছলাম গুছলি গুছলে গুছলেন গুছলেম গুছলুম গুছস গৌহাটি গৌড় গৌড়াধিপ গৌড়াধিপতি গৌড়ী গৌড়ীয় গৌড়েশ্বর গৌড়জন গৌড়দেশ গৌড়দেশীয় গৌড়সারং গৌড়সারঙ্গ গুছয় গজ গুজ গুঁজ গুঁজুক গজকাঠি গজকচ্ছপ গজকপালিয়া গজকপালে গজকুম্ভ গজগামিনী গজগামী গজগিরি গজগীর গজগজ গুজগুজ গজগজান গজগজানি গুজগুজানি গজগজানো গজগতি গজঘটা গজঘণ্টা গজা গুঁজা গজাই গজাইও গজাইত গজাইতাম গজাইতিস গজাইতে গজাইতেছ গজাইতেছি গজাইতেছিল গজাইতেছিলাম গজাইতেছিলি গজাইতেছিলে গজাইতেছিলেন গজাইতেছিস গজাইতেছে গজাইতেছেন গজাইতেন গজাইব গজাইবার গজাইবি গজাইবে গজাইবেন গজাইল গজাইলাম গজাইলি গজাইলে গজাইলেন গজাইয়া গজাইয়াছ গজাইয়াছি গজাইয়াছিল গজাইয়াছিলাম গজাইয়াছিলি গজাইয়াছিলে গজাইয়াছিলেন গজাইয়াছিস গজাইয়াছে গজাইয়াছেন গজাইয়ো গজাও গজাক গজাচ্ছ গজাচ্ছি গজাচ্ছিল গজাচ্ছিলাম গজাচ্ছিলি গজাচ্ছিলে গজাচ্ছিলেন গজাচ্ছিলেম গজাচ্ছিলুম গজাচ্ছিস গজাচ্ছে গজাচ্ছেন গজাত গজাতাম গজাতিস গজাতে গজাতেন গজাতেম গজাতুম গজান গুঁজান গজানীক গজানো গুঁজানো গজানন গজাব গজাবার গজাবি গজাবে গজাবেন গজাবো গুঁজামিল গুঁজামিলন গজার গুজার গুজারা গজারি গুজারি গজারিয়া গুজারেশ গজারোহিণী গজারোহী গুজারদার গজাল গজালাম গজালি গজালিয়া গজালেন গজালেম গজালুম গজাস গজায় গজায়নি গজি গুঁজি গুঁজিকাঠি গুঁজিত গুঁজিতাম গুঁজিতিস গুঁজিতে গুঁজিতেছ গুঁজিতেছি গুঁজিতেছিল গুঁজিতেছিলাম গুঁজিতেছিলি গুঁজিতেছিলে গুঁজিতেছিলেন গুঁজিতেছিস গুঁজিতেছে গুঁজিতেছেন গুঁজিতেন গুঁজিব গুঁজিবার গুঁজিবি গুঁজিবে গুঁজিবেন গুঁজিল গুঁজিলাম গুঁজিলি গুঁজিলে গুঁজিলেন গুঁজিস গুজিয়া গুঁজিয়া গুঁজিয়াছ গুঁজিয়াছি গুঁজিয়াছিল গুঁজিয়াছিলাম গুঁজিয়াছিলি গুঁজিয়াছিলে গুঁজিয়াছিলেন গুঁজিয়াছিস গুঁজিয়াছে গুঁজিয়াছেন গজিয়ে গজিয়েছ গজিয়েছি গজিয়েছিল গজিয়েছিলাম গজিয়েছিলি গজিয়েছিলে গজিয়েছিলেন গজিয়েছিলেম গজিয়েছিলুম গজিয়েছিস গজিয়েছে গজিয়েছেন গজিয়ো গুঁজিয়ো গজী গজচক্ষু গজে গুঁজে গুঁজেছ গুঁজেছি গুঁজেছিল গুঁজেছিলাম গুঁজেছিলি গুঁজেছিলে গুঁজেছিলেন গুঁজেছিলেম গুঁজেছিলুম গুঁজেছিস গুঁজেছে গুঁজেছেন গুঁজেন গজেন্দ্র গজেন্দ্রগামিনী গজেন্দ্রগামী গজেন্দ্রগমন গজেন্দ্রগড় গুঁজো গুঁজছ গুঁজছি গুঁজছিল গুঁজছিলাম গুঁজছিলি গুঁজছিলে গুঁজছিলেন গুঁজছিলেম গুঁজছিলুম গুঁজছিস গুঁজছে গুঁজছেন গজঝম্প গুঁজত গুঁজতাম গুঁজতিস গুঁজতে গুঁজতেন গুঁজতেম গুঁজতুম গজদাঁত গজদন্ত গজদন্তহীন গুঁজুন গজনী গজনবী গজপতি গজপরিমাণ গজব গুজব গুঁজব গুঁজবার গুঁজবি গজবীথি গুজবে গুঁজবে গুঁজবেন গুজবের গুঁজবো গুজবপ্রচার গজমুক্তা গজমোতি গজমতি গজমহল গুজর গুজরই গুজরক গজরগজর গুজরগুজর গুজুরগুজুর গজরা গুজরা গুজরাই গুজরাইও গুজরাইত গুজরাইতাম গুজরাইতিস গুজরাইতে গুজরাইতেছ গুজরাইতেছি গুজরাইতেছিল গুজরাইতেছিলাম গুজরাইতেছিলি গুজরাইতেছিলে গুজরাইতেছিলেন গুজরাইতেছিস গুজরাইতেছে গুজরাইতেছেন গুজরাইতেন গুজরাইব গুজরাইবার গুজরাইবি গুজরাইবে গুজরাইবেন গুজরাইল গুজরাইলাম গুজরাইলি গুজরাইলে গুজরাইলেন গুজরাইয়া গুজরাইয়াছ গুজরাইয়াছি গুজরাইয়াছিল গুজরাইয়াছিলাম গুজরাইয়াছিলি গুজরাইয়াছিলে গুজরাইয়াছিলেন গুজরাইয়াছিস গুজরাইয়াছে গুজরাইয়াছেন গুজরাইয়ো গুজরাও গুজরাক গজরাচ্ছে গজরাজ গুজরাট গুজরাটি গুজরাত গুজরাতি গজরান গুজরান গজরানি গজরানো গুজরানো গুজরাস গুজরি গুজরিপঞ্চম গুজরিয়ে গুজরিয়েছ গুজরিয়েছি গুজরিয়েছিল গুজরিয়েছিলাম গুজরিয়েছিলি গুজরিয়েছিলে গুজরিয়েছিলেন গুজরিয়েছিলেম গুজরিয়েছিলুম গুজরিয়েছিস গুজরিয়েছে গুজরিয়েছেন গুজরিয়ো গুজরী গুজরচ্ছ গুজরচ্ছি গুজরচ্ছিল গুজরচ্ছিলাম গুজরচ্ছিলি গুজরচ্ছিলে গুজরচ্ছিলেন গুজরচ্ছিলেম গুজরচ্ছিলুম গুজরচ্ছিস গুজরচ্ছে গুজরচ্ছেন গুজরীপঞ্চম গজরে গুজরে গুজরেছ গুজরেছি গুজরেছিল গুজরেছিলাম গুজরেছিলি গুজরেছিলে গুজরেছিলেন গুজরেছিলেম গুজরেছিলুম গুজরেছিস গুজরেছে গুজরেছেন গুজরো গুজরোবার গুজরত গুজরৎখোদ গুজরতাম গুজরতি গুজরতিস গুজরতী গুজরতে গুজরতেন গুজরতেম গুজরতুম গুজরন গুজরনো গুজরব গুজরবি গুজরবে গুজরবেন গুজরবো গুজরল গুজরলাম গুজরলি গুজরলে গুজরলেন গুজরলেম গুজরলুম গুজরস গুজরয় গজল গুঁজল গুঁজলাম গুঁজলি গুঁজলে গুঁজলেন গুঁজলেম গুঁজলুম গুজশতা গজশ্রেষ্ঠ গজস্কন্ধ গুজস্তা গুঁজড়ানো গুঁজড়ে গুঁজড়নো গঞ্জ গুঞ্জ গঞ্জা গুঞ্জা গুঞ্জাফল গঞ্জায়িশ গঞ্জি গঞ্জিকা গুঞ্জিকা গুঞ্জিকাফল গঞ্জিকাসেবী গঞ্জিত গুঞ্জিত গঞ্জিনী গঞ্জিফা গঞ্জীফা গঞ্জন গুঞ্জন গৃঞ্জন গঞ্জনা গঞ্জনাদাত্রী গুঞ্জনপূর্ণ গুঞ্জর গুঞ্জরা গুঞ্জরিত গুঞ্জরিয়া গুঞ্জরন গট গুট গুটক গটগট গুটা গ্যাং গ্যাংগলিয়া গ্যাংগলিয়ন গ্যাংটক গ্যাংরনি গ্যাংস্টার গুটাই গুটাইও গুটাইত গুটাইতাম গুটাইতিস গুটাইতে গুটাইতেছ গুটাইতেছি গুটাইতেছিল গুটাইতেছিলাম গুটাইতেছিলি গুটাইতেছিলে গুটাইতেছিলেন গুটাইতেছিস গুটাইতেছে গুটাইতেছেন গুটাইতেন গুটাইব গুটাইবার গুটাইবি গুটাইবে গুটাইবেন গুটাইল গুটাইলাম গুটাইলি গুটাইলে গুটাইলেন গুটাইয়া গুটাইয়াছ গুটাইয়াছি গুটাইয়াছিল গুটাইয়াছিলাম গুটাইয়াছিলি গুটাইয়াছিলে গুটাইয়াছিলেন গুটাইয়াছিস গুটাইয়াছে গুটাইয়াছেন গুটাইয়ো গুটাও গুটাক গ্যাঙরানি গুটাচ্ছে গ্যাঁজ গ্যাঁজা গ্যাঁজান গ্যাঁজানো গ্যাঁজলা গ্যাঁট গ্যাঁটগ্যাঁট গ্যাঁটা গুটান গুটানো গ্যাপ গ্যাব্রিয়েল গ্যারাজ গ্যারান্টি গ্যারি গ্যারেজ গ্যালাকটিক গ্যালাক্টিক গ্যালাক্টিকো গ্যালাক্টিকোস গ্যালাক্সি গ্যালারি গ্যালারী গ্যালি গ্যালিপ্রুফ গ্যালিয়াম গ্যালেন গ্যালোপিং গ্যালন গ্যালভানিক গ্যালভানোমিটার গুটাস গ্যাস গ্যাসক্ষেত্র গ্যাসীয় গ্যাসোলিন গ্যাসজাত গ্যাসজনিত গ্যাসযুক্ত গ্যাস্ট্রিক গ্যাস্ট্রিন গ্যাসধর্মী গ্যাসপোষ্ট গ্যাসপোস্ট গ্যাসপণ্য গ্যাসবেলুন গ্যাসমাস্ক গ্যাঁড়া গ্যাঁড়াকল গুটি গুঁটি গুটিক গুটিকা গুটিকাকৃতি গুটিকারোগ গুটিকত গুটিকতক গুটিকতো গুটিকয় গুটিকয়েক গুটিচালা গুঁটিচালা গুটিপোকা গুটিবসন্ত গুটিসুটি গুটিয়ে গুটিয়েছ গুটিয়েছি গুটিয়েছিল গুটিয়েছিলাম গুটিয়েছিলি গুটিয়েছিলে গুটিয়েছিলেন গুটিয়েছিলেম গুটিয়েছিলুম গুটিয়েছিস গুটিয়েছে গুটিয়েছেন গুটিয়ো গুটচ্ছ গুটচ্ছি গুটচ্ছিল গুটচ্ছিলাম গুটচ্ছিলি গুটচ্ছিলে গুটচ্ছিলেন গুটচ্ছিলেম গুটচ্ছিলুম গুটচ্ছিস গুটচ্ছে গুটচ্ছেন গুটেক গুটেনবার্গ গুটত গুটতাম গুটতিস গুটতে গুটতেন গুটতেম গুটতুম গুটন গুটনিশ গুটনো গযব গুটব গুটবার গুটবি গুটবে গুটবেন গুটবো গটমট গটরা গযল গুটল গুটলাম গুটলি গুটলে গুটলেন গুটলেম গুটলুম গুটস গুটয় গঠ গঠিত গঠন গঠনকারী গঠনকার্য গঠনকৌশল গঠনগত গঠনচাতুর্য গঠনতত্ত্ব গঠনতন্ত্র গঠননীতি গঠনপ্রকৃতি গঠনপ্রণালী গঠনবাদ গঠনবিন্যাস গঠনমূলক গঠনরীতি গঠনরৈখিক গঠনরূপ গঠনশীলতা গঠনশৈলী গঠনসর্বস্ব গঠনসর্বস্বতা গঠনসর্বস্ববাদী গড গুড গুডআফটারনুন গুড্ডু গড্ডারিকা গড্ডারিকাপ্রবাহ গড্ডালিকা গড্ডালিকাপ্রবাহ গুড্ডি গড্ডর গড্ডরিকা গড্ডল গড্ডলিকা গড্ডলিকাপ্রবাহ গুডনাইট গডফাদার গুডবাই গুডমর্নিং গডস গডসে গূঢ় গূঢ়তত্ত্ব গূঢ়পাদ গূঢ়পুরুষ গূঢ়বৃক্ষ গূঢ়মার্গ গূঢ়সাক্ষী গণ গুণ গণঅভ্যুত্থান গণআদালত গণআন্দোলন গণইতে গণক গুণক গুণকারক গুণকীর্তন গুণকেলী গুণকেলীরাগ গণকযন্ত্র গণকটুলি গণকন্ঠ গণকবর গুণকরা গুণগান গুণগায়ক গুণগৌরব গুণগুণ গুণগত গুণগ্রাম গুণগ্রাহকতা গুণগ্রাহিণী গুণগ্রাহিতা গুণগ্রাহী গুণগরিমা গণগ্রন্থাগার গুণগ্রহণ গণা গুণা গুণাকর গুণাকরা গণাগাঁথা গুণাগুণ গুণাগুণবোধ গণাগনতি গণাগুনতি গুণাঙ্ক গুণাঢ্য গুণাতীত গুণাধার গণানো গুণানুবাদ গুণান্বিত গুণানুরাগ গুণাবলি গুণাবলী গুণাবলীসম্পন্ন গুণাবলীহীন গুণাভাস গুণারি গুণারী গুণার্ণব গুণালঙ্কার গণি গণিকা গণিকালয় গণিত গুণিত গণিতক গুণিতক গণিতজ্ঞ গণিতবিজ্ঞান গণিতবিদ গণিতবিদ্যা গণিতবিশ্ব গণিতবেত্তা গণিতভিত্তিক গণিতশাস্ত্র গুণিন গণিমত গণী গুণী গণচীন গুণীজন গুণীপনা গণীভূত গুণীভূত গুণীভূতব্যঙ্গ গুণেন্দ্রনাথ গুণেরসাগর গণেশ গণেশচন্দ্র গণেশপূজক গণেশপত্নী গণেশমূর্তি গুণোৎকর্ষ গুণোত্তর গুণোপেত গুণোল্লেখ গুণজ গণজাগরণ গুণজায়িশ গুণজ্ঞ গুণজ্ঞতা গণ্য গুণ্য গুণযুক্ত গুণযুক্তা গুণটানা গণটোকাটুকি গণযোগাযোগ গণযুদ্ধ গণ্যমান্য গুণ্ঠিত গুণ্ঠিতা গুণ্ঠন গুণ্ঠনহীন গণ্ড গণ্ডু গণ্ডূ গণ্ডক গণ্ডকারী গণ্ডকী গণ্ডকীশিলা গণ্ডকূপ গণ্ডগাত্র গণ্ডগোল গণ্ডগ্রাম গণ্ডা গুণ্ডা গণ্ডাকিয়া গণ্ডাগণ্ডা গুণ্ডাপাণ্ডা গুণ্ডামি গুণ্ডামো গণ্ডার গণ্ডারী গণ্ডারেরচামড়া গণ্ডায়এণ্ডা গণ্ডি গুণ্ডি গুণ্ডিত গণ্ডী গণ্ডেপিণ্ডে গণডেপুটেশন গণ্ডযোগ গণ্ডদেশ গণ্ডুপদ গণ্ডূপদ গণ্ডুপদী গণ্ডূপদী গণ্ডমালা গণ্ডমূর্খ গণ্ডশৈল গণ্ডূষ গণ্ডস্থল গণ্ডসদৃশ গণৎকার গণতান্ত্রিক গণতি গুণতি গণতন্ত্র গণতন্ত্রী গণতন্ত্রবাদী গণতন্ত্রবিরোধী গণতন্ত্রমনস্ক গণতন্ত্রমূলক গণদাবী গণদেব গণদেবতা গুণদোষ গুণধাম গণধোলাই গুণধর গণন গুণন গণনা গণনাকারী গণনাকৃত গণনাযোগ্য গণনাযোগ্যতা গণনাট্য গণনাযন্ত্র গণনাথ গণনানুসারে গণনাপদ্ধতি গণনাফল গণনাবিজ্ঞান গণনামূলক গণনাসূত্র গণনাস্থল গণনায়ক গুণনিধি গণনীয় গুণনীয় গুণনীয়ক গণনীয়তা গণনযোগ্য গুণনবিধি গণনভিত্তিক গণপাঠ গণপিটুনি গণপতি গুণপনা গুণপ্রকাশক গণপরিষদ গণপ্রচারমূলক গণপ্রজাতন্ত্রী গণপূর্ত গণপ্রহার গণফোরাম গুণফল গুণবৃক্ষ গুণবাচক গুণবাচকতা গণবাণী গুণবাদ গুণবান গণবাহিনী গুণবাহী গণবি গুণবি গণবিক্ষোভ গণবিশ্ববিদ্যালয় গুণবৈষম্য গুণবতী গুণবত্তা গুণবৃদ্ধি গুণবন্ত গুণবর্ণন গুণবর্ণনা গণভোগ গণভোট গণভবন গণমুখী গুণমুগ্ধ গুণমুগ্ধা গণমাধ্যম গুণমণি গুণমত গুণমন্ত গুণময় গুণময়ী গুণরাজ গণরাজ্য গুণরাশি গণলু গণলুঁ গণশক্তি গুণশালিতা গুণশালিনী গুণশালী গণশিক্ষা গণশত্রু গুণশূন্য গণসংগীত গণসংযোগ গুণসাগর গুণসাদৃশ্য গণসচেতনতা গুণসূত্র গণসন্নিপাত গণস্বাক্ষর গণস্বাক্ষরতা গণস্বাস্থ্য গণসমজ্বা গুণসমুদয় গুণসম্পন্ন গুণসম্পন্না গণহার গুণহীন গুণহীনতা গুণহেতু গণহত্যা গত গুঁত গুঁতক গতকাল গতকল্য গতক্লম গুঁতা গুঁতাই গুঁতাইও গুঁতাইত গুঁতাইতাম গুঁতাইতিস গুঁতাইতে গুঁতাইতেছ গুঁতাইতেছি গুঁতাইতেছিল গুঁতাইতেছিলাম গুঁতাইতেছিলি গুঁতাইতেছিলে গুঁতাইতেছিলেন গুঁতাইতেছিস গুঁতাইতেছে গুঁতাইতেছেন গুঁতাইতেন গুঁতাইব গুঁতাইবার গুঁতাইবি গুঁতাইবে গুঁতাইবেন গুঁতাইল গুঁতাইলাম গুঁতাইলি গুঁতাইলে গুঁতাইলেন গুঁতাইয়া গুঁতাইয়াছ গুঁতাইয়াছি গুঁতাইয়াছিল গুঁতাইয়াছিলাম গুঁতাইয়াছিলি গুঁতাইয়াছিলে গুঁতাইয়াছিলেন গুঁতাইয়াছিস গুঁতাইয়াছে গুঁতাইয়াছেন গুঁতাইয়ো গুঁতাক গুঁতাগাঁতা গতাগত গতাগতি গুঁতাগুঁতি গতান গুঁতান গতানুগতিক গতানুগতিকতা গতানো গুঁতানো গতানুশোচন গতানুশোচনা গতার্তবা গতাসু গুঁতাস গতায়ু গুঁতায় গতায়াত গতায়তি গতি গুঁতি গতিক গতিক্রিয়া গতিচাঞ্চল্য গতিজনিত গতিজড়তা গতিযুক্ত গতিতত্ত্ব গতিদায়িনী গতিদায়ী গতিদীর্ণ গতিধারা গতিধর্ম গতিপার্থক্য গতিপথ গতিপ্রকৃতি গতিপরিপন্থী গতিবিজ্ঞান গতিবিদ্যা গতিবিধি গতিবেগ গতিভঙ্গ গতিভঙ্গি গতিমাত্র গতিমাপক গতিময় গতিময়তা গতিরোধ গতিরোধক গতিশক্তি গতিশীল গতিশীলতা গতিশূন্য গতিষ্ণু গতিসংগ্রাহক গতিসঞ্চার গতিসূত্র গতিসম্পন্ন গতিসম্পর্ক গতিহীন গুঁতিয়ে গুঁতিয়েছ গুঁতিয়েছি গুঁতিয়েছিল গুঁতিয়েছিলাম গুঁতিয়েছিলি গুঁতিয়েছিলে গুঁতিয়েছিলেন গুঁতিয়েছিলেম গুঁতিয়েছিলুম গুঁতিয়েছিস গুঁতিয়েছে গুঁতিয়েছেন গুঁতিয়ো গতচেতন গতচেতনা গুঁতচ্ছ গুঁতচ্ছি গুঁতচ্ছিল গুঁতচ্ছিলাম গুঁতচ্ছিলি গুঁতচ্ছিলে গুঁতচ্ছিলেন গুঁতচ্ছিলেম গুঁতচ্ছিলুম গুঁতচ্ছিস গুঁতচ্ছে গুঁতচ্ছেন গতীয় গতে গুঁতো গুঁতোগাঁতা গুঁতোগুঁতি গুঁতোন গুঁতোনো গতজীব গতজীবন গতযুগ গতযৌবন গতযৌবনা গত্যন্তর গত্যন্তরহীন গুঁতত গুঁত্তাগাঁত্তা গুঁততাম গুঁততিস গুঁততে গুঁততেন গুঁততেম গুঁততুম গুঁতন গতনিদ্র গুঁতুনে গুঁতনো গতপ্রাণ গতপ্রায় গুঁতব গৎবাঁধা গতবার গুঁতবার গুঁতবি গুঁতবে গুঁতবেন গুঁতবো গতবছর গতব্যথ গতবৎসর গতবুদ্ধি গতবল গতভাষ গতভূষণা গতমাস গতর গতরখাকি গতরখাগি গতরখাটানো গতরখেকো গতরখেগো গতরাত গতরাত্র গতরপোষা গুঁতল গুঁতলাম গুঁতলি গুঁতলে গুঁতলেন গুঁতলেম গুঁতলুম গতশোক গতশোচনা গুঁতস গতসঙ্গ গতস্পৃহ গতুয়া গদ গুদ গঁদ গদগদ গদগদকণ্ঠ গুদগুদি গদগদবচন গদা গদাই গদাইলশকরি গদাইলস্করি গদাঘাত গদাযুদ্ধ গদাধর গদাপাণি গুদাম গুদামজাত গুদার গুদারা গদি গদিযুক্ত গদিতোশক গদিয়ান গঁদের গঁদেরগঁদ গদ্য গদ্যকাব্য গদ্যাংশ গদ্যছন্দ গদ্যধারা গদ্যপাঠ গদ্যপদ্য গদ্যময় গদ্যরীতি গদ্যরচনা গদ্যলেখক গদ্যশিল্পী গদ্যশৈলী গদ্যসাহিত্য গৃধিনী গৃধ্নু গৃধ্নুতা গৃধ্র গৃধ্ররাজ গন গুন গুনক গুনুক গুনকার গুনগার গুনগত গনগন গুনগুন গনগনা গনা গুনা গুনাখাতা গনাগাঁথা গুনাগার গুনাগারি গুনাগারী গনাগোষ্ঠী গনাগনতি গনাগুনতি গনান গনানো গুনাহ গুনাহখাতা গুনাহগার গুনাহগারি গনি গুনি গুনিত গুনিতাম গুনিতিস গুনিতে গুনিতেছ গুনিতেছি গুনিতেছিল গুনিতেছিলাম গুনিতেছিলি গুনিতেছিলে গুনিতেছিলেন গুনিতেছিস গুনিতেছে গুনিতেছেন গুনিতেন গুনিন গুনিব গুনিবার গুনিবি গুনিবে গুনিবেন গনিমত গুনিল গুনিলাম গুনিলি গুনিলে গুনিলেন গুনিস গুনিয়া গুনিয়াছ গুনিয়াছি গুনিয়াছিল গুনিয়াছিলাম গুনিয়াছিলি গুনিয়াছিলে গুনিয়াছিলেন গুনিয়াছিস গুনিয়াছে গুনিয়াছেন গনিয়েছে গুনিয়ো গনী গুনচট গনে গুনে গুনেছ গুনেছি গুনেছিল গুনেছিলাম গুনেছিলি গুনেছিলে গুনেছিলেন গুনেছিলেম গুনেছিলুম গুনেছিস গুনেছে গুনেছেন গুনেন গুনো গনোরিয়া গুনছ গুনছি গুনছিল গুনছিলাম গুনছিলি গুনছিলে গুনছিলেন গুনছিলেম গুনছিলুম গুনছিস গুনছুঁচ গুনছে গুনছেন গুনজায়িশ গুন্টার গন্তু গুনত গন্তুকাম গন্তুকামা গনৎকার গন্তা গুনতাম গনতি গুনতি গুনতিস গুনতে গুনতেন গুনতেম গন্তব্য গন্তব্যপথ গন্তব্যস্থান গুনতুম গন্ত্রী গন্দম গন্ধ গন্ধক গন্ধকাম্ল গন্ধকাষ্ঠ গন্ধকচূর্ণ গন্ধকদ্রাবক গন্ধগোকুল গন্ধগোকুলা গন্ধগ্রহণ গন্ধাজীব গন্ধাধিবাস গন্ধাধিবাসন গন্ধি গন্ধিবেণী গন্ধী গন্ধেগন্ধে গন্ধেন্দ্রিয় গন্ধেশ্বরী গন্ধোপজীবী গন্ধযুক্ত গন্ধতেল গন্ধতৈল গন্ধদ্রব্য গন্ধদ্রব্যাদি গন্ধধূপ গন্ধপুষ্প গন্ধবারি গন্ধবাহ গন্ধবিধুর গন্ধবণিক গন্ধবহ গন্ধভাদাল গন্ধভাদুলি গন্ধমৃগ গন্ধমাখা গন্ধমাদন গন্ধমূষিক গন্ধরাজ গন্ধর্ব গন্ধর্বপূজা গন্ধর্বপ্রথা গন্ধর্ববিদ্যা গন্ধর্ববিবাহ গন্ধর্ববেদ গন্ধর্বলোক গন্ধরস গন্ধলেপন গন্ধশালী গন্ধসার গন্ধহীন গুনুন গন্না গন্নাকাটা গুনব গুনবি গুনবে গুনবেন গুনবো গুনল গনলাম গুনলাম গুনলি গুনলে গুনলেন গুনলেম গুনলুম গুনসুচ গপ গপগপ গপাগপ গুপী গুপীযন্ত্র গুঁপো গুপত গুপ্ত গুপ্তকক্ষ গুপ্তকথা গুপ্তগতি গুপ্তঘাতক গুপ্তা গুপ্তায়ন গুপ্তি গুপ্তচক্র গুপ্তচর গুপ্তচরবৃত্তি গুপ্তোত্তর গুপ্তজ্ঞান গুপ্তযুগ গুপ্ততোয়া গুপ্তদূত গুপ্তধন গুপ্তপথ গুপ্তপ্রণয় গুপ্তবিদ্যা গুপ্তবেশ গুপ্তব্যাধি গুপ্তবৃত্তান্ত গুপ্তভাবে গুপ্তভোট গুপ্তমত গুপ্তমন্ত্র গুপ্তরহস্য গুপ্তহত্যা গপ্প গপ্পো গপ্পোবাজ গফ গুফা গুঁফো গফফার গফুর গফরগাঁও গুফরান গবু গবগব গুবগুব গুবগুবাগুব গবা গুবাক গূবাক গবাক্ষ গবাগব গবাদি গবাদিপশু গবী গবচন্দ্র গবুচন্দ্র গবেট গবেষক গবেষকগণ গবেষকবৃন্দ গবেষিত গবেষণ গবেষণা গবেষণাকাজ গবেষণাকারী গবেষণাকার্য গবেষণাকেন্দ্র গবেষণাকর্ম গবেষণাক্ষেত্র গবেষণাগার গবেষণাদি গবেষণাধীন গবেষণাপত্র গবেষণাপন্থা গবেষণাভিত্তিক গবেষণারত গবেষণালব্ধ গবেষণাস্থল গব্য গব্যঘৃত গবরাট গুবরেপোকা গবর্নমেন্ট গবর্নর গবর্মেন্ট গুবলেট গবয় গভীর গভীরঅরণ্য গভীরআঁধার গভীরকণ্ঠ গভীরখাদ গভীরতা গভীরতত্ত্ব গভীরত্ব গভীরতম গভীরতর গভীরপাত্র গভীরপানি গভীরপ্রাণ গভীরপ্রণয় গভীরভাবে গভীররাত্রি গভীরশব্দ গভীরসমুদ্র গভর্নিং গভর্নেস গভর্নমেন্ট গভর্নর গভর্নরজেনারেল গম গুম গমক গমখার গুমখুন গুমখুনি গমগিন গমগীণ গমগম গুমগুম গুমা গুমাগুম গুমাণ গুমান গুমার গমি গুমি গমিত গমিষ্ট গমী গুমী গুমেগুমে গুমো গুমোট গুমোর গমজাদা গমজাদি গমজারি গম্য গুমট গম্যা গমযাদাহ গমযাদী গুমটি গুমটিঘর গুমটী গুমটযুক্ত গম্যমান গম্যহীন গমন গমনকারী গমনকাল গমনকর্তা গমনা গমনাগমন গমনাঙ্গ গমনার্হ গমনীয় গমনোদ্যত গমনোন্মুখ গমনযোগ্য গমনপথ গমনভঙ্গি গমনশক্তি গমনশীল গমনসাধ্য গুম্ফ গুম্ফা গুম্ফিত গুম্ফন গম্বুজ গুম্বজ গম্বুজঅলা গম্বুজওয়ালা গুম্বজওয়ালা গম্বুজাকৃতি গম্বুজীয় গম্ভীর গম্ভীরা গম্ভীরতা গম্ভীরতর গম্ভীরপ্রকৃতি গম্ভীরবেদী গম্ভীরভাব গম্ভীরস্বর গমমাতম গম্মি গুমর গুমরক গুমরা গুমরাইও গুমরাইত গুমরাইতাম গুমরাইতিস গুমরাইতে গুমরাইতেছ গুমরাইতেছি গুমরাইতেছিল গুমরাইতেছিলাম গুমরাইতেছিলি গুমরাইতেছিলে গুমরাইতেছিলেন গুমরাইতেছিস গুমরাইতেছে গুমরাইতেছেন গুমরাইতেন গুমরাইব গুমরাইবার গুমরাইবি গুমরাইবে গুমরাইবেন গুমরাইল গুমরাইলাম গুমরাইলি গুমরাইলে গুমরাইলেন গুমরাইয়া গুমরাইয়াছ গুমরাইয়াছি গুমরাইয়াছিল গুমরাইয়াছিলাম গুমরাইয়াছিলি গুমরাইয়াছিলে গুমরাইয়াছিলেন গুমরাইয়াছিস গুমরাইয়াছে গুমরাইয়াছেন গুমরাইয়ো গুমরাও গুমরাক গুমরান গুমরানি গুমরানো গুমরাস গমরাহ গুমরাহ গুমরি গুমরিয়ে গুমরিয়েছ গুমরিয়েছি গুমরিয়েছিল গুমরিয়েছিলাম গুমরিয়েছিলি গুমরিয়েছিলে গুমরিয়েছিলেন গুমরিয়েছিলেম গুমরিয়েছিলুম গুমরিয়েছিস গুমরিয়েছে গুমরিয়েছেন গুমরিয়ো গুমরচ্ছ গুমরচ্ছি গুমরচ্ছিল গুমরচ্ছিলাম গুমরচ্ছিলি গুমরচ্ছিলে গুমরচ্ছিলেন গুমরচ্ছিলেম গুমরচ্ছিলুম গুমরচ্ছিস গুমরচ্ছে গুমরচ্ছেন গুমরে গুমরেছ গুমরেছি গুমরেছিল গুমরেছিলাম গুমরেছিলি গুমরেছিলে গুমরেছিলেন গুমরেছিলেম গুমরেছিলুম গুমরেছিস গুমরেছে গুমরেছেন গুমরো গুমরোবার গুমরত গুমরতাম গুমরতিস গুমরতে গুমরতেন গুমরতেম গুমরতুম গুমরন গুমরনো গুমরব গুমরবি গুমরবে গুমরবেন গুমরবো গুমরল গুমরলাম গুমরলি গুমরলে গুমরলেন গুমরলেম গুমরলুম গুমরস গুমরয় গুমসা গুমসান গুমসানি গুমসানো গুমসো গমস্তা গুমসনি গুমসনো গুমসুম গর গরু গুরু গরুঅ গরকায়েম গুরুকন্যা গরকবূল গুরুকরণ গুরুকর্তব্য গুরুক্রম গুরুকুল গুর্খা গুরুগিরি গুরগুটে গুরগুট্টে গুরুগত গুরুগম্ভীর গরগর গর্গর গুরুগুরু গরগরানি গর্গরী গরগরে গুরুগৃহ গুরুগৃহবাসী গুরুঘাতক গুরুঘাতী গুরুঘ্ন গুরা গ্রাউন্ড গ্রাউন্ডস গ্রাজুয়েট গ্রাজুয়েশন গ্রাঞ্জুরি গরাণ গরাদ গরান গরানগাছ গ্রানাইট গ্রানাডা গ্রানাডীয় গ্রান্ট গ্রাফ গ্রাফকর্ণ গ্রাফাইট গ্রাফিক গ্রাফিকাল গ্রাফিক্যাল গ্রাফিক্স গ্রাফেনবার্গ গ্রাফোসম্যান গ্রাফতত্ত্ব গ্রাফতত্ত্ববিদ গ্রাবু গ্রাভিটন গ্রাম গ্রামকেন্দ্রিক গ্রামাঞ্চল গ্রামাটিক গ্রামাদি গ্রামান্ত গ্রামান্তর গ্রামার গ্রামিক গ্রামী গ্রামীণ গ্রামীণফোন গ্রামীনফোন গ্রামীনব্যাংক গ্রামোদ্যোগ গ্রামোফোন গ্রামজ গ্রামজাত গ্রামজীবন গ্রাম্য গ্রামযুক্ত গ্রাম্যতা গ্রাম্যধর্ম গ্রাম্যমৃগ গ্রামণী গ্রামতালিকা গ্রামধর্ম গ্রামবাংলা গ্রামবাসী গ্রামবৃত্তি গ্রামভাটি গ্রাম্ভারি গ্রামমৃগ গ্রামময় গ্রামরক্ষক গ্রামস্থ গ্রামসমুন্নয়ন গ্রামসম্পর্ক গরাস গ্রাস গ্রাসকারী গ্রাসকরণ গ্রাসাচ্ছাদন গ্রাসিত গরাসিন গ্রাসনালি গ্রাহ গ্রাহক গ্রাহকযন্ত্র গ্রাহকসংখ্যা গ্রাহিকা গ্রাহিত গ্রাহী গ্রাহ্য গ্রাহ্যতা গ্রিক গ্রিকজাতি গ্রিকট্রাজেডি গ্রিকট্র্যাজেডি গ্রিকরাজ গ্রিড গ্রিন গ্রিনওয়ে গ্রিনিচ গ্রিনিচস্থিত গ্রিনেড গ্রিনফিল্ড গ্রিনবার্গ গ্রিনরুম গ্রিনল্যান্ড গ্রিনস্পুন গ্রিনহাউজ গ্রিনহফ গরিব গরিবখানা গরিবগুরবা গরিবগুরবো গরিবানা গরিবি গরিবিয়ানা গরিবদুঃখী গরিবনেওয়াজ গরিবনেবাজ গরিবপরোয়ার গরিমা গ্রিল গরিলা গরিলাযুদ্ধ গরিষ্ঠ গরিষ্ঠতা গ্রিস গ্রিসদেশ গুরিয়া গ্রীক গ্রীকপুরাণ গরচা গুরুচাণ্ডালী গরুচোর গুরুচণ্ডালী গরীব গরীবখানা গ্রীবা গ্রীবাযুক্ত গ্রীবাদেশ গ্রীবাভঙ্গি গরীবলোক গরীবুল্লাহ গ্রীষ্ম গ্রীষ্মঋতু গ্রীষ্মকাম গ্রীষ্মকাল গ্রীষ্মকালীন গ্রীষ্মাগম গ্রীষ্মাতিশয্য গ্রীষ্মাবকাশ গ্রীষ্মোপগম গ্রীষ্মনিবাস গ্রীষ্মপীড়িত গ্রীষ্মপ্রধান গ্রীষ্মবলয় গ্রীষ্মমণ্ডল গ্রীস গরীয়ান গরীয়সী গ্রে গ্রেইন গ্রেগরিজ গ্রেগরিয়ান গ্রেগরীয় গ্রেট গ্রেটার গ্রেটিং গ্রেটেস্ট গ্রেটবৃটেন গ্রেটব্রিটেন গ্রেটরীফ গ্রেড গ্রেডেড গ্রেন গ্রেনাডা গ্রেনেড গ্রেপ গ্রেপ্তার গ্রেপ্তারকৃত গ্রেপ্তারকরণ গ্রেপ্তারি গ্রেপ্তারী গ্রেপ্তারপর্ব গ্রেফতার গ্রেফতারকৃত গ্রেফতারি গ্রেফতারী গ্রেভ গ্রেভস গ্রেস গ্রৈষ্ম গ্রৈষ্মিক গ্রো গ্রোইন গ্রোথ গ্রোভ গ্রোভার গরুছাগল গরজ গর্জ গুর্জ গর্জক গর্জুক গরজা গর্জা গরজাইও গর্জাইও গরজাইত গর্জাইত গরজাইতাম গর্জাইতাম গরজাইতিস গর্জাইতিস গরজাইতে গর্জাইতে গরজাইতেছ গর্জাইতেছ গরজাইতেছি গর্জাইতেছি গরজাইতেছিল গর্জাইতেছিল গরজাইতেছিলাম গর্জাইতেছিলাম গরজাইতেছিলি গর্জাইতেছিলি গরজাইতেছিলে গর্জাইতেছিলে গরজাইতেছিলেন গর্জাইতেছিলেন গরজাইতেছিস গর্জাইতেছিস গরজাইতেছে গর্জাইতেছে গরজাইতেছেন গর্জাইতেছেন গরজাইতেন গর্জাইতেন গরজাইব গর্জাইব গরজাইবার গর্জাইবার গরজাইবি গর্জাইবি গরজাইবে গর্জাইবে গরজাইবেন গর্জাইবেন গরজাইল গর্জাইল গরজাইলাম গর্জাইলাম গরজাইলি গর্জাইলি গরজাইলে গর্জাইলে গরজাইলেন গর্জাইলেন গরজাইয়া গর্জাইয়া গরজাইয়াছ গর্জাইয়াছ গরজাইয়াছি গর্জাইয়াছি গরজাইয়াছিল গর্জাইয়াছিল গরজাইয়াছিলাম গর্জাইয়াছিলাম গরজাইয়াছিলি গর্জাইয়াছিলি গরজাইয়াছিলে গর্জাইয়াছিলে গরজাইয়াছিলেন গর্জাইয়াছিলেন গরজাইয়াছিস গর্জাইয়াছিস গরজাইয়াছে গর্জাইয়াছে গরজাইয়াছেন গর্জাইয়াছেন গরজাইয়ো গর্জাইয়ো গরজাক গর্জাক গরজাচ্ছ গর্জাচ্ছ গরজাচ্ছি গর্জাচ্ছি গরজাচ্ছিল গর্জাচ্ছিল গরজাচ্ছিলাম গর্জাচ্ছিলাম গরজাচ্ছিলি গর্জাচ্ছিলি গরজাচ্ছিলে গর্জাচ্ছিলে গরজাচ্ছিলেন গর্জাচ্ছিলেন গরজাচ্ছিলেম গর্জাচ্ছিলেম গরজাচ্ছিলুম গর্জাচ্ছিলুম গরজাচ্ছিস গর্জাচ্ছিস গরজাচ্ছে গর্জাচ্ছে গরজাচ্ছেন গর্জাচ্ছেন গরজাত গর্জাত গরজাতাম গর্জাতাম গরজাতিস গর্জাতিস গরজাতে গর্জাতে গরজাতেন গর্জাতেন গরজাতেম গর্জাতেম গরজাতুম গর্জাতুম গরজান গর্জান গরজানি গর্জানি গরজানো গর্জানো গরজাব গর্জাব গরজাবার গর্জাবার গরজাবি গর্জাবি গরজাবে গর্জাবে গরজাবেন গর্জাবেন গরজাবো গর্জাবো গরজারি গরজাল গর্জাল গরজালাম গর্জালাম গরজালি গর্জালি গরজালে গর্জালে গরজালেন গর্জালেন গরজালেম গর্জালেম গরজালুম গর্জালুম গরজাস গর্জাস গরজি গর্জি গরজিত গর্জিত গরজিতাম গর্জিতাম গরজিতিস গর্জিতিস গরজিতে গর্জিতে গরজিতেছ গর্জিতেছ গরজিতেছি গর্জিতেছি গরজিতেছিল গর্জিতেছিল গরজিতেছিলাম গর্জিতেছিলাম গরজিতেছিলি গর্জিতেছিলি গরজিতেছিলে গর্জিতেছিলে গরজিতেছিলেন গর্জিতেছিলেন গরজিতেছিস গর্জিতেছিস গরজিতেছে গর্জিতেছে গরজিতেছেন গর্জিতেছেন গরজিতেন গর্জিতেন গরজিব গর্জিব গরজিবার গর্জিবার গরজিবি গর্জিবি গরজিবে গর্জিবে গরজিবেন গর্জিবেন গরজিল গর্জিল গরজিলাম গর্জিলাম গরজিলি গর্জিলি গরজিলে গর্জিলে গরজিলেন গর্জিলেন গরজিস গর্জিস গরজিয়া গর্জিয়া গরজিয়াছ গর্জিয়াছ গরজিয়াছি গর্জিয়াছি গরজিয়াছিল গর্জিয়াছিল গরজিয়াছিলাম গর্জিয়াছিলাম গরজিয়াছিলি গর্জিয়াছিলি গরজিয়াছিলে গর্জিয়াছিলে গরজিয়াছিলেন গর্জিয়াছিলেন গরজিয়াছিস গর্জিয়াছিস গরজিয়াছে গর্জিয়াছে গরজিয়াছেন গর্জিয়াছেন গরজিয়ো গর্জিয়ো গরজী গরজেছ গর্জেছ গরজেছি গর্জেছি গরজেছিল গর্জেছিল গরজেছিলাম গর্জেছিলাম গরজেছিলি গর্জেছিলি গরজেছিলে গর্জেছিলে গরজেছিলেন গর্জেছিলেন গরজেছিলেম গর্জেছিলেম গরজেছিলুম গর্জেছিলুম গরজেছিস গর্জেছিস গরজেছে গর্জেছে গরজেছেন গর্জেছেন গরজেন গর্জেন গর্জেস গরজো গর্জো গরজন গরজুন গর্জন গুরুজন গর্জনকারী গুরুজনকর্তৃক গরজনতেল গর্জনতেল গরজনতৈল গর্জনতৈল গর্জনধ্বনি গর্জনপূর্ণ গর্জনরত গরজবিশিষ্ট গরজবড়ো গর্জমান গর্জমানা গুর্জর গুর্জরী গুর্জরীরাগ গুরুজল গরয গ্র্যাজুয়েট গ্র্যাডিয়েন্ট গ্র্যানি গ্র্যান্ড গ্র্যান্ডি গ্র্যান্ডমাস্টার গ্র্যান্ডস্ট্যান্ড গ্র্যাভিটেশন গ্র্যামি গরযী গুরুঠাকুর গরঠিকানা গরঠিকানি গরঠিকানিয়া গর্ত গুরুতা গুরুতনয় গুরুত্ব গুরুত্বপরিমাপ গুরুত্বপূর্ণ গুরুত্ববাহী গুরুত্ববহ গুরুত্ববহন গুরুত্বসম্পন্ন গুরুত্বহীন গুরুতম গরুত্মান গরুত্মতী গরুত্মন্ত গুরুতর গুরুতুল্য গ্রথিত গ্রথন গরদ গর্দ গুরুদক্ষিণা গরদা গর্দা গুর্দা গরদান গর্দান গর্দানি গুরুদায়িত্ব গুরুদায়িত্বপূর্ণ গরদিশ গর্দিশ গুরুদেব গরদেরজোড় গুরুদণ্ড গর্দ্দা গর্দভ গর্দভী গুরুদশা গুরুনিতম্ব গুরুনিতম্বিনী গুরুনিন্দা গ্রন্থ গ্রন্থকার গ্রন্থকীট গ্রন্থকৃৎ গ্রন্থকর্তা গ্রন্থাকার গ্রন্থাগার গ্রন্থাগারিক গ্রন্থাদি গ্রন্থানুভূতি গ্রন্থানুসারে গ্রন্থাবলী গ্রন্থালয় গ্রন্থি গ্রন্থিক গ্রন্থিছেদক গ্রন্থিযুক্ত গ্রন্থিত গ্রন্থিবন্ধন গ্রন্থিমোচন গ্রন্থিল গ্রন্থিলিপি গ্রন্থতালিকা গ্রন্থদিবস গ্রন্থদ্বয় গ্রন্থন গ্রন্থনা গ্রন্থনাশ্রয়ী গ্রন্থনবাদ গ্রন্থনবাদী গ্রন্থপাঠ গ্রন্থপঞ্জী গ্রন্থপ্রণয়ন গ্রন্থমালা গ্রন্থমেলা গ্রন্থসংখ্যা গ্রন্থসূচী গ্রন্থসূত্র গ্রন্থস্বত্ব গ্রুপ গুরুপাক গুরুপাট গরপছন্দ গ্রুপযুক্ত গ্রুপতত্ত্ব গুরুপত্নী গুরুপত্নীহরণ গুরুপুত্র গ্রুপভিত্তিক গুরুপরিচর্যা গুরুপুরোহিত গুরুপুরুত গুরুপরম্পরা গরপসন্দ গরব গর্ব গুরুবংশ গুরুবংশীয় গর্বকারী গরবা গুরুবাক্য গর্বান্ধ গুরুবার গুরুবায়ু গর্বিণী গুর্বিণী গরবিত গর্বিত গর্বিতা গুরুবিদায় গরবিনী গুরুবিষয় গরবী গর্বী গুর্বী গর্বচূর্ণ গর্বোজ্জ্বল গর্বোদ্ধত গর্বযুক্ত গুরবত গুরুবৃত্ত গুরুবধ গরবনেদি গর্বপ্রকাশ গর্ববোধ গর্বভরে গুরুবরণ গুরুবর্ণ গুরুবল গর্বশূন্য গর্বহীন গর্বহেতু গর্ভ গ্রুভ গর্ভকাল গর্ভকালীন গর্ভকেশর গর্ভকোষ গুরুভক্ত গুরুভক্তি গর্ভকুসুম গর্ভগৃহ গুরুভাই গর্ভাগার গর্ভাঙ্ক গর্ভাধান গর্ভাবস্থা গুরুভার গর্ভারম্ভ গর্ভাশয় গর্ভিণী গর্ভিত গর্ভচ্যুত গর্ভচ্যুতি গুরুভোজন গর্ভোৎপন্ন গর্ভজ গর্ভজাত গর্ভযুক্ত গর্ভযুতা গর্ভযন্ত্রণা গর্ভতল গর্ভদাস গর্ভদাসী গর্ভদোহদ গর্ভধারিণী গর্ভধারণ গর্ভনাড়ি গর্ভনিঃসৃত গর্ভপাত গর্ভপাতক গর্ভপাতকারী গর্ভপাতন গর্ভপত্র গর্ভপত্রযুক্ত গর্ভপুষ্প গর্ভবাস গর্ভবেদনা গর্ভবতী গর্ভমাস গর্ভমোচন গর্ভলক্ষণ গর্ভশয্যা গর্ভসংক্রমণ গর্ভসঞ্চার গর্ভসঞ্চারকরণ গর্ভস্থ গর্ভসময় গর্ভস্রাব গরম গরমকাল গুরুমুখ গরুমুখী গুরমুখী গুরুমুখী গরমগরম গরমা গুরুমা গরমাগরম গরমানো গুরুমারা গরমি গর্মি গরমিল গরমজামা গুরুমন্ত্র গরমমোজা গরমমসলা গুরুমশাই গুরুমশায় গরমসলা গুরুমহাশয় গররা গররাজি গররাজী গুরুরত্ন গুরুরপাট গরল গুরুলঘু গুরুলঘুজ্ঞান গুরুলাঘব গরলায়েক গুরুশিষ্য গুরুশুশ্রূষা গরস গ্রস গ্রসিত গুরুসেবা গ্রস্ত গুরুস্থানীয় গুরুসদয় গ্রসন গ্রসমান গ্রহ গ্রহউপগ্রহ গ্রহগত গর্হা গুরুহা গ্রহাচার্য গরহাজির গরহাজিরা গরহাজিরাবাদ গরহাজিরি গরহাজীর গরহাজীরা গরহাযির গ্রহাণু গ্রহাণুপুঞ্জ গ্রহাণুস্থিত গ্রহাদি গর্হিত গ্রহচারী গ্রহীতা গ্রহেরফের গ্রহজগত গরহজম গর্হ্য গরহযম গর্হণ গ্রহণ গ্রহণঅযোগ্য গ্রহণকারিণী গ্রহণকারী গ্রহণকাল গর্হণা গ্রহণি গ্রহণী গ্রহণীয় গ্রহণীয়তা গ্রহণেচ্ছু গ্রহণেচ্ছা গ্রহণযোগ্য গ্রহণযোগ্যতা গ্রহণদায়িত্ব গ্রহণরূপ গ্রহতারকা গুরুহত্যা গ্রহদেবতা গ্রহদোষ গ্রহদ্বয় গুরুহন্তা গ্রহপাল গ্রহপতি গ্রহপৃষ্ঠ গ্রহবামনা গ্রহবায়ুমণ্ডল গ্রহবিদ্যা গ্রহবিপাক গ্রহবৈগুণ্য গ্রহবশত গ্রহমণ্ডল গ্রহরাজ গ্রহরাশি গ্রহরত্নাদি গ্রহশক্তি গ্রহশান্তি গ্রহসংখ্যা গ্রহসংযোগ গ্রহসন্নিবেশ গ্রহস্ফুট গ্রহয় গরুড় গরুড়াসন গরুড়ধ্বজ গরুড়বাহন গরুড়ভ্রাতা গরুড়শয়ন গরুয়া গুরুয়া গল গুল গলই গলুই গুলই গলুক গ্লুকাগন গুলকারী গ্লুকোজ গ্লুকোনিওজেনেসিস গ্লুকোমা গলকম্বল গলকম্বলহীন গলখেসিয়া গলখেস্যে গুলগাপ্পি গলগণ্ড গলগ্রহ গলগল গলা গুলা গ্লাইকোকোলিক গ্লাইকোপ্রোটিন গ্লাইকোলাইসিস গ্লাইকোসাইড গ্লাইডার গলাইত গুলাইত গলাইতাম গুলাইতাম গলাইতিস গুলাইতিস গলাইতে গুলাইতে গলাইতেছ গুলাইতেছ গলাইতেছি গুলাইতেছি গলাইতেছিল গুলাইতেছিল গলাইতেছিলাম গুলাইতেছিলাম গলাইতেছিলি গুলাইতেছিলি গলাইতেছিলে গুলাইতেছিলে গলাইতেছিলেন গুলাইতেছিলেন গলাইতেছিস গুলাইতেছিস গলাইতেছে গুলাইতেছে গলাইতেছেন গুলাইতেছেন গলাইতেন গুলাইতেন গলাইব গুলাইব গলাইবার গুলাইবার গলাইবি গুলাইবি গলাইবে গুলাইবে গলাইবেন গুলাইবেন গলাইল গুলাইল গলাইলাম গুলাইলাম গলাইলি গুলাইলি গলাইলে গুলাইলে গলাইলেন গুলাইলেন গ্লাইসিন গলাইয়া গুলাইয়া গলাইয়াছ গুলাইয়াছ গলাইয়াছি গুলাইয়াছি গলাইয়াছিল গুলাইয়াছিল গলাইয়াছিলাম গুলাইয়াছিলাম গলাইয়াছিলি গুলাইয়াছিলি গলাইয়াছিলে গুলাইয়াছিলে গলাইয়াছিলেন গুলাইয়াছিলেন গলাইয়াছিস গুলাইয়াছিস গলাইয়াছে গুলাইয়াছে গলাইয়াছেন গুলাইয়াছেন গলাইয়ো গুলাইয়ো গলাওয়ালা গলাক গুলাক গলাকাটা গলাগলি গলাচাপা গলাচিপা গলাচ্ছ গলাচ্ছি গলাচ্ছিল গলাচ্ছিলাম গলাচ্ছিলি গলাচ্ছিলে গলাচ্ছিলেন গলাচ্ছিলেম গলাচ্ছিলুম গলাচ্ছিস গলাচ্ছে গলাচ্ছেন গলাছাড়া গলাজল গলাটিপি গলাযোগ গলাঠাণ্ডা গলাত গলাতাম গলাতিস গলাতে গুলাতে গলাতেন গলাতেম গলাতোলা গলাতুম গলাধঃকৃত গলাধঃকরণ গলাধাক্কা গলান গুলান গ্লানি গ্লানিকর গ্লানিদায়ক গ্লানিপূর্ণ গ্লানিবোধ গ্লানিহীন গলানো গুলানো গ্লান্ড গলাব গুলাব গলাবাজি গলাবার গলাবি গুলাবি গুলাবী গলাবে গলাবেন গলাবো গুলাবজাম গুলাবজল গুলাবঝোরা গুলাবদান গলাবন্ধ গুলাবপানি গুলাবপাশ গলাবসা গলাভাঙা গলাভারী গুলাম গলারকাঁটা গলারজোর গলাল গুলাল গলালাম গলালি গলালে গলালেন গলালেম গলালুম গলাস গুলাস গ্লাস গ্লাসগো গলাসি গলায়আঁকশি গলায়আঙ্গুল গলায়গাঁথা গলায়গামছা গলায়গলায় গলায়ঘণ্টা গলায়ছুরি গলায়ছুরিকা গলায়দড়ি গলায়পা গলায়পড়া গলায়লাগা গলি গুলি গুলিকা গলিকুচ গলিকুচা গুলিখোর গলিঘুচি গলিঘুঁজি গলিজ গুলিডাণ্ডা গলিত গুলিত গলিতকুষ্ঠ গলিতাম গুলিতাম গলিতিস গুলিতিস গলিতেছ গুলিতেছ গলিতেছি গুলিতেছি গলিতেছিল গুলিতেছিল গলিতেছিলাম গুলিতেছিলাম গলিতেছিলি গুলিতেছিলি গলিতেছিলে গুলিতেছিলে গলিতেছিলেন গুলিতেছিলেন গলিতেছিস গুলিতেছিস গলিতেছে গুলিতেছে গলিতেছেন গুলিতেছেন গলিতেন গুলিতেন গলিতদন্ত গুলিদাণ্ডা গুলিন গলিপথ গলিব গুলিব গলিবার গুলিবার গুলিবিদ্ধ গুলিবিনিময় গলিবে গুলিবে গুলিবেঁধা গলিবেন গুলিবেন গুলিবর্ষণ গলিল গুলিল গলিলাম গুলিলাম গলিলি গুলিলি গলিলে গুলিলে গলিলেন গুলিলেন গলিস গুলিস গুলিস্তাঁ গুলিস্তান গলিয়া গুলিয়া গলিয়াছ গুলিয়াছ গলিয়াছি গুলিয়াছি গলিয়াছিল গুলিয়াছিল গলিয়াছিলাম গুলিয়াছিলাম গলিয়াছিলি গুলিয়াছিলি গলিয়াছিলে গুলিয়াছিলে গলিয়াছিলেন গুলিয়াছিলেন গলিয়াছিস গুলিয়াছিস গলিয়াছে গুলিয়াছে গলিয়াছেন গুলিয়াছেন গলিয়ে গুলিয়ে গলিয়েছ গুলিয়েছ গলিয়েছি গুলিয়েছি গলিয়েছিল গুলিয়েছিল গলিয়েছিলাম গুলিয়েছিলাম গলিয়েছিলি গুলিয়েছিলি গলিয়েছিলে গুলিয়েছিলে গলিয়েছিলেন গুলিয়েছিলেন গলিয়েছিলেম গুলিয়েছিলেম গলিয়েছিলুম গুলিয়েছিলুম গলিয়েছিস গুলিয়েছিস গলিয়েছে গুলিয়েছে গলিয়েছেন গুলিয়েছেন গলিয়ো গুলিয়ো গুলী গুলচ্ছ গুলচ্ছি গুলচ্ছিল গুলচ্ছিলাম গুলচ্ছিলি গুলচ্ছিলে গুলচ্ছিলেন গুলচ্ছিলেম গুলচ্ছিলুম গুলচ্ছিস গুলচ্ছে গুলচ্ছেন গলীয গুলীডাণ্ডা গুলীদাণ্ডা গলীয় গলে গুলে গলেছ গুলেছ গলেছি গুলেছি গলেছিল গুলেছিল গলেছিলাম গুলেছিলাম গলেছিলি গুলেছিলি গলেছিলে গুলেছিলে গলেছিলেন গুলেছিলেন গলেছিলেম গুলেছিলেম গলেছিলুম গুলেছিলুম গলেছিস গুলেছিস গলেছে গুলেছে গলেছেন গুলেছেন গলেন গুলেন গুলেনার গলেস্তনী গ্লেয় গলো গুলো গুলোন গ্লোব গ্লোবার গ্লোবাল গ্লোবালকমিউনিকেশন গ্লোবালসিস্টেম গ্লোবিউলিন গ্লোবিন গ্লোভার গলোর গলছ গুলছ গলছি গুলছি গলছিল গুলছিল গলছিলাম গুলছিলাম গলছিলি গুলছিলি গলছিলে গুলছিলে গলছিলেন গুলছিলেন গলছিলেম গুলছিলেম গলছিলুম গুলছিলুম গলছিস গুলছিস গলছে গুলছে গলছেন গুলছেন গুলজান গুলজার গলজি গলজিদ্রব্য গলজিবস্তু গুলঞ্চ গ্ল্যাডিয়েটর গ্ল্যাডস্টোন গ্লুটামিক গ্লুটামিন গ্লুটামেট গুলযার গলত গুলত গুলতাই গুলতান গুলতানি গুলতাপ্পি গলতাম গুলতাম গলতি গুলতি গলতিস গুলতিস গলতী গলতেন গুলতেন গলতেম গুলতেম গলতুম গুলতুম গুলতরাশ গুলতরাস গলদ গলদঘর্ম গলদা গুলদান গুলদানি গুলদার গলদেশ গলদশ্রু গলদশ্রুলোচন গুলদস্তা গলন গলুন গুলন গুলুন গুলনকশ গুলনকশা গুলনকসা গলনাংক গলনাঙ্ক গুলনার গলনালি গলনীয় গুলনো গল্প গল্পউপন্যাস গল্পকার গল্পগুচ্ছ গল্পগুজব গল্পগ্রন্থ গল্পজোট গুলপট্টি গল্পদুটো গল্পবাজ গল্পলেখক গল্পসমগ্র গল্পসল্প গুলফ গুলফাম গলব গুলব গুলবাগ গুলবাগিচা গুলবাজ গলবার গুলবার গুলবার্গ গুলবাহার গলবি গুলবি গলবিল গলবে গুলবে গলবেন গুলবেন গলবো গুলবো গুলবদন গুলবদনী গুলবন্ধী গুলবনফশা গলবস্ত্র গুল্ম গুলমোহর গুল্মলতা গুলরুখ গলরজ্জু গলল গুলল গললগ্ন গললগ্নী গললগ্নীকৃত গল্লা গললাম গুললাম গললি গুললি গুল্লি গললে গুললে গললেন গুললেন গললেম গুললেম গললুম গুললুম গুলশান গুলশিরাজি গলস্তনী গলহস্ত গুলয় গুশকরা গশগশ গশত গুশমান গুষ্টি গুষ্টিরপিণ্ডি গুষ্টিরমাথা গুষ্টিসুখ গুষ্ঠি গুষ্ঠীরপিণ্ডি গুষ্ঠীরমাথা গুষ্ঠীসুখ গসগস গসিপ গস্ত গস্তানি গুস্তাফ গস্তিদার গস্তবেনে গুহ গৃহ গৃহঋণ গুহক গৃহকার্য গুহকচাঁড়াল গুহকচণ্ডাল গৃহকোণ গৃহকুট্টিম গৃহকপোত গৃহকর্তা গৃহকর্ত্রী গৃহকর্ম গৃহকর্মনিপুণা গৃহগোধা গৃহগোধিকা গুহা গৃহাকার গৃহাগত গৃহাগ্র গুহাচিত্র গুহাচর গৃহাদি গৃহান্তর গুহাবাসী গৃহাভিমুখ গৃহাভিমুখী গৃহাভ্যন্তর গুহামুখ গুহামানব গুহালীন গৃহাশ্রম গৃহাশ্রমী গুহাশয় গৃহাসক্ত গুহাহিত গৃহিণী গৃহিণীপনা গহিন গৃহী গৃহচ্ছিদ্র গৃহীজীবন গৃহচ্যুত গৃহীত গহীন গৃহচূড়া গৃহছাড়া গৃহজাত গুহ্য গৃহ্য গুহ্যক গৃহযুক্ত গৃহ্যকর্ম গৃহযাচিকা গুহ্যজ্ঞান গুহ্যদেশ গৃহযুদ্ধ গুহ্যদ্বার গৃহ্যসূত্র গুহঠাকুর গৃহত্যাগ গৃহত্যাগী গৃহতল গৃহতলাদি গৃহদাহ গৃহদেবী গৃহদেবতা গৃহদ্বার গৃহধূম গৃহধর্ম গহন গহনকুসুম গহনা গহনাগাঁটি গহনাদি গহনাপত্র গহনাপরিহিত গহনারনৌকা গৃহনির্মাণ গৃহনির্মাণশিল্প গহনরাত গৃহপাল গৃহপালিত গৃহপোষ্য গৃহপতি গৃহপ্রাঙ্গণ গৃহপরিচারিকা গৃহপ্রতিষ্ঠা গৃহপ্রবেশ গৃহবাটিকা গৃহবাসী গৃহবিচ্ছেদ গৃহবিবাদ গৃহবিবাদকারী গৃহবধূ গৃহবন্দি গৃহবন্দিত্ব গৃহবন্দী গহ্বর গৃহবলিভুক গৃহভগ্নাবশেষ গৃহভেদ গৃহভেদিনী গৃহভেদী গৃহমুখ গৃহমৃগ গৃহমার্জার গৃহমেধিনী গৃহমেধী গৃহমণি গৃহলক্ষ্মী গৃহশিক্ষক গৃহশিক্ষকতা গৃহশিক্ষিকা গৃহশত্রু গৃহশূন্য গৃহশ্রেণী গুহষষ্ঠী গৃহসুখ গৃহসৌষ্ঠব গৃহসজ্জা গৃহস্থ গৃহস্থালি গৃহস্থাশ্রম গৃহস্থজীবন গৃহস্বামিনী গৃহস্বামী গৃহহারা গৃহহীন গড় গড়ু গুড় গুঁড় গড়ই গড়ুক গুড়ুক গুঁড়ক গুড়কতামাক গড়খাই গড়খান গড়খানা গুড়খেজুর গড়গড় গুড়গুড় গড়গড়া গুড়গুড়ি গুড়গুড়ে গড়া গুড়া গুঁড়া গড়াই গুঁড়াই গড়াইও গুঁড়াইও গড়াইত গুঁড়াইত গড়াইতাম গুঁড়াইতাম গড়াইতিস গুঁড়াইতিস গড়াইতে গুঁড়াইতে গড়াইতেছ গুঁড়াইতেছ গড়াইতেছি গুঁড়াইতেছি গড়াইতেছিল গুঁড়াইতেছিল গড়াইতেছিলাম গুঁড়াইতেছিলাম গড়াইতেছিলি গুঁড়াইতেছিলি গড়াইতেছিলে গুঁড়াইতেছিলে গড়াইতেছিলেন গুঁড়াইতেছিলেন গড়াইতেছিস গুঁড়াইতেছিস গড়াইতেছে গুঁড়াইতেছে গড়াইতেছেন গুঁড়াইতেছেন গড়াইতেন গুঁড়াইতেন গড়াইব গুঁড়াইব গড়াইবার গুঁড়াইবার গড়াইবি গুঁড়াইবি গড়াইবে গুঁড়াইবে গড়াইবেন গুঁড়াইবেন গড়াইল গুঁড়াইল গড়াইলাম গুঁড়াইলাম গড়াইলি গুঁড়াইলি গড়াইলে গুঁড়াইলে গড়াইলেন গুঁড়াইলেন গড়াইয়া গুঁড়াইয়া গড়াইয়াছ গুঁড়াইয়াছ গড়াইয়াছি গুঁড়াইয়াছি গড়াইয়াছিল গুঁড়াইয়াছিল গড়াইয়াছিলাম গুঁড়াইয়াছিলাম গড়াইয়াছিলি গুঁড়াইয়াছিলি গড়াইয়াছিলে গুঁড়াইয়াছিলে গড়াইয়াছিলেন গুঁড়াইয়াছিলেন গড়াইয়াছিস গুঁড়াইয়াছিস গড়াইয়াছে গুঁড়াইয়াছে গড়াইয়াছেন গুঁড়াইয়াছেন গড়াইয়ো গুঁড়াইয়ো গড়াও গুঁড়াও গড়াক গুড়াক গুঁড়াক গুড়াকা গড়াকেই গুড়াকেশ গড়াগড়া গড়াগড়ি গড়াচ্ছ গড়াচ্ছি গড়াচ্ছিল গড়াচ্ছিলাম গড়াচ্ছিলি গড়াচ্ছিলে গড়াচ্ছিলেন গড়াচ্ছিলেম গড়াচ্ছিলুম গড়াচ্ছিস গড়াচ্ছে গড়াচ্ছেন গড়াত গড়াতাম গড়াতিস গড়াতে গড়াতেন গড়াতেম গড়াতুম গড়ান গুড়ান গুঁড়ান গড়ানে গড়ানো গুড়ানো গুঁড়ানো গড়াপেটা গড়াব গড়াবার গড়াবি গড়াবে গড়াবেন গড়াবো গড়ার গুঁড়ার গড়াল গড়ালাম গড়ালি গড়ালে গড়ালেন গড়ালেম গড়ালুম গড়াস গুঁড়াস গড়ায় গড়ায়ু গুঁড়ায় গড়ায়গড়ায় গড়ায়া গড়ি গুড়ি গুঁড়ি গুড়িগুড়ি গুঁড়িগুঁড়ি গড়িত গড়িতাম গড়িতিস গড়িতে গুঁড়িতে গড়িতেছ গড়িতেছি গড়িতেছিল গড়িতেছিলাম গড়িতেছিলি গড়িতেছিলে গড়িতেছিলেন গড়িতেছিস গড়িতেছে গড়িতেছেন গড়িতেন গড়িব গড়িবার গড়িবি গড়িবে গড়িবেন গুড়িমারা গড়িমসি গড়িল গড়িলাম গড়িলি গড়িলে গড়িলেন গড়িস গুড়িসুড়ি গড়িয়া গুড়িয়া গড়িয়াছ গড়িয়াছি গড়িয়াছিল গড়িয়াছিলাম গড়িয়াছিলি গড়িয়াছিলে গড়িয়াছিলেন গড়িয়াছিস গড়িয়াছে গড়িয়াছেন গড়িয়ে গুড়িয়ে গুঁড়িয়ে গড়িয়েছ গুঁড়িয়েছ গড়িয়েছি গুঁড়িয়েছি গড়িয়েছিল গুঁড়িয়েছিল গড়িয়েছিলাম গুঁড়িয়েছিলাম গড়িয়েছিলি গুঁড়িয়েছিলি গড়িয়েছিলে গুঁড়িয়েছিলে গড়িয়েছিলেন গুঁড়িয়েছিলেন গড়িয়েছিলেম গুঁড়িয়েছিলেম গড়িয়েছিলুম গুঁড়িয়েছিলুম গড়িয়েছিস গুঁড়িয়েছিস গড়িয়েছে গুঁড়িয়েছে গড়িয়েছেন গুঁড়িয়েছেন গড়িয়ো গুঁড়িয়ো গুড়ুচি গুড়ূচী গুঁড়চ্ছ গুঁড়চ্ছি গুঁড়চ্ছিল গুঁড়চ্ছিলাম গুঁড়চ্ছিলি গুঁড়চ্ছিলে গুঁড়চ্ছিলেন গুঁড়চ্ছিলেম গুঁড়চ্ছিলুম গুঁড়চ্ছিস গুঁড়চ্ছে গুঁড়চ্ছেন গড়েগোরু গড়েছ গড়েছি গড়েছিল গড়েছিলাম গড়েছিলি গড়েছিলে গড়েছিলেন গড়েছিলেম গড়েছিলুম গড়েছিস গড়েছে গড়েছেন গড়েন গড়েননি গড়েরবাদ্যি গড়েরমাঠ গড়ো গুড়ো গুঁড়ো গুঁড়োন গুঁড়োনো গড়ছ গড়ছি গড়ছিল গড়ছিলাম গড়ছিলি গড়ছিলে গড়ছিলেন গড়ছিলেম গড়ছিলুম গড়ছিস গড়ছে গড়ছেন গড়ত গুঁড়ত গড়তাম গুঁড়তাম গড়তিস গুঁড়তিস গড়তে গুঁড়তে গড়তেন গুঁড়তেন গড়তেম গুঁড়তেম গড়তুম গুঁড়তুম গড়ন গড়ুন গুঁড়ন গুঁড়নো গড়নদার গড়নপিটন গড়নপেটন গড়পাড় গড়পড়তা গড়ব গুঁড়ব গড়বার গুঁড়বার গড়বি গুঁড়বি গড়বে গুঁড়বে গড়বেন গুঁড়বেন গড়বো গুঁড়বো গড়বড় গুড়ম গুড়ুম গড়মিল গুড়মিশ্রিত গড়ল গুঁড়ল গড়লাম গুঁড়লাম গড়লি গুঁড়লি গড়ুলীমন্ত্র গড়লে গুঁড়লে গড়লেন গুঁড়লেন গড়লেম গুঁড়লেম গড়লুম গুঁড়লুম গুঁড়স গড়হওয়া গুঁড়য় গূঢ়অভিসন্ধি গূঢ়উপহাস গুঢ়া গূঢ়ার্থ গূঢ়চারী গূঢ়পথ গূঢ়ফণা গূঢ়মায়া গয় গয়ংগচ্ছ গয়া গুয়া গুয়াতেমালা গুয়াথুবড়ি গয়ান গুয়ানা গুয়ানিন গুয়ানো গয়ানদার গুয়াপান গুয়াবাড়ি গয়াবোধ গয়াল গয়ালি গুয়াহাটি গয়ে গুয়ে গুয়েগোবরে গুয়েঢেলা গুয়েতেমালা গুয়ের্নিকা গুয়োটা গয়না গয়নাগাটি গয়নাপত্র গয়নার গয়নারনৌকা গয়বি গয়বী গয়র গয়রইসলামি গয়রত গয়রহ গয়রহাজির গয়লা গয়লানি গয়লাপাড়া".split(" "),
              w_gh: "ঘ ঘুংগুর ঘুংনি ঘুংনিদানা ঘুংড়িকাশি ঘুইরা ঘকার ঘুগনি ঘুগনিদানা ঘুগরা ঘুগরে ঘুগুস ঘুঘু ঘুঘুদহ ঘূঁঘর ঘুঙ্গট ঘুঙ্গুট ঘুঙ্গুর ঘুঙট ঘুঙুট ঘুঙরু ঘুঙুর ঘা ঘাই ঘাইট ঘাউড়া ঘাউড়ামি ঘাউয়া ঘাও ঘাগু ঘাগি ঘাগী ঘাগর ঘাগরা ঘাগরি ঘাঘর ঘাঘরা ঘাঘরি ঘাট ঘাঁট ঘাঁটুক ঘাযুক্ত ঘাটখরচ ঘাটখরচা ঘাটা ঘাঁটা ঘাঁটাইত ঘাঁটাইতাম ঘাঁটাইতিস ঘাঁটাইতে ঘাঁটাইতেছ ঘাঁটাইতেছি ঘাঁটাইতেছিল ঘাঁটাইতেছিলাম ঘাঁটাইতেছিলি ঘাঁটাইতেছিলে ঘাঁটাইতেছিলেন ঘাঁটাইতেছিস ঘাঁটাইতেছে ঘাঁটাইতেছেন ঘাঁটাইতেন ঘাঁটাইব ঘাঁটাইবার ঘাঁটাইবি ঘাঁটাইবে ঘাঁটাইবেন ঘাটাইল ঘাঁটাইল ঘাঁটাইলাম ঘাঁটাইলি ঘাঁটাইলে ঘাঁটাইলেন ঘাঁটাইয়া ঘাঁটাইয়াছ ঘাঁটাইয়াছি ঘাঁটাইয়াছিল ঘাঁটাইয়াছিলাম ঘাঁটাইয়াছিলি ঘাঁটাইয়াছিলে ঘাঁটাইয়াছিলেন ঘাঁটাইয়াছিস ঘাঁটাইয়াছে ঘাঁটাইয়াছেন ঘাঁটাইয়ো ঘাঁটাও ঘাঁটাক ঘাটাঘাটি ঘাঁটাঘাঁটি ঘাঁটাচ্ছ ঘাঁটাচ্ছি ঘাঁটাচ্ছিল ঘাঁটাচ্ছিলাম ঘাঁটাচ্ছিলি ঘাঁটাচ্ছিলে ঘাঁটাচ্ছিলেন ঘাঁটাচ্ছিলেম ঘাঁটাচ্ছিলুম ঘাঁটাচ্ছিস ঘাঁটাচ্ছে ঘাঁটাচ্ছেন ঘাঁটাত ঘাঁটাতাম ঘাঁটাতিস ঘাঁটাতে ঘাঁটাতেন ঘাঁটাতেম ঘাঁটাতুম ঘাঁটান ঘাঁটানো ঘাঁটাব ঘাঁটাবার ঘাঁটাবি ঘাঁটাবে ঘাঁটাবেন ঘাঁটাবো ঘাটাল ঘাঁটাল ঘাঁটালাম ঘাঁটালি ঘাঁটালে ঘাঁটালেন ঘাঁটালেম ঘাঁটালুম ঘাঁটাস ঘাটি ঘাঁটি ঘাঁটিত ঘাঁটিতাম ঘাঁটিতিস ঘাঁটিতে ঘাঁটিতেছ ঘাঁটিতেছি ঘাঁটিতেছিল ঘাঁটিতেছিলাম ঘাঁটিতেছিলি ঘাঁটিতেছিলে ঘাঁটিতেছিলেন ঘাঁটিতেছিস ঘাঁটিতেছে ঘাঁটিতেছেন ঘাঁটিতেন ঘাঁটিব ঘাঁটিবার ঘাঁটিবি ঘাঁটিবে ঘাঁটিবেন ঘাঁটির ঘাঁটিরক্ষক ঘাঁটিল ঘাঁটিলাম ঘাঁটিলি ঘাঁটিলে ঘাঁটিলেন ঘাঁটিস ঘাঁটিয়া ঘাঁটিয়াছ ঘাঁটিয়াছি ঘাঁটিয়াছিল ঘাঁটিয়াছিলাম ঘাঁটিয়াছিলি ঘাঁটিয়াছিলে ঘাঁটিয়াছিলেন ঘাঁটিয়াছিস ঘাঁটিয়াছে ঘাঁটিয়াছেন ঘাটিয়াল ঘাঁটিয়াল ঘাঁটিয়ে ঘাঁটিয়েছ ঘাঁটিয়েছি ঘাঁটিয়েছিল ঘাঁটিয়েছিলাম ঘাঁটিয়েছিলি ঘাঁটিয়েছিলে ঘাঁটিয়েছিলেন ঘাঁটিয়েছিলেম ঘাঁটিয়েছিলুম ঘাঁটিয়েছিস ঘাঁটিয়েছে ঘাঁটিয়েছেন ঘাঁটিয়ো ঘাটেঘাটে ঘাঁটেন ঘাটেরকড়ি ঘাটোয়াল ঘাটোয়ালি ঘাটোয়ালী ঘাঁটছ ঘাঁটছি ঘাঁটছিল ঘাঁটছিলাম ঘাঁটছিলি ঘাঁটছিলে ঘাঁটছিলেন ঘাঁটছিলেম ঘাঁটছিলুম ঘাঁটছিস ঘাঁটছে ঘাঁটছেন ঘাঁটত ঘাঁটতাম ঘাটতি ঘাটতিজনিত ঘাটতিবাড়তি ঘাঁটতিস ঘাটতে ঘাঁটতে ঘাঁটতেন ঘাঁটতেম ঘাঁটতুম ঘাটন ঘাঁটন ঘাঁটুন ঘাঁটব ঘাঁটবার ঘাঁটবি ঘাঁটবে ঘাঁটবেন ঘাঁটবো ঘাটমাঝি ঘাটমানা ঘাটমারা ঘাটরক্ষক ঘাঁটল ঘাটলা ঘাঁটলাম ঘাঁটলি ঘাঁটলে ঘাঁটলেন ঘাঁটলেম ঘাঁটলুম ঘাত ঘাঁত ঘাতক ঘাতুক ঘাতঘোত ঘাঁতঘোত ঘাতিকা ঘাতিনী ঘাতী ঘাতচিহ্ন ঘাতজন ঘাত্য ঘাতযোগ্য ঘাতন ঘাতনী ঘাতপ্রতি ঘাতপ্রতিঘাত ঘাতবাদ্য ঘাতবি ঘাতসহ ঘানা ঘানি ঘানিক ঘানিকল ঘানিগাছ ঘানিটানা ঘানিযন্ত্র ঘানিপেষা ঘানী ঘাপটি ঘাপলা ঘাবলা ঘাবড়া ঘাবড়াইত ঘাবড়াইতাম ঘাবড়াইতিস ঘাবড়াইতে ঘাবড়াইতেছ ঘাবড়াইতেছি ঘাবড়াইতেছিল ঘাবড়াইতেছিলাম ঘাবড়াইতেছিলি ঘাবড়াইতেছিলে ঘাবড়াইতেছিলেন ঘাবড়াইতেছিস ঘাবড়াইতেছে ঘাবড়াইতেছেন ঘাবড়াইতেন ঘাবড়াইব ঘাবড়াইবার ঘাবড়াইবি ঘাবড়াইবে ঘাবড়াইবেন ঘাবড়াইল ঘাবড়াইলাম ঘাবড়াইলি ঘাবড়াইলে ঘাবড়াইলেন ঘাবড়াইয়া ঘাবড়াইয়াছ ঘাবড়াইয়াছি ঘাবড়াইয়াছিল ঘাবড়াইয়াছিলাম ঘাবড়াইয়াছিলি ঘাবড়াইয়াছিলে ঘাবড়াইয়াছিলেন ঘাবড়াইয়াছিস ঘাবড়াইয়াছে ঘাবড়াইয়াছেন ঘাবড়াইয়ো ঘাবড়াক ঘাবড়াচ্ছ ঘাবড়াচ্ছি ঘাবড়াচ্ছিল ঘাবড়াচ্ছিলাম ঘাবড়াচ্ছিলি ঘাবড়াচ্ছিলে ঘাবড়াচ্ছিলেন ঘাবড়াচ্ছিলেম ঘাবড়াচ্ছিলুম ঘাবড়াচ্ছিস ঘাবড়াচ্ছে ঘাবড়াচ্ছেন ঘাবড়াত ঘাবড়াতাম ঘাবড়াতিস ঘাবড়াতে ঘাবড়াতেন ঘাবড়াতেম ঘাবড়াতুম ঘাবড়ান ঘাবড়ানি ঘাবড়ানো ঘাবড়াব ঘাবড়াবার ঘাবড়াবি ঘাবড়াবে ঘাবড়াবেন ঘাবড়াবো ঘাবড়াল ঘাবড়ালাম ঘাবড়ালি ঘাবড়ালে ঘাবড়ালেন ঘাবড়ালেম ঘাবড়ালুম ঘাবড়াস ঘাবড়িয়ো ঘাবড়ে ঘাবড়েছ ঘাবড়েছি ঘাবড়েছিল ঘাবড়েছিলাম ঘাবড়েছিলি ঘাবড়েছিলে ঘাবড়েছিলেন ঘাবড়েছিলেম ঘাবড়েছিলুম ঘাবড়েছিস ঘাবড়েছে ঘাবড়েছেন ঘাবড়ো ঘাম ঘামুক ঘামা ঘামাইত ঘামাইতাম ঘামাইতিস ঘামাইতে ঘামাইতেছ ঘামাইতেছি ঘামাইতেছিল ঘামাইতেছিলাম ঘামাইতেছিলি ঘামাইতেছিলে ঘামাইতেছিলেন ঘামাইতেছিস ঘামাইতেছে ঘামাইতেছেন ঘামাইতেন ঘামাইব ঘামাইবার ঘামাইবি ঘামাইবে ঘামাইবেন ঘামাইল ঘামাইলাম ঘামাইলি ঘামাইলে ঘামাইলেন ঘামাইয়া ঘামাইয়াছ ঘামাইয়াছি ঘামাইয়াছিল ঘামাইয়াছিলাম ঘামাইয়াছিলি ঘামাইয়াছিলে ঘামাইয়াছিলেন ঘামাইয়াছিস ঘামাইয়াছে ঘামাইয়াছেন ঘামাইয়ো ঘামাক ঘামাচি ঘামাচ্ছ ঘামাচ্ছি ঘামাচ্ছিল ঘামাচ্ছিলাম ঘামাচ্ছিলি ঘামাচ্ছিলে ঘামাচ্ছিলেন ঘামাচ্ছিলেম ঘামাচ্ছিলুম ঘামাচ্ছিস ঘামাচ্ছে ঘামাচ্ছেন ঘামাত ঘামাতাম ঘামাতিস ঘামাতে ঘামাতেন ঘামাতেম ঘামাতুম ঘামান ঘামানো ঘামাব ঘামাবার ঘামাবি ঘামাবে ঘামাবেন ঘামাবো ঘামাল ঘামালাম ঘামালি ঘামালে ঘামালেন ঘামালেম ঘামালুম ঘামাস ঘামি ঘামিত ঘামিতাম ঘামিতিস ঘামিতে ঘামিতেছ ঘামিতেছি ঘামিতেছিল ঘামিতেছিলাম ঘামিতেছিলি ঘামিতেছিলে ঘামিতেছিলেন ঘামিতেছিস ঘামিতেছে ঘামিতেছেন ঘামিতেন ঘামিব ঘামিবার ঘামিবি ঘামিবে ঘামিবেন ঘামিল ঘামিলাম ঘামিলি ঘামিলে ঘামিলেন ঘামিস ঘামিয়া ঘামিয়াছ ঘামিয়াছি ঘামিয়াছিল ঘামিয়াছিলাম ঘামিয়াছিলি ঘামিয়াছিলে ঘামিয়াছিলেন ঘামিয়াছিস ঘামিয়াছে ঘামিয়াছেন ঘামিয়ে ঘামিয়েছ ঘামিয়েছি ঘামিয়েছিল ঘামিয়েছিলাম ঘামিয়েছিলি ঘামিয়েছিলে ঘামিয়েছিলেন ঘামিয়েছিলেম ঘামিয়েছিলুম ঘামিয়েছিস ঘামিয়েছে ঘামিয়েছেন ঘামিয়ো ঘামেন ঘামছ ঘামছি ঘামছিল ঘামছিলাম ঘামছিলি ঘামছিলে ঘামছিলেন ঘামছিলেম ঘামছিলুম ঘামছিস ঘামছে ঘামছেন ঘামযুক্ত ঘামত ঘামতাম ঘামতিস ঘামতে ঘামতেন ঘামতেম ঘামতেল ঘামতুম ঘামুন ঘামব ঘামবার ঘামবি ঘামবে ঘামবেন ঘামবো ঘামল ঘামলাম ঘামলি ঘামলে ঘামলেন ঘামলেম ঘামলুম ঘাল ঘাস ঘাসকাটা ঘাসাচ্ছাদিত ঘাসি ঘাসিনৌকা ঘাসী ঘাসীনৌকা ঘাসজল ঘাসযুক্ত ঘাসপাতা ঘাসপানি ঘাসফড়িঙ ঘাসবিহীন ঘাসব্যবসায়ী ঘাসবন ঘাসবহুল ঘাসভূমি ঘাসুড়িয়া ঘাড় ঘাড়গোঁজা ঘাড়গর্দান ঘাড়ি ঘাড়েগর্দানে ঘাড়েচাপা ঘাড়েজোয়াল ঘাড়েভূত ঘাড়েমাথা ঘাড়ধাক্কা ঘাড়ধরা ঘাড়নাড়া ঘাড়পাতা ঘাড়ভাঙ্গা ঘাড়ভাঙা ঘাড়সমেত ঘায়েল ঘি ঘিচিঘিচি ঘিচিমিচি ঘিঞ্চি ঘিঞ্জি ঘিন ঘিনঘিন ঘিভাত ঘিমাখন ঘির ঘিরক ঘিরুক ঘিরা ঘিরাইত ঘিরাইতাম ঘিরাইতিস ঘিরাইতে ঘিরাইতেছ ঘিরাইতেছি ঘিরাইতেছিল ঘিরাইতেছিলাম ঘিরাইতেছিলি ঘিরাইতেছিলে ঘিরাইতেছিলেন ঘিরাইতেছিস ঘিরাইতেছে ঘিরাইতেছেন ঘিরাইতেন ঘিরাইব ঘিরাইবার ঘিরাইবি ঘিরাইবে ঘিরাইবেন ঘিরাইল ঘিরাইলাম ঘিরাইলি ঘিরাইলে ঘিরাইলেন ঘিরাইয়া ঘিরাইয়াছ ঘিরাইয়াছি ঘিরাইয়াছিল ঘিরাইয়াছিলাম ঘিরাইয়াছিলি ঘিরাইয়াছিলে ঘিরাইয়াছিলেন ঘিরাইয়াছিস ঘিরাইয়াছে ঘিরাইয়াছেন ঘিরাইয়ো ঘিরাক ঘিরাটোপ ঘিরান ঘিরানো ঘিরাস ঘিরি ঘিরিত ঘিরিতাম ঘিরিতিস ঘিরিতে ঘিরিতেছ ঘিরিতেছি ঘিরিতেছিল ঘিরিতেছিলাম ঘিরিতেছিলি ঘিরিতেছিলে ঘিরিতেছিলেন ঘিরিতেছিস ঘিরিতেছে ঘিরিতেছেন ঘিরিতেন ঘিরিব ঘিরিবার ঘিরিবি ঘিরিবে ঘিরিবেন ঘিরিল ঘিরিলাম ঘিরিলি ঘিরিলে ঘিরিলেন ঘিরিস ঘিরিয়া ঘিরিয়াছ ঘিরিয়াছি ঘিরিয়াছিল ঘিরিয়াছিলাম ঘিরিয়াছিলি ঘিরিয়াছিলে ঘিরিয়াছিলেন ঘিরিয়াছিস ঘিরিয়াছে ঘিরিয়াছেন ঘিরিয়ে ঘিরিয়েছ ঘিরিয়েছি ঘিরিয়েছিল ঘিরিয়েছিলাম ঘিরিয়েছিলি ঘিরিয়েছিলে ঘিরিয়েছিলেন ঘিরিয়েছিলেম ঘিরিয়েছিলুম ঘিরিয়েছিস ঘিরিয়েছে ঘিরিয়েছেন ঘিরিয়ো ঘিরচ্ছ ঘিরচ্ছি ঘিরচ্ছিল ঘিরচ্ছিলাম ঘিরচ্ছিলি ঘিরচ্ছিলে ঘিরচ্ছিলেন ঘিরচ্ছিলেম ঘিরচ্ছিলুম ঘিরচ্ছিস ঘিরচ্ছে ঘিরচ্ছেন ঘিরে ঘিরেছ ঘিরেছি ঘিরেছিল ঘিরেছিলাম ঘিরেছিলি ঘিরেছিলে ঘিরেছিলেন ঘিরেছিলেম ঘিরেছিলুম ঘিরেছিস ঘিরেছে ঘিরেছেন ঘিরেন ঘিরো ঘিরছ ঘিরছি ঘিরছিল ঘিরছিলাম ঘিরছিলি ঘিরছিলে ঘিরছিলেন ঘিরছিলেম ঘিরছিলুম ঘিরছিস ঘিরছে ঘিরছেন ঘিরত ঘিরতাম ঘিরতিস ঘিরতে ঘিরতেন ঘিরতেম ঘিরতুম ঘিরন ঘিরুন ঘিরনো ঘিরব ঘিরবার ঘিরবি ঘিরবে ঘিরবেন ঘিরবো ঘিরল ঘিরলাম ঘিরলি ঘিরলে ঘিরলেন ঘিরলেম ঘিরলুম ঘিরস ঘিলু ঘিসকাপ ঘিসক্যাপ ঘিয়েভাজা ঘিয়েমাখা ঘুচ ঘুচক ঘুচুক ঘচঘচ ঘুচা ঘুচাইও ঘুচাইত ঘুচাইতাম ঘুচাইতিস ঘুচাইতে ঘুচাইতেছ ঘুচাইতেছি ঘুচাইতেছিল ঘুচাইতেছিলাম ঘুচাইতেছিলি ঘুচাইতেছিলে ঘুচাইতেছিলেন ঘুচাইতেছিস ঘুচাইতেছে ঘুচাইতেছেন ঘুচাইতেন ঘুচাইব ঘুচাইবার ঘুচাইবি ঘুচাইবে ঘুচাইবেন ঘুচাইল ঘুচাইলাম ঘুচাইলি ঘুচাইলে ঘুচাইলেন ঘুচাইয়া ঘুচাইয়াছ ঘুচাইয়াছি ঘুচাইয়াছিল ঘুচাইয়াছিলাম ঘুচাইয়াছিলি ঘুচাইয়াছিলে ঘুচাইয়াছিলেন ঘুচাইয়াছিস ঘুচাইয়াছে ঘুচাইয়াছেন ঘুচাইয়ো ঘুচাক ঘচাঘচ ঘুচান ঘুচানো ঘুচাস ঘুচি ঘুচিত ঘুচিতাম ঘুচিতিস ঘুচিতে ঘুচিতেছ ঘুচিতেছি ঘুচিতেছিল ঘুচিতেছিলাম ঘুচিতেছিলি ঘুচিতেছিলে ঘুচিতেছিলেন ঘুচিতেছিস ঘুচিতেছে ঘুচিতেছেন ঘুচিতেন ঘুচিব ঘুচিবার ঘুচিবি ঘুচিবে ঘুচিবেন ঘুচিল ঘুচিলাম ঘুচিলি ঘুচিলে ঘুচিলেন ঘুচিস ঘুচিয়া ঘুচিয়াছ ঘুচিয়াছি ঘুচিয়াছিল ঘুচিয়াছিলাম ঘুচিয়াছিলি ঘুচিয়াছিলে ঘুচিয়াছিলেন ঘুচিয়াছিস ঘুচিয়াছে ঘুচিয়াছেন ঘুচিয়ে ঘুচিয়েছ ঘুচিয়েছি ঘুচিয়েছিল ঘুচিয়েছিলাম ঘুচিয়েছিলি ঘুচিয়েছিলে ঘুচিয়েছিলেন ঘুচিয়েছিলেম ঘুচিয়েছিলুম ঘুচিয়েছিস ঘুচিয়েছে ঘুচিয়েছেন ঘুচিয়ো ঘুচচ্ছ ঘুচচ্ছি ঘুচচ্ছিল ঘুচচ্ছিলাম ঘুচচ্ছিলি ঘুচচ্ছিলে ঘুচচ্ছিলেন ঘুচচ্ছিলেম ঘুচচ্ছিলুম ঘুচচ্ছিস ঘুচচ্ছে ঘুচচ্ছেন ঘুচে ঘুচেছ ঘুচেছি ঘুচেছিল ঘুচেছিলাম ঘুচেছিলি ঘুচেছিলে ঘুচেছিলেন ঘুচেছিলেম ঘুচেছিলুম ঘুচেছিস ঘুচেছে ঘুচেছেন ঘুচেন ঘুচো ঘুচছ ঘুচছি ঘুচছিল ঘুচছিলাম ঘুচছিলি ঘুচছিলে ঘুচছিলেন ঘুচছিলেম ঘুচছিলুম ঘুচছিস ঘুচছে ঘুচছেন ঘুচত ঘুচতাম ঘুচতিস ঘুচতে ঘুচতেন ঘুচতেম ঘুচতুম ঘুচন ঘুচুন ঘুচনো ঘুচব ঘুচবার ঘুচবি ঘুচবে ঘুচবেন ঘুচবো ঘুচল ঘুচলাম ঘুচলি ঘুচলে ঘুচলেন ঘুচলেম ঘুচলুম ঘুচস ঘে ঘেংরাল ঘেউ ঘেউঘেউ ঘেঙ্গা ঘেঙ্গান ঘেঙ্গানি ঘেঙ্গানো ঘেঙা ঘেঙান ঘেঙানি ঘেঙানো ঘোষণা ঘেচু ঘেঁচু ঘেচি ঘেঁচি ঘেচড়া ঘেঁচড়া ঘেঁচড়ানো ঘেঁটু ঘেটি ঘেঁটে ঘেঁটেছ ঘেঁটেছি ঘেঁটেছিল ঘেঁটেছিলাম ঘেঁটেছিলি ঘেঁটেছিলে ঘেঁটেছিলেন ঘেঁটেছিলেম ঘেঁটেছিলুম ঘেঁটেছিস ঘেঁটেছে ঘেঁটেছেন ঘেটেল ঘেটেলি ঘেঁটো ঘেঁটুঠাকুর ঘেনঘেন ঘেন্না ঘেন্নাপিত্তি ঘেমে ঘেমেছ ঘেমেছি ঘেমেছিল ঘেমেছিলাম ঘেমেছিলি ঘেমেছিলে ঘেমেছিলেন ঘেমেছিলেম ঘেমেছিলুম ঘেমেছিস ঘেমেছে ঘেমেছেন ঘেমো ঘের ঘেরা ঘেরাও ঘেরাক ঘেরাচ্ছ ঘেরাচ্ছি ঘেরাচ্ছিল ঘেরাচ্ছিলাম ঘেরাচ্ছিলি ঘেরাচ্ছিলে ঘেরাচ্ছিলেন ঘেরাচ্ছিলেম ঘেরাচ্ছিলুম ঘেরাচ্ছিস ঘেরাচ্ছে ঘেরাচ্ছেন ঘেরাটোপ ঘেরাত ঘেরাতাম ঘেরাতিস ঘেরাতে ঘেরাতেন ঘেরাতেম ঘেরাতুম ঘেরান ঘেরানো ঘেরাব ঘেরাবার ঘেরাবি ঘেরাবে ঘেরাবেন ঘেরাবো ঘেরাল ঘেরালাম ঘেরালি ঘেরালে ঘেরালেন ঘেরালেম ঘেরালুম ঘেরাস ঘেরিল ঘেরে ঘেরেন ঘেরবার ঘেঁষ ঘেঁষুক ঘেঁষা ঘেঁষাঘেঁষি ঘেঁষি ঘেঁষিত ঘেঁষিতাম ঘেঁষিতিস ঘেঁষিতে ঘেঁষিতেছ ঘেঁষিতেছি ঘেঁষিতেছিল ঘেঁষিতেছিলাম ঘেঁষিতেছিলি ঘেঁষিতেছিলে ঘেঁষিতেছিলেন ঘেঁষিতেছিস ঘেঁষিতেছে ঘেঁষিতেছেন ঘেঁষিতেন ঘেঁষিব ঘেঁষিবার ঘেঁষিবি ঘেঁষিবে ঘেঁষিবেন ঘেঁষিল ঘেঁষিলাম ঘেঁষিলি ঘেঁষিলে ঘেঁষিলেন ঘেঁষিস ঘেঁষিয়া ঘেঁষিয়াছ ঘেঁষিয়াছি ঘেঁষিয়াছিল ঘেঁষিয়াছিলাম ঘেঁষিয়াছিলি ঘেঁষিয়াছিলে ঘেঁষিয়াছিলেন ঘেঁষিয়াছিস ঘেঁষিয়াছে ঘেঁষিয়াছেন ঘেঁষিয়ো ঘেঁষে ঘেঁষেছ ঘেঁষেছি ঘেঁষেছিল ঘেঁষেছিলাম ঘেঁষেছিলি ঘেঁষেছিলে ঘেঁষেছিলেন ঘেঁষেছিলেম ঘেঁষেছিলুম ঘেঁষেছিস ঘেঁষেছে ঘেঁষেছেন ঘেঁষেন ঘেঁষো ঘেঁষছ ঘেঁষছি ঘেঁষছিল ঘেঁষছিলাম ঘেঁষছিলি ঘেঁষছিলে ঘেঁষছিলেন ঘেঁষছিলেম ঘেঁষছিলুম ঘেঁষছিস ঘেঁষছে ঘেঁষছেন ঘেঁষত ঘেঁষতাম ঘেঁষতিস ঘেষতে ঘেঁষতে ঘেঁষতেন ঘেঁষতেম ঘেঁষতুম ঘেঁষুন ঘেঁষব ঘেঁষবার ঘেঁষবি ঘেঁষবে ঘেঁষবেন ঘেঁষবো ঘেঁষল ঘেঁষলাম ঘেঁষলি ঘেঁষলে ঘেঁষলেন ঘেঁষলেম ঘেঁষলুম ঘেঁষড়ানি ঘেঁষড়ানো ঘেঁস ঘেসেড়া ঘেসেড়ানি ঘেসেড়ানী ঘেসো ঘেসোমাঠ ঘেসড়ান ঘেসড়ানি ঘেঁসড়ানি ঘেসড়ানো ঘেঁসড়ানো ঘেয়ো ঘেয়োকুত্তা ঘো ঘোগ ঘোঁঘট ঘোঙ্গট ঘোঙট ঘোচ ঘোঁচ ঘোঁচঘাঁচ ঘোচা ঘোচাক ঘোচাচ্ছ ঘোচাচ্ছি ঘোচাচ্ছিল ঘোচাচ্ছিলাম ঘোচাচ্ছিলি ঘোচাচ্ছিলে ঘোচাচ্ছিলেন ঘোচাচ্ছিলেম ঘোচাচ্ছিলুম ঘোচাচ্ছিস ঘোচাচ্ছে ঘোচাচ্ছেন ঘোচাত ঘোচাতাম ঘোচাতিস ঘোচাতে ঘোচাতেন ঘোচাতেম ঘোচাতুম ঘোচান ঘোচানো ঘোচাব ঘোচাবার ঘোচাবি ঘোচাবে ঘোচাবেন ঘোচাবো ঘোচাল ঘোচালাম ঘোচালি ঘোচালে ঘোচালেন ঘোচালেম ঘোচালুম ঘোচাস ঘোচে ঘোচেন ঘোচবার ঘোঁজ ঘোঁজঘাঁজ ঘোট ঘোঁট ঘোটক ঘোটকারূঢ় ঘোটকিনী ঘোটকী ঘোটা ঘোঁটা ঘোঁটান ঘোঁটানো ঘোঁটেন ঘোটন ঘোঁটন ঘোঁটনকাঠি ঘোটনা ঘোঁটনা ঘোঁটনো ঘোঁটপাকানো ঘোঁটবার ঘোঁটমণ্ডল ঘোণা ঘোঁত ঘোঁতঘোঁত ঘোঁৎঘোঁৎ ঘোনা ঘোপ ঘোপঘাপ ঘোমটা ঘোমটাপরা ঘোমটাহীন ঘোর ঘোরগ্রস্ত ঘোরঘের ঘোরঘোর ঘোরা ঘোরাক ঘোরাঘুরি ঘোরাচ্ছ ঘোরাচ্ছি ঘোরাচ্ছিল ঘোরাচ্ছিলাম ঘোরাচ্ছিলি ঘোরাচ্ছিলে ঘোরাচ্ছিলেন ঘোরাচ্ছিলেম ঘোরাচ্ছিলুম ঘোরাচ্ছিস ঘোরাচ্ছে ঘোরাচ্ছেন ঘোরাত ঘোরাতাম ঘোরাতিস ঘোরাতে ঘোরাতেন ঘোরাতেম ঘোরাতুম ঘোরান ঘোরানি ঘোরানো ঘোরাপথ ঘোরাফেরা ঘোরাব ঘোরাবার ঘোরাবি ঘোরাবে ঘোরাবেন ঘোরাবো ঘোরাল ঘোরালাম ঘোরালি ঘোরালে ঘোরালেন ঘোরালেম ঘোরালো ঘোরালুম ঘোরাস ঘোরেন ঘোরযুক্ত ঘোরতর ঘোরতরা ঘোরদর্শন ঘোরদর্শনা ঘোরনাস্তিক ঘোরপেঁচ ঘোরপ্যাঁচ ঘোরপ্যাঁচযুক্ত ঘোরফের ঘোরবার ঘোরমাতাল ঘোরলাগা ঘোল ঘোলা ঘোলাক ঘোলাচোখ ঘোলাচ্ছ ঘোলাচ্ছি ঘোলাচ্ছিল ঘোলাচ্ছিলাম ঘোলাচ্ছিলি ঘোলাচ্ছিলে ঘোলাচ্ছিলেন ঘোলাচ্ছিলেম ঘোলাচ্ছিলুম ঘোলাচ্ছিস ঘোলাচ্ছে ঘোলাচ্ছেন ঘোলাটে ঘোলাত ঘোলাতাম ঘোলাতিস ঘোলাতে ঘোলাতেন ঘোলাতেম ঘোলাতুম ঘোলান ঘোলানো ঘোলাপানি ঘোলাব ঘোলাবার ঘোলাবি ঘোলাবে ঘোলাবেন ঘোলাবো ঘোলাল ঘোলালাম ঘোলালি ঘোলালে ঘোলালেন ঘোলালেম ঘোলালুম ঘোলাস ঘোলে ঘোলঢালা ঘোলমউনি ঘোষ ঘোষক ঘোষা ঘোষাচ্ছে ঘোষান ঘোষানো ঘোষাল ঘোষি ঘোষিত ঘোষিতাম ঘোষিতিস ঘোষিতে ঘোষিতেছ ঘোষিতেছি ঘোষিতেছিল ঘোষিতেছিলাম ঘোষিতেছিলি ঘোষিতেছিলে ঘোষিতেছিলেন ঘোষিতেছিস ঘোষিতেছে ঘোষিতেছেন ঘোষিতেন ঘোষিব ঘোষিবার ঘোষিবি ঘোষিবে ঘোষিবেন ঘোষিল ঘোষিলাম ঘোষিলি ঘোষিলে ঘোষিলেন ঘোষিস ঘোষিয়া ঘোষিয়াছ ঘোষিয়াছি ঘোষিয়াছিল ঘোষিয়াছিলাম ঘোষিয়াছিলি ঘোষিয়াছিলে ঘোষিয়াছিলেন ঘোষিয়াছিস ঘোষিয়াছে ঘোষিয়াছেন ঘোষিয়ো ঘোষে ঘোষেছ ঘোষেছি ঘোষেছিল ঘোষেছিলাম ঘোষেছিলি ঘোষেছিলে ঘোষেছিলেন ঘোষেছিলেম ঘোষেছিলুম ঘোষেছিস ঘোষেছে ঘোষেছেন ঘোষেন ঘোষছ ঘোষছি ঘোষছিল ঘোষছিলাম ঘোষছিলি ঘোষছিলে ঘোষছিলেন ঘোষছিলেম ঘোষছিলুম ঘোষছিস ঘোষছে ঘোষছেন ঘোষজা ঘোষযাত্রা ঘোষণ ঘোষণা ঘোষণাকারী ঘোষণাকালীন ঘোষণাকৃত ঘোষণাপত্র ঘোষত ঘোষতাম ঘোষতিস ঘোষতে ঘোষতেন ঘোষতেম ঘোষতুম ঘোষধ্বনি ঘোষুন ঘোষপাড়া ঘোষপত্র ঘোষব ঘোষবার ঘোষবি ঘোষবে ঘোষবেন ঘোষবো ঘোষবর্ণ ঘোষল ঘোষলাম ঘোষলি ঘোষলে ঘোষলেন ঘোষলেম ঘোষলুম ঘোষহীন ঘোস্ট ঘোড় ঘোড়গাড়ি ঘোড়া ঘোড়াখেলা ঘোড়াচালিত ঘোড়াছোটা ঘোড়াছুটা ঘোড়াডিঙিয়ে ঘোড়ামুখী ঘোড়ামুখো ঘোড়ামুগ ঘোড়ারু ঘোড়ারঘাস ঘোড়ারোগ ঘোড়ারজিন ঘোড়ারডাক ঘোড়ারডিম ঘোড়ারদানা ঘোড়াশাল ঘোড়ায়টানা ঘোড়েল ঘোড়তোলা ঘোড়দৌড় ঘোড়সওয়ার ঘুঁজি ঘুঞ্জি ঘট ঘুট ঘুঁট ঘটক ঘটুক ঘুঁটুক ঘটকার ঘটকারক ঘটকালি ঘটকালী ঘটকী ঘটকর্পর ঘটঘট ঘুটঘুট ঘটঘটানি ঘটঘটানো ঘুটঘুটে ঘটা ঘুঁটা ঘটাইও ঘটাইত ঘটাইতাম ঘটাইতিস ঘটাইতে ঘটাইতেছ ঘটাইতেছি ঘটাইতেছিল ঘটাইতেছিলাম ঘটাইতেছিলি ঘটাইতেছিলে ঘটাইতেছিলেন ঘটাইতেছিস ঘটাইতেছে ঘটাইতেছেন ঘটাইতেন ঘটাইব ঘটাইবার ঘটাইবি ঘটাইবে ঘটাইবেন ঘটাইল ঘটাইলাম ঘটাইলি ঘটাইলে ঘটাইলেন ঘটাইয়া ঘটাইয়াছ ঘটাইয়াছি ঘটাইয়াছিল ঘটাইয়াছিলাম ঘটাইয়াছিলি ঘটাইয়াছিলে ঘটাইয়াছিলেন ঘটাইয়াছিস ঘটাইয়াছে ঘটাইয়াছেন ঘটাইয়ো ঘটাক ঘটাকাশ ঘ্যাগ ঘ্যাঙ ঘ্যাঙানি ঘ্যাঙর ঘ্যাঙরঘ্যাঙ ঘ্যাঁচ ঘটাচ্ছ ঘটাচ্ছি ঘটাচ্ছিল ঘটাচ্ছিলাম ঘটাচ্ছিলি ঘটাচ্ছিলে ঘটাচ্ছিলেন ঘটাচ্ছিলেম ঘটাচ্ছিলুম ঘটাচ্ছিস ঘটাচ্ছে ঘটাচ্ছেন ঘ্যাচড়া ঘ্যাঁচড়া ঘ্যাঁট ঘ্যাঁটঘাঁট ঘটাটোপ ঘটাত ঘটাতাম ঘটাতিস ঘটাতে ঘটাতেন ঘটাতেম ঘটাতুম ঘটান ঘুঁটান ঘ্যানঘেনে ঘ্যানঘ্যান ঘ্যানঘ্যানানি ঘটানো ঘুঁটানো ঘ্যানর ঘ্যানরঘ্যানর ঘ্যানরপ্যানর ঘটাব ঘটাবার ঘটাবি ঘটাবে ঘটাবেন ঘটাবো ঘ্যাম ঘ্যামা ঘটাল ঘটালাম ঘটালি ঘটালে ঘটালেন ঘটালেম ঘটালুম ঘটাস ঘ্যাঁস ঘটি ঘুটি ঘুঁটি ঘুটিং ঘটিও ঘুঁটিও ঘটিকা ঘটিকাযন্ত্র ঘটিকামণ্ডলী ঘুটিচালা ঘুঁটিচালা ঘটিচোর ঘটিযন্ত্র ঘটিত ঘুঁটিত ঘটিতা ঘটিতাম ঘুঁটিতাম ঘটিতি ঘটিতিস ঘুঁটিতিস ঘটিতে ঘুঁটিতে ঘটিতেছ ঘুঁটিতেছ ঘটিতেছি ঘুঁটিতেছি ঘটিতেছিল ঘুঁটিতেছিল ঘটিতেছিলাম ঘুঁটিতেছিলাম ঘটিতেছিলি ঘুঁটিতেছিলি ঘটিতেছিলে ঘুঁটিতেছিলে ঘটিতেছিলেন ঘুঁটিতেছিলেন ঘটিতেছিস ঘুঁটিতেছিস ঘটিতেছে ঘুঁটিতেছে ঘটিতেছেন ঘুঁটিতেছেন ঘটিতেন ঘুঁটিতেন ঘটিতব্য ঘটিব ঘুঁটিব ঘটিবাটি ঘটিবার ঘুঁটিবার ঘটিবি ঘুঁটিবি ঘটিবে ঘুঁটিবে ঘটিবেন ঘুঁটিবেন ঘটিরাম ঘটিল ঘুঁটিল ঘটিলাম ঘুঁটিলাম ঘটিলি ঘুঁটিলি ঘটিলে ঘুঁটিলে ঘটিলেন ঘুঁটিলেন ঘটিস ঘুঁটিস ঘটিয়া ঘুটিয়া ঘুঁটিয়া ঘটিয়াছ ঘুঁটিয়াছ ঘটিয়াছি ঘুঁটিয়াছি ঘটিয়াছিল ঘুঁটিয়াছিল ঘটিয়াছিলাম ঘুঁটিয়াছিলাম ঘটিয়াছিলি ঘুঁটিয়াছিলি ঘটিয়াছিলে ঘুঁটিয়াছিলে ঘটিয়াছিলেন ঘুঁটিয়াছিলেন ঘটিয়াছিস ঘুঁটিয়াছিস ঘটিয়াছে ঘুঁটিয়াছে ঘটিয়াছেন ঘুঁটিয়াছেন ঘটিয়ে ঘটিয়েছ ঘটিয়েছি ঘটিয়েছিল ঘটিয়েছিলাম ঘটিয়েছিলি ঘটিয়েছিলে ঘটিয়েছিলেন ঘটিয়েছিলেম ঘটিয়েছিলুম ঘটিয়েছিস ঘটিয়েছে ঘটিয়েছেন ঘটিয়ো ঘুঁটিয়ো ঘটী ঘটীচোর ঘটীযন্ত্র ঘটে ঘুটে ঘুঁটে ঘটেওঠা ঘুঁটেকুড়ানি ঘুঁটেকুড়ুনি ঘটেছ ঘুঁটেছ ঘটেছি ঘুঁটেছি ঘটেছিল ঘুঁটেছিল ঘটেছিলাম ঘুঁটেছিলাম ঘটেছিলি ঘুঁটেছিলি ঘটেছিলে ঘুঁটেছিলে ঘটেছিলেন ঘুঁটেছিলেন ঘটেছিলেম ঘুঁটেছিলেম ঘটেছিলো ঘটেছিলুম ঘুঁটেছিলুম ঘটেছিস ঘুঁটেছিস ঘটেছে ঘুঁটেছে ঘটেছেন ঘুঁটেছেন ঘটেন ঘুঁটেন ঘটেনা ঘটেনি ঘটেনো ঘটেবুদ্ধি ঘটো ঘুঁটো ঘটোধ্নী ঘটছ ঘুঁটছ ঘটছি ঘুঁটছি ঘটছিল ঘুঁটছিল ঘটছিলাম ঘুঁটছিলাম ঘটছিলি ঘুঁটছিলি ঘটছিলে ঘুঁটছিলে ঘটছিলেন ঘুঁটছিলেন ঘটছিলেম ঘুঁটছিলেম ঘটছিলো ঘটছিলুম ঘুঁটছিলুম ঘটছিস ঘুঁটছিস ঘটছে ঘুঁটছে ঘটছেন ঘুঁটছেন ঘট্ট ঘট্টিত ঘট্টিতা ঘট্টজীবি ঘট্টন ঘট্টনী ঘট্টপাল ঘটত ঘুঁটত ঘটতাম ঘুঁটতাম ঘটতি ঘটতিস ঘুঁটতিস ঘটতে ঘুঁটতে ঘটতেন ঘুঁটতেন ঘটতেম ঘুঁটতেম ঘটতো ঘটতুম ঘুঁটতুম ঘটদাসী ঘটন ঘটুন ঘুঁটুন ঘটনা ঘটনাকাল ঘটনাক্রমে ঘটনাগতিক ঘটনাচক্র ঘটনাদি ঘটনাধারী ঘটনাধীন ঘটনাপঞ্জি ঘটনাপঞ্জী ঘটনাপূর্ণ ঘটনাপ্রবাহ ঘটনাপরম্পরা ঘটনাবলি ঘটনাবলী ঘটনাবহ ঘটনাবহুল ঘটনাভিত্তিক ঘটনাসংখ্যা ঘটনাসংস্থান ঘটনাসঙ্গত ঘটনাসূত্রে ঘটনাস্থল ঘটনাস্রোত ঘুটনি ঘুটুনি ঘুঁটনি ঘটনীয় ঘটপট ঘটব ঘুঁটব ঘটবার ঘটবি ঘুঁটবি ঘটবে ঘুঁটবে ঘটবেন ঘুঁটবেন ঘটবো ঘুঁটবো ঘটমান ঘটমানতা ঘটরঘটর ঘটরমটর ঘটল ঘুঁটল ঘটলাম ঘুঁটলাম ঘটলি ঘুঁটলি ঘটলে ঘুঁটলে ঘটলেন ঘুঁটলেন ঘটলেম ঘুঁটলেম ঘটলো ঘটলুম ঘুঁটলুম ঘটয়িতব্য ঘুড্ডি ঘুণ ঘুণকৃত ঘৃণা ঘৃণাকারী ঘৃণাকর ঘুণাক্ষর ঘৃণাজনক ঘৃণাযুক্ত ঘৃণাপ্রাপ্ত ঘৃণাপূর্ণ ঘৃণাবশত ঘৃণাভাজন ঘৃণারপাত্র ঘৃণার্হ ঘৃণাসূচক ঘৃণাস্পদ ঘুণিত ঘৃণিত ঘৃণিনী ঘৃণী ঘণ্ট ঘৃণ্য ঘণ্টা ঘণ্টাকর্ণ ঘণ্টাঘর ঘণ্টাযুক্ত ঘণ্টাধ্বনি ঘণ্টাপথ ঘণ্টি ঘুণ্টি ঘণ্টিকা ঘুণ্টিঘর ঘুণ্টিদার ঘণ্টী ঘণ্টেশ্বর ঘৃণ্যতা ঘণ্টপাকানো ঘুণধরা ঘুণপোকা ঘুণপরিমাণ ঘৃত ঘুৎকার ঘূৎকার ঘৃতকুণ্ড ঘৃতকুমারী ঘৃতাক্ত ঘৃতাচী ঘৃতান্ন ঘৃতার্চি ঘৃতাহুতি ঘৃতযুক্ত ঘৃতনিক্ষেপ ঘৃতপক্ব ঘৃতমিশ্রিত ঘন ঘনআকৃতি ঘনক ঘনকাপড় ঘনকাল ঘনকেন্দ্রিক ঘনকফ ঘনকরা ঘনক্ষেত্র ঘনকৃষ্ণ ঘনগর্জন ঘনঘোর ঘনঘোরা ঘনঘটা ঘনঘন ঘনা ঘনাইও ঘনাইত ঘনাইতাম ঘনাইতিস ঘনাইতে ঘনাইতেছ ঘনাইতেছি ঘনাইতেছিল ঘনাইতেছিলাম ঘনাইতেছিলি ঘনাইতেছিলে ঘনাইতেছিলেন ঘনাইতেছিস ঘনাইতেছে ঘনাইতেছেন ঘনাইতেন ঘনাইব ঘনাইবার ঘনাইবি ঘনাইবে ঘনাইবেন ঘনাইল ঘনাইলাম ঘনাইলি ঘনাইলে ঘনাইলেন ঘনাইয়া ঘনাইয়াছ ঘনাইয়াছি ঘনাইয়াছিল ঘনাইয়াছিলাম ঘনাইয়াছিলি ঘনাইয়াছিলে ঘনাইয়াছিলেন ঘনাইয়াছিস ঘনাইয়াছে ঘনাইয়াছেন ঘনাইয়ো ঘনাক ঘনাকার ঘনাগম ঘনাঙ্ক ঘনাচ্ছ ঘনাচ্ছি ঘনাচ্ছিল ঘনাচ্ছিলাম ঘনাচ্ছিলি ঘনাচ্ছিলে ঘনাচ্ছিলেন ঘনাচ্ছিলেম ঘনাচ্ছিলুম ঘনাচ্ছিস ঘনাচ্ছে ঘনাচ্ছেন ঘনাত ঘনাতাম ঘনাতিস ঘনাতে ঘনাতেন ঘনাতেম ঘনাত্যয় ঘনাতুম ঘনান ঘনানো ঘনান্ত ঘনান্ধকার ঘনাব ঘনাবার ঘনাবি ঘনাবে ঘনাবেন ঘনাবো ঘনাবৃত ঘনাল ঘনালাম ঘনালি ঘনালে ঘনালেন ঘনালেম ঘনালুম ঘনাস ঘনায় ঘনায়মান ঘনি ঘুনি ঘনিমা ঘনিষ্ঠ ঘনিষ্ঠা ঘনিষ্ঠজন ঘনিষ্ঠতা ঘনিষ্ঠভাবে ঘনিয়ে ঘনিয়েছ ঘনিয়েছি ঘনিয়েছিল ঘনিয়েছিলাম ঘনিয়েছিলি ঘনিয়েছিলে ঘনিয়েছিলেন ঘনিয়েছিলেম ঘনিয়েছিলুম ঘনিয়েছিস ঘনিয়েছে ঘনিয়েছেন ঘনিয়ো ঘুনী ঘনীকৃত ঘনীকরণ ঘনীভূত ঘনীভবন ঘনোপল ঘনযন্ত্র ঘনডেসিমিটার ঘনতা ঘনত্ব ঘনত্বসম্পন্ন ঘনতর ঘনদুধ ঘননীল ঘনপল্লব ঘনফুট ঘনফল ঘনবিন্যাস ঘনবিন্যস্ত ঘনবীথি ঘনবন ঘনবুনুনি ঘনবর্ত্ম ঘনবরষা ঘনবস্তু ঘনবসতি ঘনবসতিপূর্ণ ঘনমাত্রা ঘনমান ঘনমালা ঘনমিটার ঘনমূল ঘনরাম ঘনশ্যাম ঘনশ্যামবর্ণ ঘনসংযোগ ঘুনসি ঘুন্সি ঘনসিক্ত ঘনসেন্টিমিটার ঘনসন্নিবিষ্ট ঘনসন্নিবেশ ঘনসন্নিবেশিত ঘনসন্নিবদ্ধ ঘুপচি ঘুপটি ঘুপসি ঘুম ঘুমক ঘুমকাতুরে ঘুমঘোর ঘুমঘুম ঘুমঘড়ি ঘুমা ঘুমাইও ঘুমাইছ ঘুমাইত ঘুমাইতাম ঘুমাইতিস ঘুমাইতে ঘুমাইতেছ ঘুমাইতেছি ঘুমাইতেছিল ঘুমাইতেছিলাম ঘুমাইতেছিলি ঘুমাইতেছিলে ঘুমাইতেছিলেন ঘুমাইতেছিস ঘুমাইতেছে ঘুমাইতেছেন ঘুমাইতেন ঘুমাইনু ঘুমাইব ঘুমাইবার ঘুমাইবি ঘুমাইবে ঘুমাইবেন ঘুমাইল ঘুমাইলাম ঘুমাইলি ঘুমাইলে ঘুমাইলেন ঘুমাইয়া ঘুমাইয়াছ ঘুমাইয়াছি ঘুমাইয়াছিল ঘুমাইয়াছিলাম ঘুমাইয়াছিলি ঘুমাইয়াছিলে ঘুমাইয়াছিলেন ঘুমাইয়াছিস ঘুমাইয়াছে ঘুমাইয়াছেন ঘুমাইয়ো ঘুমাক ঘুমাচ্ছিনা ঘুমাচ্ছে ঘুমাতে ঘুমাতেন ঘুমান ঘুমানে ঘুমানো ঘুমাবার ঘুমাবি ঘুমাস ঘুমি ঘুমিয়ে ঘুমিয়েছ ঘুমিয়েছি ঘুমিয়েছিল ঘুমিয়েছিলাম ঘুমিয়েছিলি ঘুমিয়েছিলে ঘুমিয়েছিলেন ঘুমিয়েছিলেম ঘুমিয়েছিলুম ঘুমিয়েছিস ঘুমিয়েছে ঘুমিয়েছেন ঘুমিয়েছো ঘুমিয়ো ঘুমচ্ছ ঘুমচ্ছি ঘুমচ্ছিল ঘুমচ্ছিলাম ঘুমচ্ছিলি ঘুমচ্ছিলে ঘুমচ্ছিলেন ঘুমচ্ছিলেম ঘুমচ্ছিলুম ঘুমচ্ছিস ঘুমচ্ছে ঘুমচ্ছেন ঘুমো ঘুমোচ্ছে ঘুমোতে ঘুমোবার ঘুমছোটা ঘুমছুটা ঘুমত ঘুমতাম ঘুমুতি ঘুমতিস ঘুমতে ঘুমতেন ঘুমতেম ঘুমতুম ঘুমন ঘুমনিয়া ঘুমুনে ঘুমনো ঘুমন্ত ঘুমপাড়ানি ঘুমপাড়ানিয়া ঘুমপাড়ানো ঘুমব ঘুমবার ঘুমবি ঘুমবে ঘুমবেন ঘুমবো ঘুমভাঙানি ঘুমল ঘুমলাম ঘুমলি ঘুমলী ঘুমলে ঘুমলেন ঘুমলেম ঘুমলুম ঘুমস ঘুমহীন ঘুমহীনতা ঘুময় ঘর ঘুর ঘরওয়ানা ঘুরক ঘুরুক ঘরকাটা ঘরকোপ ঘরকুনো ঘরকন্না ঘরকরা ঘরকরণ ঘরকরনা ঘরখানা ঘরখোঁজা ঘরখরচ ঘরগুষ্টি ঘরগুষ্ঠি ঘরগড়া ঘরঘেঁষা ঘরঘ্যাসা ঘুরঘুট্টি ঘরঘর ঘর্ঘর ঘুরঘুর ঘুর্ঘুর ঘর্ঘরা ঘর্ঘরিত ঘুরঘুরিয়া ঘর্ঘরী ঘুর্ঘুরপোকা ঘুরা ঘুরাইও ঘুরাইত ঘুরাইতাম ঘুরাইতিস ঘুরাইতে ঘুরাইতেছ ঘুরাইতেছি ঘুরাইতেছিল ঘুরাইতেছিলাম ঘুরাইতেছিলি ঘুরাইতেছিলে ঘুরাইতেছিলেন ঘুরাইতেছিস ঘুরাইতেছে ঘুরাইতেছেন ঘুরাইতেন ঘুরাইব ঘুরাইবার ঘুরাইবি ঘুরাইবে ঘুরাইবেন ঘুরাইল ঘুরাইলাম ঘুরাইলি ঘুরাইলে ঘুরাইলেন ঘুরাইয়া ঘুরাইয়াছ ঘুরাইয়াছি ঘুরাইয়াছিল ঘুরাইয়াছিলাম ঘুরাইয়াছিলি ঘুরাইয়াছিলে ঘুরাইয়াছিলেন ঘুরাইয়াছিস ঘুরাইয়াছে ঘুরাইয়াছেন ঘুরাইয়ো ঘরাও ঘুরাক ঘরাঘরি ঘুরাঘুরি ঘ্রাণ ঘ্রাণক্ষমতা ঘ্রাণগ্রহণ ঘ্রাণগ্রহণকারী ঘ্রাণে ঘ্রাণেন্দ্রিয় ঘ্রাণজ ঘ্রাণতর্পণ ঘ্রাণশক্তি ঘ্রাত ঘ্রাতা ঘ্রাতব্য ঘুরান ঘরানা ঘরানাব্যাপার ঘুরানি ঘুরানো ঘুরাবার ঘরামি ঘরামিগিরি ঘরামী ঘরামীগিরি ঘুরালে ঘুরাস ঘুরায় ঘুরি ঘুরিত ঘুরিতাম ঘুরিতিস ঘুরিতে ঘুরিতেছ ঘুরিতেছি ঘুরিতেছিল ঘুরিতেছিলাম ঘুরিতেছিলি ঘুরিতেছিলে ঘুরিতেছিলেন ঘুরিতেছিস ঘুরিতেছে ঘুরিতেছেন ঘুরিতেন ঘুরিব ঘুরিবার ঘুরিবি ঘুরিবে ঘুরিবেন ঘুরিল ঘুরিলাম ঘুরিলি ঘুরিলে ঘুরিলেন ঘুরিস ঘুরিয়া ঘুরিয়াছ ঘুরিয়াছি ঘুরিয়াছিল ঘুরিয়াছিলাম ঘুরিয়াছিলি ঘুরিয়াছিলে ঘুরিয়াছিলেন ঘুরিয়াছিস ঘুরিয়াছে ঘুরিয়াছেন ঘুরিয়ে ঘুরিয়েছ ঘুরিয়েছি ঘুরিয়েছিল ঘুরিয়েছিলাম ঘুরিয়েছিলি ঘুরিয়েছিলে ঘুরিয়েছিলেন ঘুরিয়েছিলেম ঘুরিয়েছিলুম ঘুরিয়েছিস ঘুরিয়েছে ঘুরিয়েছেন ঘুরিয়ো ঘুরচ্ছ ঘুরচ্ছি ঘুরচ্ছিল ঘুরচ্ছিলাম ঘুরচ্ছিলি ঘুরচ্ছিলে ঘুরচ্ছিলেন ঘুরচ্ছিলেম ঘুরচ্ছিলুম ঘুরচ্ছিস ঘুরচ্ছে ঘুরচ্ছেন ঘুরে ঘরেআগুন ঘুরেছ ঘুরেছি ঘুরেছিল ঘুরেছিলাম ঘুরেছিলি ঘুরেছিলে ঘুরেছিলেন ঘুরেছিলেম ঘুরেছিলুম ঘুরেছিস ঘুরেছে ঘুরেছেন ঘুরেন ঘরেপরে ঘুরেফিরে ঘরেবাইরে ঘরেবানানো ঘরেবাহিরে ঘুরেবেড়ানো ঘরেরকথা ঘরেরলক্ষ্মী ঘরেলক্ষ্মী ঘ্রেয় ঘুরো ঘরোদা ঘরোয়া ঘরোয়াঅনুষ্ঠান ঘরোয়াআসর ঘরোয়ানা ঘরোয়াপরিবেশ ঘরোয়াব্যাপার ঘরোয়ালীগ ঘরোয়ালোক ঘুরছ ঘরছাড়া ঘরছাড়ানো ঘুরছি ঘুরছিল ঘুরছিলাম ঘুরছিলি ঘুরছিলে ঘুরছিলেন ঘুরছিলেম ঘুরছিলুম ঘুরছিস ঘুরছে ঘুরছেন ঘরজাত ঘরজামাই ঘরজোড়া ঘরজ্বালানি ঘরজ্বালানী ঘরজ্বালানে ঘরজ্বালানো ঘরজুড়ে ঘরট্ট ঘূর্ণ ঘূর্ণা ঘূর্ণাবাত ঘূর্ণাবর্ত ঘূর্ণায়মান ঘূর্ণি ঘূর্ণিজল ঘূর্ণিঝড় ঘূর্ণিত ঘূর্ণিতনেত্র ঘূর্ণিতনয়ন ঘূর্ণিপাক ঘূর্ণিবাত ঘূর্ণিবাতাস ঘূর্ণিবায়ু ঘূর্ণিবায়ুযুক্ত ঘূর্ণিবৃষ্টি ঘূর্ণিমালা ঘূর্ণিময় ঘরণী ঘূর্ণ্যমান ঘূর্ণন ঘূর্ণনকাল ঘূর্ণনক্ষম ঘূর্ণনযন্ত্র ঘূর্ণনরত ঘূর্ণনশীল ঘূর্ণবায়ু ঘূর্ণমান ঘুরত ঘুরতাম ঘুরতি ঘুরতিস ঘুরতে ঘুরতেন ঘুরতেম ঘরতোলা ঘুরতুম ঘরদোর ঘরদ্বার ঘরদুয়ার ঘুরন ঘুরুন ঘরনা ঘরনি ঘুরনি ঘুরুনি ঘুরনো ঘুরন্ত ঘরন্তী ঘরনষ্ট ঘুরপাক ঘুরপাকা ঘরপোষা ঘরপোড়া ঘুরপ্যাঁচ ঘুরপথ ঘরপর ঘুরব ঘরবাঁধা ঘরবার ঘুরবার ঘরবাড়ি ঘরবাড়ী ঘুরবি ঘুরবে ঘুরবেন ঘুরবো ঘরব্যাভারি ঘরবর ঘরবসানো ঘরভাঙ্গানি ঘরভাঙ্গানে ঘরভাঙা ঘরভাঙানি ঘরভাঙানে ঘরভাঙানো ঘরভেদী ঘরভরা ঘর্ম ঘর্মকর ঘরমুখো ঘর্মগ্রন্থি ঘর্মাক্ত ঘর্মাক্তকলেবর ঘর্মান্ত ঘর্মাপ্লুত ঘর্মার্ত ঘর্মিত ঘর্মচর্চিকা ঘর্ম্য ঘুরল ঘুরলাম ঘুরলি ঘুরুলী ঘুরুলে ঘুরলেন ঘুরলেম ঘুরলো ঘুরলুম ঘরশত্রু ঘর্ষ ঘর্ষক ঘর্ষকপদী ঘর্ষিত ঘর্ষিতা ঘর্ষণ ঘর্ষণজাত ঘর্ষণজনিত ঘর্ষণযুক্ত ঘর্ষণহীন ঘুরস ঘরসংসার ঘরসন্ধানী ঘরহারা ঘরহি ঘরহীন ঘুরয় ঘুল ঘুলক ঘুলঘুলি ঘুলা ঘুলাইও ঘুলাইত ঘুলাইতাম ঘুলাইতিস ঘুলাইতে ঘুলাইতেছ ঘুলাইতেছি ঘুলাইতেছিল ঘুলাইতেছিলাম ঘুলাইতেছিলি ঘুলাইতেছিলে ঘুলাইতেছিলেন ঘুলাইতেছিস ঘুলাইতেছে ঘুলাইতেছেন ঘুলাইতেন ঘুলাইব ঘুলাইবার ঘুলাইবি ঘুলাইবে ঘুলাইবেন ঘুলাইল ঘুলাইলাম ঘুলাইলি ঘুলাইলে ঘুলাইলেন ঘুলাইয়া ঘুলাইয়াছ ঘুলাইয়াছি ঘুলাইয়াছিল ঘুলাইয়াছিলাম ঘুলাইয়াছিলি ঘুলাইয়াছিলে ঘুলাইয়াছিলেন ঘুলাইয়াছিস ঘুলাইয়াছে ঘুলাইয়াছেন ঘুলাইয়ো ঘুলাক ঘুলান ঘুলানো ঘুলাস ঘুলি ঘুলিয়ে ঘুলিয়েছ ঘুলিয়েছি ঘুলিয়েছিল ঘুলিয়েছিলাম ঘুলিয়েছিলি ঘুলিয়েছিলে ঘুলিয়েছিলেন ঘুলিয়েছিলেম ঘুলিয়েছিলুম ঘুলিয়েছিস ঘুলিয়েছে ঘুলিয়েছেন ঘুলিয়ো ঘুলচ্ছ ঘুলচ্ছি ঘুলচ্ছিল ঘুলচ্ছিলাম ঘুলচ্ছিলি ঘুলচ্ছিলে ঘুলচ্ছিলেন ঘুলচ্ছিলেম ঘুলচ্ছিলুম ঘুলচ্ছিস ঘুলচ্ছে ঘুলচ্ছেন ঘুলত ঘুলতাম ঘুলতিস ঘুলতে ঘুলতেন ঘুলতেম ঘুলতুম ঘুলন ঘুলনো ঘুলব ঘুলবার ঘুলবি ঘুলবে ঘুলবেন ঘুলবো ঘুলল ঘুললাম ঘুললি ঘুললে ঘুললেন ঘুললেম ঘুললুম ঘুলস ঘষ ঘুষ ঘষুক ঘুষখোর ঘুষঘুষে ঘুষঘুষেজ্বর ঘষা ঘুষা ঘষাঘষা ঘষাঘষি ঘুষাঘুষি ঘুষাচিংড়ি ঘুষাচিংড়ী ঘুষাচিঙ্গট ঘষান ঘুষান ঘষানো ঘুষানো ঘষাপয়সা ঘষাভাবযুক্ত ঘষামাজা ঘষি ঘুষি ঘষিত ঘষিতাম ঘষিতিস ঘষিতে ঘষিতেছ ঘষিতেছি ঘষিতেছিল ঘষিতেছিলাম ঘষিতেছিলি ঘষিতেছিলে ঘষিতেছিলেন ঘষিতেছিস ঘষিতেছে ঘষিতেছেন ঘষিতেন ঘষিব ঘষিবার ঘষিবি ঘষিবে ঘষিবেন ঘষিল ঘষিলাম ঘষিলি ঘষিলে ঘষিলেন ঘষিস ঘষিয়া ঘষিয়াছ ঘষিয়াছি ঘষিয়াছিল ঘষিয়াছিলাম ঘষিয়াছিলি ঘষিয়াছিলে ঘষিয়াছিলেন ঘষিয়াছিস ঘষিয়াছে ঘষিয়াছেন ঘুষিয়ে ঘষিয়ো ঘষে ঘষেছ ঘষেছি ঘষেছিল ঘষেছিলাম ঘষেছিলি ঘষেছিলে ঘষেছিলেন ঘষেছিলেম ঘষেছিলুম ঘষেছিস ঘষেছে ঘষেছেন ঘষেন ঘষেমেজে ঘষো ঘুষো ঘুষোঘুষি ঘষছ ঘষছি ঘষছিল ঘষছিলাম ঘষছিলি ঘষছিলে ঘষছিলেন ঘষছিলেম ঘষছিলুম ঘষছিস ঘষছে ঘষছেন ঘৃষ্ট ঘষটা ঘৃষ্টা ঘষটাই ঘষটাইও ঘষটাইত ঘষটাইতাম ঘষটাইতিস ঘষটাইতে ঘষটাইতেছ ঘষটাইতেছি ঘষটাইতেছিল ঘষটাইতেছিলাম ঘষটাইতেছিলি ঘষটাইতেছিলে ঘষটাইতেছিলেন ঘষটাইতেছিস ঘষটাইতেছে ঘষটাইতেছেন ঘষটাইতেন ঘষটাইব ঘষটাইবার ঘষটাইবি ঘষটাইবে ঘষটাইবেন ঘষটাইল ঘষটাইলাম ঘষটাইলি ঘষটাইলে ঘষটাইলেন ঘষটাইয়া ঘষটাইয়াছ ঘষটাইয়াছি ঘষটাইয়াছিল ঘষটাইয়াছিলাম ঘষটাইয়াছিলি ঘষটাইয়াছিলে ঘষটাইয়াছিলেন ঘষটাইয়াছিস ঘষটাইয়াছে ঘষটাইয়াছেন ঘষটাইয়ো ঘষটাক ঘষটাচ্ছ ঘষটাচ্ছি ঘষটাচ্ছিল ঘষটাচ্ছিলাম ঘষটাচ্ছিলি ঘষটাচ্ছিলে ঘষটাচ্ছিলেন ঘষটাচ্ছিলেম ঘষটাচ্ছিলুম ঘষটাচ্ছিস ঘষটাচ্ছে ঘষটাচ্ছেন ঘষটাত ঘষটাতাম ঘষটাতিস ঘষটাতে ঘষটাতেন ঘষটাতেম ঘষটাতুম ঘষটান ঘষটানি ঘষ্টানি ঘষটানো ঘষ্টানো ঘষটাব ঘষটাবার ঘষটাবি ঘষটাবে ঘষটাবেন ঘষটাবো ঘষটাল ঘষটালাম ঘষটালি ঘষটালে ঘষটালেন ঘষটালেম ঘষটালুম ঘষটাস ঘষটায় ঘষটে ঘষটেছ ঘষটেছি ঘষটেছিল ঘষটেছিলাম ঘষটেছিলি ঘষটেছিলে ঘষটেছিলেন ঘষটেছিলেম ঘষটেছিলুম ঘষটেছিস ঘষটেছে ঘষটেছেন ঘষটো ঘৃষ্টতা ঘৃষ্টধ্বনি ঘৃষ্টভাবে ঘষত ঘষতাম ঘষতিস ঘষতে ঘষতেন ঘষতেম ঘষতুম ঘষুন ঘষব ঘষবার ঘষবি ঘষবে ঘষবেন ঘষবো ঘুষরূপে ঘষল ঘষলাম ঘষলি ঘষলে ঘষলেন ঘষলেম ঘষলুম ঘষড়া ঘষড়াইত ঘষড়াইতাম ঘষড়াইতিস ঘষড়াইতে ঘষড়াইতেছ ঘষড়াইতেছি ঘষড়াইতেছিল ঘষড়াইতেছিলাম ঘষড়াইতেছিলি ঘষড়াইতেছিলে ঘষড়াইতেছিলেন ঘষড়াইতেছিস ঘষড়াইতেছে ঘষড়াইতেছেন ঘষড়াইতেন ঘষড়াইব ঘষড়াইবার ঘষড়াইবি ঘষড়াইবে ঘষড়াইবেন ঘষড়াইল ঘষড়াইলাম ঘষড়াইলি ঘষড়াইলে ঘষড়াইলেন ঘষড়াইয়া ঘষড়াইয়াছ ঘষড়াইয়াছি ঘষড়াইয়াছিল ঘষড়াইয়াছিলাম ঘষড়াইয়াছিলি ঘষড়াইয়াছিলে ঘষড়াইয়াছিলেন ঘষড়াইয়াছিস ঘষড়াইয়াছে ঘষড়াইয়াছেন ঘষড়াইয়ো ঘষড়াক ঘষড়াচ্ছ ঘষড়াচ্ছি ঘষড়াচ্ছিল ঘষড়াচ্ছিলাম ঘষড়াচ্ছিলি ঘষড়াচ্ছিলে ঘষড়াচ্ছিলেন ঘষড়াচ্ছিলেম ঘষড়াচ্ছিলুম ঘষড়াচ্ছিস ঘষড়াচ্ছে ঘষড়াচ্ছেন ঘষড়াত ঘষড়াতাম ঘষড়াতিস ঘষড়াতে ঘষড়াতেন ঘষড়াতেম ঘষড়াতুম ঘষড়ান ঘষড়ানি ঘষড়ানো ঘষড়াব ঘষড়াবার ঘষড়াবি ঘষড়াবে ঘষড়াবেন ঘষড়াবো ঘষড়াল ঘষড়ালাম ঘষড়ালি ঘষড়ালে ঘষড়ালেন ঘষড়ালেম ঘষড়ালুম ঘষড়াস ঘষড়ায় ঘষড়ে ঘষড়েছ ঘষড়েছি ঘষড়েছিল ঘষড়েছিলাম ঘষড়েছিলি ঘষড়েছিলে ঘষড়েছিলেন ঘষড়েছিলেম ঘষড়েছিলুম ঘষড়েছিস ঘষড়েছে ঘষড়েছেন ঘষড়ো ঘস ঘুস ঘুসখোর ঘুসগ্রহণ ঘুসঘুসে ঘসা ঘুসা ঘুসাঘুসি ঘুসাচিংড়ি ঘুসানো ঘসি ঘুসি ঘসিরআগুন ঘসে ঘুসো ঘুসোঘুসি ঘুসোচিংড়ি ঘসটানি ঘসটানো ঘসড়ানি ঘড় ঘড়ঘড় ঘড়া ঘড়াঞ্চি ঘড়াঞ্চে ঘড়ি ঘুড়ি ঘড়িঘর ঘড়িপেটা ঘড়িরচেইন ঘড়িরচেন ঘড়িয়াল ঘড়ী ঘুড়ী ঘড়ীক্রিবিণ ঘড়েল".split(" "),
              w_h: "হ হং হংকং হুংকার হুংকারা হুংকারিত হুংকারপূর্ণ হুংকৃত হংস হংসগামিনী হংসগমন হংসগমনা হংসাণ্ড হংসাদি হংসারূঢ় হংসারূঢ়া হংসী হংসোদক হংসদেব হংসদূত হংসধ্বনি হংসনাদ হংসনাদিনী হংসপাঁতি হংসবাহিনী হংসবাহন হংসবাহনা হংসমালা হংসমিথুন হংসরথ হআ হই হইএ হইও হইচই হইচইপূর্ণ হইছি হইছিল হইছে হুইজ হইত হইতাছে হইতাম হইতিস হইতে হইতেছ হইতেছি হইতেছিল হইতেছিলাম হইতেছিলি হইতেছিলে হইতেছিলেন হইতেছিস হইতেছে হইতেছেন হইতেন হইনু হুইপ হইব হইবার হইবি হইবে হইবেন হইল হুইল হইলাম হুইলার হইলি হুইলচেয়ার হইলে হুইলে হইলেন হইলো হইস হুইস্কি হুইস্কিসোডা হুইসিল হুইসল হইহই হইয়া হইয়াছ হইয়াছি হইয়াছিল হইয়াছিলাম হইয়াছিলি হইয়াছিলে হইয়াছিলেন হইয়াছিস হইয়াছে হইয়াছেন হইয়ারে হইয়ে হইয়ো হউ হউক হউন হএ হও হওঁ হওন হওনি হওয়া হওয়ামাত্র হওয়র হক হকু হুক হক্কানি হুক্কাহুয়া হককথা হুঁকা হুঁকাবরদার হকার হুঁকারি হকারমার্কেট হকি হকিকত হকিকতনামা হকিমি হকিমী হকির হকিস্টিক হকিয়ৎ হকচকা হকচকান হকচকানো হকীম হুঁকো হুঁকোবরদার হকদার হকনাহক হুকুম হুকুমজারি হুকমত হুকমৎ হুকুমত হুকুমতামিল হুকুমদখল হুকুমদান হুকুমনামা হুকুমপ্রচার হুকুমবরদার হুকুমবর্দার হুকুমবরদারি হুকুমরদ হুকরে হুঁকরে হকহকুক হুগো হুগলী হঙ হুঙ্কার হুঙ্কারা হুঙ্কারিত হুঙ্কৃত হুঙ্কৃতি হা হাঁ হাং হাংগেরি হাংগেরীয় হাই হাইআমলা হাইওয়ে হাইকিং হাইকোর্ট হাইকমান্ড হাইকমিশনার হাইগ্রমিটার হাইজাক হাইজেনবার্গ হাইজ্যাক হাইটেম্পারেচর হাইডেলবার্গ হাইডোজ হাইড্রা হাইড্রোকর্টিসোন হাইড্রোক্লোরাইড হাইড্রোক্লোরিক হাইড্রোজেন হাইড্রোফোবিক হাইড্রোসিল হাইড্রোস্টাটিক হাইতি হাইতীয় হাইতোলা হাইপার হাইপারটেক্সট হাইপারপ্লাসিয়া হাইপারস্পেস হাইপোথ্যালামাস হাইফেন হাইবেঞ্চ হাইব্রিড হাইল হাইলাইট হাইলাইটস হাইল্যান্ড হাইস্কুল হাইস্পিড হাউ হাঁউ হাউই হাউকাউ হাউজ হাউজওয়াইফ হাউজিং হাউমাউ হাঁউমাঁউ হাউমাউখাউ হাঁউমাঁউখাঁউ হাউর হাউলি হাউস হাউসেকওসর হাউসসার্জন হাউড় হাউড়ি হাউড়ী হাওজ হাওদা হাওর হাওলা হাওলাজমি হাওলাত হাওলাতি হাওলাতবরাত হাওলাদার হাওলে হাওড় হাওড়া হাওয়া হাওয়াই হাওয়াইশার্ট হাওয়াইয়ান হাওয়াগাড়ি হাওয়াচলা হাওয়াছোটা হাওয়াছুটা হাওয়াবদল হাওয়ার্ডস হাওয়ালা হাওয়াস হাঁক হাঁকুক হাক্কানি হাঁকা হাঁকাই হাঁকাইও হাঁকাইত হাঁকাইতাম হাঁকাইতিস হাঁকাইতে হাঁকাইতেছ হাঁকাইতেছি হাঁকাইতেছিল হাঁকাইতেছিলাম হাঁকাইতেছিলি হাঁকাইতেছিলে হাঁকাইতেছিলেন হাঁকাইতেছিস হাঁকাইতেছে হাঁকাইতেছেন হাঁকাইতেন হাঁকাইব হাঁকাইবার হাঁকাইবি হাঁকাইবে হাঁকাইবেন হাঁকাইল হাঁকাইলাম হাঁকাইলি হাঁকাইলে হাঁকাইলেন হাঁকাইয়া হাঁকাইয়াছ হাঁকাইয়াছি হাঁকাইয়াছিল হাঁকাইয়াছিলাম হাঁকাইয়াছিলি হাঁকাইয়াছিলে হাঁকাইয়াছিলেন হাঁকাইয়াছিস হাঁকাইয়াছে হাঁকাইয়াছেন হাঁকাইয়ো হাঁকাক হাঁকাচ্ছ হাঁকাচ্ছি হাঁকাচ্ছিল হাঁকাচ্ছিলাম হাঁকাচ্ছিলি হাঁকাচ্ছিলে হাঁকাচ্ছিলেন হাঁকাচ্ছিলেম হাঁকাচ্ছিলুম হাঁকাচ্ছিস হাঁকাচ্ছে হাঁকাচ্ছেন হাঁকাত হাঁকাতাম হাঁকাতিস হাঁকাতে হাঁকাতেন হাঁকাতেম হাঁকাতুম হাঁকান হাঁকানো হাঁকাব হাঁকাবার হাঁকাবি হাঁকাবে হাঁকাবেন হাঁকাবো হাঁকার হাঁকাল হাকালুকি হাঁকালাম হাঁকালি হাঁকালে হাঁকালেন হাঁকালেম হাঁকালুম হাঁকাস হাঁকাহাঁকি হাঁকায় হাঁকি হাকিক হাঁকিত হাঁকিতাম হাঁকিতিস হাঁকিতে হাঁকিতেছ হাঁকিতেছি হাঁকিতেছিল হাঁকিতেছিলাম হাঁকিতেছিলি হাঁকিতেছিলে হাঁকিতেছিলেন হাঁকিতেছিস হাঁকিতেছে হাঁকিতেছেন হাঁকিতেন হাকিনী হাঁকিব হাঁকিবার হাঁকিবি হাঁকিবে হাঁকিবেন হাকিম হাকিমি হাকিমপুর হাঁকিল হাঁকিলাম হাঁকিলি হাঁকিলে হাঁকিলেন হাঁকিস হাঁকিয়া হাঁকিয়াছ হাঁকিয়াছি হাঁকিয়াছিল হাঁকিয়াছিলাম হাঁকিয়াছিলি হাঁকিয়াছিলে হাঁকিয়াছিলেন হাঁকিয়াছিস হাঁকিয়াছে হাঁকিয়াছেন হাঁকিয়ে হাঁকিয়েছ হাঁকিয়েছি হাঁকিয়েছিল হাঁকিয়েছিলাম হাঁকিয়েছিলি হাঁকিয়েছিলে হাঁকিয়েছিলেন হাঁকিয়েছিলেম হাঁকিয়েছিলুম হাঁকিয়েছিস হাঁকিয়েছে হাঁকিয়েছেন হাঁকিয়ো হাঁকুচপাকুচ হাঁকে হাঁকেন হাঁকছ হাঁকছি হাঁকছিল হাঁকছিলাম হাঁকছিলি হাঁকছিলে হাঁকছিলেন হাঁকছিলেম হাঁকছিলুম হাঁকছিস হাঁকছে হাঁকছেন হাঁকডাক হাঁকত হাঁকতাম হাঁকতিস হাঁকতে হাঁকতেন হাঁকতেম হাঁকতুম হাঁকুন হাঁকুনি হাঁকপাঁক হাঁকুপাঁকু হাকপাল হাঁকপাড়া হাঁকব হাঁকবার হাঁকবি হাঁকবে হাঁকবেন হাঁকবো হাকল হাঁকল হাঁকলাম হাকুলি হাঁকলি হাঁকলে হাঁকলেন হাঁকলেম হাকলবিকল হাঁকলুম হাঁকড়া হাঁকড়ান হাঁকড়ানো হাগা হাগান হাগানো হাগিয়া হাঘর হাঘরে হাঙ হাঙু হাঙ্গাম হাঙ্গামা হাঙ্গেরি হাঙ্গেরীয় হাঙ্গর হাঙর হাচ হাঁচুক হাঁচা হাঁচি হাঁচিত হাঁচিতাম হাঁচিতিস হাঁচিতে হাঁচিতেছ হাঁচিতেছি হাঁচিতেছিল হাঁচিতেছিলাম হাঁচিতেছিলি হাঁচিতেছিলে হাঁচিতেছিলেন হাঁচিতেছিস হাঁচিতেছে হাঁচিতেছেন হাঁচিতেন হাঁচিব হাঁচিবার হাঁচিবি হাঁচিবে হাঁচিবেন হাঁচিল হাঁচিলাম হাঁচিলি হাঁচিলে হাঁচিলেন হাঁচিস হাঁচিয়া হাঁচিয়াছ হাঁচিয়াছি হাঁচিয়াছিল হাঁচিয়াছিলাম হাঁচিয়াছিলি হাঁচিয়াছিলে হাঁচিয়াছিলেন হাঁচিয়াছিস হাঁচিয়াছে হাঁচিয়াছেন হাঁচিয়ো হাঁচে হাঁচেন হাঁচছ হাঁচছি হাঁচছিল হাঁচছিলাম হাঁচছিলি হাঁচছিলে হাঁচছিলেন হাঁচছিলেম হাঁচছিলুম হাঁচছিস হাঁচছে হাঁচছেন হাঁচুটি হাঁচত হাঁচতাম হাঁচতিস হাঁচতে হাঁচতেন হাঁচতেম হাঁচতুম হাঁচুন হাঁচব হাঁচবার হাঁচবি হাঁচবে হাঁচবেন হাঁচবো হাঁচল হাঁচলাম হাঁচলি হাঁচলে হাঁচলেন হাঁচলেম হাঁচলুম হাজুক হাজা হাজাভোঁতা হাজাম হাজামজা হাজামত হাজার হাজারি হাজারী হাজারীবাগ হাজারো হাজাশুখা হাজি হাজিত হাজিতাম হাজিতিস হাজিতে হাজিতেছ হাজিতেছি হাজিতেছিল হাজিতেছিলাম হাজিতেছিলি হাজিতেছিলে হাজিতেছিলেন হাজিতেছিস হাজিতেছে হাজিতেছেন হাজিতেন হাজিপুর হাজিব হাজিবার হাজিবি হাজিবে হাজিবেন হাজির হাজিরা হাজিরার হাজিরি হাজিরজামিন হাজিল হাজিলাম হাজিলি হাজিলে হাজিলেন হাজিস হাজিয়া হাজিয়াছ হাজিয়াছি হাজিয়াছিল হাজিয়াছিলাম হাজিয়াছিলি হাজিয়াছিলে হাজিয়াছিলেন হাজিয়াছিস হাজিয়াছে হাজিয়াছেন হাজিয়ো হাজী হাজীগঞ্জ হাজীপাড়া হাজছ হাজছি হাজছিল হাজছিলাম হাজছিলি হাজছিলে হাজছিলেন হাজছিলেম হাজছিলুম হাজছিস হাজছে হাজছেন হাজ্জাম হাজত হাজৎ হাজতাম হাজতি হাজতিস হাজতে হাজতেন হাজতেম হাজতবাস হাজতুম হাজুন হাজব হাজবার হাজবি হাজবে হাজবেন হাজবো হাজরা হাজরি হাজল হাজলাম হাজলি হাজলে হাজলেন হাজলেম হাজলুম হাঞ্চব্যাক হাট হাঁট হাঁটু হাটক হাঁটুক হাঁটকা হাঁটকাই হাঁটকাইও হাঁটকাইত হাঁটকাইতাম হাঁটকাইতিস হাঁটকাইতে হাঁটকাইতেছ হাঁটকাইতেছি হাঁটকাইতেছিল হাঁটকাইতেছিলাম হাঁটকাইতেছিলি হাঁটকাইতেছিলে হাঁটকাইতেছিলেন হাঁটকাইতেছিস হাঁটকাইতেছে হাঁটকাইতেছেন হাঁটকাইতেন হাঁটকাইব হাঁটকাইবার হাঁটকাইবি হাঁটকাইবে হাঁটকাইবেন হাঁটকাইল হাঁটকাইলাম হাঁটকাইলি হাঁটকাইলে হাঁটকাইলেন হাঁটকাইয়া হাঁটকাইয়াছ হাঁটকাইয়াছি হাঁটকাইয়াছিল হাঁটকাইয়াছিলাম হাঁটকাইয়াছিলি হাঁটকাইয়াছিলে হাঁটকাইয়াছিলেন হাঁটকাইয়াছিস হাঁটকাইয়াছে হাঁটকাইয়াছেন হাঁটকাইয়ো হাঁটকাও হাঁটকাক হাঁটকাচ্ছ হাঁটকাচ্ছি হাঁটকাচ্ছিল হাঁটকাচ্ছিলাম হাঁটকাচ্ছিলি হাঁটকাচ্ছিলে হাঁটকাচ্ছিলেন হাঁটকাচ্ছিলেম হাঁটকাচ্ছিলুম হাঁটকাচ্ছিস হাঁটকাচ্ছে হাঁটকাচ্ছেন হাঁটকাত হাঁটকাতাম হাঁটকাতিস হাঁটকাতে হাঁটকাতেন হাঁটকাতেম হাঁটকাতুম হাঁটকান হাটকানা হাঁটকানো হাঁটকাব হাঁটকাবার হাঁটকাবি হাঁটকাবে হাঁটকাবেন হাঁটকাবো হাঁটকাল হাঁটকালাম হাঁটকালি হাঁটকালে হাঁটকালেন হাঁটকালেম হাঁটকালুম হাঁটকাস হাঁটকে হাঁটকেছ হাঁটকেছি হাঁটকেছিল হাঁটকেছিলাম হাঁটকেছিলি হাঁটকেছিলে হাঁটকেছিলেন হাঁটকেছিলেম হাঁটকেছিলুম হাঁটকেছিস হাঁটকেছে হাঁটকেছেন হাঁটকো হাটকরা হাটখোলা হাঁটা হাঁটাচলা হাঁটাযোগ হাঁটান হাঁটানো হাঁটাপথ হাযার হাযারী হাঁটালে হাঁটাহাঁটি হাঁটি হাঁটিত হাঁটিতাম হাঁটিতিস হাঁটিতে হাঁটিতেছ হাঁটিতেছি হাঁটিতেছিল হাঁটিতেছিলাম হাঁটিতেছিলি হাঁটিতেছিলে হাঁটিতেছিলেন হাঁটিতেছিস হাঁটিতেছে হাঁটিতেছেন হাঁটিতেন হাঁটিব হাঁটিবার হাঁটিবি হাঁটিবে হাঁটিবেন হাযির হাযিরী হাঁটিল হাঁটিলাম হাঁটিলি হাঁটিলে হাঁটিলেন হাঁটিস হাঁটিয়া হাঁটিয়াছ হাঁটিয়াছি হাঁটিয়াছিল হাঁটিয়াছিলাম হাঁটিয়াছিলি হাঁটিয়াছিলে হাঁটিয়াছিলেন হাঁটিয়াছিস হাঁটিয়াছে হাঁটিয়াছেন হাঁটিয়ে হাঁটিয়ো হাটে হাঁটে হাঁটেন হাটেবাজারে হাঁটো হাঁটছ হাঁটছি হাঁটছিল হাঁটছিলাম হাঁটছিলি হাঁটছিলে হাটছিলেন হাঁটছিলেন হাঁটছিলেম হাঁটছিলুম হাঁটছিস হাঁটছে হাঁটছেন হাঁটুজল হাট্য হাঁটত হাঁটতাম হাঁটতিস হাঁটতে হাঁটুতে হাঁটতেন হাঁটতেম হাঁটতুম হাঁটন হাঁটুন হাঁটুনি হাঁটব হাটবাজার হাটবার হাঁটবার হাঁটবি হাঁটবে হাঁটবেন হাঁটবো হাটবসা হাঁটুভাঙ্গা হাঁটুভাঙা হাঁটুর হাটুরা হাটুরিয়া হাটুরে হাঁটুরবয়স হাঁটুরবয়সী হাঁটল হাটলাগা হাঁটলাম হাঁটলি হাঁটলে হাঁটলেন হাঁটলেম হাঁটলুম হাটহদ্দ হাটুয়া হাডিপা হাডুডু হাড্ডাহাড্ডি হাড্ডি হাড্ডিসার হাণ্ডা হাণ্ডি হাণ্ডিয়া হাত হাতআসা হাতওঠানো হাতওয়ালা হাতকাটা হাতকামড়ানি হাতকামড়ানো হাতকচলানো হাতকরা হাতকরাত হাতকর্জা হাতকষা হাতকড়া হাতকড়ি হাতখালি হাতখোলা হাতখরচ হাতখরচা হাতগোনা হাতগুটানো হাতঘড়ি হাতা হাতাই হাতাইও হাতাইত হাতাইতাম হাতাইতিস হাতাইতে হাতাইতেছ হাতাইতেছি হাতাইতেছিল হাতাইতেছিলাম হাতাইতেছিলি হাতাইতেছিলে হাতাইতেছিলেন হাতাইতেছিস হাতাইতেছে হাতাইতেছেন হাতাইতেন হাতাইব হাতাইবার হাতাইবি হাতাইবে হাতাইবেন হাতাইল হাতাইলাম হাতাইলি হাতাইলে হাতাইলেন হাতাইয়া হাতাইয়াছ হাতাইয়াছি হাতাইয়াছিল হাতাইয়াছিলাম হাতাইয়াছিলি হাতাইয়াছিলে হাতাইয়াছিলেন হাতাইয়াছিস হাতাইয়াছে হাতাইয়াছেন হাতাইয়ো হাতাওয়ালা হাতাক হাতাচ্ছ হাতাচ্ছি হাতাচ্ছিল হাতাচ্ছিলাম হাতাচ্ছিলি হাতাচ্ছিলে হাতাচ্ছিলেন হাতাচ্ছিলেম হাতাচ্ছিলুম হাতাচ্ছিস হাতাচ্ছে হাতাচ্ছেন হাতাত হাতাতাম হাতাতিস হাতাতে হাতাতেন হাতাতেম হাতাতুম হাতান হাতানো হাতাব হাতাবার হাতাবি হাতাবে হাতাবেন হাতাবো হাতাল হাতালাম হাতালি হাতালে হাতালেন হাতালেম হাতালুম হাতাশূন্য হাতাস হাতাহাতি হাতি হাতিপোষা হাতিবান্ধা হাতিব্যবসায়ী হাতিরডাক হাতিরপুল হাতিশাল হাতিশুঁড় হাতিশুঁড়া হাতিয়া হাতিয়ার হাতিয়ারসম্ভার হাতিয়ে হাতিয়েছ হাতিয়েছি হাতিয়েছিল হাতিয়েছিলাম হাতিয়েছিলি হাতিয়েছিলে হাতিয়েছিলেন হাতিয়েছিলেম হাতিয়েছিলুম হাতিয়েছিস হাতিয়েছে হাতিয়েছেন হাতিয়ো হাতী হাতচিঠা হাতচিঠি হাতীবান্ধা হাতীর হাতচুলকানো হাতচলা হাতে হাতেকাটা হাতেকরা হাতেকলমে হাতেখড়ি হাতেখড়ে হাতেগোনা হাতেগড়া হাতেতৈরি হাতেধরা হাতেধরে হাতেনাতে হাতেপাতে হাতেপায়ে হাতেম হাতেলওয়া হাতেলেখা হাতেহাতে হাতছানি হাতছাড়া হাতছাড়ানো হাতছড়ানো হাতজোড় হাতজোড়া হাতটান হাতযশ হাততালি হাততোলা হাতদিয়ে হাতদেওয়া হাতদুটো হাতধরা হাতনাড়া হাতপা হাতপাকানো হাতপাখা হাতপাতা হাতপায়ের হাতপড়া হাতফেরানো হাতফেরতা হাতফসকানো হাতবাক্স হাতবাঁধা হাতবোমা হাতব্যাগ হাতব্যাগটা হাতবদল হাতভাঙা হাতভারী হাতভরা হাতমুখ হাতমোজা হাতরাঁড় হাতল হাতলওয়ালা হাতলযুক্ত হাতলটা হাতলণ্ঠন হাতলবিহীন হাতসই হাতসাফাই হাতড়া হাৎড়া হাতড়াই হাৎড়াই হাতড়াইও হাতড়াইত হাতড়াইতাম হাৎড়াইতাম হাতড়াইতিস হাৎড়াইতিস হাতড়াইতে হাৎড়াইতে হাতড়াইতেছ হাৎড়াইতেছ হাতড়াইতেছি হাৎড়াইতেছি হাতড়াইতেছিল হাৎড়াইতেছিল হাতড়াইতেছিলাম হাৎড়াইতেছিলাম হাতড়াইতেছিলি হাৎড়াইতেছিলি হাতড়াইতেছিলে হাৎড়াইতেছিলে হাতড়াইতেছিলেন হাৎড়াইতেছিলেন হাতড়াইতেছিস হাৎড়াইতেছিস হাতড়াইতেছে হাৎড়াইতেছে হাতড়াইতেছেন হাৎড়াইতেছেন হাতড়াইতেন হাৎড়াইতেন হাৎড়াইতো হাতড়াইব হাৎড়াইব হাতড়াইবার হাৎড়াইবার হাতড়াইবি হাৎড়াইবি হাতড়াইবে হাৎড়াইবে হাতড়াইবেন হাৎড়াইবেন হাতড়াইল হাৎড়াইল হাতড়াইলাম হাৎড়াইলাম হাতড়াইলি হাৎড়াইলি হাতড়াইলে হাৎড়াইলে হাতড়াইলেন হাৎড়াইলেন হাতড়াইয়া হাৎড়াইয়া হাতড়াইয়াছ হাৎড়াইয়াছ হাতড়াইয়াছি হাৎড়াইয়াছি হাতড়াইয়াছিল হাৎড়াইয়াছিল হাতড়াইয়াছিলাম হাৎড়াইয়াছিলাম হাতড়াইয়াছিলি হাৎড়াইয়াছিলি হাতড়াইয়াছিলে হাৎড়াইয়াছিলে হাতড়াইয়াছিলেন হাৎড়াইয়াছিলেন হাতড়াইয়াছিস হাৎড়াইয়াছিস হাতড়াইয়াছে হাৎড়াইয়াছে হাতড়াইয়াছেন হাৎড়াইয়াছেন হাতড়াইয়ো হাৎড়াইয়ো হাতড়াক হাৎড়াক হাতড়াচ্ছ হাৎড়াচ্ছ হাতড়াচ্ছি হাৎড়াচ্ছি হাতড়াচ্ছিল হাৎড়াচ্ছিল হাতড়াচ্ছিলাম হাৎড়াচ্ছিলাম হাতড়াচ্ছিলি হাৎড়াচ্ছিলি হাতড়াচ্ছিলে হাৎড়াচ্ছিলে হাতড়াচ্ছিলেন হাৎড়াচ্ছিলেন হাতড়াচ্ছিলেম হাৎড়াচ্ছিলেম হাতড়াচ্ছিলুম হাৎড়াচ্ছিলুম হাতড়াচ্ছিস হাৎড়াচ্ছিস হাতড়াচ্ছে হাৎড়াচ্ছে হাতড়াচ্ছেন হাৎড়াচ্ছেন হাতড়াত হাৎড়াত হাতড়াতাম হাৎড়াতাম হাতড়াতিস হাৎড়াতিস হাতড়াতে হাৎড়াতে হাতড়াতেন হাৎড়াতেন হাতড়াতেম হাৎড়াতেম হাতড়াতুম হাৎড়াতুম হাতড়ান হাৎড়ান হাতড়ানো হাৎড়ানো হাতড়াব হাৎড়াব হাতড়াবার হাৎড়াবার হাতড়াবি হাৎড়াবি হাতড়াবে হাৎড়াবে হাতড়াবেন হাৎড়াবেন হাতড়াবো হাৎড়াবো হাতড়াল হাৎড়াল হাতড়ালাম হাৎড়ালাম হাতড়ালি হাৎড়ালি হাতড়ালে হাৎড়ালে হাতড়ালেন হাৎড়ালেন হাতড়ালেম হাৎড়ালেম হাতড়ালুম হাৎড়ালুম হাতড়াস হাৎড়াস হাতুড়ি হাতুড়িঠোকা হাতুড়িনিষ্পিষ্ট হাতুড়িয়া হাতুড়ী হাতড়ে হাতুড়ে হাতড়েছ হাৎড়েছ হাতড়েছি হাৎড়েছি হাতড়েছিল হাৎড়েছিল হাতড়েছিলাম হাৎড়েছিলাম হাতড়েছিলি হাৎড়েছিলি হাতড়েছিলে হাৎড়েছিলে হাতড়েছিলেন হাৎড়েছিলেন হাতড়েছিলেম হাৎড়েছিলেম হাতড়েছিলুম হাৎড়েছিলুম হাতড়েছিস হাৎড়েছিস হাতড়েছে হাৎড়েছে হাতড়েছেন হাৎড়েছেন হাতড়ো হাৎড়ো হাথা হাথাঞা হাথান হাথাড়িয়া হাঁদা হাঁদাপেট হাঁদারাম হাদিছ হাদিস হাধিক হান হানুক হানা হানাদার হানাফি হানাবাড়ি হানাহানি হানি হানিকর হানিজনক হানিত হানিতাম হানিতিস হানিতে হানিতেছ হানিতেছি হানিতেছিল হানিতেছিলাম হানিতেছিলি হানিতেছিলে হানিতেছিলেন হানিতেছিস হানিতেছে হানিতেছেন হানিতেন হানিফি হানিব হানিবার হানিবাল হানিবি হানিবে হানিবেন হানিমুন হানিল হানিলাম হানিলি হানিলে হানিলেন হানিস হানিয়া হানিয়াছ হানিয়াছি হানিয়াছিল হানিয়াছিলাম হানিয়াছিলি হানিয়াছিলে হানিয়াছিলেন হানিয়াছিস হানিয়াছে হানিয়াছেন হানিয়ের হানিয়ো হানী হানে হানেন হানো হানছ হানছি হানছিল হানছিলাম হানছিলি হানছিলে হানছিলেন হানছিলেম হানছিলুম হানছিস হানছে হানছেন হান্ট হান্টার হান্টিং হানত হানতাম হানতিস হানতে হানতেন হানতেম হানতুম হানুন হানব হানবার হানবি হানবে হানবেন হানবো হানুম হানল হানলাম হানলি হানলে হানলেন হানলেম হানলুম হাপু হাঁপ হাঁপা হাঁপাই হাঁপাইও হাঁপাইত হাঁপাইতাম হাঁপাইতিস হাঁপাইতে হাঁপাইতেছ হাঁপাইতেছি হাঁপাইতেছিল হাঁপাইতেছিলাম হাঁপাইতেছিলি হাঁপাইতেছিলে হাঁপাইতেছিলেন হাঁপাইতেছিস হাঁপাইতেছে হাঁপাইতেছেন হাঁপাইতেন হাঁপাইব হাঁপাইবার হাঁপাইবি হাঁপাইবে হাঁপাইবেন হাঁপাইল হাঁপাইলাম হাঁপাইলি হাঁপাইলে হাঁপাইলেন হাঁপাইয়া হাঁপাইয়াছ হাঁপাইয়াছি হাঁপাইয়াছিল হাঁপাইয়াছিলাম হাঁপাইয়াছিলি হাঁপাইয়াছিলে হাঁপাইয়াছিলেন হাঁপাইয়াছিস হাঁপাইয়াছে হাঁপাইয়াছেন হাঁপাইয়ো হাঁপাক হাঁপাচ্ছ হাঁপাচ্ছি হাঁপাচ্ছিল হাঁপাচ্ছিলাম হাঁপাচ্ছিলি হাঁপাচ্ছিলে হাঁপাচ্ছিলেন হাঁপাচ্ছিলেম হাঁপাচ্ছিলুম হাঁপাচ্ছিস হাঁপাচ্ছে হাঁপাচ্ছেন হাঁপাত হাঁপাতাম হাঁপাতিস হাঁপাতে হাঁপাতেন হাঁপাতেম হাঁপাতুম হাঁপান হাঁপানি হাঁপানিরোগ হাঁপানো হাঁপাব হাঁপাবার হাঁপাবি হাঁপাবে হাঁপাবেন হাঁপাবো হাঁপাল হাঁপালাম হাঁপালি হাঁপালে হাঁপালেন হাঁপালেম হাঁপালুম হাঁপাস হাঁপাহাঁপি হাঁপি হাপিত্যেশ হাপিশ হাঁপিয়ে হাঁপিয়েছ হাঁপিয়েছি হাঁপিয়েছিল হাঁপিয়েছিলাম হাঁপিয়েছিলি হাঁপিয়েছিলে হাঁপিয়েছিলেন হাঁপিয়েছিলেম হাঁপিয়েছিলুম হাঁপিয়েছিস হাঁপিয়েছে হাঁপিয়েছেন হাঁপিয়ো হাপুতা হাপুতি হাপুতিনী হাপুতী হাপর হাপরা হাপরাই হাপরাইও হাপরাইত হাপরাইতাম হাপরাইতিস হাপরাইতে হাপরাইতেছ হাপরাইতেছি হাপরাইতেছিল হাপরাইতেছিলাম হাপরাইতেছিলি হাপরাইতেছিলে হাপরাইতেছিলেন হাপরাইতেছিস হাপরাইতেছে হাপরাইতেছেন হাপরাইতেন হাপরাইব হাপরাইবার হাপরাইবি হাপরাইবে হাপরাইবেন হাপরাইল হাপরাইলাম হাপরাইলি হাপরাইলে হাপরাইলেন হাপরাইয়া হাপরাইয়াছ হাপরাইয়াছি হাপরাইয়াছিল হাপরাইয়াছিলাম হাপরাইয়াছিলি হাপরাইয়াছিলে হাপরাইয়াছিলেন হাপরাইয়াছিস হাপরাইয়াছে হাপরাইয়াছেন হাপরাইয়ো হাপরাক হাপরাচ্ছ হাপরাচ্ছি হাপরাচ্ছিল হাপরাচ্ছিলাম হাপরাচ্ছিলি হাপরাচ্ছিলে হাপরাচ্ছিলেন হাপরাচ্ছিলেম হাপরাচ্ছিলুম হাপরাচ্ছিস হাপরাচ্ছে হাপরাচ্ছেন হাপরাত হাপরাতাম হাপরাতিস হাপরাতে হাপরাতেন হাপরাতেম হাপরাতুম হাপরান হাপরানো হাপরাব হাপরাবার হাপরাবি হাপরাবে হাপরাবেন হাপরাবো হাপরাল হাপরালাম হাপরালি হাপরালে হাপরালেন হাপরালেম হাপরালুম হাপরাস হাপরে হাপরেছ হাপরেছি হাপরেছিল হাপরেছিলাম হাপরেছিলি হাপরেছিলে হাপরেছিলেন হাপরেছিলেম হাপরেছিলুম হাপরেছিস হাপরেছে হাপরেছেন হাপরের হাপরো হাপরযুক্ত হাপুস হাপুসনয়ন হাপুসহুপুস হাফ হাঁফ হাফআখড়াই হাফগেরস্ত হাঁফান হাঁফানো হাফারখানা হাঁফাল হাফটাইম হাফটিকিট হাফটোন হাফডে হাফনিয়াম হাফপ্যান্ট হাফমোজা হাফশার্ট হাফহাতা হাফহলিডে হাব হাবা হাবাকালা হাবাগঙ্গারাম হাবাগোবা হাবাগবা হাবাত হাবাতিয়া হাবাতে হাবাল হাবালা হাবাস হাবি হাবিজাবি হাবিব হাবিবুল্লাহ হাবিলাষ হাবিলদার হাবিয়া হাবীব হাবেলি হাবেশ হাবুজখানা হাবজা হাবজাগোবজা হাব্যাস হাবুডুবু হাবভাব হাবভাবযুক্ত হাবভাবপূর্ণ হাবভাবপ্রদর্শন হাবলা হাবলি হাবশি হাবশিখানা হাবসি হাবসিখানা হাবড়া হাবড়হাটি হাভাত হাভাতে হাভানা হাভারস্যাক হাম হামক হামা হামাগুড়ি হামাদান হামাদানে হামান হামানদিস্তা হামানদিস্তে হামাম হামার হামারি হামাস হামায়িলশরীফ হামি হামিলা হামিয়া হামে হামেলা হামেশা হামেসা হামেহাল হামছায় হামছায়া হামজা হামযা হামদিল হামদম হামদর্দ হামদর্দি হামদর্দী হাম্বা হামবাগ হাম্বির হাম্বী হাম্বীর হাম্বীররাগ হাম্বর হামবুর্গ হামবড় হামবড়া হামবড়াই হাম্ভী হাম্মাম হামরাই হামরাহী হামলা হামলাকারী হামলাযজ্ঞ হামলান হামলানো হামলে হার হারক হারুক হারকাত হারা হারাই হারাইও হারাইত হারাইতাম হারাইতিস হারাইতে হারাইতেছ হারাইতেছি হারাইতেছিল হারাইতেছিলাম হারাইতেছিলি হারাইতেছিলে হারাইতেছিলেন হারাইতেছিস হারাইতেছে হারাইতেছেন হারাইতেন হারাইব হারাইবার হারাইবি হারাইবে হারাইবেন হারাইল হারাইলাম হারাইলায় হারাইলি হারাইলে হারাইলেন হারাইয়া হারাইয়াছ হারাইয়াছি হারাইয়াছিল হারাইয়াছিলাম হারাইয়াছিলি হারাইয়াছিলে হারাইয়াছিলেন হারাইয়াছিস হারাইয়াছে হারাইয়াছেন হারাইয়ো হারাক হারাকিরি হারাঙ হারাচ্ছ হারাচ্ছি হারাচ্ছিল হারাচ্ছিলাম হারাচ্ছিলি হারাচ্ছিলে হারাচ্ছিলেন হারাচ্ছিলেম হারাচ্ছিলুম হারাচ্ছিস হারাচ্ছে হারাচ্ছেন হারাত হারাতাম হারাতিস হারাতে হারাতেন হারাতেম হারাতুম হারান হারানো হারাননি হারাব হারাবার হারাবি হারাবে হারাবেন হারাবো হারাবলি হারাবলী হারাম হারামখোর হারামি হারামজাদ হারামজাদা হারামজাদাগিরি হারামজাদি হারামজাদী হারামমউত হারার হারারে হারাল হারালাম হারালি হারালে হারালেন হারালেম হারালুম হারাস হারাহারি হারায় হারায়নি হারি হারিও হারিকেন হারিকণ্ঠ হারিণ হারিণিক হারিণী হারিত হারিতাম হারিতিস হারিতে হারিতেছ হারিতেছি হারিতেছিল হারিতেছিলাম হারিতেছিলি হারিতেছিলে হারিতেছিলেন হারিতেছিস হারিতেছে হারিতেছেন হারিতেন হারিদ্র হারিব হারিবার হারিবি হারিবে হারিবেন হারিল হারিলাম হারিলি হারিলে হারিলেন হারিয়া হারিয়াছ হারিয়াছি হারিয়াছিল হারিয়াছিলাম হারিয়াছিলি হারিয়াছিলে হারিয়াছিলেন হারিয়াছিস হারিয়াছে হারিয়াছেন হারিয়ে হারিয়েছ হারিয়েছি হারিয়েছিল হারিয়েছিলাম হারিয়েছিলি হারিয়েছিলে হারিয়েছিলেন হারিয়েছিলেম হারিয়েছিলুম হারিয়েছিস হারিয়েছে হারিয়েছেন হারিয়েযাওয়া হারিয়ো হারী হারীত হারে হাঁরে হারেন হারেনি হারেম হারেমশরিফ হারছ হারছি হারছিল হারছিলাম হারছিলি হারছিলে হারছিলেন হারছিলেম হারছিলুম হারছিস হারছে হারছেন হারছড়া হার্জ হারজিত হারজিৎ হার্জেগোভিনা হার্ট হার্টফেল হার্টস হার্ড হার্ডওয়ার হার্ডওয়্যার হার্ডকাভার হার্ডিঞ্জ হার্ডিঞ্জব্রিজ হার্ডডিস্ক হার্ডড্রাইভ হার্ডবোর্ড হার্ডব্যাক হারত হারতাম হারতিস হারতে হারতেন হারতেম হারতুম হার্দ হার্দিক হার্দী হার্দ্য হার্নিয়া হারফনমওলা হারফুনমৌলা হারব হারবার হারবি হারবে হারবেন হারবো হার্ভার্ড হারভূষিত হারমাদ হার্মাদ হারমোনিয়াম হারল হারলাম হারলি হারলে হারলেন হারলেম হারলো হারলুম হারুয়া হাল হালআইনে হালআমল হালুইকর হালকা হাল্কা হালকাপনা হাল্কাপনা হালকামি হালকার হালখাতা হালাক হালাল হালালি হালি হালিক হালিম হালিয়া হালচাল হালচালনা হালচাষ হালট হালটানা হালত হালদার হালধরা হালনাগাদ হালনাগাদকৃত হালফিল হালফ্যাশন হালুম হাল্লাক হালহকিকত হালহকীকত হালহদিশ হালুয়া হালুয়াঘাট হাশির হাশিশ হাশিয়া হাশীশ হাশেম হাশর হাস হাঁস হাসক হাসুক হাঁসকল হাসা হাঁসা হাসাইও হাঁসাইও হাসাইত হাঁসাইত হাসাইতাম হাঁসাইতাম হাসাইতিস হাঁসাইতিস হাসাইতে হাঁসাইতে হাসাইতেছ হাঁসাইতেছ হাসাইতেছি হাঁসাইতেছি হাসাইতেছিল হাঁসাইতেছিল হাসাইতেছিলাম হাঁসাইতেছিলাম হাসাইতেছিলি হাঁসাইতেছিলি হাসাইতেছিলে হাঁসাইতেছিলে হাসাইতেছিলেন হাঁসাইতেছিলেন হাসাইতেছিস হাঁসাইতেছিস হাসাইতেছে হাঁসাইতেছে হাসাইতেছেন হাঁসাইতেছেন হাসাইতেন হাঁসাইতেন হাসাইব হাঁসাইব হাসাইবার হাঁসাইবার হাসাইবি হাঁসাইবি হাসাইবে হাঁসাইবে হাসাইবেন হাঁসাইবেন হাসাইল হাঁসাইল হাসাইলাম হাঁসাইলাম হাসাইলি হাঁসাইলি হাসাইলে হাঁসাইলে হাসাইলেন হাঁসাইলেন হাসাইয়া হাঁসাইয়া হাসাইয়াছ হাঁসাইয়াছ হাসাইয়াছি হাঁসাইয়াছি হাসাইয়াছিল হাঁসাইয়াছিল হাসাইয়াছিলাম হাঁসাইয়াছিলাম হাসাইয়াছিলি হাঁসাইয়াছিলি হাসাইয়াছিলে হাঁসাইয়াছিলে হাসাইয়াছিলেন হাঁসাইয়াছিলেন হাসাইয়াছিস হাঁসাইয়াছিস হাসাইয়াছে হাঁসাইয়াছে হাসাইয়াছেন হাঁসাইয়াছেন হাসাইয়ো হাঁসাইয়ো হাসাক হাঁসাক হাসাচেছ হাসাচ্ছ হাঁসাচ্ছ হাসাচ্ছি হাঁসাচ্ছি হাসাচ্ছিল হাঁসাচ্ছিল হাসাচ্ছিলাম হাঁসাচ্ছিলাম হাসাচ্ছিলি হাঁসাচ্ছিলি হাসাচ্ছিলে হাঁসাচ্ছিলে হাসাচ্ছিলেন হাঁসাচ্ছিলেন হাসাচ্ছিলেম হাঁসাচ্ছিলেম হাসাচ্ছিলুম হাঁসাচ্ছিলুম হাসাচ্ছিস হাঁসাচ্ছিস হাসাচ্ছে হাঁসাচ্ছে হাসাচ্ছেন হাঁসাচ্ছেন হাসাত হাঁসাত হাসাতাম হাঁসাতাম হাসাতিস হাঁসাতিস হাসাতে হাঁসাতে হাসাতেন হাঁসাতেন হাসাতেম হাঁসাতেম হাসাতুম হাঁসাতুম হাসান হাঁসান হাসানা হাসানো হাঁসানো হাসাব হাঁসাব হাসাবার হাঁসাবার হাসাবি হাঁসাবি হাসাবে হাঁসাবে হাসাবেন হাঁসাবেন হাসাবো হাঁসাবো হাসাল হাঁসাল হাসালাম হাঁসালাম হাসালি হাঁসালি হাসালে হাঁসালে হাসালেন হাঁসালেন হাসালেম হাঁসালেম হাসালুম হাঁসালুম হাসাস হাঁসাস হাসাহাসি হাসি হাঁসি হাসিকা হাসিকান্না হাসিখানি হাসিখুশি হাসিছে হাসিযুক্ত হাসিটালা হাসিটিঁটকারি হাসিঠাট্টা হাসিত হাসিতামাশা হাসিতামাসা হাসিতিস হাসিতে হাসিতেছ হাসিতেছি হাসিতেছিল হাসিতেছিলাম হাসিতেছিলি হাসিতেছিলে হাসিতেছিলেন হাসিতেছিস হাসিতেছে হাসিতেছেন হাসিতেন হাসিনা হাসিনী হাসিন্তো হাসিপূর্ণ হাসিব হাসিবার হাসিবি হাসিবে হাসিবেন হাসিমুখ হাসিমুখে হাসিমাখা হাসিরচোট হাসিরছটা হাসিল হাসিলা হাসিলাম হাসিলি হাসিলে হাসিলেন হাসিস হাসিহাসি হাসিয়া হাঁসিয়া হাসিয়াছ হাসিয়াছি হাসিয়াছিল হাসিয়াছিলাম হাসিয়াছিলি হাসিয়াছিলে হাসিয়াছিলেন হাসিয়াছিস হাসিয়াছে হাসিয়াছেন হাসিয়াল হাসিয়ালি হাঁসিয়ালি হাসিয়ে হাঁসিয়ে হাসিয়েছ হাঁসিয়েছ হাসিয়েছি হাঁসিয়েছি হাসিয়েছিল হাঁসিয়েছিল হাসিয়েছিলাম হাঁসিয়েছিলাম হাসিয়েছিলি হাঁসিয়েছিলি হাসিয়েছিলে হাঁসিয়েছিলে হাসিয়েছিলেন হাঁসিয়েছিলেন হাসিয়েছিলেম হাঁসিয়েছিলেম হাসিয়েছিলুম হাঁসিয়েছিলুম হাসিয়েছিস হাঁসিয়েছিস হাসিয়েছে হাঁসিয়েছে হাসিয়েছেন হাঁসিয়েছেন হাসিয়ো হাঁসিয়ো হাসীনা হাসে হাঁসে হাসেন হাসেবে হাঁসেরডিম হাসছ হাসছি হাসছিল হাসছিলাম হাসছিলি হাসছিলে হাসছিলেন হাসছিলেম হাসছিলুম হাসছিস হাসছে হাসছেন হাস্য হাস্যকারিণী হাস্যকৌতুক হাস্যকৌতুককারী হাস্যকর হাস্যালাপ হাস্যাস্পদ হাস্যে হাস্যোদ্দীপক হাস্যোদ্রেককারী হাস্যজনক হাস্যযুক্ত হাস্যদায়ক হাস্যপরিহাস হাস্যপ্রবণ হাস্যমুখ হাস্যময় হাস্যময়ী হাস্যরোল হাস্যরত হাস্যরতি হাস্যরস হাস্যরসাত্মক হাস্যরসাশ্রিত হাস্যরসিক হাসত হাসতাম হাসতিস হাস্তী হাসতে হাসতেন হাসতেম হাসতুম হাসন হাসুন হাসনাবাদ হাসনাহেনা হাসনোহানা হাসনুহানা হাসপাতাল হাঁসপাতাল হাসপরিহাস হাঁসফাঁশ হাঁসফাঁস হাসব হাসবার হাসবি হাসবে হাসবেন হাসবো হাঁসমুরগি হাঁসরাজ হাসল হাসলাম হাসলি হাঁসলি হাঁসুলি হাঁসুলী হাসলে হাসলেই হাসলেন হাসলেম হাসলুম হাঁসুয়া হাহা হাঁহাঁ হাহাকার হাহাধ্বনি হাহাহা হাহাহাহা হাহুতাশ হাহুতাস হাড় হাড়কাট হাড়কালি হাড়কিপটে হাড়কৃপণ হাড়গিলা হাড়গিলে হাড়গোড় হাড়গুঁড়া হাঁড়া হাড়াইডোমাই হাড়ি হাঁড়ি হাড়িকাট হাড়িকাঠ হাঁড়িকলসি হাঁড়িকুঁড়ি হাঁড়িচাচা হাঁড়িঠেলা হাড়িনী হাড়িপা হাঁড়িপাতিল হাঁড়িপানা হাড়িফা হাঁড়িমুখ হাঁড়িরখবর হাড়িয়া হাঁড়িয়া হাড়িয়াকোণ হাড়ী হাঁড়ী হাঁড়ীকুঁড়ি হাঁড়ীচাঁচা হাড়চূর্ণ হাড়ে হাড়েমাসে হাড়েহাড়ে হাড়জিরজিরে হাড়জ্বালানে হাড়জ্বালানো হাড়জুড়ানো হাড়পাকা হাড়পাঁজরা হাড়বজ্জাত হাড়ভাঙ্গা হাড়ভাঙা হাড়ভাজা হাড়মাটি হাড়মাস হাঁড়ল হাড়হাবাতে হাড়হদ্দ হায় হায়ওয়ান হায়ওয়ানাত হায়ওয়ানিয়ত হায়া হায়াত হায়াশরম হায়েনা হায়েনারডাক হায়দর হায়দ্রাবাদ হায়ন হায়রান হায়রে হি হিং হিংচা হিংটিংছট হিংলি হিংস হিংসক হিংসুক হিংসা হিংসাকারী হিংসাজনক হিংসাযুক্ত হিংসাযোগ্য হিংসাত্মক হিংসাদ্বেষ হিংসাপরায়ণ হিংসাপূর্ণ হিংসাবৃত্তি হিংসামন্ত্র হিংসালু হিংসাশীল হিংসাশূন্য হিংসাশূন্যতা হিংসাশ্রয়ী হিংসিত হিংসে হিংস্য হিংসুটে হিংসন হিংসনীয় হিংস্র হিংস্রক হিংস্রা হিংস্রিকা হিংস্রতা হিঅ হিঅঅ হিঅএ হিঅহি হিউজ হিউমার হিউমাস হিউম্যান হিক হিক্কা হিকারত হিকমত হিকমতি হিঙ হিঙ্গু হিঙ্গুল হিঙ্গুলি হিঙুল হিঁচড় হিঁচড়ক হিঁচড়া হিঁচড়াই হিঁচড়াইও হিঁচড়াইত হিঁচড়াইতাম হিঁচড়াইতিস হিঁচড়াইতে হিঁচড়াইতেছ হিঁচড়াইতেছি হিঁচড়াইতেছিল হিঁচড়াইতেছিলাম হিঁচড়াইতেছিলি হিঁচড়াইতেছিলে হিঁচড়াইতেছিলেন হিঁচড়াইতেছিস হিঁচড়াইতেছে হিঁচড়াইতেছেন হিঁচড়াইতেন হিঁচড়াইব হিঁচড়াইবার হিঁচড়াইবি হিঁচড়াইবে হিঁচড়াইবেন হিঁচড়াইল হিঁচড়াইলাম হিঁচড়াইলি হিঁচড়াইলে হিঁচড়াইলেন হিঁচড়াইয়া হিঁচড়াইয়াছ হিঁচড়াইয়াছি হিঁচড়াইয়াছিল হিঁচড়াইয়াছিলাম হিঁচড়াইয়াছিলি হিঁচড়াইয়াছিলে হিঁচড়াইয়াছিলেন হিঁচড়াইয়াছিস হিঁচড়াইয়াছে হিঁচড়াইয়াছেন হিঁচড়াইয়ো হিঁচড়াক হিঁচড়ান হিঁচড়ানো হিঁচড়াস হিঁচড়চ্ছ হিঁচড়চ্ছি হিঁচড়চ্ছিল হিঁচড়চ্ছিলাম হিঁচড়চ্ছিলি হিঁচড়চ্ছিলে হিঁচড়চ্ছিলেন হিঁচড়চ্ছিলেম হিঁচড়চ্ছিলুম হিঁচড়চ্ছিস হিঁচড়চ্ছে হিঁচড়চ্ছেন হিঁচড়ে হিঁচড়েছ হিঁচড়েছি হিঁচড়েছিল হিঁচড়েছিলাম হিঁচড়েছিলি হিঁচড়েছিলে হিঁচড়েছিলেন হিঁচড়েছিলেম হিঁচড়েছিলুম হিঁচড়েছিস হিঁচড়েছে হিঁচড়েছেন হিঁচড়ো হিঁচড়োবার হিঁচড়ত হিঁচড়তাম হিঁচড়তিস হিঁচড়তে হিঁচড়তেন হিঁচড়তেম হিঁচড়তুম হিঁচড়ন হিঁচড়ব হিঁচড়বি হিঁচড়বে হিঁচড়বেন হিঁচড়বো হিঁচড়ল হিঁচড়লাম হিঁচড়লি হিঁচড়লে হিঁচড়লেন হিঁচড়লেম হিঁচড়লুম হিঁচড়স হিজ হিজিবিজি হিজরা হিজরি হিজরিসন হিজরত হিজরতকারী হিজল হিজলিবাদাম হিজড়া হিজড়ে হিঞ্চা হিঞ্চে হিট হিটার হিটলার হিটলারি হিটস হিটস্ট্রোক হিণ্ডই হিণ্ডন হিত হিতকামী হিতকামনা হিতকামনাকারী হিতকারিণী হিতকারী হিতকথা হিতকর হিতকরী হিতাকাঙ্ক্ষী হিতার্থক হিতার্থী হিতার্থে হিতাশী হিতাহিত হিতাহিতজ্ঞান হিতাহিতজ্ঞানশূন্য হিতে হিতৈষা হিতৈষিণী হিতৈষী হিতৈষণা হিতোপদেশ হিতোপদেশমালা হিতোপদেষ্টা হিতযুক্ত হিততত্ত্ব হিতবাক্য হিতবাদ হিতবাদী হিতবচন হিতসাধক হিতসাধন হিতসাধনকারী হিথরো হিঁদু হিঁদুআনি হিদায়েত হিদায়ত হিদায়তী হিঁদুয়ানি হিন্ট হিন্তাল হিন্দ হিন্দু হিন্দুঅনুষ্ঠান হিন্দুকুশ হিন্দি হিন্দিপ্রভাবিত হিন্দিভাষা হিন্দিভাষী হিন্দোল হিন্দোলা হিন্দোলরাগ হিন্দুজাতি হিন্দুতীর্থ হিন্দুত্ব হিন্দুদেবদেবী হিন্দুদেরবর্ণ হিন্দুধর্ম হিন্দুধর্মানুযায়ী হিন্দুধর্মাবলম্বী হিন্দুনাম হিন্দুবাড়ি হিন্দুবিবাহ হিন্দুবিবাহানুষ্ঠান হিন্দুবর্ণ হিন্দুভাব হিন্দুমতে হিন্দুরমণী হিন্দুশাস্ত্র হিন্দুশাস্ত্রানুযায়ী হিন্দুশাস্ত্রমতে হিন্দুসংস্কার হিন্দুস্তান হিন্দুস্তানি হিন্দুস্থান হিন্দুস্থানি হিন্দুস্থানে হিন্দুসমাজ হিন্দুসম্প্রদায় হিন্দুসুলভ হিন্দুয়ানা হিন্দুয়ানী হিপ হিপোপটেমাস হিপনোটিজম হিফাজত হিফয হিবুক হিবা হিবাচী হিবানামা হিব্রু হিব্রুভাষী হিম হিমু হিমঋতু হিমকর হিমগিরি হিমঘর হিমাংক হিমাংশু হিমাগার হিমাগম হিমাঙ্গ হিমাচল হিমাদ্রি হিমানী হিমালয় হিমালয়কন্যা হিমালয়ান হিমালয়নন্দিনী হিমালয়পত্নী হিমালয়প্রদেশ হিমালয়পর্বত হিমায়ক হিমায়িত হিমায়ন হিমিকা হিমে হিমেল হিমোগ্লোবিন হিমোফিলিয়া হিমোলাইটিক হিমছড়ি হিমযুক্ত হিমনন্দিনী হিমপাত হিমবান হিমবাহ হিমবৎ হিমমণ্ডল হিম্মত হিম্মৎ হিম্মতি হিম্মতজিগর হিম্মৎজিগর হিমরেখা হিমশিম হিমশিলা হিমশীতল হিমশৈল হিমসাগর হিমসিম হিরা হিরাকস হিরে হিরো হিরোইন হিরোশিমা হিরোয়িক হিরণ হিরণজরি হিরণ্য হিরণ্যকশিপু হিরণ্যগর্ভ হিরণ্যদ হিরণ্যদা হিরণ্যনাভ হিরণ্যপ্রভ হিরণ্যবাহ হিরণ্যরেতা হিরণপ্রভা হিরণবরণ হিরণময় হিরণ্ময় হিরণ্ময়ী হিল হিলওয়ালা হিলা হিলানো হিলারি হিলাল হিলি হিলিয়াম হিলমিল হিল্লা হিল্লিদিল্লি হিল্লে হিল্লোল হিল্লোলিত হিলস হিলসা হিলসে হিশাব হিশেব হিষ্টিরিয়া হিষ্ট্রি হিসাব হিসাবকিতাব হিসাবকেতাব হিসাবকৃত হিসাবকরা হিসাবগত হিসাবানা হিসাবি হিসাবী হিসাবচুকানো হিসাবতালিকা হিসাবদেওয়া হিসাবনিকাশ হিসাবনিকেশ হিসাবনিরীক্ষা হিসাবনেওয়া হিসাবনবিশ হিসাবনবিস হিসাবপত্র হিসাবপরীক্ষক হিসাবপরীক্ষা হিসাববই হিসাববিজ্ঞান হিসাববিহীন হিসাববহির্ভূত হিসাবমতে হিসাবরক্ষক হিসাবরক্ষণ হিসাবরক্ষণবিদ হিসাবশাস্ত্র হিসাবশাস্ত্রীয় হিসাবসংবলিত হিসাম হিসেব হিসেবকরা হিসেবি হিসেবী হিসেবচুকানো হিসেবদেওয়া হিসেবনিকেশ হিসেবনেওয়া হিসেবপরীক্ষক হিসেবপরীক্ষা হিসেবমেটানো হিস্যা হিস্যাদার হিস্টামিন হিসটিরিয়া হিস্টিরিয়া হিস্যে হিস্যেদার হিস্টোপ্যাথলজি হিস্টোরি হিস্টোলজিক্যাল হিস্টরি হিস্ট্রি হিসসা হিস্‌সা হিসসাদার হিসসার হিসসে হিসসেদার হিহি হিহিহি হিহিহিহি হিড়িক হিড়হিড় হিয় হিয়এ হিয়া হিয়াপর হিয়ার হিঁয়ালি হুঁচোট হচ্ছ হচ্ছি হচ্ছিল হচ্ছিলাম হচ্ছিলি হচ্ছিলে হচ্ছিলেন হচ্ছিলেম হচ্ছিলো হচ্ছিলুম হচ্ছিস হচ্ছে হচ্ছেন হচ্ছেনা হুঁচট হীন হীনকুল হীনকুলজাত হীনা হীনাবস্থা হীনাবস্থাপ্রাপ্ত হীনচেতা হীনচরিত্র হীনজাতীয় হীনজন্মপ্রাপ্ত হীনযান হীনতা হীনতাপ্রাপ্ত হীনতাবোধ হীনতম হীনতমা হীনতর হীনপ্রাণ হীনপ্রাণা হীনপ্রভ হীনবংশীয় হীনবর্ণ হীনবল হীনভাবে হীনমতি হীনমন্যতা হীরক হীরকখণ্ড হীরকচূর্ণ হীরকজয়ন্তী হীরকদীপ্তি হীরা হীরাপান্না হীরাপুর হীরামন হীরারটুকরা হীরারটুকরো হীরে হীরেমন হীল হীয়মান হেই হেঁই হেঁইও হেঁইয়ো হেকারত হেকিম হেঁকে হেঁকেছ হেঁকেছি হেঁকেছিল হেঁকেছিলাম হেঁকেছিলি হেঁকেছিলে হেঁকেছিলেন হেঁকেছিলেম হেঁকেছিলুম হেঁকেছিস হেঁকেছে হেঁকেছেন হেঁকো হেক্টর হেকমত হেক্সাগন হেগ হেগেল হেঙ্গাম হেঙ্গামা হেঙ্গল হেঙ্গলী হেঁচকা হেঁচকি হেঁচকে হেঁচে হেঁচেছ হেঁচেছি হেঁচেছিল হেঁচেছিলাম হেঁচেছিলি হেঁচেছিলে হেঁচেছিলেন হেঁচেছিলেম হেঁচেছিলুম হেঁচেছিস হেঁচেছে হেঁচেছেন হেঁচেতা হেঁচো হেঁচড়া হেঁচড়াইয়া হেঁচড়ান হেঁচড়ানি হেঁচড়ানো হেঁচড়াহেঁচড়ি হেঁচড়ায়া হেঁচড়ে হেঁজিপেঁজি হেজে হেজেছ হেজেছি হেজেছিল হেজেছিলাম হেজেছিলি হেজেছিলে হেজেছিলেন হেজেছিলেম হেজেছিলুম হেজেছিস হেজেছে হেজেছেন হেজো হেট হেঁট হেটারো হেটারোসাইক্লিক হেঁটে হেঁটেছ হেঁটেছি হেঁটেছিল হেঁটেছিলাম হেঁটেছিলি হেঁটেছিলে হেটেছিলেন হেঁটেছিলেন হেঁটেছিলেম হেঁটেছিলুম হেঁটেছিস হেঁটেছে হেঁটেছেন হেটো হেঁটো হেঁটমুণ্ড হেটহেট হেড হেডউইগ হেডকোয়ার্টার হেডক্লার্ক হেডিং হেডে হেডটিচার হেডপণ্ডিত হেডবাবু হেডমাস্টার হেডমাস্টারমশাই হেডমাস্টারমহাশয় হেডম্যান হেডলাইট হেডলাইন হেডসেট হেডস্যার হেতু হেতুক হেতা হেতার হেতাল হেঁতাল হেঁতালগাছ হেতালবাড়ি হেঁতালবাড়ি হেতের হেতুবাদ হেতুবাদী হেত্বাভাস হেতুরূপে হেতুশাস্ত্র হেতুসাপেক্ষ হেথা হেথাহোথা হেদা হেদাতি হেদান হেদানো হেদায়েত হেদিয়ে হেদে হেদো হেদনো হেদুয়া হেন হেনকালে হেনা হেনে হেনেছ হেনেছি হেনেছিল হেনেছিলাম হেনেছিলি হেনেছিলে হেনেছিলেন হেনেছিলেম হেনেছিলুম হেনেছিস হেনেছে হেনেছেন হেনেস্তা হেনেস্থা হেন্ডারসন হেনরি হেনরিক হেনস্তা হেনস্থা হেপা হেপাজত হেপাটাইটিস হেপাটিক হেফাজত হেফজ হেবু হেবা হেভি হেভেন হেম হেমকান্তি হেমকূট হেমাঙ্গ হেমাঙ্গি হেমাঙ্গিনী হেমাদ্রি হেমাভ হেমায়েতপুর হেমায়েলশরীফ হেমিস্ফিয়ার হেমচন্দ্র হেমঝারি হেমন্ত হেমন্তকাল হেমন্তকালীন হেমপুষ্প হেমবর্ণ হেমবরণী হেমমুকুলিকা হেমরানী হেমলক হেমলতা হেমহার হের হেরু হেরই হেরা হেরাগুহা হেরি হেরিনু হেরিলু হেরিলেন হেরিলোঁ হেরে হেরেছ হেরেছি হেরেছিল হেরেছিলাম হেরেছিলি হেরেছিলে হেরেছিলেন হেরেছিলেম হেরেছিলুম হেরেছিস হেরেছে হেরেছেন হেরেম হেরো হেরোইন হেরত হেরন হেরনু হেরনচি হেরফের হেরব হেরম্ব হেরলি হেরসি হেরহ হেরহু হেল হেলুক হেলা হেলাই হেলাইও হেলাইত হেলাইতাম হেলাইতিস হেলাইতে হেলাইতেছ হেলাইতেছি হেলাইতেছিল হেলাইতেছিলাম হেলাইতেছিলি হেলাইতেছিলে হেলাইতেছিলেন হেলাইতেছিস হেলাইতেছে হেলাইতেছেন হেলাইতেন হেলাইব হেলাইবার হেলাইবি হেলাইবে হেলাইবেন হেলাইল হেলাইলাম হেলাইলি হেলাইলে হেলাইলেন হেলাইয়া হেলাইয়াছ হেলাইয়াছি হেলাইয়াছিল হেলাইয়াছিলাম হেলাইয়াছিলি হেলাইয়াছিলে হেলাইয়াছিলেন হেলাইয়াছিস হেলাইয়াছে হেলাইয়াছেন হেলাইয়ো হেলাক হেলাগোছা হেলাচ্ছ হেলাচ্ছি হেলাচ্ছিল হেলাচ্ছিলাম হেলাচ্ছিলি হেলাচ্ছিলে হেলাচ্ছিলেন হেলাচ্ছিলেম হেলাচ্ছিলুম হেলাচ্ছিস হেলাচ্ছে হেলাচ্ছেন হেলাত হেলাতাম হেলাতিস হেলাতে হেলাতেন হেলাতেম হেলাতুম হেলান হেলানো হেলাফেলা হেলাব হেলাবার হেলাবি হেলাবে হেলাবেন হেলাবো হেলার হেলাল হেলালাম হেলালি হেলালে হেলালেন হেলালেম হেলালুম হেলাস হেলায় হেলি হেলিওস হেলিকপ্টার হেলিক্স হেলিত হেলিতাম হেলিতিস হেলিতে হেলিতেছ হেলিতেছি হেলিতেছিল হেলিতেছিলাম হেলিতেছিলি হেলিতেছিলে হেলিতেছিলেন হেলিতেছিস হেলিতেছে হেলিতেছেন হেলিতেন হেলিপোর্ট হেলিব হেলিবার হেলিবি হেলিবে হেলিবেন হেলিল হেলিলাম হেলিলি হেলিলে হেলিলেন হেলিস হেলিয়া হেলিয়াছ হেলিয়াছি হেলিয়াছিল হেলিয়াছিলাম হেলিয়াছিলি হেলিয়াছিলে হেলিয়াছিলেন হেলিয়াছিস হেলিয়াছে হেলিয়াছেন হেলিয়ে হেলিয়েছ হেলিয়েছি হেলিয়েছিল হেলিয়েছিলাম হেলিয়েছিলি হেলিয়েছিলে হেলিয়েছিলেন হেলিয়েছিলেম হেলিয়েছিলুম হেলিয়েছিস হেলিয়েছে হেলিয়েছেন হেলিয়ো হেলে হেলেছ হেলেছি হেলেছিল হেলেছিলাম হেলেছিলি হেলেছিলে হেলেছিলেন হেলেছিলেম হেলেছিলুম হেলেছিস হেলেছে হেলেছেন হেলেঞ্চা হেলেন হেলেম হেলো হেলছ হেলছি হেলছিল হেলছিলাম হেলছিলি হেলছিলে হেলছিলেন হেলছিলেম হেলছিলুম হেলছিস হেলছে হেলছেন হেলত হেলতাম হেলতিস হেলতে হেলতেন হেলতেম হেলতুম হেলথ হেলদোল হেলন হেলুন হেল্প হেলব হেলবার হেলবি হেলবে হেলবেন হেলবো হেলমেট হেলল হেললাম হেললি হেললে হেললেন হেললেম হেললুম হেঁশেল হেসে হেঁসে হেসেছ হেসেছি হেসেছিল হেসেছিলাম হেসেছিলি হেসেছিলে হেসেছিলেন হেসেছিলেম হেসেছিলুম হেসেছিস হেসেছে হেসেছেন হেসেন হেসেবে হেঁসেল হেসো হেঁসো হেস্তনেস্ত হেঁহেঁ হেঁড়াল হেঁড়ে হেঁড়েল হেয় হেয়ার হেঁয়ালি হেঁয়ালিপূর্ণ হৈ হৈচৈ হৈতে হৈম হৈমন্ত হৈমন্তিক হৈমন্তী হৈমবত হৈমবতী হৈহৈ হৈহল্লা হৈহয় হৈয়ঙ্গবীন হোই হোইঅ হোউ হোক হোকনা হোগল হোগলকুঁড়ি হোগলগুঁড়ি হোগলা হোগলাফুল হোঁচট হোজরা হোটেল হোটেলওয়ালা হোটেলওয়ালি হোঁতকা হোঁৎকা হোতা হোতো হোত্র হোত্রী হোত্রীয় হোথা হোঁদল হোঁদলকুতকুত হোঁদলকুৎকুৎ হোঁদড় হোন্ডা হোন্ডার হোপ হোপফুলি হোবল হোম হোমকারী হোমকুণ্ড হোমকর্তা হোমাগ্নি হোমানল হোমিও হোমিওপ্যাথি হোমিওপ্যাথিক হোমো হোমোলজিকাল হোমটাস্ক হোমধান্য হোমধেনু হোমনা হোমনল হোমপেইজ হোমপেজ হোমবিশেষ হোমরাচোমরা হোমল্যান্ড হোমশিখা হোমস হোর হোরা হোরাবিজ্ঞান হোরি হোল হোলা হোলি হোলিউৎসব হোলিকা হোলী হোল্ডার হোল্ডিং হোল্ডিংস হোল্ডল হোশ হোসেন হোস্টেল হোহু হোহিসি হোহী হোহো হোড় হোয় হোয়াইট হোয়াইটহেড হোয়াইল হোয়াট হোয়ে হোয়েন হোয়েল হোয়ত হোয়ব হোয়বি হোয়ল হৌজ হছরত হৌস হজ হুজুক হুজুকদার হুজুগ হুজুগদার হুজুগপ্রিয় হজিমত হজ্জ হজ্জাম হুজ্জত হুজ্জৎ হুজ্জতি হজ্জব্রত হজ্ব হজব্রত হজম হজমি হজমী হজমশক্তি হুজুর হুজরা হুজুরাইন হুজরাখানা হজরত হট হুট হটুক হটকা হটা হ্যাঁ হ্যাংলা হ্যাংলাপনা হ্যাংলামি হটাই হটাইও হটাইত হটাইতাম হটাইতিস হটাইতে হটাইতেছ হটাইতেছি হটাইতেছিল হটাইতেছিলাম হটাইতেছিলি হটাইতেছিলে হটাইতেছিলেন হটাইতেছিস হটাইতেছে হটাইতেছেন হটাইতেন হটাইব হটাইবার হটাইবি হটাইবে হটাইবেন হটাইল হটাইলাম হটাইলি হটাইলে হটাইলেন হটাইয়া হটাইয়াছ হটাইয়াছি হটাইয়াছিল হটাইয়াছিলাম হটাইয়াছিলি হটাইয়াছিলে হটাইয়াছিলেন হটাইয়াছিস হটাইয়াছে হটাইয়াছেন হটাইয়ো হটাক হ্যাকার হ্যাকিং হ্যাঁগা হ্যাঁগো হ্যাঙ্গাম হ্যাঙ্গামা হ্যাঙলা হ্যাঙলাপনা হ্যাঁচকা হ্যাচারি হ্যাঁচোড়প্যাঁচোড় হটাচ্ছ হটাচ্ছি হটাচ্ছিল হটাচ্ছিলাম হটাচ্ছিলি হটাচ্ছিলে হটাচ্ছিলেন হটাচ্ছিলেম হটাচ্ছিলুম হটাচ্ছিস হটাচ্ছে হটাচ্ছেন হ্যাজাক হ্যাট হ্যাট্রিক হটাত হটাতাম হটাতিস হটাতে হটাতেন হটাতেম হটাতুম হ্যাদান হ্যাদানো হ্যাদে হটান হটানো হ্যান্ড হ্যান্ডিক্যাপ হ্যান্ডিক্যাম হ্যান্ডনোট হ্যান্ডফুল হ্যান্ডবুক হ্যান্ডবিল হ্যান্ডবল হ্যান্ডল হ্যান্ডলুম হ্যাপা হ্যাপাধরা হ্যাপি হ্যাপিনেস হ্যাপ্লয়েড হটাব হটাবার হটাবি হটাবে হটাবেন হটাবো হ্যাঁবোধক হ্যাভারস্যাক হ্যাম হ্যামবার্গার হুটার হ্যারিকেন হ্যাঁরে হটাল হটালাম হটালি হ্যালি হটালে হটালেন হটালেম হ্যালো হ্যালোউইন হ্যালোজেন হটালুম হটাস হ্যাসিয়াম হটি হটিত হটিতাম হটিতিস হটিতে হটিতেছ হটিতেছি হটিতেছিল হটিতেছিলাম হটিতেছিলি হটিতেছিলে হটিতেছিলেন হটিতেছিস হটিতেছে হটিতেছেন হটিতেন হটিব হটিবার হটিবি হটিবে হটিবেন হটিল হটিলাম হটিলি হটিলে হটিলেন হটিস হটিয়া হটিয়াছ হটিয়াছি হটিয়াছিল হটিয়াছিলাম হটিয়াছিলি হটিয়াছিলে হটিয়াছিলেন হটিয়াছিস হটিয়াছে হটিয়াছেন হটিয়ে হটিয়েছ হটিয়েছি হটিয়েছিল হটিয়েছিলাম হটিয়েছিলি হটিয়েছিলে হটিয়েছিলেন হটিয়েছিলেম হটিয়েছিলুম হটিয়েছিস হটিয়েছে হটিয়েছেন হটিয়ো হটে হটেছ হটেছি হটেছিল হটেছিলাম হটেছিলি হটেছিলে হটেছিলেন হটেছিলেম হটেছিলুম হটেছিস হটেছে হটেছেন হটেন হটেনটট হটেননি হটো হুটোপুটি হটছ হটছি হটছিল হটছিলাম হটছিলি হটছিলে হটছিলেন হটছিলেম হটছিলুম হটছিস হটছে হটছেন হট্ট হট্টগোল হট্টবিলাসিনী হট্টমন্দির হটত হটতাম হটতিস হটতে হটতেন হটতেম হটতুম হটুন হটব হটবার হটবি হটবে হটবেন হটবো হযবরল হটমেইল হুযুর হযরত হটল হটলাম হটলি হটলে হটলেন হটলেম হটলো হটলুম হটস্পট হটহট হঠ হঠকারিতা হঠকারিতাপূর্ণ হঠকারী হঠা হঠাৎকার হঠান হঠানো হঠে হঠযোগ হঠযোগী হঠযোগে হঠহঠ হুড হড্ড হড্ডক হড্ডি হড্ডিক হড্ডিপ হূণ হুণ্ড হণ্ডা হণ্ডি হণ্ডিকা হত হুত হূত হৃত হৃৎকম্প হৃৎকমল হতগৌরব হৃতগৌরব হুতাগ্নি হতাদর হৃতাধিকার হতাম হতাশ হুতাশ হতাশা হতাশাগ্রস্ত হতাশাজনক হুতাশী হুতাশন হতাশ্বাস হতাহত হুতি হূতি হতিস হতচকিত হতচেতন হতচ্ছাড়া হতচ্ছাড়ি হতে হতেছে হতেন হতেননা হতেপারে হতেম হতো হতোদ্যম হতোনা হুতোম হুতোমি হুতোমপেঁচা হতোস্মি হতজীব হতজ্ঞান হতটা হত্যা হত্যাকাণ্ড হত্যাকারিণী হত্যাকারী হত্যাযজ্ঞ হত্যাদৃশ্য হত্যাপরাধ হত্যাপুরী হত্যে হৃৎযন্ত্রে হৃৎযন্ত্রণা হত্তুকী হত্তেল হত্তোকী হতত্রপ হতদর্প হতনা হৃৎপিণ্ড হৃৎপেশী হৃৎপতন হৃৎপদ্ম হতপ্রায় হতবাক হতবিহবল হতবুদ্ধি হতবুদ্ধিকর হতবুদ্ধিভাব হতবল হতভাগা হতভাগিনী হতভাগী হতভাগ্য হতভাগ্যা হতভম্ব হতুম হুতুম হতমান হুতুমপেঁচা হতমূর্খ হৃতরাজ্য হতশ্রী হতশ্রদ্ধ হতশ্রদ্ধা হৃৎস্পন্দন হৃতসর্বস্ব হদ হুদ হৃদ হৃদকম্পন হৃদগত হুদাইবিয়া হৃদাকাশ হৃদাসন হৃদি হৃদিপদ্ম হৃদিমন্দির হদিশ হদিস হৃদিসরোবর হদীস হৃদ্য হৃদ্যা হৃদ্যতা হৃদযন্ত্র হদ্দ হুদ্দা হদ্দেশ হুদ্দো হদ্দপাজি হদ্দমুদ্দ হদ্দশিকস্ত হৃদপিণ্ড হৃদপদ্ম হৃদবিদ্যা হৃদরোগ হৃদরোগী হৃদয় হৃদয়গত হৃদয়গ্রাহিতা হৃদয়গ্রাহী হৃদয়গুহা হৃদয়ঘটিত হৃদয়ঙ্গম হৃদয়াবেগ হৃদয়াবেগজনিত হৃদয়েশ হৃদয়েশ্বর হৃদয়জ হৃদয়দৌর্বল্য হৃদয়বান হৃদয়বিদারক হৃদয়বেদন হৃদয়বেদনা হৃদয়বোধ হৃদয়ব্যথা হৃদয়বতী হৃদয়বৃত্তান্ত হৃদয়বৃত্তি হৃদয়বল্লভ হৃদয়বল্লভা হৃদয়ভেদী হৃদয়মাঝে হৃদয়মধ্যে হৃদয়রূপ হৃদয়রূপে হৃদয়শূন্য হৃদয়শূন্যা হৃদয়স্থ হৃদয়হীন হৃদয়হীনা হৃদয়হীনতা হৃদয়হীনভাবে হন হনু হনূ হূন হনিমুন হনে হন্য হন্যা হন্যে হন্যমান হুন্ডি হুন্ডিগ্রাহক হুন্ডিপ্রেরক হন্ডুরাস হন্ত হন্তা হন্তারক হন্তে হন্তদন্ত হন্তব্য হন্ত্রী হন্দর হন্দরপ্রায় হনন হননি হননীয় হন্নে হনফী হনুমান হনূমান হনুমানগড় হনুমানা হনুমানজি হনুমৎ হনূমৎ হুনুর হুনরি হুনুরি হুনরী হনলুলু হনহন হনহনানো হনহনিয়ে হুপ হুপিং হুপো হপ্তা হব হবু হবা হবার হবি হবিগঞ্জ হবিষ্য হবিষ্যান্ন হবিষ্যান্নভোজী হবিষ্যাশী হবিষ্যি হবচন্দ্র হবুচন্দ্র হবে হবেন হবেনা হবো হবোনা হবোহবো হব্য হবন হবনী হবনীয় হবশী হবশীখানা হুবহু হবহব হম হুমকি হুমা হুমায়ুন হুমায়ূন হুমো হম্বা হম্বিতম্বি হম্মাম হুমশব্দ হুমড়ি হর হরু হুর হরওকত হরওক্ত হরকিসিম হরকিসম হরকত হরকৎ হরকরা হরকরার হরকসম হরখ হরগিজ হরগেজ হরগৌরী হরা হ্রাদ হ্রাদিনী হ্রাদী হরাদ্রি হ্রাস হ্রাসকাল হ্রাসকরণ হ্রাসপ্রাপ্ত হ্রাসপ্রাপ্তি হ্রাসবৃদ্ধি হরি হুরি হরিগুণ হরিগুণগান হরিগল হরিচন্দন হরিচরণ হরিজন হরিণ হরিণঘাটা হরিণাক্ষ হরিণাক্ষী হরিণাঙ্ক হরিণী হরিণেরচামড়া হরিণনয়ন হরিণনয়না হরিণবাড়ি হরিণশুমারী হরিত হরিতক হরিতকী হরিতা হরিতাভ হরিতাম হরিতাল হরিতালিকা হরিতালী হরিতাশ্ম হরিতিস হরিতে হরিতেছ হরিতেছি হরিতেছিল হরিতেছিলাম হরিতেছিলি হরিতেছিলে হরিতেছিলেন হরিতেছিস হরিতেছে হরিতেছেন হরিতেন হরিতধান্য হরিদ্বার হরিদ্রা হরিদ্রাঙ্গ হরিদ্রাবর্ণযুক্ত হরিদ্রাভ হরিদশ্ব হরিনাম হরিনারায়ণ হরিপদ হরিপুর হরিপ্রিয়া হরিপ্রেম হরিবাসর হরিবি হরিবে হরিবেন হরিবোল হরিভক্ত হরিভক্তি হরিমটর হরিরামপুর হরিরলুট হরিল হরিলাম হরিলি হরিলে হরিলেন হরিলুট হরিল্লোট হরিল্লুট হরিশ্চন্দ্র হরিষ হরিসংকীর্তন হরিসঙ্কীর্তন হরিসভা হরিহর হরিহরাত্মা হরিয়া হরিয়াছ হরিয়াছি হরিয়াছিল হরিয়াছিলাম হরিয়াছিলি হরিয়াছিলে হরিয়াছিলেন হরিয়াছিস হরিয়াছে হরিয়াছেন হরিয়ানা হরিয়াল হুরী হ্রী হরীতকী হরচূড়ামণি হরে হরেক হরেকরকম হরেছ হরেছি হরেছিল হরেছিলাম হরেছিলি হরেছিলে হরেছিলেন হরেছিলেম হরেছিলুম হরেছিস হরেছে হরেছেন হরেদরে হরেন হ্রেষা হ্রেষাধ্বনি হরছ হরছি হরছিল হরছিলাম হরছিলি হরছিলে হরছিলেন হরছিলেম হরছিলুম হরছিস হরছে হরছেন হরণ হরণকারী হরণকর্তা হরণযোগ্য হরণপূরণ হরত হর্তা হর্তাকর্তা হর্তাকর্তাবিধাতা হরতাম হরতাল হরতিস হরতে হরতেন হরতেম হরতন হরতুম হ্রদ হরদম হর্ন হরপ হরফ হরব হরবকৎ হরবখত হরবার হরবি হরবে হরবেন হরবো হরবোলা হরমোন হরমুজ হর্ম্য হুরমত হুরমতি হর্ম্ম্য হররা হররাশি হররোজ হরল হরলাম হরলাল হরলি হরলে হরলেন হরলেম হরলুম হরষ হর্ষ হর্ষক হরষিত হর্ষিত হর্ষচরিত হর্ষোচ্ছ্বাস হর্ষোৎফুল্ল হর্ষোদয় হর্ষজনক হর্ষযুক্ত হর্ষণ হর্ষদায়ক হর্ষবর্ধন হর্স হ্রস্ব হ্রস্বীকৃত হ্রস্বীকরণ হ্রস্বতা হ্রস্বত্ব হ্রস্বতম হ্রস্বতর হ্রস্বদীর্ঘজ্ঞান হ্রস্বভাবে হ্রস্বমাত্রা হ্রস্বমাত্রাযুক্ত হরহামেশা হল হুল হুলু হূল হলওয়ে হলক হলকা হল্কা হলকাবন্দী হল্কাবন্দী হলকুম হলকর্ষণ হলঘর হলা হুলা হলাগ্র হ্লাদ হ্লাদিত হ্লাদিনী হ্লাদী হ্লাদন হুলানো হলাম হলাহল হলাহলা হুলাহুলি হলায়ুধ হলিউড হলিক্রস হলিডে হুলিয়া হলী হলচালন হলচালনা হলে হলেন হলেম হুলো হলোগ্রাম হল্ট হুলযুক্ত হল্যান্ড হল্টিং হুলথুল হলুদ হলুদকোটা হলুদাভ হলদি হলদিবাড়ি হলদিয়া হলুদিয়া হলদী হলদে হলদেটে হলদণ্ড হলুদপোড়া হলুদবাটা হলুদবিহার হলুদরঙ হুলুধ্বনি হলধর হলন্ত হলপ হলফ হলফান হলভৃৎ হলুম হল্লা হল্লাগাড়ি হুল্লোড় হুলস্থূল হুলহীন হলহল হলহলা হলহলে হুশ হুঁশ হুশিয়ার হুঁশিয়ার হুশিয়ারি হুঁশিয়ারি হুশহুশ হৃষিত হৃষীক হৃষীকেশ হষেছে হৃষ্ট হৃষ্টা হৃষ্টি হৃষ্টচিত্ত হৃষ্টপুষ্ট হৃষ্ঠপৃষ্ট হস হুস হসিত হস্টেল হস্ত হস্তকৌশল হস্তকণ্ডূয়ন হস্তক্ষেপ হস্তক্ষেপণ হস্তগত হস্তগতকরণ হস্তগ্রাহ্য হস্তগ্রহণ হস্তা হস্তাক্ষর হস্তাগ্র হস্তান্তর হস্তান্তরিত হস্তান্তরিতকরণ হস্তান্তরযোগ্য হস্তাবর্তিত হস্তাবর্তন হস্তাবলেপ হস্তামলক হস্তার্পণ হস্তি হস্তিনাপুর হস্তিনী হস্তিপ হস্তী হস্তীকর্ণ হস্তচালিত হস্তচালনা হস্তচ্যুত হস্তীদন্ত হস্তীপক হস্তীপালক হস্তীপর্ণী হস্তীমদ হস্তীমূর্খ হস্তীমল্ল হস্তীশালা হস্তীশুণ্ড হস্ত্যাজীব হস্ত্যারোহ হস্ত্যারোহী হস্ত্যায়ুর্বেদ হস্ত্যশ্ব হস্তত্র হস্তদ্বয় হস্তধারণ হস্তধৃত হস্তনির্মিত হস্তনৈপুণ্য হস্তপ্রমাণ হস্তবিহীন হস্তবুদ হস্তবুদজমা হস্তমৈথুন হস্তরেখা হস্তরূপ হস্তলাঘব হস্তলিখিত হস্তলিপি হস্তলেখ হস্তশিল্প হস্তসিদ্ধি হস্তসঞ্চালন হস্তসূত্র হস্তহীন হসন হসন্ত হসন্তি হসন্তিকা হসপিটাল হসবনছব হসবনসব হসরত হুসহুস হুহু হূহূ হুহুঙ্কার হুড় হুড়ুক হড়কা হুড়কা হড়কাই হড়কাইও হড়কাইত হড়কাইতাম হড়কাইতিস হড়কাইতে হড়কাইতেছ হড়কাইতেছি হড়কাইতেছিল হড়কাইতেছিলাম হড়কাইতেছিলি হড়কাইতেছিলে হড়কাইতেছিলেন হড়কাইতেছিস হড়কাইতেছে হড়কাইতেছেন হড়কাইতেন হড়কাইব হড়কাইবার হড়কাইবি হড়কাইবে হড়কাইবেন হড়কাইল হড়কাইলাম হড়কাইলি হড়কাইলে হড়কাইলেন হড়কাইয়া হড়কাইয়াছ হড়কাইয়াছি হড়কাইয়াছিল হড়কাইয়াছিলাম হড়কাইয়াছিলি হড়কাইয়াছিলে হড়কাইয়াছিলেন হড়কাইয়াছিস হড়কাইয়াছে হড়কাইয়াছেন হড়কাইয়ো হড়কাক হড়কাচ্ছ হড়কাচ্ছি হড়কাচ্ছিল হড়কাচ্ছিলাম হড়কাচ্ছিলি হড়কাচ্ছিলে হড়কাচ্ছিলেন হড়কাচ্ছিলেম হড়কাচ্ছিলুম হড়কাচ্ছিস হড়কাচ্ছে হড়কাচ্ছেন হড়কাত হড়কাতাম হড়কাতিস হড়কাতে হড়কাতেন হড়কাতেম হড়কাতুম হড়কান হড়কানো হড়কাব হড়কাবার হড়কাবি হড়কাবে হড়কাবেন হড়কাবো হড়কাল হড়কালাম হড়কালি হড়কালে হড়কালেন হড়কালেম হড়কালুম হড়কাস হুড়কি হড়কে হড়কেছ হড়কেছি হড়কেছিল হড়কেছিলাম হড়কেছিলি হড়কেছিলে হড়কেছিলেন হড়কেছিলেম হড়কেছিলুম হড়কেছিস হড়কেছে হড়কেছেন হড়কো হুড়কো হুড়া হড়াৎ হড়াস হুড়াহুড়ি হড়িয়াল হুড়ো হুড়োহুড়ি হুড়ুৎ হড়পা হড়পি হড়পী হড়বড় হড়বড়ান হড়বড়ানো হড়বড়ে হুড়ুম হুড়ুমদুড়ুম হড়ম্বর হুড়মুড় হড়হড় হুড়হুড় হড়হড়ানে হড়হড়ে হয় হয়গ্রীব হয়গ্রীবা হুয়া হয়িছে হয়ী হয়ে হয়েইছিল হয়েছ হয়েছি হয়েছিক হয়েছিল হয়েছিলাম হয়েছিলি হয়েছিলে হয়েছিলেন হয়েছিলেম হয়েছিলো হয়েছিলুম হয়েছিস হয়েছে হয়েছেন হয়েযায় হয়েন হয়েনি হয়যে হয়যেমন হয়ত হয়তো হয়তোবা হয়তবা হয়না হয়নি হূয়মান হয়রাণ হয়রান হয়রানি হয়রানী হয়হয়".split(" "),
              w_j: "জ জু জং জংগ জংগধরা জংগনামা জংগল জংগলাকীর্ণ জংগুলে জংধরা জংলা জংলি জংলী জংশন জই জুঁই জইফ জইফিহাল জুঁইফুল জইর জঈফ জউ জউঘর জউহর জও জওজ জওজিয়ত জুওলজিকাল জওশম জওসম জওহেরত জওহর জওয়ান জওয়ানি জওয়াব জকাত জকাতি জুখা জখন জখম জখমি জখমী জগ জুগা জগাইমাধাই জগাখিচুড়ি জগাখিচুড়ী জগাতি জুগান জুগানো জুগিয়ে জুগিয়েছে জগজগ জগজগা জগজিৎ জগজ্জীবন জগজ্জন জগজ্জননী জগজ্জয়ী জগজন জগঝম্প জগত জগৎকারণ জগতকর্তা জগৎকর্তা জগতি জগতী জগতীতল জগৎচন্দ্র জগৎপাতা জগৎপালক জগৎপালিনী জগতপিতা জগৎপিতা জগতপতি জগৎপতি জগতবাসী জগৎবাড়ি জগৎবিখ্যাত জগৎসংসার জগৎসৃষ্টি জগদ্‌গুরু জগদীশ জগদীশ্বর জগদ্দল জগদ্দলন জগদ্ধাত্রী জগদ্ধিতায় জগদ্বাসিনী জগদ্বাসী জগদ্বিখ্যাত জগদ্বিদিত জগদ্বিধাতা জগদ্বিধান জগদ্ব্যাপিনী জগদ্ব্যাপী জগদ্বন্ধু জগদ্বরেণ্য জগদম্বা জগ্ধ জগ্ধতৃণ জগন্নাথ জগন্নাথক্ষেত্র জগন্নাথদেব জগন্নাথধাম জগন্নাথপুর জগন্নাথমন্দির জগন্নিবাস জগন্মাতা জগন্মোহন জগন্মোহনী জগন্মণ্ডল জগন্ময় জগন্ময়ী জুগুপ্সক জুগুপ্সা জুগুপ্সিত জুগুপ্সন জগবন্ধু জগমোহন জুগলার জঘন জঘন্য জঘন্যতা জঘন্যতম জঙ জঙ্গ জঙ্গাল জঙ্গি জঙ্গিবাদ জঙ্গিবাদী জঙ্গিবাহিনী জঙ্গধরা জঙ্গনামা জঙ্গবাজ জঙ্গবারি জঙ্গবাহাদুর জঙ্গবাহাদুরি জঙ্গম জঙ্গমতা জঙ্গমভূত জঙ্গল জঙ্গলগড় জঙ্গলা জঙ্গলাকীর্ণ জঙ্গলি জঙ্গুলে জঙ্গলপূর্ণ জঙ্গলবাড়ি জঙ্গলবুড়ি জঙ্গলময় জঙ্ঘ জঙ্ঘা জঙ্ঘাস্থি জঙধরা জা জাং জাংগাল জাংগুল জাংগুলিক জাংগলী জাংলা জাংড়া জাই জাইগা জাইগীর জাইগীরদার জাইগীরদারি জাইলেম জাউ জাওনা জাওলা জাওয়া জাওয়ান জাওয়ানো জাঁক জাঁকুক জাঁকা জাকাত জাঁকান জাঁকানো জাকারিয়া জাকার্তা জাঁকাল জাঁকালো জাঁকি জাঁকিত জাঁকিতাম জাঁকিতিস জাঁকিতে জাঁকিতেছ জাঁকিতেছি জাঁকিতেছিল জাঁকিতেছিলাম জাঁকিতেছিলি জাঁকিতেছিলে জাঁকিতেছিলেন জাঁকিতেছিস জাঁকিতেছে জাঁকিতেছেন জাঁকিতেন জাঁকিব জাঁকিবার জাঁকিবি জাঁকিবে জাঁকিবেন জাঁকিল জাঁকিলাম জাঁকিলি জাঁকিলে জাঁকিলেন জাঁকিস জাঁকিয়া জাঁকিয়াছ জাঁকিয়াছি জাঁকিয়াছিল জাঁকিয়াছিলাম জাঁকিয়াছিলি জাঁকিয়াছিলে জাঁকিয়াছিলেন জাঁকিয়াছিস জাঁকিয়াছে জাঁকিয়াছেন জাঁকিয়ো জাঁকছ জাঁকছি জাঁকছিল জাঁকছিলাম জাঁকছিলি জাঁকছিলে জাঁকছিলেন জাঁকছিলেম জাঁকছিলুম জাঁকছিস জাঁকছে জাঁকছেন জাঁকজমক জাঁকজমকপূর্ণ জাঁকজমকহীন জাঁকত জাঁকতাম জাঁকতিস জাঁকতে জাঁকতেন জাঁকতেম জাঁকতুম জাঁকুন জাঁকব জাঁকবার জাঁকবি জাঁকবে জাঁকবেন জাঁকবো জাঁকল জাঁকলাম জাঁকলি জাঁকলে জাঁকলেন জাঁকলেম জাঁকলুম জাঁকড় জাঁকড়খাতা জাঁকড়ি জাঁকড়বই জাগ জাগুক জাগগান জাগা জাগাইত জাগাইতাম জাগাইতিস জাগাইতে জাগাইতেছ জাগাইতেছি জাগাইতেছিল জাগাইতেছিলাম জাগাইতেছিলি জাগাইতেছিলে জাগাইতেছিলেন জাগাইতেছিস জাগাইতেছে জাগাইতেছেন জাগাইতেন জাগাইব জাগাইবার জাগাইবি জাগাইবে জাগাইবেন জাগাইল জাগাইলাম জাগাইলি জাগাইলে জাগাইলেন জাগাইয়া জাগাইয়াছ জাগাইয়াছি জাগাইয়াছিল জাগাইয়াছিলাম জাগাইয়াছিলি জাগাইয়াছিলে জাগাইয়াছিলেন জাগাইয়াছিস জাগাইয়াছে জাগাইয়াছেন জাগাইয়ো জাগাক জাগাচ্ছ জাগাচ্ছি জাগাচ্ছিল জাগাচ্ছিলাম জাগাচ্ছিলি জাগাচ্ছিলে জাগাচ্ছিলেন জাগাচ্ছিলেম জাগাচ্ছিলুম জাগাচ্ছিস জাগাচ্ছে জাগাচ্ছেন জাগাত জাগাতা জাগাতাম জাগাতিস জাগাতে জাগাতেন জাগাতেম জাগাতুম জাগান জাগানিয়া জাগানো জাগাব জাগাবার জাগাবি জাগাবে জাগাবেন জাগাবো জাগাল জাগালাম জাগালি জাগালে জাগালেন জাগালেম জাগালো জাগালুম জাগাস জাগি জাগিত জাগিতাম জাগিতিস জাগিতে জাগিতেছ জাগিতেছি জাগিতেছিল জাগিতেছিলাম জাগিতেছিলি জাগিতেছিলে জাগিতেছিলেন জাগিতেছিস জাগিতেছে জাগিতেছেন জাগিতেন জাগিব জাগিবার জাগিবি জাগিবে জাগিবেন জাগির জাগিরদার জাগিরদারি জাগিল জাগিলাম জাগিলি জাগিলে জাগিলেন জাগিস জাগিয়া জাগিয়াছ জাগিয়াছি জাগিয়াছিল জাগিয়াছিলাম জাগিয়াছিলি জাগিয়াছিলে জাগিয়াছিলেন জাগিয়াছিস জাগিয়াছে জাগিয়াছেন জাগিয়ে জাগিয়েছ জাগিয়েছি জাগিয়েছিল জাগিয়েছিলাম জাগিয়েছিলি জাগিয়েছিলে জাগিয়েছিলেন জাগিয়েছিলেম জাগিয়েছিলুম জাগিয়েছিস জাগিয়েছে জাগিয়েছেন জাগিয়ো জাগীর জাগেন জাগো জাগছ জাগছি জাগছিল জাগছিলাম জাগছিলি জাগছিলে জাগছিলেন জাগছিলেম জাগছিলুম জাগছিস জাগছে জাগছেন জাগত জাগতাম জাগতিক জাগতিকজ্ঞান জাগতিস জাগতে জাগতেন জাগতেম জাগতুম জাগুন জাগন্ত জাগব জাগবার জাগবি জাগবে জাগবেন জাগবো জাগর জাগরূক জাগরিত জাগরী জাগরণ জাগরণকারী জাগরণগান জাগরণী জাগরণপর্ব জাগরণমন্ত্র জাগ্রত জাগ্রতকারী জাগ্রতচিত্ত জাগ্রদবস্থা জাগরস্বপ্ন জাগল জাগলাম জাগলি জাগলেন জাগলেম জাগলুম জাগুয়ার জাঙ জাঙ্গ জাঙ্গাল জাঙ্গি জাঙ্গিয়া জাঙ্গল জাঙ্গুল জাঙ্গুলিক জাঙ্গুলী জাঙ্গড়া জাঙিয়া জাজ জাজা জাজাকাল্লাহ জাজিম জাজিরা জাজ্বল্য জাজ্বল্যমান জাজমেন্ট জাট জাযা জাযাকাল্লাহ জাটি জাটতুত জাটতুতো জাঠ জাঠা জাঠি জাঠী জাঠতুত জাঠতুতো জাঠর জাঠশ্বশুর জাড্য জাড্যতা জাত জাঁত জাতক জাতকোপ জাতকৃত্য জাতক্রিয়া জাতক্রোধ জাতকর্ম জাতক্লম জাতগোক্ষুর জাতা জাঁতা জাঁতাকল জাঁতান জাঁতানো জাঁতাপোপা জাতাপত্যা জাতাশৌচ জাতি জাঁতি জাতিকচু জাতিকোষ জাতিকুল জাঁতিকল জাতিকলা জাতিগোষ্ঠী জাতিগত জাতিচ্যুত জাতিচ্যুতা জাতিচ্যুতি জাঁতিছে জাতিজনি জাতিতত্ত্ব জাতিত্ব জাতিধর্ম জাতিধর্মনির্বিশেষে জাতিনাশ জাতিপাত জাতিপুঞ্জ জাতিপত্র জাতিপত্রী জাতিপ্রথা জাতিপুষ্প জাতিফল জাতিফুল জাতিবাচক জাতিবাচিকা জাতিবিচারহীন জাতিবিদ্বেষ জাতিবেল জাতিবৈর জাতিব্যবসা জাতিবর্ণ জাতিবর্ণনির্বিশেষে জাতিভুক্ত জাতিভাই জাতিভেদ জাতিভ্রংশ জাতিভ্রষ্ট জাতিভ্রষ্টা জাতিমারা জাতিরাষ্ট্র জাতিরজনক জাতিরপিতা জাতিসংকর জাতিসংঘ জাতিসঙ্কর জাতিসঙ্ঘ জাতিসঙ্ঘাত জাতিসত্তা জাতিস্মর জাতী জাঁতী জাঁতীকল জাতচক্ষু জাতীয় জাতীয়করণ জাতীয়গ্রন্থাগার জাতীয়া জাতীয়তা জাতীয়তাবাদ জাতীয়তাবাদী জাতীয়তালিকা জাতীয়দিবস জাতীয়ভাব জাতীয়মান জাতীয়সংস্থা জাতীয়সংসদ জাতেওঠা জাতেঠেলা জাতেতোলা জাঁতেপাকা জাতেষ্টি জাতজন্ম জাতজম্ম জাত্য জাত্যংশ জাত্যন্ধ জাত্যন্ধা জাত্যভিমান জাত্যভিমানী জাত্যর্থ জাত্যর্থক জাতধর্ম জাতনেত্র জাতপক্ষ জাতপাত জাতপত্র জাতপুত্র জাতপুত্রা জাতপ্রত্যয় জাতপ্রত্যয়া জাতব্যবসা জাতব্যবহার জাতভাই জাতমাত জাতমাত্র জাতশত্রু জাতশ্মশ্রু জাতশ্রম জাতশ্রমা জাতসংস্কার জাতসাপ জাতস্পৃহ জাতহারিণী জাদ জাদু জাদুকর জাদুকরী জাদুগর জাদুঘর জাদুবিদ্যা জাদুবর্গ জাদুবল জাদুমণি জাদুমন্ত্র জাদুময় জাদুর জাঁদরেল জাঁদরেলি জাদুলাঠি জাদুশক্তি জান জানু জানুআরি জানুক জানকী জানকীরাম জানকবুল জানুগতি জানা জানাঅজানা জানাই জানাইত জানাইতাম জানাইতিস জানাইতে জানাইতেছ জানাইতেছি জানাইতেছিল জানাইতেছিলাম জানাইতেছিলি জানাইতেছিলে জানাইতেছিলেন জানাইতেছিস জানাইতেছে জানাইতেছেন জানাইতেন জানাইব জানাইবার জানাইবি জানাইবে জানাইবেন জানাইল জানাইলাম জানাইলি জানাইলে জানাইলেন জানাইয়া জানাইয়াছ জানাইয়াছি জানাইয়াছিল জানাইয়াছিলাম জানাইয়াছিলি জানাইয়াছিলে জানাইয়াছিলেন জানাইয়াছিস জানাইয়াছে জানাইয়াছেন জানাইয়ো জানাক জানাচ্ছ জানাচ্ছি জানাচ্ছিল জানাচ্ছিলাম জানাচ্ছিলি জানাচ্ছিলে জানাচ্ছিলেন জানাচ্ছিলেম জানাচ্ছিলুম জানাচ্ছিস জানাচ্ছে জানাচ্ছেন জানাজা জানাজানি জানাত জানাতাম জানাতিস জানাতে জানাতেন জানাতেম জানাতুম জানান জানানা জানানো জানাব জানাবার জানাবি জানাবে জানাবেন জানাবো জানামাজ জানামতে জানাল জানালা জানালাম জানালি জানালে জানালেন জানালেম জানালো জানালুম জানাশোনা জানাশুনা জানাস জানায় জানায়া জানায়ে জানায়নি জানি জানিত জানিতাম জানিতিস জানিতে জানিতেছ জানিতেছি জানিতেছিল জানিতেছিলাম জানিতেছিলি জানিতেছিলে জানিতেছিলেন জানিতেছিস জানিতেছে জানিতেছেন জানিতেন জানিদোস্ত জানিদুশমন জানিনা জানিনে জানিব জানিবার জানিবি জানিবে জানিবেন জানিল জানিলাম জানিলি জানিলে জানিলেন জানিস জানিয়া জানিয়াছ জানিয়াছি জানিয়াছিল জানিয়াছিলাম জানিয়াছিলি জানিয়াছিলে জানিয়াছিলেন জানিয়াছিস জানিয়াছে জানিয়াছেন জানিয়ে জানিয়েওছিল জানিয়েছ জানিয়েছি জানিয়েছিল জানিয়েছিলাম জানিয়েছিলি জানিয়েছিলে জানিয়েছিলেন জানিয়েছিলেম জানিয়েছিলুম জানিয়েছিস জানিয়েছে জানিয়েছেন জানিয়েন জানিয়ো জানুচঙ্ক্রমণ জানেইনা জানেন জানেনা জানেননা জানেননি জানেলা জানো জানোস জানোয়ার জানছ জানছি জানছিল জানছিলাম জানছিলি জানছিলে জানছিলেন জানছিলেম জানছিলুম জানছিস জানছে জানছেন জানত জান্তা জানতাম জানতিস জানতে জানতেন জানতেম জানতো জানতোনা জানতপক্ষে জান্তব জানতুম জানুন জান্নাত জান্নাতি জান্নাতুন জান্নাতবাসিনী জান্নাতবাসী জান্নাতুল জান্নত জান্নতবাসিনী জান্নতবাসী জানপদ জানব জানবাচ্ছা জানবার জানবি জানবে জানবেন জানবো জানমান জানমাল জানল জানলা জানলাম জানলি জানলে জানলেন জানলেম জানলো জানলুম জানসি জানুসন্ধি জানুয়ারি জাপ জাপক জাপান জাপানি জাপানিজ জাপানী জাপানীয় জাপ্য জাপটা জাপটাই জাপটাইত জাপটাইতাম জাপটাইতিস জাপটাইতে জাপটাইতেছ জাপটাইতেছি জাপটাইতেছিল জাপটাইতেছিলাম জাপটাইতেছিলি জাপটাইতেছিলে জাপটাইতেছিলেন জাপটাইতেছিস জাপটাইতেছে জাপটাইতেছেন জাপটাইতেন জাপটাইব জাপটাইবার জাপটাইবি জাপটাইবে জাপটাইবেন জাপটাইল জাপটাইলাম জাপটাইলি জাপটাইলে জাপটাইলেন জাপটাইয়া জাপটাইয়াছ জাপটাইয়াছি জাপটাইয়াছিল জাপটাইয়াছিলাম জাপটাইয়াছিলি জাপটাইয়াছিলে জাপটাইয়াছিলেন জাপটাইয়াছিস জাপটাইয়াছে জাপটাইয়াছেন জাপটাইয়ো জাপটাক জাপটাচ্ছ জাপটাচ্ছি জাপটাচ্ছিল জাপটাচ্ছিলাম জাপটাচ্ছিলি জাপটাচ্ছিলে জাপটাচ্ছিলেন জাপটাচ্ছিলেম জাপটাচ্ছিলুম জাপটাচ্ছিস জাপটাচ্ছে জাপটাচ্ছেন জাপটাজাপটি জাপটাত জাপটাতাম জাপটাতিস জাপটাতে জাপটাতেন জাপটাতেম জাপটাতুম জাপটান জাপটানো জাপটাব জাপটাবার জাপটাবি জাপটাবে জাপটাবেন জাপটাবো জাপটাল জাপটালাম জাপটালি জাপটালে জাপটালেন জাপটালেম জাপটালুম জাপটাস জাপটে জাপটেছ জাপটেছি জাপটেছিল জাপটেছিলাম জাপটেছিলি জাপটেছিলে জাপটেছিলেন জাপটেছিলেম জাপটেছিলুম জাপটেছিস জাপটেছে জাপটেছেন জাপটো জাফর জাফরান জাফরানি জাফরানমিশ্রিত জাফরি জাফরিকাটা জাব জাবানি জাবালি জাবিতা জাবিন জাবিনদারি জাবিননামা জাবেদ জাবেদা জাবেদাখাতা জাবেদানকল জাবদা জাব্দা জাবদাআপিল জাব্দাআপিল জাবদাআপীল জাব্দাআপীল জাবদাখাতা জাব্দাখাতা জাবদানকল জাব্দানকল জাবনা জাবর জাবরকাটা জাবরান জাবড় জাবড়া জাবড়ানো জাভা জাভাগাল জাভাদ্বীপ জাভানীয় জাভাস্ক্রিপ্ট জাম জামগাছ জামগাছতলা জামা জামাই জামাইআদর জামাইকা জামাইকান জামাইবাবু জামাইবরণ জামাইষষ্ঠী জামাকাপড় জামাছিঁড়া জামাছেঁড়া জামাজোড়া জামাত জামাতউলা জামাতখানা জামাতৃগৃহ জামাতা জামানা জামানি জামানত জামানতনামা জামাপ্যান্ট জামারছাট জামারছাঁট জামারথান জামাল জামালগঞ্জ জামালপুর জামায়াত জামায়েত জামিউল জামিউস জামিওয়ার জামিন জামিনী জামিনদার জামিনদারি জামিননামা জামিনরূপে জামিনস্বরূপ জামির জামিয়া জামিয়াতুল জামিয়ার জামীর জামীয়ার জামে জামেইকা জামেমসজিদ জামদগ্নেয় জামদগ্ন্য জামদানি জামদানী জামধর জামুন জাম্প জাম্পার জাম্পিং জামফল জাম্বু জামবাটি জাম্বিয়া জাম্বিয়ান জাম্বীর জাম্বুনদ জাম্ববান জাম্বুবান জাম্ববতী জাম্বুরা জামরুদ জামরুল জামশেদপুর জামড়া জামড়ো জার জারক জারুক জারকাটা জারা জারাই জারাইত জারাইতাম জারাইতিস জারাইতে জারাইতেছ জারাইতেছি জারাইতেছিল জারাইতেছিলাম জারাইতেছিলি জারাইতেছিলে জারাইতেছিলেন জারাইতেছিস জারাইতেছে জারাইতেছেন জারাইতেন জারাইব জারাইবার জারাইবি জারাইবে জারাইবেন জারাইল জারাইলাম জারাইলি জারাইলে জারাইলেন জারাইয়া জারাইয়াছ জারাইয়াছি জারাইয়াছিল জারাইয়াছিলাম জারাইয়াছিলি জারাইয়াছিলে জারাইয়াছিলেন জারাইয়াছিস জারাইয়াছে জারাইয়াছেন জারাইয়ো জারাক জারাগোজা জারাচ্ছ জারাচ্ছি জারাচ্ছিল জারাচ্ছিলাম জারাচ্ছিলি জারাচ্ছিলে জারাচ্ছিলেন জারাচ্ছিলেম জারাচ্ছিলুম জারাচ্ছিস জারাচ্ছে জারাচ্ছেন জারাত জারাতাম জারাতিস জারাতে জারাতেন জারাতেম জারাতুম জারান জারানো জারাব জারাবার জারাবি জারাবে জারাবেন জারাবো জারাল জারালাম জারালি জারালে জারালেন জারালেম জারালুম জারাস জারি জারিকৃত জারিগান জারিজোরি জারিজুরি জারিত জারিতকরণ জারিতাম জারিতিস জারিতেছ জারিতেছি জারিতেছিল জারিতেছিলাম জারিতেছিলি জারিতেছিলে জারিতেছিলেন জারিতেছিস জারিতেছে জারিতেছেন জারিতেন জারিব জারিবার জারিবি জারিবে জারিবেন জারিল জারিলাম জারিলি জারিলে জারিলেন জারিস জারিয়া জারিয়াছ জারিয়াছি জারিয়াছিল জারিয়াছিলাম জারিয়াছিলি জারিয়াছিলে জারিয়াছিলেন জারিয়াছিস জারিয়াছে জারিয়াছেন জারিয়ে জারিয়েছ জারিয়েছি জারিয়েছিল জারিয়েছিলাম জারিয়েছিলি জারিয়েছিলে জারিয়েছিলেন জারিয়েছিলেম জারিয়েছিলুম জারিয়েছিস জারিয়েছে জারিয়েছেন জারিয়ো জারী জারীকৃত জারীগান জারেজার জারেন জারছ জারছি জারছিল জারছিলাম জারছিলি জারছিলে জারছিলেন জারছিলেম জারছিলুম জারছিস জারছে জারছেন জারজ জারজা জারজাত জারজার জারণ জারণকারী জারণী জারত জারতাম জারতিস জারতে জারতেন জারতেম জারতুম জারুন জার্নাল জার্নি জারব জারবার জারবি জারবে জারবেন জারবো জার্মান জার্মানি জার্মানভাষী জার্মিনাল জার্মেনিয়াম জারল জারুল জারলাম জারলি জারলে জারলেন জারলেম জারলুম জার্সি জাল জালক জালুক জালকাঠি জালগাঁঠি জালঘেরা জালা জালাতন জালানি জালানে জালানো জালালাবাদ জালালপুর জালায়ন জালি জালিক জালিকা জালিকাকার জালিকী জালিত জালিতাম জালিতিস জালিতে জালিতেছ জালিতেছি জালিতেছিল জালিতেছিলাম জালিতেছিলি জালিতেছিলে জালিতেছিলেন জালিতেছিস জালিতেছে জালিতেছেন জালিতেন জালিব জালিবার জালিবি জালিবে জালিবেন জালিবোট জালিম জালিল জালিলাউ জালিলাম জালিলি জালিলে জালিলেন জালিস জালিয়া জালিয়াছ জালিয়াছি জালিয়াছিল জালিয়াছিলাম জালিয়াছিলি জালিয়াছিলে জালিয়াছিলেন জালিয়াছিস জালিয়াছে জালিয়াছেন জালিয়াত জালিয়াতি জালিয়ানওয়ালাবাগ জালিয়ো জালী জালেন জালেম জালছ জালছি জালছিল জালছিলাম জালছিলি জালছিলে জালছিলেন জালছিলেম জালছিলুম জালছিস জালছে জালছেন জালছেড়া জালছেঁড়া জালজীবী জালটাকা জালত জালতাম জালতি জালতিস জালতে জালতেন জালতেম জালতুম জালদলিল জালুন জালনা জালনাম জালপাতা জালপাদ জালব জালবাজ জালবার জালবি জালবিস্তার জালবে জালবেন জালবো জালবোনা জালবন্দী জালবন্ধ জাল্ম জালল জাললাম জাললি জাললে জাললেন জাললেম জাললুম জালসাজ জালসাজা জালসাজি জালসাজী জালুয়া জাশু জাসু জাস্ট জাস্টিস জাস্তি জাসুস জাহাঙ্গীর জাহাঙ্গীরনগর জাহাজ জাহাজঘাট জাহাজঘাটা জাহাজি জাহাজযোগে জাহাজপুর জাহাজস্টিমার জাহান জাহাঁনিয়া জাহানদার জাহান্দার জাহান্নাম জাহান্নামি জাহান্নামী জাহান্নম জাঁহানপানা জাহাঁপনা জাঁহাপনা জাহাঁবাজ জাঁহাবাজ জাহিদ জাহির জাহিরা জাহিল জাহিলি জাহিলিয়া জাহিলিয়াত জাহের জাহেরা জাহেরি জাহেল জাহেলাত জাহেলিয়াত জাহ্নবী জাড় জাড়কাটা জাড়ানো জাড়ি জাড়ুল জায় জায়ু জায়গা জায়গাজমি জায়গাবদল জায়গির জায়গিরদার জায়গিরদারি জায়গীর জায়গীরদার জায়গীরদারি জায়া জায়াজীব জায়াজীবী জায়ান্ট জায়ান্টস জায়াপতি জায়েজ জায়েদপুর জায়েন্ট জায়ুজব্যাধি জায়দাদ জায়নামাজ জায়ফল জায়বাকি জায়বেজায় জায়বদলি জায়বদলী জায়মান জায়মানা জায়মাফিক জায়সুদি জি জিংক জিংগো জিংগোপনা জিইয়ে জিউ জিউস জিউসপত্নী জিওগ্রাফি জিওগ্রাফিক জিওগ্রাফী জিওফিজিক্যাল জিওল জিওলমাছ জিকির জিকীর জিকের জিকরিয়া জিগা জিগির জিগীর জিগীষু জিগীষা জিগ্যেস জিগমিষু জিগমিষা জিগর জিগরখারা জিগরপস্তানি জিগরপস্তানী জিঘৃক্ষু জিঘৃক্ষা জিঘাংসু জিঘাংসক জিঘাংসা জিঘাংসাবৃত্তি জিঘাংসিত জিঘৎসু জিঘৎসা জিঙ্ক জিঙ্গো জিঙ্গোপনা জিছম জিজু জিজিঁর জিজিয়া জিজিয়াকর জিজীবিষু জিজীবিষা জিজ্ঞাস জিজ্ঞাসু জিজ্ঞাসক জিজ্ঞাসা জিজ্ঞাসাকারী জিজ্ঞাসাবাদ জিজ্ঞাসিত জিজ্ঞাস্য জিজ্ঞাসন জিজ্ঞাসনীয় জিজ্ঞেস জিজ্ঞেসবাদ জিঞ্জার জিঞ্জির জিঞ্জিরা জিঞ্জীর জিডোভুডিন জিত জিতুক জিতা জিতান জিতানো জিতালেন জিতি জিতিত জিতিতাম জিতিতিস জিতিতে জিতিতেছ জিতিতেছি জিতিতেছিল জিতিতেছিলাম জিতিতেছিলি জিতিতেছিলে জিতিতেছিলেন জিতিতেছিস জিতিতেছে জিতিতেছেন জিতিতেন জিতিব জিতিবার জিতিবি জিতিবে জিতিবেন জিতিল জিতিলাম জিতিলি জিতিলে জিতিলেন জিতিস জিতিয়া জিতিয়াছ জিতিয়াছি জিতিয়াছিল জিতিয়াছিলাম জিতিয়াছিলি জিতিয়াছিলে জিতিয়াছিলেন জিতিয়াছিস জিতিয়াছে জিতিয়াছেন জিতিয়ে জিতিয়েছেন জিতিয়ো জিতে জিতেছ জিতেছি জিতেছিল জিতেছিলাম জিতেছিলি জিতেছিলে জিতেছিলেন জিতেছিলেম জিতেছিলুম জিতেছিস জিতেছে জিতেছেন জিতেন জিতেনি জিতেন্দ্র জিতেন্দ্রিয় জিতেন্দ্রিয়তা জিতেননি জিতো জিতছ জিতছি জিতছিল জিতছিলাম জিতছিলি জিতছিলে জিতছিলেন জিতছিলেম জিতছিলুম জিতছিস জিতছে জিতছেন জিতত জিততাম জিততিস জিততে জিততেন জিততেম জিততুম জিতুন জিতব জিতবি জিতবে জিতবেন জিতবো জিতরাজ্য জিতল জিতলাম জিতলি জিতলে জিতলেন জিতলেম জিতলুম জিতশত্রু জিদ জিদাজিদি জিদালো জিদি জিদ্দি জিন জিনগত জিনা জিনাকার জিনাকারি জিনিশ জিনিশপত্র জিনিষ জিনিষপত্র জিনিস জিনিসপাতি জিনিসপত্র জিনিয়া জিনিয়াস জিনোপাসক জিনোম জিনজার জিনতত্ত্ব জিন্দ জিন্দা জিন্দাদিল জিন্দান জিন্দানকুঁয়া জিন্দানখানা জিন্দানবাসী জিন্দাপির জিন্দাপীর জিন্দাবাদ জিন্দিগি জিন্দিগিভর জিন্দেগানি জিন্দেগি জিন্দেগিভর জিন্দেগী জিন্দেগীভর জিন্নাত জিন্নাৎ জিন্নাতুন জিন্নাতবাসিনী জিন্নাতবাসী জিন্নাতুলবাকিয়া জিন্নাহ জিনপ্রযুক্তি জিনবিদ্যা জিনম জিনস জিপ জিপগাড়ি জিপসি জিব জিবআলগা জিবেগজা জিবছোলা জিবুতি জিবরাইল জিবরাঈল জিবরীল জিভ জিভআলগা জিভেজল জিভছোলা জিম জিমখানা জিমেইল জিমনাস্টিক জিমনেশিয়াম জিমন্যাস্টিকস জিম্বাবুইয়ান জিম্বাবুয়ে জিম্মা জিম্মাদার জিম্মাদারি জিম্মি জির জিরক জিরকোনিয়াম জিরকন জিরক্স জিরগা জির্গা জিরা জিরাইত জিরাইতাম জিরাইতিস জিরাইতে জিরাইতেছ জিরাইতেছি জিরাইতেছিল জিরাইতেছিলাম জিরাইতেছিলি জিরাইতেছিলে জিরাইতেছিলেন জিরাইতেছিস জিরাইতেছে জিরাইতেছেন জিরাইতেন জিরাইব জিরাইবার জিরাইবি জিরাইবে জিরাইবেন জিরাইল জিরাইলাম জিরাইলি জিরাইলে জিরাইলেন জিরাইয়া জিরাইয়াছ জিরাইয়াছি জিরাইয়াছিল জিরাইয়াছিলাম জিরাইয়াছিলি জিরাইয়াছিলে জিরাইয়াছিলেন জিরাইয়াছিস জিরাইয়াছে জিরাইয়াছেন জিরাইয়ো জিরাক জিরাত জিরাতি জিরান জিরানকাট জিরানো জিরাফ জিরাবো জিরামরিচ জিরাস জিরি জিরিস জিরিয়ে জিরিয়েছ জিরিয়েছি জিরিয়েছিল জিরিয়েছিলাম জিরিয়েছিলি জিরিয়েছিলে জিরিয়েছিলেন জিরিয়েছিলেম জিরিয়েছিলুম জিরিয়েছিস জিরিয়েছে জিরিয়েছেন জিরিয়ো জিরচ্ছ জিরচ্ছি জিরচ্ছিল জিরচ্ছিলাম জিরচ্ছিলি জিরচ্ছিলে জিরচ্ছিলেন জিরচ্ছিলেম জিরচ্ছিলুম জিরচ্ছিস জিরচ্ছে জিরচ্ছেন জিরে জিরেন জিরেমরিচ জিরো জিরজির জিরজিরা জিরজিরে জিরত জিরতাম জিরতিস জিরতে জিরতেন জিরতেম জিরতুম জিরন জিরনো জিরব জিরবার জিরবি জিরবে জিরবেন জিরবো জিরল জিরলাম জিরলি জিরলে জিরলেন জিরলেম জিরলুম জিরস জিল জিলকি জিলগর জিলা জিলাদার জিলানী জিলাপি জিলিপি জিলেট জিলেটিন জিলদ জিলদগর জিল্লত জিল্লৎ জিল্লতি জিল্লতী জিল্লুর জিশু জিশুখ্রিস্ট জিষ্ণু জিসম জিহ জিহাদ জিহাদি জিহি জিহীর্ষু জিহীর্ষা জিহ্বা জিহ্বাকণ্ডূয়ন জিহ্বাগ্র জিহ্বাগ্রজ জিহ্বাগ্রবর্তী জিহ্বাজাত জিহ্বাপ্রান্ত জিহ্বাফলক জিহ্বাফলকীয় জিহ্বামুখ জিহ্বামূল জিহ্বামূলীয় জিয়া জিয়াদা জিয়াদতি জিয়ানো জিয়াপুতি জিয়াপুতী জিয়াফত জিয়ারি জিয়ারী জিয়ারত জিয়ারতকারী জিয়োনো জিয়ন জিয়নকাঠি জিয়নো জিয়ন্ত জিয়ল জিয়লমাছ জী জীউ জুচ্চুরি জীন জীনগত জীনতত্ত্ব জীপ জীপগাড়ি জীব জীবক জীবকুল জীবাণু জীবাণুঘটিত জীবাণুনাশ জীবাণুনাশক জীবাণুনাশী জীবাণুবাহী জীবাণুমুক্ত জীবাতু জীবাত্মা জীবান্তক জীবাবশেষ জীবাশ্ম জীবাশ্মবিজ্ঞান জীবাশ্মবিদ্যা জীবিকা জীবিকানির্বাহ জীবিকার্জন জীবিকাহীন জীবিত জীবিতকাল জীবিতা জীবিতাবস্থা জীবিতেশ জীবিতেশ্বর জীবিতনাথ জীবিতপ্রাণী জীবিতসর্বস্ব জীবী জীবীকার জীবজগত জীবজগৎ জীবজাত জীবজন্তু জীবজন্ম জীবজল জীবৎকাল জীবতারা জীবতত্ত্ব জীবতত্ত্বজ্ঞ জীবতত্ত্ববিদ জীবদেহ জীবদ্দশা জীবধাত্রী জীবধন জীবধর্ম জীবন জীবনকাল জীবনকাহিনী জীবনকীর্তি জীবনকথা জীবনকর্তন জীবনক্ষুধা জীবনাচরণ জীবনাদর্শ জীবনাধিক জীবনাধিকা জীবনান্ত জীবনানন্দ জীবনাবধি জীবনাবসান জীবনালেখ্য জীবনাশঙ্কা জীবনী জীবনচক্র জীবনচরিত জীবনীশক্তি জীবনেতিবৃত্ত জীবনোচ্ছ্বাস জীবনোপায় জীবনজিজ্ঞাসা জীবনযাত্রা জীবনযাপন জীবনযৌবন জীবন্ত জীবন্তিকা জীবনত্যাগ জীবনতৃষা জীবনতৃষ্ণা জীবনদান জীবনদায়ক জীবনদায়িনী জীবনদায়ী জীবনদর্শন জীবনধারা জীবনধারণ জীবননগর জীবননাট্যশালা জীবননাথ জীবননাশ জীবননাশক জীবনপথ জীবনপ্রবাহ জীবনবাদী জীবনবিজ্ঞান জীবনবীমা জীবনবেদ জীবনবোধ জীবনব্যাপী জীবনবৃত্তান্ত জীবনবল্লভ জীবনবল্লভা জীবনভোর জীবনভর জীবন্মুক্ত জীবন্মুক্তি জীবনমুখী জীবন্মৃত জীবনরক্ষক জীবনরক্ষা জীবনরূপ জীবনলাভ জীবনসংকট জীবনসংগ্রাম জীবনসঙ্গিনী জীবনসঙ্গী জীবনসীমা জীবনসঞ্চার জীবনসহচর জীবনসহচরী জীবনহানি জীবনহত জীবপ্রজাতি জীববিজ্ঞান জীববিজ্ঞানী জীববিদ্যা জীববিবর্তন জীববলি জীবমণ্ডল জীবরহস্য জীবলীলা জীবলোক জীবশক্তি জীবশাস্ত্র জীবসংগ্রহ জীবসমষ্টি জীবহিংসা জীবহত্যা জীমূত জীমূতনাদ জীমূতবাহী জীমূতবাহন জীমূতমন্দ্র জীমূতরাবিনী জীমূতরাবী জীরক জীরা জীর্ণ জীর্ণকারী জীর্ণকড়ি জীর্ণগ্রন্থ জীর্ণা জীর্ণোদ্ধার জীর্ণজ্বর জীর্ণতা জীর্ণদেহ জীর্ণদশা জীর্ণবস্ত্র জীর্ণবস্ত্রাদি জীর্ণবসন জীর্ণশীর্ণ জীর্ণসংস্কার জীহা জীহুজুর জীহ্যাঁ জীয়ান জীয়ানকাঠি জীয়ানো জীয়ন জীয়নকাঠি জীয়ন্ত জীয়ল জেঅর জেওচ জেওর জেওরাত জেকিল জেঁকে জেঁকেছ জেঁকেছি জেঁকেছিল জেঁকেছিলাম জেঁকেছিলি জেঁকেছিলে জেঁকেছিলেন জেঁকেছিলেম জেঁকেছিলুম জেঁকেছিস জেঁকেছে জেঁকেছেন জেকের জেঁকো জেগে জেগেছ জেগেছি জেগেছিল জেগেছিলাম জেগেছিলি জেগেছিলে জেগেছিলেন জেগেছিলেম জেগেছিলুম জেগেছিস জেগেছে জেগেছেন জেগো জোট জেঁচ জেজুনাম জেজুরি জেট জেটইঞ্জিন জেটি জেটপাইলট জেটপ্লেন জেঠ জেঠা জেঠাই জেঠাইমা জেঠাত জেঠাতো জেঠামি জেঠামো জেঠি জেঠিমা জেঠী জেঠতুত জেঠতুতো জেঠশাশুড়ি জেঠশ্বশুর জেড জেডাই জেত জেতা জেতান জেতানো জেতে জেতেন জেতেনি জেতবার জেতব্য জেত্রী জেদ জেদাজিদি জেদাজেদি জেদালো জেদি জেদ্দা জেন জেনুইন জেনা জেনাকার জেনাকারি জেনানা জেনারেটর জেনারেল জেনারেশান জেনারেশন জেনিথ জেনিরো জেনে জেনেছ জেনেছি জেনেছিল জেনেছিলাম জেনেছিলি জেনেছিলে জেনেছিলেন জেনেছিলেম জেনেছিলুম জেনেছিস জেনেছে জেনেছেন জেনেটিক্স জেনেভা জেনেরো জেনেশুনে জেনেসিস জেনো জেনোফোন জেনোয়া জেন্টামাইসিন জেন্টলি জেন্টলম্যান জেন্ডার জেন্দ জেন্দা জেন্দাগানী জেন্দাদিল জেন্দান জেন্দাপীর জেন্দাবেস্তা জেনদেন জেব জেবঘড়ি জেব্রা জেবলি জেম্মা জেম্মাদার জেম্মাদারি জেমস জেমসটাউন জের জেরক্স জেরা জেরাকারী জেরাত জেরাল্ড জেরি জেরিকো জেরেছ জেরেছি জেরেছিল জেরেছিলাম জেরেছিলি জেরেছিলে জেরেছিলেন জেরেছিলেম জেরেছিলুম জেরেছিস জেরেছে জেরেছেন জেরেমি জেরুজালেম জেরটানা জেরদস্ত জেরপ্থ্যালমিয়া জেরবার জেরল্ড জেল জেলখানা জেলখালাসি জেলগেট জেলা জেলাপরিষদ জেলাবোর্ড জেলার জেলাশাসক জেলাশহর জেলাস্কুল জেলাস্তর জেলাসদর জেলি জেলিফিশ জেলিসদৃশ জেলিয়া জেলে জেলেছ জেলেছি জেলেছিল জেলেছিলাম জেলেছিলি জেলেছিলে জেলেছিলেন জেলেছিলেম জেলেছিলুম জেলেছিস জেলেছে জেলেছেন জেলেডিঙ্গি জেলেনি জেলেপাড়া জেলদ জেলদগর জেলদারোগা জেলফেরত জেলফেরতা জেল্লা জেল্লাই জেল্লাদার জেল্লত জেল্লৎ জেলহত্যা জেসাস জেসম জেসমিন জেহাদ জেহাদি জেহেন জেহেল জেয় জেঁয়াচ জেয়াদা জেয়াফত জেয়াফৎ জেয়ারত জৈছন জৈৎ জৈতুন জৈতুনি জৈতুনী জৈত্র জৈত্রি জৈত্রী জৈন জৈন্তাপুর জৈনধর্ম জৈনপুরী জৈব জৈবগ্যাস জৈবিক জৈবজ্বালানী জৈবযৌগ জৈবধর্ম জৈবন জৈবনিক জৈবপদার্থ জৈবপ্রযুক্তি জৈবপ্রযুক্তিবিদ্যা জৈববৈচিত্র জৈবরাসায়নিক জৈবরসায়ন জৈবসংশ্লেষণ জৈবসার জৈমিনি জৈমিনিদর্শন জৈমিনিভারত জৈমিনিমুনি জো জোক জোঁক জোকা জোঁকা জোকাজুঁকি জোঁকাজুঁকি জোকার জোঁকার জোকস জোখ জোখা জোঁখা জোঁখাজুঁকি জোগাতে জোগান জোগানিয়া জোগানো জোগানদার জোগানবর্ধক জোগানরেখা জোগাবে জোগালে জোগাড় জোগাড়ি জোগাড়িয়া জোগাড়ে জোগাড়যন্ত্র জোচ্চোর জোচ্চুরি জোচ্চুরিপনা জোছনা জোছনাকুমারী জোঝা জোঝাজুঝি জোট জোটগঠন জোটা জোটাক জোটাচ্ছ জোটাচ্ছি জোটাচ্ছিল জোটাচ্ছিলাম জোটাচ্ছিলি জোটাচ্ছিলে জোটাচ্ছিলেন জোটাচ্ছিলেম জোটাচ্ছিলুম জোটাচ্ছিস জোটাচ্ছে জোটাচ্ছেন জোটাজোট জোটাত জোটাতাম জোটাতিস জোটাতে জোটাতেন জোটাতেম জোটাতুম জোটান জোটানো জোটাব জোটাবার জোটাবি জোটাবে জোটাবেন জোটাবো জোটাল জোটালাম জোটালি জোটালে জোটালেন জোটালেম জোটালুম জোটাস জোটে জোটেন জোটেবুড়ি জোটনিরপেক্ষ জোটনিরপেক্ষতা জোটপাকানো জোটপাট জোটবার জোটবদ্ধ জোটবদ্ধতা জোটবদ্ধভবন জোটবহির্ভূত জোটভুক্ত জোটভাঙা জোটসঙ্গী জোত জোতা জোতান জোতানো জোতেন জোতজমা জোতজমি জোত্তর জোতদার জোতদারি জোতবার জোত্র জোতস্বত্ব জোদা জোঁদা জোন জোনাকি জোনাকিপোকা জোনাব জোনাল জোন্দা জোন্স জোব্বা জোবড়া জোবড়ানো জোর জোরু জোরওয়ার জোরকদম জোরকপাল জোরকলম জোরগলা জোরা জোরাজোরি জোরাজুরি জোরানো জোরাল জোরালো জোরেশোরে জোরজার জোরজারি জোরজবরি জোরজবরদস্তি জোরজুলুম জোরযুক্ত জোরতলব জোরদার জোরপূর্বক জোরবার জোরবরাত জোরসে জোরহুকুম জোল জোলা জোলান জোলানি জোলাপ জোলাব জোলায়খা জোলি জোলেখা জোলো জোশ জোশিলা জোস জোসেফ জোসো জোহুকুম জোহানসবার্গ জোহার জোহর জোহরা জোড় জোড়কলম জোড়া জোড়াইত জোড়াইতাম জোড়াইতিস জোড়াইতে জোড়াইতেছ জোড়াইতেছি জোড়াইতেছিল জোড়াইতেছিলাম জোড়াইতেছিলি জোড়াইতেছিলে জোড়াইতেছিলেন জোড়াইতেছিস জোড়াইতেছে জোড়াইতেছেন জোড়াইতেন জোড়াইব জোড়াইবার জোড়াইবি জোড়াইবে জোড়াইবেন জোড়াইল জোড়াইলাম জোড়াইলি জোড়াইলে জোড়াইলেন জোড়াইয়া জোড়াইয়াছ জোড়াইয়াছি জোড়াইয়াছিল জোড়াইয়াছিলাম জোড়াইয়াছিলি জোড়াইয়াছিলে জোড়াইয়াছিলেন জোড়াইয়াছিস জোড়াইয়াছে জোড়াইয়াছেন জোড়াইয়ো জোড়াক জোড়াগরু জোড়াচ্ছ জোড়াচ্ছি জোড়াচ্ছিল জোড়াচ্ছিলাম জোড়াচ্ছিলি জোড়াচ্ছিলে জোড়াচ্ছিলেন জোড়াচ্ছিলেম জোড়াচ্ছিলুম জোড়াচ্ছিস জোড়াচ্ছে জোড়াচ্ছেন জোড়াত জোড়াতাম জোড়াতালি জোড়াতাড়া জোড়াতিস জোড়াতে জোড়াতেন জোড়াতেম জোড়াতুম জোড়ান জোড়ানো জোড়াপাঁঠা জোড়াব জোড়াবার জোড়াবি জোড়াবিহীন জোড়াবে জোড়াবেন জোড়াবো জোড়াবৃত্ত জোড়ামুখ জোড়াল জোড়ালাম জোড়ালি জোড়ালে জোড়ালেন জোড়ালেম জোড়ালুম জোড়াশব্দ জোড়াস জোড়াসাঁকো জোড়েন জোড়েরপায়রা জোড়তাড় জোড়তোড় জোড়ন জোড়বার জোড়বিজোড় জোড়ভাঙা জোড়মেলা জোড়সংখ্যা জোড়হাত জোড়হীন জোয়ান জোয়ানকি জোয়ানি জোয়ানী জোয়ানো জোয়ানমর্দ জোয়ার জোয়ারি জোয়ারদার জোয়ারভাটা জোয়াল জৌ জৌলুশ জৌলুষ জৌলুস জজ জুজ জুজু জজকোর্ট জজগিরি জজান জজানো জজিরা জজিরাতুল জজিয়তি জুজুৎসু জুজদান জজপণ্ডিত জজবা জুজবন্দী জুজুবুড়ি জুজুবুড়ী জুজুরভয় জুঝা জুঝাজুঝি জুঝান জুঝানো জুঝারু জ্ঞা জ্ঞাত জ্ঞাতকারী জ্ঞাতকরণ জ্ঞাতা জ্ঞাতার্থে জ্ঞাতি জ্ঞাতিকুটুম্ব জ্ঞাতিকুল জ্ঞাতিগোত্র জ্ঞাতিগোষ্ঠী জ্ঞাতিত্ব জ্ঞাতিবাচক জ্ঞাতিভাই জ্ঞাততৃষ্ণা জ্ঞাতব্য জ্ঞাতব্যা জ্ঞাত্রী জ্ঞাতসারে জ্ঞাতসিদ্ধান্ত জ্ঞান জ্ঞানকাণ্ড জ্ঞানকারিণী জ্ঞানকোষ জ্ঞানকৃত জ্ঞানগোচর জ্ঞানগৌরব জ্ঞানগম্য জ্ঞানগম্যি জ্ঞানগম্মি জ্ঞানগরিমা জ্ঞানগর্ভ জ্ঞানাকর জ্ঞানাঙ্কুর জ্ঞানাঙ্কুশ জ্ঞানাঞ্জন জ্ঞানাতীত জ্ঞানান্ধতা জ্ঞানান্বেষণ জ্ঞানানুরাগ জ্ঞানানুসন্ধান জ্ঞানাভাব জ্ঞানাভ্যাস জ্ঞানার্জন জ্ঞানার্জনী জ্ঞানালঙ্কার জ্ঞানী জ্ঞানীকুল জ্ঞানচক্ষু জ্ঞানীগুণী জ্ঞানচন্দ্র জ্ঞানচর্চা জ্ঞানেন্দ্রিয় জ্ঞানোদয় জ্ঞানজ্যেষ্ঠ জ্ঞানযুক্ত জ্ঞানযোগ জ্ঞানত জ্ঞানতাপস জ্ঞানতত্ত্ব জ্ঞানতত্ত্বীয় জ্ঞানতৃষা জ্ঞানতৃষ্ণা জ্ঞানদ জ্ঞানদগ্ধ জ্ঞানদা জ্ঞানদাতা জ্ঞানদাত্রী জ্ঞানদান জ্ঞানদানকারী জ্ঞানদাস জ্ঞানদায়ক জ্ঞানদায়িনী জ্ঞাননিষ্ঠ জ্ঞানপাপী জ্ঞানপিপাসু জ্ঞানপিপাসা জ্ঞানপীঠ জ্ঞানপবন জ্ঞানপ্রাপ্ত জ্ঞানপূর্ণ জ্ঞানবাদ জ্ঞানবাদী জ্ঞানবান জ্ঞানবিজ্ঞান জ্ঞানবিদ্যা জ্ঞানবিদ্যাদি জ্ঞানবিস্তার জ্ঞানবীর জ্ঞানবেত্তা জ্ঞানব্যাপী জ্ঞানবতী জ্ঞানবৃদ্ধ জ্ঞানবন্ত জ্ঞানবর্জিত জ্ঞানভাণ্ডার জ্ঞানমানস জ্ঞানমার্গ জ্ঞানমার্গীয় জ্ঞানমাহাত্ম জ্ঞানময় জ্ঞানরূপ জ্ঞানলাভ জ্ঞানলিপ্সা জ্ঞানলীন জ্ঞানশক্তি জ্ঞানশক্তিহীন জ্ঞানশালী জ্ঞানশিষ্য জ্ঞানশূন্য জ্ঞানসাধ্য জ্ঞানসাধন জ্ঞানসঞ্চার জ্ঞানস্বরূপ জ্ঞানসমৃদ্ধ জ্ঞানসম্পন্ন জ্ঞানহারা জ্ঞানহীন জ্ঞানহীনতা জ্ঞানহত জ্ঞানহর জ্ঞাপক জ্ঞাপিত জ্ঞাপন জ্ঞাপনকারী জ্ঞাপনাত্মক জ্ঞাপনার্থ জ্ঞাপনীয় জ্ঞাপয়িতা জ্ঞাপয়িত্রী জ্ঞেয় জঞ্জাল জঞ্জালকণা জঞ্জালাদি জঞ্জালতুল্য জঞ্জালপূর্ণ জঞ্জালমুক্ত জট জুট জূট জুটক জুটুক জটা জুটা জ্যা জুটাইত জুটাইতাম জুটাইতিস জুটাইতে জুটাইতেছ জুটাইতেছি জুটাইতেছিল জুটাইতেছিলাম জুটাইতেছিলি জুটাইতেছিলে জুটাইতেছিলেন জুটাইতেছিস জুটাইতেছে জুটাইতেছেন জুটাইতেন জুটাইব জুটাইবার জুটাইবি জুটাইবে জুটাইবেন জুটাইল জুটাইলাম জুটাইলি জুটাইলে জুটাইলেন জুটাইয়া জুটাইয়াছ জুটাইয়াছি জুটাইয়াছিল জুটাইয়াছিলাম জুটাইয়াছিলি জুটাইয়াছিলে জুটাইয়াছিলেন জুটাইয়াছিস জুটাইয়াছে জুটাইয়াছেন জুটাইয়ো জুটাক জ্যাক জ্যাকেট জ্যাকপট জ্যাঘাত জটাচীর জ্যাজ জটাজাল জটাজুট জটাযুক্ত জটাযুক্তা জ্যাঠ জ্যাঠা জ্যাঠাইমা জ্যাঠামি জ্যাঠামো জ্যাঠামশাই জটাধারিণী জটাধারী জটাধর জটাধরা জুটান জ্যানির্ঘোষ জ্যানেট জুটানো জ্যান্ত জ্যাম জটামাংসী জ্যামাইকা জ্যামিতি জ্যামিতিক জ্যামিতিকধারা জ্যামিতিজ্ঞ জ্যামিতিবিদ জ্যামিতিবিদ্যা জ্যামিতিশাস্ত্র জ্যামিতীয় জটারাশি জ্যারোপণ জটাল জ্যালজেলে জ্যালজ্যাল জুটাস জটায়ু জ্যায়ান জুটি জুটিত জুটিতাম জুটিতিস জুটিতে জুটিতেছ জুটিতেছি জুটিতেছিল জুটিতেছিলাম জুটিতেছিলি জুটিতেছিলে জুটিতেছিলেন জুটিতেছিস জুটিতেছে জুটিতেছেন জুটিতেন জুটিব জুটিবার জুটিবি জুটিবে জুটিবেন জটিবুড়ি জযিরা জযিরাতুল জটিল জুটিল জটিলা জুটিলাম জুটিলি জুটিলে জুটিলেন জটিলতা জটিলতাপূর্ণ জটিলতর জটিলপ্রশ্ন জটিলব্যাপার জটিলসংখ্যা জুটিস জুটিয়া জুটিয়াছ জুটিয়াছি জুটিয়াছিল জুটিয়াছিলাম জুটিয়াছিলি জুটিয়াছিলে জুটিয়াছিলেন জুটিয়াছিস জুটিয়াছে জুটিয়াছেন জুটিয়ে জুটিয়েছ জুটিয়েছি জুটিয়েছিল জুটিয়েছিলাম জুটিয়েছিলি জুটিয়েছিলে জুটিয়েছিলেন জুটিয়েছিলেম জুটিয়েছিলুম জুটিয়েছিস জুটিয়েছে জুটিয়েছেন জুটিয়ো জটী জুটী জুটচ্ছ জুটচ্ছি জুটচ্ছিল জুটচ্ছিলাম জুটচ্ছিলি জুটচ্ছিলে জুটচ্ছিলেন জুটচ্ছিলেম জুটচ্ছিলুম জুটচ্ছিস জুটচ্ছে জুটচ্ছেন জ্যোতিশ্চক্র জ্যোৎস্না জুটেছ জুটেছি জুটেছিল জুটেছিলাম জুটেছিলি জুটেছিলে জুটেছিলেন জুটেছিলেম জুটেছিলুম জুটেছিস জুটেছে জুটেছেন জ্যেঠ জুটেন জটেবুড়ি জুটেবুড়ি জ্যেষ্ঠ জ্যেষ্ঠা জ্যেষ্ঠাধিকার জ্যেষ্ঠাম্বু জ্যেষ্ঠাশ্রম জ্যেষ্ঠাশ্রমী জ্যেষ্ঠী জ্যেষ্ঠতা জ্যেষ্ঠতাত জ্যেষ্ঠত্ব জ্যেষ্ঠপুত্র জ্যেষ্ঠভ্রাতা জ্যৈষ্ঠ জ্যৈষ্ঠমাস জ্যৈষ্ঠমধু জুটো জ্যোতি জ্যোতিঃ জ্যোতিঃশাস্ত্র জ্যোতির্গতিবিজ্ঞান জ্যোতির্গতিবিদ্যা জ্যোতিরিঙ্গ জ্যোতিরিঙ্গণ জ্যোতিরত্ন জ্যোতির্পদার্থবিজ্ঞান জ্যোতির্বিজ্ঞান জ্যোতির্বিজ্ঞানী জ্যোতির্বিৎ জ্যোতির্বিদ জ্যোতির্বিদ্যা জ্যোতির্বেত্তা জ্যোতির্বৈজ্ঞানিক জ্যোতির্বলয় জ্যোতির্মিতি জ্যোতির্মিতীয় জ্যোতির্মণ্ডল জ্যোতির্ময় জ্যোতির্ময়ী জ্যোতিশ্চন্দ্র জ্যোতিষ জ্যোতিষ্ক জ্যোতিষ্কপুঞ্জ জ্যোতিষ্কমণ্ডল জ্যোতিষ্কমণ্ডলী জ্যোতিষগণনা জ্যোতিষিক জ্যোতিষী জ্যোতিষবিচার জ্যোতিষবিদ্যা জ্যোতিষ্মান জ্যোতিষ্মতী জ্যোতিষ্মত্তা জ্যোতিষশাস্ত্র জ্যোতিষশাস্ত্রজ্ঞ জ্যোতিষশাস্ত্রবিশারদ জ্যোৎস্না জ্যোৎস্নাময় জ্যোৎস্নাময়ী জ্যোনি জুটছ জুটছি জুটছিল জুটছিলাম জুটছিলি জুটছিলে জুটছিলেন জুটছিলেম জুটছিলুম জুটছিস জুটছে জুটছেন জুটত জুটতাম জুটতিস জুটতে জুটতেন জুটতেম জুটতুম জুটন জুটুন জুটনো জুটব জুটবার জুটবি জুটবে জুটবেন জুটবো জুটমিল জটুল জুটল জটলা জুটলাম জুটলি জুটলেন জুটলেম জুটলুম জটল্লা জুটস জুঠা জঠর জঠরাগ্নি জঠরানল জঠরাময় জঠরজ্বালা জঠরযন্ত্রণা জঠরবাস জঠরস্থ জুডাস জুডিথ জুডিশিয়াল জুডো জডুল জণি জণ্ডিস জতু জুত জতুক জুতক জুতুক জতুগৃহ জুতা জুতাইত জুতাইতাম জুতাইতিস জুতাইতে জুতাইতেছ জুতাইতেছি জুতাইতেছিল জুতাইতেছিলাম জুতাইতেছিলি জুতাইতেছিলে জুতাইতেছিলেন জুতাইতেছিস জুতাইতেছে জুতাইতেছেন জুতাইতেন জুতাইব জুতাইবার জুতাইবি জুতাইবে জুতাইবেন জুতাইল জুতাইলাম জুতাইলি জুতাইলে জুতাইলেন জুতাইয়া জুতাইয়াছ জুতাইয়াছি জুতাইয়াছিল জুতাইয়াছিলাম জুতাইয়াছিলি জুতাইয়াছিলে জুতাইয়াছিলেন জুতাইয়াছিস জুতাইয়াছে জুতাইয়াছেন জুতাইয়ো জুতাক জুতাজুতি জুতান জুতানো জুতাপেটা জুতামারা জুতাস জুতাসেলাই জুতি জুতিত জুতিতাম জুতিতিস জুতিতে জুতিতেছ জুতিতেছি জুতিতেছিল জুতিতেছিলাম জুতিতেছিলি জুতিতেছিলে জুতিতেছিলেন জুতিতেছিস জুতিতেছে জুতিতেছেন জুতিতেন জুতিপেটা জুতিব জুতিবার জুতিবি জুতিবে জুতিবেন জুতিল জুতিলাম জুতিলি জুতিলে জুতিলেন জুতিস জুতিয়া জুতিয়াছ জুতিয়াছি জুতিয়াছিল জুতিয়াছিলাম জুতিয়াছিলি জুতিয়াছিলে জুতিয়াছিলেন জুতিয়াছিস জুতিয়াছে জুতিয়াছেন জুতিয়ে জুতিয়েছ জুতিয়েছি জুতিয়েছিল জুতিয়েছিলাম জুতিয়েছিলি জুতিয়েছিলে জুতিয়েছিলেন জুতিয়েছিলেম জুতিয়েছিলুম জুতিয়েছিস জুতিয়েছে জুতিয়েছেন জুতিয়ো জুতচ্ছ জুতচ্ছি জুতচ্ছিল জুতচ্ছিলাম জুতচ্ছিলি জুতচ্ছিলে জুতচ্ছিলেন জুতচ্ছিলেম জুতচ্ছিলুম জুতচ্ছিস জুতচ্ছে জুতচ্ছেন জুতে জুতেছ জুতেছি জুতেছিল জুতেছিলাম জুতেছিলি জুতেছিলে জুতেছিলেন জুতেছিলেম জুতেছিলুম জুতেছিস জুতেছে জুতেছেন জুতেন জুতো জুতোজোড়া জুতোজুতি জুতোপেটা জুতোমারা জুতোমোজা জুতোসেলাই জুতছ জুতছি জুতছিল জুতছিলাম জুতছিলি জুতছিলে জুতছিলেন জুতছিলেম জুতছিলুম জুতছিস জুতছে জুতছেন জুতত জুততাম জুততিস জুততে জুততেন জুততেম জুততুম জুতন জুতুন জুতনো জুতব জুতবার জুতবি জুতবে জুতবেন জুতবো জত্রু জতুরাগ জতুরস জুতল জুতলাম জুতলি জুতলে জুতলেন জুতলেম জুতলুম জুতস জুতসই জুতয় জুতুয়া জুদা জুদাই জুদাজুদা জদ্দজেহাদ জন জনু জনূ জুন জনঅরণ্য জনক জনকাত্মজা জনকজননী জনকঝিয়ারী জনকণ্ঠ জনকতা জনকতনয়া জনকদুহিতা জনকনন্দিনী জনকবংশ জনকরাজা জনকল্যাণ জনকল্যাণকর জনকল্যাণমুখী জনক্ষয় জনকসুতা জনগোষ্ঠী জনগণ জনগণনা জনঘনত্ব জনা জনাকীর্ণ জনাকতক জনাকয়েক জনাজা জনাজাত জনাজুটি জনাতিগ জনান্ত জনান্তিক জনাপবাদ জনাব জনার জনারণ্য জনার্দন জনাশ্রয় জনি জুনি জনিকা জনিত জনিতা জনিত্র জনিত্রী জুনিপোকা জুনিয়ার জুনিয়র জুনিয়রবৃত্তি জনী জনচক্ষু জনীন জনেক জনৈক জনৈকা জনজাতি জনজীবন জনজৌলুস জন্য জনযোগাযোগ জনযুদ্ধ জন্ডিস জন্তু জনতা জনতাকাতর জনতাকীর্ণ জনতাদল জনতাময় জন্তুজাত জন্তুজানোয়ার জন্তুদ্বীপ জনতন্ত্র জনদর্পণ জনন জননকোষ জননক্ষমতা জননাঙ্গ জন্নাত জননান্তর জননাশৌচ জননায়ক জননিরাপত্তা জননী জননীয় জননেতা জননেন্দ্রিয় জননযোগ্য জননযন্ত্র জননতন্ত্র জননরস জননশক্তি জনপাদ জনপথ জনপদ জনপ্রাণী জনপরিবহন জনপরিসংখ্যান জনপ্রিয় জনপ্রিয়করণ জনপ্রিয়তা জনপ্রিয়তম জনপূর্ণ জনপ্রতি জনপ্রতিনিধি জনপ্রতিনিধিসভা জনপ্রবাদ জনপ্রশাসন জনবাদ জনবিন্যাস জনবিরল জনবিস্ফোরণ জনবল জনবল্লভ জনবসতি জনবসতিপূর্ণ জনবসতিসম্পন্ন জনবসতিহীন জনবহুল জনবহুলতম জনভূয়িষ্ঠ জনম জন্ম জন্মএয়ো জন্মএয়োতি জন্মুক জন্মকাল জন্মকালীন জন্মকোষ্ঠী জন্মকুণ্ডলী জন্মকর্ম জন্মক্ষেত্র জন্মক্ষণ জন্মকুঁড়ে জনমুখ জন্মগণনা জন্মগত জন্মগ্রহ জন্মগ্রহণ জন্মগ্রহণকারী জন্মঘটিত জন্মা জন্মাইত জন্মাইতাম জন্মাইতিস জন্মাইতে জন্মাইতেছ জন্মাইতেছি জন্মাইতেছিল জন্মাইতেছিলাম জন্মাইতেছিলি জন্মাইতেছিলে জন্মাইতেছিলেন জন্মাইতেছিস জন্মাইতেছে জন্মাইতেছেন জন্মাইতেন জন্মাইব জন্মাইবার জন্মাইবি জন্মাইবে জন্মাইবেন জন্মাইল জন্মাইলাম জন্মাইলি জন্মাইলে জন্মাইলেন জন্মাইয়া জন্মাইয়াছ জন্মাইয়াছি জন্মাইয়াছিল জন্মাইয়াছিলাম জন্মাইয়াছিলি জন্মাইয়াছিলে জন্মাইয়াছিলেন জন্মাইয়াছিস জন্মাইয়াছে জন্মাইয়াছেন জন্মাইয়ো জন্মাক জন্মাচ্ছ জন্মাচ্ছি জন্মাচ্ছিল জন্মাচ্ছিলাম জন্মাচ্ছিলি জন্মাচ্ছিলে জন্মাচ্ছিলেন জন্মাচ্ছিলেম জন্মাচ্ছিলুম জন্মাচ্ছিস জন্মাচ্ছে জন্মাচ্ছেন জন্মাঞ্চল জন্মাত জন্মাতাম জন্মাতিস জন্মাতে জন্মাতেন জন্মাতেম জন্মাতুম জন্মাধিকার জন্মান জন্মানো জন্মান্তর জন্মান্তরীণ জন্মান্তরবাদ জন্মান্ধ জনমানব জনমানবিক জনমানবরহিত জনমানবশূন্য জনমানুষ জন্মাব জন্মাবার জন্মাবি জন্মাবচ্ছিন্ন জন্মাবচ্ছেদ জন্মাবে জন্মাবেন জন্মাবো জন্মাবধি জন্মাল জন্মালাম জন্মালি জন্মালে জন্মালেন জন্মালেম জন্মালুম জন্মাষ্টমী জন্মাস জন্মায়নি জন্মি জন্মিত জন্মিতাম জনমিতি জনমিতিবিদ জন্মিতিস জন্মিতে জন্মিতেছ জন্মিতেছি জন্মিতেছিল জন্মিতেছিলাম জন্মিতেছিলি জন্মিতেছিলে জন্মিতেছিলেন জন্মিতেছিস জন্মিতেছে জন্মিতেছেন জন্মিতেন জন্মিব জন্মিবার জন্মিবি জন্মিবে জন্মিবেন জন্মিল জন্মিলাম জন্মিলি জন্মিলে জন্মিলেন জন্মিস জন্মিয়া জন্মিয়াছ জন্মিয়াছি জন্মিয়াছিল জন্মিয়াছিলাম জন্মিয়াছিলি জন্মিয়াছিলে জন্মিয়াছিলেন জন্মিয়াছিস জন্মিয়াছে জন্মিয়াছেন জন্মিয়ো জন্মচক্র জন্মচিহ্ন জন্মে জন্মেছ জন্মেছি জন্মেছিল জন্মেছিলাম জন্মেছিলি জন্মেছিলে জন্মেছিলেন জন্মেছিলেম জন্মেছিলো জন্মেছিলুম জন্মেছিস জন্মেছে জন্মেছেন জনমেজয় জন্মেজয় জন্মেন জন্মেন্দ্রিয় জন্মেরমত জন্মেরশোধ জন্মো জন্মোৎসব জন্মজন্মান্তর জন্মজন্মান্তরীণ জন্মজন্মান্তরে জনমজুর জন্মজরা জন্মজয়ন্তী জনমত জন্মতারিখ জন্মতিথি জন্মতত্ত্ব জন্মতপস্বিনী জন্মদ জন্মদুঃখিনী জন্মদুঃখী জনমদুখিনী জন্মদা জন্মদাতা জন্মদাত্রী জন্মদান জন্মদানকারী জন্মদায়ক জন্মদিন জন্মদিবস জনমন জন্মনক্ষত্র জন্মনাম জন্মনিরোধ জন্মনিয়ন্ত্রণ জন্মপত্র জন্মপত্রিকা জন্মপ্রাপ্ত জন্মপরিগ্রহ জন্মপ্রমানপত্র জন্মবংশ জন্মবার্ষিকী জন্মবাসর জন্মবছর জন্মবৃত্তান্ত জন্মবর্ষ জন্মভূমি জন্মমাত্র জন্মমাস জন্মমৃত্যু জন্মমুহূর্ত জন্মরাত্রি জন্মরাশি জন্মরোগী জনমর্দ জন্মরহস্য জন্মলগ্ন জন্মলাভ জন্মশোধ জন্মশতবার্ষিকী জন্মশত্রু জন্মসাল জন্মসূত্র জন্মস্থান জন্মস্থল জন্মসময় জন্মহার জন্মহীন জন্মহেতু জনরুচি জনরোষ জনরব জনলোক জনশক্তি জনশিক্ষা জনশূন্য জনশ্রুত জনশ্রুতি জনসংখ্যা জনসংখ্যাতত্ত্ব জনসংখ্যাবৃদ্ধি জনসংঘ জনসংযোগ জনসংভরণ জনসংস্কৃতি জনসংহতি জনসঙ্ঘ জনসাধারণ জনসচেতনতা জনসেবা জনস্থান জনস্বার্থ জনস্বাস্থ্য জনসভা জনসমক্ষে জনসমাগম জনসমাজ জনসমাবেশ জনসমুদ্র জনসম্ভরণ জনসম্মুখ জনসমর্থন জনসমষ্টি জনস্রোত জনহানি জনহিত জনহিতকর জনহিতৈষী জনহীন জনহীনতা জনয়িতা জনয়িত্রী জপ জপুক জপকারী জপকাল জপকরণ জপা জপাইত জপাইতাম জপাইতিস জপাইতে জপাইতেছ জপাইতেছি জপাইতেছিল জপাইতেছিলাম জপাইতেছিলি জপাইতেছিলে জপাইতেছিলেন জপাইতেছিস জপাইতেছে জপাইতেছেন জপাইতেন জপাইব জপাইবার জপাইবি জপাইবে জপাইবেন জপাইল জপাইলাম জপাইলি জপাইলে জপাইলেন জপাইয়া জপাইয়াছ জপাইয়াছি জপাইয়াছিল জপাইয়াছিলাম জপাইয়াছিলি জপাইয়াছিলে জপাইয়াছিলেন জপাইয়াছিস জপাইয়াছে জপাইয়াছেন জপাইয়ো জপাক জপাচ্ছ জপাচ্ছি জপাচ্ছিল জপাচ্ছিলাম জপাচ্ছিলি জপাচ্ছিলে জপাচ্ছিলেন জপাচ্ছিলেম জপাচ্ছিলুম জপাচ্ছিস জপাচ্ছে জপাচ্ছেন জপাত জপাতাম জপাতিস জপাতে জপাতেন জপাতেম জপাতুম জপান জপানো জপাব জপাবার জপাবি জপাবে জপাবেন জপাবো জপাল জপালাম জপালি জপালে জপালেন জপালেম জপালুম জপাস জপি জুপি জুপিটার জপিত জপিতাম জপিতিস জপিতে জপিতেছ জপিতেছি জপিতেছিল জপিতেছিলাম জপিতেছিলি জপিতেছিলে জপিতেছিলেন জপিতেছিস জপিতেছে জপিতেছেন জপিতেন জপিব জপিবার জপিবি জপিবে জপিবেন জপিল জপিলাম জপিলি জপিলে জপিলেন জপিস জপিয়া জপিয়াছ জপিয়াছি জপিয়াছিল জপিয়াছিলাম জপিয়াছিলি জপিয়াছিলে জপিয়াছিলেন জপিয়াছিস জপিয়াছে জপিয়াছেন জপিয়ে জপিয়েছ জপিয়েছি জপিয়েছিল জপিয়েছিলাম জপিয়েছিলি জপিয়েছিলে জপিয়েছিলেন জপিয়েছিলেম জপিয়েছিলুম জপিয়েছিস জপিয়েছে জপিয়েছেন জপিয়ো জপেছ জপেছি জপেছিল জপেছিলাম জপেছিলি জপেছিলে জপেছিলেন জপেছিলেম জপেছিলুম জপেছিস জপেছে জপেছেন জপেন জপো জপছ জপছি জপছিল জপছিলাম জপছিলি জপছিলে জপছিলেন জপছিলেম জপছিলুম জপছিস জপছে জপছেন জপ্য জপযজ্ঞ জপত জপতাম জপতিস জপতে জপতেন জপতেম জপতপ জপতুম জপতহি জপন জপুন জপনা জপনিরতা জপনীয় জপব জপবার জপবি জপবে জপবেন জপবো জপমালা জপমন্ত্র জপরূপ জপল জপলাম জপলি জপলে জপলেন জপলেম জপলুম জব জবা জবাই জবাকুসুমসঙ্কাশ জবাগাছ জবান জবানি জবানী জবানছাড়া জবানবন্দি জবানবন্দিনবিশ জবানবন্দী জবাফুল জবাব জবাবি জবাবী জবাবদিহি জবাবদিহিতা জবাবশূন্য জবাবসূচক জ্বাল জ্বালুক জ্বালা জ্বালাইত জ্বালাইতাম জ্বালাইতিস জ্বালাইতে জ্বালাইতেছ জ্বালাইতেছি জ্বালাইতেছিল জ্বালাইতেছিলাম জ্বালাইতেছিলি জ্বালাইতেছিলে জ্বালাইতেছিলেন জ্বালাইতেছিস জ্বালাইতেছে জ্বালাইতেছেন জ্বালাইতেন জ্বালাইব জ্বালাইবার জ্বালাইবি জ্বালাইবে জ্বালাইবেন জ্বালাইল জ্বালাইলাম জ্বালাইলি জ্বালাইলে জ্বালাইলেন জ্বালাইয়া জ্বালাইয়াছ জ্বালাইয়াছি জ্বালাইয়াছিল জ্বালাইয়াছিলাম জ্বালাইয়াছিলি জ্বালাইয়াছিলে জ্বালাইয়াছিলেন জ্বালাইয়াছিস জ্বালাইয়াছে জ্বালাইয়াছেন জ্বালাইয়ো জ্বালাক জ্বালাচ্ছ জ্বালাচ্ছি জ্বালাচ্ছিল জ্বালাচ্ছিলাম জ্বালাচ্ছিলি জ্বালাচ্ছিলে জ্বালাচ্ছিলেন জ্বালাচ্ছিলেম জ্বালাচ্ছিলুম জ্বালাচ্ছিস জ্বালাচ্ছে জ্বালাচ্ছেন জ্বালাযন্ত্রণা জ্বালাত জ্বালাতাম জ্বালাতিস জ্বালাতে জ্বালাতেন জ্বালাতেম জ্বালাতন জ্বালাতনকারী জ্বালাতুম জ্বালাদায়ক জ্বালান জ্বালানি জ্বালানিরূপে জ্বালানির্বাপণ জ্বালানিয়া জ্বালানী জ্বালানো জ্বালাব জ্বালাবার জ্বালাবি জ্বালাবে জ্বালাবেন জ্বালাবো জ্বালাবোধ জ্বালাভাব জ্বালামুখ জ্বালামুখী জ্বালাময় জ্বালাময়ী জ্বালাল জ্বালালাম জ্বালালি জ্বালালে জ্বালালেন জ্বালালেম জ্বালালুম জ্বালাস জ্বালি জ্বালিত জ্বালিতাম জ্বালিতিস জ্বালিতে জ্বালিতেছ জ্বালিতেছি জ্বালিতেছিল জ্বালিতেছিলাম জ্বালিতেছিলি জ্বালিতেছিলে জ্বালিতেছিলেন জ্বালিতেছিস জ্বালিতেছে জ্বালিতেছেন জ্বালিতেন জ্বালিব জ্বালিবার জ্বালিবি জ্বালিবে জ্বালিবেন জ্বালিল জ্বালিলাম জ্বালিলি জ্বালিলে জ্বালিলেন জ্বালিস জ্বালিয়া জ্বালিয়াছ জ্বালিয়াছি জ্বালিয়াছিল জ্বালিয়াছিলাম জ্বালিয়াছিলি জ্বালিয়াছিলে জ্বালিয়াছিলেন জ্বালিয়াছিস জ্বালিয়াছে জ্বালিয়াছেন জ্বালিয়ে জ্বালিয়েছ জ্বালিয়েছি জ্বালিয়েছিল জ্বালিয়েছিলাম জ্বালিয়েছিলি জ্বালিয়েছিলে জ্বালিয়েছিলেন জ্বালিয়েছিলেম জ্বালিয়েছিলুম জ্বালিয়েছিস জ্বালিয়েছে জ্বালিয়েছেন জ্বালিয়ো জ্বালেন জ্বালেশ্বর জ্বালো জ্বালছ জ্বালছি জ্বালছিল জ্বালছিলাম জ্বালছিলি জ্বালছিলে জ্বালছিলেন জ্বালছিলেম জ্বালছিলুম জ্বালছিস জ্বালছে জ্বালছেন জ্বালত জ্বালতাম জ্বালতি জ্বালতিস জ্বালতে জ্বালতেন জ্বালতেম জ্বালতুম জ্বালুন জ্বালব জ্বালবান জ্বালবার জ্বালবি জ্বালবে জ্বালবেন জ্বালবো জ্বালল জ্বাললাম জ্বাললি জ্বাললে জ্বাললেন জ্বাললেম জ্বাললুম জুবিলি জুবিলী জ্বিহাদ জ্বিহাদী জবে জ্বেলে জ্বেলেছ জ্বেলেছি জ্বেলেছিল জ্বেলেছিলাম জ্বেলেছিলি জ্বেলেছিলে জ্বেলেছিলেন জ্বেলেছিলেম জ্বেলেছিলুম জ্বেলেছিস জ্বেলেছে জ্বেলেছেন জ্বেলো জবেহ জ্বেহাদ জ্বোরো জবজব জবুথবু জবুথুবু জব্দ জুব্বা জব্বার জব্বর জবর জবুর জ্বর জবরখবর জ্বরগ্রস্ত জ্বরঘ্ন জ্বরাক্রান্ত জ্বরাক্রান্তা জ্বরাগ্নি জ্বরাতিসার জ্বরাতীসার জ্বরাতুরা জ্বরাদি জবরানো জ্বরান্তক জ্বরি জ্বরিত জ্বরী জ্বরেরধাক্কা জ্বরজারি জ্বরজ্বালা জ্বরজ্বর জবরজুলুম জ্বরযুক্ত জ্বরঠুঁটো জবুরূদ জবরদখল জবরদখলী জবরদার জবরদস্ত জবরদস্তি জবর্দস্তি জবরদস্তী জ্বরনামা জ্বরনাশ জ্বরনাশক জ্বরনাশকারী জ্বরপীড়িতা জ্বরবিকার জ্বরভাব জ্বরভোগ জবরভুল জ্বরমুক্ত জ্বল জ্বলুক জ্বলা জ্বলাইত জ্বলাইতাম জ্বলাইতিস জ্বলাইতে জ্বলাইতেছ জ্বলাইতেছি জ্বলাইতেছিল জ্বলাইতেছিলাম জ্বলাইতেছিলি জ্বলাইতেছিলে জ্বলাইতেছিলেন জ্বলাইতেছিস জ্বলাইতেছে জ্বলাইতেছেন জ্বলাইতেন জ্বলাইব জ্বলাইবার জ্বলাইবি জ্বলাইবে জ্বলাইবেন জ্বলাইল জ্বলাইলাম জ্বলাইলি জ্বলাইলে জ্বলাইলেন জ্বলাইয়া জ্বলাইয়াছ জ্বলাইয়াছি জ্বলাইয়াছিল জ্বলাইয়াছিলাম জ্বলাইয়াছিলি জ্বলাইয়াছিলে জ্বলাইয়াছিলেন জ্বলাইয়াছিস জ্বলাইয়াছে জ্বলাইয়াছেন জ্বলাইয়ো জ্বলাক জ্বলাচ্ছ জ্বলাচ্ছি জ্বলাচ্ছিল জ্বলাচ্ছিলাম জ্বলাচ্ছিলি জ্বলাচ্ছিলে জ্বলাচ্ছিলেন জ্বলাচ্ছিলেম জ্বলাচ্ছিলুম জ্বলাচ্ছিস জ্বলাচ্ছে জ্বলাচ্ছেন জ্বলাত জ্বলাতাম জ্বলাতিস জ্বলাতে জ্বলাতেন জ্বলাতেম জ্বলাতুম জ্বলান জ্বলানো জ্বলাব জ্বলাবার জ্বলাবি জ্বলাবে জ্বলাবেন জ্বলাবো জ্বলাল জ্বলালাম জ্বলালি জ্বলালে জ্বলালেন জ্বলালেম জ্বলালুম জ্বলাস জ্বলি জ্বলিত জ্বলিতাম জ্বলিতিস জ্বলিতে জ্বলিতেছ জ্বলিতেছি জ্বলিতেছিল জ্বলিতেছিলাম জ্বলিতেছিলি জ্বলিতেছিলে জ্বলিতেছিলেন জ্বলিতেছিস জ্বলিতেছে জ্বলিতেছেন জ্বলিতেন জ্বলিব জ্বলিবার জ্বলিবি জ্বলিবে জ্বলিবেন জ্বলিল জ্বলিলাম জ্বলিলি জ্বলিলে জ্বলিলেন জ্বলিস জ্বলিয়া জ্বলিয়াছ জ্বলিয়াছি জ্বলিয়াছিল জ্বলিয়াছিলাম জ্বলিয়াছিলি জ্বলিয়াছিলে জ্বলিয়াছিলেন জ্বলিয়াছিস জ্বলিয়াছে জ্বলিয়াছেন জ্বলিয়ে জ্বলিয়েছ জ্বলিয়েছি জ্বলিয়েছিল জ্বলিয়েছিলাম জ্বলিয়েছিলি জ্বলিয়েছিলে জ্বলিয়েছিলেন জ্বলিয়েছিলেম জ্বলিয়েছিলুম জ্বলিয়েছিস জ্বলিয়েছে জ্বলিয়েছেন জ্বলিয়ো জ্বলেছ জ্বলেছি জ্বলেছিল জ্বলেছিলাম জ্বলেছিলি জ্বলেছিলে জ্বলেছিলেন জ্বলেছিলেম জ্বলেছিলুম জ্বলেছিস জ্বলেছে জ্বলেছেন জ্বলেন জ্বলো জ্বলছ জ্বলছি জ্বলছিল জ্বলছিলাম জ্বলছিলি জ্বলছিলে জ্বলছিলেন জ্বলছিলেম জ্বলছিলুম জ্বলছিস জ্বলছে জ্বলছেন জ্বলজ্বল জ্বলজ্বলন্ত জ্বলত জ্বলতাম জ্বলতিস জ্বলতে জ্বলতেন জ্বলতেম জ্বলতুম জ্বলতঁহি জ্বলদগ্নি জ্বলদর্চি জ্বলদর্চিরেখা জ্বলদর্চিশিখা জ্বলন জ্বলুন জ্বলুনি জ্বলনোন্মুখ জ্বলন্ত জ্বলন্তঅক্ষর জ্বলন্তআগুন জ্বলন্তনিদর্শন জ্বলন্তভাষা জ্বলনশীল জ্বলব জ্বলবার জ্বলবি জ্বলবে জ্বলবেন জ্বলবো জ্বলল জ্বললাম জ্বললি জ্বললেন জ্বললেম জ্বললুম জবস জবহ জবড় জুবড়ানো জুবড়ি জবড়জং জবড়জঙ্গ জুভেন্টাস জম জুম জুমআবাদ জমক জমুক জমকান জমকানো জমকাল জমকালো জমা জুমা জমাইত জমাইতাম জমাইতিস জমাইতে জমাইতেছ জমাইতেছি জমাইতেছিল জমাইতেছিলাম জমাইতেছিলি জমাইতেছিলে জমাইতেছিলেন জমাইতেছিস জমাইতেছে জমাইতেছেন জমাইতেন জমাইব জমাইবার জমাইবি জমাইবে জমাইবেন জমাইল জমাইলাম জমাইলি জমাইলে জমাইলেন জমাইয়া জমাইয়াছ জমাইয়াছি জমাইয়াছিল জমাইয়াছিলাম জমাইয়াছিলি জমাইয়াছিলে জমাইয়াছিলেন জমাইয়াছিস জমাইয়াছে জমাইয়াছেন জমাইয়ো জমাওয়াশিল জমাওয়াসিল জমাক জমাখারিজ জমাখরচ জমাগুজস্তা জুমাঘর জমাচ্ছ জমাচ্ছি জমাচ্ছিল জমাচ্ছিলাম জমাচ্ছিলি জমাচ্ছিলে জমাচ্ছিলেন জমাচ্ছিলেম জমাচ্ছিলুম জমাচ্ছিস জমাচ্ছে জমাচ্ছেন জমাজমি জমাট জমাটদই জমাটবদ্ধ জমাত জমাতাম জমাতিস জমাতেন জমাতেম জমাতুম জমাদার জমাদারনি জমাদিউল জমাদিউস জমান জমানা জমানি জমানো জমানত জমানবিশ জমানবিস জমানবীশ জমানবীস জমাব জমাবার জুমাবার জমাবি জমাবে জমাবেন জমাবো জমাবন্দি জমাবন্দী জমাল জমালাম জমালি জমালে জমালেন জমালেম জমালুম জমাস জমায় জমায়েত জমায়েতখানা জমায়েতবস্ত জমি জমিজায়গা জমিজায়দাদ জমিজিরাত জমিজিরাৎ জমিজেরাত জমিজমা জমিজরিপ জমিজরিপকারী জমিত জমিতাম জমিতিস জমিতে জমিতেছ জমিতেছি জমিতেছিল জমিতেছিলাম জমিতেছিলি জমিতেছিলে জমিতেছিলেন জমিতেছিস জমিতেছে জমিতেছেন জমিতেন জমিদার জমিদারি জমিদারী জমিদারতন্ত্র জমিদারবাড়ি জমিন জমিব জমিবার জমিবি জমিবে জমিবেন জমিল জমিলাম জমিলি জমিলে জমিলেন জমিস জমিয়া জমিয়াছ জমিয়াছি জমিয়াছিল জমিয়াছিলাম জমিয়াছিলি জমিয়াছিলে জমিয়াছিলেন জমিয়াছিস জমিয়াছে জমিয়াছেন জমিয়ে জমিয়েছ জমিয়েছি জমিয়েছিল জমিয়েছিলাম জমিয়েছিলি জমিয়েছিলে জমিয়েছিলেন জমিয়েছিলেম জমিয়েছিলুম জমিয়েছিস জমিয়েছে জমিয়েছেন জমিয়ো জুমচাষ জমে জমেছ জমেছি জমেছিল জমেছিলাম জমেছিলি জমেছিলে জমেছিলেন জমেছিলেম জমেছিলুম জমেছিস জমেছে জমেছেন জমছ জমছি জমছিল জমছিলাম জমছিলি জমছিলে জমছিলেন জমছিলেম জমছিলুম জমছিস জমছে জমছেন জমজম জমজমা জমজমাট জমজমি জমত জমতাম জমতিস জমতে জমতেন জমতেম জমতুম জমদগ্নি জমুন জমপেশ জম্পেশ জমব জম্বু জম্বূ জম্বুক জম্বূক জমবার জমবি জম্বির জম্বীর জমবে জমবেন জমবো জম্বুদ্বীপ জম্বুনদ জম্বুরা জৃম্ভ জৃম্ভক জৃম্ভকাস্ত্র জৃম্ভা জৃম্ভিত জৃম্ভণ জৃম্ভণকারক জৃম্ভণযুক্ত জৃম্ভমাণ জম্মু জুম্মা জুম্মাঘর জুম্মামসজিদ জমরদ জমরুদ জমরুদি জমররুদ জমররুদি জমল জুমলা জমলাম জমলি জমলে জমলেন জমলেম জমলুম জমশেদপুর জমহুরিয়াত জরু জরূ জরকশি জরা জরাইত জরাইতাম জরাইতিস জরাইতে জরাইতেছ জরাইতেছি জরাইতেছিল জরাইতেছিলাম জরাইতেছিলি জরাইতেছিলে জরাইতেছিলেন জরাইতেছিস জরাইতেছে জরাইতেছেন জরাইতেন জুরাইন জরাইব জরাইবার জরাইবি জরাইবে জরাইবেন জরাইল জরাইলাম জরাইলি জরাইলে জরাইলেন জরাইয়া জরাইয়াছ জরাইয়াছি জরাইয়াছিল জরাইয়াছিলাম জরাইয়াছিলি জরাইয়াছিলে জরাইয়াছিলেন জরাইয়াছিস জরাইয়াছে জরাইয়াছেন জরাইয়ো জরাক জরাগ্রস্ত জরাগ্রস্তা জরাচ্ছ জরাচ্ছি জরাচ্ছিল জরাচ্ছিলাম জরাচ্ছিলি জরাচ্ছিলে জরাচ্ছিলেন জরাচ্ছিলেম জরাচ্ছিলুম জরাচ্ছিস জরাচ্ছে জরাচ্ছেন জরাজীর্ণ জরাজনিত জরাত জরাতাম জরাতিস জরাতে জরাতেন জরাতেম জরাতুম জরান জরানো জরাব জরাবার জরাবি জরাবে জরাবেন জরাবো জরারহিত জরাল জরালাম জরালি জরালে জরালেন জরালেম জরালুম জরাশূন্য জরাস জুরাস জরাসা জুরাসিক জরাসিদ্ধি জরাসন্ধ জরাহীন জরায়ু জরায়ুজ জরি জুরি জরিওয়ালা জুরিখ জরিযুক্ত জরিদার জরিন জরিনগুল জরিপ জরিপআমিন জরিপকার জরিপকারী জরিপি জরিমানা জরিষ্ণু জরিয়ে জরিয়েছ জরিয়েছি জরিয়েছিল জরিয়েছিলাম জরিয়েছিলি জরিয়েছিলে জরিয়েছিলেন জরিয়েছিলেম জরিয়েছিলুম জরিয়েছিস জরিয়েছে জরিয়েছেন জরিয়ো জুরী জরীদার জরীন জরীপ জর্জ জর্জওয়াশিংটন জরুজাত জরূজাত জর্জি জর্জিয়া জর্জিয়ান জর্জীয় জরজেট জর্জেট জর্জেস জর্জটাউন জরজর জর্জর জর্জরিত জর্জরিতা জর্জরীকৃত জর্জরীভূত জর্জরীভূতা জর্ডান জর্ডানি জর্ডন জরৎ জরৎকারু জরতারি জরতী জরথুস্ত জরদ জরদা জর্দা জরদাপোলাও জর্দাপোলাও জরদোজ জরদোজি জরম জর্ম জরুর জরুরি জরুরিকথা জরুরিতলব জরুরিয়ত জরুরী জরুরত জল জুল জুলু জলংগা জলই জলুই জলউঁচু জলওয়া জলকুক্কুট জলকুক্কুটী জলকাক জলকাদা জলকান্দা জলকেলি জলকণা জলকণ্টক জলকুণ্ড জলকন্যা জলকুন্তল জলকপাট জলকবঞ্চ জলকর জলক্রীড়া জলকূর্ম জলকলরব জলকল্লোল জলকষ্ট জলখাবার জলখেলা জলখরচ জলগালা জলগণ্ডূষ জলগর্ভ জলগর্ভা জলগ্রহণ জলগৃহ জলঘড়ি জলঙ্গা জলা জুলাই জলাচরণীয় জলাজঙ্গল জলাজায়গা জলাজমি জলাঞ্জলি জলাতঙ্ক জলাত্যয় জলাদি জলাধার জলাধিপ জলাধিপতি জুলাপ জলাবদ্ধ জলাবদ্ধতা জলাবর্ত জলাভাব জলাভূমি জলার্দ্র জলাশয় জলাশয়াদি জলাসার জলি জুলি জুলিয়াস জুলিয়েট জুলী জলচক্র জলচারিণী জলচারী জলচিত্র জলচৌকি জলচর জলচরী জলচল জলীয় জলীয়বাষ্প জলেরদাম জলেশ জলেশ্বর জলেশ্বরী জলো জলোকা জলোচ্ছ্বাস জলোদ্ভব জলোদ্ভবা জলোদর জলোদরী জলোমেঘ জলৌকা জলছাপ জলছত্র জলছবি জলৌষধি জলছড়া জলজ জলজাত জলজাল জলজিয়ন্ত জলজীয়ন্ত জুলজেনা জলজ্যান্ত জলজন্তু জলজমা জুলজুল জুলুজুলু জলজলাট জলঝড় জলটুংগি জলযুক্ত জলটুঙ্গি জলটুঙি জলযাত্রা জলযান জলযোগ জলযুদ্ধ জলযন্ত্র জলটল জলঢাকা জলতেষ্টা জলতরঙ্গ জলত্রাস জলতল জলদ জলদকাল জলদগম্ভীর জলদা জলদাগম জলদান জলদায়ক জলদি জলদিয়া জলদী জলদেবতা জলদোদয় জলদোষ জলদ্বারা জলদমন্দ্র জলদুর্গ জলদ্রোণী জলদূষণ জলদস্যু জলদস্যুতা জলধারা জলধারণ জলধারণকারী জলধি জলধিকুমারী জলধিতরঙ্গ জলধিসুতা জলধনু জলধর জলনকুল জলনালি জলনিকাশ জলনিচু জলনিধি জলনিমগ্ন জলনির্গমন জলনির্গমনী জলনিরোধক জলনিষ্কাশন জলনীলিকা জলনীলী জলনর জল্প জল্পক জলপাই জলপাইগুড়ি জলপাত্র জলপান জলপানি জুলপি জল্পিত জলপিপাসা জলপিপি জলপিঁড়ি জলপটি জলপট্টি জলপতি জলপথ জল্পন জল্পনা জল্পনাকল্পনা জলপ্রাণী জলপরিষ্কারক জলপূর্ণ জলপূর্ণা জলপ্রণালী জলপ্রদান জলপ্রপাত জলপ্রবাহ জলপ্লাবিত জলপ্লাবন জুলফওয়ালি জুলফওয়ালী জুলফি জুলফিওয়ালি জুলফিওয়ালী জুলফিকার জুলফেকার জলবাতাস জলবাহ জলবাহিত জলবাহী জলবায়ু জলবায়স জলবিছটি জলবিছুটি জলবিজ্ঞান জলবিদ্যুৎ জলবিন্দু জলবিম্ব জলবিষুব জলবিহার জলবিড়াল জলবিয়োগ জলবেষ্টিত জলবৎ জলবুদ্বুদ জলবন্দি জলবন্দী জলবন্দর জলবসন্ত জলভাগ জলভাঙ্গা জলভাঙা জলভাত জলভূমি জলভূমিদ জলভরা জলভ্রমি জুলম জুলুম জলমুক জুলুমকারী জলমগ্ন জলমগ্না জুলমাত জূলমাত জলমার্জার জলমিশ্রিত জলমজ্জন জলমণ্ডল জুলুমবাজ জুলুমবাজি জলমরা জলমহাল জলমুহরি জলময় জলময়ী জলরং জলরঙ জলরাশি জলরোধক জলরোধী জল্লাদ জল্লাদীয় জল্লাদপনা জুলুল্যান্ড জলশূকর জলশৌচ জলশূন্য জলুস জুলুস জলসই জলসা জলসাঘর জলসিক্ত জলসীমা জলসীমান্ত জলসেক জলসেচ জলসেচন জলসেচনা জলসঞ্চয় জলস্তম্ভ জলসত্র জলুসপূর্ণ জলস্ফীতি জলসম জলসম্পদ জলসরা জলস্রাব জলস্রোত জলসহা জলহারা জলহাস জলহীন জলহস্তিনী জলহস্তী জশন জশম জূষ জুষ্ট জুস জসীম জসদ জসন জসম জুহু জুহূ জহান জহিন জহীন জহুদ জহ্নু জহ্নুকন্যা জহ্নুতনয়া জহ্নুসুতা জহমত জহর জহরআলুদা জহরকোট জহুরা জহরি জহুরি জহরী জহুরী জহরত জহরব্রত জহরলাল জড় জুড় জুড়ক জুড়ুক জড়ক্রিয় জড়া জুড়া জড়াইত জুড়াইত জড়াইতাম জুড়াইতাম জড়াইতিস জুড়াইতিস জড়াইতে জুড়াইতে জড়াইতেছ জুড়াইতেছ জড়াইতেছি জুড়াইতেছি জড়াইতেছিল জুড়াইতেছিল জড়াইতেছিলাম জুড়াইতেছিলাম জড়াইতেছিলি জুড়াইতেছিলি জড়াইতেছিলে জুড়াইতেছিলে জড়াইতেছিলেন জুড়াইতেছিলেন জড়াইতেছিস জুড়াইতেছিস জড়াইতেছে জুড়াইতেছে জড়াইতেছেন জুড়াইতেছেন জড়াইতেন জুড়াইতেন জড়াইব জুড়াইব জড়াইবার জুড়াইবার জড়াইবি জুড়াইবি জড়াইবে জুড়াইবে জড়াইবেন জুড়াইবেন জড়াইল জুড়াইল জড়াইলাম জুড়াইলাম জড়াইলি জুড়াইলি জড়াইলে জুড়াইলে জড়াইলেন জুড়াইলেন জড়াইয়া জুড়াইয়া জড়াইয়াছ জুড়াইয়াছ জড়াইয়াছি জুড়াইয়াছি জড়াইয়াছিল জুড়াইয়াছিল জড়াইয়াছিলাম জুড়াইয়াছিলাম জড়াইয়াছিলি জুড়াইয়াছিলি জড়াইয়াছিলে জুড়াইয়াছিলে জড়াইয়াছিলেন জুড়াইয়াছিলেন জড়াইয়াছিস জুড়াইয়াছিস জড়াইয়াছে জুড়াইয়াছে জড়াইয়াছেন জুড়াইয়াছেন জড়াইয়ো জুড়াইয়ো জড়াক জুড়াক জড়াচ্ছ জড়াচ্ছি জড়াচ্ছিল জড়াচ্ছিলাম জড়াচ্ছিলি জড়াচ্ছিলে জড়াচ্ছিলেন জড়াচ্ছিলেম জড়াচ্ছিলুম জড়াচ্ছিস জড়াচ্ছে জুড়াচ্ছে জড়াচ্ছেন জড়াজড়ি জড়াত জুড়াত জড়াতাম জড়াতিস জড়াতে জড়াতেন জড়াতেম জড়াতুম জড়ান জুড়ান জড়ানো জুড়ানো জড়াপটকি জড়াপুটলি জড়াব জড়াবার জড়াবি জড়াবে জড়াবেন জড়াবো জড়াভাত জড়ামড়ি জড়াল জুড়াল জড়ালাম জড়ালি জড়ালে জড়ালেন জড়ালেম জড়ালুম জড়াস জুড়াস জড়ি জুড়ি জুড়িগাড়ি জড়িত জুড়িত জুড়িতাম জুড়িতিস জুড়িতে জুড়িতেছ জুড়িতেছি জুড়িতেছিল জুড়িতেছিলাম জুড়িতেছিলি জুড়িতেছিলে জুড়িতেছিলেন জুড়িতেছিস জুড়িতেছে জুড়িতেছেন জুড়িতেন জুড়িদার জুড়িব জুড়িবার জুড়িবি জুড়িবে জুড়িবেন জড়িবুটি জড়িমা জুড়িল জুড়িলাম জুড়িলি জুড়িলে জুড়িলেন জুড়িয়া জুড়িয়াছ জুড়িয়াছি জুড়িয়াছিল জুড়িয়াছিলাম জুড়িয়াছিলি জুড়িয়াছিলে জুড়িয়াছিলেন জুড়িয়াছিস জুড়িয়াছে জুড়িয়াছেন জড়িয়ে জুড়িয়ে জড়িয়েছ জুড়িয়েছ জড়িয়েছি জুড়িয়েছি জড়িয়েছিল জুড়িয়েছিল জড়িয়েছিলাম জুড়িয়েছিলাম জড়িয়েছিলি জুড়িয়েছিলি জড়িয়েছিলে জুড়িয়েছিলে জড়িয়েছিলেন জুড়িয়েছিলেন জড়িয়েছিলেম জুড়িয়েছিলেম জড়িয়েছিলুম জুড়িয়েছিলুম জড়িয়েছিস জুড়িয়েছিস জড়িয়েছে জুড়িয়েছে জড়িয়েছেন জুড়িয়েছেন জড়িয়ো জুড়িয়ো জুড়ী জড়ীকৃত জড়ীকরণ জুড়ীগাড়ি জড়চেতনা জড়চৈতন্যবাদ জুড়চ্ছ জুড়চ্ছি জুড়চ্ছিল জুড়চ্ছিলাম জুড়চ্ছিলি জুড়চ্ছিলে জুড়চ্ছিলেন জুড়চ্ছিলেম জুড়চ্ছিলুম জুড়চ্ছিস জুড়চ্ছে জুড়চ্ছেন জুড়ীদার জড়ীভূত জুড়েছ জুড়েছি জুড়েছিল জুড়েছিলাম জুড়েছিলি জুড়েছিলে জুড়েছিলেন জুড়েছিলেম জুড়েছিলুম জুড়েছিস জুড়েছে জুড়েছেন জুড়েন জড়ো জুড়ো জড়োপাসক জড়োপাসনা জড়োয়া জুড়ছ জুড়ছি জুড়ছিল জুড়ছিলাম জুড়ছিলি জুড়ছিলে জুড়ছিলেন জুড়ছিলেম জুড়ছিলুম জুড়ছিস জুড়ছে জুড়ছেন জড়জগত জড়জগৎ জুড়ত জড়তা জড়তাগ্রস্ত জড়তাযুক্ত জড়তাপ্রাপ্ত জুড়তাম জুড়তিস জড়তে জুড়তে জুড়তেন জুড়তেম জড়তত্ত্ব জড়ত্ব জড়ত্বজয়ী জুড়তুম জড়দেহ জুড়ন জুড়ুন জুড়নো জড়পিণ্ড জড়পুত্তলী জড়পদার্থ জড়প্রকৃতি জড়প্রায় জুড়ব জড়বাদ জড়বাদী জুড়বার জুড়বি জড়বিজ্ঞান জুড়বে জুড়বেন জুড়বো জড়বৎ জড়বুদ্ধি জড়বস্তু জড়ভাব জড়ভাবাপন্ন জড়ভাবহীন জড়ভরত জড়ুল জুড়ল জুড়লাম জুড়লি জুড়লে জুড়লেন জুড়লেম জুড়লুম জড়শক্তি জুড়স জড়সড় জড়সড়ভাব জড়সড়ভাবে জয় জয়কামনা জয়কারী জয়কালী জয়কেতু জয়কর্তা জয়গাঁথা জয়গান জয়গোপাল জয়গদ্য জয়া জুয়া জুয়াখেলা জুয়াচোর জুয়াচুরি জুয়ান জুয়ানো জুয়ারি জুয়াড়ি জয়িত্রী জয়ী জয়ীফ জয়েচ্ছু জয়েন জয়েনিং জয়েন্ট জুয়েল জুয়েলার জুয়েলারি জুয়ো জুয়োখেলা জুয়োচুরি জয়োৎসব জয়োন্মত্ত জয়োল্লাস জয়োস্তু জয়জয়কার জয়জয়ন্তী জয়যুক্ত জয়যাত্রা জয়যোগ্য জয়ডঙ্কা জয়ঢাক জয়তু জয়তুন জয়তুনি জয়ত্রী জয়দীপ জয়দেব জয়দেবপুর জয়ধ্বজ জয়ধ্বজা জয়ধ্বনি জয়ধর জয়নগর জয়নাদ জয়ন্ত জয়ন্তিকা জয়ন্তী জয়নুল জয়পাল জয়পতাকা জয়পত্র জয়পত্রী জয়পুর জয়পরাজয় জয়পূর্বক জয়পুরহাট জয়বাংলা জয়বাবা জয়ব্রত জয়ভেরি জয়মঙ্গল জয়মালা জয়মাল্য জয়রামপুর জয়লক্ষ্মী জয়লাভ জয়লাভকারী জয়লিপ্সা জয়লেখ জয়লব্ধ জয়শঙ্খ জয়শৃঙ্গ জয়শীল জয়শীলা জয়শব্দ জয়শ্রী জয়সাধ্য জয়সূচক জয়স্তম্ভ জয়সলমীর".split(" "),
              w_jh: "ঝ ঝংকার ঝংকারা ঝংকৃত ঝংকৃতি ঝুঁক ঝুঁকুক ঝক্কি ঝক্কিঝামেলা ঝুঁকা ঝুঁকান ঝুঁকানো ঝকামকি ঝুঁকি ঝুঁকিত ঝুঁকিতাম ঝুঁকিতিস ঝুঁকিতে ঝুঁকিতেছ ঝুঁকিতেছি ঝুঁকিতেছিল ঝুঁকিতেছিলাম ঝুঁকিতেছিলি ঝুঁকিতেছিলে ঝুঁকিতেছিলেন ঝুঁকিতেছিস ঝুঁকিতেছে ঝুঁকিতেছেন ঝুঁকিতেন ঝুঁকিপূর্ণ ঝুঁকিব ঝুঁকিবার ঝুঁকিবি ঝুঁকিবে ঝুঁকিবেন ঝুঁকিবহন ঝুঁকিবহুল ঝুঁকিল ঝুঁকিলাম ঝুঁকিলি ঝুঁকিলিপ্ত ঝুঁকিলে ঝুঁকিলেন ঝুঁকিস ঝুঁকিয়া ঝুঁকিয়াছ ঝুঁকিয়াছি ঝুঁকিয়াছিল ঝুঁকিয়াছিলাম ঝুঁকিয়াছিলি ঝুঁকিয়াছিলে ঝুঁকিয়াছিলেন ঝুঁকিয়াছিস ঝুঁকিয়াছে ঝুঁকিয়াছেন ঝুঁকিয়ো ঝুঁকেছ ঝুঁকেছি ঝুঁকেছিল ঝুঁকেছিলাম ঝুঁকেছিলি ঝুঁকেছিলে ঝুঁকেছিলেন ঝুঁকেছিলেম ঝুঁকেছিলুম ঝুঁকেছিস ঝুকেছে ঝুঁকেছে ঝুঁকেছেন ঝুঁকেন ঝুঁকো ঝুঁকছ ঝুঁকছি ঝুঁকছিল ঝুঁকছিলাম ঝুঁকছিলি ঝুঁকছিলে ঝুঁকছিলেন ঝুঁকছিলেম ঝুঁকছিলুম ঝুঁকছিস ঝুঁকছে ঝুঁকছেন ঝকঝক ঝকঝকান ঝকঝকানি ঝকঝকানো ঝকঝকি ঝকঝকে ঝুঁকত ঝুঁকতাম ঝুঁকতিস ঝুঁকতে ঝুঁকতেন ঝুঁকতেম ঝুঁকতুম ঝুঁকুন ঝুঁকব ঝুঁকবি ঝুঁকবে ঝুঁকবেন ঝুঁকবো ঝকমক ঝকমকান ঝকমকানি ঝকমকানো ঝকমকি ঝকমকে ঝকমারি ঝুঁকল ঝুঁকলাম ঝুঁকলি ঝুঁকলে ঝুঁকলেন ঝুঁকলেম ঝুঁকলুম ঝগঝগ ঝগড় ঝগড়া ঝগড়াঝাঁটি ঝগড়াটে ঝগড়াফ্যাসাদ ঝগড়াফসাদ ঝগড়াবিবাদ ঝগড়ুটে ঝঙ্কার ঝঙ্কারা ঝঙ্কারিত ঝঙ্কারিবে ঝঙ্কৃত ঝঙ্কৃতি ঝাঁ ঝাঁই ঝাইড়া ঝাউ ঝাউগাছ ঝাউপাতা ঝাউলা ঝাঁক ঝাঁকুক ঝাঁকা ঝাঁকাই ঝাঁকাইও ঝাঁকাইত ঝাঁকাইতাম ঝাঁকাইতিস ঝাঁকাইতে ঝাঁকাইতেছ ঝাঁকাইতেছি ঝাঁকাইতেছিল ঝাঁকাইতেছিলাম ঝাঁকাইতেছিলি ঝাঁকাইতেছিলে ঝাঁকাইতেছিলেন ঝাঁকাইতেছিস ঝাঁকাইতেছে ঝাঁকাইতেছেন ঝাঁকাইতেন ঝাঁকাইব ঝাঁকাইবার ঝাঁকাইবি ঝাঁকাইবে ঝাঁকাইবেন ঝাঁকাইল ঝাঁকাইলাম ঝাঁকাইলি ঝাঁকাইলে ঝাঁকাইলেন ঝাঁকাইয়া ঝাঁকাইয়াছ ঝাঁকাইয়াছি ঝাঁকাইয়াছিল ঝাঁকাইয়াছিলাম ঝাঁকাইয়াছিলি ঝাঁকাইয়াছিলে ঝাঁকাইয়াছিলেন ঝাঁকাইয়াছিস ঝাঁকাইয়াছে ঝাঁকাইয়াছেন ঝাঁকাইয়ো ঝাঁকাও ঝাঁকাক ঝাঁকাচ্ছ ঝাঁকাচ্ছি ঝাঁকাচ্ছিল ঝাঁকাচ্ছিলাম ঝাঁকাচ্ছিলি ঝাঁকাচ্ছিলে ঝাঁকাচ্ছিলেন ঝাঁকাচ্ছিলেম ঝাঁকাচ্ছিলুম ঝাঁকাচ্ছিস ঝাঁকাচ্ছে ঝাঁকাচ্ছেন ঝাঁকাত ঝাঁকাতাম ঝাঁকাতিস ঝাঁকাতে ঝাঁকাতেন ঝাঁকাতেম ঝাঁকাতুম ঝাঁকাদাও ঝাঁকান ঝাঁকানি ঝাঁকানো ঝাঁকাব ঝাঁকাবার ঝাঁকাবি ঝাঁকাবে ঝাঁকাবেন ঝাঁকাবো ঝাঁকাবোঝাই ঝাঁকামুটে ঝাঁকাল ঝাঁকালাম ঝাঁকালি ঝাঁকালে ঝাঁকালেন ঝাঁকালেম ঝাঁকালুম ঝাঁকাস ঝাঁকি ঝাঁকিও ঝাঁকিত ঝাঁকিতাম ঝাঁকিতিস ঝাঁকিতে ঝাঁকিতেছ ঝাঁকিতেছি ঝাঁকিতেছিল ঝাঁকিতেছিলাম ঝাঁকিতেছিলি ঝাঁকিতেছিলে ঝাঁকিতেছিলেন ঝাঁকিতেছিস ঝাঁকিতেছে ঝাঁকিতেছেন ঝাঁকিতেন ঝাঁকিব ঝাঁকিবার ঝাঁকিবি ঝাঁকিবে ঝাঁকিবেন ঝাঁকিল ঝাঁকিলাম ঝাঁকিলি ঝাঁকিলে ঝাঁকিলেন ঝাঁকিস ঝাঁকিয়া ঝাঁকিয়াছ ঝাঁকিয়াছি ঝাঁকিয়াছিল ঝাঁকিয়াছিলাম ঝাঁকিয়াছিলি ঝাঁকিয়াছিলে ঝাঁকিয়াছিলেন ঝাঁকিয়াছিস ঝাঁকিয়াছে ঝাঁকিয়াছেন ঝাঁকিয়ে ঝাঁকিয়েছ ঝাঁকিয়েছি ঝাঁকিয়েছিল ঝাঁকিয়েছিলাম ঝাঁকিয়েছিলি ঝাঁকিয়েছিলে ঝাঁকিয়েছিলেন ঝাঁকিয়েছিলেম ঝাঁকিয়েছিলুম ঝাঁকিয়েছিস ঝাঁকিয়েছে ঝাঁকিয়েছেন ঝাঁকিয়ো ঝাঁকেন ঝাঁকছ ঝাঁকছি ঝাঁকছিল ঝাঁকছিলাম ঝাঁকছিলি ঝাঁকছিলে ঝাঁকছিলেন ঝাঁকছিলেম ঝাঁকছিলুম ঝাঁকছিস ঝাঁকছে ঝাঁকছেন ঝাঁকত ঝাঁকতাম ঝাঁকতিস ঝাঁকতে ঝাঁকতেন ঝাঁকতেম ঝাঁকতুম ঝাঁকুন ঝাঁকুনি ঝাঁকব ঝাঁকবাঁধা ঝাঁকবার ঝাঁকবি ঝাঁকবে ঝাঁকবেন ঝাঁকবো ঝাঁকরান ঝাঁকরানি ঝাঁকরানো ঝাঁকরনো ঝাঁকল ঝাঁকলাম ঝাঁকলি ঝাঁকলে ঝাঁকলেন ঝাঁকলেম ঝাঁকলুম ঝাঁকড় ঝাঁকড়া ঝাঁকড়ামাকড়া ঝাঁকড়মাকড় ঝাঁজ ঝাঁজাল ঝাঁজালো ঝাজি ঝাঁজি ঝাঁজযুক্ত ঝাঁজর ঝাঁজরা ঝাঁজরাচকি ঝাঁজরি ঝাঁঝ ঝাঁঝাঁ ঝাঁঝাল ঝাঁঝালো ঝাঁঝি ঝাঁঝর ঝাঁঝরা ঝাঁঝরি ঝাঁঝরী ঝাট ঝাঁট ঝাঁটা ঝাঁটাই ঝাঁটাইও ঝাঁটাইত ঝাঁটাইতাম ঝাঁটাইতিস ঝাঁটাইতে ঝাঁটাইতেছ ঝাঁটাইতেছি ঝাঁটাইতেছিল ঝাঁটাইতেছিলাম ঝাঁটাইতেছিলি ঝাঁটাইতেছিলে ঝাঁটাইতেছিলেন ঝাঁটাইতেছিস ঝাঁটাইতেছে ঝাঁটাইতেছেন ঝাঁটাইতেন ঝাঁটাইব ঝাঁটাইবার ঝাঁটাইবি ঝাঁটাইবে ঝাঁটাইবেন ঝাঁটাইল ঝাঁটাইলাম ঝাঁটাইলি ঝাঁটাইলে ঝাঁটাইলেন ঝাঁটাইয়া ঝাঁটাইয়াছ ঝাঁটাইয়াছি ঝাঁটাইয়াছিল ঝাঁটাইয়াছিলাম ঝাঁটাইয়াছিলি ঝাঁটাইয়াছিলে ঝাঁটাইয়াছিলেন ঝাঁটাইয়াছিস ঝাঁটাইয়াছে ঝাঁটাইয়াছেন ঝাঁটাইয়ো ঝাঁটাও ঝাঁটাক ঝাঁটাখেকো ঝাঁটাচ্ছ ঝাঁটাচ্ছি ঝাঁটাচ্ছিল ঝাঁটাচ্ছিলাম ঝাঁটাচ্ছিলি ঝাঁটাচ্ছিলে ঝাঁটাচ্ছিলেন ঝাঁটাচ্ছিলেম ঝাঁটাচ্ছিলুম ঝাঁটাচ্ছিস ঝাঁটাচ্ছে ঝাঁটাচ্ছেন ঝাঁটাত ঝাঁটাতাম ঝাঁটাতিস ঝাঁটাতে ঝাঁটাতেন ঝাঁটাতেম ঝাঁটাতুম ঝাঁটান ঝাঁটানো ঝাঁটাপেটা ঝাঁটাব ঝাঁটাবার ঝাঁটাবি ঝাঁটাবে ঝাঁটাবেন ঝাঁটাবো ঝাঁটাল ঝাঁটালাম ঝাঁটালি ঝাঁটালে ঝাঁটালেন ঝাঁটালেম ঝাঁটালুম ঝাঁটাস ঝাটি ঝাঁটি ঝাটিনা ঝাঁটিয়ে ঝাঁটিয়েছ ঝাঁটিয়েছি ঝাঁটিয়েছিল ঝাঁটিয়েছিলাম ঝাঁটিয়েছিলি ঝাঁটিয়েছিলে ঝাঁটিয়েছিলেন ঝাঁটিয়েছিলেম ঝাঁটিয়েছিলুম ঝাঁটিয়েছিস ঝাঁটিয়েছে ঝাঁটিয়েছেন ঝাঁটিয়ো ঝাটী ঝাঁটী ঝাটনা ঝাঁটপাট ঝাটল ঝাণ্ডা ঝানু ঝানুলোক ঝাপ ঝাঁপ ঝাঁপুক ঝাঁপা ঝাঁপাই ঝাঁপাইও ঝাঁপাইত ঝাঁপাইতাম ঝাঁপাইতিস ঝাঁপাইতে ঝাঁপাইতেছ ঝাঁপাইতেছি ঝাঁপাইতেছিল ঝাঁপাইতেছিলাম ঝাঁপাইতেছিলি ঝাঁপাইতেছিলে ঝাঁপাইতেছিলেন ঝাঁপাইতেছিস ঝাঁপাইতেছে ঝাঁপাইতেছেন ঝাঁপাইতেন ঝাঁপাইব ঝাঁপাইবার ঝাঁপাইবি ঝাঁপাইবে ঝাঁপাইবেন ঝাঁপাইল ঝাঁপাইলাম ঝাঁপাইলি ঝাঁপাইলে ঝাঁপাইলেন ঝাপাইয়া ঝাঁপাইয়া ঝাঁপাইয়াছ ঝাঁপাইয়াছি ঝাঁপাইয়াছিল ঝাঁপাইয়াছিলাম ঝাঁপাইয়াছিলি ঝাঁপাইয়াছিলে ঝাঁপাইয়াছিলেন ঝাঁপাইয়াছিস ঝাঁপাইয়াছে ঝাঁপাইয়াছেন ঝাঁপাইয়ো ঝাঁপাও ঝাঁপাক ঝাঁপাচ্ছ ঝাঁপাচ্ছি ঝাঁপাচ্ছিল ঝাঁপাচ্ছিলাম ঝাঁপাচ্ছিলি ঝাঁপাচ্ছিলে ঝাঁপাচ্ছিলেন ঝাঁপাচ্ছিলেম ঝাঁপাচ্ছিলুম ঝাঁপাচ্ছিস ঝাঁপাচ্ছে ঝাঁপাচ্ছেন ঝাঁপাছে ঝাঁপাত ঝাঁপাতাম ঝাঁপাতিস ঝাঁপাতে ঝাঁপাতেন ঝাঁপাতেম ঝাঁপাতুম ঝাঁপান ঝাঁপানিয়া ঝাঁপানো ঝাঁপাব ঝাঁপাবার ঝাঁপাবি ঝাঁপাবে ঝাঁপাবেন ঝাঁপাবো ঝাঁপাল ঝাঁপালাম ঝাঁপালি ঝাঁপালে ঝাঁপালেন ঝাঁপালেম ঝাঁপালুম ঝাঁপাস ঝাঁপি ঝাঁপিত ঝাঁপিতাম ঝাঁপিতিস ঝাঁপিতে ঝাঁপিতেছ ঝাঁপিতেছি ঝাঁপিতেছিল ঝাঁপিতেছিলাম ঝাঁপিতেছিলি ঝাঁপিতেছিলে ঝাঁপিতেছিলেন ঝাঁপিতেছিস ঝাঁপিতেছে ঝাঁপিতেছেন ঝাঁপিতেন ঝাঁপিব ঝাঁপিবার ঝাঁপিবি ঝাঁপিবে ঝাঁপিবেন ঝাঁপিল ঝাঁপিলাম ঝাঁপিলি ঝাঁপিলে ঝাঁপিলেন ঝাঁপিস ঝাঁপিয়া ঝাঁপিয়াছ ঝাঁপিয়াছি ঝাঁপিয়াছিল ঝাঁপিয়াছিলাম ঝাঁপিয়াছিলি ঝাঁপিয়াছিলে ঝাঁপিয়াছিলেন ঝাঁপিয়াছিস ঝাঁপিয়াছে ঝাঁপিয়াছেন ঝাঁপিয়ে ঝাঁপিয়েছ ঝাঁপিয়েছি ঝাঁপিয়েছিল ঝাঁপিয়েছিলাম ঝাঁপিয়েছিলি ঝাঁপিয়েছিলে ঝাঁপিয়েছিলেন ঝাঁপিয়েছিলেম ঝাঁপিয়েছিলুম ঝাঁপিয়েছিস ঝাঁপিয়েছে ঝাঁপিয়েছেন ঝাঁপিয়ো ঝাঁপী ঝাঁপেন ঝাঁপছ ঝাঁপছি ঝাঁপছিল ঝাঁপছিলাম ঝাঁপছিলি ঝাঁপছিলে ঝাঁপছিলেন ঝাঁপছিলেম ঝাঁপছিলুম ঝাঁপছিস ঝাঁপছে ঝাঁপছেন ঝাপট ঝাপটা ঝাঁপটা ঝাপটানো ঝাঁপত ঝাঁপতাম ঝাঁপতাল ঝাপতাড়া ঝাঁপতিস ঝাঁপতে ঝাঁপতেন ঝাঁপতেম ঝাঁপতুম ঝাঁপন ঝাঁপুন ঝাপ্পা ঝাঁপব ঝাঁপবার ঝাঁপবি ঝাঁপবে ঝাঁপবেন ঝাঁপবো ঝাঁপল ঝাঁপলাম ঝাঁপলি ঝাঁপলে ঝাঁপলেন ঝাঁপলেম ঝাঁপলুম ঝাপসা ঝাপ্সা ঝাঁপসন্ন্যাস ঝাবু ঝাবূ ঝাবুক ঝাবকা ঝাম ঝামা ঝামাপাথর ঝামাল ঝামেলা ঝামেলাপূর্ণ ঝামেলাবাজ ঝামট ঝামটা ঝামর ঝামরু ঝামরা ঝামরাই ঝামরাইও ঝামরাইত ঝামরাইতাম ঝামরাইতিস ঝামরাইতে ঝামরাইতেছ ঝামরাইতেছি ঝামরাইতেছিল ঝামরাইতেছিলাম ঝামরাইতেছিলি ঝামরাইতেছিলে ঝামরাইতেছিলেন ঝামরাইতেছিস ঝামরাইতেছে ঝামরাইতেছেন ঝামরাইতেন ঝামরাইব ঝামরাইবার ঝামরাইবি ঝামরাইবে ঝামরাইবেন ঝামরাইল ঝামরাইলাম ঝামরাইলি ঝামরাইলে ঝামরাইলেন ঝামরাইয়া ঝামরাইয়াছ ঝামরাইয়াছি ঝামরাইয়াছিল ঝামরাইয়াছিলাম ঝামরাইয়াছিলি ঝামরাইয়াছিলে ঝামরাইয়াছিলেন ঝামরাইয়াছিস ঝামরাইয়াছে ঝামরাইয়াছেন ঝামরাইয়ো ঝামরাক ঝামরাচ্ছ ঝামরাচ্ছি ঝামরাচ্ছিল ঝামরাচ্ছিলাম ঝামরাচ্ছিলি ঝামরাচ্ছিলে ঝামরাচ্ছিলেন ঝামরাচ্ছিলেম ঝামরাচ্ছিলুম ঝামরাচ্ছিস ঝামরাচ্ছে ঝামরাচ্ছেন ঝামরাত ঝামরাতাম ঝামরাতিস ঝামরাতে ঝামরাতেন ঝামরাতেম ঝামরাতুম ঝামরান ঝামরানো ঝামরাব ঝামরাবার ঝামরাবি ঝামরাবে ঝামরাবেন ঝামরাবো ঝামরাল ঝামরালাম ঝামরালি ঝামরালে ঝামরালেন ঝামরালেম ঝামরালুম ঝামরাস ঝামরি ঝামরে ঝামরেছ ঝামরেছি ঝামরেছিল ঝামরেছিলাম ঝামরেছিলি ঝামরেছিলে ঝামরেছিলেন ঝামরেছিলেম ঝামরেছিলুম ঝামরেছিস ঝামরেছে ঝামরেছেন ঝামরো ঝারা ঝারি ঝাল ঝালুক ঝালকাঠি ঝালা ঝালাই ঝালাইও ঝালাইত ঝালাইতাম ঝালাইতিস ঝালাইতে ঝালাইতেছ ঝালাইতেছি ঝালাইতেছিল ঝালাইতেছিলাম ঝালাইতেছিলি ঝালাইতেছিলে ঝালাইতেছিলেন ঝালাইতেছিস ঝালাইতেছে ঝালাইতেছেন ঝালাইতেন ঝালাইব ঝালাইবার ঝালাইবি ঝালাইবে ঝালাইবেন ঝালাইল ঝালাইলাম ঝালাইলি ঝালাইলে ঝালাইলেন ঝালাইয়া ঝালাইয়াছ ঝালাইয়াছি ঝালাইয়াছিল ঝালাইয়াছিলাম ঝালাইয়াছিলি ঝালাইয়াছিলে ঝালাইয়াছিলেন ঝালাইয়াছিস ঝালাইয়াছে ঝালাইয়াছেন ঝালাইয়ো ঝালাক ঝালাচ্ছ ঝালাচ্ছি ঝালাচ্ছিল ঝালাচ্ছিলাম ঝালাচ্ছিলি ঝালাচ্ছিলে ঝালাচ্ছিলেন ঝালাচ্ছিলেম ঝালাচ্ছিলুম ঝালাচ্ছিস ঝালাচ্ছে ঝালাচ্ছেন ঝালাত ঝালাতাম ঝালাতিস ঝালাতে ঝালাতেন ঝালাতেম ঝালাতুম ঝালান ঝালানো ঝালাপালা ঝালাব ঝালাবার ঝালাবি ঝালাবে ঝালাবেন ঝালাবো ঝালাল ঝালালাম ঝালালি ঝালালে ঝালালেন ঝালালেম ঝালালুম ঝালাস ঝালি ঝালিও ঝালিত ঝালিতাম ঝালিতিস ঝালিতে ঝালিতেছ ঝালিতেছি ঝালিতেছিল ঝালিতেছিলাম ঝালিতেছিলি ঝালিতেছিলে ঝালিতেছিলেন ঝালিতেছিস ঝালিতেছে ঝালিতেছেন ঝালিতেন ঝালিব ঝালিবার ঝালিবি ঝালিবে ঝালিবেন ঝালিল ঝালিলাম ঝালিলি ঝালিলে ঝালিলেন ঝালিস ঝালিয়া ঝালিয়াছ ঝালিয়াছি ঝালিয়াছিল ঝালিয়াছিলাম ঝালিয়াছিলি ঝালিয়াছিলে ঝালিয়াছিলেন ঝালিয়াছিস ঝালিয়াছে ঝালিয়াছেন ঝালিয়ে ঝালিয়েছ ঝালিয়েছি ঝালিয়েছিল ঝালিয়েছিলাম ঝালিয়েছিলি ঝালিয়েছিলে ঝালিয়েছিলেন ঝালিয়েছিলেম ঝালিয়েছিলুম ঝালিয়েছিস ঝালিয়েছে ঝালিয়েছেন ঝালিয়ো ঝালী ঝালচচ্চড়ি ঝালে ঝালছ ঝালছি ঝালছিল ঝালছিলাম ঝালছিলি ঝালছিলে ঝালছিলেন ঝালছিলেম ঝালছিলুম ঝালছিস ঝালছে ঝালছেন ঝালঝাড়া ঝালযুক্ত ঝালত ঝালতাম ঝালতিস ঝালতে ঝালতেন ঝালতেম ঝালতুম ঝালুন ঝালব ঝালবার ঝালবি ঝালবে ঝালবেন ঝালবো ঝালমুড়ি ঝালর ঝালরযুক্ত ঝালল ঝাললাম ঝাললি ঝাললে ঝাললেন ঝাললেম ঝাললুম ঝালস্বাদযুক্ত ঝাঁসি ঝাড় ঝাড়ু ঝাড়ুক ঝাড়ুকশ ঝাড়খণ্ড ঝাড়গ্রাম ঝাড়া ঝাড়াই ঝাড়াইও ঝাড়াইত ঝাড়াইতাম ঝাড়াইতিস ঝাড়াইতে ঝাড়াইতেছ ঝাড়াইতেছি ঝাড়াইতেছিল ঝাড়াইতেছিলাম ঝাড়াইতেছিলি ঝাড়াইতেছিলে ঝাড়াইতেছিলেন ঝাড়াইতেছিস ঝাড়াইতেছে ঝাড়াইতেছেন ঝাড়াইতেন ঝাড়াইব ঝাড়াইবার ঝাড়াইবি ঝাড়াইবে ঝাড়াইবেন ঝাড়াইল ঝাড়াইলাম ঝাড়াইলি ঝাড়াইলে ঝাড়াইলেন ঝাড়াইয়া ঝাড়াইয়াছ ঝাড়াইয়াছি ঝাড়াইয়াছিল ঝাড়াইয়াছিলাম ঝাড়াইয়াছিলি ঝাড়াইয়াছিলে ঝাড়াইয়াছিলেন ঝাড়াইয়াছিস ঝাড়াইয়াছে ঝাড়াইয়াছেন ঝাড়াইয়ো ঝাড়াও ঝাড়াক ঝাড়াচ্ছ ঝাড়াচ্ছি ঝাড়াচ্ছিল ঝাড়াচ্ছিলাম ঝাড়াচ্ছিলি ঝাড়াচ্ছিলে ঝাড়াচ্ছিলেন ঝাড়াচ্ছিলেম ঝাড়াচ্ছিলুম ঝাড়াচ্ছিস ঝাড়াচ্ছে ঝাড়াচ্ছেন ঝাড়াঝাপটা ঝাড়াত ঝাড়াতাম ঝাড়াতিস ঝাড়াতে ঝাড়াতেন ঝাড়াতেম ঝাড়াতুম ঝাড়াধান ঝাড়ান ঝাড়ানো ঝাড়াপোঁছা ঝাড়াব ঝাড়াবাছা ঝাড়াবার ঝাড়াবি ঝাড়াবে ঝাড়াবেন ঝাড়াবো ঝাড়ামোছা ঝাড়াল ঝাড়ালাম ঝাড়ালি ঝাড়ালে ঝাড়ালেন ঝাড়ালেম ঝাড়ালুম ঝাড়াস ঝাড়াহাতপা ঝাড়ি ঝাড়িত ঝাড়িতাম ঝাড়িতিস ঝাড়িতে ঝাড়িতেছ ঝাড়িতেছি ঝাড়িতেছিল ঝাড়িতেছিলাম ঝাড়িতেছিলি ঝাড়িতেছিলে ঝাড়িতেছিলেন ঝাড়িতেছিস ঝাড়িতেছে ঝাড়িতেছেন ঝাড়িতেন ঝাড়িব ঝাড়িবার ঝাড়িবি ঝাড়িবে ঝাড়িবেন ঝাড়িল ঝাড়িলাম ঝাড়িলি ঝাড়িলে ঝাড়িলেন ঝাড়িস ঝাড়িয়া ঝাড়িয়াছ ঝাড়িয়াছি ঝাড়িয়াছিল ঝাড়িয়াছিলাম ঝাড়িয়াছিলি ঝাড়িয়াছিলে ঝাড়িয়াছিলেন ঝাড়িয়াছিস ঝাড়িয়াছে ঝাড়িয়াছেন ঝাড়িয়ে ঝাড়িয়েছ ঝাড়িয়েছি ঝাড়িয়েছিল ঝাড়িয়েছিলাম ঝাড়িয়েছিলি ঝাড়িয়েছিলে ঝাড়িয়েছিলেন ঝাড়িয়েছিলেম ঝাড়িয়েছিলুম ঝাড়িয়েছিস ঝাড়িয়েছে ঝাড়িয়েছেন ঝাড়িয়ো ঝাড়েন ঝাড়ো ঝাড়ছ ঝাড়ছি ঝাড়ছিল ঝাড়ছিলাম ঝাড়ছিলি ঝাড়ছিলে ঝাড়ছিলেন ঝাড়ছিলেম ঝাড়ছিলুম ঝাড়ছিস ঝাড়ছে ঝাড়ছেন ঝাড়ঝুড় ঝাড়যুক্ত ঝাড়ত ঝাড়তাম ঝাড়তিস ঝাড়তে ঝাড়তেন ঝাড়তেম ঝাড়তুম ঝাড়ুদার ঝাড়ুদারনি ঝাড়ন ঝাড়ুন ঝাড়পোছ ঝাড়পোঁছ ঝাড়পোছা ঝাড়পুছ ঝাড়ফুঁক ঝাড়ব ঝাড়বংশ ঝাড়বাতি ঝাড়বার ঝাড়বি ঝাড়বে ঝাড়বেন ঝাড়বো ঝাড়ুবরদার ঝাড়ল ঝাড়লাম ঝাড়লি ঝাড়লে ঝাড়লেন ঝাড়লেম ঝাড়লুম ঝি ঝিউড়ি ঝিক ঝিঁক ঝিঁকা ঝিকিমিকি ঝিকুট ঝিকমিক ঝিকুর ঝিকরগাছা ঝিঁকরা ঝিকুরনড়া ঝিঙ্গা ঝিঙ্গুর ঝিঙা ঝিঙাফুল ঝিঙে ঝিঙেফুল ঝিঙুর ঝিঝি ঝিঁঝিঁ ঝিঝিট ঝিঁঝিট ঝিঁঝিটরাগ ঝিঁঝিঁপোকা ঝিণ্টিকা ঝিণ্টী ঝিনুক ঝিনুকজাত ঝিনুকতুল্য ঝিনুকশামুক ঝিনাইদহ ঝিনিকিঝিনি ঝিনিঝিনি ঝিনঝিন ঝিনঝিনি ঝিম ঝিমক ঝিমকিনি ঝিমা ঝিমাই ঝিমাইও ঝিমাইত ঝিমাইতাম ঝিমাইতিস ঝিমাইতে ঝিমাইতেছ ঝিমাইতেছি ঝিমাইতেছিল ঝিমাইতেছিলাম ঝিমাইতেছিলি ঝিমাইতেছিলে ঝিমাইতেছিলেন ঝিমাইতেছিস ঝিমাইতেছে ঝিমাইতেছেন ঝিমাইতেন ঝিমাইব ঝিমাইবার ঝিমাইবি ঝিমাইবে ঝিমাইবেন ঝিমাইল ঝিমাইলাম ঝিমাইলি ঝিমাইলে ঝিমাইলেন ঝিমাইয়া ঝিমাইয়াছ ঝিমাইয়াছি ঝিমাইয়াছিল ঝিমাইয়াছিলাম ঝিমাইয়াছিলি ঝিমাইয়াছিলে ঝিমাইয়াছিলেন ঝিমাইয়াছিস ঝিমাইয়াছে ঝিমাইয়াছেন ঝিমাইয়ো ঝিমাক ঝিমান ঝিমানি ঝিমানো ঝিমাস ঝিমি ঝিমিক ঝিমিকি ঝিমিয়ে ঝিমিয়েছ ঝিমিয়েছি ঝিমিয়েছিল ঝিমিয়েছিলাম ঝিমিয়েছিলি ঝিমিয়েছিলে ঝিমিয়েছিলেন ঝিমিয়েছিলেম ঝিমিয়েছিলুম ঝিমিয়েছিস ঝিমিয়েছে ঝিমিয়েছেন ঝিমিয়ো ঝিমচ্ছ ঝিমচ্ছি ঝিমচ্ছিল ঝিমচ্ছিলাম ঝিমচ্ছিলি ঝিমচ্ছিলে ঝিমচ্ছিলেন ঝিমচ্ছিলেম ঝিমচ্ছিলুম ঝিমচ্ছিস ঝিমচ্ছে ঝিমচ্ছেন ঝিমো ঝিমঝিম ঝিমত ঝিমতাম ঝিমতিস ঝিমতে ঝিমতেন ঝিমতেম ঝিমতুম ঝিমন ঝিমুনি ঝিমনো ঝিমব ঝিমবার ঝিমবি ঝিমবে ঝিমবেন ঝিমবো ঝিমল ঝিমলাম ঝিমলি ঝিমলে ঝিমলেন ঝিমলেম ঝিমলুম ঝিমস ঝিরকুটে ঝিরিক ঝিরিপথ ঝিরঝির ঝিরঝিরানি ঝিল ঝিলিক ঝিলিমিলি ঝিলম ঝিলমিল ঝিলমিলি ঝিল্লি ঝিল্লিকা ঝিল্লিযুক্ত ঝিল্লিবন ঝিল্লিমুখর ঝিল্লিহীন ঝিল্লী ঝিয়ারি ঝিয়ারী ঝেঁকে ঝেঁকেছ ঝেঁকেছি ঝেঁকেছিল ঝেঁকেছিলাম ঝেঁকেছিলি ঝেঁকেছিলে ঝেঁকেছিলেন ঝেঁকেছিলেম ঝেঁকেছিলুম ঝেঁকেছিস ঝেঁকেছে ঝেঁকেছেন ঝেঁকো ঝেঁটা ঝেঁটান ঝেঁটানো ঝেঁটাপেটা ঝেঁপে ঝেঁপেছ ঝেঁপেছি ঝেঁপেছিল ঝেঁপেছিলাম ঝেঁপেছিলি ঝেঁপেছিলে ঝেঁপেছিলেন ঝেঁপেছিলেম ঝেঁপেছিলুম ঝেঁপেছিস ঝেঁপেছে ঝেঁপেছেন ঝেঁপো ঝেলে ঝেলেছ ঝেলেছি ঝেলেছিল ঝেলেছিলাম ঝেলেছিলি ঝেলেছিলে ঝেলেছিলেন ঝেলেছিলেম ঝেলেছিলুম ঝেলেছিস ঝেলেছে ঝেলেছেন ঝেলো ঝেড়ে ঝেড়েছ ঝেড়েছি ঝেড়েছিল ঝেড়েছিলাম ঝেড়েছিলি ঝেড়েছিলে ঝেড়েছিলেন ঝেড়েছিলেম ঝেড়েছিলুম ঝেড়েছিস ঝেড়েছে ঝেড়েছেন ঝেড়ো ঝোঁক ঝোঁকা ঝোঁকান ঝোঁকানো ঝোঁকে ঝোঁকেন ঝোঁকযুক্ত ঝোঁকবার ঝোটন ঝোঁটন ঝোপ ঝোপঝাড় ঝোপড়া ঝোর ঝোরা ঝোল ঝোলা ঝোলাক ঝোলাগুড় ঝোলাচ্ছ ঝোলাচ্ছি ঝোলাচ্ছিল ঝোলাচ্ছিলাম ঝোলাচ্ছিলি ঝোলাচ্ছিলে ঝোলাচ্ছিলেন ঝোলাচ্ছিলেম ঝোলাচ্ছিলুম ঝোলাচ্ছিস ঝোলাচ্ছে ঝোলাচ্ছেন ঝোলাঝুলি ঝোলাত ঝোলাতাম ঝোলাতিস ঝোলাতে ঝোলাতেন ঝোলাতেম ঝোলাতুম ঝোলান ঝোলানো ঝোলাব ঝোলাবার ঝোলাবি ঝোলাবে ঝোলাবেন ঝোলাবো ঝোলাল ঝোলালাম ঝোলালি ঝোলালে ঝোলালেন ঝোলালেম ঝোলালুম ঝোলাস ঝোলযুক্ত ঝোলনা ঝোলবার ঝোলব্যঞ্জন ঝোড় ঝোড়া ঝোড়ান ঝোড়ানো ঝোড়ো ঝঞ্ঝা ঝঞ্ঝাক্ষুব্ধ ঝঞ্ঝাট ঝঞ্ঝাটপূর্ণ ঝঞ্ঝাবাত ঝঞ্ঝাবিক্ষুব্ধ ঝঞ্ঝাবর্ত ঝঞ্ঝট ঝঞ্ঝনা ঝট ঝুট ঝুঁট ঝটকা ঝটকানি ঝুটা ঝুটাঝুটি ঝ্যাঁটা ঝ্যাঁটানো ঝ্যাঁটাপেটা ঝটাপট ঝটাপটি ঝুটাপটি ঝুটাপুটি ঝুটি ঝুঁটি ঝুঁটিওয়ালা ঝটিকা ঝটিকাবর্ত ঝটিকাসফর ঝটিকাহত ঝুটিযুক্ত ঝুঁটিযুক্ত ঝটিতি ঝুটো ঝুটোপুটি ঝটতি ঝটপট ঝটপটান ঝটপটানি ঝটপটানো ঝুটমুট ঝণ্ডা ঝন ঝনকাট ঝনকাঠ ঝুনা ঝনাৎ ঝুনানারিকেল ঝুনালোক ঝনঝট ঝনঝন ঝুনঝুন ঝুনুঝুনু ঝনঝনা ঝনঝনাচ্ছে ঝনঝনান ঝনঝনানি ঝনঝনানো ঝনঝনায়মান ঝনঝনিল ঝুনঝুনুন ঝনৎকার ঝনন ঝননরণন ঝুনুরঝুনুর ঝপ ঝুপ ঝপাং ঝপাঝপ ঝপাৎ ঝুপঝাপ ঝপঝপ ঝুপঝুপ ঝুপুরঝাপুর ঝুপুরঝুপুর ঝুপড়ি ঝুপড়ী ঝমক ঝুমকা ঝুমকাজবা ঝমকানি ঝুমকালতা ঝুমকো ঝুমকোযুক্ত ঝুমকোলতা ঝমাঝম ঝমঝম ঝুমঝুম ঝুমুঝুমু ঝুমঝুমি ঝমঝমিয়ে ঝম্প ঝম্পক ঝম্পকতাল ঝম্পন ঝমর ঝুমুর ঝুমরি ঝমরঝমর ঝুমুরঝুমুর ঝর ঝরু ঝুর ঝরই ঝরুক ঝরকা ঝরা ঝুরা ঝরাই ঝরাইও ঝরাইত ঝরাইতাম ঝরাইতিস ঝরাইতে ঝরাইতেছ ঝরাইতেছি ঝরাইতেছিল ঝরাইতেছিলাম ঝরাইতেছিলি ঝরাইতেছিলে ঝরাইতেছিলেন ঝরাইতেছিস ঝরাইতেছে ঝরাইতেছেন ঝরাইতেন ঝরাইব ঝরাইবার ঝরাইবি ঝরাইবে ঝরাইবেন ঝরাইল ঝরাইলাম ঝরাইলি ঝরাইলে ঝরাইলেন ঝরাইয়া ঝরাইয়াছ ঝরাইয়াছি ঝরাইয়াছিল ঝরাইয়াছিলাম ঝরাইয়াছিলি ঝরাইয়াছিলে ঝরাইয়াছিলেন ঝরাইয়াছিস ঝরাইয়াছে ঝরাইয়াছেন ঝরাইয়ো ঝরাও ঝরাক ঝরাচ্ছ ঝরাচ্ছি ঝরাচ্ছিল ঝরাচ্ছিলাম ঝরাচ্ছিলি ঝরাচ্ছিলে ঝরাচ্ছিলেন ঝরাচ্ছিলেম ঝরাচ্ছিলুম ঝরাচ্ছিস ঝরাচ্ছে ঝরাচ্ছেন ঝুরাঝুরা ঝরাত ঝরাতাম ঝরাতিস ঝরাতে ঝরাতেন ঝরাতেম ঝরাতুম ঝরাধান ঝরান ঝরানো ঝরাপাতা ঝরাব ঝরাবার ঝরাবি ঝরাবে ঝরাবেন ঝরাবো ঝুরামাটি ঝরাল ঝরালাম ঝরালি ঝরালে ঝরালেন ঝরালেম ঝরালুম ঝরাস ঝরি ঝুরি ঝরিত ঝরিতাম ঝরিতিস ঝরিতে ঝরিতেছ ঝরিতেছি ঝরিতেছিল ঝরিতেছিলাম ঝরিতেছিলি ঝরিতেছিলে ঝরিতেছিলেন ঝরিতেছিস ঝরিতেছে ঝরিতেছেন ঝরিতেন ঝরিব ঝরিবার ঝরিবি ঝরিবে ঝরিবেন ঝুরিভাজা ঝরিল ঝরিলাম ঝরিলি ঝরিলে ঝরিলেন ঝরিস ঝরিয়া ঝরিয়াছ ঝরিয়াছি ঝরিয়াছিল ঝরিয়াছিলাম ঝরিয়াছিলি ঝরিয়াছিলে ঝরিয়াছিলেন ঝরিয়াছিস ঝরিয়াছে ঝরিয়াছেন ঝরিয়ে ঝরিয়েছ ঝরিয়েছি ঝরিয়েছিল ঝরিয়েছিলাম ঝরিয়েছিলি ঝরিয়েছিলে ঝরিয়েছিলেন ঝরিয়েছিলেম ঝরিয়েছিলুম ঝরিয়েছিস ঝরিয়েছে ঝরিয়েছেন ঝরিয়ো ঝরে ঝুরে ঝরেছ ঝরেছি ঝরেছিল ঝরেছিলাম ঝরেছিলি ঝরেছিলে ঝরেছিলেন ঝরেছিলেম ঝরেছিলুম ঝরেছিস ঝরেছে ঝরেছেন ঝরেন ঝরো ঝুরো ঝরোকা ঝরোখা ঝুরোঝুরো ঝরছ ঝরছি ঝরছিল ঝরছিলাম ঝরছিলি ঝরছিলে ঝরছিলেন ঝরছিলেম ঝরছিলুম ঝরছিস ঝরছে ঝরছেন ঝরঝর ঝর্ঝর ঝুরঝুর ঝুরুঝুরু ঝরঝরা ঝুরঝুরা ঝরঝরানি ঝর্ঝরি ঝর্ঝরিত ঝর্ণা ঝর্ণাকলম ঝর্ণাধারা ঝরত ঝুরত ঝরতাম ঝরতি ঝরতিপড়তি ঝরতিস ঝরতে ঝরতেন ঝরতেম ঝরতুম ঝরুন ঝরনা ঝর্না ঝরনাকলম ঝর্নাকলম ঝর্নাগড়া ঝরনাধারা ঝরব ঝরবার ঝরবি ঝরবে ঝরবেন ঝরবো ঝরল ঝরলাম ঝরলি ঝরলে ঝরলেন ঝরলেম ঝরলুম ঝুল ঝুলওয়ালা ঝলক ঝুলক ঝুলুক ঝলকা ঝলকাদর্পণ ঝলকান ঝলকানি ঝলকানো ঝুলকালি ঝলকিত ঝলকে ঝলকদর্পণ ঝলা ঝুলা ঝুলাই ঝুলাইও ঝুলাইত ঝুলাইতাম ঝুলাইতিস ঝুলাইতে ঝুলাইতেছ ঝুলাইতেছি ঝুলাইতেছিল ঝুলাইতেছিলাম ঝুলাইতেছিলি ঝুলাইতেছিলে ঝুলাইতেছিলেন ঝুলাইতেছিস ঝুলাইতেছে ঝুলাইতেছেন ঝুলাইতেন ঝুলাইব ঝুলাইবার ঝুলাইবি ঝুলাইবে ঝুলাইবেন ঝুলাইল ঝুলাইলাম ঝুলাইলি ঝুলাইলে ঝুলাইলেন ঝুলাইয়া ঝুলাইয়াছ ঝুলাইয়াছি ঝুলাইয়াছিল ঝুলাইয়াছিলাম ঝুলাইয়াছিলি ঝুলাইয়াছিলে ঝুলাইয়াছিলেন ঝুলাইয়াছিস ঝুলাইয়াছে ঝুলাইয়াছেন ঝুলাইয়ো ঝুলাক ঝুলাঝুলি ঝুলান ঝুলানো ঝুলাবার ঝুলাস ঝুলি ঝুলিঝাড়া ঝুলিত ঝুলিতাম ঝুলিতিস ঝুলিতে ঝুলিতেছ ঝুলিতেছি ঝুলিতেছিল ঝুলিতেছিলাম ঝুলিতেছিলি ঝুলিতেছিলে ঝুলিতেছিলেন ঝুলিতেছিস ঝুলিতেছে ঝুলিতেছেন ঝুলিতেন ঝুলিব ঝুলিবার ঝুলিবি ঝুলিবে ঝুলিবেন ঝুলিল ঝুলিলাম ঝুলিলি ঝুলিলে ঝুলিলেন ঝুলিস ঝুলিয়া ঝুলিয়াছ ঝুলিয়াছি ঝুলিয়াছিল ঝুলিয়াছিলাম ঝুলিয়াছিলি ঝুলিয়াছিলে ঝুলিয়াছিলেন ঝুলিয়াছিস ঝুলিয়াছে ঝুলিয়াছেন ঝুলিয়ে ঝুলিয়েছ ঝুলিয়েছি ঝুলিয়েছিল ঝুলিয়েছিলাম ঝুলিয়েছিলি ঝুলিয়েছিলে ঝুলিয়েছিলেন ঝুলিয়েছিলেম ঝুলিয়েছিলুম ঝুলিয়েছিস ঝুলিয়েছে ঝুলিয়েছেন ঝুলিয়ো ঝুলচ্ছ ঝুলচ্ছি ঝুলচ্ছিল ঝুলচ্ছিলাম ঝুলচ্ছিলি ঝুলচ্ছিলে ঝুলচ্ছিলেন ঝুলচ্ছিলেম ঝুলচ্ছিলুম ঝুলচ্ছিস ঝুলচ্ছে ঝুলচ্ছেন ঝুলে ঝুলেছ ঝুলেছি ঝুলেছিল ঝুলেছিলাম ঝুলেছিলি ঝুলেছিলে ঝুলেছিলেন ঝুলেছিলেম ঝুলেছিলুম ঝুলেছিস ঝুলেছে ঝুলেছেন ঝুলেন ঝুলো ঝুলোঝুলি ঝুলছ ঝুলছি ঝুলছিল ঝুলছিলাম ঝুলছিলি ঝুলছিলে ঝুলছিলেন ঝুলছিলেম ঝুলছিলুম ঝুলছিস ঝুলছে ঝুলছেন ঝুলঝাড়া ঝলঝল ঝুলত ঝুলতাম ঝুলতিস ঝুলতে ঝুলতেন ঝুলতেম ঝুলতুম ঝুলন ঝুলুন ঝুলনা ঝুলনো ঝুলনযাত্রা ঝুলন্ত ঝুলব ঝুলবার ঝুলবারান্দা ঝুলবি ঝুলবে ঝুলবেন ঝুলবো ঝুলুম ঝলমল ঝলমলা ঝলমলান ঝলমলানি ঝলমলানো ঝলমলিয়ে ঝুলল ঝল্লক ঝল্লকি ঝল্লকণ্ঠ ঝুললাম ঝুললি ঝল্লিকা ঝুললে ঝুললেন ঝুললেম ঝুললুম ঝল্লরা ঝল্লরী ঝুলস ঝলসা ঝলসাই ঝলসাইও ঝলসাইত ঝলসাইতাম ঝলসাইতিস ঝলসাইতে ঝলসাইতেছ ঝলসাইতেছি ঝলসাইতেছিল ঝলসাইতেছিলাম ঝলসাইতেছিলি ঝলসাইতেছিলে ঝলসাইতেছিলেন ঝলসাইতেছিস ঝলসাইতেছে ঝলসাইতেছেন ঝলসাইতেন ঝলসাইব ঝলসাইবার ঝলসাইবি ঝলসাইবে ঝলসাইবেন ঝলসাইল ঝলসাইলাম ঝলসাইলি ঝলসাইলে ঝলসাইলেন ঝলসাইয়া ঝলসাইয়াছ ঝলসাইয়াছি ঝলসাইয়াছিল ঝলসাইয়াছিলাম ঝলসাইয়াছিলি ঝলসাইয়াছিলে ঝলসাইয়াছিলেন ঝলসাইয়াছিস ঝলসাইয়াছে ঝলসাইয়াছেন ঝলসাইয়ো ঝলসাও ঝলসাক ঝলসাচ্ছ ঝলসাচ্ছি ঝলসাচ্ছিল ঝলসাচ্ছিলাম ঝলসাচ্ছিলি ঝলসাচ্ছিলে ঝলসাচ্ছিলেন ঝলসাচ্ছিলেম ঝলসাচ্ছিলুম ঝলসাচ্ছিস ঝলসাচ্ছে ঝলসাচ্ছেন ঝলসাত ঝলসাতাম ঝলসাতিস ঝলসাতে ঝলসাতেন ঝলসাতেম ঝলসাতুম ঝলসান ঝলসানি ঝলসানো ঝলসানোর ঝলসাব ঝলসাবার ঝলসাবি ঝলসাবে ঝলসাবেন ঝলসাবো ঝলসাল ঝলসালাম ঝলসালি ঝলসালে ঝলসালেন ঝলসালেম ঝলসালুম ঝলসাস ঝলসায় ঝলসিত ঝলসিয়ে ঝলসে ঝলসেছ ঝলসেছি ঝলসেছিল ঝলসেছিলাম ঝলসেছিলি ঝলসেছিলে ঝলসেছিলেন ঝলসেছিলেম ঝলসেছিলুম ঝলসেছিস ঝলসেছে ঝলসেছেন ঝলসো ঝুলয় ঝড় ঝড়গতি ঝুড়া ঝুড়ান ঝুড়ানো ঝড়ি ঝুড়ি ঝুড়িঝুড়ি ঝড়িয়া ঝড়ো ঝড়োমেঘ ঝড়জল ঝড়ঝাপটা ঝড়তিপড়তি ঝড়তুফান ঝড়বৃষ্টি".split(" "),
              w_k: "ক কু কংকাল কংকালসার কংক্রিট কংগ্রাচুলেশনস কংগ্রেশনাল কংগ্রেস কংগ্রেসওয়ালা কংগ্রেসি কুংফু কংশ কংশবধ কংশবধকারী কংস কংসক কংসকার কংসারি কংসজিৎ কংসনারায়ণ কংসবণিক কংসবধ কংসবধকারী কংসরাগ কংসহা কঅক্ষর কুঅভ্যাস কুআশা কুআড় কই কুইক কুইকুই কুঁইকুঁই কইছ কইছি কইছিস কইছে কইছেন কুইজ কুইজদেশ কুইডিচ কইত কইতাম কইতিস কইতে কইতেছি কইতেছিল কইতেছিলাম কইতেছিলি কইতেছিলে কইতেছিলেন কইতেছিলেম কইতেছিলুম কইতেছেন কইতেন কইতেম কইতুম কুইন কুইনাইন কুইনিন কুইনোলোন কুইন্টাল কুইনলোন কুইনস কুইন্স কুইন্সরাইক কুইন্সল্যান্ড কুইপার কইব কইবার কইবি কইবে কুইবেক কইবেন কইবো কইমাছ কইরা কুইরিনাস কইরেন কইরো কইল কইলা কইলাম কইলি কইলে কইলেন কইলেম কইলুম কইসেন কইয়া কইয়াও কইয়ে কইয়েছ কইয়েছি কইয়েছিল কইয়েছিলাম কইয়েছিলি কইয়েছিলে কইয়েছিলেন কইয়েছিলেম কইয়েছিলুম কইয়েছিস কইয়েছে কইয়েছেন কইয়েবইয়ে কইয়েবলিয়ে কইয়ো কুউউ কএদ কও কওন কওমি কওলা কওয়া কওয়াই কওয়াও কওয়াচ্ছ কওয়াচ্ছি কওয়াচ্ছিল কওয়াচ্ছিলাম কওয়াচ্ছিলি কওয়াচ্ছিলে কওয়াচ্ছিলেন কওয়াচ্ছিলেম কওয়াচ্ছিলুম কওয়াচ্ছিস কওয়াচ্ছে কওয়াচ্ছেন কওয়াত কওয়াতাম কওয়াতিস কওয়াতে কওয়াতেন কওয়াতেম কওয়াতুম কওয়ান কওয়ানো কওয়াব কওয়াবার কওয়াবি কওয়াবে কওয়াবেন কওয়াবো কওয়ার কওয়াল কওয়ালাম কওয়ালি কওয়ালে কওয়ালেন কওয়ালেম কওয়ালুম কওয়ায় কুক কুক্কুট কুক্কুটী কুক্কুটজাতি কুক্কুর কুক্কুরী কুক্কুরপ্রতিম ককাই ককাইও ককাইত ককাইতাম ককাইতিস ককাইতে ককাইতেছ ককাইতেছি ককাইতেছিল ককাইতেছিলাম ককাইতেছিলি ককাইতেছিলে ককাইতেছিলেন ককাইতেছিস ককাইতেছে ককাইতেছেন ককাইতেন ককাইব ককাইবার ককাইবি ককাইবে ককাইবেন ককাইল ককাইলাম ককাইলি ককাইলে ককাইলেন ককাইয়া ককাইয়াছ ককাইয়াছি ককাইয়াছিল ককাইয়াছিলাম ককাইয়াছিলি ককাইয়াছিলে ককাইয়াছিলেন ককাইয়াছিস ককাইয়াছে ককাইয়াছেন ককাইয়ো ককাও ককাক ককাচ্ছ ককাচ্ছি ককাচ্ছিল ককাচ্ছিলাম ককাচ্ছিলি ককাচ্ছিলে ককাচ্ছিলেন ককাচ্ছিলেম ককাচ্ছিলুম ককাচ্ছিস ককাচ্ছে ককাচ্ছেন কুকাজ কুকাজকারী ককাত ককাতাম ককাতিস ককাতে ককাতেন ককাতেম ককাতুম ককান ককানি ককানো ককাব ককাবার ককাবি ককাবে ককাবেন ককাবো ককার কুকার্য ককাল ককালাম ককালি ককালে ককালেন ককালেম ককালুম ককাস ককায় ককি কুকি ককিও ককিয়ে ককিয়েছ ককিয়েছি ককিয়েছিল ককিয়েছিলাম ককিয়েছিলি ককিয়েছিলে ককিয়েছিলেন ককিয়েছিলেম ককিয়েছিলুম ককিয়েছিস ককিয়েছে ককিয়েছেন ককিয়ো কুকীর্তি ককেশাস ককেশীয় কুকথা কুকবি কুকুর কুকুরকুক্কুরী কুকুরকুণ্ডলী কুক্রিয় কুক্রিয়া কুকুরী কুকুরেদাঁত কুকুরছানা কুকুরছড়ি কুকুরতুল্য কুকুরবিড়াল কুকর্ম কুকর্মকারী কুকর্মা কুকর্মী কুকর্মরত কুকর্মসাধন কুকুরশোঁকা কৃকলাশ কৃকলাস ককলিয়ার কক্ষ কক্ষগতি কক্ষান্তর কুক্ষি কুক্ষিগত কক্ষচ্যুত কক্ষীয় কক্ষযুক্ত কুক্ষণ কক্ষত্যাগ কক্ষতল কক্ষন কক্ষনো কক্ষপুট কক্ষপথ কক্ষপথীয় কক্ষপথভিত্তিক কক্ষপথস্থ কক্ষভ্রষ্ট কক্স কক্সবাজার কক্সবাজারবাসী কুঁকড় কুঁকড়া কুঁকড়ানো কুঁকড়িমুকড়ি কুঁকড়িসুকড়ি কুঁকড়ো কুঁকড়োবার কুঁকড়ন কুখাদ্য কখানি কুখ্যাত কুখ্যাতি কখন কখনওই কখনওবা কখনকখন কখনো কখনোকখনো কখনোবা কখনোসখনো কখনসখন কুগঠন কুগ্রহ কঙ্ক কঙ্কাবতী কঙ্কাল কঙ্কালতন্ত্র কঙ্কালমালিনী কঙ্কালমালী কঙ্কালসার কঙ্কণ কঙ্কণী কঙ্কর কঙ্করোল কঙ্গু কঙ্গো কঙ্গুরা কা কাং কাংস কাংসক কাংসকার কাংস্য কাংস্যক কাংস্যকার কাংস্যকর্কশ কাংস্যনিন্দিত কাংস্যনির্মিত কাংস্যবণিক কাআ কাই কাঁই কাইউম কাইকুতু কাইচা কাইজা কাইট কাইটা কাইনী কাইনেজ কাইনেটিক্স কাইন্ড কাইন্ডনেস কাঁইবিচি কাঁইবীচি কাইম কাঁইমাই কাইমোগ্রাফ কাইলকা কাইলোন কাইলোমাইক্রন কাইসার কাইয়াঁ কাউ কাউকে কাউখালি কাউখালী কাউগাছি কাউড্রি কাউড্রিকলিন কাউন কাউনি কাউনিয়া কাউন্ট কাউন্টার কাউন্টারপয়েন্ট কাউন্টি কাউন্টিং কাউন্টিকুক কাউন্টিপোর্ট কাউন্টেস কাউন্টডাউন কাউন্সিল কাউন্সিলার কাউন্সিলম্যান কাউন্সিলর কাউবয় কাউবয়েস কাউর কাউয়া কাউয়াঠুঁটি কাএদা কাও কাওকে কাওমি কাওরা কাওরাখোলা কাওরান কাওরানবাজার কাওলা কাওলি কাওস কাওড়া কাওয়া কাওয়াজ কাওয়াল কাওয়ালি কাওয়ালী কাক কাকু কাঁক কাকই কাঁকই কাঁকুই কাককোকিল কাকূক্তি কাকা কাকাতো কাকাতুয়া কাকান কাকাবাবু কাঁকাল কাকী কাকচক্ষু কাকচিল কাকে কাকেরছা কাকেরঠ্যাং কাকোদর কাকজ্যোৎস্না কাকতালীয় কাকতাড়ুয়া কাকুতি কাকুতিমিনতি কাকতন্দ্রা কাঁকতলি কাকদ্বীপ কাঁকন কাকনিদ্রা কাঁকনমালা কাকপক্ষ কাকপক্ষী কাকপুচ্ছ কাকপদ কাকপুষ্ট কাকফল কাকুবাদ কাঁকবিড়ালি কাকবন্ধ্যা কাকবলি কাকভীরু কাকভোর কাঁকর কাকরাইল কাঁকরিয়া কাঁকুরে কাঁকরোল কাঁকরযুক্ত কাকল কাঁকলাস কাকলি কাকলিধ্বনি কাকলী কাকশীর্ষ কাকস্নান কাঁকড় কাঁকুড় কাঁকুড়গাছ কাঁকড়া কাঁকড়াবিছা কাঁকড়াবিছে কাঁকড়ি কাঁখ কাঁখতলি কাঁখবিড়ালি কাগ কাগাবগা কাগজ কাগজওয়ালা কাগজকলম কাগজখণ্ড কাগজাত কাগজাদ কাগজি কাগজী কাগুজে কাগজেকলমে কাগজদেখা কাগজনির্মাতা কাগজপত্তর কাগজপত্র কাগজবিক্রেতা কাগতি কাঙ্ক্ষ কাঙ্ক্ষা কাঙ্ক্ষিত কাঙ্ক্ষণীয় কাঙ্গাল কাঙ্গালি কাঙ্গালিখানা কাঙ্গালিনী কাঙ্গালিপনা কাঙ্গালপনা কাঙাল কাঙালখানা কাঙালি কাঙালিখানা কাঙালিনী কাঙালিপনা কাঙালিবিদায় কাঙালপনা কাচ কাঁচ কাচুক কাচকি কাঁচকলা কাঁচকড়া কাচা কাঁচা কাচাই কাচাইও কাচাইত কাচাইতাম কাচাইতিস কাচাইতে কাচাইতেছ কাচাইতেছি কাচাইতেছিল কাচাইতেছিলাম কাচাইতেছিলি কাচাইতেছিলে কাচাইতেছিলেন কাচাইতেছিস কাচাইতেছে কাচাইতেছেন কাচাইতেন কাচাইব কাচাইবার কাচাইবি কাচাইবে কাচাইবেন কাচাইল কাঁচাইল কাচাইলাম কাঁচাইলাম কাচাইলি কাঁচাইলি কাচাইলে কাঁচাইলে কাচাইলেন কাঁচাইলেন কাচাইয়া কাচাইয়াছ কাচাইয়াছি কাচাইয়াছিল কাচাইয়াছিলাম কাঁচাইয়াছিলাম কাচাইয়াছিলি কাঁচাইয়াছিলি কাচাইয়াছিলে কাঁচাইয়াছিলে কাচাইয়াছিলেন কাঁচাইয়াছিলেন কাচাইয়াছিস কাঁচাইয়াছিস কাচাইয়াছে কাঁচাইয়াছে কাচাইয়াছেন কাঁচাইয়াছেন কাচাইয়ো কাঁচাইয়ো কাচাও কাঁচাও কাচাক কাঁচাক কাঁচাকাজ কাঁচাকাল কাঁচাকথা কাঁচাগোল্লা কাঁচাঘুম কাচাচ্ছ কাঁচাচ্ছ কাচাচ্ছি কাঁচাচ্ছি কাচাচ্ছিল কাঁচাচ্ছিল কাচাচ্ছিলাম কাঁচাচ্ছিলাম কাচাচ্ছিলি কাঁচাচ্ছিলি কাচাচ্ছিলে কাঁচাচ্ছিলে কাচাচ্ছিলেন কাঁচাচ্ছিলেন কাচাচ্ছিলেম কাঁচাচ্ছিলেম কাচাচ্ছিলুম কাঁচাচ্ছিলুম কাচাচ্ছিস কাঁচাচ্ছিস কাচাচ্ছে কাঁচাচ্ছে কাচাচ্ছেন কাঁচাচ্ছেন কাঁচাচুল কাঁচাটাকা কাচাত কাঁচাত কাচাতাম কাঁচাতাম কাচাতিস কাঁচাতিস কাচাতে কাঁচাতে কাচাতেন কাঁচাতেন কাচাতেম কাঁচাতেম কাচাতুম কাঁচাতুম কাচান কাঁচান কাচানো কাঁচানো কাঁচাপাকা কাঁচাপণ্য কাঁচাপয়সা কাচাব কাঁচাব কাঁচাবাজার কাচাবার কাঁচাবার কাঁচাবাঁশে কাঁচাবাড়ি কাচাবি কাঁচাবি কাচাবে কাঁচাবে কাচাবেন কাঁচাবেন কাচাবো কাঁচাবো কাঁচাবুদ্ধি কাঁচাবয়স কাঁচামাথা কাঁচামাল কাঁচামিটে কাঁচামিঠা কাঁচামিঠে কাঁচামরিচ কাচারি কাঁচারসিদ কাচাল কাঁচাল কাচালাম কাঁচালাম কাচালি কাঁচালি কাচালে কাঁচালে কাঁচালেখা কাচালেন কাঁচালেন কাচালেম কাঁচালেম কাঁচালোক কাচালুম কাঁচালুম কাচাস কাঁচাস কাঁচাহাট কাঁচাহাত কাচায় কাঁচায় কাচি কাঁচি কাচিত কাচিতাম কাচিতিস কাচিতে কাচিতেছ কাচিতেছি কাচিতেছিল কাচিতেছিলাম কাচিতেছিলি কাচিতেছিলে কাচিতেছিলেন কাচিতেছিস কাচিতেছে কাচিতেছেন কাচিতেন কাচিব কাচিবার কাচিবি কাচিবে কাচিবেন কাচিল কাচিলাম কাচিলি কাচিলে কাচিলেন কাচিস কাচিয়া কাঁচিয়া কাচিয়াছ কাচিয়াছি কাচিয়াছিল কাচিয়াছিলাম কাচিয়াছিলি কাচিয়াছিলে কাচিয়াছিলেন কাচিয়াছিস কাচিয়াছে কাচিয়াছেন কাচিয়ে কাঁচিয়ে কাচিয়েছ কাঁচিয়েছ কাচিয়েছি কাঁচিয়েছি কাচিয়েছিল কাঁচিয়েছিল কাচিয়েছিলাম কাঁচিয়েছিলাম কাচিয়েছিলি কাঁচিয়েছিলি কাচিয়েছিলে কাঁচিয়েছিলে কাচিয়েছিলেন কাঁচিয়েছিলেন কাচিয়েছিলেম কাঁচিয়েছিলেম কাচিয়েছিলুম কাঁচিয়েছিলুম কাচিয়েছিস কাঁচিয়েছিস কাচিয়েছে কাঁচিয়েছে কাচিয়েছেন কাঁচিয়েছেন কাচিয়ো কাঁচিয়ো কাঁচী কাচ্চা কাঁচ্চা কাচ্চাবাচ্চা কাচ্চি কাচ্চিবিরিয়ানি কাচেন কাচছ কাচছি কাচছিল কাচছিলাম কাচছিলি কাচছিলে কাচছিলেন কাচছিলেম কাচছিলুম কাচছিস কাচছে কাচছেন কাচত কাচতাম কাচতিস কাচতে কাচতেন কাচতেম কাচতুম কাচুন কাচনির্মিত কাচপোকা কাঁচপোকা কাচব কাচবার কাচবি কাচবে কাচবেন কাচবো কাঁচুমাচু কাচল কাঁচল কাচলাম কাচলি কাঁচলি কাঁচুলি কাচলে কাচলেন কাচলেম কাচলুম কাঁচড়া কাছ কাছা কাছাআলগা কাছাকাছি কাছাকাছিভাবে কাছাখোলা কাছাঢিলা কাছাঢিলে কাছাধরা কাছান কাছানো কাছারি কাছারিঘর কাছাড় কাছি কাছিম কাছে কাছেকাছে কাছেপিঠে কাছট কাছটি কাছুটি কাছুমাছু কাছলা কাজ কাজু কাজআদায় কাজআনা কাজকাম কাজকারবার কাজকেনা কাজকম্ম কাজকরা কাজকর্ম কাজা কাজাকিস্তান কাজাকরা কাজাখ কাজাখিস্তান কাজি কাঁজি কাজিন কাজিয়া কাজিয়ানি কাজিয়ালি কাজী কাজেই কাজেকাজেই কাজেকর্মে কাজেডাঁটো কাজেরকাজি কাজেরধারা কাজেরবাজি কাজজানা কাজদেওয়া কাজদেখা কাজদেখানো কাজপাগল কাজপাগলা কাজবাগানো কাজবাজানো কাজুবাদাম কাজর কাজরি কাজরী কাজল কাজলকেশর কাজলা কাজলযুক্ত কাজলদানী কাজলদাম কাজলনয়ন কাজলনয়না কাজলপাতা কাজলবাস কাজলবর্ণা কাজলরেখা কাজললতা কাজহওয়া কাঞ্চা কাঞ্চি কাঞ্চী কাঞ্চন কাঞ্চনকান্তি কাঞ্চনগোলক কাঞ্চনজঙ্ঘা কাঞ্চনপাড়া কাঞ্চনপুর কাঞ্চনপল্লী কাঞ্চনমালা কাঞ্চনমণি কাঞ্চনমুদ্রা কাঞ্চনমূল্য কাঞ্জি কাঞ্জিক কাঞ্জিকা কাঞ্জিভরম কাঞ্জী কাট কাটুক কাটকাট কাটকাটরা কাটকুট কাটখোট্টা কাটগোঁয়ার কাটা কাঁটা কাটাই কাটাইও কাটাইত কাটাইতাম কাটাইতিস কাটাইতে কাটাইতেছ কাটাইতেছি কাটাইতেছিল কাটাইতেছিলাম কাটাইতেছিলি কাটাইতেছিলে কাটাইতেছিলেন কাটাইতেছিস কাটাইতেছে কাটাইতেছেন কাটাইতেন কাটাইব কাটাইবার কাটাইবি কাটাইবে কাটাইবেন কাটাইল কাটাইলাম কাটাইলি কাটাইলে কাটাইলেন কাটাইয়া কাটাইয়াছ কাটাইয়াছি কাটাইয়াছিল কাটাইয়াছিলাম কাটাইয়াছিলি কাটাইয়াছিলে কাটাইয়াছিলেন কাটাইয়াছিস কাটাইয়াছে কাটাইয়াছেন কাটাইয়ো কাঁটাওয়ালা কাটাক কাটাকাটা কাটাকাটি কাটাকানা কাটাকাপড় কাটাকুটি কাটাকথা কাঁটাকরা কাঁটাখোঁচা কাঁটাগাছ কাঁটাচামচ কাটাচ্ছ কাটাচ্ছি কাটাচ্ছিল কাটাচ্ছিলাম কাটাচ্ছিলি কাটাচ্ছিলে কাটাচ্ছিলেন কাটাচ্ছিলেম কাটাচ্ছিলুম কাটাচ্ছিস কাটাচ্ছে কাটাচ্ছেন কাঁটাচুয়া কাঁটাছুরি কাঁটাঝোপ কাঁটাযুক্ত কাটাত কাটাতাম কাঁটাতার কাটাতিস কাটাতে কাটাতেন কাটাতেম কাঁটাতোলা কাটাতুম কাঁটাদেওয়া কাঁটাধারী কাটান কাটানি কাটানো কাঁটানটে কাঁটাপুকুর কাটাপোনা কাঁটাফোড় কাটাব কাটাবার কাটাবাড়ি কাটাবি কাটাবে কাটাবেন কাটাবো কাঁটাবন কাটার কাটারা কাটারি কাটারী কাঁটাল কাটালাম কাটালি কাঁটালি কাঁটালচাঁপা কাটালে কাটালেন কাটালেম কাঁটালো কাটালুম কাঁটাশূন্য কাটাস কাটি কাঁটি কাটিং কাটিত কাটিতাম কাটিতিস কাটিতে কাটিতেছ কাটিতেছি কাটিতেছিল কাটিতেছিলাম কাটিতেছিলি কাটিতেছিলে কাটিতেছিলেন কাটিতেছিস কাটিতেছে কাটিতেছেন কাটিতেন কাটিব কাটিবার কাটিবি কাটিবে কাটিবেন কাটিল কাটিলা কাটিলাম কাটিলি কাটিলে কাটিলেন কাটিস কাটিয়া কাটিয়াছ কাটিয়াছি কাটিয়াছিল কাটিয়াছিলাম কাটিয়াছিলি কাটিয়াছিলে কাটিয়াছিলেন কাটিয়াছিস কাটিয়াছে কাটিয়াছেন কাটিয়ে কাটিয়েছ কাটিয়েছি কাটিয়েছিল কাটিয়েছিলাম কাটিয়েছিলি কাটিয়েছিলে কাটিয়েছিলেন কাটিয়েছিলেম কাটিয়েছিলুম কাটিয়েছিস কাটিয়েছে কাটিয়েছেন কাটিয়ো কাটে কাটেন কাটেনি কাটো কাটছ কাটছাঁট কাটছি কাটছিল কাটছিলাম কাটছিলি কাটছিলে কাটছিলেন কাটছিলেম কাটছিলুম কাটছিস কাটছে কাটছেন কাট্য কাট্টা কাটত কাটুত কাটতাম কাটতি কাটতিস কাটতে কাটতেন কাটতেম কাটতো কাটতুম কাটন কাটুন কাটনা কাটনি কাটুনি কাটব কাটবার কাটবি কাটবে কাটবেন কাটবো কাটব্য কাটমোল্লা কাটুর কাটুরকুটুর কাটরা কাটুরিয়া কাটল কাটলাম কাটলি কাটলে কাটলেট কাটলেন কাটলেম কাটলুম কাঠ কাঠকাঠ কাঠকুটো কাঠকুড়ানি কাঠকুড়ানিয়া কাঠকয়লা কাঠখোট্টা কাঠখোদাই কাঠখোলা কাঠখড় কাঠখড়ি কাঠগোলা কাঠগোলাপ কাঠগড় কাঠগড়া কাঠগুঁড়ো কাঠা কাঠাকালি কাঠাকিয়া কাঠাম কাঠামো কাঠামোগত কাঠামোজনিত কাঁঠাল কাঁঠালগাছ কাঁঠালি কাঁঠালিকলা কাঁঠালিচাঁপা কাঁঠালিয়া কাঁঠালচাঁপা কাঁঠালেরআঠা কাঁঠালেরআমসত্ত্ব কাঁঠালতলা কাঠি কাঁঠি কাঠিকাঠি কাঠিন্য কাঠিন্যপ্রাপ্ত কাঠিন্যহেতু কাঠিম কাঠির কাঠী কাঠচেরা কাঠচোটা কাঠেকাঠে কাঠেখড়ে কাঠেরপুতুল কাঠঠোকরা কাঠপিঁপড়া কাঠপিঁপড়ে কাঠপণ্য কাঠফাটা কাঠফড়িং কাঠবাদাম কাঠবিড়াল কাঠবিড়ালি কাঠবেরাল কাঠবেরালি কাঠবমি কাঠমান্ডু কাঠমিস্ত্রি কাঠমোল্লা কাঠমুন্ডু কাঠমূরতি কাঠমল্লিকা কাঠরা কাঠুরিয়া কাঠুরে কাণ্ড কাণ্ডকারখানা কাণ্ডাকাণ্ড কাণ্ডাকাণ্ডজ্ঞান কাণ্ডার কাণ্ডারি কাণ্ডজ কাণ্ডজ্ঞান কাণ্ডজ্ঞানহীন কাণ্ডযুক্ত কাণ্ডহীন কাণ্ঢার কাণ্ঢারি কাত কাঁত কাতুকুতু কাতা কাতান কাতার কাতারি কাতারবন্দি কাতি কাঁতি কাতিল কাতেব কাতেল কাত্যায়ন কাত্যায়নী কাতর কাতরা কাতরাই কাৎরাই কাতরাইও কাৎরাইও কাতরাইত কাৎরাইত কাতরাইতাম কাৎরাইতাম কাতরাইতিস কাৎরাইতিস কাতরাইতে কাৎরাইতে কাতরাইতেছ কাৎরাইতেছ কাতরাইতেছি কাৎরাইতেছি কাতরাইতেছিল কাৎরাইতেছিল কাতরাইতেছিলাম কাৎরাইতেছিলাম কাতরাইতেছিলি কাৎরাইতেছিলি কাতরাইতেছিলে কাৎরাইতেছিলে কাতরাইতেছিলেন কাৎরাইতেছিলেন কাতরাইতেছিস কাৎরাইতেছিস কাতরাইতেছে কাৎরাইতেছে কাতরাইতেছেন কাৎরাইতেছেন কাতরাইতেন কাৎরাইতেন কাতরাইব কাৎরাইব কাতরাইবার কাৎরাইবার কাতরাইবি কাৎরাইবি কাতরাইবে কাৎরাইবে কাতরাইবেন কাৎরাইবেন কাতরাইল কাৎরাইল কাতরাইলাম কাৎরাইলাম কাতরাইলি কাৎরাইলি কাতরাইলে কাৎরাইলে কাতরাইলেন কাৎরাইলেন কাতরাইয়া কাৎরাইয়া কাতরাইয়াছ কাৎরাইয়াছ কাতরাইয়াছি কাৎরাইয়াছি কাতরাইয়াছিল কাৎরাইয়াছিল কাতরাইয়াছিলাম কাৎরাইয়াছিলাম কাতরাইয়াছিলি কাৎরাইয়াছিলি কাতরাইয়াছিলে কাৎরাইয়াছিলে কাতরাইয়াছিলেন কাৎরাইয়াছিলেন কাতরাইয়াছিস কাৎরাইয়াছিস কাতরাইয়াছে কাৎরাইয়াছে কাতরাইয়াছেন কাৎরাইয়াছেন কাতরাইয়ো কাৎরাইয়ো কাতরাও কাৎরাও কাতরাক কাৎরাক কাতরাচ্ছ কাৎরাচ্ছ কাতরাচ্ছি কাৎরাচ্ছি কাতরাচ্ছিল কাৎরাচ্ছিল কাতরাচ্ছিলাম কাৎরাচ্ছিলাম কাতরাচ্ছিলি কাৎরাচ্ছিলি কাতরাচ্ছিলে কাৎরাচ্ছিলে কাতরাচ্ছিলেন কাৎরাচ্ছিলেন কাতরাচ্ছিলেম কাৎরাচ্ছিলেম কাতরাচ্ছিলুম কাৎরাচ্ছিলুম কাতরাচ্ছিস কাৎরাচ্ছিস কাতরাচ্ছে কাৎরাচ্ছে কাতরাচ্ছেন কাৎরাচ্ছেন কাতরাত কাৎরাত কাতরাতাম কাৎরাতাম কাতরাতিস কাৎরাতিস কাতরাতে কাতরাতেন কাৎরাতেন কাতরাতেম কাৎরাতেম কাতরাতুম কাৎরাতুম কাতরান কাৎরান কাতরানি কাতরানো কাৎরানো কাতরাব কাৎরাব কাতরাবার কাৎরাবার কাতরাবি কাৎরাবি কাতরাবে কাৎরাবে কাতরাবেন কাৎরাবেন কাতরাবো কাৎরাবো কাতরাল কাৎরাল কাতরালাম কাৎরালাম কাতরালি কাৎরালি কাতরালে কাৎরালে কাতরালেন কাৎরালেন কাতরালেম কাৎরালেম কাতরালুম কাৎরালুম কাতরাস কাৎরাস কাতরায় কাৎরায় কাতুরি কাতুরী কাতরে কাতরেছ কাৎরেছ কাতরেছি কাৎরেছি কাতরেছিল কাৎরেছিল কাতরেছিলাম কাৎরেছিলাম কাতরেছিলি কাৎরেছিলি কাতরেছিলে কাৎরেছিলে কাতরেছিলেন কাৎরেছিলেন কাতরেছিলেম কাৎরেছিলেম কাতরেছিলুম কাৎরেছিলুম কাতরেছিস কাৎরেছিস কাতরেছে কাৎরেছে কাতরেছেন কাৎরেছেন কাতরোক্তি কাতর্য কাতরতা কাতরতাযুক্ত কাতরতাপূর্ণ কাতরতাসূচক কাতরধ্বনি কাতরভাবে কাতল কাতলা কাতলামাছ কাতলমাছ কাঁথ কাঁথগড়া কাঁথা কাঁথাস্টিচ কাথবার্ট কাঁদ কাঁদুক কাঁদকাঁদ কাদা কাঁদা কাঁদাই কাঁদাইও কাঁদাইত কাঁদাইতাম কাঁদাইতিস কাঁদাইতে কাঁদাইতেছ কাঁদাইতেছি কাঁদাইতেছিল কাঁদাইতেছিলাম কাঁদাইতেছিলি কাঁদাইতেছিলে কাঁদাইতেছিলেন কাঁদাইতেছিস কাঁদাইতেছে কাঁদাইতেছেন কাঁদাইতেন কাঁদাইব কাঁদাইবার কাঁদাইবি কাঁদাইবে কাঁদাইবেন কাঁদাইল কাঁদাইলাম কাঁদাইলি কাঁদাইলে কাঁদাইলেন কাঁদাইয়া কাঁদাইয়াছ কাঁদাইয়াছি কাঁদাইয়াছিল কাঁদাইয়াছিলাম কাঁদাইয়াছিলি কাঁদাইয়াছিলে কাঁদাইয়াছিলেন কাঁদাইয়াছিস কাঁদাইয়াছে কাঁদাইয়াছেন কাঁদাইয়ো কাঁদাক কাঁদাকাটা কাঁদাকাটি কাদাকাদা কাদাখোঁচা কাদাগোলা কাঁদাচ্ছ কাঁদাচ্ছি কাঁদাচ্ছিল কাঁদাচ্ছিলাম কাঁদাচ্ছিলি কাঁদাচ্ছিলে কাঁদাচ্ছিলেন কাঁদাচ্ছিলেম কাঁদাচ্ছিলুম কাঁদাচ্ছিস কাঁদাচ্ছে কাঁদাচ্ছেন কাদাজল কাদাযুক্ত কাদাটে কাঁদাত কাঁদাতাম কাঁদাতিস কাঁদাতে কাঁদাতেন কাঁদাতেম কাঁদাতুম কাঁদান কাঁদানেগ্যাস কাঁদানো কাঁদাব কাঁদাবার কাঁদাবি কাঁদাবে কাঁদাবেন কাঁদাবো কাদাভরা কাদামাখা কাদামাটি কাদারছিট কাঁদাল কাঁদালাম কাঁদালি কাঁদালে কাঁদালেন কাদালেপটা কাঁদালেম কাঁদালুম কাঁদাস কাঁদি কাঁদিছে কাঁদিত কাঁদিতাম কাঁদিতিস কাঁদিতে কাঁদিতেছ কাঁদিতেছি কাঁদিতেছিল কাঁদিতেছিলাম কাঁদিতেছিলি কাঁদিতেছিলে কাঁদিতেছিলেন কাঁদিতেছিস কাঁদিতেছে কাঁদিতেছেন কাঁদিতেন কাঁদিব কাঁদিবার কাঁদিবি কাঁদিবে কাঁদিবেন কাদিম কাদির কাদিরুর কাঁদিল কাঁদিলা কাঁদিলাম কাঁদিলি কাঁদিলে কাঁদিলেন কাঁদিস কাঁদিয়া কাঁদিয়াছ কাঁদিয়াছি কাঁদিয়াছিল কাঁদিয়াছিলাম কাঁদিয়াছিলি কাঁদিয়াছিলে কাঁদিয়াছিলেন কাঁদিয়াছিস কাঁদিয়াছে কাঁদিয়াছেন কাদিয়ান কাদিয়ানী কাঁদিয়ে কাঁদিয়েছ কাঁদিয়েছি কাঁদিয়েছিল কাঁদিয়েছিলাম কাঁদিয়েছিলি কাঁদিয়েছিলে কাঁদিয়েছিলেন কাঁদিয়েছিলেম কাঁদিয়েছিলুম কাঁদিয়েছিস কাঁদিয়েছে কাঁদিয়েছেন কাঁদিয়ো কাঁদে কাঁদেন কাদের কাঁদের কাদেরিয়া কাঁদো কাঁদোকাঁদো কাঁদছ কাঁদছি কাঁদছিল কাঁদছিলাম কাঁদছিলি কাঁদছিলে কাঁদছিলেন কাঁদছিলেম কাঁদছিলুম কাঁদছিস কাঁদছে কাঁদছেন কাঁদত কাঁদতাম কাঁদতিস কাঁদতে কাঁদতেন কাঁদতেম কাঁদতুম কাদ্দা কাঁদন কাঁদুন কাঁদনি কাঁদুনি কাঁদনিগাওয়া কাঁদুনিগাওয়া কাঁদুনে কাঁদব কাঁদবার কাঁদবি কাঁদবে কাঁদবেন কাঁদবো কাদম্ব কাদম্বকুল কাদম্বিনী কাদম্বর কাদম্বরী কাঁদল কাঁদলাম কাঁদলি কাদলী কাঁদলে কাঁদলেন কাঁদলেম কাঁদলুম কাঁধ কাঁধকাট কাঁধকাটা কাঁধা কাঁধাকাঁধি কাঁধার কাঁধেচাপা কাঁধবদলানো কান কানু কানকাটা কানকো কানকোটারি কানকথা কানখাড়া কানখুস্কি কানখড়কে কানা কানাই কানাইঘাট কানাইপুর কানাইবলাই কানাইয়া কানাওয়ালা কানাকানি কানাকলসি কানাকড়ি কানাকুয়া কানাকুয়ো কানাখোঁড়া কানাগলি কানাঘুষা কানাঘুষো কানাচ কানাচে কানাডা কানাডিয়ান কানাডীয় কানাত কানাবেগুন কানামাইসিন কানামাছি কানাড়া কানাড়ি কানি কানিংহাম কানীন কানীনী কানেআঙুল কানেআসা কানেওঠা কানেকানে কানেক্ট কানেক্টিভ কানেকশান কানেকশন কানেকশনদ্য কানেখাটো কানেতালা কানেতোলা কানেতুলা কানেধরে কানেবাজা কানেরিয়া কানেরপোকা কানেলাগা কানেশোনা কানেস্তারা কানছা কানজোখা কানঝাপটা কান্ট কানযুক্ত কানটি কানুটি কান্টোয়া কান্ট্রি কান্ট্রিজ কান্ত কান্তা কান্তার কান্তায়স কান্তি কান্তিক কান্তিযুক্ত কান্তিদেব কান্তিপুর কান্তিবিদ্যা কান্তিমান কান্তিমতী কান্তিময় কান্তিময়ী কান্তিলৌহ কান্তজী কান্তলৌহ কান্দ কান্দা কান্দানো কান্দাহার কান্দি কান্দে কানদেওয়া কান্দন কান্দর্প কান্ধার কানধরা কানন কানুন কাননকুন্তলা কাননকুসুম কানুনগো কানুনগোই কান্না কান্নাকাটি কান্নাখেকো কান্নারচোট কান্নাড়ি কাননিকা কান্নেখেকো কানন্দ কাননবাসিনী কাননবাসী কাননমাঝারে কানপাটা কানপাতলা কানপাশা কানপুর কানফাটা কানফাটান কানফাটানো কানফুল কানবালা কানভাঙা কানভাঙানি কানভাঙানো কানভারী কানমলা কানসাট কানসাস কানসোনা কানড় কানড়া কানড়ি কানড়ী কানয়াত কাপ কাঁপ কাঁপুক কাঁপা কাঁপাই কাঁপাইও কাঁপাইত কাঁপাইতাম কাঁপাইতিস কাঁপাইতে কাঁপাইতেছ কাঁপাইতেছি কাঁপাইতেছিল কাঁপাইতেছিলাম কাঁপাইতেছিলি কাঁপাইতেছিলে কাঁপাইতেছিলেন কাঁপাইতেছিস কাঁপাইতেছে কাঁপাইতেছেন কাঁপাইতেন কাঁপাইব কাঁপাইবার কাঁপাইবি কাঁপাইবে কাঁপাইবেন কাঁপাইল কাঁপাইলাম কাঁপাইলি কাঁপাইলে কাঁপাইলেন কাঁপাইয়া কাঁপাইয়াছ কাঁপাইয়াছি কাঁপাইয়াছিল কাঁপাইয়াছিলাম কাঁপাইয়াছিলি কাঁপাইয়াছিলে কাঁপাইয়াছিলেন কাঁপাইয়াছিস কাঁপাইয়াছে কাঁপাইয়াছেন কাঁপাইয়ো কাঁপাও কাঁপাক কাপাকের কাঁপাচ্ছ কাঁপাচ্ছি কাঁপাচ্ছিল কাঁপাচ্ছিলাম কাঁপাচ্ছিলি কাঁপাচ্ছিলে কাঁপাচ্ছিলেন কাঁপাচ্ছিলেম কাঁপাচ্ছিলুম কাঁপাচ্ছিস কাঁপাচ্ছে কাঁপাচ্ছেন কাঁপাত কাঁপাতাম কাঁপাতিস কাঁপাতে কাঁপাতেন কাঁপাতেম কাঁপাতুম কাঁপান কাঁপানে কাঁপানো কাঁপাব কাঁপাবার কাঁপাবি কাঁপাবে কাঁপাবেন কাঁপাবো কাঁপার কাঁপাল কাঁপালাম কাঁপালি কাপালিক কাঁপালে কাঁপালেন কাঁপালেম কাঁপালুম কাপাস কাঁপাস কাপাসিয়া কাঁপায় কাঁপায়া কাপি কাঁপি কাঁপিও কাঁপিছে কাঁপিত কাঁপিতাম কাঁপিতিস কাঁপিতে কাঁপিতেছ কাঁপিতেছি কাঁপিতেছিল কাঁপিতেছিলাম কাঁপিতেছিলি কাঁপিতেছিলে কাঁপিতেছিলেন কাঁপিতেছিস কাঁপিতেছে কাঁপিতেছেন কাঁপিতেন কাঁপিব কাঁপিবার কাঁপিবি কাঁপিবে কাঁপিবেন কাঁপিল কাঁপিলাম কাঁপিলি কাঁপিলে কাঁপিলেন কাঁপিস কাঁপিয়া কাঁপিয়াছ কাঁপিয়াছি কাঁপিয়াছিল কাঁপিয়াছিলাম কাঁপিয়াছিলি কাঁপিয়াছিলে কাঁপিয়াছিলেন কাঁপিয়াছিস কাঁপিয়াছে কাঁপিয়াছেন কাঁপিয়ে কাঁপিয়েছ কাঁপিয়েছি কাঁপিয়েছিল কাঁপিয়েছিলাম কাঁপিয়েছিলি কাঁপিয়েছিলে কাঁপিয়েছিলেন কাঁপিয়েছিলেম কাঁপিয়েছিলুম কাঁপিয়েছিস কাঁপিয়েছে কাঁপিয়েছেন কাঁপিয়ো কাঁপে কাঁপেন কাঁপছ কাঁপছি কাঁপছিল কাঁপছিলাম কাঁপছিলি কাঁপছিলে কাঁপছিলেন কাঁপছিলেম কাঁপছিলুম কাঁপছিস কাঁপছে কাঁপছেন কাপজয়ী কাপটিক কাপট্য কাঁপত কাপ্তাই কাপ্তান কাপ্তানি কাঁপতাম কাঁপতিস কাঁপতে কাপ্তেন কাঁপতেন কাঁপতেম কাঁপতুম কাপত্রয়ী কাঁপন কাঁপুন কাঁপুনি কাপপ্লেট কাঁপব কাঁপবার কাঁপবি কাঁপবে কাঁপবেন কাঁপবো কাপুর কাপুরুষ কাপুরুষজনোচিত কাপুরুষতা কাপুরুষত্ব কাঁপল কাঁপলাম কাঁপলি কাঁপলে কাঁপলেন কাঁপলেম কাঁপলুম কাপসহ কাপড় কাপড়কাচা কাপড়খারাপ কাপড়খসা কাপড়ি কাপড়িয়া কাপুড়িয়া কাপড়ী কাপড়চেরা কাপড়চোপড় কাপুড়ে কাপড়ছাড়া কাপড়ছাড়ানো কাপড়জামা কাপড়তোলা কাপড়নষ্ট কাপড়পাট কাপড়বিলাসী কাফ কাফগির কাফানি কাফি কাফির কাফিরী কাফিলা কাফে কাফের কাফেরি কাফেরী কাফেলা কাফেলাসালার কাফন কাফফারা কাফুর কাফরি কাফ্রি কাফরুল কাবু কাবা কাবাই কাবাঘর কাবাডি কাবাব কাবাবচিনি কাবার কাবারি কাবারী কাবালা কাবাড়ি কাবিয কাবিন কাবিননামা কাবিল কাবিলিয়ত কাবিলীয়ত কাবিলতি কাবীন কাবীননামা কাবেজ কাবেয কাবেল কাবেলতি কাব্য কাব্যউপন্যাস কাব্যকার কাব্যকোবিদ কাব্যকলা কাব্যগ্রন্থ কাব্যাংশ কাব্যাদি কাব্যানুশীলন কাব্যালংকার কাব্যালোচনা কাব্যি কাব্যিক কাব্যচোর কাব্যচর্চা কাব্যোপজীবিকা কাব্যজগত কাব্যজগৎ কাব্যজিজ্ঞাসা কাব্যযথা কাব্যতীর্থ কাব্যতত্ত্ব কাব্যধারা কাব্যনাট্য কাব্যপাঠক কাব্যপরিক্রমা কাব্যপ্রণয়ন কাব্যপ্রতিভা কাব্যবাংলা কাব্যবিশারদ কাব্যমালঞ্চ কাব্যরীতি কাব্যরচনা কাব্যরচনাকারী কাব্যরূপ কাব্যরস কাব্যরসিক কাব্যলক্ষ্মী কাব্যলহরী কাব্যসমগ্র কাবুল কাবলি কাবুলি কাবলিওয়ালা কাবুলিওয়ালা কাবুলদেশীয় কাভার কাভি কাম কামুক কামুকা কামকাজ কামুকী কামকেলি কামুকতা কামক্রীড়া কামকলা কামকলহ কামক্ষুধা কামগ কামগামী কামগন্ধ কামগম কামাই কামাইও কামাইত কামাইতাম কামাইতিস কামাইতে কামাইতেছ কামাইতেছি কামাইতেছিল কামাইতেছিলাম কামাইতেছিলি কামাইতেছিলে কামাইতেছিলেন কামাইতেছিস কামাইতেছে কামাইতেছেন কামাইতেন কামাইব কামাইবার কামাইবি কামাইবে কামাইবেন কামাইল কামাইলাম কামাইলি কামাইলে কামাইলেন কামাইয়া কামাইয়াছ কামাইয়াছি কামাইয়াছিল কামাইয়াছিলাম কামাইয়াছিলি কামাইয়াছিলে কামাইয়াছিলেন কামাইয়াছিস কামাইয়াছে কামাইয়াছেন কামাইয়ো কামাও কামাক কামাক্ষী কামাখ্যা কামাখ্যাতীর্থ কামাগ্নি কামাচার কামাচ্ছ কামাচ্ছি কামাচ্ছিল কামাচ্ছিলাম কামাচ্ছিলি কামাচ্ছিলে কামাচ্ছিলেন কামাচ্ছিলেম কামাচ্ছিলুম কামাচ্ছিস কামাচ্ছে কামাচ্ছেন কামাত কামাতাম কামাতিস কামাতে কামাতেন কামাতেম কামাতুম কামাত্মা কামাতুর কামাতুরা কামান কামানি কামানিয়া কামানী কামানো কামান্দ কামান্ধ কামানবন্দুক কামানল কামানহতে কামাব কামাবার কামাবি কামাবে কামাবেন কামাবো কামাবশায়িতা কামাবসায়িতা কামার কামারখন্দ কামারটুলি কামার্ত কামারনী কামারশাল কামারশালা কামাল কামালাত কামালাম কামালি কামালে কামালেন কামালেম কামাল্য কামালুম কামাস কামাসক্ত কামাসক্তি কামায় কামিও কামিজ কামিন কামিনী কামিনীকাঞ্চন কামিনীসুলভ কামিল কামিলকার কামিলা কামিয়াব কামিয়াবি কামিয়ে কামিয়েছ কামিয়েছি কামিয়েছিল কামিয়েছিলাম কামিয়েছিলি কামিয়েছিলে কামিয়েছিলেন কামিয়েছিলেম কামিয়েছিলুম কামিয়েছিস কামিয়েছে কামিয়েছেন কামিয়ো কামী কামচার কামচারিণী কামচারী কামচোর কামচর কামেচ্ছা কামেজ কামেল কামেলকার কামেশ্বর কামোদ কামোদা কামোদ্দীপক কামোদরাগ কামোন্মত্ত কামোন্মত্ততা কামজ কামজ্বর কামট কাম্য কামটঙ্গি কামটুঙ্গি কাম্যতা কাম্যতম কাম্যফল কাম্যশালী কামঠ কামতা কামতাপুর কামতন্ত্র কামদ কামদুঘা কামদা কামদানি কামদানী কামদেব কামধুক কামধেনু কামনা কামনাকারী কামনাযুক্ত কামনাপূরক কামনাপরাগ কামনাপূর্ণ কামনাপূর্বক কামনাবাসনা কামনাবিহীন কামনাবর্জিত কামনাহীন কামপীড়িত কামপত্নী কামপ্রদ কামপ্রবৃত্তি কামপরবশ কামবাই কামবাণ কামবাসনা কাম্বোজ কামবর্ত্ম কামবহ্নি কামভাব কামরা কামরাঙ্গা কামরাঙ্গামরিচ কামরাঙা কামরূপ কামরূপা কামরূপী কামরূপজাত কামরুল কামলা কামলতা কামশখ কামশাস্ত্র কামশর কামসখ কামস্তুতি কামসূত্র কামড় কামড়কাটা কামড়া কামড়াই কামড়াইও কামড়াইত কামড়াইতাম কামড়াইতিস কামড়াইতে কামড়াইতেছ কামড়াইতেছি কামড়াইতেছিল কামড়াইতেছিলাম কামড়াইতেছিলি কামড়াইতেছিলে কামড়াইতেছিলেন কামড়াইতেছিস কামড়াইতেছে কামড়াইতেছেন কামড়াইতেন কামড়াইব কামড়াইবার কামড়াইবি কামড়াইবে কামড়াইবেন কামড়াইল কামড়াইলাম কামড়াইলি কামড়াইলে কামড়াইলেন কামড়াইয়া কামড়াইয়াছ কামড়াইয়াছি কামড়াইয়াছিল কামড়াইয়াছিলাম কামড়াইয়াছিলি কামড়াইয়াছিলে কামড়াইয়াছিলেন কামড়াইয়াছিস কামড়াইয়াছে কামড়াইয়াছেন কামড়াইয়ো কামড়াও কামড়াক কামড়াকামড়ি কামড়াচ্ছ কামড়াচ্ছি কামড়াচ্ছিল কামড়াচ্ছিলাম কামড়াচ্ছিলি কামড়াচ্ছিলে কামড়াচ্ছিলেন কামড়াচ্ছিলেম কামড়াচ্ছিলুম কামড়াচ্ছিস কামড়াচ্ছে কামড়াচ্ছেন কামড়াত কামড়াতাম কামড়াতিস কামড়াতে কামড়াতেন কামড়াতেম কামড়াতুম কামড়ান কামড়ানি কামড়ানো কামড়াব কামড়াবার কামড়াবি কামড়াবে কামড়াবেন কামড়াবো কামড়াল কামড়ালাম কামড়ালি কামড়ালে কামড়ালেন কামড়ালেম কামড়ালুম কামড়াস কামড়ায় কামড়ি কামড়িয়েছিল কামড়ে কামড়েছ কামড়েছি কামড়েছিল কামড়েছিলাম কামড়েছিলি কামড়েছিলে কামড়েছিলেন কামড়েছিলেম কামড়েছিলুম কামড়েছিস কামড়েছে কামড়েছেন কামড়েধরা কামড়দেওয়া কামড়বসানো কামড়মারা কার কারু কাঁর কারক কারুকাজ কারুকার্য কারুকার্যখচিত কারুকার্যযুক্ত কারুকার্যময় কারুকার্যহীন কারকিত কারকুত কারকতত্ত্ব কারকুন কারকরূপে কারুকর্ম কারুকর্মী কারুকলা কার্কশ্য কারখানা কার্গিল কারগো কার্গো কারা কারাকারা কারাকাহিনী কারাগার কারাগৃহ কারাজীবন কারাটে কারাতে কারাদণ্ড কারাধ্যক্ষ কারানির্যাতন কারাপাল কারাফটক কারাবা কারাবাস কারাবন্দিত্ব কারাবন্দী কারাবন্ধন কারাবরণ কারাভান কারাভানে কারাভোগ কারাভ্যন্তরে কারামুক্ত কারামুক্তি কারার কারারক্ষী কারারুদ্ধ কারি কারিওয়ালি কারিকা কারিকর কারিকরি কারিকরণ কারিকুলাম কারিগর কারিগরি কারিণী কারিত কারিন্দা কারিব কারিশমা কারিয়া কারী কারচোপ কারচোব কারচুপি কারচূবি কারেক্ট কারেকশন কারো কারেন্ট কারেন্টএকাউন্ট কারেন্স কারেন্সি কারো কারোপ্রতি কারোয়া কারোয়াঁ কারোয়ান কারুছত্র কারজাই কারজাত কার্জন কার্জনহল কার্ট কার্যকারক কার্যকারিণী কার্যকারিতা কার্যকারী কার্যকারণ কার্যকারণবিধি কার্যকারণসূত্র কার্যকাল কার্যকর কার্যকরী কার্যকরণ কার্যকরতা কার্যক্রম কার্যকলাপ কার্যকুশল কার্যক্ষেত্র কার্যক্ষম কার্যক্ষমতা কার্যগতি কার্টা কার্যাকার্য কার্যাদি কার্যাধ্যক্ষ কার্যান্তর কার্যানুরোধে কার্যাবলী কার্টার কার্যার্থী কার্যারম্ভ কার্যালয় কার্টিজ কার্টিজের কার্টিস কার্যোদ্ধার কার্যোপযুক্ত কার্যোপযোগী কার্যোপলক্ষ্যে কার্যত কার্যতালিকা কার্যতৎপর কার্যদক্ষ কার্যদিবস কার্টুন কার্যনির্বাহ কার্যনির্বাহক কার্যনির্বাহী কার্যনিষ্পাদক কার্যনিষ্পাদন কার্যনিষ্পত্তি কার্টুনিস্ট কার্যপটু কার্যপদ্ধতি কার্যপন্থা কার্যপরিচালক কার্যপরিধি কার্যপরিষদ কার্যপ্রণালী কার্যপরম্পরা কার্যফল কার্যবাহ কার্যবিধি কার্যবিবরণী কার্যবীর্য কার্যবোধক কার্যব্যপদেশে কার্যবণ্টন কার্যবশত কার্যভার কার্যভিত্তিক কার্যমূলক কার্টলি কার্যশীল কার্যসাধন কার্যসিদ্ধি কার্যসমাধা কার্যসম্পাদক কার্যসম্পাদন কার্যহীনতা কার্ড কার্ডিওগ্রাফ কার্ডিনাল কার্ডিফ কার্ডিয়াক কার্ডস্মৃতি কারণ কারণাত্মক কারণিক কারুণিক কারণীভূত কারণেঅকারণে কারণজিজ্ঞাসা কারণজনিত কারণজল কারুণ্য কারণযুক্ত কারণ্ডব কারণতা কারণধর্ম কারণনির্দেশক কারণপ্রদর্শনসহ কারণবারি কারণবিহীন কারণমালা কারণরূপে কারণশরীর কারণস্বরূপ কারণহীন কার্তিক কার্তিকেয় কার্তেসীয় কারতুজ কার্তুজ কার্ত্তিক কার্থেজ কারদানি কারদানী কারদানো কার্দিয়াল কার্নাল কার্নিগান কার্নিভাল কার্নিভোরা কার্নিভ্যাল কার্নিশ কার্নেগী কার্নেল কার্নো কার্প কারপাল কার্পাল কার্পাস কার্পাসবস্ত্র কার্পাসসূত্র কারপেট কার্পেট কার্পটিক কার্পণ্য কারপরদাজ কারপরদাজি কারপরদার কার্ফু কারফা কারফিউ কারফোন কারফরমা কার্বক্সিল কার্বক্সিলিক কারবা কার্বা কারবাইড কার্বাইড কারবার কারবারি কারবারজনিত কারবারমুক্ত কারবালা কারবেল্লা কারবেল্লী কার্বো কার্বোহাইড্রেট কারবন কার্বন কারবনকপি কার্বনকপি কারবনিক কার্বনিক কার্বনিকঅ্যাসিড কার্বনিল কার্বনচক্র কার্বনযুক্ত কার্বনডাই কার্বনডাইঅক্সাইড কার্বনপেপার কারবলিক কার্বলিক কারবলিকসোপ কার্বলিকসোপ কার্ভ কার্মুক কার্মুকধারিণী কার্মুকধারী কারমাইকেল কার্মার কারমালা কার্মিক কাররবাই কার্ল কার্লাইল কার্লো কার্লোস কার্লস্ট্রম কার্লসন কারুশিল্প কারুশিল্পী কার্শিয়ং কার্শ্য কার্ষাপণ কার্ষ্ণ কার্ষ্ণ্য কার্স কারসাজ কারসাজি কারসাজী কার্সিনোজেন কার্সিনোমা কারসন কার্সন কারুসমবায় কারয়িতা কারয়িত্রী কাল কালু কালকা কালকাটানো কালকে কালকেন্দ্রিক কালকূট কালক্রিয়া কালক্রমাগত কালক্রমিক কালক্রমে কালক্ষেপ কালক্ষেপণ কালক্ষয় কালখণ্ড কালগঙ্গা কালগ্রাস কালঘাম কালঘুম কালা কালাংড়া কালাআদমি কালাআদমী কালাইগর কালাকানুন কালাকাল কালাগ্নি কালাগুরু কালাচাঁদ কালাজাম কালাজ্বর কালাতিক্রম কালাতিপাত কালাতীত কালাত্যয় কালানুক্রম কালানুক্রমিক কালানুগত কালানো কালান্তক কালান্তর কালানুবর্তী কালানল কালানুসারী কালাপানি কালাপাহাড় কালাপাহাড়ি কালাপীর কালাপেড়ে কালাপুর কালাবাজার কালাভাব কালাম কালামুখ কালামুখী কালামুখো কালামেশ্বর কালামুল্লাহ কালার কালারড কালাশৌচ কালাশুদ্ধি কালাশনিকভ কালাহান্দি কালাহারি কালায়াত কালি কালিক কালিকা কালিকাছা কালিকাদেবী কালিকাপুর কালিকাপুরাণ কালিকামঙ্গল কালিকাশ্রম কালিকচ্ছ কালিকট কালিকরা কালিকলম কালিগঙ্গা কালিঘষা কালিচন্দ্র কালিজিরা কালিঝুলি কালিদাস কালিদহ কালিনী কালিন্দী কালিমা কালিমাখানো কালিমাময় কালিমালিপ্ত কালিম্পং কালিহওয়া কালিহাতি কালিয় কালিয়া কালিয়াকৈর কালিয়াগঞ্জ কালিয়দমন কালী কালচক্র কালীকৃষ্ণ কালীগঙ্গা কালীগঞ্জ কালীঘাট কালচার কালচারাল কালচিটা কালচিটে কালচিহ্ন কালচে কালীতলা কালীধাম কালীন কালীনাথ কালীপূজা কালীপূজো কালীপ্রসন্ন কালীবাড়ি কালীভক্ত কালীভোগ কালীমন্দির কালীমূর্তি কালীয় কালীয়দমন কালে কালেংড়া কালেকালে কালেক্ট কালেক্টার কালেক্টারি কালেক্টেড কালেক্টর কালেক্টরি কালেক্টরেট কালেকশান কালেকশন কালেধরা কালেব কালেভদ্রে কালেমা কালেমাসংখ্যা কালো কালোআঁচড় কালোকিষ্টি কালোগহ্বর কালোচিত কালোচিতা কালোচোখি কালোচোখী কালোছায়া কালোজাম কালোজিরা কালোজিরে কালোঝুল কালোটাকা কালোত্তীর্ণ কালোদিন কালোধলো কালোপেড়ে কালোপযোগী কালোবাজার কালোবাজারি কালোবাজারে কালোব্যাজ কালোভ্রমর কালোমুখ কালোমতো কালোরঙ কালোহাঁড়ি কালোয়াত কালোয়াতি কালোয়াতী কালজাম কালজ্ঞ কালজ্ঞান কালজয়ী কালযাপন কালটিভেশন কালত্রয় কালতুল্য কালদীয় কালধারা কালধর্ম কালনাগ কালনাগিনী কালনিদ্রা কালনির্ণায়ক কালনির্ণয় কালনিরূপক কালনির্ভর কালনেমি কালনটেশ কালন্দর কালনয়ন কালপেঁচা কালপঞ্জি কাল্পনিক কাল্পনিকচরিত্র কাল্পনিকতা কালপ্রাপ্তি কালপ্রিট কালপরিমাণ কালপর্যায় কালপ্রতিপদ কালপ্রবাহ কালপ্রভাব কালপ্রমাদ কালপরশু কালপুরুষ কালপৃষ্ঠ কালব কালবাউশ কালবাচক কালবিক্ষেপ কালবেলা কালবৈশাখী কালবোশেখি কালবোস কালব্যাজ কালবৃত্ত কালবুদ কালভৈরব কালম কালমৃগয়া কালমেঘ কালুরঘাট কালরাত্রি কালরূপ কালশিটা কালশিটে কালশিরা কালশুদ্ধি কালশশী কালসংগতি কালসাদা কালসাপ কালসাপিনী কালসিন্ধু কালসমুদ্র কালস্রোত কালসর্প কালসহ কালহরণ কাশ কাশুক কাশা কাশাকাশি কাশি কাশিত কাশিতাম কাশিতিস কাশিতে কাশিতেছ কাশিতেছি কাশিতেছিল কাশিতেছিলাম কাশিতেছিলি কাশিতেছিলে কাশিতেছিলেন কাশিতেছিস কাশিতেছে কাশিতেছেন কাশিতেন কাশিব কাশিবার কাশিবি কাশিবে কাশিবেন কাশিম কাশিমবাজার কাশিরোগ কাশিল কাশিলাম কাশিলি কাশিলে কাশিলেন কাশিস কাশিয়া কাশিয়াছ কাশিয়াছি কাশিয়াছিল কাশিয়াছিলাম কাশিয়াছিলি কাশিয়াছিলে কাশিয়াছিলেন কাশিয়াছিস কাশিয়াছে কাশিয়াছেন কাশিয়ো কাশী কাশীধাম কাশীনাথ কাশীপুর কাশীপ্রাপ্তি কাশীরাজ কাশীরাম কাশীলাভ কাশীশ কাশীশ্বর কাশে কাশেন কাশছ কাশছি কাশছিল কাশছিলাম কাশছিলি কাশছিলে কাশছিলেন কাশছিলেম কাশছিলুম কাশছিস কাশছে কাশছেন কাশ্যপ কাশ্যপেয় কাশত কাশতাম কাশতিস কাশতে কাশতেন কাশতেম কাশতৃণ কাশতুম কাশুন কাশন্দি কাশফুল কাশব কাশবার কাশবি কাশবে কাশবেন কাশবো কাশবন কাশ্মীর কাশ্মীরি কাশ্মীরী কাশ্মীরজয় কাশ্মীরদেশ কাশ্মীরদেশীয় কাশরোগ কাশল কাশলাম কাশলি কাশলে কাশলেন কাশলেম কাশলুম কাষায় কাষ্ঠ কাষ্ঠকাশি কাষ্ঠকুট্ট কাষ্ঠখণ্ড কাষ্ঠা কাষ্ঠাদি কাষ্ঠাসন কাষ্ঠনির্মিত কাষ্ঠপাদুকা কাষ্ঠপুত্তল কাষ্ঠপুত্তলিকা কাষ্ঠপদ কাষ্ঠফলক কাষ্ঠবত কাষ্ঠবৎ কাষ্ঠভার কাষ্ঠমঞ্চ কাষ্ঠময় কাষ্ঠল কাষ্ঠহাসি কাস্কেট কাসা কাঁসা কাঁসাপিতল কাসাব্লাঙ্কা কাসাব্ল্যাংকা কাসাভা কাসার কাঁসার কাঁসারু কাঁসারি কাঁসারী কাসালং কাসালস কাঁসি কাসিদ কাসিনো কাসীস কাসেদ কাস্ট কাস্টিং কাস্টিলান কাস্টম কাস্টমাইজেশন কাস্টমাইজড কাস্টমস কাস্টলার কাস্তকার কাস্তগার কাস্তে কাস্তেচরা কাস্ত্রো কাসন কাসন্দি কাসুন্দি কাস্পি কাস্পিড কাসপিয়ান কাস্পিয়ান কাঁসর কাঁসরঘণ্টা কাহা কাহাঁ কাঁহা কাহাত কাহাতক কাঁহাতক কাহানী কাহার কাঁহার কাহারা কাঁহারা কাহারো কাহারোল কাহারবা কাহাল কাহিনী কাহিনীঅবলম্বনে কাহিনীকার কাহিনীকেন্দ্রিক কাহিনীগ্রন্থ কাহিনীগল্প কাহিনীচিত্র কাহিনীসংবলিত কাহিল কাহে কাহেরি কাহেরে কাহৈরি কাহো কাহন কাহ্ন কাহ্নু কাহ্নাই কাহ্নাঞি কাহ্নাঞিঁ কাহ্নাঞী কাহ্নায়ি কাহ্নে কাড় কাঁড় কাড়ুক কাড়া কাঁড়া কাড়াকাড়ি কাড়ান কাঁড়ান কাড়ানাকাড়া কাড়ানাগড়া কাড়ানো কাঁড়ানো কাঁড়াবার কাঁড়ার কাঁড়ারি কাঁড়ারী কাড়ি কাঁড়ি কাড়িত কাড়িতাম কাড়িতিস কাড়িতে কাড়িতেছ কাড়িতেছি কাড়িতেছিল কাড়িতেছিলাম কাড়িতেছিলি কাড়িতেছিলে কাড়িতেছিলেন কাড়িতেছিস কাড়িতেছে কাড়িতেছেন কাড়িতেন কাড়িব কাড়িবার কাড়িবি কাড়িবে কাড়িবেন কাড়িল কাড়িলাম কাড়িলি কাড়িলে কাড়িলেন কাড়িস কাড়িয়া কাড়িয়াছ কাড়িয়াছি কাড়িয়াছিল কাড়িয়াছিলাম কাড়িয়াছিলি কাড়িয়াছিলে কাড়িয়াছিলেন কাড়িয়াছিস কাড়িয়াছে কাড়িয়াছেন কাড়িয়ো কাড়ে কাড়েন কাড়ছ কাড়ছি কাড়ছিল কাড়ছিলাম কাড়ছিলি কাড়ছিলে কাড়ছিলেন কাড়ছিলেম কাড়ছিলুম কাড়ছিস কাড়ছে কাড়ছেন কাড়ত কাড়তাম কাড়তিস কাড়তে কাঁড়তে কাড়তেন কাড়তেম কাড়তুম কাড়ন কাড়ুন কাড়ব কাড়বার কাঁড়বাঁশ কাড়বি কাড়বে কাড়বেন কাড়বো কাড়ল কাড়লাম কাড়লি কাড়লে কাড়লেন কাড়লেম কাড়লুম কাঁঢ়ার কায় কায়কারবার কায়কোবাদ কায়ক্লেশ কায়কল্প কায়া কায়াহীন কায়িক কায়চিকিৎসা কায়েত কায়েৎ কায়েতটুলী কায়েতনী কায়েম কায়েমি কায়েমমকাম কায়দা কায়দাকানুন কায়দাদুরস্ত কায়দাপাওয়া কায়দাবাজ কায়বার কায়ব্যূহরূপ কায়মনোবাক্যে কায়রো কায়সাধনা কায়স্ত কায়স্থ কায়স্থা কায়স্থাদি কায়স্থিনী কায়স্থজাতি কায়স্থজাতীয়া কি কিং কিংকং কিংকিণী কিংকর কিংকরী কিংকর্তব্য কিংকর্তব্যবিমূঢ় কিংকর্তব্যবিমূঢ়তা কিংখাপ কিংখাব কিংডম কিংফিশার কিংবা কিংবদন্তি কিংবদন্তী কিংবদন্তীতুল্য কিংম্যান কিংশুক কিংশুকফুল কিংশুকভাল কিংস্টন কিংসফোর্ড কিংসলি কিংসলে কিউ কিউব কিউবা কিউবান কিউবানচরিত্র কিউবিক কিউবরুবিক্স কিউরিয়াস কিউরেটর কিউলেস কিউসেক কিওকারাডং কিওক্রাডাং কিক কিকে কিঙকঙ কিঙ্কিণী কিঙ্কর কিঙ্করী কিচকিচ কিচকিচা কিচকিচানি কিচিকিচি কিচিরো কিচিরমিচির কিচ্ছু কিচ্ছুক্ষণ কিচ্ছা কিচমিচ কিছু কিছুকাল কিছুকিছু কিছুক্ষেত্র কিছুক্ষণ কিছুদিন কিছুদূর কিছুনা কিছুপরিমাণ কিছুমাত্র কিছুসংখ্যক কিছুসময় কিঞ্চিত কিঞ্চিৎ কিঞ্চিৎকর কিঞ্চিৎচাপা কিঞ্চিদধিক কিঞ্চিদূন কিঞ্চিদুষ্ণ কিঞ্চিন্মাত্র কিঞ্জল কিঞ্জল্ক কিট কিটকিটা কিটকিটে কিটিমিটি কিটিস কিটস কিড কিডনি কিডনিজনিত কিডন্যাপ কিডন্যাপড কিডস কিণ কিণাঙ্ক কিণাঙ্কিত কিণ্ব কিতা কিতাদুরস্ত কিতাব কিতাবকীট কিতাবকোরান কিতাবকুরআন কিতাবি কিতাবিয়া কিতাবতি কিতাবুর কিতাবুল কিত্তা কিতব কিধার কিধরণ কিনুক কিনা কিনাই কিনাইও কিনাইত কিনাইতাম কিনাইতিস কিনাইতে কিনাইতেছ কিনাইতেছি কিনাইতেছিল কিনাইতেছিলাম কিনাইতেছিলি কিনাইতেছিলে কিনাইতেছিলেন কিনাইতেছিস কিনাইতেছে কিনাইতেছেন কিনাইতেন কিনাইব কিনাইবার কিনাইবি কিনাইবে কিনাইবেন কিনাইল কিনাইলাম কিনাইলি কিনাইলে কিনাইলেন কিনাইয়া কিনাইয়াছ কিনাইয়াছি কিনাইয়াছিল কিনাইয়াছিলাম কিনাইয়াছিলি কিনাইয়াছিলে কিনাইয়াছিলেন কিনাইয়াছিস কিনাইয়াছে কিনাইয়াছেন কিনাইয়ো কিনাও কিনাক কিনান কিনানো কিনার কিনারা কিনারাযুক্ত কিনাস কিনায় কিনি কিনিত কিনিতাম কিনিতিস কিনিতে কিনিতেছ কিনিতেছি কিনিতেছিল কিনিতেছিলাম কিনিতেছিলি কিনিতেছিলে কিনিতেছিলেন কিনিতেছিস কিনিতেছে কিনিতেছেন কিনিতেন কিনিব কিনিবার কিনিবি কিনিবে কিনিবেন কিনিল কিনিলাম কিনিলি কিনিলে কিনিলেন কিনিস কিনিয়া কিনিয়াছ কিনিয়াছি কিনিয়াছিল কিনিয়াছিলাম কিনিয়াছিলি কিনিয়াছিলে কিনিয়াছিলেন কিনিয়াছিস কিনিয়াছে কিনিয়াছেন কিনিয়ে কিনিয়েছ কিনিয়েছি কিনিয়েছিল কিনিয়েছিলাম কিনিয়েছিলি কিনিয়েছিলে কিনিয়েছিলেন কিনিয়েছিলেম কিনিয়েছিলুম কিনিয়েছিস কিনিয়েছে কিনিয়েছেন কিনিয়ো কিনচ্ছ কিনচ্ছি কিনচ্ছিল কিনচ্ছিলাম কিনচ্ছিলি কিনচ্ছিলে কিনচ্ছিলেন কিনচ্ছিলেম কিনচ্ছিলুম কিনচ্ছিস কিনচ্ছে কিনচ্ছেন কিনে কিনেছ কিনেছি কিনেছিল কিনেছিলাম কিনেছিলি কিনেছিলে কিনেছিলেন কিনেছিলেম কিনেছিলুম কিনেছিস কিনেছে কিনেছেন কিনেন কিনো কিনছ কিনছি কিনছিল কিনছিলাম কিনছিলি কিনছিলে কিনছিলেন কিনছিলেম কিনছিলুম কিনছিস কিনছে কিনছেন কিন্ডারগার্টেন কিন্ডারগার্ডেন কিনত কিন্তু কিন্তুকিন্তু কিনতাম কিনতিস কিনতে কিনতেন কিনতেম কিন্তুভাব কিনতুম কিনন কিনুন কিননো কিন্নর কিন্নরকণ্ঠ কিন্নরী কিন্নরদল কিনব কিনবার কিনবি কিনবে কিনবেন কিনবো কিনল কিনলাম কিনলি কিনলে কিনলেন কিনলেম কিনলুম কিনস কিনসলে কিপার কিপিং কিপটে কিপ্পন কিফ কিফাইত কিফায়ত কিবা কিবোর্ড কিবতি কিবলা কিভাবে কিম কিমকিম কিমা কিমাকার কিমানো কিমি কিমিয়া কিমিয়াবিদ কিমিয়াবিদ্যা কিমত কিম্পুরুষ কিমবা কিম্বা কিম্বদন্তী কিম্ভুত কিম্ভূত কিম্ভুতকিমাকার কিম্ভূতকিমাকার কিম্মত কিরকির কিরকম কিরা কিরাইত কিরাকাটা কিরাত কিরাতিনী কিরাতী কিরিচ কিরিবাতি কিরীচ কিরীট কিরীটিনী কিরীটী কিরীটধারিণী কিরীটধারী কিরে কিরেকাটা কিরণ কিরণযুক্ত কিরণতরঙ্গ কিরণপাত কিরণবিকাশী কিরণমালা কিরণমালী কিরণময় কিরণময়ী কিরণরাশি কিরণসম্পাত কিরূপ কিরপিন কিল কিলক কিলকিঞ্চিত কিলকিঞ্চিৎ কিলকলাপ কিলখেয়ে কিলগুঁতো কিলা কিলাই কিলাইও কিলাইত কিলাইতাম কিলাইতিস কিলাইতে কিলাইতেছ কিলাইতেছি কিলাইতেছিল কিলাইতেছিলাম কিলাইতেছিলি কিলাইতেছিলে কিলাইতেছিলেন কিলাইতেছিস কিলাইতেছে কিলাইতেছেন কিলাইতেন কিলাইব কিলাইবার কিলাইবি কিলাইবে কিলাইবেন কিলাইল কিলাইলাম কিলাইলি কিলাইলে কিলাইলেন কিলাইয়া কিলাইয়াছ কিলাইয়াছি কিলাইয়াছিল কিলাইয়াছিলাম কিলাইয়াছিলি কিলাইয়াছিলে কিলাইয়াছিলেন কিলাইয়াছিস কিলাইয়াছে কিলাইয়াছেন কিলাইয়ো কিলাও কিলাক কিলাকিলি কিলান কিলানো কিলার কিলারস কিলার্স কিলাস কিলায় কিলি কিলিং কিলিমাঞ্জারো কিলিস কিলিয়ে কিলিয়েছ কিলিয়েছি কিলিয়েছিল কিলিয়েছিলাম কিলিয়েছিলি কিলিয়েছিলে কিলিয়েছিলেন কিলিয়েছিলেম কিলিয়েছিলুম কিলিয়েছিস কিলিয়েছে কিলিয়েছেন কিলিয়ো কিলচ্ছ কিলচ্ছি কিলচ্ছিল কিলচ্ছিলাম কিলচ্ছিলি কিলচ্ছিলে কিলচ্ছিলেন কিলচ্ছিলেম কিলচ্ছিলুম কিলচ্ছিস কিলচ্ছে কিলচ্ছেন কিলচুরি কিলো কিলোওয়াট কিলোগ্রাম কিলোজুল কিলোপ্যাসকেল কিলোবাইট কিলোবিট কিলোভোল্ট কিলোমিটার কিলোলিটার কিলোহার্টজ কিলোহার্টস কিলত কিলতাম কিলতিস কিলতে কিলতেন কিলতেম কিলতুম কিলন কিলনো কিলব কিলবার কিলবি কিলবিল কিলবে কিলবেন কিলবো কিলল কিল্লা কিল্লাফতে কিললাম কিললি কিললে কিললেন কিললেম কিললুম কিলস কিলয় কিশোর কিশোরকিশোরী কিশোরগঞ্জ কিশোরী কিশোরচিত্ত কিশোরীলাল কিশোরসাহিত্য কিশোরসমগ্র কিশতি কিশতী কিশমিশ কিশলয় কিশলয়যুক্ত কিষ্কিন্ধা কিষ্কিন্ধাপতি কিষ্কিন্ধ্যা কিষ্কিন্ধ্যাপতি কিষাণ কিষাণি কিষাণী কিষান কিষ্টি কিষণগঞ্জ কিসি কিসিং কিসিম কিসে কিস্তি কিস্তিখেলাপ কিস্তিটুপি কিস্তিনামা কিস্তিবন্দি কিস্তিমাত কিস্তিমাৎ কিসম কিসমিস কিসমত কিসলয় কিসসা কিড়া কিড়িমিড়ি কিড়মিড় কিড়মিড়ি কিয় কিয়া কিয়াম কিয়ামত কিয়াস কিয়ে কিয়ৎপরিমাণ কিয়দংশ কিয়দ্দিন কিয়দ্দূর কচ কচু কুচ কুঁচ কীইবা কীএই কীএকটা কুঁচকা কুঁচকাই কুঁচকাইও কুঁচকাইত কুঁচকাইতাম কুঁচকাইতিস কুঁচকাইতে কুঁচকাইতেছ কুঁচকাইতেছি কুঁচকাইতেছিল কুঁচকাইতেছিলাম কুঁচকাইতেছিলি কুঁচকাইতেছিলে কুঁচকাইতেছিলেন কুঁচকাইতেছিস কুঁচকাইতেছে কুঁচকাইতেছেন কুঁচকাইতেন কুঁচকাইব কুঁচকাইবার কুঁচকাইবি কুঁচকাইবে কুঁচকাইবেন কুঁচকাইল কুঁচকাইলাম কুঁচকাইলি কুঁচকাইলে কুঁচকাইলেন কুঁচকাইয়া কুঁচকাইয়াছ কুঁচকাইয়াছি কুঁচকাইয়াছিল কুঁচকাইয়াছিলাম কুঁচকাইয়াছিলি কুঁচকাইয়াছিলে কুঁচকাইয়াছিলেন কুঁচকাইয়াছিস কুঁচকাইয়াছে কুঁচকাইয়াছেন কুঁচকাইয়ো কুঁচকাও কুচকাওয়াজ কুঁচকাক কচুকাটা কুঁচকান কুঁচকানো কুঁচকাস কুঁচকায় কুচকি কুঁচকি কুঁচকিও কুঁচকিকণ্ঠা কুঁচকিতে কুঁচকিয়ে কুঁচকিয়েছ কুঁচকিয়েছি কুঁচকিয়েছিল কুঁচকিয়েছিলাম কুঁচকিয়েছিলি কুঁচকিয়েছিলে কুঁচকিয়েছিলেন কুঁচকিয়েছিলেম কুঁচকিয়েছিলুম কুঁচকিয়েছিস কুঁচকিয়েছে কুঁচকিয়েছেন কুঁচকিয়ো কচকচ কুচকুচ কচকচানি কচকচি কচকচে কুচকুচে কুঁচকচ্ছ কুঁচকচ্ছি কুঁচকচ্ছিল কুঁচকচ্ছিলাম কুঁচকচ্ছিলি কুঁচকচ্ছিলে কুঁচকচ্ছিলেন কুঁচকচ্ছিলেম কুঁচকচ্ছিলুম কুঁচকচ্ছিস কুঁচকচ্ছে কুঁচকচ্ছেন কুঁচকে কুঁচকেছ কুঁচকেছি কুঁচকেছিল কুঁচকেছিলাম কুঁচকেছিলি কুঁচকেছিলে কুঁচকেছিলেন কুঁচকেছিলেম কুঁচকেছিলুম কুঁচকেছিস কুঁচকেছে কুঁচকেছেন কুঁচকো কুঁচকোবার কুঁচকত কুঁচকতাম কুঁচকতিস কুঁচকতে কুঁচকতেন কুঁচকতেম কুঁচকতুম কুঁচকন কুঁচকনো কুঁচকব কুঁচকবি কুঁচকবে কুঁচকবেন কুঁচকবো কুচকুম্ভ কুচক্র কুচক্রী কুঁচকল কুঁচকলাম কুঁচকলি কুঁচকলে কুঁচকলেন কুঁচকলেম কুঁচকলুম কুঁচকস কুঁচকয় কচুঘেঁচু কচঙ্গন কুচা কুচাইও কুচাইত কুচাইতাম কুচাইতিস কুচাইতে কুচাইতেছ কুচাইতেছি কুচাইতেছিল কুচাইতেছিলাম কুচাইতেছিলি কুচাইতেছিলে কুচাইতেছিলেন কুচাইতেছিস কুচাইতেছে কুচাইতেছেন কুচাইতেন কুচাইব কুচাইবার কুচাইবি কুচাইবে কুচাইবেন কুচাইল কুচাইলাম কুচাইলি কুচাইলে কুচাইলেন কুচাইয়া কুচাইয়াছ কুচাইয়াছি কুচাইয়াছিল কুচাইয়াছিলাম কুচাইয়াছিলি কুচাইয়াছিলে কুচাইয়াছিলেন কুচাইয়াছিস কুচাইয়াছে কুচাইয়াছেন কুচাইয়ো কুচাক কুচাগ্র কুচাচিংড়ি কুচাচিংড়ী কুচাচিঙ্গট কচাত কুচান কুচানো কুচার কচাল কুচাল কচালে কুচাস কুচায় কচায়ন কচি কুচি কুঁচি কূচিকা কচিকাঁচা কুচিকিৎসক কুচিকিৎসা কুচিকুচি কুচিন্তা কুচিলা কুঁচিলা কুচিয়া কুঁচিয়া কুচিয়ান কুচিয়ে কুঁচিয়ে কুচিয়েছ কুঁচিয়েছ কুচিয়েছি কুঁচিয়েছি কুচিয়েছিল কুঁচিয়েছিল কুচিয়েছিলাম কুঁচিয়েছিলাম কুচিয়েছিলি কুঁচিয়েছিলি কুচিয়েছিলে কুঁচিয়েছিলে কুচিয়েছিলেন কুঁচিয়েছিলেন কুচিয়েছিলেম কুঁচিয়েছিলেম কুচিয়েছিলুম কুঁচিয়েছিলুম কুচিয়েছিস কুঁচিয়েছিস কুচিয়েছে কুঁচিয়েছে কুচিয়েছেন কুঁচিয়েছেন কুচিয়ো কুঁচিয়ো কীচক কীচকবধ কুঁচচোখ কুচচ্ছ কুচচ্ছি কুচচ্ছিল কুচচ্ছিলাম কুচচ্ছিলি কুচচ্ছিলে কুচচ্ছিলেন কুচচ্ছিলেম কুচচ্ছিলুম কুচচ্ছিস কুচচ্ছে কুচচ্ছেন কচেবারো কুচো কুচোচিংড়ি কুচোচিংড়ী কুচোচিঙ্গট কুচোন কুচোনো কচ্ছ কচ্ছু কুচ্ছা কুচ্ছিত কচ্ছিল কচ্ছিলাম কচ্ছিলি কচ্ছিলে কচ্ছিলেন কচ্ছিলেম কচ্ছিলুম কচ্ছটিকা কচ্ছপ কচ্ছপী কৃচ্ছ্র কৃচ্ছ্রব্রত কৃচ্ছ্রসাধন কৃচ্ছ্রসাধনা কচ্ছহীন কীজন্য কীট কীটকীটাণু কীটঘ্ন কচটা কীটাণু কচটান কচটানো কুচুটিয়া কুচুটে কীটজ কীটজাত কীটতত্ত্ব কীটতত্ত্ববিদ কীটদষ্ট কীটনাশক কীটপতঙ্গ কীটবিজ্ঞান কীটবিদ্যা কীটস্য কুচুণ্ডে কুচত কুচুৎ কীদৃক কীদৃশ কীদৃশী কুচন কুচনি কুচনো কুচন্দন কচুপোড়া কুচফল কুচবিহার কুচবে কুচবেন কুচবো কীবোর্ড কীভাবে কচমা কুচমান কীমিয়া কচমচ কীমত কীর কচরকচর কীরকম কচুরগেঁড় কীরা কীরাকাটা কচুরি কুচরিত্র কুচরিত্রা কচুরিপানা কুচর্যা কচুরডগা কীর্ণ কীর্তক কীর্তি কীর্তিকাহিনী কীর্তিকর কীর্তিকলাপ কীর্তিজ্ঞাপন কীর্তিজনক কীর্তিত কীর্তিদায়ক কীর্তিধ্বজা কীর্তিনাশা কীর্তিবাস কীর্তিমান কীর্তিমতী কীর্তিমন্দির কীর্তিলোপ কীর্তিশালী কীর্তিস্তম্ভ কীর্তিসম্পন্ন কীর্তিহাট কীর্তন কীর্তনকারী কীর্তনকীর্তি কীর্তনখোলা কীর্তনগান কীর্তনগায়ক কীর্তনাঙ্গ কীর্তনাদি কীর্তনান্ত কীর্তনিয়া কীর্তনীয় কীর্তনযোগ্য কীরূপ কচরমচর কুচুরমুচুর কীল কীলক কীলকাকার কীলকাকৃতি কীলকলিপি কচলা কচলাই কচলাইও কচলাইত কচলাইতাম কচলাইতিস কচলাইতে কচলাইতেছ কচলাইতেছি কচলাইতেছিল কচলাইতেছিলাম কচলাইতেছিলি কচলাইতেছিলে কচলাইতেছিলেন কচলাইতেছিস কচলাইতেছে কচলাইতেছেন কচলাইতেন কচলাইব কচলাইবার কচলাইবি কচলাইবে কচলাইবেন কচলাইল কচলাইলাম কচলাইলি কচলাইলে কচলাইলেন কচলাইয়া কচলাইয়াছ কচলাইয়াছি কচলাইয়াছিল কচলাইয়াছিলাম কচলাইয়াছিলি কচলাইয়াছিলে কচলাইয়াছিলেন কচলাইয়াছিস কচলাইয়াছে কচলাইয়াছেন কচলাইয়ো কচলাও কচলাক কচলাচ্ছ কচলাচ্ছি কচলাচ্ছিল কচলাচ্ছিলাম কচলাচ্ছিলি কচলাচ্ছিলে কচলাচ্ছিলেন কচলাচ্ছিলেম কচলাচ্ছিলুম কচলাচ্ছিস কচলাচ্ছে কচলাচ্ছেন কচলাত কচলাতাম কচলাতিস কচলাতে কচলাতেন কচলাতেম কচলাতুম কচলান কচলানি কচলানো কচলাব কচলাবার কচলাবি কচলাবে কচলাবেন কচলাবো কচলাল কচলালাম কচলালি কচলালে কচলালেন কচলালেম কচলালুম কচলাস কচলায় কচলে কচলেছ কচলেছি কচলেছিল কচলেছিলাম কচলেছিলি কচলেছিলে কচলেছিলেন কচলেছিলেম কচলেছিলুম কচলেছিস কচলেছে কচলেছেন কচলো কীসে কীসব কচড়া কীড়ে কচুয়া কে কেঅট কেইবা কেউ কেঁউ কেউকেউ কেঁউকেঁউ কেউকেটা কেউটিয়া কেউটে কেউটেধরা কেউটেসাপ কেউতো কেউনা কেউনাকেউ কেউবা কেউর কেও কেওকেটা কেওট কেওটানি কেওটরমণী কেওড়া কেওয়ার কেওয়াড় কেক কেকা কেকাধ্বনি কেকারব কেকী কেঙ্গারু কোটি কোন কোনো কোনধরণ কোনভাবে কোনমতে কেঁচা কেঁচি কেঁচে কেঁচেগণ্ডূষ কেচেছ কেচেছি কেচেছিল কেচেছিলাম কেচেছিলি কেচেছিলে কেচেছিলেন কেচেছিলেম কেচেছিলুম কেচেছিস কেচেছে কেচেছেন কেঁচো কেচ্ছা কেচুয়া কেজু কেজি কেজো কেজুবাদাম কেজুয়া কেটা কেটারিং কেটে কেটেছ কেটেছি কেটেছিল কেটেছিলাম কেটেছিলি কেটেছিলে কেটেছিলেন কেটেছিলেম কেটেছিলুম কেটেছিস কেটেছে কেটেছেটে কেটেছেন কেটেনেওয়া কেটো কেটলি কেঠো কেঠোকাটি কেডস কেতু কেতক কেতকী কেতুগ্রহ কেতা কেতাদুরস্ত কেতাব কেতাবকীট কেতাবি কেতিয়ে কেতন কেতনধারী কেতলি কেঁদকঁকিয়ে কেদার কেদারখণ্ড কেদারা কেদারারাগ কেদারিকা কেদারনাথ কেদারবাহিনী কেদাররাগ কেঁদে কেঁদেকঁকিয়ে কেঁদেকেটে কেঁদেছ কেঁদেছি কেঁদেছিল কেঁদেছিলাম কেঁদেছিলি কেঁদেছিলে কেঁদেছিলেন কেঁদেছিলেম কেঁদেছিলুম কেঁদেছিস কেঁদেছে কেঁদেছেন কেঁদো কেন কেনা কেনাই কেনাইয় কেনাক কেনাকাটা কেনাচ্ছ কেনাচ্ছি কেনাচ্ছিল কেনাচ্ছিলাম কেনাচ্ছিলি কেনাচ্ছিলে কেনাচ্ছিলেন কেনাচ্ছিলেম কেনাচ্ছিলুম কেনাচ্ছিস কেনাচ্ছে কেনাচ্ছেন কেনাত কেনাতাম কেনাতিস কেনাতে কেনাতেন কেনাতেম কেনাতুম কেনাদাম কেনাদর কেনান কেনানো কেনাব কেনাবার কেনাবি কেনাবে কেনাবেচা কেনাবেন কেনাবো কেনার কেনারাম কেনাল কেনালাম কেনালি কেনালে কেনালেন কেনালেম কেনালুম কেনাস কেনায় কেনি কেনিয় কেনিয়া কেনিয়ন কেনে কেনেডি কেনেন কেনোকিছু কেনোনা কেন্ট কেন্দু কেন্দ্র কেন্দ্রক কেন্দ্রকাল কেন্দ্রগত কেন্দ্রাংশ কেন্দ্রাতিগ কেন্দ্রাভিগ কেন্দ্রাভিগামী কেন্দ্রাভিমুখ কেন্দ্রিক কেন্দ্রিত কেন্দ্রী কেন্দ্রীণ কেন্দ্রীভূত কেন্দ্রীভূতকরণ কেন্দ্রীভবন কেন্দ্রীয় কেন্দ্রীয়গ্রন্থাগার কেন্দ্রীয়শহর কেন্দ্রযুক্ত কেন্দ্রপাড়া কেন্দ্রবিন্দু কেন্দ্রবিমুখ কেন্দ্রবিমুখী কেন্দ্রবিশ্ব কেন্দ্রভাগ কেন্দ্রমুখী কেন্দ্রমহাকাশ কেন্দ্ররেখা কেন্দ্রশাসিত কেন্দ্রস্থ কেন্দ্রস্থিত কেন্দ্রস্থল কেন্দ্রহীন কেন্দুয়া কেন্নুই কেননা কেন্নাই কেন্নো কেনবার কেপ কেঁপে কেঁপেছ কেঁপেছি কেঁপেছিল কেঁপেছিলাম কেঁপেছিলি কেঁপেছিলে কেঁপেছিলেন কেঁপেছিলেম কেঁপেছিলুম কেঁপেছিস কেঁপেছে কেঁপেছেন কেপটাউন কেপলার কেপলারীয় কেফায়েত কেবা কেবার কেবিন কেবিনেট কেবট কেবল কেবলগ্রাম কেবলা কেবলাহাসি কেবলযদি কেবলমাত্র কেবলরাম কেবলস কেম কেমি কেমিওথেরাপি কেমিকেল কেমিকৌশল কেমিক্যাল কেমিস্ট কেমিস্ট্রি কেমোথেরাপি কেমত কেমন কেমুন কেমনকেমন কেমনকরা কেমনে কেমনযেন কেমনতর কেমনধারা কেম্বিস কেমব্রিজ কেম্ব্রিজ কের কেরু কেরা কেরাঞ্চি কেরাত কেরানি কেরানিগিরি কেরানী কেরানীগিরি কেরানীগঞ্জ কেরামত কেরামতকারী কেরামতি কেরামতুল্লা কেরামনকাতেবিন কেরালা কেরাসিন কেরাহাত কেরাহিয়াত কেরায়া কেরি কেরিয়ার কেরে কেরোসিন কেরদানি কেরল কেরুল কেরলী কেরলদেশীয় কেরলবাসী কেরয়াল কেরুয়াল কেল কেলু কেলা কেলান কেলানো কেলাস কেলাসাকার কেলাসাকৃতি কেলাসাদি কেলাসিত কেলাসচিত্র কেলাসীভূত কেলাসীয় কেলাসন কেলাসপ্রায় কেলাসবিদ্যা কেলি কেলিকানন কেলিকুঞ্চিকা কেলিকুঞ্জ কেলিকদম্ব কেলিকলহ কেলিগৃহ কেলিপদ্ম কেলিশহর কেলিয়া কেলী কেলে কেলেকার্তিক কেলেঙ্কার কেলেঙ্কারি কেলেণ্ডার কেলেন্ডার কেলেভূত কেলেমানিক কেলেসোনা কেলেহাঁড়ি কেল্ট কেল্টীয় কেলভিন কেল্লা কেল্লাদার কেল্লাফতে কেল্লামাত কেশ কেশকীট কেশকর্ম কেশকলাপ কেশাকেশি কেশাকর্ষণ কেশাগ্র কেশাগ্রস্পর্শ কেশিনী কেশিয়ার কেশী কেশে কেশেছ কেশেছি কেশেছিল কেশেছিলাম কেশেছিলি কেশেছিলে কেশেছিলেন কেশেছিলেম কেশেছিলুম কেশেছিস কেশেছে কেশেছেন কেশেল কেশো কেশযুক্ত কেশযুক্তা কেশতেল কেশতৈল কেশতুল্য কেশদাম কেশপাশ কেশপ্রসাধন কেশব কেশবিন্যাস কেশবীথি কেশবচন্দ্র কেশবেশ কেশবন্ধন কেশবপুর কেশবর্ধক কেশভার কেশমুণ্ডন কেশর কেশুর কেশরাজ কেশরাশি কেশরী কেশরচনা কেশরঞ্জনী কেশরযুক্ত কেশসংস্কার কেশসদৃশ কেশস্পর্শ কেশহীন কেশহীনতা কেষ্ট কেষ্টবিষ্টু কেস কেসিং কেসটেবিল কেসম কেসমত কেসর কেসুর কেসরী কেহ কেহু কেহকেহ কেহন কেহনা কেহনি কেহ্মে কেড়া কেড়াপোকা কেড়ি কেড়ে কেঁড়ে কেড়েছ কেড়েছি কেড়েছিল কেড়েছিলাম কেড়েছিলি কেড়েছিলে কেড়েছিলেন কেড়েছিলেম কেড়েছিলুম কেড়েছিস কেড়েছে কেড়েছেন কেড়েনেওয়া কেঁড়েলি কেয়া কেয়াকাঁদি কেয়াপাতা কেয়াফুল কেয়াবাত কেয়াবাৎ কেয়াম কেয়ামত কেয়ার কেয়ারি কেয়ারিকরা কেয়ারী কেয়ারটেকার কেঁয়ে কেয়ূর কৈ কৈকেয়ী কৈখালী কৈছালি কৈছন কৈটভ কৈতব কৈতববাদ কৈতববাদী কৈন্দ্রিক কৈফি কৈফিয়ত কৈফিয়তকাটা কৈফিয়তি কৈফিয়ততলব কৈফিয়তমিলানো কৈফিয়তসহ কৈফত কৈবর্ত কৈবল্য কৈবল্যদান কৈবল্যদায়িনী কৈবল্যধাম কৈরব কৈলু কৈলাস কৈলাসচন্দ্র কৈলাসেশ্বর কৈলাসটিলা কৈলাসধাম কৈলাসনাথ কৈলাসপর্বত কৈলাসবাসিনী কৈলাসহার কৈশিক কৈশিকা কৈশোর কৈশোরকাল কৈশোরত্তীর্ণ কৈশোরসুলভ কৈসে কৈসন কো কোঁ কোং কোঅপারেশন কোঅরডিনেট কোআ কোই কোওপারেটিভ কোক কোঁক কোঁকা কোঁকান কোঁকানি কোঁকানো কোকাফ কোকিল কোকিলকূজিত কোকিলকণ্ঠ কোকিলকণ্ঠী কোকিলা কোকিলাসন কোকিলেক্ষু কোকিলশাবক কোকী কোকচুল্লি কোকেন কোকো কোঁকোঁ কোকনদ কোঁকড়া কোঁকড়াই কোঁকড়াইও কোঁকড়াইত কোঁকড়াইতাম কোঁকড়াইতিস কোঁকড়াইতে কোঁকড়াইতেছ কোঁকড়াইতেছি কোঁকড়াইতেছিল কোঁকড়াইতেছিলাম কোঁকড়াইতেছিলি কোঁকড়াইতেছিলে কোঁকড়াইতেছিলেন কোঁকড়াইতেছিস কোঁকড়াইতেছে কোঁকড়াইতেছেন কোঁকড়াইতেন কোঁকড়াইব কোঁকড়াইবার কোঁকড়াইবি কোঁকড়াইবে কোঁকড়াইবেন কোঁকড়াইল কোঁকড়াইলাম কোঁকড়াইলি কোঁকড়াইলে কোঁকড়াইলেন কোঁকড়াইয়া কোঁকড়াইয়াছ কোঁকড়াইয়াছি কোঁকড়াইয়াছিল কোঁকড়াইয়াছিলাম কোঁকড়াইয়াছিলি কোঁকড়াইয়াছিলে কোঁকড়াইয়াছিলেন কোঁকড়াইয়াছিস কোঁকড়াইয়াছে কোঁকড়াইয়াছেন কোঁকড়াইয়ো কোঁকড়াও কোঁকড়াক কোঁকড়াচ্ছ কোঁকড়াচ্ছি কোঁকড়াচ্ছিল কোঁকড়াচ্ছিলাম কোঁকড়াচ্ছিলি কোঁকড়াচ্ছিলে কোঁকড়াচ্ছিলেন কোঁকড়াচ্ছিলেম কোঁকড়াচ্ছিলুম কোঁকড়াচ্ছিস কোঁকড়াচ্ছে কোঁকড়াচ্ছেন কোঁকড়াত কোঁকড়াতাম কোঁকড়াতিস কোঁকড়াতে কোঁকড়াতেন কোঁকড়াতেম কোঁকড়াতুম কোঁকড়ান কোঁকড়ানো কোঁকড়াব কোঁকড়াবার কোঁকড়াবি কোঁকড়াবে কোঁকড়াবেন কোঁকড়াবো কোঁকড়াল কোঁকড়ালাম কোঁকড়ালি কোঁকড়ালে কোঁকড়ালেন কোঁকড়ালেম কোঁকড়ালুম কোঁকড়াস কোঁকড়ায় কোঁকড়ো কোঁখ কোঙ্কণ কোঙ্কণা কোঙ্গা কোঙা কোঙর কোচ কোঁচ কোচওয়ান কোঁচকা কোঁচকাই কোঁচকাইও কোঁচকাইত কোঁচকাইতাম কোঁচকাইতিস কোঁচকাইতে কোঁচকাইতেছ কোঁচকাইতেছি কোঁচকাইতেছিল কোঁচকাইতেছিলাম কোঁচকাইতেছিলি কোঁচকাইতেছিলে কোঁচকাইতেছিলেন কোঁচকাইতেছিস কোঁচকাইতেছে কোঁচকাইতেছেন কোঁচকাইতেন কোঁচকাইব কোঁচকাইবার কোঁচকাইবি কোঁচকাইবে কোঁচকাইবেন কোঁচকাইল কোঁচকাইলাম কোঁচকাইলি কোঁচকাইলে কোঁচকাইলেন কোঁচকাইয়া কোঁচকাইয়াছ কোঁচকাইয়াছি কোঁচকাইয়াছিল কোঁচকাইয়াছিলাম কোঁচকাইয়াছিলি কোঁচকাইয়াছিলে কোঁচকাইয়াছিলেন কোঁচকাইয়াছিস কোঁচকাইয়াছে কোঁচকাইয়াছেন কোঁচকাইয়ো কোঁচকাও কোঁচকাক কোঁচকাচ্ছ কোঁচকাচ্ছি কোঁচকাচ্ছিল কোঁচকাচ্ছিলাম কোঁচকাচ্ছিলি কোঁচকাচ্ছিলে কোঁচকাচ্ছিলেন কোঁচকাচ্ছিলেম কোঁচকাচ্ছিলুম কোঁচকাচ্ছিস কোঁচকাচ্ছে কোঁচকাচ্ছেন কোঁচকাত কোঁচকাতাম কোঁচকাতিস কোঁচকাতে কোঁচকাতেন কোঁচকাতেম কোঁচকাতুম কোঁচকান কোঁচকানো কোঁচকাব কোঁচকাবার কোঁচকাবি কোঁচকাবে কোঁচকাবেন কোঁচকাবো কোঁচকাল কোঁচকালাম কোঁচকালি কোঁচকালে কোঁচকালেন কোঁচকালেম কোঁচকালুম কোঁচকাস কোঁচকায় কোঁচকায়নি কোঁচা কোঁচাই কোঁচাইও কোঁচাইত কোঁচাইতাম কোঁচাইতিস কোঁচাইতে কোঁচাইতেছ কোঁচাইতেছি কোঁচাইতেছিল কোঁচাইতেছিলাম কোঁচাইতেছিলি কোঁচাইতেছিলে কোঁচাইতেছিলেন কোঁচাইতেছিস কোঁচাইতেছে কোঁচাইতেছেন কোঁচাইতেন কোঁচাইব কোঁচাইবার কোঁচাইবি কোঁচাইবে কোঁচাইবেন কোঁচাইল কোঁচাইলাম কোঁচাইলি কোঁচাইলে কোঁচাইলেন কোঁচাইয়া কোঁচাইয়াছ কোঁচাইয়াছি কোঁচাইয়াছিল কোঁচাইয়াছিলাম কোঁচাইয়াছিলি কোঁচাইয়াছিলে কোঁচাইয়াছিলেন কোঁচাইয়াছিস কোঁচাইয়াছে কোঁচাইয়াছেন কোঁচাইয়ো কোঁচাও কোঁচাক কোঁচাচ্ছ কোঁচাচ্ছি কোঁচাচ্ছিল কোঁচাচ্ছিলাম কোঁচাচ্ছিলি কোঁচাচ্ছিলে কোঁচাচ্ছিলেন কোঁচাচ্ছিলেম কোঁচাচ্ছিলুম কোঁচাচ্ছিস কোঁচাচ্ছে কোঁচাচ্ছেন কোঁচাত কোঁচাতাম কোঁচাতিস কোঁচাতে কোঁচাতেন কোঁচাতেম কোঁচাতুম কোঁচান কোঁচানো কোঁচাব কোঁচাবার কোঁচাবি কোঁচাবে কোঁচাবেন কোঁচাবো কোঁচার কোঁচাল কোঁচালাম কোঁচালি কোঁচালে কোঁচালেন কোঁচালেম কোঁচালুম কোঁচাস কোঁচায় কোচি কোচিং কোচিন কোচোয়ান কোঁচবক কোচবাক্স কোচবিহার কোঁচড় কোজাক কোজাগর কোজাগরী কোজি কোঞ্চা কোট কোটা কোটাক কোটাচ্ছ কোটাচ্ছি কোটাচ্ছিল কোটাচ্ছিলাম কোটাচ্ছিলি কোটাচ্ছিলে কোটাচ্ছিলেন কোটাচ্ছিলেম কোটাচ্ছিলুম কোটাচ্ছিস কোটাচ্ছে কোটাচ্ছেন কোটাত কোটাতাম কোটাতিস কোটাতে কোটাতেন কোটাতেম কোটাতুম কোটান কোটানো কোটাব কোটাবার কোটাবি কোটাবে কোটাবেন কোটাবো কোটার কোটাল কোটালগি কোটালাম কোটালি কোটালিপাড়া কোটালেন কোটালেম কোটালুম কোটাস কোটায় কোটি কোটিকল্প কোটিতম কোটিপতি কোটিশ্বর কোটী কোটীকল্প কোটচাঁদপুর কোটীপতি কোটীশ্বর কোটেশন কোট্ট কোট্টপাল কোটন কোটনা কোটনাকোটা কোটনাকুটনি কোটনাগিরি কোটনাপনা কোটনামি কোটনী কোটপকেট কোটপ্যান্ট কোটপুতলি কোটবাড়ি কোটর কোটরগত কোটরা কোটরাগত কোটরবাসী কোঠ কোঠা কোঠি কোঠরি কোড কোডার কোডিং কোডিসিল কোডিয়াক কোডেক কোডেড কোডেন কোডতালিকা কোডদ্য কোডন কোডবিচারক কোডস কোণ কোণঘেঁষা কোণা কোণাকোণি কোণাকুণি কোণাকৃতি কোণাযুক্ত কোণাভিমুখী কোণযুক্ত কোণঠাসা কোণদ্বয় কোণমান কোঁত কোতওয়াল কোতওয়ালি কোতকা কোঁতকা কোঁতকরা কোঁতা কোঁতাই কোঁতাইও কোঁতাইত কোঁতাইতাম কোঁতাইতিস কোঁতাইতে কোঁতাইতেছ কোঁতাইতেছি কোঁতাইতেছিল কোঁতাইতেছিলাম কোঁতাইতেছিলি কোঁতাইতেছিলে কোঁতাইতেছিলেন কোঁতাইতেছিস কোঁতাইতেছে কোঁতাইতেছেন কোঁতাইতেন কোঁতাইব কোঁতাইবার কোঁতাইবি কোঁতাইবে কোঁতাইবেন কোঁতাইল কোঁতাইলাম কোঁতাইলি কোঁতাইলে কোঁতাইলেন কোঁতাইয়া কোঁতাইয়াছ কোঁতাইয়াছি কোঁতাইয়াছিল কোঁতাইয়াছিলাম কোঁতাইয়াছিলি কোঁতাইয়াছিলে কোঁতাইয়াছিলেন কোঁতাইয়াছিস কোঁতাইয়াছে কোঁতাইয়াছেন কোঁতাইয়ো কোঁতাও কোঁতাক কোঁতাচ্ছ কোঁতাচ্ছি কোঁতাচ্ছিল কোঁতাচ্ছিলাম কোঁতাচ্ছিলি কোঁতাচ্ছিলে কোঁতাচ্ছিলেন কোঁতাচ্ছিলেম কোঁতাচ্ছিলুম কোঁতাচ্ছিস কোঁতাচ্ছে কোঁতাচ্ছেন কোঁতাত কোঁতাতাম কোঁতাতিস কোঁতাতে কোঁতাতেন কোঁতাতেম কোঁতাতুম কোঁতান কোঁতানো কোঁতাব কোঁতাবার কোঁতাবি কোঁতাবে কোঁতাবেন কোঁতাবো কোঁতাল কোঁতালাম কোঁতালি কোঁতালে কোঁতালেন কোঁতালেম কোঁতালুম কোঁতাস কোতোয়াল কোতোয়ালি কোতোয়ালী কোত্থেকে কোঁতদেওয়া কোঁতন কোঁতপাড়া কোতরা কোঁথ কোথা কোঁথা কোথাও কোথাকার কোঁথান কোঁথানি কোঁথানো কোথায় কোঁথলি কোদা কোঁদা কোদাল কোদালি কোদালিয়া কোদালে কোদালপাড়া কোদণ্ড কোদণ্ডটঙ্কার কোদন কোঁদন কোঁদল কোদলা কোদলাই কোদলাইও কোদলাইত কোদলাইতাম কোদলাইতিস কোদলাইতে কোদলাইতেছ কোদলাইতেছি কোদলাইতেছিল কোদলাইতেছিলাম কোদলাইতেছিলি কোদলাইতেছিলে কোদলাইতেছিলেন কোদলাইতেছিস কোদলাইতেছে কোদলাইতেছেন কোদলাইতেন কোদলাইব কোদলাইবার কোদলাইবি কোদলাইবে কোদলাইবেন কোদলাইল কোদলাইলাম কোদলাইলি কোদলাইলে কোদলাইলেন কোদলাইয়া কোদলাইয়াছ কোদলাইয়াছি কোদলাইয়াছিল কোদলাইয়াছিলাম কোদলাইয়াছিলি কোদলাইয়াছিলে কোদলাইয়াছিলেন কোদলাইয়াছিস কোদলাইয়াছে কোদলাইয়াছেন কোদলাইয়ো কোদলাও কোদলাক কোদলাচ্ছ কোদলাচ্ছি কোদলাচ্ছিল কোদলাচ্ছিলাম কোদলাচ্ছিলি কোদলাচ্ছিলে কোদলাচ্ছিলেন কোদলাচ্ছিলেম কোদলাচ্ছিলুম কোদলাচ্ছিস কোদলাচ্ছে কোদলাচ্ছেন কোদলাত কোদলাতাম কোদলাতিস কোদলাতে কোদলাতেন কোদলাতেম কোদলাতুম কোদলান কোদলানো কোদলাব কোদলাবার কোদলাবি কোদলাবে কোদলাবেন কোদলাবো কোদলাল কোদলালাম কোদলালি কোদলালে কোদলালেন কোদলালেম কোদলালুম কোদলাস কোদলায় কোন কোনওমতে কোনওরকমে কোনওসময় কোনকিছু কোনকোন কোনক্রমে কোনা কোনাকার কোনাকোনি কোনাকুনি কোনাচ কোনাচে কোনিক কোনো কোনোএক কোনোএকটা কোনোএকটি কোনোকিছু কোনোকোনো কোনোকথা কোনোক্রমে কোনোদিক কোনোদিন কোনোপ্রকার কোনোভাবে কোনোমত কোনোমতে কোনোরকম কোনোরূপ কোনছার কোনজায়গা কোনদিকে কোনদিন কোন্দল কোন্দলিয়া কোনধরন কোনপ্রকার কোনভাবে কোনমতে কোনরকম কোনরকমভাবে কোনরূপ কোপ কোপকটাক্ষ কোপা কোপাই কোপাইও কোপাইত কোপাইতাম কোপাইতিস কোপাইতে কোপাইতেছ কোপাইতেছি কোপাইতেছিল কোপাইতেছিলাম কোপাইতেছিলি কোপাইতেছিলে কোপাইতেছিলেন কোপাইতেছিস কোপাইতেছে কোপাইতেছেন কোপাইতেন কোপাইব কোপাইবার কোপাইবি কোপাইবে কোপাইবেন কোপাইল কোপাইলাম কোপাইলি কোপাইলে কোপাইলেন কোপাইয়া কোপাইয়াছ কোপাইয়াছি কোপাইয়াছিল কোপাইয়াছিলাম কোপাইয়াছিলি কোপাইয়াছিলে কোপাইয়াছিলেন কোপাইয়াছিস কোপাইয়াছে কোপাইয়াছেন কোপাইয়ো কোপাও কোপাক কোপাচ্ছ কোপাচ্ছি কোপাচ্ছিল কোপাচ্ছিলাম কোপাচ্ছিলি কোপাচ্ছিলে কোপাচ্ছিলেন কোপাচ্ছিলেম কোপাচ্ছিলুম কোপাচ্ছিস কোপাচ্ছে কোপাচ্ছেন কোপাত কোপাতাম কোপাতিস কোপাতে কোপাতেন কোপাতেম কোপাতুম কোপান কোপানো কোপান্বিত কোপানল কোপাব কোপাবার কোপাবি কোপাবিষ্ট কোপাবে কোপাবেন কোপাবো কোপারনিকাস কোপার্নিকাস কোপার্নিকীয় কোপাল কোপালাম কোপালি কোপালে কোপালেন কোপালেম কোপালুম কোপাস কোপি কোপিত কোপী কোপেনহেগেন কোপযুক্ত কোপ্তা কোপন কোপনা কোপনপ্রকৃতি কোপনস্বভাব কোপনস্বভাবা কোপপ্রকৃতি কোপবহ্নি কোপস্বভাব কোপস্বভাবা কোফতা কোফর কোফরান কোবালা কোবাল্ট কোবিদ কোবিদার কোবরা কোভ কোভেন্ট্রি কোভ্যালেন্ট কোমা কোম্পানি কোম্পানিকুঠি কোম্পানিগঞ্জ কোম্পানীগঞ্জ কোমর কোমরকষা কোমরকসা কোমরজল কোমরপাটা কোমরবাঁধা কোমরবন্দ কোমরবন্ধ কোমল কোমলা কোমলাঙ্গ কোমলাঙ্গী কোমলাপুরম কোমলায়ন কোমলতা কোমলত্ব কোমলতম কোমলভাব কোর কোরআন কোরআনমজিদ কোরআনহাকিম কোরক কোরা কোরাইশ কোরাচ্ছে কোরান কোরানি কোরানো কোরানমজি কোরানশরিফ কোরানহাকিম কোরাব কোরাবার কোরাল কোরালিন কোরালী কোরাস কোরিওগ্রাফার কোরিওগ্রাফি কোরিয়া কোরিয়াটাউন কোরিয়ান কোরীয় কোরেশ কোরেশী কোর্ট কোর্টকাছারি কোর্টনি কোর্টবদল কোর্টমার্শাল কোর্টল্যান্ড কোর্টশিপ কোরণ্ড কোরতা কোর্তা কোরফা কোর্ফা কোরফাপত্তন কোরফাপ্রজা কোরবান কোরবানি কোরমা কোর্মা কোর্স কোর্সভিত্তিক কোরয়েড কোল কোলআঁধার কোলআলো কোলকাতা কোলকুঁজা কোলকুঁজো কোলা কোলাকোলি কোলাকুলি কোলাঘাট কোলাজ কোলাজেন কোলাডিজিটাল কোলানি কোলানী কোলাপোষ কোলাব্যাং কোলাব্যাঙ কোলাহল কোলাহলধ্বনি কোলাহলপূর্ণ কোলাহলময় কোলাহলময়ী কোলিক কোলেকাঁখে কোলেপিঠে কোলেরিজ কোলেস্টেরল কোলছাড়া কোলজোড়া কোলজুড়ান কোলজুড়ানো কোলঝাড়া কোল্ট কোল্ড কোলপাতি কোলপাতলা কোলপোছা কোলপুঁছা কোলবালিশ কোলমোছা কোলম্যান কোলম্বক কোলশরা কোলসরা কোশ কোশা কোশাদা কোশিশ কোশী কোশ্চেন কোশেশ কোশল কোশলনৃপতি কোশলরাজ কোশলরাজ্য কোষ কোষকাব্য কোষকার কোষকীট কোষকলা কোষগ্রন্থ কোষা কোষাকৃতি কোষাগার কোষাধিক্য কোষাধ্যক্ষ কোষী কোষীয় কোষঝিল্লি কোষ্টা কোষ্টাগাছ কোষ্টাপাট কোষ্ঠ কোষ্ঠকাঠিন্য কোষ্ঠী কোষ্ঠীকাটা কোষ্ঠীবিচার কোষ্ঠপরিষ্কার কোষ্ঠপরিষ্কারক কোষ্ঠবদ্ধ কোষ্ঠবদ্ধতা কোষ্ঠবন্ধ কোষ্ঠবন্ধতা কোষ্ঠশুদ্ধি কোষ্ঠসাফ কোষ্ণ কোষপত্র কোষপ্রাচীর কোষপর্দা কোষবিজ্ঞান কোষবিদ্যা কোষবদ্ধ কোষবৃদ্ধি কোষবহুল কোষভেদ কোষমুক্ত কোষমধ্য কোষস্থ কোস্ট কোস্টা কোস্টারিকা কোস্তা কোস্তাকুস্তি কোসল কোহিতুর কোহিনুর কোহিনূর কোহতুর কোহল কোহলার কোঁড় কোঁড়ক কোড়া কোঁড়া কোড়ল কোঁড়ল কোড়য় কোয়া কোয়াক কোয়াজ্বর কোঁয়াজ্বর কোয়াটার কোয়ান কোয়ান্টা কোয়ান্টাম কোয়ান্টামতত্ত্ব কোয়ান্টায়িত কোয়ান্টায়ন কোয়ানটিটেটিভ কোয়ার্ক কোয়ার্ট কোয়ার্টার কোয়ার্টারগার্ড কোয়ার্টজ কোয়ালা কোয়ালিটি কোয়ালিফাই কোয়ালিফাইং কোয়ালিশন কোয়াশিয়া কোয়েরি কোয়েল কোয়েলা কোঁয়র কৌ কছু কুছ কছিফ কৌচ কছেল্লা কৌটা কৌটারঢাকা কৌটিল্য কৌটো কৌণিক কৌণিকতা কৌণী কৌতুক কৌতুককারী কৌতুককর কৌতুকাবহ কৌতুকাভিনেতা কৌতুকী কৌতুকজনক কৌতুকযুক্ত কৌতুকপ্রিয় কৌতুকপূর্ণ কৌতুকবোধ কৌতুকময়ী কৌতূহল কৌতূহলী কৌতূহলোদ্দীপক কৌতূহলোদ্রেক কৌতূহলোদ্রেককারী কৌতূহলজনক কৌতূহলপূর্ণ কৌতূহলপরবশ কৌতূহলহীন কৌন্তিক কৌন্তেয় কৌন্সিল কৌন্সুলি কৌপীন কুছপরোয়া কছবি কছম কৌমার কৌমারী কৌমার্য কৌমারব্রত কৌমারভৃত্য কৌমারভৃত্যতন্ত্র কৌমুদিনী কৌমুদী কৌমুদীপতি কছর কছুর কছরত কৌরব কৌরবী কৌরবেয় কৌরব্য কৌরবপক্ষীয় কৌর্ম কৌল কৌলাচারী কৌলিক কৌলীন্য কৌলীন্যনাশ কৌলীন্যপ্রথা কৌলধর্ম কৌশাম্বী কৌশিক কৌশিকনালী কৌশেয় কৌশল কৌশলগত কৌশলাশ্রিত কৌশলী কৌশলজাল কৌশল্যা কৌশলপূর্ণ কৌশলসম্পন্ন কৌশলসহকারে কৌষিক কৌষিকী কৌষেয় কৌস্তুভ কৌসুম্ভ কৌসুলি কৌঁসুলি কৌসল্যা কৌড়ি কৌড়ী কুজ কুঁজওয়ালা কুজগ্রহ কজা কুঁজা কুজাত কুঁজি কুঁজিকাঠি কূজিত কুঁজী কুঁজো কজ্জ্বল কজ্জল কজ্জলা কজ্জলী কজন কুজন কূজন কজলা কজলবাস কুজড়া কুঁজড়া কুঁজড়াপনা কুঁজড়ামি কুজড়ো কুঁজড়ো কঞ্চু কঞ্চুক কঞ্চুকী কঞ্চি কঞ্চিকা কুঞ্চিকা কুঞ্চিত কঞ্চী কুঞ্চী কুঞ্চন কুঞ্চনজনিত কঞ্চুলিকা কঞ্চুলী কঞ্জ কুঞ্জ কঞ্জক কুঞ্জকানন কঞ্জগিরি কুঞ্জি কুঞ্জদার কঞ্জন কঞ্জনয়নী কুঞ্জপুকুর কুঞ্জবাটিকা কুঞ্জবাটী কুঞ্জবন কঞ্জমুখী কুঞ্জমোহন কুঞ্জর কুঞ্জরা কুঞ্জরী কঞ্জল কুঞ্জল কুঞ্জলাল কঞ্জুষ কঞ্জুস কঞ্জুসি কঞ্জুসী কট কটু কুট কুটু কূট ক্যু কটক কটুকাটব্য কটুকাব্য কটকি কটকিনা কটকী কূটকচাল কূটকচালে কটকে কটকেনা কূটকৌশল কূটকৌশলী কটকট কুটকুট কটকটানি কুটকুটানি কটকটে কুটকুটে কুটকুটুনি কটূক্তি কুযুক্তি কটকবালা কূটকর্ম কটা কুটা ক্যা ক্যাংগারু কটাই কুটাই কুটাইও কুটাইত কুটাইতাম কুটাইতিস কুটাইতে কুটাইতেছ কুটাইতেছি কুটাইতেছিল কুটাইতেছিলাম কুটাইতেছিলি কুটাইতেছিলে কুটাইতেছিলেন কুটাইতেছিস কুটাইতেছে কুটাইতেছেন কুটাইতেন কুটাইব কুটাইবার কুটাইবি কুটাইবে কুটাইবেন কুটাইল কুটাইলাম কুটাইলি কুটাইলে কুটাইলেন কুটাইয়া কুটাইয়াছ কুটাইয়াছি কুটাইয়াছিল কুটাইয়াছিলাম কুটাইয়াছিলি কুটাইয়াছিলে কুটাইয়াছিলেন কুটাইয়াছিস কুটাইয়াছে কুটাইয়াছেন কুটাইয়ো কুটাক ক্যাঁক ক্যাঁককেঁকে ক্যাঁকক্যাঁক ক্যাকটাস কটাক্ষ কটাক্ষপাত কটাক্ষবিলাস কটাখ কূটাগার ক্যাঙ্গারু ক্যাচ ক্যাঁচ ক্যাঁচক্যাঁচ ক্যাঁচক্যাঁচানি ক্যাঁচা ক্যাচাল কটাচোখ ক্যাঁচরক্যাঁচর ক্যাঁচরম্যাচর ক্যাটকেটে ক্যাঁটকেটে ক্যাঁটকেঁটে ক্যাটক্যাট ক্যাঁটক্যাঁট ক্যাটক্যাটে ক্যাটাগরি ক্যাটাগরিস ক্যাটারাক্ট ক্যাটালগ ক্যাটালিস্ট ক্যাটিকোল ক্যাটেগরাইজড ক্যাটেগরি ক্যাটরিনা ক্যাডার ক্যাডারভুক্ত ক্যাডিং ক্যাডেট ক্যাডেটস ক্যাডবেরি ক্যাডমাস ক্যাডমিয়াম কটাত ক্যাঁত ক্যাঁৎ কুযাত্রা ক্যাথকার্ট ক্যাথিড্রাল ক্যাথেড্রাল ক্যাথোড ক্যাথোলিক ক্যাথরিন ক্যাথলিক ক্যাথলিন ক্যাদ্দানি কুটান ক্যান ক্যানকেনে ক্যানক্যান ক্যানাডা ক্যানাডিয়ান ক্যানাভারো ক্যানাভেরাল ক্যানার ক্যানারি ক্যানাল ক্যানালিকুলি ক্যানিং ক্যানিজিয়া ক্যানিয়ন ক্যানেল ক্যানেস্তারা কুটানো ক্যানোনিকাল ক্যান্ট ক্যানটি ক্যানটিন ক্যান্টিন ক্যান্টনি ক্যান্টনিজ ক্যান্টনমেন্ট ক্যান্ড ক্যান্ডি ক্যান্ডিডেট ক্যান্ডীয় ক্যান্ডেলা ক্যান্ডল ক্যানন ক্যানবেরা ক্যানভাস ক্যানসার ক্যান্সার ক্যান্সারজনিত ক্যানসাস ক্যাপ ক্যাপাবিলিটি ক্যাপাসিটিভ ক্যাপাসিটর ক্যাপিটাল ক্যাপিটালিজম ক্যাপটিভ ক্যাপ্টেন ক্যাপ্রিয়োমাইসিন ক্যাপশন ক্যাপস ক্যাপস্যুল ক্যাপসুল ক্যাফে ক্যাফেইন ক্যাফেটেরিয়া ক্যাব ক্যাবারে ক্যাবিন ক্যাবিনেট ক্যাবল ক্যাবলা ক্যাবলামি ক্যাবলামো ক্যাবলরাম কূটাভাস ক্যাভেন্ডিস ক্যামিলা ক্যামিলো ক্যামেরা ক্যামেরাম্যান ক্যামেরারভিতর ক্যামেরন ক্যামেরুন ক্যামেরুনীয় ক্যামেল ক্যামেলিয়া ক্যামোফ্লাজ ক্যামন ক্যামনে ক্যাম্প ক্যাম্পকট ক্যাম্পাস ক্যাম্পিং ক্যাম্পেইন ক্যাম্পবেল ক্যাম্পমাঠ ক্যামবিস ক্যাম্বিস ক্যামব্রিজ কটার ক্যারক্যারি ক্যারা ক্যারাটে ক্যারাবীয় ক্যারাম ক্যারামেলাইজ কটারি ক্যারি ক্যারিকেচার ক্যারিবিয়া ক্যারিবিয়ান ক্যারিস ক্যারিয়ার ক্যারেকটার ক্যারেক্টার ক্যারেল ক্যারোটিন ক্যারোটিনয়েড ক্যারোলাস ক্যারোলিন ক্যারোলিনা কূটার্থ ক্যারল কটাল ক্যালকাটা ক্যালকাস ক্যালকেনিয়াস ক্যালকুলাস ক্যালকুলেটর ক্যালিগ্রাফি ক্যালিডোনিয়া ক্যালিফেট ক্যালিফোর্নিকেশন ক্যালিফোর্নিয়া ক্যালিফোর্নিয়াকেন্দ্রিক ক্যালিবার ক্যালিস ক্যালিস্টো ক্যালেন্ডার ক্যালোরি ক্যালটেক ক্যালভিন ক্যালরি ক্যালরিমিটার ক্যালসিয়াম ক্যাশ ক্যাশিয়ার ক্যাশপ্যাট ক্যাশবাক্স কটাস কুটাস ক্যাসকেড কটাসকটাস ক্যাসাব্লাঙ্কা ক্যাসিও ক্যাসিওপিয়া কটাসে ক্যাসেট ক্যাসেল ক্যাস্টর ক্যাস্টরওয়েল ক্যাস্ট্রো ক্যাসপার ক্যাস্পার ক্যাসল কটাহ কটি কুটি কটিকটা কুটিকুটি কুটিত কুটিতাম কুটিতিস কুটিতে কুটিতেছ কুটিতেছি কুটিতেছিল কুটিতেছিলাম কুটিতেছিলি কুটিতেছিলে কুটিতেছিলেন কুটিতেছিস কুটিতেছে কুটিতেছেন কুটিতেন কটিতট কটিত্র কটিদেশ কুটিনী কুটিপাটি কুটিব কটিবাত কুটিবার কটিবাস কুটিবাড়ী কুটিবি কটিবিশিষ্ট কটিবিশিষ্টা কুটিবে কুটিবেন কটিবন্ধ কটিবন্ধন কটিবস্ত্র কটিবসন কটিভূষণ কুটির কুটিরশিল্প কুটিরশিল্পী কুটিল কুটিলা কুটিলাম কুটিলি কুটিলে কুটিলেন কুটিলতা কুটিলতাবর্জিত কুটিলতাহীন কুটিলভাবে কুটিলমনা কুটিলস্বভাব কটিশূল কুটিস কটিসূত্র কুটিয়া কুটিয়াছ কুটিয়াছি কুটিয়াছিল কুটিয়াছিলাম কুটিয়াছিলি কুটিয়াছিলে কুটিয়াছিলেন কুটিয়াছিস কুটিয়াছে কুটিয়াছেন কটিয়াদি কুটিয়ে কুটিয়েছ কুটিয়েছি কুটিয়েছিল কুটিয়েছিলাম কুটিয়েছিলি কুটিয়েছিলে কুটিয়েছিলেন কুটিয়েছিলেম কুটিয়েছিলুম কুটিয়েছিস কুটিয়েছে কুটিয়েছেন কুটিয়ো কুটচ্ছ কুটচ্ছি কুটচ্ছিল কুটচ্ছিলাম কুটচ্ছিলি কুটচ্ছিলে কুটচ্ছিলেন কুটচ্ছিলেম কুটচ্ছিলুম কুটচ্ছিস কুটচ্ছে কুটচ্ছেন কুটীর কূটচরিত্র কুটীরশিল্প কুটীরশিল্পী কুটে কুটেছ কুটেছি কুটেছিল কুটেছিলাম কুটেছিলি কুটেছিলে কুটেছিলেন কুটেছিলেম কুটেছিলুম কুটেছিস কুটেছে কুটেছেন কটেজ কুটেন কুটো কুটোকাটা কুযোগ ক্যোঁৎ কুটোনো কটোরা কুটছ কুটছি কুটছিল কুটছিলাম কুটছিলি কুটছিলে কুটছিলেন কুটছিলেম কুটছিলুম কুটছিস কুটছে কুটছেন কুটজ কুটুজ কূটজ কট্ট কুট্টি কুট্টিত কুট্টিম কূটযোদ্ধা কূটযুদ্ধ কুট্টন কুট্টনী কূটযন্ত্র কুট্টমিত কট্টর কট্টরপন্থী কুট্টুস কুটত কটুতা কুটতাম কুটতিস কুটতে কুটতেন কুটতেম কটুতৈল কটুত্ব কুটতুম কূটতর্ক কটন কুটন কুটুন কুটনা কুটনি কূটনীতি কূটনীতিক কূটনীতিজ্ঞ কূটনীতিবিদ কূটনৈতিক কুটনো কূটপ্রশ্ন কুটব কটুবাক্য কুটবার কুটবি কুটবে কুটবেন কূটবেশ কুটবো কূটবদ্ধ কূটবুদ্ধি কূটবুদ্ধিসম্পন্ন কূটবুদ্ধিসম্পন্না কটুভাষিণী কটুভাষী কূটভাষী কুটুম কটমট কটমটি কটমটে কুটুম্ব কুটুমবাড়ি কুটুম্বিতা কুটুম্বিনী কুটুম্বী কুট্মল কুট্মলিত কটর কুটুর কটরকটর কটরমটর কুটল কুটলাম কুটলি কুটলে কটলেট কুটলেন কুটলেম কুটলুম কুযশ কুটস কূটসাক্ষী কূটস্থ কুটয় কুঠ কুঠার কুঠারি কুঠারিকা কুঠারী কুঠারধারী কুঠি কঠিন কঠিনা কঠিনিকা কঠিনী কঠিনীকৃত কঠিনীভূত কঠিনদশা কঠিয়া কুঠিয়াল কঠোপনিষৎ কঠোপনিষদ কঠোর কঠোরগর্ভা কঠোরতা কঠোরপ্রকৃতি কঠোরভাবাপন্ন কঠোরভাবে কুঠরি কুঠুরি কড কুড্মল কুড্মলিত কডরাস কডরিংটন কণ কণকণ কণা কণাকণা কণাদ কণাদমুনি কণাদমুনিকৃত কণাধর্ম কণাপরিমাণ কণাবাদী কণামাত্র কুণাল কণি কুণি কণিক কণিকা কণিকারূপে কণিত কুণো কণ্টক কণ্টকাকীর্ণ কণ্টকিত কণ্টকিফল কণ্টকী কণ্টকীফল কণ্টকোদ্ধার কণ্টকপূর্ণ কণ্টকফল কণ্টকবিস্তৃত কণ্টকময় কণ্টকশয্যা কণ্টকসংকুল কণ্যান কণ্টাফল কণ্টাল কণ্টিকা কণ্টিকারি কণ্টী কণ্টফল কণ্ঠ কুণ্ঠ কণ্ঠকণ্ডূতি কণ্ঠা কুণ্ঠা কণ্ঠাগত কণ্ঠাগতপ্রাণ কুণ্ঠাযুক্ত কুণ্ঠাবোধ কণ্ঠাভরণ কণ্ঠাস্থি কুণ্ঠাহীন কুণ্ঠাহীনতা কুণ্ঠাহীনভাবে কণ্ঠি কণ্ঠিকা কণ্ঠিত কুণ্ঠিত কুণ্ঠিতা কণ্ঠিধারী কণ্ঠিধারণ কণ্ঠিবদল কণ্ঠী কণ্ঠচ্ছেদন কণ্ঠীত কণ্ঠীধারী কণ্ঠীধারণ কণ্ঠীবদল কণ্ঠীরব কণ্ঠোষ্ঠ্য কণ্ঠ্য কণ্ঠযুক্ত কণ্ঠ্যধ্বনি কণ্ঠ্যবর্ণ কণ্ঠদান কণ্ঠদেশ কণ্ঠধ্বনি কণ্ঠনালি কণ্ঠনালী কণ্ঠনালীয় কণ্ঠপথ কণ্ঠবিশিষ্টা কণ্ঠবদ্ধ কণ্ঠভূষণ কণ্ঠভূষণরূপে কণ্ঠমণি কণ্ঠরোধ কণ্ঠরোধকারী কণ্ঠলগ্ন কণ্ঠলীন কণ্ঠশিল্প কণ্ঠশিল্পী কণ্ঠসংগীত কণ্ঠসঙ্গীত কণ্ঠস্থ কণ্ঠস্থিত কণ্ঠস্বর কণ্ঠস্বরযুক্ত কণ্ঠহার কণ্ডু কণ্ডূ কুণ্ড কুণ্ডু কুণ্ডা কণ্ডোল কুণ্ডধাপ কণ্ডন কণ্ডনী কুণ্ডল কুণ্ডলাকার কুণ্ডলাকৃতি কুণ্ডলায়িত কুণ্ডলিত কুণ্ডলিনী কুণ্ডলী কুণ্ডলীকৃত কুণ্ডলীযুক্ত কুণ্ডলযুক্ত কুণ্ডলধারিণী কুণ্ডলধারী কুণ্ডলসহ কণ্ডূয়ন কণ্ডূয়মান কণ্ণার কুণপ কণ্ব কণ্বমুনি কণ্বসুতা কত কুত কৃত কৃৎ কুঁত কতই কৃতঋণ কতক কুতুক কৃতক কৃতকাজ কুতকাত কৃতকাম কতকাল কতকিছু কুতুকী কৃতকীর্তি কৃতকৌশল কতকটা কুতকুত কুতুকুতু কৃতকপুত্র কৃতকর্তব্য কৃতকর্ম কৃতকর্মা কৃতকর্মজনিত কতক্ষণ কুতঘাট কৃতঘ্ন কৃতঘ্না কৃতঘ্নতা কুঁতা কৃতাঞ্জলি কৃতাঞ্জলিপুটে কৃতাত্মা কুঁতান কুঁতানো কৃতান্ত কৃতান্তদলনী কৃতাপরাধ কৃতাভিষিক্ত কৃতাভিষেক কৃতার্থ কৃতার্থম্মন্য কৃতাস্ত্র কৃতাহ্নিক কতি কৃতি ক্তি কুঁতি কৃতিত্ব কৃতিত্বপূর্ণ কতিপয় কৃতিসাধ্য কৃতিস্বত্ব কৃতিসুলভ কুঁতিয়ে কুঁতিয়েছ কুঁতিয়েছি কুঁতিয়েছিল কুঁতিয়েছিলাম কুঁতিয়েছিলি কুঁতিয়েছিলে কুঁতিয়েছিলেন কুঁতিয়েছিলেম কুঁতিয়েছিলুম কুঁতিয়েছিস কুঁতিয়েছে কুঁতিয়েছেন কুঁতিয়ো কৃতী কতেক কতো কতোকার কৃতোদ্বাহ কৃতজ্ঞ কৃতজ্ঞচিত্ত কৃতজ্ঞতা কৃতজ্ঞতাবশত কৃতজ্ঞতাস্বীকার কতজন কৃত্য কৃত্যক কৃত্যকর্ম কৃতযুগ কৃত্যা কতটি কৃত্ত কত্তা কুত্তা কৃত্তি কৃত্তিক কৃত্তিকা কৃত্তিবাস কৃত্তিবাসী কুত্তী কৃততীর্থ কততম কত্থ কত্থক কত্থকনাচ কত্থকনৃত্য কৃতদার কৃতদাস কৃতদাসী কতদিন কতদূর কৃতধী কতনা কৃতনিশ্চয় কৃতনিশ্চয়তা কুতুপ কুতূপ কৃতপকার কতপ্রকার কতপরিমাণ কৃতপ্রতিজ্ঞ কৃৎপ্রত্যয় কৃৎপ্রত্যয়ান্ত কৃতপূর্ব কুতুব কুতুবউদ্দিন কুতুবখানা কতবার কৃতবিদ্য কৃতবিদ্যা কৃতবিদ্যতা কতবেল কৎবেল কুতুবদিয়া কৃতবুদ্ধি কুতুবমিনার কৃতবর্মা কতভাবে কতমত কতমতো কুতর্ক কতরকম কতরকমভাবে কুত্রাপি কৃত্রিম কৃত্রিমতা কৃত্রিমতাহীন কৃত্রিমভাবে কৃত্রিমরূপ কতল কতলগাহ কতশত কৃতশ্রম কৃতসংকল্প কৃতসঙ্কল্প কুৎসা কুৎসাকারী কৃতসাক্ষাত কুৎসামূলক কুৎসারটনা কুৎসিত কুৎস্য কতহুঁ কুতূহল কুতূহলী কথ কথক কথুকী কথকঠাকুর কথকতা কথা কুঁথা কথাউপন্যাস কথাও কথাকার্টুন কথাকথান্তর কথাকলি কথাগ্রন্থ কথাচাপা কথাচ্ছলে কথাচলা কথাথাকা কথানির্ভর কুঁথানো কথানুযায়ী কথান্তর কথাপ্রসঙ্গে কথাফোটা কথাবার্তা কথাবন্ধ কথাবলা কথামাত্র কথামানবী কথামালা কথামত কথামতো কথামতোচলা কথারচোট কথারটান কথারঢং কথারতুবড়ি কথারম্ভ কথাশিল্প কথাশিল্পী কথাশোনা কথাসাহিত্য কথাসাহিত্যিক কথাসরিতসাগর কথায়গলানো কথি কথিকা কথিত কথিহুঁ কথো কথোপকথন কথোপকথনকারী কথোপকথনরত কথঞ্চিৎ কথ্য কথ্যক কথ্যতা কথ্যভাবে কথ্যভাষা কথ্যমিশেলি কথ্যরূপ কথন কথনীয় কথনেচ্ছা কথনযোগ্য কুথলী কদ কদু কুদ কুঁদ কুঁদকল কদক্ষর কুদা কুঁদা কদাকার কুদাকুদি কুঁদাকুঁদি কদাচ কদাচার কদাচারী কদাচিৎ কদাচন কদাচরণ কুঁদানো কদাপি কদার্থন কদাহার কদাহারী কদিন কুদিন কদিম কদিমী কদীম কদীমী কুঁদো কুদোকুদি কুঁদযন্ত্র কদুত্তর কদুৎসাহী কদ্দিন কুদন কুঁদন কৃদন্ত কৃদন্তপদ কৃদন্তশব্দ কদন্ন কুঁদফুল কুঁদবাটালি কদবেল কদভ্যাস কদম কদমগাছ কদমা কদ্মা কদমি কদমী কদমের কদমফুল কদম্ব কদম্বগাছ কদম্বফুল কদম্ববৃক্ষ কদমবুসি কদর কদর্য কদর্যতা কদর্যরূপ কুদরত কুদরৎ কুদরতি কদর্থ কদর্থক কদর্থিত কদর্থীকৃত কুদর্শন কুদর্শনা কদল কদলক কুঁদুলি কুদলিও কদলিকা কুদলিয়ে কুদলিয়েছ কুদলিয়েছি কুদলিয়েছিল কুদলিয়েছিলাম কুদলিয়েছিলি কুদলিয়েছিলে কুদলিয়েছিলেন কুদলিয়েছিলেম কুদলিয়েছিলুম কুদলিয়েছিস কুদলিয়েছে কুদলিয়েছেন কুদলিয়ো কদলী কদলীকুসুম কদলীপুষ্প কদলীবৃক্ষ কুদলে কুঁদুলে কুদলেছ কুদলেছি কুদলেছিল কুদলেছিলাম কুদলেছিলি কুদলেছিলে কুদলেছিলেন কুদলেছিলেম কুদলেছিলুম কুদলেছিস কুদলেছে কুদলেছেন কুদলো কুদৃশ্য কুদৃষ্টি কদুষ্ণ কধ্বনি কন কুন কনুই কনক কনকা কনকাচল কনকাঞ্চল কনকাঞ্জলি কনকাম্ভোজ কুনকি কুনকী কনকচাঁপা কনকচূড় কনকচূড়া কুনকে কনকতরী কনকধানী কনকন কুনকুন কনকনাচ্ছে কনকনান কনকনানি কনকনানো কনকনি কনকনে কনকপত্র কনকপুর কনকপ্রভা কনকমুকুট কনকময় কনক্রিট কনকরঞ্জিত কনকর্ড কনকরস কনকলতা কনকসূত্র কুনখ কুনখী কনগ্রুয়েন্ট কনগ্রুয়েন্স কুনাম কনি কুনি কুনিকা কনিষ্ঠ কনিষ্ঠা কনিষ্ঠার কনিষ্ঠতম কনিষ্ঠভ্রাতা কুনীতি কনীনিকা কনীয়ান কনীয়সী কনে কনেচন্দন কনেযাত্রী কনেঠ কনেবউ কুনো কুনোব্যাঙ কনৌজ কনৌজদেশীয় কনজুগেট কনজুগেশন কনজাংকশন কনজাংটিভা কনজাংটিভাইটিস কনজানশন কনজারভেটিভ কনজেশন কুনজর কন্যকা কন্যা কন্যাকাল কন্টাক্ট কন্যাকুমারিকা কন্যাকুমারী কন্যাকর্তা কন্যাগৃহ কন্যাযাত্র কন্যাযাত্রা কন্যাযাত্রী কন্যাতিন কন্যাদাতা কন্যাদান কন্যাদানকাল কন্যাদায় কন্যাদায়গ্রস্ত কন্যাদায়িক কন্যাদ্বয় কন্যানগর কন্যাপক্ষ কন্যাপক্ষীয় কন্যাপণ কন্যাবৃন্দ কন্যামূল্য কন্যারাশি কন্যারত্ন কন্যালাভ কন্যাশুল্ক কন্যাস্তবক কন্যাস্থানীয়া কন্যাসন্তান কন্যাসমর্পণ কন্টিনিউয়াস কন্টিনেন্টাল কন্টিনজেন্ট কন্টিনুয়াস কনটেইনার কন্টেইনার কনটেন্ট কন্টেন্ট কনটেম্পোরারি কনট্যাক্স কন্ট্রাক্ট কনট্রাকটর কনট্রাক্টর কনট্রাকটরি কন্ট্রাক্টরি কনট্রাস্ট কন্ট্রাস্ট কন্ট্রিবিউট কন্ট্রিবিউটর কন্ট্রিবিউশান কন্ট্রিবিউশন কনট্রোল কন্ট্রোল কন্ট্রোলার কন্ডাক্ট কনডাক্টর কন্ডাকটর কন্ডাক্টর কন্ডিশন কন্ডিশনার কনডেনসার কনডেনসেট কনডেমন্ড কনডম কনড্রাইট কুন্ত কৃন্তক কুন্তি কুন্তী কুন্তীপুত্র কুন্তীসহ কৃন্তন কুন্তল কুন্তলা কুন্তলীন কুন্তলময় কুন্তলরাশি কন্থা কুন্থন কন্দ কন্দু কুন্দ কন্দুক কন্দুকক্রীড়া কুন্দকার কুন্দকর কুন্দার কন্দাল কুন্দাল কনদিদ কন্দিল কুন্দুজ কন্দজাত কন্দজাতীয় কুন্দন কুন্দপুর কুন্দফুল কন্দবিশেষ কন্দর কন্দর্প কন্দর্পকান্তি কন্দর্পকেলি কন্দর্পদেব কন্দর্পনারায়ণ কন্দর্পমথন কন্দল কন্দলিত কন্দলিয়া কন্দলী কন্ধ কন্ধকাটা কন্ধর কন্না কন্নি কন্নিক কন্নড় কনফারেন্স কনফারেন্সেস কনফারেন্সপূর্ব কনফার্ম কনফার্মেশন কনফিউজড কনফিউশিয়াস কনফিউশন কনফিগ কনফিগার কনফিগারেশন কনফিডেন্স কনফিডেনসিয়াল কনফিডেন্সিয়াল কনফিডেন্সিয়ালিটি কনফেডারেট কনফেডারেটস কনফেডারেশন কনফেডারেশনভুক্ত কনফেডারেশনভেদে কনফেডারেশনস কনফুসিইয়িজম কনফুসিয়াস কনফুসীয় কনভার্ট কনভার্টার কনভারসেশন কনভারসন কনভার্সন কনভেন্ট কনভেন্ট্রি কনভেনশন কনভেনশনাল কনভোকেশন কনসাট কনসার্ট কন্সার্ট কনসারনিং কনসারভেটরি কনসাল কন্সাল কনসাল্টেটিভ কনসালটেন্ট কনসাল্টেন্ট কনসালটেন্সি কন্সিডার কনসেন্ট্রেশন কনসেপ্ট কনসেপ্টস কনসোনেন্ট কনসোর্টিয়াম কনসোর্শিয়াম কনসোল কনস্টান্টিনোপল কনস্টানটিয়াস কনস্টিটিউয়েন্ট কনস্টেবল কন্সটেলেশন কনস্ট্যান্স কনস্টবল কনস্ট্রাকটিভ কনস্যুলেট কন্সতান্তিন কন্সপাইরেসি কন্সপিরেসি কনসরটিয়াম কনসল কনসলিডেশন কনসুলেট কপ কুপ কূপ কপকপ কূপখনন কুপা কৃপা কপাকপ কৃপাচার্য কপাট কপাটক কৃপাযুক্ত কপাটি কপাটিকা কপাটযুক্ত কপাটযোজক কপাটসন্ধি কৃপাণ কৃপাণধারী কৃপাণপাণি কপাৎ কুপাত্র কৃপাদৃষ্টি কুপান কৃপানিধি কুপানো কৃপাপাত্র কৃপাপূর্ণ কৃপাবলোকন কৃপাময় কপার কুপার্স কপাল কৃপালু কপালকুণ্ডলা কপালক্রমে কপালি কপালিনী কপালিয়া কপালী কপালচাপড়ানো কপালে কপালেরফের কপালজোর কপালযুক্ত কপালধারিণী কপালধারী কপালপোড়া কপালফের কপালফেরে কৃপাসিন্ধু কপি কুপি কপিএডিট কপিকল কপিঞ্জল কৃপিট কুপিত কুপিতা কপিত্থ কপিধ্বজ কপিনাশ কপিরাইট কপিরাইটকৃত কপিরাইটেড কপিরাইটযুক্ত কপিরাইটবিহীন কপিরাজ কপিল কপিলা কপিলাবস্তু কপিলধারা কপিশ কপিশবর্ণ কুপিয়ে কুপিয়েছ কুপিয়েছি কুপিয়েছিল কুপিয়েছিলাম কুপিয়েছিলি কুপিয়েছিলে কুপিয়েছিলেন কুপিয়েছিলেম কুপিয়েছিলুম কুপিয়েছিস কুপিয়েছে কুপিয়েছেন কুপিয়ো কুপী কপচা কপচাই কপচাইও কপচাইছিলাম কপচাইত কপচাইতাম কপচাইতিস কপচাইতে কপচাইতেছ কপচাইতেছি কপচাইতেছিল কপচাইতেছিলি কপচাইতেছিলে কপচাইতেছিলেন কপচাইতেছিস কপচাইতেছে কপচাইতেছেন কপচাইতেন কপচাইব কপচাইবা কপচাইবার কপচাইবি কপচাইবে কপচাইবেন কপচাইল কপচাইলাম কপচাইলি কপচাইলে কপচাইলেন কপচাইয়া কপচাইয়াছ কপচাইয়াছি কপচাইয়াছিল কপচাইয়াছিলাম কপচাইয়াছিলি কপচাইয়াছিলে কপচাইয়াছিলেন কপচাইয়াছিস কপচাইয়াছে কপচাইয়াছেন কপচাইয়ো কপচাও কপচাক কপচাচ্ছ কপচাচ্ছি কপচাচ্ছিল কপচাচ্ছিলাম কপচাচ্ছিলি কপচাচ্ছিলে কপচাচ্ছিলেন কপচাচ্ছিলেম কপচাচ্ছিলুম কপচাচ্ছিস কপচাচ্ছে কপচাচ্ছেন কপচাত কপচাতাম কপচাতিস কপচাতে কপচাতেন কপচাতেম কপচাতুম কপচান কপচানো কপচাব কপচাবার কপচাবি কপচাবে কপচাবো কপচাল কপচালাম কপচালি কপচালে কপচালেন কপচালেম কপচালুম কপচাস কপচায় কপচে কপচেছ কপচেছি কপচেছিল কপচেছিলাম কপচেছিলি কপচেছিলে কপচেছিলেন কপচেছিলেম কপচেছিলুম কপচেছিস কপচেছে কপচেছেন কপচো কৃপীট কুপো কুপোকাত কপোট্রন কপোট্রনিক কপোত কপোতাক্ষ কপোতারি কপোতী কপোতেশ্বর কপোতপালিকা কপোতবৃত্তি কূপোদক কপোল কপোলকল্পিত কপোলকল্পনা কপোলাস্থি কুপোষ্য কপট কুপ্য কপটাচার কপটাচারিণী কপটাচারী কপটাচরণ কপটিনী কপটচারী কপটীয় কপটতা কপটতাযুক্ত কপটতাপ্রিয় কপটতাহীন কপটনিদ্রা কপটপটু কপটপ্রবন্ধ কুপ্যশালা কপটস্বভাব কৃপণ কৃপণা কৃপণতা কৃপণস্বভাব কুপুত্র কুপথ কুপথগামী কুপথ্য কুপথ্যভোজন কূপদণ্ড কুপন কপনি কপ্নি কুপ্পী কূপমণ্ডূক কুপ্রকৃতি কুপরামর্শ কুপরামর্শদাতা কুপরামর্শদাত্রী কুপরিবাহী কপর্দ কপর্দক কপর্দকবিহীন কপর্দকশূন্য কপর্দকহীন কপর্দী কুপ্রভাব কুপুরুষ কুপুষ্যি কফ কফঘ্ন কুফা কফি কফিআনান কফিন কফিলউদ্দিন কফোণি কফোণী কফজনিত কফণি কফনাশক কুফর কুফরি কুফল কব কুবক্তা কবা কুবা কুবাক্য কবাট ক্বাযা কবাটি কবাডি কুবাণী ক্বাথ কুবাদ ক্বাদর কবাব ক্বাবা কবাবচিনি কবার ক্বারি কবালা কুবাস কুবাসনা কবি কবিওয়ালা কবিকৃতি কবিকল্পিত কবিকল্পনা কবিগান কবিগুরু কুবিচার কবিচুল কবিচলচ্চিত্র কবিতা কবিতাগুচ্ছ কবিতাগ্রন্থ কবিতাচক্র কবিতাচয়ন কবিতাদি কবিতাপাঠ কবিতাপাঠরত কবিতাবলি কবিতারচয়িতা কবিতাশেষ কবিতাসংগ্রহ কবিতিকা কবিত্ব কবিত্বপূর্ণ কবিত্বময় কবিত্বশক্তি কবিদম্পতি কবিদল কুবিধা কুবিন্দ কুবিন্দু কবিপত্নীকে কবিপ্রাচীন কবিপ্রেমী কবিপ্রতিভা কবিপ্রসিদ্ধি কবিবর কবিরা কবিরাজ কবিরাজকৃত কবিরাজি কবিলা কবিশেখর কবিশ্রেষ্ঠ কবিসাহিত্যিক কবিসভা কবিসমাজ কবিসময় কবিয়াল কবচ কবচকুণ্ডল ক্বচিৎ কবচতাবিজ কবচধারী কুবচন কবচপত্র কবে কবেকার কুবেণী কবেন কুবের কুবেরপত্নী কুবৈদ্য কবো কুবোধ কবোষ্ণ কবজ কুব্জ কবজা কব্জা কুবুজা কুব্জা কবজি কব্জি কবজিঘড়ি কব্জিসন্ধি কুব্জদেহ কব্য কব্যবাহ কব্যবাহন ক্বণ ক্বণিত ক্বণন কুবৃত্তি কুবৃত্তিধারী কবুতর কবুতরি কুবুদ্ধি কুবুদ্ধিযুক্ত কুবুদ্ধিদাতা কুবুদ্ধিদায়ক কুবুদ্ধিপূর্ণ কবন্ধ কুব্বা কবর কবরখানা কবর্গ কুবরিক কবরী কবরীবন্ধ কবরীবন্ধন কবরীভার কবরীভূষণ কবরীরচনা কবরনাজাফ কবরমসজিদ কবরস্থান কবল কবুল কুবল কবলা কবলাই কবলাইও কবলাইত কবলাইতাম কবলাইতিস কবলাইতে কবলাইতেছ কবলাইতেছি কবলাইতেছিল কবলাইতেছিলাম কবলাইতেছিলি কবলাইতেছিলে কবলাইতেছিলেন কবলাইতেছিস কবলাইতেছে কবলাইতেছেন কবলাইতেন কবলাইব কবলাইবার কবলাইবি কবলাইবে কবলাইবেন কবলাইল কবলাইলাম কবলাইলি কবলাইলে কবলাইলেন কবলাইয়া কবলাইয়াছ কবলাইয়াছি কবলাইয়াছিল কবলাইয়াছিলাম কবলাইয়াছিলি কবলাইয়াছিলে কবলাইয়াছিলেন কবলাইয়াছিস কবলাইয়াছে কবলাইয়াছেন কবলাইয়ো কবলাও কবলাক কবলাচ্ছ কবলাচ্ছি কবলাচ্ছিল কবলাচ্ছিলাম কবলাচ্ছিলি কবলাচ্ছিলে কবলাচ্ছিলেন কবলাচ্ছিলেম কবলাচ্ছিলুম কবলাচ্ছিস কবলাচ্ছে কবলাচ্ছেন কবলাত কবলাতাম কবলাতিস কবলাতে কবলাতেন কবলাতেম কবলাতুম কবলান কবুলান কবলানো কবুলানো কবলাব কবলাবার কবলাবি কবলাবে কবলাবেন কবলাবো কবলাল কবলালাম কবলালি কবলালে কবলালেন কবলালেম কবলালুম কবলাস কবলায় কবলিত কবলিয়ে কবলিয়েছ কবলিয়েছি কবলিয়েছিল কবলিয়েছিলাম কবলিয়েছিলি কবলিয়েছিলে কবলিয়েছিলেন কবলিয়েছিলেম কবলিয়েছিলুম কবলিয়েছিস কবলিয়েছে কবলিয়েছেন কবুলিয়ত কবলীকৃত কবলে কবলেছ কবলেছি কবলেছিল কবলেছিলাম কবলেছিলি কবলেছিলে কবলেছিলেন কবলেছিলেম কবলেছিলুম কবলেছিস কবলেছে কবলেছেন কবলো কবুলতি কবলধারণ কুবলয় কবহু কবহুঁ কবয়ী কভু কুভাব কভার কভারেজ কভারেজের কভারের কভি কুভোজন কম কমু কুম কমুক কমকম কুমকুম কমা কমাই কমাইও কমাইত কমাইতাম কমাইতিস কমাইতে কমাইতেছ কমাইতেছি কমাইতেছিল কমাইতেছিলাম কমাইতেছিলি কমাইতেছিলে কমাইতেছিলেন কমাইতেছিস কমাইতেছে কমাইতেছেন কমাইতেন কমাইব কমাইবার কমাইবি কমাইবে কমাইবেন কমাইল কমাইলাম কমাইলি কমাইলে কমাইলেন কমাইয়া কমাইয়াছ কমাইয়াছি কমাইয়াছিল কমাইয়াছিলাম কমাইয়াছিলি কমাইয়াছিলে কমাইয়াছিলেন কমাইয়াছিস কমাইয়াছে কমাইয়াছেন কমাইয়ো কমাক কমাকৃতি কমাচ্ছ কমাচ্ছি কমাচ্ছিল কমাচ্ছিলাম কমাচ্ছিলি কমাচ্ছিলে কমাচ্ছিলেন কমাচ্ছিলেম কমাচ্ছিলুম কমাচ্ছিস কমাচ্ছে কমাচ্ছেন কমাত কুমাতা কমাতাম কমাতিস কমাতে কমাতেই কমাতেন কমাতেম কমাতুম কমান কমানো কমান্ড কমান্ডার কমান্ডার্স কমান্ডিং কমান্ডেন্ট কমান্ডো কমাব কমাবার কমাবি কমাবে কমাবেন কমাবো কুমার কুমারখালি কুমারঘাট কুমারিকা কুমারী কুমারীকাল কুমারচার কুমারীব্রত কুমারটুলি কুমারডুবি কুমারতলা কুমারব্রত কুমারভৃত্যা কমার্শিয়াল কমার্স কুমারসম্ভব কমাল কমালাম কমালি কমালে কমালেন কমালেম কমালুম কমাস কমি কৃমি কমিউনিকেট কমিউনিকেশন কমিউনিকেশনস কমিউনিজম কমিউনিটি কমিউনিস্ট কমিক কমিকস কমিক্স কৃমিঘ্ন কৃমিজ কমিট কৃমিযুক্ত কমিটি কমিত কমিতাম কমিতিস কমিতে কমিতেছ কমিতেছি কমিতেছিল কমিতেছিলাম কমিতেছিলি কমিতেছিলে কমিতেছিলেন কমিতেছিস কমিতেছে কমিতেছেন কমিতেন কমিন কৃমিনাশক কমিব কমিবার কমিবি কমিবে কমিবেন কুমির কুমিরা কমিল কমিলাম কমিলি কমিলে কমিলেন কুমিল্লা কুমিল্লাকলেজ কমিশন কমিশনার কমিশনড কমিশন্ড কমিশনপ্রাপ্ত কমিস কমিসেরিয়েট কমিয়া কমিয়াছ কমিয়াছি কমিয়াছিল কমিয়াছিলাম কমিয়াছিলি কমিয়াছিলে কমিয়াছিলেন কমিয়াছিস কমিয়াছে কমিয়াছেন কমিয়ে কমিয়েছ কমিয়েছি কমিয়েছিল কমিয়েছিলাম কমিয়েছিলি কমিয়েছিলে কমিয়েছিলেন কমিয়েছিলেম কমিয়েছিলুম কমিয়েছিস কমিয়েছে কমিয়েছেন কমিয়ো কুমীর কমে কমেছ কমেছি কমেছিল কমেছিলাম কমেছিলি কমেছিলে কমেছিলেন কমেছিলেম কমেছিলুম কমেছিস কমেছে কমেছেন কমেট কমেডি কমেডিস কমেডিয়ান কমেন কমেনি কমেন্ট কমেন্টারি কুমেরু কুমেরুজ্যোতি কুমেরুবৃত্ত কমোডোর কুমোর কুমোরটুলি কুমোরপাড়া কমছ কমছি কমছিল কমছিলাম কমছিলি কমছিলে কমছিলেন কমছিলেম কমছিলুম কমছিস কমছে কমছেন কমজাত কমজোর কমজোরি কম্যান্ড কম্যান্ডার কম্যান্ডো কম্যুনিজম কম্যুনিস্ট কমঠ কমণ্ডলু কমত কমতাম কমতি কুমতি কমতিবাড়তি কমতিস কমতে কমতেন কমতেম কমতো কমতুম কুমতলব কুমতলবপূর্ণ কুমুদ কমদামী কুমুদিনী কুমুদী কুমুদনাথ কুমুদবান্ধব কুমুদবতী কুমুদবহুলা কুমুদরঞ্জন কুমুদশোভিত কমন কমুন কমনওয়েলথ কমনওয়েলথভুক্ত কমনীয় কমনীয়া কমনীয়তা কমনে কমনডেভিড কুমন্ত্রী কুমন্ত্রণা কুমন্ত্রণাদাতা কমনরুম কমনস কমন্স কমন্সউইকিমিডিয়া কমন্সক্যাট কম্প কমপক্ষে কম্পাংক কম্পাইল কম্পাইলার কম্পাউন্ডার কম্পাউন্ডারি কম্পাঙ্ক কম্পাঙ্কসমষ্টি কম্পানিয়ন কম্পাস কম্পিউটার কম্পিউটারগ্রাফিকস কম্পিউটারাইজেশন কম্পিউটারাইজড কম্পিউটারায়ন কম্পিউটারপ্রোগ্রামার কম্পিউটারপ্রোগ্রামিং কম্পিউটারপ্রযুক্তি কম্পিউটারমেমরি কম্পিউটার্স কম্পিউটারসফটওয়্যার কম্পিউটিং কম্পিউটেশন কম্পিউটেশনাল কম্পিটিশন কম্পিত কম্পিতা কম্পেক্ট কমপোক্ত কম্পোজ কম্পোজার কম্পোজারস কম্পোজিটার কম্পোজিটর কম্পোজিশন কম্পোনেন্ট কম্পজ্বর কমপ্যাক কমপ্যাক্ট কম্প্যাক্ট কম্প্যাটিবিলিটি কম্প্যাটিবল কম্প্যানিয়ন কম্পন কম্পনাঙ্ক কম্পনজাত কম্পনধ্বনি কম্পনশীল কম্পনসূচক কম্পনহীন কম্পমান কম্প্র কমপ্রেশন কমপ্রেস কমপ্রেসড কম্প্রোমাইজ কম্প্রবক্ষ কম্পলিকেট কমপ্লিট কমপ্লিমেন্ট কমপ্লিমেন্টারিটি কমপ্লেইন্ট কমপ্লেক্স কমপ্লেক্সিসিটি কমফোর্টেবল কম্ফর্টার কমব কম্বু কম্বুকণ্ঠ কম্বুকণ্ঠী কমবক্ত কমবখত কম্বাইন্ড কমবার কমবি কম্বিনেশন কমবে কমবেট কমবেন কমবেনা কমবেশ কমবেশি কমবো কম্বোডিয়া কম্বোডীয় কমব্যাট কম্বুধ্বনি কম্বল কম্বলসম্বল কমবয়সী কুম্ভ কুম্ভক কুম্ভকার কুম্ভকোট কুম্ভকর্ণ কুম্ভিল কুম্ভিলক কমভীতিকর কুম্ভীপাক কুম্ভীর কুম্ভীরাশ্রু কুম্ভযোনি কুম্ভধারণ কুম্ভমেলা কুম্ভরাজ কুম্ভশাল কুম্ভশালা কম্ম কমর কম্র কুমরে কমরেড কমরেডস কুমরেপোকা কমরবন্দি কমরবন্ধ কমল কমলআঁখি কমলকোরক কমলকোষ কমলকূর্চিকা কমলকলি কমলকলিকা কমলগঞ্জ কমলা কমলাকান্ত কমলাকৃতি কমলাক্ষ কমলাগুঁড়ি কমলাপতি কমলাপুর কমলাভোগ কমলাম কমলারঙ কমলালেবু কমলালয়া কমলাসন কমলাসনা কমলি কমলিওয়ালা কমলিওয়ালে কমলিনী কমলে কমলেকামিনী কমলেন কমলেম কমলের কমলো কমলঞ্জনী কমলঞ্জনীরাগ কমলযোনি কমলনিন্দিত কমলনয়ন কমলনয়না কমলপুর কমলুম কমললোচন কমললতা কমসংখ্যক কমসে কমসেকম কমসম কমহার কুমড়া কুমড়াগাছ কুমড়াগড়াগড়ি কুমড়াপটাশ কুমড়ো কুমড়োগড়াগড়ি কুমড়োপটাশ কর করু কুর কুরু ক্রু কুরআন কুরআনিক কুরআনেরতাৎপর্য কুরআনমজিদ কুরআনহাকিম করই করক করুক কর্ক করকা করকাপাত করকাল করকচ করকচি করকোষ্ঠী কর্কট কর্কটক কর্কটক্রান্তি কর্কটক্রান্তিরেখা কর্কটিকা কর্কটরাশি কর্কটরোগ করকবলিত করকম করকমল করকমলেষু করকর কুরকুর করকরা কর্করা করকরান করকরানো করকরে কুরকুরে কর্কশ কর্কশতা কর্কশভাবে কুরুক্ষেত্র করগেট ক্রুগো করগ্রাহক করগ্রাহী করগ্রহ করগ্রহণ করঘাত করঙ্ক করঙ্গ কুরঙ্গ কুরঙ্গক কুরঙ্গিণী কুরঙ্গী কুরঙ্গনয়না কুরঙ্গম করা কুরা করাই করাইত করাইতাম করাইতিস করাইতে করাইতেছ করাইতেছি করাইতেছিল করাইতেছিলাম করাইতেছিলি করাইতেছিলে করাইতেছিলেন করাইতেছিস করাইতেছে করাইতেছেন করাইতেন করাইব করাইবার করাইবি করাইবে করাইবেন ক্রাইম করাইল করাইলাম করাইলি করাইলে করাইলেন কুরাইশ ক্রাইস ক্রাইসিস ক্রাইসেয়র ক্রাইসোজেনাম ক্রাইস্ট ক্রাইস্টস করাইয়া করাইয়াছ করাইয়াছি করাইয়াছিল করাইয়াছিলাম করাইয়াছিলি করাইয়াছিলে করাইয়াছিলেন করাইয়াছিস করাইয়াছে করাইয়াছেন করাইয়ো ক্রাউচ ক্রাউড ক্রাউন করাও করাক করাকালীন করাঘাত করাঙ্গুলি করাচী করাচ্ছ করাচ্ছি করাচ্ছিল করাচ্ছিলাম করাচ্ছিলি করাচ্ছিলে করাচ্ছিলেন করাচ্ছিলেম করাচ্ছিলুম করাচ্ছিস করাচ্ছে করাচ্ছেন করাত করাতাম করাতি করাতিস করাতে করাতেন করাতেম করাতের করাতো করাতুম করান কুরান কুরানি করানো কুরানো ক্রান্ত ক্রান্তি ক্রান্তিকাল ক্রান্তিকালীন ক্রান্তিকোণ ক্রান্তিপাত ক্রান্তিপর্ব ক্রান্তিবিন্দু ক্রান্তিবৃত্ত ক্রান্তিবলয় ক্রান্তিমণ্ডল ক্রান্তিরেখা ক্রান্তীয় ক্রান্তদর্শী করাপ্ট করাপশন ক্রাফট ক্রাফটস করাব করাবার করাবি করাবে করাবেন করাবো করামুখ করামত করামৎ করার করারোপ করারোপণ করারদাদ করারূপ করাল করালাম করালি করালে করালেই করালেন করালেম করালবদনা করালুম করালমঞ্চ ক্রাশ করাস করাসহ করায় করায়া করায়ত্ত করি কুরি ক্রি ক্রিং ক্রিংক্রিং করিঅরি ক্রিউ ক্রিক ক্রিকক্রিক ক্রিকেট ক্রিকেটখেলা ক্রিকেটার ক্রিকেটীয় ক্রিকমার করিকর করিছে ক্রিজ ক্রিট ক্রিটিক ক্রিটিকস ক্রিটিক্স ক্রিটেসাস ক্রিটো করিডোর করিডর করিত করিতকর্মা করিৎকর্মা করিতাম কুরিতাম করিতিস কুরিতিস করিতে কুরিতে করিতেছ কুরিতেছ করিতেছি কুরিতেছি করিতেছিল কুরিতেছিল করিতেছিলাম কুরিতেছিলাম করিতেছিলি কুরিতেছিলি করিতেছিলে কুরিতেছিলে করিতেছিলেন কুরিতেছিলেন করিতেছিস কুরিতেছিস করিতেছে কুরিতেছে করিতেছেন কুরিতেছেন করিতেন কুরিতেন করিনা করিনি ক্রিপ্টানালাইসিস ক্রিপটিক ক্রিপ্টীয় ক্রিপ্টেক্স ক্রিপ্টো ক্রিপ্টোকরণ ক্রিপ্টোগ্রাফি ক্রিপ্টোগ্রাফিক ক্রিপ্টোবিদ ক্রিপ্টোবিদ্যা ক্রিপ্টোবিশেষজ্ঞ ক্রিপ্টোসিস্টেম ক্রিপটন ক্রিপ্টন করিব কুরিব করিবার কুরিবার করিবি কুরিবি করিবে কুরিবে করিবেন কুরিবেন করিম ক্রিম করিমগঞ্জ করিমা ক্রিমি ক্রিমিনাল ক্রিমিয়ার করিমপুর করিল কুরিল করিলা করিলাম কুরিলাম করিলি কুরিলি করিলে কুরিলে করিলেক করিলেন কুরিলেন ক্রিশ্চান ক্রিশ্চিয়ান করিস কুরিস ক্রিস ক্রিসেন্ট ক্রিস্টানিয়া ক্রিস্টাল ক্রিস্টালোগ্রাফি ক্রিস্টালবিদ ক্রিস্টি ক্রিস্টিন ক্রিস্টিনা ক্রিস্টিয়ান ক্রিস্টিয়ানিয়া ক্রিস্টিয়ানো ক্রিস্টোফার ক্রিস্টফ ক্রিস্টমাস ক্রিস্তিয়ান ক্রিস্তিয়ানো ক্রিস্তো ক্রিস্তোফার ক্রিস্তফ ক্রিসমাস করিহ করিয়া কুরিয়া ক্রিয়া ক্রিয়াঅগ্র ক্রিয়াকাণ্ড ক্রিয়াকারী ক্রিয়াকৌশল ক্রিয়াকর্ম ক্রিয়াকলাপ ক্রিয়াগত করিয়াছ কুরিয়াছ করিয়াছি কুরিয়াছি করিয়াছিল কুরিয়াছিল করিয়াছিলাম কুরিয়াছিলাম করিয়াছিলি কুরিয়াছিলি করিয়াছিলে কুরিয়াছিলে করিয়াছিলেন কুরিয়াছিলেন করিয়াছিস কুরিয়াছিস করিয়াছে কুরিয়াছে করিয়াছেন কুরিয়াছেন ক্রিয়াজাত ক্রিয়াডবল ক্রিয়াদি ক্রিয়াদ্বন্দ্ব ক্রিয়ান্বিত ক্রিয়াপদ ক্রিয়াপদক্র ক্রিয়াবাচক ক্রিয়াবাদী ক্রিয়াবিধি ক্রিয়াবিনিময় ক্রিয়াবিভক্তি ক্রিয়াবিশেষক ক্রিয়াবিশেষ্য ক্রিয়াবিশেষণ ক্রিয়াবিশেষণীয় ক্রিয়াবিশেষণধর্মী ক্রিয়াবিহীন ক্রিয়াভাব ক্রিয়ামূল কুরিয়ার কুরিয়ারিজম ক্রিয়ারত ক্রিয়ারূপ ক্রিয়ালোপ ক্রিয়াশীল ক্রিয়াশীলতা ক্রিয়াসক্ত ক্রিয়াসাধক ক্রিয়াসমাপ্তি ক্রিয়াহীন ক্রিয়াহীনতা ক্রিয়াহীনভাবে করিয়ে করিয়েই ক্রিয়েচার করিয়েছ করিয়েছি করিয়েছিল করিয়েছিলাম করিয়েছিলি করিয়েছিলে করিয়েছিলেন করিয়েছিলেম করিয়েছিলুম করিয়েছিস করিয়েছে করিয়েছেন ক্রিয়েটিভ ক্রিয়েশন ক্রিয়েশনস করিয়ো কুরিয়ো ক্রিয়মাণ করী কুরী কূর্চ ক্রীক করচা করচালান করচালন কুরুচি কূর্চিকা কুরচিনামা কুরুচিপূর্ণ কুরুচিপসম্পন্ন করচিহ্ন ক্রীত ক্রীতক কুরীতি ক্রীতদাস ক্রীতদাসী ক্রীতদাসত্ব ক্রীতদাসরূপে করীম করীমা করীষ করীষাগ্নি ক্রীড়ক ক্রীড়া ক্রীড়াকৌতুক ক্রীড়াকৌতুকাদি ক্রীড়াকন্দুক ক্রীড়াকুশলী ক্রীড়াখেলোয়াড় ক্রীড়াঙ্গন ক্রীড়াচক্র ক্রীড়াচ্ছলে ক্রীড়াজীবন ক্রীড়াদল ক্রীড়ানুষ্ঠান ক্রীড়াপ্রতিযোগিতা ক্রীড়াপ্রতিযোগী ক্রীড়াপ্রতিভা ক্রীড়াবিদ ক্রীড়াব্যক্তিত্ব ক্রীড়াভূমি ক্রীড়ামোদী ক্রীড়ারত ক্রীড়ার্থ ক্রীড়াসংগঠক ক্রীড়াসংঘ ক্রীড়াসঙ্গিনী ক্রীড়াসঙ্গী ক্রীড়াসুলভ ক্রীড়ন ক্রীড়নক ক্রীড়নকরূপে ক্রীড়নীয় ক্রীড়মান করে কুরে ক্রে ক্রেইগ ক্রেওল ক্রেগ করেগা করেছ কুরেছ করেছি কুরেছি করেছিল কুরেছিল করেছিলাম কুরেছিলাম করেছিলি কুরেছিলি করেছিলে কুরেছিলে করেছিলেন কুরেছিলেন করেছিলেম কুরেছিলেম করেছিলো করেছিলুম কুরেছিলুম করেছিললেন করেছিস কুরেছিস করেছে কুরেছে করেছেন কুরেছেন করেছো করেছন করেযে ক্রেডিট করেত ক্রেতা ক্রেতাসাধারণ করেতে ক্রেতব্য ক্রেত্রী করেন ক্রেন করেনা করেনি ক্রেনিয়া ক্রেনিয়াল করেনযে করেননা করেননি ক্রেপ ক্রেবস করেম করেলা ক্রেস্ট ক্রেসপো ক্রেয় ক্রেয়ন করো কুরো ক্রো ক্রোক ক্রোকি করোগেট করোট ক্রোটান করোটি করোটিকা করোটিহীন করোটী ক্রোটন ক্রোধ ক্রোধকর ক্রোধাগার ক্রোধাগ্নি ক্রোধাদি ক্রোধান্ধ ক্রোধান্বিত ক্রোধান্বিতা ক্রোধানল ক্রোধাবিষ্ট ক্রোধিত ক্রোধী ক্রোধোদ্দীপক ক্রোধোপগম ক্রোধজনক ক্রোধযুক্ত ক্রোধন ক্রোধনিবারক ক্রোধপ্রকাশ ক্রোধপরায়ণ ক্রোধপ্রবণ ক্রোধপরবশ ক্রোধপ্রশমন ক্রোধবহ্নি ক্রোধভরে ক্রোধরূপ ক্রোধহীন ক্রোধহীনতা করোনা করোনাভাইরাস ক্রোনোমিটার ক্রোমাইট ক্রোমাটিন ক্রোমিয়াম ক্রোমোজোম ক্রোর ক্রোরপতি ক্রোশ ক্রোশী ক্রোশটাক ক্রোড় ক্রোড়াঙ্ক ক্রোড়াস্থিত ক্রোড়চ্যুত ক্রোড়পতি ক্রোড়পত্র ক্রোড়স্থ ক্রোয়েশিয়া ক্রোয়েশীয় করছ করছি কুরছি করছিনা কুরছিনামা করছিল করছিলাম করছিলি করছিলে করছিলেন করছিলেম করছিলো করছিলোনা করছিলুম করছিস করছে করছেন করছেনা করছেননা ক্রৌঞ্চ ক্রৌঞ্চী ক্রৌঞ্চদম্পতি ক্রৌঞ্চমিথুন ক্রৌর্য করছস কর্জ ক্রুজ করজোড়ে করঞ্চা করঞ্জ করঞ্জক করঞ্জা করঞ্জাফল কর্য ক্র্যাক ক্র্যাচ ক্র্যাফট ক্র্যাফটস ক্র্যাব কর্টিকোট্রোপ কর্টিকোট্রপিন কর্টেক্স করযোগ্য কর্ড ক্রুড কর্ডাটা কর্ডাটাশ্রেণী কর্ডাল করণ করুণ কর্ণ করণকারক করণকারণ কর্ণকুন্তী কর্ণকুহর কর্ণগোচর করুণা করুণাউদ্দীপন করুণাকিরণ কর্ণাট কর্ণাটক কর্ণাটী কর্ণাটপ্রদেশ কর্ণাটরাগ করুণানিদান করুণানিধান করুণানিধি করুণানিলয় কর্ণান্তর করুণাপরিপ্লুত করুণাপূর্ণ কর্ণাভরণ করুণাময় করুণাময়ী করুণারূপ করুণালাভ করুণাহীন করণিক কর্ণিক কর্ণিকা কুর্ণিশ কুর্ণিস করণী করণীয় কর্ণেজপ করণ্ড কুরণ্ড করণ্ডক করণ্ডিকা কুরুণ্ডিয়া কুরুণ্ডে কর্ণধার কর্ণপাত কর্ণপাড়া কর্ণপট কর্ণপটহ কর্ণপথ কর্ণফুল কর্ণফুলী কর্ণফুলীনদী কর্ণবিদারী কর্ণবিদ্ধকরণ কর্ণবিবর কর্ণবেধ করুণভাবে কর্ণভূষণ কর্ণমূল কর্ণরন্ধ্র কর্ণরূপ করণশীল কর্ণশূল কর্ণসুবর্ণ করণসহায়িকা কর্ণহীন করত কুরত কর্তৃক কর্তৃকারক করতা কর্তা কুর্তা কর্তাগিন্নি কর্তাগিরি কুর্তাধারী কর্তাপনা কুর্তাপরিহিত কর্তাবিশেষক কর্তাবিহীন কর্তাব্যক্তি কর্তাভজা করতাম কর্তার করতাল কর্তাল করতালি কর্তালি করতালিমুখর করতাড়ন কুর্তি কর্তিত করতিস করতে করতেছ করতেছি করতেছিলাম করতেছে করতেছেন করতেছো করতেছস করতেন করতেননা করতেম করতের করতো করতোয়া কর্তৃত্ব কর্তৃত্বাধীন কর্তৃত্ববাদী কর্তৃত্ববান কর্তৃত্ববিস্তার কর্তৃত্ববল কর্তৃত্বসম্পন্ন কর্তৃত্বহীন কর্তৃত্বহীনতা কর্তন কর্তনকারী করতনা কর্তৃনিষ্ঠ কর্তনী কর্তনযন্ত্র কর্তৃপক্ষ কর্তৃপক্ষীয় কর্তৃপদ করতব কর্তব কর্তৃবাচক কর্তৃবাচ্য কর্তৃবোধক কর্তব্য কর্তব্যকর্ম কর্তব্যাদি কর্তব্যজ্ঞানহীন কর্তব্যযথা কর্তব্যতা কর্তব্যনির্ণয় কর্তব্যনির্দেশ কর্তব্যনির্ধারণ কর্তব্যনিষ্ঠ কর্তব্যনিষ্ঠা কর্তব্যনিয়ামক কর্তব্যপালন কর্তব্যপরায়ণ কর্তব্যভার কর্তব্যরত কর্তব্যরূপে কর্তব্যসাধন কর্তৃবর্গ করতুম কুরতুম করত্র করত্রাণ কর্তরিকা কর্তরী কর্ত্রী করতল করতলগত করতলস্থ করতলস্থিত করদ করদাতা কুর্দি কুর্দিস্তান ক্রুদ্ধ ক্রুদ্ধকরণ ক্রুদ্ধা ক্রুদ্ধদৃষ্টি ক্রুদ্ধভাবে ক্রুদ্ধস্বভাব কুর্দন কর্দম কর্দমাক্ত কর্দমাক্ততা কর্দমেশ্বর কর্দমজাত কর্দমযুক্ত কর্দমময় কর্দমলিপ্ত করদরাজ্য করধান করধৃত করন করুন কর্নওয়াল কর্নওয়ালিস করনা কর্না কর্নার করনাল ক্রনাস করনি কর্নি কুরুনি কুর্নি ক্রনিক করনিকেশ কুর্নিকোভা ক্রনিকল ক্রনিকলজন করনির্ধারণ কুরনিশ কুর্নিশ করনিষ্কর কুর্নিস কর্নিয়া করনীয় কর্নেল কর্নেলিয়াস ক্রন্দিত ক্রন্দন ক্রন্দনোন্মুখ ক্রন্দনধ্বনি ক্রন্দনরোল ক্রন্দনরত ক্রন্দনরতা ক্রন্দনশীল ক্রন্দসী কর্নফ্লাওয়ার কর্নবার্গ কর্প কুরূপ ক্রপ কুরুপক্ষ কুরূপা কুরুপাণ্ডব করপাত করপাল করপীড়িত করপীড়ন কর্পো করপোরাল কর্পোরাল কর্পোরিস কর্পোরেট কর্পোরেশন কর্পোরেশনাধীন করপুট করপুটতল করপত্র করপদ্ম কর্পর কর্পূর কুর্পর কূর্পর করপরাল কুরুপূর্ণ করপ্রদান করপ্রদানতত্ত্ব করপ্রপীড়িত কুরুপ্রবীর কর্পূররস করপল্লব করপৃষ্ঠ করব কুরুবংশ কুরুবংশীয় কুরুবংশধর কুরবক কুরুবক করবা কুরবান কুর্বান কুরবানি কুর্বানি করবার করবাল করবি কুরুবিন্দ করবিমল করবী করবীফুল করবীবন্ধন করবে করবেট করবেটা করবেন করবেনা করবেননা করবো কুরবো করবোনা ক্রব্য ক্রব্যাদ কুরুবৃদ্ধ করবন ক্রুবৃন্দ কর্বুর কর্বূর কর্বুরিত কর্বুরপতি কর্বূরপতি করভ করভিত্তি করভিত্তিক করভী করভূষণ করম করুম কর্ম কূর্ম ক্রম ক্রমঅনুসারী কর্মঅভিজ্ঞতা ক্রমউপাত্ত কর্মক কর্মকাণ্ড কর্মকার কর্মকারক কর্মকারী কর্মকেন্দ্র কর্মকৌশল ক্রমক্যাম্প কর্মকুণ্ঠ করমুক্ত ক্রমকরণ কর্মকর্তা কর্মকর্তৃবাচ্য কর্মকর্তৃরূপ ক্রমক্রমণ কর্মকুশল কর্মকুশলতা কর্মক্ষেত্র কর্মক্ষম কর্মক্ষমতা কর্মক্ষমতাদি ক্রমগতি কর্মা কর্মাকর্ম ক্রমাগত ক্রমাগতভাবে ক্রমাগতলক্ষণ কর্মাদি কর্মাধ্যক্ষ কর্মানুযায়ী ক্রমানুযায়ী কর্মান্তর কর্মানুবন্ধ ক্রমান্বয় ক্রমান্বয়িক ক্রমান্বয়িত ক্রমান্বয়ী কর্মানুরূপ ক্রমানুসারে ক্রমাবনতি কর্মার কর্মারম্ভ ক্রমায়াত ক্রমায়নযোগ্য করমি কর্মিক ক্রমিক ক্রমিকমান কুর্মিটোলা কর্মিষ্ঠ কর্মী করমচা করমচাঁদ কর্মচারী কর্মচারীরা কর্মচঞ্চল কর্মচ্যুত কর্মচ্যুতি কর্মীভবন কর্মীসভা ক্রমে ক্রমেক্রমে কর্মেন্দ্রিয় কর্মের ক্রমেল ক্রমেলক ক্রমোচ্চ ক্রমোৎকর্ষ কর্মোৎপাদনশীলতা কর্মোদ্যোগ কর্মোদ্যম ক্রমোন্নত ক্রমোন্নতি কর্মোপযোগী কর্মজাল কর্মজীবী কর্মজীবন ক্রমজোড় কর্মযোগ কর্মযোগী ক্রমযোজিত ক্রমযৌগিক কর্মযজ্ঞ কর্মঠ কর্মডুবি কর্মতালিকা ক্রমতালিকা কর্মত্যাগ কর্মতৎপর কর্মতৎপরতা কর্মদক্ষ কর্মদক্ষতা ক্রমদেশ কর্মদোষ কর্মদপ্তর কর্মধার কর্মধারা ক্রমধারা কর্মধারয় ক্রমনাম কর্মনাশা কর্মনিপুণ ক্রমনিম্ন ক্রমনিম্নতা কর্মনির্বাহী কর্মনিষ্ঠ কর্মনিষ্ঠা কর্মনিয়োগ কর্মনীতি ক্রমপুঞ্জিত কর্মপণ্ড কর্মপথ কর্মপদ কর্মপদীয় কর্মপদযুক্ত কর্মপদ্ধতি কর্মপদহীন কর্মপন্থা কর্মপ্রক্রিয়া কর্মপরিকল্পনা কর্মপরিচালক কর্মপরিধি ক্রমপরিবর্তন কর্মপরিষদ কর্মপ্রচেষ্টা কর্মপ্রচেষ্টাযুক্ত ক্রমপর্যায় কর্মপ্রণালী কর্মপ্রতিষ্ঠান কর্মপ্রবচনীয় কর্মপ্রবর্তনা ক্রমপরম্পরা কর্মপ্রস্তাবনা কর্মফল কর্মফলদাতা কর্মফলস্বরূপ কর্মবাঙালি কর্মবাচক ক্রমবাচক কর্মবাচ্য কর্মবাদ ক্রমবাদ কর্মবাদী ক্রমবাহুল্য ক্রমবিকাশ ক্রমবিন্যাস ক্রমবিন্যস্ত কর্মবিপাক ক্রমবিপর্যয় ক্রমবিবর্তন কর্মবিভাজন কর্মবিরতি কর্মবীর কর্মব্যস্ত কর্মব্যস্ততা ক্রমবৃদ্ধি ক্রমবৃদ্ধিশীল ক্রমবর্ধমান কর্মভক্তি ক্রমভঙ্গ কর্মভাববাচ্য কর্মভার কর্মভোগ কর্মভূমি কর্মমুখী ক্রমমাণ কর্মময় কর্মরত করমর্দন করমর্দনকারী কর্মলিপ্ত ক্রমলয় ক্রমশ কর্মশক্তি কর্মশালা কর্মশীল ক্রমশোধ ক্রমসংখ্যা কর্মসংস্থান কর্মসাক্ষী কর্মসাধন কর্মসাহিত্য কর্মসিদ্ধি কর্মসূচি কর্মসচিব কর্মসূচী ক্রমসঞ্চয় ক্রমসঞ্চয়ী কর্মসূত্র কর্মস্থান কর্মস্থল কর্মসন্ধান কর্মসন্ন্যাস কর্মসম্পাদক কর্মসম্পাদিকা কর্মসম্পাদন কর্মসম্পাদনকারিণী কর্মসম্পাদনাদি কর্মসহিত কর্মহীন ক্রমহীন কর্মহীনতা ক্রমহ্রাসমান কুরর ক্রুর ক্রূর ক্রূরকর্মা কুরুরাজ কুরুরাজা ক্রূরাত্মা কুররী কররেখা ক্রূরতা ক্রূরমতি ক্রূরলোচন কররুহ কুররয় করল করলু কুরুল করলা করলাম কুরলাম করলি কুরলি ক্রলিং করলে কুরলে করলেন কুরলেন করলেম কুরলেম করলো করলুম করল্লা করলহি ক্রুশ কুরুশকাঁটা ক্রুশকাঁটা কুরুশকাঠি ক্রুশকাঠি ক্রুশাকার ক্রুশবিদ্ধ ক্রুশবিদ্ধকরণ কর্ষ কর্ষক কর্ষিত কর্ষণ কর্ষণকারী কর্ষণীয় কর্ষণযোগ্য ক্রস ক্রসউইন্ডস ক্রসওভার কুরসি কুর্সি ক্রসিং কুর্সিকাঁটা কর্সিকান কুরসিনামা ক্রুসিয়াল ক্রুসিয়েটাস ক্রুসেড ক্রুসো করসূত্র ক্রসফায়ার ক্রসবি ক্রসব্রিড ক্রসমার্শাল কুরুসম্পন্ন করহ করহুঁ করহীন ক্রয় ক্রয়কারী ক্রয়ক্ষমতা ক্রয়ক্ষমতাবিধি ক্রয়াধিকার ক্রয়িণী ক্রয়েচ্ছু ক্রয়যোগ্য ক্রয়বিক্রয় ক্রয়মূল্য ক্রয়সাধ্য ক্রয়সীমা কল কলু কুল কূল কলুই কল্ক ক্লক কলক্কল কলকা কল্কা কলকাকলি কলকাযুক্ত কলকাঠি কুলকাঠি কলকাতা কলকাতাচিড়িয়াখানা কলকাতাপ্রেমী কলকাতাবাসী কলকাতোলা কলকাত্তাই কলকাদার কলকাপেড়ে কুলকামিনী কলকারখানা কলকি কল্কি কূলকিনারা কল্কিপুরাণ কল্কী কুলকুচা কুলকুচো কলকে কল্কে কলকেতা কুলকণ্টক কলকণ্ঠ কলকণ্ঠী কুলকুণ্ডলিনী কলকথা কুলকন্যা কলকব্জা কুলকরা কূলকরা কুলক্রিয়া কুলকর্ম কুলক্রম কুলক্রমাগত কলকল কুলকুল কুলকলঙ্ক কুলকলঙ্কিনী কুলকলঙ্কী কলকলান কলকলানি কলকলানো কলকলধ্বনি কলকলনিনাদ কুলক্ষণ কুলক্ষণা কুলক্ষুণে কুলক্ষণযুক্ত কুলক্ষয় কুলক্ষয়কারী ক্লকস ক্লক্সাসিলিন কুলুখ কুলখানি কলগী কুলগৌরব কুলগ্ন কুলগর্ব কলঘাট কুলঘ্ন কলঘর কলঙ্ক কলঙ্ককালিমা কলঙ্ককাহিনী কলঙ্ককর কলঙ্কগ্রস্ত কলঙ্কিত কলঙ্কিতা কলঙ্কিনী কলঙ্কী কলঙ্কচাপান কলঙ্কচাপানো কলঙ্কজনক কলঙ্কযুক্ত কলঙ্কধরা কলঙ্কপড়া কলঙ্কবতী কলঙ্কভঞ্জ কলঙ্কভঞ্জন কলঙ্কমোচন কলঙ্কময় কলঙ্করটানো কলঙ্কলাঞ্ছিত কলঙ্কলিপ্ত কলঙ্কলেপন কলঙ্কশূন্য কলঙ্কষ কূলঙ্কষ কলঙ্কষা কূলঙ্কষা কলঙ্কস্বরূপ কলঙ্কসৃষ্টিকারী কলঙ্কহীন কলঙ্কহীনা কুলঙ্গি কুলুঙ্গি কলা কুলা কলাই কুলাই কুলাইও কলাইকর কলাইকরা কলাইগর ক্লাইটেলাম কুলাইত কুলাইতাম কুলাইতিস কুলাইতে কুলাইতেছ কুলাইতেছি কুলাইতেছিল কুলাইতেছিলাম কুলাইতেছিলি কুলাইতেছিলে কুলাইতেছিলেন কুলাইতেছিস কুলাইতেছে কুলাইতেছেন কুলাইতেন কুলাইব কুলাইবার কুলাইবি কুলাইবে কুলাইবেন ক্লাইমেট ক্লাইম্যাক্স কুলাইল কুলাইলাম কুলাইলি কুলাইলে কুলাইলেন কলাইশুঁটি কুলাইয়া কুলাইয়াছ কুলাইয়াছি কুলাইয়াছিল কুলাইয়াছিলাম কুলাইয়াছিলি কুলাইয়াছিলে কুলাইয়াছিলেন কুলাইয়াছিস কুলাইয়াছে কুলাইয়াছেন কলাইয়ের কুলাইয়ো ক্লাউড ক্লাউডস ক্লাউন কুলাউড়া কুলাক কলাকার কলাকৈবল্যবাদ কলাকৌশল কলাকুশল কলাকুশলী কলাক্ষেত্র কলাখাওয়া কলাগাছ কুলাঙ্গার কুলাচার কুলাচার্য কলাচর্চা কুলাচল কলাতিক্রম কলাতত্ত্ব কলাদেখানো কুলাদ্রি কলাধার কলাধর কলান কুলান কলানাথ কলানিধি কলানৈপুণ্য কলানো কুলানো ক্লান্ত ক্লান্তা ক্লান্তি ক্লান্তিকর ক্লান্তিজনক ক্লান্তিজনিত ক্লান্তিবিনোদন ক্লান্তিহীন ক্লান্তভাবে কলাপ কলাপাত কলাপাতা কলাপী কলাপোড়া ক্লাব কলাবউ কলাবাগান কলাবিদ কলাবিদ্যা কলাবিভাগ কুলাবে কলাবৌ কলাবত কলাবৎ কলাবতী কলাবতীরাগ কলাবধূ কুলাভিমান কুলাভিমানী কলাভবন কলাম কলামিস্ট কলাম্বিয়া কলামলেখক কলার ক্লার্ক ক্লারিনেট ক্লারিফিকেশন কলারোয়া কলারছড়া কলারডগা কলারডেম কলারহিত কুলাল কুলালচক্র ক্লাস ক্লাসঘর ক্লাসিক ক্লাসিকাল ক্লাসিকের ক্লাসিক্যাল ক্লাসিকস ক্লাসিফিকেশন ক্লাসিসিজম ক্লাস্টার ক্লাসফ্রেন্ড ক্লাসমেট ক্লাসরুম কুলাহক কুলায় কুলায়িকা ক্লায়েন্ট ক্লায়োমেট্রিকস কুলায়স্থ কলি কুলি কলিং ক্লিওপেট্রা ক্লিক কলিকা কলিকাতা কলিকাপাওয়া কলিকাবয়সী কুলিকামিন কলিকাল কলিঙ্গ কুলিঙ্গ কুলিঙ্গক কলিঙ্গদেশ কলিচুন কলিজা কলিঞ্জ কলিযুগ কুলিতা কলিদার কলিদেব কুলিধাওড়া কলিন ক্লিন ক্লিনিক ক্লিনিকাল ক্লিনিক্যাল ক্লিনটন ক্লিন্ন ক্লিন্নতা ক্লিন্সম্যান ক্লিপ ক্লিফ কলিফিরানো ক্লিভ কুলিভাড়া ক্লিভল্যান্ড কুলির কুলিরক কলিল কুলিশ কুলিশকঠোর ক্লিশিত কুলিশী ক্লিশ্যমান কুলিশধারী কুলিশপাত ক্লিষ্ট ক্লিষ্টতা কুলিসর্দার ক্লিয়ার কলিয়ারি ক্লিয়ারিং কুলিয়ারচর কুলিয়ে কুলিয়েছ কুলিয়েছি কুলিয়েছিল কুলিয়েছিলাম কুলিয়েছিলি কুলিয়েছিলে কুলিয়েছিলেন কুলিয়েছিলেম কুলিয়েছিলুম কুলিয়েছিস কুলিয়েছে কুলিয়েছেন কুলিয়ো কুলী কলচালু কুলচ্ছ কুলচ্ছি কুলচ্ছিল কুলচ্ছিলাম কুলচ্ছিলি কুলচ্ছিলে কুলচ্ছিলেন কুলচ্ছিলেম কুলচ্ছিলুম কুলচ্ছিস কুলচ্ছে কুলচ্ছেন কুলীন কুলীনত্ব কুলচন্দ্র কুলীনবংশ কুলীনভোজন ক্লীব ক্লীবতা ক্লীবত্ব ক্লীববেশী ক্লীবলিঙ্গ ক্লীবলিঙ্গবাচক কুলীর কুলীশ কুলচূড়ামণি ক্লে ক্লেইম কলেকৌশলে কুলেখাড়া কলেজ কলেজআইন কলেজা কলেজি কলেজিয়েট কলেজীয় কলেজেপড়া ক্লেদ ক্লেদাক্ত ক্লেদিত ক্লেদযুক্ত কলেপড়া কলেবর কলেমা কুলেরকাঁটা কুলেরকলঙ্ক কুলেরখোঁটা কলেরগান কলেরা কলেরপুতুল ক্লেশ ক্লেশকর ক্লেশাবহ ক্লেশিত ক্লেশপ্রাপ্ত ক্লেশবোধ ক্লেশহীন ক্লৈব্য কুলো কুলোচিত কলোচ্ছোলিত ক্লোজ ক্লোজআপ ক্লোজার ক্লোজিং ক্লোজড ক্লোজলি কুলোৎপন্ন কুলোদ্ভূত কুলোদ্ভব ক্লোন ক্লোনকারী কলোনি ক্লোনিং ক্লোনিংমানব ক্লোনেইড কুলোপানা ক্লোম ক্লোমনালিকা কলোম্বিয়া কলোম্বীয় কলোম্বো ক্লোমশাখা ক্লোরাইড কলোরাডো ক্লোরামফেনিকল ক্লোরিন কলোরিমিটার ক্লোরেট ক্লোরোপ্লাস্ট ক্লোরোফিল ক্লোসআপ ক্লোসা ক্লোয়াকা ক্লোয়াকাযুক্ত কূলছাড়া কুলজ কুলজি কুলজী কুলুজী কলজে কলজেপুরু কল্য কুলট কল্যকার কুলটা কুল্যা কল্যাণ কল্যাণকামী কল্যাণকামনা কল্যাণকারী কল্যাণকর কল্যাণাস্পদ কল্যাণী কল্যাণচিন্তা কল্যাণীয় কল্যাণীয়া কল্যাণীয়েষু কল্যাণীয়বর কল্যাণজনক কল্যাণযুক্ত কল্যাণদায়ক কল্যাণদর্শী কল্যাণপুর কল্যাণপ্রাপ্তি কল্যাণপ্রদ কল্যাণবান কল্যাণবতী কল্যাণবর কল্যাণবরেষু কল্যাণমুখী কল্যাণময় কল্যাণময়ী কল্যাণরাগ কল্যাণসাধন কল্যাণস্বরূপা কলটেপা কলুটোলা কল্যবর্ত ক্লডিয়াস কুলত কলতান কুলতাম কুলতাল কুলতিলক কুলতো কুলত্যাগ কুলত্যাগকারিণী কুলত্যাগকারী কুলত্যাগিনী কুলত্থ কুলতুম কলত্র কলতলা ক্লথ ক্লদ ক্লদিও কুলদেবতা কুলদূষক কুলদূষণ কলধৌত কলধ্বনি কলধ্বনিকারী কুলধর্ম কলন কলনাদ কলনাদী কুলনাম কুলনারী কুলনাশ কুলনাশন কুলনো কলন্তর কলন্দর কলনবিদ্যা কলপ কল্প কুলুপ কুলূপ কল্পক কল্পকাহিনী কল্পকাহিনীকার কল্পকাহিনীভিত্তিক কল্পকথা কল্পক্ষয় কুলপাংশুল কল্পান্ত কল্পান্তে কল্পাবাস কুলপাবন কল্পারম্ভ কুলপি কলপিত কল্পিত কল্পিতা কুলপিবরফ কুলপিমালাই কল্পী কল্পজগত কুলপঞ্জি কল্প্য কুলপতি কল্পতরু কুলপুত্র কল্পদ্রুম কল্পন কল্পনা কল্পনাকারী কল্পনাযোগ্য কল্পনাতীত কল্পনাধর্মী কল্পনাপটু কল্পনাপ্রিয় কল্পনাপ্রবণ কল্পনাপ্রবণতা কল্পনাপ্রসূত কল্পনাবিলাস কল্পনাবিলাসিতা কল্পনাবিলাসী কল্পনাবল কল্পনাভিত্তিক কল্পনারস কল্পনাশক্তি কল্পনাশ্রয়ী কল্পনাসৃষ্ট কল্পনীয় কল্পবৃক্ষ কল্পবিজ্ঞান কুলপরিচায়ক কল্পরেখা কুলপুরোহিত কুলপ্রতিষ্ঠা কুলপ্রদীপ কুলপরম্পরা কূলপ্লাবী কল্পলোক কল্পলতা কল্পসাহিত্য কুলুফ কুলফি কুলফিবরফ কুলফিমালাই কলব কুলবার কুলবালা কলবাহিনী কুলবি কলবিঙ্ক কুলবে কুলবেন কুলবো কলব্যাক কুলবতী কুলবধ কূলবর্তী কলবল কলবলি কলভ কুলভঙ্গ কুলভ্রষ্ট কুলভূষণ কলম ক্লম কলমুখর কলমুখরিত কলমা কলমাকান্দা কুলমান কুলমার্গ কল্মাষ কল্মাষপাদ কলমি কলমিপুঁথি কলমিশাক কলমিয়া কলমচি কুলমণি কলমদান কলমদানি কলমধরা কলমপেশা কলমপেষা কলম্ব কুলম্ব কলমবাজ কলমবাজি কলম্বাস কলম্বিকা কলম্বিয়া কুলম্বেরনীতি কলম্বো কলমবল কুলমর্যাদা কল্মষ কলুর কুলরাখি কলরোডা কলরোল কলরব কলরবকারী কলুরবলদ কুললক্ষণ কুললক্ষ্মী কল্লা কুললাজ কল্লাডা কুললাম কুললি কল্লিদার কুললেন কুললেম কল্লোল কল্লোলিত কল্লোলিনী কল্লোলযুক্ত কল্লোলযুগ কল্লোলময় কল্লোলময়ী কুললুম কলশি কলশী কুলশীল কলুষ কলুষিত কলুষযুক্ত কলুষতা কলস কলসি কুলস্ত্রী কুলস্থ কলসপত্রী কলস্বন কলস্বনা কলস্বর কলস্বরা কুলসুম কলহ কলহংস কলহংসী কলহকারী কলহান্তে কলহান্তরিতা কলহাসিনী কলহাস্য কলহাস্যকারী কলহপরায়ণ কলহপরায়ণা কলহপ্রিয় কলহপ্রিয়া কলহবিবাদ কলহমুখর কলহরত কলহরতা কলহসংগঠক কলয়েড কলয়েডীয় কশ কুশ কৃশ কুশুই কশুক কৃশকায় কশকশ কুশকুশ কশা কশাইখানা কশাইগিরি কশাইত কশাকশি কুশাগ্র কুশাগ্রীয় কুশাগ্রধী কুশাগ্রবুদ্ধি কশাঘাত কুশাঙ্কুর কৃশাঙ্গ কৃশাঙ্গী কুশাঙ্গুরী কুশাঙ্গুরীয় কশাত কশাতাম কশাতিস কশাতে কশাতেন কশাতেম কশাতুম কুশাদা কুশাদাকরা কুশাদি কশান কুশান কৃশানু কশানো কশাব কশাবার কশাবি কশাবে কশাবেন কশাবো কুশার কুশারি কশাল কুশাল কশালাম কশালি কশালে কশালেন কশালেম কশালুম কশাস কুশাসক কুশাসিত কুশাস্ত্র কুশাসন কশাহত কশাড় কশি কুশি কুশিক্ষা কুশিক্ষাপ্রাপ্ত কশিত কশিতাম কশিতিস কশিতে কশিতেছ কশিতেছি কশিতেছিল কশিতেছিলাম কশিতেছিলি কশিতেছিলে কশিতেছিলেন কশিতেছিস কশিতেছে কশিতেছেন কশিতেন কশিদা কশিব কশিবার কশিবি কশিবে কশিবেন কশিল কশিলাম কশিলি কশিলে কশিলেন কুশিশ কুশিশকরা কশিয়া কশিয়াছ কশিয়াছি কশিয়াছিল কশিয়াছিলাম কশিয়াছিলি কশিয়াছিলে কশিয়াছিলেন কশিয়াছিস কশিয়াছে কশিয়াছেন কুশিয়ারা কুশিয়ারি কশিয়ে কশিয়েছ কশিয়েছি কশিয়েছিল কশিয়েছিলাম কশিয়েছিলি কশিয়েছিলে কশিয়েছিলেন কশিয়েছিলেম কশিয়েছিলুম কশিয়েছিস কশিয়েছে কশিয়েছেন কশিয়ো কুশী কুশীলব কশে কশেছ কশেছি কশেছিল কশেছিলাম কশেছিলি কশেছিলে কশেছিলেন কশেছিলেম কশেছিলুম কশেছিস কশেছে কশেছেন কশেন কশেরু কশেরুক কশেরুকা কুশেশ কুশেশকরা কুশেশয় কৃশোদর কৃশোদরী কশ্যপ কশ্যপনন্দন কশ্যপপত্নী কশ্যপমুনি কুশণ্ডিকা কৃশতা কুশতৃণ কুশন কুশনির্মিত কুশপুত্তলি কুশপুত্তলিকা কুশপুত্তলিকাদাহ কুশপুত্তলিদাহ কুশপুত্তলী কুশপুত্তলীদাহ কশফ কশব কশবি কশবী কশবীপনা কশুর কুশর কৃশর কৃশরান্ন কুশ্রী কুশ্রীতা কুশল কুশূল কুশলগড় কুশলা কুশলী কুশলযুক্ত কুশলতা কুশলতাসম্পন্ন কুশলনগর কুশলসংবাদ কষ কৃষ ক্ষই ক্ষইছ ক্ষইছি ক্ষইছিস ক্ষইছে ক্ষইছেন ক্ষইত ক্ষইতাম ক্ষইতিস ক্ষইতে ক্ষইতেছ ক্ষইতেছি ক্ষইতেছিল ক্ষইতেছিলাম ক্ষইতেছিলি ক্ষইতেছিলে ক্ষইতেছিলেন ক্ষইতেছিলেম ক্ষইতেছিলুম ক্ষইতেছিস ক্ষইতেছে ক্ষইতেছেন ক্ষইতেন ক্ষইতেম ক্ষইতুম ক্ষইব ক্ষইবার ক্ষইবি ক্ষইবে ক্ষইবেন ক্ষইবো ক্ষইল ক্ষইলাম ক্ষইলি ক্ষইলে ক্ষইলেন ক্ষইলেম ক্ষইলুম ক্ষইস ক্ষইয়া ক্ষইয়াক্ষইয়া ক্ষইয়াছ ক্ষইয়াছি ক্ষইয়াছিল ক্ষইয়াছিলাম ক্ষইয়াছিলি ক্ষইয়াছিলে ক্ষইয়াছিলেন ক্ষইয়াছিস ক্ষইয়াছে ক্ষইয়াছেন ক্ষইয়ো ক্ষউক ক্ষউন ক্ষও ক্ষওয়া ক্ষওয়ান ক্ষওয়ানো কৃষক কৃষকগোষ্ঠী কৃষকশ্রেণী কষকষ কষা কষাকষি কষাঘাত কষাটে কৃষাণ কৃষাণু কৃষাণি কৃষাণী ক্ষাত্র ক্ষাত্রধর্ম ক্ষাত্রবল ক্ষাত্রশক্তি কষান কষানি কষানো ক্ষান্ত ক্ষান্তি ক্ষান্তদেওয়া কষার ক্ষার ক্ষারক ক্ষারিত ক্ষারী ক্ষারীয় ক্ষারীয়লবণ ক্ষারজল ক্ষারযুক্ত ক্ষারযৌগ ক্ষারধাতু ক্ষারধর্মী ক্ষারপানি ক্ষারভূমি ক্ষারমাটি ক্ষারমিতি ক্ষারমিশ্রিত ক্ষারমৃত্তিকা ক্ষারময় ক্ষাররস ক্ষারলবণ ক্ষারশ্রেণী ক্ষারসহযোগ ক্ষালিত ক্ষালন কষায় কষায়িত কষি কৃষি কৃষিঋণ কৃষিকা কৃষিকাজ কৃষিকার্য কৃষিকার্যাদি কৃষিকর্ম কৃষিক্ষেত্র কৃষিজ কৃষিজাত কৃষিজীবী কৃষিজনিত কৃষিজমি কষিত কষিতাম ক্ষিতি ক্ষিতিজ ক্ষিতিজতল ক্ষিতিতল ক্ষিতিধর ক্ষিতিনাথ ক্ষিতিপ ক্ষিতিপাল ক্ষিতিপতি ক্ষিতিভৃৎ কষিতিস ক্ষিতিসৌরভ ক্ষিতীশ ক্ষিতীশ্বর কষিতে কষিতেছ কষিতেছি কষিতেছিল কষিতেছিলাম কষিতেছিলি কষিতেছিলে কষিতেছিলেন কষিতেছিস কষিতেছে কষিতেছেন কষিতেন কৃষিতত্ত্ব ক্ষিদিরপুর ক্ষিদ্যমান কৃষিদ্রব্য কৃষিনির্ভর ক্ষিপ্যমাণ কৃষিপণ্য ক্ষিপ্ত ক্ষিপ্তা ক্ষিপ্ততা ক্ষিপ্তভাবে কৃষিপদ্ধতি ক্ষিপ্র ক্ষিপ্রকারিতা ক্ষিপ্রকারী কৃষিপ্রকল্প ক্ষিপ্রগামিনী ক্ষিপ্রগামী ক্ষিপ্রগতি কৃষিপ্রযুক্তি ক্ষিপ্রতাযুক্ত ক্ষিপ্রতাসম্পন্ন ক্ষিপ্রহস্ত কষিব কৃষিবাণিজ্য কষিবার কষিবি কৃষিবিজ্ঞান কৃষিবিজ্ঞানী কৃষিবিদ কৃষিবিদ্যা কৃষিবিস্তার কষিবে কষিবেন কৃষিব্যবস্থা কৃষিভিত্তিক কৃষিভূমি কৃষিমন্ত্রী ক্ষিরশেপাতি কষিল কষিলাম কষিলি কৃষিলীগ কষিলে কষিলেন কৃষিশিক্ষা কৃষিশস্য কৃষিসংস্কার কৃষিসম্পদ কষিয়া কষিয়াছ কষিয়াছি কষিয়াছিল কষিয়াছিলাম কষিয়াছিলি কষিয়াছিলে কষিয়াছিলেন কষিয়াছিস কষিয়াছে কষিয়াছেন কষিয়ো ক্ষচ্ছিল ক্ষচ্ছিলাম ক্ষচ্ছিলি ক্ষচ্ছিলে ক্ষচ্ছিলেন ক্ষচ্ছিলেম ক্ষচ্ছিলুম ক্ষীণ ক্ষীণকার ক্ষীণকায় ক্ষীণকটি ক্ষীণক্রম ক্ষীণা ক্ষীণালোক ক্ষীণায়ু ক্ষীণচন্দ্র ক্ষীণজীবী ক্ষীণতা ক্ষীণতাপ্রাপ্ত ক্ষীণতোয়া ক্ষীণতনু ক্ষীণতম ক্ষীণতর ক্ষীণদেহ ক্ষীণদৃষ্টি ক্ষীণভাবে ক্ষীণমধ্য ক্ষীণমধ্যা ক্ষীণশক্তি ক্ষীণশ্বাস কুষীদ কুষীদজীবী কুষীদব্যবহার কৃষীবল ক্ষীর ক্ষীরই ক্ষীরা ক্ষীরাই ক্ষীরাব্ধি ক্ষীরাব্ধিজ ক্ষীরাব্ধিতনয়া ক্ষীরিকা ক্ষীরোদ ক্ষীরোদতনয়া ক্ষীরোদনন্দন ক্ষীরোদপ্রভা ক্ষীরোদসমুদ্র ক্ষীরপাই ক্ষীরপুলি ক্ষীরমোহন ক্ষীরশাপাত ক্ষীরশাপাতি ক্ষীরশেপাতি ক্ষীরসাগর ক্ষীরসমুদ্র ক্ষীয়মাণ কষে ক্ষেইপা ক্ষেউরি কষেছ কষেছি কষেছিল কষেছিলাম কষেছিলি কষেছিলে কষেছিলেন কষেছিলেম কষেছিলুম কষেছিস কষেছে কষেছেন ক্ষেত ক্ষেতখামার ক্ষেতখোলা ক্ষেতি ক্ষেতপাপড়া ক্ষেত্র ক্ষেত্রকর্ম ক্ষেত্রাকার ক্ষেত্রাজীব ক্ষেত্রাদি ক্ষেত্রাধিকারী ক্ষেত্রানুসন্ধান ক্ষেত্রিক ক্ষেত্রী ক্ষেত্রজ ক্ষেত্রজাত ক্ষেত্রজ্ঞ ক্ষেত্রতত্ত্ব ক্ষেত্রপাল ক্ষেত্রপতি ক্ষেত্রফল ক্ষেত্রব্যাপী ক্ষেত্রমান ক্ষেত্রমিতি ক্ষেত্রস্থল ক্ষেতলাল ক্ষেদ কষেন ক্ষেপ ক্ষেপক ক্ষেপা ক্ষেপান ক্ষেপানো ক্ষেপামি ক্ষেপী ক্ষেপণ ক্ষেপণকারী ক্ষেপণাস্ত্র ক্ষেপণি ক্ষেপণিক ক্ষেপণী ক্ষেপণীয় ক্ষেপণযোগ্য ক্ষেপণরকেট ক্ষেপ্তা ক্ষেপলা ক্ষেম ক্ষেমঙ্কর ক্ষেমঙ্করী ক্ষেমা ক্ষেমদর্শী ক্ষেমবান ক্ষেমবৎ ক্ষেসসাপাত ক্ষৈরেয় কষো ক্ষোণি ক্ষোণী ক্ষোদ ক্ষোদিত ক্ষোদন ক্ষোভ ক্ষোভকারী ক্ষোভিত ক্ষোভযুক্ত ক্ষোভদায়ক ক্ষোভহীন ক্ষোভহীনতা কষছ কষছি কষছিল কষছিলাম কষছিলি কষছিলে কষছিলেন কষছিলেম কষছিলুম কষছিস কষছে কষছেন ক্ষৌণি ক্ষৌণী ক্ষৌণীশ ক্ষৌদ্র ক্ষৌদ্রজ ক্ষৌম ক্ষৌর ক্ষৌরকার ক্ষৌরকার্য ক্ষৌরকর্ম ক্ষৌরিক ক্ষৌরী ক্ষৌরমসৃণ কষ্ট কৃষ্ট কষযুক্ত কষ্টকর কষ্টক্লিষ্ট কষ্টকল্পিত কষ্টকল্পনা কষ্টঘুচেছে কষ্টঘোচা ক্ষ্যাপা ক্ষ্যাপামি কষ্টার্জিত কষ্টি কৃষ্টি কষ্টিপাথর কৃষ্টিসম্পন্ন কুষ্টিয়া কষ্টেসৃষ্টে কষ্টজীবী কষ্টদান কষ্টদায়ক কষ্টদায়ী কষ্টপূর্ণ কষ্টবোধ কষ্টভোগ কষ্টলভ্য কষ্টসাধ্য কষ্টস্বীকার কষ্টসহ কষ্টসহিষ্ণু কষ্টহীন কষ্টহেতু কুষ্ঠ কুষ্ঠঘ্ন কুষ্ঠাদি কুষ্ঠাশ্রম কুষ্ঠি কুষ্ঠিকাটা কুষ্ঠী কুষ্ঠরোগ কুষ্ঠরোগগ্রস্ত কুষ্ঠরোগাক্রান্ত কুষ্ঠরোগী কুষ্ঠরোগবিনাশক কষণ কৃষ্ণ ক্ষণ কৃষ্ণকান্ত ক্ষণকাল কৃষ্ণকায় কৃষ্ণকীর্তন কৃষ্ণকেলি কৃষ্ণকণ্ঠ কৃষ্ণকুমারী কৃষ্ণকলি কৃষ্ণকৃষ্ণ কৃষ্ণগহ্বর কৃষ্ণা কৃষ্ণাগুরু কৃষ্ণাঙ্গ কৃষ্ণাচতুর্দশী কৃষ্ণাজিন কৃষ্ণাপাদ কৃষ্ণাভ কৃষ্ণার্জুন কৃষ্ণাষ্টমী ক্ষণিক ক্ষণিকা ক্ষণিকতা কৃষ্ণচ্ছদ কৃষ্ণচতুর্থী কৃষ্ণচতুর্দশী কৃষ্ণচন্দন কৃষ্ণচন্দ্র ক্ষণচর কৃষ্ণচরিত্র কৃষ্ণচূড়া ক্ষণে ক্ষণেক ক্ষণেক্ষণে কৃষ্ণেরজীব ক্ষণজীবী ক্ষণজন্মা কৃষ্ণজলদজাল কৃষ্ণযাত্রা ক্ষুণ্ণ ক্ষুণ্ণমনা কৃষ্ণতা কৃষ্ণতিথি কৃষ্ণতিল ক্ষণদা কৃষ্ণদাস ক্ষণদ্যুতি কৃষ্ণদ্বীপ কৃষ্ণদ্বৈপায়ন কৃষ্ণদয়াল কৃষ্ণধন কৃষ্ণনগর কৃষ্ণনাথ কৃষ্ণনীল কৃষ্ণপক্ষ কৃষ্ণপক্ষীয় কৃষ্ণপঞ্চমী কৃষ্ণপুর কৃষ্ণপ্রাপ্তি ক্ষণপূর্ব ক্ষণপ্রভা ক্ষণবিধ্বংসী কৃষ্ণবিবর কৃষ্ণবর্ণ কৃষ্ণবর্ণা কৃষ্ণবর্ত্মা কৃষ্ণবল্লভ কৃষ্ণবস্তু কৃষ্ণভক্ত ক্ষণভঙ্গুর ক্ষণমাত্র কৃষ্ণমোহন কৃষ্ণমূর্তি কৃষ্ণরাত্রি কৃষ্ণরূপী কৃষ্ণলীলা কৃষ্ণলোহিত কৃষ্ণশার কৃষ্ণশিলা কৃষ্ণসখা কৃষ্ণসাগর কৃষ্ণসার কৃষ্ণসারথি কৃষ্ণসীস ক্ষণস্থায়ী কৃষ্ণস্নেহ কৃষ্ণসর্প কষত ক্ষত ক্ষুত ক্ষুৎ ক্ষুতকাতর ক্ষুৎকাতর ক্ষুৎকাম ক্ষতাদি কষতাম ক্ষতাশৌচ ক্ষতি ক্ষতিকারক ক্ষতিকর ক্ষতিগ্রস্ত ক্ষতিজনক ক্ষতিযুক্ত ক্ষতিপূরণ ক্ষতিপূরণবাবদ ক্ষতিবিহীন ক্ষতিবৃদ্ধি কষতিস ক্ষতিসাধন ক্ষতচিহ্ন কষতে কষতেন কষতেম ক্ষতজনিত ক্ষত্তা ক্ষুতপিপাসা ক্ষুৎপিপাসা ক্ষুতপীড়িত ক্ষুৎপীড়িত ক্ষতবিক্ষত কষতুম ক্ষত্র ক্ষত্রকর্ম ক্ষত্রিয় ক্ষত্রিয়কুল ক্ষত্রিয়া ক্ষত্রিয়াণী ক্ষত্রিয়ী ক্ষত্রিয়োচিত ক্ষত্রিয়জাতি ক্ষত্রিয়জাতীয়া ক্ষত্রিয়ত্ব ক্ষত্রিয়বর্ণ ক্ষত্রিয়সমাজ ক্ষত্রিয়হীন ক্ষত্রী ক্ষতরোগ ক্ষত্রোচিত ক্ষত্রতেজ ক্ষত্রধর্ম ক্ষত্রপ ক্ষত্রবিদ্যা ক্ষত্রবন্ধু ক্ষতস্থান ক্ষতহীন ক্ষুদ কষদাঁত ক্ষুদি ক্ষুদিরাম ক্ষুদে ক্ষুদমাগা ক্ষুদ্র ক্ষুদ্রঋণ ক্ষুদ্রক ক্ষুদ্রকায় ক্ষুদ্রা ক্ষুদ্রাংশ ক্ষুদ্রাকার ক্ষুদ্রাকৃতি ক্ষুদ্রাতিক্ষুদ্র ক্ষুদ্রাত্মক ক্ষুদ্রাদপিক্ষুদ্র ক্ষুদ্রান্ত্র ক্ষুদ্রার্থক ক্ষুদ্রার্থে ক্ষুদ্রাশয় ক্ষুদ্রায়তন ক্ষুদ্রচেতা ক্ষুদ্রজীব ক্ষুদ্রতা ক্ষুদ্রত্ব ক্ষুদ্রতম ক্ষুদ্রতমা ক্ষুদ্রতর ক্ষুদ্রতরঙ্গ ক্ষুদ্রপ্রাণ ক্ষুদ্রবিবর ক্ষুদ্রবীজ ক্ষুদ্রমতি ক্ষুদ্রমনা ক্ষুদ্রশক্তি ক্ষুদ্রশিল্প ক্ষুধ ক্ষুধা ক্ষুধাআকাঙ্ক্ষা ক্ষুধাজনক ক্ষুধাযুক্ত ক্ষুধাতুর ক্ষুধাতুরা ক্ষুধাতৃষ্ণা ক্ষুধানিবৃত্তি ক্ষুধান্বিত ক্ষুধাবোধ ক্ষুধাবৃদ্ধি ক্ষুধামান্দ্য ক্ষুধামন্দা ক্ষুধার্ত ক্ষুধাশান্তি ক্ষুধাসঞ্চার ক্ষুধিত ক্ষুধিতা ক্ষুধিতপাষাণ কষন কষুন ক্ষন্তব্য ক্ষুন্নিবারণ ক্ষুন্নিবৃত্তি ক্ষনশ্বর ক্ষুপ ক্ষপা ক্ষপাচর ক্ষপাট ক্ষপণক ক্ষপণী কষব কষবার কষবি কষবে ক্ষবে কষবেন ক্ষবেন কষবো ক্ষুব্ধ ক্ষুব্ধা ক্ষুভিত ক্ষুভিতা কুষম ক্ষম ক্ষমা ক্ষুমা ক্ষমাকারী ক্ষমাকরা ক্ষমাগুণ ক্ষমাঘেন্না কুষ্মাণ্ড কূষ্মাণ্ড কুষ্মাণ্ডখণ্ড কুষ্মাণ্ডলতা ক্ষমাদেওয়া ক্ষমাধর্ম ক্ষমানো ক্ষমাপ্রার্থনা ক্ষমাবান ক্ষমাবতী ক্ষমাভিক্ষা ক্ষমার্হ ক্ষমাশীল ক্ষমাহীন ক্ষমাহীনতা ক্ষমী ক্ষম্য ক্ষমতা ক্ষমতাচালানো ক্ষমতাচ্যুত ক্ষমতাযুক্ত ক্ষমতাধারী ক্ষমতাধর ক্ষমতানুযায়ী ক্ষমতানুসারে ক্ষমতাপ্রাপ্ত ক্ষমতাবান ক্ষমতাবতী ক্ষমতাবল ক্ষমতাশালিনী ক্ষমতাশালী ক্ষমতাশীল ক্ষমতাসীন ক্ষমতাসম্পন্ন ক্ষমতাহীন ক্ষর ক্ষুর ক্ষুরকর্ম ক্ষুরক্ষুণ্ণ ক্ষুরা ক্ষরানো ক্ষরিত ক্ষরী ক্ষুরী ক্ষুরযুক্ত ক্ষরণ ক্ষরণকারী ক্ষরণপদার্থ ক্ষরণশীল ক্ষরণহীন ক্ষুরধার ক্ষরনাশ কষল কষলাম কষলি কষলে কষলেন কষলেম কষলুম ক্ষুল্ল ক্ষুল্লতাত ক্ষয় ক্ষয়কারী ক্ষয়কাশ ক্ষয়কাশি ক্ষয়করা ক্ষয়ক্ষতি ক্ষয়ক্ষরিত ক্ষয়ঙ্কর ক্ষয়া ক্ষুয়া ক্ষয়াক্ষয়া ক্ষয়ান ক্ষয়ানো ক্ষয়িত ক্ষয়িতা ক্ষয়িষ্ণু ক্ষয়িষ্ণুতা ক্ষয়ী ক্ষয়ে ক্ষয়েছ ক্ষয়েছি ক্ষয়েছিল ক্ষয়েছিলাম ক্ষয়েছিলি ক্ষয়েছিলে ক্ষয়েছিলেন ক্ষয়েছিলেম ক্ষয়েছিলুম ক্ষয়েছিস ক্ষয়েছে ক্ষয়েছেন ক্ষয়জাত ক্ষয়তা ক্ষয়পাওয়া ক্ষয়প্রাপ্ত ক্ষয়প্রাপ্তি ক্ষয়বাক্স ক্ষয়রোগ ক্ষয়শীল ক্ষয়শীলতা ক্ষয়হীন কস কুসংস্কার কুসংস্কারাচ্ছন্ন কুসংস্কারাপন্ন কুসংস্কারাবিষ্ট কুসংসর্গ কুসংসর্গী কুসংসর্গজনিত কুসঙ্গ কুসঙ্গী কসা কসাই কসাইখানা কসাইগিরি কসাইটুলী কসামাজা কুসার কসাল কসাড় কসি কুসিকাঁটা কুসিম্বী কুসী কুসীদ কসীদা কুসীদজীবী কুসীদব্যবহার কুসীদবৃত্তি কসেরু কসেল্লা কস্য কস্টা কস্টিউম কস্টলি কস্ত কস্তা কস্তাকস্তি কস্তাপাড় কস্তাপেড়ে কুস্তি কুস্তিগির কুস্তিগিরি কুস্তিবাজ কুস্তী কুস্তীগির কুস্তীবাজ কস্তুর কস্তূর কস্তূরিকা কস্তূরী কস্তূরীমৃগ কুস্থান কুসন্তান কসব কসবা কসবি কুস্বপ্ন কসবপনা কুস্বভাব কুস্বভাবা কসম কুসম কুসুম কুসুমকানন কুসুমকোমল কুসুমকোরক কুসুমকুন্তলা কুসুমকুমারী কুসুমকলি কুসুমকলিকা কুসুমকুসুম কসমখাওয়া কুসুমগরম কুসুমাকর কসমাকসমি কুসুমাগম কুসুমাঞ্জলি কুসুমাদপি কুসুমাবৃত কুসুমাস্তীর্ণ কুসুমাস্তরণ কুসুমাসব কসমিক কুসুমিত কুসুমিতা কস্মিনকালে কসমোপলিটান কসমোলজি কসমোলজিক্যাল কসমোলজিস্ট কুসুমতরু কুসুমদাম কুসুমধনু কুসুমপেলব কুসুমপুর কুসুমফুল কুসুম্ব কুসুম্বরাগ কুসুম্ভ কুসুম্ভা কুসুম্ভী কুসুম্ভরাগ কুসুমমালা কুসুমমালিকা কুসুমময় কুসুমশয্যা কুসুমশয়ন কসমস কুসুমসাগর কুসুমস্তবক কসময়েড কসর কসুর কসরত কসুরনাই কসলত কহ কহু কুহ কুহু কুহূ কহুক কুহক কুহকিনী কুহকী কুহকজাল কুহকজীবী কুহুকণ্ঠ কুহূকণ্ঠ কহা কুহা কূহা কহাই কহাইও কহাইত কহাইতাম কহাইতিস কহাইতে কহাইতেছ কহাইতেছি কহাইতেছিল কহাইতেছিলাম কহাইতেছিলি কহাইতেছিলে কহাইতেছিলেন কহাইতেছিস কহাইতেছে কহাইতেছেন কহাইতেন কহাইব কহাইবার কহাইবি কহাইবে কহাইবেন কহাইল কহাইলাম কহাইলি কহাইলে কহাইলেন কহাইয়া কহাইয়াছ কহাইয়াছি কহাইয়াছিল কহাইয়াছিলাম কহাইয়াছিলি কহাইয়াছিলে কহাইয়াছিলেন কহাইয়াছিস কহাইয়াছে কহাইয়াছেন কহাইয়ো কহাও কহাক কহান কহানো কহাস কহায় কহায়সি কহি কহিঁ কহিও কহিত কহিতাম কহিতিস কহিতে কহিতেছ কহিতেছি কহিতেছিল কহিতেছিলাম কহিতেছিলি কহিতেছিলে কহিতেছিলেন কহিতেছিস কহিতেছে কহিতেছেন কহিতেন কহিতুর কহিনু কহিনী কুহিনূর কহিব কহিবার কহিবি কহিবে কহিবেন কহির কহিল কহিলাম কহিলি কহিলে কহিলেন কহিস কহিয়া কহিয়াছ কহিয়াছি কহিয়াছিল কহিয়াছিলাম কহিয়াছিলি কহিয়াছিলে কহিয়াছিলেন কহিয়াছিস কহিয়াছে কহিয়াছেন কহিয়ে কহিয়ো কহী কহে কহেন কুহেলি কুহেলিকা কুহেলী কহো কহোঁ কুহোর কহত কুহুতান কুহূতান কহতব্য কুহতুর কুহুধ্বনি কহন কহুন কহনীয় কহন্তি কহব কহবি কহর কুহর কুহরা কুহরিত কুহরিল কুহরণ কুহুরব কুহূরব কুহরয় কহলু কহলুঁ কহ্লার কহলবি কহলম কহসি কহহি কহুয়া কড় কুড় কড়ই কড়ুইরাঁড়ি কড়ক কুড়ক কড়কা কড়কাইতেছেন কড়কাইতেন কড়কাইব কড়কাইবার কড়কাইবি কড়কাইবে কড়কাইবেন কড়কাইল কড়কাইলাম কড়কাইলি কড়কাইলে কড়কাইলেন কড়কাইয়া কড়কাইয়াছ কড়কাইয়াছি কড়কাইয়াছিল কড়কাইয়াছিলাম কড়কাইয়াছিলি কড়কাইয়াছিলে কড়কাইয়াছিলেন কড়কাইয়াছিস কড়কাইয়াছে কড়কাইয়াছেন কড়কাইয়ো কড়কাও কড়কাক কড়কাচ্ছ কড়কাচ্ছি কড়কাচ্ছিল কড়কাচ্ছিলাম কড়কাচ্ছিলি কড়কাচ্ছিলে কড়কাচ্ছিলেন কড়কাচ্ছিলেম কড়কাচ্ছিলুম কড়কাচ্ছিস কড়কাচ্ছে কড়কাচ্ছেন কড়কাত কড়কাতাম কড়কাতিস কড়কাতে কড়কাতেন কড়কাতেম কড়কাতুম কড়কান কড়কানো কড়কাব কড়কাবার কড়কাবি কড়কাবে কড়কাবেন কড়কাবো কড়কাল কড়কালাম কড়কালি কড়কালে কড়কালেন কড়কালেম কড়কালুম কড়কাস কড়কায় কড়কচ কড়কে কড়কেছ কড়কেছি কড়কেছিল কড়কেছিলাম কড়কেছিলি কড়কেছিলে কড়কেছিলেন কড়কেছিলেম কড়কেছিলুম কড়কেছিস কড়কেছে কড়কেছেন কড়কো কড়কড় কুড়কুড় কড়কড়া কড়কড়ানি কড়কড়ি কড়কড়িয়া কড়খানো কড়ঙ্ক কড়ঙ্কস্য কড়ঙ্গ কড়া কুড়া কুঁড়া কড়াই কুড়াইও কুড়াইত কুড়াইতাম কুড়াইতিস কুড়াইতে কুড়াইতেছ কুড়াইতেছি কুড়াইতেছিল কুড়াইতেছিলাম কুড়াইতেছিলি কুড়াইতেছিলে কুড়াইতেছিলেন কুড়াইতেছিস কুড়াইতেছে কুড়াইতেছেন কুড়াইতেন কুড়াইব কুড়াইবার কুড়াইবি কুড়াইবে কুড়াইবেন কড়াইভাজা কুড়াইল কুড়াইলাম কুড়াইলি কুড়াইলে কুড়াইলেন কড়াইশুঁটি কুড়াইয়া কুড়াইয়াছ কুড়াইয়াছি কুড়াইয়াছিল কুড়াইয়াছিলাম কুড়াইয়াছিলি কুড়াইয়াছিলে কুড়াইয়াছিলেন কুড়াইয়াছিস কুড়াইয়াছে কুড়াইয়াছেন কড়াইয়ে কড়াইয়ের কুড়াইয়ো কুড়াও কুড়াক কড়াক্কড় কড়াক্কড়ি কড়াকিয়া কড়াক্রান্তি কড়াকড়ি কুঁড়াজালি কড়াযুক্ত কড়াত কুড়ান কুড়ানি কুড়ানো কড়াপাক কড়াপড়া কড়াভাবে কড়ার কড়ারহীন কুড়াল কুড়ালি কুড়াস কুড়ায় কড়ায়গণ্ডায় কুড়ায়েছি কড়ি কুড়ি কুঁড়ি কড়িআলা কড়িওয়ালা কড়িকাঠ কড়িকপালে কুড়িগ্রাম কড়িচালা কুঁড়িযুক্ত কড়িবরগা কড়িবর্গা কড়িমধ্যম কড়িহীন কড়িয়া কুঁড়িয়া কড়িয়াল কড়িয়ালি কুড়িয়ে কুড়িয়েছ কুড়িয়েছি কুড়িয়েছিল কুড়িয়েছিলাম কুড়িয়েছিলি কুড়িয়েছিলে কুড়িয়েছিলেন কুড়িয়েছিলেম কুড়িয়েছিলুম কুড়িয়েছিস কুড়িয়েছে কুড়িয়েছেন কুড়িয়ো কড়চা কুড়চি কুড়চ্ছ কুড়চ্ছি কুড়চ্ছিল কুড়চ্ছিলাম কুড়চ্ছিলি কুড়চ্ছিলে কুড়চ্ছিলেন কুড়চ্ছিলেম কুড়চ্ছিলুম কুড়চ্ছিস কুড়চ্ছে কুড়চ্ছেন কড়ে কুড়ে কুঁড়ে কুঁড়েঘর কুড়েমুখ কুড়েমি কুঁড়েমি কড়েরাঁড় কড়েরাঁড়ি কুড়ো কুঁড়ো কুঁড়োজালি কুড়োবা কড়ছ কড়ছি কুড়ত কড়তা কুড়তাম কুড়তিস কুড়তে কুড়তেন কুড়তেম কুড়তুম কুড়ন কুড়ুনি কুড়নো কুড়ব কুড়বা কুড়বার কুড়বি কুড়বে কুড়বেন কুড়বো কড়মা কুড়ুমতাল কড়ম্ব কড়মড় কুড়মুড় কড়মড়ানি কড়মড়ানো কড়মড়ি কুড়ুরমুড়ুর কুড়ল কুড়ুল কুড়লাম কুড়লি কুড়লে কুড়লেন কুড়লেম কুড়লুম কড়সি কুড়য় কড়ুয়া কড়য়ি কয় কয়কটি কুয়া কুয়াকাটা কয়াধু কয়াধূ কুয়ার কয়াল কুয়ালালামপুর কয়ালি কুয়াশা কুয়াশিয়া কুয়াসা কয়ে কয়েক কয়েকখণ্ড কয়েকগুণ কয়েকজন কয়েকজনমাত্র কয়েকটিমাত্র কয়েকদিন কয়েকধরণ কয়েকপ্রকার কয়েকফুট কয়েকবার কয়েকবছর কয়েকমাস কয়েকম্যাচ কয়েকশ কয়েকশো কয়েকশত কয়েছ কয়েছি কয়েছিল কয়েছিলাম কয়েছিলি কয়েছিলে কয়েছিলেন কয়েছিলেম কয়েছিলুম কয়েছিস কয়েছে কয়েছেন কুয়েট কুয়েত কুয়েতি কয়েতবেল কয়েৎবেল কয়েদ কয়েদখানা কয়েদি কয়েদিরছুটি কয়েদী কয়েন কুয়ো কয়োটি কয়জন কয়টা কয়টি কয়তলা কয়দিন কয়পার কয়বার কয়মাস কয়লা কয়লাকুঠি কয়লাকর কয়লাখনি কয়লাদি কয়ড়া".split(" "),
              w_kh: "খ খং খংগ খুংগি খুংগিপুঁথি খই খইচাল খইচালা খইচুর খইচড়া খইছড়া খইঢেকুর খইনি খইফোটা খইফুটা খইভরতি খইমুড়ি খইরঙা খইল খুইলা খইলান খইয়া খইয়ে খুইয়ে খুইয়েছ খুইয়েছি খুইয়েছিল খুইয়েছিলাম খুইয়েছিলি খুইয়েছিলে খুইয়েছিলেন খুইয়েছিলেম খুইয়েছিলুম খুইয়েছিস খুইয়েছে খুইয়েছেন খুইয়ো খওফ খওয়া খওয়ান খওয়ানো খক খুক খুকু খকখক খুকখুক খকখকানি খুকখুকানি খুকি খুকিপনা খুকী খুকীপনা খুকুমণি খকর খুকরি খুকরী খগ খগান্তক খগাবগা খগী খগেন্দ্র খগেশ্বর খগোল খগোলবিদ্যা খগুণ খগপতি খগবর খগম খগমণি খগরাজ খগস্থান খঙ্গ খঙ্গাইবে খুঙ্গি খুঙ্গিপুঁথি খুঙ্গী খুঙ্গীপুঁথি খুঙি খুঙিপুঁথি খা খাঁ খাই খাঁই খাইও খাইখাই খাইখালাসি খাইখরচ খাইখরচা খাইছি খাইছে খাইত খাইতাম খাইতিস খাইতে খাইতেছ খাইতেছি খাইতেছিল খাইতেছিলাম খাইতেছিলি খাইতেছিলে খাইতেছিলেন খাইতেছিস খাইতেছে খাইতেছেন খাইতেন খাইদ খাইনি খাইব খাইবা খাইবার খাইবি খাইবে খাইবেন খাইল খাইলা খাইলাম খাইলি খাইলে খাইলেন খাইশ খাইয়া খাইয়াছ খাইয়াছি খাইয়াছিল খাইয়াছিলাম খাইয়াছিলি খাইয়াছিলে খাইয়াছিলেন খাইয়াছিস খাইয়াছে খাইয়াছেন খাইয়ে খাইয়েছ খাইয়েছি খাইয়েছিল খাইয়েছিলাম খাইয়েছিলি খাইয়েছিলে খাইয়েছিলেন খাইয়েছিলেম খাইয়েছিলুম খাইয়েছিস খাইয়েছে খাইয়েছেন খাইয়ো খাও খাওগে খাওন খাওয়া খাওয়াই খাওয়াইও খাওয়াইত খাওয়াইতাম খাওয়াইতিস খাওয়াইতে খাওয়াইতেছ খাওয়াইতেছি খাওয়াইতেছিল খাওয়াইতেছিলাম খাওয়াইতেছিলি খাওয়াইতেছিলে খাওয়াইতেছিলেন খাওয়াইতেছিস খাওয়াইতেছে খাওয়াইতেছেন খাওয়াইতেন খাওয়াইব খাওয়াইবার খাওয়াইবি খাওয়াইবে খাওয়াইবেন খাওয়াইল খাওয়াইলাম খাওয়াইলি খাওয়াইলে খাওয়াইলেন খাওয়াইয়া খাওয়াইয়াছ খাওয়াইয়াছি খাওয়াইয়াছিল খাওয়াইয়াছিলাম খাওয়াইয়াছিলি খাওয়াইয়াছিলে খাওয়াইয়াছিলেন খাওয়াইয়াছিস খাওয়াইয়াছে খাওয়াইয়াছেন খাওয়াইয়ো খাওয়াও খাওয়াক খাওয়াচ্ছ খাওয়াচ্ছি খাওয়াচ্ছিল খাওয়াচ্ছিলাম খাওয়াচ্ছিলি খাওয়াচ্ছিলে খাওয়াচ্ছিলেন খাওয়াচ্ছিলেম খাওয়াচ্ছিলুম খাওয়াচ্ছিস খাওয়াচ্ছে খাওয়াচ্ছেন খাওয়াত খাওয়াতাম খাওয়াতিনে খাওয়াতিস খাওয়াতে খাওয়াতেন খাওয়াতেম খাওয়াতুম খাওয়াদাওয়া খাওয়ান খাওয়ানো খাওয়াপরা খাওয়াব খাওয়াবার খাওয়াবি খাওয়াবে খাওয়াবেন খাওয়াবো খাওয়ার খাওয়াল খাওয়ালাম খাওয়ালি খাওয়ালে খাওয়ালেন খাওয়ালেম খাওয়ালুম খাওয়াস খাওয়ায় খাক খাকান খাকার খাঁকার খাঁকারি খাকি খাকিনী খাকী খাকছার খাকতি খাক্তি খাঁকতি খাকদর খাকদরখাক খাকসার খাকড়ানো খাঁকড়ানো খাকড়ি খাঁকড়ি খাখ খাঁখাঁ খাগ খাগান খাগি খাগড়া খাগড়াছড়ি খাগড়াবাড়ি খাঙ্গরা খাঙ্গরামুখী খাঙ্গরামুখো খাঁচ খাঁচা খাঁচাছাড়া খাচ্চোর খাচ্ছ খাচ্ছি খাচ্ছিল খাচ্ছিলাম খাচ্ছিলি খাচ্ছিলে খাচ্ছিলেন খাচ্ছিলেম খাচ্ছিলুম খাচ্ছিস খাচ্ছে খাচ্ছেন খাচরা খাচড়া খাঁজ খাঁজকাটা খাজা খাজাখিজির খাজাখিযির খাজাগজা খাজাগরিব খাজাঞ্চি খাজাঞ্চিখানা খাজাঞ্চী খাজাঞ্চীখানা খাজানা খাজানাখানা খাজারি খাজিক খাঁজযুক্ত খাজনা খাজনাখানা খাজনাদি খাজুর খাজুরগুড় খাজুরে খাজুরেআলাপ খাজুরছড়া খাজুরছড়ি খাজুরমাথি খাজুররস খাঞ্চা খাঞ্চাপোষ খাঞ্জা খাঞ্জাখাঁ খাট খাটুক খাটকথা খাটা খাটাই খাটাইও খাটাইত খাটাইতাম খাটাইতিস খাটাইতে খাটাইতেছ খাটাইতেছি খাটাইতেছিল খাটাইতেছিলাম খাটাইতেছিলি খাটাইতেছিলে খাটাইতেছিলেন খাটাইতেছিস খাটাইতেছে খাটাইতেছেন খাটাইতেন খাটাইব খাটাইবার খাটাইবি খাটাইবে খাটাইবেন খাটাইল খাটাইলাম খাটাইলি খাটাইলে খাটাইলেন খাটাইয়া খাটাইয়াছ খাটাইয়াছি খাটাইয়াছিল খাটাইয়াছিলাম খাটাইয়াছিলি খাটাইয়াছিলে খাটাইয়াছিলেন খাটাইয়াছিস খাটাইয়াছে খাটাইয়াছেন খাটাইয়ো খাটাক খাটাখাটি খাটাচ্ছ খাটাচ্ছি খাটাচ্ছিল খাটাচ্ছিলাম খাটাচ্ছিলি খাটাচ্ছিলে খাটাচ্ছিলেন খাটাচ্ছিলেম খাটাচ্ছিলুম খাটাচ্ছিস খাটাচ্ছে খাটাচ্ছেন খাটাত খাটাতাম খাটাতিস খাটাতে খাটাতেন খাটাতেম খাটাতো খাটাতুম খাটান খাটানো খাটাব খাটাবার খাটাবি খাটাবে খাটাবেন খাটাবো খাটামিঠা খাটাল খাটালাম খাটালি খাটালে খাটালেন খাটালেম খাটালুম খাটাশ খাটাস খাটি খাঁটি খাটিত খাটিতাম খাটিতিস খাটিতে খাটিতেছ খাটিতেছি খাটিতেছিল খাটিতেছিলাম খাটিতেছিলি খাটিতেছিলে খাটিতেছিলেন খাটিতেছিস খাটিতেছে খাটিতেছেন খাটিতেন খাটিব খাটিবার খাটিবি খাটিবে খাটিবেন খাটিল খাটিলাম খাটিলি খাটিলে খাটিলেন খাটিস খাটিয়া খাটিয়াছ খাটিয়াছি খাটিয়াছিল খাটিয়াছিলাম খাটিয়াছিলি খাটিয়াছিলে খাটিয়াছিলেন খাটিয়াছিস খাটিয়াছে খাটিয়াছেন খাটিয়ে খাটিয়েছ খাটিয়েছি খাটিয়েছিল খাটিয়েছিলাম খাটিয়েছিলি খাটিয়েছিলে খাটিয়েছিলেন খাটিয়েছিলেম খাটিয়েছিলুম খাটিয়েছিস খাটিয়েছে খাটিয়েছেন খাটিয়ো খাঁটী খাটে খাটেন খাটো খাটোকথা খাটোদৃষ্টি খাটোনজর খাটছ খাটছি খাটছিল খাটছিলাম খাটছিলি খাটছিলে খাটছিলেন খাটছিলেম খাটছিলুম খাটছিস খাটছে খাটছেন খাট্টা খাট্টামিঠা খাটত খাটতাম খাটতিস খাটতে খাটতেছি খাটতেন খাটতেম খাটতুম খাটদৃষ্টি খাটুন খাযনা খাযনাখানা খাটনি খাটুনি খাটুনিয়া খাটুনী খাটুনে খাটনজর খাটুন্তে খাটব খাটবার খাটবি খাটবে খাটবেন খাটবো খাটল খাটলাম খাটলি খাটুলি খাটলে খাটলেন খাটলেম খাটলুম খাণ্ডা খাণ্ডার খাণ্ডারী খাণ্ডারনি খাণ্ডিক খাণ্ডব খাণ্ডবানল খাণ্ডবদাহ খাণ্ডবদাহন খাণ্ডবপ্রস্থ খাত খাতক খাতকি খাতকিকারবার খাতা খাতাখানা খাতাখোলা খাতাঞ্জি খাতাঞ্জী খাতাপত্র খাতাবই খাতাবন্দী খাতামুন খাতাল খাতালেখা খাতিমা খাতির খাতিরজমা খাতিরতোয়াজ খাতিরতোয়ায খাতিরদারি খাতিরনাদারদ খাতিরনদারত খাতের খাতেরতোয়াজ খাতেরতোয়ায খাতুন খাতমার্ক খাদ খাঁদ খাঁদু খাদক খাদা খাঁদা খাদাবাড়ি খাঁদাবোঁচা খাদাড়ি খাদি খাঁদি খাদিত খাদিতা খাদিম খাদিমা খাদিমদার খাদিমদারি খাদির খাদেম খাদেমা খাদেমদার খাদেমদারি খাদ্য খাদযুক্ত খাদ্যগুণ খাদ্যগ্রহণ খাদ্যাংশ খাদ্যাদি খাদ্যাবশেষ খাদ্যাভাব খাদ্যাভ্যাস খাদ্যজনিত খাদ্যতালিকা খাদ্যতেল খাদ্যদান খাদ্যদ্রব্য খাদ্যনালী খাদ্যনালীয় খাদ্যপানীয় খাদ্যপানীয়াদি খাদ্যপযোগী খাদ্যপ্রাণ খাদ্যপরিবেশক খাদ্যপুষ্টি খাদ্যবস্তু খাদ্যমান খাদ্যরস খাদ্যলোভী খাদ্যশস্য খাদ্যসংস্থানহীন খাদ্যসামগ্রী খাদ্যসম্ভার খাদ্যহীন খাদন খাদুন খাদরি খাদহীন খান খানকা খানকাহ খানকি খানকিখোর খানকিগিরি খানকিপনা খানকিবাজ খানকিবাজি খানকী খানকীখোর খানকীগিরি খানকীপনা খানকীবাজ খানকীবাজি খানকয়েক খানখান খানখানান খানা খানাখোঁদল খানাখোন্দল খানাখন্দ খানাঘর খানাজাদ খানাতালাশি খানাতল্লাশ খানাতল্লাশি খানাদানা খানাপিনা খানাপুরী খানাবাড়ি খানাবাড়ী খানাশুমারি খানি খানিক খানিককাল খানিকক্ষণ খানিকদূর খানচা খানেক খানেকাবা খানেখানে খানেখারাপ খানেখারাপি খানেখারাপে খানেখারাব খানেখারাবি খানেখারাবে খানেজাদ খানজাখাঁ খান্দা খানদান খান্দান খানদানি খান্দানি খানদানী খান্না খান্নাস খানবাহাদুর খানম খানুম খানসামা খানসামাগিরি খানসাহেব খানসেনা খাপ খাপখোলা খাপা খাপাই খাপাইও খাপাইত খাপাইতাম খাপাইতিস খাপাইতে খাপাইতেছ খাপাইতেছি খাপাইতেছিল খাপাইতেছিলাম খাপাইতেছিলি খাপাইতেছিলে খাপাইতেছিলেন খাপাইতেছিস খাপাইতেছে খাপাইতেছেন খাপাইতেন খাপাইব খাপাইবার খাপাইবি খাপাইবে খাপাইবেন খাপাইল খাপাইলাম খাপাইলি খাপাইলে খাপাইলেন খাপাইয়া খাপাইয়াছ খাপাইয়াছি খাপাইয়াছিল খাপাইয়াছিলাম খাপাইয়াছিলি খাপাইয়াছিলে খাপাইয়াছিলেন খাপাইয়াছিস খাপাইয়াছে খাপাইয়াছেন খাপাইয়ো খাপাও খাপাক খাপাচ্ছ খাপাচ্ছি খাপাচ্ছিল খাপাচ্ছিলাম খাপাচ্ছিলি খাপাচ্ছিলে খাপাচ্ছিলেন খাপাচ্ছিলেম খাপাচ্ছিলুম খাপাচ্ছিস খাপাচ্ছে খাপাচ্ছেন খাপাত খাপাতাম খাপাতিস খাপাতে খাপাতেন খাপাতেম খাপাতুম খাপান খাপানো খাপাব খাপাবার খাপাবি খাপাবে খাপাবেন খাপাবো খাপাল খাপালাম খাপালি খাপালে খাপালেন খাপালেম খাপালুম খাপাস খাপি খাপিয়ে খাপিয়েছ খাপিয়েছি খাপিয়েছিল খাপিয়েছিলাম খাপিয়েছিলি খাপিয়েছিলে খাপিয়েছিলেন খাপিয়েছিলেম খাপিয়েছিলুম খাপিয়েছিস খাপিয়েছে খাপিয়েছেন খাপিয়ো খাপী খাপচি খাপেখাপে খাপছাড়া খাপযুক্ত খাপ্পা খাপপাতা খাপর খাপরা খাপরেল খাপসুরত খাপসুরৎ খাফা খাব খাবার খাবারওয়ালা খাবারঘর খাবারদাবার খাবি খাবিন্দ খাবে খাবেন খাবো খাবোল খাবরা খাবরি খাবল খাবলা খাবলাই খাবলাইও খাবলাইত খাবলাইতাম খাবলাইতিস খাবলাইতে খাবলাইতেছ খাবলাইতেছি খাবলাইতেছিল খাবলাইতেছিলাম খাবলাইতেছিলি খাবলাইতেছিলে খাবলাইতেছিলেন খাবলাইতেছিস খাবলাইতেছে খাবলাইতেছেন খাবলাইতেন খাবলাইব খাবলাইবার খাবলাইবি খাবলাইবে খাবলাইবেন খাবলাইল খাবলাইলাম খাবলাইলি খাবলাইলে খাবলাইলেন খাবলাইয়া খাবলাইয়াছ খাবলাইয়াছি খাবলাইয়াছিল খাবলাইয়াছিলাম খাবলাইয়াছিলি খাবলাইয়াছিলে খাবলাইয়াছিলেন খাবলাইয়াছিস খাবলাইয়াছে খাবলাইয়াছেন খাবলাইয়ো খাবলাও খাবলাক খাবলাখাবলা খাবলাচ্ছ খাবলাচ্ছি খাবলাচ্ছিল খাবলাচ্ছিলাম খাবলাচ্ছিলি খাবলাচ্ছিলে খাবলাচ্ছিলেন খাবলাচ্ছিলেম খাবলাচ্ছিলুম খাবলাচ্ছিস খাবলাচ্ছে খাবলাচ্ছেন খাবলাত খাবলাতাম খাবলাতিস খাবলাতে খাবলাতেন খাবলাতেম খাবলাতুম খাবলান খাবলানো খাবলাব খাবলাবি খাবলাবে খাবলাবেন খাবলাবো খাবলাল খাবলালাম খাবলালি খাবলালে খাবলালেন খাবলালেম খাবলালুম খাবলাস খাবলে খাবলেছ খাবলেছি খাবলেছিল খাবলেছিলাম খাবলেছিলি খাবলেছিলে খাবলেছিলেন খাবলেছিলেম খাবলেছিলুম খাবলেছিস খাবলেছে খাবলেছেন খাবলো খাবসুরত খাম খামআলু খামখা খামখেয়াল খামখেয়ালি খামখেয়ালিপনা খামখেয়ালিপূর্ণ খামখেয়ালী খামখেয়ালীপনা খামা খামাখা খামাখামা খামাটি খামার খামারিয়া খামারজমি খামারপতিত খামারবাড়ি খামি খামির খামিরা খামিরি খামচ খামচা খামচাই খামচাইও খামচাইত খামচাইতাম খামচাইতিস খামচাইতে খামচাইতেছ খামচাইতেছি খামচাইতেছিল খামচাইতেছিলাম খামচাইতেছিলি খামচাইতেছিলে খামচাইতেছিলেন খামচাইতেছিস খামচাইতেছে খামচাইতেছেন খামচাইতেন খামচাইব খামচাইবার খামচাইবি খামচাইবে খামচাইবেন খামচাইল খামচাইলাম খামচাইলি খামচাইলে খামচাইলেন খামচাইয়া খামচাইয়াছ খামচাইয়াছি খামচাইয়াছিল খামচাইয়াছিলাম খামচাইয়াছিলি খামচাইয়াছিলে খামচাইয়াছিলেন খামচাইয়াছিস খামচাইয়াছে খামচাইয়াছেন খামচাইয়ো খামচাক খামচাখামচি খামচাচ্ছ খামচাচ্ছি খামচাচ্ছিল খামচাচ্ছিলাম খামচাচ্ছিলি খামচাচ্ছিলে খামচাচ্ছিলেন খামচাচ্ছিলেম খামচাচ্ছিলুম খামচাচ্ছিস খামচাচ্ছে খামচাচ্ছেন খামচাত খামচাতাম খামচাতিস খামচাতে খামচাতেন খামচাতেম খামচাতুম খামচান খামচানো খামচাব খামচাবার খামচাবি খামচাবে খামচাবেন খামচাবো খামচাল খামচালাম খামচালি খামচালে খামচালেন খামচালেম খামচালুম খামচাস খামচায় খামচি খামচে খামচেছ খামচেছি খামচেছিল খামচেছিলাম খামচেছিলি খামচেছিলে খামচেছিলেন খামচেছিলেম খামচেছিলুম খামচেছিস খামচেছে খামচেছেন খামচো খামেন্দ খামোখা খামোশ খামছ খামটি খামুটি খামতি খাম্বা খাম্বাজ খাম্বাজরাগ খাম্বিরা খামুশ খার খারাপ খারাপি খারাপনজর খারাব খারাবি খারাবী খারাবনজর খারি খারিজ খারিজা খারিজি খারিজী খারিজীন খারিজদাখিল খারিফ খারী খারেজি খারেজিন খারেজী খারেদজ্জাল খারুয়া খাল খালু খালই খালুই খালকাটি খালকাত খালকেটে খালখন্দ খালা খালাত খালাতো খালাম্মা খালাস খালাসি খালাসী খালাসপত্র খালাসপ্রাপ্ত খালাড়ি খালাড়ী খালি খালিকোট খালিখালি খালিজুলি খালিঠেকা খালিত্য খালিপেট খালিশপুর খালিস খালিসা খালী খালীজুলি খালেদাজিয়া খালেস খালদোহা খালবিল খালসা খাস খাসআপিল খাসকামরা খাসকি খাসখামার খাসগেলাস খাসা খাসি খাসিয়া খাসিয়ত খাসী খাসজমি খাস্ত খাস্তগির খাস্তা খাসতালুক খাসদখল খাসদান খাসনগর খাসনবিশ খাসনবীশ খাসনবীস খাসবরদার খাসমুনশি খাসমুন্সি খাসমুন্সী খাসমহাল খাসমহল খাসলত খাহিশ খাহিস খাহেশ খাড়ু খাঁড় খাড়া খাঁড়া খাড়াইলাম খাড়াখাড়া খাড়াখাড়ি খাড়াজিলিক খাড়াঝিলিক খাড়াদজ্জাল খাড়াপাহারা খাড়াফসল খাড়াবড়ি খাড়াভাবে খাড়াহুন্ডি খাড়ায়া খাড়ি খাঁড়ি খাড়ব খাড়ুয়া খায় খায়েশ খায়েস খায়না খায়নি খায়রাত খি খিআতি খিক খিচ খিঁচ খিচক খিঁচুক খিচখিচ খিচখিচি খিচা খিঁচা খিচাই খিচাইও খিচাইত খিচাইতাম খিচাইতিস খিচাইতে খিচাইতেছ খিচাইতেছি খিচাইতেছিল খিচাইতেছিলাম খিচাইতেছিলি খিচাইতেছিলে খিচাইতেছিলেন খিচাইতেছিস খিচাইতেছে খিচাইতেছেন খিচাইতেন খিচাইব খিচাইবার খিচাইবি খিচাইবে খিচাইবেন খিচাইল খিচাইলাম খিচাইলি খিচাইলে খিচাইলেন খিচাইয়া খিচাইয়াছ খিচাইয়াছি খিচাইয়াছিল খিচাইয়াছিলাম খিচাইয়াছিলি খিচাইয়াছিলে খিচাইয়াছিলেন খিচাইয়াছিস খিচাইয়াছে খিচাইয়াছেন খিচাইয়ো খিচাক খিচান খিঁচান খিচানো খিঁচানো খিচাস খিচায় খিচি খিঁচি খিঁচিত খিঁচিতাম খিঁচিতিস খিঁচিতে খিঁচিতেছ খিঁচিতেছি খিঁচিতেছিল খিঁচিতেছিলাম খিঁচিতেছিলি খিঁচিতেছিলে খিঁচিতেছিলেন খিঁচিতেছিস খিঁচিতেছে খিঁচিতেছেন খিঁচিতেন খিঁচিব খিঁচিবার খিঁচিবি খিঁচিবে খিঁচিবেন খিচিমিচি খিঁচিল খিঁচিলাম খিঁচিলি খিঁচিলে খিঁচিলেন খিচিস খিঁচিস খিঁচিয়া খিঁচিয়াছ খিঁচিয়াছি খিঁচিয়াছিল খিঁচিয়াছিলাম খিঁচিয়াছিলি খিঁচিয়াছিলে খিঁচিয়াছিলেন খিঁচিয়াছিস খিঁচিয়াছে খিঁচিয়াছেন খিচিয়ে খিঁচিয়ে খিচিয়েছ খিচিয়েছি খিচিয়েছিল খিচিয়েছিলাম খিচিয়েছিলি খিচিয়েছিলে খিচিয়েছিলেন খিচিয়েছিলেম খিচিয়েছিলুম খিচিয়েছিস খিচিয়েছে খিচিয়েছেন খিচিয়ো খিঁচিয়ো খিচচ্ছ খিচচ্ছি খিচচ্ছিল খিচচ্ছিলাম খিচচ্ছিলি খিচচ্ছিলে খিচচ্ছিলেন খিচচ্ছিলেম খিচচ্ছিলুম খিচচ্ছিস খিচচ্ছে খিচচ্ছেন খিঁচে খিঁচেছ খিঁচেছি খিঁচেছিল খিঁচেছিলাম খিঁচেছিলি খিঁচেছিলে খিঁচেছিলেন খিঁচেছিলেম খিঁচেছিলুম খিঁচেছিস খিঁচেছে খিঁচেছেন খিঁচেন খিচো খিঁচো খিঁচছ খিঁচছি খিঁচছিল খিঁচছিলাম খিঁচছিলি খিঁচছিলে খিঁচছিলেন খিঁচছিলেম খিঁচছিলুম খিঁচছিস খিঁচছে খিঁচছেন খিচত খিঁচত খিচতাম খিঁচতাম খিচতিস খিঁচতিস খিচতে খিঁচতে খিচতেন খিঁচতেন খিচতেম খিঁচতেম খিচতুম খিঁচতুম খিচন খিঁচুন খিচনি খিচুনি খিঁচনি খিঁচুনি খিচনো খিচব খিঁচব খিচবার খিচবি খিঁচবি খিচবে খিঁচবে খিচবেন খিঁচবেন খিচবো খিঁচবো খিচমিচ খিচুরি খিচল খিঁচল খিচলাম খিঁচলাম খিচলি খিঁচলি খিচলে খিঁচলে খিচলেন খিঁচলেন খিচলেম খিঁচলেম খিচলুম খিঁচলুম খিচস খিচড় খিচড়ামি খিচুড়ি খিচুড়িভাষা খিচয় খিজালত খিজি খিজির খিজমত খিজলানো খিঞ্চিল খিঞ্জির খিঞ্জীর খিটকাল খিটকেল খিটখিট খিটখিটা খিটখিটান খিটখিটানি খিটখিটে খিযাব খিটিমিটি খিযির খিটিরমিটির খিটমিট খিযর খিণ খিণি খিতাব খিতাবী খিতি খিদা খিদে খিদ্যমান খিদ্যমানা খিদমত খিদমৎ খিদমতগার খিদমৎগার খিদমতগারি খিদমৎগারি খিধা খিধে খিন্ন খিমখিমদানা খিমা খিমচা খিমচাচ্ছে খিমচান খিমচানো খিমচি খির খিরকা খির্কা খিরকিচ খিরা খিরাজ খিরিনি খিরিনী খিরে খিরনি খিরসা খিল খিলকা খিলখিল খিলগাঁ খিলগাঁও খিলা খিলাত খিলান খিলানযুক্ত খিলাফ খিলাফত খিলাফতকাল খিলাল খিলাড়ি খিলাড়ী খিলি খিলিজি খিলিজী খিলিত খিলী খিলজাই খিলধরা খিলপাড়া খিলভাঙ্গা খিলভাঙা খিললাগা খিসারত খিস্তি খিস্তী খিড়কি খিড়কিদুয়ার খিড়কিপুকুর খিড়কিয়া খিড়কী খিড়কীদুয়ার খিড়কীপুকুর খিড়নি খিয়াতি খিয়ানত খিয়াল খিয়ালখাতা খিয়ালমাফিক খচ খুচখাচ খচখচ খুচখুচ খচখচানি খচখচানো খচখচি খচখচে খচা খুঁচা খচাখচ খচাখচি খুঁচানো খচারিণী খচারী খুঁচি খচিত খুঁচিয়ে খুঁচিয়েছ খুঁচিয়েছি খুঁচিয়েছিল খুঁচিয়েছিলাম খুঁচিয়েছিলি খুঁচিয়েছিলে খুঁচিয়েছিলেন খুঁচিয়েছিলেম খুঁচিয়েছিলুম খুঁচিয়েছিস খুঁচিয়েছে খুঁচিয়েছেন খুঁচিয়ো খচ্চর খচে খুঁচে খচেছে খচোমচো খীণ খীন খীমা খচমচ খচমচানি খচমচে খচমচো খচর খীরকম্বা খুচুরখুচুর খুচরা খুচরাকাজ খুচরাকথা খুচরাখরচ খুচরাবিক্রি খচরামি খচরী খুচরো খুচরোকাজ খুচরোকথা খুচরোখরচ খুচরোবিক্রি খীল খেংরা খেংরাকাঠি খেংরামুখী খেংরামুখো খেই খেউর খেউরি খেঁউড় খেঁউড়গান খেও খেওয়া খেঁক খেঁকখেঁক খেঁকখেঁকানি খেঁকখেঁকানো খেঁকা খেঁকাই খেঁকাইও খেঁকাইত খেঁকাইতাম খেঁকাইতিস খেঁকাইতে খেঁকাইতেছ খেঁকাইতেছি খেঁকাইতেছিল খেঁকাইতেছিলাম খেঁকাইতেছিলি খেঁকাইতেছিলে খেঁকাইতেছিলেন খেঁকাইতেছিস খেঁকাইতেছে খেঁকাইতেছেন খেঁকাইতেন খেঁকাইব খেঁকাইবার খেঁকাইবি খেঁকাইবে খেঁকাইবেন খেঁকাইল খেঁকাইলাম খেঁকাইলি খেঁকাইলে খেঁকাইলেন খেঁকাইয়া খেঁকাইয়াছ খেঁকাইয়াছি খেঁকাইয়াছিল খেঁকাইয়াছিলাম খেঁকাইয়াছিলি খেঁকাইয়াছিলে খেঁকাইয়াছিলেন খেঁকাইয়াছিস খেঁকাইয়াছে খেঁকাইয়াছেন খেঁকাইয়ো খেঁকাও খেঁকাক খেঁকাচ্ছ খেঁকাচ্ছি খেঁকাচ্ছিল খেঁকাচ্ছিলাম খেঁকাচ্ছিলি খেঁকাচ্ছিলে খেঁকাচ্ছিলেন খেঁকাচ্ছিলেম খেঁকাচ্ছিলুম খেঁকাচ্ছিস খেঁকাচ্ছে খেঁকাচ্ছেন খেঁকাত খেঁকাতাম খেঁকাতিস খেঁকাতে খেঁকাতেন খেঁকাতেম খেঁকাতুম খেঁকান খেঁকানি খেঁকানো খেঁকাব খেঁকাবার খেঁকাবি খেঁকাবে খেঁকাবেন খেঁকাবো খেঁকার খেঁকারি খেঁকাল খেঁকালাম খেঁকালি খেঁকালে খেঁকালেন খেঁকালেম খেঁকালুম খেঁকাস খেঁকায় খেঁকি খেঁকিকুকুর খেঁকিকুত্তা খেঁকিয়ে খেঁকিয়েছ খেঁকিয়েছি খেঁকিয়েছিল খেঁকিয়েছিলাম খেঁকিয়েছিলি খেঁকিয়েছিলে খেঁকিয়েছিলেন খেঁকিয়েছিলেম খেঁকিয়েছিলুম খেঁকিয়েছিস খেঁকিয়েছে খেঁকিয়েছেন খেঁকিয়ো খেঁকী খেঁকীকুকুর খেঁকীকুত্তা খেকে খেকো খেঁকশিয়াল খেঁকশিয়ালি খেগো খেঙ্গরা খেঙরা খেঙরাকাঠি খেঁচ খেচকা খেঁচকা খেঁচকাই খেঁচকাইও খেঁচকাইত খেঁচকাইতাম খেঁচকাইতিস খেঁচকাইতে খেঁচকাইতেছ খেঁচকাইতেছি খেঁচকাইতেছিল খেঁচকাইতেছিলাম খেঁচকাইতেছিলি খেঁচকাইতেছিলে খেঁচকাইতেছিলেন খেঁচকাইতেছিস খেঁচকাইতেছে খেঁচকাইতেছেন খেঁচকাইতেন খেঁচকাইব খেঁচকাইবার খেঁচকাইবি খেঁচকাইবে খেঁচকাইবেন খেঁচকাইল খেঁচকাইলাম খেঁচকাইলি খেঁচকাইলে খেঁচকাইলেন খেঁচকাইয়া খেঁচকাইয়াছ খেঁচকাইয়াছি খেঁচকাইয়াছিল খেঁচকাইয়াছিলাম খেঁচকাইয়াছিলি খেঁচকাইয়াছিলে খেঁচকাইয়াছিলেন খেঁচকাইয়াছিস খেঁচকাইয়াছে খেঁচকাইয়াছেন খেঁচকাইয়ো খেঁচকাও খেঁচকাক খেঁচকাচ্ছ খেঁচকাচ্ছি খেঁচকাচ্ছিল খেঁচকাচ্ছিলাম খেঁচকাচ্ছিলি খেঁচকাচ্ছিলে খেঁচকাচ্ছিলেন খেঁচকাচ্ছিলেম খেঁচকাচ্ছিলুম খেঁচকাচ্ছিস খেঁচকাচ্ছে খেঁচকাচ্ছেন খেঁচকাত খেঁচকাতাম খেঁচকাতিস খেঁচকাতে খেঁচকাতেন খেঁচকাতেম খেঁচকাতুম খেঁচকান খেঁচকানো খেঁচকাব খেঁচকাবার খেঁচকাবি খেঁচকাবে খেঁচকাবেন খেঁচকাবো খেঁচকাল খেঁচকালাম খেঁচকালি খেঁচকালে খেঁচকালেন খেঁচকালেম খেঁচকালুম খেঁচকাস খেঁচকায় খেঁচকে খেঁচকেছ খেঁচকেছি খেঁচকেছিল খেঁচকেছিলাম খেঁচকেছিলি খেঁচকেছিলে খেঁচকেছিলেন খেঁচকেছিলেম খেঁচকেছিলুম খেঁচকেছিস খেঁচকেছে খেঁচকেছেন খেঁচকো খেঁচা খেচাখেচি খেঁচাখেঁচি খেঁচান খেঁচানো খেচামেচি খেঁচে খেঁচেন খেঁচুনি খেঁচবার খেচর খেচরান্ন খেচরী খেঁচড়া খেজাব খেজালত খেজালৎ খেজের খেজমত খেজমতকার খেজুর খেজুরগুড় খেজুরিয়া খেজুরে খেজুরছড়া খেজুরছড়ি খেজুরছড়ী খেজুরপাতা খেজুরমাথি খেজুররস খেট খেঁট খেটক খেটে খেঁটে খেটেখুটে খেটেছ খেটেছি খেটেছিল খেটেছিলাম খেটেছিলি খেটেছিলে খেটেছিলেন খেটেছিলেম খেটেছিলুম খেটেছিস খেটেছে খেটেছেন খেটেজাল খেটেল খেটো খেত খেতখামার খেঁতখেঁত খেঁতখেঁতানি খেঁতখেঁতানো খেতখোলা খেতাব খেতাবি খেতাবধারী খেতাবপ্রাপ্ত খেতাম খেতি খেতিমজুর খেতিস খেতচাষ খেতচাষী খেতে খেতেন খেতেম খেত্তিক খেতুম খেতমজুর খেত্রী খেদ খেদঙ্গ খেদা খেঁদা খেদাই খেদাইও খেদাইকৃত খেদাইত খেদাইতাম খেদাইতিস খেদাইতে খেদাইতেছ খেদাইতেছি খেদাইতেছিল খেদাইতেছিলাম খেদাইতেছিলি খেদাইতেছিলে খেদাইতেছিলেন খেদাইতেছিস খেদাইতেছে খেদাইতেছেন খেদাইতেন খেদাইব খেদাইবার খেদাইবি খেদাইবে খেদাইবেন খেদাইল খেদাইলাম খেদাইলি খেদাইলে খেদাইলেন খেদাইয়া খেদাইয়াছ খেদাইয়াছি খেদাইয়াছিল খেদাইয়াছিলাম খেদাইয়াছিলি খেদাইয়াছিলে খেদাইয়াছিলেন খেদাইয়াছিস খেদাইয়াছে খেদাইয়াছেন খেদাইয়ো খেদাক খেদাচ্ছ খেদাচ্ছি খেদাচ্ছিল খেদাচ্ছিলাম খেদাচ্ছিলি খেদাচ্ছিলে খেদাচ্ছিলেন খেদাচ্ছিলেম খেদাচ্ছিলুম খেদাচ্ছিস খেদাচ্ছে খেদাচ্ছেন খেদাত খেদাতাম খেদাতিস খেদাতে খেদাতেন খেদাতেম খেদাতুম খেদান খেদানিয়া খেদানে খেদানো খেদাব খেদাবার খেদাবি খেদাবে খেদাবেন খেদাবো খেঁদাবোচা খেদাল খেদালাম খেদালি খেদালে খেদালেন খেদালেম খেদালুম খেদাস খেদি খেঁদি খেদিত খেদিব খেদিয়ে খেদিয়েছ খেদিয়েছি খেদিয়েছিল খেদিয়েছিলাম খেদিয়েছিলি খেদিয়েছিলে খেদিয়েছিলেন খেদিয়েছিলেম খেদিয়েছিলুম খেদিয়েছিস খেদিয়েছে খেদিয়েছেন খেদিয়ো খেদোক্তি খেদযুক্ত খেদপূর্ণ খেদমত খেদমতগার খেদমতগারি খেদসূচক খেদহীন খেন খেপ খেপুক খেপা খেপাই খেপাইও খেপাইত খেপাইতাম খেপাইতিস খেপাইতে খেপাইতেছ খেপাইতেছি খেপাইতেছিল খেপাইতেছিলাম খেপাইতেছিলি খেপাইতেছিলে খেপাইতেছিলেন খেপাইতেছিস খেপাইতেছে খেপাইতেছেন খেপাইতেন খেপাইব খেপাইবার খেপাইবি খেপাইবে খেপাইবেন খেপাইল খেপাইলাম খেপাইলি খেপাইলে খেপাইলেন খেপাইয়া খেপাইয়াছ খেপাইয়াছি খেপাইয়াছিল খেপাইয়াছিলাম খেপাইয়াছিলি খেপাইয়াছিলে খেপাইয়াছিলেন খেপাইয়াছিস খেপাইয়াছে খেপাইয়াছেন খেপাইয়ো খেপাও খেপাক খেপাচ্ছ খেপাচ্ছি খেপাচ্ছিল খেপাচ্ছিলাম খেপাচ্ছিলি খেপাচ্ছিলে খেপাচ্ছিলেন খেপাচ্ছিলেম খেপাচ্ছিলুম খেপাচ্ছিস খেপাচ্ছে খেপাচ্ছেন খেপাত খেপাতাম খেপাতিস খেপাতে খেপাতেন খেপাতেম খেপাতুম খেপান খেপানো খেপাব খেপাবার খেপাবি খেপাবে খেপাবেন খেপাবো খেপামি খেপাল খেপালাম খেপালি খেপালে খেপালেন খেপালেম খেপালুম খেপাস খেপি খেপিত খেপিতাম খেপিতিস খেপিতে খেপিতেছ খেপিতেছি খেপিতেছিল খেপিতেছিলাম খেপিতেছিলি খেপিতেছিলে খেপিতেছিলেন খেপিতেছিস খেপিতেছে খেপিতেছেন খেপিতেন খেপিব খেপিবার খেপিবি খেপিবে খেপিবেন খেপিল খেপিলাম খেপিলি খেপিলে খেপিলেন খেপিস খেপিয়া খেপিয়াছ খেপিয়াছি খেপিয়াছিল খেপিয়াছিলাম খেপিয়াছিলি খেপিয়াছিলে খেপিয়াছিলেন খেপিয়াছিস খেপিয়াছে খেপিয়াছেন খেপিয়ে খেপিয়েছ খেপিয়েছি খেপিয়েছিল খেপিয়েছিলাম খেপিয়েছিলি খেপিয়েছিলে খেপিয়েছিলেন খেপিয়েছিলেম খেপিয়েছিলুম খেপিয়েছিস খেপিয়েছে খেপিয়েছেন খেপিয়ো খেপে খেপেছ খেপেছি খেপেছিল খেপেছিলাম খেপেছিলি খেপেছিলে খেপেছিলেন খেপেছিলেম খেপেছিলুম খেপেছিস খেপেছে খেপেছেন খেপেন খেপেরনৌকা খেপো খেপছ খেপছি খেপছিল খেপছিলাম খেপছিলি খেপছিলে খেপছিলেন খেপছিলেম খেপছিলুম খেপছিস খেপছে খেপছেন খেপত খেপতাম খেপতিস খেপতে খেপতেন খেপতেম খেপতুম খেপুন খেপব খেপবার খেপবি খেপবে খেপবেন খেপবো খেপল খেপলা খেপলাম খেপলি খেপলে খেপলেন খেপলেম খেপলুম খেবড়ো খেম খেমি খেমচা খেমটা খেমটাউলি খেমটাওয়ালা খেমটাওয়ালি খেমটানাচ খের খেরা খেরাজ খেরাজি খেরাজী খেরেস্তান খেরো খেরুয়া খেল খেলওয়াত খেলুক খেলকা খেলা খেলাই খেলাইও খেলাইত খেলাইতাম খেলাইতিস খেলাইতে খেলাইতেছ খেলাইতেছি খেলাইতেছিল খেলাইতেছিলাম খেলাইতেছিলি খেলাইতেছিলে খেলাইতেছিলেন খেলাইতেছিস খেলাইতেছে খেলাইতেছেন খেলাইতেন খেলাইব খেলাইবার খেলাইবি খেলাইবে খেলাইবেন খেলাইল খেলাইলাম খেলাইলি খেলাইলে খেলাইলেন খেলাইয়া খেলাইয়াছ খেলাইয়াছি খেলাইয়াছিল খেলাইয়াছিলাম খেলাইয়াছিলি খেলাইয়াছিলে খেলাইয়াছিলেন খেলাইয়াছিস খেলাইয়াছে খেলাইয়াছেন খেলাইয়ো খেলাঘর খেলাচ্ছ খেলাচ্ছি খেলাচ্ছিল খেলাচ্ছিলাম খেলাচ্ছিলি খেলাচ্ছিলে খেলাচ্ছিলেন খেলাচ্ছিলেম খেলাচ্ছিলুম খেলাচ্ছিস খেলাচ্ছে খেলাচ্ছেন খেলাচ্ছলে খেলাত খেলাতাম খেলাতিস খেলাতে খেলাতেন খেলাতেম খেলাতুম খেলাদেখা খেলাধুলা খেলাধুলো খেলান খেলানা খেলানি খেলানিয়া খেলানে খেলানো খেলাপ খেলাপি খেলাফ খেলাফত খেলাব খেলাবার খেলাবি খেলাবে খেলাবেন খেলাবো খেলাম খেলারাম খেলারছলে খেলারত খেলাল খেলালাম খেলালি খেলালে খেলালেন খেলালেম খেলালুম খেলাস খেলি খেলিত খেলিতাম খেলিতিস খেলিতে খেলিতেছ খেলিতেছি খেলিতেছিল খেলিতেছিলাম খেলিতেছিলি খেলিতেছিলে খেলিতেছিলেন খেলিতেছিস খেলিতেছে খেলিতেছেন খেলিতেন খেলিব খেলিবার খেলিবি খেলিবে খেলিবেন খেলিল খেলিলাম খেলিলি খেলিলে খেলিলেন খেলিস খেলিয়া খেলিয়াছ খেলিয়াছি খেলিয়াছিল খেলিয়াছিলাম খেলিয়াছিলি খেলিয়াছিলে খেলিয়াছিলেন খেলিয়াছিস খেলিয়াছে খেলিয়াছেন খেলিয়ে খেলিয়েছ খেলিয়েছি খেলিয়েছিল খেলিয়েছিলাম খেলিয়েছিলি খেলিয়েছিলে খেলিয়েছিলেন খেলিয়েছিলেম খেলিয়েছিলুম খেলিয়েছিস খেলিয়েছে খেলিয়েছেন খেলিয়ো খেলে খেলেছ খেলেছি খেলেছিল খেলেছিলাম খেলেছিলি খেলেছিলে খেলেছিলেন খেলেছিলেম খেলেছিলুম খেলেছিস খেলেছে খেলেছেন খেলেন খেলেনা খেলেম খেলো খেলোয়াৎ খেলোয়াড় খেলোয়াড়ি খেলোয়াড়সুলভ খেলছ খেলছি খেলছিল খেলছিলাম খেলছিলি খেলছিলে খেলছিলেন খেলছিলেম খেলছিলুম খেলছিস খেলছে খেলছেন খেলত খেলতা খেলতাম খেলতিস খেলতে খেলতেন খেলতেম খেলতুম খেলদেখা খেলন খেলুন খেলনা খেলনাপাতি খেলনাপুতুল খেলব খেলবার খেলবি খেলবে খেলবেন খেলবো খেলুম খেলল খেললাম খেললি খেললে খেললেন খেললেম খেললুম খেলুড়ি খেলুড়িয়া খেলুড়ে খেলুয়া খেশ খেশকুটুম খেশি খেস খেসকুটুম খেসারি খেঁসারি খেসারী খেসারত খেসারৎ খেসারতি খেসালা খেসট খেসসাপাত খেড় খেঁড় খেঁড়ু খেড়ি খেড়ী খেঁড়ো খেড়ুয়া খেয়া খেয়াকড়ি খেয়াঘাট খেয়াযান খেয়াতি খেয়াতরী খেয়ানৌকা খেয়ানত খেয়াপার খেয়ামাঝি খেয়ারি খেয়ারী খেয়াল খেয়ালখাতা খেয়ালখুশি খেয়ালগায়ক খেয়ালি খেয়ালিপোলাও খেয়ালী খেয়ালমাফিক খেয়ালমত খেয়ালহীন খেয়ি খেয়ে খেয়েছ খেয়েছি খেয়েছিল খেয়েছিলাম খেয়েছিলি খেয়েছিলে খেয়েছিলেন খেয়েছিলেম খেয়েছিলুম খেয়েছিস খেয়েছে খেয়েছেন খেয়েদেয়ে খেয়ো খেয়োখেয়ি খৈ খৈনি খৈনী খৈল খৈয়াম খৈয়ম খো খোংগ খোই খোওয়াব খোক্কশ খোক্কস খোকা খোকাখুকু খোকাপনা খোকাবাবু খোকামি খোকামো খোকন খোকসা খোখো খোঁখর খোঙ্গ খোঁচ খোঁচা খোঁচাই খোঁচাইও খোঁচাইত খোঁচাইতাম খোঁচাইতিস খোঁচাইতে খোঁচাইতেছ খোঁচাইতেছি খোঁচাইতেছিল খোঁচাইতেছিলাম খোঁচাইতেছিলি খোঁচাইতেছিলে খোঁচাইতেছিলেন খোঁচাইতেছিস খোঁচাইতেছে খোঁচাইতেছেন খোঁচাইতেন খোঁচাইব খোঁচাইবার খোঁচাইবি খোঁচাইবে খোঁচাইবেন খোঁচাইল খোঁচাইলাম খোঁচাইলি খোঁচাইলে খোঁচাইলেন খোঁচাইয়া খোঁচাইয়াছ খোঁচাইয়াছি খোঁচাইয়াছিল খোঁচাইয়াছিলাম খোঁচাইয়াছিলি খোঁচাইয়াছিলে খোঁচাইয়াছিলেন খোঁচাইয়াছিস খোঁচাইয়াছে খোঁচাইয়াছেন খোঁচাইয়ো খোঁচাক খোঁচাখুঁচি খোঁচাখোঁচি খোঁচাচ্ছ খোঁচাচ্ছি খোঁচাচ্ছিল খোঁচাচ্ছিলাম খোঁচাচ্ছিলি খোঁচাচ্ছিলে খোঁচাচ্ছিলেন খোঁচাচ্ছিলেম খোঁচাচ্ছিলুম খোঁচাচ্ছিস খোঁচাচ্ছে খোঁচাচ্ছেন খোঁচাত খোঁচাতাম খোঁচাতিস খোঁচাতে খোঁচাতেন খোঁচাতেম খোঁচাতুম খোঁচান খোঁচানো খোঁচাব খোঁচাবার খোঁচাবি খোঁচাবে খোঁচাবেন খোঁচাবো খোঁচাল খোঁচালাম খোঁচালি খোঁচালে খোঁচালেন খোঁচালেম খোঁচালুম খোঁচাস খোঁচযুক্ত খোজ খোঁজ খোঁজখবর খোজা খোঁজা খোঁজাখুঁজি খোঁজান খোঁজানো খোজাপ্রহরী খোঁজারু খোঁজে খোঁজেন খোঁজেলা খোঁজো খোঁজতল্লাশি খোঁজন খোঁজবার খোজুয়া খোট খোঁট খোটা খোঁটা খোঁটাখুঁটি খোঁটান খোঁটানো খোঁটে খোঁটেন খোটেল খোট্টা খোট্টাই খোট্টানি খোট্টার খোঁটন খোঁটবার খোতবা খোদ খোদকার খোদকারি খোদকারী খোদকর্তা খোদকুশি খোদকুশী খোদকস্ত খোদকস্তা খোদগার খোদগরজ খোদা খোঁদা খোদাই খোদাইকৃত খোদাইকর্ম খোদাইচিত্র খোদাওন্দ খোদাতায়ালা খোদান খোদানো খোদাবন্দ খোদারকসম খোদাহাফেজ খোদিত খোদোক্তি খোদজমি খোদপরস্ত খোদপরস্তি খোদবার খোদমুখতারি খোদমোক্তার খোদমোক্তারি খোদমতলবি খোঁদল খোদহাকিমি খোনকারি খোনা খোন্তা খোন্দকার খোন্দকারি খোন্দল খোপ খোপওয়ালা খোপা খোঁপা খোপেখোপে খোপযুক্ত খোপর খোবানি খোবানী খোবর খোবরানো খোবল খোবলা খোবলাই খোবলাইও খোবলাইত খোবলাইতাম খোবলাইতিস খোবলাইতে খোবলাইতেছ খোবলাইতেছি খোবলাইতেছিল খোবলাইতেছিলাম খোবলাইতেছিলি খোবলাইতেছিলে খোবলাইতেছিলেন খোবলাইতেছিস খোবলাইতেছে খোবলাইতেছেন খোবলাইতেন খোবলাইব খোবলাইবার খোবলাইবি খোবলাইবে খোবলাইবেন খোবলাইল খোবলাইলাম খোবলাইলি খোবলাইলে খোবলাইলেন খোবলাইয়া খোবলাইয়াছ খোবলাইয়াছি খোবলাইয়াছিল খোবলাইয়াছিলাম খোবলাইয়াছিলি খোবলাইয়াছিলে খোবলাইয়াছিলেন খোবলাইয়াছিস খোবলাইয়াছে খোবলাইয়াছেন খোবলাইয়ো খোবলাও খোবলাক খোবলাচ্ছ খোবলাচ্ছি খোবলাচ্ছিল খোবলাচ্ছিলাম খোবলাচ্ছিলি খোবলাচ্ছিলে খোবলাচ্ছিলেন খোবলাচ্ছিলেম খোবলাচ্ছিলুম খোবলাচ্ছিস খোবলাচ্ছে খোবলাচ্ছেন খোবলাত খোবলাতাম খোবলাতিস খোবলাতে খোবলাতেন খোবলাতেম খোবলাতুম খোবলান খোবলানো খোবলাব খোবলাবার খোবলাবি খোবলাবে খোবলাবেন খোবলাবো খোবলাল খোবলালাম খোবলালি খোবলালে খোবলালেন খোবলালেম খোবলালুম খোবলাস খোবলায় খোমার খোর খোরা খোরাক খোরাকি খোরাকী খোরানা খোরাসান খোরাসানি খোরাসানী খোরপোশ খোরপোষ খোরমা খোর্মা খোরশোলা খোরসোলা খোল খোলক খোলকানো খোলখোল খোলা খোলাখুলি খোলাচুল খোলাছাদ খোলাযুক্ত খোলাডাল খোলাতালাক খোলাদলিল খোলান খোলানো খোলাবাজার খোলাবাজারি খোলাভাঙা খোলাভাঁটি খোলামকুচি খোলামেলা খোলাসা খোলাহাত খোলেন খোলেননি খোলো খোলযুক্ত খোলতা খোলতাই খোলনলচে খোলবাদক খোলবার খোলভাড়া খোলশোলা খোলশছাড়া খোলস খোলসা খোলসহীন খোশ খোশআখলাক খোশআমদেদ খোশএলহান খোশকবালা খোশখেয়াল খোশখোরাক খোশখোরাকি খোশখোরাকী খোশখত খোশখবর খোশগল্প খোশামোদ খোশামোদি খোশামোদে খোশামুদি খোশামুদে খোশাল খোশচেহারা খোশনাম খোশনামি খোশনামী খোশনিয়ত খোশনিয়তি খোশনবিশ খোশনবিস খোশনবীস খোশনসিব খোশনসিবি খোশনসীব খোশপোশাক খোশপোশাকি খোশবু খোশবাই খোশবাস খোশবায় খোশবো খোশবুদার খোশবয় খোশমিযাজ খোশমেজাজ খোশরং খোশরোজ খোশরোয খোশহাল খোস খোসা খোসাযুক্ত খোসাপুরু খোসাবিহীন খোসামোদ খোসামোদি খোসামুদি খোসামুদে খোসাল খোসালা খোসালো খোসাসুদ্ধ খোসাসমেত খোস্ত খোসপাঁচড়া খোসপাঁচড়াদি খোসলা খোঁড় খোঁড়া খোঁড়াই খোঁড়াইও খোঁড়াইত খোঁড়াইতাম খোঁড়াইতিস খোঁড়াইতে খোঁড়াইতেছ খোঁড়াইতেছি খোঁড়াইতেছিল খোঁড়াইতেছিলাম খোঁড়াইতেছিলি খোঁড়াইতেছিলে খোঁড়াইতেছিলেন খোঁড়াইতেছিস খোঁড়াইতেছে খোঁড়াইতেছেন খোঁড়াইতেন খোঁড়াইব খোঁড়াইবার খোঁড়াইবি খোঁড়াইবে খোঁড়াইবেন খোঁড়াইল খোঁড়াইলাম খোঁড়াইলি খোঁড়াইলে খোঁড়াইলেন খোঁড়াইয়া খোঁড়াইয়াছ খোঁড়াইয়াছি খোঁড়াইয়াছিল খোঁড়াইয়াছিলাম খোঁড়াইয়াছিলি খোঁড়াইয়াছিলে খোঁড়াইয়াছিলেন খোঁড়াইয়াছিস খোঁড়াইয়াছে খোঁড়াইয়াছেন খোঁড়াইয়ো খোঁড়াক খোঁড়াখুঁড়ি খোঁড়াচেছ খোঁড়াচ্ছ খোঁড়াচ্ছি খোঁড়াচ্ছিল খোঁড়াচ্ছিলাম খোঁড়াচ্ছিলি খোঁড়াচ্ছিলে খোঁড়াচ্ছিলেন খোঁড়াচ্ছিলেম খোঁড়াচ্ছিলুম খোঁড়াচ্ছিস খোঁড়াচ্ছে খোঁড়াচ্ছেন খোঁড়াত খোঁড়াতাম খোঁড়াতিস খোঁড়াতে খোঁড়াতেন খোঁড়াতেম খোঁড়াতুম খোঁড়ান খোঁড়ানো খোঁড়াব খোঁড়াবার খোঁড়াবি খোঁড়াবে খোঁড়াবেন খোঁড়াবো খোঁড়াল খোঁড়ালাম খোঁড়ালি খোঁড়ালে খোঁড়ালেন খোঁড়ালেম খোঁড়ালুম খোঁড়াস খোঁড়েন খোঁড়েনি খোঁড়বার খোড়ল খোঁড়ল খোয়া খোয়াই খোয়াইও খোয়াইত খোয়াইতাম খোয়াইতিস খোয়াইতে খোয়াইতেছ খোয়াইতেছি খোয়াইতেছিল খোয়াইতেছিলাম খোয়াইতেছিলি খোয়াইতেছিলে খোয়াইতেছিলেন খোয়াইতেছিস খোয়াইতেছে খোয়াইতেছেন খোয়াইতেন খোয়াইব খোয়াইবার খোয়াইবি খোয়াইবে খোয়াইবেন খোয়াইল খোয়াইলাম খোয়াইলি খোয়াইলে খোয়াইলেন খোয়াইয়া খোয়াইয়াছ খোয়াইয়াছি খোয়াইয়াছিল খোয়াইয়াছিলাম খোয়াইয়াছিলি খোয়াইয়াছিলে খোয়াইয়াছিলেন খোয়াইয়াছিস খোয়াইয়াছে খোয়াইয়াছেন খোয়াইয়ো খোয়াও খোয়াক খোয়াক্ষীর খোয়াচ্ছ খোয়াচ্ছি খোয়াচ্ছিল খোয়াচ্ছিলাম খোয়াচ্ছিলি খোয়াচ্ছিলে খোয়াচ্ছিলেন খোয়াচ্ছিলেম খোয়াচ্ছিলুম খোয়াচ্ছিস খোয়াচ্ছে খোয়াচ্ছেন খোয়াজ খোয়াত খোয়াতাম খোয়াতিস খোয়াতে খোয়াতেন খোয়াতেম খোয়াতুম খোয়ান খোয়ানি খোয়ানে খোয়ানো খোয়াব খোয়াবার খোয়াবি খোয়াবে খোয়াবেন খোয়াবো খোয়াবনামা খোয়ার খোয়ারি খোঁয়ারি খোয়ারিজমি খোয়াল খোয়ালাম খোয়ালি খোয়ালে খোয়ালেন খোয়ালেম খোয়ালুম খোঁয়াড় খোঁয়াড়ি খোয়ায় খোয়নু খোয়লুঁ খৌরি খজ খুঁজ খুঁজুক খজা খুঁজা খজাক খুঁজাখুঁজি খুঁজান খুঁজানো খুঁজি খুঁজিত খুঁজিতাম খুঁজিতিস খুঁজিতে খুঁজিতেছ খুঁজিতেছি খুঁজিতেছিল খুঁজিতেছিলাম খুঁজিতেছিলি খুঁজিতেছিলে খুঁজিতেছিলেন খুঁজিতেছিস খুঁজিতেছে খুঁজিতেছেন খুঁজিতেন খুঁজিব খুঁজিবার খুঁজিবি খুঁজিবে খুঁজিবেন খুঁজিল খুঁজিলাম খুঁজিলি খুঁজিলে খুঁজিলেন খুঁজিস খুঁজিয়া খুঁজিয়াছ খুঁজিয়াছি খুঁজিয়াছিল খুঁজিয়াছিলাম খুঁজিয়াছিলি খুঁজিয়াছিলে খুঁজিয়াছিলেন খুঁজিয়াছিস খুঁজিয়াছে খুঁজিয়াছেন খুঁজিয়ো খুঁজে খুঁজেছ খুঁজেছি খুঁজেছিল খুঁজেছিলাম খুঁজেছিলি খুঁজেছিলে খুঁজেছিলেন খুঁজেছিলেম খুঁজেছিলুম খুঁজেছিস খুঁজেছে খুঁজেছেন খুঁজেন খুঁজেপেতে খুঁজো খুঁজছ খুঁজছি খুঁজছিল খুজছিলাম খুঁজছিলাম খুঁজছিলি খুঁজছিলে খুঁজছিলেন খুঁজছিলেম খুঁজছিলুম খুঁজছিস খুঁজছে খুঁজছেন খজ্যোতি খুঁজত খুঁজতাছি খুঁজতাম খুঁজতিস খুঁজতে খুঁজতেন খুঁজতেম খুঁজতুম খুঁজুন খুঁজব খুঁজবার খুঁজবি খুঁজবে খুঁজবেন খুঁজবো খজল খুঁজল খুঁজলাম খুজলি খুঁজলি খুঁজলে খুঁজলেন খুঁজলেম খুঁজলুম খুঞা খুঁঞা খঞ্চ খুঞ্চা খঞ্চাপোষ খুঞ্চি খঞ্চিপোষ খঞ্চিল খঞ্চে খুঞ্চেপোষ খুঁঞেতাঁতি খঞ্জ খঞ্জা খঞ্জতা খঞ্জত্ব খঞ্জন খঞ্জনআঁখি খঞ্জনগঞ্জন খঞ্জনা খঞ্জনি খঞ্জনিকা খঞ্জনী খঞ্জননয়ন খঞ্জর খঞ্জরি খঞ্জরী খট খুট খুঁট খুঁটআখুরি খুঁটআখরিয়া খুঁটআখুঁরে খুঁটুক খটকা খটখট খুটখুট খুটখুটি খুটা খুঁটা খ্যাং খ্যাংরা খ্যাংরামুখী খ্যাংরামুখো খ্যাঁক খ্যাঁকখেঁকানো খ্যাঁকখ্যাঁক খ্যাঁকখ্যাঁকানি খ্যাঁকান খ্যাঁকানি খ্যাঁকানো খ্যাঁকম্যাক খটাখট খুঁটাখুঁটি খ্যাঁচখেঁচি খ্যাঁচাখেঁচি খ্যাঁচম্যাচ খ্যাচড়া খ্যাঁট খ্যাঁটন খটাত খটাৎ খ্যাত খ্যাঁত খটাতখটাত খটাৎখটাৎ খ্যাঁতখ্যাঁত খ্যাতি খ্যাতিজনক খ্যাতিদায়িনী খ্যাতিনামা খ্যাতিনাশ খ্যাতিপ্রাপ্ত খ্যাতিমান খ্যাতিলাভ খ্যাতিসম্পন্ন খ্যাতিহীন খ্যাতনামা খুঁটান খ্যানখেনে খ্যানখ্যান খুঁটানো খ্যাপক খ্যাপা খ্যাপাটে খ্যাপান খ্যাপানো খ্যাপামি খ্যাপিত খ্যাপন খ্যাপলা খ্যামটা খ্যামটাউলি খ্যামটাওয়ালী খুটারি খটাশ খটাস খটাসখটাস খটি খুঁটি খটিক খটিকা খুঁটিগাড়া খুঁটিগেড়ে খুঁটিটা খুঁটিত খুঁটিতাম খুঁটিতিস খুঁটিতে খুঁটিতেছ খুঁটিতেছি খুঁটিতেছিল খুঁটিতেছিলাম খুঁটিতেছিলি খুঁটিতেছিলে খুঁটিতেছিলেন খুঁটিতেছিস খুঁটিতেছে খুঁটিতেছেন খুঁটিতেন খুঁটিনাটি খটিনী খুঁটিপেতে খুঁটিব খুঁটিবার খুঁটিবি খুঁটিবে খুঁটিবেন খুঁটিরজোর খুঁটিল খুঁটিলাম খুঁটিলি খুঁটিলে খুঁটিলেন খুঁটিস খুঁটিয়া খুঁটিয়াছ খুঁটিয়াছি খুঁটিয়াছিল খুঁটিয়াছিলাম খুঁটিয়াছিলি খুঁটিয়াছিলে খুঁটিয়াছিলেন খুঁটিয়াছিস খুঁটিয়াছে খুঁটিয়াছেন খুঁটিয়ে খুঁটিয়ো খটী খুঁটী খুঁটে খুঁটেছ খুঁটেছি খুঁটেছিল খুঁটেছিলাম খুঁটেছিলি খুঁটেছিলে খুঁটেছিলেন খুঁটেছিলেম খুঁটেছিলুম খুঁটেছিস খুঁটেছে খুঁটেছেন খুঁটেন খটেল খুটো খুঁটো খটোমটো খুঁটছ খুঁটছি খুঁটছিল খুঁটছিলাম খুঁটছিলি খুঁটছিলে খুঁটছিলেন খুঁটছিলেম খুঁটছিলুম খুঁটছিস খুঁটছে খুঁটছেন খট্টা খট্টারূঢ়া খট্টাশ খট্টাস খট্টি খট্টী খটযোগিয়া খটটোড়ি খুঁটত খুঁটতাম খুঁটতিস খুঁটতে খুঁটতেন খুঁটতেম খটতোড়ি খুঁটতুম খুঁটন খুঁটুন খুঁটনি খুঁটব খট্বা খট্বাঙ্গ খট্বাঙ্গধর খট্বারূ খট্বারূঢ় খট্বারূঢ়া খুঁটবি খট্বিকা খুঁটবে খুঁটবেন খুঁটবো খটব্য খটমট খুটুরখাটুর খটরাগ খুটুরি খটরমটর খুটুরমুটুর খুঁটল খুঁটলাম খুঁটলি খুঁটলে খুঁটলেন খুঁটলেম খুঁটলুম খণ্ড খণ্ডক খণ্ডকাব্য খণ্ডকথা খণ্ডকপাল খণ্ডখণ্ড খণ্ডগিরি খণ্ডগ্রাস খণ্ডা খণ্ডাংশ খণ্ডাই খণ্ডাইও খণ্ডাইত খণ্ডাইতাম খণ্ডাইতিস খণ্ডাইতে খণ্ডাইতেছ খণ্ডাইতেছি খণ্ডাইতেছিল খণ্ডাইতেছিলাম খণ্ডাইতেছিলি খণ্ডাইতেছিলে খণ্ডাইতেছিলেন খণ্ডাইতেছিস খণ্ডাইতেছে খণ্ডাইতেছেন খণ্ডাইতেন খণ্ডাইব খণ্ডাইবার খণ্ডাইবি খণ্ডাইবে খণ্ডাইবেন খণ্ডাইল খণ্ডাইলাম খণ্ডাইলি খণ্ডাইলে খণ্ডাইলেন খণ্ডাইয়া খণ্ডাইয়াছ খণ্ডাইয়াছি খণ্ডাইয়াছিল খণ্ডাইয়াছিলাম খণ্ডাইয়াছিলি খণ্ডাইয়াছিলে খণ্ডাইয়াছিলেন খণ্ডাইয়াছিস খণ্ডাইয়াছে খণ্ডাইয়াছেন খণ্ডাইয়ো খণ্ডাক খণ্ডাখণ্ডি খণ্ডাচ্ছ খণ্ডাচ্ছি খণ্ডাচ্ছিল খণ্ডাচ্ছিলাম খণ্ডাচ্ছিলি খণ্ডাচ্ছিলে খণ্ডাচ্ছিলেন খণ্ডাচ্ছিলেম খণ্ডাচ্ছিলুম খণ্ডাচ্ছিস খণ্ডাচ্ছে খণ্ডাচ্ছেন খণ্ডাত খণ্ডাতাম খণ্ডাতিস খণ্ডাতে খণ্ডাতেন খণ্ডাতেম খণ্ডাতুম খণ্ডান খণ্ডানো খণ্ডাব খণ্ডাবার খণ্ডাবি খণ্ডাবে খণ্ডাবেন খণ্ডাবো খণ্ডাল খণ্ডালাম খণ্ডালি খণ্ডালে খণ্ডালেন খণ্ডালেম খণ্ডালুম খণ্ডাস খণ্ডিত খণ্ডিতকরণ খণ্ডিতক্ষুর খণ্ডিতা খণ্ডিতাম খণ্ডিতিস খণ্ডিতে খণ্ডিতেছ খণ্ডিতেছি খণ্ডিতেছিল খণ্ডিতেছিলাম খণ্ডিতেছিলি খণ্ডিতেছিলে খণ্ডিতেছিলেন খণ্ডিতেছিস খণ্ডিতেছে খণ্ডিতেছেন খণ্ডিতেন খণ্ডিব খণ্ডিবার খণ্ডিবি খণ্ডিবে খণ্ডিবেন খণ্ডিল খণ্ডিলাম খণ্ডিলি খণ্ডিলে খণ্ডিলেন খণ্ডিস খণ্ডিয়া খণ্ডিয়াছ খণ্ডিয়াছি খণ্ডিয়াছিল খণ্ডিয়াছিলাম খণ্ডিয়াছিলি খণ্ডিয়াছিলে খণ্ডিয়াছিলেন খণ্ডিয়াছিস খণ্ডিয়াছে খণ্ডিয়াছেন খণ্ডিয়ে খণ্ডিয়েছ খণ্ডিয়েছি খণ্ডিয়েছিল খণ্ডিয়েছিলাম খণ্ডিয়েছিলি খণ্ডিয়েছিলে খণ্ডিয়েছিলেন খণ্ডিয়েছিলেম খণ্ডিয়েছিলুম খণ্ডিয়েছিস খণ্ডিয়েছে খণ্ডিয়েছেন খণ্ডিয়ো খণ্ডী খণ্ডচাষ খণ্ডে খণ্ডেছ খণ্ডেছি খণ্ডেছিল খণ্ডেছিলাম খণ্ডেছিলি খণ্ডেছিলে খণ্ডেছিলেন খণ্ডেছিলেম খণ্ডেছিলুম খণ্ডেছিস খণ্ডেছে খণ্ডেছেন খণ্ডেন খণ্ড্য খণ্ডযুদ্ধ খণ্ডতাল খণ্ডন খণ্ডনকরা খণ্ডনীয় খণ্ডনযোগ্য খণ্ডপ্রলয় খণ্ডবাক্য খণ্ডবিখণ্ড খণ্ডব্রত খণ্ডভাঙ্গা খণ্ডশ খণ্ডশৈল খত খুত খুঁত খুঁৎ খুঁতকাড়া খতকিতাবত খুঁতখুঁত খুঁতখুঁতানি খতখতিয়ান খুঁতখুঁতে খতখতেন খুঁতখুঁতো খুঁতখুঁতুনি খতা খতান খতানো খতি খুতি খুঁতি খতিব খতিবি খতিবী খতিয়ান খতিয়ে খতীব খতেন খতেমা খতো খুঁতো খুঁতযুক্ত খত্তাল খতনা খৎনা খতবা খৎবা খুতবা খুৎবা খতম খতমতারাবি খতর খতরা খতুয়া খদ খুদ খুদুক খুদকর্তা খুদকুশি খুদকুশী খুদকস্ত খুদকস্তা খুদকুঁড়া খুদকুঁড়ো খুদগরজ খুদা খুদান খুদানো খুদাহ খুদাহ্‌ খুদাহাফিয খদি খুদি খদিকা খুদিত খুদিতাম খুদিতিস খুদিতে খুদিতেছ খুদিতেছি খুদিতেছিল খুদিতেছিলাম খুদিতেছিলি খুদিতেছিলে খুদিতেছিলেন খুদিতেছিস খুদিতেছে খুদিতেছেন খুদিতেন খুদিব খুদিবার খুদিবি খুদিবে খুদিবেন খদির খদিরক্বাথ খদিরকষা খদিরকষায় খদিরিকা খুদিল খুদিলাম খুদিলি খুদিলে খুদিলেন খুদিস খুদিয়া খুদিয়াছ খুদিয়াছি খুদিয়াছিল খুদিয়াছিলাম খুদিয়াছিলি খুদিয়াছিলে খুদিয়াছিলেন খুদিয়াছিস খুদিয়াছে খুদিয়াছেন খুদিয়ো খুদী খুদে খুদেছ খুদেছি খুদেছিল খুদেছিলাম খুদেছিলি খুদেছিলে খুদেছিলেন খুদেছিলেম খুদেছিলুম খুদেছিস খুদেছে খুদেছেন খুদেন খুদেপিঁপড়া খুদেপিঁপড়ে খুদেরাক্ষস খুদেশয়তান খুদো খুদছ খুদছি খুদছিল খুদছিলাম খুদছিলি খুদছিলে খুদছিলেন খুদছিলেম খুদছিলুম খুদছিস খুদছে খুদছেন খুদজমি খদ্যোত খদ্যোতিকা খদ্যোতমালা খুদত খুদতাম খুদতিস খুদতে খুদতেন খুদতেম খুদতুম খুদ্দ খদ্দি খদ্দের খদ্দর খুদুন খুদপরস্ত খুদপরস্তি খুদব খুদবি খুদবে খুদবেন খুদবো খুদমুখতারি খুদমাগা খুদমোক্তার খুদমোক্তারি খুদমতলবি খুদল খুদলাম খুদলি খুদলে খুদলেন খুদলেম খুদলুম খুদহাকিমি খুধা খন খুন খুনআলুদা খনক খুনখারাপি খুনখারাব খুনখারাবি খুনখারাবী খনখন খনখনে খুনখুনে খুনখুবি খুনখুবী খুনাখুনি খনি খুনি খুনিআসামি খনিজ খনিজাত খনিজসম্পদ খনিত খনিত্র খুনিয়া খুনিয়ারা খনী খুনচাপা খুনচড়া খনে খুনে খনেক খনেখনে খনেজাত খুনেরখুঁটি খুনেরা খুনোখুনি খুনজখম খুনজোশি খুনজোশী খন্য খনৎকার খন্তা খন্তি খুন্তি খন্তিক খন্দ খন্দক খন্দকার খন্দখেরাজ খন্দমাল খনন খননকাজ খননকারী খননকার্য খননকৃত খন্নাস খননীয় খননযন্ত্র খননশিল্প খুনরেজ খুনশাল খুনশি খুনশী খুনসুটি খুনসুড়ি খনয়িত্রী খপ খপখপ খপখপানি খপাৎ খপানি খুপি খুপী খপোত খপছুরত খপ্পা খপ্পর খপুর খপরা খুপরি খপুষ্প খুপসুরত খুপসুরৎ খফা খফি খুব খুবকরে খুবখুব খুবানি খবারি খবাষ্প খুবি খবিশ খবিস খুবী খবর খবরগির খবরগিরি খবরগীর খবরাখবর খুবরি খুবরী খবরেরকাগজ খবরদার খবর্দার খবরদারি খবরদারী খুবল খুবলক খুবলা খুবলাই খুবলাইত খুবলাইতাম খুবলাইতিস খুবলাইতে খুবলাইতেছ খুবলাইতেছি খুবলাইতেছিল খুবলাইতেছিলাম খুবলাইতেছিলি খুবলাইতেছিলে খুবলাইতেছিলেন খুবলাইতেছিস খুবলাইতেছে খুবলাইতেছেন খুবলাইতেন খুবলাইব খুবলাইবার খুবলাইবি খুবলাইবে খুবলাইবেন খুবলাইল খুবলাইলাম খুবলাইলি খুবলাইলে খুবলাইলেন খুবলাইয়া খুবলাইয়াছ খুবলাইয়াছি খুবলাইয়াছিল খুবলাইয়াছিলাম খুবলাইয়াছিলি খুবলাইয়াছিলে খুবলাইয়াছিলেন খুবলাইয়াছিস খুবলাইয়াছে খুবলাইয়াছেন খুবলাইয়ো খুবলাক খুবলান খুবলানো খুবলাস খুবলায় খুবলিও খুবলিয়ে খুবলিয়েছ খুবলিয়েছি খুবলিয়েছিল খুবলিয়েছিলাম খুবলিয়েছিলি খুবলিয়েছিলে খুবলিয়েছিলেন খুবলিয়েছিলেম খুবলিয়েছিলুম খুবলিয়েছিস খুবলিয়েছে খুবলিয়েছেন খুবলিয়ো খুবলচ্ছ খুবলচ্ছি খুবলচ্ছিল খুবলচ্ছিলাম খুবলচ্ছিলি খুবলচ্ছিলে খুবলচ্ছিলেন খুবলচ্ছিলেম খুবলচ্ছিলুম খুবলচ্ছিস খুবলচ্ছে খুবলচ্ছেন খুবলে খুবলেছ খুবলেছি খুবলেছিল খুবলেছিলাম খুবলেছিলি খুবলেছিলে খুবলেছিলেন খুবলেছিলেম খুবলেছিলুম খুবলেছিস খুবলেছে খুবলেছেন খুবলো খুবলোবার খুবলত খুবলতাম খুবলতিস খুবলতে খুবলতেন খুবলতেম খুবলতুম খুবলন খুবলনো খুবলব খুবলবি খুবলবে খুবলবেন খুবলবো খুবলল খুবললাম খুবললি খুবললে খুবললেন খুবললেম খুবললুম খুবলস খুবলয় খুবসে খুবসময় খুবসুরত খুবসুরৎ খুবসুরতি খমক খুমার খুমারি খুমি খমির খমীর খমণি খমধ্য খম্বা খুম্ভী খর খুর খরকর খরখোদা খরখর খরখরে খরগোশ খরগোস খরা খুরা খুরাক খরাজ খরাদ খরাদি খরান খুরানা খরানি খরানো খুরি খরিতা খরিদ খরিদখাতা খরিদা খরিদানি খরিদদার খরিদ্দার খরিদদর খরিদমূল্য খরিফ খ্রিষ্ট খ্রিষ্টান খ্রিষ্টাব্দ খ্রিষ্টীয় খ্রিষ্টপূর্ব খ্রিষ্টপূর্বাব্দ খ্রিস্ট খ্রিস্টান খ্রিস্টানি খ্রিস্টানজাত খ্রিস্টানধর্ম খ্রিস্টানপন্থী খ্রিস্টাব্দ খ্রিস্টীয় খ্রিস্টধর্ম খ্রিস্টধর্মাবলম্বী খ্রিস্টধর্মপূর্ব খ্রিস্টপূর্ব খ্রিস্টপূর্বাব্দ খ্রিস্টবাদ খরচ খুরী খরচখরচা খরচা খর্চা খরচাদি খরচান্ত খরচাপাতি খরচাপত্র খরচি খরচিয়া খরচে খরুচে খরচেরখাতা খরচযোগ্য খরচপত্র খরীফ খরচহীন খুরে খরেদজ্জাল খুরেদণ্ডবৎ খুরেনমস্কার খরেবুদ্ধি খুরো খরোষ্ঠী খরজ খরজালি খর্জন খর্জূর খর্জূরিকা খর্জূরী খরজল খরযান খরতাপ খরতর খুর্দ খরদজ্জাল খরদরজাল খরদর্জাল খরদৃষ্ট খরদৃষ্টি খরধার খুরপা খরপানি খুরপি খর্পর খুরপ্র খরব খর্ব খর্বকায় খর্বকেতু খর্বাকার খরবাক্য খর্বাকৃতি খরবায়ু খর্বিত খরবুজ খরবুজা খরবটি খর্বতা খর্বশাখ খুরমা খুর্মা খরমুজ খরমুজা খুররাম খুররম খুরলি খুরলী খরশাণ খরশান খরশাল খুরশি খরশুলা খরসান খর্সান খরসানি খুরসানি খুরসি খরস্নায়ু খরস্রোত খরস্রোতা খরসুলা খর্সুলা খল খুল খলক খুলুক খলকপট খলখল খলখলানি খলা খুলা খুলাখুলি খুলান খুলানো খুলাফায়ে খলাস খুলাসা খলাসপত্র খলি খুলি খলিত খুলিত খুলিতাম খুলিতিস খুলিতে খুলিতেছ খুলিতেছি খুলিতেছিল খুলিতেছিলাম খুলিতেছিলি খুলিতেছিলে খুলিতেছিলেন খুলিতেছিস খুলিতেছে খুলিতেছেন খুলিতেন খলিন খলিফা খলিফাবাদ খুলিব খুলিবার খুলিবি খুলিবে খুলিবেন খলিল খুলিল খুলিলাম খুলিলি খুলিলে খুলিলেন খলিলুল্লাহ খলিশ খলিশা খুলিস খলিহান খুলিয়া খুলিয়াছ খুলিয়াছি খুলিয়াছিল খুলিয়াছিলাম খুলিয়াছিলি খুলিয়াছিলে খুলিয়াছিলেন খুলিয়াছিস খুলিয়াছে খুলিয়াছেন খুলিয়ে খুলিয়ো খুলী খলীন খলীফা খলচরিত্র খুলে খুলেছ খুলেছি খুলেছিল খুলেছিলাম খুলেছিলি খুলেছিলে খুলেছিলেন খুলেছিলেম খুলেছিলুম খুলেছিস খুলেছে খুলেছেন খলেন খুলেন খুলেননি খলেশ খুলো খুলছ খুলছি খুলছিল খুলছিলাম খুলছিলি খুলছিলে খুলছিলেন খুলছিলেম খুলছিলুম খুলছিস খুলছে খুলছেন খলট খলযি খুলত খলতা খুলতাম খলতি খুলতিস খুলতে খুলতেন খুলতেম খুলতুম খলধান খুলুন খুলনা খুলনাবাসী খুলনাবিভাগ খলনায়ক খলনায়িকা খলনুড়ি খলপু খলপা খলফা খুলব খল্বাট খুলবি খুলবে খুলবেন খুলবো খলবল খলবলানো খলল খল্ল খুলল খুল্ল খুললাম খুল্লাম খুললি খল্লিকা খল্লিট খল্লীট খুললে খুললেন খুললেম খুল্লতাত খুললুম খলশে খলস্বভাব খলস্বভাবা খশ খুশ খুশআখলাক খুশআমদেদ খুশইইলহান খুশইএলাহান খুশএলহান খুশক খুশকা খুশকি খুশকবালা খুশখেয়াল খুশখোরাক খুশখোরাকি খুশখোরাকী খুশখত খুশখবর খশখশ খুশগল্প খুশামোদ খুশামুদী খুশি খুশিখুশি খুশিমতো খুশী খুশচেহারা খুশনাম খুশনামি খুশনামী খুশনিয়ত খুশনিয়তি খুশনবিশ খুশনবিস খুশনবীশ খুশনবীস খুশনসিব খুশনসিবি খুশনসীব খুশপোশাক খুশপোশাকি খুশবু খুশবাস খুশবো খুশবুদার খুশমিযাজ খুশমেজাজ খুশরং খুশরোজ খুশরোয খুশহাল খুষ্কি খৃষ্ট খৃষ্টান খৃষ্টানী খৃষ্টাব্দ খৃষ্টীয় খৃষ্টধর্ম খৃষ্টপূর্ব খৃষ্টপূর্বাব্দ খস খুস খসুক খুস্ক খুসকি খুস্কি খুসকো খসখস খুসখুস খসখসানি খসখসে খসা খসাই খসাইও খসাইত খসাইতাম খসাইতিস খসাইতে খসাইতেছ খসাইতেছি খসাইতেছিল খসাইতেছিলাম খসাইতেছিলি খসাইতেছিলে খসাইতেছিলেন খসাইতেছিস খসাইতেছে খসাইতেছেন খসাইতেন খসাইব খসাইবার খসাইবি খসাইবে খসাইবেন খসাইল খসাইলাম খসাইলি খসাইলে খসাইলেন খসাইয়া খসাইয়াছ খসাইয়াছি খসাইয়াছিল খসাইয়াছিলাম খসাইয়াছিলি খসাইয়াছিলে খসাইয়াছিলেন খসাইয়াছিস খসাইয়াছে খসাইয়াছেন খসাইয়ো খসাও খসাওল খসাক খসাচ্ছ খসাচ্ছি খসাচ্ছিল খসাচ্ছিলাম খসাচ্ছিলি খসাচ্ছিলে খসাচ্ছিলেন খসাচ্ছিলেম খসাচ্ছিলুম খসাচ্ছিস খসাচ্ছে খসাচ্ছেন খসাত খসাতাম খসাতিস খসাতে খসাতেন খসাতেম খসাতুম খসান খসানো খসাব খসাবার খসাবি খসাবে খসাবেন খসাবো খসাল খসালাম খসালি খসালে খসালেন খসালেম খসালুম খসাস খসি খসিত খসিতাম খসিতিস খসিতে খসিতেছ খসিতেছি খসিতেছিল খসিতেছিলাম খসিতেছিলি খসিতেছিলে খসিতেছিলেন খসিতেছিস খসিতেছে খসিতেছেন খসিতেন খসিব খসিবার খসিবি খসিবে খসিবেন খসিল খসিলাম খসিলি খসিলে খসিলেন খসিস খসিয়া খসিয়াছ খসিয়াছি খসিয়াছিল খসিয়াছিলাম খসিয়াছিলি খসিয়াছিলে খসিয়াছিলেন খসিয়াছিস খসিয়াছে খসিয়াছেন খসিয়ে খসিয়েছ খসিয়েছি খসিয়েছিল খসিয়েছিলাম খসিয়েছিলি খসিয়েছিলে খসিয়েছিলেন খসিয়েছিলেম খসিয়েছিলুম খসিয়েছিস খসিয়েছে খসিয়েছেন খসিয়ো খসে খসেছ খসেছি খসেছিল খসেছিলাম খসেছিলি খসেছিলে খসেছিলেন খসেছিলেম খসেছিলুম খসেছিস খসেছে খসেছেন খসেন খসো খসছ খসছি খসছিল খসছিলাম খসছিলি খসছিলে খসছিলেন খসছিলেম খসছিলুম খসছিস খসছে খসছেন খৃস্ট খৃস্টান খৃস্টানী খৃস্টাব্দ খৃস্টীয় খৃস্টধর্ম খৃস্টপূর্ব খৃস্টপূর্বাব্দ খসত খসতাম খসতিস খসতে খসতেন খসতেম খসতুম খসুন খসব খসবার খসবি খসবে খসবেন খসবো খস্বস্তিক খুসবয় খসম খসরু খুসরু খসল খসলাম খসলি খসলে খসলেন খসলেম খসলত খসলুম খসড়া খসয়ে খড় খুড় খুঁড় খুঁড়ুক খড়ক্কী খড়কি খড়কিয়া খড়কী খড়কে খড়কুটা খড়কুটি খড়কুটো খড়খড় খড়খড়ি খড়খড়ে খড়গ খড়গাদি খড়গী খড়গচর্ম খড়গোঁজা খড়গধারী খড়গধেনু খড়গনাসা খড়গপাণি খড়গপত্র খড়গপুর খড়গফল খড়গফলক খড়গবিধান খড়গমৃগ খড়গহস্ত খুড়া খুঁড়া খুঁড়াখুঁড়ি খুড়াতো খুঁড়ান খুঁড়ানো খুড়াশ্বশুর খড়ি খুড়ি খুঁড়ি খড়িওঠা খড়িওড়া খড়িকা খড়িচূর্ণ খুঁড়িত খুঁড়িতাম খুঁড়িতিস খুঁড়িতে খুঁড়িতেছ খুঁড়িতেছি খুঁড়িতেছিল খুঁড়িতেছিলাম খুঁড়িতেছিলি খুঁড়িতেছিলে খুঁড়িতেছিলেন খুঁড়িতেছিস খুঁড়িতেছে খুঁড়িতেছেন খুঁড়িতেন খড়িপাতা খুঁড়িব খুঁড়িবার খুঁড়িবি খুঁড়িবে খুঁড়িবেন খড়িমাটি খুঁড়িল খুঁড়িলাম খুঁড়িলি খুঁড়িলে খুঁড়িলেন খুড়িশাশুড়ি খুঁড়িস খুঁড়িয়া খুঁড়িয়াছ খুঁড়িয়াছি খুঁড়িয়াছিল খুঁড়িয়াছিলাম খুঁড়িয়াছিলি খুঁড়িয়াছিলে খুঁড়িয়াছিলেন খুঁড়িয়াছিস খুঁড়িয়াছে খুঁড়িয়াছেন খুঁড়িয়ে খুঁড়িয়েছ খুঁড়িয়েছি খুঁড়িয়েছিল খুঁড়িয়েছিলাম খুঁড়িয়েছিলি খুঁড়িয়েছিলে খুঁড়িয়েছিলেন খুঁড়িয়েছিলেম খুঁড়িয়েছিলুম খুঁড়িয়েছিস খুঁড়িয়েছে খুঁড়িয়েছেন খুঁড়িয়ো খড়ী খুঁড়ে খুঁড়েছ খুঁড়েছি খুঁড়েছিল খুঁড়েছিলাম খুঁড়েছিলি খুঁড়েছিলে খুঁড়েছিলেন খুঁড়েছিলেম খুঁড়েছিলুম খুঁড়েছিস খুঁড়েছে খুঁড়েছেন খুঁড়েন খড়েরআগুন খড়ো খুড়ো খুঁড়ো খুড়োশাশুড়ি খুড়োশ্বশুর খুঁড়ছ খুঁড়ছি খুঁড়ছিল খুঁড়ছিলাম খুঁড়ছিলি খুঁড়ছিলে খুঁড়ছিলেন খুঁড়ছিলেম খুঁড়ছিলুম খুঁড়ছিস খুঁড়ছে খুঁড়ছেন খুঁড়ত খুঁড়তাম খুঁড়তিস খুঁড়তে খুঁড়তেন খুঁড়তেম খুড়তুত খুড়তুতো খুঁড়তুম খড়দা খড়দহ খুঁড়ুন খুঁড়ব খুঁড়বি খড়বিচালি খুঁড়বে খুঁড়বেন খুঁড়বো খড়ম খড়মপেটা খড়মপেয়ে খড়মড় খড়মড়ে খড়রা খুঁড়ল খুঁড়লাম খুঁড়লি খুঁড়লে খুঁড়লেন খুঁড়লেম খুঁড়লুম খুড়শাশুড়ি খুড়শ্বশুর খড়ুয়া খয়া খুয়া খুঁয়া খয়াখয়া খয়ান খয়ানো খুয়ানো খয়িত খয়ে খুঁয়ে খুঁয়েতাঁতি খয়ের খয়েরখাঁ খয়েরখাহি খয়েরখাহী খয়েরি খয়েরী খয়েরবন্ধন খয়না খয়র খয়রা খয়রাতি খয়রাতী".split(" "),
              w_l: "ল লূ লংওয়াল লংকা লংকাফোড়ন লংকাবাটা লংকামরিচ লংক্লথ লংগরখানা লংজাম্প লংফেলো লংবটম লই লুই লইছিলাম লুইজিয়ানা লইত লইতাম লইতিস লইতে লইতেছ লইতেছি লইতেছিল লইতেছিলাম লইতেছিলি লইতেছিলে লইতেছিলেন লইতেছিস লইতেছে লইতেছেন লইতেন লুইপা লুইপাদ লইব লইবার লইবি লইবে লইবেন লইল লইলাম লইলি লইলে লইলেন লইস লুইস লুইসগান লইয়া লইয়াছ লইয়াছি লইয়াছিল লইয়াছিলাম লইয়াছিলি লইয়াছিলে লইয়াছিলেন লইয়াছিস লইয়াছে লইয়াছেন লইয়ে লইয়েছ লইয়েছি লইয়েছিল লইয়েছিলাম লইয়েছিলি লইয়েছিলে লইয়েছিলেন লইয়েছিলেম লইয়েছিলুম লইয়েছিস লইয়েছে লইয়েছেন লইয়ো লউক লউন লউসনিয়া লও লওহ লওয়া লওয়াই লওয়াইও লওয়াইত লওয়াইতাম লওয়াইতিস লওয়াইতে লওয়াইতেছ লওয়াইতেছি লওয়াইতেছিল লওয়াইতেছিলাম লওয়াইতেছিলি লওয়াইতেছিলে লওয়াইতেছিলেন লওয়াইতেছিস লওয়াইতেছে লওয়াইতেছেন লওয়াইতেন লওয়াইব লওয়াইবার লওয়াইবি লওয়াইবে লওয়াইবেন লওয়াইল লওয়াইলাম লওয়াইলি লওয়াইলে লওয়াইলেন লওয়াইয়া লওয়াইয়াছ লওয়াইয়াছি লওয়াইয়াছিল লওয়াইয়াছিলাম লওয়াইয়াছিলি লওয়াইয়াছিলে লওয়াইয়াছিলেন লওয়াইয়াছিস লওয়াইয়াছে লওয়াইয়াছেন লওয়াইয়ো লওয়াক লওয়াচ্ছ লওয়াচ্ছি লওয়াচ্ছিল লওয়াচ্ছিলাম লওয়াচ্ছিলি লওয়াচ্ছিলে লওয়াচ্ছিলেন লওয়াচ্ছিলেম লওয়াচ্ছিলুম লওয়াচ্ছিস লওয়াচ্ছে লওয়াচ্ছেন লওয়াজিম লওয়াজিমা লওয়াত লওয়াতাম লওয়াতিস লওয়াতে লওয়াতেন লওয়াতেম লওয়াতুম লওয়ান লওয়ানো লওয়াব লওয়াবার লওয়াবি লওয়াবে লওয়াবেন লওয়াবো লওয়াল লওয়ালাম লওয়ালি লওয়ালে লওয়ালেন লওয়ালেম লওয়ালুম লওয়াস লওয়ায় লক লুক লকআউট লকআপ লুকক লক্কা লুক্কায়িত লক্কড় লকগেট লকা লুকা লুকাই লুকাইও লুকাইত লুকাইতাম লুকাইতিস লুকাইতে লুকাইতেছ লুকাইতেছি লুকাইতেছিল লুকাইতেছিলাম লুকাইতেছিলি লুকাইতেছিলে লুকাইতেছিলেন লুকাইতেছিস লুকাইতেছে লুকাইতেছেন লুকাইতেন লুকাইনু লুকাইব লুকাইবার লুকাইবি লুকাইবে লুকাইবেন লুকাইল লুকাইলাম লুকাইলি লুকাইলে লুকাইলেন লুকাইয়া লুকাইয়াছ লুকাইয়াছি লুকাইয়াছিল লুকাইয়াছিলাম লুকাইয়াছিলি লুকাইয়াছিলে লুকাইয়াছিলেন লুকাইয়াছিস লুকাইয়াছে লুকাইয়াছেন লুকাইয়ো লুকাও লুকাওয়ে লুকাক লুকাচুরি লুকাছাপা লকাটিয়া লকাটে লুকাতে লুকান লুকানো লুকাবেন লকার লুকালে লুকায় লুকায়া লুকায়িত লুকায়ল লুকায়লি লুকি লুকিত লুকিয়ে লুকিয়েছ লুকিয়েছি লুকিয়েছিল লুকিয়েছিলাম লুকিয়েছিলি লুকিয়েছিলে লুকিয়েছিলেন লুকিয়েছিলেম লুকিয়েছিলুম লুকিয়েছিস লুকিয়েছে লুকিয়েছেন লুকিয়ো লকুচ লুকী লুকচ্ছ লুকচ্ছি লুকচ্ছিল লুকচ্ছিলাম লুকচ্ছিলি লুকচ্ছিলে লুকচ্ছিলেন লুকচ্ছিলেম লুকচ্ছিলুম লুকচ্ছিস লুকচ্ছে লুকচ্ছেন লকেট লুকো লুকোচুরি লুকোছাপা লুকোনো লকজন লুকত লুকতাম লুকতিস লুকতে লুকতেন লুকতেম লুকতুম লুকন লুকনো লকব লুকব লুকবার লুকবি লুকবে লুকবেন লুকবো লকবধারী লুকমা লুকল লকলক লকলকানি লকলকে লুকলাম লুকলি লুকলে লুকলেন লুকলেম লুকলুম লক্ষ লক্ষক লক্ষকোটি লক্ষাধিক লক্ষিএ লক্ষিত লক্ষিতা লক্ষ্য লক্ষ্যার্থ লক্ষ্যীকৃত লক্ষ্যচ্যুত লক্ষ্যযুক্ত লক্ষ্যবিন্দু লক্ষ্যবিহীন লক্ষ্যবেধ লক্ষ্যবস্তু লক্ষ্যভেদ লক্ষ্যভেদী লক্ষ্যভ্রষ্ট লক্ষ্যমাত্রা লক্ষ্যসিদ্ধি লক্ষ্যস্থল লক্ষ্যহীন লক্ষণ লক্ষণা লক্ষণাদি লক্ষণাবতী লক্ষণাবৃত্তি লক্ষণাশক্তি লক্ষণীয় লক্ষণযুক্ত লক্ষণপুর লক্ষণপ্রকাশক লক্ষণমালা লক্ষণস্বরূপ লক্ষপতি লক্ষবার লক্ষবস্তু লক্ষ্মী লক্ষ্মীকান্ত লক্ষ্মীছাড়া লক্ষ্মীজনার্দন লক্ষ্মীতুল্যা লক্ষ্মীদেবী লক্ষ্মীনারায়ণ লক্ষ্মীন্দর লক্ষ্মীন্দ্র লক্ষ্মীপেঁচা লক্ষ্মীপূজা লক্ষ্মীপতি লক্ষ্মীপুর লক্ষ্মীপূর্ণিমা লক্ষ্মীপুষ্প লক্ষ্মীবাজার লক্ষ্মীবান লক্ষ্মীবিলাস লক্ষ্মীবন্ত লক্ষ্মীভাণ্ডার লক্ষ্মীমণি লক্ষ্মীমন্ত লক্ষ্মীশ্রী লক্ষ্মীস্বরূপ লক্ষ্মীস্বরূপিণী লক্ষ্মণ লক্ষলক্ষ লক্ষসংখ্যক লক্ষস্থল লুক্সেমবার্গ লুক্সেমবার্গীয় লুকয় লখ লখই লখা লখাই লখিন্দর লখিমী লখলাইন লগ লগআউট লগইন লগা লগারিদম লগারিদমীয় লগারিদমভিত্তিক লগি লগী লগে লগেজ লগন লগ্ন লগ্নক লগ্নকা লগ্নকাল লগ্না লগ্নাচার্য লগ্নি লগ্নিপত্র লগ্নী লগ্নীকরণ লগ্নীপত্র লগ্নপত্র লগ্নব্যঞ্জন লগ্নভ্রষ্ট লগ্নভ্রষ্টা লগনসা লগ্নস্থান লগবই লগবুক লগবগ লগবগে লগুর লগুড় লগুড়াঘাত লগুড়াহত লঘু লঘূ লঘুকায় লঘূকৃত লঘুক্রিয়া লঘূকরণ লঘুগামী লঘুগুরু লঘুগুরুজ্ঞান লঘুগুরুবোধ লঘি লঘিমা লঘিষ্ঠ লঘিষ্ঠা লঘুচাল লঘুচিত্ত লঘুচেতা লঘীয়ান লঘীয়সী লঘুজাতি লঘুজ্ঞান লঘুতা লঘুত্ব লঘুতম লঘুতর লঘুদণ্ড লঘুধ্বনি লঘুধ্বনিযুক্ত লঘুপাক লঘুপাঠ লঘুপদ লঘুপ্রকৃতি লঘ্বি লঘুভার লঘুভোজন লঘুমস্তিষ্ক লঘুসংগীত লঘুস্বর লঘুহস্ত লঙ লঙ্কা লঙ্কাকাণ্ড লঙ্কাদাহকারী লঙ্কাদাহী লঙ্কাদাহন লঙ্কাদ্বীপ লঙ্কাদহন লঙ্কাধিপতি লঙ্কাধ্বংস লঙ্কাপতি লঙ্কাপুরী লঙ্কাফোড়ন লঙ্কাবাটা লঙ্কাভাগ লঙ্কারাজ্য লঙ্কেশ লঙ্গ লুঙ্গি লুঙ্গী লঙ্গর লঙ্গরখানা লঙ্গড় লঙ্ঘ লঙ্ঘা লঙ্ঘিত লঙ্ঘন লঙ্ঘনকারী লঙ্ঘনীয় লুঙি লুঙী লা লাই লাইক লাইকলি লাইগেজ লাইগেশন লাইট লাইটার লাইটিং লাইটস লাইটহাউজ লাইটহাউস লাইন লাইনআপ লাইনকাটা লাইনার লাইনি লাইনিং লাইনটানা লাইনদুটি লাইফ লাইফইন্সিওরেন্স লাইফটাইম লাইফপলিসি লাইফবেল্ট লাইফবোট লাইফবয় লাইব্রেরি লাইব্রেরিয়ান লাইব্রেরী লাইভ লাইভক্রাইম লাইভটাইম লাইম লাইলাক লাইলাতুলকদর লাইসেন্স লাইসেন্সকরণ লাইসেন্সযুক্ত লাইসেন্সধারী লাইসেন্সহীন লাইসোজাইম লাইসোজোম লাউ লাউগাছ লাউঞ্জ লাউড লাউডগা লাউডস্পিকার লাউমাচা লাউশাক লাউয়েরডগা লাওস লাওয়ারিশ লাওয়ারেশ লাওয়ারেস লাক লাকি লাক্ষা লাক্ষাকীট লাক্ষাজাত লাক্ষাতরু লাক্ষাদ্বীপ লাক্ষারস লাক্ষিক লাক্ষ্যিক লাক্ষণিক লাক্ষণ্য লাকসাম লাকড়ি লাকড়িজ্বলা লাখ লাখেরাজ লাখেলাখে লাখো লাখোবার লাখোলাখো লাখপতি লাগ লাগু লাগুক লাগা লাগাই লাগাইও লাগাইছিলাম লাগাইছে লাগাইত লাগাইতাম লাগাইতিস লাগাইতে লাগাইতেছ লাগাইতেছি লাগাইতেছিল লাগাইতেছিলাম লাগাইতেছিলি লাগাইতেছিলে লাগাইতেছিলেন লাগাইতেছিস লাগাইতেছে লাগাইতেছেন লাগাইতেন লাগাইব লাগাইবা লাগাইবার লাগাইবি লাগাইবে লাগাইবেন লাগাইল লাগাইলাম লাগাইলি লাগাইলে লাগাইলেন লাগাইয়া লাগাইয়াছ লাগাইয়াছি লাগাইয়াছিল লাগাইয়াছিলাম লাগাইয়াছিলি লাগাইয়াছিলে লাগাইয়াছিলেন লাগাইয়াছিস লাগাইয়াছে লাগাইয়াছেন লাগাইয়ো লাগাক লাগাচ্ছ লাগাচ্ছি লাগাচ্ছিল লাগাচ্ছিলাম লাগাচ্ছিলি লাগাচ্ছিলে লাগাচ্ছিলেন লাগাচ্ছিলেম লাগাচ্ছিলুম লাগাচ্ছিস লাগাচ্ছে লাগাচ্ছেন লাগাছে লাগাত লাগাতাম লাগাতার লাগাতিস লাগাতে লাগাতেন লাগাতেম লাগাতুম লাগাতর লাগান লাগানি লাগানিভাঙ্গানি লাগানিভাঙানি লাগানো লাগাব লাগাবার লাগাবি লাগাবে লাগাবেন লাগাবো লাগাম লাগামাত্র লাগামছাড়া লাগামহীন লাগাল লাগালাগি লাগালাম লাগালি লাগালে লাগালেন লাগালেম লাগালুম লাগাস লাগাড় লাগায়েৎ লাগি লাগিত লাগিতাম লাগিতিস লাগিতে লাগিতেছ লাগিতেছি লাগিতেছিল লাগিতেছিলাম লাগিতেছিলি লাগিতেছিলে লাগিতেছিলেন লাগিতেছিস লাগিতেছে লাগিতেছেন লাগিতেন লাগিব লাগিবার লাগিবি লাগিবে লাগিবেন লাগিল লাগিলাম লাগিলি লাগিলে লাগিলেন লাগিস লাগিয়া লাগিয়াছ লাগিয়াছি লাগিয়াছিল লাগিয়াছিলাম লাগিয়াছিলি লাগিয়াছিলে লাগিয়াছিলেন লাগিয়াছিস লাগিয়াছে লাগিয়াছেন লাগিয়ে লাগিয়েছ লাগিয়েছি লাগিয়েছিল লাগিয়েছিলাম লাগিয়েছিলি লাগিয়েছিলে লাগিয়েছিলেন লাগিয়েছিলেম লাগিয়েছিলুম লাগিয়েছিস লাগিয়েছে লাগিয়েছেন লাগিয়ো লাগে লাগেজ লাগেন লাগেনা লাগেনি লাগো লাগোয়া লাগছ লাগছি লাগছিল লাগছিলাম লাগছিলি লাগছিলে লাগছিলেন লাগছিলেম লাগছিলো লাগছিলুম লাগছিস লাগছে লাগছেন লাগত লাগতাম লাগতিস লাগতে লাগতেছে লাগতেন লাগতেম লাগতো লাগতুম লাগুন লাগুনা লাগব লাগবার লাগবি লাগবে লাগবেন লাগবেনা লাগবো লাগল লাগলাম লাগলি লাগলে লাগলেন লাগলেম লাগলো লাগলুম লাগসই লাঘব লাঙ্গ লাঙ্গা লাঙ্গল লাঙ্গুল লাঙ্গলকোট লাঙ্গলী লাঙ্গুলী লাঙ্গলচষা লাঙ্গলটানা লাঙ্গলদণ্ড লাঙ্গলদড়ি লাঙ্গলবন্দ লাঙল লাঙুল লাঙলা লাঙলাদি লাঙলচষা লাঙলটানা লাঙলদণ্ড লাঙলদড়ি লাঙলবন্ধ লাচার লাচারি লাচাড়ি লাচি লাচ্চি লাচ্ছি লাছি লাজ লাজওয়াব লাজুক লাজুকলতা লাজবাব লাজবন্তী লাজবন্তীরাগ লাজবর্ষণ লাজভয় লাজলজ্জা লাজশোণিমা লাঞ্চ লাঞ্চপ্যাকেট লাঞ্ছিত লাঞ্ছিতা লাঞ্ছন লাঞ্ছনা লাঞ্ছনাকারী লাঞ্ছনমুদ্রা লাট লাটু লাটা লাটাই লাটিম লাট্টু লাট্টুদার লাটুদার লাটবেলাট লাটবন্দী লাটসাহেব লাঠালাঠি লাঠি লাঠিখেলা লাঠিগাছা লাঠিচার্জ লাঠিযুক্ত লাঠিধারী লাঠিপেটা লাঠিবাজি লাঠিসোটা লাঠিসোঁটা লাঠিয়াল লাঠ্যৌষধি লাড্ডু লাতিন লাতিনা লাতিনো লাতমানাত লাথ লাথানো লাথি লাথিখেকো লাথিয়ে লাদ লাদা লাদাই লাদাবি লাদি লানত লানৎ লান্সনায়েক লাফ লাফা লাফাই লাফাইও লাফাইত লাফাইতাম লাফাইতিস লাফাইতে লাফাইতেছ লাফাইতেছি লাফাইতেছিল লাফাইতেছিলাম লাফাইতেছিলি লাফাইতেছিলে লাফাইতেছিলেন লাফাইতেছিস লাফাইতেছে লাফাইতেছেন লাফাইতেন লাফাইব লাফাইবার লাফাইবি লাফাইবে লাফাইবেন লাফাইল লাফাইলাম লাফাইলি লাফাইলে লাফাইলেন লাফাইয়া লাফাইয়াছ লাফাইয়াছি লাফাইয়াছিল লাফাইয়াছিলাম লাফাইয়াছিলি লাফাইয়াছিলে লাফাইয়াছিলেন লাফাইয়াছিস লাফাইয়াছে লাফাইয়াছেন লাফাইয়ো লাফাক লাফাঙ্গা লাফাচ্ছ লাফাচ্ছি লাফাচ্ছিল লাফাচ্ছিলাম লাফাচ্ছিলি লাফাচ্ছিলে লাফাচ্ছিলেন লাফাচ্ছিলেম লাফাচ্ছিলুম লাফাচ্ছিস লাফাচ্ছে লাফাচ্ছেন লাফাত লাফাতাম লাফাতিস লাফাতে লাফাতেন লাফাতেম লাফাতুম লাফান লাফানি লাফানে লাফানো লাফাব লাফাবার লাফাবি লাফাবে লাফাবেন লাফাবো লাফাল লাফালাফি লাফালাম লাফালি লাফালে লাফালেন লাফালেম লাফালুম লাফি লাফিয়া লাফিয়ে লাফিয়েছ লাফিয়েছি লাফিয়েছিল লাফিয়েছিলাম লাফিয়েছিলি লাফিয়েছিলে লাফিয়েছিলেন লাফিয়েছিলেম লাফিয়েছিলুম লাফিয়েছিস লাফিয়েছে লাফিয়েছেন লাফিয়ো লাফঝাঁপ লাফদেওয়া লাফমারা লাফরা লাফড়া লাব লাবক লাবণ লাবণি লাবণিক লাবণী লাবণ্য লাবণ্যার্জিত লাবণ্যচঞ্চল লাবণ্যযুক্ত লাবণ্যময় লাবণ্যময়ী লাবণ্যময়তা লাবণ্যহীন লাবণ্যহীনা লাবনি লাবনী লাবড়া লাভ লাভকাব্য লাভকারী লাভকরা লাভক্ষতি লাভা লাভাংশ লাভার লাভিং লাভেমূলে লাভজনক লাভজনকভাবে লাভবান লাভবার্ডস লাভলেস লাভলোকসান লাভসহ লাভহীন লামা লামাপাড়া লাম্পট্য লাম্বাএ লামহে লার্নার লার্নিং লার্নড লার্ভা লাল লালকোর্তা লালকুঠি লালকমল লালকুর্তা লালখান লালগঞ্জ লালঘোড়া লালা লালাক্ষরণ লালাগ্রন্থি লালাজাত লালাযুক্ত লালাটিক লালাময় লালাস্রাব লালায়িত লালায়িতা লালি লালিকা লালিকাধিক্য লালিকানাশ লালিকানাশক লালিত লালিত্য লালিতপালিত লালিম লালিমা লালচ লালচাঁদ লালচে লালচোখ লালঝাণ্ডা লালদালান লালদিঘি লালদিঘী লালদীঘি লালন লালনগীতি লালনপালন লালনফকির লালপাগড়ি লালপানি লালপেড়ে লালপদ্ম লালপুর লালফিতে লালবাগ লালবাগকেল্লা লালবাগথানা লালবাতি লালবাহাদুর লালবর্ণ লালবর্ণযুক্ত লালমুখ লালমুখো লালমাই লালমাটিয়া লালমোহন লালমতি লালমদ লালমনিরহাট লালরং লালরঙ লালশাক লালস লালসা লালসাকামনা লালসাযুক্ত লালসারূপ লালসালু লালসাহীন লাশ লাশকাটা লাশরিক লাস লাসগতি লাস্ট লাস্যযুক্ত লাস্যময় লাস্যময়ী লাসসি লাহু লাহা লাহানতি লাহিড়ী লাহোর লাহোরি লাহুরি লাহরী লাড়ু লাড়কা লাড়ুগোপাল লায়ার লায়েক লায়ন লায়ন্স লি লিংক লিংকধারী লিউকেমিয়া লিউসিন লিও লিওনার্দো লিক লিকুইড লিকার লিকি লিকুচ লিকলিক লিকলিকে লিখ লিখক লিখুক লিখা লিখাই লিখাইও লিখাইত লিখাইতাম লিখাইতিস লিখাইতে লিখাইতেছ লিখাইতেছি লিখাইতেছিল লিখাইতেছিলাম লিখাইতেছিলি লিখাইতেছিলে লিখাইতেছিলেন লিখাইতেছিস লিখাইতেছে লিখাইতেছেন লিখাইতেন লিখাইব লিখাইবার লিখাইবি লিখাইবে লিখাইবেন লিখাইল লিখাইলাম লিখাইলি লিখাইলে লিখাইলেন লিখাইয়া লিখাইয়াছ লিখাইয়াছি লিখাইয়াছিল লিখাইয়াছিলাম লিখাইয়াছিলি লিখাইয়াছিলে লিখাইয়াছিলেন লিখাইয়াছিস লিখাইয়াছে লিখাইয়াছেন লিখাইয়ো লিখাক লিখাজুখা লিখান লিখানো লিখালিখি লিখাস লিখি লিখিত লিখিতাম লিখিতিস লিখিতে লিখিতেছ লিখিতেছি লিখিতেছিল লিখিতেছিলাম লিখিতেছিলি লিখিতেছিলে লিখিতেছিলেন লিখিতেছিস লিখিতেছে লিখিতেছেন লিখিতেন লিখিতব্য লিখিতভাবে লিখিনা লিখিব লিখিবার লিখিবি লিখিবে লিখিবেন লিখিল লিখিলাম লিখিলি লিখিলে লিখিলেন লিখিস লিখিয়া লিখিয়াছ লিখিয়াছি লিখিয়াছিল লিখিয়াছিলাম লিখিয়াছিলি লিখিয়াছিলে লিখিয়াছিলেন লিখিয়াছিস লিখিয়াছে লিখিয়াছেন লিখিয়ে লিখিয়েছ লিখিয়েছি লিখিয়েছিল লিখিয়েছিলাম লিখিয়েছিলি লিখিয়েছিলে লিখিয়েছিলেন লিখিয়েছিলেম লিখিয়েছিলুম লিখিয়েছিস লিখিয়েছে লিখিয়েছেন লিখিয়েপড়িয়ে লিখিয়ো লিখচ্ছ লিখচ্ছি লিখচ্ছিল লিখচ্ছিলাম লিখচ্ছিলি লিখচ্ছিলে লিখচ্ছিলেন লিখচ্ছিলেম লিখচ্ছিলুম লিখচ্ছিস লিখচ্ছে লিখচ্ছেন লিখে লিখেছ লিখেছি লিখেছিল লিখেছিলাম লিখেছিলি লিখেছিলে লিখেছিলেন লিখেছিলেম লিখেছিলুম লিখেছিস লিখেছে লিখেছেন লিখেতে লিখেন লিখো লিখছ লিখছি লিখছিনা লিখছিল লিখছিলাম লিখছিলি লিখছিলে লিখছিলেন লিখছিলেম লিখছিলুম লিখছিস লিখছে লিখছেন লিখত লিখতাম লিখতিস লিখতে লিখতেন লিখতেম লিখতুম লিখন লিখুন লিখনি লিখনে লিখনো লিখনযোগ্য লিখনপটু লিখনপঠন লিখনপদ্ধতি লিখনপ্রণালী লিখনরীতি লিখনশৈলী লিখব লিখবা লিখবার লিখবি লিখবে লিখবেন লিখবো লিখল লিখলাম লিখলি লিখলে লিখলেন লিখলেম লিখলুম লিখস লিগ লিগামেন্ট লিগাল লিগ্যাল লিঙ্ক লিঙ্গ লিঙ্গায়েত লিঙ্গত্বক লিঙ্গদেহ লিঙ্গধর লিঙ্গপুরাণ লিঙ্গবোধক লিঙ্গভিত্তিক লিঙ্গভেদ লিঙ্গমুণ্ড লিঙ্গমূর্তি লিঙ্গশরীর লিচু লিজ লিজেন্ড লিজেন্ডারি লিজেন্ড্রি লিজ্জে লিটার লিটারে লিটারেচার লিটল লিড লিডার লিডারশীপ লিডিং লিডিংকাপ লিডেন লিথিয়াম লিথোগ্রাফি লিথোগ্রাফিক লিথুনিয়া লিথুয়ানিয়া লিনাক্স লিনেন লিপ লিপইয়ার লিপি লিপিকা লিপিকার লিপিকৌশল লিপিকর লিপিকলা লিপিকুশল লিপিকুশলতা লিপিগত লিপিচাতুর্য লিপিচিত্র লিপিড লিপিতত্ত্ব লিপিধারা লিপিপদ্ধতি লিপিপ্রেরণ লিপিপ্রমাদ লিপিফলক লিপিবিদ্যা লিপিবিধি লিপিবিন্যাস লিপিবদ্ধ লিপিবদ্ধকরণ লিপিভুক্ত লিপিমূল লিপ্যন্তর লিপ্যন্তরিত লিপ্যন্তরীকরণ লিপ্ত লিপ্ততা লিপ্তপাদ লিপ্তপদ লিপন লিপ্সু লিপ্সা লিপ্সাযুক্ত লিপস্টিক লিফট লিফলেট লিবারেল লিবারেশন লিবার্টি লিবিয়া লিবীয় লিব্রা লিভার লিভারপুল লিভারসিরোসিস লিভিং লিভিংস্টোন লিমিটেড লিমন লিমনেড লিম্ফ লিম্ফোমা লিরা লিরিক লিলি লিলিপুট লিল্লা লিল্লাহ লিশটেনস্টাইন লিসেন লিসেনার লিস্ট লিস্টি লিস্টিং লচ লীগ লীগজয়ী লুচি লুচিমাংস লুচ্চা লুচ্চামি লীজ লীঢ় লীন লীনা লীনাঙ্গিনী লীনতা লচপচ লীলা লীলাকানন লীলাকমল লীলাক্ষেত্র লীলাখেলা লীলাগান লীলাচঞ্চল লীলাযুক্ত লীলাপদ্ম লীলাপূর্ণ লীলাবতী লীলাভূমি লীলাভরে লীলামত্তা লীলাময় লীলাময়ী লীলাস্থলী লীলাসহচর লীলায়িত লীলায়িতা লীলায়িতভাবে লে লেং লেংচা লেংচাই লেংচাইও লেংচাইত লেংচাইতাম লেংচাইতিস লেংচাইতে লেংচাইতেছ লেংচাইতেছি লেংচাইতেছিল লেংচাইতেছিলাম লেংচাইতেছিলি লেংচাইতেছিলে লেংচাইতেছিলেন লেংচাইতেছিস লেংচাইতেছে লেংচাইতেছেন লেংচাইতেন লেংচাইব লেংচাইবার লেংচাইবি লেংচাইবে লেংচাইবেন লেংচাইল লেংচাইলাম লেংচাইলি লেংচাইলে লেংচাইলেন লেংচাইয়া লেংচাইয়াছ লেংচাইয়াছি লেংচাইয়াছিল লেংচাইয়াছিলাম লেংচাইয়াছিলি লেংচাইয়াছিলে লেংচাইয়াছিলেন লেংচাইয়াছিস লেংচাইয়াছে লেংচাইয়াছেন লেংচাইয়ো লেংচাক লেংচাচ্ছ লেংচাচ্ছি লেংচাচ্ছিল লেংচাচ্ছিলাম লেংচাচ্ছিলি লেংচাচ্ছিলে লেংচাচ্ছিলেন লেংচাচ্ছিলেম লেংচাচ্ছিলুম লেংচাচ্ছিস লেংচাচ্ছে লেংচাচ্ছেন লেংচাত লেংচাতাম লেংচাতিস লেংচাতে লেংচাতেন লেংচাতেম লেংচাতুম লেংচান লেংচানো লেংচাব লেংচাবার লেংচাবি লেংচাবে লেংচাবেন লেংচাবো লেংচাল লেংচালাম লেংচালি লেংচালে লেংচালেন লেংচালেম লেংচালুম লেংচাস লেংচে লেংচেছ লেংচেছি লেংচেছিল লেংচেছিলাম লেংচেছিলি লেংচেছিলে লেংচেছিলেন লেংচেছিলেম লেংচেছিলুম লেংচেছিস লেংচেছে লেংচেছেন লেংচো লেংটা লেংটি লেংড়া লেঅফ লেআ লেআউট লেই লেইগা লেউটা লেউটিয়া লেওন লেক লেকিন লেকচার লেকচারার লেকচারশিপ লেকচরর লেকস লেখ লেখক লেখকগিরি লেখকচক্র লেখকজন লেখকদ্বয় লেখা লেখাক লেখাচ্ছ লেখাচ্ছি লেখাচ্ছিল লেখাচ্ছিলাম লেখাচ্ছিলি লেখাচ্ছিলে লেখাচ্ছিলেন লেখাচ্ছিলেম লেখাচ্ছিলুম লেখাচ্ছিস লেখাচ্ছে লেখাচ্ছেন লেখাজোকা লেখাজোঁকা লেখাজোখা লেখাজোঁখা লেখাত লেখাতাম লেখাতিস লেখাতে লেখাতেন লেখাতেম লেখাতুম লেখান লেখানো লেখাপড়া লেখাব লেখাবার লেখাবি লেখাবে লেখাবেন লেখাবো লেখাল লেখালাম লেখালি লেখালিখি লেখালে লেখালেখি লেখালেন লেখালেম লেখালুম লেখাস লেখি লেখিকা লেখিত লেখচিত্র লেখে লেখেছি লেখেন লেখেনি লেখেননি লেখো লেখ্য লেখ্যোপকরণ লেখ্যরূপ লেখতে লেখন লেখনী লেখনীয় লেখনশৈলী লেখব লেখবার লেখমালা লেগ লেগেছ লেগেছি লেগেছিল লেগেছিলাম লেগেছিলি লেগেছিলে লেগেছিলেন লেগেছিলেম লেগেছিলুম লেগেছিস লেগেছে লেগেছেন লেগব্রেক লেগস্পিন লেঙ লেঙ্গ লেঙ্গি লেঙ্গী লেঙ্গচা লেঙ্গট লেঙ্গটা লেঙ্গটি লেঙ্গরা লেঙ্গুড় লেঙচা লেঙচানো লেঙট লেঙটা লেঙরা লেঙুড় লেচি লেচী লেজ লেজওয়ালা লেজকাটা লেজা লেজামুড়া লেজামুড়ো লেজার লেজেগোবরে লেজঝোলা লেজযুক্ত লেজধরা লেজনাচানো লেজনাচুনে লেজবিহীন লেজসহ লেজহীন লেজুড় লেজুড়বৃত্তি লেট লেটা লেটার লেটারবক্স লেটারস লেটন লেটলতিফ লেঠা লেঠেল লেঠেলি লেড লেডি লেডিকেনি লেডী লেতি লেত্তি লেদা লেদাপোকা লেদার লেদাড়ু লেদাড়ে লেদমেশিন লেন লেনাদেনা লেনিনবাদ লেনে লেনদেন লেনদেনজনিত লেনদেনসাপেক্ষে লেন্স লেপ লেপক লেপুক লেপা লেপাই লেপাইও লেপাইত লেপাইতাম লেপাইতিস লেপাইতে লেপাইতেছ লেপাইতেছি লেপাইতেছিল লেপাইতেছিলাম লেপাইতেছিলি লেপাইতেছিলে লেপাইতেছিলেন লেপাইতেছিস লেপাইতেছে লেপাইতেছেন লেপাইতেন লেপাইব লেপাইবার লেপাইবি লেপাইবে লেপাইবেন লেপাইল লেপাইলাম লেপাইলি লেপাইলে লেপাইলেন লেপাইয়া লেপাইয়াছ লেপাইয়াছি লেপাইয়াছিল লেপাইয়াছিলাম লেপাইয়াছিলি লেপাইয়াছিলে লেপাইয়াছিলেন লেপাইয়াছিস লেপাইয়াছে লেপাইয়াছেন লেপাইয়ো লেপাক লেপাচ্ছ লেপাচ্ছি লেপাচ্ছিল লেপাচ্ছিলাম লেপাচ্ছিলি লেপাচ্ছিলে লেপাচ্ছিলেন লেপাচ্ছিলেম লেপাচ্ছিলুম লেপাচ্ছিস লেপাচ্ছে লেপাচ্ছেন লেপাত লেপাতাম লেপাতিস লেপাতে লেপাতেন লেপাতেম লেপাতুম লেপান লেপানো লেপাপোঁছা লেপাব লেপাবার লেপাবি লেপাবে লেপাবেন লেপাবো লেপার্ড লেপাল লেপালাম লেপালি লেপালে লেপালেন লেপালেম লেপালুম লেপাস লেপি লেপিত লেপিতাম লেপিতিস লেপিতে লেপিতেছ লেপিতেছি লেপিতেছিল লেপিতেছিলাম লেপিতেছিলি লেপিতেছিলে লেপিতেছিলেন লেপিতেছিস লেপিতেছে লেপিতেছেন লেপিতেন লেপিব লেপিবার লেপিবি লেপিবে লেপিবেন লেপিল লেপিলাম লেপিলি লেপিলে লেপিলেন লেপিস লেপিয়া লেপিয়াছ লেপিয়াছি লেপিয়াছিল লেপিয়াছিলাম লেপিয়াছিলি লেপিয়াছিলে লেপিয়াছিলেন লেপিয়াছিস লেপিয়াছে লেপিয়াছেন লেপিয়ে লেপিয়েছ লেপিয়েছি লেপিয়েছিল লেপিয়েছিলাম লেপিয়েছিলি লেপিয়েছিলে লেপিয়েছিলেন লেপিয়েছিলেম লেপিয়েছিলুম লেপিয়েছিস লেপিয়েছে লেপিয়েছেন লেপিয়ো লেপচা লেপে লেপেছ লেপেছি লেপেছিল লেপেছিলাম লেপেছিলি লেপেছিলে লেপেছিলেন লেপেছিলেম লেপেছিলুম লেপেছিস লেপেছে লেপেছেন লেপেন লেপো লেপছ লেপছি লেপছিল লেপছিলাম লেপছিলি লেপছিলে লেপছিলেন লেপছিলেম লেপছিলুম লেপছিস লেপছে লেপছেন লেপ্য লেপটা লেপটাই লেপটাইও লেপটাইত লেপটাইতাম লেপটাইতিস লেপটাইতে লেপটাইতেছ লেপটাইতেছি লেপটাইতেছিল লেপটাইতেছিলাম লেপটাইতেছিলি লেপটাইতেছিলে লেপটাইতেছিলেন লেপটাইতেছিস লেপটাইতেছে লেপটাইতেছেন লেপটাইতেন লেপটাইব লেপটাইবার লেপটাইবি লেপটাইবে লেপটাইবেন লেপটাইল লেপটাইলাম লেপটাইলি লেপটাইলে লেপটাইলেন লেপটাইয়া লেপটাইয়াছ লেপটাইয়াছি লেপটাইয়াছিল লেপটাইয়াছিলাম লেপটাইয়াছিলি লেপটাইয়াছিলে লেপটাইয়াছিলেন লেপটাইয়াছিস লেপটাইয়াছে লেপটাইয়াছেন লেপটাইয়ো লেপটাক লেপটাচ্ছ লেপটাচ্ছি লেপটাচ্ছিল লেপটাচ্ছিলাম লেপটাচ্ছিলি লেপটাচ্ছিলে লেপটাচ্ছিলেন লেপটাচ্ছিলেম লেপটাচ্ছিলুম লেপটাচ্ছিস লেপটাচ্ছে লেপটাচ্ছেন লেপটাত লেপটাতাম লেপটাতিস লেপটাতে লেপটাতেন লেপটাতেম লেপটাতুম লেপটান লেপটানো লেপটাব লেপটাবার লেপটাবি লেপটাবে লেপটাবেন লেপটাবো লেপটাল লেপটালাম লেপটালি লেপটালে লেপটালেন লেপটালেম লেপটালুম লেপটাস লেপটে লেপটেছ লেপটেছি লেপটেছিল লেপটেছিলাম লেপটেছিলি লেপটেছিলে লেপটেছিলেন লেপটেছিলেম লেপটেছিলুম লেপটেছিস লেপটেছে লেপটেছেন লেপটো লেপত লেপতাম লেপতিস লেপতে লেপতেন লেপতেম লেপতোশক লেপতুম লেপন লেপুন লেপনকারী লেপনীয় লেপনযোগ্য লেপব লেপবার লেপবি লেপবে লেপবেন লেপবো লেপমুড়ি লেপ্রি লেপ্রোমাটাস লেপ্রসি লেপল লেপলাম লেপলি লেপলে লেপলেন লেপলেম লেপলুম লেফাফা লেফাফাদোরস্ত লেফাফাদুরস্ত লেফট লেফটেনেন্ট লেফটেন্যান্ট লেফটরাইট লেবু লেবুগাছ লেবাছ লেবানন লেবার লেবারার লেবাস লেবাসপোরস্তি লেবাসপরস্তি লেবেল লেবেলকৃত লেভি লেভেল লেমিনেশন লেমন লেমনিক লেমনেড লেলা লেলাই লেলাইও লেলাইত লেলাইতাম লেলাইতিস লেলাইতে লেলাইতেছ লেলাইতেছি লেলাইতেছিল লেলাইতেছিলাম লেলাইতেছিলি লেলাইতেছিলে লেলাইতেছিলেন লেলাইতেছিস লেলাইতেছে লেলাইতেছেন লেলাইতেন লেলাইব লেলাইবার লেলাইবি লেলাইবে লেলাইবেন লেলাইল লেলাইলাম লেলাইলি লেলাইলে লেলাইলেন লেলাইয়া লেলাইয়াছ লেলাইয়াছি লেলাইয়াছিল লেলাইয়াছিলাম লেলাইয়াছিলি লেলাইয়াছিলে লেলাইয়াছিলেন লেলাইয়াছিস লেলাইয়াছে লেলাইয়াছেন লেলাইয়ো লেলাক লেলাক্ষেপা লেলাক্ষ্যাপা লেলাখেপা লেলাচ্ছ লেলাচ্ছি লেলাচ্ছিল লেলাচ্ছিলাম লেলাচ্ছিলি লেলাচ্ছিলে লেলাচ্ছিলেন লেলাচ্ছিলেম লেলাচ্ছিলুম লেলাচ্ছিস লেলাচ্ছে লেলাচ্ছেন লেলাত লেলাতাম লেলাতিস লেলাতে লেলাতেন লেলাতেম লেলাতুম লেলান লেলানো লেলাব লেলাবার লেলাবি লেলাবে লেলাবেন লেলাবো লেলাল লেলালাম লেলালি লেলালে লেলালেন লেলালেম লেলালুম লেলাস লেলি লেলিনগ্রাদ লেলিহ লেলিহান লেলিয়ে লেলিয়েছ লেলিয়েছি লেলিয়েছিল লেলিয়েছিলাম লেলিয়েছিলি লেলিয়েছিলে লেলিয়েছিলেন লেলিয়েছিলেম লেলিয়েছিলুম লেলিয়েছিস লেলিয়েছে লেলিয়েছেন লেলিয়ো লেশ লেশমাত্র লেস লেসার লেসিথিন লেসবিয়ান লেহ লেহুঁ লেহা লেহাজ লেহী লেহেঙ্গা লেহ্য লেহন লেহনকারী লেহনীয় লেহমান লেড়কা লেড়কি লেড়কী লেড়ে লেয়ার লেয়ারিং লৈখিক লৈঙ্গ লৈঙ্গিক লো লোআ লোক লোকউৎসব লোককাহিনী লোককথা লোকক্রীড়া লোকক্ষয় লোকগাথা লোকগান লোকগীতি লোকগোষ্ঠী লোকগণনা লোকগল্প লোকা লোকাক লোকাকীর্ণ লোকাচার লোকাচ্ছ লোকাচ্ছি লোকাচ্ছিল লোকাচ্ছিলাম লোকাচ্ছিলি লোকাচ্ছিলে লোকাচ্ছিলেন লোকাচ্ছিলেম লোকাচ্ছিলুম লোকাচ্ছিস লোকাচ্ছে লোকাচ্ছেন লোকাত লোকাতাম লোকাতিগ লোকাতিস লোকাতীত লোকাতে লোকাতেন লোকাতেম লোকাতুম লোকাধিক্য লোকান লোকানো লোকান্তর লোকান্তরগমন লোকান্তরিত লোকান্তরিতা লোকাপাবাদ লোকাপবাদ লোকাব লোকাবার লোকাবি লোকাবে লোকাবেন লোকাবো লোকাভাব লোকারণ্য লোকাল লোকালাম লোকালি লোকালে লোকালেন লোকালেম লোকালবোর্ড লোকালুম লোকালয় লোকায় লোকায়ত লোকায়তিক লোকিত লোকচক্ষু লোকচিত্র লোকচেনা লোকচরিত্র লোকচলাচল লোকেশ লোকেশন লোকো লোকোক্তি লোকোত্তর লোকজ লোকজন লোকজমা লোকজমানো লোকজসুর লোকযাত্রা লোকযাত্রী লোকত লোকদেখানো লোকধর্ম লোকনাট্য লোকনাথ লোকনিন্দা লোকনৃত্য লোকপাল লোকপিতামহ লোকপ্রিয় লোকপ্রবাদ লোকপ্রবাহ লোকপরম্পরা লোকপ্রশাসন লোকপ্রসিদ্ধ লোকপ্রসিদ্ধি লোকবাহ্য লোকবিশ্বাস লোকব্যবহার লোকবল লোকবুলি লোকবসতি লোকবহির্ভূত লোকভঙ্গিমা লোকভাষা লোকমুখ লোকমা লোকমান লোকমত লোকরে লোকরঞ্জন লোকরহস্য লোকলাজ লোকলীলা লোকলৌকিকতা লোকলজ্জা লোকলশকর লোকলস্কর লোকশিক্ষা লোকশিল্প লোকশিল্পী লোকশ্রুতি লোকসংখ্যা লোকসংগীত লোকসংগ্রহ লোকসংবাদ লোকসংস্কৃতি লোকসঙ্গীত লোকসান লোকসানাদি লোকসানি লোকসাহিত্য লোকসেবা লোকস্থিতি লোকসভা লোকসমক্ষে লোকসমাগম লোকসমাজ লোকসম্প্রদায় লোকহাসানো লোকহাসাহাসি লোকহিত লোকহিতকর লোকহিতৈষী লোগো লোচ্চা লোচন লোট লোটা লোটাক লোটাকম্বল লোটাচ্ছ লোটাচ্ছি লোটাচ্ছিল লোটাচ্ছিলাম লোটাচ্ছিলি লোটাচ্ছিলে লোটাচ্ছিলেন লোটাচ্ছিলেম লোটাচ্ছিলুম লোটাচ্ছিস লোটাচ্ছে লোটাচ্ছেন লোটাত লোটাতাম লোটাতিস লোটাতে লোটাতেন লোটাতেম লোটাতুম লোটান লোটানো লোটাব লোটাবার লোটাবি লোটাবে লোটাবেন লোটাবো লোটাল লোটালাম লোটালি লোটালে লোটালেন লোটালেম লোটালুম লোটাস লোটায় লোটায়ল লোটে লোটেন লোটেম্পারেচর লোটন লোটবার লোড লোডশেডিং লোণ লোত লোতক লোথ লোধ লোধ্র লোধ্রগাছ লোধরেণু লোধ্রফুল লোধ্ররেণু লোনা লোনাজমি লোনাজল লোনাধরা লোনলি লোপ লোপকারী লোপাট লোপাপত্তি লোপপ্রাপ্ত লোপপ্রাপ্তি লোপহীন লোপহীনতা লোফ লোফা লোফার লোফালুফি লোফে লোফেন লোফবার লোব লোবান লোবানদানি লোবিউল লোভ লোভা লোভাতুর লোভাতুরা লোভানো লোভার্ত লোভিত লোভিত্ব লোভিষ্টি লোভিষ্ঠ লোভী লোভজনক লোভজনকতা লোভজনিত লোভ্য লোভযুক্ত লোভতুর লোভতুরা লোভন লোভনীয় লোভনীয়া লোভপীড়িত লোভপ্রদর্শন লোভহীন লোভহীনতা লোম লোমকূপ লোমা লোমাঞ্চ লোমাঞ্চিত লোমাদি লোমাবলি লোমাবলী লোমোদ্গম লোমোদ্ভেদ লোমজ লোমজাত লোমযুক্ত লোমফোড়া লোমফোঁড়া লোমমুক্ত লোমরাজি লোমশ লোমহীন লোমহর্ষ লোমহর্ষক লোমহর্ষণ লোর লোল লোলা লোলাঙ্গী লোলাজিহ্ব লোলায়মান লোলিত লোলিতা লোলচর্ম লোলজিহ্বা লোলদৃষ্টি লোলুপ লোলুপতা লোলুভ লোষ্ট্র লোষ্ট্রনিক্ষেপ লোহ লোহু লোহা লোহাগড়া লোহাচুর লোহানির্মিত লোহাপট্টি লোহামুখ লোহার লোহারতার লোহালক্কড় লোহাসমৃদ্ধ লোহি লোহিত লোহিতক লোহিতাঙ্গ লোহিতাভ লোহিতসাগর লোহিতসমুদ্র লোহসহ লোড় লোড়া লোড়সি লোয়াজিমা লোয়ার লৌকিক লৌকিকতা লৌকতা লছিমী লছমী লৌল্য লৌলমর্ম লৌহ লৌহইস্পাত লৌহকার লৌহকণ্টক লৌহকপাট লৌহখণ্ড লৌহখণ্ডাদি লৌহাবরণ লৌহিত্য লৌহিত্যগর্ভ লৌহজং লৌহজীবী লৌহযুক্ত লৌহদণ্ড লৌহদ্রব্য লৌহপাত লৌহপাত্র লৌহপথ লৌহফলক লৌহব্যবসায়ী লৌহবর্ত্ম লৌহভাণ্ড লৌহমানব লৌহমল লৌহময় লৌহশলাকা লৌহস্তম্ভ লৌহসমৃদ্ধ লজ লুজ লুজার লজিং লজিক লজিজ লজিস্টিক লজিস্টিকাল লজিস্টিকস লজেঞ্চুস লজেন্স লজ্জা লজ্জাকর লজ্জাজনক লজ্জাজড়িত লজ্জাযুক্ত লজ্জাদায়ক লজ্জানত লজ্জাবান লজ্জাবোধ লজ্জাবতী লজ্জাবত্তা লজ্জাবনত লজ্জাবশত লজ্জারুণ লজ্জালু লজ্জাশীল লজ্জাশীলা লজ্জাশীলতা লজ্জাশূন্য লজ্জাশূন্যা লজ্জাশূন্যতা লজ্জাশরম লজ্জাসংকোচ লজ্জাসংকোচহীন লজ্জাহীন লজ্জাহীনা লজ্জাহীনতা লজ্জিত লজ্জিতা লজ্জত লজ্জমান লজ্জমানা লজঝর লজঝড় লজঞ্চুস লঝঝর লঝঝড় লঞ্চ লঞ্চঘাট লঞ্চার লঞ্চছাড়া লট লুট লটক লুটক লুটুক লটকা লটকাই লটকাইও লটকাইত লটকাইতাম লটকাইতিস লটকাইতে লটকাইতেছ লটকাইতেছি লটকাইতেছিল লটকাইতেছিলাম লটকাইতেছিলি লটকাইতেছিলে লটকাইতেছিলেন লটকাইতেছিস লটকাইতেছে লটকাইতেছেন লটকাইতেন লটকাইব লটকাইবার লটকাইবি লটকাইবে লটকাইবেন লটকাইল লটকাইলাম লটকাইলি লটকাইলে লটকাইলেন লটকাইয়া লটকাইয়াছ লটকাইয়াছি লটকাইয়াছিল লটকাইয়াছিলাম লটকাইয়াছিলি লটকাইয়াছিলে লটকাইয়াছিলেন লটকাইয়াছিস লটকাইয়াছে লটকাইয়াছেন লটকাইয়ো লটকাক লটকাচ্ছ লটকাচ্ছি লটকাচ্ছিল লটকাচ্ছিলাম লটকাচ্ছিলি লটকাচ্ছিলে লটকাচ্ছিলেন লটকাচ্ছিলেম লটকাচ্ছিলুম লটকাচ্ছিস লটকাচ্ছে লটকাচ্ছেন লটকাত লটকাতাম লটকাতিস লটকাতে লটকাতেন লটকাতেম লটকাতুম লটকান লটকানো লটকাব লটকাবার লটকাবি লটকাবে লটকাবেন লটকাবো লটকাল লটকালাম লটকালি লটকালে লটকালেন লটকালেম লটকালুম লটকাস লটকে লটকেছ লটকেছি লটকেছিল লটকেছিলাম লটকেছিলি লটকেছিলে লটকেছিলেন লটকেছিলেম লটকেছিলুম লটকেছিস লটকেছে লটকেছেন লটকো লটকন লটখট লটখটী লটা লুটা ল্যাং ল্যাংগুয়েজ ল্যাংচা ল্যাংচানো ল্যাংটা ল্যাংবোট ল্যাংড়া লুটাইও লুটাইত লুটাইতাম লুটাইতিস লুটাইতে লুটাইতেছ লুটাইতেছি লুটাইতেছিল লুটাইতেছিলাম লুটাইতেছিলি লুটাইতেছিলে লুটাইতেছিলেন লুটাইতেছিস লুটাইতেছে লুটাইতেছেন লুটাইতেন লুটাইব লুটাইবার লুটাইবি লুটাইবে লুটাইবেন লুটাইল লুটাইলাম লুটাইলি লুটাইলে লুটাইলেন লুটাইয়া লুটাইয়াছ লুটাইয়াছি লুটাইয়াছিল লুটাইয়াছিলাম লুটাইয়াছিলি লুটাইয়াছিলে লুটাইয়াছিলেন লুটাইয়াছিস লুটাইয়াছে লুটাইয়াছেন লুটাইয়ো লুটাক ল্যাকুনা ল্যাঙ ল্যাঙ্কাশায়ার ল্যাঙ্গুয়েজ ল্যাঙট ল্যাঙবোট লুটাচ্ছে ল্যাজ ল্যাজকাটা ল্যাজা ল্যাজামুড়া ল্যাজামুড়ো ল্যাজেখেলানো ল্যাজেগোবরে ল্যাজঝোলা ল্যাটিন ল্যাট্রিন ল্যাঠা লুটাতি ল্যাতপেতে ল্যাতপ্যাত ল্যাদাড়ে লুটান লুটানো ল্যান্ড ল্যান্ডিং ল্যান্ডফোন ল্যান্ডমাইন ল্যান্ডমার্ক ল্যান্ডলাইন ল্যান্ডলর্ড ল্যান্ডস্কেপ ল্যান্থানাইড ল্যানথেনাম ল্যান্স ল্যান্সনায়ক ল্যান্সনায়েক লটাপট ল্যাপটানো লুটাপুটি ল্যাপটপ ল্যাব ল্যাবেন্ডার ল্যাবরেটরি ল্যাবরেটরিস ল্যাবস ল্যাবড়া ল্যাভেন্ডার ল্যামিনেশন ল্যামডা ল্যাম্প ল্যাম্পপোস্ট ল্যাম্ব ল্যাম্বডা লটারি ল্যারিনজাইটিস লুটাস লুটায়ল লুটি লুটিত লুটিতাম লুটিতিস লুটিতে লুটিতেছ লুটিতেছি লুটিতেছিল লুটিতেছিলাম লুটিতেছিলি লুটিতেছিলে লুটিতেছিলেন লুটিতেছিস লুটিতেছে লুটিতেছেন লুটিতেন লুটিব লুটিবার লুটিবি লুটিবে লুটিবেন লুটিল লুটিলাম লুটিলি লুটিলে লুটিলেন লুটিস লুটিয়া লুটিয়াছ লুটিয়াছি লুটিয়াছিল লুটিয়াছিলাম লুটিয়াছিলি লুটিয়াছিলে লুটিয়াছিলেন লুটিয়াছিস লুটিয়াছে লুটিয়াছেন লুটিয়ে লুটিয়েছ লুটিয়েছি লুটিয়েছিল লুটিয়েছিলাম লুটিয়েছিলি লুটিয়েছিলে লুটিয়েছিলেন লুটিয়েছিলেম লুটিয়েছিলুম লুটিয়েছিস লুটিয়েছে লুটিয়েছেন লুটিয়ো লুটচ্ছ লুটচ্ছি লুটচ্ছিল লুটচ্ছিলাম লুটচ্ছিলি লুটচ্ছিলে লুটচ্ছিলেন লুটচ্ছিলেম লুটচ্ছিলুম লুটচ্ছিস লুটচ্ছে লুটচ্ছেন লুটে লুটেছ লুটেছি লুটেছিল লুটেছিলাম লুটেছিলি লুটেছিলে লুটেছিলেন লুটেছিলেম লুটেছিলুম লুটেছিস লুটেছে লুটেছেন লুটেটিয়াম লুটেন লুটেপুটে লুটেরা লুটেল লুটো লুটোচ্ছে লুটোপুটি লুটছ লুটছি লুটছিল লুটছিলাম লুটছিলি লুটছিলে লুটছিলেন লুটছিলেম লুটছিলুম লুটছিস লুটছে লুটছেন লট্ট লুটত লুটতাম লুটতিস লুটতে লুটতেন লুটতেম লুটতুম লুটতরাজ লুটন লুটনো লুটপাট লটপট লটপটি লটপটে লুটব লুটবার লুটবি লুটবে লুটবেন লুটবো লটবহর ল্যুভর লটরচটর লটরপটর লুটল লুটলাম লুটলি লুটলে লুটলেন লুটলেম লুটলুম লুটস লুটয় লটুয়া লুঠ লুঠা লুঠান লুঠানো লুঠিত লুঠেরা লুঠেল লুঠতরাজ লুঠন লুঠপাট লুডু লুডো লড্ডু লড্ডুক লুণ লুণিয়া লুণ্ঠক লুণ্ঠিক লুণ্ঠিকা লুণ্ঠিত লুণ্ঠিতা লুণ্ঠ্যমান লণ্ঠন লুণ্ঠন লুণ্ঠনকারী লণ্ডভণ্ড লণ্ড্রী লুত লতা লুতা লূতা লতাই লতাইয়া লতাকাটি লতাকুঞ্জ লতাকরঞ্জ লতাগাছ লতাগুল্ম লতাগৃহ লূতাজাল লতাতন্তু লূতাতন্তু লতাদি লতান লতানিয়া লতানে লতানো লতাপাতা লতাপাশ লতাপল্লব লতাফল লতাবাড়ি লতাবিতান লতাবেষ্টিত লতামণ্ডিত লতামণ্ডপ লতায়িত লতি লতিকা লূতিকা লতিয়ে লদপদ লন লুন লুনি লুনিয়া লুনী লন্ঠন লন্ডন লন্ডনস্থ লন্ড্রি লুন্দ লুপ লপেটা লপটা লপটাই লপটাইও লপটাইত লপটাইতাম লপটাইতিস লপটাইতে লপটাইতেছ লপটাইতেছি লপটাইতেছিল লপটাইতেছিলাম লপটাইতেছিলি লপটাইতেছিলে লপটাইতেছিলেন লপটাইতেছিস লপটাইতেছে লপটাইতেছেন লপটাইতেন লপটাইব লপটাইবার লপটাইবি লপটাইবে লপটাইবেন লপটাইল লপটাইলাম লপটাইলি লপটাইলে লপটাইলেন লপটাইয়া লপটাইয়াছ লপটাইয়াছি লপটাইয়াছিল লপটাইয়াছিলাম লপটাইয়াছিলি লপটাইয়াছিলে লপটাইয়াছিলেন লপটাইয়াছিস লপটাইয়াছে লপটাইয়াছেন লপটাইয়ো লপটাক লপটাচ্ছ লপটাচ্ছি লপটাচ্ছিল লপটাচ্ছিলাম লপটাচ্ছিলি লপটাচ্ছিলে লপটাচ্ছিলেন লপটাচ্ছিলেম লপটাচ্ছিলুম লপটাচ্ছিস লপটাচ্ছে লপটাচ্ছেন লপটাত লপটাতাম লপটাতিস লপটাতে লপটাতেন লপটাতেম লপটাতুম লপটান লপটানো লপটাব লপটাবার লপটাবি লপটাবে লপটাবেন লপটাবো লপটাল লপটালাম লপটালি লপটালে লপটালেন লপটালেম লপটালপটি লপটালপটী লপটালুম লপটাস লুপটি লপটে লপটেছ লপটেছি লপটেছিল লপটেছিলাম লপটেছিলি লপটেছিলে লপটেছিলেন লপটেছিলেম লপটেছিলুম লপটেছিস লপটেছে লপটেছেন লপটো লপ্ত লুপ্ত লুপ্তি লুপ্তোদ্ধার লুপ্তপ্রায় লপরচপর লুপলাইন লপসি লপ্সিকা লুফ লুফুক লুফা লুফি লুফিত লুফিতাম লুফিতিস লুফিতে লুফিতেছ লুফিতেছি লুফিতেছিল লুফিতেছিলাম লুফিতেছিলি লুফিতেছিলে লুফিতেছিলেন লুফিতেছিস লুফিতেছে লুফিতেছেন লুফিতেন লুফিব লুফিবার লুফিবি লুফিবে লুফিবেন লুফিল লুফিলাম লুফিলি লুফিলে লুফিলেন লুফিস লুফিয়া লুফিয়াছ লুফিয়াছি লুফিয়াছিল লুফিয়াছিলাম লুফিয়াছিলি লুফিয়াছিলে লুফিয়াছিলেন লুফিয়াছিস লুফিয়াছে লুফিয়াছেন লুফিয়ো লুফে লুফেছ লুফেছি লুফেছিল লুফেছিলাম লুফেছিলি লুফেছিলে লুফেছিলেন লুফেছিলেম লুফেছিলুম লুফেছিস লুফেছে লুফেছেন লুফেন লুফো লুফছ লুফছি লুফছিল লুফছিলাম লুফছিলি লুফছিলে লুফছিলেন লুফছিলেম লুফছিলুম লুফছিস লুফছে লুফছেন লফজ লুফত লুফতাম লুফতিস লুফতে লুফতেন লুফতেম লুফতুম লুফুন লুফব লুফবি লুফবে লুফবেন লুফবো লুফল লুফলাম লুফলি লুফলে লুফলেন লুফলেম লুফলুম লব লবঙ্গ লবঙ্গযুক্ত লবঙ্গলতা লবঙ্গলতিকা লুবার লবি লবিং লবেজান লব্জ লবডঙ্ক লবডঙ্কা লবডঙ্গ লবডঙ্গা লবণ লবণাক্ত লবণাত্মক লবণাম্বু লবণাম্বুধি লবণাম্বুরাশি লবণিমা লবণিয়া লবণজল লবণপোড়া লবণমিশ্রিত লবণসমুদ্র লবণহীন লবণহ্রদ লব্ধ লুব্ধ লুব্ধক লব্ধকাম লব্ধকীর্তি লব্ধা লুব্ধা লুব্ধতা লুব্ধদৃষ্টি লব্ধপ্রতিষ্ঠ লব্ধপ্রবেশ লব্ধবস্তু লবনচুষ লবরাশি লভ লভা লভিত লভিনু লভিল লভিলাম লভিয়াছে লভ্য লভ্যা লভ্যাংশ লভ্যাংশরূপে লভ্যচিহ্নিত লভনীয় লুমেন লম্প লম্পট লম্পটতা লম্পটশ্রেষ্ঠ লম্ফ লম্ফঝম্প লম্ফঝম্ফ লম্ফন লম্ফনকারী লম্ফনপটু লম্ব লম্বকেন্দ্র লম্বকর্ণ লম্বা লম্বাংশ লম্বাই লম্বাকৃতি লম্বাকরা লম্বাচওড়া লম্বাচুল লম্বাটে লম্বাদৌড় লম্বাপারা লম্বাভাবে লম্বামুখ লম্বালম্বি লম্বিত লম্বচ্ছেদ লম্বোদর লম্বদ্বিখণ্ডক লম্বদূরত্ব লম্বন লম্ববৃত্ত লম্বভাবে লম্বমান লম্বরেখা লম্বরদার লমহে লরি লরেন্স লরেনসিয়াম লরেন্সিয়াম লর্ড লুলা ললাট ললাটিকা ললাটতট ললাটনেত্র ললাটপট ললাটপট্ট ললাটফলক ললাটভূষণ ললাটলিখন ললাটস্থল ললাম ললামভূতা ললিত লুলিত লূলিত ললিতকলা ললিতা ললিতাসপ্তমী ললিতরাগ ললৎ ললন ললনা ললনাপ্রিয় ললন্তিকা লুলয়ে লশকর লশুন লশূন লস লস্কর লসাগু লসিকা লসিকাকোষ লসিকাকোষীয় লসিকাগ্রন্থি লসিকাতন্ত্র লসিকানালী লসিত লসীকা লস্ট লসত লসসি লহ লহু লহূ লহা লহাই লহনা লহমা লহর লহরি লহরী লড় লড়ুক লড়কা লড়া লুড়া লড়াই লড়াইকারী লড়াইত লড়াইতাম লড়াইতিস লড়াইতে লড়াইতেছ লড়াইতেছি লড়াইতেছিল লড়াইতেছিলাম লড়াইতেছিলি লড়াইতেছিলে লড়াইতেছিলেন লড়াইতেছিস লড়াইতেছে লড়াইতেছেন লড়াইতেন লড়াইপ্রিয় লড়াইব লড়াইবাজ লড়াইবার লড়াইবি লড়াইবে লড়াইবেন লড়াইরত লড়াইল লড়াইলাম লড়াইলি লড়াইলে লড়াইলেন লড়াইয়া লড়াইয়াছ লড়াইয়াছি লড়াইয়াছিল লড়াইয়াছিলাম লড়াইয়াছিলি লড়াইয়াছিলে লড়াইয়াছিলেন লড়াইয়াছিস লড়াইয়াছে লড়াইয়াছেন লড়াইয়ে লড়াইয়ের লড়াইয়ো লড়াক লড়াকু লড়াক্কু লড়াচ্ছ লড়াচ্ছি লড়াচ্ছিল লড়াচ্ছিলাম লড়াচ্ছিলি লড়াচ্ছিলে লড়াচ্ছিলেন লড়াচ্ছিলেম লড়াচ্ছিলুম লড়াচ্ছিস লড়াচ্ছে লড়াচ্ছেন লড়াত লড়াতাম লড়াতিস লড়াতে লড়াতেন লড়াতেম লড়াতুম লড়ান লড়ানো লড়াব লড়াবার লড়াবি লড়াবে লড়াবেন লড়াবো লড়াল লড়ালাম লড়ালি লড়ালে লড়ালেন লড়ালেম লড়ালুম লড়ালড়ি লড়াস লড়ি লুড়ি লুড়িআঁ লড়িত লড়িতাম লড়িতিস লড়িতে লড়িতেছ লড়িতেছি লড়িতেছিল লড়িতেছিলাম লড়িতেছিলি লড়িতেছিলে লড়িতেছিলেন লড়িতেছিস লড়িতেছে লড়িতেছেন লড়িতেন লড়িব লড়িবার লড়িবি লড়িবে লড়িবেন লড়িল লড়িলাম লড়িলি লড়িলে লড়িলেন লড়িস লড়িয়া লড়িয়াছ লড়িয়াছি লড়িয়াছিল লড়িয়াছিলাম লড়িয়াছিলি লড়িয়াছিলে লড়িয়াছিলেন লড়িয়াছিস লড়িয়াছে লড়িয়াছেন লড়িয়ে লড়িয়েছ লড়িয়েছি লড়িয়েছিল লড়িয়েছিলাম লড়িয়েছিলি লড়িয়েছিলে লড়িয়েছিলেন লড়িয়েছিলেম লড়িয়েছিলুম লড়িয়েছিস লড়িয়েছে লড়িয়েছেন লড়িয়ো লড়ী লুড়ী লড়চড় লড়ে লড়েছ লড়েছি লড়েছিল লড়েছিলাম লড়েছিলি লড়েছিলে লড়েছিলেন লড়েছিলেম লড়েছিলুম লড়েছিস লড়েছে লড়েছেন লড়েন লড়ো লড়ছ লড়ছি লড়ছিল লড়ছিলাম লড়ছিলি লড়ছিলে লড়ছিলেন লড়ছিলেম লড়ছিলুম লড়ছিস লড়ছে লড়ছেন লড়ত লড়তু লড়তাম লড়তিস লড়তে লড়তেন লড়তেম লড়তুম লড়ন লড়ুন লড়ব লড়বার লড়বি লড়বে লড়বেন লড়বো লড়ল লড়লাম লড়লি লড়লে লড়লেন লড়লেম লড়লুম লড়ুয়ে লঢ়া লয় লয়কারী লয়করা লয়করণ লয়ে লয়েছে লয়নৃত্য লয়প্রাপ্ত লয়বহির্ভূত লয়হীন লয়হীনতা".split(" "),
              w_m: "ম মু মং মংলা মংলাবন্দর মই মুই মইদেওয়া মইলন মইষা মইসা মইসে মউ মউচাক মউজ মউত মউতাত মউনি মউমাছি মউর মউরি মউরী মউরলা মউল মউলোভী মউড় মউয়া মওকা মওকল মওজ মওজুদ মওজুদতহবিল মওত মওন মওলা মওলানা মওলুদ মওলবি মওলবী মওসুম মওড়া মওয়া মওয়াজ্জমা মওয়াজ্জল মুক মূক মক্কা মক্কাতীর্থ মক্কাধাম মক্কাবাসী মক্কাশরিফ মক্কী মক্কেল মক্কর মুকখু মকাই মকান মুকানো মুকাবিলা মুকাবলা মূকাভিনেতা মূকাভিনয় মকাম মকার মুকাররম মকারসাধন মকিংবার্ড মূকী মুকেরি মকুট মুকট মুকুট মুকুটখানি মুকটি মুকুটধারিণী মুকুটধারী মুক্ত মুক্তকচ্ছ মুক্তকেশ মুক্তকেশা মুক্তকেশী মুক্তকণ্ঠ মুক্তকৃপাণ মুকুতা মুক্তা মূকতা মুক্তাগাছা মুক্তাঙ্গন মুক্তাঝুড়ি মুক্তাহার মুক্তায়িত মুকতি মুকুতি মুক্তি মুক্তিকামী মুক্তিযোদ্ধা মুক্তিযুদ্ধ মুক্তিযুদ্ধকাল মুক্তিযুদ্ধকালীন মুক্তিযুদ্ধজাদুঘর মুক্তিযুদ্ধনামা মুক্তিযুদ্ধভিত্তিক মুক্তিদাতা মুক্তিদাত্রী মুক্তিদান মুক্তিদায়িনী মুক্তিদীক্ষা মুক্তিনামা মুক্তিপণ মুক্তিপত্র মুক্তিপ্রাপ্ত মুক্তিফৌজ মুক্তিবাহিনী মুক্তিবেগ মুক্তিমন্ত্র মুক্তিলাভ মুক্তিসংগ্রাম মুক্তিস্থান মুক্তিস্নান মুক্তচিন্তা মুক্তো মুক্তোদানা মুক্তছন্দ মুক্তদ্বার মুক্তধারা মুক্তপ্রান্ত মুক্তপর্যায় মুক্তপুরুষ মকতব মক্তব মকতবখানা মুক্তবাজার মুক্তবাণিজ্য মুক্তবায়ু মুক্তবেণী মুক্তবুদ্ধি মুক্তভাব মুক্তমন মুক্তমনা মুক্তরূপ মুক্তসঙ্গ মুক্তহাত মুক্তহৃদয় মুক্তহস্ত মুক্তহস্ততা মুকদ্দম মকদ্দমা মুকদ্দমা মকদুর মুকুন্দ মুকুন্দগড় মুকুন্দপুর মকুফ মকফাইট মকুব মকবেরা মকবরা মকবুল মকমক মকমকি মকমকী মকম্মল মকমল মকর মুকুর মকরকেতু মকরকেতন মকরকুণ্ডল মকরক্রান্তি মকরক্রান্তিবৃত্ত মকরাকর মুকরারি মকরালয় মকরিকা মকর্দম মকর্দমা মকরধ্বজ মকরন্দ মকরবাহিনী মকরবাহন মকরবাহনা মকরব্যূহ মুকরর মকররাশি মকররি মুকররি মুকররর মকরররি মুকরররি মকরসংক্রান্তি মকরুহ মুকুল মুকুলাকৃতি মুকুলিকা মুকুলিত মুকুলিতনয়না মুকুলিল মুকুলোদগম মুকুলসদৃশ মুকুলহীন মকশো মক্ষিক মক্ষিকা মক্ষী মক্ষীরানি মক্স মকসেদ মকসদ মকসুদ মকসূদ মুকসুদপুর মখ মুখ মুখু মুখআলগা মুখউজ্জ্বল মুখওয়ালা মুখকুণ্ডল মুখকমল মুখখু মুখখানা মুখখানি মুখখারাপ মুখখারাব মুখখিচানো মুখখিস্তি মুখখোলা মুখগোঁজ মুখগহ্বর মুখা মুখাকৃতি মুখাগ্নি মুখাগ্র মুখাঙ্গরাগ মুখান মুখানো মুখাপেক্ষা মুখাপেক্ষিণী মুখাপেক্ষিতা মুখাপেক্ষী মুখাবরণ মুখাবয়ব মুখামুখি মুখামৃত মুখি মুখিনী মুখিয়ে মুখী মুখচাওয়া মুখচোরা মুখচ্ছটা মুখচ্ছবি মুখচুন মুখচন্দ্র মুখচন্দ্রিকা মুখচলা মুখেচোখে মুখেছাই মুখেভাত মুখেমুখে মুখের মুখেরতোড় মুখো মুখোপাধ্যায় মুখোমুখি মুখোশ মুখোস মুখছোট মুখছোটা মুখছোটানো মুখছুটা মুখজাত মুখুজ্জে মুখঝামটা মুখ্য মুখযুক্ত মুখ্যকল্প মুখ্যাভিনেতা মুখ্যার্থ মুখ্যার্থত মুখুটি মুখটিপে মুখ্যত মুখ্যমন্ত্রী মুখতোলা মুখতসর মুখথাকা মুখথুবড়ে মুখদেখা মখদম মখদুম মুখদর্শন মুখন মুখনাড়া মুখনিঃসৃত মুখনো মুখপাত মুখপাত্র মুখপানে মুখপোড়া মুখপত্র মুখপথ মুখপদ্ম মুখপ্রান্ত মুখফোটা মুখফোলানো মুখফোড় মুখবংশ মুখবিকৃতি মুখবিবর মুখবোজা মুখব্যাদান মুখবদলানো মুখবন্ধ মুখভঙ্গি মুখভার মুখমারা মুখমিষ্টি মুখমণ্ডল মুখমণ্ডলীয় মখমল মখমলি মুখময় মুখর মুখরক্ষা মুখরা মুখরাখা মুখরিত মুখরিতা মুখরুচি মুখরোচক মুখরতা মুখররাত্রি মখলুক মখলুকাত মুখলাগা মুখশুকানো মুখশুদ্ধি মুখশুদ্ধিকর মুখশ্রী মুখশশী মুখসাট মুখসাপট মুখসামলানো মুখসিটকানো মুখসেলাই মুখস্থ মুখস্থকরা মুখস্থকরণ মুখসর্বস্ব মুখহওয়া মুখহাত মগ মুগ মৃগ মুগকলাই মগা মুগা মগাই মৃগাক্ষী মৃগাঙ্ক মৃগাঙ্কশেখর মৃগাদি মৃগী মৃগীরোগ মৃগচর্ম মৃগেন্দ্র মগেরমুলুক মগেরমুল্লুক মৃগেল মগজ মগজখালি মগজেরচাষ মগডাল মুগডাল মৃগতৃষা মৃগতৃষিকা মৃগতৃষ্ণা মৃগতৃষ্ণিকা মগদ মগধ মুগধ মুগ্ধ মুগ্ধকারী মুগ্ধকর মুগ্ধকরা মুগ্ধকরণ মুগ্ধা মুগ্ধতা মগধদেশীয় মগধদেশীয়া মুগ্ধনয়ন মুগ্ধবোধ মুগ্ধভাব মুগ্ধস্বভাবা মগন মগ্ন মগ্নগিরি মগ্না মৃগনাভি মগ্নচৈতন্য মৃগনেত্রা মগ্নপ্রায় মৃগনয়না মগবাজার মৃগমদ মগর মুগুর মগরা মৃগরাজ মগরিব মগরেব মগরেবি মগরুর মৃগলোচনা মৃগশিরা মৃগশীর্ষ মগড়া মৃগয়া মৃগয়াকারী মৃগয়াজীবী মৃগয়ালব্ধ মঘা মঘানক্ষত্রযুক্ত মঘোনী মঘবা মঘবান মঘবতী মঘবন মুঘল মুঘলাই মুঘলজাহাঙ্গীর মুঘলবন্দী মুঘলভাস্কর্য মঙ্গা মঙ্গোল মঙ্গোলিয়া মঙ্গোলীয় মঙ্গোলজাতি মঙ্গল মঙ্গলকাব্য মঙ্গলকামী মঙ্গলকামনা মঙ্গলকারক মঙ্গলকারিণী মঙ্গলকারী মঙ্গলকথন মঙ্গলকর মঙ্গলকর্ম মঙ্গলকর্মারম্ভ মঙ্গলকলস মঙ্গলগীত মঙ্গলগ্রহ মঙ্গলঘট মঙ্গলা মঙ্গলাকাঙ্ক্ষা মঙ্গলাকাঙ্ক্ষী মঙ্গলাচার মঙ্গলাচরণ মঙ্গলাধার মঙ্গলানুষ্ঠান মঙ্গলামঙ্গল মঙ্গলার্থ মঙ্গলালয় মঙ্গলিতা মঙ্গলচণ্ডিকা মঙ্গলচণ্ডী মঙ্গলীয় মঙ্গলোৎসব মঙ্গলজনক মঙ্গল্য মঙ্গলযুক্ত মঙ্গলদায়ক মঙ্গলদায়িকা মঙ্গলধ্বনি মঙ্গলপুত্র মঙ্গলপ্রদ মঙ্গলবার মঙ্গলবার্তা মঙ্গলমুহূর্ত মঙ্গলময় মঙ্গলময়ী মঙ্গললাভ মঙ্গলসংবাদ মঙ্গলসাধন মঙ্গলসূত্র মঙ্গলসমাচার মুঙা মা মাংনা মাংস মাংসকষা মাংসগত মাংসাদ মাংসাদি মাংসাশী মাংসিক মাংসেরঢিপি মাংসেরঢিপী মাংসেরঢিবি মাংসেরঢিবী মাংসঝলসানো মাংসপিণ্ড মাংসপিণ্ডদ্বয় মাংসপেশি মাংসপ্রাচীর মাংসবিক্রেতা মাংসবহুল মাংসভুক মাংসভোজী মাংসল মাংসস্ফীতি মাংসসহযোগে মাই মাইক মাইকিং মাইকেল মাইকোপ্লাজমা মাইকোব্যাক্টেরিয়াম মাইকোলজি মাইকোশ মাইক্রো মাইক্রোইলেকট্রনিক মাইক্রোইলেকট্রনিক্স মাইক্রোওয়েভ মাইক্রোকন্ট্রোলার মাইক্রোকম্পিউটার মাইক্রোগ্রাম মাইক্রোচিপ মাইক্রোটেকনোলজি মাইক্রোনেশিয়া মাইক্রোপ্রযুক্তি মাইক্রোপ্রসেসর মাইক্রোফিল্ম মাইক্রোফোন মাইক্রোবায়োলজি মাইক্রোবায়োলজিস্ট মাইক্রোমিটার মাইক্রোস্কোপ মাইক্রোস্কোপি মাইক্রোসিস্টেম মাইক্রোসিস্টেমস মাইক্রোসফট মাইক্রন মাইখাওয়া মাইগ্রেট মাইগ্রেন মাইচা মাইছাড়ানো মাইজ মাইজি মাইজদি মাইজদিয়া মাইজভাণ্ডারী মাইজলা মাইঞা মাইটোকন্ড্রিয়া মাইটোসিস মাইট্যা মাইতওয়ারা মাইদেওয়া মাইধরা মাইন মাইনা মাইনাদার মাইনাদারি মাইনার মাইনাস মাইনিং মাইনে মাইন্ড মাইনদার মাইন্দার মাইনদারি মাইনর মাইনরিটি মাইনস মাইপোশ মাইপোষ মাইফেল মাইমোগ্রাফ মাইর মাইরা মাইরাই মাইরি মাইরন মাইল মাইলানি মাইলিজ মাইলেজ মাইলটাক মাইলপোস্ট মাইলফলক মাইলস মাইলস্টোন মাইসেলি মাইসেলীয় মাইসোর মাইয়া মাইয়াত মাইয়ামুখা মাইয়ামুখো মাইয়ালোক মাইয়ত মাউইনা মাউইমা মাউগ মাউগপোলা মাউজ মাউথ মাউন্ট মাউন্টএভারেস্ট মাউন্টেইন মাউন্টেন মাউস মাউসা মাউড়া মাউড়াগুলান মাঐ মাঐমা মাও মাওই মাওবাদ মাওবাদী মাওরা মাওলা মাওলানা মাওলি মাওলুদ মাওড়া মাওয়া মাকু মাকুইঁদুর মাকাল মাকালফল মাকনা মাকুন্দ মাকুন্দা মাকুন্দচোপা মাকুন্দে মাকবেরা মাকুল মাক্ষিক মাক্ষীক মাকসা মাকড় মাকড়া মাকড়ি মাকড়ী মাকড়দহ মাকড়শা মাকড়শারজাল মাকড়সা মাখ মাখু মাখুক মাখা মাখাই মাখাইও মাখাইত মাখাইতাম মাখাইতিস মাখাইতে মাখাইতেছ মাখাইতেছি মাখাইতেছিল মাখাইতেছিলাম মাখাইতেছিলি মাখাইতেছিলে মাখাইতেছিলেন মাখাইতেছিস মাখাইতেছে মাখাইতেছেন মাখাইতেন মাখাইব মাখাইবার মাখাইবি মাখাইবে মাখাইবেন মাখাইল মাখাইলাম মাখাইলি মাখাইলে মাখাইলেন মাখাইয়া মাখাইয়াছ মাখাইয়াছি মাখাইয়াছিল মাখাইয়াছিলাম মাখাইয়াছিলি মাখাইয়াছিলে মাখাইয়াছিলেন মাখাইয়াছিস মাখাইয়াছে মাখাইয়াছেন মাখাইয়ো মাখাক মাখাচ্ছ মাখাচ্ছি মাখাচ্ছিল মাখাচ্ছিলাম মাখাচ্ছিলি মাখাচ্ছিলে মাখাচ্ছিলেন মাখাচ্ছিলেম মাখাচ্ছিলুম মাখাচ্ছিস মাখাচ্ছে মাখাচ্ছেন মাখাত মাখাতাম মাখাতিস মাখাতে মাখাতেন মাখাতেম মাখাতুম মাখান মাখানো মাখাব মাখাবার মাখাবি মাখাবে মাখাবেন মাখাবো মাখামাখি মাখাল মাখালাম মাখালি মাখালে মাখালেন মাখালেম মাখালুম মাখাস মাখি মাখিত মাখিতাম মাখিতিস মাখিতে মাখিতেছ মাখিতেছি মাখিতেছিল মাখিতেছিলাম মাখিতেছিলি মাখিতেছিলে মাখিতেছিলেন মাখিতেছিস মাখিতেছে মাখিতেছেন মাখিতেন মাখিব মাখিবার মাখিবি মাখিবে মাখিবেন মাখিল মাখিলাম মাখিলি মাখিলে মাখিলেন মাখিস মাখিয়া মাখিয়াছ মাখিয়াছি মাখিয়াছিল মাখিয়াছিলাম মাখিয়াছিলি মাখিয়াছিলে মাখিয়াছিলেন মাখিয়াছিস মাখিয়াছে মাখিয়াছেন মাখিয়ে মাখিয়েছ মাখিয়েছি মাখিয়েছিল মাখিয়েছিলাম মাখিয়েছিলি মাখিয়েছিলে মাখিয়েছিলেন মাখিয়েছিলেম মাখিয়েছিলুম মাখিয়েছিস মাখিয়েছে মাখিয়েছেন মাখিয়ো মাখে মাখেন মাখছ মাখছি মাখছিল মাখছিলাম মাখছিলি মাখছিলে মাখছিলেন মাখছিলেম মাখছিলুম মাখছিস মাখছে মাখছেন মাখত মাখতাম মাখতিস মাখতে মাখতেন মাখতেম মাখতুম মাখন মাখুন মাখনা মাখনচোর মাখনতোলা মাখব মাখবার মাখবি মাখবে মাখবেন মাখবো মাখম মাখল মাখলাম মাখলি মাখলে মাখলেন মাখলেম মাখলুম মাগ মাগুক মাগা মাগান মাগানো মাগার মাগি মাগিত মাগিতাম মাগিতিস মাগিতে মাগিতেছ মাগিতেছি মাগিতেছিল মাগিতেছিলাম মাগিতেছিলি মাগিতেছিলে মাগিতেছিলেন মাগিতেছিস মাগিতেছে মাগিতেছেন মাগিতেন মাগিব মাগিবার মাগিবাড়ি মাগিবি মাগিবে মাগিবেন মাগিল মাগিলাম মাগিলি মাগিলে মাগিলেন মাগিস মাগিয়া মাগিয়াছ মাগিয়াছি মাগিয়াছিল মাগিয়াছিলাম মাগিয়াছিলি মাগিয়াছিলে মাগিয়াছিলেন মাগিয়াছিস মাগিয়াছে মাগিয়াছেন মাগিয়ার মাগিয়ো মাগী মাগীবাড়ি মাগে মাগেন মাগো মাগোঁসাই মাগছ মাগছি মাগছিল মাগছিলাম মাগছিলি মাগছিলে মাগছিলেন মাগছিলেম মাগছিলুম মাগছিস মাগছে মাগছেন মাগ্যি মাগ্যিগণ্ডা মাগ্যিভাতা মাগত মাগতাম মাগতিস মাগতে মাগতেন মাগতেম মাগতুম মাগধ মাগধি মাগধী মাগন মাগুন মাগনা মাগফিরাত মাগফেরাত মাগব মাগবার মাগবি মাগবে মাগবেন মাগবো মাগভাতার মাগুর মাগুরা মাগরিব মাগুরছড়া মাগুরমাছ মাগল মাগলাম মাগলি মাগলে মাগলেন মাগলেম মাগলুম মাঘ মাঘী মাঘীপূর্ণিমা মাঘফাল্গুন মাঘমাস মাঙ্গ মাঙ্গুক মাঙ্গা মাঙ্গার মাঙ্গি মাঙ্গিত মাঙ্গিতাম মাঙ্গিতিস মাঙ্গিতে মাঙ্গিতেছ মাঙ্গিতেছি মাঙ্গিতেছিল মাঙ্গিতেছিলাম মাঙ্গিতেছিলি মাঙ্গিতেছিলে মাঙ্গিতেছিলেন মাঙ্গিতেছিস মাঙ্গিতেছে মাঙ্গিতেছেন মাঙ্গিতেন মাঙ্গিব মাঙ্গিবার মাঙ্গিবি মাঙ্গিবে মাঙ্গিবেন মাঙ্গিল মাঙ্গিলাম মাঙ্গিলি মাঙ্গিলে মাঙ্গিলেন মাঙ্গিস মাঙ্গিয়া মাঙ্গিয়াছ মাঙ্গিয়াছি মাঙ্গিয়াছিল মাঙ্গিয়াছিলাম মাঙ্গিয়াছিলি মাঙ্গিয়াছিলে মাঙ্গিয়াছিলেন মাঙ্গিয়াছিস মাঙ্গিয়াছে মাঙ্গিয়াছেন মাঙ্গিয়ো মাঙ্গে মাঙ্গেন মাঙ্গছ মাঙ্গছি মাঙ্গছিল মাঙ্গছিলাম মাঙ্গছিলি মাঙ্গছিলে মাঙ্গছিলেন মাঙ্গছিলেম মাঙ্গছিলুম মাঙ্গছিস মাঙ্গছে মাঙ্গছেন মাঙ্গত মাঙ্গতাম মাঙ্গতিস মাঙ্গতে মাঙ্গতেন মাঙ্গতেম মাঙ্গতুম মাঙ্গন মাঙ্গুন মাঙ্গব মাঙ্গবার মাঙ্গবি মাঙ্গবে মাঙ্গবেন মাঙ্গবো মাঙ্গল মাঙ্গলাম মাঙ্গলি মাঙ্গলিক মাঙ্গলে মাঙ্গলেন মাঙ্গলেম মাঙ্গল্য মাঙ্গল্যরচনা মাঙ্গলুম মাঙা মাঙন মাঙনা মাচা মাচান মাচিয়া মাছ মাছাড়া মাছি মাছিতা মাছিমারা মাছচাষ মাছেতা মাছেরঝাল মাছেরঝোল মাছেরডিম মাছঢাকা মাছতা মাছতরকারি মাছধরা মাছবিক্রেতা মাছভাজা মাছমাংস মাছরাঙ্গা মাছরাঙা মাছশিকারি মাছুয়া মাজ মাজুক মাজা মাজাগতিক মাজাঘষা মাজান মাজানো মাজার মাজি মাজিও মাজিত মাজিতাম মাজিতিস মাজিতে মাজিতেছ মাজিতেছি মাজিতেছিল মাজিতেছিলাম মাজিতেছিলি মাজিতেছিলে মাজিতেছিলেন মাজিতেছিস মাজিতেছে মাজিতেছেন মাজিতেন মাজিব মাজিবার মাজিবি মাজিবে মাজিবেন মাজিল মাজিলাম মাজিলি মাজিলে মাজিলেন মাজিস মাজিস্ট্রেট মাজিয়া মাজিয়াছ মাজিয়াছি মাজিয়াছিল মাজিয়াছিলাম মাজিয়াছিলি মাজিয়াছিলে মাজিয়াছিলেন মাজিয়াছিস মাজিয়াছে মাজিয়াছেন মাজিয়ো মাজে মাজেন মাজছ মাজছি মাজছিল মাজছিলাম মাজছিলি মাজছিলে মাজছিলেন মাজছিলেম মাজছিলুম মাজছিস মাজছে মাজছেন মাজত মাজতাম মাজতিস মাজতে মাজতেন মাজতেম মাজতুম মাজদি মাজন মাজুন মাজুফল মাজব মাজবার মাজবি মাজবে মাজবেন মাজবো মাজমা মাজুর মাজরা মাজরাপোকা মাজল মাজুল মাজলাম মাজলি মাজলে মাজলেন মাজলেম মাজলুম মাজুষ মাজহাব মাজুয়া মাঝ মাঝখান মাঝা মাঝামাঝি মাঝার মাঝারি মাঝারী মাঝি মাঝিগিরি মাঝিমাল্লা মাঝিয়ান মাঝী মাঝীগিরি মাঝীমাল্লা মাঝে মাঝেমাঝে মাঝেমধ্যে মাঝত মাঝপথ মাঝবয়েসী মাঝবয়স মাঝবয়সী মাঝমাঠ মাঝরাত মাঝরাস্তা মাঞ্জা মাঞ্জাদেওয়া মাঞ্জিষ্ঠ মাঞ্জুরী মাট মাটকোঠা মাটকলাই মাটা মাটাপালাম মাটাম মাটামসই মাটামসহি মাযার মাটাশাক মাটি মাটিকাটা মাটিকামড়ানো মাটিকোপানো মাটিকোবানো মাটিখাওয়া মাটিগোলা মাটিচাপা মাটিতোলা মাটিদেওয়া মাটিনেওয়া মাটিফেলা মাটিমাখা মাটিমাটি মাটিমাড়ানো মাটিরচাপ মাটিরদর মাটিরমানুষ মাটিয়া মাটী মাটে মাটো মাটন মাঠ মাঠঘাট মাঠা মাঠান মাঠানসই মাঠানসহি মাঠেঘাটে মাঠুয়া মাঢ়ি মাঢ়ী মাণ মাণিক মাণিকা মাণিকজোড় মাণিক্য মাণবক মাত মাতু মাতৃ মাতুঃষ্বসা মাতুঃস্বসা মাতৃঅঙ্ক মাতওয়ারা মাতুক মাতৃক মাতৃকা মাতৃকোষ মাতৃক্রোড় মাতৃকুল মাতৃগণ মাতৃগর্ভ মাতগুড় মাতৃঘাতক মাতৃঘাতী মাতঙ্গ মাতঙ্গিনী মাতঙ্গী মাতা মাতাই মাতাইও মাতাইত মাতাইতাম মাতাইতিস মাতাইতে মাতাইতেছ মাতাইতেছি মাতাইতেছিল মাতাইতেছিলাম মাতাইতেছিলি মাতাইতেছিলে মাতাইতেছিলেন মাতাইতেছিস মাতাইতেছে মাতাইতেছেন মাতাইতেন মাতাইব মাতাইবার মাতাইবি মাতাইবে মাতাইবেন মাতাইল মাতাইলাম মাতাইলি মাতাইলে মাতাইলেন মাতাইয়া মাতাইয়াছ মাতাইয়াছি মাতাইয়াছিল মাতাইয়াছিলাম মাতাইয়াছিলি মাতাইয়াছিলে মাতাইয়াছিলেন মাতাইয়াছিস মাতাইয়াছে মাতাইয়াছেন মাতাইয়ো মাতাক মাতাচ্ছ মাতাচ্ছি মাতাচ্ছিল মাতাচ্ছিলাম মাতাচ্ছিলি মাতাচ্ছিলে মাতাচ্ছিলেন মাতাচ্ছিলেম মাতাচ্ছিলুম মাতাচ্ছিস মাতাচ্ছে মাতাচ্ছেন মাতাত মাতাতাম মাতাতিস মাতাতে মাতাতেন মাতাতেম মাতাতুম মাতান মাতানো মাতাপিতৃ মাতাপিতা মাতাপিতাহীন মাতাপিতৃহীন মাতাব মাতাবার মাতাবাড়ি মাতাবি মাতাবে মাতাবেন মাতাবো মাতামাতি মাতামহ মাতামহী মাতামুহুরি মাতারূপে মাতাল মাতালাম মাতালি মাতালে মাতালেন মাতালেম মাতালো মাতালুম মাতাস মাতি মাতিত মাতিতাম মাতিতিস মাতিতে মাতিতেছ মাতিতেছি মাতিতেছিল মাতিতেছিলাম মাতিতেছিলি মাতিতেছিলে মাতিতেছিলেন মাতিতেছিস মাতিতেছে মাতিতেছেন মাতিতেন মাতিব মাতিবার মাতিবি মাতিবে মাতিবেন মাতিল মাতিলাম মাতিলি মাতিলে মাতিলেন মাতিস মাতিয়া মাতিয়াছ মাতিয়াছি মাতিয়াছিল মাতিয়াছিলাম মাতিয়াছিলি মাতিয়াছিলে মাতিয়াছিলেন মাতিয়াছিস মাতিয়াছে মাতিয়াছেন মাতিয়ে মাতিয়েছ মাতিয়েছি মাতিয়েছিল মাতিয়েছিলাম মাতিয়েছিলি মাতিয়েছিলে মাতিয়েছিলেন মাতিয়েছিলেম মাতিয়েছিলুম মাতিয়েছিস মাতিয়েছে মাতিয়েছেন মাতিয়ো মাতে মাতেন মাতোয়ারা মাতোয়ালা মাতোয়ালি মাতোয়ালী মাতছ মাতছি মাতছিল মাতছিলাম মাতছিলি মাতছিলে মাতছিলেন মাতছিলেম মাতছিলুম মাতছিস মাতছে মাতছেন মাতত মাত্তা মাততাম মাততিস মাততে মাততেন মাততেম মাতৃত্ব মাততুম মাতৃতুল্যা মাতৃদুগ্ধ মাতৃদায় মাতৃদেবী মাতৃধাম মাতন মাতুন মাতৃপক্ষ মাতৃপাণি মাতৃপূজা মাতৃপ্রধান মাতব মাতৃবংশ মাতবার মাতবি মাতৃবিয়োগ মাতবে মাতবেন মাতবো মাতৃবৎ মাতৃবন্দনা মাতব্বর মাতব্বরি মাতবর মাতবরি মাতৃভক্ত মাতৃভক্তি মাতৃভাষা মাতৃভাষাভাষী মাতৃভূমি মাতম মাতৃমাছ মাতৃমৃত্যু মাতমলেবাস মাত্র মাত্রা মাত্রাগত মাত্রাচ্ছন্দ মাত্রাজ্ঞান মাত্রাযুক্ত মাত্রাতিরিক্ত মাত্রাতিরিক্তভাবে মাত্রাতীত মাত্রাদি মাত্রাধিক মাত্রাবোধ মাত্রাবৃত্ত মাত্রারূপে মাত্রাহীন মাত্রিক মাত্রে মাতৃরূপা মাতরম মাতরমবন্ধন মাতল মাতুল মাতুলকন্যা মাতুলকুল মাতলা মাতুলানি মাতুলানী মাতলাম মাতলামি মাৎলামি মাতলামো মাতুলালয় মাতলি মাতুলি মাতলে মাতলেন মাতলেম মাতুলপুত্র মাতুলপুত্রী মাতলুম মাতৃশাসিত মাতৃশাসন মাতৃশব্দ মাতৃশ্রাদ্ধ মাতৃষ্বসা মাতৃষ্বস্রীয়া মাতৃসেবা মাৎস্য মাৎস্যনীতি মাৎস্যন্যায় মাতৃস্তন মাতৃস্তন্য মাতৃস্তব মাতৃস্ত্রোত্র মাতৃস্থানীয়া মাতৃসদন মাতৃস্নেহ মাতৃস্বরূপ মাতৃসমা মাৎসর্য মাতৃহারা মাতৃহীন মাতৃহীনা মাতৃহত্যা মাতৃহৃদয় মাতৃহন্তা মাতৃহন্তারক মাতুয়া মাতুয়াইল মাথা মাথাওয়ালা মাথাকাটা মাথাকোটা মাথাখাওয়া মাথাখাটানো মাথাখারাপ মাথাখেলানো মাথাখোঁড়া মাথাগোঁজা মাথাগুনতি মাথাগরম মাথাগলানো মাথাগুঁড়া মাথাঘামানো মাথাঘোরা মাথাঘষা মাথাচক্কর মাথাচাড়া মাথাচুলকানো মাথাযুক্ত মাথাটিপা মাথাটেপা মাথাঠাণ্ডা মাথাঠোকা মাথাতোলা মাথাধরা মাথানাড়া মাথানিচু মাথানোয়ানো মাথাপাগলা মাথাপিছু মাথাপিছুআয় মাথাফাটাফাটি মাথাবিকানো মাথাব্যথা মাথাভাঙ্গা মাথাভাঙা মাথামাটি মাথামোটা মাথামুণ্ড মাথামুণ্ডু মাথামুড় মাথারঘাম মাথাল মাথাসই মাথাহেঁট মাথায়ছিট মাথায়মাথায় মাথায়রাখা মাথি মাথট মাথুর মাদক মাদকাসক্ত মাদকাসক্তি মাদকচক্র মাদকতা মাদকদ্রব্য মাদকরূপ মাদকরস মাদকসেবী মাদকসেবন মাদা মাদাগাস্কার মাদানি মাদাম মাদার মাদারগাছ মাদারগঞ্জ মাদারীপুর মাদারজাদ মাদারযাদ মাদারবোর্ড মাদারল্যান্ড মাদি মাদিকেরী মাদিয়ান মাদিয়ানা মাদী মাদোয়ান মাদন মাদুর মাদ্রাজ মাদ্রাজি মাদরাসা মাদ্রাসা মাদ্রাসাভিত্তিক মাদ্রিদ মাদুরীয় মাদল মাদলাকৃতি মাদলি মাদুলি মাদলী মাদৃশ মাধুক মাধুকী মাধুকরী মাধুকরীবৃত্তি মাধা মাধাই মাধ্যাকর্ষণ মাধ্যাকর্ষণতত্ত্ব মাধ্যাহ্নিক মাধ্যন্দিন মাধ্যন্দিনরেখা মাধ্যম মাধ্যমিক মাধ্যমিকতা মাধ্যমিকশিক্ষা মাধব মাধ্ব মাধবকুঞ্জ মাধবকুণ্ড মাধবি মাধবিকা মাধবী মাধ্বী মাধ্বীক মাধবীকুঞ্জ মাধবীলতা মাধবপুর মাধুর মাধুরী মাধুরীময় মাধুর্য মাধুর্যযুক্ত মাধুর্যসাধক মাধুর্যহীন মাধুলী মান মানঅভিমান মানইজ্জত মানুক মানকচু মানকরা মানকলি মানগত মানা মানাই মানাইও মানাইত মানাইতাম মানাইতিস মানাইতে মানাইতেছ মানাইতেছি মানাইতেছিল মানাইতেছিলাম মানাইতেছিলি মানাইতেছিলে মানাইতেছিলেন মানাইতেছিস মানাইতেছে মানাইতেছেন মানাইতেন মানাইব মানাইবার মানাইবি মানাইবে মানাইবেন মানাইল মানাইলাম মানাইলি মানাইলে মানাইলেন মানাইয়া মানাইয়াছ মানাইয়াছি মানাইয়াছিল মানাইয়াছিলাম মানাইয়াছিলি মানাইয়াছিলে মানাইয়াছিলেন মানাইয়াছিস মানাইয়াছে মানাইয়াছেন মানাইয়ো মানাক মানাচ্ছ মানাচ্ছি মানাচ্ছিল মানাচ্ছিলাম মানাচ্ছিলি মানাচ্ছিলে মানাচ্ছিলেন মানাচ্ছিলেম মানাচ্ছিলুম মানাচ্ছিস মানাচ্ছে মানাচ্ছেন মানাত মানাতাম মানাতিস মানাতে মানাতেন মানাতেম মানাতুম মানান মানানো মানানসই মানানসহি মানাব মানাবার মানাবি মানাবে মানাবেন মানাবো মানাল মানালাম মানালি মানালে মানালেন মানালেম মানালুম মানাস মানি মানিঅর্ডার মানিক মানিকগঞ্জ মানিকচাঁদ মানিকছড়ি মানিকজোড় মানিকতলা মানিকনগর মানিকপুর মানিত মানিতাম মানিতিস মানিতে মানিতেছ মানিতেছি মানিতেছিল মানিতেছিলাম মানিতেছিলি মানিতেছিলে মানিতেছিলেন মানিতেছিস মানিতেছে মানিতেছেন মানিতেন মানিনী মানিব মানিবার মানিবি মানিবে মানিবেন মানিব্যাগ মানিল মানিলাম মানিলি মানিলে মানিলেন মানিস মানিয়া মানিয়াছ মানিয়াছি মানিয়াছিল মানিয়াছিলাম মানিয়াছিলি মানিয়াছিলে মানিয়াছিলেন মানিয়াছিস মানিয়াছে মানিয়াছেন মানিয়ে মানিয়েছ মানিয়েছি মানিয়েছিল মানিয়েছিলাম মানিয়েছিলি মানিয়েছিলে মানিয়েছিলেন মানিয়েছিলেম মানিয়েছিলুম মানিয়েছিস মানিয়েছে মানিয়েছেন মানিয়ো মানিয়োক মানী মানচিত্র মানচিত্রাবলি মানে মানেন মানেবই মানেমানে মানেমতলব মানো মানোন্নতি মানোন্নয়ন মানোয়ার মানোয়ারি মানছ মানছি মানছিল মানছিলাম মানছিলি মানছিলে মানছিলেন মানছিলেম মানছিলুম মানছিস মানছে মানছেন মান্য মান্যকরণ মান্যগণ্য মান্যা মান্যতা মান্যবর মান্যবরেষু মানত মানতাম মানতিক মানতিস মানতে মানতেন মানতেম মানতুম মানদ মানদা মান্দার মান্দাস মানদেওয়া মান্দ্য মানদণ্ড মান্দ্রাজ মান্ধাতা মানন মানুন মাননা মান্না মাননির্ধারণ মাননিরূপক মাননীয় মাননীয়া মাননীয়াসু মাননীয়েষু মান্নত মানপত্র মানব মানবক মানবকোষ মানবগোষ্ঠী মানবাত্মা মানবাধিকার মানবার মানবি মানবিক মানবিকতা মানবী মানবচরিত্র মানবীয় মানবেতর মানবেন মানবো মানবোচিত মানবজাতি মানবজীবন মানবজট মানবজন্ম মানবজমিন মানবতা মানবতাবাদ মানবতাবাদী মানবত্ব মানবদেহ মানবধর্ম মানবধর্মী মানবনির্মিত মানবপ্রকৃতি মানবপরিষদ মানবপ্রেমিক মানববিদ্যা মানববিবর্তন মানববুদ্ধি মানববসতি মানবরূপ মানবলীলা মানবশিশু মানবশরীর মানবশ্রেষ্ঠ মানবসাহিত্য মানবসেবা মানবসত্তা মানবসন্তান মানবসভ্যতা মানবসমাজ মানবসম্পদ মানবসম্প্রদায় মানবসৃষ্ট মানবহীন মানবহৃদয় মানভাঙা মানভাষা মানভঞ্জন মানমন্দির মানময়ী মানরক্ষা মানরাখা মানরূপ মানল মানলাম মানলি মানলে মানলেন মানলেম মানলুম মানুষ মানুষখেকো মানুষিক মানুষী মানুষেটানা মানুষজন মানুষবাহিত মানুষরূপী মানুষরূপে মানুষসুলভ মানুষহওয়া মানস মানসকন্যা মানসকর্ম মানসাঙ্ক মানসিংহ মানসিক মানসিকী মানসিকতা মানসিকভাবে মানসী মানসজগৎ মানসতা মানসনেত্র মানসপুত্র মানসপ্রতিমা মানসপুষ্টি মানসভ্রমণ মানসম্পন্ন মানসম্ভ্রম মানসম্ভ্রমযুক্ত মানসম্মান মানসম্মত মানসলোক মানসলোচন মানসসিদ্ধি মানসসরোবর মানহানি মানহানিকর মানহীন মাপ মাপঅনুযায়ী মাপক মাপুক মাপকাঠি মাপা মাপাজোকা মাপাজোঁকা মাপাজোখা মাপাজোঁখা মাপান মাপানো মাপি মাপিত মাপিতাম মাপিতিস মাপিতে মাপিতেছ মাপিতেছি মাপিতেছিল মাপিতেছিলাম মাপিতেছিলি মাপিতেছিলে মাপিতেছিলেন মাপিতেছিস মাপিতেছে মাপিতেছেন মাপিতেন মাপিব মাপিবার মাপিবি মাপিবে মাপিবেন মাপিল মাপিলাম মাপিলি মাপিলে মাপিলেন মাপিস মাপিয়া মাপিয়াছ মাপিয়াছি মাপিয়াছিল মাপিয়াছিলাম মাপিয়াছিলি মাপিয়াছিলে মাপিয়াছিলেন মাপিয়াছিস মাপিয়াছে মাপিয়াছেন মাপিয়েছেন মাপিয়ো মাপে মাপেন মাপছ মাপছি মাপছিল মাপছিলাম মাপছিলি মাপছিলে মাপছিলেন মাপছিলেম মাপছিলুম মাপছিস মাপছে মাপছেন মাপজোক মাপজোখ মাপজোপ মাপত মাপতাম মাপতিস মাপতে মাপতেন মাপতেম মাপুতো মাপতুম মাপন মাপুন মাপনির্ধারণ মাপনী মাপব মাপবার মাপবি মাপবে মাপবেন মাপবো মাপমতো মাপল মাপলাম মাপলি মাপলে মাপলেন মাপলেম মাপলুম মাপসই মাপসহি মাফ মাফকাঠি মাফিক মাফিকসই মাফিকসহি মাফিয়া মাফজোক মাফজোখ মাফলার মাফসই মাবাপ মাবাবা মাবুদ মাবূদ মাভৈ মাভূমি মাম মামু মামা মামাত মামাতো মামানি মামাবাড়ি মামারূপে মামাশ্বশুর মামি মামিশাশুড়ি মামী মামীশাশুড়ী মামুদা মামদো মামদোবাজি মাম্পস মাম্মা মামরা মামলা মামলাকারী মামলাবাজ মামলাবাজি মামলামকদ্দমা মামলামোকদ্দমা মামলারুজু মামুলি মামুলী মামলেট মামলত মামড়ি মামড়ী মার মারু মারওয়া মারওয়ার মারক মারুক মার্ক মার্কা মারকাট মার্কামারা মার্কার মারকারি মার্কারি মার্কিন মার্কিনী মার্কিনযুক্তরাষ্ট্র মার্কিনমুলুক মার্কেট মার্কেটিং মার্কেলাইভ মারকুটে মারকুটো মার্কণ্ড মার্কণ্ডচণ্ডী মার্কণ্ডেয় মার্কণ্ডেয়চণ্ডী মার্কস মার্ক্স মার্কসবাদ মার্ক্সবাদ মার্কসবাদী মার্ক্সবাদী মারখেকো মার্গ মার্গাখ্যায়ী মার্গ্য মার্গণ মার্গশির মার্গশীর্ষ মার্গসংগীত মার্গসঙ্গীত মারা মারাযাওয়া মারাঠা মারাঠি মারাত্মক মারাত্মকভাবে মারাপড়া মারামারি মারি মারিত মারিতাম মারিতিস মারিতে মারিতেছ মারিতেছি মারিতেছিল মারিতেছিলাম মারিতেছিলি মারিতেছিলে মারিতেছিলেন মারিতেছিস মারিতেছে মারিতেছেন মারিতেন মারিন মারিনা মারিব মারিবার মারিবি মারিবে মারিবেন মারিল মারিলাম মারিলি মারিলে মারিলেন মারিস মারিয়া মারিয়াছ মারিয়াছি মারিয়াছিল মারিয়াছিলাম মারিয়াছিলি মারিয়াছিলে মারিয়াছিলেন মারিয়াছিস মারিয়াছে মারিয়াছেন মারিয়ানা মারিয়াম মারিয়ো মারী মার্চ মারীচ মার্চেন্ট মার্চদ্য মার্চমাস মারে মারেঘাও মারেজন মারেন মারেফাত মারো মারোয়া মারোয়াড়ী মারছ মারছি মারছিল মারছিলাম মারছিলি মারছিলে মারছিলেন মারছিলেম মারছিলুম মারছিস মারছে মারছেন মার্জক মার্জার মার্জারী মার্জিত মার্জিতা মার্জিতবুদ্ধি মার্জিতরুচি মার্জিন মার্জন মার্জনা মার্জনাপ্রাপ্ত মার্জনী মার্জনীয় মার্ডার মারণ মারণউচ্চাটন মারণাস্ত্র মারণযজ্ঞ মারণমন্ত্র মারত মারুত মারূত মারতাম মারুতি মারতিস মারতে মারতেছে মারতেন মারতেম মার্তণ্ড মারদাঙ্গা মারদেওয়া মার্দব মারধোর মারধর মারুন মারপিট মারপেঁচ মারপ্যাঁচ মারফত মারফৎ মারফতি মারফতীগান মারফতদার মারফৎদার মারব মারবার মারবি মারবে মারবেন মারবেল মার্বেল মারবো মারমুখ মারমুখী মারমুখো মারমা মারমার মারমূর্তি মারল মারলাম মারলি মারুলি মারলে মারলেন মারলেম মারলুম মার্শাল মার্স মার্সিডিজ মার্সেই মারহাটা মারহাট্টা মারহাবা মার্হাবা মারয়ারী মাল মালু মালউন মালকাছা মালকাটা মালকিন মালকোঁচা মালকোশ মালকোষ মালক্রোক মালখানা মালগাড়ি মালগাড়ী মালগুজার মালগুজারি মালগুজারদার মালগুদাম মালা মালাই মালাইকারি মালাইকারী মালাইকোপ্তা মালাইচাকি মালাইবরফ মালাউন মালাকার মালাকর মালাখানি মালাগাছি মালাগাসি মালাগেঁথে মালাচন্দন মালাজপা মালাযুক্ত মালাদীপক মালাধর মালাবার মালাবিনিময় মালাবদল মালাম মালামাল মালিক মালিকগ্রুপ মালিকা মালিকানা মালিকানাধীন মালিকানাভুক্ত মালিকি মালিকী মালিকত্ব মালিকরূপ মালিকুলমউত মালিকহীন মালিনী মালিন্য মালিন্যযুক্ত মালিন্যহীন মালিবাগ মালিশ মালিস মালী মালেকুলমউত মালো মালোপাড়া মালোপমা মালজামিন মালজমি মালঝাঁপ মালঞ্চ মালুঞ্চা মালঞ্চে মালঞ্চমালা মাল্য মাল্টা মালটানা মালটি মাল্টি মাল্টিপল মাল্টিপ্লেক্স মাল্টিপ্লেক্সিং মাল্টিফাইবার মাল্টিমিটার মাল্টিমিডিয়া মাল্টিলাইন মাল্টিসেক্টর মাল্যচন্দন মাল্যদান মাল্যধারিণী মাল্যধারী মাল্যবান মাল্যবৎ মাল্যবতী মাল্যবন্ধন মাল্যভূষিত মাল্যভূষিতা মাল্যরচনাকারী মালতী মালতীমালা মালতীলতা মালদা মালদ্বীপ মালদহ মালপানি মালপো মালপোয়া মালপত্তর মালপত্র মালপুয়া মালব মালবাহী মালবৈদ্য মালবোঝাই মালবদেশ মালবহনকারী মালভূমি মালুম মালুমকাঠ মালুমকাষ্ঠ মালুমকরা মালমাত্তা মালমসলা মাল্লা মাল্লি মালসা মালসাট মালসি মালসী মালয় মালয়েশিয়া মালয়েশিয়ান মাশুক মাশাল্লা মাশাস মাশরুম মাশুল মাশুলে মাশুলবাবদ মাষ মাষকলাই মাষা মাষ্টার মাস মাস্ক মাস্কাট মাসকাতি মাসকান্দা মাসকাবার মাসকাবারি মাস্কেটিয়ার্স মাসকট মাস্কট মাসকলাই মাসা মাসান্ত মাসান্তিক মাসার্ধ মাসাশ মাসি মাসিক মাসিকপত্র মাসিকবন্ধ মাসিমা মাসিমাতা মাসী মাসীমা মাসীমাতা মাসোয়ারা মাস্ট মাস্যা মাস্টার মাস্টারগিরি মাস্টারি মাস্টারিং মাস্টারদা মাস্টারপিস মাস্টারপ্ল্যান মাস্টারমশাই মাস্টারমহাশয় মাস্টার্স মাস্তান মাস্তানি মাসতুত মাসতুতো মাস্তুল মাসুদ মাসফল মাস্বা মাসব্যাপী মাসুম মাসমাইনে মাসমাস মাসমাহিনা মাসুর মাসরূপে মাসুল মাসশাশুড়ি মাসশ্বশুর মাসসম্পর্কিত মাসহারা মাসহরা মাহ মাহগির মাহা মাহাজনিক মাহাজনিকী মাহাতাব মাহাত্ম্য মাহাত্ম্যকাহিনী মাহাত্ম্যকীর্তন মাহাত্ম্যকথা মাহাত্ম্যযুক্ত মাহাত্ম্যপূর্ণ মাহাত্ম্যবর্ণনাকারী মাহাত্ম্যসংবলিত মাহাদাণে মাহাদান মাহাদানী মাহাফা মাহারা মাহালী মাহি মাহিনা মাহিষ মাহিষ্য মাহিয়ানা মাহেনিউ মাহেন্দ্র মাহেন্দ্রক্ষণ মাহেরমজান মাহেশ মাহেশী মাহুত মাহতাব মাহুতি মাহফিল মাহবুবুল মাহবরা মাহমুদ মাহুর মাহয়ারি মাড় মাড়ওয়ার মাড়ওয়ারি মাড়ুক মাড়া মাড়াই মাড়াইও মাড়াইত মাড়াইতাম মাড়াইতিস মাড়াইতে মাড়াইতেছ মাড়াইতেছি মাড়াইতেছিল মাড়াইতেছিলাম মাড়াইতেছিলি মাড়াইতেছিলে মাড়াইতেছিলেন মাড়াইতেছিস মাড়াইতেছে মাড়াইতেছেন মাড়াইতেন মাড়াইব মাড়াইবার মাড়াইবি মাড়াইবে মাড়াইবেন মাড়াইল মাড়াইলাম মাড়াইলি মাড়াইলে মাড়াইলেন মাড়াইয়া মাড়াইয়াছ মাড়াইয়াছি মাড়াইয়াছিল মাড়াইয়াছিলাম মাড়াইয়াছিলি মাড়াইয়াছিলে মাড়াইয়াছিলেন মাড়াইয়াছিস মাড়াইয়াছে মাড়াইয়াছেন মাড়াইয়ের মাড়াইয়ো মাড়াক মাড়াচ্ছ মাড়াচ্ছি মাড়াচ্ছিল মাড়াচ্ছিলাম মাড়াচ্ছিলি মাড়াচ্ছিলে মাড়াচ্ছিলেন মাড়াচ্ছিলেম মাড়াচ্ছিলুম মাড়াচ্ছিস মাড়াচ্ছে মাড়াচ্ছেন মাড়াত মাড়াতাম মাড়াতিস মাড়াতে মাড়াতেন মাড়াতেম মাড়াতুম মাড়ান মাড়ানি মাড়ানো মাড়াননি মাড়াব মাড়াবার মাড়াবি মাড়াবে মাড়াবেন মাড়াবো মাড়াল মাড়ালাম মাড়ালি মাড়ালে মাড়ালেন মাড়ালেম মাড়ালুম মাড়াস মাড়ায় মাড়ি মাড়িত মাড়িতাম মাড়িতিস মাড়িতে মাড়িতেছ মাড়িতেছি মাড়িতেছিল মাড়িতেছিলাম মাড়িতেছিলি মাড়িতেছিলে মাড়িতেছিলেন মাড়িতেছিস মাড়িতেছে মাড়িতেছেন মাড়িতেন মাড়িব মাড়িবার মাড়িবি মাড়িবে মাড়িবেন মাড়িল মাড়িলাম মাড়িলি মাড়িলে মাড়িলেন মাড়িস মাড়িয়া মাড়িয়াছ মাড়িয়াছি মাড়িয়াছিল মাড়িয়াছিলাম মাড়িয়াছিলি মাড়িয়াছিলে মাড়িয়াছিলেন মাড়িয়াছিস মাড়িয়াছে মাড়িয়াছেন মাড়িয়ে মাড়িয়েছ মাড়িয়েছি মাড়িয়েছিল মাড়িয়েছিলাম মাড়িয়েছিলি মাড়িয়েছিলে মাড়িয়েছিলেন মাড়িয়েছিলেম মাড়িয়েছিলুম মাড়িয়েছিস মাড়িয়েছে মাড়িয়েছেন মাড়িয়ো মাড়ে মাড়েন মাড়ের মাড়োয়ারি মাড়োয়াড়ি মাড়ছ মাড়ছি মাড়ছিল মাড়ছিলাম মাড়ছিলি মাড়ছিলে মাড়ছিলেন মাড়ছিলেম মাড়ছিলুম মাড়ছিস মাড়ছে মাড়ছেন মাড়যুক্ত মাড়ত মাড়তাম মাড়তিস মাড়তে মাড়তেন মাড়তেম মাড়তুম মাড়দেওয়া মাড়ুন মাড়ব মাড়বার মাড়বি মাড়বে মাড়বেন মাড়বো মাড়ল মাড়লাম মাড়লি মাড়লে মাড়লেন মাড়লেম মাড়লুম মাড়ুয়া মাড়ুয়াবাদী মায় মায়া মায়াকাটানো মায়াকানন মায়াকান্না মায়াঘোর মায়াজাল মায়াডোর মায়াদেবী মায়াদণ্ড মায়াদয়া মায়াদয়াহীন মায়ানমার মায়াপাশ মায়াপ্রপঞ্চ মায়াপড়া মায়াবাদ মায়াবাদী মায়াবিদ্যা মায়াবিনী মায়াবী মায়াবতী মায়াবদ্ধ মায়াবন্ধন মায়াবল মায়ামুক্ত মায়ামৃগ মায়ামি মায়ামোহ মায়ামমতা মায়ামরীচিকা মায়াময় মায়াময়ী মায়াময়রূপ মায়ারাজ্য মায়ারজ্জু মায়ারথ মায়ারূপধারী মায়ালোমা মায়িক মায়ী মায়ে মায়েনমার মায়েলোমা মায়োকার্ডিয়াল মায়োগ্লোবিন মায়োসিস মায়্যা মায়না মি মি. মিঃ মিইয়ে মিউ মিউচুয়াল মিউজিক মিউজিকাল মিউজিক্যাল মিউজিসিয়ান মিউজিয়াম মিউটেশন মিউট্যান্ট মিউনিখ মিউনিসিপাল মিউনিসিপালিটি মিউমিউ মিক মিকাডো মিকি মিক্যা মিক্স মিক্সার মিক্সিং মিক্সিডিমা মিক্সচার মিক্সড মিকড়ি মিগ মিগী মিচকে মিছকিন মিছকীন মিছা মিছামিছি মিছিমিছি মিছিল মিছিলকারী মিছে মিছেকান্না মিছেমিছি মিছরি মিছরিরছুরি মিছরিরছুরিকা মিজান মিজোরাম মিজরাব মিঞা মিঞাসাহেব মিট মিটক মিটুক মিটা মিটাই মিটাইও মিটাইত মিটাইতাম মিটাইতিস মিটাইতে মিটাইতেছ মিটাইতেছি মিটাইতেছিল মিটাইতেছিলাম মিটাইতেছিলি মিটাইতেছিলে মিটাইতেছিলেন মিটাইতেছিস মিটাইতেছে মিটাইতেছেন মিটাইতেন মিটাইব মিটাইবার মিটাইবি মিটাইবে মিটাইবেন মিটাইল মিটাইলাম মিটাইলি মিটাইলে মিটাইলেন মিটাইয়া মিটাইয়াছ মিটাইয়াছি মিটাইয়াছিল মিটাইয়াছিলাম মিটাইয়াছিলি মিটাইয়াছিলে মিটাইয়াছিলেন মিটাইয়াছিস মিটাইয়াছে মিটাইয়াছেন মিটাইয়ো মিটাক মিটান মিটানো মিটাবার মিটাবে মিটার মিটারগেজ মিটাস মিটি মিটিং মিটিওরলজি মিটিত মিটিতাম মিটিতিস মিটিতে মিটিতেছ মিটিতেছি মিটিতেছিল মিটিতেছিলাম মিটিতেছিলি মিটিতেছিলে মিটিতেছিলেন মিটিতেছিস মিটিতেছে মিটিতেছেন মিটিতেন মিটিব মিটিবার মিটিবি মিটিবে মিটিবেন মিটিমিটি মিটিল মিটিলাম মিটিলি মিটিলে মিটিলেন মিটিস মিটিয়া মিটিয়াছ মিটিয়াছি মিটিয়াছিল মিটিয়াছিলাম মিটিয়াছিলি মিটিয়াছিলে মিটিয়াছিলেন মিটিয়াছিস মিটিয়াছে মিটিয়াছেন মিটিয়ে মিটিয়েছ মিটিয়েছি মিটিয়েছিল মিটিয়েছিলাম মিটিয়েছিলি মিটিয়েছিলে মিটিয়েছিলেন মিটিয়েছিলেম মিটিয়েছিলুম মিটিয়েছিস মিটিয়েছে মিটিয়েছেন মিটিয়ো মিটচ্ছ মিটচ্ছি মিটচ্ছিল মিটচ্ছিলাম মিটচ্ছিলি মিটচ্ছিলে মিটচ্ছিলেন মিটচ্ছিলেম মিটচ্ছিলুম মিটচ্ছিস মিটচ্ছে মিটচ্ছেন মিটে মিটেছ মিটেছি মিটেছিল মিটেছিলাম মিটেছিলি মিটেছিলে মিটেছিলেন মিটেছিলেম মিটেছিলুম মিটেছিস মিটেছে মিটেছেন মিটেন মিটো মিটছ মিটছি মিটছিল মিটছিলাম মিটছিলি মিটছিলে মিটছিলেন মিটছিলেম মিটছিলুম মিটছিস মিটছে মিটছেন মিটত মিটতাম মিটতিস মিটতে মিটতেন মিটতেম মিটতুম মিটন মিটনেরিয়াম মিটনো মিটফোর্ড মিটব মিটবার মিটবি মিটবে মিটবেন মিটবো মিটমাট মিটমিট মিটমিটে মিটল মিটলাম মিটলি মিটলে মিটলেন মিটলেম মিটলুম মিটস মিটয় মিঠা মিঠাই মিঠাইওয়ালা মিঠাকুমড়া মিঠাকুমড়ো মিঠাকড়া মিঠানি মিঠাপুকুর মিঠাপানি মিঠে মিঠেকুমড়া মিঠেকুমড়ো মিঠেকড়া মিঠেল মিডওয়ে মিডি মিডিয়া মিডিয়াওয়ার্ল্ড মিডিয়াপ্লেক্স মিডিয়াম মিডিয়ম মিডনাইট মিডনাইটস মিডফিল্ড মিডফিল্ডার মিডল মিডলওয়্যার মিত মিতকনে মিতা মিতাক্ষর মিতাক্ষরা মিতাচার মিতাচারিণী মিতাচারী মিতালি মিতালী মিতাশী মিতাশন মিতাহার মিতাহারী মিতি মিতিন মিতিনী মিতে মিত্তু মিত্তিকা মিতবাক মিতবাচ মিতব্যয় মিতব্যয়ী মিতবর মিতভাষিণী মিতভাষী মিতভোজী মিতভোজন মিত্র মিত্রা মিত্রাক্ষর মিত্রতা মিত্রত্ব মিত্রপক্ষ মিত্রপক্ষীয় মিত্রবাহিনী মিত্রবিমান মিত্রশক্তি মিত্রসৈন্য মিত্রহীন মিথাইল মিথানল মিথিলা মিথিলাদেশ মিথিলাদেশীয় মিথিলাধিপতি মিথিলাপতি মিথিলাবাসী মিথিলারাজ মিথেন মিথোগ্রাফি মিথোজীবিতা মিথোজীবী মিথ্যুক মিথ্যা মিথ্যাচার মিথ্যাচারিণী মিথ্যাচারী মিথ্যাচরণ মিথ্যাজ্ঞান মিথ্যানবী মিথ্যাপবাদ মিথ্যাবাদ মিথ্যাবাদিতা মিথ্যাবাদিনী মিথ্যাবাদী মিথ্যাভাষিণী মিথ্যাভাষী মিথ্যাভাষণ মিথ্যারজাহাজ মিথ্যারঝুড়ি মিথ্যারসরাই মিথ্যাসাক্ষী মিথ্যে মিথ্যেবাদিতা মিথ্যেবাদী মিথুন মিথুনরাশি মিন মিনা মিনাকার মিনাকারী মিনার মিনারকেন্দ্রীয় মিনারা মিনারেল মিনারহতে মিনি মিনিগান মিনিট মিনিটস মিনিবাস মিনিমাম মিনিমাল মিনিস্কার্ট মিনিস্টার মিনে মিন্টু মিন্টুরোড মিনতি মিন্তি মিনতিপূর্ণ মিনতিপূর্বক মিনমিন মিনমিনে মিনষে মিনসা মিনসে মিন্সে মিমি মিম্বার মিরগেল মিরাকল মিরাশ মিরাশি মিরাস মিরাসি মিরিতি মিরিন্ডা মিরজা মির্জা মির্জাই মির্জানগর মির্জাপুর মিরদা মিরধা মিরপুর মিরবহর মিরমদন মিরমুনশি মিরর মিল মিলক মিলুক মিল্ক মিলকৃত মিলকরণ মিলা মিলাই মিলাইও মিলাইত মিলাইতাম মিলাইতিস মিলাইতে মিলাইতেছ মিলাইতেছি মিলাইতেছিল মিলাইতেছিলাম মিলাইতেছিলি মিলাইতেছিলে মিলাইতেছিলেন মিলাইতেছিস মিলাইতেছে মিলাইতেছেন মিলাইতেন মিলাইব মিলাইবার মিলাইবি মিলাইবে মিলাইবেন মিলাইল মিলাইলাম মিলাইলি মিলাইলে মিলাইলেন মিলাইয়া মিলাইয়াছ মিলাইয়াছি মিলাইয়াছিল মিলাইয়াছিলাম মিলাইয়াছিলি মিলাইয়াছিলে মিলাইয়াছিলেন মিলাইয়াছিস মিলাইয়াছে মিলাইয়াছেন মিলাইয়ো মিলাক মিলাদ মিলাদুন মিলান মিলানো মিলাবার মিলামিশা মিলামেশা মিলালো মিলাস মিলি মিলিওন মিলিগ্রাম মিলিটারি মিলিত মিলিতা মিলিতাম মিলিতিস মিলিতে মিলিতেছ মিলিতেছি মিলিতেছিল মিলিতেছিলাম মিলিতেছিলি মিলিতেছিলে মিলিতেছিলেন মিলিতেছিস মিলিতেছে মিলিতেছেন মিলিতেন মিলিতভাবে মিলিদের মিলিনিয়াম মিলিব মিলিবার মিলিবারে মিলিবি মিলিবে মিলিবেন মিলিভোল্ট মিলিমিটার মিলিল মিলিলাম মিলিলি মিলিলিটার মিলিলে মিলিলেন মিলিশিয়া মিলিস মিলিয়া মিলিয়াছ মিলিয়াছি মিলিয়াছিল মিলিয়াছিলাম মিলিয়াছিলি মিলিয়াছিলে মিলিয়াছিলেন মিলিয়াছিস মিলিয়াছে মিলিয়াছেন মিলিয়ে মিলিয়েছ মিলিয়েছি মিলিয়েছিল মিলিয়েছিলাম মিলিয়েছিলি মিলিয়েছিলে মিলিয়েছিলেন মিলিয়েছিলেম মিলিয়েছিলুম মিলিয়েছিস মিলিয়েছে মিলিয়েছেন মিলিয়ো মিলিয়ন মিলচ্ছ মিলচ্ছি মিলচ্ছিল মিলচ্ছিলাম মিলচ্ছিলি মিলচ্ছিলে মিলচ্ছিলেন মিলচ্ছিলেম মিলচ্ছিলুম মিলচ্ছিস মিলচ্ছে মিলচ্ছেন মিলে মিলেছ মিলেছি মিলেছিল মিলেছিলাম মিলেছিলি মিলেছিলে মিলেছিলেন মিলেছিলেম মিলেছিলুম মিলেছিস মিলেছে মিলেছেন মিলেনিয়াম মিলেমিশে মিলছ মিলছি মিলছিল মিলছিলাম মিলছিলি মিলছিলে মিলছিলেন মিলছিলেম মিলছিলুম মিলছিস মিলছে মিলছেন মিলছেনা মিলজুক মিলযুক্ত মিলত মিলতাম মিলতিস মিলতে মিলতেন মিলতেম মিলতনা মিলতুম মিলন মিলুন মিলনকাল মিলনক্ষেত্র মিলনগৃহ মিলনাত্মক মিলনান্তক মিলনায়তন মিলনো মিলনোৎসব মিলনজাত মিলনজনক মিলনজনিত মিলনতীর্থ মিলনবিন্দু মিলনব্যবস্থা মিলনসাধন মিলনসজ্জা মিলনস্থান মিলনস্থল মিলব মিলবার মিলবি মিলবে মিলবেন মিলবো মিলবর্জিত মিলমিলা মিলমিলে মিলমিশ মিলল মিল্লাত মিললাম মিললি মিললে মিললেন মিললেম মিল্লত মিললুম মিলস মিলহীন মিলহীনতা মিলয় মিশ মিশক মিশুক মিশকালো মিশখাওয়া মিশা মিশাই মিশাইও মিশাইত মিশাইতাম মিশাইতিস মিশাইতে মিশাইতেছ মিশাইতেছি মিশাইতেছিল মিশাইতেছিলাম মিশাইতেছিলি মিশাইতেছিলে মিশাইতেছিলেন মিশাইতেছিস মিশাইতেছে মিশাইতেছেন মিশাইতেন মিশাইব মিশাইবার মিশাইবি মিশাইবে মিশাইবেন মিশাইল মিশাইলাম মিশাইলি মিশাইলে মিশাইলেন মিশাইয়া মিশাইয়াছ মিশাইয়াছি মিশাইয়াছিল মিশাইয়াছিলাম মিশাইয়াছিলি মিশাইয়াছিলে মিশাইয়াছিলেন মিশাইয়াছিস মিশাইয়াছে মিশাইয়াছেন মিশাইয়ো মিশাক মিশান মিশানো মিশাবার মিশামিশি মিশাল মিশাস মিশি মিশিগান মিশিত মিশিতাম মিশিতিস মিশিতে মিশিতেছ মিশিতেছি মিশিতেছিল মিশিতেছিলাম মিশিতেছিলি মিশিতেছিলে মিশিতেছিলেন মিশিতেছিস মিশিতেছে মিশিতেছেন মিশিতেন মিশিব মিশিবার মিশিবি মিশিবে মিশিবেন মিশিমা মিশিল মিশিলাম মিশিলি মিশিলে মিশিলেন মিশিস মিশিয়া মিশিয়াছ মিশিয়াছি মিশিয়াছিল মিশিয়াছিলাম মিশিয়াছিলি মিশিয়াছিলে মিশিয়াছিলেন মিশিয়াছিস মিশিয়াছে মিশিয়াছেন মিশিয়ে মিশিয়েছ মিশিয়েছি মিশিয়েছিল মিশিয়েছিলাম মিশিয়েছিলি মিশিয়েছিলে মিশিয়েছিলেন মিশিয়েছিলেম মিশিয়েছিলুম মিশিয়েছিস মিশিয়েছে মিশিয়েছেন মিশিয়ো মিশচ্ছ মিশচ্ছি মিশচ্ছিল মিশচ্ছিলাম মিশচ্ছিলি মিশচ্ছিলে মিশচ্ছিলেন মিশচ্ছিলেম মিশচ্ছিলুম মিশচ্ছিস মিশচ্ছে মিশচ্ছেন মিশে মিশেছ মিশেছি মিশেছিল মিশেছিলাম মিশেছিলি মিশেছিলে মিশেছিলেন মিশেছিলেম মিশেছিলুম মিশেছিস মিশেছে মিশেছেন মিশেন মিশেল মিশেয়ে মিশছ মিশছি মিশছিল মিশছিলাম মিশছিলি মিশছিলে মিশছিলেন মিশছিলেম মিশছিলুম মিশছিস মিশছে মিশছেন মিশত মিশতাম মিশতিস মিশতে মিশতেন মিশতেম মিশতুম মিশন মিশুন মিশনারি মিশনারিস মিশনারিসুলভ মিশনো মিশব মিশবার মিশবি মিশবে মিশবেন মিশবো মিশমিশ মিশমিশে মিশর মিশ্র মিশরকুমারী মিশরি মিশ্রিত মিশ্রিতকরা মিশ্রী মিশ্রীদানা মিশরীয় মিশ্রজাতি মিশ্রণ মিশ্রণজাত মিশ্রদর্শন মিশ্রধাতু মিশ্রবাক্য মিশ্ররাগ মিশল মিশলাম মিশলি মিশলে মিশলেন মিশলেম মিশলুম মিশস মিশয় মিষ্ট মিষ্টকারক মিষ্টান্ন মিষ্টান্নভোজন মিষ্টি মিষ্টিকুমড়া মিষ্টিকুমড়ো মিষ্টিমুখ মিষ্টিসিজম মিষ্টিস্বাদ মিষ্টতা মিষ্টত্ব মিষ্টদ্রব্য মিষ্টভাষিণী মিষ্টভাষী মিষ্টমুখ মিস মিসওয়াক মিসকাল মিসকালো মিসকি মিসকিন মিসাইল মিসি মিসিং মিসিবাবা মিসির মিসিল মিসিসিপি মিসেস মিস্টার মিস্টিসিজম মিস্টেক মিস্ট্রেস মিস্তি মিস্তিরি মিস্ত্রি মিস্ত্রী মিস্ত্রীপাড়া মিসমার মিসমিশে মিসমিস মিসমিসে মিসর মিসরি মিসরীয় মিহি মিহিদানা মিহিমোটা মিহির মিহিরকিরণ মিহনত মিহরাব মিড় মিড়টানা মিয় মিয়ক মিয়া মিয়াঁ মিয়াই মিয়াইও মিয়াইত মিয়াইতাম মিয়াইতিস মিয়াইতে মিয়াইতেছ মিয়াইতেছি মিয়াইতেছিল মিয়াইতেছিলাম মিয়াইতেছিলি মিয়াইতেছিলে মিয়াইতেছিলেন মিয়াইতেছিস মিয়াইতেছে মিয়াইতেছেন মিয়াইতেন মিয়াইব মিয়াইবার মিয়াইবি মিয়াইবে মিয়াইবেন মিয়াইল মিয়াইলাম মিয়াইলি মিয়াইলে মিয়াইলেন মিয়াইয়া মিয়াইয়াছ মিয়াইয়াছি মিয়াইয়াছিল মিয়াইয়াছিলাম মিয়াইয়াছিলি মিয়াইয়াছিলে মিয়াইয়াছিলেন মিয়াইয়াছিস মিয়াইয়াছে মিয়াইয়াছেন মিয়াইয়ো মিয়াও মিয়াজি মিয়াদ মিয়াদি মিয়ান মিয়ানি মিয়ানো মিয়ানমার মিয়াবন্দ মিয়াঁর মিয়াস মিয়াসাব মিয়াসাহেব মিয়ায় মিয়ি মিয়িয়ে মিয়িয়েছ মিয়িয়েছি মিয়িয়েছিল মিয়িয়েছিলাম মিয়িয়েছিলি মিয়িয়েছিলে মিয়িয়েছিলেন মিয়িয়েছিলেম মিয়িয়েছিলুম মিয়িয়েছিস মিয়িয়েছে মিয়িয়েছেন মিয়িয়ো মিয়চ্ছ মিয়চ্ছি মিয়চ্ছিল মিয়চ্ছিলাম মিয়চ্ছিলি মিয়চ্ছিলে মিয়চ্ছিলেন মিয়চ্ছিলেম মিয়চ্ছিলুম মিয়চ্ছিস মিয়চ্ছে মিয়চ্ছেন মিয়োসিস মিয়ত মিয়তাম মিয়তিস মিয়তে মিয়তেন মিয়তেম মিয়তুম মিয়ন মিয়নো মিয়ব মিয়বার মিয়বি মিয়বে মিয়বেন মিয়বো মিয়ল মিয়লাম মিয়লি মিয়লে মিয়লেন মিয়লেম মিয়লুম মিয়স মিয়য় মচ মুচ মচকা মুচকা মচকাই মচকাইও মচকাইত মচকাইতাম মচকাইতিস মচকাইতে মচকাইতেছ মচকাইতেছি মচকাইতেছিল মচকাইতেছিলাম মচকাইতেছিলি মচকাইতেছিলে মচকাইতেছিলেন মচকাইতেছিস মচকাইতেছে মচকাইতেছেন মচকাইতেন মচকাইব মচকাইবার মচকাইবি মচকাইবে মচকাইবেন মচকাইল মচকাইলাম মচকাইলি মচকাইলে মচকাইলেন মচকাইয়া মচকাইয়াছ মচকাইয়াছি মচকাইয়াছিল মচকাইয়াছিলাম মচকাইয়াছিলি মচকাইয়াছিলে মচকাইয়াছিলেন মচকাইয়াছিস মচকাইয়াছে মচকাইয়াছেন মচকাইয়ো মচকাক মচকাচ্ছ মচকাচ্ছি মচকাচ্ছিল মচকাচ্ছিলাম মচকাচ্ছিলি মচকাচ্ছিলে মচকাচ্ছিলেন মচকাচ্ছিলেম মচকাচ্ছিলুম মচকাচ্ছিস মচকাচ্ছে মচকাচ্ছেন মচকাত মচকাতাম মচকাতিস মচকাতে মচকাতেন মচকাতেম মচকাতুম মচকান মচকানি মচকানো মুচকানো মচকাব মচকাবার মচকাবি মচকাবে মচকাবেন মচকাবো মচকাল মচকালাম মচকালি মচকালে মচকালেন মচকালেম মচকালুম মচকাস মচকায় মুচকি মচকে মুচকে মচকেছ মচকেছি মচকেছিল মচকেছিলাম মচকেছিলি মচকেছিলে মচকেছিলেন মচকেছিলেম মচকেছিলুম মচকেছিস মচকেছে মচকেছেন মচকো মুচকুন্দ মুচুকুন্দ মুচি মুচিনী মুচিপাড়া মুচী মচ্ছ মচ্ছি মুচ্ছদ্দী মুচ্ছুদ্দী মচ্ছব মচ্ছর মীজলসজীবাণু মীযান মীটিং মীন মীনঅঙ্কিত মীনকেতন মীনাক্ষী মীনধ্বজ মীননাথ মীননয়না মীনরাশি মীম মীমাংসক মীমাংসা মীমাংসাকারী মীমাংসাদর্শন মীমাংসাশাস্ত্র মীমাংসিকা মীমাংসিত মচমচ মুচমুচ মচমচা মচমচানি মচমচে মুচমুচে মীর মীরগঞ্জ মীরাবাঈ মীর্জা মীরজাফর মীরবহর মীরমুনশী মচলি মীলিত মুচলেকা মীলন মুচলম মীড় মুচড় মুচড়ক মুচড়া মুচড়াই মুচড়াইও মুচড়াইত মুচড়াইতাম মুচড়াইতিস মুচড়াইতে মুচড়াইতেছ মুচড়াইতেছি মুচড়াইতেছিল মুচড়াইতেছিলাম মুচড়াইতেছিলি মুচড়াইতেছিলে মুচড়াইতেছিলেন মুচড়াইতেছিস মুচড়াইতেছে মুচড়াইতেছেন মুচড়াইতেন মুচড়াইব মুচড়াইবার মুচড়াইবি মুচড়াইবে মুচড়াইবেন মুচড়াইল মুচড়াইলাম মুচড়াইলি মুচড়াইলে মুচড়াইলেন মুচড়াইয়া মুচড়াইয়াছ মুচড়াইয়াছি মুচড়াইয়াছিল মুচড়াইয়াছিলাম মুচড়াইয়াছিলি মুচড়াইয়াছিলে মুচড়াইয়াছিলেন মুচড়াইয়াছিস মুচড়াইয়াছে মুচড়াইয়াছেন মুচড়াইয়ো মুচড়াক মুচড়ান মুচড়ানো মুচড়াস মুচড়ায় মুচড়ি মুচড়িয়ে মুচড়িয়েছ মুচড়িয়েছি মুচড়িয়েছিল মুচড়িয়েছিলাম মুচড়িয়েছিলি মুচড়িয়েছিলে মুচড়িয়েছিলেন মুচড়িয়েছিলেম মুচড়িয়েছিলুম মুচড়িয়েছিস মুচড়িয়েছে মুচড়িয়েছেন মুচড়িয়ো মুচড়চ্ছ মুচড়চ্ছি মুচড়চ্ছিল মুচড়চ্ছিলাম মুচড়চ্ছিলি মুচড়চ্ছিলে মুচড়চ্ছিলেন মুচড়চ্ছিলেম মুচড়চ্ছিলুম মুচড়চ্ছিস মুচড়চ্ছে মুচড়চ্ছেন মুচড়ে মুচড়েছ মুচড়েছি মুচড়েছিল মুচড়েছিলাম মুচড়েছিলি মুচড়েছিলে মুচড়েছিলেন মুচড়েছিলেম মুচড়েছিলুম মুচড়েছিস মুচড়েছে মুচড়েছেন মুচড়ো মুচড়োবার মুচড়ত মুচড়তাম মুচড়তিস মুচড়তে মুচড়তেন মুচড়তেম মুচড়তুম মুচড়ন মুচড়নো মুচড়ব মুচড়বি মুচড়বে মুচড়বেন মুচড়বো মুচড়ল মুচড়লাম মুচড়লি মুচড়লে মুচড়লেন মুচড়লেম মুচড়লুম মুচড়স মুচড়য় মে মেইড মেইডেন মেইন মেইনফ্রেম মেইল মেইলিং মেইলিংলিস্ট মেও মেওধরা মেওয়া মেক মেকআপ মেকানিক মেকানিকাল মেকানিক্যাল মেকানিকস মেকানিক্স মেকানিজম মেকি মেকিং মেকী মেক্সিকান মেক্সিকানা মেক্সিকীয় মেক্সিকো মেখে মেখেছ মেখেছি মেখেছিল মেখেছিলাম মেখেছিলি মেখেছিলে মেখেছিলেন মেখেছিলেম মেখেছিলুম মেখেছিস মেখেছে মেখেছেন মেখো মেখলা মেখলাবৃত মেগা মেগাওয়াট মেগান মেগাপ্যাসকেল মেগাপ্যাস্কেল মেগাফোন মেগাফোর্স মেগাবাইট মেগাবিট মেগাবিটস মেগাভোল্ট মেগামিটার মেগাস্টার মেগাহার্টজ মেগাহার্টস মেগে মেগেছ মেগেছি মেগেছিল মেগেছিলাম মেগেছিলি মেগেছিলে মেগেছিলেন মেগেছিলেম মেগেছিলুম মেগেছিস মেগেছে মেগেছেন মেগো মেঘ মেঘকরা মেঘগর্জন মেঘঘনানো মেঘাচ্ছন্ন মেঘাত্যয় মেঘাবিষ্ট মেঘাবৃত মেঘালয় মেঘালয়া মেঘাড়ম্বর মেঘেরঘটা মেঘেরডাক মেঘজাত মেঘজাল মেঘজমা মেঘযুক্ত মেঘডাকা মেঘডম্বর মেঘডুম্বুর মেঘদূত মেঘধনু মেঘনা মেঘনাদ মেঘনির্ঘোষ মেঘনির্মুক্ত মেঘনীল মেঘপুঞ্জ মেঘবাহ মেঘবাহন মেঘবতী মেঘবরণ মেঘবর্ণ মেঘবৃষ্টি মেঘমুক্ত মেঘমালা মেঘমেদুর মেঘমন্দ্র মেঘমল্লার মেঘরাগ মেঘরাজ মেঘরাশি মেঘরুচি মেঘলা মেঘলোক মেঘস্তর মেঘহীন মেঙ্গে মেঙ্গেছ মেঙ্গেছি মেঙ্গেছিল মেঙ্গেছিলাম মেঙ্গেছিলি মেঙ্গেছিলে মেঙ্গেছিলেন মেঙ্গেছিলেম মেঙ্গেছিলুম মেঙ্গেছিস মেঙ্গেছে মেঙ্গেছেন মেঙ্গো মেচেতা মেচতা মেছের মেছো মেছোবাজার মেছোহাটা মেছতা মেছুনী মেছুয়া মেছুয়ানী মৌজা মৌমাছি মৌলিক মেজ মেজাজ মেজাজি মেজাজযুক্ত মেজে মেজেছ মেজেছি মেজেছিল মেজেছিলাম মেজেছিলি মেজেছিলে মেজেছিলেন মেজেছিলেম মেজেছিলুম মেজেছিস মেজেছে মেজেছেন মেজেন্টা মেজো মেজদা মেজদাদা মেজদি মেজদিদি মেজবান মেজবানি মেজভাই মেজমান মেজমেজ মেজমেজে মেজর মেজরিটি মেঝ মেঝে মেঝো মেট মেটা মেটাক মেটাচ্ছ মেটাচ্ছি মেটাচ্ছিল মেটাচ্ছিলাম মেটাচ্ছিলি মেটাচ্ছিলে মেটাচ্ছিলেন মেটাচ্ছিলেম মেটাচ্ছিলুম মেটাচ্ছিস মেটাচ্ছে মেটাচ্ছেন মেটাত মেটাতাম মেটাতিস মেটাতে মেটাতেন মেটাতেম মেটাতুম মেটান মেটানো মেটাপ্লাসিয়া মেটাফেজ মেটাব মেটাবার মেটাবি মেটাবে মেটাবেন মেটাবো মেটাবোলিজম মেটাবলিক মেটামরফোসিস মেটাল মেটালাম মেটালি মেটালিক মেটালিকা মেটালে মেটালেন মেটালেম মেটালুম মেটালমেশিন মেটাস মেটাস্টাসিস মেটি মেটে মেটেঘর মেটেন মেটেনি মেটেনসেফালন মেটেসাপ মেটবার মেট্রিক মেট্রিকটন মেট্রিকপদ্ধতি মেট্রিকুলেশান মেট্রিকুলেশন মেট্রিক্স মেট্রো মেট্রোওয়েভ মেট্রোপলিটন মেট্রোপলিস মেট্রোপুলিস মেট্রন মেটুলি মেটুলী মেঠাই মেঠাইমিঠাই মেঠে মেঠো মেডাল মেডিকাল মেডিকেল মেডিক্যাল মেডিটেশন মেডিসিন মেডেল মেডেলধারী মেডুলা মেডুসা মেঢ্র মেতে মেতেছ মেতেছি মেতেছিল মেতেছিলাম মেতেছিলি মেতেছিলে মেতেছিলেন মেতেছিলেম মেতেছিলুম মেতেছিস মেতেছে মেতেছেন মেতো মেতসিস মেথি মেথড মেথর মেথরগিরি মেথরানী মেদ মেদা মেদামারা মেদি মেদিনী মেদিনীনিবদ্ধ মেদিনীপুর মেদিনীপুরী মেদিনীমণ্ডল মেদনি মেদনী মেদবাহুল্য মেদবহুল মেদুর মেদস্ফীত মেধ মেধা মেধাতালিকা মেধাবিনী মেধাবী মেধাশক্তি মেধাসম্পন্ন মেধাহীন মেধো মেধ্য মেনু মেনকা মেনি মেনিনজাইটিস মেনিমুখো মেনী মেনীমুখো মেনে মেনেছ মেনেছি মেনেছিল মেনেছিলাম মেনেছিলি মেনেছিলে মেনেছিলেন মেনেছিলেম মেনেছিলুম মেনেছিস মেনেছে মেনেছেন মেনো মেন্যু মেন্দি মেন্ধী মেপে মেপেছ মেপেছি মেপেছিল মেপেছিলাম মেপেছিলি মেপেছিলে মেপেছিলেন মেপেছিলেম মেপেছিলুম মেপেছিস মেপেছে মেপেছেন মেপো মেম মেমান মেমোরি মেমোরিয়াল মেম্বার মেম্বার্স মেম্বর মেমব্রেন মেমরি মেমসাব মেমসাহেব মেরু মেরুকেন্দ্র মেরুকরণ মেরা মেরাপ মেরামত মেরামতকারী মেরামতকার্য মেরামতি মেরি মেরিন মেরিনা মেরিনার মেরিনার্স মেরিনো মেরিল্যান্ড মেরী মেরে মেরেকেটে মেরেছ মেরেছি মেরেছিল মেরেছিলাম মেরেছিলি মেরেছিলে মেরেছিলেন মেরেছিলেম মেরেছিলুম মেরেছিস মেরেছে মেরেছেন মেরেন মেরো মেরজাই মেরুজ্যোতি মেরুদেশ মেরুদেশীয় মেরুদণ্ড মেরুদণ্ডী মেরুদণ্ডহীন মেরুদ্বয় মেরুন মেরুনরং মেরুপ্রদেশ মেরুপর্বত মেরুপ্রভা মেরুবিন্দু মেরুবৃত্তের মেরুবলয়ে মেরুমুখী মেরুমধ্যে মেরুরেখা মেল মেলক মেলুক মেলা মেলাক মেলাকার মেলাঘর মেলাচ্ছ মেলাচ্ছি মেলাচ্ছিল মেলাচ্ছিলাম মেলাচ্ছিলি মেলাচ্ছিলে মেলাচ্ছিলেন মেলাচ্ছিলেম মেলাচ্ছিলুম মেলাচ্ছিস মেলাচ্ছে মেলাচ্ছেন মেলাটোনিন মেলাত মেলাতাম মেলাতিস মেলাতে মেলাতেন মেলাতেম মেলাতুম মেলান মেলানি মেলানী মেলানো মেলানোমা মেলাপ্রাঙ্গণ মেলাব মেলাবার মেলাবি মেলাবিশেষ মেলাবে মেলাবেন মেলাবো মেলামেশা মেলামেশাটা মেলামেশানো মেলামেশার মেলার মেলাল মেলালাম মেলালি মেলালে মেলালেন মেলালেম মেলালুম মেলাস মেলায় মেলি মেলিত মেলিতাম মেলিতিস মেলিতে মেলিতেছ মেলিতেছি মেলিতেছিল মেলিতেছিলাম মেলিতেছিলি মেলিতেছিলে মেলিতেছিলেন মেলিতেছিস মেলিতেছে মেলিতেছেন মেলিতেন মেলিব মেলিবার মেলিবি মেলিবে মেলিবেন মেলিল মেলিলাম মেলিলি মেলিলে মেলিলেন মেলিস মেলিয়া মেলিয়াছ মেলিয়াছি মেলিয়াছিল মেলিয়াছিলাম মেলিয়াছিলি মেলিয়াছিলে মেলিয়াছিলেন মেলিয়াছিস মেলিয়াছে মেলিয়াছেন মেলিয়ো মেলে মেলেছ মেলেছি মেলেছিল মেলেছিলাম মেলেছিলি মেলেছিলে মেলেছিলেন মেলেছিলেম মেলেছিলুম মেলেছিস মেলেছে মেলেছেন মেলেন মেলেনা মেলেনি মেলো মেলোডি মেলোডিক মেলোডিস মেলছ মেলছি মেলছিল মেলছিলাম মেলছিলি মেলছিলে মেলছিলেন মেলছিলেম মেলছিলুম মেলছিস মেলছে মেলছেন মেলট্রেন মেলত মেলতাম মেলতিস মেলতে মেলতেন মেলতেম মেলতুম মেলন মেলুন মেলব মেলবার মেলবি মেলবে মেলবেন মেলবো মেলবোর্ন মেলবন্ধন মেলভ্যান মেলল মেললাম মেললি মেললে মেললেন মেললেম মেললুম মেশ মেশা মেশাক মেশাচ্ছ মেশাচ্ছি মেশাচ্ছিল মেশাচ্ছিলাম মেশাচ্ছিলি মেশাচ্ছিলে মেশাচ্ছিলেন মেশাচ্ছিলেম মেশাচ্ছিলুম মেশাচ্ছিস মেশাচ্ছে মেশাচ্ছেন মেশাত মেশাতাম মেশাতিস মেশাতে মেশাতেন মেশাতেম মেশাতুম মেশান মেশানো মেশাব মেশাবার মেশাবি মেশাবে মেশাবেন মেশাবো মেশামিশি মেশামেশি মেশাল মেশালাম মেশালি মেশালে মেশালেন মেশালেম মেশালুম মেশাস মেশিন মেশিনকোড মেশিনগান মেশিনঘর মেশিনারি মেশিনচালক মেশিনচালানো মেশিনপত্র মেশে মেশেন মেশবার মেষ মেষাদি মেষী মেষচারণ মেষপালক মেষপালন মেষরাশি মেস মেস্ক মেসা মেসার্স মেসি মেসিডোনিয়া মেসিডোনিয়ান মেসীয় মেসেজ মেসেজিং মেসেঞ্জার মেসেনকাইম মেসো মেসোজোম মেসোপটেমিয়া মেসোপটেমীয় মেহ মেহগনি মেহেদি মেহেদী মেহেন্দি মেহেন্দিপূজা মেহেরপুর মেহেরবান মেহেরবানি মেহেরবানী মেহদি মেহদী মেহনত মেহনৎ মেহনতকারী মেহনৎকারী মেহনতানা মেহনতি মেহন্নত মেহমান মেহমানি মেহমানদারি মেহমানদারী মেহরাব মেড়া মেড়ে মেড়েছ মেড়েছি মেড়েছিল মেড়েছিলাম মেড়েছিলি মেড়েছিলে মেড়েছিলেন মেড়েছিলেম মেড়েছিলুম মেড়েছিস মেড়েছে মেড়েছেন মেড়ো মেড়ুয়া মেড়ুয়াবাদী মেয় মেয়াদ মেয়াদকাল মেয়াদি মেয়াদী মেয়াদযুক্ত মেয়াদবিহীন মেয়ে মেয়েকুটুম মেয়েছেলে মেয়েপুরুষ মেয়েবিড়াল মেয়েবেলা মেয়েবন্ধু মেয়েমানুষ মেয়েমহল মেয়েলি মেয়েলিপনা মেয়েলী মেয়েলীপনা মেয়র মৈ মৈত্র মৈত্রী মৈত্রীচুক্তি মৈত্রীচুক্তিবদ্ধ মৈত্রীসূত্রে মৈত্রেয় মৈত্র্য মৈথিল মৈথিলী মৈথুন মৈথুনপরায়ণ মৈথুনবর্জিত মৈনাক মৈনাকপর্বত মৈলান মৈসুর মোঃ মোকাবিলা মোকাবেলা মোকাবেলাকৃত মোকাম মোকাররম মোক্তা মোক্তার মোক্তারি মোক্তারনামা মোকদ্দমা মোকদ্দমাপ্রিয় মোকুব মোকরারি মোকরররি মোক্ষ মোক্ষকামী মোক্ষচর্চা মোক্ষণ মোক্ষদ মোক্ষদা মোক্ষদাতা মোক্ষদাত্রী মোক্ষদান মোক্ষদানকারী মোক্ষদায়ক মোক্ষদায়িনী মোক্ষদায়ী মোক্ষধাম মোক্ষপদ মোক্ষপ্রাপ্ত মোক্ষম মোক্ষলাভ মোগল মোগলাই মোগলসুলভ মোঘ মোঘল মোঘলাই মোচ মোচক মোচা মোচাকৃতি মোচাঘণ্ট মোচিত মোচ্ছব মোচ্য মোচন মোচনকর্তা মোচনীয় মোচনযোগ্য মোচনস্তর মোচরস মোচড় মোচড়া মোচড়াক মোচড়াচ্ছ মোচড়াচ্ছি মোচড়াচ্ছিল মোচড়াচ্ছিলাম মোচড়াচ্ছিলি মোচড়াচ্ছিলে মোচড়াচ্ছিলেন মোচড়াচ্ছিলেম মোচড়াচ্ছিলুম মোচড়াচ্ছিস মোচড়াচ্ছে মোচড়াচ্ছেন মোচড়াত মোচড়াতাম মোচড়াতিস মোচড়াতে মোচড়াতেন মোচড়াতেম মোচড়াতুম মোচড়ান মোচড়ানো মোচড়াব মোচড়াবার মোচড়াবি মোচড়াবে মোচড়াবেন মোচড়াবো মোচড়ামুচড়ি মোচড়াল মোচড়ালাম মোচড়ালি মোচড়ালে মোচড়ালেন মোচড়ালেম মোচড়ালুম মোচড়াস মোচড়ায় মোছ মোছা মোছাক মোছাচ্ছ মোছাচ্ছি মোছাচ্ছিল মোছাচ্ছিলাম মোছাচ্ছিলি মোছাচ্ছিলে মোছাচ্ছিলেন মোছাচ্ছিলেম মোছাচ্ছিলুম মোছাচ্ছিস মোছাচ্ছে মোছাচ্ছেন মোছাত মোছাতাম মোছাতিস মোছাতে মোছাতেন মোছাতেম মোছাতুম মোছান মোছানো মোছাব মোছাবার মোছাবি মোছাবে মোছাবেন মোছাবো মোছামুছির মোছাল মোছালাম মোছালি মোছালে মোছালেন মোছালেম মোছালুম মোছাস মোছে মোছেন মোছবার মোজা মোজাইক মোজাম্বিক মোজার্ট মোজিলা মোজেজা মোট মোটআক্রান্ত মোটউৎপাদন মোটকথা মোটঘাট মোটা মোটাগলা মোটান মোটানো মোটানজর মোটাবুদ্ধি মোটামাথা মোটামোটা মোটামুটি মোটামুটিভাবে মোটামুটিরকম মোটাসোটা মোটিফ মোটিভেট মোটিভেটেড মোটিভেশন মোটে মোটেল মোটজনসংখ্যা মোটটানা মোটবাহক মোটবহন মোটমাট মোটর মোটরগাড়ি মোটরচালিত মোটরযান মোটরবাইক মোটরবিহীন মোটরসাইকেল মোটসংখ্যা মোড মোডারেট মোডেম মোণ্ডা মোতা মোতাক মোতাচ্ছ মোতাচ্ছি মোতাচ্ছিল মোতাচ্ছিলাম মোতাচ্ছিলি মোতাচ্ছিলে মোতাচ্ছিলেন মোতাচ্ছিলেম মোতাচ্ছিলুম মোতাচ্ছিস মোতাচ্ছে মোতাচ্ছেন মোতাত মোতাতাম মোতাতিস মোতাতে মোতাতেন মোতাতেম মোতাতুম মোতান মোতানো মোতাব মোতাবার মোতাবি মোতাবে মোতাবেক মোতাবেন মোতাবো মোতাল মোতালাম মোতালি মোতালে মোতালেন মোতালেম মোতালুম মোতায়েন মোতি মোতিকুমারী মোতিচুর মোতিম মোতিহার মোতিয়া মোতোয়ালি মোত্তাকি মোতফরাক্কা মোথা মোথার মোদ মোদক মোদকগ্রস্ত মোদকজাতি মোদিত মোদিতা মোদিনী মোদী মোদে মোদেন মোদের মোদো মোদ্দা মোদবার মোনা মোনাকো মোনাজাত মোনাফেক মোনাফেকি মোনাসিব মোনোমার মোবাইল মোবাইলশপ মোবারক মোম মোমিন মোমেন মোমেন্ট মোমেন্টারি মোমেনশাহী মোমেরপুতুল মোমজামা মোমঢালা মোমবাতি মোর মোরগ মোরগঝুঁট মোরগফুল মোরা মোরাকাবা মোরে মোরব্বা মোর্স মোল মোলাকাত মোলাগিরি মোলার মোলাহেজা মোলায়েম মোলে মোল্লা মোল্লাগিরি মোশন মোষ মোষেটানা মোষড়া মোষড়াক মোষড়াচ্ছ মোষড়াচ্ছি মোষড়াচ্ছিল মোষড়াচ্ছিলাম মোষড়াচ্ছিলি মোষড়াচ্ছিলে মোষড়াচ্ছিলেন মোষড়াচ্ছিলেম মোষড়াচ্ছিলুম মোষড়াচ্ছিস মোষড়াচ্ছে মোষড়াচ্ছেন মোষড়াত মোষড়াতাম মোষড়াতিস মোষড়াতে মোষড়াতেন মোষড়াতেম মোষড়াতুম মোষড়ান মোষড়ানো মোষড়াব মোষড়াবার মোষড়াবি মোষড়াবে মোষড়াবেন মোষড়াবো মোষড়াল মোষড়ালাম মোষড়ালি মোষড়ালে মোষড়ালেন মোষড়ালেম মোষড়ালুম মোষড়াস মোসাফির মোসাম্মাৎ মোসাম্মৎ মোসাহেব মোসাহেবি মোস্ট মোস্তাফি মোস্তাহাব মোসম্মৎ মোসলেম মোসলমান মোহ মোহকর মোহগ্রস্ত মোহগ্রস্ততা মোহঘোর মোহা মোহাচ্ছন্ন মোহাচ্ছন্নতা মোহাজের মোহাদ্দেস মোহানা মোহান্ত মোহান্তি মোহান্ধ মোহান্ধতা মোহাবিষ্ট মোহাব্বত মোহামেডান মোহাম্মাদ মোহাম্মেদ মোহাম্মদ মোহাম্মদীয় মোহাম্মদপুর মোহারম মোহালি মোহি মোহিঅ মোহিত মোহিতা মোহিনী মোহিনীবিদ্যা মোহিনীশক্তি মোহে মোহো মোহোর মোহজাল মোহজনক মোহযুক্ত মোহ্যমান মোহতাজ মোহতিমির মোহন মোহনগঞ্জ মোহনা মোহনাস্থিত মোহনিদ্রা মোহনির্মুক্ত মোহনিরসন মোহনিয়া মোহন্ত মোহনপুর মোহনবাগান মোহনভোগ মোহনমালা মোহপ্রাপ্ত মোহপ্রাপ্তি মোহবন্ধ মোহবন্ধন মোহবশ মোহভঙ্গ মোহমুক্তি মোহমুগ্ধ মোহমত্ততা মোহমদ মোহমন্ত্র মোহম্মদ মোহম্মদীয় মোহময় মোহর মোহরা মোহরাঙ্কিত মোহরের মোহরত মোহরূপ মোহররম মোহরসদৃশ মোহহীন মোহড়া মোড় মোড়ক মোড়া মোড়াইল মোড়াক মোড়াচ্ছ মোড়াচ্ছি মোড়াচ্ছিল মোড়াচ্ছিলাম মোড়াচ্ছিলি মোড়াচ্ছিলে মোড়াচ্ছিলেন মোড়াচ্ছিলেম মোড়াচ্ছিলুম মোড়াচ্ছিস মোড়াচ্ছে মোড়াচ্ছেন মোড়াত মোড়াতাম মোড়াতিস মোড়াতে মোড়াতেন মোড়াতেম মোড়াতুম মোড়ান মোড়ানো মোড়াব মোড়াবার মোড়াবি মোড়াবে মোড়াবেন মোড়াবো মোড়ামুড়ি মোড়াল মোড়ালাম মোড়ালি মোড়ালে মোড়ালেন মোড়ালেম মোড়ালুম মোড়াস মোড়েন মোড়বার মোড়ল মোড়লি মোড়লী মোয় মোয়া মোয়াক্কাল মোয়াজ্জমা মৌ মুছ মুছক মুছুক মৌক্তিক মৌকুফ মৌখিক মৌখিকতা মৌখিকপরীক্ষা মৌখিকভাবে মৌখিকসাহিত্য মৌখরি মৌখর্য মুছা মুছাই মুছাইও মুছাইত মুছাইতাম মুছাইতিস মুছাইতে মুছাইতেছ মুছাইতেছি মুছাইতেছিল মুছাইতেছিলাম মুছাইতেছিলি মুছাইতেছিলে মুছাইতেছিলেন মুছাইতেছিস মুছাইতেছে মুছাইতেছেন মুছাইতেন মুছাইব মুছাইবার মুছাইবি মুছাইবে মুছাইবেন মুছাইল মুছাইলাম মুছাইলি মুছাইলে মুছাইলেন মুছাইয়া মুছাইয়াছ মুছাইয়াছি মুছাইয়াছিল মুছাইয়াছিলাম মুছাইয়াছিলি মুছাইয়াছিলে মুছাইয়াছিলেন মুছাইয়াছিস মুছাইয়াছে মুছাইয়াছেন মুছাইয়ো মুছাক মুছান মুছানো মুছাস মুছায় মুছায়ে মুছি মুছিও মুছিত মুছিতাম মুছিতিস মুছিতে মুছিতেছ মুছিতেছি মুছিতেছিল মুছিতেছিলাম মুছিতেছিলি মুছিতেছিলে মুছিতেছিলেন মুছিতেছিস মুছিতেছে মুছিতেছেন মুছিতেন মুছিব মুছিবার মুছিবি মুছিবে মুছিবেন মুছিল মুছিলাম মুছিলি মুছিলে মুছিলেন মুছিস মুছিয়া মুছিয়াছ মুছিয়াছি মুছিয়াছিল মুছিয়াছিলাম মুছিয়াছিলি মুছিয়াছিলে মুছিয়াছিলেন মুছিয়াছিস মুছিয়াছে মুছিয়াছেন মুছিয়ে মুছিয়েছ মুছিয়েছি মুছিয়েছিল মুছিয়েছিলাম মুছিয়েছিলি মুছিয়েছিলে মুছিয়েছিলেন মুছিয়েছিলেম মুছিয়েছিলুম মুছিয়েছিস মুছিয়েছে মুছিয়েছেন মুছিয়ো মৌচাক মুছচ্ছ মুছচ্ছি মুছচ্ছিল মুছচ্ছিলাম মুছচ্ছিলি মুছচ্ছিলে মুছচ্ছিলেন মুছচ্ছিলেম মুছচ্ছিলুম মুছচ্ছিস মুছচ্ছে মুছচ্ছেন মৌচুষকি মুছে মুছেছ মুছেছি মুছেছিল মুছেছিলাম মুছেছিলি মুছেছিলে মুছেছিলেন মুছেছিলেম মুছেছিলুম মুছেছিস মুছেছে মুছেছেন মুছেন মুছো মুছছ মুছছি মুছছিল মুছছিলাম মুছছিলি মুছছিলে মুছছিলেন মুছছিলেম মুছছিলুম মুছছিস মুছছে মুছছেন মৌজ মৌজা মৌজুদ মৌটুসকি মৌটুসি মৌত মুছত মৌতাত মুছতাম মুছতিস মুছতে মুছতেন মুছতেম মুছতুম মৌদ্গল্য মৌন মুছন মুছুন মৌনাবলম্বী মৌনাবলম্বন মৌনী মুছনো মৌনতা মছনদ মৌনব্রত মৌনভঙ্গ মৌনভাব মৌনসম্মতি মুছব মুছবার মুছবি মুছবে মুছবেন মুছবো মৌমাছি মৌমাছিজাত মৌরি মৌরিফুল মৌরী মৌর্য মৌর্যবংশ মৌর্বী মৌরলা মৌরসি মৌরুসি মৌরসিপাট্টা মৌরুসিপাট্টা মৌল মুছল মৌলকণা মছলা মৌলানা মুছলাম মছলি মুছলি মৌলিক মৌলিকতা মৌলিকতত্ত্ব মৌলিকত্ব মৌলিকপদার্থ মৌলিকবল মৌলিকভাব মৌলিকসংখ্যা মৌলিন্য মৌলিল মৌলী মুছলে মুছলেন মুছলেম মছলত মছলন্দ মছলন্দি মৌলবাদ মৌলবাদী মৌলবি মৌলভীবাজার মুছলম মুছলুম মুছলমান মছল্লা মুছল্লম মৌলস্বর মৌলসম্পদ মুছস মৌসা মৌসুম মৌসুমি মৌসুমপূর্ব মৌসুমশীর্ষ মৌসুমসেরা মৌহারী মৌড় মৌড়লা মুছয় মৌয়াল মজুক মজকুর মজুকুর মজকুরি মজা মজাইও মজাইত মজাইতাম মজাইতিস মজাইতে মজাইতেছ মজাইতেছি মজাইতেছিল মজাইতেছিলাম মজাইতেছিলি মজাইতেছিলে মজাইতেছিলেন মজাইতেছিস মজাইতেছে মজাইতেছেন মজাইতেন মজাইব মজাইবার মজাইবি মজাইবে মজাইবেন মজাইল মজাইলাম মজাইলি মজাইলে মজাইলেন মজাইয়া মজাইয়াছ মজাইয়াছি মজাইয়াছিল মজাইয়াছিলাম মজাইয়াছিলি মজাইয়াছিলে মজাইয়াছিলেন মজাইয়াছিস মজাইয়াছে মজাইয়াছেন মজাইয়ো মজাক মজাকরা মজাচ্ছ মজাচ্ছি মজাচ্ছিল মজাচ্ছিলাম মজাচ্ছিলি মজাচ্ছিলে মজাচ্ছিলেন মজাচ্ছিলেম মজাচ্ছিলুম মজাচ্ছিস মজাচ্ছে মজাচ্ছেন মজাত মজাতাম মজাতিস মজাতে মজাতেন মজাতেম মজাতুম মজাদার মজাদেখা মজাদেখানো মুজাদ্দিদ মজান মজানো মজাব মজাবার মজাবি মজাবে মজাবেন মজাবো মজামারা মজারু মজাল মজালাম মজালি মজালে মজালেন মজালেম মজালুম মজাস মুজাহিদ মজি মুজিযা মজিত মজিতাম মজিতিস মজিতে মজিতেছ মজিতেছি মজিতেছিল মজিতেছিলাম মজিতেছিলি মজিতেছিলে মজিতেছিলেন মজিতেছিস মজিতেছে মজিতেছেন মজিতেন মজিবার মজিবি মজিবে মজিবেন মুজিবনগর মজিল মজিলা মজিলাম মজিলি মজিলে মজিলেন মজিয়া মজিয়াছ মজিয়াছি মজিয়াছিল মজিয়াছিলাম মজিয়াছিলি মজিয়াছিলে মজিয়াছিলেন মজিয়াছিস মজিয়াছে মজিয়াছেন মজিয়ে মজিয়েছ মজিয়েছি মজিয়েছিল মজিয়েছিলাম মজিয়েছিলি মজিয়েছিলে মজিয়েছিলেন মজিয়েছিলেম মজিয়েছিলুম মজিয়েছিস মজিয়েছে মজিয়েছেন মজিয়ো মজে মজেছ মজেছি মজেছিল মজেছিলাম মজেছিলি মজেছিলে মজেছিলেন মজেছিলেম মজেছিলুম মজেছিস মজেছে মজেছেন মজেযাওয়া মজেন মজেনি মজছ মজছি মজছিল মজছিলাম মজছিলি মজছিলে মজছিলেন মজছিলেম মজছিলুম মজছিস মজছে মজছেন মজ্জা মজ্জাগত মজ্জাজাত মজ্জাধিক্য মজ্জাশূন্য মজ্জন মজজুব মজ্জমান মজ্জমানা মজযুব মজুত মজুতকরণ মজতাম মুজতাহিদ মজতিস মজতে মজতেন মজতেম মজুতের মজুতদার মজুতদারি মজুতপত্র মজুতভাণ্ডার মজতুম মজুতমূল্য মজুতসাপেক্ষ মজুদ মুজদা মজুদতহবিল মজুদদার মজুদদারি মজদুর মজদুরি মজন মজনু মজুন মজুন্দার মজনুন মুজফফর মজব মজুব মজবার মজবি মজবে মজবেন মজবো মজবুত মজবুতি মজবুদ মজমা মজুমদার মজুর মজুরা মুজরা মজুরি মুজরিম মজুরী মুজরো মজল মজলাম মজলি মজলিশ মজলিশি মজলিশী মজলিস মজলিসি মজলিসী মজলিসত্ব মজলে মজলেন মজলেম মজলুম মজহাব মজহাবি মজহব মঝু মুঝে মুঞি মঞ্চ মঞ্চক মঞ্চাভিনেতা মঞ্চাভিনেত্রী মঞ্চায়িত মঞ্চায়ন মঞ্চনাটক মঞ্চসজ্জা মঞ্চস্থ মুঞে মঞ্জু মুঞ্জ মঞ্জুকেশী মঞ্জুগমনা মঞ্জুঘোষ মঞ্জিমা মঞ্জিল মঞ্জিলা মঞ্জিষ্ঠা মঞ্জিষ্ঠারাগ মঞ্জীর মঞ্জীরা মঞ্জীরধ্বনি মঞ্জন মঞ্জুভাষিণী মঞ্জুভাষী মঞ্জর মঞ্জুর মঞ্জরা মুঞ্জরা মঞ্জরি মঞ্জুরি মঞ্জরিত মুঞ্জরিত মঞ্জুরিপ্রাপ্ত মঞ্জরী মুঞ্জরী মঞ্জুরীকৃত মঞ্জুল মঞ্জুলা মঞ্জুষা মঞ্জূষা মট মুট মটুক মটকা মটকাই মটকাইও মটকাইত মটকাইতাম মটকাইতিস মটকাইতে মটকাইতেছ মটকাইতেছি মটকাইতেছিল মটকাইতেছিলাম মটকাইতেছিলি মটকাইতেছিলে মটকাইতেছিলেন মটকাইতেছিস মটকাইতেছে মটকাইতেছেন মটকাইতেন মটকাইব মটকাইবার মটকাইবি মটকাইবে মটকাইবেন মটকাইল মটকাইলাম মটকাইলি মটকাইলে মটকাইলেন মটকাইয়া মটকাইয়াছ মটকাইয়াছি মটকাইয়াছিল মটকাইয়াছিলাম মটকাইয়াছিলি মটকাইয়াছিলে মটকাইয়াছিলেন মটকাইয়াছিস মটকাইয়াছে মটকাইয়াছেন মটকাইয়ো মটকাক মটকাচ্ছ মটকাচ্ছি মটকাচ্ছিল মটকাচ্ছিলাম মটকাচ্ছিলি মটকাচ্ছিলে মটকাচ্ছিলেন মটকাচ্ছিলেম মটকাচ্ছিলুম মটকাচ্ছিস মটকাচ্ছে মটকাচ্ছেন মটকাত মটকাতাম মটকাতিস মটকাতে মটকাতেন মটকাতেম মটকাতুম মটকান মটকানো মটকাব মটকাবার মটকাবি মটকাবে মটকাবেন মটকাবো মটকামারা মটকালাম মটকালি মটকালে মটকালেন মটকালেম মটকালুম মটকাস মটকি মুটকি মটকী মটকে মটকেছ মটকেছি মটকেছিল মটকেছিলাম মটকেছিলি মটকেছিলে মটকেছিলেন মটকেছিলেম মটকেছিলুম মটকেছিস মটকেছে মটকেছেন মটকো ম্যা ম্যাংগানিজ ম্যাও ম্যাওধরা ম্যাক ম্যাকগাইভার ম্যাকফি ম্যাক্রো ম্যাক্স ম্যাকসি ম্যাক্সি ম্যাক্সিমাম ম্যাগাজিন ম্যাগনেটাইট ম্যাগনেটিক ম্যাগনেসিয়াম ম্যাগমা ম্যাঙ্গানিজ ম্যাচ ম্যাচিং ম্যাচিস ম্যাচপ্রতি ম্যাচমেকার ম্যাজিক ম্যাজিশিয়ান ম্যাজিস্ট্রেট ম্যাজেন্টা ম্যাজমেজে ম্যাজম্যাজ ম্যাজম্যাজে ম্যাট ম্যাটমেটে ম্যাটম্যাট ম্যাট্রিক ম্যাট্রিক্স ম্যাড মটাৎ ম্যাথিউ ম্যাথমেটিশিয়ান ম্যাথম্যাটিকা ম্যাথম্যাটিকাল ম্যাথম্যাটিক্যাল ম্যাথম্যাটিকস ম্যাদা ম্যাদামারা ম্যান ম্যানগ্রোভ ম্যানিলা ম্যানচেস্টার ম্যানেজার ম্যানেজিং ম্যানেজমেন্ট ম্যান্টল ম্যান্টলটি ম্যান্ডারিন ম্যানশন ম্যানসন ম্যানহাটন ম্যানুয়াল ম্যানুয়ালি ম্যাপ ম্যাপিং ম্যামথ ম্যারাথন ম্যালিগন্যান্ট ম্যালেরিয়া ম্যাস ম্যাসকট ম্যাসাচুসেট ম্যাসাচুসেটস ম্যাসেজ ম্যাসেজিং ম্যাড়মেড়ে ম্যাড়ম্যাড় ম্যাড়ম্যাড়ে মুটিয়া মুটিয়েছে মুটে মুটেমজুর মটন ম্যুনিসিপ্যাল ম্যুনিসিপ্যালিটি মটনচপ মটমট মুটমুট মুটমুটে মটর মটরগাড়ি মটরাকৃতি মুটুরমুটুর মটরশুঁটি মযহাব মঠ মুঠ মুঠা মঠাধ্যক্ষ মঠাধ্যক্ষা মুঠামুঠা মুঠি মুঠিভরা মুঠির মুঠো মুঠোফোন মুঠোভরা মুঠোভরতি মুঠোমুঠো মঠধারিণী মঠধারী মুড মডার্ন মডিউল মডিউলার মডিউলডে মডিফাই মডেম মডেল মডেলিং মডুলা মডুলেশন মূঢ় মূঢ়া মূঢ়তা মণ মণকিয়া মণকষা মৃণাল মৃণালিনী মণি মণিকাঞ্চন মণিকাঞ্চনযোগ মণিকার মণিকোঠা মণিকুট্টিম মণিকুন্তলা মণিকর্ণিকা মণিখচিত মণিযোনি মণিদীপ মণিদীপ্ত মণিদ্বারা মণিপাথর মণিপুর মণিপুরি মণিপুরীনাচ মণিবন্ধ মণিমুক্তা মণিমুক্তাদি মণিমাণিক্য মণিমাণিক্যাদি মণিমাণিক্যজড়িত মণিমালা মণিমণ্ডিত মণিময় মণিরাগ মণিরত্নখচিত মণিরত্নাদি মণিহার মণিহারা মণিহারাফণী মণিহারী মণ্ড মুণ্ড মুণ্ডু মণ্ডূক মণ্ডূকী মণ্ডূকপ্লুতি মণ্ডূকবৃত্তি মণ্ডা মণ্ডামিঠাই মণ্ডি মণ্ডিত মুণ্ডিত মুণ্ডিতকেশ মণ্ডিতা মুণ্ডিতমস্তক মুণ্ডচ্ছেদ মুণ্ডচ্ছেদন মুণ্ডছেদ মুণ্ডযুক্ত মণ্ডন মুণ্ডন মণ্ডনদণ্ড মণ্ডপ মুণ্ডপাত মণ্ডপসজ্জা মুণ্ডমালা মুণ্ডমালাধারিণী মুণ্ডমালিনী মণ্ডূর মণ্ডল মণ্ডলাকার মণ্ডলাধীশ মণ্ডলী মণ্ডলীয় মণ্ডলেশ্বর মুণ্ডহীন মৃণ্ময় মৃণ্ময়ী মত মুত মৃত মৃৎ মুতওল্লি মুতওল্লী মুতক মুতুক মৃতক মৎকুণ মৃতকল্প মুতা মৃতা মুতাই মুতাইও মুতাইত মুতাইতাম মুতাইতিস মুতাইতে মুতাইতেছ মুতাইতেছি মুতাইতেছিল মুতাইতেছিলাম মুতাইতেছিলি মুতাইতেছিলে মুতাইতেছিলেন মুতাইতেছিস মুতাইতেছে মুতাইতেছেন মুতাইতেন মুতাইব মুতাইবার মুতাইবি মুতাইবে মুতাইবেন মুতাইল মুতাইলাম মুতাইলি মুতাইলে মুতাইলেন মুতাইয়া মুতাইয়াছ মুতাইয়াছি মুতাইয়াছিল মুতাইয়াছিলাম মুতাইয়াছিলি মুতাইয়াছিলে মুতাইয়াছিলেন মুতাইয়াছিস মুতাইয়াছে মুতাইয়াছেন মুতাইয়ো মতাদর্শ মুতান মতানৈক্য মুতানো মতান্তর মতানুসারী মতানুসারীগণ মুতাবেক মতাবলম্বিনী মতাবলম্বী মতাবলম্বন মতামত মৃতাশৌচ মতি মুতি মতিগতি মতিচ্ছন্ন মতিচুর মতিচূর মতিঝিল মুতিত মুতিতাম মুতিতিস মুতিতে মুতিতেছ মুতিতেছি মুতিতেছিল মুতিতেছিলাম মুতিতেছিলি মুতিতেছিলে মুতিতেছিলেন মুতিতেছিস মুতিতেছে মুতিতেছেন মুতিতেন মুতিব মুতিবার মুতিবি মুতিবে মুতিবেন মতিভ্রংশ মতিভ্রম মতিভ্রষ্ট মতিমান মতিমতী মুতিল মুতিলাম মতিলাল মুতিলি মুতিলে মুতিলেন মুতিস মতিস্থৈর্য মতিহারি মতিহীন মতিহীনতা মুতিয়া মুতিয়াছ মুতিয়াছি মুতিয়াছিল মুতিয়াছিলাম মুতিয়াছিলি মুতিয়াছিলে মুতিয়াছিলেন মুতিয়াছিস মুতিয়াছে মুতিয়াছেন মুতিয়ে মুতিয়েছ মুতিয়েছি মুতিয়েছিল মুতিয়েছিলাম মুতিয়েছিলি মুতিয়েছিলে মুতিয়েছিলেন মুতিয়েছিলেম মুতিয়েছিলুম মুতিয়েছিস মুতিয়েছে মুতিয়েছেন মুতিয়ো মুতচ্ছ মুতচ্ছি মুতচ্ছিল মুতচ্ছিলাম মুতচ্ছিলি মুতচ্ছিলে মুতচ্ছিলেন মুতচ্ছিলেম মুতচ্ছিলুম মুতচ্ছিস মুতচ্ছে মুতচ্ছেন মতে মুতে মতো মুতেছ মুতেছি মুতেছিল মুতেছিলাম মুতেছিলি মুতেছিলে মুতেছিলেন মুতেছিলেম মুতেছিলুম মুতেছিস মুতেছে মুতেছেন মুতেন মতৈক মতৈক্য মতো মুতো মুতছ মুতছি মুতছিল মুতছিলাম মুতছিলি মুতছিলে মুতছিলেন মুতছিলেম মুতছিলুম মুতছিস মুতছে মুতছেন মৃত্যু মৃত্যুকামী মৃত্যুকামনা মৃত্যুকাল মৃত্যুকালীন মৃত্যুক্ষুধা মৃত্যুজনিত মৃত্যুঞ্জয় মৃত্যুঞ্জয়ী মৃত্যুযাত্রা মৃত্যুযোগ মৃত্যুযন্ত্রণা মৃত্যুতোরণ মৃত্যুতুল্য মৃত্যুদিন মৃত্যুদণ্ড মৃত্যুপথ মৃত্যুপথযাত্রী মৃত্যুপুরী মৃত্যুপ্রহর মৃত্যুফাঁদ মৃত্যুবাণ মৃত্যুবার্ষিকী মৃত্যুবীজ মৃত্যুবরণ মৃত্যুবরণকারী মৃত্যুভয় মৃত্যুমুখ মৃত্যুমুখী মৃত্যুরূপ মৃত্যুলোক মৃত্যুশোক মৃত্যুশয্যা মৃত্যুসংবাদ মৃত্যুসম্ভাবনা মৃত্যুহার মৃত্যুহীন মৃত্যুহীনতা মৃত্যুহেতু মত্ত মুতত মত্তা মুত্তাকী মত্তাবস্থা মুততাম মৃত্তিকা মৃত্তিকাগর্ভ মৃত্তিকানির্মিত মৃত্তিকাবিজ্ঞানী মৃত্তিকাভেদ মৃত্তিকারূপ মৃত্তিকাস্তর মুততিস মুততে মুততেন মুততেম মত্ততা মত্ততাজনক মত্ততাজনিত মত্ততাযুক্ত মত্ততাদায়ক মুততুম মৎত্রজ্জম মত্তলোচনা মত্তহস্তী মতদাতা মতদান মতদানকারী মৃতদার মৃতদেহ মতদ্বৈধ মতদ্বৈধতা মতধারা মতন মুতন মুতুন মুতনো মৃৎপাত্র মতপার্থক্য মৃতপুত্রা মতপ্রকাশ মৃতপ্রায় মতপরিবর্তন মুতফরাক্কা মৎফরেক্কা মুতব মতবাদ মতবাদপ্রবর্তক মুতবার মুতবি মতবিনিময় মতবিরোধ মতবিরুদ্ধ মুতবে মুতবেন মুতবো মৃতবৎসা মৃৎভাণ্ড মতভেদ মূত্র মূত্রকৃচ্ছ্র মূত্রকৃচ্ছ্রতা মূত্রাশয় মূত্রত্যাগ মূত্রনালি মূত্রনিঃসারক মূত্রবর্ধক মুতল মুতলাম মুতলি মুতলে মুতলেন মুতলেম মতলব মতলবি মতলববাজ মতলবহাসিল মুতলুম মৃৎশিল্প মৃৎশিল্পী মুতস মৃতসঞ্জীবনী মৎস্য মৎস্যকরণ্ডিকা মৎস্যখামার মৎস্যগন্ধা মৎস্যাশী মৎস্যোদরী মৎস্যোপজীবী মৎস্যজীবী মৎস্যনীতি মৎস্যন্যায় মৎস্যপুরাণ মৎস্যব্যবসায়ী মৎস্যভুক মৎস্যভোজী মৎস্যমুখ মৎস্যরঙ্গ মৃতসৎকার মুৎসুদ্দি মৎসর মৎসরী মুতয় মতুয়া মথ মথা মুথা মথিত মুথো মথ্যমান মথন মথনদণ্ড মথুরা মথুরাগত মথুরাধিপতি মথুরামোহন মথুরালীলা মদ মুদ মৃদু মদক মুদুক মদকল মদখোর মৃদুগামিনী মৃদুগামী মৃদুগতি মৃদুগমন মৃদুগমনা মুদ্গর মদগর্ব মৃদঙ্গ মৃদঙ্গী মুদা মদাত্যয় মদান্ধ মুদারা মদালস মদালসা মুদি মুদিখানা মুদিত মুদিতা মুদিতাম মুদিতিস মুদিতে মুদিতেছ মুদিতেছি মুদিতেছিল মুদিতেছিলাম মুদিতেছিলি মুদিতেছিলে মুদিতেছিলেন মুদিতেছিস মুদিতেছে মুদিতেছেন মুদিতেন মদিনা মুদিপাড়া মুদিব মুদিবার মুদিবি মুদিবে মুদিবেন মদির মুদির মদিরা মদিরাক্ষী মদিরেক্ষণা মুদিল মুদিলাম মুদিলি মুদিলে মুদিলেন মুদিস মুদিয়া মুদিয়াছ মুদিয়াছি মুদিয়াছিল মুদিয়াছিলাম মুদিয়াছিলি মুদিয়াছিলে মুদিয়াছিলেন মুদিয়াছিস মুদিয়াছে মুদিয়াছেন মুদিয়ো মুদী মুদীখানা মদচোলাই মদচোয়ানো মদীয় মুদে মুদেছ মুদেছি মুদেছিল মুদেছিলাম মুদেছিলি মুদেছিলে মুদেছিলেন মুদেছিলেম মুদেছিলুম মুদেছিস মুদেছে মুদেছেন মুদেন মদো মদোৎকট মদোদ্ধাত মদোদ্ধত মদোন্মত্ত মদোন্মত্তা মুদছ মুদছি মুদছিল মুদছিলাম মুদছিলি মুদছিলে মুদছিলেন মুদছিলেম মুদছিলুম মুদছিস মুদছে মুদছেন মদজল মৃদুজল মদ্য মদ্যাদি মদ্যাসক্ত মদ্যাসক্তি মদ্যপ মদ্যপান মদ্যপানকারী মদ্যপানাসক্ত মদ্যপানজনিত মদ্যপায়ী মদ্যপ্রবণ মদ্যবিক্রয়কারী মদ্যব্যবসায়ী মদ্যশালা মদত মুদত মদতগার মদতগারি মৃদুতা মুদতাম মুদতিস মুদতে মুদতেন মুদতেম মদতদান মদতদানকারী মুদতুম মদতমাশ মৃদুতর মদদ মদ্দ মুদ্দই মদ্দা মদ্দানি মুদ্দাফরাশ মদ্দামি মুদ্দোফরাশ মুদ্দত মুদ্দৎ মুদ্দতি মদন মুদন মুদুন মদনগোপাল মদনোৎসব মদনপুর মদনমোহন মদপান মৃদুপানি মুদব মদবিহ্বল মুদবে মুদবেন মুদবো মৃদুভাব মৃদুভাষিণী মৃদুভাষী মদমাংসবর্জনকারী মদমত্ত মদমত্ততা মদমত্তহস্তী মদমধ্য মৃদুমধুর মৃদুমন্দ মদ্র মদ্রক মুদ্রা মুদ্রাকর মুদ্রাক্ষর মুদ্রাক্ষয় মুদ্রাগোত্রীয় মুদ্রাঙ্কিত মুদ্রাঙ্কন মুদ্রাচিহ্ন মুদ্রাজনিত মুদ্রাযন্ত্র মুদ্রাদি মুদ্রাদোষ মুদ্রানীতি মুদ্রাবিজ্ঞান মুদ্রাবিনিময় মুদ্রামান মুদ্রামূল্য মুদ্রাশঙ্খ মুদ্রাসদৃশ মুদ্রাস্ফীতি মুদ্রাহ্রাস মুদ্রিত মুদ্রোফরাশ মুদ্রণ মুদ্রণকার্য মুদ্রণাক্ষর মুদ্রণালয় মুদ্রণযন্ত্র মুদ্রণপদ্ধতি মুদ্রণপ্রমাদ মুদ্রণবিদ্যা মুদ্রণশিল্প মদরত মদ্ররাজ মুদল মৃদুল মৃদুলা মুদলাম মুদলি মুদলে মুদলেন মুদলেম মুদলুম মদশালা মৃদুস্পর্শ মৃদুস্বভাব মৃদুস্বর মৃদুসুর মৃদুহাসি মৃদুহাসিযুক্ত মৃদুহাস্য মুদয়ে মধু মধুক মধুকাল মধুকৈটভ মধুকোষ মধুকোষরাগ মধুকুঞ্জ মধুকণ্ঠ মধুকর মধুকরী মধুক্রম মধুগিরি মধুগোলক মধুগন্ধী মধুগড় মৃধা মধুচক্র মধুচ্ছত্র মধুচন্দ্র মধুচন্দ্রিমা মধুজাত মধুজালক মধুজীব মধুজীবী মধ্য মধ্যকার মধ্যকাল মধ্যকালীন মধ্যখান মধ্যগ মধ্যগগন মধ্যগা মধ্যগামী মধ্যগমন মধ্যা মধ্যাংশ মধ্যাঞ্চল মধ্যাঞ্চলীয় মধুযামিনী মধ্যাহ্ন মধ্যাহ্নকালীন মধ্যাহ্নতপন মধ্যাহ্নভোজন মধ্যাহ্নসূর্য মধ্যচ্ছদা মধ্যে মধ্যেকার মধ্যেপড়া মধ্যেমধ্যে মধ্যোন্নতি মধ্যজেলা মধ্যযুগ মধ্যযুগী মধ্যযুগীয় মধ্যযুগসুলভ মধ্যতল মধ্যদিন মধ্যদিয়ে মধ্যদেশ মধ্যদেশভেদী মধ্যন্দিন মধ্যপথ মধ্যপদ মধ্যপদলোপী মধ্যপন্থা মধ্যপন্থি মধ্যপন্থী মধ্যপ্রাচ্য মধ্যপ্রদেশ মধ্যবিত্ত মধ্যবিত্ততা মধ্যবিধ মধ্যবিন্দু মধ্যবিরতি মধ্যবর্তিতা মধ্যবর্তিনী মধ্যবর্তী মধ্যবয়েসি মধ্যবয়স মধ্যবয়স্ক মধ্যবয়স্কা মধ্যবয়সী মধ্যভাগ মধ্যভারত মধ্যভারতীয় মধ্যম মধ্যমগ্রাম মধ্যমা মধ্যমাঙ্গুলি মধ্যমাঠ মধ্যমান মধ্যমাবস্থা মধ্যমেয়াদী মধ্যমজাতি মধ্যমণি মধ্যমপাণ্ডব মধ্যমপুরুষ মধ্যমবয়স্ক মধ্যমবয়স্কা মধ্যমস্তিষ্ক মধ্যরাত মধ্যরাত্র মধ্যরাত্রি মধ্যরেখা মধ্যশিরা মধ্যস্তর মধ্যস্থ মধ্যস্থান মধ্যস্থিত মধ্যস্থতা মধ্যস্থতাকারী মধ্যস্থল মধ্যস্বরাগম মধ্যস্বরাঘাত মধ্যস্বরিত মধ্যস্বরধ্বনি মধ্যস্বরলোপ মধ্যসম মধূত্থ মধূত্থবর্তিকা মধূৎসব মধুদা মধুনিশি মধুপ মধুপান মধুপায়ী মধুপিঙ্গল মধুপুর মধুপর্ক মধুপুরী মধুপূর্ণ মধ্বাসব মধুবন মধুব্রত মধুবর্ষী মধুভৃৎ মধুমক্ষিকা মধুমাখা মধুমাধব মধুমাধবী মধুমান মধুমালা মধুমাস মধুমিতা মধুমেহ মধুমতী মধুময় মধুর মধুরক্যান্টিন মধুরা মধুরাতি মধুরিমা মধুরেণসমাপয়েৎ মধুরতা মধুরত্ব মধুরভাষী মধুলিট মধুলিহ মধুলেহী মধুশালা মধুসখ মধুসঞ্চয় মধুসূদন মধুস্বর মধুস্বরা মধুহীন মন মনু মনঃ মনঃকল্পিত মনঃকল্পিতা মনঃক্ষোভ মনঃকষ্ট মনঃক্ষুণ্ণ মনঃচিকিৎসক মনঃপীড়া মনঃপ্রাণ মনঃশিলা মনঃসংযোগ মনঃস্থ মনঃস্থির মনঃসমীক্ষণ মনউঠা মনওঠা মনক্কা মনকাড়া মনকির মনকিরনাকির মুনকিরনাকির মনকিয়া মনকরা মনকর্ষণ মনকলা মনকল্প মনকষা মনকষাকষি মনকষ্ট মনখাটা মনখাট্টা মনখারাপ মনখারাব মনখোলা মনগেল মনগলা মনগড়া মনা মুনাক্কা মনাগুন মনাছিব মুনাছিব মুনাজাত মনান্তর মুনাফা মুনাফাখোর মুনাফিক মুনাফেক মুনাফেকি মনাসিব মুনাসিব মনি মুনি মনিঅর্ডার মুনিঋষি মুনিকুমার মনিটর মনিটরিং মনিপুর মনিপুরী মনিব মুনিব মনিবানা মনিব্যাগ মনিষ মুনিষ মনিষী মনিষ্যি মনিহারি মনিহারী মুনিয়া মনচোর মনচোরা মনচলা মনীষা মনীষাপুর মনীষিণী মনীষিতা মনীষী মনেআসা মনেউঠা মনেকরা মনেগাঁথা মনেজাগা মনেজানা মনেতোলা মনেথাকা মনেধরা মনেপ্রাণে মনেমনে মনেরআগুন মনেরকালি মনেরকালো মনেরগোল মনেরগ্লানি মনেরগহন মনেরাখা মনেরজোর মনেরবিষ মনেরমানুষ মনেরমিল মনেরমত মনেরময়লা মনেলওয়া মনো মনোক্সাইড মনোগত মনোগ্রাম মনোগ্রাহী মনোচিকিৎসা মনোচোর মনোজ মনোজগৎ মনোজ্ঞ মনোজ্ঞা মনোজ্ঞতা মনোজব মনোযোগ মনোযোগিতা মনোযোগী মনোযোগযুক্ত মনোযোগপূর্ণ মনোদুঃখ মনোনিউক্লিওটাইড মনোনিবেশ মনোনিবেশকারী মনোনিয়োগ মনোনীত মনোনীতা মনোনয়ন মনোনয়নকারী মনোনয়নপত্র মনোনয়নপ্রাপ্ত মনোফসফেট মনোবাঞ্ছা মনোবাসনা মনোবিকার মনোবিকলনশাস্ত্র মনোবিচ্ছেদ মনোবিজ্ঞান মনোবিজ্ঞানী মনোবিদ্যা মনোবিবাদ মনোবীক্ষণ মনোবেদনা মনোব্যথা মনোবৃত্তি মনোবৃত্তিসম্পন্ন মনোবল মনোবলহরণ মনোভঙ্গ মনোভাব মনোভাবযুক্ত মনোভাবপ্রকাশক মনোভার মনোভব মনোভূমি মনোমুগ্ধকর মনোমালিন্য মনোমোহিনী মনোমোহন মনোমত মনোমতো মনোমদ মনোমন্দির মনোময় মনোময়কোষ মনোরাজ্য মনোরেইল মনোরঞ্জক মনোরঞ্জিকা মনোরঞ্জিনী মনোরঞ্জন মনোরঞ্জনকারী মনোরথ মনোরথগতি মনোরূপ মনোরম মনোরমা মনোলোভা মনোহারি মনোহারিণী মনোহারিতা মনোহারিত্ব মনোহারী মনোহত মনোহর মনোহরা মনোহরণ মনোহরণকারী মনোহরপুর মনোহরশাহি মনোহরসাহি মনছাল মনছোটা মনছুটা মনছল মনুজ মনজানা মনজিল মনুজেন্দ্র মনজ্বলা মনজুর মনজুড়ে মন্যু মনযুক্ত মনযাওয়া মনটানা মন্টানা মন্টিনেগ্রো মুনযির মন্টেসরি মন্টেসরী মনযোগানো মনযোগী মন্ট্রিয়াল মন্ট্রিয়ল মনটলা মনঢালা মন্ত মন্তা মন্তেক মন্তব্য মন্তব্যসূত্র মন্তর মন্ত্র মন্ত্রকুশল মন্ত্রগূঢ় মন্ত্রগুপ্তি মন্ত্রগ্রহণ মন্ত্রগৃহ মন্ত্রাদি মন্ত্রিণী মন্ত্রিত মন্ত্রিত্ব মন্ত্রী মন্ত্রীপরিষদ মন্ত্রীসভা মন্ত্রোচ্চারণ মন্ত্রজিহ্ব মন্ত্রজ্ঞ মন্ত্রজপ মন্ত্রণ মন্ত্রণা মন্ত্রণাগৃহ মন্ত্রণাদাতা মন্ত্রণাদি মন্ত্রণাভবন মন্ত্রণালয় মন্ত্রণাসভা মন্ত্রণীয় মন্ত্রতন্ত্র মন্ত্রতন্ত্রজ্ঞ মন্ত্রতন্ত্রসিদ্ধ মন্ত্রদাতা মন্ত্রদাত্রী মন্ত্রদান মন্ত্রদর্শী মন্ত্রদ্রষ্টা মন্ত্রপাঠ মন্ত্রপাঠপূর্বক মন্ত্রপূত মন্ত্রপূর্বক মন্ত্রবিৎ মন্ত্রবিদ মন্ত্রবিদ্যা মন্ত্রবল মন্ত্রভেদ মন্ত্রমুগ্ধ মন্ত্রমুগ্ধা মন্ত্রশক্তি মন্ত্রশিষ্য মন্ত্রসাধক মন্ত্রসাধন মন্ত্রসিদ্ধ মন্ত্রসিদ্ধি মন্ত্রসমষ্টি মন্ত্রহীন মন্থ মনথাকা মন্থিত মনথেকে মন্থন মন্থনকারী মন্থনী মন্থনদণ্ড মন্থনপাত্র মন্থর মন্থরগতি মন্থরগতিযুক্তা মন্থরা মন্থরতা মন্থরবায় মন্দ মন্দগামিনী মন্দগামী মন্দগতি মন্দা মন্দাকিনী মন্দাক্রান্তা মন্দাগ্নি মন্দাভাব মন্দার্থে মন্দির মন্দিরা মন্দিরাকৃতি মন্দিরদ্বার মন্দিরশীর্ষ মন্দচারি মন্দচোখ মন্দীভূত মন্দচরিত্র মনদেওয়া মনদেয়া মন্দোদরী মন্দতা মন্দত্ব মন্দন মন্দনয় মন্দবৃত্ত মন্দবুদ্ধি মন্দভাগ মন্দভাগা মন্দভাগিনী মন্দভাগ্য মন্দভাগ্যা মন্দভালো মন্দভাষী মনদমা মন্দমতি মন্দমধুর মন্দমন্দ মন্দর মন্দ্র মন্দ্রকণ্ঠ মন্দুরা মন্দ্রিত মন্দরপর্বত মন্দ্রভাষে মনন মননকর্তা মননিবেশ মননীয় মননদৈন্য মননশক্তি মননশীল মননশীলতা মনপছন্দ মনপবন মনুপ্রণীত মনপ্রতি মুনফা মনফেরানো মনব মন্বন্তর মনবসা মনভার মনভোলানো মনভুলানো মনমাঝি মনমাতানো মনমানা মনমালিন্য মনমেজাজ মনুমেন্ট মনুমেন্টাল মনমোহিনী মনমোহন মনমথ মন্মথ মন্মথপ্রিয়া মন্মথবন্ধু মন্মথমোহিনী মন্মথসুহৃদ মুনমুন মনমরা মৃন্ময় মৃন্ময়ী মনরক্ষা মনরাখা মনলাগা মুনশি মুনশিগিরি মুনশিয়ানা মনশ্চক্ষু মনশ্চাঞ্চল্য মনুষী মনুষ্য মনুষ্যকৃত মনুষ্যকর্ম মনুষ্যগোষ্ঠী মনুষ্যাকৃতি মনুষ্যাবাস মনুষ্যালয় মনুষ্যচরিত মনুষ্যচরিত্র মনুষ্যেতর মনুষ্যোচিত মনুষ্যজগত মনুষ্যজাতি মনুষ্যজনিত মনুষ্যজন্ম মনুষ্যযজ্ঞ মনুষ্যত্ব মনুষ্যত্বপূর্ণ মনুষ্যত্ববর্জিত মনুষ্যত্বহীন মনুষ্যধর্ম মনুষ্যধর্মা মনুষ্যনির্মিত মনুষ্যপাঠ্য মনুষ্যবাস মনুষ্যবাহী মনুষ্যবিহীন মনুষ্যবর্গ মনুষ্যবহনযোগ্য মনুষ্যমাত্র মনুষ্যলোক মনুষ্যশিশু মনুষ্যসমাজ মনুষ্যসুলভ মনুষ্যসৃষ্ট মনস মনসংক্রান্ত মনুসংহিতা মনস্কাম মনস্কামনা মনসুখ মনসা মনসাগাছ মনসাতলা মনসাদেবী মনসাপূজা মনসামঙ্গল মুন্সি মুন্সিগিরি মনসিজ মুন্সী মুনসীর মুনসেফ মুন্সেফ মুনসেফি মুনসেফী মুন্সেফী মনস্টার মুনস্টোন মনস্তাত্ত্বিক মনস্তাপ মনস্তাপযুক্ত মনস্তাপহীন মনস্তত্ত্ব মনস্তত্ত্ববিদ মনস্তত্ত্ববিদ্যা মনস্তুষ্টি মনস্থ মনস্থির মনসুন মনসূন মনসব মনস্বিতা মনস্বিনী মনস্বী মনসবদার মনসবদারি মনসবদারী মনসম্পন্ন মনসরা মনহওয়া মনহারানো মনহরা মনহুস মফঃস্বল মফিদ মফেল মুফত মুফৎ মুফতি মফস্বল মুবারক মুবিন মবলগ মুভি মুভিজ মুভমেন্ট মম মুমুক্ষু মুমুক্ষা মমি মমিন মুমিন মমিনুল মমী মমতা মমতাজ মমতাময় মমতাময়ী মমতাশূন্য মমতাহীন মমত্ব মমত্ববোধ মমত্বময় মমত্বময়ী মমত্বহীন মুম্বাই মুমূর্ষু মুমূর্ষা মমলেট মর মরু মুরং মরুক মরক্কো মরুকুঞ্জ মর্কট মর্কটী মরকুটে মর্কটজাল মুরকুট্টে মর্কটবাস মর্কটবৈরাগী মর্কটবৈরাগ্য মরকত মরকতমণি মরুকন্যা মরুকরণ ম্রক্ষণ মূর্খ মূর্খা মুর্খামি মূর্খতা মূর্খতারূপ মর্গ মুরগা মুর্গা মরগানটাউন মুরগি মুর্গি মুরগিরডিম মুরগী মুর্গী মরগেজ মরা মরাই মরাকান্না মরাকটাল মুরাকবা মরাগাঙ মরাঞ্চে মরাঠা মরাঠি মরাঠী মরাধার মরানাড়ি মরানো মরানদী মরাপেট মরামুখ মরামাস মুরারি মরাল মরালগামিনী মরালী মরাস্রোত মরাহাজা মরায় মরি মুরি মরিচ মরিচা মরিচাধরা মরিচাবিহীন মরিত মরিতাম মরিতিস মরিতে মরিতেছ মরিতেছি মরিতেছিল মরিতেছিলাম মরিতেছিলি মরিতেছিলে মরিতেছিলেন মরিতেছিস মরিতেছে মরিতেছেন মরিতেন মুরিদ মরিব মরিবার মরিবি মরিবে মরিবেন মরিমরি মরিল মরিলাম মরিলি মরিলে মরিলেন মরিশাস মরিষাদ মরিস মরিসিল মরিয়া মরিয়াক মরিয়াছ মরিয়াছি মরিয়াছিল মরিয়াছিলাম মরিয়াছিলি মরিয়াছিলে মরিয়াছিলেন মরিয়াছিস মরিয়াছে মরিয়াছেন মরিয়ো মরিয়ম ম্রিয়মাণ ম্রিয়মাণা মরীচ মরীচি মরীচিকা মরীচিমালী মরীচিমায়া মরচে মর্চে মরচেধরা মরচেপড়া মরীয়া মরে মরেছ মরেছি মরেছিল মরেছিলাম মরেছিলি মরেছিলে মরেছিলেন মরেছিলেম মরেছিলুম মরেছিস মরেছে মরেছেন মরেন মরো মুরোত মুরোদ মরোমরো মরছ মুরছা মূরছা মূর্ছা মূর্ছাগত মূর্ছাতুর মূর্ছান্বিত মূর্ছাভঙ্গ মূর্ছারোগ মরছি মূর্ছিত মূর্ছিতা মরছিল মরছিলাম মরছিলি মরছিলে মরছিলেন মরছিলেম মরছিলুম মরছিস মরছে মরছেন মূর্ছনা মুরজ মরজগত মরজগৎ মুরজা মরজান মরুজাহাজ মরজি মর্জি মরজিমাফিক মর্জিমাফিক মরজিমতো মর্জিয়া মরুঝড় মর্টগেজ মর্টগেজি মরুযাত্রা মর্যাদা মর্যাদাদায়ক মর্যাদানাশ মর্যাদাপ্রকাশিত মর্যাদাপ্রাপ্ত মর্যাদাপ্রাপ্তি মর্যাদাপূর্ণ মর্যাদাবান মর্যাদাবোধ মর্যাদাবৃদ্ধি মর্যাদারক্ষা মর্যাদাশালী মর্যাদাশূন্য মর্যাদাসম্পন্ন মর্যাদাহানি মর্যাদাহানিকর মর্যাদাহীন মর্টার মরণ মরণআঘাত মরণকাঠি মরণকামড় মরণকাল মরণাকাঙ্ক্ষী মরণাপন্ন মরণাশৌচ মরণেচ্ছু মরণোত্তর মরণোন্মুখ মরণজনিত মরণযাত্রা মরণদশা মরণধর্মী মরণপাখা মরণপণ মরণবাঁচন মরণবাড় মরণলোভী মরণশীল মরণশীলতা মরত মরুত মর্ত মুরত মুরৎ মূর্ত মরতা মুরতাদ মরতাম মুরতি মূরতি মূর্তি মূর্তিকার মূর্তিখানি মূর্তিগঠন মূর্তিচোর মূর্তিযুক্ত মূর্তিধারী মূর্তিধারণ মূর্তিপূজক মূর্তিপূজা মূর্তিপরিগ্রহ মূর্তিমান মূর্তিমতী মূর্তিমন্ত মরতিস মূর্তিহীন মরুতীর্থ মরতে মরতেছে মরতেন মরতেম মুর্তজা মর্ত্য মর্ত্যুকাম মর্ত্যজীবন মর্ত্যধাম মর্ত্যভূমি মর্ত্যলীলা মর্ত্যলোক মর্তধাম মরতবা মর্তবা মরতভবন মর্তভূমি মরতুম মর্তমান মূর্তরূপ মর্তলীলা মর্তলোক মরদ মর্দ মুরদ মুরুদ মরদা মর্দা মুর্দা মরদান মরদানা মর্দানা মরদানি মর্দানি মর্দানী মুর্দাফরাশ মুর্দাফরাস মুর্দাবাদ মরদামি মর্দামি মর্দিত মর্দিতা মর্দিনী মর্দী মরুদেশ মরদেহ মরূদ্যান মর্দন মর্দনকারিণী মর্দনকারী মর্দনজনিত মরদবাচ্চা মরুদ্বীপ মর্দল মূর্ধা মূর্ধাভিষিক্ত মূর্ধন্য মূর্ধন্যধ্বনি মর্নিং মরন্ত মরুপ্রদেশ মরুপ্রবণ মরফিন মরুবক মরূবক মরবা মরবার মরবি মরুবিজয় মরবে মরবেন মরবো মুরব্বি মুরুব্বি মুরব্বিয়ানা মুরুব্বিয়ানা মুরব্বী মুরুব্বী মুরব্বীয়ানা মুরুব্বীয়ানা মরুভূ মরুভূমি মরম মর্ম মর্মকথা মর্মগ্রাহী মর্মগ্রহ মর্মগ্রহণ মর্মঘাতী মর্মাঘাত মর্মান্তিক মর্মাবগত মর্মাবধারণ মর্মার্থ মর্মাহত মরুমায়া মরমি মরমিবাদ মরমিয়া মরমিয়াবাদ মরমী মর্মী মরমীধারা মরমীবাদ মরমীলোক মরমীসাধনা মরমে মর্মে মর্মোক্তি মর্মোদঘাটন মর্মোদ্ধার মর্মোদ্ভেদ মর্মজ্ঞ মর্মজ্বালা মর্মযন্ত্রণা মর্মদাহী মর্মদহ মর্মধারণ মর্মন্তুদ মর্মপীড়া মর্মপীড়াদায়ক মর্মবাণী মর্মবেদনা মর্মব্যথক মর্মব্যথা মর্মভেদী মর্ম্ম মর্ম্মর মর্মমূল মরমর মর্মর মর্মরিত মর্মরধ্বনি মর্মরধ্বনিযুক্ত মর্মরমূর্তি মর্মস্থান মর্মস্থল মর্মসন্ধানী মর্মস্পৃক মর্মস্পর্শী মরুময় মরল মুরলা মরলাম মরলি মুরলী মুরলীধর মরলে মরলেন মরলেম মরলোক মরলুম মুরশিদ মুর্শিদ মুর্শিদাবাদ মুরশিদি মুর্শিদি মুর্শিদী মুরশেদ মরশুম মর্শুম মরশুমি মর্ষ মরষা মরষিআঁ মর্ষিত মরষিল মরষিহ মর্ষণ মরসা মরুসাইমুম মরুসাগর মরসিব মরসিয়া মর্সিয়া মরুসেনা মরুস্থল মরুস্থলী মরসুম মর্সুম মরসুমি মরুসম্ভব মরুসূর্য মরহাবা মরহারা মরহুম মরহুমা মরুয়া মরুয়ত মল মুল মূল মুলুক মূলক মূলকারণ মূলকেন্দ্র মূলকথা মলকুলমওত মূলগায়েন মূলগত মলগ্রাহী মূলগ্রন্থ মূলগ্রন্থি মলা মুলা মূলা মলাই মুলাকাত মূলাকর্ষণ মলাট মূলাধার মলান ম্লান ম্লানকণ্ঠ ম্লানাভ ম্লানায়মান ম্লানি ম্লানিমা মলানো মুলানো ম্লানতা ম্লানত্ব ম্লানমুখ মূলাভিমুখী মূলাশ্রয়ী মলাশয় মলি মলিকুল মলিত মলিতাম মলিতিস মলিতে মলিতেছ মলিতেছি মলিতেছিল মলিতেছিলাম মলিতেছিলি মলিতেছিলে মলিতেছিলেন মলিতেছিস মলিতেছে মলিতেছেন মলিতেন মলিদা মলিন মলিনা মলিনিমা মলিনতা মলিনত্ব মলিনবিধুর মলিব মলিবার মুলিবাঁশ মলিবি মলিবে মলিবেন মলিবডেনাম মলিল মলিলাম মলিলি মলিলে মলিলেন মলিস মলিয়া মলিয়াছ মলিয়াছি মলিয়াছিল মলিয়াছিলাম মলিয়াছিলি মলিয়াছিলে মলিয়াছিলেন মলিয়াছিস মলিয়াছে মলিয়াছেন মলিয়ো মূলী মূলীকরণ মূলচ্ছেদ মূলচ্ছেদন মূলীভূত ম্লেচ্ছ ম্লেচ্ছাচার ম্লেচ্ছাচারী ম্লেচ্ছদেশ মলেছ মলেছি মলেছিল মলেছিলাম মলেছিলি মলেছিলে মলেছিলেন মলেছিলেম মলেছিলুম মলেছিস মলেছে মলেছেন মলেন মুলো মূলোচ্ছেদ মূলোৎপাটিত মূলোৎপাটন মলছ মলছি মলছিল মলছিলাম মলছিলি মলছিলে মলছিলেন মলছিলেম মলছিলুম মলছিস মলছে মলছেন মূলজাত মল্ট মূল্য মূলযুক্ত মূল্যাদি মূল্যাধার মূল্যানুসারী মূল্যাবধারণ মূল্যারোপিত মূল্যায়ন মূল্যছাড় মূল্যতত্ত্ব মূল্যদান মূল্যনির্ণয় মূল্যনির্ধারণ মূল্যবান মূল্যবিচার মূল্যবোধ মূল্যবৃদ্ধি মূল্যমান মূল্যমাপ মূল্যরূপ মূল্যসূচী মূল্যস্ফীতি মূল্যস্বরূপ মূল্যহীন মূল্যহ্রাস মলত মূলত মুলতান মুলতানি মলতাম মলতিস মলতে মলতেন মলতেম মলত্যাগ মূলতত্ত্ব মুলতবি মুলতুবি মুলতবী মুলতুবী মলতুম মূলত্রাণ মূলদেশ মূলদেশস্থ মূলদেহ মলদোভা মলদ্বার মলুদশরিফ মলুদশরীফ মলদূষিত মূলধার মূলধারা মূলধারণা মূলধন মূলধনরূপ মূলধ্বনি মূলধ্বনিগত মূলধ্বনিতত্ত্ব মলন মূলনাম মলনালি মূলনায়ক মলনিঃসারক মলনিঃসরণ মূলনীতি মূলনেতা মূলপদার্থ মূলপ্রকৃতি মূলপ্রধান মূলপর্ব মলব মলবার মলবি মূলবিন্দু মূলবিষয় মলবে মলবেন মলবো মলবদ্ধকারক মলবদ্ধতা মূলবর্তী মলভক্ষণ মূলভাগ মলভাণ্ড মূলভাব মূলভাষা মূলভিত্তি মলম মলমাস মলমূত্রাদি মলমূত্রত্যাগ মূলমন্ত্র মলম্বা মলমল মলমলি মলরোধ মূলরোম মূলরূপ মলল মল্ল মুল্লুক মল্লক্রীড়া মল্লগণ মললাম মল্লার মল্লারী মল্লাররাগ মললি মল্লি মল্লিক মল্লিকা মল্লিনাথ মল্লী মললে মললেন মললেম মল্লযোদ্ধা মল্লযুদ্ধ মল্লবিদ্যা মল্লভূমি মললুম মূলশক্তি মলশূন্য মূলস্তম্ভ মূলসূত্র মূলস্থ মূলস্থানীয় মূলসমেত মূলহীন মলয় মলয়গিরি মলয়াচল মলয়ানিল মলয়জ মলয়পবন মলয়পর্বত মলয়বায়ু মলয়মারুত মশক মশকারা মুশকিল মুশকিলআসান মশকরা মশগুল মশা মশাই মশান মশারি মশারিরঝালর মশারী মশারডিপো মশাল মশালচি মশালবাহক মুশায়রা মুশতারা মশমশ মুশল মশলা মশলাওয়ালা মশলাজিরে মশলাযুক্ত মশলাদি মশলাপাতি মশলামিশানো মশলামিশ্রিত মশলারূপে মশলাসহযোগে মুশলধার মুশলধারা মশল্লা মশহুর মশহুরুল মূষ মুষ্ক মুষ্কবৃদ্ধি মুষ্কহীন মুষা মূষিক মূষিকা মুষ্টামুষ্টি মুষ্টি মুষ্টিযুক্ত মুষ্টিযোগ মুষ্টিযোদ্ধা মুষ্টিযুদ্ধ মুষ্টিপরিমাণ মুষ্টিপরিমিত মুষ্টিপ্রহার মুষ্টিবদ্ধ মুষ্টিভিক্ষা মুষ্টিমেয় মুষ্ট্যাঘাত মুষল মুষলধার মুষলধারা মুষড় মুষড়ক মুষড়া মুষড়াই মুষড়াইও মুষড়াইত মুষড়াইতাম মুষড়াইতিস মুষড়াইতে মুষড়াইতেছ মুষড়াইতেছি মুষড়াইতেছিল মুষড়াইতেছিলাম মুষড়াইতেছিলি মুষড়াইতেছিলে মুষড়াইতেছিলেন মুষড়াইতেছিস মুষড়াইতেছে মুষড়াইতেছেন মুষড়াইতেন মুষড়াইব মুষড়াইবার মুষড়াইবি মুষড়াইবে মুষড়াইবেন মুষড়াইল মুষড়াইলাম মুষড়াইলি মুষড়াইলে মুষড়াইলেন মুষড়াইয়া মুষড়াইয়াছ মুষড়াইয়াছি মুষড়াইয়াছিল মুষড়াইয়াছিলাম মুষড়াইয়াছিলি মুষড়াইয়াছিলে মুষড়াইয়াছিলেন মুষড়াইয়াছিস মুষড়াইয়াছে মুষড়াইয়াছেন মুষড়াইয়ো মুষড়াক মুষড়ান মুষড়ানো মুষড়াস মুষড়ায় মুষড়ি মুষড়িয়ে মুষড়িয়েছ মুষড়িয়েছি মুষড়িয়েছিল মুষড়িয়েছিলাম মুষড়িয়েছিলি মুষড়িয়েছিলে মুষড়িয়েছিলেন মুষড়িয়েছিলেম মুষড়িয়েছিলুম মুষড়িয়েছিস মুষড়িয়েছে মুষড়িয়েছেন মুষড়িয়ো মুষড়চ্ছ মুষড়চ্ছি মুষড়চ্ছিল মুষড়চ্ছিলাম মুষড়চ্ছিলি মুষড়চ্ছিলে মুষড়চ্ছিলেন মুষড়চ্ছিলেম মুষড়চ্ছিলুম মুষড়চ্ছিস মুষড়চ্ছে মুষড়চ্ছেন মুষড়ে মুষড়েছ মুষড়েছি মুষড়েছিল মুষড়েছিলাম মুষড়েছিলি মুষড়েছিলে মুষড়েছিলেন মুষড়েছিলেম মুষড়েছিলুম মুষড়েছিস মুষড়েছে মুষড়েছেন মুষড়ো মুষড়োবার মুষড়ত মুষড়তাম মুষড়তিস মুষড়তে মুষড়তেন মুষড়তেম মুষড়তুম মুষড়ন মুষড়নো মুষড়ব মুষড়বি মুষড়বে মুষড়বেন মুষড়বো মুষড়ল মুষড়লাম মুষড়লি মুষড়লে মুষড়লেন মুষড়লেম মুষড়লুম মুষড়স মুষড়য় মস মস্ক মসকারা মস্কারা মুস্কিল মস্কো মস্করা মসগুল মুসা মসান মুসাফা মুসাফির মুসাফিরখানা মুসাফিরি মুসাবিদা মুসাবেদা মসাল মসায়েল মুসায়রা মসি মসিজীবী মসিন মসিনা মসিনিন্দিত মসিবত মুসিবত মসিময় মসিলাঞ্ছিত মসিহ মসী মসীজীবী মসীন মসীনা মসীনিন্দিত মুসীবত মসীময় মসীলাঞ্ছিত মসীহ মসে মসজিদ মসজিদদ্বয় মসজিদুল মসজেদ মস্যাধার মসৃণ মসৃণতা মসৃণভাবে মস্ত মস্তক মস্তকাবরণ মস্তকস্থিত মস্তকহীন মস্তগ্রন্থি মস্তা মস্তান মস্তানি মস্তাহাব মস্তিষ্ক মস্তিষ্কচালনা মস্তিষ্কজাত মস্তিষ্কজীবী মস্তিষ্কবিকৃতি মস্তিষ্কহীন মুস্তফি মসনে মসনদ মসনদি মসনবি মুসম্মৎ মসমস মসুর মসূর মসুরি মুসুরি মসূরিকা মসুরিচেপটা মসুরিচ্যাপটা মসূরী মসরুফ মুসল মসলা মসলিন মুসলিম মুসলিমজাতি মুসলিমপ্রধান মুসলেকা মসলত মসলন্দ মুসলমান মুসলমানি মসল্লা মুসল্লি মুসুল্লি মহক মহকূফ মহকুমা মহকুমাশাসক মহকুমাহাকিম মহা মহাকাব্য মহাকাল মহাকালী মহাকালেশ্বর মহাকালমাঝে মহাকাশ মহাকাশচারী মহাকাশযাত্রী মহাকাশযান মহাকাশবার্তা মহাকাশবিজ্ঞান মহাকাশসংস্থা মহাকাশস্থিত মহাকায় মহাকোশল মহাকোষ মহাকবি মহাকরণ মহাকর্ষ মহাকর্ষীয় মহাকর্ষণ মহাকর্ষতত্ত্ব মহাকুষ্ঠ মহাখাপ্পা মহাখালী মহাগুরু মহাচ্ছায় মহাজগত মহাজগৎ মহাজাগতিক মহাজাগতিকরশ্মি মুহাজির মহাজোট মহাজ্ঞান মহাজ্ঞানী মহাজন মহাজনি মহাজনী মহাজনেরঘর মহাজনপদ মহাযাত্রা মহাযান মহাযোগী মহাযোদ্ধা মহাযজ্ঞ মহাযুদ্ধ মহাযশ মহাযশা মহাঢ্য মহাতেজা মহাতেজস্বী মহাতেল মহাতৈল মহাতপা মহাত্মা মহাতরঙ্গ মহাত্রাস মহাদেব মহাদেবী মহাদেশ মহাদেশীয় মুহাদ্দিস মহাদ্রাবক মহাদশমী মহাধনশালী মহান মহানগর মহানগরী মহানাদ মহানাদকারী মহানায়ক মহানিদ্রা মহানিম মহানিশা মহানীল মহান্ত মহানদী মহানন্দ মহানন্দা মহানবী মহানবমী মহানুভাব মহানুভাবতা মহানুভব মহানুভবতা মহানরক মহানস মহাপ মহাপক্ষী মহাপঙ্ক মহাপাতক মহাপাতকী মহাপাত্র মহাপাপ মহাপাপকারী মহাপাপী মহাপীঠ মহাপূজা মহাপদ্ম মহাপুরাণ মহাপ্রাণ মহাপ্রাণা মহাপ্রাণী মহাপ্রাণতা মহাপ্রাণবাদ মহাপ্রাণহীন মহাপরিচালক মহাপরিদর্শক মহাপ্রতিহার মহাপ্রতীহার মহাপ্রভু মহাপ্রলয় মহাপুরুষ মহাপ্রস্থান মহাপ্রয়াণ মহাপ্লাবন মহাপ্লাবনকালীন মহাপ্লাবনসম মহাফা মহাফেজ মহাফেজখানা মহাবাক্য মহাবাহু মহাবিক্রম মহাবিচারক মহাবিদ্যা মহাবিদ্যালয় মহাবিদ্রোহ মহাবিপদ মহাবিভ্রাট মহাবিরোধ মহাবিশ্ব মহাবিশ্বেরগঠন মহাবিষ মহাবিষুব মহাবিস্ফোরণ মহাবিহার মহাবীর মহাবীর্য মহাবেগ মহাবেগবান মহাবেগবতী মহাবৈদ্য মহাবোকা মহাবোধ মহাবোধি মহাব্যাধি মহাব্যোম মহাব্যবস্থাপক মহাবন মহাব্রাহ্মণ মহাব্রণ মহাবল মহাবলশালী মহাবৃহতী মহাভাগ মহাভাগা মহাভাব মহাভাবস্বরূপা মহাভারত মহাভারতীয় মহাভারতোক্ত মহাভিক্ষু মহাভিনিষ্ক্রম মহাভিনিষ্ক্রমণ মহাভৈরব মহাভুজ মহাভূত মহাভ্রম মহাভুল মহাভয় মহাভয়ংকর মহাভয়ঙ্কর মহাভয়ঙ্করা মহাভয়ঙ্করী মহামৃগ মহামাংস মহামাত্য মহামাত্র মহামানিনী মহামানী মহামান্য মহামানব মহামারি মহামারী মহামায়া মহামিলন মহামোহ মহামণ্ডল মহামতি মহামনা মহামুনি মহামন্ত্র মহামনস্বিনী মহামনস্বী মুহাম্মদ মহামূর্খ মহামূল্য মহামূল্যবান মহামহিম মহামহিমান্বিত মহামহিমান্বিতা মহামহোপাধ্যায় মহার্ঘ মহার্ঘ্য মহার্ঘ্যতা মহার্ঘতা মহার্ঘভাতা মহারাজ মহারাজা মহারাজাধিরাজ মহারাজ্ঞী মহারাণা মহারাণী মহারাত্রি মহারানা মহারানী মহারাষ্ট্র মহারাষ্ট্রি মহারাষ্ট্রী মহারাষ্ট্রীয় মহারোগ মহারৌরব মহারজত মহারণ্য মহার্ণব মহারত্ন মহারথ মহারথী মহারুদ্র মহার্হ মহারহস্য মহাল মহালিঙ্গপুর মহালিপি মহালজ্জা মহালনবিশ মহালসা মহালয়া মহাশক্তি মহাশক্তিধর মহাশক্তিশালী মহাশঙ্খ মহাশিল্পী মহাশূন্য মহাশূন্যচারী মহাশূন্যযান মহাশ্বেতা মহাশ্মশান মহাশয় মহাশয়া মহাষ্টমী মহাষষ্ঠী মহাসংকট মহাসুখ মহাসঙ্কট মহাসাগর মহাসাগরীয় মহাসাধক মহাসার মহাসিন্ধু মহাসচিব মহাসত্য মহাসত্ত্ব মহাস্থান মহাস্থানগড় মহাস্থবির মহাসপ্তমী মহাসভা মহাসমারোহ মহাসমুদ্র মহাসম্মেলন মহাসড়ক মহি মহিম মহিমা মহিমাকীর্তন মহিমাযুক্ত মহিমানিলয় মহিমান্বিত মহিমান্বিতা মহিমাপূর্ণ মহিমাব্যঞ্জক মহিমাময় মহিমাময়ী মহিমার্ণব মহিমময় মহিমময়ী মহিলা মহিষ মহিষখোলা মহিষাসুর মহিষী মহিষবাহন মহিষমর্দিনী মহিষরূপী মহী মহীখাত মহীখাতরূপে মহীতল মহীধর মহীনাথ মহীন্দ্র মহীপ মহীপাল মহীপতি মহীমণ্ডল মহীরুহ মহীলতা মহীশুর মহীসূত মহীসূতা মহীয়ান মহীয়সী মহেঞ্জোদারো মহেন্দ্র মহেন্দ্রাণী মহেন্দ্রচন্দ্র মহেন্দ্রনগরী মহেন্দ্রপুরী মহেন্দ্রভবন মহেশ মহেশখালী মহেশান মহেশানী মহেশী মহেশতলা মহেশপুর মহেশপুরী মহেশ্বর মহেশ্বরী মহেষ্বাস মহেস মহোৎসাহ মহোৎসব মহোদ্যম মহোদধি মহোদর মহোদরী মহোদয় মহোদয়া মহোন্নত মহোন্নতা মহোন্নতি মহোপকার মহোপকারিণী মহোপকারী মহোরগ মহোল্লাস মহৌষধ মহৌষধি মহৌষধী মুহ্যমান মুহ্যমানা মহত মহৎ মহৎকর্ম মহতাব মহতী মহত্তত্ত্ব মহত্ত্ব মহত্তম মহত্তর মহৎপ্রাণ মহদাশ্রয় মহদাশয় মহনীয় মহন্ত মহফিল মহফেল মহব্বত মহম্মদ মুহম্মদ মহুরি মুহরি মুহুরি মুহরিগিরি মুহুরিগিরি মহরত মহরৎ মুহূর্ত মুহূর্তকাল মুহূর্তেক মহরম মুহুর্মুহু মহরমুয়াজ্জল মুহররম মহর্লোক মহর্ষি মহল মহলা মহলানবিশ মহল্লা মহড়া মহুয়া মহুয়াগাছ মহুয়াজাত মহুয়াফল মহুয়াফুল মড় মুড় মড়ক মুড়ক মুড়ুক মুড়কি মুড়কী মড়া মুড়া মুড়াই মুড়াইও মুড়াইত মুড়াইতাম মুড়াইতিস মুড়াইতে মুড়াইতেছ মুড়াইতেছি মুড়াইতেছিল মুড়াইতেছিলাম মুড়াইতেছিলি মুড়াইতেছিলে মুড়াইতেছিলেন মুড়াইতেছিস মুড়াইতেছে মুড়াইতেছেন মুড়াইতেন মুড়াইব মুড়াইবার মুড়াইবি মুড়াইবে মুড়াইবেন মুড়াইল মুড়াইলাম মুড়াইলি মুড়াইলে মুড়াইলেন মুড়াইয়া মুড়াইয়াছ মুড়াইয়াছি মুড়াইয়াছিল মুড়াইয়াছিলাম মুড়াইয়াছিলি মুড়াইয়াছিলে মুড়াইয়াছিলেন মুড়াইয়াছিস মুড়াইয়াছে মুড়াইয়াছেন মুড়াইয়ো মুড়াক মড়াখেকো মড়াচে মড়াঞ্চে মুড়ান মুড়ানো মুড়ামুড়ি মুড়াস মড়ি মুড়ি মুড়িও মুড়িঘণ্ট মড়িঘর মুড়িত মুড়িতাম মুড়িতিস মুড়িতে মুড়িতেছ মুড়িতেছি মুড়িতেছিল মুড়িতেছিলাম মুড়িতেছিলি মুড়িতেছিলে মুড়িতেছিলেন মুড়িতেছিস মুড়িতেছে মুড়িতেছেন মুড়িতেন মড়িপোড়া মুড়িব মুড়িবার মুড়িবি মুড়িবে মুড়িবেন মুড়িমুড়কি মুড়িল মুড়িলাম মুড়িলি মুড়িলে মুড়িলেন মুড়িস মুড়িয়া মুড়িয়াছ মুড়িয়াছি মুড়িয়াছিল মুড়িয়াছিলাম মুড়িয়াছিলি মুড়িয়াছিলে মুড়িয়াছিলেন মুড়িয়াছিস মুড়িয়াছে মুড়িয়াছেন মুড়িয়ে মুড়িয়েছ মুড়িয়েছি মুড়িয়েছিল মুড়িয়েছিলাম মুড়িয়েছিলি মুড়িয়েছিলে মুড়িয়েছিলেন মুড়িয়েছিলেম মুড়িয়েছিলুম মুড়িয়েছিস মুড়িয়েছে মুড়িয়েছেন মুড়িয়ো মুড়চ্ছ মুড়চ্ছি মুড়চ্ছিল মুড়চ্ছিলাম মুড়চ্ছিলি মুড়চ্ছিলে মুড়চ্ছিলেন মুড়চ্ছিলেম মুড়চ্ছিলুম মুড়চ্ছিস মুড়চ্ছে মুড়চ্ছেন মুড়ে মুড়েছ মুড়েছি মুড়েছিল মুড়েছিলাম মুড়েছিলি মুড়েছিলে মুড়েছিলেন মুড়েছিলেম মুড়েছিলুম মুড়েছিস মুড়েছে মুড়েছেন মুড়েন মুড়ো মুড়োখাঙ্গরা মুড়োখেংরা মুড়োখ্যাংরা মুড়োঝাটা মুড়ছ মুড়ছি মুড়ছিল মুড়ছিলাম মুড়ছিলি মুড়ছিলে মুড়ছিলেন মুড়ছিলেম মুড়ছিলুম মুড়ছিস মুড়ছে মুড়ছেন মড়ুঞ্চে মুড়ত মুড়তাম মুড়তিস মুড়তে মুড়তেন মুড়তেম মুড়তুম মুড়ন মুড়ুন মুড়নো মুড়ব মুড়বার মুড়বি মুড়বে মুড়বেন মুড়বো মড়মড় মুড়মুড় মড়মড়ে মুড়মুড়ে মুড়ল মুড়লাম মুড়লি মুড়লে মুড়লেন মুড়লেম মুড়লুম মুড়স মুড়য় মূঢ়চিত্ত মূঢ়জন ময় ময়ূখ ময়ূখমালী ময়ঙ্ক মুয়াজ্জিন মুয়াজ্জল ময়ান ময়ানদেওয়া মুয়াবিয়া ময়াল মুয়াল্লিম ময়ালসাপ মুয়ে ময়দা ময়দান ময়না ময়নাতদন্ত ময়নাপাখি ময়নামতি ময়নারবুলি ময়মনসিংহ ময়মনসিংহগীতিকা ময়মুরুব্বি ময়ূর ময়ূরকণ্ঠী ময়রা ময়ূরাকৃতি ময়ূরাক্ষী ময়রানি ময়রানী ময়ূরাসন ময়ূরী ময়ূরপঙ্খি ময়ূরপঙ্খী ময়ূরপুচ্ছ ময়ূরসিংহাসন ময়লা ময়লাযুক্ত ময়লাটে ময়লারডিপো ময়লাহীন".split(" "),
              w_n: "ন নং নঅই নই নইকূলে নইচা নইচে নুইত নুইতাম নুইতিস নুইতে নুইতেছ নুইতেছি নুইতেছিল নুইতেছিলাম নুইতেছিলি নুইতেছিলে নুইতেছিলেন নুইতেছিস নুইতেছে নুইতেছেন নুইতেন নুইতেম নুইতুম নুইব নুইবার নুইবি নুইবে নুইবেন নুইল নুইলাম নুইলি নইলে নুইলে নুইলেন নুইলেম নুইলুম নুইয়া নুইয়াছ নুইয়াছি নুইয়াছিল নুইয়াছিলাম নুইয়াছিলি নুইয়াছিলে নুইয়াছিলেন নুইয়াছিস নুইয়াছে নুইয়াছেন নুইয়ে নুইয়েছ নুইয়েছি নুইয়েছিল নুইয়েছিলাম নুইয়েছিলি নুইয়েছিলে নুইয়েছিলেন নুইয়েছিলেম নুইয়েছিলুম নুইয়েছিস নুইয়েছে নুইয়েছেন নুইয়ো নঈ নউই নউমি নও নওআবাদ নওআবাদি নওকর নওকরি নওগাঁ নওগাঁর নওজোয়ান নওজোয়ানি নওবাহার নওবত নওবতখানা নওমুসলিম নওরাতি নওরাবনাজিম নওরোজ নওরোজা নওরোজাবাদ নওরতন নওল নওলকিশোর নওলা নওলাখি নওশা নওশাহ নওয়াজিমা নওয়াব নওয়াবগঞ্জ নওয়াবি নওয়াবজাদা নওয়াবপুর নওয়ালা নওয়ালি নকআউট নকাশা নকাশি নকাসি নুকি নকিব নকিষ্ণন নকিয়া নকীব নকুট্য নক্ত নুকতা নক্তান্ধ নক্তান্ধতা নক্তচারিণী নক্তচারী নক্তচর নক্তঞ্চর নক্তন্তন নক্তব্রত নক্তভোজিনী নক্তভোজী নকর নক্র নক্রা নকরি নক্ররাজ নকল নকুল নকলকারী নকলা নকলি নকুলিয়া নকুলী নকুলে নকুলেশ্বর নকলদানা নকুলদানা নকলনবিশ নকলনবিস নকলনবিসি নৃকুলবিদ্যা নকশ নকশা নকশাওয়ালা নকশাকাটা নকশাকার নকশাকারী নকশাকৃত নকশাকরা নকশাযুক্ত নকশাতোলা নকশাদার নকশানবিশ নকশানবিস নকশাপাড় নকশাবন্দী নকশাল নকশালপন্থী নকশি নকশিকাঁথা নকশী নকশীকাঁথা নকশবন্দিয়া নক্ষত্র নক্ষত্রখচিত নক্ষত্রগতি নক্ষত্রাদি নক্ষত্রানুসারে নক্ষত্রামৃতযোগ নক্ষত্রচক্র নক্ষত্রেশ নক্ষত্রজাত নক্ষত্রজীবী নক্ষত্রযুক্ত নক্ষত্রদান নক্ষত্রদিবস নক্ষত্রদর্শক নক্ষত্রনাথ নক্ষত্রনেমি নক্ষত্রপাত নক্ষত্রপুঞ্জ নক্ষত্রপতি নক্ষত্রপথ নক্ষত্রপরিক্রমা নক্ষত্রবিদ নক্ষত্রবিদ্যা নক্ষত্রবীথি নক্ষত্রবেগ নক্ষত্রমালা নক্ষত্রমণ্ডল নক্ষত্ররাজ নক্ষত্রলোক নক্ষত্রশূল নক্ষত্রসন্ধি নক্স নকসা নক্সা নক্সাকাটা নক্সাকার নক্সাদার নক্সাপাড় নকড়া নকড়াছকড়া নখ নখকোনি নখকুনি নখকৃন্তন নখকৃন্তনী নখক্ষত নখাঘাত নখানখি নখানা নখানি নখায়ুধ নখি নখী নখযুক্ত নখদারণ নখদন্ত নখদর্পণ নখপ্রান্ত নখর নখরা নখরায়ুধ নখরঞ্জন নখরঞ্জনী নখশূল নগ নগাধিপ নগাধিরাজ নগি নগিচ নগিজ নগিনা নগী নগীনা নগেন্দ্র নগেন্দ্রনাথ নৃগোষ্ঠী নগজ নগজা নগজদল নগণ্য নগদ নগদক্রয় নগদখাজনা নগদা নগদান নগদানগদি নগদি নগদনারায়ণ নগদবিক্রি নগদবিদায় নগদমূল্য নগদল নগন নগুন নগ্ন নগ্নক নগ্নকান্তি নগ্নক্ষপণক নগ্না নগ্নাট নগ্নিকা নগ্নীকরণ নগ্নতা নগ্নতাখানি নগ্নত্ব নগনদী নগ্নদেহ নগনন্দিনী নগ্নপদ নগ্নপদে নগ্নবীজ নগ্নসত্য নগপতি নগমা নগর নগরকান্দা নগরকেন্দ্রিক নগরকর্তা নগরঘাত নগরঘণ্ট নগরাজ নগরাধিপ নগরাধ্যক্ষ নগরিয়া নগরী নগরচাতর নগরচত্বর নগুরে নগরোপকণ্ঠ নগরোপান্ত নগরজীবন নগরতোরণ নগরদ্বার নগরদুর্গ নগরধ্বংস নগরনন্দিনী নগরপাল নগরবাসিনী নগরবাসী নগরবাড়ি নগরবিজ্ঞান নগরভবন নগরমার্গ নগররক্ষক নগররক্ষী নগররাষ্ট্র নগরসংকীর্তন নগরস্থ নঙ্গর না নাং নাংগা নাআত নাই নাইওর নাইছ নাইছি নাইছিল নাইছিলাম নাইছিলি নাইছিলে নাইছিলেন নাইছিলেম নাইছিলুম নাইছিস নাইছে নাইছেন নাইজার নাইজেরিয়া নাইজেরীয় নাইট নাইটক্লাব নাইটিংগেল নাইট্রাইট নাইট্রাইড নাইট্রাস নাইট্রিক নাইট্রেট নাইট্রো নাইট্রোজেন নাইট্রোজেনজাত নাইট্রোজেনযুক্ত নাইটহুড নাইত নাইতাম নাইতিস নাইতে নাইতেছিল নাইতেছিলাম নাইতেছিলি নাইতেছিলে নাইতেছিলেন নাইতেছিলেম নাইতেছিলুম নাইতেন নাইতেম নাইতুম নাইন নাইব নাইবার নাইবি নাইবে নাইবেন নাইবো নাইমামা নাইরে নাইরোবি নাইল নাইলা নাইলাম নাইলি নাইলে নাইলেন নাইলেম নাইলোটিকা নাইলন নাইলুম নাইস নাইসে নাইস্টাটিন নাইয়া নাইয়ে নাইয়েছ নাইয়েছি নাইয়েছিল নাইয়েছিলাম নাইয়েছিলি নাইয়েছিলে নাইয়েছিলেন নাইয়েছিলেম নাইয়েছিলুম নাইয়েছিস নাইয়েছে নাইয়েছেন নাইয়ো নাইয়র নাউজুবিল্লা নাউজবেল্লা নাউম্মেদ নাউরিয়া নাউড়ে নাএব নাও নাওন নাওনা নাওম্মেদ নাওয়া নাওয়াক নাওয়াখাওয়া নাওয়াচ্ছ নাওয়াচ্ছি নাওয়াচ্ছিল নাওয়াচ্ছিলাম নাওয়াচ্ছিলি নাওয়াচ্ছিলে নাওয়াচ্ছিলেন নাওয়াচ্ছিলেম নাওয়াচ্ছিলুম নাওয়াচ্ছিস নাওয়াচ্ছে নাওয়াচ্ছেন নাওয়াত নাওয়াতাম নাওয়াতিস নাওয়াতে নাওয়াতেন নাওয়াতেম নাওয়াতুম নাওয়ান নাওয়ানো নাওয়াব নাওয়াবার নাওয়াবি নাওয়াবে নাওয়াবেন নাওয়াবো নাওয়াল নাওয়ালাম নাওয়ালি নাওয়ালে নাওয়ালেন নাওয়ালেম নাওয়ালুম নাক নাকু নাকউঁচু নাকউঁচানো নাককাটা নাককান নাককড়াই নাকখোঁটা নাকখত নাকগলানো নাকা নাকানিচোবানি নাকানিচুবানি নাকারা নাকারাখানা নাকারচি নাকাল নাকাড়া নাকাড়াখানা নাকি নাকিকান্না নাকিস নাকিসুরযুক্ত নাকচ নাকেকাঁদা নাকেকাঁদুনে নাকেকান্না নাকেখত নাকেমুখে নাকেস নাকোনো নাকছাবি নাকঝামটা নাকঝাড়া নাকটেপা নাকডাকা নাকমুখ নাকরা নাকরাখানা নাক্ষত্র নাক্ষত্রিক নাক্ষত্রিকী নাকসাট নাকহীন নাকড়া নাকড়াখানা নাকুয়া নাখারা নাখালপাড়া নাখেরাজ নাখোদা নাখোশ নাখুদা নাখরা নাখুশ নাগ নাগকেশর নাগগর্ভ নাগা নাগাত নাগাদ নাগাধিপ নাগাধিপা নাগাধিপতি নাগান্তক নাগারা নাগাল নাগাসাকি নাগাড় নাগিনী নাগী নাগেটস নাগেন্দ্র নাগেশ নাগেশ্বর নাগেশ্বরী নাগদন্ত নাগদ্বীপ নাগদমন নাগধ্বনি নাগপাশ নাগপূজা নাগপঞ্চমী নাগপতি নাগপুর নাগপুষ্প নাগফণা নাগফণী নাগবল্লি নাগবল্লরি নাগমাতা নাগর নাগরক নাগরা নাগরাজ নাগরালি নাগরালী নাগরি নাগরিক নাগরিকা নাগরিকী নাগরিকতা নাগরিকতাবোধ নাগরিকত্ব নাগরিকদল নাগরিয়া নাগরী নাগরদোলা নাগরপনা নাগরভূপ নাগলোক নাগলতা নাগসিন্দূর নাগড়া নাঙ নাঙ্গ নাঙ্গা নাঙা নাঙল নাচ নাচওয়ালি নাচওয়ালী নাচুক নাচগান নাচঘর নাচা নাচাই নাচাইও নাচাইত নাচাইতাম নাচাইতিস নাচাইতে নাচাইতেছ নাচাইতেছি নাচাইতেছিল নাচাইতেছিলাম নাচাইতেছিলি নাচাইতেছিলে নাচাইতেছিলেন নাচাইতেছিস নাচাইতেছে নাচাইতেছেন নাচাইতেন নাচাইব নাচাইবার নাচাইবি নাচাইবে নাচাইবেন নাচাইল নাচাইলাম নাচাইলি নাচাইলে নাচাইলেন নাচাইয়া নাচাইয়াছ নাচাইয়াছি নাচাইয়াছিল নাচাইয়াছিলাম নাচাইয়াছিলি নাচাইয়াছিলে নাচাইয়াছিলেন নাচাইয়াছিস নাচাইয়াছে নাচাইয়াছেন নাচাইয়ো নাচাও নাচাক নাচাকোঁদা নাচাকোঁদাই নাচাচ্ছ নাচাচ্ছি নাচাচ্ছিল নাচাচ্ছিলাম নাচাচ্ছিলি নাচাচ্ছিলে নাচাচ্ছিলেন নাচাচ্ছিলেম নাচাচ্ছিলুম নাচাচ্ছিস নাচাচ্ছে নাচাচ্ছেন নাচাত নাচাতাম নাচাতিস নাচাতে নাচাতেন নাচাতেম নাচাতুম নাচান নাচানাচি নাচানে নাচানো নাচাব নাচাবার নাচাবি নাচাবে নাচাবেন নাচাবো নাচার নাচারী নাচাল নাচালাম নাচালি নাচালে নাচালেন নাচালেম নাচালুম নাচাস নাচাড়ি নাচি নাচিজ নাচিত নাচিতাম নাচিতিস নাচিতে নাচিতেছ নাচিতেছি নাচিতেছিল নাচিতেছিলাম নাচিতেছিলি নাচিতেছিলে নাচিতেছিলেন নাচিতেছিস নাচিতেছে নাচিতেছেন নাচিতেন নাচিব নাচিবার নাচিবি নাচিবে নাচিবেন নাচিল নাচিলাম নাচিলি নাচিলে নাচিলেন নাচিস নাচিয়া নাচিয়াছ নাচিয়াছি নাচিয়াছিল নাচিয়াছিলাম নাচিয়াছিলি নাচিয়াছিলে নাচিয়াছিলেন নাচিয়াছিস নাচিয়াছে নাচিয়াছেন নাচিয়ে নাচিয়েছ নাচিয়েছি নাচিয়েছিল নাচিয়েছিলাম নাচিয়েছিলি নাচিয়েছিলে নাচিয়েছিলেন নাচিয়েছিলেম নাচিয়েছিলুম নাচিয়েছিস নাচিয়েছে নাচিয়েছেন নাচিয়ো নাচেন নাচো নাচোল নাচছ নাচছি নাচছিল নাচছিলাম নাচছিলি নাচছিলে নাচছিলেন নাচছিলেম নাচছিলুম নাচছিস নাচছে নাচছেন নাচত নাচতাম নাচতিস নাচতে নাচতেন নাচতেম নাচতুম নাচদুয়ার নাচন নাচুন নাচনকোঁদন নাচনা নাচনাচুনি নাচুনি নাচনী নাচুনী নাচুনে নাচব নাচবার নাচবি নাচবে নাচবেন নাচবো নাচল নাচলাম নাচলি নাচলে নাচলেন নাচলেম নাচলুম নাচসহযোগে নাছ নাছাড়ানো নাছি নাছির নাছোড় নাছোড়বান্দা নাছোড়বন্ধ নাছদুয়ার নাজুক নাজাই নাজাইখাতা নাজাত নাজারিজ নাজায়েজ নাজিনা নাজিম নাজিমুদ্দিন নাজির নাজিরি নাজিরী নাজিল নাজীর নাজেল নাজেহাল নাজনা নাজনি নাজনী নাজনে নাজমা নাজমুন নাঞি নাঞী নাঞ্ছন নাট নাটক নাযুক নাটকাদি নাটকাভিনয় নাটকিত নাটকী নাটকীয় নাটকীয়তা নাটকীয়ভাবে নাটুকে নাটুকেপনা নাটকজমা নাটকপাড়া নাটকরচয়িতা নাটগীত নাটা নাটাই নাযাকত নাটানো নাটাপাচা নাটিকা নাটিত নাযিম নাযির নাযিল নাঁটে নাটেরগুরু নাটোর নাটোয়া নাট্য নাট্যকাব্য নাট্যকার নাট্যকর্ম নাট্যকলা নাট্যগোষ্ঠী নাট্যগুণ নাট্যগ্রন্থ নাট্যগৃহ নাট্যাচার্য নাট্যাভিনেতা নাট্যাভিনয় নাট্যামোদী নাট্যচর্চা নাট্যোৎসব নাট্যজগত নাট্যজন নাট্যতত্ত্ব নাট্যদল নাট্যদৃশ্য নাট্যমঞ্চ নাট্যমন্দির নাট্যরঙ্গ নাট্যরচনা নাট্যরূপ নাট্যশালা নাট্যশাস্ত্র নাট্যশাস্ত্রপ্রণেতা নাট্যশিক্ষক নাট্যশিল্পী নাট্যশৈলী নাট্যসভা নাটমঞ্চ নাটমন্দির নাটমহল নাটুয়া নাত নাতক নাতা নাতান নাতি নাতিখর্ব নাতিজামাই নাতিতীক্ষ্ণ নাতিদীর্ঘ নাতিদূর নাতিন নাতিনাতকুর নাতিনাতনি নাতিপুতি নাতিবউ নাতিবৌ নাতিভুঁড়ি নাতিশীতোষ্ণ নাতিশীতোষ্ণমণ্ডল নাতিস্থূল নাতিহ্রস্ব নাতিয়ানপ্রজা নাতী নাতীনাতকুর নাতে নাতো নাতোয়ান নাতজামাই নাতন নাতনি নাতনী নাতবউ নাতবৌ নাৎসি নাৎসিবাদ নাৎসিবৃন্দ নাথ নাথা নাথি নাথিং নাথী নাথবতী নাদ নাঁদ নাদা নাদান নাদানি নাদাপেটা নাদাপেটী নাদি নাদিত নাদিনী নাদী নাদে নাদেঁ নাদেয় নাদ্য নাদন নাদনা নাদনি নাদনবাড়ি নাদবিজ্ঞান নাদবিন্দু নাদুরস্ত নাদুস নাদুসনুদুস নাধর্মী নান নানক নানকপন্থী নানকপ্রবর্তিত নানকর নানখাতাই নানা নানাজাত নানাজাতীয় নানাজন নানাদিক নানাধরন নানান নানানপ্রকার নানানভাবে নানানরকম নানাপ্রকার নানাবাড়ি নানাবিধ নানাবর্ণ নানাবর্ণযুক্ত নানাভাবে নানামুখী নানারকম নানার্থ নানারূপ নানালোক নানাসাহেব নানাস্থান নানী নান্দ নান্দা নান্দাইল নান্দী নান্দীকর নান্দীপাঠ নান্দীমুখ নান্দে নান্দনিক নান্দনিকতা নানবাই নাপাক নাপানি নাপানী নাপানো নাপালি নাপিত নাপিতানি নাপিতিনি নাপিতিনী নাপছন্দ নাপ্পি নাপফিপোঁচা নাপরা নাপসন্দ নাফা নাফানী নাফরা নাফরমান নাফরমানি নাফরমানী নাব নাবু নাবুক নাবা নাবাক নাবাচ্ছ নাবাচ্ছি নাবাচ্ছিল নাবাচ্ছিলাম নাবাচ্ছিলি নাবাচ্ছিলে নাবাচ্ছিলেন নাবাচ্ছিলেম নাবাচ্ছিলুম নাবাচ্ছিস নাবাচ্ছে নাবাচ্ছেন নাবাত নাবাতাম নাবাতিস নাবাতিয়া নাবাতে নাবাতেন নাবাতেম নাবাতুম নাবাধ্যক্ষ নাবান নাবানো নাবাব নাবাবার নাবাবি নাবাবে নাবাবেন নাবাবো নাবাল নাবালক নাবালাম নাবালি নাবালিকা নাবালিগ নাবালে নাবালেগ নাবালেন নাবালেম নাবালুম নাবাস নাবি নাবিক নাবিকবিদ্যা নাবিল নাবিস নাবিয়ে নাবিয়েছ নাবিয়েছি নাবিয়েছিল নাবিয়েছিলাম নাবিয়েছিলি নাবিয়েছিলে নাবিয়েছিলেন নাবিয়েছিলেম নাবিয়েছিলুম নাবিয়েছিস নাবিয়েছে নাবিয়েছেন নাবিয়ো নাবী নাবে নাবেন নাবো নাবোধক নাবছ নাবছি নাবছিল নাবছিলাম নাবছিলি নাবছিলে নাবছিলেন নাবছিলেম নাবছিলুম নাবছিস নাবছে নাবছেন নাব্য নাব্যতা নাব্যতারক্ষা নাবত নাবতাক্ষেণী নাবতাম নাবতিস নাবতে নাবতেন নাবতেম নাবতুম নাবুদ নাবুন নাবব নাববার নাববি নাববে নাববেন নাববো নাবল নাবলা নাবলাম নাবলি নাবলে নাবলেন নাবলেম নাবলুম নাবড় নাবুড়ি নাভানা নাভি নাভিকণ্টক নাভিকুণ্ডল নাভিকুণ্ডলী নাভিকূপ নাভিকমল নাভিগোলক নাভিচক্র নাভিচ্ছেদ নাভিযুক্ত নাভিদেশ নাভিপুট নাভিপদ্ম নাভিমূল নাভিশ্বাস নাভিস্থ নাভিস্নান নাম নামঅনুসারী নামক নামুক নামকাটা নামকরা নামকরণ নামগান নামগোত্রহীন নামগন্ধ নামগ্রহ নামগ্রহণ নামা নামাই নামাইও নামাইছে নামাইত নামাইতাম নামাইতিস নামাইতে নামাইতেছ নামাইতেছি নামাইতেছিল নামাইতেছিলাম নামাইতেছিলি নামাইতেছিলে নামাইতেছিলেন নামাইতেছিস নামাইতেছে নামাইতেছেন নামাইতেন নামাইব নামাইবার নামাইবি নামাইবে নামাইবেন নামাইল নামাইলাম নামাইলি নামাইলে নামাইলেন নামাইয়া নামাইয়াছ নামাইয়াছি নামাইয়াছিল নামাইয়াছিলাম নামাইয়াছিলি নামাইয়াছিলে নামাইয়াছিলেন নামাইয়াছিস নামাইয়াছে নামাইয়াছেন নামাইয়ো নামাওঠা নামাক নামাঙ্ক নামাঙ্কিত নামাচ্ছ নামাচ্ছি নামাচ্ছিল নামাচ্ছিলাম নামাচ্ছিলি নামাচ্ছিলে নামাচ্ছিলেন নামাচ্ছিলেম নামাচ্ছিলুম নামাচ্ছিস নামাচ্ছে নামাচ্ছেন নামাজ নামাজগাহ নামাজি নামাজী নামাজপাঠ নামায নামাযগাহ নামাযী নামাত নামাতাম নামাতিস নামাতে নামাতেন নামাতেম নামাতুম নামান নামানো নামান্তর নামানুশাসন নামানুসারে নামাব নামাবার নামাবি নামাবে নামাবেন নামাবো নামাবলি নামাবলী নামাল নামালাম নামালি নামালে নামালেন নামালেম নামালুম নামাস নামায়া নামি নামিক নামিত নামিতাম নামিতিস নামিতে নামিতেছ নামিতেছি নামিতেছিল নামিতেছিলাম নামিতেছিলি নামিতেছিলে নামিতেছিলেন নামিতেছিস নামিতেছে নামিতেছেন নামিতেন নামিব নামিবার নামিবি নামিবিয়া নামিবে নামিবেন নামিল নামিলাম নামিলি নামিলে নামিলেন নামিস নামিয়া নামিয়াছ নামিয়াছি নামিয়াছিল নামিয়াছিলাম নামিয়াছিলি নামিয়াছিলে নামিয়াছিলেন নামিয়াছিস নামিয়াছে নামিয়াছেন নামিয়ে নামিয়েছ নামিয়েছি নামিয়েছিল নামিয়েছিলাম নামিয়েছিলি নামিয়েছিলে নামিয়েছিলেন নামিয়েছিলেম নামিয়েছিলুম নামিয়েছিস নামিয়েছে নামিয়েছেন নামিয়ো নামী নামীদামী নামেন নামেনামে নামেনি নামেমাত্র নামো নামোচ্চারণ নামোচ্চারণরূপ নামোৎসব নামোল্লেখ নামোল্লেখকারী নামছ নামছি নামছিল নামছিলাম নামছিলি নামছিলে নামছিলেন নামছিলেম নামছিলুম নামছিস নামছে নামছেন নামজাদা নামজপা নামঞ্জুর নামঞ্জুরি নামযুক্ত নামযাদা নামযজ্ঞ নামযশ নামঠিকানা নামডাক নামডাকা নামডুবা নামত নামতা নামতাম নামতিস নামতে নামতেন নামতেম নামত্যাগ নামতুম নামদা নামদৈর্ঘ্য নামধাতু নামধাম নামধারী নামধারণ নামধেয় নামধর নামধরা নামুন নামনা নামনাজানা নামনিশানা নাম্নী নামপরিচয় নামব নাম্ব নাম্বা নামবাচক নামবাচিকা নামবাদ নামবাদী নামবার নাম্বার নাম্বারিং নাম্বারস নামবি নামবিশেষ্য নামবিশেষণ নামবিহীন নামবে নামবেন নামবো নামবছর নামভেদ নামমাত্র নামমুদ্রা নামল নামলা নামলাম নামলি নামলে নামলেন নামলেম নামলো নামলুম নামশেষ নামসঙ্কীর্তন নামসূচক নামসে নামস্থান নামসমীকরণ নামস্মরণ নামসর্বস্ব নামসহ নামসহি নামহীন নার নারক নারকিনী নারকী নারকীয় নারকীয়তা নারকেল নারকেলকোরা নারকেলি নারকেলছোবড়া নারকেলডাঙা নারকেলমালা নারকোল নারকোলি নারকলি নারকুলে নারগিস নার্গিস নারঙ্গ নারঙ্গি নারা নারাঙ্গি নারাচ নারাজ নারাজি নারায নারায়েতকবির নারায়ণ নারায়ণক্ষেত্র নারায়ণগঞ্জ নারায়ণগড় নারায়ণী নারায়ণভক্তি নারিকেল নারিকেলকাঠি নারিকেলকোরা নারিকেলি নারিকেলছোবড়া নারিকেলতৈল নারিকেলভস্ম নারিকেলমালা নারিগ নারিগো নারিন্দা নারিশ নারী নারীকুল নারীঘাতী নারীঘটিত নারীচরিত্র নারীজাগরণ নারীজাতি নারীজন্ম নারীত্ব নারীদেশ নারীধর্ম নারীধর্ষণ নারীনেত্রী নারীপক্ষ নারীপাচার নারীপুরুষ নারীপ্রহরী নারীবক্ষ নারীবাদ নারীবাদী নারীবিজিত নারীবন্ধু নারীমুক্তি নারীমঞ্চ নারীমূর্তি নারীরত্ন নারীলক্ষণ নারীশিক্ষা নারীশ্বর নারীশ্বরমূর্তি নারীশ্রমিক নারীসঙ্গঘটিত নারীসত্তমা নারীস্বভাব নারীসমাজ নারীসম্ভোগ নারীসুলভ নারদ নারদীয় নারদীয়া নার্ভ নার্ভগুচ্ছ নার্ভা নার্ভাস নার্ভতন্ত্র নার্স নার্সারি নার্সিং নারসিংহ নারসিংহী নার্সিংহোম নাল নালা নালায়েক নালি নালিক নালিকা নালিঘা নালিচা নালিতা নালিতাবাড়ি নালিব্রণ নালিম নালিশ নালিশা নালিশফসাদ নালিশবন্দ নালিস নালিসফসাদ নালিসবন্দ নালী নালীঘা নালীব্রণ নালতা নালতে নালবংশ নালবন্দি নাশ নাশক নাশকারী নাশকতা নাশকতামূলক নাশা নাশিত নাশিনী নাশী নাশ্য নাশতা নাশন নাশপাতি নাশপ্রাপ্ত নাশবন্দি নাশশীল নাশহীন নাশহীনতা নাস নাসা নাসাগ্রভাগ নাসাজাত নাসাজ্বর নাসানাসিক্য নাসাপান নাসাপথ নাসাবিবর নাসারা নাসারন্ধ্র নাসিক নাসিকা নাসিকাগ্র নাসিকাগর্জন নাসিকাপথ নাসিক্য নাসিক্যধ্বনি নাসিক্যবর্ণ নাসিরাবাদ নাসিরুদ্দিন নাস্তা নাস্তাখাস্তা নাস্তানাবুদ নাস্তি নাস্তিক নাস্তিক্য নাস্তিক্যবাদ নাস্তিকতা নাস্তিকতাবাদ নাস্তিকবাদ নাস্তিমান নাসদান নাসদানি নাসপাতি নাসবেশ নাহ নাহওয়া নাহক নাহা নাহাই নাহাইও নাহাইত নাহাইতাম নাহাইতিস নাহাইতে নাহাইতেছ নাহাইতেছি নাহাইতেছিল নাহাইতেছিলাম নাহাইতেছিলি নাহাইতেছিলে নাহাইতেছিলেন নাহাইতেছিস নাহাইতেছে নাহাইতেছেন নাহাইতেন নাহাইব নাহাইবার নাহাইবি নাহাইবে নাহাইবেন নাহাইল নাহাইলাম নাহাইলি নাহাইলে নাহাইলেন নাহাইয়া নাহাইয়াছ নাহাইয়াছি নাহাইয়াছিল নাহাইয়াছিলাম নাহাইয়াছিলি নাহাইয়াছিলে নাহাইয়াছিলেন নাহাইয়াছিস নাহাইয়াছে নাহাইয়াছেন নাহাইয়ো নাহাক নাহান নাহানো নাহার নাহাল নাহাস নাহি নাহিক নাহিত নাহিতাম নাহিতিস নাহিতে নাহিতেছ নাহিতেছি নাহিতেছিল নাহিতেছিলাম নাহিতেছিলি নাহিতেছিলে নাহিতেছিলেন নাহিতেছিস নাহিতেছে নাহিতেছেন নাহিতেন নাহিব নাহিবার নাহিবি নাহিবে নাহিবেন নাহিল নাহিলাম নাহিলি নাহিলে নাহিলেন নাহিস নাহিয়া নাহিয়াছ নাহিয়াছি নাহিয়াছিল নাহিয়াছিলাম নাহিয়াছিলি নাহিয়াছিলে নাহিয়াছিলেন নাহিয়াছিস নাহিয়াছে নাহিয়াছেন নাহিয়ো নাহে নাহেন নাহলে নাহয় নাড়ু নাড়ুগোপাল নাড়া নাড়াই নাড়াইও নাড়াইত নাড়াইতাম নাড়াইতিস নাড়াইতে নাড়াইতেছ নাড়াইতেছি নাড়াইতেছিল নাড়াইতেছিলাম নাড়াইতেছিলি নাড়াইতেছিলে নাড়াইতেছিলেন নাড়াইতেছিস নাড়াইতেছে নাড়াইতেছেন নাড়াইতেন নাড়াইব নাড়াইবার নাড়াইবি নাড়াইবে নাড়াইবেন নাড়াইল নাড়াইলাম নাড়াইলি নাড়াইলে নাড়াইলেন নাড়াইয়া নাড়াইয়াছ নাড়াইয়াছি নাড়াইয়াছিল নাড়াইয়াছিলাম নাড়াইয়াছিলি নাড়াইয়াছিলে নাড়াইয়াছিলেন নাড়াইয়াছিস নাড়াইয়াছে নাড়াইয়াছেন নাড়াইয়ো নাড়াক নাড়াঘাঁটা নাড়াচাড়া নাড়াচ্ছ নাড়াচ্ছি নাড়াচ্ছিল নাড়াচ্ছিলাম নাড়াচ্ছিলি নাড়াচ্ছিলে নাড়াচ্ছিলেন নাড়াচ্ছিলেম নাড়াচ্ছিলুম নাড়াচ্ছিস নাড়াচ্ছে নাড়াচ্ছেন নাড়াত নাড়াতাম নাড়াতিস নাড়াতে নাড়াতেন নাড়াতেম নাড়াতুম নাড়ান নাড়ানাড়ি নাড়ানো নাড়াব নাড়াবাঁধা নাড়াবার নাড়াবি নাড়াবে নাড়াবেন নাড়াবো নাড়াবুনে নাড়ামাঠ নাড়াল নাড়ালাম নাড়ালি নাড়ালে নাড়ালেন নাড়ালেম নাড়ালুম নাড়াস নাড়ি নাড়িচক্র নাড়িচ্ছেদন নাড়িছাড়া নাড়িছেঁড়া নাড়িজ্ঞান নাড়িটিপা নাড়িটেপা নাড়িত নাড়িতাম নাড়িতিস নাড়িতে নাড়িতেছ নাড়িতেছি নাড়িতেছিল নাড়িতেছিলাম নাড়িতেছিলি নাড়িতেছিলে নাড়িতেছিলেন নাড়িতেছিস নাড়িতেছে নাড়িতেছেন নাড়িতেন নাড়িদেখা নাড়িনক্ষত্র নাড়িব নাড়িবার নাড়িবি নাড়িবে নাড়িবেন নাড়িব্রণ নাড়িবসা নাড়িভুঁড়ি নাড়িরটান নাড়িল নাড়িলাম নাড়িলি নাড়িলে নাড়িলেন নাড়িশাক নাড়িস নাড়িয়া নাড়িয়াছ নাড়িয়াছি নাড়িয়াছিল নাড়িয়াছিলাম নাড়িয়াছিলি নাড়িয়াছিলে নাড়িয়াছিলেন নাড়িয়াছিস নাড়িয়াছে নাড়িয়াছেন নাড়িয়ে নাড়িয়েছ নাড়িয়েছি নাড়িয়েছিল নাড়িয়েছিলাম নাড়িয়েছিলি নাড়িয়েছিলে নাড়িয়েছিলেন নাড়িয়েছিলেম নাড়িয়েছিলুম নাড়িয়েছিস নাড়িয়েছে নাড়িয়েছেন নাড়িয়ো নাড়ী নাড়ীজ্ঞান নাড়ীটেপা নাড়ীনক্ষত্র নাড়ীভুঁড়ি নাড়ে নাড়েন নাড়ো নাড়ছ নাড়ছি নাড়ছিল নাড়ছিলাম নাড়ছিলি নাড়ছিলে নাড়ছিলেন নাড়ছিলেম নাড়ছিলুম নাড়ছিস নাড়ছে নাড়ছেন নাড়ত নাড়তাম নাড়তিস নাড়তে নাড়তেন নাড়তেম নাড়তুম নাড়ুন নাড়ব নাড়বার নাড়বি নাড়বে নাড়বেন নাড়বো নাড়ল নাড়লাম নাড়লি নাড়লে নাড়লেন নাড়লেম নাড়লুম নায় নায়ক নায়কি নায়কী নায়কীয় নায়কোচিত নায়কনায়িকা নায়াগ্রা নায়াত নায়িকা নায়িব নায়িবেইলাহি নায়েক নায়েব নায়েবি নায়েবমুনশি নায়েবসুলভ নায়ের নায়না নায়নে নায়র নায়রি নায়রী নি নিং নিংড় নিংড়ক নিংড়া নিংড়াই নিংড়াইও নিংড়াইত নিংড়াইতাম নিংড়াইতিস নিংড়াইতে নিংড়াইতেছ নিংড়াইতেছি নিংড়াইতেছিল নিংড়াইতেছিলাম নিংড়াইতেছিলি নিংড়াইতেছিলে নিংড়াইতেছিলেন নিংড়াইতেছিস নিংড়াইতেছে নিংড়াইতেছেন নিংড়াইতেন নিংড়াইব নিংড়াইবার নিংড়াইবি নিংড়াইবে নিংড়াইবেন নিংড়াইল নিংড়াইলাম নিংড়াইলি নিংড়াইলে নিংড়াইলেন নিংড়াইয়া নিংড়াইয়াছ নিংড়াইয়াছি নিংড়াইয়াছিল নিংড়াইয়াছিলাম নিংড়াইয়াছিলি নিংড়াইয়াছিলে নিংড়াইয়াছিলেন নিংড়াইয়াছিস নিংড়াইয়াছে নিংড়াইয়াছেন নিংড়াইয়ো নিংড়াক নিংড়ান নিংড়ানো নিংড়াস নিংড়ায় নিংড়চ্ছ নিংড়চ্ছি নিংড়চ্ছিল নিংড়চ্ছিলাম নিংড়চ্ছিলি নিংড়চ্ছিলে নিংড়চ্ছিলেন নিংড়চ্ছিলেম নিংড়চ্ছিলুম নিংড়চ্ছিস নিংড়চ্ছে নিংড়চ্ছেন নিংড়ে নিংড়েছ নিংড়েছি নিংড়েছিল নিংড়েছিলাম নিংড়েছিলি নিংড়েছিলে নিংড়েছিলেন নিংড়েছিলেম নিংড়েছিলুম নিংড়েছিস নিংড়েছে নিংড়েছেন নিংড়ো নিংড়োবার নিংড়ত নিংড়তাম নিংড়তিস নিংড়তে নিংড়তেন নিংড়তেম নিংড়তুম নিংড়ন নিংড়নো নিংড়ব নিংড়বি নিংড়বে নিংড়বেন নিংড়বো নিংড়ল নিংড়লাম নিংড়লি নিংড়লে নিংড়লেন নিংড়লেম নিংড়লুম নিংড়স নিঃক্ষেত্র নিঃক্ষত্র নিঃক্ষত্রিয় নিঃশক্তি নিঃশঙ্ক নিঃশেষ নিঃশেষিত নিঃশোক নিঃশোষিত নিঃশত্রু নিঃশ্বাস নিঃশ্বাসবন্ধ নিঃশব্দ নিঃশব্দে নিঃশ্বসিত নিঃশ্বসন নিঃশ্রেয়স নিঃশর্ত নিঃসংকোচ নিঃসংজ্ঞা নিঃসংশয় নিঃসংশয়তা নিঃসঙ্কোচ নিঃসঙ্গ নিঃসঙ্গতা নিঃসঙ্গতাপ্রিয় নিঃসারক নিঃসারিত নিঃসারণ নিঃসারণকারী নিঃসাড় নিঃসীম নিঃসীমতা নিঃসৃত নিঃসত্ত্ব নিঃসন্তান নিঃসন্দেহ নিঃস্পন্দ নিঃস্পন্দন নিঃস্পৃহ নিঃস্পৃহতা নিঃস্ব নিঃস্বার্থ নিঃস্বার্থতা নিঃস্বার্থভাবে নিঃস্বতা নিঃস্বত্ব নিঃস্বন নিঃস্বর নিঃসম্পর্ক নিঃসম্বল নিঃস্রাব নিঃসরিত নিঃস্রোত নিঃস্রোতা নিঃসরণ নিঃসরণকারী নিঃস্রব নিঃসহায় নিঅলি নিঅড় নিঅড়ে নিআঁ নিই নিইয়ে নিইয়েছ নিইয়েছি নিইয়েছিল নিইয়েছিলাম নিইয়েছিলি নিইয়েছিলে নিইয়েছিলেন নিইয়েছিলেম নিইয়েছিলুম নিইয়েছিস নিইয়েছে নিইয়েছেন নিইয়ো নিউ নিউইয়র্ক নিউএজ নিউক্যাসেল নিউক্যাসল নিউক্লিওটাইড নিউক্লিওসাইড নিউক্লিওয়েড নিউক্লিক নিউক্লিয় নিউক্লিয়ার নিউক্লিয়াস নিউক্লিয়িক নিউক্লিয়ন নিউক্লিয়য়েড নিউক্লীয় নিউক্লীয়ফিউশন নিউক্লীয়রসায়ন নিউগিনি নিউজ নিউজউইক নিউজগ্রুপ নিউজার্সি নিউজিল্যান্ড নিউজিল্যান্ডীয় নিউজপ্রিন্ট নিউজলেটার নিউটা নিউটাউন নিউটন নিউট্রিনো নিউট্রন নিউমার্কেট নিউমেক্সিকো নিউমেরিক নিউমেরিক্যাল নিউমোনিয়া নিউরাল নিউরো নিউরোটক্সিন নিউরোট্রান্সমিটার নিউরোপেপটাইড নিউরোলজিস্ট নিউরোসার্জন নিউরন নিও নিওডাইমিয়াম নিওন নিওপ্লাটোনিজম নিওপ্লাসিয়া নিওপ্লাস্টিক নিওবিয়াম নিক নিকা নিকাই নিকাইও নিকাইত নিকাইতাম নিকাইতিস নিকাইতে নিকাইতেছ নিকাইতেছি নিকাইতেছিল নিকাইতেছিলাম নিকাইতেছিলি নিকাইতেছিলে নিকাইতেছিলেন নিকাইতেছিস নিকাইতেছে নিকাইতেছেন নিকাইতেন নিকাইব নিকাইবার নিকাইবি নিকাইবে নিকাইবেন নিকাইল নিকাইলাম নিকাইলি নিকাইলে নিকাইলেন নিকাইয়া নিকাইয়াছ নিকাইয়াছি নিকাইয়াছিল নিকাইয়াছিলাম নিকাইয়াছিলি নিকাইয়াছিলে নিকাইয়াছিলেন নিকাইয়াছিস নিকাইয়াছে নিকাইয়াছেন নিকাইয়ো নিকাক নিকান নিকানামা নিকানো নিকাবার নিকার নিকারাগুয়া নিকারি নিকারী নিকাল নিকালো নিকাশ নিকাশি নিকাষ নিকাস নিকায় নিকি নিকিরি নিকিরী নিকিস নিকিয়ে নিকিয়েছ নিকিয়েছি নিকিয়েছিল নিকিয়েছিলাম নিকিয়েছিলি নিকিয়েছিলে নিকিয়েছিলেন নিকিয়েছিলেম নিকিয়েছিলুম নিকিয়েছিস নিকিয়েছে নিকিয়েছেন নিকিয়ো নিকী নিকুচি নিকচ্ছ নিকচ্ছি নিকচ্ছিল নিকচ্ছিলাম নিকচ্ছিলি নিকচ্ছিলে নিকচ্ছিলেন নিকচ্ছিলেম নিকচ্ছিলুম নিকচ্ছিস নিকচ্ছে নিকচ্ছেন নিকে নিকেত নিকেতন নিকেল নিকেশ নিকোচন নিকোটিন নিকোটিনিক নিকোল নিকুঞ্জ নিকুঞ্জকানন নিকুঞ্জযুক্ত নিকুঞ্জবন নিকট নিকটাত্মীয় নিকটজন নিকটতা নিকটত্ব নিকটতম নিকটতর নিকটবর্তিতা নিকটবর্তিনী নিকটবর্তী নিকটস্থ নিকটস্থা নিকৃত নিকতি নিক্তি নিকতিস নিকতে নিকতেন নিকতেম নিকৃত্ত নিকৃত্তর নিকনো নিকৃন্তী নিকপিক নিকৃপেঁ নিকব নিকবার নিকবি নিকবে নিকবেন নিকবো নিক্বণ নিকম্মা নিকর নিকরুণ নিকল নিকলুম নিকষ নিকষকালো নিকষকৃষ্ণ নিকষার নিকষিত নিক্ষিপ্ত নিক্ষেপ নিক্ষেপক নিক্ষেপকারী নিক্ষেপকৃত নিক্ষেপিত নিক্ষেপণ নিকৃষ্ট নিকৃষ্টতা নিকৃষ্টতম নিকস নিকসউ নিকসানো নিকসন নিকসব নিকসয়ে নিকড়িয়া নিকড়ে নিকয় নিখাউন্তি নিখাউন্তে নিখাকি নিখাগি নিখাত নিখাদ নিখিরকিচ নিখিল নিখেকো নিখেগো নিখোঁজ নিখুঁত নিখুঁতঘনবস্তু নিখুঁতা নিখুঁতি নিখুঁতপ্রায় নিখুঁতভাবে নিখরচ নিখরচা নিখরচায় নিখর্ব নিগাবান নিগাবানি নিগামান নিগামানি নিগার নিগাহ নিগাহবান নিগাহবানি নিগীর্ণ নিগূঢ় নিগণ্ঠ নিগদ নিগদিত নিগন্থ নিগম নিগমিত নিগমন নিগমবদ্ধ নিগ্রাহক নিগ্রো নিগ্রোজাতি নিগরণ নিগ্রহ নিগ্রহকারী নিগৃহীত নিগড় নিগড়িত নিগড়ে নিগড়বদ্ধ নিগড়হীন নিগূঢ়তম নিগূঢ়ভাবে নিঘা নিঘিন্ন নিঘিন্নে নিঘণ্টু নিঘ্ন নিঘুম নিঙ্গাড়ি নিঙ্গড়ান নিঙ্গড়ানো নিঙাড়ি নিঙড়া নিঙড়ানো নিচ নিচু নিচা নিচাশয় নিচে নিচেকার নিচেতন নিচোর নিচোল নিচোলবাস নিচোড়া নিচ্ছ নিচ্ছি নিচ্ছিদ্র নিচ্ছিন্দ নিচ্ছিল নিচ্ছিলাম নিচ্ছিলি নিচ্ছিলে নিচ্ছিলেন নিচ্ছিলেম নিচ্ছিলুম নিচ্ছিস নিচ্ছে নিচ্ছেন নিচতলা নিচুদর নিচুবুলি নিচুর নিচুল নিচুস্তর নিচয় নিছক নিছানো নিছায়ে নিছি নিছে নিছনি নিছুনি নিজ নিজউদ্যোগ নিজকীয় নিজকীয়তা নিজগুণ নিজগুরু নিজগৃহ নিজাম নিজামত নিজামতি নিজে নিজেকে নিজেগোই নিজেদের নিজের নিজেরা নিজেরে নিজেরঢোল নিজত্ব নিজদেশ নিজদেশজাত নিজদেশবাসী নিজদ্বারা নিজদল নিজন নিজভূম নিজমূর্তি নিজস্ব নিজস্বার্থ নিজস্বতা নিজহাত নিঝঞ্ঝাট নিঝুম নিঝর নিট নিযুক্ত নিযুক্তি নিযামত নিযোক্তা নিযোজ্য নিটোল নিযুত নিটমুনাফা নিঠুর নিত নিতুই নিতকনে নিতা নিতাই নিতান্ত নিতান্তপক্ষে নিতাম নিতি নিতে নিতেন নিতেম নিতো নিত্য নিত্যকার নিত্যকাল নিত্যকৃত্য নিত্যক্রিয়া নিত্যকর্ম নিত্যানন্দ নিত্যযাত্রী নিত্যযৌবন নিত্যযৌবনা নিত্যতা নিত্যদিন নিত্যধাম নিত্যনৈমিত্তিক নিত্যনতুন নিত্যপালনীয় নিত্যপূজা নিত্যপ্রবৃত্ত নিত্যপ্রলয় নিত্যপ্রয়োজন নিত্যপ্রয়োজনীয় নিত্যব্যবহার্য নিত্যবৃত্ত নিত্যবর্তমান নিত্যশংকিত নিত্যশঙ্কিত নিত্যশ্রাদ্ধ নিত্যসঙ্গী নিত্যসেবা নিত্যসত্তা নিত্যসমাস নিত্ত নিতবর নিতুম নিতম্ব নিতম্বিনী নিতম্বযুক্তা নিতল নিথর নিদ নিঁদ নিদুখ নিদাঘ নিদাঘপীড়িত নিদাটি নিদান নিদানকাল নিদানতত্ত্ব নিদানপক্ষে নিদানবিদ্যা নিদানশাস্ত্র নিদারুণ নিদালি নিদালী নিদিধ্যাস নিদিধ্যাসন নিদিষ্ট নিদেন নিদেনপক্ষে নিদেশ নিদেশপত্র নিদেষ্টা নিদুটি নিদম নিদ্রা নিদ্রাকারক নিদ্রাকর্ষক নিদ্রাকর্ষণ নিদ্রাগত নিদ্রাজনক নিদ্রাজড় নিদ্রাজড়িত নিদ্রাতুর নিদ্রান্বিত নিদ্রাপোশাক নিদ্রাপরায়ণ নিদ্রাপ্রিয় নিদ্রাবিষ্ট নিদ্রাবিহীন নিদ্রাবেশ নিদ্রাবেশজনিত নিদ্রাবৃত নিদ্রাভঙ্গ নিদ্রাভঙ্গকরণ নিদ্রাভিভূত নিদ্রামগ্ন নিদ্রামগ্নতা নিদ্রারত নিদ্রালু নিদ্রালস নিদ্রালসা নিদ্রাশীল নিদ্রাহীন নিদ্রাহীনতা নিদ্রায়মাণ নিদ্রিত নিদ্রিতা নিদ্রিতাবস্থায় নিদ্রিতভাব নিদ্রোত্থিত নিদ্রোত্থিতা নিদর্শক নিদর্শন নিদর্শনা নিদর্শনাদি নিদর্শনী নিদর্শনপত্র নিদর্শনবাহী নিদর্শনরূপে নিদর্শনসমৃদ্ধ নিদুলি নিদয় নিদয়া নিধান নিধানিয়া নিধার নিধার্য নিধি নিধিরাম নিধেয় নিধন নিধনকারিণী নিধনকারী নিধনিয়া নিধনযজ্ঞ নিধনপতি নিধনমূলক নিধনসহ নিধুবন নিন নিনু নিনাদ নিনাদকারিণী নিনাদকারী নিনাদিত নিনজা নিন্দ নিন্দক নিন্দুক নিন্দা নিন্দাকারী নিন্দাকরা নিন্দাকরণ নিন্দাচ্ছল নিন্দাজনক নিন্দাযোগ্য নিন্দাবাচক নিন্দাবাদ নিন্দার্থক নিন্দার্থে নিন্দারূপ নিন্দার্হ নিন্দিত নিন্দিতা নিন্দে নিন্দ্য নিন্দন নিন্দনীয় নিপাত নিপাতিত নিপাতন নিপান নিপীত নিপীড়ক নিপীড়িত নিপীড়িতা নিপীড়ন নিপীড়নকারী নিপট নিপুণ নিপুণা নিপুণতা নিপুণতাহীন নিপুণভাবে নিপুণহাতে নিপুণহস্তে নিপতিত নিপতন নিব নিবক নিবুক নিবা নিবাই নিবাইও নিবাইত নিবাইতাম নিবাইতিস নিবাইতে নিবাইতেছ নিবাইতেছি নিবাইতেছিল নিবাইতেছিলাম নিবাইতেছিলি নিবাইতেছিলে নিবাইতেছিলেন নিবাইতেছিস নিবাইতেছে নিবাইতেছেন নিবাইতেন নিবাইব নিবাইবার নিবাইবি নিবাইবে নিবাইবেন নিবাইল নিবাইলাম নিবাইলি নিবাইলে নিবাইলেন নিবাইয়া নিবাইয়াছ নিবাইয়াছি নিবাইয়াছিল নিবাইয়াছিলাম নিবাইয়াছিলি নিবাইয়াছিলে নিবাইয়াছিলেন নিবাইয়াছিস নিবাইয়াছে নিবাইয়াছেন নিবাইয়ো নিবাক নিবাত নিবান নিবানো নিবাপ নিবার নিবারক নিবারিত নিবার্য নিবারণ নিবারণকারী নিবারণীয় নিবারণযোগ্য নিবাস নিবাসকারী নিবাসিনী নিবাসী নিবাসন নিবি নিবিত নিবিতাম নিবিতিস নিবিতে নিবিতেছ নিবিতেছি নিবিতেছিল নিবিতেছিলাম নিবিতেছিলি নিবিতেছিলে নিবিতেছিলেন নিবিতেছিস নিবিতেছে নিবিতেছেন নিবিতেন নিবিব নিবিবার নিবিবি নিবিবে নিবিবেন নিবিল নিবিলাম নিবিলি নিবিলে নিবিলেন নিবিষ্ট নিবিষ্টা নিবিষ্টচিত্তে নিবিষ্টতা নিবিষ্টমনে নিবিস নিবিড় নিবিড়তা নিবিড়তাবর্ধন নিবিড়ভাবে নিবিয়া নিবিয়াছ নিবিয়াছি নিবিয়াছিল নিবিয়াছিলাম নিবিয়াছিলি নিবিয়াছিলে নিবিয়াছিলেন নিবিয়াছিস নিবিয়াছে নিবিয়াছেন নিবিয়ে নিবিয়েছ নিবিয়েছি নিবিয়েছিল নিবিয়েছিলাম নিবিয়েছিলি নিবিয়েছিলে নিবিয়েছিলেন নিবিয়েছিলেম নিবিয়েছিলুম নিবিয়েছিস নিবিয়েছে নিবিয়েছেন নিবিয়ো নিবচ্ছ নিবচ্ছি নিবচ্ছিল নিবচ্ছিলাম নিবচ্ছিলি নিবচ্ছিলে নিবচ্ছিলেন নিবচ্ছিলেম নিবচ্ছিলুম নিবচ্ছিস নিবচ্ছে নিবচ্ছেন নিবীত নিবে নিবেআসা নিবেছ নিবেছি নিবেছিল নিবেছিলাম নিবেছিলি নিবেছিলে নিবেছিলেন নিবেছিলেম নিবেছিলুম নিবেছিস নিবেছে নিবেছেন নিবেদক নিবেদিত নিবেদিতা নিবেদিতপ্রাণ নিবেদ্য নিবেদন নিবেদনকারী নিবেদনীয় নিবেদনযোগ্য নিবেন নিবেশ নিবেশক নিবেশকারী নিবেশিত নিবেশন নিবো নিবোনিবো নিবছ নিবছি নিবছিল নিবছিলাম নিবছিলি নিবছিলে নিবছিলেন নিবছিলেম নিবছিলুম নিবছিস নিবছে নিবছেন নিবত নিবৃত নিবতাম নিবতিস নিবতে নিবতেন নিবতেম নিবৃত্ত নিবৃত্তি নিবৃত্তিকারক নিবৃত্তিমার্গ নিবৃত্তিহীন নিবৃত্তিহীনতা নিবতুম নিবদ্ধ নিবদ্ধকৃত নিবদ্ধকরণ নিবন নিবুন নিবনিব নিবুনিবু নিবনো নিবন্ধ নিবন্ধক নিবন্ধিত নিবন্ধতালিকা নিবন্ধন নিবন্ধনকৃত নিবন্ধনক্রম নিবন্ধপ্রতি নিবন্ধভুক্ত নিবন্ধভুক্তি নিবন্ধমালা নিবন্ধরচনা নিবন্ধশ্রেণী নিবন্ধসংখ্যা নিবন্ধসমৃদ্ধ নিবব নিববার নিববি নিববে নিববেন নিববো নিবর্ত নিবর্তক নিবর্তিত নিবর্তন নিবর্হিত নিবর্হণ নিবল নিবলাম নিবলি নিবলে নিবলেন নিবলেম নিবলুম নিবস নিবসই নিবসতি নিবসন নিবহ নিবড় নিবড়ন নিবয় নিভ নিভুক নিভা নিভাঁজ নিভান নিভানো নিভি নিভিছে নিভিত নিভিতাম নিভিতিস নিভিতে নিভিতেছ নিভিতেছি নিভিতেছিল নিভিতেছিলাম নিভিতেছিলি নিভিতেছিলে নিভিতেছিলেন নিভিতেছিস নিভিতেছে নিভিতেছেন নিভিতেন নিভিব নিভিবার নিভিবি নিভিবে নিভিবেন নিভিল নিভিলাম নিভিলি নিভিলে নিভিলেন নিভিস নিভিয়া নিভিয়াছ নিভিয়াছি নিভিয়াছিল নিভিয়াছিলাম নিভিয়াছিলি নিভিয়াছিলে নিভিয়াছিলেন নিভিয়াছিস নিভিয়াছে নিভিয়াছেন নিভিয়ে নিভিয়ো নিভে নিভেছ নিভেছি নিভেছিল নিভেছিলাম নিভেছিলি নিভেছিলে নিভেছিলেন নিভেছিলেম নিভেছিলুম নিভেছিস নিভেছে নিভেছেন নিভেন নিভো নিভছ নিভছি নিভছিল নিভছিলাম নিভছিলি নিভছিলে নিভছিলেন নিভছিলেম নিভছিলুম নিভছিস নিভছে নিভছেন নিভত নিভৃত নিভতাম নিভতিস নিভৃতচারী নিভতে নিভৃতে নিভতেন নিভতেম নিভতুম নিভুন নিভন্ত নিভব নিভবি নিভবে নিভবেন নিভবো নিভল নিভলাম নিভলি নিভলে নিভলেন নিভলেম নিভলুম নিম নিমক নিমকি নিমকিন নিমকদান নিমকদানি নিমকমহল নিমকহারাম নিমকহারামি নিমকহালাল নিমকহালালি নিমখুন নিমগাছ নিমগন নিমগ্ন নিমগনা নিমগ্না নিমগ্নতা নিমঘি নিমা নিমাই নিমাঞা নিমাথি নিমাথিতী নিমালি নিমি নিমিখ নিমিঝিমি নিমিত নিমিত্ত নিমিত্তার্থক নিমিত্তবোধক নিমিত্তমাত্র নিমিশ্ল নিমিষ নিমিষে নিমচা নিমীল নিমীলিত নিমীলিতপ্রায় নিমীলন নিমীলনয়নে নিমেষ নিমেষহীন নিমেষহীনভাবে নিমোরাদ নিমজ্জক নিমজ্জিত নিমজ্জিতা নিমজ্জিতপ্রায় নিমজ্জন নিমজ্জমান নিমজ্জমানা নিমত নিমতিতা নিমতেতো নিম্ন নিম্নকৃত নিম্নক্ত নিম্নক্রম নিম্নক্রমানুসারে নিম্নগ নিম্নগা নিম্নগামী নিম্নগতি নিম্নাংশ নিম্নাঙ্গ নিম্নাঞ্চল নিম্নার্ধ নিম্নচাপ নিম্নে নিম্নোক্ত নিম্নোক্তভাবে নিম্নোদ্ধৃত নিম্নোন্নত নিম্নোলিখিত নিম্নজাতি নিম্নতা নিম্নতম নিম্নতর নিমন্ত্রাতা নিমন্ত্রিত নিমন্ত্রণ নিমন্ত্রণকারী নিমন্ত্রণগ্রহণ নিমন্ত্রণপূর্বক নিমন্ত্রণস্বীকার নিমন্ত্রয়িতা নিমন্ত্রয়িত্রী নিম্নতল নিম্নদিক নিম্নদেশ নিম্নদৃশ্য নিম্নধৃত নিম্নপাত নিম্নপদস্থ নিম্নপ্রাথমিক নিম্নপ্রান্ত নিম্নপর্যায় নিম্নবংশীয় নিম্নবাহু নিম্নবিত্ত নিম্নবর্ণ নিম্নবর্ণিত নিম্নবর্তী নিম্নভাগ নিম্নভূমি নিম্নভর নিম্নভরসম্পন্ন নিম্নমুখী নিম্নমান নিম্নমধ্য নিম্নমধ্যবিত্ত নিম্নরূপ নিম্নলিখিত নিম্নশ্রেণী নিম্নসীমা নিম্নস্তর নিম্নস্থ নিম্নস্থান নিম্নস্থিত নিম্নসপ্তক নিম্নস্বর নিমপাতা নিমফল নিম্ব নিম্বু নিম্বক নিম্বুক নিম্বাইত নিমরাজি নিমহাকিম নির নিরংশ নিরংশু নিরুক্ত নিরুক্তা নিরুক্তি নিরক্ষ নিরক্ষীয় নিরক্ষবৃত্ত নিরক্ষবলয় নিরক্ষর নিরক্ষরেখা নিরক্ষরতা নিরখা নিরখিয়া নির্গুণ নির্গত নির্গতকরণ নির্গন্ধ নির্গম নির্গমন নির্গমনপথ নির্গমপথ নির্গ্রন্থ নির্গলিত নির্গলন নির্গৃহ নির্ঘাত নির্ঘোষ নির্ঘৃণ নির্ঘণ্ট নির্ঘুম নিরঙ্কুশ নিরা নিরাক নিরাকাঙ্ক্ষ নিরাকাঙ্ক্ষা নিরাকাঙ্ক্ষতা নিরাকার নিরাকারবাদ নিরাকৃত নিরাকৃতি নিরাকরণ নিরাকুল নিরাগ নিরাগ্রহ নিরাজন নিরাতঙ্ক নিরাতপ নিরাধার নিরানন্দ নিরানব্বই নিরানব্বুই নিরাপৎ নিরাপত্তা নিরাপত্তাপরিষদ নিরাপত্তাবাহিনী নিরাপত্তারক্ষী নিরাপৎসু নিরাপদ নিরাপদেষু নিরাবরণ নিরাবয়ব নিরাভরণ নিরাভরণা নিরামিষ নিরামিষাশী নিরামিষভোজী নিরাময় নিরাময়যোগ্য নিরাময়প্রচুর নিরালা নিরালম্ব নিরালস্য নিরাশ নিরাশা নিরাশ্বাস নিরাশ্রয় নিরাশ্রয়া নিরাস নিরাসক্ত নিরাসক্তি নিরাসক্তভাবে নিরাহার নিরিখ নিরিখে নিরিন্দ্রিয় নিরিবিলি নিরীক্ষক নিরীক্ষা নিরীক্ষিত নিরীক্ষ্যমাণ নিরীক্ষণ নিরীক্ষণকারী নিরীক্ষমাণ নিরীশ্বর নিরীশ্বরবাদ নিরীশ্বরবাদী নিরীহ নিরীহতা নিরেট নিরেটভাবে নিরেটমাথা নিরেশ নিরেস নিরোধ নিরোধক নিরোধকারী নিরোধ্য নিরোধন নিরোধপূর্বক নির্জাস নির্জিত নির্জীব নির্জীবতা নিরজন নির্জন নির্জনতা নির্জনতাপ্রিয় নির্জর নির্জল নির্জলা নির্ঝঞ্ঝাট নির্ঝর নির্ঝরিণী নির্ঝরী নির্ঝরঝরিত নিরঞ্জন নিরঞ্জনা নির্যাতক নির্যাতিকা নির্যাতিত নির্যাতিতা নির্যাতন নির্যাতনকারিণী নির্যাতনকারী নির্যাশ নির্যাস নির্যাসমিশ্রিত নির্ণায়ক নির্ণায়কসভা নির্ণায়কসভ্য নির্ণীত নির্ণেতা নির্ণেয় নির্ণয় নির্ণয়কারক নির্ণয়কারী নির্ণয়যোগ্য নির্ণয়যোগ্যতা নির্ণয়ন নির্ণয়পূর্বক নিরত নিরতা নিরতি নিরতিশয় নিরত্যয় নিরুত্তেজ নিরুত্তর নিরুৎসুক নিরুৎসাহ নিরুৎসাহিত নিরুদ নির্দিষ্ট নির্দিষ্টকালব্যাপী নির্দিষ্টকরণ নির্দিষ্টকরণনীতি নির্দিষ্টতা নির্দিষ্টপরিমাণ নির্দিষ্টভাবে নির্দেশ নির্দেশক নির্দেশকারী নির্দেশক্রমে নির্দেশাত্মক নির্দেশাদি নির্দেশাবলী নির্দেশার্থ নির্দেশালয় নির্দেশিকা নির্দেশিত নির্দেশচিহ্ন নির্দেশদান নির্দেশন নির্দেশনা নির্দেশনামা নির্দেশনী নির্দেশপত্র নির্দেশপ্রাপ্ত নির্দেশপূর্ণ নির্দেশমতো নির্দেশসংবলিত নির্দেষ্টা নির্দোষ নির্দোষিতা নির্দোষী নিরুদ্যোগ নিরুদ্যম নিরুদ্দিষ্ট নিরুদ্দেশ নিরুদ্ধ নিরুদ্বিগ্ন নির্দ্বিধ নির্দ্বিধা নির্দ্বিধায় নিরুদ্বেগ নির্দ্বন্দ্ব নির্দল নির্দলীয় নির্দয় নির্দয়া নির্দয়তা নির্ধারক নির্ধারিত নির্ধার্য নির্ধারণ নির্ধারণকারী নির্ধারণযোগ্য নির্ধুত নির্ধূত নির্ধন নির্ধনতা নির্ধূম নির্ধূমতা নির্নিমিখ নির্নিমিত্ত নির্নিমেষ নিরন্তর নিরন্তরতা নিরন্তরতাবোধ নিরন্তরভাবে নিরন্ন নিরূপক নিরুপাধি নিরুপাধিক নিরুপায় নিরূপিত নিরপেক্ষ নিরপেক্ষতা নিরপেক্ষদল নিরপেক্ষপরিস্থিতি নিরপেক্ষভাবে নিরপেক্ষরেখা নিরূপণ নিরূপণকারী নিরূপণীয় নিরপত্য নিরপত্যা নিরুপদ্রব নিরুপদ্রবে নিরুপম নিরুপমা নিরপরাধ নিরপরাধা নিরপরাধিনী নিরপরাধী নির্বংশ নিরবকাশ নির্বাক নির্বাচক নির্বাচকমণ্ডলী নির্বাচিত নির্বাচিতা নির্বাচ্য নির্বাচন নির্বাচনকারিণী নির্বাচনকারী নির্বাচনকেন্দ্র নির্বাচনক্ষেত্র নির্বাচনী নির্বাণ নির্বাণগত নির্বাণোন্মুখ নির্বাণপ্রাপ্ত নির্বাণলাভ নির্বাত নির্বাতক নির্বাধ নির্বাধকরণ নির্বান্ধব নির্বাপক নির্বাপিত নির্বাপিতপ্রায় নির্বাপণ নির্বাপণকারী নির্বাপয়িতা নির্বারিত নির্বাসিত নির্বাসিতা নির্বাসন নির্বাসনকারী নির্বাসনদণ্ড নির্বাহ নির্বাহক নির্বাহকারী নির্বাহকাল নির্বাহিত নির্বাহী নির্বাহীগণ নির্বিকার নির্বিকল্প নির্বিকল্পসমাধি নির্বিঘ্ন নির্বিঘ্নতা নির্বিচার নির্বিণ্ণ নির্বিবাদ নির্বিবাদী নির্বিরোধ নির্বিরোধী নির্বিশঙ্ক নির্বিশেষ নির্বিশেষে নির্বিষ নির্বিষয় নিরবচ্ছিন্ন নিরবচ্ছিন্নতা নির্বীজ নির্বীজিত নির্বীজন নির্বীজসমাধি নির্বচন নির্বীর নির্বীরা নির্বীর্য নির্বীর্যতা নির্বেদ নির্বেদযুক্ত নির্বোধ নির্ব্যাজ নির্ব্যূঢ় নির্বৃতি নির্বৃত্ত নির্বৃত্তি নিরবদ্য নির্বুদ্ধি নির্বুদ্ধিতা নিরবধি নির্বন্ধ নির্বন্ধিত নির্বর্তক নির্বর্তিত নির্বর্তন নির্বর্ষ নির্বল নিরবলম্ব নিরবলম্বন নিরবশেষ নির্বস্ত্র নিরবয়ব নির্ভাবনা নির্ভার নিরভিমান নিরভিমানা নিরভিমানিনী নিরভিমানী নির্ভীক নির্ভীকতা নির্ভেজাল নিরভ্র নির্ভর নির্ভরকারী নির্ভরযোগ্য নির্ভরযোগ্যতা নির্ভরতা নির্ভরমুক্ত নির্ভরশীল নির্ভরশীলতা নির্ভরসা নির্ভরহীন নির্ভুল নির্ভুলতা নির্ভুলতম নির্ভুলভাবে নির্ভয় নির্ভয়তা নির্মুক্ত নির্মক্ষিক নিরমা নির্মা নির্মাণ নির্মাণকাজ নির্মাণকারী নির্মাণকার্য নির্মাণকাল নির্মাণকৌশল নির্মাণকর্তা নির্মাণকল্প নির্মাণকুশলতা নির্মাণাধীন নির্মাণেচ্ছা নির্মাণপদ্ধতি নির্মাণবাদ নির্মাণশৈলী নির্মাতা নিরমান নিরমানো নির্মাল্য নির্মিত নির্মিতি নির্মিৎসা নিরমিলু নিরমিলুঁ নিরমচালু নির্মীয়মাণ নির্মেঘ নির্মোক নির্মোঘ নির্মোচ্য নির্মোচন নির্মোচনকারী নির্মোহ নির্মঞ্ছন নিরম্বু নির্মম নির্মমতা নির্মমভাবে নিরমল নির্মল নির্মূল নির্মূলকারী নির্মলা নির্মলি নির্মূলিত নির্মলী নির্মূলীকরণ নির্মলতা নির্মূলন নিরর্গল নিরর্থ নিরর্থক নিরল নিরলঙ্কার নির্লিপ্ত নির্লিপ্তি নির্লিপ্ততা নির্লেপ নির্লোভ নির্লোভী নির্লোম নির্লজ্জ নির্লজ্জতা নির্লজ্জভাবে নিরলস নিরলসা নিরস নিরস্ত নিরস্ত্র নিরস্ত্রীকরণ নিরসন নিরসনকারী নিরসনকল্প নিরহংকার নিরহংকারী নিরহঙ্কার নিরহঙ্কারী নিরয় নিরয়গামী নিরয়গমন নিলাজ নিলাম নিলামি নিলামপ্রক্রিয়া নিলি নিলীন নিলীয়মান নিলে নিলেন নিলেম নিলো নিলম্বিত নিলম্বন নিলয় নিশঙ্ক নিশা নিশাকান্ত নিশাকাল নিশাকর নিশাগম নিশাচর নিশাচরী নিশাত্যয় নিশাদল নিশান নিশানা নিশানাথ নিশানি নিশান্ত নিশানদার নিশানদিহি নিশানবরদার নিশানবর্দার নিশাপতি নিশাবিহার নিশাবসান নিশামন নিশাল নিশাস নিশি নিশিকান্ত নিশিগন্ধা নিশিযাপন নিশিত নিশিদিন নিশিদিশি নিশিপাওয়া নিশিপালক নিশিপালন নিশিপদ্ম নিশিবোঁ নিশিভোর নিশিসমাগম নিশ্চায়ক নিশ্চিত নিশ্চিতকরণ নিশ্চিতভাবে নিশ্চিতরূপে নিশ্চিন্ত নিশ্চিন্ততা নিশ্চিন্তভাবে নিশ্চিন্দি নিশ্চিহ্ন নিশ্চেতন নিশ্চেতনা নিশ্চেষ্ট নিশ্চেষ্টতা নিশীথ নিশীথিনী নিশীথনিবিড় নিশীন নিশ্চল নিশ্চলা নিশ্চলাবস্থা নিশ্চলতা নিশ্চলভাবে নিশ্চয় নিশ্চয়কারী নিশ্চয়কর্তা নিশ্চয়াত্মক নিশ্চয়াদি নিশ্চয়ার্থক নিশ্চয়ার্থে নিশ্চয়চিত্ত নিশ্চয়োক্তি নিশ্চয়জ্ঞান নিশ্চয়তা নিশ্চয়তাজ্ঞাপক নিশ্চয়তাবোধক নিশ্চয়রূপে নিশোয়াস নিশ্ছিদ্র নিশুতি নিশপিশ নিশ্বাস নিশ্বাসপ্রশ্বাস নিশ্বাসপ্রশ্বাসযুক্ত নিশ্বাসবন্ধ নিশ্বসিত নিশ্বসন নিশমন নিষ্ক নিষ্কাম নিষ্কাশ নিষ্কাশিত নিষ্কাশন নিষ্কাশনীয় নিষ্কাশনস্থল নিষ্কাসিত নিষ্কাসন নিষ্কণ্টক নিষ্কৃত নিষ্কৃতি নিষ্কৃতিপ্রাপ্ত নিষ্কপট নিষ্কমালা নিষ্কম্প নিষ্কর নিষ্ক্রান্ত নিষ্ক্রিয় নিষ্ক্রিয়তা নিষ্ক্রিয়প্রকৃতি নিষ্ক্রিয়প্রতিরোধ নিষ্ক্রিয়শ্রেণী নিষ্করুণ নিষ্কর্ম নিষ্ক্রম নিষ্কর্মা নিষ্ক্রমণ নিষ্ক্রমণপথ নিষ্কর্ষ নিষ্কর্ষণ নিষ্ক্রয় নিষ্কল নিষ্কুল নিষ্কলঙ্ক নিষ্কলা নিষ্কলী নিষ্কলুষ নিষঙ্গ নিষঙ্গী নিষাদ নিষাদী নিষিক্ত নিষিদ্ধ নিষিদ্ধকরণ নিষিদ্ধতা নিষেক নিষেধ নিষেধক নিষেধকারী নিষেধাজ্ঞা নিষেধাত্মক নিষেধযোগ্য নিষেধবাচক নিষেবক নিষেবিত নিষেবণ নিষ্যন্দ নিষ্যন্দী নিষ্ঠ নিষ্ঠা নিষ্ঠান্ত নিষ্ঠাপরায়ণ নিষ্ঠাবান নিষ্ঠাশীল নিষ্ঠীব নিষ্ঠীবন নিষ্ঠ্যূত নিষ্ঠুর নিষ্ঠুরতা নিষ্ঠুরপ্রকৃতি নিষ্ঠুরভাবে নিষণ্ণ নিষুতি নিষ্পাদক নিষ্পাদিত নিষ্পাদ্য নিষ্পাদন নিষ্পাদনীয় নিষ্পাপ নিষ্পাপী নিষ্পিষ্ট নিষ্পেষ নিষ্পেষক নিষ্পেষিত নিষ্পেষণ নিষ্পেষণকারী নিষুপ্ত নিষুপ্তি নিষ্পত্তি নিষ্পত্তিকারক নিষ্পত্র নিষ্পন্ন নিষ্প্রাণ নিষ্প্রাণতা নিষ্প্রতিভ নিষ্প্রদীপ নিষ্প্রভ নিষ্প্রভতা নিষ্প্রয়োজন নিষ্ফল নিষ্ফলা নিষ্ফলতা নিসাদল নিসান নিসানা নিসানী নিসাস নিসাড় নিসাড়া নিসিন্দা নিসিন্দে নিস্টাটিন নিস্যন্দ নিস্যন্দিত নিস্যন্দী নিসুত নিস্তার নিস্তারক নিস্তারকারিণী নিস্তারকারী নিস্তারিণী নিস্তেজ নিস্তনাবুদ নিস্তনী নিস্তব্ধ নিস্তব্ধতা নিস্তরঙ্গ নিস্তরণ নিস্তল নিস্তলতা নিস্তুষ নিসূদক নিসূদন নিসপিস নিস্পন্দ নিস্পন্দিত নিস্পন্দতা নিস্বান নিস্বন নিসর্গ নিসর্গী নিসর্গচিত্র নিসর্গজ নিসর্গপ্রীতি নিসর্গবিদ নিসর্গবেদী নিসর্গশোভা নিসৃষ্ট নিহাই নিহার নিহারা নিহারি নিহারিনু নিহারিল নিহারন নিহারনু নিহালি নিহাস নিহায়েত নিহিত নিহিতার্থ নিহিলিস্ট নিহত নিহন্তা নিহুরি নিহুড়িআঁ নিড়া নিড়ান নিড়ানি নিড়ানো নিড়েন নিড়েনি নিড়ন নিড়নো নিড়বিড় নিয়া নিয়ানি নিয়ানী নিয়ামক নিয়ামত নিয়ামন নিয়াসিন নিয়ে নিয়োগ নিয়েছ নিয়েছি নিয়েছিল নিয়েছিলাম নিয়েছিলি নিয়েছিলে নিয়েছিলেন নিয়েছিলেম নিয়েছিলো নিয়েছিলুম নিয়েছিস নিয়েছে নিয়েছেন নিয়েন নিয়ো নিয়োক্তা নিয়োগ নিয়োগকারী নিয়োগকর্তা নিয়োগী নিয়োগযোগ্য নিয়োগদান নিয়োগপত্র নিয়োগপ্রাপ্ত নিয়োজক নিয়োজিত নিয়োজ্য নিয়োজন নিয়োজয়িতা নিয়োপ্লাসিয়া নিয়োপ্লাস্টিক নিয়োমাইসিন নিয়জিত নিয়ত নিয়ৎ নিয়তকরা নিয়তাচার নিয়তাত্মা নিয়তাহার নিয়তি নিয়তিবাদ নিয়তিবাদী নিয়তবাঁধা নিয়ন নিয়ন্তা নিয়ন্ত্রক নিয়ন্ত্রিত নিয়ন্ত্রিতকরণ নিয়ন্ত্রিতভাবে নিয়ন্ত্রী নিয়ন্ত্রণ নিয়ন্ত্রণকারী নিয়ন্ত্রণকেন্দ্র নিয়ন্ত্রণাধীন নিয়ন্ত্রণযোগ্য নিয়ন্ত্রণভার নিয়ন্ত্রণমুক্ত নিয়ন্ত্রণসাপেক্ষ নিয়নবাতি নিয়নলাইট নিয়নসাইন নিয়ম নিয়মঅনুযায়ী নিয়মঅনুসারী নিয়মকানুন নিয়মকর্তা নিয়মাদি নিয়মাধীন নিয়মানুগ নিয়মানুগত নিয়মানুযায়ী নিয়মানুবর্তিতা নিয়মানুবর্তী নিয়মানুসারে নিয়মাবদ্ধ নিয়মাবলী নিয়মিত নিয়মিতভাবে নিয়ম্য নিয়মতান্ত্রিক নিয়মতান্ত্রিকতা নিয়মতান্ত্রিকভাবে নিয়মতন্ত্র নিয়মনিগড় নিয়মনির্দিষ্ট নিয়মনিষ্ঠ নিয়মনীতি নিয়মপালন নিয়মপূর্বক নিয়মবিধি নিয়মবিরুদ্ধ নিয়মবদ্ধ নিয়মবহির্ভূত নিয়মভঙ্গ নিয়মমাফিক নিয়মমতো নিয়মরক্ষা নিয়মশীলতা নিয়মশূন্য নিয়মসংবলিত নিয়মসিদ্ধ নিয়মসেবা নিয়মহীন নিয়মহীনতা নিয়ড় নী নচিকেতা নীচ নীচকুলোদ্ভব নীচকুলজাত নীচা নীচাশয় নীচে নীচেকার নীচজাতি নীচযোনি নীচতা নীচত্ব নীচতম নীচতমা নীচতলা নীচদিক নীচপ্রকৃতি নীচবংশীয় নীচবংশজাত নীচবৃত্তি নীচমনা নচেৎ নুচ্ছ নচ্ছার নুচ্ছি নুচ্ছিল নুচ্ছিলাম নুচ্ছিলি নুচ্ছিলে নুচ্ছিলেন নুচ্ছিলেম নুচ্ছিলুম নুচ্ছিস নুচ্ছে নুচ্ছেন নীঝর নীট নীত নীতি নীতিকথা নীতিকর্ম নীতিগত নীতিগতভাবে নীতিগল্প নীতিচরিত্র নীতিজ্ঞ নীতিজ্ঞান নীতিযুক্ত নীতিনির্ধারক নীতিনির্ধারণ নীতিনির্ধারণী নীতিপ্রণেতা নীতিবাক্য নীতিবাগীশ নীতিবাদী নীতিবিদ্যা নীতিবিরোধী নীতিবিরুদ্ধ নীতিবহির্ভূতভাবে নীতিমান নীতিমালা নীতিশাস্ত্র নীতিশাস্ত্রজ্ঞ নীতিশিক্ষা নীতিসংগত নীতিসংবলিত নীতিসঙ্গত নীতিসন্ধান নীতিসম্পর্কিত নীতিসম্মত নীদ নীপ নীপবন নীবার নীবি নীবিবন্ধ নীবী নীবীবন্ধ নীম নীর নীরক্ত নীরাজন নীরাজনা নীরোগ নীরোগী নীরজ নীরজা নীরত নীরদ নীরদা নীরদবাহন নীরদবরণ নীরধি নীরন্ধ্র নীরব নীরবচারী নীরবতা নীরস নীরসীকৃত নীরসতা নীল নীলকান্ত নীলকান্তমণি নীলকুঠি নীলকুঠী নীলকণ্ঠ নীলকমল নীলকর নীলক্ষেত নীলগাই নীলগিরি নীলগঞ্জ নীলা নীলাকাশ নীলাচল নীলাঞ্জন নীলাভ নীলাভ্র নীলাম্বু নীলাম্বুধি নীলাম্বর নীলাম্বরী নীলিকা নীলিম নীলিমা নীলচাষী নীলচে নীলোৎপল নীলছবি নীলত্ব নীলনকশা নীলনদ নীলপূজা নীলপদ্ম নীলফামারী নীলবর্ণ নীলমাধব নীলমণি নীলমূর্তি নীলরং নীলরক্ত নীলরঙা নীলরতন নীললোহিত নীলষষ্ঠী নীলসাগর নীলসোনালী নীস্তনাবুদ নীহার নীহারিকা নীহারিকাপুঞ্জ নীহারস্ফোট নীড় নীয় নীয়ত নীয়মান নীয়মানা নে নেং নেংচা নেংচাই নেংচাইত নেংচাইতাম নেংচাইতিস নেংচাইতে নেংচাইতেছ নেংচাইতেছি নেংচাইতেছিল নেংচাইতেছিলাম নেংচাইতেছিলি নেংচাইতেছিলে নেংচাইতেছিলেন নেংচাইতেছিস নেংচাইতেছে নেংচাইতেছেন নেংচাইতেন নেংচাইব নেংচাইবার নেংচাইবি নেংচাইবে নেংচাইবেন নেংচাইল নেংচাইলাম নেংচাইলি নেংচাইলে নেংচাইলেন নেংচাইয়া নেংচাইয়াছ নেংচাইয়াছি নেংচাইয়াছিল নেংচাইয়াছিলাম নেংচাইয়াছিলি নেংচাইয়াছিলে নেংচাইয়াছিলেন নেংচাইয়াছিস নেংচাইয়াছে নেংচাইয়াছেন নেংচাইয়ো নেংচাও নেংচাক নেংচাচ্ছ নেংচাচ্ছি নেংচাচ্ছিল নেংচাচ্ছিলাম নেংচাচ্ছিলি নেংচাচ্ছিলে নেংচাচ্ছিলেন নেংচাচ্ছিলেম নেংচাচ্ছিলুম নেংচাচ্ছিস নেংচাচ্ছে নেংচাচ্ছেন নেংচাত নেংচাতাম নেংচাতিস নেংচাতে নেংচাতেন নেংচাতেম নেংচাতুম নেংচান নেংচানো নেংচাব নেংচাবার নেংচাবি নেংচাবে নেংচাবেন নেংচাবো নেংচাল নেংচালাম নেংচালি নেংচালে নেংচালেন নেংচালেম নেংচালুম নেংচাস নেংচায় নেংচে নেংচেছ নেংচেছি নেংচেছিল নেংচেছিলাম নেংচেছিলি নেংচেছিলে নেংচেছিলেন নেংচেছিলেম নেংচেছিলুম নেংচেছিস নেংচেছে নেংচেছেন নেংচো নেংটা নেংটি নেংটিপরা নেংটী নেংটে নেংটো নেংলা নেংড়া নেআ নেআলী নেই নেইআঁকড়া নেইআঁকড়ী নেইই নেইকো নেইমামা নেউগী নেউছয় নেউটা নেউরা নেউল নেও নেওটা নেওন নেওয়া নেওয়াক নেওয়াচ্ছ নেওয়াচ্ছি নেওয়াচ্ছিল নেওয়াচ্ছিলাম নেওয়াচ্ছিলি নেওয়াচ্ছিলে নেওয়াচ্ছিলেন নেওয়াচ্ছিলেম নেওয়াচ্ছিলুম নেওয়াচ্ছিস নেওয়াচ্ছে নেওয়াচ্ছেন নেওয়াজ নেওয়াত নেওয়াতাম নেওয়াতিস নেওয়াতে নেওয়াতেন নেওয়াতেম নেওয়াতুম নেওয়ান নেওয়ানো নেওয়াব নেওয়াবার নেওয়াবি নেওয়াবে নেওয়াবেন নেওয়াবো নেওয়াল নেওয়ালাম নেওয়ালি নেওয়ালে নেওয়ালেন নেওয়ালেম নেওয়ালুম নেওয়াস নেক নেকা নেকাপনা নেকাব নেকামি নেকামো নেকার নেকি নেকী নেকেড নেকো নেকটাই নেকনাম নেকনজর নেকনযর নেকবক্ত নেকবখত নেকরা নেকলেস নেক্সট নেকড়া নেকড়ে নেকড়েবাঘ নেগা নেগাবান নেগাহ নেগাহবান নেগে নেগেটিভ নেঙ নেঙচানো নেঙরা নেচার নেচারি নেচে নেচেছ নেচেছি নেচেছিল নেচেছিলাম নেচেছিলি নেচেছিলে নেচেছিলেন নেচেছিলেম নেচেছিলুম নেচেছিস নেচেছে নেচেছেন নেচো নেছার নেজ নেজা নেজামত নেজুড় নেজুড়ে নেট নেটওয়ার্ক নেটওয়ার্কিং নেটওয়ার্কস নেটা নেটিভ নেটিভিটি নেঠা নেত নেতৃ নেতা নেতাকর্মী নেতাজি নেতাজী নেতান নেতানো নেতি নেতিবাচক নেতিমূলক নেতিয়ে নেতৃত্ব নেতৃত্বগুণ নেতৃত্বাধীন নেতৃত্বদান নেতৃত্বদানকারী নেতৃত্বশূন্য নেতধটি নেতবাস নেতব্য নেতৃবৃন্দ নেত্র নেত্রকোনা নেত্রগোচর নেত্রী নেত্রচ্ছদ নেত্রীসুলভ নেত্রপাত নেত্রপ্রদাহ নেত্রপল্লব নেতৃস্থানীয় নেতৃসম্মেলন নেদারল্যান্ড নেদারল্যান্ডস নেন নেননি নেপ নেপা নেপাল নেপালি নেপালীয় নেপচুন নেপো নেপোলিয়ন নেপটানো নেপথ্য নেপথ্যবিধান নেপলস নেফাক নেফ্রন নেব নেবু নেবা নেবাক নেবাচ্ছ নেবাচ্ছি নেবাচ্ছিল নেবাচ্ছিলাম নেবাচ্ছিলি নেবাচ্ছিলে নেবাচ্ছিলেন নেবাচ্ছিলেম নেবাচ্ছিলুম নেবাচ্ছিস নেবাচ্ছে নেবাচ্ছেন নেবাজ নেবাত নেবাতাম নেবাতিস নেবাতে নেবাতেন নেবাতেম নেবাতুম নেবান নেবানো নেবাব নেবাবার নেবাবি নেবাবে নেবাবেন নেবাবো নেবাল নেবালাম নেবালি নেবালে নেবালেন নেবালেম নেবালুম নেবাস নেবে নেবেছ নেবেছি নেবেছিল নেবেছিলাম নেবেছিলি নেবেছিলে নেবেছিলেন নেবেছিলেম নেবেছিলুম নেবেছিস নেবেছে নেবেছেন নেবেন নেবো নেভা নেভাডা নেভান নেভানো নেভাল নেভে নেভেন নেভবার নেম নেমক নেমকহারাম নেমাজ নেমি নেমেছ নেমেছি নেমেছিল নেমেছিলাম নেমেছিলি নেমেছিলে নেমেছিলেন নেমেছিলেম নেমেছিলুম নেমেছিস নেমেছে নেমেছেন নেমন্তন্ন নেমস্তন্নবাড়ি নেমস্পেস নেল নেলাখেপা নেলাখ্যাপা নেশা নেশাকাটা নেশাকারী নেশাকর নেশাখোর নেশাগ্রস্ত নেশাগ্রস্থ নেশাযুক্ত নেশাদায়ক নেশাপ্রবণ নেশারঝোঁক নেশন নেসার নেস্তনাবুদ নেসলে নেহ নেহা নেহাই নেহাত নেহাতি নেহাতপক্ষে নেহার নেহারই নেহারি নেহারিল নেহারন নেহারনু নেহারল নেহাল নেহালি নেহালে নেহায়েত নেহি নেহত নেড় নেড়া নেড়ানেড়ি নেড়াপোড়া নেড়ি নেড়িকুত্তা নেড়ে নেড়েঘেঁটে নেড়েচেড়ে নেড়েছ নেড়েছি নেড়েছিল নেড়েছিলাম নেড়েছিলি নেড়েছিলে নেড়েছিলেন নেড়েছিলেম নেড়েছিলুম নেড়েছিস নেড়েছে নেড়েছেন নেড়ো নেড়রি নেয় নেয়া নেয়ান নেয়ানো নেয়াপাতি নেয়ামত নেয়ামৎ নেয়াল নেয়ালী নেয়াড় নেয়ে নেয়েছ নেয়েছি নেয়েছিল নেয়েছিলাম নেয়েছিলি নেয়েছিলে নেয়েছিলেন নেয়েছিলেম নেয়েছিলুম নেয়েছিস নেয়েছে নেয়েছেন নেয়ো নেয়নি নৈ নৈঃশব্দ্য নৈকট্য নৈকট্যঘটিত নৈকষেয় নৈকষ্য নৈকষ্যকুলীন নৈচা নৈচে নৈযুজ্য নৈতিক নৈতিকতা নৈতিকভাবে নৈদাঘ নৈদাঘী নৈপুণ্য নৈবিদ্য নৈবিদ্যি নৈবিদ্দ নৈবচ নৈবেদ্য নৈবদ্য নৈমিত্তিক নৈমিষ নৈমিষারণ্য নৈর্ঋত নৈর্গুণ্য নৈরাকার নৈরাজ্য নৈরাজ্যবাদ নৈরাজ্যবাদী নৈরাশ নৈরাশা নৈরাশ্য নৈরাশ্যবাদ নৈরপেক্ষ নৈরপেক্ষ্য নৈর্ব্যক্তিক নৈর্ব্যক্তিকভাবে নৈল নৈলে নৈলো নৈশ নৈশযুদ্ধ নৈশব্দ নৈশভোজ নৈষ্কর্ম নৈষ্কর্ম্য নৈষাদ নৈষ্ঠিক নৈষ্ঠিকতা নৈষধ নৈষধীয় নৈসর্গিক নৈসর্গিকী নৈসর্গিকতা নৈহাটি নৈহর নৈয়ায়িক নৈয়মিক নো নোংরা নোংরামি নোংরামো নোকার নোকিয়া নোকতা নোক্তা নোকর নোকরি নোকসান নোঙ্গর নোঙর নোঙরযোগ্য নোট নোটকরা নোটখাতা নোটিফিকেশন নোটিশ নোটিস নোটেরগোছা নোটেশন নোটন নোটপ্যাড নোটবই নোটবুক নোত নোতক নোতুন নোথা নোদন নোনা নোনাজল নোনাধরা নোনাপানি নোনাভূমি নোনালাগা নোনতা নোবেল নোবেলজয়ী নোবেলপুরস্কার নোবেলবিজয়ী নোমান নোল নোলক নোলা নোলাদাগা নোসখা নোড় নোড়া নোয় নোয়া নোয়াই নোয়াইও নোয়াইত নোয়াইতাম নোয়াইতিস নোয়াইতে নোয়াইতেছ নোয়াইতেছি নোয়াইতেছিল নোয়াইতেছিলাম নোয়াইতেছিলি নোয়াইতেছিলে নোয়াইতেছিলেন নোয়াইতেছিস নোয়াইতেছে নোয়াইতেছেন নোয়াইতেন নোয়াইব নোয়াইবার নোয়াইবি নোয়াইবে নোয়াইবেন নোয়াইল নোয়াইলাম নোয়াইলি নোয়াইলে নোয়াইলেন নোয়াইয়া নোয়াইয়াছ নোয়াইয়াছি নোয়াইয়াছিল নোয়াইয়াছিলাম নোয়াইয়াছিলি নোয়াইয়াছিলে নোয়াইয়াছিলেন নোয়াইয়াছিস নোয়াইয়াছে নোয়াইয়াছেন নোয়াইয়ো নোয়াখালী নোয়াচ্ছ নোয়াচ্ছি নোয়াচ্ছিল নোয়াচ্ছিলাম নোয়াচ্ছিলি নোয়াচ্ছিলে নোয়াচ্ছিলেন নোয়াচ্ছিলেম নোয়াচ্ছিলুম নোয়াচ্ছিস নোয়াচ্ছে নোয়াচ্ছেন নোয়াত নোয়াতাম নোয়াতিস নোয়াতে নোয়াতেন নোয়াতেম নোয়াতুম নোয়ান নোয়ানো নোয়াব নোয়াবার নোয়াবি নোয়াবে নোয়াবেন নোয়াবো নোয়াল নোয়ালাম নোয়ালি নোয়ালে নোয়ালেন নোয়ালেম নোয়ালুম নোয়াস নৌ নৌকা নৌকাকৃতি নৌকাচালক নৌকাচালনাকারী নৌকাজীবী নৌকাযাত্রী নৌকাযোগ নৌকাযোগে নৌকাডুবি নৌকাদি নৌকাপথ নৌকাবাহক নৌকাবিলাস নৌকাবিহার নৌকাভ্রমণ নৌকারোহী নৌকালীলা নৌকো নৌকোডুবি নৌকতা নৌকমান্ডো নৌঘাঁটি নছিব নছিহত নৌচালক নৌচালন নৌচালনা নৌচলাচল নছীহত নৌজীবিক নৌজীবী নৌজোয়ান নৌযান নৌযোগাযোগ নৌযোদ্ধা নৌযুদ্ধ নৌযন্ত্র নৌতন নৌপথ নৌপরিবহন নৌপর্যটন নছব নৌবাণিজ্য নৌবাহ নৌবাহিনী নৌবাহী নৌবাহ্য নৌবিদ্যা নৌবিহার নৌবত নৌবৎ নছবনামা নৌবল নৌবহর নৌভ্রমণ নৌরক্ষক নৌসেনা নৌসেনাপতি নৌসৈন্য নজগজ নজগজিয়া নজাত নজাশি নজির নজিরবিহীন নজিরস্বরূপ নজিরহীন নজীর নজ্জুম নজদিক নজদিগ নজন নজর নজরওয়ালা নজরানা নজরিয়া নজরতালিকা নজরদার নজরনিয়াজ নজরবাজ নজরবাজি নজরবন্দি নজরবন্দী নজরবন্ধ নজরুল নজরুলগীতি নজরুলজয়ন্তী নজরসেলামি নজুল নঞ নঞতৎপুরুষ নঞর্থক নট নটই নটক ন্যক্কার ন্যক্কারজনক নটকান নটকী নটকনা নটখট নটখটি নটখটে ন্যগ্রোধ নটঘট নটঘটি নটঘটে নটা ন্যাংচা ন্যাংচানো ন্যাংটা ন্যাংটাগারা ন্যাংটো ন্যাংটোগারা ন্যাংলা ন্যাওটা ন্যাকা ন্যাকাপনা ন্যাকাম ন্যাকামি ন্যাকামো ন্যাকার ন্যাকারজনক ন্যাকরা ন্যাকড়া ন্যাচারাল ন্যাজ ন্যাজা ন্যাটা ন্যাটাপ্যাচা ন্যাটো ন্যায্য ন্যায্যগণ্ডা ন্যায্যতা ন্যায্যমূল্য ন্যাতা ন্যাতনেতে ন্যাতপেতে ন্যাতপ্যাত ন্যাদাড়ে ন্যানো ন্যানোটেকনোলজি ন্যানোপ্রযুক্তি ন্যানোমিটার ন্যাপ ন্যাপা ন্যাপটানো ন্যাপলা ন্যাবা ন্যাবারোগ ন্যাভাল ন্যাভিগেটর ন্যাভিগেশন ন্যালাক্ষেপা ন্যালাখেপা ন্যালাখ্যাপা ন্যালনেলে ন্যাশনাল ন্যাস ন্যাসী ন্যাসরক্ষক ন্যাড় ন্যাড়া ন্যায় ন্যায়অন্যায় ন্যায়কর্তা ন্যায়াধিকরণ ন্যায়াধীশ ন্যায়ালঙ্কার ন্যায়ালয় ন্যায়িক নুযায়ী ন্যায়চঞ্চু ন্যায়চুঞ্চু ন্যায়ত ন্যায়তীর্থ ন্যায়দণ্ড ন্যায়দর্শন ন্যায়ধর্মহীন ন্যায়নিষ্ঠ ন্যায়নিষ্ঠা ন্যায়নিষ্ঠতা ন্যায়নীতি ন্যায়পাল ন্যায়পথ ন্যায়পর ন্যায়পরায়ণ ন্যায়পরায়ণতা ন্যায়পরতা ন্যায়বাগীশ ন্যায়বাদী ন্যায়বান ন্যায়বিচার ন্যায়বিরুদ্ধ ন্যায়বত্তা ন্যায়বুদ্ধি ন্যায়মার্গ ন্যায়রত্ন ন্যায়শাস্ত্র ন্যায়শাস্ত্রপ্রণেতা ন্যায়শাস্ত্রবিদ ন্যায়সঙ্গত ন্যায়সম্মত নটি নুটি নটিংহাম নটিংহ্যাম নটিকাল নটিক্যাল নটিনী নটিয়া নটী নটচাঁদ নটীপনা নযীর নটে নটেখাড়া নটেশাক নটেশ্বর নৃযজ্ঞ ন্যুড নটতি নযদিক নযদীক নটন ন্যূন ন্যূনকল্প ন্যূনাধিক ন্যূনাধিক্য নটনারায়ণ নটনটী ন্যূনতা ন্যূনত্ব ন্যূনপক্ষে নটনড়নচড়ন ন্যুব্জ নটবর নটমল্লার নযর নটরাগ নটরাজ নযরানা নটরডেম নযরসেলামী নযুল নুযূল ন্যস্ত নঠ নঠী নঠশীল নড নুড নত নতা নৃতাত্ত্বিক নতি নতিক্রম নতিজা নতিযুক্ত নতিমান নতিস্বীকার নতীজা নতোদর নতোন্নত নতজানু নৃত্য নৃত্যকারী নৃত্যকলা নৃত্যগীত নৃত্যগীতকারিণী নৃত্যগীতাদি নৃত্যগীতাভিনয় নৃত্যগীতপটীয়সী নৃত্যগীতবাদ্য নৃত্যোৎসব নৃত্যোপযোগী নৃত্যজীবী নৃত্যধারা নৃত্যনাট্য নৃত্যপটীয়সী নৃত্যপর নৃত্যপরা নৃত্যভঙ্গি নৃত্যময়ী নৃত্যরত নৃত্যশালা নৃত্যশিল্প নৃত্যশিল্পী নৃত্যশীল নৃত্যসংবলিত নৃত্ত নত্তা নৃতত্ত্ব নৃতত্ত্ববিদ নৃতত্ত্ববিদ্যা নত্তুন নতদৃষ্টি নতুন নূতন নতুনখাতা নতনাস নতনাসিক নতনেত্র নতুনত্ব নূতনত্ব নতুনত্বপ্রাপ্ত নতুনত্বপ্রাপ্তি নতুনত্ববর্জিত নতুনত্বহীন নতুনদিল্লী নতুনভাবে নতনয়ন নতুবা নতবান নতভাব নতভাবে নতভ্রূ নতমুখ নতমুখী নতমস্তক নতশির নথ নুথা নথি নথিনিবন্ধ নথিনিষ্পত্তিপত্রী নথিপত্র নথিপ্রাপক নথিবদ্ধ নথিভুক্ত নথিভুক্তিকরণ নথিরক্ষক নথিসামিল নথী নদ নদারত নদারদ নুদি নদিত নদিন নদী নদীকান্ত নদীকূল নদীখাত নদীগামী নদীগর্ভ নদীজ নদীজাত নদীজল নদীতীর নদীতীরবর্তী নদীতট নদীতটস্থ নদীতর নদীত্রয় নদীতল নদীনালা নদীপতি নদীপথ নদীপ্রবাহ নদীপৃষ্ঠ নদীবক্ষ নদীবাহিত নদীবিধৌত নদীবেষ্টিত নদীবন্দর নদীবন্ধ নদীবরাবর নদীবহুল নদীবহুলা নদীভব নদীমুখ নদীমাতৃক নদীষ্ণ নদীসৈকত নদীস্নাত নদীসমৃদ্ধ নদীস্রোত নদীয়া নদেরচাঁদ নদ্ধ নদনদী নুদুস নধর নধরকান্তি নন নুন নুনু ননকমিশন ননান্দা ননাস ননি ননিচোরা ননিবালা নুনিয়া ননী ননীচোর ননীচোরা ননীবালা নুনে নুনেরছিটে নুনজল ননৎকার ননদ নন্দ নন্দক নন্দকুমার নন্দা ননদাই নন্দাই নন্দি নন্দিকেশ্বর নন্দিকর নন্দিত নন্দিতা নন্দিন ননদিনী নন্দিনী নন্দিবর্ধক ননদী নন্দী নন্দীভৃঙ্গী নন্দীসর নন্দ্য নন্দতত্ত্ব নন্দদুলাল নন্দন নন্দনকানন নন্দনতত্ত্ব নন্দনন্দন নন্দবংশ নন্দলাল ননন্দৃ ননন্দা নুন্নুড়ি নন্নড়িয়া নন্নড়ে ননপলিটিক্যাল নুনশোধা ননসেন্স ননস্টপ ননুয়া নৃপ নপুংসক নৃপাসন নৃপতি নৃপতিগণ নৃপবর নৃপমণি নূপুর নূপুরগুঞ্জন নূপুরধ্বনি নূপুরনিক্বণ নূপুরশিঞ্জিত নফিস নফীস নফছ নফর নফল নফস নব নবুওত নবুওয়ত নবকান্ত নবকার্তিক নবকোরক নবকুমার নবকলিকা নবকল্লোল নবগঙ্গা নবগঠিত নবগুণ নবগ্রাম নবগ্রহ নবাংশ নবাগত নবাগতা নবাঙ্কুর নবান্ন নবাব নবাবগঞ্জ নবাবি নবাবী নবাবজাদা নবাবজাদি নবাবজাদী নবাবযাদা নবাবনাজিম নবাবনাযিম নবাবপুত্তুর নবাবপুত্র নবাবপুর নবাববাহাদুর নবাবসুলভ নবার নবারুণ নবায়ন নবায়নযোগ্য নবিজি নবিজী নৃবিজ্ঞান নৃবিজ্ঞানী নৃবিদ্যা নবিশ নবিশি নবিস নবিসি নবিসিন্দা নবিসী নবী নবীকৃত নবীকরণ নবীগঞ্জ নবচ্ছিদ্র নবীজি নবীজী নবীন নবীনকুমার নবীনগর নবীনা নবীনচন্দ্র নবীনতা নবীনত্ব নবীনতম নবীভাব নবীভাবাপন্ন নবীভূত নবীভবন নবীশ নবীসিন্দা নবীয়সী নবে নবেতর নবেম্বর নৃবৈজ্ঞানিক নবোঢ়া নবোদক নবোদ্গত নবোদিত নবোদ্যম নবোদ্ভিন্ন নবোদয় নবোন্মেষ নবছিদ্র নবছর নবজাগরণ নবজাত নবজাতক নবজীবন নবজীবনপ্রাপ্ত নবজীবনলাভ নবজীবনসঞ্চার নবজন্ম নবজ্বর নবজলধর নবজলধরশ্যাম নব্য নবযুগ নব্যা নবযৌবন নবযৌবনা নবযৌবনপ্রাপ্ত নবযৌবনপ্রাপ্তা নব্যযুগ নব্যতা নব্যতন্ত্র নব্যতন্ত্রী নব্যপ্রস্তরযুগ নব্যপ্রস্তরযুগীয় নবযুবক নব্যবাস্তবতাবাদ নব্যবাস্তবতাবাদী নবযুবতী নব্যভারতীয় নব্যসম্প্রদায় নবডঙ্ক নবডঙ্কা নবডঙ্গা নবত নবতারা নবতাল নবতি নবতিতম নবতিতমী নবতন নবদিগন্ত নবদ্বার নবদ্বীপ নবদম্পতি নবধা নবধাতু নবনিযুক্ত নবনির্বাচিত নবনির্মিত নবনী নবনীত নবনীতকোমল নবনীপ নবনবতি নবপত্রিকা নবপ্রাশন নবপরিচয় নবপরিণীতা নবপ্রতিষ্ঠিত নবপ্রসূতা নবপ্রস্থান নবপল্লব নব্বই নব্বুই নববঙ্গ নববিধান নববিবাহিত নববিবাহিতা নববেশ নববধূ নববর্ষ নববসন্ত নবম নবমুকুল নবমগ্রহ নবমী নবমেঘ নবমঞ্জরি নবমবর্ষীয়া নবমল্লিকা নবরাগ নবরাত্র নবরাত্রি নবরত্ন নবরত্নসভা নবরূপ নবরূপকার নবরস নবলক্ষণ নবশাক নবশাখ নবশায়ক নবশব্দগঠন নবশশী নবহুঁ নবুয়ত নভ নভাগ নভেম্বর নভেল নভেলিয়ানা নভোখেয়াযান নভোগোলক নভোচারী নভোযান নভোথিয়েটার নভোনীল নভোবিজ্ঞান নভোমণি নভোমণ্ডল নভোরশ্মি নভপ্রাণ নভশ্চক্ষু নভশ্চর নভস্তল নভস্থ নভস্থিত নভস্থল নভস্পৃক নভস্পৃশ নভস্বান নম নমু নমঃশূদ্র নমাজ নমাজপাঠ নমিত নমিতা নমিনেশন নমুচি নমুচিসূদন নমোনমো নম্য নম্যতা নৃমণি নৃমুণ্ড নৃমুণ্ডমালিনী নমুদার নমন নমুনা নমুনাক্ষেত্র নমুনাবিন্দু নমুনারূপ নমুনাস্বরূপ নমনীয় নমনীয়া নমনীয়তা নমনশীল নমনশীলতা নম্বর নম্বরওয়ারি নম্বরি নম্বরযুক্ত নম্র নম্রা নম্রতা নম্রমুখ নম্রস্বভাব নমশূদ্র নমস্কার নমস্কারকারী নমস্কারি নমস্কার্য নমস্কৃত নমস্ক্রিয়া নমস্কর্তা নমস্য নমস্যা নমহু নমহুঁ নর নুর নূর নরঅ্যাড্রেনালিন নরওয়ে নরক নর্কু নরককুণ্ড নরকগামী নরকগতি নরকগুলজার নরকঙ্কাল নরকাগ্নি নরকেশরী নরকযন্ত্রণা নরকপাল নরকপালযুক্ত নরকপালধারী নরকবাস নরকভোগ নরকভোগী নরকস্থ নরখাদক নরখাদী নরগোষ্ঠী নরগণ নরঘাতক নরঘাতী নরঘ্ন নরা নরাধিপ নরাধম নুরানি নূরানি নরান্তক নরি নুরি নুরিয়া নরী নুরী নরেন্দ্র নরেন্দ্রনাথ নরেন্দ্রনারায়ণ নরেশ নরেশ্বর নরোত্তম নরযান নর্তক নর্তকী নর্তকশ্রেষ্ঠ নর্তিত নর্তন নর্তনপ্রিয় নর্তনশালা নরত্ব নর্থ নর্থডাকোটা নর্দামা নর্দার্ন নর্দিত নরদেব নরদেহ নরদমা নর্দমা নরুন নরনাথ নরনারায়ণ নরনারী নরুনপেড়ে নরপুঙ্গব নরপাল নরপিশাচ নরপতি নরপশু নরবলি নরভোজী নরম নর্ম নর্মকীল নর্মগর্ভ নরমগরম নরমাংস নর্মাচার নরমাদা নরমাদি নরমানো নরমাল নর্মাল নরমালা নরমালাইজেশন নরমেধ নর্মযুক্ত নরমুণ্ড নরমুণ্ডধারী নর্মদ নর্মদা নরমপন্থা নরমপন্থি নরমপন্থী নর্মসখী নর্মসঙ্গিনী নর্মসচিব নর্মসহচর নর্মসহচরী নুরমহল নররূপী নরলীলা নরলোক নরশ্রেষ্ঠ নরসিংদী নরসিংহ নরসুন্দর নরসমাজ নরসম্প্রদায় নরহত্যা নরহরি নল নলওয়ালা নলক নলকূপ নলখাগড়া নলখাড়া নলখেদা নলখড়ি নলগোলা নলা নুলা নলাকার নলাকৃতি নলি নলিকা নলিচা নলিত নলিতা নলিন নলিনাক্ষ নলিনি নলিনী নলিনীদল নলিনীরূহ নলিয়া নলী নলচালা নলচে নলেজ নলেন নলেনগুড় নলো নুলো নৃলোক নলযুক্ত নলদূর্গ নলপত নলুয়া নৃশংস নৃশংসতা নৃশংসভাবে নশ্বর নশ্বরী নশ্বরতা নষ্ট নষ্টকোষ্ঠী নষ্টা নষ্টামি নষ্টামো নষ্টচাঁদ নষ্টচেতন নষ্টচেষ্ট নষ্টচেষ্টা নষ্টচেষ্টতা নষ্টচেষ্টত্ব নষ্টচন্দ্র নষ্টচরিত্র নষ্টেরজড় নষ্টোদ্ধার নষ্টনীড় নষ্টপ্রায় নষ্টবীজ নষ্টবীর্য নষ্টবুদ্ধি নষ্টমতি নষ্টশক্তি নষ্টস্মৃতি নস নুসকা নস্কর নুসখা নৃসিংহ নৃসিংহদেব নসিব নসিহত নসীব নসীহতনামা নস্য নস্যাৎ নস্টালজিক নস্টালজিয়া নস্যি নস্ট্যালজা নস্যদানি নস্তিত নস্তোত নসব নসবনামা নসরা নসরানী নহ নহু নহুঁ নুহ নূহ নহা নহি নহিলে নহিস নহে নহেন নহবত নহবতখানা নহর নহলা নহলী নহস নড় নড়ুক নড়া নুড়া নড়াই নড়াইও নড়াইত নড়াইতাম নড়াইতিস নড়াইতে নড়াইতেছ নড়াইতেছি নড়াইতেছিল নড়াইতেছিলাম নড়াইতেছিলি নড়াইতেছিলে নড়াইতেছিলেন নড়াইতেছিস নড়াইতেছে নড়াইতেছেন নড়াইতেন নড়াইব নড়াইবার নড়াইবি নড়াইবে নড়াইবেন নড়াইল নড়াইলাম নড়াইলি নড়াইলে নড়াইলেন নড়াইয়া নড়াইয়াছ নড়াইয়াছি নড়াইয়াছিল নড়াইয়াছিলাম নড়াইয়াছিলি নড়াইয়াছিলে নড়াইয়াছিলেন নড়াইয়াছিস নড়াইয়াছে নড়াইয়াছেন নড়াইয়ো নড়াও নড়াক নড়াচ্ছ নড়াচ্ছি নড়াচ্ছিল নড়াচ্ছিলাম নড়াচ্ছিলি নড়াচ্ছিলে নড়াচ্ছিলেন নড়াচ্ছিলেম নড়াচ্ছিলুম নড়াচ্ছিস নড়াচ্ছে নড়াচ্ছেন নড়াচড়া নড়াজ নড়াত নড়াতাম নড়াতিস নড়াতে নড়াতেন নড়াতেম নড়াতুম নড়ান নড়ানো নড়ানড়ি নড়াব নড়াবার নড়াবি নড়াবে নড়াবেন নড়াবো নুড়ামুখ নড়াল নড়ালাম নড়ালি নড়ালে নড়ালেন নড়ালেম নড়ালুম নড়াস নড়ি নুড়ি নড়িত নড়িতাম নড়িতিস নড়িতে নড়িতেছ নড়িতেছি নড়িতেছিল নড়িতেছিলাম নড়িতেছিলি নড়িতেছিলে নড়িতেছিলেন নড়িতেছিস নড়িতেছে নড়িতেছেন নড়িতেন নড়িব নড়িবার নড়িবি নড়িবে নড়িবেন নড়িল নড়িলাম নড়িলি নড়িলে নড়িলেন নড়িস নড়িয়া নড়িয়াছ নড়িয়াছি নড়িয়াছিল নড়িয়াছিলাম নড়িয়াছিলি নড়িয়াছিলে নড়িয়াছিলেন নড়িয়াছিস নড়িয়াছে নড়িয়াছেন নড়িয়ে নড়িয়েছ নড়িয়েছি নড়িয়েছিল নড়িয়েছিলাম নড়িয়েছিলি নড়িয়েছিলে নড়িয়েছিলেন নড়িয়েছিলেম নড়িয়েছিলুম নড়িয়েছিস নড়িয়েছে নড়িয়েছেন নড়িয়ো নড়ী নড়চড় নড়ে নড়েচড়ে নড়েছ নড়েছি নড়েছিল নড়েছিলাম নড়েছিলি নড়েছিলে নড়েছিলেন নড়েছিলেম নড়েছিলুম নড়েছিস নড়েছে নড়েছেন নড়েন নড়েভোলা নড়ো নুড়ো নুড়োমুখ নড়ছ নড়ছি নড়ছিল নড়ছিলাম নড়ছিলি নড়ছিলে নড়ছিলেন নড়ছিলেম নড়ছিলুম নড়ছিস নড়ছে নড়ছেন নড়ত নড়তাম নড়তিস নড়তে নড়তেন নড়তেম নড়তুম নড়ন নড়ুন নড়নচড়ন নড়নচড়নরহিত নড়নচড়নহীন নড়নড় নুড়নুড়ি নড়নড়ে নড়ব নড়বার নড়বি নড়বে নড়বেন নড়বো নড়বড় নড়বড়ে নড়বড়েভাবে নড়ল নড়লাম নড়লি নড়লে নড়লেন নড়লেম নড়লুম নয় নয়কো নয়া নুয়া নয়াআবাদি নয়াদিল্লী নয়ান নয়ানী নুয়ানো নয়ানজুলি নয়ানজুলী নয়াপল্টন নয়াবাজার নয়াবাড়ি নয়াবস্তি নয়ালি নয়াসংবাদ নুয়ে নয়েক নুয়েছ নুয়েছি নুয়েছিল নুয়েছিলাম নুয়েছিলি নুয়েছিলে নুয়েছিলেন নুয়েছিলেম নুয়েছিলুম নুয়েছিস নুয়েছে নুয়েছেন নয়েজ নুয়েন নয়ছয় নয়জ্ঞ নয়জ্ঞান নয়জন নয়ত নয়তো নয়দা নয়দিন নয়দুয়ারি নয়ন নয়নকূল নয়নগোচর নয়না নয়নানন্দ নয়নাভিরাম নয়নার নয়নাসার নয়নী নয়নচকোর নয়নচাঁদ নয়নোৎসব নয়নোপান্ত নয়নজল নয়নজুলি নয়নযুগল নয়নঠার নয়নতারা নয়ননীর নয়নবাণ নয়নবুদ্বুদ নয়নমোহন নয়নমণি নয়নরঞ্জন নয়নলোভন নয়নশোভন নয়নশ্যামা নয়নসুক নয়নসুখ নয়পাল নয়প্রকার নয়প্রবীণ নয়বার নয়বিৎ নয়বিদ নয়বিশারদ নয়বর্ত্ম নয়ভাগ নয়ল নয়লি নয়লী".split(" "),
              w_nga: "ঙ ঙ্কিত ঙ্কন ঙ্করী ঙ্গ ঙাপ্পি".split(" "),
              w_nya: ["ঞ"],
              w_nn: "ণ ণই ণকার ণকাররূপিণী ণাম্বা ণাল ণালিক ণিচ ণিজন্ত ণিজন্তধাতু ণিজন্তপ্রকরণ ণী ণেহ ণত্ব ণত্ববিধান ণত্ববিধি".split(" "),
              w_p: "প পুং পুংকেশর পুংকেশরচক্র পংখী পুংচিহ্ন পুংজাতীয় পুংলিঙ্গ পুংশ্চলী পুংস্কোকিল পুংস্ত্ব পুংসন্তান পুংসবন পঅ পুই পুঁই পইচা পইছা পঁইছা পঁইছি পঁইছন পইঠা পঁইঠা পুঁইডাঁটা পইতা পইতান পইতে পঁইত্রিশ পইথান পইপই পুইশাক পুঁইশাক পইস পইসই পইড়া পুঁইয়া পুইয়ে পুঁইয়ে পুইয়েছ পুইয়েছি পুইয়েছিল পুইয়েছিলাম পুইয়েছিলি পুইয়েছিলে পুইয়েছিলেন পুইয়েছিলেম পুইয়েছিলুম পুইয়েছিস পুইয়েছে পুইয়েছেন পুইয়ো পউখ পঁউছি পউষ পএ পুওর পওল পক পৃক্কা পুকার পকেট পকেটঘড়ি পকেটযুক্ত পকেটমার পকেটমারা পকেটস্থ পকেটহীন পৃক্ত পৃক্তি পৃক্ততা পকপক পক্ব পক্বকেশ পক্বান্ন পক্বাশয় পক্বত পক্বতা পুকুর পুকুরচুরি পুকুরপাড় পক্ষ পক্ষকাল পক্ষগ্রহণ পক্ষাঘাত পক্ষাঘাতগ্রস্ত পক্ষাঘাতসহ পক্ষাধিক পক্ষান্ত পক্ষান্তর পক্ষাপক্ষ পক্ষাবলম্বী পক্ষাবলম্বন পক্ষিণী পক্ষিরাজ পক্ষী পক্ষচ্ছেদ পক্ষীরাজ পক্ষীশাবক পক্ষীশালা পক্ষীসমাজ পক্ষীয় পক্ষোদগম পক্ষোদ্ভেদ পক্ষজ পক্ষযুক্ত পক্ষদেশ পক্ষদ্বয় পক্ষধর পক্ষপাত পক্ষপাতিতা পক্ষপাতিত্ব পক্ষপাতী পক্ষপাতদুষ্ট পক্ষপাতশূন্য পক্ষপাতহীন পক্ষপুট পক্ষবাচক পক্ষব্যাপী পক্ষবল পক্ষভুক্ত পক্ষ্ম পক্ষ্মযুক্ত পক্ষ্মল পক্ষল পক্ষসঞ্চালন পক্ষসমর্থন পক্ষসমর্থনকারী পক্স পখান পখালন পখাড়ন পুখরী পূগ পগার পগারপার পূগফল পঙ্ক পঙ্কিল পঙ্কিলতা পঙ্কোদ্ধার পঙ্কজ পঙ্কজা পঙ্কজিনী পঙক্তি পঙ্করূহ পুঙ্খ পুঙ্খানুপুঙ্খ পুঙ্খানুপুঙ্খতা পুঙ্খানুপুঙ্খভাবে পুঙ্খানুপুঙ্খরূপে পঙ্খি পঙ্খী পঙ্গু পুঙ্গ পুঙ্গি পঙ্গুত্ব পঙ্গপাল পুঙ্গব পঙার পা পাংক্তেয় পাংচুয়েশন পাংশু পাংশুটে পাংশন পাংশুবর্ণ পাংশুমুখ পাংশুল পাংশুলা পাংসন পাঅ পাই পাঁই পাইক পাইকগাছা পাইকা পাইকার পাইকারি পাইকস্ত পাইকস্তা পাইকস্তাপ্রজা পাইকড় পাইখানা পাইছি পাইছে পাইছো পাঁইজ পাঁইজোর পাইট পাঁইট পাইড পাইত পাইতুঁ পাইতাম পাঁইতারা পাইতিস পাইতে পাইতেছ পাইতেছি পাইতেছিল পাইতেছিলাম পাইতেছিলি পাইতেছিলে পাইতেছিলেন পাইতেছিস পাইতেছে পাইতেছেন পাইতেন পাইথন পাইন পাইনা পাইনি পাইনে পাইপ পাইপগান পাইপাই পাইপলাইন পাইব পাইবা পাইবার পাইবি পাইবে পাইবেন পাইরিমিডিন পাইরেট পাইরেসি পাইরোমিটার পাইল পাইলা পাইলাম পাইলি পাইলে পাইলেন পাইলোরি পাইলট পাইহিসাব পাইড়া পাইয়া পাইয়াছ পাইয়াছি পাইয়াছিল পাইয়াছিলাম পাইয়াছিলি পাইয়াছিলে পাইয়াছিলেন পাইয়াছিস পাইয়াছে পাইয়াছেন পাইয়ে পাইয়েছ পাইয়েছি পাইয়েছিল পাইয়েছিলাম পাইয়েছিলি পাইয়েছিলে পাইয়েছিলেন পাইয়েছিলেম পাইয়েছিলুম পাইয়েছিস পাইয়েছে পাইয়েছেন পাউ পাউডার পাউন্ড পাউন্ডশিলিং পাউরুটি পাউড়ি পাউড়ী পাও পাওন পাওনা পাওনাআদায় পাওনাকড়ি পাওনাগণ্ডা পাওনাথোওনা পাওনাদার পাওনি পাওয়া পাওয়াই পাওয়াইও পাওয়াইত পাওয়াইতাম পাওয়াইতিস পাওয়াইতে পাওয়াইতেছ পাওয়াইতেছি পাওয়াইতেছিল পাওয়াইতেছিলাম পাওয়াইতেছিলি পাওয়াইতেছিলে পাওয়াইতেছিলেন পাওয়াইতেছিস পাওয়াইতেছে পাওয়াইতেছেন পাওয়াইতেন পাওয়াইপাওয়ার পাওয়াইব পাওয়াইবার পাওয়াইবি পাওয়াইবে পাওয়াইবেন পাওয়াইল পাওয়াইলাম পাওয়াইলি পাওয়াইলে পাওয়াইলেন পাওয়াইয়া পাওয়াইয়াছ পাওয়াইয়াছি পাওয়াইয়াছিল পাওয়াইয়াছিলাম পাওয়াইয়াছিলি পাওয়াইয়াছিলে পাওয়াইয়াছিলেন পাওয়াইয়াছিস পাওয়াইয়াছে পাওয়াইয়াছেন পাওয়াইয়ো পাওয়াও পাওয়াক পাওয়াকে পাওয়াচ্ছ পাওয়াচ্ছি পাওয়াচ্ছিল পাওয়াচ্ছিলাম পাওয়াচ্ছিলি পাওয়াচ্ছিলে পাওয়াচ্ছিলেন পাওয়াচ্ছিলেম পাওয়াচ্ছিলুম পাওয়াচ্ছিস পাওয়াচ্ছে পাওয়াচ্ছেন পাওয়াত পাওয়াতাম পাওয়াতিস পাওয়াতে পাওয়াতেন পাওয়াতেম পাওয়াতুম পাওয়ান পাওয়ানো পাওয়াব পাওয়াবার পাওয়াবি পাওয়াবে পাওয়াবেন পাওয়াবো পাওয়ার পাওয়াল পাওয়ালা পাওয়ালাম পাওয়ালি পাওয়ালে পাওয়ালেন পাওয়ালেম পাওয়ালুম পাওয়াস পাওয়ে পাক পাঁক পাঁকই পাঁকুই পাকুক পাক্কা পাকঘর পাকা পাকাআম পাকাই পাকাইও পাকাইত পাকাইতাম পাকাইতিস পাকাইতে পাকাইতেছ পাকাইতেছি পাকাইতেছিল পাকাইতেছিলাম পাকাইতেছিলি পাকাইতেছিলে পাকাইতেছিলেন পাকাইতেছিস পাকাইতেছে পাকাইতেছেন পাকাইতেন পাকাইব পাকাইবার পাকাইবি পাকাইবে পাকাইবেন পাকাইল পাকাইলাম পাকাইলি পাকাইলে পাকাইলেন পাকাইয়া পাকাইয়াছ পাকাইয়াছি পাকাইয়াছিল পাকাইয়াছিলাম পাকাইয়াছিলি পাকাইয়াছিলে পাকাইয়াছিলেন পাকাইয়াছিস পাকাইয়াছে পাকাইয়াছেন পাকাইয়ো পাকাক পাকাকাজ পাকাকথা পাকাঘুঁটি পাকাচামড়া পাকাচোর পাকাচ্ছ পাকাচ্ছি পাকাচ্ছিল পাকাচ্ছিলাম পাকাচ্ছিলি পাকাচ্ছিলে পাকাচ্ছিলেন পাকাচ্ছিলেম পাকাচ্ছিলুম পাকাচ্ছিস পাকাচ্ছে পাকাচ্ছেন পাকাচুল পাকাচুলওয়ালা পাকাটি পাঁকাটি পাকাটে পাকাত পাকাতাম পাকাতিস পাকাতে পাকাতেন পাকাতেম পাকাতুম পাকাদেখা পাকাধান পাকান পাকানো পাকাপাকি পাকাপাকিভাবে পাকাপোক্ত পাকাফল পাকাব পাকাবার পাকাবাড়ি পাকাবি পাকাবে পাকাবেন পাকাবো পাকাবুড়ি পাকাবয়স পাকামাথা পাকামি পাকামো পাকাল পাঁকাল পাকালাম পাকালি পাকালে পাকালেখা পাকালেন পাকালেম পাকালুম পাঁকালমাছ পাকাশয় পাকাশয়িক পাকাস পাকাসোনা পাকাহাত পাকি পাকিও পাকিত পাকিতাম পাকিতিস পাকিতে পাকিতেছ পাকিতেছি পাকিতেছিল পাকিতেছিলাম পাকিতেছিলি পাকিতেছিলে পাকিতেছিলেন পাকিতেছিস পাকিতেছে পাকিতেছেন পাকিতেন পাকিব পাকিবার পাকিবি পাকিবে পাকিবেন পাকিমালা পাকির পাকিল পাকিলাম পাকিলি পাকিলে পাকিলেন পাকিস পাকিস্তান পাকিস্তানি পাকিস্তানী পাকিস্তানপন্থী পাকিস্তানবাসী পাকিস্তানবিরোধী পাকিয়া পাকিয়াছ পাকিয়াছি পাকিয়াছিল পাকিয়াছিলাম পাকিয়াছিলি পাকিয়াছিলে পাকিয়াছিলেন পাকিয়াছিস পাকিয়াছে পাকিয়াছেন পাকিয়ে পাকিয়েছ পাকিয়েছি পাকিয়েছিল পাকিয়েছিলাম পাকিয়েছিলি পাকিয়েছিলে পাকিয়েছিলেন পাকিয়েছিলেম পাকিয়েছিলুম পাকিয়েছিস পাকিয়েছে পাকিয়েছেন পাকিয়ো পাকী পাকচক্র পাকে পাঁকে পাকেচক্রে পাকেন পাকেনি পাকেপ্রকারে পাকো পাকোড়া পাকোয়ান পাকছ পাকছি পাকছিল পাকছিলাম পাকছিলি পাকছিলে পাকছিলেন পাকছিলেম পাকছিলুম পাকছিস পাকছে পাকছেন পাঁকযুক্ত পাকযজ্ঞ পাকযন্ত্র পাকত পাকতাম পাকতিস পাকতে পাকতেন পাকতেম পাকতুম পাকদণ্ডি পাকদণ্ডী পাকন পাকুন পাকনালী পাকনাড়া পাকপাঞ্জতন পাকপাত্র পাকপ্রণালী পাকব পাকবার পাকবাহিনী পাকবি পাকবে পাকবেন পাকবো পাকবর্বরতা পাকমিলিটারি পাকমণ্ড পাকল পাকলা পাকলাই পাকলাইও পাকলাইত পাকলাইতাম পাকলাইতিস পাকলাইতে পাকলাইতেছ পাকলাইতেছি পাকলাইতেছিল পাকলাইতেছিলাম পাকলাইতেছিলি পাকলাইতেছিলে পাকলাইতেছিলেন পাকলাইতেছিস পাকলাইতেছে পাকলাইতেছেন পাকলাইতেন পাকলাইব পাকলাইবার পাকলাইবি পাকলাইবে পাকলাইবেন পাকলাইল পাকলাইলাম পাকলাইলি পাকলাইলে পাকলাইলেন পাকলাইয়া পাকলাইয়াছ পাকলাইয়াছি পাকলাইয়াছিল পাকলাইয়াছিলাম পাকলাইয়াছিলি পাকলাইয়াছিলে পাকলাইয়াছিলেন পাকলাইয়াছিস পাকলাইয়াছে পাকলাইয়াছেন পাকলাইয়ো পাকলাক পাকলাচ্ছ পাকলাচ্ছি পাকলাচ্ছিল পাকলাচ্ছিলাম পাকলাচ্ছিলি পাকলাচ্ছিলে পাকলাচ্ছিলেন পাকলাচ্ছিলেম পাকলাচ্ছিলুম পাকলাচ্ছিস পাকলাচ্ছে পাকলাচ্ছেন পাকলাত পাকলাতাম পাকলাতিস পাকলাতে পাকলাতেন পাকলাতেম পাকলাতুম পাকলান পাকলানো পাকলাব পাকলাবার পাকলাবি পাকলাবে পাকলাবেন পাকলাবো পাকলাম পাকলাল পাকলালাম পাকলালি পাকলালে পাকলালেন পাকলালেম পাকলালুম পাকলাস পাকলি পাকলে পাকলেছ পাকলেছি পাকলেছিল পাকলেছিলাম পাকলেছিলি পাকলেছিলে পাকলেছিলেন পাকলেছিলেম পাকলেছিলুম পাকলেছিস পাকলেছে পাকলেছেন পাকলেন পাকলেম পাকলো পাকলুম পাকশালা পাকশাসন পাক্ষিক পাকসাট পাকসাফ পাকসেনা পাকস্থালী পাকস্থলী পাকস্পর্শ পাকড় পাকুড় পাকড়া পাকড়াতা পাকড়ান পাকড়ানো পাকড়ো পাখ পাখা পাখাযুক্ত পাখাদুটো পাখালা পাখি পাখিজগত পাখিডাকা পাখিরগান পাখিরডাক পাখিশিকারি পাখিসম পাখী পাখোয়াজ পাখোয়াজি পাখোয়াজবাদক পাখনা পাখনাযুক্ত পাখপাখালি পাখম পাখরিয়া পাখলা পাখলান পাখলানো পাখলে পাখসাট পাখড় পাগ পাগাল পাগাড়ি পাগর পাগল পাগলা পাগলাগারদ পাগলাঘণ্টি পাগলাঝোরা পাগলাটে পাগলাবাবা পাগলামি পাগলামো পাগলি পাগলিনী পাগলী পাগুলো পাগলছাগল পাগলঝোরা পাগলপারা পাগলপন্থী পাগলপ্রায় পাগড়ি পাগড়ী পাঙ্ক পাঙ্কু পাঙ্খা পাঙ্গাশ পাঙাশ পাঁচ পাঁচআঙুল পাঁচই পাঁচুই পাচক পাচকগ্রন্থি পাঁচকান পাঁচকথা পাচকব্রাহ্মণ পাচকরস পাঁচখানা পাঁচগাছি পাঁচগজি পাঁচগুণ পাচাটা পাঁচানি পাঁচাপাঁচি পাচার পাচারকারী পাঁচালি পাঁচালী পাচিকা পাচিত পাচিল পাঁচিল পাঁচচুলা পাঁচচুলো পাঁচেক পাচ্ছ পাচ্ছি পাচ্ছিনা পাচ্ছিল পাচ্ছিলাম পাচ্ছিলি পাচ্ছিলে পাচ্ছিলেন পাচ্ছিলেম পাচ্ছিলো পাচ্ছিলুম পাচ্ছিস পাচ্ছে পাচ্ছেন পাচ্ছেনা পাঁচজন পাচট পাচ্য পাঁচট পাঁচটা পাচুটি পাঁচটি পাঁচুটি পাঁচতালা পাচতি পাচতী পাঁচতলা পাঁচদিন পাচধড় পাচন পাঁচন পাচনকারী পাচনি পাঁচনি পাচনযন্ত্র পাচনতন্ত্র পাচনবাড়ি পাঁচনবাড়ি পাঁচনরি পাঁচপাঁচি পাঁচপাড়া পাঁচপীর পাঁচপ্রকার পাঁচফোড়ন পাঁচবার পাঁচবিবি পাঁচবছর পাঁচভাগ পাঁচভাবে পাঁচমাথা পাঁচমিশালি পাঁচমিশালী পাঁচমিশেলি পাঁচমিশুলি পাঁচরকম পাচলা পাঁচশ পাঁচশালা পাঁচশো পাঁচশত পাঁচসাত পাঁচহাতি পাঁচহাতী পাঁচড়া পাছ পাছু পাছুআন পাছা পাছাগলুই পাছানা পাছানো পাছাপেড়ে পাছাড় পাছাড়ি পাছে পাছুটান পাছদুয়ার পাছপেড়ে পাছড়া পাছড়াই পাছড়াইও পাছড়াইত পাছড়াইতাম পাছড়াইতিস পাছড়াইতে পাছড়াইতেছ পাছড়াইতেছি পাছড়াইতেছিল পাছড়াইতেছিলাম পাছড়াইতেছিলি পাছড়াইতেছিলে পাছড়াইতেছিলেন পাছড়াইতেছিস পাছড়াইতেছে পাছড়াইতেছেন পাছড়াইতেন পাছড়াইব পাছড়াইবার পাছড়াইবি পাছড়াইবে পাছড়াইবেন পাছড়াইল পাছড়াইলাম পাছড়াইলি পাছড়াইলে পাছড়াইলেন পাছড়াইয়া পাছড়াইয়াছ পাছড়াইয়াছি পাছড়াইয়াছিল পাছড়াইয়াছিলাম পাছড়াইয়াছিলি পাছড়াইয়াছিলে পাছড়াইয়াছিলেন পাছড়াইয়াছিস পাছড়াইয়াছে পাছড়াইয়াছেন পাছড়াইয়ো পাছড়াক পাছড়াচ্ছ পাছড়াচ্ছি পাছড়াচ্ছিল পাছড়াচ্ছিলাম পাছড়াচ্ছিলি পাছড়াচ্ছিলে পাছড়াচ্ছিলেন পাছড়াচ্ছিলেম পাছড়াচ্ছিলুম পাছড়াচ্ছিস পাছড়াচ্ছে পাছড়াচ্ছেন পাছড়াত পাছড়াতাম পাছড়াতিস পাছড়াতে পাছড়াতেন পাছড়াতেম পাছড়াতুম পাছড়ান পাছড়ানো পাছড়াব পাছড়াবার পাছড়াবি পাছড়াবে পাছড়াবেন পাছড়াবো পাছড়াল পাছড়ালাম পাছড়ালি পাছড়ালে পাছড়ালেন পাছড়ালেম পাছড়ালুম পাছড়াস পাছুড়ি পাছুড়ী পাছড়ে পাছড়েছ পাছড়েছি পাছড়েছিল পাছড়েছিলাম পাছড়েছিলি পাছড়েছিলে পাছড়েছিলেন পাছড়েছিলেম পাছড়েছিলুম পাছড়েছিস পাছড়েছে পাছড়েছেন পাছড়ো পাছুয়ান পাঁজ পাঁজা পাঁজাকোলা পাজামা পাজি পাঁজি পাঁজিপুঁথি পাজী পাঁজীপুঁথি পাজেব পাঁজর পাঁজরা পাঝাড়া পাঞ্চ পাঞ্চকার্ড পাঞ্চাল পাঞ্চালী পাঞ্চেন পাঞ্চজন্য পাঞ্চতত্ত্ব পাঞ্চবার্ষিক পাঞ্চভৌতিক পাঞ্জা পাঞ্জাকষা পাঞ্জাব পাঞ্জাবি পাঞ্জাবী পাঞ্জেগানা পাঞ্জেরি পাঞ্জেরী পাঞ্জতন পাঞ্জর পাট পাঁট পাটআইন পাটক পাটকাঠি পাটকিল পাটকিলে পাটকেল পাযুক্ত পাটকল পাটক্ষেত পাটখড়ি পাটগাছ পাটা পাঁটা পাটাতন পাটাবাড়ি পাটারি পাটালি পাটালিগুড় পাটালী পাটালীগুড় পাটি পাটিগণিত পাটিপত্র পাটিসাপটা পাটী পাটীগণিত পাটচাষ পাটেশ্বরী পাটোল পাটোয়ার পাটোয়ারি পাটোয়ারী পাটজাত পাট্টা পাট্টাদার পাটতন্তু পাটন পাটনা পাটনি পাটুনী পাটনেত পাটব পাটবিক পাটবস্ত্র পাটভাঙা পাটরানি পাটরানী পাটল পাটলা পাটলি পাটলিপুত্র পাটলী পাটশাক পাটুয়া পাঠ পাঠক পাঠকক্ষ পাঠকারী পাঠকাল পাঠকালীন পাঠকপ্রিয় পাঠকপ্রিয়তা পাঠকবর্গ পাঠকমণ্ডলী পাঠক্রম পাঠকসমাজ পাঠগ্রহণ পাঠগৃহ পাঠা পাঁঠা পাঠাই পাঠাইও পাঠাইছে পাঠাইছেন পাঠাইত পাঠাইতাম পাঠাইতিস পাঠাইতে পাঠাইতেছ পাঠাইতেছি পাঠাইতেছিল পাঠাইতেছিলাম পাঠাইতেছিলি পাঠাইতেছিলে পাঠাইতেছিলেন পাঠাইতেছিস পাঠাইতেছে পাঠাইতেছেন পাঠাইতেন পাঠাইব পাঠাইবার পাঠাইবি পাঠাইবে পাঠাইবেন পাঠাইল পাঠাইলাম পাঠাইলি পাঠাইলে পাঠাইলেন পাঠাইয়া পাঠাইয়াছ পাঠাইয়াছি পাঠাইয়াছিল পাঠাইয়াছিলাম পাঠাইয়াছিলি পাঠাইয়াছিলে পাঠাইয়াছিলেন পাঠাইয়াছিস পাঠাইয়াছে পাঠাইয়াছেন পাঠাইয়ো পাঠাক পাঠাগার পাঠাচ্ছ পাঠাচ্ছি পাঠাচ্ছিল পাঠাচ্ছিলাম পাঠাচ্ছিলি পাঠাচ্ছিলে পাঠাচ্ছিলেন পাঠাচ্ছিলেম পাঠাচ্ছিলুম পাঠাচ্ছিস পাঠাচ্ছে পাঠাচ্ছেন পাঠাত পাঠাতাম পাঠাতিস পাঠাতে পাঠাতেন পাঠাতেম পাঠাতো পাঠাতুম পাঠান পাঠানো পাঠান্তর পাঠানুরাগী পাঠাব পাঠাবার পাঠাবি পাঠাবে পাঠাবেন পাঠাবো পাঁঠাবলি পাঠাভ্যাস পাঠার্থিনী পাঠার্থী পাঠাল পাঠালাম পাঠালি পাঠালে পাঠালেন পাঠালেম পাঠালুম পাঠাস পাঠায়ে পাঠায়েছ পাঠি পাঁঠি পাঠিকা পাঠিনী পাঠিয়ে পাঠিয়েছ পাঠিয়েছি পাঠিয়েছিল পাঠিয়েছিলাম পাঠিয়েছিলি পাঠিয়েছিলে পাঠিয়েছিলেন পাঠিয়েছিলেম পাঠিয়েছিলো পাঠিয়েছিলুম পাঠিয়েছিস পাঠিয়েছে পাঠিয়েছেন পাঠিয়ো পাঠী পাঁঠী পাঠচক্র পাঠচর্চা পাঠোদ্ধার পাঠ্য পাঠ্যক্রম পাঠ্যক্রমানুসারে পাঠ্যাবস্থা পাঠ্যতালিকা পাঠ্যপুস্তক পাঠ্যপুস্তকরূপ পাঠ্যবই পাঠ্যবিষয় পাঠ্যসূচি পাঠ্যসূচী পাঠ্যস্তব পাঠতালিকা পাঠদান পাঠন পাঠনা পাঠনিবিষ্ট পাঠপূর্বক পাঠবিভ্রম পাঠভবন পাঠভ্রান্তি পাঠমধ্য পাঠমন্দির পাঠরত পাঠশালা পাণ পাণি পাণিগ্রহ পাণিগ্রহণ পাণিনি পাণিনিসূত্র পাণিনীয় পাণিপীড়ন পাণিপ্রার্থী পাণিবদ্ধ পাণ্ডু পাণ্ডা পাণ্ডাল পাণ্ডিত্য পাণ্ডিত্যপূর্ণ পাণ্ডিত্যহীন পাণ্ডে পাণ্ড্য পাণ্ডুপুত্র পাণ্ডব পাণ্ডবগণ পাণ্ডবীয় পাণ্ডবেয় পাণ্ডববর্জিত পাণ্ডবরা পাণ্ডুবর্ণ পাণ্ডবসখ পাণ্ডবসখা পাণ্ডুর পাণ্ডুরং পাণ্ডুরোগ পাণ্ডুরতা পাণ্ডুলিপি পাণ্ডুলেখ পাণ্ডুলেখ্য পাত পাতক পাতুক পাতকিনী পাতকী পাতক্ষীর পাতকুড়ানি পাতকুড়ুনি পাতকুয়া পাতকুয়ো পাতখোল পাতখোলা পাতগালা পাতা পাতাই পাতাইও পাতাইত পাতাইতাম পাতাইতিস পাতাইতে পাতাইতেছ পাতাইতেছি পাতাইতেছিল পাতাইতেছিলাম পাতাইতেছিলি পাতাইতেছিলে পাতাইতেছিলেন পাতাইতেছিস পাতাইতেছে পাতাইতেছেন পাতাইতেন পাতাইব পাতাইবার পাতাইবি পাতাইবে পাতাইবেন পাতাইল পাতাইলাম পাতাইলি পাতাইলে পাতাইলেন পাতাইয়া পাতাইয়াছ পাতাইয়াছি পাতাইয়াছিল পাতাইয়াছিলাম পাতাইয়াছিলি পাতাইয়াছিলে পাতাইয়াছিলেন পাতাইয়াছিস পাতাইয়াছে পাতাইয়াছেন পাতাইয়ো পাতাওয়ালা পাতাকুড়ানি পাতাকুড়ুনি পাতাচ্ছ পাতাচ্ছি পাতাচ্ছিল পাতাচ্ছিলাম পাতাচ্ছিলি পাতাচ্ছিলে পাতাচ্ছিলেন পাতাচ্ছিলেম পাতাচ্ছিলুম পাতাচ্ছিস পাতাচ্ছে পাতাচ্ছেন পাতাযুক্ত পাতাত পাতাতাম পাতাতিস পাতাতে পাতাতেন পাতাতেম পাতাতুম পাতাদই পাতান পাতানো পাতাপিছু পাতাপ্রধান পাতাব পাতাবার পাতাবাহার পাতাবি পাতাবে পাতাবেন পাতাবো পাতাল পাতালকন্যা পাতালগাঁও পাতালঘর পাতালাম পাতালি পাতালে পাতালেন পাতালেম পাতালট্রেন পাতালপুরী পাতালুম পাতালরাণী পাতালরেল পাতালস্থিত পাতাসি পাতাহীন পাতি পাঁতি পাতিকাক পাতিত পাতিতাম পাতিতিস পাতিতে পাতিতেছ পাতিতেছি পাতিতেছিল পাতিতেছিলাম পাতিতেছিলি পাতিতেছিলে পাতিতেছিলেন পাতিতেছিস পাতিতেছে পাতিতেছেন পাতিতেন পাতিত্য পাতিনেবু পাতিপাতি পাতিব পাতিবার পাতিবি পাতিবে পাতিবেন পাতিবুর্জোয়া পাতিব্রত্য পাতিরাজা পাতিল পাতিলা পাতিলাম পাতিলি পাতিলে পাতিলেন পাতিলেবু পাতিশিয়াল পাতিস পাতিহাঁস পাতিয়া পাতিয়াছ পাতিয়াছি পাতিয়াছিল পাতিয়াছিলাম পাতিয়াছিলি পাতিয়াছিলে পাতিয়াছিলেন পাতিয়াছিস পাতিয়াছে পাতিয়াছেন পাতিয়ান পাতিয়ায়ব পাতিয়ে পাতিয়েছ পাতিয়েছি পাতিয়েছিল পাতিয়েছিলাম পাতিয়েছিলি পাতিয়েছিলে পাতিয়েছিলেন পাতিয়েছিলেম পাতিয়েছিলুম পাতিয়েছিস পাতিয়েছে পাতিয়েছেন পাতিয়ো পাতী পাতচাটা পাতেন পাতেপাতে পাঁতেপাঁতে পাতছ পাতছি পাতছিল পাতছিলাম পাতছিলি পাতছিলে পাতছিলেন পাতছিলেম পাতছিলুম পাতছিস পাতছে পাতছেন পাতঞ্জল পাতঞ্জলদর্শন পাত্যারা পাত্যায়া পাত্যমান পাতত পাত্তা পাত্তাই পাততাম পাততাড়ি পাত্তাড়ি পাত্তি পাততিস পাততে পাততেন পাততেম পাততেড়ে পাততুম পাতন পাতুন পাতনযন্ত্র পাতব পাতবার পাতবি পাতবে পাতবেন পাতবো পাতুর পাত্র পাঁতর পাত্রাদি পাত্রাপাত্র পাত্রিক পাত্রী পাত্রীপক্ষ পাত্রপক্ষ পাত্রপক্ষীয় পাত্রপাত্রী পাত্রমিত্র পাত্রস্থ পাত্রস্থিত পাতল পাতলা পাতলাগা পাতলাম পাতলি পাতলী পাতলে পাতলেন পাতলেম পাতলো পাতলুন পাতলুম পাতশা পাতশাহ পাতশাহি পাতসি পাতড়া পাথার পাথারদি পাথালি পাথালিকোলা পাথি পাথী পাথেয় পাথফাইন্ডার পাথর পাঁথর পাথরকুচি পাথরঘাটা পাথরা পাথরি পাথুরি পাথুরিরোগ পাথরিয়া পাথুরিয়া পাথরচাপা পাথরচাপরি পাথরচুন পাথুরেচুন পাথরবাটি পাথরস্তম্ভ পাদ পাদক পাদুকা পাদগ্রহণ পাদা পাদান পাদানি পাদাড় পাঁদাড় পাদি পাদচার পাদচারী পাদচারণ পাদচারণা পাদচ্ছেদ পাদোদক পাদোন পাদ্য পাদ্যঅর্ঘ্য পাদযুক্ত পাদটীকা পাদত্রাণ পাদতল পাদদেশ পাদদেশস্থ পাদপ পাদপীঠ পাদপূজা পাদপদ্ম পাদপ্রক্ষালন পাদপূরণ পাদপ্রদীপ পাদপ্রহার পাদবিক পাদবিক্ষেপ পাদমূল পাদরি পাদ্রি পাদ্রী পাদলেহন পাদশাখা পাদশাহ পাদশাহি পাদশৈল পাদসেবন পাধোয়া পাধুতে পান পানই পানক পানকারী পানকোটি পানকৌড় পানকৌড়ি পানকৃত পানকরা পানগাছিয়া পানগোষ্ঠিকা পানগোষ্ঠী পানা পানাই পানাগার পানাতি পানানো পানাপুকুর পানামা পানামাসিটি পানার্থক পানাসক্ত পানাসক্তি পানাহ পানাহার পানি পানিকচু পানিগলা পানিঘোলা পানিজমা পানিঢালা পানিপাত পানিপথ পানিপ্রবাহ পানিফল পানিবিদ্যুৎ পানিবিহীন পানিবদ্ধতা পানিবসন্ত পানিভাঙ্গা পানিভাঙা পানিরছিটা পানিরছিটে পানিশূন্য পানিশূন্যতা পানিশমেন্ট পানিসমৃদ্ধ পানিসম্পদ পানিসরবরাহ পানীয় পানীয়জল পানেচুন পানেরগোছ পানেরডিবা পানেরবরজ পানছেঁচা পানজা পানযোগ্য পান্তা পান্তাবাতাস পান্তাভাত পানতামাক পানতি পান্তি পান্তী পানতোয়া পানতুয়া পান্তুয়া পান্থ পান্থনিবাস পান্থপাদপ পান্থপথ পান্থশালা পানদোষ পান্না পান্নালাল পাননি পানপাতা পানপাত্র পানফল পানব্যবসা পানব্যবসায়ী পানবসন্ত পানভোজন পানমরা পানশালা পানশৌণ্ড পানস পানসাজা পানসি পান্সি পানসী পান্সী পানসে পানসেচোখ পানসেমাল পাপ পাপকাজ পাপকারী পাপকার্য পাপকৃৎ পাপকর্ম পাপক্ষালন পাপক্ষালনকারী পাপক্ষয় পাপগ্রহ পাপঘ্ন পাপা পাপাচার পাপাচারী পাপাচরণ পাপাত্মা পাপিনী পাপিষ্ঠ পাপিষ্ঠা পাপিয়া পাপী পাপচারী পাপচিন্তা পাপীতাপী পাপীয়সী পাপেট পাপেটস পাপোশ পাপোষ পাপজনক পাপটাপ পাপযোগ পাপতাপ পাপদৃষ্টি পাপনাশক পাপনাশকারী পাপপুণ্য পাপবিদ্ধ পাপবিমোচন পাপবোধ পাপবুদ্ধি পাপভাক পাপভাগী পাপমোচন পাপমতি পাপর পাঁপর পাপর্যন্ত পাঁপরভাজা পাপশূন্য পাপহীন পাপহর পাঁপড় পাপড়ি পাপড়িযুক্ত পাপুয়া পাপুয়ানিউগিনি পাফোলা পাব পাবক পাবাঁধা পাবার পাবাড়ানো পাবি পাবে পাবেন পাবেনা পাবেনাকো পাবো পাবতা পাবদা পাবদামাছ পাবন পাবনা পাবনি পাবনী পাবন্দ পাবলিক পাবলিকেশন পাবলিকেশন্স পাবলিশ পাবলিশার পাবলিশার্স পাবলিশিং পাবলিসিটি পাম পামুক পাম্প পাম্পযন্ত্র পাম্পশু পামর পামরি পামরী পামসু পার পারক পারুক পার্ক পার্কার পারক্য পারকরা পারকরণ পারকর্তা পারক্সিজোম পারগ পার্গু পারগামী পারগত পারগমন পারঘাট পারঘাটা পারঙ্গম পারঙ্গমতা পারঙ্গমতাবোধ পারা পারাই পারাইও পারাইত পারাইতাম পারাইতিস পারাইতে পারাইতেছ পারাইতেছি পারাইতেছিল পারাইতেছিলাম পারাইতেছিলি পারাইতেছিলে পারাইতেছিলেন পারাইতেছিস পারাইতেছে পারাইতেছেন পারাইতেন পারাইব পারাইবার পারাইবি পারাইবে পারাইবেন পারাইল পারাইলাম পারাইলি পারাইলে পারাইলেন পারাইয়া পারাইয়াছ পারাইয়াছি পারাইয়াছিল পারাইয়াছিলাম পারাইয়াছিলি পারাইয়াছিলে পারাইয়াছিলেন পারাইয়াছিস পারাইয়াছে পারাইয়াছেন পারাইয়ো পারাক পারাচ্ছ পারাচ্ছি পারাচ্ছিল পারাচ্ছিলাম পারাচ্ছিলি পারাচ্ছিলে পারাচ্ছিলেন পারাচ্ছিলেম পারাচ্ছিলুম পারাচ্ছিস পারাচ্ছে পারাচ্ছেন পারাত পারাতাম পারাতিস পারাতে পারাতেন পারাতেম পারাতুম পারান পারানি পারানো পারাপার পারাব পারাবার পারাবি পারাবে পারাবেন পারাবো পারাবত পারাবতী পারাল পারালাম পারালি পারালে পারালেন পারালেম পারালুম পারাশর পারাস পারায়ণ পারি পারিওনা পারিজাত পারিজাতগদ্য পারিত পারিতাম পারিতিস পারিতে পারিতেছ পারিতেছি পারিতেছিল পারিতেছিলাম পারিতেছিলি পারিতেছিলে পারিতেছিলেন পারিতেছিস পারিতেছে পারিতেছেন পারিতেন পারিতোষিক পারিতোষিকরূপ পারিনা পারিনি পারিন্দ্র পারিপাট্য পারিপাট্যসাধন পারিপাট্যহীন পারিপার্শ্বিক পারিপার্শ্বিকতা পারিব পারিবার পারিবারিক পারিবি পারিবে পারিবেন পারিব্রজ্য পারিভাষিক পারিল পারিলাম পারিলি পারিলে পারিলেন পারিশ্রমিক পারিশ্রমিকস্বরূপ পারিষদ পারিস পারিয়া পারিয়াছ পারিয়াছি পারিয়াছিল পারিয়াছিলাম পারিয়াছিলি পারিয়াছিলে পারিয়াছিলেন পারিয়াছিস পারিয়াছে পারিয়াছেন পারিয়ে পারিয়েছ পারিয়েছি পারিয়েছিল পারিয়েছিলাম পারিয়েছিলি পারিয়েছিলে পারিয়েছিলেন পারিয়েছিলেম পারিয়েছিলুম পারিয়েছিস পারিয়েছে পারিয়েছেন পারিয়ো পারী পারচেজ পারচেজিং পার্চ্ছাভোগ পারীণ পারীন্দ্র পারে পারেন পারেনা পারেনি পারেননা পারেননি পারেশান পারো পারছ পারছি পারছিনা পারছিল পারছিলাম পারছিলামনা পারছিলি পারছিলে পারছিলেন পারছিলেননা পারছিলেম পারছিলো পারছিলনা পারছিলুম পারছিস পারছে পারছেন পারছেনা পার্ট পার্টি পার্টিশন পার্টিশনকরণ পার্টিশনযুক্ত পার্টিস পার্টী পারটেক্স পার্টটাইম পার্টনার পার্টনারশিপ পার্যমাণে পার্টস পারটুসিস পারণ পারণা পারত পারতাম পারতিস পারতে পারতেছি পারতেছিনা পারতেছেন পারতেন পারতেম পারতো পারতোনা পারতন্ত্র্য পারতপক্ষে পারতুম পারত্রিক পার্থ পার্থক্য পার্থক্যকারী পার্থক্যজ্ঞাপক পার্থক্যযুক্ত পার্থিব পার্থসারথি পারদ পারদঘটিত পারদারিক পারদার্য পারদেশ্য পারদযুক্ত পারদর্শিতা পারদর্শিনী পারদর্শী পারুন পার্পল পারফিউম পারফেক্ট পারফেকশন পারফর্ম পারফর্মার পারফর্মিং পারফরমেন্স পারফর্মেন্স পারব পারবা পারবার পারবি পারবিন পারবে পারবেন পারবেনা পারবেননা পারবো পারবোনা পার্বণ পার্বণী পার্বত পার্বতী পার্বতীপুর পার্বত্য পার্বত্যচট্টগ্রাম পার্বত্যপ্রবাহ পার্বত্যভূমি পারবনা পারবশ্য পারভিন পারুম পারমাণব পারমাণবিক পারমাণবিকভর পার্মানেন্ট পারমানবিক পারমার্থিক পারমিট পারমিশন পারম্পর্য পাররে পারল পারুল পার্ল পারলাম পার্লামেন্ট পার্লামেন্টারি পার্লার পারলি পারলে পারলেন পারলেননা পারলেম পারলো পারলৌকিক পারলুম পারশ পার্শি পারশিক পারশী পারশীক পারশে পার্শে পারশ্য পার্শ্ব পার্শ্বকর্ণ পার্শ্বাস্থি পার্শ্বচর পার্শ্বচরিত্র পার্শ্বচরিত্রকার পার্শ্বচরী পার্শ্বীয় পার্শ্বদেশ পার্শ্বদৃশ্য পার্শ্বনাথ পার্শ্বপরিবর্তন পার্শ্বপ্রতিক্রিয়া পার্শ্বব পার্শ্ববর্তিনী পার্শ্ববর্তী পার্শ্বভাগ পার্শ্বরেখা পার্শ্বশাখা পার্শ্বস্থ পার্শ্বস্থা পার্শ্বস্থিত পারুষ্য পার্ষ্ণি পার্ষদ পার্স পারসি পার্সি পারসিক পার্সিয়া পারসিয়ান পার্সিয়ান পার্সেল পারসোনাল পার্সোনাল পারসোনালকম্পিউটার পারসোনালিটি পারস্য পারস্যদেশ পারস্যদেশীয় পারস্যদেশজাত পারস্যরাজ পাল পালং পালংপোষ পালংশাক পালই পালুই পালওয়ান পালক পালকি পাল্কি পালকিবাহক পালকী পাল্কী পালকযুক্ত পালকযুক্তা পালকপিতা পালকপুত্র পালঙ পালঙ্ক পালঙ্কপোশ পালঙ্কপোষ পালঙ্গ পালঙ্গপোষ পালঙপোষ পালঙশাক পালা পালাই পালাইও পালাইত পালাইতাম পালাইতিস পালাইতে পালাইতেছ পালাইতেছি পালাইতেছিল পালাইতেছিলাম পালাইতেছিলি পালাইতেছিলে পালাইতেছিলেন পালাইতেছিস পালাইতেছে পালাইতেছেন পালাইতেন পালাইপালাই পালাইব পালাইবার পালাইবি পালাইবে পালাইবেন পালাইল পালাইলাম পালাইলি পালাইলে পালাইলেন পালাইয়া পালাইয়াছ পালাইয়াছি পালাইয়াছিল পালাইয়াছিলাম পালাইয়াছিলি পালাইয়াছিলে পালাইয়াছিলেন পালাইয়াছিস পালাইয়াছে পালাইয়াছেন পালাইয়ো পালাক পালাকীর্তন পালাক্রম পালাগান পালাচ্ছ পালাচ্ছি পালাচ্ছিল পালাচ্ছিলাম পালাচ্ছিলি পালাচ্ছিলে পালাচ্ছিলেন পালাচ্ছিলেম পালাচ্ছিলুম পালাচ্ছিস পালাচ্ছে পালাচ্ছেন পালাজ্বর পালাত পালাতাম পালাতিস পালাতে পালাতেন পালাতেম পালাতুম পালান পালানে পালানো পালাপার্বণ পালাব পালাবার পালাবি পালাবে পালাবেন পালাবো পালাবদল পালাল পালালাম পালালি পালালে পালালেন পালালেম পালালুম পালাস পালায়া পালি পালিকা পালিছ পালিত পালিতকরণ পালিতা পালিত্য পালিনী পালিপার্বণ পালিশ পালিশকরা পালিশযুক্ত পালিশপাথর পালিয়ে পালিয়েছ পালিয়েছি পালিয়েছিল পালিয়েছিলাম পালিয়েছিলি পালিয়েছিলে পালিয়েছিলেন পালিয়েছিলেম পালিয়েছিলুম পালিয়েছিস পালিয়েছে পালিয়েছেন পালিয়ো পালী পালে পালেপালে পালো পালোয়ান পালট পাল্য পালযুক্ত পালযুগ পালটা পাল্টা পালটাই পালটাইও পালটাইত পালটাইতাম পালটাইতিস পালটাইতে পালটাইতেছ পালটাইতেছি পালটাইতেছিল পালটাইতেছিলাম পালটাইতেছিলি পালটাইতেছিলে পালটাইতেছিলেন পালটাইতেছিস পালটাইতেছে পালটাইতেছেন পালটাইতেন পালটাইব পালটাইবার পালটাইবি পালটাইবে পালটাইবেন পালটাইল পালটাইলাম পালটাইলি পালটাইলে পালটাইলেন পালটাইয়া পালটাইয়াছ পালটাইয়াছি পালটাইয়াছিল পালটাইয়াছিলাম পালটাইয়াছিলি পালটাইয়াছিলে পালটাইয়াছিলেন পালটাইয়াছিস পালটাইয়াছে পালটাইয়াছেন পালটাইয়ো পালটাক পালটাচ্ছ পালটাচ্ছি পালটাচ্ছিল পালটাচ্ছিলাম পালটাচ্ছিলি পালটাচ্ছিলে পালটাচ্ছিলেন পালটাচ্ছিলেম পালটাচ্ছিলুম পালটাচ্ছিস পালটাচ্ছে পাল্টাচ্ছে পালটাচ্ছেন পালটাত পালটাতাম পালটাতিস পালটাতে পাল্টাতে পালটাতেন পালটাতেম পালটাতুম পালটান পাল্টান পালটানো পাল্টানো পালটাপালটি পাল্টাপাল্টি পালটাব পালটাবার পালটাবি পালটাবে পালটাবেন পালটাবো পালটাল পালটালাম পালটালি পালটালে পালটালেন পালটালেম পালটালুম পালটাস পালটি পালটিঘর পালটিয়া পালটী পালটে পাল্টে পালটেছ পালটেছি পাল্টেছি পালটেছিল পালটেছিলাম পালটেছিলি পালটেছিলে পালটেছিলেন পালটেছিলেম পালটেছিলুম পালটেছিস পালটেছে পাল্টেছে পালটেছেন পালটো পালতোলা পালন পালনকারিণী পালনকারী পালনকাল পালনকেন্দ্র পালনকর্তা পালনীয় পালনযোগ্য পালপার্বণ পালবংশ পালবাহী পালম পালমশাক পালরাজ পাল্লা পাল্লাযুক্ত পাললিক পালয়িতা পালয়িত্রী পাশ পাঁশ পাশক পাশকক্রীড়া পাশক্রীড়া পাঁশকুঁড় পাঁশকুড়ো পাঁশগাদা পাশা পাশাখেলা পাশানো পাশাপাশি পাশাল পাশালি পাশী পাশ্চাত্য পাশ্চাত্যরীতি পাশ্চাত্ত্য পাশে পাশেপাশে পাঁশুটে পাশদিয়ে পাশুনি পাশুপত পাশব পাশবালিশ পাশবিক পাশবিকক্রিয়া পাশবিককর্ম পাশবিকতা পাশবতা পাশবদ্ধ পাশমুক্তি পাশর পাশরা পাশরণ পাশরন পাশুলি পাশুলী পাষাণ পাষাণী পাষাণনির্মিত পাষাণভার পাষাণভেদী পাষাণমূর্তি পাষাণশয্যা পাষাণহৃদয় পাষণ্ড পাষণ্ডী পাস পাসওয়ার্ড পাসকোর্স পাসানো পাস্তুরিত পাসপোর্ট পাসরা পাসরিল পাসরে পাসরণ পাসরন পাহার পাহারা পাহারাওলা পাহারাওয়ালা পাহারাদার পাহারাদারি পাহারাধীন পাহারারত পাহাড় পাহাড়ি পাহাড়িয়া পাহাড়চূড়া পাহাড়তলি পাহাড়পুর পাহাড়শ্রেণী পাহন পাহুন পাহলবি পাহলবী পাহলভি পাড় পাঁড় পাড়ওয়ালা পাড়ুক পাড়া পাড়াকুঁদলি পাড়াকুঁদুলি পাড়াগাঁ পাড়াগাঁয়ে পাড়াগেঁয়ে পাড়াছাড়া পাড়ান পাড়ানি পাড়ানিয়া পাড়ানী পাড়ানো পাড়াপড়শি পাড়াবেড়ানি পাড়ামাথায় পাড়ি পাড়িত পাড়িতাম পাড়িতিস পাড়িতে পাড়িতেছ পাড়িতেছি পাড়িতেছিল পাড়িতেছিলাম পাড়িতেছিলি পাড়িতেছিলে পাড়িতেছিলেন পাড়িতেছিস পাড়িতেছে পাড়িতেছেন পাড়িতেন পাড়িব পাড়িবার পাড়িবি পাড়িবে পাড়িবেন পাড়িল পাড়িলাম পাড়িলি পাড়িলে পাড়িলেন পাড়িস পাড়িয়া পাড়িয়াছ পাড়িয়াছি পাড়িয়াছিল পাড়িয়াছিলাম পাড়িয়াছিলি পাড়িয়াছিলে পাড়িয়াছিলেন পাড়িয়াছিস পাড়িয়াছে পাড়িয়াছেন পাড়িয়ে পাড়িয়ো পাড়ে পাঁড়ে পাঁড়েজি পাড়েন পাড়ছ পাড়ছি পাড়ছিল পাড়ছিলাম পাড়ছিলি পাড়ছিলে পাড়ছিলেন পাড়ছিলেম পাড়ছিলুম পাড়ছিস পাড়ছে পাড়ছেন পাড়যুক্ত পাড়ত পাড়তাম পাড়তিস পাড়তে পাড়তেন পাড়তেম পাড়তুম পাড়ুন পাড়ব পাড়বার পাড়বি পাড়বিহীন পাড়বে পাড়বেন পাড়বো পাঁড়মাতাল পাড়ল পাড়লাম পাড়লি পাড়লে পাড়লেন পাড়লেম পাড়লুম পাড়হীন পায় পায়ু পায়ই পায়ুকাম পায়খানা পায়গা পায়া পায়াওয়ালা পায়াযুক্ত পায়াভারী পায়ী পায়চারি পায়চারী পায়ে পায়েচেপে পায়েচলা পায়ের পায়েরগিরা পায়েরগেরো পায়েরাখা পায়েরছাপ পায়েরডিম পায়েরপাতা পায়েস পায়জামা পাঁয়জোর পায়যার পায়তারা পাঁয়তারা পায়দল পায়না পায়নি পায়পায় পায়ুপথ পায়ব পায়বার পায়মান পায়মাল পায়ুর পায়রা পায়রাগাছা পায়রাবন্দ পায়রি পায়রবি পায়রবী পায়স পায়সান্ন পি পিঁ পিং পিংক পিআল পিউ পিউকাঁহা পিউপিউ পিউপিল পিউবিক পিউর পিউরিটান পিউরিট্যানিক পিউরিন পিউরিফিকেশন পিউলি পিউলী পিউড়ি পিওন পিওনো পিওর পিক পিকাসো পিকিউলিয়ার পিকচার পিকেটার পিকেটিং পিকদান পিকদানি পিকনিক পিকলো পিগমি পিঙ্ক পিঙ্গ পিঙ্গাক্ষ পিঙ্গাভ পিঙ্গাশ পিঙ্গল পিঙ্গলা পিঙ্গলাভ পিঙ্গলবর্ণ পিঙল পিচ পিচকারি পিচকারী পিচকিরি পিচাশ পিচিণ্ডিল পিচ্ছ পিচ্ছা পিচ্ছিকা পিচ্ছিল পিচ্ছিলা পিচ্ছিলতা পিচ্ছল পিচুটি পিঁচুটি পিচণ্ডিল পিচণ্ডচিণ্ড পিচদান পিচদানি পিচপা পিচবোর্ড পিচুল পিছ পিছু পিছক পিছা পিছাই পিছাইও পিছাইত পিছাইতাম পিছাইতিস পিছাইতে পিছাইতেছ পিছাইতেছি পিছাইতেছিল পিছাইতেছিলাম পিছাইতেছিলি পিছাইতেছিলে পিছাইতেছিলেন পিছাইতেছিস পিছাইতেছে পিছাইতেছেন পিছাইতেন পিছাইব পিছাইবার পিছাইবি পিছাইবে পিছাইবেন পিছাইল পিছাইলাম পিছাইলি পিছাইলে পিছাইলেন পিছাইয়া পিছাইয়াছ পিছাইয়াছি পিছাইয়াছিল পিছাইয়াছিলাম পিছাইয়াছিলি পিছাইয়াছিলে পিছাইয়াছিলেন পিছাইয়াছিস পিছাইয়াছে পিছাইয়াছেন পিছাইয়ো পিছাক পিছাতে পিছান পিছানো পিছাস পিছাড়ি পিছি পিছিলা পিছিস পিছিয়ে পিছিয়েছ পিছিয়েছি পিছিয়েছিল পিছিয়েছিলাম পিছিয়েছিলি পিছিয়েছিলে পিছিয়েছিলেন পিছিয়েছিলেম পিছিয়েছিলুম পিছিয়েছিস পিছিয়েছে পিছিয়েছেন পিছিয়ো পিছচ্ছ পিছচ্ছি পিছচ্ছিল পিছচ্ছিলাম পিছচ্ছিলি পিছচ্ছিলে পিছচ্ছিলেন পিছচ্ছিলেম পিছচ্ছিলুম পিছচ্ছিস পিছচ্ছে পিছচ্ছেন পিছে পিছেন পিছটান পিছুটান পিছত পিছতাম পিছতিস পিছতে পিছতেন পিছতেম পিছতুম পিছন পিছুনেওয়া পিছনো পিছনটান পিছনদিক পিছপা পিছুপা পিছুপিছু পিছব পিছবার পিছবি পিছবে পিছবেন পিছবো পিছমোড়া পিছুমোড়া পিছল পিছলক পিছলা পিছলাই পিছলাইও পিছলাইত পিছলাইতাম পিছলাইতিস পিছলাইতে পিছলাইতেছ পিছলাইতেছি পিছলাইতেছিলাম পিছলাইতেছিলি পিছলাইতেছিলে পিছলাইতেছিলেন পিছলাইতেছিস পিছলাইতেছে পিছলাইতেছেন পিছলাইতেন পিছলাইব পিছলাইবার পিছলাইবি পিছলাইবে পিছলাইবেন পিছলাইল পিছলাইলাম পিছলাইলি পিছলাইলে পিছলাইলেন পিছলাইয়া পিছলাইয়াছ পিছলাইয়াছি পিছলাইয়াছিল পিছলাইয়াছিলাম পিছলাইয়াছিলি পিছলাইয়াছিলে পিছলাইয়াছিলেন পিছলাইয়াছিস পিছলাইয়াছে পিছলাইয়াছেন পিছলাইয়ো পিছলাক পিছুলাগা পিছলান পিছলানো পিছলাম পিছলাস পিছলি পিছলী পিছলচ্ছ পিছলচ্ছি পিছলচ্ছিল পিছলচ্ছিলাম পিছলচ্ছিলি পিছলচ্ছিলে পিছলচ্ছিলেন পিছলচ্ছিলেম পিছলচ্ছিলুম পিছলচ্ছিস পিছলচ্ছে পিছলচ্ছেন পিছলে পিছলেছ পিছলেছি পিছলেছিল পিছলেছিলাম পিছলেছিলি পিছলেছিলে পিছলেছিলেন পিছলেছিলেম পিছলেছিলুম পিছলেছিস পিছলেছে পিছলেছেন পিছলেন পিছলেম পিছলো পিছলোবার পিছলত পিছলতাম পিছলতিস পিছলতে পিছলতেন পিছলতেম পিছলতুম পিছলন পিছলব পিছলবি পিছলবে পিছলবেন পিছলবো পিছলুম পিছলল পিছললাম পিছললি পিছললে পিছললেন পিছললেম পিছললুম পিছলস পিছস পিছয় পিজা পিঁজা পিঁজান পিঁজানো পিঁজে পিজবোর্ড পিঁজরা পিঁজরাপোল পিঁজরে পিঞ্জিরা পিঞ্জিরাবদ্ধ পিঞ্জন পিঞ্জর পিঞ্জরাস্থি পিঞ্জরমুক্ত পিঞ্জল পিট পিটুইটারি পিটুক পিটকয়লা পিটা পিটাই পিটাইও পিটাইত পিটাইতাম পিটাইতিস পিটাইতে পিটাইতেছ পিটাইতেছি পিটাইতেছিল পিটাইতেছিলাম পিটাইতেছিলি পিটাইতেছিলে পিটাইতেছিলেন পিটাইতেছিস পিটাইতেছে পিটাইতেছেন পিটাইতেন পিটাইব পিটাইবার পিটাইবি পিটাইবে পিটাইবেন পিটাইল পিটাইলাম পিটাইলি পিটাইলে পিটাইলেন পিটাইয়া পিটাইয়াছ পিটাইয়াছি পিটাইয়াছিল পিটাইয়াছিলাম পিটাইয়াছিলি পিটাইয়াছিলে পিটাইয়াছিলেন পিটাইয়াছিস পিটাইয়াছে পিটাইয়াছেন পিটাইয়ো পিটাক পিটান পিটানি পিটানো পিটারি পিটারী পিটালি পিটি পিটিত পিটিতাম পিটিতিস পিটিতে পিটিতেছ পিটিতেছি পিটিতেছিল পিটিতেছিলাম পিটিতেছিলি পিটিতেছিলে পিটিতেছিলেন পিটিতেছিস পিটিতেছে পিটিতেছেন পিটিতেন পিটিব পিটিবার পিটিবি পিটিবে পিটিবেন পিটিল পিটিলাম পিটিলি পিটিলে পিটিলেন পিটিশন পিটিস পিটিয়া পিটিয়াছ পিটিয়াছি পিটিয়াছিল পিটিয়াছিলাম পিটিয়াছিলি পিটিয়াছিলে পিটিয়াছিলেন পিটিয়াছিস পিটিয়াছে পিটিয়াছেন পিটিয়ে পিটিয়েছ পিটিয়েছি পিটিয়েছিল পিটিয়েছিলাম পিটিয়েছিলি পিটিয়েছিলে পিটিয়েছিলেন পিটিয়েছিলেম পিটিয়েছিলুম পিটিয়েছিস পিটিয়েছে পিটিয়েছেন পিটিয়ো পিটচ্ছ পিটচ্ছি পিটচ্ছিল পিটচ্ছিলাম পিটচ্ছিলি পিটচ্ছিলে পিটচ্ছিলেন পিটচ্ছিলেম পিটচ্ছিলুম পিটচ্ছিস পিটচ্ছে পিটচ্ছেন পিটে পিটেছ পিটেছি পিটেছিল পিটেছিলাম পিটেছিলি পিটেছিলে পিটেছিলেন পিটেছিলেম পিটেছিলুম পিটেছিস পিটেছে পিটেছেন পিটেন পিটো পিটছ পিটছি পিটছিল পিটছিলাম পিটছিলি পিটছিলে পিটছিলেন পিটছিলেম পিটছিলুম পিটছিস পিটছে পিটছেন পিটটান পিট্টান পিটত পিটতাম পিটতিস পিটতে পিটতেন পিটতেম পিটতুম পিটন পিটুন পিটনা পিটনি পিটুনি পিটনো পিটপিট পিটপিটা পিটপিটানো পিটব পিটবার পিটবি পিটবে পিটবেন পিটবো পিটল পিটলাম পিটলি পিটুলি পিটলে পিটলেন পিটলেম পিটলুম পিটস পিঠ পিঠা পিঠাপিঠি পিঠারি পিঠালি পিঠি পিঠী পিঠে পিঠেপুলি পিঠোপিঠি পিঠটান পিঠদাঁড়া পিঠপাতা পিঠবাঁকা পিঠমোড়া পিঠর পিঠুলি পিণ্ড পিণ্ডখর্জূর পিণ্ডাকার পিণ্ডাকৃতি পিণ্ডাদি পিণ্ডাধিকার পিণ্ডাধিকারী পিণ্ডারি পিণ্ডি পিণ্ডিকা পিণ্ডিত পিণ্ডী পিণ্ডীভূত পিণ্ডজল পিণ্ডদ পিণ্ডদান পিণ্ডদানকারী পিণ্ডরি পিণ্ডলোপ পিতৃ পিতুঃষ্বসা পিতুঃস্বসা পিতৃকার্য পিতৃকৃত্য পিতৃক্রিয়া পিতৃকুল পিতৃকল্প পিতৃগণ পিতৃগৃহ পিতৃঘাতী পিতা পিতাঠাকুর পিতাপুত্র পিতামাতা পিতামহ পিতামহী পিতামহতুল্য পিতিঠা পিতৃযান পিত্যেশ পিত্যেস পিতৃযজ্ঞ পিত্ত পিত্তকোষ পিত্তকোষজাত পিত্তকফ পিত্তাতিসার পিতৃতান্ত্রিক পিত্তাবধি পিত্তারি পিত্তাশয় পিত্তাশয়বর্ধক পিত্তি পিত্তিনাশ পিত্তিরক্ষা পিত্তজ্বর পিত্তদোষ পিত্তনালী পিত্তনাশক পিত্তনিঃসারক পিত্তপড়া পিতৃত্ব পিত্তবিকার পিত্তরক্ষা পিতৃতর্পণ পিত্তরস পিতৃতুল্য পিত্তস্থলী পিতৃদায় পিতৃদেব পিতৃদত্ত পিতৃপক্ষ পিতৃপ্রদত্ত পিতৃপুরুষ পিতৃবংশ পিতৃবিয়োগ পিতৃব্য পিতৃবৎ পিতৃভক্ত পিতৃভক্তি পিতৃভাষা পিতৃভূমি পিতৃমেধ পিত্রালয় পিতৃরিষ্টি পিত্র্য পিতৃরূপ পিতল পিতৃলোক পিতৃলোকবাসী পিতলঝাল পিতৃশাসিত পিতৃশোক পিতৃশ্রাদ্ধ পিতৃষ্বসা পিতৃসেবা পিতৃসত্য পিতৃস্থানীয় পিতৃসন্নিধান পিতৃসম পিতৃহা পিতৃহারা পিতৃহীন পিতৃহত্যা পিতৃহন্তা পিতৃহন্ত্রী পিথাগোরাস পিথিবি পিদিম পিঁধা পিধান পিঁধন পিন পিনগালা পিনাক পিনাকিনী পিনাকী পিনাকপাণি পিনাল পিনাস পিনিস পিনেস পিনদ্ধ পিন্ধা পিন্ধাওল পিন্ধন পিন্ধনবাস পিনপতন পিনহ পিপা পিপাসা পিপাসাযুক্ত পিপাসিত পিপাসিতা পিপাসিনী পিপাসী পিঁপিঁ পিপীলিকা পিপীলিকাভুক পিঁপীড়া পিপে পিপ্পল পিপ্পলি পিপ্পলী পিপুফিশু পিপুল পিঁপুল পিপলস পিপড়া পিঁপড়া পিঁপড়ে পিবইতে পিবি পিব্যাসী পিভট পির পিরান পিরামিড পিরালি পিরালী পিরিচ পিরিত পিরিতি পিরিয়ড পিরীত পিরীতি পিরোজপুর পিররূপ পিরহান পিল পিলু পিলখানা পিলা পিলার পিলি পিলে পিলপা পিল্পা পিলপিল পিলপে পিল্পে পিলুরাগ পিলসুজ পিলড়ি পিশু পিশঙ্গ পিশাচ পিশাচী পিশাচীমূর্তি পিশাচযোনি পিশাচসিদ্ধ পিশাচসুলভ পিশিত পিশুন পিষ পিষক পিষুক পিষা পিষাই পিষাইও পিষাইত পিষাইতাম পিষাইতিস পিষাইতে পিষাইতেছ পিষাইতেছি পিষাইতেছিল পিষাইতেছিলাম পিষাইতেছিলি পিষাইতেছিলে পিষাইতেছিলেন পিষাইতেছিস পিষাইতেছে পিষাইতেছেন পিষাইতেন পিষাইব পিষাইবার পিষাইবি পিষাইবে পিষাইবেন পিষাইল পিষাইলাম পিষাইলি পিষাইলে পিষাইলেন পিষাইয়া পিষাইয়াছ পিষাইয়াছি পিষাইয়াছিল পিষাইয়াছিলাম পিষাইয়াছিলি পিষাইয়াছিলে পিষাইয়াছিলেন পিষাইয়াছিস পিষাইয়াছে পিষাইয়াছেন পিষাইয়ো পিষাক পিষাস পিষি পিষিত পিষিতাম পিষিতিস পিষিতে পিষিতেছ পিষিতেছি পিষিতেছিল পিষিতেছিলাম পিষিতেছিলি পিষিতেছিলে পিষিতেছিলেন পিষিতেছিস পিষিতেছে পিষিতেছেন পিষিতেন পিষিব পিষিবার পিষিবি পিষিবে পিষিবেন পিষিল পিষিলাম পিষিলি পিষিলে পিষিলেন পিষিস পিষিয়া পিষিয়াছ পিষিয়াছি পিষিয়াছিল পিষিয়াছিলাম পিষিয়াছিলি পিষিয়াছিলে পিষিয়াছিলেন পিষিয়াছিস পিষিয়াছে পিষিয়াছেন পিষিয়ে পিষিয়েছ পিষিয়েছি পিষিয়েছিল পিষিয়েছিলাম পিষিয়েছিলি পিষিয়েছিলে পিষিয়েছিলেন পিষিয়েছিলেম পিষিয়েছিলুম পিষিয়েছিস পিষিয়েছে পিষিয়েছেন পিষিয়ো পিষচ্ছ পিষচ্ছি পিষচ্ছিল পিষচ্ছিলাম পিষচ্ছিলি পিষচ্ছিলে পিষচ্ছিলেন পিষচ্ছিলেম পিষচ্ছিলুম পিষচ্ছিস পিষচ্ছে পিষচ্ছেন পিষে পিষেছ পিষেছি পিষেছিল পিষেছিলাম পিষেছিলি পিষেছিলে পিষেছিলেন পিষেছিলেম পিষেছিলুম পিষেছিস পিষেছে পিষেছেন পিষেন পিষো পিষছ পিষছি পিষছিল পিষছিলাম পিষছিলি পিষছিলে পিষছিলেন পিষছিলেম পিষছিলুম পিষছিস পিষছে পিষছেন পিষ্ট পিষ্টক পিষ্টকরণ পিষণ পিষণো পিষত পিষতাম পিষতিস পিষতে পিষতেন পিষতেম পিষতুম পিষব পিষবার পিষবি পিষবে পিষবেন পিষবো পিষল পিষলাম পিষলি পিষলে পিষলেন পিষলেম পিষলুম পিষস পিস পিসু পিসা পিসি পিসিমা পিসী পিসে পিসেমশায় পিস্টন পিসতুত পিসতুতা পিসতুতো পিস্তল পিস্তলবাজ পিসবোর্ড পিসশাশুড়ি পিসশ্বশুর পিহিত পিড়া পিঁড়া পিড়াপিড়ি পিড়াপীড়ি পিড়ালি পিড়ি পিঁড়ি পিড়িং পিড়িংপিড়িং পিড়ে পিঁড়ে পিঁঢ়ি পিয়া পিয়াইয়া পিয়াজ পিয়াজু পিঁয়াজ পিঁয়াজু পিয়াজকলি পিঁয়াজকলি পিয়াজি পিঁয়াজি পিয়াদা পিয়ান পিয়ানো পিয়ানোবাদক পিয়ার পিয়ারা পিয়ারী পিয়াল পিয়ালা পিয়াস পিয়াসু পিয়াসা পিয়াসি পিয়াসী পিয়ে পিয়েরকুরি পিয়ন পিয়নগিরি পিয়নি পিয়লি পচ পচুক পুচকে পুঁচকে পচা পচাই পচাইও পচাইত পচাইতাম পচাইতিস পচাইতে পচাইতেছ পচাইতেছি পচাইতেছিল পচাইতেছিলাম পচাইতেছিলি পচাইতেছিলে পচাইতেছিলেন পচাইতেছিস পচাইতেছে পচাইতেছেন পচাইতেন পচাইব পচাইবার পচাইবি পচাইবে পচাইবেন পচাইল পচাইলাম পচাইলি পচাইলে পচাইলেন পচাইয়া পচাইয়াছ পচাইয়াছি পচাইয়াছিল পচাইয়াছিলাম পচাইয়াছিলি পচাইয়াছিলে পচাইয়াছিলেন পচাইয়াছিস পচাইয়াছে পচাইয়াছেন পচাইয়ো পচাক পচাগরম পচাগলা পচাচ্ছ পচাচ্ছি পচাচ্ছিল পচাচ্ছিলাম পচাচ্ছিলি পচাচ্ছিলে পচাচ্ছিলেন পচাচ্ছিলেম পচাচ্ছিলুম পচাচ্ছিস পচাচ্ছে পচাচ্ছেন পচাত পচাতাম পচাতিস পচাতে পচাতেন পচাতেম পঁচাত্তর পচাতুম পচাধরা পচান পচানি পচানো পঁচানব্বই পঁচানব্বুই পচাব পচাবার পচাবি পচাবে পচাবেন পচাবো পচাল পচালাম পচালি পচালে পচালেন পচালেম পচালুম পঁচাশি পঁচাশী পচাস পচি পচিত পচিতাম পচিতিস পচিতে পচিতেছ পচিতেছি পচিতেছিল পচিতেছিলাম পচিতেছিলি পচিতেছিলে পচিতেছিলেন পচিতেছিস পচিতেছে পচিতেছেন পচিতেন পচিব পচিবার পচিবি পচিবে পচিবেন পচিল পচিলাম পচিলি পচিলে পচিলেন পঁচিশ পঁচিশজন পচিস পচিয়া পচিয়াছ পচিয়াছি পচিয়াছিল পচিয়াছিলাম পচিয়াছিলি পচিয়াছিলে পচিয়াছিলেন পচিয়াছিস পচিয়াছে পচিয়াছেন পচিয়ে পচিয়েছ পচিয়েছি পচিয়েছিল পচিয়েছিলাম পচিয়েছিলি পচিয়েছিলে পচিয়েছিলেন পচিয়েছিলেম পচিয়েছিলুম পচিয়েছিস পচিয়েছে পচিয়েছেন পচিয়ো পীচ পচ্চিম পচে পচেছ পচেছি পচেছিল পচেছিলাম পচেছিলি পচেছিলে পচেছিলেন পচেছিলেম পচেছিলুম পচেছিস পচেছে পচেছেন পচেন পচেনি পচো পুচ্ছ পুচ্ছকেশ পৃচ্ছা পচছি পুচ্ছিঅ পচছিল পচছিলাম পচছিলি পচছিলে পচছিলেন পচছিলেম পচছিলুম পচছিস পচছে পচছেন পুচ্ছযুক্ত পুচ্ছপাখনা পুচ্ছহীন পচ্য পীযুষ পীযূষ পীঠ পীঠিকা পীঠস্থান পীড্যমান পচত পচতাম পীতাম্বর পচতিস পীতচন্দন পচতে পচতেন পচতেম পীতজ্বর পীতধড়া পীতপাণ্ডু পীতবাস পীতবর্ণ পীতবর্ণযুক্ত পীতবস্ত্র পীতবস্ত্রধারী পচতুম পীতর পীতল পীতলোহিত পীতসবুজ পীধন পচন পচুন পীনালকোড পীনিস পীনোন্নত পচনধরা পচননিবারক পচনরোধক পচনশীল পীনস পীনস্তনী পচপচ পচপচে পচব পচবার পচবি পচবে পচবেন পচবো পীবর পীবরা পীবরী পীর পীরগাছা পীরালী পীরিত পীরিতি পীরেরশিন্নি পীরোত্তর পীরপরস্তি পীরপয়গম্বর পচল পীলু পীলখানা পীলা পচলাম পচলি পীলিহা পচলে পচলেন পচলেম পীলুপর্ণী পচলুম পীলসুজ পীলুড়ি পীড়ক পীড়া পীড়াগ্রস্ত পীড়াজনক পীড়াদায়ক পীড়াদি পীড়াপীড়ি পীড়িকা পীড়িত পীড়িয়া পীড়ন পীড়নকারী পীড়নপূর্ণ পীয়ার পীয়নু পীয়ল পেইজ পেইন পেইন্ট পেইন্টার পেইন্টার্স পেইন্টিং পেইনফুল পেকাটি পেঁকাটি পেকাম্বর পেকে পেকেছ পেকেছি পেকেছিল পেকেছিলাম পেকেছিলি পেকেছিলে পেকেছিলেন পেকেছিলেম পেকেছিলুম পেকেছিস পেকেছে পেকেছেন পেকো পেঁকো পেখা পেখন পেখম পেখমধরা পেগ পেগম্বর পেঙ্গু পেঙ্গুইন পোল্ট্রি পেঁচ পেচক পেচকী পেঁচা পেঁচাই পেঁচাইও পেঁচাইত পেঁচাইতাম পেঁচাইতিস পেঁচাইতে পেঁচাইতেছ পেঁচাইতেছি পেঁচাইতেছিল পেঁচাইতেছিলাম পেঁচাইতেছিলি পেঁচাইতেছিলে পেঁচাইতেছিলেন পেঁচাইতেছিস পেঁচাইতেছে পেঁচাইতেছেন পেঁচাইতেন পেঁচাইব পেঁচাইবার পেঁচাইবি পেঁচাইবে পেঁচাইবেন পেঁচাইল পেঁচাইলাম পেঁচাইলি পেঁচাইলে পেঁচাইলেন পেঁচাইয়া পেঁচাইয়াছ পেঁচাইয়াছি পেঁচাইয়াছিল পেঁচাইয়াছিলাম পেঁচাইয়াছিলি পেঁচাইয়াছিলে পেঁচাইয়াছিলেন পেঁচাইয়াছিস পেঁচাইয়াছে পেঁচাইয়াছেন পেঁচাইয়ো পেঁচাক পেঁচাচ্ছ পেঁচাচ্ছি পেঁচাচ্ছিল পেঁচাচ্ছিলাম পেঁচাচ্ছিলি পেঁচাচ্ছিলে পেঁচাচ্ছিলেন পেঁচাচ্ছিলেম পেঁচাচ্ছিলুম পেঁচাচ্ছিস পেঁচাচ্ছে পেঁচাচ্ছেন পেঁচাত পেঁচাতাম পেঁচাতিস পেঁচাতে পেঁচাতেন পেঁচাতেম পেঁচাতুম পেঁচান পেঁচানো পেঁচাব পেঁচাবার পেঁচাবি পেঁচাবে পেঁচাবেন পেঁচাবো পেঁচাল পেঁচালাম পেঁচালি পেঁচালে পেঁচালেন পেঁচালেম পেঁচালো পেঁচালুম পেঁচাস পেঁচি পেঁচিয়ে পেঁচিয়েছ পেঁচিয়েছি পেঁচিয়েছিল পেঁচিয়েছিলাম পেঁচিয়েছিলি পেঁচিয়েছিলে পেঁচিয়েছিলেন পেঁচিয়েছিলেম পেঁচিয়েছিলুম পেঁচিয়েছিস পেঁচিয়েছে পেঁচিয়েছেন পেঁচিয়ো পেঁচী পেঁচে পেঁচো পেচ্ছাপ পেছু পেছাতে পেছানো পেছুচ্ছি পেছোনো পেছন পেছনো পেছপা পৌছাতো পৌছে পৌর পেজ পেঁজা পেঁজান পেঁজানো পেজি পেজোমি পেজমি পেজমো পেট পেটওয়ালা পেটক পেটুক পেটকাটা পেটকামড়ানি পেটকামড়ানো পেটুকপনা পেটখারাপ পেটখারাব পেটখসা পেটগরম পেটা পেটাক পেটাঘড়ি পেটাঙ্গি পেটাচ্ছ পেটাচ্ছি পেটাচ্ছিল পেটাচ্ছিলাম পেটাচ্ছিলি পেটাচ্ছিলে পেটাচ্ছিলেন পেটাচ্ছিলেম পেটাচ্ছিলুম পেটাচ্ছিস পেটাচ্ছে পেটাচ্ছেন পেটাত পেটাতাম পেটাতিস পেটাতে পেটাতেন পেটাতেম পেটাতুম পেটান পেটানো পেটাব পেটাবার পেটাবি পেটাবে পেটাবেন পেটাবো পেটারি পেটাল পেটালাম পেটালি পেটালে পেটালেন পেটালেম পেটালুম পেটাস পেটি পেটিকা পেটিকোট পেটী পেটচলা পেটেচড়া পেটেন্ট পেটেল পেটো পেটোয়া পেটযুক্ত পেটন পেটনা পেটনামা পেটপোড়া পেটফাঁপা পেটফুলা পেটবার পেটব্যথা পেটভাতা পেটভরা পেটমোটা পেটরা পেঁটরা পেটরোগা পেট্রোল পেট্রোলিয়াম পেট্রল পেট্রলিয়াম পেট্রলপাম্প পেটসর্বস্ব পেডি পেডেন্ডা পেণ্ঠী পেত পেতা পেতানো পেতাম পেতিস পেতে পেতেছ পেতেছি পেতেছিল পেতেছিলাম পেতেছিলি পেতেছিলে পেতেছিলেন পেতেছিলেম পেতেছিলুম পেতেছিস পেতেছে পেতেছেন পেতেন পেতেম পেতেরাখা পেতো পেতনি পেতনী পেত্নী পেত্রার্কীয় পেতল পেথে পেঁদান পেঁদানি পেঁদানো পেঁদরু পেন পেনালকোড পেনাল্টি পেনি পেনিসিলিন পেনিসিলিয়াম পেনেট পেন্ট পেন্টাগন পেন্টালুন পেন্টিয়াম পেন্টেলুন পেন্ডাল পেন্ডেল পেন্ডুলাম পেন্নাম পেঁনপেঁন পেনফ্রেন্ডশিপ পেনশন পেনশনভোগী পেনসিল পেন্সিল পেনসিলভানিয়া পেনসন পেনসনভোগী পেপার পেপারওয়েট পেপারক্লিপ পেপারব্যাক পেপারস পেঁপে পেপটাইড পেপসি পেম পেমিল পেমেন্ট পের পেরু পেরানো পেরি পেরিঅস্টিয়াম পেরিঅস্টিয়াল পেরিটোনিয়াল পেরিনিয়াম পেরিস্কোপ পেরিস্টলসিস পেরিয়া পেরিয়ে পেরিয়েছ পেরিয়েছি পেরিয়েছিল পেরিয়েছিলাম পেরিয়েছিলি পেরিয়েছিলে পেরিয়েছিলেন পেরিয়েছিলেম পেরিয়েছিলুম পেরিয়েছিস পেরিয়েছে পেরিয়েছেন পেরিয়ো পেরচ্ছ পেরুচ্ছ পেরচ্ছি পেরুচ্ছি পেরচ্ছিল পেরুচ্ছিল পেরচ্ছিলাম পেরুচ্ছিলাম পেরচ্ছিলি পেরুচ্ছিলি পেরচ্ছিলে পেরুচ্ছিলে পেরচ্ছিলেন পেরুচ্ছিলেন পেরচ্ছিলেম পেরুচ্ছিলেম পেরচ্ছিলুম পেরুচ্ছিলুম পেরচ্ছিস পেরুচ্ছিস পেরচ্ছে পেরুচ্ছে পেরচ্ছেন পেরুচ্ছেন পেরে পেরেক পেরেকঠোকা পেরেছ পেরেছি পেরেছিল পেরেছিলাম পেরেছিলি পেরেছিলে পেরেছিলেন পেরেছিলেম পেরেছিলুম পেরেছিস পেরেছে পেরেছেন পেরেনা পেরেশান পেরেশানি পেরো পেরোনো পেরোয় পেরোয়নি পেরত পেরুত পেরতাম পেরুতাম পেরতিস পেরুতিস পেরতে পেরুতে পেরতেন পেরুতেন পেরতেম পেরুতেম পেরতুম পেরুতুম পেরন পেরুন পেরনের পেরনো পেরুনো পেরব পেরুব পেরবার পেরবি পেরুবি পেরবে পেরুবে পেরবেন পেরুবেন পেরবো পেরুবো পেরুভীয় পেরল পেরুল পেরলাম পেরুলাম পেরলি পেরুলি পেরলে পেরুলে পেরলেন পেরুলেন পেরলেম পেরুলেম পেরলুম পেরুলুম পেরস পেরয় পেল পেলা পেলানো পেলাম পেলামনা পেলি পেলে পেলেগ পেলেন পেলেনেলে পেলেননা পেলেম পেলো পেলব পেলবতা পেলভিক পেলভিস পেলুম পেল্লায় পেল্লয় পেশ পেশইমাম পেশওয়া পেশওয়াজ পেশকার পেশকারি পেশকারী পেশকশ পেশগি পেশা পেশাওয়ার পেশাকার পেশাকারী পেশাকর পেশাগত পেশাগতভাবে পেশাজীবী পেশাজীবন পেশাতে পেশাদার পেশাদারি পেশাদারিত্ব পেশাদারী পেশাধারী পেশানি পেশাব পেশাভিত্তিক পেশি পেশিকোষ পেশিক্রিয়া পেশিযুক্ত পেশিবন্ধনী পেশিবহুল পেশিশক্তি পেশী পেশীকোষ পেশীকলা পেশীতন্ত্র পেশীবহুল পেশীশক্তি পেশোয়া পেশোয়াজ পেশোয়ার পেশনি পেশবা পেশমান পেশল পেষ পেষক পেষা পেষাই পেষাইকৃত পেষাইকরা পেষাক পেষাচ্ছ পেষাচ্ছি পেষাচ্ছিল পেষাচ্ছিলাম পেষাচ্ছিলি পেষাচ্ছিলে পেষাচ্ছিলেন পেষাচ্ছিলেম পেষাচ্ছিলুম পেষাচ্ছিস পেষাচ্ছে পেষাচ্ছেন পেষাত পেষাতাম পেষাতিস পেষাতে পেষাতেন পেষাতেম পেষাতুম পেষান পেষানো পেষাব পেষাবার পেষাবি পেষাবে পেষাবেন পেষাবো পেষাল পেষালাম পেষালি পেষালে পেষালেন পেষালেম পেষালুম পেষাস পেষিত পেষে পেষেন পেষণ পেষণকারী পেষণি পেষণী পেষণজনিত পেষণযন্ত্র পেষণদণ্ড পেষণমাত্রা পেষবার পেসকোশ পেস্ট পেস্টিসাইড পেস্ট্রি পেস্ত পেস্তা পেস্তাবাদাম পেসবা পেসমেকার পেড়া পেঁড়া পেড়িয়ে পেড়ে পেড়েছ পেড়েছি পেড়েছিল পেড়েছিলাম পেড়েছিলি পেড়েছিলে পেড়েছিলেন পেড়েছিলেম পেড়েছিলুম পেড়েছিস পেড়েছে পেড়েছেন পেড়ো পেয় পেয়াজ পেঁয়াজ পেঁয়াজু পেঁয়াজকলি পেয়াজি পেঁয়াজি পেঁয়াজী পেয়াজবড়া পেয়াদা পেয়ার পেয়ারা পেয়ারি পেয়ারী পেয়ালা পেয়ালাকৃতি পেয়ালাপিরিচ পেয়িং পেয়ে পেয়েছ পেয়েছি পেয়েছিল পেয়েছিলাম পেয়েছিলি পেয়েছিলে পেয়েছিলেন পেয়েছিলেম পেয়েছিলো পেয়েছিলুম পেয়েছিস পেয়েছে পেয়েছেন পেয়ো পেয়ছেন পৈঘর পৈছা পৈছাঁ পৈটা পৈঠা পৈঁঠা পৈঠল পৈতৃক পৈতৃকভূমি পৈতৃকসম্পত্তি পৈতা পৈতান পৈতামহ পৈতে পৈত্ত পৈত্তাল পৈত্তিক পৈত্র পৈত্রিক পৈত্র্য পৈথান পৈধর পৈপৈ পৈর পৈলব পৈশউ পৈশা পৈশাচ পৈশাচিক পৈশাচিকী পৈশাচী পৈশুন পৈষ্টিক পৈষ্টী পৈসু পৈসা পৈসোঁ পৈয়স্তি পো পোঁ পোংগা পোক পোকা পোকাদমন পোকাপড়া পোকামাকড় পোকার পোক্ত পোখরাজ পোখরি পোগণ্ড পোগ্রামিং পোঙ্গা পোঁচ পোঁচা পোঁচনি পোঁচলা পোঁচড়া পোঁছ পোছা পোঁছা পোঁছাই পোঁছাও পোঁছাক পোঁছাচ্ছ পোঁছাচ্ছি পোঁছাচ্ছিল পোঁছাচ্ছিলাম পোঁছাচ্ছিলি পোঁছাচ্ছিলে পোঁছাচ্ছিলেন পোঁছাচ্ছিলেম পোঁছাচ্ছিলুম পোঁছাচ্ছিস পোঁছাচ্ছে পোঁছাচ্ছেন পোঁছাত পোঁছাতাম পোঁছাতিস পোঁছাতে পোঁছাতেন পোঁছাতেম পোঁছাতুম পোঁছান পোঁছানো পোঁছাব পোঁছাবার পোঁছাবি পোঁছাবে পোঁছাবেন পোঁছাবো পোঁছাল পোঁছালাম পোঁছালি পোঁছালে পোঁছালেন পোঁছালেম পোঁছালুম পোঁছাস পোঁছে পোঁছেন পোঁছবার পোছল পোট পোঁটা পোটফলিও পোটম্যান্টো পোটলা পোঁটলা পোঁটলাপুটলি পোঁটলাপুঁটলী পোটলি পোণা পোত পোঁত পোতক পোতকী পোতা পোঁতা পোতাধ্যক্ষ পোঁতান পোঁতানো পোতারোহী পোতাশ্রয় পোতে পোঁতে পোঁতেন পোতদার পোতন পোঁতবার পোত্রী পোতলা পোথা পোদ পোঁদ পোদ্দার পোদ্দারি পোঁদপাকা পোঁধরা পোনা পোনামাছ পোপ পোপান পোঁপোঁ পোপতান্ত্রিক পোমেটম পোর পোরা পোরান পোরানো পোরার পোরেন পোর্ট পোর্টার পোর্টাল পোর্টেবল পোর্টফলিও পোর্টম্যান্টো পোর্টল্যান্ড পোরবার পোর্সিলিন পোল পোলু পোলা পোলাও পোলাক পোলাপান পোলার পোলিং পোলিও পোলিশ পোলো পোল্যান্ড পোলট্রি পোল্ট্রি পোলনিয়াম পোলভল্ট পোলসারাত পোশ পোশাক পোশাকআশাক পোশাকাদি পোশাকি পোশাকিভদ্রতা পোশাকছাড়া পোশাকধারী পোশাকপরা পোশাকপরিচ্ছদ পোশাকপরিহিত পোশাকপ্রিয় পোশাকবিলাসী পোশতু পোষ পোষক পোষকতা পোষকদেহ পোষা পোষাই পোষাইও পোষাইত পোষাইতাম পোষাইতিস পোষাইতে পোষাইতেছ পোষাইতেছি পোষাইতেছিল পোষাইতেছিলাম পোষাইতেছিলি পোষাইতেছিলে পোষাইতেছিলেন পোষাইতেছিস পোষাইতেছে পোষাইতেছেন পোষাইতেন পোষাইব পোষাইবার পোষাইবি পোষাইবে পোষাইবেন পোষাইল পোষাইলাম পোষাইলি পোষাইলে পোষাইলেন পোষাইয়া পোষাইয়াছ পোষাইয়াছি পোষাইয়াছিল পোষাইয়াছিলাম পোষাইয়াছিলি পোষাইয়াছিলে পোষাইয়াছিলেন পোষাইয়াছিস পোষাইয়াছে পোষাইয়াছেন পোষাইয়ো পোষাকুকুর পোষাচ্ছ পোষাচ্ছি পোষাচ্ছিল পোষাচ্ছিলাম পোষাচ্ছিলি পোষাচ্ছিলে পোষাচ্ছিলেন পোষাচ্ছিলেম পোষাচ্ছিলুম পোষাচ্ছিস পোষাচ্ছে পোষাচ্ছেন পোষাত পোষাতাম পোষাতিস পোষাতে পোষাতেন পোষাতেম পোষাতুম পোষান পোষানি পোষানো পোষাপাখি পোষাব পোষাবার পোষাবি পোষাবিড়াল পোষাবে পোষাবেন পোষাবো পোষাল পোষালাম পোষালি পোষালে পোষালেন পোষালেম পোষালুম পোষাস পোষিণী পোষিত পোষে পোষেন পোষ্ট পোষ্টা পোষ্যপুত্র পোষ্যবর্গ পোষ্টম্যান পোষণ পোষণকারী পোষণীয় পোষবার পোষমানা পোষড়া পোস্ট পোস্টঅফিস পোস্টকার্ড পোস্টগ্রাজুয়েট পোস্টার পোস্টাল পোস্টিং পোস্টে পোস্টেজ পোস্টের পোস্টডক্টরাল পোস্টডক্টরেট পোস্টমাস্টার পোস্টম্যান পোস্টমর্টেম পোস্ত পোস্তগোলা পোস্তা পোস্তর পোহ পোহা পোহাই পোহাইও পোহাইত পোহাইতাম পোহাইতিস পোহাইতে পোহাইতেছ পোহাইতেছি পোহাইতেছিল পোহাইতেছিলাম পোহাইতেছিলি পোহাইতেছিলে পোহাইতেছিলেন পোহাইতেছিস পোহাইতেছে পোহাইতেছেন পোহাইতেন পোহাইব পোহাইবার পোহাইবি পোহাইবে পোহাইবেন পোহাইল পোহাইলাম পোহাইলি পোহাইলে পোহাইলেন পোহাইয়া পোহাইয়াছ পোহাইয়াছি পোহাইয়াছিল পোহাইয়াছিলাম পোহাইয়াছিলি পোহাইয়াছিলে পোহাইয়াছিলেন পোহাইয়াছিস পোহাইয়াছে পোহাইয়াছেন পোহাইয়ো পোহাক পোহাচ্ছ পোহাচ্ছি পোহাচ্ছিল পোহাচ্ছিলাম পোহাচ্ছিলি পোহাচ্ছিলে পোহাচ্ছিলেন পোহাচ্ছিলেম পোহাচ্ছিলুম পোহাচ্ছিস পোহাচ্ছে পোহাচ্ছেন পোহাত পোহাতাম পোহাতিস পোহাতে পোহাতেন পোহাতেম পোহাতুম পোহান পোহানো পোহাব পোহাবার পোহাবি পোহাবে পোহাবেন পোহাবো পোহাল পোহালাম পোহালি পোহালে পোহালেন পোহালেম পোহালুম পোহাস পোহো পোড় পোড়া পোড়াআঁ পোড়াক পোড়াকপালি পোড়াকপালে পোড়াচ্ছ পোড়াচ্ছি পোড়াচ্ছিল পোড়াচ্ছিলাম পোড়াচ্ছিলি পোড়াচ্ছিলে পোড়াচ্ছিলেন পোড়াচ্ছিলেম পোড়াচ্ছিলুম পোড়াচ্ছিস পোড়াচ্ছে পোড়াচ্ছেন পোড়াঞাঁ পোড়াত পোড়াতাম পোড়াতিস পোড়াতে পোড়াতেন পোড়াতেম পোড়াতুম পোড়াদহ পোড়ান পোড়ানি পোড়ানিয়া পোড়ানে পোড়ানো পোড়াব পোড়াবার পোড়াবি পোড়াবে পোড়াবেন পোড়াবো পোড়াভাগ্যি পোড়ামুখো পোড়ামাটি পোড়ারমুখ পোড়ারমুখী পোড়ারমুখো পোড়াল পোড়ালাম পোড়ালি পোড়ালে পোড়ালেন পোড়ালেম পোড়ালুম পোড়াস পোড়েক পোড়েন পোড়ো পোড়ন পোড়নি পোড়বার পোয়া পোয়াই পোয়াইও পোয়াইত পোয়াইতাম পোয়াইতিস পোয়াইতে পোয়াইতেছ পোয়াইতেছি পোয়াইতেছিল পোয়াইতেছিলাম পোয়াইতেছিলি পোয়াইতেছিলে পোয়াইতেছিলেন পোয়াইতেছিস পোয়াইতেছে পোয়াইতেছেন পোয়াইতেন পোয়াইব পোয়াইবার পোয়াইবি পোয়াইবে পোয়াইবেন পোয়াইল পোয়াইলাম পোয়াইলি পোয়াইলে পোয়াইলেন পোয়াইয়া পোয়াইয়াছ পোয়াইয়াছি পোয়াইয়াছিল পোয়াইয়াছিলাম পোয়াইয়াছিলি পোয়াইয়াছিলে পোয়াইয়াছিলেন পোয়াইয়াছিস পোয়াইয়াছে পোয়াইয়াছেন পোয়াইয়ো পোয়াক পোয়াখানেক পোয়াচ্ছ পোয়াচ্ছি পোয়াচ্ছিল পোয়াচ্ছিলাম পোয়াচ্ছিলি পোয়াচ্ছিলে পোয়াচ্ছিলেন পোয়াচ্ছিলেম পোয়াচ্ছিলুম পোয়াচ্ছিস পোয়াচ্ছে পোয়াচ্ছেন পোয়াটাক পোয়াত পোয়াতাম পোয়াতি পোয়াতিস পোয়াতে পোয়াতেন পোয়াতেম পোয়াতুম পোয়ান পোয়ানো পোয়াব পোয়াবারো পোয়াবি পোয়াবে পোয়াবেন পোয়াবো পোয়াল পোয়ালাম পোয়ালি পোয়ালে পোয়ালেন পোয়ালেম পোয়ালুম পোয়াস পোয়েট পোয়েট্রি পুঁছ পুঁছক পুঁছুক পৌগণ্ড পুছা পুঁছা পুঁছাই পুঁছাইও পুঁছাইত পুঁছাইতাম পুঁছাইতিস পুঁছাইতে পুঁছাইতেছ পুঁছাইতেছি পুঁছাইতেছিল পুঁছাইতেছিলাম পুঁছাইতেছিলি পুঁছাইতেছিলে পুঁছাইতেছিলেন পুঁছাইতেছিস পুঁছাইতেছে পুঁছাইতেছেন পুঁছাইতেন পুঁছাইব পুঁছাইবার পুঁছাইবি পুঁছাইবে পুঁছাইবেন পুঁছাইল পুঁছাইলাম পুঁছাইলি পুঁছাইলে পুঁছাইলেন পুঁছাইয়া পুঁছাইয়াছ পুঁছাইয়াছি পুঁছাইয়াছিল পুঁছাইয়াছিলাম পুঁছাইয়াছিলি পুঁছাইয়াছিলে পুঁছাইয়াছিলেন পুঁছাইয়াছিস পুঁছাইয়াছে পুঁছাইয়াছেন পুঁছাইয়ো পুঁছাও পুঁছাক পুঁছান পুঁছানো পুছারি পুঁছাস পুঁছায় পুঁছি পুছিআঁ পুছিউ পুঁছিও পুঁছিত পুঁছিতাম পুঁছিতিস পুঁছিতে পুঁছিতেছ পুঁছিতেছি পুঁছিতেছিল পুঁছিতেছিলাম পুঁছিতেছিলি পুঁছিতেছিলে পুঁছিতেছিলেন পুঁছিতেছিস পুঁছিতেছে পুঁছিতেছেন পুঁছিতেন পুঁছিব পুঁছিবার পুঁছিবি পুঁছিবে পুঁছিবেন পুঁছিল পুছিলাম পুঁছিলাম পুঁছিলি পুঁছিলে পুঁছিলেন পুঁছিস পুছিহ পুঁছিয়া পুঁছিয়াছ পুঁছিয়াছি পুঁছিয়াছিল পুঁছিয়াছিলাম পুঁছিয়াছিলি পুঁছিয়াছিলে পুঁছিয়াছিলেন পুঁছিয়াছিস পুঁছিয়াছে পুঁছিয়াছেন পুঁছিয়ে পুঁছিয়েছ পুঁছিয়েছি পুঁছিয়েছিল পুঁছিয়েছিলাম পুঁছিয়েছিলি পুঁছিয়েছিলে পুঁছিয়েছিলেন পুঁছিয়েছিলেম পুঁছিয়েছিলুম পুঁছিয়েছিস পুঁছিয়েছে পুঁছিয়েছেন পুঁছিয়ো পৌঁচ পুঁছচ্ছ পুঁছচ্ছি পুঁছচ্ছিল পুঁছচ্ছিলাম পুঁছচ্ছিলি পুঁছচ্ছিলে পুঁছচ্ছিলেন পুঁছচ্ছিলেম পুঁছচ্ছিলুম পুঁছচ্ছিস পুঁছচ্ছে পুঁছচ্ছেন পুছে পুঁছে পুঁছেছ পুঁছেছি পুঁছেছিল পুঁছেছিলাম পুঁছেছিলি পুঁছেছিলে পুঁছেছিলেন পুঁছেছিলেম পুঁছেছিলুম পুঁছেছিস পুঁছেছে পুঁছেছেন পুঁছেন পুছেরি পুছো পুঁছো পৌঁছ পুঁছছ পৌঁছুই পৌঁছক পৌঁছুক পৌছা পৌঁছা পৌছাই পৌঁছাই পৌঁছাইও পৌঁছাইত পৌঁছাইতাম পৌঁছাইতিস পৌঁছাইতে পৌঁছাইতেছ পৌঁছাইতেছি পৌঁছাইতেছিল পৌঁছাইতেছিলাম পৌঁছাইতেছিলি পৌঁছাইতেছিলে পৌঁছাইতেছিলেন পৌঁছাইতেছিস পৌঁছাইতেছে পৌঁছাইতেছেন পৌঁছাইতেন পৌঁছাইব পৌঁছাইবার পৌঁছাইবি পৌঁছাইবে পৌঁছাইবেন পৌঁছাইল পৌঁছাইলাম পৌঁছাইলি পৌঁছাইলে পৌঁছাইলেন পৌঁছাইয়া পৌঁছাইয়াছ পৌঁছাইয়াছি পৌঁছাইয়াছিল পৌঁছাইয়াছিলাম পৌঁছাইয়াছিলি পৌঁছাইয়াছিলে পৌঁছাইয়াছিলেন পৌঁছাইয়াছিস পৌঁছাইয়াছে পৌঁছাইয়াছেন পৌঁছাইয়ো পৌঁছাক পৌঁছাত পৌঁছাতে পৌঁছান পৌঁছানো পৌঁছাবার পৌঁছাবে পৌঁছাবেনা পৌঁছামাত্র পৌঁছালে পৌঁছালেন পৌঁছাস পৌঁছায় পৌঁছায়নি পুঁছছি পৌঁছিব পৌঁছিবি পৌঁছিবে পৌঁছিবেন পৌঁছিবো পুঁছছিল পুঁছছিলাম পুঁছছিলি পুঁছছিলে পুঁছছিলেন পুঁছছিলেম পুঁছছিলুম পুঁছছিস পৌছিয়ে পৌঁছিয়ে পৌঁছিয়েছ পৌঁছিয়েছি পৌঁছিয়েছিল পৌঁছিয়েছিলাম পৌঁছিয়েছিলি পৌঁছিয়েছিলে পৌঁছিয়েছিলেন পৌঁছিয়েছিলেম পৌঁছিয়েছিলুম পৌঁছিয়েছিস পৌঁছিয়েছে পৌঁছিয়েছেন পৌঁছচ্ছ পৌঁছুচ্ছ পৌঁছচ্ছি পৌঁছুচ্ছি পৌঁছচ্ছিল পৌঁছুচ্ছিল পৌঁছচ্ছিলাম পৌঁছুচ্ছিলাম পৌঁছচ্ছিলি পৌঁছুচ্ছিলি পৌঁছচ্ছিলে পৌঁছুচ্ছিলে পৌঁছচ্ছিলেন পৌঁছুচ্ছিলেন পৌঁছচ্ছিলেম পৌঁছুচ্ছিলেম পৌঁছচ্ছিলুম পৌঁছুচ্ছিলুম পৌঁছচ্ছিস পৌঁছুচ্ছিস পৌঁছচ্ছে পৌঁছুচ্ছে পৌঁছচ্ছেন পৌঁছুচ্ছেন পৌঁছে পুঁছছে পৌঁছেছ পৌঁছেছি পৌঁছেছিল পৌঁছেছিলাম পৌঁছেছিলি পৌঁছেছিলে পৌঁছেছিলেন পৌঁছেছিলেম পৌঁছেছিলো পৌঁছেছিলুম পৌঁছেছিস পৌঁছেছে পৌঁছেছেন পৌঁছেন পুঁছছেন পৌঁছেনি পৌঁছো পৌঁছোবার পৌঁছত পৌঁছুত পৌঁছতাম পৌঁছুতাম পৌঁছতিস পৌঁছুতিস পৌছতে পৌছুতে পৌঁছতে পৌঁছুতে পৌঁছতেই পৌঁছতেন পৌঁছুতেন পৌঁছতেম পৌঁছুতেম পৌঁছতুম পৌঁছন পৌঁছুন পৌছনো পৌঁছনো পৌছব পৌঁছব পৌঁছুব পৌঁছবি পৌঁছুবি পৌছবে পৌঁছবে পৌঁছুবে পৌছবেন পৌঁছবেন পৌঁছুবেন পৌঁছবো পৌঁছুবো পৌঁছল পৌঁছুল পৌছুলাম পৌঁছলাম পৌঁছুলাম পৌঁছলি পৌঁছুলি পৌছলে পৌঁছলে পৌঁছুলে পৌঁছলেন পৌঁছুলেন পৌঁছলেম পৌঁছুলেম পৌছুলো পৌঁছলুম পৌঁছুলুম পৌঁছস পৌছয় পৌঁছয় পৌটেক পৌণ্ড্র পুঁছত পুঁছতাম পুঁছতিস পুঁছতে পুঁছতেন পুঁছতেম পৌত্তলিক পৌত্তলিকতা পুঁছতুম পৌত্র পৌত্রী পুঁছন পুঁছুন পৌনঃপুনিক পৌনঃপুনিকতা পৌনঃপুন্য পৌনে পুঁছনো পুছন্তি পছন্দ পছন্দকরণ পছন্দানুযায়ী পছন্দতত্ত্ব পছন্দনীয় পছন্দমাফিক পছন্দমত পছন্দমতো পছন্দসই পৌনর্ভব পুঁছব পুঁছবার পুঁছবি পুঁছবে পুঁছবেন পুঁছবো পুছমি পছর পৌরাঙ্গনা পৌরাণিক পৌরাণিকী পৌরাণিকতা পৌরোহিত্য পৌরজন পৌর্ণমাসী পৌরপিতা পৌরপ্রতিষ্ঠান পৌরপ্রধান পৌরব পৌর্ব পৌর্বাপর্য পৌর্বাহ্ণিক পৌর্বী পৌর্বদেহ পৌর্বদেহিক পৌর্বদৈহিক পৌরবর্গ পৌরভবন পৌরমুখ্য পৌরমন্ত্রী পৌরুষ পৌরুষেয় পৌরুষ্য পৌরষবোধ পৌরুষব্যঞ্জক পৌরুষহীন পৌরসংঘ পৌরসঙ্ঘ পৌরস্ত্রী পৌরসভা পৌরসভাধীন পুঁছল পুঁছলাম পুঁছলি পুঁছলে পুঁছলেন পুঁছলেম পুঁছলুম পৌষ পৌষা পৌষালি পৌষালী পৌষে পৌষ্টিক পৌষ্টিকতন্ত্র পৌষ্টিকনালি পৌষপার্বণ পৌষলক্ষ্মী পৌষসংক্রান্তি পুঁছস পুছসি পুছহ পুঁছয় পুঁজ পূজক পূজা পূজাঅর্চনা পূজাকারিণী পূজাকারী পূজাকর্ম পূজাদি পূজান্তে পূজানুষ্ঠান পূজাপার্বণ পূজাপার্বণাদি পূজাবকাশ পূজাবার্ষিকী পূজাবিধি পূজাবেদি পূজাব্যবসায়ী পূজাবন্দনা পূজাবসান পূজামণ্ডপ পূজারি পূজারিণী পূজারী পূজার্চনা পূজার্হ পূজাহ্নিক পুঁজি পূঁজি পজিটিভ পজিট্রন পজিট্রনিয়াম পূজিত পূজিতা পুঁজিতন্ত্র পুঁজিপাটা পুঁজিপতি পুঁজিবাদ পুঁজিবাদী পুঁজিবিনিয়োগকারী পুঁজিবিশিষ্ট পূজিল পজিশন পজিশনিং পুঁজে পূজোপকরণ পূজ্য পুঁজযুক্ত পূজ্যতম পূজ্যতর পূজ্যপাদ পূজ্যমান পূজন পূজনীয় পূজনীয়া পূজয়িত্রী পঞ্চ পঞ্চউপাসক পঞ্চক পঞ্চকোষ পঞ্চকূট পঞ্চকন্যা পঞ্চক্রোশী পঞ্চকর্ম পঞ্চকুলা পঞ্চগঙ্গা পঞ্চগৌড় পঞ্চগুণ পঞ্চগনি পঞ্চগব্য পঞ্চগ্রাম পঞ্চগড় পঞ্চাইত পঞ্চাইতি পঞ্চাইতী পঞ্চাগ্নি পঞ্চাঙ্ক পঞ্চাঙ্গ পঞ্চাঙ্গুল পঞ্চাঙ্গুলি পঞ্চাতপা পঞ্চাত্মক পঞ্চানন পঞ্চান্ন পঞ্চানন্দ পঞ্চাবেণী পঞ্চাভূতাত্মক পঞ্চামৃত পঞ্চাম্র পঞ্চামরা পঞ্চাম্ল পঞ্চাল পঞ্চালিক পঞ্চালিকা পঞ্চালী পঞ্চাশ পঞ্চাশিকা পঞ্চাশীতি পঞ্চাশীতিতম পঞ্চাশীতিতমী পঞ্চাশেক পঞ্চাশত্তম পঞ্চাশত্তমী পঞ্চাশতম পঞ্চাশবার পঞ্চাস্য পঞ্চায়েত পঞ্চায়েতি পঞ্চায়ত পঞ্চায়তি পঞ্চায়ুধ পঞ্চচামর পঞ্চেন্দ্রিয় পঞ্চোপাসক পঞ্চোপচার পঞ্চজন পঞ্চযজ্ঞ পঞ্চতারকা পঞ্চতিক্ত পঞ্চতীর্থ পঞ্চতন্ত্র পঞ্চতপা পঞ্চত্ব পঞ্চত্বপ্রাপ্ত পঞ্চত্বপ্রাপ্তি পঞ্চদেবতা পঞ্চদ্রাবিড় পঞ্চদশ পঞ্চদশী পঞ্চধা পঞ্চনখ পঞ্চনাদ পঞ্চনারী পঞ্চনিম্ব পঞ্চনদ পঞ্চনদী পঞ্চপাণ্ডব পঞ্চপাত্র পঞ্চপিতা পঞ্চপিত্ত পঞ্চপ্রাণ পঞ্চপ্রেত পঞ্চপ্রদীপ পঞ্চপল্লব পঞ্চপুষ্প পঞ্চবৃক্ষ পঞ্চবাণ পঞ্চবার্ষিকী পঞ্চবায়ু পঞ্চবিধ পঞ্চবেদ পঞ্চবটী পঞ্চভুজ পঞ্চভুজাকৃতি পঞ্চভূত পঞ্চম পঞ্চমকার পঞ্চমুখ পঞ্চমুখী পঞ্চমা পঞ্চমাংশ পঞ্চমাংশক পঞ্চমাত্রা পঞ্চমী পঞ্চমত পঞ্চমবাহিনী পঞ্চমবর্ষীয়া পঞ্চমরাগ পঞ্চমস্থানীয়া পঞ্চমহাযজ্ঞ পঞ্চমহাপাতক পঞ্চরং পঞ্চরঙ্গ পঞ্চরত্ন পঞ্চশত পঞ্চশর পঞ্চশস্য পঞ্চস্তম্ভ পুঞ্জ পঞ্জা পঞ্জাব পঞ্জি পুঞ্জি পঞ্জিকা পঞ্জিকাবর্ষ পুঞ্জিত পুঞ্জিভূত পঞ্জী পুঞ্জীকৃত পুঞ্জীভূত পুঞ্জীভবন পঞ্জেরী পুঞ্জছায়া পুঞ্জমেঘ পঞ্জর পঞ্জরাস্থি পঞ্জড়ি পঞ্জুড়ি পট পটু পুট পূয পটুক পুটক পটকা পটুকা পটকাই পটকাইও পটকাইত পটকাইতাম পটকাইতিস পটকাইতে পটকাইতেছ পটকাইতেছি পটকাইতেছিল পটকাইতেছিলাম পটকাইতেছিলি পটকাইতেছিলে পটকাইতেছিলেন পটকাইতেছিস পটকাইতেছে পটকাইতেছেন পটকাইতেন পটকাইব পটকাইবার পটকাইবি পটকাইবে পটকাইবেন পটকাইল পটকাইলাম পটকাইলি পটকাইলে পটকাইলেন পটকাইয়া পটকাইয়াছ পটকাইয়াছি পটকাইয়াছিল পটকাইয়াছিলাম পটকাইয়াছিলি পটকাইয়াছিলে পটকাইয়াছিলেন পটকাইয়াছিস পটকাইয়াছে পটকাইয়াছেন পটকাইয়ো পটকাও পটকাক পটকাচ্ছ পটকাচ্ছি পটকাচ্ছিল পটকাচ্ছিলাম পটকাচ্ছিলি পটকাচ্ছিলে পটকাচ্ছিলেন পটকাচ্ছিলেম পটকাচ্ছিলুম পটকাচ্ছিস পটকাচ্ছে পটকাচ্ছেন পটকাত পটকাতাম পটকাতিস পটকাতে পটকাতেন পটকাতেম পটকাতুম পটকান পটকানো পটকাব পটকাবার পটকাবি পটকাবে পটকাবেন পটকাবো পটকাল পটকালাম পটকালি পটকালে পটকালেন পটকালেম পটকালুম পটকাস পটকায় পুটকি পুটকিত পুটকিনী পটকে পুটকে পটকেছ পটকেছি পটকেছিল পটকেছিলাম পটকেছিলি পটকেছিলে পটকেছিলেন পটকেছিলেম পটকেছিলুম পটকেছিস পটকেছে পটকেছেন পটকো পটকনো পটা প্যাঁ পটাই পটাইও পটাইত পটাইতাম পটাইতিস পটাইতে পটাইতেছ পটাইতেছি পটাইতেছিল পটাইতেছিলাম পটাইতেছিলি পটাইতেছিলে পটাইতেছিলেন পটাইতেছিস পটাইতেছে পটাইতেছেন পটাইতেন পটাইব পটাইবার পটাইবি পটাইবে পটাইবেন পটাইল পটাইলাম পটাইলি পটাইলে পটাইলেন পটাইয়া পটাইয়াছ পটাইয়াছি পটাইয়াছিল পটাইয়াছিলাম পটাইয়াছিলি পটাইয়াছিলে পটাইয়াছিলেন পটাইয়াছিস পটাইয়াছে পটাইয়াছেন পটাইয়ো পটাও পটাক প্যাক প্যাঁক প্যাকাটি প্যাঁকাটি প্যাকাটে প্যাকিং প্যাকেজ প্যাকেট প্যাক্ট প্যাকড প্যাকবন্দি প্যাখম প্যাগোডা প্যাচ প্যাঁচ প্যাঁচওয়ালা প্যাঁচা প্যাঁচাচ্ছে প্যাঁচানো প্যাঁচাল প্যাঁচালো প্যাঁচে পটাচ্ছ পটাচ্ছি পটাচ্ছিল পটাচ্ছিলাম পটাচ্ছিলি পটাচ্ছিলে পটাচ্ছিলেন পটাচ্ছিলেম পটাচ্ছিলুম পটাচ্ছিস পটাচ্ছে পটাচ্ছেন প্যাঁচযুক্ত প্যাচপেচে প্যাচপ্যাচ প্যাটার্ন প্যাটেন্ট প্যাটরা প্যাঁটরা প্যাড প্যাডেল প্যাডলক পটাত প্যাতানো পটাতাম পটাতিস পটাতে পটাতেন পটাতেম পটাতুম প্যাথলজি প্যাথলজিকাল প্যাথলজিক্যাল প্যাঁদান প্যাঁদানি প্যাঁদানো পটান প্যান প্যানইসলামবাদ প্যানইসলামবাদী প্যানারমিক প্যানেল পটানো প্যান্ট প্যান্টালুন প্যান্টোমাইম প্যান্টশার্ট প্যান্ডেল প্যান্ড্যাল প্যানপেনে প্যানপ্যান প্যানপ্যানান প্যানপ্যানানি প্যানপ্যানানো প্যাপিরাস প্যাপিলা পটাপট পটাব পটাবার পটাবাস পটাবি পটাবে পটাবেন পটাবো প্যাভিলিয়ন পটাম্বর পটার প্যারা প্যারাগ্রাফ প্যারাগুয়ে প্যারাচৌম্বক প্যারাটা প্যারাডক্স প্যারাথাইরয়েড প্যারানরমাল প্যারানয়েড প্যারাফিন প্যারামিটার প্যারামেডিক প্যারালাইজড প্যারালাল প্যারাসুট প্যারিস প্যারী প্যারেড প্যারেডস প্যারেনকাইমা প্যারেন্ট প্যারোটিড পটাল প্যালা প্যালাডিয়াম পটালাম পটালি পটালে পটালেন পটালেম প্যালেস প্যালেস্টাইন প্যালেস্টিনিয়ান পটালুম পটাশ পটাশিয়াম প্যাশন পটাস প্যাসকেল প্যাসিফিক পটাসিয়াম প্যাসেজ প্যাসেঞ্জার প্যাসেফিক প্যাস্টেল পটাসপটাস প্যাড়া প্যাঁড়া পটি পুঁটি পুটিং পুটিকা পটিত পুটিত পটিতাম পটিতিস পটিতে পটিতেছ পটিতেছি পটিতেছিল পটিতেছিলাম পটিতেছিলি পটিতেছিলে পটিতেছিলেন পটিতেছিস পটিতেছে পটিতেছেন পটিতেন পটিব পটিবার পটিবি পটিবে পটিবেন পটিমা পুঁটিমাছ পটিল পটিলাম পটিলি পটিলে পটিলেন পটিস পটিয়া পটিয়াছ পটিয়াছি পটিয়াছিল পটিয়াছিলাম পটিয়াছিলি পটিয়াছিলে পটিয়াছিলেন পটিয়াছিস পটিয়াছে পটিয়াছেন পটিয়ে পটিয়েছ পটিয়েছি পটিয়েছিল পটিয়েছিলাম পটিয়েছিলি পটিয়েছিলে পটিয়েছিলেন পটিয়েছিলেম পটিয়েছিলুম পটিয়েছিস পটিয়েছে পটিয়েছেন পটিয়ো পুটী পুঁটী পুঁটীমাছ পটীয়ান পটীয়স পটীয়সী পটে পুটে পুঁটে পটেছ পটেছি পটেছিল পটেছিলাম পটেছিলি পটেছিলে পটেছিলেন পটেছিলেম পটেছিলুম পটেছিস পটেছে পটেছেন পটেন পটেনশিওমিটার পটেনশিয়াল পটো পটোল পটোলাকৃতি পটোলচেরা পটোলপাতা পটোললতা পটছ পটছি পটছিল পটছিলাম পটছিলি পটছিলে পটছিলেন পটছিলেম পটছিলুম পটছিস পটছে পটছেন পট্ট পট্টু পট্টাবাস পট্টি পট্টিবাজ পট্টিশ পট্টিস পট্টী পট্টীশ পট্টজাত পট্টন পট্টনায়ক পট্টবস্ত্র পট্টমহিষী পটত পটুতা পটতাম পটুতার পটতিস পটতে পটতেন পটতেম পটুত্ব পটতুম পটুন পুটপাক পটপট পটপটানো পটপটি পটপরিবর্তন পটব পটবার পটবাস পটবে পটবেন পটবো পটভূমি পটভূমিক পটভূমিকা পটমঞ্জরী পটমণ্ডপ পটল পটলাম পটলি পুটলি পুটুলি পুঁটলি পুঁটুলি পটলচেরা পটলে পটলেন পটলেম পটলুম পটশিল্প পটশিল্পী পটস্থ পটহ পটহনিনাদ পটুয়া পটুয়াখালী পুঠি পুঁঠি পঠিত পঠিতব্য পুঁঠিমাছ পুঁঠী পুঁঠীমাছ পঠ্যমান পঠদ্দশা পঠন পঠনীয় পঠনযোগ্য পঠনযোগ্যতা পঠনপাঠন পঠনশীল পুডিং পড্ডিহাই পণ পণকিয়া পণিত পণিতা পণিতব্য পুণিম পণী পণ্য পুণ্য পুণ্যক পুণ্যকাজ পুণ্যকাল পুণ্যকীর্তি পুণ্যকৃৎ পুণ্যকর্ম পুণ্যকর্মকারী পুণ্যকর্মা পুণ্যকর্মাদি পুণ্যকর্মসাধন পুণ্যক্ষেত্র পুণ্যক্ষয় পণ্যগত পণ্যাগার পণ্যাঙ্গনা পণ্যাজীব পুণ্যাত্মা পণ্যাদি পুণ্যার্জনকারী পুণ্যার্থে পুণ্যাহ পুণ্যি পুণ্যিপুকুর পণ্যোৎপাদন পণ্যজাত পণ্যজীব পণ্যজীবী পুণ্যজনক পুণ্যযোগ পুণ্যতিথি পুণ্যতীর্থ পুণ্যতোয়া পুণ্যদ পণ্যদ্রব্য পণ্যদ্রব্যাদি পুণ্যদর্শন পণ্যপরিবহন পুণ্যফল পণ্যবাণিজ্য পুণ্যবান পণ্যবাহী পণ্যবিক্রেতা পণ্যবিক্রয় পণ্যবিনিময় পণ্যবীথি পণ্যবীথিকা পণ্যবীথী পুণ্যবতী পুণ্যবল পণ্যবস্তু পুণ্যভূমি পুণ্যমহিমা পুণ্যলাভ পুণ্যলাভকারী পুণ্যলোক পণ্যশালা পুণ্যশীল পুণ্যশীলা পুণ্যশ্লোক পণ্যসামগ্রী পুণ্যসঞ্চয় পণ্যস্ত্রী পুণ্যস্থান পুণ্যস্নান পণ্যসম্ভার পুণ্যহীন পণ্ড পণ্ডিত পণ্ডিতা পণ্ডিতাভিমানী পণ্ডিতি পণ্ডিতনারী পণ্ডিতবৃন্দ পণ্ডিতমানী পণ্ডিতম্মন্য পণ্ডিতম্মন্যতা পণ্ডিতমূর্খ পণ্ডিতমহল পণ্ডিতসদৃশ পণ্ডিতসমাজ পণ্ডিতসমৃদ্ধ পুণ্ড্র পুণ্ড্রক পুণ্ডরীক পুণ্ডরীকাক্ষ পুণ্ড্রনগর পুণ্ড্রবর্ধন পণ্ডশ্রম পণন পণপ্রথা পণব পণবদ্ধ পণরক্ষা পুত পুৎ পূত পতগ পতঙ্গ পতঙ্গবৃত্ত পতঙ্গবৃত্তি পতঙ্গভুক পতঙ্গম পুঁতা পতাকা পতাকাধারী পতাকাবাহী পতাকিনী পতাকী পূতাগ্নি পূতাত্মা পুঁতান পুঁতানো পতি পুতি পূতি পুঁতি পতিংবরা পূতিকা পতিকুল পূতিগন্ধ পতিগৃহ পতিঘাতিনী পতিচালক পতিযুক্ত পতিত পুঁতিত পতিতা পতিতাবৃত্তি পুঁতিতাম পতিতালয় পুঁতিতিস পুঁতিতে পুঁতিতেছ পুঁতিতেছি পুঁতিতেছিল পুঁতিতেছিলাম পুঁতিতেছিলি পুঁতিতেছিলে পুঁতিতেছিলেন পুঁতিতেছিস পুঁতিতেছে পুঁতিতেছেন পুঁতিতেন পতিতের পতিতপাবন পতিতপাবনী পতিত্ব পতিদেবতা পুতিন পতিপত্নীরূপ পতিপুত্র পতিপুত্রযুক্তা পতিপুত্রবতী পতিপুত্রহীনা পতিপ্রাণা পতিপরায়ণা পতিপরায়ণতা পুঁতিব পুঁতিবার পুঁতিবি পুঁতিবে পুঁতিবেন পতিবত্নী পতিব্রতা পতিমতী পতিরূপ পুঁতিল পুঁতিলাম পুঁতিলি পুঁতিলে পুঁতিলেন পতিশোক পুঁতিস পতিসেবা পতিসোহাগিনী পতিহীনা পুঁতিয়া পতিয়াই পুঁতিয়াছ পুঁতিয়াছি পুঁতিয়াছিল পুঁতিয়াছিলাম পুঁতিয়াছিলি পুঁতিয়াছিলে পুঁতিয়াছিলেন পুঁতিয়াছিস পুঁতিয়াছে পুঁতিয়াছেন পতিয়ান পতিয়াব পতিয়ায়ব পুঁতিয়ো পুতী পুতে পুঁতে পতেঙ্গা পুঁতেছ পুঁতেছি পুঁতেছিল পুঁতেছিলাম পুঁতেছিলি পুঁতেছিলে পুঁতেছিলেন পুঁতেছিলেম পুঁতেছিলুম পুঁতেছিস পুঁতেছে পুঁতেছেন পুঁতেন পুঁতো পুঁতছ পুঁতছি পুঁতছিল পুঁতছিলাম পুঁতছিলি পুঁতছিলে পুঁতছিলেন পুঁতছিলেম পুঁতছিলুম পুঁতছিস পুঁতছে পুঁতছেন পতঞ্জলি পতঞ্জলিকৃত পতৎ পুঁতত পুঁততাম পত্তি পুত্তিক পুত্তিকা পুঁততিস পুঁততে পুঁততেন পুঁততেম পত্তন পত্তনি পত্তনিদার পত্তনী পত্তনদার পুঁততুম পতত্র পত্তর পুত্তর পুত্তুর পতত্রী পুত্তল পুত্তলক পুত্তলি পুত্তলিকা পুত্তলিকাপূজা পুত্তলিপূজা পুত্তলী পুত্তলীপূজা পতন পুঁতুন পূতনা পত্নী পত্নীতলা পত্নীপ্রেম পত্নীবৎসল পত্নীরূপ পত্নীসহ পতনীয় পতনোন্মুখ পুতন্তী পতনরোধক পতনশীল পতপত পুতুপুতু পুঁতব পুঁতবি পুঁতবে পুঁতবেন পুঁতবো পতর পত্র পুত্র পত্রক পুত্রক পুত্রকা পুত্রকাম পুত্রকামা পুত্রকামনা পুত্রকন্যা পুত্রঘাতী পত্রাঘাত পত্রাঙ্ক পত্রাদি পত্রাবলি পত্রাবলী পুত্রার্থ পত্রালি পত্রালিকা পত্রালী পত্রিকা পুত্রিকা পত্রিকাওয়ালা পত্রিকাদি পত্রী পুত্রী পুত্রীয় পুত্রেষ্টি পুত্রেষ্টিমন্ত্র পত্রোদ্গম পত্রোপন্যাস পুত্রজ্ঞান পত্রযুক্ত পুত্রযজ্ঞ পত্রত্যাগ পুত্রতুল্য পুত্রদান পুত্রদ্বয় পত্রনবিস পত্রপাঠ পুত্রপালন পত্রপুট পত্রপত্রিকা পত্রপ্রাপ্তি পত্রপুষ্প পত্রফলক পুত্রবান পত্রবাহ পত্রবাহক পত্রবিনিময় পত্রব্যবহার পুত্রবতী পুত্রবধূ পুত্রবধূস্থানীয়া পত্রবৃন্ত পুত্রবৃন্দ পত্রবন্ধু পত্রভঙ্গ পত্রভোজী পত্রমঞ্জরি পত্রমঞ্জরী পত্রমুদ্রা পত্ররাজি পত্ররেখা পত্ররথ পুত্ররূপ পুত্রলাভ পত্রলিখা পত্রলিখন পত্রলেখা পুত্রশোক পত্রসূচি পুত্রস্থানীয় পুত্রস্নেহ পুত্রসন্তান পুত্রসম পুত্রহারা পত্রহীন পুত্রহীন পুতুল পুঁতল পুতুলখেলা পুতলা পুঁতলাম পুতলি পুঁতলি পুতলী পুতুলে পুঁতলে পুঁতলেন পুঁতলেম পুতুলনাচ পুতুলপূজা পুতুলবউ পুঁতলুম পথ পৃথু পৃথক পৃথককৃত পৃথককরণ পৃথকীকৃত পৃথকীকরণ পথকেন্দ্রিক পৃথকত্ব পৃথকভাবে পথকর পথকষ্ট পথখরচ পথখরচা পৃথগন্ন পথঘাট পৃথা পথাদি পথান পুথি পুঁথি পথিক পথিকার পথিকৃৎ পথিকবর পথিকশালা পুঁথিগত পুঁথিগতবিদ্যা পুঁথিঘর পুঁথিপত্র পৃথিবী পৃথিবীকেন্দ্রিক পৃথিবীজোড়া পৃথিবীজুড়ে পৃথিবীদেবী পৃথিবীপতি পৃথিবীপৃষ্ঠ পৃথিবীপৃষ্ঠাংশ পৃথিবীব্যাপী পৃথিবীরূপ পৃথিবীসহ পথিমধ্যে পুঁথিশালা পুঁথিসাহিত্য পথচারী পথচ্যুত পথচলা পথচলাকালীন পথচলতি পথেঘাটে পথেরকাঁটা পথেরদাবী পথেরপাঁচালি পথেরপাঁচালী পথজোড় পথজোড়া পথ্য পথযাত্রা পথ্যাপথ্য পথ্যি পথদেখানো পথদ্রষ্টা পথধরা পথনির্দেশ পথনির্দেশক পথনির্দেশকারী পথনির্মাণ পথপাদপ পথপার্শ্ব পথপার্শ্বিক পথপ্রান্ত পথপরিচায়ক পথপরিস্কারক পথপ্রদর্শক পথপ্রদর্শন পথপ্রদর্শনকারী পথবাসী পৃথ্বী পৃথ্বীধর পৃথ্বীনাথ পৃথ্বীপতি পৃথ্বীরাজ পথভোলা পথভ্রান্ত পথভ্রম পথভ্রমণ পথভ্রমণকারী পথভ্রষ্ট পথভুলা পথমধ্য পথমল পথরোধ পথরূপ পৃথুল পৃথুলা পৃথুলতা পথশ্রান্ত পথশ্রম পথশুল্ক পথহারা পদ পদক পদকার পদকপ্রাপ্ত পদকর্তা পদকর্ত্রী পদক্রম পদক্রমগত পদক্ষেপ পদক্ষেপকারী পদখিন পদগৌরব পদগঠনরীতি পদগত পদাংশ পদাঘাত পদাঙ্ক পদাঙ্গুলি পদাতি পদাতিক পদাধিকার পদাধিকারী পদাধিকারবলে পদানত পদান্ত পদানতা পদানুবর্তিতা পদানুবর্তিনী পদানুবর্তী পদান্বয় পদান্বয়ী পদানুসারী পদানুসরণ পদাবনত পদাবনতা পদাবলি পদাবলী পদাম্বুজ পদার্থ পদার্থপূর্ণ পদার্থবিজ্ঞান পদার্থবিজ্ঞানী পদার্থবিদ পদার্থবিদ্যা পদার্থমিশ্রিত পদার্পণ পদার্পণকারী পদারবিন্দ পদাশ্রিত পদাশ্রিতা পদাশ্রয় পদাশ্রয়ী পদাসন পদাহত পদিনা পুদিনা পুদিনাপাতা পুদিনাশাক পদচাপ পদচারণ পদচালন পদচালনা পদচিকিৎসা পদচিহ্ন পদচ্ছায়া পদচ্যুত পদচ্যুতি পদেপদে পদোদক পদোন্নতি পদোন্নতিপ্রাপ্ত পদোন্নতিসূত্রে পদোন্নয়ন পদছায়া পদ্য পদযুগ পদযুগ্ম পদযুগল পদ্যাংশ পদযাত্রা পদযাত্রী পদ্যছন্দ পদ্যরীতি পদ্যরচনা পদ্যসাহিত্য পদত্যাগ পদত্যাগকারী পদত্যাগী পদত্যাগপত্র পদত্যাগপূর্বক পদতল পদদ্বয় পদদলিত পদদলিতা পদ্ধতি পদ্ধতিগত পদ্ধতিভিত্তিক পদ্ধতিসংখ্যা পদধ্বনি পদধূলি পদধূলিরঞ্জিত পদনিক্ষেপ পদন্নোতি পদপঙ্কজ পদপাঠ পদপাত পদপিষ্ট পদপ্রকরণ পদপ্রকরণগত পদপ্রান্ত পদপ্রার্থিতা পদপ্রার্থিনী পদপ্রার্থী পদপরিচয় পদপল্লব পদপৃষ্ঠ পদবাচ্য পদবাহুল্য পদবি পদবিক্ষেপ পদবিন্যাস পদবিন্যাসবিধি পদবিভাজন পদবিশিষ্ট পদবিশ্লেষণ পদবী পদবীধারী পদব্রজ পদ্ম পদ্মআঁখি পদ্মকাঁটা পদ্মকোষ পদ্মগোখরো পদ্মগর্ভ পদুমা পদ্মা পদ্মাকর পদ্মাক্ষ পদ্মানদী পদ্মাপার পদ্মাবতী পদ্মামুখ পদ্মালয়া পদ্মাসন পদ্মাসনা পদুমিনী পদ্মিনী পদ্মিনীকান্ত পদ্মিনীবল্লভ পদ্মচিহ্নযুক্ত পদ্মোদ্ভব পদ্মযোনি পদ্মনাথ পদ্মনাভ পদ্মনেত্র পদ্মপাণি পদ্মপাতা পদ্মপরাগ পদ্মপুরাণ পদ্মপ্রিয়া পদ্মপর্ণ পদ্মপলাশ পদ্মপলাশলোচন পদ্মফুল পদ্মবিভূষণ পদ্মবীজ পদ্মবন্ধু পদ্মবহুল পদ্মভূ পদ্মভূষণ পদ্মমুখ পদ্মমুখী পদ্মমণি পদ্মমধু পদ্মরাগ পদ্মরাগমণি পদমর্যাদা পদমূল পদ্মলোচন পদ্মলোচনা পদ্মশ্রী পদ্মসদৃশ পদ্মসম্ভব পদরচয়িতা পদরেণু পদরজ পদরূপ পদলাভ পদলালিত্য পদলেহন পদশক্তি পদশব্দ পদশল্যচিকিৎসা পদসংযোগ পদসংযোজন পদস্খলিত পদস্খলিতা পদস্খলন পদসেবা পদসেবন পদসজ্জা পদসজ্জাবিধি পদসঞ্চার পদস্থ পদস্থাপন পদস্থল পদস্পর্শ পদসমষ্টি পদহীন পুন পুনু পুনঃ পুনঃপুন পনা পুনা পনাম পনাহ পুনি পনির পুনী পনীর পুনে পনের পনেরো পনেরোষোলো পন্থ পন্থা পন্থানুসরণ পন্থি পন্থিক পন্থী পন্ন পন্নগ পন্নগঅশন পন্নগকেশর পন্নগারি পন্নগাশন পন্নগী পুন্নাগ পন্নাম পুন্নামনরক পুনমি পুনমী পনর পনরই পুনরুক্ত পুনরুক্তি পুনর্গঠিত পুনর্গঠন পুনর্ঘটন পুনরাগমন পুনরাবির্ভাব পুনরাবিষ্কার পুনরাবৃত্ত পুনরাবৃত্তি পুনরারম্ভ পুনরায় পুনর্জাত পুনর্জীবিত পুনর্জীবন পুনর্জীবনলাভ পুনরুজ্জীবিত পুনরুজ্জীবন পুনর্জন্ম পুনর্জন্মবাদ পুনর্জন্মলাভ পুনর্যাত্রা পুনর্যৌবন পুনরুত্থান পুনরুত্থিত পুনরুৎপাদন পুনরুৎপত্তি পুনরুৎপন্ন পুনর্দখল পুনরুদ্ধার পুনরুদ্ভূত পুনরুদ্ভব পুনরধিকার পুনরধিকৃত পুনর্নির্দেশ পুনর্নির্দেশনা পুনর্নির্মাণ পুনর্নির্মিত পুনর্নিয়ন্ত্রণ পুনর্নব পুনর্নবা পুনরপি পুনর্প্রচেষ্টা পুনর্প্রবর্তন পুনর্বার পুনর্বাসিত পুনর্বাসন পুনর্বিচার পুনর্বিচার্য পুনর্বিতরণ পুনর্বিনিয়োগ পুনর্বিন্যাস পুনর্বিবাহ পুনর্বিবেচনা পুনর্বসু পুনর্বসতি পুনর্বহাল পুনর্বহালকালীন পুনর্ভূ পুনর্ভুক্তি পুনর্ভব পুনর্মিলিত পুনর্মিলন পুনর্মুদ্রিত পুনর্মুদ্রণ পুনর্মূষিক পুনর্মূষিকোভব পুনর্লিখন পুনরুল্লিখিত পুনরুল্লেখ পুনশ্চ পনস পপ পূপ পপি পপিহা পপুলার পপুলেশন পুব পূব পবার পবাল পুবাল পূবাল পুবালি পূবালী পবিত্র পবিত্রকারী পবিত্রকরণ পবিত্রা পবিত্রিত পবিত্রীকৃত পবিত্রীকরণ পবিত্রচরিত্র পবিত্রতা পবিত্রতম পুবে পূবে পবেস পবন পবনগতি পবননন্দন পবনপুত্র পবনবেগ পবনভর পূবপুরুষ পবমান পভার্টি পুমা পুমান পমেটম পম্প পম্পেই পর পুর পুরু পূর প্র পুরঃসর পরওনা পরওয়া পরওয়ানা পরওয়ার পরওয়ারদিগার পরওয়ারদেগার পরক পরুক পূরক প্রকাণ্ড প্রকাণ্ডকায় প্রকাণ্ডতা পরকার প্রকার প্রকারান্তর প্রকারেণ প্রকারভেদ পরকাল পরকাশ প্রকাশ প্রকাশক প্রকাশকারী প্রকাশকাল প্রকাশক্ষম প্রকাশক্ষমতা প্রকাশিকা প্রকাশিত প্রকাশিতকরণ প্রকাশিতব্য প্রকাশ্য প্রকাশযোগ্য প্রকাশ্যভাবে প্রকাশন প্রকাশনা প্রকাশনাকাল প্রকাশনালয় প্রকাশনী প্রকাশনীয় প্রকাশভঙ্গী প্রকাশমান পুরকায়স্থ পরকিত পরকীকরণ প্রকীর্ণ প্রকীর্তি প্রকীর্তিত পরকীয় পরকীয়া পরকীয়াবাদ পরকীয়তা প্রকৌশল প্রকৌশলী প্রকোপ প্রকোপিত প্রকোপণ প্রকোপন পরকোলা প্রকোষ্ঠ পুরকৌশল প্রকৌশল প্রকৌশলগত পুরকৌশলী প্রকৌশলী প্রকৌশলবিদ প্রকৌশলবিদ্যা প্রকট পর্কটি প্রকটিত প্রকটিতকরণ পর্কটী প্রকটতর প্রকটন প্রকটভাবে প্রকটলীলা প্রকৃত প্রকৃতার্থ প্রকুতি প্রকৃতি প্রকৃতিগত প্রকৃতিঘটিত প্রকৃতিজ প্রকৃতিজাত প্রকৃতিযুক্ত প্রকৃতিদত্ত প্রকৃতিপূজা প্রকৃতিপ্রত্যয় প্রকৃতিপ্রত্যয়াদি প্রকৃতিবাদ প্রকৃতিবাদী প্রকৃতিবিজ্ঞান প্রকৃতিবিজ্ঞানী প্রকৃতিবিদ প্রকৃতিবিরুদ্ধ প্রকৃতিবিষয়ক প্রকৃতিবর্ণহীন প্রকৃতিরঞ্জন প্রকৃতিসিদ্ধ প্রকৃতিস্থ প্রকৃতিসমান প্রকৃতত্ব প্রকৃতদূরত্ব প্রকৃতপক্ষে প্রকৃতপ্রস্তাব পূরকধ্বনি পূরকধ্বনিগত প্রকুপিত প্রকুপিতা প্রকম্প প্রকম্পিত প্রকম্পযুক্ত প্রকম্পন প্রকর প্রক্রিয়া প্রক্রিয়াকারক প্রক্রিয়াকারী প্রক্রিয়াকালীন প্রক্রিয়াকরণ প্রক্রিয়াগত প্রক্রিয়াজাত প্রক্রিয়াজাতকরণ প্রক্রিয়াদি প্রক্রিয়াধীন প্রক্রিয়াবল প্রকরণ প্রকরণগত পূরকরূপ প্রকর্ষ প্রকর্ষণ পরকলা পূরকলিপি প্রকল্প প্রকল্পগত প্রকল্পাঞ্চল প্রকল্পিত প্রক্ষাল প্রক্ষালক প্রক্ষালিত প্রক্ষালন প্রক্ষালনকারী প্রক্ষিপ্ত প্রক্ষিপ্তপাঠ প্রক্ষেপ প্রক্ষেপক প্রক্ষেপকারী প্রক্ষেপণ প্রক্ষেপণীয় প্রক্ষোভ প্রকৃষ্ট প্রকৃষ্টা প্রকৃষ্টচিত্ত প্রকৃষ্টতা প্রকৃষ্টত্ব প্রকৃষ্টভাবে প্রকৃষ্টরূপে প্রক্ষ্বেড়ন প্রক্ষ্বেড়নধারী প্রক্সি পরখ পুরখ পুরুখ পরখা পরখি পুরুখোসা প্রখ্যাত প্রখ্যাতা প্রখ্যাতনামা প্রখ্যাপক প্রখ্যাপিত প্রখ্যাপন প্রখর প্রখরা প্রখরতা প্রখরতাহীন প্রখরত্ব প্রখররূপ পরগাছা প্রগাঢ় প্রগাঢ়তা প্রগাঢ়ভাবে পরগণা প্রগণ্ড প্রগত প্রগতি প্রগতিকামী প্রগতিধর্মী প্রগতিপন্থি প্রগতিপন্থী প্রগতিবাদী প্রগতিবিরুদ্ধ প্রগতিবর্জিত প্রগতিশীল প্রগতিশীলতা প্রগতিসংহার পরগনা প্রগমন প্রগ্রাহ প্রগ্রেস প্রগ্রেসিভ প্রগ্রহ প্রগলভ প্রগলভা প্রগলভতা পরগৃহ প্রঘাত পরঘরি পরা পুরা পূরা প্রাংশু প্রাংশুলভ্য পরাই পুরাই পরাইও প্রাইজ প্রাইজপ্রাপ্ত প্রাইজমানি প্রাইড পরাইত পরাইতাম পরাইতিস পরাইতে পরাইতেছ পরাইতেছি পরাইতেছিল পরাইতেছিলাম পরাইতেছিলি পরাইতেছিলে পরাইতেছিলেন পরাইতেছিস পরাইতেছে পরাইতেছেন পরাইতেন পরাইব পরাইবার পরাইবি পরাইবে পরাইবেন প্রাইভেট প্রাইভেটটিউটর প্রাইম প্রাইমারি প্রাইমারী পরাইল পরাইলাম পরাইলি পরাইলে পরাইলেন পরাইয়া পরাইয়াছ পরাইয়াছি পরাইয়াছিল পরাইয়াছিলাম পরাইয়াছিলি পরাইয়াছিলে পরাইয়াছিলেন পরাইয়াছিস পরাইয়াছে পরাইয়াছেন পরাইয়ো পরাওল পরাক প্রাক প্রাক্কাল প্রাক্কালিক প্রাক্কালিন প্রাককেন্দ্রিক প্রাক্কলন প্রাকা প্রাকাম্য প্রাকার পুরাকাল পুরাকালীন পরাকাষ্ঠা পুরাকাহিনী পুরাকীর্তি প্রাকটিস প্রাকযোগ্যতা পরাকৃত প্রাকৃত প্রাকৃতিক প্রাকৃতিকবিপর্যয় প্রাকৃতজন প্রাক্তন প্রাকদর্শন প্রাক্বালে পরাক্রান্ত পরাক্রান্তা পরাকরণ প্রাকরণিক পরাক্রম পরাক্রমযুক্ত পরাক্রমশালিতা পরাক্রমশালী প্রাকলিপ্ত প্রাখর্য পরাগ পরাগকেশর প্রাগুক্ত পরাগিত প্রাগৈতিহাসিক পরাগযুক্ত পরাগযোগ পরাগত প্রাগদেশ পরাগধানী প্রাগভাব পরাগমিলন প্রাগ্রসর প্রাগলভ্য পরাগস্থালী পরাগহীন পুরাঘটিত প্রাঙ্গণ পুরাঙ্গনা পরাঙ্মুখ প্রাঙমুখ প্রাচী প্রাচীন প্রাচীনকাল প্রাচীনা প্রাচীনযুগ প্রাচীনযুদ্ধ প্রাচীনতা প্রাচীনত্ব প্রাচীনতম প্রাচীনতর প্রাচীনদেশ প্রাচীনপন্থা প্রাচীনপন্থী প্রাচীনমনীষী প্রাচীনশতাব্দী প্রাচীর প্রাচীরগাত্র প্রাচীরঘেরা পরাচ্ছ পরাচ্ছি পরাচ্ছিল পরাচ্ছিলাম পরাচ্ছিলি পরাচ্ছিলে পরাচ্ছিলেন পরাচ্ছিলেম পরাচ্ছিলুম পরাচ্ছিস পরাচ্ছে পরাচ্ছেন পরাচৌম্বক পরাচৌম্বকীয় প্রাচ্য প্রাচ্যতত্ত্ব প্রাচ্যতত্ত্ববিদ প্রাচ্যদেশীয় প্রাচ্যপাশ্চাত্য প্রাচ্যবিদ প্রাচ্যভাষা প্রাচুর্য প্রাচুর্যযুক্ত প্রাচুর্যদায়িনী প্রাচুর্যপূর্ণ প্রাজাপত্য পরাজিত পরাজিতা পরাজেয় পরাজেয়তা প্রাজ্ঞ প্রাজ্ঞা প্রাজ্ঞী প্রাজ্ঞজন প্রাজ্ঞতা প্রাজন পরাজয় পরাজয়বরণ পরাজয়লাভ পরাজয়স্বীকার প্রাঞ্জল প্রাঞ্জলতা প্রাঞ্জলতাগুণ প্রাযুক্তিক পরাণ পুরাণ প্রাণ প্রাণকান্ত পুরাণকার প্রাণকেন্দ্র প্রাণকেষ্ট প্রাণকোষ পুরাণকৃত পুরাণকর্তা প্রাণকৃষ্ণ প্রাণখোলা প্রাণগত প্রাণগতিক পুরাণগ্রন্থ প্রাণঘাতী প্রাণাতিপাত প্রাণাত্যয় পুরাণাদি প্রাণাধিক প্রাণাধিকা প্রাণান্ত প্রাণান্তকর প্রাণান্তপরিচ্ছেদ প্রাণায়াম প্রাণায়ামাদি পরাণি প্রাণিজগৎ প্রাণিত প্রাণিতত্ত্ব প্রাণিবিদ্যা প্রাণিহিংসা প্রাণী প্রাণীকুল প্রাণচাঞ্চল্য প্রাণীজ প্রাণীজগৎ প্রাণীজাত প্রাণচঞ্চল প্রাণীযুক্ত প্রাণীতত্ত্ব প্রাণীদেহ প্রাণীবিজ্ঞান প্রাণীবিজ্ঞানী প্রাণীবিদ্যা প্রাণীবধ প্রাণীবর্গ প্রাণীরাজ্য প্রাণীহিংসা প্রাণীহত্যা প্রাণেমারা প্রাণেশ প্রাণেশ্বর পুরাণোক্ত প্রাণোচ্ছল প্রাণোৎসর্গ প্রাণজুড়ানো প্রাণজুড়নো প্রাণযুক্ত প্রাণঢালা প্রাণত্যাগ প্রাণতুল্য প্রাণথাকা প্রাণদ প্রাণদা প্রাণদাতা প্রাণদাত্রী প্রাণদান প্রাণদায়িনী প্রাণদায়ী প্রাণদণ্ড প্রাণধারণ প্রাণন প্রাণনাথ প্রাণনাশ প্রাণপাখি প্রাণপাখী প্রাণপাত প্রাণপণ প্রাণপতি প্রাণপ্রাচুর্য প্রাণপ্রিয় প্রাণপ্রিয়া প্রাণপূর্ণ প্রাণপ্রতিম প্রাণপ্রতিষ্ঠা প্রাণপ্রদ পুরাণপুরুষ প্রাণপুরুষ পুরাণপ্রসিদ্ধি প্রাণবান প্রাণবায়ু প্রাণবিমোহন প্রাণবিসর্জন প্রাণবিয়োগ পুরাণবেত্তা প্রাণবধ প্রাণবঁধু প্রাণবন্ত প্রাণবল্লভ প্রাণভর প্রাণভয় প্রাণমাতানো পুরাণমতে প্রাণময় প্রাণময়ী প্রাণময়তা পুরাণরচয়িতা প্রাণরোধ প্রাণরসায়ন প্রাণশক্তি প্রাণশক্তিপূর্ণ প্রাণশীল প্রাণশূন্য প্রাণশূন্যা প্রাণসংকট প্রাণসংশয় প্রাণসংহার প্রাণসখা প্রাণসঙ্কট পুরাণসঙ্গীত প্রাণসঞ্চার প্রাণসঞ্চারক প্রাণস্পন্দন প্রাণসম প্রাণহানি প্রাণহারক প্রাণহারিকা প্রাণহারিণী প্রাণহারী প্রাণহীন প্রাণহীনা প্রাণহীনতা প্রাণহন্তা প্রাণহন্ত্রী প্রাণহর প্রাণহরা পরাত প্রাত প্রাতঃ প্রাতঃকাল প্রাতঃকালীন প্রাতঃকৃত্য প্রাতঃক্রিয়া প্রাতঃক্রিয়াদি প্রাতঃপ্রণাম প্রাতঃভ্রমণ প্রাতঃস্নান প্রাতঃসন্ধ্যা প্রাতঃস্মরণীয় পুরাতাত্ত্বিক পরাতাম প্রাতিকূল্য প্রাতিপদিক প্রাতিভাসিক প্রাতিষ্ঠানিক প্রাতিষ্ঠানিকতা প্রাতিষ্ঠানিকভাবে পরাতিস প্রাতিস্বিক প্রাতিহার প্রাতিহারক প্রাতিহারিক পরাতে পরাতেন পরাতেম প্রাত্যহিক প্রাত্যহিকী পুরাতত্ত্ব পুরাতত্ত্ববিদ পুরাতত্ত্ববিদ্যা পুরাতন পুরাতনী পরাৎপর পরাৎপরা পরাতুম প্রাতরাশ প্রাতর্ভোজন প্রাতর্ভ্রমণ প্রাথমিক প্রাথমিকভাবে প্রাথমিকলক্ষণ প্রাদি প্রাদিসমাস প্রাদেশিক প্রাদেশিকতা প্রাদেশীয় প্রাদুর্ভাব প্রাদুর্ভাবপূর্ণ প্রাদুর্ভূত পুরাদস্তুর প্রাধান্য প্রাধান্যযুক্ত প্রাধান্যদান প্রাধান্যপূর্ণ প্রাধান্যভিত্তিক প্রাধান্যহীনতা পরাধিকার পরাধীন পরাধীনা পরাধীনতা পুরাধ্যক্ষ পরান পুরানা পরানি পরানো পুরানো পূরানো প্রান্ত প্রান্তিক প্রান্তিকতাবাদ প্রান্তিকতাবাদী প্রান্তীয় প্রান্তদেশ প্রান্তদেশীয় প্রান্তবিন্দু প্রান্তবিন্দুদ্বয় প্রান্তবর্তী প্রান্তভাগ প্রান্তর প্রান্তরাভিমুখ প্রান্তরেখা প্রান্তসীমা প্রান্তস্থ প্রান্তস্থিত পরান্ন পরান্নজীবী পরান্নপুষ্ট পরান্নভোজী পরান্নভোজন পরান্নভোজনকারী পরানবঁধু প্রাপক প্রাপিত প্রাপ্য প্রাপ্যতা প্রাপ্যরূপ প্রাপণ প্রাপ্ত প্রাপ্তকাল প্রাপ্তি প্রাপ্তিযোগ প্রাপ্তিযোগ্য প্রাপ্তিসংবাদ প্রাপ্তিসাধ্য প্রাপ্তিস্থান প্রাপ্তিস্বীকার প্রাপ্তিস্বীকারপত্র প্রাপ্তযৌবন প্রাপ্তযৌবনা প্রাপ্তধন প্রাপ্তব্য প্রাপ্তব্যবহার প্রাপ্তব্যভিত্তিক প্রাপ্তবয়স প্রাপ্তবয়স্ক প্রাপ্তবয়স্কা পুরাপুরি পরাব প্রাবাদিক পরাবার প্রাবার প্রাবাসিক পরাবাস্তববাদী পরাবি পুরাবিৎ প্রাবীণ্য পরাবে পরাবেন প্রাবেশন পরাবো প্রাবৃট প্রাবৃত পরাবৃত্ত পুরাবৃত্ত পরাবৃত্তাকার পরাবৃত্তি পরাবৃত্তীয় প্রাবরণ পরাবর্ত পরাবর্তিত পরাবর্তন প্রাবল্য প্রাবল্যজনিত প্রাবৃষ প্রাবৃষিক প্রাবৃষ্য প্রাভাতিক পরাভূত পরাভূতা পরাভব পরাভবস্বীকার প্রামাণিক প্রামাণিকতা প্রামাণ্য প্রামাণ্যচিত্র প্রামাদিক পরামানিক পরামর্শ পরামর্শক পরামর্শক্রমে পরামর্শগ্রহণ পরামর্শদাতা পরামর্শদাত্রী পরামর্শদান পরামর্শদানকারী পরামর্শপূর্বক পরামর্ষ পরার পুরারি পরার্থ প্রার্থক প্রার্থিকা প্রার্থিত পরার্থিতা প্রার্থিতা প্রার্থিনী প্রার্থী পরার্থে প্রার্থন প্রার্থনা প্রার্থনাকারী প্রার্থনাকাল প্রার্থনাকেন্দ্র প্রার্থনাগৃহ প্রার্থনাবাক্য প্রার্থনারত প্রার্থনীয় পরার্থপর পরার্থপরতা পরার্থবাদ প্রার্থয়িতা প্রার্থয়িতব্য প্রার্থয়িত্রী পরার্ধ প্রারব্ধ প্রারম্ভ প্রারম্ভকালীন প্রারম্ভিক প্রারম্ভিকতা পরাল পরালাম পরালি পরালে পরালেন পরালেম পরালুম পরাশক্তি প্রাশন প্রাশ্নিক পরাশর পরাশ্রিত পরাশ্রিতা পরাশ্রয় পরাশ্রয়ী প্রাশস্ত্য পরাস প্রাস প্রাসঙ্গিক প্রাসঙ্গিকতা প্রাসাদ প্রাসাদকুক্কুট প্রাসাদকূট প্রাসাদোপম প্রাসাদমস্তক পরাস্ত প্রাস্থানিক পরাহ পরাহ্ণ প্রাহ্ণ পরাহত প্রাহরিক প্রাহসনিক প্রায় প্রায়ক্ষেত্র প্রায়ান্ধকার প্রায়িক প্রায়োগিক প্রায়োপবিষ্ট প্রায়োপবেশ প্রায়োপবেশন প্রায়োরিটি পরায়ণ পরায়ণা পরায়ত্ত প্রায়শ প্রায়শই প্রায়শ্চিত্ত প্রায়সমস্ত প্রায়সময় পরি পুরি পূরিকা পরিকীর্ণ পরিকীর্তিত পরিকীর্তন পরিকেন্দ্র পরিকর পরিকর্তা পরিকর্ম পরিক্রম পরিক্রমকাল পরিকর্মা পরিক্রমা পরিক্রমণ পরিক্রমণকারী পরিক্রমণান্ত পরিক্রমণীয় পরিক্লিষ্ট পরিকল্প পরিকল্পক পরিকল্পিত পরিকল্পিতভাবে পরিকল্পন পরিকল্পনা পরিকল্পনাকারী পরিকল্পনাবিদ পরিকল্পনাবহির্ভূত পরিকল্পয়িতা পরিক্ষিত পরিক্ষিৎ পরিক্ষিপ্ত পরিক্ষীণ পরিক্ষীয়মাণ পরিক্ষেপ পরিক্ষেপক পরিক্ষেপকারী পরিখই পরিখা পরিখীকৃত পরিখেঁ পরিখ্যাত পরিখসি পরিখসে পরিগণক পরিগণিত পরিগণিতা পরিগণন পরিগণনা পরিগম পরিগ্রাহক পরিগ্রাহিকা পরিগ্রহ পরিগ্রহকারী পরিগৃহীত পরিঘ পরিঘাত পরিঘাতন পরিঘোষ পরিচারক পরিচারিকা পরিচারণ পরিচালক পরিচালকবৃন্দ পরিচালিকা পরিচালিত পরিচালন পরিচালনা পরিচালনাকারী পরিচালনাধীন পরিচায়ক পরিচায়িকা পরিচিত পরিচিতা পরিচিতি পরিচিতিপ্রাপ্ত পরিচিন্তিত পরিচিন্তন পরিচেয় পরিচ্ছেদ পরিচ্ছদ পরিচ্ছন্ন পরিচ্ছন্নতা পরিচ্যুত পরিচর পরিচর্যা পরিচর্যাকারিণী পরিচর্যাকারী পরিচলন পরিচয় পরিচয়কারী পরিচয়জ্ঞাপক পরিচয়দাতা পরিচয়দান পরিচয়দানকারী পরিচয়পত্র পরিচয়পর্ব পরিচয়বাহী পরিচয়বোধ পরিজ পরিজ্ঞাত পরিজ্ঞান পরিজন প্রিজন প্রিজনার প্রিজম পরিযান পরিযায়ী প্রিটেস্ট পরিণাম পরিণামদর্শিতা পরিণামদর্শী পরিণামদর্শন পরিণামদর্শনী পরিণাহ পরিণীত পরিণীতা পরিণেতা পরিণেয় পরিণত পরিণতি পরিণতবুদ্ধি পরিণতবয়স্ক পরিণদ্ধ পরিণয় পরিণয়ন পরিণয়সূত্র পরিত পুরিত পূরিত পরিতাপ পরিতাম পুরিতাম পরিতিস পুরিতিস পরিতে পুরিতে পরিতেছ পুরিতেছ পরিতেছি পুরিতেছি পরিতেছিল পুরিতেছিল পরিতেছিলাম পুরিতেছিলাম পরিতেছিলি পুরিতেছিলি পরিতেছিলে পুরিতেছিলে পরিতেছিলেন পুরিতেছিলেন পরিতেছিস পুরিতেছিস পরিতেছে পুরিতেছে পরিতেছেন পুরিতেছেন পরিতেন পুরিতেন পরিতোষ পরিত্যক্ত পরিত্যক্তা পরিত্যাগ পরিত্যাজ্য পরিত্যাজ্যা পরিত্যজন পরিত্তান পরিতপ্ত পরিতৃপ্ত পরিতৃপ্তি প্রিতম পরিত্রাণ পরিত্রাণকারী পরিত্রাণলাভ পরিত্রাতা পরিত্রাহি পরিতুষ্ট পরিতুষ্টা পরিতুষ্টি পরিদেবন পরিদেবনা পরিদর্শক পরিদর্শী পরিদর্শন পরিদর্শনকারী পরিদৃশ্যমান পরিদৃষ্ট পরিধান পরিধানকারী পরিধানযোগ্য পরিধায়ী পরিধি পরিধিমাপক পরিধিরেখা পরিধিস্থ পরিধিস্থিত পরিধেয় পরিনি পরিনির্বাণ প্রিন্ট প্রিন্টার প্রিন্টার্স প্রিন্টিং প্রিন্টিংপ্রেস প্রিন্টেড প্রিন্স প্রিন্সিপাল প্রিন্সিপ্যাল প্রিন্সেস পরিপৃক্ত পরিপৃক্তি পরিপক্ব পরিপক্বতা পরিপাক পরিপাকতন্ত্র পরিপাকনালী পরিপাকশক্তি পরিপাকসাধ্য পরিপাটি পরিপাটিভাবে পরিপাটিরূপ পরিপাটী পরিপার্শ্ব পরিপার্শ্বিক পরিপালক পরিপালিত পরিপালন পরিপোষক পরিপোষিত পরিপোষণ পরিপত্র পরিপন্থী পরিপূরক পরিপূরকভাবে পরিপ্রেক্ষিত পরিপূরণ পরিপূর্ণ পরিপূর্ণকারী পরিপূর্ণা পরিপূর্ণতা পরিপূর্ণভাবে পরিপূর্তি প্রিপ্রসেসর পরিপূরয়ে পরিপ্লুত পরিপ্লুতি পরিপ্লব পরিপ্লবা পরিপ্লবন পরিপুষ্ট পরিপুষ্টা পরিপুষ্টি পরিপুষ্টতা পরিব পুরিব পরিবাদ পরিবাদক পরিবাদিনী পরিবাদী পরিবার পুরিবার পরিবারতন্ত্র পরিবারপালন পরিবারপরিকল্পনা পরিবারপরিজন পরিবারবর্গ পরিবারভুক্ত পরিবাহক পরিবাহকত্ব পরিবাহিত পরিবাহিতা পরিবাহী পরিবাহন পরিবি পুরিবি পরিবে পুরিবে পরিবেত্তা পরিবেদন পরিবেদনা পরিবেন পুরিবেন পরিবেশ পরিবেশক পরিবেশগত পরিবেশিত পরিবেশযুক্ত পরিবেশন পরিবেশনকারী পরিবেশনা পরিবেশনির্ভর পরিবেশপরিস্থিতি পরিবেশবাদী পরিবেশবিজ্ঞান পরিবেশবিদ্যা পরিবেশভেদ পরিবেশসম্মত পরিবেষ পরিবেষ্টিত পরিবেষ্টিতা পরিবেষ্টন পরিবেষ্টনকারী পরিবেষ্টনী পরিবেষণ পরিবেষণকারী পরিব্যাপক পরিব্যাপ্ত পরিব্যাপ্তি পরিবৃত পরিবৃত্ত পরিবৃত্তি পরিবন্ধ পরিব্রাজক পরিব্রাজিকা পরিব্রাজন পরিবর্জিত পরিব্রজ্যা পরিবর্জন পরিব্রজন পরিবর্জনকারী পরিবর্ত পরিবর্তক পরিবর্তিত পরিবর্তী পরিবর্তন পরিবর্তনকারী পরিবর্তনকাল পরিবর্তনকরণ পরিবর্তনীয় পরিবর্তনীয়তা পরিবর্তনযোগ্য পরিবর্তনবিমুখ পরিবর্তনবিরোধী পরিবর্তনশীল পরিবর্তনশীলতা পরিবর্তনহীন পরিবর্তমান পরিবর্ধক পরিবর্ধিত পরিবর্ধন পরিবর্ধনকারী পরিবহণ পরিবহণকারী পরিবহণশক্তি পরিবহন পরিবহনকারী পরিবহননালী পরিভুক্ত পরিভঙ্গ পরিভাবা পরিভাবিল পরিভাষা পরিভাষাকোষ পরিভাষাগত পরিভাষিত প্রিভিকাউন্সিল প্রিভিলেজপ্রাপ্ত প্রিভেনশন পরিভোগ পরিভূত পরিভৃতি পরিভব পরিভ্রমণ পরিভ্রমণকারী পরিভ্রমণপথ পরিভ্রমণরত পরিভ্রষ্ট পরিমাণ পরিমাণগত পরিমাণযোগ্য পরিমাণনির্ধারণ পরিমাণফল পরিমাণবাচক পরিমাণবোধ পরিমাণমাপক পরিমাপ পরিমাপক পরিমাপকারী পরিমাপকৃত পরিমাপগত পরিমাপযোগ্য পরিমাপণ পরিমাপনির্ধারণ পরিমাপবিদ্যা পরিমার্জিত পরিমার্জন পরিমার্জনা প্রিমিটিভ পরিমিত পরিমিতি পরিমিতিবোধ পরিমিততা পরিমিতপদ পরিমিতভাবে প্রিমিয়াম প্রিমিয়ার প্রিমিয়ারলীগ পরিমেল পরিমেলবন্ধ পরিমেয় পরিমোক্ষ পরিমণ্ডিত পরিমণ্ডল পরিমল পরিম্লান পরিরক্ষিত পরিরক্ষণ পরিরম্ভ পরিরম্ভণ পরিল পুরিল পরিলক্ষিত পরিলাম পুরিলাম পরিলি পুরিলি পরিলিখিত পরিলে পুরিলে পরিলেখ পরিলেন পুরিলেন পরিশিষ্ট পরিশীলিত পরিশীলন পরিশীলনী পরিশেষ পরিশোধ পরিশোধিত পরিশোধিতব্য পরিশোধ্য পরিশোধযোগ্য পরিশোধন পরিশোধনীয় পরিশুদ্ধ পরিশুদ্ধি পরিশুদ্ধতা পরিশ্রান্ত পরিশ্রান্তি পরিশ্রুতি পরিশ্রম পরিশ্রমকারী পরিশ্রমী পরিশ্রমজনিত পরিশ্রমলব্ধ পরিশ্রমসাধ্য পরিশ্রমসহকার পরিশ্লেষ পরিশুষ্ক পরিশুষ্কতা পরিষ্কার পরিষ্কারক পরিষ্কারকরণ পরিষ্কারপরিচ্ছন্ন পরিষ্কারপরিচ্ছন্নতা পরিষ্কারভাবে পরিষ্কৃত পরিষ্করণ পরিষেক পরিষেবক পরিষেবা পরিষেবিকা পরিষৎ পরিষদ পরিস পুরিস পরিসংখ্যা পরিসংখ্যাত পরিসংখ্যান পরিসংখ্যানকর্ম পরিসংখ্যানিক পরিসংখ্যানবিদ পরিসংখ্যায়ক পরিসাজ পরিসীমা পরিসেবক পরিসেবা পরিসেবিকা পরিস্থিতি পরিস্থিতিনির্ভর পরিস্থিতিভেদে পরিস্ফুট পরিস্ফুটিত পরিস্ফুটন পরিস্ফুটভাবে পরিসভ্য পরিসমাপ্ত পরিসমাপ্তি পরিসম্পৎ পরিসম্পদ পরিসম্পদকোষ পরিসর পরিস্রাবণ পরিস্রুত পরিস্রুতি পরিসরম পরিসুস্থ পরিহার পরিহার্য পরিহারযোগ্য পরিহাস পরিহাসক পরিহাস্য পরিহাসযুক্ত পরিহিত পরিহিতা পরিহৃত পরিহরা পরিহরণ পরিহরণীয় পরিহর্তব্য পরিহসি পরিহসনীয় পরিহসনীয়া প্রিয় প্রিয়ংবদ প্রিয়ংবদা প্রিয়ংবদে প্রিয়কারক প্রিয়কারিণী প্রিয়কারী প্রিয়ঙ্কর প্রিয়ঙ্করী প্রিয়ঙ্গু প্রিয়ঙ্গুলতা পরিয়া পুরিয়া প্রিয়া প্রিয়াঙ্কা পরিয়াছ পুরিয়াছ পরিয়াছি পুরিয়াছি পরিয়াছিল পুরিয়াছিল পরিয়াছিলাম পুরিয়াছিলাম পরিয়াছিলি পুরিয়াছিলি পরিয়াছিলে পুরিয়াছিলে পরিয়াছিলেন পুরিয়াছিলেন পরিয়াছিস পুরিয়াছিস পরিয়াছে পুরিয়াছে পরিয়াছেন পুরিয়াছেন প্রিয়চিকীর্ষু প্রিয়চিকীর্ষা পরিয়ে প্রিয়ে পরিয়েছ পরিয়েছি পরিয়েছিল পরিয়েছিলাম পরিয়েছিলি পরিয়েছিলে পরিয়েছিলেন পরিয়েছিলেম পরিয়েছিলুম পরিয়েছিস পরিয়েছে পরিয়েছেন পরিয়ো পুরিয়ো প্রিয়জন প্রিয়তা প্রিয়তম প্রিয়তমা প্রিয়দর্শিনী প্রিয়দর্শী প্রিয়দর্শন প্রিয়নাটক প্রিয়নাশ পরিয়ন্ত প্রিয়পাত্র প্রিয়পাত্রী প্রিয়বাক্য প্রিয়বাদিনী প্রিয়বাদী প্রিয়বিয়োগ প্রিয়বচন প্রিয়ভাজন প্রিয়ভাষিণী প্রিয়ভাষী প্রিয়মাত্র প্রিয়মিলন প্রিয়রঞ্জন প্রিয়সখ প্রিয়সখা প্রিয়সখী প্রিয়সমাগম প্রিয়সম্বোধন পরী পুরী পূরী পরীক্ষক পরীক্ষা পরীক্ষাকারী পরীক্ষাকালীন পরীক্ষাকেন্দ্র পরীক্ষাগার পরীক্ষাগ্রহণকারী পরীক্ষাগৃহ পরীক্ষাধীন পরীক্ষানিরীক্ষা পরীক্ষাপূর্বক পরীক্ষার্থিনী পরীক্ষার্থী পরীক্ষালব্ধ পরীক্ষাশেষ পরীক্ষাসাপেক্ষ পরীক্ষিত পরীক্ষিৎ পরীক্ষোত্তীর্ণ পরীক্ষণ পরীক্ষণীয় পরীক্ষণযোগ্য পরচা পর্চা পরচার প্রচার প্রচারক প্রচারকারী প্রচারকার্য প্রচারাভিযান পরচারি প্রচারিত প্রচার্য প্রচারযোগ্য প্রচারযন্ত্র প্রচারণ প্রচারণা প্রচারণাপত্র প্রচারপত্র প্রচারবেদী প্রচারবৈমুখ্য প্রচারমাধ্যম প্রচারস্বত্ত্ব পরচাল পরচালা প্রচায় প্রচিত প্রচীয়মান প্রচেতা প্রচেষ্টা প্রচেষ্টারত প্রচ্ছাদিত প্রচ্ছাদন প্রচ্ছায় প্রচ্ছায়া পরচ্ছিদ্র পরচ্ছিদ্রান্বেষী পরচ্ছিদ্রান্বেষণ প্রচ্ছদ প্রচ্ছদকাহিনী প্রচ্ছদপট পরচ্ছন্দ পরচ্ছন্দানুবর্তী পরচ্ছন্দানুসারী প্রচ্ছন্ন প্রচ্ছন্নতা প্রচ্ছন্নবেশ প্রচ্ছন্নভাবে পরীণাহ প্রচণ্ড প্রচণ্ডতা প্রচণ্ডমূর্তি প্রীণন পরীত প্রীত প্রীতি প্রীতিউৎপাদক প্রীতিউপহার প্রীতিকর প্রীতিজ্ঞাপক প্রীতিজনক প্রীতিযুক্ত প্রীতিদায়িনী প্রীতিনিলয় প্রীতিপদ প্রীতিপ্রদ প্রীতিপূর্বক প্রীতিভাজন প্রীতিভাবাপন্ন প্রীতিভোজ প্রীতিভোজন প্রীতিভরে প্রীতিলতা প্রীতিসাধন প্রীতিসম্পাদন প্রীতিসম্ভাষণ প্রীতিসম্মেলন প্রীতম পুরীধাম পরীধরা পরীবাদ পরীবিবি প্রচুর প্রচুরক পরচর্চা প্রচুরতা প্রচুরসংখ্যক পরচুল পুরীল প্রচল পরচুলা প্রচলিত পরচুলো প্রচলন পুরীষ প্রচয় প্রীয়মাণ পরে পুরে প্রেক্ষক প্রেক্ষা প্রেক্ষাগার প্রেক্ষাগৃহ প্রেক্ষাপট প্রেক্ষিকা প্রেক্ষিত প্রেক্ষণ প্রেক্ষণিক প্রেক্ষণীয় প্রেগন্যান্ট পুরো প্রোগ্রাম পরেছ পুরেছ পরেছি পুরেছি পরেছিল পুরেছিল পরেছিলাম পুরেছিলাম পরেছিলি পুরেছিলি পরেছিলে পুরেছিলে পরেছিলেন পুরেছিলেন পরেছিলেম পুরেছিলেম পরেছিলুম পুরেছিলুম পরেছিস পুরেছিস পরেছে পুরেছে পরেছেন পুরেছেন প্রৌঢ় প্রেজেন্টেশন প্রেজেন্টস প্রেজেন্স প্রেজুডিস পরেটা প্রেডিকশন প্রেত প্রেতকার্য প্রেতকৃত্য প্রেতক্রিয়া প্রেতকর্ম প্রেতাত্মা প্রেতাশৌচ প্রেতিনি প্রেতিনী প্রেতজন্ম প্রেতযোনি প্রেততর্পণ প্রেতদেহ প্রেতনদী প্রেতপক্ষ প্রেতপুরী প্রেতপুরুষ প্রেতমূর্তি প্রেতলোক প্রেতসাধনা প্রেতসিদ্ধ প্রেতস্তব্ধ পরেন পুরেন পরেননা পরেপরে প্রেপ্সু প্রেম প্রেমকাহিনী প্রেমানন্দ প্রেমাবতার প্রেমারা প্রেমালাপ প্রেমাসক্ত প্রেমিক প্রেমিকা প্রেমী প্রেমচাঁদ প্রেমেজরজর প্রেমেজর্জর প্রেমেন্দ্র প্রেমোদগম প্রেমোপাখ্যান প্রেমযুক্ত প্রেমদাস প্রেমপাত্র প্রেমপত্র প্রেমপ্রীতি প্রেমবান প্রেমবতী প্রেমভক্তি প্রেমভালবাসা প্রেমমূলক প্রেমময় প্রেমসংগীত প্রেমহীন পরের প্রেরক প্রেরকযন্ত্র প্রেরিকা প্রেরিত প্রেরণ প্রেরণকারী প্রেরণা প্রেরণাদান প্রেরণাদানকারী প্রেরণাদায়ক প্রেরণাপ্রাপ্ত প্রেরণার্থক প্রেরণাস্থল প্রেরণীয় পরেরদিন প্রেরয়িতা প্রেরয়িত্রী পরেশ প্রেশার প্রেশারকুকার পরেশনাথ প্রেষ প্রেষক প্রেষিকা প্রেষিণী প্রেষিত প্রেষিতা প্রেষ্য প্রেষ্যা প্রেষ্ঠ প্রেষ্ঠা প্রেষণ প্রেষণকারী প্রেষণা প্রেষণী প্রেষণীয় প্রেস প্রেসক্রিপশন প্রেসক্লাব প্রেসিং প্রেসিডেন্ট প্রেসিডেন্সি প্রেসিডেন্সিয়াল প্রেসিডেন্সী প্রেস্টিজ প্রেয় প্রেয়সী প্রৈষ্য পরো পুরো প্রোক্টর প্রোক্ত পরোক্ষ প্রোক্ষণ পরোক্ষতা পরোক্ষভাবে পরোখ পুরোগ পুরোগামী পুরোগত প্রোগ্রাম প্রোগ্রামার প্রোগ্রামিং প্রোগ্রামস প্রোগ্রামসমষ্টি প্রোগ্রেস প্রোগ্রেসিভ প্রোজেক্ট প্রোজেক্টর প্রোজ্জ্বল প্রোটকল পরোটা পুরোটা পুরোযায়ী প্রোটিন প্রোটেকশন প্রোটোকল প্রোটোজোয়া প্রোটোটাইপ প্রোটন প্রোডাক্ট প্রোডাক্টিভিটি প্রোডাক্টস প্রোডাকশন পুরোডাশ প্রোডিউসার প্রোত প্রোৎসাহ প্রোৎসাহক প্রোৎসাহিত প্রোৎসাহিতা প্রোৎসাহন প্রোথিত প্রোদ্ভিন্ন পুরোধা পুরোনাম প্রোন্নত পরোপকার পরোপকারক পরোপকারিণী পরোপকারিতা পরোপকারী পরোপকাররূপ পরোপকৃত প্রোপাগান্ডা প্রোপানয়িক প্রোপার্টি পরোপচিকীর্ষা প্রোপেলার পরোপজীবী পরোপজীব্য প্রোপ্যাগান্ডা পুরোপুরি পুরোপুরিভাবে প্রোফাইল প্রোফেজ প্রোফেসার প্রোফেসর পুরোবর্তী পুরোভাগ প্রোভিটামিন পুরোভূমি পুরোমাত্রা প্রোমোশন পুরোমস্তিষ্ক পরোশা প্রোষিত প্রোষিতা প্রোষিতপত্নীক প্রোষিতভার্য প্রোষিতভর্তৃকা প্রোসেসিং প্রোস্টেট পুরোহিত পুরোহিতগিরি পরোঢ়া পরোয়া পরোয়ানা পরোয়ানাবিহীন পূরোয়িতা পরছ পুরছ পরছি পুরছি পরছিল পুরছিল পরছিলাম পুরছিলাম পরছিলি পুরছিলি পরছিলে পুরছিলে পরছিলেন পুরছিলেন পরছিলেম পুরছিলেম পরছিলুম পুরছিলুম পরছিস পুরছিস পরছে পুরছে পরছেন পুরছেন প্রৌঢ় প্রৌঢ়া প্রৌঢ়তা প্রৌঢ়ত্ব প্রছন্ন প্রৌঢ়নিবাস পরজ প্রজ প্রজা প্রজাকুল প্রজাতান্ত্রিক প্রজাতি প্রজাতিভুক্ত প্রজাতিভেদে প্রজাতন্ত্র প্রজাতন্ত্রী প্রজাপালন প্রজাপীড়ন প্রজাপুঞ্জ প্রজাপতি প্রজাবতী প্রজাবৎসল প্রজাবৃদ্ধি প্রজারঞ্জক প্রজারঞ্জন প্রজাশক্তি প্রজাশাসন প্রজাসাধারণ প্রজাস্বার্থবিরোধী প্রজাস্বত্ব প্রজায়িনী পরজীবী পরজীবীবিজ্ঞান প্রজেক্ট প্রজেক্টস প্রজেকশন প্রজেকশনিস্ট পর্জ্জন্য প্রজ্ঞ প্রজ্ঞা প্রজ্ঞাচক্ষু প্রজ্ঞাত প্রজ্ঞান প্রজ্ঞাপক প্রজ্ঞাপারমিত প্রজ্ঞাপারমিতা প্রজ্ঞাপন প্রজ্ঞাপনতা প্রজ্ঞাবান প্রজ্ঞাবতী প্রজ্ঞাসম্পন্ন প্রজন প্রজনিকা পর্জন্য প্রজনন প্রজননতন্ত্র প্রজননশীল পরজন্ম প্রজন্ম প্রজন্মান্তর প্রজ্বালক প্রজ্বালিকা প্রজ্বালিত প্রজ্বালন পরজবাহার পরজবাহাররাগ প্রজ্বলিত প্রজ্বলন প্রজ্বলনযোগ্য প্রজ্বলন্ত পরজরাগ পরঞ্জয় পুরযুক্ত প্রযুক্ত প্রযুক্তি প্রযুক্তিগত প্রযুক্তিনির্ভর প্রযুক্তিবিদ প্রযুক্তিবিদ্যা প্রযুক্তিমনা পর্যঙ্ক পর্যঙ্কবন্ধ পরটা প্র্যাকটিস পর্যাকুল পর্যাটক পর্যাটন পর্যাণ পর্যাপ্ত পর্যাপ্তি পর্যাপ্ততা পর্যাপ্তসংখ্যক পর্যাবৃত্ত পর্যাবৃত্তি পর্যালোচক পর্যালোচিত পর্যালোচন পর্যালোচনা পর্যালোচনাকারী পর্যাস পর্যায় পর্যায়কাল পর্যায়ক্রমিক পর্যায়ক্রমিকভাবে পর্যায়ক্রমে পর্যায়চ্যুতি পর্যায়ভুক্ত পর্যায়ভেদ পর্যায়সারণী প্রটেক্ট প্রটেকশন পর্যেষণ পর্যেষণা প্রটেস্টাণ্ট প্রটেস্টান্ট প্রযোক্তা প্রটোকল প্রযোজক প্রযোজিত প্রটোজোয়া প্রযোজ্য প্রযোজ্যক প্রযোজনা প্রযোজনাকারী প্রযুজ্যমান পর্যটক পর্যটকমহল পর্যটিকা পর্যটন পর্যটনকারী পর্যটনকেন্দ্র পর্যটনশিল্প প্রযত প্রযত্ন প্রযত্নকারী পর্যুৎসক পর্যুদাস পর্যুদস্ত পর্যন্ত পর্যবেক্ষক পর্যবেক্ষিকা পর্যবেক্ষিত পর্যবেক্ষণ পর্যবেক্ষণকাজ পর্যবেক্ষণকারী পর্যবেক্ষণকৃত পর্যবেক্ষণিক পর্যবেক্ষণিকা পর্যবেক্ষণীয় পর্যবেক্ষণযোগ্য পর্যবেক্ষণলব্ধ পর্যবেক্ষণসম্ভব পর্যবসান পর্যবসিত পর্যুষিত পর্যুসিত পর্যস্ত পর্যসন প্রডাক্ট প্রডাক্টস প্রডাকশন প্রডিউসার পর্ণ পূরণ পূর্ণ পূর্ণকাম পর্ণকার পূর্ণকারক পূরণকারী পূর্ণকারী পূর্ণকালীন পর্ণকুটির পূর্ণকুম্ভ পূর্ণগঠন পূর্ণগ্রাস পূর্ণগর্ভা পূর্ণা পূর্ণানন্দ পূর্ণাবতার পূর্ণাবয়ব পরণাম প্রণাম প্রণামকাল প্রণামি প্রণামী প্রণামপূর্বক প্রণালি প্রণালী প্রণালীগত প্রণালীবদ্ধ প্রণালীবদ্ধভাবে প্রণালীভিত্তিক প্রণালীসম্মত প্রণাশ পূর্ণাহুতি পূর্ণায়ু পর্ণিক প্রণিধান প্রণিধানযোগ্য প্রণিধি প্রণিপাত পূর্ণিমা পূর্ণিমাতিথি পূর্ণিমারাত পূর্ণিমারচাঁদ প্রণিহিত পর্ণী পূর্ণচক্র পূর্ণচ্ছেদ প্রণীত পূর্ণচন্দ্র পূরণীয় প্রণেতা প্রণেত্রী পূর্ণেন্দু প্রণোদিত পূর্ণোদ্দমে প্রণোদন প্রণোদনা পূর্ণোপমা পূর্ণজ্ঞান পূর্ণযৌবনা পূর্ণযৌবনপ্রাপ্ত পূর্ণযুবতী প্রণত পূর্ণতা পূর্ণতাপ্রাপ্তি পূর্ণতারোধক পূর্ণতাসাধক প্রণতি পূর্ণতৃপ্তি পূর্ণত্ব পূর্ণদাস পূর্ণদায়িত্ব পূর্ণদৈর্ঘ্য পূরণধারা পূর্ণনাম পূর্ণপক্ব পর্ণপুট প্রণব পূরণবাচক পূর্ণবিকাশ পর্ণবীথিকা পূর্ণবর্গ প্রণবরূপা পূর্ণব্রহ্ম পূর্ণবয়স পূর্ণবয়স্ক পূর্ণবয়স্কা পূর্ণভাব পর্ণমৃগ পূর্ণমাত্রা পূর্ণমান পূর্ণমাসী পর্ণমোচী পর্ণমোচন পূর্ণমন্ত্রী পূর্ণরূপ পর্ণশালা পূর্ণশোষী পর্ণশয্যা পর্ণশবরী পূর্ণসংখ্যক পূর্ণসংখ্যা পূরণহেতু প্রণয় প্রণয়কাব্য প্রণয়কাব্যধারা প্রণয়কাহিনী প্রণয়কলহ প্রণয়াকাঙ্ক্ষা প্রণয়াদি প্রণয়াদিজনিত প্রণয়িনী প্রণয়ী প্রণয়চাতুর্য প্রণয়ীপ্রণয়িনী প্রণয়োপাখ্যান প্রণয়জনিত প্রণয়যুক্ত প্রণয়ডোর প্রণয়ন প্রণয়নকারী প্রণয়পূর্ণ প্রণয়বিধুরা প্রণয়ভঙ্গ প্রণয়ভাজন প্রণয়শালিনী প্রণয়শালী পরত পুরত পুরুত পূর্ত পূর্তকার্য পর্তুগাল পর্তুগিজ পর্তুগীজ প্রতান পরতাপ প্রতাপ প্রতাপগড় প্রতাপাদিত্য প্রতাপান্বিত প্রতাপী প্রতাপচন্দ্র প্রতাপযুক্ত প্রতাপশালী প্রতাপসিংহ প্রতাপসম্পন্ন পরতাম পুরতাম প্রতারক প্রতারিত প্রতারিতা প্রতারণ প্রতারণা প্রতারণাকারী প্রতারণাপূর্ণ প্রতারণাময় পরতাল পূর্তি প্রতি প্রতিকার প্রতিকারক প্রতিকারকারী প্রতিকার্য প্রতিকারপ্রার্থনা প্রতিকারসাধন প্রতিকাশ প্রতিকায় প্রতিকায়িত প্রতিকণা প্রতিকণিকা প্রতিকৃত প্রতিকৃতি প্রতিক্রিয়া প্রতিক্রিয়াশীল প্রতিকরণীয় প্রতিকর্তা প্রতিকর্ম প্রতিক্রম প্রতিকর্ষ প্রতিকূল প্রতিকূলগামী প্রতিকূলতা প্রতিকূলতাপূর্ণ প্রতিক্ষেত্র প্রতিক্ষণ প্রতিগমন প্রতিগ্রাহ প্রতিগ্রাহিত প্রতিগ্রাহী প্রতিগ্রাহ্য প্রতিগ্রহ প্রতিগ্রহীতা প্রতিগ্রহণ প্রতিগ্রহণীয় প্রতিগৃহীত প্রতিঘাত প্রতিঘাতিনী প্রতিঘাতী প্রতিঘর প্রতিচক্ষু প্রতিচিত্র প্রতিচ্ছায় প্রতিচ্ছায়া প্রতিচ্ছবি প্রতিজিহ্বা প্রতিজ্ঞ প্রতিজ্ঞা প্রতিজ্ঞাকারী প্রতিজ্ঞাযুক্ত প্রতিজ্ঞাত প্রতিজ্ঞাত্ব প্রতিজ্ঞান প্রতিজ্ঞাপালন প্রতিজ্ঞাপত্র প্রতিজ্ঞাবাক্য প্রতিজ্ঞাবদ্ধ প্রতিজ্ঞাভঙ্গ প্রতিজ্ঞারক্ষা প্রতিজ্ঞেয় প্রতিজন প্রতিযোগ প্রতিযোগিতা প্রতিযোগিতামূলক প্রতিযোগিনী প্রতিযোগী প্রতিদান প্রতিদানকারী প্রতিদানবিহীন প্রতিদানরূপ প্রতিদিন প্রতিদিনকার প্রতিদিষ্ট প্রতিদেয় প্রতিদত্ত প্রতিদ্বন্দ্ব প্রতিদ্বন্দ্বিতা প্রতিদ্বন্দ্বিনী প্রতিদ্বন্দ্বী প্রতিদ্বন্দ্বীহীন প্রতিদল প্রতিধ্বনি প্রতিধ্বনিজাত প্রতিধ্বনিত প্রতিনিধি প্রতিনিধিত্ব প্রতিনিধিত্বকারী প্রতিনিধিদল প্রতিনিধিরূপ প্রতিনিধিস্বরূপ প্রতিনিধিসভা প্রতিনিবৃত্ত প্রতিনিবৃত্তি প্রতিনিবর্তন প্রতিনির্দেশক প্রতিনিয়ত প্রতিনমস্কার প্রতিপক্ষ প্রতিপক্ষীয় প্রতিপাদক প্রতিপাদিকা প্রতিপাদিত প্রতিপাদিত্য প্রতিপাদ্য প্রতিপাদন প্রতিপাদনকারী প্রতিপাদনীয় প্রতিপাদল প্রতিপালক প্রতিপালিকা প্রতিপালিত প্রতিপালিতা প্রতিপাল্য প্রতিপালন প্রতিপালনকারী প্রতিপালনীয় প্রতিপোষক প্রতিপোষণ প্রতিপোষণকারী প্রতিপত্তি প্রতিপত্তিশালী প্রতিপত্তিশীল প্রতিপত্তিহীন প্রতিপদ প্রতিপদার্থ প্রতিপদযুক্ত প্রতিপদস্থান প্রতিপন্ন প্রতিপন্নকরণ প্রতিফল প্রতিফলিত প্রতিফলদানকারী প্রতিফলন প্রতিবাক্য প্রতিবাত প্রতিবাদ প্রতিবাদকারী প্রতিবাদিনী প্রতিবাদী প্রতিবাদীপক্ষ প্রতিবাদস্বরূপ প্রতিবার প্রতিবাসিনী প্রতিবাসী প্রতিবিধান প্রতিবিধানকারী প্রতিবিধিৎসা প্রতিবিধিৎসিতে প্রতিবিপ্লব প্রতিবিপ্লবকারী প্রতিবিপ্লবী প্রতিবিপ্লবপন্থী প্রতিবিম্ব প্রতিবিম্বিত প্রতিবিম্বধারণ প্রতিবিম্বন প্রতিবিম্বপাত প্রতিবিম্বস্বরূপ প্রতিবিহিত প্রতিবচন প্রতিবেদক প্রতিবেদন প্রতিবেদনকারী প্রতিবেশ প্রতিবেশগত প্রতিবেশিনী প্রতিবেশী প্রতিবেশভেদে প্রতিবেষ্টিত প্রতিবোধ প্রতিবোধিত প্রতিবোধন প্রতিবছর প্রতিবদ্ধ প্রতিবন্ধ প্রতিবন্ধক প্রতিবন্ধকতা প্রতিবন্ধী প্রতিবন্ধীত্ব প্রতিবর্ণীকরণ প্রতিবল প্রতিবস্তূপমা প্রতিভূ প্রতিভা প্রতিভাযুক্ত প্রতিভাত প্রতিভাধর প্রতিভান্বিত প্রতিভাবান প্রতিভাশালিনী প্রতিভাশালী প্রতিভাস প্রতিভাসিত প্রতিভাসম্পন্ন প্রতিভাহীন প্রতিম প্রতিমুক্ত প্রতিমুখ প্রতিমা প্রতিমাদর্শন প্রতিমান প্রতিমাপূজক প্রতিমাপূজা প্রতিমাবিসর্জন প্রতিমাস প্রতিমন্তব্য প্রতিমন্ত্রী প্রতিমূর্তি প্রতিমুহূর্ত প্রতিরক্ষা প্রতিরক্ষাকারী প্রতিরক্ষাতন্ত্র প্রতিরক্ষাদপ্তর প্রতিরক্ষাবাহিনী প্রতিরক্ষামন্ত্রক প্রতিরক্ষামন্ত্রী প্রতিরক্ষণ প্রতিরোধ প্রতিরোধক প্রতিরোধকারী প্রতিরোধিত প্রতিরোধী প্রতিরোধ্য প্রতিরুদ্ধ প্রতিরূপ প্রতিরূপক প্রতিলিপি প্রতিলোম প্রতিলোমবিবাহ প্রতিশোধ প্রতিশোধগ্রহণ প্রতিশব্দ প্রতিশ্রুত প্রতিশ্রুতি প্রতিশ্রুতিপত্র প্রতিশ্রুতিপূর্ণ প্রতিশ্রুতিভঙ্গ প্রতিশ্রুতিশীল প্রতিশয় প্রতিশয়ন প্রতিষিদ্ধ প্রতিষেদ্ধা প্রতিষেধ প্রতিষেধক প্রতিষেধকরণ প্রতিষ্টম্ভ প্রতিষ্ঠা প্রতিষ্ঠাকারী প্রতিষ্ঠাকাল প্রতিষ্ঠাকালীন প্রতিষ্ঠাকরণ প্রতিষ্ঠাযুক্ত প্রতিষ্ঠাতা প্রতিষ্ঠাতারিখ প্রতিষ্ঠাত্রী প্রতিষ্ঠান প্রতিষ্ঠানগত প্রতিষ্ঠাপিত প্রতিষ্ঠাপন প্রতিষ্ঠাপয়িতা প্রতিষ্ঠাপয়িত্রী প্রতিষ্ঠাবান প্রতিষ্ঠাবার্ষিকী প্রতিষ্ঠালগ্ন প্রতিষ্ঠালাভ প্রতিষ্ঠাসাল প্রতিষ্ঠিত প্রতিষ্ঠিতা পরতিস পুরতিস প্রতিসংহার প্রতিসংহৃত প্রতিসাম্য প্রতিসারিত প্রতিসারী প্রতিসারণ প্রতিসেকেন্ড প্রতিসৃত প্রতিস্থাপন প্রতিসম প্রতিসর প্রতিসর্গ প্রতিসরিত প্রতিসরণ প্রতিসরণাঙ্ক প্রতিসরণযুক্ত প্রতিহার প্রতিহারক প্রতিহারিণী প্রতিহারী প্রতিহার্য প্রতিহারণ প্রতিহিংসা প্রতিহত প্রতিহন্তা প্রতিহনন প্রতিহর্তা প্রতীক প্রতীকার প্রতীকাশ প্রতীকী প্রতীকীবাদ প্রতীকধর্মী প্রতীকবাদ প্রতীকরূপ প্রতীক্ষা প্রতীক্ষাকারী প্রতীক্ষারত প্রতীক্ষিত প্রতীক্ষ্য প্রতীক্ষ্যমাণ প্রতীক্ষ্যমাণা প্রতীক্ষমাণ প্রতীক্ষমাণা প্রতীকস্বরূপ প্রতীচী প্রতীচ্য পরতীত প্রতীত প্রতীতি প্রতীত্যসমুৎপাদ প্রতীপ প্রতীবাদ প্রতীবেশ প্রতীর প্রতীহারী প্রতীয়মান পুরতে পরতেক পরতেকি পরতেখ পরতেন পুরতেন পরতেম পুরতেম পুরতো প্রত্যুক্তি প্রত্যক্ষ প্রত্যক্ষকারী প্রত্যক্ষগোচর প্রত্যক্ষী প্রত্যক্ষীকৃত প্রত্যক্ষীকরণ প্রত্যক্ষীভূত প্রত্যক্ষীভবন প্রত্যক্ষজ্ঞান প্রত্যক্ষতা প্রত্যক্ষদেবতা প্রত্যক্ষদর্শী প্রত্যক্ষদর্শন প্রত্যক্ষদর্শনকারী প্রত্যক্ষপ্রমাণ প্রত্যক্ষফল প্রত্যক্ষবাদ প্রত্যক্ষবাদী প্রত্যক্ষভাবে প্রত্যঙ্গ প্রত্যাখ্যাত প্রত্যাখ্যান প্রত্যাগামী প্রত্যাগত প্রত্যাগমন প্রত্যাঘাত প্রত্যাঘাতকারী প্রত্যাদিষ্ট প্রত্যাদেশ প্রত্যাদেশপ্রাপ্ত প্রত্যাদেষ্টা প্রত্যানীত প্রত্যানয়ন প্রত্যাবৃত্ত প্রত্যাবৃত্তি প্রত্যাবর্তিত প্রত্যাবর্তন প্রত্যাবর্তনকারী প্রত্যারম্ভ প্রত্যালীঢ় প্রত্যাশা প্রত্যাশাকারী প্রত্যাশানুযায়ী প্রত্যাশাভিত্তিক প্রত্যাশিত প্রত্যাশিতভাবে প্রত্যাশী প্রত্যাসত্তি প্রত্যাসন্ন প্রত্যাহার প্রত্যাহত প্রত্যাহৃত প্রত্যাহরণ প্রত্যায়ক প্রত্যায়িত প্রত্যায়ন প্রত্যেক প্রত্যেকজন্ম প্রত্যেকদিন প্রত্যেকবার প্রত্যুত প্রত্যুত্তর প্রত্যুত্তরকারী প্রত্যুত্থান প্রত্যুত্থিত প্রত্যুৎপন্ন প্রত্যুৎপন্নমতি প্রত্যুৎপন্নমতিত্ব প্রত্যুদ্গত প্রত্যুদ্গম প্রত্যুদ্গমন প্রত্যুদাহরণ প্রত্যন্ত প্রত্যন্তপ্রদেশ প্রত্যন্তপর্বত প্রত্যুপকার প্রত্যুপকারী প্রত্যুপকারপ্রাপ্ত প্রত্যুপকৃত প্রত্যুপকর্তা প্রত্যুপদেশ প্রত্যুপদেষ্টা প্রত্যবায় প্রত্যবেক্ষা প্রত্যবেক্ষিত প্রত্যবেক্ষণ প্রত্যবয়ব প্রত্যভিজ্ঞা প্রত্যভিজ্ঞান প্রত্যভিযোগ প্রত্যভিবাদ প্রত্যভিবাদন প্রত্যর্থিতা প্রত্যর্থিনী প্রত্যর্থী প্রত্যর্পিত প্রত্যর্পিতা প্রত্যর্পণ প্রত্যুষ প্রত্যূষ প্রত্যহ প্রত্যয় প্রত্যয়কল্প প্রত্যয়গত প্রত্যয়াদি প্রত্যয়ান্ত প্রত্যয়িত প্রত্যয়ী প্রত্যয়যুক্ত প্রত্যয়যোগ প্রত্যয়ন প্রত্যয়রূপ প্রত্যয়হীন প্রত্যয়হন্তা পুরুতঠাকুর পূর্ত্তি প্রতন প্রতনু প্রত্ন প্রত্নজীব প্রত্নতাত্ত্বিক প্রত্নতত্ত্ব প্রত্নতত্ত্বীয় প্রত্নতত্ত্ববিৎ প্রত্নতত্ত্ববিদ প্রত্নতত্ত্ববিদ্যা পরতন্ত্র পরতন্ত্রতা প্রত্নপ্রস্তর প্রত্নবিৎ প্রত্নবিদ প্রত্নবিদ্যা প্রত্নবস্তু প্রত্নভাষা প্রত্নরূপ প্রত্নলিপিতত্ত্ব প্রত্নস্তর প্রত্নস্থান প্রত্নস্থল প্রতপ্ত পূর্তবিদ্যা পূর্তবিভাগ পরতুম পুরতুম পরত্র প্রতর্ক প্রতর্ক্য পরত্রভীরু পরতল প্রতুল প্রথা পরথাই প্রথাগত প্রথাগতভাবে প্রথানুগ প্রথানুযায়ী পরথাব প্রথাবিরোধী প্রথাবিরুদ্ধ প্রথামত প্রথাসিদ্ধ প্রথিত প্রথিতযশা প্রথিতনামা প্রথম প্রথমকাপ প্রথমগ্রন্থ প্রথমা প্রথমাংশ প্রথমাবস্থা প্রথমার্ধ প্রথমোক্ত প্রথমোচ্চারিত প্রথমোল্লাস প্রথমত প্রথমদিক প্রথমদিককার প্রথমপাঠ প্রথমপ্রতিশ্রুতি প্রথমপ্রথম প্রথমবার প্রথমভাগ প্রথমশক্তি প্রথমশ্রেণী পরদুঃখ প্রদক্ষিণ প্রদক্ষিণকারী প্রদক্ষিণরত পরদা পর্দা পরদাজ প্রদাতা প্রদাত্রী প্রদান প্রদানকারিণী প্রদানকারী প্রদানযোগ্য প্রদানপূর্বক পরদানশিন পর্দানশিন পরদানশীন পর্দানশীন পরদাপ্রথা পর্দাপ্রথা পর্দাপুশিদা পর্দাপুষিদা পর্দাবিহীন পরদার পরদারগামী পরদারগমন পরদারিক প্রদাহ প্রদাহী প্রদাহজনিত প্রদাহদানকারী প্রদায়ক প্রদায়িকা প্রদায়িনী প্রদায়ী পরদিন প্রদিষ্ট প্রদীপ প্রদীপক প্রদীপাদি প্রদীপালোক প্রদীপ্ত প্রদীপ্তি প্রদীপন প্রদীপশিখা প্রদীপহীন পুরদেওয়া পরদেশ প্রদেশ পরদেশি পরদেশিনী পরদেশিয়া পরদেশী পরদেশীয় প্রদেশজাত প্রদেশবাৎসল্য প্রদেশব্যাপী প্রদেশসংক্রান্ত প্রদেহ প্রদেয় প্রদোষ প্রদোষকাল প্রদোষকালীন প্রদ্যোত প্রদ্যোতিত প্রদ্যুম্ন প্রদত্ত প্রদৃপ্ত পুরদ্বার পরদ্বেষ পরদ্বেষিণী পরদ্বেষী প্রদমিত প্রদর পরদ্রব্য পরদ্রব্যে প্রদর্শক প্রদর্শিকা প্রদর্শিত প্রদর্শন প্রদর্শনকারী প্রদর্শনাগার প্রদর্শনী প্রদর্শনরত প্রদর্শনশালা প্রদর্শনশেষ প্রধান প্রধানা প্রধানত প্রধানতা প্রধানতালিকা প্রধানতম প্রধানত্রয় প্রধানমন্ত্রী প্রধানমন্ত্রীত্ব পরধন পরধনলোভী প্রধূমিত প্রধূমিতা পরধর্ম পরধর্মদ্বেষী পরন পরুন পরনারী পুরনারী পরনিন্দা পরনির্ভর পরনির্ভরতা পরনির্ভরশীল পরনির্ভরশীলতা পুরনো পুরনোঘাগু পুরনোঘাগি পুরনোঘাগী পুরনোমতে পরন্তু পুরন্ত পূরন্ত পরন্তপ পুরন্দর পুরন্ধ্রি পুরন্ধ্রী প্রনষ্ট প্রপা প্রপাত প্রপান প্রপার্টি পরপালিত প্রপালশান প্রপালশন প্রপিতামহ প্রপিতামহী পরপীড়ক পরপীড়ন প্রপেলার প্রপোজ প্রপোজাল প্রপোজিশন প্রপৌত্র প্রপৌত্রী প্রপঞ্চ প্রপঞ্চিত প্রপঞ্চবচন প্রপঞ্চময় পর্পট পরপতি প্রপতন পরপত্নী পরপদ পরপদরূপে প্রপন্ন পরপর পুরপুরি পরপূর্বা পরপুরুষ পরপুষ্ট পরপুষ্টা পরপৃষ্ঠা প্রুফ প্রফেশন প্রফেশনাল প্রফেশনালি প্রফেসার প্রফেসারি প্রফেসর প্রফুল্ল প্রফুল্লিত প্রফুল্লতা প্রফুল্লতাযুক্ত প্রফুল্লহৃদয় প্রুফশিট পরব পর্ব পুরব পুরুব পুরূব পূরব পূর্ব পূর্বং প্রবংশ পূর্বএশিয়া পূর্বক পূর্বকার পূর্বকাল পূর্বকালিক পূর্বকালীন পূর্বকাহিনী পূর্বকায় পূর্বকৃত প্রবক্তা পূর্বকথিত পূর্বক্রিয়া পূর্বকর্ম পূর্বক্ষণ পূর্বগামিনী পূর্বগামী পূর্বঘাট পূর্বঘোষিত পূর্বঘটনা পূর্বা পর্বাংশ পূর্বাংশ পূর্বাকাশ পূর্বাচল পূর্বাঞ্চল পূর্বাঞ্চলিক পূর্বাঞ্চলীয় পরবাদ প্রবাদ পরবাদিনী পরবাদী প্রবাদপ্রতিম প্রবাদপ্রবচন প্রবাদবাক্য পূর্বাদ্রি পূর্বাধিকার পূর্বানুবৃত্তি পূর্বানুমান পূর্বানুমিত পূর্বানুমতি পূর্বানুস্মৃতি পূর্বাপেক্ষা পূর্বাপর পূর্বাপরবৃত্ত পূর্বাবধি পূর্বাবস্থা পূর্বাভাষ পূর্বাভাস পূর্বাভিমুখী পরবার পুরবার প্রবাল প্রবালকীট প্রবালদ্বীপ প্রবালপ্রাচীর প্রবালফল পূর্বাশা পূর্বাষাঢ়া পরবাস প্রবাস প্রবাসকালীন পরবাসিনী পুরবাসিনী প্রবাসিনী পরবাসী পুরবাসী প্রবাসী প্রবাসন পর্বাস্ফোট পর্বাহ প্রবাহ প্রবাহিণী প্রবাহিত প্রবাহিতা প্রবাহী প্রবাহযুক্ত পূর্বাহ্ণ পূর্বাহ্ণিক প্রবাহধর্ম প্রবাহবেগ প্রবাহমাত্রা পরবি পুরবি পূর্বিতা পর্বিন প্রবিষ্ট প্রবিষ্টা পরবী পুরবী পূরবী প্রবীণ প্রবীণা প্রবীণতা প্রবীণত্ব প্রবচন প্রবচনগুচ্ছ প্রবচনীয় প্রবচনবলী পূরবীর প্রবীর পূরবীরাগ পরবে পুরবে পূরবে পূর্বেকার প্রবেট পরবেন পুরবেন পর্বেবিভক্ত পরবেশ প্রবেশ প্রবেশক প্রবেশকারী প্রবেশকালীন প্রবেশাধিকার প্রবেশিকা প্রবেশিত প্রবেশ্য প্রবেশযোগ্য প্রবেশ্যতা প্রবেশদ্বার প্রবেশন প্রবেশপথ প্রবেশপূর্বক প্রবেশমান প্রবেশমূল্য প্রবেশসাধ্য প্রবেশস্থল প্রবেষ্টা পরবো পুরবো পূর্বোক্ত পূর্বোদ্ধৃত পরবোধ প্রবোধ প্রবোধা প্রবোধিত প্রবোধিব প্রবোধদান প্রবোধন প্রবোধপ্রাপ্ত পূর্বোল্লিখিত পূর্বজ পূর্বজা পূর্বজীবন পূর্বজ্ঞান পূর্বজন্ম প্রবঞ্চক প্রবঞ্চিত প্রবঞ্চন প্রবঞ্চনা প্রবঞ্চনাময় পূর্বযুগ পরব্যোম প্রবণ প্রবণতা প্রবণতাযুক্ত পরবত পর্বত পর্বতকন্দর পর্বতগাত্র পর্বতগুহা পর্বতগহ্বর পর্বতাদি পর্বতাভিসারী পর্বতারোহী পর্বতারোহণ পর্বতারোহণকারী পূর্বতীর পর্বতচূড়া পর্বতোদর পর্বতজাত পর্বতযথা প্রবৃত্ত প্রবৃত্তি প্রবৃত্তিযুক্ত প্রবৃত্তিদান প্রবৃত্তিদায়ক প্রবৃত্তিদমন প্রবৃত্তিমার্গ পর্বতদেশ পূর্বতন পূর্বতনপথ পর্বতপতি পর্বতপ্রমাণ পর্বতপৃষ্ঠ পর্বতবাসিনী পর্বতবাসী পর্বতবেষ্টিত পর্বতমালা পর্বতময় পর্বতরাজ পর্বতরূপ পর্বতশৃঙ্গ পর্বতশীর্ষ পর্বতশ্রেণী পর্বতশ্রেষ্ঠ পর্বতসঙ্কুল পর্বতসারি পর্বতস্থ পর্বতসদৃশ পর্বতসন্নিহিত পর্বতসমৃদ্ধ পর্বতসমূহ পূর্বদিক পূর্বদিকস্থ পূর্বদিন পূর্বদেশ পূর্বদেশীয় প্রবুদ্ধ প্রবৃদ্ধ প্রবুদ্ধকারী প্রবৃদ্ধকোণ প্রবৃদ্ধি পূর্বদর্শন পূর্বদশা পূর্বদৃষ্ট পূর্বদৃষ্টি পরবুধ পুরবধূ পূর্বধারণা পূর্বধ্বনি পূর্বনাম পূর্বনির্ধারিত পূর্বনির্ধারণ পূর্বনিষিদ্ধ পরবন্ধ প্রবন্ধ প্রবন্ধকার প্রবন্ধগ্রন্থ প্রবন্ধাদি প্রবন্ধাবলী প্রবন্ধরচয়িতা প্রবন্ধসাহিত্য পূর্বপক্ষ পূর্বপাকিস্তান পূর্বপাঞ্জাব পূর্বপাশ পূর্বপদ পূর্বপদরূপে পূর্বপ্রান্ত পূর্বপরিকল্পিত পূর্বপরিকল্পনা পূর্বপরিচিত পূর্বপরিচয় পূর্বপ্রচলিত পূর্বপ্রেম পূর্বপুরুষ পূর্বপ্রসঙ্গ পূর্বপ্রস্তুতি পূর্বপশ্চিম পূর্বপৃষ্ঠা পূর্বফল্গুনী পূর্ববঙ্গ পূর্ববঙ্গীয় পূর্ববঙ্গবাসী পূর্ববাংলা পূর্ববাদ পূর্ববাদী পূর্ব্বাশা পূর্ববাহিনী পূর্ববাহী পূর্ববিদ্বেষ পূর্ববীরভূম পূর্বব্যবস্থা পূর্ববৎ পূর্ববর্ণিত পূর্ববর্তিতা পূর্ববর্তিনী পূর্ববর্তী পর্বভাগ পূর্বভাগ পূর্বভাদ্রপদ পূর্বভারত পূর্বভারতীয় পূর্বমুখ পূর্বমীমাংসা পূর্বমত পর্বমধ্য পূর্বমুহূর্ত প্রবর পূর্বরঙ্গ পূর্বরাগ প্রব্রাজক প্রব্রাজিত প্রব্রাজন পূর্বরাত্র পূর্বরাত্রি পূর্বরাশি প্রব্রজিত প্রব্রজ্যা পরব্রত প্রবর্ত প্রবর্তক প্রবর্তিত পরবর্তিতা পরবর্তিনী পরবর্তী পরবর্তীকাল পরবর্তীস্থান প্রবর্তন প্রবর্তনকারী প্রবর্তনা প্রবর্তমান প্রবর্তয়িতা প্রবর্ধমান পরব্রহ্ম প্রবল পূর্বলক্ষণ পূর্বলগ্ন প্রবলা প্রবলেম প্রব্লেম প্রবলতা প্রবলতাজ্ঞাপক প্রবলতর প্রবলবেগ পূর্বলব্ধ প্রবলভাব পরবশ পরবশতা পূর্বশর্ত পূর্বসংস্কার প্রবসিত পূর্বসূচনা পূর্বসূত্র প্রবসন পূর্বস্পর্শ পূর্বস্বত্ব পূর্বস্মৃতি পূর্বসমুদ্র পূর্বসূরি প্রবহ প্রবহিত প্রবহণ প্রবহমান প্রবহমানতা প্রভু পরভুক প্রভা প্রভাকীট প্রভাকর প্রভাকরণ পরভাগ্যোপজীবিনী পরভাগ্যোপজীবী প্রভাযুক্ত পরভাত প্রভাত প্রভাতকাল প্রভাতকালীন প্রভাতকিরণ পরভাতা প্রভাতি প্রভাতী প্রভাতফেরি প্রভাতফেরী প্রভাতরাগ প্রভাতরশ্মি প্রভাতসূর্য প্রভাব প্রভাবক প্রভাবাধীন প্রভাবান প্রভাবান্বিত প্রভাবিত প্রভাবজাত প্রভাবযুক্ত প্রভাবতী প্রভাবপ্রতিপত্তি প্রভাববিস্তার প্রভাবমুক্ত প্রভাবশালী প্রভাবশালীত্ব প্রভাবসম্পন্ন প্রভাবহীন প্রভাময় প্রভারুণ প্রভাষক প্রভিডেন্ট প্রভিডেন্স প্রভিন্ন প্রভিন্স প্রভিন্সিয়াল প্রভেদ প্রভেদক প্রভেদ্য প্রভোস্ট প্রভঞ্জন পরভৃত পরভৃৎ প্রভূত পরভৃতা প্রভুতা প্রভৃতি প্রভুত্ব প্রভুপাদ প্রভুপত্নী প্রভুপুত্র প্রভুপরায়ণ প্রভুপরায়ণতা প্রভব প্রভুভক্ত প্রভুভক্তি পরভূম পরভূমি প্রভুশক্তি পরম পরমকল্যাণ পরমকল্যাণযুক্ত প্রমুখ প্রমুখাৎ পরমুখাপেক্ষা পরমুখাপেক্ষিতা পরমুখাপেক্ষী পরমগতি পরমা প্রমা পরমাই প্রমাই পরমাণ পরমাণু প্রমাণ প্রমাণকারী পরমাণুকেন্দ্র পরমাণুকেন্দ্রীয় প্রমাণঘনত্ব প্রমাণাদি প্রমাণিত পরমাণুজাত প্রমাণযুক্ত প্রমাণত প্রমাণপঞ্জি প্রমাণপত্র প্রমাণপুরুষ পরমাণুবাদ পরমাণুবাদী প্রমাণলোপ প্রমাণসই প্রমাণসাইজ প্রমাণসাধ্য প্রমাণসাপেক্ষ প্রমাণসিদ্ধ প্রমাতা প্রমাতামহ প্রমাতামহী পরমাত্মা পরমাত্মীয় পরমাত্মীয়া পরমাত্মীয়তা প্রমাথ প্রমাথিনী প্রমাথী পরমাদ প্রমাদ প্রমাদযুক্ত পরমাদৃত পরমাদর প্রমাদহীন প্রমাদহীনতা পরমান পরমান্ন পরমানন্দ পরমাপতি পরমাপ্রকৃতি প্রমারা পরমার্থ পরমার্থচিন্তা পরমার্থবাদ পরমাসুন্দরী পরমায়ু পরমায়ুযুক্ত প্রমিত প্রমিতকৃত প্রমিতকরণ প্রমিতি প্রমীলা প্রমীলারাজ প্রমীলন পরমেশ পরমেশ্বর পরমেশ্বরী প্রমেহ প্রমেয় প্রমোচন পরমোৎসব প্রমোদ প্রমোদউদ্যান প্রমোদকানন প্রমোদকেন্দ্র প্রমোদাগার প্রমোদিত প্রমোদী প্রমোদদান প্রমোদদায়ক প্রমোদন প্রমোদপূর্ণ প্রমোদবিহার প্রমোদবন প্রমোদভবন প্রমোদভ্রমণ প্রমোদমত্ত প্রমোদরত প্রমোদসঙ্গিনী প্রমোশন প্রমোশনাল পরমজ্ঞান পরমজ্ঞানী পরমত পরমতঅসহিষ্ণু পরমতা পরমতাপমাত্রা পরমতাবলম্বী পরমতাসহিষ্ণু পরমতীর্থ প্রমত্ত প্রমত্তচিত্ত প্রমত্তজনক প্রমত্ততা পরমতত্ত্ব পরমতসহিষ্ণু পরমতসহিষ্ণুতা প্রমথ প্রমথিত প্রমথেশ প্রমথন প্রমদা প্রমুদিত পরমপিতা পরমপদ পরমপদার্থ পরম্পর পরম্পরা পরম্পরাক্রম পরম্পরাগত পরম্পরাযুক্ত পরম্পরাপ্রাপ্ত পরম্পরাহীন পরম্পরীণ পরমপুরুষ পরমবন্ধু পরমব্রহ্ম পরমমান প্রমূর্ত পরমশূন্য পরমসত্তা পরমহংস পরমহংসদেব প্র্রকাশকাল পুররক্ষী পররাষ্ট্র পররাষ্ট্রনীতি পররাষ্ট্রমন্ত্রী পররাষ্ট্রমন্ত্রণালয় পুররে প্ররোচক প্ররোচিকা প্ররোচিত প্ররোচিতা প্ররোচন প্ররোচনা প্ররোচনাদায়ক প্ররোচনাপ্রাপ্ত প্ররোহ প্ররোহিত পরল পুরল প্রলাপ প্রলাপকারী প্রলাপিনী প্রলাপী প্রলাপবাক্য পরলাম পুরলাম পরলি পুরলি পুরুলিয়া পরলে পুরলে প্রলেতারিয়া পরলেন পুরলেন প্রলেপ প্রলেপক প্রলেপকারী প্রলেপযুক্ত প্রলেপন প্রলেপনকারী প্রলেপনীয় প্রলেপহীন পরলেম পুরলেম পরলোক পরলোকগত পরলোকগমন পরলোকপ্রাপ্তি প্রলোভ প্রলোভিত প্রলোভন প্রলোভনপ্রাপ্ত প্রলপিত প্রলপন প্রলুব্ধ প্রলুব্ধা প্রলুব্ধতা পরলুম পুরলুম প্রলম্ব প্রলম্বিত প্রলম্বন প্রলয় প্রলয়কাণ্ড প্রলয়কারী প্রলয়কাল প্রলয়কালীন প্রলয়কর্তা প্রলয়ঙ্কর প্রলয়ঙ্করী প্রলয়াগ্নি প্রলয়োল্লাস প্রলয়দ প্রলয়নাচন প্রলয়মূর্তি প্রলয়লীলা প্রলয়সলিল পরশ পরশু প্রশংসক প্রশংসা প্রশংসাকারী প্রশংসাযোগ্য প্রশংসাপত্র প্রশংসাপ্রাপ্ত প্রশংসাপূর্ণ প্রশংসাবাক্য প্রশংসাবাদ প্রশংসামুখর প্রশংসাসংবলিত প্রশংসিত প্রশংসন প্রশংসনীয় প্রশংসনপত্র প্রশংসনবাদ পরশই পরশা প্রশাখা প্রশান্ত প্রশান্তকণ্ঠ প্রশান্তি প্রশান্তচিত্ত প্রশান্তবদন প্রশান্তভাবে প্রশান্তমহাসাগর প্রশান্তমহাসমুদ্র পরশাবি প্রশাসক প্রশাসকগণ প্রশাসকবৃন্দ পরশাসিত প্রশাসিত পরশাসন প্রশাসন প্রশাসনগত প্রশাসনিক প্রশাসনযন্ত্র প্রশাসনবিভাগ প্রশাসনব্যবস্থা প্রশিক্ষক প্রশিক্ষিত প্রশিক্ষণ প্রশিক্ষণকেন্দ্র প্রশিক্ষণার্থী প্রশিক্ষণপ্রাপ্ত প্রশিক্ষণলব্ধ প্রশিষ্য প্রশিষ্যা পরশিহ পুরশ্চরণ পরশুদিন পরশন প্রশ্ন প্রশ্নকারী প্রশ্নকর্তা প্রশ্নকর্ত্রী প্রশ্নাতীত প্রশ্নাতীতভাবে প্রশ্নাত্মক প্রশ্নাবলী প্রশ্নচিহ্ন প্রশ্নোত্তর প্রশ্নপত্র প্রশ্নবাক্য প্রশ্নবাচক প্রশ্নবাণ প্রশ্নবিদ্ধ প্রশ্নবোধক প্রশ্নমালা প্রশ্নসূচক পরশপাথর পরশ্ব প্রশ্বাস প্রশ্বাসজাত প্রশমিত প্রশমিতকরণ পরশমণি প্রশমন প্রশমনকারী প্রশমনযোগ্য পরশুরাম প্রশ্রিত পরশ্রী পরশ্রীকাতর পরশ্রীকাতরতা প্রশ্রয় প্রশ্রয়াবনত প্রশ্রয়দাতা প্রশ্রয়দান প্রশ্রয়দানকারী প্রশ্রয়প্রাপ্ত প্রশস্য প্রশস্যতা প্রশস্ত প্রশস্তকাল প্রশস্তি প্রশস্তিপত্র প্রশস্ততা প্রশস্ততর পরশয়ে পরুষ পুরুষ পুরষ্কার পুরুষকার পরষা পুরুষাকৃতি পুরুষাঙ্গ পুরুষাদ্য পুরুষানুক্রম পুরুষানুক্রমিক পুরুষানুক্রমে পুরুষার্থ পুরুষালি পুরুষালী পুরুষোচিত পুরুষোত্তম পুরুষজাতি পুরুষ্টু প্রষ্টা প্রষ্টব্য পর্ষৎ পরুষতা পুরুষতান্ত্রিক পরুষত্ব পুরুষত্ব পুরুষত্বহীন পুরুষত্বহীনতা পর্ষদ পুরুষদেবতা পুরুষদেহ পুরুষপুঙ্গব পুরুষপ্রকৃতি পুরুষপ্রধান পুরুষপরম্পরা পুরুষপরম্পরাগত পুরুষফুল পুরুষবাচক পুরুষবাচকতা পরুষবচন পুরুষব্যাঘ্র পুরুষভাবাপন্ন পরুষভাষী পুরুষমানুষ পুরুষলোক পুরুষশার্দূল পুরুষসিংহ পুরুষসন্তান পুরুষসুলভ প্রসূ পুরসংস্কৃত পুরস্কার পুরস্কারাদি পুরস্কারজয়ী পুরস্কারদাতা পুরস্কারদান পুরস্কারপ্রাপ্ত পুরস্কারপ্রাপ্তি পুরস্কারপ্রদান পুরস্কারবিতরণ পুরস্কাররূপ পুরস্কারলাভ পুরস্কৃত প্রসক্ত প্রসক্তি প্রসক্তচিত্ত পরসঙ্গ প্রসঙ্গ প্রসঙ্গউত্থাপন প্রসঙ্গক্রমে প্রসঙ্গগত প্রসঙ্গগ্রাহ্য প্রসঙ্গান্তর প্রসঙ্গত প্রসঙ্গনির্ভর প্রসঙ্গবহির্ভূত প্রসঙ্গমুক্ত পরসা পরসাদ প্রসাদ প্রসাদকণিকা প্রসাদগুণ প্রসাদাৎ প্রসাদি প্রসাদিত প্রসাদী প্রসাদন প্রসাদনা প্রসাদরূপ প্রসাদহীন প্রসাধক প্রসাধিকা প্রসাধিত প্রসাধন প্রসাধনকারী প্রসাধনী প্রসাধনচর্চা প্রসাধনীরূপ প্রসাধনদ্রব্য প্রসাধনপ্রিয় প্রসার প্রসারক প্রসারিণী প্রসারিত প্রসারিতকরণ প্রসারিয়া প্রসারী প্রসার্য প্রসার্যমাণ প্রসারণ প্রসারণকাল প্রসারণমুখীনতা প্রসারণশীল প্রসিক্ত প্রসিদ্ধ প্রসিদ্ধা প্রসিদ্ধি প্রসিদ্ধতম প্রসীদ প্রসেক প্রসেস প্রসেসিং প্রসেসর প্রসঞ্জন প্রস্টেট প্রসূত প্রসৃত প্রস্ত প্রসূতা প্রস্তাব প্রস্তাবউত্থাপক প্রস্তাবক প্রস্তাবকারী প্রস্তাবকরণ প্রস্তাবানুসারে প্রস্তাবিত প্রস্তাবনা প্রসূতি প্রসৃতি প্রসূতিকালীন প্রসূতিগৃহ প্রসূতিতন্ত্র প্রসূতিরোগ প্রস্তুত প্রস্ততকারক প্রস্তুতকারী প্রস্তুতকৃত প্রস্তুতকরণ প্রস্তুতকর্তা প্রস্তুতি প্রস্তুতিকরণ প্রস্তুতিপর্ব প্রস্তুতপ্রণালী প্রসৃতবাক্য প্রস্তর প্রস্তরখণ্ড প্রস্তরাদি পরস্ত্রী পরস্ত্রীগমন প্রস্তরীভূত প্রস্তরীভবন প্রস্তরযুগ প্রস্তরফলক প্রস্তরবৎ প্রস্তরময় প্রস্তরলিপি প্রস্তরস্তম্ভ প্রস্থ প্রস্থান প্রস্থানকালীন প্রস্থানোদ্যত প্রস্থানপর প্রস্থাপিত প্রস্থাপন প্রস্থিত প্রস্থচ্ছেদ প্রস্থদেশ প্রস্থপ্রমাণ প্রস্থবেধহীন প্রস্থহীন প্রসূন প্রসন্ন প্রসন্না প্রসন্নচিত্ত প্রসন্নতা প্রসন্নময়ী প্রসপেক্টাস প্রসুপ্ত প্রসুপ্তি পরস্পর পরস্পরা পরস্পরজড়িত পরস্পরনিরপেক্ষ পরস্পরনির্ভর পরস্পরনির্ভরশীল পরস্পরবিরোধ পরস্পরবিরোধী পরস্পরবিরুদ্ধ পরস্পরলগ্ন পরস্পরসংক্রান্ত পরস্পরসংলগ্ন পরস্পরসংশ্লিষ্ট পরস্পরসমান পরস্পরসম্পৃক্ত প্রস্ফুট প্রস্ফুটিত প্রস্ফুটিতা প্রস্ফুটন প্রস্ফুরিত প্রস্ফুরণ প্রস্ফুরণযুক্ত পরস্ব প্রসব প্রসবকারিণী প্রসবকারী প্রসবকাল প্রসবকালীন প্রসবাদি প্রস্বান প্রস্বাপন পরস্বাপহারী পরস্বাপহরণ প্রসবিতা প্রসবিত্রী প্রসবিনী প্রসবী প্রস্বেদন প্রসবদ্বার প্রসববেদনা প্রসববেদনাহীন পরস্বহারী পরস্বহরণ পুরসভা পরস্মৈপদ পরস্মৈপদী প্রসর প্রস্রাব প্রস্রাবাগার প্রসরণ প্রসরণশীল প্রস্রুত প্রসর্পিত প্রসর্পণ প্রস্রবণ পরহার প্রহার প্রহারক প্রহারকারী প্রহাররূপ পরহিংসক পরহিংসা পরহিত পরহিতকারী পরহিতাকাঙ্ক্ষী পরহিতৈষী পরহিতৈষণা পরহিতব্রত পরহিতব্রতা পরহিতব্রতী পরহেজ পরহেজগার পরহেজগারি প্রহেলিকা প্রহত প্রহৃত পুরহর প্রহর প্রহরকাল প্রহরা প্রহরাকক্ষ প্রহরাধীন প্রহরারত প্রহরার্ধ প্রহরিণী প্রহরী প্রহরণ প্রহরণধারিণী প্রহর্তা প্রহ্লাদ প্রহৃষ্ট পরহস্তগত প্রহসন প্রয়াগ প্রয়াণ প্রয়াত প্রয়াস প্রয়াসিনী প্রয়াসী প্রয়াসচিহ্নিত প্রয়োগ প্রয়োগকারী প্রয়োগকৌশল প্রয়োগকৃত প্রয়োগকরণ প্রয়োগকর্তা প্রয়োগগত প্রয়োগযোগ্য প্রয়োগতত্ত্ব প্রয়োগপদ্ধতি প্রয়োগবিধি প্রয়োগবিধিগত প্রয়োগবিন্দু প্রয়োগশালা প্রয়োগস্থল প্রয়োজক প্রয়োজন প্রয়োজনানুগ প্রয়োজনানুরূপ প্রয়োজনানুসারে প্রয়োজনীয় প্রয়োজনীয়তা প্রয়োজনবোধ প্রয়োজনমত প্রয়োজনরহিত প্রয়োজনসাধন প্রয়োজনসিদ্ধি প্রয়োজনহীনতা পল পলু পুল পুলওভার পলক পুলক পলকা পুলকিত পলকপাত পলকবিহীন পলকরহিত প্লক্ষ পুলকসঞ্চার পলকহীন পলকহীনভাবে পলা পলাই প্লাইউড পলাইও পলাইত পলাইতাম পলাইতিস পলাইতে পলাইতেছ পলাইতেছি পলাইতেছিল পলাইতেছিলাম পলাইতেছিলি পলাইতেছিলে পলাইতেছিলেন পলাইতেছিস পলাইতেছে পলাইতেছেন পলাইতেন পলাইব পলাইবার পলাইবি পলাইবে পলাইবেন পলাইল পলাইলাম পলাইলি পলাইলে পলাইলেন পলাইয়া পলাইয়াছ পলাইয়াছি পলাইয়াছিল পলাইয়াছিলাম পলাইয়াছিলি পলাইয়াছিলে পলাইয়াছিলেন পলাইয়াছিস পলাইয়াছে পলাইয়াছেন পলাইয়ো পুলাও পলাক প্লাগ পলাগ্নি পলাঙ্গ প্লাজা প্লাজমা প্লাজমিড প্লাজমোডিয়াম প্লাজমোলাইসিস প্লাটিনাম প্লাটুন প্লাটফরম প্লাটফর্ম পলাণ্ডু পলাতক পলাতকা পলান প্লান প্লানিং প্লানচেট পলানো প্লান্ট পলান্ন প্লাব প্লাবক প্লাবিত প্লাবিতা প্লাবী প্লাবন প্লাবনকারী প্লাবনজনিত পলাল পলাশ পলাশগাছ পলাশী পলাশীরবন পলাশফুল পলাশবাড়ী পলাশবন প্লাস প্লাস্টার প্লাস্টিক প্লাস্টিড পলায় পলায়িত পলায়িতা পলায়ন পলায়নকারী পলায়নকাল পলায়নি পলায়নপথ পলায়নপর পলায়মান পলি পুলি পূলি পূলিকা পলিক্লিনিক পলিজ প্লিজ পলিজাত পলিটিকাল পলিটিক্স পলিটেকনিক প্লিডার পলিত পলিতকেশ পলিতা পলিথিন পলিদ পলিদ্বীপ পুলিন পুলিন্দ পুলিন্দা পুলিপিঠে পলিপেপটাইড পলিপেপ্টাইড পুলিপোলাও পলিমাটি পলিমার পলিমরফিজম পুলিশ পুলিশকনস্টেবল পুলিশকমিশনার পুলিশকর্মচারী পুলিশবাহিনী পুলিশসাহেব পুলিশসুপার পুলিশসুপারিনটেনডেন্ট পুলিশসুলভ পলিস পুলিস পুলিসইনস্পেক্টর পুলিসকনস্টেবল পুলিসকমিশনার পলিসি পুলিসস্টেশন পুলিসসুপারিনটেনডেন্ট প্লিহা প্লিহাবৃদ্ধিরোগ পলিহেড্রন পুলী প্লীজ প্লীডার পলীদ প্লীহা প্লীহাবৃদ্ধি প্লেগ প্লেজার প্লেট প্লেটো প্লেটোনিক প্লেটোনিকলাভ প্লেটোনিজম প্লেটোনীয় প্লেটোবাদ প্লেটোবাদী প্লেন প্লেব্যাক প্লেবয় পুলেরহাট প্লেস পলেস্তারা পলেস্তারাদি পলেস্তারাহীন প্লেসমেন্ট প্লেয়ার প্লেয়িং পলো পলট প্লট পলযুক্ত পল্যঙ্ক পল্যঙ্কবন্ধ পলটা পলটাইয়া প্ল্যাকার্ড প্ল্যাঙ্ক প্ল্যাঙ্কটন প্ল্যাটনিক প্ল্যাটনিকলাভ প্ল্যাটফরম প্ল্যাটফর্ম প্ল্যান প্ল্যানিং প্ল্যানচেট প্ল্যানেট প্ল্যান্ট প্ল্যাসটার প্ল্যাস্টিক পলটি পুলটি পুলটিস প্লুটো প্লুটোগ্রহ প্লুটোনিয়াম পলটন পল্টন পল্টনি প্লুত প্লুতগতি পলতা পলতে পলতোলা প্লব প্লবগ প্লবগতি প্লবঙ্গ প্লবঙ্গম প্লবচর প্লবতা প্লবন প্লবমান পলল পল্লি পল্লিউন্নয়ন পল্লিগীতি পল্লিগ্রাম পল্লিজীবন পল্লিবাংলা পল্লিবাসিনী পল্লিবাসী পল্লিমঙ্গল পল্লিসংগীত পল্লিসঙ্গীত পল্লিসঙ্ঘ পল্লিসঞ্জীবন পল্লী পল্লীউন্নয়ন পল্লীকবি পল্লীগীতি পল্লীগ্রাম পল্লীজীবন পল্লীবালা পল্লীবাসিনী পল্লীবাসী পল্লীবধূ পল্লীমঙ্গল পল্লীসঙ্গীত পল্লীসঙ্ঘ পল্লীসমাজ পল্লব পল্লবগ্রাহিতা পল্লবগ্রাহী পল্লবাধার পল্লবিত পল্লবী পল্লবযুক্ত পল্লবপুঞ্জ পল্লবমর্মর পললভূমি পুলসিরাত পলস্তারা পশু পশুখাদ্য পশুঘাত পশুঘাতী পশা পশার পশারি পশারী পশারপ্রতিপত্তি পশাল পুশিদা পশিল পশ্চাৎ পশ্চাৎগামী পশ্চাত্তাপ পশ্চাৎদৃশ্য পশ্চাৎপট পশ্চাৎপদ পশ্চাৎপ্রকোষ্ঠ পশ্চাৎপসারণ পশ্চাৎমস্তিষ্ক পশ্চাদগামী পশ্চাদগঠন পশ্চাদজিহ্বা পশ্চাদদন্তমূলীয় পশ্চাদপসরণ পশ্চাদ্ভাগ পশ্চাদভূমি পশুচারক পশুচারণ পশুচারণক্ষেত্র পশুচারণভূমি পশ্চার্ধ পশ্চিম পশ্চিমঘাট পশ্চিমা পশ্চিমাংশ পশ্চিমাকাশ পশ্চিমাঞ্চল পশ্চিমাঞ্চলীয় পশ্চিমাঞ্চলবাসী পশ্চিমাভিমুখ পশ্চিমাভিমুখী পশ্চিমতীরস্থ পশ্চিমদিক পশ্চিমদিকস্থ পশ্চিমদেশ পশ্চিমদেশীয় পশ্চিমবঙ্গ পশ্চিমবঙ্গরাজ্য পশ্চিমবাংলা পশ্চিমভাগ পশ্চিমমুখী পশ্চিমস্থ পুশীদা পশুজগত পশুজগৎ পশুজাতি পশুজীব পশুযজ্ঞ পশতু পশুত্ব পশুতুল্য পশুদল পশুধর্ম পৃশ্নি পশুপক্ষী পশুপাখি পশুপালক পশুপালন পশুপালনাদি পশুপতি পশ্বাচার পশ্বাচারী পশুবধ পশ্বধম পশুবলি পশম পশুমাংস পশমি পশমিনা পশরা পশুরাজ পশুরি পশুরী পশুরডাক পশল পশলা পশুলোম পশুলোমনির্মিত পশুশাবক পশুশালা পশুস্বভাব পশুসমাজ পশুসম্পদ পশুসুলভ পশুহত্যা পশুহননকারী পুষ পুষুক পুষ্কর পুষ্করিণী পুষ্করতীর্থ পুষা পূষা পুষান পুষানো পুষি পুষিত পুষিতাম পুষিতিস পুষিতে পুষিতেছ পুষিতেছি পুষিতেছিল পুষিতেছিলাম পুষিতেছিলি পুষিতেছিলে পুষিতেছিলেন পুষিতেছিস পুষিতেছে পুষিতেছেন পুষিতেন পুষিব পুষিবার পুষিবি পুষিবে পুষিবেন পুষিল পুষিলাম পুষিলি পুষিলে পুষিলেন পুষিস পুষিয়া পুষিয়াছ পুষিয়াছি পুষিয়াছিল পুষিয়াছিলাম পুষিয়াছিলি পুষিয়াছিলে পুষিয়াছিলেন পুষিয়াছিস পুষিয়াছে পুষিয়াছেন পুষিয়ে পুষিয়েছ পুষিয়েছি পুষিয়েছিল পুষিয়েছিলাম পুষিয়েছিলি পুষিয়েছিলে পুষিয়েছিলেন পুষিয়েছিলেম পুষিয়েছিলুম পুষিয়েছিস পুষিয়েছে পুষিয়েছেন পুষিয়ো পুষে পুষেছ পুষেছি পুষেছিল পুষেছিলাম পুষেছিলি পুষেছিলে পুষেছিলেন পুষেছিলেম পুষেছিলুম পুষেছিস পুষেছে পুষেছেন পুষেন পুষো পৃষোদর পুষছ পুষছি পুষছিল পুষছিলাম পুষছিলি পুষছিলে পুষছিলেন পুষছিলেম পুষছিলুম পুষছিস পুষছে পুষছেন পষ্ট পুষ্ট পৃষ্ট পুষ্টকরণ পুষ্যা পুষ্যানক্ষত্র পষ্টাপষ্টি পুষ্টি পুষ্টিকারক পুষ্টিকর পুষ্টিগুণ পুষ্টিদান পুষ্টিদানকারী পুষ্যিপুত্তুর পুষ্টিপূর্ণ পুষ্টিবিজ্ঞান পুষ্টিবিদ পুষ্টিবিশেষজ্ঞ পুষ্টিবর্ধক পুষ্টিমান পুষ্টিসাধক পুষ্টিসাধন পুষ্টিসমৃদ্ধ পৃষ্ঠ পৃষ্ঠকূঞ্চিত পৃষ্ঠা পৃষ্ঠাঙ্ক পৃষ্ঠাযুক্ত পৃষ্ঠাসংখ্যা পৃষ্ঠোপরি পৃষ্ঠটান পৃষ্ঠতর পৃষ্ঠতল পৃষ্ঠতলীয় পৃষ্ঠদেশ পৃষ্ঠপোষক পৃষ্ঠপোষকতা পৃষ্ঠপোষণ পৃষ্ঠপ্রদর্শন পৃষ্ঠবংশ পৃষ্ঠব্রণ পৃষ্ঠভঙ্গ পৃষ্ঠভাগ পৃষ্ঠভূমি পৃষ্ঠরক্ষক পৃষ্ঠরক্ষা পৃষ্ঠসংলগ্ন পুষত পৃষত পৃষৎ পুষতাম পুষতিস পৃষতী পুষতে পুষতেন পুষতেম পুষতুম পুষুন পূষন পুষ্প পুষ্পক পুষ্পকেতু পুষ্পকেতন পুষ্পকোরক পুষ্পকোষ পুষ্পকলি পুষ্পগন্ধ পুষ্পাকার পুষ্পাগম পুষ্পাগমকাল পুষ্পাঞ্জলি পুষ্পাদি পুষ্পাধার পুষ্পাভরণ পুষ্পাভরণা পুষ্পাসার পুষ্পাসব পুষ্পিকা পুষ্পিত পুষ্পিতা পুষ্পচাপ পুষ্পচয়ন পুষ্পচয়নকারী পুষ্পোদ্যান পুষ্পজীবী পুষ্পযুক্ত পুষ্পযোনি পুষ্পদ্বারা পুষ্পধানী পুষ্পধনু পুষ্পধন্বা পুষ্পধন্বন পুষ্পনির্যাস পুষ্পপাত্র পুষ্পপত্র পুষ্পবৃক্ষ পুষ্পবাটিকা পুষ্পবাটী পুষ্পবাণ পুষ্পবিতান পুষ্পবতী পুষ্পবৃন্ত পুষ্পবর্ষণ পুষ্পবৃষ্টি পুষ্পভূষণ পুষ্পমালা পুষ্পমাল্য পুষ্পমাস পুষ্পমঞ্জরি পুষ্পমধু পুষ্পময় পুষ্পরাগ পুষ্পরাগমণি পুষ্পরাজ পুষ্পরেণু পুষ্পরজ পুষ্পরথ পুষ্পরস পুষ্পল পুষ্পশয্যা পুষ্পশর পুষ্পসংগ্রহ পুষ্পসার পুষ্পসজ্জিত পুষ্পস্তবক পুষ্পসুবাস পুষ্পসম পুষ্পহীন পুষব পুষবি পুষবে পুষবেন পুষবো পুষল পুষলাম পুষলি পুষলে পুষলেন পুষলেম পুষলুম পুসাদ পসার পসারা পসারি পসারিণী পসারণ পসারল পসারলি পসালা পসাহী পসাহন পুসিদা পসিবল পস্তু পুস্ত পুস্তক পুস্তকাগার পুস্তকাদি পুস্তকাবলী পুস্তকালয় পুস্তকতালিকা পুস্তকপ্রণয়ন পুস্তকভাণ্ডার পুস্তকস্থ পস্তা পুস্তা পস্তাই পস্তাইও পস্তাইত পস্তাইতাম পস্তাইতিস পস্তাইতে পস্তাইতেছ পস্তাইতেছি পস্তাইতেছিল পস্তাইতেছিলাম পস্তাইতেছিলি পস্তাইতেছিলে পস্তাইতেছিলেন পস্তাইতেছিস পস্তাইতেছে পস্তাইতেছেন পস্তাইতেন পস্তাইব পস্তাইবার পস্তাইবি পস্তাইবে পস্তাইবেন পস্তাইল পস্তাইলাম পস্তাইলি পস্তাইলে পস্তাইলেন পস্তাইয়া পস্তাইয়াছ পস্তাইয়াছি পস্তাইয়াছিল পস্তাইয়াছিলাম পস্তাইয়াছিলি পস্তাইয়াছিলে পস্তাইয়াছিলেন পস্তাইয়াছিস পস্তাইয়াছে পস্তাইয়াছেন পস্তাইয়ো পস্তাক পস্তাচ্ছ পস্তাচ্ছি পস্তাচ্ছিল পস্তাচ্ছিলাম পস্তাচ্ছিলি পস্তাচ্ছিলে পস্তাচ্ছিলেন পস্তাচ্ছিলেম পস্তাচ্ছিলুম পস্তাচ্ছিস পস্তাচ্ছে পস্তাচ্ছেন পস্তাত পস্তাতাম পস্তাতিস পস্তাতে পস্তাতেন পস্তাতেম পস্তাতুম পস্তান পুস্তান পস্তানি পুস্তানি পস্তানো পস্তাব পস্তাবার পস্তাবি পস্তাবে পস্তাবেন পস্তাবো পস্তাল পস্তালাম পস্তালি পস্তালে পস্তালেন পস্তালেম পস্তালুম পস্তাস পুস্তিকা পুস্তিন পুস্তী পুস্তীন পস্তে পস্তেছ পস্তেছি পস্তেছিল পস্তেছিলাম পস্তেছিলি পস্তেছিলে পস্তেছিলেন পস্তেছিলেম পস্তেছিলুম পস্তেছিস পস্তেছে পস্তেছেন পস্তো পুস্তনি পসন্দ পসন্ন পসরা পসুরি পসুরী পসলা পহু পহুঁ পঁহু পুহি পহিরণ পহিল পহিলা পহিলহি পুহিয়ে পুহিয়েছ পুহিয়েছি পুহিয়েছিল পুহিয়েছিলাম পুহিয়েছিলি পুহিয়েছিলে পুহিয়েছিলেন পুহিয়েছিলেম পুহিয়েছিলুম পুহিয়েছিস পুহিয়েছে পুহিয়েছেন পুহিয়ো পহচানা পহেলা পহেলি পঁহুছা পঁহুছন পুহপ পহর পহরি পহরিয়া পহুরী পহলব পহলবি পহলবী পড় পুড় পড়ুক পুড়ক পুড়ুক পড়া পুড়া পুঁড়া পড়াং পড়াংপড়াং পড়াইও পুড়াইও পড়াইছেন পড়াইত পুড়াইত পড়াইতাম পুড়াইতাম পড়াইতিস পুড়াইতিস পড়াইতে পুড়াইতে পড়াইতেছ পুড়াইতেছ পড়াইতেছি পুড়াইতেছি পড়াইতেছিল পুড়াইতেছিল পড়াইতেছিলাম পুড়াইতেছিলাম পড়াইতেছিলি পুড়াইতেছিলি পড়াইতেছিলে পুড়াইতেছিলে পড়াইতেছিলেন পুড়াইতেছিলেন পড়াইতেছিস পুড়াইতেছিস পড়াইতেছে পুড়াইতেছে পড়াইতেছেন পুড়াইতেছেন পড়াইতেন পুড়াইতেন পড়াইব পুড়াইব পড়াইবার পুড়াইবার পড়াইবি পুড়াইবি পড়াইবে পুড়াইবে পড়াইবেন পুড়াইবেন পড়াইল পুড়াইল পড়াইলাম পুড়াইলাম পড়াইলি পুড়াইলি পড়াইলে পুড়াইলে পড়াইলেন পুড়াইলেন পড়াইয়া পুড়াইয়া পড়াইয়াছ পুড়াইয়াছ পড়াইয়াছি পুড়াইয়াছি পড়াইয়াছিল পুড়াইয়াছিল পড়াইয়াছিলাম পুড়াইয়াছিলাম পড়াইয়াছিলি পুড়াইয়াছিলি পড়াইয়াছিলে পুড়াইয়াছিলে পড়াইয়াছিলেন পুড়াইয়াছিলেন পড়াইয়াছিস পুড়াইয়াছিস পড়াইয়াছে পুড়াইয়াছে পড়াইয়াছেন পুড়াইয়াছেন পড়াইয়ো পুড়াইয়ো পড়াও পুড়াও পড়াক পুড়াক পড়াকালীন পড়াচ্ছ পড়াচ্ছি পড়াচ্ছিল পড়াচ্ছিলাম পড়াচ্ছিলি পড়াচ্ছিলে পড়াচ্ছিলেন পড়াচ্ছিলেম পড়াচ্ছিলুম পড়াচ্ছিস পড়াচ্ছে পড়াচ্ছেন পড়াত পড়াতাম পড়াতিস পড়াতে পড়াতেন পড়াতেম পড়াতুম পড়াধরা পড়ান পুড়ান পুড়ানি পুড়ানিয়া পুড়ানে পড়ানো পুড়ানো পড়াব পড়াবা পড়াবার পড়াবি পড়াবে পড়াবেন পড়াবো পড়াভাগ্যি পড়ামাত্র পড়ারঘর পড়ারচাড় পড়াল পড়ালাম পড়ালি পড়ালে পড়ালেখা পড়ালেন পড়ালেম পড়ালুম পড়াশোনা পড়াশুনা পড়াশুনো পড়াস পুড়াস পুড়ায়া পড়ি পুড়ি পড়িঘাউ পড়িত পুড়িত পড়িতাম পুড়িতাম পড়িতিস পুড়িতিস পড়িতে পুড়িতে পড়িতেছ পুড়িতেছ পড়িতেছি পুড়িতেছি পড়িতেছিল পুড়িতেছিল পড়িতেছিলাম পুড়িতেছিলাম পড়িতেছিলি পুড়িতেছিলি পড়িতেছিলে পুড়িতেছিলে পড়িতেছিলেন পুড়িতেছিলেন পড়িতেছিস পুড়িতেছিস পড়িতেছে পুড়িতেছে পড়িতেছেন পুড়িতেছেন পড়িতেন পুড়িতেন পড়িনি পড়িব পুড়িব পড়িবার পুড়িবার পড়িবি পুড়িবি পড়িবে পুড়িবে পড়িবেন পুড়িবেন পড়িভায় পড়িমরি পড়িল পুড়িল পড়িলাম পুড়িলাম পড়িলি পুড়িলি পড়িলে পুড়িলে পড়িলেন পুড়িলেন পড়িস পুড়িস পড়িহাই পড়িহাস পড়িয়া পুড়িয়া পড়িয়াছ পুড়িয়াছ পড়িয়াছি পুড়িয়াছি পড়িয়াছিল পুড়িয়াছিল পড়িয়াছিলাম পুড়িয়াছিলাম পড়িয়াছিলি পুড়িয়াছিলি পড়িয়াছিলে পুড়িয়াছিলে পড়িয়াছিলেন পুড়িয়াছিলেন পড়িয়াছিস পুড়িয়াছিস পড়িয়াছে পুড়িয়াছে পড়িয়াছেন পুড়িয়াছেন পড়িয়ান পড়িয়ে পুড়িয়ে পড়িয়েছ পুড়িয়েছ পড়িয়েছি পুড়িয়েছি পড়িয়েছিল পুড়িয়েছিল পড়িয়েছিলাম পুড়িয়েছিলাম পড়িয়েছিলি পুড়িয়েছিলি পড়িয়েছিলে পুড়িয়েছিলে পড়িয়েছিলেন পুড়িয়েছিলেন পড়িয়েছিলেম পুড়িয়েছিলেম পড়িয়েছিলুম পুড়িয়েছিলুম পড়িয়েছিস পুড়িয়েছিস পড়িয়েছে পুড়িয়েছে পড়িয়েছেন পুড়িয়েছেন পড়িয়ো পুড়িয়ো পুড়চ্ছ পুড়চ্ছি পুড়চ্ছিল পুড়চ্ছিলাম পুড়চ্ছিলি পুড়চ্ছিলে পুড়চ্ছিলেন পুড়চ্ছিলেম পুড়চ্ছিলুম পুড়চ্ছিস পুড়চ্ছে পুড়চ্ছেন পড়ে পুড়ে পড়েছ পুড়েছ পড়েছি পুড়েছি পড়েছিল পুড়েছিল পড়েছিলাম পুড়েছিলাম পড়েছিলি পুড়েছিলি পড়েছিলে পুড়েছিলে পড়েছিলেন পুড়েছিলেন পড়েছিলেম পুড়েছিলেম পড়েছিলো পড়েছিলুম পুড়েছিলুম পড়েছিস পুড়েছিস পড়েছে পুড়েছে পড়েছেন পুড়েছেন পড়েথাকা পড়েন পুড়েন পড়েনা পড়েনি পড়েননি পড়েপড়ে পড়েস পড়ো পুড়ো পড়োপড়ো পড়ছ পুড়ছ পড়ছি পুড়ছি পড়ছিল পুড়ছিল পড়ছিলাম পুড়ছিলাম পড়ছিলি পুড়ছিলি পড়ছিলে পুড়ছিলে পড়ছিলেন পুড়ছিলেন পড়ছিলেম পুড়ছিলেম পড়ছিলুম পুড়ছিলুম পড়ছিস পুড়ছিস পড়ছে পুড়ছে পড়ছেন পুড়ছেন পড়ত পুড়ত পড়তা পড়তাম পুড়তাম পড়তি পড়তিবাজার পড়তিস পুড়তিস পড়তে পুড়তে পড়তেছে পড়তেন পুড়তেন পড়তেম পুড়তেম পড়তো পড়তুম পুড়তুম পড়ন পড়ুন পুড়ন পুড়ুন পুড়নি পুড়ুনি পুড়নে পুড়নো পড়ন্ত পুড়ন্ত পড়পড় পড়ব পুড়ব পড়বার পুড়বার পড়বি পুড়বি পড়বে পুড়বে পড়বেন পুড়বেন পড়বেননা পড়বো পুড়বো পড়ল পুড়ল পড়লাম পুড়লাম পড়লি পুড়লি পড়লে পুড়লে পড়লেন পুড়লেন পড়লেম পুড়লেম পড়লো পড়লুম পুড়লুম পড়শি পুড়স পড়সি পুড়য় পড়ুয়া পঢ়া পঢ়ন পঢ়ম পয় পৃয় পয়ঃপ্রণালি পয়ঃপ্রণালী পয়গাম পয়গাম্বর পয়গম্বর পয়া পয়াণ পয়ান পয়ার পয়েন্ট পয়েন্টার পয়েন্টিং পয়েন্টধারী পুয়ের্টো পুয়ের্তো পয়োধি পয়োধর পয়োনালা পয়োনালি পয়োনিধি পয়োভার পয়োমুক পয়জার পয়যার পঁয়তারা পঁয়তাল্লিশ পঁয়ত্রিশ পয়দা পয়দায়েশ পয়দায়েস পয়দল পয়নালা পয়নালি পয়মাল পয়মন্ত পয়রা পয়লা পঁয়ষট্টি পয়সা পয়সাওয়ালা পয়সাকড়ি পয়স্য পয়স্তি পয়স্তী পয়স্বিনী".split(" "),
              w_ph: "ফ ফু ফুঁ ফইজত ফইজৎ ফইলা ফুইলা ফইড় ফইড়া ফওজ ফওরান ফক ফুক ফুঁক ফুঁকুক ফক্কা ফক্কিকা ফক্কিকার ফক্কিকারি ফক্কর ফক্করি ফক্কড় ফক্কড়ি ফক্কুড়ি ফুকা ফুঁকা ফুকার ফুকারা ফুকারি ফুঁকি ফুঁকিও ফুঁকিত ফুঁকিতাম ফুঁকিতিস ফুঁকিতে ফুঁকিতেছ ফুঁকিতেছি ফুঁকিতেছিল ফুঁকিতেছিলাম ফুঁকিতেছিলি ফুঁকিতেছিলে ফুঁকিতেছিলেন ফুঁকিতেছিস ফুঁকিতেছে ফুঁকিতেছেন ফুঁকিতেন ফুঁকিব ফুঁকিবার ফুঁকিবি ফুঁকিবে ফুঁকিবেন ফকির ফকিরা ফকিরাপুল ফকিরি ফকিরনি ফকিরনী ফকিরবিদ্রোহ ফকিরহাট ফুঁকিল ফুঁকিলাম ফুঁকিলি ফুঁকিলে ফুঁকিলেন ফুঁকিস ফুঁকিয়া ফুঁকিয়াছ ফুঁকিয়াছি ফুঁকিয়াছিল ফুঁকিয়াছিলাম ফুঁকিয়াছিলি ফুঁকিয়াছিলে ফুঁকিয়াছিলেন ফুঁকিয়াছিস ফুঁকিয়াছে ফুঁকিয়াছেন ফুঁকিয়ো ফুকচি ফকীর ফকীরি ফুঁকে ফুঁকেছ ফুঁকেছি ফুঁকেছিল ফুঁকেছিলাম ফুঁকেছিলি ফুঁকেছিলে ফুঁকেছিলেন ফুঁকেছিলেম ফুঁকেছিলুম ফুঁকেছিস ফুঁকেছে ফুঁকেছেন ফুঁকেন ফুকো ফুঁকো ফুঁকছ ফুঁকছি ফুঁকছিল ফুঁকছিলাম ফুঁকছিলি ফুঁকছিলে ফুঁকছিলেন ফুঁকছিলেম ফুঁকছিলুম ফুঁকছিস ফুঁকছে ফুঁকছেন ফুঁকত ফুঁকতাম ফুঁকতিস ফুঁকতে ফুঁকতেন ফুঁকতেম ফুঁকতুম ফুকন ফুঁকুন ফকফক ফুকফুক ফকফকে ফুঁকব ফুঁকবি ফুঁকবে ফুঁকবেন ফুঁকবো ফুকর ফকরা ফুকরা ফুকরানো ফুকরি ফকরে ফুকরে ফুঁকল ফুঁকলাম ফুঁকলি ফুঁকলে ফুঁকলেন ফুঁকলেম ফুঁকলুম ফখর ফখরুদ্দিন ফখরুদ্দীন ফুগইতে ফগহর্ন ফঙ্গি ফুঙ্গি ফঙ্গবানি ফঙ্গবেনে ফুঙি ফা ফাং ফাংশন ফাংশনাল ফাংশনালিটি ফাংশনভিত্তিক ফাঁই ফাইন ফাইনাল ফাইনালি ফাঁইফাঁই ফাইফরমাশ ফাইবার ফাইব্রোসিস ফাইভ ফাইল ফাইলেরিয়া ফাইলসিস্টেম ফাউ ফাউগ ফাউন্টেনপেন ফাউন্ডেশন ফাউল ফাউড়া ফাও ফাওড়া ফাঁক ফাক্কা ফাকা ফাঁকা ফাঁকাআওয়াজ ফাঁকাফাঁকা ফাঁকার ফাঁকাস্থান ফাকি ফাঁকি ফাঁকিজুঁকি ফাঁকিজুঁখি ফাঁকিবাজ ফাঁকিবাজি ফাঁকেফাঁকে ফাঁকযুক্ত ফাঁকতাল ফাঁকতালে ফাঁকতাল্লা ফাঁকফুকুর ফাঁকফাঁক ফাঁকফোকর ফাঁকহীন ফাগ ফাগু ফাগুন ফাগুনমাস ফাঙ্গাস ফাজিল ফাজেল ফাজলামি ফাজলামো ফাট ফাটক ফাটুক ফাটকা ফাটকাগিরি ফাটকাবাজ ফাটকাবাজি ফাটকিনাটকি ফাটা ফাটাই ফাটাইও ফাটাইত ফাটাইতাম ফাটাইতিস ফাটাইতে ফাটাইতেছ ফাটাইতেছি ফাটাইতেছিল ফাটাইতেছিলাম ফাটাইতেছিলি ফাটাইতেছিলে ফাটাইতেছিলেন ফাটাইতেছিস ফাটাইতেছে ফাটাইতেছেন ফাটাইতেন ফাটাইব ফাটাইবার ফাটাইবি ফাটাইবে ফাটাইবেন ফাটাইল ফাটাইলাম ফাটাইলি ফাটাইলে ফাটাইলেন ফাটাইয়া ফাটাইয়াছ ফাটাইয়াছি ফাটাইয়াছিল ফাটাইয়াছিলাম ফাটাইয়াছিলি ফাটাইয়াছিলে ফাটাইয়াছিলেন ফাটাইয়াছিস ফাটাইয়াছে ফাটাইয়াছেন ফাটাইয়ো ফাটাক ফাটাচ্ছ ফাটাচ্ছি ফাটাচ্ছিল ফাটাচ্ছিলাম ফাটাচ্ছিলি ফাটাচ্ছিলে ফাটাচ্ছিলেন ফাটাচ্ছিলেম ফাটাচ্ছিলুম ফাটাচ্ছিস ফাটাচ্ছে ফাটাচ্ছেন ফাটাত ফাটাতাম ফাটাতিস ফাটাতে ফাটাতেন ফাটাতেম ফাটাতুম ফাটান ফাটানো ফাটাফাটি ফাটাব ফাটাবার ফাটাবি ফাটাবে ফাটাবেন ফাটাবো ফাটাল ফাটালাম ফাটালি ফাটালে ফাটালেন ফাটালেম ফাটালুম ফাটাস ফাটি ফাটিত ফাটিতাম ফাটিতিস ফাটিতে ফাটিতেছ ফাটিতেছি ফাটিতেছিল ফাটিতেছিলাম ফাটিতেছিলি ফাটিতেছিলে ফাটিতেছিলেন ফাটিতেছিস ফাটিতেছে ফাটিতেছেন ফাটিতেন ফাটিব ফাটিবার ফাটিবি ফাটিবে ফাটিবেন ফাটিল ফাটিলাম ফাটিলি ফাটিলে ফাটিলেন ফাটিস ফাটিয়া ফাটিয়াছ ফাটিয়াছি ফাটিয়াছিল ফাটিয়াছিলাম ফাটিয়াছিলি ফাটিয়াছিলে ফাটিয়াছিলেন ফাটিয়াছিস ফাটিয়াছে ফাটিয়াছেন ফাটিয়ে ফাটিয়েছ ফাটিয়েছি ফাটিয়েছিল ফাটিয়েছিলাম ফাটিয়েছিলি ফাটিয়েছিলে ফাটিয়েছিলেন ফাটিয়েছিলেম ফাটিয়েছিলুম ফাটিয়েছিস ফাটিয়েছে ফাটিয়েছেন ফাটিয়ো ফাটে ফাটেন ফাযেল ফাটছ ফাটছি ফাটছিল ফাটছিলাম ফাটছিলি ফাটছিলে ফাটছিলেন ফাটছিলেম ফাটছিলুম ফাটছিস ফাটছে ফাটছেন ফাটত ফাটতাম ফাটতিস ফাটতে ফাটতেন ফাটতেম ফাটতুম ফাটন ফাটুন ফাটব ফাটবার ফাটবি ফাটবে ফাটবেন ফাটবো ফাটল ফাটলাম ফাটলি ফাটলে ফাটলেন ফাটলেম ফাটলের ফাটলুম ফাড্ডিঅ ফাণি ফাণ্ট ফাণ্ড ফাঁত ফাঁৎ ফাতিহা ফাতেহা ফাতনা ফাঁতফাঁত ফাতরা ফাৎরা ফাতরামি ফাতহ ফাঁদ ফাঁদওয়ালা ফাঁদুক ফাঁদা ফাঁদানি ফাঁদানী ফাদার ফাঁদাল ফাঁদালো ফাঁদি ফাঁদিকথা ফাঁদিত ফাঁদিতাম ফাঁদিতিস ফাঁদিতে ফাঁদিতেছ ফাঁদিতেছি ফাঁদিতেছিল ফাঁদিতেছিলাম ফাঁদিতেছিলি ফাঁদিতেছিলে ফাঁদিতেছিলেন ফাঁদিতেছিস ফাঁদিতেছে ফাঁদিতেছেন ফাঁদিতেন ফাঁদিব ফাঁদিবার ফাঁদিবি ফাঁদিবে ফাঁদিবেন ফাঁদিল ফাঁদিলাম ফাঁদিলি ফাঁদিলে ফাঁদিলেন ফাঁদিস ফাঁদিয়া ফাঁদিয়াছ ফাঁদিয়াছি ফাঁদিয়াছিল ফাঁদিয়াছিলাম ফাঁদিয়াছিলি ফাঁদিয়াছিলে ফাঁদিয়াছিলেন ফাঁদিয়াছিস ফাঁদিয়াছে ফাঁদিয়াছেন ফাঁদিয়ো ফাঁদছ ফাঁদছি ফাঁদছিল ফাঁদছিলাম ফাঁদছিলি ফাঁদছিলে ফাঁদছিলেন ফাঁদছিলেম ফাঁদছিলুম ফাঁদছিস ফাঁদছে ফাঁদছেন ফাঁদত ফাঁদতাম ফাঁদতিস ফাঁদতেন ফাঁদতেম ফাঁদতুম ফাঁদুন ফাঁদপাতা ফাঁদব ফাঁদবার ফাঁদবি ফাঁদবে ফাঁদবেন ফাঁদবো ফাঁদল ফাঁদলাম ফাঁদলি ফাঁদলে ফাঁদলেন ফাঁদলেম ফাঁদলুম ফান ফানা ফানি ফানেল ফানটা ফান্ড ফান্দ ফান্দা ফানুশ ফানস ফানুস ফাঁপ ফাঁপুক ফাঁপা ফাঁপাই ফাঁপাইও ফাঁপাইত ফাঁপাইতাম ফাঁপাইতিস ফাঁপাইতে ফাঁপাইতেছ ফাঁপাইতেছি ফাঁপাইতেছিল ফাঁপাইতেছিলাম ফাঁপাইতেছিলি ফাঁপাইতেছিলে ফাঁপাইতেছিলেন ফাঁপাইতেছিস ফাঁপাইতেছে ফাঁপাইতেছেন ফাঁপাইতেন ফাঁপাইব ফাঁপাইবার ফাঁপাইবি ফাঁপাইবে ফাঁপাইবেন ফাঁপাইল ফাঁপাইলাম ফাঁপাইলি ফাঁপাইলে ফাঁপাইলেন ফাঁপাইয়া ফাঁপাইয়াছ ফাঁপাইয়াছি ফাঁপাইয়াছিল ফাঁপাইয়াছিলাম ফাঁপাইয়াছিলি ফাঁপাইয়াছিলে ফাঁপাইয়াছিলেন ফাঁপাইয়াছিস ফাঁপাইয়াছে ফাঁপাইয়াছেন ফাঁপাইয়ো ফাঁপাও ফাঁপাক ফাঁপাচ্ছ ফাঁপাচ্ছি ফাঁপাচ্ছিল ফাঁপাচ্ছিলাম ফাঁপাচ্ছিলি ফাঁপাচ্ছিলে ফাঁপাচ্ছিলেন ফাঁপাচ্ছিলেম ফাঁপাচ্ছিলুম ফাঁপাচ্ছিস ফাঁপাচ্ছে ফাঁপাচ্ছেন ফাঁপাঢেঁকি ফাঁপাত ফাঁপাতাম ফাঁপাতিস ফাঁপাতে ফাঁপাতেন ফাঁপাতেম ফাঁপাতুম ফাঁপান ফাঁপানো ফাঁপাব ফাঁপাবার ফাঁপাবি ফাঁপাবে ফাঁপাবেন ফাঁপাবো ফাঁপাল ফাঁপালাম ফাঁপালি ফাঁপালে ফাঁপালেন ফাঁপালেম ফাঁপালুম ফাঁপাস ফাঁপি ফাঁপিত ফাঁপিতাম ফাঁপিতিস ফাঁপিতে ফাঁপিতেছ ফাঁপিতেছি ফাঁপিতেছিল ফাঁপিতেছিলাম ফাঁপিতেছিলি ফাঁপিতেছিলে ফাঁপিতেছিলেন ফাঁপিতেছিস ফাঁপিতেছে ফাঁপিতেছেন ফাঁপিতেন ফাঁপিব ফাঁপিবার ফাঁপিবি ফাঁপিবে ফাঁপিবেন ফাঁপিল ফাঁপিলাম ফাঁপিলি ফাঁপিলে ফাঁপিলেন ফাঁপিস ফাঁপিয়া ফাঁপিয়াছ ফাঁপিয়াছি ফাঁপিয়াছিল ফাঁপিয়াছিলাম ফাঁপিয়াছিলি ফাঁপিয়াছিলে ফাঁপিয়াছিলেন ফাঁপিয়াছিস ফাঁপিয়াছে ফাঁপিয়াছেন ফাঁপিয়ে ফাঁপিয়েছ ফাঁপিয়েছি ফাঁপিয়েছিল ফাঁপিয়েছিলাম ফাঁপিয়েছিলি ফাঁপিয়েছিলে ফাঁপিয়েছিলেন ফাঁপিয়েছিলেম ফাঁপিয়েছিলুম ফাঁপিয়েছিস ফাঁপিয়েছে ফাঁপিয়েছেন ফাঁপিয়ো ফাঁপে ফাঁপেন ফাঁপছ ফাঁপছি ফাঁপছিল ফাঁপছিলাম ফাঁপছিলি ফাঁপছিলে ফাঁপছিলেন ফাঁপছিলেম ফাঁপছিলুম ফাঁপছিস ফাঁপছে ফাঁপছেন ফাঁপত ফাঁপতাম ফাঁপতিস ফাঁপতে ফাঁপতেন ফাঁপতেম ফাঁপতুম ফাঁপুন ফাঁপব ফাঁপবার ফাঁপবি ফাঁপবে ফাঁপবেন ফাঁপবো ফাপর ফাঁপর ফাঁপল ফাঁপলাম ফাঁপলি ফাঁপলে ফাঁপলেন ফাঁপলেম ফাঁপলুম ফাঁফ ফাফর ফাঁফর ফাবড়া ফার ফারকত ফারখত ফারখৎ ফারখতাখতি ফারখতি ফারাও ফারাক ফারাক্কা ফারাগ ফারাফারা ফারেনহাইট ফারেস ফার্টিলাইজার ফার্ন ফার্নিচার ফার্নেস ফার্নট্রি ফারফোর ফারম ফার্ম ফার্মগেট ফার্মা ফার্মাকোলজি ফার্মার ফার্মাসিস্ট ফারমেন্টেশন ফার্মেসি ফার্মেসী ফার্স ফারসি ফার্সি ফার্স্ট ফার্স্টএইড ফার্স্টক্লাস ফাল ফাল্গুন ফাল্গুনি ফাল্গুনী ফাল্গুনমাস ফালা ফালাও ফালাক ফালানি ফালাফালা ফালাফালি ফালালে ফালি ফালিকরা ফালতু ফালতো ফালুদা ফালসা ফালসাই ফাঁশ ফাশকথা ফাঁশকল ফাঁশি ফাঁশিকাঠ ফাঁস ফাঁসুক ফাঁসকল ফাঁসা ফাঁসাই ফাঁসাইও ফাঁসাইত ফাঁসাইতাম ফাঁসাইতিস ফাঁসাইতে ফাঁসাইতেছ ফাঁসাইতেছি ফাঁসাইতেছিল ফাঁসাইতেছিলাম ফাঁসাইতেছিলি ফাঁসাইতেছিলে ফাঁসাইতেছিলেন ফাঁসাইতেছিস ফাঁসাইতেছে ফাঁসাইতেছেন ফাঁসাইতেন ফাঁসাইব ফাঁসাইবার ফাঁসাইবি ফাঁসাইবে ফাঁসাইবেন ফাঁসাইল ফাঁসাইলাম ফাঁসাইলি ফাঁসাইলে ফাঁসাইলেন ফাঁসাইয়া ফাঁসাইয়াছ ফাঁসাইয়াছি ফাঁসাইয়াছিল ফাঁসাইয়াছিলাম ফাঁসাইয়াছিলি ফাঁসাইয়াছিলে ফাঁসাইয়াছিলেন ফাঁসাইয়াছিস ফাঁসাইয়াছে ফাঁসাইয়াছেন ফাঁসাইয়ো ফাঁসাও ফাঁসাক ফাঁসাচ্ছ ফাঁসাচ্ছি ফাঁসাচ্ছিল ফাঁসাচ্ছিলাম ফাঁসাচ্ছিলি ফাঁসাচ্ছিলে ফাঁসাচ্ছিলেন ফাঁসাচ্ছিলেম ফাঁসাচ্ছিলুম ফাঁসাচ্ছিস ফাঁসাচ্ছে ফাঁসাচ্ছেন ফাঁসাত ফাঁসাতাম ফাঁসাতিস ফাঁসাতে ফাঁসাতেন ফাঁসাতেম ফাঁসাতুম ফাঁসান ফাঁসানো ফাঁসাব ফাঁসাবার ফাঁসাবি ফাঁসাবে ফাঁসাবেন ফাঁসাবো ফাঁসাল ফাঁসালাম ফাঁসালি ফাঁসালে ফাঁসালেন ফাঁসালেম ফাঁসালুম ফাঁসাস ফাঁসি ফাঁসিকাঠ ফাঁসিত ফাঁসিতাম ফাঁসিতিস ফাঁসিতে ফাঁসিতেছ ফাঁসিতেছি ফাঁসিতেছিল ফাঁসিতেছিলাম ফাঁসিতেছিলি ফাঁসিতেছিলে ফাঁসিতেছিলেন ফাঁসিতেছিস ফাঁসিতেছে ফাঁসিতেছেন ফাঁসিতেন ফাঁসিব ফাঁসিবার ফাঁসিবি ফাঁসিবে ফাঁসিবেন ফাঁসিল ফাঁসিলাম ফাঁসিলি ফাঁসিলে ফাঁসিলেন ফাঁসিস ফাঁসিয়া ফাঁসিয়াছ ফাঁসিয়াছি ফাঁসিয়াছিল ফাঁসিয়াছিলাম ফাঁসিয়াছিলি ফাঁসিয়াছিলে ফাঁসিয়াছিলেন ফাঁসিয়াছিস ফাঁসিয়াছে ফাঁসিয়াছেন ফাঁসিয়ে ফাঁসিয়েছ ফাঁসিয়েছি ফাঁসিয়েছিল ফাঁসিয়েছিলাম ফাঁসিয়েছিলি ফাঁসিয়েছিলে ফাঁসিয়েছিলেন ফাঁসিয়েছিলেম ফাঁসিয়েছিলুম ফাঁসিয়েছিস ফাঁসিয়েছে ফাঁসিয়েছেন ফাঁসিয়ো ফাঁসী ফাঁসে ফাঁসেন ফাঁসছ ফাঁসছি ফাঁসছিল ফাঁসছিলাম ফাঁসছিলি ফাঁসছিলে ফাঁসছিলেন ফাঁসছিলেম ফাঁসছিলুম ফাঁসছিস ফাঁসছে ফাঁসছেন ফাস্ট ফাস্টএইড ফাস্টো ফাস্টফুড ফাঁসত ফাঁসতাম ফাঁসতিস ফাঁসতে ফাঁসতেন ফাঁসতেম ফাঁসতুম ফাঁসুন ফাঁসব ফাঁসবার ফাঁসবি ফাঁসবে ফাঁসবেন ফাঁসবো ফাঁসল ফাঁসলাম ফাঁসলি ফাঁসলে ফাঁসলেন ফাঁসলেম ফাঁসলুম ফাঁসুড়িয়া ফাঁসুড়ে ফাড় ফাঁড় ফাড়া ফাঁড়া ফাঁড়াগর্দিশ ফাড়ান ফাড়ানো ফাঁড়ি ফাঁড়িদার ফাঁড়ী ফাঁড়ীদার ফায়ার ফায়ারওয়ার্কস ফায়ারিং ফায়ারফক্স ফায়ারসার্ভিস ফায়দা ফায়লা ফায়সালা ফি ফিউচার ফিউজ ফিউশন ফিক ফিকা ফিকাহ ফিকিফিকি ফিকির ফিকিরবাজ ফিকে ফিকফিক ফিকশন ফিক্স ফিক্সড ফিঙ্গক ফিঙ্গার ফিঙ্গারপ্রিন্ট ফিঙ্গে ফিঙা ফিঙে ফিচার ফিচাল ফিচেল ফিচলেমি ফিজি ফিজিওথেরাপি ফিজিওথেরাপিস্ট ফিজিওলজি ফিজিক্যাল ফিজিক্যালি ফিজিক্স ফিট ফিটকারী ফিটকিরি ফিটকিরী ফিটিং ফিটিংস ফিটন ফিটনেস ফিটফাট ফিটফিটে ফিড ফিডব্যাক ফিতা ফিতাকৃমি ফিতাক্রিমি ফিতে ফিতেওয়ালা ফিতেকৃমি ফিতেছাড়া ফিতনা ফিতর ফিতরা ফিদা ফিদিয়া ফিদবি ফিন ফিনকি ফিনকী ফিনাইল ফিনিক ফিনিক্স ফিনিশ ফিনফিন ফিনফিনে ফিনল্যান্ড ফিনল্যান্ডীয় ফিফা ফির ফিরক ফিরুক ফিরকা ফিরকি ফিরঙ্গ ফিরঙ্গি ফিরঙ্গিন ফিরঙ্গব্যাধি ফিরা ফিরাই ফিরাইও ফিরাইত ফিরাইতাম ফিরাইতিস ফিরাইতে ফিরাইতেছ ফিরাইতেছি ফিরাইতেছিল ফিরাইতেছিলাম ফিরাইতেছিলি ফিরাইতেছিলে ফিরাইতেছিলেন ফিরাইতেছিস ফিরাইতেছে ফিরাইতেছেন ফিরাইতেন ফিরাইব ফিরাইবার ফিরাইবি ফিরাইবে ফিরাইবেন ফিরাইল ফিরাইলাম ফিরাইলি ফিরাইলে ফিরাইলেন ফিরাইয়া ফিরাইয়াছ ফিরাইয়াছি ফিরাইয়াছিল ফিরাইয়াছিলাম ফিরাইয়াছিলি ফিরাইয়াছিলে ফিরাইয়াছিলেন ফিরাইয়াছিস ফিরাইয়াছে ফিরাইয়াছেন ফিরাইয়ো ফিরাক ফিরান ফিরানো ফিরাফিরি ফিরাব ফিরাস ফিরায়ো ফিরি ফিরিঙ্গি ফিরিঙ্গী ফিরিছে ফিরিত ফিরিতাম ফিরিতিস ফিরিতে ফিরিতেছ ফিরিতেছি ফিরিতেছিল ফিরিতেছিলাম ফিরিতেছিলি ফিরিতেছিলে ফিরিতেছিলেন ফিরিতেছিস ফিরিতেছে ফিরিতেছেন ফিরিতেন ফিরিব ফিরিবার ফিরিবি ফিরিবে ফিরিবেন ফিরিল ফিরিলাম ফিরিলি ফিরিলে ফিরিলেন ফিরিশতা ফিরিস ফিরিস্তা ফিরিস্তি ফিরিয়া ফিরিয়াছ ফিরিয়াছি ফিরিয়াছিল ফিরিয়াছিলাম ফিরিয়াছিলি ফিরিয়াছিলে ফিরিয়াছিলেন ফিরিয়াছিস ফিরিয়াছে ফিরিয়াছেন ফিরিয়ে ফিরিয়েছ ফিরিয়েছি ফিরিয়েছিল ফিরিয়েছিলাম ফিরিয়েছিলি ফিরিয়েছিলে ফিরিয়েছিলেন ফিরিয়েছিলেম ফিরিয়েছিলুম ফিরিয়েছিস ফিরিয়েছে ফিরিয়েছেন ফিরিয়ো ফিরচ্ছ ফিরচ্ছি ফিরচ্ছিল ফিরচ্ছিলাম ফিরচ্ছিলি ফিরচ্ছিলে ফিরচ্ছিলেন ফিরচ্ছিলেম ফিরচ্ছিলুম ফিরচ্ছিস ফিরচ্ছে ফিরচ্ছেন ফিরে ফিরেছ ফিরেছি ফিরেছিল ফিরেছিলাম ফিরেছিলি ফিরেছিলে ফিরেছিলেন ফিরেছিলেম ফিরেছিলুম ফিরেছিস ফিরেছে ফিরেছেন ফিরেন ফিরোজ ফিরোজা ফিরোজী ফিরছ ফিরছি ফিরছিল ফিরছিলাম ফিরছিলি ফিরছিলে ফিরছিলেন ফিরছিলেম ফিরছিলুম ফিরছিস ফিরছে ফিরছেন ফিরত ফিরতা ফিরতাম ফিরতি ফিরতিস ফিরতে ফিরতেন ফিরতেম ফিরতুম ফিরদউস ফিরদউসি ফিরন ফিরুন ফিরনি ফিরনী ফিরনো ফিরব ফিরবার ফিরবি ফিরবে ফিরবেন ফিরবো ফিরল ফিরলাম ফিরলি ফিরলে ফিরলেন ফিরলেম ফিরলুম ফিরস ফিল ফিলখানা ফিলামেন্ট ফিলিপাইন ফিলিপাইন্স ফিলিপিন ফিলিপিনীয় ফিলিপিনো ফিলিপিন্স ফিলিস্তিন ফিলজফি ফিলটার ফিল্টার ফিল্টারিং ফিল্ড ফিল্ডার ফিল্ডিং ফিল্ডিংরত ফিল্ডমার্শাল ফিল্ডস ফিলম ফিল্ম ফিল্মস ফিলমস্টুডিও ফিল্মস্টুডিও ফিলসফি ফিলহাল ফিশিং ফিস ফিসাবিলিল্লাহ ফিসিরফিসির ফিসন ফিসফাস ফিসফিস ফিসফিসানি ফী ফুচকা ফুচকাওয়ালা ফুচকি ফুচকিমারা ফচকিয়া ফচকিয়ামি ফচকে ফুচকে ফচকেমি ফচফচ ফীল ফেউ ফেউলাগা ফেকা ফেঁকা ফেঁকাসিয়া ফেকাসে ফেঁকাসে ফেকো ফেঁকো ফেঁকড়া ফোন ফেচাং ফেচফেচ ফেছক ফেজ ফেঞ্চুগঞ্জ ফেটইনা ফেটা ফেটাই ফেটাইত ফেটাইতাম ফেটাইতিস ফেটাইতে ফেটাইতেছ ফেটাইতেছি ফেটাইতেছিল ফেটাইতেছিলাম ফেটাইতেছিলি ফেটাইতেছিলে ফেটাইতেছিলেন ফেটাইতেছিস ফেটাইতেছে ফেটাইতেছেন ফেটাইতেন ফেটাইব ফেটাইবার ফেটাইবি ফেটাইবে ফেটাইবেন ফেটাইল ফেটাইলাম ফেটাইলি ফেটাইলে ফেটাইলেন ফেটাইয়া ফেটাইয়াছ ফেটাইয়াছি ফেটাইয়াছিল ফেটাইয়াছিলাম ফেটাইয়াছিলি ফেটাইয়াছিলে ফেটাইয়াছিলেন ফেটাইয়াছিস ফেটাইয়াছে ফেটাইয়াছেন ফেটাইয়ো ফেটাক ফেটাচ্ছ ফেটাচ্ছি ফেটাচ্ছিল ফেটাচ্ছিলাম ফেটাচ্ছিলি ফেটাচ্ছিলে ফেটাচ্ছিলেন ফেটাচ্ছিলেম ফেটাচ্ছিলুম ফেটাচ্ছিস ফেটাচ্ছে ফেটাচ্ছেন ফেটাত ফেটাতাম ফেটাতিস ফেটাতে ফেটাতেন ফেটাতেম ফেটাতুম ফেটান ফেটানো ফেটাব ফেটাবার ফেটাবি ফেটাবে ফেটাবেন ফেটাবো ফেটাল ফেটালাম ফেটালি ফেটালে ফেটালেন ফেটালেম ফেটালুম ফেটাস ফেটি ফেটিং ফেটিও ফেটিন ফেটিয়ে ফেটিয়েছ ফেটিয়েছি ফেটিয়েছিল ফেটিয়েছিলাম ফেটিয়েছিলি ফেটিয়েছিলে ফেটিয়েছিলেন ফেটিয়েছিলেম ফেটিয়েছিলুম ফেটিয়েছিস ফেটিয়েছে ফেটিয়েছেন ফেটিয়ো ফেটী ফেটে ফেটেছ ফেটেছি ফেটেছিল ফেটেছিলাম ফেটেছিলি ফেটেছিলে ফেটেছিলেন ফেটেছিলেম ফেটেছিলুম ফেটেছিস ফেটেছে ফেটেছেন ফেট্টি ফেডারেল ফেডারেশন ফেণি ফেণী ফেতনা ফেতরা ফেঁদে ফেঁদেছ ফেঁদেছি ফেঁদেছিল ফেঁদেছিলাম ফেঁদেছিলি ফেঁদেছিলে ফেঁদেছিলেন ফেঁদেছিলেম ফেঁদেছিলুম ফেঁদেছিস ফেঁদেছে ফেঁদেছেন ফেঁদো ফেন ফেনক ফেনা ফেনাই ফেনাইও ফেনাইত ফেনাইতাম ফেনাইতিস ফেনাইতে ফেনাইতেছ ফেনাইতেছি ফেনাইতেছিল ফেনাইতেছিলাম ফেনাইতেছিলি ফেনাইতেছিলে ফেনাইতেছিলেন ফেনাইতেছিস ফেনাইতেছে ফেনাইতেছেন ফেনাইতেন ফেনাইব ফেনাইবার ফেনাইবি ফেনাইবে ফেনাইবেন ফেনাইল ফেনাইলাম ফেনাইলি ফেনাইলে ফেনাইলেন ফেনাইয়া ফেনাইয়াছ ফেনাইয়াছি ফেনাইয়াছিল ফেনাইয়াছিলাম ফেনাইয়াছিলি ফেনাইয়াছিলে ফেনাইয়াছিলেন ফেনাইয়াছিস ফেনাইয়াছে ফেনাইয়াছেন ফেনাইয়ো ফেনাক ফেনাচ্ছ ফেনাচ্ছি ফেনাচ্ছিল ফেনাচ্ছিলাম ফেনাচ্ছিলি ফেনাচ্ছিলে ফেনাচ্ছিলেন ফেনাচ্ছিলেম ফেনাচ্ছিলুম ফেনাচ্ছিস ফেনাচ্ছে ফেনাচ্ছেন ফেনাযুক্ত ফেনাত ফেনাতাম ফেনাতিস ফেনাতে ফেনাতেন ফেনাতেম ফেনাতুম ফেনান ফেনানো ফেনাব ফেনাবার ফেনাবি ফেনাবে ফেনাবেন ফেনাবো ফেনাল ফেনালাম ফেনালি ফেনালে ফেনালেন ফেনালেম ফেনালুম ফেনাস ফেনাসমান ফেনায়িত ফেনায়মান ফেনি ফেনিকা ফেনিবাতাসা ফেনিল ফেনিয়ে ফেনিয়েছ ফেনিয়েছি ফেনিয়েছিল ফেনিয়েছিলাম ফেনিয়েছিলি ফেনিয়েছিলে ফেনিয়েছিলেন ফেনিয়েছিলেম ফেনিয়েছিলুম ফেনিয়েছিস ফেনিয়েছে ফেনিয়েছেন ফেনিয়ো ফেনী ফেন্দ ফেনদুগ্ধা ফেননিভ ফেনভাত ফেনল ফেঁপে ফেঁপেছ ফেঁপেছি ফেঁপেছিল ফেঁপেছিলাম ফেঁপেছিলি ফেঁপেছিলে ফেঁপেছিলেন ফেঁপেছিলেম ফেঁপেছিলুম ফেঁপেছিস ফেঁপেছে ফেঁপেছেন ফেঁপো ফেফাতুরা ফেফাতুড়া ফেফাতুড়ি ফেব্রুআরি ফেব্রিকেশন ফেব্রুয়ারি ফেভারিট ফেম ফের ফেরু ফেরকা ফেরঙ্গ ফেরা ফেরান ফেরানো ফেরাফিরি ফেরার ফেরারি ফেরি ফেরিওয়ালা ফেরিঘাট ফেরিনৌকা ফেরী ফেরেন ফেরেনি ফেরেব ফেরেবফন্দি ফেরেববাজ ফেরেববাজি ফেরেশতা ফেরো ফেরত ফেরতা ফেরদৌস ফেরদৌসি ফেরবার ফেল ফেলুক ফেলকরা ফেলা ফেলাই ফেলাইছে ফেলাইব ফেলাছড়া ফেলান ফেলাফেলি ফেলি ফেলিও ফেলিক্স ফেলিত ফেলিতাম ফেলিতিস ফেলিতে ফেলিতেছ ফেলিতেছি ফেলিতেছিল ফেলিতেছিলাম ফেলিতেছিলি ফেলিতেছিলে ফেলিতেছিলেন ফেলিতেছিস ফেলিতেছে ফেলিতেছেন ফেলিতেন ফেলিনি ফেলিব ফেলিবার ফেলিবি ফেলিবে ফেলিবেন ফেলিল ফেলিলাম ফেলিলি ফেলিলে ফেলিলেন ফেলিস ফেলিয়া ফেলিয়াছ ফেলিয়াছি ফেলিয়াছিল ফেলিয়াছিলাম ফেলিয়াছিলি ফেলিয়াছিলে ফেলিয়াছিলেন ফেলিয়াছিস ফেলিয়াছে ফেলিয়াছেন ফেলিয়ো ফেলে ফেলেছ ফেলেছি ফেলেছিল ফেলেছিলাম ফেলেছিলি ফেলেছিলে ফেলেছিলেন ফেলেছিলেম ফেলেছিলুম ফেলেছিস ফেলেছে ফেলেছেন ফেলেন ফেলেনি ফেলেরাখা ফেলো ফেলোশিপ ফেলছ ফেলছি ফেলছিল ফেলছিলাম ফেলছিলি ফেলছিলে ফেলছিলেন ফেলছিলেম ফেলছিলুম ফেলছিস ফেলছে ফেলছেন ফেলজামিন ফেলত ফেলতাছে ফেলতাম ফেলতিস ফেলতে ফেলতেন ফেলতেম ফেলতুম ফেলুদা ফেলন ফেলুন ফেলনা ফেলফেল ফেলব ফেলবার ফেলবি ফেলবে ফেলবেন ফেলবেননা ফেলবো ফেলল ফেললাম ফেললি ফেললে ফেললেন ফেললেম ফেললো ফেললুম ফেলশানি ফেলসানি ফেসাদ ফেঁসে ফেঁসেছ ফেঁসেছি ফেঁসেছিল ফেঁসেছিলাম ফেঁসেছিলি ফেঁসেছিলে ফেঁসেছিলেন ফেঁসেছিলেম ফেঁসেছিলুম ফেঁসেছিস ফেঁসেছে ফেঁসেছেন ফেঁসো ফেস্টিভাল ফেস্টিভ্যাল ফেস্টুন ফেয়ার ফেয়ারওয়েল ফৈজত ফৈত্তা ফৈড় ফৈড়া ফো ফোক ফোঁক ফোক্কা ফোঁকা ফোকাল ফোকাস ফোঁকে ফোঁকেন ফোকট ফোঁকবার ফোকর ফোকরানো ফোঁকল ফোকলা ফোকলোর ফোগলা ফোট ফোটা ফোঁটা ফোটাক ফোঁটাচিহ্নিত ফোটাচ্ছ ফোটাচ্ছি ফোটাচ্ছিল ফোটাচ্ছিলাম ফোটাচ্ছিলি ফোটাচ্ছিলে ফোটাচ্ছিলেন ফোটাচ্ছিলেম ফোটাচ্ছিলুম ফোটাচ্ছিস ফোটাচ্ছে ফোটাচ্ছেন ফোঁটাযুক্ত ফোটাত ফোটাতাম ফোটাতিস ফোটাতে ফোটাতেন ফোটাতেম ফোটাতুম ফোটান ফোটানো ফোটাব ফোটাবার ফোটাবি ফোটাবে ফোটাবেন ফোটাবো ফোটাল ফোটালাম ফোটালি ফোটালে ফোটালেন ফোটালেম ফোটালুম ফোটাস ফোটে ফোটেন ফোটেনি ফোটো ফোটোগ্রাফ ফোটন ফোটবার ফোত ফোঁত ফোঁৎ ফোতো ফোন ফোনেটিক ফোনবুথ ফোঁপা ফোঁপাই ফোঁপাইও ফোঁপাইত ফোঁপাইতাম ফোঁপাইতিস ফোঁপাইতে ফোঁপাইতেছ ফোঁপাইতেছি ফোঁপাইতেছিল ফোঁপাইতেছিলাম ফোঁপাইতেছিলি ফোঁপাইতেছিলে ফোঁপাইতেছিলেন ফোঁপাইতেছিস ফোঁপাইতেছে ফোঁপাইতেছেন ফোঁপাইতেন ফোঁপাইব ফোঁপাইবার ফোঁপাইবি ফোঁপাইবে ফোঁপাইবেন ফোঁপাইল ফোঁপাইলাম ফোঁপাইলি ফোঁপাইলে ফোঁপাইলেন ফোঁপাইয়া ফোঁপাইয়াছ ফোঁপাইয়াছি ফোঁপাইয়াছিল ফোঁপাইয়াছিলাম ফোঁপাইয়াছিলি ফোঁপাইয়াছিলে ফোঁপাইয়াছিলেন ফোঁপাইয়াছিস ফোঁপাইয়াছে ফোঁপাইয়াছেন ফোঁপাইয়ো ফোঁপাও ফোঁপাক ফোঁপাচ্ছ ফোঁপাচ্ছি ফোঁপাচ্ছিল ফোঁপাচ্ছিলাম ফোঁপাচ্ছিলি ফোঁপাচ্ছিলে ফোঁপাচ্ছিলেন ফোঁপাচ্ছিলেম ফোঁপাচ্ছিলুম ফোঁপাচ্ছিস ফোঁপাচ্ছে ফোঁপাচ্ছেন ফোঁপাত ফোঁপাতাম ফোঁপাতিস ফোঁপাতে ফোঁপাতেন ফোঁপাতেম ফোঁপাতুম ফোঁপান ফোঁপানি ফোঁপানো ফোঁপাব ফোঁপাবার ফোঁপাবি ফোঁপাবে ফোঁপাবেন ফোঁপাবো ফোঁপাল ফোঁপালাম ফোঁপালি ফোঁপালে ফোঁপালেন ফোঁপালেম ফোঁপালুম ফোঁপাস ফোপর ফোঁপর ফোপরা ফোঁপরা ফোপরদালাল ফোঁপরদালাল ফোপরদালালি ফোঁপরদালালি ফোপল ফোঁপল ফোঁপলদালাল ফোভিয়া ফোম ফোমেন্ট ফোর ফোরকান ফোরা ফোরাক ফোরাচ্ছ ফোরাচ্ছি ফোরাচ্ছিল ফোরাচ্ছিলাম ফোরাচ্ছিলি ফোরাচ্ছিলে ফোরাচ্ছিলেন ফোরাচ্ছিলেম ফোরাচ্ছিলুম ফোরাচ্ছিস ফোরাচ্ছে ফোরাচ্ছেন ফোরাত ফোরাতাম ফোরাতিস ফোরাতে ফোরাতেন ফোরাতেম ফোরাতুম ফোরান ফোরানো ফোরাব ফোরাবার ফোরাবি ফোরাবে ফোরাবেন ফোরাবো ফোরাম ফোরামেন ফোরাল ফোরালাম ফোরালি ফোরালে ফোরালেন ফোরালেম ফোরালুম ফোরাস ফোরজারি ফোরম্যান ফোল ফোলা ফোলাক ফোলাচ্ছ ফোলাচ্ছি ফোলাচ্ছিল ফোলাচ্ছিলাম ফোলাচ্ছিলি ফোলাচ্ছিলে ফোলাচ্ছিলেন ফোলাচ্ছিলেম ফোলাচ্ছিলুম ফোলাচ্ছিস ফোলাচ্ছে ফোলাচ্ছেন ফোলাত ফোলাতাম ফোলাতিস ফোলাতে ফোলাতেন ফোলাতেম ফোলাতুম ফোলান ফোলানো ফোলাব ফোলাবার ফোলাবি ফোলাবে ফোলাবেন ফোলাবো ফোলাল ফোলালাম ফোলালি ফোলালে ফোলালেন ফোলালেম ফোলালুম ফোলাস ফোলে ফোলেন ফোল্ডার ফোলন ফোলবার ফোঁস ফোসকা ফোস্কা ফোঁসা ফোঁসান ফোঁসানি ফোঁসানো ফোঁসে ফোঁসেন ফোঁসফোঁস ফোঁসফোঁসান ফোঁসফোঁসানি ফোঁসফোঁসানো ফোঁসবার ফোসলা ফোসলাক ফোসলাচ্ছ ফোসলাচ্ছি ফোসলাচ্ছিল ফোসলাচ্ছিলাম ফোসলাচ্ছিলি ফোসলাচ্ছিলে ফোসলাচ্ছিলেন ফোসলাচ্ছিলেম ফোসলাচ্ছিলুম ফোসলাচ্ছিস ফোসলাচ্ছে ফোসলাচ্ছেন ফোসলাত ফোসলাতাম ফোসলাতিস ফোসলাতে ফোসলাতেন ফোসলাতেম ফোসলান ফোসলানো ফোসলাব ফোসলাবার ফোসলাবি ফোসলাবে ফোসলাবেন ফোসলাবো ফোসলাল ফোসলালাম ফোসলালি ফোসলালে ফোসলালেন ফোসলালেম ফোসলালুম ফোসলাস ফোড় ফোঁড় ফোড়া ফোঁড়া ফোঁড়াগলা ফোঁড়ান ফোঁড়ানো ফোড়াপাকা ফোঁড়াফুঁড়ি ফোঁড়ে ফোঁড়েন ফোড়ন ফোঁড়ন ফোঁড়বার ফোয়ারা ফৌজ ফৌজি ফৌজদার ফৌজদারি ফৌজদারহাট ফৌত ফৌরান ফুজি ফজিলত ফজিহত ফুজিয়ামা ফজর ফজল ফজুল ফজলি ফজলী ফট ফুট ফটক ফুটক ফুটুক ফটকওয়ালা ফটকা ফটকাজনিত ফটকাবাজ ফটকি ফুটকি ফটকিনাটকি ফটকিরি ফুটকী ফুটকলাই ফুটকড়াই ফুটা ফুটাই ফুটাইও ফুটাইত ফুটাইতাম ফুটাইতিস ফুটাইতে ফুটাইতেছ ফুটাইতেছি ফুটাইতেছিল ফুটাইতেছিলাম ফুটাইতেছিলি ফুটাইতেছিলে ফুটাইতেছিলেন ফুটাইতেছিস ফুটাইতেছে ফুটাইতেছেন ফুটাইতেন ফুটাইব ফুটাইবার ফুটাইবি ফুটাইবে ফুটাইবেন ফুটাইল ফুটাইলাম ফুটাইলি ফুটাইলে ফুটাইলেন ফুটাইয়া ফুটাইয়াছ ফুটাইয়াছি ফুটাইয়াছিল ফুটাইয়াছিলাম ফুটাইয়াছিলি ফুটাইয়াছিলে ফুটাইয়াছিলেন ফুটাইয়াছিস ফুটাইয়াছে ফুটাইয়াছেন ফুটাইয়ো ফুটাক ফ্যাকাল্টি ফ্যাকাশিয়া ফ্যাকাসে ফ্যাঁকাসে ফ্যাক্ট ফ্যাক্টবুক ফ্যাক্টর ফ্যাক্টরাইজেশন ফ্যাক্টরি ফ্যাক্স ফ্যাঁকড়া ফ্যাচাং ফ্যাচফ্যাচ ফ্যাট ফ্যাটা ফ্যাটানো ফ্যাটি ফ্যাটবয় ফুটান ফ্যান ফ্যানক্লাব ফ্যানা ফ্যানাটিক ফুটানি ফুটানিরাম ফ্যানচাটা ফুটানো ফ্যান্টাসি ফ্যান্টাসটিক ফ্যান্টাস্টিক ফ্যানসা ফ্যানসাইট ফটাফট ফ্যাফ্যা ফ্যাবা ফ্যামিলি ফ্যামিলিচিত্র ফ্যামিলিপ্ল্যানিং ফটামফাঁই ফ্যালনা ফ্যালফ্যাল ফ্যাশন ফ্যাশনদুরস্ত ফ্যাশনবহির্ভূত ফ্যাশনসম্মত ফটাস ফুটাস ফ্যাসাদ ফ্যাসাদপ্রিয় ফ্যাসিবাদ ফ্যাসিবাদী ফ্যাসিলিটি ফুটি ফটিং ফুটিআঁ ফুটিও ফটিক ফটিকচাঁদ ফটিকছড়ি ফটিকজল ফুটিত ফুটিতাম ফুটিতিস ফুটিতে ফুটিতেছ ফুটিতেছি ফুটিতেছিল ফুটিতেছিলাম ফুটিতেছিলি ফুটিতেছিলে ফুটিতেছিলেন ফুটিতেছিস ফুটিতেছে ফুটিতেছেন ফুটিতেন ফুটিফাটা ফুটিব ফুটিবার ফুটিবি ফুটিবে ফুটিবেন ফুটিল ফুটিলাম ফুটিলি ফুটিলে ফুটিলেন ফযিলত ফুটিস ফুটিয়া ফুটিয়াছ ফুটিয়াছি ফুটিয়াছিল ফুটিয়াছিলাম ফুটিয়াছিলি ফুটিয়াছিলে ফুটিয়াছিলেন ফুটিয়াছিস ফুটিয়াছে ফুটিয়াছেন ফুটিয়ে ফুটিয়েছ ফুটিয়েছি ফুটিয়েছিল ফুটিয়েছিলাম ফুটিয়েছিলি ফুটিয়েছিলে ফুটিয়েছিলেন ফুটিয়েছিলেম ফুটিয়েছিলুম ফুটিয়েছিস ফুটিয়েছে ফুটিয়েছেন ফুটিয়ো ফুটচ্ছ ফুটচ্ছি ফুটচ্ছিল ফুটচ্ছিলাম ফুটচ্ছিলি ফুটচ্ছিলে ফুটচ্ছিলেন ফুটচ্ছিলেম ফুটচ্ছিলুম ফুটচ্ছিস ফুটচ্ছে ফুটচ্ছেন ফুটে ফুটেছ ফুটেছি ফুটেছিল ফুটেছিলাম ফুটেছিলি ফুটেছিলে ফুটেছিলেন ফুটেছিলেম ফুটেছিলুম ফুটেছিস ফুটেছে ফুটেছেন ফুটেজ ফুটেন ফটো ফুটো ফটোকপি ফটোগ্রাফ ফটোগ্রাফার ফটোগ্রাফি ফটোগ্রাফিক ফুটোন ফুটোনো ফটোপেপার ফটোমিটার ফুটোর ফটোল্যাব ফটোশপ ফটোস্ট্যাট ফটোস্টুডিও ফুটছ ফুটছি ফুটছিল ফুটছিলাম ফুটছিলি ফুটছিলে ফুটছিলেন ফুটছিলেম ফুটছিলুম ফুটছিস ফুটছে ফুটছেন ফুট্টই ফুটত ফুটতাম ফুটতিস ফুটতে ফুটতেন ফুটতেম ফুটতুম ফুটন ফুটুন ফুটুনি ফুটুনিরাম ফুটনো ফুটনোট ফুটনোন্মুখ ফুটন্ত ফুটপাত ফুটপাথ ফুটফাট ফটফট ফুটফুট ফুটফরমাইশ ফুটফরমাজ ফুটফরমাশ ফুটব ফুটবার ফুটবি ফুটবে ফুটবেন ফুটবো ফুটবল ফুটবলার ফুটবলমাঠ ফুটভাষী ফযল ফুটল ফুটলাম ফুটলি ফুটলে ফুটলেন ফুটলেম ফুটলুম ফুটস ফুটুস ফুটয় ফণ ফণকর ফণা ফণাওয়ালা ফণাকর ফণাযুক্ত ফণাধর ফণাবান ফণাভৃৎ ফণামণি ফণাহীন ফণিজা ফণিনী ফণী ফণীন্দ্র ফণীপ্রিয় ফণীফেন ফণীফণিনী ফণীভুক ফণীভূষণ ফণীমণ্ডল ফণীমনসা ফণীরাজ ফণীশ্বর ফণধর ফণবান ফণভৃৎ ফণমণি ফতুই ফতওয়া ফুঁৎকার ফতে ফতেল্লাপুর ফতেহ ফতেহগড় ফতো ফতোনবাব ফতোবাবু ফতোয়া ফতোয়াবাজ ফতুর ফতুল্লা ফতহুম ফতুয়া ফতুয়াধারী ফনি ফনেটিক ফন্ট ফন্টস ফন্দ ফন্দি ফন্দিফিকির ফন্দিবাজ ফন্দী ফন্দীবাজ ফুপু ফুপা ফুঁপা ফুপাত ফুঁপান ফুঁপানি ফুঁপানো ফুঁপি ফুঁপিও ফুঁপিয়ে ফুঁপিয়েছ ফুঁপিয়েছি ফুঁপিয়েছিল ফুঁপিয়েছিলাম ফুঁপিয়েছিলি ফুঁপিয়েছিলে ফুঁপিয়েছিলেন ফুঁপিয়েছিলেম ফুঁপিয়েছিলুম ফুঁপিয়েছিস ফুঁপিয়েছে ফুঁপিয়েছেন ফুঁপিয়ো ফপরদালাল ফপরদালালি ফুফু ফুফা ফুফাতো ফর ফুর ফরওয়ার্ড ফরওয়ার্ডিং ফরক ফুরক ফ্রক ফ্রককোট ফরকা ফরকান ফুরকান ফরকানো ফুরকনা ফুরকনি ফুরা ফ্রাংক ফুরাই ফ্রাই ফ্রাইংপ্যান ফুরাইও ফুরাইত ফুরাইতাম ফুরাইতিস ফুরাইতে ফুরাইতেছ ফুরাইতেছি ফুরাইতেছিল ফুরাইতেছিলাম ফুরাইতেছিলি ফুরাইতেছিলে ফুরাইতেছিলেন ফুরাইতেছিস ফুরাইতেছে ফুরাইতেছেন ফুরাইতেন ফুরাইব ফুরাইবার ফুরাইবি ফুরাইবে ফুরাইবেন ফুরাইল ফুরাইলাম ফুরাইলি ফুরাইলে ফুরাইলেন ফুরাইয়া ফুরাইয়াছ ফুরাইয়াছি ফুরাইয়াছিল ফুরাইয়াছিলাম ফুরাইয়াছিলি ফুরাইয়াছিলে ফুরাইয়াছিলেন ফুরাইয়াছিস ফুরাইয়াছে ফুরাইয়াছেন ফুরাইয়ো ফুরাক ফরাকত ফরাগত ফ্রাঙ্ক ফ্রাঙ্কফুর্ট ফ্রাঙ্কলিন ফরাজ ফরাজি ফুরান ফুরানো ফ্রান্স ফ্রান্সিস ফরাশ ফরাশগঞ্জ ফরাস ফরাসি ফরাসিবিপ্লব ফরাসী ফরাসডাঙ্গা ফরায়েজ ফরায়েজি ফরায়েজী ফরি ফ্রি ফরিঅ ফুরিও ফরিক ফরিকার ফরিকাল ফরিকালি ফ্রিকোয়েন্সি ফ্রিজ ফরিদগঞ্জ ফরিদাবাদ ফরিদপুর ফরিয়াদ ফরিয়াদি ফুরিয়ে ফুরিয়েছ ফুরিয়েছি ফুরিয়েছিল ফুরিয়েছিলাম ফুরিয়েছিলি ফুরিয়েছিলে ফুরিয়েছিলেন ফুরিয়েছিলেম ফুরিয়েছিলুম ফুরিয়েছিস ফুরিয়েছে ফুরিয়েছেন ফরী ফুরচ্ছ ফুরচ্ছি ফুরচ্ছিল ফুরচ্ছিলাম ফুরচ্ছিলি ফুরচ্ছিলে ফুরচ্ছিলেন ফুরচ্ছিলেম ফুরচ্ছিলুম ফুরচ্ছিস ফুরচ্ছে ফুরচ্ছেন ফরেইন ফ্রেঞ্চ ফ্রেঞ্চকাট ফ্রেড ফরেন ফ্রেন্ড ফ্রেন্ডলি ফ্রেন্ডশিপ ফ্রেন্ডস ফরেনসিক ফরেব ফ্রেম ফ্রেমওয়ার্ক ফরেস্ট ফ্রোক্ত ফরোখত ফরোয়ার্ড ফরোয়ার্ডিং ফরজ ফরজন্দ ফ্রজন্দ ফরয ফর্য ফ্র্যান্সিয়াম ফরযন্দ ফুর্ণা ফুরত ফুরতাম ফুর্তি ফুর্তিবাজ ফুরতিস ফুরতে ফুরতেন ফুরতেম ফুরতুম ফর্দ ফর্দা ফর্দাফাঁই ফরদি ফুরনো ফ্রন্ট ফ্রন্টাল ফ্রন্টিয়ার ফরন্ত ফরফর ফুরফুর ফরফরানি ফুরফুরানো ফরফরে ফুরফুরে ফুরব ফুরবার ফুরবি ফুরবে ফুরবেন ফুরবো ফরম ফর্ম ফরমা ফর্মা ফরমাই ফরমাইশ ফরমাইস ফরমাজ ফরমান ফরমানি ফরমানো ফরমানজারি ফরমানবরদার ফরমানবরদারি ফরমাবরদার ফর্মাল ফর্মালিটি ফরমালডিহাইড ফরমাশ ফরমাশি ফরমাস ফরমায়েশ ফরমায়েশি ফরমেট ফর্মেট ফরম্যাট ফরম্যাটিং ফরমুলা ফর্মুলা ফুরল ফুরলাম ফুরলি ফুরলে ফুরলেন ফুরলেম ফুরলুম ফরশা ফর্শা ফরসা ফর্সা ফরসি ফুরসি ফুরসী ফুরসত ফুরসৎ ফুরসুত ফুরসুৎ ফরহাদ ফুরয় ফুরয়ে ফরয়্যাদ ফল ফুল ফ্লু ফলই ফলুই ফুলওয়ারি ফলওয়ালা ফুলওয়ালা ফুলওয়ালি ফুলওয়ালী ফলক ফলুক ফুলক ফুলুক ফুলকা ফুলকাটা ফুলকার ফুলকারি ফুলকি ফুল্কি ফুলকিযুক্ত ফলকী ফুলকচি ফুলকো ফুলকোঁচা ফলকথা ফলকপাণি ফুলকপি ফলকর ফলকলিপি ফুলখড়ি ফল্গু ফুলগাছ ফল্গুধারা ফল্গুন ফল্গুনী ফল্গুপ্রবাহ ফলঙ্গ ফলা ফুলা ফ্লাই ফ্লাইং ফলাইও ফুলাইও ফ্লাইওভার ফ্লাইট ফ্লাইটক্যাপ্টেন ফ্লাইট্র্যাপ ফ্লাইটস্কোয়ার্ড্রন ফলাইত ফুলাইত ফলাইতাম ফুলাইতাম ফলাইতিস ফুলাইতিস ফলাইতে ফুলাইতে ফলাইতেছ ফুলাইতেছ ফলাইতেছি ফুলাইতেছি ফলাইতেছিল ফুলাইতেছিল ফলাইতেছিলাম ফুলাইতেছিলাম ফলাইতেছিলি ফুলাইতেছিলি ফলাইতেছিলে ফুলাইতেছিলে ফলাইতেছিলেন ফুলাইতেছিলেন ফলাইতেছিস ফুলাইতেছিস ফলাইতেছে ফুলাইতেছে ফলাইতেছেন ফুলাইতেছেন ফলাইতেন ফুলাইতেন ফলাইব ফুলাইব ফলাইবার ফুলাইবার ফলাইবি ফুলাইবি ফলাইবে ফুলাইবে ফলাইবেন ফুলাইবেন ফলাইল ফুলাইল ফলাইলাম ফুলাইলাম ফলাইলি ফুলাইলি ফলাইলে ফুলাইলে ফলাইলেন ফুলাইলেন ফলাইয়া ফুলাইয়া ফলাইয়াছ ফুলাইয়াছ ফলাইয়াছি ফুলাইয়াছি ফলাইয়াছিল ফুলাইয়াছিল ফলাইয়াছিলাম ফুলাইয়াছিলাম ফলাইয়াছিলি ফুলাইয়াছিলি ফলাইয়াছিলে ফুলাইয়াছিলে ফলাইয়াছিলেন ফুলাইয়াছিলেন ফলাইয়াছিস ফুলাইয়াছিস ফলাইয়াছে ফুলাইয়াছে ফলাইয়াছেন ফুলাইয়াছেন ফলাইয়ো ফুলাইয়ো ফলাক ফুলাক ফলাকাঙ্ক্ষা ফলাকাঙ্ক্ষাহীন ফ্লাক্স ফলাগম ফলাচ্ছ ফলাচ্ছি ফলাচ্ছিল ফলাচ্ছিলাম ফলাচ্ছিলি ফলাচ্ছিলে ফলাচ্ছিলেন ফলাচ্ছিলেম ফলাচ্ছিলুম ফলাচ্ছিস ফলাচ্ছে ফলাচ্ছেন ফ্লাজেলা ফ্লাট ফলাযুক্ত ফ্লাডগেট ফ্লাডলাইট ফলাত ফলাতাম ফলাতিস ফলাতে ফলাতেন ফলাতেম ফলাতুম ফলাদি ফলান ফুলান ফলানা ফ্লানেল ফলানো ফুলানো ফলান্বেষী ফলান্বেষণ ফলাফল ফলাব ফলাবার ফলাবি ফলাবে ফলাবেন ফলাবো ফলার ফলারি ফলাল ফলালাম ফলালি ফলালে ফলালেন ফলালেম ফলালুম ফ্লাশ ফলাশন ফলাস ফুলাস ফ্লাস্ক ফলাহার ফলাহারী ফলি ফুলি ফলিত ফুলিত ফলিতা ফলিতাম ফুলিতাম ফলিতার্থ ফলিতিস ফুলিতিস ফলিতে ফুলিতে ফলিতেছ ফুলিতেছ ফলিতেছি ফুলিতেছি ফলিতেছিল ফুলিতেছিল ফলিতেছিলাম ফুলিতেছিলাম ফলিতেছিলি ফুলিতেছিলি ফলিতেছিলে ফুলিতেছিলে ফলিতেছিলেন ফুলিতেছিলেন ফলিতেছিস ফুলিতেছিস ফলিতেছে ফুলিতেছে ফলিতেছেন ফুলিতেছেন ফলিতেন ফুলিতেন ফলিতবিজ্ঞান ফলিতবিদ্যা ফলিব ফুলিব ফলিবার ফুলিবার ফলিবি ফুলিবি ফলিবে ফুলিবে ফলিবেন ফুলিবেন ফলিল ফুলিল ফলিলাম ফুলিলাম ফলিলি ফুলিলি ফলিলে ফুলিলে ফলিলেন ফুলিলেন ফলিস ফুলিস ফলিয়া ফুলিয়া ফলিয়াছ ফুলিয়াছ ফলিয়াছি ফুলিয়াছি ফলিয়াছিল ফুলিয়াছিল ফলিয়াছিলাম ফুলিয়াছিলাম ফলিয়াছিলি ফুলিয়াছিলি ফলিয়াছিলে ফুলিয়াছিলে ফলিয়াছিলেন ফুলিয়াছিলেন ফলিয়াছিস ফুলিয়াছিস ফলিয়াছে ফুলিয়াছে ফলিয়াছেন ফুলিয়াছেন ফলিয়ে ফুলিয়ে ফলিয়েছ ফুলিয়েছ ফলিয়েছি ফুলিয়েছি ফলিয়েছিল ফুলিয়েছিল ফলিয়েছিলাম ফুলিয়েছিলাম ফলিয়েছিলি ফুলিয়েছিলি ফলিয়েছিলে ফুলিয়েছিলে ফলিয়েছিলেন ফুলিয়েছিলেন ফলিয়েছিলেম ফুলিয়েছিলেম ফলিয়েছিলুম ফুলিয়েছিলুম ফলিয়েছিস ফুলিয়েছিস ফলিয়েছে ফুলিয়েছে ফলিয়েছেন ফুলিয়েছেন ফলিয়ো ফুলিয়ো ফলী ফুলী ফুলচাং ফলচাষ ফুলচোর ফুলচ্ছ ফুলচ্ছি ফুলচ্ছিল ফুলচ্ছিলাম ফুলচ্ছিলি ফুলচ্ছিলে ফুলচ্ছিলেন ফুলচ্ছিলেম ফুলচ্ছিলুম ফুলচ্ছিস ফুলচ্ছে ফুলচ্ছেন ফুলচন্দন ফলেছ ফুলেছ ফলেছি ফুলেছি ফলেছিল ফুলেছিল ফলেছিলাম ফুলেছিলাম ফলেছিলি ফুলেছিলি ফলেছিলে ফুলেছিলে ফলেছিলেন ফুলেছিলেন ফলেছিলেম ফুলেছিলেম ফলেছিলুম ফুলেছিলুম ফলেছিস ফুলেছিস ফলেছে ফুলেছে ফলেছেন ফুলেছেন ফলেন ফুলেন ফলেনি ফুলেরগন্ধ ফলেরচাষ ফুলেরতোড়া ফুলেল ফলো ফুলো ফলোআপ ফলোৎপাদন ফলোৎপাদনকারী ফলোৎপত্তি ফলোদয় ফলোন্মুখ ফলোপজীবী ফলোপধায়ক ফলোপধায়িনী ফলোপধায়ী ফুলোফুলো ফ্লোর ফ্লোরাইড ফ্লোরিডা ফ্লোরিন ফলছ ফুলছ ফলছি ফুলছি ফলছিল ফুলছিল ফলছিলাম ফুলছিলাম ফলছিলি ফুলছিলি ফলছিলে ফুলছিলে ফলছিলেন ফুলছিলেন ফলছিলেম ফুলছিলেম ফলছিলুম ফুলছিলুম ফলছিস ফুলছিস ফুলছিঁড়া ফলছে ফুলছে ফলছেন ফুলছেন ফুলছেঁড়া ফুলছো ফুলছড়ি ফুলছড়ী ফলজাত ফুলজাল ফুলঝাঁপা ফুলঝারি ফুলঝাড়ু ফুলঝুরি ফুলুট ফ্লুট ফুলটুকি ফুলটুকী ফলযুক্ত ফুলযুক্ত ফুলটুঙ্গি ফ্ল্যাগ ফ্ল্যাট ফ্ল্যাটবাড়ি ফ্ল্যাটবেড ফ্ল্যাশ ফ্ল্যাশব্যাক ফ্ল্যাশলাইট ফুলটিকিট ফুলটুসকি ফুলটুসি ফলত ফুলত ফলতাম ফুলতাম ফলতিস ফুলতিস ফলতে ফুলতে ফলতেন ফুলতেন ফলতেম ফুলতেম ফুলতোলা ফলতুম ফুলতুম ফলত্রয় ফুলতলা ফলদ ফুলদান ফুলদানি ফুলদানী ফুলদার ফলদায়ক ফলদায়ী ফুলদোল ফলদর্শিতা ফলদর্শী ফুলদল ফুলধনু ফলন ফলুন ফুলন ফুলুন ফলনা ফুলনো ফলন্ত ফুলন্ত ফলনশীল ফ্লপ ফলপাকান্ত ফলপাকড় ফ্লপি ফুলপ্যান্ট ফুলপুর ফলপ্রকাশ ফলপ্রাপ্তি ফলপূর্ণ ফলপ্রদ ফলপ্রসূ ফলপ্রসূতা ফলপ্রসূভাবে ফুলপড়া ফুলফুটন ফলফুল ফুলফল ফলফলারি ফলফলিত ফুলফলযুক্ত ফলব ফুলব ফুলবাগান ফুলবাণ ফুলবাতাসা ফলবান ফুলবাবু ফলবার ফুলবার ফুলবাড়ি ফুলবাড়িয়া ফলবি ফুলবি ফলবিশিষ্ট ফুলবিশিষ্ট ফলবিশেষ ফুলবিশেষ ফলবীজ ফলবে ফুলবে ফলবেন ফুলবেন ফলবো ফুলবো ফুলব্যাক ফুলব্যবসায়ী ফলবতী ফলবর্তী ফুলবড়ি ফলভাগিনী ফলভাগী ফলভিক্তিক ফলভোগ ফুলমালা ফুলমোজা ফলমূল ফলমূলাদি ফুলরি ফুলুরি ফ্লুরিন ফলরূপ ফলল ফুলল ফুল্ল ফুল্লকুসুমিত ফুল্লাধর ফললাভ ফললাম ফুললাম ফললি ফুললি ফুল্লিঅ ফললে ফুললে ফললেন ফুললেন ফললেম ফুললেম ফুল্লবিভা ফললুম ফুললুম ফুল্লমন ফুল্ললোচন ফুলশার্ট ফলশালিনী ফলশালী ফলশি ফলশী ফুলশয্যা ফুলশর ফলশ্রেষ্ঠ ফলশ্রুতি ফলস ফলসংবলিত ফুলস্কেপ ফুলস্ক্যাপ ফলসা ফলসাই ফুলসজ্জা ফুলস্টপ ফুলসহযোগ ফুলহাতা ফলহীন ফলহীনা ফুলয় ফ্লুয়িড ফষ্টি ফষ্টিনাটকি ফষ্টিনষ্টি ফষ্ঠি ফস ফুস ফুঁস ফুঁসুক ফসকা ফস্কা ফসকাই ফসকাইও ফসকাইত ফসকাইতাম ফসকাইতিস ফসকাইতে ফসকাইতেছ ফসকাইতেছি ফসকাইতেছিল ফসকাইতেছিলাম ফসকাইতেছিলি ফসকাইতেছিলে ফসকাইতেছিলেন ফসকাইতেছিস ফসকাইতেছে ফসকাইতেছেন ফসকাইতেন ফসকাইব ফসকাইবার ফসকাইবি ফসকাইবে ফসকাইবেন ফসকাইল ফসকাইলাম ফসকাইলি ফসকাইলে ফসকাইলেন ফসকাইয়া ফসকাইয়াছ ফসকাইয়াছি ফসকাইয়াছিল ফসকাইয়াছিলাম ফসকাইয়াছিলি ফসকাইয়াছিলে ফসকাইয়াছিলেন ফসকাইয়াছিস ফসকাইয়াছে ফসকাইয়াছেন ফসকাইয়ো ফসকাও ফসকাক ফসকাচ্ছ ফসকাচ্ছি ফসকাচ্ছিল ফসকাচ্ছিলাম ফসকাচ্ছিলি ফসকাচ্ছিলে ফসকাচ্ছিলেন ফসকাচ্ছিলেম ফসকাচ্ছিলুম ফসকাচ্ছিস ফসকাচ্ছে ফসকাচ্ছেন ফসকাত ফসকাতাম ফসকাতিস ফসকাতে ফসকাতেন ফসকাতেম ফসকাতুম ফসকান ফস্কান ফসকানো ফস্কানো ফসকাব ফসকাবার ফসকাবি ফসকাবে ফসকাবেন ফসকাবো ফসকাল ফসকালাম ফসকালি ফসকালে ফসকালেন ফসকালেম ফসকালুম ফসকাস ফসকে ফসকেছ ফসকেছি ফসকেছিল ফসকেছিলাম ফসকেছিলি ফসকেছিলে ফসকেছিলেন ফসকেছিলেম ফসকেছিলুম ফসকেছিস ফসকেছে ফসকেছেন ফসকো ফসকথা ফুসকুড়ি ফুস্কুড়ি ফুঁসা ফসাদ ফুঁসান ফুঁসানি ফুঁসানো ফুঁসি ফুঁসিও ফুঁসিত ফুঁসিতাম ফুঁসিতিস ফুঁসিতে ফুঁসিতেছ ফুঁসিতেছি ফুঁসিতেছিল ফুঁসিতেছিলাম ফুঁসিতেছিলি ফুঁসিতেছিলে ফুঁসিতেছিলেন ফুঁসিতেছিস ফুঁসিতেছে ফুঁসিতেছেন ফুঁসিতেন ফুঁসিব ফুঁসিবার ফুঁসিবি ফুঁসিবে ফুঁসিবেন ফসিল ফুঁসিল ফুঁসিলাম ফুঁসিলি ফুঁসিলে ফুঁসিলেন ফুঁসিস ফুঁসিয়া ফুঁসিয়াছ ফুঁসিয়াছি ফুঁসিয়াছিল ফুঁসিয়াছিলাম ফুঁসিয়াছিলি ফুঁসিয়াছিলে ফুঁসিয়াছিলেন ফুঁসিয়াছিস ফুঁসিয়াছে ফুঁসিয়াছেন ফুঁসিয়ো ফুঁসে ফুঁসেছ ফুঁসেছি ফুঁসেছিল ফুঁসেছিলাম ফুঁসেছিলি ফুঁসেছিলে ফুঁসেছিলেন ফুঁসেছিলেম ফুঁসেছিলুম ফুঁসেছিস ফুঁসেছে ফুঁসেছেন ফুঁসেন ফুঁসো ফুঁসছ ফুঁসছি ফুঁসছিল ফুঁসছিলাম ফুঁসছিলি ফুঁসছিলে ফুঁসছিলেন ফুঁসছিলেম ফুঁসছিলুম ফুঁসছিস ফুঁসছে ফুঁসছেন ফুঁসত ফুঁসতাম ফুঁসতিস ফুঁসতে ফুঁসতেন ফুঁসতেম ফুঁসতুম ফুঁসুন ফুসফাস ফসফেট ফসফরাস ফসফস ফুসফুস ফুসফুসীয় ফুসফুসদ্বয় ফুসফুসপ্রদাহ ফুসফুসবিহীন ফুঁসব ফুঁসবি ফুঁসবে ফুঁসবেন ফুঁসবো ফুসমন্তর ফুসুরফাসুর ফসল ফুসল ফুঁসল ফুসলক ফুসলা ফুসলাই ফুসলাইও ফুসলাইত ফুসলাইতাম ফুসলাইতিস ফুসলাইতে ফুসলাইতেছ ফুসলাইতেছি ফুসলাইতেছিল ফুসলাইতেছিলাম ফুসলাইতেছিলি ফুসলাইতেছিলে ফুসলাইতেছিলেন ফুসলাইতেছিস ফুসলাইতেছে ফুসলাইতেছেন ফুসলাইতেন ফুসলাইব ফুসলাইবার ফুসলাইবি ফুসলাইবে ফুসলাইবেন ফুসলাইল ফুসলাইলাম ফুসলাইলি ফুসলাইলে ফুসলাইলেন ফুসলাইয়া ফুসলাইয়াছ ফুসলাইয়াছি ফুসলাইয়াছিল ফুসলাইয়াছিলাম ফুসলাইয়াছিলি ফুসলাইয়াছিলে ফুসলাইয়াছিলেন ফুসলাইয়াছিস ফুসলাইয়াছে ফুসলাইয়াছেন ফুসলাইয়ো ফুসলাক ফুসলান ফুসলানো ফুঁসলাম ফুসলাস ফসলি ফুসলি ফুঁসলি ফুসলিয়ে ফুসলিয়েছ ফুসলিয়েছি ফুসলিয়েছিল ফুসলিয়েছিলাম ফুসলিয়েছিলি ফুসলিয়েছিলে ফুসলিয়েছিলেন ফুসলিয়েছিলেম ফুসলিয়েছিলুম ফুসলিয়েছিস ফুসলিয়েছে ফুসলিয়েছেন ফুসলিয়ো ফসলী ফুসলচ্ছ ফুসলচ্ছি ফুসলচ্ছিল ফুসলচ্ছিলাম ফুসলচ্ছিলি ফুসলচ্ছিলে ফুসলচ্ছিলেন ফুসলচ্ছিলেম ফুসলচ্ছিলুম ফুসলচ্ছিস ফুসলচ্ছে ফুসলচ্ছেন ফুসলে ফুঁসলে ফুসলেছ ফুসলেছি ফুসলেছিল ফুসলেছিলাম ফুসলেছিলি ফুসলেছিলে ফুসলেছিলেন ফুসলেছিলেম ফুসলেছিলুম ফুসলেছিস ফুসলেছে ফুসলেছেন ফুঁসলেন ফুঁসলেম ফুসলো ফুসলোবার ফসলযুক্ত ফুসলত ফুসলতাম ফুসলতিস ফুসলতে ফুসলতেন ফুসলতেম ফুসলতুম ফুসলন ফুসলনো ফুসলব ফুসলবি ফুসলবে ফুসলবেন ফুসলবো ফুঁসলুম ফুসলল ফুসললাম ফুসললি ফুসললে ফুসললেন ফুসললেম ফুসললুম ফুসলস ফড় ফুড় ফুঁড় ফুড়ুক ফুঁড়ুক ফুড়ুকফাঁই ফড়া ফুঁড়া ফুঁড়ান ফুঁড়ানো ফুঁড়াফুঁড়ি ফুঁড়ি ফড়িং ফড়িংগা ফড়িঙ ফড়িঙ্গা ফুঁড়িত ফুঁড়িতাম ফুঁড়িতিস ফুঁড়িতে ফুঁড়িতেছ ফুঁড়িতেছি ফুঁড়িতেছিল ফুঁড়িতেছিলাম ফুঁড়িতেছিলি ফুঁড়িতেছিলে ফুঁড়িতেছিলেন ফুঁড়িতেছিস ফুঁড়িতেছে ফুঁড়িতেছেন ফুঁড়িতেন ফুঁড়িব ফুঁড়িবার ফুঁড়িবি ফুঁড়িবে ফুঁড়িবেন ফুঁড়িল ফুঁড়িলাম ফুঁড়িলি ফুঁড়িলে ফুঁড়িলেন ফুঁড়িস ফড়িয়া ফুঁড়িয়া ফুঁড়িয়াছ ফুঁড়িয়াছি ফুঁড়িয়াছিল ফুঁড়িয়াছিলাম ফুঁড়িয়াছিলি ফুঁড়িয়াছিলে ফুঁড়িয়াছিলেন ফুঁড়িয়াছিস ফুঁড়িয়াছে ফুঁড়িয়াছেন ফুঁড়িয়ো ফড়ে ফুঁড়ে ফুঁড়েছ ফুঁড়েছি ফুঁড়েছিল ফুঁড়েছিলাম ফুঁড়েছিলি ফুঁড়েছিলে ফুঁড়েছিলেন ফুঁড়েছিলেম ফুঁড়েছিলুম ফুঁড়েছিস ফুঁড়েছে ফুঁড়েছেন ফুঁড়েন ফুঁড়ো ফুঁড়ছ ফুঁড়ছি ফুঁড়ছিল ফুঁড়ছিলাম ফুঁড়ছিলি ফুঁড়ছিলে ফুঁড়ছিলেন ফুঁড়ছিলেম ফুঁড়ছিলুম ফুঁড়ছিস ফুঁড়ছে ফুঁড়ছেন ফুড়ুত ফুড়ুৎ ফুঁড়ত ফুঁড়তাম ফুঁড়তিস ফুঁড়তে ফুঁড়তেন ফুঁড়তেম ফুড়ুতফাঁই ফুঁড়তুম ফুঁড়ুন ফড়নবিস ফড়ফড় ফড়ফড়িরাম ফুঁড়ব ফুঁড়বার ফুঁড়বি ফুঁড়বে ফুঁড়বেন ফুঁড়বো ফুঁড়ল ফুঁড়লাম ফুঁড়লি ফুঁড়লে ফুঁড়লেন ফুঁড়লেম ফুঁড়লুম ফুয়েল ফয়তা ফয়দা ফুয়ল ফয়লা ফয়সালা".split(" "),
              w_r: "র রং রংকানা রংকারক রংকারী রংকরা রংগিলা রংচং রংচংগা রংচঙ রংচঙা রংচঙে রংচটা রংযুক্ত রংঢং রংতামাশা রংদার রংধনু রংপুর রংফলানো রংবাজ রংবাহারি রংবেরং রংবেরঙ রংমেশানো রংমশাল রংমহল রংরেজ রংরেয রংরুট রংহীন রই রুই রইকাঠ রুইকাতলা রইখাত রইঘর রইছ রইছি রইছিস রইছে রইছেন রইত রইতাম রইতিস রইতে রইতেন রইতেম রুইতন রইতুম রুইদাস রইব রইবার রইবি রইবে রইবেন রইবো রুইমাছ রইরই রইল রইলাম রইলি রইলে রইলেন রইলেম রইলো রইলুম রইস রইয়ান রঈস রও রওজা রওজামোবারক রওজামুবারক রওযা রওযামোবারক রওযামুবারক রওনক রওনা রওশন রওশনচৌকি রওয়া রওয়ান রওয়ানা রওয়ানো রক রুকু রকার রকি রকেট রকেটলঞ্চার রক্ত রক্তআঁখি রক্তক রক্তকাঞ্চন রক্তকোষ রক্তকণিকা রক্তকমল রক্তকরবী রক্তক্ষরণ রক্তক্ষয় রক্তক্ষয়ী রক্তগঙ্গা রক্তগোলাপ রক্তগরম রক্তাক্ত রক্তাতিসার রক্তাধিক্য রক্তাভ রক্তাভাবজনিত রক্তাম্বর রক্তারক্তি রক্তাল্পতা রক্তাল্পতাযুক্ত রক্তি রক্তিম রক্তিমা রক্তচক্ষু রক্তচাপ রক্তচোষা রক্তচন্দন রক্তচূর্ণ রক্তচলাচল রক্তেমাখা রক্তেরচাপ রক্তোৎপল রক্তছোটা রক্তছুটা রক্তজিহ্ব রক্তজবা রক্তজল রক্তঝরা রক্তযুক্ত রক্ততঞ্চন রক্তদাতা রক্তদান রক্তদোষ রক্তদন্তী রক্তদর্শন রক্তদশনা রক্তদুষ্টি রক্তধারা রক্তনালিকা রক্তনালী রক্তনাশক রক্তনিশান রক্তনিয়ামক রক্তনেত্র রক্তনদী রক্তপ রক্তপা রক্তপাগল রক্তপাত রক্তপাতযুক্ত রক্তপাতবিহীন রক্তপাতহীন রক্তপাতহীনভাবে রক্তপান রক্তপায়ী রক্তপিণ্ড রক্তপিত্ত রক্তপিপাসু রক্তপিপাসা রক্তপীতমিশ্রিত রক্তপতাকা রক্তপদ্ম রক্তপরীক্ষা রক্তপ্রদর রক্তপ্রবাল রক্তপ্রবাহ রক্তপল্লব রক্তপড়া রক্তফল রক্তফলা রক্তবাহ রক্তবাহী রক্তবিদ্যা রক্তবিন্দু রক্তবিমিশ্রণ রক্তবিমোক্ষণ রক্তবীজ রক্তবমি রক্তবমন রক্তবর্ণ রক্তবহা রক্তভাঙা রক্তভেজা রক্তমাংস রক্তমাখা রক্তমোক্ষণ রক্তরঙ্গক রক্তরস রক্তলালসা রক্তলেখা রক্তলোচন রক্তলোলুপ রক্তশোধক রক্তশোষা রক্তশোষণ রক্তশয্যা রক্তশূন্য রক্তশূন্যতা রক্তসংবাহিকা রক্তসঞ্চার রক্তসঞ্চারক রক্তসঞ্চালক রক্তসঞ্চালন রক্তস্নাত রক্তস্বল্পতা রক্তসমীক্ষা রক্তসম্পর্কহীন রক্তস্রাব রক্তস্রাবজনিত রক্তস্রাবযুক্ত রক্তস্রোত রক্তস্রবণ রক্তসৃষ্টি রক্তহীন রক্তহীনতা রকদস্তি রকফোর্ড রকবা রকবাজ রকবাজি রকম রকমওয়ারি রকমারি রুক্মিণী রকমফের রকমভাবে রকমভেদ রকমসকম রক্ষ রুক্ষ রক্ষঃকূল রক্ষঃপুরী রক্ষক রক্ষকতা রক্ষকূল রক্ষা রক্ষাকারিণী রক্ষাকারী রক্ষাকালী রক্ষাকবচ রক্ষাকর্তা রক্ষাকর্ত্রী রক্ষাকল্প রক্ষাগৃহ রক্ষাতাবিজ রক্ষাব্যবস্থা রক্ষাবন্ধন রক্ষামন্ত্র রক্ষার্থে রক্ষিকা রক্ষিণী রক্ষিত রক্ষিতা রক্ষিত্রী রক্ষিবে রক্ষিসৈন্য রক্ষী রক্ষীদল রক্ষীবাহিনী রক্ষ্য রক্ষ্যা রক্ষণ রক্ষণকর্তা রক্ষণাত্মক রক্ষণাবেক্ষণ রক্ষণাবেক্ষণকারী রক্ষণীয় রক্ষণভাগ রক্ষণশীল রক্ষণশীলতা রুক্ষতা রুক্ষপ্রকৃতি রক্ষপুরী রুক্ষভাষী রুক্ষমূর্তি রকস্টার রুকসত রুখ রুখু রুখুক রুখা রুখাশুখা রুখি রুখিত রুখিতাম রুখিতিস রুখিতে রুখিতেছ রুখিতেছি রুখিতেছিল রুখিতেছিলাম রুখিতেছিলি রুখিতেছিলে রুখিতেছিলেন রুখিতেছিস রুখিতেছে রুখিতেছেন রুখিতেন রুখিব রুখিবার রুখিবি রুখিবে রুখিবেন রুখিল রুখিলাম রুখিলি রুখিলে রুখিলেন রুখিস রুখিয়া রুখিয়াছ রুখিয়াছি রুখিয়াছিল রুখিয়াছিলাম রুখিয়াছিলি রুখিয়াছিলে রুখিয়াছিলেন রুখিয়াছিস রুখিয়াছে রুখিয়াছেন রুখিয়ো রুখে রুখেছ রুখেছি রুখেছিল রুখেছিলাম রুখেছিলি রুখেছিলে রুখেছিলেন রুখেছিলেম রুখেছিলুম রুখেছিস রুখেছে রুখেছেন রুখেন রুখো রুখছ রুখছি রুখছিল রুখছিলাম রুখছিলি রুখছিলে রুখছিলেন রুখছিলেম রুখছিলুম রুখছিস রুখছে রুখছেন রুখত রুখতাম রুখতিস রুখতে রুখতেন রুখতেম রুখতুম রুখুন রুখব রুখবি রুখবে রুখবেন রুখবো রুখল রুখলাম রুখলি রুখলী রুখলে রুখলেন রুখলেম রুখলুম রগ রুগী রগচটা রগবত রগবৎ রগরগ রগরগে রগড় রগড়া রগড়াই রগড়াইও রগড়াইত রগড়াইতাম রগড়াইতিস রগড়াইতে রগড়াইতেছ রগড়াইতেছি রগড়াইতেছিল রগড়াইতেছিলাম রগড়াইতেছিলি রগড়াইতেছিলে রগড়াইতেছিলেন রগড়াইতেছিস রগড়াইতেছে রগড়াইতেছেন রগড়াইতেন রগড়াইব রগড়াইবার রগড়াইবি রগড়াইবে রগড়াইবেন রগড়াইল রগড়াইলাম রগড়াইলি রগড়াইলে রগড়াইলেন রগড়াইয়া রগড়াইয়াছ রগড়াইয়াছি রগড়াইয়াছিল রগড়াইয়াছিলাম রগড়াইয়াছিলি রগড়াইয়াছিলে রগড়াইয়াছিলেন রগড়াইয়াছিস রগড়াইয়াছে রগড়াইয়াছেন রগড়াইয়ো রগড়াক রগড়াচ্ছ রগড়াচ্ছি রগড়াচ্ছিল রগড়াচ্ছিলাম রগড়াচ্ছিলি রগড়াচ্ছিলে রগড়াচ্ছিলেন রগড়াচ্ছিলেম রগড়াচ্ছিলুম রগড়াচ্ছিস রগড়াচ্ছে রগড়াচ্ছেন রগড়াত রগড়াতাম রগড়াতিস রগড়াতে রগড়াতেন রগড়াতেম রগড়াতুম রগড়ান রগড়ানা রগড়ানি রগড়ানো রগড়াব রগড়াবার রগড়াবি রগড়াবে রগড়াবেন রগড়াবো রগড়ারগড়ি রগড়াল রগড়ালাম রগড়ালি রগড়ালে রগড়ালেন রগড়ালেম রগড়ালুম রগড়াস রগড়িয়া রগড়ে রগুড়ে রগড়েছ রগড়েছি রগড়েছিল রগড়েছিলাম রগড়েছিলি রগড়েছিলে রগড়েছিলেন রগড়েছিলেম রগড়েছিলুম রগড়েছিস রগড়েছে রগড়েছেন রগড়ো রঘু রঘুকুল রঘুকুলতিলক রঘুকুলদীপক রঘুকুলপতি রঘুকুলমণি রঘুনাথ রঘুনন্দন রঘুপতি রঘুবংশ রঘুবংশীয় রঘুবর রঘুমণি রঘুশ্রেষ্ঠ রঙ রঙ্ক রঙ্কু রঙকানা রঙ্কিণী রঙ্গ রঙ্গক রঙ্গকার রঙ্গকারক রঙ্গকারী রঙ্গকৌতুক রঙ্গা রঙ্গান রঙ্গানো রঙ্গালয় রঙ্গিণী রঙ্গিত রঙ্গিন রঙ্গিমা রঙ্গিল রঙ্গিলা রঙ্গিয়া রঙ্গচিঙ্গা রঙ্গোলী রঙ্গজ রঙ্গজীবক রঙ্গঢঙ রঙ্গতামাশা রঙ্গদার রঙ্গন রঙ্গনিপুণ রঙ্গপরিহাস রঙ্গপ্রিয় রঙ্গপ্রিয়া রঙ্গপ্রিয়তা রঙ্গভঙ্গ রঙ্গভূমি রঙ্গমঞ্চ রঙ্গমহল রঙ্গরঙ্গিণী রঙ্গরঙ্গী রঙ্গরস রঙ্গরসাত্মক রঙ্গরসিকতা রঙ্গরসপটু রঙ্গরসপ্রিয় রঙ্গশালা রঙ্গস্থান রঙ্গস্থল রঙা রঙান রঙানো রঙিন রঙিলা রঙচঙ রঙচঙা রঙচঙে রঙচটা রঙটি রঙঢঙ রঙদার রঙধনু রঙবেরঙ রঙমশাল রঙমহল রা রাং রাংচিতা রাংঝাল রাংতা রাই রাইকিশোরী রাইকমল রাইখা রাইখাড়া রাইখেন রাইখ্যা রাইখস্টাগ রাইখস্ট্যাগ রাইঙ রাইজ রাইজিং রাইট রাইটকৃত রাইটার রাইটার্স রাইটিং রাইটিংস রাইড রাইডার রাইডিং রাইত রাইন রাইনোভাইরাস রাইফেল রাইফেলস রাইবোজ রাইবোজোম রাইবোজোমাল রাইবোজোমীয় রাইবোনিউক্লিওটাইড রাইবোনিউক্লিওপ্রোটিন রাইবোনিউক্লিওসাইড রাইবোফ্ল্যাভিন রাইবোসিল রাইরূপ রাইস রাইসরিষা রাইয়ত রাইয়তি রাউটার রাউত রাউন্ড রাও রাওল রাওয়ারাই রাওয়ালপিন্ডি রাকআত রাকা রাকাত রাকাপতি রাকাশশী রাকেশ রাক্ষস রাক্ষসী রাক্ষুসে রাক্ষসোচিত রাক্ষসতাল রাক্ষসপুরী রাক্ষসবংশ রাক্ষসবিবাহ রাক্ষসবধূ রাক্ষসরাজ রাখ রাখুক রাখা রাখাইন রাখাকালে রাখানো রাখাবার রাখাল রাখালি রাখালিয়া রাখালরাজ রাখি রাখিত রাখিতাম রাখিতিস রাখিতে রাখিতেছ রাখিতেছি রাখিতেছিল রাখিতেছিলাম রাখিতেছিলি রাখিতেছিলে রাখিতেছিলেন রাখিতেছিস রাখিতেছে রাখিতেছেন রাখিতেন রাখিনি রাখিপূর্ণিমা রাখিব রাখিবার রাখিবি রাখিবে রাখিবেন রাখিবন্ধন রাখিল রাখিলাম রাখিলি রাখিলে রাখিলেন রাখিস রাখিয়া রাখিয়াছ রাখিয়াছি রাখিয়াছিল রাখিয়াছিলাম রাখিয়াছিলি রাখিয়াছিলে রাখিয়াছিলেন রাখিয়াছিস রাখিয়াছে রাখিয়াছেন রাখিয়ো রাখী রাখীপূর্ণিমা রাখীবন্ধন রাখে রাখেন রাখেনি রাখেননি রাখো রাখোয়াল রাখছ রাখছি রাখছিল রাখছিলাম রাখছিলি রাখছিলে রাখছিলেন রাখছিলেম রাখছিলুম রাখছিস রাখছে রাখছেন রাখছস রাখঢাক রাখত রাখতাম রাখতিস রাখতে রাখতেছি রাখতেন রাখতেম রাখতো রাখতুম রাখন রাখুন রাখনা রাখব রাখবার রাখবি রাখবে রাখবেন রাখবো রাখল রাখলাম রাখলি রাখলে রাখলেন রাখলেম রাখলুম রাগ রাগুক রাগা রাগাই রাগাইও রাগাইত রাগাইতাম রাগাইতিস রাগাইতে রাগাইতেছ রাগাইতেছি রাগাইতেছিল রাগাইতেছিলাম রাগাইতেছিলি রাগাইতেছিলে রাগাইতেছিলেন রাগাইতেছিস রাগাইতেছে রাগাইতেছেন রাগাইতেন রাগাইব রাগাইবার রাগাইবি রাগাইবে রাগাইবেন রাগাইল রাগাইলাম রাগাইলি রাগাইলে রাগাইলেন রাগাইয়া রাগাইয়াছ রাগাইয়াছি রাগাইয়াছিল রাগাইয়াছিলাম রাগাইয়াছিলি রাগাইয়াছিলে রাগাইয়াছিলেন রাগাইয়াছিস রাগাইয়াছে রাগাইয়াছেন রাগাইয়ো রাগাক রাগাচ্ছ রাগাচ্ছি রাগাচ্ছিল রাগাচ্ছিলাম রাগাচ্ছিলি রাগাচ্ছিলে রাগাচ্ছিলেন রাগাচ্ছিলেম রাগাচ্ছিলুম রাগাচ্ছিস রাগাচ্ছে রাগাচ্ছেন রাগাত রাগাতাম রাগাতিস রাগাতে রাগাতেন রাগাতেম রাগাতুম রাগাত্মক রাগান রাগানো রাগান্ধ রাগান্বিত রাগাব রাগাবার রাগাবি রাগাবে রাগাবেন রাগাবো রাগারাগি রাগারুণ রাগাল রাগালাম রাগালি রাগালে রাগালেন রাগালেম রাগালুম রাগাশ্রিত রাগাশ্রয়ী রাগাস রাগি রাগিণী রাগিত রাগিতাম রাগিতিস রাগিতে রাগিতেছ রাগিতেছি রাগিতেছিল রাগিতেছিলাম রাগিতেছিলি রাগিতেছিলে রাগিতেছিলেন রাগিতেছিস রাগিতেছে রাগিতেছেন রাগিতেন রাগিব রাগিবার রাগিবি রাগিবে রাগিবেন রাগিবের রাগিল রাগিলাম রাগিলি রাগিলে রাগিলেন রাগিস রাগিয়া রাগিয়াছ রাগিয়াছি রাগিয়াছিল রাগিয়াছিলাম রাগিয়াছিলি রাগিয়াছিলে রাগিয়াছিলেন রাগিয়াছিস রাগিয়াছে রাগিয়াছেন রাগিয়ে রাগিয়েছ রাগিয়েছি রাগিয়েছিল রাগিয়েছিলাম রাগিয়েছিলি রাগিয়েছিলে রাগিয়েছিলেন রাগিয়েছিলেম রাগিয়েছিলুম রাগিয়েছিস রাগিয়েছে রাগিয়েছেন রাগিয়ো রাগী রাগেগরগর রাগেন রাগছ রাগছি রাগছিল রাগছিলাম রাগছিলি রাগছিলে রাগছিলেন রাগছিলেম রাগছিলুম রাগছিস রাগছে রাগছেন রাগত রাগতাম রাগতিস রাগতে রাগতেন রাগতেম রাগতুম রাগদ্বেষ রাগদ্বেষাদিবর্জিত রাগদ্বেষবর্জিত রাগদ্বেষহীন রাগুন রাগপ্রধান রাগপড়া রাগব রাগবার রাগবি রাগবিরাগ রাগবিস্তার রাগবে রাগবেন রাগবো রাগমুখ রাগমালা রাগরাগ রাগরাগিণী রাগল রাগলাম রাগলি রাগলে রাগলেন রাগলেম রাগলুম রাগসঙ্গীত রাগসামলানো রাঘব রাঘবারি রাঘবপ্রিয়া রাঘববাঞ্ছা রাঘববোয়াল রাঙ রাঙ্গ রাঙ্গা রাঙ্গাআলু রাঙ্গাই রাঙ্গাইও রাঙ্গাইত রাঙ্গাইতাম রাঙ্গাইতিস রাঙ্গাইতে রাঙ্গাইতেছ রাঙ্গাইতেছি রাঙ্গাইতেছিল রাঙ্গাইতেছিলাম রাঙ্গাইতেছিলি রাঙ্গাইতেছিলে রাঙ্গাইতেছিলেন রাঙ্গাইতেছিস রাঙ্গাইতেছে রাঙ্গাইতেছেন রাঙ্গাইতেন রাঙ্গাইব রাঙ্গাইবার রাঙ্গাইবি রাঙ্গাইবে রাঙ্গাইবেন রাঙ্গাইল রাঙ্গাইলাম রাঙ্গাইলি রাঙ্গাইলে রাঙ্গাইলেন রাঙ্গাইয়া রাঙ্গাইয়াছ রাঙ্গাইয়াছি রাঙ্গাইয়াছিল রাঙ্গাইয়াছিলাম রাঙ্গাইয়াছিলি রাঙ্গাইয়াছিলে রাঙ্গাইয়াছিলেন রাঙ্গাইয়াছিস রাঙ্গাইয়াছে রাঙ্গাইয়াছেন রাঙ্গাইয়ো রাঙ্গাক রাঙ্গাচোখ রাঙ্গাচ্ছ রাঙ্গাচ্ছি রাঙ্গাচ্ছিল রাঙ্গাচ্ছিলাম রাঙ্গাচ্ছিলি রাঙ্গাচ্ছিলে রাঙ্গাচ্ছিলেন রাঙ্গাচ্ছিলেম রাঙ্গাচ্ছিলুম রাঙ্গাচ্ছিস রাঙ্গাচ্ছে রাঙ্গাচ্ছেন রাঙ্গাত রাঙ্গাতাম রাঙ্গাতিস রাঙ্গাতে রাঙ্গাতেন রাঙ্গাতেম রাঙ্গাতুম রাঙ্গান রাঙ্গানো রাঙ্গাব রাঙ্গাবার রাঙ্গাবি রাঙ্গাবে রাঙ্গাবেন রাঙ্গাবো রাঙ্গামাটি রাঙ্গামুলা রাঙ্গামূলা রাঙ্গাল রাঙ্গালাম রাঙ্গালি রাঙ্গালে রাঙ্গালেন রাঙ্গালেম রাঙ্গালুম রাঙ্গাস রাঙ্গি রাঙ্গিয়ে রাঙ্গিয়েছ রাঙ্গিয়েছি রাঙ্গিয়েছিল রাঙ্গিয়েছিলাম রাঙ্গিয়েছিলি রাঙ্গিয়েছিলে রাঙ্গিয়েছিলেন রাঙ্গিয়েছিলেম রাঙ্গিয়েছিলুম রাঙ্গিয়েছিস রাঙ্গিয়েছে রাঙ্গিয়েছেন রাঙ্গিয়ো রাঙ্গচিতা রাঙ্গতা রাঙ্গুনিয়া রাঙা রাঙাআলু রাঙাই রাঙাইও রাঙাইত রাঙাইতাম রাঙাইতিস রাঙাইতে রাঙাইতেছ রাঙাইতেছি রাঙাইতেছিল রাঙাইতেছিলাম রাঙাইতেছিলি রাঙাইতেছিলে রাঙাইতেছিলেন রাঙাইতেছিস রাঙাইতেছে রাঙাইতেছেন রাঙাইতেন রাঙাইব রাঙাইবার রাঙাইবি রাঙাইবে রাঙাইবেন রাঙাইল রাঙাইলাম রাঙাইলি রাঙাইলে রাঙাইলেন রাঙাইয়া রাঙাইয়াছ রাঙাইয়াছি রাঙাইয়াছিল রাঙাইয়াছিলাম রাঙাইয়াছিলি রাঙাইয়াছিলে রাঙাইয়াছিলেন রাঙাইয়াছিস রাঙাইয়াছে রাঙাইয়াছেন রাঙাইয়ো রাঙাক রাঙাচোখ রাঙাচ্ছ রাঙাচ্ছি রাঙাচ্ছিল রাঙাচ্ছিলাম রাঙাচ্ছিলি রাঙাচ্ছিলে রাঙাচ্ছিলেন রাঙাচ্ছিলেম রাঙাচ্ছিলুম রাঙাচ্ছিস রাঙাচ্ছে রাঙাচ্ছেন রাঙাত রাঙাতাম রাঙাতিস রাঙাতে রাঙাতেন রাঙাতেম রাঙাতুম রাঙান রাঙানো রাঙাব রাঙাবার রাঙাবাস রাঙাবি রাঙাবে রাঙাবেন রাঙাবো রাঙামাটি রাঙামেঘ রাঙামুলা রাঙামূলা রাঙামুলো রাঙাল রাঙালাম রাঙালি রাঙালে রাঙালেন রাঙালেম রাঙালুম রাঙাস রাঙি রাঙিয়া রাঙিয়ে রাঙিয়েছ রাঙিয়েছি রাঙিয়েছিল রাঙিয়েছিলাম রাঙিয়েছিলি রাঙিয়েছিলে রাঙিয়েছিলেন রাঙিয়েছিলেম রাঙিয়েছিলুম রাঙিয়েছিস রাঙিয়েছে রাঙিয়েছেন রাঙিয়ো রাঙচিতা রাঙের রাঙঝাল রাঙতা রাঁচি রাজ রাজু রাজ\nযক্ষ্মা রাজঅন্তঃপুর রাজউক রাজক রাজকার্য রাজকাহিনী রাজকীয় রাজকীয়তা রাজকোট রাজকোষ রাজকন্যা রাজকবি রাজকুমার রাজকুমারী রাজকর রাজকর্ম রাজকর্মচারী রাজকুল রাজকল্যাণ রাজকৃষ্ণ রাজক্ষয় রাজগামী রাজগাঁড় রাজগি রাজগুরু রাজগ্রীব রাজগড় রাজা রাজাউজির রাজাউজীর রাজাকার রাজাগঞ্জ রাজাজ্ঞা রাজাদেশ রাজাধিরাজ রাজানুকম্পা রাজানগর রাজানুগ্রহ রাজান্তঃপুর রাজাপুর রাজাবাজার রাজাবাহাদুর রাজাবাড়ি রাজাবলি রাজাবলী রাজাভি রাজারঘরানা রাজারছেলে রাজারজনক রাজারঝি রাজারবাগ রাজারহাট রাজারহাল রাজাসন রাজাহীন রাজি রাজিত রাজিনামা রাজী রাজচক্রবর্তী রাজচিহ্ন রাজচ্ছত্র রাজীনামা রাজীব রাজীবলোচন রাজে রাজেন্দ্র রাজেন্দ্রাণী রাজেন্দ্রনন্দিনী রাজের রাজছত্র রাজ্ঞী রাজ্য রাজযক্ষ্মা রাজ্যাংশ রাজ্যাভিষেক রাজ্যাভিষেকের রাজটিকা রাজটীকা রাজ্যচালনা রাজ্যচিত্র রাজ্যচ্যুত রাজ্যেশ্বর রাজ্যেশ্বরী রাজযোগ রাজযোটক রাজ্যজয় রাজ্যধ্বংস রাজ্যপাট রাজ্যপাল রাজ্যপরিচালনা রাজ্যবিজয় রাজ্যভুক্ত রাজ্যভার রাজ্যভোগ রাজ্যভ্রষ্ট রাজ্যরক্ষা রাজ্যশাসন রাজ্যশাসনঘটিত রাজ্যশাসননীতি রাজ্যসীমা রাজ্যসভা রাজ্যসরকার রাজ্যহারা রাজতক্ত রাজতখত রাজতান্ত্রিক রাজতিলক রাজতন্ত্র রাজতন্ত্রী রাজত্ব রাজত্বকাল রাজতরু রাজতুল্য রাজদান রাজদণ্ড রাজদণ্ডধারী রাজদণ্ডনীতি রাজদণ্ডরূপে রাজদূত রাজদত্ত রাজদন্ত রাজদ্বার রাজদম্পতি রাজদ্রোহ রাজদ্রোহকারী রাজদ্রোহিতা রাজদ্রোহী রাজদরবার রাজদর্শন রাজদুলাল রাজদুলালি রাজদুলালী রাজধানী রাজধর্ম রাজন রাজনগর রাজনামা রাজনারায়ণ রাজনিয়ম রাজনীতি রাজনীতিগত রাজনীতিজ্ঞ রাজনীতিবিদ রাজনৈতিক রাজনৈতিকদল রাজন্য রাজন্যক রাজনন্দগাঁও রাজনন্দিনী রাজনন্দন রাজনর্তকী রাজপক্ষ রাজপাট রাজপাত রাজপট্ট রাজপুত রাজপুতানা রাজপুতানি রাজপত্নী রাজপুত্র রাজপুত্রী রাজপথ রাজপদ রাজপুর রাজপ্রাসাদ রাজপ্রাসাদতুল্য রাজপরিবারের রাজপুরী রাজপ্রতিনিধি রাজপ্রধান রাজপ্রমুখ রাজপুরুষ রাজপ্রসাদ রাজপুষ্প রাজবংশ রাজবংশীয় রাজবংশীয়া রাজবৃক্ষ রাজবাটী রাজবালা রাজবাড়ি রাজবাড়ী রাজবিদ্রোহ রাজবিধান রাজবিধি রাজবিপ্লব রাজবিহার রাজবেশ রাজবন্দী রাজবন্দনা রাজবর্ত্ম রাজবল্লি রাজবল্লী রাজবল্লভ রাজভক্ত রাজভক্তি রাজভাষা রাজভিষক রাজভোগ রাজভোগ্য রাজভোগ্যা রাজভৃত্য রাজভবন রাজভয় রাজমুকুট রাজমান্য রাজমার্গ রাজমিস্ত্রি রাজমজুর রাজমহিমা রাজমহিষী রাজমহল রাজরাজ রাজরাজেশ্বর রাজরাজেশ্বরী রাজরাজড়া রাজরানি রাজরানী রাজরোগ রাজর্ষি রাজলক্ষণ রাজলক্ষ্মী রাজলিখা রাজলেখ রাজলেখ্য রাজশক্তি রাজশাসন রাজশাহী রাজশাহীবিভাগ রাজশেখর রাজশয্যা রাজশফর রাজশ্রী রাজস রাজসংস্করণ রাজস্কন্ধ রাজসাক্ষী রাজসিংহ রাজসিংহাসন রাজসিক রাজসিকী রাজসী রাজসেবা রাজস্থান রাজস্থানি রাজস্থলী রাজসদন রাজস্ব রাজস্বদান রাজস্বদানকারী রাজস্বনীতি রাজস্ববোর্ড রাজস্বমন্ত্রী রাজস্বসচিব রাজসভা রাজসভাসদ রাজসমীপে রাজসম্মান রাজসরকার রাজসর্প রাজসর্ষপ রাজসূয় রাজহংস রাজহংসী রাজহাঁস রাজহীন রাজহস্তী রাজড়া রাঝাই রাযী রাডার রাডারকেন্দ্র রাঢ় রাঢ়ী রাঢ়ীয় রাঢ়বঙ্গ রাণা রাণাঘাট রাণী রাণীগঞ্জ রাণ্ডী রাণ্ডীবাজ রাত রাতকাটানো রাতকাণা রাতকানা রাতকরা রাতা রাতারাতি রাতি রাতিদিন রাতিয়া রাতী রাতচোরা রাতজাগা রাত্তির রাতদিন রাতদুপুর রাতপ্রভাত রাতবিরেত রাতবেরাত রাতভোর রাতভর রাত্র রাতরাত রাত্রি রাত্রিকাল রাত্রিকালীন রাত্রিচর রাত্রিচরী রাত্রিজাগরণ রাত্রিঞ্চর রাত্রিঞ্চরী রাত্রিযাপন রাত্রিদিন রাত্রিপুষ্প রাত্রিবাস রাত্রিবেলা রাত্রিব্যাপী রাত্রিমণি রাত্রির রাত্রেরচৌকি রাত্র্যন্ধ রাতুল রাতুলচরণ রাঁদা রাদারফোর্ড রাদারফোর্ডিয়াম রাদ্ধ রাঁধ রাঁধুক রাধা রাঁধা রাধাকান্ত রাধাকান্তদেব রাধাকৃষ্ণ রাধাগোবিন্দ রাধাচূড়া রাঁধান রাধানগর রাধানাথ রাধানাম রাঁধানো রাধাপদ্ম রাধাপ্রতি রাঁধাবাড়া রাধাবল্লভ রাধাবল্লভী রাধামাধব রাধামোহন রাধারানী রাধারঞ্জন রাধারমণ রাধাষ্টমী রাঁধি রাধিকা রাধিকাপ্রসাদ রাধিকারঞ্জন রাধিকারমণ রাঁধিত রাঁধিতাম রাঁধিতিস রাঁধিতে রাঁধিতেছ রাঁধিতেছি রাঁধিতেছিল রাঁধিতেছিলাম রাঁধিতেছিলি রাঁধিতেছিলে রাঁধিতেছিলেন রাঁধিতেছিস রাঁধিতেছে রাঁধিতেছেন রাঁধিতেন রাঁধিব রাঁধিবার রাঁধিবি রাঁধিবে রাঁধিবেন রাঁধিল রাঁধিলাম রাঁধিলি রাঁধিলে রাঁধিলেন রাঁধিস রাঁধিয়া রাঁধিয়াছ রাঁধিয়াছি রাঁধিয়াছিল রাঁধিয়াছিলাম রাঁধিয়াছিলি রাঁধিয়াছিলে রাঁধিয়াছিলেন রাঁধিয়াছিস রাঁধিয়াছে রাঁধিয়াছেন রাঁধিয়ো রাধেকৃষ্ণ রাঁধেন রাধেয় রাঁধো রাঁধছ রাঁধছি রাঁধছিল রাঁধছিলাম রাঁধছিলি রাঁধছিলে রাঁধছিলেন রাঁধছিলেম রাঁধছিলুম রাঁধছিস রাঁধছে রাঁধছেন রাঁধত রাঁধতাম রাঁধতিস রাঁধতে রাঁধতেন রাঁধতেম রাঁধতুম রাধন রাঁধন রাঁধুন রাধনা রাঁধনি রাঁধুনি রাঁধনিয়া রাঁধব রাঁধবার রাঁধবি রাঁধবে রাঁধবেন রাঁধবো রাঁধল রাঁধলাম রাঁধলি রাঁধলে রাঁধলেন রাঁধলেম রাঁধলুম রান রানু রানওয়ে রানা রানাঘাট রানার রানার্স রানি রানিগঞ্জ রানিমৌমাছি রানী রানীগঞ্জ রানীবালা রানটাইম রান্ধ রান্ধুক রান্ধা রান্ধাবাড়া রান্ধি রান্ধিত রান্ধিতাম রান্ধিতিস রান্ধিতে রান্ধিতেছ রান্ধিতেছি রান্ধিতেছিল রান্ধিতেছিলাম রান্ধিতেছিলি রান্ধিতেছিলে রান্ধিতেছিলেন রান্ধিতেছিস রান্ধিতেছে রান্ধিতেছেন রান্ধিতেন রান্ধিব রান্ধিবার রান্ধিবি রান্ধিবে রান্ধিবেন রান্ধিল রান্ধিলাম রান্ধিলি রান্ধিলে রান্ধিলেন রান্ধিস রান্ধিয়া রান্ধিয়াছ রান্ধিয়াছি রান্ধিয়াছিল রান্ধিয়াছিলাম রান্ধিয়াছিলি রান্ধিয়াছিলে রান্ধিয়াছিলেন রান্ধিয়াছিস রান্ধিয়াছে রান্ধিয়াছেন রান্ধিয়ো রান্ধে রান্ধেন রান্ধন রান্ধুন রান্ধনা রান্ধনি রান্ধুনি রান্ধনী রান্ধুনী রান্না রান্নাকরা রান্নাঘর রান্নাচড়ানো রান্নাবান্না রান্নাবাড়া রাপান রাফ রাফখাতা রাব রাবার রাবি রাবিশ রাবণ রাবণাদি রাবণারি রাবণি রাবণেরচিতা রাবণেরপুরী রাবণদমন রাবণপুত্র রাবণবধ রাবণমুখী রাবণমুখো রাবড়ি রাম রামকানাই রামকান্ত রামকেলি রামকেলী রামকেলীরাগ রামকোট রামকথা রামকুমার রামকৃষ্ণ রামখড়ি রামগিরি রামগঞ্জ রামগতি রামগরুড় রামগড় রামা রামাই রামাইত রামানুজ রামাল্লা রামায়েত রামায়ণ রামায়ণকার রামায়ণগান রামায়ণগ্রন্থ রামায়ণোক্ত রামায়ণপ্রসঙ্গ রামায়ণরচয়িতা রামচন্দ্র রামচরিতনামা রামছাগল রামজামা রামজি রামযাত্রা রামটেপা রামযশ রামঠেলা রামতনু রামদা রামদাস রামদাসী রামদৌড় রামধাক্কা রামধোলাই রামধনু রামধনুক রামনগর রামনাম রামনিধি রামনবমী রামপাখি রামপাখী রামপাল রামপাশা রামপুর রামপুরা রামপ্রসাদ রামপুরহাট রামভক্ত রামমোহন রামরাজ্য রামরাজত্ব রামরাম রামলীলা রামশালিক রামশিঙ্গা রামশিঙা রামশ্যাম রামশ্যামা রামসাগর রামহেঁয়ালি রাশ রাশান রাশি রাশিচক্র রাশিনক্ষত্র রাশিপরিমাণ রাশিফল রাশিবিজ্ঞান রাশিমালা রাশিরাশি রাশিয়া রাশিয়ান রাশছাড়া রাশটানা রাশনামা রাশপাতলা রাশভারী রাশহালকা রাষ্ট্র রাষ্ট্রকাঠামো রাষ্ট্রকে রাষ্ট্রকূট রাষ্ট্রক্ষমতা রাষ্ট্রগত রাষ্ট্রায়ত্ত রাষ্ট্রিক রাষ্ট্রচালক রাষ্ট্রচিন্তা রাষ্ট্রীয় রাষ্ট্রীয়ভাবে রাষ্ট্রদোহী রাষ্ট্রদূত রাষ্ট্রদূতদ্বয় রাষ্ট্রদ্রোহ রাষ্ট্রদ্রোহিতা রাষ্ট্রধর্ম রাষ্ট্রনায়ক রাষ্ট্রনীতি রাষ্ট্রনীতিক রাষ্ট্রনেতৃবৃন্দ রাষ্ট্রনৈতিক রাষ্ট্রপুঞ্জ রাষ্ট্রপতি রাষ্ট্রপরিচালক রাষ্ট্রপরিচালনা রাষ্ট্রপ্রধান রাষ্ট্রবাহিনী রাষ্ট্রবিজ্ঞান রাষ্ট্রবিজ্ঞানী রাষ্ট্রবিপ্লব রাষ্ট্রবিহীন রাষ্ট্রব্যবস্থা রাষ্ট্রভাষা রাষ্ট্রমন্ত্রী রাষ্ট্রশাসক রাষ্ট্রশাসন রাষ্ট্রশাসনতন্ত্র রাষ্ট্রশাসনব্যবস্থা রাষ্ট্রসংগঠন রাষ্ট্রসংঘ রাষ্ট্রহীন রাস রাসআলগা রাসকেল রাস্কেল রাসায়নিক রাসযাত্রা রাসটানা রাস্তা রাস্তাঘাট রাস্তাযুক্ত রাস্তাধরা রাস্তাবন্ধ রাস্তারলোক রাস্তাসমন্বিত রাস্তে রাসন রাস্না রাস্নাগোত্র রাস্নামালা রাসনৃত্য রাসপূর্ণিমা রাসবিহারী রাসভ রাসভী রাসভনিন্দিত রাসমেলা রাসমণ্ডপ রাসমণ্ডল রাসলীলা রাহু রাহুগ্রস্ত রাহুগ্রহ রাহা রাহাখরচ রাহাগির রাহাজান রাহাজানি রাহাযন রাহাবর রাহি রাহিত্য রাহী রাহুজান রাহুত রাহুতা রাহবর রাহুমুক্তি রাহমান রাহমানির রাহুরগরাস রাহুরদশা রাড় রাঁড় রাঁড়া রাড়ি রাঁড়ি রাড়িখাল রাঁড়ী রাঁড়েরবাড়ি রাঢ়দেশ রাঢ়দেশীয় রায় রায়কোট রায়গঞ্জ রায়গদা রায়গড় রায়জাদা রায়ট রায়ত রায়তি রায়তী রায়তদার রায়পুর রায়বাগ রায়বাঘিনী রায়বার রায়বাঁশ রায়বাস রায়বাহাদুর রায়বেঁশে রায়রঙ্গপুর রায়রায়াঁ রায়রায়ান রায়সাহেব রি রিং রিংটোন রিংস রিও রিওয়াজ রিওয়ার্ড রিকুইজিশন রিকগনিশন রিকাব রিকিব রিকোয়েস্ট রিক্টার রিক্ত রিক্তা রিক্ততা রিক্তহাতে রিক্তহৃদয় রিক্তহস্ত রিকম্বিনান্ট রিকম্বিনেন্ট রিকম্বিনেশন রিক্রিয়েশন রিক্রুট রিক্রুটিং রিক্রুটমেন্ট রিকশা রিকশাওয়ালা রিকশাচালক রিকশাবাহক রিকসা রিক্সা রিকুয়েস্ট রিখটার রিঙ রিঙ্গিত রিচ রিজক রিজাইন রিজার্ভ রিজার্ভার রিজার্ভেশন রিজিওন রিজিওনাল রিজিক রিজেনারেশন রিজন রিজল্যুশন রিজল্যুশনের রিঝ রিঝি রিট রিযক রিটার্ন রিটার্নিং রিটায়ার রিটায়ার্ড রিঠা রিঠে রিড রিডাইরেক্ট রিডাকশন রিডার রিডিং রিতু রিদম রিনিকিঝিনি রিনিকঝিনিক রিনিঝিনি রিনঝিন রিনরিন রিনরিনে রিপু রিপুকার রিপাবলিক রিপাবলিকান রিপিট রিপিটার রিপিটেড রিপেয়ার রিপোর্ট রিপোর্টার রিপোর্টস রিপুদমী রিপুদমন রিপ্রেজেন্ট রিপ্লাই রিপ্লাইকার্ড রিপ্লে রিপ্লেস রিফু রিফাইন রিফাইনারি রিফাইন্ড রিফাত রিফিউজি রিফুজি রিফ্রেশ রিফ্রেশমেন্ট রিফরম্যাট রিফরম্যাটিং রিফ্লেক্স রিবিট রিবোফ্লাভিন রিবন রিভার রিভার্স রিভারসাইড রিভিউ রিভিশন রিভেঞ্জ রিভোল্ট রিভলভার রিভলভিং রিম রিমাইন্ডার রিমান্ড রিমিকিঝিমিকি রিমিক্স রিমিঝিমি রিমেক রিমোট রিমঝিম রিমুভেবল রিরংসু রিরংসা রিরি রিল রিলাই রিলিজ রিলিজিং রিলিজিয়ন রিলিফ রিলে রিলেটিভ রিলেটিভিটি রিলেটেড রিলেশন রিলেশনশিপ রিলোড রিলোডেড রিশওত রিশতা রিশতাদার রিষ রিষারিষি রিষারেষি রিষারষি রিষ্ট রিষ্টি রিষ্টিনাশা রিসওয়াত রিস্ক রিস্কি রিসার্চ রিসার্ভ রিসালা রিসালাত রিসালাতুল রিসালাদার রিসালদার রিসালপুর রিসি রিসিভার রিসেট রিসেন্ট রিসেন্টলি রিসেপ্টার রিসেপ্টর রিসোর্ট রিসোর্স রিস্টওয়াচ রিস্টার্ট রিস্টলেট রিহার্সাল রিহেবিলিটেশন রিহ্যাবিলিটেশন রিয়াইত রিয়াকারী রিয়াদ রিয়াল রিয়ালিটি রিয়েল রিয়েলিটি রিয়েলিস্ট রিয়েলপ্লেয়ার রিয়্যালিটি রচক রচা রুচা রুচি রুচিকর রুচিযুক্ত রচিত রুচিবাগীশ রুচিবিকার রচিবে রুচিবর্ধক রুচিভেদ রুচিমান রুচির রুচিরা রচিল রুচিশীল রুচিশীলতা রুচিসম্পন্ন রুচিসম্মত রুচিহীন রুচিহীনতা রচেনি রুচছে রুচ্য রীড রীত রীতা রীতি রীতিগত রীতিনীতি রীতিবিজ্ঞান রীতিবিরুদ্ধ রীতিবহির্ভূত রীতিমত রীতিমতো রীতিসিদ্ধ রীতিসম্মত রচন রচনা রচনাকার রচনাকারী রচনাকাল রচনাকৌশল রচনাদি রচনাপঞ্জি রচনাপদ্ধতি রচনাবলী রচনাভঙ্গি রচনারীতি রচনাশৈলী রচনাসংকলন রচনাসঙ্কলন রচনাসমগ্র রচনাসম্পর্কিত রচনীয় রীফ রুচবে রীম রীল রীষ রচয়িতা রচয়িত্রী রে রেইন রেইনওয়াটার রেইনকোস্ট রেইনট্রি রেইনফরেস্ট রেইনবো রেইপ রেইস রেউচিনি রেউচীনী রেউরী রেউল রেউড়ি রেউড়ী রেউয়া রেওয়া রেওয়াজ রেওয়াজি রেওয়ায়ত রেক রেকাত রেকাব রেকাবি রেকাবী রেকাবদার রেকি রেক্টাম রেকর্ড রেকর্ডকৃত রেকর্ডার রেকর্ডিং রেকর্ডেড রেকর্ডেবল রেকর্ডধারী রেকর্ডপত্র রেকর্ডপ্লেয়ার রেকর্ডভিত্তিক রেকর্ডরত রেকর্ডস রেকর্ডসংখ্যক রেখ রেখা রেখাংশ রেখাগণিত রেখাঙ্কিত রেখাঙ্কন রেখাচিত্র রেখাযুক্ত রেখাদ্বয় রেখাপাত রেখাপাতন রেখাপথ রেখাবেষ্টিত রেখে রেখেছ রেখেছি রেখেছিল রেখেছিলাম রেখেছিলি রেখেছিলে রেখেছিলেন রেখেছিলেম রেখেছিলো রেখেছিলুম রেখেছিস রেখেছে রেখেছেন রেখেঢেকে রেখেন রেখো রেগে রেগেছ রেগেছি রেগেছিল রেগেছিলাম রেগেছিলি রেগেছিলে রেগেছিলেন রেগেছিলেম রেগেছিলুম রেগেছিস রেগেছে রেগেছেন রেগুলার রেগুলেটর রেগুলেটরি রেঙ্গুন রেচক রেচিত রেচন রেচনতন্ত্র রেচনপদার্থ রেচনপদার্থযুক্ত রেজকি রেজকী রেজগি রেজগী রেজা রেজাই রেজার রেজালা রেজাল্ট রেজিমেন্ট রেজিমেন্টাল রেজিস্টান্ট রেজিস্টার রেজিস্টারি রেজিস্টার্ড রেজিস্ট্রি রেজিস্ট্রিকৃত রেজিস্ট্রিকরণ রেজিস্ট্রিভুক্তকরণ রেজিস্ট্রেশন রেজেক রেজোন্যান্স রেজোলিউশন রেজোল্যুশন রেজর রেঝা রেঞ্জ রেঞ্জার রেঞ্জার্স রেট রেটিং রেটিকুলাম রেটিনা রেটিনাল রেটিনল রেটস্ট্রাইক রেড রেডক্রিসেন্ট রেডক্রস রেডক্লিফ রেডি রেডিও রেডিওঅ্যাকটিভ রেডিওগ্রাফ রেডিওগ্রাম রেডিওটুডে রেডিওথেরাপি রেডিওলোজী রেডিমেড রেডিয়াম রেডিয়েটার রেডিয়েশন রেডন রেণু রেণুকা রেণ্ডীবাজ রেত রেতঃপাত রেতঃস্খলন রেতি রেদা রেঁধে রেঁধেছ রেঁধেছি রেঁধেছিল রেঁধেছিলাম রেঁধেছিলি রেঁধেছিলে রেঁধেছিলেন রেঁধেছিলেম রেঁধেছিলুম রেঁধেছিস রেঁধেছে রেঁধেছেন রেঁধো রেন রেনউইক রেনওয়াটার রেনকোট রেনেসাঁ রেনেসাঁস রেনেসাঁসকালীন রেন্ট রেন্টাল রেপ রেপার রেপুটেশন রেফ রেফার রেফারি রেফারী রেফারেন্স রেফচিহ্ন রেফুজি রেফ্রিজারেটর রেবা রেবতী রেবতীরমণ রেমো রেমোশ্যামো রেরে রেল রেলওয়ে রেলক্রসিং রেলগাড়ি রেলিং রেলিংযুক্ত রেলিঙ রেলচিত্র রেলযোগাযোগ রেলযোগে রেলপথ রেললাইন রেলসেতু রেলস্টেশন রেশ রেশালা রেশালাদার রেশিও রেশন রেশনব্যবস্থা রেশম রেশমকীট রেশমগুটি রেশমি রেশমনগরী রেশমবস্ত্র রেশমশিল্প রেষ রেষারেষি রেস রেসকোর্স রেসার রেসালা রেসালাদার রেসিং রেসিপি রেসোনান্স রেস্ট রেস্টুরেন্ট রেস্ত রেস্তোরা রেস্তোরাঁ রেস্তোরাঁর রেস্তরা রেস্তরাঁ রেসপিরেশন রেসপন্স রেসুড়ে রেহা রেহাই রেহান রেহাননামা রেহেল রেহনিয়াম রেহমান রেড়ি রেড়িগাছ রেড়ির রেড়ী রেঢ়ো রেয়াত রেয়াৎ রেয়ার রেয়ো রৈ রৈখিক রৈখিকতা রৈবতক রৈরৈ রো রোঁ রোঁআ রোক রোকা রোকেয়া রোকো রোকন রোকশোধ রোকসত রোকড় রোখ রোখা রোখাল রোখে রোখেন রোখবার রোখসত রোগ রোগক্লিষ্ট রোগগ্রস্ত রোগা রোগাক্রান্ত রোগাক্লিষ্ট রোগাটে রোগাদি রোগাদুবলা রোগাপটকা রোগাভাব রোগার্ত রোগিণী রোগী রোগীদেখা রোগীরজ্ঞান রোগেপড়া রোগোৎপাদক রোগছড়ানো রোগজাত রোগজীবাণু রোগজীর্ণ রোগজনিত রোগজ্বালা রোগজরানাশক রোগজর্জর রোগযন্ত্রণা রোগতত্ত্ব রোগদমন রোগনিবন্ধন রোগনিরাময় রোগনির্ণায়ক রোগনির্ণয় রোগপরিসংখ্যান রোগপরীক্ষা রোগপ্রতিরোধ রোগপ্রতিরোধব্যবস্থা রোগপ্রতিষেধক রোগবালাই রোগব্যাধি রোগভোগ রোগমুক্ত রোগমুক্তি রোগশান্তি রোগশোক রোগশয্যা রোগসংক্রমণ রোগসংখ্যা রোগসূচনাকারী রোগসৃষ্টিকারী রোগহওয়া রোগহীন রোগহীনতা রোগহেতু রোচক রোচা রোচে রোচ্য রোচনা রোচনি রোচনী রোছমত রোজ রোজকার রোজকিয়ামত রোজকেয়ামত রোজগার রোজগারি রোজগেরে রোজা রোজাখোলা রোজাদার রোজানা রোজারাখা রোজারিওর রোজিনা রোজদার রোজনামা রোজনামচা রোজরোজ রোজহাসর রোঝা রোযা রোটাভাইরাস রোটারি রোটিকা রোড রোডিয়াম রোডব্লক রোডরানার রোডস রোডস্থ রোতো রোথো রোদ রোঁদ রোদওঠা রোদি রোঁদে রোদেগরমে রোদেজলে রোদেলা রোদ্দুর রোদ্ধা রোদন রোদনকারী রোদনধারা রোদনধ্বনি রোদবৃষ্টি রোদসী রোধ রোধক রোধকারী রোধকাল রোধকত্ব রোধকল্প রোধা রোধিনী রোধিবে রোধী রোধে রোধেন রোধ্য রোধন রোধপ্রথা রোধবার রোনাজারি রোনালদো রোপ রোপুক রোপা রোপি রোপিত রোপিতাম রোপিতিস রোপিতে রোপিতেছ রোপিতেছি রোপিতেছিল রোপিতেছিলাম রোপিতেছিলি রোপিতেছিলে রোপিতেছিলেন রোপিতেছিস রোপিতেছে রোপিতেছেন রোপিতেন রোপিব রোপিবার রোপিবি রোপিবে রোপিবেন রোপিল রোপিলাম রোপিলি রোপিলে রোপিলেন রোপিস রোপিয়া রোপিয়াছ রোপিয়াছি রোপিয়াছিল রোপিয়াছিলাম রোপিয়াছিলি রোপিয়াছিলে রোপিয়াছিলেন রোপিয়াছিস রোপিয়াছে রোপিয়াছেন রোপিয়ো রোপে রোপেছ রোপেছি রোপেছিল রোপেছিলাম রোপেছিলি রোপেছিলে রোপেছিলেন রোপেছিলেম রোপেছিলুম রোপেছিস রোপেছে রোপেছেন রোপেন রোপো রোপছ রোপছি রোপছিল রোপছিলাম রোপছিলি রোপছিলে রোপছিলেন রোপছিলেম রোপছিলুম রোপছিস রোপছে রোপছেন রোপণ রোপত রোপতাম রোপতিস রোপতে রোপতেন রোপতেম রোপতুম রোপব রোপবার রোপবি রোপবে রোপবেন রোপবো রোপল রোপলাম রোপলি রোপলে রোপলেন রোপলেম রোপলুম রোপয়িতা রোবাইয়াৎ রোবট রোবটিক্স রোবটবিজ্ঞান রোবটবিজ্ঞানী রোবটস রোববার রোম রোমক রোমকূপ রোমাঞ্চ রোমাঞ্চকর রোমাঞ্চিত রোমাঞ্চিতা রোমাঞ্চজনক রোমাঞ্চযুক্ত রোমাঞ্চপ্রিয় রোমাঞ্চপূর্ণ রোমান রোমানিয়া রোমানচার্চ রোমানচরিত্র রোমানীয় রোমান্টিক রোমান্টিক্যালি রোমান্টিকতা রোমান্টিসিজম রোমানপুরাণ রোমান্স রোমাবলি রোমাবলী রোমাল রোমিং রোমিও রোমীয় রোমোদগম রোমোদ্ভেদ রোমজ রোম্যান রোম্যানক্যাথলিক রোম্যান্টিক রোমদেশীয় রোমনগর রোমন্থ রোমন্থক রোমন্থিক রোমন্থন রোমন্থনকারী রোমপূর্ণ রোমফোঁড়া রোমবাসী রোমবহুল রোমরাজি রোমরোম রোমশ রোমহর্ষ রোমহর্ষক রোমহর্ষণ রোরুদ্যমান রোরুদ্যমানা রোল রোলার রোলিং রোলনম্বর রোশাই রোশানি রোশন রোশনগির রোশনাই রোশনাইযুক্ত রোশনি রোশনচৌকি রোষ রোষকষায়িত রোষা রোষাগ্নি রোষানল রোষাবিষ্ট রোষাবিষ্টা রোষিত রোষী রোষীনি রোষ্ট রোষণ রোষণচৌকি রোষদৃষ্টি রোস রোসো রোসোমৎ রোস্ট রোস্টার রোস্ট্রাম রোহ রোহিঙ্গা রোহিণী রোহিত রোহিতক রোহিতাশ্ব রোহিতভোগ রোহী রোহণ রোঢ়া রোয়া রোঁয়া রোয়াংছড়ি রোয়াক রোয়াকবাজ রোয়ানো রোয়ে রোয়েদাদ রোয়সি রৌদ্র রৌদ্রেরঝাঁজ রৌদ্রোজ্জ্বল রৌদ্রছায়া রৌদ্রজ্জ্বল রৌদ্রতেজ রৌদ্রদগ্ধ রৌদ্রনিবারক রৌদ্রপক্ব রৌদ্রময় রৌদ্ররশ্মি রৌদ্রসেবন রৌদ্রস্নাত রৌদ্রস্নান রৌপ্য রৌপ্যালংকার রৌপ্যালঙ্কার রৌপ্যচূর্ণ রৌপ্যজারা রৌপ্যজয়ন্তী রৌপ্যনির্মিত রৌপ্যমুদ্রা রৌপ্যমূল্য রৌপ্যময় রৌরব রৌশন রৌশনি রৌশনী রজ রুজ রুজু রুজূ রজঃকণা রজঃপটল রজঃরেণু রজঃস্বলা রজঃস্রাব রজক রজকিনী রজকী রুজি রুজিরোজগার রজোগুণ রজোগুণী রজোডিম্ব রজোদোষ রজোদর্শন রজোনিবৃত্তি রজ্জু রজ্জুবদ্ধ রজ্জুবদ্ধা রজ্জুভ্রম রজ্জুর রজ্জুরূপ রজত রজতকান্তি রজতগিরি রজতাভ রজতজয়ন্তী রজতদ্যুতি রজতবর্ণ রজতবর্ণা রজতরেখা রজতশুভ্র রজন রজনী রজনীকান্ত রজনীগন্ধা রজনীযোগ রজনীনাথ রজনীহাস রজব রুজভেল্ট রুজুরুজু রঞ্জক রঞ্জকঘর রঞ্জকদ্রব্য রঞ্জকপদার্থ রঞ্জকসাবান রঞ্জা রঞ্জিকা রঞ্জিত রঞ্জিতকরণ রঞ্জিতা রঞ্জিনী রঞ্জিল রঞ্জী রঞ্জন রঞ্জনকারী রঞ্জনী রঞ্জনদ্রব্য রঞ্জনবিদ্যা রঞ্জনরশ্মি রঞ্জনশিল্পী রট রুট রটআয়রন রটুক রটা রুটা র‌্যাংগস রটাই রটাইও রটাইত রটাইতাম রটাইতিস রটাইতে রটাইতেছ রটাইতেছি রটাইতেছিল রটাইতেছিলাম রটাইতেছিলি রটাইতেছিলে রটাইতেছিলেন রটাইতেছিস রটাইতেছে রটাইতেছেন রটাইতেন রটাইব রটাইবার রটাইবি রটাইবে রটাইবেন রটাইল রটাইলাম রটাইলি রটাইলে রটাইলেন রটাইয়া রটাইয়াছ রটাইয়াছি রটাইয়াছিল রটাইয়াছিলাম রটাইয়াছিলি রটাইয়াছিলে রটাইয়াছিলেন রটাইয়াছিস রটাইয়াছে রটাইয়াছেন রটাইয়ো রটাক রটাচ্ছ রটাচ্ছি রটাচ্ছিল রটাচ্ছিলাম রটাচ্ছিলি রটাচ্ছিলে রটাচ্ছিলেন রটাচ্ছিলেম রটাচ্ছিলুম রটাচ্ছিস রটাচ্ছে রটাচ্ছেন রটাত রটাতাম রটাতিস রটাতে রটাতেন রটাতেম রটাতুম রটান রটানো রটাব রটাবার রটাবি রটাবে রটাবেন রটাবো রটাল রটালাম রটালি রটালে রটালেন রটালেম রটালুম রটাস রুটি রটিত রটিতাম রটিতিস রটিতে রটিতেছ রটিতেছি রটিতেছিল রটিতেছিলাম রটিতেছিলি রটিতেছিলে রটিতেছিলেন রটিতেছিস রটিতেছে রটিতেছেন রটিতেন রুটিন রুটিনবাঁধা রটিব রটিবার রটিবি রটিবে রটিবেন রুটিবেলা রুটিরুজি রটিল রটিলাম রটিলি রটিলে রটিলেন রটিস রটিয়া রটিয়াছ রটিয়াছি রটিয়াছিল রটিয়াছিলাম রটিয়াছিলি রটিয়াছিলে রটিয়াছিলেন রটিয়াছিস রটিয়াছে রটিয়াছেন রটিয়ে রটিয়েছ রটিয়েছি রটিয়েছিল রটিয়েছিলাম রটিয়েছিলি রটিয়েছিলে রটিয়েছিলেন রটিয়েছিলেম রটিয়েছিলুম রটিয়েছিস রটিয়েছে রটিয়েছেন রটিয়ো রুযী রটে রটেছ রটেছি রটেছিল রটেছিলাম রটেছিলি রটেছিলে রটেছিলেন রটেছিলেম রটেছিলুম রটেছিস রটেছে রটেছেন রটেন রটো রটছ রটছি রটছিল রটছিলাম রটছিলি রটছিলে রটছিলেন রটছিলেম রটছিলুম রটছিস রটছে রটছেন রটত রটতাম রটতি রটতিস রটতে রটতেন রটতেম রটতুম রটতহি রটন রটুন রটনা রটনাকারী রটন্তী রটব রটবার রটবি রটবে রটবেন রটবো রটল রটলাম রটলি রটলে রটলেন রটলেম রটলুম রুঠ রুঠা রুঠো রুঠোজমি রড রুড রডিয়াম রূঢ় রূঢ়ি রূঢ়িশব্দ রূঢ়তা রূঢ়পদার্থ রূঢ়মূল রণ রণকৌশল রণকুশল রণক্ষেত্র রণক্ষেত্রপ্রধান রণগতি রণগুরু রণাঙ্গন রণিত রণিবে রণিল রণচণ্ডী রণে রণেচণ্ড রণোদ্যত রণোন্মাদনা রণোন্মত্ত রণোন্মত্তা রণোম্মুখ রণজিৎ রণজয় রণজয়ী রুণুঝুণু রণযাত্রা রণ্ড রণ্ডা রণৎকার রণতরঙ্গ রণতরী রণতূর্য রণদক্ষ রণদেবতা রণদুর্মদ রণধীর রণন রণনকক্ষ রণনিপুণ রণনীতি রণনৈপুণ্য রণনশীল রণপা রণপণ্ডিত রণপতি রণবাদ্য রণবেশ রণভঙ্গ রণভূমি রণমত্ত রণমত্তা রণরঙ্গিণী রণরেখা রুণুরুণু রণশিক্ষা রণসঙ্গীত রণসাজ রণসজ্জা রণস্থল রণহুংকার রণহীন রত রুত রতা রতি রতিকান্ত রতিক্রিয়া রতিক্রীড়া রতিকুশলা রতিদেবী রতিপতি রতিবিদ্যা রতিশক্তি রতিশক্তিবর্ধক রতিশাস্ত্র রতিশব্দ রত্তি রতন রত্ন রত্নখচিত রত্নগিরি রত্নগর্ভ রত্নগর্ভা রতনগড় রত্নাকর রত্নাগার রত্নাদি রত্নাবলি রত্নাবলী রত্নাভরণ রত্নালংকার রত্নালঙ্কার রত্নি রত্নচ্ছায়া রতনচুর রতনচূর রত্নেশ্বরী রত্নজীবী রত্নদ্বীপ রত্নদ্বীপরাগ রত্ননির্মিত রত্নপাল রতনপুর রত্নপুরী রত্নপরীক্ষা রত্নপূর্ণ রত্নপ্রভ রত্নপ্রভা রত্নপ্রসূ রত্নপ্রসবিত্রী রত্নপ্রসবিনী রত্নব্যবসায়ী রত্নবণিক রত্নভাণ্ডার রত্নভেদ রত্নময় রত্নময়ী রত্নরাজি রত্নশিল্পী রত্নসম্ভার রত্নহার রতলম রথ রথখোলা রথাগ্র রথাঙ্গ রথাদি রথারোহী রথী রথচক্র রথচালক রথীমহারথী রুথেনিয়াম রথো রথ্যা রথযাত্রা রথটানা রথতলা রথদেখা রথপাড়া রথভ্রমণ রদ রদকরণ রদি রুদিত রুদিতা রদী রঁদেভু রদ্দা রদ্দি রদ্দিজবাব রদ্দিমাল রুদ্ধ রুদ্ধকক্ষ রুদ্ধগতি রুদ্ধতা রুদ্ধতাপ রুদ্ধদ্বার রুদ্ধশ্বাস রুদ্ধস্বর রদন রদনী রদবদল রুদ্র রুদ্রাক্ষ রুদ্রাক্ষমালা রুদ্রাণী রুদ্রজ রুদ্রজটা রুদ্রঝড় রুদ্রতাল রুদ্রবীণা রুদ্রমূর্তি রুদ্ররূপ রুধ রুধুক রুধা রুধি রুধিত রুধিতাম রুধিতিস রুধিতে রুধিতেছ রুধিতেছি রুধিতেছিল রুধিতেছিলাম রুধিতেছিলি রুধিতেছিলে রুধিতেছিলেন রুধিতেছিস রুধিতেছে রুধিতেছেন রুধিতেন রুধিব রুধিবার রুধিবি রুধিবে রুধিবেন রুধির রুধিরাক্ত রুধিররঞ্জিত রুধিল রুধিলাম রুধিলি রুধিলে রুধিলেন রুধিস রুধিয়া রুধিয়াছ রুধিয়াছি রুধিয়াছিল রুধিয়াছিলাম রুধিয়াছিলি রুধিয়াছিলে রুধিয়াছিলেন রুধিয়াছিস রুধিয়াছে রুধিয়াছেন রুধিয়ো রুধেছ রুধেছি রুধেছিল রুধেছিলাম রুধেছিলি রুধেছিলে রুধেছিলেন রুধেছিলেম রুধেছিলুম রুধেছিস রুধেছে রুধেছেন রুধেন রুধো রুধছ রুধছি রুধছিল রুধছিলাম রুধছিলি রুধছিলে রুধছিলেন রুধছিলেম রুধছিলুম রুধছিস রুধছে রুধছেন রুধত রুধতাম রুধতিস রুধতে রুধতেন রুধতেম রুধতুম রুধুন রুধব রুধবি রুধবে রুধবেন রুধবো রুধল রুধলাম রুধলি রুধলে রুধলেন রুধলেম রুধলুম রনিয়া রুনুঝুনু রন্টজেন রন্ধিত রন্ধন রন্ধনকারী রন্ধনগৃহ রন্ধনী রন্ধনচুল্লি রন্ধনপাত্র রন্ধনপ্রণালী রন্ধনশালা রন্ধনশিল্প রন্ধ্র রন্ধ্রগত রনপা রুনুরটুনুর রনরন রুনুরুনু রনরনি রূপ রূপওয়ালি রূপক রূপকার রূপকারী রূপকার্থে রূপকথা রূপকথামালা রূপকরূপ রূপকল্প রূপকল্পনা রূপগঞ্জ রূপগত রূপগ্রহ রূপঙ্কর রুপা রূপা রূপান্তর রূপান্তরকরণ রূপান্তরিত রূপান্তরযোগ্য রূপান্তরশব্দ রূপাভাব রূপামূল রূপালঙ্কার রুপালি রূপালি রুপালী রূপালী রূপাশ্রিত রূপায়িত রুপি রূপি রূপিণী রূপিত রুপিয়া রূপিয়া রুপী রূপী রূপচাঁদ রূপচাঁদা রূপচান্দা রূপচিন্তন রূপচর্চা রূপেরঘটা রূপেরমোহ রুপেয়া রূপেয়া রুপো রূপো রূপোন্মাদ রূপোন্মত্ত রূপোপজীবিনী রুপোলী রূপোলী রুপোয়া রূপজ রূপজীবা রূপজীবী রূপজনিত রপট রূপ্য রূপযুক্ত রূপটান রূপণ রপ্ত রপ্তানি রপ্তানিকারক রপ্তানিকৃত রূপতত্ত্ব রূপতত্ত্বগত রূপতত্ত্ববিদ রূপদক্ষ রূপদাতা রূপদান রূপদর্শন রূপদস্তা রূপধারী রূপধারণ রূপনগর রূপপ্রাপ্ত রূপপরিচয় রূপবাদ রূপবান রূপবিকল্পন রূপবিহ্বলতা রূপবৈচিত্র রূপবতী রূপবত্তা রূপবন্ত রূপবর্ণহীন রূপভেদ রূপভেদগত রূপমুগ্ধ রূপমা রূপমাধুরী রূপমোহ রূপমঞ্জরি রূপমন্তব্য রূপমূল রূপমহল রূপরাশি রূপরে রূপরেখা রূপলাভ রূপশালী রূপশিক্ষা রূপস রূপসা রূপসী রূপসৌন্দর্য্য রূপসজ্জা রূপসমন্বিত রূপসম্পাদনা রূপহীন রূপহীনতা রফা রফাদফা রফানামা রফানিষ্পত্তি রফিক রফিকউদ্দিন রফত রফতানি রফতানিকৃত রফলা রব রবকারী রুবাই রুবাইয়াৎ রুবাঈ রুবাঈয়াত রবাব রবার রবারক্লথ রবারগাছ রবার্ট রবাহূত রবি রবিউল রবিউস রুবিওলা রবিকর রবিখন্দ রবিচ্ছবি রবিচন্দ্রাদি রবিঠাকুর রুবিডিয়াম রবিতনয় রবিতনয়া রবিনন্দিনী রবিনন্দন রবিনহুড রবিবার রবিবাসর রবিবাসরীয় রবিবর্ষ রবিমার্গ রবিমণ্ডল রবিরশ্মি রবিশস্য রবিসূত রবিসুতা রবীন্দ্র রবীন্দ্রচর্চা রবীন্দ্রোত্তর রবীন্দ্রজয়ন্তী রবীন্দ্রনাথ রবীন্দ্রপক্ষ রবীন্দ্রপন্থা রবীন্দ্রপন্থী রবীন্দ্ররচনাবলী রবীন্দ্রসংগীত রবীন্দ্রসঙ্গীত রবীন্দ্রসাহিত্য রবে রবেন রবো রবোটিক রবোটিক্স রবদব রব্ধ রব্বী রবরবা রভস রম রুম রমক রুমকি রমা রমাকান্ত রমাযান রমাদান রুমানা রমানাথ রুমানিয়া রুমানীয় রমাপতি রমারম রুমাল রূমাল রমিত রমিতা রমেশ রমেশচন্দ্র রমজান রুমঝুম রম্য রম্যক রম্যা রমযান রম্যতা রম্যবোধ রম্যভূমি রম্যরচনা রম্যরচয়িতা রমণ রমণাভিলাষী রমণী রমণীরত্ন রমণীয় রমণীয়া রমণীয়তা রমনা রমনাপার্ক রম্বস রম্ভা রম্ভোরু রুমমেট রমরমা রর রুরু রুরাল রুল রলা রুলার রুলি রুলিং রুলী রুলজারি রুলস রুশ রুশগল্পকার রশা রশারশি রশি রশিদ রুশো রশদ রশুন রশনা রুশনী রশ্মি রশ্মিজাল রশ্মিযুক্ত রশ্মিপাত রশ্মিরাগ রুষ রুষা রুষিত রুষিতা রুষিনি রুষিয়া রুষ্ট রুষ্টা রস রসুই রসুইঘর রসুইয়া রসউপভোগ রসকদম রসকদম্ব রসকরা রসকর্পূর রসকলি রসকষ রসকষহীন রসগোল্লা রসগ্রাহী রসগর্ভ রসগ্রহণ রসঘন রসঘ্ন রসা রসাই রসাইও রসাইত রসাইতাম রসাইতিস রসাইতে রসাইতেছ রসাইতেছি রসাইতেছিল রসাইতেছিলাম রসাইতেছিলি রসাইতেছিলে রসাইতেছিলেন রসাইতেছিস রসাইতেছে রসাইতেছেন রসাইতেন রসাইব রসাইবার রসাইবি রসাইবে রসাইবেন রসাইল রসাইলাম রসাইলি রসাইলে রসাইলেন রসাইয়া রসাইয়াছ রসাইয়াছি রসাইয়াছিল রসাইয়াছিলাম রসাইয়াছিলি রসাইয়াছিলে রসাইয়াছিলেন রসাইয়াছিস রসাইয়াছে রসাইয়াছেন রসাইয়ো রসাক রসাচ্ছ রসাচ্ছি রসাচ্ছিল রসাচ্ছিলাম রসাচ্ছিলি রসাচ্ছিলে রসাচ্ছিলেন রসাচ্ছিলেম রসাচ্ছিলুম রসাচ্ছিস রসাচ্ছে রসাচ্ছেন রসাঞ্জন রসাঞ্জনচূর্ণ রসাত রসাতাম রসাতিস রসাতে রসাতেন রসাতেম রসাতুম রসাত্মক রসাতল রসাতলে রসাধিক্য রসান রসানি রসানো রসানুভূতি রসাব রসাবার রসাবি রসাবে রসাবেন রসাবেশ রসাবো রসাভাষ রসাভাস রসাল রসালাপ রসালাম রসালি রসালে রসালেন রসালেম রসালো রসালুম রসালমূল রসাস রসাস্বাদ রসাস্বাদন রসায়িত রসায়ন রসায়নঘটিত রসায়নি রসায়নী রসায়নচিকিৎসা রসায়নজ্ঞ রসায়নবিজ্ঞান রসায়নবিদ রসায়নবিদ্যা রসায়নমৃত্তিকা রসায়নশাস্ত্র রসায়নশাস্ত্রবিদ রসি রসিউ রসিক রসিকা রসিকজন রসিকতা রসিকতাপূর্ণ রসিকশ্রেষ্ঠ রসিত রসিতাম রসিতিস রসিতে রসিতেছ রসিতেছি রসিতেছিল রসিতেছিলাম রসিতেছিলি রসিতেছিলে রসিতেছিলেন রসিতেছিস রসিতেছে রসিতেছেন রসিতেন রসিদ রসিব রসিবার রসিবি রসিবে রসিবেন রসিল রসিলাম রসিলি রসিলে রসিলেন রসিস রসিয়া রসিয়াছ রসিয়াছি রসিয়াছিল রসিয়াছিলাম রসিয়াছিলি রসিয়াছিলে রসিয়াছিলেন রসিয়াছিস রসিয়াছে রসিয়াছেন রসিয়ে রসিয়েছ রসিয়েছি রসিয়েছিল রসিয়েছিলাম রসিয়েছিলি রসিয়েছিলে রসিয়েছিলেন রসিয়েছিলেম রসিয়েছিলুম রসিয়েছিস রসিয়েছে রসিয়েছেন রসিয়ো রসীদ রসচূড়ামণি রসেগন্ধে রসেছ রসেছি রসেছিল রসেছিলাম রসেছিলি রসেছিলে রসেছিলেন রসেছিলেম রসেছিলুম রসেছিস রসেছে রসেছেন রসেন রসেন্দ্র রসেবশে রসেবসে রসো রসোত্তীর্ণ রসোত্তম রসোদগার রসোন রসছ রসছি রসছিল রসছিলাম রসছিলি রসছিলে রসছিলেন রসছিলেম রসছিলুম রসছিস রসছে রসছেন রসজ্ঞ রসজ্ঞা রসজ্ঞান রসজ্ঞানহীন রসজ্ঞানহীনা রসজ্ঞী রসজ্ঞতা রসজন রসঝরানো রসযুক্ত রসত রসতাম রসতিস রসতে রসতেন রসতেম রসতুম রসতড়কা রসদ রসদদার রসদড়কা রসধাতু রসন রসুন রসূন রসনা রসনিঃসারক রসনেন্দ্রিয় রসুনজাত রসপ্রিয় রসপূর্ণ রসপূর্ণতা রসবাত রসবার রসবি রসবে রসবেত্তা রসবেন রসবো রসবোধ রসবোধযুক্ত রসবতী রসবৃদ্ধি রসবন্ত রসবর্জিত রসবড়া রসবড়ি রসভঙ্গ রসভাবযুক্ত রসভার রসভোক্তা রসম রসুম রুসুম রসুমাত রুসুমাত রসমালাই রসমুণ্ডী রসময় রসময়ী রসরঙ্গ রসরাজ রসরচনা রসল রসুল রসূল রুসুল রসলাম রসলি রসলে রসলেন রসলেম রসুলপুর রসলুম রসুলুল্লাহ রসশালা রসসাহিত্য রসসিক্ত রসসিন্দুর রসসঞ্চার রসস্থ রসসম্ভোগ রসসৃষ্টি রসহীন রহ রুহ রুহু রূহ রহঃ রহুক রহা রহান রুহানি রূহানী রহানো রহি রহিত রহিতাম রহিতিস রহিতে রহিতেছ রহিতেছি রহিতেছিস রহিতেছে রহিতেছেন রহিতেন রুহিতন রুহিদাস রহিব রহিবার রহিবি রহিবে রহিবেন রহিম রহিমগঞ্জ রহিল রহিলাম রহিলি রহিলে রহিলেন রহিস রহিয়া রহিয়াছ রহিয়াছি রহিয়াছিস রহিয়াছে রহিয়াছেন রহিয়ো রহীম রহে রহেন রহত রহুন রহনি রহনী রহম রহমান রহমত রহমতগঞ্জ রুহুল রহস রহসি রহসে রহস্য রহস্যকাহিনী রহস্যঘন রহস্যাদি রহস্যাবৃত রহস্যামৃত রহস্যালাপ রহস্যচ্ছলে রহস্যোপন্যাস রহস্যজ্ঞানী রহস্যজনক রহস্যপত্রিকা রহস্যপ্রিয় রহস্যপুরী রহস্যপূর্ণ রহস্যভেদ রহস্যময় রহস্যময়ভাবে রহস্যসন্ধানী রহসরোমাঞ্চ রড় রড়ারড়ি রূঢ়ভাবে রূঢ়ভাষিণী রূঢ়ভাষী রয় রুয়া রয়ানি রয়ানী রুয়ান্ডা রয়াব রয়াল রয়িষ্ঠ রয়ে রয়েছ রুয়েছ রয়েছি রয়েছিস রয়েছে রয়েছেন রুয়েট রয়েবসে রয়েল রয়েলটাইগার রয়েলসোসাইটি রয়েসয়ে রুয়ো রয়ছে রয়টার রয়টার্স রয়্যাল রয়না".split(" "),
              w_rr: ["ড়"],
              w_rrh: ["ঢ়"],
              w_s: "স সু সূ সং সুং সংকাশ সংকুচিত সংকীর্ণ সংকীর্ণাত্মা সংকীর্ণাবস্থা সংকীর্ণচেতা সংকীর্ণতা সংকীর্ণতামুক্ত সংকীর্ণতাশূন্য সংকীর্ণতর সংকীর্ণমনা সংকীর্তিত সংকীর্তন সংকেত সংকেতায়িত সংকেতায়ন সংকেতোদ্ধার সংকেতযন্ত্র সংকেততত্ত্ব সংকেতধ্বনি সংকেতবাদ সংকেতবিজ্ঞান সংকেতবিজ্ঞানী সংকেতব্যবস্থা সংকেতবদ্ধ সংকেতভাষা সংকেতময় সংকেতশব্দ সংকেতস্থান সংকোচ সংকোচক সংকোচিত সংকোচন সংকোচনকারী সংকোচনীয় সংকোচনীয়তা সংকোচনজনিত সংকোচনশীল সংকোচমুক্ত সংকোচশূন্য সংকোচহীন সংকট সংকটকাল সংকটাপন্ন সংকটাবস্থা সংকটজনক সংকটপূর্ণ সংকটমোচক সংকটমোচন সংকটময় সংকটসংকুল সংকটস্থল সংকর সংকরঘনত্ব সংক্রান্ত সংক্রান্তি সংক্রান্তিতিথি সংক্রাম সংক্রামক সংক্রামকতা সংক্রামকবিষ সংক্রামিত সংক্রামী সংক্রামণ সংকরায়ন সংকরীকরণ সংকরজীব সংক্রুদ্ধ সংকরধাতু সংক্রম সংক্রমিত সংক্রমণ সংক্রমণপূর্বক সংক্রমণরত সংকর্ষণ সংকুল সংকলক সংকুলান সংকলিত সংকলন সংকলনকারী সংকলনগ্রন্থ সংকল্প সংকল্পারূঢ় সংকল্পিত সংকল্পচ্যুত সংকল্পযুক্ত সংকল্পবিকল্প সংকল্পবদ্ধ সংকল্পসাধন সংকল্পসিদ্ধ সংকলয়িতা সংকলয়িত্রী সংক্ষিপ্ত সংক্ষিপ্ততা সংক্ষিপ্তনাম সংক্ষিপ্তভাবে সংক্ষিপ্তসার সংক্ষেপ সংক্ষেপকরণ সংক্ষেপিত সংক্ষেপণ সংক্ষেপত সংক্ষোভ সংক্ষুব্ধ সংখ্যক সংখ্যা সংখ্যাক্রম সংখ্যাগোষ্ঠী সংখ্যাগত সংখ্যাগতভাবে সংখ্যাগুরু সংখ্যাগরিষ্ঠ সংখ্যাগরিষ্ঠতা সংখ্যাত সংখ্যাতাত্ত্বিক সংখ্যাতিরিক্ত সংখ্যাতীত সংখ্যাতত্ত্ব সংখ্যাতত্ত্ববিদ সংখ্যাতল সংখ্যাদি সংখ্যাদুটি সংখ্যাধিক্য সংখ্যান সংখ্যানুক্রমিক সংখ্যানুসারে সংখ্যাপিত সংখ্যাপন সংখ্যাপরিমাণ সংখ্যাপূর্ণ সংখ্যাবাচক সংখ্যাব্যবস্থা সংখ্যাবৃদ্ধি সংখ্যাভিত্তিক সংখ্যাভূয়িষ্ঠ সংখ্যামাত্র সংখ্যারেখা সংখ্যালঘু সংখ্যালঘিষ্ঠ সংখ্যালঘিষ্ঠতা সংখ্যাল্প সংখ্যাহীন সংখ্যেয় সংগ সংগিন সংগীত সংগীতকার সংগীতকারী সংগীতকোষ সংগীতা সংগীতাদি সংগীতালেখ্য সংগীতচর্চা সংগীতজ্ঞ সংগীতধর্মী সংগীতনিপুণা সংগীতনৃত্য সংগীতবিজ্ঞান সংগীতবিদ্যা সংগীতময় সংগীতশাস্ত্র সংগীতশিল্পী সংগীতস্রষ্টা সংগোপিত সংগোপন সংগঠক সংগঠিত সংগঠন সংগঠনকারী সংগঠনবাদ সংগঠনবাদী সংগত সংগতি সংগতিযুক্ত সংগতিপন্ন সংগতিপূর্ণ সংগতিবাচক সংগতিশালী সংগতিশূন্য সংগতিসম্পন্ন সংগতিহীন সংগতিহীনতা সংগততর সংগদিল সংগুপ্ত সংগম সংগমকারী সংগমকালীন সংগমস্থল সংগ্রাম সংগ্রামী সংগ্রামশক্তি সংগ্রামশীল সংগ্রাহক সংগ্রাহিকা সংগ্রহ সংগ্রহকারী সংগ্রহকৃত সংগ্রহকরণ সংগ্রহিত্রী সংগ্রহীত সংগ্রহীতা সংগ্রহযোগ্য সংগ্রহণ সংগ্রহণী সংগ্রহপূর্বক সংগ্রহরূপ সংগ্রহশালা সংগসার সংগৃহীত সংঘ সংঘাত সংঘাতজনিত সংঘাতময় সংঘারাম সংঘচারী সংঘজীবী সংঘটক সংঘটিত সংঘট্ট সংঘটন সংঘটনকারিণী সংঘটনকারী সংঘটনকর্তা সংঘটনযোগ্য সংঘবদ্ধ সংঘবদ্ধকরণ সংঘবদ্ধভাবে সংঘমধ্যে সংঘর্ষ সংঘর্ষকারী সংঘর্ষকাল সংঘর্ষজনিত সংঘর্ষণ সংঘর্ষহীন সংঘষ্ট সংঘৃষ্ট সংচিত্রিত সংচূর্ণিত সংজ্ঞা সংজ্ঞাজাত সংজ্ঞান সংজ্ঞানাশক সংজ্ঞানির্দেশক সংজ্ঞানুযায়ী সংজ্ঞানুসারে সংজ্ঞাপন সংজ্ঞাপ্রাপ্ত সংজ্ঞাবিঘাতক সংজ্ঞাবিঘাতিনী সংজ্ঞাবিঘাতী সংজ্ঞামতে সংজ্ঞার্থ সংজ্ঞালোপ সংজ্ঞাহারা সংজ্ঞাহীন সংজ্ঞায়িত সংজ্ঞিত সংযুক্ত সংযুক্তকারী সংযুক্তা সংযুক্তাক্ষর সংযুক্তি সংযুক্তিকরণ সংযুক্তধ্বনি সংযুক্তবর্ণ সংযুক্তভাবে সংযাত সংযাত্রা সংযাত্রিক সংযাত্রী সংযান সংযোগ সংযোগকারী সংযোগাত্নক সংযোগিত সংযোগী সংযোগজনিত সংযোগযোগ্য সংযোগযন্ত্র সংযোগধর্মী সংযোগনিয়ম সংযোগবাচক সংযোগবাহী সংযোগভ্রষ্ট সংযোগরক্ষাকারী সংযোগরহিত সংযোগসাধন সংযোগস্থান সংযোগস্থাপক সংযোগস্থাপন সংযোগস্থল সংযোগসহ সংযোগহীন সংযোগহীনতা সংযোজক সংযোজকহীন সংযোজকহীনতা সংযোজিকা সংযোজিত সংযোজিতা সংযোজনা সংযোজনীয় সংযোজনযোগ্য সংযোজনযোগ্যতা সংযোজনশীল সংযোজনশীলতা সংযোজনসাধ্য সংযত সংযতাচারী সংযতাত্মা সংযতচিত্ত সংযতেন্দ্রিয় সংযতপরিমাণ সংযতবাক সংযম সংযমিত সংযমিনী সংযমী সংযমন সংযমপরায়ণ সংযমপূর্ণ সংযমহীন সংনমিত সংনমন সংপৃক্ত সংপুট সংবাদ সংবাদকর্মী সংবাদিকা সংবাদিনী সংবাদী সংবাদজ্ঞাপক সংবাদদাতা সংবাদদান সংবাদপত্র সংবাদপত্রাদি সংবাদপ্রাপ্তি সংবাদপ্রচার সংবাদপ্রেরণ সংবাদবাহক সংবাদবাহিকা সংবাদবাহী সংবাদবহ সংবাদবহনকারী সংবাদমাধ্যম সংবাদসংস্থা সংবাহ সংবাহক সংবাহিকা সংবাহিত সংবাহী সংবাহন সংবিগ্ন সংবিৎ সংবিত্তি সংবিৎশক্তি সংবিদ সংবিদা সংবিদিত সংবিধা সংবিধাতা সংবিধান সংবিধানবিরোধী সংবিধানবহির্ভূত সংবিধানসংযুক্ত সংবিধি সংবিধিবদ্ধ সংবিভক্ত সংবিভাগ সংবিশেষ সংবিষ্ট সংবীক্ষণ সংবেগ সংবেদ সংবেদিত সংবেদী সংবেদ্য সংবেদন সংবেদনা সংবেদনাশীল সংবেদনশীল সংবেদনশীলতা সংবেদশীল সংবেশ সংবেশক সংবেশিত সংবেশন সংবৎ সংবৃত সংবৃতি সংবৃত্ত সংবৃত্তি সংবৎসর সংবৎসরকাল সংবর সংবরা সংবরণ সংবরণকারী সংবর্ত সংবর্তক সংবর্তি সংবর্তিকা সংবর্তন সংবর্ধক সংবর্ধিত সংবর্ধন সংবর্ধনকারী সংবর্ধনা সংবর্ধনাকারী সংবলিত সংবহ সংবহন সংবহনতন্ত্র সংমিলিত সংমিশ্রণ সংমিশ্রণজাত সংমূঢ় সংরক্ষক সংরক্ষা সংরক্ষিত সংরক্ষিতা সংরক্ষী সংরক্ষণ সংরক্ষণকারী সংরক্ষণাগার সংরক্ষণীয় সংরক্ষণনীতি সংরক্ষণশালা সংরক্ষণশীল সংরক্ষণহীন সংরোধ সংরোধক সংরোধকারী সংরুদ্ধ সংরব্ধ সংলক্ষিত সংলগ্ন সংলগ্নীকরণ সংলগ্নতা সংলাপ সংলিপ্ত সংলিপ্ততা সংলেপ সংশিত সংশিতব্রত সংশোধ সংশোধক সংশোধিত সংশোধন সংশোধনকারী সংশোধনী সংশোধনীয় সংশুদ্ধি সংশপ্তক সংশ্রিত সংশ্রুত সংশ্রব সংশ্রয় সংশ্রয়ী সংশ্লিষ্ট সংশ্লিষ্টতা সংশ্লেষ সংশ্লেষিত সংশ্লেষণ সংশ্লেষণকারী সংশয় সংশয়কারী সংশয়কর সংশয়াকুল সংশয়াতীত সংশয়াত্মক সংশয়ান সংশয়ান্বিত সংশয়াপনোদন সংশয়াপন্ন সংশয়িত সংশয়িতা সংশয়ী সংশয়জনিত সংশয়যুক্ত সংশয়পূর্ণ সংশয়বাদ সংশয়বাদী সংশয়মোচন সংশয়হীন সংস্কার সংস্কারক সংস্কারকাজ সংস্কারকামী সংস্কারপন্থী সংস্কারবিমুখ সংস্কারবিমুখতা সংস্কারবশত সংস্কারমুক্ত সংস্কারসাধন সংসক্ত সংস্কৃত সংসক্তি সংস্কৃতি সংস্কৃতিগতভাবে সংস্কৃতিচর্চা সংস্কৃতিপ্রিয় সংস্কৃতিবান সংস্কৃতিমান সংস্কৃতিসম্পন্ন সংস্কৃতজ্ঞ সংসক্ততা সংস্কৃতবহুল সংস্কৃতভাষা সংস্কৃতমত সংস্কৃতরূপ সংস্কৃতসংস্কৃত সংস্ক্রিয়া সংস্করণ সংস্কর্তা সংসাজা সংসার সংসারকামনা সংসারক্ষেত্র সংসারাশ্রম সংসারাসক্ত সংসারিয়ানা সংসারী সংসারচলা সংসারজীবন সংসারযাত্রা সংসারত্যাগ সংসারত্যাগী সংসারত্যাগপূর্বক সংসারদুঃখ সংসারধর্ম সংসারনির্বাহ সংসারপাতা সংসারবাসনা সংসারবিমুখ সংসারবিরাগী সংসারবৈরাগ্য সংসারবন্ধন সংসাররূপ সংসারলীলা সংসারসমুদ্র সংসারস্রোত সংসিক্ত সংসিদ্ধ সংসিদ্ধি সংসূচিত সংসূচন সংসৎ সংসৃত সংসৃতি সংস্থা সংস্থাগার সংস্থান সংস্থানকারী সংস্থাপক সংস্থাপিকা সংস্থাপিত সংস্থাপন সংস্থাপনকারী সংস্থাপয়িতা সংস্থাপয়িত্রী সংস্থিত সংস্থিতি সংসদ সংসদীয় সংসদীয়মন্ত্রী সংসদসদস্য সংস্পর্শ সংস্পর্শগত সংস্পর্শযুক্ত সংস্পর্শদোষ সংস্পৃষ্ট সংস্ফুট সংস্মরণ সংসর্গ সংসর্গাভাব সংসর্গী সংসর্গজাত সংসর্গদোষ সংসর্গহীন সংসর্প সংসর্পিত সংসর্পী সংসর্পণ সংস্রব সংস্রবচ্যুত সংস্রবযুক্ত সংসৃষ্ট সংসৃষ্টি সংহার সংহারক সংহারকারী সংহারকর্তা সংহারা সংহারমূর্তি সংহিত সংহিতা সংহত সংহৃত সংহতি সংহূতি সংহৃতি সংহতিবাদ সংহতভাবে সংহরণ সংহরণকারী সংহর্তা সংহর্ত্রী সংহর্ষ সঃ সঅ সঅল সই সুই সুঁই সুইচ সুইচিং সুইচোর সুঁইচোর সুইচড সইছ সইছি সইছিস সইছে সইছেন সুইজারল্যান্ড সুইজারল্যান্ডীয় সুইট সইযুক্ত সুইডিশ সুইডীয় সুইডেন সইত সইতাম সইতিস সইতে সইতেছিল সইতেছিলাম সইতেছিলি সইতেছিলে সইতেছিলেন সইতেছিলেম সইতেছিলুম সইতেন সইতেম সইতুম সুইপার সুইফট সুইফটস সইব সইবার সইবি সইবে সইবেন সইবো সুইমিং সুইমিংপুল সইরা সইল সইলান সইলাম সইলি সইলে সইলেন সইলুম সইস সুইস সুইসগার্ড সুইসাইড সইসনওকর সইয়ে সইয়েছ সইয়েছি সইয়েছিল সইয়েছিলাম সইয়েছিলি সইয়েছিলে সইয়েছিলেন সইয়েছিলেম সইয়েছিলুম সইয়েছিস সইয়েছে সইয়েছেন সইয়ো সুউচ্চ সওকীন সওগাত সওগাতি সওগাদ সওদা সওদাগর সওদাগরি সওদাগরী সওদাপাট সওদাপত্র সওয়া সওয়াইয়া সওয়াক সওয়াচ্ছ সওয়াচ্ছি সওয়াচ্ছিল সওয়াচ্ছিলাম সওয়াচ্ছিলি সওয়াচ্ছিলে সওয়াচ্ছিলেন সওয়াচ্ছিলেম সওয়াচ্ছিলুম সওয়াচ্ছিস সওয়াচ্ছে সওয়াচ্ছেন সওয়াত সওয়াতাম সওয়াতিস সওয়াতে সওয়াতেন সওয়াতেম সওয়াতুম সওয়ান সওয়ানো সওয়াব সওয়াবার সওয়াবি সওয়াবে সওয়াবেন সওয়াবো সওয়ার সওয়ারি সওয়ারী সওয়াল সুওয়াল সওয়ালাম সওয়ালি সওয়ালে সওয়ালেন সওয়ালেম সওয়ালজবাব সওয়ালুম সওয়াস সক স্কুইড সৃক্ক সক্কা সক্কাল সক্কালবেলা সৃক্কণ সৃক্কণী সক্কর স্কাই স্কাইওয়ে স্কাইচার্ট স্কাউট স্কাউটিং স্কাউটস সকাণ্ড সকাতর সুকান সুকানি সুকান্ত সুকান্তা সকাম সকারাত সকারী সকারণ স্কার্ফ স্কার্ভি স্কারলেট সকাল সকালবিকাল সকালবেলা সকাশ স্কি স্কিনার স্কিম স্কচ সুকীর্তি স্কেচ সকেট স্কেট স্কেটিং সুকেন্দ্রিক স্কেল সুকেশ সুকেশা সুকেশিনী সুকেশী স্কোপ সুকোমল স্কোর স্কোরার স্কোয়াড স্কোয়াড্রন স্কোয়াড্রনে স্কোয়াশ সকৌতুক সুকৌশল সুকুঞ্চিত স্কট স্ক্যান স্ক্যানার স্ক্যানিং স্ক্যান্ডিনেভিয়া স্ক্যান্ডিনেভীয় স্ক্যান্ডিয়াম স্ক্যাপা স্কুটার স্কুটি স্কটিশ স্কটল্যান্ড স্কটল্যান্ডীয় সুকঠিন সকণ্টক সুকণ্ঠ সকুণ্ডল সকৃৎ সক্ত সক্তু সুকৃত সুকৃৎ সুক্ত সূক্ত সুক্তা সুক্তানি সক্তি সুকৃতি সুক্তি সূক্তি সুকৃতিকা সুক্তো সুক্তনি সুক্তুনি সকৃৎফলা সুকতলা সুকনি সুকন্যা স্কন্দ স্কন্দমাতা স্কন্ধ স্কন্ধকাটা স্কন্ধাবার স্কন্ধী স্কন্ধযুক্ত স্কন্ধদেশ স্কুপ সুকবি সুকুমার সুকুমারী সুকুমারশিল্প সুকর স্ক্রু সকরকন্দ স্ক্রিন স্ক্রিনশট স্ক্রিপ্ট স্ক্রিপটিং স্ক্রিপ্টিং স্ক্রিপ্টভিত্তিক সক্রিয় সক্রিয়করণ সুক্রিয়া সক্রিয়তা সক্রিয়ভাবে সুক্রোজ সক্রোধ স্ক্রোল স্ক্র্যাপ সকরুণ সুকরতা সকর্দম সক্রন্দন সুকর্ম সকর্মক সকর্মকক্রিয়া সকর্মকতা স্ক্রল সকল সকুল স্কুল স্কুলকলেজ স্কুলগামী স্কলার স্কলারশিপ স্কলারস সকলি স্ক্লেরোসিস স্কুলছাত্র স্কুলজীবন সকলজন্ম সকুল্য সকলদিক সুকল্পিত স্কুলবয় স্কুলবয়েজ স্কুলভবন স্কুলমাস্টার স্কুলশিক্ষা সুকুশল সক্ষোভ সক্ষত সক্ষম সূক্ষ্ম সূক্ষ্মকোণ সূক্ষ্মকোণী সূক্ষ্মকণ্ঠ সূক্ষ্মাগ্র সূক্ষ্মাতিসূক্ষ্ম সক্ষমতা সূক্ষ্মতা সূক্ষ্মতন্তু সূক্ষ্মতম সূক্ষ্মতর সূক্ষ্মদেহ সূক্ষ্মদেহী সূক্ষ্মদর্শিতা সূক্ষ্মদর্শিনী সুক্ষ্মদর্শী সূক্ষ্মদর্শন সূক্ষ্মদৃষ্টি সূক্ষ্মনালিকা সূক্ষ্মবিচার সূক্ষ্মবুদ্ধি সূক্ষ্মভাব সূক্ষ্মভাবে সূক্ষ্মরূপ সূক্ষ্মশরীর সকসক সকড়ি সঁকড়ী স্কয়ার সখ সুখ সুখকর সখা সুখা সখাওত সখাওতি সুখাদ সুখাদ্য সুখান সুখানী সুখান্বেষণ সুখানুভূতি সুখানুভব সখাবর সুখাবহ স্খালন সুখাশা সুখাসীন সুখাসীনা সুখাসন সখি সুখিত সখিতা সখিত্ব সখিনা সুখিনী সখিপুর সখিল সখিলি সখী সুখী সখীতত্ত্ব সখীত্ব সখীতুল্য সখীবর সখীভাব সুখচর সখীসংবাদ সখেদ সুখেদুঃখে সখেদে সুখেরকাঁটা সুখেস্বচ্ছন্দে সুখৈশ্বর্য সুখৈশ্বর্যপূর্ণ সুখোদক সুখোদয় সুখোষ্ণ সুখজনক সখ্য সুখযুক্ত সুখ্যাত সুখ্যাতি সুখ্যাতিপ্রাপ্ত সুখটান সখ্যতা সুখণ্ডিত সুখতলা সুখদ সুখদুঃখ সুখদুঃখবোধহীন সুখদুঃখভয় সুখদা সুখদায়ক সুখনিদ্রা সুখপাঠ্য সুখপ্রাপ্ত সুখপূর্ণ সুখপ্রদ সুখবাদ সুখবিধান সুখবোধ সুখবুভুক্ষ সুখবুভুক্ষু সুখবর সুখভোগ সুখময় সুখরূপ সুখরবি সুখলাভ স্খলিত সুখলতা স্খলন স্খলনযুক্ত স্খলনশীল সুখশান্তি সুখশান্তিপূর্ণ সুখশয্যা সুখশয়ন সুখসংবাদ সুখসৌভাগ্য সুখস্পর্শ সুখসুবিধা সুখস্বপ্ন সুখস্মৃতি সুখসমৃদ্ধি সুখসম্পদ সুখসূর্য সুগায়ক সুগীত সগোত্র সগোত্রা সগোত্রীয় সুগোল সগৌরব সুগঠ সুগঠিত সগঠন সুগঠন সুগঠনা সগুণ সগুণী সুগত সুগতি সগতোক্তি সুগন্ধ সুগন্ধকারক সুগন্ধা সুগন্ধি সুগন্ধিকারক সুগন্ধিত সুগন্ধিপুষ্প সুগন্ধজনক সুগন্ধযুক্ত সুগন্ধদ্রব্য সুগন্ধবাহন সুগন্ধবহ সুগন্ধমোদিত সুগন্ধর সুগুপ্ত সুগভীর সুগম সুগম্য সুগম্ভীর সগর সুগ্রাহী সুগ্রীব সগর্ব সগরবংশ সগর্ভ সগর্ভা সুগৃহীতনামা সগড়ি সুঘটন সঘন সঘর সুঘ্রাণ সঙ সঙ্কাশ সঙ্কুচিত সঙ্কীর্ণ সঙ্কীর্ণতা সঙ্কীর্তন সঙ্কেত সঙ্কোচ সঙ্কোচন সঙ্কোচশূন্য সঙ্কোচহীন সঙ্কট সঙ্কটাপন্ন সঙ্কটাবস্থা সঙ্কটসঙ্কুল সঙ্কটস্থল সঙ্কর সঙ্ক্রান্ত সঙ্ক্রান্তি সঙ্ক্রাম সঙ্ক্রামক সঙ্ক্রামিত সঙ্ক্রামী সঙ্করীকরণ সঙ্করত্ব সঙ্ক্রুদ্ধ সঙ্ক্রম সঙ্ক্রমিত সঙ্ক্রমণ সঙ্কর্ষণ সঙ্কুল সঙ্কলক সঙ্কুলান সঙ্কলিত সঙ্কলন সঙ্কলনকারী সঙ্কলনযোগ্য সঙ্কল্প সঙ্কল্পিত সঙ্কলয়িত্রী সঙ্গ সঙ্গিন সঙ্গিনী সঙ্গিহীন সঙ্গী সঙ্গচ্যুত সঙ্গীত সঙ্গীতকার সঙ্গীতকর্ম সঙ্গীতা সঙ্গীতানুষ্ঠান সঙ্গীতালোচক সঙ্গীতালোচনা সঙ্গীতচর্চা সঙ্গীতচয়ন সঙ্গীতজ্ঞ সঙ্গীতযন্ত্র সঙ্গীতধর্মী সঙ্গীতনির্ভর সঙ্গীতপরিচালক সঙ্গীতপুরস্কার সঙ্গীতবিদ সঙ্গীতরীতি সঙ্গীতরচয়িতা সঙ্গীতশাস্ত্র সঙ্গীতশিক্ষা সঙ্গীতশিল্পী সঙ্গীতস্রষ্টা সঙ্গীহীন সঙ্গে সঙ্গোপিত সঙ্গোপন সঙ্গত সঙ্গতকারী সঙ্গতি সঙ্গতিপন্ন সঙ্গতিপূর্ণ সঙ্গতিবিধি সঙ্গতিশালী সঙ্গতিশূন্য সঙ্গতিসম্পন্ন সঙ্গতিহীন সঙ্গদাতা সঙ্গদিল সঙ্গদোষ সঙ্গপ্রিয় সঙ্গবিমুখ সঙ্গম সঙ্গমস্থল সঙ্গলাভ সঙ্গসার সঙ্গহীন সঙ্ঘ সঙ্ঘারাম সঙ্ঘচারী সঙ্ঘজীবী সঙ্ঘটক সঙ্ঘটিত সঙ্ঘট্ট সঙ্ঘটন সঙ্ঘটনকারী সঙ্ঘবদ্ধ সঙিন সঙরা সুঙরা সঙরি সঙরন সা সাঁ সাং সাংকেতিক সাংকর্য সাংখ্য সাংখ্যিক সাংখ্যদর্শন সাংখ্যমতে সাংগীতিক সাংগঠনিক সাংগঠনিকপদ সাংগ্রামিক সাংঘাতিক সাংযাত্রিক সাংবাদিক সাংবাদিকতা সাংবিধানিক সাংবিধানিকভাবে সাংবিধানিকমন্ত্রী সাংবৎসর সাংবৎসরিক সাংস্কৃতিক সাংসারিক সাংসদ সাংসর্গিক সাংহাই সাই সাঁই সাইকি সাইকেল সাইকেলরিকশা সাইকো সাইকোথেরাপিস্ট সাইকোলজি সাইকোলজিক্যাল সাইকোসিস সাইক্লিং সাইক্লোন সাইক্লোপিডিয়া সাইক্লোপস সাইখ সাইজ সাইট সাইটোকাইনস সাইটোটক্সিক সাইটোপ্লাজম সাইটোপ্লাজমীয় সাইটব্যাপী সাইট্রিক সাইড সাইডার সাইত সাঁইত্রিশ সাইদ সাইদুল সাইন সাইনাস সাইনিং সাইন্টিফিক সাইন্টিস্ট সাইনপোস্ট সাইনবোর্ড সাইন্স সাইপ্রাস সাইপ্রাসীয় সাইবার সাইবেরিয়া সাইবেরীয় সাইমুম সাইরেন সাইল সাইলেন্ট সাইলেন্স সাঁইসাঁই সাইয়িদ সাউ সাউকার সাউকারি সাউখুড়ি সাউথ সাউথইস্ট সাউথগেট সাউদ সাউদার্ন সাউদিয়া সাউধ সাউন্ড সাউন্ডস সাউলি সাএল সাও সাঁও সাওকুড়ি সাওকুড়ী সাঁওতাল সাঁওতালি সাঁওতালী সাঁওতালনি সাঁওতালনী সাঁওতালপল্লি সাঁওতালসুলভ সাওয়াব সাকার সাকারউপাসনা সাকারা সাকারোপাসনা সাকারপূজা সাকারবাদ সাকারবাদী সাকি সাকিদার সাকিন সাকিব সাকিম সাকী সাকীর সাকো সাঁকো সাঁকতি সাকল্য সাকুল্য সাকল্যবাচক সাক্ষাত সাক্ষাৎ সাক্ষাতকার সাক্ষাৎকার সাক্ষাতকারী সাক্ষাৎকারী সাক্ষাৎকারে সাক্ষাৎকর্তা সাক্ষাৎসন্ধান সাক্ষী সাক্ষীগোপাল সাক্ষীসাবুদ সাক্ষ্য সাক্ষ্যদান সাক্ষ্যদানকারী সাক্ষ্যপ্রমাণ সাক্ষর সাক্ষরিত সাক্ষরতা সাকসেস সাকসেসফুল সাখাওত সাখাওতি সাখরচে সাগু সাগুদানা সাগ্নিক সাগর সাগরগামী সাগরাম্বরা সাগরিকা সাগরীয় সাগরেদ সাগরেদি সাগরছেঁচা সাগরতীর সাগরতরঙ্গ সাগরতল সাগরদাঁড়ি সাগরদেবতা সাগরনেমি সাগরপারী সাগরপরী সাগরমাতা সাগরমেখলা সাগরসংগম সাগরসঙ্গম সাগ্রহ সাঙ্কেতিক সাঙ্কর্য সাঙ্খ্য সাঙ্খ্যিক সাঙ্গ সাঙ্গু সাঙ্গুগ্যাসক্ষেত্র সাঙ্গা সাঙ্গাত সাঁঙ্গাৎ সাঙ্গাতি সাঙ্গাতনি সাঙ্গারিয়া সাঙ্গি সাঙ্গোপাঙ্গ সাঙ্গতা সাঙ্গপাঙ্গ সাঙ্গরূপক সাঙ্ঘাতিক সাঙা সাঙাত সাঙাতি সাঙাতনি সাঙল সাঙলা সাঁচ সাচা সাচান সাচি সাঁচি সাচীকৃত সাচ্চা সাঁচ্চা সাচন সাছ সাজ সাজু সাঁজ সাজুক সাজগোছ সাজগোজ সাজঘর সাজা সাঁজা সাজাই সাজাইও সাজাইত সাজাইতাম সাজাইতিস সাজাইতে সাজাইতেছ সাজাইতেছি সাজাইতেছিল সাজাইতেছিলাম সাজাইতেছিলি সাজাইতেছিলে সাজাইতেছিলেন সাজাইতেছিস সাজাইতেছে সাজাইতেছেন সাজাইতেন সাজাইব সাজাইবার সাজাইবি সাজাইবে সাজাইবেন সাজাইল সাজাইলাম সাজাইলি সাজাইলে সাজাইলেন সাজাইয়া সাজাইয়াছ সাজাইয়াছি সাজাইয়াছিল সাজাইয়াছিলাম সাজাইয়াছিলি সাজাইয়াছিলে সাজাইয়াছিলেন সাজাইয়াছিস সাজাইয়াছে সাজাইয়াছেন সাজাইয়ো সাজাক সাজাচ্ছ সাজাচ্ছি সাজাচ্ছিল সাজাচ্ছিলাম সাজাচ্ছিলি সাজাচ্ছিলে সাজাচ্ছিলেন সাজাচ্ছিলেম সাজাচ্ছিলুম সাজাচ্ছিস সাজাচ্ছে সাজাচ্ছেন সাজাত সাজাতাম সাজাতিস সাজাতে সাজাতেন সাজাতেম সাজাত্য সাজাতুম সাজান সাজানো সাজাপ্রাপ্ত সাজাব সাজাবার সাজাবি সাজাবে সাজাবেন সাজাবো সাজাল সাঁজাল সাজালাম সাজালি সাজালে সাজালেন সাজালেম সাজালুম সাজাস সাজি সাজিত সাজিতাম সাজিতিস সাজিতে সাজিতেছ সাজিতেছি সাজিতেছিল সাজিতেছিলাম সাজিতেছিলি সাজিতেছিলে সাজিতেছিলেন সাজিতেছিস সাজিতেছে সাজিতেছেন সাজিতেন সাজিব সাজিবার সাজিবি সাজিবে সাজিবেন সাজিমাটি সাজিল সাজিলাম সাজিলি সাজিলে সাজিলেন সাজিস সাজিয়া সাজিয়াছ সাজিয়াছি সাজিয়াছিল সাজিয়াছিলাম সাজিয়াছিলি সাজিয়াছিলে সাজিয়াছিলেন সাজিয়াছিস সাজিয়াছে সাজিয়াছেন সাজিয়ে সাজিয়েছ সাজিয়েছি সাজিয়েছিল সাজিয়েছিলাম সাজিয়েছিলি সাজিয়েছিলে সাজিয়েছিলেন সাজিয়েছিলেম সাজিয়েছিলুম সাজিয়েছিস সাজিয়েছে সাজিয়েছেন সাজিয়ো সাজেন সাজেরঘটা সাজেশন সাজেসটেড সাজো সাজোকাপড় সাজোদই সাজোবাসি সাঁজোয়া সাঁজোয়াগাড়ি সাজোয়াল সাজছ সাজছি সাজছিল সাজছিলাম সাজছিলি সাজছিলে সাজছিলেন সাজছিলেম সাজছিলুম সাজছিস সাজছে সাজছেন সাজত সাজতাম সাজতিস সাজতে সাজতেন সাজতেম সাজতুম সাজদই সাজন সাজুন সাজনি সাজনী সাজন্ত সাজপোশাক সাজব সাজবার সাজবি সাজবে সাজবেন সাজবো সাজল সাজলাম সাজলি সাজলে সাজলেন সাজলেম সাজলুম সাজসজ্জা সাজসজ্জাকরণ সাজসরঞ্জাম সাঁঝ সাঁঝক সাঁঝা সাঁঝেরবাতি সাঁঝনামা সাঁঝবাতি সাঞ্জোয়া সাট সাঁট সাঁটুক সাঁটা সাঁটানো সাঁটালে সাটাসাটি সাটি সাঁটি সাঁটিত সাঁটিতাম সাঁটিতিস সাঁটিতে সাঁটিতেছ সাঁটিতেছি সাঁটিতেছিল সাঁটিতেছিলাম সাঁটিতেছিলি সাঁটিতেছিলে সাঁটিতেছিলেন সাঁটিতেছিস সাঁটিতেছে সাঁটিতেছেন সাঁটিতেন সাটিন সাঁটিব সাঁটিবার সাঁটিবি সাঁটিবে সাঁটিবেন সাঁটিল সাঁটিলাম সাঁটিলি সাঁটিলে সাঁটিলেন সাঁটিস সাঁটিয়া সাঁটিয়াছ সাঁটিয়াছি সাঁটিয়াছিল সাঁটিয়াছিলাম সাঁটিয়াছিলি সাঁটিয়াছিলে সাঁটিয়াছিলেন সাঁটিয়াছিস সাঁটিয়াছে সাঁটিয়াছেন সাঁটিয়ো সাটী সাঁটে সাঁটেন সাঁটছ সাঁটছি সাঁটছিল সাঁটছিলাম সাঁটছিলি সাঁটছিলে সাঁটছিলেন সাঁটছিলেম সাঁটছিলুম সাঁটছিস সাঁটছে সাঁটছেন সাযুজ্য সাঁটত সাঁটতাম সাঁটতিস সাঁটতে সাঁটতেন সাঁটতেম সাঁটতুম সাঁটুন সাঁটব সাঁটবার সাঁটবি সাঁটবে সাঁটবেন সাঁটবো সাঁটবোঝা সাঁটল সাঁটলাম সাঁটলি সাঁটলে সাঁটলেন সাঁটলেম সাঁটলুম সাত সাতুই সাতকাণ্ড সাতকানিয়া সাতকাহন সাতকথা সাতক্ষিরা সাতক্ষীরা সাতকড়া সাতখানি সাতখুন সাতগাঁ সাতগম্বুজ সাতঘাট সাতা সাতাইশ সাতাত্তর সাতান সাতান্ন সাতানব্বই সাঁতার সাঁতারু সাতালি সাতাশ সাতাশি সাতাশী সাতিশয় সাতচল্লিশ সাতেক সাতোয়াঁ সাতোয়ান সাতজন সাত্তা সাততাড়াতাড়ি সাতত্য সাততবক সাত্ত্বিক সাত্ত্বিকভাব সাততলা সাতদিন সাতনকলে সাতনরি সাতনরী সাতনলা সাতপাঁচ সাতপ্যাঁচ সাতপুরু সাতপুরুষ সাতবার সাতবাসি সাতবাহন সাতবছর সাতভাই সাতভাগ সাতমা সাতমোড়া সাতমসজিদ সাতরঙা সাঁতরা সাঁৎরা সাঁতরাই সাঁৎরাই সাঁতরাইও সাঁৎরাইও সাঁতরাইত সাঁৎরাইত সাঁতরাইতাম সাঁৎরাইতাম সাঁতরাইতিস সাঁৎরাইতিস সাঁতরাইতে সাঁৎরাইতে সাঁতরাইতেছ সাঁৎরাইতেছ সাঁতরাইতেছি সাঁৎরাইতেছি সাঁতরাইতেছিল সাঁৎরাইতেছিল সাঁতরাইতেছিলাম সাঁৎরাইতেছিলাম সাঁতরাইতেছিলি সাঁৎরাইতেছিলি সাঁতরাইতেছিলে সাঁৎরাইতেছিলে সাঁতরাইতেছিলেন সাঁৎরাইতেছিলেন সাঁতরাইতেছিস সাঁৎরাইতেছিস সাঁতরাইতেছে সাঁৎরাইতেছে সাঁতরাইতেছেন সাঁৎরাইতেছেন সাঁতরাইতেন সাঁৎরাইতেন সাঁতরাইব সাঁৎরাইব সাঁতরাইবার সাঁৎরাইবার সাঁতরাইবি সাঁৎরাইবি সাঁতরাইবে সাঁৎরাইবে সাঁতরাইবেন সাঁৎরাইবেন সাঁতরাইল সাঁৎরাইল সাঁতরাইলাম সাঁৎরাইলাম সাঁতরাইলি সাঁৎরাইলি সাঁতরাইলে সাঁৎরাইলে সাঁতরাইলেন সাঁৎরাইলেন সাঁতরাইয়া সাঁৎরাইয়া সাঁতরাইয়াছ সাঁৎরাইয়াছ সাঁতরাইয়াছি সাঁৎরাইয়াছি সাঁতরাইয়াছিল সাঁৎরাইয়াছিল সাঁতরাইয়াছিলাম সাঁৎরাইয়াছিলাম সাঁতরাইয়াছিলি সাঁৎরাইয়াছিলি সাঁতরাইয়াছিলে সাঁৎরাইয়াছিলে সাঁতরাইয়াছিলেন সাঁৎরাইয়াছিলেন সাঁতরাইয়াছিস সাঁৎরাইয়াছিস সাঁতরাইয়াছে সাঁৎরাইয়াছে সাঁতরাইয়াছেন সাঁৎরাইয়াছেন সাঁতরাইয়ো সাঁৎরাইয়ো সাঁতরাক সাঁৎরাক সাঁতরাচ্ছ সাঁৎরাচ্ছ সাঁতরাচ্ছি সাঁৎরাচ্ছি সাঁতরাচ্ছিল সাঁৎরাচ্ছিল সাঁতরাচ্ছিলাম সাঁৎরাচ্ছিলাম সাঁতরাচ্ছিলি সাঁৎরাচ্ছিলি সাঁতরাচ্ছিলে সাঁৎরাচ্ছিলে সাঁতরাচ্ছিলেন সাঁৎরাচ্ছিলেন সাঁতরাচ্ছিলেম সাঁৎরাচ্ছিলেম সাঁতরাচ্ছিলুম সাঁৎরাচ্ছিলুম সাঁতরাচ্ছিস সাঁৎরাচ্ছিস সাঁতরাচ্ছে সাঁৎরাচ্ছে সাঁতরাচ্ছেন সাঁৎরাচ্ছেন সাতরাজা সাঁতরাত সাঁৎরাত সাঁতরাতাম সাঁৎরাতাম সাঁতরাতিস সাঁৎরাতিস সাঁতরাতে সাঁৎরাতে সাঁতরাতেন সাঁৎরাতেন সাঁতরাতেম সাঁৎরাতেম সাঁতরাতুম সাঁৎরাতুম সাঁতরান সাঁৎরান সাঁতরানো সাঁৎরানো সাঁতরাব সাঁৎরাব সাঁতরাবার সাঁৎরাবার সাঁতরাবি সাঁৎরাবি সাঁতরাবে সাঁৎরাবে সাঁতরাবেন সাঁৎরাবেন সাঁতরাবো সাঁৎরাবো সাঁতরাল সাঁৎরাল সাঁতরালাম সাঁৎরালাম সাঁতরালি সাঁৎরালি সাঁতরালে সাঁৎরালে সাঁতরালেন সাঁৎরালেন সাঁতরালেম সাঁৎরালেম সাঁতরালুম সাঁৎরালুম সাঁতরাস সাঁৎরাস সাতরাস্তা সাঁৎরায় সাঁতরে সাঁৎরে সাঁতরেছ সাঁৎরেছ সাঁতরেছি সাঁৎরেছি সাঁতরেছিল সাঁৎরেছিল সাঁতরেছিলাম সাঁৎরেছিলাম সাঁতরেছিলি সাঁৎরেছিলি সাঁতরেছিলে সাঁৎরেছিলে সাঁতরেছিলেন সাঁৎরেছিলেন সাঁতরেছিলেম সাঁৎরেছিলেম সাঁতরেছিলুম সাঁৎরেছিলুম সাঁতরেছিস সাঁৎরেছিস সাঁতরেছে সাঁৎরেছে সাঁতরেছেন সাঁৎরেছেন সাঁতরো সাঁৎরো সাঁতলা সাঁৎলা সাঁতলাই সাঁৎলাই সাঁতলাইও সাঁৎলাইও সাঁতলাইত সাঁৎলাইত সাঁতলাইতাম সাঁৎলাইতাম সাঁতলাইতিস সাঁৎলাইতিস সাঁতলাইতে সাঁৎলাইতে সাঁতলাইতেছ সাঁৎলাইতেছ সাঁতলাইতেছি সাঁৎলাইতেছি সাঁতলাইতেছিল সাঁৎলাইতেছিল সাঁতলাইতেছিলাম সাঁৎলাইতেছিলাম সাঁতলাইতেছিলি সাঁৎলাইতেছিলি সাঁতলাইতেছিলে সাঁৎলাইতেছিলে সাঁতলাইতেছিলেন সাঁৎলাইতেছিলেন সাঁতলাইতেছিস সাঁৎলাইতেছিস সাঁতলাইতেছে সাঁৎলাইতেছে সাঁতলাইতেছেন সাঁৎলাইতেছেন সাঁতলাইতেন সাঁৎলাইতেন সাঁতলাইব সাঁৎলাইব সাঁতলাইবার সাঁৎলাইবার সাঁতলাইবি সাঁৎলাইবি সাঁতলাইবে সাঁৎলাইবে সাঁতলাইবেন সাঁৎলাইবেন সাঁতলাইল সাঁৎলাইল সাঁতলাইলাম সাঁৎলাইলাম সাঁতলাইলি সাঁৎলাইলি সাঁতলাইলে সাঁৎলাইলে সাঁতলাইলেন সাঁৎলাইলেন সাঁতলাইয়া সাঁৎলাইয়া সাঁতলাইয়াছ সাঁৎলাইয়াছ সাঁতলাইয়াছি সাঁৎলাইয়াছি সাঁতলাইয়াছিল সাঁৎলাইয়াছিল সাঁতলাইয়াছিলাম সাঁৎলাইয়াছিলাম সাঁতলাইয়াছিলি সাঁৎলাইয়াছিলি সাঁতলাইয়াছিলে সাঁৎলাইয়াছিলে সাঁতলাইয়াছিলেন সাঁৎলাইয়াছিলেন সাঁতলাইয়াছিস সাঁৎলাইয়াছিস সাঁতলাইয়াছে সাঁৎলাইয়াছে সাঁতলাইয়াছেন সাঁৎলাইয়াছেন সাঁতলাইয়ো সাঁৎলাইয়ো সাঁতলাক সাঁৎলাক সাঁতলাচ্ছ সাঁৎলাচ্ছ সাঁতলাচ্ছি সাঁৎলাচ্ছি সাঁতলাচ্ছিল সাঁৎলাচ্ছিল সাঁতলাচ্ছিলাম সাঁৎলাচ্ছিলাম সাঁতলাচ্ছিলি সাঁৎলাচ্ছিলি সাঁতলাচ্ছিলে সাঁৎলাচ্ছিলে সাঁতলাচ্ছিলেন সাঁৎলাচ্ছিলেন সাঁতলাচ্ছিলেম সাঁৎলাচ্ছিলেম সাঁতলাচ্ছিলুম সাঁৎলাচ্ছিলুম সাঁতলাচ্ছিস সাঁৎলাচ্ছিস সাঁতলাচ্ছে সাঁৎলাচ্ছে সাঁতলাচ্ছেন সাঁৎলাচ্ছেন সাঁতলাত সাঁৎলাত সাঁতলাতাম সাঁৎলাতাম সাঁতলাতিস সাঁৎলাতিস সাঁতলাতে সাঁৎলাতে সাঁতলাতেন সাঁৎলাতেন সাঁতলাতেম সাঁৎলাতেম সাঁতলাতুম সাঁৎলাতুম সাঁতলান সাঁৎলান সাঁতলানো সাঁৎলানো সাঁতলাব সাঁৎলাব সাঁতলাবার সাঁৎলাবার সাঁতলাবি সাঁৎলাবি সাঁতলাবে সাঁৎলাবে সাঁতলাবেন সাঁৎলাবেন সাঁতলাবো সাঁৎলাবো সাঁতলাল সাঁৎলাল সাঁতলালাম সাঁৎলালাম সাঁতলালি সাঁৎলালি সাঁতলালে সাঁৎলালে সাঁতলালেন সাঁৎলালেন সাঁতলালেম সাঁৎলালেম সাঁতলালুম সাঁৎলালুম সাঁতলাস সাঁৎলাস সাঁতলায় সাঁৎলায় সাঁতলে সাঁৎলে সাঁতলেছ সাঁৎলেছ সাঁতলেছি সাঁৎলেছি সাঁতলেছিল সাঁৎলেছিল সাঁতলেছিলাম সাঁৎলেছিলাম সাঁতলেছিলি সাঁৎলেছিলি সাঁতলেছিলে সাঁৎলেছিলে সাঁতলেছিলেন সাঁৎলেছিলেন সাঁতলেছিলেম সাঁৎলেছিলেম সাঁতলেছিলুম সাঁৎলেছিলুম সাঁতলেছিস সাঁৎলেছিস সাঁতলেছে সাঁৎলেছে সাঁতলেছেন সাঁৎলেছেন সাঁতলো সাঁৎলো সাতশ সাতশো সাতশত সাতষট্টি সাতসংখ্যক সাতসকাল সাতসতিন সাতসতের সাতসতেরো সাতসমুদ্র সাথ সাথি সাথী সাথে সাথুয়া সাদ সাদু সাদা সাদাকালো সাদাচামড়া সাদাচোখ সাদাটে সাদাদিল সাদামাটা সাদামাঠা সাদারঙ সাদাসাপটা সাদাসিধা সাদাসিধে সাদি সাদিক সাদিত সাদিনা সাদির সাদিয়ানা সাদীবর সাদ্দাম সাদন সাদর সাদরি সাদৃশ্য সাদৃশ্যকরণ সাদৃশ্যকল্পনা সাদৃশ্যনির্মাণ সাদৃশ্যপূর্ণ সাদৃশ্যহীন সাদৃশ্যহেতু সাধ সাধু সাধক সাধুক সাধুগিরি সাধা সাধান সাধানো সাধারণ সাধারণগত সাধারণার্থ সাধারণী সাধারণীকৃত সাধারণীকরণ সাধারণ্য সাধারণত সাধারণতত্ত্ব সাধারণতন্ত্র সাধারণতন্ত্রী সাধারণত্ব সাধারণতম সাধারণধর্ম সাধারণনাম সাধারণপদ সাধারণপদ্ধতি সাধারণভাবে সাধাসাধি সাধি সাধিকা সাধিত সাধিতাম সাধিতিস সাধিতে সাধিতেছ সাধিতেছি সাধিতেছিল সাধিতেছিলাম সাধিতেছিলি সাধিতেছিলে সাধিতেছিলেন সাধিতেছিস সাধিতেছে সাধিতেছেন সাধিতেন সাধিতধাতু সাধিত্র সাধিব সাধিবার সাধিবি সাধিবে সাধিবেন সাধিল সাধিলাম সাধিলি সাধিলে সাধিলেন সাধিস সাধিয়া সাধিয়াছ সাধিয়াছি সাধিয়াছিল সাধিয়াছিলাম সাধিয়াছিলি সাধিয়াছিলে সাধিয়াছিলেন সাধিয়াছিস সাধিয়াছে সাধিয়াছেন সাধিয়ো সাধুচরিত্র সাধেন সাধছ সাধছি সাধছিল সাধছিলাম সাধছিলি সাধছিলে সাধছিলেন সাধছিলেম সাধছিলুম সাধছিস সাধছে সাধছেন সাধজাগা সাধ্য সাধ্যাতিরিক্ত সাধ্যাতীত সাধ্যানুযায়ী সাধ্যানুরূপ সাধ্যানুসারে সাধ্যি সাধ্যতা সাধ্যবহির্ভূত সাধ্যমত সাধ্যমতো সাধ্যসাধন সাধ্যসাধনকারী সাধ্যসাধনা সাধত সাধুতা সাধতাম সাধুতার সাধতিস সাধতে সাধতেন সাধতেম সাধুত্ব সাধতুম সাধুতম সাধন সাধুন সাধনকারী সাধনকর্তা সাধনা সাধনাকারী সাধনাময় সাধনার্থে সাধনি সাধুনী সাধনীয় সাধনযোগ্য সাধনযোগ্যতা সাধনপদ্ধতি সাধনপ্রক্রিয়া সাধনপ্রণালী সাধনরীতি সাধনসঙ্গিনী সাধনস্মৃতি সাধুপ্রকৃতি সাধুপুরুষ সাধব সাধুবাদ সাধুবাবা সাধবার সাধবি সাধ্বী সাধবে সাধবেন সাধুবেশী সাধবো সাধুব্যক্তি সাধ্বস সাধভক্ষণ সাধুভাষা সাধর্ম্য সাধল সাধলাম সাধলি সাধলে সাধলেন সাধলেম সাধলুম সাধুসংসর্গ সাধুসঙ্গ সাধুসাবধান সাধুসন্ন্যাসী সান সানু সানক সানকাঢ়া সানকি সানকী সানুকম্প সানুগ্রহ সানগ্লাস সানা সানাই সানাইবাদক সানি সানিআজান সানিবাপ সানী সানুজ সান্টা সান্টামারিয়া সান্টিং সান্ডারল্যান্ড সানডে সান্ত সান্তারা সান্ত্বন সান্ত্বনা সান্তর সান্ত্রি সান্ত্রী সান্তরতা সান্দ্র সান্দ্রতা সান্ধা সান্ধিবিগ্রহিক সান্ধ্য সানুনাসিক সানুনাসিকতা সান্নিধ্য সান্নিপাতিক সানন্দ সানন্দা সানুনয় সানপেটা সানফ্রানসিসকো সানুবন্ধ সান্বয় সানুমান সানরাইজ সানুরাগ সানস্ক্রিন সাপ সাপখেলা সাপখোপ সাপার সাঁপি সাপিনী সাপেক্ষ সাপেক্ষানুমান সাপেক্ষীকরণ সাপেনেউলে সাপোট সাপোর্ট সাপোর্টারস সাপোর্টার্স সাপট সাপটা সাপটাই সাপটাইও সাপটাইত সাপটাইতাম সাপটাইতিস সাপটাইতে সাপটাইতেছ সাপটাইতেছি সাপটাইতেছিল সাপটাইতেছিলাম সাপটাইতেছিলি সাপটাইতেছিলে সাপটাইতেছিলেন সাপটাইতেছিস সাপটাইতেছে সাপটাইতেছেন সাপটাইতেন সাপটাইব সাপটাইবার সাপটাইবি সাপটাইবে সাপটাইবেন সাপটাইল সাপটাইলাম সাপটাইলি সাপটাইলে সাপটাইলেন সাপটাইয়া সাপটাইয়াছ সাপটাইয়াছি সাপটাইয়াছিল সাপটাইয়াছিলাম সাপটাইয়াছিলি সাপটাইয়াছিলে সাপটাইয়াছিলেন সাপটাইয়াছিস সাপটাইয়াছে সাপটাইয়াছেন সাপটাইয়ো সাপটাক সাপটাচ্ছ সাপটাচ্ছি সাপটাচ্ছিল সাপটাচ্ছিলাম সাপটাচ্ছিলি সাপটাচ্ছিলে সাপটাচ্ছিলেন সাপটাচ্ছিলেম সাপটাচ্ছিলুম সাপটাচ্ছিস সাপটাচ্ছে সাপটাচ্ছেন সাপটাত সাপটাতাম সাপটাতিস সাপটাতে সাপটাতেন সাপটাতেম সাপটাতুম সাপটান সাপটানো সাপটাব সাপটাবার সাপটাবি সাপটাবে সাপটাবেন সাপটাবো সাপটারান্না সাপটাল সাপটালাম সাপটালি সাপটালে সাপটালেন সাপটালেম সাপটালুম সাপটাস সাপটে সাপটেছ সাপটেছি সাপটেছিল সাপটেছিলাম সাপটেছিলি সাপটেছিলে সাপটেছিলেন সাপটেছিলেম সাপটেছিলুম সাপটেছিস সাপটেছে সাপটেছেন সাপটো সাপ্তাহিক সাপ্তাহিকী সাপত্ন সাপত্ন্য সাপমাসি সাপমাসী সাপলা সাপ্লাই সাপ্লিমেন্টারী সাপুড়া সাপুড়িয়া সাপুড়ে সাফ সাফকারী সাফা সাফাই সাফাইজবাব সাফাইসাক্ষী সাফাত সাফারি সাফারিসুট সাফায়ত সাফলা সাফল্য সাফল্যযুক্ত সাফল্যদায়ক সাফল্যনীতি সাফল্যপূর্ণ সাফল্যমণ্ডিত সাফল্যরূপ সাফল্যলাভ সাফল্যহীন সাফশুতরা সাফশুতরো সাফসাফাই সাফসুতরা সাফসুতরো সাব সাবু সাবওয়ে সাবকাশ সাবকিউটেনিয়াস সাবক্যাটেগরি সাবকুড় সাবান সাবানদানী সাবালক সাবালকি সাবালকী সাবালকত্ব সাবালিকা সাবালিগ সাবাস সাবাড় সাবিত সাবিত্রী সাবিত্রীমন্ত্র সাবিনা সাবেইন সাবেঈন সাবেক সাবেককেলে সাবেকি সাবেকিচলন সাবেকী সাবেকচাল সাবেকত্ব সাবেট সাবজেক্ট সাবজেক্টস সাবজজ সাবটাইপ সাবটপিক সাব্যস্ত সাবডিভিশন সাবুত সাবুদ সাবুদানা সাবধান সাবধানী সাবধানতা সাবধানতাজনিত সাবন সাবমিট সাবমেরিন সাবর্ণ সাবর্ণি সাবল সাবলীল সাবলীলতা সাবলীলভাবে সাবস্ক্রিপ্ট সাবসিডিয়ারি সাবসেট সাবস্টিটিউট সাবস্টিটিউটেড সাবহিত সাবড়া সাবড়ান সাবড়ানো সাবড়ে সাবয়ব সাভার সাভিনিবেশ সাম সামওয়ান সামগ্রিক সামগ্রিকভাবে সামগ্রী সামগ্রীপূর্ণ সামগ্রীরূপে সামগ্র্য সামাই সামাজিক সামাজিকীকরণ সামাজিকতা সামাজিকভাবে সামান সামান্য সামান্যকিছু সামান্যকরণ সামান্যা সামান্যীকরণ সামান্যত সামান্যতা সামান্যতম সামান্যপরিমাণ সামান্যভাবে সামান্যমাত্র সামান্যরকম সামান্তরিক সামাবাদী সামার সামারিয়াম সামাল সামি সামিল সামিয়ানা সামীপ্য সামীপ্যজ্ঞাপক সামেল সামোভার সামোয়া সামঞ্জস্য সামঞ্জস্যচ্যুত সামঞ্জস্যতা সামঞ্জস্যপূর্ণ সামঞ্জস্যসাধন সামঞ্জস্যহানি সামঞ্জস্যহীন সাম্য সাম্যাবস্থা সাম্যবাদ সাম্যবাদী সাম্যবোধ সামথিং সামুদ্র সামুদ্রক সামুদ্রিক সামুদ্রিকবেত্তা সামুদ্রবিদ্যা সামুদ্রবেত্তা সামনা সামনাসামনি সামনে সামনেকার সামনেপিছনে সামন্ত সামন্তচক্র সামন্ততান্ত্রিক সামন্ততন্ত্র সামন্তপ্রথা সামন্তবাদ সামন্তশাসক সাম্পান সাম্প্রতিক সাম্প্রতিককাল সাম্প্রতিকতম সাম্প্রতিকতর সাম্প্রদায়িক সাম্প্রদায়িকতা সামবায়িক সাম্রাজ্য সাম্রাজ্যবাদ সাম্রাজ্যবাদী সাম্রাজ্যভুক্ত সামরিক সামরিকজান্তা সামরিকতন্ত্র সামরিকপেশা সামরিকবাহিনী সামর্থ্য সামর্থ্যানুযায়ী সামলা সামলাই সামলাইও সামলাইত সামলাইতাম সামলাইতিস সামলাইতে সামলাইতেছ সামলাইতেছি সামলাইতেছিল সামলাইতেছিলাম সামলাইতেছিলি সামলাইতেছিলে সামলাইতেছিলেন সামলাইতেছিস সামলাইতেছে সামলাইতেছেন সামলাইতেন সামলাইব সামলাইবার সামলাইবি সামলাইবে সামলাইবেন সামলাইল সামলাইলাম সামলাইলি সামলাইলে সামলাইলেন সামলাইয়া সামলাইয়াছ সামলাইয়াছি সামলাইয়াছিল সামলাইয়াছিলাম সামলাইয়াছিলি সামলাইয়াছিলে সামলাইয়াছিলেন সামলাইয়াছিস সামলাইয়াছে সামলাইয়াছেন সামলাইয়ো সামলাক সামলাচ্ছ সামলাচ্ছি সামলাচ্ছিল সামলাচ্ছিলাম সামলাচ্ছিলি সামলাচ্ছিলে সামলাচ্ছিলেন সামলাচ্ছিলেম সামলাচ্ছিলুম সামলাচ্ছিস সামলাচ্ছে সামলাচ্ছেন সামলাত সামলাতাম সামলাতিস সামলাতে সামলাতেন সামলাতেম সামলাতুম সামলান সামলানো সামলাব সামলাবার সামলাবি সামলাবে সামলাবেন সামলাবো সামলাল সামলালাম সামলালি সামলালে সামলালেন সামলালেম সামলালুম সামলাস সামলে সামলেছ সামলেছি সামলেছিল সামলেছিলাম সামলেছিলি সামলেছিলে সামলেছিলেন সামলেছিলেম সামলেছিলুম সামলেছিস সামলেছে সামলেছেন সামলো সামসময়িক সামসময়িকতা সামহোয়ারইনব্লগ সামহোয়্যার সাময়িক সাময়িকী সাময়িকপত্র সাময়িকভাবে সার সারং সারংরাগ সারক সারুক সার্ক সার্কাস সার্কাসি সার্কাসী সার্কাসপার্টি সার্কিট সার্কেল সারকথা সার্কুলার সার্কুলেশন সারকুঁড় সারগাদা সারগম সার্গম সারগ্রাহী সারগ্রন্থ সারগর্ভ সারগ্রহণ সারঙ সারঙ্গ সারঙ্গা সারঙ্গী সারঙ্গবাদক সারা সারাংশ সারাই সারাইও সারাইত সারাইতাম সারাইতিস সারাইতে সারাইতেছ সারাইতেছি সারাইতেছিল সারাইতেছিলাম সারাইতেছিলি সারাইতেছিলে সারাইতেছিলেন সারাইতেছিস সারাইতেছে সারাইতেছেন সারাইতেন সারাইব সারাইবার সারাইবি সারাইবে সারাইবেন সারাইল সারাইলাম সারাইলি সারাইলে সারাইলেন সারাইয়া সারাইয়াছ সারাইয়াছি সারাইয়াছিল সারাইয়াছিলাম সারাইয়াছিলি সারাইয়াছিলে সারাইয়াছিলেন সারাইয়াছিস সারাইয়াছে সারাইয়াছেন সারাইয়ো সারাক সারাক্ষণ সারাচ্ছ সারাচ্ছি সারাচ্ছিল সারাচ্ছিলাম সারাচ্ছিলি সারাচ্ছিলে সারাচ্ছিলেন সারাচ্ছিলেম সারাচ্ছিলুম সারাচ্ছিস সারাচ্ছে সারাচ্ছেন সারাজীবন সারাত সারাতাম সারাতালিকা সারাতিস সারাতে সারাতেন সারাতেম সারাতুম সারাৎসার সারাদিন সারাদেশ সারাদেশব্যপী সারান সারানি সারানী সারানো সারাপ্রদেশ সারাব সারাবার সারাবি সারাবিশ্ব সারাবে সারাবেন সারাবের সারাবো সারাবছর সারারাত সারাল সারালাম সারালি সারালে সারালেন সারালেম সারালো সারালুম সারাস সারায়েভো সারি সারিকা সারিগামা সারিগত সারিত সারিতাম সারিতিস সারিতে সারিতেছ সারিতেছি সারিতেছিল সারিতেছিলাম সারিতেছিলি সারিতেছিলে সারিতেছিলেন সারিতেছিস সারিতেছে সারিতেছেন সারিতেন সারিন্দা সারিব সারিবাঁধা সারিবার সারিবি সারিবে সারিবেন সারিবদ্ধ সারিবদ্ধভাবে সারিবন্দী সারিল সারিলাম সারিলি সারিলে সারিলেন সারিস সারিয়া সারিয়াছ সারিয়াছি সারিয়াছিল সারিয়াছিলাম সারিয়াছিলি সারিয়াছিলে সারিয়াছিলেন সারিয়াছিস সারিয়াছে সারিয়াছেন সারিয়ে সারিয়েছ সারিয়েছি সারিয়েছিল সারিয়েছিলাম সারিয়েছিলি সারিয়েছিলে সারিয়েছিলেন সারিয়েছিলেম সারিয়েছিলুম সারিয়েছিস সারিয়েছে সারিয়েছেন সারিয়ো সারী সার্চ সার্চার সার্চলাইট সারে সারেং সারেগামা সারেঙ সারেঙ্গ সারেঙ্গী সারেঙবৌ সারেঙসুগনি সারেঙসুগনী সারেজাহান সারেন সারেনি সারেন্ডার সারোদ্ধার সারছ সারছি সারছিল সারছিলাম সারছিলি সারছিলে সারছিলেন সারছিলেম সারছিলুম সারছিস সারছে সারছেন সার্জারি সার্জেন সার্জেন্ট সার্জন সার্ট সারযুক্ত সার্টিফাই সার্টিফিকেট সারণ সারণি সারণী সারত সারতাম সারতিস সারতে সারতেন সারতেম সারতুম সারতরু সার্থক সার্থকতা সার্থকনামা সারথি সারথ্য সার্থবাহ সার্থভ্রষ্ট সারদা সার্ধ সারধর্ম সারনাম সারূপ্য সারপদার্থ সারপদার্থযুক্ত সারপদার্থহীন সারপ্রাইজ সার্ফ সার্ফিং সার্ফেস সার্ব সার্বকালিক সার্বক্ষণিক সারবান সারবার সারবি সার্বিক সার্বিকভাবে সার্বিয়া সারবে সারবেন সারবো সার্বজাতিক সার্বজনিক সার্বজনীন সার্বজনীনতা সার্বজনীনভাবে সারবত্তা সার্বদেশিক সারবন্দি সারবন্দী সার্বভৌম সার্বভৌমিক সার্বভৌমিকতা সার্বভৌমত্ব সার্বরাষ্ট্রিক সারবস্তু সারভাগ সার্ভার সার্ভিস সার্ভিসিং সার্ভিসেস সার্ভে সারভূত সারমাটি সারমেয় সারমেয়ী সারমেয়যুগল সারমর্ম সারল সারলাম সারলি সারলে সারলেন সারলেম সারলৌহ সারল্য সারলুম সার্শী সারশূন্য সার্ষপ সারস সারসংক্ষেপ সারসংগ্রহ সার্সি সারসন সারস্বত সারস্বতদেশীয় সারস্বতসমাজ সারস্বরূপ সারহীন সাল সালু সালংকার সালংকারা সালওয়ার সালুক সালঙ্কার সালঙ্কারা সালাত সালাদ সালাম সালামআলায়কুম সালামি সালামী সালামত সালার সালিক সালিশ সালিশি সালিস সালিসি সালিয়ানা সালেক সালেহ সালোক সালোক্য সালোকসংশ্লেষ সালোকসংশ্লেষণ সালোয়ার সালোয়ারকামিজ সালতামামি সালতামামী সালতারিখ সালতি সালন সালুন সালপাত সালফাইড সালফার সালফারযুক্ত সালফিউরিক সালফেট সালফোনামইড সালমমিছরি সালসা সাশ্রু সাশ্রুলোচন সাশ্রয় সাশ্রয়ী সাষ্টাঙ্গ সাষ্টাঙ্গপ্রণাম সাষ্টাঙ্গসিজদা সাস্না সাসপেন্ড সাসপেন্স সাহু সাহংকার সাহুকার সাহুকারি সাহঙ্কার সাহা সাহায্য সাহায্যকারী সাহায্যকেন্দ্র সাহায্যার্থে সাহায্যদান সাহায্যপ্রাপ্ত সাহায্যপ্রার্থী সাহায্যপ্রত্যাশী সাহায্যপুষ্ট সাহায্যরূপ সাহানা সাহানারাগ সাহানি সাহাবি সাহাবী সাহারা সাহিত্য সাহিত্যকর্ম সাহিত্যকলা সাহিত্যকল্পবিজ্ঞান সাহিত্যগত সাহিত্যাচার্য সাহিত্যানুরাগী সাহিত্যানুশীলন সাহিত্যিক সাহিত্যচর্চা সাহিত্যজগৎ সাহিত্যজীবন সাহিত্যজ্ঞান সাহিত্যতত্ত্ব সাহিত্যধারা সাহিত্যপাঠ সাহিত্যপত্র সাহিত্যপদক সাহিত্যপ্রেমী সাহিত্যবিশারদ সাহিত্যবৃত্তি সাহিত্যভাষা সাহিত্যমর্যাদা সাহিত্যরীতি সাহিত্যরচনা সাহিত্যরচনাকারী সাহিত্যরথী সাহিত্যরস সাহিত্যশিল্প সাহিত্যশিল্পী সাহিত্যসাধক সাহিত্যসাধনা সাহিত্যসাহিত্য সাহিত্যসেবক সাহিত্যসেবা সাহিত্যসেবী সাহিত্যসভা সাহিত্যসমাজ সাহিত্যসমৃদ্ধ সাহিত্যসম্মেলন সাহচর্য সাহেব সাহেবইনহবত সাহেবা সাহেবান সাহেবানি সাহেবি সাহেবিয়ানা সাহেবজান সাহেবপাড়া সাহেববিবি সাহেবমেম সাহেবলোক সাহজিক সাহস সাহসালি সাহসিক সাহসিকতা সাহসিকতাপূর্ণ সাহসিনী সাহসী সাহসযুক্ত সাহসহীন সাড় সাড়া সাড়াজাগানো সাড়াজ্ঞাপক সাড়াশি সাঁড়াশি সাঁড়াশী সাড়াশব্দ সাড়াশব্দহীন সাড়াহীন সাড়ি সাড়ী সাড়ে সাড়েচুয়াত্তুর সাড়হীনতা সায় সায়ংকাল সায়ংকালীন সায়ংকালীয় সায়ংকৃত্য সায়ংসন্ধ্যা সায়ংসময় সায়ক সায়া সায়ানাইড সায়ানোজেন সায়াহ্ন সায়াহ্নকৃত্য সায়েন্টিফিক সায়েন্টিস্ট সায়েন্স সায়েব সায়ের সায়েল সায়েলী সায়েস্তা সায়দাবাদ সায়ন্ত সায়ন্তন সায়র সিং সিংগাপুর সিংগার সিংগি সিংদরজা সিংহ সিংহকারক সিংহাদি সিংহাবলোকন সিংহাবলোকনন্যায় সিংহাসন সিংহাসনচ্যুত সিংহিনী সিংহী সিংহচিহ্নিত সিংহদেব সিংহদ্বার সিংহদরজা সিংহদুয়ার সিংহনাদ সিংহপুর সিংহবাহিনী সিংহবিক্রম সিংহভাগ সিংহমূর্তি সিংহরাশি সিংহল সিংহলি সিংহলিজ সিংহলী সিংহশাবক সিংহশিশু সিউল সিউলি সিউলী সিক সিক্কা সিককাবাব সিকা সিকাম সিকায়ৎ সিকি সিকিউরিটি সিকিউরিটিজ সিকিউরড সিকিওর সিকিপথ সিকিপরিমাণ সিকিভাগ সিকিম সিকিয়া সিকিয়াদণ্ড সিকিয়াবাকুয়া সিকে সিকোয়েন্স সিক্ত সিক্তকরণ সিকতা সিক্তা সিক্ততা সিক্তপ্রায় সিক্তবস্ত্র সিকনি সিক্রেট সিক্রেটিন সিক্রেটস সিকলি সিকস্ত সিকস্তি সিকুয়েন্স সিকুয়েল সিগ সিগার সিগারেট সিগনাল সিগনালিং সিগনেচার সিগনেট সিগন্যাল সিগমা সিগময়েড সিঙ্কোনা সিঙ্গাপুর সিঙ্গার সিঙ্গারা সিঙ্গি সিঙ্গিচড়া সিঙ্গেল সিঙ্গেলস সিঁচা সিজ সিজগাছ সিজা সিজানো সিজার সিজারিয়ান সিজিল সিজিয়াম সিজোফ্রেনিয়া সিজদা সিজন সিজনো সিঝা সিঞানো সিঞ্চা সিঞ্চিত সিঞ্চিতা সিঞ্চন সিট সিটক সিটকক সিটকা সিটকাই সিটকাইও সিটকাইত সিটকাইতাম সিটকাইতিস সিটকাইতে সিটকাইতেছ সিটকাইতেছি সিটকাইতেছিল সিটকাইতেছিলাম সিটকাইতেছিলি সিটকাইতেছিলে সিটকাইতেছিলেন সিটকাইতেছিস সিটকাইতেছে সিটকাইতেছেন সিটকাইতেন সিটকাইব সিটকাইবার সিটকাইবি সিটকাইবে সিটকাইবেন সিটকাইল সিটকাইলাম সিটকাইলি সিটকাইলে সিটকাইলেন সিটকাইয়া সিটকাইয়াছ সিটকাইয়াছি সিটকাইয়াছিল সিটকাইয়াছিলাম সিটকাইয়াছিলি সিটকাইয়াছিলে সিটকাইয়াছিলেন সিটকাইয়াছিস সিটকাইয়াছে সিটকাইয়াছেন সিটকাইয়ো সিটকাক সিটকান সিটকানি সিটকানো সিটকাস সিটকচ্ছ সিটকচ্ছি সিটকচ্ছিল সিটকচ্ছিলাম সিটকচ্ছিলি সিটকচ্ছিলে সিটকচ্ছিলেন সিটকচ্ছিলেম সিটকচ্ছিলুম সিটকচ্ছিস সিটকচ্ছে সিটকচ্ছেন সিটকে সিটকেছ সিটকেছি সিটকেছিল সিটকেছিলাম সিটকেছিলি সিটকেছিলে সিটকেছিলেন সিটকেছিলেম সিটকেছিলুম সিটকেছিস সিটকেছে সিটকেছেন সিটকো সিটকোবার সিটকত সিটকতাম সিটকতিস সিটকতে সিটকতেন সিটকতেম সিটকতুম সিটকন সিটকব সিটকবি সিটকবে সিটকবেন সিটকবো সিটকল সিটকলাম সিটকলি সিটকলে সিটকলেন সিটকলেম সিটকলুম সিটকস সিটগুলো সিটা সিটি সিটিজ সিটিজেন সিটিজেনস সিটিসেল সিডি সিডিশন সিডনি সিডনী সিণ্ডিকেট সিত সিতকণ্ঠ সিতকর সিঁতা সিতাংশু সিতাভ সিতার সিতারা সিতি সিঁতি সিতিকণ্ঠ সিতপক্ষ সিতপুষ্প সিতম সিঁথা সিথান সিঁথি সিঁথিকাটা সিঁথিপাটি সিঁথিপাটী সিঁদ সিঁদকাটা সিঁদকাটি সিঁদকাঠি সিদা সিদে সিঁদেল সিদ্দিকিন সিদ্দিকীন সিদ্দত সিদ্ধ সিদ্ধকাম সিদ্ধকরা সিদ্ধা সিদ্ধাই সিদ্ধাঙ্গনা সিদ্ধান্ত সিদ্ধান্তক্রমে সিদ্ধান্তগ্রহণ সিদ্ধান্তযুক্ত সিদ্ধান্তবাগীশ সিদ্ধান্তহীনতা সিদ্ধার্থ সিদ্ধি সিদ্ধিকারক সিদ্ধিখোর সিদ্ধিঘোঁটা সিদ্ধিযুক্ত সিদ্ধিযোগ সিদ্ধিদাতা সিদ্ধিদায়ক সিদ্ধিপ্রাপ্ত সিদ্ধিরগঞ্জ সিদ্ধিলাভ সিদ্ধিলাভকারী সিদ্ধচাইল সিদ্ধচাউল সিদ্ধচাল সিদ্ধেশ্বরী সিদ্ধতা সিদ্ধধাতু সিদ্ধপুরুষ সিদ্ধবিদ্যা সিদ্ধভূমি সিদ্ধমনোরথ সিদ্ধরস সিদ্ধহস্ত সিঁদুর সিদরাতুলমুনতাহা সিঁদুরিয়া সিঁদুরবিন্দু সিঁদুরমেঘ সিঁদুররাঙা সিঁধ সিঁধকাটা সিঁধকাটি সিঁধকাঠি সিধা সিধানো সিধারল সিধারহু সিধায়ল সিধি সিধী সিধে সিঁধেল সিঁধেলচোর সিন সিনকোনা সিনা সিনাই সিনাকলিজা সিনান সিনিয়র সিনী সিনীবালী সিনে সিনেট সিনেটর সিনেটহাউস সিনেমা সিনেমাওয়ালা সিনেমাটোগ্রাফি সিনেমানাটক সিনেমাস্টার সিনেমাহল সিনেহ সিনট্যাক্স সিন্ডারেলা সিন্ডিকেট সিনড্রোম সিন্ড্রোম সিনথেটিক সিন্দুক সিন্দাল সিন্দূর সিন্দূরিয়া সিন্দূরযুক্তা সিন্দূরবিন্দু সিন্ধ সিন্ধু সিন্ধুক সিন্ধুঘোটক সিন্ধি সিন্ধিয়া সিন্ধী সিন্ধুজ্ঞান সিন্ধুতরঙ্গ সিন্নি সিপ সিপাই সিপারা সিপাহি সিপাহী সিপাহীবিদ্রোহ সিপাহশালা সিপাহসালা সিপ্রা সিপ্রানদী সিপ্রোফ্লক্সাসিন সিফাই সিফাৎ সিফিলিস সিফত সিভিল সিভিলকোর্ট সিভিলিয়ান সিভিলসার্জন সিম সিমিন সিমিলার সিমেট্রি সিমেন্ট সিমেন্স সিমোরগ সিম্যান সিম্পল সিম্প্লেক্স সিম্ফনি সিম্বোলিক সিম্বল সিমুম সিমূম সিমুর্গ সিমলা সিমস সিমসাম সির সিরক্কো সিরকা সির্কা সিরা সিরাজ সিরাজগঞ্জ সিরাজাম সিরাজামমুনিরা সিরাজি সিরাতুল সিরাপ সিরাম সিরামিক সিরি সিরিজ সিরিঞ্জ সিরিফল সিরিশ সিরিশকাগজ সিরিস সিরিয়া সিরিয়াল সিরিয়াস সিরিয়াসলি সিরোসিস সিরজা সিরজন সির্নি সিরসির সিল সিল্ক সিলা সিলাপচি সিলিং সিলিকা সিলিকেট সিলিকন সিলিঙ সিলিন্ডার সিলিন্ডারদ্বয় সিলিপচি সিলেক্ট সিলেক্টেড সিলেকশন সিলেট সিলেটী সিলেটবিভাগ সিলেবাস সিলেবল সিলেবলযুক্ত সিলভার সিলমোহর সিস সিসৃক্ষু সিসৃক্ষা সিসা সিসাময়েড সিসিলি সিসিলিয়ান সিসে সিসেম সিসযুক্ত সিস্টার সিস্টারস সিস্টার্স সিস্টেম সিস্টেমিক সিস্টেমেটিক সিস্টেম্যাটিক সিস্টেমস সিহারা সিঁড়ি সিঁড়িযুক্ত সিঁড়িটা সিঁড়িপথ সিঁড়িভাঙ্গা সিঁড়ী সিয়া সিয়াটো সিয়াটল সিয়ান সিয়ানা সিয়ানি সিয়ানো সিয়াবাস সিয়াম সিয়ামোরগ সিয়েরা সিয়্যাটল সচ সুচ সূচ সূচক সচকিত সচকিতা সচকিতে সূচকীকরণ সূচকীয় সূচকীয়ভাবে সূচকীয়সম্ভাবনা সীকর সীকরবর্ষণ সচক্ষে সুচারু সুচারুতা সুচারুভাবে সুচারুরূপে সুচাল সূচাল সুচালো সূচালো সচি সূচি সুচিক্কণ সূচিকা সূচিকাভরণ সুচিকিৎসক সুচিকিৎসা সূচিকর্ম সূচিকর্মজীবী সূচিজীবী সূচিত সচিত্র সুচিত্র সুচিত্রক সুচিত্রা সুচিত্রিত সুচিন্তা সুচিন্তিত সূচিপত্র সচিব সচিবালয় সূচিভেদ্য সূচিমুখ সূচিরোমা সূচিশিল্প সূচিসহায়িকা সূচী সূচীকাভরণ সূচীকর্ম সচ্চিদানন্দ সচ্চিন্তা সূচীছিদ্র সূচীজীবী সূচীত সূচীপত্র সূচীভেদ্য সূচীমুখ সচ্চরিত সচ্চরিত্র সচ্চরিত্রা সচ্চরিত্রতা সূচীসহায়িকা সচেতক সুচেতা সচেতন সচেতনকারী সচেতনতা সচেতনভাবে সচেষ্ট সচেষ্টতা সচ্ছিদ্র সচ্ছিল সচ্ছিলাম সচ্ছিলি সচ্ছিলে সচ্ছিলেন সচ্ছিলেম সচ্ছিলুম সচ্ছল সচ্ছলতা সচ্ছলতাযুক্ত সীজ সচঞ্চল সীট সূচ্য সূচ্যগ্র সূচ্যগ্রমেদিনী সীৎকার সীতা সীতাকোট সীতাকুণ্ড সীতাদুঃখ সীতাদেবী সীতানাথ সীতাপতি সীতাবর্জন সীতাভোগ সীতারাম সীতাশাল সীতাশালি সীতিমা সুচতুর সীঁথি সীদতি সীধু সূচন সূচনা সূচনাকারী সূচনাকাল সূচনাদায়ী সূচনাদল সূচনাপর্ব সূচনামাত্র সূচনালগ্ন সূচনীয় সচন্দন সীবন সীবনী সীবনশিক্ষা সীমা সীমাযুক্ত সীমানা সীমানাঘটিত সীমানাজ্ঞাপক সীমানির্দেশক সীমানিরূপক সীমান্ত সীমান্তপথ সীমান্তপ্রদেশ সীমান্তবর্তী সীমান্তরেখা সীমাপরিসীমা সীমাবদ্ধ সীমাবদ্ধকরণ সীমাবদ্ধতা সীমারেখা সীমালঙ্ঘন সীমাস্থ সীমাস্থিত সীমাসরহদ্দ সীমাহীন সীমাহীনপ্রায় সীমায়িত সীমিত সীমিতকরণ সীমন্ত সীমন্তক সীমন্তিত সীমন্তিনী সীমন্তোন্নয়ন সীমন্তযুক্ত সীমন্তসীমা সচরাচর সুচরিত সুচরিতা সুচরিতাসু সুচরিতেষু সুচরিত্র সুচরিত্রা সুচরিতসমীপে সচল সচলায়তন সূচলো সচলতা সীলমোহর সীস সীসক সীসা সীসে সুচসুতো সূচয়িতব্য সে সেই সেইকারণ সেইকাল সেইকেলে সেইখান সেইখানকার সেইজাতীয় সেইজন্য সেইদিক সেইদিককার সেইদিন সেইন্ট সেইপ্রকার সেইপরিমাণ সেইফ সেইবার সেইভাবে সেইমাত্র সেইমত সেইমতি সেইমতো সেইরকম সেইরূপ সেইরূপভাবে সেইল সেইলিং সেইলর সেইসাথে সেইসূত্রে সেইস্থান সেইসব সেইসমস্ত সেইসময় সেইসময়কার সেউ সেঁউতি সেও সেঁওই সেঁওতি সেঁওলা সেক সেঁক সেকুক সেঁকুক সেকা সেঁকা সেকান্দর সেকারণ সেকাল সেকি সেঁকি সেকিত সেঁকিত সেকিতাম সেঁকিতাম সেকিতিস সেঁকিতিস সেকিতে সেঁকিতে সেকিতেছ সেঁকিতেছ সেকিতেছি সেঁকিতেছি সেকিতেছিল সেঁকিতেছিল সেকিতেছিলাম সেঁকিতেছিলাম সেকিতেছিলি সেঁকিতেছিলি সেকিতেছিলে সেঁকিতেছিলে সেকিতেছিলেন সেঁকিতেছিলেন সেকিতেছিস সেঁকিতেছিস সেকিতেছে সেঁকিতেছে সেকিতেছেন সেঁকিতেছেন সেকিতেন সেঁকিতেন সেকিতেয়ি সেকিব সেঁকিব সেকিবার সেঁকিবার সেকিবি সেঁকিবি সেকিবে সেঁকিবে সেকিবেন সেঁকিবেন সেকিল সেঁকিল সেকিলাম সেঁকিলাম সেকিলি সেঁকিলি সেকিলে সেঁকিলে সেকিলেন সেঁকিলেন সেকিস সেঁকিস সেকিয়া সেঁকিয়া সেকিয়াছ সেঁকিয়াছ সেকিয়াছি সেঁকিয়াছি সেকিয়াছিল সেঁকিয়াছিল সেকিয়াছিলাম সেঁকিয়াছিলাম সেকিয়াছিলি সেঁকিয়াছিলি সেকিয়াছিলে সেঁকিয়াছিলে সেকিয়াছিলেন সেঁকিয়াছিলেন সেকিয়াছিস সেঁকিয়াছিস সেকিয়াছে সেঁকিয়াছে সেকিয়াছেন সেঁকিয়াছেন সেকিয়ো সেঁকিয়ো সেকে সেঁকে সেকেছ সেঁকেছ সেকেছি সেঁকেছি সেকেছিল সেঁকেছিল সেকেছিলাম সেঁকেছিলাম সেকেছিলি সেঁকেছিলি সেকেছিলে সেঁকেছিলে সেকেছিলেন সেঁকেছিলেন সেকেছিলেম সেঁকেছিলেম সেকেছিলুম সেঁকেছিলুম সেকেছিস সেঁকেছিস সেকেছে সেঁকেছে সেকেছেন সেঁকেছেন সেকেন সেঁকেন সেকেন্ড সেকেন্ডারি সেকেন্ডপদ সেকেন্ডহ্যান্ড সেকেন্দারিগজ সেকেন্দর সেকেলে সেকো সেঁকো সেঁকোবিষ সেকছ সেঁকছ সেকছি সেঁকছি সেকছিল সেঁকছিল সেকছিলাম সেঁকছিলাম সেকছিলি সেঁকছিলি সেকছিলে সেঁকছিলে সেকছিলেন সেঁকছিলেন সেকছিলেম সেঁকছিলেম সেকছিলুম সেঁকছিলুম সেকছিস সেঁকছিস সেকছে সেঁকছে সেকছেন সেঁকছেন সেক্টর সেক্টরসমগ্র সেকত সেঁকত সেক্তা সেকতাম সেঁকতাম সেকতিস সেঁকতিস সেকতে সেঁকতে সেকতেন সেঁকতেন সেকতেম সেঁকতেম সেকতুম সেঁকতুম সেকথা সেকুন সেঁকুন সেকব সেঁকব সেকবার সেঁকবার সেকবি সেঁকবি সেকবে সেঁকবে সেকবেন সেঁকবেন সেকবো সেঁকবো সেকম সেকরা সেকরানি সেক্রেটারি সেক্রেটারিয়েট সেকল সেঁকল সেকলাম সেঁকলাম সেকলি সেঁকলি সেকলে সেঁকলে সেকলেন সেঁকলেন সেকলেম সেঁকলেম সেকলুম সেঁকলুম সেকশন সেক্ষেত্র সেক্ষণ সেক্স সেক্সি সেক্সট্যান্ট সেকহ্যান্ড সেখ সেখান সেখানকার সেখানে সেখজাদা সেগাফ সেগো সেগুন সেগুনবাগান সেগুনবাগিচা সেগমেন্ট সেঙ্গার সেঙাত সেঙাতিনী সেঙো সেচ সেচক সেচুক সেচকাজ সেচা সেঁচা সেচান সেচি সেচিত সেচিতাম সেচিতিস সেচিতে সেচিতেছ সেচিতেছি সেচিতেছিল সেচিতেছিলাম সেচিতেছিলি সেচিতেছিলে সেচিতেছিলেন সেচিতেছিস সেচিতেছে সেচিতেছেন সেচিতেন সেচিব সেচিবার সেচিবি সেচিবে সেচিবেন সেচিল সেচিলাম সেচিলি সেচিলে সেচিলেন সেচিস সেচিয়া সেচিয়াছ সেচিয়াছি সেচিয়াছিল সেচিয়াছিলাম সেচিয়াছিলি সেচিয়াছিলে সেচিয়াছিলেন সেচিয়াছিস সেচিয়াছে সেচিয়াছেন সেচিয়ো সেচে সেঁচে সেচেছ সেচেছি সেচেছিল সেচেছিলাম সেচেছিলি সেচেছিলে সেচেছিলেন সেচেছিলেম সেচেছিলুম সেচেছিস সেচেছে সেচেছেন সেচেন সেচের সেচো সেচছ সেচ্ছাসেবী সেচছি সেচছিল সেচছিলাম সেচছিলি সেচছিলে সেচছিলেন সেচছিলেম সেচছিলুম সেচছিস সেচছে সেচছেন সেচযন্ত্র সেচত সেচতাম সেচতিস সেচতে সেচতেন সেচতেম সেচতুম সেচন সেচুন সেচনকারী সেচনকলস সেচনী সেচব সেচবার সেচবি সেচবিহীন সেচবে সেচবেন সেচবো সেচব্যবস্থা সেচল সেচলাম সেচলি সেচলে সেচলেন সেচলেম সেচলুম সৌন্দর্য সেজ সেজা সেজানো সেজে সেজেছ সেজেছি সেজেছিল সেজেছিলাম সেজেছিলি সেজেছিলে সেজেছিলেন সেজেছিলেম সেজেছিলুম সেজেছিস সেজেছে সেজেছেন সেজো সেঁজতি সেঁজুতি সেজদা সেজদাদা সেজদি সেজদিদি সেজন সেজন্য সেঝা সেঝানো সেঞ্চুরি সেঞেরা সেট সেটআপ সেটকানো সেঁটকানো সেযুগে সেটা সেটি সেটিং সেটে সেঁটে সেঁটেছ সেঁটেছি সেঁটেছিল সেঁটেছিলাম সেঁটেছিলি সেঁটেছিলে সেঁটেছিলেন সেঁটেছিলেম সেঁটেছিলুম সেঁটেছিস সেঁটেছে সেঁটেছেন সেঁটেধরা সেটেলমেন্ট সেঁটো সেটতত্ত্ব সেটপদ্ধতি সেটল সেতু সেঁতা সেঁতান সেঁতানো সেতাব সেতাবি সেতার সেতারা সেতারি সেতারী সেতারেরতার সেতারবাদক সেতারবাদন সেতো সেতুবন্ধ সেতুবন্ধন সেঁতসেঁত সেঁতসেঁতে সেথা সেথো সেথুয়া সেদিক সেদিককার সেদিকে সেদিন সেদে সেদেশ সেদ্দত সেদ্ধ সেদল সেঁধান সেঁধানো সেধার সেঁধিয়ে সেধে সেধেছ সেধেছি সেধেছিল সেধেছিলাম সেধেছিলি সেধেছিলে সেধেছিলেন সেধেছিলেম সেধেছিলুম সেধেছিস সেধেছে সেধেছেন সেধো সেঁধনো সেঁধুনো সেন সেনা সেনাক্ত সেনাকর্মকর্তা সেনাজীবন সেনাদল সেনাধ্যক্ষ সেনানায়ক সেনানিবাস সেনানিবাসস্থ সেনানিবেশ সেনানী সেনাপতি সেনাপ্রধান সেনাবাহিনী সেনাবিদ্রোহ সেনাবিভাগ সেনারক্ষক সেনাশাসক সেনাশিবির সেনাসঞ্চালক সেনাসদস্য সেনি সেনিটোরিয়াম সেনেগাল সেনেগালীয় সেন্ট সেন্টার সেন্টি সেন্টিগ্রেড সেন্টিমিটার সেন্টিমেন্টাল সেন্ট্রাল সেন্ট্রালিস সেন্ট্রি সেন্ট্রো সেন্ট্রোজোম সেন্ড সেন্ডমেইল সেন্স সেনসাস সেন্সাস সেনসিটিভ সেন্সর সেন্সরকৃত সেন্সরবোর্ড সেন্সরশিপ সেপাই সেপাহসালার সেপায়া সেপিয়েন্স সেপ্টাম সেপ্টেম্বর সেপ্রকার সেপ্রীতি সেফ সেফালিকা সেফটি সেফটিপিন সেবক সেবকা সেবকাধম সেবকভাব সেবা সেবাইত সেবাকারী সেবাগেহ সেবাগ্রহীতা সেবাযত্ন সেবাদাসী সেবাদল সেবাধর্ম সেবাপরায়ণা সেবাপ্রদান সেবারূপ সেবাশুশ্রূষা সেবাসামগ্রী সেবায়েত সেবায়ত সেবিকা সেবিত সেবিতা সেবিনু সেবিষয় সেবী সেবছর সেব্য সেব্যাপার সেব্যমান সেবধি সেবন সেবনকারী সেবনীয় সেবমান সেভাবে সেভিং সেভেন সেভেন্টি সেভেন্টিজ সেম সেমই সেমাই সেমি সেমিকোলন সেমিকন্ডাক্টর সেমিজ সেমিটিক সেমিতি সেমিনার সেমিফাইনাল সেমিস্টার সেমেটিক সেমত সেমতি সেমন্তি সেমন্তী সের সেরকিয়া সেরকম সেরকমভাবে সেরকশ সেরা সেরাবাহিনী সেরারেট সেরি সেরিবেলাম সেরিব্রাল সেরিয়াম সেরে সেরেছ সেরেছি সেরেছিল সেরেছিলাম সেরেছিলি সেরেছিলে সেরেছিলেন সেরেছিলেম সেরেছিলুম সেরেছিস সেরেছে সেরেছেন সেরেফ সেরেব্রাল সেরেশতা সেরেস্তা সেরেস্তাদার সেরোটোনিন সেরূপ সেরপিছু সেল সেলক্ষ্য সেলাই সেলাইকৃত সেলাইকরা সেলাইকল সেলাইবিহীন সেলাখানা সেলাপচি সেলাপচী সেলাম সেলামআলায়কুম সেলামগাহ সেলামালকি সেলামাল্কি সেলামি সেলামী সেলামঠোকা সেলামত সেলামপাঠানো সেলামসুপারিশ সেলার সেলিম সেলেখানা সেলেট সেলেনিয়াম সেলেব্রিটি সেলুন সেলফ সেলফোন সেলবার্গ সেলমা সেলুলার সেলুলোজ সেলুলয়েড সেলস সেলসিয়াস সেশন সেশনজট সেশ্বর সেস সেসকল সেসি সেস্ত সেসব সেসমস্ত সেসময় সেসময়কার সেহ সেহাই সেহি সেহেতু সেহেরা সেহেরি সেহেরী সেহেলি সেহো সেহরি সেহলা সেহড়া সেয়ান সেয়ানা সেয়ানে সৈকত সৈকতিনী সৈকতরেখা সৈতান সৈনাপত্য সৈনিক সৈনিকবৃত্তি সৈন্য সৈন্যাধ্যক্ষ সৈন্যচালনা সৈন্যযুক্ত সৈন্যদল সৈন্যদলভুক্ত সৈন্যবাহিনী সৈন্যবিন্যাস সৈন্যবিভাগ সৈন্যবল সৈন্যশিবির সৈন্যসংস্থাপন সৈন্যসামন্ত সৈন্যস্থাপন সৈন্যসন্নিবেশ সৈন্যসমাবেশ সৈন্যসমন্বিত সৈন্যসহ সৈন্ধব সৈন্ধবলবণ সৈবো সৈমন্তিক সৈরিন্ধ্রী সৈরন্ধ্রী সৈয়দ সৈয়দা সৈয়দপুর সো সোঁ সোঁঅরা সোঁঅরি সোঁঅরিহ সোআথ সোআথি সোওয়াদ সোওয়াব সোওয়ার সোঁকা সোকানি সোকর সোঙরা সোঁঙরা সোঙরি সোচ্চার সোজা সোজানাক সোজাভাবে সোজাসুজি সোজাসুজিভাব সোঝা সোঁঞরা সোটা সোঁটা সোডা সোডাওয়াটার সোডিয়াম সোত সোঁত সোৎকণ্ঠ সোঁতা সোৎপ্রাস সোৎসুক সোৎসুকচিত্তে সোৎসাহ সোৎসাহে সোঁদা সোঁদাল সোঁদালগাছ সোঁদালি সোঁদালী সোদ্বেগ সোদর সোদরা সোদরপ্রতিম সোনা সোনাডাঙ্গা সোনাতলা সোনাদানা সোনাদিয়া সোনাপোকা সোনাপুর সোনামুখি সোনামুখী সোনামুখো সোনামুগ সোনামুঠি সোনামুঠো সোনামণি সোনামুড়া সোনার সোনারু সোনারগাঁ সোনারগাঁও সোনারচেইন সোনারচেন সোনারূপা সোনারূপো সোনারপুর সোনালু সোনালি সোনালী সোনিয়া সোনেলা সোন্দা সোপ সোপকরণ সোপাধি সোপাধিক সোপান সোপচার সোপর্দ সোপর্দকরা সোপরদ্দ সোফা সোফাসেট সোবে সোবহান সোবহানাকা সোবহানাল্লাহ সোভা সোভিয়েত সোম সোমাটিক সোমাটোট্রোপ সোমালি সোমালিয়া সোমেন সোমেশ্বর সোমত্ত সোমনাথ সোমপুর সোমবার সোমরাজ সোমরস সোমলতা সোমলতিকা সোর সোরগোল সোরা সোরাই সোরাহি সোরাহী সোরপোষ সোর্স সোর্সকোড সোরসার সোর্সেস সোর্সমুক্ত সোরসরাবত সোল সোলা সোলাকাঠি সোলাকচু সোলাটুপি সোলার সোলেনামা সোলো সোলজার সোশাল সোশালিস্ট সোশিয়লজি সোশ্যাল সোশ্যালিজম সোশ্যালিস্ট সোসাইটি সোসাইটিজ সোস্ত সোসর সোঁসর সোসরি সোহাগ সোহাগা সোহাগি সোহাগিনী সোহাগী সোহাগপুর সোহাগপ্রাপ্তা সোহায়ল সোহিনী সোহে সোহেল সোহেলা সোহন সোহবত সোহম সোহরাব সোহরত সোহরৎ সোয়া সোয়াজিল্যান্ড সোয়াতি সোয়াথ সোয়াদ সোয়াব সোয়ামি সোয়ামী সোয়ার সোয়ারি সোয়ারী সোয়ার্থমোর সোয়াল সোয়াস্তি সোয়েটার সৌকুমার্য সৌকর্য সৌক্ষ্ম্য সৌখিন সৌখিনতা সৌখীন সৌখ্য সৌগত সৌগন্ধ সৌগন্ধিক সৌগন্ধ্য সুছাঁদ সছিদ্র সৌচি সৌচিক সৌজাত্য সৌজন্য সৌজন্যচর্চিত সৌজন্যদাতা সৌজন্যস্বত্ব সৌজন্যসহকার সৌত্র সৌত্রিক সৌদামিনী সৌদি সৌদিআরব সৌধ সৌধকিরীটিনী সৌধমালা সৌধশিখর সৌধস্থল সুছন্দ সৌন্দর্য সৌন্দর্যতত্ত্ব সৌন্দর্যবিজ্ঞান সৌন্দর্যবর্ধন সৌন্দর্যময় সৌন্দর্যরূপ সৌন্দর্যসম্ভোগ সৌন্দর্যসৃষ্টি সৌন্দর্যহীন সৌন্দর্যহীনতা সৌপ্তিক সৌপর্ণ সৌবীর সৌবীরাঞ্জন সৌবর্চল সৌবর্ণ সৌভাগিনেয় সৌভাগিনেয়ী সৌভাগিন্য সৌভাগ্য সৌভাগ্যক্রমে সৌভাগ্যোদয় সৌভাগ্যযুক্ত সৌভাগ্যবান সৌভাগ্যবতী সৌভাগ্যবর্তী সৌভাগ্যবশত সৌভাগ্যশালী সৌভাগ্যসম্পন্ন সৌভাগ্যহীন সৌভিক সৌভদ্র সৌভ্রাত্র সৌম্য সৌম্যা সৌম্যতা সৌম্যদর্শন সৌম্যভাব সৌম্যমূর্তি সৌমনস্য সৌর সৌরকেন্দ্রিক সৌরকর সৌরকলঙ্ক সৌরগতি সৌরাজ্য সৌরাষ্ট্র সৌরি সৌরিক সৌঁরিক সৌরজগত সৌরজগৎ সৌরদিন সৌরদিবস সৌরবৎসর সৌরভ সৌরভযুক্ত সৌরভময়ী সৌরভর সৌরমাস সৌরমণ্ডল সৌরশক্তি সৌরশিক্ষা সৌষ্ঠব সৌসাদৃশ্য সৌহার্দ সৌহার্দ্য সৌহার্দ্যপূর্ণ সৌহার্দপূর্ণ সৌহৃদ সৌহৃদ্য সৃজক সৃজা সজাগ সজাগকাল সজাগঘুম সুজাত সুজাতা সজাতি সজাতীয় সজাতীয়া সুজান সুজানিত সজারু সুজি সৃজিত সজিনা সজিনাডাঁটা সজীব সজীবতা সুজেয় সজোর সজোরে সজ্জ সজ্জা সজ্জাকার সজ্জাকরণ সজ্জাগজ্জা সজ্জাগৃহ সজ্জাযুক্ত সজ্জাধর্মী সজ্জাহীন সজ্জিত সজ্জিতা সজ্জীকৃত সজ্জীভূত সজ্জন সজ্জনা সজ্ঞান সজ্ঞানকৃত সৃজ্যমান সজদা সজন সুজন সৃজন সুজনি সজনী সুজনী সৃজনীশক্তি সজনে সজনেডাঁটা সজনতা সুজনতা সৃজনধর্মী সৃজনবাদ সুজন্মা সৃজনশক্তি সৃজনশীল সৃজনশীলতা সজল সুজলা সজলনেত্রে সুঝ সুঝা সঞ্চান সঞ্চার সঞ্চারকারী সঞ্চারিকা সঞ্চারিণী সঞ্চারিত সঞ্চারিল সঞ্চারী সঞ্চারণ সঞ্চারপথ সঞ্চালক সঞ্চালিকা সঞ্চালিত সঞ্চালন সঞ্চালনকারী সঞ্চালনা সঞ্চালনীয় সঞ্চালনপদ সঞ্চিত সঞ্চিতা সঞ্চীয়মান সঞ্চেয় সঞ্চরক সঞ্চরিত সঞ্চরণ সঞ্চরণমাণ সঞ্চরণরত সঞ্চরণশীল সঞ্চলিত সঞ্চলন সঞ্চয় সঞ্চয়কারী সঞ্চয়িতা সঞ্চয়ী সঞ্চয়জাত সঞ্চয়যোগ্য সঞ্চয়ন সঞ্চয়নী সঞ্চয়পত্র সঞ্চয়প্রিয় সঞ্চয়স্থান সঞ্চয়হীন সঞ্চয়হেতু সঞে সঞ্জাত সঞ্জাব সঞ্জীব সঞ্জীবিত সঞ্জীবন সঞ্জীবনী সঞ্জনন সঞ্জননা সট সুট স্যুইট স্টক সটকা সটকাই সটকাইও সটকাইত সটকাইতাম সটকাইতিস সটকাইতে সটকাইতেছ সটকাইতেছি সটকাইতেছিল সটকাইতেছিলাম সটকাইতেছিলি সটকাইতেছিলে সটকাইতেছিলেন সটকাইতেছিস সটকাইতেছে সটকাইতেছেন সটকাইতেন সটকাইব সটকাইবার সটকাইবি সটকাইবে সটকাইবেন সটকাইল সটকাইলাম সটকাইলি সটকাইলে সটকাইলেন সটকাইয়া সটকাইয়াছ সটকাইয়াছি সটকাইয়াছিল সটকাইয়াছিলাম সটকাইয়াছিলি সটকাইয়াছিলে সটকাইয়াছিলেন সটকাইয়াছিস সটকাইয়াছে সটকাইয়াছেন সটকাইয়ো সটকাক সটকাচ্ছ সটকাচ্ছি সটকাচ্ছিল সটকাচ্ছিলাম সটকাচ্ছিলি সটকাচ্ছিলে সটকাচ্ছিলেন সটকাচ্ছিলেম সটকাচ্ছিলুম সটকাচ্ছিস সটকাচ্ছে সটকাচ্ছেন সটকাত সটকাতাম সটকাতিস সটকাতে সটকাতেন সটকাতেম সটকাতুম সটকান সটকানো সটকাব সটকাবার সটকাবি সটকাবে সটকাবেন সটকাবো সটকাল সটকালাম সটকালি সটকালে সটকালেন সটকালেম সটকালুম সটকাস সটকে সটকেছ সটকেছি সটকেছিল সটকেছিলাম সটকেছিলি সটকেছিলে সটকেছিলেন সটকেছিলেম সটকেছিলুম সটকেছিস সটকেছে সটকেছেন সুটকেস সটকো সুটকো সুযুক্তি সুটকরা স্টকহোম স্টাইল স্টাইলিশ স্যাঙ্গাত স্যাঙ্গাৎ স্যাঙাত স্যাঙাৎ স্যাটানিক স্যাটার্ন স্যাটেলাইট স্যাটেলাইটস স্টাডি স্টাডিজ স্যাডিস্ট সুযাত্রা স্যাতলা স্যাঁতসেঁতে স্যাঁতস্যাঁত স্যাঁতস্যাঁতে সটান স্যানিটারি স্যানিটেশন স্যান্ডুইচ স্যান্ডউইচ স্যান্ডেল সটানভাবে স্টাফ স্যামন স্যাম্পল স্যাম্পলড স্টার স্টার্চ স্টার্ট স্টার্নাম স্যালাইন স্যালুট স্টিম স্টিমার স্টিমারঘাট স্টিমারযোগে স্টিরিও স্টিল স্টিলেস স্টিলস স্টিয়ারিং সটীক স্টেজ স্টেট স্টেটমেন্ট স্টেটস স্টেটসম্যান স্টেডিয়াম স্টেথোস্কোপ স্টেন স্টেনগান স্টেনো স্টেনোগ্রাফার স্টেপ স্টেপস স্টেরিও স্টেরয়েড স্টেশন স্টেশনমাস্টার সুযোগ সুযোগ্য সুযোগ্যা সুযোগ্যতা সুযোগসন্ধানী সুযোগসুবিধা সুযোগসুবিধে সুযোজনা সুযোধন স্টোন স্টোভ স্টোর স্টোরকিপার স্টোরি স্টোরিং স্টোরেজ স্টোররুম স্টোরহাউস স্যুট সট্টক স্ট্যাচু স্ট্যাটাস স্ট্যাটিক স্ট্যাটিস্টিক স্ট্যাটিস্টিক্যাল স্ট্যান্ড স্ট্যান্ডার্ড স্ট্যান্ডার্ডস স্ট্যান্ডিং স্ট্যান্ডবাই স্ট্যানফোর্ড স্ট্যাম্প স্ট্যাম্পিং স্টুডিও স্টুডিয়ো স্টুডেন্ট স্টুডেন্টস সুযুত স্যূত স্যূতি সযত্ন সুযন্ত্রণা স্যন্দ স্যন্দিত স্যন্দী স্যন্দযুক্ত স্যন্দন স্টপ স্টুপিড স্টপেজ স্যর স্ট্রাইক স্ট্রাইকার স্ট্রাইকারস স্ট্রিং স্ট্রিক্ট স্ট্রিক্টলি স্ট্রিট স্ট্রিপ স্ট্রিপবোর্ড স্ট্রীট স্ট্রেচার স্ট্রেঞ্জ স্ট্রেঞ্জার স্ট্রেঞ্জার্স স্ট্রেস স্ট্রোক স্ট্রনটিয়াম স্টল স্টলম্যান সটসট স্টুয়ার্ড সুঠু সঠিক সঠিকডোজ সঠিকত্ব সঠিকতর সঠিকভাবে সডাক সুডোল সুডৌল সুণ সুণি সুণিআ সুণিআঁ সুণিঞাঁ সুণিলেঁ সুণী সুণীএ সুণহু সুত সূত সৃত সূতক সৎকাজ সৎকার সৎকার্য সৎকৃত সৎকৃতি সৎক্রিয়া সৎকর্ম সৎকুলজাত সুতুঙ্গ সতা সুতা সূতা সতাই সুতাটি সতাত সতাতো সতান্তর স্তাবক স্তাবকতা স্তাম্বলি স্তাম্বুলী সুতালি সতাসতিন সুতি সূতি সৃতি সুতিকা সূতিকা সূতিকাগার সূতিকাগৃহ সুতিকাপড় সুতিক্ত সূতিগৃহ সতিন সতিনকাঁটা সতিনী সতিনঝি সতিনপো সতিনপুত্র সতিনরূপ সৃতিবিদ্যা সুতিবস্ত্র স্তিমিত স্তিমিতনেত্র স্তিমিতপ্রাণ সুতিল সতী সুতী সূতী সুতীক্ষ্ণ সতীগিরি সতীঘাট সতীচ্ছদ সতীচরিত্র সতীত্ব সতীত্বকাহিনী সতীত্বধর্ম সতীত্বনাশ সতীদাহ সতীদাহপ্রথা সতীধর্ম সতীন সতীনকাঁটা সতীনঝি সতীনপো সতীপতি সতীপনা সুতীব্র সতীর্থ সতীর্থ্য সতীলক্ষ্মী সতীসাধ্বী সতীসাবিত্রী সতেজ সতেন স্তেন সতেনী সতের সতেরো সতেরশো সুতেলা সুতেলি স্তেয় স্তেয়ী স্তৈন স্তৈন্য সুতো স্তোক স্তোকবাক্য স্তোতা স্তোত্র স্তোত্রপাঠ স্তোভ সৎছেলে সত্য সত্যকার সত্যাগ্রহ সত্যাগ্রহী সত্যান্বেষী সত্যান্বেষণ সত্যানুরক্তি সত্যানুরাগী সত্যানুসন্ধান সত্যানুসন্ধানকারী সত্যানুসন্ধিৎসা সত্যাপন সত্যাপনা সত্যাশ্রয়ী সত্যাসত্য সত্যায়িত সত্যি সত্যিকার সত্যজিৎ সত্যজ্ঞানরূপ সত্যযুক্ত সত্যযুগ সত্যতা সত্যতানির্ণয় সত্যদর্শী সত্যদ্রষ্টা সত্যদৃষ্টি সত্যনারায়ণ সত্যনির্ণয় সত্যনির্ধারণ সত্যনিষ্ঠ সত্যনিষ্ঠা সত্যপালক সত্যপালন সত্যপির সত্যপীর সত্যপথ সত্যপরায়ণ সত্যপ্রিয় সত্যপ্রিয়তা সত্যপ্রতিজ্ঞ সত্যপ্রসাদ সত্যবাক্য সত্যবাদিতা সত্যবাদিনী সত্যবাদী সত্যবান সত্যবতী সত্যবদ্ধ সত্যব্রত সত্যবল সত্যভঙ্গ সত্যভাষী সত্যভাষণ সত্যমঙ্গল সত্যমিথ্যা সত্যমূলক সত্যরক্ষা সত্যরক্ষার্থে সত্যরূপ সত্যসন্ধ সত্যসন্ধান সত্যসন্ধানী সতৃণ সতত স্তুত সততা সত্তা স্তুতা সত্তাযুক্ত সত্তাহীনতা স্তুতি স্তুতিকারী স্তুতিগান স্তুতিগায়ক স্তুতিগায়িকা স্তুতিচ্ছলে স্তুতিপাঠক স্তুতিপ্রচারক স্তুতিবাক্য স্তুতিবাদ স্তুতিরূপ স্তুতিস্তুত্য স্তুত্য স্ত্ততি স্ত্ততিবাদ সত্ত্ব সত্ত্বগুণ সত্ত্বা সত্ত্বাধিকারী সত্ত্বেও সত্তম সত্তর সতুন সুতনু স্তন সুতনুকা স্তনাংশুক স্তনাগ্র স্তনাবরক স্তনাবরণ স্তনিত স্তন্য স্তনযুক্তা স্তন্যজীবী স্তন্যদুগ্ধ স্তন্যপান স্তন্যপায়ী স্তন্যপিপাসু সতন্তর সতন্তরা সতন্তরী স্তনন স্তনন্ধয় স্তনন্ধয়ী স্তনবৃন্ত স্তনহীনা স্তূপ স্তূপকরা সুতপা স্তূপাকার স্তূপাকৃতি সুতপার স্তূপীকৃত সৎপো সূতপুত্র সৎপথ সৎপরামর্শ সৎপ্রসঙ্গ স্তব স্তবক স্তবকারী স্তবকিত স্তবগান সৎবাপ সৎবিজ্ঞাতা সৎবেটা সৎবোন স্তব্ধ স্তব্ধীকৃত স্তব্ধীভূত স্তব্ধতা সত্বর সতবর্গ সৎভাই সৎভাবে সৎমেয়ে স্তম্ব স্তম্বেরম স্তম্ভ স্তম্ভগাত্র স্তম্ভাকৃতি স্তম্ভিত স্তম্ভচিত্র স্তম্ভযুক্ত স্তম্ভন স্তম্ভমূল সতর সত্র সূত্র স্তর স্ত্রু সতর্ক সূত্রকার সতর্কীকৃত সতর্কীকরণ সতর্কতা সতর্কতাজনক সতর্কতাজনিত সতর্কতাবশত সতর্কপত্র সতর্কবাণী সতর্কবার্তা সতর্কভাবে স্তরক্রম সূত্রগ্রন্থ সুতরাং সূত্রাকার সূত্রাদি সূত্রাদেশ সূত্রানুযায়ী সূত্রানুসারে সূত্রাপুর সূত্রাবলি সূত্রাবলী সূত্রার্থ সত্রাস স্তরিত স্ত্রী স্ত্রীআচার স্তরীকরণ স্ত্রীকর্তৃক স্ত্রীগমন স্ত্রীচিহ্ন স্ত্রীচরিত্র স্ত্রীজাতি স্ত্রীজীব স্ত্রীজননেন্দ্রিয় স্ত্রীযোনি স্ত্রীত্যাগ স্ত্রীত্ব স্ত্রীদূত স্ত্রীদ্বেষী স্ত্রীধন স্ত্রীধর্ম স্ত্রীনৃত্য স্ত্রীপ্যাঁচা স্ত্রীপুত্র স্ত্রীপুত্রকন্যাদিসহ স্ত্রীপুত্রসমাবৃত স্ত্রীপ্রত্যয় স্ত্রীপুরুষ স্ত্রীপশু স্ত্রীবাচক স্ত্রীবাছুর স্ত্রীবিড়াল স্ত্রীবৃন্দ স্ত্রীবন্ধু স্ত্রীবশ স্ত্রীবশ্য স্ত্রীভূত স্ত্রীভূমিকা স্ত্রীমৌমাছি স্ত্রীমূর্তি স্ত্রীমহিষ স্ত্রীরোগ স্ত্রীরোগবিদ্যা স্ত্রীরত্ন স্ত্রীরূপ স্ত্রীলক্ষণ স্ত্রীলিঙ্গ স্ত্রীলিঙ্গবাচক স্ত্রীলোক স্ত্রীশালিক স্ত্রীশিক্ষা স্ত্রীসংগম স্ত্রীসংসর্গ স্ত্রীসঙ্গম স্ত্রীস্বাধীনতা স্ত্রীস্বভাব স্ত্রীসভা স্ত্রীসম্ভোগ স্ত্রীসুলভ স্ত্রীসহবাস স্ত্রীহরণ স্তরীয় স্ত্রৈণ স্ত্রৈণতা সূত্রধার সূত্রধর সূত্রনির্ধারক সূত্রনির্ভর সূত্রনির্মিত সূত্রপাত স্তরবিন্যাস স্তরবিন্যস্ত সূত্রবৃত্তি সূত্রবদ্ধ সূত্রমতে সত্রশিখা সূত্রসমষ্টি সূত্রসহায়িকা সুতল সুতলি সূতলি সৎশাশুড়ি সৎশাশুড়ী সতুষ সতৃষ্ণ সতৃষ্ণনয়ন সৎসংসর্গ সৎসঙ্গ সৎসাহস সৎস্বভাব সৎস্বভাবা সৎস্বরূপ সুতহিবুক স্তূয়মান স্থকিত স্থগিত স্থগিতাদেশ স্থগন স্থাণু স্থাণীশ্বর স্থাণুত্ব স্থাণুবৎ স্থাতা স্থাতব্য স্থান স্থানকাল স্থানগত স্থানাংক স্থানাংকিত স্থানাঙ্ক স্থানাঙ্কায়িত স্থানান্তর স্থানান্তরকরণ স্থানান্তরিত স্থানান্তরিতা স্থানান্তরযোগ্য স্থানান্তরণ স্থানাভাব স্থানিক স্থানী স্থানচিত্র স্থানচ্যুত স্থানচ্যুতি স্থানীয় স্থানীয়করণ স্থানীয়া স্থানীয়ভাবে স্থানীয়মুদ্রা স্থানীয়সময় স্থানেঅস্থানে স্থানেশ্বর স্থানেস্থানে স্থানযুক্ত স্থানত্যাগ স্থাননির্দেশক স্থাননির্বাচন স্থানপরিবর্তন স্থানপূর্ব স্থানবাচক স্থানবদল স্থানবর্তী স্থানভেদ স্থানভ্রষ্ট স্থানসংকুলান স্থানসঙ্কুলান স্থানসম্পর্কিত স্থাপক স্থাপা স্থাপিত স্থাপিতা স্থাপিলা স্থাপ্য স্থাপত্য স্থাপত্যকর্ম স্থাপত্যকলা স্থাপত্যধারা স্থাপত্যবিজ্ঞান স্থাপত্যবিদ স্থাপত্যবিদ্যা স্থাপত্যবেদ স্থাপত্যব্যবস্থা স্থাপত্যশিল্প স্থাপত্যশৈলী স্থাপন স্থাপনকারিণী স্থাপনকারী স্থাপনকাল স্থাপনা স্থাপনীয় স্থাপনযোগ্য স্থাপনপূর্বক স্থাপয়িতা স্থাপয়িত্রী স্থাবর স্থাবরজঙ্গম স্থাবরজঙ্গমাদি স্থাল স্থালী স্থায়িত্ব স্থায়িত্বকাল স্থায়িভাব স্থায়ী স্থায়ীভাব স্থায়ীভাবে স্থিত স্থিতাবস্থা স্থিতি স্থিতিকারক স্থিতিকাল স্থিতিকরণ স্থিতিযোগ্য স্থিতিবিদ্যা স্থিতিমান স্থিতিমাপ স্থিতিমাপক স্থিতিরক্ষক স্থিতিলাভ স্থিতিশক্তি স্থিতিশীল স্থিতিশীলতা স্থিতিসাধক স্থিতিসাম্য স্থিতিস্থাপক স্থিতিস্থাপকতা স্থিতধী স্থিতপ্রজ্ঞ স্থির স্থিরকরণ স্থিরা স্থিরানুপাতিক স্থিরাবস্থা স্থিরায়ু স্থিরীকৃত স্থিরীকরণ স্থিরচিত্ত স্থিরচিত্ততা স্থিরচিত্র স্থিরীভূত স্থিরযৌবনা স্থিরতা স্থিরতত্ত্ব স্থিরত্ব স্থিরদৃষ্টি স্থিরনিশ্চয় স্থিরনেত্র স্থিরপদ স্থিরপ্রতিজ্ঞ স্থিরবিন্দু স্থিরব্যয় স্থিরবুদ্ধি স্থিরভাবে স্থিরমাত্রিক স্থিরসংকল্প স্থিরসিদ্ধান্ত স্থেয় স্থৈতিকশক্তি স্থৈর্য স্থৈর্যহীন স্থৌল্য স্থূণ স্থূণা স্থণ্ডিল স্থণ্ডিলশায়ী স্থপতি স্থপতিকলা স্থবির স্থবিরা স্থবিরতা স্থবিরত্ব স্থবিরবাদ স্থল স্থূল স্থূলকায় স্থূলকোণ স্থূলকোণী স্থলকমল স্থূলাকার স্থূলাঙ্গ স্থূলাঙ্গী স্থূলান্ত্র স্থলাভিষিক্ত স্থলারবিন্দ স্থলী স্থলচর স্থূলচর্ম স্থলীয় স্থূলোদর স্থলজ স্থলযুদ্ধ স্থূলত স্থূলতা স্থূলত্ব স্থূলদেহ স্থূলদর্শী স্থূলদৃষ্টি স্থলপথ স্থলপদ্ম স্থলপৃষ্ঠ স্থলবাণিজ্য স্থলবাহিনী স্থলবেষ্টিত স্থূলবুদ্ধি স্থলবন্দর স্থলভাগ স্থূলভাবে স্থলভূমি স্থূলস্কন্ধ স্থলসাম্রাজ্য সুদ সুদুঃখিত সুদুঃসহ সদকা সুদক্ষ সুদকষা সুদক্ষিণ সুদক্ষিণা সুদখোর সদগোপ সদ্গতি সদগুরু সুদগ্রহণপূর্বক সদা সদাই সদাক্রুদ্ধ সদাগতি সদাগর সদাগরি সদাচার সদাচারিণী সদাচারী সদাচারসম্পন্ন সদাচারহীন সদাচরণ সদাজাগ্রত সদাজাগ্রৎ সদাতৃপ্ত সদাত্মা সুদান সুদানীয় সদানন্দ সদানন্দময় সদানন্দময়ী সদাপুষ্প সদাফল সদাব্রত সুদাম সুদামা সুদারুণ সদালাপ সদালাপকারী সদালাপী সদাশিব সদাশিবগড় সদাশ্রুত সদাশয় সদাশয়া সদাশয়তা সদাসক্রিয় সদাসর্বদা সুদি সুঁদি সদিচ্ছা সদিচ্ছে সুদিঠি সুদিন সদিয়াল সুদী সুঁদী সুদীন সুদীপ সুদীপ্ত সুদীর্ঘ সুদীর্ঘকাল সুদেআসলে সদ্য সদ্যঃপাতী সদ্যঃপ্রসূত সদ্যউদিত সদ্যকৃত সদযুক্তি সদ্যখন্ডিত সদ্যঘটিত সদ্যোজাগ্রৎ সদ্যোজাত সদ্যোজীবী সদ্যোমুক্ত সদ্যোমৃত সদ্যোমৃতা সদ্যজাত সদ্যজোড়া সদ্যতরুণ সদ্যপক্ব সদ্যপাতী সদ্যপ্রসূত সদ্যপ্রসূতা সদ্যবিধবা সদ্যবিবাহিত সদ্যব্যস্ত সদ্যভুক্ত সদ্যমুক্ত সদ্যমৃত সদ্যমৃতা সদ্যসদ্য সদ্যস্নাত সদ্যস্নাতা সদ্যস্বাধীন সুদতী সদুত্তর সদুদ্দেশ্য সুদ্দুর সুদ্ধ সদ্ধর্ম সদন সূদন সুদন্ত সুদন্তী সদনুষ্ঠান সদুপায় সদুপদেশ সদুপদেশক সদ্বংশ সদ্বংশীয় সদ্বংশজাত সদ্বক্তা সদ্বাক্য সদ্বিচার সদ্বিদ্যাবলী সদ্বিবেচক সদ্বিবেচনা সদ্বিবেচনাকারী সদ্ব্যবহার সদ্বৃত্ত সদ্বৃত্তি সদ্বুদ্ধি সদ্ভাব সদ্ভাবযুক্ত সদ্ভাবনা সদ্ভাবস্থাপন সদভিপ্রায় সদ্ম সুদম সদমা সদম্ভ সদর সুদূর সদরঅন্দর সদরআমিন সদরআলা সদরকাছাড়ি সদরখাজনা সদরঘাট সদরালা সদরি সদুরি সুদুরি সুঁদরি সুদূরিকা সদুরিয়া সুঁদরী সদুরে সদরজমা সুদূরতা সদর্থক সদরদপ্তর সদরদরজা সদর্প সুদূরপরাহত সুদূরপ্রসারী সুদূরবিস্তৃত সুদূরবর্তী সুদুর্বহ সদরমালগুজার সদরমেট সদরমোকাম সদরমফস্বল সুদুর্লভ সুদর্শ সুদর্শন সুদর্শনা সুদর্শনচক্র সদল সদলবল সদৃশ সদৃশীকরণ সুদৃশ্য সদৃশতা সদৃশবিধান সদৃশভাবে সুদুষ্কর সুদৃষ্ট সুদৃষ্টি সুদসংক্রান্ত সদস্য সদস্যা সদস্যতা সদস্যতালিকা সদস্যপদ সদস্যরাষ্ট্র সদসৎ সুদুস্ত্যজ সুদুস্তর সুদসুদ্ধ সুদস্বরূপ সুদসমেত সুদসহ সুদৃড়গাঁথনি সুদৃড়গাঁথুনি সুদৃঢ় সদয় সুধু সুধা সুধাংশু সুধাংশুরঞ্জন সুধাকার সুধাকণ্ঠ সুধাকর সুধাজীবী সুধাতুল্য সুধাদ্রব সুধাধবল সুধাধবলিত সুধান সুধানিধি সুধানো সুধাপাত্র সুধাপান সুধাপূর্ণ সুধাবাস সুধাবর্ষী সুধামুখ সুধামুখী সুধামাখা সুধাময় সুধাময়ী সুধারা সুধারানী সুধারাম সুধারামপুর সুধারুচি সুধারস সুধাসার সুধাসিক্ত সুধাসিন্ধু সুধাস্পর্ধী সুধাসব সুধাসমুদ্র সুধাহৃৎ সুধাহর সুধাহস্ত সুধী সুধীমহল সুধীর সুধন্বা সুধন্বী সধবা সধবাত্ব সধর্মা সুধর্মা সধর্মিণী সধর্মী সধর্মচারিণী সন সুন সূনু সনা সুনা সনাক্ত সনাক্তকারী সনাক্তকরণ সুনাগরিক সুনাজমি স্নাত স্নাতক স্নাতকোত্তর স্নাতা স্নাতানুলিপ্ত সনাতন সনাতনী সনাতনধর্ম সনাতনপ্রথা সনাতস সনাথ সনাথা সনাদি স্নান স্নানকারী স্নানঘাট স্নানাগার স্নানার্থী স্নানিকা স্নানীয় স্নানোৎসব স্নানোদক স্নানযাত্রা স্নাপক স্নাপিকা স্নাপিত স্নাপন স্নাপনকারী সুনাবেদা সুনাব্য সুনাভ সনাম সুনাম সুনামগঞ্জ সুনামি সুনামিদুর্গত সনাল সুনালী সুনাস সুনাসা সুনাসিক সুনাসিকা স্নায়ু স্নায়ুকোষ স্নায়ুকলা স্নায়ুক্লান্ত স্নায়ুগত স্নায়ী স্নায়ুচিত্র স্নায়ুজাল স্নায়ুযুদ্ধ স্নায়ুতন্তু স্নায়ুতন্ত্র স্নায়ুদৌর্বল্য স্নায়ুধারী স্নায়ুপীড়া স্নায়বিক স্নায়ুবিক স্নায়ুবিকার স্নায়ুবিজ্ঞান স্নায়ুবিজ্ঞানী স্নায়ুবিদ্যা স্নায়ুবিষ স্নায়বীয় স্নায়ুরোগ স্নায়ুসন্ধি সনি স্নিগ্ধ স্নিগ্ধকর স্নিগ্ধা স্নিগ্ধতা স্নিগ্ধরুচি সুনিদ্র সুনিদ্রা সুনিপুণ সুনিপুণা সুনিবিড় সুনিভৃত সুনির্ণীত সুনির্দিষ্ট সুনির্দিষ্টভাবে সুনির্ধারিত সুনির্ধারণ সনির্বদ্ধ সনির্বন্ধ সুনির্মিত সুনির্মল সুনিশ্চিত সুনিশ্চয় সুনিয়ত সুনিয়ন্ত্রিত সুনিয়ন্ত্রণ সুনিয়ম সনী সুনীতি সুনীল সনীড় স্নেক সনেট সনেটগুচ্ছ সুনেত্রা সনেহ সুনেহ স্নেহ স্নেহার্থী স্নেহার্দ্র স্নেহালিঙ্গন স্নেহাশিস স্নেহাশীর্বাদ স্নেহাস্পদ স্নেহাস্পর্শ স্নেহী স্নেহযুক্ত স্নেহদ্রাব্য স্নেহধন্য স্নেহনিলয় স্নেহপাণি স্নেহপাত্র স্নেহপাত্রী স্নেহপুত্তলি স্নেহপদার্থ স্নেহপ্রকাশ স্নেহপরায়ণ স্নেহপ্রীতি স্নেহপূর্ণ স্নেহবর্জিত স্নেহবস্তু স্নেহভাজন স্নেহভালোবাসা স্নেহভরে স্নেহমমতা স্নেহময় স্নেহরূপ স্নেহরস স্নেহশীল স্নেহসম্বোধন স্নেহসম্ভাষণ স্নেহহীন স্নো স্নোবল সনোমিটার স্নোমোবাইল সুনজর সন্ত সূনৃত সন্তাগার সন্তান সন্তানক সন্তানাদি সন্তানোচিত সন্তানোৎপাদক সন্তানোৎপাদন সন্তানজন্ম সন্তানধারণ সন্তানপালক সন্তানপালন সন্তানপ্রসব সন্তানপ্রসবকারিণী সন্তানপ্রসবজনিত সন্তানবাৎসল্য সন্তানবান সন্তানবতী সন্তানরূপ সন্তানলাভ সন্তানসন্ততি সন্তানসমেত সন্তানসম্ভাবনা সন্তানসম্ভবা সন্তানহারা সন্তানহীন সন্তানহীনা সন্তাপ সন্তাপক্লিষ্ট সন্তাপিত সন্তাপী সন্তাপজনক সন্তাপযুক্ত সন্তাপদান সন্তাপন সন্তাপহর সনতারিখ সন্তালন সন্তোষ সন্তোষকারিণী সন্তোষিত সন্তোষী সন্তোষজনক সন্তোষযুক্ত সন্তোষপুর সন্তোষবিধান সন্তোষবিধায়ক সন্তোষবিধায়িত্রী সন্তোষসাধন সন্তোষসম্পাদন সন্তত সন্ততি সন্ততিহীন সন্তপ্ত সন্ত্রাস সন্ত্রাসিক সন্ত্রাসিত সন্ত্রাসিতা সন্ত্রাসী সন্ত্রাসযুক্ত সন্ত্রাসবাদ সন্ত্রাসবাদী সন্ত্রাসমুক্ত সন্তরণ সন্তরণকারী সন্তরণদক্ষ সন্তরণপটু সন্তরণবিদ সন্তরণরত সন্তর্পিয়া সন্তর্পণ সন্ত্রস্ত সন্ত্রস্তা সন্তলন সন্তুষ্ট সন্তুষ্টকরণ সন্তুষ্টা সন্তুষ্টি সন্তুষ্টিসাধক সন্তুষ্টচিত্ত সনদ সন্দ সুন্দ সন্দংশ সন্দংশিকা সন্দংশী সন্দুক সুন্দা সুন্দি সন্দিগ্ধ সন্দিগ্ধা সন্দিগ্ধচিত্ত সন্দিগ্ধতা সন্দিষ্ট সন্দিহান সন্দীপ সন্দীপক সন্দীপিত সন্দীপ্ত সন্দীপন সন্দীপনী সুন্দীয় সন্দে সন্দেশ সন্দেশহর সন্দেহ সন্দেহকারী সন্দেহাকুল সন্দেহাতীত সন্দেহাতীতভাবে সন্দেহজনক সন্দেহজনকভাবে সন্দেহযুক্ত সন্দেহনিরসন সন্দেহবাতিক সন্দেহভাজন সন্দেহভঞ্জন সন্দেহহীন সনদপত্র সন্দ্বীপ সুন্দর সুন্দরগঞ্জ সুন্দরগড় সুন্দরি সুন্দরী সুন্দরীশ্রেষ্ঠা সুন্দরতা সুন্দরতম সুন্দরনগর সুন্দরপুর সুন্দরবন সন্দর্ভ সুন্দরভাবে সন্দর্ভমালা সন্দর্শন সুন্দরহানো সন্দল সন্দষ্ট সন্ধুক্ষিত সন্ধুক্ষণ সন্ধান সন্ধানকারী সন্ধানিত সন্ধানী সন্ধানীয় সন্ধানজনিত সন্ধানপুস্তক সন্ধানলাভ সন্ধানসুলুক সন্ধাভাষা সন্ধায়ী সন্ধি সুন্ধি সন্ধিকাল সন্ধিক্ষণ সন্ধিচুক্তি সন্ধিচোর সন্ধিযুক্ত সন্ধিত সন্ধিৎসু সন্ধিৎসা সন্ধিপূজা সন্ধিপত্র সন্ধিপথ সন্ধিপদ সন্ধিবাত সন্ধিবিগ্রহ সন্ধিবিচ্ছেদ সন্ধিবদ্ধ সন্ধিবন্ধ সন্ধিভঙ্গ সন্ধিমুক্ত সন্ধিমুখ সন্ধিস্থান সন্ধিস্থাপন সন্ধিস্থল সন্ধে সন্ধেবেলা সন্ধেয় সন্ধ্যা সন্ধ্যাআহ্নিক সন্ধ্যাকাল সন্ধ্যাকালীন সন্ধ্যাতারা সন্ধ্যাত্রয় সন্ধ্যাদীপ সন্ধ্যাদীপাদি সন্ধ্যাপ্রদীপ সন্ধ্যাবেলা সন্ধ্যাব্যাপী সন্ধ্যাবন্দনা সন্ধ্যাবন্দনাদি সন্ধ্যাভাষা সন্ধ্যামণি সন্ধ্যারাগ সন্ধ্যারতি সন্ধ্যালোক সন্ধ্যাসক্রিয় সন্ধ্যাসব সন্ধ্যাহ্নিক সন্ধ্যে সন্না সন্নাটা সন্নাহ সন্নাহ্য সুন্নি সন্নিকট সন্নিকটস্থ সন্নিকর্ষ সন্নিকর্ষণ সন্নিকৃষ্ট সুন্নিজামাত সন্নিধাতা সন্নিধান সন্নিধানগত সন্নিধানজনিত সন্নিধি সন্নিপাত সন্নিপাতিকজ্বর সন্নিবিষ্ট সন্নিবেশ সন্নিবেশিত সন্নিবৃত্ত সন্নিবৃত্তি সন্নিবদ্ধ সন্নিবন্ধ সন্নিবন্ধন সন্নিভ সন্নিহিত সন্নিহিতকোণ সন্নিয়োগ সন্নেসী সন্ন্যাস সন্ন্যাসগ্রহণ সন্ন্যাসাশ্রম সন্ন্যাসিনী সন্ন্যাসী সন্ন্যাসজীবন সন্ন্যস্ত সন্নত সুন্নত সুন্নৎ সন্নতি সনন্দ সুনন্দ সুনন্দা সন্নদ্ধ স্নব স্নবারি সনবী সন্মার্গ সন্মার্গী স্নুষা সুনসান সনসন সনহাল সুনয়ন সুনয়না সুনয়নী সপ সুপ সূপ সঁপুক সূপকার সুপক্ব সপক্ষ সপক্ষতা সঁপা সপাং সপাংসপাং স্পাই স্পাইক স্পাইডার স্পাইনাল স্পাইরাল স্পাইরোমিটার সুপাচ্য সুপাঠ্য সপাৎ সুপাত্র সুপাত্রী সপাৎসপাৎ সপাদ সুপার স্পার্ক স্পার্কি সুপারকন্ডাক্টার সুপারকন্ডাক্টিভিটি সুপারকম্পিউটার সুপারকম্পিউটিং সুপারগ সুপারি সুপারিন্টেনডেন্ট সুপারিবাগান সুপারিশ সুপারিশকৃত সুপারিস সুপারনোভা সুপারন্যাচারাল সুপারফিশিয়াল সুপারফ্যামিলি সুপারভাইজার সুপারমার্কেট সুপারম্যান সুপারমডেল সুপার্শ্ব সুপারস্ক্রিপ্ট সুপারস্টার সুপারস্ট্রিং সুপারসনিক সুপারহিট সুপারহিরো সপাসপ সঁপি স্পিক স্পিকার স্পিচ স্পিড স্পিডি স্পিডোমিটার স্পিডলাইন সপিণ্ড সপিণ্ডীকরণ সপিণ্ডতা সপিণ্ডন সঁপিত সঁপিতাম সঁপিতিস সঁপিতে সঁপিতেছ সঁপিতেছি সঁপিতেছিল সঁপিতেছিলাম সঁপিতেছিলি সঁপিতেছিলে সঁপিতেছিলেন সঁপিতেছিস সঁপিতেছে সঁপিতেছেন সঁপিতেন স্পিন সপিনা স্পিনার স্পিনার্স সঁপিব সঁপিবার সঁপিবি সঁপিবে সঁপিবেন স্পিরিট স্পিরিটেড সুপিরিয়র সঁপিল সঁপিলাম সঁপিলি সঁপিলে সঁপিলেন সঁপিস সপিয়া সঁপিয়া সঁপিয়াছ সঁপিয়াছি সঁপিয়াছিল সঁপিয়াছিলাম সঁপিয়াছিলি সঁপিয়াছিলে সঁপিয়াছিলেন সঁপিয়াছিস সঁপিয়াছে সঁপিয়াছেন স্পিয়ার সঁপিয়ো সুপচ স্পীকার স্পীচ সপুচ্ছ স্পীড সঁপে স্পেকট্রাম সঁপেছ সঁপেছি সঁপেছিল সঁপেছিলাম সঁপেছিলি সঁপেছিলে সঁপেছিলেন সঁপেছিলেম সঁপেছিলুম সঁপেছিস সঁপেছে সঁপেছেন সপেটা সঁপেন স্পেন স্পেনীয় স্পেনপোর্ট স্পেল স্পেলিং স্পেশাল স্পেশালিষ্ট স্পেস স্পেসিফিক স্পেসিফিকেশন সুপেয় সঁপো স্পোক স্পোর্ট স্পোর্টিং স্পোর্টস সঁপছ সঁপছি সঁপছিল সঁপছিলাম সঁপছিলি সঁপছিলে সঁপছিলেন সঁপছিলেম সঁপছিলুম সঁপছিস সঁপছে সঁপছেন স্পঞ্জ স্পঞ্জি স্পঞ্জসদৃশ স্পট স্পটগ্রাম সপটা স্প্যানিশ স্প্যানীয় সপটানো স্প্যাম স্পুটনিক সুপঠিত সুপণ্ডিত সপ্ত সুপ্ত সঁপত সৃপ্ত সপ্তক সপ্তকাণ্ড সপ্তকী সপ্তগ্রাম সপ্তা সপ্তাংশু সপ্তাঙ্গ সঁপতাম সপ্তাশীতি সপ্তাশীতিতম সপ্তাশীতিতমী সপ্তাশ্চর্য সপ্তাশ্ব সপ্তাহ সপ্তাহান্ত সপ্তাহব্যাপী সুপ্তি সুপ্তিকালীন সঁপতিস সপ্তচ্ছদ সপ্তচত্বারিংশ সপ্তচত্বারিংশত্তম সপ্তচত্বারিংশত্তমী সঁপতে সঁপতেন সঁপতেম সুপ্তোত্থিত সুপ্তোত্থিতা সুপ্ততাপ সপ্ততার সপ্ততাল সপ্ততি সপ্ততিতম সপ্ততিতমী সপ্ততন্ত্রী সপ্তত্রিংশৎ সপ্তত্রিংশত্তম সপ্তত্রিংশত্তমী সপ্ততল সপ্তদীপা সপ্তদ্বীপ সপ্তদ্বীপা সপ্তদশ সপ্তদশী সপ্তধা সপ্তধাতু সপত্ন সপত্নী সপত্নীক সপত্নীকন্যা সপত্নীজাত সপত্নীতুল্য সপত্নীপুত্র সপ্তনবতি সপ্তনবতিতম সপ্তনবতিতমী সপ্তপাতাল সপ্তপঞ্চাশত্তম সপ্তপঞ্চাশত্তমী সপ্তপদ সপ্তপদী সপ্তপর্ণ সপ্তপ্রদীপ সপ্তপুরুষান্তর্গত সপ্তবায়ু সপ্তবিংশতি সপ্তবিংশতিতম সপ্তবিংশতিতমী সপ্তভুবন সপ্তভূমি সপ্তম সঁপতুম সপ্তমাংশ সপ্তমাতা সপ্তমী সপ্তমীতিথি সপ্তমধুকর সপ্তমপুরুষ সপ্তমস্বর সপ্তমসুর সপুত্র সুপত্র সুপুত্র সপুত্রক সপ্তরক্ত সপ্তরথী সপ্তর্ষি সপ্তর্ষিমণ্ডল সপ্তলোক সপ্তশতী সপ্তষষ্টি সপ্তষষ্টিতম সপ্তষষ্টিতমী সপ্তসাগর সপ্তসিন্ধু সপ্তস্তম্ভ সপ্তস্বর সপ্তস্বর্গ সপ্তস্বরা সপ্তসমুদ্র সপ্তসুর সুপথ সুপথগামী সুপথ্য সুপদ্য সঁপুন সপনো সুপন্থা স্পন্দ স্পন্দক স্পন্দিত স্পন্দন স্পন্দনযুক্ত স্পন্দনবেগ স্পন্দনরহিত স্পন্দনশীল স্পন্দনশূন্য স্পন্দনহীন স্পন্দমান স্পন্দরহিত স্পন্দশূন্য স্পন্দহীন স্পন্সর স্পন্সরকৃত স্পন্সরশীপ সঁপব সঁপবার সঁপবি সঁপবে সঁপবেন সঁপবো সুপ্রকাশ সুপুরুখ সুপ্রাচীন সুপ্রাচীনকাল সুপ্রাচ্য সুপ্রাপ্য সুপুরি স্প্রিং স্প্রিংযুক্ত স্প্রিংফিল্ড সুপরিকৃত সুপরিকল্পিত সুপরিচালিত সুপরিচিত সুপরিজ্ঞাত সুপরিণাম সুপরিণত সপরিবার সুপরিবাহী সুপ্রিম সুপ্রিমকোর্ট সুপ্রিয় সুপ্রিয়া সুপ্রীত স্প্রে স্প্রেড স্প্রেডশিট সুপ্রজাবতী সুপ্রজননবিদ সুপ্রজননবিদ্যা সুপ্রযুক্ত সপর্যা সুপর্ণ সুপর্ণা সুপ্রণালি সুপর্ণী সপ্রতিভ সুপ্রতিভা সুপ্রতিষ্ঠ সুপ্রতিষ্ঠা সুপ্রতিষ্ঠিত সুপ্রতীক সুপ্রতীত সুপ্রতুল স্পর্ধা স্পর্ধাকারী স্পর্ধাযুক্ত স্পর্ধিত স্পর্ধিতা স্পর্ধী সুপর্বা সুপ্রভ সুপ্রভা সুপ্রভাত সুপ্রভাব সপ্রমাণ সুপ্রলাপ স্পর্শ স্পর্শক স্পর্শকাতর স্পর্শকাতরতা স্পর্শকারী স্পর্শক্রামী স্পর্শক্ষম স্পর্শিনী স্পর্শী স্পর্শেন্দ্রিয় স্পর্শজনিত স্পর্শতা স্পর্শদোষ স্পর্শধ্বনি স্পর্শন স্পর্শনীয় স্পর্শনেন্দ্রিয় স্পর্শবিহীন স্পর্শবর্ণ স্পর্শমাত্র স্পর্শমণি সুপ্রশস্ত স্পর্শহীন স্পর্শহীনতা সুপুরুষ সুপ্রসাদ সুপ্রসারিত সুপ্রসিদ্ধ সুপ্রসিদ্ধা সুপ্রসিদ্ধি সুপ্রসন্ন সুপ্রসব সুপ্রয়োগ সঁপল সঁপলাম সঁপলি স্প্লিন স্প্লিন্ট সঁপলে সঁপলেন সঁপলেম সঁপলুম স্পৃশ্য সুপুষ্ট স্পষ্ট স্পৃষ্ট স্পষ্টাক্ষর স্পষ্টাচ্চারণ স্পষ্টাস্পষ্টি স্পৃষ্টি স্পষ্টীকৃত স্পষ্টীকরণ স্পষ্টত স্পষ্টতা স্পৃষ্টতা স্পষ্টতর স্পৃষ্টধ্বনি স্পৃষ্টপ্রায় স্পষ্টবক্তা স্পষ্টবাদিতা স্পষ্টবাদিনী স্পষ্টবাদী স্পষ্টভাবে স্পষ্টভাষিণী স্পষ্টভাষিতা স্পষ্টভাষী স্পষ্টস্বর সপুষ্পক সপসপ স্পৃহা স্পৃহাযুক্ত স্পৃহানুযায়ী স্পৃহালু স্পৃহাহীন স্পৃহণীয় স্ফাটিক স্ফার স্ফারিত স্ফারণ সুফি স্ফিংক্স সফিন সফিনা সফিনামা সুফিবাদ সুফিয়া সূফী সূফীকবি স্ফীত স্ফীতা স্ফীতি স্ফীতিজনিত স্ফীতিরোগ স্ফীতিশীলতা স্ফীতিহীন স্ফীতোদর সূফীতত্ত্ব সূফীবাদ সূফীমত সফেদ সুফেদ সফেদা সফেদি সফেন সুফেন স্ফোট স্ফোটক স্ফোটন স্ফোটনী স্ফোটবাদ সফট স্ফুট সফটওয়ার সফটওয়্যার স্ফটিক স্ফটিকগিরি স্ফটিকাকার স্ফটিকীভূত স্ফটিকীভবন স্ফটিকনির্মিত স্ফটিকমণি স্ফুটিত স্ফুটন স্ফুটনাংক স্ফুটনাঙ্ক স্ফুটনোন্মুখ স্ফুটনবিন্দু স্ফুটবাক সফর সফরকারী সফরকাল স্ফুরা সফরি সফরিকলা স্ফুরিছে স্ফুরিত সফরিয়া সফরী সফরীনৃত্য স্ফুরে স্ফুরণ স্ফূর্ত স্ফূর্তি স্ফূর্তিযুক্ত স্ফূর্তিবাজ স্ফূর্তিমান স্ফূর্তিহীনতা সফরনামা সফররত সফরসঙ্গী সফল সুফল সফলকাম সফলা সুফলা স্ফুলিঙ্গ সফলীকৃত সফলতা সফলতালাভ সফলতম সুফলদায়ক সুফলপ্রদ সুফলপ্রসূ সফলভাবে সব স্ব সবংশ সবক স্বক সবকাজ সবকিছু স্বকীয় স্বকীয়া স্বকীয়তা সবকটি স্বকৃত সুবক্তা স্বকৃতভঙ্গ সবকথা স্বকথিত স্বকর্ম স্বকর্মদোষ স্বকর্মসাধন সবক্ষেত্র সবকয়টি স্বখাত স্বখাতসলিল সবখানে সবখেলা স্বগত স্বগতোক্তি স্বগ্রাম স্বগৃহ স্বঘোষিত সুবঙ্কিম সুবা সবাই সবাক সবাকার সবাকচিত্র সুবাক্য স্বাক্ষর স্বাক্ষরকারী স্বাক্ষরিত স্বাক্ষরযুক্ত স্বাক্ষরতা স্বাক্ষরহীন স্বাগত স্বাগতিক স্বাগতভাষণ স্বাগতম স্বাগতসম্ভাষণ স্বাচ্ছন্দ্য স্বাচ্ছন্দ্যদায়ী স্বাচ্ছন্দ্যবোধ সুবাজাত স্বাজাতিক স্বাজাতিকতা স্বাজাত্য সুবাতাস স্বাতি স্বাতী স্বাতন্ত্র্য স্বাতন্ত্র্যবোধ স্বাতন্ত্র্যমণ্ডিত স্বাত্মা সুবাদ স্বাদ স্বাদু স্বাদকারক স্বাদকোরক স্বাদগন্ধযুক্ত স্বাদগ্রহণ স্বাদগ্রহণকারী স্বাদগ্রহণক্ষমতা সুবাদার সুবাদারি সুবাদারী স্বাদিত স্বাদিষ্ঠ সুবাদে স্বাদেন্দ্রিয় স্বাদেশিক স্বাদেশিকতা স্বাদযুক্ত স্বাদুতা স্বাদন স্বাদবিহীন স্বাদবোধ স্বাদবৃদ্ধিকারক স্বাদহীন স্বাধিকার স্বাধিকারপ্রমত্ত স্বাধিকারবোধ স্বাধিষ্ঠান স্বাধীন স্বাধীনচেতা স্বাধীনতা স্বাধীনতাকামী স্বাধীনতাকেন্দ্র স্বাধীনতাযুদ্ধ স্বাধীনতাদিবস স্বাধীনতাপূর্ব স্বাধীনতাবিরোধী স্বাধীনতালাভ স্বাধীনতাহীন স্বাধীনদল স্বাধীনভাবে স্বাধ্যায় স্বাধ্যায়ী স্বাধ্যায়বান সবান্ধব স্বানুভাব স্বানুষ্ঠিত স্বাপ্নিক স্বাবলম্ব স্বাবলম্বিতা স্বাবলম্বিনী স্বাবলম্বী স্বাবলম্বন স্বাভাবিক স্বাভাবিকীকৃত স্বাভাবিকতা স্বাভাবিকভাবে স্বাভাষিকতা স্বামিত্ব স্বামিনী স্বামী স্বামীগৃহ স্বামীজি স্বামীজী স্বামীপুত্র স্বামীপরিত্যক্তা স্বামীবাগ স্বামীবিবর্জিতা স্বামীস্ত্রী স্বামীহীনা স্বামীহন্ত্রী সবার সুবার স্বারক সবারি সবারী স্বার্থ স্বার্থান্ধ স্বার্থান্বেষী স্বার্থান্বেষণ স্বার্থান্বেষণকারী স্বার্থচিন্তা স্বার্থোদ্ধত স্বার্থোন্মত্ত স্বার্থত্যাগ স্বার্থত্যাগী স্বার্থপর স্বার্থপরায়ণ স্বার্থপরায়ণতা স্বার্থপরতা স্বার্থবোধহীন স্বার্থবুদ্ধি স্বার্থবুদ্ধিসম্পন্ন স্বার্থরক্ষা স্বার্থসংরক্ষণ স্বার্থসংশ্লিষ্ট স্বার্থসাধন স্বার্থসিদ্ধ স্বার্থসিদ্ধি স্বার্থহীন সুবাস সুবাসিত সুবাসিনী স্বাস্থ্য স্বাস্থ্যকেন্দ্র স্বাস্থ্যকর স্বাস্থ্যকুশল স্বাস্থ্যখাত স্বাস্থ্যগত স্বাস্থ্যোদ্ধার স্বাস্থ্যোন্নতি স্বাস্থ্যযুক্ত স্বাস্থ্যনাশ স্বাস্থ্যনিবাস স্বাস্থ্যপালন স্বাস্থ্যপদ স্বাস্থ্যপরীক্ষা স্বাস্থ্যপ্রদ স্বাস্থ্যবান স্বাস্থ্যবিদ্যা স্বাস্থ্যবিধি স্বাস্থ্যবর্ধক স্বাস্থ্যভঙ্গ স্বাস্থ্যমন্ত্রী স্বাস্থ্যরক্ষা স্বাস্থ্যশিক্ষা স্বাস্থ্যসেবা স্বাস্থ্যসেবাখাত স্বাস্থ্যসম্মত স্বাস্থ্যসম্মতভাবে স্বাস্থ্যহানি স্বাস্থ্যহীন স্বাস্থ্যহীনতা সুবাহ স্বাহা স্বাহার স্বায়ত্ত স্বায়ত্তীকরণ স্বায়ত্তশাসিত স্বায়ত্তশাসন স্বায়ম্ভুব সবি সবিকল্প সুবিকশিত সুবিখ্যাত সুবিচার সুবিচারক সুবিজ্ঞাত সবিতা সবিতাব্রত সবিতৃতনয় সবিতৃমণ্ডল সবিত্রী সুবিদিত সুবিধা সুবিধাজনক সুবিধাজনকভাবে সুবিধাযুক্ত সুবিধাদান সুবিধাদি সুবিধান সুবিধাপ্রাপ্ত সুবিধাবাদী সুবিধাভোগী সুবিধার্থে সুবিধি সুবিধে সুবিধেজনক সুবিনীত সুবিনীতা সুবিন্যাস সুবিন্যস্ত সুবিন্যস্তকরণ স্বিন্ন সবিনয় সুবিনয় সবিনয়পূর্বক সুবিপুল সুবিপুলা সুবিবেচক সুবিবেচনা সবিভক্তিক সুবিমল সবিরাম সবিরামজ্বর সুবিশাল সবিশেষ সুবিশেষ সবিস্তার সুবিস্তীর্ণ সুবিস্তৃত সবিস্তর সবিস্ময় সুবিহিত স্বীকার স্বীকারকারী স্বীকারকল্প স্বীকারোক্তি স্বীকার্য স্বীকারপত্র স্বীকারপূর্বক স্বীকৃত স্বীকৃতি স্বীকৃতিপত্র স্বীকৃতিবিহীন স্বীকরণ স্বচক্ষে সবচাইতে স্বচালিত সবচিন সবচিনা সবচে সবচেয়ে স্বচ্ছ স্বচ্ছজল স্বচ্ছতা স্বচ্ছত্ব স্বচ্ছন্দ স্বচ্ছন্দতা স্বচ্ছভাবে স্বচ্ছমণি স্বচ্ছসলিলা সবীজ সুবচন সুবচনী সুবীর স্বীয় স্বীয়া সবে সুবে সবেগ স্বেচ্ছা স্বেচ্ছাকৃত স্বেচ্ছাকর্মী স্বেচ্ছাক্রমে স্বেচ্ছাচার স্বেচ্ছাচারকারী স্বেচ্ছাচারিণী স্বেচ্ছাচারিতা স্বেচ্ছাচারী স্বেচ্ছাতন্ত্র স্বেচ্ছাধীন স্বেচ্ছানুবর্তিতা স্বেচ্ছানুবর্তিনী স্বেচ্ছানুবর্তী স্বেচ্ছাপ্রণোদিত স্বেচ্ছাব্রতী স্বেচ্ছামৃত্যু স্বেচ্ছার্থক স্বেচ্ছাশ্রম স্বেচ্ছাসেবক স্বেচ্ছাসেবকা স্বেচ্ছাসেবা স্বেচ্ছাসেবিকা স্বেচ্ছাসেবী স্বেচ্ছায় সুবেজাত স্বেদ সুবেদা স্বেদাক্ত স্বেদাপ্লুত সুবেদার সুবেদারি সুবেদারী স্বেদজ স্বেদজল স্বেদন স্বেদবারি স্বেদস্রাব স্বেদস্রুতি সবেমাত্র সুবেশ সুবেশা সুবেশী সুবেহ স্বৈর স্বৈরাচার স্বৈরাচারী স্বৈরিণী স্বৈরিতা স্বৈরী স্বৈরচার স্বৈরচারী স্বৈরতা স্বৈরতন্ত্র স্বৈরতন্ত্রী স্বৈরশাসক স্বৈরশাসন সবো স্বোদর সুবোধ সুবোধ্য স্বোপার্জিত সবোরোজ সবুজ সবজা স্বজাত স্বজাতি স্বজাতীয় স্বজাতীয়া স্বজাত্য সবজান্তা সবুজাভ সবজায়গা সবজি সবজিবাগ সবজী সবজীবাগ সবজে সবজেটে স্বজন স্বজনী স্বজনপোষণ স্বজনপ্রীতি স্বজনবিচ্ছেদ সবুজপত্র সবুজবাগ সবুজবর্ণ সবুজরং সবুজসার সব্য সুব্যক্ত সুব্যবস্থা সুব্যবস্থাযুক্ত সুব্যবস্থিত সব্যসাচী স্বতঃ স্বতঃপরিশোধ্য স্বতঃপ্রণোদিত স্বতঃপ্রবৃত্ত স্বতঃপ্রমাণিত স্বতঃলব্ধজ্ঞান স্বতঃসিদ্ধ স্বতঃসিদ্ধভাবে স্বতঃস্ফূর্ত স্বতঃস্ফূর্তভাবে স্বতন্তর স্বতন্ত্র স্বতন্তরা স্বতন্ত্রা স্বতন্ত্রতা স্বতন্ত্রভাবে স্বতপ্রবৃত্ত স্বতপ্রমাণিত স্বত্ব স্বত্বা স্বত্বাধিকার স্বত্বাধিকারিণী স্বত্বাধিকারী স্বত্বচিহ্নিত স্বত্বজাত স্বত্বত্যাগ স্বত্বভোগী স্বত্বসংরক্ষিত স্বত্বসাব্যস্ত স্বত্বস্বামিত্ব স্বত্বসহ স্বত্বহীন সবৎস সবৎসা সবথেকে সবদিক স্বদিচ্ছা স্বদেশ স্বদেশানুরাগ স্বদেশী স্বদেশীয় স্বদেশজাত স্বদেশজননী স্বদেশপ্রীতি স্বদেশপ্রেম স্বদেশপ্রেমী স্বদেশবাসী স্বদেশভক্ত স্বদেশহিতৈষী স্বদেশহিতৈষণা সবদ্যা সুবুদ্ধি সুবুদ্ধিযুক্ত সুবদন সুবদনা সুবদনী স্বদল স্বদলীয় স্বদলীয়া সবধরন স্বধর্ম স্বধর্মদ্বেষী সবন স্বন স্বনকক্ষ স্বনগত স্বনাম স্বনামখ্যাত স্বনামধন্য স্বনামধন্যা স্বনামপ্রসিদ্ধ স্বনিত স্বনির্ভর স্বনির্ভরণ স্বনির্ভরতা স্বনির্মিত স্বনিয়া স্বনিয়ম সবৃন্ত সুবন্ত সুবন্দোবস্ত সবন্ধু সুবন্ধ সুবন্ন স্বনন স্বনস্তর স্বপক্ষ স্বপক্ষীয় স্বপক্ষভুক্ত স্বপাক স্বপত্য স্বপন স্বপ্ন স্বপ্নঘোর স্বপ্নাদিষ্ট স্বপ্নাদেশ স্বপ্নাদ্য স্বপ্নাবিষ্ট স্বপ্নালু স্বপ্নিল স্বপ্নচারিতা স্বপ্নচারী স্বপ্নোত্থিত স্বপ্নজাল স্বপ্নজড়িমা স্বপ্নদোষ স্বপ্নদর্শন স্বপ্নদ্রষ্টা স্বপ্নদৃশ্য স্বপ্নবৎ স্বপ্নবৃত্তান্ত স্বপ্নভঙ্গ স্বপ্নমুখর স্বপ্নময় স্বপ্নময়ী স্বপ্নরাজ্য স্বপ্নরূপ স্বপ্নলোক স্বপ্নশীলা স্বপ্নসাগর স্বপ্রকাশ সব্বাই স্ববিরোধ স্ববিরোধী স্ববশ স্ববশবর্তিতা স্বভাব স্বভাবকৃপণ স্বভাবকবি স্বভাবকবিত্ব স্বভাবকুলীন স্বভাবগায়ক স্বভাবগত স্বভাবগতভাবে স্বভাবী স্বভাবচরিত্র স্বভাবোক্তি স্বভাবজ স্বভাবজাত স্বভাবযুক্ত স্বভাবত স্বভাবদত্ত স্বভাবপ্রকৃতি স্বভাববিরুদ্ধ স্বভাবমতো স্বভাবলব্ধ স্বভাবশোভা স্বভাবসংগত স্বভাবসিদ্ধ স্বভাবসুলভ স্বভাষা স্বভূমি সবমিলিয়ে স্বমত স্বমর্পন সবমসময় সবমহল সবর সবুর স্বর সবরকম স্বরকম্পন স্বরক্ষিত স্বর্গ স্বর্গগঙ্গা স্বর্গগত স্বর্গগতি স্বর্গগমন স্বর্গঙ্গা স্বর্গারোহণ স্বর্গীয় স্বর্গীয়া স্বর্গোদ্যান স্বর্গ্য স্বরগুণ স্বর্গত স্বরগতি স্বর্গতি স্বর্গতুল্য স্বর্গদ্বার স্বর্গপ্রাপ্ত স্বর্গপ্রাপ্তি স্বর্গবাস স্বর্গবাসী স্বর্গমর্ত স্বর্গমর্ত্য স্বর্গরাজ্য স্বর্গরাণী স্বরগ্রাম স্বর্গলাভ স্বর্গলোক স্বর্গসুখ স্বর্গস্থ স্বর্গস্থিত স্বরঘাত স্বরাগম স্বরাঘাত স্বরাঘাতহীন স্বরাজ স্বরাজ্য স্বরাদি স্বরান্ত স্বরাষ্ট্র স্বরাষ্ট্রমন্ত্রক স্বরাষ্ট্রমন্ত্রী স্বরাষ্ট্রমন্ত্রণালয় স্বরাষ্ট্রসচিব সুব্রাহ্মণ সবরি সবরিকলা স্বরিত স্বরচিত স্বরচিহ্ন স্বরচ্ছেদ স্বরোচিষ স্বরছক স্বরযন্ত্রী স্বরযন্ত্রীয় সবর্ণ সুবর্ণ স্বর্ণ সুবর্ণকার স্বর্ণকার স্বর্ণকেশী সুবর্ণকদলী স্বর্ণকুমারী সুবর্ণকমল স্বর্ণকমল সুবর্ণকমলিনী সুবর্ণখচিত স্বর্ণখনি সুবর্ণগঠিত সুবর্ণগ্রাম স্বর্ণগর্ভ সুবর্ণগর্ভা স্বর্ণগর্ভা স্বর্ণঘটিত স্বর্ণা স্বর্ণাক্ষর স্বর্ণাদি স্বর্ণাভ স্বর্ণালংকার স্বর্ণালঙ্কার স্বর্ণচাঁপা সুবর্ণজয়ন্তী স্বর্ণযুগ স্বর্ণতরী সুবর্ণদ্বীপ স্বর্ণদ্বীপ সুবর্ণনির্মিত স্বর্ণনির্মিত সুবর্ণপক্ষা স্বর্ণপাত স্বর্ণপিঞ্জর স্বর্ণপদক সুবর্ণপদ্ম স্বর্ণপূর্ণ স্বর্ণপূর্ণা সুবর্ণপ্রতিমা স্বর্ণপ্রতিমা স্বর্ণপ্রভ স্বর্ণপ্রভা স্বর্ণপ্রসূ স্বর্ণবিনিময় স্বর্ণবিন্দু স্বর্ণব্যবসায়ী সুবর্ণবণিক স্বর্ণবণিক স্বর্ণবর্ণ স্বর্ণভূমি স্বর্ণভূষণ স্বর্ণমৃগ স্বর্ণমান স্বর্ণমণ্ডিত স্বর্ণমুদ্রা সুবর্ণময় স্বর্ণময় সুবর্ণরেখা স্বর্ণরেখা স্বর্ণরৌপ্যাদি সুবর্ণলতা স্বর্ণলতা স্বর্ণসিন্দূর সুবর্ণসুযোগ স্বর্ণসুযোগ স্বর্ণসূত্র সুব্রত সুব্রতা স্বরতন্ত্রীয় স্বরতরঙ্গ স্বরদৈর্ঘ্য স্বরধ্বনি স্বরধর্ম স্বরধর্মী স্বরনালী স্বরূপ স্বরূপকাঠি স্বরূপগত স্বরূপজান স্বরূপত স্বরূপতা স্বরূপত্ব স্বরপথ স্বরূপদর্শী স্বরূপনির্ণয় স্বরপরিসর স্বরূপশক্তি স্বরবিকৃতি স্বরবিচ্ছেদ স্বরবিন্যাস স্বর্বেশ্যা স্বর্বৈদ্য স্বরবৈশিষ্ট্য স্বরবৃত্ত স্বরবৃত্তি স্বরবর্ণ স্বরভক্তি স্বরভঙ্গ স্বরভঙ্গি স্বরমাত্রা স্বরমধ্যগত স্বরলিপি স্বরলোপ স্বরলহরি স্বরলহরী স্বরসংকোচ স্বরসংগতি স্বরসংঘাত স্বরসংযোজন স্বরসঙ্গতি স্বরসাম্য স্বরসঞ্চার স্বরস্তর স্বরসদৃশ স্বরসন্ধি স্বরসমীভবন স্বরসমন্বয় স্বরহীন সুব্রহ্মণ্য সবল সবলগড় সবলা সুবলিত সবলোট সবলোঠ সবলুট সবলুঠ সবলতা স্বল্প স্বল্পকাল স্বল্পকালীন স্বল্পকালস্থায়ী স্বল্পকায় স্বল্পকেশ স্বল্পগতি স্বল্পালোকিত স্বল্পাহার স্বল্পাহারী স্বল্পায়ু স্বল্পায়তন স্বল্পোন্নত স্বল্পতা স্বল্পতাজনিত স্বল্পদৈর্ঘ্য স্বল্পপ্রাণ স্বল্পপরিচিত স্বল্পপ্রচলিত স্বল্পব্যবহৃত স্বল্পভাষী স্বল্পমাত্রা স্বল্পমেয়াদ স্বল্পমেয়াদী স্বল্পমূল্য স্বল্পসংখ্যক স্বল্পসংগ্রহ স্বল্পস্থায়ী স্বশাসিত স্বশাসন স্বশিক্ষিত সবশেষে সবশুদ্ধ সুবৃষ্টি স্বসংবেদ্য স্বসংবেদন স্বসা স্বস্তি স্বস্তিক স্বস্তিকা স্বস্তিকাসন স্বস্তিকর স্বস্তিপাঠ স্বস্তিপূর্ণ স্বস্তিবাচন স্বস্তিমুখ স্বস্তিলাভ স্বস্ত্যয়ন স্বস্থ সবস্থান স্বস্থান স্বস্থানচ্যুতি সবসুদ্ধ স্বস্ব সবসমেত সবসময় স্বস্রীয় স্বস্রীয়া স্বস্রেয় স্বস্রেয়ী সুবহ সুবহউম্মিদ সুবহকাজিব সুবহানআল্লাহ সুবহানাকা সুবহানাল্লাহ সুবহে সুবৃহৎ সুবহশাম সুবহসাদেক স্বহস্ত স্বয়ং স্বয়ংকৃত স্বয়ংক্রিয় স্বয়ংক্রিয়ক স্বয়ংক্রিয়যন্ত্র স্বয়ংক্রিয়তা স্বয়ংক্রিয়ভাবে স্বয়ংচালিত স্বয়ংজাত স্বয়ংদীপ্ত স্বয়ংপ্রকাশ স্বয়ংপূর্ণ স্বয়ংপ্রধান স্বয়ংপ্রবৃত্ত স্বয়ংপ্রভ স্বয়ংপ্রভা স্বয়ংবিধৃত স্বয়ংবর স্বয়ংবরা স্বয়ংবরসভা স্বয়ংশাসিত স্বয়ংসিদ্ধ স্বয়ংসিদ্ধা স্বয়ংসম্পূর্ণ স্বয়ংসম্পূর্ণতা স্বয়ংসৃষ্ট স্বয়ম্বর স্বয়ম্বরা স্বয়ম্ভু স্বয়ম্ভূ স্বয়ম্ভূতি স্বয়ম্ভুপুত্র স্বয়ম্ভর সভক্তি সুভগ সুভগা সভা সভাকক্ষ সভাকার সভাকুট্টিম সভাকবি সভাখণ্ড সুভাগিনী সভাগৃহ সভাজন সুভানাল্লা সভানেত্রী সভাপণ্ডিত সভাপতি সভাপতিত্ব সভাভঙ্গ সভামণ্ডপ সভারিন সভারেন সভারম্ভ সুভালাভালি সুভাষ সুভাষাণ সুভাষিণী সুভাষিত সুভাষিতা সুভাষী সুভাষণ সুভাস সভাসাহিত্য সভাসাহিত্যিক সভাসীন সভাসৎ সভাস্থ সভাস্থল সভাসদ সভাসমিতি সুভিক্ষ সভে সুভেষ সভ্য সভ্যকরণ সভ্যা সভ্যজগৎ সভ্যতা সভ্যতাজনিত সভ্যতাভিমানিনী সভ্যতাভিমানী সভ্যপদ সভ্যভুক্তি সভ্যভব্য সভ্যসমাজ সুভদ্র সুভদ্রা সুভব্য সুভ্রূ সভর্তৃকা সভয় সম সমঅধিকার স্মঅরা স্মঅরিআঁ স্মঅরী সমআয়তন সমউৎপাদন সমউপযোগ সমওজন সমুক সমকক্ষ সমকক্ষা সমকক্ষতা সমকক্ষহীন সমকাম সমকামিতা সমকামী সমকামযুক্ত সমকারক সমকাল সমকালিক সমকালীন সমকেন্দ্রিক সমকোণ সমকোণী সমকৌণিক সমকর্মী সমকলন সমক্ষ সমুখ সুমুখ সমগোত্র সমগোত্রীয় সমগোত্রজ সমগ্র সমগ্রতা সমগ্রভাব সমঘন সুমঙ্গল স্মঙরা সমা সমাংশ সমাংশিত স্মাইল স্মাইলি সুমাইয়া সমাকীর্ণ সমাক্রান্ত সমাক্রান্তা সমাকর্ষী সমাকর্ষণ সমাকর্ষণকারী সমাকুল সমাকলিত সমাকুলতা সমাকলন সমাকলনযোগ্য সমাক্ষ সমাক্ষবৃত্ত সমাক্ষর সমাক্ষরিক সমাক্ষরিকতা সমাক্ষরেখা সমাক্ষরলোপ সমাগত সমাগতা সমাগম স্মাগলার সমাঘ্রাত সমাচার সমাচারপত্র সমাচ্ছন্ন সমাচ্ছন্না সমাচ্ছন্নতা সমাজ সমাজকর্ম সমাজকর্মী সমাজকল্যাণ সমাজগঠনমূলক সমাজচিন্তা সমাজচ্যুত সমাজজীবন সমাজজ্ঞতা সমাজতাত্ত্বিক সমাজতান্ত্রিক সমাজতত্ত্ব সমাজতন্ত্র সমাজতন্ত্রী সমাজদ্রোহ সমাজদ্রোহী সমাজদর্পণ সমাজনীতি সমাজপতি সমাজপন্থী সমাজপ্রগতি সমাজবাদ সমাজবাদী সমাজবিজ্ঞান সমাজবিজ্ঞানী সমাজবিদ্যা সমাজবিধি সমাজবিরোধী সমাজবিরুদ্ধ সমাজব্যবস্থা সমাজবদ্ধ সমাজবন্ধু সমাজবন্ধন সমাজবহির্ভূত সমাজমনস্ক সমাজশাসন সমাজসংস্কার সমাজসংস্কারক সমাজসংস্কারকারী সমাজসেবক সমাজসেবা সমাজসেবিকা সমাজসেবী সমাজস্বীকৃত সমাজহিতৈষী স্মাত সুমাত্রা সমাদৃত সমাদৃতা সমাদর সমাদরণীয় সমাদরপ্রাপ্ত সমাদরপূর্বক সমাধা সমাধান সমাধানকৃত সমাধানযোগ্য সমাধানহীন সমাধি সমাধিকক্ষ সমাধিকার সমাধিক্ষেত্র সমাধিযুক্ত সমাধিপ্রস্তর সমাধিফলক সমাধিবেদী সমাধিভঙ্গ সমাধিভাব সমাধিভূমি সমাধিমগ্ন সমাধিমন্দির সমাধিসৌধ সমাধিস্তম্ভ সমাধিস্থ সমাধিস্থান সমাধিস্থল সমাধ্যায়ী সমান সমানাধিকার সমানাধিকারী সমানাধিকারবাদ সমানাধিকরণ সমানজাতীয় সমানজ্ঞান সমান্ততন্ত্র সমান্তর সমান্তরাল সমান্তরালতা সমান্তরালবর্তী সমান্তরালভাবে সমানুপাত সমানুপাতিক সমানুপাতিকতা সমানভাব সমানসমান সমাপক সমাপিকা সমাপিত সমাপ্য সমাপ্ত সমাপ্তি সমাপ্তিজ্ঞাপক সমাপন সমাপনকারিণী সমাপনকারী সমাপনীয় সমাবিষ্ট সমাবিষ্টা সমাবেশ সমাবেশিত সমাবৃত সমাবৃত্ত সমাবর্তন সুমার স্মারক স্মারকগ্রন্থ স্মারকচিহ্ন স্মারকপত্র স্মারকলিপি স্মারকস্তম্ভ সমারোহ সমারোহণ সমারোহপূর্ণ স্মার্ট সমারূঢ় স্মার্ত সমার্থ সমার্থক সমার্থকতা সমার্থবোধক সমার্থশব্দ সমারম্ভ সমারূঢ়া সুমালী সমালোচক সমালোচিকা সমালোচিত সমালোচ্য সমালোচন সমালোচনা সমালোচনীয় সমালুম সমাস সমাসক্ত সমাসক্তি সমাসঙ্গ সমাসাদিত সমাসীন সমাসোক্তি সমাসন্ন সমাসবিহীন সমাসবদ্ধ সমাসহীন সমাহার সমাহারী সমাহিত সমাহিতা সমাহৃত সমাহৃতি সমাহরণ সমাহর্তা সমাহর্ত্রী সমিৎ সুমিত স্মিত সমিতি সুমিতি সমিতিভুক্ত স্মিতবাক সুমিত্রা স্মিতহাস্য সমিদ্ধ সমিধ সুমিষ্ট সুমিষ্টঘ্রাণ সমীকৃত সমীকরণ সমীক্ষ সমীক্ষক সমীক্ষা সমীক্ষাকারী সমীক্ষিত সমীক্ষ্য সমীক্ষ্যকারিতা সমীক্ষ্যকারী সমীক্ষ্যবাদী সমীক্ষণ সমুচা সমচাপ সমুচিত সমুচ্চ সমুচ্চার সমুচ্চার্য সমুচ্চারণ সমীচীন সমীচীনতা সমুচ্চয় সমুচ্ছিন্ন সমুচ্ছেদ সমুচ্ছেদন সমুচ্ছ্বাস সমুচ্ছ্বসিত সমুচ্ছ্রায় সমুচ্ছ্রিত সমুচ্ছ্রয় সমুচ্ছল সমচতুর্ভুজ সমচতুষ্কোণ সমীপ সমীপে সমীপেষু সমীপপাতিত সমীপবর্তিতা সমীপবর্তিনী সমীপবর্তী সমীপস্থ সমীপস্থা সুমীমাংসা সমীর সমীরণ সমীহ সমীহা সমীহিত সমুচয় সমে স্মেইল সমেত সুমের সুমেরু স্মের সুমেরীয় সুমেরুবৃত্ত সুমেরুবৃত্তীয় স্মোক সমজ সমুজ সমজা সমজাতি সমজাতিযুক্ত সমজাতিতা সমজাতিত্ব সমজাতীয় সমজাতীয়া সমজাতীয়তা সমজাতীয়ত্ব সমজান সমজানো সমুজ্জ্বল সমুজঝিত সমজদার সমঝ সমঝা সমুঝা সমঝাই সমুঝাই সমঝাইও সমঝাইত সমঝাইতাম সমঝাইতিস সমঝাইতে সমঝাইতেছ সমঝাইতেছি সমঝাইতেছিল সমঝাইতেছিলাম সমঝাইতেছিলি সমঝাইতেছিলে সমঝাইতেছিলেন সমঝাইতেছিস সমঝাইতেছে সমঝাইতেছেন সমঝাইতেন সমঝাইব সমঝাইবার সমঝাইবি সমঝাইবে সমঝাইবেন সমঝাইল সমঝাইলাম সমঝাইলি সমঝাইলে সমঝাইলেন সমঝাইয়া সমঝাইয়াছ সমঝাইয়াছি সমঝাইয়াছিল সমঝাইয়াছিলাম সমঝাইয়াছিলি সমঝাইয়াছিলে সমঝাইয়াছিলেন সমঝাইয়াছিস সমঝাইয়াছে সমঝাইয়াছেন সমঝাইয়ো সমঝাক সমঝাচ্ছ সমঝাচ্ছি সমঝাচ্ছিল সমঝাচ্ছিলাম সমঝাচ্ছিলি সমঝাচ্ছিলে সমঝাচ্ছিলেন সমঝাচ্ছিলেম সমঝাচ্ছিলুম সমঝাচ্ছিস সমঝাচ্ছে সমঝাচ্ছেন সমঝাত সমঝাতাম সমঝাতিস সমঝাতে সমঝাতেন সমঝাতেম সমঝাতুম সমঝান সমঝানো সমঝাব সমঝাবার সমঝাবি সমঝাবে সমঝাবেন সমঝাবো সমঝাল সমুঝাল সমঝালাম সমঝালি সমঝালে সমঝালেন সমঝালেম সমঝালুম সমঝাস সমঝিয়ে সমঝিয়েছ সমঝিয়েছি সমঝিয়েছিল সমঝিয়েছিলাম সমঝিয়েছিলি সমঝিয়েছিলে সমঝিয়েছিলেন সমঝিয়েছিলেম সমঝিয়েছিলুম সমঝিয়েছিস সমঝিয়েছে সমঝিয়েছেন সমঝে সমঝেছ সমঝেছি সমঝেছিল সমঝেছিলাম সমঝেছিলি সমঝেছিলে সমঝেছিলেন সমঝেছিলেম সমঝেছিলুম সমঝেছিস সমঝেছে সমঝেছেন সমঝো সমঝোতা সমঝদার সমঝদারি সমুঝনু সমুঝব সমঞ্জস সমঞ্জস্য সম্যক সম্যকপ্রকার সম্যকভাবে সম্যকরূপে সমযোজী সুমত স্মৃত সমুৎকীর্ণ সমুৎকণ্ঠা সমুৎকর্ণ সমতা সমতাযুক্ত সমতাপীয় সমতাবিধায়ক সমতাহীন সুমতি স্মৃতি স্মৃতিকথা স্মৃতিকর্তা স্মৃতিগুচ্ছ স্মৃতিগত স্মৃতিগ্রন্থ স্মৃতিচারণ স্মৃতিচারণকারী স্মৃতিচারণা স্মৃতিচিহ্ন স্মৃতিতাড়িত স্মৃতিধ্বংস স্মৃতিপট স্মৃতিপথ স্মৃতিপদক স্মৃতিপ্রবচন স্মৃতিপ্রস্তর স্মৃতিফলক স্মৃতিবার্ষিক স্মৃতিবার্ষিকী স্মৃতিবিজড়িত স্মৃতিবিভ্রম স্মৃতিবিরুদ্ধ স্মৃতিবর্ধন স্মৃতিভাণ্ডার স্মৃতিভ্রংশ স্মৃতিভ্রষ্ট স্মৃতিমান স্মৃতিমন্দির স্মৃতিময় স্মৃতিরক্ষা স্মৃতিরোমন্থন স্মৃতিলোপ স্মৃতিশক্তি স্মৃতিশাস্ত্র স্মৃতিসংরক্ষণ স্মৃতিসৌধ স্মৃতিস্তম্ভ স্মৃতিসহায়ক স্মৃতিহানি সমতীত সমতট সমত্ত সমুত্থান সমুত্থিত সমুত্থিতা সমুৎপাটিত সমুৎপাটন সমুৎপত্তি সমুৎপন্ন সমত্ব সমতল সমতুল সমতলীয় সমতুল্য সমতুল্যা সমতুল্যতা সমতলভূমি সমতলস্থান সমুৎসুক সমুৎসাদিত সমুৎসাদন সমুদ সমূদ সমদুঃখ সমদুঃখিনী সমদুঃখী সমুদগীর্ণ সমুদগত সমুদগম সমুদার সমুদায় সমুদিত সমুদ্যত সমুদ্যতা সমুদ্যম সমুদ্দুর সুমুদ্দুর সমৃদ্ধ সমৃদ্ধকরণ সমৃদ্ধা সমৃদ্ধি সমৃদ্ধিযুক্ত সমৃদ্ধিশালিনী সমৃদ্ধিশালী সমুদ্ধত সমুদ্ধৃত সমুদ্ধৃতি সমুদ্ধরণ সমুদ্ধর্তা সমৃদ্ধশালী সমদ্বিখণ্ডক সমদ্বিবাহু সমুদ্ভাসিত সমুদ্ভাসন সমুদ্ভূত সমুদ্ভব সমুদভ্রান্ত সমুদ্র সমুদ্রকান্তা সমুদ্রকোল সমুদ্রকূল সমুদ্রখাত সমুদ্রগামী সমুদ্রগর্ভ সমুদ্রাভিমুখী সমুদ্রাভিমুখে সমুদ্রচারী সমুদ্রজাত সমুদ্রজল সমুদ্রঝড় সমুদ্রযাত্রা সমুদ্রযান সমুদ্রতীর সমুদ্রতীরবর্তী সমুদ্রতীরস্থ সমুদ্রতট সমদূরত্ব সমুদ্রতরঙ্গ সমুদ্রতল সমুদ্রনেমি সমুদ্রপথ সমুদ্রপ্রাণী সমুদ্রপরী সমুদ্রপৃষ্ঠ সমুদ্রফেনা সমুদ্রবাণিজ্য সমুদ্রবাসী সমুদ্রবিজ্ঞান সমুদ্রবেলা সমুদ্রবেষ্টিত সমুদ্রবৎ সমুদ্রবন্দর সমদূরবর্তিতা সমদূরবর্তিনী সমদূরবর্তী সমুদ্রবহ্নি সমুদ্রমেখলা সমুদ্রমন্থন সমুদ্ররসনা সমদর্শিতা সমদর্শিনী সমদর্শী সমদর্শন সমদর্শনকারী সমুদ্রসঙ্গম সমুদ্রসৈকত সমুদ্রসদৃশ সমুদ্রসমান সমুদ্রসমতল সমুদ্রসহ সমুদ্রহৃদয় সমদৃষ্টি সমুদয় সমধাতু সমধিক সুমধ্যম সুমধ্যমা সুমধুর সমধর্মা সমধর্মিতা সমধর্মী সমন সুমন সুমনা সমনাম সুমনোহর সমনজারি সমন্তাৎ সুমন্ত্র সমন্ত্রক সুমন্ত্রণা সমুন্দ সুমন্দ সুমুন্দি সমুন্দর সমুন্নত সমুন্নতি সমুন্নয় সমন্নয়ক সমুন্নয়ন সমন্বিত সমন্বিতা সমন্বয় সমন্বয়ক সমন্বয়কারী সমন্বয়যুক্ত সমন্বয়সাধন সমন্বয়হীনতার সমনস্ক সম্পৃক্ত সম্পৃক্তা সম্পৃক্ততা সম্পাত সম্পাতি সম্পাদক সম্পাদকীয় সম্পাদকতা সম্পাদিকা সম্পাদিত সম্পাদ্য সম্পাদন সম্পাদনকারী সম্পাদনকাল সম্পাদনকর্তা সম্পাদনা সম্পাদনাকারী সম্পাদনাকর্ম সম্পাদনীয় সম্পাদনপূর্বক সম্পাশ সমুপচিত সমুপেত সম্পেশ সম্পোষ্য সম্পুট সম্পুটক সম্পৎ সম্পত্তি সম্পত্তিরক্ষক সম্পত্তিরূপে সম্পত্তিশালী সম্পৎশালী সম্পদ সম্পদশালী সমপদস্থ সমপদস্থা সমপদস্থতা সম্পদহারা সম্পন্ন সম্পন্না সমপূরক সম্পর্ক সম্পূরক সম্পর্কিত সম্পর্কিতা সম্পর্কচ্ছেদ সম্পর্কীয় সম্পর্কযুক্ত সমপ্রকৃতি সম্পর্কবিনিময় সম্পর্কবদ্ধ সম্পর্কভিত্তিক সম্পর্করহিত সম্পর্কশূন্য সম্পর্কস্থাপন সম্পর্কহীন সম্পর্কহীনতা সমপ্রাণ সমপ্রাণা সমপ্রাণতা সম্প্রাপ্ত সম্প্রাপ্তি সম্পূরিত সমপরিমাণ সম্প্রচার সম্প্রচারকারী সম্প্রচারিত সম্প্রীত সম্প্রীতি সমপর্যায় সম্পূর্ণ সম্পূর্ণকারিণী সম্পূর্ণকারী সম্পূর্ণীভূত সম্পূর্ণতা সম্পূর্ণভাবে সম্পূর্ণরূপে সম্প্রতি সম্প্রদাতা সম্প্রদাত্রী সম্প্রদান সম্প্রদানকারী সম্প্রদায় সম্প্রদায়ভুক্ত সমপ্রবাহ সম্প্রভাত সম্প্র্রচার সম্প্র্রচারিত সম্প্রসারক সম্প্রসারিত সম্প্রসারণ সম্প্রসারণকারী সম্প্রসারণজনিত সম্প্রসারণযোগ্য সম্প্রসারণশীল সমপৃষ্ঠ সমুপস্থিত সমবাএ সম্বাদ সমবাদী সম্বাদপত্র সম্বাধ সমবাহু সমবায় সম্বায় সমবায়ী সমবায়সমিতি সম্বিত সম্বিৎ সমবিন্দুগামী সমবেগ সমবেত সমবেতকণ্ঠ সমবেতভাবে সমবেদী সমবেদনা সমবেদনাযুক্ত সম্বোধা সম্বোধি সম্বোধিত সম্বোধন সম্বোধনাত্মক সম্বোধনপূর্বক সমব্যথা সমব্যথিনী সমব্যথী সম্বৎসর সম্বৎসরকাল সম্বদ্ধ সম্বুদ্ধ সম্বন্ধ সম্বন্ধঘটিত সম্বন্ধাতীত সম্বন্ধার্থ সম্বন্ধিত সম্বন্ধী সম্বন্ধীয় সম্বন্ধজ্ঞাপক সম্বন্ধযুক্ত সম্বন্ধত্যাগ সম্বন্ধপদ সম্বন্ধবিচার সম্বন্ধস্থাপন সম্বন্ধহীন সম্বন্ধহীনতা সম্বর সম্বরু সমবর্গীয় সম্বরা সম্বরিয়া সম্বরণ সম্বরণকারী সমবর্ণলোপ সমবর্তিতা সমবর্তিনী সমবর্তী সম্বর্ধিত সম্বর্ধনা সম্বল সম্বলিত সম্বলরূপে সম্বলহীন সম্বলহীনা সমবস্থ সমবস্থা সমবয়স্ক সমবয়স্কা সমবয়সী সমভাব সম্ভাবক সম্ভাবিত সমভাবে সম্ভাব্য সম্ভাব্যতা সম্ভাবন সম্ভাবনা সম্ভাবনাযুক্ত সম্ভাবনাবোধক সম্ভাবনাভিত্তিক সম্ভাবনাময় সম্ভাবনাহীন সম্ভাবনীয় সম্ভার সম্ভাষ সম্ভাষা সম্ভাষিত সম্ভাষিতা সম্ভাষণ সম্ভাষণকারী সম্ভাষণানুগ্রহ সমভিব্যাহার সমভিব্যাহারী সম্ভেদ সম্ভোগ সম্ভোগকারী সম্ভোগার্থ সম্ভোগেচ্ছা সম্ভোগযোগ্যা সম্ভোগবাসনা সম্ভোধনী সম্ভূত সম্ভূতা সম্ভূতি সম্ভব সম্ভবাতীত সম্ভব্য সম্ভবত সম্ভবতা সম্ভবপর সমভূমি সম্ভ্রান্ত সম্ভ্রান্ততন্ত্র সম্ভ্রম সম্ভ্রমার্থ সম্ভ্রমশালী সম্ভ্রমশীল সম্ভ্রমশীলা সম্ভ্রমহানি সম্ভূয়সমুত্থান সমূম সম্মুখ সম্মুখগামী সম্মুখগতি সম্মুখগমন সমমুখী সম্মুখচালিত সম্মুখীন সম্মুখে সম্মুখের সম্মুখযুদ্ধ সম্মুখদিক সম্মুখদন্তী সম্মুখপ্রকোষ্ঠ সম্মুখপশ্চাৎ সম্মুখবর্তিনী সম্মুখবর্তী সম্মুখভাগ সম্মুখস্থ সম্মুখসমর সমমাত্রিক সমমান সম্মান সম্মানার্থে সম্মানিত সম্মানিতা সম্মানী সম্মানীয় সম্মানোত্তর সম্মানজ্ঞাপন সম্মানজনক সম্মান্য সম্মানযুক্ত সম্মানযোগ্য সমমানতা সম্মানদায়ক সম্মানন সম্মাননা সম্মাননাশ সম্মানপ্রাপ্ত সম্মানপূর্ণ সম্মানপ্রদর্শন সম্মানবোধ সম্মানবৃদ্ধি সম্মানরক্ষা সম্মানলাভ সম্মানশূন্য সম্মানহানি সম্মানহারা সম্মানহীন সম্মার্জক সম্মার্জিত সম্মার্জন সম্মার্জনী সম্মিত সম্মিলিত সম্মিলিতা সম্মিলিতভাবে সম্মিলন সম্মিলনী সম্মীলন সম্মেলিত সম্মেলন সম্মেলনকারী সম্মোহ সম্মোহক সম্মোহিত সম্মোহিতা সম্মোহন সম্মোহনকারী সম্মোহনী সমমণ্ডল সম্মত সম্মতা সম্মতি সম্মতিক্রমে সম্মতিতে সম্মতিদান সম্মতিপত্র সম্মতিপ্রাপ্ত সম্মতির সম্মতিলাভের সম্মতিসূচক সমমনা সম্মুন্দি সমমর্যাদা সমমর্যাদার সমমূল্য সমমূল্যে সমমূল্যতা সম্মূঢ় সমর স্মর সুমরইত সমরকৌশল সমরক্ষেত্র স্মরা সমরাঙ্গন সম্রাজী সম্রাজ্ঞী সম্রাট সমরানল স্মরারি সমরাশি সমরাস্ত্র সুমরি স্মরি স্মরিয়া সমরুচি স্মরণ স্মরণকারী স্মরণাতীত স্মরণার্থ স্মরণার্হ স্মরণিক স্মরণিকা স্মরণীয় স্মরণীয়া স্মরণযোগ্য স্মরণশক্তি স্মর্তব্য সমর্থ সমর্থক সমর্থা সমর্থিত সমর্থিতা সমর্থতা সমর্থন সমর্থনকারী সমর্থনা সমর্থনীয় সমর্থনযোগ্য সমর্থনদানকারী সমর্থনপ্রাপ্ত সমর্থনপুষ্ট সুমরন সমরনায়ক সমর্পক সমর্পা সমর্পিত সমর্পিতা সমরূপী সমরপোত সমর্পণ সমর্পণকারী সমর্পণীয় সমরূপতা সমরূপত্ব সমরপ্রিয় সমরবাদ সমরভূমি সমরশায়িত সমরশায়ী সমরশয্যা সমরস সমরসচিব সমরসজ্জা সমরস্থান স্মরহর সমল সমূল সমূলক সমলা সমুল্লসিত সমশ্বর সমশ্রেণি সমশ্রেণী সমষ্টি সমষ্টিকেন্দ্রিক সমষ্টিকরণ সমষ্টিগত সমষ্টিগতভাবে সমষ্টিবাচক সমষ্টিবদ্ধ সমষ্টিরূপ সমসংখ্যক সমুসা সুমসাম সমসাময়িক সমসাময়িককাল সমসাময়িকতা সমস্যা সমস্যাগ্রস্ত সমস্যাদি সমস্যাপূরণ সমস্যাপূর্ণ সমস্যাবলী সমস্যাবহুল সমস্যাসংকুল সমস্যাসঙ্কুল সমস্যমান সমস্ত সমস্তকিছু সমস্তপদ সমস্তপ্রকার সমসূত্র সমস্তরকম সমসূত্রতা সমস্থলী সমস্বামিত্ব সমস্বর সমসম্ভাব্য সমসম্ভাবনা সমসময় সমসর সমূহ সুমহান সুমহৎ সময় সুময় সময়অসময় সময়কাঠামো সময়কার সময়কাল সময়কালীন সময়ক্ষেপণ সময়গত সময়ানুক্রমিক সময়ানুযায়ী সময়ান্তর সময়ান্তরতা সময়ানুবর্তী সময়াভাব সময়োচিত সময়োপযোগী সময়জ্ঞাপক সময়যাপন সময়নিষ্ঠ সময়নিষ্ঠা সময়ব্যাপী সময়বহির্ভূত সময়ভিত্তিক সময়ভর সময়মত সময়রক্ষক সময়রেখা সময়সাপেক্ষ সময়সূচী সময়সীমা সময়সীমাযুক্ত সময়সেবক সময়সেবী সময়সময় সর সরু সুর সুরু সূর স্রংস স্রংসী স্রংসন স্রংসশীল সরঃকাক সরুঅ সরূঅ সরুআ সরুক সুরুক স্রক সরকার সুরকার সরকারকর্তৃক সরকারি সরকারিভাবে সরকারী সরকারীকরণ সরকারীদল সরকারীব্যবস্থা সরকারীভাবে সরকারপক্ষ সরকারপ্রেরিত সরকারপ্রধান সরকারবিরোধী সরকারব্যবস্থা সরকারবদল সরকাশ সুরকি সুর্কি সুরকী সুর্কী সুরকন্যা সুরক্ষা সুরক্ষিত সুরক্ষিতা সুরুকসন্ধান সুর্খ সুরখি সুর্খী সুর্খনূর সর্গ সুরগত স্রগ্ধর স্রগ্ধরা সরগম সুরগুরু সুরগ্রাম সরগরম সরুগলি সুরঙ্গ সুরঙ্গী সরা সুরা সূরা সুরাংশ সরাই সুরাই সরাইও সরাইখানা সরাইত সরাইতাম সরাইতিস সরাইতে সরাইতেছ সরাইতেছি সরাইতেছিল সরাইতেছিলাম সরাইতেছিলি সরাইতেছিলে সরাইতেছিলেন সরাইতেছিস সরাইতেছে সরাইতেছেন সরাইতেন সরাইব সরাইবার সরাইবি সরাইবে সরাইবেন সরাইল সরাইলাম সরাইলি সরাইলে সরাইলেন সরাইয়া সুরাইয়া সরাইয়াছ সরাইয়াছি সরাইয়াছিল সরাইয়াছিলাম সরাইয়াছিলি সরাইয়াছিলে সরাইয়াছিলেন সরাইয়াছিস সরাইয়াছে সরাইয়াছেন সরাইয়ো সরাক সুরাক সুরাকা সুরাখ সুরাগৃহ সুরাঙ্গনা সরাচ্ছ সরাচ্ছি সরাচ্ছিল সরাচ্ছিলাম সরাচ্ছিলি সরাচ্ছিলে সরাচ্ছিলেন সরাচ্ছিলেম সরাচ্ছিলুম সরাচ্ছিস সরাচ্ছে সরাচ্ছেন সুরাজীব সুরাজীবী সুরাট সরাত সুরাত সরাতাম সরাতিস সরাতে সরাতেন সরাতেম সরাতুম সরান সরানো সুরান্তর সরাপ সুরাপ সুরাপান সুরাপানোদ্দীপ্ত সুরাপানোন্মত্ত সুরাপায়ী সরাফত সরাফতি সরাব স্রাব স্রাবক সরাবখান সরাবার সরাবি স্রাবিত স্রাবী সরাবে সরাবেন সরাবো স্রাবণ সরাবত সুরারোপ সুরারোপিত সুরারঞ্জিত সরাল সুরালাপ সরালাম সরালি সরালে সরালেন সরালেম সরালুম সুরালয় সুরাশ্রিত সরাস সুরাসক্ত সুরাসক্তি সুরাসার সুরাসব সরাসর সুরাসুর সরাসরি সরাসরিভাব সরাসরিভাবে সুরাহা সুরাহার সুরাহি সুরাহী সরায়ে সরি সূরি সরিক সরিকান সরিকানা সরিতাম সরিতিস সরিতে সরিতেছ সরিতেছি সরিতেছিল সরিতেছিলাম সরিতেছিলি সরিতেছিলে সরিতেছিলেন সরিতেছিস সরিতেছে সরিতেছেন সরিতেন সরিব সরিবার সরিবি সরিবে সরিবেন সরিল সরিলাম সরিলি সরিলে সরিলেন সরিষা সরিষাবাড়ি সরিস সরিয়া সরিয়াছ সরিয়াছি সরিয়াছিল সরিয়াছিলাম সরিয়াছিলি সরিয়াছিলে সরিয়াছিলেন সরিয়াছিস সরিয়াছে সরিয়াছেন সরিয়ে সরিয়েছ সরিয়েছি সরিয়েছিল সরিয়েছিলাম সরিয়েছিলি সরিয়েছিলে সরিয়েছিলেন সরিয়েছিলেম সরিয়েছিলুম সরিয়েছিস সরিয়েছে সরিয়েছেন সরিয়ো সুরী সূরী সুরুচি সুরচিত সুরুচিবান সুরুচিসম্পন্ন সুরুচিসম্মত সরীসৃপ সরীসৃপাদি সরেওয়ার সুরেখা সরেছ সরেছি সরেছিল সরেছিলাম সরেছিলি সরেছিলে সরেছিলেন সরেছিলেম সরেছিলুম সরেছিস সরেছে সরেছেন সরেজমিন সুরেণু সরেন সুরেন সুরেন্দ্র স্রেফ সুরেরটান সুরেলা সুরেশ সুরেশ্বর সুরেশ্বরী সরেস সরো সরোকার সরোজ সরোজিনী স্রোত স্রোতা স্রোতোবহা স্রোতযুক্ত সুরোত্তম স্রোতবন্ধ সুরোৎসব স্রোতস্বিনী স্রোতস্বতী স্রোতহীন সরোদ সরোবর সরোরুহ সরোষ সরছ সরছি সরছিল সরছিলাম সরছিলি সরছিলে সরছিলেন সরছিলেম সরছিলুম সরছিস সরছে সরছেন সর্জ সুরুজ স্রজ সর্জি সর্জিকা সর্জী সর্জ্জ সর্জ্জন সর্জ্য সর্জন সর্জমান সরজমিন সর্জরস সরঞ্জাম সরঞ্জামাদি সুরঞ্জিত সুরঞ্জিতা সুরঞ্জন সরট সরযু সরযূ সর্ট সুরট সূর্য সূর্যকান্ত সূর্যকিরণ সূর্যকিরণে সূর্যকেন্দ্রিক সূর্যকেন্দ্রিকতা সূর্যকর সূর্যগ্রহণ সূর্যঘড়ি সূর্যালোক সূর্যালোকিত সূর্যালোকপাত সূর্যাস্ত সূর্যাস্তকাল সূর্যি সর্টিং সূর্যচন্দ্র সূর্যচন্দ্রাদি সূর্যোদয় সূর্যোপাসক সূর্যোপাসনা সুরযোষা সূর্য্যি সূর্যতাপ সূর্যতোরণ সূর্যতনয় সূর্যতনয়া সূর্যদেব সুর্যনগর সূর্যনগরী সূর্যপূজা সূর্যপত্নী সূর্যপুত্র সূর্যপথ সূর্যপ্রদক্ষিণ সূর্যপৃষ্ঠ সূর্যবংশ সূর্যবংশীয় সূর্যবন্দনা সূর্যমুখী সূর্যমণি সূর্যর সুরটরাগ সূর্যরথ সূর্যরশ্মি সূর্যলোক সূর্যসাক্ষী সূর্যসারথি সূর্যসিদ্ধান্ত সূর্যস্নান সরণ সরণি সরণী সরণশীল সরত সর্ত সুরত সূরত স্রুত সুরতওয়ালি সর্তক সর্তকতা সরতা সর্তা সুরতা সরতাম সরুতার সুরতি সুর্তি সূর্তি স্রুতি সরতিস সূর্তী সরতে সরতেন সরতেম সুরতোলা সর্তভঙ্গ সর্তভঙ্গকারী সরতুম সুরতরু সুরতরঙ্গ সুরতুল্য সর্তসাপেক্ষ সুরতহাল সুরৎহাল সরদ সরদার সর্দার সর্দারকয়েদি সর্দারখালাসি সরদারি সর্দারি সরদারনী সর্দারনী সর্দারশ্রমিক সর্দি সর্দিকাশি সর্দিগম্মি সর্দিগরমি সর্দিগর্মি সর্দী সরদেয়াল সুরধুনী সুরধর্মিতা সুরধর্মী সরুন সুরনদী সরন্দীপ সরূপ সর্প সুরূপ সূর্প সর্পকুল সর্পগন্ধা সুরূপা সর্পাকৃতি সর্পাঘাত সরুপাড় সর্পিণী সর্পিল সর্পিলাকার সর্পিলাকৃতি সর্পী সূর্পী সর্পচয় সরপেচ সরপেঁচ সরপোশ সরপোষ সর্পজাতি সর্পজ্ঞান সরপুঁটি সরপুঁঠি সূর্পণখা সরূপতা সুরপতি সর্পদেবী সর্পদষ্ট সর্পধারী সর্পবিষ সর্পভুক সর্পভ্রম সর্পমণি সর্পমণ্ডলী সর্পমন্ত্র সুরপুর সর্পরাজ সরপুরিয়া সুরপুরী সুরপ্রধান সর্পহা সরফরাজ সরফরাজি সরফর্দা সরব সরূব সর্ব সুরব স্রব সর্বংসহ সর্বংসহা সর্বকামনা সর্বকাল সর্বকালীন সর্বকনিষ্ঠ সর্বকর্ম সর্বক্ষেত্র সর্বক্ষণ সর্বক্ষমতা সর্বগ সর্বগা সর্বগামিনী সর্বগামী সর্বগুণ সর্বগুণাধার সর্বগুণান্বিতা সর্বগুণনিধি সর্বগত সর্বগ্রাস সর্বগ্রাসিনী সর্বগ্রাসী সর্বগ্রাহ্য সর্বঘ সর্বাঙ্গ সর্বাঙ্গীণ সর্বাঙ্গব্যাপী সর্বাঙ্গসুন্দর সর্বাঙ্গসম্পন্ন সর্বাঙ্গসম্পূর্ণ সর্বাতিরিক্ত সর্বাতীত সর্বাত্মক সর্বাদৃত সর্বাধার সর্বাধিক সর্বাধিকারী সর্বাধিকবার সর্বাধিনায়ক সর্বাধিপত্য সর্বাধুনিক সর্বান্তকরণ সর্বান্তর্যামী সর্বানুভূ সর্বানুভূত সর্বানুভূতি সর্বাপেক্ষা সর্বাবস্থা সর্বাভরণ সরবার সর্বার্থ সর্বার্থসাধক সর্বার্থসাধিকা সর্বার্থসিদ্ধি সুরবালা সর্বাশী সুরবাহার সরবি সুরবিনাশিনী সর্বিস সুরবিস্তার সরবে সরবেন সর্বেশ্বর সর্বেসর্বা সরবো সর্বোৎকৃষ্ট সর্বোত্তম সর্বোত্তর সুরবোধ সর্বোপরি সর্বজাতীয় সর্বজীব সর্বজ্ঞ সর্বজ্ঞানী সর্বজ্যেষ্ঠ সর্বজন সর্বজনখ্যাত সর্বজনগৃহীত সর্বজনীন সর্বজনীনতা সর্বজনীনতাবাদ সর্বজনীনভাবে সর্বজনপ্রিয় সর্বজনবিদিত সর্বজনবোধ্য সর্বজনভোগ্য সর্বজনস্বীকৃত সর্বজনসম্মত সর্বজনহিতকর সর্বযুগ স্রবণ সরবত সর্বত সরবতি সর্বতোভাবে সর্বতোভদ্র সর্বতোমুখ সর্বতোমুখা সর্বতোমুখী সর্বত্যাগী সর্বতন্ত্র সর্বত্র সর্বত্রগামিনী সর্বত্রগামী সর্বত্রব্যাপী সর্বত্রস্থিত সর্বথা সর্বদক্ষিণ সর্বদা সর্বদিক সর্বদেশীয় সর্বদর্শী সর্বদলীয় সর্বধর্ম সর্বনাম সর্বনামীয় সর্বনাশ সর্বনাশকারী সর্বনাশকর সর্বনাশগ্রস্ত সর্বনাশা সর্বনাশিনী সর্বনাশিয়া সর্বনাশী সর্বনিকৃষ্ট সর্বনিম্ন সর্বনিম্নগড় সর্বনিম্নমূল্য সর্বনিম্নস্থ সর্বনিয়ন্তা সর্বনিয়ন্ত্রী সর্বনেশে সরবন্দ সরবন্ধ সর্বপ্রকার সর্বপ্রাচীন সর্বপ্রাণবাদ সর্বপ্রিয় সর্বপ্রথম সর্বপ্রধান সর্বপশ্চিম সর্ববাদিনী সর্ববাদিসম্মত সর্ববাদিসম্মতিক্রমে সর্ববাদী সর্ববিদিত সর্ববিদ্যা সর্ববিষয়ক সর্ববিষয়ে সর্ববিষয়ব্যাপী সর্বব্যাপিণী সর্বব্যাপী সর্ববৃত্তা সর্ববৃত্তান্ত সর্ববহিঃস্থস্তর সর্ববহিস্থ সর্ববৃহৎ সর্বভুক সর্বভক্ষ সর্বভক্ষ্য সর্বভাবে সর্বভারতীয় সর্বভূত সর্বভূতে সর্বভূতের সর্বমঙ্গলা সর্বমঙ্গলের সর্বমঙ্গল্য সর্বমঙ্গল্যা সর্বমানব সর্বমোট সর্বময় সর্বময়ী সরবর সর্বরকম সরবরা সরবরাহ সরবরাহক সরবরাহকারী সরবরাহকৃত সরবরাহি সর্বরিক্ত সর্বলোক সুরবল্লি সর্বশ সর্বশক্তি সর্বশক্তিমান সর্বশী সর্বশুচি সর্বশেষ সর্বশুদ্ধ সর্বশ্রেণী সর্বশ্রেষ্ঠ সর্বশ্রেষ্ঠা সরবস সর্বসাকুল্য সর্বসাধারণ সর্বসিদ্ধি সর্বসেরা সর্বস্তর সর্বস্ব সর্বস্বান্ত সর্বস্বতা সর্বস্বসমর্পণ সর্বস্বহারা সর্বসমক্ষে সর্বসমেত সর্বসমন্বয়ী সর্বসম্মত সর্বসম্মতি সর্বসম্মতিক্রমে সর্বসম্মতভাবে সর্বসময় সরবসর সর্বসহ সর্বসহা সর্বহারা সর্বহিতকর সর্বহন্তা সুরভঙ্গি সরভাজা সুরভি সুরভিত সুরভী সরম সরুমুখ সরমা সুরমা সুর্মা সুরমাদান সুর্মাদান সুরমাদানি সুর্মাদানি সরমিন্দা সরমেন্দা সুরম্য সরমবিভাস সরমভরম সরমরাঙ্গা সরমরাঙা সুরমূল সুরমল্লাররাগ সরল সরলকোণ সরলগতি সরলা সুরলাপ সরলাম সুরলিপি সরলীকৃত সরলীকরণ সরলীভবন সরলে সরলেন সরলেম সুরলোক সরলতা সরলতম সরলতর সরলপুঁটি সরলপ্রাণ সরলবিশ্বাস সরলবর্গীয় সরলভাবে সরলুম সরলমনা সরলমনস্কতা সরলরেখা সরলরৈখিক সরলরৈখিকভাবে সরলশান্ত সুর্শা সুর্ষা সরষে সর্ষে সুর্ষো স্রষ্টা স্রষ্টাতত্ত্ব স্রষ্টব্য সর্ষপ সরস সুরস সুরসংযোগ সরসা সুরসাধন সুরসাধনা সুরসাল সুরসিক সুরসিকা সরসিজ সুরসিন্ধু সরসী সরসীরুহ স্রস্টা স্রস্ত সরসতা সুরসুন্দরী সুরসপ্তক সরস্বতী সরস্বতীপূজা সরসভাবে সুরসম্পর্কিত সরসর সরহ সুরহীনতা সরহদ সরহদ্দ সরহর্দ সরুয়া সরূয়া সুরুয়া স্লুইস স্লুইসগেট সলওয়া সলুক সুলুক সুলক্ষিত সুলক্ষণ সুলক্ষণা সুলক্ষণযুক্ত সুলুকসন্ধান সুলগ্ন সলা স্লাইড স্লাইস সলাজ সলাপরামর্শ সলামন্ত্রণা সলি সলিকা সুলিখিত সলিড সলিতা স্লিপ স্লিপার স্লিপিং স্লিপলেস স্লিপস স্লিভলেস স্লিম সলিল সলিলময় সলিলসমাধি সলিসিটর সলীল সুলেখ সুলেখক স্লেজ স্লেজবাহিত স্লেট স্লেভারি সুলেমান সুলেমানি সুলেমানী স্লো স্লোগান সুলোচন সুলোচনা স্লোভাক স্লোভাকিয়া স্লোভাকিয়ান স্লোভাকীয় স্লোভেনিয়া স্লোভেনীয় সলোমন সুলোহিত সলজ্জ সলজ্জিত সল্ট স্লট স্ল্যাং সল্যুশন সল্যুশনস সুলতান সুলতানগঞ্জ সুলতানা সুলতানার সুলতানি সুলতানপুর সলতে সলতনৎ সুলুপ সলুপা সুলভ সলমা সলমাচুমকি সুলম্ব সুললিত সল্লভ সশঙ্ক সশঙ্কিত সুশৃঙ্খল সুশৃঙ্খলা সুশৃঙ্খলাযুক্ত সুশৃঙ্খলিত সুশৃঙ্খলভাবে সুশান্ত সুশাসক সুশাসিত সুশাসন সুশাসনকারী সুশিক্ষক সুশিক্ষা সুশিক্ষিত সুশিক্ষিতা সশিষ্য সুশীত সুশীতল সুশীল সুশীলা সুশীলতা সুশোভিত সুশোভিতা সুশোভন সুশোভনা সুশোষিত সশব্দ সুশম সুশ্রাব্য সুশ্রী সশরীর সুশ্রোণি সুশ্রুত সুশ্রব সশ্রম সুশ্লিষ্ট সশস্ত্র সুষির সৃষ্ট সৃষ্টকারী সৃষ্টি সৃষ্টিকারী সৃষ্টিকার্য সৃষ্টিকৌশল সৃষ্টিক্রিয়া সৃষ্টিকরণ সৃষ্টিকর্তা সৃষ্টিকর্ম সৃষ্টিকুশলী সৃষ্টিছাড়া সৃষ্টিতারিখ সৃষ্টিতত্ত্ব সৃষ্টিতত্ত্বীয় সৃষ্টিধ্বংস সৃষ্টিধর সৃষ্টিধর্মিতা সৃষ্টিধর্মী সৃষ্টিনাশ সৃষ্টিনাশক সৃষ্টিনাশা সৃষ্টিবাদী সৃষ্টিরক্ষা সৃষ্টিরহস্য সৃষ্টিলগ্ন সৃষ্টিশীল সৃষ্টিশীলতা সৃষ্টিসংহার সৃষ্টিসুখ সৃষ্টিস্থিতি সৃষ্টিস্থিতিলয় সুষ্ঠু সুষ্ঠুগঠন সুষ্ঠুতা সুষ্ঠুভাবে সুষনি সুষুনি সুষুপ্ত সুষুপ্তি সুষম সুষমা সুষমামণ্ডিত সুষমাময় সুষমাময়ী সুষমতা সুষুম্না সুষুম্নাকাণ্ড সুষমভাবে সস সসংকোচ সুসংগঠিত সুসংগত সুসংগতি সুসংঘটিত সসংজ্ঞ সুসংজ্ঞায়িত সুসংযুক্ত সুসংযত সুসংবাদ সুসংবৃত সুসংবৃতা সুসংবদ্ধ সুসংবৃদ্ধ সুসংবদ্ধকরণ সুসংরব্ধ সুসংস্কৃত সুসংস্থিত সুসংহত সুসঙ্গ সুসঙ্গত সুসঙ্গতি সসাগরা সুসাধ্য সুসামঞ্জস্য সসার সুসার সুসারিত সুসিক্ত সুসিদ্ধ সসীম সসেমিরা সসৈন্য সসজ্জ সুসজ্জ সুসজ্জা সসজ্জিত সুসজ্জিত সুসজ্জিতা সুসজ্জীকৃত সুসজ্জীভূত সুস্ত সস্তা সস্তাদর সুস্তি সসত্ত্ব সসত্ত্বা সস্ত্রীক সুস্থ সুস্থিত সুস্থিতি সুস্থিতিকারক সুস্থির সুস্থচিত্ত সুস্থতা সুস্থতাজনিত সুস্থতাপূর্ণ সুস্থভাবে সুস্নাত সুস্নিগ্ধ সস্নেহ সুসন্তান সুস্পর্শ সুস্পষ্ট সুস্পষ্টভাবে সুস্পষ্টরূপে সস্পৃহ সুস্বাগত সুস্বাদ সুস্বাদু সুস্বাদযুক্ত সুস্বাস্থ্য সুস্বন সুস্বপ্ন সুস্বভাব সুস্বর সুসভ্য সুসভ্যা সসম সুসম সুসমাপ্ত সুসমাহিত সস্মিত সুস্মিত সুস্মিতা সুসমঞ্জস সুসমৃদ্ধ সুসম্পাদিত সুসম্পন্ন সুসম্পর্ক সুসম্বন্ধ সসম্ভ্রম সসম্মান সুসময় সুসর সুসুরা সুসহ সহ সহকার সহকারিণী সহকারিতা সহকারী সহকর্মী সহগ সহগামিনী সহগামী সহগতি সহগমন সহগমনকারিণী সহগমনকারী সহা সুহা সহাই সহাইত সহাইতাম সহাইতিস সহাইতে সহাইতেছ সহাইতেছি সহাইতেছিল সহাইতেছিলাম সহাইতেছিলি সহাইতেছিলে সহাইতেছিলেন সহাইতেছিস সহাইতেছে সহাইতেছেন সহাইতেন সহাইব সহাইবার সহাইবি সহাইবে সহাইবেন সহাইল সহাইলাম সহাইলি সহাইলে সহাইলেন সহাইয়া সহাইয়াছ সহাইয়াছি সহাইয়াছিল সহাইয়াছিলাম সহাইয়াছিলি সহাইয়াছিলে সহাইয়াছিলেন সহাইয়াছিস সহাইয়াছে সহাইয়াছেন সহাইয়ো সহাক সহাধ্যায়িনী সহাধ্যায়ী সহান সহানো সহানুভূতি সহানুভূতিশীল সহানুভূতিসম্পন্ন সহাবস্থান সহাবস্থানকারী সহাবস্থানিক সুহাস সুহাসা সুহাসিনী সুহাসী সহাস্য সহাস্যমুখ সহায় সহায়ক সহায়িকা সহায়তা সহায়তাকারী সহায়তাকল্প সহায়তাজাত সহায়ত্ব সহায়ভাবে সহায়সম্পত্তি সহায়সম্পদ সহায়সম্বল সহায়সম্বলহীন সহায়সম্বলহীনা সহায়হীন সহায়হীনা সহায়হীনতা সহি সহিংস সহিংসতা সহিংসতাবিরোধী সহিত সুহিত সহিতাম সহিতে সহিতেছ সহিতেছি সহিতেছিল সহিতেছিলাম সহিতেছিলি সহিতেছিলে সহিতেছিলেন সহিতেছিস সহিতেছে সহিতেছেন সহিতেন সহিদ সহিব সহিবার সহিবি সহিবে সহিবেন সহিল সহিলাম সহিলি সহিলে সহিলেন সহিষ্ণু সহিষ্ণুতা সহিস সহিসালামত সহিয়া সহিয়াছ সহিয়াছি সহিয়াছিল সহিয়াছিলাম সহিয়াছিলি সহিয়াছিলে সহিয়াছিলেন সহিয়াছিস সহিয়াছে সহিয়াছেন সহিয়ো সহচারিণী সহচারী সহচর সহচরী সহচররূপে সহেন সহেলি সহেলী সহোদর সহোদরা সহোদরপ্রতিম সহজ সহজগম্য সহজাত সহজাতভাবে সহজি সহজিয়া সহজী সহজজ্ঞান সহজতম সহজতর সহজপাচ্য সহজপাঠ্য সহজপটুতা সহজপ্রাপ্যতা সহজপ্রবৃত্তি সহজবোধ্য সহজবোধ্যতা সহজবোধ্যভাবে সহজভাবে সহজমতে সহজলভ্য সহজসাধ্য সহজসাধ্যতা সহজসাধন সহজসরল সহ্য সহ্যকারিণী সহ্যকরণ সহ্যক্ষমতা সহ্যগুণ সহ্যাতীত সহযাত্রা সহযাত্রী সহ্যাদ্রি সহযায়ী সহযোগ সহযোগিতা সহযোগিতাপূর্ণ সহযোগী সহযোজক সহযোজন সহযোদ্ধা সহ্যশক্তি সুহৃৎ সুহৃদ সুহৃদবর সুহৃদ্বর সুহৃদসম্মিত সহৃদয় সুহৃদয় সহৃদয়া সহৃদয়তা সহধুরী সহধর্মিণী সহধর্মী সহন সহনাতীত সহনায়ক সহনির্দেশক সহনীয় সহনীয়তা সহনযোগ্য সহনশক্তি সহনশক্তিহীন সহনশীল সহনশীলা সহনশীলতা সহনসীমা সহপাঠিনী সহপাঠী সহপাঠ্য সহপাঠ্যক্রম সহপ্রকল্প সহপরিচালক সহপ্রতিষ্ঠাতা সহবাস সহবিন্যাস সহবত সহবৎ সহবতি সহবতী সহবতদুরস্ত সহবৎদুরস্ত সহবর্তমানতা সহবস্থান সহমুক্তিযোদ্ধা সহমৃত সহমৃতা সহমরণ সহমর্মিতা সহর সহুর সহুরে সহরত সহর্ষ সহলিপি সহলেখক সহশিক্ষক সহশিক্ষা সহসগমনকারী সহসা সুহস্ত সহসভাপতি সহসম্পাদক সহসম্পাদকত্ব সহসম্পাদিত সহস্র সহসরকারী সহস্রকিরণ সহস্রকর সহস্রাংশু সহস্রাক্ষ সহস্রাধিক সহস্রাব্দ সহস্রার সহস্রৈক সহস্রদল সহস্রধারা সহস্রনয়ন সহস্রপাদ সহস্রপদ সহস্রবার সহস্ররকম সহস্রলোচন সড় সড়ক সড়কি সড়কপথ সড়গড় সুড়ঙ্গ সুড়ঙ্গপথ সড়াক সড়াৎ সুঁড়ি সড়িঙ্গী সড়োগড়ো সুড়ত সুড়ুত সড়থাকা সড়সড় সুড়সুড় সুড়সুড়ি সয়া সুয়া সুয়ানা সয়ানি সয়াবিন সয়াল সয়েছ সয়েছি সয়েছিল সয়েছিলাম সয়েছিলি সয়েছিলে সয়েছিলেন সয়েছিলেম সয়েছিলুম সয়েছিস সয়েছে সয়েছেন সুয়েজ সুয়েটার সুয়ো সুয়োরানী সয়তান সয়তানি সয়ফুল্লাহ সয়লাব".split(" "),
              w_sh: "শ শু শংসা শংসাপত্র শংসিত শংস্য শংসন শুই শইখ শুইত শুইতাম শুইতিস শুইতে শুইতেছ শুইতেছি শুইতেছিল শুইতেছিলাম শুইতেছিলি শুইতেছিলে শুইতেছিলেন শুইতেছিস শুইতেছে শুইতেছেন শুইতেন শুইনা শুইব শুইবার শুইবি শুইবে শুইবেন শুইল শুইলাম শুইলি শুইলে শুইলেন শুইয়া শুইয়াছ শুইয়াছি শুইয়াছিল শুইয়াছিলাম শুইয়াছিলি শুইয়াছিলে শুইয়াছিলেন শুইয়াছিস শুইয়াছে শুইয়াছেন শুইয়ে শুইয়েছ শুইয়েছি শুইয়েছিল শুইয়েছিলাম শুইয়েছিলি শুইয়েছিলে শুইয়েছিলেন শুইয়েছিলেম শুইয়েছিলুম শুইয়েছিস শুইয়েছে শুইয়েছেন শুইয়ো শউর শউল শওক শওকীন শওকত শওখ শওগাত শওয়াল শক শুক শূক শুঁক শুকক শুঁকক শুঁকুক শূককীট শক্কর শুক্কুরবার শুকা শুঁকা শুকাই শুঁকাই শুকাইও শুঁকাইও শুকাইত শুঁকাইত শুকাইতাম শুঁকাইতাম শুকাইতিস শুঁকাইতিস শুকাইতে শুঁকাইতে শুকাইতেছ শুঁকাইতেছ শুকাইতেছি শুঁকাইতেছি শুকাইতেছিল শুঁকাইতেছিল শুকাইতেছিলাম শুঁকাইতেছিলাম শুকাইতেছিলি শুঁকাইতেছিলি শুকাইতেছিলে শুঁকাইতেছিলে শুকাইতেছিলেন শুঁকাইতেছিলেন শুকাইতেছিস শুঁকাইতেছিস শুকাইতেছে শুঁকাইতেছে শুকাইতেছেন শুঁকাইতেছেন শুকাইতেন শুঁকাইতেন শুকাইব শুঁকাইব শুকাইবার শুঁকাইবার শুকাইবি শুঁকাইবি শুকাইবে শুঁকাইবে শুকাইবেন শুঁকাইবেন শুকাইল শুঁকাইল শুকাইলাম শুঁকাইলাম শুকাইলি শুঁকাইলি শুকাইলে শুঁকাইলে শুকাইলেন শুঁকাইলেন শুকাইয়া শুঁকাইয়া শুকাইয়াছ শুঁকাইয়াছ শুকাইয়াছি শুঁকাইয়াছি শুকাইয়াছিল শুঁকাইয়াছিল শুকাইয়াছিলাম শুঁকাইয়াছিলাম শুকাইয়াছিলি শুঁকাইয়াছিলি শুকাইয়াছিলে শুঁকাইয়াছিলে শুকাইয়াছিলেন শুঁকাইয়াছিলেন শুকাইয়াছিস শুঁকাইয়াছিস শুকাইয়াছে শুঁকাইয়াছে শুকাইয়াছেন শুঁকাইয়াছেন শুকাইয়ো শুঁকাইয়ো শুকাক শুঁকাক শুকান শুঁকান শুকানো শুঁকানো শকাব্দ শকারি শকারবকার শুকালে শুকাস শুঁকাস শুকি শুঁকি শুঁকিত শুঁকিতাম শুঁকিতিস শুঁকিতে শুঁকিতেছ শুঁকিতেছি শুঁকিতেছিল শুঁকিতেছিলাম শুঁকিতেছিলি শুঁকিতেছিলে শুঁকিতেছিলেন শুঁকিতেছিস শুঁকিতেছে শুঁকিতেছেন শুঁকিতেন শুঁকিব শুঁকিবার শুঁকিবি শুঁকিবে শুঁকিবেন শুঁকিল শুঁকিলাম শুঁকিলি শুঁকিলে শুঁকিলেন শুঁকিস শুঁকিয়া শুঁকিয়াছ শুঁকিয়াছি শুঁকিয়াছিল শুঁকিয়াছিলাম শুঁকিয়াছিলি শুঁকিয়াছিলে শুঁকিয়াছিলেন শুঁকিয়াছিস শুঁকিয়াছে শুঁকিয়াছেন শুকিয়ে শুঁকিয়ে শুকিয়েছ শুঁকিয়েছ শুকিয়েছি শুঁকিয়েছি শুকিয়েছিল শুঁকিয়েছিল শুকিয়েছিলাম শুঁকিয়েছিলাম শুকিয়েছিলি শুঁকিয়েছিলি শুকিয়েছিলে শুঁকিয়েছিলে শুকিয়েছিলেন শুঁকিয়েছিলেন শুকিয়েছিলেম শুঁকিয়েছিলেম শুকিয়েছিলুম শুঁকিয়েছিলুম শুকিয়েছিস শুঁকিয়েছিস শুকিয়েছে শুঁকিয়েছে শুকিয়েছেন শুঁকিয়েছেন শুকিয়ো শুঁকিয়ো শুকী শুকচ্ছ শুঁকচ্ছ শুকচ্ছি শুঁকচ্ছি শুকচ্ছিল শুঁকচ্ছিল শুকচ্ছিলাম শুঁকচ্ছিলাম শুকচ্ছিলি শুঁকচ্ছিলি শুকচ্ছিলে শুঁকচ্ছিলে শুকচ্ছিলেন শুঁকচ্ছিলেন শুকচ্ছিলেম শুঁকচ্ছিলেম শুকচ্ছিলুম শুঁকচ্ছিলুম শুকচ্ছিস শুঁকচ্ছিস শুকচ্ছে শুঁকচ্ছে শুকচ্ছেন শুঁকচ্ছেন শুঁকে শুঁকেছ শুঁকেছি শুঁকেছিল শুঁকেছিলাম শুঁকেছিলি শুঁকেছিলে শুঁকেছিলেন শুঁকেছিলেম শুঁকেছিলুম শুঁকেছিস শুঁকেছে শুঁকেছেন শুঁকেন শুকো শুঁকো শুকোনো শুকোলে শুঁকছ শুঁকছি শুঁকছিল শুঁকছিলাম শুঁকছিলি শুঁকছিলে শুঁকছিলেন শুঁকছিলেম শুঁকছিলুম শুঁকছিস শুঁকছে শুঁকছেন শকট শক্য শকটাক্ষ শকটারি শকটিকা শকটচালক শক্যতা শকটদৈত্য শকটবাহ্য শকটবূহ্য শক্ত শক্তু শুকত শুক্ত শুঁকত শক্তঘানি শকতা শুক্তা শুক্তানি শুকতাম শুঁকতাম শুকতারা শকতি শক্তি শুক্তি শক্তিউপাসক শক্তিউপাসনা শুক্তিকা শক্তিকেন্দ্র শক্তিকলা শক্তিগড় শুক্তিজ শুক্তিজাত শক্তিযুক্ত শক্তিতাল শক্তিত্রয় শক্তিদশা শক্তিধারী শক্তিধর শক্তিনগর শক্তিনির্ণয় শক্তিপীঠ শক্তিপূজা শক্তিপদ শক্তিপরীক্ষা শুক্তিবীজ শক্তিব্যয় শক্তিবৃদ্ধি শক্তিবৃদ্ধিকারী শক্তিবর্গ শক্তিবর্ধক শক্তিবল শক্তিমাত্রা শক্তিমান শক্তিমতী শক্তিমত্ত শক্তিমত্তা শক্তিমত্ততা শক্তিময় শক্তিময়ী শক্তিরূপ শক্তিলাভ শক্তিশালিতা শক্তিশালিনী শক্তিশালী শুকতিস শুঁকতিস শক্তিসংকোচন শুক্তিসাগর শক্তিসাধক শক্তিসামর্থ্য শক্তিসঞ্চার শক্তিসঞ্চারণ শক্তিস্তর শক্তিসম্পদ শক্তিসম্পন্ন শক্তিহীন শক্তিহীনা শক্তিহীনতা শক্তিহ্রাস শুকতে শুঁকতে শুকতেন শুঁকতেন শুকতেম শুঁকতেম শুক্তো শুক্তনি শুক্তুনি শক্তপোক্ত শক্তভাবে শুকতুম শুঁকতুম শক্তসমর্থ শকদেশীয় শূকধান্য শকুন শুকন শুঁকন শুঁকুন শুকনা শুকনাবরফ শুকনাস শকুনি শকুনিমামা শুকনো শুঁকনো শকুনজ্ঞ শকুন্ত শকুনতত্ত্ব শকুন্তলা শকুনপাখি শুকপাখি শুকব শুঁকব শুকবার শুঁকবার শুকবি শুঁকবি শুকবে শুঁকবে শুকবেন শুঁকবেন শুকবো শুঁকবো শকর শক্র শুকর শুকুর শুক্র শূকর শকরকন্দ শুক্রগ্রহ শুক্রঘটিত শুক্রাচার্য শকরাজ শুক্রাণু শক্রাণী শুকরান শুক্রাশয় শূকরী শুক্রীয় শক্রজিৎ শূকরত্ব শক্রধনু শুক্রবার শক্রবাহ শক্রভবন শকল শকুল শুকল শুক্ল শুঁকল শুক্লকর্মা শুকলা শুক্লা শুকলাম শুঁকলাম শুক্লাম্বর শুক্লাম্বরী শুকলাল শুকলি শুঁকলি শুক্লিমা শকলী শুকলে শুঁকলে শুকলেন শুঁকলেন শুকলেম শুঁকলেম শুক্লতা শুক্লতাপ্রাপ্ত শুক্লত্ব শুক্লপক্ষ শকুলবদরী শুক্লবস্ত্র শুকলুম শুঁকলুম শুক্লমণ্ডল শুকস শুঁকস শুকড়িয়ে শখ শুঁখ শুখক শুঁখক শুঁখুক শুখা শুঁখা শুখাই শুঁখাই শুখাইও শুঁখাইও শুখাইছে শুখাইত শুঁখাইত শুখাইতাম শুঁখাইতাম শুখাইতিস শুঁখাইতিস শুখাইতে শুঁখাইতে শুখাইতেছ শুঁখাইতেছ শুখাইতেছি শুঁখাইতেছি শুখাইতেছিল শুঁখাইতেছিল শুখাইতেছিলাম শুঁখাইতেছিলাম শুখাইতেছিলি শুঁখাইতেছিলি শুখাইতেছিলে শুঁখাইতেছিলে শুখাইতেছিলেন শুঁখাইতেছিলেন শুখাইতেছিস শুঁখাইতেছিস শুখাইতেছে শুঁখাইতেছে শুখাইতেছেন শুঁখাইতেছেন শুখাইতেন শুঁখাইতেন শুখাইব শুঁখাইব শুখাইবার শুঁখাইবার শুখাইবি শুঁখাইবি শুখাইবে শুঁখাইবে শুখাইবেন শুঁখাইবেন শুখাইল শুঁখাইল শুখাইলাম শুঁখাইলাম শুখাইলি শুঁখাইলি শুখাইলে শুঁখাইলে শুখাইলেন শুঁখাইলেন শুখাইয়া শুঁখাইয়া শুখাইয়াছ শুঁখাইয়াছ শুখাইয়াছি শুঁখাইয়াছি শুখাইয়াছিল শুঁখাইয়াছিল শুখাইয়াছিলাম শুঁখাইয়াছিলাম শুখাইয়াছিলি শুঁখাইয়াছিলি শুখাইয়াছিলে শুঁখাইয়াছিলে শুখাইয়াছিলেন শুঁখাইয়াছিলেন শুখাইয়াছিস শুঁখাইয়াছিস শুখাইয়াছে শুঁখাইয়াছে শুখাইয়াছেন শুঁখাইয়াছেন শুখাইয়ো শুঁখাইয়ো শুখাক শুঁখাক শুখান শুঁখান শখানেক শুখানো শুঁখানো শুখারুখা শুখাস শুঁখাস শুখি শুঁখি শুঁখিত শুঁখিতাম শুঁখিতিস শুঁখিতে শুঁখিতেছ শুঁখিতেছি শুঁখিতেছিল শুঁখিতেছিলাম শুঁখিতেছিলি শুঁখিতেছিলে শুঁখিতেছিলেন শুঁখিতেছিস শুঁখিতেছে শুঁখিতেছেন শুঁখিতেন শখিন শুঁখিব শুঁখিবার শুঁখিবি শুঁখিবে শুঁখিবেন শুঁখিল শুঁখিলাম শুঁখিলি শুঁখিলে শুঁখিলেন শুঁখিস শুঁখিয়া শুঁখিয়াছ শুঁখিয়াছি শুঁখিয়াছিল শুঁখিয়াছিলাম শুঁখিয়াছিলি শুঁখিয়াছিলে শুঁখিয়াছিলেন শুঁখিয়াছিস শুঁখিয়াছে শুঁখিয়াছেন শুখিয়ে শুঁখিয়ে শুখিয়েছ শুঁখিয়েছ শুখিয়েছি শুঁখিয়েছি শুখিয়েছিল শুঁখিয়েছিল শুখিয়েছিলাম শুঁখিয়েছিলাম শুখিয়েছিলি শুঁখিয়েছিলি শুখিয়েছিলে শুঁখিয়েছিলে শুখিয়েছিলেন শুঁখিয়েছিলেন শুখিয়েছিলেম শুঁখিয়েছিলেম শুখিয়েছিলুম শুঁখিয়েছিলুম শুখিয়েছিস শুঁখিয়েছিস শুখিয়েছে শুঁখিয়েছে শুখিয়েছেন শুঁখিয়েছেন শুখিয়ো শুঁখিয়ো শুখচ্ছ শুঁখচ্ছ শুখচ্ছি শুঁখচ্ছি শুখচ্ছিল শুঁখচ্ছিল শুখচ্ছিলাম শুঁখচ্ছিলাম শুখচ্ছিলি শুঁখচ্ছিলি শুখচ্ছিলে শুঁখচ্ছিলে শুখচ্ছিলেন শুঁখচ্ছিলেন শুখচ্ছিলেম শুঁখচ্ছিলেম শুখচ্ছিলুম শুঁখচ্ছিলুম শুখচ্ছিস শুঁখচ্ছিস শুখচ্ছে শুঁখচ্ছে শুখচ্ছেন শুঁখচ্ছেন শখীন শুঁখে শুঁখেছ শুঁখেছি শুঁখেছিল শুঁখেছিলাম শুঁখেছিলি শুঁখেছিলে শুঁখেছিলেন শুঁখেছিলেম শুঁখেছিলুম শুঁখেছিস শুঁখেছে শুঁখেছেন শুঁখেন শুখো শুঁখো শুঁখছ শুঁখছি শুঁখছিল শুঁখছিলাম শুঁখছিলি শুঁখছিলে শুঁখছিলেন শুঁখছিলেম শুঁখছিলুম শুঁখছিস শুঁখছে শুঁখছেন শখযুক্ত শুখত শুঁখত শুখতাম শুঁখতাম শুখতিস শুঁখতিস শুখতে শুঁখতে শুখতেন শুঁখতেন শুখতেম শুঁখতেম শুখতুম শুঁখতুম শুখন শুঁখন শুঁখুন শুখনো শুঁখনো শুখব শুঁখব শুখবার শুঁখবার শুখবি শুঁখবি শুখবে শুঁখবে শুখবেন শুঁখবেন শুখবো শুঁখবো শুখল শুঁখল শুখলাম শুঁখলাম শুখলি শুঁখলি শুখলে শুঁখলে শুখলেন শুঁখলেন শুখলেম শুঁখলেম শুখলুম শুঁখলুম শুখস শুঁখস শৃগাল শৃগালী শঙ্কু শঙ্কা শঙ্কাকুল শঙ্কাযুক্ত শঙ্কাদূরকারী শঙ্কাপ্রাপ্ত শঙ্কাপূর্ণ শঙ্কাহীন শঙ্কাহীনতা শঙ্কাহর শঙ্কাহরা শঙ্কাহরণ শঙ্কাহরণী শঙ্কিত শঙ্কিতা শঙ্কিল শঙ্কট শঙ্কনীয় শঙ্কুপট শঙ্কুপট্ট শঙ্কর শঙ্কুর শঙ্করী শঙ্করস্বেদ শঙ্খ শঙ্খকার শঙ্খিনী শঙ্খচিল শঙ্খচুন শঙ্খচূর্ণী শঙ্খচূড় শঙ্খধ্বনি শঙ্খনগর শঙ্খনাদ শঙ্খনিনাদ শঙ্খনির্মিত শঙ্খনীল শঙ্খবিষ শঙ্খবেলা শঙ্খব্যবসায়ী শঙ্খবণিক শঙ্খবলয় শঙ্খমুখ শৃঙ্খল শৃঙ্খলা শৃঙ্খলাবদ্ধ শৃঙ্খলাভঙ্গকারী শৃঙ্খলামাত্র শৃঙ্খলারক্ষক শৃঙ্খলাহীন শৃঙ্খলিত শৃঙ্খলিতা শৃঙ্খলছাড়া শঙ্খলতা শৃঙ্খলতা শৃঙ্খলতাজনিত শৃঙ্খলবদ্ধ শুঙ্গ শৃঙ্গ শুঙ্গা শৃঙ্গাকার শৃঙ্গাটক শৃঙ্গাটিকা শৃঙ্গার শৃঙ্গারভূষণ শৃঙ্গি শৃঙ্গী শৃঙ্গজাত শৃঙ্গযুক্ত শৃঙ্গধ্বনি শৃঙ্গধর শৃঙ্গবান শৃঙ্গবের শা শাঁ শাই শাঁই শাইখ শাঁইখানী শাইন শাইনিং শাইল শাঁইশাঁই শাউড়ী শাওন শাঁওল শাওয়াল শাক শাঁক শাকআনাজ শাঁকআলু শাকঘণ্ট শাকান্ন শাঁকারি শাঁকালু শাঁকিনী শাঁকচুন্নি শাঁকচূর্ণী শাঁকেরকরাত শাক্য শাক্যমুনি শাক্যসিংহ শাক্ত শাকুন শাকুনিক শাকুনিকী শাকপাতা শাকপাতামাত্র শাকভাত শাকশুঁটকি শাকসবজি শাঁখ শাঁখআলু শাখা শাঁখা শাখাচ্যুত শাখাযুক্ত শাখাদ্বয় শাখানদী শাখাপ্রশাখা শাখাপ্রসারী শাখামৃগ শাঁখামুঠি শাখামন্দির শাখামূল শাঁখারি শাঁখারিণী শাঁখারিবাজার শাঁখারী শাখারূপে শাঁখালু শাঁখাসিঁদুর শাখাহীন শাঁখিনী শাখী শাঁখচিল শাঁখচুন্নি শাঁখচূর্ণী শাঁখেরকরাত শাখরচে শাগ শাগরেদ শাগরেদি শাগরেদী শাঙ্কর শাঙা শাঙন শাঙল শাজাদা শাজাদী শাজিরা শাট শাটার শাটি শাটিকা শাটী শাটলকক শাঠ্য শাণ শাণিত শাণ্ডিল্য শাত শাতকুম্ভ শাতন শাদা শাদি শাদিয়ান শাদিয়ানা শাদী শাদ্বল শাদরজা শান শানওয়ালা শানুক শানকি শানা শানাই শানাইও শানাইত শানাইতাম শানাইতিস শানাইতে শানাইতেছ শানাইতেছি শানাইতেছিল শানাইতেছিলাম শানাইতেছিলি শানাইতেছিলে শানাইতেছিলেন শানাইতেছিস শানাইতেছে শানাইতেছেন শানাইতেন শানাইব শানাইবার শানাইবি শানাইবে শানাইবেন শানাইল শানাইলাম শানাইলি শানাইলে শানাইলেন শানাইয়া শানাইয়াছ শানাইয়াছি শানাইয়াছিল শানাইয়াছিলাম শানাইয়াছিলি শানাইয়াছিলে শানাইয়াছিলেন শানাইয়াছিস শানাইয়াছে শানাইয়াছেন শানাইয়ো শানাক শানাচ্ছ শানাচ্ছি শানাচ্ছিল শানাচ্ছিলাম শানাচ্ছিলি শানাচ্ছিলে শানাচ্ছিলেন শানাচ্ছিলেম শানাচ্ছিলুম শানাচ্ছিস শানাচ্ছে শানাচ্ছেন শানাত শানাতাম শানাতিস শানাতে শানাতেন শানাতেম শানাতুম শানান শানানো শানাব শানাবার শানাবি শানাবে শানাবেন শানাবো শানাল শানালাম শানালি শানালে শানালেন শানালেম শানালুম শানাস শানায়া শানি শানিত শানিতাম শানিতিস শানিতে শানিতেছ শানিতেছি শানিতেছিল শানিতেছিলাম শানিতেছিলি শানিতেছিলে শানিতেছিলেন শানিতেছিস শানিতেছে শানিতেছেন শানিতেন শানিব শানিবার শানিবি শানিবে শানিবেন শানিল শানিলাম শানিলি শানিলে শানিলেন শানিস শানিয়া শানিয়াছ শানিয়াছি শানিয়াছিল শানিয়াছিলাম শানিয়াছিলি শানিয়াছিলে শানিয়াছিলেন শানিয়াছিস শানিয়াছে শানিয়াছেন শানিয়ে শানিয়েছ শানিয়েছি শানিয়েছিল শানিয়েছিলাম শানিয়েছিলি শানিয়েছিলে শানিয়েছিলেন শানিয়েছিলেম শানিয়েছিলুম শানিয়েছিস শানিয়েছে শানিয়েছেন শানিয়ো শানেন শানেনজুল শানছ শানছি শানছিল শানছিলাম শানছিলি শানছিলে শানছিলেন শানছিলেম শানছিলুম শানছিস শানছে শানছেন শানজর শানযন্ত্র শানত শান্ত শানতাম শান্তাহার শান্তি শান্তিকামী শান্তিকামনা শান্তিকালীন শান্তিকরণার্থ শান্তিকর্ম শান্তিচুক্তি শান্তিছবি শান্তিজল শান্তিযুক্ত শান্তিদান শান্তিদূত শান্তিধাম শান্তিনগর শান্তিনিকেতন শান্তিপাঠ শান্তিপুর শান্তিপ্রাপ্ত শান্তিপুরি শান্তিপ্রিয় শান্তিপুরী শান্তিপূর্ণ শান্তিপূর্ণভাবে শান্তিপুরবাসী শান্তিবাহিনী শান্তিমগ্ন শান্তিময় শান্তিরক্ষক শান্তিরক্ষা শান্তিরক্ষাদি শান্তিরক্ষাবাহিনী শান্তিরক্ষী শান্তিলাভ শান্তিলতা শান্তিশৃঙ্খলা শান্তিস্থাপন শান্তিস্বস্ত্যয়ন শানতে শানতেন শানতেম শান্তনু শান্তনুরাজা শান্তপ্রকৃতি শান্তভাব শান্তভাবপূর্ণ শানতুম শান্তমূর্তি শান্ত্রিসেপাই শান্তরসাম্পদ শান্তশিষ্ট শান্তস্বভাব শান্তস্বর শানদেওয়া শানুন শানপাথর শানব শানবাঁধানো শানবার শানবি শানবে শানবেন শানবো শানল শানলাম শানলি শানলে শানলেন শানলেম শানলুম শানশওকত শানশৌকত শাপ শাপগ্রস্ত শাপগ্রস্তা শাপা শাপান্ত শাঁপি শাপিত শাপী শাপপ্রাপ্ত শাপভঙ্গ শাপভ্রষ্ট শাপভ্রষ্টা শাপমুক্তি শাপমোচন শাপমন্যি শাপলা শাপলাচত্বর শাপশাপান্ত শাফা শাফায়াৎ শাফায়ত শাফায়ৎ শাফেয়ী শাব শাবক শাবান শাবাশ শাবুদ শাব্দ শাব্দিক শাব্দিকঅর্থ শাব্দবোধ শাবর শাবল শাম শামুক শামুকচুন শামুকভাঙ্গা শামগড় শামা শামাদান শামি শামিকাবাব শামিল শামিয়ানা শামী শামীয়ানা শামপান শামর শামরী শামলা শামসুলউলামা শার্কর শারঙ্গ শার্ঙ্গ শারঙ্গী শার্ঙ্গী শার্ঙ্গধর শার্ঙ্গপাণি শারাবি শারি শারিকা শারী শারীর শারীরিক শারীরিকভাবে শারীরতাত্ত্বিক শারীরতত্ত্ব শারীরবিজ্ঞান শারীরবিদ্যা শারীরবৃত্ত শারীরবৃত্তি শারীরবৃত্তীয় শারীরশিক্ষা শারীরস্থান শারীরস্থানীয় শারজাহ শার্ট শারদ শারদা শারদী শারদীয় শারদীয়া শারদোৎসব শারদযামিনী শারদপ্রাত শার্দূল শার্দূলী শার্দূলবিক্রীড়িত শারদশশী শার্প শার্শি শার্সি শাল শালু শালওয়ার শালওয়ালা শালুক শালূক শালকর শালগাছ শালগম শালগ্রাম শালগ্রামশিলা শালা শালাজ শালাবউ শালাবাবু শালাবৌ শালি শালিক শালিধান শালিনী শালিবাহন শালিস শালিসি শালী শালীন শালীনতা শালীনতাবর্জিত শালীনতাসম্মত শালীনতাহীন শালীপুত্র শালোয়ার শালতি শালনির্যাস শালপাত শালপাতা শালপ্রাংশু শালবিক্রেতা শালবন শালবনবিহার শাল্মল শাল্মলি শাল্মলিবৃক্ষ শাল্মলী শাল্মলীবৃক্ষ শাল্মলবৃক্ষ শাশবিবি শাশ্বত শাশ্বতকাল শাশ্বতিক শাশ্বতিকী শাশ্বতী শাশুড়ি শাস শাঁস শাসক শাসুক শাসকগোষ্ঠী শাসকজাতি শাসকবংশ শাসকশ্রেণী শাসা শাসাই শাসাইও শাসাইত শাসাইতাম শাসাইতিস শাসাইতে শাসাইতেছ শাসাইতেছি শাসাইতেছিল শাসাইতেছিলাম শাসাইতেছিলি শাসাইতেছিলে শাসাইতেছিলেন শাসাইতেছিস শাসাইতেছে শাসাইতেছেন শাসাইতেন শাসাইব শাসাইবার শাসাইবি শাসাইবে শাসাইবেন শাসাইল শাসাইলাম শাসাইলি শাসাইলে শাসাইলেন শাসাইয়া শাসাইয়াছ শাসাইয়াছি শাসাইয়াছিল শাসাইয়াছিলাম শাসাইয়াছিলি শাসাইয়াছিলে শাসাইয়াছিলেন শাসাইয়াছিস শাসাইয়াছে শাসাইয়াছেন শাসাইয়ো শাসাক শাসাচ্ছ শাসাচ্ছি শাসাচ্ছিল শাসাচ্ছিলাম শাসাচ্ছিলি শাসাচ্ছিলে শাসাচ্ছিলেন শাসাচ্ছিলেম শাসাচ্ছিলুম শাসাচ্ছিস শাসাচ্ছে শাসাচ্ছেন শাসাত শাসাতাম শাসাতিস শাসাতে শাসাতেন শাসাতেম শাসাতুম শাসান শাসানি শাসানী শাসানো শাসাব শাসাবার শাসাবি শাসাবে শাসাবেন শাসাবো শাসাল শাঁসাল শাসালাম শাসালি শাসালে শাসালেন শাসালেম শাঁসালো শাসালুম শাসাস শাসি শাসিত শাসিতা শাসিতাম শাসিতিস শাসিতে শাসিতেছ শাসিতেছি শাসিতেছিল শাসিতেছিলাম শাসিতেছিলি শাসিতেছিলে শাসিতেছিলেন শাসিতেছিস শাসিতেছে শাসিতেছেন শাসিতেন শাসিব শাসিবার শাসিবি শাসিবে শাসিবেন শাসিল শাসিলাম শাসিলি শাসিলে শাসিলেন শাসিস শাসিয়া শাসিয়াছ শাসিয়াছি শাসিয়াছিল শাসিয়াছিলাম শাসিয়াছিলি শাসিয়াছিলে শাসিয়াছিলেন শাসিয়াছিস শাসিয়াছে শাসিয়াছেন শাসিয়ে শাসিয়েছ শাসিয়েছি শাসিয়েছিল শাসিয়েছিলাম শাসিয়েছিলি শাসিয়েছিলে শাসিয়েছিলেন শাসিয়েছিলেম শাসিয়েছিলুম শাসিয়েছিস শাসিয়েছে শাসিয়েছেন শাসিয়ো শাসে শাঁসে শাসেন শাসছ শাসছি শাসছিল শাসছিলাম শাসছিলি শাসছিলে শাসছিলেন শাসছিলেম শাসছিলুম শাসছিস শাসছে শাসছেন শাস্য শাঁসযুক্ত শাসত শাস্তা শাসতাম শাস্তি শাস্তিযোগ্য শাস্তিদান শাস্তিদাননীতি শাস্তিপ্রাপ্ত শাস্তিবিধান শাস্তিবিধানকারী শাস্তিভোগ শাস্তিলাভ শাসতে শাসতেন শাসতেম শাসতুম শাস্তর শাস্ত্র শাস্ত্রকার শাস্ত্রগত শাস্ত্রগ্রন্থ শাস্ত্রগ্রন্থাদি শাস্ত্রাদি শাস্ত্রাধ্যয়ন শাস্ত্রানুযায়ী শাস্ত্রানুমোদিত শাস্ত্রানুমত শাস্ত্রানুশীল শাস্ত্রানুশীলন শাস্ত্রানুসারে শাস্ত্রার্থ শাস্ত্রালোচনা শাস্ত্রী শাস্ত্রচিকিৎসা শাস্ত্রচর্চা শাস্ত্রীয় শাস্ত্রোক্ত শাস্ত্রজীবী শাস্ত্রজ্ঞ শাস্ত্রজ্ঞান শাস্ত্রজ্ঞানী শাস্ত্রজ্যোতিষ্ক শাস্ত্রযথা শাস্ত্রদর্শী শাস্ত্রনির্দিষ্ট শাস্ত্রনিয়মিত শাস্ত্রপাঠ শাস্ত্রপ্রণেতা শাস্ত্রবাক্য শাস্ত্রবাচন শাস্ত্রবিৎ শাস্ত্রবিদ শাস্ত্রবিধি শাস্ত্রবিরোধী শাস্ত্রবিরুদ্ধ শাস্ত্রবিশারদ শাস্ত্রবিহিত শাস্ত্রবচন শাস্ত্রবেত্তা শাস্ত্রব্যাখ্যা শাস্ত্রভিত্তিক শাস্ত্রমতে শাস্ত্ররচনাকারী শাস্ত্রসংগত শাস্ত্রসঙ্গত শাস্ত্রসম্মত শাসন শাসুন শাসনকাজ শাসনকারী শাসনকার্য শাসনকাল শাসনক্রিয়া শাসনকর্তা শাসনক্ষমতা শাসনাঞ্চল শাসনাধীন শাসনামল শাসনীয় শাসনযোগ্য শাসনযন্ত্র শাসনতন্ত্র শাসনতন্ত্রী শাসনদণ্ড শাসনপরিচালন শাসনবিধি শাসনবিভাগ শাসনব্যবস্থা শাসনব্যয় শাসনভুক্ত শাসনভার শাসনশক্তি শাসনসংস্থা শাসনহীন শাসব শাসবার শাসবি শাসবে শাসবেন শাসবো শাসল শাসুল শাসলাম শাসলি শাসলে শাসলেন শাসলেম শাসলুম শাহ শাহ্‌ শাহকোট শাহগড় শাহাদাত শাহাদাৎ শাহাদত শাহাদতঅঙ্গুলি শাহানা শাহানশা শাহানশাহ শাহারা শাহি শাহিখেয়াল শাহিতক্ত শাহিদ শাহিদরজা শাহিন শাহিনামা শাহিনহবত শাহিপ্রাসাদ শাহিমুকুট শাহিরগ শাহী শাহীতক্ত শাহীতখৎ শাহীদ শাহীনামা শাহীপ্রাসাদ শাহীমুকুট শাহজাদা শাহজাদি শাহজাদী শাহজাদপুর শাহজানপুর শাহজালাল শাহজাহান শাহজাহানপুর শাহনামা শাহপুর শাহপরান শাহবাগ শাহবাজপুর শাহরুখ শাহরিয়ার শাঁড়া শাড়ি শাড়িপরিহিতা শাড়িরজমিন শাড়ী শায়ক শায়খ শায়িত শায়িতা শায়িনী শায়ী শায়ের শায়েস্তা শায়েস্তানগর শায়েস্তাবাদ শি শিং শিংশপা শিউরা শিউরান শিউরানো শিউরে শিউরেছিল শিউলি শিউলিতলা শিউলিবাড়ি শিউড়ই শিউড়ও শিউড়ক শিউড়ানো শিউড়চ্ছ শিউড়চ্ছি শিউড়চ্ছিল শিউড়চ্ছিলাম শিউড়চ্ছিলি শিউড়চ্ছিলে শিউড়চ্ছিলেন শিউড়চ্ছিলেম শিউড়চ্ছিলুম শিউড়চ্ছিস শিউড়চ্ছে শিউড়চ্ছেন শিউড়ে শিউড়েছ শিউড়েছি শিউড়েছিল শিউড়েছিলাম শিউড়েছিলি শিউড়েছিলে শিউড়েছিলেন শিউড়েছিলেম শিউড়েছিলুম শিউড়েছিস শিউড়েছে শিউড়েছেন শিউড়ো শিউড়োবার শিউড়ত শিউড়তাম শিউড়তিস শিউড়তে শিউড়তেন শিউড়তেম শিউড়তুম শিউড়ন শিউড়ব শিউড়বি শিউড়বে শিউড়বেন শিউড়বো শিউড়ল শিউড়লাম শিউড়লি শিউড়লে শিউড়লেন শিউড়লেম শিউড়লুম শিউড়স শিউড়য় শিওর শিক শিককাবাব শিকা শিকাগো শিকার শিকারকৃত শিকারি শিকারিপাখি শিকায়েত শিকে শিকেয়তোলা শিকদার শিকনি শিকম শিকমা শিকরা শিকরে শিকল শিকলি শিক্ষক শিক্ষকতা শিক্ষকসম্প্রদায় শিক্ষা শিক্ষাঅধিকার শিক্ষাকাল শিক্ষাকেন্দ্র শিক্ষাকমিশন শিক্ষাকর শিক্ষাক্রম শিক্ষাক্ষেত্র শিক্ষাখাত শিক্ষাগত শিক্ষাগুরু শিক্ষাগ্রন্থ শিক্ষাগ্রহণ শিক্ষাগৃহ শিক্ষাঙ্গন শিক্ষাজীবন শিক্ষাদাতা শিক্ষাদাত্রী শিক্ষাদান শিক্ষাদানকারিণী শিক্ষাদানকারী শিক্ষাদানরত শিক্ষাদীক্ষা শিক্ষাধীন শিক্ষানগরী শিক্ষানীতি শিক্ষানবিশ শিক্ষানবিশি শিক্ষানবিস শিক্ষানুরাগী শিক্ষাপীঠ শিক্ষাপ্রাপ্ত শিক্ষাপ্রণালী শিক্ষাপ্রতিষ্ঠান শিক্ষাপ্রদ শিক্ষাপ্রদান শিক্ষাপর্ব শিক্ষাবিদ শিক্ষাবিস্তার শিক্ষাবোর্ড শিক্ষাবছর শিক্ষাব্যতিরেকে শিক্ষাব্যবস্থা শিক্ষাব্রতী শিক্ষাবর্ষ শিক্ষাভবন শিক্ষামন্ত্রী শিক্ষার্জন শিক্ষারত শিক্ষার্থী শিক্ষার্থে শিক্ষারম্ভ শিক্ষালাভ শিক্ষালব্ধ শিক্ষালয় শিক্ষাশেষ শিক্ষাসংস্কার শিক্ষাসাধ্য শিক্ষাসচিব শিক্ষাস্থল শিক্ষাসভ্যতা শিক্ষিকা শিক্ষিত শিক্ষিতকরণ শিক্ষিতা শিক্ষিতব্য শিক্ষিতমহল শিক্ষণ শিক্ষণকার্য শিক্ষণীয় শিক্ষণীয়তা শিক্ষয়িতা শিক্ষয়িত্রী শিকস্ত শিকস্তি শিকড় শিকড়গড়া শিকড়যুক্ত শিকড়সমেত শিকড়হীন শিখ শিখক শিখুক শিখগুরু শিখা শিখাই শিখাইও শিখাইত শিখাইতাম শিখাইতিস শিখাইতে শিখাইতেছ শিখাইতেছি শিখাইতেছিল শিখাইতেছিলাম শিখাইতেছিলি শিখাইতেছিলে শিখাইতেছিলেন শিখাইতেছিস শিখাইতেছে শিখাইতেছেন শিখাইতেন শিখাইব শিখাইবার শিখাইবি শিখাইবে শিখাইবেন শিখাইল শিখাইলাম শিখাইলি শিখাইলে শিখাইলেন শিখাইয়া শিখাইয়াছ শিখাইয়াছি শিখাইয়াছিল শিখাইয়াছিলাম শিখাইয়াছিলি শিখাইয়াছিলে শিখাইয়াছিলেন শিখাইয়াছিস শিখাইয়াছে শিখাইয়াছেন শিখাইয়ো শিখাক শিখাতেন শিখান শিখানো শিখাবার শিখাবন্ধন শিখাশূন্য শিখাস শিখি শিখিত শিখিতাম শিখিতিস শিখিতে শিখিতেছ শিখিতেছি শিখিতেছিল শিখিতেছিলাম শিখিতেছিলি শিখিতেছিলে শিখিতেছিলেন শিখিতেছিস শিখিতেছে শিখিতেছেন শিখিতেন শিখিতব্য শিখিনু শিখিনী শিখিব শিখিবার শিখিবি শিখিবে শিখিবেন শিখিল শিখিলাম শিখিলি শিখিলে শিখিলেন শিখিস শিখিয়া শিখিয়াছ শিখিয়াছি শিখিয়াছিল শিখিয়াছিলাম শিখিয়াছিলি শিখিয়াছিলে শিখিয়াছিলেন শিখিয়াছিস শিখিয়াছে শিখিয়াছেন শিখিয়ে শিখিয়েছ শিখিয়েছি শিখিয়েছিল শিখিয়েছিলাম শিখিয়েছিলি শিখিয়েছিলে শিখিয়েছিলেন শিখিয়েছিলেম শিখিয়েছিলুম শিখিয়েছিস শিখিয়েছে শিখিয়েছেন শিখিয়ো শিখী শিখচ্ছ শিখচ্ছি শিখচ্ছিল শিখচ্ছিলাম শিখচ্ছিলি শিখচ্ছিলে শিখচ্ছিলেন শিখচ্ছিলেম শিখচ্ছিলুম শিখচ্ছিস শিখচ্ছে শিখচ্ছেন শিখীধ্বজ শিখীবাহন শিখে শিখেছ শিখেছি শিখেছিল শিখেছিলাম শিখেছিলি শিখেছিলে শিখেছিলেন শিখেছিলেম শিখেছিলুম শিখেছিস শিখেছে শিখেছেন শিখেন শিখেরা শিখো শিখছ শিখছি শিখছিল শিখছিলাম শিখছিলি শিখছিলে শিখছিলেন শিখছিলেম শিখছিলুম শিখছিস শিখছে শিখছেন শিখণ্ড শিখণ্ডক শিখণ্ডিক শিখণ্ডিনী শিখণ্ডী শিখণ্ডযুক্ত শিখত শিখতাম শিখতিস শিখতে শিখতেন শিখতেম শিখতো শিখতুম শিখন শিখুন শিখনো শিখব শিখবার শিখবি শিখবে শিখবেন শিখবো শিখর শিখরিণী শিখরী শিখরযুক্ত শিখরযুক্তা শিখরদেশ শিখরসমৃদ্ধ শিখল শিখলাম শিখলি শিখলে শিখলেন শিখলেম শিখলুম শিখস শিখসমাজ শিখয় শিগগাঁও শিগগির শিগগিরি শিগগীর শিগাফ শিঙ শিঙ্গু শিঙ্গা শিঙ্গাফুঁকা শিঙ্গাফোঁকা শিঙ্গার শিঙ্গাড়া শিঙ্গি শিঙ্গিমাছ শিঙ্ঘাণ শিঙা শিঙাদার শিঙাফুঁকা শিঙাফোঁকা শিঙার শিঙাড়া শিঙি শিঙিমাছ শিঙে শিঞ্জিত শিঞ্জিনিকা শিঞ্জিনী শিঞ্জন শিট শিটকিনি শিটা শিটি শিটে শিঠা শিডিউল শিডিউলিং শিত শিতান শিতি শিতিকণ্ঠ শিথান শিথিল শিথিলচর্ম শিথিলতা শিথিলদেহ শিথিলভাবে শিন শিনি শিন্নি শিন্নী শিপ শিপইয়ার্ড শিপিং শিপ্রা শিপ্রানদী শিপসরকারি শিপসরকারী শিফট শিফন শিব শিবগঞ্জ শিবা শিবানী শিবানুচর শিবানন্দ শিবালয় শিবিকা শিবির শিবচতুর্দশী শিবচর শিবোপাসক শিবজায়া শিবজ্ঞান শিবত্ব শিবত্বপ্রাপ্তি শিবধনু শিবনাথ শিবনারায়ণ শিবনিন্দা শিবনেত্র শিবপূজক শিবপূজা শিবপত্নী শিবপুর শিবপুরি শিবপ্রিয়া শিবপুরী শিববাহন শিবমন্দির শিবমূর্তি শিবরাজ শিবরাত্রি শিবরাম শিবলিঙ্গ শিবলোক শিবশক্তি শিবস্থান শিবহীন শিবহৃদয় শিম শিমগাছ শিম্পাঞ্জি শিম্পাঞ্জী শিম্ব শিম্বা শিম্বি শিম্বিকা শিম্বী শিমুল শিমূল শিমুলগাছ শিমলা শিমলে শির শিরঃপীড়া শিরক শিরা শিরাগুচ্ছ শিরাগত শিরাজ শিরাজামমুনিরা শিরাজি শিরাযুক্ত শিরাধমনী শিরান শিরানা শিরাবিন্যাস শিরাবহুল শিরালি শিরালী শিরি শিরিন শিরিনজবান শিরিশ শিরিশকাগজ শিরিষ শিরিষকাগজ শিরীন শিরীনজবান শিরীষ শিরীষকুসুম শিরে শিরেসংক্রান্তি শিরো শিরোজ শিরোদেশ শিরোধার্য শিরোনাম শিরোনামা শিরোনামহীন শিরোপা শিরোপাধারী শিরোপালড়াই শিরোভূষণ শিরোমাল্য শিরোমণি শিরোরোগ শিরোরত্ন শিরোরুহ শিরজ শিরণি শিরণী শিরদাঁড়া শিরদাঁড়াহীন শিরনাম শিরনামা শিরনি শিরনী শির্নী শিরপা শিরপেচ শিরশির শিরশিরানি শিরশিরে শিরশ্ছেদ শিরশ্ছেদন শিরস্ক শিরসিজ শিরস্ত্র শিরস্ত্রাণ শিল শিলং শিলওয়ার শিলুক শিলা শিলাইদহ শিলাকণা শিলাচর শিলাজাত শিলাজতু শিলাপট্ট শিলাবৃষ্টি শিলাবৃষ্টিজনিত শিলাময় শিলারি শিলারস শিলালিপি শিলালেখ শিলাস্তর শিলিগুড়ি শিলীন্ধ্র শিলীন্ধ্রা শিলীন্ধ্রী শিলীপদ শিলীভূত শিলীমুখ শিল্ড শিলনোড়া শিল্প শিল্পকার শিল্পকারখানা শিল্পকেন্দ্র শিল্পকেন্দ্রিক শিল্পকৌশল শিল্পকর্ম শিল্পকর্মকারী শিল্পকর্মাদি শিল্পকলা শিল্পকলাদি শিল্পক্ষেত্র শিল্পখাত শিল্পগুচ্ছ শিল্পগোষ্ঠী শিল্পগত শিল্পাচার্য শিল্পাঞ্চল শিল্পাদি শিল্পায়ন শিল্পিক শিল্পিত শিল্পী শিল্পীগোষ্ঠী শিল্পীমন শিল্পচর্চা শিল্পোৎপাদন শিল্পোদ্যোক্তা শিল্পোদ্যোগ শিল্পোন্নত শিল্পোন্নতি শিল্পোন্নয়ন শিল্পজাত শিল্পজোট শিল্পযুগ শিল্পদ্রব্য শিল্পদ্রব্যাদি শিল্পধারা শিল্পনির্দেশক শিল্পনৈপুণ্য শিল্পপতি শিল্পপ্রয়োগ শিল্পবিজ্ঞান শিল্পবিজ্ঞানজাত শিল্পবিদ্যা শিল্পবিহীন শিল্পবোদ্ধা শিল্পবোধ শিল্পব্যবস্থা শিল্পবৃত্তি শিল্পবুদ্ধি শিল্পভবন শিল্পমাধ্যম শিল্পমন্ত্রী শিল্পমূল্য শিল্পরীতি শিল্পরূপ শিল্পরূপায়ণ শিল্পশালা শিল্পশৈলী শিল্পশহর শিল্পসংগ্রহ শিল্পসংস্থা শিল্পসামগ্রী শিল্পসাহিত্য শিল্পসমৃদ্ধ শিল্পসম্পদ শিল্পসম্মত শিল্পসুলভ শিলমোহর শিশ শিশু শিশুক শিশুকাম শিশুকাল শিশুকাহিনী শিশুকিশোর শিশুকুঞ্জ শিশুকন্যা শিশুকৃষ্ণ শিশুগাছ শিশা শিশি শিশিবোতল শিশির শিশিরজল শিশিরধৌত শিশিরবিন্দু শিশিরসিক্ত শিশিরস্নাত শিশুচাঁদ শিশুচোর শিশুতোষ শিশুত্ব শিশুতুল্য শিশ্ন শিশুনারী শিশ্নোদরপরায়ণ শিশুপাঠ শিশুপাঠ্য শিশুপাল শিশুপালন শিশুপালবধ শিশুপুত্র শিশুপ্রকৃতি শিশুপ্রতি শিশুবোধক শিশুবোধ্য শিশুব্যাধি শিশুবয়স শিশুভোলানো শিশুমার শিশুমৃত্যু শিশুমন শিশমহল শিশুরোগ শিশুরোগবিজ্ঞান শিশুরূপ শিশুশিক্ষা শিশুশিল্প শিশুশিল্পী শিশুসাহিত্য শিশুসাহিত্যিক শিশুসন্তান শিশুস্বাস্থ্য শিশুস্বভাব শিশুসম শিশুসুলভ শিশুহত্যা শিশুহৃদয় শিষ শিষ্ট শিষ্যগোষ্ঠী শিষ্টা শিষ্টাচার শিষ্টতা শিষ্টতাসম্পন্ন শিষ্টতাহীন শিষ্যত্ব শিষ্যরূপ শিস শিহালা শিহর শিহরা শিহরান শিহরানো শিহরিত শিহরণ শিহরন শিয়া শিয়াকুল শিয়ান শিয়াল শিয়ালকাঁটা শিয়ালকাঠি শিয়ালকোট শিয়ালেরডাক শিয়ালদা শিয়ালদহ শিয়ালপণ্ডিত শিয়ালফাঁকি শিয়াসম্প্রদায় শিয়র শিয়লী শী শীআ শীকর শীকরবর্ষণ শীগগির শীঘ্র শীঘ্রকারী শীঘ্রগামী শীঘ্রগতি শীঘ্রতা শচি শুচি শুচিতা শুচিতারক্ষা শচিনন্দন শচিপতি শুচিবাই শুচিবাইগ্রস্ত শুচিবাইগ্রস্তা শুচিবায়ু শুচিবায়ুগ্রস্ত শুচিবায়ুগ্রস্তা শচিবিলাস শচিমাতা শুচিরুচি শুচিস্মিত শুচিস্মিতা শচী শচীকান্ত শচীদেবী শচীন্দ্র শচীনন্দন শচীপতি শচীপুত্র শচীবিলাস শচীমাতা শচীশ শুচেছ শুচ্ছ শুচ্ছি শুচ্ছিল শুচ্ছিলাম শুচ্ছিলি শুচ্ছিলে শুচ্ছিলেন শুচ্ছিলেম শুচ্ছিলুম শুচ্ছিস শুচ্ছে শুচ্ছেন শীত শীতঋতু শীতকাটা শীতকাঁটা শীতকাটানো শীতকাতুরে শীৎকার শীতকাল শীতকালীন শীৎকৃত শীতকরা শীতগ্রীষ্ম শীতাংশু শীতাগম শীতাতপ শীতাতপনিয়ন্ত্রক শীতাতপনিয়ন্ত্রিত শীতাতপনিয়ন্ত্রণ শীতাধিক্য শীতার্ত শীতালু শীতোষ্ণ শীতযুক্তা শীততাপ শীততাপনিয়ন্ত্রক শীততাপনিয়ন্ত্রিত শীততাপনিয়ন্ত্রণ শীতধরা শীতনামা শীতনিবারক শীতপ্রধান শীতবস্ত্র শীতভাব শীতল শীতলকারক শীতলক্ষ্যা শীতলা শীতলাখোলা শীতলাগা শীতলাতলা শীতলাপূজা শীতলায়ন শীতলীকৃত শীতলীকরণ শীতলতা শীতলতম শীতলতর শীতলপাটি শীতলবোধ শীধু শীরা শীর্ণ শীর্ণকার শীর্ণকায় শীর্ণা শীর্ণতা শীর্ষ শীর্ষক শীর্ষাসন শীর্ষচ্ছেদ শীর্ষচূড়া শীর্ষোন্মুখ শীর্ষযুক্ত শীর্ষতা শীর্ষতম শীর্ষত্রয় শীর্ষদেশ শীর্ষধ্বনি শীর্ষনাম শীর্ষনির্দেশ শীর্ষবিন্দু শীর্ষবিভাগ শীর্ষভাগ শীর্ষভাষা শীর্ষসংখ্যা শীর্ষস্থ শীর্ষস্থান শীর্ষস্থানীয় শীর্ষস্থানীয়া শীর্ষসম্মেলন শীল শীলিত শীলযুক্ত শীলতা শীলন শীলভদ্র শীলমান শীশা শীশমহল শীষ শে শেওলা শেওড়া শেওড়াগাছ শেকম শেকহ্যান্ড শেকড় শেকড়বাকড় শেখ শেখা শেখাক শেখাচ্ছ শেখাচ্ছি শেখাচ্ছিল শেখাচ্ছিলাম শেখাচ্ছিলি শেখাচ্ছিলে শেখাচ্ছিলেন শেখাচ্ছিলেম শেখাচ্ছিলুম শেখাচ্ছিস শেখাচ্ছে শেখাচ্ছেন শেখাত শেখাতাম শেখাতিস শেখাতে শেখাতেন শেখাতেম শেখাতুম শেখান শেখানো শেখাননি শেখাব শেখাবার শেখাবি শেখাবে শেখাবেন শেখাবো শেখাল শেখালাম শেখালি শেখালে শেখালেন শেখালেম শেখালুম শেখাস শেখে শেখেন শেখজাদা শেখযাদা শেখবার শেখর শেখহাসিনা শোনা শোনেন শেজ শেয শেঠ শেড শেনিয়ার শেনে শেনেছ শেনেছি শেনেছিল শেনেছিলাম শেনেছিলি শেনেছিলে শেনেছিলেন শেনেছিলেম শেনেছিলুম শেনেছিস শেনেছে শেনেছেন শেনো শেফার্ড শেফালি শেফালিকা শেফালিবন শেফালী শেফিল্ড শেভ শেভকরা শেভাল শেভিং শেভিংস্টিক শেমিজ শেমুষি শেমুষী শের শেরওয়ানি শেরওয়ানী শেরকাবাচ্চা শেরা শেরি শেরিফ শেরী শেরে শেরেক শেরেকি শেরেকী শেরেখোদা শেরেবাংলা শেরনর শেরপা শেরপুর শেল শেলক শেল্টার শেলতুল্য শেলফ শেল্ফ শেষ শেষকাল শেষকৃত্য শেষকথা শেষকরা শেষাংশ শেষার্ধ শেষাশেষি শেষোক্ত শেষজীবন শেষযাত্রা শেষতক শেষতম শেষথেকে শেষদিকে শেষদিন শেষনিঃশ্বাস শেষপ্রান্ত শেষপর্যন্ত শেষপ্রশ্ন শেষবার শেষবিচার শেষভাগ শেষমেশ শেষমুহুর্ত শেষরক্ষা শেষরাত শেষরাত্রি শেষরেকর্ড শেষলগ্ন শেষশয়ন শেষসীমা শেষহীন শেসে শেসেছ শেসেছি শেসেছিল শেসেছিলাম শেসেছিলি শেসেছিলে শেসেছিলেন শেসেছিলেম শেসেছিলুম শেসেছিস শেসেছে শেসেছেন শেসো শেহালা শেয়াকুল শেয়ার শেয়ারকৃত শেয়ারগ্রাহক শেয়ারিং শেয়ারমার্কেট শেয়ারহোল্ডার শেয়ারহোল্ডারস শেয়াল শেয়ালকাঁটা শেয়ালা শৈত্য শৈত্যাধিক্য শৈত্যে শৈত্যপ্রবাহ শৈথিল্য শৈব শৈবাল শৈবালবিদ্যা শৈবতন্ত্রী শৈবপুরাণ শৈবল শৈবলিনী শৈল শৈলকূপা শৈলী শৈলীগত শৈলীবিজ্ঞান শৈলীবদল শৈলেন্দ্র শৈলেয় শৈলজ শৈলজা শৈলজাপতি শৈলজায়া শৈল্পিক শৈলপ্রপাত শৈলময় শৈলরাজ শৈলশিখর শৈলশিরা শৈলসুতা শৈশব শৈশবকাল শৈশবাবস্থা শৈশবসঙ্গী শৈশবস্মৃতি শো শোঁ শোও শোওয়া শোক শোঁক শোকগাথা শোকগীতি শোকগ্রস্ত শোকগ্রস্তা শোকা শোঁকা শোকাক শোঁকাক শোকাকুল শোকাকুলা শোকাগ্নি শোকাচ্ছ শোঁকাচ্ছ শোকাচ্ছি শোঁকাচ্ছি শোকাচ্ছিল শোঁকাচ্ছিল শোকাচ্ছিলাম শোঁকাচ্ছিলাম শোকাচ্ছিলি শোঁকাচ্ছিলি শোকাচ্ছিলে শোঁকাচ্ছিলে শোকাচ্ছিলেন শোঁকাচ্ছিলেন শোকাচ্ছিলেম শোঁকাচ্ছিলেম শোকাচ্ছিলুম শোঁকাচ্ছিলুম শোকাচ্ছিস শোঁকাচ্ছিস শোকাচ্ছে শোঁকাচ্ছে শোকাচ্ছেন শোঁকাচ্ছেন শোকাচ্ছন্ন শোকাত শোঁকাত শোকাতাম শোঁকাতাম শোকাতিস শোঁকাতিস শোকাতে শোঁকাতে শোকাতেন শোঁকাতেন শোকাতেম শোঁকাতেম শোকাতুম শোঁকাতুম শোকাতুর শোকাতুরা শোকাদি শোকান শোঁকান শোকানো শোঁকানো শোকানল শোকাব শোঁকাব শোকাবার শোঁকাবার শোকাবি শোঁকাবি শোকাবে শোঁকাবে শোকাবেগ শোকাবেন শোঁকাবেন শোকাবো শোঁকাবো শোকাবহ শোকাভিভূত শোকার্ত শোকার্তা শোকাল শোঁকাল শোকালাম শোঁকালাম শোকালি শোঁকালি শোকালে শোঁকালে শোকালেন শোঁকালেন শোকালেম শোঁকালেম শোকালুম শোঁকালুম শোকাস শোঁকাস শোকী শোকে শোঁকে শোকেজরজর শোকেজর্জর শোকেজর্জরিত শোঁকেন শোকোচ্ছ্বাস শোকোত্তীর্ণ শোকজীর্ণ শোকজনক শোকজর্জর শোকতপ্ত শোকদুঃখাদি শোকধ্বনি শোকনির্বাপণ শোকপ্রকাশ শোকপ্রকাশক শোকপর্ব শোকপ্রশমন শোঁকবার শোকব্যঞ্জক শোকবহন শোকমুক্ত শোকর শোকরানা শোকরূপ শোকসংগীত শোকসঙ্গীত শোকস্থান শোকসন্তপ্ত শোকসভা শোকসমাচ্ছন্ন শোকহীন শোঁখ শোখা শোঁখা শোখাক শোঁখাক শোখাচ্ছ শোঁখাচ্ছ শোখাচ্ছি শোঁখাচ্ছি শোখাচ্ছিল শোঁখাচ্ছিল শোখাচ্ছিলাম শোঁখাচ্ছিলাম শোখাচ্ছিলি শোঁখাচ্ছিলি শোখাচ্ছিলে শোঁখাচ্ছিলে শোখাচ্ছিলেন শোঁখাচ্ছিলেন শোখাচ্ছিলেম শোঁখাচ্ছিলেম শোখাচ্ছিলুম শোঁখাচ্ছিলুম শোখাচ্ছিস শোঁখাচ্ছিস শোখাচ্ছে শোঁখাচ্ছে শোখাচ্ছেন শোঁখাচ্ছেন শোখাত শোঁখাত শোখাতাম শোঁখাতাম শোখাতিস শোঁখাতিস শোখাতে শোঁখাতে শোখাতেন শোঁখাতেন শোখাতেম শোঁখাতেম শোখাতুম শোঁখাতুম শোখান শোঁখান শোখানো শোঁখানো শোখাব শোঁখাব শোখাবার শোঁখাবার শোখাবি শোঁখাবি শোখাবে শোঁখাবে শোখাবেন শোঁখাবেন শোখাবো শোঁখাবো শোখাল শোঁখাল শোখালাম শোঁখালাম শোখালি শোঁখালি শোখালে শোঁখালে শোখালেন শোঁখালেন শোখালেম শোঁখালেম শোখালুম শোঁখালুম শোখাস শোঁখাস শোঁখে শোঁখেন শোঁখবার শোচিত শোচ্য শোচন শোচনা শোচনীয় শোচনীয়ভাবে শোণ শোণা শোণিত শোণিতাক্ত শোণিতধারা শোণিতপ্রবাহ শোণিতবৎ শোণিতমোক্ষণ শোণিতরঞ্জিত শোণিতশোষণ শোণিমা শোণী শোথ শোথরোগ শোধ শোধক শোধকরা শোধক্ষমতা শোধা শোধান শোধানো শোধিত শোধেন শোধ্য শোধন শোধনকারী শোধনাগার শোধনী শোধনীয় শোধনেওয়া শোধনযোগ্য শোধবার শোধবোধ শোধরা শোধরাক শোধরাচ্ছ শোধরাচ্ছি শোধরাচ্ছিল শোধরাচ্ছিলাম শোধরাচ্ছিলি শোধরাচ্ছিলে শোধরাচ্ছিলেন শোধরাচ্ছিলেম শোধরাচ্ছিলুম শোধরাচ্ছিস শোধরাচ্ছে শোধরাচ্ছেন শোধরাত শোধরাতাম শোধরাতিস শোধরাতে শোধরাতেন শোধরাতেম শোধরাতুম শোধরান শোধরানো শোধরাব শোধরাবার শোধরাবি শোধরাবে শোধরাবেন শোধরাবো শোধরাল শোধরালাম শোধরালি শোধরালে শোধরালেন শোধরালেম শোধরালুম শোধরাস শোন শোনা শোনাক শোনাকথা শোনাচ্ছ শোনাচ্ছি শোনাচ্ছিল শোনাচ্ছিলাম শোনাচ্ছিলি শোনাচ্ছিলে শোনাচ্ছিলেন শোনাচ্ছিলেম শোনাচ্ছিলুম শোনাচ্ছিস শোনাচ্ছে শোনাচ্ছেন শোনাত শোনাতাম শোনাতিস শোনাতে শোনাতেন শোনাতেম শোনাতুম শোনান শোনানি শোনানো শোনাব শোনাবার শোনাবি শোনাবে শোনাবেন শোনাবো শোনামাত্র শোনাল শোনালাম শোনালি শোনালে শোনালেন শোনালেম শোনালো শোনালুম শোনাস শোনে শোনেন শোনেনি শোনেননি শোনো শোনবার শোনরে শোফার শোব শোবা শোবার শোবে শোবেন শোবো শোভা শোভাকর শোভাজনক শোভাঞ্জন শোভাযুক্ত শোভাযাত্রা শোভাযাত্রাকারী শোভাযাত্রাদি শোভাযাত্রী শোভাদান শোভাদানকারী শোভাদায়ক শোভাধারণ শোভাপূর্ণ শোভাবর্ধক শোভাবর্ধন শোভামণ্ডিত শোভাময় শোভাময়ী শোভাশূন্য শোভাসৌন্দর্যহীন শোভাহীন শোভিত শোভিতা শোভিনী শোভিল শোভী শোভন শোভনকারী শোভনা শোভনীয় শোভনীয়া শোভনতা শোভনভাবে শোভনরূপে শোভমান শোভমানা শোর শোরগোল শোরা শোরশার শোরশরাবত শোল শোলা শোলাকিয়া শোলমাছ শোঁশোঁ শোষ শোষক শোষা শোষান শোষানো শোষিত শোষী শোষেন শোষযুক্ত শোষণ শোষণকারী শোষণক্ষম শোষবার শোহই শোহা শোহাওন শোহায়ত শোহায়ন শোহায়ল শোহিত শোহিনী শোহে শোহন শোহরত শোহরৎ শোয় শোয়া শোয়াই শোয়াইও শোয়াইত শোয়াইতাম শোয়াইতিস শোয়াইতে শোয়াইতেছ শোয়াইতেছি শোয়াইতেছিল শোয়াইতেছিলাম শোয়াইতেছিলি শোয়াইতেছিলে শোয়াইতেছিলেন শোয়াইতেছিস শোয়াইতেছে শোয়াইতেছেন শোয়াইতেন শোয়াইব শোয়াইবার শোয়াইবি শোয়াইবে শোয়াইবেন শোয়াইল শোয়াইলাম শোয়াইলি শোয়াইলে শোয়াইলেন শোয়াইয়া শোয়াইয়াছ শোয়াইয়াছি শোয়াইয়াছিল শোয়াইয়াছিলাম শোয়াইয়াছিলি শোয়াইয়াছিলে শোয়াইয়াছিলেন শোয়াইয়াছিস শোয়াইয়াছে শোয়াইয়াছেন শোয়াইয়ো শোয়াক শোয়াচ্ছ শোয়াচ্ছি শোয়াচ্ছিল শোয়াচ্ছিলাম শোয়াচ্ছিলি শোয়াচ্ছিলে শোয়াচ্ছিলেন শোয়াচ্ছিলেম শোয়াচ্ছিলুম শোয়াচ্ছিস শোয়াচ্ছে শোয়াচ্ছেন শোয়াত শোয়াতাম শোয়াতিস শোয়াতে শোয়াতেন শোয়াতেম শোয়াতুম শোয়ান শোয়ানো শোয়াব শোয়াবার শোয়াবি শোয়াবে শোয়াবেন শোয়াবো শোয়াবসা শোয়ারী শোয়াল শোয়ালাম শোয়ালি শোয়ালে শোয়ালেন শোয়ালেম শোয়ালুম শোয়াস শৌকীন শৌক্তিকেয় শৌক্তেয় শৌক্ল্য শৌখিন শৌখিনতা শৌচ শৌচকালে শৌচাগার শৌচান্ত শৌণ্ড শৌণ্ডিক শৌণ্ডিকালয় শৌণ্ডী শৌনিক শৌভিক শৌরি শৌর্য শৌর্যযুক্ত শৌর্যবীর্য শৌর্যশালিতা শৌর্যশালিনী শৌর্যশালী শৌরসেন শৌরসেনী শৌল্ক শৌল্কিক শজারু শজিনা শজিনাখাড়া শুজনি শুজনী শজনে শজনেগাছ শট শুট শটকা শুঁটকা শটকাট শটকান শটকানো শুটকি শুঁটকি শুঁটকিমাছ শুঁটকী শুঁটকীমাছ শটকে শুটকো শুঁটকো শটগান শ্যাওলা শ্যাওড়া শ্যাওড়াতলী শ্যাওড়াপাড়া শ্যাকরা শ্যাকরাগাড়ি শ্যাঙাত শ্যাঙল শ্যাম শ্যামইয়া শ্যামক শ্যামা শ্যামাইয়া শ্যামাক শ্যামাঙ্গ শ্যামাঙ্গা শ্যামাঙ্গিনী শ্যামাঙ্গী শ্যামাপোকা শ্যামাপূজা শ্যামাসংগীত শ্যামায়মান শ্যামায়মানা শ্যামচাঁদ শ্যামনগর শ্যাম্পু শ্যাম্পেইন শ্যাম্পেন শ্যামবাজার শ্যামবর্ণ শ্যামবর্ণা শ্যামবর্ণযুক্ত শ্যামর শ্যামল শ্যামলা শ্যামলিমা শ্যামলী শ্যামলতা শ্যামলত্ব শ্যামলবর্ণ শ্যামসুন্দর শ্যামসুষমা শুটার শ্যাল শ্যালক শ্যালকশ্যালিকা শ্যালা শ্যালিকা শ্যালী শ্যালীপতি শটি শুঁটি শুটিং শুঁটিযুক্ত শটিত শটিফুড শটী শুঁটী শ্যেন শ্যেনচক্ষু শ্যেনদৃষ্টি শয্যা শয্যাকীট শয্যাকণ্টক শয্যাকণ্টকী শয্যাগার শয্যাগত শয্যাগতা শয্যাগৃহ শয্যাতোলা শয্যাতল শয্যাতুলুনি শয্যাপাশ শয্যাপৃষ্ঠ শয্যারচনা শয্যালীন শয্যাশায়িনী শয্যাশায়ী শয্যাসঙ্গিনী শয্যাস্তরণ শয্যাসহচর শয্যাসহচরী শটন শঠ শুঁঠ শঠামি শঠতা শণ শুণিল শণেরদড়ি শণেরনুড়ি শণেরলুড়ি শুণ্ঠি শুণ্ঠী শুণ্ড শুণ্ডক শুণ্ডা শুণ্ডাল শুণ্ডি শুণ্ডিকা শুণ্ডধর শণদড়ি শণবস্ত্র শণসূত্র শত শুত শতক শতকিয়া শতকোটি শতকুটি শতকণ্ঠ শতকব্যাপী শতকরা শতকরাভাগ শতক্রতু শতগুণ শতগ্রন্থি শতঘ্নী শতাংশ শতাংশক শতাধিক শতাব্দ শতাব্দী শতাব্দীকাল শতাব্দীপূর্ব শতাবধি শুতাম শতায়ু শুতায়ল শুতি শুতিলোঁ শুতিস শুতিয়া শতচ্ছিন্ন শতচ্ছদ শুতে শতেক শতেকখাকি শতেকখোয়ারি শুতেন শুতেম শতজীবী শতটুকরো শততম শততমী শত্তুর শতদ্রু শতদল শতদলবাসিনী শতধা শতধার শতনাম শতপাদিকা শতপত্র শতপুত্র শতপথ শতপদ শতপদী শতপল শতপুষ্পা শতবার শতবার্ষিকী শতবীর্য শতবৎসর শতবর্ণ শতবর্ষ শতবর্ষজীবী শতবর্ষপূর্তি শতভাগ শতভাবে শতভিষক শতভিষা শুতুম শতমুখ শতমুখী শতমারী শতমূলী শত্রু শতরকম শত্রুকর্তৃক শত্রুক্ষয় শত্রুঘ্ন শত্রুজিৎ শত্রুজয় শত্রুজয়কারী শত্রুজয়ী শতরঞ্চ শতরঞ্চি শতরঞ্জ শতরঞ্জি শত্রুঞ্জয় শত্রুতা শত্রুতাকারী শত্রুতাচরণ শত্রুতাপূর্ণ শত্রুতাসাধন শত্রুতর শত্রুদমন শত্রুদমনকারী শত্রুদলন শত্রুধ্বংস শত্রুধ্বংসকারী শত্রুনাশ শত্রুনিগ্রহ শত্রুনিধন শতরূপ শত্রুপক্ষ শত্রুপক্ষীয় শতরূপা শত্রুপীড়ন শতরূপে শত্রুবাহিনী শত্রুবিদলন শত্রুবিনাশ শত্রুভাবাপন্ন শত্রুমিত্র শত্রুমিত্রভেদ শত্রুমর্দন শত্রুসংকুল শত্রুসঙ্কুল শত্রুসেনা শত্রুসৈন্য শত্রুহীন শত্রুহনন শতশ শতশত শতশতবার শতসংখ্যা শতসহস্র শুদ্ধ শুদ্ধা শুদ্ধাচার শুদ্ধাচারিণী শুদ্ধাচারী শুদ্ধান্ত শুদ্ধান্তঃকরণ শুদ্ধাশুদ্ধ শুদ্ধাশুদ্ধি শুদ্ধি শুদ্ধিকারক শুদ্ধিকরণ শুদ্ধিচিত্ত শুদ্ধিপত্র শুদ্ধচিত্ত শুদ্ধোদন শুদ্ধোদনি শুদ্ধতা শুদ্ধতাবাদী শুদ্ধত্ব শুদ্ধধন শুদ্ধমতি শুদ্ধশীল শুদ্বরূপ শূদ্র শূদ্রা শূদ্রাণী শূদ্রী শূদ্রজাতি শূদ্রবংশজাত শূদ্রবিধবা শূদ্রসুলভ শুধ শুধু শুধক শুধুক শুধা শুধাই শুধাইও শুধাইত শুধাইতাম শুধাইতিস শুধাইতে শুধাইতেছ শুধাইতেছি শুধাইতেছিল শুধাইতেছিলাম শুধাইতেছিলি শুধাইতেছিলে শুধাইতেছিলেন শুধাইতেছিস শুধাইতেছে শুধাইতেছেন শুধাইতেন শুধাইব শুধাইবার শুধাইবি শুধাইবে শুধাইবেন শুধাইল শুধাইলা শুধাইলাম শুধাইলি শুধাইলে শুধাইলেন শুধাইয়া শুধাইয়াছ শুধাইয়াছি শুধাইয়াছিল শুধাইয়াছিলাম শুধাইয়াছিলি শুধাইয়াছিলে শুধাইয়াছিলেন শুধাইয়াছিস শুধাইয়াছে শুধাইয়াছেন শুধাইয়ো শুধাক শুধান শুধানো শুধাশুধি শুধাস শুধি শুধিত শুধিতাম শুধিতিস শুধিতে শুধিতেছ শুধিতেছি শুধিতেছিল শুধিতেছিলাম শুধিতেছিলি শুধিতেছিলে শুধিতেছিলেন শুধিতেছিস শুধিতেছে শুধিতেছেন শুধিতেন শুধিব শুধিবার শুধিবি শুধিবে শুধিবেন শুধিল শুধিলাম শুধিলি শুধিলে শুধিলেন শুধিস শুধিয়া শুধিয়াছ শুধিয়াছি শুধিয়াছিল শুধিয়াছিলাম শুধিয়াছিলি শুধিয়াছিলে শুধিয়াছিলেন শুধিয়াছিস শুধিয়াছে শুধিয়াছেন শুধিয়ে শুধিয়েছ শুধিয়েছি শুধিয়েছিল শুধিয়েছিলাম শুধিয়েছিলি শুধিয়েছিলে শুধিয়েছিলেন শুধিয়েছিলেম শুধিয়েছিলুম শুধিয়েছিস শুধিয়েছে শুধিয়েছেন শুধিয়ো শুধুচোখে শুধচ্ছ শুধচ্ছি শুধচ্ছিল শুধচ্ছিলাম শুধচ্ছিলি শুধচ্ছিলে শুধচ্ছিলেন শুধচ্ছিলেম শুধচ্ছিলুম শুধচ্ছিস শুধচ্ছে শুধচ্ছেন শুধে শুধেছ শুধেছি শুধেছিল শুধেছিলাম শুধেছিলি শুধেছিলে শুধেছিলেন শুধেছিলেম শুধেছিলুম শুধেছিস শুধেছে শুধেছেন শুধেন শুধো শুধছ শুধছি শুধছিল শুধছিলাম শুধছিলি শুধছিলে শুধছিলেন শুধছিলেম শুধছিলুম শুধছিস শুধছে শুধছেন শুধত শুধতাম শুধতিস শুধতে শুধতেন শুধতেম শুধতুম শুধন শুধুন শুধনো শুধব শুধবার শুধবি শুধবে শুধবেন শুধবো শুধুমাত্র শুধর শুধরক শুধরা শুধরাই শুধরাইও শুধরাইত শুধরাইতাম শুধরাইতিস শুধরাইতে শুধরাইতেছ শুধরাইতেছি শুধরাইতেছিল শুধরাইতেছিলাম শুধরাইতেছিলি শুধরাইতেছিলে শুধরাইতেছিলেন শুধরাইতেছিস শুধরাইতেছে শুধরাইতেছেন শুধরাইতেন শুধরাইব শুধরাইবার শুধরাইবি শুধরাইবে শুধরাইবেন শুধরাইল শুধরাইলাম শুধরাইলি শুধরাইলে শুধরাইলেন শুধরাইয়া শুধরাইয়াছ শুধরাইয়াছি শুধরাইয়াছিল শুধরাইয়াছিলাম শুধরাইয়াছিলি শুধরাইয়াছিলে শুধরাইয়াছিলেন শুধরাইয়াছিস শুধরাইয়াছে শুধরাইয়াছেন শুধরাইয়ো শুধরাক শুধরান শুধরানো শুধরাস শুধরি শুধরিয়ে শুধরিয়েছ শুধরিয়েছি শুধরিয়েছিল শুধরিয়েছিলাম শুধরিয়েছিলি শুধরিয়েছিলে শুধরিয়েছিলেন শুধরিয়েছিলেম শুধরিয়েছিলুম শুধরিয়েছিস শুধরিয়েছে শুধরিয়েছেন শুধরিয়ো শুধরচ্ছ শুধরচ্ছি শুধরচ্ছিল শুধরচ্ছিলাম শুধরচ্ছিলি শুধরচ্ছিলে শুধরচ্ছিলেন শুধরচ্ছিলেম শুধরচ্ছিলুম শুধরচ্ছিস শুধরচ্ছে শুধরচ্ছেন শুধরে শুধরেছ শুধরেছি শুধরেছিল শুধরেছিলাম শুধরেছিলি শুধরেছিলে শুধরেছিলেন শুধরেছিলেম শুধরেছিলুম শুধরেছিস শুধরেছে শুধরেছেন শুধরো শুধরোবার শুধরত শুধরতাম শুধরতিস শুধরতে শুধরতেন শুধরতেম শুধরতুম শুধরন শুধরনো শুধরব শুধরবি শুধরবে শুধরবেন শুধরবো শুধরল শুধরলাম শুধরলি শুধরলে শুধরলেন শুধরলেম শুধরলুম শুধরস শুধল শুধলাম শুধলি শুধলে শুধলেন শুধলেম শুধলুম শুধুশুধু শুধস শুধুহাতে শুধয় শন শুন শূন শুনক শুনুক শুনা শুনাইও শুনাইত শুনাইতাম শুনাইতিস শুনাইতে শুনাইতেছ শুনাইতেছি শুনাইতেছিল শুনাইতেছিলাম শুনাইতেছিলি শুনাইতেছিলে শুনাইতেছিলেন শুনাইতেছিস শুনাইতেছে শুনাইতেছেন শুনাইতেন শুনাইব শুনাইবার শুনাইবি শুনাইবে শুনাইবেন শুনাইল শুনাইলাম শুনাইলি শুনাইলে শুনাইলেন শুনাইয়া শুনাইয়াছ শুনাইয়াছি শুনাইয়াছিল শুনাইয়াছিলাম শুনাইয়াছিলি শুনাইয়াছিলে শুনাইয়াছিলেন শুনাইয়াছিস শুনাইয়াছে শুনাইয়াছেন শুনাইয়ো শুনাক শনাক্ত শনাক্তকারী শনাক্তকৃত শনাক্তকরণ শুনান শুনানি শুনানো শুনাস শুনায় শনি শুনি শনিগ্রহ শুনিত শুনিতাম শুনিতিস শুনিতে শুনিতেছ শুনিতেছি শুনিতেছিল শুনিতেছিলাম শুনিতেছিলি শুনিতেছিলে শুনিতেছিলেন শুনিতেছিস শুনিতেছে শুনিতেছেন শুনিতেন শনিদেব শুনিনি শুনিব শনিবার শুনিবার শুনিবি শুনিবে শুনিবেন শনিরগোচর শনিরদশা শনিরদৃষ্টি শুনিল শুনিলাম শুনিলি শুনিলে শুনিলেন শুনিস শুনিয়া শুনিয়াছ শুনিয়াছি শুনিয়াছিল শুনিয়াছিলাম শুনিয়াছিলি শুনিয়াছিলে শুনিয়াছিলেন শুনিয়াছিস শুনিয়াছে শুনিয়াছেন শুনিয়ে শুনিয়েছ শুনিয়েছি শুনিয়েছিল শুনিয়েছিলাম শুনিয়েছিলি শুনিয়েছিলে শুনিয়েছিলেন শুনিয়েছিলেম শুনিয়েছিলুম শুনিয়েছিস শুনিয়েছে শুনিয়েছেন শুনিয়ো শুনী শুনচ্ছ শুনচ্ছি শুনচ্ছিল শুনচ্ছিলাম শুনচ্ছিলি শুনচ্ছিলে শুনচ্ছিলেন শুনচ্ছিলেম শুনচ্ছিলুম শুনচ্ছিস শুনচ্ছে শুনচ্ছেন শুনে শুনেছ শুনেছি শুনেছিল শুনেছিলাম শুনেছিলি শুনেছিলে শুনেছিলেন শুনেছিলেম শুনেছিলো শুনেছিলুম শুনেছিস শুনেছে শুনেছেন শুনেত শুনেন শনৈশ্চর শুনো শূনো শুনছ শুনছি শুনছিল শুনছিলাম শুনছিলি শুনছিলে শুনছিলেন শুনছিলেম শুনছিলুম শুনছিস শুনছে শুনছেন শুনছো শুনছনি শূন্য শূন্যকুম্ভ শূন্যগর্ভ শূন্যযোজী শূন্যতা শূন্যতাপূরণ শূন্যতাবোধ শূন্যতাবোধক শূন্যতম শূন্যতল শূন্যদৃষ্টি শূন্যপথ শূন্যবাদ শূন্যময় শূন্যরূপ শূন্যস্থান শুনত শুনতাম শুনতিস শুনতে শুনতেন শুনতেম শুনতুম শুনন শুনুন শুননো শুনব শুনবার শুনবি শুনবে শুনবেন শুনবেনা শুনবো শুনল শুনলু শুনলা শুনলাম শুনলি শুনলে শুনলেন শুনলেম শুনলুম শুনশান শনশন শুনস শুনয় শপ শূপকার শপার শপিং শপ্ত শপতি শপথ শপথকারী শপথনামা শপথপত্র শফিক শফর শফরী শব শ্ব শুবা শ্বা শ্বাদংষ্ট্র শ্বাদন্ত শবাধার শবানুগমন শবানুগমনকারী শবানুযাত্রী শ্বাপুচ্ছ শ্বাপদ শ্বাপদসংকুল শ্বাপদসঙ্কুল শ্বাপদসমাকীর্ণ শ্বাস শ্বাসকার্য শ্বাসক্রিয়া শ্বাসকর্ম শ্বাসকষ্ট শ্বাসগুচ্ছ শ্বাসগ্রাহী শ্বাসগ্রহণ শ্বাসঘাত শ্বাসচাপ শ্বাসজীবী শ্বাসযোগ শ্বাসযতি শ্বাসযন্ত্র শ্বাসত্যাগ শ্বাসতন্ত্র শ্বাসধারণ শ্বাসধ্বনি শবাসন শবাসনা শ্বাসনালিকা শ্বাসনালী শ্বাসপর্ব শ্বাসপ্রশ্বাস শ্বাসবায়ু শ্বাসবায়ুবাহিত শ্বাসবন্ধ শ্বাসমূল শ্বাসরোগ শ্বাসরোধ শ্বাসরোধকারী শ্বাসরোধী শ্বাসরোধরূপ শ্বাসরুদ্ধ শ্বাসরন্ধ্র শ্বাসরূপ শবাহারী শুবি শবিনা শবিনাখতম শবে শুবে শবেকদর শ্বেত শ্বেতকায় শ্বেতকরবী শ্বেতকুষ্ঠ শ্বেতা শ্বেতাঙ্গ শ্বেতাঙ্গসুলভ শ্বেতাভ শ্বেতাম্বর শ্বেতি শ্বেতী শ্বেতচন্দন শ্বেতচর্ম শ্বেততন্তু শ্বেতদ্বীপ শ্বেতপাথর শ্বেতপত্র শ্বেতপদ্ম শ্বেতপ্রদর শ্বেতপ্রস্তর শ্বেতবিবর শ্বেতবর্ণ শ্বেতভাব শ্বেতরক্তকণিকা শ্বেতরশ্মি শ্বেতশুভ্র শ্বেতসার শ্বেতস্রাব শ্বেতহস্তী শবেবরাত শ্বৈত্য শবযাত্রা শবযাত্রী শবযাত্রীদল শবযান শবতুল্য শব্দ শব্দঋণ শব্দকারক শব্দকারিণী শব্দকারী শব্দকোষ শব্দকদম্ব শব্দগঠন শব্দগঠনপদ্ধতি শব্দগণনা শব্দগত শব্দাংশ শব্দাক্ষরিক শব্দাতিরিক্ততা শব্দাতিরেক শব্দাতীত শব্দাত্মক শব্দাদি শব্দান্ত শব্দান্তিক শব্দান্তর শব্দান্তরণ শব্দান্ধতা শব্দানুসারে শব্দাবলী শব্দাভিধান শব্দার্থ শব্দার্থকোষ শব্দার্থগঠন শব্দার্থজ্ঞান শব্দার্থতা শব্দার্থতত্ত্ব শব্দার্থনিরূপক শব্দার্থবিজ্ঞান শব্দালংকার শব্দালঙ্কার শবদাহ শবদাহকারী শবদাহকার্য শবদাহকাল শবদাহাদি শবদাহজনিত শবদাহস্থান শবদাহহীন শব্দায়মান শব্দিত শব্দিতকরণ শব্দচাবি শব্দচয়ন শব্দেন্দ্রিয় শবদেহ শব্দজোড়া শব্দজোড়ে শব্দযুক্ত শব্দযোগ শব্দযোজনা শব্দতত্ত্ব শব্দতরঙ্গ শব্দদুটি শব্দদ্বয় শব্দদলগত শব্দদলীয় শব্দনিষেধ শ্বদন্ত শব্দপ্রকার শব্দপ্রকরণ শব্দপরিসংখ্যান শব্দপূর্ণ শব্দপ্রতীক শব্দপ্রয়োগ শব্দবাক্য শব্দবিজ্ঞান শব্দবিদ্যা শব্দবিন্যাস শব্দবিভক্তি শব্দবিভাজন শব্দবিভ্রাট শব্দবিভ্রম শব্দবেধী শব্দব্রহ্ম শব্দবলী শব্দবহ শব্দভাণ্ডার শব্দভেদী শব্দমালা শব্দমূল শব্দমূলঘটিত শব্দমূলবিপর্যয় শব্দময় শব্দরচনা শব্দরূপ শব্দলিপি শব্দলিপিতত্ত্ব শব্দলিপিভিত্তিক শব্দলোপ শব্দশক্তি শব্দশাস্ত্র শব্দশাস্ত্রজ্ঞ শব্দশেষ শব্দশৈলী শব্দসংক্রান্ত শব্দসংক্রম শব্দসংক্ষেপ শব্দসংক্ষেপণ শব্দসংখ্যা শব্দসৈনিক শব্দস্থির শব্দসন্ধি শব্দসম্ভার শব্দসমষ্টি শব্দসহযোগ শব্দহীন শব্দহীনতা শবদহন শ্বন শবনাম শবনম শবব্যবচ্ছেদ শ্ববৃত্তি শববহন শবর শবরী শবল শবলা শবলিত শবলী শ্বশুর শ্বশ্রূ শ্বশুরকুল শ্বশুরগৃহ শ্বশুরঘর শ্বশুরালয় শ্বশুরপক্ষ শ্বশুরবংশ শ্বশুরবাড়ি শ্বশ্রূমাতা শ্বশুরমন্দির শবসাধনা শ্বসিত শ্বসিয়া শবসৎকার শ্বসন শ্বসনকার্য শ্বসনীয় শ্বসনতন্ত্র শ্বসমান শুভ শুভঅশুভ শুভকাজ শুভকামনা শুভকার্য শুভকাল শুভকর শুভকর্ম শুভকর্মা শুভক্ষণ শুভগ্রহ শুভঙ্কর শুভঙ্করী শুভা শুভাকাঙ্ক্ষা শুভাকাঙ্ক্ষিণী শুভাকাঙ্ক্ষী শুভাগমন শুভানুধ্যান শুভানুধ্যায়িনী শুভানুধ্যায়ী শুভানন শুভাননা শুভানুষ্ঠান শুভার্থিনী শুভার্থী শুভারম্ভ শুভাশিস শুভাশীর্বাদ শুভাশুভ শুভাশুভবোধক শুভাশুভলক্ষণ শুভচিন্তা শুভচিহ্ন শুভেচ্ছা শুভেচ্ছান্তে শুভেন্দু শুভেন্দ্র শুভজ্ঞান শুভজনক শুভযুক্ত শুভযোগ শুভতিথি শুভদ শুভদা শুভদায়ক শুভদায়িনী শুভদিন শুভদর্শী শুভদৃষ্টি শুভপ্রদ শুভফল শুভফললাভ শুভবিবাহ শুভবুদ্ধি শুভব্রত শুভমঙ্গল শুভমুহুর্ত শুভ্র শুভ্রকেশ শুভ্রাংশু শুভরাত্রি শুভ্রজ্যোৎস্না শুভ্রতা শুভ্রতারোগ শুভ্রত্ব শুভ্রতুষার শুভ্রবসন শুভ্রমৌলি শুভলক্ষণ শুভসংকল্প শুভসংবাদ শুভসূচনা শুভসন্ধ্যা শম শমগুণ শমগুণযুক্ত শুমার শুমারি শমি শমিত শমিতা শমিবৃক্ষ শমী শমন শমনীয় শমনদ্বার শমনদমন শমনভবন শমনসদন শম্পা শম্ব শম্বুক শম্বূক শম্বুকগতি শম্বূকগতি শম্বর শম্বরারি শম্ভু শম্ভুখোঁপা শম্ভুগঞ্জ শম্ভুনাথ শুম্ভনিশুম্ভ শ্মশান শ্মশানকালী শ্মশানঘাট শ্মশানচারিণী শ্মশানচারী শ্মশানপুরী শ্মশানবাসিনী শ্মশানবাসী শ্মশানবৈরাগ্য শ্মশানবন্ধু শ্মশানভূমি শমশের শ্মশ্রু শ্মশ্রুমণ্ডিত শ্মশ্রুময় শ্মশ্রুল শ্মশ্রুশোভিত শ্মশ্রুহীন শমসের শময়িতা শর শুরু শূর শুরুকারী শর্কি শর্কী শর্করা শর্করাবৎ শর্করামিশ্রিত শুরুকরে শরক্ষেপ শরক্ষেপণ শরগাছ শরা শূরা শরাঘাত শ্রাদ্ধ শ্রাদ্ধকার্য শ্রাদ্ধকর্তা শ্রাদ্ধাদি শ্রাদ্ধানুষ্ঠান শ্রাদ্ধিক শ্রাদ্ধীয় শ্রাদ্ধদিবস শ্রাদ্ধশান্তি শ্রান্ত শ্রান্তক্লান্ত শ্রান্তি শ্রান্তিরহিত শ্রান্তিহীন শ্রান্তিহীনতা শরাপ শরাফত শরাফৎ শরাব শ্রাবক শরাবখানা শরাবখোর শরাবি শ্রাবিত শ্রাব্য শ্রাবণ শ্রাবণী শ্রাবণধারা শ্রাবণপূর্ণিমা শ্রাবণভাদ্র শ্রাবণমাস শরাবনতহুরা শরাবসুরাহি শরাসন শরাহত শরিক শরিকান শরিকানা শরিকানি শরিকানী শরিকি শ্রিত শরিফ শরিফা শরিয়ত শরিয়ৎ শরিয়তি শরিয়তপুর শ্রী শ্রীঅঙ্গ শরীক শরীকান শরীকানা শ্রীকান্ত শরীকী শ্রীকেদারনাথ শ্রীকণ্ঠ শ্রীকরণ শ্রীক্ষেত্র শ্রীকৃষ্ণ শ্রীকৃষ্ণলীলা শ্রীখণ্ড শ্রীখণ্ডী শ্রীগোবিন্দ শ্রীগুপ্ত শ্রীঘর শ্রীঘরবাস শরচালনা শ্রীচৈতন্য শ্রীচৈতন্যদেব শরচ্চন্দ্র শ্রীচরণ শ্রীচরণকমল শ্রীচরণকমলেষু শ্রীচরণেষু শ্রীছাঁদ শ্রীযুক্ত শ্রীযুক্তা শ্রীযুত শ্রীধর শ্রীধরা শ্রীনগর শ্রীনাথ শ্রীনিকেতন শ্রীনিবাস শ্রীপাদ শ্রীপাদপদ্ম শ্রীপঞ্চমী শ্রীপতি শ্রীপদ শ্রীপদকমল শ্রীপদপঙ্কজ শ্রীপদপল্লব শ্রীপুর শ্রীপর্ণ শরীফ শ্রীফল শ্রীবাস্তব শ্রীবৎস শ্রীবৎসলাঞ্ছন শ্রীবৃদ্ধি শ্রীবৃদ্ধিযুক্ত শ্রীবৃদ্ধিসম্পন্ন শ্রীবন্তী শ্রীবর্ধন শ্রীভগবান শ্রীভ্রষ্ট শ্রীমুখ শ্রীমঙ্গল শ্রীমাই শ্রীমান শ্রীমণ্ডিত শ্রীমৎ শ্রীমতী শ্রীমন্ত শরীর শরীরগত শরীরগতিক শরীরাংশ শ্রীরাগ শ্রীরাধা শ্রীরাধিকা শ্রীরাম শ্রীরামকৃষ্ণ শ্রীরামচন্দ্র শ্রীরামপুর শরীরিণী শরীরী শরীরচর্চা শরীরেরগাঁট শরীরজ শরীরযন্ত্র শরীরতত্ত্ব শরীরধারী শরীরপাত শরীরপোষণ শরীরবিক্ষেপ শরীরবিজ্ঞান শরীরবৃত্তীয় শরীরস্থ শরীরস্থান শরীরসহ শ্রীল শ্রীলংকা শ্রীলংকান শ্রীলঙ্কা শ্রীলঙ্কান শ্রীসম্পাদক শ্রীহীন শ্রীহীনতা শরীয়ত শরীয়তী শরীয়তপুর শরে শ্রোতা শ্রোতাদর্শক শ্রেণি শ্রেণিগত শ্রেণিনির্দেশক শ্রেণিবিন্যাস শ্রেণিবিভক্ত শ্রেণিবিভাগ শ্রেণিবিশেষ শ্রেণিবদ্ধ শ্রেণিবদ্ধভাবে শ্রেণিভুক্ত শ্রেণিভিত্তিক শ্রেণিভেদ শ্রেণিসংগ্রাম শ্রেণিসংঘাত শ্রেণিহীন শ্রেণী শ্রেণীকক্ষ শ্রেণীকরণ শ্রেণীকরণবাদী শ্রেণীকরণবিদ্যা শ্রেণীগোষ্ঠী শ্রেণীগত শ্রেণীচ্যুত শ্রেণীতত্ত্ব শ্রেণীপরিবর্তন শ্রেণীবিন্যাস শ্রেণীবিন্যাসকৃত শ্রেণীবিভক্ত শ্রেণীবিভাগ শ্রেণীবিভাজন শ্রেণীবিহীন শ্রেণীবদ্ধ শ্রেণীবদ্ধকরণ শ্রেণীভুক্ত শ্রেণীভিত্তিক শ্রেণীভেদাভেদ শ্রেণীভর শ্রেণীশত্রু শ্রেণীসংখ্যা শ্রেণীসংগ্রাম শ্রেণীসংঘগত শ্রেণীসাম্য শ্রেণীহিংসা শ্রেণীহীন শ্রেষ্ঠ শ্রেষ্ঠা শ্রেষ্ঠাংশ শ্রেষ্ঠী শ্রেষ্ঠজন শ্রেষ্ঠতা শ্রেষ্ঠতাজ্ঞাপক শ্রেষ্ঠত্ব শ্রেষ্ঠতম শ্রেষ্ঠতমা শ্রেষ্ঠতর শ্রেষ্ঠতরা শ্রেষ্ঠবীর শ্রেষ্ঠবুদ্ধিমত্তা শ্রেষ্ঠসংস্কৃতি শ্রেঢ়ী শ্রেয় শ্রেয়কল্প শ্রেয়া শ্রেয়ান শ্রেয়োজনক শ্রেয়োবোধ শ্রেয়োলাভ শ্রেয়স্কর শ্রেয়স্করী শ্রেয়সী শ্রোণি শ্রোণিদেশ শ্রোণী শ্রোণীচক্র শ্রোতা শ্রোতাদর্শক শ্রোতাপ্রিয়তা শ্রোতব্য শ্রোতৃবর্গ শ্রোতৃমণ্ডলী শ্রোত্র শ্রোত্রিয় শ্রোত্রিয়হীন শ্রোত্রী শ্রৌত শর্জ শর্জু শরজাল শর্জ্জ শর্ট শর্টওয়েভ শর্টকাট শরযোজনা শর্টস শর্টসাইট শর্টসার্কিট শরণ শরণখোলা শরণাগত শরণাগতা শরণাপন্ন শরণাপন্না শরণার্থিনী শরণার্থী শরণি শরণী শরণ্য শরণ্যা শরত শর্ত শ্রুত শ্রূত শরতকাল শরৎকাল শরৎকালীন শ্রুতকীর্তি শর্তা শর্তাদি শর্তাধীন শর্তানুযায়ী শর্তানুসারে শর্তাবলি শর্তাবলী শর্তারোপ শ্রুতি শ্রুতিকার্কশ্য শ্রুতিকটু শ্রুতিকটুতা শ্রুতিকঠোর শ্রুতিগোচর শ্রুতিগুণ শ্রুতিগত শ্রুতিগতভাবে শ্রুতিগম্য শ্রুতিগ্রাহ্য শ্রুতিচ্ছত্র শ্রুতিতত্ত্ব শ্রুতিধ্বনি শ্রুতিধ্বনিগত শ্রুতিধর শ্রুতিনাটক শ্রুতিপথ শ্রুতিফল শ্রুতিবিজ্ঞান শ্রুতিবিরুদ্ধ শ্রুতিবেধ শ্রুতিমাধুর্য শ্রুতিমধুর শ্রুতিমধুরতা শ্রুতিমূল শ্রুতিলিখন শ্রুতিলিপিকর শ্রুতিলেখক শ্রুতিস্মৃতি শরৎচন্দ্র শর্তযুক্ত শরত্যাগ শর্তত্রয় শর্তনির্ভর শর্তভঙ্গ শর্তভঙ্গকারী শ্রুতমাত্র শ্রুতলিখন শ্রুতলিপি শরৎশশী শর্তসংবলিত শর্তসাপেক্ষ শর্তসীমা শর্তহীন শরদ শুরুদায়িত্ব শরদিন্দু শ্রদ্ধা শ্রদ্ধাজনক শ্রদ্ধাঞ্জলি শ্রদ্ধাযুক্ত শ্রদ্ধাধান শ্রদ্ধানন্দ শ্রদ্ধান্বিত শ্রদ্ধাপরিপূর্ণ শ্রদ্ধাপূর্ণ শ্রদ্ধাবান শ্রদ্ধাবশত শ্রদ্ধাভাজন শ্রদ্ধাভাজনেষু শ্রদ্ধামূলক শ্রদ্ধার্হ শ্রদ্ধালু শ্রদ্ধাশীল শ্রদ্ধাস্পদ শ্রদ্ধাস্পদেষু শ্রদ্ধাস্বরূপ শ্রদ্ধাহীন শ্রদ্ধেয় শ্রদ্ধেয়া শরনিক্ষেপ শূর্প শূর্পী শূর্পণখা শর্ব শ্রব শর্বাণী শরবিঘাত শরবিদ্ধ শরবিমোচন শরব্য শ্রব্য শ্রব্যকাব্য শ্রবণ শ্রবণকারী শ্রবণগোচর শ্রবণগত শ্রবণা শ্রবণাতীত শ্রবণীয় শ্রবণেন্দ্রিয় শ্রবণোত্তর শ্রবণযোগ্য শ্রবণযন্ত্র শ্রবণপথ শ্রবণবিবর শ্রবণবহির্ভূত শ্রবণমধুর শ্রবণশক্তি শ্রবণশক্তিরহিত শ্রবণশক্তিহীন শ্রবণসুখ শ্রবণসুখকর শ্রবণহীন শরবত শরবৎ শরবতি শরবন শর্বর শর্বরী শরবর্ষণ শরভ শরম শর্ম শ্রম শ্রমআদালত শ্রমকাতর শ্রমকুণ্ঠ শ্রমক্ষমতা শর্মা শরমার্ত শ্রমিক শ্রমিকা শ্রমিকমালিক শ্রমিকসংঘ শ্রমিণী শরমিন্দা শর্মিষ্ঠা শ্রমী শরমেন্দা শরমোচন শ্রমোপজীবী শ্রমজীবী শ্রমজল শ্রমণ শ্রমণা শ্রমদপ্তর শ্রমদফতর শ্রমনিযুক্ত শ্রমবাজার শ্রমবারি শ্রমবাহিনী শ্রমবিভাগ শ্রমবিভাজন শরমবিভাস শ্রমবিমুখ শ্রমবিমুখতা শ্রমবণ্টন শ্রমবহুল শ্রমভিক্তিক শরমভরম শরমরাঙ্গা শরমরাঙা শ্রমলব্ধ শ্রমশক্তি শ্রমশিল্প শ্রমশীল শ্রমসাধ্য শ্রমসাপেক্ষ শ্রমসঞ্চয় শ্রমসঞ্চয়ী শরশয্যা শর্ষে শূরসেন শরসন্ধান শ্রয় শুরুয়া শ্রয়ণ শ্রূয়মাণ শুল শূল শলওয়ার শল্ক শুল্ক শুল্কআদায়কারী শুল্কাধীন শুলকানো শল্কী শুল্কোদ্ধরণিক শল্কযুক্ত শুল্কমুক্ত শল্কময় শল্কল শল্কলী শুলুকসন্ধান শুল্কহার শূলঘ্ন শলা শলাকা শলাকাযুক্ত শলাকাবিদ্ধ শলাকাহীন শূলাগ্র শ্লাঘা শ্লাঘ্য শ্লাঘনীয় শুলানি শূলানি শুলানো শূলানো শলাপরামর্শ শুলাম শলি শুলি শলিতা শূলিনী শ্লিপ শ্লিষ্ট শলী শূলী শ্লীপদ শ্লীল শ্লীলতা শ্লীলতাহানি শুলে শূলেচড়ানো শ্লেটপেনসিল শুলেন শুলেম শ্লেষ শ্লেষাত্মক শ্লেষোক্তি শ্লেষোক্তিপূর্ণ শ্লেষযুক্ত শ্লেষপূর্ণ শ্লেষবাক্য শ্লেষ্মা শ্লেষ্মাজনিত শ্লেষ্মানাশক শ্লেষ্মাপীড়িত শ্লেষ্মাবাহী শ্লেষ্মাবৃদ্ধি শ্লেষমিশ্রিত শ্লৈষ্মিক শ্লোক শ্লোকাত্মক শ্লোকাদি শ্লোকেরছটা শ্লোকসংবলিত শ্লোকসমষ্টি শ্লোগান শ্লোভাকিয়া শল্য শল্যউন্মোচন শল্যচিকিৎসা শল্যোদ্ধার শল্যবিদ শূল্যমাংস শল্যহীন শ্লথ শ্লথগতি শ্লথপা শ্লথবেশ শ্লথবদ্ধ শূলনি শূলনো শূলপক্ব শূলপাণি শুলফা শুলফো শূলবিদ্ধ শূলবেদনা শলভ শুলুম শল্ল শল্লক শল্লকী শশ শশক শুশুক শশাঙ্ক শশিকান্ত শশিকর শশিকলা শশিপ্রিয়া শশিভূষণ শশিমুখী শশিশেখর শশী শশধর শুশনি শুশুনি শশবিন্দু শশবিষাণ শশব্যস্ত শশ্বৎ শশবৃত্তি শশভৃৎ শশুম শুশ্রূষু শুশ্রূষা শুশ্রূষাকারিণী শুশ্রূষাকারী শশলক্ষণ শশলাঞ্ছন শশশৃঙ্গ শুষ শুষুক শুষ্ক শুষ্কাক্ষী শুষ্কীকরণ শুষ্কজলা শুষ্কতা শুষ্কতম শুষ্কপ্রায় শুষ্কহৃদয় শুষা শুষান শুষানো শুষি শুষিত শুষিতাম শুষিতিস শুষিতে শুষিতেছ শুষিতেছি শুষিতেছিল শুষিতেছিলাম শুষিতেছিলি শুষিতেছিলে শুষিতেছিলেন শুষিতেছিস শুষিতেছে শুষিতেছেন শুষিতেন শুষিব শুষিবার শুষিবি শুষিবে শুষিবেন শুষিল শুষিলাম শুষিলি শুষিলে শুষিলেন শুষিস শুষিয়া শুষিয়াছ শুষিয়াছি শুষিয়াছিল শুষিয়াছিলাম শুষিয়াছিলি শুষিয়াছিলে শুষিয়াছিলেন শুষিয়াছিস শুষিয়াছে শুষিয়াছেন শুষিয়ো শুষী শুষে শুষেছ শুষেছি শুষেছিল শুষেছিলাম শুষেছিলি শুষেছিলে শুষেছিলেন শুষেছিলেম শুষেছিলুম শুষেছিস শুষেছে শুষেছেন শুষেন শুষো শুষছ শুষছি শুষছিল শুষছিলাম শুষছিলি শুষছিলে শুষছিলেন শুষছিলেম শুষছিলুম শুষছিস শুষছে শুষছেন শুষত শুষতাম শুষতিস শুষতে শুষতেন শুষতেম শুষতুম শুষুন শুষনি শষ্প শষ্পাবৃত শষ্পিত শষ্পশ্যাম শুষব শুষবি শুষবে শুষবেন শুষবো শুষল শুষলাম শুষলি শুষলে শুষলেন শুষলেম শুষলুম শসা শস্য শস্যউৎপাদক শস্যউৎপাদন শস্যকণা শস্যক্ষেত্র শস্যখেত শস্যগোলা শস্যাগার শস্যাদি শস্যদানা শস্যদেবী শস্যধান শস্যধ্বংস শস্যনাশক শস্যপেষা শস্যপ্রাচুর্য শস্যপূর্ণ শস্যবীজ শস্যবীজাদি শস্যভাণ্ডার শস্যভোজী শস্যশালা শস্যশ্যামল শস্যশ্যামলা শস্যসংগ্রাহক শস্যসংরক্ষক শস্যহানি শস্ত্র শস্ত্রাজীব শস্ত্রী শস্ত্রজীবী শস্ত্রধারী শস্ত্রধর শস্ত্রপাণি শস্ত্রবিদ্যা শস্ত্রভৃৎ শস্প শস্পাবৃত শস্পিত শসম শহাদত শহিদ শহিদান শহিদি শহীদ শহীদান শহীদি শহীদী শহীদদিবস শহীদমিনার শহীদস্মৃতি শহদ শহর শহরকেন্দ্রিক শহরাঞ্চল শহরাঞ্চলীয় শহরচিত্র শহুরে শুহরত শহরতলি শহরতলী শহরনামা শহরবাসী শহরসেবা শহরস্থ শুঁড় শড়কা শড়কি শড়া শড়ানো শুঁড়ি শুঁড়িখানা শুঁড়িবিহীন শুঁড়ী শুঁড়ীখানা শয় শয়খ শুয়া শুঁয়া শয়ান শুয়ান শয়ানা শুয়ানো শুঁয়াপোকা শুয়াবসা শুয়ার শয়ালু শয়ে শুয়ে শুয়েছ শুয়েছি শুয়েছিল শুয়েছিলাম শুয়েছিলি শুয়েছিলে শুয়েছিলেন শুয়েছিলেম শুয়েছিলুম শুয়েছিস শুয়েছে শুয়েছেন শুয়ো শুঁয়ো শুঁয়োপোকা শুয়োর শুয়োরছানা শয়তান শয়তানি শয়তানী শয়তানপনা শয়ন শয়নকক্ষ শয়নকারী শয়নকাল শয়নগৃহ শয়নাগার শয়নাবস্থা শয়নীয় শয়নেস্বপনে শয়নভঙ্গ শয়নমন্দির শয়নরত শয়নশিয়র শূয়র".split(" "),
              w_ss: "ষ ষাইট ষাট ষাটগম্বুজ ষাটি ষাটোর্ধ ষাটভিত্তিক ষাণ ষাণ্মাসিক ষাণ্মাস্য ষাঁড় ষাঁড়া ষাঁড়াষাঁড়ি ষেট ষেটে ষেটেধান ষেটেরা ষোল ষোলআনা ষোলকলা ষোলগুটি ষোলো ষোলোআনা ষোলোকলা ষোলোজন ষোলোবৎসর ষোলোসংখ্যক ষোলশ ষোলশহর ষোড়শ ষোড়শক ষোড়শাংশ ষোড়শাংশু ষোড়শাঙ্ঘ্রি ষোড়শার ষোড়শী ষোড়শোপচার ষোড়শদান ষোড়শপ্রকার ষোড়শবর্ষীয় ষোড়শবর্ষীয়া ষোড়শমাতৃকা ষট ষটক ষ্টক ষটকোণ ষটকর্ণ ষটকর্ম ষটকর্মা ষটচক্র ষটচক্রভেদ ষটচত্বারিংশ ষটচত্বারিংশত্তম ষটচত্বারিংশত্তমী ষ্টীম ষ্টীমার ষ্টীল ষ্টেজ ষ্টেট ষ্টেশন ষ্টেশনারী ষ্টোভ ষ্টোর ষ্ট্যাণ্ডার্ড ষ্ট্যাম্প ষটত্রিংশ ষটত্রিংশত্তম ষটত্রিংশত্তমী ষ্টুপিড ষটপঞ্চাশ ষটপঞ্চাশত্তম ষটপদ ষটপদা ষটপদাতিথি ষটপদাধার ষটপদানন্দবর্ধক ষটপদী ষটপ্রজ্ঞ ষ্ট্রীট ষটশাস্ত্র ষটষষ্টি ষটষষ্টিতম ষটষষ্টিতমী ষটষষ্ঠ ষটসপ্ততি ষটসপ্ততিতম ষটসপ্ততিতমী ষ্ঠীবন ষণ্ড ষণ্ডা ষণ্ডাগুণ্ডা ষণ্ডামার্ক ষণ্ডামার্কা ষণ্ডামি ষণ্ডামর্ক ষণ্ডমার্কা ষণ্ঢ ষণ্ণবতি ষণ্ণবতিতম ষণ্ণবতিতমী ষণ্মুখ ষণ্মাস ষত্ব ষত্ববিধান ষত্ববিধি ষষ্ট ষষ্টি ষষ্টিক ষষ্টিকান্ন ষষ্টিক্য ষষ্টিতম ষষ্টিতমী ষষ্টিধা ষষ্ঠ ষষ্ঠাংশ ষষ্ঠী ষষ্ঠীতৎপুরুষ ষষ্ঠীতলা ষষ্ঠীদেবী ষষ্ঠীপাড়া ষষ্ঠীপূজা ষষ্ঠীবাটা ষষ্ঠীবুড়ি ষষ্ঠীভাগ্য ষষ্ঠীরকৃপা ষষ্ঠত ষষ্ঠবার ষষ্ঠম ষড় ষড়ঋতু ষড়গুণ ষড়গত ষড়ঙ্গ ষড়ঙ্গধূপ ষড়ঙ্ঘ্রি ষড়ানন ষড়াম্নায় ষড়ৈশ্বর্য ষড়জ ষড়যন্ত্র ষড়যন্ত্রকারী ষড়দুর্গ ষড়দর্শন ষড়ধা ষড়বিধ ষড়বর্গ ষড়ভুজ ষড়ভুজা ষড়ভুজাকৃতি ষড়মাত্রিক ষড়রিপু ষড়রস ষড়লবণ ষড়শীতি ষড়শীতিতম ষড়শীতিতমী".split(" "),
              w_t: "ত তু তঁ তৃ তুঁ তং তুং তংখা তংগ তংগদস্তি তংগদস্তী তংদস্তি তংদস্তী তুঅ তুআক্কা তই তুই তইঅও তুইই তইও তইখন তুইতোকারি তইরি তইরী তুইলা তইসা তউরেত তওঙ্গর তওজা তওত তওবা তওরাত তওহিদ তওহীদ তওয়াক্কা তওয়াককুল তওয়াক্কল তওয়াজা তওয়াফ তওয়ারিখ তক তুক তক্ক তুক্ক তক্কে তক্কেতক্কে তুক্কো তুকা তুকানি তুকানো তকাবী তকাব্বরি তকাব্বরী তকছির তক্ত তকতক তক্তা তুকতাক তক্তাপোশ তক্তাপোষ তক্তি তক্তনামা তক্তপোশ তক্তপোষ তকদির তকদীর তকবির তকবীর তকব্বরি তকমা তকমাআঁটা তকমাতাবিজ তক্র তক্রকূচিকা তকরার তকরারি তক্রপিণ্ড তক্রমাংস তকলি তকলিফ তকলীফ তকল্লুফ তক্ষক তক্ষা তক্ষণ তক্ষণাস্ত্র তক্ষণী তক্ষনি তক্ষুনি তক্ষশীলা তকসিম তকসীম তুখার তুখোড় তখত তখৎ তখতেতাউস তখতনামা তখতনশিন তখন তখনকার তখনকাল তখনকি তখনি তখনো তখমা তখরচ তখল্লুস তুখড় তগাবি তগির তগীর তগর তুগরা তুঘলকি তঙ্ক তঙ্কা তঙ্গ তুঙ্গ তুঙ্গে তঙ্গদস্তি তঙ্গদস্তী তুঙ্গভদ্র তুঙ্গভদ্রা তা তাং তাংড়া তাংড়ানো তাই তাঁই তাইওয়ান তাইওয়ানীয় তাইকুন্ডু তাইগ্রিস তাইত তাইতো তাইদ তাইদগির তাইদাদ তাইদনবিশ তাইদনবিশি তাইনা তাইনাকি তাইপে তাইবলে তাইমুম তাইরে তাইলে তাইয়েবা তাইয়্যেবাহ তাঈদ তাঈদগির তাঈদনবিশ তাঈদনবিশি তাউই তাউত তাউরু তাউস তাও তাওই তাওক্কাল তাওফিক তাওবাদ তাওবাদী তাওরাত তাওহীদ তাওয়া তাওয়াককুল তাওয়ান তাওয়ানো তাওয়াল্লা তাক তাকওয়া তাকওয়াপূর্ণ তাকা তাকাই তাকাইও তাকাইত তাকাইতাম তাকাইতিস তাকাইতে তাকাইতেছ তাকাইতেছি তাকাইতেছিল তাকাইতেছিলাম তাকাইতেছিলি তাকাইতেছিলে তাকাইতেছিলেন তাকাইতেছিস তাকাইতেছে তাকাইতেছেন তাকাইতেন তাকাইব তাকাইবার তাকাইবি তাকাইবে তাকাইবেন তাকাইল তাকাইলাম তাকাইলি তাকাইলে তাকাইলেন তাকাইয়া তাকাইয়াছ তাকাইয়াছি তাকাইয়াছিল তাকাইয়াছিলাম তাকাইয়াছিলি তাকাইয়াছিলে তাকাইয়াছিলেন তাকাইয়াছিস তাকাইয়াছে তাকাইয়াছেন তাকাইয়ো তাকাক তাকাচ্ছ তাকাচ্ছি তাকাচ্ছিল তাকাচ্ছিলাম তাকাচ্ছিলি তাকাচ্ছিলে তাকাচ্ছিলেন তাকাচ্ছিলেম তাকাচ্ছিলুম তাকাচ্ছিস তাকাচ্ছে তাকাচ্ছেন তাকাত তাকাতাকি তাকাতাম তাকাতিস তাকাতে তাকাতেন তাকাতেম তাকাতুম তাকাদা তাকান তাকানো তাকাব তাকাবার তাকাবি তাকাবী তাকাবে তাকাবেন তাকাবো তাকাব্বরি তাকাব্বুরি তাকাব্বরী তাকাল তাকালাম তাকালি তাকালে তাকালেই তাকালেন তাকালেম তাকালুম তাকাস তাকায়ো তাকি তাকিদ তাকিয়া তাকিয়ে তাকিয়েছ তাকিয়েছি তাকিয়েছিল তাকিয়েছিলাম তাকিয়েছিলি তাকিয়েছিলে তাকিয়েছিলেন তাকিয়েছিলেম তাকিয়েছিলুম তাকিয়েছিস তাকিয়েছে তাকিয়েছেন তাকিয়ো তাকীদ তাকে তাঁকে তাকেঘিরে তাকেতাকে তাকত তাকদ তাকবীর তাকমাফিক তাখাল্লুস তাগ তাগা তাগাদা তাগারি তাগাড় তাগি তাগিদ তাগত তাগবাগ তাগড়া তাগড়াই তাচ্ছিল্য তাচ্ছল্য তাছাওফ তাছাড়া তাছির তাজ তাজউদ্দীন তাজা তাজাখবর তাজাল্লী তাজি তাজিকিস্তান তাজিম তাজিয়া তাজী তাজ্জব তাজনি তাজবিদ তাজমহল তাঞ্জানিয়া তাঞ্জাম তাটঙ্ক তাযীম তাযীয়া তাড্যমান তাণ্ডব তাণ্ডবনৃত্য তাণ্ডবলীলা তাত তাঁত তাতুক তাৎকালিক তাৎক্ষণিক তাৎক্ষনিক তাঁতখানা তাঁতঘর তাতা তাতাই তাতাইও তাতাইত তাতাইতাম তাতাইতিস তাতাইতে তাতাইতেছ তাতাইতেছি তাতাইতেছিল তাতাইতেছিলাম তাতাইতেছিলি তাতাইতেছিলে তাতাইতেছিলেন তাতাইতেছিস তাতাইতেছে তাতাইতেছেন তাতাইতেন তাতাইব তাতাইবার তাতাইবি তাতাইবে তাতাইবেন তাতাইল তাতাইলাম তাতাইলি তাতাইলে তাতাইলেন তাতাইয়া তাতাইয়াছ তাতাইয়াছি তাতাইয়াছিল তাতাইয়াছিলাম তাতাইয়াছিলি তাতাইয়াছিলে তাতাইয়াছিলেন তাতাইয়াছিস তাতাইয়াছে তাতাইয়াছেন তাতাইয়ো তাতাও তাতাক তাতাচ্ছ তাতাচ্ছি তাতাচ্ছিল তাতাচ্ছিলাম তাতাচ্ছিলি তাতাচ্ছিলে তাতাচ্ছিলেন তাতাচ্ছিলেম তাতাচ্ছিলুম তাতাচ্ছিস তাতাচ্ছে তাতাচ্ছেন তাতাত তাতাতাম তাতাতিস তাতাতে তাতাতেন তাতাতেম তাতাতুম তাতাথৈ তাতান তাতানো তাতাব তাতাবার তাতাবি তাতাবে তাতাবেন তাতাবো তাতার তাতারা তাতারি তাতারসি তাতাল তাতালাম তাতালি তাতালে তাতালেন তাতালেম তাতালুম তাতাস তাতি তাঁতি তাতিত তাতিতাম তাতিতিস তাতিতে তাতিতেছ তাতিতেছি তাতিতেছিল তাতিতেছিলাম তাতিতেছিলি তাতিতেছিলে তাতিতেছিলেন তাতিতেছিস তাতিতেছে তাতিতেছেন তাতিতেন তাঁতিদের তাঁতিনী তাতিব তাঁতিবাজার তাতিবার তাতিবি তাতিবে তাতিবেন তাতিল তাতিলাম তাতিলি তাতিলে তাতিলেন তাতিস তাতিয়া তাতিয়াছ তাতিয়াছি তাতিয়াছিল তাতিয়াছিলাম তাতিয়াছিলি তাতিয়াছিলে তাতিয়াছিলেন তাতিয়াছিস তাতিয়াছে তাতিয়াছেন তাতিয়ে তাতিয়েছ তাতিয়েছি তাতিয়েছিল তাতিয়েছিলাম তাতিয়েছিলি তাতিয়েছিলে তাতিয়েছিলেন তাতিয়েছিলেম তাতিয়েছিলুম তাতিয়েছিস তাতিয়েছে তাতিয়েছেন তাতিয়ো তাতেন তাতো তাতছ তাতছি তাতছিল তাতছিলাম তাতছিলি তাতছিলে তাতছিলেন তাতছিলেম তাতছিলুম তাতছিস তাতছে তাতছেন তাঁতযন্ত্র তাতত তাততাম তাততিস তাততে তাততেন তাততেম তাত্ত্বিক তাত্ত্বিকভাবে তাততুম তাতুন তাৎপর্য তাৎপর্যযুক্ত তাৎপর্যপূর্ণ তাৎপর্যবাহী তাতব তাতবার তাতবি তাতবে তাতবেন তাতবো তাঁতবোনা তাঁতবস্ত্র তাতরস তাতরসি তাতল তাতলাম তাতলি তাতলে তাতলেন তাতলেম তাতলুম তাঁতশালা তাঁতশিল্প তাথই তাথৈ তাথ্যিক তাদ তাদাত্ম্য তাদিকে তাঁদিকে তাদের তাঁদের তাদেরকে তাঁদেরকে তাদেরি তাদেরে তাদর্থ্য তাদৃশ তাদৃশী তাধিন তাধিনা তাধিয়া তান তানকর্তব তানা তানাজা তানানানা তানিমা তানিয়া তানে তানছাড়া তানজানিয়া তান্তব তান্ত্রিক তান্ত্রিকপন্থা তান্ত্রিকমতে তানধরা তানপুরা তানব তানভীর তানসেন তাপ তাপু তাপক তাপক্লান্ত তাপক্লিষ্ট তাপগতিবিজ্ঞান তাপগতিবিদ্যা তাপগতীয় তাপগ্রাহক তাপা তাপান তাপানো তাপায়ল তাপিত তাপিতা তাপিনী তাপী তাপীয় তাপজনক তাপজনিত তাপজনন তাপযুক্ত তাপত্রয় তাপতড়িৎ তাপদায়ক তাপদৃষ্টি তাপদহন তাপধারণ তাপন তাপনাশক তাপনির্ণায়ক তাপনীয় তাপ্পি তাপপ্রকাশক তাপপ্রাপ্ত তাপপ্রযুক্ত তাপপূর্ণ তাপপ্রবাহ তাপপ্রয়োগ তাপবিযোজন তাপবিদ্যুৎ তাপবৃদ্ধি তাপমাত্রা তাপমান তাপর তাপশক্তি তাপশোষী তাপশূন্য তাপস তাপসী তাপসঞ্চার তাপসঞ্চালন তাপস্য তাপসতরু তাপসপ্রিয় তাপসপ্রিয়া তাপসমালা তাপহারী তাপহীন তাপহর তাপহরণ তাফাল তাফতা তাফসির তাফসীর তাঁব তাঁবু তাবকি তাবকী তাবা তাঁবা তাবাহ তাবিজ তাবিন তাবিল তাবীঈ তাবীয তাবীন তাবীল তাবেইন তাবেঈন তাবেদার তাঁবেদার তাঁবেদারি তাবৈকি তাবোল তাবৎ তাবুত তাবূত তাঁবুপানা তাবলীগ তাবড় তাম তামুক তামা তামাং তামাক তামাকু তামাকচূর্ণ তামাকজাত তামাকপাতা তামাচা তামাট তামাটিয়া তামাটে তামাতামা তামাতুলসী তামাদি তামান্না তামাম তামামি তামামী তামামশোধ তামারা তামারতার তামাশা তামাশবিন তামাসা তামিল তামিলকারী তামিলনাড়ু তামিলভাষী তামিস্র তামী তামেচা তামদারি তাম্বু তাম্বাচূড়া তাম্বুরা তাম্বূল তাম্বূলকরঙ্ক তাম্বূলকরঙ্কবাহিনী তাম্বূলখানা তাম্বূলাধার তাম্বূলি তাম্বূলিক তাম্বূলিয়া তাম্বূলপেটিকা তাম্বূলবাহক তাম্বূলবল্লি তাম্বূলরাগ তাম্বূলরস তাম্বূলসাঁপুড়া তাম্বূলসম্পুট তামর তাম্র তাম্রকার তাম্রকেশ তাম্রকূট তাম্রকুট্টক তাম্রকূটধূম তাম্রকূটসেবন তাম্রকুণ্ড তাম্রগন্ধী তাম্রগর্ভ তাম্রা তাম্রাক্ষ তাম্রাদি তাম্রাভ তাম্রাশ্ম তাম্রিক তাম্রিকা তাম্রী তাম্রচূড় তাম্রপাত্র তাম্রপট্ট তাম্রপত্র তাম্রপল্লব তাম্রপুষ্প তাম্রফলক তাম্রবর্ণ তাম্রবল্লি তাম্রলিপি তাম্রলিপ্ত তাম্রলিপ্তি তাম্রলেখ তাম্রশাসন তাম্রশিখী তামরস তাম্রসার তামলি তামুলি তামলী তামুলী তামস তামসিক তামসিকী তামসিকতা তামসী তামসযজ্ঞ তামসতপ তামসদান তামসপ্রকৃতি তামসশাস্ত্র তামড়া তামড়ি তার তাঁর তারক তারকা তারকাখচিত তারকাচিহ্ন তারকাযুক্ত তারকাপুঞ্জ তারকাবৃন্দ তারকাময় তারকাময়ী তারকারাজি তারকাসমৃদ্ধ তারকায়িত তার্কিক তার্কিকী তার্কিকতা তারকিত তারকিনী তারকী তারকেশ্বর তারকনাথ তারকব্রহ্ম তারকষ তার্ক্ষ তারকষি তার্ক্ষ্য তারঘর তারা তাঁরা তারাকেন্দ্র তারাঘেরা তারাচিত্র তারাজ তারাজু তারাজগত তারাদ্বয় তারাধিপ তারানাথ তারাপাত তারাপীঠ তারাপতি তারাপথ তারাপদ তারাপূর্ণ তারাবাজি তারাবাতি তারাবি তারাবী তারাবীহ তারাভ্র তারামৃগ তারামাছ তারামৈত্রী তারামণ্ডল তারারত্ন তারাস্তীর্ণ তারাস্তোম তারাসমৃদ্ধ তারি তাঁরি তারিক তারিকা তারিখ তারিখভিত্তিক তারিণী তারিণীচরণ তারিন্দা তারিপ তারিফ তারিয়ে তারচিত্র তারচে তারচেয়ে তারীফ তারেনারে তারছবি তার্য তারযুক্ত তারযন্ত্র তারণ তারুণ তারণি তারণী তারুণ্য তারুণ্যনির্ভর তারুণ্যসুলভ তারতো তারতম্য তারতম্যহীন তারনির্মিত তারপিন তার্পিন তার্পিনতেল তারপর তারপরিতাপ তারবাবু তারবার্তা তারবালা তারবিহীন তারবীহ তারমানে তারমধ্য তারল তারল্য তারল্যসূচক তারস্বর তারহীন তাল তালু তালই তালক তালুক তালকানা তালকাঁড়ি তালকিন তালকী তালুকদার তালুকদারি তালক্ষীর তালগাছ তালগোল তালা তালাক তালাকনামা তালাকপত্র তালাচাবি তালাফি তালাফী তালাব তালাবন্ধ তালাশ তালাশি তালাস তালাসি তালি তালিক তালিকা তালিকাকৃত তালিকানীতি তালিকাপত্র তালিকাপদ্ধতি তালিকাবদ্ধ তালিকাবদ্ধকরণ তালিকাভুক্ত তালিকাভুক্তকরণ তালিব তালিবান তালিবুলইলম তালিম তালিমি তালিমী তালিয়া তালী তালচোঁচ তালীম তালে তালেগোলে তালেনামা তালেবআলম তালেবএলম তালেবান তালেবর তালেবুলইলম তালজঙ্ঘা তালজ্ঞান তালঠোঙা তালতাল তালদিঘি তালনারকেল তালনবমী তালপুকুর তালপাটালি তালপাতা তালপট্টি তালবৃক্ষ তালবাখড়া তালবাদ্য তালবাহানা তালবেতাল তালব্য তালব্যবর্ণ তালবন তালবৃন্ত তালভঙ্গ তাল্লাক তালশাঁস তালষাঁড়া তালসাম্য তালসাড়া তালহীন তাশদীদ তাস তাস্কর্য তাসখেলা তাসা তাসাউফ তাসাওওফ তাসাওফ তাসান তাসানো তাসির তাসেরঘর তাসত্ত্বেও তাসপেটা তাসমানিয়া তাসমানীয় তাহ তাঁহ তাহা তাহাঁ তাঁহা তাহাজ্জত তাহাজ্জদ তাহাজ্জুদ তাহাতে তাঁহাতে তাহাদিগকে তাঁহাদিগকে তাহাদিগের তাঁহাদিগের তাহাদের তাঁহাদের তাহার তাঁহার তাহারা তাঁহারা তাহারি তাহারী তাহারে তাহি তাঁহি তাহিতি তাহিতীয় তাহে তাহের তাহেরি তাহেরপুর তাহজিব তাহযিবুল তাহলে তাহলো তাহশিল তাড় তাড়ু তাড়ক তাড়কা তাড়ঙ্ক তাড়া তাড়াই তাড়াইও তাড়াইত তাড়াইতাম তাড়াইতিস তাড়াইতে তাড়াইতেছ তাড়াইতেছি তাড়াইতেছিল তাড়াইতেছিলাম তাড়াইতেছিলি তাড়াইতেছিলে তাড়াইতেছিলেন তাড়াইতেছিস তাড়াইতেছে তাড়াইতেছেন তাড়াইতেন তাড়াইব তাড়াইবার তাড়াইবি তাড়াইবে তাড়াইবেন তাড়াইল তাড়াইলাম তাড়াইলি তাড়াইলে তাড়াইলেন তাড়াইয়া তাড়াইয়াছ তাড়াইয়াছি তাড়াইয়াছিল তাড়াইয়াছিলাম তাড়াইয়াছিলি তাড়াইয়াছিলে তাড়াইয়াছিলেন তাড়াইয়াছিস তাড়াইয়াছে তাড়াইয়াছেন তাড়াইয়ো তাড়াও তাড়াক তাড়াচ্ছ তাড়াচ্ছি তাড়াচ্ছিল তাড়াচ্ছিলাম তাড়াচ্ছিলি তাড়াচ্ছিলে তাড়াচ্ছিলেন তাড়াচ্ছিলেম তাড়াচ্ছিলুম তাড়াচ্ছিস তাড়াচ্ছে তাড়াচ্ছেন তাড়াত তাড়াতাম তাড়াতাড়ি তাড়াতিস তাড়াতে তাড়াতেন তাড়াতেম তাড়াতুম তাড়ান তাড়ানিয়া তাড়ানো তাড়াব তাড়াবার তাড়াবি তাড়াবে তাড়াবেন তাড়াবো তাড়ার তাড়াল তাড়ালাম তাড়ালি তাড়ালে তাড়ালেন তাড়ালেম তাড়ালুম তাড়াস তাড়াহুড়া তাড়াহুড়ো তাড়ায়া তাড়ি তাড়িখানা তাড়িত তাড়িতকণা তাড়িতালোক তাড়িতিক তাড়িতী তাড়িতচৌম্বক তাড়িতচৌম্বকত্ব তাড়িতচুম্বক তাড়িতচুম্বকীয় তাড়িতবার্তা তাড়িপত্র তাড়িয়া তাড়িয়ে তাড়িয়েছ তাড়িয়েছি তাড়িয়েছিল তাড়িয়েছিলাম তাড়িয়েছিলি তাড়িয়েছিলে তাড়িয়েছিলেন তাড়িয়েছিলেম তাড়িয়েছিলুম তাড়িয়েছিস তাড়িয়েছে তাড়িয়েছেন তাড়িয়ো তাড়ী তাড়ন তাড়না তাড়নাকারী তাড়নাপূর্বক তাড়নী তাড়নজাত তাড়নজাতধ্বনি তাড়নত্ব তাড়নধর্ম তাড়স তাড়সেরজ্বর তায় তায়খানা তায়ারীখ তায়ালা তায়েফ তায়দাদ তায়ফা তায়ব তায়ুশ তায়ুস তি তিঅজ তিউনিসিয়া তিউনিসীয় তিউড়ি তিওর তিক তিক্ত তিক্তঅভিজ্ঞতা তিক্তক তিক্ততা তিক্তধাতু তিক্তপত্র তিক্তফল তিক্তবিরক্ত তিক্তরস তিক্তসার তিক্তস্বাদ তিকরিত তিকরিতি তিখ তিখা তিখিনী তিখনি তিগুণ তিগ্ম তিগ্মকর তিগ্মগ তিগ্মাংশু তিগ্মরশ্মি তিঙ তিঙন্ত তিঙন্তপদ তিঙন্তপ্রকরণ তিঙন্তপ্রত্যয় তিজারত তিজারৎ তিজারতি তিজারতী তিজেল তিজোরি তিত তিতকুটা তিতকুটে তিতা তিতান তিতানো তিতাবাড়ি তিতাস তিতাসগ্যাস তিতি তিতিকাকা তিতিক্ষু তিতিক্ষা তিতিক্ষিত তিতিছে তিতিবিরক্ত তিতির তিতিরপাখি তিতিল তিতিয়ে তিত্তির তিতবিরক্ত তিতল তিথি তিথিকৃত্য তিথিক্ষয় তিথিডোর তিথিত্রয় তিথিনক্ষত্র তিথিপালন তিথিব্যাপী তিন তিনইঞ্চি তিনকাল তিনকোণা তিনকোনা তিনকুল তিনখানা তিনগোয়েন্দা তিনগুণ তিনঘণ্টা তিনাঞ্জলি তিনি তিনিশ তিনচাকা তিনেক তিনছেলে তিনছন্দ তিনজন তিনটাকা তিনটে তিনতাল তিনতালা তিনতালাক তিন্তিলী তিন্তিড় তিন্তিড়ি তিন্তিড়িকা তিন্তিড়ী তিন্তিড়ীক তিনতলা তিন্দু তিন্দুক তিন্দুকী তিনদান তিনদিক তিনদিন তিনপ্রকার তিনপুরুষ তিনবার তিনবোন তিনবছর তিনভাগ তিনভাবে তিনমাত্রা তিনমাথা তিনমাস তিনরকম তিনরঙ তিনরঙা তিনলক্ষ তিনলক্ষাধিক তিনলাফ তিনশ তিনশো তিনশত তিনশত্রু তিনসংখ্যক তিনসঙ্গী তিনসত্য তিনসত্যি তিনসন্ধ্যা তিপ্পান্ন তিব্বত তিব্বতি তিব্বতীয় তিব্বতদেশ তিমি তিমিঙ্গিল তিমিত তিমিমাছ তিমির তিমিরান্তিক তিমিরাবগুণ্ঠিত তিমিরারি তিমিরনাশক তিমিরপুঞ্জ তিমিরবিদারী তিমিরবিনাশন তিমিরবরণ তিমিরময় তিমিররাত্রি তিমিররিপু তিমিররোগ তির তিরা তিরানব্বই তিরানব্বুই তিরাশি তিরাশী তিরি তিরিক্কি তিরিক্ষি তিরিক্ষে তিরিশ তিরিশেক তিরিষা তিরী তিরেস তিরোধান তিরোভাব তিরোভূত তিরোভূতা তিরোহিত তিরোহিতা তিরছ তিরছা তিরজুত তির্যক তির্যকযোনি তির্যকপাতন তির্যকপ্রক্ষেপণ তিরপিত তিরপল তিরবিরে তিরবরগা তিরশ্চী তিরস্কার তিরস্কারকারী তিরস্কারিণী তিরস্কারপূর্ণ তিরস্কারপূর্বক তিরস্কৃত তিরস্কৃতা তিরস্করিণী তিরস্ক্রিয়া তিরস্করণী তিল তিলক তিলককাটা তিলকা তিলকাঞ্চন তিলকাঞ্চুনে তিলকী তিলকচর্চা তিলকছাপা তিলকছাবা তিলকট তিলকুটা তিলকুটো তিলকধারী তিলকপরা তিলকমাটি তিলকশ্যাম তিলকসেবা তিলাওত তিলাওয়াত তিলাখাজা তিলাঞ্জলি তিলাঞ্জলী তিলার্ধ তিলার্ধেক তিলি তিলিছমাত তিলিসমাত তিলিয়া তিলী তিলচিহ্ন তিলচিহ্নযুক্ত তিলচূর্ণ তিলে তিলেক তিলেখাজা তিলেখচ্চর তিলেতিলে তিলোত্তমা তিলোদক তিলতুলসী তিলধারণ তিলপাত তিলমাত্র তিলমিশ্রিত তিলসাগরি তিলুয়া তিষ্য তিষ্যা তিষ্ঠ তিষ্ঠক তিষ্ঠা তিষ্ঠাই তিষ্ঠাইও তিষ্ঠাইত তিষ্ঠাইতাম তিষ্ঠাইতিস তিষ্ঠাইতে তিষ্ঠাইতেছ তিষ্ঠাইতেছি তিষ্ঠাইতেছিল তিষ্ঠাইতেছিলাম তিষ্ঠাইতেছিলি তিষ্ঠাইতেছিলে তিষ্ঠাইতেছিলেন তিষ্ঠাইতেছিস তিষ্ঠাইতেছে তিষ্ঠাইতেছেন তিষ্ঠাইতেন তিষ্ঠাইব তিষ্ঠাইবার তিষ্ঠাইবি তিষ্ঠাইবে তিষ্ঠাইবেন তিষ্ঠাইল তিষ্ঠাইলাম তিষ্ঠাইলি তিষ্ঠাইলে তিষ্ঠাইলেন তিষ্ঠাইয়া তিষ্ঠাইয়াছ তিষ্ঠাইয়াছি তিষ্ঠাইয়াছিল তিষ্ঠাইয়াছিলাম তিষ্ঠাইয়াছিলি তিষ্ঠাইয়াছিলে তিষ্ঠাইয়াছিলেন তিষ্ঠাইয়াছিস তিষ্ঠাইয়াছে তিষ্ঠাইয়াছেন তিষ্ঠাইয়ো তিষ্ঠাক তিষ্ঠান তিষ্ঠানো তিষ্ঠাস তিষ্ঠচ্ছ তিষ্ঠচ্ছি তিষ্ঠচ্ছিল তিষ্ঠচ্ছিলাম তিষ্ঠচ্ছিলি তিষ্ঠচ্ছিলে তিষ্ঠচ্ছিলেন তিষ্ঠচ্ছিলেম তিষ্ঠচ্ছিলুম তিষ্ঠচ্ছিস তিষ্ঠচ্ছে তিষ্ঠচ্ছেন তিষ্ঠে তিষ্ঠেছ তিষ্ঠেছি তিষ্ঠেছিল তিষ্ঠেছিলাম তিষ্ঠেছিলি তিষ্ঠেছিলে তিষ্ঠেছিলেন তিষ্ঠেছিলেম তিষ্ঠেছিলুম তিষ্ঠেছিস তিষ্ঠেছে তিষ্ঠেছেন তিষ্ঠো তিষ্ঠোনো তিষ্ঠোবার তিষ্ঠত তিষ্ঠতাম তিষ্ঠতিস তিষ্ঠতে তিষ্ঠুতে তিষ্ঠতেন তিষ্ঠতেম তিষ্ঠতুম তিষ্ঠন তিষ্ঠনো তিষ্ঠব তিষ্ঠবি তিষ্ঠবে তিষ্ঠবেন তিষ্ঠবো তিষ্ঠল তিষ্ঠলাম তিষ্ঠলি তিষ্ঠলে তিষ্ঠলেন তিষ্ঠলেম তিষ্ঠলুম তিষ্ঠস তিসি তিসী তিস্তা তিসরি তিহাই তিহারি তিহারী তিহরি তিহড়ি তিড়িং তিড়িংতিড়িং তিড়িংবিড়িং তিড়িক তিড়বিড় তিয়াত্তর তিয়ারী তিয়াষ তিয়াস তিয়াসা তিয়জ তীক্ষ্ণ তীক্ষ্ণকণ্টক তীক্ষ্ণকন্দ তীক্ষ্ণকর্মা তীক্ষ্ণগন্ধ তীক্ষ্ণগন্ধা তীক্ষ্ণা তীক্ষ্ণাগ্র তীক্ষ্ণায়স তীক্ষ্ণতা তীক্ষ্ণত্ব তীক্ষ্ণদংষ্ট্র তীক্ষ্ণদন্ত তীক্ষ্ণদৃষ্টি তীক্ষ্ণধার তীক্ষ্ণপুষ্প তীক্ষ্ণবুদ্ধি তীক্ষ্ণলৌহ তীক্ষ্ণস্বর তীখ তীখনি তুচ্ছ তুচ্ছাতিতুচ্ছ তুচ্ছার্থক তুচ্ছার্থে তুচ্ছজ্ঞান তুচ্ছতা তুচ্ছতাচ্ছিল্য তুচ্ছতাচ্ছল্য তুচ্ছব্যক্তি তুচ্ছরূপে তচনচ তীবর তীব্র তীব্রগম্ভীর তীব্রতা তীব্রতর তীব্রভাবে তীব্রমধ্যম তীর তীর্ণ তীর্ণা তীর্ণযাত্রা তীর্ণযাত্রী তীর্ণপ্রতিজ্ঞ তীর্ণসলিল তীর্থ তীর্থংকর তীর্থকেন্দ্র তীর্থকৃত্য তীর্থক্ষেত্র তীর্থঙ্কর তীর্থেরকাক তীর্থেরপাণ্ডা তীর্থেরবায়স তীর্থোদক তীর্থজল তীর্থযাত্রা তীর্থযাত্রী তীর্থদর্শন তীর্থপরিক্রমা তীর্থবাস তীর্থবাসী তীর্থভূমি তীর্থভ্রমণ তীর্থরাজ তীর্থরূপ তীর্থস্থান তীর্থস্থল তীরদেশ তীরন্দাজ তীরবর্তী তীরভুক্তি তীরভূমি তীরহারা তীরহুত তীলা তীয়র তে তেঁ তেআঁটিয়া তেই তেঁই তেইশ তেইশা তেইশে তেইশতম তেউ তেঁউ তেউটে তেউনি তেউড় তেউড়ি তেএঁ তেঁএ তেএঁটে তেও তেওর তেওরা তেওড় তেওড়া তেওড়ান তেওড়ানো তেওয়ারি তেকাটা তেকাঁটা তেকাঠা তেকাঠি তেকোনা তেখাঁজ তেগ তেগারি তো তেচোখা তেচোখো তৌফিক তেজ তেজঃকর তেজঃপুঞ্জ তেজঃপূর্ণ তেজই তেজকুনি তেজগাঁ তেজগাঁও তেজা তেজাব তেজারত তেজারতি তেজাল তেজালো তেজি তেজিছেলে তেজিযোদ্ধা তেজিমন্দি তেজী তেজীওয়ালা তেজীয়ান তেজোগর্ভ তেজোদৃপ্ত তেজোবান তেজোমূর্তি তেজোময় তেজোময়ী তেজোরূপ তেজোহীন তেজযুক্ত তেজন তেজপাত তেজপাতা তেজপুঞ্জ তেজপত্র তেজব তেজবেত তেজবর তেজবরে তেজময় তেজরতি তেজলু তেজলুঁ তেজলি তেজস্কর তেজস্ক্রিয় তেজস্ক্রিয়গ্যাস তেজস্ক্রিয়া তেজস্ক্রিয়তা তেজস্বান তেজস্বিনী তেজস্বী তেজসম্পন্ন তেঞি তেঠেঙ্গে তেঠেঙে তেৎকে তেতাম্বা তেতারা তেতালা তেতাল্লিশ তেতাস তেতে তেতেছ তেতেছি তেতেছিল তেতেছিলাম তেতেছিলি তেতেছিলে তেতেছিলেন তেতেছিলেম তেতেছিলুম তেতেছিস তেতেছে তেতেছেন তেতেপুড়ে তেতো তেঁতো তেতোবিরক্ত তেত্রিশ তেত্রিশতম তেঁতুল তেঁতুলগাছ তেতুলগোলা তেতলা তেঁতুলেরটক তেঁতুলজল তেঁতুলঝোড়া তেঁতুলবিছা তেথর তেথরি তেঁদড় তেঁদড়াম তেঁদড়ামি তেঁদড়ামো তেন তেনা তেনাদের তেনার তেনারা তেপান্তর তেপালিতা তেপালতে তেপায়া তেপেচি তেপেচী তেপথ তেপ্পান্ন তেফলা তেভাগা তেম তেমাথা তেমেটে তেমোহানা তেমোহনা তেমত তেমতি তেমন তেমনি তেমনিভাবে তেমনে তেমনতর তেমনতরো তের তেরঙ্গা তেরা তেরাত্তির তেরাত্রি তেরি তেরিজ তেরিমেরি তেরিয়া তেরিয়ান তেরচা তেরচাভাবে তেরে তেরেট তেরেন্তা তেরো তেরোবার তেরছ তেরছা তেরছাভাবে তেরপাল তেরপল তেরস্পর্শ তেল তেলকাজল তেলকাজলা তেলকাপড় তেলকামড়া তেলকামড়ি তেলকালি তেলকুচকুচে তেলকুপ তেলকল তেলঘি তেলা তেলাই তেলাওয়াত তেলাকুচা তেলাকুচো তেলাচ্ছ তেলান তেলানা তেলানি তেলানো তেলাপিয়া তেলাপোকা তেলায়ত তেলি তেলিঙ্গানা তেলিনা তেলী তেলচুকচুকে তেলচিটে তেলচোরা তেলচটচটে তেলেগু তেলেগুভাষা তেলেঙ্গা তেলেঙ্গানা তেলেঙ্গি তেলেছমাত তেলেছমাতি তেলেনা তেলেনাভাঁজা তেলেনি তেলেবেগুনে তেলেভাজা তেলেসমাত তেলেসমাতি তেলো তেলযুক্ত তেলতামাক তেলতেলা তেলতেলে তেলধুতি তেলপানা তেলবাহী তেলবীজ তেলবর্জিত তেলমশলা তেলরঙ তেলসমৃদ্ধ তেলহারা তেলহীন তেশিরা তেশন্নি তেষ্টা তেষট্টি তেসাণে তেসানে তেঁসি তেসনি তেসনী তেসরা তেহাই তেহাতি তেহাত্তর তেহারা তেহেন তেহজিব তেহ্ন তেহ্নমতে তেহরান তেড় তেড়া তেড়ি তেড়িকাটা তেড়িবাগান তেড়িবেড়ি তেড়িমেড়ি তেড়চা তেড়ে তেড়েফুঁড়ে তেড়েমেরে তেড়েমেড়ে তেড়েহেঁকে তেড়ছ তেড়ছা তেয়াগ তেয়াগিব তৈ তৈঁ তৈক্ষ্ণ্য তৈখন তৈছে তৈছন তৈজস তৈজসপাত্র তৈজসপত্তর তৈজসপত্র তৈত্তির তৈত্তিরীয় তৈত্তিরীয়ক তৈনাত তৈনিতি তৈরি তৈরিকারী তৈরিকৃত তৈরিকরণ তৈল তৈলকার তৈলকিট্ট তৈলকূপ তৈলকল্ক তৈলকল্কজ তৈলঙ্গ তৈলঙ্গা তৈলঙ্গদেশ তৈলঙ্গদেশীয় তৈলাক্ত তৈলাদি তৈলাদিযুক্ত তৈলাধার তৈলিক তৈলিকগৃহ তৈলিনী তৈলী তৈলচক্র তৈলচিক্কণ তৈলচিত্র তৈলযুক্ত তৈলযন্ত্র তৈলঢালা তৈলদান তৈলদ্রোণী তৈলপ তৈলপক তৈলপক্ব তৈলপা তৈলপায়িকা তৈলবীজ তৈলবট তৈলবৎ তৈলমর্দন তৈলমর্দনকারী তৈললিপ্ত তৈললেপন তৈললেপনকারী তৈলশোধনাগার তৈলসেক তৈলস্ফটিক তৈলহীন তৈসে তৈসন তৈয়াম্মম তৈয়াম্মুম তৈয়ার তৈয়ারি তৈয়ব তৈয়বা তৈয়ম্মুম তো তোঁ তোই তোঁই তোক তোকানিমোকানি তোকে তোকদড়ি তোকমা তোকমারি তোখড় তোগরা তোজী তোজন তোজনা তোঁঞে তোটক তোতা তোঁতা তোতাপাখি তোতাবৃত্তি তোতারাম তোতে তোতো তোতলা তোতলান তোতলানো তোতলাম তোৎলাম তোতলামি তোৎলামি তোতলামো তোৎলামো তোদের তোপ তোপখানা তোপান তোপান্দাজ তোপচি তোপচিনি তোপচনি তোপদাগা তোপধ্বনি তোপশালা তোপসে তোফা তোফাঙ্গ তোবা তোবারক তোবড়া তোবড়াক তোবড়াচ্ছ তোবড়াচ্ছি তোবড়াচ্ছিল তোবড়াচ্ছিলাম তোবড়াচ্ছিলি তোবড়াচ্ছিলে তোবড়াচ্ছিলেন তোবড়াচ্ছিলেম তোবড়াচ্ছিলুম তোবড়াচ্ছিস তোবড়াচ্ছে তোবড়াচ্ছেন তোবড়াত তোবড়াতাম তোবড়াতিস তোবড়াতে তোবড়াতেন তোবড়াতেম তোবড়াতুবড়ি তোবড়াতুম তোবড়ান তোবড়ানো তোবড়াব তোবড়াবার তোবড়াবি তোবড়াবে তোবড়াবেন তোবড়াবো তোবড়াল তোবড়ালাম তোবড়ালি তোবড়ালে তোবড়ালেন তোবড়ালেম তোবড়ালুম তোবড়াস তোম তোমকো তোমগো তোমা তোমাকে তোমাতে তোমাদিকে তোমাদিগ তোমাদের তোমামাঝে তোমার তোমারি তোমারে তোমর তোমরা তোর তোরকস তোরঙ তোরঙ্গ তোরা তোরজোড় তোরণ তোরণদ্বার তোরতরিবত তোররা তোল তোলক তোলা তোলাউনান তোলাক তোলাকাপড় তোলাঘর তোলাচ্ছ তোলাচ্ছি তোলাচ্ছিল তোলাচ্ছিলাম তোলাচ্ছিলি তোলাচ্ছিলে তোলাচ্ছিলেন তোলাচ্ছিলেম তোলাচ্ছিলুম তোলাচ্ছিস তোলাচ্ছে তোলাচ্ছেন তোলাজামা তোলাত তোলাতাম তোলাতিস তোলাতে তোলাতেন তোলাতেম তোলাতুম তোলান তোলানো তোলাফুল তোলাব তোলাবার তোলাবি তোলাবে তোলাবেন তোলাবো তোলাল তোলালাম তোলালি তোলালে তোলালেন তোলালেম তোলালুম তোলাস তোলিত তোলে তোলেন তোলেনি তোলেননি তোল্য তোলন তোলপাড় তোলবার তোলবেলে তোলবোলে তোলবল তোশক তোশা তোশাখানা তোশদান তোষ তোষক তোষা তোষাখানা তোষামোদ তোষামোদকারী তোষামোদি তোষামোদপূর্ণ তোষামুদে তোষিণী তোষিত তোষণ তোষণীয় তোষণযোগ্য তোসা তোসাখানা তোসদান তোহএ তোহা তোহার তোঁহার তোহারা তোঁহারা তোহারি তোঁহারি তোহারে তোহে তোহোবিল তোহোর তোহোরি তোহোরে তোহৌরি তোহফা তোহ্ম তোহ্মাএ তোহ্মাক তোহ্মাকে তোহ্মাখো তোহ্মাত তোহ্মাতে তোহ্মাতেঁ তোহ্মাথো তোহ্মার তোহ্মারা তোহ্মারে তোহ্মাহো তোহ্মে তোহমৎ তোড় তোড়া তোড়ান তোড়ানি তোড়ানো তোড়াবাঁধা তোড়ি তোড়ী তোড়ে তোড়জোড় তোড়ন তোয় তোয়া তোয়াক্কা তোয়াজ তোয়ান তোয়ানো তোয়ালিয়া তোয়ালে তোয়দ তোয়দাগম তোয়ধি তোয়ধর তোয়নিধি তোয়রাশি তছু তৌজি তছনীফ তছনছ তৌফিক তৌফীক তৌবা তছবি তছবিহ তছবী তৌরাত তৌর্য তৌর্যত্রিক তছরুপ তছরুফ তৌল তৌলকরণ তৌলা তৌলান তৌলানো তৌলিক তৌলিয়া তৌলযন্ত্র তৌলন তৌলনো তৌহিদ তৌহিদবাদ তৌহীদ তৌহীদবাদ তুজুক তজকিরা তজ্জাত তজ্জনিত তজ্জন্য তজদি তজদিগ তজবিজ তজবীয তজল্লা তজল্লি তজল্লী তুঝ তুঝে তুঞি তঞ্চ তঞ্চক তঞ্চকতা তঞ্চিত তঞ্চন তঞ্চনকারী তঞ্চনরোধক তঞ্জেব তট ত্যক্ত ত্যক্তজীবিত ত্যক্তবিরক্ত ত্যক্তভূষণ ত্যক্তলজ্জ ত্যক্তসর্বস্ব তটাক তটাগ ত্যাগ ত্যাগকারী ত্যাগী ত্যাগযোগ্য ত্যাগপত্র ত্যাগপূর্বক ত্যাগরূপ ত্যাগসুখ ত্যাগস্বীকার তটাঘাত ত্যাজ ত্যাজ্য ত্যাজ্যপুত্র ত্যাঁদড় ত্যাঁদড়াম ত্যাঁদড়ামি ত্যাঁদড়ামো ত্যানা তটান্ত ত্যান্দোড় তটারূঢ় ত্যাল ত্যালাই ত্যাড়া তটিনী তটী ত্যজা ত্যজ্যমান ত্যজন তটতল তযদিক তটপথ তটভাগ তটভূমি তটরেখা তটস্থ তটস্থা তটস্থলক্ষণ তটস্থশক্তি তুড্ডক তুড্ডন তূণ তৃণ তূণক তৃণকান্তার তূণকি তূণকী তৃণকুটি তৃণকুটির তৃণক্ষেত্র তৃণকুসুম তৃণগুচ্ছ তৃণাঙ্কুর তৃণাদ তৃণাদি তৃণাসন তূণী তূণীক তৃণজীবী তৃণজ্ঞান তৃণজলৌকা তুণ্ড তণ্ডক তণ্ডা তুণ্ডি তুণ্ডিকা তুণ্ডিকেরী তুণ্ডিভ তুণ্ডিল তণ্ডী তণ্ডুল তণ্ডুলাম্বু তণ্ডুলীয় তৃণদ্রুম তৃণধান্য তৃণনির্মিত তৃণবৎ তৃণভুক তৃণভোজী তৃণভূমি তৃণমূল তৃণলতা তৃণলতাদি তৃণশয্যা তৃণসদৃশ তত তুত তুতু তুঁত ততঃ ততঃকিম তূতক ততকাল তৎকাল তৎকালিক তৎকালীন তৎকালোচিত তৎকালধী তৎক্ষেত্র ততক্ষণ তৎক্ষণাৎ তুঁতগাছ তুতান তুতানো ততি তুতি তুতিয়া তুঁতিয়া তুতী তূতী তৃতীয় তৃতীয়ক তৃতীয়া তৃতীয়াংশ তৃতীয়জাত তৃতীয়ত তৃতীয়দিন তৃতীয়পক্ষ তৃতীয়প্রকৃতি তৃতীয়পুরুষ তৃতীয়বার তৃতীয়বিশ্ব তুতে তুঁতে ততেক ততো ততোক্ষণ ততোটুক ততোধিক তৎজন্য ততটুক ততটুকু ততটুকুন তত্ত্ব তত্ত্বকোষ তত্ত্বকথা তত্ত্বগত তত্ত্বানুসন্ধান তত্ত্বানুসন্ধানী তত্ত্বাবোধ তত্ত্বাবধান তত্ত্বাবধারক তত্ত্বাবধারণ তত্ত্বাবধায়ক তত্ত্বাবধায়ন তত্ত্বাভিজ্ঞ তত্ত্বার্থ তত্ত্বালোচনা তত্ত্বচিন্তা তত্ত্বীয় তত্ত্বীয়গত তত্ত্বীয়গতভাবে তত্ত্বীয়ভাবে তত্ত্বজিজ্ঞাসু তত্ত্বজিজ্ঞাসা তত্ত্বজ্ঞ তত্ত্বজ্ঞান তত্ত্বজ্ঞানী তত্ত্বজ্ঞানলাভ তত্ত্বজ্ঞানসম্পন্ন তত্ত্বজ্ঞানহীন তত্ত্বতঃ তত্ত্বতাবাশ তত্ত্বতালাশ তত্ত্বতথ্য তত্ত্বতল্লাস তত্ত্বদর্শিতা তত্ত্বদর্শী তত্ত্বদর্শন তত্ত্বনির্ণয় তত্ত্বনিরূপণ তত্ত্বপ্রদান তত্ত্ববিৎ তত্ত্ববিদ তত্ত্বমসি তত্তুল্য তুত্থ তুত্থক তুত্থাঞ্জন ততদিন তুতন তুতপোকা তুঁতপোকা তৎপর ততপ্রকার তৎপরায়ণ তৎপরায়ণতা তৎপরিমাণ তৎপ্রণীত তৎপরতা তৎপুরুষ ততবার ততভাবে তত্র ততরকম তত্রাচ তত্রাপি তুতুরী তত্রত্য তত্রস্থ তৎসংক্রান্ত তৎসংলগ্ন তৎসংশ্লিষ্ট তৎসত্ত্ব ততস্থান তৎস্থান তৎস্থানীয় তৎস্থানীয়া ততস্থল তৎস্থল তৎস্থলাভিষিক্ত ততসদৃশ তৎসদৃশ তৎসন্নিকটস্থ তৎসন্নিহিত তৎস্বরূপ তৎস্বরূপতা তৎসম তৎসমুদয় তৎসম্পর্ক তৎসম্পর্কিত তৎসম্বন্ধ তৎসহ ততহি ততহিঁ তথা তথাকার তথাকথিত তথাগত তথাগতি তথাচ তথাপি তথাবিধ তথাভূত তথাস্তু তথি তথৈব তথৈবচ তথ্য তথ্যকেন্দ্র তথ্যকেন্দ্রিক তথ্যকোষ তথ্যগুচ্ছ তথ্যগত তথ্যাদি তথ্যানুযায়ী তথ্যানুসারে তথ্যানুসন্ধান তথ্যানুসন্ধানী তথ্যাভিজ্ঞ তথ্যচিত্র তথ্যছক তথ্যজ্ঞান তথ্যজ্ঞাপক তথ্যনির্দেশ তথ্যপঞ্জি তথ্যপ্রযুক্তি তথ্যপূর্ণ তথ্যপ্রধান তথ্যপ্রবাহ তথ্যপ্রমাণ তথ্যবাদী তথ্যবাহী তথ্যবিজ্ঞান তথ্যবচন তথ্যব্যবস্থা তথ্যবহুল তথ্যভাণ্ডার তথ্যভাষী তথ্যভিত্তিক তথ্যমতে তথ্যমন্ত্রী তথ্যমন্ত্রণালয় তথ্যমূলক তথ্যরাশি তথ্যসংগ্রহ তথ্যসংবলিত তথ্যসূত্র তথ্যসমৃদ্ধ তথ্যসরবরাহ তথ্যসরবরাহক তদ তদগত তদগতচিত্ত তদা তদাকার তদাকৃতি তদাত্মা তদানীং তদানীংকাল তদানীন্তন তদানুসারে তদারক তদারককারী তদারকি তদিক তদীয় তদেক তদতিরিক্ত তদ্দিন তদ্দণ্ডে তদ্দ্বারা তদ্দরুন তদ্দর্শনে তদ্ধিত তদ্ধিতপ্রত্যয় তদ্ধেতু তদনুকরণ তদনুগ তদনুগামী তদন্য তদনুযায়ী তদন্ত তদন্তকারী তদন্ততদারক তদনন্তর তদনুবর্তী তদনুরূপ তদনুসারী তদনুসারে তদুপরি তদুপলক্ষে তদ্বংশীয় তদ্বিধ তদবির তদ্বির তদ্বিষয়ক তদ্ব্যতিরিক্ত তদ্ব্যতিরেকে তদ্ব্যতীত তদ্বৎ তদবধি তদবস্থ তদবস্থা তদ্ভাব তদ্ভাবাপন্ন তদ্ভাবভাবিত তদ্ভিন্ন তদ্ভব তদ্ভবশব্দ তদর্থ তদর্থক তদূর্ধ্ব তদ্রূপ তদর্পণ তুঁদুলে তদসংশ্লিষ্ট তদস্থলে তন তনু তনূ তুন তূন তনকা তনুকায়া তনখা তনাদি তনিমা তনুচ্ছদ তনূচ্ছদ তনুজ তনুজা তনজিম তনজিহি তন্তু তন্তুকীট তনুতা তন্তুজ তন্তুজীবী তনুত্যাগ তন্তুনাভ তন্তুনির্মিত তন্তুপর্ব তন্তুবায় তন্তুবিদ্যা তনুত্র তন্ত্র তন্ত্রকাষ্ঠ তনুত্রাণ তন্ত্রাদি তন্ত্রাবাপ তন্ত্রী তন্ত্রীবাদ্য তন্ত্রোক্ত তন্ত্রতা তন্ত্রধারক তন্ত্রধারী তন্ত্রধর্ম তন্ত্রবাপ তন্ত্রবায় তন্ত্রবিদ্যা তন্ত্রবল তন্ত্রমতে তন্ত্রমন্ত্র তন্ত্রশাস্ত্র তন্ত্রশাস্ত্রজ্ঞ তন্ত্রসংস্থিতি তন্ত্রসাধনা তন্তুশাল তন্তুশালা তন্তুশিল্প তন্তুসার তুন্দ তুন্দি তুন্দিভ তুন্দিল তনুদেহ তনূদ্ভব তনূদ্ভবা তন্দুর তন্দ্রা তুন্দ্রা তন্দ্রাচ্ছন্ন তন্দ্রাবিষ্ট তন্দ্রাবেশ তন্দ্রাভাব তন্দ্রালু তন্দ্রাহীন তন্দুরি তন্দ্রিত তন্দুররুটি তন্দুরস্ত তন্দুরস্তি তন্ন তুন্ন তন্নিবন্ধন তন্নিমিত্ত তন্নিমিত্ততা তন্নতন্ন তনূনপাৎ তুন্নবায় তনুপ্রাণ তন্বঙ্গী তন্বী তন্মাত্র তনুমধ্য তনুমধ্যা তন্মন তন্মনা তন্মনস্ক তৃনমূল তন্ময় তন্ময়তা তন্ময়ত্ব তনুরুচি তনুরুহ তনুল তনুলীলা তনুশ্রী তনয় তনয়া তনুয়া তপ তপঃক্লিষ্ট তপঃক্লেশ তপঃপ্রভাব তপাত্যয় তপাস তপোধন তপোনিধি তপোবন তপোবল তপোভঙ্গ তপোমূর্তি তপোময় তপোলোক তপ্ত তৃপ্ত তপ্তকাঞ্চন তপ্তকাঞ্চনবর্ণ তপ্তকাঞ্চনবর্ণা তপ্তকাঞ্চসন্নিভ তপ্তকণ্ঠ তৃপ্তা তপ্তাপোষ তৃপ্তি তৃপ্তিকারক তৃপ্তিকর তৃপ্তিজনক তৃপ্তিদায়ক তৃপ্তিবিধান তৃপ্তিসাধক তৃপ্তিসাধন তৃপ্তিহীন তপতী তপ্তপোষ তপন তপনীয় তপনতাপন তপনতনয় তপনতনয়া তপনতপ্ত তপশ্চারণ তপশ্চর্যা তপশীল তপসি তপসিল তপসী তপসে তপসেমাছ তপস্যা তপস্যাকারী তপস্যাকাল তপস্যারত তপস্বিনী তপস্বী তুপড়ি তফাত তফাৎ তুফান তুফানমেল তফছির তফছীর তফরা তফশিল তফসির তফসিল তফসিলি তফসীল তব তবু ত্ব তবক ত্বক তবকি তবকী ত্বকীয় তবকধারী তুবা ত্বাচ ত্বাদৃক তবাদি ত্বাদৃশ তবাহি তবিব তবিল তবিলদার তবিলদারি ত্বিষ ত্বিষা ত্বিষাম্পতি তবিয়ত তবিয়ৎ তবীব তবীয়ত তবে তবেঁ তবেঁস তবেসি তবেঁসি ত্বদীয় ত্বদ্বিধ তবধি তবধরি তবন তুবর ত্বর তবর্গ ত্বরা ত্বরাযুক্ত ত্বরান্বিত ত্বরান্বিতকরণ তুবরিকা ত্বরিত ত্বরিতগতি ত্বরিতগমন ত্বরণ ত্বরণসহগ ত্বরমাণ তবররক তবররুক তবল তবলা তবলাগুরু তবলাবাদক তবলাবাদন তবলাবাঁয়া তবলিগ তবলীগ তবলচি তবলচী তবলদার তবলবাঁয়া তবল্লক ত্বষ্টৃ ত্বষ্টা তবহু তবহুঁ তবহি তবহিঁ তুবড় তুবড়ই তুবড়ক তুবড়া তুবড়াই তুবড়াইও তুবড়াইত তুবড়াইতাম তুবড়াইতিস তুবড়াইতে তুবড়াইতেছ তুবড়াইতেছি তুবড়াইতেছিল তুবড়াইতেছিলাম তুবড়াইতেছিলি তুবড়াইতেছিলে তুবড়াইতেছিলেন তুবড়াইতেছিস তুবড়াইতেছে তুবড়াইতেছেন তুবড়াইতেন তুবড়াইব তুবড়াইবার তুবড়াইবি তুবড়াইবে তুবড়াইবেন তুবড়াইল তুবড়াইলাম তুবড়াইলি তুবড়াইলে তুবড়াইলেন তুবড়াইয়া তুবড়াইয়াছ তুবড়াইয়াছি তুবড়াইয়াছিল তুবড়াইয়াছিলাম তুবড়াইয়াছিলি তুবড়াইয়াছিলে তুবড়াইয়াছিলেন তুবড়াইয়াছিস তুবড়াইয়াছে তুবড়াইয়াছেন তুবড়াইয়ো তুবড়াক তুবড়ান তুবড়ানো তুবড়াস তুবড়ি তুবড়িয়ে তুবড়িয়েছ তুবড়িয়েছি তুবড়িয়েছিল তুবড়িয়েছিলাম তুবড়িয়েছিলি তুবড়িয়েছিলে তুবড়িয়েছিলেন তুবড়িয়েছিলেম তুবড়িয়েছিলুম তুবড়িয়েছিস তুবড়িয়েছে তুবড়িয়েছেন তুবড়িয়ো তুবড়চ্ছ তুবড়চ্ছি তুবড়চ্ছিল তুবড়চ্ছিলাম তুবড়চ্ছিলি তুবড়চ্ছিলে তুবড়চ্ছিলেন তুবড়চ্ছিলেম তুবড়চ্ছিলুম তুবড়চ্ছিস তুবড়চ্ছে তুবড়চ্ছেন তুবড়ে তুবড়েছ তুবড়েছি তুবড়েছিল তুবড়েছিলাম তুবড়েছিলি তুবড়েছিলে তুবড়েছিলেন তুবড়েছিলেম তুবড়েছিলুম তুবড়েছিস তুবড়েছে তুবড়েছেন তুবড়ো তুবড়োবার তুবড়ত তুবড়তাম তুবড়তিস তুবড়তে তুবড়তেন তুবড়তেম তুবড়তুম তুবড়ন তুবড়নো তুবড়ব তুবড়বি তুবড়বে তুবড়বেন তুবড়বো তুবড়ল তুবড়লাম তুবড়লি তুবড়লে তুবড়লেন তুবড়লেম তুবড়লুম তুবড়স তভোঁ তঁভোহো তম তমু তুম তুমকি তমগা তমঘা তমা তমাদি তমাম তমামি তুমার তুমারা তুমারনবিস তুমারনবীস তমাল তমালক তমালিকা তমালিনী তমালী তমালবন তমালবহুল তমি তুমি তমিজ তমিস্র তমিস্রা তমিস্রপক্ষ তমী তমীয তমীনাথ তুমে তমোগুণ তমোঘ্ন তমোজ্যোতি তমোযুক্ত তমোনাশ তমোনাশক তমোভাব তমোভাবপূর্ণ তমোমুক্ত তমোমণি তমোময় তমোহা তমোহর তমুত তমতথ্য তুমতুমি তমদ্দুন ত্মন তমপর্ব তম্বু তুম্ব তুম্বক তুম্বকি তুম্বুকী তুম্বা তুম্বাকৃতি তম্বি তুম্বি তুম্বিকা তম্বিতাম্বি তম্বিতম্বা তম্বিহ তম্বী তুম্বী তুম্বীফল তমবীহ তম্বুর তুম্বুরু তম্বুরা তম্বুরি তুম্ভ তুমর তুমুল তুমুলঝগড়া তুমুলযুদ্ধ তমস তমসুক তমসা তমসাচ্ছন্ন তমসাবৃত তমসাময় তমস্ত্রস্নু তমস্বিনী তমস্বী তুমহারা তুমহারে তুমহে তুমড়ি তর তরু তুর তূর ত্র তরই তরুই তরইতে তরওয়াল তরক তর্ক তর্কু তুরক তুরুক তুরূক তুর্ক তর্কক তর্ককারী তরক্কি তরক্কী তরকা তর্কা তর্কাতর্কি তুরকান তুর্কান তর্কানুষ্ঠান তর্কাভাস তরকারি তরকারী তর্কালঙ্কার তুরকি তুর্কি তুর্কিজাত তর্কিত তর্কিতা তুরকিনাচ তুর্কিনাচ তুরকিনাচন তুর্কিনাচন তরকিব তুরকিস্তান তুর্কিস্তান তরকচ তর্কী তুরকী তুর্কী তরকীব তুর্কীভাষী তুর্কীস্তান তুরকীয় তুর্কীয় তর্কে তর্কেতর্কে তরুকোটর তর্কজাল তর্কযুদ্ধ তর্কতীর্থ তর্কতর্কি তর্কদোষ তর্কনিরসন তর্কপটু তর্কপ্রিয় তর্কপ্রধান তর্কবাগীশ তর্কবিজ্ঞান তর্কবিতর্ক তর্কবিদ্যা তুর্কমেন তুর্কমেনিস্তান তুর্কমেনীয় তর্করত তর্করত্ন তরুকুলেশ্বর তরকশ তর্কশাস্ত্র তরক্ষু তর্ক্ষু তুরকসওয়ার তুরুকসওয়ার তুর্কসওয়ার তুরগ তুরগী তরঘাট তরঙ্গ তুরঙ্গ তরঙ্গা তরঙ্গাকুল তরঙ্গাভিঘাত তরঙ্গাহত তরঙ্গায়িত তরঙ্গিণী তরঙ্গিত তরঙ্গিম তুরঙ্গী তরঙ্গোচ্ছ্বাস তরঙ্গতত্ত্ব তরঙ্গদৈর্ঘ্য তরঙ্গধর্ম তরঙ্গধর্মী তরঙ্গপূর্ণ তরঙ্গবিক্ষুব্ধ তরঙ্গবিভঙ্গ তরঙ্গভঙ্গ তুরঙ্গম তরঙ্গমালা তুরঙ্গমী তরঙ্গময় তরঙ্গলেখা তরঙ্গসঙ্কুল তরঙ্গহীন তরা তুরা তরাই তুরাগ তরাজ তরাজু তরাজূ ত্রাণ ত্রাণকারিণী ত্রাণকারী ত্রাণকার্য্য ত্রাণকর্তা ত্রাণকর্ত্রী ত্রাণপ্রাপ্ত ত্রাণসামগ্রী ত্রাত ত্রাতা তরানা তুরানি তরানো তরান্বিত তরাশ তরাস ত্রাস ত্রাসিত ত্রাসিতা ত্রাসজনক ত্রাসযুক্ত ত্রাসন ত্রাসসৃষ্টি ত্রাসসৃষ্টিকারী ত্রাহি ত্রাহিত্রাহি ত্রায়ক ত্রায়মাণ তরি তুরি ত্রি ত্রিংশ ত্রিংশত্তম ত্রিংশত্তমী তরিক ত্রিক তরিকা ত্রিকাল ত্রিকালজ্ঞ ত্রিকালদর্শী ত্রিকালব্যাপী ত্রিকালসিদ্ধ ত্রিকোণ ত্রিকোণাকার ত্রিকোণাকৃতি ত্রিকোণমিতি ত্রিকোণমিতিক ত্রিকূট ত্রিকণ্টক ত্রিকুল ত্রিগঙ্গ ত্রিগুণ ত্রিগুণা ত্রিগুণাত্মক ত্রিগুণাত্মিকা ত্রিগুণাধিক ত্রিগুণিত ত্রিগুণময়ী ত্রিঘাত ত্রিচক্রযান ত্রিচক্ষু ত্রিচত্বারিংশৎ ত্রিচত্বারিংশত্তম ত্রিচত্বারিংশত্তমী ত্রিজগত ত্রিজগৎ ত্রিযামা ত্রিযোজী তরিত তুরিত ত্রিতাপ ত্রিতাপহারিণী ত্রিতাল তুরিতে ত্রিতত্ত্ব ত্রিতত্ত্ববাদ ত্রিতন্ত্রী ত্রিত্ব ত্রিত্ববাদ তরিত্র তরিতরকারি তরিত্রাঙ্কন ত্রিতল ত্রিদিব ত্রিদিবকন্যা ত্রিদেশীয় ত্রিদোষ ত্রিদলাত্মক ত্রিদলীয় ত্রিদশ ত্রিদশাধিপতি ত্রিদশালয় ত্রিদশবধূ ত্রিদশবনিতা ত্রিদশমঞ্জরি ত্রিধা ত্রিধারা ত্রিন ত্রিনাথ ত্রিনিত্রি ত্রিনিদাদ ত্রিনেত্র ত্রিনেত্রা ত্রিনবতি ত্রিনবতিতম ত্রিনবতিতমী ত্রিনয়ন ত্রিনয়না ত্রিনয়নী ত্রিপাক্ষিক ত্রিপাদ ত্রিপাপ ত্রিপিটক ত্রিপঞ্চাশৎ ত্রিপঞ্চাশত্তম ত্রিপঞ্চাশত্তমী ত্রিপুট ত্রিপণ্ড ত্রিপুণ্ড্র ত্রিপুণ্ড্রক ত্রিপত্র ত্রিপথগা ত্রিপথগামিনী ত্রিপদ ত্রিপদী ত্রিপুরা ত্রিপুরান্তক ত্রিপুরারি ত্রিপর্ণ ত্রিপল ত্রিপলি ত্রিফলক ত্রিফলা ত্রিবার্ষিক ত্রিবিক্রম ত্রিবিদ্যা ত্রিবিধ ত্রিবিষ্টপ ত্রিবেণী ত্রিবেদী তরিবত তরিবৎ ত্রিবৃত্ত ত্রিবর্গ ত্রিবর্ণ ত্রিবর্ণক ত্রিবলি ত্রিবলী ত্রিভঙ্গ ত্রিভঙ্গিম ত্রিভঙ্গমুরারি ত্রিভুজ ত্রিভুজাকার ত্রিভুজাকৃতি ত্রিভুবন ত্রিমুখী ত্রিমাতৃক ত্রিমাত্রা ত্রিমাত্রিক ত্রিমূর্তি ত্রিরঙ ত্রিরঙা ত্রিরাত্র ত্রিরাত্রি ত্রিরত্ন ত্রিলেখ ত্রিলোক ত্রিলোকী ত্রিলোকেশ্বর ত্রিলোচন ত্রিলোচনা ত্রিলয় ত্রিশ ত্রিশঙ্কু ত্রিশাল ত্রিশরণ ত্রিশূল ত্রিশূলিনী ত্রিশূলী ত্রিশূলধারিণী ত্রিশূলধারী ত্রিশূলধারণ ত্রিশূলধারণকারিণী ত্রিশূলধারণকারী ত্রিশসংখ্যক ত্রিষষ্টি ত্রিসংসার ত্রিসীমা ত্রিসীমানা ত্রিসন্ধ্যা ত্রিসপ্ততি ত্রিসপ্ততিতম ত্রিসপ্ততিতমী ত্রিস্বর ত্রিস্রোত ত্রিস্রোতা ত্রিহুত তরী তুরী তূরী তরীকা তরুচ্ছায়া তুরীয় তুরীয়ানন্দ তুরীয়াবস্থা তুরীয়বর্ণ ত্রে ত্রেতা ত্রেতাযুগ ত্রেন্তা ত্রৈ ত্রৈকালিক ত্রৈগুণ্য ত্রৈধ ত্রৈবার্ষিক ত্রৈবিদ্য ত্রৈবর্ষিক ত্রৈমাসিক ত্রৈরাশিক ত্রৈলঙ্গ ত্রৈলিঙ্গ ত্রৈলোক্য ত্রৈলোক্যনাথ তরো ত্রোটক ত্রোটি ত্রোটী তরোবেতরো তরোয়াল তরুছায়া তরজা তর্জা তর্জাই তর্জাইও তর্জাইত তর্জাইতাম তর্জাইতিস তর্জাইতে তর্জাইতেছ তর্জাইতেছি তর্জাইতেছিল তর্জাইতেছিলাম তর্জাইতেছিলি তর্জাইতেছিলে তর্জাইতেছিলেন তর্জাইতেছিস তর্জাইতেছে তর্জাইতেছেন তর্জাইতেন তর্জাইব তর্জাইবার তর্জাইবি তর্জাইবে তর্জাইবেন তর্জাইল তর্জাইলাম তর্জাইলি তর্জাইলে তর্জাইলেন তর্জাইয়া তর্জাইয়াছ তর্জাইয়াছি তর্জাইয়াছিল তর্জাইয়াছিলাম তর্জাইয়াছিলি তর্জাইয়াছিলে তর্জাইয়াছিলেন তর্জাইয়াছিস তর্জাইয়াছে তর্জাইয়াছেন তর্জাইয়ো তর্জাও তর্জাক তর্জাচ্ছ তর্জাচ্ছি তর্জাচ্ছিল তর্জাচ্ছিলাম তর্জাচ্ছিলি তর্জাচ্ছিলে তর্জাচ্ছিলেন তর্জাচ্ছিলেম তর্জাচ্ছিলুম তর্জাচ্ছিস তর্জাচ্ছে তর্জাচ্ছেন তর্জাত তর্জাতাম তর্জাতিস তর্জাতে তর্জাতেন তর্জাতেম তর্জাতুম তর্জান তর্জানো তর্জাব তর্জাবার তর্জাবি তর্জাবে তর্জাবেন তর্জাবো তর্জাল তর্জালাম তর্জালি তর্জালে তর্জালেন তর্জালেম তর্জালুম তর্জাস তর্জিত তর্জে তর্জেছ তর্জেছি তর্জেছিল তর্জেছিলাম তর্জেছিলি তর্জেছিলে তর্জেছিলেন তর্জেছিলেম তর্জেছিলুম তর্জেছিস তর্জেছে তর্জেছেন তর্জো তর্জন তর্জনগর্জন তর্জনী তর্জনীনির্দেশ তরজমা তর্জমা তরজমাকারী তর্জমাকারী তর্জমান তরজল তুরঞ্জ তরূট তুর্য তূর্য ত্র্যংশ ত্র্যক্ষর ত্র্যক্ষরা ত্র্যক্ষরিক ত্র্যঙ্ক ত্র্যঙ্গুল তূর্যাচার্য তূর্যাজীব ত্রুটি ত্রুটিত ত্রুটিপূর্ণ ত্রুটিবিচ্যুতি ত্রুটিমুক্ত ত্রুটিশূন্য ত্রুটিহীন ত্রুটিহীনভাবে তূর্য্যধ্বনি তূর্যধ্বনি তূর্যনাদ তূর্যনিনাদ তূর্যবাদ্য ত্র্যম্বক ত্র্যশীতি ত্র্যস্র ত্র্যহ ত্র্যহস্পর্শ তরণ তরুণ তূর্ণ তরুণকন্ঠ তরুণাস্থি তরণি তুর্ণি তরুণিমা তরণী তরুণী তরণ্ড তরণ্ডক তরুণতা তরুণত্ব তরুণতরুণী তূর্ণপত্র তরুণপ্রাণ তরুণবয়স তরুণরবি তরতাজা তরতিব তর্তিব তরতীব তরতফাত তরতম তরতর তুরতুর তরতরিয়ে তরুতল তরুনখ তুরন্ত তূরন্ত তুরুপ ত্রপু ত্রপা তর্পিণী তর্পিত ত্রপিত ত্রপিতা তর্পী তর্পণ তর্পণকারী তর্পণাদি তরপণ্য তরপত তরপদী তুরপুন ত্রপমাণ তরফ তুরুফ তরফা তরফদার তরফসানি তরবার তরবারি তরুবালা তরুবিলাসিনী তরবিয়ত তরুবীথি তরবেতর তরবুজ তরুবর তরুভুক তুরুম তুরমান তরমিম তরমীম তরমুজ তরুমূল তুর্মলি তুর্মলিন তরুরাগ তরুরাজ তরুরুহা তরল তরলা তরলিত তরুলিপি তরলীকৃত তরলীকরণ তরলীভূত তরলীভবন তরলতা তরুলতা তরলত্ব তরলদশা তরলনয়না তরলনয়নী তরলপদার্থ তরলপূর্ণ তরলভাব তরলমতি তরললোচনা তরশু তরুশাখা তরুশির তুরস্ক তরসা তরসান তরসানো তরুসার তরসি তরস্ত ত্রস্ত ত্রস্তা তরস্থান ত্রসন ত্রস্নু তরস্বান তরস্বিনী তরস্বী তরস্বতী তরুসমাচ্ছন্ন ত্রসর ত্রসরেণু ত্রয় ত্রয়ঃপঞ্চাশৎ ত্রয়ঃপঞ্চাশত্তম ত্রয়ঃপঞ্চাশত্তমী ত্রয়ঃসপ্ততি ত্রয়ঃসপ্ততিতম ত্রয়ঃসপ্ততিতমী ত্রয়ী ত্রয়ীধর্ম ত্রয়ীবিদ্যা ত্রয়োদশ ত্রয়োদশী ত্রয়োবিংশ ত্রয়োবিংশতি ত্রয়োবিংশতিতম ত্রয়শ্চত্বারিংশৎ ত্রয়শ্চত্বারিংশত্তম ত্রয়শ্চত্বারিংশত্তমী ত্রয়স্ত্রিংশ ত্রয়স্ত্রিংশত্তম ত্রয়স্ত্রিংশত্তমী তল তুল তূল তলওয়ার তলক তুলক তুলকালাম তলা তুলা তূলা তলাই তুলাই তলাইও তুলাইও তলাইত তুলাইত তলাইতাম তুলাইতাম তলাইতিস তুলাইতিস তলাইতে তুলাইতে তলাইতেছ তুলাইতেছ তলাইতেছি তুলাইতেছি তলাইতেছিল তুলাইতেছিল তলাইতেছিলাম তুলাইতেছিলাম তলাইতেছিলি তুলাইতেছিলি তলাইতেছিলে তুলাইতেছিলে তলাইতেছিলেন তুলাইতেছিলেন তলাইতেছিস তুলাইতেছিস তলাইতেছে তুলাইতেছে তলাইতেছেন তুলাইতেছেন তলাইতেন তুলাইতেন তলাইব তুলাইব তলাইবার তুলাইবার তলাইবি তুলাইবি তলাইবে তুলাইবে তলাইবেন তুলাইবেন তলাইল তুলাইল তলাইলাম তুলাইলাম তলাইলি তুলাইলি তলাইলে তুলাইলে তলাইলেন তুলাইলেন তলাইয়া তুলাইয়া তলাইয়াছ তুলাইয়াছ তলাইয়াছি তুলাইয়াছি তলাইয়াছিল তুলাইয়াছিল তলাইয়াছিলাম তুলাইয়াছিলাম তলাইয়াছিলি তুলাইয়াছিলি তলাইয়াছিলে তুলাইয়াছিলে তলাইয়াছিলেন তুলাইয়াছিলেন তলাইয়াছিস তুলাইয়াছিস তলাইয়াছে তুলাইয়াছে তলাইয়াছেন তুলাইয়াছেন তলাইয়ো তুলাইয়ো তলাওয়ালা তলাক তুলাক তুলাকোটি তূলাকোটি তুলাকূট তলাখাঁকতি তলাগুছি তলাচোঁয়া তলাচ্ছ তলাচ্ছি তলাচ্ছিল তলাচ্ছিলাম তলাচ্ছিলি তলাচ্ছিলে তলাচ্ছিলেন তলাচ্ছিলেম তলাচ্ছিলুম তলাচ্ছিস তলাচ্ছে তলাচ্ছেন তলাট তুলাটা তুলাযন্ত্র তলাত তলাতাম তলাতিস তলাতে তলাতেন তলাতেম তলাতুম তলাতল তুলাদান তুলাদণ্ড তুলাধারী তুলাধট তলান তুলান তলানি তলানো তুলানো তলাপাত্র তলাফাঁক তলাব তলাবার তলাবি তলাবে তলাবেন তলাবো তুলাব্রত তলাভিঘাত তুলারু তুলারাম তুলারাশি তলাল তলালাম তলালি তলালে তলালেন তলালেম তলালুম তলাশূন্য তুলাস তলাহীন তলাড়ু তলায়তলায় তলি তুলি তূলি তুলিকা তূলিকা তলিযুক্ত তলিত তুলিত তলিয়ে তুলিয়ে তলিয়েছ তুলিয়েছ তলিয়েছি তুলিয়েছি তলিয়েছিল তুলিয়েছিল তলিয়েছিলাম তুলিয়েছিলাম তলিয়েছিলি তুলিয়েছিলি তলিয়েছিলে তুলিয়েছিলে তলিয়েছিলেন তুলিয়েছিলেন তলিয়েছিলেম তুলিয়েছিলেম তলিয়েছিলুম তুলিয়েছিলুম তলিয়েছিস তুলিয়েছিস তলিয়েছে তুলিয়েছে তলিয়েছেন তুলিয়েছেন তলিয়ো তুলিয়ো তলী তুলী তূলী তুলচ্ছ তুলচ্ছি তুলচ্ছিল তুলচ্ছিলাম তুলচ্ছিলি তুলচ্ছিলে তুলচ্ছিলেন তুলচ্ছিলেম তুলচ্ছিলুম তুলচ্ছিস তুলচ্ছে তুলচ্ছেন তলীয় তুলেছ তুলেছি তুলেছিল তুলেছে তুলেছেন তলেতলে তুলেন তুলো তুলোট তুলোধোনা তুলোভরা তলোয়ার তুলছিলেন তুলছে তুলছেন তুলট তুল্য তুল্যকোণিক তলযুক্ত তুল্যাংক তুল্যাকৃতি তুল্যতা তলযুদ্ধ তুল্যপান তুল্যমূল্য তুল্যরূপ তুলত তলতা তুলতাম তুলতিস তুলতে তুলতেন তুলতেম তুলতুম তলত্র তলতল তুলতুল তুলতুলে তলদা তলদেশ তলদ্বয় তুলন তুলনা তুলনাকেন্দ্রিক তুলনাত্মক তুলনাবাচক তুলনামূলক তুলনাহীন তুলনীয় তুলনীয়া তুলনো তলপ তল্প তল্পক তল্পকীট তলপাতলপি তল্পাতল্পি তলপি তল্পি তলপিতলপা তল্পিতল্পা তলপিদার তল্পিদার তলপিবাহক তল্পিবাহক তল্পিবহন তলপী তল্পী তলপীতলপা তলপেট তলপ্রহার তলব তুলব তলবানা তুলবার তলবি তুলবি তলবিকৃত তুলবে তুলবেন তুলবো তলমাত্রিক তল্ল তুলল তল্লা তল্লাক তল্লাট তল্লাটি তল্লাবাঁশ তুললাম তল্লাশ তল্লাশি তল্লাস তল্লাসি তুললি তল্লিকা তুললে তুললেন তুললেম তুললুম তুলশী তুলস তুলসী তুলসীগঙ্গা তুলসীগাছ তুলসীঘাট তুলসীপাতা তুলসীবৃক্ষ তুলসীবন তুলসীমঞ্চ তলহীন তশতরি তশতরী তশবিহি তশবীহি তশরিফ তশলা তুষ তুঁষ তুষা তৃষা তৃষাতুর তৃষাতুরা তুষানল তুষার তুষারকাল তুষারকর তুষারক্ষেত্র তুষারগিরি তুষারগৌর তুষারাদ্রি তুষারাবৃত তুষারঝটিকা তৃষার্ত তৃষার্তা তুষারধবল তুষারপাত তুষারপুঞ্জ তুষারপতন তুষারমণ্ডিত তুষারস্রোত তৃষালু তৃষিত তৃষিতা তুষেরআগুন তষ্ট তুষ্ট তৃষ্য তুষযুক্ত তুষ্টি তুষ্টিবিধান তুষ্টিসম্পাদন তৃষ্ণা তৃষ্ণাযুক্ত তৃষ্ণাতুর তৃষ্ণাতুরা তৃষ্ণার্ত তৃষ্ণার্তা তৃষ্ণালু তৃষ্ণাহীন তূষ্ণী তুষ্ণীক তূষ্ণীভাব তূষ্ণীম্ভাব তূষ্ণীম্ভূত তুষমুক্ত তুষরাবৃত তুষহীন তস তসু তুস তস্কর তস্করতা তস্করবৃত্তি তসিল তস্য তস্ত তসদিক তসদীক তসনিফ তসনস তসবি তসবির তসবিহ তসবীর তসর তসরিফ তসরুপ তসরুফ তসলা তসলিম তসলিমা তসলিমাত তসলীম তসল্লি তসল্লী তুসসি তসহুদ তুহ তুহু তুহুঁ তুঁহু তুঁহুঁ তহই তহকিক তহকীক তহখানা তহখরচ তুহার তুহারি তহি তহিঁ তঁহি তুহিন তুহিনাদ্রি তহফা তহবিল তহবিলতত্ত্ব তহবিলতসরুফ তহবিলদার তহবিলদারি তহবন্দ তুহ্মা তুহ্মাক তুহ্মার তুহ্মারি তুহ্মারে তুহ্মি তহমত তহমতি তহুরাশরাব তহরি তহুরি তহরিমা তহরির তহরীমা তহরীর তহশিল তহশিলদার তহশিলদারি তহসিল তহসিলদার তহসিলদারি তহসীল তড় তুড়ুক তড়কা তড়কি তুড়কি তুড়ুঙ তড়া তুড়া তড়াক তড়াগ তড়াত তড়াতড় তুড়ানো তড়াবড়ি তুড়ি তড়িঘড়ি তড়িচ্চালক তড়িচ্চালিত তড়িচ্চুম্বক তড়িচ্চুম্বকীয় তড়িৎ তড়িৎঋণাত্মক তড়িৎঋণাত্মকতা তড়িৎকোষ তড়িৎকৌশল তড়িৎক্ষেত্র তড়িৎক্ষরণ তড়িৎগতিবিদ্যা তড়িতাহিত তড়িতাহত তড়িৎচৌম্বক তড়িৎচৌম্বকীয় তড়িৎচুম্বক তড়িৎচুম্বকীয় তড়িৎচুম্বকত্ব তড়িৎযন্ত্র তড়িত্তরল তড়িৎপরিবাহী তড়িৎপ্রবাহ তড়িত্বান তড়িৎবিজ্ঞান তড়িৎবীক্ষণ তড়িৎবর্তনী তড়িৎশিখা তড়িৎসংযুক্ত তড়িদগতি তড়িদগর্ভ তড়িদ্দাম তড়িদদ্বার তড়িদবিশ্লেষণ তড়িদ্বীক্ষণ তড়িন্ময় তুড়িলাফ তুড়িয়া তড়ে তুড়ে তুড়েছে তড়তড় তড়তড়া তুড়ন তড়প তড়পা তড়পাই তড়পাইও তড়পাইত তড়পাইতাম তড়পাইতিস তড়পাইতে তড়পাইতেছ তড়পাইতেছি তড়পাইতেছিল তড়পাইতেছিলাম তড়পাইতেছিলি তড়পাইতেছিলে তড়পাইতেছিলেন তড়পাইতেছিস তড়পাইতেছে তড়পাইতেছেন তড়পাইতেন তড়পাইব তড়পাইবার তড়পাইবি তড়পাইবে তড়পাইবেন তড়পাইল তড়পাইলাম তড়পাইলি তড়পাইলে তড়পাইলেন তড়পাইয়া তড়পাইয়াছ তড়পাইয়াছি তড়পাইয়াছিল তড়পাইয়াছিলাম তড়পাইয়াছিলি তড়পাইয়াছিলে তড়পাইয়াছিলেন তড়পাইয়াছিস তড়পাইয়াছে তড়পাইয়াছেন তড়পাইয়ো তড়পাক তড়পাচ্ছ তড়পাচ্ছি তড়পাচ্ছিল তড়পাচ্ছিলাম তড়পাচ্ছিলি তড়পাচ্ছিলে তড়পাচ্ছিলেন তড়পাচ্ছিলেম তড়পাচ্ছিলুম তড়পাচ্ছিস তড়পাচ্ছে তড়পাচ্ছেন তড়পাত তড়পাতাম তড়পাতিস তড়পাতে তড়পাতেন তড়পাতেম তড়পাতুম তড়পান তড়পানি তড়পানো তড়পাব তড়পাবার তড়পাবি তড়পাবে তড়পাবেন তড়পাবো তড়পাল তড়পালাম তড়পালি তড়পালে তড়পালেন তড়পালেম তড়পালুম তড়পাস তড়পে তড়পেছ তড়পেছি তড়পেছিল তড়পেছিলাম তড়পেছিলি তড়পেছিলে তড়পেছিলেন তড়পেছিলেম তড়পেছিলুম তড়পেছিস তড়পেছে তড়পেছেন তড়পো তড়পড় তড়বড় তড়বড়া তড়বড়ান তড়বড়ানি তড়বড়ানো তড়বড়ি তুড়ুম তয় তুয় তয়খানা তুয়া তয়ে তয়ের তয়নাত তয়নাতি তয়ফা তয়ফাওয়ালি তয়ম্মুম".split(" "),
              w_th: "থ থু থুঃ থুঃথুঃ থই থুই থুইত থুইতাম থুইতিস থুইতে থুইতেছ থুইতেছি থুইতেছিল থুইতেছিলাম থুইতেছিলি থুইতেছিলে থুইতেছিলেন থুইতেছিস থুইতেছে থুইতেছেন থুইতেন থইথই থুইব থুইবার থুইবি থুইবে থুইবেন থুইল থুইলাম থুইলি থুইলে থুইলেন থুইয়া থুইয়াছ থুইয়াছি থুইয়াছিল থুইয়াছিলাম থুইয়াছিলি থুইয়াছিলে থুইয়াছিলেন থুইয়াছিস থুইয়াছে থুইয়াছেন থুইয়ে থুইয়ো থক থুক থকুক থুক্কু থকা থকার থকি থকিত থকিতাম থকিতিস থকিতে থকিতেছ থকিতেছি থকিতেছিল থকিতেছিলাম থকিতেছিলি থকিতেছিলে থকিতেছিলেন থকিতেছিস থকিতেছে থকিতেছেন থকিতেন থকিব থকিবার থকিবি থকিবে থকিবেন থকিল থকিলাম থকিলি থকিলে থকিলেন থকিস থকিয়া থকিয়াছ থকিয়াছি থকিয়াছিল থকিয়াছিলাম থকিয়াছিলি থকিয়াছিলে থকিয়াছিলেন থকিয়াছিস থকিয়াছে থকিয়াছেন থকিয়ো থকে থকেছ থকেছি থকেছিল থকেছিলাম থকেছিলি থকেছিলে থকেছিলেন থকেছিলেম থকেছিলুম থকেছিস থকেছে থকেছেন থকেন থকো থকছ থকছি থকছিল থকছিলাম থকছিলি থকছিলে থকছিলেন থকছিলেম থকছিলুম থকছিস থকছে থকছেন থকত থকতাম থকতিস থকতে থকতেন থকতেম থকতুম থকথক থুকথুক থকুন থকব থকবার থকবি থকবে থকবেন থকবো থকল থকলাম থকলি থকলে থকলেন থকলেম থকলুম থা থাই থাইকা থাইকো থাইম থাইমাস থাইমিন থাইরোট্রোপ থাইরয়েড থাইল থাইল্যান্ড থাউকা থাউকো থাও থাওকা থাক থাকুক থাককাটা থাকগে থাকা থাকাকালীন থাকাকালে থাকাখাওয়া থাকাথাকি থাকানো থাকি থাকিত থাকিতাম থাকিতিস থাকিতে থাকিতেছ থাকিতেছি থাকিতেছিল থাকিতেছিলাম থাকিতেছিলি থাকিতেছিলে থাকিতেছিলেন থাকিতেছিস থাকিতেছে থাকিতেছেন থাকিতেন থাকিনি থাকিব থাকিবার থাকিবি থাকিবে থাকিবেন থাকিল থাকিলাম থাকিলি থাকিলে থাকিলেন থাকিস থাকিয়া থাকিয়াছ থাকিয়াছি থাকিয়াছিল থাকিয়াছিলাম থাকিয়াছিলি থাকিয়াছিলে থাকিয়াছিলেন থাকিয়াছিস থাকিয়াছে থাকিয়াছেন থাকিয়ো থাকে থাকেন থাকেনা থাকেনি থাকেননি থাকেবে থাকেল থাকো থাকছ থাকছি থাকছিল থাকছিলাম থাকছিলি থাকছিলে থাকছিলেন থাকছিলেম থাকছিলুম থাকছিস থাকছে থাকছেন থাকত থাকতাম থাকতিস থাকতে থাকতেন থাকতেম থাকতো থাকতুম থাকথোক থাকন থাকুন থাকনা থাকব থাকবা থাকবার থাকবি থাকবে থাকবেন থাকবেনা থাকবো থাকবন্দী থাকবস্তি থাকুম থাকল থাকলাম থাকলি থাকলে থাকলেতো থাকলেন থাকলেম থাকলো থাকলুম থাকড়া থাকড়াই থাকড়াইও থাকড়াইত থাকড়াইতাম থাকড়াইতিস থাকড়াইতে থাকড়াইতেছ থাকড়াইতেছি থাকড়াইতেছিল থাকড়াইতেছিলাম থাকড়াইতেছিলি থাকড়াইতেছিলে থাকড়াইতেছিলেন থাকড়াইতেছিস থাকড়াইতেছে থাকড়াইতেছেন থাকড়াইতেন থাকড়াইব থাকড়াইবার থাকড়াইবি থাকড়াইবে থাকড়াইবেন থাকড়াইল থাকড়াইলাম থাকড়াইলি থাকড়াইলে থাকড়াইলেন থাকড়াইয়া থাকড়াইয়াছ থাকড়াইয়াছি থাকড়াইয়াছিল থাকড়াইয়াছিলাম থাকড়াইয়াছিলি থাকড়াইয়াছিলে থাকড়াইয়াছিলেন থাকড়াইয়াছিস থাকড়াইয়াছে থাকড়াইয়াছেন থাকড়াইয়ো থাকড়াও থাকড়াক থাকড়াচ্ছ থাকড়াচ্ছি থাকড়াচ্ছিল থাকড়াচ্ছিলাম থাকড়াচ্ছিলি থাকড়াচ্ছিলে থাকড়াচ্ছিলেন থাকড়াচ্ছিলেম থাকড়াচ্ছিলুম থাকড়াচ্ছিস থাকড়াচ্ছে থাকড়াচ্ছেন থাকড়াত থাকড়াতাম থাকড়াতিস থাকড়াতে থাকড়াতেন থাকড়াতেম থাকড়াতুম থাকড়ান থাকড়ানো থাকড়াব থাকড়াবার থাকড়াবি থাকড়াবে থাকড়াবেন থাকড়াবো থাকড়াল থাকড়ালাম থাকড়ালি থাকড়ালে থাকড়ালেন থাকড়ালেম থাকড়ালুম থাকড়াস থাকড়ে থাকড়েছ থাকড়েছি থাকড়েছিল থাকড়েছিলাম থাকড়েছিলি থাকড়েছিলে থাকড়েছিলেন থাকড়েছিলেম থাকড়েছিলুম থাকড়েছিস থাকড়েছে থাকড়েছেন থাতা থাতানো থাতামুতা থাতামুথা থান থানকাপড় থানকুনি থানকুঁড়ি থানা থানাজাত থানাদার থানাপুলিশ থানেশ্বর থানধুতি থাপ থাপক থাপা থাপার থাপি থাপী থাপন থাপ্পড় থাপরি থাপড় থাপড়া থাপড়ান থাপড়ানো থাপয়ে থাবা থাবান থাবানো থাবেন থাবলে থাবড় থাবড়া থাবড়ান থাবড়ানো থাবড়ি থাম থামুক থামা থামাই থামাইও থামাইত থামাইতাম থামাইতিস থামাইতে থামাইতেছ থামাইতেছি থামাইতেছিল থামাইতেছিলাম থামাইতেছিলি থামাইতেছিলে থামাইতেছিলেন থামাইতেছিস থামাইতেছে থামাইতেছেন থামাইতেন থামাইব থামাইবার থামাইবি থামাইবে থামাইবেন থামাইল থামাইলাম থামাইলি থামাইলে থামাইলেন থামাইয়া থামাইয়াছ থামাইয়াছি থামাইয়াছিল থামাইয়াছিলাম থামাইয়াছিলি থামাইয়াছিলে থামাইয়াছিলেন থামাইয়াছিস থামাইয়াছে থামাইয়াছেন থামাইয়ো থামাও থামাক থামাচ্ছ থামাচ্ছি থামাচ্ছিল থামাচ্ছিলাম থামাচ্ছিলি থামাচ্ছিলে থামাচ্ছিলেন থামাচ্ছিলেম থামাচ্ছিলুম থামাচ্ছিস থামাচ্ছে থামাচ্ছেন থামাত থামাতাম থামাতিস থামাতে থামাতেন থামাতেম থামাতুম থামান থামানো থামাব থামাবার থামাবি থামাবে থামাবেন থামাবো থামাল থামালাম থামালি থামালে থামালেন থামালেম থামালুম থামাস থামায় থামায়া থামি থামিত থামিতাম থামিতিস থামিতে থামিতেছ থামিতেছি থামিতেছিল থামিতেছিলাম থামিতেছিলি থামিতেছিলে থামিতেছিলেন থামিতেছিস থামিতেছে থামিতেছেন থামিতেন থামিব থামিবার থামিবি থামিবে থামিবেন থামিল থামিলাম থামিলি থামিলে থামিলেন থামিস থামিয়া থামিয়াছ থামিয়াছি থামিয়াছিল থামিয়াছিলাম থামিয়াছিলি থামিয়াছিলে থামিয়াছিলেন থামিয়াছিস থামিয়াছে থামিয়াছেন থামিয়ে থামিয়েছ থামিয়েছি থামিয়েছিল থামিয়েছিলাম থামিয়েছিলি থামিয়েছিলে থামিয়েছিলেন থামিয়েছিলেম থামিয়েছিলুম থামিয়েছিস থামিয়েছে থামিয়েছেন থামিয়ো থামে থামেন থামো থামছ থামছি থামছিল থামছিলাম থামছিলি থামছিলে থামছিলেন থামছিলেম থামছিলুম থামছিস থামছে থামছেন থামত থামতাম থামতিস থামতে থামতেন থামতেম থামতুম থামুন থামব থাম্বা থামবার থামবি থামবে থামবেন থামবো থামল থামলাম থামলি থামলে থামলেন থামলেম থামলুম থার থারি থারী থার্টি থার্টিন থার্ড থার্ডক্লাশ থার্মাল থার্মিস্টার থার্মিয়নিক থার্মোকাপল থার্মোমিটার থাল থালকুঁড়ি থালা থালাবাসন থালাবরতন থালাভরা থালি থালিকা থাসা থাড় থাড়ি থায়ামিন থায়োসায়ানেট থিংক থিংগস থিউরি থিওরি থিওরেটিকাল থিওলজিকাল থিওসফি থিওসফিস্ট থিক থিকা থিকথিক থিঙ্কপ্যাড থিটা থিত থিতু থিতক থিতা থিতাই থিতাইও থিতাইত থিতাইতাম থিতাইতিস থিতাইতে থিতাইতেছ থিতাইতেছি থিতাইতেছিল থিতাইতেছিলাম থিতাইতেছিলি থিতাইতেছিলে থিতাইতেছিলেন থিতাইতেছিস থিতাইতেছে থিতাইতেছেন থিতাইতেন থিতাইব থিতাইবার থিতাইবি থিতাইবে থিতাইবেন থিতাইল থিতাইলাম থিতাইলি থিতাইলে থিতাইলেন থিতাইয়া থিতাইয়াছ থিতাইয়াছি থিতাইয়াছিল থিতাইয়াছিলাম থিতাইয়াছিলি থিতাইয়াছিলে থিতাইয়াছিলেন থিতাইয়াছিস থিতাইয়াছে থিতাইয়াছেন থিতাইয়ো থিতাক থিতান থিতানো থিতাস থিতি থিতিস থিতিয়ে থিতিয়েছ থিতিয়েছি থিতিয়েছিল থিতিয়েছিলাম থিতিয়েছিলি থিতিয়েছিলে থিতিয়েছিলেন থিতিয়েছিলেম থিতিয়েছিলুম থিতিয়েছিস থিতিয়েছে থিতিয়েছেন থিতিয়ো থিতচ্ছ থিতচ্ছি থিতচ্ছিল থিতচ্ছিলাম থিতচ্ছিলি থিতচ্ছিলে থিতচ্ছিলেন থিতচ্ছিলেম থিতচ্ছিলুম থিতচ্ছিস থিতচ্ছে থিতচ্ছেন থিতো থিতোনো থিতত থিততাম থিততিস থিততে থিততেন থিততেম থিততুম থিতন থিতনো থিতব থিতবার থিতবি থিতবে থিতবেন থিতবো থিতল থিতলাম থিতলি থিতলে থিতলেন থিতলেম থিতলুম থিতস থিন থিফ থিম থিম্পু থির থিরথির থিরথিরানি থিল থিসিস থিয়েটার থিয়েটারওয়ালা থিয়েটারওয়ালি থিয়েটারি থিয়োরি থিয়োরিস্ট থিয়সফি থিয়সফিস্ট থুচ্ছ থুচ্ছি থুচ্ছিল থুচ্ছিলাম থুচ্ছিলি থুচ্ছিলে থুচ্ছিলেন থুচ্ছিলেম থুচ্ছিলুম থুচ্ছিস থুচ্ছে থুচ্ছেন থেইথেই থেও থেক থেকা থেকান থেকে থেকেছ থেকেছি থেকেছিল থেকেছিলাম থেকেছিলি থেকেছিলে থেকেছিলেন থেকেছিলেম থেকেছিলুম থেকেছিস থেকেছে থেকেছেন থেকেথেকে থেকেমুক্ত থেকো থেঁত থেঁতা থেঁতান থেঁতানো থেঁতো থেঁতলা থেঁৎলা থেঁতলাই থেঁৎলাই থেঁতলাইও থেঁৎলাইও থেঁতলাইত থেঁৎলাইত থেঁতলাইতাম থেঁৎলাইতাম থেঁতলাইতিস থেঁৎলাইতিস থেঁতলাইতে থেঁৎলাইতে থেঁতলাইতেছ থেঁৎলাইতেছ থেঁতলাইতেছি থেঁৎলাইতেছি থেঁতলাইতেছিল থেঁৎলাইতেছিল থেঁতলাইতেছিলাম থেঁৎলাইতেছিলাম থেঁতলাইতেছিলি থেঁৎলাইতেছিলি থেঁতলাইতেছিলে থেঁৎলাইতেছিলে থেঁতলাইতেছিলেন থেঁৎলাইতেছিলেন থেঁতলাইতেছিস থেঁৎলাইতেছিস থেঁতলাইতেছে থেঁৎলাইতেছে থেঁতলাইতেছেন থেঁৎলাইতেছেন থেঁতলাইতেন থেঁৎলাইতেন থেঁতলাইব থেঁৎলাইব থেঁতলাইবার থেঁৎলাইবার থেঁতলাইবি থেঁৎলাইবি থেঁতলাইবে থেঁৎলাইবে থেঁতলাইবেন থেঁৎলাইবেন থেঁতলাইল থেঁৎলাইল থেঁতলাইলাম থেঁৎলাইলাম থেঁতলাইলি থেঁৎলাইলি থেঁতলাইলে থেঁৎলাইলে থেঁতলাইলেন থেঁৎলাইলেন থেঁতলাইয়া থেঁৎলাইয়া থেঁতলাইয়াছ থেঁৎলাইয়াছ থেঁতলাইয়াছি থেঁৎলাইয়াছি থেঁতলাইয়াছিল থেঁৎলাইয়াছিল থেঁতলাইয়াছিলাম থেঁৎলাইয়াছিলাম থেঁতলাইয়াছিলি থেঁৎলাইয়াছিলি থেঁতলাইয়াছিলে থেঁৎলাইয়াছিলে থেঁতলাইয়াছিলেন থেঁৎলাইয়াছিলেন থেঁতলাইয়াছিস থেঁৎলাইয়াছিস থেঁতলাইয়াছে থেঁৎলাইয়াছে থেঁতলাইয়াছেন থেঁৎলাইয়াছেন থেঁতলাইয়ো থেঁৎলাইয়ো থেঁতলাও থেঁতলাক থেঁৎলাক থেঁতলাচ্ছ থেঁৎলাচ্ছ থেঁতলাচ্ছি থেঁৎলাচ্ছি থেঁতলাচ্ছিল থেঁৎলাচ্ছিল থেঁতলাচ্ছিলাম থেঁৎলাচ্ছিলাম থেঁতলাচ্ছিলি থেঁৎলাচ্ছিলি থেঁতলাচ্ছিলে থেঁৎলাচ্ছিলে থেঁতলাচ্ছিলেন থেঁৎলাচ্ছিলেন থেঁতলাচ্ছিলেম থেঁৎলাচ্ছিলেম থেঁতলাচ্ছিলুম থেঁৎলাচ্ছিলুম থেঁতলাচ্ছিস থেঁৎলাচ্ছিস থেঁতলাচ্ছে থেঁৎলাচ্ছে থেঁতলাচ্ছেন থেঁৎলাচ্ছেন থেঁতলাত থেঁৎলাত থেঁতলাতাম থেঁৎলাতাম থেঁতলাতিস থেঁৎলাতিস থেঁতলাতে থেঁৎলাতে থেঁতলাতেন থেঁৎলাতেন থেঁতলাতেম থেঁৎলাতেম থেঁতলাতুম থেঁৎলাতুম থেঁতলান থেঁৎলান থেঁতলানো থেঁৎলানো থেঁতলাব থেঁৎলাব থেঁতলাবার থেঁৎলাবার থেঁতলাবি থেঁৎলাবি থেঁতলাবে থেঁৎলাবে থেঁতলাবেন থেঁৎলাবেন থেঁতলাবো থেঁৎলাবো থেঁতলাল থেঁৎলাল থেঁতলালাম থেঁৎলালাম থেঁতলালি থেঁৎলালি থেঁতলালে থেঁৎলালে থেঁতলালেন থেঁৎলালেন থেঁতলালেম থেঁৎলালেম থেঁতলালুম থেঁৎলালুম থেঁতলাস থেঁৎলাস থেঁতলে থেঁৎলে থেঁতলেছ থেঁৎলেছ থেঁতলেছি থেঁৎলেছি থেঁতলেছিল থেঁৎলেছিল থেঁতলেছিলাম থেঁৎলেছিলাম থেঁতলেছিলি থেঁৎলেছিলি থেঁতলেছিলে থেঁৎলেছিলে থেঁতলেছিলেন থেঁৎলেছিলেন থেঁতলেছিলেম থেঁৎলেছিলেম থেঁতলেছিলুম থেঁৎলেছিলুম থেঁতলেছিস থেঁৎলেছিস থেঁতলেছে থেঁৎলেছে থেঁতলেছেন থেঁৎলেছেন থেঁতলো থেঁৎলো থেবড়া থেবড়াই থেবড়াইও থেবড়াইত থেবড়াইতাম থেবড়াইতিস থেবড়াইতে থেবড়াইতেছ থেবড়াইতেছি থেবড়াইতেছিল থেবড়াইতেছিলাম থেবড়াইতেছিলি থেবড়াইতেছিলে থেবড়াইতেছিলেন থেবড়াইতেছিস থেবড়াইতেছে থেবড়াইতেছেন থেবড়াইতেন থেবড়াইব থেবড়াইবার থেবড়াইবি থেবড়াইবে থেবড়াইবেন থেবড়াইল থেবড়াইলাম থেবড়াইলি থেবড়াইলে থেবড়াইলেন থেবড়াইয়া থেবড়াইয়াছ থেবড়াইয়াছি থেবড়াইয়াছিল থেবড়াইয়াছিলাম থেবড়াইয়াছিলি থেবড়াইয়াছিলে থেবড়াইয়াছিলেন থেবড়াইয়াছিস থেবড়াইয়াছে থেবড়াইয়াছেন থেবড়াইয়ো থেবড়াক থেবড়াচ্ছ থেবড়াচ্ছি থেবড়াচ্ছিল থেবড়াচ্ছিলাম থেবড়াচ্ছিলি থেবড়াচ্ছিলে থেবড়াচ্ছিলেন থেবড়াচ্ছিলেম থেবড়াচ্ছিলুম থেবড়াচ্ছিস থেবড়াচ্ছে থেবড়াচ্ছেন থেবড়াত থেবড়াতাম থেবড়াতিস থেবড়াতে থেবড়াতেন থেবড়াতেম থেবড়াতুম থেবড়ান থেবড়ানাক থেবড়ানো থেবড়াব থেবড়াবার থেবড়াবি থেবড়াবে থেবড়াবেন থেবড়াবো থেবড়াল থেবড়ালাম থেবড়ালি থেবড়ালে থেবড়ালেন থেবড়ালেম থেবড়ালুম থেবড়াস থেবড়ে থেবড়েছ থেবড়েছি থেবড়েছিল থেবড়েছিলাম থেবড়েছিলি থেবড়েছিলে থেবড়েছিলেন থেবড়েছিলেম থেবড়েছিলুম থেবড়েছিস থেবড়েছে থেবড়েছেন থেবড়ো থেমে থেমেছ থেমেছি থেমেছিল থেমেছিলাম থেমেছিলি থেমেছিলে থেমেছিলেন থেমেছিলেম থেমেছিলুম থেমেছিস থেমেছে থেমেছেন থেমো থেরাপি থেলেনি থেলো থেহ থেহা থৈ থৈকর থৈথৈ থৈল থৈলা থৈলতদার থো থোও থোওন থোওনা থোওয়া থোওয়ানো থোক থোকা থোকায় থোকায়থোকায় থোকে থোকেথোকে থোকেবেচা থোকথোক থোকনা থোতা থোঁতা থোঁতামুখ থোতনা থোপ থোপা থোপে থোপন থোপনা থোপনি থোপড়া থোব থোবা থোবে থোবেন থোবো থোবড়া থোবড়াই থোবড়াও থোবড়াক থোবড়াচ্ছ থোবড়াচ্ছি থোবড়াচ্ছিল থোবড়াচ্ছিলাম থোবড়াচ্ছিলি থোবড়াচ্ছিলে থোবড়াচ্ছিলেন থোবড়াচ্ছিলেম থোবড়াচ্ছিলুম থোবড়াচ্ছিস থোবড়াচ্ছে থোবড়াচ্ছেন থোবড়াত থোবড়াতাম থোবড়াতিস থোবড়াতে থোবড়াতেন থোবড়াতেম থোবড়াতুম থোবড়ান থোবড়ানো থোবড়াব থোবড়াবার থোবড়াবি থোবড়াবে থোবড়াবেন থোবড়াবো থোবড়াল থোবড়ালাম থোবড়ালি থোবড়ালে থোবড়ালেন থোবড়ালেম থোবড়ালুম থোবড়াস থোর থোরা থোরাসিক থোরি থোরিয়াম থোলো থোড় থোড়া থোড়াই থোড়াল থোড়িসি থোয় থোয়া থোয়ান থোয়ানো থট থ্যাংক থ্যাংকইউ থ্যাংকস থ্যাকথেকে থ্যাকথ্যাক থ্যাঙ্ক থ্যাঁতলান থ্যাতলানো থ্যাঁতলানো থ্যাপথেপে থ্যাপথ্যাপ থ্যাবড়া থ্যাবড়ান থ্যাবড়ানো থ্যালামাস থ্যালাসেমিয়া থ্যালিয়াম থুত থুতু থুতকার থুৎকার থুতকুড়ি থুতাম থুতি থুঁতি থুতিস থুতে থুতেন থুতেম থুত্থুর থুত্থুরে থুত্থুড় থুত্থুড়ি থুত্থুড়ে থুতনি থুৎনি থুঁতনি থতমত থুথু থুথি থন থুন থপ থুপ থপাস থপাসথপাস থুপি থুপী থপথপ থুপথুপ থপথপে থুব থুবা থুবী থুবড় থুবড়ক থুবড়া থুবড়াই থুবড়াইও থুবড়াইত থুবড়াইতাম থুবড়াইতিস থুবড়াইতে থুবড়াইতেছ থুবড়াইতেছি থুবড়াইতেছিল থুবড়াইতেছিলাম থুবড়াইতেছিলি থুবড়াইতেছিলে থুবড়াইতেছিলেন থুবড়াইতেছিস থুবড়াইতেছে থুবড়াইতেছেন থুবড়াইতেন থুবড়াইব থুবড়াইবার থুবড়াইবি থুবড়াইবে থুবড়াইবেন থুবড়াইল থুবড়াইলাম থুবড়াইলি থুবড়াইলে থুবড়াইলেন থুবড়াইয়া থুবড়াইয়াছ থুবড়াইয়াছি থুবড়াইয়াছিল থুবড়াইয়াছিলাম থুবড়াইয়াছিলি থুবড়াইয়াছিলে থুবড়াইয়াছিলেন থুবড়াইয়াছিস থুবড়াইয়াছে থুবড়াইয়াছেন থুবড়াইয়ো থুবড়াক থুবড়ান থুবড়ানো থুবড়াস থুবড়ি থুবড়িয়ে থুবড়িয়েছ থুবড়িয়েছি থুবড়িয়েছিল থুবড়িয়েছিলাম থুবড়িয়েছিলি থুবড়িয়েছিলে থুবড়িয়েছিলেন থুবড়িয়েছিলেম থুবড়িয়েছিলুম থুবড়িয়েছিস থুবড়িয়েছে থুবড়িয়েছেন থুবড়িয়ো থুবড়চ্ছ থুবড়চ্ছি থুবড়চ্ছিল থুবড়চ্ছিলাম থুবড়চ্ছিলি থুবড়চ্ছিলে থুবড়চ্ছিলেন থুবড়চ্ছিলেম থুবড়চ্ছিলুম থুবড়চ্ছিস থুবড়চ্ছে থুবড়চ্ছেন থুবড়ে থুবড়েছ থুবড়েছি থুবড়েছিল থুবড়েছিলাম থুবড়েছিলি থুবড়েছিলে থুবড়েছিলেন থুবড়েছিলেম থুবড়েছিলুম থুবড়েছিস থুবড়েছে থুবড়েছেন থুবড়ো থুবড়োবার থুবড়ত থুবড়তাম থুবড়তিস থুবড়তে থুবড়তেন থুবড়তেম থুবড়তুম থুবড়ন থুবড়নো থুবড়ব থুবড়বি থুবড়বে থুবড়বেন থুবড়বো থুবড়ল থুবড়লাম থুবড়লি থুবড়লে থুবড়লেন থুবড়লুম থুবড়স থুবড়য় থম থুম থমক থমকা থমকাই থমকাইও থমকাইত থমকাইতাম থমকাইতিস থমকাইতে থমকাইতেছ থমকাইতেছি থমকাইতেছিল থমকাইতেছিলাম থমকাইতেছিলি থমকাইতেছিলে থমকাইতেছিলেন থমকাইতেছিস থমকাইতেছে থমকাইতেছেন থমকাইতেন থমকাইব থমকাইবার থমকাইবি থমকাইবে থমকাইবেন থমকাইল থমকাইলাম থমকাইলি থমকাইলে থমকাইলেন থমকাইয়া থমকাইয়াছ থমকাইয়াছি থমকাইয়াছিল থমকাইয়াছিলাম থমকাইয়াছিলি থমকাইয়াছিলে থমকাইয়াছিলেন থমকাইয়াছিস থমকাইয়াছে থমকাইয়াছেন থমকাইয়ো থমকাও থমকাক থমকাচ্ছ থমকাচ্ছি থমকাচ্ছিল থমকাচ্ছিলাম থমকাচ্ছিলি থমকাচ্ছিলে থমকাচ্ছিলেন থমকাচ্ছিলেম থমকাচ্ছিলুম থমকাচ্ছিস থমকাচ্ছে থমকাচ্ছেন থমকাত থমকাতাম থমকাতিস থমকাতে থমকাতেন থমকাতেম থমকাতুম থমকান থমকানি থমকানো থমকাব থমকাবার থমকাবি থমকাবে থমকাবেন থমকাবো থমকাল থমকালাম থমকালি থমকালে থমকালেন থমকালেম থমকালুম থমকাস থমকে থমকেছ থমকেছি থমকেছিল থমকেছিলাম থমকেছিলি থমকেছিলে থমকেছিলেন থমকেছিলেম থমকেছিলুম থমকেছিস থমকেছে থমকেছেন থমকো থমথম থমথমে থর থ্রু থুরা থ্রি থ্রিওনিন থ্রিডি থ্রির থ্রিলার থ্রিয়োনিন থরে থ্রেড থরেবিথরে থরোথরো থূর্ত থরথর থুরথুর থরথরানি থরথরি থুরথুরে থরহর থরহরি থল থুল থলকমল থুলকুড়ি থুলাম থলি থলিয়া থলিয়াতি থলী থলে থুলে থলেট থুলেন থুলেম থলো থলথল থলথলে থুলুম থসথস থসথসে থুড় থুড়া থুড়ি থুড়ী থুড়ে থুড়থুড় থুড়থুড়ি থুড়থুড়ে থুয়ে থুয়েছ থুয়েছি থুয়েছিল থুয়েছিলাম থুয়েছিলি থুয়েছিলে থুয়েছিলেন থুয়েছিলেম থুয়েছিলুম থুয়েছিস থুয়েছে থুয়েছেন থুয়ো".split(" "),
              w_tt: "ট টু টুঁ টং টুং টংঘর টংটং টুংটুং টুংটাং টই টুই টুঁই টুইংকেল টুইঙ্কল টুইট টইটই টুইটি টইটম্বুর টইটুম্বুর টুইড টুইন টুইনটাওয়ার টইভুঁই টুইল টুইশনি টুইস্ট টক টুক টুকু টকুক টুকুক টক্কর টক্করাটক্করি টকা টুকা টকাটক টুকাটুকি টকান টুকান টুকানা টুকানি টকানো টুকানো টকাস টকাসটকাস টকাস্বাদ টকি টুকি টকিং টকিংডল টকিংবার্ড টকিংরোবট টুকিও টুকিটাক টুকিটাকি টকিত টুকিত টকিতাম টুকিতাম টকিতিস টুকিতিস টকিতে টুকিতে টকিতেছ টুকিতেছ টকিতেছি টুকিতেছি টকিতেছিল টুকিতেছিল টকিতেছিলাম টুকিতেছিলাম টকিতেছিলি টুকিতেছিলি টকিতেছিলে টুকিতেছিলে টকিতেছিলেন টুকিতেছিলেন টকিতেছিস টুকিতেছিস টকিতেছে টুকিতেছে টকিতেছেন টুকিতেছেন টকিতেন টুকিতেন টকিব টুকিব টকিবার টুকিবার টকিবি টুকিবি টকিবে টুকিবে টকিবেন টুকিবেন টকিল টুকিল টকিলাম টুকিলাম টকিলি টুকিলি টকিলে টুকিলে টকিলেন টুকিলেন টকিস টুকিস টকিয়া টুকিয়া টকিয়াছ টুকিয়াছ টকিয়াছি টুকিয়াছি টকিয়াছিল টুকিয়াছিল টকিয়াছিলাম টুকিয়াছিলাম টকিয়াছিলি টুকিয়াছিলি টকিয়াছিলে টুকিয়াছিলে টকিয়াছিলেন টুকিয়াছিলেন টকিয়াছিস টুকিয়াছিস টকিয়াছে টুকিয়াছে টকিয়াছেন টুকিয়াছেন টকিয়ে টকিয়ো টুকিয়ো টকী টুকী টুকে টকেছ টুকেছ টকেছি টুকেছি টকেছিল টুকেছিল টকেছিলাম টুকেছিলাম টকেছিলি টুকেছিলি টকেছিলে টুকেছিলে টকেছিলেন টুকেছিলেন টকেছিলেম টুকেছিলেম টকেছিলুম টুকেছিলুম টকেছিস টুকেছিস টকেছে টুকেছে টকেছেন টুকেছেন টকেটকে টকেন টুকেন টুকো টকছ টুকছ টকছি টুকছি টকছিল টুকছিল টকছিলাম টুকছিলাম টকছিলি টুকছিলি টকছিলে টুকছিলে টকছিলেন টুকছিলেন টকছিলেম টুকছিলেম টকছিলুম টুকছিলুম টকছিস টুকছিস টকছে টুকছে টকছেন টুকছেন টকটক টুকটুক টকটকাটক টুকটুকি টুকটাক টকডাল টকত টুকত টকতাম টুকতাম টকতিস টুকতিস টকতে টুকতে টকতেন টুকতেন টকতেম টুকতেম টকতুম টুকতুম টকুন টুকন টুকুন টকনা টুকনি টুকুনি টুকনী টুকুনজিল টকব টুকব টকবার টকবি টুকবি টকবে টুকবে টকবেন টুকবেন টকবো টুকবো টকমিষ্টি টুকরা টকরাটকরি টুকরাটাকরা টুকরি টুকরী টুকরো টুকরোটুকরো টুকরোটাকরা টকল টুকল টকলাম টুকলাম টকলি টুকলি টুকলিফাই টকলে টুকলে টকলেন টুকলেন টকলেম টুকলেম টকলুম টুকলুম টকশো টক্সিন টগে টগবগ টগবগানো টগবগাবগ টগবগিয়ে টুগুবুগুনি টগর টগরগাছ টগরা টগরে টগরফুল টঙ টঙ্ক টঙ্কক টঙ্কা টঙ্কার টঙ্কারী টঙ্কিত টঙ্কন টঙ্কপতি টঙ্কবান টঙ্কবিজ্ঞান টঙ্কশাল টঙ্কশালা টঙ্গ টুঙ্গ টঙ্গা টঙ্গি টুঙ্গি টঙ্গিঘর টঙ্গী টঙ্গন টঙ্গসটঙ্গস টুঙি টঙটঙ টা টাং টাংকর টাংগ টাংগা টাংগাইল টাংগাওয়ালা টাংগাপ্রদীপ টাংগি টাংট্যাং টাংস্টেন টাই টাইকি টাইগার টাইগারপাস টাইগার্স টাইগ্রিস টাইট টাইটান টাইটানিক টাইটানিয়াম টাইটেল টাইটেলপেজ টাইটল টাইডাল টাইপ টাইপকৃত টাইপিং টাইপিন টাইপিস্ট টাইপফেইস টাইপফেস টাইপরাইটার টাইপরাইটিং টাইফুন টাইফূন টাইফয়েড টাইব্রেকার টাইম টাইমকিপার টাইমকল টাইমার টাইমটেবিল টাইমটেবল টাইমপিস টাইমলাইন টাইমলি টাইমস টাইরোসিন টাইল টাইলিং টাইলস টাউট টাউটারি টাউন টাউনহল টাওয়ার টাওয়ার্স টাক টাকু টাঁক টাকা টাঁকা টাকাওয়ালা টাকাকড়ি টাঁকানো টাকাপয়সা টাকারআণ্ডিল টাকারকুমির টাকারগরম টাকারযখ টাকারতোড়া টাকারমুখ টাকারমানুষ টাকারশ্রাদ্ধ টাকাহার টাকি টাকযুক্ত টাঁকন টাকনা টাঁকনি টাঁকুনি টাকুর টাকরা টাকুরা টাকশাল টাঁকশাল টাঁকুয়া টাগ টাঙ্গ টাঙ্গা টাঙ্গাই টাঙ্গাইও টাঙ্গাইত টাঙ্গাইতাম টাঙ্গাইতিস টাঙ্গাইতে টাঙ্গাইতেছ টাঙ্গাইতেছি টাঙ্গাইতেছিল টাঙ্গাইতেছিলাম টাঙ্গাইতেছিলি টাঙ্গাইতেছিলে টাঙ্গাইতেছিলেন টাঙ্গাইতেছিস টাঙ্গাইতেছে টাঙ্গাইতেছেন টাঙ্গাইতেন টাঙ্গাইব টাঙ্গাইবার টাঙ্গাইবি টাঙ্গাইবে টাঙ্গাইবেন টাঙ্গাইল টাঙ্গাইলাম টাঙ্গাইলি টাঙ্গাইলেন টাঙ্গাইয়া টাঙ্গাইয়াছ টাঙ্গাইয়াছি টাঙ্গাইয়াছিল টাঙ্গাইয়াছিলাম টাঙ্গাইয়াছিলি টাঙ্গাইয়াছিলে টাঙ্গাইয়াছিলেন টাঙ্গাইয়াছিস টাঙ্গাইয়াছে টাঙ্গাইয়াছেন টাঙ্গাইয়ো টাঙ্গাওয়ালা টাঙ্গাক টাঙ্গাচ্ছ টাঙ্গাচ্ছি টাঙ্গাচ্ছিল টাঙ্গাচ্ছিলাম টাঙ্গাচ্ছিলি টাঙ্গাচ্ছিলে টাঙ্গাচ্ছিলেন টাঙ্গাচ্ছিলেম টাঙ্গাচ্ছিলুম টাঙ্গাচ্ছিস টাঙ্গাচ্ছে টাঙ্গাচ্ছেন টাঙ্গাত টাঙ্গাতাম টাঙ্গাতিস টাঙ্গাতে টাঙ্গাতেন টাঙ্গাতেম টাঙ্গাতুম টাঙ্গান টাঙ্গানো টাঙ্গাপ্রদীপ টাঙ্গাব টাঙ্গাবার টাঙ্গাবি টাঙ্গাবে টাঙ্গাবেন টাঙ্গাবো টাঙ্গাল টাঙ্গালাম টাঙ্গালি টাঙ্গালে টাঙ্গালেন টাঙ্গালেম টাঙ্গালুম টাঙ্গাস টাঙ্গি টাঙ্গিয়ে টাঙ্গিয়েছ টাঙ্গিয়েছি টাঙ্গিয়েছিল টাঙ্গিয়েছিলাম টাঙ্গিয়েছিলি টাঙ্গিয়েছিলে টাঙ্গিয়েছিলেন টাঙ্গিয়েছিলেম টাঙ্গিয়েছিলুম টাঙ্গিয়েছিস টাঙ্গিয়েছে টাঙ্গিয়েছেন টাঙ্গিয়ো টাঙ্গী টাঙ্গন টাঙা টাঙাই টাঙাইও টাঙাইছে টাঙাইত টাঙাইতাম টাঙাইতিস টাঙাইতে টাঙাইতেছ টাঙাইতেছি টাঙাইতেছিল টাঙাইতেছিলাম টাঙাইতেছিলি টাঙাইতেছিলে টাঙাইতেছিলেন টাঙাইতেছিস টাঙাইতেছে টাঙাইতেছেন টাঙাইতেন টাঙাইব টাঙাইবার টাঙাইবি টাঙাইবে টাঙাইবেন টাঙাইল টাঙাইলাম টাঙাইলি টাঙাইলে টাঙাইলেন টাঙাইলের টাঙাইয়া টাঙাইয়াছ টাঙাইয়াছি টাঙাইয়াছিল টাঙাইয়াছিলাম টাঙাইয়াছিলি টাঙাইয়াছিলে টাঙাইয়াছিলেন টাঙাইয়াছিস টাঙাইয়াছে টাঙাইয়াছেন টাঙাইয়ো টাঙাও টাঙাওয়ালা টাঙাক টাঙাচ্ছ টাঙাচ্ছি টাঙাচ্ছিল টাঙাচ্ছিলাম টাঙাচ্ছিলি টাঙাচ্ছিলে টাঙাচ্ছিলেন টাঙাচ্ছিলেম টাঙাচ্ছিলুম টাঙাচ্ছিস টাঙাচ্ছে টাঙাচ্ছেন টাঙাত টাঙাতাম টাঙাতিস টাঙাতে টাঙাতেন টাঙাতেম টাঙাতুম টাঙান টাঙানো টাঙাব টাঙাবার টাঙাবি টাঙাবে টাঙাবেন টাঙাবো টাঙাল টাঙালাম টাঙালি টাঙালে টাঙালেন টাঙালেম টাঙালুম টাঙাস টাঙি টাঙিয়ে টাঙিয়েছ টাঙিয়েছি টাঙিয়েছিল টাঙিয়েছিলাম টাঙিয়েছিলি টাঙিয়েছিলে টাঙিয়েছিলেন টাঙিয়েছিলেম টাঙিয়েছিলুম টাঙিয়েছিস টাঙিয়েছে টাঙিয়েছেন টাঙিয়ো টাঙন টাচ টাচস্টোন টাট টাটু টাটকা টাটকাফল টাটকামাছ টাটুঘোড়া টাটা টাটাই টাটাইও টাটাইত টাটাইতাম টাটাইতিস টাটাইতে টাটাইতেছ টাটাইতেছি টাটাইতেছিল টাটাইতেছিলাম টাটাইতেছিলি টাটাইতেছিলে টাটাইতেছিলেন টাটাইতেছিস টাটাইতেছে টাটাইতেছেন টাটাইতেন টাটাইব টাটাইবার টাটাইবি টাটাইবে টাটাইবেন টাটাইল টাটাইলাম টাটাইলি টাটাইলে টাটাইলেন টাটাইয়া টাটাইয়াছ টাটাইয়াছি টাটাইয়াছিল টাটাইয়াছিলাম টাটাইয়াছিলি টাটাইয়াছিলে টাটাইয়াছিলেন টাটাইয়াছিস টাটাইয়াছে টাটাইয়াছেন টাটাইয়ো টাটাক টাটাচ্ছ টাটাচ্ছি টাটাচ্ছিল টাটাচ্ছিলাম টাটাচ্ছিলি টাটাচ্ছিলে টাটাচ্ছিলেন টাটাচ্ছিলেম টাটাচ্ছিলুম টাটাচ্ছিস টাটাচ্ছে টাটাচ্ছেন টাটাত টাটাতাম টাটাতিস টাটাতে টাটাতেন টাটাতেম টাটাতুম টাটান টাটানি টাটানো টাটাব টাটাবার টাটাবি টাটাবে টাটাবেন টাটাবো টাটাল টাটালাম টাটালি টাটালে টাটালেন টাটালেম টাটালুম টাটাস টাটি টাটিয়ে টাটিয়েছ টাটিয়েছি টাটিয়েছিল টাটিয়েছিলাম টাটিয়েছিলি টাটিয়েছিলে টাটিয়েছিলেন টাটিয়েছিলেম টাটিয়েছিলুম টাটিয়েছিস টাটিয়েছে টাটিয়েছেন টাটিয়ো টাটী টাঁটী টাট্টু টাট্টুঘোড়া টাট্টি টাট্টী টাঠি টাণ্ডা টাণ্ডাই টান টানওয়ালা টানুক টানা টানাকাড়া টানাগাড়ি টানাচোখ টানাজাল টানাটানা টানাটানি টানাদুধ টানান টানানো টানাপাখা টানাপোড়ন টানাপথ টানাপড়েন টানাবোনা টানাবুনা টানারেখা টানাহেঁচড়া টানাহ্যাঁচড়া টানি টানিত টানিতাম টানিতিস টানিতে টানিতেছ টানিতেছি টানিতেছিল টানিতেছিলাম টানিতেছিলি টানিতেছিলে টানিতেছিলেন টানিতেছিস টানিতেছে টানিতেছেন টানিতেন টানিব টানিবার টানিবি টানিবে টানিবেন টানিল টানিলাম টানিলি টানিলে টানিলেন টানিস টানিয়া টানিয়াছ টানিয়াছি টানিয়াছিল টানিয়াছিলাম টানিয়াছিলি টানিয়াছিলে টানিয়াছিলেন টানিয়াছিস টানিয়াছে টানিয়াছেন টানিয়ো টানেন টানেননি টানেল টানেলিং টানছ টানছি টানছিল টানছিলাম টানছিলি টানছিলে টানছিলেন টানছিলেম টানছিলুম টানছিস টানছে টানছেন টানটান টানত টানতাম টানতিস টানতে টানতেন টানতেম টানতুম টানন টানুন টানব টানবার টানবি টানবে টানবেন টানবো টানল টানলাম টানলি টানলে টানলেন টানলেম টানলুম টাপু টাপেটোপে টাপুরটুপুর টাবা টাবুটুবু টাবুয়া টার টার্ক টার্কি টার্কিশ টার্কস টার্গেট টারান্টুলা টারাব টারজান টার্ন টারপিন টার্ফ টারবাইন টার্বাইন টারবালা টারবিয়াম টার্বিয়াম টার্বো টার্বোজেট টার্বোফ্যান টার্বোশ্যাফট টার্বুলেন্স টার্ম টার্মিনাল টারল টারসাল টাল টালা টালাটালি টালি টালিআঁ টালিকৃত টালিকরণ টালিগঞ্জ টালিলেক টালন টালনি টালুনি টালবাহানা টালমাটাল টালমাটালি টালুস টাস টাঁস টাস্ক টাঁসা টাসটাস টাড় টাড়বালা টাড়স টায় টায়ার টায়ার্ড টায়টায় টায়টোয় টায়রা টি টিং টিংচার টিংটিং টিংটিঙে টিউ টিউটোরিয়াল টিউটর টিউন টিউনার টিউনিক টিউব টিউবওয়েল টিউবারকিউলোসিস টিউবারকুলার টিউমার টিউলিপ টিউশানি টিউশন টিউশনি টিক টিকক টিকুক টিক্ক টিক্কা টিকা টিকাই টিকাইও টিকাইত টিকাইতাম টিকাইতিস টিকাইতে টিকাইতেছ টিকাইতেছি টিকাইতেছিল টিকাইতেছিলাম টিকাইতেছিলি টিকাইতেছিলে টিকাইতেছিলেন টিকাইতেছিস টিকাইতেছে টিকাইতেছেন টিকাইতেন টিকাইব টিকাইবার টিকাইবি টিকাইবে টিকাইবেন টিকাইল টিকাইলাম টিকাইলি টিকাইলে টিকাইলেন টিকাইয়া টিকাইয়াছ টিকাইয়াছি টিকাইয়াছিল টিকাইয়াছিলাম টিকাইয়াছিলি টিকাইয়াছিলে টিকাইয়াছিলেন টিকাইয়াছিস টিকাইয়াছে টিকাইয়াছেন টিকাইয়ো টিকাক টিকাকার টিকাটুলি টিকাদান টিকাদার টিকান টিকানো টিকারা টিকালো টিকাস টিকি টিকিং টিকিট টিকিটঘর টিকিটির টিকিটবাবু টিকিটমাষ্টার টিকিটমাস্টার টিকিত টিকিতাম টিকিতিস টিকিতে টিকিতেছ টিকিতেছি টিকিতেছিল টিকিতেছিলাম টিকিতেছিলি টিকিতেছিলে টিকিতেছিলেন টিকিতেছিস টিকিতেছে টিকিতেছেন টিকিতেন টিকিন টিকিব টিকিবার টিকিবি টিকিবে টিকিবেন টিকিরি টিকিল টিকিলাম টিকিলি টিকিলে টিকিলেন টিকিস টিকিয়া টিকিয়াছ টিকিয়াছি টিকিয়াছিল টিকিয়াছিলাম টিকিয়াছিলি টিকিয়াছিলে টিকিয়াছিলেন টিকিয়াছিস টিকিয়াছে টিকিয়াছেন টিকিয়ে টিকিয়েছ টিকিয়েছি টিকিয়েছিল টিকিয়েছিলাম টিকিয়েছিলি টিকিয়েছিলে টিকিয়েছিলেন টিকিয়েছিলেম টিকিয়েছিলুম টিকিয়েছিস টিকিয়েছে টিকিয়েছেন টিকিয়ো টিকচ্ছ টিকচ্ছি টিকচ্ছিল টিকচ্ছিলাম টিকচ্ছিলি টিকচ্ছিলে টিকচ্ছিলেন টিকচ্ছিলেম টিকচ্ছিলুম টিকচ্ছিস টিকচ্ছে টিকচ্ছেন টিকে টিকেছ টিকেছি টিকেছিল টিকেছিলাম টিকেছিলি টিকেছিলে টিকেছিলেন টিকেছিলেম টিকেছিলুম টিকেছিস টিকেছে টিকেছেন টিকেট টিকেটঘর টিকেটমাষ্টার টিকেটমাস্টার টিকেদার টিকেন টিকো টিকোয়িক টিকছ টিকছি টিকছিল টিকছিলাম টিকছিলি টিকছিলে টিকছিলেন টিকছিলেম টিকছিলুম টিকছিস টিকছে টিকছেন টিকটিক টিকটিকি টিকত টিকতাম টিকতিস টিকতে টিকতেন টিকতেম টিকতুম টিকন টিকুন টিকনি টিকনো টিকব টিকবার টিকবি টিকবে টিকবেন টিকবো টিকর টিকরা টিকল টিকলাম টিকলি টিকলে টিকলেন টিকলেম টিকলো টিকলুম টিকস টিকসই টিকসহি টিখর টিচার টিচার্স টিচিং টিজ টিজিং টিট টিটকার টিটকারি টিটকিরি টিটি টিটিকাকা টিটিভ টিটির টিটেনাস টিট্টিভ টিটপনা টিটস টিণ্ডিশ টিন টিনিয়া টিনচার টিনটিন টিন্ডাল টিপ টিপক টিপুক টিপকল টিপা টিপাই টিপাইও টিপাইত টিপাইতাম টিপাইতিস টিপাইতে টিপাইতেছ টিপাইতেছি টিপাইতেছিল টিপাইতেছিলাম টিপাইতেছিলি টিপাইতেছিলে টিপাইতেছিলেন টিপাইতেছিস টিপাইতেছে টিপাইতেছেন টিপাইতেন টিপাইব টিপাইবার টিপাইবি টিপাইবে টিপাইবেন টিপাইল টিপাইলাম টিপাইলি টিপাইলে টিপাইলেন টিপাইয়া টিপাইয়াছ টিপাইয়াছি টিপাইয়াছিল টিপাইয়াছিলাম টিপাইয়াছিলি টিপাইয়াছিলে টিপাইয়াছিলেন টিপাইয়াছিস টিপাইয়াছে টিপাইয়াছেন টিপাইয়ো টিপাক টিপাকল টিপাটিপি টিপান টিপানো টিপারা টিপার্টি টিপাস টিপি টিপিটিপি টিপিত টিপিতাম টিপিতিস টিপিতে টিপিতেছ টিপিতেছি টিপিতেছিল টিপিতেছিলাম টিপিতেছিলি টিপিতেছিলে টিপিতেছিলেন টিপিতেছিস টিপিতেছে টিপিতেছেন টিপিতেন টিপিব টিপিবার টিপিবি টিপিবে টিপিবেন টিপিল টিপিলাম টিপিলি টিপিলে টিপিলেন টিপিস টিপিয়া টিপিয়াছ টিপিয়াছি টিপিয়াছিল টিপিয়াছিলাম টিপিয়াছিলি টিপিয়াছিলে টিপিয়াছিলেন টিপিয়াছিস টিপিয়াছে টিপিয়াছেন টিপিয়াটিপিয়া টিপিয়ে টিপিয়েছ টিপিয়েছি টিপিয়েছিল টিপিয়েছিলাম টিপিয়েছিলি টিপিয়েছিলে টিপিয়েছিলেন টিপিয়েছিলেম টিপিয়েছিলুম টিপিয়েছিস টিপিয়েছে টিপিয়েছেন টিপিয়ো টিপচ্ছ টিপচ্ছি টিপচ্ছিল টিপচ্ছিলাম টিপচ্ছিলি টিপচ্ছিলে টিপচ্ছিলেন টিপচ্ছিলেম টিপচ্ছিলুম টিপচ্ছিস টিপচ্ছে টিপচ্ছেন টিপে টিপেছ টিপেছি টিপেছিল টিপেছিলাম টিপেছিলি টিপেছিলে টিপেছিলেন টিপেছিলেম টিপেছিলুম টিপেছিস টিপেছে টিপেছেন টিপেটিপে টিপেন টিপো টিপছ টিপছাপ টিপছি টিপছিল টিপছিলাম টিপছিলি টিপছিলে টিপছিলেন টিপছিলেম টিপছিলুম টিপছিস টিপছে টিপছেন টিপটাপ টিপটিপ টিপটিপানি টিপটিপানো টিপটিপুনি টিপটপ টিপত টিপতাম টিপতিস টিপতে টিপতেন টিপতেম টিপতুম টিপন টিপুন টিপনি টিপুনি টিপনো টিপননড়ি টিপননড়ী টিপপোকা টিপ্পনী টিপ্পনীকার টিপপ্রযুক্তি টিপব টিপবাতি টিপবার টিপবি টিপবে টিপবেন টিপবো টিপরাই টিপল টিপলাম টিপলি টিপলে টিপলেন টিপলেম টিপলুম টিপস টিপসই টিপসহি টিপয় টিফিন টিবি টিবিরোগ টিভিযন্ত্র টিভিভবন টিভিসেট টিভিস্বত্ত্ব টিম টিমটিম টির টিলা টিলাগড় টিশার্ট টিসু টিস্যু টিয়া টিয়াপাখি টিয়ার টিয়ারগ্যাস টী টীকা টীকাকার টীকাযুক্ত টীকাটিপ্পনী টীকাদার টীকাভাষ্য টীকাসংবলিত টীট টীটপনা টীপ টীম টে টেং টেংগরা টেংগরি টেংরা টেংরাগেঁটে টেংরামাছ টেংরি টেইল টেইলর টেইলস টেক টেঁক টেক্কা টেক্কাখেলা টেক্কর টেঁকখালি টেকঘড়ি টেঁকঘড়ি টেকা টেঁকা টেকাক টেকাচ্ছ টেকাচ্ছি টেকাচ্ছিল টেকাচ্ছিলাম টেকাচ্ছিলি টেকাচ্ছিলে টেকাচ্ছিলেন টেকাচ্ছিলেম টেকাচ্ছিলুম টেকাচ্ছিস টেকাচ্ছে টেকাচ্ছেন টেকাত টেকাতাম টেকাতিস টেকাতে টেকাতেন টেকাতেম টেকাতুম টেকান টেকানো টেকাব টেকাবার টেকাবি টেকাবে টেকাবেন টেকাবো টেকার টেকারি টেকাল টেকালাম টেকালি টেকালে টেকালেন টেকালেম টেকালো টেকালুম টেকাস টেঁকি টেকেন টেকো টেঁকো টেকটেক টেঁকটেঁক টেঁকটেঁকানো টেকনাফ টেকনিক টেকনিকাল টেকনিক্যাল টেকনিক্যালি টেকনিশিয়ান টেকনো টেকনোলোজি টেকনোলজি টেকনোলজিস্ট টেকবার টেকর টেকস টেকসই টেঁকসই টেক্সাস টেকস্ট টেক্সট টেক্সটাইল টেক্সটবুক টেক্সটবক্স টেকসহি টেকুয়া টেগোর টেঙ্গরা টেঙ্গরামাছ টেঙ্গরি টেঙরা টেঙরামাছ টেঙরি টেঙসটেঙস টেটা টেঁটা টেটারি টেটিয়া টেটন টেঁটন টেটনি টেটনী টেটরা টেঁটরা টেঁটরাওয়ালা টেট্রাক্লোরাইড টেট্রাসাইক্লিন টেড টেডি টেডিবিয়ার টেণ্ডাই টেণ্ডাইমেণ্ডাই টেণ্ডার টেণ্ডনী টেণ্ডল টেন টেনা টেনিস টেনে টেনেচলা টেনেছ টেনেছি টেনেছিল টেনেছিলাম টেনেছিলি টেনেছিলে টেনেছিলেন টেনেছিলেম টেনেছিলুম টেনেছিস টেনেছে টেনেছেন টেনেটুনে টেনেবুনে টেনো টেন্যান্ট টেন্ডার টেন্ডন টেন্ডল টেনশন টেনসর টেপ টেপা টেঁপা টেপাক টেপাকল টেপাগোঁজা টেপাচ্ছ টেপাচ্ছি টেপাচ্ছিল টেপাচ্ছিলাম টেপাচ্ছিলি টেপাচ্ছিলে টেপাচ্ছিলেন টেপাচ্ছিলেম টেপাচ্ছিলুম টেপাচ্ছিস টেপাচ্ছে টেপাচ্ছেন টেপাটিপি টেপাটেপি টেপাত টেপাতাম টেপাতিস টেপাতে টেপাতেন টেপাতেম টেপাতুম টেপান টেপানো টেপাব টেপাবার টেপাবি টেপাবে টেপাবেন টেপাবো টেপারি টেঁপারি টেপাল টেপালাম টেপালি টেপালে টেপালেন টেপালেম টেপালুম টেপাস টেঁপি টেঁপী টেপেন টেপন টেপনো টেপবার টেপরেকর্ড টেপরেকর্ডার টেপসহ টেবিল টেবিলঘড়ি টেবো টেবলেট টেমাই টেমি টেম্পারেচার টেম্পো টেম্পোরারি টেম্পটেশন টেম্পল টেম্পলার টেম্পলেট টেমস টের টেরা টেরাকোটা টেরাচোখ টেরাবাঁকা টেরামি টেরি টেরিকাটা টেরিজন টেরিটোরি টেরিটরি টেরচা টেরছা টেরর টেল টেলক টেলার টেলি টেলিকম টেলিকমিউনিকেশন টেলিগ্রাফ টেলিগ্রাফি টেলিগ্রাম টেলিগ্রামস টেলিছবি টেলিটক টেলিটাইপ টেলিযোগাযোগ টেলিপ্যাথি টেলিপ্রিন্টার টেলিফিল্ম টেলিফোন টেলিফ্যাক্স টেলিভিশন টেলিস্কোপ টেলিস্কোপি টেলে টেলেক্স টেলেগ্রাফ টেলুরিয়াম টেলস টেঁস টেসো টেঁসো টেস্ট টেস্টক্রিকেট টেস্টামেন্ট টেস্টিং টেস্টিস টেস্টটিউব টেস্টতালিকা টেস্টপরীক্ষা টেড়া টেড়ি টেড়িকাটা টেড়িবাগান টেঢ়ঢ়া টো টোং টোংগা টোংগাওয়ালা টোংঘর টোক টোকা টোকাই টোকাটুকি টোকাটোকা টোকান টোকানো টোকাপানা টোকিও টোকচা টোকেইন টোকেন টোকো টোকোদই টোকোমিঠে টোকবার টোকরা টোকরি টোকলা টোগান টোঙ টোঙ্গ টোঙ্গা টোঙ্গার টোঙ্গর টোঙা টোঙর টোটক টোটকা টোটকাটুটকি টোটা টোটাল টোটালি টোটেম টোটো টোটোকোম্পানি টোণ টোন টোনা টোনি টোপ টোপা টোপাকুল টোপাজ টোপান টোপানো টোপী টোপর টোপরপানা টোপলা টোপসা টোবাগো টোব্যাকো টোম্যাটো টোরা টোল টোলুই টোলখাওয়া টোলা টোলপড়া টোলম্যান টোষ্ট টোসা টোস্ট টোস্টা টোস্টবিস্কিট টোড়ি টোড়ী টোয়াইন টোয়াইস টোয়ান টোয়ানো টোয়ত টৌড়ি টৌড়ী টুট টুটকি টুটা ট্যাঁ ট্যাং ট্যাংক ট্যাংকার ট্যাংগসট্যাংগস ট্যাংট্যাং ট্যাংরা ট্যাংরামাছ ট্যাঁক ট্যাঁকঘড়ি ট্যাঁকটেঁকে ট্যাঁকট্যাক ট্যাঁকট্যাঁকান ট্যাকল ট্যাকলিং ট্যাঁকশাল ট্যাক্স ট্যাক্সি ট্যাক্সিওয়ালা ট্যাক্সিচালক ট্যাগ ট্যাগকৃত ট্যাঙ্ক ট্যাঙস ট্যাঙসট্যাঙস ট্যাটু ট্যাটা ট্যাঁটা ট্যাট্যা ট্যাঁট্যাঁ ট্যাটন ট্যাঁটরা টুটান ট্যানারি ট্যানিং ট্যানিন টুটানো ট্যাপা ট্যাঁপারি ট্যাঁফোঁ টুটাফুটা ট্যাব ট্যাবকৃত ট্যাবা ট্যাবলেট ট্যাবলয়েড ট্যামাই টটামট ট্যামটেমি ট্যামট্যাম ট্যামট্যামি ট্যারা ট্যালকম ট্যালেন্ট ট্যাঁস ট্যাসেল ট্যাঁসটেঁসে ট্যাঁসট্যাঁস ট্যাড়া টুটায়ব টটি টুঁটি টুটিল টুটে টট্টর টুটত টুটন টুটব টটমটি ট্যুর ট্যুরিজম টুটল টুটুল টুটসি টুডে টণ্ডু টণ্ডাই টুথব্রাশ টন টুন টনক টনকা টনকনড়া টনা টুনা টনি টুনি টনিক টনটন টুনটুন টনটনানি টনটনি টুনটুনি টনটনিয়া টনটনে টনসিল টপ টুপ টপকা টপকাই টপকাইও টপকাইত টপকাইতাম টপকাইতিস টপকাইতে টপকাইতেছ টপকাইতেছি টপকাইতেছিল টপকাইতেছিলাম টপকাইতেছিলি টপকাইতেছিলে টপকাইতেছিলেন টপকাইতেছিস টপকাইতেছে টপকাইতেছেন টপকাইতেন টপকাইব টপকাইবার টপকাইবি টপকাইবে টপকাইবেন টপকাইল টপকাইলাম টপকাইলি টপকাইলে টপকাইলেন টপকাইয়া টপকাইয়াছ টপকাইয়াছি টপকাইয়াছিল টপকাইয়াছিলাম টপকাইয়াছিলি টপকাইয়াছিলে টপকাইয়াছিলেন টপকাইয়াছিস টপকাইয়াছে টপকাইয়াছেন টপকাইয়ো টপকাক টপকাচ্ছ টপকাচ্ছি টপকাচ্ছিল টপকাচ্ছিলাম টপকাচ্ছিলি টপকাচ্ছিলে টপকাচ্ছিলেন টপকাচ্ছিলেম টপকাচ্ছিলুম টপকাচ্ছিস টপকাচ্ছে টপকাচ্ছেন টপকাত টপকাতাম টপকাতিস টপকাতে টপকাতেন টপকাতেম টপকাতুম টপকান টপকানো টপকাব টপকাবার টপকাবি টপকাবে টপকাবেন টপকাবো টপকাল টপকালাম টপকালি টপকালে টপকালেন টপকালেম টপকালুম টপকাস টপকিয়ে টপকে টপকেছ টপকেছি টপকেছিল টপকেছিলাম টপকেছিলি টপকেছিলে টপকেছিলেন টপকেছিলেম টপকেছিলুম টপকেছিস টপকেছে টপকেছেন টপকো টুপা টপাটপ টপাস টুপি টপিক টপিকস টুপী টপোলজি টপোলজীয় টুপটাপ টপটপ টুপটুপ টপটপানি টপডাউন টপ্পা টপ্পাবাজ টপ্পামারা টপ্পর টুপভুজং টুপভুজঙ্গ টুপুরটুপুর টপস টুপড়ি টফি টব টুব টবাজার টবটব টুবটুব টবর টবর্গ টম টমক টমক্যাট টমাটো টমাস টমিগান টমেটো টম্যাটো টম্যাটোস টুমটাম টমটম টুমটুমি টুমরো টর টুর ট্রু টর্ক টরকানো ট্রাংক ট্রাই ট্রাইটন ট্রাইব ট্রাইব্যুনাল ট্রাইসাইকেল ট্রাউজার ট্রাউজার্স ট্রাউট ট্রাক ট্রাকিয়া ট্রাকোমা ট্রাক্টর ট্রাঙ্ক ট্রাজেডি ট্রানজিট ট্রানজিস্টার ট্রানজেকশন ট্রান্স ট্রান্সকম ট্রান্সজেনিক ট্রান্সন্যাশনাল ট্রান্সপারেন্ট ট্রান্সপারেসি ট্রান্সপোর্ট ট্রান্সপোর্টেশন ট্রান্সফার ট্রান্সফরমার ট্রান্সভার্স ট্রান্সমিউটেশন ট্রান্সমিটার ট্রান্সমিটেড ট্রান্সমিশন ট্রান্সরিসিভার ট্রান্সলেট ট্রাপিজ ট্রাপিজিয়াম ট্রাফিক ট্রাফিকজ্যাম ট্রাফিকপুলিশ ট্রাফোর্ড ট্রাবেকিউলার ট্রাবল ট্রাভেল ট্রাম ট্রামগাড়ি ট্রামডিপো ট্রাম্প ট্রাম্পেট ট্রামলাইন ট্রাষ্ট ট্রাষ্টি ট্রাস্ট ট্রাস্টি ট্রাস্টিজ ট্রাস্টিশীপ ট্রায়াঙ্গল ট্রায়াল ট্রায়িং ট্রায়েল ট্রায়োড ট্রি ট্রিগার ট্রিটমেন্ট ট্রিনিটি ট্রিপ্টোফ্যান ট্রিপলেট ট্রিবিউট ট্রিবিউটস ট্রিভিয়া ট্রিলিয়ন ট্রিলজি টুরিস্ট টর্চ টর্চার ট্রে ট্রেইটর ট্রেজার ট্রেজারি ট্রেজার্স ট্রেঞ্চ টরেটক্কা ট্রেড ট্রেডিং ট্রেডমার্ক ট্রেন ট্রেনিং ট্রেনচলাচল টরেন্ট ট্রেন্ট ট্রেনযাত্রা টরেন্টো ট্রেনলাইন ট্রেন্স ট্রেলার ট্রেস ট্রেসার ট্রেসিং ট্রেসপাস ট্রেসপাসিং টরোকোলিক ট্রোজান ট্র্যাক ট্র্যাকিং ট্র্যাক্ট ট্র্যাক্টস ট্র্যাঙ্ক ট্র্যাজিক ট্র্যাজেডি ট্র্যাডিশন ট্র্যাডিশনাল ট্র্যান্স ট্র্যান্সফার ট্র্যাপ ট্র্যাফিক ট্র্যাফিকজ্যাম ট্র্যাফিকপুলিশ ট্র্যাফিকলাইট ট্র্যাভেল ট্র্যাম্প টরটর ট্রুথ টুর্নামেন্ট টর্নি টর্নেডো ট্রুপার্স ট্রপিক ট্রপিকাল ট্রপিক্যাল টর্পেডো ট্রপোমণ্ডল ট্রফি ট্রুম্যান ট্রলার ট্রলি ট্রয় টল টুল টলুক টলা টলাই টলাইও টলাইত টলাইতাম টলাইতিস টলাইতে টলাইতেছ টলাইতেছি টলাইতেছিল টলাইতেছিলাম টলাইতেছিলি টলাইতেছিলে টলাইতেছিলেন টলাইতেছিস টলাইতেছে টলাইতেছেন টলাইতেন টলাইব টলাইবার টলাইবি টলাইবে টলাইবেন টলাইল টলাইলাম টলাইলি টলাইলে টলাইলেন টলাইয়া টলাইয়াছ টলাইয়াছি টলাইয়াছিল টলাইয়াছিলাম টলাইয়াছিলি টলাইয়াছিলে টলাইয়াছিলেন টলাইয়াছিস টলাইয়াছে টলাইয়াছেন টলাইয়ো টলাও টলাক টলাচ্ছ টলাচ্ছি টলাচ্ছিল টলাচ্ছিলাম টলাচ্ছিলি টলাচ্ছিলে টলাচ্ছিলেন টলাচ্ছিলেম টলাচ্ছিলুম টলাচ্ছিস টলাচ্ছে টলাচ্ছেন টলাটলি টলাত টলাতাম টলাতিস টলাতে টলাতেন টলাতেম টলাতুম টলান টলানো টলাব টলাবার টলাবি টলাবে টলাবেন টলাবো টলারেট টলারেন্স টলাল টলালাম টলালি টলালে টলালেন টলালেম টলালুম টলাস টলি টুলি টলিত টলিতাম টলিতিস টলিতে টলিতেছ টলিতেছি টলিতেছিল টলিতেছিলাম টলিতেছিলি টলিতেছিলে টলিতেছিলেন টলিতেছিস টলিতেছে টলিতেছেন টলিতেন টলিব টলিবার টলিবি টলিবে টলিবেন টলিল টলিলাম টলিলি টলিলে টলিলেন টলিস টলিয়া টলিয়াছ টলিয়াছি টলিয়াছিল টলিয়াছিলাম টলিয়াছিলি টলিয়াছিলে টলিয়াছিলেন টলিয়াছিস টলিয়াছে টলিয়াছেন টলিয়ে টলিয়েছ টলিয়েছি টলিয়েছিল টলিয়েছিলাম টলিয়েছিলি টলিয়েছিলে টলিয়েছিলেন টলিয়েছিলেম টলিয়েছিলুম টলিয়েছিস টলিয়েছে টলিয়েছেন টলিয়ো টুলী টলে টলেছ টলেছি টলেছিল টলেছিলাম টলেছিলি টলেছিলে টলেছিলেন টলেছিলেম টলেছিলুম টলেছিস টলেছে টলেছেন টলেন টলেমী টলো টুলো টুলোপণ্ডিত টলোমলো টলছ টলছি টলছিল টলছিলাম টলছিলি টলছিলে টলছিলেন টলছিলেম টলছিলুম টলছিস টলছে টলছেন টলট্টল টলটল টুলটুল টলটলা টলটলানি টলটলানো টলটলায়মান টলত টলতাম টলতিস টলতে টলতেন টলতেম টলতুম টলন টলুন টলব টলবার টুলবার টলবি টলবে টলবেন টলবো টলবল টলবলানি টলবলানো টলম্যান টলমটল টলমল টলমলা টলমলানি টলমলানো টলমলায়মান টলল টললাম টললি টললে টললেন টললেম টললুম টলস টুলস টুঁশব্দ টস টুস টসকা টসকাই টসকাইও টসকাইত টসকাইতাম টসকাইতিস টসকাইতে টসকাইতেছ টসকাইতেছি টসকাইতেছিল টসকাইতেছিলাম টসকাইতেছিলি টসকাইতেছিলে টসকাইতেছিলেন টসকাইতেছিস টসকাইতেছে টসকাইতেছেন টসকাইতেন টসকাইব টসকাইবার টসকাইবি টসকাইবে টসকাইবেন টসকাইল টসকাইলাম টসকাইলি টসকাইলে টসকাইলেন টসকাইয়া টসকাইয়াছ টসকাইয়াছি টসকাইয়াছিল টসকাইয়াছিলাম টসকাইয়াছিলি টসকাইয়াছিলে টসকাইয়াছিলেন টসকাইয়াছিস টসকাইয়াছে টসকাইয়াছেন টসকাইয়ো টসকাক টসকাচ্ছ টসকাচ্ছি টসকাচ্ছিল টসকাচ্ছিলাম টসকাচ্ছিলি টসকাচ্ছিলে টসকাচ্ছিলেন টসকাচ্ছিলেম টসকাচ্ছিলুম টসকাচ্ছিস টসকাচ্ছে টসকাচ্ছেন টসকাত টসকাতাম টসকাতিস টসকাতে টসকাতেন টসকাতেম টসকাতুম টসকান টুসকানি টসকানো টসকাব টসকাবার টসকাবি টসকাবে টসকাবেন টসকাবো টসকাল টসকালাম টসকালি টসকালে টসকালেন টসকালেম টসকালুম টসকাস টুসকি টুস্কি টুস্কিরমাল টসকে টসকেছ টসকেছি টসকেছিল টসকেছিলাম টসকেছিলি টসকেছিলে টসকেছিলেন টসকেছিলেম টসকেছিলুম টসকেছিস টসকেছে টসকেছেন টসকো টুসি টসটস টুসটুস টসটসানি টসটসানো টহল টহলান টহলানো টহলিয়া টহলদানকারী টহলদার টহলদারি টয় টুয়ানো টুয়েন্টি টুয়েলভ টুয়েলভথ টয়োটা টয়লেট".split(" "),
              w_tth: "ঠ ঠং ঠুং ঠুংগি ঠংঠং ঠুংঠুং ঠুংরি ঠক ঠুক ঠকুক ঠুকক ঠুকুক ঠক্কর ঠক্কুর ঠকা ঠুকা ঠকাই ঠুকাই ঠকাইও ঠুকাইও ঠকাইত ঠুকাইত ঠকাইতাম ঠুকাইতাম ঠকাইতিস ঠুকাইতিস ঠকাইতে ঠুকাইতে ঠকাইতেছ ঠুকাইতেছ ঠকাইতেছি ঠুকাইতেছি ঠকাইতেছিল ঠুকাইতেছিল ঠকাইতেছিলাম ঠুকাইতেছিলাম ঠকাইতেছিলি ঠুকাইতেছিলি ঠকাইতেছিলে ঠুকাইতেছিলে ঠকাইতেছিলেন ঠুকাইতেছিলেন ঠকাইতেছিস ঠুকাইতেছিস ঠকাইতেছে ঠুকাইতেছে ঠকাইতেছেন ঠুকাইতেছেন ঠকাইতেন ঠুকাইতেন ঠকাইব ঠুকাইব ঠকাইবার ঠুকাইবার ঠকাইবি ঠুকাইবি ঠকাইবে ঠুকাইবে ঠকাইবেন ঠুকাইবেন ঠকাইল ঠুকাইল ঠকাইলাম ঠুকাইলাম ঠকাইলি ঠুকাইলি ঠকাইলে ঠুকাইলে ঠকাইলেন ঠুকাইলেন ঠকাইয়া ঠুকাইয়া ঠকাইয়াছ ঠুকাইয়াছ ঠকাইয়াছি ঠুকাইয়াছি ঠকাইয়াছিল ঠুকাইয়াছিল ঠকাইয়াছিলাম ঠুকাইয়াছিলাম ঠকাইয়াছিলি ঠুকাইয়াছিলি ঠকাইয়াছিলে ঠুকাইয়াছিলে ঠকাইয়াছিলেন ঠুকাইয়াছিলেন ঠকাইয়াছিস ঠুকাইয়াছিস ঠকাইয়াছে ঠুকাইয়াছে ঠকাইয়াছেন ঠুকাইয়াছেন ঠকাইয়ো ঠুকাইয়ো ঠকাক ঠুকাক ঠকাচ্ছ ঠকাচ্ছি ঠকাচ্ছিল ঠকাচ্ছিলাম ঠকাচ্ছিলি ঠকাচ্ছিলে ঠকাচ্ছিলেন ঠকাচ্ছিলেম ঠকাচ্ছিলুম ঠকাচ্ছিস ঠকাচ্ছে ঠকাচ্ছেন ঠুকাঠুকি ঠুকাঠোকি ঠকাত ঠকাতাম ঠকাতিস ঠকাতে ঠকাতেন ঠকাতেম ঠকাতুম ঠকান ঠুকান ঠকানে ঠকানো ঠুকানো ঠকাব ঠকাবার ঠকাবি ঠকাবে ঠকাবেন ঠকাবো ঠকাম ঠকামি ঠকামো ঠকাল ঠকালাম ঠকালি ঠকালে ঠকালেন ঠকালেম ঠকালুম ঠকাস ঠুকাস ঠকায় ঠুকায় ঠকায়নি ঠকি ঠুকি ঠকিত ঠুকিত ঠকিতাম ঠুকিতাম ঠকিতিস ঠুকিতিস ঠকিতে ঠুকিতে ঠকিতেছ ঠুকিতেছ ঠকিতেছি ঠুকিতেছি ঠকিতেছিল ঠুকিতেছিল ঠকিতেছিলাম ঠুকিতেছিলাম ঠকিতেছিলি ঠুকিতেছিলি ঠকিতেছিলে ঠুকিতেছিলে ঠকিতেছিলেন ঠুকিতেছিলেন ঠকিতেছিস ঠুকিতেছিস ঠকিতেছে ঠুকিতেছে ঠকিতেছেন ঠুকিতেছেন ঠকিতেন ঠুকিতেন ঠকিব ঠুকিব ঠকিবার ঠুকিবার ঠকিবি ঠুকিবি ঠকিবে ঠুকিবে ঠকিবেন ঠুকিবেন ঠকিল ঠুকিল ঠকিলাম ঠুকিলাম ঠকিলি ঠুকিলি ঠকিলে ঠুকিলে ঠকিলেন ঠুকিলেন ঠকিস ঠুকিস ঠকিয়া ঠুকিয়া ঠকিয়াছ ঠুকিয়াছ ঠকিয়াছি ঠুকিয়াছি ঠকিয়াছিল ঠুকিয়াছিল ঠকিয়াছিলাম ঠুকিয়াছিলাম ঠকিয়াছিলি ঠুকিয়াছিলি ঠকিয়াছিলে ঠুকিয়াছিলে ঠকিয়াছিলেন ঠুকিয়াছিলেন ঠকিয়াছিস ঠুকিয়াছিস ঠকিয়াছে ঠুকিয়াছে ঠকিয়াছেন ঠুকিয়াছেন ঠকিয়ে ঠুকিয়ে ঠকিয়েছ ঠুকিয়েছ ঠকিয়েছি ঠুকিয়েছি ঠকিয়েছিল ঠুকিয়েছিল ঠকিয়েছিলাম ঠুকিয়েছিলাম ঠকিয়েছিলি ঠুকিয়েছিলি ঠকিয়েছিলে ঠুকিয়েছিলে ঠকিয়েছিলেন ঠুকিয়েছিলেন ঠকিয়েছিলেম ঠুকিয়েছিলেম ঠকিয়েছিলুম ঠুকিয়েছিলুম ঠকিয়েছিস ঠুকিয়েছিস ঠকিয়েছে ঠুকিয়েছে ঠকিয়েছেন ঠুকিয়েছেন ঠকিয়ো ঠুকিয়ো ঠুকচ্ছ ঠুকচ্ছি ঠুকচ্ছিল ঠুকচ্ছিলাম ঠুকচ্ছিলি ঠুকচ্ছিলে ঠুকচ্ছিলেন ঠুকচ্ছিলেম ঠুকচ্ছিলুম ঠুকচ্ছিস ঠুকচ্ছে ঠুকচ্ছেন ঠকে ঠুকে ঠকেছ ঠুকেছ ঠকেছি ঠুকেছি ঠকেছিল ঠুকেছিল ঠকেছিলাম ঠুকেছিলাম ঠকেছিলি ঠুকেছিলি ঠকেছিলে ঠুকেছিলে ঠকেছিলেন ঠুকেছিলেন ঠকেছিলেম ঠুকেছিলেম ঠকেছিলুম ঠুকেছিলুম ঠকেছিস ঠুকেছিস ঠকেছে ঠুকেছে ঠকেছেন ঠুকেছেন ঠকেন ঠুকেন ঠকো ঠুকো ঠকছ ঠুকছ ঠকছি ঠুকছি ঠকছিল ঠুকছিল ঠকছিলাম ঠুকছিলাম ঠকছিলি ঠুকছিলি ঠকছিলে ঠুকছিলে ঠকছিলেন ঠুকছিলেন ঠকছিলেম ঠুকছিলেম ঠকছিলুম ঠুকছিলুম ঠকছিস ঠুকছিস ঠকছে ঠুকছে ঠকছেন ঠুকছেন ঠকঠক ঠুকঠুক ঠকঠকান ঠকঠকানি ঠকঠকানো ঠুকঠুকানো ঠকঠকালে ঠকঠকি ঠকত ঠুকত ঠকতাম ঠুকতাম ঠকতিস ঠুকতিস ঠকতে ঠুকতে ঠকতেন ঠুকতেন ঠকতেম ঠুকতেম ঠকতুম ঠুকতুম ঠকুন ঠুকন ঠুকুন ঠুকুনি ঠুকনো ঠকব ঠুকব ঠকবার ঠুকবার ঠকবি ঠুকবি ঠকবে ঠুকবে ঠকবেন ঠুকবেন ঠকবো ঠুকবো ঠুকর ঠুকরক ঠুকরা ঠুকরাই ঠুকরাইও ঠুকরাইত ঠুকরাইতাম ঠুকরাইতিস ঠুকরাইতে ঠুকরাইতেছ ঠুকরাইতেছি ঠুকরাইতেছিল ঠুকরাইতেছিলাম ঠুকরাইতেছিলি ঠুকরাইতেছিলে ঠুকরাইতেছিলেন ঠুকরাইতেছিস ঠুকরাইতেছে ঠুকরাইতেছেন ঠুকরাইতেন ঠুকরাইব ঠুকরাইবার ঠুকরাইবি ঠুকরাইবে ঠুকরাইবেন ঠুকরাইল ঠুকরাইলাম ঠুকরাইলি ঠুকরাইলে ঠুকরাইলেন ঠুকরাইয়া ঠুকরাইয়াছ ঠুকরাইয়াছি ঠুকরাইয়াছিল ঠুকরাইয়াছিলাম ঠুকরাইয়াছিলি ঠুকরাইয়াছিলে ঠুকরাইয়াছিলেন ঠুকরাইয়াছিস ঠুকরাইয়াছে ঠুকরাইয়াছেন ঠুকরাইয়ো ঠুকরাক ঠুকরান ঠুকরানো ঠুকরাস ঠুকরায় ঠুকরি ঠুকরিয়ে ঠুকরিয়েছ ঠুকরিয়েছি ঠুকরিয়েছিল ঠুকরিয়েছিলাম ঠুকরিয়েছিলি ঠুকরিয়েছিলে ঠুকরিয়েছিলেন ঠুকরিয়েছিলেম ঠুকরিয়েছিলুম ঠুকরিয়েছিস ঠুকরিয়েছে ঠুকরিয়েছেন ঠুকরিয়ো ঠুকরচ্ছ ঠুকরচ্ছি ঠুকরচ্ছিল ঠুকরচ্ছিলাম ঠুকরচ্ছিলি ঠুকরচ্ছিলে ঠুকরচ্ছিলেন ঠুকরচ্ছিলেম ঠুকরচ্ছিলুম ঠুকরচ্ছিস ঠুকরচ্ছে ঠুকরচ্ছেন ঠুকরে ঠুকরেছ ঠুকরেছি ঠুকরেছিল ঠুকরেছিলাম ঠুকরেছিলি ঠুকরেছিলে ঠুকরেছিলেন ঠুকরেছিলেম ঠুকরেছিলুম ঠুকরেছিস ঠুকরেছে ঠুকরেছেন ঠুকরো ঠুকরোবার ঠুকরত ঠুকরতাম ঠুকরতিস ঠুকরতে ঠুকরতেন ঠুকরতেম ঠুকরতুম ঠুকরন ঠুকরনো ঠুকরব ঠুকরবি ঠুকরবে ঠুকরবেন ঠুকরবো ঠুকরল ঠুকরলাম ঠুকরলি ঠুকরলে ঠুকরলেন ঠুকরলেম ঠুকরলুম ঠুকরস ঠকল ঠুকল ঠকলাম ঠুকলাম ঠকলি ঠুকলি ঠকলে ঠুকলে ঠকলেন ঠুকলেন ঠকলেম ঠুকলেম ঠকলুম ঠুকলুম ঠুকস ঠগ ঠগি ঠগন ঠুঙ্গি ঠুঙি ঠা ঠাই ঠাঁই ঠাঁইঠাঁই ঠাউর ঠাউরে ঠাউরেছ ঠাউরেছি ঠাউরেছিল ঠাউরেছিলাম ঠাউরেছিলি ঠাউরেছিলে ঠাউরেছিলেন ঠাউরেছিলেম ঠাউরেছিলুম ঠাউরেছিস ঠাউরেছে ঠাউরেছেন ঠাউরো ঠাওর ঠাওরা ঠাওরাই ঠাওরাইও ঠাওরাইত ঠাওরাইতাম ঠাওরাইতিস ঠাওরাইতে ঠাওরাইতেছ ঠাওরাইতেছি ঠাওরাইতেছিল ঠাওরাইতেছিলাম ঠাওরাইতেছিলি ঠাওরাইতেছিলে ঠাওরাইতেছিলেন ঠাওরাইতেছিস ঠাওরাইতেছে ঠাওরাইতেছেন ঠাওরাইতেন ঠাওরাইব ঠাওরাইবার ঠাওরাইবি ঠাওরাইবে ঠাওরাইবেন ঠাওরাইল ঠাওরাইলাম ঠাওরাইলি ঠাওরাইলে ঠাওরাইলেন ঠাওরাইয়া ঠাওরাইয়াছ ঠাওরাইয়াছি ঠাওরাইয়াছিল ঠাওরাইয়াছিলাম ঠাওরাইয়াছিলি ঠাওরাইয়াছিলে ঠাওরাইয়াছিলেন ঠাওরাইয়াছিস ঠাওরাইয়াছে ঠাওরাইয়াছেন ঠাওরাইয়ো ঠাওরাক ঠাওরাচ্ছ ঠাওরাচ্ছি ঠাওরাচ্ছিল ঠাওরাচ্ছিলাম ঠাওরাচ্ছিলি ঠাওরাচ্ছিলে ঠাওরাচ্ছিলেন ঠাওরাচ্ছিলেম ঠাওরাচ্ছিলুম ঠাওরাচ্ছিস ঠাওরাচ্ছে ঠাওরাচ্ছেন ঠাওরাত ঠাওরাতাম ঠাওরাতিস ঠাওরাতে ঠাওরাতেন ঠাওরাতেম ঠাওরাতুম ঠাওরান ঠাওরানো ঠাওরাব ঠাওরাবার ঠাওরাবি ঠাওরাবে ঠাওরাবেন ঠাওরাবো ঠাওরাল ঠাওরালাম ঠাওরালি ঠাওরালে ঠাওরালেন ঠাওরালেম ঠাওরালুম ঠাওরাস ঠাক ঠাকঠমক ঠাকুমা ঠাকুর ঠাকুরগাঁ ঠাকুরগাঁও ঠাকুরগঞ্জ ঠাকুরঘর ঠাকরান ঠাকুরানী ঠাকুরাল ঠাকুরালি ঠাকুরচাকর ঠাকুরজামাই ঠাকুরঝি ঠাকুরদা ঠাকুরদাদা ঠাকুরদালান ঠাকুরদাস ঠাকুরদেবতা ঠাকুরদর্শন ঠাকরুন ঠাকুরপো ঠাকুরপূজা ঠাকুরবাড়ি ঠাকুরমা ঠাকুরমশাই ঠাকুরমহাশয় ঠাকুররচিত ঠাকুরসেবা ঠাঞি ঠাট ঠাটা ঠাটারি ঠাটারিবাজার ঠাট্টা ঠাট্টাতামাসা ঠাটঠমক ঠাটবাট ঠাঠা ঠাণ্ডা ঠাণ্ডাগরম ঠাণ্ডাজনিত ঠাণ্ডাপানি ঠাণ্ডাবাতাস ঠাণ্ডাবোধ ঠাণ্ডাভাব ঠান ঠানদি ঠানদিদি ঠাম ঠার ঠারা ঠারাঠারি ঠারেঠোরে ঠাশ ঠাশঠাশ ঠাস ঠাসুক ঠাসা ঠাঁসা ঠাসাঠাসি ঠাঁসাঠাসি ঠাসানো ঠাসি ঠাসিত ঠাসিতাম ঠাসিতিস ঠাসিতে ঠাসিতেছ ঠাসিতেছি ঠাসিতেছিল ঠাসিতেছিলাম ঠাসিতেছিলি ঠাসিতেছিলে ঠাসিতেছিলেন ঠাসিতেছিস ঠাসিতেছে ঠাসিতেছেন ঠাসিতেন ঠাসিব ঠাসিবার ঠাসিবি ঠাসিবে ঠাসিবেন ঠাসিল ঠাসিলাম ঠাসিলি ঠাসিলে ঠাসিলেন ঠাসিস ঠাসিয়া ঠাসিয়াছ ঠাসিয়াছি ঠাসিয়াছিল ঠাসিয়াছিলাম ঠাসিয়াছিলি ঠাসিয়াছিলে ঠাসিয়াছিলেন ঠাসিয়াছিস ঠাসিয়াছে ঠাসিয়াছেন ঠাসিয়ো ঠাসে ঠাসেন ঠাসছ ঠাসছি ঠাসছিল ঠাসছিলাম ঠাসছিলি ঠাসছিলে ঠাসছিলেন ঠাসছিলেম ঠাসছিলুম ঠাসছিস ঠাসছে ঠাসছেন ঠাসঠাস ঠাসত ঠাসতাম ঠাসতিস ঠাসতে ঠাসতেন ঠাসতেম ঠাসতুম ঠাসুন ঠাসব ঠাসবার ঠাসবি ঠাসবে ঠাসবেন ঠাসবো ঠাসবুনান ঠাসবুনানি ঠাসবুনোন ঠাসবুনট ঠাসবুনটযুক্ত ঠাসবুনন ঠাসবুননি ঠাসবুনুনি ঠাসবুননযুক্ত ঠাসল ঠাসলাম ঠাসলি ঠাসলে ঠাসলেন ঠাসলেম ঠাসলুম ঠাহর ঠাহরান ঠাহরানো ঠাড় ঠাড়া ঠায় ঠিক ঠিককথা ঠিককরা ঠিকা ঠিকাচুক্তি ঠিকাছে ঠিকাঝি ঠিকাদার ঠিকাদারি ঠিকানা ঠিকাবন্দোবস্ত ঠিকারি ঠিকালোক ঠিকি ঠিকে ঠিকেঝি ঠিকেদার ঠিকেদারি ঠিকেবন্দোবস্ত ঠিকেভুল ঠিকেলোক ঠিকুজি ঠিকুজিকোষ্ঠী ঠিকুজী ঠিকুজীকোষ্ঠী ঠিকঠাক ঠিকঠিক ঠিকঠিকানা ঠিকঠিকানো ঠিকপথ ঠিকভাবে ঠিকমত ঠিকমতো ঠিকমতন ঠিকর ঠিকরক ঠিকরা ঠিকরাই ঠিকরাইও ঠিকরাইত ঠিকরাইতাম ঠিকরাইতিস ঠিকরাইতে ঠিকরাইতেছ ঠিকরাইতেছি ঠিকরাইতেছিল ঠিকরাইতেছিলাম ঠিকরাইতেছিলি ঠিকরাইতেছিলে ঠিকরাইতেছিলেন ঠিকরাইতেছিস ঠিকরাইতেছে ঠিকরাইতেছেন ঠিকরাইতেন ঠিকরাইব ঠিকরাইবার ঠিকরাইবি ঠিকরাইবে ঠিকরাইবেন ঠিকরাইল ঠিকরাইলাম ঠিকরাইলি ঠিকরাইলে ঠিকরাইলেন ঠিকরাইয়া ঠিকরাইয়াছ ঠিকরাইয়াছি ঠিকরাইয়াছিল ঠিকরাইয়াছিলাম ঠিকরাইয়াছিলি ঠিকরাইয়াছিলে ঠিকরাইয়াছিলেন ঠিকরাইয়াছিস ঠিকরাইয়াছে ঠিকরাইয়াছেন ঠিকরাইয়ো ঠিকরাক ঠিকরান ঠিকরানো ঠিকরাস ঠিকরচ্ছ ঠিকরচ্ছি ঠিকরচ্ছিল ঠিকরচ্ছিলাম ঠিকরচ্ছিলি ঠিকরচ্ছিলে ঠিকরচ্ছিলেন ঠিকরচ্ছিলেম ঠিকরচ্ছিলুম ঠিকরচ্ছিস ঠিকরচ্ছে ঠিকরচ্ছেন ঠিকরে ঠিকরেছ ঠিকরেছি ঠিকরেছিল ঠিকরেছিলাম ঠিকরেছিলি ঠিকরেছিলে ঠিকরেছিলেন ঠিকরেছিলেম ঠিকরেছিলুম ঠিকরেছিস ঠিকরেছে ঠিকরেছেন ঠিকরো ঠিকরোবার ঠিকরত ঠিকরতাম ঠিকরতিস ঠিকরতে ঠিকরতেন ঠিকরতেম ঠিকরতুম ঠিকরন ঠিকরনো ঠিকরব ঠিকরবি ঠিকরবে ঠিকরবেন ঠিকরবো ঠিকরল ঠিকরলাম ঠিকরলি ঠিকরলে ঠিকরলেন ঠিকরলেম ঠিকরলুম ঠিকরস ঠিকরয় ঠিলা ঠিলি ঠিলী ঠিশমিশ ঠেং ঠেংখোঁড়া ঠেংভাঙা ঠেক ঠেকুক ঠেকা ঠেকাই ঠেকাইও ঠেকাইত ঠেকাইতাম ঠেকাইতিস ঠেকাইতে ঠেকাইতেছ ঠেকাইতেছি ঠেকাইতেছিল ঠেকাইতেছিলাম ঠেকাইতেছিলি ঠেকাইতেছিলে ঠেকাইতেছিলেন ঠেকাইতেছিস ঠেকাইতেছে ঠেকাইতেছেন ঠেকাইতেন ঠেকাইব ঠেকাইবার ঠেকাইবি ঠেকাইবে ঠেকাইবেন ঠেকাইল ঠেকাইলাম ঠেকাইলায় ঠেকাইলি ঠেকাইলেন ঠেকাইয়া ঠেকাইয়াছ ঠেকাইয়াছি ঠেকাইয়াছিল ঠেকাইয়াছিলাম ঠেকাইয়াছিলি ঠেকাইয়াছিলে ঠেকাইয়াছিলেন ঠেকাইয়াছিস ঠেকাইয়াছে ঠেকাইয়াছেন ঠেকাইয়ো ঠেকাক ঠেকাচ্ছ ঠেকাচ্ছি ঠেকাচ্ছিল ঠেকাচ্ছিলাম ঠেকাচ্ছিলি ঠেকাচ্ছিলে ঠেকাচ্ছিলেন ঠেকাচ্ছিলেম ঠেকাচ্ছিলুম ঠেকাচ্ছিস ঠেকাচ্ছে ঠেকাচ্ছেন ঠেকাঠেকি ঠেকাত ঠেকাতাম ঠেকাতিস ঠেকাতে ঠেকাতেন ঠেকাতেম ঠেকাতুম ঠেকান ঠেকানা ঠেকানো ঠেকানোর ঠেকাব ঠেকাবার ঠেকাবি ঠেকাবে ঠেকাবেঠেকা ঠেকাবেন ঠেকাবো ঠেকামেয়ে ঠেকার ঠেকারি ঠেকারে ঠেকাল ঠেকালাগা ঠেকালাম ঠেকালি ঠেকালে ঠেকালেন ঠেকালেম ঠেকালুম ঠেকাস ঠেকায় ঠেকায়পড়া ঠেকি ঠেকিত ঠেকিতাম ঠেকিতিস ঠেকিতে ঠেকিতেছ ঠেকিতেছি ঠেকিতেছিল ঠেকিতেছিলাম ঠেকিতেছিলি ঠেকিতেছিলে ঠেকিতেছিলেন ঠেকিতেছিস ঠেকিতেছে ঠেকিতেছেন ঠেকিতেন ঠেকিব ঠেকিবার ঠেকিবি ঠেকিবে ঠেকিবেন ঠেকিল ঠেকিলাম ঠেকিলি ঠেকিলে ঠেকিলেন ঠেকিস ঠেকিয়া ঠেকিয়াছ ঠেকিয়াছি ঠেকিয়াছিল ঠেকিয়াছিলাম ঠেকিয়াছিলি ঠেকিয়াছিলে ঠেকিয়াছিলেন ঠেকিয়াছিস ঠেকিয়াছে ঠেকিয়াছেন ঠেকিয়ে ঠেকিয়েছ ঠেকিয়েছি ঠেকিয়েছিল ঠেকিয়েছিলাম ঠেকিয়েছিলি ঠেকিয়েছিলে ঠেকিয়েছিলেন ঠেকিয়েছিলেম ঠেকিয়েছিলুম ঠেকিয়েছিস ঠেকিয়েছে ঠেকিয়েছেন ঠেকিয়ো ঠেকে ঠেকেছ ঠেকেছি ঠেকেছিল ঠেকেছিলাম ঠেকেছিলি ঠেকেছিলে ঠেকেছিলেন ঠেকেছিলেম ঠেকেছিলুম ঠেকেছিস ঠেকেছে ঠেকেছেন ঠেকেন ঠেকো ঠেকছ ঠেকছি ঠেকছিল ঠেকছিলাম ঠেকছিলি ঠেকছিলে ঠেকছিলেন ঠেকছিলেম ঠেকছিলুম ঠেকছিস ঠেকছে ঠেকছেন ঠেকত ঠেকতাম ঠেকতিস ঠেকতে ঠেকতেন ঠেকতেম ঠেকতুম ঠেকুন ঠেকনা ঠেকনো ঠেকব ঠেকবার ঠেকবি ঠেকবে ঠেকবেন ঠেকবো ঠেকরা ঠেকল ঠেকলাম ঠেকলি ঠেকলে ঠেকলেন ঠেকলেম ঠেকলুম ঠেঙ ঠেঙখোঁড়া ঠেঙ্গা ঠেঙ্গাই ঠেঙ্গাইও ঠেঙ্গাইত ঠেঙ্গাইতাম ঠেঙ্গাইতিস ঠেঙ্গাইতে ঠেঙ্গাইতেছ ঠেঙ্গাইতেছি ঠেঙ্গাইতেছিল ঠেঙ্গাইতেছিলাম ঠেঙ্গাইতেছিলি ঠেঙ্গাইতেছিলে ঠেঙ্গাইতেছিলেন ঠেঙ্গাইতেছিস ঠেঙ্গাইতেছে ঠেঙ্গাইতেছেন ঠেঙ্গাইতেন ঠেঙ্গাইব ঠেঙ্গাইবার ঠেঙ্গাইবি ঠেঙ্গাইবে ঠেঙ্গাইবেন ঠেঙ্গাইল ঠেঙ্গাইলাম ঠেঙ্গাইলি ঠেঙ্গাইলে ঠেঙ্গাইলেন ঠেঙ্গাইয়া ঠেঙ্গাইয়াছ ঠেঙ্গাইয়াছি ঠেঙ্গাইয়াছিল ঠেঙ্গাইয়াছিলাম ঠেঙ্গাইয়াছিলি ঠেঙ্গাইয়াছিলে ঠেঙ্গাইয়াছিলেন ঠেঙ্গাইয়াছিস ঠেঙ্গাইয়াছে ঠেঙ্গাইয়াছেন ঠেঙ্গাইয়ো ঠেঙ্গাও ঠেঙ্গাক ঠেঙ্গাচ্ছ ঠেঙ্গাচ্ছি ঠেঙ্গাচ্ছিল ঠেঙ্গাচ্ছিলাম ঠেঙ্গাচ্ছিলি ঠেঙ্গাচ্ছিলে ঠেঙ্গাচ্ছিলেন ঠেঙ্গাচ্ছিলেম ঠেঙ্গাচ্ছিলুম ঠেঙ্গাচ্ছিস ঠেঙ্গাচ্ছে ঠেঙ্গাচ্ছেন ঠেঙ্গাঠেঙ্গি ঠেঙ্গাত ঠেঙ্গাতাম ঠেঙ্গাতিস ঠেঙ্গাতে ঠেঙ্গাতেন ঠেঙ্গাতেম ঠেঙ্গাতুম ঠেঙ্গান ঠেঙ্গানি ঠেঙ্গানো ঠেঙ্গাব ঠেঙ্গাবার ঠেঙ্গাবি ঠেঙ্গাবে ঠেঙ্গাবেন ঠেঙ্গাবো ঠেঙ্গাল ঠেঙ্গালাম ঠেঙ্গালি ঠেঙ্গালে ঠেঙ্গালেন ঠেঙ্গালেম ঠেঙ্গালুম ঠেঙ্গাস ঠেঙ্গাড়ে ঠেঙ্গি ঠেঙ্গিয়ে ঠেঙ্গিয়েছ ঠেঙ্গিয়েছি ঠেঙ্গিয়েছিল ঠেঙ্গিয়েছিলাম ঠেঙ্গিয়েছিলি ঠেঙ্গিয়েছিলে ঠেঙ্গিয়েছিলেন ঠেঙ্গিয়েছিলেম ঠেঙ্গিয়েছিলুম ঠেঙ্গিয়েছিস ঠেঙ্গিয়েছে ঠেঙ্গিয়েছেন ঠেঙ্গিয়ো ঠেঙ্গে ঠেঙা ঠেঙাই ঠেঙাইও ঠেঙাইত ঠেঙাইতাম ঠেঙাইতিস ঠেঙাইতে ঠেঙাইতেছ ঠেঙাইতেছি ঠেঙাইতেছিল ঠেঙাইতেছিলাম ঠেঙাইতেছিলি ঠেঙাইতেছিলে ঠেঙাইতেছিলেন ঠেঙাইতেছিস ঠেঙাইতেছে ঠেঙাইতেছেন ঠেঙাইতেন ঠেঙাইব ঠেঙাইবার ঠেঙাইবি ঠেঙাইবে ঠেঙাইবেন ঠেঙাইল ঠেঙাইলাম ঠেঙাইলি ঠেঙাইলে ঠেঙাইলেন ঠেঙাইয়া ঠেঙাইয়াছ ঠেঙাইয়াছি ঠেঙাইয়াছিল ঠেঙাইয়াছিলাম ঠেঙাইয়াছিলি ঠেঙাইয়াছিলে ঠেঙাইয়াছিলেন ঠেঙাইয়াছিস ঠেঙাইয়াছে ঠেঙাইয়াছেন ঠেঙাইয়ো ঠেঙাক ঠেঙাচ্ছ ঠেঙাচ্ছি ঠেঙাচ্ছিল ঠেঙাচ্ছিলাম ঠেঙাচ্ছিলি ঠেঙাচ্ছিলে ঠেঙাচ্ছিলেন ঠেঙাচ্ছিলেম ঠেঙাচ্ছিলুম ঠেঙাচ্ছিস ঠেঙাচ্ছে ঠেঙাচ্ছেন ঠেঙাঠেঙি ঠেঙাত ঠেঙাতাম ঠেঙাতিস ঠেঙাতে ঠেঙাতেন ঠেঙাতেম ঠেঙাতুম ঠেঙান ঠেঙানি ঠেঙানো ঠেঙাব ঠেঙাবার ঠেঙাবি ঠেঙাবে ঠেঙাবেন ঠেঙাবো ঠেঙাল ঠেঙালাম ঠেঙালি ঠেঙালে ঠেঙালেন ঠেঙালেম ঠেঙালুম ঠেঙাস ঠেঙাড়িয়া ঠেঙাড়ে ঠেঙি ঠেঙিয়ে ঠেঙিয়েছ ঠেঙিয়েছি ঠেঙিয়েছিল ঠেঙিয়েছিলাম ঠেঙিয়েছিলি ঠেঙিয়েছিলে ঠেঙিয়েছিলেন ঠেঙিয়েছিলেম ঠেঙিয়েছিলুম ঠেঙিয়েছিস ঠেঙিয়েছে ঠেঙিয়েছেন ঠেঙিয়ো ঠেঙে ঠেঙভাঙা ঠেঞে ঠেট ঠেঁট ঠেটা ঠেঁটা ঠেঁটামি ঠেঁটি ঠেঁটী ঠেঠ ঠেঠা ঠেঠাপনা ঠেঠামি ঠেঠী ঠেল ঠেলুক ঠেলা ঠেলাওয়ালা ঠেলাগাড়ি ঠেলাঠেলি ঠেলাতে ঠেলামারা ঠেলারনাম ঠেলি ঠেলিত ঠেলিতাম ঠেলিতিস ঠেলিতে ঠেলিতেছ ঠেলিতেছি ঠেলিতেছিল ঠেলিতেছিলাম ঠেলিতেছিলি ঠেলিতেছিলে ঠেলিতেছিলেন ঠেলিতেছিস ঠেলিতেছে ঠেলিতেছেন ঠেলিতেন ঠেলিব ঠেলিবার ঠেলিবি ঠেলিবে ঠেলিবেন ঠেলিল ঠেলিলাম ঠেলিলি ঠেলিলে ঠেলিলেন ঠেলিস ঠেলিয়া ঠেলিয়াছ ঠেলিয়াছি ঠেলিয়াছিল ঠেলিয়াছিলাম ঠেলিয়াছিলি ঠেলিয়াছিলে ঠেলিয়াছিলেন ঠেলিয়াছিস ঠেলিয়াছে ঠেলিয়াছেন ঠেলিয়ো ঠেলে ঠেলেছ ঠেলেছি ঠেলেছিল ঠেলেছিলাম ঠেলেছিলি ঠেলেছিলে ঠেলেছিলেন ঠেলেছিলেম ঠেলেছিলুম ঠেলেছিস ঠেলেছে ঠেলেছেন ঠেলেন ঠেলো ঠেলছ ঠেলছি ঠেলছিল ঠেলছিলাম ঠেলছিলি ঠেলছিলে ঠেলছিলেন ঠেলছিলেম ঠেলছিলুম ঠেলছিস ঠেলছে ঠেলছেন ঠেলত ঠেলতাম ঠেলতিস ঠেলতে ঠেলতেন ঠেলতেম ঠেলতুম ঠেলুন ঠেলব ঠেলবার ঠেলবি ঠেলবে ঠেলবেন ঠেলবো ঠেলল ঠেললাম ঠেললি ঠেললে ঠেললেন ঠেললেম ঠেললুম ঠেলহ ঠেশ ঠেশাঠেশি ঠেশমারা ঠেস ঠেসুক ঠেসা ঠেসাই ঠেসাইও ঠেসাইত ঠেসাইতাম ঠেসাইতিস ঠেসাইতে ঠেসাইতেছ ঠেসাইতেছি ঠেসাইতেছিল ঠেসাইতেছিলাম ঠেসাইতেছিলি ঠেসাইতেছিলে ঠেসাইতেছিলেন ঠেসাইতেছিস ঠেসাইতেছে ঠেসাইতেছেন ঠেসাইতেন ঠেসাইব ঠেসাইবার ঠেসাইবি ঠেসাইবে ঠেসাইবেন ঠেসাইল ঠেসাইলাম ঠেসাইলি ঠেসাইলে ঠেসাইলেন ঠেসাইয়া ঠেসাইয়াছ ঠেসাইয়াছি ঠেসাইয়াছিল ঠেসাইয়াছিলাম ঠেসাইয়াছিলি ঠেসাইয়াছিলে ঠেসাইয়াছিলেন ঠেসাইয়াছিস ঠেসাইয়াছে ঠেসাইয়াছেন ঠেসাইয়ো ঠেসাক ঠেসাচ্ছ ঠেসাচ্ছি ঠেসাচ্ছিল ঠেসাচ্ছিলাম ঠেসাচ্ছিলি ঠেসাচ্ছিলে ঠেসাচ্ছিলেন ঠেসাচ্ছিলেম ঠেসাচ্ছিলুম ঠেসাচ্ছিস ঠেসাচ্ছে ঠেসাচ্ছেন ঠেসাঠেসি ঠেসাত ঠেসাতাম ঠেসাতিস ঠেসাতে ঠেসাতেন ঠেসাতেম ঠেসাতুম ঠেসান ঠেসানো ঠেসাব ঠেসাবার ঠেসাবি ঠেসাবে ঠেসাবেন ঠেসাবো ঠেসারা ঠেসাল ঠেসালাম ঠেসালি ঠেসালে ঠেসালেন ঠেসালেম ঠেসালুম ঠেসাস ঠেসি ঠেসিত ঠেসিতাম ঠেসিতিস ঠেসিতে ঠেসিতেছ ঠেসিতেছি ঠেসিতেছিল ঠেসিতেছিলাম ঠেসিতেছিলি ঠেসিতেছিলে ঠেসিতেছিলেন ঠেসিতেছিস ঠেসিতেছে ঠেসিতেছেন ঠেসিতেন ঠেসিব ঠেসিবার ঠেসিবি ঠেসিবে ঠেসিবেন ঠেসিল ঠেসিলাম ঠেসিলি ঠেসিলে ঠেসিলেন ঠেসিস ঠেসিয়া ঠেসিয়াছ ঠেসিয়াছি ঠেসিয়াছিল ঠেসিয়াছিলাম ঠেসিয়াছিলি ঠেসিয়াছিলে ঠেসিয়াছিলেন ঠেসিয়াছিস ঠেসিয়াছে ঠেসিয়াছেন ঠেসিয়ে ঠেসিয়েছ ঠেসিয়েছি ঠেসিয়েছিল ঠেসিয়েছিলাম ঠেসিয়েছিলি ঠেসিয়েছিলে ঠেসিয়েছিলেন ঠেসিয়েছিলেম ঠেসিয়েছিলুম ঠেসিয়েছিস ঠেসিয়েছে ঠেসিয়েছেন ঠেসিয়ো ঠেসে ঠেসেছ ঠেসেছি ঠেসেছিল ঠেসেছিলাম ঠেসেছিলি ঠেসেছিলে ঠেসেছিলেন ঠেসেছিলেম ঠেসেছিলুম ঠেসেছিস ঠেসেছে ঠেসেছেন ঠেসেঠুসে ঠেসেন ঠেসো ঠেসছ ঠেসছি ঠেসছিল ঠেসছিলাম ঠেসছিলি ঠেসছিলে ঠেসছিলেন ঠেসছিলেম ঠেসছিলুম ঠেসছিস ঠেসছে ঠেসছেন ঠেসত ঠেসতাম ঠেসতিস ঠেসতে ঠেসতেন ঠেসতেম ঠেসতুম ঠেসুন ঠেসব ঠেসবার ঠেসবি ঠেসবে ঠেসবেন ঠেসবো ঠেসমারা ঠেসল ঠেসলাম ঠেসলি ঠেসলে ঠেসলেন ঠেসলেম ঠেসলুম ঠেঁয়ে ঠোংগা ঠোক ঠোক্কর ঠোকা ঠোকাক ঠোকাচ্ছ ঠোকাচ্ছি ঠোকাচ্ছিল ঠোকাচ্ছিলাম ঠোকাচ্ছিলি ঠোকাচ্ছিলে ঠোকাচ্ছিলেন ঠোকাচ্ছিলেম ঠোকাচ্ছিলুম ঠোকাচ্ছিস ঠোকাচ্ছে ঠোকাচ্ছেন ঠোকাঠুকি ঠোকাত ঠোকাতাম ঠোকাতিস ঠোকাতে ঠোকাতেন ঠোকাতেম ঠোকাতুম ঠোকান ঠোকানো ঠোকাব ঠোকাবার ঠোকাবি ঠোকাবে ঠোকাবেন ঠোকাবো ঠোকাল ঠোকালাম ঠোকালি ঠোকালে ঠোকালেন ঠোকালেম ঠোকালুম ঠোকাস ঠোকে ঠোকেন ঠোকন ঠোকনা ঠোকবার ঠোকর ঠোকরা ঠোকরাক ঠোকরাচ্ছ ঠোকরাচ্ছি ঠোকরাচ্ছিল ঠোকরাচ্ছিলাম ঠোকরাচ্ছিলি ঠোকরাচ্ছিলে ঠোকরাচ্ছিলেন ঠোকরাচ্ছিলেম ঠোকরাচ্ছিলুম ঠোকরাচ্ছিস ঠোকরাচ্ছে ঠোকরাচ্ছেন ঠোকরাত ঠোকরাতাম ঠোকরাতিস ঠোকরাতে ঠোকরাতেন ঠোকরাতেম ঠোকরাতুম ঠোকরান ঠোকরানো ঠোকরাব ঠোকরাবার ঠোকরাবি ঠোকরাবে ঠোকরাবেন ঠোকরাবো ঠোকরাল ঠোকরালাম ঠোকরালি ঠোকরালে ঠোকরালেন ঠোকরালেম ঠোকরালুম ঠোকরাস ঠোঙ্গা ঠোঙা ঠোট ঠোঁট ঠোঁটওয়ালা ঠোঁটকাটা ঠোটা ঠোঁটা ঠোটে ঠোঁটে ঠোঁটেঠোঁটে ঠোঁটযুক্তা ঠোঁটবাঁকা ঠোনকা ঠোনা ঠোস ঠোসা ঠোসে ঠোসেন ঠোসবার ঠুটা ঠুঁটা ঠ্যাং ঠ্যাংখোঁড়া ঠ্যাংগা ঠ্যাংগাঠ্যাংগি ঠ্যাংগানি ঠ্যাংগানো ঠ্যাংগাড়িয়া ঠ্যাংগাড়ে ঠ্যাংভাঙা ঠ্যাকা ঠ্যাঙ ঠ্যাঙখোঁড়া ঠ্যাঙ্গা ঠ্যাঙ্গাঠেঙ্গি ঠ্যাঙ্গান ঠ্যাঙ্গানি ঠ্যাঙ্গানো ঠ্যাঙ্গাড়িয়া ঠ্যাঙ্গাড়ে ঠ্যাঙা ঠ্যাঙাঠেঙি ঠ্যাঙান ঠ্যাঙানি ঠ্যাঙানো ঠ্যাঙাব ঠ্যাঙাড়িয়া ঠ্যাঙাড়ে ঠ্যাঙভাঙা ঠ্যাটা ঠ্যাঁটা ঠ্যাটামি ঠ্যাঁটামি ঠ্যালা ঠ্যালানি ঠ্যালানো ঠটিয়া ঠটে ঠ্যেকো ঠুঁটো ঠুঁটোজগন্নাথ ঠন ঠুন ঠুনকা ঠুনকাঠানকা ঠুনকো ঠুনকোঠানকা ঠনাঠন ঠুনি ঠনঠন ঠুনঠুন ঠনঠনান ঠনঠনানি ঠনঠনানো ঠনঠনিয়া ঠনঠনে ঠমক ঠমকাইয়া ঠুমকি ঠমকচাল ঠুমরী ঠুলি ঠুলী ঠুস ঠসক ঠুসুক ঠুসা ঠুসি ঠুসিত ঠুসিতাম ঠুসিতিস ঠুসিতে ঠুসিতেছ ঠুসিতেছি ঠুসিতেছিল ঠুসিতেছিলাম ঠুসিতেছিলি ঠুসিতেছিলে ঠুসিতেছিলেন ঠুসিতেছিস ঠুসিতেছে ঠুসিতেছেন ঠুসিতেন ঠুসিব ঠুসিবার ঠুসিবি ঠুসিবে ঠুসিবেন ঠুসিল ঠুসিলাম ঠুসিলি ঠুসিলে ঠুসিলেন ঠুসিস ঠুসিয়া ঠুসিয়াছ ঠুসিয়াছি ঠুসিয়াছিল ঠুসিয়াছিলাম ঠুসিয়াছিলি ঠুসিয়াছিলে ঠুসিয়াছিলেন ঠুসিয়াছিস ঠুসিয়াছে ঠুসিয়াছেন ঠুসিয়ো ঠুসে ঠুসেছ ঠুসেছি ঠুসেছিল ঠুসেছিলাম ঠুসেছিলি ঠুসেছিলে ঠুসেছিলেন ঠুসেছিলেম ঠুসেছিলুম ঠুসেছিস ঠুসেছে ঠুসেছেন ঠুসেন ঠুসো ঠুসছ ঠুসছি ঠুসছিল ঠুসছিলাম ঠুসছিলি ঠুসছিলে ঠুসছিলেন ঠুসছিলেম ঠুসছিলুম ঠুসছিস ঠুসছে ঠুসছেন ঠুসঠাস ঠুসত ঠুসতাম ঠুসতিস ঠুসতে ঠুসতেন ঠুসতেম ঠুসতুম ঠুসুন ঠুসব ঠুসবি ঠুসবে ঠুসবেন ঠুসবো ঠুসল ঠুসলাম ঠুসলি ঠুসলে ঠুসলেন ঠুসলেম ঠুসলুম".split(" "),
              w_y: ["য়", "য়ানাহী", "য়ুনান", "য়ুনানি", "য়ুনানিচিকিৎসা"],
              w_z: "য যুঁই যূঁই যুঁইফুল যওজ যক যূক যূকা যকাত যকার যকেরধন যকৃত যকৃৎ যুক্ত যুক্তকারী যুক্তকর যুক্তক্রিয়া যুক্তকরে যুক্তা যুক্তাক্ষর যুক্তাবস্থা যুকতি যুকুতি যুক্তি যুক্তিকেন্দ্রিক যুক্তিখণ্ডন যুক্তিগত যুক্তিগ্রাহ্য যুক্তিজাল যুক্তিযুক্ত যুক্তিযুক্ততা যুক্তিতর্ক যুক্তিদাতা যুক্তিদাত্রী যুক্তিনির্ভর যুক্তিনির্মাণ যুক্তিনিষ্ঠ যুক্তিনিষ্ঠা যুক্তিপূর্ণ যুক্তিপ্রদান যুক্তিপ্রদর্শন যুক্তিপূর্বক যুক্তিপ্রমাণাদি যুক্তিপরম্পরা যুক্তিপ্রয়োগক্ষমতা যুক্তিবাদ যুক্তিবাদী যুক্তিবিজ্ঞান যুক্তিবিজ্ঞানী যুক্তিবিদ যুক্তিবিদ্যা যুক্তিবিধি যুক্তিবিরুদ্ধ যুক্তিবিরুদ্ধতা যুক্তিব্যবস্থা যুক্তিবল যুক্তিভিত্তিক যুক্তিসংগত যুক্তিসঙ্গত যুক্তিসিদ্ধ যুক্তিসিদ্ধতা যুক্তিসম্মত যুক্তিসহ যুক্তিসহতা যুক্তিহীন যুক্তিহীনতা যকৃতোত্তর যুক্ততারা যুক্তপ্রদেশ যুক্তফ্রন্ট যুক্তবেণী যুক্তব্যঞ্জন যুক্তবর্ণ যুক্তভাবে যুক্তমূর্তি যুক্তরাজ্য যুক্তরাষ্ট্র যুক্তরাষ্ট্রীয় যকদেওয়া যক্ষ যক্ষিণী যক্ষী যক্ষনি যক্ষুনি যক্ষপতি যক্ষপুরী যক্ষ্মা যক্ষ্মারোগ যক্ষরক্ষ যক্ষরাজ যক্ষরূপে যখ যখন যখনকার যখনি যখনতখন যুগ যুগক্ষয় যুগান যুগানো যুগান্ত যুগান্তকারী যুগান্তর যুগাবতার যুগি যুগিনী যুগিয়ে যুগিয়েছ যুগিয়েছি যুগিয়েছিল যুগিয়েছিলাম যুগিয়েছিলি যুগিয়েছিলে যুগিয়েছিলেন যুগিয়েছিলেম যুগিয়েছিলুম যুগিয়েছিস যুগিয়েছে যুগিয়েছেন যুগিয়ো যুগী যুগোপযোগী যুগোপযোগীকরণ যুগোস্লাভিয়া যুগযুগ যুগযুগান্তর যুগ্যি যগডুমুর যুগধর্ম যুগন্ধর যুগপৎ যুগবাণী যুগব্যাপী যুগ্ম যুগ্মীভূত যুগ্মীভবন যুগ্মোচ্চারিত যুগ্মতা যুগ্মধ্বনি যুগ্মপত্র যুগ্মব্যঞ্জন যুগ্মভাবে যুগ্মশব্দ যুগ্মশহর যুগ্মস্বর যুগরাজ যুগল যুগলক্ষণ যুগলাঙ্গুরীয় যুগলতারা যুগলবন্দী যুগলমিলন যুগলমূর্তি যুগসূচনাকারী যুগসন্ধি যা যাই যাইও যাইওনি যাইত যাইতাছে যাইতাম যাইতিস যাইতে যাইতেছ যাইতেছি যাইতেছিল যাইতেছিলাম যাইতেছিলি যাইতেছিলে যাইতেছিলেন যাইতেছিস যাইতেছে যাইতেছেন যাইতেন যাইনি যাইব যাইবা যাইবার যাইবায় যাইবি যাইবে যাইবেন যাইবোগা যাইমুরে যাইরে যাইল যাইলাম যাইলি যাইলে যাইলেন যাইহোক যাইয়া যাইয়ে যাইয়েন যাইয়ো যাউ যাউক যাউকগা যাএয়া যাও যাওগে যাওত যাওন যাওয়া যাওয়াআসা যাওয়ামাত্র যাওয়ারূপ যাক যাকু যাকগে যাকাত যাঁকান্দানি যাকিছু যাকিনা যাকে যাগ যাগযজ্ঞ যাঘটবেই যাঙ যাচ যাচক যাচুক যাচা যাচাই যাচাইও যাচাইকরণ যাচাইকর্ম যাচাইযোগ্য যাচাইযোগ্যতা যাচাইত যাচাইতাম যাচাইতিস যাচাইতে যাচাইতেছ যাচাইতেছি যাচাইতেছিল যাচাইতেছিলাম যাচাইতেছিলি যাচাইতেছিলে যাচাইতেছিলেন যাচাইতেছিস যাচাইতেছে যাচাইতেছেন যাচাইতেন যাচাইব যাচাইবার যাচাইবি যাচাইবে যাচাইবেন যাচাইল যাচাইলাম যাচাইলি যাচাইলে যাচাইলেন যাচাইয়া যাচাইয়াছ যাচাইয়াছি যাচাইয়াছিল যাচাইয়াছিলাম যাচাইয়াছিলি যাচাইয়াছিলে যাচাইয়াছিলেন যাচাইয়াছিস যাচাইয়াছে যাচাইয়াছেন যাচাইয়ের যাচাইয়ো যাচাক যাচাচ্ছ যাচাচ্ছি যাচাচ্ছিল যাচাচ্ছিলাম যাচাচ্ছিলি যাচাচ্ছিলে যাচাচ্ছিলেন যাচাচ্ছিলেম যাচাচ্ছিলুম যাচাচ্ছিস যাচাচ্ছে যাচাচ্ছেন যাচাত যাচাতাম যাচাতিস যাচাতে যাচাতেন যাচাতেম যাচাতুম যাচান যাচানো যাচাব যাচাবার যাচাবি যাচাবে যাচাবেন যাচাবো যাচাল যাচালাম যাচালি যাচালে যাচালেন যাচালেম যাচালুম যাচাস যাচি যাচিত যাচিতা যাচিতাম যাচিতিস যাচিতে যাচিতেছ যাচিতেছি যাচিতেছিল যাচিতেছিলাম যাচিতেছিলি যাচিতেছিলে যাচিতেছিলেন যাচিতেছিস যাচিতেছে যাচিতেছেন যাচিতেন যাচিব যাচিবার যাচিবি যাচিবে যাচিবেন যাচিল যাচিলাম যাচিলি যাচিলে যাচিলেন যাচিস যাচিয়া যাচিয়াছ যাচিয়াছি যাচিয়াছিল যাচিয়াছিলাম যাচিয়াছিলি যাচিয়াছিলে যাচিয়াছিলেন যাচিয়াছিস যাচিয়াছে যাচিয়াছেন যাচিয়ে যাচিয়েছ যাচিয়েছি যাচিয়েছিল যাচিয়েছিলাম যাচিয়েছিলি যাচিয়েছিলে যাচিয়েছিলেন যাচিয়েছিলেম যাচিয়েছিলুম যাচিয়েছিস যাচিয়েছে যাচিয়েছেন যাচিয়ো যাচ্চলে যাচে যাচেন যাচ্ছ যাচ্ছি যাচ্ছিল যাচ্ছিলাম যাচ্ছিলি যাচ্ছিলে যাচ্ছিলেন যাচ্ছিলেম যাচ্ছিলো যাচ্ছিলোনা যাচ্ছিলুম যাচ্ছিস যাচ্ছে যাচ্ছেতাই যাচ্ছেন যাচ্ছেনা যাচঞা যাচ্ঞা যাচ্য যাচ্যমানা যাচত যাচতাম যাচতিস যাচতে যাচতেন যাচতেম যাচতুম যাচন যাচুন যাচনা যাচনীয় যাচনদার যাচব যাচবার যাচবি যাচবে যাচবেন যাচবো যাচমান যাচল যাচলাম যাচলি যাচলে যাচলেন যাচলেম যাচলুম যাছে যাজক যাজকশ্রেণী যাজি যাজিকা যাজী যাজ্ঞ যাজ্ঞিক যাজ্ঞিকান্ন যাজ্ঞবল্ক্য যাজ্ঞসেনী যাজ্য যাজন যাজনিক যাজনযোগ্য যাযাবর যাঠা যাণাইবোঁ যাত যাতা যাঁতা যাঁতাকল যাঁতান যাঁতানো যাতাপেষা যাতাভাঙ্গা যাতায়াত যাতায়াতকারী যাতায়াতখরচা যাতি যাঁতি যাঁতিকল যাতে যাতনা যাতব্য যাত্রা যাত্রাকারী যাত্রাগান যাত্রাযোগ্য যাত্রাদি যাত্রাদল যাত্রাপালা যাত্রাপথ যাত্রাবাড়ী যাত্রাবদল যাত্রাভঙ্গ যাত্রাভিনয় যাত্রারম্ভ যাত্রিক যাত্রিণী যাত্রী যাত্রীবাহী যাত্রীসংখ্যা যাথাযথ্য যাথাতথ্য যাথার্থ্য যাদু যাদঃপতি যাদৃক যাদুকর যাদুকরা যাদুকরী যাদুগর যাদুঘর যাদৃচ্ছিক যাদের যাঁদের যাদুতুল্য যাদুধন যাদব যাদুবিদ্যা যাদুবিদ্যাহীন যাদুবিশ্ব যাদবী যাদবপুর যাদুমণি যাদুময় যাদৃশ যাদুশক্তিহীন যাদুশিল্পী যাদৃশী যাদুসমাজ যাদুহীন যান যানা যানজট যানতাম যানতেন যান্ত্রিক যান্ত্রিকী যান্ত্রিকতা যান্ত্রিকভাবে যান্ত্রীয় যাননি যানবাহ যানবাহক যানবাহন যাপক যাপা যাপিত যাপ্য যাপন যাপনকারী যাপনীয় যাব যাবক যাবকরেখা যাবা যাবার যাবি যাবচ্চন্দ্রদিবাকর যাবে যাবেন যাবেনা যাবেননা যাবো যাবজ্জীবন যাবত যাবতীয় যাবন যাবনা যাবনাল যাবনিক যাবনী যাম যামু যামঘোষ যামঘোষা যামার্থ যামার্ধ যামিনী যামিনীনাথ যামিনীপতি যামিনীভূষণ যামী যাম্য যাম্যোত্তরবৃত্ত যাম্যবৃত্ত যামবতী যামল যার যারা যারে যারযার যারতার যারপরনাই যারমধ্যে যালিম যাস যাসি যাসনি যাসনে যাসুস যাহ যাহ্‌ যাহক যাহুক যাহা যাঁহা যাহাতাহা যাহার যাঁহার যাহারা যাঁহারা যাহিল যাহেদ যাহোক যায় যায়ইনি যায়গা যায়যায় যায়যায়দিন যায়যেমন যায়না যায়নি যায়মাফিক যিগর যিগরখারা যিগরপস্তানি যিগরপস্তানী যিগরফাটা যিজয়া যিযিয়া যিদ যিদ্দি যিনি যিশু যিশুখ্রিস্ট যিয়াদা যিয়াফত যিয়ারত যীশু যে যেঁ যেঅংশ যেঅঙ্গ যেঅবস্থান যেআজ্ঞা যেই যেইখান যেইদিন যেইমাত্র যেও যেওনা যেকাজ যেকাদা যেকাপড় যেকেউ যেকোন যেকেন্দানি যেকেহ যেকোনো যেকোনোভাবে যেকোনভাবে যেকথা যেক্ষেত্র যেকয়টি যেখান যেখানকার যেখানে যেখানেসেখানে যেখানটায় যেখানসেখান যেখনাকার যেগুলি যেগুলো যেচে যেচেছ যেচেছি যেচেছিল যেচেছিলাম যেচেছিলি যেচেছিলে যেচেছিলেন যেচেছিলেম যেচেছিলুম যেচেছিস যেচেছে যেচেছেন যেচো যৌথ যেজন যেজন্য যেটুকু যেটা যেটি যেটে যেত যেতাম যেতিথি যেতিস যেতে যেতেন যেতেননা যেতেবসা যেতেবসে যেতেম যেতো যেতুম যেথা যেথাকার যেথাসেথা যেদালো যেদিক যেদিককার যেদিন যেদেশ যেদুটি যেধার যেন যেনতেন যেনমতে যেপথ যেপ্রকার যেবার যেভাবে যেমত যেমতি যেমন যেমনি যেমনে যেমনতেমন যেমনতেমনি যেমনতর যেরকম যেরকমভাবে যেরন যেরূপ যেসে যেসব যেসমস্ত যেসময় যেহেতু যেহ্ন যেয়াদা যেয়াফত যেয়ে যেয়ো যৈছে যৈছন যো যোই যোঁকা যোক্তা যোক্তী যোক্ত্র যোখা যোগ যোগকারী যোগকর্তা যোগক্ষেম যোগা যোগাই যোগাইও যোগাইত যোগাইতাম যোগাইতিস যোগাইতে যোগাইতেছ যোগাইতেছি যোগাইতেছিল যোগাইতেছিলাম যোগাইতেছিলি যোগাইতেছিলে যোগাইতেছিলেন যোগাইতেছিস যোগাইতেছে যোগাইতেছেন যোগাইতেন যোগাইব যোগাইবার যোগাইবি যোগাইবে যোগাইবেন যোগাইবো যোগাইল যোগাইলাম যোগাইলি যোগাইলে যোগাইলেন যোগাইয়া যোগাইয়াছ যোগাইয়াছি যোগাইয়াছিল যোগাইয়াছিলাম যোগাইয়াছিলি যোগাইয়াছিলে যোগাইয়াছিলেন যোগাইয়াছিস যোগাইয়াছে যোগাইয়াছেন যোগাইয়ো যোগাওঁ যোগাক যোগাচ্ছ যোগাচ্ছি যোগাচ্ছিল যোগাচ্ছিলাম যোগাচ্ছিলি যোগাচ্ছিলে যোগাচ্ছিলেন যোগাচ্ছিলেম যোগাচ্ছিলুম যোগাচ্ছিস যোগাচ্ছে যোগাচ্ছেন যোগাযোগ যোগাযোগব্যবস্থা যোগাত যোগাতাম যোগাতিস যোগাতে যোগাতেন যোগাতেম যোগাতো যোগাতুম যোগান যোগানঘটিত যোগানিত যোগানচাহিদা যোগানো যোগানদাতা যোগানদার যোগাব যোগাবার যোগাবি যোগাবে যোগাবেন যোগাবো যোগাবোঁ যোগাভ্যাস যোগারূঢ় যোগাল যোগালাম যোগালি যোগালিয়া যোগালে যোগালেন যোগালেম যোগালুম যোগাশ্রয়িতা যোগাশ্রয়ী যোগাস যোগাসন যোগাড় যোগাড়ি যোগাড়যন্ত্র যোগিতা যোগিনী যোগিনীতন্ত্র যোগিয়া যোগিয়ারাগ যোগী যোগচিহ্ন যোগীন্দ্র যোগীপুরুষ যোগীশ যোগীশ্বর যোগেন্দ্র যোগেশ যোগেশ্বর যোগজ যোগজীকরণ যোগ্য যোগযুক্ত যোগ্যা যোগ্যতা যোগ্যতাবলে যোগ্যতাসম্পন্ন যোগ্যতম যোগ্যপুরুষ যোগতারা যোগদান যোগদানকারী যোগদানকৃত যোগদর্শন যোগদৃষ্টি যোগনিদ্রা যোগপট্ট যোগফল যোগবাহী যোগবিয়োগ যোগব্যায়াম যোগবল যোগভঙ্গ যোগভ্রষ্ট যোগমার্গ যোগমায়া যোগরূঢ় যোগরত যোগরূপ যোগলব্ধ যোগশাস্ত্র যোগশাস্ত্রোক্ত যোগশাস্ত্রমতে যোগসাজশ যোগসাধন যোগসাধনা যোগসাধনাকারিণী যোগসাধনার্থ যোগসাধনরূপ যোগসিদ্ধি যোগসূত্র যোগস্থাপক যোগস্থাপন যোগসম্ভব যোগহীন যোগহীনতা যোজক যোজিত যোজ্য যোজ্যতা যোজন যোজনগন্ধা যোজনা যোজনাকারী যোজনী যোজনীয় যোঝা যোঝাযুঝি যোঝান যোঝানো যোটক যোটা যোটান যোটানো যোত যোতা যোতান যোতানো যোত্র যোত্রহীন যোদ্ধৃ যোদ্ধা যোদ্ধাদল যোদ্ধৃবেশ যোদ্ধৃবর্গ যোধ যোধন যোধপুর যোধরাব যোনি যোনিজাত যোনিপথ যোনিমুখ যোনী যোশ যোষা যোষিত যোষিৎ যোষিতা যোসো যোহুকুম যোহর যোহরা যোড় যোড়া যোড়ান যোড়ানো যোড়ন যোয়ান যোয়াল যৌ যছু যৌক্তিক যৌক্তিকতা যৌক্তিকভাবে যৌগ যৌগিক যৌগিকস্বর যৌগপদ্য যৌতুক যৌতূক যৌথ যৌথকারবার যৌথবাহিনী যৌথভাগ যৌথভাবে যৌথরাষ্ট্র যৌথরাষ্ট্রীয় যৌন যৌনকামনা যৌনকার্য যৌনকর্ম যৌনকর্মী যৌনাকাঙ্ক্ষা যৌনাঙ্গ যৌনাচার যৌনাবেদন যৌনাবেদনময় যৌনাবেদনময়ী যৌনতা যৌনদুর্বলতা যৌনবিদ্যা যৌনব্যাধি যৌনমিলন যৌনরোগ যৌনশক্তি যৌনসংগম যৌনসংসর্গ যৌনসম্পর্ক যৌনসম্ভোগ যৌবত যৌবতী যৌবন যৌবনকাল যৌবনকণ্টক যৌবনা যৌবনাবস্থা যৌবনারম্ভ যৌবনি যৌবনচাঞ্চল্য যৌবনোত্তীর্ণ যৌবনোদয় যৌবনজনিত যৌবনপ্রাপ্ত যৌবনবিকশিত যৌবনবতী যৌবনবয়স যৌবনভার যৌবনমদ যৌবনরস যৌবনলক্ষণ যৌবনসঞ্চার যৌবনসুলভ যৌবরাজ্য যৌবরাজ্যাভিষেক যজু যুজ যজা যজানে যজানো যজ্ঞ যজ্ঞকারী যজ্ঞকুণ্ড যজ্ঞকৃৎ যজ্ঞক্রিয়া যজ্ঞকর্তা যজ্ঞাগ্নি যজ্ঞাদি যজ্ঞানল যজ্ঞার্থ যজ্ঞি যজ্ঞিডুমুর যজ্ঞীয় যজ্ঞেশ্বর যজ্ঞোপবীত যজ্ঞডুমুর যজ্ঞধূম যজ্ঞপাত্র যজ্ঞপতি যজ্ঞপুরুষ যজ্ঞপশু যজ্ঞবেদি যজ্ঞভূমি যজ্ঞশালা যজ্ঞসংক্রান্ত যজ্ঞসূত্র যজ্ঞস্থানে যজ্ঞস্থল যজ্য যজন যজনীয় যজমান যজমানি যজমানী যজমেনে যজুর্বেদ যজুর্বেদানুসারে যজুর্বেদীয় যজুর্বেদজ্ঞ যজুর্বেদপ্রবক্তা যুঝা যুঝাযুঝি যুঝান যুঝানো যুঝতে যযাতি যুটি যুযুৎসু যুযুৎসা যুযুধান যত যুত যুৎ যতকাল যৎকালে যতকিছু যৎকিঞ্চিত যুৎকরা যতক্ষণ যুতা যতাত্মা যতি যুতি যুতিকাল যতিচিহ্ন যতিনী যতিপাত যতিবিধান যতিভঙ্গ যতী যতীন্দ্র যতেক যতেকততেক যতো যতজন যতদিন যতদূর যতদ্রুত যতন যত্ন যত্নআত্তি যত্নকারী যত্নাভাব যত্নযুক্ত যত্নপূর্বক যত্নবান যত্নবতী যত্নশীল যত্নশীলা যত্নশীলতা যত্নসাধ্য যত্নসহকারে যত্নহীন যতপ্রকার যৎপরিমাণ যৎপরোনাস্তি যতবার যতব্রত যতভাবে যতমান যত্র যতরকম যতরকমভাবে যত্রতত্র যুতসই যৎসামান্য যতসব যূথ যথা যথাঅভাব যথাআজ্ঞা যথাকাল যথাকথঞ্চিৎ যথাকর্তব্য যথাক্রম যথাক্রমিক যথাজাত যথাজ্ঞান যথাযোগ্য যথাযোগ্যভাবে যথাযথ যথাযথা যথাযথতা যথাযথভাবে যথাযথরূপে যথাতথা যথাদিষ্ট যথানির্দিষ্ট যথানিয়ম যথান্যায় যথানুপূর্ব যথাপরং যথাপূর্ব যথাবিধি যথাবিহিত যথাবৎ যথাভিমত যথারুচি যথারীতি যথার্থ যথার্থত যথার্থতা যথার্থভাবে যথার্হ যথালাঠালাঠি যথালাভ যথাশক্তি যথাশাস্ত্র যথাসাধ্য যথাস্থান যথাস্থিত যথাস্থিতি যথাসম্ভব যথাসময় যথাসর্বস্ব যূথিকা যূথী যূথচারী যূথচর যথেচ্ছ যথেচ্ছা যথেচ্ছাচার যথেচ্ছাচারিণী যথেচ্ছাচারিতা যথেচ্ছাচারী যথেচ্ছভাবে যথেষ্ট যথেষ্টসংখ্যক যথোক্ত যথোচিত যথোপযুক্ত যথোপযোগী যূথনাথ যূথপতি যূথবদ্ধ যূথভ্রষ্ট যূথভ্রষ্টা যদু যদুকুল যদুকুলপতি যদা যদি যদিউ যদিওবা যদিচ যদিচ্ছা যদিনা যদিবা যদিস্যাৎ যদৃচ্ছা যদৃচ্ছাক্রমে যদৃচ্ছালব্ধ যদ্যপি যদ্দিন যুদ্ধ যুদ্ধং যুদ্ধংদেহী যুদ্ধকাব্য যুদ্ধকারী যুদ্ধকাল যুদ্ধকালীন যুদ্ধকাহিনী যুদ্ধকৌশল যুদ্ধকুশল যুদ্ধক্ষেত্র যুদ্ধক্ষেত্ররূপ যুদ্ধঘোষণা যুদ্ধঘটিত যুদ্ধাজীব যুদ্ধাদি যুদ্ধাপরাধ যুদ্ধাপরাধী যুদ্ধাবসান যুদ্ধাবস্থা যুদ্ধাভিলাষী যুদ্ধার্থ যুদ্ধার্থী যুদ্ধাস্ত্র যুদ্ধাহত যুদ্ধি যুদ্ধোত্তর যুদ্ধোন্মাদ যুদ্ধোপকরণ যুদ্ধোপযোগী যুদ্ধোম্মুখ যুদ্ধজাহাজ যুদ্ধজনিত যুদ্ধজয় যুদ্ধযাত্রা যুদ্ধযান যুদ্ধট্যাংক যুদ্ধযুদ্ধ যুদ্ধযুদ্ধাজীব যুদ্ধদিন যুদ্ধদেবতা যুদ্ধদেশ যুদ্ধনিপুণ যুদ্ধনীতি যুদ্ধনেতা যুদ্ধপীড়িত যুদ্ধপ্রিয় যুদ্ধপ্রণালী যুদ্ধপরবর্তী যুদ্ধবাজ যুদ্ধবিগ্রহ যুদ্ধবিগ্রহাদি যুদ্ধবিদ্যা যুদ্ধবিমান যুদ্ধবিরোধী যুদ্ধবিরতি যুদ্ধবিশারদ যুদ্ধবেত্তা যুদ্ধব্যবসায়ী যুদ্ধবন্দি যুদ্ধবন্দী যুদ্ধভিত্তিক যুদ্ধরীতি যুদ্ধরত যুদ্ধরূপ যুদ্ধশান্তি যুদ্ধশেষে যুদ্ধস্থল যুদ্ধসম্পর্কিত যুদ্ধসম্ভার যুদ্ধসুলভ যদুনাথ যদুপতি যদুবংশ যদুবংশীয় যদবধি যদভবিষ্য যদুমধু যদর্থে যুধিষ্ঠির যুধ্যমান যনু যুনান যনি যূনী যন্তা যন্তর যন্ত্র যন্ত্রক যন্ত্রকৌশল যন্ত্রকৌশলী যন্ত্রকৃত যন্ত্রকুশল যন্ত্রকুশলী যন্ত্রগণক যন্ত্রগৃহ যন্ত্রাংশ যন্ত্রাদি যন্ত্রানুবাদ যন্ত্রানুসঙ্গ যন্ত্রাবলী যন্ত্রালয় যন্ত্রিত যন্ত্রী যন্ত্রচালক যন্ত্রচালিত যন্ত্রচালন যন্ত্রচালনা যন্ত্রোপযোগী যন্ত্রযুক্ত যন্ত্রযুগ যন্ত্রযান যন্ত্রণ যন্ত্রণা যন্ত্রণাকর যন্ত্রণাক্লিষ্ট যন্ত্রণাগ্রস্ত যন্ত্রণাযুক্ত যন্ত্রণাদাতা যন্ত্রণাদাত্রী যন্ত্রণাদায়ক যন্ত্রণাদায়িকা যন্ত্রণাপূর্ণ যন্ত্রণাবোধ যন্ত্রণাময় যন্ত্রতন্ত্র যন্ত্রদানব যন্ত্রনির্মাণ যন্ত্রনির্মাতা যন্ত্রপাতি যন্ত্রপাতিসমৃদ্ধ যন্ত্রপ্রকৌশল যন্ত্রবাদন যন্ত্রবিজ্ঞান যন্ত্রবিজ্ঞানী যন্ত্রবিৎ যন্ত্রবিদ যন্ত্রবিদ্যা যন্ত্রবিশারদ যন্ত্রবৎ যন্ত্রমাত্র যন্ত্রশক্তি যন্ত্রশালা যন্ত্রশিল্প যন্ত্রশিল্পী যন্ত্রসংগীত যন্ত্রসঙ্গীত যন্ত্রস্থ যন্ত্রস্বরূপ যন্ত্রসমন্বিত যূপ যূপকাষ্ঠ যফলা যব যুব যুবক যুবককাল যুবকাল যুবকবীর যুবকবয়স যবক্ষার যবক্ষারজান যুবা যুবাকাল যবাগূ যুবান যবানী যুবাবস্থা যুবাবুড়ো যুবাবয়স যুবাশশী যবিষ্ঠ যবীয়ান যবোদর যবজাতীয় যুবজানি যুবতি যুবতী যবথব যবুথবু যবদ্বীপ যবধান্য যবন যবনানী যুবনাশ্ব যবনিকা যবনিকাউত্তোলন যবনিকাপাত যবনিকাপতন যবনী যবনজাতি যবনদেশ যবনভাষা যবনসুলভ যুবরাজ যুবরাজ্ঞী যবরদস্ত যুবলীগ যুবলোক যবস্থব যুবসম্প্রদায় যুবসম্মেলন যম যমক যমানিকা যমানী যমান্তক যমালয় যমিত যমী যমেধরা যমেরঅরুচি যমেরদোসর যমেরবাড়ি যমজ যমজাঙ্গাল যমজয়ী যমযাতনা যমযন্ত্রণা যমযম যমদণ্ড যমদূত যমদ্বার যমদ্বিতীয়া যমুনা যমুনাতীর যমুনাদ্বীপ যমুনানদী যমুনাসেতু যমুনেশ্বরী যমুনোত্তরী যমপুকুর যমপুরী যমমাস যমরাজ যমল যমলীগান যর যরকশি যরদা যরদোজি যুলমাৎ যশ যশঃকীর্তন যশঃখ্যাপন যশঃপ্রচার যশকীর্তন যশঙ্কর যশাকাঙ্ক্ষা যশোগাথা যশোগান যশোগীতি যশোদ যশোদা যশোদানন্দন যশোধন যশোপাল যশোবার্তা যশোবর্ধন যশোভাক যশোভাগ যশোভাগ্য যশোমতী যশোর যশোরাশি যশোলাভ যশোলিপ্সা যশোহানি যশদ যশস্কাম যশস্য যশস্বান যশস্বিনী যশস্বী যশস্বতী যশসম্পন্ন যূষ যষ্টি যষ্টিকা যষ্টিধারী যষ্টিমধু যহুঁক যহি যুহুদ যহুর যুড়া যুড়ি যুড়ন".split(" "),
              w_khandatta: ["ৎ"]
          }
      }), s = "levenshtein", c({
          levenshtein: function(e, t) {
              var n, r, i, a = [];
              if (0 == e.length) return t.length;
              if (0 == t.length) return e.length;
              for (n = 0; n <= e.length; n++) a[n] = [], a[n][0] = n;
              for (r = 0; r <= t.length; r++) a[0][r] = r;
              for (n = 1; n <= e.length; n++)
                  for (r = 1; r <= t.length; r++) i = e.charAt(n - 1) == t.charAt(r - 1) ? 0 : 1, a[n][r] = Math.min(a[n - 1][r] + 1, a[n][r - 1] + 1, a[n - 1][r - 1] + i), n > 1 && r > 1 && e.charAt(n - 1) == t.charAt(r - 2) && e.charAt(n - 2) == t.charAt(r - 1) && (a[n][r] = Math.min(a[n][r], a[n - 2][r - 2] + i));
              return a[e.length][t.length]
          }
      }), s = "avrolib", u = {
          Avro: {}
      }, u.Avro.Phonetic = {
          parse: function(e) {
              e = this.fixString(e);
              for (var t = "", n = 0; n < e.length; ++n) {
                  for (var r = n, i = n + 1, a = r - 1, o = !1, a = 0; a < this.data.patterns.length; ++a) {
                      var s = this.data.patterns[a],
                          i = n + s.find.length;
                      if (i <= e.length && e.substring(r, i) == s.find) {
                          if (a = r - 1, "undefined" != typeof s.rules)
                              for (var l = 0; l < s.rules.length; ++l) {
                                  for (var c = s.rules[l], u = !0, p = 0, h = 0; h < c.matches.length; ++h) {
                                      var d = c.matches[h],
                                          p = "suffix" === d.type ? i : a;
                                      if ("undefined" == typeof d.negative && (d.negative = !1, "!" === d.scope.charAt(0) && (d.negative = !0, d.scope = d.scope.substring(1))), "undefined" == typeof d.value && (d.value = ""), "punctuation" === d.scope) {
                                          if (!(0 > p && "prefix" === d.type || p >= e.length && "suffix" === d.type || this.isPunctuation(e.charAt(p))) ^ d.negative) {
                                              u = !1;
                                              break
                                          }
                                      } else if ("vowel" === d.scope) {
                                          if (!((p >= 0 && "prefix" === d.type || p < e.length && "suffix" === d.type) && this.isVowel(e.charAt(p))) ^ d.negative) {
                                              u = !1;
                                              break
                                          }
                                      } else if ("consonant" === d.scope) {
                                          if (!((p >= 0 && "prefix" === d.type || p < e.length && "suffix" === d.type) && this.isConsonant(e.charAt(p))) ^ d.negative) {
                                              u = !1;
                                              break
                                          }
                                      } else if ("exact" === d.scope) {
                                          var f;
                                          if ("suffix" === d.type ? (p = i, f = i + d.value.length) : (p = r - d.value.length, f = r), !this.isExact(d.value, e, p, f, d.negative)) {
                                              u = !1;
                                              break
                                          }
                                      }
                                  }
                                  if (u) {
                                      t += c.replace, n = i - 1, o = !0;
                                      break
                                  }
                              }
                          if (1 == o) break;
                          t += s.replace, n = i - 1, o = !0;
                          break
                      }
                  }
                  o || (t += e.charAt(n))
              }
              return t
          },
          fixString: function(e) {
              for (var t = "", n = 0; n < e.length; ++n) var r = e.charAt(n),
                  t = this.isCaseSensitive(r) ? t + r : t + r.toLowerCase();
              return t
          },
          isVowel: function(e) {
              return 0 <= this.data.vowel.indexOf(e.toLowerCase())
          },
          isConsonant: function(e) {
              return 0 <= this.data.consonant.indexOf(e.toLowerCase())
          },
          isPunctuation: function(e) {
              return !(this.isVowel(e) || this.isConsonant(e))
          },
          isExact: function(e, t, n, r, i) {
              return (n >= 0 && r < t.length && t.substring(n, r) === e) ^ i
          },
          isCaseSensitive: function(e) {
              return 0 <= this.data.casesensitive.indexOf(e.toLowerCase())
          },
          data: {
              patterns: [{
                  find: "bhl",
                  replace: "ভ্ল"
              }, {
                  find: "psh",
                  replace: "পশ"
              }, {
                  find: "bdh",
                  replace: "ব্ধ"
              }, {
                  find: "bj",
                  replace: "ব্জ"
              }, {
                  find: "bd",
                  replace: "ব্দ"
              }, {
                  find: "bb",
                  replace: "ব্ব"
              }, {
                  find: "bl",
                  replace: "ব্ল"
              }, {
                  find: "bh",
                  replace: "ভ"
              }, {
                  find: "vl",
                  replace: "ভ্ল"
              }, {
                  find: "b",
                  replace: "ব"
              }, {
                  find: "v",
                  replace: "ভ"
              }, {
                  find: "cNG",
                  replace: "চ্ঞ"
              }, {
                  find: "cch",
                  replace: "চ্ছ"
              }, {
                  find: "cc",
                  replace: "চ্চ"
              }, {
                  find: "ch",
                  replace: "ছ"
              }, {
                  find: "c",
                  replace: "চ"
              }, {
                  find: "dhn",
                  replace: "ধ্ন"
              }, {
                  find: "dhm",
                  replace: "ধ্ম"
              }, {
                  find: "dgh",
                  replace: "দ্ঘ"
              }, {
                  find: "ddh",
                  replace: "দ্ধ"
              }, {
                  find: "dbh",
                  replace: "দ্ভ"
              }, {
                  find: "dv",
                  replace: "দ্ভ"
              }, {
                  find: "dm",
                  replace: "দ্ম"
              }, {
                  find: "DD",
                  replace: "ড্ড"
              }, {
                  find: "Dh",
                  replace: "ঢ"
              }, {
                  find: "dh",
                  replace: "ধ"
              }, {
                  find: "dg",
                  replace: "দ্গ"
              }, {
                  find: "dd",
                  replace: "দ্দ"
              }, {
                  find: "D",
                  replace: "ড"
              }, {
                  find: "d",
                  replace: "দ"
              }, {
                  find: "...",
                  replace: "..."
              }, {
                  find: ".`",
                  replace: "."
              }, {
                  find: "..",
                  replace: "।।"
              }, {
                  find: ".",
                  replace: "।"
              }, {
                  find: "ghn",
                  replace: "ঘ্ন"
              }, {
                  find: "Ghn",
                  replace: "ঘ্ন"
              }, {
                  find: "gdh",
                  replace: "গ্ধ"
              }, {
                  find: "Gdh",
                  replace: "গ্ধ"
              }, {
                  find: "gN",
                  replace: "গ্ণ"
              }, {
                  find: "GN",
                  replace: "গ্ণ"
              }, {
                  find: "gn",
                  replace: "গ্ন"
              }, {
                  find: "Gn",
                  replace: "গ্ন"
              }, {
                  find: "gm",
                  replace: "গ্ম"
              }, {
                  find: "Gm",
                  replace: "গ্ম"
              }, {
                  find: "gl",
                  replace: "গ্ল"
              }, {
                  find: "Gl",
                  replace: "গ্ল"
              }, {
                  find: "gg",
                  replace: "জ্ঞ"
              }, {
                  find: "GG",
                  replace: "জ্ঞ"
              }, {
                  find: "Gg",
                  replace: "জ্ঞ"
              }, {
                  find: "gG",
                  replace: "জ্ঞ"
              }, {
                  find: "gh",
                  replace: "ঘ"
              }, {
                  find: "Gh",
                  replace: "ঘ"
              }, {
                  find: "g",
                  replace: "গ"
              }, {
                  find: "G",
                  replace: "গ"
              }, {
                  find: "hN",
                  replace: "হ্ণ"
              }, {
                  find: "hn",
                  replace: "হ্ন"
              }, {
                  find: "hm",
                  replace: "হ্ম"
              }, {
                  find: "hl",
                  replace: "হ্ল"
              }, {
                  find: "h",
                  replace: "হ"
              }, {
                  find: "jjh",
                  replace: "জ্ঝ"
              }, {
                  find: "jNG",
                  replace: "জ্ঞ"
              }, {
                  find: "jh",
                  replace: "ঝ"
              }, {
                  find: "jj",
                  replace: "জ্জ"
              }, {
                  find: "j",
                  replace: "জ"
              }, {
                  find: "J",
                  replace: "জ"
              }, {
                  find: "kkhN",
                  replace: "ক্ষ্ণ"
              }, {
                  find: "kShN",
                  replace: "ক্ষ্ণ"
              }, {
                  find: "kkhm",
                  replace: "ক্ষ্ম"
              }, {
                  find: "kShm",
                  replace: "ক্ষ্ম"
              }, {
                  find: "kxN",
                  replace: "ক্ষ্ণ"
              }, {
                  find: "kxm",
                  replace: "ক্ষ্ম"
              }, {
                  find: "kkh",
                  replace: "ক্ষ"
              }, {
                  find: "kSh",
                  replace: "ক্ষ"
              }, {
                  find: "ksh",
                  replace: "কশ"
              }, {
                  find: "kx",
                  replace: "ক্ষ"
              }, {
                  find: "kk",
                  replace: "ক্ক"
              }, {
                  find: "kT",
                  replace: "ক্ট"
              }, {
                  find: "kt",
                  replace: "ক্ত"
              }, {
                  find: "kl",
                  replace: "ক্ল"
              }, {
                  find: "ks",
                  replace: "ক্স"
              }, {
                  find: "kh",
                  replace: "খ"
              }, {
                  find: "k",
                  replace: "ক"
              }, {
                  find: "lbh",
                  replace: "ল্ভ"
              }, {
                  find: "ldh",
                  replace: "ল্ধ"
              }, {
                  find: "lkh",
                  replace: "লখ"
              }, {
                  find: "lgh",
                  replace: "লঘ"
              }, {
                  find: "lph",
                  replace: "লফ"
              }, {
                  find: "lk",
                  replace: "ল্ক"
              }, {
                  find: "lg",
                  replace: "ল্গ"
              }, {
                  find: "lT",
                  replace: "ল্ট"
              }, {
                  find: "lD",
                  replace: "ল্ড"
              }, {
                  find: "lp",
                  replace: "ল্প"
              }, {
                  find: "lv",
                  replace: "ল্ভ"
              }, {
                  find: "lm",
                  replace: "ল্ম"
              }, {
                  find: "ll",
                  replace: "ল্ল"
              }, {
                  find: "lb",
                  replace: "ল্ব"
              }, {
                  find: "l",
                  replace: "ল"
              }, {
                  find: "mth",
                  replace: "ম্থ"
              }, {
                  find: "mph",
                  replace: "ম্ফ"
              }, {
                  find: "mbh",
                  replace: "ম্ভ"
              }, {
                  find: "mpl",
                  replace: "মপ্ল"
              }, {
                  find: "mn",
                  replace: "ম্ন"
              }, {
                  find: "mp",
                  replace: "ম্প"
              }, {
                  find: "mv",
                  replace: "ম্ভ"
              }, {
                  find: "mm",
                  replace: "ম্ম"
              }, {
                  find: "ml",
                  replace: "ম্ল"
              }, {
                  find: "mb",
                  replace: "ম্ব"
              }, {
                  find: "mf",
                  replace: "ম্ফ"
              }, {
                  find: "m",
                  replace: "ম"
              }, {
                  find: "0",
                  replace: "০"
              }, {
                  find: "1",
                  replace: "১"
              }, {
                  find: "2",
                  replace: "২"
              }, {
                  find: "3",
                  replace: "৩"
              }, {
                  find: "4",
                  replace: "৪"
              }, {
                  find: "5",
                  replace: "৫"
              }, {
                  find: "6",
                  replace: "৬"
              }, {
                  find: "7",
                  replace: "৭"
              }, {
                  find: "8",
                  replace: "৮"
              }, {
                  find: "9",
                  replace: "৯"
              }, {
                  find: "NgkSh",
                  replace: "ঙ্ক্ষ"
              }, {
                  find: "Ngkkh",
                  replace: "ঙ্ক্ষ"
              }, {
                  find: "NGch",
                  replace: "ঞ্ছ"
              }, {
                  find: "Nggh",
                  replace: "ঙ্ঘ"
              }, {
                  find: "Ngkh",
                  replace: "ঙ্খ"
              }, {
                  find: "NGjh",
                  replace: "ঞ্ঝ"
              }, {
                  find: "ngOU",
                  replace: "ঙ্গৌ"
              }, {
                  find: "ngOI",
                  replace: "ঙ্গৈ"
              }, {
                  find: "Ngkx",
                  replace: "ঙ্ক্ষ"
              }, {
                  find: "NGc",
                  replace: "ঞ্চ"
              }, {
                  find: "nch",
                  replace: "ঞ্ছ"
              }, {
                  find: "njh",
                  replace: "ঞ্ঝ"
              }, {
                  find: "ngh",
                  replace: "ঙ্ঘ"
              }, {
                  find: "Ngk",
                  replace: "ঙ্ক"
              }, {
                  find: "Ngx",
                  replace: "ঙ্ষ"
              }, {
                  find: "Ngg",
                  replace: "ঙ্গ"
              }, {
                  find: "Ngm",
                  replace: "ঙ্ম"
              }, {
                  find: "NGj",
                  replace: "ঞ্জ"
              }, {
                  find: "ndh",
                  replace: "ন্ধ"
              }, {
                  find: "nTh",
                  replace: "ন্ঠ"
              }, {
                  find: "NTh",
                  replace: "ণ্ঠ"
              }, {
                  find: "nth",
                  replace: "ন্থ"
              }, {
                  find: "nkh",
                  replace: "ঙ্খ"
              }, {
                  find: "ngo",
                  replace: "ঙ্গ"
              }, {
                  find: "nga",
                  replace: "ঙ্গা"
              }, {
                  find: "ngi",
                  replace: "ঙ্গি"
              }, {
                  find: "ngI",
                  replace: "ঙ্গী"
              }, {
                  find: "ngu",
                  replace: "ঙ্গু"
              }, {
                  find: "ngU",
                  replace: "ঙ্গূ"
              }, {
                  find: "nge",
                  replace: "ঙ্গে"
              }, {
                  find: "ngO",
                  replace: "ঙ্গো"
              }, {
                  find: "NDh",
                  replace: "ণ্ঢ"
              }, {
                  find: "nsh",
                  replace: "নশ"
              }, {
                  find: "Ngr",
                  replace: "ঙর"
              }, {
                  find: "NGr",
                  replace: "ঞর"
              }, {
                  find: "ngr",
                  replace: "ংর"
              }, {
                  find: "nj",
                  replace: "ঞ্জ"
              }, {
                  find: "Ng",
                  replace: "ঙ"
              }, {
                  find: "NG",
                  replace: "ঞ"
              }, {
                  find: "nk",
                  replace: "ঙ্ক"
              }, {
                  find: "ng",
                  replace: "ং"
              }, {
                  find: "nn",
                  replace: "ন্ন"
              }, {
                  find: "NN",
                  replace: "ণ্ণ"
              }, {
                  find: "Nn",
                  replace: "ণ্ন"
              }, {
                  find: "nm",
                  replace: "ন্ম"
              }, {
                  find: "Nm",
                  replace: "ণ্ম"
              }, {
                  find: "nd",
                  replace: "ন্দ"
              }, {
                  find: "nT",
                  replace: "ন্ট"
              }, {
                  find: "NT",
                  replace: "ণ্ট"
              }, {
                  find: "nD",
                  replace: "ন্ড"
              }, {
                  find: "ND",
                  replace: "ণ্ড"
              }, {
                  find: "nt",
                  replace: "ন্ত"
              }, {
                  find: "ns",
                  replace: "ন্স"
              }, {
                  find: "nc",
                  replace: "ঞ্চ"
              }, {
                  find: "n",
                  replace: "ন"
              }, {
                  find: "N",
                  replace: "ণ"
              }, {
                  find: "OI`",
                  replace: "ৈ"
              }, {
                  find: "OU`",
                  replace: "ৌ"
              }, {
                  find: "O`",
                  replace: "ো"
              }, {
                  find: "OI",
                  replace: "ৈ",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "!consonant"
                      }],
                      replace: "ঐ"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }],
                      replace: "ঐ"
                  }]
              }, {
                  find: "OU",
                  replace: "ৌ",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "!consonant"
                      }],
                      replace: "ঔ"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }],
                      replace: "ঔ"
                  }]
              }, {
                  find: "O",
                  replace: "ো",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "!consonant"
                      }],
                      replace: "ও"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }],
                      replace: "ও"
                  }]
              }, {
                  find: "phl",
                  replace: "ফ্ল"
              }, {
                  find: "pT",
                  replace: "প্ট"
              }, {
                  find: "pt",
                  replace: "প্ত"
              }, {
                  find: "pn",
                  replace: "প্ন"
              }, {
                  find: "pp",
                  replace: "প্প"
              }, {
                  find: "pl",
                  replace: "প্ল"
              }, {
                  find: "ps",
                  replace: "প্স"
              }, {
                  find: "ph",
                  replace: "ফ"
              }, {
                  find: "fl",
                  replace: "ফ্ল"
              }, {
                  find: "f",
                  replace: "ফ"
              }, {
                  find: "p",
                  replace: "প"
              }, {
                  find: "rri`",
                  replace: "ৃ"
              }, {
                  find: "rri",
                  replace: "ৃ",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "!consonant"
                      }],
                      replace: "ঋ"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }],
                      replace: "ঋ"
                  }]
              }, {
                  find: "rrZ",
                  replace: "রর‍্য"
              }, {
                  find: "rry",
                  replace: "রর‍্য"
              }, {
                  find: "rZ",
                  replace: "র‍্য",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "consonant"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "r"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "y"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "w"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "x"
                      }],
                      replace: "্র্য"
                  }]
              }, {
                  find: "ry",
                  replace: "র‍্য",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "consonant"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "r"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "y"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "w"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "x"
                      }],
                      replace: "্র্য"
                  }]
              }, {
                  find: "rr",
                  replace: "রর",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "!consonant"
                      }, {
                          type: "suffix",
                          scope: "!vowel"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "r"
                      }, {
                          type: "suffix",
                          scope: "!punctuation"
                      }],
                      replace: "র্"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "consonant"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "r"
                      }],
                      replace: "্রর"
                  }]
              }, {
                  find: "Rg",
                  replace: "ড়্গ"
              }, {
                  find: "Rh",
                  replace: "ঢ়"
              }, {
                  find: "R",
                  replace: "ড়"
              }, {
                  find: "r",
                  replace: "র",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "consonant"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "r"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "y"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "w"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "x"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "Z"
                      }],
                      replace: "্র"
                  }]
              }, {
                  find: "shch",
                  replace: "শ্ছ"
              }, {
                  find: "ShTh",
                  replace: "ষ্ঠ"
              }, {
                  find: "Shph",
                  replace: "ষ্ফ"
              }, {
                  find: "Sch",
                  replace: "শ্ছ"
              }, {
                  find: "skl",
                  replace: "স্ক্ল"
              }, {
                  find: "skh",
                  replace: "স্খ"
              }, {
                  find: "sth",
                  replace: "স্থ"
              }, {
                  find: "sph",
                  replace: "স্ফ"
              }, {
                  find: "shc",
                  replace: "শ্চ"
              }, {
                  find: "sht",
                  replace: "শ্ত"
              }, {
                  find: "shn",
                  replace: "শ্ন"
              }, {
                  find: "shm",
                  replace: "শ্ম"
              }, {
                  find: "shl",
                  replace: "শ্ল"
              }, {
                  find: "Shk",
                  replace: "ষ্ক"
              }, {
                  find: "ShT",
                  replace: "ষ্ট"
              }, {
                  find: "ShN",
                  replace: "ষ্ণ"
              }, {
                  find: "Shp",
                  replace: "ষ্প"
              }, {
                  find: "Shf",
                  replace: "ষ্ফ"
              }, {
                  find: "Shm",
                  replace: "ষ্ম"
              }, {
                  find: "spl",
                  replace: "স্প্ল"
              }, {
                  find: "sk",
                  replace: "স্ক"
              }, {
                  find: "Sc",
                  replace: "শ্চ"
              }, {
                  find: "sT",
                  replace: "স্ট"
              }, {
                  find: "st",
                  replace: "স্ত"
              }, {
                  find: "sn",
                  replace: "স্ন"
              }, {
                  find: "sp",
                  replace: "স্প"
              }, {
                  find: "sf",
                  replace: "স্ফ"
              }, {
                  find: "sm",
                  replace: "স্ম"
              }, {
                  find: "sl",
                  replace: "স্ল"
              }, {
                  find: "sh",
                  replace: "শ"
              }, {
                  find: "Sc",
                  replace: "শ্চ"
              }, {
                  find: "St",
                  replace: "শ্ত"
              }, {
                  find: "Sn",
                  replace: "শ্ন"
              }, {
                  find: "Sm",
                  replace: "শ্ম"
              }, {
                  find: "Sl",
                  replace: "শ্ল"
              }, {
                  find: "Sh",
                  replace: "ষ"
              }, {
                  find: "s",
                  replace: "স"
              }, {
                  find: "S",
                  replace: "শ"
              }, {
                  find: "oo`",
                  replace: "ু"
              }, {
                  find: "oo",
                  replace: "ু",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "!consonant"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "উ"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "উ"
                  }]
              }, {
                  find: "o`",
                  replace: ""
              }, {
                  find: "oZ",
                  replace: "অ্য"
              }, {
                  find: "o",
                  replace: "",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "vowel"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "o"
                      }],
                      replace: "ও"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "vowel"
                      }, {
                          type: "prefix",
                          scope: "exact",
                          value: "o"
                      }],
                      replace: "অ"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }],
                      replace: "অ"
                  }]
              }, {
                  find: "tth",
                  replace: "ত্থ"
              }, {
                  find: "t``",
                  replace: "ৎ"
              }, {
                  find: "TT",
                  replace: "ট্ট"
              }, {
                  find: "Tm",
                  replace: "ট্ম"
              }, {
                  find: "Th",
                  replace: "ঠ"
              }, {
                  find: "tn",
                  replace: "ত্ন"
              }, {
                  find: "tm",
                  replace: "ত্ম"
              }, {
                  find: "th",
                  replace: "থ"
              }, {
                  find: "tt",
                  replace: "ত্ত"
              }, {
                  find: "T",
                  replace: "ট"
              }, {
                  find: "t",
                  replace: "ত"
              }, {
                  find: "aZ",
                  replace: "অ্যা"
              }, {
                  find: "AZ",
                  replace: "অ্যা"
              }, {
                  find: "a`",
                  replace: "া"
              }, {
                  find: "A`",
                  replace: "া"
              }, {
                  find: "a",
                  replace: "া",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "আ"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "!consonant"
                      }, {
                          type: "prefix",
                          scope: "!exact",
                          value: "a"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "য়া"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "exact",
                          value: "a"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "আ"
                  }]
              }, {
                  find: "i`",
                  replace: "ি"
              }, {
                  find: "i",
                  replace: "ি",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "!consonant"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "ই"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "ই"
                  }]
              }, {
                  find: "I`",
                  replace: "ী"
              }, {
                  find: "I",
                  replace: "ী",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "!consonant"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "ঈ"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "ঈ"
                  }]
              }, {
                  find: "u`",
                  replace: "ু"
              }, {
                  find: "u",
                  replace: "ু",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "!consonant"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "উ"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "উ"
                  }]
              }, {
                  find: "U`",
                  replace: "ূ"
              }, {
                  find: "U",
                  replace: "ূ",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "!consonant"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "ঊ"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "ঊ"
                  }]
              }, {
                  find: "ee`",
                  replace: "ী"
              }, {
                  find: "ee",
                  replace: "ী",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "!consonant"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "ঈ"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "ঈ"
                  }]
              }, {
                  find: "e`",
                  replace: "ে"
              }, {
                  find: "e",
                  replace: "ে",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "!consonant"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "এ"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }, {
                          type: "suffix",
                          scope: "!exact",
                          value: "`"
                      }],
                      replace: "এ"
                  }]
              }, {
                  find: "z",
                  replace: "য"
              }, {
                  find: "Z",
                  replace: "্য"
              }, {
                  find: "y",
                  replace: "্য",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "!consonant"
                      }, {
                          type: "prefix",
                          scope: "!punctuation"
                      }],
                      replace: "য়"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }],
                      replace: "ইয়"
                  }]
              }, {
                  find: "Y",
                  replace: "য়"
              }, {
                  find: "q",
                  replace: "ক"
              }, {
                  find: "w",
                  replace: "ও",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }, {
                          type: "suffix",
                          scope: "vowel"
                      }],
                      replace: "ওয়"
                  }, {
                      matches: [{
                          type: "prefix",
                          scope: "consonant"
                      }],
                      replace: "্ব"
                  }]
              }, {
                  find: "x",
                  replace: "ক্স",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "punctuation"
                      }],
                      replace: "এক্স"
                  }]
              }, {
                  find: ":`",
                  replace: ":"
              }, {
                  find: ":",
                  replace: "ঃ"
              }, {
                  find: "^`",
                  replace: "^"
              }, {
                  find: "^",
                  replace: "ঁ"
              }, {
                  find: ",,",
                  replace: "্‌"
              }, {
                  find: ",",
                  replace: ","
              }, {
                  find: "$",
                  replace: "৳"
              }, {
                  find: "`",
                  replace: ""
              }],
              vowel: "aeiou",
              consonant: "bcdfghjklmnpqrstvwxyz",
              casesensitive: "oiudgjnrstyz"
          }
      }, c({
          OmicronLab: u
      }), s = "avroregexlib";
      var p = l.utf8;
      r.prototype = {
          parse: function(e) {
              e = this._fixString(e);
              for (var t = "", n = 0; n < e.length; ++n) {
                  for (var r = n, i = n + 1, a = r - 1, o = !1, a = 0; a < this.data.patterns.length; ++a) {
                      var s = this.data.patterns[a],
                          i = n + s.find.length;
                      if (i <= e.length && e.substring(r, i) == s.find) {
                          if (a = r - 1, "undefined" != typeof s.rules)
                              for (var l = 0; l < s.rules.length; ++l) {
                                  for (var c = s.rules[l], u = !0, p = 0, h = 0; h < c.matches.length; ++h) {
                                      var d = c.matches[h],
                                          p = "suffix" === d.type ? i : a;
                                      if ("undefined" == typeof d.negative && (d.negative = !1, "!" === d.scope.charAt(0) && (d.negative = !0, d.scope = d.scope.substring(1))), "undefined" == typeof d.value && (d.value = ""), "punctuation" === d.scope) {
                                          if (!(0 > p && "prefix" === d.type || p >= e.length && "suffix" === d.type || this._isPunctuation(e.charAt(p))) ^ d.negative) {
                                              u = !1;
                                              break
                                          }
                                      } else if ("vowel" === d.scope) {
                                          if (!((p >= 0 && "prefix" === d.type || p < e.length && "suffix" === d.type) && this._isVowel(e.charAt(p))) ^ d.negative) {
                                              u = !1;
                                              break
                                          }
                                      } else if ("consonant" === d.scope) {
                                          if (!((p >= 0 && "prefix" === d.type || p < e.length && "suffix" === d.type) && this._isConsonant(e.charAt(p))) ^ d.negative) {
                                              u = !1;
                                              break
                                          }
                                      } else if ("exact" === d.scope) {
                                          var f;
                                          if ("suffix" === d.type ? (p = i, f = i + d.value.length) : (p = r - d.value.length, f = r), !this._isExact(d.value, e, p, f, d.negative)) {
                                              u = !1;
                                              break
                                          }
                                      }
                                  }
                                  if (u) {
                                      t += c.replace + "(্[যবম])?(্?)([ঃঁ]?)", n = i - 1, o = !0;
                                      break
                                  }
                              }
                          if (1 == o) break;
                          t += s.replace + "(্[যবম])?(্?)([ঃঁ]?)", n = i - 1, o = !0;
                          break
                      }
                  }
                  o || (t += e.charAt(n))
              }
              return t
          },
          _convertToUnicodeValue: function(e) {
              var t = "";
              e = p.utf8Decode(e);
              for (var n = 0; n < e.length; n++) {
                  var r = e.charCodeAt(n);
                  if (r >= 255) {
                      for (var r = r.toString(16), i = 4 - r.length, a = ""; i > 0; i--) a += "0";
                      t += "\\u" + a + r
                  } else t += e.charAt(n)
              }
              return t
          },
          _fixString: function(e) {
              for (var t = "", n = 0; n < e.length; ++n) {
                  var r = e.charAt(n);
                  this._isIgnore(r) || (t += r.toLowerCase())
              }
              return t
          },
          _isVowel: function(e) {
              return 0 <= this.data.vowel.indexOf(e.toLowerCase())
          },
          _isConsonant: function(e) {
              return 0 <= this.data.consonant.indexOf(e.toLowerCase())
          },
          _isPunctuation: function(e) {
              return !(this._isVowel(e) || this._isConsonant(e))
          },
          _isExact: function(e, t, n, r, i) {
              return (n >= 0 && r < t.length && t.substring(n, r) === e) ^ i
          },
          _isIgnore: function(e) {
              return 0 <= this.data.ignore.indexOf(e.toLowerCase())
          },
          data: {
              patterns: [{
                  find: "aa",
                  replace: "(আ|(য়া)|া|((([অএ]্যা?)|[আএ]|([‌‍]?(্য)?া)|(য়া))((([অএ]্যা?)|[আএ]|([‌‍]?(্য)?া)|(য়া)))?))",
                  rules: []
              }, {
                  find: "au",
                  replace: "(ঔ|ৌ(([অএ]্যা?)|[আএ]|([‌‍]?(্য)?া)|(য়া))([উঊুূ]|(য়[ুূ])))",
                  rules: []
              }, {
                  find: "az",
                  replace: "((([অএ]্যা?)|[আএ]|([‌‍]?(্য)?া)|(য়া))((জ|য|(জ়)|([‌‍]?্য)))?)",
                  rules: []
              }, {
                  find: "ai",
                  replace: "(ঐ|ৈ|(([অএ]্যা?)|[আএ]|([‌‍]?(্য)?া)|(য়া))([ইঈিী]|(য়[িী])))",
                  rules: []
              }, {
                  find: "a",
                  replace: "(([অএ]্যা?)|[আএ]|([‌‍]?(্য)?া)|(য়া))",
                  rules: []
              }, {
                  find: "bbh",
                  replace: "((ব?্?(ভ|(ব্?(হ|ঃ|(হ্‌?)))))|((ব্?ব?)্?(হ|ঃ|(হ্‌?)))|(ব্?ব্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "bdh",
                  replace: "((ব্?(ধ|ঢ|([দড]্?(হ|ঃ|(হ্‌?)))))|((ব্?[দড])্?(হ|ঃ|(হ্‌?)))|(ব্?[দড]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "bhl",
                  replace: "(((ভ|(ব্?(হ|ঃ|(হ্‌?))))্?ল)|(ব্?((হ|ঃ|(হ্‌?))্?ল))|(ব্?(হ|ঃ|(হ্‌?))্?ল))",
                  rules: []
              }, {
                  find: "bh",
                  replace: "(ভ|(ব্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "bb",
                  replace: "(ব্?ব?)",
                  rules: []
              }, {
                  find: "bd",
                  replace: "(ব্?[দড])",
                  rules: []
              }, {
                  find: "bv",
                  replace: "(ব?্?ভ)",
                  rules: []
              }, {
                  find: "b",
                  replace: "ব",
                  rules: []
              }, {
                  find: "chchh",
                  replace: "((চ্ছ)|((চ|ছ|([চছ]্?(হ|ঃ|(হ্‌?))))্?(((চ|ছ|([চছ]্?(হ|ঃ|(হ্‌?))))্?((হ|ঃ|(হ্‌?)))?)|([চছ]্?((হ|ঃ|(হ্‌?))্?(হ|ঃ|(হ্‌?))))|([চছ]্?(হ|ঃ|(হ্‌?))্?(হ|ঃ|(হ্‌?)))))|((চ|ছ|([চছ]্?(হ|ঃ|(হ্‌?))))্?(চ|ছ|([চছ]্?(হ|ঃ|(হ্‌?))))্?(হ|ঃ|(হ্‌?)))|([চছ]্?(হ|ঃ|(হ্‌?))্?[চছ]্?(হ|ঃ|(হ্‌?))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "cch",
                  replace: "(([চছ]্?(চ|ছ|([চছ]্?(হ|ঃ|(হ্‌?)))))|([চছ]্?[চছ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "chh",
                  replace: "(((চ|ছ|([চছ]্?(হ|ঃ|(হ্‌?))))্?((হ|ঃ|(হ্‌?)))?)|([চছ]্?((হ|ঃ|(হ্‌?))্?(হ|ঃ|(হ্‌?))))|([চছ]্?(হ|ঃ|(হ্‌?))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "cng",
                  replace: "((চ্ঞ)|([চছ]্?(ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ)))))|([চছ]্?[নণঁঙঞং]্?(গ|(জ্ঞ)))|(([চছ]্?[নণঁঙঞং])্?(গ|(জ্ঞ))))",
                  rules: []
              }, {
                  find: "ch",
                  replace: "(চ|ছ|([চছ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "ck",
                  replace: "(ক|([চছ]্?ক))",
                  rules: []
              }, {
                  find: "cc",
                  replace: "([চছ]্?[চছ]?)",
                  rules: []
              }, {
                  find: "cn",
                  replace: "([চছ]্?[নণঁঙঞং])",
                  rules: []
              }, {
                  find: "c",
                  replace: "([চছ])",
                  rules: []
              }, {
                  find: "dhm",
                  replace: "(((ধ|ঢ|([দড]্?(হ|ঃ|(হ্‌?))))্?ম)|([দড]্?((হ|ঃ|(হ্‌?))্?ম))|([দড]্?(হ|ঃ|(হ্‌?))্?ম))",
                  rules: []
              }, {
                  find: "dhn",
                  replace: "(((ধ|ঢ|([দড]্?(হ|ঃ|(হ্‌?))))্?[নণঁঙঞং])|([দড]্?((হ|ঃ|(হ্‌?))্?[নণঁঙঞং]))|([দড]্?(হ|ঃ|(হ্‌?))্?[নণঁঙঞং]))",
                  rules: []
              }, {
                  find: "dbh",
                  replace: "(([দড]্?(ভ|(ব্?(হ|ঃ|(হ্‌?)))))|(([দড]্?ব)্?(হ|ঃ|(হ্‌?)))|([দড]্?ব্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "ddh",
                  replace: "(([দড]?্?(ধ|ঢ|([দড]্?(হ|ঃ|(হ্‌?)))))|(([দড]্?[দড]?)্?(হ|ঃ|(হ্‌?)))|([দড]্?[দড]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "dgh",
                  replace: "(([দড]্?(ঘ|((গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?)))))|(([দড]্?(গ|(জ্ঞ)))্?(হ|ঃ|(হ্‌?)))|([দড]্?(গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "db",
                  replace: "([দড]্?ব)",
                  rules: []
              }, {
                  find: "dd",
                  replace: "([দড]্?[দড]?)",
                  rules: []
              }, {
                  find: "dg",
                  replace: "([দড]্?(গ|(জ্ঞ)))",
                  rules: []
              }, {
                  find: "dh",
                  replace: "(ধ|ঢ|([দড]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "d",
                  replace: "([দড])",
                  rules: []
              }, {
                  find: "ey",
                  replace: "(এ|ই|ে|(েই)|(এই)|ঈ|ী|(((এ্যা?)|[এে]|([‌‍]?(্য)া)|(য়ে))(য়|(ইয়)|([‌‍]?্য))))",
                  rules: []
              }, {
                  find: "ee",
                  replace: "(ই|ঈ|ি|ী|(য়েই)|(((এ্যা?)|[এে]|([‌‍]?(্য)া)|(য়ে))((এ্যা?)|[এে]|([‌‍]?(্য)া)|(য়ে))))",
                  rules: []
              }, {
                  find: "e",
                  replace: "((এ্যা?)|[এে]|([‌‍]?(্য)া)|(য়ে))",
                  rules: []
              }, {
                  find: "ff",
                  replace: "(ফ্?ফ?)",
                  rules: []
              }, {
                  find: "f",
                  replace: "ফ",
                  rules: []
              }, {
                  find: "ggh",
                  replace: "((((জ্ঞ)|((গ|(জ্ঞ))্?((গ|(জ্ঞ)))?))্?(হ|ঃ|(হ্‌?)))|((গ|(জ্ঞ))্?(ঘ|((গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?)))))|((গ|(জ্ঞ))্?(গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "gdh",
                  replace: "(((গ|(জ্ঞ))্?(ধ|ঢ|([দড]্?(হ|ঃ|(হ্‌?)))))|((গ|(জ্ঞ))্?[দড]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "ghn",
                  replace: "(((ঘ|((গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?))))্?[নণঁঙঞং])|((গ|(জ্ঞ))্?((হ|ঃ|(হ্‌?))্?[নণঁঙঞং]))|((গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?))্?[নণঁঙঞং]))",
                  rules: []
              }, {
                  find: "gh",
                  replace: "(ঘ|((গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "gg",
                  replace: "((জ্ঞ)|((গ|(জ্ঞ))্?((গ|(জ্ঞ)))?))",
                  rules: []
              }, {
                  find: "g",
                  replace: "(গ|(জ্ঞ))",
                  rules: []
              }, {
                  find: "hl",
                  replace: "((হ|ঃ|(হ্‌?))্?ল)",
                  rules: []
              }, {
                  find: "hh",
                  replace: "((হ|ঃ|(হ্‌?))্?(হ|ঃ|(হ্‌?)))",
                  rules: []
              }, {
                  find: "hm",
                  replace: "((হ|ঃ|(হ্‌?))্?ম)",
                  rules: []
              }, {
                  find: "hn",
                  replace: "((হ|ঃ|(হ্‌?))্?[নণঁঙঞং])",
                  rules: []
              }, {
                  find: "h",
                  replace: "(হ|ঃ|(হ্‌?))",
                  rules: []
              }, {
                  find: "ia",
                  replace: "((ঞা)|(([ইঈিী]|(য়[িী]))(([অএ]্যা?)|[আএ]|([‌‍]?(্য)?া)|(য়া))))",
                  rules: []
              }, {
                  find: "i",
                  replace: "([ইঈিী]|(য়[িী]))",
                  rules: []
              }, {
                  find: "jng",
                  replace: "((জ্ঞ)|(([জয]|(জ়))্?(ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ)))))|(([জয]|(জ়))্?[নণঁঙঞং]্?(গ|(জ্ঞ))))",
                  rules: []
              }, {
                  find: "jjh",
                  replace: "(((([জয]|(জ়)))?্?(ঝ|(([জয]|(জ়))্?(হ|ঃ|(হ্‌?)))))|(হ্য)|(((হ্য)|(([জয]|(জ়))্?(([জয]|(জ়)))?))্?(হ|ঃ|(হ্‌?)))|(([জয]|(জ়))্?([জয]|(জ়))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "jj",
                  replace: "((হ্য)|(([জয]|(জ়))্?(([জয]|(জ়)))?))",
                  rules: []
              }, {
                  find: "jh",
                  replace: "(ঝ|(([জয]|(জ়))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "j",
                  replace: "([জয]|(জ়))",
                  rules: []
              }, {
                  find: "kshm",
                  replace: "((((ক্?(স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?)))))|((ক্?[সশষ])্?(হ|ঃ|(হ্‌?)))|(ক্?[সশষ]্?(হ|ঃ|(হ্‌?))))্?ম)|(ক্?(((স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?))))্?ম)|([সশষ]্?((হ|ঃ|(হ্‌?))্?ম))|([সশষ]্?(হ|ঃ|(হ্‌?))্?ম)))|((ক্?[সশষ])্?((হ|ঃ|(হ্‌?))্?ম))|(ক্?(স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?))))্?ম)|(ক্?[সশষ]্?(হ|ঃ|(হ্‌?))্?ম))",
                  rules: []
              }, {
                  find: "kkhm",
                  replace: "((((ক্ষ)|((ক্?ক?)্?(হ|ঃ|(হ্‌?)))|(ক?্?(খ|(ক্ষ)|(ক্?(হ|ঃ|(হ্‌?)))))|(ক্?ক্?(হ|ঃ|(হ্‌?))))্?ম)|((ক্?ক?)্?((হ|ঃ|(হ্‌?))্?ম))|(ক্?ক্?(হ|ঃ|(হ্‌?))্?ম)|(ক্?(খ|(ক্ষ)|(ক্?(হ|ঃ|(হ্‌?))))্?ম))",
                  rules: []
              }, {
                  find: "kshn",
                  replace: "((((ক্?(স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?)))))|((ক্?[সশষ])্?(হ|ঃ|(হ্‌?)))|(ক্?[সশষ]্?(হ|ঃ|(হ্‌?))))্?[নণঁঙঞং])|(ক্?(((স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?))))্?[নণঁঙঞং])|([সশষ]্?((হ|ঃ|(হ্‌?))্?[নণঁঙঞং]))|([সশষ]্?(হ|ঃ|(হ্‌?))্?[নণঁঙঞং])))|((ক্?[সশষ])্?((হ|ঃ|(হ্‌?))্?[নণঁঙঞং]))|(ক্?(স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?))))্?[নণঁঙঞং])|(ক্?[সশষ]্?(হ|ঃ|(হ্‌?))্?[নণঁঙঞং]))",
                  rules: []
              }, {
                  find: "kkhn",
                  replace: "((((ক্ষ)|((ক্?ক?)্?(হ|ঃ|(হ্‌?)))|(ক?্?(খ|(ক্ষ)|(ক্?(হ|ঃ|(হ্‌?)))))|(ক্?ক্?(হ|ঃ|(হ্‌?))))্?[নণঁঙঞং])|((ক্?ক?)্?((হ|ঃ|(হ্‌?))্?[নণঁঙঞং]))|(ক্?ক্?(হ|ঃ|(হ্‌?))্?[নণঁঙঞং])|(ক্?(খ|(ক্ষ)|(ক্?(হ|ঃ|(হ্‌?))))্?[নণঁঙঞং]))",
                  rules: []
              }, {
                  find: "ksh",
                  replace: "((ক্?(স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?)))))|((ক্?[সশষ])্?(হ|ঃ|(হ্‌?)))|(ক্?[সশষ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "kkh",
                  replace: "((ক্ষ)|((ক্?ক?)্?(হ|ঃ|(হ্‌?)))|(ক?্?(খ|(ক্ষ)|(ক্?(হ|ঃ|(হ্‌?)))))|(ক্?ক্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "kxm",
                  replace: "((((ক্ষ)|(ক্?((ক্স)|ষ)))্?ম)|(ক্?(((ক্স)|ষ)্?ম))|(ক্?((ক্স)|ষ)্?ম))",
                  rules: []
              }, {
                  find: "kxn",
                  replace: "((((ক্ষ)|(ক্?((ক্স)|ষ)))্?[নণঁঙঞং])|(ক্?(((ক্স)|ষ)্?[নণঁঙঞং]))|(ক্?((ক্স)|ষ)্?[নণঁঙঞং]))",
                  rules: []
              }, {
                  find: "kh",
                  replace: "(খ|(ক্ষ)|(ক্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "kk",
                  replace: "(ক্?ক?)",
                  rules: []
              }, {
                  find: "ks",
                  replace: "(ক্?[সশষ])",
                  rules: []
              }, {
                  find: "kx",
                  replace: "((ক্ষ)|(ক্?((ক্স)|ষ)))",
                  rules: []
              }, {
                  find: "k",
                  replace: "ক",
                  rules: []
              }, {
                  find: "lkh",
                  replace: "((ল্?(খ|(ক্ষ)|(ক্?(হ|ঃ|(হ্‌?)))))|((ল্?ক)্?(হ|ঃ|(হ্‌?)))|(ল্?ক্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "lgh",
                  replace: "((ল্?(ঘ|((গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?)))))|((ল্?(গ|(জ্ঞ)))্?(হ|ঃ|(হ্‌?)))|(ল্?(গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "lph",
                  replace: "((ল্?(ফ|(প্?(হ|ঃ|(হ্‌?)))))|((ল্?প)্?(হ|ঃ|(হ্‌?)))|(ল্?প্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "ldh",
                  replace: "((ল্?(ধ|ঢ|([দড]্?(হ|ঃ|(হ্‌?)))))|((ল্?[দড])্?(হ|ঃ|(হ্‌?)))|(ল্?[দড]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "lbh",
                  replace: "((ল্?(ভ|(ব্?(হ|ঃ|(হ্‌?)))))|((ল্?ব)্?(হ|ঃ|(হ্‌?)))|(ল্?ব্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "ll",
                  replace: "((হ্ল)|(ল?্?ল)|(ল্?ল))",
                  rules: []
              }, {
                  find: "lk",
                  replace: "(ল্?ক)",
                  rules: []
              }, {
                  find: "lg",
                  replace: "(ল্?(গ|(জ্ঞ)))",
                  rules: []
              }, {
                  find: "lp",
                  replace: "(ল্?প)",
                  rules: []
              }, {
                  find: "ld",
                  replace: "(ল্?[দড])",
                  rules: []
              }, {
                  find: "lb",
                  replace: "(ল্?ব)",
                  rules: []
              }, {
                  find: "l",
                  replace: "ল",
                  rules: []
              }, {
                  find: "mbh",
                  replace: "((ম্?(ভ|(ব্?(হ|ঃ|(হ্‌?)))))|((ম্?ব)্?(হ|ঃ|(হ্‌?)))|(ম্?ব্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "mph",
                  replace: "((ম্?(ফ|(প্?(হ|ঃ|(হ্‌?)))))|((ম্?প)্?(হ|ঃ|(হ্‌?)))|(ম্?প্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "mth",
                  replace: "((ম্?(থ|ঠ|([তটৎ]্?(হ|ঃ|(হ্‌?)))))|((ম্?[তটৎ])্?(হ|ঃ|(হ্‌?)))|(ম্?[তটৎ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "mm",
                  replace: "((হ্ম)|(ম্?ম?))",
                  rules: []
              }, {
                  find: "mb",
                  replace: "(ম্?ব)",
                  rules: []
              }, {
                  find: "mp",
                  replace: "(ম্?প)",
                  rules: []
              }, {
                  find: "mt",
                  replace: "(ম্?[তটৎ])",
                  rules: []
              }, {
                  find: "m",
                  replace: "ম",
                  rules: []
              }, {
                  find: "ngksh",
                  replace: "(((((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?ক)|([নণঁঙঞং]্?(গ|(জ্ঞ))্?ক))্?(স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?)))))|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?ক্?(স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?)))))|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?((ক্?(স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?)))))|((ক্?[সশষ])্?(হ|ঃ|(হ্‌?)))|(ক্?[সশষ]্?(হ|ঃ|(হ্‌?)))))|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?(ক্?[সশষ])্?(হ|ঃ|(হ্‌?)))|([নণঁঙঞং]্?(গ|(জ্ঞ))্?ক্?[সশষ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "ngkkh",
                  replace: "(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?((ক্ষ)|((ক্?ক?)্?(হ|ঃ|(হ্‌?)))|(ক?্?(খ|(ক্ষ)|(ক্?(হ|ঃ|(হ্‌?)))))|(ক্?ক্?(হ|ঃ|(হ্‌?)))))|((((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?ক)|([নণঁঙঞং]্?(গ|(জ্ঞ))্?ক))্?(খ|(ক্ষ)|(ক্?(হ|ঃ|(হ্‌?)))))|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?ক্?(খ|(ক্ষ)|(ক্?(হ|ঃ|(হ্‌?)))))|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?(ক্?ক?)্?(হ|ঃ|(হ্‌?)))|([নণঁঙঞং]্?(গ|(জ্ঞ))্?ক্?ক্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "ngch",
                  replace: "(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?(চ|ছ|([চছ]্?(হ|ঃ|(হ্‌?)))))|((((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?[চছ])|([নণঁঙঞং]্?(গ|(জ্ঞ))্?[চছ]))্?(হ|ঃ|(হ্‌?)))|([নণঁঙঞং]্?(গ|(জ্ঞ))্?[চছ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "nggh",
                  replace: "(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?(ঘ|((গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?)))))|([নণঁঙঞং]্?((জ্ঞ)|((গ|(জ্ঞ))্?((গ|(জ্ঞ)))?))্?(হ|ঃ|(হ্‌?)))|([নণঁঙঞং]্?((((জ্ঞ)|((গ|(জ্ঞ))্?((গ|(জ্ঞ)))?))্?(হ|ঃ|(হ্‌?)))|((গ|(জ্ঞ))্?(ঘ|((গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?)))))|((গ|(জ্ঞ))্?(গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?)))))|([নণঁঙঞং]্?(গ|(জ্ঞ))্?(গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?)))|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?(গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?)))|(((ঙ্গ)|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?(গ|(জ্ঞ)))|([নণঁঙঞং]্?(গ|(জ্ঞ))্?(গ|(জ্ঞ))))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "ngkx",
                  replace: "(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?((ক্ষ)|(ক্?((ক্স)|ষ))))|((((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?ক)|([নণঁঙঞং]্?(গ|(জ্ঞ))্?ক))্?((ক্স)|ষ))|([নণঁঙঞং]্?(গ|(জ্ঞ))্?((ক্ষ)|(ক্?((ক্স)|ষ))))|([নণঁঙঞং]্?(গ|(জ্ঞ))্?ক্?((ক্স)|ষ)))",
                  rules: []
              }, {
                  find: "ngjh",
                  replace: "(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?(ঝ|(([জয]|(জ়))্?(হ|ঃ|(হ্‌?)))))|((((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?([জয]|(জ়)))|([নণঁঙঞং]্?(গ|(জ্ঞ))্?([জয]|(জ়))))্?(হ|ঃ|(হ্‌?)))|([নণঁঙঞং]্?(গ|(জ্ঞ))্?([জয]|(জ়))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "ngkh",
                  replace: "(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?(খ|(ক্ষ)|(ক্?(হ|ঃ|(হ্‌?)))))|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?ক্?(হ|ঃ|(হ্‌?)))|([নণঁঙঞং]্?(গ|(জ্ঞ))্?ক্?(হ|ঃ|(হ্‌?)))|((((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?ক)|([নণঁঙঞং]্?(গ|(জ্ঞ))্?ক))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "nsh",
                  replace: "(([নণঁঙঞং]্?(স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?)))))|([নণঁঙঞং]্?[সশষ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "ndh",
                  replace: "(([নণঁঙঞং]্?(ধ|ঢ|([দড]্?(হ|ঃ|(হ্‌?)))))|(([নণঁঙঞং]্?[দড])্?(হ|ঃ|(হ্‌?)))|([নণঁঙঞং]্?[দড]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "nkh",
                  replace: "(([নণঁঙঞং]্?(খ|(ক্ষ)|(ক্?(হ|ঃ|(হ্‌?)))))|(((ঙ্ক)|([নণঁঙঞং]্?ক))্?(হ|ঃ|(হ্‌?)))|([নণঁঙঞং]্?ক্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "nth",
                  replace: "(([নণঁঙঞং]্?(থ|ঠ|([তটৎ]্?(হ|ঃ|(হ্‌?)))))|(([নণঁঙঞং]্?[তটৎ])্?(হ|ঃ|(হ্‌?)))|([নণঁঙঞং]্?[তটৎ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "ngj",
                  replace: "(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?([জয]|(জ়)))|([নণঁঙঞং]্?(গ|(জ্ঞ))্?([জয]|(জ়))))",
                  rules: []
              }, {
                  find: "ngm",
                  replace: "(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?ম)|([নণঁঙঞং]্?(গ|(জ্ঞ))্?ম))",
                  rules: []
              }, {
                  find: "ngg",
                  replace: "((ঙ্গ)|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?(গ|(জ্ঞ)))|([নণঁঙঞং]্?(গ|(জ্ঞ))্?(গ|(জ্ঞ))))",
                  rules: []
              }, {
                  find: "ngx",
                  replace: "(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?((ক্স)|ষ))|([নণঁঙঞং]্?(গ|(জ্ঞ))্?((ক্স)|ষ)))",
                  rules: []
              }, {
                  find: "ngk",
                  replace: "(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?ক)|([নণঁঙঞং]্?(গ|(জ্ঞ))্?ক))",
                  rules: []
              }, {
                  find: "ngh",
                  replace: "((ঙ্ঘ)|([নণঁঙঞং]্?(ঘ|((গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?)))))|([নণঁঙঞং]্?(গ|(জ্ঞ))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "nch",
                  replace: "(([নণঁঙঞং]্?(চ|ছ|([চছ]্?(হ|ঃ|(হ্‌?)))))|(((ঞ্চ)|([নণঁঙঞং]্?[চছ]))্?(হ|ঃ|(হ্‌?)))|([নণঁঙঞং]্?[চছ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "njh",
                  replace: "(([নণঁঙঞং]্?(ঝ|(([জয]|(জ়))্?(হ|ঃ|(হ্‌?)))))|(((ঞ্জ)|([নণঁঙঞং]্?([জয]|(জ়))))্?(হ|ঃ|(হ্‌?)))|([নণঁঙঞং]্?([জয]|(জ়))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "ngc",
                  replace: "(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))্?[চছ])|([নণঁঙঞং]্?(গ|(জ্ঞ))্?[চছ]))",
                  rules: []
              }, {
                  find: "nc",
                  replace: "((ঞ্চ)|([নণঁঙঞং]্?[চছ]))",
                  rules: []
              }, {
                  find: "nn",
                  replace: "((হ্ণ)|(হ্ন)|([নণঁঙঞং]্?[নণঁঙঞং]?))",
                  rules: []
              }, {
                  find: "ng",
                  replace: "(ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং]্?(গ|(জ্ঞ))))",
                  rules: []
              }, {
                  find: "nk",
                  replace: "((ঙ্ক)|([নণঁঙঞং]্?ক))",
                  rules: []
              }, {
                  find: "nj",
                  replace: "((ঞ্জ)|([নণঁঙঞং]্?([জয]|(জ়))))",
                  rules: []
              }, {
                  find: "nd",
                  replace: "([নণঁঙঞং]্?[দড])",
                  rules: []
              }, {
                  find: "nt",
                  replace: "([নণঁঙঞং]্?[তটৎ])",
                  rules: []
              }, {
                  find: "n",
                  replace: "([নণঁঙঞং])",
                  rules: []
              }, {
                  find: "oo",
                  replace: "((([উঊুূ]|(য়[ুূ])))|(([ওোঅ]|(অ্য)|(য়ো?))?([ওোঅ]|(অ্য)|(য়ো?))?))",
                  rules: []
              }, {
                  find: "oi",
                  replace: "(ঐ|ৈ|(([ওোঅ]|(অ্য)|(য়ো?))?([ইঈিী]|(য়[িী]))))",
                  rules: []
              }, {
                  find: "ou",
                  replace: "(ঔ|ৌ|(([ওোঅ]|(অ্য)|(য়ো?))?([উঊুূ]|(য়[ুূ]))))",
                  rules: []
              }, {
                  find: "o",
                  replace: "(([ওোঅ]|(অ্য)|(য়ো?))?)",
                  rules: [{
                      matches: [{
                          type: "prefix",
                          scope: "punctuation",
                          value: "",
                          negative: "FALSE"
                      }],
                      replace: "([ওোঅ]|(অ্য)|(য়ো?))"
                  }]
              }, {
                  find: "phl",
                  replace: "(((ফ|(প্?(হ|ঃ|(হ্‌?))))্?ল)|(প্?((হ|ঃ|(হ্‌?))্?ল))|(প্?(হ|ঃ|(হ্‌?))্?ল))",
                  rules: []
              }, {
                  find: "ph",
                  replace: "(ফ|(প্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "pp",
                  replace: "(প্?প?)",
                  rules: []
              }, {
                  find: "p",
                  replace: "প",
                  rules: []
              }, {
                  find: "qq",
                  replace: "(ক্?ক?)",
                  rules: []
              }, {
                  find: "q",
                  replace: "ক",
                  rules: []
              }, {
                  find: "rri",
                  replace: "(ঋ|ৃ|(([রড়ঢ়]|(হ্র))([রড়ঢ়]|(হ্র))([ইঈিী]|(য়[িী]))))",
                  rules: []
              }, {
                  find: "ri",
                  replace: "(ঋ|ৃ|(হৃ)|(([রড়ঢ়]|(হ্র))([ইঈিী]|(য়[িী]))))",
                  rules: []
              }, {
                  find: "rh",
                  replace: "((([রড়ঢ়]|(হ্র)))|(([রড়ঢ়]|(হ্র))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "r",
                  replace: "([রড়ঢ়]|(হ্র))",
                  rules: []
              }, {
                  find: "shsh",
                  replace: "((((স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?)))))?্?(স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?)))))|([সশষ]্?(হ|ঃ|(হ্‌?))্?[সশষ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "ssh",
                  replace: "(([সশষ]?্?(স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?)))))|([সশষ]্?[সশষ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "shm",
                  replace: "(((স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?))))্?ম)|([সশষ]্?((হ|ঃ|(হ্‌?))্?ম))|([সশষ]্?(হ|ঃ|(হ্‌?))্?ম))",
                  rules: []
              }, {
                  find: "shn",
                  replace: "(((স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?))))্?[নণঁঙঞং])|([সশষ]্?((হ|ঃ|(হ্‌?))্?[নণঁঙঞং]))|([সশষ]্?(হ|ঃ|(হ্‌?))্?[নণঁঙঞং]))",
                  rules: []
              }, {
                  find: "ss",
                  replace: "([সশষ]্?[সশষ]?)",
                  rules: []
              }, {
                  find: "sh",
                  replace: "(স|শ|ষ|([সশষ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "s",
                  replace: "([সশষ])",
                  rules: []
              }, {
                  find: "thth",
                  replace: "((ত্থ)|(((থ|ঠ|([তটৎ]্?(হ|ঃ|(হ্‌?)))))?্?(থ|ঠ|([তটৎ]্?(হ|ঃ|(হ্‌?)))))|([তটৎ]্?(হ|ঃ|(হ্‌?))্?[তটৎ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "tth",
                  replace: "(([তটৎ]?্?(থ|ঠ|([তটৎ]্?(হ|ঃ|(হ্‌?)))))|(([তটৎ]্?[তটৎ]?)্?(হ|ঃ|(হ্‌?)))|([তটৎ]্?[তটৎ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "t``",
                  replace: "ৎ",
                  rules: []
              }, {
                  find: "tth",
                  replace: "((([তটৎ]?(্?)(থ|ঠ|([তটৎ](্?)(হ|ঃ|(হ্‌?)))))|(([তটৎ](্?)[তটৎ]?)(্?)(হ|ঃ|(হ্‌?)))|([তটৎ](্?)[তটৎ](্?)(হ|ঃ|(হ্‌?)))))",
                  rules: []
              }, {
                  find: "tt",
                  replace: "([তটৎ]্?[তটৎ]?)",
                  rules: []
              }, {
                  find: "th",
                  replace: "(থ|ঠ|([তটৎ]্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "t",
                  replace: "([তটৎ])",
                  rules: []
              }, {
                  find: "uu",
                  replace: "(ঊ|ূ|(([উঊুূ]|(য়[ুূ]))(([উঊুূ]|(য়[ুূ])))?))",
                  rules: []
              }, {
                  find: "u",
                  replace: "([উঊুূ]|(য়[ুূ]))",
                  rules: []
              }, {
                  find: "vv",
                  replace: "(ভ্?ভ?)",
                  rules: []
              }, {
                  find: "v",
                  replace: "ভ",
                  rules: []
              }, {
                  find: "w",
                  replace: "(ও|(ওয়)|(্ব))",
                  rules: []
              }, {
                  find: "xm",
                  replace: "(((ক্স)|ষ)্?ম)",
                  rules: []
              }, {
                  find: "xn",
                  replace: "(((ক্স)|ষ)্?[নণঁঙঞং])",
                  rules: []
              }, {
                  find: "x",
                  replace: "((ক্স)|ষ)",
                  rules: []
              }, {
                  find: "y",
                  replace: "(য়|(ইয়)|([‌‍]?্য))",
                  rules: []
              }, {
                  find: "zzh",
                  replace: "((হ্য)|((জ|য|(জ়)|([‌‍]?্য))্?(ঝ|(([জয]|(জ়))্?(হ|ঃ|(হ্‌?)))))|(((হ্য)|((জ|য|(জ়)|([‌‍]?্য))্?((জ|য|(জ়)|([‌‍]?্য)))?))্?(হ|ঃ|(হ্‌?)))|((জ|য|(জ়)|([‌‍]?্য))্?(জ|য|(জ়)|([‌‍]?্য))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "zh",
                  replace: "(ঝ|(([জয]|(জ়))্?(হ|ঃ|(হ্‌?))))",
                  rules: []
              }, {
                  find: "zz",
                  replace: "((হ্য)|((জ|য|(জ়)|([‌‍]?্য))্?((জ|য|(জ়)|([‌‍]?্য)))?))",
                  rules: []
              }, {
                  find: "z",
                  replace: "(জ|য|(জ়)|([‌‍]?্য))",
                  rules: []
              }, {
                  find: "0",
                  replace: "(০|(0)|(শূন্য))",
                  rules: []
              }, {
                  find: "1",
                  replace: "(১|(1)|(এক))",
                  rules: []
              }, {
                  find: "2",
                  replace: "(২|(2)|(দুই))",
                  rules: []
              }, {
                  find: "3",
                  replace: "(৩|(3)|(তিন))",
                  rules: []
              }, {
                  find: "4",
                  replace: "(৪|(4)|(চার))",
                  rules: []
              }, {
                  find: "5",
                  replace: "(৫|(5)|(পাঁচ))",
                  rules: []
              }, {
                  find: "6",
                  replace: "((6)|৬|(ছয়))",
                  rules: []
              }, {
                  find: "7",
                  replace: "(৭|(7)|(সাত))",
                  rules: []
              }, {
                  find: "8",
                  replace: "(৮|(8)|(আট))",
                  rules: []
              }, {
                  find: "9",
                  replace: "(৯|(9)|(নয়))",
                  rules: []
              }, {
                  find: "`",
                  replace: "",
                  rules: []
              }],
              vowel: "aeiou",
              consonant: "bcdfghjklmnpqrstvwxyz",
              ignore: "|()[]{}^$*+?.~!@#%&-_='\";<>/\\,:`"
          }
      }, c({
          AvroRegex: r
      }), s = "dbsearch";
      var h = l.avrodict,
          d = l.avroregexlib;
      a.prototype = {
          search: function(e) {
              var t = [];
              switch (e.toLowerCase().charAt(0)) {
                  case "a":
                      t = "a aa e oi o nya y".split(" ");
                      break;
                  case "b":
                      t = ["b", "bh"];
                      break;
                  case "c":
                      t = ["c", "ch", "k"];
                      break;
                  case "d":
                      t = ["d", "dh", "dd", "ddh"];
                      break;
                  case "e":
                      t = ["i", "ii", "e", "y"];
                      break;
                  case "f":
                      t = ["ph"];
                      break;
                  case "g":
                      t = ["g", "gh", "j"];
                      break;
                  case "h":
                      t = ["h"];
                      break;
                  case "i":
                      t = ["i", "ii", "y"];
                      break;
                  case "j":
                      t = ["j", "jh", "z"];
                      break;
                  case "k":
                      t = ["k", "kh"];
                      break;
                  case "l":
                      t = ["l"];
                      break;
                  case "m":
                      t = ["h", "m"];
                      break;
                  case "n":
                      t = ["n", "nya", "nga", "nn"];
                      break;
                  case "o":
                      t = "a u uu oi o ou y".split(" ");
                      break;
                  case "p":
                      t = ["p", "ph"];
                      break;
                  case "q":
                      t = ["k"];
                      break;
                  case "r":
                      t = ["rri", "h", "r", "rr", "rrh"];
                      break;
                  case "s":
                      t = ["s", "sh", "ss"];
                      break;
                  case "t":
                      t = ["t", "th", "tt", "tth", "khandatta"];
                      break;
                  case "u":
                      t = ["u", "uu", "y"];
                      break;
                  case "v":
                      t = ["bh"];
                      break;
                  case "w":
                      t = ["o"];
                      break;
                  case "x":
                      t = ["e", "k"];
                      break;
                  case "y":
                      t = ["i", "y"];
                      break;
                  case "z":
                      t = ["h", "j", "jh", "z"]
              }
              e = this._regex.parse(e), e = "^" + e + "$";
              var n = [];
              for (i in t) n = n.concat(this._searchInArray(e, h.tables["w_" + t[i]]));
              return n
          },
          _searchInArray: function(e, t) {
              var n = [],
                  r = "",
                  i = RegExp(e);
              for (w in t) r = t[w], i.test(r) && n.push(r);
              return n
          },
          _printWords: function(e) {
              e = this.search(e);
              for (w in e) console.log(e[w])
          },
          _init: function() {
              this._regex = new d.AvroRegex
          }
      }, c({
          DBSearch: a
      }), s = "suggestionbuilder";
      var f = l.dbsearch,
          m = l.autocorrect.db,
          g = l.avrolib.OmicronLab.Avro.Phonetic,
          k = l.levenshtein,
          y = l.suffixdict.db;
      o.prototype = {
          _init: function() {
              this._dbSearch = new f.DBSearch, this._candidateSelections = this._loadCandidateSelectionsFromFile(), this._phoneticCache = {}, this._tempCache = {}, this._pref = this._defaultPref()
          },
          _defaultPref: function() {
              return {
                  dictEnable: !0
              }
          },
          _getDictionarySuggestion: function(e) {
              var t = [];
              return e = e.middle.toLowerCase(), t = this._phoneticCache[e] ? this._phoneticCache[e].slice(0) : this._dbSearch.search(e)
          },
          _getClassicPhonetic: function(e) {
              return p.utf8Decode(g.parse(e))
          },
          _correctCase: function(e) {
              return g.fixString(e)
          },
          _getAutocorrect: function(e, t) {
              var n = {};
              if (m[e]) m[e] == e ? (n.corrected = e, n.exact = !0) : (n.corrected = this._getClassicPhonetic(m[e]), n.exact = !1);
              else {
                  var r = this._correctCase(t.middle);
                  m[r] && (n.corrected = this._getClassicPhonetic(m[r]), n.exact = !1)
              }
              return n
          },
          _separatePadding: function(e) {
              e = e.match(/(^(?::`|\.`|[\-\]~!@#%&*()_=+[{}'";<>\/?|.,])*?(?=(?:,{2,}))|^(?::`|\.`|[\-\]~!@#%&*()_=+[{}'";<>\/?|.,])*)(.*?(?:,,)*)((?::`|\.`|[\-\]~!@#%&*()_=+[{}'";<>\/?|.,])*$)/);
              var t = {};
              return t.begin = e[1], t.middle = e[2], t.end = e[3], t
          },
          _sortByPhoneticRelevance: function(e, t) {
              var n = t.slice(0);
              return n.sort(function(t, n) {
                  var r = k.levenshtein(e, t),
                      i = k.levenshtein(e, n);
                  return i > r ? -1 : r > i ? 1 : 0
              }), n
          },
          _addToArray: function(e, t) {
              -1 == e.indexOf(t) && e.push(t)
          },
          _convertToUnicodeValue: function(e) {
              for (var t = "", n = 0; n < e.length; n++) var r = e.charCodeAt(n),
                  t = r >= 255 ? t + ("\\u0" + r.toString(16)) : t + e.charAt(n);
              return t
          },
          _isKar: function(e) {
              return 1 > e.length ? !1 : (e = e.charAt(0), /^[\u09be\u09bf\u09c0\u09c1\u09c2\u09c3\u09c7\u09c8\u09cb\u09cc\u09c4]$/.test(e))
          },
          _isVowel: function(e) {
              return 1 > e.length ? !1 : (e = e.charAt(0), /^[\u0985\u0986\u0987\u0988\u0989\u098a\u098b\u098f\u0990\u0993\u0994\u098c\u09e1\u09be\u09bf\u09c0\u09c1\u09c2\u09c3\u09c7\u09c8\u09cb\u09cc]$/.test(e))
          },
          _addToTempCache: function(e, t, n) {
              this._tempCache[e] || (this._tempCache[e] = {}, this._tempCache[e].base = t, this._tempCache[e].eng = n)
          },
          _addSuffix: function(e) {
              var t = [],
                  n = "";
              e = e.middle.toLowerCase();
              var r = e.length,
                  a = [];
              if (this._phoneticCache[e] && (a = this._phoneticCache[e].slice(0)), this._tempCache = {}, r >= 2)
                  for (var o = 1; r >= o; o++) {
                      var s = e.substr(o, r),
                          l = y[s];
                      if (l && (s = e.substr(0, e.length - s.length), this._phoneticCache[s])) {
                          for (var c = 0; c < this._phoneticCache[s].length; c++) {
                              var u = this._phoneticCache[s][c],
                                  n = u.substr(-1),
                                  p = l.substr(0, 1);
                              this._isVowel(n) && this._isKar(p) ? (n = u + "য়" + l, t.push(n), this._addToTempCache(n, u, s)) : "ৎ" == n ? (n = u.substr(0, u.length - 1) + "ত" + l, t.push(n), this._addToTempCache(n, u, s)) : "ং" == n ? (n = u.substr(0, u.length - 1) + "ঙ" + l, t.push(n)) : (n = u + l, t.push(n), this._addToTempCache(n, u, s))
                          }
                          for (i in t) a.push(t[i])
                      }
                  }
              return a
          },
          _joinSuggestion: function(e, t, n, r) {
              var a = [];
              if (this._pref.dictEnable) {
                  e.corrected && (a.push(e.corrected), e.exact || t.push(e.corrected)), this._phoneticCache[r.middle.toLowerCase()] || 0 < t.length && (this._phoneticCache[r.middle.toLowerCase()] = t.slice(0)), t = this._addSuffix(r), t = this._sortByPhoneticRelevance(n, t);
                  for (i in t) this._addToArray(a, t[i]);
                  this._addToArray(a, n), n = {}, n.prevSelection = this._getPreviousSelection(r, a);
                  for (i in a) e.exact ? e.corrected != a[i] && (a[i] = r.begin + a[i] + r.end) : a[i] = r.begin + a[i] + r.end;
                  n.words = a
              } else a.push(n), a[0] = r.begin + a[0] + r.end, n = {}, n.words = a, n.prevSelection = 0;
              return n
          },
          _getPreviousSelection: function(e, t) {
              var n = e.middle,
                  r = n.length,
                  i = "";
              if (this._candidateSelections[n]) i = this._candidateSelections[n];
              else if (r >= 2)
                  for (var a = 1; r > a; a++) {
                      var o = n.substr(-a).toLowerCase(),
                          s = y[o];
                      if (s && (o = n.substr(0, n.length - o.length), this._candidateSelections[o])) {
                          r = this._candidateSelections[o], i = r.substr(-1), a = s.substr(0, 1), i = this._isVowel(i) && this._isKar(a) ? r + "য়" + s : "ৎ" == i ? r.substr(0, r.length - 1) + "ত" + s : "ং" == i ? r.substr(0, r.length - 1) + "ঙ" + s : r + s, this._updateCandidateSelection(n, i);
                          break
                      }
                  }
              return n = t.indexOf(i), 0 > n ? 0 : n
          },
          _loadCandidateSelectionsFromFile: function() {
              return {}
          },
          _saveCandidateSelectionsToFile: function() {},
          _updateCandidateSelection: function(e, t) {
              this._candidateSelections[e] = t
          },
          _logger: function(e, t) {
              var n = (t || "Log") + ": " + JSON.stringify(e, null, "	");
              console.log(n)
          },
          getPref: function() {
              return this._pref
          },
          setPref: function(e) {
              this._pref = e
          },
          stringCommitted: function(e, t) {
              if (this._pref.dictEnable) {
                  if (this._tempCache[t]) {
                      var n = this._tempCache[t].base,
                          r = this._tempCache[t].eng;
                      this._candidateSelections[r] || (this._candidateSelections[r] = n, this._saveCandidateSelectionsToFile(this._candidateSelections))
                  }
                  this._saveCandidateSelectionsToFile(this._candidateSelections)
              }
          },
          updateCandidateSelection: function(e, t) {
              if (this._pref.dictEnable) {
                  var n = this._separatePadding(e);
                  this._updateCandidateSelection(n.middle, t)
              }
          },
          suggest: function(e) {
              var t = this._separatePadding(e);
              t.begin = this._getClassicPhonetic(t.begin), t.end = this._getClassicPhonetic(t.end);
              var n = this._getClassicPhonetic(t.middle);
              if (this._pref.dictEnable) var r = this._getDictionarySuggestion(t),
                  i = this._getAutocorrect(e, t);
              return this._joinSuggestion(i, r, n, t)
          }
      }, c({
          SuggestionBuilder: o
      });
      var b = new l.suggestionbuilder.SuggestionBuilder(e, t, n);
      return {
          suggest: function(e) {
              return b.suggest(e)
          },
          commit: function(e, t) {
              b.updateCandidateSelection(e, t), b.stringCommitted(e, t)
          },
          candidate: function(e) {
              return b._candidateSelections[e]
          },
          version: "" + l.version
      }
  }(e, t, n)
};
$(function() {
  function e() {
      return void 0 != applicationCache ? applicationCache.status == applicationCache.UPDATEREADY ? (applicationCache.swapCache(), void location.reload()) : void applicationCache.addEventListener("updateready", e, !1) : void 0
  }
  $("#wrapper").show(), $("#loader").slideUp().remove();
  var t, n, r, i, a, o, s, l, c, u, p = [],
      h = $("textarea"),
      d = $("#state"),
      f = !0,
      m = 25,
      g = window.localStorage,
      k = 0,
      y = '<li class="cur" data-value="${name}"><a href="#">${name}</a></li>';
  t = {
      DOWN: 40,
      UP: 38,
      ESC: 27,
      TAB: 9,
      ENTER: 13,
      SPACE: 32,
      CTRL: 17,
      P: 80,
      N: 78
  }, navigator.userAgent.match(/Android/i) && (g.browserWarning || (g.browserWarning = 1, alert("AvroPad may not work as expected due to some bugs of Android. Ask Google to get their things right."))), n = function() {
      return device.mobile() || device.tablet() || $(window).width() <= 800
  }, r = new AvroPhonetic(function() {
      return g.AvroCandidateSelection ? JSON.parse(g.AvroCandidateSelection) : {}
  }, function(e) {
      g.AvroCandidateSelection = JSON.stringify(e)
  }), a = function() {
      f = !f, $(document.body).toggleClass("sys"), d.prop("checked", f), k = 0
  }, o = function() {
      $(".drafts ul li a").each(function(e) {
          var t = "";
          g["draft-" + e] && (t = JSON.parse(g["draft-" + e])), p[e] = t, $(this).text(c(t, e))
      })
  }, c = function(e, t) {
      if (e = e ? e.trim().split("\n")[0] : "", e && e.trim().length) {
          if (e.length <= m) return e;
          if (" " === e[m]) return e.substring(0, m);
          var n = e.lastIndexOf(" ", m);
          return e.substring(0, n)
      }
      return "Draft " + (t + 1)
  }, s = function(e) {
      h.val(p[e]), h.trigger("autosize.resize").focus()
  }, $(document).on("keydown", function(e) {
      e.ctrlKey && -1 !== [190, 110].indexOf(e.keyCode) && (e.preventDefault(), a())
  }), d.on("change", function() {
      f = $(this).is(":checked")
  }), $(".drafts ul").on("click", "li", function(e) {
      e.preventDefault(), $(".drafts ul li.active").removeClass("active"), $(this).addClass("active"), u = $(this).find("a"), l = $(this).index(), s(l)
  }), o(), $(".drafts ul li:first a").trigger("click"), h.autosize().prop("disabled", !1).atwho({
      at: "",
      data: {},
      tpl: '<li data-value="${name}"><a href="#">${name}</a></li>',
      start_with_space: !1,
      limit: 11,
      highlight_first: !1,
      callbacks: {
          matcher: function(e, t) {
              if (!f) return null;
              var n = t.match(/\s?([^\s]+)$/);
              if (null == n) return null;
              var r = /[\u0980-\u09FF]+$/;
              return r.exec(n[1]) ? null : n[1]
          },
          filter: function(e) {
              var t = r.suggest(e);
              return t.words = t.words.slice(0, 10), r.candidate(e) === e && (t.prevSelection = t.words.length), t.words.push(e), i = 0, $.map(t.words, function(e, n) {
                  return n === t.prevSelection && (i = n), {
                      id: n,
                      name: e
                  }
              })
          },
          before_insert: function(e) {
              var t = this.query.text;
              return setTimeout(function() {
                  r.commit(t, e)
              }, 500), e
          },
          highlighter: function(e) {
              return e
          },
          sorter: function(e, t) {
              return t
          },
          tpl_eval: function(e, t) {
              try {
                  i === t.id && (e = y);
                  var n = $(e);
                  return n.attr("data-value", t.name), n.find("a").html(t.name), $("<p>").append(n).html()
              } catch (r) {
                  return ""
              }
          },
          before_reposition: function(e) {
              if (n()) {
                  var t = $(window).width(),
                      r = ($(window).innerHeight(), this.view.$el);
                  r.css({
                      maxWidth: t,
                      minWidth: 0
                  }), r.offset({
                      left: 0,
                      top: e.top
                  }); {
                      var i = r.width();
                      r.height()
                  }
                  if (e.left + i > t)
                      if (i + 2 >= t) e.left = 0;
                      else {
                          var a = e.left - i;
                          e.left = a >= 0 ? a : 0
                      }
              }
              return --k < 0 && (k = 0), e
          }
      }
  }).on("keyup", function() {
      var e = h.val();
      p[l] = e, g["draft-" + l] = JSON.stringify(e), u.text(c(e, l))
  }).focus().data("atwho").on_keydown = function(e) {
      var n = [192, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 189, 187, 219, 221, 186, 222, 188, 190, 191, 106, 107, 109, 110, 111, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
      (e.keyCode >= 65 && e.keyCode <= 90 || -1 !== n.indexOf(e.keyCode)) && !e.metaKey && ++k;
      var r, i;
      if (r = null != (i = this.controller()) ? i.view : void 0, !r || !r.visible()) return void(k = 0);
      switch (e.keyCode) {
          case t.ESC:
              e.preventDefault(), r.hide();
              break;
          case t.UP:
              e.preventDefault(), r.prev();
              break;
          case t.DOWN:
              e.preventDefault(), r.next();
              break;
          case t.P:
              if (!e.ctrlKey) return;
              e.preventDefault(), r.prev();
              break;
          case t.N:
              if (!e.ctrlKey) return;
              e.preventDefault(), r.next();
              break;
          case t.TAB:
          case t.ENTER:
          case t.SPACE:
              if (!r.visible()) return;
              e.preventDefault();
              var a = function() {
                  1 > k ? r.choose.call(r) : setTimeout(a, 50)
              };
              a();
              break;
          default:
              $.noop()
      }
  }, $(".content").on("click", function() {
      h.focus()
  }), $.fn.swipe.defaults.excludedElements = "label, button, input, select, a, .noSwipe", $("body").swipe({
      swipeLeft: a,
      swipeRight: a,
      fallbackToMouseEvents: !1,
      allowPageScroll: "vertical"
  }), e()
});