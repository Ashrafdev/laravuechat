(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
"use strict";

if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+(function (a) {
  "use strict";var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
})(jQuery), +(function (a) {
  "use strict";function b() {
    var a = document.createElement("bootstrap"),
        b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };return !1;
  }a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;a(this).one("bsTransitionEnd", function () {
      c = !0;
    });var e = function e() {
      c || a(d).trigger(a.support.transition.end);
    };return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
        if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
      } });
  });
})(jQuery), +(function (a) {
  "use strict";function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }var c = '[data-dismiss="alert"]',
      d = function d(b) {
    a(b).on("click", c, this.close);
  };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove();
    }var e = a(this),
        f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a("#" === f ? [] : f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
  };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
})(jQuery), +(function (a) {
  "use strict";function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }var c = function c(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
      var c = this.$element.find("input");"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target).closest(".btn");b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"));
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
  });
})(jQuery), +(function (a) {
  "use strict";function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }var c = function c(b, _c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {case 37:
          this.prev();break;case 39:
          this.next();break;default:
          return;}a.preventDefault();
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = this.getItemIndex(b),
        d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
        f = (c + e) % this.$items.length;return this.$items.eq(f);
  }, c.prototype.to = function (a) {
    var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a);
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    if (!this.sliding) return this.slide("next");
  }, c.prototype.prev = function () {
    if (!this.sliding) return this.slide("prev");
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left" : "right",
        i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
        k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
      if ((this.sliding = !0, g && this.pause(), this.$indicators.length)) {
        this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
      }var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
    }
  };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  };var e = function e(c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  };a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);b.call(c, c.data());
    });
  });
})(jQuery), +(function (a) {
  "use strict";function b(b) {
    var c,
        d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
  }function c(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
    });
  }var d = function d(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");return a ? "width" : "height";
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b,
          e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
        var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
  };var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : e.data();c.call(f, h);
  });
})(jQuery), +(function (a) {
  "use strict";function b(b) {
    var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
  }function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
          e = b(d),
          f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
    }));
  }function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function g(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
    var e = a(this);if (!e.is(".disabled, :disabled")) {
      var f = b(e),
          g = f.hasClass("open");if ((c(), !g)) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if ((f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
      }return !1;
    }
  }, g.prototype.keydown = function (c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);if ((c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled"))) {
        var e = b(d),
            g = e.hasClass("open");if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
            i = e.find(".dropdown-menu" + h);if (i.length) {
          var j = i.index(c.target);38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
})(jQuery), +(function (a) {
  "use strict";function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }var c = function c(b, _c2) {
    this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var d = this,
        e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      d.$element.one("mouseup.dismiss.bs.modal", function (b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var d = this,
        e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;if ((this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");var g = function g() {
        d.removeBackdrop(), b && b();
      };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b && b();
  }, c.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({ paddingLeft: "", paddingRight: "" });
  }, c.prototype.checkScrollbar = function () {
    var a = window.innerWidth;if (!a) {
      var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
    }this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
  };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
})(jQuery), +(function (a) {
  "use strict";function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function c(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
    if ((this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector)) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show());
  }, c.prototype.isInStateTrue = function () {
    for (var a in this.inState) if (this.inState[a]) return !0;return !1;
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);if ((c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue())) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide();
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
          f = this.tip(),
          g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight;if (j) {
        var n = h,
            o = this.getPosition(this.$viewport);h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
      }var p = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(p, h);var q = function q() {
        var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
      };a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
        d.css({ top: Math.round(a.top), left: Math.round(a.left) });
      } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
        j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
    }var e = this,
        f = a(this.$tip),
        g = a.Event("hide.bs." + this.type);if ((this.$element.trigger(g), !g.isDefaultPrevented())) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this;
  }, c.prototype.fixTitle = function () {
    var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = window.SVGElement && c instanceof window.SVGElement,
        g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
        h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
        i = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, h, i, g);
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
    }return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do a += ~ ~(1e6 * Math.random()); while (document.getElementById(a));return a;
  }, c.prototype.tip = function () {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    var a = this;clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null;
    });
  };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
})(jQuery), +(function (a) {
  "use strict";function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function c(a, b) {
    this.init("popover", a, b);
  };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
})(jQuery), +(function (a) {
  "use strict";function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
  }function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = this,
        c = "offset",
        d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var b = a(this),
          e = b.data("target") || b.attr("href"),
          f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      b.offsets.push(this[0]), b.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;if ((this.scrollHeight != c && this.refresh(), b >= d)) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);c.call(b, b.data());
    });
  });
})(jQuery), +(function (a) {
  "use strict";function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }var c = function c(b) {
    this.element = a(b);
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");if ((d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active"))) {
      var e = c.find(".active:last a"),
          f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
          g = a.Event("show.bs.tab", { relatedTarget: e[0] });if ((e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented())) {
        var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
        });
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
    }var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  };var e = function e(c) {
    c.preventDefault(), b.call(a(this), "show");
  };a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
})(jQuery), +(function (a) {
  "use strict";function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }var c = function c(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();if (null != c && "top" == this.affixed) return e < c && "top";if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";var h = null == this.affixed,
        i = h ? e : f.top,
        j = h ? g : b;return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom";
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
        b = this.$element.offset();return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
          d = this.options.offset,
          e = d.top,
          f = d.bottom,
          g = Math.max(a(document).height(), a(document.body).height());"object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
            j = a.Event(i + ".bs.affix");if ((this.$element.trigger(j), j.isDefaultPrevented())) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }"bottom" == h && this.$element.offset({ top: g - b - f });
    }
  };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
})(jQuery);
/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!(function (a, b) {
  "use strict";"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
})("undefined" != typeof window ? window : undefined, function (a, b) {
  "use strict";var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};function p(a, b) {
    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }var q = "3.1.1",
      r = function r(a, b) {
    return new r.fn.init(a, b);
  },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function v(a, b) {
    return b.toUpperCase();
  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
      return f.call(this);
    }, get: function get(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    }, pushStack: function pushStack(a) {
      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
    }, each: function each(a) {
      return r.each(this, a);
    }, map: function map(a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(f.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));return g;
  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === r.type(a);
    }, isArray: Array.isArray, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    }, isPlainObject: function isPlainObject(a) {
      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) return !1;return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a;
    }, globalEval: function globalEval(a) {
      p(a);
    }, camelCase: function camelCase(a) {
      return a.replace(t, "ms-").replace(u, v);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (w(a)) {
        for (c = a.length; d < c; d++) if (b.call(a[d], d, a[d]) === !1) break;
      } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(s, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          f = 0,
          h = [];if (w(a)) for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);else for (f in a) e = b(a[f], f, c), null != e && h.push(e);return g.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, e;if (("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a))) return d = f.call(arguments, 2), e = function () {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, e.guid = a.guid = a.guid || r.guid++, e;
    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase();
  });function w(a) {
    var b = !!a && "length" in a && a.length,
        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }var x = (function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = ({}).hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0 && ("form" in a || "label" in a);
    }, { dir: "parentNode", next: "legend" });try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]);a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;if ((d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w)) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) o[h] = "#" + k + " " + sa(o[h]);r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(P, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("fieldset");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) d.attrHandle[c[e]] = b;
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) if (c === b) return -1;return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
      };
    }function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
        });
      });
    }function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          return a.getAttribute("id") === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c,
              d,
              e,
              f = b.getElementById(a);if (f) {
            if ((c = f.getAttributeNode("id"), c && c.value === a)) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) if ((c = f.getAttributeNode("id"), c && c.value === a)) return [f];
          }return [];
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) if (b === a) return !0;return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) g.unshift(c);c = b;while (c = c.parentNode) h.unshift(c);while (g[d] === h[d]) d++;return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if (((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if ((l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l)) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));while (e--) a.splice(d[e], 1);
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) c += e(b);return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if ((o = [g ? q.firstChild : q.lastChild], g && s)) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                  k[a] = [w, n, t];break;
                }
              } else if ((s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g]);
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: pa(function () {
          return [0];
        }), last: pa(function (a, b) {
          return [b - 1];
        }), eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) a.push(c);return a;
        }), odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) a.push(c);return a;
        }), lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);return a;
        }), gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b);for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;return d;
    }function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;return b.first ? function (b, c, e) {
        while (b = b[d]) if (1 === b.nodeType || g) return a(b, c, e);return !1;
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];if (i) {
          while (b = b[d]) if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
        } else while (b = b[d]) if (1 === b.nodeType || g) if ((l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase())) b = b[d] || b;else {
          if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if ((k[f] = m, m[2] = a(b, c, i))) return !0;
        }return !1;
      };
    }function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) if (!a[e](b, c, d)) return !1;return !0;
      } : a[0];
    }function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);return c;
    }function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));return g;
    }function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if ((c && c(q, r, h, i), d)) {
          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) (l = r[k]) && j.push(q[k] = l);e(null, r = [], j, i);
            }k = r.length;while (k--) (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; i < f; i++) if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
        if ((c = d.filter[a[i].type].apply(null, a[i].matches), c[u])) {
          for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
        }m.push(c);
      }return ua(m);
    }function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) if (q(l, g || n, h)) {
              i.push(l);break;
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if ((r += s, c && s !== r)) {
          o = 0;while (q = b[o++]) q(t, u, g, h);if (_f) {
            if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i));u = wa(u);
          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);f = A(a, za(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, c, e) {
      var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g(a = m.selector || a);if ((c = c || [], 1 === n.length)) {
        if ((i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type])) {
          if ((b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b)) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
          if ((j = i[f], d.relative[k = j.type])) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if ((i.splice(f, 1), a = e.length && sa(i), !a)) return G.apply(c, e), c;break;
          }
        }
      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  })(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
      if (e && r(a).is(c)) break;d.push(a);
    }return d;
  },
      z = function z(a, b) {
    for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);return c;
  },
      A = r.expr.match.needsContext,
      B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c;
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c;
    }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    }));
  }r.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, r.fn.extend({ find: function find(a) {
      var b,
          c,
          d = this.length,
          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0;
      }));for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);return d > 1 ? r.uniqueSort(c) : c;
    }, filter: function filter(a) {
      return this.pushStack(D(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(D(this, a || [], !0));
    }, is: function is(a) {
      return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    } });var E,
      F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      G = r.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if ((c = c || E, "string" == typeof a)) {
      if ((e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b)) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if ((b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b))) for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);return this;
      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
  };G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
      I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
      var b = r(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0;
      });
    }, closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
        f.push(c);break;
      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function J(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);return a;
  }r.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return y(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return y(a, "parentNode", c);
    }, next: function next(a) {
      return J(a, "nextSibling");
    }, prev: function prev(a) {
      return J(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return y(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return y(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return y(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return y(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return z((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return z(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || r.merge([], a.childNodes);
    } }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
    };
  });var K = /[^\x20\t\r\n\f]+/g;function L(a) {
    var b = {};return r.each(a.match(K) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }r.Callbacks = function (a) {
    a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), (function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
          });
        })(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return r.each(arguments, function (a, b) {
          var c;while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--;
        }), this;
      }, has: function has(a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  };function M(a) {
    return a;
  }function N(a) {
    throw a;
  }function O(a, b, c) {
    var d;try {
      a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
    } catch (a) {
      c.call(void 0, a);
    }
  }r.extend({ Deferred: function Deferred(b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = { state: function state() {
          return d;
        }, always: function always() {
          return f.done(arguments).fail(arguments), this;
        }, "catch": function _catch(a) {
          return e.then(null, a);
        }, pipe: function pipe() {
          var a = arguments;return r.Deferred(function (b) {
            r.each(c, function (c, d) {
              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, then: function then(b, d, e) {
          var f = 0;function g(b, c, d, e) {
            return function () {
              var h = this,
                  i = arguments,
                  j = function j() {
                var a, j;if (!(b < f)) {
                  if ((a = d.apply(h, i), a === c.promise())) throw new TypeError("Thenable self-resolution");j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                }
              },
                  k = e ? j : function () {
                try {
                  j();
                } catch (a) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
                }
              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
            };
          }return r.Deferred(function (a) {
            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
          }).promise();
        }, promise: function promise(a) {
          return null != a ? r.extend(a, e) : e;
        } },
          f = {};return r.each(c, function (a, b) {
        var g = b[2],
            h = b[5];e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    }, when: function when(a) {
      var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function h(a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
        };
      };if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) O(e[c], h(c), g.reject);return g.promise();
    } });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b;
    });
  };var Q = r.Deferred();r.fn.ready = function (a) {
    return Q.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? r.readyWait++ : r.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
    } }), r.ready.then = Q.then;function R() {
    d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === r.type(c)) {
      e = !0;for (h in c) S(a, b, h, c[h], !0, f, g);
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
      return j.call(r(a), c);
    })), b)) for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      T = function T(a) {
    return 1 === a.nodeType || 9 === a.nodeType || ! +a.nodeType;
  };function U() {
    this.expando = r.expando + U.uid++;
  }U.uid = 1, U.prototype = { cache: function cache(a) {
      var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) e[r.camelCase(d)] = b[d];return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    }, access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d = a[this.expando];if (void 0 !== d) {
        if (void 0 !== b) {
          r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) delete d[b[c]];
        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
    } };var V = new U(),
      W = new U(),
      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Y = /[A-Z]/g;function Z(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a);
  }function $(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if ((d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c)) {
      try {
        c = Z(c);
      } catch (e) {}W.set(a, b, c);
    } else c = void 0;return c;
  }r.extend({ hasData: function hasData(a) {
      return W.hasData(a) || V.hasData(a);
    }, data: function data(a, b, c) {
      return W.access(a, b, c);
    }, removeData: function removeData(a, b) {
      W.remove(a, b);
    }, _data: function _data(a, b, c) {
      return V.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      V.remove(a, b);
    } }), r.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));V.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == typeof a ? this.each(function () {
        W.set(this, a);
      }) : S(this, function (b) {
        var c;if (f && void 0 === b) {
          if ((c = W.get(f, a), void 0 !== c)) return c;if ((c = $(f, a), void 0 !== c)) return c;
        } else this.each(function () {
          W.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        W.remove(this, a);
      });
    } }), r.extend({ queue: function queue(a, b, c) {
      var d;if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function g() {
        r.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
          V.remove(a, [b + "queue", c]);
        }) });
    } }), r.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));return h(), e.promise(b);
    } });var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
      ba = ["Top", "Right", "Bottom", "Left"],
      ca = function ca(a, b) {
    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
  },
      da = function da(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) g[f] = a.style[f], a.style[f] = b[f];e = c.apply(a, d || []);for (f in b) a.style[f] = g[f];return e;
  };function ea(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return r.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var fa = {};function ga(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = fa[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e);
  }function ha(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);return a;
  }r.fn.extend({ show: function show() {
      return ha(this, !0);
    }, hide: function hide() {
      return ha(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        ca(this) ? r(this).show() : r(this).hide();
      });
    } });var ia = /^(?:checkbox|radio)$/i,
      ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      ka = /^$|\/(?:java|ecma)script/i,
      la = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;function ma(a, b) {
    var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
  }function na(a, b) {
    for (var c = 0, d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
  }var oa = /<|&#?\w+;/;function pa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) if ((f = a[n], f || 0 === f)) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (oa.test(f)) {
      g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) g = g.lastChild;r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
    } else m.push(b.createTextNode(f));l.textContent = "", n = 0;while (f = m[n++]) if (d && r.inArray(f, d) > -1) e && e.push(f);else if ((j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c)) {
      k = 0;while (f = g[k++]) ka.test(f.type || "") && c.push(f);
    }return l;
  }!(function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  })();var qa = d.documentElement,
      ra = /^key/,
      sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ta = /^([^.]*)(?:\.(.+)|)/;function ua() {
    return !0;
  }function va() {
    return !1;
  }function wa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function xa(a, b, c, d, e, f) {
    var g, h;if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) xa(a, h, c, d, b[h], f);return a;
    }if ((null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1)) e = va;else if (!e) return a;return 1 === f && (g = e, e = function (a) {
      return r().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }r.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = V.get(a);if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(K) || [""], j = b.length;while (j--) h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
        b = (b || "").match(K) || [""], j = b.length;while (j--) if ((h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n)) {
          l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
        } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);r.isEmptyObject(i) && V.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (V.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];if ((b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1)) {
        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h = [],
          i = b.delegateCount,
          j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
        for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);f.length && h.push({ elem: j, handlers: f });
      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
    }, addProp: function addProp(a, b) {
      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        }, set: function set(b) {
          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
        } });
    }, fix: function fix(a) {
      return a[r.expando] ? a : new r.Event(a);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== wa() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === wa() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1;
        }, _default: function _default(a) {
          return r.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: va, isPropagationStopped: va, isImmediatePropagationStopped: va, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
      var b = a.button;return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), r.fn.extend({ on: function on(a, b, c, d) {
      return xa(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return xa(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    } });var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      za = /<script|<style|<link/i,
      Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ba = /^true\/(.*)/,
      Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a, b) {
    return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
  }function Ea(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function Fa(a) {
    var b = Ba.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Ga(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]);
      }W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
    }
  }function Ha(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function Ia(a, b, c, d) {
    b = g.apply([], b);var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function (e) {
      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d);
    });if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k));
    }return a;
  }function Ja(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));return a;
  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(ya, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);if (b) if (c) for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]);else Ga(a, h);return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) if (T(c)) {
        if (b = c[V.expando]) {
          if (b.events) for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);c[V.expando] = void 0;
        }c[W.expando] && (c[W.expando] = void 0);
      }
    } }), r.fn.extend({ detach: function detach(a) {
      return Ja(this, a, !0);
    }, remove: function remove(a) {
      return Ja(this, a);
    }, text: function text(a) {
      return S(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return Ia(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Da(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ia(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Da(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ia(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ia(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");return this;
    }, clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b);
      });
    }, html: function html(a) {
      return S(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);try {
            for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ia(this, arguments, function (b) {
        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this));
      }, a);
    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());return this.pushStack(d);
    };
  });var Ka = /^margin/,
      La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
      Ma = function Ma(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  };!(function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null;
      }
    }var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
        return b(), c;
      }, boxSizingReliable: function boxSizingReliable() {
        return b(), e;
      }, pixelMarginRight: function pixelMarginRight() {
        return b(), f;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return b(), g;
      } }));
  })();function Na(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Oa(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Pa = /^(none|table(?!-c[ea]).+)/,
      Qa = { position: "absolute", visibility: "hidden", display: "block" },
      Ra = { letterSpacing: "0", fontWeight: "400" },
      Sa = ["Webkit", "Moz", "ms"],
      Ta = d.createElement("div").style;function Ua(a) {
    if (a in Ta) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Sa.length;while (c--) if ((a = Sa[c] + b, a in Ta)) return a;
  }function Va(a, b, c) {
    var d = aa.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Wa(a, b, c, d, e) {
    var f,
        g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));return g;
  }function Xa(a, b, c) {
    var d,
        e = !0,
        f = Ma(a),
        g = "border-box" === r.css(a, "boxSizing", !1, f);if ((a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d)) {
      if ((d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d))) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
    }return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px";
  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Na(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = r.camelCase(b),
            i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = { get: function get(a, c, d) {
        if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function () {
          return Xa(a, b, d);
        });
      }, set: function set(a, c, d) {
        var e,
            f = d && Ma(a),
            g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g);
      } };
  }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    r.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];return e;
      } }, Ka.test(a) || (r.cssHooks[a + b].set = Va);
  }), r.fn.extend({ css: function css(a, b) {
      return S(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (r.isArray(b)) {
          for (d = Ma(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);return f;
        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    } });function Ya(a, b, c, d, e) {
    return new Ya.prototype.init(a, b, c, d, e);
  }r.Tween = Ya, Ya.prototype = { constructor: Ya, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Ya.propHooks[this.prop];return a && a.get ? a.get(this) : Ya.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Ya.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this;
    } }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
      } } }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, r.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, r.fx = Ya.prototype.init, r.fx.step = {};var Za,
      $a,
      _a = /^(?:toggle|show|hide)$/,
      ab = /queueHooks$/;function bb() {
    $a && (a.requestAnimationFrame(bb), r.fx.tick());
  }function cb() {
    return a.setTimeout(function () {
      Za = void 0;
    }), Za = r.now();
  }function db(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ba[d], e["margin" + c] = e["padding" + c] = a;return b && (e.opacity = e.width = a), e;
  }function eb(a, b, c) {
    for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d;
  }function fb(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && ca(a),
        q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h();
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));for (d in b) if ((e = b[d], _a.test(e))) {
      if ((delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show"))) {
        if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
      }n[d] = q && q[d] || r.style(a, d);
    }if ((i = !r.isEmptyObject(b), i || !r.isEmptyObject(n))) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j;
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      })), i = !1;for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ha([a], !0), m.done(function () {
        p || ha([a]), V.remove(a, "fxshow");for (d in n) r.style(a, d, n[d]);
      })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
    }
  }function gb(a, b) {
    var c, d, e, f, g;for (c in a) if ((d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g)) {
      f = g.expand(f), delete a[d];for (c in f) c in a || (a[c] = f[c], b[c] = e);
    } else b[d] = e;
  }function hb(a, b, c) {
    var d,
        e,
        f = 0,
        g = hb.prefilters.length,
        h = r.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Za || cb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) j.tweens[c].run(1);return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (gb(k, j.opts.specialEasing); f < g; f++) if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }r.Animation = r.extend(hb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return ea(c.elem, a, aa.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; d < e; d++) c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b);
    }, prefilters: [fb], prefilter: function prefilter(a, b) {
      b ? hb.prefilters.unshift(a) : hb.prefilters.push(a);
    } }), r.speed = function (a, b, c) {
    var e = a && "object" == typeof a ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
      r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
    }, e;
  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function g() {
        var b = hb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));!b && c || r.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = V.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);delete c.finish;
      });
    } }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e);
    };
  }), r.each({ slideDown: db("show"), slideUp: db("hide"), slideToggle: db("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), r.timers = [], r.fx.tick = function () {
    var a,
        b = 0,
        c = r.timers;for (Za = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);c.length || r.fx.stop(), Za = void 0;
  }, r.fx.timer = function (a) {
    r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
  }, r.fx.interval = 13, r.fx.start = function () {
    $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval));
  }, r.fx.stop = function () {
    a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null;
  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, (function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
  })();var ib,
      jb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
      return S(this, r.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    } }), r.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(K);if (e && 1 === a.nodeType) while (c = e[d++]) a.removeAttribute(c);
    } }), ib = { set: function set(a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = jb[b] || r.find.attr;jb[b] = function (a, b, d) {
      var e,
          f,
          g = b.toLowerCase();return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e;
    };
  });var kb = /^(?:input|select|textarea|button)$/i,
      lb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
      return S(this, r.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    } }), r.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this;
  });function mb(a) {
    var b = a.match(K) || [];return b.join(" ");
  }function nb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }r.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, nb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(K) || [];while (c = this[i++]) if ((e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ")) {
          g = 0;while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");h = mb(d), e !== h && c.setAttribute("class", h);
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, nb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(K) || [];while (c = this[i++]) if ((e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ")) {
          g = 0;while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");h = mb(d), e !== h && c.setAttribute("class", h);
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a;return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, nb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;return !1;
    } });var ob = /\r/g;r.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c);
      }
    } }), r.extend({ valHooks: { option: { get: function get(a) {
          var b = r.find.attr(a, "value");return null != b ? b : mb(r.text(a));
        } }, select: { get: function get(a) {
          var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) if ((c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup")))) {
            if ((b = r(c).val(), g)) return b;h.push(b);
          }return h;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);return c || (a.selectedIndex = -1), f;
        } } } }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = { set: function set(a, b) {
        if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
      } }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if ((h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1))) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
    } }), r.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), r.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };r.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
      } };
  });var qb = a.location,
      rb = r.now(),
      sb = /\?/;r.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  };var tb = /\[\]$/,
      ub = /\r?\n/g,
      vb = /^(?:submit|button|image|reset|file)$/i,
      wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
    var e;if (r.isArray(b)) r.each(b, function (b, e) {
      c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) xb(a + "[" + e + "]", b[e], c, d);
  }r.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
    };if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) xb(c, a[c], b, e);return d.join("&");
  }, r.fn.extend({ serialize: function serialize() {
      return r.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a));
      }).map(function (a, b) {
        var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
          return { name: b.name, value: a.replace(ub, "\r\n") };
        }) : { name: b.name, value: c.replace(ub, "\r\n") };
      }).get();
    } });var yb = /%20/g,
      zb = /#.*$/,
      Ab = /([?&])_=[^&]*/,
      Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Db = /^(?:GET|HEAD)$/,
      Eb = /^\/\//,
      Fb = {},
      Gb = {},
      Hb = "*/".concat("*"),
      Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
    };
  }function Kb(a, b, c, d) {
    var e = {},
        f = a === Gb;function g(h) {
      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Lb(a, b) {
    var c,
        d,
        e = r.ajaxSettings.flatOptions || {};for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);return d && r.extend(!0, a, d), a;
  }function Mb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));if (d) for (e in h) if (h[e] && h[e].test(d)) {
      i.unshift(e);break;
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }if (f) return f !== i[0] && i.unshift(f), c[f];
  }function Nb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];f = k.shift();while (f) if ((a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
      if ((g = j[i + " " + f] || j["* " + f], !g)) for (e in j) if ((h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))) {
        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
      }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
        b = g(b);
      } catch (l) {
        return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
      }
    }return { state: "success", data: b };
  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
    }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
      "object" == typeof b && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (k) {
            if (!h) {
              h = {};while (b = Bb.exec(g)) h[b[1].toLowerCase()] = b[2];
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return k ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return null == k && (o.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) u[b] = [u[b], a[b]];return this;
        }, abort: function abort(a) {
          var b = a || x;return e && e.abort(b), A(0, b), this;
        } };if ((s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain)) {
        j = d.createElement("a");try {
          j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
        } catch (z) {
          o.crossDomain = !0;
        }
      }if ((o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k)) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) y.setRequestHeader(m, o.headers[m]);if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if ((x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y))) {
        if ((y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k)) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout));try {
          k = !1, e.send(v, A);
        } catch (z) {
          if (k) throw z;A(-1, z);
        }
      } else A(-1, "No Transport");function A(b, c, d, h) {
        var j,
            m,
            n,
            v,
            w,
            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }return y;
    }, getJSON: function getJSON(a, b, c) {
      return r.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return r.get(a, void 0, b, "script");
    } }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
    };
  }), r._evalUrl = function (a) {
    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, r.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) a = a.firstElementChild;return a;
      }).append(this)), this;
    }, wrapInner: function wrapInner(a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = r(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = r.isFunction(a);return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    } }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a);
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Ob = { 0: 200, 1223: 204 },
      Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
    var c, d;if (o.cors || Pb && !b.crossDomain) return { send: function send(e, f) {
        var g,
            h = b.xhr();if ((h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)) for (g in b.xhrFields) h[g] = b.xhrFields[g];b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) h.setRequestHeader(g, e[g]);c = function (a) {
          return function () {
            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            c && d();
          });
        }, c = c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (c) throw i;
        }
      }, abort: function abort() {
        c && c();
      } };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return r.globalEval(a), a;
      } } }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;return { send: function send(e, f) {
          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) {
            b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          c && c();
        } };
    }
  });var Qb = [],
      Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), o.createHTMLDocument = (function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  })(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, r.fn.load = function (a, b, c) {
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  };function Sb(a) {
    return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }r.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, r.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });var b,
          c,
          d,
          e,
          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) a = a.offsetParent;return a || qa;
      });
    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;r.fn[a] = function (d) {
      return S(this, function (a, d, e) {
        var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) {
      if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c;
    });
  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), r.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
    return r;
  });var Tb = a.jQuery,
      Ub = a.$;return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
