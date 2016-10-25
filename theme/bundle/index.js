! function (e) {
	function t(r) {
		if (n[r]) return n[r].exports;
		var i = n[r] = {
			exports: {},
			id: r,
			loaded: !1
		};
		return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
	}
	var n = {};
	return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
	n(1), window.jQuery = window.$ = n(5), window.hljs = n(6), n(7);
	var r = n(8),
		i = function (e, t, n) {
			var r, i, o, a, s, c = function () {
				var l = Date.now() - a;
				l < t && l >= 0 ? r = setTimeout(c, t - l) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)))
			};
			return function () {
				o = this, i = arguments, a = Date.now();
				var l = n && !r;
				return r || (r = setTimeout(c, t)), l && (s = e.apply(o, i), o = i = null), s
			}
		},
		o = function (e) {
			var t = Math.floor((new Date - e) / 1e3),
				n = Math.floor(t / 31536e3);
			return n > 1 ? n + timeSinceLang.year : (n = Math.floor(t / 2592e3), n > 1 ? n + timeSinceLang.month : (n = Math.floor(t / 86400), n > 1 ? n + timeSinceLang.day : (n = Math.floor(t / 3600), n > 1 ? n + timeSinceLang.hour : (n = Math.floor(t / 60), n > 1 ? n + timeSinceLang.minute : Math.floor(t) + timeSinceLang.second))))
		},
		a = function () {
			var e = $("#search");
			if (e.length) {
				var t = new Worker(root + "/bundle/searchWorker.js"),
					n = $(".article-list").html(),
					o = !1,
					a = function (e, t, n, i) {
						for (var o = 0; o < e.length; o++) {
							var a = e[o],
								s = '<span class="searched">' + a + "</span>";
							t = t.replace(a, s), n = n.replace(a, s)
						}
						return r.replace("{{title}}", t).replace("{{link}}", i).replace("{{preview}}", n)
					};
				t.onmessage = function (e) {
					var t = e.data.results,
						r = e.data.keywords;
					if (t.length) {
						for (var i = "", o = 0; o < t.length; o++) {
							var s = t[o],
								c = a(r, s.title, s.preview, s.link);
							i += c
						}
						$(".page-nav").hide(), $(".article-list").html(i)
					} else {
						var l = e.data.keyword;
						l ? ($(".page-nav").hide(), $(".article-list").html('<div class="empty">未搜索到 "<span>' + l + '</span>"</div>')) : ($(".page-nav").show(), $(".article-list").html(n))
					}
				}, e.on("input", i(function () {
					var e = $(this).val().trim();
					e ? t.postMessage({
						search: "search",
						keyword: e
					}) : ($(".page-nav").show(), $(".article-list").html(n))
				}, 500)), e.on("focus", function () {
					o || (t.postMessage({
						action: "start",
						root: root
					}), o = !0)
				})
			}
		};
	$(function () {
		$(".date").each(function (e, t) {
			var n = $(t),
				r = n.data("time");
			if (r) {
				var i = 1e3 * Number(r),
					a = new Date(i);
				n.prop("title", a).text(o(a))
			}
		}), $("pre code").each(function (e, t) {
			hljs.highlightBlock(t)
		}), $("img").each(function (e, t) {
			if ($item = $(t), $item.attr("data-src")) {
				$item.wrap('<a href="' + $item.attr("data-src") + '" target="_blank"></a>');
				var n = $item.prop("alt");
				$.trim(n) && $item.parent("a").after('<div class="image-alt">' + n + "</div>")
			}
		}), $("img").unveil && $("img").unveil(200, function () {
			$(this).load(function () {
				this.style.opacity = 1
			})
		}), a()
	})
}, function (e, t) {}, , , , function (e, t, n) {
	var r, i;
	/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */
	! function (t, n) {
		"object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return n(e)
		} : n(t)
	}("undefined" != typeof window ? window : this, function (n, o) {
		function a(e) {
			var t = !!e && "length" in e && e.length,
				n = le.type(e);
			return "function" !== n && !le.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
		}

		function s(e, t, n) {
			if (le.isFunction(t)) return le.grep(e, function (e, r) {
				return !!t.call(e, r, e) !== n
			});
			if (t.nodeType) return le.grep(e, function (e) {
				return e === t !== n
			});
			if ("string" == typeof t) {
				if (ye.test(t)) return le.filter(t, e, n);
				t = le.filter(t, e)
			}
			return le.grep(e, function (e) {
				return re.call(t, e) > -1 !== n
			})
		}

		function c(e, t) {
			for (;
				(e = e[t]) && 1 !== e.nodeType;);
			return e
		}

		function l(e) {
			var t = {};
			return le.each(e.match(Ce) || [], function (e, n) {
				t[n] = !0
			}), t
		}

		function u() {
			J.removeEventListener("DOMContentLoaded", u), n.removeEventListener("load", u), le.ready()
		}

		function d() {
			this.expando = le.expando + d.uid++
		}

		function f(e, t, n) {
			var r;
			if (void 0 === n && 1 === e.nodeType)
				if (r = "data-" + t.replace(qe, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
					try {
						n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Le.test(n) ? le.parseJSON(n) : n)
					} catch (i) {}
					Ae.set(e, t, n)
				} else n = void 0;
			return n
		}

		function p(e, t, n, r) {
			var i, o = 1,
				a = 20,
				s = r ? function () {
					return r.cur()
				} : function () {
					return le.css(e, t, "")
				},
				c = s(),
				l = n && n[3] || (le.cssNumber[t] ? "" : "px"),
				u = (le.cssNumber[t] || "px" !== l && +c) && $e.exec(le.css(e, t));
			if (u && u[3] !== l) {
				l = l || u[3], n = n || [], u = +c || 1;
				do o = o || ".5", u /= o, le.style(e, t, u + l); while (o !== (o = s() / c) && 1 !== o && --a)
			}
			return n && (u = +u || +c || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = u, r.end = i)), i
		}

		function h(e, t) {
			var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
			return void 0 === t || t && le.nodeName(e, t) ? le.merge([e], n) : n
		}

		function g(e, t) {
			for (var n = 0, r = e.length; n < r; n++) Me.set(e[n], "globalEval", !t || Me.get(t[n], "globalEval"))
		}

		function m(e, t, n, r, i) {
			for (var o, a, s, c, l, u, d = t.createDocumentFragment(), f = [], p = 0, m = e.length; p < m; p++)
				if (o = e[p], o || 0 === o)
					if ("object" === le.type(o)) le.merge(f, o.nodeType ? [o] : o);
					else if (Oe.test(o)) {
				for (a = a || d.appendChild(t.createElement("div")), s = (Ie.exec(o) || ["", ""])[1].toLowerCase(), c = ze[s] || ze._default, a.innerHTML = c[1] + le.htmlPrefilter(o) + c[2], u = c[0]; u--;) a = a.lastChild;
				le.merge(f, a.childNodes), a = d.firstChild, a.textContent = ""
			} else f.push(t.createTextNode(o));
			for (d.textContent = "", p = 0; o = f[p++];)
				if (r && le.inArray(o, r) > -1) i && i.push(o);
				else if (l = le.contains(o.ownerDocument, o), a = h(d.appendChild(o), "script"), l && g(a), n)
				for (u = 0; o = a[u++];) He.test(o.type || "") && n.push(o);
			return d
		}

		function b() {
			return !0
		}

		function v() {
			return !1
		}

		function y() {
			try {
				return J.activeElement
			} catch (e) {}
		}

		function x(e, t, n, r, i, o) {
			var a, s;
			if ("object" == typeof t) {
				"string" != typeof n && (r = r || n, n = void 0);
				for (s in t) x(e, s, n, r, t[s], o);
				return e
			}
			if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = v;
			else if (!i) return e;
			return 1 === o && (a = i, i = function (e) {
				return le().off(e), a.apply(this, arguments)
			}, i.guid = a.guid || (a.guid = le.guid++)), e.each(function () {
				le.event.add(this, t, i, r, n)
			})
		}

		function w(e, t) {
			return le.nodeName(e, "table") && le.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
		}

		function _(e) {
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
		}

		function k(e) {
			var t = Qe.exec(e.type);
			return t ? e.type = t[1] : e.removeAttribute("type"), e
		}

		function N(e, t) {
			var n, r, i, o, a, s, c, l;
			if (1 === t.nodeType) {
				if (Me.hasData(e) && (o = Me.access(e), a = Me.set(t, o), l = o.events)) {
					delete a.handle, a.events = {};
					for (i in l)
						for (n = 0, r = l[i].length; n < r; n++) le.event.add(t, i, l[i][n])
				}
				Ae.hasData(e) && (s = Ae.access(e), c = le.extend({}, s), Ae.set(t, c))
			}
		}

		function C(e, t) {
			var n = t.nodeName.toLowerCase();
			"input" === n && Re.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
		}

		function T(e, t, n, r) {
			t = te.apply([], t);
			var i, o, a, s, c, l, u = 0,
				d = e.length,
				f = d - 1,
				p = t[0],
				g = le.isFunction(p);
			if (g || d > 1 && "string" == typeof p && !se.checkClone && Xe.test(p)) return e.each(function (i) {
				var o = e.eq(i);
				g && (t[0] = p.call(this, i, o.html())), T(o, t, n, r)
			});
			if (d && (i = m(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
				for (a = le.map(h(i, "script"), _), s = a.length; u < d; u++) c = i, u !== f && (c = le.clone(c, !0, !0), s && le.merge(a, h(c, "script"))), n.call(e[u], c, u);
				if (s)
					for (l = a[a.length - 1].ownerDocument, le.map(a, k), u = 0; u < s; u++) c = a[u], He.test(c.type || "") && !Me.access(c, "globalEval") && le.contains(l, c) && (c.src ? le._evalUrl && le._evalUrl(c.src) : le.globalEval(c.textContent.replace(Ze, "")))
			}
			return e
		}

		function E(e, t, n) {
			for (var r, i = t ? le.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || le.cleanData(h(r)), r.parentNode && (n && le.contains(r.ownerDocument, r) && g(h(r, "script")), r.parentNode.removeChild(r));
			return e
		}

		function S(e, t) {
			var n = le(t.createElement(e)).appendTo(t.body),
				r = le.css(n[0], "display");
			return n.detach(), r
		}

		function M(e) {
			var t = J,
				n = Ye[e];
			return n || (n = S(e, t), "none" !== n && n || (Ve = (Ve || le("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ve[0].contentDocument, t.write(), t.close(), n = S(e, t), Ve.detach()), Ye[e] = n), n
		}

		function A(e, t, n) {
			var r, i, o, a, s = e.style;
			return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || le.contains(e.ownerDocument, e) || (a = le.style(e, t)), n && !se.pixelMarginRight() && Je.test(a) && Ge.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 !== a ? a + "" : a
		}

		function L(e, t) {
			return {
				get: function () {
					return e() ? void delete this.get : (this.get = t).apply(this, arguments)
				}
			}
		}

		function q(e) {
			if (e in st) return e;
			for (var t = e[0].toUpperCase() + e.slice(1), n = at.length; n--;)
				if (e = at[n] + t, e in st) return e
		}

		function j(e, t, n) {
			var r = $e.exec(t);
			return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
		}

		function $(e, t, n, r, i) {
			for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += le.css(e, n + Be[o], !0, i)), r ? ("content" === n && (a -= le.css(e, "padding" + Be[o], !0, i)), "margin" !== n && (a -= le.css(e, "border" + Be[o] + "Width", !0, i))) : (a += le.css(e, "padding" + Be[o], !0, i), "padding" !== n && (a += le.css(e, "border" + Be[o] + "Width", !0, i)));
			return a
		}

		function B(e, t, n) {
			var r = !0,
				i = "width" === t ? e.offsetWidth : e.offsetHeight,
				o = et(e),
				a = "border-box" === le.css(e, "boxSizing", !1, o);
			if (i <= 0 || null == i) {
				if (i = A(e, t, o), (i < 0 || null == i) && (i = e.style[t]), Je.test(i)) return i;
				r = a && (se.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
			}
			return i + $(e, t, n || (a ? "border" : "content"), r, o) + "px"
		}

		function D(e, t) {
			for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) r = e[a], r.style && (o[a] = Me.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && De(r) && (o[a] = Me.access(r, "olddisplay", M(r.nodeName)))) : (i = De(r), "none" === n && i || Me.set(r, "olddisplay", i ? n : le.css(r, "display"))));
			for (a = 0; a < s; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
			return e
		}

		function R(e, t, n, r, i) {
			return new R.prototype.init(e, t, n, r, i)
		}

		function I() {
			return n.setTimeout(function () {
				ct = void 0
			}), ct = le.now()
		}

		function H(e, t) {
			var n, r = 0,
				i = {
					height: e
				};
			for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Be[r], i["margin" + n] = i["padding" + n] = e;
			return t && (i.opacity = i.width = e), i
		}

		function z(e, t, n) {
			for (var r, i = (W.tweeners[t] || []).concat(W.tweeners["*"]), o = 0, a = i.length; o < a; o++)
				if (r = i[o].call(n, t, e)) return r
		}

		function O(e, t, n) {
			var r, i, o, a, s, c, l, u, d = this,
				f = {},
				p = e.style,
				h = e.nodeType && De(e),
				g = Me.get(e, "fxshow");
			n.queue || (s = le._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function () {
				s.unqueued || c()
			}), s.unqueued++, d.always(function () {
				d.always(function () {
					s.unqueued--, le.queue(e, "fx").length || s.empty.fire()
				})
			})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = le.css(e, "display"), u = "none" === l ? Me.get(e, "olddisplay") || M(e.nodeName) : l, "inline" === u && "none" === le.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
				p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
			}));
			for (r in t)
				if (i = t[r], ut.exec(i)) {
					if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
						if ("show" !== i || !g || void 0 === g[r]) continue;
						h = !0
					}
					f[r] = g && g[r] || le.style(e, r)
				} else l = void 0;
			if (le.isEmptyObject(f)) "inline" === ("none" === l ? M(e.nodeName) : l) && (p.display = l);
			else {
				g ? "hidden" in g && (h = g.hidden) : g = Me.access(e, "fxshow", {}), o && (g.hidden = !h), h ? le(e).show() : d.done(function () {
					le(e).hide()
				}), d.done(function () {
					var t;
					Me.remove(e, "fxshow");
					for (t in f) le.style(e, t, f[t])
				});
				for (r in f) a = z(h ? g[r] : 0, r, d), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
			}
		}

		function F(e, t) {
			var n, r, i, o, a;
			for (n in e)
				if (r = le.camelCase(n), i = t[r], o = e[n], le.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = le.cssHooks[r], a && "expand" in a) {
					o = a.expand(o), delete e[r];
					for (n in o) n in e || (e[n] = o[n], t[n] = i)
				} else t[r] = i
		}

		function W(e, t, n) {
			var r, i, o = 0,
				a = W.prefilters.length,
				s = le.Deferred().always(function () {
					delete c.elem
				}),
				c = function () {
					if (i) return !1;
					for (var t = ct || I(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, c = l.tweens.length; a < c; a++) l.tweens[a].run(o);
					return s.notifyWith(e, [l, o, n]), o < 1 && c ? n : (s.resolveWith(e, [l]), !1)
				},
				l = s.promise({
					elem: e,
					props: le.extend({}, t),
					opts: le.extend(!0, {
						specialEasing: {},
						easing: le.easing._default
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: ct || I(),
					duration: n.duration,
					tweens: [],
					createTween: function (t, n) {
						var r = le.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
						return l.tweens.push(r), r
					},
					stop: function (t) {
						var n = 0,
							r = t ? l.tweens.length : 0;
						if (i) return this;
						for (i = !0; n < r; n++) l.tweens[n].run(1);
						return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
					}
				}),
				u = l.props;
			for (F(u, l.opts.specialEasing); o < a; o++)
				if (r = W.prefilters[o].call(l, e, u, l.opts)) return le.isFunction(r.stop) && (le._queueHooks(l.elem, l.opts.queue).stop = le.proxy(r.stop, r)), r;
			return le.map(u, z, l), le.isFunction(l.opts.start) && l.opts.start.call(e, l), le.fx.timer(le.extend(c, {
				elem: e,
				anim: l,
				queue: l.opts.queue
			})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
		}

		function P(e) {
			return e.getAttribute && e.getAttribute("class") || ""
		}

		function U(e) {
			return function (t, n) {
				"string" != typeof t && (n = t, t = "*");
				var r, i = 0,
					o = t.toLowerCase().match(Ce) || [];
				if (le.isFunction(n))
					for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
			}
		}

		function K(e, t, n, r) {
			function i(s) {
				var c;
				return o[s] = !0, le.each(e[s] || [], function (e, s) {
					var l = s(t, n, r);
					return "string" != typeof l || a || o[l] ? a ? !(c = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
				}), c
			}
			var o = {},
				a = e === At;
			return i(t.dataTypes[0]) || !o["*"] && i("*")
		}

		function X(e, t) {
			var n, r, i = le.ajaxSettings.flatOptions || {};
			for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
			return r && le.extend(!0, e, r), e
		}

		function Q(e, t, n) {
			for (var r, i, o, a, s = e.contents, c = e.dataTypes;
				"*" === c[0];) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
			if (r)
				for (i in s)
					if (s[i] && s[i].test(r)) {
						c.unshift(i);
						break
					}
			if (c[0] in n) o = c[0];
			else {
				for (i in n) {
					if (!c[0] || e.converters[i + " " + c[0]]) {
						o = i;
						break
					}
					a || (a = i)
				}
				o = o || a
			}
			if (o) return o !== c[0] && c.unshift(o), n[o]
		}

		function Z(e, t, n, r) {
			var i, o, a, s, c, l = {},
				u = e.dataTypes.slice();
			if (u[1])
				for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
			for (o = u.shift(); o;)
				if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = u.shift())
					if ("*" === o) o = c;
					else if ("*" !== c && c !== o) {
				if (a = l[c + " " + o] || l["* " + o], !a)
					for (i in l)
						if (s = i.split(" "), s[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
							a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], u.unshift(s[1]));
							break
						}
				if (a !== !0)
					if (a && e["throws"]) t = a(t);
					else try {
						t = a(t)
					} catch (d) {
						return {
							state: "parsererror",
							error: a ? d : "No conversion from " + c + " to " + o
						}
					}
			}
			return {
				state: "success",
				data: t
			}
		}

		function V(e, t, n, r) {
			var i;
			if (le.isArray(t)) le.each(t, function (t, i) {
				n || $t.test(e) ? r(e, i) : V(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
			});
			else if (n || "object" !== le.type(t)) r(e, t);
			else
				for (i in t) V(e + "[" + i + "]", t[i], n, r)
		}

		function Y(e) {
			return le.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
		}
		var G = [],
			J = n.document,
			ee = G.slice,
			te = G.concat,
			ne = G.push,
			re = G.indexOf,
			ie = {},
			oe = ie.toString,
			ae = ie.hasOwnProperty,
			se = {},
			ce = "2.2.4",
			le = function (e, t) {
				return new le.fn.init(e, t)
			},
			ue = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			de = /^-ms-/,
			fe = /-([\da-z])/gi,
			pe = function (e, t) {
				return t.toUpperCase()
			};
		le.fn = le.prototype = {
			jquery: ce,
			constructor: le,
			selector: "",
			length: 0,
			toArray: function () {
				return ee.call(this)
			},
			get: function (e) {
				return null != e ? e < 0 ? this[e + this.length] : this[e] : ee.call(this)
			},
			pushStack: function (e) {
				var t = le.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function (e) {
				return le.each(this, e)
			},
			map: function (e) {
				return this.pushStack(le.map(this, function (t, n) {
					return e.call(t, n, t)
				}))
			},
			slice: function () {
				return this.pushStack(ee.apply(this, arguments))
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			eq: function (e) {
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
			},
			end: function () {
				return this.prevObject || this.constructor()
			},
			push: ne,
			sort: G.sort,
			splice: G.splice
		}, le.extend = le.fn.extend = function () {
			var e, t, n, r, i, o, a = arguments[0] || {},
				s = 1,
				c = arguments.length,
				l = !1;
			for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || le.isFunction(a) || (a = {}), s === c && (a = this, s--); s < c; s++)
				if (null != (e = arguments[s]))
					for (t in e) n = a[t], r = e[t], a !== r && (l && r && (le.isPlainObject(r) || (i = le.isArray(r))) ? (i ? (i = !1, o = n && le.isArray(n) ? n : []) : o = n && le.isPlainObject(n) ? n : {}, a[t] = le.extend(l, o, r)) : void 0 !== r && (a[t] = r));
			return a
		}, le.extend({
			expando: "jQuery" + (ce + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (e) {
				throw new Error(e)
			},
			noop: function () {},
			isFunction: function (e) {
				return "function" === le.type(e)
			},
			isArray: Array.isArray,
			isWindow: function (e) {
				return null != e && e === e.window
			},
			isNumeric: function (e) {
				var t = e && e.toString();
				return !le.isArray(e) && t - parseFloat(t) + 1 >= 0
			},
			isPlainObject: function (e) {
				var t;
				if ("object" !== le.type(e) || e.nodeType || le.isWindow(e)) return !1;
				if (e.constructor && !ae.call(e, "constructor") && !ae.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
				for (t in e);
				return void 0 === t || ae.call(e, t)
			},
			isEmptyObject: function (e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			type: function (e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ie[oe.call(e)] || "object" : typeof e
			},
			globalEval: function (e) {
				var t, n = eval;
				e = le.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
			},
			camelCase: function (e) {
				return e.replace(de, "ms-").replace(fe, pe)
			},
			nodeName: function (e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function (e, t) {
				var n, r = 0;
				if (a(e))
					for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
				else
					for (r in e)
						if (t.call(e[r], r, e[r]) === !1) break; return e
			},
			trim: function (e) {
				return null == e ? "" : (e + "").replace(ue, "")
			},
			makeArray: function (e, t) {
				var n = t || [];
				return null != e && (a(Object(e)) ? le.merge(n, "string" == typeof e ? [e] : e) : ne.call(n, e)), n
			},
			inArray: function (e, t, n) {
				return null == t ? -1 : re.call(t, e, n)
			},
			merge: function (e, t) {
				for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
				return e.length = i, e
			},
			grep: function (e, t, n) {
				for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
				return i
			},
			map: function (e, t, n) {
				var r, i, o = 0,
					s = [];
				if (a(e))
					for (r = e.length; o < r; o++) i = t(e[o], o, n), null != i && s.push(i);
				else
					for (o in e) i = t(e[o], o, n), null != i && s.push(i);
				return te.apply([], s)
			},
			guid: 1,
			proxy: function (e, t) {
				var n, r, i;
				if ("string" == typeof t && (n = e[t], t = e, e = n), le.isFunction(e)) return r = ee.call(arguments, 2), i = function () {
					return e.apply(t || this, r.concat(ee.call(arguments)))
				}, i.guid = e.guid = e.guid || le.guid++, i
			},
			now: Date.now,
			support: se
		}), "function" == typeof Symbol && (le.fn[Symbol.iterator] = G[Symbol.iterator]), le.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
			ie["[object " + t + "]"] = t.toLowerCase()
		});
		var he =
			/*!
			 * Sizzle CSS Selector Engine v2.2.1
			 * http://sizzlejs.com/
			 *
			 * Copyright jQuery Foundation and other contributors
			 * Released under the MIT license
			 * http://jquery.org/license
			 *
			 * Date: 2015-10-17
			 */
			function (e) {
				function t(e, t, n, r) {
					var i, o, a, s, c, l, d, p, h = t && t.ownerDocument,
						g = t ? t.nodeType : 9;
					if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
					if (!r && ((t ? t.ownerDocument || t : z) !== q && L(t), t = t || q, $)) {
						if (11 !== g && (l = be.exec(e)))
							if (i = l[1]) {
								if (9 === g) {
									if (!(a = t.getElementById(i))) return n;
									if (a.id === i) return n.push(a), n
								} else if (h && (a = h.getElementById(i)) && I(t, a) && a.id === i) return n.push(a), n
							} else {
								if (l[2]) return G.apply(n, t.getElementsByTagName(e)), n;
								if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(i)), n
							}
						if (w.qsa && !U[e + " "] && (!B || !B.test(e))) {
							if (1 !== g) h = t, p = e;
							else if ("object" !== t.nodeName.toLowerCase()) {
								for ((s = t.getAttribute("id")) ? s = s.replace(ye, "\\$&") : t.setAttribute("id", s = H), d = C(e), o = d.length, c = fe.test(s) ? "#" + s : "[id='" + s + "']"; o--;) d[o] = c + " " + f(d[o]);
								p = d.join(","), h = ve.test(e) && u(t.parentNode) || t
							}
							if (p) try {
								return G.apply(n, h.querySelectorAll(p)), n
							} catch (m) {} finally {
								s === H && t.removeAttribute("id")
							}
						}
					}
					return E(e.replace(se, "$1"), t, n, r)
				}

				function n() {
					function e(n, r) {
						return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = r
					}
					var t = [];
					return e
				}

				function r(e) {
					return e[H] = !0, e
				}

				function i(e) {
					var t = q.createElement("div");
					try {
						return !!e(t)
					} catch (n) {
						return !1
					} finally {
						t.parentNode && t.parentNode.removeChild(t), t = null
					}
				}

				function o(e, t) {
					for (var n = e.split("|"), r = n.length; r--;) _.attrHandle[n[r]] = t
				}

				function a(e, t) {
					var n = t && e,
						r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
					if (r) return r;
					if (n)
						for (; n = n.nextSibling;)
							if (n === t) return -1;
					return e ? 1 : -1
				}

				function s(e) {
					return function (t) {
						var n = t.nodeName.toLowerCase();
						return "input" === n && t.type === e
					}
				}

				function c(e) {
					return function (t) {
						var n = t.nodeName.toLowerCase();
						return ("input" === n || "button" === n) && t.type === e
					}
				}

				function l(e) {
					return r(function (t) {
						return t = +t, r(function (n, r) {
							for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
						})
					})
				}

				function u(e) {
					return e && "undefined" != typeof e.getElementsByTagName && e
				}

				function d() {}

				function f(e) {
					for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
					return r
				}

				function p(e, t, n) {
					var r = t.dir,
						i = n && "parentNode" === r,
						o = F++;
					return t.first ? function (t, n, o) {
						for (; t = t[r];)
							if (1 === t.nodeType || i) return e(t, n, o)
					} : function (t, n, a) {
						var s, c, l, u = [O, o];
						if (a) {
							for (; t = t[r];)
								if ((1 === t.nodeType || i) && e(t, n, a)) return !0
						} else
							for (; t = t[r];)
								if (1 === t.nodeType || i) {
									if (l = t[H] || (t[H] = {}), c = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = c[r]) && s[0] === O && s[1] === o) return u[2] = s[2];
									if (c[r] = u, u[2] = e(t, n, a)) return !0
								}
					}
				}

				function h(e) {
					return e.length > 1 ? function (t, n, r) {
						for (var i = e.length; i--;)
							if (!e[i](t, n, r)) return !1;
						return !0
					} : e[0]
				}

				function g(e, n, r) {
					for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
					return r
				}

				function m(e, t, n, r, i) {
					for (var o, a = [], s = 0, c = e.length, l = null != t; s < c; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
					return a
				}

				function b(e, t, n, i, o, a) {
					return i && !i[H] && (i = b(i)), o && !o[H] && (o = b(o, a)), r(function (r, a, s, c) {
						var l, u, d, f = [],
							p = [],
							h = a.length,
							b = r || g(t || "*", s.nodeType ? [s] : s, []),
							v = !e || !r && t ? b : m(b, f, e, s, c),
							y = n ? o || (r ? e : h || i) ? [] : a : v;
						if (n && n(v, y, s, c), i)
							for (l = m(y, p), i(l, [], s, c), u = l.length; u--;)(d = l[u]) && (y[p[u]] = !(v[p[u]] = d));
						if (r) {
							if (o || e) {
								if (o) {
									for (l = [], u = y.length; u--;)(d = y[u]) && l.push(v[u] = d);
									o(null, y = [], l, c)
								}
								for (u = y.length; u--;)(d = y[u]) && (l = o ? ee(r, d) : f[u]) > -1 && (r[l] = !(a[l] = d))
							}
						} else y = m(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, c) : G.apply(a, y)
					})
				}

				function v(e) {
					for (var t, n, r, i = e.length, o = _.relative[e[0].type], a = o || _.relative[" "], s = o ? 1 : 0, c = p(function (e) {
							return e === t
						}, a, !0), l = p(function (e) {
							return ee(t, e) > -1
						}, a, !0), u = [function (e, n, r) {
							var i = !o && (r || n !== S) || ((t = n).nodeType ? c(e, n, r) : l(e, n, r));
							return t = null, i
						}]; s < i; s++)
						if (n = _.relative[e[s].type]) u = [p(h(u), n)];
						else {
							if (n = _.filter[e[s].type].apply(null, e[s].matches), n[H]) {
								for (r = ++s; r < i && !_.relative[e[r].type]; r++);
								return b(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1).concat({
									value: " " === e[s - 2].type ? "*" : ""
								})).replace(se, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && f(e))
							}
							u.push(n)
						}
					return h(u)
				}

				function y(e, n) {
					var i = n.length > 0,
						o = e.length > 0,
						a = function (r, a, s, c, l) {
							var u, d, f, p = 0,
								h = "0",
								g = r && [],
								b = [],
								v = S,
								y = r || o && _.find.TAG("*", l),
								x = O += null == v ? 1 : Math.random() || .1,
								w = y.length;
							for (l && (S = a === q || a || l); h !== w && null != (u = y[h]); h++) {
								if (o && u) {
									for (d = 0, a || u.ownerDocument === q || (L(u), s = !$); f = e[d++];)
										if (f(u, a || q, s)) {
											c.push(u);
											break
										}
									l && (O = x)
								}
								i && ((u = !f && u) && p--, r && g.push(u))
							}
							if (p += h, i && h !== p) {
								for (d = 0; f = n[d++];) f(g, b, a, s);
								if (r) {
									if (p > 0)
										for (; h--;) g[h] || b[h] || (b[h] = V.call(c));
									b = m(b)
								}
								G.apply(c, b), l && !r && b.length > 0 && p + n.length > 1 && t.uniqueSort(c)
							}
							return l && (O = x, S = v), g
						};
					return i ? r(a) : a
				}
				var x, w, _, k, N, C, T, E, S, M, A, L, q, j, $, B, D, R, I, H = "sizzle" + 1 * new Date,
					z = e.document,
					O = 0,
					F = 0,
					W = n(),
					P = n(),
					U = n(),
					K = function (e, t) {
						return e === t && (A = !0), 0
					},
					X = 1 << 31,
					Q = {}.hasOwnProperty,
					Z = [],
					V = Z.pop,
					Y = Z.push,
					G = Z.push,
					J = Z.slice,
					ee = function (e, t) {
						for (var n = 0, r = e.length; n < r; n++)
							if (e[n] === t) return n;
						return -1
					},
					te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
					ne = "[\\x20\\t\\r\\n\\f]",
					re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
					ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
					oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
					ae = new RegExp(ne + "+", "g"),
					se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
					ce = new RegExp("^" + ne + "*," + ne + "*"),
					le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
					ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
					de = new RegExp(oe),
					fe = new RegExp("^" + re + "$"),
					pe = {
						ID: new RegExp("^#(" + re + ")"),
						CLASS: new RegExp("^\\.(" + re + ")"),
						TAG: new RegExp("^(" + re + "|[*])"),
						ATTR: new RegExp("^" + ie),
						PSEUDO: new RegExp("^" + oe),
						CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
						bool: new RegExp("^(?:" + te + ")$", "i"),
						needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
					},
					he = /^(?:input|select|textarea|button)$/i,
					ge = /^h\d$/i,
					me = /^[^{]+\{\s*\[native \w/,
					be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					ve = /[+~]/,
					ye = /'|\\/g,
					xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
					we = function (e, t, n) {
						var r = "0x" + t - 65536;
						return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
					},
					_e = function () {
						L()
					};
				try {
					G.apply(Z = J.call(z.childNodes), z.childNodes), Z[z.childNodes.length].nodeType
				} catch (ke) {
					G = {
						apply: Z.length ? function (e, t) {
							Y.apply(e, J.call(t))
						} : function (e, t) {
							for (var n = e.length, r = 0; e[n++] = t[r++];);
							e.length = n - 1
						}
					}
				}
				w = t.support = {}, N = t.isXML = function (e) {
					var t = e && (e.ownerDocument || e).documentElement;
					return !!t && "HTML" !== t.nodeName
				}, L = t.setDocument = function (e) {
					var t, n, r = e ? e.ownerDocument || e : z;
					return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, j = q.documentElement, $ = !N(q), (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _e, !1) : n.attachEvent && n.attachEvent("onunload", _e)), w.attributes = i(function (e) {
						return e.className = "i", !e.getAttribute("className")
					}), w.getElementsByTagName = i(function (e) {
						return e.appendChild(q.createComment("")), !e.getElementsByTagName("*").length
					}), w.getElementsByClassName = me.test(q.getElementsByClassName), w.getById = i(function (e) {
						return j.appendChild(e).id = H, !q.getElementsByName || !q.getElementsByName(H).length
					}), w.getById ? (_.find.ID = function (e, t) {
						if ("undefined" != typeof t.getElementById && $) {
							var n = t.getElementById(e);
							return n ? [n] : []
						}
					}, _.filter.ID = function (e) {
						var t = e.replace(xe, we);
						return function (e) {
							return e.getAttribute("id") === t
						}
					}) : (delete _.find.ID, _.filter.ID = function (e) {
						var t = e.replace(xe, we);
						return function (e) {
							var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
							return n && n.value === t
						}
					}), _.find.TAG = w.getElementsByTagName ? function (e, t) {
						return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
					} : function (e, t) {
						var n, r = [],
							i = 0,
							o = t.getElementsByTagName(e);
						if ("*" === e) {
							for (; n = o[i++];) 1 === n.nodeType && r.push(n);
							return r
						}
						return o
					}, _.find.CLASS = w.getElementsByClassName && function (e, t) {
						if ("undefined" != typeof t.getElementsByClassName && $) return t.getElementsByClassName(e)
					}, D = [], B = [], (w.qsa = me.test(q.querySelectorAll)) && (i(function (e) {
						j.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || B.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || B.push("~="), e.querySelectorAll(":checked").length || B.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || B.push(".#.+[+~]")
					}), i(function (e) {
						var t = q.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && B.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), B.push(",.*:")
					})), (w.matchesSelector = me.test(R = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function (e) {
						w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), D.push("!=", oe)
					}), B = B.length && new RegExp(B.join("|")), D = D.length && new RegExp(D.join("|")), t = me.test(j.compareDocumentPosition), I = t || me.test(j.contains) ? function (e, t) {
						var n = 9 === e.nodeType ? e.documentElement : e,
							r = t && t.parentNode;
						return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
					} : function (e, t) {
						if (t)
							for (; t = t.parentNode;)
								if (t === e) return !0;
						return !1
					}, K = t ? function (e, t) {
						if (e === t) return A = !0, 0;
						var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === z && I(z, e) ? -1 : t === q || t.ownerDocument === z && I(z, t) ? 1 : M ? ee(M, e) - ee(M, t) : 0 : 4 & n ? -1 : 1)
					} : function (e, t) {
						if (e === t) return A = !0, 0;
						var n, r = 0,
							i = e.parentNode,
							o = t.parentNode,
							s = [e],
							c = [t];
						if (!i || !o) return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : M ? ee(M, e) - ee(M, t) : 0;
						if (i === o) return a(e, t);
						for (n = e; n = n.parentNode;) s.unshift(n);
						for (n = t; n = n.parentNode;) c.unshift(n);
						for (; s[r] === c[r];) r++;
						return r ? a(s[r], c[r]) : s[r] === z ? -1 : c[r] === z ? 1 : 0
					}, q) : q
				}, t.matches = function (e, n) {
					return t(e, null, null, n)
				}, t.matchesSelector = function (e, n) {
					if ((e.ownerDocument || e) !== q && L(e), n = n.replace(ue, "='$1']"), w.matchesSelector && $ && !U[n + " "] && (!D || !D.test(n)) && (!B || !B.test(n))) try {
						var r = R.call(e, n);
						if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
					} catch (i) {}
					return t(n, q, null, [e]).length > 0
				}, t.contains = function (e, t) {
					return (e.ownerDocument || e) !== q && L(e), I(e, t)
				}, t.attr = function (e, t) {
					(e.ownerDocument || e) !== q && L(e);
					var n = _.attrHandle[t.toLowerCase()],
						r = n && Q.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
					return void 0 !== r ? r : w.attributes || !$ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
				}, t.error = function (e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, t.uniqueSort = function (e) {
					var t, n = [],
						r = 0,
						i = 0;
					if (A = !w.detectDuplicates, M = !w.sortStable && e.slice(0), e.sort(K), A) {
						for (; t = e[i++];) t === e[i] && (r = n.push(i));
						for (; r--;) e.splice(n[r], 1)
					}
					return M = null, e
				}, k = t.getText = function (e) {
					var t, n = "",
						r = 0,
						i = e.nodeType;
					if (i) {
						if (1 === i || 9 === i || 11 === i) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
						} else if (3 === i || 4 === i) return e.nodeValue
					} else
						for (; t = e[r++];) n += k(t);
					return n
				}, _ = t.selectors = {
					cacheLength: 50,
					createPseudo: r,
					match: pe,
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
						ATTR: function (e) {
							return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function (e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
						},
						PSEUDO: function (e) {
							var t, n = !e[6] && e[2];
							return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
						}
					},
					filter: {
						TAG: function (e) {
							var t = e.replace(xe, we).toLowerCase();
							return "*" === e ? function () {
								return !0
							} : function (e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function (e) {
							var t = W[e + " "];
							return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
								return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
							})
						},
						ATTR: function (e, n, r) {
							return function (i) {
								var o = t.attr(i, e);
								return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
							}
						},
						CHILD: function (e, t, n, r, i) {
							var o = "nth" !== e.slice(0, 3),
								a = "last" !== e.slice(-4),
								s = "of-type" === t;
							return 1 === r && 0 === i ? function (e) {
								return !!e.parentNode
							} : function (t, n, c) {
								var l, u, d, f, p, h, g = o !== a ? "nextSibling" : "previousSibling",
									m = t.parentNode,
									b = s && t.nodeName.toLowerCase(),
									v = !c && !s,
									y = !1;
								if (m) {
									if (o) {
										for (; g;) {
											for (f = t; f = f[g];)
												if (s ? f.nodeName.toLowerCase() === b : 1 === f.nodeType) return !1;
											h = g = "only" === e && !h && "nextSibling"
										}
										return !0
									}
									if (h = [a ? m.firstChild : m.lastChild], a && v) {
										for (f = m, d = f[H] || (f[H] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), l = u[e] || [], p = l[0] === O && l[1], y = p && l[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (y = p = 0) || h.pop();)
											if (1 === f.nodeType && ++y && f === t) {
												u[e] = [O, p, y];
												break
											}
									} else if (v && (f = t, d = f[H] || (f[H] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), l = u[e] || [], p = l[0] === O && l[1], y = p), y === !1)
										for (;
											(f = ++p && f && f[g] || (y = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== b : 1 !== f.nodeType) || !++y || (v && (d = f[H] || (f[H] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [O, y]), f !== t)););
									return y -= i, y === r || y % r === 0 && y / r >= 0
								}
							}
						},
						PSEUDO: function (e, n) {
							var i, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
							return o[H] ? o(n) : o.length > 1 ? (i = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
								for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
							}) : function (e) {
								return o(e, 0, i)
							}) : o
						}
					},
					pseudos: {
						not: r(function (e) {
							var t = [],
								n = [],
								i = T(e.replace(se, "$1"));
							return i[H] ? r(function (e, t, n, r) {
								for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
							}) : function (e, r, o) {
								return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
							}
						}),
						has: r(function (e) {
							return function (n) {
								return t(e, n).length > 0
							}
						}),
						contains: r(function (e) {
							return e = e.replace(xe, we),
								function (t) {
									return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
								}
						}),
						lang: r(function (e) {
							return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
								function (t) {
									var n;
									do
										if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
									while ((t = t.parentNode) && 1 === t.nodeType);
									return !1
								}
						}),
						target: function (t) {
							var n = e.location && e.location.hash;
							return n && n.slice(1) === t.id
						},
						root: function (e) {
							return e === j
						},
						focus: function (e) {
							return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
						},
						enabled: function (e) {
							return e.disabled === !1
						},
						disabled: function (e) {
							return e.disabled === !0
						},
						checked: function (e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !!e.checked || "option" === t && !!e.selected
						},
						selected: function (e) {
							return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
						},
						empty: function (e) {
							for (e = e.firstChild; e; e = e.nextSibling)
								if (e.nodeType < 6) return !1;
							return !0
						},
						parent: function (e) {
							return !_.pseudos.empty(e)
						},
						header: function (e) {
							return ge.test(e.nodeName)
						},
						input: function (e) {
							return he.test(e.nodeName)
						},
						button: function (e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function (e) {
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
						},
						first: l(function () {
							return [0]
						}),
						last: l(function (e, t) {
							return [t - 1]
						}),
						eq: l(function (e, t, n) {
							return [n < 0 ? n + t : n]
						}),
						even: l(function (e, t) {
							for (var n = 0; n < t; n += 2) e.push(n);
							return e
						}),
						odd: l(function (e, t) {
							for (var n = 1; n < t; n += 2) e.push(n);
							return e
						}),
						lt: l(function (e, t, n) {
							for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
							return e
						}),
						gt: l(function (e, t, n) {
							for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
							return e
						})
					}
				}, _.pseudos.nth = _.pseudos.eq;
				for (x in {
						radio: !0,
						checkbox: !0,
						file: !0,
						password: !0,
						image: !0
					}) _.pseudos[x] = s(x);
				for (x in {
						submit: !0,
						reset: !0
					}) _.pseudos[x] = c(x);
				return d.prototype = _.filters = _.pseudos, _.setFilters = new d, C = t.tokenize = function (e, n) {
					var r, i, o, a, s, c, l, u = P[e + " "];
					if (u) return n ? 0 : u.slice(0);
					for (s = e, c = [], l = _.preFilter; s;) {
						r && !(i = ce.exec(s)) || (i && (s = s.slice(i[0].length) || s), c.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
							value: r,
							type: i[0].replace(se, " ")
						}), s = s.slice(r.length));
						for (a in _.filter) !(i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
							value: r,
							type: a,
							matches: i
						}), s = s.slice(r.length));
						if (!r) break
					}
					return n ? s.length : s ? t.error(e) : P(e, c).slice(0)
				}, T = t.compile = function (e, t) {
					var n, r = [],
						i = [],
						o = U[e + " "];
					if (!o) {
						for (t || (t = C(e)), n = t.length; n--;) o = v(t[n]), o[H] ? r.push(o) : i.push(o);
						o = U(e, y(i, r)), o.selector = e
					}
					return o
				}, E = t.select = function (e, t, n, r) {
					var i, o, a, s, c, l = "function" == typeof e && e,
						d = !r && C(e = l.selector || e);
					if (n = n || [], 1 === d.length) {
						if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && $ && _.relative[o[1].type]) {
							if (t = (_.find.ID(a.matches[0].replace(xe, we), t) || [])[0], !t) return n;
							l && (t = t.parentNode), e = e.slice(o.shift().value.length)
						}
						for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !_.relative[s = a.type]);)
							if ((c = _.find[s]) && (r = c(a.matches[0].replace(xe, we), ve.test(o[0].type) && u(t.parentNode) || t))) {
								if (o.splice(i, 1), e = r.length && f(o), !e) return G.apply(n, r), n;
								break
							}
					}
					return (l || T(e, d))(r, t, !$, n, !t || ve.test(e) && u(t.parentNode) || t), n
				}, w.sortStable = H.split("").sort(K).join("") === H, w.detectDuplicates = !!A, L(), w.sortDetached = i(function (e) {
					return 1 & e.compareDocumentPosition(q.createElement("div"))
				}), i(function (e) {
					return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
				}) || o("type|href|height|width", function (e, t, n) {
					if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
				}), w.attributes && i(function (e) {
					return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
				}) || o("value", function (e, t, n) {
					if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
				}), i(function (e) {
					return null == e.getAttribute("disabled")
				}) || o(te, function (e, t, n) {
					var r;
					if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
				}), t
			}(n);
		le.find = he, le.expr = he.selectors, le.expr[":"] = le.expr.pseudos, le.uniqueSort = le.unique = he.uniqueSort, le.text = he.getText, le.isXMLDoc = he.isXML, le.contains = he.contains;
		var ge = function (e, t, n) {
				for (var r = [], i = void 0 !== n;
					(e = e[t]) && 9 !== e.nodeType;)
					if (1 === e.nodeType) {
						if (i && le(e).is(n)) break;
						r.push(e)
					}
				return r
			},
			me = function (e, t) {
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			},
			be = le.expr.match.needsContext,
			ve = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
			ye = /^.[^:#\[\.,]*$/;
		le.filter = function (e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? le.find.matchesSelector(r, e) ? [r] : [] : le.find.matches(e, le.grep(t, function (e) {
				return 1 === e.nodeType
			}))
		}, le.fn.extend({
			find: function (e) {
				var t, n = this.length,
					r = [],
					i = this;
				if ("string" != typeof e) return this.pushStack(le(e).filter(function () {
					for (t = 0; t < n; t++)
						if (le.contains(i[t], this)) return !0
				}));
				for (t = 0; t < n; t++) le.find(e, i[t], r);
				return r = this.pushStack(n > 1 ? le.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
			},
			filter: function (e) {
				return this.pushStack(s(this, e || [], !1))
			},
			not: function (e) {
				return this.pushStack(s(this, e || [], !0))
			},
			is: function (e) {
				return !!s(this, "string" == typeof e && be.test(e) ? le(e) : e || [], !1).length
			}
		});
		var xe, we = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			_e = le.fn.init = function (e, t, n) {
				var r, i;
				if (!e) return this;
				if (n = n || xe, "string" == typeof e) {
					if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : we.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
					if (r[1]) {
						if (t = t instanceof le ? t[0] : t, le.merge(this, le.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), ve.test(r[1]) && le.isPlainObject(t))
							for (r in t) le.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
						return this
					}
					return i = J.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(le) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
			};
		_e.prototype = le.fn, xe = le(J);
		var ke = /^(?:parents|prev(?:Until|All))/,
			Ne = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		le.fn.extend({
			has: function (e) {
				var t = le(e, this),
					n = t.length;
				return this.filter(function () {
					for (var e = 0; e < n; e++)
						if (le.contains(this, t[e])) return !0
				})
			},
			closest: function (e, t) {
				for (var n, r = 0, i = this.length, o = [], a = be.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; r < i; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && le.find.matchesSelector(n, e))) {
							o.push(n);
							break
						}
				return this.pushStack(o.length > 1 ? le.uniqueSort(o) : o)
			},
			index: function (e) {
				return e ? "string" == typeof e ? re.call(le(e), this[0]) : re.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function (e, t) {
				return this.pushStack(le.uniqueSort(le.merge(this.get(), le(e, t))))
			},
			addBack: function (e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), le.each({
			parent: function (e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function (e) {
				return ge(e, "parentNode")
			},
			parentsUntil: function (e, t, n) {
				return ge(e, "parentNode", n)
			},
			next: function (e) {
				return c(e, "nextSibling")
			},
			prev: function (e) {
				return c(e, "previousSibling")
			},
			nextAll: function (e) {
				return ge(e, "nextSibling")
			},
			prevAll: function (e) {
				return ge(e, "previousSibling")
			},
			nextUntil: function (e, t, n) {
				return ge(e, "nextSibling", n)
			},
			prevUntil: function (e, t, n) {
				return ge(e, "previousSibling", n)
			},
			siblings: function (e) {
				return me((e.parentNode || {}).firstChild, e)
			},
			children: function (e) {
				return me(e.firstChild)
			},
			contents: function (e) {
				return e.contentDocument || le.merge([], e.childNodes)
			}
		}, function (e, t) {
			le.fn[e] = function (n, r) {
				var i = le.map(this, t, n);
				return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = le.filter(r, i)), this.length > 1 && (Ne[e] || le.uniqueSort(i), ke.test(e) && i.reverse()), this.pushStack(i)
			}
		});
		var Ce = /\S+/g;
		le.Callbacks = function (e) {
			e = "string" == typeof e ? l(e) : le.extend({}, e);
			var t, n, r, i, o = [],
				a = [],
				s = -1,
				c = function () {
					for (i = e.once, r = t = !0; a.length; s = -1)
						for (n = a.shift(); ++s < o.length;) o[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = o.length, n = !1);
					e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
				},
				u = {
					add: function () {
						return o && (n && !t && (s = o.length - 1, a.push(n)), function r(t) {
							le.each(t, function (t, n) {
								le.isFunction(n) ? e.unique && u.has(n) || o.push(n) : n && n.length && "string" !== le.type(n) && r(n)
							})
						}(arguments), n && !t && c()), this
					},
					remove: function () {
						return le.each(arguments, function (e, t) {
							for (var n;
								(n = le.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
						}), this
					},
					has: function (e) {
						return e ? le.inArray(e, o) > -1 : o.length > 0
					},
					empty: function () {
						return o && (o = []), this
					},
					disable: function () {
						return i = a = [], o = n = "", this
					},
					disabled: function () {
						return !o
					},
					lock: function () {
						return i = a = [], n || (o = n = ""), this
					},
					locked: function () {
						return !!i
					},
					fireWith: function (e, n) {
						return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
					},
					fire: function () {
						return u.fireWith(this, arguments), this
					},
					fired: function () {
						return !!r
					}
				};
			return u
		}, le.extend({
			Deferred: function (e) {
				var t = [
						["resolve", "done", le.Callbacks("once memory"), "resolved"],
						["reject", "fail", le.Callbacks("once memory"), "rejected"],
						["notify", "progress", le.Callbacks("memory")]
					],
					n = "pending",
					r = {
						state: function () {
							return n
						},
						always: function () {
							return i.done(arguments).fail(arguments), this
						},
						then: function () {
							var e = arguments;
							return le.Deferred(function (n) {
								le.each(t, function (t, o) {
									var a = le.isFunction(e[t]) && e[t];
									i[o[1]](function () {
										var e = a && a.apply(this, arguments);
										e && le.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						promise: function (e) {
							return null != e ? le.extend(e, r) : r
						}
					},
					i = {};
				return r.pipe = r.then, le.each(t, function (e, o) {
					var a = o[2],
						s = o[3];
					r[o[1]] = a.add, s && a.add(function () {
						n = s
					}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
						return i[o[0] + "With"](this === i ? r : this, arguments), this
					}, i[o[0] + "With"] = a.fireWith
				}), r.promise(i), e && e.call(i, i), i
			},
			when: function (e) {
				var t, n, r, i = 0,
					o = ee.call(arguments),
					a = o.length,
					s = 1 !== a || e && le.isFunction(e.promise) ? a : 0,
					c = 1 === s ? e : le.Deferred(),
					l = function (e, n, r) {
						return function (i) {
							n[e] = this, r[e] = arguments.length > 1 ? ee.call(arguments) : i, r === t ? c.notifyWith(n, r) : --s || c.resolveWith(n, r)
						}
					};
				if (a > 1)
					for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && le.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(c.reject) : --s;
				return s || c.resolveWith(r, o), c.promise()
			}
		});
		var Te;
		le.fn.ready = function (e) {
			return le.ready.promise().done(e), this
		}, le.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function (e) {
				e ? le.readyWait++ : le.ready(!0)
			},
			ready: function (e) {
				(e === !0 ? --le.readyWait : le.isReady) || (le.isReady = !0, e !== !0 && --le.readyWait > 0 || (Te.resolveWith(J, [le]), le.fn.triggerHandler && (le(J).triggerHandler("ready"), le(J).off("ready"))))
			}
		}), le.ready.promise = function (e) {
			return Te || (Te = le.Deferred(), "complete" === J.readyState || "loading" !== J.readyState && !J.documentElement.doScroll ? n.setTimeout(le.ready) : (J.addEventListener("DOMContentLoaded", u), n.addEventListener("load", u))), Te.promise(e)
		}, le.ready.promise();
		var Ee = function (e, t, n, r, i, o, a) {
				var s = 0,
					c = e.length,
					l = null == n;
				if ("object" === le.type(n)) {
					i = !0;
					for (s in n) Ee(e, t, s, n[s], !0, o, a)
				} else if (void 0 !== r && (i = !0, le.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
						return l.call(le(e), n)
					})), t))
					for (; s < c; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
				return i ? e : l ? t.call(e) : c ? t(e[0], n) : o
			},
			Se = function (e) {
				return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
			};
		d.uid = 1, d.prototype = {
			register: function (e, t) {
				var n = t || {};
				return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
					value: n,
					writable: !0,
					configurable: !0
				}), e[this.expando]
			},
			cache: function (e) {
				if (!Se(e)) return {};
				var t = e[this.expando];
				return t || (t = {}, Se(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
					value: t,
					configurable: !0
				}))), t
			},
			set: function (e, t, n) {
				var r, i = this.cache(e);
				if ("string" == typeof t) i[t] = n;
				else
					for (r in t) i[r] = t[r];
				return i
			},
			get: function (e, t) {
				return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
			},
			access: function (e, t, n) {
				var r;
				return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, le.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
			},
			remove: function (e, t) {
				var n, r, i, o = e[this.expando];
				if (void 0 !== o) {
					if (void 0 === t) this.register(e);
					else {
						le.isArray(t) ? r = t.concat(t.map(le.camelCase)) : (i = le.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(Ce) || [])), n = r.length;
						for (; n--;) delete o[r[n]]
					}(void 0 === t || le.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
				}
			},
			hasData: function (e) {
				var t = e[this.expando];
				return void 0 !== t && !le.isEmptyObject(t)
			}
		};
		var Me = new d,
			Ae = new d,
			Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			qe = /[A-Z]/g;
		le.extend({
			hasData: function (e) {
				return Ae.hasData(e) || Me.hasData(e)
			},
			data: function (e, t, n) {
				return Ae.access(e, t, n)
			},
			removeData: function (e, t) {
				Ae.remove(e, t)
			},
			_data: function (e, t, n) {
				return Me.access(e, t, n)
			},
			_removeData: function (e, t) {
				Me.remove(e, t)
			}
		}), le.fn.extend({
			data: function (e, t) {
				var n, r, i, o = this[0],
					a = o && o.attributes;
				if (void 0 === e) {
					if (this.length && (i = Ae.get(o), 1 === o.nodeType && !Me.get(o, "hasDataAttrs"))) {
						for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = le.camelCase(r.slice(5)), f(o, r, i[r])));
						Me.set(o, "hasDataAttrs", !0)
					}
					return i
				}
				return "object" == typeof e ? this.each(function () {
					Ae.set(this, e)
				}) : Ee(this, function (t) {
					var n, r;
					if (o && void 0 === t) {
						if (n = Ae.get(o, e) || Ae.get(o, e.replace(qe, "-$&").toLowerCase()), void 0 !== n) return n;
						if (r = le.camelCase(e), n = Ae.get(o, r), void 0 !== n) return n;
						if (n = f(o, r, void 0), void 0 !== n) return n
					} else r = le.camelCase(e), this.each(function () {
						var n = Ae.get(this, r);
						Ae.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && Ae.set(this, e, t)
					})
				}, null, t, arguments.length > 1, null, !0)
			},
			removeData: function (e) {
				return this.each(function () {
					Ae.remove(this, e)
				})
			}
		}), le.extend({
			queue: function (e, t, n) {
				var r;
				if (e) return t = (t || "fx") + "queue", r = Me.get(e, t), n && (!r || le.isArray(n) ? r = Me.access(e, t, le.makeArray(n)) : r.push(n)), r || []
			},
			dequeue: function (e, t) {
				t = t || "fx";
				var n = le.queue(e, t),
					r = n.length,
					i = n.shift(),
					o = le._queueHooks(e, t),
					a = function () {
						le.dequeue(e, t)
					};
				"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
			},
			_queueHooks: function (e, t) {
				var n = t + "queueHooks";
				return Me.get(e, n) || Me.access(e, n, {
					empty: le.Callbacks("once memory").add(function () {
						Me.remove(e, [t + "queue", n])
					})
				})
			}
		}), le.fn.extend({
			queue: function (e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? le.queue(this[0], e) : void 0 === t ? this : this.each(function () {
					var n = le.queue(this, e, t);
					le._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && le.dequeue(this, e)
				})
			},
			dequeue: function (e) {
				return this.each(function () {
					le.dequeue(this, e)
				})
			},
			clearQueue: function (e) {
				return this.queue(e || "fx", [])
			},
			promise: function (e, t) {
				var n, r = 1,
					i = le.Deferred(),
					o = this,
					a = this.length,
					s = function () {
						--r || i.resolveWith(o, [o])
					};
				for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = Me.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
				return s(), i.promise(t)
			}
		});
		var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			$e = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
			Be = ["Top", "Right", "Bottom", "Left"],
			De = function (e, t) {
				return e = t || e, "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
			},
			Re = /^(?:checkbox|radio)$/i,
			Ie = /<([\w:-]+)/,
			He = /^$|\/(?:java|ecma)script/i,
			ze = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
		ze.optgroup = ze.option, ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead, ze.th = ze.td;
		var Oe = /<|&#?\w+;/;
		! function () {
			var e = J.createDocumentFragment(),
				t = e.appendChild(J.createElement("div")),
				n = J.createElement("input");
			n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), se.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", se.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
		}();
		var Fe = /^key/,
			We = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			Pe = /^([^.]*)(?:\.(.+)|)/;
		le.event = {
			global: {},
			add: function (e, t, n, r, i) {
				var o, a, s, c, l, u, d, f, p, h, g, m = Me.get(e);
				if (m)
					for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = le.guid++), (c = m.events) || (c = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
							return "undefined" != typeof le && le.event.triggered !== t.type ? le.event.dispatch.apply(e, arguments) : void 0
						}), t = (t || "").match(Ce) || [""], l = t.length; l--;) s = Pe.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (d = le.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = le.event.special[p] || {}, u = le.extend({
						type: p,
						origType: g,
						data: r,
						handler: n,
						guid: n.guid,
						selector: i,
						needsContext: i && le.expr.match.needsContext.test(i),
						namespace: h.join(".")
					}, o), (f = c[p]) || (f = c[p] = [], f.delegateCount = 0, d.setup && d.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, u) : f.push(u), le.event.global[p] = !0)
			},
			remove: function (e, t, n, r, i) {
				var o, a, s, c, l, u, d, f, p, h, g, m = Me.hasData(e) && Me.get(e);
				if (m && (c = m.events)) {
					for (t = (t || "").match(Ce) || [""], l = t.length; l--;)
						if (s = Pe.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
							for (d = le.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !i && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(o, 1),
								u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
							a && !f.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || le.removeEvent(e, p, m.handle), delete c[p])
						} else
							for (p in c) le.event.remove(e, p + t[l], n, r, !0);
					le.isEmptyObject(c) && Me.remove(e, "handle events")
				}
			},
			dispatch: function (e) {
				e = le.event.fix(e);
				var t, n, r, i, o, a = [],
					s = ee.call(arguments),
					c = (Me.get(this, "events") || {})[e.type] || [],
					l = le.event.special[e.type] || {};
				if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
					for (a = le.event.handlers.call(this, e, c), t = 0;
						(i = a[t++]) && !e.isPropagationStopped();)
						for (e.currentTarget = i.elem, n = 0;
							(o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((le.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
					return l.postDispatch && l.postDispatch.call(this, e), e.result
				}
			},
			handlers: function (e, t) {
				var n, r, i, o, a = [],
					s = t.delegateCount,
					c = e.target;
				if (s && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
					for (; c !== this; c = c.parentNode || this)
						if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
							for (r = [], n = 0; n < s; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? le(i, this).index(c) > -1 : le.find(i, this, null, [c]).length), r[i] && r.push(o);
							r.length && a.push({
								elem: c,
								handlers: r
							})
						}
				return s < t.length && a.push({
					elem: this,
					handlers: t.slice(s)
				}), a
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function (e, t) {
					return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function (e, t) {
					var n, r, i, o = t.button;
					return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
				}
			},
			fix: function (e) {
				if (e[le.expando]) return e;
				var t, n, r, i = e.type,
					o = e,
					a = this.fixHooks[i];
				for (a || (this.fixHooks[i] = a = We.test(i) ? this.mouseHooks : Fe.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new le.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
				return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function () {
						if (this !== y() && this.focus) return this.focus(), !1
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function () {
						if (this === y() && this.blur) return this.blur(), !1
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function () {
						if ("checkbox" === this.type && this.click && le.nodeName(this, "input")) return this.click(), !1
					},
					_default: function (e) {
						return le.nodeName(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function (e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			}
		}, le.removeEvent = function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n)
		}, le.Event = function (e, t) {
			return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? b : v) : this.type = e, t && le.extend(this, t), this.timeStamp = e && e.timeStamp || le.now(), void(this[le.expando] = !0)) : new le.Event(e, t)
		}, le.Event.prototype = {
			constructor: le.Event,
			isDefaultPrevented: v,
			isPropagationStopped: v,
			isImmediatePropagationStopped: v,
			isSimulated: !1,
			preventDefault: function () {
				var e = this.originalEvent;
				this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault()
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation()
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, le.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (e, t) {
			le.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function (e) {
					var n, r = this,
						i = e.relatedTarget,
						o = e.handleObj;
					return i && (i === r || le.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), le.fn.extend({
			on: function (e, t, n, r) {
				return x(this, e, t, n, r)
			},
			one: function (e, t, n, r) {
				return x(this, e, t, n, r, 1)
			},
			off: function (e, t, n) {
				var r, i;
				if (e && e.preventDefault && e.handleObj) return r = e.handleObj, le(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if ("object" == typeof e) {
					for (i in e) this.off(i, t, e[i]);
					return this
				}
				return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = v), this.each(function () {
					le.event.remove(this, e, n, t)
				})
			}
		});
		var Ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
			Ke = /<script|<style|<link/i,
			Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Qe = /^true\/(.*)/,
			Ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
		le.extend({
			htmlPrefilter: function (e) {
				return e.replace(Ue, "<$1></$2>")
			},
			clone: function (e, t, n) {
				var r, i, o, a, s = e.cloneNode(!0),
					c = le.contains(e.ownerDocument, e);
				if (!(se.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
					for (a = h(s), o = h(e), r = 0, i = o.length; r < i; r++) C(o[r], a[r]);
				if (t)
					if (n)
						for (o = o || h(e), a = a || h(s), r = 0, i = o.length; r < i; r++) N(o[r], a[r]);
					else N(e, s);
				return a = h(s, "script"), a.length > 0 && g(a, !c && h(e, "script")), s
			},
			cleanData: function (e) {
				for (var t, n, r, i = le.event.special, o = 0; void 0 !== (n = e[o]); o++)
					if (Se(n)) {
						if (t = n[Me.expando]) {
							if (t.events)
								for (r in t.events) i[r] ? le.event.remove(n, r) : le.removeEvent(n, r, t.handle);
							n[Me.expando] = void 0
						}
						n[Ae.expando] && (n[Ae.expando] = void 0)
					}
			}
		}), le.fn.extend({
			domManip: T,
			detach: function (e) {
				return E(this, e, !0)
			},
			remove: function (e) {
				return E(this, e)
			},
			text: function (e) {
				return Ee(this, function (e) {
					return void 0 === e ? le.text(this) : this.empty().each(function () {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
					})
				}, null, e, arguments.length)
			},
			append: function () {
				return T(this, arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = w(this, e);
						t.appendChild(e)
					}
				})
			},
			prepend: function () {
				return T(this, arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = w(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function () {
				return T(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function () {
				return T(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (le.cleanData(h(e, !1)), e.textContent = "");
				return this
			},
			clone: function (e, t) {
				return e = null != e && e, t = null == t ? e : t, this.map(function () {
					return le.clone(this, e, t)
				})
			},
			html: function (e) {
				return Ee(this, function (e) {
					var t = this[0] || {},
						n = 0,
						r = this.length;
					if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
					if ("string" == typeof e && !Ke.test(e) && !ze[(Ie.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = le.htmlPrefilter(e);
						try {
							for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (le.cleanData(h(t, !1)), t.innerHTML = e);
							t = 0
						} catch (i) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function () {
				var e = [];
				return T(this, arguments, function (t) {
					var n = this.parentNode;
					le.inArray(this, e) < 0 && (le.cleanData(h(this)), n && n.replaceChild(t, this))
				}, e)
			}
		}), le.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (e, t) {
			le.fn[e] = function (e) {
				for (var n, r = [], i = le(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), le(i[a])[t](n), ne.apply(r, n.get());
				return this.pushStack(r)
			}
		});
		var Ve, Ye = {
				HTML: "block",
				BODY: "block"
			},
			Ge = /^margin/,
			Je = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
			et = function (e) {
				var t = e.ownerDocument.defaultView;
				return t && t.opener || (t = n), t.getComputedStyle(e)
			},
			tt = function (e, t, n, r) {
				var i, o, a = {};
				for (o in t) a[o] = e.style[o], e.style[o] = t[o];
				i = n.apply(e, r || []);
				for (o in t) e.style[o] = a[o];
				return i
			},
			nt = J.documentElement;
		! function () {
			function e() {
				s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", nt.appendChild(a);
				var e = n.getComputedStyle(s);
				t = "1%" !== e.top, o = "2px" === e.marginLeft, r = "4px" === e.width, s.style.marginRight = "50%", i = "4px" === e.marginRight, nt.removeChild(a)
			}
			var t, r, i, o, a = J.createElement("div"),
				s = J.createElement("div");
			s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", se.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), le.extend(se, {
				pixelPosition: function () {
					return e(), t
				},
				boxSizingReliable: function () {
					return null == r && e(), r
				},
				pixelMarginRight: function () {
					return null == r && e(), i
				},
				reliableMarginLeft: function () {
					return null == r && e(), o
				},
				reliableMarginRight: function () {
					var e, t = s.appendChild(J.createElement("div"));
					return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", s.style.width = "1px", nt.appendChild(a), e = !parseFloat(n.getComputedStyle(t).marginRight), nt.removeChild(a), s.removeChild(t), e
				}
			}))
		}();
		var rt = /^(none|table(?!-c[ea]).+)/,
			it = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			ot = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			at = ["Webkit", "O", "Moz", "ms"],
			st = J.createElement("div").style;
		le.extend({
			cssHooks: {
				opacity: {
					get: function (e, t) {
						if (t) {
							var n = A(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
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
			style: function (e, t, n, r) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var i, o, a, s = le.camelCase(t),
						c = e.style;
					return t = le.cssProps[s] || (le.cssProps[s] = q(s) || s), a = le.cssHooks[t] || le.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t] : (o = typeof n, "string" === o && (i = $e.exec(n)) && i[1] && (n = p(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (le.cssNumber[s] ? "" : "px")), se.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (c[t] = n)), void 0)
				}
			},
			css: function (e, t, n, r) {
				var i, o, a, s = le.camelCase(t);
				return t = le.cssProps[s] || (le.cssProps[s] = q(s) || s), a = le.cssHooks[t] || le.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = A(e, t, r)), "normal" === i && t in ot && (i = ot[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
			}
		}), le.each(["height", "width"], function (e, t) {
			le.cssHooks[t] = {
				get: function (e, n, r) {
					if (n) return rt.test(le.css(e, "display")) && 0 === e.offsetWidth ? tt(e, it, function () {
						return B(e, t, r)
					}) : B(e, t, r)
				},
				set: function (e, n, r) {
					var i, o = r && et(e),
						a = r && $(e, t, r, "border-box" === le.css(e, "boxSizing", !1, o), o);
					return a && (i = $e.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = le.css(e, t)), j(e, n, a)
				}
			}
		}), le.cssHooks.marginLeft = L(se.reliableMarginLeft, function (e, t) {
			if (t) return (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - tt(e, {
				marginLeft: 0
			}, function () {
				return e.getBoundingClientRect().left
			})) + "px"
		}), le.cssHooks.marginRight = L(se.reliableMarginRight, function (e, t) {
			if (t) return tt(e, {
				display: "inline-block"
			}, A, [e, "marginRight"])
		}), le.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (e, t) {
			le.cssHooks[e + t] = {
				expand: function (n) {
					for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Be[r] + t] = o[r] || o[r - 2] || o[0];
					return i
				}
			}, Ge.test(e) || (le.cssHooks[e + t].set = j)
		}), le.fn.extend({
			css: function (e, t) {
				return Ee(this, function (e, t, n) {
					var r, i, o = {},
						a = 0;
					if (le.isArray(t)) {
						for (r = et(e), i = t.length; a < i; a++) o[t[a]] = le.css(e, t[a], !1, r);
						return o
					}
					return void 0 !== n ? le.style(e, t, n) : le.css(e, t)
				}, e, t, arguments.length > 1)
			},
			show: function () {
				return D(this, !0)
			},
			hide: function () {
				return D(this)
			},
			toggle: function (e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
					De(this) ? le(this).show() : le(this).hide()
				})
			}
		}), le.Tween = R, R.prototype = {
			constructor: R,
			init: function (e, t, n, r, i, o) {
				this.elem = e, this.prop = n, this.easing = i || le.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (le.cssNumber[n] ? "" : "px")
			},
			cur: function () {
				var e = R.propHooks[this.prop];
				return e && e.get ? e.get(this) : R.propHooks._default.get(this)
			},
			run: function (e) {
				var t, n = R.propHooks[this.prop];
				return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
			}
		}, R.prototype.init.prototype = R.prototype, R.propHooks = {
			_default: {
				get: function (e) {
					var t;
					return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
				},
				set: function (e) {
					le.fx.step[e.prop] ? le.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[le.cssProps[e.prop]] && !le.cssHooks[e.prop] ? e.elem[e.prop] = e.now : le.style(e.elem, e.prop, e.now + e.unit)
				}
			}
		}, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
			set: function (e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, le.easing = {
			linear: function (e) {
				return e
			},
			swing: function (e) {
				return .5 - Math.cos(e * Math.PI) / 2
			},
			_default: "swing"
		}, le.fx = R.prototype.init, le.fx.step = {};
		var ct, lt, ut = /^(?:toggle|show|hide)$/,
			dt = /queueHooks$/;
		le.Animation = le.extend(W, {
				tweeners: {
					"*": [function (e, t) {
						var n = this.createTween(e, t);
						return p(n.elem, e, $e.exec(t), n), n
					}]
				},
				tweener: function (e, t) {
					le.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ce);
					for (var n, r = 0, i = e.length; r < i; r++) n = e[r], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t)
				},
				prefilters: [O],
				prefilter: function (e, t) {
					t ? W.prefilters.unshift(e) : W.prefilters.push(e)
				}
			}), le.speed = function (e, t, n) {
				var r = e && "object" == typeof e ? le.extend({}, e) : {
					complete: n || !n && t || le.isFunction(e) && e,
					duration: e,
					easing: n && t || t && !le.isFunction(t) && t
				};
				return r.duration = le.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in le.fx.speeds ? le.fx.speeds[r.duration] : le.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
					le.isFunction(r.old) && r.old.call(this), r.queue && le.dequeue(this, r.queue)
				}, r
			}, le.fn.extend({
				fadeTo: function (e, t, n, r) {
					return this.filter(De).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, n, r)
				},
				animate: function (e, t, n, r) {
					var i = le.isEmptyObject(e),
						o = le.speed(t, n, r),
						a = function () {
							var t = W(this, le.extend({}, e), o);
							(i || Me.get(this, "finish")) && t.stop(!0)
						};
					return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
				},
				stop: function (e, t, n) {
					var r = function (e) {
						var t = e.stop;
						delete e.stop, t(n)
					};
					return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
						var t = !0,
							i = null != e && e + "queueHooks",
							o = le.timers,
							a = Me.get(this);
						if (i) a[i] && a[i].stop && r(a[i]);
						else
							for (i in a) a[i] && a[i].stop && dt.test(i) && r(a[i]);
						for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
						!t && n || le.dequeue(this, e)
					})
				},
				finish: function (e) {
					return e !== !1 && (e = e || "fx"), this.each(function () {
						var t, n = Me.get(this),
							r = n[e + "queue"],
							i = n[e + "queueHooks"],
							o = le.timers,
							a = r ? r.length : 0;
						for (n.finish = !0, le.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
						for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
						delete n.finish
					})
				}
			}), le.each(["toggle", "show", "hide"], function (e, t) {
				var n = le.fn[t];
				le.fn[t] = function (e, r, i) {
					return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, r, i)
				}
			}), le.each({
				slideDown: H("show"),
				slideUp: H("hide"),
				slideToggle: H("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function (e, t) {
				le.fn[e] = function (e, n, r) {
					return this.animate(t, e, n, r)
				}
			}), le.timers = [], le.fx.tick = function () {
				var e, t = 0,
					n = le.timers;
				for (ct = le.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
				n.length || le.fx.stop(), ct = void 0
			}, le.fx.timer = function (e) {
				le.timers.push(e), e() ? le.fx.start() : le.timers.pop()
			}, le.fx.interval = 13, le.fx.start = function () {
				lt || (lt = n.setInterval(le.fx.tick, le.fx.interval))
			}, le.fx.stop = function () {
				n.clearInterval(lt), lt = null
			}, le.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, le.fn.delay = function (e, t) {
				return e = le.fx ? le.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, r) {
					var i = n.setTimeout(t, e);
					r.stop = function () {
						n.clearTimeout(i)
					}
				})
			},
			function () {
				var e = J.createElement("input"),
					t = J.createElement("select"),
					n = t.appendChild(J.createElement("option"));
				e.type = "checkbox", se.checkOn = "" !== e.value, se.optSelected = n.selected, t.disabled = !0, se.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", se.radioValue = "t" === e.value
			}();
		var ft, pt = le.expr.attrHandle;
		le.fn.extend({
			attr: function (e, t) {
				return Ee(this, le.attr, e, t, arguments.length > 1)
			},
			removeAttr: function (e) {
				return this.each(function () {
					le.removeAttr(this, e)
				})
			}
		}), le.extend({
			attr: function (e, t, n) {
				var r, i, o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? le.prop(e, t, n) : (1 === o && le.isXMLDoc(e) || (t = t.toLowerCase(), i = le.attrHooks[t] || (le.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void le.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = le.find.attr(e, t), null == r ? void 0 : r))
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!se.radioValue && "radio" === t && le.nodeName(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			},
			removeAttr: function (e, t) {
				var n, r, i = 0,
					o = t && t.match(Ce);
				if (o && 1 === e.nodeType)
					for (; n = o[i++];) r = le.propFix[n] || n, le.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
			}
		}), ft = {
			set: function (e, t, n) {
				return t === !1 ? le.removeAttr(e, n) : e.setAttribute(n, n), n
			}
		}, le.each(le.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var n = pt[t] || le.find.attr;
			pt[t] = function (e, t, r) {
				var i, o;
				return r || (o = pt[t], pt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, pt[t] = o), i
			}
		});
		var ht = /^(?:input|select|textarea|button)$/i,
			gt = /^(?:a|area)$/i;
		le.fn.extend({
			prop: function (e, t) {
				return Ee(this, le.prop, e, t, arguments.length > 1)
			},
			removeProp: function (e) {
				return this.each(function () {
					delete this[le.propFix[e] || e]
				})
			}
		}), le.extend({
			prop: function (e, t, n) {
				var r, i, o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o) return 1 === o && le.isXMLDoc(e) || (t = le.propFix[t] || t, i = le.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						var t = le.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			},
			propFix: {
				"for": "htmlFor",
				"class": "className"
			}
		}), se.optSelected || (le.propHooks.selected = {
			get: function (e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null
			},
			set: function (e) {
				var t = e.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
			}
		}), le.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			le.propFix[this.toLowerCase()] = this
		});
		var mt = /[\t\r\n\f]/g;
		le.fn.extend({
			addClass: function (e) {
				var t, n, r, i, o, a, s, c = 0;
				if (le.isFunction(e)) return this.each(function (t) {
					le(this).addClass(e.call(this, t, P(this)))
				});
				if ("string" == typeof e && e)
					for (t = e.match(Ce) || []; n = this[c++];)
						if (i = P(n), r = 1 === n.nodeType && (" " + i + " ").replace(mt, " ")) {
							for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
							s = le.trim(r), i !== s && n.setAttribute("class", s)
						}
				return this
			},
			removeClass: function (e) {
				var t, n, r, i, o, a, s, c = 0;
				if (le.isFunction(e)) return this.each(function (t) {
					le(this).removeClass(e.call(this, t, P(this)))
				});
				if (!arguments.length) return this.attr("class", "");
				if ("string" == typeof e && e)
					for (t = e.match(Ce) || []; n = this[c++];)
						if (i = P(n), r = 1 === n.nodeType && (" " + i + " ").replace(mt, " ")) {
							for (a = 0; o = t[a++];)
								for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
							s = le.trim(r), i !== s && n.setAttribute("class", s)
						}
				return this
			},
			toggleClass: function (e, t) {
				var n = typeof e;
				return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : le.isFunction(e) ? this.each(function (n) {
					le(this).toggleClass(e.call(this, n, P(this), t), t)
				}) : this.each(function () {
					var t, r, i, o;
					if ("string" === n)
						for (r = 0, i = le(this), o = e.match(Ce) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
					else void 0 !== e && "boolean" !== n || (t = P(this), t && Me.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Me.get(this, "__className__") || ""))
				})
			},
			hasClass: function (e) {
				var t, n, r = 0;
				for (t = " " + e + " "; n = this[r++];)
					if (1 === n.nodeType && (" " + P(n) + " ").replace(mt, " ").indexOf(t) > -1) return !0;
				return !1
			}
		});
		var bt = /\r/g,
			vt = /[\x20\t\r\n\f]+/g;
		le.fn.extend({
			val: function (e) {
				var t, n, r, i = this[0]; {
					if (arguments.length) return r = le.isFunction(e), this.each(function (n) {
						var i;
						1 === this.nodeType && (i = r ? e.call(this, n, le(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : le.isArray(i) && (i = le.map(i, function (e) {
							return null == e ? "" : e + ""
						})), t = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
					});
					if (i) return t = le.valHooks[i.type] || le.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)
				}
			}
		}), le.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = le.find.attr(e, "value");
						return null != t ? t : le.trim(le.text(e)).replace(vt, " ")
					}
				},
				select: {
					get: function (e) {
						for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, c = i < 0 ? s : o ? i : 0; c < s; c++)
							if (n = r[c], (n.selected || c === i) && (se.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !le.nodeName(n.parentNode, "optgroup"))) {
								if (t = le(n).val(), o) return t;
								a.push(t)
							}
						return a
					},
					set: function (e, t) {
						for (var n, r, i = e.options, o = le.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = le.inArray(le.valHooks.option.get(r), o) > -1) && (n = !0);
						return n || (e.selectedIndex = -1), o
					}
				}
			}
		}), le.each(["radio", "checkbox"], function () {
			le.valHooks[this] = {
				set: function (e, t) {
					if (le.isArray(t)) return e.checked = le.inArray(le(e).val(), t) > -1
				}
			}, se.checkOn || (le.valHooks[this].get = function (e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		});
		var yt = /^(?:focusinfocus|focusoutblur)$/;
		le.extend(le.event, {
			trigger: function (e, t, r, i) {
				var o, a, s, c, l, u, d, f = [r || J],
					p = ae.call(e, "type") ? e.type : e,
					h = ae.call(e, "namespace") ? e.namespace.split(".") : [];
				if (a = s = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !yt.test(p + le.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, e = e[le.expando] ? e : new le.Event(p, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : le.makeArray(t, [e]), d = le.event.special[p] || {}, i || !d.trigger || d.trigger.apply(r, t) !== !1)) {
					if (!i && !d.noBubble && !le.isWindow(r)) {
						for (c = d.delegateType || p, yt.test(c + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
						s === (r.ownerDocument || J) && f.push(s.defaultView || s.parentWindow || n)
					}
					for (o = 0;
						(a = f[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? c : d.bindType || p, u = (Me.get(a, "events") || {})[e.type] && Me.get(a, "handle"), u && u.apply(a, t), u = l && a[l], u && u.apply && Se(a) && (e.result = u.apply(a, t), e.result === !1 && e.preventDefault());
					return e.type = p, i || e.isDefaultPrevented() || d._default && d._default.apply(f.pop(), t) !== !1 || !Se(r) || l && le.isFunction(r[p]) && !le.isWindow(r) && (s = r[l], s && (r[l] = null), le.event.triggered = p, r[p](), le.event.triggered = void 0, s && (r[l] = s)), e.result
				}
			},
			simulate: function (e, t, n) {
				var r = le.extend(new le.Event, n, {
					type: e,
					isSimulated: !0
				});
				le.event.trigger(r, null, t)
			}
		}), le.fn.extend({
			trigger: function (e, t) {
				return this.each(function () {
					le.event.trigger(e, t, this)
				})
			},
			triggerHandler: function (e, t) {
				var n = this[0];
				if (n) return le.event.trigger(e, t, n, !0)
			}
		}), le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
			le.fn[t] = function (e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), le.fn.extend({
			hover: function (e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			}
		}), se.focusin = "onfocusin" in n, se.focusin || le.each({
			focus: "focusin",
			blur: "focusout"
		}, function (e, t) {
			var n = function (e) {
				le.event.simulate(t, e.target, le.event.fix(e))
			};
			le.event.special[t] = {
				setup: function () {
					var r = this.ownerDocument || this,
						i = Me.access(r, t);
					i || r.addEventListener(e, n, !0), Me.access(r, t, (i || 0) + 1)
				},
				teardown: function () {
					var r = this.ownerDocument || this,
						i = Me.access(r, t) - 1;
					i ? Me.access(r, t, i) : (r.removeEventListener(e, n, !0), Me.remove(r, t))
				}
			}
		});
		var xt = n.location,
			wt = le.now(),
			_t = /\?/;
		le.parseJSON = function (e) {
			return JSON.parse(e + "")
		}, le.parseXML = function (e) {
			var t;
			if (!e || "string" != typeof e) return null;
			try {
				t = (new n.DOMParser).parseFromString(e, "text/xml")
			} catch (r) {
				t = void 0
			}
			return t && !t.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + e), t
		};
		var kt = /#.*$/,
			Nt = /([?&])_=[^&]*/,
			Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Et = /^(?:GET|HEAD)$/,
			St = /^\/\//,
			Mt = {},
			At = {},
			Lt = "*/".concat("*"),
			qt = J.createElement("a");
		qt.href = xt.href, le.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: xt.href,
				type: "GET",
				isLocal: Tt.test(xt.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Lt,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": le.parseJSON,
					"text xml": le.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function (e, t) {
				return t ? X(X(e, le.ajaxSettings), t) : X(le.ajaxSettings, e)
			},
			ajaxPrefilter: U(Mt),
			ajaxTransport: U(At),
			ajax: function (e, t) {
				function r(e, t, r, s) {
					var l, d, v, y, w, k = t;
					2 !== x && (x = 2, c && n.clearTimeout(c), i = void 0, a = s || "", _.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, r && (y = Q(f, _, r)), y = Z(f, y, _, l), l ? (f.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (le.lastModified[o] = w), w = _.getResponseHeader("etag"), w && (le.etag[o] = w)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, d = y.data, v = y.error, l = !v)) : (v = k, !e && k || (k = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || k) + "", l ? g.resolveWith(p, [d, k, _]) : g.rejectWith(p, [_, k, v]), _.statusCode(b), b = void 0, u && h.trigger(l ? "ajaxSuccess" : "ajaxError", [_, f, l ? d : v]), m.fireWith(p, [_, k]), u && (h.trigger("ajaxComplete", [_, f]), --le.active || le.event.trigger("ajaxStop")))
				}
				"object" == typeof e && (t = e, e = void 0), t = t || {};
				var i, o, a, s, c, l, u, d, f = le.ajaxSetup({}, t),
					p = f.context || f,
					h = f.context && (p.nodeType || p.jquery) ? le(p) : le.event,
					g = le.Deferred(),
					m = le.Callbacks("once memory"),
					b = f.statusCode || {},
					v = {},
					y = {},
					x = 0,
					w = "canceled",
					_ = {
						readyState: 0,
						getResponseHeader: function (e) {
							var t;
							if (2 === x) {
								if (!s)
									for (s = {}; t = Ct.exec(a);) s[t[1].toLowerCase()] = t[2];
								t = s[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function () {
							return 2 === x ? a : null
						},
						setRequestHeader: function (e, t) {
							var n = e.toLowerCase();
							return x || (e = y[n] = y[n] || e, v[e] = t), this
						},
						overrideMimeType: function (e) {
							return x || (f.mimeType = e), this
						},
						statusCode: function (e) {
							var t;
							if (e)
								if (x < 2)
									for (t in e) b[t] = [b[t], e[t]];
								else _.always(e[_.status]);
							return this
						},
						abort: function (e) {
							var t = e || w;
							return i && i.abort(t), r(0, t), this
						}
					};
				if (g.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, f.url = ((e || f.url || xt.href) + "").replace(kt, "").replace(St, xt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = le.trim(f.dataType || "*").toLowerCase().match(Ce) || [""], null == f.crossDomain) {
					l = J.createElement("a");
					try {
						l.href = f.url, l.href = l.href, f.crossDomain = qt.protocol + "//" + qt.host != l.protocol + "//" + l.host
					} catch (k) {
						f.crossDomain = !0
					}
				}
				if (f.data && f.processData && "string" != typeof f.data && (f.data = le.param(f.data, f.traditional)), K(Mt, f, t, _), 2 === x) return _;
				u = le.event && f.global, u && 0 === le.active++ && le.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Et.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (_t.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Nt.test(o) ? o.replace(Nt, "$1_=" + wt++) : o + (_t.test(o) ? "&" : "?") + "_=" + wt++)), f.ifModified && (le.lastModified[o] && _.setRequestHeader("If-Modified-Since", le.lastModified[o]), le.etag[o] && _.setRequestHeader("If-None-Match", le.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", f.contentType), _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : f.accepts["*"]);
				for (d in f.headers) _.setRequestHeader(d, f.headers[d]);
				if (f.beforeSend && (f.beforeSend.call(p, _, f) === !1 || 2 === x)) return _.abort();
				w = "abort";
				for (d in {
						success: 1,
						error: 1,
						complete: 1
					}) _[d](f[d]);
				if (i = K(At, f, t, _)) {
					if (_.readyState = 1, u && h.trigger("ajaxSend", [_, f]), 2 === x) return _;
					f.async && f.timeout > 0 && (c = n.setTimeout(function () {
						_.abort("timeout")
					}, f.timeout));
					try {
						x = 1, i.send(v, r)
					} catch (k) {
						if (!(x < 2)) throw k;
						r(-1, k)
					}
				} else r(-1, "No Transport");
				return _
			},
			getJSON: function (e, t, n) {
				return le.get(e, t, n, "json")
			},
			getScript: function (e, t) {
				return le.get(e, void 0, t, "script")
			}
		}), le.each(["get", "post"], function (e, t) {
			le[t] = function (e, n, r, i) {
				return le.isFunction(n) && (i = i || r, r = n, n = void 0), le.ajax(le.extend({
					url: e,
					type: t,
					dataType: i,
					data: n,
					success: r
				}, le.isPlainObject(e) && e))
			}
		}), le._evalUrl = function (e) {
			return le.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}, le.fn.extend({
			wrapAll: function (e) {
				var t;
				return le.isFunction(e) ? this.each(function (t) {
					le(this).wrapAll(e.call(this, t))
				}) : (this[0] && (t = le(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e
				}).append(this)), this)
			},
			wrapInner: function (e) {
				return le.isFunction(e) ? this.each(function (t) {
					le(this).wrapInner(e.call(this, t))
				}) : this.each(function () {
					var t = le(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function (e) {
				var t = le.isFunction(e);
				return this.each(function (n) {
					le(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function () {
				return this.parent().each(function () {
					le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
				}).end()
			}
		}), le.expr.filters.hidden = function (e) {
			return !le.expr.filters.visible(e)
		}, le.expr.filters.visible = function (e) {
			return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
		};
		var jt = /%20/g,
			$t = /\[\]$/,
			Bt = /\r?\n/g,
			Dt = /^(?:submit|button|image|reset|file)$/i,
			Rt = /^(?:input|select|textarea|keygen)/i;
		le.param = function (e, t) {
			var n, r = [],
				i = function (e, t) {
					t = le.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
				};
			if (void 0 === t && (t = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e, function () {
				i(this.name, this.value)
			});
			else
				for (n in e) V(n, e[n], t, i);
			return r.join("&").replace(jt, "+")
		}, le.fn.extend({
			serialize: function () {
				return le.param(this.serializeArray())
			},
			serializeArray: function () {
				return this.map(function () {
					var e = le.prop(this, "elements");
					return e ? le.makeArray(e) : this
				}).filter(function () {
					var e = this.type;
					return this.name && !le(this).is(":disabled") && Rt.test(this.nodeName) && !Dt.test(e) && (this.checked || !Re.test(e))
				}).map(function (e, t) {
					var n = le(this).val();
					return null == n ? null : le.isArray(n) ? le.map(n, function (e) {
						return {
							name: t.name,
							value: e.replace(Bt, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(Bt, "\r\n")
					}
				}).get()
			}
		}), le.ajaxSettings.xhr = function () {
			try {
				return new n.XMLHttpRequest
			} catch (e) {}
		};
		var It = {
				0: 200,
				1223: 204
			},
			Ht = le.ajaxSettings.xhr();
		se.cors = !!Ht && "withCredentials" in Ht, se.ajax = Ht = !!Ht, le.ajaxTransport(function (e) {
			var t, r;
			if (se.cors || Ht && !e.crossDomain) return {
				send: function (i, o) {
					var a, s = e.xhr();
					if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (a in e.xhrFields) s[a] = e.xhrFields[a];
					e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					for (a in i) s.setRequestHeader(a, i[a]);
					t = function (e) {
						return function () {
							t && (t = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(It[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
								binary: s.response
							} : {
								text: s.responseText
							}, s.getAllResponseHeaders()))
						}
					}, s.onload = t(), r = s.onerror = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
						4 === s.readyState && n.setTimeout(function () {
							t && r()
						})
					}, t = t("abort");
					try {
						s.send(e.hasContent && e.data || null)
					} catch (c) {
						if (t) throw c
					}
				},
				abort: function () {
					t && t()
				}
			}
		}), le.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function (e) {
					return le.globalEval(e), e
				}
			}
		}), le.ajaxPrefilter("script", function (e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
		}), le.ajaxTransport("script", function (e) {
			if (e.crossDomain) {
				var t, n;
				return {
					send: function (r, i) {
						t = le("<script>").prop({
							charset: e.scriptCharset,
							src: e.url
						}).on("load error", n = function (e) {
							t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
						}), J.head.appendChild(t[0])
					},
					abort: function () {
						n && n()
					}
				}
			}
		});
		var zt = [],
			Ot = /(=)\?(?=&|$)|\?\?/;
		le.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var e = zt.pop() || le.expando + "_" + wt++;
				return this[e] = !0, e
			}
		}), le.ajaxPrefilter("json jsonp", function (e, t, r) {
			var i, o, a, s = e.jsonp !== !1 && (Ot.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(e.data) && "data");
			if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = le.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ot, "$1" + i) : e.jsonp !== !1 && (e.url += (_t.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
				return a || le.error(i + " was not called"), a[0]
			}, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
				a = arguments
			}, r.always(function () {
				void 0 === o ? le(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, zt.push(i)), a && le.isFunction(o) && o(a[0]), a = o = void 0
			}), "script"
		}), le.parseHTML = function (e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || J;
			var r = ve.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = m([e], t, i), i && i.length && le(i).remove(), le.merge([], r.childNodes))
		};
		var Ft = le.fn.load;
		le.fn.load = function (e, t, n) {
			if ("string" != typeof e && Ft) return Ft.apply(this, arguments);
			var r, i, o, a = this,
				s = e.indexOf(" ");
			return s > -1 && (r = le.trim(e.slice(s)), e = e.slice(0, s)), le.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && le.ajax({
				url: e,
				type: i || "GET",
				dataType: "html",
				data: t
			}).done(function (e) {
				o = arguments, a.html(r ? le("<div>").append(le.parseHTML(e)).find(r) : e)
			}).always(n && function (e, t) {
				a.each(function () {
					n.apply(this, o || [e.responseText, t, e])
				})
			}), this
		}, le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
			le.fn[t] = function (e) {
				return this.on(t, e)
			}
		}), le.expr.filters.animated = function (e) {
			return le.grep(le.timers, function (t) {
				return e === t.elem
			}).length
		}, le.offset = {
			setOffset: function (e, t, n) {
				var r, i, o, a, s, c, l, u = le.css(e, "position"),
					d = le(e),
					f = {};
				"static" === u && (e.style.position = "relative"), s = d.offset(), o = le.css(e, "top"), c = le.css(e, "left"), l = ("absolute" === u || "fixed" === u) && (o + c).indexOf("auto") > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(c) || 0), le.isFunction(t) && (t = t.call(e, n, le.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
			}
		}, le.fn.extend({
			offset: function (e) {
				if (arguments.length) return void 0 === e ? this : this.each(function (t) {
					le.offset.setOffset(this, e, t)
				});
				var t, n, r = this[0],
					i = {
						top: 0,
						left: 0
					},
					o = r && r.ownerDocument;
				if (o) return t = o.documentElement, le.contains(t, r) ? (i = r.getBoundingClientRect(), n = Y(o), {
					top: i.top + n.pageYOffset - t.clientTop,
					left: i.left + n.pageXOffset - t.clientLeft
				}) : i
			},
			position: function () {
				if (this[0]) {
					var e, t, n = this[0],
						r = {
							top: 0,
							left: 0
						};
					return "fixed" === le.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (r = e.offset()), r.top += le.css(e[0], "borderTopWidth", !0), r.left += le.css(e[0], "borderLeftWidth", !0)), {
						top: t.top - r.top - le.css(n, "marginTop", !0),
						left: t.left - r.left - le.css(n, "marginLeft", !0)
					}
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (var e = this.offsetParent; e && "static" === le.css(e, "position");) e = e.offsetParent;
					return e || nt
				})
			}
		}), le.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function (e, t) {
			var n = "pageYOffset" === t;
			le.fn[e] = function (r) {
				return Ee(this, function (e, r, i) {
					var o = Y(e);
					return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
				}, e, r, arguments.length)
			}
		}), le.each(["top", "left"], function (e, t) {
			le.cssHooks[t] = L(se.pixelPosition, function (e, n) {
				if (n) return n = A(e, t), Je.test(n) ? le(e).position()[t] + "px" : n
			})
		}), le.each({
			Height: "height",
			Width: "width"
		}, function (e, t) {
			le.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function (n, r) {
				le.fn[r] = function (r, i) {
					var o = arguments.length && (n || "boolean" != typeof r),
						a = n || (r === !0 || i === !0 ? "margin" : "border");
					return Ee(this, function (t, n, r) {
						var i;
						return le.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? le.css(t, n, a) : le.style(t, n, r, a)
					}, t, o ? r : void 0, o, null)
				}
			})
		}), le.fn.extend({
			bind: function (e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function (e, t) {
				return this.off(e, null, t)
			},
			delegate: function (e, t, n, r) {
				return this.on(t, e, n, r)
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			},
			size: function () {
				return this.length
			}
		}), le.fn.andSelf = le.fn.addBack, r = [], i = function () {
			return le
		}.apply(t, r), !(void 0 !== i && (e.exports = i));
		var Wt = n.jQuery,
			Pt = n.$;
		return le.noConflict = function (e) {
			return n.$ === le && (n.$ = Pt), e && n.jQuery === le && (n.jQuery = Wt), le
		}, o || (n.jQuery = n.$ = le), le
	})
}, function (e, t, n) { /*! highlight.js v8.9.1 | BSD3 License | git.io/hljslicense */
	! function (e) {
		e(t)
	}(function (e) {
		function t(e) {
			return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
		}

		function n(e) {
			return e.nodeName.toLowerCase()
		}

		function r(e, t) {
			var n = e && e.exec(t);
			return n && 0 == n.index
		}

		function i(e) {
			return /^(no-?highlight|plain|text)$/i.test(e)
		}

		function o(e) {
			var t, n, r, o = e.className + " ";
			if (o += e.parentNode ? e.parentNode.className : "", n = /\blang(?:uage)?-([\w-]+)\b/i.exec(o)) return x(n[1]) ? n[1] : "no-highlight";
			for (o = o.split(/\s+/), t = 0, r = o.length; r > t; t++)
				if (x(o[t]) || i(o[t])) return o[t]
		}

		function a(e, t) {
			var n, r = {};
			for (n in e) r[n] = e[n];
			if (t)
				for (n in t) r[n] = t[n];
			return r
		}

		function s(e) {
			var t = [];
			return function r(e, i) {
				for (var o = e.firstChild; o; o = o.nextSibling) 3 == o.nodeType ? i += o.nodeValue.length : 1 == o.nodeType && (t.push({
					event: "start",
					offset: i,
					node: o
				}), i = r(o, i), n(o).match(/br|hr|img|input/) || t.push({
					event: "stop",
					offset: i,
					node: o
				}));
				return i
			}(e, 0), t
		}

		function c(e, r, i) {
			function o() {
				return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" == r[0].event ? e : r : e.length ? e : r
			}

			function a(e) {
				function r(e) {
					return " " + e.nodeName + '="' + t(e.value) + '"'
				}
				u += "<" + n(e) + Array.prototype.map.call(e.attributes, r).join("") + ">"
			}

			function s(e) {
				u += "</" + n(e) + ">"
			}

			function c(e) {
				("start" == e.event ? a : s)(e.node)
			}
			for (var l = 0, u = "", d = []; e.length || r.length;) {
				var f = o();
				if (u += t(i.substr(l, f[0].offset - l)), l = f[0].offset, f == e) {
					d.reverse().forEach(s);
					do c(f.splice(0, 1)[0]), f = o(); while (f == e && f.length && f[0].offset == l);
					d.reverse().forEach(a)
				} else "start" == f[0].event ? d.push(f[0].node) : d.pop(), c(f.splice(0, 1)[0])
			}
			return u + t(i.substr(l))
		}

		function l(e) {
			function t(e) {
				return e && e.source || e
			}

			function n(n, r) {
				return new RegExp(t(n), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
			}

			function r(i, o) {
				if (!i.compiled) {
					if (i.compiled = !0, i.k = i.k || i.bK, i.k) {
						var s = {},
							c = function (t, n) {
								e.cI && (n = n.toLowerCase()), n.split(" ").forEach(function (e) {
									var n = e.split("|");
									s[n[0]] = [t, n[1] ? Number(n[1]) : 1]
								})
							};
						"string" == typeof i.k ? c("keyword", i.k) : Object.keys(i.k).forEach(function (e) {
							c(e, i.k[e])
						}), i.k = s
					}
					i.lR = n(i.l || /\b\w+\b/, !0), o && (i.bK && (i.b = "\\b(" + i.bK.split(" ").join("|") + ")\\b"), i.b || (i.b = /\B|\b/), i.bR = n(i.b), i.e || i.eW || (i.e = /\B|\b/), i.e && (i.eR = n(i.e)), i.tE = t(i.e) || "", i.eW && o.tE && (i.tE += (i.e ? "|" : "") + o.tE)), i.i && (i.iR = n(i.i)), void 0 === i.r && (i.r = 1), i.c || (i.c = []);
					var l = [];
					i.c.forEach(function (e) {
						e.v ? e.v.forEach(function (t) {
							l.push(a(e, t))
						}) : l.push("self" == e ? i : e)
					}), i.c = l, i.c.forEach(function (e) {
						r(e, i)
					}), i.starts && r(i.starts, o);
					var u = i.c.map(function (e) {
						return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
					}).concat([i.tE, i.i]).map(t).filter(Boolean);
					i.t = u.length ? n(u.join("|"), !0) : {
						exec: function () {
							return null
						}
					}
				}
			}
			r(e)
		}

		function u(e, n, i, o) {
			function a(e, t) {
				for (var n = 0; n < t.c.length; n++)
					if (r(t.c[n].bR, e)) return t.c[n]
			}

			function s(e, t) {
				if (r(e.eR, t)) {
					for (; e.endsParent && e.parent;) e = e.parent;
					return e
				}
				return e.eW ? s(e.parent, t) : void 0
			}

			function c(e, t) {
				return !i && r(t.iR, e)
			}

			function f(e, t) {
				var n = y.cI ? t[0].toLowerCase() : t[0];
				return e.k.hasOwnProperty(n) && e.k[n]
			}

			function p(e, t, n, r) {
				var i = r ? "" : w.classPrefix,
					o = '<span class="' + i,
					a = n ? "" : "</span>";
				return o += e + '">', o + t + a
			}

			function h() {
				if (!N.k) return t(E);
				var e = "",
					n = 0;
				N.lR.lastIndex = 0;
				for (var r = N.lR.exec(E); r;) {
					e += t(E.substr(n, r.index - n));
					var i = f(N, r);
					i ? (S += i[1], e += p(i[0], t(r[0]))) : e += t(r[0]), n = N.lR.lastIndex, r = N.lR.exec(E)
				}
				return e + t(E.substr(n))
			}

			function g() {
				var e = "string" == typeof N.sL;
				if (e && !_[N.sL]) return t(E);
				var n = e ? u(N.sL, E, !0, C[N.sL]) : d(E, N.sL.length ? N.sL : void 0);
				return N.r > 0 && (S += n.r), e && (C[N.sL] = n.top), p(n.language, n.value, !1, !0)
			}

			function m() {
				return void 0 !== N.sL ? g() : h()
			}

			function b(e, n) {
				var r = e.cN ? p(e.cN, "", !0) : "";
				e.rB ? (T += r, E = "") : e.eB ? (T += t(n) + r, E = "") : (T += r, E = n), N = Object.create(e, {
					parent: {
						value: N
					}
				})
			}

			function v(e, n) {
				if (E += e, void 0 === n) return T += m(), 0;
				var r = a(n, N);
				if (r) return T += m(), b(r, n), r.rB ? 0 : n.length;
				var i = s(N, n);
				if (i) {
					var o = N;
					o.rE || o.eE || (E += n), T += m();
					do N.cN && (T += "</span>"), S += N.r, N = N.parent; while (N != i.parent);
					return o.eE && (T += t(n)), E = "", i.starts && b(i.starts, ""), o.rE ? 0 : n.length
				}
				if (c(n, N)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (N.cN || "<unnamed>") + '"');
				return E += n, n.length || 1
			}
			var y = x(e);
			if (!y) throw new Error('Unknown language: "' + e + '"');
			l(y);
			var k, N = o || y,
				C = {},
				T = "";
			for (k = N; k != y; k = k.parent) k.cN && (T = p(k.cN, "", !0) + T);
			var E = "",
				S = 0;
			try {
				for (var M, A, L = 0; N.t.lastIndex = L, M = N.t.exec(n), M;) A = v(n.substr(L, M.index - L), M[0]), L = M.index + A;
				for (v(n.substr(L)), k = N; k.parent; k = k.parent) k.cN && (T += "</span>");
				return {
					r: S,
					value: T,
					language: e,
					top: N
				}
			} catch (q) {
				if (-1 != q.message.indexOf("Illegal")) return {
					r: 0,
					value: t(n)
				};
				throw q
			}
		}

		function d(e, n) {
			n = n || w.languages || Object.keys(_);
			var r = {
					r: 0,
					value: t(e)
				},
				i = r;
			return n.forEach(function (t) {
				if (x(t)) {
					var n = u(t, e, !1);
					n.language = t, n.r > i.r && (i = n), n.r > r.r && (i = r, r = n)
				}
			}), i.language && (r.second_best = i), r
		}

		function f(e) {
			return w.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function (e, t) {
				return t.replace(/\t/g, w.tabReplace)
			})), w.useBR && (e = e.replace(/\n/g, "<br>")), e
		}

		function p(e, t, n) {
			var r = t ? k[t] : n,
				i = [e.trim()];
			return e.match(/\bhljs\b/) || i.push("hljs"), -1 === e.indexOf(r) && i.push(r), i.join(" ").trim()
		}

		function h(e) {
			var t = o(e);
			if (!i(t)) {
				var n;
				w.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : n = e;
				var r = n.textContent,
					a = t ? u(t, r, !0) : d(r),
					l = s(n);
				if (l.length) {
					var h = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
					h.innerHTML = a.value, a.value = c(l, s(h), r)
				}
				a.value = f(a.value), e.innerHTML = a.value, e.className = p(e.className, t, a.language), e.result = {
					language: a.language,
					re: a.r
				}, a.second_best && (e.second_best = {
					language: a.second_best.language,
					re: a.second_best.r
				})
			}
		}

		function g(e) {
			w = a(w, e)
		}

		function m() {
			if (!m.called) {
				m.called = !0;
				var e = document.querySelectorAll("pre code");
				Array.prototype.forEach.call(e, h)
			}
		}

		function b() {
			addEventListener("DOMContentLoaded", m, !1), addEventListener("load", m, !1)
		}

		function v(t, n) {
			var r = _[t] = n(e);
			r.aliases && r.aliases.forEach(function (e) {
				k[e] = t
			})
		}

		function y() {
			return Object.keys(_)
		}

		function x(e) {
			return e = (e || "").toLowerCase(), _[e] || _[k[e]]
		}
		var w = {
				classPrefix: "hljs-",
				tabReplace: null,
				useBR: !1,
				languages: void 0
			},
			_ = {},
			k = {};
		return e.highlight = u, e.highlightAuto = d, e.fixMarkup = f, e.highlightBlock = h, e.configure = g, e.initHighlighting = m, e.initHighlightingOnLoad = b, e.registerLanguage = v, e.listLanguages = y, e.getLanguage = x, e.inherit = a, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
			b: "\\\\[\\s\\S]",
			r: 0
		}, e.ASM = {
			cN: "string",
			b: "'",
			e: "'",
			i: "\\n",
			c: [e.BE]
		}, e.QSM = {
			cN: "string",
			b: '"',
			e: '"',
			i: "\\n",
			c: [e.BE]
		}, e.PWM = {
			b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
		}, e.C = function (t, n, r) {
			var i = e.inherit({
				cN: "comment",
				b: t,
				e: n,
				c: []
			}, r || {});
			return i.c.push(e.PWM), i.c.push({
				cN: "doctag",
				b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
				r: 0
			}), i
		}, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
			cN: "number",
			b: e.NR,
			r: 0
		}, e.CNM = {
			cN: "number",
			b: e.CNR,
			r: 0
		}, e.BNM = {
			cN: "number",
			b: e.BNR,
			r: 0
		}, e.CSSNM = {
			cN: "number",
			b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
			r: 0
		}, e.RM = {
			cN: "regexp",
			b: /\//,
			e: /\/[gimuy]*/,
			i: /\n/,
			c: [e.BE, {
				b: /\[/,
				e: /\]/,
				r: 0,
				c: [e.BE]
			}]
		}, e.TM = {
			cN: "title",
			b: e.IR,
			r: 0
		}, e.UTM = {
			cN: "title",
			b: e.UIR,
			r: 0
		}, e.registerLanguage("apache", function (e) {
			var t = {
				cN: "number",
				b: "[\\$%]\\d+"
			};
			return {
				aliases: ["apacheconf"],
				cI: !0,
				c: [e.HCM, {
					cN: "section",
					b: "</?",
					e: ">"
				}, {
					cN: "attribute",
					b: /\w+/,
					r: 0,
					k: {
						nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
					},
					starts: {
						e: /$/,
						r: 0,
						k: {
							literal: "on off all"
						},
						c: [{
							cN: "meta",
							b: "\\s\\[",
							e: "\\]$"
						}, {
							cN: "variable",
							b: "[\\$%]\\{",
							e: "\\}",
							c: ["self", t]
						}, t, e.QSM]
					}
				}],
				i: /\S/
			}
		}), e.registerLanguage("bash", function (e) {
			var t = {
					cN: "variable",
					v: [{
						b: /\$[\w\d#@][\w\d_]*/
					}, {
						b: /\$\{(.*?)}/
					}]
				},
				n = {
					cN: "string",
					b: /"/,
					e: /"/,
					c: [e.BE, t, {
						cN: "variable",
						b: /\$\(/,
						e: /\)/,
						c: [e.BE]
					}]
				},
				r = {
					cN: "string",
					b: /'/,
					e: /'/
				};
			return {
				aliases: ["sh", "zsh"],
				l: /-?[a-z\.]+/,
				k: {
					keyword: "if then else elif fi for while in do done case esac function",
					literal: "true false",
					built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
					_: "-ne -eq -lt -gt -f -d -e -s -l -a"
				},
				c: [{
					cN: "meta",
					b: /^#![^\n]+sh\s*$/,
					r: 10
				}, {
					cN: "function",
					b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
					rB: !0,
					c: [e.inherit(e.TM, {
						b: /\w[\w\d_]*/
					})],
					r: 0
				}, e.HCM, e.NM, n, r, t]
			}
		}), e.registerLanguage("coffeescript", function (e) {
			var t = {
					keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
					literal: "true false null undefined yes no on off",
					built_in: "npm require console print module global window document"
				},
				n = "[A-Za-z$_][0-9A-Za-z$_]*",
				r = {
					cN: "subst",
					b: /#\{/,
					e: /}/,
					k: t
				},
				i = [e.BNM, e.inherit(e.CNM, {
					starts: {
						e: "(\\s*/)?",
						r: 0
					}
				}), {
					cN: "string",
					v: [{
						b: /'''/,
						e: /'''/,
						c: [e.BE]
					}, {
						b: /'/,
						e: /'/,
						c: [e.BE]
					}, {
						b: /"""/,
						e: /"""/,
						c: [e.BE, r]
					}, {
						b: /"/,
						e: /"/,
						c: [e.BE, r]
					}]
				}, {
					cN: "regexp",
					v: [{
						b: "///",
						e: "///",
						c: [r, e.HCM]
					}, {
						b: "//[gim]*",
						r: 0
					}, {
						b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
					}]
				}, {
					b: "@" + n
				}, {
					b: "`",
					e: "`",
					eB: !0,
					eE: !0,
					sL: "javascript"
				}];
			r.c = i;
			var o = e.inherit(e.TM, {
					b: n
				}),
				a = "(\\(.*\\))?\\s*\\B[-=]>",
				s = {
					cN: "params",
					b: "\\([^\\(]",
					rB: !0,
					c: [{
						b: /\(/,
						e: /\)/,
						k: t,
						c: ["self"].concat(i)
					}]
				};
			return {
				aliases: ["coffee", "cson", "iced"],
				k: t,
				i: /\/\*/,
				c: i.concat([e.C("###", "###"), e.HCM, {
					cN: "function",
					b: "^\\s*" + n + "\\s*=\\s*" + a,
					e: "[-=]>",
					rB: !0,
					c: [o, s]
				}, {
					b: /[:\(,=]\s*/,
					r: 0,
					c: [{
						cN: "function",
						b: a,
						e: "[-=]>",
						rB: !0,
						c: [s]
					}]
				}, {
					cN: "class",
					bK: "class",
					e: "$",
					i: /[:="\[\]]/,
					c: [{
						bK: "extends",
						eW: !0,
						i: /[:="\[\]]/,
						c: [o]
					}, o]
				}, {
					b: n + ":",
					e: ":",
					rB: !0,
					rE: !0,
					r: 0
				}])
			}
		}), e.registerLanguage("cpp", function (e) {
			var t = {
					cN: "keyword",
					b: "\\b[a-z\\d_]*_t\\b"
				},
				n = {
					cN: "string",
					v: [e.inherit(e.QSM, {
						b: '((u8?|U)|L)?"'
					}), {
						b: '(u8?|U)?R"',
						e: '"',
						c: [e.BE]
					}, {
						b: "'\\\\?.",
						e: "'",
						i: "."
					}]
				},
				r = {
					cN: "number",
					v: [{
						b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
					}, {
						b: e.CNR
					}],
					r: 0
				},
				i = {
					cN: "meta",
					b: "#",
					e: "$",
					k: "if else elif endif define undef warning error line pragma ifdef ifndef",
					c: [{
						b: /\\\n/,
						r: 0
					}, {
						bK: "include",
						e: "$",
						c: [n, {
							cN: "string",
							b: "<",
							e: ">",
							i: "\\n"
						}]
					}, n, r, e.CLCM, e.CBCM]
				},
				o = e.IR + "\\s*\\(",
				a = {
					keyword: "int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong",
					built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf",
					literal: "true false nullptr NULL"
				};
			return {
				aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
				k: a,
				i: "</",
				c: [t, e.CLCM, e.CBCM, r, n, i, {
					b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
					e: ">",
					k: a,
					c: ["self", t]
				}, {
					b: e.IR + "::",
					k: a
				}, {
					bK: "new throw return else",
					r: 0
				}, {
					cN: "function",
					b: "(" + e.IR + "[\\*&\\s]+)+" + o,
					rB: !0,
					e: /[{;=]/,
					eE: !0,
					k: a,
					i: /[^\w\s\*&]/,
					c: [{
						b: o,
						rB: !0,
						c: [e.TM],
						r: 0
					}, {
						cN: "params",
						b: /\(/,
						e: /\)/,
						k: a,
						r: 0,
						c: [e.CLCM, e.CBCM, n, r]
					}, e.CLCM, e.CBCM, i]
				}]
			}
		}), e.registerLanguage("cs", function (e) {
			var t = "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
				n = e.IR + "(<" + e.IR + ">)?";
			return {
				aliases: ["csharp"],
				k: t,
				i: /::/,
				c: [e.C("///", "$", {
					rB: !0,
					c: [{
						cN: "doctag",
						v: [{
							b: "///",
							r: 0
						}, {
							b: "<!--|-->"
						}, {
							b: "</?",
							e: ">"
						}]
					}]
				}), e.CLCM, e.CBCM, {
					cN: "meta",
					b: "#",
					e: "$",
					k: "if else elif endif define undef warning error line region endregion pragma checksum"
				}, {
					cN: "string",
					b: '@"',
					e: '"',
					c: [{
						b: '""'
					}]
				}, e.ASM, e.QSM, e.CNM, {
					bK: "class interface",
					e: /[{;=]/,
					i: /[^\s:]/,
					c: [e.TM, e.CLCM, e.CBCM]
				}, {
					bK: "namespace",
					e: /[{;=]/,
					i: /[^\s:]/,
					c: [e.inherit(e.TM, {
						b: "[a-zA-Z](\\.?\\w)*"
					}), e.CLCM, e.CBCM]
				}, {
					bK: "new return throw await",
					r: 0
				}, {
					cN: "function",
					b: "(" + n + "\\s+)+" + e.IR + "\\s*\\(",
					rB: !0,
					e: /[{;=]/,
					eE: !0,
					k: t,
					c: [{
						b: e.IR + "\\s*\\(",
						rB: !0,
						c: [e.TM],
						r: 0
					}, {
						cN: "params",
						b: /\(/,
						e: /\)/,
						eB: !0,
						eE: !0,
						k: t,
						r: 0,
						c: [e.ASM, e.QSM, e.CNM, e.CBCM]
					}, e.CLCM, e.CBCM]
				}]
			}
		}), e.registerLanguage("css", function (e) {
			var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
				n = {
					b: /[A-Z\_\.\-]+\s*:/,
					rB: !0,
					e: ";",
					eW: !0,
					c: [{
						cN: "attribute",
						b: /\S/,
						e: ":",
						eE: !0,
						starts: {
							eW: !0,
							eE: !0,
							c: [e.CSSNM, e.QSM, e.ASM, e.CBCM, {
								cN: "number",
								b: "#[0-9A-Fa-f]+"
							}, {
								cN: "meta",
								b: "!important"
							}]
						}
					}]
				};
			return {
				cI: !0,
				i: /[=\/|'\$]/,
				c: [e.CBCM, {
					cN: "selector-id",
					b: /#[A-Za-z0-9_-]+/
				}, {
					cN: "selector-class",
					b: /\.[A-Za-z0-9_-]+/
				}, {
					cN: "selector-attr",
					b: /\[/,
					e: /\]/,
					i: "$"
				}, {
					b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/
				}, {
					b: "@(font-face|page)",
					l: "[a-z-]+",
					k: "font-face page"
				}, {
					b: "@",
					e: "[{;]",
					c: [{
						cN: "keyword",
						b: /\S+/
					}, {
						b: /\s/,
						eW: !0,
						eE: !0,
						r: 0,
						c: [e.ASM, e.QSM, e.CSSNM]
					}]
				}, {
					cN: "selector-tag",
					b: t,
					r: 0
				}, {
					b: "{",
					e: "}",
					i: /\S/,
					c: [e.CBCM, n]
				}]
			}
		}), e.registerLanguage("diff", function (e) {
			return {
				aliases: ["patch"],
				c: [{
					cN: "meta",
					r: 10,
					v: [{
						b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
					}, {
						b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
					}, {
						b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
					}]
				}, {
					cN: "comment",
					v: [{
						b: /Index: /,
						e: /$/
					}, {
						b: /=====/,
						e: /=====$/
					}, {
						b: /^\-\-\-/,
						e: /$/
					}, {
						b: /^\*{3} /,
						e: /$/
					}, {
						b: /^\+\+\+/,
						e: /$/
					}, {
						b: /\*{5}/,
						e: /\*{5}$/
					}]
				}, {
					cN: "addition",
					b: "^\\+",
					e: "$"
				}, {
					cN: "deletion",
					b: "^\\-",
					e: "$"
				}, {
					cN: "addition",
					b: "^\\!",
					e: "$"
				}]
			}
		}), e.registerLanguage("http", function (e) {
			var t = "HTTP/[0-9\\.]+";
			return {
				aliases: ["https"],
				i: "\\S",
				c: [{
					b: "^" + t,
					e: "$",
					c: [{
						cN: "number",
						b: "\\b\\d{3}\\b"
					}]
				}, {
					b: "^[A-Z]+ (.*?) " + t + "$",
					rB: !0,
					e: "$",
					c: [{
						cN: "string",
						b: " ",
						e: " ",
						eB: !0,
						eE: !0
					}, {
						b: t
					}, {
						cN: "keyword",
						b: "[A-Z]+"
					}]
				}, {
					cN: "attribute",
					b: "^\\w",
					e: ": ",
					eE: !0,
					i: "\\n|\\s|=",
					starts: {
						e: "$",
						r: 0
					}
				}, {
					b: "\\n\\n",
					starts: {
						sL: [],
						eW: !0
					}
				}]
			}
		}), e.registerLanguage("ini", function (e) {
			var t = {
				cN: "string",
				c: [e.BE],
				v: [{
					b: "'''",
					e: "'''",
					r: 10
				}, {
					b: '"""',
					e: '"""',
					r: 10
				}, {
					b: '"',
					e: '"'
				}, {
					b: "'",
					e: "'"
				}]
			};
			return {
				aliases: ["toml"],
				cI: !0,
				i: /\S/,
				c: [e.C(";", "$"), e.HCM, {
					cN: "section",
					b: /^\s*\[+/,
					e: /\]+/
				}, {
					b: /^[a-z0-9\[\]_-]+\s*=\s*/,
					e: "$",
					rB: !0,
					c: [{
						cN: "attr",
						b: /[a-z0-9\[\]_-]+/
					}, {
						b: /=/,
						eW: !0,
						r: 0,
						c: [{
							cN: "literal",
							b: /\bon|off|true|false|yes|no\b/
						}, {
							cN: "variable",
							v: [{
								b: /\$[\w\d"][\w\d_]*/
							}, {
								b: /\$\{(.*?)}/
							}]
						}, t, {
							cN: "number",
							b: /([\+\-]+)?[\d]+_[\d_]+/
						}, e.NM]
					}]
				}]
			}
		}), e.registerLanguage("java", function (e) {
			var t = e.UIR + "(<" + e.UIR + ">)?",
				n = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
				r = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
				i = {
					cN: "number",
					b: r,
					r: 0
				};
			return {
				aliases: ["jsp"],
				k: n,
				i: /<\/|#/,
				c: [e.C("/\\*\\*", "\\*/", {
					r: 0,
					c: [{
						b: /\w+@/,
						r: 0
					}, {
						cN: "doctag",
						b: "@[A-Za-z]+"
					}]
				}), e.CLCM, e.CBCM, e.ASM, e.QSM, {
					cN: "class",
					bK: "class interface",
					e: /[{;=]/,
					eE: !0,
					k: "class interface",
					i: /[:"\[\]]/,
					c: [{
						bK: "extends implements"
					}, e.UTM]
				}, {
					bK: "new throw return else",
					r: 0
				}, {
					cN: "function",
					b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
					rB: !0,
					e: /[{;=]/,
					eE: !0,
					k: n,
					c: [{
						b: e.UIR + "\\s*\\(",
						rB: !0,
						r: 0,
						c: [e.UTM]
					}, {
						cN: "params",
						b: /\(/,
						e: /\)/,
						k: n,
						r: 0,
						c: [e.ASM, e.QSM, e.CNM, e.CBCM]
					}, e.CLCM, e.CBCM]
				}, i, {
					cN: "meta",
					b: "@[A-Za-z]+"
				}]
			}
		}), e.registerLanguage("javascript", function (e) {
			return {
				aliases: ["js"],
				k: {
					keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import from as",
					literal: "true false null undefined NaN Infinity",
					built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
				},
				c: [{
					cN: "meta",
					r: 10,
					b: /^\s*['"]use (strict|asm)['"]/
				}, e.ASM, e.QSM, {
					cN: "string",
					b: "`",
					e: "`",
					c: [e.BE, {
						cN: "subst",
						b: "\\$\\{",
						e: "\\}"
					}]
				}, e.CLCM, e.CBCM, {
					cN: "number",
					v: [{
						b: "\\b(0[bB][01]+)"
					}, {
						b: "\\b(0[oO][0-7]+)"
					}, {
						b: e.CNR
					}],
					r: 0
				}, {
					b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
					k: "return throw case",
					c: [e.CLCM, e.CBCM, e.RM, {
						b: /</,
						e: />\s*[);\]]/,
						r: 0,
						sL: "xml"
					}],
					r: 0
				}, {
					cN: "function",
					bK: "function",
					e: /\{/,
					eE: !0,
					c: [e.inherit(e.TM, {
						b: /[A-Za-z$_][0-9A-Za-z$_]*/
					}), {
						cN: "params",
						b: /\(/,
						e: /\)/,
						eB: !0,
						eE: !0,
						c: [e.CLCM, e.CBCM]
					}],
					i: /\[|%/
				}, {
					b: /\$[(.]/
				}, {
					b: "\\." + e.IR,
					r: 0
				}, {
					cN: "class",
					bK: "class",
					e: /[{;=]/,
					eE: !0,
					i: /[:"\[\]]/,
					c: [{
						bK: "extends"
					}, e.UTM]
				}, {
					bK: "constructor",
					e: /\{/,
					eE: !0
				}],
				i: /#/
			}
		}), e.registerLanguage("json", function (e) {
			var t = {
					literal: "true false null"
				},
				n = [e.QSM, e.CNM],
				r = {
					e: ",",
					eW: !0,
					eE: !0,
					c: n,
					k: t
				},
				i = {
					b: "{",
					e: "}",
					c: [{
						cN: "attr",
						b: '\\s*"',
						e: '"\\s*:\\s*',
						eB: !0,
						eE: !0,
						c: [e.BE],
						i: "\\n",
						starts: r
					}],
					i: "\\S"
				},
				o = {
					b: "\\[",
					e: "\\]",
					c: [e.inherit(r)],
					i: "\\S"
				};
			return n.splice(n.length, 0, i, o), {
				c: n,
				k: t,
				i: "\\S"
			}
		}), e.registerLanguage("makefile", function (e) {
			var t = {
				cN: "variable",
				b: /\$\(/,
				e: /\)/,
				c: [e.BE]
			};
			return {
				aliases: ["mk", "mak"],
				c: [e.HCM, {
					b: /^\w+\s*\W*=/,
					rB: !0,
					r: 0,
					starts: {
						e: /\s*\W*=/,
						eE: !0,
						starts: {
							e: /$/,
							r: 0,
							c: [t]
						}
					}
				}, {
					cN: "section",
					b: /^[\w]+:\s*$/
				}, {
					cN: "meta",
					b: /^\.PHONY:/,
					e: /$/,
					k: ".PHONY",
					l: /[\.\w]+/
				}, {
					b: /^\t+/,
					e: /$/,
					r: 0,
					c: [e.QSM, t]
				}]
			}
		}), e.registerLanguage("xml", function (e) {
			var t = "[A-Za-z0-9\\._:-]+",
				n = {
					b: /<\?(php)?(?!\w)/,
					e: /\?>/,
					sL: "php"
				},
				r = {
					eW: !0,
					i: /</,
					r: 0,
					c: [n, {
						cN: "attr",
						b: t,
						r: 0
					}, {
						b: "=",
						r: 0,
						c: [{
							cN: "string",
							c: [n],
							v: [{
								b: /"/,
								e: /"/
							}, {
								b: /'/,
								e: /'/
							}, {
								b: /[^\s\/>]+/
							}]
						}]
					}]
				};
			return {
				aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
				cI: !0,
				c: [{
					cN: "meta",
					b: "<!DOCTYPE",
					e: ">",
					r: 10,
					c: [{
						b: "\\[",
						e: "\\]"
					}]
				}, e.C("<!--", "-->", {
					r: 10
				}), {
					b: "<\\!\\[CDATA\\[",
					e: "\\]\\]>",
					r: 10
				}, {
					cN: "tag",
					b: "<style(?=\\s|>|$)",
					e: ">",
					k: {
						name: "style"
					},
					c: [r],
					starts: {
						e: "</style>",
						rE: !0,
						sL: "css"
					}
				}, {
					cN: "tag",
					b: "<script(?=\\s|>|$)",
					e: ">",
					k: {
						name: "script"
					},
					c: [r],
					starts: {
						e: "</script>",
						rE: !0,
						sL: ["actionscript", "javascript", "handlebars"]
					}
				}, n, {
					cN: "meta",
					b: /<\?\w+/,
					e: /\?>/,
					r: 10
				}, {
					cN: "tag",
					b: "</?",
					e: "/?>",
					c: [{
						cN: "name",
						b: /[^ \/><\n\t]+/,
						r: 0
					}, r]
				}]
			}
		}), e.registerLanguage("markdown", function (e) {
			return {
				aliases: ["md", "mkdown", "mkd"],
				c: [{
					cN: "section",
					v: [{
						b: "^#{1,6}",
						e: "$"
					}, {
						b: "^.+?\\n[=-]{2,}$"
					}]
				}, {
					b: "<",
					e: ">",
					sL: "xml",
					r: 0
				}, {
					cN: "bullet",
					b: "^([*+-]|(\\d+\\.))\\s+"
				}, {
					cN: "strong",
					b: "[*_]{2}.+?[*_]{2}"
				}, {
					cN: "emphasis",
					v: [{
						b: "\\*.+?\\*"
					}, {
						b: "_.+?_",
						r: 0
					}]
				}, {
					cN: "quote",
					b: "^>\\s+",
					e: "$"
				}, {
					cN: "code",
					v: [{
						b: "`.+?`"
					}, {
						b: "^( {4}|\t)",
						e: "$",
						r: 0
					}]
				}, {
					b: "^[-\\*]{3,}",
					e: "$"
				}, {
					b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
					rB: !0,
					c: [{
						cN: "string",
						b: "\\[",
						e: "\\]",
						eB: !0,
						rE: !0,
						r: 0
					}, {
						cN: "link",
						b: "\\]\\(",
						e: "\\)",
						eB: !0,
						eE: !0
					}, {
						cN: "symbol",
						b: "\\]\\[",
						e: "\\]",
						eB: !0,
						eE: !0
					}],
					r: 10
				}, {
					b: "^\\[.+\\]:",
					rB: !0,
					c: [{
						cN: "symbol",
						b: "\\[",
						e: "\\]:",
						eB: !0,
						eE: !0,
						starts: {
							cN: "link",
							e: "$"
						}
					}]
				}]
			}
		}), e.registerLanguage("nginx", function (e) {
			var t = {
					cN: "variable",
					v: [{
						b: /\$\d+/
					}, {
						b: /\$\{/,
						e: /}/
					}, {
						b: "[\\$\\@]" + e.UIR
					}]
				},
				n = {
					eW: !0,
					l: "[a-z/_]+",
					k: {
						literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
					},
					r: 0,
					i: "=>",
					c: [e.HCM, {
						cN: "string",
						c: [e.BE, t],
						v: [{
							b: /"/,
							e: /"/
						}, {
							b: /'/,
							e: /'/
						}]
					}, {
						b: "([a-z]+):/",
						e: "\\s",
						eW: !0,
						eE: !0,
						c: [t]
					}, {
						cN: "regexp",
						c: [e.BE, t],
						v: [{
							b: "\\s\\^",
							e: "\\s|{|;",
							rE: !0
						}, {
							b: "~\\*?\\s+",
							e: "\\s|{|;",
							rE: !0
						}, {
							b: "\\*(\\.[a-z\\-]+)+"
						}, {
							b: "([a-z\\-]+\\.)+\\*"
						}]
					}, {
						cN: "number",
						b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
					}, {
						cN: "number",
						b: "\\b\\d+[kKmMgGdshdwy]*\\b",
						r: 0
					}, t]
				};
			return {
				aliases: ["nginxconf"],
				c: [e.HCM, {
					b: e.UIR + "\\s+{",
					rB: !0,
					e: "{",
					c: [{
						cN: "section",
						b: e.UIR
					}],
					r: 0
				}, {
					b: e.UIR + "\\s",
					e: ";|{",
					rB: !0,
					c: [{
						cN: "attribute",
						b: e.UIR,
						starts: n
					}],
					r: 0
				}],
				i: "[^\\s\\}]"
			}
		}), e.registerLanguage("objectivec", function (e) {
			var t = {
					cN: "built_in",
					b: "(AV|CA|CF|CG|CI|MK|MP|NS|UI)\\w+"
				},
				n = {
					keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
					literal: "false true FALSE TRUE nil YES NO NULL",
					built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
				},
				r = /[a-zA-Z@][a-zA-Z0-9_]*/,
				i = "@interface @class @protocol @implementation";
			return {
				aliases: ["mm", "objc", "obj-c"],
				k: n,
				l: r,
				i: "</",
				c: [t, e.CLCM, e.CBCM, e.CNM, e.QSM, {
					cN: "string",
					v: [{
						b: '@"',
						e: '"',
						i: "\\n",
						c: [e.BE]
					}, {
						b: "'",
						e: "[^\\\\]'",
						i: "[^\\\\][^']"
					}]
				}, {
					cN: "meta",
					b: "#",
					e: "$",
					c: [{
						cN: "string",
						v: [{
							b: '"',
							e: '"'
						}, {
							b: "<",
							e: ">"
						}]
					}]
				}, {
					cN: "class",
					b: "(" + i.split(" ").join("|") + ")\\b",
					e: "({|$)",
					eE: !0,
					k: i,
					l: r,
					c: [e.UTM]
				}, {
					b: "\\." + e.UIR,
					r: 0
				}]
			}
		}), e.registerLanguage("perl", function (e) {
			var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
				n = {
					cN: "subst",
					b: "[$@]\\{",
					e: "\\}",
					k: t
				},
				r = {
					b: "->{",
					e: "}"
				},
				i = {
					v: [{
						b: /\$\d/
					}, {
						b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
					}, {
						b: /[\$%@][^\s\w{]/,
						r: 0
					}]
				},
				o = [e.BE, n, i],
				a = [i, e.HCM, e.C("^\\=\\w", "\\=cut", {
					eW: !0
				}), r, {
					cN: "string",
					c: o,
					v: [{
						b: "q[qwxr]?\\s*\\(",
						e: "\\)",
						r: 5
					}, {
						b: "q[qwxr]?\\s*\\[",
						e: "\\]",
						r: 5
					}, {
						b: "q[qwxr]?\\s*\\{",
						e: "\\}",
						r: 5
					}, {
						b: "q[qwxr]?\\s*\\|",
						e: "\\|",
						r: 5
					}, {
						b: "q[qwxr]?\\s*\\<",
						e: "\\>",
						r: 5
					}, {
						b: "qw\\s+q",
						e: "q",
						r: 5
					}, {
						b: "'",
						e: "'",
						c: [e.BE]
					}, {
						b: '"',
						e: '"'
					}, {
						b: "`",
						e: "`",
						c: [e.BE]
					}, {
						b: "{\\w+}",
						c: [],
						r: 0
					}, {
						b: "-?\\w+\\s*\\=\\>",
						c: [],
						r: 0
					}]
				}, {
					cN: "number",
					b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
					r: 0
				}, {
					b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
					k: "split return print reverse grep",
					r: 0,
					c: [e.HCM, {
						cN: "regexp",
						b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
						r: 10
					}, {
						cN: "regexp",
						b: "(m|qr)?/",
						e: "/[a-z]*",
						c: [e.BE],
						r: 0
					}]
				}, {
					cN: "function",
					bK: "sub",
					e: "(\\s*\\(.*?\\))?[;{]",
					eE: !0,
					r: 5,
					c: [e.TM]
				}, {
					b: "-\\w\\b",
					r: 0
				}, {
					b: "^__DATA__$",
					e: "^__END__$",
					sL: "mojolicious",
					c: [{
						b: "^@@.*",
						e: "$",
						cN: "comment"
					}]
				}];
			return n.c = a, r.c = a, {
				aliases: ["pl"],
				k: t,
				c: a
			}
		}), e.registerLanguage("php", function (e) {
			var t = {
					b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
				},
				n = {
					cN: "meta",
					b: /<\?(php)?|\?>/
				},
				r = {
					cN: "string",
					c: [e.BE, n],
					v: [{
						b: 'b"',
						e: '"'
					}, {
						b: "b'",
						e: "'"
					}, e.inherit(e.ASM, {
						i: null
					}), e.inherit(e.QSM, {
						i: null
					})]
				},
				i = {
					v: [e.BNM, e.CNM]
				};
			return {
				aliases: ["php3", "php4", "php5", "php6"],
				cI: !0,
				k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
				c: [e.CLCM, e.HCM, e.C("/\\*", "\\*/", {
					c: [{
						cN: "doctag",
						b: "@[A-Za-z]+"
					}, n]
				}), e.C("__halt_compiler.+?;", !1, {
					eW: !0,
					k: "__halt_compiler",
					l: e.UIR
				}), {
					cN: "string",
					b: /<<<['"]?\w+['"]?$/,
					e: /^\w+;?$/,
					c: [e.BE, {
						cN: "subst",
						v: [{
							b: /\$\w+/
						}, {
							b: /\{\$/,
							e: /\}/
						}]
					}]
				}, n, t, {
					b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
				}, {
					cN: "function",
					bK: "function",
					e: /[;{]/,
					eE: !0,
					i: "\\$|\\[|%",
					c: [e.UTM, {
						cN: "params",
						b: "\\(",
						e: "\\)",
						c: ["self", t, e.CBCM, r, i]
					}]
				}, {
					cN: "class",
					bK: "class interface",
					e: "{",
					eE: !0,
					i: /[:\(\$"]/,
					c: [{
						bK: "extends implements"
					}, e.UTM]
				}, {
					bK: "namespace",
					e: ";",
					i: /[\.']/,
					c: [e.UTM]
				}, {
					bK: "use",
					e: ";",
					c: [e.UTM]
				}, {
					b: "=>"
				}, r, i]
			}
		}), e.registerLanguage("python", function (e) {
			var t = {
					cN: "meta",
					b: /^(>>>|\.\.\.) /
				},
				n = {
					cN: "string",
					c: [e.BE],
					v: [{
						b: /(u|b)?r?'''/,
						e: /'''/,
						c: [t],
						r: 10
					}, {
						b: /(u|b)?r?"""/,
						e: /"""/,
						c: [t],
						r: 10
					}, {
						b: /(u|r|ur)'/,
						e: /'/,
						r: 10
					}, {
						b: /(u|r|ur)"/,
						e: /"/,
						r: 10
					}, {
						b: /(b|br)'/,
						e: /'/
					}, {
						b: /(b|br)"/,
						e: /"/
					}, e.ASM, e.QSM]
				},
				r = {
					cN: "number",
					r: 0,
					v: [{
						b: e.BNR + "[lLjJ]?"
					}, {
						b: "\\b(0o[0-7]+)[lLjJ]?"
					}, {
						b: e.CNR + "[lLjJ]?"
					}]
				},
				i = {
					cN: "params",
					b: /\(/,
					e: /\)/,
					c: ["self", t, r, n]
				};
			return {
				aliases: ["py", "gyp"],
				k: {
					keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
					built_in: "Ellipsis NotImplemented"
				},
				i: /(<\/|->|\?)/,
				c: [t, r, n, e.HCM, {
					v: [{
						cN: "function",
						bK: "def",
						r: 10
					}, {
						cN: "class",
						bK: "class"
					}],
					e: /:/,
					i: /[${=;\n,]/,
					c: [e.UTM, i]
				}, {
					cN: "meta",
					b: /^[\t ]*@/,
					e: /$/
				}, {
					b: /\b(print|exec)\(/
				}]
			}
		}), e.registerLanguage("ruby", function (e) {
			var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
				n = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
				r = {
					cN: "doctag",
					b: "@[A-Za-z]+"
				},
				i = {
					b: "#<",
					e: ">"
				},
				o = [e.C("#", "$", {
					c: [r]
				}), e.C("^\\=begin", "^\\=end", {
					c: [r],
					r: 10
				}), e.C("^__END__", "\\n$")],
				a = {
					cN: "subst",
					b: "#\\{",
					e: "}",
					k: n
				},
				s = {
					cN: "string",
					c: [e.BE, a],
					v: [{
						b: /'/,
						e: /'/
					}, {
						b: /"/,
						e: /"/
					}, {
						b: /`/,
						e: /`/
					}, {
						b: "%[qQwWx]?\\(",
						e: "\\)"
					}, {
						b: "%[qQwWx]?\\[",
						e: "\\]"
					}, {
						b: "%[qQwWx]?{",
						e: "}"
					}, {
						b: "%[qQwWx]?<",
						e: ">"
					}, {
						b: "%[qQwWx]?/",
						e: "/"
					}, {
						b: "%[qQwWx]?%",
						e: "%"
					}, {
						b: "%[qQwWx]?-",
						e: "-"
					}, {
						b: "%[qQwWx]?\\|",
						e: "\\|"
					}, {
						b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
					}]
				},
				c = {
					cN: "params",
					b: "\\(",
					e: "\\)",
					endsParent: !0,
					k: n
				},
				l = [s, i, {
					cN: "class",
					bK: "class module",
					e: "$|;",
					i: /=/,
					c: [e.inherit(e.TM, {
						b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
					}), {
						b: "<\\s*",
						c: [{
							b: "(" + e.IR + "::)?" + e.IR
						}]
					}].concat(o)
				}, {
					cN: "function",
					bK: "def",
					e: "$|;",
					c: [e.inherit(e.TM, {
						b: t
					}), c].concat(o)
				}, {
					cN: "symbol",
					b: e.UIR + "(\\!|\\?)?:",
					r: 0
				}, {
					cN: "symbol",
					b: ":",
					c: [s, {
						b: t
					}],
					r: 0
				}, {
					cN: "number",
					b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
					r: 0
				}, {
					b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
				}, {
					b: "(" + e.RSR + ")\\s*",
					c: [i, {
						cN: "regexp",
						c: [e.BE, a],
						i: /\n/,
						v: [{
							b: "/",
							e: "/[a-z]*"
						}, {
							b: "%r{",
							e: "}[a-z]*"
						}, {
							b: "%r\\(",
							e: "\\)[a-z]*"
						}, {
							b: "%r!",
							e: "![a-z]*"
						}, {
							b: "%r\\[",
							e: "\\][a-z]*"
						}]
					}].concat(o),
					r: 0
				}].concat(o);
			a.c = l, c.c = l;
			var u = "[>?]>",
				d = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
				f = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
				p = [{
					b: /^\s*=>/,
					starts: {
						e: "$",
						c: l
					}
				}, {
					cN: "meta",
					b: "^(" + u + "|" + d + "|" + f + ")",
					starts: {
						e: "$",
						c: l
					}
				}];
			return {
				aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
				k: n,
				i: /\/\*/,
				c: o.concat(p).concat(l)
			}
		}), e.registerLanguage("sql", function (e) {
			var t = e.C("--", "$");
			return {
				cI: !0,
				i: /[<>{}*]/,
				c: [{
					bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
					e: /;/,
					eW: !0,
					k: {
						keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes c cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle d data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration e each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract f failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function g general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http i id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists k keep keep_duplicates key keys kill l language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim m main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex n name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding p package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime t table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
						literal: "true false null",
						built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
					},
					c: [{
						cN: "string",
						b: "'",
						e: "'",
						c: [e.BE, {
							b: "''"
						}]
					}, {
						cN: "string",
						b: '"',
						e: '"',
						c: [e.BE, {
							b: '""'
						}]
					}, {
						cN: "string",
						b: "`",
						e: "`",
						c: [e.BE]
					}, e.CNM, e.CBCM, t]
				}, e.CBCM, t]
			}
		}), e
	})
}, function (e, t) {
	! function (e) {
		e.fn.unveil = function (t, n) {
			function r() {
				var t = l.filter(function () {
					var t = e(this);
					if (!t.is(":hidden")) {
						var n = o.scrollTop(),
							r = n + o.height(),
							i = t.offset().top,
							s = i + t.height();
						return s >= n - a && i <= r + a
					}
				});
				i = t.trigger("unveil"), l = l.not(i)
			}
			var i, o = e(window),
				a = t || 0,
				s = window.devicePixelRatio > 1,
				c = s ? "data-src-retina" : "data-src",
				l = this;
			return this.one("unveil", function () {
				var e = this.getAttribute(c);
				e = e || this.getAttribute("data-src"), e && (this.setAttribute("src", e), "function" == typeof n && n.call(this))
			}), o.on("scroll.unveil resize.unveil lookup.unveil", r), r(), this
		}
	}(window.jQuery || window.Zepto)
}, function (e, t) {
	e.exports = '<li class="article">\n  <a class="title" href="{{link}}">{{title}}</a>\n  <section class="preview content">{{preview}}...</section>\n</li>\n'
}]);