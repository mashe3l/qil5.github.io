/*! This is a minified bundle of js scripts. Please refer to each file at bundled/ to see its info and license - Copyright (c) mharty.com */
!function(e) {
    var t, n, i = !1;
    "function" == typeof define && define.amd && (define(e),
    i = !0),
    "object" == typeof exports && (module.exports = e(),
    i = !0),
    i || (t = window.Cookies,
    (n = window.Cookies = e()).noConflict = function() {
        return window.Cookies = t,
        n
    }
    )
}(function() {
    function f() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n, i = arguments[e];
            for (n in i)
                t[n] = i[n]
        }
        return t
    }
    return function e(h) {
        function m(e, t, n) {
            var i, o;
            if ("undefined" != typeof document) {
                if (1 < arguments.length) {
                    "number" == typeof (n = f({
                        path: "/"
                    }, m.defaults, n)).expires && ((o = new Date).setMilliseconds(o.getMilliseconds() + 864e5 * n.expires),
                    n.expires = o),
                    n.expires = n.expires ? n.expires.toUTCString() : "";
                    try {
                        i = JSON.stringify(t),
                        /^[\{\[]/.test(i) && (t = i)
                    } catch (e) {}
                    t = h.write ? h.write(t, e) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                    e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var r, a = "";
                    for (r in n)
                        n[r] && (a += "; " + r,
                        !0 !== n[r] && (a += "=" + n[r]));
                    return document.cookie = e + "=" + t + a
                }
                e || (i = {});
                for (var s = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, c = 0; c < s.length; c++) {
                    var d = s[c].split("=");
                    '"' === (p = d.slice(1).join("=")).charAt(0) && (p = p.slice(1, -1));
                    try {
                        var u = d[0].replace(l, decodeURIComponent)
                          , p = h.read ? h.read(p, u) : h(p, u) || p.replace(l, decodeURIComponent);
                        if (this.json)
                            try {
                                p = JSON.parse(p)
                            } catch (e) {}
                        if (e === u) {
                            i = p;
                            break
                        }
                        e || (i[u] = p)
                    } catch (e) {}
                }
                return i
            }
        }
        return (m.set = m).get = function(e) {
            return m.call(m, e)
        }
        ,
        m.getJSON = function() {
            return m.apply({
                json: !0
            }, [].slice.call(arguments))
        }
        ,
        m.defaults = {},
        m.remove = function(e, t) {
            m(e, "", f(t, {
                expires: -1
            }))
        }
        ,
        m.withConverter = e,
        m
    }(function() {})
}),
function(r) {
    "use strict";
    r.fn.fitVids = function(e) {
        var t, n, o = {
            customSelector: null,
            ignore: null
        };
        return document.getElementById("fit-vids-style") || (t = document.head || document.getElementsByTagName("head")[0],
        (n = document.createElement("div")).innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',
        t.appendChild(n.childNodes[1])),
        e && r.extend(o, e),
        this.each(function() {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            o.customSelector && e.push(o.customSelector);
            var i = ".fitvidsignore";
            o.ignore && (i = i + ", " + o.ignore),
            r(this).find(e.join(",")).not("object object").not(i).each(function(e) {
                var t, n = r(this);
                0 < n.parents(i).length || "embed" === this.tagName.toLowerCase() && n.parent("object").length || n.parent(".fluid-width-video-wrapper").length || (n.css("height") || n.css("width") || !isNaN(n.attr("height")) && !isNaN(n.attr("width")) || (n.attr("height", 9),
                n.attr("width", 16)),
                t = ("object" === this.tagName.toLowerCase() || n.attr("height") && !isNaN(parseInt(n.attr("height"), 10)) ? parseInt(n.attr("height"), 10) : n.height()) / (isNaN(parseInt(n.attr("width"), 10)) ? n.width() : parseInt(n.attr("width"), 10)),
                n.attr("id") || (e = "fitvid" + e,
                n.attr("id", e)),
                n.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * t + "%"),
                n.removeAttr("height").removeAttr("width"))
            })
        })
    }
}(window.jQuery || window.Zepto),
function() {
    "use strict";
    function t(e) {
        if (!e)
            throw new Error("No options passed to Waypoint constructor");
        if (!e.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!e.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + n,
        this.options = t.Adapter.extend({}, t.defaults, e),
        this.element = this.options.element,
        this.adapter = new t.Adapter(this.element),
        this.callback = e.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = t.Context.findOrCreateByElement(this.options.context),
        t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        r[this.key] = this,
        n += 1
    }
    var n = 0
      , r = {};
    t.prototype.queueTrigger = function(e) {
        this.group.queueTrigger(this, e)
    }
    ,
    t.prototype.trigger = function(e) {
        this.enabled && this.callback && this.callback.apply(this, e)
    }
    ,
    t.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete r[this.key]
    }
    ,
    t.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    t.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    t.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    t.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    t.invokeAll = function(e) {
        var t, n = [];
        for (t in r)
            n.push(r[t]);
        for (var i = 0, o = n.length; i < o; i++)
            n[i][e]()
    }
    ,
    t.destroyAll = function() {
        t.invokeAll("destroy")
    }
    ,
    t.disableAll = function() {
        t.invokeAll("disable")
    }
    ,
    t.enableAll = function() {
        t.invokeAll("enable")
    }
    ,
    t.refreshAll = function() {
        t.Context.refreshAll()
    }
    ,
    t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    t.adapters = [],
    t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = t
}(),
function() {
    "use strict";
    function t(e) {
        window.setTimeout(e, 1e3 / 60)
    }
    function n(e) {
        this.element = e,
        this.Adapter = h.Adapter,
        this.adapter = new this.Adapter(e),
        this.key = "waypoint-context-" + i,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        e.waypointContextKey = this.key,
        o[e.waypointContextKey] = this,
        i += 1,
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var i = 0
      , o = {}
      , h = window.Waypoint
      , e = window.onload;
    n.prototype.add = function(e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e,
        this.refresh()
    }
    ,
    n.prototype.checkEmpty = function() {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , t = this.Adapter.isEmptyObject(this.waypoints.vertical);
        e && t && (this.adapter.off(".waypoints"),
        delete o[this.key])
    }
    ,
    n.prototype.createThrottledResizeHandler = function() {
        function e() {
            t.handleResize(),
            t.didResize = !1
        }
        var t = this;
        this.adapter.on("resize.waypoints", function() {
            t.didResize || (t.didResize = !0,
            h.requestAnimationFrame(e))
        })
    }
    ,
    n.prototype.createThrottledScrollHandler = function() {
        function e() {
            t.handleScroll(),
            t.didScroll = !1
        }
        var t = this;
        this.adapter.on("scroll.waypoints", function() {
            t.didScroll && !h.isTouch || (t.didScroll = !0,
            h.requestAnimationFrame(e))
        })
    }
    ,
    n.prototype.handleResize = function() {
        h.Context.refreshAll()
    }
    ,
    n.prototype.handleScroll = function() {
        var e, t, n = {}, i = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (e in i) {
            var o, r = i[e], a = r.newScroll > r.oldScroll ? r.forward : r.backward;
            for (o in this.waypoints[e]) {
                var s = this.waypoints[e][o]
                  , l = r.oldScroll < s.triggerPoint
                  , c = r.newScroll >= s.triggerPoint;
                (l && c || !l && !c) && (s.queueTrigger(a),
                n[s.group.id] = s.group)
            }
        }
        for (t in n)
            n[t].flushTriggers();
        this.oldScroll = {
            x: i.horizontal.newScroll,
            y: i.vertical.newScroll
        }
    }
    ,
    n.prototype.innerHeight = function() {
        return this.element == this.element.window ? h.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    n.prototype.remove = function(e) {
        delete this.waypoints[e.axis][e.key],
        this.checkEmpty()
    }
    ,
    n.prototype.innerWidth = function() {
        return this.element == this.element.window ? h.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    n.prototype.destroy = function() {
        var e, t = [];
        for (e in this.waypoints)
            for (var n in this.waypoints[e])
                t.push(this.waypoints[e][n]);
        for (var i = 0, o = t.length; i < o; i++)
            t[i].destroy()
    }
    ,
    n.prototype.refresh = function() {
        var e, t, n = this.element == this.element.window, i = n ? void 0 : this.adapter.offset(), o = {};
        for (t in this.handleScroll(),
        e = {
            horizontal: {
                contextOffset: n ? 0 : i.left,
                contextScroll: n ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: n ? 0 : i.top,
                contextScroll: n ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        }) {
            var r, a = e[t];
            for (r in this.waypoints[t]) {
                var s, l = this.waypoints[t][r], c = l.options.offset, d = l.triggerPoint, u = 0, p = null == d;
                l.element !== l.element.window && (u = l.adapter.offset()[a.offsetProp]),
                "function" == typeof c ? c = c.apply(l) : "string" == typeof c && (c = parseFloat(c),
                -1 < l.options.offset.indexOf("%") && (c = Math.ceil(a.contextDimension * c / 100))),
                s = a.contextScroll - a.contextOffset,
                l.triggerPoint = u + s - c,
                s = d < a.oldScroll,
                c = l.triggerPoint >= a.oldScroll,
                d = !s && !c,
                !p && (s && c) ? (l.queueTrigger(a.backward),
                o[l.group.id] = l.group) : (!p && d || p && a.oldScroll >= l.triggerPoint) && (l.queueTrigger(a.forward),
                o[l.group.id] = l.group)
            }
        }
        return h.requestAnimationFrame(function() {
            for (var e in o)
                o[e].flushTriggers()
        }),
        this
    }
    ,
    n.findOrCreateByElement = function(e) {
        return n.findByElement(e) || new n(e)
    }
    ,
    n.refreshAll = function() {
        for (var e in o)
            o[e].refresh()
    }
    ,
    n.findByElement = function(e) {
        return o[e.waypointContextKey]
    }
    ,
    window.onload = function() {
        e && e(),
        n.refreshAll()
    }
    ,
    h.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }
    ,
    h.Context = n
}(),
function() {
    "use strict";
    function a(e, t) {
        return e.triggerPoint - t.triggerPoint
    }
    function s(e, t) {
        return t.triggerPoint - e.triggerPoint
    }
    function t(e) {
        this.name = e.name,
        this.axis = e.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        n[this.axis][this.name] = this
    }
    var n = {
        vertical: {},
        horizontal: {}
    }
      , i = window.Waypoint;
    t.prototype.add = function(e) {
        this.waypoints.push(e)
    }
    ,
    t.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    t.prototype.flushTriggers = function() {
        for (var e in this.triggerQueues) {
            var t = this.triggerQueues[e]
              , n = "up" === e || "left" === e;
            t.sort(n ? s : a);
            for (var i = 0, o = t.length; i < o; i += 1) {
                var r = t[i];
                !r.options.continuous && i !== t.length - 1 || r.trigger([e])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    t.prototype.next = function(e) {
        this.waypoints.sort(a);
        e = i.Adapter.inArray(e, this.waypoints);
        return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1]
    }
    ,
    t.prototype.previous = function(e) {
        this.waypoints.sort(a);
        e = i.Adapter.inArray(e, this.waypoints);
        return e ? this.waypoints[e - 1] : null
    }
    ,
    t.prototype.queueTrigger = function(e, t) {
        this.triggerQueues[t].push(e)
    }
    ,
    t.prototype.remove = function(e) {
        e = i.Adapter.inArray(e, this.waypoints);
        -1 < e && this.waypoints.splice(e, 1)
    }
    ,
    t.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    t.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    t.findOrCreate = function(e) {
        return n[e.axis][e.name] || new t(e)
    }
    ,
    i.Group = t
}(),
function() {
    "use strict";
    function n(e) {
        this.$element = i(e)
    }
    var i = window.jQuery
      , e = window.Waypoint;
    i.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, t) {
        n.prototype[t] = function() {
            var e = Array.prototype.slice.call(arguments);
            return this.$element[t].apply(this.$element, e)
        }
    }),
    i.each(["extend", "inArray", "isEmptyObject"], function(e, t) {
        n[t] = i[t]
    }),
    e.adapters.push({
        name: "jquery",
        Adapter: n
    }),
    e.Adapter = n
}(),
function() {
    "use strict";
    function e(i) {
        return function() {
            var t = []
              , n = arguments[0];
            return i.isFunction(arguments[0]) && ((n = i.extend({}, arguments[1])).handler = arguments[0]),
            this.each(function() {
                var e = i.extend({}, n, {
                    element: this
                });
                "string" == typeof e.context && (e.context = i(this).closest(e.context)[0]),
                t.push(new o(e))
            }),
            t
        }
    }
    var o = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)),
    window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
}(),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(c) {
    function e() {}
    function d(e, t) {
        m.ev.on("mfp" + e + b, t)
    }
    function u(e, t, n, i) {
        var o = document.createElement("div");
        return o.className = "mfp-" + e,
        n && (o.innerHTML = n),
        i ? t && t.appendChild(o) : (o = c(o),
        t && o.appendTo(t)),
        o
    }
    function p(e, t) {
        m.ev.triggerHandler("mfp" + e, t),
        m.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1),
        m.st.callbacks[e] && m.st.callbacks[e].apply(m, c.isArray(t) ? t : [t]))
    }
    function h(e) {
        return e === t && m.currTemplate.closeBtn || (m.currTemplate.closeBtn = c(m.st.closeMarkup.replace("%title%", m.st.tClose)),
        t = e),
        m.currTemplate.closeBtn
    }
    function r() {
        c.magnificPopup.instance || ((m = new e).init(),
        c.magnificPopup.instance = m)
    }
    var m, i, f, o, g, t, l = "Close", v = "BeforeClose", w = "MarkupParse", y = "Open", b = ".mfp", C = "mfp-ready", n = "mfp-removing", a = "mfp-prevent-close", s = !!window.jQuery, _ = c(window);
    e.prototype = {
        constructor: e,
        init: function() {
            var e = navigator.appVersion;
            m.isLowIE = m.isIE8 = document.all && !document.addEventListener,
            m.isAndroid = /android/gi.test(e),
            m.isIOS = /iphone|ipad|ipod/gi.test(e),
            m.supportsTransition = function() {
                var e = document.createElement("p").style
                  , t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition)
                    return !0;
                for (; t.length; )
                    if (t.pop() + "Transition"in e)
                        return !0;
                return !1
            }(),
            m.probablyMobile = m.isAndroid || m.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            f = c(document),
            m.popupsCache = {}
        },
        open: function(e) {
            if (!1 === e.isObj) {
                m.items = e.items.toArray(),
                m.index = 0;
                for (var t, n = e.items, i = 0; i < n.length; i++)
                    if ((t = (t = n[i]).parsed ? t.el[0] : t) === e.el[0]) {
                        m.index = i;
                        break
                    }
            } else
                m.items = c.isArray(e.items) ? e.items : [e.items],
                m.index = e.index || 0;
            if (!m.isOpen) {
                m.types = [],
                g = "",
                e.mainEl && e.mainEl.length ? m.ev = e.mainEl.eq(0) : m.ev = f,
                e.key ? (m.popupsCache[e.key] || (m.popupsCache[e.key] = {}),
                m.currTemplate = m.popupsCache[e.key]) : m.currTemplate = {},
                m.st = c.extend(!0, {}, c.magnificPopup.defaults, e),
                m.fixedContentPos = "auto" === m.st.fixedContentPos ? !m.probablyMobile : m.st.fixedContentPos,
                m.st.modal && (m.st.closeOnContentClick = !1,
                m.st.closeOnBgClick = !1,
                m.st.showCloseBtn = !1,
                m.st.enableEscapeKey = !1),
                m.bgOverlay || (m.bgOverlay = u("bg").on("click" + b, function() {
                    m.close()
                }),
                m.wrap = u("wrap").attr("tabindex", -1).on("click" + b, function(e) {
                    m._checkIfClose(e.target) && m.close()
                }),
                m.container = u("container", m.wrap)),
                m.contentContainer = u("content"),
                m.st.preloader && (m.preloader = u("preloader", m.container, m.st.tLoading));
                var o = c.magnificPopup.modules;
                for (i = 0; i < o.length; i++) {
                    var r = (r = o[i]).charAt(0).toUpperCase() + r.slice(1);
                    m["init" + r].call(m)
                }
                p("BeforeOpen"),
                m.st.showCloseBtn && (m.st.closeBtnInside ? (d(w, function(e, t, n, i) {
                    n.close_replaceWith = h(i.type)
                }),
                g += " mfp-close-btn-in") : m.wrap.append(h())),
                m.st.alignTop && (g += " mfp-align-top"),
                m.fixedContentPos ? m.wrap.css({
                    overflow: m.st.overflowY,
                    overflowX: "hidden",
                    overflowY: m.st.overflowY
                }) : m.wrap.css({
                    top: _.scrollTop(),
                    position: "absolute"
                }),
                !1 !== m.st.fixedBgPos && ("auto" !== m.st.fixedBgPos || m.fixedContentPos) || m.bgOverlay.css({
                    height: f.height(),
                    position: "absolute"
                }),
                m.st.enableEscapeKey && f.on("keyup" + b, function(e) {
                    27 === e.keyCode && m.close()
                }),
                _.on("resize" + b, function() {
                    m.updateSize()
                }),
                m.st.closeOnContentClick || (g += " mfp-auto-cursor"),
                g && m.wrap.addClass(g);
                var a = m.wH = _.height()
                  , s = {};
                m.fixedContentPos && m._hasScrollBar(a) && ((l = m._getScrollbarSize()) && (s.marginRight = l)),
                m.fixedContentPos && (m.isIE7 ? c("body, html").css("overflow", "hidden") : s.overflow = "hidden");
                var l = m.st.mainClass;
                return m.isIE7 && (l += " mfp-ie7"),
                l && m._addClassToMFP(l),
                m.updateItemHTML(),
                p("BuildControls"),
                c("html").css(s),
                m.bgOverlay.add(m.wrap).prependTo(m.st.prependTo || c(document.body)),
                m._lastFocusedEl = document.activeElement,
                setTimeout(function() {
                    m.content ? (m._addClassToMFP(C),
                    m._setFocus()) : m.bgOverlay.addClass(C),
                    f.on("focusin" + b, m._onFocusIn)
                }, 16),
                m.isOpen = !0,
                m.updateSize(a),
                p(y),
                e
            }
            m.updateItemHTML()
        },
        close: function() {
            m.isOpen && (p(v),
            m.isOpen = !1,
            m.st.removalDelay && !m.isLowIE && m.supportsTransition ? (m._addClassToMFP(n),
            setTimeout(function() {
                m._close()
            }, m.st.removalDelay)) : m._close())
        },
        _close: function() {
            p(l);
            var e = n + " " + C + " ";
            m.bgOverlay.detach(),
            m.wrap.detach(),
            m.container.empty(),
            m.st.mainClass && (e += m.st.mainClass + " "),
            m._removeClassFromMFP(e),
            m.fixedContentPos && (e = {
                marginRight: ""
            },
            m.isIE7 ? c("body, html").css("overflow", "") : e.overflow = "",
            c("html").css(e)),
            f.off("keyup.mfp focusin" + b),
            m.ev.off(b),
            m.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            m.bgOverlay.attr("class", "mfp-bg"),
            m.container.attr("class", "mfp-container"),
            !m.st.showCloseBtn || m.st.closeBtnInside && !0 !== m.currTemplate[m.currItem.type] || m.currTemplate.closeBtn && m.currTemplate.closeBtn.detach(),
            m.st.autoFocusLast && m._lastFocusedEl && c(m._lastFocusedEl).focus(),
            m.currItem = null,
            m.content = null,
            m.currTemplate = null,
            m.prevHeight = 0,
            p("AfterClose")
        },
        updateSize: function(e) {
            var t;
            m.isIOS ? (t = document.documentElement.clientWidth / window.innerWidth,
            t = window.innerHeight * t,
            m.wrap.css("height", t),
            m.wH = t) : m.wH = e || _.height(),
            m.fixedContentPos || m.wrap.css("height", m.wH),
            p("Resize")
        },
        updateItemHTML: function() {
            var e = m.items[m.index];
            m.contentContainer.detach(),
            m.content && m.content.detach();
            var t = (e = !e.parsed ? m.parseEl(m.index) : e).type;
            p("BeforeChange", [m.currItem ? m.currItem.type : "", t]),
            m.currItem = e,
            m.currTemplate[t] || (n = !!m.st[t] && m.st[t].markup,
            p("FirstMarkupParse", n),
            m.currTemplate[t] = !n || c(n)),
            o && o !== e.type && m.container.removeClass("mfp-" + o + "-holder");
            var n = m["get" + t.charAt(0).toUpperCase() + t.slice(1)](e, m.currTemplate[t]);
            m.appendContent(n, t),
            e.preloaded = !0,
            p("Change", e),
            o = e.type,
            m.container.prepend(m.contentContainer),
            p("AfterChange")
        },
        appendContent: function(e, t) {
            (m.content = e) ? m.st.showCloseBtn && m.st.closeBtnInside && !0 === m.currTemplate[t] ? m.content.find(".mfp-close").length || m.content.append(h()) : m.content = e : m.content = "",
            p("BeforeAppend"),
            m.container.addClass("mfp-" + t + "-holder"),
            m.contentContainer.append(m.content)
        },
        parseEl: function(e) {
            var t, n = m.items[e];
            if ((n = n.tagName ? {
                el: c(n)
            } : (t = n.type,
            {
                data: n,
                src: n.src
            })).el) {
                for (var i = m.types, o = 0; o < i.length; o++)
                    if (n.el.hasClass("mfp-" + i[o])) {
                        t = i[o];
                        break
                    }
                n.src = n.el.attr("data-mfp-src"),
                n.src || (n.src = n.el.attr("href"))
            }
            return n.type = t || m.st.type || "inline",
            n.index = e,
            n.parsed = !0,
            m.items[e] = n,
            p("ElementParse", n),
            m.items[e]
        },
        addGroup: function(t, n) {
            function e(e) {
                e.mfpEl = this,
                m._openClick(e, t, n)
            }
            var i = "click.magnificPopup";
            (n = n || {}).mainEl = t,
            n.items ? (n.isObj = !0,
            t.off(i).on(i, e)) : (n.isObj = !1,
            n.delegate ? t.off(i).on(i, n.delegate, e) : (n.items = t).off(i).on(i, e))
        },
        _openClick: function(e, t, n) {
            if ((void 0 !== n.midClick ? n : c.magnificPopup.defaults).midClick || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                var i = (void 0 !== n.disableOn ? n : c.magnificPopup.defaults).disableOn;
                if (i)
                    if (c.isFunction(i)) {
                        if (!i.call(m))
                            return !0
                    } else if (_.width() < i)
                        return !0;
                e.type && (e.preventDefault(),
                m.isOpen && e.stopPropagation()),
                n.el = c(e.mfpEl),
                n.delegate && (n.items = t.find(n.delegate)),
                m.open(n)
            }
        },
        updateStatus: function(e, t) {
            var n;
            m.preloader && (i !== e && m.container.removeClass("mfp-s-" + i),
            n = {
                status: e,
                text: t = !t && "loading" === e ? m.st.tLoading : t
            },
            p("UpdateStatus", n),
            e = n.status,
            t = n.text,
            m.preloader.html(t),
            m.preloader.find("a").on("click", function(e) {
                e.stopImmediatePropagation()
            }),
            m.container.addClass("mfp-s-" + e),
            i = e)
        },
        _checkIfClose: function(e) {
            if (!c(e).hasClass(a)) {
                var t = m.st.closeOnContentClick
                  , n = m.st.closeOnBgClick;
                if (t && n)
                    return !0;
                if (!m.content || c(e).hasClass("mfp-close") || m.preloader && e === m.preloader[0])
                    return !0;
                if (e === m.content[0] || c.contains(m.content[0], e)) {
                    if (t)
                        return !0
                } else if (n && c.contains(document, e))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            m.bgOverlay.addClass(e),
            m.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e),
            m.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (m.isIE7 ? f.height() : document.body.scrollHeight) > (e || _.height())
        },
        _setFocus: function() {
            (m.st.focus ? m.content.find(m.st.focus).eq(0) : m.wrap).focus()
        },
        _onFocusIn: function(e) {
            return e.target === m.wrap[0] || c.contains(m.wrap[0], e.target) ? void 0 : (m._setFocus(),
            !1)
        },
        _parseMarkup: function(o, e, t) {
            var r;
            t.data && (e = c.extend(t.data, e)),
            p(w, [o, e, t]),
            c.each(e, function(e, t) {
                return void 0 === t || !1 === t || void (1 < (r = e.split("_")).length ? 0 < (n = o.find(b + "-" + r[0])).length && ("replaceWith" === (i = r[1]) ? n[0] !== t[0] && n.replaceWith(t) : "img" === i ? n.is("img") ? n.attr("src", t) : n.replaceWith(c("<img>").attr("src", t).attr("class", n.attr("class"))) : n.attr(r[1], t)) : o.find(b + "-" + e).html(t));
                var n, i
            })
        },
        _getScrollbarSize: function() {
            var e;
            return void 0 === m.scrollbarSize && ((e = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
            document.body.appendChild(e),
            m.scrollbarSize = e.offsetWidth - e.clientWidth,
            document.body.removeChild(e)),
            m.scrollbarSize
        }
    },
    c.magnificPopup = {
        instance: null,
        proto: e.prototype,
        modules: [],
        open: function(e, t) {
            return r(),
            (e = e ? c.extend(!0, {}, e) : {}).isObj = !0,
            e.index = t || 0,
            this.instance.open(e)
        },
        close: function() {
            return c.magnificPopup.instance && c.magnificPopup.instance.close()
        },
        registerModule: function(e, t) {
            t.options && (c.magnificPopup.defaults[e] = t.options),
            c.extend(this.proto, t.proto),
            this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    c.fn.magnificPopup = function(e) {
        r();
        var t, n, i, o = c(this);
        return "string" == typeof e ? "open" === e ? (t = s ? o.data("magnificPopup") : o[0].magnificPopup,
        n = parseInt(arguments[1], 10) || 0,
        i = t.items ? t.items[n] : (i = o,
        (i = t.delegate ? i.find(t.delegate) : i).eq(n)),
        m._openClick({
            mfpEl: i
        }, o, t)) : m.isOpen && m[e].apply(m, Array.prototype.slice.call(arguments, 1)) : (e = c.extend(!0, {}, e),
        s ? o.data("magnificPopup", e) : o[0].magnificPopup = e,
        m.addGroup(o, e)),
        o
    }
    ;
    function x() {
        I && (T.after(I.addClass(k)).detach(),
        I = null)
    }
    var k, T, I, S = "inline";
    c.magnificPopup.registerModule(S, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                m.types.push(S),
                d(l + "." + S, function() {
                    x()
                })
            },
            getInline: function(e, t) {
                if (x(),
                e.src) {
                    var n, i = m.st.inline, o = c(e.src);
                    return o.length ? ((n = o[0].parentNode) && n.tagName && (T || (k = i.hiddenClass,
                    T = u(k),
                    k = "mfp-" + k),
                    I = o.after(T).detach().removeClass(k)),
                    m.updateStatus("ready")) : (m.updateStatus("error", i.tNotFound),
                    o = c("<div>")),
                    e.inlineElement = o
                }
                return m.updateStatus("ready"),
                m._parseMarkup(t, {}, e),
                t
            }
        }
    });
    function P() {
        z && c(document.body).removeClass(z)
    }
    function E() {
        P(),
        m.req && m.req.abort()
    }
    var z, j = "ajax";
    c.magnificPopup.registerModule(j, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                m.types.push(j),
                z = m.st.ajax.cursor,
                d(l + "." + j, E),
                d("BeforeChange." + j, E)
            },
            getAjax: function(i) {
                z && c(document.body).addClass(z),
                m.updateStatus("loading");
                var e = c.extend({
                    url: i.src,
                    success: function(e, t, n) {
                        n = {
                            data: e,
                            xhr: n
                        };
                        p("ParseAjax", n),
                        m.appendContent(c(n.data), j),
                        i.finished = !0,
                        P(),
                        m._setFocus(),
                        setTimeout(function() {
                            m.wrap.addClass(C)
                        }, 16),
                        m.updateStatus("ready"),
                        p("AjaxContentAdded")
                    },
                    error: function() {
                        P(),
                        i.finished = i.loadError = !0,
                        m.updateStatus("error", m.st.ajax.tError.replace("%url%", i.src))
                    }
                }, m.st.ajax.settings);
                return m.req = c.ajax(e),
                ""
            }
        }
    });
    var A;
    c.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = m.st.image
                  , t = ".image";
                m.types.push("image"),
                d(y + t, function() {
                    "image" === m.currItem.type && e.cursor && c(document.body).addClass(e.cursor)
                }),
                d(l + t, function() {
                    e.cursor && c(document.body).removeClass(e.cursor),
                    _.off("resize" + b)
                }),
                d("Resize" + t, m.resizeImage),
                m.isLowIE && d("AfterChange", m.resizeImage)
            },
            resizeImage: function() {
                var e, t = m.currItem;
                t && t.img && m.st.image.verticalFit && (e = 0,
                m.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)),
                t.img.css("max-height", m.wH - e))
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0,
                A && clearInterval(A),
                e.isCheckingImgSize = !1,
                p("ImageHasSize", e),
                e.imgHidden && (m.content && m.content.removeClass("mfp-loading"),
                e.imgHidden = !1))
            },
            findImageSize: function(t) {
                var n = 0
                  , i = t.img[0]
                  , o = function(e) {
                    A && clearInterval(A),
                    A = setInterval(function() {
                        return 0 < i.naturalWidth ? void m._onImageHasSize(t) : (200 < n && clearInterval(A),
                        void (3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
                    }, e)
                };
                o(1)
            },
            getImage: function(e, t) {
                var n, i = 0, o = function() {
                    e && (e.img[0].complete ? (e.img.off(".mfploader"),
                    e === m.currItem && (m._onImageHasSize(e),
                    m.updateStatus("ready")),
                    e.hasSize = !0,
                    e.loaded = !0,
                    p("ImageLoadComplete")) : ++i < 200 ? setTimeout(o, 100) : r())
                }, r = function() {
                    e && (e.img.off(".mfploader"),
                    e === m.currItem && (m._onImageHasSize(e),
                    m.updateStatus("error", a.tError.replace("%url%", e.src))),
                    e.hasSize = !0,
                    e.loaded = !0,
                    e.loadError = !0)
                }, a = m.st.image, s = t.find(".mfp-img");
                return s.length && ((n = document.createElement("img")).className = "mfp-img",
                e.el && e.el.find("img").length && (n.alt = e.el.find("img").attr("alt")),
                e.img = c(n).on("load.mfploader", o).on("error.mfploader", r),
                n.src = e.src,
                s.is("img") && (e.img = e.img.clone()),
                0 < (n = e.img[0]).naturalWidth ? e.hasSize = !0 : n.width || (e.hasSize = !1)),
                m._parseMarkup(t, {
                    title: function(e) {
                        if (e.data && void 0 !== e.data.title)
                            return e.data.title;
                        var t = m.st.image.titleSrc;
                        if (t) {
                            if (c.isFunction(t))
                                return t.call(m, e);
                            if (e.el)
                                return e.el.attr(t) || ""
                        }
                        return ""
                    }(e),
                    img_replaceWith: e.img
                }, e),
                m.resizeImage(),
                e.hasSize ? (A && clearInterval(A),
                e.loadError ? (t.addClass("mfp-loading"),
                m.updateStatus("error", a.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"),
                m.updateStatus("ready"))) : (m.updateStatus("loading"),
                e.loading = !0,
                e.hasSize || (e.imgHidden = !0,
                t.addClass("mfp-loading"),
                m.findImageSize(e))),
                t
            }
        }
    });
    var O;
    c.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, t, n, i, o, r, a = m.st.zoom, s = ".zoom";
                a.enabled && m.supportsTransition && (i = a.duration,
                o = function(e) {
                    var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                      , n = "all " + a.duration / 1e3 + "s " + a.easing
                      , i = {
                        position: "fixed",
                        zIndex: 9999,
                        left: 0,
                        top: 0,
                        "-webkit-backface-visibility": "hidden"
                    }
                      , e = "transition";
                    return i["-webkit-" + e] = i["-moz-" + e] = i["-o-" + e] = i[e] = n,
                    t.css(i),
                    t
                }
                ,
                r = function() {
                    m.content.css("visibility", "visible")
                }
                ,
                d("BuildControls" + s, function() {
                    m._allowZoom() && (clearTimeout(t),
                    m.content.css("visibility", "hidden"),
                    (e = m._getItemToZoom()) ? ((n = o(e)).css(m._getOffset()),
                    m.wrap.append(n),
                    t = setTimeout(function() {
                        n.css(m._getOffset(!0)),
                        t = setTimeout(function() {
                            r(),
                            setTimeout(function() {
                                n.remove(),
                                e = n = null,
                                p("ZoomAnimationEnded")
                            }, 16)
                        }, i)
                    }, 16)) : r())
                }),
                d(v + s, function() {
                    if (m._allowZoom()) {
                        if (clearTimeout(t),
                        m.st.removalDelay = i,
                        !e) {
                            if (!(e = m._getItemToZoom()))
                                return;
                            n = o(e)
                        }
                        n.css(m._getOffset(!0)),
                        m.wrap.append(n),
                        m.content.css("visibility", "hidden"),
                        setTimeout(function() {
                            n.css(m._getOffset())
                        }, 16)
                    }
                }),
                d(l + s, function() {
                    m._allowZoom() && (r(),
                    n && n.remove(),
                    e = null)
                }))
            },
            _allowZoom: function() {
                return "image" === m.currItem.type
            },
            _getItemToZoom: function() {
                return !!m.currItem.hasSize && m.currItem.img
            },
            _getOffset: function(e) {
                var t = e ? m.currItem.img : m.st.zoom.opener(m.currItem.el || m.currItem)
                  , n = t.offset()
                  , i = parseInt(t.css("padding-top"), 10)
                  , e = parseInt(t.css("padding-bottom"), 10);
                n.top -= c(window).scrollTop() - i;
                i = {
                    width: t.width(),
                    height: (s ? t.innerHeight() : t[0].offsetHeight) - e - i
                };
                return (O = void 0 === O ? void 0 !== document.createElement("p").style.MozTransform : O) ? i["-moz-transform"] = i.transform = "translate(" + n.left + "px," + n.top + "px)" : (i.left = n.left,
                i.top = n.top),
                i
            }
        }
    });
    function H(e) {
        var t;
        !m.currTemplate[M] || (t = m.currTemplate[M].find("iframe")).length && (e || (t[0].src = "//about:blank"),
        m.isIE8 && t.css("display", e ? "block" : "none"))
    }
    var M = "iframe";
    c.magnificPopup.registerModule(M, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                m.types.push(M),
                d("BeforeChange", function(e, t, n) {
                    t !== n && (t === M ? H() : n === M && H(!0))
                }),
                d(l + "." + M, function() {
                    H()
                })
            },
            getIframe: function(e, t) {
                var n = e.src
                  , i = m.st.iframe;
                c.each(i.patterns, function() {
                    return -1 < n.indexOf(this.index) ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)),
                    n = this.src.replace("%id%", n),
                    !1) : void 0
                });
                var o = {};
                return i.srcAction && (o[i.srcAction] = n),
                m._parseMarkup(t, o, e),
                m.updateStatus("ready"),
                t
            }
        }
    });
    function B(e) {
        var t = m.items.length;
        return t - 1 < e ? e - t : e < 0 ? t + e : e
    }
    function D(e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
    }
    c.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var r = m.st.gallery
                  , e = ".mfp-gallery";
                return m.direction = !0,
                !(!r || !r.enabled) && (g += " mfp-gallery",
                d(y + e, function() {
                    r.navigateByImgClick && m.wrap.on("click" + e, ".mfp-img", function() {
                        return 1 < m.items.length ? (m.next(),
                        !1) : void 0
                    }),
                    f.on("keydown" + e, function(e) {
                        37 === e.keyCode ? m.prev() : 39 === e.keyCode && m.next()
                    })
                }),
                d("UpdateStatus" + e, function(e, t) {
                    t.text && (t.text = D(t.text, m.currItem.index, m.items.length))
                }),
                d(w + e, function(e, t, n, i) {
                    var o = m.items.length;
                    n.counter = 1 < o ? D(r.tCounter, i.index, o) : ""
                }),
                d("BuildControls" + e, function() {
                    var e, t;
                    1 < m.items.length && r.arrows && !m.arrowLeft && (t = r.arrowMarkup,
                    e = m.arrowLeft = c(t.replace(/%title%/gi, r.tPrev).replace(/%dir%/gi, "left")).addClass(a),
                    t = m.arrowRight = c(t.replace(/%title%/gi, r.tNext).replace(/%dir%/gi, "right")).addClass(a),
                    e.click(function() {
                        m.prev()
                    }),
                    t.click(function() {
                        m.next()
                    }),
                    m.container.append(e.add(t)))
                }),
                d("Change" + e, function() {
                    m._preloadTimeout && clearTimeout(m._preloadTimeout),
                    m._preloadTimeout = setTimeout(function() {
                        m.preloadNearbyImages(),
                        m._preloadTimeout = null
                    }, 16)
                }),
                void d(l + e, function() {
                    f.off(e),
                    m.wrap.off("click" + e),
                    m.arrowRight = m.arrowLeft = null
                }))
            },
            next: function() {
                m.direction = !0,
                m.index = B(m.index + 1),
                m.updateItemHTML()
            },
            prev: function() {
                m.direction = !1,
                m.index = B(m.index - 1),
                m.updateItemHTML()
            },
            goTo: function(e) {
                m.direction = e >= m.index,
                m.index = e,
                m.updateItemHTML()
            },
            preloadNearbyImages: function() {
                for (var e = m.st.gallery.preload, t = Math.min(e[0], m.items.length), n = Math.min(e[1], m.items.length), i = 1; i <= (m.direction ? n : t); i++)
                    m._preloadItem(m.index + i);
                for (i = 1; i <= (m.direction ? t : n); i++)
                    m._preloadItem(m.index - i)
            },
            _preloadItem: function(e) {
                var t;
                e = B(e),
                m.items[e].preloaded || ((t = m.items[e]).parsed || (t = m.parseEl(e)),
                p("LazyLoad", t),
                "image" === t.type && (t.img = c('<img class="mfp-img" />').on("load.mfploader", function() {
                    t.hasSize = !0
                }).on("error.mfploader", function() {
                    t.hasSize = !0,
                    t.loadError = !0,
                    p("LazyLoadError", t)
                }).attr("src", t.src)),
                t.preloaded = !0)
            }
        }
    });
    var L = "retina";
    c.magnificPopup.registerModule(L, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                var n, i;
                1 < window.devicePixelRatio && (n = m.st.retina,
                i = n.ratio,
                1 < (i = isNaN(i) ? i() : i) && (d("ImageHasSize." + L, function(e, t) {
                    t.img.css({
                        "max-width": t.img[0].naturalWidth / i,
                        width: "100%"
                    })
                }),
                d("ElementParse." + L, function(e, t) {
                    t.src = n.replaceSrc(t, i)
                })))
            }
        }
    }),
    r()
}),
function(t, n) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return n(t, e)
    }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = n(t, require("jquery")) : t.lity = n(t, t.jQuery || t.Zepto)
}("undefined" != typeof window ? window : this, function(e, f) {
    "use strict";
    function g(e) {
        var t = x();
        return c && e.length ? (e.one(c, t.resolve),
        setTimeout(t.resolve, 500)) : t.resolve(),
        t.promise()
    }
    function v(e, t, n) {
        if (1 === arguments.length)
            return f.extend({}, e);
        if ("string" == typeof t) {
            if (void 0 === n)
                return void 0 === e[t] ? null : e[t];
            e[t] = n
        } else
            f.extend(e, t);
        return this
    }
    function a(e) {
        var t = e.indexOf("?");
        -1 < t && (e = e.substr(t + 1));
        for (var n, i = decodeURI(e.split("#")[0]).split("&"), o = {}, r = 0, a = i.length; r < a; r++)
            i[r] && (o[(n = i[r].split("="))[0]] = n[1]);
        return o
    }
    function n(e, t, n, i) {
        return t && t.element().addClass("lity-iframe"),
        n && (o = e,
        e = (r = n) ? ("string" === f.type(r) && (r = a(r)),
        -1 < o.indexOf("?") && (o = (n = o.split("?")).shift(),
        r = f.extend({}, a(n[0]), r)),
        o + "?" + f.param(r)) : o),
        i && (r = e,
        e = -1 === (i = (o = i).indexOf("#")) ? r : r + (o = 0 < i ? o.substr(i) : o)),
        '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="' + e + '"/></div>';
        var o, r
    }
    function t(e, t) {
        function n() {
            o.reject(f('<span class="lity-error"/>').append("Failed loading image"))
        }
        var t = t.opener() && t.opener().data("lity-desc") || "Image with no description"
          , i = f('<img src="' + e + '" alt="' + t + '"/>')
          , o = x();
        return i.on("load", function() {
            return 0 === this.naturalWidth ? n() : void o.resolve(i)
        }).on("error", n),
        o.promise()
    }
    function w() {
        return C.documentElement.clientHeight || Math.round(_.height())
    }
    function y(e) {
        var t, n = i();
        n && (27 === e.keyCode && n.options("esc") && n.close(),
        9 === e.keyCode && (t = e,
        e = (n = (e = n).element().find(s)).index(C.activeElement),
        t.shiftKey && e <= 0 ? (n.get(n.length - 1).focus(),
        t.preventDefault()) : t.shiftKey || e !== n.length - 1 || (n.get(0).focus(),
        t.preventDefault())))
    }
    function b() {
        f.each(T, function(e, t) {
            t.resize()
        })
    }
    function i() {
        return 0 === T.length ? null : T[0]
    }
    function o(e, t, n, i) {
        var o, r, a, s, l, c, d, u, p = this, h = !1, m = !1;
        t = f.extend({}, P, t),
        o = f(t.template),
        p.element = function() {
            return o
        }
        ,
        p.opener = function() {
            return n
        }
        ,
        p.content = function() {
            return r
        }
        ,
        p.options = f.proxy(v, p, t),
        p.handlers = f.proxy(v, p, t.handlers),
        p.resize = function() {
            h && !m && r.css("max-height", w() + "px").trigger("lity:resize", [p])
        }
        ,
        p.close = function() {
            if (h && !m) {
                m = !0,
                (t = p).element().attr(I, "true"),
                1 === T.length && (k.removeClass("lity-active"),
                _.off({
                    resize: b,
                    keydown: y
                })),
                ((T = f.grep(T, function(e) {
                    return t !== e
                })).length ? T[0].element() : f(".lity-hidden")).removeClass("lity-hidden").each(function() {
                    var e = f(this)
                      , t = e.data(S);
                    t ? e.attr(I, t) : e.removeAttr(I),
                    e.removeData(S)
                });
                var e = x();
                if (i && (C.activeElement === o[0] || f.contains(o[0], C.activeElement)))
                    try {
                        i.focus()
                    } catch (e) {}
                return r.trigger("lity:close", [p]),
                o.removeClass("lity-opened").addClass("lity-closed"),
                g(r.add(o)).always(function() {
                    r.trigger("lity:remove", [p]),
                    o.remove(),
                    o = void 0,
                    e.resolve()
                }),
                e.promise()
            }
            var t
        }
        ,
        a = e,
        s = p,
        l = t.handlers,
        e = t.handler,
        d = "inline",
        u = f.extend({}, l),
        e && u[e] ? (c = u[e](a, s),
        d = e) : (f.each(["inline", "iframe"], function(e, t) {
            delete u[t],
            u[t] = l[t]
        }),
        f.each(u, function(e, t) {
            return !t || !(!t.test || t.test(a, s)) || (!1 !== (c = t(a, s)) ? (d = e,
            !1) : void 0)
        })),
        t = {
            handler: d,
            content: c || ""
        },
        o.attr(I, "false").addClass("lity-loading lity-opened lity-" + t.handler).appendTo("body").focus().on("click", "[data-lity-close]", function(e) {
            f(e.target).is("[data-lity-close]") && p.close()
        }).trigger("lity:open", [p]),
        e = p,
        1 === T.unshift(e) && (k.addClass("lity-active"),
        _.on({
            resize: b,
            keydown: y
        })),
        f("body > *").not(e.element()).addClass("lity-hidden").each(function() {
            var e = f(this);
            void 0 === e.data(S) && e.data(S, e.attr(I) || null)
        }).attr(I, "true"),
        f.when(t.content).always(function(e) {
            r = f(e).css("max-height", w() + "px"),
            o.find(".lity-loader").each(function() {
                var e = f(this);
                g(e).always(function() {
                    e.remove()
                })
            }),
            o.removeClass("lity-loading").find(".lity-content").empty().append(r),
            h = !0,
            r.trigger("lity:ready", [p])
        })
    }
    function r(e, t, n) {
        e.preventDefault ? (e.preventDefault(),
        e = (n = f(this)).data("lity-target") || n.attr("href") || n.attr("src")) : n = f(n);
        n = new o(e,f.extend({}, n.data("lity-options") || n.data("lity"), t),n,C.activeElement);
        if (!e.preventDefault)
            return n
    }
    var C = e.document
      , _ = f(e)
      , x = f.Deferred
      , k = f("html")
      , T = []
      , I = "aria-hidden"
      , S = "lity-" + I
      , s = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])'
      , P = {
        esc: !0,
        handler: null,
        handlers: {
            image: t,
            inline: function(e, t) {
                var n, i, o;
                try {
                    n = f(e)
                } catch (e) {
                    return !1
                }
                return !!n.length && (i = f('<i style="display:none !important"/>'),
                o = n.hasClass("lity-hide"),
                t.element().one("lity:remove", function() {
                    i.before(n).remove(),
                    o && !n.closest(".lity-content").length && n.addClass("lity-hide")
                }),
                n.removeClass("lity-hide").after(i))
            },
            iframe: function(e, t) {
                return n(e, t)
            }
        },
        template: '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'
    }
      , l = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i
      , c = function() {
        var e, t = C.createElement("div"), n = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (e in n)
            if (void 0 !== t.style[e])
                return n[e];
        return !1
    }();
    return t.test = function(e) {
        return l.test(e)
    }
    ,
    r.version = "3.0.0-dev",
    r.options = f.proxy(v, r, P),
    r.handlers = f.proxy(v, r, P.handlers),
    r.current = i,
    r.iframe = n,
    f(C).on("click.lity", "[data-lity]", r),
    r
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["lity"], function(e) {
        t(e)
    }) : t("object" == typeof module && "object" == typeof module.exports ? require("lity") : e.lity)
}("undefined" != typeof window ? window : this, function(i) {
    "use strict";
    var o = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i;
    i.handlers("youtube", function(e, t) {
        var n = o.exec(e);
        return !!n && i.iframe("https://www.youtube" + (n[2] || "") + ".com/embed/" + n[4] + "?autoplay=1", t, n[5], e)
    })
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["lity"], function(e) {
        t(e)
    }) : t("object" == typeof module && "object" == typeof module.exports ? require("lity") : e.lity)
}("undefined" != typeof window ? window : this, function(i) {
    "use strict";
    var o = /(vimeo(pro)?\.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/;
    i.handlers("vimeo", function(e, t) {
        var n = o.exec(e);
        return !!n && i.iframe("https://player.vimeo.com/video/" + n[3] + "?autoplay=1", t, n[4], e)
    })
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["lity"], function(e) {
        t(e)
    }) : t("object" == typeof module && "object" == typeof module.exports ? require("lity") : e.lity)
}("undefined" != typeof window ? window : this, function(i) {
    "use strict";
    var o = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i;
    i.handlers("googlemaps", function(e, t) {
        var n = o.exec(e);
        return !!n && i.iframe("https://www.google." + n[3] + "/maps?" + n[6], t, {
            output: 0 < n[6].indexOf("layer=c") ? "svembed" : "embed"
        }, e)
    })
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["lity"], function(e) {
        t(e)
    }) : t("object" == typeof module && "object" == typeof module.exports ? require("lity") : e.lity)
}("undefined" != typeof window ? window : this, function(i) {
    "use strict";
    var o = /(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i;
    i.handlers("facebookvideo", function(e, t) {
        var n = o.exec(e);
        return !!n && (0 !== e.indexOf("http") && (e = "https:" + e),
        i.iframe("https://www.facebook.com/plugins/video.php?href=" + e + "&autoplay=1", t, n[4], e))
    })
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["lity"], function(e) {
        t(e)
    }) : t("object" == typeof module && "object" == typeof module.exports ? require("lity") : e.lity)
}("undefined" != typeof window ? window : this, function(i) {
    "use strict";
    var o = /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?\??(.*)?/i;
    i.handlers("instagram", function(e, t) {
        var n = o.exec(e);
        return !!n && i.iframe("https://www.instagram.com/p/" + n[2] + "/embed/", t, n[3], e)
    })
}),
function(e, t, n) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return n(e, 0, t),
        e.mobile
    }) : n(e.jQuery, 0, t)
}(this, document, function(e, t, n, i) {
    function c(e, t, n, i) {
        var o = n.type;
        n.type = t,
        i ? d.event.trigger(n, a, e) : d.event.dispatch.call(e, n),
        n.type = o
    }
    var d, r, a, u, s, o, l, p, h, m;
    (function(d, e, u) {
        function p(e) {
            for (; e && void 0 !== e.originalEvent; )
                e = e.originalEvent;
            return e
        }
        function r(e) {
            for (var t, n, i = {}; e; ) {
                for (n in t = d.data(e, b))
                    t[n] && (i[n] = i.hasVirtualBinding = !0);
                e = e.parentNode
            }
            return i
        }
        function i() {
            A = !0
        }
        function o() {
            A = !1
        }
        function a() {
            s(),
            I = setTimeout(function() {
                B = I = 0,
                z.length = 0,
                j = !1,
                i()
            }, d.vmouse.resetTimerDuration)
        }
        function s() {
            I && (clearTimeout(I),
            I = 0)
        }
        function l(e, t, n) {
            var i;
            return (n && n[e] || !n && function(e, t) {
                for (var n; e; ) {
                    if ((n = d.data(e, b)) && (!t || n[t]))
                        return e;
                    e = e.parentNode
                }
            }(t.target, e)) && (i = function(e, t) {
                var n, i, o, r, a, s, l, c = e.type;
                if ((e = d.Event(e)).type = t,
                n = e.originalEvent,
                i = d.event.props,
                -1 < c.search(/^(mouse|click)/) && (i = k),
                n)
                    for (a = i.length; a; )
                        e[o = i[--a]] = n[o];
                if (-1 < c.search(/mouse(down|up)|click/) && !e.which && (e.which = 1),
                -1 !== c.search(/^touch/) && (c = (t = p(n)).touches,
                t = t.changedTouches,
                r = c && c.length ? c[0] : t && t.length ? t[0] : u))
                    for (s = 0,
                    l = _.length; s < l; s++)
                        e[o = _[s]] = r[o];
                return e
            }(t, e),
            d(t.target).trigger(i)),
            i
        }
        function c(e) {
            var t = d.data(e.target, C);
            j || B && B === t || (t = l("v" + e.type, e)) && (t.isDefaultPrevented() && e.preventDefault(),
            t.isPropagationStopped() && e.stopPropagation(),
            t.isImmediatePropagationStopped() && e.stopImmediatePropagation())
        }
        function h(e) {
            var t, n = p(e).touches;
            !n || 1 !== n.length || (n = r(t = e.target)).hasVirtualBinding && (B = M++,
            d.data(t, C, B),
            s(),
            o(),
            E = !1,
            t = p(e).touches[0],
            S = t.pageX,
            P = t.pageY,
            l("vmouseover", e, n),
            l("vmousedown", e, n))
        }
        function m(e) {
            A || (E || l("vmousecancel", e, r(e.target)),
            E = !0,
            a())
        }
        function f(e) {
            var t, n, i, o;
            A || (t = p(e).touches[0],
            n = E,
            i = d.vmouse.moveDistanceThreshold,
            o = r(e.target),
            (E = E || Math.abs(t.pageX - S) > i || Math.abs(t.pageY - P) > i) && !n && l("vmousecancel", e, o),
            l("vmousemove", e, o),
            a())
        }
        function g(e) {
            var t, n;
            A || (i(),
            l("vmouseup", e, t = r(e.target)),
            E || (n = l("vclick", e, t)) && n.isDefaultPrevented() && (n = p(e).changedTouches[0],
            z.push({
                touchID: B,
                x: n.clientX,
                y: n.clientY
            }),
            j = !0),
            l("vmouseout", e, t),
            E = !1,
            a())
        }
        function v(e) {
            var t, n = d.data(e, b);
            if (n)
                for (t in n)
                    if (n[t])
                        return 1
        }
        function w() {}
        var y, t, b = "virtualMouseBindings", C = "virtualTouchID", n = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), _ = "clientX clientY pageX pageY screenX screenY".split(" "), x = d.event.mouseHooks ? d.event.mouseHooks.props : [], k = d.event.props.concat(x), T = {}, I = 0, S = 0, P = 0, E = !1, z = [], j = !1, A = !1, O = "addEventListener"in e, H = d(e), M = 1, B = 0;
        for (d.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        },
        t = 0; t < n.length; t++)
            d.event.special[n[t]] = function(n) {
                var i = n.substr(1);
                return {
                    setup: function() {
                        v(this) || d.data(this, b, {}),
                        d.data(this, b)[n] = !0,
                        T[n] = (T[n] || 0) + 1,
                        1 === T[n] && H.bind(i, c),
                        d(this).bind(i, w),
                        O && (T.touchstart = (T.touchstart || 0) + 1,
                        1 === T.touchstart && H.bind("touchstart", h).bind("touchend", g).bind("touchmove", f).bind("scroll", m))
                    },
                    teardown: function() {
                        --T[n],
                        T[n] || H.unbind(i, c),
                        O && (--T.touchstart,
                        T.touchstart || H.unbind("touchstart", h).unbind("touchmove", f).unbind("touchend", g).unbind("scroll", m));
                        var e = d(this)
                          , t = d.data(this, b);
                        t && (t[n] = !1),
                        e.unbind(i, w),
                        v(this) || e.removeData(b)
                    }
                }
            }(n[t]);
        O && e.addEventListener("click", function(e) {
            var t, n, i, o, r, a = z.length, s = e.target;
            if (a)
                for (t = e.clientX,
                n = e.clientY,
                y = d.vmouse.clickDistanceThreshold,
                i = s; i; ) {
                    for (o = 0; o < a; o++)
                        if (r = z[o],
                        i === s && Math.abs(r.x - t) < y && Math.abs(r.y - n) < y || d.data(i, C) === r.touchID)
                            return e.preventDefault(),
                            void e.stopPropagation();
                    i = i.parentNode
                }
        }, !0)
    }
    )(e, n),
    e.mobile = {},
    h = e,
    m = {
        touch: "ontouchend"in n
    },
    h.mobile.support = h.mobile.support || {},
    h.extend(h.support, m),
    h.extend(h.mobile.support, m),
    r = this,
    u = (d = e)(n),
    n = d.mobile.support.touch,
    s = "touchmove scroll",
    o = n ? "touchstart" : "mousedown",
    l = n ? "touchend" : "mouseup",
    p = n ? "touchmove" : "mousemove",
    d.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(e, t) {
        d.fn[t] = function(e) {
            return e ? this.bind(t, e) : this.trigger(t)
        }
        ,
        d.attrFn && (d.attrFn[t] = !0)
    }),
    d.event.special.scrollstart = {
        enabled: !0,
        setup: function() {
            function t(e, t) {
                c(o, (n = t) ? "scrollstart" : "scrollstop", e)
            }
            var n, i, o = this;
            d(o).bind(s, function(e) {
                d.event.special.scrollstart.enabled && (n || t(e, !0),
                clearTimeout(i),
                i = setTimeout(function() {
                    t(e, !1)
                }, 50))
            })
        },
        teardown: function() {
            d(this).unbind(s)
        }
    },
    d.event.special.tap = {
        tapholdThreshold: 750,
        emitTapOnTaphold: !0,
        setup: function() {
            var a = this
              , s = d(a)
              , l = !1;
            s.bind("vmousedown", function(e) {
                function t() {
                    clearTimeout(o)
                }
                function n() {
                    t(),
                    s.unbind("vclick", i).unbind("vmouseup", t),
                    u.unbind("vmousecancel", n)
                }
                function i(e) {
                    n(),
                    l || r !== e.target ? l && e.preventDefault() : c(a, "tap", e)
                }
                if (l = !1,
                e.which && 1 !== e.which)
                    return !1;
                var o, r = e.target;
                s.bind("vmouseup", t).bind("vclick", i),
                u.bind("vmousecancel", n),
                o = setTimeout(function() {
                    d.event.special.tap.emitTapOnTaphold || (l = !0),
                    c(a, "taphold", d.Event("taphold", {
                        target: r
                    }))
                }, d.event.special.tap.tapholdThreshold)
            })
        },
        teardown: function() {
            d(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),
            u.unbind("vmousecancel")
        }
    },
    d.event.special.swipe = {
        scrollSupressionThreshold: 30,
        durationThreshold: 1e3,
        horizontalDistanceThreshold: 30,
        verticalDistanceThreshold: 30,
        getLocation: function(e) {
            var t = r.pageXOffset
              , n = r.pageYOffset
              , i = e.clientX
              , o = e.clientY;
            return 0 === e.pageY && Math.floor(o) > Math.floor(e.pageY) || 0 === e.pageX && Math.floor(i) > Math.floor(e.pageX) ? (i -= t,
            o -= n) : (o < e.pageY - n || i < e.pageX - t) && (i = e.pageX - t,
            o = e.pageY - n),
            {
                x: i,
                y: o
            }
        },
        start: function(e) {
            var t = e.originalEvent.touches ? e.originalEvent.touches[0] : e
              , t = d.event.special.swipe.getLocation(t);
            return {
                time: (new Date).getTime(),
                coords: [t.x, t.y],
                origin: d(e.target)
            }
        },
        stop: function(e) {
            e = e.originalEvent.touches ? e.originalEvent.touches[0] : e,
            e = d.event.special.swipe.getLocation(e);
            return {
                time: (new Date).getTime(),
                coords: [e.x, e.y]
            }
        },
        handleSwipe: function(e, t, n, i) {
            if (t.time - e.time < d.event.special.swipe.durationThreshold && Math.abs(e.coords[0] - t.coords[0]) > d.event.special.swipe.horizontalDistanceThreshold && Math.abs(e.coords[1] - t.coords[1]) < d.event.special.swipe.verticalDistanceThreshold) {
                var o = e.coords[0] > t.coords[0] ? "swipeleft" : "swiperight";
                return c(n, "swipe", d.Event("swipe", {
                    target: i,
                    swipestart: e,
                    swipestop: t
                }), !0),
                c(n, o, d.Event(o, {
                    target: i,
                    swipestart: e,
                    swipestop: t
                }), !0),
                !0
            }
            return !1
        },
        eventInProgress: !1,
        setup: function() {
            var r = this
              , e = d(r)
              , a = {}
              , t = d.data(this, "mobile-events");
            t || (t = {
                length: 0
            },
            d.data(this, "mobile-events", t)),
            t.length++,
            (t.swipe = a).start = function(e) {
                var t, n, i, o;
                d.event.special.swipe.eventInProgress || (d.event.special.swipe.eventInProgress = !0,
                n = d.event.special.swipe.start(e),
                i = e.target,
                o = !1,
                a.move = function(e) {
                    n && !e.isDefaultPrevented() && (t = d.event.special.swipe.stop(e),
                    o || (o = d.event.special.swipe.handleSwipe(n, t, r, i)) && (d.event.special.swipe.eventInProgress = !1),
                    Math.abs(n.coords[0] - t.coords[0]) > d.event.special.swipe.scrollSupressionThreshold && e.preventDefault())
                }
                ,
                a.stop = function() {
                    o = !0,
                    d.event.special.swipe.eventInProgress = !1,
                    u.off(p, a.move),
                    a.move = null
                }
                ,
                u.on(p, a.move).one(l, a.stop))
            }
            ,
            e.on(o, a.start)
        },
        teardown: function() {
            var e, t = d.data(this, "mobile-events");
            t && (e = t.swipe,
            delete t.swipe,
            t.length--,
            0 === t.length && d.removeData(this, "mobile-events")),
            e && (e.start && d(this).off(o, e.start),
            e.move && u.off(p, e.move),
            e.stop && u.off(l, e.stop))
        }
    },
    d.each({
        scrollstop: "scrollstart",
        taphold: "tap",
        swipeleft: "swipe.left",
        swiperight: "swipe.right"
    }, function(e, t) {
        d.event.special[e] = {
            setup: function() {
                d(this).bind(t, d.noop)
            },
            teardown: function() {
                d(this).unbind(t)
            }
        }
    })
}),
function(h) {
    window.mh_load_init_event = !1;
    var m, f, g, v = h(".mh_post_gallery"), w = null !== navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/), y = navigator.userAgent.match(/iPad/), b = h(".container"), C = (b.width(),
    h("body").hasClass("mh_fixed_nav")), _ = h("#page-container"), x = h(window), k = !1, T = h("body").hasClass("rtl"), o = (h(window).height(),
    h(".mh-app-nav")), I = "ontouchstart"in window || navigator.maxTouchPoints;
    document.addEventListener("DOMContentLoaded", function() {
        var e, t, n, i, o = h("ul.nav"), r = (h("ul#mh-secondary-nav"),
        h(".mh_search_icon"));
        function a() {
            (h(".mhc_audio_module .mejs-audio").length || h(".mh_audio_content .mejs-audio").length) && h(".mh_audio_container").each(function() {
                var e = h(this)
                  , t = e.find(".mejs-time-rail")
                  , n = e.find(".mejs-time-slider");
                t.removeAttr("style"),
                n.removeAttr("style");
                var i = e.find("div.mejs-currenttime-container")
                  , o = e.width()
                  , r = e.find(".mejs-play").outerWidth()
                  , a = e.find(".mejs-currenttime-container").outerWidth()
                  , s = e.find(".mejs-volume-button").outerWidth()
                  , l = e.find(".mejs-horizontal-volume-slider").outerWidth();
                i.addClass("custom"),
                e.find(".mejs-controls div.mejs-duration-container").replaceWith(i),
                0 < (l = o - (r + a + s + l + 65)) && (t.attr("style", "min-width: " + l + "px;"),
                n.attr("style", "min-width: " + l + "px;"))
            })
        }
        function s() {
            var e = h("#top-header")
              , t = h("body").hasClass("mh_secondary_nav_above") && e.length && e.is(":visible") ? e.innerHeight() : 0
              , e = h("#wpadminbar").length ? h("#wpadminbar").innerHeight() : 0;
            m = h("#main-header").innerHeight() + t - 1,
            f = (m <= 90 ? m - 29 : m - 56) + e - 114,
            g = t + e - 1
        }
        function l() {
            window_width = h(window).width(),
            h(".nav li.mh-reverse-direction-nav").removeClass("mh-reverse-direction-nav"),
            h(".nav li.no-mega-menu li ul").each(function() {
                var e = h(this)
                  , t = e.width()
                  , n = e.offset()
                  , e = e.parents(".nav > li");
                (T && n.left < t || n.left > window_width - t) && e.addClass("mh-reverse-direction-nav")
            })
        }
        function c() {
            var e = h("body");
            e.hasClass("mh_fixed_nav") && !e.hasClass("mh_vertical_nav") && h("#main-header").css("top", g)
        }
        function d() {
            h("body").hasClass("page-template-page-template-trans") && !h("body").hasClass("mh_vertical_nav") && (h("#mh-main-area").css("marginTop", "-" + parseInt(h("#main-header").outerHeight()) + "px"),
            h("#mh-main-area").css({
                opacity: 1,
                width: "100%",
                display: "inline-block"
            }, 300))
        }
        function u() {
            var e, t, n, i, o;
            (h(".mhc_audio_module .mejs-audio").length || h(".mh_audio_content .mejs-audio").length) && h(".mhc_audio_module .mejs-audio, .mh_audio_content .mejs-audio").each(function() {
                $count_timer = h(this).find("div.mejs-currenttime-container").addClass("custom"),
                h(this).find(".mejs-controls div.mejs-duration-container").replaceWith($count_timer)
            }),
            a(),
            window.mh_reinint_waypoint_modules(),
            h(".mh_audio_content").length && h(window).trigger("resize"),
            window.hasOwnProperty("mh_location_hash") && "" !== window.mh_location_hash && (o = window.mh_location_hash.replace(/(\|)/g, "\\$1"),
            0 !== h(o).length && (t = (e = h(o + " .mhc_map_container")).children(".mhc_map"),
            (n = h(o)).css("display", window.mh_location_hash_style),
            i = 4e3 < (void 0 !== n.offset().top ? n.offset().top : 0) ? 1600 : 800,
            e.length && google.maps.event.trigger(t[0], "resize"),
            setTimeout(function() {
                p(n, !1, i, "swing"),
                setTimeout(function() {
                    p(n, !1, 150, "linear")
                }, 25 + i)
            }, 700)))
        }
        function p(e, t, n, i) {
            var o = h(window).width();
            $menu_offset = h("body").hasClass("mh_fixed_nav") && 980 < o ? (h("#top-header").outerHeight() || 0) + (h("#main-header").outerHeight() || 0) - 1 : -1,
            h("#wpadminbar").length && 600 < o && ($menu_offset += h("#wpadminbar").outerHeight() || 0),
            $scroll_position = t ? 0 : e.offset().top - $menu_offset,
            void 0 === i && (i = "swing"),
            h("html, body").animate({
                scrollTop: $scroll_position
            }, n, i)
        }
        h("body").hasClass("mh_header_style_centeredx") && h(".mh-top-navigation-wrapper").insertBefore(".mh_logo"),
        o.find("li").hover(function() {
            h(this).closest("li.mega-menu").length && !h(this).hasClass("mega-menu") || (h(this).addClass("mh-show-dropdown"),
            h(this).removeClass("mh-hover").addClass("mh-hover"))
        }, function() {
            var e = h(this);
            e.removeClass("mh-show-dropdown"),
            e.hasClass("mh-show-dropdown") || e.removeClass("mh-hover")
        }),
        h(".mh_cart_wrapper").hover(function() {
            h(".mh-cart-container").addClass("mh-show-dropdown"),
            h(".mh-cart-container").removeClass("mh-hover").addClass("mh-hover")
        }, function() {
            var e = h(".mh-cart-container");
            setTimeout(function() {
                e.removeClass("mh-show-dropdown"),
                e.hasClass("mh-show-dropdown") || e.removeClass("mh-hover")
            }, 200)
        }),
        I && h("a.mh-cart-info").on("click", function(e) {
            var t = (new Date).getTime()
              , n = t < i + 500 ? !1 : !0;
            i = t,
            n && e.preventDefault()
        }),
        o.find(".menu-item-has-children > a").on("touchend", function() {
            var e = h(this).parent("li");
            e.hasClass("mh-hover") ? window.location = h(this).attr("href") : e.trigger("mouseenter")
        }),
        h("ul.mh_disable_top_tier").length && h("ul.mh_disable_top_tier > li > ul").prev("a").attr("href", "#"),
        C && (s(),
        _.css("paddingTop", m - 1),
        c()),
        d(),
        w && (h("body").addClass("mh_mobile_device"),
        y || h("body").addClass("mh_mobile_device_not_ipad")),
        r.click(function() {
            var e = h(this).siblings(".mh-search-form");
            e.hasClass("mh-hidden") ? e.css({
                display: "block",
                opacity: 0
            }).animate({
                opacity: 1
            }, 500) : e.animate({
                opacity: 0
            }, 500),
            e.toggleClass("mh-hidden")
        }),
        h.extend(!0, h.magnificPopup.defaults, {
            tClose: mh_theme.mp_close,
            tLoading: mh_theme.mp_loading,
            gallery: {
                tPrev: mh_theme.mp_prev,
                tNext: mh_theme.mp_next,
                tCounter: mh_theme.mp_counter
            },
            image: {
                tError: mh_theme.mp_error_image
            },
            ajax: {
                tError: mh_theme.mp_error_ajax
            }
        }),
        v.length && (e = h.magnificPopup.instance,
        T ? (h("body").on("swipeleft", ".mfp-container", function() {
            e.prev()
        }),
        h("body").on("swiperight", ".mfp-container", function() {
            e.next()
        })) : (h("body").on("swiperight", ".mfp-container", function() {
            e.prev()
        }),
        h("body").on("swipeleft", ".mfp-container", function() {
            e.next()
        })),
        v.each(function() {
            h(this).magnificPopup({
                delegate: ".mhc_gallery_image a",
                type: "image",
                removalDelay: 500,
                gallery: {
                    enabled: !0,
                    navigateByImgClick: !0
                },
                mainClass: "mfp-fade",
                zoom: {
                    enabled: !0,
                    duration: 500,
                    opener: function(e) {
                        return e.find("img")
                    }
                }
            })
        }),
        v.find("a").unbind("click")),
        l(),
        window.mh_reinint_waypoint_modules = function() {
            var e, t, n;
            h.fn.waypoint && (C && (e = h("body").hasClass("mh_header_style_centeredx") ? "-65" : f,
            setTimeout(function() {
                checkIfScrolled = !1
            }, 0),
            h("#mh-top-navigation").waypoint({
                offset: function() {
                    return k && (s(),
                    k = !0),
                    e
                },
                handler: function(e) {
                    "down" === e ? 0 !== x.scrollTop() && (h("#main-header").addClass("mh-fixed-header"),
                    h("#main-header").removeClass("transparent")) : (h("#main-header").removeClass("mh-fixed-header"),
                    h("#main-header").addClass("transparent"))
                }
            })),
            !h(".mh_secondary_nav_above").length || h("body").hasClass("page-template-page-template-blank") || h("body").hasClass("page-template-page-template-noheader") || (t = h("#main-header").offset().top,
            (n = h(window)).scroll(function() {
                n.scrollTop() >= t ? h("#main-header").addClass("main-header-fixed") : h("#main-header").removeClass("main-header-fixed")
            })))
        }
        ,
        b.data("previous-width", b.width()),
        h(window).resize(function() {
            var e, t = x.width(), n = b.data("previous-width") !== t;
            h(window).height(),
            l(),
            setTimeout(function() {
                d()
            }, 200),
            b.data("previous-width", t),
            C && n && (e = h("#top-header"),
            n = h("body").hasClass("mh_secondary_nav_above") && e.length && e.is(":visible") ? e.innerHeight() : 0,
            _.css("paddingTop", h("#main-header").innerHeight() + n - 1),
            c()),
            h("#wpadminbar").length && C && 740 <= t && t <= 782 && (s(),
            c()),
            h(".mh-promo").length && (e = h("#top-header"),
            h("#top-header").css("min-height", h(".mh-promo").innerHeight()),
            h("#top-header").hasClass("mh-promo-closing") && h("#top-header").css("min-height", 0),
            !h(".mh-promo").is(":visible") && e.hasClass("mh-has-promo-only") && e.hide()),
            a()
        }),
        h(window).ready(function() {
            var t, n, e = h("#top-header");
            h.fn.fitVids && (h(".mhc_slide_video").fitVids(),
            h("#main-content").fitVids({
                customSelector: "iframe[src^='http://www.hulu.com'], iframe[src^='http://www.dailymotion.com'], iframe[src^='http://www.funnyordie.com'], iframe[src^='https://embed-ssl.ted.com'], iframe[src^='http://embed.revision3.com'], iframe[src^='https://flickr.com'], iframe[src^='http://blip.tv'], iframe[src^='http://www.collegehumor.com']"
            })),
            !h(".mh-promo").is(":visible") && e.hasClass("mh-has-promo-only") && e.hide(),
            h(".mh-full-search-overlay").length && (t = h(".mh-full-search-overlay"),
            n = t.find(".search-input"),
            h(".mh-full-search-trigger").click(function(e) {
                e.preventDefault(),
                t.toggleClass("show"),
                n.focus()
            }),
            t.click(function(e) {
                h(e.target).hasClass("search-input") || (t.toggleClass("show"),
                setTimeout(function() {
                    n.val("")
                }, 350))
            }),
            h(document).keydown(function(e) {
                27 === e.which && t.hasClass("show") && (t.toggleClass("show"),
                setTimeout(function() {
                    n.val("")
                }, 350))
            }))
        }),
        window.mh_load_init_event ? u() : h(window).load(function() {
            u()
        }),
        h('a[href*="#"]:not([href="#"])').on("click", function() {
            var e = h(this)
              , t = e.closest(".mh_smooth_scroll_disabled").length
              , n = e.closest(".woocommerce-tabs").length && e.closest(".tabs").length
              , i = e.closest(".tt_tabs_navigation").length
              , o = e.closest(".eab-shortcode_calendar-navigation-link").length
              , r = e.closest(".view-cart-lnk").length
              , a = e.hasClass("acomment-reply")
              , e = e.hasClass("woocommerce-review-link")
              , i = t || r || n || o || a || e || i;
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname && !i) {
                var s = h(this.hash);
                if ((s = s.length ? s : h("[name=" + this.hash.slice(1) + "]")).length)
                    return setTimeout(function() {
                        p(s, !1, 800)
                    }, 0),
                    !h("#main-header").hasClass("mh-fixed-header") && h("body").hasClass("mh_fixed_nav") && setTimeout(function() {
                        p(s, !1, 100)
                    }, 500),
                    !1
            }
        }),
        h(".mhc_scroll_top").length && (h(window).scroll(function() {
            800 < h(this).scrollTop() ? h(".mhc_scroll_top").show().removeClass("mh-hidden").addClass("mh-visible") : h(".mhc_scroll_top").removeClass("mh-visible").addClass("mh-hidden")
        }),
        h(".mhc_scroll_top").click(function() {
            h("html, body").animate({
                scrollTop: 0
            }, 800)
        })),
        h("body").hasClass("mh_transparent_header") && h(document).scroll(function() {
            550 < h(this).scrollTop() ? h("body").removeClass("mh_transparent_header") : h("body").addClass("mh_transparent_header")
        }),
        h("body").hasClass("mh_transparent_padding") && h(".mhc_section:first").css("paddingTop", m - 1),
        h(".mh-promo").length && (t = h("#top-header"),
        o = h(".mh-promo").innerHeight(),
        r = h("#wpadminbar").length ? h("#wpadminbar").innerHeight() : 0,
        h(".mh-promo").is(":visible") && t.css("min-height", h(".mh-promo").innerHeight()),
        C && h("#top-header").hasClass("mh-has-promo-only") && (h("#main-header").css("top", o + r - 1),
        h("body").hasClass("mh_secondary_nav_above") || c()),
        h(".mh-promo[data-once]").length && !Cookies.get("MHPromoBar") ? (Cookies.set("MHPromoBar", 1, {
            path: "/"
        }),
        h(".mh-promo").show(),
        h(".mh-promo-close").click(function() {
            t.addClass("mh-promo-closing"),
            h("#main-header").css("top", g),
            t.css("min-height", 0),
            h(".mh-promo").hide(),
            t.hasClass("mh-has-promo-only") && (h("#main-header").css("top", 0),
            C && (_.css("paddingTop", h("#main-header").innerHeight()),
            h("#main-header").css("top", 0)),
            t.css("height", 0))
        })) : h(".mh-promo[data-once]").length && Cookies.get("MHPromoBar") ? t.hasClass("mh-has-promo-only") && C && _.css("paddingTop", h("#main-header").innerHeight()) : (Cookies.remove("MHPromoBar"),
        h(".mh-promo").show(),
        h(".mh-promo-close").click(function() {
            t.addClass("mh-promo-closing"),
            h("#main-header").css("top", g),
            t.css("min-height", 0),
            h(".mh-promo").hide(),
            t.hasClass("mh-has-promo-only") && (h("#main-header").css("top", 0),
            C && _.css("paddingTop", h("#main-header").innerHeight()),
            t.css("height", 0))
        }))),
        h(".mh_quick_item_contact").length && (n = h(".mh_quick_item_contact"),
        h(".mh_quick_item_contact .mh_quick_form_button").click(function() {
            n.toggleClass("show")
        }),
        h(".mh_quick_item_contact").on("click", ".mh_quick_form_close", function() {
            n.hasClass("show") && n.toggleClass("show")
        }),
        h(document).keydown(function(e) {
            27 === e.which && n.hasClass("show") && n.toggleClass("show")
        })),
        h(".mh-app-nav").length && (h(".mh-app-nav .menu-item-has-children a").on("click", function(e) {
            $parent = h(this).parent("li"),
            $parent_mega_menu = h(this).parent("li.mega-menu"),
            $parent.children("ul").stop().animate({
                height: "toggle",
                opacity: "toggle"
            }, 300),
            $parent_mega_menu.find("ul ul").stop().animate({
                height: "toggle",
                opacity: "toggle"
            }, 300),
            h(this).toggleClass("active", 300)
        }),
        h(".mh-app-nav .menu-item-has-children > a").on("click", function(e) {
            var t = (new Date).getTime()
              , n = t < i + 500 ? !1 : !0;
            i = t,
            n && e.preventDefault()
        }))
    }),
    o.length && o.each(function() {
        var e = h(this)
          , t = e.parent()
          , n = t.find(".mobile-menu-trigger-icon button")
          , i = o.not(this);
        t.on("click", ".mobile-menu-trigger-icon", function() {
            h("body").toggleClass("mh-app-nav-active"),
            e.toggleClass("mh-app-nav-opened"),
            i.hasClass("mh-app-nav-opened") && i.removeClass("mh-app-nav-opened"),
            n.toggleClass("is-active"),
            i.parent().find(".mobile-menu-trigger-icon button").removeClass("is-active"),
            e.hasClass("mh-app-nav-opened") ? (e.addClass("mh-app-nav-animated"),
            h("#top-header").css("zIndex", 997)) : (h("#top-header").css("zIndex", 999),
            setTimeout(function() {
                e.removeClass("mh-app-nav-animated")
            }, 1e3))
        }),
        h(".mh-app-nav li.current_page_item a").click(function() {
            e.toggleClass("mh-app-nav-opened"),
            h("body").toggleClass("mh-app-nav-active"),
            n.toggleClass("is-active")
        })
    }),
    h(window).load(function() {
        h("#mh-main-area").animate({
            opacity: 1
        }, 500),
        h("body").hasClass("chrome") && h("html,body").animate({
            scrollTop: 1
        }, 0)
    })
}(jQuery);
