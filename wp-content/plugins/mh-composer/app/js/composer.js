!function(C) {
    window.mhc_load_init_event = !1,
    jQuery.fn.reverse = [].reverse,
    jQuery.fn.closest_descendent = function(t) {
        for (var i, e = this.children(); e.length && !(i = e.filter(t)).length; )
            e = e.children();
        return i
    }
    ,
    C.mhc_simple_slider = function(t, i) {
        var e, a, n, r, l = C.extend({
            slide: ".mh-slide",
            arrows: ".mhc-slider-arrows",
            prev_arrow: ".mhc-arrow-prev",
            next_arrow: ".mhc-arrow-next",
            controls: ".mhc-controllers a",
            control_active_class: "mhc-active-control",
            carousel_controls: ".mhc_carousel_item",
            fade_speed: 500,
            use_arrows: !0,
            use_controls: !0,
            manual_arrows: "",
            append_controls_to: "",
            controls_below: !1,
            controls_class: "mhc-controllers",
            slideshow: !1,
            slideshow_speed: 7e3,
            show_progress_bar: !1,
            tabs_animation: !1,
            use_carousel: !1,
            previous_text: mhcomposer.previous_text,
            next_text: mhcomposer.next_text
        }, i), c = C(t), d = c.closest_descendent(l.slide), h = d.length, _ = l.fade_speed, p = 0, s = "", o = "", m = c.find(".mhc_container"), u = m.width();
        if (c.mh_animation_running = !1,
        C.data(t, "mhc_simple_slider", c),
        d.eq(0).addClass("mhc-active-slide"),
        l.tabs_animation || c.hasClass("mhc_bg_layout_dark") || c.hasClass("mhc_bg_layout_light") || c.addClass(w(d.eq(0))),
        l.use_arrows && 1 < h && ("" == l.manual_arrows ? c.append('<div class="mhc-slider-arrows"><a class="mhc-arrow-prev" href="#"><span>' + l.previous_text + '</span></a><a class="mhc-arrow-next" href="#"><span>' + l.next_text + "</span></a></div>") : c.append(l.manual_arrows),
        e = C(l.arrows),
        t = c.find(l.prev_arrow),
        c.find(l.next_arrow).click(function() {
            return c.mh_animation_running || c.mh_slider_move_to("next"),
            !1
        }),
        t.click(function() {
            return c.mh_animation_running || c.mh_slider_move_to("previous"),
            !1
        }),
        A ? (c.find(l.slide).on("swiperight", function() {
            c.mh_slider_move_to("next")
        }),
        c.find(l.slide).on("swipeleft", function() {
            c.mh_slider_move_to("previous")
        })) : (c.find(l.slide).on("swipeleft", function() {
            c.mh_slider_move_to("next")
        }),
        c.find(l.slide).on("swiperight", function() {
            c.mh_slider_move_to("previous")
        }))),
        l.use_controls && 1 < h) {
            for (var f = 1; f <= h; f++)
                s += '<a href="#"' + (1 == f ? ' class="' + l.control_active_class + '"' : "") + ">" + f + "</a>";
            s = '<div class="' + l.controls_class + '">' + s + "</div>",
            ("" == l.append_controls_to ? c : C(l.append_controls_to)).append(s),
            a = (l.controls_below ? c.parent() : c).find(l.controls),
            x(d.eq(0)),
            a.click(function() {
                return c.mh_animation_running || c.mh_slider_move_to(C(this).index()),
                !1
            })
        }
        if (l.use_carousel && 1 < h) {
            for (f = 1; f <= h; f++)
                slide_id = f - 1,
                image_src = void 0 !== d.eq(slide_id).data("image") ? "url(" + d.eq(slide_id).data("image") + ")" : "none",
                o += '<div class="mhc_carousel_item ' + (1 == f ? l.control_active_class : "") + '" data-slide-id="' + slide_id + '"><div class="mhc_video_overlay" href="#" style="background-image: ' + image_src + ';"><div class="mhc_video_overlay_hover"><a href="#" class="mhc_video_play"></a></div></div></div>';
            o = '<div class="mhc_carousel"><div class="mhc_carousel_items">' + o + "</div></div>",
            c.after(o),
            (n = c.siblings(".mhc_carousel").find(l.carousel_controls)).click(function() {
                if (c.mh_animation_running)
                    return !1;
                var t = C(this);
                return c.mh_slider_move_to(t.data("slide-id")),
                !1
            })
        }
        function g() {
            l.slideshow && 1 < h && !c.hasClass("mh_slider_hovered") && (r = setTimeout(function() {
                c.mh_slider_move_to("next")
            }, l.slideshow_speed))
        }
        function v() {
            var t = c
              , i = t.find(".mhc-active-slide .mhc_slide_image")
              , e = t.find(".mhc-active-slide .mhc_slide_video")
              , a = i.closest(".mhc_slide")
              , t = a.closest(".mhc_slider").innerHeight()
              , t = parseInt(.8 * t);
            i.find("img").css("maxHeight", t + "px"),
            a.hasClass("mhc_media_alignment_center") && i.css("marginTop", "-" + parseInt(i.height() / 2) + "px"),
            e.css("marginTop", "-" + parseInt(e.height() / 2) + "px"),
            i.find("img").addClass("active")
        }
        function w(t) {
            return t.hasClass("mhc_bg_layout_dark") ? "mhc_bg_layout_dark" : "mhc_bg_layout_light"
        }
        function x(t) {
            var i;
            void 0 !== a && a.length && ("" !== (i = t.data("dots_color") || "") ? (a.attr("style", "background-color: " + y(i, "0.3") + ";"),
            a.filter(".mhc-active-control").attr("style", "background-color: " + y(i) + "!important;")) : a.removeAttr("style")),
            void 0 !== e && e.length && (i = e.find("a"),
            "" !== (t = t.data("arrows_color") || "") ? i.css("color", t) : i.css("color", "inherit"))
        }
        function y(t, i) {
            t = parseInt(t.replace("#", ""), 16),
            i = (t >> 16 & 255) + "," + (t >> 8 & 255) + "," + (255 & t) + "," + (i = i || 1);
            return i = "rgba(" + i + ")"
        }
        l.slideshow && 1 < h && c.hover(function() {
            c.addClass("mh_slider_hovered"),
            void 0 !== r && clearInterval(r)
        }, function() {
            c.removeClass("mh_slider_hovered"),
            g()
        }),
        g(),
        N.load(function() {
            v()
        }),
        N.resize(function() {
            u !== m.width() && (u = m.width(),
            v())
        }),
        c.mh_slider_move_to = function(t) {
            var s, o = d.eq(p);
            if (c.mh_animation_running = !0,
            c.removeClass("mh_slide_transition_to_next mh_slide_transition_to_previous").addClass("mh_slide_transition_to_" + t),
            c.find(".mhc-moved-slide").removeClass("mhc-moved-slide"),
            "next" == t || "previous" == t)
                p = "next" == t ? p + 1 < h ? p + 1 : 0 : 0 <= p - 1 ? p - 1 : h - 1;
            else {
                if (p == t)
                    return void (c.mh_animation_running = !1);
                p = t
            }
            void 0 !== r && clearInterval(r),
            s = d.eq(p),
            void 0 !== o.find("video")[0] && void 0 !== o.find("video")[0].player && o.find("video")[0].player.pause(),
            void 0 !== s.find("video")[0] && void 0 !== s.find("video")[0].player && s.find("video")[0].player.play(),
            c.trigger("simple_slider_before_move_to", {
                direction: t,
                next_slide: s
            }),
            d.each(function() {
                C(this).css("zIndex", 1)
            }),
            o.css("zIndex", 2).removeClass("mhc-active-slide").addClass("mhc-moved-slide"),
            s.css({
                display: "block",
                opacity: 0
            }).addClass("mhc-active-slide"),
            v(),
            l.use_controls && a.removeClass(l.control_active_class).eq(p).addClass(l.control_active_class),
            l.use_carousel && n.removeClass(l.control_active_class).eq(p).addClass(l.control_active_class),
            l.tabs_animation ? (s.css({
                display: "none",
                opacity: 0
            }),
            o.addClass("mh_slide_transition").css({
                display: "block",
                opacity: 1
            }).animate({
                opacity: 0
            }, _, function() {
                C(this).css("display", "none").removeClass("mh_slide_transition"),
                s.css({
                    display: "block",
                    opacity: 0
                }).animate({
                    opacity: 1
                }, _, function() {
                    c.mh_animation_running = !1,
                    c.trigger("simple_slider_after_move_to", {
                        next_slide: s
                    })
                })
            })) : (x(s),
            s.animate({
                opacity: 1
            }, _),
            o.addClass("mh_slide_transition").css({
                display: "list-item",
                opacity: 1
            }).animate({
                opacity: 0
            }, _, function() {
                var t, i, e, a = w(o), n = w(s);
                C(this).css("display", "none").removeClass("mh_slide_transition"),
                (t = o).has("iframe").length ? (e = (i = t.find("iframe")).attr("src"),
                i.attr("src", ""),
                i.attr("src", e)) : t.has("video").length && (t.find(".mhc_section_video_bg").length || (i = t.find("video"))[0].pause()),
                c.removeClass(a).addClass(n),
                c.mh_animation_running = !1,
                c.trigger("simple_slider_after_move_to", {
                    next_slide: s
                })
            })),
            g()
        }
    }
    ,
    C.fn.mhc_simple_slider = function(t) {
        return this.each(function() {
            new C.mhc_simple_slider(this,t)
        })
    }
    ;
    var b = "||"
      , T = "|";
    function $(t) {
        if (module_id = t.split(T)[0],
        C("#" + module_id).length) {
            if (window.location.hash) {
                var i = window.location.hash.substring(1)
                  , e = [];
                if (-1 !== i.indexOf(b, 0)) {
                    modules = i.split(b);
                    for (var a = !1, n = 0; n < modules.length; n++)
                        modules[n].split(T)[0] === module_id ? (e.push(t),
                        a = !0) : e.push(modules[n]);
                    a || e.push(t)
                } else
                    module_params = i.split(T),
                    module_params[0] !== module_id && e.push(i),
                    e.push(t);
                i = e.join(b)
            } else
                i = t;
            var s = document.body.scrollTop;
            window.location.hash = i,
            document.body.scrollTop = s
        }
    }
    C.mhc_simple_carousel = function(t, i) {
        var g = C.extend({
            slide_duration: 500
        }, i)
          , v = C(t)
          , w = v.find(".mhc_carousel_items")
          , y = w.find(".mhc_carousel_item");
        function e() {
            y.width();
            var t = y.height();
            w.css("height", t + "px")
        }
        function a(t) {
            var i, e = t.parents(".mhc_column");
            w.width(),
            y.length;
            if (e.hasClass("mhc_column_4_4") || e.hasClass("mhc_column_3_4") || e.hasClass("mhc_column_2_3") ? i = N.width() < 768 ? 3 : 4 : e.hasClass("mhc_column_1_2") || e.hasClass("mhc_column_3_8") || e.hasClass("mhc_column_1_3") ? i = 3 : e.hasClass("mhc_column_1_4") && (i = 480 < N.width() && N.width() < 980 ? 3 : 2),
            i !== w.data("columns") && !t.data("columns_setting_up")) {
                t.data("columns_setting_up", !0),
                w.removeClass("columns-" + w.data("columns")),
                w.addClass("columns-" + i),
                w.data("columns", i),
                w.find(".mh-carousel-group").length && (y.appendTo(w),
                w.find(".mh-carousel-group").remove());
                var a = w.data("items")
                  , n = C('<div class="mh-carousel-group active">').appendTo(w);
                for (y.data("position", ""),
                a.length <= i ? w.find(".mhc-slider-arrows").hide() : w.find(".mhc-slider-arrows").show(),
                position = 1,
                x = 0; x < a.length; x++,
                position++)
                    x < i ? (C(a[x]).show(),
                    C(a[x]).appendTo(n),
                    C(a[x]).data("position", position),
                    C(a[x]).addClass("position_" + position)) : (position = C(a[x]).data("position"),
                    C(a[x]).removeClass("position_" + position),
                    C(a[x]).data("position", ""),
                    C(a[x]).hide());
                t.data("columns_setting_up", !1)
            }
        }
        v.mh_animation_running = !1,
        v.addClass("container-width-change-notify").on("containerWidthChanged", function(t) {
            a(v),
            e()
        }),
        w.data("items", y.toArray()),
        v.data("columns_setting_up", !1),
        w.prepend('<div class="mhc-slider-arrows"><a class="mhc-slider-arrow mhc-arrow-prev" href="#"><span>' + mhcomposer.previous_text + '</span></a><a class="mhc-slider-arrow mhc-arrow-next" href="#"><span>' + mhcomposer.next_text + "</span></a></div>"),
        a(v),
        e(),
        $mh_carousel_next = v.find(".mhc-arrow-next"),
        $mh_carousel_prev = v.find(".mhc-arrow-prev"),
        $mh_carousel_next.click(function() {
            return v.mh_animation_running || v.mh_carousel_move_to("next"),
            !1
        }),
        $mh_carousel_prev.click(function() {
            return v.mh_animation_running || v.mh_carousel_move_to("previous"),
            !1
        }),
        A ? (v.on("swiperight", function() {
            v.mh_carousel_move_to("next")
        }),
        v.on("swipeleft", function() {
            v.mh_carousel_move_to("previous")
        })) : (v.on("swipeleft", function() {
            v.mh_carousel_move_to("next")
        }),
        v.on("swiperight", function() {
            v.mh_carousel_move_to("previous")
        })),
        v.mh_carousel_move_to = function(t) {
            var i = w.find(".mh-carousel-group.active")
              , e = w.data("items")
              , a = w.data("columns");
            v.mh_animation_running = !0;
            var n = 0;
            if (i.children().each(function() {
                C(this).css({
                    position: "absolute",
                    left: n
                }),
                n += C(this).outerWidth(!0)
            }),
            "next" == t) {
                var s = 1
                  , o = 1
                  , r = _ = (h = e.indexOf(i.children().first()[0])) + a
                  , l = r + a
                  , c = C('<div class="mh-carousel-group next" style="display: none;left: 100%;position: absolute;top: 0;">').insertAfter(i);
                for (c.css({
                    width: i.innerWidth()
                }).show(),
                x = 0,
                total = 0; total >= h && total < _ && (C(e[x]).addClass("changing_position current_position current_position_" + s),
                C(e[x]).data("current_position", s),
                s++),
                total >= r && total < l && (C(e[x]).data("next_position", o),
                C(e[x]).addClass("changing_position next_position next_position_" + o),
                C(e[x]).hasClass("current_position") ? (C(e[x]).clone(!0).appendTo(i).hide().addClass("delayed_container_append_dup").attr("id", C(e[x]).attr("id") + "-dup"),
                C(e[x]).addClass("delayed_container_append")) : C(e[x]).addClass("container_append"),
                o++),
                !(a < o); x++,
                total++)
                    x >= e.length - 1 && (x = -1);
                var d = w.find(".container_append, .delayed_container_append_dup").sort(function(t, i) {
                    t = parseInt(C(t).data("next_position")),
                    i = parseInt(C(i).data("next_position"));
                    return t < i ? -1 : i < t ? 1 : 0
                });
                C(d).show().appendTo(c);
                n = 0;
                c.children().each(function() {
                    C(this).css({
                        position: "absolute",
                        left: n
                    }),
                    n += C(this).outerWidth(!0)
                }),
                i.animate({
                    left: "-100%"
                }, {
                    duration: g.slide_duration,
                    complete: function() {
                        w.find(".delayed_container_append").each(function() {
                            n = C("#" + C(this).attr("id") + "-dup").css("left"),
                            C(this).css({
                                position: "absolute",
                                left: n
                            }),
                            C(this).appendTo(c)
                        }),
                        i.removeClass("active"),
                        i.children().each(function() {
                            position = C(this).data("position"),
                            s = C(this).data("current_position"),
                            C(this).removeClass("position_" + position + " changing_position current_position current_position_" + s),
                            C(this).data("position", ""),
                            C(this).data("current_position", ""),
                            C(this).hide(),
                            C(this).css({
                                position: "",
                                left: ""
                            }),
                            C(this).appendTo(w)
                        }),
                        i.remove()
                    }
                }),
                next_left = i.width() + parseInt(y.first().css("marginRight").slice(0, -2)),
                c.addClass("active").css({
                    position: "absolute",
                    top: 0,
                    left: next_left
                }),
                c.animate({
                    left: "0%"
                }, {
                    duration: g.slide_duration,
                    complete: function() {
                        c.removeClass("next").addClass("active").css({
                            position: "",
                            width: "",
                            top: "",
                            left: ""
                        }),
                        c.find(".changing_position").each(function(t) {
                            position = C(this).data("position"),
                            s = C(this).data("current_position"),
                            o = C(this).data("next_position"),
                            C(this).removeClass("container_append delayed_container_append position_" + position + " changing_position current_position current_position_" + s + " next_position next_position_" + o),
                            C(this).data("current_position", ""),
                            C(this).data("next_position", ""),
                            C(this).data("position", t + 1)
                        }),
                        c.children().css({
                            position: "",
                            left: ""
                        }),
                        c.find(".delayed_container_append_dup").remove(),
                        v.mh_animation_running = !1
                    }
                })
            } else if ("previous" == t) {
                var h, _, s = a, p = a, t = a - 1, m = (_ = (h = e.indexOf(i.children().last()[0])) - t) - 1, u = m - t, f = C('<div class="mh-carousel-group prev" style="display: none;left: 100%;position: absolute;top: 0;">').insertBefore(i);
                for (f.css({
                    left: "-" + i.innerWidth(),
                    width: i.innerWidth()
                }).show(),
                x = e.length - 1,
                total = e.length - 1; total <= h && total >= _ && (C(e[x]).addClass("changing_position current_position current_position_" + s),
                C(e[x]).data("current_position", s),
                s--),
                total <= m && total >= u && (C(e[x]).data("prev_position", p),
                C(e[x]).addClass("changing_position prev_position prev_position_" + p),
                C(e[x]).hasClass("current_position") ? (C(e[x]).clone(!0).appendTo(i).addClass("delayed_container_append_dup").attr("id", C(e[x]).attr("id") + "-dup"),
                C(e[x]).addClass("delayed_container_append")) : C(e[x]).addClass("container_append"),
                p--),
                !(p <= 0); x--,
                total--)
                    0 == x && (x = e.length);
                d = w.find(".container_append, .delayed_container_append_dup").sort(function(t, i) {
                    t = parseInt(C(t).data("prev_position")),
                    i = parseInt(C(i).data("prev_position"));
                    return t < i ? -1 : i < t ? 1 : 0
                });
                C(d).show().appendTo(f);
                n = 0;
                f.children().each(function() {
                    C(this).css({
                        position: "absolute",
                        left: n
                    }),
                    n += C(this).outerWidth(!0)
                }),
                i.animate({
                    left: "100%"
                }, {
                    duration: g.slide_duration,
                    complete: function() {
                        w.find(".delayed_container_append").reverse().each(function() {
                            n = C("#" + C(this).attr("id") + "-dup").css("left"),
                            C(this).css({
                                position: "absolute",
                                left: n
                            }),
                            C(this).prependTo(f)
                        }),
                        i.removeClass("active"),
                        i.children().each(function() {
                            position = C(this).data("position"),
                            s = C(this).data("current_position"),
                            C(this).removeClass("position_" + position + " changing_position current_position current_position_" + s),
                            C(this).data("position", ""),
                            C(this).data("current_position", ""),
                            C(this).hide(),
                            C(this).css({
                                position: "",
                                left: ""
                            }),
                            C(this).appendTo(w)
                        }),
                        i.remove()
                    }
                }),
                prev_left = -1 * i.width() - parseInt(y.first().css("marginRight").slice(0, -2)),
                f.addClass("active").css({
                    position: "absolute",
                    top: 0,
                    left: prev_left
                }),
                f.animate({
                    left: "0%"
                }, {
                    duration: g.slide_duration,
                    complete: function() {
                        f.removeClass("prev").addClass("active").css({
                            position: "",
                            width: "",
                            top: "",
                            left: ""
                        }),
                        f.find(".delayed_container_append_dup").remove(),
                        f.find(".changing_position").each(function(t) {
                            position = C(this).data("position"),
                            s = C(this).data("current_position"),
                            p = C(this).data("prev_position"),
                            C(this).removeClass("container_append delayed_container_append position_" + position + " changing_position current_position current_position_" + s + " prev_position prev_position_" + p),
                            C(this).data("current_position", ""),
                            C(this).data("prev_position", ""),
                            position = t + 1,
                            C(this).data("position", position),
                            C(this).addClass("position_" + position)
                        }),
                        f.children().css({
                            position: "",
                            left: ""
                        }),
                        v.mh_animation_running = !1
                    }
                })
            }
        }
    }
    ,
    C.fn.mhc_simple_carousel = function(t) {
        return this.each(function() {
            new C.mhc_simple_carousel(this,t)
        })
    }
    ;
    var k = C(".mhc_slider")
      , I = C(".mhc_carousel")
      , z = C(".mhc_tabs")
      , W = z.find(".mhc_tabs_controls li")
      , j = C(".mhc_section_video_bg")
      , q = C(".mhc_newsletter_button")
      , P = C(".mhc_filterable_portfolio")
      , L = C(".mhc_fullwidth_portfolio")
      , O = C(".mhc_gallery")
      , S = C(".mhc_countdown_timer")
      , H = C(".mhc_lightbox_image")
      , D = C(".mhc_circle_counter")
      , M = C(".mhc_number_counter")
      , Q = C(".mh_parallax_bg")
      , A = C("body").hasClass("rtl")
      , B = null !== navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/)
      , E = (navigator.userAgent.match(/iPad/),
    C(".mhc_shop"))
      , J = C(".mhc_flickity_lightbox")
      , U = C(".mhc_flickity_continer")
      , N = C(window)
      , R = C(".container");
    R.width(),
    document.addEventListener("DOMContentLoaded", function() {
        var t, i;
        function e(t, i) {
            var e = t.find(".mhc_portfolio_items")
              , a = e.width()
              , n = e.find(".mhc_portfolio_item")
              , s = (n.length,
            1600 <= a ? 5 : 1024 <= a ? 4 : 768 <= a ? 3 : 480 <= a ? 2 : 1);
            if (portfolio_item_width = a / s,
            portfolio_item_height = .75 * portfolio_item_width,
            i && e.css({
                height: portfolio_item_height
            }),
            n.css({
                height: portfolio_item_height
            }),
            s !== e.data("columns") && !t.data("columns_setting_up")) {
                t.data("columns_setting_up", !0);
                a = 100 / s + "%";
                if (n.css({
                    width: a
                }),
                e.removeClass("columns-" + e.data("columns")),
                e.addClass("columns-" + s),
                e.data("columns", s),
                !i)
                    return t.data("columns_setting_up", !1);
                e.find(".mhc_carousel_group").length && (n.appendTo(e),
                e.find(".mhc_carousel_group").remove());
                var o = e.data("items")
                  , r = C('<div class="mhc_carousel_group active">').appendTo(e);
                for (n.data("position", ""),
                o.length <= s ? e.find(".mhc-slider-arrows").hide() : e.find(".mhc-slider-arrows").show(),
                position = 1,
                x = 0; x < o.length; x++,
                position++)
                    x < s ? (C(o[x]).show(),
                    C(o[x]).appendTo(r),
                    C(o[x]).data("position", position),
                    C(o[x]).addClass("position_" + position)) : (position = C(o[x]).data("position"),
                    C(o[x]).removeClass("position_" + position),
                    C(o[x]).data("position", ""),
                    C(o[x]).hide());
                t.data("columns_setting_up", !1)
            }
        }
        function w(t) {
            "on" === t.data("auto-rotate") && t.find(".mhc_portfolio_item").length > t.find(".mhc_carousel_group .mhc_portfolio_item").length && !t.hasClass("mh_carousel_hovered") && (mh_carousel_timer = setTimeout(function() {
                t.find(".mhc-arrow-next").click()
            }, t.data("auto-rotate-speed")),
            t.data("mh_carousel_timer", mh_carousel_timer))
        }
        function a() {
            P.each(function() {
                var e = C(this)
                  , t = 1 != A
                  , i = e.find(".mhc_portfolio_items");
                i.imagesLoaded(function() {
                    e.show(),
                    i.masonry({
                        itemSelector: ".mhc_portfolio_item",
                        columnWidth: e.find(".column_width").innerWidth(),
                        gutter: e.find(".gutter_width").innerWidth(),
                        transitionDuration: 0,
                        isOriginLeft: t
                    }),
                    n(e)
                }),
                e.on("click", ".mhc_portfolio_filter a", function(t) {
                    t.preventDefault();
                    t = C(this).data("category-slug");
                    i = C(this).parents(".mhc_filterable_portfolio").find(".mhc_portfolio_items"),
                    "all" == t ? (e.find(".mhc_portfolio_filter a").removeClass("active"),
                    e.find(".mhc_portfolio_filter_all a").addClass("active"),
                    e.find(".mhc_portfolio_item").removeClass("active"),
                    e.find(".mhc_portfolio_item").show(),
                    e.find(".mhc_portfolio_item").addClass("active")) : (e.find(".mhc_portfolio_filter_all").removeClass("active"),
                    e.find(".mhc_portfolio_filter a").removeClass("active"),
                    e.find(".mhc_portfolio_filter_all a").removeClass("active"),
                    C(this).addClass("active"),
                    i.find(".mhc_portfolio_item").hide(),
                    i.find(".mhc_portfolio_item").removeClass("active"),
                    i.find(".mhc_portfolio_item.project_category_" + C(this).data("category-slug")).show(),
                    i.find(".mhc_portfolio_item.project_category_" + C(this).data("category-slug")).addClass("active")),
                    n(e),
                    setTimeout(function() {
                        s(e)
                    }, 500)
                }),
                C(this).on("mh_hashchange", function(t) {
                    var i = t.params;
                    (e = C("#" + t.target.id)).find('.mhc_portfolio_filter a[data-category-slug="' + i[0] + '"]').hasClass("active") || e.find('.mhc_portfolio_filter a[data-category-slug="' + i[0] + '"]').click(),
                    i[1] && setTimeout(function() {
                        e.find(".mhc_portofolio_pagination a.page-" + i[1]).hasClass("active") || e.find(".mhc_portofolio_pagination a.page-" + i[1]).addClass("active").click()
                    }, 300)
                })
            })
        }
        function n(t) {
            var i = 0
              , e = t.find(".mhc_portfolio_items")
              , a = t.find(".mhc_portfolio_filter > a.active").data("category-slug")
              , n = Masonry.data(e[0])
              , s = 1 != A;
            e.masonry("option", {
                columnWidth: t.find(".column_width").innerWidth(),
                gutter: t.find(".gutter_width").innerWidth(),
                isOriginLeft: s
            }),
            t.hasClass("mhc_filterable_portfolio_fullwidth") || (t.find(".mhc_portfolio_item").css({
                minHeight: "",
                height: ""
            }),
            e.masonry(),
            1 < n.cols && (t.find(".mhc_portfolio_item").css({
                minHeight: "",
                height: ""
            }),
            t.find(".mhc_portfolio_item").each(function() {
                C(this).outerHeight() > i && (i = parseInt(C(this).outerHeight()) + parseInt(C(this).css("marginBottom").slice(0, -2)) + parseInt(C(this).css("marginTop").slice(0, -2)))
            }),
            t.find(".mhc_portfolio_item").css({
                height: i,
                minHeight: i
            }))),
            $the_portfolio_visible_items = "all" === a ? t.find(".mhc_portfolio_item") : t.find(".mhc_portfolio_item.project_category_" + a);
            var o = $the_portfolio_visible_items.length
              , r = t.data("posts-number");
            !function(t, i) {
                if ($pagination = t.find(".mhc_portofolio_pagination"),
                $pagination.length && ($pagination.html("<ul></ul>"),
                !(i <= 1))) {
                    $pagination_list = $pagination.children("ul"),
                    $pagination_list.append('<li class="prev" style="display:none;"><a href="#" data-page="prev" class="page-prev">' + mhcomposer.prev + "</a></li>");
                    for (var e = 1; e <= i; e++) {
                        var a = 1 === e ? " active" : ""
                          , n = e === i ? " last-page" : ""
                          , s = 5 <= e ? ' style="display:none;"' : "";
                        $pagination_list.append("<li" + s + ' class="page page-' + e + '"><a href="#" data-page="' + e + '" class="page-' + e + a + n + '">' + e + "</a></li>")
                    }
                    $pagination_list.append('<li class="next"><a href="#" data-page="next" class="page-next">' + mhcomposer.next + "</a></li>")
                }
            }(t, Math.ceil(o / r));
            var o = 0
              , l = 1;
            t.find(".mhc_portfolio_item").data("page", ""),
            $the_portfolio_visible_items.each(function(t) {
                o++,
                0 === parseInt(o % r) ? (C(this).data("page", l),
                l++) : C(this).data("page", l)
            }),
            $the_portfolio_visible_items.filter(function() {
                return 1 == C(this).data("page")
            }).show(),
            $the_portfolio_visible_items.filter(function() {
                return 1 != C(this).data("page")
            }).hide(),
            e.masonry()
        }
        function s(t) {
            var i;
            t.attr("id") && ((i = []).push(t.attr("id")),
            i.push(t.find(".mhc_portfolio_filter > a.active").data("category-slug")),
            t.find(".mhc_portofolio_pagination a.active").length ? i.push(t.find(".mhc_portofolio_pagination a.active").data("page")) : i.push(1),
            $(i = i.join(T)))
        }
        function o(s) {
            var t = s.find(".mhc_gallery_items")
              , i = t.find(".mhc_gallery_item")
              , e = i.length
              , a = t.data("per_page")
              , n = Math.ceil(e / a)
              , o = 1 != A;
            t.masonry("option", {
                columnWidth: s.find(".column_width").innerWidth(),
                gutter: s.find(".gutter_width").innerWidth(),
                isOriginLeft: o
            }),
            function(t) {
                if ($pagination = s.find(".mhc_gallery_pagination"),
                $pagination.length) {
                    if ($pagination.html("<ul></ul>"),
                    t <= 1)
                        return $pagination.hide();
                    $pagination_list = $pagination.children("ul"),
                    $pagination_list.append('<li class="prev" style="display:none;"><a href="#" data-page="prev" class="page-prev">«</a></li>');
                    for (var i = 1; i <= t; i++) {
                        var e = 1 === i ? " active" : ""
                          , a = i === t ? " last-page" : ""
                          , n = 5 <= i ? ' style="display:none;"' : "";
                        $pagination_list.append("<li" + n + ' class="page page-' + i + '"><a href="#" data-page="' + i + '" class="page-' + i + e + a + '">' + i + "</a></li>")
                    }
                    $pagination_list.append('<li class="next"><a href="#" data-page="next" class="page-next">»</a></li>')
                }
            }(n);
            var e = 0
              , r = 1;
            i.data("page", ""),
            i.each(function(t) {
                e++,
                0 === parseInt(e % a) ? (C(this).data("page", r),
                r++) : C(this).data("page", r)
            });
            i.filter(function() {
                return 1 == C(this).data("page")
            }).show();
            i.filter(function() {
                return 1 != C(this).data("page")
            }).hide(),
            t.masonry()
        }
        function r(t) {
            var i = 36e5 * t.data("gmt-offset")
              , e = new Date(t.data("end-date")).getTime();
            e += i;
            var a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][(a = new Date).getMonth()] + " " + a.getDate() + " " + a.getFullYear() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds()
              , a = (e - (a = new Date(a).getTime() + i)) / 1e3;
            days = parseInt(a / 86400),
            days = 0 < days ? days : 0,
            a %= 86400,
            hours = parseInt(a / 3600),
            hours = 0 < hours ? hours : 0,
            a %= 3600,
            minutes = parseInt(a / 60),
            minutes = 0 < minutes ? minutes : 0,
            seconds = parseInt(a % 60),
            seconds = 0 < seconds ? seconds : 0,
            0 == days ? t.find(".days > .value").parent(".section").hasClass("zero") || t.find(".days > .value").html("000").parent(".section").addClass("zero").next().addClass("zero") : (days_slice = 3 <= days.toString().length ? days.toString().length : 3,
            t.find(".days > .value").html(("000" + days).slice(-days_slice))),
            0 == days && 0 == hours ? t.find(".hours > .value").parent(".section").hasClass("zero") || t.find(".hours > .value").html("00").parent(".section").addClass("zero").next().addClass("zero") : t.find(".hours > .value").html(("0" + hours).slice(-2)),
            0 == days && 0 == hours && 0 == minutes ? t.find(".minutes > .value").parent(".section").hasClass("zero") || t.find(".minutes > .value").html("00").parent(".section").addClass("zero").next().addClass("zero") : t.find(".minutes > .value").html(("0" + minutes).slice(-2)),
            0 == days && 0 == hours && 0 == minutes && 0 == seconds ? t.find(".seconds > .value").parent(".section").hasClass("zero") || t.find(".seconds > .value").html("00").parent(".section").addClass("zero") : t.find(".seconds > .value").html(("0" + seconds).slice(-2))
        }
        function l() {
            var t = C(this)
              , i = t.offset().top
              , i = "translate(0, " + .3 * (N.scrollTop() + N.height() - i) + "px)";
            t.find(".mh_parallax_bg").css({
                "-webkit-transform": i,
                "-moz-transform": i,
                "-ms-transform": i,
                transform: i
            })
        }
        function d() {
            var t = C(this)
              , i = .3 * N.height() + t.innerHeight();
            t.find(".mh_parallax_bg").css({
                height: i
            })
        }
        C(".mhc_text_color_light").next(".mh-loveit-container").addClass("mhc_text_color_light"),
        C(".mh_button_fx").each(function() {
            C(this).mouseleave(function() {
                C(this).find(".mhc_promo_button").toggleClass("mh-animate")
            })
        }),
        C(".mhc_section:last").hasClass("bottom-separator") && C("#main-footer").css("paddingTop", "90px"),
        B && C(".mhc_section_video_bg").each(function() {
            C(this).css("visibility", "hidden").closest(".mhc_preload").removeClass("mhc_preload")
        }),
        j.length && j.find("video").mediaelementplayer({
            pauseOtherPlayers: !1,
            success: function(t, i) {
                t.addEventListener("loadeddata", function() {
                    h(C(i)),
                    _(C(i))
                }, !1),
                t.addEventListener("canplay", function() {
                    C(i).closest(".mhc_preload").removeClass("mhc_preload")
                }, !1)
            }
        }),
        J.length && (t = C.magnificPopup.instance,
        A ? (C("body").on("swipeleft", ".mfp-container", function() {
            t.prev()
        }),
        C("body").on("swiperight", ".mfp-container", function() {
            t.next()
        })) : (C("body").on("swiperight", ".mfp-container", function() {
            t.prev()
        }),
        C("body").on("swipeleft", ".mfp-container", function() {
            t.next()
        })),
        J.each(function() {
            C(this).magnificPopup({
                delegate: "a",
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
                    opener: function(t) {
                        return t.find("img")
                    }
                }
            })
        })),
        H.length && H.magnificPopup({
            type: "image",
            removalDelay: 500,
            mainClass: "mfp-fade"
        }),
        k.length && k.each(function() {
            var t = C(this)
              , i = {
                fade_speed: 700,
                slide: t.hasClass("mhc_gallery") ? ".mhc_gallery_item" : ".mhc_slide"
            };
            t.hasClass("mhc_slider_no_arrows") && (i.use_arrows = !1),
            t.hasClass("mhc_slider_no_pagination") && (i.use_controls = !1),
            t.hasClass("mh_slider_auto") && (i.slideshow = !0,
            mh_slider_autospeed = /mh_slider_speed_(\d+)/g.exec(t.attr("class")),
            i.slideshow_speed = mh_slider_autospeed[1]),
            t.parent().hasClass("mhc_video_slider") && (i.controls_below = !0,
            i.append_controls_to = t.parent(),
            setTimeout(function() {
                C(".mhc_preload").removeClass("mhc_preload")
            }, 500)),
            t.hasClass("mhc_slider_carousel") && (i.use_carousel = !0),
            t.mhc_simple_slider(i)
        }),
        I.length && I.each(function() {
            C(this).mhc_simple_carousel({
                fade_speed: 1e3
            })
        }),
        L.length && L.each(function() {
            var t = C(this)
              , i = t.find(".mhc_portfolio_items");
            i.data("items", i.find(".mhc_portfolio_item").toArray()),
            t.data("columns_setting_up", !1),
            t.hasClass("mhc_fullwidth_portfolio_carousel") ? (i.prepend('<div class="mhc-slider-arrows"><a class="mhc-arrow-prev" href="#"><span>' + mhcomposer.previous_text + '</span></a><a class="mhc-arrow-next" href="#"><span>' + mhcomposer.next_text + "</span></a></div>"),
            e(t, !0),
            w(t),
            A ? (t.on("swipeleft", function() {
                C(this).find(".mhc-arrow-prev").click()
            }),
            t.on("swiperight", function() {
                C(this).find(".mhc-arrow-next").click()
            })) : (t.on("swiperight", function() {
                C(this).find(".mhc-arrow-prev").click()
            }),
            t.on("swipeleft", function() {
                C(this).find(".mhc-arrow-next").click()
            })),
            t.hover(function() {
                C(this).addClass("mh_carousel_hovered"),
                void 0 !== C(this).data("mh_carousel_timer") && clearInterval(C(this).data("mh_carousel_timer"))
            }, function() {
                C(this).removeClass("mh_carousel_hovered"),
                w(C(this))
            }),
            t.data("carouseling", !1),
            t.on("click", ".mhc-slider-arrows a", function(t) {
                var i = C(this).parents(".mhc_fullwidth_portfolio")
                  , e = i.find(".mhc_portfolio_items")
                  , a = (e.find(".mhc_portfolio_item"),
                e.find(".mhc_carousel_group.active"))
                  , n = e.data("items")
                  , s = e.data("columns")
                  , o = a.innerWidth() / s
                  , r = 100 / s + "%";
                if (t.preventDefault(),
                !i.data("carouseling"))
                    if (i.data("carouseling", !0),
                    a.children().each(function() {
                        C(this).css({
                            width: C(this).innerWidth() + 1,
                            position: "absolute",
                            right: C(this).innerWidth() * (C(this).data("position") - 1)
                        })
                    }),
                    C(this).hasClass("mhc-arrow-next")) {
                        var l = 1
                          , c = 1
                          , d = m = (p = n.indexOf(a.children().first()[0])) + s
                          , h = d + s
                          , _ = C('<div class="mhc_carousel_group next" style="display: none;right: 100%;position: absolute;top: 0;">').insertAfter(a);
                        for (_.css({
                            width: a.innerWidth()
                        }).show(),
                        x = 0,
                        total = 0; total >= p && total < m && (C(n[x]).addClass("changing_position current_position current_position_" + l),
                        C(n[x]).data("current_position", l),
                        l++),
                        total >= d && total < h && (C(n[x]).data("next_position", c),
                        C(n[x]).addClass("changing_position next_position next_position_" + c),
                        C(n[x]).hasClass("current_position") ? (C(n[x]).clone(!0).appendTo(a).hide().addClass("delayed_container_append_dup").attr("id", C(n[x]).attr("id") + "-dup"),
                        C(n[x]).addClass("delayed_container_append")) : C(n[x]).addClass("container_append"),
                        c++),
                        !(s < c); x++,
                        total++)
                            x >= n.length - 1 && (x = -1);
                        sorted = e.find(".container_append, .delayed_container_append_dup").sort(function(t, i) {
                            t = parseInt(C(t).data("next_position")),
                            i = parseInt(C(i).data("next_position"));
                            return t < i ? -1 : i < t ? 1 : 0
                        }),
                        C(sorted).show().appendTo(_),
                        _.children().each(function() {
                            C(this).css({
                                width: o,
                                position: "absolute",
                                right: o * (C(this).data("next_position") - 1)
                            })
                        }),
                        a.animate({
                            right: "-100%"
                        }, {
                            duration: 700,
                            complete: function() {
                                e.find(".delayed_container_append").each(function() {
                                    C(this).css({
                                        width: o,
                                        position: "absolute",
                                        right: o * (C(this).data("next_position") - 1)
                                    }),
                                    C(this).appendTo(_)
                                }),
                                a.removeClass("active"),
                                a.children().each(function() {
                                    position = C(this).data("position"),
                                    l = C(this).data("current_position"),
                                    C(this).removeClass("position_" + position + " changing_position current_position current_position_" + l),
                                    C(this).data("position", ""),
                                    C(this).data("current_position", ""),
                                    C(this).hide(),
                                    C(this).css({
                                        position: "",
                                        width: "",
                                        right: ""
                                    }),
                                    C(this).appendTo(e)
                                }),
                                a.remove(),
                                w(i)
                            }
                        }),
                        _.addClass("active").css({
                            position: "absolute",
                            top: 0,
                            right: "100%"
                        }),
                        _.animate({
                            right: "0%"
                        }, {
                            duration: 700,
                            complete: function() {
                                setTimeout(function() {
                                    _.removeClass("next").addClass("active").css({
                                        position: "",
                                        width: "",
                                        top: "",
                                        right: ""
                                    }),
                                    _.find(".delayed_container_append_dup").remove(),
                                    _.find(".changing_position").each(function(t) {
                                        position = C(this).data("position"),
                                        l = C(this).data("current_position"),
                                        c = C(this).data("next_position"),
                                        C(this).removeClass("container_append delayed_container_append position_" + position + " changing_position current_position current_position_" + l + " next_position next_position_" + c),
                                        C(this).data("current_position", ""),
                                        C(this).data("next_position", ""),
                                        C(this).data("position", t + 1)
                                    }),
                                    _.children().css({
                                        position: "",
                                        width: r,
                                        right: ""
                                    }),
                                    i.data("carouseling", !1)
                                }, 100)
                            }
                        })
                    } else {
                        var p, m, l = s, u = s, t = s - 1, f = (m = (p = n.indexOf(a.children().last()[0])) - t) - 1, g = f - t, v = C('<div class="mhc_carousel_group prev" style="display: none;right: 100%;position: absolute;top: 0;">').insertBefore(a);
                        for (v.css({
                            right: "-" + a.innerWidth(),
                            width: a.innerWidth()
                        }).show(),
                        x = n.length - 1,
                        total = n.length - 1; total <= p && total >= m && (C(n[x]).addClass("changing_position current_position current_position_" + l),
                        C(n[x]).data("current_position", l),
                        l--),
                        total <= f && total >= g && (C(n[x]).data("prev_position", u),
                        C(n[x]).addClass("changing_position prev_position prev_position_" + u),
                        C(n[x]).hasClass("current_position") ? (C(n[x]).clone(!0).appendTo(a).addClass("delayed_container_append_dup").attr("id", C(n[x]).attr("id") + "-dup"),
                        C(n[x]).addClass("delayed_container_append")) : C(n[x]).addClass("container_append"),
                        u--),
                        !(u <= 0); x--,
                        total--)
                            0 == x && (x = n.length);
                        sorted = e.find(".container_append, .delayed_container_append_dup").sort(function(t, i) {
                            t = parseInt(C(t).data("prev_position")),
                            i = parseInt(C(i).data("prev_position"));
                            return t < i ? -1 : i < t ? 1 : 0
                        }),
                        C(sorted).show().appendTo(v),
                        v.children().each(function() {
                            C(this).css({
                                width: o,
                                position: "absolute",
                                right: o * (C(this).data("prev_position") - 1)
                            })
                        }),
                        a.animate({
                            right: "100%"
                        }, {
                            duration: 700,
                            complete: function() {
                                e.find(".delayed_container_append").reverse().each(function() {
                                    C(this).css({
                                        width: o,
                                        position: "absolute",
                                        right: o * (C(this).data("prev_position") - 1)
                                    }),
                                    C(this).prependTo(v)
                                }),
                                a.removeClass("active"),
                                a.children().each(function() {
                                    position = C(this).data("position"),
                                    l = C(this).data("current_position"),
                                    C(this).removeClass("position_" + position + " changing_position current_position current_position_" + l),
                                    C(this).data("position", ""),
                                    C(this).data("current_position", ""),
                                    C(this).hide(),
                                    C(this).css({
                                        position: "",
                                        width: "",
                                        right: ""
                                    }),
                                    C(this).appendTo(e)
                                }),
                                a.remove()
                            }
                        }),
                        v.addClass("active").css({
                            position: "absolute",
                            top: 0,
                            right: "-100%"
                        }),
                        v.animate({
                            right: "0%"
                        }, {
                            duration: 700,
                            complete: function() {
                                setTimeout(function() {
                                    v.removeClass("prev").addClass("active").css({
                                        position: "",
                                        width: "",
                                        top: "",
                                        right: ""
                                    }),
                                    v.find(".delayed_container_append_dup").remove(),
                                    v.find(".changing_position").each(function(t) {
                                        position = C(this).data("position"),
                                        l = C(this).data("current_position"),
                                        u = C(this).data("prev_position"),
                                        C(this).removeClass("container_append delayed_container_append position_" + position + " changing_position current_position current_position_" + l + " prev_position prev_position_" + u),
                                        C(this).data("current_position", ""),
                                        C(this).data("prev_position", ""),
                                        position = t + 1,
                                        C(this).data("position", position),
                                        C(this).addClass("position_" + position)
                                    }),
                                    v.children().css({
                                        position: "",
                                        width: r,
                                        right: ""
                                    }),
                                    i.data("carouseling", !1)
                                }, 100)
                            }
                        })
                    }
            })) : e(t, !1)
        }),
        C(".mhc_section_video").length && (window._wpmejsSettings.pauseOtherPlayers = !1),
        P.length && (window.mhc_load_init_event ? a() : C(window).load(function() {
            a()
        }),
        P.on("click", ".mhc_portofolio_pagination a", function(t) {
            t.preventDefault();
            var i = C(this).data("page")
              , e = C(this).parents(".mhc_filterable_portfolio")
              , t = e.find(".mhc_portfolio_items");
            y(e, !1, 800),
            C(this).hasClass("page-prev") ? i = parseInt(C(this).parents("ul").find("a.active").data("page")) - 1 : C(this).hasClass("page-next") && (i = parseInt(C(this).parents("ul").find("a.active").data("page")) + 1),
            C(this).parents("ul").find("a").removeClass("active"),
            C(this).parents("ul").find("a.page-" + i).addClass("active");
            var a = C(this).parents("ul").find("a.page-" + i).parent().index()
              , n = C(this).parents("ul").find("li.page").length;
            C(this).parent().nextUntil(".page-" + (a + 3)).show(),
            C(this).parent().prevUntil(".page-" + (a - 3)).show(),
            C(this).parents("ul").find("li.page").each(function(t) {
                C(this).hasClass("prev") || C(this).hasClass("next") || (t < a - 3 || a + 1 < t ? C(this).hide() : C(this).show(),
                (n - a <= 2 && n - t <= 5 || a <= 3 && t <= 4) && C(this).show())
            }),
            1 < i ? C(this).parents("ul").find("li.prev").show() : C(this).parents("ul").find("li.prev").hide(),
            C(this).parents("ul").find("a.active").hasClass("last-page") ? C(this).parents("ul").find("li.next").hide() : C(this).parents("ul").find("li.next").show(),
            e.find(".mhc_portfolio_item").hide(),
            e.find(".mhc_portfolio_item").filter(function(t) {
                return C(this).data("page") === i
            }).show(),
            t.masonry(),
            setTimeout(function() {
                s(e)
            }, 500)
        })),
        U.length && (i = 1 == A,
        U.each(function() {
            var t = C(this).find(".mhc_flickity");
            t.show(),
            t.flickity({
                cellAlign: t.data("align"),
                rightToLeft: i,
                imagesLoaded: !0,
                freeScroll: !0,
                wrapAround: "on" == t.data("infinite"),
                setGallerySize: "on" == t.data("setsize"),
                autoPlay: "on" == t.data("auto") && "" !== t.data("speed") && t.data("speed"),
                prevNextButtons: "on" == t.data("arrows"),
                pageDots: "on" == t.data("pagination"),
                arrowShape: "M75.1,92.3a4,4,0,0,1,0,5.6,3.9,3.9,0,0,1-5.5,0L24.9,52.8a4,4,0,0,1,0-5.6L69.5,2.2a3.9,3.9,0,0,1,5.5,0,4,4,0,0,1,0,5.6L34.4,50,75.1,92.3h0Z"
            })
        })),
        O.length && (O.each(function() {
            var e = C(this);
            e.hasClass("mhc_gallery_grid") && (e.imagesLoaded(function() {
                e.show(),
                e.find(".mhc_gallery_items").masonry({
                    itemSelector: ".mhc_gallery_item",
                    columnWidth: e.find(".column_width").innerWidth(),
                    gutter: e.find(".gutter_width").innerWidth(),
                    transitionDuration: 0
                }),
                o(e)
            }),
            e.on("mh_hashchange", function(t) {
                var i = t.params;
                e = C("#" + t.target.id),
                (page_to = i[0]) && setTimeout(function() {
                    e.find(".mhc_gallery_pagination a.page-" + page_to).hasClass("active") || e.find(".mhc_gallery_pagination a.page-" + page_to).addClass("active").click()
                }, 300)
            }))
        }),
        O.data("paginating", !1),
        O.on("click", ".mhc_gallery_pagination a", function(t) {
            t.preventDefault();
            var i, e, a = C(this).data("page"), n = C(this).parents(".mhc_gallery"), s = n.find(".mhc_gallery_items"), t = s.find(".mhc_gallery_item");
            n.data("paginating") || (n.data("paginating", !0),
            C(this).hasClass("page-prev") ? a = parseInt(C(this).parents("ul").find("a.active").data("page")) - 1 : C(this).hasClass("page-next") && (a = parseInt(C(this).parents("ul").find("a.active").data("page")) + 1),
            C(this).parents("ul").find("a").removeClass("active"),
            C(this).parents("ul").find("a.page-" + a).addClass("active"),
            i = C(this).parents("ul").find("a.page-" + a).parent().index(),
            e = C(this).parents("ul").find("li.page").length,
            C(this).parent().nextUntil(".page-" + (i + 3)).show(),
            C(this).parent().prevUntil(".page-" + (i - 3)).show(),
            C(this).parents("ul").find("li.page").each(function(t) {
                C(this).hasClass("prev") || C(this).hasClass("next") || (t < i - 3 || i + 1 < t ? C(this).hide() : C(this).show(),
                (e - i <= 2 && e - t <= 5 || i <= 3 && t <= 4) && C(this).show())
            }),
            1 < a ? C(this).parents("ul").find("li.prev").show() : C(this).parents("ul").find("li.prev").hide(),
            C(this).parents("ul").find("a.active").hasClass("last-page") ? C(this).parents("ul").find("li.next").hide() : C(this).parents("ul").find("li.next").show(),
            t.hide(),
            t.filter(function(t) {
                return C(this).data("page") === a
            }).show(),
            s.masonry(),
            n.data("paginating", !1),
            setTimeout(function() {
                var t, i;
                (t = n).attr("id") && ((i = []).push(t.attr("id")),
                t.find(".mhc_gallery_pagination a.active").length ? i.push(t.find(".mhc_gallery_pagination a.active").data("page")) : i.push(1),
                $(i = i.join(T)))
            }, 100),
            C("html, body").animate({
                scrollTop: n.offset().top - 200
            }, 200))
        })),
        C(".mh_magazine_grid").length && (i = 1 != A,
        C(".mh_magazine_grid").each(function() {
            var t = C(this);
            t.imagesLoaded(function() {
                t.fadeTo("fast", 1),
                C(".mh_magazine_grid_container").masonry({
                    columnWidth: ".mh_magazine_grid_sizer",
                    itemSelector: ".mh_magazine_grid_item",
                    percentPosition: !0,
                    isOriginLeft: i,
                    transitionDuration: 0
                })
            })
        })),
        S.length && S.each(function() {
            var t, i = C(this);
            ((t = i).closest(".mhc_column_3_8").length || t.children(".mhc_countdown_timer_container").width() <= 250) && (t.find(".hours .label").html(t.find(".hours").data("short")),
            t.find(".minutes .label").html(t.find(".minutes").data("short")),
            t.find(".seconds .label").html(t.find(".seconds").data("short"))),
            r(i),
            setInterval(function() {
                r(i)
            }, 1e3)
        }),
        z.length && (z.mhc_simple_slider({
            use_controls: !1,
            use_arrows: !1,
            slide: ".mhc_all_tabs > div",
            tabs_animation: !0
        }).on("mh_hashchange", function(t) {
            var i = t.params
              , t = C("#" + t.target.id)
              , i = i[0];
            t.find(".mhc_tabs_controls li").eq(i).hasClass("mhc_tab_active") || t.find(".mhc_tabs_controls li").eq(i).click()
        }),
        W.click(function() {
            var t = C(this)
              , i = t.closest(".mhc_tabs").data("mhc_simple_slider");
            return i.mh_animation_running || (t.addClass("mhc_tab_active").siblings().removeClass("mhc_tab_active"),
            i.data("mhc_simple_slider").mh_slider_move_to(t.index()),
            t.closest(".mhc_tabs").attr("id") && ((i = []).push(t.closest(".mhc_tabs").attr("id")),
            i.push(t.index()),
            $(i = i.join(T)))),
            !1
        })),
        D.length && (window.mhc_circle_counter_init = function(t, i) {
            0 !== t.width() && t.easyPieChart({
                animate: {
                    duration: 1800,
                    enabled: !0
                },
                size: 0 !== t.width() ? t.width() : 10,
                barColor: t.data("bar-bg-color"),
                trackColor: t.data("bar-bg-color"),
                trackAlpha: .2,
                scaleColor: !1,
                lineWidth: t.data("bar-width"),
                lineCap: C("body").hasClass("mh_rounded_corners") || C("body").hasClass("mh_capsule_corners") ? "round" : "butt",
                onStart: function() {
                    C(this.el).find(".percent p").css({
                        visibility: "visible"
                    })
                },
                onStep: function(t, i, e) {
                    C(this.el).find(".percent-value").text(Math.round(parseInt(e)))
                },
                onStop: function(t, i) {
                    C(this.el).find(".percent-value").text(C(this.el).data("number-value"))
                }
            })
        }
        ,
        window.mhc_reinit_circle_counters = function(t) {
            t.each(function() {
                var i = C(this);
                window.mhc_circle_counter_init(i, !1),
                i.on("containerWidthChanged", function(t) {
                    (i = C(t.target)).find("canvas").remove(),
                    i.removeData("easyPieChart"),
                    window.mhc_circle_counter_init(i, !0)
                })
            })
        }
        ,
        window.mhc_reinit_circle_counters(D)),
        M.length && (window.mhc_reinit_number_counters = function(t) {
            t.each(function() {
                C(this).easyPieChart({
                    animate: {
                        duration: 2400,
                        enabled: !0
                    },
                    size: 0,
                    trackColor: !1,
                    scaleColor: !1,
                    lineWidth: 0,
                    onStart: function() {
                        C(this.el).find(".percent p").css({
                            visibility: "visible"
                        })
                    },
                    onStep: function(t, i, e) {
                        e != i && C(this.el).find(".percent-value").text(Math.round(parseInt(e)))
                    },
                    onStop: function(t, i) {
                        C(this.el).find(".percent-value").text(C(this.el).data("number-value"))
                    }
                })
            })
        }
        ,
        window.mhc_reinit_number_counters(M)),
        E.length && E.each(function() {
            var t = C(this)
              , i = t.data("icon") || "";
            if ("" === i)
                return !0;
            t.find(".mh_overlay").attr("data-icon", i).addClass("mhc_data_icon")
        }),
        C(".mhc_toggle_title").click(function() {
            var t, i, e = C(this).closest(".mhc_toggle"), a = e.parents(".mhc_section"), n = e.find(".mhc_toggle_content"), s = e.closest(".mhc_accordion"), o = s.length, r = s.hasClass("mhc_accordion_toggling"), l = C(window).scrollTop(), c = 0;
            if (o) {
                if (e.hasClass("mhc_toggle_open") || r)
                    return !1;
                s.addClass("mhc_accordion_toggling"),
                t = e.siblings(".mhc_toggle_open")
            }
            n.is(":animated") || (n.slideToggle(700, function() {
                e.hasClass("mhc_toggle_close") ? e.removeClass("mhc_toggle_close").addClass("mhc_toggle_open") : e.removeClass("mhc_toggle_open").addClass("mhc_toggle_close"),
                a.hasClass("mhc_section_parallax") && !a.children().hasClass("mhc_parallax_css") && C.proxy(d, a)()
            }),
            o && t.find(".mhc_toggle_content").slideToggle(700, function() {
                t.removeClass("mhc_toggle_open").addClass("mhc_toggle_close"),
                s.removeClass("mhc_accordion_toggling"),
                i = e.offset(),
                C("#wpadminbar").length && (c += C("#wpadminbar").height()),
                C("#top-header").length && (c += C("#top-header").height()),
                C("#main-header").length && (C("body").hasClass("mh_vertical_nav") ? c += 0 : c += C("#main-header").height()),
                l + c > i.top && C("html, body").animate({
                    scrollTop: i.top - c - 50
                })
            }))
        });
        var c = C(".mhc_contact_form_container");
        function h(t) {
            $element = void 0 !== t ? t.closest(".mhc_section_video_bg") : C(".mhc_section_video_bg"),
            $element.each(function() {
                var t, i = C(this), e = void 0 !== i.attr("data-ratio") ? i.attr("data-ratio") : i.find("video").attr("width") / i.find("video").attr("height"), a = i.find(".mejs-video, video, object").css("margin", 0), n = i.closest(".mhc_section_video").length ? i.closest(".mhc_section_video") : i.closest(".mhc_slides"), s = n.width(), n = n.innerHeight();
                void 0 === i.attr("data-ratio") && i.attr("data-ratio", e),
                e = s / n < e ? (t = n * e,
                n) : (t = s) / e,
                a.width(t).height(e)
            })
        }
        function _(i) {
            $element = void 0 !== i ? i : C(".mhc_section_video_bg .mejs-video"),
            $element.each(function() {
                var t = 0 - C(this).width() / 2;
                if (C(this).css("margin-left", t),
                void 0 !== i && i.closest(".mhc_slider").length && !i.closest(".mhc_first_video").length)
                    return !1
            })
        }
        function p() {
            k.length && k.each(function() {
                var t = C(this).find(".mhc_slide")
                  , i = t.find(".mhc_container")
                  , e = 0;
                i.css("min-height", 0),
                t.each(function() {
                    var t = C(this).innerHeight();
                    e < t && (e = t)
                }),
                i.css("min-height", e)
            })
        }
        c.length && c.each(function() {
            var t = C(this)
              , i = t.find("form")
              , e = (t.find("input.mhc_contact_submit"),
            i.find("input[type=text],textarea"))
              , p = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/
              , m = void 0 !== t.data("redirect_url") ? t.data("redirect_url") : "";
            e.focus(function() {
                C(this).val() === C(this).siblings("label").text() && C(this).val("")
            }),
            e.blur(function() {
                "" === C(this).val() && C(this).val(C(this).siblings("label").text())
            }),
            i.on("submit", function(t) {
                var i, e, a = C(this), n = a.find("input[type=text],textarea"), o = !1, s = a.closest(".mhc_contact_form_container").find(".mhc-contact-message"), r = "", l = "", c = a.closest(".mhc_contact_form_container"), d = a.find(".mhc_contact_captcha"), h = void 0 !== c.data("form_unique_num") ? c.data("form_unique_num") : 0, _ = [], r = "<ul>";
                n.removeClass("mh_contact_error"),
                n.each(function() {
                    var t = C(this)
                      , i = t.val()
                      , e = t.siblings("label").text()
                      , a = void 0 !== t.data("field_type") ? t.data("field_type") : "text"
                      , n = void 0 !== t.data("required_mark") ? t.data("required_mark") : "not_required"
                      , s = void 0 !== t.data("original_id") ? t.data("original_id") : "";
                    void 0 !== t.attr("id") && _.push({
                        field_id: t.attr("id"),
                        original_id: s,
                        required_mark: n,
                        field_type: a,
                        field_label: e
                    }),
                    "required" !== n || "" !== i && e !== i || (t.addClass("mh_contact_error"),
                    o = !0,
                    "" === (n = e) && (n = mhcomposer.captcha),
                    l += "<li>" + n + "</li>"),
                    "email" !== a || "" === i || e === i || p.test(i) || (t.addClass("mh_contact_error"),
                    o = !0,
                    p.test(i) || (r += "<li>" + mhcomposer.invalid + "</li>"))
                }),
                d.length && "" !== d.val() && (i = parseInt(d.data("first_digit")),
                e = parseInt(d.data("second_digit")),
                parseInt(d.val()) !== i + e && (r += "<li>" + mhcomposer.wrong_captcha + "</li>",
                o = !0,
                i = Math.floor(15 * Math.random() + 1),
                e = Math.floor(15 * Math.random() + 1),
                d.data("first_digit", i),
                d.data("second_digit", e),
                a.find(".mhc_contact_captcha_quiz").empty().append(i + " + " + e))),
                o || (i = C(this).attr("action"),
                (e = C(this).serializeArray()).push({
                    name: "mhc_contact_email_fields_" + h,
                    value: JSON.stringify(_)
                }),
                c.fadeTo("fast", .2).load(i + " #" + a.closest(".mhc_contact_form_container").attr("id"), e, function(t) {
                    C(t).find(".mhc_contact_error_text").length || "" !== m && (window.location.href = m),
                    c.fadeTo("fast", 1)
                })),
                r += "</ul>",
                "" !== l && ("<ul></ul>" != r && (r = '<p class="mh_normal_padding">' + mhcomposer.contact_error + "</p>" + r),
                l = "<ul>" + l + "</ul>",
                l = "<p>" + mhcomposer.fill_message + "</p>" + l,
                r = l + r),
                "<ul></ul>" != r && (s.html(r),
                c.parents(".mhc_section_parallax").length && c.parents(".mhc_section_parallax").each(function() {
                    C(this).children(".mh_parallax_bg").hasClass("mhc_parallax_css") || N.trigger("resize")
                })),
                t.preventDefault()
            })
        }),
        C(".mhc_video .mhc_video_overlay, .mhc_video_wrap .mhc_video_overlay").click(function() {
            return C(this).closest(".mhc_video_overlay").fadeTo(500, 0, function() {
                C(this).css("display", "none")
            }),
            !1
        });
        var m, u = C("#commentform");
        function f(t) {
            t.find("input:text, textarea").each(function(t, i) {
                var e = jQuery(i)
                  , a = e.siblings("label")
                  , i = e.siblings("label").text();
                a.length && (a.hide(),
                e.siblings("span.required") && (i += e.siblings("span.required").text(),
                e.siblings("span.required").hide()),
                e.val(i))
            }).bind("focus", function() {
                var t = jQuery(this).siblings("label").text();
                jQuery(this).siblings("span.required").length && (t += jQuery(this).siblings("span.required").text()),
                jQuery(this).val() === t && jQuery(this).val("")
            }).bind("blur", function() {
                var t = jQuery(this).siblings("label").text();
                jQuery(this).siblings("span.required").length && (t += jQuery(this).siblings("span.required").text()),
                "" === jQuery(this).val() && jQuery(this).val(t)
            })
        }
        function g(t) {
            t.find("input:text, textarea").each(function(t, i) {
                var e = jQuery(i)
                  , i = e.siblings("label");
                e.siblings("label").text();
                i.length && i.is(":hidden") && i.text() == e.val() && e.val("")
            })
        }
        function v() {
            var t;
            mh_fix_fullscreen_section(),
            mh_force_match_heights(),
            C("section.mhc_fullscreen").each(function() {
                var t = C(this);
                C.proxy(mh_calc_fullscreen_section, t)()
            }),
            A && C(".chosen-container").addClass("chosen-rtl"),
            C(".mhc_blog_grid").length && (t = 1 != A,
            C(".mhc_blog_grid").masonry({
                itemSelector: ".mhc_post",
                isOriginLeft: t
            })),
            setTimeout(function() {
                C(".mhc_preload").removeClass("mhc_preload")
            }, 500),
            C.fn.hashchange && (C(window).hashchange(function() {
                !function(t) {
                    if (-1 !== t.indexOf(b, 0)) {
                        modules = t.split(b);
                        for (var i = 0; i < modules.length; i++) {
                            var e = modules[i].split(T)
                              , a = e[0];
                            e.shift(),
                            C("#" + a).length && C("#" + a).trigger({
                                type: "mh_hashchange",
                                params: e
                            })
                        }
                    } else {
                        a = (e = t.split(T))[0];
                        e.shift(),
                        C("#" + a).length && C("#" + a).trigger({
                            type: "mh_hashchange",
                            params: e
                        })
                    }
                }(window.location.hash.substring(1))
            }),
            C(window).hashchange()),
            C("p.demo_store").length && C("#footer-bottom").css("margin-bottom", C("p.demo_store").innerHeight()),
            Q.length && !B && Q.each(function() {
                var t;
                C(this).hasClass("mhc_parallax_css") || (t = C(this).parent(),
                C.proxy(d, t)(),
                C.proxy(l, t)(),
                N.on("scroll", C.proxy(l, t)),
                N.on("resize", C.proxy(d, t)),
                N.on("resize", C.proxy(l, t)),
                t.find(".mh-learn-more .heading-more").click(function() {
                    setTimeout(function() {
                        C.proxy(d, t)()
                    }, 300)
                }))
            }),
            window.mhc_reinint_waypoint_modules()
        }
        function y(t, i, e, a) {
            var n = C(window).width();
            $menu_offset = C("body").hasClass("mh_fixed_nav") && 980 < n ? (C("#top-header").outerHeight() || 0) + (C("#main-header").outerHeight() || 0) - 1 : -1,
            C("#wpadminbar").length && 600 < n && ($menu_offset += C("#wpadminbar").outerHeight() || 0),
            $scroll_position = i ? 0 : t.offset().top - $menu_offset,
            void 0 === a && (a = "swing"),
            C("html, body").animate({
                scrollTop: $scroll_position
            }, e, a)
        }
        f(u),
        f(C(".mhc_newsletter_form")),
        u.submit(function() {
            g(u)
        }),
        C(".mhc_fullwidth_menu").each(function() {
            var t = C(this)
              , i = t.data("bg_color");
            i && t.find(".fullwidth-menu-nav ul ul").css({
                "background-color": i
            })
        }),
        q.click(function(t) {
            if (!C(this).closest(".mhc_login_form").length && !C(this).closest(".mhc_feedburner_form").length) {
                t.preventDefault();
                var i = C(this).closest(".mhc_newsletter")
                  , e = i.find('input[name="mhc_signup_firstname"]')
                  , a = i.find('input[name="mhc_signup_lastname"]')
                  , n = i.find('input[name="mhc_signup_email"]')
                  , t = i.find('input[name="mhc_signup_list_id"]').val()
                  , s = i.find(".mhc_newsletter_result").hide()
                  , o = C(this).closest(".mhc_newsletter_form").data("service") || "mailchimp";
                if (e.removeClass("mhc_signup_error"),
                a.removeClass("mhc_signup_error"),
                n.removeClass("mhc_signup_error"),
                g(C(this).closest(".mhc_newsletter_form")),
                "" == e.val() || "" == n.val() || "" === t)
                    return "" == e.val() && e.addClass("mhc_signup_error"),
                    "" == n.val() && n.addClass("mhc_signup_error"),
                    "" == e.val() && e.val(e.siblings(".mhc_contact_form_label").text()),
                    "" == a.val() && a.val(a.siblings(".mhc_contact_form_label").text()),
                    void ("" == n.val() && n.val(n.siblings(".mhc_contact_form_label").text()));
                C.ajax({
                    type: "POST",
                    url: mhcomposer.ajaxurl,
                    dataType: "json",
                    data: {
                        action: "mhc_submit_subscribe_form",
                        mh_script_nonce: mhcomposer.mh_script_nonce,
                        mh_list_id: t,
                        mh_firstname: e.val(),
                        mh_lastname: a.val(),
                        mh_email: n.val(),
                        mh_service: o
                    },
                    success: function(t) {
                        t ? "mailchimp" == o ? (t.error && s.html(t.error).show(),
                        t.success && (i.find(".mhc_newsletter_form > p").hide(),
                        s.html(t.success).show())) : (i.find(".mhc_newsletter_form > p").hide(),
                        s.html(t).show()) : s.html(mhcomposer.subscription_failed).show()
                    }
                })
            }
        }),
        window.mhc_reinint_waypoint_modules = function() {
            var t, i, e, a;
            C.fn.waypoint && (t = C(".mhc_circle_counter"),
            i = C(".mhc_number_counter"),
            e = C(".mhc_animation_scrollout"),
            a = C(".mhc_section_video_bg video"),
            C(".mh-waypoint").each(function() {
                C(this).waypoint({
                    offset: "75%",
                    handler: function() {
                        C(this.element).addClass("mh-animated")
                    }
                }),
                C(this).waypoint({
                    offset: "bottom-in-view",
                    handler: function() {
                        C(this.element).addClass("mh-animated")
                    }
                })
            }),
            C(".mhc_counter_container").waypoint({
                offset: "75%",
                handler: function() {
                    C(this.element).addClass("mh-animated")
                }
            }),
            C(".mhc_counter_container").waypoint({
                offset: "bottom-in-view",
                handler: function() {
                    C(this.element).addClass("mh-animated")
                }
            }),
            t.length && t.each(function() {
                var t = C(this);
                t.waypoint({
                    offset: "65%",
                    handler: function() {
                        t.data("PieChartHasLoaded") || (t.data("easyPieChart").update(t.data("number-value")),
                        t.data("PieChartHasLoaded", !0))
                    }
                }),
                t.waypoint({
                    offset: "bottom-in-view",
                    handler: function() {
                        t.data("PieChartHasLoaded") || (t.data("easyPieChart").update(t.data("number-value")),
                        t.data("PieChartHasLoaded", !0))
                    }
                })
            }),
            i.length && i.each(function() {
                var t = C(this);
                t.waypoint({
                    offset: "75%",
                    handler: function() {
                        t.data("easyPieChart").update(t.data("number-value"))
                    }
                }),
                t.waypoint({
                    offset: "bottom-in-view",
                    handler: function() {
                        t.data("easyPieChart").update(t.data("number-value"))
                    }
                })
            }),
            e.length && e.each(function() {
                var i = C(this)
                  , t = C("mhc_title_container").height();
                i.is(":visible") && i.waypoint({
                    offset: t,
                    handler: function(t) {
                        "down" === t ? i.addClass("mh-animated") : i.removeClass("mh-animated")
                    }
                })
            }),
            a.length && a.each(function() {
                var i = C(this)
                  , t = i.closest(".mhc_section_video_bg")
                  , e = this.player;
                t.waypoint({
                    offset: "100%",
                    handler: function(t) {
                        i.is(":visible") && "down" === t ? e.play() : i.is(":visible") && "up" === t && e.pause()
                    }
                }),
                t.waypoint({
                    offset: "-50%",
                    handler: function(t) {
                        i.is(":visible") && "up" === t ? e.play() : i.is(":visible") && "down" === t && e.pause()
                    }
                })
            }))
        }
        ,
        R.data("previous-width", R.width()),
        C(window).resize(function() {
            var t = N.width()
              , t = R.data("previous-width") !== t;
            h(),
            _(),
            p(),
            C(".mhc_blog_grid").length && C(".mhc_blog_grid").masonry(),
            C(".mh_magazine_grid").length && C(".mh_magazine_grid_container").masonry(),
            L.each(function() {
                set_container_height = !!C(this).hasClass("mhc_fullwidth_portfolio_carousel"),
                e(C(this), set_container_height)
            }),
            t && (C(".container-width-change-notify").trigger("containerWidthChanged"),
            setTimeout(function() {
                P.each(function() {
                    n(C(this))
                }),
                O.each(function() {
                    C(this).hasClass("mhc_gallery_grid") && o(C(this))
                })
            }, 100),
            R.width(),
            mhRecalculateOffset = !0,
            D.length && D.each(function() {
                var t = C(this);
                t.is(":visible") && t.data("easyPieChart").update(t.data("number-value"))
            }))
        }),
        C(window).ready(function() {
            C(".fluid-width-video-wrapper").each(function() {
                var t = C(this).find("iframe")
                  , i = t.attr("src")
                  , e = -1 == i.indexOf("?") ? "?" : "&amp;"
                  , e = i + e + "wmode=opaque";
                t.attr("src", e)
            }),
            p(),
            C("section.mhc_fullscreen").each(function() {
                var t = C(this);
                C.proxy(mh_calc_fullscreen_section, t)(),
                N.on("resize", C.proxy(mh_calc_fullscreen_section, t))
            })
        }),
        window.mhc_load_init_event ? v() : C(window).load(function() {
            v()
        }),
        C(".mhc_section_parallax").length && C(".mhc_map").length && C("body").addClass("parallax-map-fix"),
        1 < C(".mhc_section").length && C(".mhc_side_nav_page").length && (m = 0,
        C("#main-content").append('<ul class="mhc_side_nav"></ul>'),
        C(".mhc_section").each(function() {
            0 < C(this).height() && ($active_class = 0 == m ? "active" : "",
            C(".mhc_side_nav").append('<li class="side_nav_item"><a href="#" id="side_nav_item_id_' + m + '" class= "' + $active_class + '">' + m + "</a></li>"),
            C(this).addClass("mhc_scroll_" + m),
            m++)
        }),
        $side_nav_offset = (20 * m + 40) / 2,
        C("ul.mhc_side_nav").css("marginTop", "-" + parseInt($side_nav_offset) + "px"),
        C(".mhc_side_nav").addClass("mh-visible"),
        C(".mhc_side_nav a").click(function() {
            return $top_section = "0" == C(this).text(),
            $target = C(".mhc_scroll_" + C(this).text()),
            y($target, $top_section, 800),
            !C("#main-header").hasClass("mh-fixed-header") && C("body").hasClass("mh_fixed_nav") && setTimeout(function() {
                y($target, $top_section, 100)
            }, 500),
            !1
        }),
        C(window).scroll(function() {
            $add_offset = C("body").hasClass("mh_fixed_nav") ? 20 : -90,
            C("#wpadminbar").length && 600 < C(window).width() && ($add_offset += C("#wpadminbar").outerHeight()),
            $side_offset = $add_offset + 60,
            C("#main-header").length && ($side_offset = C("body").hasClass("mh_vertical_nav") ? (C("#top-header").height() || 0) + $add_offset + 60 : (C("#top-header").height() || 0) + (C("#main-header").height() || 0) + $add_offset);
            for (var t = 0; t <= C(".side_nav_item a").length - 1; t++)
                C(window).scrollTop() + C(window).height() == C(document).height() ? ($last = C(".side_nav_item a").length - 1,
                C(".side_nav_item a").removeClass("active"),
                C("a#side_nav_item_id_" + $last).addClass("active")) : C(this).scrollTop() >= C(".mhc_scroll_" + t).offset().top - $side_offset && (C(".side_nav_item a").removeClass("active"),
                C("a#side_nav_item_id_" + t).addClass("active"))
        })),
        C(".mhc_section_parallax").each(function() {
            var t = C(this);
            C(".mhc_section_parallax").find(".mhc_fullwidth_menu").length && (t.css({
                overflow: "visible"
            }),
            t.addClass("clearfix"))
        }),
        window.mh_fix_fullscreen_section = function() {
            var i = C(window);
            C("section.mhc_fullscreen").each(function() {
                var t = C(this);
                C.proxy(mh_calc_fullscreen_section, t)(),
                i.on("resize", C.proxy(mh_calc_fullscreen_section, t))
            })
        }
        ,
        window.mh_force_match_heights = function() {
            C(window);
            C(".mhc_force_fullwidth").each(function() {
                var t;
                C(this).hasClass("column-match-heights") && 981 < window.innerWidth && (t = C(this).hasClass("mh_section_specialty") ? ".mhc_row_inner" : ".mhc_row",
                C(this).find(t).each(function() {
                    var i = 0;
                    C(this).find(".mhc_column > div, .mhc_column > img").each(function() {
                        var t = parseInt(C(this).css("padding-top"));
                        C(this).height() + 2 * t > i && (i = C(this).height() + 2 * t)
                    }),
                    C(this).find(".mhc_column > div").each(function() {
                        C(this).hasClass("mhc_gallery") || (0 < C(this).length ? C(this).css("height", i) : C(this).css("min-height", i))
                    })
                }))
            })
        }
    })
}(jQuery);