/* jquery.nicescroll 3.2.0 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */(function (e) {
  var y = !1,
      D = !1,
      J = 5E3,
      K = 2E3,
      x = 0,
      L = (function () {
    var e = document.getElementsByTagName("script"),
        e = e[e.length - 1].src.split("?")[0];return 0 < e.split("/").length ? e.split("/").slice(0, -1).join("/") + "/" : "";
  })();Array.prototype.forEach || (Array.prototype.forEach = function (e, c) {
    for (var h = 0, l = this.length; h < l; ++h) e.call(c, this[h], h, this);
  });var v = window.requestAnimationFrame || !1,
      w = window.cancelAnimationFrame || !1;["ms", "moz", "webkit", "o"].forEach(function (e) {
    v || (v = window[e + "RequestAnimationFrame"]);w || (w = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"]);
  });var z = window.MutationObserver || window.WebKitMutationObserver || !1,
      F = { zindex: "auto", cursoropacitymin: 0, cursoropacitymax: 1, cursorcolor: "#424242", cursorwidth: "5px", cursorborder: "1px solid #fff", cursorborderradius: "5px", scrollspeed: 60, mousescrollstep: 24, touchbehavior: !1, hwacceleration: !0, usetransition: !0, boxzoom: !1, dblclickzoom: !0, gesturezoom: !0, grabcursorenabled: !0, autohidemode: !0, background: "", iframeautoresize: !0, cursorminheight: 32,
    preservenativescrolling: !0, railoffset: !1, bouncescroll: !0, spacebarenabled: !0, railpadding: { top: 0, right: 0, left: 0, bottom: 0 }, disableoutline: !0, horizrailenabled: !0, railalign: "right", railvalign: "bottom", enabletranslate3d: !0, enablemousewheel: !0, enablekeyboard: !0, smoothscroll: !0, sensitiverail: !0, enablemouselockapi: !0, cursorfixedheight: !1, directionlockdeadzone: 6, hidecursordelay: 400, nativeparentscrolling: !0, enablescrollonselection: !0, overflowx: !0, overflowy: !0, cursordragspeed: 0.3, rtlmode: !1, cursordragontouch: !1 },
      E = !1,
      M = function M() {
    if (E) return E;var e = document.createElement("DIV"),
        c = { haspointerlock: "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document };c.isopera = "opera" in window;c.isopera12 = c.isopera && "getUserMedia" in navigator;c.isie = "all" in document && "attachEvent" in e && !c.isopera;c.isieold = c.isie && !("msInterpolationMode" in e.style);c.isie7 = c.isie && !c.isieold && (!("documentMode" in document) || 7 == document.documentMode);c.isie8 = c.isie && "documentMode" in document && 8 == document.documentMode;c.isie9 = c.isie && "performance" in window && 9 <= document.documentMode;c.isie10 = c.isie && "performance" in window && 10 <= document.documentMode;c.isie9mobile = /iemobile.9/i.test(navigator.userAgent);c.isie9mobile && (c.isie9 = !1);c.isie7mobile = !c.isie9mobile && c.isie7 && /iemobile/i.test(navigator.userAgent);c.ismozilla = "MozAppearance" in e.style;c.iswebkit = "WebkitAppearance" in e.style;c.ischrome = "chrome" in window;c.ischrome22 = c.ischrome && c.haspointerlock;c.ischrome26 = c.ischrome && "transition" in e.style;c.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window;c.hasmstouch = window.navigator.msPointerEnabled || !1;c.ismac = /^mac$/i.test(navigator.platform);c.isios = c.cantouch && /iphone|ipad|ipod/i.test(navigator.platform);c.isios4 = c.isios && !("seal" in Object);c.isandroid = /android/i.test(navigator.userAgent);c.trstyle = !1;c.hastransform = !1;c.hastranslate3d = !1;c.transitionstyle = !1;c.hastransition = !1;c.transitionend = !1;for (var h = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"], l = 0; l < h.length; l++) if ("undefined" != typeof e.style[h[l]]) {
      c.trstyle = h[l];break;
    }c.hastransform = !1 != c.trstyle;c.hastransform && (e.style[c.trstyle] = "translate3d(1px,2px,3px)", c.hastranslate3d = /translate3d/.test(e.style[c.trstyle]));c.transitionstyle = !1;c.prefixstyle = "";c.transitionend = !1;for (var h = "transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "), n = " -webkit- -moz- -o- -o -ms- -khtml-".split(" "), t = "transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "), l = 0; l < h.length; l++) if (h[l] in e.style) {
      c.transitionstyle = h[l];c.prefixstyle = n[l];c.transitionend = t[l];break;
    }c.ischrome26 && (c.prefixstyle = n[1]);c.hastransition = c.transitionstyle;a: {
      h = ["-moz-grab", "-webkit-grab", "grab"];if (c.ischrome && !c.ischrome22 || c.isie) h = [];for (l = 0; l < h.length; l++) if ((n = h[l], e.style.cursor = n, e.style.cursor == n)) {
        h = n;break a;
      }h = "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize";
    }c.cursorgrabvalue = h;c.hasmousecapture = "setCapture" in e;c.hasMutationObserver = !1 !== z;return E = c;
  },
      N = function N(k, c) {
    function h() {
      var d = b.win;if ("zIndex" in d) return d.zIndex();for (; 0 < d.length && 9 != d[0].nodeType;) {
        var c = d.css("zIndex");if (!isNaN(c) && 0 != c) return parseInt(c);d = d.parent();
      }return !1;
    }function l(d, c, g) {
      c = d.css(c);d = parseFloat(c);return isNaN(d) ? (d = u[c] || 0, g = 3 == d ? g ? b.win.outerHeight() - b.win.innerHeight() : b.win.outerWidth() - b.win.innerWidth() : 1, b.isie8 && d && (d += 1), g ? d : 0) : d;
    }function n(d, c, g, e) {
      b._bind(d, c, function (b) {
        b = b ? b : window.event;var e = { original: b, target: b.target || b.srcElement, type: "wheel",
          deltaMode: "MozMousePixelScroll" == b.type ? 0 : 1, deltaX: 0, deltaZ: 0, preventDefault: function preventDefault() {
            b.preventDefault ? b.preventDefault() : b.returnValue = !1;return !1;
          }, stopImmediatePropagation: function stopImmediatePropagation() {
            b.stopImmediatePropagation ? b.stopImmediatePropagation() : b.cancelBubble = !0;
          } };"mousewheel" == c ? (e.deltaY = -0.025 * b.wheelDelta, b.wheelDeltaX && (e.deltaX = -0.025 * b.wheelDeltaX)) : e.deltaY = b.detail;return g.call(d, e);
      }, e);
    }function t(d, c, g) {
      var e, f;0 == d.deltaMode ? (e = -Math.floor(d.deltaX * (b.opt.mousescrollstep / 54)), f = -Math.floor(d.deltaY * (b.opt.mousescrollstep / 54))) : 1 == d.deltaMode && (e = -Math.floor(d.deltaX * b.opt.mousescrollstep), f = -Math.floor(d.deltaY * b.opt.mousescrollstep));c && 0 == e && f && (e = f, f = 0);e && (b.scrollmom && b.scrollmom.stop(), b.lastdeltax += e, b.debounced("mousewheelx", function () {
        var d = b.lastdeltax;b.lastdeltax = 0;b.rail.drag || b.doScrollLeftBy(d);
      }, 120));if (f) {
        if (b.opt.nativeparentscrolling && g && !b.ispage && !b.zoomactive) if (0 > f) {
          if (b.getScrollTop() >= b.page.maxh) return !0;
        } else if (0 >= b.getScrollTop()) return !0;b.scrollmom && b.scrollmom.stop();
        b.lastdeltay += f;b.debounced("mousewheely", function () {
          var d = b.lastdeltay;b.lastdeltay = 0;b.rail.drag || b.doScrollBy(d);
        }, 120);
      }d.stopImmediatePropagation();return d.preventDefault();
    }var b = this;this.version = "3.4.0";this.name = "nicescroll";this.me = c;this.opt = { doc: e("body"), win: !1 };e.extend(this.opt, F);this.opt.snapbackspeed = 80;if (k) for (var q in b.opt) "undefined" != typeof k[q] && (b.opt[q] = k[q]);this.iddoc = (this.doc = b.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";this.ispage = /BODY|HTML/.test(b.opt.win ? b.opt.win[0].nodeName : this.doc[0].nodeName);this.haswrapper = !1 !== b.opt.win;this.win = b.opt.win || (this.ispage ? e(window) : this.doc);this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win;this.body = e("body");this.iframe = this.isfixed = this.viewport = !1;this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;this.istextarea = "TEXTAREA" == this.win[0].nodeName;this.forcescreen = !1;this.canshowonmouseevent = "scroll" != b.opt.autohidemode;this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;this.scroll = { x: 0, y: 0 };this.scrollratio = { x: 0, y: 0 };this.cursorheight = 20;this.scrollvaluemax = 0;this.observerremover = this.observer = this.scrollmom = this.scrollrunning = this.checkrtlmode = !1;do this.id = "ascrail" + K++; while (document.getElementById(this.id));this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1;this.visibility = !0;this.hidden = this.locked = !1;this.cursoractive = !0;this.overflowx = b.opt.overflowx;this.overflowy = b.opt.overflowy;this.nativescrollingarea = !1;this.checkarea = 0;this.events = [];this.saved = {};this.delaylist = {};this.synclist = {};this.lastdeltay = this.lastdeltax = 0;this.detected = M();var f = e.extend({}, this.detected);this.ishwscroll = (this.canhwscroll = f.hastransform && b.opt.hwacceleration) && b.haswrapper;this.istouchcapable = !1;f.cantouch && f.ischrome && !f.isios && !f.isandroid && (this.istouchcapable = !0, f.cantouch = !1);f.cantouch && f.ismozilla && !f.isios && (this.istouchcapable = !0, f.cantouch = !1);b.opt.enablemouselockapi || (f.hasmousecapture = !1, f.haspointerlock = !1);this.delayed = function (d, c, g, e) {
      var f = b.delaylist[d],
          h = new Date().getTime();if (!e && f && f.tt) return !1;f && f.tt && clearTimeout(f.tt);if (f && f.last + g > h && !f.tt) b.delaylist[d] = { last: h + g, tt: setTimeout(function () {
          b.delaylist[d].tt = 0;c.call();
        }, g) };else if (!f || !f.tt) b.delaylist[d] = { last: h, tt: 0 }, setTimeout(function () {
        c.call();
      }, 0);
    };this.debounced = function (d, c, g) {
      var f = b.delaylist[d];new Date().getTime();b.delaylist[d] = c;f || setTimeout(function () {
        var c = b.delaylist[d];b.delaylist[d] = !1;c.call();
      }, g);
    };this.synched = function (d, c) {
      b.synclist[d] = c;(function () {
        b.onsync || (v(function () {
          b.onsync = !1;for (d in b.synclist) {
            var c = b.synclist[d];c && c.call(b);b.synclist[d] = !1;
          }
        }), b.onsync = !0);
      })();return d;
    };this.unsynched = function (d) {
      b.synclist[d] && (b.synclist[d] = !1);
    };this.css = function (d, c) {
      for (var g in c) b.saved.css.push([d, g, d.css(g)]), d.css(g, c[g]);
    };this.scrollTop = function (d) {
      return "undefined" == typeof d ? b.getScrollTop() : b.setScrollTop(d);
    };this.scrollLeft = function (d) {
      return "undefined" == typeof d ? b.getScrollLeft() : b.setScrollLeft(d);
    };BezierClass = function (b, c, g, f, e, h, l) {
      this.st = b;this.ed = c;this.spd = g;this.p1 = f || 0;this.p2 = e || 1;this.p3 = h || 0;this.p4 = l || 1;this.ts = new Date().getTime();this.df = this.ed - this.st;
    };BezierClass.prototype = { B2: function B2(b) {
        return 3 * b * b * (1 - b);
      }, B3: function B3(b) {
        return 3 * b * (1 - b) * (1 - b);
      }, B4: function B4(b) {
        return (1 - b) * (1 - b) * (1 - b);
      }, getNow: function getNow() {
        var b = 1 - (new Date().getTime() - this.ts) / this.spd,
            c = this.B2(b) + this.B3(b) + this.B4(b);return 0 > b ? this.ed : this.st + Math.round(this.df * c);
      }, update: function update(b, c) {
        this.st = this.getNow();this.ed = b;this.spd = c;this.ts = new Date().getTime();this.df = this.ed - this.st;return this;
      } };if (this.ishwscroll) {
      this.doc.translate = { x: 0, y: 0, tx: "0px", ty: "0px" };f.hastranslate3d && f.isios && this.doc.css("-webkit-backface-visibility", "hidden");var r = function r() {
        var d = b.doc.css(f.trstyle);return d && "matrix" == d.substr(0, 6) ? d.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1;
      };this.getScrollTop = function (d) {
        if (!d) {
          if (d = r()) return 16 == d.length ? -d[13] : -d[5];if (b.timerscroll && b.timerscroll.bz) return b.timerscroll.bz.getNow();
        }return b.doc.translate.y;
      };this.getScrollLeft = function (d) {
        if (!d) {
          if (d = r()) return 16 == d.length ? -d[12] : -d[4];if (b.timerscroll && b.timerscroll.bh) return b.timerscroll.bh.getNow();
        }return b.doc.translate.x;
      };this.notifyScrollEvent = document.createEvent ? function (b) {
        var c = document.createEvent("UIEvents");c.initUIEvent("scroll", !1, !0, window, 1);b.dispatchEvent(c);
      } : document.fireEvent ? function (b) {
        var c = document.createEventObject();b.fireEvent("onscroll");c.cancelBubble = !0;
      } : function (b, c) {};f.hastranslate3d && b.opt.enabletranslate3d ? (this.setScrollTop = function (d, c) {
        b.doc.translate.y = d;b.doc.translate.ty = -1 * d + "px";b.doc.css(f.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)");c || b.notifyScrollEvent(b.win[0]);
      }, this.setScrollLeft = function (d, c) {
        b.doc.translate.x = d;b.doc.translate.tx = -1 * d + "px";b.doc.css(f.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)");c || b.notifyScrollEvent(b.win[0]);
      }) : (this.setScrollTop = function (d, c) {
        b.doc.translate.y = d;b.doc.translate.ty = -1 * d + "px";b.doc.css(f.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")");c || b.notifyScrollEvent(b.win[0]);
      }, this.setScrollLeft = function (d, c) {
        b.doc.translate.x = d;b.doc.translate.tx = -1 * d + "px";b.doc.css(f.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")");c || b.notifyScrollEvent(b.win[0]);
      });
    } else this.getScrollTop = function () {
      return b.docscroll.scrollTop();
    }, this.setScrollTop = function (d) {
      return b.docscroll.scrollTop(d);
    }, this.getScrollLeft = function () {
      return b.docscroll.scrollLeft();
    }, this.setScrollLeft = function (d) {
      return b.docscroll.scrollLeft(d);
    };this.getTarget = function (b) {
      return !b ? !1 : b.target ? b.target : b.srcElement ? b.srcElement : !1;
    };this.hasParent = function (b, c) {
      if (!b) return !1;for (var g = b.target || b.srcElement || b || !1; g && g.id != c;) g = g.parentNode || !1;return !1 !== g;
    };var u = { thin: 1, medium: 3, thick: 5 };this.getOffset = function () {
      if (b.isfixed) return { top: parseFloat(b.win.css("top")),
        left: parseFloat(b.win.css("left")) };if (!b.viewport) return b.win.offset();var d = b.win.offset(),
          c = b.viewport.offset();return { top: d.top - c.top + b.viewport.scrollTop(), left: d.left - c.left + b.viewport.scrollLeft() };
    };this.updateScrollBar = function (d) {
      if (b.ishwscroll) b.rail.css({ height: b.win.innerHeight() }), b.railh && b.railh.css({ width: b.win.innerWidth() });else {
        var c = b.getOffset(),
            g = c.top,
            f = c.left,
            g = g + l(b.win, "border-top-width", !0);b.win.outerWidth();b.win.innerWidth();var f = f + (b.rail.align ? b.win.outerWidth() - l(b.win, "border-right-width") - b.rail.width : l(b.win, "border-left-width")),
            e = b.opt.railoffset;e && (e.top && (g += e.top), b.rail.align && e.left && (f += e.left));b.locked || b.rail.css({ top: g, left: f, height: d ? d.h : b.win.innerHeight() });b.zoom && b.zoom.css({ top: g + 1, left: 1 == b.rail.align ? f - 20 : f + b.rail.width + 4 });b.railh && !b.locked && (g = c.top, f = c.left, d = b.railh.align ? g + l(b.win, "border-top-width", !0) + b.win.innerHeight() - b.railh.height : g + l(b.win, "border-top-width", !0), f += l(b.win, "border-left-width"), b.railh.css({ top: d, left: f,
          width: b.railh.width }));
      }
    };this.doRailClick = function (d, c, g) {
      var f;b.locked || (b.cancelEvent(d), c ? (c = g ? b.doScrollLeft : b.doScrollTop, f = g ? (d.pageX - b.railh.offset().left - b.cursorwidth / 2) * b.scrollratio.x : (d.pageY - b.rail.offset().top - b.cursorheight / 2) * b.scrollratio.y, c(f)) : (c = g ? b.doScrollLeftBy : b.doScrollBy, f = g ? b.scroll.x : b.scroll.y, d = g ? d.pageX - b.railh.offset().left : d.pageY - b.rail.offset().top, g = g ? b.view.w : b.view.h, f >= d ? c(g) : c(-g)));
    };b.hasanimationframe = v;b.hascancelanimationframe = w;b.hasanimationframe ? b.hascancelanimationframe || (w = function () {
      b.cancelAnimationFrame = !0;
    }) : (v = function (b) {
      return setTimeout(b, 15 - Math.floor(+new Date() / 1E3) % 16);
    }, w = clearInterval);this.init = function () {
      b.saved.css = [];if (f.isie7mobile) return !0;f.hasmstouch && b.css(b.ispage ? e("html") : b.win, { "-ms-touch-action": "none" });b.zindex = "auto";b.zindex = !b.ispage && "auto" == b.opt.zindex ? h() || "auto" : b.opt.zindex;!b.ispage && "auto" != b.zindex && b.zindex > x && (x = b.zindex);b.isie && 0 == b.zindex && "auto" == b.opt.zindex && (b.zindex = "auto");if (!b.ispage || !f.cantouch && !f.isieold && !f.isie9mobile) {
        var d = b.docscroll;b.ispage && (d = b.haswrapper ? b.win : b.doc);f.isie9mobile || b.css(d, { "overflow-y": "hidden" });b.ispage && f.isie7 && ("BODY" == b.doc[0].nodeName ? b.css(e("html"), { "overflow-y": "hidden" }) : "HTML" == b.doc[0].nodeName && b.css(e("body"), { "overflow-y": "hidden" }));f.isios && !b.ispage && !b.haswrapper && b.css(e("body"), { "-webkit-overflow-scrolling": "touch" });var c = e(document.createElement("div"));c.css({ position: "relative", top: 0, "float": "right", width: b.opt.cursorwidth, height: "0px", "background-color": b.opt.cursorcolor,
          border: b.opt.cursorborder, "background-clip": "padding-box", "-webkit-border-radius": b.opt.cursorborderradius, "-moz-border-radius": b.opt.cursorborderradius, "border-radius": b.opt.cursorborderradius });c.hborder = parseFloat(c.outerHeight() - c.innerHeight());b.cursor = c;var g = e(document.createElement("div"));g.attr("id", b.id);g.addClass("nicescroll-rails");var l,
            k,
            n = ["left", "right"],
            G;for (G in n) k = n[G], (l = b.opt.railpadding[k]) ? g.css("padding-" + k, l + "px") : b.opt.railpadding[k] = 0;g.append(c);g.width = Math.max(parseFloat(b.opt.cursorwidth), c.outerWidth()) + b.opt.railpadding.left + b.opt.railpadding.right;g.css({ width: g.width + "px", zIndex: b.zindex, background: b.opt.background, cursor: "default" });g.visibility = !0;g.scrollable = !0;g.align = "left" == b.opt.railalign ? 0 : 1;b.rail = g;c = b.rail.drag = !1;b.opt.boxzoom && !b.ispage && !f.isieold && (c = document.createElement("div"), b.bind(c, "click", b.doZoom), b.zoom = e(c), b.zoom.css({ cursor: "pointer", "z-index": b.zindex, backgroundImage: "url(" + L + "zoomico.png)", height: 18, width: 18, backgroundPosition: "0px 0px" }), b.opt.dblclickzoom && b.bind(b.win, "dblclick", b.doZoom), f.cantouch && b.opt.gesturezoom && (b.ongesturezoom = function (d) {
          1.5 < d.scale && b.doZoomIn(d);0.8 > d.scale && b.doZoomOut(d);return b.cancelEvent(d);
        }, b.bind(b.win, "gestureend", b.ongesturezoom)));b.railh = !1;if (b.opt.horizrailenabled) {
          b.css(d, { "overflow-x": "hidden" });c = e(document.createElement("div"));c.css({ position: "relative", top: 0, height: b.opt.cursorwidth, width: "0px", "background-color": b.opt.cursorcolor, border: b.opt.cursorborder, "background-clip": "padding-box", "-webkit-border-radius": b.opt.cursorborderradius,
            "-moz-border-radius": b.opt.cursorborderradius, "border-radius": b.opt.cursorborderradius });c.wborder = parseFloat(c.outerWidth() - c.innerWidth());b.cursorh = c;var m = e(document.createElement("div"));m.attr("id", b.id + "-hr");m.addClass("nicescroll-rails");m.height = Math.max(parseFloat(b.opt.cursorwidth), c.outerHeight());m.css({ height: m.height + "px", zIndex: b.zindex, background: b.opt.background });m.append(c);m.visibility = !0;m.scrollable = !0;m.align = "top" == b.opt.railvalign ? 0 : 1;b.railh = m;b.railh.drag = !1;
        }b.ispage ? (g.css({ position: "fixed", top: "0px", height: "100%" }), g.align ? g.css({ right: "0px" }) : g.css({ left: "0px" }), b.body.append(g), b.railh && (m.css({ position: "fixed", left: "0px", width: "100%" }), m.align ? m.css({ bottom: "0px" }) : m.css({ top: "0px" }), b.body.append(m))) : (b.ishwscroll ? ("static" == b.win.css("position") && b.css(b.win, { position: "relative" }), d = "HTML" == b.win[0].nodeName ? b.body : b.win, b.zoom && (b.zoom.css({ position: "absolute", top: 1, right: 0, "margin-right": g.width + 4 }), d.append(b.zoom)), g.css({ position: "absolute", top: 0 }), g.align ? g.css({ right: 0 }) : g.css({ left: 0 }), d.append(g), m && (m.css({ position: "absolute", left: 0, bottom: 0 }), m.align ? m.css({ bottom: 0 }) : m.css({ top: 0 }), d.append(m))) : (b.isfixed = "fixed" == b.win.css("position"), d = b.isfixed ? "fixed" : "absolute", b.isfixed || (b.viewport = b.getViewport(b.win[0])), b.viewport && (b.body = b.viewport, !1 == /relative|absolute/.test(b.viewport.css("position")) && b.css(b.viewport, { position: "relative" })), g.css({ position: d }), b.zoom && b.zoom.css({ position: d }), b.updateScrollBar(), b.body.append(g), b.zoom && b.body.append(b.zoom), b.railh && (m.css({ position: d }), b.body.append(m))), f.isios && b.css(b.win, { "-webkit-tap-highlight-color": "rgba(0,0,0,0)", "-webkit-touch-callout": "none" }), f.isie && b.opt.disableoutline && b.win.attr("hideFocus", "true"), f.iswebkit && b.opt.disableoutline && b.win.css({ outline: "none" }));!1 === b.opt.autohidemode ? (b.autohidedom = !1, b.rail.css({ opacity: b.opt.cursoropacitymax }), b.railh && b.railh.css({ opacity: b.opt.cursoropacitymax })) : !0 === b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), f.isie8 && (b.autohidedom = b.autohidedom.add(b.cursor)), b.railh && (b.autohidedom = b.autohidedom.add(b.railh)), b.railh && f.isie8 && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "scroll" == b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), b.railh && (b.autohidedom = b.autohidedom.add(b.railh))) : "cursor" == b.opt.autohidemode ? (b.autohidedom = e().add(b.cursor), b.railh && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "hidden" == b.opt.autohidemode && (b.autohidedom = !1, b.hide(), b.locked = !1);if (f.isie9mobile) b.scrollmom = new H(b), b.onmangotouch = function (d) {
          d = b.getScrollTop();var c = b.getScrollLeft();if (d == b.scrollmom.lastscrolly && c == b.scrollmom.lastscrollx) return !0;var g = d - b.mangotouch.sy,
              f = c - b.mangotouch.sx;if (0 != Math.round(Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)))) {
            var p = 0 > g ? -1 : 1,
                e = 0 > f ? -1 : 1,
                h = +new Date();b.mangotouch.lazy && clearTimeout(b.mangotouch.lazy);80 < h - b.mangotouch.tm || b.mangotouch.dry != p || b.mangotouch.drx != e ? (b.scrollmom.stop(), b.scrollmom.reset(c, d), b.mangotouch.sy = d, b.mangotouch.ly = d, b.mangotouch.sx = c, b.mangotouch.lx = c, b.mangotouch.dry = p, b.mangotouch.drx = e, b.mangotouch.tm = h) : (b.scrollmom.stop(), b.scrollmom.update(b.mangotouch.sx - f, b.mangotouch.sy - g), b.mangotouch.tm = h, g = Math.max(Math.abs(b.mangotouch.ly - d), Math.abs(b.mangotouch.lx - c)), b.mangotouch.ly = d, b.mangotouch.lx = c, 2 < g && (b.mangotouch.lazy = setTimeout(function () {
              b.mangotouch.lazy = !1;b.mangotouch.dry = 0;b.mangotouch.drx = 0;b.mangotouch.tm = 0;b.scrollmom.doMomentum(30);
            }, 100)));
          }
        }, g = b.getScrollTop(), m = b.getScrollLeft(), b.mangotouch = { sy: g, ly: g, dry: 0, sx: m, lx: m, drx: 0, lazy: !1, tm: 0 }, b.bind(b.docscroll, "scroll", b.onmangotouch);else {
          if (f.cantouch || b.istouchcapable || b.opt.touchbehavior || f.hasmstouch) {
            b.scrollmom = new H(b);b.ontouchstart = function (d) {
              if (d.pointerType && 2 != d.pointerType) return !1;if (!b.locked) {
                if (f.hasmstouch) for (var c = d.target ? d.target : !1; c;) {
                  var g = e(c).getNiceScroll();if (0 < g.length && g[0].me == b.me) break;if (0 < g.length) return !1;if ("DIV" == c.nodeName && c.id == b.id) break;c = c.parentNode ? c.parentNode : !1;
                }b.cancelScroll();if ((c = b.getTarget(d)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type)) return b.stopPropagation(d);
                !("clientX" in d) && "changedTouches" in d && (d.clientX = d.changedTouches[0].clientX, d.clientY = d.changedTouches[0].clientY);b.forcescreen && (g = d, d = { original: d.original ? d.original : d }, d.clientX = g.screenX, d.clientY = g.screenY);b.rail.drag = { x: d.clientX, y: d.clientY, sx: b.scroll.x, sy: b.scroll.y, st: b.getScrollTop(), sl: b.getScrollLeft(), pt: 2, dl: !1 };if (b.ispage || !b.opt.directionlockdeadzone) b.rail.drag.dl = "f";else {
                  var g = e(window).width(),
                      p = e(window).height(),
                      h = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                      l = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
                      p = Math.max(0, l - p),
                      g = Math.max(0, h - g);b.rail.drag.ck = !b.rail.scrollable && b.railh.scrollable ? 0 < p ? "v" : !1 : b.rail.scrollable && !b.railh.scrollable ? 0 < g ? "h" : !1 : !1;b.rail.drag.ck || (b.rail.drag.dl = "f");
                }b.opt.touchbehavior && b.isiframe && f.isie && (g = b.win.position(), b.rail.drag.x += g.left, b.rail.drag.y += g.top);b.hasmoving = !1;b.lastmouseup = !1;b.scrollmom.reset(d.clientX, d.clientY);if (!f.cantouch && !this.istouchcapable && !f.hasmstouch) {
                  if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName)) return !b.ispage && f.hasmousecapture && c.setCapture(), b.cancelEvent(d);/SUBMIT|CANCEL|BUTTON/i.test(e(c).attr("type")) && (pc = { tg: c, click: !1 }, b.preventclick = pc);
                }
              }
            };b.ontouchend = function (d) {
              if (d.pointerType && 2 != d.pointerType) return !1;if (b.rail.drag && 2 == b.rail.drag.pt && (b.scrollmom.doMomentum(), b.rail.drag = !1, b.hasmoving && (b.hasmoving = !1, b.lastmouseup = !0, b.hideCursor(), f.hasmousecapture && document.releaseCapture(), !f.cantouch))) return b.cancelEvent(d);
            };var q = b.opt.touchbehavior && b.isiframe && !f.hasmousecapture;b.ontouchmove = function (d, c) {
              if (d.pointerType && 2 != d.pointerType) return !1;if (b.rail.drag && 2 == b.rail.drag.pt) {
                if (f.cantouch && "undefined" == typeof d.original) return !0;b.hasmoving = !0;b.preventclick && !b.preventclick.click && (b.preventclick.click = b.preventclick.tg.onclick || !1, b.preventclick.tg.onclick = b.onpreventclick);d = e.extend({ original: d }, d);"changedTouches" in d && (d.clientX = d.changedTouches[0].clientX, d.clientY = d.changedTouches[0].clientY);if (b.forcescreen) {
                  var g = d;d = { original: d.original ? d.original : d };d.clientX = g.screenX;d.clientY = g.screenY;
                }g = ofy = 0;if (q && !c) {
                  var p = b.win.position(),
                      g = -p.left;ofy = -p.top;
                }var h = d.clientY + ofy,
                    p = h - b.rail.drag.y,
                    l = d.clientX + g,
                    k = l - b.rail.drag.x,
                    s = b.rail.drag.st - p;b.ishwscroll && b.opt.bouncescroll ? 0 > s ? s = Math.round(s / 2) : s > b.page.maxh && (s = b.page.maxh + Math.round((s - b.page.maxh) / 2)) : (0 > s && (h = s = 0), s > b.page.maxh && (s = b.page.maxh, h = 0));if (b.railh && b.railh.scrollable) {
                  var m = b.rail.drag.sl - k;b.ishwscroll && b.opt.bouncescroll ? 0 > m ? m = Math.round(m / 2) : m > b.page.maxw && (m = b.page.maxw + Math.round((m - b.page.maxw) / 2)) : (0 > m && (l = m = 0), m > b.page.maxw && (m = b.page.maxw, l = 0));
                }g = !1;if (b.rail.drag.dl) g = !0, "v" == b.rail.drag.dl ? m = b.rail.drag.sl : "h" == b.rail.drag.dl && (s = b.rail.drag.st);else {
                  var p = Math.abs(p),
                      k = Math.abs(k),
                      n = b.opt.directionlockdeadzone;if ("v" == b.rail.drag.ck) {
                    if (p > n && k <= 0.3 * p) return b.rail.drag = !1, !0;k > n && (b.rail.drag.dl = "f", e("body").scrollTop(e("body").scrollTop()));
                  } else if ("h" == b.rail.drag.ck) {
                    if (k > n && p <= 0.3 * az) return b.rail.drag = !1, !0;p > n && (b.rail.drag.dl = "f", e("body").scrollLeft(e("body").scrollLeft()));
                  }
                }b.synched("touchmove", function () {
                  b.rail.drag && 2 == b.rail.drag.pt && (b.prepareTransition && b.prepareTransition(0), b.rail.scrollable && b.setScrollTop(s), b.scrollmom.update(l, h), b.railh && b.railh.scrollable ? (b.setScrollLeft(m), b.showCursor(s, m)) : b.showCursor(s), f.isie10 && document.selection.clear());
                });f.ischrome && b.istouchcapable && (g = !1);if (g) return b.cancelEvent(d);
              }
            };
          }b.onmousedown = function (d, c) {
            if (!(b.rail.drag && 1 != b.rail.drag.pt)) {
              if (b.locked) return b.cancelEvent(d);b.cancelScroll();b.rail.drag = { x: d.clientX, y: d.clientY, sx: b.scroll.x,
                sy: b.scroll.y, pt: 1, hr: !!c };var g = b.getTarget(d);!b.ispage && f.hasmousecapture && g.setCapture();b.isiframe && !f.hasmousecapture && (b.saved.csspointerevents = b.doc.css("pointer-events"), b.css(b.doc, { "pointer-events": "none" }));return b.cancelEvent(d);
            }
          };b.onmouseup = function (d) {
            if (b.rail.drag && (f.hasmousecapture && document.releaseCapture(), b.isiframe && !f.hasmousecapture && b.doc.css("pointer-events", b.saved.csspointerevents), 1 == b.rail.drag.pt)) return b.rail.drag = !1, b.cancelEvent(d);
          };b.onmousemove = function (d) {
            if (b.rail.drag && 1 == b.rail.drag.pt) {
              if (f.ischrome && 0 == d.which) return b.onmouseup(d);b.cursorfreezed = !0;if (b.rail.drag.hr) {
                b.scroll.x = b.rail.drag.sx + (d.clientX - b.rail.drag.x);0 > b.scroll.x && (b.scroll.x = 0);var c = b.scrollvaluemaxw;b.scroll.x > c && (b.scroll.x = c);
              } else b.scroll.y = b.rail.drag.sy + (d.clientY - b.rail.drag.y), 0 > b.scroll.y && (b.scroll.y = 0), c = b.scrollvaluemax, b.scroll.y > c && (b.scroll.y = c);b.synched("mousemove", function () {
                b.rail.drag && 1 == b.rail.drag.pt && (b.showCursor(), b.rail.drag.hr ? b.doScrollLeft(Math.round(b.scroll.x * b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollTop(Math.round(b.scroll.y * b.scrollratio.y), b.opt.cursordragspeed));
              });return b.cancelEvent(d);
            }
          };if (f.cantouch || b.opt.touchbehavior) b.onpreventclick = function (d) {
            if (b.preventclick) return b.preventclick.tg.onclick = b.preventclick.click, b.preventclick = !1, b.cancelEvent(d);
          }, b.bind(b.win, "mousedown", b.ontouchstart), b.onclick = f.isios ? !1 : function (d) {
            return b.lastmouseup ? (b.lastmouseup = !1, b.cancelEvent(d)) : !0;
          }, b.opt.grabcursorenabled && f.cursorgrabvalue && (b.css(b.ispage ? b.doc : b.win, { cursor: f.cursorgrabvalue }), b.css(b.rail, { cursor: f.cursorgrabvalue }));else {
            var r = function r(d) {
              if (b.selectiondrag) {
                if (d) {
                  var c = b.win.outerHeight();d = d.pageY - b.selectiondrag.top;0 < d && d < c && (d = 0);d >= c && (d -= c);b.selectiondrag.df = d;
                }0 != b.selectiondrag.df && (b.doScrollBy(2 * -Math.floor(b.selectiondrag.df / 6)), b.debounced("doselectionscroll", function () {
                  r();
                }, 50));
              }
            };b.hasTextSelected = "getSelection" in document ? function () {
              return 0 < document.getSelection().rangeCount;
            } : "selection" in document ? function () {
              return "None" != document.selection.type;
            } : function () {
              return !1;
            };b.onselectionstart = function (d) {
              b.ispage || (b.selectiondrag = b.win.offset());
            };b.onselectionend = function (d) {
              b.selectiondrag = !1;
            };b.onselectiondrag = function (d) {
              b.selectiondrag && b.hasTextSelected() && b.debounced("selectionscroll", function () {
                r(d);
              }, 250);
            };
          }f.hasmstouch && (b.css(b.rail, { "-ms-touch-action": "none" }), b.css(b.cursor, { "-ms-touch-action": "none" }), b.bind(b.win, "MSPointerDown", b.ontouchstart), b.bind(document, "MSPointerUp", b.ontouchend), b.bind(document, "MSPointerMove", b.ontouchmove), b.bind(b.cursor, "MSGestureHold", function (b) {
            b.preventDefault();
          }), b.bind(b.cursor, "contextmenu", function (b) {
            b.preventDefault();
          }));this.istouchcapable && (b.bind(b.win, "touchstart", b.ontouchstart), b.bind(document, "touchend", b.ontouchend), b.bind(document, "touchcancel", b.ontouchend), b.bind(document, "touchmove", b.ontouchmove));b.bind(b.cursor, "mousedown", b.onmousedown);b.bind(b.cursor, "mouseup", b.onmouseup);b.railh && (b.bind(b.cursorh, "mousedown", function (d) {
            b.onmousedown(d, !0);
          }), b.bind(b.cursorh, "mouseup", function (d) {
            if (!(b.rail.drag && 2 == b.rail.drag.pt)) return b.rail.drag = !1, b.hasmoving = !1, b.hideCursor(), f.hasmousecapture && document.releaseCapture(), b.cancelEvent(d);
          }));if (b.opt.cursordragontouch || !f.cantouch && !b.opt.touchbehavior) b.rail.css({ cursor: "default" }), b.railh && b.railh.css({ cursor: "default" }), b.jqbind(b.rail, "mouseenter", function () {
            b.canshowonmouseevent && b.showCursor();b.rail.active = !0;
          }), b.jqbind(b.rail, "mouseleave", function () {
            b.rail.active = !1;b.rail.drag || b.hideCursor();
          }), b.opt.sensitiverail && (b.bind(b.rail, "click", function (d) {
            b.doRailClick(d, !1, !1);
          }), b.bind(b.rail, "dblclick", function (d) {
            b.doRailClick(d, !0, !1);
          }), b.bind(b.cursor, "click", function (d) {
            b.cancelEvent(d);
          }), b.bind(b.cursor, "dblclick", function (d) {
            b.cancelEvent(d);
          })), b.railh && (b.jqbind(b.railh, "mouseenter", function () {
            b.canshowonmouseevent && b.showCursor();b.rail.active = !0;
          }), b.jqbind(b.railh, "mouseleave", function () {
            b.rail.active = !1;b.rail.drag || b.hideCursor();
          }), b.opt.sensitiverail && (b.bind(b.railh, "click", function (d) {
            b.doRailClick(d, !1, !0);
          }), b.bind(b.railh, "dblclick", function (d) {
            b.doRailClick(d, !0, !0);
          }), b.bind(b.cursorh, "click", function (d) {
            b.cancelEvent(d);
          }), b.bind(b.cursorh, "dblclick", function (d) {
            b.cancelEvent(d);
          })));!f.cantouch && !b.opt.touchbehavior ? (b.bind(f.hasmousecapture ? b.win : document, "mouseup", b.onmouseup), b.bind(document, "mousemove", b.onmousemove), b.onclick && b.bind(document, "click", b.onclick), !b.ispage && b.opt.enablescrollonselection && (b.bind(b.win[0], "mousedown", b.onselectionstart), b.bind(document, "mouseup", b.onselectionend), b.bind(b.cursor, "mouseup", b.onselectionend), b.cursorh && b.bind(b.cursorh, "mouseup", b.onselectionend), b.bind(document, "mousemove", b.onselectiondrag)), b.zoom && (b.jqbind(b.zoom, "mouseenter", function () {
            b.canshowonmouseevent && b.showCursor();b.rail.active = !0;
          }), b.jqbind(b.zoom, "mouseleave", function () {
            b.rail.active = !1;b.rail.drag || b.hideCursor();
          }))) : (b.bind(f.hasmousecapture ? b.win : document, "mouseup", b.ontouchend), b.bind(document, "mousemove", b.ontouchmove), b.onclick && b.bind(document, "click", b.onclick), b.opt.cursordragontouch && (b.bind(b.cursor, "mousedown", b.onmousedown), b.bind(b.cursor, "mousemove", b.onmousemove), b.cursorh && b.bind(b.cursorh, "mousedown", b.onmousedown), b.cursorh && b.bind(b.cursorh, "mousemove", b.onmousemove)));b.opt.enablemousewheel && (b.isiframe || b.bind(f.isie && b.ispage ? document : b.docscroll, "mousewheel", b.onmousewheel), b.bind(b.rail, "mousewheel", b.onmousewheel), b.railh && b.bind(b.railh, "mousewheel", b.onmousewheelhr));!b.ispage && !f.cantouch && !/HTML|BODY/.test(b.win[0].nodeName) && (b.win.attr("tabindex") || b.win.attr({ tabindex: J++ }), b.jqbind(b.win, "focus", function (d) {
            y = b.getTarget(d).id || !0;b.hasfocus = !0;b.canshowonmouseevent && b.noticeCursor();
          }), b.jqbind(b.win, "blur", function (d) {
            y = !1;b.hasfocus = !1;
          }), b.jqbind(b.win, "mouseenter", function (d) {
            D = b.getTarget(d).id || !0;b.hasmousefocus = !0;b.canshowonmouseevent && b.noticeCursor();
          }), b.jqbind(b.win, "mouseleave", function () {
            D = !1;b.hasmousefocus = !1;
          }));
        }b.onkeypress = function (d) {
          if (b.locked && 0 == b.page.maxh) return !0;d = d ? d : window.e;var c = b.getTarget(d);if (c && /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) && (!c.getAttribute("type") && !c.type || !/submit|button|cancel/i.tp)) return !0;if (b.hasfocus || b.hasmousefocus && !y || b.ispage && !y && !D) {
            c = d.keyCode;if (b.locked && 27 != c) return b.cancelEvent(d);var g = d.ctrlKey || !1,
                p = d.shiftKey || !1,
                f = !1;switch (c) {case 38:case 63233:
                b.doScrollBy(72);f = !0;break;case 40:case 63235:
                b.doScrollBy(-72);f = !0;break;case 37:case 63232:
                b.railh && (g ? b.doScrollLeft(0) : b.doScrollLeftBy(72), f = !0);break;case 39:case 63234:
                b.railh && (g ? b.doScrollLeft(b.page.maxw) : b.doScrollLeftBy(-72), f = !0);break;
              case 33:case 63276:
                b.doScrollBy(b.view.h);f = !0;break;case 34:case 63277:
                b.doScrollBy(-b.view.h);f = !0;break;case 36:case 63273:
                b.railh && g ? b.doScrollPos(0, 0) : b.doScrollTo(0);f = !0;break;case 35:case 63275:
                b.railh && g ? b.doScrollPos(b.page.maxw, b.page.maxh) : b.doScrollTo(b.page.maxh);f = !0;break;case 32:
                b.opt.spacebarenabled && (p ? b.doScrollBy(b.view.h) : b.doScrollBy(-b.view.h), f = !0);break;case 27:
                b.zoomactive && (b.doZoom(), f = !0);}if (f) return b.cancelEvent(d);
          }
        };b.opt.enablekeyboard && b.bind(document, f.isopera && !f.isopera12 ? "keypress" : "keydown", b.onkeypress);b.bind(window, "resize", b.lazyResize);b.bind(window, "orientationchange", b.lazyResize);b.bind(window, "load", b.lazyResize);if (f.ischrome && !b.ispage && !b.haswrapper) {
          var t = b.win.attr("style"),
              g = parseFloat(b.win.css("width")) + 1;b.win.css("width", g);b.synched("chromefix", function () {
            b.win.attr("style", t);
          });
        }b.onAttributeChange = function (d) {
          b.lazyResize(250);
        };!b.ispage && !b.haswrapper && (!1 !== z ? (b.observer = new z(function (d) {
          d.forEach(b.onAttributeChange);
        }), b.observer.observe(b.win[0], { childList: !0, characterData: !1, attributes: !0, subtree: !1 }), b.observerremover = new z(function (d) {
          d.forEach(function (d) {
            if (0 < d.removedNodes.length) for (var c in d.removedNodes) if (d.removedNodes[c] == b.win[0]) return b.remove();
          });
        }), b.observerremover.observe(b.win[0].parentNode, { childList: !0, characterData: !1, attributes: !1, subtree: !1 })) : (b.bind(b.win, f.isie && !f.isie9 ? "propertychange" : "DOMAttrModified", b.onAttributeChange), f.isie9 && b.win[0].attachEvent("onpropertychange", b.onAttributeChange), b.bind(b.win, "DOMNodeRemoved", function (d) {
          d.target == b.win[0] && b.remove();
        })));!b.ispage && b.opt.boxzoom && b.bind(window, "resize", b.resizeZoom);b.istextarea && b.bind(b.win, "mouseup", b.lazyResize);b.checkrtlmode = !0;b.lazyResize(30);
      }if ("IFRAME" == this.doc[0].nodeName) {
        var I = function I(d) {
          b.iframexd = !1;try {
            var c = "contentDocument" in this ? this.contentDocument : this.contentWindow.document;
          } catch (g) {
            b.iframexd = !0, c = !1;
          }if (b.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;b.forcescreen = !0;b.isiframe && (b.iframe = { doc: e(c), html: b.doc.contents().find("html")[0], body: b.doc.contents().find("body")[0] }, b.getContentSize = function () {
            return { w: Math.max(b.iframe.html.scrollWidth, b.iframe.body.scrollWidth), h: Math.max(b.iframe.html.scrollHeight, b.iframe.body.scrollHeight) };
          }, b.docscroll = e(b.iframe.body));!f.isios && b.opt.iframeautoresize && !b.isiframe && (b.win.scrollTop(0), b.doc.height(""), d = Math.max(c.getElementsByTagName("html")[0].scrollHeight, c.body.scrollHeight), b.doc.height(d));b.lazyResize(30);f.isie7 && b.css(e(b.iframe.html), { "overflow-y": "hidden" });b.css(e(b.iframe.body), { "overflow-y": "hidden" });"contentWindow" in this ? b.bind(this.contentWindow, "scroll", b.onscroll) : b.bind(c, "scroll", b.onscroll);b.opt.enablemousewheel && b.bind(c, "mousewheel", b.onmousewheel);b.opt.enablekeyboard && b.bind(c, f.isopera ? "keypress" : "keydown", b.onkeypress);if (f.cantouch || b.opt.touchbehavior) b.bind(c, "mousedown", b.onmousedown), b.bind(c, "mousemove", function (d) {
            b.onmousemove(d, !0);
          }), b.opt.grabcursorenabled && f.cursorgrabvalue && b.css(e(c.body), { cursor: f.cursorgrabvalue });b.bind(c, "mouseup", b.onmouseup);b.zoom && (b.opt.dblclickzoom && b.bind(c, "dblclick", b.doZoom), b.ongesturezoom && b.bind(c, "gestureend", b.ongesturezoom));
        };this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function () {
          I.call(b.doc[0], !1);
        }, 500);b.bind(this.doc, "load", I);
      }
    };this.showCursor = function (d, c) {
      b.cursortimeout && (clearTimeout(b.cursortimeout), b.cursortimeout = 0);if (b.rail) {
        b.autohidedom && (b.autohidedom.stop().css({ opacity: b.opt.cursoropacitymax }), b.cursoractive = !0);if (!b.rail.drag || 1 != b.rail.drag.pt) "undefined" != typeof d && !1 !== d && (b.scroll.y = Math.round(1 * d / b.scrollratio.y)), "undefined" != typeof c && (b.scroll.x = Math.round(1 * c / b.scrollratio.x));b.cursor.css({ height: b.cursorheight, top: b.scroll.y });b.cursorh && (!b.rail.align && b.rail.visibility ? b.cursorh.css({ width: b.cursorwidth, left: b.scroll.x + b.rail.width }) : b.cursorh.css({ width: b.cursorwidth, left: b.scroll.x }), b.cursoractive = !0);b.zoom && b.zoom.stop().css({ opacity: b.opt.cursoropacitymax });
      }
    };this.hideCursor = function (d) {
      !b.cursortimeout && b.rail && b.autohidedom && (b.cursortimeout = setTimeout(function () {
        if (!b.rail.active || !b.showonmouseevent) b.autohidedom.stop().animate({ opacity: b.opt.cursoropacitymin }), b.zoom && b.zoom.stop().animate({ opacity: b.opt.cursoropacitymin }), b.cursoractive = !1;b.cursortimeout = 0;
      }, d || b.opt.hidecursordelay));
    };this.noticeCursor = function (d, c, g) {
      b.showCursor(c, g);b.rail.active || b.hideCursor(d);
    };this.getContentSize = b.ispage ? function () {
      return { w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
        h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) };
    } : b.haswrapper ? function () {
      return { w: b.doc.outerWidth() + parseInt(b.win.css("paddingLeft")) + parseInt(b.win.css("paddingRight")), h: b.doc.outerHeight() + parseInt(b.win.css("paddingTop")) + parseInt(b.win.css("paddingBottom")) };
    } : function () {
      return { w: b.docscroll[0].scrollWidth, h: b.docscroll[0].scrollHeight };
    };this.onResize = function (d, c) {
      if (!b.win) return !1;if (!b.haswrapper && !b.ispage) {
        if ("none" == b.win.css("display")) return b.visibility && b.hideRail().hideRailHr(), !1;!b.hidden && !b.visibility && b.showRail().showRailHr();
      }var g = b.page.maxh,
          f = b.page.maxw,
          e = b.view.w;b.view = { w: b.ispage ? b.win.width() : parseInt(b.win[0].clientWidth), h: b.ispage ? b.win.height() : parseInt(b.win[0].clientHeight) };b.page = c ? c : b.getContentSize();b.page.maxh = Math.max(0, b.page.h - b.view.h);b.page.maxw = Math.max(0, b.page.w - b.view.w);if (b.page.maxh == g && b.page.maxw == f && b.view.w == e) {
        if (b.ispage) return b;g = b.win.offset();if (b.lastposition && (f = b.lastposition, f.top == g.top && f.left == g.left)) return b;b.lastposition = g;
      }0 == b.page.maxh ? (b.hideRail(), b.scrollvaluemax = 0, b.scroll.y = 0, b.scrollratio.y = 0, b.cursorheight = 0, b.setScrollTop(0), b.rail.scrollable = !1) : b.rail.scrollable = !0;0 == b.page.maxw ? (b.hideRailHr(), b.scrollvaluemaxw = 0, b.scroll.x = 0, b.scrollratio.x = 0, b.cursorwidth = 0, b.setScrollLeft(0), b.railh.scrollable = !1) : b.railh.scrollable = !0;b.locked = 0 == b.page.maxh && 0 == b.page.maxw;if (b.locked) return b.ispage || b.updateScrollBar(b.view), !1;!b.hidden && !b.visibility ? b.showRail().showRailHr() : !b.hidden && !b.railh.visibility && b.showRailHr();b.istextarea && b.win.css("resize") && "none" != b.win.css("resize") && (b.view.h -= 20);b.cursorheight = Math.min(b.view.h, Math.round(b.view.h * (b.view.h / b.page.h)));b.cursorheight = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorheight);b.cursorwidth = Math.min(b.view.w, Math.round(b.view.w * (b.view.w / b.page.w)));b.cursorwidth = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorwidth);b.scrollvaluemax = b.view.h - b.cursorheight - b.cursor.hborder;b.railh && (b.railh.width = 0 < b.page.maxh ? b.view.w - b.rail.width : b.view.w, b.scrollvaluemaxw = b.railh.width - b.cursorwidth - b.cursorh.wborder);b.checkrtlmode && b.railh && (b.checkrtlmode = !1, b.opt.rtlmode && 0 == b.scroll.x && b.setScrollLeft(b.page.maxw));b.ispage || b.updateScrollBar(b.view);b.scrollratio = { x: b.page.maxw / b.scrollvaluemaxw, y: b.page.maxh / b.scrollvaluemax };b.getScrollTop() > b.page.maxh ? b.doScrollTop(b.page.maxh) : (b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)), b.cursoractive && b.noticeCursor());b.scroll.y && 0 == b.getScrollTop() && b.doScrollTo(Math.floor(b.scroll.y * b.scrollratio.y));return b;
    };this.resize = b.onResize;this.lazyResize = function (d) {
      d = isNaN(d) ? 30 : d;b.delayed("resize", b.resize, d);return b;
    };this._bind = function (d, c, g, f) {
      b.events.push({ e: d, n: c, f: g, b: f, q: !1 });d.addEventListener ? d.addEventListener(c, g, f || !1) : d.attachEvent ? d.attachEvent("on" + c, g) : d["on" + c] = g;
    };this.jqbind = function (d, c, g) {
      b.events.push({ e: d,
        n: c, f: g, q: !0 });e(d).bind(c, g);
    };this.bind = function (d, c, g, e) {
      var h = "jquery" in d ? d[0] : d;"mousewheel" == c ? "onwheel" in b.win ? b._bind(h, "wheel", g, e || !1) : (d = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll", n(h, d, g, e || !1), "DOMMouseScroll" == d && n(h, "MozMousePixelScroll", g, e || !1)) : h.addEventListener ? (f.cantouch && /mouseup|mousedown|mousemove/.test(c) && b._bind(h, "mousedown" == c ? "touchstart" : "mouseup" == c ? "touchend" : "touchmove", function (b) {
        if (b.touches) {
          if (2 > b.touches.length) {
            var d = b.touches.length ? b.touches[0] : b;d.original = b;g.call(this, d);
          }
        } else b.changedTouches && (d = b.changedTouches[0], d.original = b, g.call(this, d));
      }, e || !1), b._bind(h, c, g, e || !1), f.cantouch && "mouseup" == c && b._bind(h, "touchcancel", g, e || !1)) : b._bind(h, c, function (d) {
        if ((d = d || window.event || !1) && d.srcElement) d.target = d.srcElement;"pageY" in d || (d.pageX = d.clientX + document.documentElement.scrollLeft, d.pageY = d.clientY + document.documentElement.scrollTop);return !1 === g.call(h, d) || !1 === e ? b.cancelEvent(d) : !0;
      });
    };this._unbind = function (b, c, g, f) {
      b.removeEventListener ? b.removeEventListener(c, g, f) : b.detachEvent ? b.detachEvent("on" + c, g) : b["on" + c] = !1;
    };this.unbindAll = function () {
      for (var d = 0; d < b.events.length; d++) {
        var c = b.events[d];c.q ? c.e.unbind(c.n, c.f) : b._unbind(c.e, c.n, c.f, c.b);
      }
    };this.cancelEvent = function (b) {
      b = b.original ? b.original : b ? b : window.event || !1;if (!b) return !1;b.preventDefault && b.preventDefault();b.stopPropagation && b.stopPropagation();b.preventManipulation && b.preventManipulation();b.cancelBubble = !0;b.cancel = !0;return b.returnValue = !1;
    };this.stopPropagation = function (b) {
      b = b.original ? b.original : b ? b : window.event || !1;if (!b) return !1;if (b.stopPropagation) return b.stopPropagation();b.cancelBubble && (b.cancelBubble = !0);return !1;
    };this.showRail = function () {
      if (0 != b.page.maxh && (b.ispage || "none" != b.win.css("display"))) b.visibility = !0, b.rail.visibility = !0, b.rail.css("display", "block");return b;
    };this.showRailHr = function () {
      if (!b.railh) return b;if (0 != b.page.maxw && (b.ispage || "none" != b.win.css("display"))) b.railh.visibility = !0, b.railh.css("display", "block");return b;
    };this.hideRail = function () {
      b.visibility = !1;b.rail.visibility = !1;b.rail.css("display", "none");return b;
    };this.hideRailHr = function () {
      if (!b.railh) return b;b.railh.visibility = !1;b.railh.css("display", "none");return b;
    };this.show = function () {
      b.hidden = !1;b.locked = !1;return b.showRail().showRailHr();
    };this.hide = function () {
      b.hidden = !0;b.locked = !0;return b.hideRail().hideRailHr();
    };this.toggle = function () {
      return b.hidden ? b.show() : b.hide();
    };this.remove = function () {
      b.stop();b.cursortimeout && clearTimeout(b.cursortimeout);b.doZoomOut();
      b.unbindAll();!1 !== b.observer && b.observer.disconnect();!1 !== b.observerremover && b.observerremover.disconnect();b.events = [];b.cursor && (b.cursor.remove(), b.cursor = null);b.cursorh && (b.cursorh.remove(), b.cursorh = null);b.rail && (b.rail.remove(), b.rail = null);b.railh && (b.railh.remove(), b.railh = null);b.zoom && (b.zoom.remove(), b.zoom = null);for (var d = 0; d < b.saved.css.length; d++) {
        var c = b.saved.css[d];c[0].css(c[1], "undefined" == typeof c[2] ? "" : c[2]);
      }b.saved = !1;b.me.data("__nicescroll", "");b.me = null;b.doc = null;b.docscroll = null;b.win = null;return b;
    };this.scrollstart = function (d) {
      this.onscrollstart = d;return b;
    };this.scrollend = function (d) {
      this.onscrollend = d;return b;
    };this.scrollcancel = function (d) {
      this.onscrollcancel = d;return b;
    };this.zoomin = function (d) {
      this.onzoomin = d;return b;
    };this.zoomout = function (d) {
      this.onzoomout = d;return b;
    };this.isScrollable = function (b) {
      b = b.target ? b.target : b;if ("OPTION" == b.nodeName) return !0;for (; b && 1 == b.nodeType && !/BODY|HTML/.test(b.nodeName);) {
        var c = e(b),
            c = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";if (/scroll|auto/.test(c)) return b.clientHeight != b.scrollHeight;b = b.parentNode ? b.parentNode : !1;
      }return !1;
    };this.getViewport = function (b) {
      for (b = b && b.parentNode ? b.parentNode : !1; b && 1 == b.nodeType && !/BODY|HTML/.test(b.nodeName);) {
        var c = e(b),
            g = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";if (/scroll|auto/.test(g) && b.clientHeight != b.scrollHeight || 0 < c.getNiceScroll().length) return c;b = b.parentNode ? b.parentNode : !1;
      }return !1;
    };this.onmousewheel = function (d) {
      if (b.locked) return !0;if (b.rail.drag) return b.cancelEvent(d);
      if (!b.rail.scrollable) return b.railh && b.railh.scrollable ? b.onmousewheelhr(d) : !0;var c = +new Date(),
          g = !1;b.opt.preservenativescrolling && b.checkarea + 600 < c && (b.nativescrollingarea = b.isScrollable(d), g = !0);b.checkarea = c;if (b.nativescrollingarea) return !0;if (d = t(d, !1, g)) b.checkarea = 0;return d;
    };this.onmousewheelhr = function (d) {
      if (b.locked || !b.railh.scrollable) return !0;if (b.rail.drag) return b.cancelEvent(d);var c = +new Date(),
          g = !1;b.opt.preservenativescrolling && b.checkarea + 600 < c && (b.nativescrollingarea = b.isScrollable(d), g = !0);b.checkarea = c;return b.nativescrollingarea ? !0 : b.locked ? b.cancelEvent(d) : t(d, !0, g);
    };this.stop = function () {
      b.cancelScroll();b.scrollmon && b.scrollmon.stop();b.cursorfreezed = !1;b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y));b.noticeCursor();return b;
    };this.getTransitionSpeed = function (c) {
      var f = Math.round(10 * b.opt.scrollspeed);c = Math.min(f, Math.round(c / 20 * b.opt.scrollspeed));return 20 < c ? c : 0;
    };b.opt.smoothscroll ? b.ishwscroll && f.hastransition && b.opt.usetransition ? (this.prepareTransition = function (c, e) {
      var g = e ? 20 < c ? c : 0 : b.getTransitionSpeed(c),
          h = g ? f.prefixstyle + "transform " + g + "ms ease-out" : "";if (!b.lasttransitionstyle || b.lasttransitionstyle != h) b.lasttransitionstyle = h, b.doc.css(f.transitionstyle, h);return g;
    }, this.doScrollLeft = function (c, f) {
      var g = b.scrollrunning ? b.newscrolly : b.getScrollTop();b.doScrollPos(c, g, f);
    }, this.doScrollTop = function (c, f) {
      var g = b.scrollrunning ? b.newscrollx : b.getScrollLeft();b.doScrollPos(g, c, f);
    }, this.doScrollPos = function (c, e, g) {
      var h = b.getScrollTop(),
          l = b.getScrollLeft();(0 > (b.newscrolly - h) * (e - h) || 0 > (b.newscrollx - l) * (c - l)) && b.cancelScroll();!1 == b.opt.bouncescroll && (0 > e ? e = 0 : e > b.page.maxh && (e = b.page.maxh), 0 > c ? c = 0 : c > b.page.maxw && (c = b.page.maxw));if (b.scrollrunning && c == b.newscrollx && e == b.newscrolly) return !1;b.newscrolly = e;b.newscrollx = c;b.newscrollspeed = g || !1;if (b.timer) return !1;b.timer = setTimeout(function () {
        var g = b.getScrollTop(),
            h = b.getScrollLeft(),
            l,
            k;l = c - h;k = e - g;l = Math.round(Math.sqrt(Math.pow(l, 2) + Math.pow(k, 2)));l = b.newscrollspeed && 1 < b.newscrollspeed ? b.newscrollspeed : b.getTransitionSpeed(l);b.newscrollspeed && 1 >= b.newscrollspeed && (l *= b.newscrollspeed);b.prepareTransition(l, !0);b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);0 < l && (!b.scrollrunning && b.onscrollstart && b.onscrollstart.call(b, { type: "scrollstart", current: { x: h, y: g }, request: { x: c, y: e }, end: { x: b.newscrollx, y: b.newscrolly }, speed: l }), f.transitionend ? b.scrollendtrapped || (b.scrollendtrapped = !0, b.bind(b.doc, f.transitionend, b.onScrollEnd, !1)) : (b.scrollendtrapped && clearTimeout(b.scrollendtrapped), b.scrollendtrapped = setTimeout(b.onScrollEnd, l)), b.timerscroll = { bz: new BezierClass(g, b.newscrolly, l, 0, 0, 0.58, 1), bh: new BezierClass(h, b.newscrollx, l, 0, 0, 0.58, 1) }, b.cursorfreezed || (b.timerscroll.tm = setInterval(function () {
          b.showCursor(b.getScrollTop(), b.getScrollLeft());
        }, 60)));b.synched("doScroll-set", function () {
          b.timer = 0;b.scrollendtrapped && (b.scrollrunning = !0);b.setScrollTop(b.newscrolly);b.setScrollLeft(b.newscrollx);if (!b.scrollendtrapped) b.onScrollEnd();
        });
      }, 50);
    }, this.cancelScroll = function () {
      if (!b.scrollendtrapped) return !0;
      var c = b.getScrollTop(),
          e = b.getScrollLeft();b.scrollrunning = !1;f.transitionend || clearTimeout(f.transitionend);b.scrollendtrapped = !1;b._unbind(b.doc, f.transitionend, b.onScrollEnd);b.prepareTransition(0);b.setScrollTop(c);b.railh && b.setScrollLeft(e);b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);b.timerscroll = !1;b.cursorfreezed = !1;b.showCursor(c, e);return b;
    }, this.onScrollEnd = function () {
      b.scrollendtrapped && b._unbind(b.doc, f.transitionend, b.onScrollEnd);b.scrollendtrapped = !1;b.prepareTransition(0);
      b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);b.timerscroll = !1;var c = b.getScrollTop(),
          e = b.getScrollLeft();b.setScrollTop(c);b.railh && b.setScrollLeft(e);b.noticeCursor(!1, c, e);b.cursorfreezed = !1;0 > c ? c = 0 : c > b.page.maxh && (c = b.page.maxh);0 > e ? e = 0 : e > b.page.maxw && (e = b.page.maxw);if (c != b.newscrolly || e != b.newscrollx) return b.doScrollPos(e, c, b.opt.snapbackspeed);b.onscrollend && b.scrollrunning && b.onscrollend.call(b, { type: "scrollend", current: { x: e, y: c }, end: { x: b.newscrollx, y: b.newscrolly } });b.scrollrunning = !1;
    }) : (this.doScrollLeft = function (c, f) {
      var g = b.scrollrunning ? b.newscrolly : b.getScrollTop();b.doScrollPos(c, g, f);
    }, this.doScrollTop = function (c, f) {
      var g = b.scrollrunning ? b.newscrollx : b.getScrollLeft();b.doScrollPos(g, c, f);
    }, this.doScrollPos = function (c, f, g) {
      function e() {
        if (b.cancelAnimationFrame) return !0;b.scrollrunning = !0;if (r = 1 - r) return b.timer = v(e) || 1;var c = 0,
            d = sy = b.getScrollTop();if (b.dst.ay) {
          var d = b.bzscroll ? b.dst.py + b.bzscroll.getNow() * b.dst.ay : b.newscrolly,
              g = d - sy;if (0 > g && d < b.newscrolly || 0 < g && d > b.newscrolly) d = b.newscrolly;b.setScrollTop(d);d == b.newscrolly && (c = 1);
        } else c = 1;var f = sx = b.getScrollLeft();if (b.dst.ax) {
          f = b.bzscroll ? b.dst.px + b.bzscroll.getNow() * b.dst.ax : b.newscrollx;g = f - sx;if (0 > g && f < b.newscrollx || 0 < g && f > b.newscrollx) f = b.newscrollx;b.setScrollLeft(f);f == b.newscrollx && (c += 1);
        } else c += 1;2 == c ? (b.timer = 0, b.cursorfreezed = !1, b.bzscroll = !1, b.scrollrunning = !1, 0 > d ? d = 0 : d > b.page.maxh && (d = b.page.maxh), 0 > f ? f = 0 : f > b.page.maxw && (f = b.page.maxw), f != b.newscrollx || d != b.newscrolly ? b.doScrollPos(f, d) : b.onscrollend && b.onscrollend.call(b, { type: "scrollend", current: { x: sx, y: sy }, end: { x: b.newscrollx, y: b.newscrolly } })) : b.timer = v(e) || 1;
      }f = "undefined" == typeof f || !1 === f ? b.getScrollTop(!0) : f;if (b.timer && b.newscrolly == f && b.newscrollx == c) return !0;b.timer && w(b.timer);b.timer = 0;var h = b.getScrollTop(),
          l = b.getScrollLeft();(0 > (b.newscrolly - h) * (f - h) || 0 > (b.newscrollx - l) * (c - l)) && b.cancelScroll();b.newscrolly = f;b.newscrollx = c;if (!b.bouncescroll || !b.rail.visibility) 0 > b.newscrolly ? b.newscrolly = 0 : b.newscrolly > b.page.maxh && (b.newscrolly = b.page.maxh);if (!b.bouncescroll || !b.railh.visibility) 0 > b.newscrollx ? b.newscrollx = 0 : b.newscrollx > b.page.maxw && (b.newscrollx = b.page.maxw);b.dst = {};b.dst.x = c - l;b.dst.y = f - h;b.dst.px = l;b.dst.py = h;var k = Math.round(Math.sqrt(Math.pow(b.dst.x, 2) + Math.pow(b.dst.y, 2)));b.dst.ax = b.dst.x / k;b.dst.ay = b.dst.y / k;var n = 0,
          q = k;0 == b.dst.x ? (n = h, q = f, b.dst.ay = 1, b.dst.py = 0) : 0 == b.dst.y && (n = l, q = c, b.dst.ax = 1, b.dst.px = 0);k = b.getTransitionSpeed(k);g && 1 >= g && (k *= g);b.bzscroll = 0 < k ? b.bzscroll ? b.bzscroll.update(q, k) : new BezierClass(n, q, k, 0, 1, 0, 1) : !1;if (!b.timer) {
        (h == b.page.maxh && f >= b.page.maxh || l == b.page.maxw && c >= b.page.maxw) && b.checkContentSize();var r = 1;b.cancelAnimationFrame = !1;b.timer = 1;b.onscrollstart && !b.scrollrunning && b.onscrollstart.call(b, { type: "scrollstart", current: { x: l, y: h }, request: { x: c, y: f }, end: { x: b.newscrollx, y: b.newscrolly }, speed: k });e();(h == b.page.maxh && f >= h || l == b.page.maxw && c >= l) && b.checkContentSize();b.noticeCursor();
      }
    }, this.cancelScroll = function () {
      b.timer && w(b.timer);b.timer = 0;b.bzscroll = !1;b.scrollrunning = !1;return b;
    }) : (this.doScrollLeft = function (c, f) {
      var g = b.getScrollTop();b.doScrollPos(c, g, f);
    }, this.doScrollTop = function (c, f) {
      var g = b.getScrollLeft();b.doScrollPos(g, c, f);
    }, this.doScrollPos = function (c, f, g) {
      var e = c > b.page.maxw ? b.page.maxw : c;0 > e && (e = 0);var h = f > b.page.maxh ? b.page.maxh : f;0 > h && (h = 0);b.synched("scroll", function () {
        b.setScrollTop(h);b.setScrollLeft(e);
      });
    }, this.cancelScroll = function () {});this.doScrollBy = function (c, f) {
      var g = 0,
          g = f ? Math.floor((b.scroll.y - c) * b.scrollratio.y) : (b.timer ? b.newscrolly : b.getScrollTop(!0)) - c;if (b.bouncescroll) {
        var e = Math.round(b.view.h / 2);g < -e ? g = -e : g > b.page.maxh + e && (g = b.page.maxh + e);
      }b.cursorfreezed = !1;py = b.getScrollTop(!0);if (0 > g && 0 >= py) return b.noticeCursor();if (g > b.page.maxh && py >= b.page.maxh) return b.checkContentSize(), b.noticeCursor();b.doScrollTop(g);
    };this.doScrollLeftBy = function (c, f) {
      var g = 0,
          g = f ? Math.floor((b.scroll.x - c) * b.scrollratio.x) : (b.timer ? b.newscrollx : b.getScrollLeft(!0)) - c;if (b.bouncescroll) {
        var e = Math.round(b.view.w / 2);g < -e ? g = -e : g > b.page.maxw + e && (g = b.page.maxw + e);
      }b.cursorfreezed = !1;px = b.getScrollLeft(!0);
      if (0 > g && 0 >= px || g > b.page.maxw && px >= b.page.maxw) return b.noticeCursor();b.doScrollLeft(g);
    };this.doScrollTo = function (c, f) {
      f && Math.round(c * b.scrollratio.y);b.cursorfreezed = !1;b.doScrollTop(c);
    };this.checkContentSize = function () {
      var c = b.getContentSize();(c.h != b.page.h || c.w != b.page.w) && b.resize(!1, c);
    };b.onscroll = function (c) {
      b.rail.drag || b.cursorfreezed || b.synched("scroll", function () {
        b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y));b.railh && (b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)));
        b.noticeCursor();
      });
    };b.bind(b.docscroll, "scroll", b.onscroll);this.doZoomIn = function (c) {
      if (!b.zoomactive) {
        b.zoomactive = !0;b.zoomrestore = { style: {} };var h = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
            g = b.win[0].style,
            l;for (l in h) {
          var k = h[l];b.zoomrestore.style[k] = "undefined" != typeof g[k] ? g[k] : "";
        }b.zoomrestore.style.width = b.win.css("width");b.zoomrestore.style.height = b.win.css("height");b.zoomrestore.padding = { w: b.win.outerWidth() - b.win.width(), h: b.win.outerHeight() - b.win.height() };f.isios4 && (b.zoomrestore.scrollTop = e(window).scrollTop(), e(window).scrollTop(0));b.win.css({ position: f.isios4 ? "absolute" : "fixed", top: 0, left: 0, "z-index": x + 100, margin: "0px" });h = b.win.css("backgroundColor");("" == h || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h)) && b.win.css("backgroundColor", "#fff");b.rail.css({ "z-index": x + 101 });b.zoom.css({ "z-index": x + 102 });b.zoom.css("backgroundPosition", "0px -18px");b.resizeZoom();b.onzoomin && b.onzoomin.call(b);return b.cancelEvent(c);
      }
    };this.doZoomOut = function (c) {
      if (b.zoomactive) return b.zoomactive = !1, b.win.css("margin", ""), b.win.css(b.zoomrestore.style), f.isios4 && e(window).scrollTop(b.zoomrestore.scrollTop), b.rail.css({ "z-index": b.zindex }), b.zoom.css({ "z-index": b.zindex }), b.zoomrestore = !1, b.zoom.css("backgroundPosition", "0px 0px"), b.onResize(), b.onzoomout && b.onzoomout.call(b), b.cancelEvent(c);
    };this.doZoom = function (c) {
      return b.zoomactive ? b.doZoomOut(c) : b.doZoomIn(c);
    };this.resizeZoom = function () {
      if (b.zoomactive) {
        var c = b.getScrollTop();b.win.css({ width: e(window).width() - b.zoomrestore.padding.w + "px", height: e(window).height() - b.zoomrestore.padding.h + "px" });b.onResize();b.setScrollTop(Math.min(b.page.maxh, c));
      }
    };this.init();e.nicescroll.push(this);
  },
      H = function H(e) {
    var c = this;this.nc = e;this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;this.snapy = this.snapx = !1;this.demuly = this.demulx = 0;this.lastscrolly = this.lastscrollx = -1;this.timer = this.chky = this.chkx = 0;this.time = function () {
      return +new Date();
    };this.reset = function (e, l) {
      c.stop();var k = c.time();c.steptime = 0;c.lasttime = k;c.speedx = 0;c.speedy = 0;c.lastx = e;c.lasty = l;c.lastscrollx = -1;c.lastscrolly = -1;
    };this.update = function (e, l) {
      var k = c.time();c.steptime = k - c.lasttime;c.lasttime = k;var k = l - c.lasty,
          t = e - c.lastx,
          b = c.nc.getScrollTop(),
          q = c.nc.getScrollLeft(),
          b = b + k,
          q = q + t;c.snapx = 0 > q || q > c.nc.page.maxw;c.snapy = 0 > b || b > c.nc.page.maxh;c.speedx = t;c.speedy = k;c.lastx = e;c.lasty = l;
    };this.stop = function () {
      c.nc.unsynched("domomentum2d");c.timer && clearTimeout(c.timer);c.timer = 0;c.lastscrollx = -1;c.lastscrolly = -1;
    };this.doSnapy = function (e, l) {
      var k = !1;0 > l ? (l = 0, k = !0) : l > c.nc.page.maxh && (l = c.nc.page.maxh, k = !0);0 > e ? (e = 0, k = !0) : e > c.nc.page.maxw && (e = c.nc.page.maxw, k = !0);k && c.nc.doScrollPos(e, l, c.nc.opt.snapbackspeed);
    };this.doMomentum = function (e) {
      var l = c.time(),
          k = e ? l + e : c.lasttime;e = c.nc.getScrollLeft();var t = c.nc.getScrollTop(),
          b = c.nc.page.maxh,
          q = c.nc.page.maxw;c.speedx = 0 < q ? Math.min(60, c.speedx) : 0;c.speedy = 0 < b ? Math.min(60, c.speedy) : 0;k = k && 50 >= l - k;if (0 > t || t > b || 0 > e || e > q) k = !1;e = c.speedx && k ? c.speedx : !1;if (c.speedy && k && c.speedy || e) {
        var f = Math.max(16, c.steptime);50 < f && (e = f / 50, c.speedx *= e, c.speedy *= e, f = 50);c.demulxy = 0;c.lastscrollx = c.nc.getScrollLeft();c.chkx = c.lastscrollx;c.lastscrolly = c.nc.getScrollTop();c.chky = c.lastscrolly;var r = c.lastscrollx,
            u = c.lastscrolly,
            d = function d() {
          var e = 600 < c.time() - l ? 0.04 : 0.02;if (c.speedx && (r = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy)), c.lastscrollx = r, 0 > r || r > q)) e = 0.1;if (c.speedy && (u = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy)), c.lastscrolly = u, 0 > u || u > b)) e = 0.1;c.demulxy = Math.min(1, c.demulxy + e);c.nc.synched("domomentum2d", function () {
            c.speedx && (c.nc.getScrollLeft() != c.chkx && c.stop(), c.chkx = r, c.nc.setScrollLeft(r));c.speedy && (c.nc.getScrollTop() != c.chky && c.stop(), c.chky = u, c.nc.setScrollTop(u));c.timer || (c.nc.hideCursor(), c.doSnapy(r, u));
          });1 > c.demulxy ? c.timer = setTimeout(d, f) : (c.stop(), c.nc.hideCursor(), c.doSnapy(r, u));
        };d();
      } else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop());
    };
  },
      A = e.fn.scrollTop;e.cssHooks.pageYOffset = { get: function get(k, c, h) {
      return (c = e.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollTop() : A.call(k);
    },
    set: function set(k, c) {
      var h = e.data(k, "__nicescroll") || !1;h && h.ishwscroll ? h.setScrollTop(parseInt(c)) : A.call(k, c);return this;
    } };e.fn.scrollTop = function (k) {
    if ("undefined" == typeof k) {
      var c = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;return c && c.ishwscroll ? c.getScrollTop() : A.call(this);
    }return this.each(function () {
      var c = e.data(this, "__nicescroll") || !1;c && c.ishwscroll ? c.setScrollTop(parseInt(k)) : A.call(e(this), k);
    });
  };var B = e.fn.scrollLeft;e.cssHooks.pageXOffset = { get: function get(k, c, h) {
      return (c = e.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollLeft() : B.call(k);
    }, set: function set(k, c) {
      var h = e.data(k, "__nicescroll") || !1;h && h.ishwscroll ? h.setScrollLeft(parseInt(c)) : B.call(k, c);return this;
    } };e.fn.scrollLeft = function (k) {
    if ("undefined" == typeof k) {
      var c = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;return c && c.ishwscroll ? c.getScrollLeft() : B.call(this);
    }return this.each(function () {
      var c = e.data(this, "__nicescroll") || !1;c && c.ishwscroll ? c.setScrollLeft(parseInt(k)) : B.call(e(this), k);
    });
  };var C = function C(k) {
    var c = this;this.length = 0;this.name = "nicescrollarray";this.each = function (e) {
      for (var h = 0; h < c.length; h++) e.call(c[h]);return c;
    };this.push = function (e) {
      c[c.length] = e;c.length++;
    };this.eq = function (e) {
      return c[e];
    };if (k) for (a = 0; a < k.length; a++) {
      var h = e.data(k[a], "__nicescroll") || !1;h && (this[this.length] = h, this.length++);
    }return this;
  };(function (e, c, h) {
    for (var l = 0; l < c.length; l++) h(e, c[l]);
  })(C.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function (e, c) {
    e[c] = function () {
      var e = arguments;return this.each(function () {
        this[c].apply(this, e);
      });
    };
  });e.fn.getNiceScroll = function (k) {
    return "undefined" == typeof k ? new C(this) : e.data(this[k], "__nicescroll") || !1;
  };e.extend(e.expr[":"], { nicescroll: function nicescroll(k) {
      return e.data(k, "__nicescroll") ? !0 : !1;
    } });e.fn.niceScroll = function (k, c) {
    "undefined" == typeof c && "object" == typeof k && !("jquery" in k) && (c = k, k = !1);var h = new C();"undefined" == typeof c && (c = {});k && (c.doc = e(k), c.win = e(this));var l = !("doc" in c);!l && !("win" in c) && (c.win = e(this));this.each(function () {
      var k = e(this).data("__nicescroll") || !1;k || (c.doc = l ? e(this) : c.doc, k = new N(c, e(this)), e(this).data("__nicescroll", k));h.push(k);
    });return 1 == h.length ? h[0] : h;
  };window.NiceScroll = { getjQuery: function getjQuery() {
      return e;
    } };e.nicescroll || (e.nicescroll = new C(), e.nicescroll.options = F);
})(jQuery);

