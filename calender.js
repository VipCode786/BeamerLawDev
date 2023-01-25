/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

if ("undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery"); +function (a) { "use strict"; function b() { var a = document.createElement("bootstrap"), b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] } } a.fn.emulateTransitionEnd = function (b) { var c = !1, d = this; a(this).one(a.support.transition.end, function () { c = !0 }); var e = function () { c || a(d).trigger(a.support.transition.end) }; return setTimeout(e, b), this }, a(function () { a.support.transition = b() }) }(jQuery), +function (a) { "use strict"; var b = '[data-dismiss="alert"]', c = function (c) { a(c).on("click", b, this.close) }; c.prototype.close = function (b) { function c() { f.trigger("closed.bs.alert").remove() } var d = a(this), e = d.attr("data-target"); e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, "")); var f = a(e); b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c()) }; var d = a.fn.alert; a.fn.alert = function (b) { return this.each(function () { var d = a(this), e = d.data("bs.alert"); e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d) }) }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function () { return a.fn.alert = d, this }, a(document).on("click.bs.alert.data-api", b, c.prototype.close) }(jQuery), +function (a) { "use strict"; var b = function (c, d) { this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d) }; b.DEFAULTS = { loadingText: "loading..." }, b.prototype.setState = function (a) { var b = "disabled", c = this.$element, d = c.is("input") ? "val" : "html", e = c.data(); a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), setTimeout(function () { "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b) }, 0) }, b.prototype.toggle = function () { var a = this.$element.closest('[data-toggle="buttons"]'), b = !0; if (a.length) { var c = this.$element.find("input"); "radio" === c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? b = !1 : a.find(".active").removeClass("active")), b && c.prop("checked", !this.$element.hasClass("active")).trigger("change") } b && this.$element.toggleClass("active") }; var c = a.fn.button; a.fn.button = function (c) { return this.each(function () { var d = a(this), e = d.data("bs.button"), f = "object" == typeof c && c; e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c) }) }, a.fn.button.Constructor = b, a.fn.button.noConflict = function () { return a.fn.button = c, this }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (b) { var c = a(b.target); c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault() }) }(jQuery), +function (a) { "use strict"; var b = function (b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this)) }; b.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }, b.prototype.cycle = function (b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, b.prototype.getActiveIndex = function () { return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active) }, b.prototype.to = function (b) { var c = this, d = this.getActiveIndex(); return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () { c.to(b) }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b])) }, b.prototype.pause = function (b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, b.prototype.next = function () { return this.sliding ? void 0 : this.slide("next") }, b.prototype.prev = function () { return this.sliding ? void 0 : this.slide("prev") }, b.prototype.slide = function (b, c) { var d = this.$element.find(".item.active"), e = c || d[b](), f = this.interval, g = "next" == b ? "left" : "right", h = "next" == b ? "first" : "last", i = this; if (!e.length) { if (!this.options.wrap) return; e = this.$element.find(".item")[h]() } this.sliding = !0, f && this.pause(); var j = a.Event("slide.bs.carousel", { relatedTarget: e[0], direction: g }); if (!e.hasClass("active")) { if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function () { var b = a(i.$indicators.children()[i.getActiveIndex()]); b && b.addClass("active") })), a.support.transition && this.$element.hasClass("slide")) { if (this.$element.trigger(j), j.isDefaultPrevented()) return; e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function () { e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () { i.$element.trigger("slid.bs.carousel") }, 0) }).emulateTransitionEnd(600) } else { if (this.$element.trigger(j), j.isDefaultPrevented()) return; d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel") } return f && this.cycle(), this } }; var c = a.fn.carousel; a.fn.carousel = function (c) { return this.each(function () { var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c), g = "string" == typeof c ? c : f.slide; e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle() }) }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function () { return a.fn.carousel = c, this }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (b) { var c, d = a(this), e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")), f = a.extend({}, e.data(), d.data()), g = d.attr("data-slide-to"); g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault() }), a(window).on("load", function () { a('[data-ride="carousel"]').each(function () { var b = a(this); b.carousel(b.data()) }) }) }(jQuery), +function (a) { "use strict"; var b = function (c, d) { this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle() }; b.DEFAULTS = { toggle: !0 }, b.prototype.dimension = function () { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, b.prototype.show = function () { if (!this.transitioning && !this.$element.hasClass("in")) { var b = a.Event("show.bs.collapse"); if (this.$element.trigger(b), !b.isDefaultPrevented()) { var c = this.$parent && this.$parent.find("> .panel > .in"); if (c && c.length) { var d = c.data("bs.collapse"); if (d && d.transitioning) return; c.collapse("hide"), d || c.data("bs.collapse", null) } var e = this.dimension(); this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1; var f = function () { this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!a.support.transition) return f.call(this); var g = a.camelCase(["scroll", e].join("-")); this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g]) } } }, b.prototype.hide = function () { if (!this.transitioning && this.$element.hasClass("in")) { var b = a.Event("hide.bs.collapse"); if (this.$element.trigger(b), !b.isDefaultPrevented()) { var c = this.dimension(); this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1; var d = function () { this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse") }; return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350), void 0) : d.call(this) } } }, b.prototype.toggle = function () { this[this.$element.hasClass("in") ? "hide" : "show"]() }; var c = a.fn.collapse; a.fn.collapse = function (c) { return this.each(function () { var d = a(this), e = d.data("bs.collapse"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c); e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]() }) }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function () { return a.fn.collapse = c, this }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (b) { var c, d = a(this), e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a(e), g = f.data("bs.collapse"), h = g ? "toggle" : d.data(), i = d.attr("data-parent"), j = i && a(i); g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h) }) }(jQuery), +function (a) { "use strict"; function b() { a(d).remove(), a(e).each(function (b) { var d = c(a(this)); d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown")) }) } function c(b) { var c = b.attr("data-target"); c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")); var d = c && a(c); return d && d.length ? d : b.parent() } var d = ".dropdown-backdrop", e = "[data-toggle=dropdown]", f = function (b) { a(b).on("click.bs.dropdown", this.toggle) }; f.prototype.toggle = function (d) { var e = a(this); if (!e.is(".disabled, :disabled")) { var f = c(e), g = f.hasClass("open"); if (b(), !g) { if ("ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return; f.toggleClass("open").trigger("shown.bs.dropdown"), e.focus() } return !1 } }, f.prototype.keydown = function (b) { if (/(38|40|27)/.test(b.keyCode)) { var d = a(this); if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) { var f = c(d), g = f.hasClass("open"); if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click(); var h = a("[role=menu] li:not(.divider):visible a", f); if (h.length) { var i = h.index(h.filter(":focus")); 38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus() } } } }; var g = a.fn.dropdown; a.fn.dropdown = function (b) { return this.each(function () { var c = a(this), d = c.data("bs.dropdown"); d || c.data("bs.dropdown", d = new f(this)), "string" == typeof b && d[b].call(c) }) }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function () { return a.fn.dropdown = g, this }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown) }(jQuery), +function (a) { "use strict"; var b = function (b, c) { this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote) }; b.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, b.prototype.toggle = function (a) { return this[this.isShown ? "hide" : "show"](a) }, b.prototype.show = function (b) { var c = this, d = a.Event("show.bs.modal", { relatedTarget: b }); this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () { var d = a.support.transition && c.$element.hasClass("fade"); c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus(); var e = a.Event("shown.bs.modal", { relatedTarget: b }); d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function () { c.$element.focus().trigger(e) }).emulateTransitionEnd(300) : c.$element.focus().trigger(e) })) }, b.prototype.hide = function (b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()) }, b.prototype.enforceFocus = function () { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) { this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus() }, this)) }, b.prototype.escape = function () { this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal") }, b.prototype.hideModal = function () { var a = this; this.$element.hide(), this.backdrop(function () { a.removeBackdrop(), a.$element.trigger("hidden.bs.modal") }) }, b.prototype.removeBackdrop = function () { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, b.prototype.backdrop = function (b) { var c = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var d = a.support.transition && c; if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", a.proxy(function (a) { a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)) }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return; d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b() } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b() }; var c = a.fn.modal; a.fn.modal = function (c, d) { return this.each(function () { var e = a(this), f = e.data("bs.modal"), g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c); f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d) }) }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () { return a.fn.modal = c, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (b) { var c = a(this), d = c.attr("href"), e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")), f = e.data("modal") ? "toggle" : a.extend({ remote: !/#/.test(d) && d }, e.data(), c.data()); b.preventDefault(), e.modal(f, this).one("hide", function () { c.is(":visible") && c.focus() }) }), a(document).on("show.bs.modal", ".modal", function () { a(document.body).addClass("modal-open") }).on("hidden.bs.modal", ".modal", function () { a(document.body).removeClass("modal-open") }) }(jQuery), +function (a) { "use strict"; var b = function (a, b) { this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b) }; b.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1 }, b.prototype.init = function (b, c, d) { this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d); for (var e = this.options.trigger.split(" "), f = e.length; f--;) { var g = e[f]; if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) { var h = "hover" == g ? "mouseenter" : "focus", i = "hover" == g ? "mouseleave" : "blur"; this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)) } } this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, b.prototype.getDefaults = function () { return b.DEFAULTS }, b.prototype.getOptions = function (b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, b.prototype.getDelegateOptions = function () { var b = {}, c = this.getDefaults(); return this._options && a.each(this._options, function (a, d) { c[a] != d && (b[a] = d) }), b }, b.prototype.enter = function (b) { var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type); return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? (c.timeout = setTimeout(function () { "in" == c.hoverState && c.show() }, c.options.delay.show), void 0) : c.show() }, b.prototype.leave = function (b) { var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type); return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? (c.timeout = setTimeout(function () { "out" == c.hoverState && c.hide() }, c.options.delay.hide), void 0) : c.hide() }, b.prototype.show = function () { var b = a.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { if (this.$element.trigger(b), b.isDefaultPrevented()) return; var c = this.tip(); this.setContent(), this.options.animation && c.addClass("fade"); var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement, e = /\s?auto?\s?/i, f = e.test(d); f && (d = d.replace(e, "") || "top"), c.detach().css({ top: 0, left: 0, display: "block" }).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element); var g = this.getPosition(), h = c[0].offsetWidth, i = c[0].offsetHeight; if (f) { var j = this.$element.parent(), k = d, l = document.documentElement.scrollTop || document.body.scrollTop, m = "body" == this.options.container ? window.innerWidth : j.outerWidth(), n = "body" == this.options.container ? window.innerHeight : j.outerHeight(), o = "body" == this.options.container ? 0 : j.offset().left; d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d, c.removeClass(k).addClass(d) } var p = this.getCalculatedOffset(d, g, h, i); this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type) } }, b.prototype.applyPlacement = function (a, b) { var c, d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10); isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, d.offset(a).addClass("in"); var i = d[0].offsetWidth, j = d[0].offsetHeight; if ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) { var k = 0; a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), this.replaceArrow(k - e + i, i, "left") } else this.replaceArrow(j - f, j, "top"); c && d.offset(a) }, b.prototype.replaceArrow = function (a, b, c) { this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "") }, b.prototype.setContent = function () { var a = this.tip(), b = this.getTitle(); a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right") }, b.prototype.hide = function () { function b() { "in" != c.hoverState && d.detach() } var c = this, d = this.tip(), e = a.Event("hide.bs." + this.type); return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.$element.trigger("hidden.bs." + this.type), this) }, b.prototype.fixTitle = function () { var a = this.$element; (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "") }, b.prototype.hasContent = function () { return this.getTitle() }, b.prototype.getPosition = function () { var b = this.$element[0]; return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : { width: b.offsetWidth, height: b.offsetHeight }, this.$element.offset()) }, b.prototype.getCalculatedOffset = function (a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, b.prototype.getTitle = function () { var a, b = this.$element, c = this.options; return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title) }, b.prototype.tip = function () { return this.$tip = this.$tip || a(this.options.template) }, b.prototype.arrow = function () { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, b.prototype.validate = function () { this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null) }, b.prototype.enable = function () { this.enabled = !0 }, b.prototype.disable = function () { this.enabled = !1 }, b.prototype.toggleEnabled = function () { this.enabled = !this.enabled }, b.prototype.toggle = function (b) { var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this; c.tip().hasClass("in") ? c.leave(c) : c.enter(c) }, b.prototype.destroy = function () { this.hide().$element.off("." + this.type).removeData("bs." + this.type) }; var c = a.fn.tooltip; a.fn.tooltip = function (c) { return this.each(function () { var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof c && c; e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]() }) }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function () { return a.fn.tooltip = c, this } }(jQuery), +function (a) { "use strict"; var b = function (a, b) { this.init("popover", a, b) }; if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js"); b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function () { return b.DEFAULTS }, b.prototype.setContent = function () { var a = this.tip(), b = this.getTitle(), c = this.getContent(); a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide() }, b.prototype.hasContent = function () { return this.getTitle() || this.getContent() }, b.prototype.getContent = function () { var a = this.$element, b = this.options; return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content) }, b.prototype.arrow = function () { return this.$arrow = this.$arrow || this.tip().find(".arrow") }, b.prototype.tip = function () { return this.$tip || (this.$tip = a(this.options.template)), this.$tip }; var c = a.fn.popover; a.fn.popover = function (c) { return this.each(function () { var d = a(this), e = d.data("bs.popover"), f = "object" == typeof c && c; e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]() }) }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function () { return a.fn.popover = c, this } }(jQuery), +function (a) { "use strict"; function b(c, d) { var e, f = a.proxy(this.process, this); this.$element = a(c).is("body") ? a(window) : a(c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process() } b.DEFAULTS = { offset: 10 }, b.prototype.refresh = function () { var b = this.$element[0] == window ? "offset" : "position"; this.offsets = a([]), this.targets = a([]); var c = this; this.$body.find(this.selector).map(function () { var d = a(this), e = d.data("target") || d.attr("href"), f = /^#\w/.test(e) && a(e); return f && f.length && [[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]] || null }).sort(function (a, b) { return a[0] - b[0] }).each(function () { c.offsets.push(this[0]), c.targets.push(this[1]) }) }, b.prototype.process = function () { var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, d = c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget; if (b >= d) return g != (a = f.last()[0]) && this.activate(a); for (a = e.length; a--;)g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]) }, b.prototype.activate = function (b) { this.activeTarget = b, a(this.selector).parents(".active").removeClass("active"); var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active"); d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy") }; var c = a.fn.scrollspy; a.fn.scrollspy = function (c) { return this.each(function () { var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c; e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]() }) }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () { return a.fn.scrollspy = c, this }, a(window).on("load", function () { a('[data-spy="scroll"]').each(function () { var b = a(this); b.scrollspy(b.data()) }) }) }(jQuery), +function (a) { "use strict"; var b = function (b) { this.element = a(b) }; b.prototype.show = function () { var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target"); if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) { var e = c.find(".active:last a")[0], f = a.Event("show.bs.tab", { relatedTarget: e }); if (b.trigger(f), !f.isDefaultPrevented()) { var g = a(d); this.activate(b.parent("li"), c), this.activate(g, g.parent(), function () { b.trigger({ type: "shown.bs.tab", relatedTarget: e }) }) } } }, b.prototype.activate = function (b, c, d) { function e() { f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d() } var f = c.find("> .active"), g = d && a.support.transition && f.hasClass("fade"); g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in") }; var c = a.fn.tab; a.fn.tab = function (c) { return this.each(function () { var d = a(this), e = d.data("bs.tab"); e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]() }) }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function () { return a.fn.tab = c, this }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (b) { b.preventDefault(), a(this).tab("show") }) }(jQuery), +function (a) { "use strict"; var b = function (c, d) { this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition() }; b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = { offset: 0 }, b.prototype.checkPositionWithEventLoop = function () { setTimeout(a.proxy(this.checkPosition, this), 1) }, b.prototype.checkPosition = function () { if (this.$element.is(":visible")) { var c = a(document).height(), d = this.$window.scrollTop(), e = this.$element.offset(), f = this.options.offset, g = f.top, h = f.bottom; "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top()), "function" == typeof h && (h = f.bottom()); var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1; this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? e.top - d : null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")), "bottom" == i && this.$element.offset({ top: document.body.offsetHeight - h - this.$element.height() })) } }; var c = a.fn.affix; a.fn.affix = function (c) { return this.each(function () { var d = a(this), e = d.data("bs.affix"), f = "object" == typeof c && c; e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]() }) }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function () { return a.fn.affix = c, this }, a(window).on("load", function () { a('[data-spy="affix"]').each(function () { var b = a(this), c = b.data(); c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c) }) }) }(jQuery);


/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

/*
! normalize.css v2.1.3 | MIT License | git.io/normalize */

article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary
{ display: block } audio, canvas, video{ display: inline - block } audio: not([controls]){ display: none; height: 0 } [hidden], template{ display: none }html{ font - family: sans - serif; -webkit - text - size - adjust: 100 %; -ms - text - size - adjust: 100 %}body{ margin: 0 }a{ background: transparent } a:focus{ outline:thin dotted } a: active, a:hover{ outline: 0 }h1{ margin: .67em 0; font - size: 2em } abbr[title]{ border - bottom: 1px dotted } b, strong{ font - weight: bold }dfn{ font - style: italic }hr{ height: 0; -moz - box - sizing: content - box; box - sizing: content - box }mark{ color:#000; background: #ff0 } code, kbd, pre, samp{ font - family: monospace, serif; font - size: 1em }pre{ white - space: pre - wrap }q{ quotes: "\201C" "\201D" "\2018" "\2019" }small{ font - size: 80 %} sub, sup{ position: relative; font - size: 75 %; line - height: 0; vertical - align: baseline }sup{ top: -0.5em }sub{ bottom: -0.25em }img{ border: 0 } svg: not(: root){ overflow: hidden }figure{ margin: 0 }fieldset{ padding: .35em .625em .75em; margin: 0 2px; border: 1px solid #c0c0c0 }legend{ padding: 0; border: 0 } button, input, select, textarea{ margin: 0; font - family: inherit; font - size: 100 %} button, input{ line - height: normal } button, select{ text - transform: none } button, html input[type = "button"], input[type = "reset"], input[type = "submit"]{ cursor: pointer; -webkit - appearance: button } button[disabled], html input[disabled]{ cursor:default } input[type = "checkbox"], input[type = "radio"]{ padding: 0; box - sizing: border - box } input[type = "search"]{ -webkit - box - sizing: content - box; -moz - box - sizing: content - box; box - sizing: content - box; -webkit - appearance: textfield } input[type = "search"]:: -webkit - search - cancel - button, input[type = "search"]:: -webkit - search - decoration{ -webkit - appearance: none } button:: -moz - focus - inner, input:: -moz - focus - inner{ padding: 0; border: 0 }textarea{ overflow: auto; vertical - align: top }table{ border - collapse: collapse; border - spacing: 0 } @media print{* { color:#000!important; text- shadow: none!important; background: transparent!important; box - shadow: none!important } a, a:visited{ text - decoration: underline } a[href]:after{ content: " (" attr(href) ")" } abbr[title]:after{ content: " (" attr(title) ")" } a[href ^= "javascript:"]: after, a[href ^= "#"]:after{ content: "" } pre, blockquote{ border: 1px solid #999; page -break-inside: avoid }thead{ display: table - header - group } tr, img{ page -break-inside: avoid }img{ max - width: 100 % !important } @page{ margin: 2cm .5cm } p, h2, h3{ orphans: 3; widows: 3 } h2, h3{ page -break-after: avoid }select{ background: #fff!important }.navbar{ display: none }.table td,.table th{ background - color: #fff!important }.btn >.caret,.dropup >.btn >.caret{ border - top - color:#000!important }.label{ border: 1px solid #000 }.table{ border - collapse: collapse!important }.table - bordered th,.table - bordered td{ border: 1px solid #ddd!important }}*,*: before,*:after{ -webkit - box - sizing: border - box; -moz - box - sizing: border - box; box - sizing: border - box }html{ font - size: 62.5 %; -webkit - tap - highlight - color: rgba(0, 0, 0, 0) }body{ font - family: "Helvetica Neue", Helvetica, Arial, sans - serif; font - size: 14px; line - height: 1.428571429; color:#333; background - color: #fff } input, button, select, textarea{ font - family: inherit; font - size: inherit; line - height: inherit }a{ color:#428bca; text - decoration: none } a: hover, a:focus{ color:#2a6496; text - decoration: underline } a:focus{ outline:thin dotted; outline: 5px auto - webkit - focus - ring - color; outline - offset: -2px }img{ vertical - align: middle }.img - responsive{ display: block; height: auto; max - width: 100 %}.img - rounded{ border - radius: 6px }.img - thumbnail{ display: inline - block; height: auto; max - width: 100 %; padding: 4px; line - height: 1.428571429; background - color: #fff; border: 1px solid #ddd; border - radius: 4px; -webkit - transition:all .2s ease -in -out; transition:all .2s ease -in -out }.img - circle{ border - radius: 50 %}hr{ margin - top: 20px; margin - bottom: 20px; border: 0; border - top: 1px solid #eee }.sr - only{ position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0 } h1, h2, h3, h4, h5, h6,.h1,.h2,.h3,.h4,.h5,.h6{ font - family: "Helvetica Neue", Helvetica, Arial, sans - serif; font - weight: 500; line - height: 1.1; color: inherit }h1 small, h2 small, h3 small, h4 small, h5 small, h6 small,.h1 small,.h2 small,.h3 small,.h4 small,.h5 small,.h6 small, h1.small, h2.small, h3.small, h4.small, h5.small, h6.small,.h1.small,.h2.small,.h3.small,.h4.small,.h5.small,.h6.small{ font - weight: normal; line - height: 1; color:#999 } h1, h2, h3{ margin - top: 20px; margin - bottom: 10px }h1 small, h2 small, h3 small, h1.small, h2.small, h3.small{ font - size: 65 %} h4, h5, h6{ margin - top: 10px; margin - bottom: 10px }h4 small, h5 small, h6 small, h4.small, h5.small, h6.small{ font - size: 75 %} h1,.h1{ font - size: 36px } h2,.h2{ font - size: 30px } h3,.h3{ font - size: 24px } h4,.h4{ font - size: 18px } h5,.h5{ font - size: 14px } h6,.h6{ font - size: 12px }p{ margin: 0 0 10px }.lead{ margin - bottom: 20px; font - size: 16px; font - weight: 200; line - height: 1.4 } @media(min - width: 768px) {.lead{ font - size: 21px } } small,.small{ font - size: 85 %}cite{ font - style: normal }.text - muted{ color:#999 }.text - primary{ color:#428bca }.text - primary:hover{ color:#3071a9 }.text - warning{ color:#8a6d3b }.text - warning:hover{ color:#66512c }.text - danger{ color: #a94442 }.text - danger:hover{ color:#843534 }.text - success{ color:#3c763d }.text - success:hover{ color:#2b542c }.text - info{ color:#31708f }.text - info:hover{ color:#245269 }.text - left{ text - align: left }.text - right{ text - align: right }.text - center{ text - align: center }.page - header{ padding - bottom: 9px; margin: 40px 0 20px; border - bottom: 1px solid #eee } ul, ol{ margin - top: 0; margin - bottom: 10px }ul ul, ol ul, ul ol, ol ol{ margin - bottom: 0 }.list - unstyled{ padding - left: 0; list - style: none }.list - inline{ padding - left: 0; list - style: none }.list - inline > li{ display: inline - block; padding - right: 5px; padding - left: 5px }.list - inline > li: first - child{ padding - left: 0 }dl{ margin - top: 0; margin - bottom: 20px } dt, dd{ line - height: 1.428571429 }dt{ font - weight: bold }dd{ margin - left: 0 } @media(min - width: 768px) {.dl - horizontal dt{ float: left; width: 160px; overflow: hidden; clear: left; text - align: right; text - overflow: ellipsis; white - space: nowrap }.dl - horizontal dd{ margin - left: 180px }.dl - horizontal dd: before,.dl - horizontal dd:after{ display: table; content: " " }.dl - horizontal dd:after{ clear: both }.dl - horizontal dd: before,.dl - horizontal dd:after{ display: table; content: " " }.dl - horizontal dd:after{ clear: both } } abbr[title], abbr[data - original - title]{ cursor: help; border - bottom: 1px dotted #999 }.initialism{ font - size: 90 %; text - transform: uppercase }blockquote{ padding: 10px 20px; margin: 0 0 20px; border - left: 5px solid #eee }blockquote p{ font - size: 17.5px; font - weight: 300; line - height: 1.25 }blockquote p: last - child{ margin - bottom: 0 }blockquote small, blockquote.small{ display: block; line - height: 1.428571429; color:#999 }blockquote small: before, blockquote.small:before{ content: '\2014 \00A0' } blockquote.pull - right{ padding - right: 15px; padding - left: 0; border - right: 5px solid #eee; border - left: 0 } blockquote.pull - right p, blockquote.pull - right small, blockquote.pull - right.small{ text - align: right } blockquote.pull - right small: before, blockquote.pull - right.small:before{ content: '' } blockquote.pull - right small: after, blockquote.pull - right.small:after{ content: '\00A0 \2014' } blockquote: before, blockquote:after{ content: "" }address{ margin - bottom: 20px; font - style: normal; line - height: 1.428571429 } code, kbd, pre, samp{ font - family: Menlo, Monaco, Consolas, "Courier New", monospace }code{ padding: 2px 4px; font - size: 90 %; color: #c7254e; white - space: nowrap; background - color: #f9f2f4; border - radius: 4px }pre{ display: block; padding: 9.5px; margin: 0 0 10px; font - size: 13px; line - height: 1.428571429; color:#333; word -break: break-all; word - wrap: break-word; background - color: #f5f5f5; border: 1px solid #ccc; border - radius: 4px }pre code{ padding: 0; font - size: inherit; color: inherit; white - space: pre - wrap; background - color: transparent; border - radius: 0 }.pre - scrollable{ max - height: 340px; overflow - y: scroll }.container{ padding - right: 15px; padding - left: 15px; margin - right: auto; margin - left: auto }.container: before,.container:after{ display: table; content: " " }.container:after{ clear: both }.container: before,.container:after{ display: table; content: " " }.container:after{ clear: both } @media(min - width: 768px) {.container{ width: 750px } } @media(min - width: 992px) {.container{ width: 970px } } @media(min - width: 1200px) {.container{ width: 1170px } }.row{ margin - right: -15px; margin - left: -15px }.row: before,.row:after{ display: table; content: " " }.row:after{ clear: both }.row: before,.row:after{ display: table; content: " " }.row:after{ clear: both }.col - xs - 1,.col - sm - 1,.col - md - 1,.col - lg - 1,.col - xs - 2,.col - sm - 2,.col - md - 2,.col - lg - 2,.col - xs - 3,.col - sm - 3,.col - md - 3,.col - lg - 3,.col - xs - 4,.col - sm - 4,.col - md - 4,.col - lg - 4,.col - xs - 5,.col - sm - 5,.col - md - 5,.col - lg - 5,.col - xs - 6,.col - sm - 6,.col - md - 6,.col - lg - 6,.col - xs - 7,.col - sm - 7,.col - md - 7,.col - lg - 7,.col - xs - 8,.col - sm - 8,.col - md - 8,.col - lg - 8,.col - xs - 9,.col - sm - 9,.col - md - 9,.col - lg - 9,.col - xs - 10,.col - sm - 10,.col - md - 10,.col - lg - 10,.col - xs - 11,.col - sm - 11,.col - md - 11,.col - lg - 11,.col - xs - 12,.col - sm - 12,.col - md - 12,.col - lg - 12{ position: relative; min - height: 1px; padding - right: 15px; padding - left: 15px }.col - xs - 1,.col - xs - 2,.col - xs - 3,.col - xs - 4,.col - xs - 5,.col - xs - 6,.col - xs - 7,.col - xs - 8,.col - xs - 9,.col - xs - 10,.col - xs - 11,.col - xs - 12{ float: left }.col - xs - 12{ width: 100 %}.col - xs - 11{ width: 91.66666666666666 %}.col - xs - 10{ width: 83.33333333333334 %}.col - xs - 9{ width: 75 %}.col - xs - 8{ width: 66.66666666666666 %}.col - xs - 7{ width: 58.333333333333336 %}.col - xs - 6{ width: 50 %}.col - xs - 5{ width: 41.66666666666667 %}.col - xs - 4{ width: 33.33333333333333 %}.col - xs - 3{ width: 25 %}.col - xs - 2{ width: 16.666666666666664 %}.col - xs - 1{ width: 8.333333333333332 %}.col - xs - pull - 12{ right: 100 %}.col - xs - pull - 11{ right: 91.66666666666666 %}.col - xs - pull - 10{ right: 83.33333333333334 %}.col - xs - pull - 9{ right: 75 %}.col - xs - pull - 8{ right: 66.66666666666666 %}.col - xs - pull - 7{ right: 58.333333333333336 %}.col - xs - pull - 6{ right: 50 %}.col - xs - pull - 5{ right: 41.66666666666667 %}.col - xs - pull - 4{ right: 33.33333333333333 %}.col - xs - pull - 3{ right: 25 %}.col - xs - pull - 2{ right: 16.666666666666664 %}.col - xs - pull - 1{ right: 8.333333333333332 %}.col - xs - pull - 0{ right: 0 }.col - xs - push - 12{ left: 100 %}.col - xs - push - 11{ left: 91.66666666666666 %}.col - xs - push - 10{ left: 83.33333333333334 %}.col - xs - push - 9{ left: 75 %}.col - xs - push - 8{ left: 66.66666666666666 %}.col - xs - push - 7{ left: 58.333333333333336 %}.col - xs - push - 6{ left: 50 %}.col - xs - push - 5{ left: 41.66666666666667 %}.col - xs - push - 4{ left: 33.33333333333333 %}.col - xs - push - 3{ left: 25 %}.col - xs - push - 2{ left: 16.666666666666664 %}.col - xs - push - 1{ left: 8.333333333333332 %}.col - xs - push - 0{ left: 0 }.col - xs - offset - 12{ margin - left: 100 %}.col - xs - offset - 11{ margin - left: 91.66666666666666 %}.col - xs - offset - 10{ margin - left: 83.33333333333334 %}.col - xs - offset - 9{ margin - left: 75 %}.col - xs - offset - 8{ margin - left: 66.66666666666666 %}.col - xs - offset - 7{ margin - left: 58.333333333333336 %}.col - xs - offset - 6{ margin - left: 50 %}.col - xs - offset - 5{ margin - left: 41.66666666666667 %}.col - xs - offset - 4{ margin - left: 33.33333333333333 %}.col - xs - offset - 3{ margin - left: 25 %}.col - xs - offset - 2{ margin - left: 16.666666666666664 %}.col - xs - offset - 1{ margin - left: 8.333333333333332 %}.col - xs - offset - 0{ margin - left: 0 } @media(min - width: 768px) {.col - sm - 1,.col - sm - 2,.col - sm - 3,.col - sm - 4,.col - sm - 5,.col - sm - 6,.col - sm - 7,.col - sm - 8,.col - sm - 9,.col - sm - 10,.col - sm - 11,.col - sm - 12{ float: left }.col - sm - 12{ width: 100 %}.col - sm - 11{ width: 91.66666666666666 %}.col - sm - 10{ width: 83.33333333333334 %}.col - sm - 9{ width: 75 %}.col - sm - 8{ width: 66.66666666666666 %}.col - sm - 7{ width: 58.333333333333336 %}.col - sm - 6{ width: 50 %}.col - sm - 5{ width: 41.66666666666667 %}.col - sm - 4{ width: 33.33333333333333 %}.col - sm - 3{ width: 25 %}.col - sm - 2{ width: 16.666666666666664 %}.col - sm - 1{ width: 8.333333333333332 %}.col - sm - pull - 12{ right: 100 %}.col - sm - pull - 11{ right: 91.66666666666666 %}.col - sm - pull - 10{ right: 83.33333333333334 %}.col - sm - pull - 9{ right: 75 %}.col - sm - pull - 8{ right: 66.66666666666666 %}.col - sm - pull - 7{ right: 58.333333333333336 %}.col - sm - pull - 6{ right: 50 %}.col - sm - pull - 5{ right: 41.66666666666667 %}.col - sm - pull - 4{ right: 33.33333333333333 %}.col - sm - pull - 3{ right: 25 %}.col - sm - pull - 2{ right: 16.666666666666664 %}.col - sm - pull - 1{ right: 8.333333333333332 %}.col - sm - pull - 0{ right: 0 }.col - sm - push - 12{ left: 100 %}.col - sm - push - 11{ left: 91.66666666666666 %}.col - sm - push - 10{ left: 83.33333333333334 %}.col - sm - push - 9{ left: 75 %}.col - sm - push - 8{ left: 66.66666666666666 %}.col - sm - push - 7{ left: 58.333333333333336 %}.col - sm - push - 6{ left: 50 %}.col - sm - push - 5{ left: 41.66666666666667 %}.col - sm - push - 4{ left: 33.33333333333333 %}.col - sm - push - 3{ left: 25 %}.col - sm - push - 2{ left: 16.666666666666664 %}.col - sm - push - 1{ left: 8.333333333333332 %}.col - sm - push - 0{ left: 0 }.col - sm - offset - 12{ margin - left: 100 %}.col - sm - offset - 11{ margin - left: 91.66666666666666 %}.col - sm - offset - 10{ margin - left: 83.33333333333334 %}.col - sm - offset - 9{ margin - left: 75 %}.col - sm - offset - 8{ margin - left: 66.66666666666666 %}.col - sm - offset - 7{ margin - left: 58.333333333333336 %}.col - sm - offset - 6{ margin - left: 50 %}.col - sm - offset - 5{ margin - left: 41.66666666666667 %}.col - sm - offset - 4{ margin - left: 33.33333333333333 %}.col - sm - offset - 3{ margin - left: 25 %}.col - sm - offset - 2{ margin - left: 16.666666666666664 %}.col - sm - offset - 1{ margin - left: 8.333333333333332 %}.col - sm - offset - 0{ margin - left: 0 } } @media(min - width: 992px) {.col - md - 1,.col - md - 2,.col - md - 3,.col - md - 4,.col - md - 5,.col - md - 6,.col - md - 7,.col - md - 8,.col - md - 9,.col - md - 10,.col - md - 11,.col - md - 12{ float: left }.col - md - 12{ width: 100 %}.col - md - 11{ width: 91.66666666666666 %}.col - md - 10{ width: 83.33333333333334 %}.col - md - 9{ width: 75 %}.col - md - 8{ width: 66.66666666666666 %}.col - md - 7{ width: 58.333333333333336 %}.col - md - 6{ width: 50 %}.col - md - 5{ width: 41.66666666666667 %}.col - md - 4{ width: 33.33333333333333 %}.col - md - 3{ width: 25 %}.col - md - 2{ width: 16.666666666666664 %}.col - md - 1{ width: 8.333333333333332 %}.col - md - pull - 12{ right: 100 %}.col - md - pull - 11{ right: 91.66666666666666 %}.col - md - pull - 10{ right: 83.33333333333334 %}.col - md - pull - 9{ right: 75 %}.col - md - pull - 8{ right: 66.66666666666666 %}.col - md - pull - 7{ right: 58.333333333333336 %}.col - md - pull - 6{ right: 50 %}.col - md - pull - 5{ right: 41.66666666666667 %}.col - md - pull - 4{ right: 33.33333333333333 %}.col - md - pull - 3{ right: 25 %}.col - md - pull - 2{ right: 16.666666666666664 %}.col - md - pull - 1{ right: 8.333333333333332 %}.col - md - pull - 0{ right: 0 }.col - md - push - 12{ left: 100 %}.col - md - push - 11{ left: 91.66666666666666 %}.col - md - push - 10{ left: 83.33333333333334 %}.col - md - push - 9{ left: 75 %}.col - md - push - 8{ left: 66.66666666666666 %}.col - md - push - 7{ left: 58.333333333333336 %}.col - md - push - 6{ left: 50 %}.col - md - push - 5{ left: 41.66666666666667 %}.col - md - push - 4{ left: 33.33333333333333 %}.col - md - push - 3{ left: 25 %}.col - md - push - 2{ left: 16.666666666666664 %}.col - md - push - 1{ left: 8.333333333333332 %}.col - md - push - 0{ left: 0 }.col - md - offset - 12{ margin - left: 100 %}.col - md - offset - 11{ margin - left: 91.66666666666666 %}.col - md - offset - 10{ margin - left: 83.33333333333334 %}.col - md - offset - 9{ margin - left: 75 %}.col - md - offset - 8{ margin - left: 66.66666666666666 %}.col - md - offset - 7{ margin - left: 58.333333333333336 %}.col - md - offset - 6{ margin - left: 50 %}.col - md - offset - 5{ margin - left: 41.66666666666667 %}.col - md - offset - 4{ margin - left: 33.33333333333333 %}.col - md - offset - 3{ margin - left: 25 %}.col - md - offset - 2{ margin - left: 16.666666666666664 %}.col - md - offset - 1{ margin - left: 8.333333333333332 %}.col - md - offset - 0{ margin - left: 0 } } @media(min - width: 1200px) {.col - lg - 1,.col - lg - 2,.col - lg - 3,.col - lg - 4,.col - lg - 5,.col - lg - 6,.col - lg - 7,.col - lg - 8,.col - lg - 9,.col - lg - 10,.col - lg - 11,.col - lg - 12{ float: left }.col - lg - 12{ width: 100 %}.col - lg - 11{ width: 91.66666666666666 %}.col - lg - 10{ width: 83.33333333333334 %}.col - lg - 9{ width: 75 %}.col - lg - 8{ width: 66.66666666666666 %}.col - lg - 7{ width: 58.333333333333336 %}.col - lg - 6{ width: 50 %}.col - lg - 5{ width: 41.66666666666667 %}.col - lg - 4{ width: 33.33333333333333 %}.col - lg - 3{ width: 25 %}.col - lg - 2{ width: 16.666666666666664 %}.col - lg - 1{ width: 8.333333333333332 %}.col - lg - pull - 12{ right: 100 %}.col - lg - pull - 11{ right: 91.66666666666666 %}.col - lg - pull - 10{ right: 83.33333333333334 %}.col - lg - pull - 9{ right: 75 %}.col - lg - pull - 8{ right: 66.66666666666666 %}.col - lg - pull - 7{ right: 58.333333333333336 %}.col - lg - pull - 6{ right: 50 %}.col - lg - pull - 5{ right: 41.66666666666667 %}.col - lg - pull - 4{ right: 33.33333333333333 %}.col - lg - pull - 3{ right: 25 %}.col - lg - pull - 2{ right: 16.666666666666664 %}.col - lg - pull - 1{ right: 8.333333333333332 %}.col - lg - pull - 0{ right: 0 }.col - lg - push - 12{ left: 100 %}.col - lg - push - 11{ left: 91.66666666666666 %}.col - lg - push - 10{ left: 83.33333333333334 %}.col - lg - push - 9{ left: 75 %}.col - lg - push - 8{ left: 66.66666666666666 %}.col - lg - push - 7{ left: 58.333333333333336 %}.col - lg - push - 6{ left: 50 %}.col - lg - push - 5{ left: 41.66666666666667 %}.col - lg - push - 4{ left: 33.33333333333333 %}.col - lg - push - 3{ left: 25 %}.col - lg - push - 2{ left: 16.666666666666664 %}.col - lg - push - 1{ left: 8.333333333333332 %}.col - lg - push - 0{ left: 0 }.col - lg - offset - 12{ margin - left: 100 %}.col - lg - offset - 11{ margin - left: 91.66666666666666 %}.col - lg - offset - 10{ margin - left: 83.33333333333334 %}.col - lg - offset - 9{ margin - left: 75 %}.col - lg - offset - 8{ margin - left: 66.66666666666666 %}.col - lg - offset - 7{ margin - left: 58.333333333333336 %}.col - lg - offset - 6{ margin - left: 50 %}.col - lg - offset - 5{ margin - left: 41.66666666666667 %}.col - lg - offset - 4{ margin - left: 33.33333333333333 %}.col - lg - offset - 3{ margin - left: 25 %}.col - lg - offset - 2{ margin - left: 16.666666666666664 %}.col - lg - offset - 1{ margin - left: 8.333333333333332 %}.col - lg - offset - 0{ margin - left: 0 } }table{ max - width: 100 %; background - color: transparent }th{ text - align: left }.table{ width: 100 %; margin - bottom: 20px }.table > thead > tr > th,.table > tbody > tr > th,.table > tfoot > tr > th,.table > thead > tr > td,.table > tbody > tr > td,.table > tfoot > tr > td{ padding: 8px; line - height: 1.428571429; vertical - align: top; border - top: 1px solid #ddd }.table > thead > tr > th{ vertical - align: bottom; border - bottom: 2px solid #ddd }.table > caption + thead > tr: first - child > th,.table > colgroup + thead > tr: first - child > th,.table > thead: first - child > tr: first - child > th,.table > caption + thead > tr: first - child > td,.table > colgroup + thead > tr: first - child > td,.table > thead: first - child > tr: first - child > td{ border - top: 0 }.table > tbody + tbody{ border - top: 2px solid #ddd }.table.table{ background - color: #fff }.table - condensed > thead > tr > th,.table - condensed > tbody > tr > th,.table - condensed > tfoot > tr > th,.table - condensed > thead > tr > td,.table - condensed > tbody > tr > td,.table - condensed > tfoot > tr > td{ padding: 5px }.table - bordered{ border: 1px solid #ddd }.table - bordered > thead > tr > th,.table - bordered > tbody > tr > th,.table - bordered > tfoot > tr > th,.table - bordered > thead > tr > td,.table - bordered > tbody > tr > td,.table - bordered > tfoot > tr > td{ border: 1px solid #ddd }.table - bordered > thead > tr > th,.table - bordered > thead > tr > td{ border - bottom - width: 2px }.table - striped > tbody > tr: nth - child(odd) > td,.table - striped > tbody > tr: nth - child(odd) > th{ background - color: #f9f9f9 }.table - hover > tbody > tr: hover > td,.table - hover > tbody > tr: hover > th{ background - color: #f5f5f5 }table col[class*= "col-"]{ position: static; display: table - column; float: none }table td[class*= "col-"], table th[class*= "col-"]{ display: table - cell; float: none }.table > thead > tr >.active,.table > tbody > tr >.active,.table > tfoot > tr >.active,.table > thead >.active > td,.table > tbody >.active > td,.table > tfoot >.active > td,.table > thead >.active > th,.table > tbody >.active > th,.table > tfoot >.active > th{ background - color: #f5f5f5 }.table - hover > tbody > tr >.active: hover,.table - hover > tbody >.active: hover > td,.table - hover > tbody >.active: hover > th{ background - color: #e8e8e8 }.table > thead > tr >.success,.table > tbody > tr >.success,.table > tfoot > tr >.success,.table > thead >.success > td,.table > tbody >.success > td,.table > tfoot >.success > td,.table > thead >.success > th,.table > tbody >.success > th,.table > tfoot >.success > th{ background - color: #dff0d8 }.table - hover > tbody > tr >.success: hover,.table - hover > tbody >.success: hover > td,.table - hover > tbody >.success: hover > th{ background - color: #d0e9c6 }.table > thead > tr >.danger,.table > tbody > tr >.danger,.table > tfoot > tr >.danger,.table > thead >.danger > td,.table > tbody >.danger > td,.table > tfoot >.danger > td,.table > thead >.danger > th,.table > tbody >.danger > th,.table > tfoot >.danger > th{ background - color: #f2dede }.table - hover > tbody > tr >.danger: hover,.table - hover > tbody >.danger: hover > td,.table - hover > tbody >.danger: hover > th{ background - color: #ebcccc }.table > thead > tr >.warning,.table > tbody > tr >.warning,.table > tfoot > tr >.warning,.table > thead >.warning > td,.table > tbody >.warning > td,.table > tfoot >.warning > td,.table > thead >.warning > th,.table > tbody >.warning > th,.table > tfoot >.warning > th{ background - color: #fcf8e3 }.table - hover > tbody > tr >.warning: hover,.table - hover > tbody >.warning: hover > td,.table - hover > tbody >.warning: hover > th{ background - color: #faf2cc } @media(max - width: 767px) {.table - responsive{ width: 100 %; margin - bottom: 15px; overflow - x: scroll; overflow - y: hidden; border: 1px solid #ddd; -ms - overflow - style: -ms - autohiding - scrollbar; -webkit - overflow - scrolling: touch }.table - responsive >.table{ margin - bottom: 0 }.table - responsive >.table > thead > tr > th,.table - responsive >.table > tbody > tr > th,.table - responsive >.table > tfoot > tr > th,.table - responsive >.table > thead > tr > td,.table - responsive >.table > tbody > tr > td,.table - responsive >.table > tfoot > tr > td{ white - space: nowrap }.table - responsive >.table - bordered{ border: 0 }.table - responsive >.table - bordered > thead > tr > th: first - child,.table - responsive >.table - bordered > tbody > tr > th: first - child,.table - responsive >.table - bordered > tfoot > tr > th: first - child,.table - responsive >.table - bordered > thead > tr > td: first - child,.table - responsive >.table - bordered > tbody > tr > td: first - child,.table - responsive >.table - bordered > tfoot > tr > td: first - child{ border - left: 0 }.table - responsive >.table - bordered > thead > tr > th: last - child,.table - responsive >.table - bordered > tbody > tr > th: last - child,.table - responsive >.table - bordered > tfoot > tr > th: last - child,.table - responsive >.table - bordered > thead > tr > td: last - child,.table - responsive >.table - bordered > tbody > tr > td: last - child,.table - responsive >.table - bordered > tfoot > tr > td: last - child{ border - right: 0 }.table - responsive >.table - bordered > tbody > tr: last - child > th,.table - responsive >.table - bordered > tfoot > tr: last - child > th,.table - responsive >.table - bordered > tbody > tr: last - child > td,.table - responsive >.table - bordered > tfoot > tr: last - child > td{ border - bottom: 0 } }fieldset{ padding: 0; margin: 0; border: 0 }legend{ display: block; width: 100 %; padding: 0; margin - bottom: 20px; font - size: 21px; line - height: inherit; color:#333; border: 0; border - bottom: 1px solid #e5e5e5 }label{ display: inline - block; margin - bottom: 5px; font - weight: bold } input[type = "search"]{ -webkit - box - sizing: border - box; -moz - box - sizing: border - box; box - sizing: border - box } input[type = "radio"], input[type = "checkbox"]{ margin: 4px 0 0; margin - top: 1px \9; line - height: normal } input[type = "file"]{ display: block } select[multiple], select[size]{ height: auto }select optgroup{ font - family: inherit; font - size: inherit; font - style: inherit } input[type = "file"]: focus, input[type = "radio"]: focus, input[type = "checkbox"]:focus{ outline:thin dotted; outline: 5px auto - webkit - focus - ring - color; outline - offset: -2px } input[type = "number"]:: -webkit - outer - spin - button, input[type = "number"]:: -webkit - inner - spin - button{ height: auto }output{ display: block; padding - top: 7px; font - size: 14px; line - height: 1.428571429; color:#555; vertical - align: middle }.form - control{ display: block; width: 100 %; height: 34px; padding: 6px 12px; font - size: 14px; line - height: 1.428571429; color:#555; vertical - align: middle; background - color: #fff; background - image: none; border: 1px solid #ccc; border - radius: 4px; -webkit - box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075); box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075); -webkit - transition: border - color ease -in -out .15s, box - shadow ease -in -out .15s; transition: border - color ease -in -out .15s, box - shadow ease -in -out .15s }.form - control:focus{ border - color:#66afe9; outline: 0; -webkit - box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6) }.form - control: -moz - placeholder{ color:#999 }.form - control:: -moz - placeholder{ color:#999; opacity: 1 }.form - control: -ms - input - placeholder{ color:#999 }.form - control:: -webkit - input - placeholder{ color:#999 }.form - control[disabled],.form - control[readonly], fieldset[disabled].form - control{ cursor: not - allowed; background - color: #eee } textarea.form - control{ height: auto }.form - group{ margin - bottom: 15px }.radio,.checkbox{ display: block; min - height: 20px; padding - left: 20px; margin - top: 10px; margin - bottom: 10px; vertical - align: middle }.radio label,.checkbox label{ display: inline; margin - bottom: 0; font - weight: normal; cursor: pointer }.radio input[type = "radio"],.radio - inline input[type = "radio"],.checkbox input[type = "checkbox"],.checkbox - inline input[type = "checkbox"]{ float: left; margin - left: -20px }.radio +.radio,.checkbox +.checkbox{ margin - top: -5px }.radio - inline,.checkbox - inline{ display: inline - block; padding - left: 20px; margin - bottom: 0; font - weight: normal; vertical - align: middle; cursor: pointer }.radio - inline +.radio - inline,.checkbox - inline +.checkbox - inline{ margin - top: 0; margin - left: 10px } input[type = "radio"][disabled], input[type = "checkbox"][disabled],.radio[disabled],.radio - inline[disabled],.checkbox[disabled],.checkbox - inline[disabled], fieldset[disabled] input[type = "radio"], fieldset[disabled] input[type = "checkbox"], fieldset[disabled].radio, fieldset[disabled].radio - inline, fieldset[disabled].checkbox, fieldset[disabled].checkbox - inline{ cursor: not - allowed }.input - sm{ height: 30px; padding: 5px 10px; font - size: 12px; line - height: 1.5; border - radius: 3px } select.input - sm{ height: 30px; line - height: 30px } textarea.input - sm{ height: auto }.input - lg{ height: 46px; padding: 10px 16px; font - size: 18px; line - height: 1.33; border - radius: 6px } select.input - lg{ height: 46px; line - height: 46px } textarea.input - lg{ height: auto }.has - warning.help - block,.has - warning.control - label,.has - warning.radio,.has - warning.checkbox,.has - warning.radio - inline,.has - warning.checkbox - inline{ color:#8a6d3b }.has - warning.form - control{ border - color:#8a6d3b; -webkit - box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075); box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075) }.has - warning.form - control:focus{ border - color:#66512c; -webkit - box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b; box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b }.has - warning.input - group - addon{ color:#8a6d3b; background - color: #fcf8e3; border - color:#8a6d3b }.has - error.help - block,.has - error.control - label,.has - error.radio,.has - error.checkbox,.has - error.radio - inline,.has - error.checkbox - inline{ color: #a94442 }.has - error.form - control{ border - color: #a94442; -webkit - box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075); box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075) }.has - error.form - control:focus{ border - color:#843534; -webkit - box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483; box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483 }.has - error.input - group - addon{ color: #a94442; background - color: #f2dede; border - color: #a94442 }.has - success.help - block,.has - success.control - label,.has - success.radio,.has - success.checkbox,.has - success.radio - inline,.has - success.checkbox - inline{ color:#3c763d }.has - success.form - control{ border - color:#3c763d; -webkit - box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075); box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075) }.has - success.form - control:focus{ border - color:#2b542c; -webkit - box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168; box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168 }.has - success.input - group - addon{ color:#3c763d; background - color: #dff0d8; border - color:#3c763d }.form - control - static{ margin - bottom: 0 }.help - block{ display: block; margin - top: 5px; margin - bottom: 10px; color:#737373 } @media(min - width: 768px) {.form - inline.form - group{ display: inline - block; margin - bottom: 0; vertical - align: middle }.form - inline.form - control{ display: inline - block }.form - inline select.form - control{ width: auto }.form - inline.radio,.form - inline.checkbox{ display: inline - block; padding - left: 0; margin - top: 0; margin - bottom: 0 }.form - inline.radio input[type = "radio"],.form - inline.checkbox input[type = "checkbox"]{ float: none; margin - left: 0 } }.form - horizontal.control - label,.form - horizontal.radio,.form - horizontal.checkbox,.form - horizontal.radio - inline,.form - horizontal.checkbox - inline{ padding - top: 7px; margin - top: 0; margin - bottom: 0 }.form - horizontal.radio,.form - horizontal.checkbox{ min - height: 27px }.form - horizontal.form - group{ margin - right: -15px; margin - left: -15px }.form - horizontal.form - group: before,.form - horizontal.form - group:after{ display: table; content: " " }.form - horizontal.form - group:after{ clear: both }.form - horizontal.form - group: before,.form - horizontal.form - group:after{ display: table; content: " " }.form - horizontal.form - group:after{ clear: both }.form - horizontal.form - control - static{ padding - top: 7px } @media(min - width: 768px) {.form - horizontal.control - label{ text - align: right } }.btn{ display: inline - block; padding: 6px 12px; margin - bottom: 0; font - size: 14px; font - weight: normal; line - height: 1.428571429; text - align: center; white - space: nowrap; vertical - align: middle; cursor: pointer; background - image: none; border: 1px solid transparent; border - radius: 4px; -webkit - user - select: none; -moz - user - select: none; -ms - user - select: none; -o - user - select: none; user - select: none }.btn:focus{ outline:thin dotted; outline: 5px auto - webkit - focus - ring - color; outline - offset: -2px }.btn: hover,.btn:focus{ color:#333; text - decoration: none }.btn: active,.btn.active{ background - image: none; outline: 0; -webkit - box - shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125); box - shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125) }.btn.disabled,.btn[disabled], fieldset[disabled].btn{ pointer - events: none; cursor: not - allowed; opacity: .65; filter: alpha(opacity = 65); -webkit - box - shadow: none; box - shadow: none }.btn -default { color:#333; background - color: #fff; border - color: #ccc }.btn -default: hover,.btn -default: focus,.btn -default: active,.btn -default.active,.open.dropdown - toggle.btn -default { color:#333; background - color: #ebebeb; border - color: #adadad }.btn -default: active,.btn -default.active,.open.dropdown - toggle.btn -default { background - image: none }.btn -default.disabled,.btn -default [disabled], fieldset[disabled].btn -default,.btn -default.disabled: hover,.btn -default [disabled]: hover, fieldset[disabled].btn -default: hover,.btn -default.disabled: focus,.btn -default [disabled]: focus, fieldset[disabled].btn -default: focus,.btn -default.disabled: active,.btn -default [disabled]: active, fieldset[disabled].btn -default: active,.btn -default.disabled.active,.btn -default [disabled].active, fieldset[disabled].btn -default.active{ background - color: #fff; border - color: #ccc }.btn -default .badge{ color: #fff; background - color: #fff }.btn - primary{ color: #fff; background - color:#428bca; border - color:#357ebd }.btn - primary: hover,.btn - primary: focus,.btn - primary: active,.btn - primary.active,.open.dropdown - toggle.btn - primary{ color: #fff; background - color:#3276b1; border - color:#285e8e }.btn - primary: active,.btn - primary.active,.open.dropdown - toggle.btn - primary{ background - image: none }.btn - primary.disabled,.btn - primary[disabled], fieldset[disabled].btn - primary,.btn - primary.disabled: hover,.btn - primary[disabled]: hover, fieldset[disabled].btn - primary: hover,.btn - primary.disabled: focus,.btn - primary[disabled]: focus, fieldset[disabled].btn - primary: focus,.btn - primary.disabled: active,.btn - primary[disabled]: active, fieldset[disabled].btn - primary: active,.btn - primary.disabled.active,.btn - primary[disabled].active, fieldset[disabled].btn - primary.active{ background - color:#428bca; border - color:#357ebd }.btn - primary.badge{ color:#428bca; background - color: #fff }.btn - warning{ color: #fff; background - color: #f0ad4e; border - color: #eea236 }.btn - warning: hover,.btn - warning: focus,.btn - warning: active,.btn - warning.active,.open.dropdown - toggle.btn - warning{ color: #fff; background - color: #ed9c28; border - color: #d58512 }.btn - warning: active,.btn - warning.active,.open.dropdown - toggle.btn - warning{ background - image: none }.btn - warning.disabled,.btn - warning[disabled], fieldset[disabled].btn - warning,.btn - warning.disabled: hover,.btn - warning[disabled]: hover, fieldset[disabled].btn - warning: hover,.btn - warning.disabled: focus,.btn - warning[disabled]: focus, fieldset[disabled].btn - warning: focus,.btn - warning.disabled: active,.btn - warning[disabled]: active, fieldset[disabled].btn - warning: active,.btn - warning.disabled.active,.btn - warning[disabled].active, fieldset[disabled].btn - warning.active{ background - color: #f0ad4e; border - color: #eea236 }.btn - warning.badge{ color: #f0ad4e; background - color: #fff }.btn - danger{ color: #fff; background - color: #d9534f; border - color: #d43f3a }.btn - danger: hover,.btn - danger: focus,.btn - danger: active,.btn - danger.active,.open.dropdown - toggle.btn - danger{ color: #fff; background - color: #d2322d; border - color: #ac2925 }.btn - danger: active,.btn - danger.active,.open.dropdown - toggle.btn - danger{ background - image: none }.btn - danger.disabled,.btn - danger[disabled], fieldset[disabled].btn - danger,.btn - danger.disabled: hover,.btn - danger[disabled]: hover, fieldset[disabled].btn - danger: hover,.btn - danger.disabled: focus,.btn - danger[disabled]: focus, fieldset[disabled].btn - danger: focus,.btn - danger.disabled: active,.btn - danger[disabled]: active, fieldset[disabled].btn - danger: active,.btn - danger.disabled.active,.btn - danger[disabled].active, fieldset[disabled].btn - danger.active{ background - color: #d9534f; border - color: #d43f3a }.btn - danger.badge{ color: #d9534f; background - color: #fff }.btn - success{ color: #fff; background - color:#5cb85c; border - color:#4cae4c }.btn - success: hover,.btn - success: focus,.btn - success: active,.btn - success.active,.open.dropdown - toggle.btn - success{ color: #fff; background - color:#47a447; border - color:#398439 }.btn - success: active,.btn - success.active,.open.dropdown - toggle.btn - success{ background - image: none }.btn - success.disabled,.btn - success[disabled], fieldset[disabled].btn - success,.btn - success.disabled: hover,.btn - success[disabled]: hover, fieldset[disabled].btn - success: hover,.btn - success.disabled: focus,.btn - success[disabled]: focus, fieldset[disabled].btn - success: focus,.btn - success.disabled: active,.btn - success[disabled]: active, fieldset[disabled].btn - success: active,.btn - success.disabled.active,.btn - success[disabled].active, fieldset[disabled].btn - success.active{ background - color:#5cb85c; border - color:#4cae4c }.btn - success.badge{ color:#5cb85c; background - color: #fff }.btn - info{ color: #fff; background - color:#5bc0de; border - color:#46b8da }.btn - info: hover,.btn - info: focus,.btn - info: active,.btn - info.active,.open.dropdown - toggle.btn - info{ color: #fff; background - color:#39b3d7; border - color:#269abc }.btn - info: active,.btn - info.active,.open.dropdown - toggle.btn - info{ background - image: none }.btn - info.disabled,.btn - info[disabled], fieldset[disabled].btn - info,.btn - info.disabled: hover,.btn - info[disabled]: hover, fieldset[disabled].btn - info: hover,.btn - info.disabled: focus,.btn - info[disabled]: focus, fieldset[disabled].btn - info: focus,.btn - info.disabled: active,.btn - info[disabled]: active, fieldset[disabled].btn - info: active,.btn - info.disabled.active,.btn - info[disabled].active, fieldset[disabled].btn - info.active{ background - color:#5bc0de; border - color:#46b8da }.btn - info.badge{ color:#5bc0de; background - color: #fff }.btn - link{ font - weight: normal; color:#428bca; cursor: pointer; border - radius: 0 }.btn - link,.btn - link: active,.btn - link[disabled], fieldset[disabled].btn - link{ background - color: transparent; -webkit - box - shadow: none; box - shadow: none }.btn - link,.btn - link: hover,.btn - link: focus,.btn - link:active{ border - color: transparent }.btn - link: hover,.btn - link:focus{ color:#2a6496; text - decoration: underline; background - color: transparent }.btn - link[disabled]: hover, fieldset[disabled].btn - link: hover,.btn - link[disabled]: focus, fieldset[disabled].btn - link:focus{ color:#999; text - decoration: none }.btn - lg{ padding: 10px 16px; font - size: 18px; line - height: 1.33; border - radius: 6px }.btn - sm{ padding: 5px 10px; font - size: 12px; line - height: 1.5; border - radius: 3px }.btn - xs{ padding: 1px 5px; font - size: 12px; line - height: 1.5; border - radius: 3px }.btn - block{ display: block; width: 100 %; padding - right: 0; padding - left: 0 }.btn - block +.btn - block{ margin - top: 5px } input[type = "submit"].btn - block, input[type = "reset"].btn - block, input[type = "button"].btn - block{ width: 100 %}.fade{ opacity: 0; -webkit - transition:opacity .15s linear; transition:opacity .15s linear }.fade.in{ opacity: 1 }.collapse{ display: none }.collapse.in{ display: block }.collapsing{ position: relative; height: 0; overflow: hidden; -webkit - transition:height .35s ease; transition:height .35s ease } @font-face{ font - family: 'Glyphicons Halflings'; src: url('../fonts/glyphicons-halflings-regular.eot'); src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg') }.glyphicon{ position: relative; top: 1px; display: inline - block; font - family: 'Glyphicons Halflings'; -webkit - font - smoothing: antialiased; font - style: normal; font - weight: normal; line - height: 1; -moz - osx - font - smoothing: grayscale }.glyphicon:empty{ width: 1em }.glyphicon - asterisk:before{ content: "\2a" }.glyphicon - plus:before{ content: "\2b" }.glyphicon - euro:before{ content: "\20ac" }.glyphicon - minus:before{ content: "\2212" }.glyphicon - cloud:before{ content: "\2601" }.glyphicon - envelope:before{ content: "\2709" }.glyphicon - pencil:before{ content: "\270f" }.glyphicon - glass:before{ content: "\e001" }.glyphicon - music:before{ content: "\e002" }.glyphicon - search:before{ content: "\e003" }.glyphicon - heart:before{ content: "\e005" }.glyphicon - star:before{ content: "\e006" }.glyphicon - star - empty:before{ content: "\e007" }.glyphicon - user:before{ content: "\e008" }.glyphicon - film:before{ content: "\e009" }.glyphicon - th - large:before{ content: "\e010" }.glyphicon - th:before{ content: "\e011" }.glyphicon - th - list:before{ content: "\e012" }.glyphicon - ok:before{ content: "\e013" }.glyphicon - remove:before{ content: "\e014" }.glyphicon - zoom -in:before{ content: "\e015" }.glyphicon - zoom - out:before{ content: "\e016" }.glyphicon - off:before{ content: "\e017" }.glyphicon - signal:before{ content: "\e018" }.glyphicon - cog:before{ content: "\e019" }.glyphicon - trash:before{ content: "\e020" }.glyphicon - home:before{ content: "\e021" }.glyphicon - file:before{ content: "\e022" }.glyphicon - time:before{ content: "\e023" }.glyphicon - road:before{ content: "\e024" }.glyphicon - download - alt:before{ content: "\e025" }.glyphicon - download:before{ content: "\e026" }.glyphicon - upload:before{ content: "\e027" }.glyphicon - inbox:before{ content: "\e028" }.glyphicon - play - circle:before{ content: "\e029" }.glyphicon - repeat:before{ content: "\e030" }.glyphicon - refresh:before{ content: "\e031" }.glyphicon - list - alt:before{ content: "\e032" }.glyphicon - lock:before{ content: "\e033" }.glyphicon - flag:before{ content: "\e034" }.glyphicon - headphones:before{ content: "\e035" }.glyphicon - volume - off:before{ content: "\e036" }.glyphicon - volume - down:before{ content: "\e037" }.glyphicon - volume - up:before{ content: "\e038" }.glyphicon - qrcode:before{ content: "\e039" }.glyphicon - barcode:before{ content: "\e040" }.glyphicon - tag:before{ content: "\e041" }.glyphicon - tags:before{ content: "\e042" }.glyphicon - book:before{ content: "\e043" }.glyphicon - bookmark:before{ content: "\e044" }.glyphicon - print:before{ content: "\e045" }.glyphicon - camera:before{ content: "\e046" }.glyphicon - font:before{ content: "\e047" }.glyphicon - bold:before{ content: "\e048" }.glyphicon - italic:before{ content: "\e049" }.glyphicon - text - height:before{ content: "\e050" }.glyphicon - text - width:before{ content: "\e051" }.glyphicon - align - left:before{ content: "\e052" }.glyphicon - align - center:before{ content: "\e053" }.glyphicon - align - right:before{ content: "\e054" }.glyphicon - align - justify:before{ content: "\e055" }.glyphicon - list:before{ content: "\e056" }.glyphicon - indent - left:before{ content: "\e057" }.glyphicon - indent - right:before{ content: "\e058" }.glyphicon - facetime - video:before{ content: "\e059" }.glyphicon - picture:before{ content: "\e060" }.glyphicon - map - marker:before{ content: "\e062" }.glyphicon - adjust:before{ content: "\e063" }.glyphicon - tint:before{ content: "\e064" }.glyphicon - edit:before{ content: "\e065" }.glyphicon - share:before{ content: "\e066" }.glyphicon - check:before{ content: "\e067" }.glyphicon - move:before{ content: "\e068" }.glyphicon - step - backward:before{ content: "\e069" }.glyphicon - fast - backward:before{ content: "\e070" }.glyphicon - backward:before{ content: "\e071" }.glyphicon - play:before{ content: "\e072" }.glyphicon - pause:before{ content: "\e073" }.glyphicon - stop:before{ content: "\e074" }.glyphicon - forward:before{ content: "\e075" }.glyphicon - fast - forward:before{ content: "\e076" }.glyphicon - step - forward:before{ content: "\e077" }.glyphicon - eject:before{ content: "\e078" }.glyphicon - chevron - left:before{ content: "\e079" }.glyphicon - chevron - right:before{ content: "\e080" }.glyphicon - plus - sign:before{ content: "\e081" }.glyphicon - minus - sign:before{ content: "\e082" }.glyphicon - remove - sign:before{ content: "\e083" }.glyphicon - ok - sign:before{ content: "\e084" }.glyphicon - question - sign:before{ content: "\e085" }.glyphicon - info - sign:before{ content: "\e086" }.glyphicon - screenshot:before{ content: "\e087" }.glyphicon - remove - circle:before{ content: "\e088" }.glyphicon - ok - circle:before{ content: "\e089" }.glyphicon - ban - circle:before{ content: "\e090" }.glyphicon - arrow - left:before{ content: "\e091" }.glyphicon - arrow - right:before{ content: "\e092" }.glyphicon - arrow - up:before{ content: "\e093" }.glyphicon - arrow - down:before{ content: "\e094" }.glyphicon - share - alt:before{ content: "\e095" }.glyphicon - resize - full:before{ content: "\e096" }.glyphicon - resize - small:before{ content: "\e097" }.glyphicon - exclamation - sign:before{ content: "\e101" }.glyphicon - gift:before{ content: "\e102" }.glyphicon - leaf:before{ content: "\e103" }.glyphicon - fire:before{ content: "\e104" }.glyphicon - eye - open:before{ content: "\e105" }.glyphicon - eye - close:before{ content: "\e106" }.glyphicon - warning - sign:before{ content: "\e107" }.glyphicon - plane:before{ content: "\e108" }.glyphicon - calendar:before{ content: "\e109" }.glyphicon - random:before{ content: "\e110" }.glyphicon - comment:before{ content: "\e111" }.glyphicon - magnet:before{ content: "\e112" }.glyphicon - chevron - up:before{ content: "\e113" }.glyphicon - chevron - down:before{ content: "\e114" }.glyphicon - retweet:before{ content: "\e115" }.glyphicon - shopping - cart:before{ content: "\e116" }.glyphicon - folder - close:before{ content: "\e117" }.glyphicon - folder - open:before{ content: "\e118" }.glyphicon - resize - vertical:before{ content: "\e119" }.glyphicon - resize - horizontal:before{ content: "\e120" }.glyphicon - hdd:before{ content: "\e121" }.glyphicon - bullhorn:before{ content: "\e122" }.glyphicon - bell:before{ content: "\e123" }.glyphicon - certificate:before{ content: "\e124" }.glyphicon - thumbs - up:before{ content: "\e125" }.glyphicon - thumbs - down:before{ content: "\e126" }.glyphicon - hand - right:before{ content: "\e127" }.glyphicon - hand - left:before{ content: "\e128" }.glyphicon - hand - up:before{ content: "\e129" }.glyphicon - hand - down:before{ content: "\e130" }.glyphicon - circle - arrow - right:before{ content: "\e131" }.glyphicon - circle - arrow - left:before{ content: "\e132" }.glyphicon - circle - arrow - up:before{ content: "\e133" }.glyphicon - circle - arrow - down:before{ content: "\e134" }.glyphicon - globe:before{ content: "\e135" }.glyphicon - wrench:before{ content: "\e136" }.glyphicon - tasks:before{ content: "\e137" }.glyphicon - filter:before{ content: "\e138" }.glyphicon - briefcase:before{ content: "\e139" }.glyphicon - fullscreen:before{ content: "\e140" }.glyphicon - dashboard:before{ content: "\e141" }.glyphicon - paperclip:before{ content: "\e142" }.glyphicon - heart - empty:before{ content: "\e143" }.glyphicon - link:before{ content: "\e144" }.glyphicon - phone:before{ content: "\e145" }.glyphicon - pushpin:before{ content: "\e146" }.glyphicon - usd:before{ content: "\e148" }.glyphicon - gbp:before{ content: "\e149" }.glyphicon - sort:before{ content: "\e150" }.glyphicon - sort - by - alphabet:before{ content: "\e151" }.glyphicon - sort - by - alphabet - alt:before{ content: "\e152" }.glyphicon - sort - by - order:before{ content: "\e153" }.glyphicon - sort - by - order - alt:before{ content: "\e154" }.glyphicon - sort - by - attributes:before{ content: "\e155" }.glyphicon - sort - by - attributes - alt:before{ content: "\e156" }.glyphicon - unchecked:before{ content: "\e157" }.glyphicon - expand:before{ content: "\e158" }.glyphicon - collapse - down:before{ content: "\e159" }.glyphicon - collapse - up:before{ content: "\e160" }.glyphicon - log -in:before{ content: "\e161" }.glyphicon - flash:before{ content: "\e162" }.glyphicon - log - out:before{ content: "\e163" }.glyphicon - new- window:before{ content: "\e164" }.glyphicon - record:before{ content: "\e165" }.glyphicon - save:before{ content: "\e166" }.glyphicon - open:before{ content: "\e167" }.glyphicon - saved:before{ content: "\e168" }.glyphicon -import:before{ content: "\e169" }.glyphicon -export:before{ content: "\e170" }.glyphicon - send:before{ content: "\e171" }.glyphicon - floppy - disk:before{ content: "\e172" }.glyphicon - floppy - saved:before{ content: "\e173" }.glyphicon - floppy - remove:before{ content: "\e174" }.glyphicon - floppy - save:before{ content: "\e175" }.glyphicon - floppy - open:before{ content: "\e176" }.glyphicon - credit - card:before{ content: "\e177" }.glyphicon - transfer:before{ content: "\e178" }.glyphicon - cutlery:before{ content: "\e179" }.glyphicon - header:before{ content: "\e180" }.glyphicon - compressed:before{ content: "\e181" }.glyphicon - earphone:before{ content: "\e182" }.glyphicon - phone - alt:before{ content: "\e183" }.glyphicon - tower:before{ content: "\e184" }.glyphicon - stats:before{ content: "\e185" }.glyphicon - sd - video:before{ content: "\e186" }.glyphicon - hd - video:before{ content: "\e187" }.glyphicon - subtitles:before{ content: "\e188" }.glyphicon - sound - stereo:before{ content: "\e189" }.glyphicon - sound - dolby:before{ content: "\e190" }.glyphicon - sound - 5 - 1:before{ content: "\e191" }.glyphicon - sound - 6 - 1:before{ content: "\e192" }.glyphicon - sound - 7 - 1:before{ content: "\e193" }.glyphicon - copyright - mark:before{ content: "\e194" }.glyphicon - registration - mark:before{ content: "\e195" }.glyphicon - cloud - download:before{ content: "\e197" }.glyphicon - cloud - upload:before{ content: "\e198" }.glyphicon - tree - conifer:before{ content: "\e199" }.glyphicon - tree - deciduous:before{ content: "\e200" }.caret{ display: inline - block; width: 0; height: 0; margin - left: 2px; vertical - align: middle; border - top: 4px solid; border - right: 4px solid transparent; border - left: 4px solid transparent }.dropdown{ position: relative }.dropdown - toggle:focus{ outline: 0 }.dropdown - menu{ position: absolute; top: 100 %; left: 0; z - index: 1000; display: none; float: left; min - width: 160px; padding: 5px 0; margin: 2px 0 0; font - size: 14px; list - style: none; background - color: #fff; border: 1px solid #ccc; border: 1px solid rgba(0, 0, 0, 0.15); border - radius: 4px; -webkit - box - shadow: 0 6px 12px rgba(0, 0, 0, 0.175); box - shadow: 0 6px 12px rgba(0, 0, 0, 0.175); background - clip: padding - box }.dropdown - menu.pull - right{ right: 0; left: auto }.dropdown - menu.divider{ height: 1px; margin: 9px 0; overflow: hidden; background - color: #e5e5e5 }.dropdown - menu > li > a{ display: block; padding: 3px 20px; clear: both; font - weight: normal; line - height: 1.428571429; color:#333; white - space: nowrap }.dropdown - menu > li > a: hover,.dropdown - menu > li > a:focus{ color:#262626; text - decoration: none; background - color: #f5f5f5 }.dropdown - menu >.active > a,.dropdown - menu >.active > a: hover,.dropdown - menu >.active > a:focus{ color: #fff; text - decoration: none; background - color:#428bca; outline: 0 }.dropdown - menu >.disabled > a,.dropdown - menu >.disabled > a: hover,.dropdown - menu >.disabled > a:focus{ color:#999 }.dropdown - menu >.disabled > a: hover,.dropdown - menu >.disabled > a:focus{ text - decoration: none; cursor: not - allowed; background - color: transparent; background - image: none; filter: progid: DXImageTransform.Microsoft.gradient(enabled = false) }.open >.dropdown - menu{ display: block }.open > a{ outline: 0 }.dropdown - header{ display: block; padding: 3px 20px; font - size: 12px; line - height: 1.428571429; color:#999 }.dropdown - backdrop{ position: fixed; top: 0; right: 0; bottom: 0; left: 0; z - index: 990 }.pull - right >.dropdown - menu{ right: 0; left: auto }.dropup.caret,.navbar - fixed - bottom.dropdown.caret{ border - top: 0; border - bottom: 4px solid; content: "" }.dropup.dropdown - menu,.navbar - fixed - bottom.dropdown.dropdown - menu{ top: auto; bottom: 100 %; margin - bottom: 1px } @media(min - width: 768px) {.navbar - right.dropdown - menu{ right: 0; left: auto } }.btn - group,.btn - group - vertical{ position: relative; display: inline - block; vertical - align: middle }.btn - group >.btn,.btn - group - vertical >.btn{ position: relative; float: left }.btn - group >.btn: hover,.btn - group - vertical >.btn: hover,.btn - group >.btn: focus,.btn - group - vertical >.btn: focus,.btn - group >.btn: active,.btn - group - vertical >.btn: active,.btn - group >.btn.active,.btn - group - vertical >.btn.active{ z - index: 2 }.btn - group >.btn: focus,.btn - group - vertical >.btn:focus{ outline: 0 }.btn - group.btn +.btn,.btn - group.btn +.btn - group,.btn - group.btn - group +.btn,.btn - group.btn - group +.btn - group{ margin - left: -1px }.btn - toolbar: before,.btn - toolbar:after{ display: table; content: " " }.btn - toolbar:after{ clear: both }.btn - toolbar: before,.btn - toolbar:after{ display: table; content: " " }.btn - toolbar:after{ clear: both }.btn - toolbar.btn - group{ float: left }.btn - toolbar >.btn +.btn,.btn - toolbar >.btn - group +.btn,.btn - toolbar >.btn +.btn - group,.btn - toolbar >.btn - group +.btn - group{ margin - left: 5px }.btn - group >.btn: not(: first - child): not(: last - child): not(.dropdown - toggle){ border - radius: 0 }.btn - group >.btn: first - child{ margin - left: 0 }.btn - group >.btn: first - child: not(: last - child): not(.dropdown - toggle){ border - top - right - radius: 0; border - bottom - right - radius: 0 }.btn - group >.btn: last - child: not(: first - child),.btn - group >.dropdown - toggle: not(: first - child){ border - bottom - left - radius: 0; border - top - left - radius: 0 }.btn - group >.btn - group{ float: left }.btn - group >.btn - group: not(: first - child): not(: last - child) >.btn{ border - radius: 0 }.btn - group >.btn - group: first - child >.btn: last - child,.btn - group >.btn - group: first - child >.dropdown - toggle{ border - top - right - radius: 0; border - bottom - right - radius: 0 }.btn - group >.btn - group: last - child >.btn: first - child{ border - bottom - left - radius: 0; border - top - left - radius: 0 }.btn - group.dropdown - toggle: active,.btn - group.open.dropdown - toggle{ outline: 0 }.btn - group - xs >.btn{ padding: 1px 5px; font - size: 12px; line - height: 1.5; border - radius: 3px }.btn - group - sm >.btn{ padding: 5px 10px; font - size: 12px; line - height: 1.5; border - radius: 3px }.btn - group - lg >.btn{ padding: 10px 16px; font - size: 18px; line - height: 1.33; border - radius: 6px }.btn - group >.btn +.dropdown - toggle{ padding - right: 8px; padding - left: 8px }.btn - group >.btn - lg +.dropdown - toggle{ padding - right: 12px; padding - left: 12px }.btn - group.open.dropdown - toggle{ -webkit - box - shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125); box - shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125) }.btn - group.open.dropdown - toggle.btn - link{ -webkit - box - shadow: none; box - shadow: none }.btn.caret{ margin - left: 0 }.btn - lg.caret{ border - width: 5px 5px 0; border - bottom - width: 0 }.dropup.btn - lg.caret{ border - width: 0 5px 5px }.btn - group - vertical >.btn,.btn - group - vertical >.btn - group,.btn - group - vertical >.btn - group >.btn{ display: block; float: none; width: 100 %; max - width: 100 %}.btn - group - vertical >.btn - group: before,.btn - group - vertical >.btn - group:after{ display: table; content: " " }.btn - group - vertical >.btn - group:after{ clear: both }.btn - group - vertical >.btn - group: before,.btn - group - vertical >.btn - group:after{ display: table; content: " " }.btn - group - vertical >.btn - group:after{ clear: both }.btn - group - vertical >.btn - group >.btn{ float: none }.btn - group - vertical >.btn +.btn,.btn - group - vertical >.btn +.btn - group,.btn - group - vertical >.btn - group +.btn,.btn - group - vertical >.btn - group +.btn - group{ margin - top: -1px; margin - left: 0 }.btn - group - vertical >.btn: not(: first - child): not(: last - child){ border - radius: 0 }.btn - group - vertical >.btn: first - child: not(: last - child){ border - top - right - radius: 4px; border - bottom - right - radius: 0; border - bottom - left - radius: 0 }.btn - group - vertical >.btn: last - child: not(: first - child){ border - top - right - radius: 0; border - bottom - left - radius: 4px; border - top - left - radius: 0 }.btn - group - vertical >.btn - group: not(: first - child): not(: last - child) >.btn{ border - radius: 0 }.btn - group - vertical >.btn - group: first - child >.btn: last - child,.btn - group - vertical >.btn - group: first - child >.dropdown - toggle{ border - bottom - right - radius: 0; border - bottom - left - radius: 0 }.btn - group - vertical >.btn - group: last - child >.btn: first - child{ border - top - right - radius: 0; border - top - left - radius: 0 }.btn - group - justified{ display: table; width: 100 %; border - collapse: separate; table - layout: fixed }.btn - group - justified >.btn,.btn - group - justified >.btn - group{ display: table - cell; float: none; width: 1 %}.btn - group - justified >.btn - group.btn{ width: 100 %} [data - toggle="buttons"] >.btn > input[type = "radio"], [data - toggle="buttons"] >.btn > input[type = "checkbox"]{ display: none }.input - group{ position: relative; display: table; border - collapse: separate }.input - group[class*= "col-"]{ float: none; padding - right: 0; padding - left: 0 }.input - group.form - control{ width: 100 %; margin - bottom: 0 }.input - group - lg >.form - control,.input - group - lg >.input - group - addon,.input - group - lg >.input - group - btn >.btn{ height: 46px; padding: 10px 16px; font - size: 18px; line - height: 1.33; border - radius: 6px } select.input - group - lg >.form - control, select.input - group - lg >.input - group - addon, select.input - group - lg >.input - group - btn >.btn{ height: 46px; line - height: 46px } textarea.input - group - lg >.form - control, textarea.input - group - lg >.input - group - addon, textarea.input - group - lg >.input - group - btn >.btn{ height: auto }.input - group - sm >.form - control,.input - group - sm >.input - group - addon,.input - group - sm >.input - group - btn >.btn{ height: 30px; padding: 5px 10px; font - size: 12px; line - height: 1.5; border - radius: 3px } select.input - group - sm >.form - control, select.input - group - sm >.input - group - addon, select.input - group - sm >.input - group - btn >.btn{ height: 30px; line - height: 30px } textarea.input - group - sm >.form - control, textarea.input - group - sm >.input - group - addon, textarea.input - group - sm >.input - group - btn >.btn{ height: auto }.input - group - addon,.input - group - btn,.input - group.form - control{ display: table - cell }.input - group - addon: not(: first - child): not(: last - child),.input - group - btn: not(: first - child): not(: last - child),.input - group.form - control: not(: first - child): not(: last - child){ border - radius: 0 }.input - group - addon,.input - group - btn{ width: 1 %; white - space: nowrap; vertical - align: middle }.input - group - addon{ padding: 6px 12px; font - size: 14px; font - weight: normal; line - height: 1; color:#555; text - align: center; background - color: #eee; border: 1px solid #ccc; border - radius: 4px }.input - group - addon.input - sm{ padding: 5px 10px; font - size: 12px; border - radius: 3px }.input - group - addon.input - lg{ padding: 10px 16px; font - size: 18px; border - radius: 6px }.input - group - addon input[type = "radio"],.input - group - addon input[type = "checkbox"]{ margin - top: 0 }.input - group.form - control: first - child,.input - group - addon: first - child,.input - group - btn: first - child >.btn,.input - group - btn: first - child >.dropdown - toggle,.input - group - btn: last - child >.btn: not(: last - child): not(.dropdown - toggle){ border - top - right - radius: 0; border - bottom - right - radius: 0 }.input - group - addon: first - child{ border - right: 0 }.input - group.form - control: last - child,.input - group - addon: last - child,.input - group - btn: last - child >.btn,.input - group - btn: last - child >.dropdown - toggle,.input - group - btn: first - child >.btn: not(: first - child){ border - bottom - left - radius: 0; border - top - left - radius: 0 }.input - group - addon: last - child{ border - left: 0 }.input - group - btn{ position: relative; white - space: nowrap }.input - group - btn: first - child >.btn{ margin - right: -1px }.input - group - btn: last - child >.btn{ margin - left: -1px }.input - group - btn >.btn{ position: relative }.input - group - btn >.btn +.btn{ margin - left: -4px }.input - group - btn >.btn: hover,.input - group - btn >.btn:active{ z - index: 2 }.nav{ padding - left: 0; margin - bottom: 0; list - style: none }.nav: before,.nav:after{ display: table; content: " " }.nav:after{ clear: both }.nav: before,.nav:after{ display: table; content: " " }.nav:after{ clear: both }.nav > li{ position: relative; display: block }.nav > li > a{ position: relative; display: block; padding: 10px 15px }.nav > li > a: hover,.nav > li > a:focus{ text - decoration: none; background - color: #eee }.nav > li.disabled > a{ color:#999 }.nav > li.disabled > a: hover,.nav > li.disabled > a:focus{ color:#999; text - decoration: none; cursor: not - allowed; background - color: transparent }.nav.open > a,.nav.open > a: hover,.nav.open > a:focus{ background - color: #eee; border - color:#428bca }.nav.nav - divider{ height: 1px; margin: 9px 0; overflow: hidden; background - color: #e5e5e5 }.nav > li > a > img{ max - width: none }.nav - tabs{ border - bottom: 1px solid #ddd }.nav - tabs > li{ float: left; margin - bottom: -1px }.nav - tabs > li > a{ margin - right: 2px; line - height: 1.428571429; border: 1px solid transparent; border - radius: 4px 4px 0 0 }.nav - tabs > li > a:hover{ border - color: #eee #eee #ddd }.nav - tabs > li.active > a,.nav - tabs > li.active > a: hover,.nav - tabs > li.active > a:focus{ color:#555; cursor:default ; background - color: #fff; border: 1px solid #ddd; border - bottom - color: transparent }.nav - tabs.nav - justified{ width: 100 %; border - bottom: 0 }.nav - tabs.nav - justified > li{ float: none }.nav - tabs.nav - justified > li > a{ margin - bottom: 5px; text - align: center }.nav - tabs.nav - justified >.dropdown.dropdown - menu{ top: auto; left: auto } @media(min - width: 768px) {.nav - tabs.nav - justified > li{ display: table - cell; width: 1 %}.nav - tabs.nav - justified > li > a{ margin - bottom: 0 } }.nav - tabs.nav - justified > li > a{ margin - right: 0; border - radius: 4px }.nav - tabs.nav - justified >.active > a,.nav - tabs.nav - justified >.active > a: hover,.nav - tabs.nav - justified >.active > a:focus{ border: 1px solid #ddd } @media(min - width: 768px) {.nav - tabs.nav - justified > li > a{ border - bottom: 1px solid #ddd; border - radius: 4px 4px 0 0 }.nav - tabs.nav - justified >.active > a,.nav - tabs.nav - justified >.active > a: hover,.nav - tabs.nav - justified >.active > a:focus{ border - bottom - color: #fff } }.nav - pills > li{ float: left }.nav - pills > li > a{ border - radius: 4px }.nav - pills > li + li{ margin - left: 2px }.nav - pills > li.active > a,.nav - pills > li.active > a: hover,.nav - pills > li.active > a:focus{ color: #fff; background - color:#428bca }.nav - stacked > li{ float: none }.nav - stacked > li + li{ margin - top: 2px; margin - left: 0 }.nav - justified{ width: 100 %}.nav - justified > li{ float: none }.nav - justified > li > a{ margin - bottom: 5px; text - align: center }.nav - justified >.dropdown.dropdown - menu{ top: auto; left: auto } @media(min - width: 768px) {.nav - justified > li{ display: table - cell; width: 1 %}.nav - justified > li > a{ margin - bottom: 0 } }.nav - tabs - justified{ border - bottom: 0 }.nav - tabs - justified > li > a{ margin - right: 0; border - radius: 4px }.nav - tabs - justified >.active > a,.nav - tabs - justified >.active > a: hover,.nav - tabs - justified >.active > a:focus{ border: 1px solid #ddd } @media(min - width: 768px) {.nav - tabs - justified > li > a{ border - bottom: 1px solid #ddd; border - radius: 4px 4px 0 0 }.nav - tabs - justified >.active > a,.nav - tabs - justified >.active > a: hover,.nav - tabs - justified >.active > a:focus{ border - bottom - color: #fff } }.tab - content >.tab - pane{ display: none }.tab - content >.active{ display: block }.nav - tabs.dropdown - menu{ margin - top: -1px; border - top - right - radius: 0; border - top - left - radius: 0 }.navbar{ position: relative; min - height: 50px; margin - bottom: 20px; border: 1px solid transparent }.navbar: before,.navbar:after{ display: table; content: " " }.navbar:after{ clear: both }.navbar: before,.navbar:after{ display: table; content: " " }.navbar:after{ clear: both } @media(min - width: 768px) {.navbar{ border - radius: 4px } }.navbar - header: before,.navbar - header:after{ display: table; content: " " }.navbar - header:after{ clear: both }.navbar - header: before,.navbar - header:after{ display: table; content: " " }.navbar - header:after{ clear: both } @media(min - width: 768px) {.navbar - header{ float: left } }.navbar - collapse{ max - height: 340px; padding - right: 15px; padding - left: 15px; overflow - x: visible; border - top: 1px solid transparent; box - shadow:inset 0 1px 0 rgba(255, 255, 255, 0.1); -webkit - overflow - scrolling: touch }.navbar - collapse: before,.navbar - collapse:after{ display: table; content: " " }.navbar - collapse:after{ clear: both }.navbar - collapse: before,.navbar - collapse:after{ display: table; content: " " }.navbar - collapse:after{ clear: both }.navbar - collapse.in{ overflow - y: auto } @media(min - width: 768px) {.navbar - collapse{ width: auto; border - top: 0; box - shadow: none }.navbar - collapse.collapse{ display: block!important; height: auto!important; padding - bottom: 0; overflow: visible!important }.navbar - collapse.in{ overflow - y: visible }.navbar - fixed - top.navbar - collapse,.navbar - static - top.navbar - collapse,.navbar - fixed - bottom.navbar - collapse{ padding - right: 0; padding - left: 0 } }.container >.navbar - header,.container >.navbar - collapse{ margin - right: -15px; margin - left: -15px } @media(min - width: 768px) {.container >.navbar - header,.container >.navbar - collapse{ margin - right: 0; margin - left: 0 } }.navbar - static - top{ z - index: 1000; border - width: 0 0 1px } @media(min - width: 768px) {.navbar - static - top{ border - radius: 0 } }.navbar - fixed - top,.navbar - fixed - bottom{ position: fixed; right: 0; left: 0; z - index: 1030 } @media(min - width: 768px) {.navbar - fixed - top,.navbar - fixed - bottom{ border - radius: 0 } }.navbar - fixed - top{ top: 0; border - width: 0 0 1px }.navbar - fixed - bottom{ bottom: 0; margin - bottom: 0; border - width: 1px 0 0 }.navbar - brand{ float: left; padding: 15px 15px; font - size: 18px; line - height: 20px }.navbar - brand: hover,.navbar - brand:focus{ text - decoration: none } @media(min - width: 768px) {.navbar >.container.navbar - brand{ margin - left: -15px } }.navbar - toggle{ position: relative; float: right; padding: 9px 10px; margin - top: 8px; margin - right: 15px; margin - bottom: 8px; background - color: transparent; background - image: none; border: 1px solid transparent; border - radius: 4px }.navbar - toggle.icon - bar{ display: block; width: 22px; height: 2px; border - radius: 1px }.navbar - toggle.icon - bar +.icon - bar{ margin - top: 4px } @media(min - width: 768px) {.navbar - toggle{ display: none } }.navbar - nav{ margin: 7.5px - 15px }.navbar - nav > li > a{ padding - top: 10px; padding - bottom: 10px; line - height: 20px } @media(max - width: 767px) {.navbar - nav.open.dropdown - menu{ position: static; float: none; width: auto; margin - top: 0; background - color: transparent; border: 0; box - shadow: none }.navbar - nav.open.dropdown - menu > li > a,.navbar - nav.open.dropdown - menu.dropdown - header{ padding: 5px 15px 5px 25px }.navbar - nav.open.dropdown - menu > li > a{ line - height: 20px }.navbar - nav.open.dropdown - menu > li > a: hover,.navbar - nav.open.dropdown - menu > li > a:focus{ background - image: none } } @media(min - width: 768px) {.navbar - nav{ float: left; margin: 0 }.navbar - nav > li{ float: left }.navbar - nav > li > a{ padding - top: 15px; padding - bottom: 15px }.navbar - nav.navbar - right: last - child{ margin - right: -15px } } @media(min - width: 768px) {.navbar - left{ float: left!important }.navbar - right{ float: right!important } }.navbar - form{ padding: 10px 15px; margin - top: 8px; margin - right: -15px; margin - bottom: 8px; margin - left: -15px; border - top: 1px solid transparent; border - bottom: 1px solid transparent; -webkit - box - shadow:inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1); box - shadow:inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1) } @media(min - width: 768px) {.navbar - form.form - group{ display: inline - block; margin - bottom: 0; vertical - align: middle }.navbar - form.form - control{ display: inline - block }.navbar - form select.form - control{ width: auto }.navbar - form.radio,.navbar - form.checkbox{ display: inline - block; padding - left: 0; margin - top: 0; margin - bottom: 0 }.navbar - form.radio input[type = "radio"],.navbar - form.checkbox input[type = "checkbox"]{ float: none; margin - left: 0 } } @media(max - width: 767px) {.navbar - form.form - group{ margin - bottom: 5px } } @media(min - width: 768px) {.navbar - form{ width: auto; padding - top: 0; padding - bottom: 0; margin - right: 0; margin - left: 0; border: 0; -webkit - box - shadow: none; box - shadow: none }.navbar - form.navbar - right: last - child{ margin - right: -15px } }.navbar - nav > li >.dropdown - menu{ margin - top: 0; border - top - right - radius: 0; border - top - left - radius: 0 }.navbar - fixed - bottom.navbar - nav > li >.dropdown - menu{ border - bottom - right - radius: 0; border - bottom - left - radius: 0 }.navbar - nav.pull - right > li >.dropdown - menu,.navbar - nav > li >.dropdown - menu.pull - right{ right: 0; left: auto }.navbar - btn{ margin - top: 8px; margin - bottom: 8px }.navbar - btn.btn - sm{ margin - top: 10px; margin - bottom: 10px }.navbar - btn.btn - xs{ margin - top: 14px; margin - bottom: 14px }.navbar - text{ margin - top: 15px; margin - bottom: 15px } @media(min - width: 768px) {.navbar - text{ float: left; margin - right: 15px; margin - left: 15px }.navbar - text.navbar - right: last - child{ margin - right: 0 } }.navbar -default { background - color: #f8f8f8; border - color: #e7e7e7 }.navbar -default .navbar - brand{ color:#777 }.navbar -default .navbar - brand: hover,.navbar -default .navbar - brand:focus{ color:#5e5e5e; background - color: transparent }.navbar -default .navbar - text{ color:#777 }.navbar -default .navbar - nav > li > a{ color:#777 }.navbar -default .navbar - nav > li > a: hover,.navbar -default .navbar - nav > li > a:focus{ color:#333; background - color: transparent }.navbar -default .navbar - nav >.active > a,.navbar -default .navbar - nav >.active > a: hover,.navbar -default .navbar - nav >.active > a:focus{ color:#555; background - color: #e7e7e7 }.navbar -default .navbar - nav >.disabled > a,.navbar -default .navbar - nav >.disabled > a: hover,.navbar -default .navbar - nav >.disabled > a:focus{ color: #ccc; background - color: transparent }.navbar -default .navbar - toggle{ border - color: #ddd }.navbar -default .navbar - toggle: hover,.navbar -default .navbar - toggle:focus{ background - color: #ddd }.navbar -default .navbar - toggle.icon - bar{ background - color: #ccc }.navbar -default .navbar - collapse,.navbar -default .navbar - form{ border - color: #e7e7e7 }.navbar -default .navbar - nav >.open > a,.navbar -default .navbar - nav >.open > a: hover,.navbar -default .navbar - nav >.open > a:focus{ color:#555; background - color: #e7e7e7 } @media(max - width: 767px) {.navbar -default .navbar - nav.open.dropdown - menu > li > a{ color:#777 }.navbar -default .navbar - nav.open.dropdown - menu > li > a: hover,.navbar -default .navbar - nav.open.dropdown - menu > li > a:focus{ color:#333; background - color: transparent }.navbar -default .navbar - nav.open.dropdown - menu >.active > a,.navbar -default .navbar - nav.open.dropdown - menu >.active > a: hover,.navbar -default .navbar - nav.open.dropdown - menu >.active > a:focus{ color:#555; background - color: #e7e7e7 }.navbar -default .navbar - nav.open.dropdown - menu >.disabled > a,.navbar -default .navbar - nav.open.dropdown - menu >.disabled > a: hover,.navbar -default .navbar - nav.open.dropdown - menu >.disabled > a:focus{ color: #ccc; background - color: transparent } }.navbar -default .navbar - link{ color:#777 }.navbar -default .navbar - link:hover{ color:#333 }.navbar - inverse{ background - color:#222; border - color:#080808 }.navbar - inverse.navbar - brand{ color:#999 }.navbar - inverse.navbar - brand: hover,.navbar - inverse.navbar - brand:focus{ color: #fff; background - color: transparent }.navbar - inverse.navbar - text{ color:#999 }.navbar - inverse.navbar - nav > li > a{ color:#999 }.navbar - inverse.navbar - nav > li > a: hover,.navbar - inverse.navbar - nav > li > a:focus{ color: #fff; background - color: transparent }.navbar - inverse.navbar - nav >.active > a,.navbar - inverse.navbar - nav >.active > a: hover,.navbar - inverse.navbar - nav >.active > a:focus{ color: #fff; background - color:#080808 }.navbar - inverse.navbar - nav >.disabled > a,.navbar - inverse.navbar - nav >.disabled > a: hover,.navbar - inverse.navbar - nav >.disabled > a:focus{ color:#444; background - color: transparent }.navbar - inverse.navbar - toggle{ border - color:#333 }.navbar - inverse.navbar - toggle: hover,.navbar - inverse.navbar - toggle:focus{ background - color:#333 }.navbar - inverse.navbar - toggle.icon - bar{ background - color: #fff }.navbar - inverse.navbar - collapse,.navbar - inverse.navbar - form{ border - color:#101010 }.navbar - inverse.navbar - nav >.open > a,.navbar - inverse.navbar - nav >.open > a: hover,.navbar - inverse.navbar - nav >.open > a:focus{ color: #fff; background - color:#080808 } @media(max - width: 767px) {.navbar - inverse.navbar - nav.open.dropdown - menu >.dropdown - header{ border - color:#080808 }.navbar - inverse.navbar - nav.open.dropdown - menu.divider{ background - color:#080808 }.navbar - inverse.navbar - nav.open.dropdown - menu > li > a{ color:#999 }.navbar - inverse.navbar - nav.open.dropdown - menu > li > a: hover,.navbar - inverse.navbar - nav.open.dropdown - menu > li > a:focus{ color: #fff; background - color: transparent }.navbar - inverse.navbar - nav.open.dropdown - menu >.active > a,.navbar - inverse.navbar - nav.open.dropdown - menu >.active > a: hover,.navbar - inverse.navbar - nav.open.dropdown - menu >.active > a:focus{ color: #fff; background - color:#080808 }.navbar - inverse.navbar - nav.open.dropdown - menu >.disabled > a,.navbar - inverse.navbar - nav.open.dropdown - menu >.disabled > a: hover,.navbar - inverse.navbar - nav.open.dropdown - menu >.disabled > a:focus{ color:#444; background - color: transparent } }.navbar - inverse.navbar - link{ color:#999 }.navbar - inverse.navbar - link:hover{ color: #fff }.breadcrumb{ padding: 8px 15px; margin - bottom: 20px; list - style: none; background - color: #f5f5f5; border - radius: 4px }.breadcrumb > li{ display: inline - block }.breadcrumb > li + li:before{ padding: 0 5px; color: #ccc; content: "/\00a0" }.breadcrumb >.active{ color:#999 }.pagination{ display: inline - block; padding - left: 0; margin: 20px 0; border - radius: 4px }.pagination > li{ display: inline }.pagination > li > a,.pagination > li > span{ position: relative; float: left; padding: 6px 12px; margin - left: -1px; line - height: 1.428571429; text - decoration: none; background - color: #fff; border: 1px solid #ddd }.pagination > li: first - child > a,.pagination > li: first - child > span{ margin - left: 0; border - bottom - left - radius: 4px; border - top - left - radius: 4px }.pagination > li: last - child > a,.pagination > li: last - child > span{ border - top - right - radius: 4px; border - bottom - right - radius: 4px }.pagination > li > a: hover,.pagination > li > span: hover,.pagination > li > a: focus,.pagination > li > span:focus{ background - color: #eee }.pagination >.active > a,.pagination >.active > span,.pagination >.active > a: hover,.pagination >.active > span: hover,.pagination >.active > a: focus,.pagination >.active > span:focus{ z - index: 2; color: #fff; cursor:default ; background - color:#428bca; border - color:#428bca }.pagination >.disabled > span,.pagination >.disabled > span: hover,.pagination >.disabled > span: focus,.pagination >.disabled > a,.pagination >.disabled > a: hover,.pagination >.disabled > a:focus{ color:#999; cursor: not - allowed; background - color: #fff; border - color: #ddd }.pagination - lg > li > a,.pagination - lg > li > span{ padding: 10px 16px; font - size: 18px }.pagination - lg > li: first - child > a,.pagination - lg > li: first - child > span{ border - bottom - left - radius: 6px; border - top - left - radius: 6px }.pagination - lg > li: last - child > a,.pagination - lg > li: last - child > span{ border - top - right - radius: 6px; border - bottom - right - radius: 6px }.pagination - sm > li > a,.pagination - sm > li > span{ padding: 5px 10px; font - size: 12px }.pagination - sm > li: first - child > a,.pagination - sm > li: first - child > span{ border - bottom - left - radius: 3px; border - top - left - radius: 3px }.pagination - sm > li: last - child > a,.pagination - sm > li: last - child > span{ border - top - right - radius: 3px; border - bottom - right - radius: 3px }.pager{ padding - left: 0; margin: 20px 0; text - align: center; list - style: none }.pager: before,.pager:after{ display: table; content: " " }.pager:after{ clear: both }.pager: before,.pager:after{ display: table; content: " " }.pager:after{ clear: both }.pager li{ display: inline }.pager li > a,.pager li > span{ display: inline - block; padding: 5px 14px; background - color: #fff; border: 1px solid #ddd; border - radius: 15px }.pager li > a: hover,.pager li > a:focus{ text - decoration: none; background - color: #eee }.pager.next > a,.pager.next > span{ float: right }.pager.previous > a,.pager.previous > span{ float: left }.pager.disabled > a,.pager.disabled > a: hover,.pager.disabled > a: focus,.pager.disabled > span{ color:#999; cursor: not - allowed; background - color: #fff }.label{ display: inline; padding: .2em .6em .3em; font - size: 75 %; font - weight: bold; line - height: 1; color: #fff; text - align: center; white - space: nowrap; vertical - align: baseline; border - radius: .25em }.label[href]: hover,.label[href]:focus{ color: #fff; text - decoration: none; cursor: pointer }.label:empty{ display: none }.btn.label{ position: relative; top: -1px }.label -default { background - color:#999 }.label -default [href]: hover,.label -default [href]:focus{ background - color:#808080 }.label - primary{ background - color:#428bca }.label - primary[href]: hover,.label - primary[href]:focus{ background - color:#3071a9 }.label - success{ background - color:#5cb85c }.label - success[href]: hover,.label - success[href]:focus{ background - color:#449d44 }.label - info{ background - color:#5bc0de }.label - info[href]: hover,.label - info[href]:focus{ background - color:#31b0d5 }.label - warning{ background - color: #f0ad4e }.label - warning[href]: hover,.label - warning[href]:focus{ background - color: #ec971f }.label - danger{ background - color: #d9534f }.label - danger[href]: hover,.label - danger[href]:focus{ background - color: #c9302c }.badge{ display: inline - block; min - width: 10px; padding: 3px 7px; font - size: 12px; font - weight: bold; line - height: 1; color: #fff; text - align: center; white - space: nowrap; vertical - align: baseline; background - color:#999; border - radius: 10px }.badge:empty{ display: none }.btn.badge{ position: relative; top: -1px } a.badge: hover, a.badge:focus{ color: #fff; text - decoration: none; cursor: pointer } a.list - group - item.active >.badge,.nav - pills >.active > a >.badge{ color:#428bca; background - color: #fff }.nav - pills > li > a >.badge{ margin - left: 3px }.jumbotron{ padding: 30px; margin - bottom: 30px; font - size: 21px; font - weight: 200; line - height: 2.1428571435; color: inherit; background - color: #eee }.jumbotron h1,.jumbotron.h1{ line - height: 1; color: inherit }.jumbotron p{ line - height: 1.4 }.container.jumbotron{ border - radius: 6px }.jumbotron.container{ max - width: 100 %} @media screen and(min - width: 768px){.jumbotron{ padding - top: 48px; padding - bottom: 48px }.container.jumbotron{ padding - right: 60px; padding - left: 60px }.jumbotron h1,.jumbotron.h1{ font - size: 63px } }.thumbnail{ display: block; padding: 4px; margin - bottom: 20px; line - height: 1.428571429; background - color: #fff; border: 1px solid #ddd; border - radius: 4px; -webkit - transition:all .2s ease -in -out; transition:all .2s ease -in -out }.thumbnail > img,.thumbnail a > img{ display: block; height: auto; max - width: 100 %; margin - right: auto; margin - left: auto } a.thumbnail: hover, a.thumbnail: focus, a.thumbnail.active{ border - color:#428bca }.thumbnail.caption{ padding: 9px; color:#333 }.alert{ padding: 15px; margin - bottom: 20px; border: 1px solid transparent; border - radius: 4px }.alert h4{ margin - top: 0; color: inherit }.alert.alert - link{ font - weight: bold }.alert > p,.alert > ul{ margin - bottom: 0 }.alert > p + p{ margin - top: 5px }.alert - dismissable{ padding - right: 35px }.alert - dismissable.close{ position: relative; top: -2px; right: -21px; color: inherit }.alert - success{ color:#3c763d; background - color: #dff0d8; border - color: #d6e9c6 }.alert - success hr{ border - top - color: #c9e2b3 }.alert - success.alert - link{ color:#2b542c }.alert - info{ color:#31708f; background - color: #d9edf7; border - color: #bce8f1 }.alert - info hr{ border - top - color: #a6e1ec }.alert - info.alert - link{ color:#245269 }.alert - warning{ color:#8a6d3b; background - color: #fcf8e3; border - color: #faebcc }.alert - warning hr{ border - top - color: #f7e1b5 }.alert - warning.alert - link{ color:#66512c }.alert - danger{ color: #a94442; background - color: #f2dede; border - color: #ebccd1 }.alert - danger hr{ border - top - color: #e4b9c0 }.alert - danger.alert - link{ color:#843534 } @-webkit - keyframes progress - bar - stripes{from{ background - position: 40px 0 }to{ background - position: 0 0 } } @keyframes progress - bar - stripes{from{ background - position: 40px 0 }to{ background - position: 0 0 } }.progress{ height: 20px; margin - bottom: 20px; overflow: hidden; background - color: #f5f5f5; border - radius: 4px; -webkit - box - shadow:inset 0 1px 2px rgba(0, 0, 0, 0.1); box - shadow:inset 0 1px 2px rgba(0, 0, 0, 0.1) }.progress - bar{ float: left; width: 0; height: 100 %; font - size: 12px; line - height: 20px; color: #fff; text - align: center; background - color:#428bca; -webkit - box - shadow:inset 0 - 1px 0 rgba(0, 0, 0, 0.15); box - shadow:inset 0 - 1px 0 rgba(0, 0, 0, 0.15); -webkit - transition:width .6s ease; transition:width .6s ease }.progress - striped.progress - bar{ background - image: -webkit - linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25 %, transparent 25 %, transparent 50 %, rgba(255, 255, 255, 0.15) 50 %, rgba(255, 255, 255, 0.15) 75 %, transparent 75 %, transparent); background - image: linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25 %, transparent 25 %, transparent 50 %, rgba(255, 255, 255, 0.15) 50 %, rgba(255, 255, 255, 0.15) 75 %, transparent 75 %, transparent); background - size: 40px 40px }.progress.active.progress - bar{ -webkit - animation: progress - bar - stripes 2s linear infinite; animation: progress - bar - stripes 2s linear infinite }.progress - bar - success{ background - color:#5cb85c }.progress - striped.progress - bar - success{ background - image: -webkit - linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25 %, transparent 25 %, transparent 50 %, rgba(255, 255, 255, 0.15) 50 %, rgba(255, 255, 255, 0.15) 75 %, transparent 75 %, transparent); background - image: linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25 %, transparent 25 %, transparent 50 %, rgba(255, 255, 255, 0.15) 50 %, rgba(255, 255, 255, 0.15) 75 %, transparent 75 %, transparent) }.progress - bar - info{ background - color:#5bc0de }.progress - striped.progress - bar - info{ background - image: -webkit - linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25 %, transparent 25 %, transparent 50 %, rgba(255, 255, 255, 0.15) 50 %, rgba(255, 255, 255, 0.15) 75 %, transparent 75 %, transparent); background - image: linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25 %, transparent 25 %, transparent 50 %, rgba(255, 255, 255, 0.15) 50 %, rgba(255, 255, 255, 0.15) 75 %, transparent 75 %, transparent) }.progress - bar - warning{ background - color: #f0ad4e }.progress - striped.progress - bar - warning{ background - image: -webkit - linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25 %, transparent 25 %, transparent 50 %, rgba(255, 255, 255, 0.15) 50 %, rgba(255, 255, 255, 0.15) 75 %, transparent 75 %, transparent); background - image: linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25 %, transparent 25 %, transparent 50 %, rgba(255, 255, 255, 0.15) 50 %, rgba(255, 255, 255, 0.15) 75 %, transparent 75 %, transparent) }.progress - bar - danger{ background - color: #d9534f }.progress - striped.progress - bar - danger{ background - image: -webkit - linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25 %, transparent 25 %, transparent 50 %, rgba(255, 255, 255, 0.15) 50 %, rgba(255, 255, 255, 0.15) 75 %, transparent 75 %, transparent); background - image: linear - gradient(45deg, rgba(255, 255, 255, 0.15) 25 %, transparent 25 %, transparent 50 %, rgba(255, 255, 255, 0.15) 50 %, rgba(255, 255, 255, 0.15) 75 %, transparent 75 %, transparent) }.media,.media - body{ overflow: hidden; zoom: 1 }.media,.media.media{ margin - top: 15px }.media: first - child{ margin - top: 0 }.media - object{ display: block }.media - heading{ margin: 0 0 5px }.media >.pull - left{ margin - right: 10px }.media >.pull - right{ margin - left: 10px }.media - list{ padding - left: 0; list - style: none }.list - group{ padding - left: 0; margin - bottom: 20px }.list - group - item{ position: relative; display: block; padding: 10px 15px; margin - bottom: -1px; background - color: #fff; border: 1px solid #ddd }.list - group - item: first - child{ border - top - right - radius: 4px; border - top - left - radius: 4px }.list - group - item: last - child{ margin - bottom: 0; border - bottom - right - radius: 4px; border - bottom - left - radius: 4px }.list - group - item >.badge{ float: right }.list - group - item >.badge +.badge{ margin - right: 5px } a.list - group - item{ color:#555 } a.list - group - item.list - group - item - heading{ color:#333 } a.list - group - item: hover, a.list - group - item:focus{ text - decoration: none; background - color: #f5f5f5 } a.list - group - item.active, a.list - group - item.active: hover, a.list - group - item.active:focus{ z - index: 2; color: #fff; background - color:#428bca; border - color:#428bca } a.list - group - item.active.list - group - item - heading, a.list - group - item.active: hover.list - group - item - heading, a.list - group - item.active: focus.list - group - item - heading{ color: inherit } a.list - group - item.active.list - group - item - text, a.list - group - item.active: hover.list - group - item - text, a.list - group - item.active: focus.list - group - item - text{ color: #e1edf7 }.list - group - item - heading{ margin - top: 0; margin - bottom: 5px }.list - group - item - text{ margin - bottom: 0; line - height: 1.3 }.panel{ margin - bottom: 20px; background - color: #fff; border: 1px solid transparent; border - radius: 4px; -webkit - box - shadow: 0 1px 1px rgba(0, 0, 0, 0.05); box - shadow: 0 1px 1px rgba(0, 0, 0, 0.05) }.panel - body{ padding: 15px }.panel - body: before,.panel - body:after{ display: table; content: " " }.panel - body:after{ clear: both }.panel - body: before,.panel - body:after{ display: table; content: " " }.panel - body:after{ clear: both }.panel >.list - group{ margin - bottom: 0 }.panel >.list - group.list - group - item{ border - width: 1px 0 }.panel >.list - group.list - group - item: first - child{ border - top - right - radius: 0; border - top - left - radius: 0 }.panel >.list - group.list - group - item: last - child{ border - bottom: 0 }.panel - heading +.list - group.list - group - item: first - child{ border - top - width: 0 }.panel >.table,.panel >.table - responsive >.table{ margin - bottom: 0 }.panel >.panel - body +.table,.panel >.panel - body +.table - responsive{ border - top: 1px solid #ddd }.panel >.table > tbody: first - child th,.panel >.table > tbody: first - child td{ border - top: 0 }.panel >.table - bordered,.panel >.table - responsive >.table - bordered{ border: 0 }.panel >.table - bordered > thead > tr > th: first - child,.panel >.table - responsive >.table - bordered > thead > tr > th: first - child,.panel >.table - bordered > tbody > tr > th: first - child,.panel >.table - responsive >.table - bordered > tbody > tr > th: first - child,.panel >.table - bordered > tfoot > tr > th: first - child,.panel >.table - responsive >.table - bordered > tfoot > tr > th: first - child,.panel >.table - bordered > thead > tr > td: first - child,.panel >.table - responsive >.table - bordered > thead > tr > td: first - child,.panel >.table - bordered > tbody > tr > td: first - child,.panel >.table - responsive >.table - bordered > tbody > tr > td: first - child,.panel >.table - bordered > tfoot > tr > td: first - child,.panel >.table - responsive >.table - bordered > tfoot > tr > td: first - child{ border - left: 0 }.panel >.table - bordered > thead > tr > th: last - child,.panel >.table - responsive >.table - bordered > thead > tr > th: last - child,.panel >.table - bordered > tbody > tr > th: last - child,.panel >.table - responsive >.table - bordered > tbody > tr > th: last - child,.panel >.table - bordered > tfoot > tr > th: last - child,.panel >.table - responsive >.table - bordered > tfoot > tr > th: last - child,.panel >.table - bordered > thead > tr > td: last - child,.panel >.table - responsive >.table - bordered > thead > tr > td: last - child,.panel >.table - bordered > tbody > tr > td: last - child,.panel >.table - responsive >.table - bordered > tbody > tr > td: last - child,.panel >.table - bordered > tfoot > tr > td: last - child,.panel >.table - responsive >.table - bordered > tfoot > tr > td: last - child{ border - right: 0 }.panel >.table - bordered > thead > tr: last - child > th,.panel >.table - responsive >.table - bordered > thead > tr: last - child > th,.panel >.table - bordered > tbody > tr: last - child > th,.panel >.table - responsive >.table - bordered > tbody > tr: last - child > th,.panel >.table - bordered > tfoot > tr: last - child > th,.panel >.table - responsive >.table - bordered > tfoot > tr: last - child > th,.panel >.table - bordered > thead > tr: last - child > td,.panel >.table - responsive >.table - bordered > thead > tr: last - child > td,.panel >.table - bordered > tbody > tr: last - child > td,.panel >.table - responsive >.table - bordered > tbody > tr: last - child > td,.panel >.table - bordered > tfoot > tr: last - child > td,.panel >.table - responsive >.table - bordered > tfoot > tr: last - child > td{ border - bottom: 0 }.panel >.table - responsive{ margin - bottom: 0; border: 0 }.panel - heading{ padding: 10px 15px; border - bottom: 1px solid transparent; border - top - right - radius: 3px; border - top - left - radius: 3px }.panel - heading >.dropdown.dropdown - toggle{ color: inherit }.panel - title{ margin - top: 0; margin - bottom: 0; font - size: 16px; color: inherit }.panel - title > a{ color: inherit }.panel - footer{ padding: 10px 15px; background - color: #f5f5f5; border - top: 1px solid #ddd; border - bottom - right - radius: 3px; border - bottom - left - radius: 3px }.panel - group.panel{ margin - bottom: 0; overflow: hidden; border - radius: 4px }.panel - group.panel +.panel{ margin - top: 5px }.panel - group.panel - heading{ border - bottom: 0 }.panel - group.panel - heading +.panel - collapse.panel - body{ border - top: 1px solid #ddd }.panel - group.panel - footer{ border - top: 0 }.panel - group.panel - footer +.panel - collapse.panel - body{ border - bottom: 1px solid #ddd }.panel -default { border - color: #ddd }.panel -default>.panel - heading{ color:#333; background - color: #f5f5f5; border - color: #ddd }.panel -default>.panel - heading +.panel - collapse.panel - body{ border - top - color: #ddd }.panel -default>.panel - footer +.panel - collapse.panel - body{ border - bottom - color: #ddd }.panel - primary{ border - color:#428bca }.panel - primary >.panel - heading{ color: #fff; background - color:#428bca; border - color:#428bca }.panel - primary >.panel - heading +.panel - collapse.panel - body{ border - top - color:#428bca }.panel - primary >.panel - footer +.panel - collapse.panel - body{ border - bottom - color:#428bca }.panel - success{ border - color: #d6e9c6 }.panel - success >.panel - heading{ color:#3c763d; background - color: #dff0d8; border - color: #d6e9c6 }.panel - success >.panel - heading +.panel - collapse.panel - body{ border - top - color: #d6e9c6 }.panel - success >.panel - footer +.panel - collapse.panel - body{ border - bottom - color: #d6e9c6 }.panel - warning{ border - color: #faebcc }.panel - warning >.panel - heading{ color:#8a6d3b; background - color: #fcf8e3; border - color: #faebcc }.panel - warning >.panel - heading +.panel - collapse.panel - body{ border - top - color: #faebcc }.panel - warning >.panel - footer +.panel - collapse.panel - body{ border - bottom - color: #faebcc }.panel - danger{ border - color: #ebccd1 }.panel - danger >.panel - heading{ color: #a94442; background - color: #f2dede; border - color: #ebccd1 }.panel - danger >.panel - heading +.panel - collapse.panel - body{ border - top - color: #ebccd1 }.panel - danger >.panel - footer +.panel - collapse.panel - body{ border - bottom - color: #ebccd1 }.panel - info{ border - color: #bce8f1 }.panel - info >.panel - heading{ color:#31708f; background - color: #d9edf7; border - color: #bce8f1 }.panel - info >.panel - heading +.panel - collapse.panel - body{ border - top - color: #bce8f1 }.panel - info >.panel - footer +.panel - collapse.panel - body{ border - bottom - color: #bce8f1 }.well{ min - height: 20px; padding: 19px; margin - bottom: 20px; background - color: #f5f5f5; border: 1px solid #e3e3e3; border - radius: 4px; -webkit - box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.05); box - shadow:inset 0 1px 1px rgba(0, 0, 0, 0.05) }.well blockquote{ border - color: #ddd; border - color: rgba(0, 0, 0, 0.15) }.well - lg{ padding: 24px; border - radius: 6px }.well - sm{ padding: 9px; border - radius: 3px }.close{ float: right; font - size: 21px; font - weight: bold; line - height: 1; color:#000; text - shadow: 0 1px 0 #fff; opacity: .2; filter: alpha(opacity = 20) }.close: hover,.close:focus{ color:#000; text - decoration: none; cursor: pointer; opacity: .5; filter: alpha(opacity = 50) } button.close{ padding: 0; cursor: pointer; background: transparent; border: 0; -webkit - appearance: none }.modal - open{ overflow: hidden }.modal{ position: fixed; top: 0; right: 0; bottom: 0; left: 0; z - index: 1040; display: none; overflow: auto; overflow - y: scroll }.modal.fade.modal - dialog{ -webkit - transform: translate(0, -25 %); -ms - transform: translate(0, -25 %); transform: translate(0, -25 %); -webkit - transition: -webkit - transform .3s ease - out; -moz - transition: -moz - transform .3s ease - out; -o - transition: -o - transform .3s ease - out; transition:transform .3s ease - out }.modal.in.modal - dialog{ -webkit - transform: translate(0, 0); -ms - transform: translate(0, 0); transform: translate(0, 0) }.modal - dialog{ position: relative; z - index: 1050; width: auto; margin: 10px }.modal - content{ position: relative; background - color: #fff; border: 1px solid #999; border: 1px solid rgba(0, 0, 0, 0.2); border - radius: 6px; outline: 0; -webkit - box - shadow: 0 3px 9px rgba(0, 0, 0, 0.5); box - shadow: 0 3px 9px rgba(0, 0, 0, 0.5); background - clip: padding - box }.modal - backdrop{ position: fixed; top: 0; right: 0; bottom: 0; left: 0; z - index: 1030; background - color:#000 }.modal - backdrop.fade{ opacity: 0; filter: alpha(opacity = 0) }.modal - backdrop.in{ opacity: .5; filter: alpha(opacity = 50) }.modal - header{ min - height: 16.428571429px; padding: 15px; border - bottom: 1px solid #e5e5e5 }.modal - header.close{ margin - top: -2px }.modal - title{ margin: 0; line - height: 1.428571429 }.modal - body{ position: relative; padding: 20px }.modal - footer{ padding: 19px 20px 20px; margin - top: 15px; text - align: right; border - top: 1px solid #e5e5e5 }.modal - footer: before,.modal - footer:after{ display: table; content: " " }.modal - footer:after{ clear: both }.modal - footer: before,.modal - footer:after{ display: table; content: " " }.modal - footer:after{ clear: both }.modal - footer.btn +.btn{ margin - bottom: 0; margin - left: 5px }.modal - footer.btn - group.btn +.btn{ margin - left: -1px }.modal - footer.btn - block +.btn - block{ margin - left: 0 } @media screen and(min - width: 768px){.modal - dialog{ width: 600px; margin: 30px auto }.modal - content{ -webkit - box - shadow: 0 5px 15px rgba(0, 0, 0, 0.5); box - shadow: 0 5px 15px rgba(0, 0, 0, 0.5) } }.tooltip{ position: absolute; z - index: 1030; display: block; font - size: 12px; line - height: 1.4; opacity: 0; filter: alpha(opacity = 0); visibility: visible }.tooltip.in{ opacity: .9; filter: alpha(opacity = 90) }.tooltip.top{ padding: 5px 0; margin - top: -3px }.tooltip.right{ padding: 0 5px; margin - left: 3px }.tooltip.bottom{ padding: 5px 0; margin - top: 3px }.tooltip.left{ padding: 0 5px; margin - left: -3px }.tooltip - inner{ max - width: 200px; padding: 3px 8px; color: #fff; text - align: center; text - decoration: none; background - color:#000; border - radius: 4px }.tooltip - arrow{ position: absolute; width: 0; height: 0; border - color: transparent; border - style: solid }.tooltip.top.tooltip - arrow{ bottom: 0; left: 50 %; margin - left: -5px; border - top - color:#000; border - width: 5px 5px 0 }.tooltip.top - left.tooltip - arrow{ bottom: 0; left: 5px; border - top - color:#000; border - width: 5px 5px 0 }.tooltip.top - right.tooltip - arrow{ right: 5px; bottom: 0; border - top - color:#000; border - width: 5px 5px 0 }.tooltip.right.tooltip - arrow{ top: 50 %; left: 0; margin - top: -5px; border - right - color:#000; border - width: 5px 5px 5px 0 }.tooltip.left.tooltip - arrow{ top: 50 %; right: 0; margin - top: -5px; border - left - color:#000; border - width: 5px 0 5px 5px }.tooltip.bottom.tooltip - arrow{ top: 0; left: 50 %; margin - left: -5px; border - bottom - color:#000; border - width: 0 5px 5px }.tooltip.bottom - left.tooltip - arrow{ top: 0; left: 5px; border - bottom - color:#000; border - width: 0 5px 5px }.tooltip.bottom - right.tooltip - arrow{ top: 0; right: 5px; border - bottom - color:#000; border - width: 0 5px 5px }.popover{ position: absolute; top: 0; left: 0; z - index: 1010; display: none; max - width: 276px; padding: 1px; text - align: left; white - space: normal; background - color: #fff; border: 1px solid #ccc; border: 1px solid rgba(0, 0, 0, 0.2); border - radius: 6px; -webkit - box - shadow: 0 5px 10px rgba(0, 0, 0, 0.2); box - shadow: 0 5px 10px rgba(0, 0, 0, 0.2); background - clip: padding - box }.popover.top{ margin - top: -10px }.popover.right{ margin - left: 10px }.popover.bottom{ margin - top: 10px }.popover.left{ margin - left: -10px }.popover - title{ padding: 8px 14px; margin: 0; font - size: 14px; font - weight: normal; line - height: 18px; background - color: #f7f7f7; border - bottom: 1px solid #ebebeb; border - radius: 5px 5px 0 0 }.popover - content{ padding: 9px 14px }.popover.arrow,.popover.arrow:after{ position: absolute; display: block; width: 0; height: 0; border - color: transparent; border - style: solid }.popover.arrow{ border - width: 11px }.popover.arrow:after{ border - width: 10px; content: "" }.popover.top.arrow{ bottom: -11px; left: 50 %; margin - left: -11px; border - top - color:#999; border - top - color: rgba(0, 0, 0, 0.25); border - bottom - width: 0 }.popover.top.arrow:after{ bottom: 1px; margin - left: -10px; border - top - color: #fff; border - bottom - width: 0; content: " " }.popover.right.arrow{ top: 50 %; left: -11px; margin - top: -11px; border - right - color:#999; border - right - color: rgba(0, 0, 0, 0.25); border - left - width: 0 }.popover.right.arrow:after{ bottom: -10px; left: 1px; border - right - color: #fff; border - left - width: 0; content: " " }.popover.bottom.arrow{ top: -11px; left: 50 %; margin - left: -11px; border - bottom - color:#999; border - bottom - color: rgba(0, 0, 0, 0.25); border - top - width: 0 }.popover.bottom.arrow:after{ top: 1px; margin - left: -10px; border - bottom - color: #fff; border - top - width: 0; content: " " }.popover.left.arrow{ top: 50 %; right: -11px; margin - top: -11px; border - left - color:#999; border - left - color: rgba(0, 0, 0, 0.25); border - right - width: 0 }.popover.left.arrow:after{ right: 1px; bottom: -10px; border - left - color: #fff; border - right - width: 0; content: " " }.carousel{ position: relative }.carousel - inner{ position: relative; width: 100 %; overflow: hidden }.carousel - inner >.item{ position: relative; display: none; -webkit - transition: .6s ease -in -out left; transition: .6s ease -in -out left }.carousel - inner >.item > img,.carousel - inner >.item > a > img{ display: block; height: auto; max - width: 100 %; line - height: 1 }.carousel - inner >.active,.carousel - inner >.next,.carousel - inner >.prev{ display: block }.carousel - inner >.active{ left: 0 }.carousel - inner >.next,.carousel - inner >.prev{ position: absolute; top: 0; width: 100 %}.carousel - inner >.next{ left: 100 %}.carousel - inner >.prev{ left: -100 %}.carousel - inner >.next.left,.carousel - inner >.prev.right{ left: 0 }.carousel - inner >.active.left{ left: -100 %}.carousel - inner >.active.right{ left: 100 %}.carousel - control{ position: absolute; top: 0; bottom: 0; left: 0; width: 15 %; font - size: 20px; color: #fff; text - align: center; text - shadow: 0 1px 2px rgba(0, 0, 0, 0.6); opacity: .5; filter: alpha(opacity = 50) }.carousel - control.left{ background - image: -webkit - linear - gradient(left, color - stop(rgba(0, 0, 0, 0.5) 0), color - stop(rgba(0, 0, 0, 0.0001) 100 %)); background - image: linear - gradient(to right, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0.0001) 100 %); background - repeat: repeat - x; filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = '#80000000', endColorstr = '#00000000', GradientType = 1) }.carousel - control.right{ right: 0; left: auto; background - image: -webkit - linear - gradient(left, color - stop(rgba(0, 0, 0, 0.0001) 0), color - stop(rgba(0, 0, 0, 0.5) 100 %)); background - image: linear - gradient(to right, rgba(0, 0, 0, 0.0001) 0, rgba(0, 0, 0, 0.5) 100 %); background - repeat: repeat - x; filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = '#00000000', endColorstr = '#80000000', GradientType = 1) }.carousel - control: hover,.carousel - control:focus{ color: #fff; text - decoration: none; outline: 0; opacity: .9; filter: alpha(opacity = 90) }.carousel - control.icon - prev,.carousel - control.icon - next,.carousel - control.glyphicon - chevron - left,.carousel - control.glyphicon - chevron - right{ position: absolute; top: 50 %; z - index: 5; display: inline - block }.carousel - control.icon - prev,.carousel - control.glyphicon - chevron - left{ left: 50 %}.carousel - control.icon - next,.carousel - control.glyphicon - chevron - right{ right: 50 %}.carousel - control.icon - prev,.carousel - control.icon - next{ width: 20px; height: 20px; margin - top: -10px; margin - left: -10px; font - family: serif }.carousel - control.icon - prev:before{ content: '\2039' }.carousel - control.icon - next:before{ content: '\203a' }.carousel - indicators{ position: absolute; bottom: 10px; left: 50 %; z - index: 15; width: 60 %; padding - left: 0; margin - left: -30 %; text - align: center; list - style: none }.carousel - indicators li{ display: inline - block; width: 10px; height: 10px; margin: 1px; text - indent: -999px; cursor: pointer; background - color:#000 \9; background - color: rgba(0, 0, 0, 0); border: 1px solid #fff; border - radius: 10px }.carousel - indicators.active{ width: 12px; height: 12px; margin: 0; background - color: #fff }.carousel - caption{ position: absolute; right: 15 %; bottom: 20px; left: 15 %; z - index: 10; padding - top: 20px; padding - bottom: 20px; color: #fff; text - align: center; text - shadow: 0 1px 2px rgba(0, 0, 0, 0.6) }.carousel - caption.btn{ text - shadow: none } @media screen and(min - width: 768px){.carousel - control.glyphicons - chevron - left,.carousel - control.glyphicons - chevron - right,.carousel - control.icon - prev,.carousel - control.icon - next{ width: 30px; height: 30px; margin - top: -15px; margin - left: -15px; font - size: 30px }.carousel - caption{ right: 20 %; left: 20 %; padding - bottom: 30px }.carousel - indicators{ bottom: 20px } }.clearfix: before,.clearfix:after{ display: table; content: " " }.clearfix:after{ clear: both }.center - block{ display: block; margin - right: auto; margin - left: auto }.pull - right{ float: right!important }.pull - left{ float: left!important }.hide{ display: none!important }.show{ display: block!important }.invisible{ visibility: hidden }.text - hide{ font: 0 / 0 a; color: transparent; text - shadow: none; background - color: transparent; border: 0 }.hidden{ display: none!important; visibility: hidden!important }.affix{ position: fixed } @-ms - viewport{ width: device - width }.visible - xs, tr.visible - xs, th.visible - xs, td.visible - xs{ display: none!important } @media(max - width: 767px) {.visible - xs{ display: block!important } table.visible - xs{ display: table } tr.visible - xs{ display: table - row!important } th.visible - xs, td.visible - xs{ display: table - cell!important } } @media(min - width: 768px) and(max - width: 991px){.visible - xs.visible - sm{ display: block!important } table.visible - xs.visible - sm{ display: table } tr.visible - xs.visible - sm{ display: table - row!important } th.visible - xs.visible - sm, td.visible - xs.visible - sm{ display: table - cell!important } } @media(min - width: 992px) and(max - width: 1199px){.visible - xs.visible - md{ display: block!important } table.visible - xs.visible - md{ display: table } tr.visible - xs.visible - md{ display: table - row!important } th.visible - xs.visible - md, td.visible - xs.visible - md{ display: table - cell!important } } @media(min - width: 1200px) {.visible - xs.visible - lg{ display: block!important } table.visible - xs.visible - lg{ display: table } tr.visible - xs.visible - lg{ display: table - row!important } th.visible - xs.visible - lg, td.visible - xs.visible - lg{ display: table - cell!important } }.visible - sm, tr.visible - sm, th.visible - sm, td.visible - sm{ display: none!important } @media(max - width: 767px) {.visible - sm.visible - xs{ display: block!important } table.visible - sm.visible - xs{ display: table } tr.visible - sm.visible - xs{ display: table - row!important } th.visible - sm.visible - xs, td.visible - sm.visible - xs{ display: table - cell!important } } @media(min - width: 768px) and(max - width: 991px){.visible - sm{ display: block!important } table.visible - sm{ display: table } tr.visible - sm{ display: table - row!important } th.visible - sm, td.visible - sm{ display: table - cell!important } } @media(min - width: 992px) and(max - width: 1199px){.visible - sm.visible - md{ display: block!important } table.visible - sm.visible - md{ display: table } tr.visible - sm.visible - md{ display: table - row!important } th.visible - sm.visible - md, td.visible - sm.visible - md{ display: table - cell!important } } @media(min - width: 1200px) {.visible - sm.visible - lg{ display: block!important } table.visible - sm.visible - lg{ display: table } tr.visible - sm.visible - lg{ display: table - row!important } th.visible - sm.visible - lg, td.visible - sm.visible - lg{ display: table - cell!important } }.visible - md, tr.visible - md, th.visible - md, td.visible - md{ display: none!important } @media(max - width: 767px) {.visible - md.visible - xs{ display: block!important } table.visible - md.visible - xs{ display: table } tr.visible - md.visible - xs{ display: table - row!important } th.visible - md.visible - xs, td.visible - md.visible - xs{ display: table - cell!important } } @media(min - width: 768px) and(max - width: 991px){.visible - md.visible - sm{ display: block!important } table.visible - md.visible - sm{ display: table } tr.visible - md.visible - sm{ display: table - row!important } th.visible - md.visible - sm, td.visible - md.visible - sm{ display: table - cell!important } } @media(min - width: 992px) and(max - width: 1199px){.visible - md{ display: block!important } table.visible - md{ display: table } tr.visible - md{ display: table - row!important } th.visible - md, td.visible - md{ display: table - cell!important } } @media(min - width: 1200px) {.visible - md.visible - lg{ display: block!important } table.visible - md.visible - lg{ display: table } tr.visible - md.visible - lg{ display: table - row!important } th.visible - md.visible - lg, td.visible - md.visible - lg{ display: table - cell!important } }.visible - lg, tr.visible - lg, th.visible - lg, td.visible - lg{ display: none!important } @media(max - width: 767px) {.visible - lg.visible - xs{ display: block!important } table.visible - lg.visible - xs{ display: table } tr.visible - lg.visible - xs{ display: table - row!important } th.visible - lg.visible - xs, td.visible - lg.visible - xs{ display: table - cell!important } } @media(min - width: 768px) and(max - width: 991px){.visible - lg.visible - sm{ display: block!important } table.visible - lg.visible - sm{ display: table } tr.visible - lg.visible - sm{ display: table - row!important } th.visible - lg.visible - sm, td.visible - lg.visible - sm{ display: table - cell!important } } @media(min - width: 992px) and(max - width: 1199px){.visible - lg.visible - md{ display: block!important } table.visible - lg.visible - md{ display: table } tr.visible - lg.visible - md{ display: table - row!important } th.visible - lg.visible - md, td.visible - lg.visible - md{ display: table - cell!important } } @media(min - width: 1200px) {.visible - lg{ display: block!important } table.visible - lg{ display: table } tr.visible - lg{ display: table - row!important } th.visible - lg, td.visible - lg{ display: table - cell!important } }.hidden - xs{ display: block!important } table.hidden - xs{ display: table } tr.hidden - xs{ display: table - row!important } th.hidden - xs, td.hidden - xs{ display: table - cell!important } @media(max - width: 767px) {.hidden - xs, tr.hidden - xs, th.hidden - xs, td.hidden - xs{ display: none!important } } @media(min - width: 768px) and(max - width: 991px){.hidden - xs.hidden - sm, tr.hidden - xs.hidden - sm, th.hidden - xs.hidden - sm, td.hidden - xs.hidden - sm{ display: none!important } } @media(min - width: 992px) and(max - width: 1199px){.hidden - xs.hidden - md, tr.hidden - xs.hidden - md, th.hidden - xs.hidden - md, td.hidden - xs.hidden - md{ display: none!important } } @media(min - width: 1200px) {.hidden - xs.hidden - lg, tr.hidden - xs.hidden - lg, th.hidden - xs.hidden - lg, td.hidden - xs.hidden - lg{ display: none!important } }.hidden - sm{ display: block!important } table.hidden - sm{ display: table } tr.hidden - sm{ display: table - row!important } th.hidden - sm, td.hidden - sm{ display: table - cell!important } @media(max - width: 767px) {.hidden - sm.hidden - xs, tr.hidden - sm.hidden - xs, th.hidden - sm.hidden - xs, td.hidden - sm.hidden - xs{ display: none!important } } @media(min - width: 768px) and(max - width: 991px){.hidden - sm, tr.hidden - sm, th.hidden - sm, td.hidden - sm{ display: none!important } } @media(min - width: 992px) and(max - width: 1199px){.hidden - sm.hidden - md, tr.hidden - sm.hidden - md, th.hidden - sm.hidden - md, td.hidden - sm.hidden - md{ display: none!important } } @media(min - width: 1200px) {.hidden - sm.hidden - lg, tr.hidden - sm.hidden - lg, th.hidden - sm.hidden - lg, td.hidden - sm.hidden - lg{ display: none!important } }.hidden - md{ display: block!important } table.hidden - md{ display: table } tr.hidden - md{ display: table - row!important } th.hidden - md, td.hidden - md{ display: table - cell!important } @media(max - width: 767px) {.hidden - md.hidden - xs, tr.hidden - md.hidden - xs, th.hidden - md.hidden - xs, td.hidden - md.hidden - xs{ display: none!important } } @media(min - width: 768px) and(max - width: 991px){.hidden - md.hidden - sm, tr.hidden - md.hidden - sm, th.hidden - md.hidden - sm, td.hidden - md.hidden - sm{ display: none!important } } @media(min - width: 992px) and(max - width: 1199px){.hidden - md, tr.hidden - md, th.hidden - md, td.hidden - md{ display: none!important } } @media(min - width: 1200px) {.hidden - md.hidden - lg, tr.hidden - md.hidden - lg, th.hidden - md.hidden - lg, td.hidden - md.hidden - lg{ display: none!important } }.hidden - lg{ display: block!important } table.hidden - lg{ display: table } tr.hidden - lg{ display: table - row!important } th.hidden - lg, td.hidden - lg{ display: table - cell!important } @media(max - width: 767px) {.hidden - lg.hidden - xs, tr.hidden - lg.hidden - xs, th.hidden - lg.hidden - xs, td.hidden - lg.hidden - xs{ display: none!important } } @media(min - width: 768px) and(max - width: 991px){.hidden - lg.hidden - sm, tr.hidden - lg.hidden - sm, th.hidden - lg.hidden - sm, td.hidden - lg.hidden - sm{ display: none!important } } @media(min - width: 992px) and(max - width: 1199px){.hidden - lg.hidden - md, tr.hidden - lg.hidden - md, th.hidden - lg.hidden - md, td.hidden - lg.hidden - md{ display: none!important } } @media(min - width: 1200px) {.hidden - lg, tr.hidden - lg, th.hidden - lg, td.hidden - lg{ display: none!important } }.visible - print, tr.visible - print, th.visible - print, td.visible - print{ display: none!important } @media print{.visible - print{ display: block!important } table.visible - print{ display: table } tr.visible - print{ display: table - row!important } th.visible - print, td.visible - print{ display: table - cell!important }.hidden - print, tr.hidden - print, th.hidden - print, td.hidden - print{ display: none!important } }


/*!
 * Datepicker for Bootstrap
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */
.datepicker {
	padding: 4px;
	-webkit - border - radius: 4px;
	-moz - border - radius: 4px;
	border - radius: 4px;
	direction: ltr;
	/*.dow {
		  border-top: 1px solid #ddd !important;
	  }*/

}
  .datepicker - inline {
	width: 220px;
}
  .datepicker.datepicker - rtl {
	direction: rtl;
}
  .datepicker.datepicker - rtl table tr td span {
	float: right;
}
  .datepicker - dropdown {
	top: 0;
	left: 0;
}
  .datepicker - dropdown:before {
	content: '';
	display: inline - block;
	border - left: 7px solid transparent;
	border - right: 7px solid transparent;
	border - bottom: 7px solid #ccc;
	border - top: 0;
	border - bottom - color: rgba(0, 0, 0, 0.2);
	position: absolute;
}
  .datepicker - dropdown:after {
	content: '';
	display: inline - block;
	border - left: 6px solid transparent;
	border - right: 6px solid transparent;
	border - bottom: 6px solid #ffffff;
	border - top: 0;
	position: absolute;
}
  .datepicker - dropdown.datepicker - orient - left:before {
	left: 6px;
}
  .datepicker - dropdown.datepicker - orient - left:after {
	left: 7px;
}
  .datepicker - dropdown.datepicker - orient - right:before {
	right: 6px;
}
  .datepicker - dropdown.datepicker - orient - right:after {
	right: 7px;
}
  .datepicker - dropdown.datepicker - orient - top:before {
	top: -7px;
}
  .datepicker - dropdown.datepicker - orient - top:after {
	top: -6px;
}
  .datepicker - dropdown.datepicker - orient - bottom:before {
	bottom: -7px;
	border - bottom: 0;
	border - top: 7px solid #999;
}
  .datepicker - dropdown.datepicker - orient - bottom:after {
	bottom: -6px;
	border - bottom: 0;
	border - top: 6px solid #ffffff;
}
  .datepicker > div {
	display: none;
}
  .datepicker.days div.datepicker - days {
	display: block;
}
  .datepicker.months div.datepicker - months {
	display: block;
}
  .datepicker.years div.datepicker - years {
	display: block;
}
  .datepicker table {
	margin: 0;
	-webkit - touch - callout: none;
	-webkit - user - select: none;
	-khtml - user - select: none;
	-moz - user - select: none;
	-ms - user - select: none;
	user - select: none;
}
  .datepicker td,
  .datepicker th {
	text - align: center;
	width: 20px;
	height: 20px;
	-webkit - border - radius: 4px;
	-moz - border - radius: 4px;
	border - radius: 4px;
	border: none;
}
  .table - striped.datepicker table tr td,
  .table - striped.datepicker table tr th {
	background - color: transparent;
}
  .datepicker table tr td.day:hover {
	background: #eeeeee;
	cursor: pointer;
}
  .datepicker table tr td.old,
  .datepicker table tr td.new {
	color: #999999;
}
  .datepicker table tr td.disabled,
  .datepicker table tr td.disabled:hover {
	background: none;
	color: #999999;
	cursor: default ;
}
  .datepicker table tr td.today,
  .datepicker table tr td.today: hover,
  .datepicker table tr td.today.disabled,
  .datepicker table tr td.today.disabled:hover {
	background - color: #fde19a;
	background - image: -moz - linear - gradient(top, #fdd49a, #fdf59a);
	background - image: -ms - linear - gradient(top, #fdd49a, #fdf59a);
	background - image: -webkit - gradient(linear, 0 0, 0 100 %, from(#fdd49a), to(#fdf59a));
	background - image: -webkit - linear - gradient(top, #fdd49a, #fdf59a);
	background - image: -o - linear - gradient(top, #fdd49a, #fdf59a);
	background - image: linear - gradient(top, #fdd49a, #fdf59a);
	background - repeat: repeat - x;
	filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = '#fdd49a', endColorstr = '#fdf59a', GradientType = 0);
	border - color: #fdf59a #fdf59a #fbed50;
	border - color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
	filter: progid: DXImageTransform.Microsoft.gradient(enabled = false);
	color: #000;
}
  .datepicker table tr td.today: hover,
  .datepicker table tr td.today: hover: hover,
  .datepicker table tr td.today.disabled: hover,
  .datepicker table tr td.today.disabled: hover: hover,
  .datepicker table tr td.today: active,
  .datepicker table tr td.today: hover: active,
  .datepicker table tr td.today.disabled: active,
  .datepicker table tr td.today.disabled: hover: active,
  .datepicker table tr td.today.active,
  .datepicker table tr td.today: hover.active,
  .datepicker table tr td.today.disabled.active,
  .datepicker table tr td.today.disabled: hover.active,
  .datepicker table tr td.today.disabled,
  .datepicker table tr td.today: hover.disabled,
  .datepicker table tr td.today.disabled.disabled,
  .datepicker table tr td.today.disabled: hover.disabled,
  .datepicker table tr td.today[disabled],
  .datepicker table tr td.today: hover[disabled],
  .datepicker table tr td.today.disabled[disabled],
  .datepicker table tr td.today.disabled: hover[disabled] {
	background - color: #fdf59a;
}
  .datepicker table tr td.today: active,
  .datepicker table tr td.today: hover: active,
  .datepicker table tr td.today.disabled: active,
  .datepicker table tr td.today.disabled: hover: active,
  .datepicker table tr td.today.active,
  .datepicker table tr td.today: hover.active,
  .datepicker table tr td.today.disabled.active,
  .datepicker table tr td.today.disabled: hover.active {
	background - color: #fbf069 \9;
}
  .datepicker table tr td.today: hover:hover {
	color: #000;
}
  .datepicker table tr td.today.active:hover {
	color: #fff;
}
  .datepicker table tr td.range,
  .datepicker table tr td.range: hover,
  .datepicker table tr td.range.disabled,
  .datepicker table tr td.range.disabled:hover {
	background: #eeeeee;
	-webkit - border - radius: 0;
	-moz - border - radius: 0;
	border - radius: 0;
}
  .datepicker table tr td.range.today,
  .datepicker table tr td.range.today: hover,
  .datepicker table tr td.range.today.disabled,
  .datepicker table tr td.range.today.disabled:hover {
	background - color: #f3d17a;
	background - image: -moz - linear - gradient(top, #f3c17a, #f3e97a);
	background - image: -ms - linear - gradient(top, #f3c17a, #f3e97a);
	background - image: -webkit - gradient(linear, 0 0, 0 100 %, from(#f3c17a), to(#f3e97a));
	background - image: -webkit - linear - gradient(top, #f3c17a, #f3e97a);
	background - image: -o - linear - gradient(top, #f3c17a, #f3e97a);
	background - image: linear - gradient(top, #f3c17a, #f3e97a);
	background - repeat: repeat - x;
	filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = '#f3c17a', endColorstr = '#f3e97a', GradientType = 0);
	border - color: #f3e97a #f3e97a #edde34;
	border - color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
	filter: progid: DXImageTransform.Microsoft.gradient(enabled = false);
	-webkit - border - radius: 0;
	-moz - border - radius: 0;
	border - radius: 0;
}
  .datepicker table tr td.range.today: hover,
  .datepicker table tr td.range.today: hover: hover,
  .datepicker table tr td.range.today.disabled: hover,
  .datepicker table tr td.range.today.disabled: hover: hover,
  .datepicker table tr td.range.today: active,
  .datepicker table tr td.range.today: hover: active,
  .datepicker table tr td.range.today.disabled: active,
  .datepicker table tr td.range.today.disabled: hover: active,
  .datepicker table tr td.range.today.active,
  .datepicker table tr td.range.today: hover.active,
  .datepicker table tr td.range.today.disabled.active,
  .datepicker table tr td.range.today.disabled: hover.active,
  .datepicker table tr td.range.today.disabled,
  .datepicker table tr td.range.today: hover.disabled,
  .datepicker table tr td.range.today.disabled.disabled,
  .datepicker table tr td.range.today.disabled: hover.disabled,
  .datepicker table tr td.range.today[disabled],
  .datepicker table tr td.range.today: hover[disabled],
  .datepicker table tr td.range.today.disabled[disabled],
  .datepicker table tr td.range.today.disabled: hover[disabled] {
	background - color: #f3e97a;
}
  .datepicker table tr td.range.today: active,
  .datepicker table tr td.range.today: hover: active,
  .datepicker table tr td.range.today.disabled: active,
  .datepicker table tr td.range.today.disabled: hover: active,
  .datepicker table tr td.range.today.active,
  .datepicker table tr td.range.today: hover.active,
  .datepicker table tr td.range.today.disabled.active,
  .datepicker table tr td.range.today.disabled: hover.active {
	background - color: #efe24b \9;
}
  .datepicker table tr td.selected,
  .datepicker table tr td.selected: hover,
  .datepicker table tr td.selected.disabled,
  .datepicker table tr td.selected.disabled:hover {
	background - color: #9e9e9e;
	background - image: -moz - linear - gradient(top, #b3b3b3, #808080);
	background - image: -ms - linear - gradient(top, #b3b3b3, #808080);
	background - image: -webkit - gradient(linear, 0 0, 0 100 %, from(#b3b3b3), to(#808080));
	background - image: -webkit - linear - gradient(top, #b3b3b3, #808080);
	background - image: -o - linear - gradient(top, #b3b3b3, #808080);
	background - image: linear - gradient(top, #b3b3b3, #808080);
	background - repeat: repeat - x;
	filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = '#b3b3b3', endColorstr = '#808080', GradientType = 0);
	border - color: #808080 #808080 #595959;
	border - color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
	filter: progid: DXImageTransform.Microsoft.gradient(enabled = false);
	color: #fff;
	text - shadow: 0 - 1px 0 rgba(0, 0, 0, 0.25);
}
  .datepicker table tr td.selected: hover,
  .datepicker table tr td.selected: hover: hover,
  .datepicker table tr td.selected.disabled: hover,
  .datepicker table tr td.selected.disabled: hover: hover,
  .datepicker table tr td.selected: active,
  .datepicker table tr td.selected: hover: active,
  .datepicker table tr td.selected.disabled: active,
  .datepicker table tr td.selected.disabled: hover: active,
  .datepicker table tr td.selected.active,
  .datepicker table tr td.selected: hover.active,
  .datepicker table tr td.selected.disabled.active,
  .datepicker table tr td.selected.disabled: hover.active,
  .datepicker table tr td.selected.disabled,
  .datepicker table tr td.selected: hover.disabled,
  .datepicker table tr td.selected.disabled.disabled,
  .datepicker table tr td.selected.disabled: hover.disabled,
  .datepicker table tr td.selected[disabled],
  .datepicker table tr td.selected: hover[disabled],
  .datepicker table tr td.selected.disabled[disabled],
  .datepicker table tr td.selected.disabled: hover[disabled] {
	background - color: #808080;
}
  .datepicker table tr td.selected: active,
  .datepicker table tr td.selected: hover: active,
  .datepicker table tr td.selected.disabled: active,
  .datepicker table tr td.selected.disabled: hover: active,
  .datepicker table tr td.selected.active,
  .datepicker table tr td.selected: hover.active,
  .datepicker table tr td.selected.disabled.active,
  .datepicker table tr td.selected.disabled: hover.active {
	background - color: #666666 \9;
}
  .datepicker table tr td.active,
  .datepicker table tr td.active: hover,
  .datepicker table tr td.active.disabled,
  .datepicker table tr td.active.disabled:hover {
	background - color: #006dcc;
	background - image: -moz - linear - gradient(top, #0088cc, #0044cc);
	background - image: -ms - linear - gradient(top, #0088cc, #0044cc);
	background - image: -webkit - gradient(linear, 0 0, 0 100 %, from(#0088cc), to(#0044cc));
	background - image: -webkit - linear - gradient(top, #0088cc, #0044cc);
	background - image: -o - linear - gradient(top, #0088cc, #0044cc);
	background - image: linear - gradient(top, #0088cc, #0044cc);
	background - repeat: repeat - x;
	filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = '#0088cc', endColorstr = '#0044cc', GradientType = 0);
	border - color: #0044cc #0044cc #002a80;
	border - color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
	filter: progid: DXImageTransform.Microsoft.gradient(enabled = false);
	color: #fff;
	text - shadow: 0 - 1px 0 rgba(0, 0, 0, 0.25);
}
  .datepicker table tr td.active: hover,
  .datepicker table tr td.active: hover: hover,
  .datepicker table tr td.active.disabled: hover,
  .datepicker table tr td.active.disabled: hover: hover,
  .datepicker table tr td.active: active,
  .datepicker table tr td.active: hover: active,
  .datepicker table tr td.active.disabled: active,
  .datepicker table tr td.active.disabled: hover: active,
  .datepicker table tr td.active.active,
  .datepicker table tr td.active: hover.active,
  .datepicker table tr td.active.disabled.active,
  .datepicker table tr td.active.disabled: hover.active,
  .datepicker table tr td.active.disabled,
  .datepicker table tr td.active: hover.disabled,
  .datepicker table tr td.active.disabled.disabled,
  .datepicker table tr td.active.disabled: hover.disabled,
  .datepicker table tr td.active[disabled],
  .datepicker table tr td.active: hover[disabled],
  .datepicker table tr td.active.disabled[disabled],
  .datepicker table tr td.active.disabled: hover[disabled] {
	background - color: #0044cc;
}
  .datepicker table tr td.active: active,
  .datepicker table tr td.active: hover: active,
  .datepicker table tr td.active.disabled: active,
  .datepicker table tr td.active.disabled: hover: active,
  .datepicker table tr td.active.active,
  .datepicker table tr td.active: hover.active,
  .datepicker table tr td.active.disabled.active,
  .datepicker table tr td.active.disabled: hover.active {
	background - color: #003399 \9;
}
  .datepicker table tr td span {
	display: block;
	width: 23 %;
	height: 54px;
	line - height: 54px;
	float: left;
	margin: 1 %;
	cursor: pointer;
	-webkit - border - radius: 4px;
	-moz - border - radius: 4px;
	border - radius: 4px;
}
  .datepicker table tr td span:hover {
	background: #eeeeee;
}
  .datepicker table tr td span.disabled,
  .datepicker table tr td span.disabled:hover {
	background: none;
	color: #999999;
	cursor: default ;
}
  .datepicker table tr td span.active,
  .datepicker table tr td span.active: hover,
  .datepicker table tr td span.active.disabled,
  .datepicker table tr td span.active.disabled:hover {
	background - color: #006dcc;
	background - image: -moz - linear - gradient(top, #0088cc, #0044cc);
	background - image: -ms - linear - gradient(top, #0088cc, #0044cc);
	background - image: -webkit - gradient(linear, 0 0, 0 100 %, from(#0088cc), to(#0044cc));
	background - image: -webkit - linear - gradient(top, #0088cc, #0044cc);
	background - image: -o - linear - gradient(top, #0088cc, #0044cc);
	background - image: linear - gradient(top, #0088cc, #0044cc);
	background - repeat: repeat - x;
	filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = '#0088cc', endColorstr = '#0044cc', GradientType = 0);
	border - color: #0044cc #0044cc #002a80;
	border - color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
	filter: progid: DXImageTransform.Microsoft.gradient(enabled = false);
	color: #fff;
	text - shadow: 0 - 1px 0 rgba(0, 0, 0, 0.25);
}
  .datepicker table tr td span.active: hover,
  .datepicker table tr td span.active: hover: hover,
  .datepicker table tr td span.active.disabled: hover,
  .datepicker table tr td span.active.disabled: hover: hover,
  .datepicker table tr td span.active: active,
  .datepicker table tr td span.active: hover: active,
  .datepicker table tr td span.active.disabled: active,
  .datepicker table tr td span.active.disabled: hover: active,
  .datepicker table tr td span.active.active,
  .datepicker table tr td span.active: hover.active,
  .datepicker table tr td span.active.disabled.active,
  .datepicker table tr td span.active.disabled: hover.active,
  .datepicker table tr td span.active.disabled,
  .datepicker table tr td span.active: hover.disabled,
  .datepicker table tr td span.active.disabled.disabled,
  .datepicker table tr td span.active.disabled: hover.disabled,
  .datepicker table tr td span.active[disabled],
  .datepicker table tr td span.active: hover[disabled],
  .datepicker table tr td span.active.disabled[disabled],
  .datepicker table tr td span.active.disabled: hover[disabled] {
	background - color: #0044cc;
}
  .datepicker table tr td span.active: active,
  .datepicker table tr td span.active: hover: active,
  .datepicker table tr td span.active.disabled: active,
  .datepicker table tr td span.active.disabled: hover: active,
  .datepicker table tr td span.active.active,
  .datepicker table tr td span.active: hover.active,
  .datepicker table tr td span.active.disabled.active,
  .datepicker table tr td span.active.disabled: hover.active {
	background - color: #003399 \9;
}
  .datepicker table tr td span.old,
  .datepicker table tr td span.new {
	color: #999999;
}
  .datepicker th.datepicker -switch {
	width: 145px;
}
	.datepicker thead tr: first - child th,
  .datepicker tfoot tr th {
	cursor: pointer;
}
  .datepicker thead tr: first - child th: hover,
  .datepicker tfoot tr th:hover {
	background: #eeeeee;
}
  .datepicker.cw {
	font - size: 10px;
	width: 12px;
	padding: 0 2px 0 5px;
	vertical - align: middle;
}
  .datepicker thead tr: first - child th.cw {
	cursor: default ;
	background - color: transparent;
}
  .input - append.date.add - on i,
  .input - prepend.date.add - on i {
	display: block;
	cursor: pointer;
	width: 16px;
	height: 16px;
}
  .input - daterange input {
	text - align: center;
}
  .input - daterange input: first - child {
	-webkit - border - radius: 3px 0 0 3px;
	-moz - border - radius: 3px 0 0 3px;
	border - radius: 3px 0 0 3px;
}
  .input - daterange input: last - child {
	-webkit - border - radius: 0 3px 3px 0;
	-moz - border - radius: 0 3px 3px 0;
	border - radius: 0 3px 3px 0;
}
  .input - daterange.add - on {
	display: inline - block;
	width: auto;
	min - width: 16px;
	height: 18px;
	padding: 4px 5px;
	font - weight: normal;
	line - height: 18px;
	text - align: center;
	text - shadow: 0 1px 0 #ffffff;
	vertical - align: middle;
	background - color: #eeeeee;
	border: 1px solid #ccc;
	margin - left: -5px;
	margin - right: -5px;
}



/* =========================================================
* bootstrap-datepicker.js
* http://www.eyecon.ro/bootstrap-datepicker
* =========================================================
* Copyright 2012 Stefan Petre
* Improvements by Andrew Rowls
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* ========================================================= */

(function ($) {

	var $window = $(window);

	function UTCDate() {
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday() {
		var today = new Date();
		return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
	}


	// Picker object

	var Datepicker = function (element, options) {
		var that = this;

		this._process_options(options);

		this.element = $(element);
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if (this.component && this.component.length === 0)
			this.component = false;

		this.picker = $(DPGlobal.template);
		this._buildEvents();
		this._attachEvents();

		if (this.isInline) {
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		} else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl) {
			this.picker.addClass('datepicker-rtl');
			this.picker.find('.prev i, .next i')
				.toggleClass('icon-arrow-left icon-arrow-right');
		}


		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('tfoot th.today')
				.attr('colspan', function (i, val) {
					return parseInt(val) + 1;
				});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline) {
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_process_options: function (opts) {
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]) {
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			switch (o.startView) {
				case 2:
				case 'decade':
					o.startView = 2;
					break;
				case 1:
				case 'year':
					o.startView = 1;
					break;
				default:
					o.startView = 0;
			}

			switch (o.minViewMode) {
				case 1:
				case 'months':
					o.minViewMode = 1;
					break;
				case 2:
				case 'years':
					o.minViewMode = 2;
					break;
				default:
					o.minViewMode = 0;
			}

			o.startView = Math.max(o.startView, o.minViewMode);

			o.weekStart %= 7;
			o.weekEnd = ((o.weekStart + 6) % 7);

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity) {
				if (!!o.startDate) {
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
				} else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity) {
				if (!!o.endDate) {
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
				} else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled || [];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function (d) {
				return parseInt(d, 10);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function (word) {
				return (/^auto|left|right|top|bottom$/).test(word);
			});
			o.orientation = { x: 'auto', y: 'auto' };
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1) {
				switch (plc[0]) {
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function (word) {
					return (/^left|right$/).test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function (word) {
					return (/^top|bottom$/).test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function (evs) {
			for (var i = 0, el, ev; i < evs.length; i++) {
				el = evs[i][0];
				ev = evs[i][1];
				el.on(ev);
			}
		},
		_unapplyEvents: function (evs) {
			for (var i = 0, el, ev; i < evs.length; i++) {
				el = evs[i][0];
				ev = evs[i][1];
				el.off(ev);
			}
		},
		_buildEvents: function () {
			if (this.isInput) { // single input
				this._events = [
					[this.element, {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(this.update, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput) { // component: input + button
				this._events = [
					// For components that are not readonly, allow keyboard nav
					[this.element.find('input'), {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(this.update, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			else if (this.element.is('div')) {  // inline datepicker
				this.isInline = true;
			}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					mousedown: $.proxy(function (e) {
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length
						)) {
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function () {
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function () {
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function () {
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function () {
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function (event, altdate) {
			var date = altdate || this.date,
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				format: $.proxy(function (altformat) {
					var format = altformat || this.o.format;
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function (e) {
			if (!this.isInline)
				this.picker.appendTo('body');
			this.picker.show();
			this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
			this.place();
			this._attachSecondaryEvents();
			if (e) {
				e.preventDefault();
			}
			this._trigger('show');
		},

		hide: function (e) {
			if (this.isInline) return;
			if (!this.picker.is(':visible')) return;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (
				this.o.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this._trigger('hide');
		},

		remove: function () {
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput) {
				delete this.element.data().date;
			}
		},

		_utc_to_local: function (utc) {
			return new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000));
		},
		_local_to_utc: function (local) {
			return new Date(local.getTime() - (local.getTimezoneOffset() * 60000));
		},
		_zero_time: function (local) {
			return new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function (utc) {
			return new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDate: function () {
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function () {
			return this.date;
		},

		setDate: function (d) {
			this.setUTCDate(this._local_to_utc(d));
		},

		setUTCDate: function (d) {
			this.date = d;
			this.setValue();
		},

		setValue: function () {
			var formatted = this.getFormattedDate();
			if (!this.isInput) {
				if (this.component) {
					this.element.find('input').val(formatted).change();
				}
			} else {
				this.element.val(formatted).change();
			}
		},

		getFormattedDate: function (format) {
			if (format === undefined)
				format = this.o.format;
			return DPGlobal.formatDate(this.date, format, this.o.language);
		},

		setStartDate: function (startDate) {
			this._process_options({ startDate: startDate });
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function (endDate) {
			this._process_options({ endDate: endDate });
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function (daysOfWeekDisabled) {
			this._process_options({ daysOfWeekDisabled: daysOfWeekDisabled });
			this.update();
			this.updateNavArrows();
		},

		place: function () {
			if (this.isInline) return;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				windowWidth = $window.width(),
				windowHeight = $window.height(),
				scrollTop = $window.scrollTop();

			var zIndex = parseInt(this.element.parents().filter(function () {
				return $(this).css('z-index') != 'auto';
			}).first().css('z-index')) + 10;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left,
				top = offset.top;

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom ' +
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto') {
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				// Default to left
				this.picker.addClass('datepicker-orient-left');
				if (offset.left < 0)
					left -= offset.left - visualPadding;
				else if (offset.left + calendarWidth > windowWidth)
					left = windowWidth - calendarWidth - visualPadding;
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow, bottom_overflow;
			if (yorient === 'auto') {
				top_overflow = -scrollTop + offset.top - calendarHeight;
				bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
				if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
					yorient = 'top';
				else
					yorient = 'bottom';
			}
			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top += height;
			else
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));

			this.picker.css({
				top: top,
				left: left,
				zIndex: zIndex
			});
		},

		_allow_update: true,
		update: function () {
			if (!this._allow_update) return;

			var oldDate = new Date(this.date),
				date, fromArgs = false;
			if (arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
				date = arguments[0];
				if (date instanceof Date)
					date = this._local_to_utc(date);
				fromArgs = true;
			} else {
				date = this.isInput ? this.element.val() : this.element.data('date') || this.element.find('input').val();
				delete this.element.data().date;
			}

			this.date = DPGlobal.parseDate(date, this.o.format, this.o.language);

			if (fromArgs) {
				// setting date by clicking
				this.setValue();
			} else if (date) {
				// setting date by typing
				if (oldDate.getTime() !== this.date.getTime())
					this._trigger('changeDate');
			} else {
				// clearing date
				this._trigger('clearDate');
			}

			if (this.date < this.o.startDate) {
				this.viewDate = new Date(this.o.startDate);
				this.date = new Date(this.o.startDate);
			} else if (this.date > this.o.endDate) {
				this.viewDate = new Date(this.o.endDate);
				this.date = new Date(this.o.endDate);
			} else {
				this.viewDate = new Date(this.date);
				this.date = new Date(this.date);
			}
			this.fill();
		},

		fillDow: function () {
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks) {
				var cell = '<th class="cw">&nbsp;</th>';
				html += cell;
				this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
			}
			while (dowCnt < this.o.weekStart + 7) {
				html += '<th class="dow">' + dates[this.o.language].daysMin[(dowCnt++) % 7] + '</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function () {
			var html = '',
				i = 0;
			while (i < 12) {
				html += '<span class="month">' + dates[this.o.language].monthsShort[i++] + '</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function (range) {
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function (d) { return d.valueOf(); });
			this.fill();
		},

		getClassNames: function (date) {
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				currentDate = this.date.valueOf(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() == year && date.getUTCMonth() < month)) {
				cls.push('old');
			} else if (date.getUTCFullYear() > year || (date.getUTCFullYear() == year && date.getUTCMonth() > month)) {
				cls.push('new');
			}
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() == today.getFullYear() &&
				date.getUTCMonth() == today.getMonth() &&
				date.getUTCDate() == today.getDate()) {
				cls.push('today');
			}
			if (currentDate && date.valueOf() == currentDate) {
				cls.push('active');
			}
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
				$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) {
				cls.push('disabled');
			}
			if (this.range) {
				if (date > this.range[0] && date < this.range[this.range.length - 1]) {
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) != -1) {
					cls.push('selected');
				}
			}
			return cls;
		},

		fill: function () {
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				currentDate = this.date && this.date.valueOf(),
				tooltip;
			this.picker.find('.datepicker-days thead th.datepicker-switch')
				.text(dates[this.o.language].months[month] + ' ' + year);
			this.picker.find('tfoot th.today')
				.text(dates[this.o.language].today)
				.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot th.clear')
				.text(dates[this.o.language].clear)
				.toggle(this.o.clearBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7) % 7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getUTCDay() == this.o.weekStart) {
					html.push('<tr>');
					if (this.o.calendarWeeks) {
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(+ws + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(+(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek = (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">' + calWeek + '</td>');

					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop) {
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof (before) === 'boolean')
						before = { enabled: before };
					else if (typeof (before) === 'string')
						before = { classes: before };
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				html.push('<td class="' + clsName.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + prevMonth.getUTCDate() + '</td>');
				if (prevMonth.getUTCDay() == this.o.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
			var currentYear = this.date && this.date.getUTCFullYear();

			var months = this.picker.find('.datepicker-months')
				.find('th:eq(1)')
				.text(year)
				.end()
				.find('span').removeClass('active');
			if (currentYear && currentYear == year) {
				months.eq(this.date.getUTCMonth()).addClass('active');
			}
			if (year < startYear || year > endYear) {
				months.addClass('disabled');
			}
			if (year == startYear) {
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year == endYear) {
				months.slice(endMonth + 1).addClass('disabled');
			}

			html = '';
			year = parseInt(year / 10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
				.find('th:eq(1)')
				.text(year + '-' + (year + 9))
				.end()
				.find('td');
			year -= 1;
			for (var i = -1; i < 11; i++) {
				html += '<span class="year' + (i == -1 ? ' old' : i == 10 ? ' new' : '') + (currentYear == year ? ' active' : '') + (year < startYear || year > endYear ? ' disabled' : '') + '">' + year + '</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function () {
			if (!this._allow_update) return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode) {
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()) {
						this.picker.find('.prev').css({ visibility: 'hidden' });
					} else {
						this.picker.find('.prev').css({ visibility: 'visible' });
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()) {
						this.picker.find('.next').css({ visibility: 'hidden' });
					} else {
						this.picker.find('.next').css({ visibility: 'visible' });
					}
					break;
				case 1:
				case 2:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()) {
						this.picker.find('.prev').css({ visibility: 'hidden' });
					} else {
						this.picker.find('.prev').css({ visibility: 'visible' });
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()) {
						this.picker.find('.next').css({ visibility: 'hidden' });
					} else {
						this.picker.find('.next').css({ visibility: 'visible' });
					}
					break;
			}
		},

		click: function (e) {
			e.preventDefault();
			var target = $(e.target).closest('span, td, th');
			if (target.length == 1) {
				switch (target[0].nodeName.toLowerCase()) {
					case 'th':
						switch (target[0].className) {
							case 'datepicker-switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
								switch (this.viewMode) {
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										this._trigger('changeMonth', this.viewDate);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										if (this.viewMode === 1)
											this._trigger('changeYear', this.viewDate);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.o.todayBtn == 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
							case 'clear':
								var element;
								if (this.isInput)
									element = this.element;
								else if (this.component)
									element = this.element.find('input');
								if (element)
									element.val("").change();
								this._trigger('changeDate');
								this.update();
								if (this.o.autoclose)
									this.hide();
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')) {
							this.viewDate.setUTCDate(1);
							if (target.is('.month')) {
								var day = 1;
								var month = target.parent().find('span').index(target);
								var year = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(month);
								this._trigger('changeMonth', this.viewDate);
								if (this.o.minViewMode === 1) {
									this._setDate(UTCDate(year, month, day, 0, 0, 0, 0));
								}
							} else {
								var year = parseInt(target.text(), 10) || 0;
								var day = 1;
								var month = 0;
								this.viewDate.setUTCFullYear(year);
								this._trigger('changeYear', this.viewDate);
								if (this.o.minViewMode === 2) {
									this._setDate(UTCDate(year, month, day, 0, 0, 0, 0));
								}
							}
							this.showMode(-1);
							this.fill();
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')) {
							var day = parseInt(target.text(), 10) || 1;
							var year = this.viewDate.getUTCFullYear(),
								month = this.viewDate.getUTCMonth();
							if (target.is('.old')) {
								if (month === 0) {
									month = 11;
									year -= 1;
								} else {
									month -= 1;
								}
							} else if (target.is('.new')) {
								if (month == 11) {
									month = 0;
									year += 1;
								} else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day, 0, 0, 0, 0));
						}
						break;
				}
			}
		},

		_setDate: function (date, which) {
			if (!which || which == 'date')
				this.date = new Date(date);
			if (!which || which == 'view')
				this.viewDate = new Date(date);
			this.fill();
			this.setValue();
			this._trigger('changeDate');
			var element;
			if (this.isInput) {
				element = this.element;
			} else if (this.component) {
				element = this.element.find('input');
			}
			if (element) {
				element.change();
			}
			if (this.o.autoclose && (!which || which == 'date')) {
				this.hide();
			}
		},

		moveMonth: function (date, dir) {
			if (!dir) return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag == 1) {
				test = dir == -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function () { return new_date.getUTCMonth() == month; }
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function () { return new_date.getUTCMonth() != new_month; };
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			} else {
				// For magnitudes >1, move one month at a time...
				for (var i = 0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function () { return new_month != new_date.getUTCMonth(); };
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()) {
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function (date, dir) {
			return this.moveMonth(date, dir * 12);
		},

		dateWithinRange: function (date) {
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function (e) {
			if (this.picker.is(':not(:visible)')) {
				if (e.keyCode == 27) // allow escape to hide and re-show picker
					this.show();
				return;
			}
			var dateChanged = false,
				dir, day, month,
				newDate, newViewDate;
			switch (e.keyCode) {
				case 27: // escape
					this.hide();
					e.preventDefault();
					break;
				case 37: // left
				case 39: // right
					if (!this.o.keyboardNavigation) break;
					dir = e.keyCode == 37 ? -1 : 1;
					if (e.ctrlKey) {
						newDate = this.moveYear(this.date, dir);
						newViewDate = this.moveYear(this.viewDate, dir);
						this._trigger('changeYear', this.viewDate);
					} else if (e.shiftKey) {
						newDate = this.moveMonth(this.date, dir);
						newViewDate = this.moveMonth(this.viewDate, dir);
						this._trigger('changeMonth', this.viewDate);
					} else {
						newDate = new Date(this.date);
						newDate.setUTCDate(this.date.getUTCDate() + dir);
						newViewDate = new Date(this.viewDate);
						newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newDate)) {
						this.date = newDate;
						this.viewDate = newViewDate;
						this.setValue();
						this.update();
						e.preventDefault();
						dateChanged = true;
					}
					break;
				case 38: // up
				case 40: // down
					if (!this.o.keyboardNavigation) break;
					dir = e.keyCode == 38 ? -1 : 1;
					if (e.ctrlKey) {
						newDate = this.moveYear(this.date, dir);
						newViewDate = this.moveYear(this.viewDate, dir);
						this._trigger('changeYear', this.viewDate);
					} else if (e.shiftKey) {
						newDate = this.moveMonth(this.date, dir);
						newViewDate = this.moveMonth(this.viewDate, dir);
						this._trigger('changeMonth', this.viewDate);
					} else {
						newDate = new Date(this.date);
						newDate.setUTCDate(this.date.getUTCDate() + dir * 7);
						newViewDate = new Date(this.viewDate);
						newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newDate)) {
						this.date = newDate;
						this.viewDate = newViewDate;
						this.setValue();
						this.update();
						e.preventDefault();
						dateChanged = true;
					}
					break;
				case 13: // enter
					this.hide();
					e.preventDefault();
					break;
				case 9: // tab
					this.hide();
					break;
			}
			if (dateChanged) {
				this._trigger('changeDate');
				var element;
				if (this.isInput) {
					element = this.element;
				} else if (this.component) {
					element = this.element.find('input');
				}
				if (element) {
					element.change();
				}
			}
		},

		showMode: function (dir) {
			if (dir) {
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
			}
			/*
				vitalets: fixing bug of very special conditions:
				jquery 1.7.1 + webkit + show inline datepicker in bootstrap popover.
				Method show() does not set display css correctly and datepicker is not shown.
				Changed to .css('display', 'block') solve the problem.
				See https://github.com/vitalets/x-editable/issues/37

				In jquery 1.7.2+ everything works fine.
			*/
			//this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
			this.picker.find('>div').hide().filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function (element, options) {
		this.element = $(element);
		this.inputs = $.map(options.inputs, function (i) { return i.jquery ? i[0] : i; });
		delete options.inputs;

		$(this.inputs)
			.datepicker(options)
			.bind('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function (i) { return $(i).data('datepicker'); });
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function () {
			this.dates = $.map(this.pickers, function (i) { return i.date; });
			this.updateRanges();
		},
		updateRanges: function () {
			var range = $.map(this.dates, function (d) { return d.valueOf(); });
			$.each(this.pickers, function (i, p) {
				p.setRange(range);
			});
		},
		dateUpdated: function (e) {
			var dp = $(e.target).data('datepicker'),
				new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				l = this.inputs.length;
			if (i == -1) return;

			if (new_date < this.dates[i]) {
				// Date being moved earlier/left
				while (i >= 0 && new_date < this.dates[i]) {
					this.pickers[i--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[i]) {
				// Date being moved later/right
				while (i < l && new_date > this.dates[i]) {
					this.pickers[i++].setUTCDate(new_date);
				}
			}
			this.updateDates();
		},
		remove: function () {
			$.map(this.pickers, function (p) { p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix) {
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])'),
			prefix = new RegExp('^' + prefix.toLowerCase());
		for (var key in data)
			if (prefix.test(key)) {
				inkey = key.replace(replace, function (_, a) { return a.toLowerCase(); });
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang) {
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]) {
			lang = lang.split('-')[0]
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function (i, k) {
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	$.fn.datepicker = function (option) {
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return,
			this_return;
		this.each(function () {
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option == 'object' && option;
			if (!data) {
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.is('.input-daterange') || opts.inputs) {
					var ropts = {
						inputs: opts.inputs || $this.find('input').toArray()
					};
					$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
				}
				else {
					$this.data('datepicker', (data = new Datepicker(this, opts)));
				}
			}
			if (typeof option == 'string' && typeof data[option] == 'function') {
				internal_return = data[option].apply(data, args);
				if (internal_return !== undefined)
					return false;
			}
		});
		if (internal_return !== undefined)
			return internal_return;
		else
			return this;
	};

	var defaults = $.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
			}],
		isLeapYear: function (year) {
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function (year, month) {
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function (format) {
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0) {
				throw new Error("Invalid date format.");
			}
			return { separators: separators, parts: parts };
		},
		parseDate: function (date, format, language) {
			if (date instanceof Date) return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
				var part_re = /([\-+]\d+)([dmwy])/,
					parts = date.match(/([\-+]\d+)([dmwy])/g),
					part, dir;
				date = new Date();
				for (var i = 0; i < parts.length; i++) {
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch (part[2]) {
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			var parts = date && date.match(this.nonpunctuation) || [],
				date = new Date(),
				parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function (d, v) { return d.setUTCFullYear(v); },
					yy: function (d, v) { return d.setUTCFullYear(2000 + v); },
					m: function (d, v) {
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() != v)
							d.setUTCDate(d.getUTCDate() - 1);
						return d;
					},
					d: function (d, v) { return d.setUTCDate(v); }
				},
				val, filtered, part;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length != fparts.length) {
				fparts = $(fparts).filter(function (i, p) {
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			if (parts.length == fparts.length) {
				for (var i = 0, cnt = fparts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)) {
						switch (part) {
							case 'MM':
								filtered = $(dates[language].months).filter(function () {
									var m = this.slice(0, parts[i].length),
										p = parts[i].slice(0, m.length);
									return m == p;
								});
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(function () {
									var m = this.slice(0, parts[i].length),
										p = parts[i].slice(0, m.length);
									return m == p;
								});
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				for (var i = 0, _date, s; i < setters_order.length; i++) {
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])) {
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function (date, format, language) {
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			var date = [],
				seps = $.extend([], format.separators);
			for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>' +
			'<tr>' +
			'<th class="prev">&laquo;</th>' +
			'<th colspan="5" class="datepicker-switch"></th>' +
			'<th class="next">&raquo;</th>' +
			'</tr>' +
			'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">' +
		'<div class="datepicker-days">' +
		'<table class=" table-condensed">' +
		DPGlobal.headTemplate +
		'<tbody></tbody>' +
		DPGlobal.footTemplate +
		'</table>' +
		'</div>' +
		'<div class="datepicker-months">' +
		'<table class="table-condensed">' +
		DPGlobal.headTemplate +
		DPGlobal.contTemplate +
		DPGlobal.footTemplate +
		'</table>' +
		'</div>' +
		'<div class="datepicker-years">' +
		'<table class="table-condensed">' +
		DPGlobal.headTemplate +
		DPGlobal.contTemplate +
		DPGlobal.footTemplate +
		'</table>' +
		'</div>' +
		'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function () {
		$.fn.datepicker = old;
		return this;
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function (e) {
			var $this = $(this);
			if ($this.data('datepicker')) return;
			e.preventDefault();
			// component click requires us to explicitly show it
			$this.datepicker('show');
		}
	);
	$(function () {
		$('[data-provide="datepicker-inline"]').datepicker();
	});

}(window.jQuery));

