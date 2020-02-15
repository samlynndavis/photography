// Scroll to top
$(document).ready(function () {
    $('#top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500, 'linear');
    });
});

<<<<<<< HEAD
// Custom cursor
=======
Custom cursor
>>>>>>> a454b9582b957ed98b7ec4adcd456ae58573e5d1
document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const ball = document.querySelector('div.ball')

    ball.style.left = mouseX + "px"
    ball.style.top = mouseY + "px"
})

// micromodal.js initializer
MicroModal.init({
    disableScroll: false,
    awaitCloseAnimation: false
});


/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="throttle"`
 */
; (function () {
    function t() { } function e(t) { return null == t ? t === l ? d : y : I && I in Object(t) ? n(t) : r(t) } function n(t) { var e = $.call(t, I), n = t[I]; try { t[I] = l; var r = true } catch (t) { } var o = _.call(t); return r && (e ? t[I] = n : delete t[I]), o } function r(t) { return _.call(t) } function o(t, e, n) {
        function r(e) { var n = d, r = g; return d = g = l, x = e, v = t.apply(r, n) } function o(t) { return x = t, O = setTimeout(c, e), T ? r(t) : v } function i(t) { var n = t - h, r = t - x, o = e - n; return w ? k(o, j - r) : o } function f(t) { var n = t - h, r = t - x; return h === l || n >= e || n < 0 || w && r >= j } function c() {
            var t = D(); return f(t) ? p(t) : (O = setTimeout(c, i(t)), l)
        } function p(t) { return O = l, S && d ? r(t) : (d = g = l, v) } function s() { O !== l && clearTimeout(O), x = 0, d = h = g = O = l } function y() { return O === l ? v : p(D()) } function m() { var t = D(), n = f(t); if (d = arguments, g = this, h = t, n) { if (O === l) return o(h); if (w) return O = setTimeout(c, e), r(h) } return O === l && (O = setTimeout(c, e)), v } var d, g, j, v, O, h, x = 0, T = false, w = false, S = true; if (typeof t != "function") throw new TypeError(b); return e = a(e) || 0, u(n) && (T = !!n.leading, w = "maxWait" in n, j = w ? M(a(n.maxWait) || 0, e) : j, S = "trailing" in n ? !!n.trailing : S),
            m.cancel = s, m.flush = y, m
    } function i(t, e, n) { var r = true, i = true; if (typeof t != "function") throw new TypeError(b); return u(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), o(t, e, { leading: r, maxWait: e, trailing: i }) } function u(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) } function f(t) { return null != t && typeof t == "object" } function c(t) { return typeof t == "symbol" || f(t) && e(t) == m } function a(t) {
        if (typeof t == "number") return t; if (c(t)) return s; if (u(t)) {
            var e = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = u(e) ? e + "" : e
        } if (typeof t != "string") return 0 === t ? t : +t; t = t.replace(g, ""); var n = v.test(t); return n || O.test(t) ? h(t.slice(2), n ? 2 : 8) : j.test(t) ? s : +t
    } var l, p = "4.17.5", b = "Expected a function", s = NaN, y = "[object Null]", m = "[object Symbol]", d = "[object Undefined]", g = /^\s+|\s+$/g, j = /^[-+]0x[0-9a-f]+$/i, v = /^0b[01]+$/i, O = /^0o[0-7]+$/i, h = parseInt, x = typeof global == "object" && global && global.Object === Object && global, T = typeof self == "object" && self && self.Object === Object && self, w = x || T || Function("return this")(), S = typeof exports == "object" && exports && !exports.nodeType && exports, N = S && typeof module == "object" && module && !module.nodeType && module, E = Object.prototype, $ = E.hasOwnProperty, _ = E.toString, W = w.Symbol, I = W ? W.toStringTag : l, M = Math.max, k = Math.min, D = function () {
        return w.Date.now()
    }; t.debounce = o, t.throttle = i, t.isObject = u, t.isObjectLike = f, t.isSymbol = c, t.now = D, t.toNumber = a, t.VERSION = p, typeof define == "function" && typeof define.amd == "object" && define.amd ? (w._ = t, define(function () { return t })) : N ? ((N.exports = t)._ = t, S._ = t) : w._ = t
}).call(this);


// This function will run a throttled script every 300 ms
var checkFooter = _.throttle(() => {
    // Run JavaScript stuff here
    console.log('checkFooter');

    // Detect scroll position
    let scrollPosition = Math.round(window.scrollY);

    // If we've scrolled 100px, add "visible" class to the header
    if (scrollPosition > 500) {
        document.querySelector('.footer').classList.add('visible');
    }
    // If not, remove "sticky" class from header
    else {
        document.querySelector('.footer').classList.remove('visible');
    }
}, 300);

// Run the checkHeader function every time you scroll
window.addEventListener('scroll', checkFooter);

// Image preloader

function preloader() {
    if (document.images) {
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        var img4 = new Image();
        var img5 = new Image();
        var img6 = new Image();
        var img7 = new Image();
        var img8 = new Image();
        var img9 = new Image();
        var img10 = new Image();
        var img11 = new Image();
        var img12 = new Image();
        var img13 = new Image();
        var img14 = new Image();
        var img15 = new Image();

        img1.src = "https://smdvs.com/samlynndavis/img/1.jpg";
        img2.src = "https://smdvs.com/samlynndavis/img/2.jpg";
        img3.src = "https://smdvs.com/samlynndavis/img/3.jpg";
        img4.src = "https://smdvs.com/samlynndavis/img/4.jpg";
        img5.src = "https://smdvs.com/samlynndavis/img/5.jpg";
        img6.src = "https://smdvs.com/samlynndavis/img/6.jpg";
        img7.src = "https://smdvs.com/samlynndavis/img/7.jpg";
        img8.src = "https://smdvs.com/samlynndavis/img/8.jpg";
        img9.src = "https://smdvs.com/samlynndavis/img/9.jpg";
        img10.src = "https://smdvs.com/samlynndavis/img/10.jpg";
        img11.src = "https://smdvs.com/samlynndavis/img/11.jpg";
        img12.src = "https://smdvs.com/samlynndavis/img/12.jpg";
        img13.src = "https://smdvs.com/samlynndavis/img/13.png";
        img14.src = "https://smdvs.com/samlynndavis/img/14.png";
        img15.src = "https://smdvs.com/samlynndavis/img/15.jpg";

    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(preloader);