!(function (t) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
    var e;e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.io = t();
  }
})(function () {
  var t;return (function e(t, n, r) {
    function o(s, a) {
      if (!n[s]) {
        if (!t[s]) {
          var c = "function" == typeof require && require;if (!a && c) return c(s, !0);if (i) return i(s, !0);var p = new Error("Cannot find module '" + s + "'");throw (p.code = "MODULE_NOT_FOUND", p);
        }var u = n[s] = { exports: {} };t[s][0].call(u.exports, function (e) {
          var n = t[s][1][e];return o(n ? n : e);
        }, u, u.exports, e, t, n, r);
      }return n[s].exports;
    }for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);return o;
  })({ 1: [function (t, e, n) {
      function r(t, e) {
        "object" == typeof t && (e = t, t = void 0), e = e || {};var n,
            r = o(t),
            i = r.source,
            p = r.id,
            u = r.path,
            f = c[p] && u in c[p].nsps,
            h = e.forceNew || e["force new connection"] || !1 === e.multiplex || f;return h ? (a("ignoring socket cache for %s", i), n = s(i, e)) : (c[p] || (a("new io instance for %s", i), c[p] = s(i, e)), n = c[p]), n.socket(r.path);
      }var o = t("./url"),
          i = t("socket.io-parser"),
          s = t("./manager"),
          a = t("debug")("socket.io-client");e.exports = n = r;var c = n.managers = {};n.protocol = i.protocol, n.connect = r, n.Manager = t("./manager"), n.Socket = t("./socket");
    }, { "./manager": 2, "./socket": 4, "./url": 5, debug: 14, "socket.io-parser": 40 }], 2: [function (t, e, n) {
      function r(t, e) {
        return this instanceof r ? (t && "object" == typeof t && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new h({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new a.Encoder(), this.decoder = new a.Decoder(), this.autoConnect = e.autoConnect !== !1, void (this.autoConnect && this.open())) : new r(t, e);
      }var o = t("engine.io-client"),
          i = t("./socket"),
          s = t("component-emitter"),
          a = t("socket.io-parser"),
          c = t("./on"),
          p = t("component-bind"),
          u = t("debug")("socket.io-client:manager"),
          f = t("indexof"),
          h = t("backo2"),
          l = Object.prototype.hasOwnProperty;e.exports = r, r.prototype.emitAll = function () {
        this.emit.apply(this, arguments);for (var t in this.nsps) l.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);
      }, r.prototype.updateSocketIds = function () {
        for (var t in this.nsps) l.call(this.nsps, t) && (this.nsps[t].id = this.engine.id);
      }, s(r.prototype), r.prototype.reconnection = function (t) {
        return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
      }, r.prototype.reconnectionAttempts = function (t) {
        return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;
      }, r.prototype.reconnectionDelay = function (t) {
        return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay;
      }, r.prototype.randomizationFactor = function (t) {
        return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor;
      }, r.prototype.reconnectionDelayMax = function (t) {
        return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax;
      }, r.prototype.timeout = function (t) {
        return arguments.length ? (this._timeout = t, this) : this._timeout;
      }, r.prototype.maybeReconnectOnOpen = function () {
        !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
      }, r.prototype.open = r.prototype.connect = function (t) {
        if ((u("readyState %s", this.readyState), ~this.readyState.indexOf("open"))) return this;u("opening %s", this.uri), this.engine = o(this.uri, this.opts);var e = this.engine,
            n = this;this.readyState = "opening", this.skipReconnect = !1;var r = c(e, "open", function () {
          n.onopen(), t && t();
        }),
            i = c(e, "error", function (e) {
          if ((u("connect_error"), n.cleanup(), n.readyState = "closed", n.emitAll("connect_error", e), t)) {
            var r = new Error("Connection error");r.data = e, t(r);
          } else n.maybeReconnectOnOpen();
        });if (!1 !== this._timeout) {
          var s = this._timeout;u("connect attempt will timeout after %d", s);var a = setTimeout(function () {
            u("connect attempt timed out after %d", s), r.destroy(), e.close(), e.emit("error", "timeout"), n.emitAll("connect_timeout", s);
          }, s);this.subs.push({ destroy: function destroy() {
              clearTimeout(a);
            } });
        }return this.subs.push(r), this.subs.push(i), this;
      }, r.prototype.onopen = function () {
        u("open"), this.cleanup(), this.readyState = "open", this.emit("open");var t = this.engine;this.subs.push(c(t, "data", p(this, "ondata"))), this.subs.push(c(t, "ping", p(this, "onping"))), this.subs.push(c(t, "pong", p(this, "onpong"))), this.subs.push(c(t, "error", p(this, "onerror"))), this.subs.push(c(t, "close", p(this, "onclose"))), this.subs.push(c(this.decoder, "decoded", p(this, "ondecoded")));
      }, r.prototype.onping = function () {
        this.lastPing = new Date(), this.emitAll("ping");
      }, r.prototype.onpong = function () {
        this.emitAll("pong", new Date() - this.lastPing);
      }, r.prototype.ondata = function (t) {
        this.decoder.add(t);
      }, r.prototype.ondecoded = function (t) {
        this.emit("packet", t);
      }, r.prototype.onerror = function (t) {
        u("error", t), this.emitAll("error", t);
      }, r.prototype.socket = function (t) {
        function e() {
          ~f(r.connecting, n) || r.connecting.push(n);
        }var n = this.nsps[t];if (!n) {
          n = new i(this, t), this.nsps[t] = n;var r = this;n.on("connecting", e), n.on("connect", function () {
            n.id = r.engine.id;
          }), this.autoConnect && e();
        }return n;
      }, r.prototype.destroy = function (t) {
        var e = f(this.connecting, t);~e && this.connecting.splice(e, 1), this.connecting.length || this.close();
      }, r.prototype.packet = function (t) {
        u("writing packet %j", t);var e = this;e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function (n) {
          for (var r = 0; r < n.length; r++) e.engine.write(n[r], t.options);e.encoding = !1, e.processPacketQueue();
        }));
      }, r.prototype.processPacketQueue = function () {
        if (this.packetBuffer.length > 0 && !this.encoding) {
          var t = this.packetBuffer.shift();this.packet(t);
        }
      }, r.prototype.cleanup = function () {
        u("cleanup");for (var t; t = this.subs.shift();) t.destroy();this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
      }, r.prototype.close = r.prototype.disconnect = function () {
        u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" == this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
      }, r.prototype.onclose = function (t) {
        u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect();
      }, r.prototype.reconnect = function () {
        if (this.reconnecting || this.skipReconnect) return this;var t = this;if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;else {
          var e = this.backoff.duration();u("will wait %dms before reconnect attempt", e), this.reconnecting = !0;var n = setTimeout(function () {
            t.skipReconnect || (u("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function (e) {
              e ? (u("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (u("reconnect success"), t.onreconnect());
            }));
          }, e);this.subs.push({ destroy: function destroy() {
              clearTimeout(n);
            } });
        }
      }, r.prototype.onreconnect = function () {
        var t = this.backoff.attempts;this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);
      };
    }, { "./on": 3, "./socket": 4, backo2: 8, "component-bind": 11, "component-emitter": 12, debug: 14, "engine.io-client": 16, indexof: 32, "socket.io-parser": 40 }], 3: [function (t, e, n) {
      function r(t, e, n) {
        return t.on(e, n), { destroy: function destroy() {
            t.removeListener(e, n);
          } };
      }e.exports = r;
    }, {}], 4: [function (t, e, n) {
      function r(t, e) {
        this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.io.autoConnect && this.open();
      }var o = t("socket.io-parser"),
          i = t("component-emitter"),
          s = t("to-array"),
          a = t("./on"),
          c = t("component-bind"),
          p = t("debug")("socket.io-client:socket"),
          u = t("has-binary");e.exports = n = r;var f = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 },
          h = i.prototype.emit;i(r.prototype), r.prototype.subEvents = function () {
        if (!this.subs) {
          var t = this.io;this.subs = [a(t, "open", c(this, "onopen")), a(t, "packet", c(this, "onpacket")), a(t, "close", c(this, "onclose"))];
        }
      }, r.prototype.open = r.prototype.connect = function () {
        return this.connected ? this : (this.subEvents(), this.io.open(), "open" == this.io.readyState && this.onopen(), this.emit("connecting"), this);
      }, r.prototype.send = function () {
        var t = s(arguments);return t.unshift("message"), this.emit.apply(this, t), this;
      }, r.prototype.emit = function (t) {
        if (f.hasOwnProperty(t)) return h.apply(this, arguments), this;var e = s(arguments),
            n = o.EVENT;u(e) && (n = o.BINARY_EVENT);var r = { type: n, data: e };return r.options = {}, r.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (p("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), delete this.flags, this;
      }, r.prototype.packet = function (t) {
        t.nsp = this.nsp, this.io.packet(t);
      }, r.prototype.onopen = function () {
        p("transport is open - connecting"), "/" != this.nsp && this.packet({ type: o.CONNECT });
      }, r.prototype.onclose = function (t) {
        p("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t);
      }, r.prototype.onpacket = function (t) {
        if (t.nsp == this.nsp) switch (t.type) {case o.CONNECT:
            this.onconnect();break;case o.EVENT:
            this.onevent(t);break;case o.BINARY_EVENT:
            this.onevent(t);break;case o.ACK:
            this.onack(t);break;case o.BINARY_ACK:
            this.onack(t);break;case o.DISCONNECT:
            this.ondisconnect();break;case o.ERROR:
            this.emit("error", t.data);}
      }, r.prototype.onevent = function (t) {
        var e = t.data || [];p("emitting event %j", e), null != t.id && (p("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? h.apply(this, e) : this.receiveBuffer.push(e);
      }, r.prototype.ack = function (t) {
        var e = this,
            n = !1;return function () {
          if (!n) {
            n = !0;var r = s(arguments);p("sending ack %j", r);var i = u(r) ? o.BINARY_ACK : o.ACK;e.packet({ type: i, id: t, data: r });
          }
        };
      }, r.prototype.onack = function (t) {
        var e = this.acks[t.id];"function" == typeof e ? (p("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : p("bad ack %s", t.id);
      }, r.prototype.onconnect = function () {
        this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
      }, r.prototype.emitBuffered = function () {
        var t;for (t = 0; t < this.receiveBuffer.length; t++) h.apply(this, this.receiveBuffer[t]);for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);this.sendBuffer = [];
      }, r.prototype.ondisconnect = function () {
        p("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
      }, r.prototype.destroy = function () {
        if (this.subs) {
          for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();this.subs = null;
        }this.io.destroy(this);
      }, r.prototype.close = r.prototype.disconnect = function () {
        return this.connected && (p("performing disconnect (%s)", this.nsp), this.packet({ type: o.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
      }, r.prototype.compress = function (t) {
        return this.flags = this.flags || {}, this.flags.compress = t, this;
      };
    }, { "./on": 3, "component-bind": 11, "component-emitter": 12, debug: 14, "has-binary": 30, "socket.io-parser": 40, "to-array": 43 }], 5: [function (t, e, n) {
      (function (n) {
        function r(t, e) {
          var r = t,
              e = e || n.location;null == t && (t = e.protocol + "//" + e.host), "string" == typeof t && ("/" == t.charAt(0) && (t = "/" == t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (i("protocol-less url %s", t), t = "undefined" != typeof e ? e.protocol + "//" + t : "https://" + t), i("parse %s", t), r = o(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";var s = -1 !== r.host.indexOf(":"),
              a = s ? "[" + r.host + "]" : r.host;return r.id = r.protocol + "://" + a + ":" + r.port, r.href = r.protocol + "://" + a + (e && e.port == r.port ? "" : ":" + r.port), r;
        }var o = t("parseuri"),
            i = t("debug")("socket.io-client:url");e.exports = r;
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { debug: 14, parseuri: 38 }], 6: [function (t, e, n) {
      function r(t, e, n) {
        function r(t, o) {
          if (r.count <= 0) throw new Error("after called too many times");--r.count, t ? (i = !0, e(t), e = n) : 0 !== r.count || i || e(null, o);
        }var i = !1;return n = n || o, r.count = t, 0 === t ? e() : r;
      }function o() {}e.exports = r;
    }, {}], 7: [function (t, e, n) {
      e.exports = function (t, e, n) {
        var r = t.byteLength;if ((e = e || 0, n = n || r, t.slice)) return t.slice(e, n);if ((0 > e && (e += r), 0 > n && (n += r), n > r && (n = r), e >= r || e >= n || 0 === r)) return new ArrayBuffer(0);for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; n > s; s++, a++) i[a] = o[s];return i.buffer;
      };
    }, {}], 8: [function (t, e, n) {
      function r(t) {
        t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
      }e.exports = r, r.prototype.duration = function () {
        var t = this.ms * Math.pow(this.factor, this.attempts++);if (this.jitter) {
          var e = Math.random(),
              n = Math.floor(e * this.jitter * t);t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;
        }return 0 | Math.min(t, this.max);
      }, r.prototype.reset = function () {
        this.attempts = 0;
      }, r.prototype.setMin = function (t) {
        this.ms = t;
      }, r.prototype.setMax = function (t) {
        this.max = t;
      }, r.prototype.setJitter = function (t) {
        this.jitter = t;
      };
    }, {}], 9: [function (t, e, n) {
      !(function () {
        "use strict";for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = new Uint8Array(256), r = 0; r < t.length; r++) e[t.charCodeAt(r)] = r;n.encode = function (e) {
          var n,
              r = new Uint8Array(e),
              o = r.length,
              i = "";for (n = 0; o > n; n += 3) i += t[r[n] >> 2], i += t[(3 & r[n]) << 4 | r[n + 1] >> 4], i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += t[63 & r[n + 2]];return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i;
        }, n.decode = function (t) {
          var n,
              r,
              o,
              i,
              s,
              a = .75 * t.length,
              c = t.length,
              p = 0;"=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);var u = new ArrayBuffer(a),
              f = new Uint8Array(u);for (n = 0; c > n; n += 4) r = e[t.charCodeAt(n)], o = e[t.charCodeAt(n + 1)], i = e[t.charCodeAt(n + 2)], s = e[t.charCodeAt(n + 3)], f[p++] = r << 2 | o >> 4, f[p++] = (15 & o) << 4 | i >> 2, f[p++] = (3 & i) << 6 | 63 & s;return u;
        };
      })();
    }, {}], 10: [function (t, e, n) {
      (function (t) {
        function n(t) {
          for (var e = 0; e < t.length; e++) {
            var n = t[e];if (n.buffer instanceof ArrayBuffer) {
              var r = n.buffer;if (n.byteLength !== r.byteLength) {
                var o = new Uint8Array(n.byteLength);o.set(new Uint8Array(r, n.byteOffset, n.byteLength)), r = o.buffer;
              }t[e] = r;
            }
          }
        }function r(t, e) {
          e = e || {};var r = new i();n(t);for (var o = 0; o < t.length; o++) r.append(t[o]);return e.type ? r.getBlob(e.type) : r.getBlob();
        }function o(t, e) {
          return n(t), new Blob(t, e || {});
        }var i = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder,
            s = (function () {
          try {
            var t = new Blob(["hi"]);return 2 === t.size;
          } catch (e) {
            return !1;
          }
        })(),
            a = s && (function () {
          try {
            var t = new Blob([new Uint8Array([1, 2])]);return 2 === t.size;
          } catch (e) {
            return !1;
          }
        })(),
            c = i && i.prototype.append && i.prototype.getBlob;e.exports = (function () {
          return s ? a ? t.Blob : o : c ? r : void 0;
        })();
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, {}], 11: [function (t, e, n) {
      var r = [].slice;e.exports = function (t, e) {
        if (("string" == typeof e && (e = t[e]), "function" != typeof e)) throw new Error("bind() requires a function");var n = r.call(arguments, 2);return function () {
          return e.apply(t, n.concat(r.call(arguments)));
        };
      };
    }, {}], 12: [function (t, e, n) {
      function r(t) {
        return t ? o(t) : void 0;
      }function o(t) {
        for (var e in r.prototype) t[e] = r.prototype[e];return t;
      }e.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
      }, r.prototype.once = function (t, e) {
        function n() {
          this.off(t, n), e.apply(this, arguments);
        }return n.fn = e, this.on(t, n), this;
      }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
        if ((this._callbacks = this._callbacks || {}, 0 == arguments.length)) return this._callbacks = {}, this;var n = this._callbacks["$" + t];if (!n) return this;if (1 == arguments.length) return delete this._callbacks["$" + t], this;for (var r, o = 0; o < n.length; o++) if ((r = n[o], r === e || r.fn === e)) {
          n.splice(o, 1);break;
        }return this;
      }, r.prototype.emit = function (t) {
        this._callbacks = this._callbacks || {};var e = [].slice.call(arguments, 1),
            n = this._callbacks["$" + t];if (n) {
          n = n.slice(0);for (var r = 0, o = n.length; o > r; ++r) n[r].apply(this, e);
        }return this;
      }, r.prototype.listeners = function (t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
      }, r.prototype.hasListeners = function (t) {
        return !!this.listeners(t).length;
      };
    }, {}], 13: [function (t, e, n) {
      e.exports = function (t, e) {
        var n = function n() {};n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t;
      };
    }, {}], 14: [function (t, e, n) {
      function r() {
        return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
      }function o() {
        var t = arguments,
            e = this.useColors;if ((t[0] = (e ? "%c" : "") + this.namespace + (e ? " %c" : " ") + t[0] + (e ? "%c " : " ") + "+" + n.humanize(this.diff), !e)) return t;var r = "color: " + this.color;t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1));var o = 0,
            i = 0;return t[0].replace(/%[a-z%]/g, function (t) {
          "%%" !== t && (o++, "%c" === t && (i = o));
        }), t.splice(i, 0, r), t;
      }function i() {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }function s(t) {
        try {
          null == t ? n.storage.removeItem("debug") : n.storage.debug = t;
        } catch (e) {}
      }function a() {
        var t;try {
          t = n.storage.debug;
        } catch (e) {}return t;
      }function c() {
        try {
          return window.localStorage;
        } catch (t) {}
      }n = e.exports = t("./debug"), n.log = i, n.formatArgs = o, n.save = s, n.load = a, n.useColors = r, n.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : c(), n.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], n.formatters.j = function (t) {
        return JSON.stringify(t);
      }, n.enable(a());
    }, { "./debug": 15 }], 15: [function (t, e, n) {
      function r() {
        return n.colors[u++ % n.colors.length];
      }function o(t) {
        function e() {}function o() {
          var t = o,
              e = +new Date(),
              i = e - (p || e);t.diff = i, t.prev = p, t.curr = e, p = e, null == t.useColors && (t.useColors = n.useColors()), null == t.color && t.useColors && (t.color = r());var s = Array.prototype.slice.call(arguments);s[0] = n.coerce(s[0]), "string" != typeof s[0] && (s = ["%o"].concat(s));var a = 0;s[0] = s[0].replace(/%([a-z%])/g, function (e, r) {
            if ("%%" === e) return e;a++;var o = n.formatters[r];if ("function" == typeof o) {
              var i = s[a];e = o.call(t, i), s.splice(a, 1), a--;
            }return e;
          }), "function" == typeof n.formatArgs && (s = n.formatArgs.apply(t, s));var c = o.log || n.log || console.log.bind(console);c.apply(t, s);
        }e.enabled = !1, o.enabled = !0;var i = n.enabled(t) ? o : e;return i.namespace = t, i;
      }function i(t) {
        n.save(t);for (var e = (t || "").split(/[\s,]+/), r = e.length, o = 0; r > o; o++) e[o] && (t = e[o].replace(/\*/g, ".*?"), "-" === t[0] ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")));
      }function s() {
        n.enable("");
      }function a(t) {
        var e, r;for (e = 0, r = n.skips.length; r > e; e++) if (n.skips[e].test(t)) return !1;for (e = 0, r = n.names.length; r > e; e++) if (n.names[e].test(t)) return !0;return !1;
      }function c(t) {
        return t instanceof Error ? t.stack || t.message : t;
      }n = e.exports = o, n.coerce = c, n.disable = s, n.enable = i, n.enabled = a, n.humanize = t("ms"), n.names = [], n.skips = [], n.formatters = {};var p,
          u = 0;
    }, { ms: 35 }], 16: [function (t, e, n) {
      e.exports = t("./lib/");
    }, { "./lib/": 17 }], 17: [function (t, e, n) {
      e.exports = t("./socket"), e.exports.parser = t("engine.io-parser");
    }, { "./socket": 18, "engine.io-parser": 27 }], 18: [function (t, e, n) {
      (function (n) {
        function r(t, e) {
          if (!(this instanceof r)) return new r(t, e);e = e || {}, t && "object" == typeof t && (e = t, t = null), t ? (t = u(t), e.hostname = t.host, e.secure = "https" == t.protocol || "wss" == t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = u(e.host).host), this.secure = null != e.secure ? e.secure : n.location && "https:" == location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || !1, this.hostname = e.hostname || (n.location ? location.hostname : "localhost"), this.port = e.port || (n.location && location.port ? location.port : this.secure ? 443 : 80), this.query = e.query || {}, "string" == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate ? e.perMessageDeflate || {} : !1, !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized ? !0 : e.rejectUnauthorized;var o = "object" == typeof n && n;o.global === o && e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders), this.open();
        }function o(t) {
          var e = {};for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);return e;
        }var i = t("./transports"),
            s = t("component-emitter"),
            a = t("debug")("engine.io-client:socket"),
            c = t("indexof"),
            p = t("engine.io-parser"),
            u = t("parseuri"),
            f = t("parsejson"),
            h = t("parseqs");e.exports = r, r.priorWebsocketSuccess = !1, s(r.prototype), r.protocol = p.protocol, r.Socket = r, r.Transport = t("./transport"), r.transports = t("./transports"), r.parser = t("engine.io-parser"), r.prototype.createTransport = function (t) {
          a('creating transport "%s"', t);var e = o(this.query);e.EIO = p.protocol, e.transport = t, this.id && (e.sid = this.id);var n = new i[t]({ agent: this.agent, hostname: this.hostname, port: this.port, secure: this.secure, path: this.path, query: e, forceJSONP: this.forceJSONP, jsonp: this.jsonp, forceBase64: this.forceBase64, enablesXDR: this.enablesXDR, timestampRequests: this.timestampRequests, timestampParam: this.timestampParam, policyPort: this.policyPort, socket: this, pfx: this.pfx, key: this.key, passphrase: this.passphrase, cert: this.cert, ca: this.ca, ciphers: this.ciphers, rejectUnauthorized: this.rejectUnauthorized, perMessageDeflate: this.perMessageDeflate, extraHeaders: this.extraHeaders });return n;
        }, r.prototype.open = function () {
          var t;if (this.rememberUpgrade && r.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket")) t = "websocket";else {
            if (0 === this.transports.length) {
              var e = this;return void setTimeout(function () {
                e.emit("error", "No transports available");
              }, 0);
            }t = this.transports[0];
          }this.readyState = "opening";try {
            t = this.createTransport(t);
          } catch (n) {
            return this.transports.shift(), void this.open();
          }t.open(), this.setTransport(t);
        }, r.prototype.setTransport = function (t) {
          a("setting transport %s", t.name);var e = this;this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function () {
            e.onDrain();
          }).on("packet", function (t) {
            e.onPacket(t);
          }).on("error", function (t) {
            e.onError(t);
          }).on("close", function () {
            e.onClose("transport close");
          });
        }, r.prototype.probe = function (t) {
          function e() {
            if (h.onlyBinaryUpgrades) {
              var e = !this.supportsBinary && h.transport.supportsBinary;f = f || e;
            }f || (a('probe transport "%s" opened', t), u.send([{ type: "ping", data: "probe" }]), u.once("packet", function (e) {
              if (!f) if ("pong" == e.type && "probe" == e.data) {
                if ((a('probe transport "%s" pong', t), h.upgrading = !0, h.emit("upgrading", u), !u)) return;r.priorWebsocketSuccess = "websocket" == u.name, a('pausing current transport "%s"', h.transport.name), h.transport.pause(function () {
                  f || "closed" != h.readyState && (a("changing transport and sending upgrade packet"), p(), h.setTransport(u), u.send([{ type: "upgrade" }]), h.emit("upgrade", u), u = null, h.upgrading = !1, h.flush());
                });
              } else {
                a('probe transport "%s" failed', t);var n = new Error("probe error");n.transport = u.name, h.emit("upgradeError", n);
              }
            }));
          }function n() {
            f || (f = !0, p(), u.close(), u = null);
          }function o(e) {
            var r = new Error("probe error: " + e);r.transport = u.name, n(), a('probe transport "%s" failed because of error: %s', t, e), h.emit("upgradeError", r);
          }function i() {
            o("transport closed");
          }function s() {
            o("socket closed");
          }function c(t) {
            u && t.name != u.name && (a('"%s" works - aborting "%s"', t.name, u.name), n());
          }function p() {
            u.removeListener("open", e), u.removeListener("error", o), u.removeListener("close", i), h.removeListener("close", s), h.removeListener("upgrading", c);
          }a('probing transport "%s"', t);var u = this.createTransport(t, { probe: 1 }),
              f = !1,
              h = this;r.priorWebsocketSuccess = !1, u.once("open", e), u.once("error", o), u.once("close", i), this.once("close", s), this.once("upgrading", c), u.open();
        }, r.prototype.onOpen = function () {
          if ((a("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" == this.transport.name, this.emit("open"), this.flush(), "open" == this.readyState && this.upgrade && this.transport.pause)) {
            a("starting upgrade probes");for (var t = 0, e = this.upgrades.length; e > t; t++) this.probe(this.upgrades[t]);
          }
        }, r.prototype.onPacket = function (t) {
          if ("opening" == this.readyState || "open" == this.readyState) switch ((a('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type)) {case "open":
              this.onHandshake(f(t.data));break;case "pong":
              this.setPing(), this.emit("pong");break;case "error":
              var e = new Error("server error");e.code = t.data, this.onError(e);break;case "message":
              this.emit("data", t.data), this.emit("message", t.data);} else a('packet received with socket readyState "%s"', this.readyState);
        }, r.prototype.onHandshake = function (t) {
          this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
        }, r.prototype.onHeartbeat = function (t) {
          clearTimeout(this.pingTimeoutTimer);var e = this;e.pingTimeoutTimer = setTimeout(function () {
            "closed" != e.readyState && e.onClose("ping timeout");
          }, t || e.pingInterval + e.pingTimeout);
        }, r.prototype.setPing = function () {
          var t = this;clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function () {
            a("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout);
          }, t.pingInterval);
        }, r.prototype.ping = function () {
          var t = this;this.sendPacket("ping", function () {
            t.emit("ping");
          });
        }, r.prototype.onDrain = function () {
          this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
        }, r.prototype.flush = function () {
          "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
        }, r.prototype.write = r.prototype.send = function (t, e, n) {
          return this.sendPacket("message", t, e, n), this;
        }, r.prototype.sendPacket = function (t, e, n, r) {
          if (("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" != this.readyState && "closed" != this.readyState)) {
            n = n || {}, n.compress = !1 !== n.compress;var o = { type: t, data: e, options: n };this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush();
          }
        }, r.prototype.close = function () {
          function t() {
            r.onClose("forced close"), a("socket closing - telling transport to close"), r.transport.close();
          }function e() {
            r.removeListener("upgrade", e), r.removeListener("upgradeError", e), t();
          }function n() {
            r.once("upgrade", e), r.once("upgradeError", e);
          }if ("opening" == this.readyState || "open" == this.readyState) {
            this.readyState = "closing";var r = this;this.writeBuffer.length ? this.once("drain", function () {
              this.upgrading ? n() : t();
            }) : this.upgrading ? n() : t();
          }return this;
        }, r.prototype.onError = function (t) {
          a("socket error %j", t), r.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t);
        }, r.prototype.onClose = function (t, e) {
          if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
            a('socket close with reason: "%s"', t);var n = this;clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), n.writeBuffer = [], n.prevBufferLen = 0;
          }
        }, r.prototype.filterUpgrades = function (t) {
          for (var e = [], n = 0, r = t.length; r > n; n++) ~c(this.transports, t[n]) && e.push(t[n]);return e;
        };
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { "./transport": 19, "./transports": 20, "component-emitter": 26, debug: 14, "engine.io-parser": 27, indexof: 32, parsejson: 36, parseqs: 37, parseuri: 38 }], 19: [function (t, e, n) {
      function r(t) {
        this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders;
      }var o = t("engine.io-parser"),
          i = t("component-emitter");e.exports = r, i(r.prototype), r.prototype.onError = function (t, e) {
        var n = new Error(t);return n.type = "TransportError", n.description = e, this.emit("error", n), this;
      }, r.prototype.open = function () {
        return "closed" != this.readyState && "" != this.readyState || (this.readyState = "opening", this.doOpen()), this;
      }, r.prototype.close = function () {
        return "opening" != this.readyState && "open" != this.readyState || (this.doClose(), this.onClose()), this;
      }, r.prototype.send = function (t) {
        if ("open" != this.readyState) throw new Error("Transport not open");this.write(t);
      }, r.prototype.onOpen = function () {
        this.readyState = "open", this.writable = !0, this.emit("open");
      }, r.prototype.onData = function (t) {
        var e = o.decodePacket(t, this.socket.binaryType);this.onPacket(e);
      }, r.prototype.onPacket = function (t) {
        this.emit("packet", t);
      }, r.prototype.onClose = function () {
        this.readyState = "closed", this.emit("close");
      };
    }, { "component-emitter": 26, "engine.io-parser": 27 }], 20: [function (t, e, n) {
      (function (e) {
        function r(t) {
          var n,
              r = !1,
              a = !1,
              c = !1 !== t.jsonp;if (e.location) {
            var p = "https:" == location.protocol,
                u = location.port;u || (u = p ? 443 : 80), r = t.hostname != location.hostname || u != t.port, a = t.secure != p;
          }if ((t.xdomain = r, t.xscheme = a, n = new o(t), "open" in n && !t.forceJSONP)) return new i(t);if (!c) throw new Error("JSONP disabled");return new s(t);
        }var o = t("xmlhttprequest-ssl"),
            i = t("./polling-xhr"),
            s = t("./polling-jsonp"),
            a = t("./websocket");n.polling = r, n.websocket = a;
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { "./polling-jsonp": 21, "./polling-xhr": 22, "./websocket": 24, "xmlhttprequest-ssl": 25 }], 21: [function (t, e, n) {
      (function (n) {
        function r() {}function o(t) {
          i.call(this, t), this.query = this.query || {}, a || (n.___eio || (n.___eio = []), a = n.___eio), this.index = a.length;var e = this;a.push(function (t) {
            e.onData(t);
          }), this.query.j = this.index, n.document && n.addEventListener && n.addEventListener("beforeunload", function () {
            e.script && (e.script.onerror = r);
          }, !1);
        }var i = t("./polling"),
            s = t("component-inherit");e.exports = o;var a,
            c = /\n/g,
            p = /\\n/g;s(o, i), o.prototype.supportsBinary = !1, o.prototype.doClose = function () {
          this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), i.prototype.doClose.call(this);
        }, o.prototype.doPoll = function () {
          var t = this,
              e = document.createElement("script");this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function (e) {
            t.onError("jsonp poll error", e);
          };var n = document.getElementsByTagName("script")[0];n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e), this.script = e;var r = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);r && setTimeout(function () {
            var t = document.createElement("iframe");document.body.appendChild(t), document.body.removeChild(t);
          }, 100);
        }, o.prototype.doWrite = function (t, e) {
          function n() {
            r(), e();
          }function r() {
            if (o.iframe) try {
              o.form.removeChild(o.iframe);
            } catch (t) {
              o.onError("jsonp polling iframe removal error", t);
            }try {
              var e = '<iframe src="javascript:0" name="' + o.iframeId + '">';i = document.createElement(e);
            } catch (t) {
              i = document.createElement("iframe"), i.name = o.iframeId, i.src = "javascript:0";
            }i.id = o.iframeId, o.form.appendChild(i), o.iframe = i;
          }var o = this;if (!this.form) {
            var i,
                s = document.createElement("form"),
                a = document.createElement("textarea"),
                u = this.iframeId = "eio_iframe_" + this.index;s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = u, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), a.name = "d", s.appendChild(a), document.body.appendChild(s), this.form = s, this.area = a;
          }this.form.action = this.uri(), r(), t = t.replace(p, "\\\n"), this.area.value = t.replace(c, "\\n");try {
            this.form.submit();
          } catch (f) {}this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
            "complete" == o.iframe.readyState && n();
          } : this.iframe.onload = n;
        };
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { "./polling": 23, "component-inherit": 13 }], 22: [function (t, e, n) {
      (function (n) {
        function r() {}function o(t) {
          if ((c.call(this, t), n.location)) {
            var e = "https:" == location.protocol,
                r = location.port;r || (r = e ? 443 : 80), this.xd = t.hostname != n.location.hostname || r != t.port, this.xs = t.secure != e;
          } else this.extraHeaders = t.extraHeaders;
        }function i(t) {
          this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 != t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create();
        }function s() {
          for (var t in i.requests) i.requests.hasOwnProperty(t) && i.requests[t].abort();
        }var a = t("xmlhttprequest-ssl"),
            c = t("./polling"),
            p = t("component-emitter"),
            u = t("component-inherit"),
            f = t("debug")("engine.io-client:polling-xhr");e.exports = o, e.exports.Request = i, u(o, c), o.prototype.supportsBinary = !0, o.prototype.request = function (t) {
          return t = t || {}, t.uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.extraHeaders = this.extraHeaders, new i(t);
        }, o.prototype.doWrite = function (t, e) {
          var n = "string" != typeof t && void 0 !== t,
              r = this.request({ method: "POST", data: t, isBinary: n }),
              o = this;r.on("success", e), r.on("error", function (t) {
            o.onError("xhr post error", t);
          }), this.sendXhr = r;
        }, o.prototype.doPoll = function () {
          f("xhr poll");var t = this.request(),
              e = this;t.on("data", function (t) {
            e.onData(t);
          }), t.on("error", function (t) {
            e.onError("xhr poll error", t);
          }), this.pollXhr = t;
        }, p(i.prototype), i.prototype.create = function () {
          var t = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;var e = this.xhr = new a(t),
              r = this;try {
            f("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);try {
              if (this.extraHeaders) {
                e.setDisableHeaderCheck(!0);for (var o in this.extraHeaders) this.extraHeaders.hasOwnProperty(o) && e.setRequestHeader(o, this.extraHeaders[o]);
              }
            } catch (s) {}if ((this.supportsBinary && (e.responseType = "arraybuffer"), "POST" == this.method)) try {
              this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (s) {}"withCredentials" in e && (e.withCredentials = !0), this.hasXDR() ? (e.onload = function () {
              r.onLoad();
            }, e.onerror = function () {
              r.onError(e.responseText);
            }) : e.onreadystatechange = function () {
              4 == e.readyState && (200 == e.status || 1223 == e.status ? r.onLoad() : setTimeout(function () {
                r.onError(e.status);
              }, 0));
            }, f("xhr data %s", this.data), e.send(this.data);
          } catch (s) {
            return void setTimeout(function () {
              r.onError(s);
            }, 0);
          }n.document && (this.index = i.requestsCount++, i.requests[this.index] = this);
        }, i.prototype.onSuccess = function () {
          this.emit("success"), this.cleanup();
        }, i.prototype.onData = function (t) {
          this.emit("data", t), this.onSuccess();
        }, i.prototype.onError = function (t) {
          this.emit("error", t), this.cleanup(!0);
        }, i.prototype.cleanup = function (t) {
          if ("undefined" != typeof this.xhr && null !== this.xhr) {
            if ((this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r, t)) try {
              this.xhr.abort();
            } catch (e) {}n.document && delete i.requests[this.index], this.xhr = null;
          }
        }, i.prototype.onLoad = function () {
          var t;try {
            var e;try {
              e = this.xhr.getResponseHeader("Content-Type").split(";")[0];
            } catch (n) {}if ("application/octet-stream" === e) t = this.xhr.response;else if (this.supportsBinary) try {
              t = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
            } catch (n) {
              for (var r = new Uint8Array(this.xhr.response), o = [], i = 0, s = r.length; s > i; i++) o.push(r[i]);t = String.fromCharCode.apply(null, o);
            } else t = this.xhr.responseText;
          } catch (n) {
            this.onError(n);
          }null != t && this.onData(t);
        }, i.prototype.hasXDR = function () {
          return "undefined" != typeof n.XDomainRequest && !this.xs && this.enablesXDR;
        }, i.prototype.abort = function () {
          this.cleanup();
        }, n.document && (i.requestsCount = 0, i.requests = {}, n.attachEvent ? n.attachEvent("onunload", s) : n.addEventListener && n.addEventListener("beforeunload", s, !1));
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { "./polling": 23, "component-emitter": 26, "component-inherit": 13, debug: 14, "xmlhttprequest-ssl": 25 }], 23: [function (t, e, n) {
      function r(t) {
        var e = t && t.forceBase64;u && !e || (this.supportsBinary = !1), o.call(this, t);
      }var o = t("../transport"),
          i = t("parseqs"),
          s = t("engine.io-parser"),
          a = t("component-inherit"),
          c = t("yeast"),
          p = t("debug")("engine.io-client:polling");e.exports = r;var u = (function () {
        var e = t("xmlhttprequest-ssl"),
            n = new e({ xdomain: !1 });return null != n.responseType;
      })();a(r, o), r.prototype.name = "polling", r.prototype.doOpen = function () {
        this.poll();
      }, r.prototype.pause = function (t) {
        function e() {
          p("paused"), n.readyState = "paused", t();
        }var n = this;if ((this.readyState = "pausing", this.polling || !this.writable)) {
          var r = 0;this.polling && (p("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function () {
            p("pre-pause polling complete"), --r || e();
          })), this.writable || (p("we are currently writing - waiting to pause"), r++, this.once("drain", function () {
            p("pre-pause writing complete"), --r || e();
          }));
        } else e();
      }, r.prototype.poll = function () {
        p("polling"), this.polling = !0, this.doPoll(), this.emit("poll");
      }, r.prototype.onData = function (t) {
        var e = this;p("polling got data %s", t);var n = function n(t, _n, r) {
          return "opening" == e.readyState && e.onOpen(), "close" == t.type ? (e.onClose(), !1) : void e.onPacket(t);
        };s.decodePayload(t, this.socket.binaryType, n), "closed" != this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : p('ignoring poll - transport state "%s"', this.readyState));
      }, r.prototype.doClose = function () {
        function t() {
          p("writing close packet"), e.write([{ type: "close" }]);
        }var e = this;"open" == this.readyState ? (p("transport open - closing"), t()) : (p("transport not open - deferring close"), this.once("open", t));
      }, r.prototype.write = function (t) {
        var e = this;this.writable = !1;var n = function n() {
          e.writable = !0, e.emit("drain");
        },
            e = this;s.encodePayload(t, this.supportsBinary, function (t) {
          e.doWrite(t, n);
        });
      }, r.prototype.uri = function () {
        var t = this.query || {},
            e = this.secure ? "https" : "http",
            n = "";!1 !== this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || t.sid || (t.b64 = 1), t = i.encode(t), this.port && ("https" == e && 443 != this.port || "http" == e && 80 != this.port) && (n = ":" + this.port), t.length && (t = "?" + t);var r = -1 !== this.hostname.indexOf(":");return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t;
      };
    }, { "../transport": 19, "component-inherit": 13, debug: 14, "engine.io-parser": 27, parseqs: 37, "xmlhttprequest-ssl": 25, yeast: 45 }], 24: [function (t, e, n) {
      (function (n) {
        function r(t) {
          var e = t && t.forceBase64;e && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, o.call(this, t);
        }var o = t("../transport"),
            i = t("engine.io-parser"),
            s = t("parseqs"),
            a = t("component-inherit"),
            c = t("yeast"),
            p = t("debug")("engine.io-client:websocket"),
            u = n.WebSocket || n.MozWebSocket,
            f = u;if (!f && "undefined" == typeof window) try {
          f = t("ws");
        } catch (h) {}e.exports = r, a(r, o), r.prototype.name = "websocket", r.prototype.supportsBinary = !0, r.prototype.doOpen = function () {
          if (this.check()) {
            var t = this.uri(),
                e = void 0,
                n = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.ws = u ? new f(t) : new f(t, e, n), void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
          }
        }, r.prototype.addEventListeners = function () {
          var t = this;this.ws.onopen = function () {
            t.onOpen();
          }, this.ws.onclose = function () {
            t.onClose();
          }, this.ws.onmessage = function (e) {
            t.onData(e.data);
          }, this.ws.onerror = function (e) {
            t.onError("websocket error", e);
          };
        }, "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (r.prototype.onData = function (t) {
          var e = this;setTimeout(function () {
            o.prototype.onData.call(e, t);
          }, 0);
        }), r.prototype.write = function (t) {
          function e() {
            r.emit("flush"), setTimeout(function () {
              r.writable = !0, r.emit("drain");
            }, 0);
          }var r = this;this.writable = !1;for (var o = t.length, s = 0, a = o; a > s; s++) !(function (t) {
            i.encodePacket(t, r.supportsBinary, function (i) {
              if (!u) {
                var s = {};if ((t.options && (s.compress = t.options.compress), r.perMessageDeflate)) {
                  var a = "string" == typeof i ? n.Buffer.byteLength(i) : i.length;a < r.perMessageDeflate.threshold && (s.compress = !1);
                }
              }try {
                u ? r.ws.send(i) : r.ws.send(i, s);
              } catch (c) {
                p("websocket closed before onclose event");
              }--o || e();
            });
          })(t[s]);
        }, r.prototype.onClose = function () {
          o.prototype.onClose.call(this);
        }, r.prototype.doClose = function () {
          "undefined" != typeof this.ws && this.ws.close();
        }, r.prototype.uri = function () {
          var t = this.query || {},
              e = this.secure ? "wss" : "ws",
              n = "";this.port && ("wss" == e && 443 != this.port || "ws" == e && 80 != this.port) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || (t.b64 = 1), t = s.encode(t), t.length && (t = "?" + t);var r = -1 !== this.hostname.indexOf(":");return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t;
        }, r.prototype.check = function () {
          return !(!f || "__initialize" in f && this.name === r.prototype.name);
        };
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { "../transport": 19, "component-inherit": 13, debug: 14, "engine.io-parser": 27, parseqs: 37, ws: void 0, yeast: 45 }], 25: [function (t, e, n) {
      var r = t("has-cors");e.exports = function (t) {
        var e = t.xdomain,
            n = t.xscheme,
            o = t.enablesXDR;try {
          if ("undefined" != typeof XMLHttpRequest && (!e || r)) return new XMLHttpRequest();
        } catch (i) {}try {
          if ("undefined" != typeof XDomainRequest && !n && o) return new XDomainRequest();
        } catch (i) {}if (!e) try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (i) {}
      };
    }, { "has-cors": 31 }], 26: [function (t, e, n) {
      function r(t) {
        return t ? o(t) : void 0;
      }function o(t) {
        for (var e in r.prototype) t[e] = r.prototype[e];return t;
      }e.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks[t] = this._callbacks[t] || []).push(e), this;
      }, r.prototype.once = function (t, e) {
        function n() {
          r.off(t, n), e.apply(this, arguments);
        }var r = this;return this._callbacks = this._callbacks || {}, n.fn = e, this.on(t, n), this;
      }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
        if ((this._callbacks = this._callbacks || {}, 0 == arguments.length)) return this._callbacks = {}, this;var n = this._callbacks[t];if (!n) return this;if (1 == arguments.length) return delete this._callbacks[t], this;for (var r, o = 0; o < n.length; o++) if ((r = n[o], r === e || r.fn === e)) {
          n.splice(o, 1);break;
        }return this;
      }, r.prototype.emit = function (t) {
        this._callbacks = this._callbacks || {};var e = [].slice.call(arguments, 1),
            n = this._callbacks[t];if (n) {
          n = n.slice(0);for (var r = 0, o = n.length; o > r; ++r) n[r].apply(this, e);
        }return this;
      }, r.prototype.listeners = function (t) {
        return this._callbacks = this._callbacks || {}, this._callbacks[t] || [];
      }, r.prototype.hasListeners = function (t) {
        return !!this.listeners(t).length;
      };
    }, {}], 27: [function (t, e, n) {
      (function (e) {
        function r(t, e) {
          var r = "b" + n.packets[t.type] + t.data.data;return e(r);
        }function o(t, e, r) {
          if (!e) return n.encodeBase64Packet(t, r);var o = t.data,
              i = new Uint8Array(o),
              s = new Uint8Array(1 + o.byteLength);s[0] = m[t.type];for (var a = 0; a < i.length; a++) s[a + 1] = i[a];return r(s.buffer);
        }function i(t, e, r) {
          if (!e) return n.encodeBase64Packet(t, r);var o = new FileReader();return o.onload = function () {
            t.data = o.result, n.encodePacket(t, e, !0, r);
          }, o.readAsArrayBuffer(t.data);
        }function s(t, e, r) {
          if (!e) return n.encodeBase64Packet(t, r);if (g) return i(t, e, r);var o = new Uint8Array(1);o[0] = m[t.type];var s = new w([o.buffer, t.data]);return r(s);
        }function a(t, e, n) {
          for (var r = new Array(t.length), o = h(t.length, n), i = function i(t, n, o) {
            e(n, function (e, n) {
              r[t] = n, o(e, r);
            });
          }, s = 0; s < t.length; s++) i(s, t[s], o);
        }var c = t("./keys"),
            p = t("has-binary"),
            u = t("arraybuffer.slice"),
            f = t("base64-arraybuffer"),
            h = t("after"),
            l = t("utf8"),
            d = navigator.userAgent.match(/Android/i),
            y = /PhantomJS/i.test(navigator.userAgent),
            g = d || y;n.protocol = 3;var m = n.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 },
            b = c(m),
            v = { type: "error", data: "parser error" },
            w = t("blob");n.encodePacket = function (t, n, i, a) {
          "function" == typeof n && (a = n, n = !1), "function" == typeof i && (a = i, i = null);var c = void 0 === t.data ? void 0 : t.data.buffer || t.data;if (e.ArrayBuffer && c instanceof ArrayBuffer) return o(t, n, a);if (w && c instanceof e.Blob) return s(t, n, a);if (c && c.base64) return r(t, a);var p = m[t.type];return void 0 !== t.data && (p += i ? l.encode(String(t.data)) : String(t.data)), a("" + p);
        }, n.encodeBase64Packet = function (t, r) {
          var o = "b" + n.packets[t.type];if (w && t.data instanceof e.Blob) {
            var i = new FileReader();return i.onload = function () {
              var t = i.result.split(",")[1];r(o + t);
            }, i.readAsDataURL(t.data);
          }var s;try {
            s = String.fromCharCode.apply(null, new Uint8Array(t.data));
          } catch (a) {
            for (var c = new Uint8Array(t.data), p = new Array(c.length), u = 0; u < c.length; u++) p[u] = c[u];s = String.fromCharCode.apply(null, p);
          }return o += e.btoa(s), r(o);
        }, n.decodePacket = function (t, e, r) {
          if ("string" == typeof t || void 0 === t) {
            if ("b" == t.charAt(0)) return n.decodeBase64Packet(t.substr(1), e);if (r) try {
              t = l.decode(t);
            } catch (o) {
              return v;
            }var i = t.charAt(0);return Number(i) == i && b[i] ? t.length > 1 ? { type: b[i], data: t.substring(1) } : { type: b[i] } : v;
          }var s = new Uint8Array(t),
              i = s[0],
              a = u(t, 1);return w && "blob" === e && (a = new w([a])), { type: b[i], data: a };
        }, n.decodeBase64Packet = function (t, n) {
          var r = b[t.charAt(0)];if (!e.ArrayBuffer) return { type: r, data: { base64: !0, data: t.substr(1) } };var o = f.decode(t.substr(1));return "blob" === n && w && (o = new w([o])), { type: r, data: o };
        }, n.encodePayload = function (t, e, r) {
          function o(t) {
            return t.length + ":" + t;
          }function i(t, r) {
            n.encodePacket(t, s ? e : !1, !0, function (t) {
              r(null, o(t));
            });
          }"function" == typeof e && (r = e, e = null);var s = p(t);return e && s ? w && !g ? n.encodePayloadAsBlob(t, r) : n.encodePayloadAsArrayBuffer(t, r) : t.length ? void a(t, i, function (t, e) {
            return r(e.join(""));
          }) : r("0:");
        }, n.decodePayload = function (t, e, r) {
          if ("string" != typeof t) return n.decodePayloadAsBinary(t, e, r);"function" == typeof e && (r = e, e = null);var o;if ("" == t) return r(v, 0, 1);for (var i, s, a = "", c = 0, p = t.length; p > c; c++) {
            var u = t.charAt(c);if (":" != u) a += u;else {
              if ("" == a || a != (i = Number(a))) return r(v, 0, 1);if ((s = t.substr(c + 1, i), a != s.length)) return r(v, 0, 1);if (s.length) {
                if ((o = n.decodePacket(s, e, !0), v.type == o.type && v.data == o.data)) return r(v, 0, 1);var f = r(o, c + i, p);if (!1 === f) return;
              }c += i, a = "";
            }
          }return "" != a ? r(v, 0, 1) : void 0;
        }, n.encodePayloadAsArrayBuffer = function (t, e) {
          function r(t, e) {
            n.encodePacket(t, !0, !0, function (t) {
              return e(null, t);
            });
          }return t.length ? void a(t, r, function (t, n) {
            var r = n.reduce(function (t, e) {
              var n;return n = "string" == typeof e ? e.length : e.byteLength, t + n.toString().length + n + 2;
            }, 0),
                o = new Uint8Array(r),
                i = 0;return n.forEach(function (t) {
              var e = "string" == typeof t,
                  n = t;if (e) {
                for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++) r[s] = t.charCodeAt(s);n = r.buffer;
              }e ? o[i++] = 0 : o[i++] = 1;for (var a = n.byteLength.toString(), s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);o[i++] = 255;for (var r = new Uint8Array(n), s = 0; s < r.length; s++) o[i++] = r[s];
            }), e(o.buffer);
          }) : e(new ArrayBuffer(0));
        }, n.encodePayloadAsBlob = function (t, e) {
          function r(t, e) {
            n.encodePacket(t, !0, !0, function (t) {
              var n = new Uint8Array(1);if ((n[0] = 1, "string" == typeof t)) {
                for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);t = r.buffer, n[0] = 0;
              }for (var i = t instanceof ArrayBuffer ? t.byteLength : t.size, s = i.toString(), a = new Uint8Array(s.length + 1), o = 0; o < s.length; o++) a[o] = parseInt(s[o]);if ((a[s.length] = 255, w)) {
                var c = new w([n.buffer, a.buffer, t]);e(null, c);
              }
            });
          }a(t, r, function (t, n) {
            return e(new w(n));
          });
        }, n.decodePayloadAsBinary = function (t, e, r) {
          "function" == typeof e && (r = e, e = null);for (var o = t, i = [], s = !1; o.byteLength > 0;) {
            for (var a = new Uint8Array(o), c = 0 === a[0], p = "", f = 1; 255 != a[f]; f++) {
              if (p.length > 310) {
                s = !0;break;
              }p += a[f];
            }if (s) return r(v, 0, 1);o = u(o, 2 + p.length), p = parseInt(p);var h = u(o, 0, p);if (c) try {
              h = String.fromCharCode.apply(null, new Uint8Array(h));
            } catch (l) {
              var d = new Uint8Array(h);h = "";for (var f = 0; f < d.length; f++) h += String.fromCharCode(d[f]);
            }i.push(h), o = u(o, p);
          }var y = i.length;i.forEach(function (t, o) {
            r(n.decodePacket(t, e, !0), o, y);
          });
        };
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { "./keys": 28, after: 6, "arraybuffer.slice": 7, "base64-arraybuffer": 9, blob: 10, "has-binary": 29, utf8: 44 }], 28: [function (t, e, n) {
      e.exports = Object.keys || function (t) {
        var e = [],
            n = Object.prototype.hasOwnProperty;for (var r in t) n.call(t, r) && e.push(r);return e;
      };
    }, {}], 29: [function (t, e, n) {
      (function (n) {
        function r(t) {
          function e(t) {
            if (!t) return !1;if (n.Buffer && n.Buffer.isBuffer(t) || n.ArrayBuffer && t instanceof ArrayBuffer || n.Blob && t instanceof Blob || n.File && t instanceof File) return !0;if (o(t)) {
              for (var r = 0; r < t.length; r++) if (e(t[r])) return !0;
            } else if (t && "object" == typeof t) {
              t.toJSON && (t = t.toJSON());for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i) && e(t[i])) return !0;
            }return !1;
          }return e(t);
        }var o = t("isarray");e.exports = r;
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { isarray: 33 }], 30: [function (t, e, n) {
      (function (n) {
        function r(t) {
          function e(t) {
            if (!t) return !1;if (n.Buffer && n.Buffer.isBuffer && n.Buffer.isBuffer(t) || n.ArrayBuffer && t instanceof ArrayBuffer || n.Blob && t instanceof Blob || n.File && t instanceof File) return !0;if (o(t)) {
              for (var r = 0; r < t.length; r++) if (e(t[r])) return !0;
            } else if (t && "object" == typeof t) {
              t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON());for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i) && e(t[i])) return !0;
            }return !1;
          }return e(t);
        }var o = t("isarray");e.exports = r;
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { isarray: 33 }], 31: [function (t, e, n) {
      try {
        e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
      } catch (r) {
        e.exports = !1;
      }
    }, {}], 32: [function (t, e, n) {
      var r = [].indexOf;e.exports = function (t, e) {
        if (r) return t.indexOf(e);for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;return -1;
      };
    }, {}], 33: [function (t, e, n) {
      e.exports = Array.isArray || function (t) {
        return "[object Array]" == Object.prototype.toString.call(t);
      };
    }, {}], 34: [function (e, n, r) {
      (function (e) {
        (function () {
          function o(t, e) {
            function n(t) {
              if (n[t] !== g) return n[t];var o;if ("bug-string-char-index" == t) o = "a" != "a"[0];else if ("json" == t) o = n("json-stringify") && n("json-parse");else {
                var s,
                    a = "{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}";if ("json-stringify" == t) {
                  var c = e.stringify,
                      u = "function" == typeof c && v;if (u) {
                    (s = function () {
                      return 1;
                    }).toJSON = s;try {
                      u = "0" === c(0) && "0" === c(new r()) && '""' == c(new i()) && c(b) === g && c(g) === g && c() === g && "1" === c(s) && "[1]" == c([s]) && "[null]" == c([g]) && "null" == c(null) && "[null,null,null]" == c([g, b, null]) && c({ a: [s, !0, !1, null, "\x00\b\n\f\r	"] }) == a && "1" === c(null, s) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new p(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == c(new p(864e13)) && '"-000001-01-01T00:00:00.000Z"' == c(new p(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == c(new p(-1));
                    } catch (f) {
                      u = !1;
                    }
                  }o = u;
                }if ("json-parse" == t) {
                  var h = e.parse;if ("function" == typeof h) try {
                    if (0 === h("0") && !h(!1)) {
                      s = h(a);var l = 5 == s.a.length && 1 === s.a[0];if (l) {
                        try {
                          l = !h('"	"');
                        } catch (f) {}if (l) try {
                          l = 1 !== h("01");
                        } catch (f) {}if (l) try {
                          l = 1 !== h("1.");
                        } catch (f) {}
                      }
                    }
                  } catch (f) {
                    l = !1;
                  }o = l;
                }
              }return n[t] = !!o;
            }t || (t = c.Object()), e || (e = c.Object());var r = t.Number || c.Number,
                i = t.String || c.String,
                a = t.Object || c.Object,
                p = t.Date || c.Date,
                u = t.SyntaxError || c.SyntaxError,
                f = t.TypeError || c.TypeError,
                h = t.Math || c.Math,
                l = t.JSON || c.JSON;"object" == typeof l && l && (e.stringify = l.stringify, e.parse = l.parse);var d,
                y,
                g,
                m = a.prototype,
                b = m.toString,
                v = new p(-0xc782b5b800cec);try {
              v = -109252 == v.getUTCFullYear() && 0 === v.getUTCMonth() && 1 === v.getUTCDate() && 10 == v.getUTCHours() && 37 == v.getUTCMinutes() && 6 == v.getUTCSeconds() && 708 == v.getUTCMilliseconds();
            } catch (w) {}if (!n("json")) {
              var k = "[object Function]",
                  x = "[object Date]",
                  A = "[object Number]",
                  B = "[object String]",
                  C = "[object Array]",
                  S = "[object Boolean]",
                  E = n("bug-string-char-index");if (!v) var _ = h.floor,
                  T = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                  j = function j(t, e) {
                return T[e] + 365 * (t - 1970) + _((t - 1969 + (e = +(e > 1))) / 4) - _((t - 1901 + e) / 100) + _((t - 1601 + e) / 400);
              };if (((d = m.hasOwnProperty) || (d = function (t) {
                var e,
                    n = {};return (n.__proto__ = null, n.__proto__ = { toString: 1 }, n).toString != b ? d = function (t) {
                  var e = this.__proto__,
                      n = (t in (this.__proto__ = null, this));return this.__proto__ = e, n;
                } : (e = n.constructor, d = function (t) {
                  var n = (this.constructor || e).prototype;return t in this && !(t in n && this[t] === n[t]);
                }), n = null, d.call(this, t);
              }), y = function (t, e) {
                var n,
                    r,
                    o,
                    i = 0;(n = function () {
                  this.valueOf = 0;
                }).prototype.valueOf = 0, r = new n();for (o in r) d.call(r, o) && i++;return n = r = null, i ? y = 2 == i ? function (t, e) {
                  var n,
                      r = {},
                      o = b.call(t) == k;for (n in t) o && "prototype" == n || d.call(r, n) || !(r[n] = 1) || !d.call(t, n) || e(n);
                } : function (t, e) {
                  var n,
                      r,
                      o = b.call(t) == k;for (n in t) o && "prototype" == n || !d.call(t, n) || (r = "constructor" === n) || e(n);(r || d.call(t, n = "constructor")) && e(n);
                } : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], y = function (t, e) {
                  var n,
                      o,
                      i = b.call(t) == k,
                      a = !i && "function" != typeof t.constructor && s[typeof t.hasOwnProperty] && t.hasOwnProperty || d;for (n in t) i && "prototype" == n || !a.call(t, n) || e(n);for (o = r.length; n = r[--o]; a.call(t, n) && e(n));
                }), y(t, e);
              }, !n("json-stringify"))) {
                var O = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" },
                    P = "000000",
                    N = function N(t, e) {
                  return (P + (e || 0)).slice(-t);
                },
                    R = "\\u00",
                    D = function D(t) {
                  for (var e = '"', n = 0, r = t.length, o = !E || r > 10, i = o && (E ? t.split("") : t); r > n; n++) {
                    var s = t.charCodeAt(n);switch (s) {case 8:case 9:case 10:case 12:case 13:case 34:case 92:
                        e += O[s];break;default:
                        if (32 > s) {
                          e += R + N(2, s.toString(16));break;
                        }e += o ? i[n] : t.charAt(n);}
                  }return e + '"';
                },
                    U = function U(t, e, n, r, o, i, s) {
                  var a, c, p, u, h, l, m, v, w, k, E, T, O, P, R, q;try {
                    a = e[t];
                  } catch (L) {}if ("object" == typeof a && a) if ((c = b.call(a), c != x || d.call(a, "toJSON"))) "function" == typeof a.toJSON && (c != A && c != B && c != C || d.call(a, "toJSON")) && (a = a.toJSON(t));else if (a > -1 / 0 && 1 / 0 > a) {
                    if (j) {
                      for (h = _(a / 864e5), p = _(h / 365.2425) + 1970 - 1; j(p + 1, 0) <= h; p++);for (u = _((h - j(p, 0)) / 30.42); j(p, u + 1) <= h; u++);h = 1 + h - j(p, u), l = (a % 864e5 + 864e5) % 864e5, m = _(l / 36e5) % 24, v = _(l / 6e4) % 60, w = _(l / 1e3) % 60, k = l % 1e3;
                    } else p = a.getUTCFullYear(), u = a.getUTCMonth(), h = a.getUTCDate(), m = a.getUTCHours(), v = a.getUTCMinutes(), w = a.getUTCSeconds(), k = a.getUTCMilliseconds();a = (0 >= p || p >= 1e4 ? (0 > p ? "-" : "+") + N(6, 0 > p ? -p : p) : N(4, p)) + "-" + N(2, u + 1) + "-" + N(2, h) + "T" + N(2, m) + ":" + N(2, v) + ":" + N(2, w) + "." + N(3, k) + "Z";
                  } else a = null;if ((n && (a = n.call(e, t, a)), null === a)) return "null";if ((c = b.call(a), c == S)) return "" + a;if (c == A) return a > -1 / 0 && 1 / 0 > a ? "" + a : "null";if (c == B) return D("" + a);if ("object" == typeof a) {
                    for (P = s.length; P--;) if (s[P] === a) throw f();if ((s.push(a), E = [], R = i, i += o, c == C)) {
                      for (O = 0, P = a.length; P > O; O++) T = U(O, a, n, r, o, i, s), E.push(T === g ? "null" : T);q = E.length ? o ? "[\n" + i + E.join(",\n" + i) + "\n" + R + "]" : "[" + E.join(",") + "]" : "[]";
                    } else y(r || a, function (t) {
                      var e = U(t, a, n, r, o, i, s);e !== g && E.push(D(t) + ":" + (o ? " " : "") + e);
                    }), q = E.length ? o ? "{\n" + i + E.join(",\n" + i) + "\n" + R + "}" : "{" + E.join(",") + "}" : "{}";return s.pop(), q;
                  }
                };e.stringify = function (t, e, n) {
                  var r, o, i, a;if (s[typeof e] && e) if ((a = b.call(e)) == k) o = e;else if (a == C) {
                    i = {};for (var c, p = 0, u = e.length; u > p; c = e[p++], a = b.call(c), (a == B || a == A) && (i[c] = 1));
                  }if (n) if ((a = b.call(n)) == A) {
                    if ((n -= n % 1) > 0) for (r = "", n > 10 && (n = 10); r.length < n; r += " ");
                  } else a == B && (r = n.length <= 10 ? n : n.slice(0, 10));return U("", (c = {}, c[""] = t, c), o, i, r, "", []);
                };
              }if (!n("json-parse")) {
                var q,
                    L,
                    M = i.fromCharCode,
                    I = { 92: "\\", 34: '"', 47: "/", 98: "\b", 116: "	", 110: "\n", 102: "\f", 114: "\r" },
                    H = function H() {
                  throw (q = L = null, u());
                },
                    z = function z() {
                  for (var t, e, n, r, o, i = L, s = i.length; s > q;) switch (o = i.charCodeAt(q)) {case 9:case 10:case 13:case 32:
                      q++;break;case 123:case 125:case 91:case 93:case 58:case 44:
                      return t = E ? i.charAt(q) : i[q], q++, t;case 34:
                      for (t = "@", q++; s > q;) if ((o = i.charCodeAt(q), 32 > o)) H();else if (92 == o) switch (o = i.charCodeAt(++q)) {case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:
                          t += I[o], q++;break;case 117:
                          for (e = ++q, n = q + 4; n > q; q++) o = i.charCodeAt(q), o >= 48 && 57 >= o || o >= 97 && 102 >= o || o >= 65 && 70 >= o || H();t += M("0x" + i.slice(e, q));break;default:
                          H();} else {
                        if (34 == o) break;for (o = i.charCodeAt(q), e = q; o >= 32 && 92 != o && 34 != o;) o = i.charCodeAt(++q);t += i.slice(e, q);
                      }if (34 == i.charCodeAt(q)) return q++, t;H();default:
                      if ((e = q, 45 == o && (r = !0, o = i.charCodeAt(++q)), o >= 48 && 57 >= o)) {
                        for (48 == o && (o = i.charCodeAt(q + 1), o >= 48 && 57 >= o) && H(), r = !1; s > q && (o = i.charCodeAt(q), o >= 48 && 57 >= o); q++);if (46 == i.charCodeAt(q)) {
                          for (n = ++q; s > n && (o = i.charCodeAt(n), o >= 48 && 57 >= o); n++);n == q && H(), q = n;
                        }if ((o = i.charCodeAt(q), 101 == o || 69 == o)) {
                          for (o = i.charCodeAt(++q), 43 != o && 45 != o || q++, n = q; s > n && (o = i.charCodeAt(n), o >= 48 && 57 >= o); n++);n == q && H(), q = n;
                        }return +i.slice(e, q);
                      }if ((r && H(), "true" == i.slice(q, q + 4))) return q += 4, !0;if ("false" == i.slice(q, q + 5)) return q += 5, !1;if ("null" == i.slice(q, q + 4)) return q += 4, null;H();}return "$";
                },
                    J = function J(t) {
                  var e, n;if (("$" == t && H(), "string" == typeof t)) {
                    if ("@" == (E ? t.charAt(0) : t[0])) return t.slice(1);if ("[" == t) {
                      for (e = []; t = z(), "]" != t; n || (n = !0)) n && ("," == t ? (t = z(), "]" == t && H()) : H()), "," == t && H(), e.push(J(t));return e;
                    }if ("{" == t) {
                      for (e = {}; t = z(), "}" != t; n || (n = !0)) n && ("," == t ? (t = z(), "}" == t && H()) : H()), "," != t && "string" == typeof t && "@" == (E ? t.charAt(0) : t[0]) && ":" == z() || H(), e[t.slice(1)] = J(z());return e;
                    }H();
                  }return t;
                },
                    X = function X(t, e, n) {
                  var r = F(t, e, n);r === g ? delete t[e] : t[e] = r;
                },
                    F = function F(t, e, n) {
                  var r,
                      o = t[e];if ("object" == typeof o && o) if (b.call(o) == C) for (r = o.length; r--;) X(o, r, n);else y(o, function (t) {
                    X(o, t, n);
                  });return n.call(t, e, o);
                };e.parse = function (t, e) {
                  var n, r;return q = 0, L = "" + t, n = J(z()), "$" != z() && H(), q = L = null, e && b.call(e) == k ? F((r = {}, r[""] = n, r), "", e) : n;
                };
              }
            }return e.runInContext = o, e;
          }var i = "function" == typeof t && t.amd,
              s = { "function": !0, object: !0 },
              a = s[typeof r] && r && !r.nodeType && r,
              c = s[typeof window] && window || this,
              p = a && s[typeof n] && n && !n.nodeType && "object" == typeof e && e;if ((!p || p.global !== p && p.window !== p && p.self !== p || (c = p), a && !i)) o(c, a);else {
            var u = c.JSON,
                f = c.JSON3,
                h = !1,
                l = o(c, c.JSON3 = { noConflict: function noConflict() {
                return h || (h = !0, c.JSON = u, c.JSON3 = f, u = f = null), l;
              } });c.JSON = { parse: l.parse, stringify: l.stringify };
          }i && t(function () {
            return l;
          });
        }).call(this);
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, {}], 35: [function (t, e, n) {
      function r(t) {
        if ((t = "" + t, !(t.length > 1e4))) {
          var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if (e) {
            var n = parseFloat(e[1]),
                r = (e[2] || "ms").toLowerCase();switch (r) {case "years":case "year":case "yrs":case "yr":case "y":
                return n * f;case "days":case "day":case "d":
                return n * u;case "hours":case "hour":case "hrs":case "hr":case "h":
                return n * p;case "minutes":case "minute":case "mins":case "min":case "m":
                return n * c;case "seconds":case "second":case "secs":case "sec":case "s":
                return n * a;case "milliseconds":case "millisecond":case "msecs":case "msec":case "ms":
                return n;}
          }
        }
      }function o(t) {
        return t >= u ? Math.round(t / u) + "d" : t >= p ? Math.round(t / p) + "h" : t >= c ? Math.round(t / c) + "m" : t >= a ? Math.round(t / a) + "s" : t + "ms";
      }function i(t) {
        return s(t, u, "day") || s(t, p, "hour") || s(t, c, "minute") || s(t, a, "second") || t + " ms";
      }function s(t, e, n) {
        return e > t ? void 0 : 1.5 * e > t ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s";
      }var a = 1e3,
          c = 60 * a,
          p = 60 * c,
          u = 24 * p,
          f = 365.25 * u;e.exports = function (t, e) {
        return e = e || {}, "string" == typeof t ? r(t) : e["long"] ? i(t) : o(t);
      };
    }, {}], 36: [function (t, e, n) {
      (function (t) {
        var n = /^[\],:{}\s]*$/,
            r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            i = /(?:^|:|,)(?:\s*\[)+/g,
            s = /^\s+/,
            a = /\s+$/;e.exports = function (e) {
          return "string" == typeof e && e ? (e = e.replace(s, "").replace(a, ""), t.JSON && JSON.parse ? JSON.parse(e) : n.test(e.replace(r, "@").replace(o, "]").replace(i, "")) ? new Function("return " + e)() : void 0) : null;
        };
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, {}], 37: [function (t, e, n) {
      n.encode = function (t) {
        var e = "";for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));return e;
      }, n.decode = function (t) {
        for (var e = {}, n = t.split("&"), r = 0, o = n.length; o > r; r++) {
          var i = n[r].split("=");e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
        }return e;
      };
    }, {}], 38: [function (t, e, n) {
      var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
          o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];e.exports = function (t) {
        var e = t,
            n = t.indexOf("["),
            i = t.indexOf("]");-1 != n && -1 != i && (t = t.substring(0, n) + t.substring(n, i).replace(/:/g, ";") + t.substring(i, t.length));for (var s = r.exec(t || ""), a = {}, c = 14; c--;) a[o[c]] = s[c] || "";return -1 != n && -1 != i && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a;
      };
    }, {}], 39: [function (t, e, n) {
      (function (e) {
        var r = t("isarray"),
            o = t("./is-buffer");n.deconstructPacket = function (t) {
          function e(t) {
            if (!t) return t;if (o(t)) {
              var i = { _placeholder: !0, num: n.length };return n.push(t), i;
            }if (r(t)) {
              for (var s = new Array(t.length), a = 0; a < t.length; a++) s[a] = e(t[a]);return s;
            }if ("object" == typeof t && !(t instanceof Date)) {
              var s = {};for (var c in t) s[c] = e(t[c]);return s;
            }return t;
          }var n = [],
              i = t.data,
              s = t;return s.data = e(i), s.attachments = n.length, { packet: s, buffers: n };
        }, n.reconstructPacket = function (t, e) {
          function n(t) {
            if (t && t._placeholder) {
              var o = e[t.num];return o;
            }if (r(t)) {
              for (var i = 0; i < t.length; i++) t[i] = n(t[i]);return t;
            }if (t && "object" == typeof t) {
              for (var s in t) t[s] = n(t[s]);return t;
            }return t;
          }return t.data = n(t.data), t.attachments = void 0, t;
        }, n.removeBlobs = function (t, n) {
          function i(t, c, p) {
            if (!t) return t;if (e.Blob && t instanceof Blob || e.File && t instanceof File) {
              s++;var u = new FileReader();u.onload = function () {
                p ? p[c] = this.result : a = this.result, --s || n(a);
              }, u.readAsArrayBuffer(t);
            } else if (r(t)) for (var f = 0; f < t.length; f++) i(t[f], f, t);else if (t && "object" == typeof t && !o(t)) for (var h in t) i(t[h], h, t);
          }var s = 0,
              a = t;i(a), s || n(a);
        };
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, { "./is-buffer": 41, isarray: 33 }], 40: [function (t, e, n) {
      function r() {}function o(t) {
        var e = "",
            r = !1;return e += t.type, n.BINARY_EVENT != t.type && n.BINARY_ACK != t.type || (e += t.attachments, e += "-"), t.nsp && "/" != t.nsp && (r = !0, e += t.nsp), null != t.id && (r && (e += ",", r = !1), e += t.id), null != t.data && (r && (e += ","), e += f.stringify(t.data)), u("encoded %j as %s", t, e), e;
      }function i(t, e) {
        function n(t) {
          var n = l.deconstructPacket(t),
              r = o(n.packet),
              i = n.buffers;i.unshift(r), e(i);
        }l.removeBlobs(t, n);
      }function s() {
        this.reconstructor = null;
      }function a(t) {
        var e = {},
            r = 0;
        if ((e.type = Number(t.charAt(0)), null == n.types[e.type])) return p();if (n.BINARY_EVENT == e.type || n.BINARY_ACK == e.type) {
          for (var o = ""; "-" != t.charAt(++r) && (o += t.charAt(r), r != t.length););if (o != Number(o) || "-" != t.charAt(r)) throw new Error("Illegal attachments");e.attachments = Number(o);
        }if ("/" == t.charAt(r + 1)) for (e.nsp = ""; ++r;) {
          var i = t.charAt(r);if ("," == i) break;if ((e.nsp += i, r == t.length)) break;
        } else e.nsp = "/";var s = t.charAt(r + 1);if ("" !== s && Number(s) == s) {
          for (e.id = ""; ++r;) {
            var i = t.charAt(r);if (null == i || Number(i) != i) {
              --r;break;
            }if ((e.id += t.charAt(r), r == t.length)) break;
          }e.id = Number(e.id);
        }if (t.charAt(++r)) try {
          e.data = f.parse(t.substr(r));
        } catch (a) {
          return p();
        }return u("decoded %s as %j", t, e), e;
      }function c(t) {
        this.reconPack = t, this.buffers = [];
      }function p(t) {
        return { type: n.ERROR, data: "parser error" };
      }var u = t("debug")("socket.io-parser"),
          f = t("json3"),
          h = (t("isarray"), t("component-emitter")),
          l = t("./binary"),
          d = t("./is-buffer");n.protocol = 4, n.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], n.CONNECT = 0, n.DISCONNECT = 1, n.EVENT = 2, n.ACK = 3, n.ERROR = 4, n.BINARY_EVENT = 5, n.BINARY_ACK = 6, n.Encoder = r, n.Decoder = s, r.prototype.encode = function (t, e) {
        if ((u("encoding packet %j", t), n.BINARY_EVENT == t.type || n.BINARY_ACK == t.type)) i(t, e);else {
          var r = o(t);e([r]);
        }
      }, h(s.prototype), s.prototype.add = function (t) {
        var e;if ("string" == typeof t) e = a(t), n.BINARY_EVENT == e.type || n.BINARY_ACK == e.type ? (this.reconstructor = new c(e), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", e)) : this.emit("decoded", e);else {
          if (!d(t) && !t.base64) throw new Error("Unknown type: " + t);if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");e = this.reconstructor.takeBinaryData(t), e && (this.reconstructor = null, this.emit("decoded", e));
        }
      }, s.prototype.destroy = function () {
        this.reconstructor && this.reconstructor.finishedReconstruction();
      }, c.prototype.takeBinaryData = function (t) {
        if ((this.buffers.push(t), this.buffers.length == this.reconPack.attachments)) {
          var e = l.reconstructPacket(this.reconPack, this.buffers);return this.finishedReconstruction(), e;
        }return null;
      }, c.prototype.finishedReconstruction = function () {
        this.reconPack = null, this.buffers = [];
      };
    }, { "./binary": 39, "./is-buffer": 41, "component-emitter": 42, debug: 14, isarray: 33, json3: 34 }], 41: [function (t, e, n) {
      (function (t) {
        function n(e) {
          return t.Buffer && t.Buffer.isBuffer(e) || t.ArrayBuffer && e instanceof ArrayBuffer;
        }e.exports = n;
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, {}], 42: [function (t, e, n) {
      arguments[4][26][0].apply(n, arguments);
    }, { dup: 26 }], 43: [function (t, e, n) {
      function r(t, e) {
        var n = [];e = e || 0;for (var r = e || 0; r < t.length; r++) n[r - e] = t[r];return n;
      }e.exports = r;
    }, {}], 44: [function (e, n, r) {
      (function (e) {
        !(function (o) {
          function i(t) {
            for (var e, n, r = [], o = 0, i = t.length; i > o;) e = t.charCodeAt(o++), e >= 55296 && 56319 >= e && i > o ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--)) : r.push(e);return r;
          }function s(t) {
            for (var e, n = t.length, r = -1, o = ""; ++r < n;) e = t[r], e > 65535 && (e -= 65536, o += w(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += w(e);return o;
          }function a(t) {
            if (t >= 55296 && 57343 >= t) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
          }function c(t, e) {
            return w(t >> e & 63 | 128);
          }function p(t) {
            if (0 == (4294967168 & t)) return w(t);var e = "";return 0 == (4294965248 & t) ? e = w(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (a(t), e = w(t >> 12 & 15 | 224), e += c(t, 6)) : 0 == (4292870144 & t) && (e = w(t >> 18 & 7 | 240), e += c(t, 12), e += c(t, 6)), e += w(63 & t | 128);
          }function u(t) {
            for (var e, n = i(t), r = n.length, o = -1, s = ""; ++o < r;) e = n[o], s += p(e);return s;
          }function f() {
            if (v >= b) throw Error("Invalid byte index");var t = 255 & m[v];if ((v++, 128 == (192 & t))) return 63 & t;throw Error("Invalid continuation byte");
          }function h() {
            var t, e, n, r, o;if (v > b) throw Error("Invalid byte index");if (v == b) return !1;if ((t = 255 & m[v], v++, 0 == (128 & t))) return t;if (192 == (224 & t)) {
              var e = f();if ((o = (31 & t) << 6 | e, o >= 128)) return o;throw Error("Invalid continuation byte");
            }if (224 == (240 & t)) {
              if ((e = f(), n = f(), o = (15 & t) << 12 | e << 6 | n, o >= 2048)) return a(o), o;throw Error("Invalid continuation byte");
            }if (240 == (248 & t) && (e = f(), n = f(), r = f(), o = (15 & t) << 18 | e << 12 | n << 6 | r, o >= 65536 && 1114111 >= o)) return o;throw Error("Invalid UTF-8 detected");
          }function l(t) {
            m = i(t), b = m.length, v = 0;for (var e, n = []; (e = h()) !== !1;) n.push(e);return s(n);
          }var d = "object" == typeof r && r,
              y = "object" == typeof n && n && n.exports == d && n,
              g = "object" == typeof e && e;g.global !== g && g.window !== g || (o = g);var m,
              b,
              v,
              w = String.fromCharCode,
              k = { version: "2.0.0", encode: u, decode: l };if ("function" == typeof t && "object" == typeof t.amd && t.amd) t(function () {
            return k;
          });else if (d && !d.nodeType) if (y) y.exports = k;else {
            var x = {},
                A = x.hasOwnProperty;for (var B in k) A.call(k, B) && (d[B] = k[B]);
          } else o.utf8 = k;
        })(this);
      }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
    }, {}], 45: [function (t, e, n) {
      "use strict";function r(t) {
        var e = "";do e = a[t % c] + e, t = Math.floor(t / c); while (t > 0);return e;
      }function o(t) {
        var e = 0;for (f = 0; f < t.length; f++) e = e * c + p[t.charAt(f)];return e;
      }function i() {
        var t = r(+new Date());return t !== s ? (u = 0, s = t) : t + "." + r(u++);
      }for (var s, a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), c = 64, p = {}, u = 0, f = 0; c > f; f++) p[a[f]] = f;i.encode = r, i.decode = o, e.exports = i;
    }, {}] }, {}, [1])(1);
});



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);

//# sourceMappingURL=app.js.map
