"use strict";
(self.webpackChunkmain = self.webpackChunkmain || []).push([
    [5546], {
        6035: (Rc, Vn, Mt) => {
            Mt.d(Vn, {
                c: () => Ag
            });
            var xe = {
                    version: "0.18.5"
                },
                gr = 1200,
                qr = 1252,
                fn = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4],
                Sa = {
                    0: 1252,
                    1: 65001,
                    2: 65001,
                    77: 1e4,
                    128: 932,
                    129: 949,
                    130: 1361,
                    134: 936,
                    136: 950,
                    161: 1253,
                    162: 1254,
                    163: 1258,
                    177: 1255,
                    178: 1256,
                    186: 1257,
                    204: 1251,
                    222: 874,
                    238: 1250,
                    255: 1252,
                    69: 6969
                },
                sa = function(e) {
                    -1 != fn.indexOf(e) && (qr = Sa[0] = e)
                },
                br = function(e) {
                    gr = e, sa(e)
                };
            var ke, Ht = function(t) {
                    return String.fromCharCode(t)
                },
                Qe = function(t) {
                    return String.fromCharCode(t)
                },
                Fe = null,
                je = !0,
                Tt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

            function Fa(e) {
                for (var t = "", r = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0, o = 0; o < e.length;) i = (r = e.charCodeAt(o++)) >> 2, s = (3 & r) << 4 | (a = e.charCodeAt(o++)) >> 4, f = (15 & a) << 2 | (n = e.charCodeAt(o++)) >> 6, c = 63 & n, isNaN(a) ? f = c = 64 : isNaN(n) && (c = 64), t += Tt.charAt(i) + Tt.charAt(s) + Tt.charAt(f) + Tt.charAt(c);
                return t
            }

            function Lr(e) {
                var t = "",
                    i = 0,
                    s = 0,
                    f = 0,
                    c = 0;
                e = e.replace(/[^\w\+\/\=]/g, "");
                for (var o = 0; o < e.length;) i = Tt.indexOf(e.charAt(o++)), s = Tt.indexOf(e.charAt(o++)), t += String.fromCharCode(i << 2 | s >> 4), 64 !== (f = Tt.indexOf(e.charAt(o++))) && (t += String.fromCharCode((15 & s) << 4 | f >> 2)), 64 !== (c = Tt.indexOf(e.charAt(o++))) && (t += String.fromCharCode((3 & f) << 6 | c));
                return t
            }
            var Ae = function() {
                    return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node
                }(),
                xt = function() {
                    if (typeof Buffer < "u") {
                        var e = !Buffer.from;
                        if (!e) try {
                            Buffer.from("foo", "utf8")
                        } catch {
                            e = !0
                        }
                        return e ? function(t, r) {
                            return r ? new Buffer(t, r) : new Buffer(t)
                        } : Buffer.from.bind(Buffer)
                    }
                    return function() {}
                }();

            function St(e) {
                return Ae ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e)
            }

            function oi(e) {
                return Ae ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e)
            }
            var Br = function(t) {
                return Ae ? xt(t, "binary") : t.split("").map(function(r) {
                    return 255 & r.charCodeAt(0)
                })
            };

            function ya(e) {
                if (typeof ArrayBuffer > "u") return Br(e);
                for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), a = 0; a != e.length; ++a) r[a] = 255 & e.charCodeAt(a);
                return t
            }

            function Ft(e) {
                if (Array.isArray(e)) return e.map(function(a) {
                    return String.fromCharCode(a)
                }).join("");
                for (var t = [], r = 0; r < e.length; ++r) t[r] = String.fromCharCode(e[r]);
                return t.join("")
            }
            var lr = Ae ? function(e) {
                    return Buffer.concat(e.map(function(t) {
                        return Buffer.isBuffer(t) ? t : xt(t)
                    }))
                } : function(e) {
                    if (typeof Uint8Array < "u") {
                        var t = 0,
                            r = 0;
                        for (t = 0; t < e.length; ++t) r += e[t].length;
                        var a = new Uint8Array(r),
                            n = 0;
                        for (t = 0, r = 0; t < e.length; r += n, ++t)
                            if (n = e[t].length, e[t] instanceof Uint8Array) a.set(e[t], r);
                            else {
                                if ("string" == typeof e[t]) throw "wtf";
                                a.set(new Uint8Array(e[t]), r)
                            }
                        return a
                    }
                    return [].concat.apply([], e.map(function(i) {
                        return Array.isArray(i) ? i : [].slice.call(i)
                    }))
                },
                _r = /\u0000/g,
                Aa = /[\u0001-\u0006]/g;

            function ca(e) {
                for (var t = "", r = e.length - 1; r >= 0;) t += e.charAt(r--);
                return t
            }

            function Qr(e, t) {
                var r = "" + e;
                return r.length >= t ? r : Ye("0", t - r.length) + r
            }

            function $n(e, t) {
                var r = "" + e;
                return r.length >= t ? r : Ye(" ", t - r.length) + r
            }

            function on(e, t) {
                var r = "" + e;
                return r.length >= t ? r : r + Ye(" ", t - r.length)
            }
            var li = Math.pow(2, 32);

            function oa(e, t) {
                return e > li || e < -li ? function Pc(e, t) {
                    var r = "" + Math.round(e);
                    return r.length >= t ? r : Ye("0", t - r.length) + r
                }(e, t) : function Lc(e, t) {
                    var r = "" + e;
                    return r.length >= t ? r : Ye("0", t - r.length) + r
                }(Math.round(e), t)
            }

            function ln(e, t) {
                return e.length >= 7 + (t = t || 0) && 103 == (32 | e.charCodeAt(t)) && 101 == (32 | e.charCodeAt(t + 1)) && 110 == (32 | e.charCodeAt(t + 2)) && 101 == (32 | e.charCodeAt(t + 3)) && 114 == (32 | e.charCodeAt(t + 4)) && 97 == (32 | e.charCodeAt(t + 5)) && 108 == (32 | e.charCodeAt(t + 6))
            }
            var ui = [
                    ["Sun", "Sunday"],
                    ["Mon", "Monday"],
                    ["Tue", "Tuesday"],
                    ["Wed", "Wednesday"],
                    ["Thu", "Thursday"],
                    ["Fri", "Friday"],
                    ["Sat", "Saturday"]
                ],
                jn = [
                    ["J", "Jan", "January"],
                    ["F", "Feb", "February"],
                    ["M", "Mar", "March"],
                    ["A", "Apr", "April"],
                    ["M", "May", "May"],
                    ["J", "Jun", "June"],
                    ["J", "Jul", "July"],
                    ["A", "Aug", "August"],
                    ["S", "Sep", "September"],
                    ["O", "Oct", "October"],
                    ["N", "Nov", "November"],
                    ["D", "Dec", "December"]
                ],
                pe = {
                    0: "General",
                    1: "0",
                    2: "0.00",
                    3: "#,##0",
                    4: "#,##0.00",
                    9: "0%",
                    10: "0.00%",
                    11: "0.00E+00",
                    12: "# ?/?",
                    13: "# ??/??",
                    14: "m/d/yy",
                    15: "d-mmm-yy",
                    16: "d-mmm",
                    17: "mmm-yy",
                    18: "h:mm AM/PM",
                    19: "h:mm:ss AM/PM",
                    20: "h:mm",
                    21: "h:mm:ss",
                    22: "m/d/yy h:mm",
                    37: "#,##0 ;(#,##0)",
                    38: "#,##0 ;[Red](#,##0)",
                    39: "#,##0.00;(#,##0.00)",
                    40: "#,##0.00;[Red](#,##0.00)",
                    45: "mm:ss",
                    46: "[h]:mm:ss",
                    47: "mmss.0",
                    48: "##0.0E+0",
                    49: "@",
                    56: '"\u4e0a\u5348/\u4e0b\u5348 "hh"\u6642"mm"\u5206"ss"\u79d2 "'
                },
                hi = {
                    5: 37,
                    6: 38,
                    7: 39,
                    8: 40,
                    23: 0,
                    24: 0,
                    25: 0,
                    26: 0,
                    27: 14,
                    28: 14,
                    29: 14,
                    30: 14,
                    31: 14,
                    50: 14,
                    51: 14,
                    52: 14,
                    53: 14,
                    54: 14,
                    55: 14,
                    56: 14,
                    57: 14,
                    58: 14,
                    59: 1,
                    60: 2,
                    61: 3,
                    62: 4,
                    67: 9,
                    68: 10,
                    69: 12,
                    70: 13,
                    71: 14,
                    72: 14,
                    73: 15,
                    74: 16,
                    75: 17,
                    76: 20,
                    77: 21,
                    78: 22,
                    79: 45,
                    80: 46,
                    81: 47,
                    82: 0
                },
                Mc = {
                    5: '"$"#,##0_);\\("$"#,##0\\)',
                    63: '"$"#,##0_);\\("$"#,##0\\)',
                    6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
                    64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
                    7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
                    65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
                    8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
                    66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
                    41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
                    42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
                    43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
                    44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
                };

            function un(e, t, r) {
                for (var a = e < 0 ? -1 : 1, n = e * a, i = 0, s = 1, f = 0, c = 1, o = 0, l = 0, h = Math.floor(n); o < t && (f = (h = Math.floor(n)) * s + i, l = h * o + c, !(n - h < 5e-8));) n = 1 / (n - h), i = s, s = f, c = o, o = l;
                if (l > t && (o > t ? (l = c, f = i) : (l = o, f = s)), !r) return [0, a * f, l];
                var x = Math.floor(a * f / l);
                return [x, a * f - x * l, l]
            }

            function yt(e, t, r) {
                if (e > 2958465 || e < 0) return null;
                var a = 0 | e,
                    n = Math.floor(86400 * (e - a)),
                    i = 0,
                    s = [],
                    f = {
                        D: a,
                        T: n,
                        u: 86400 * (e - a) - n,
                        y: 0,
                        m: 0,
                        d: 0,
                        H: 0,
                        M: 0,
                        S: 0,
                        q: 0
                    };
                if (Math.abs(f.u) < 1e-6 && (f.u = 0), t && t.date1904 && (a += 1462), f.u > .9999 && (f.u = 0, 86400 == ++n && (f.T = n = 0, ++a, ++f.D)), 60 === a) s = r ? [1317, 10, 29] : [1900, 2, 29], i = 3;
                else if (0 === a) s = r ? [1317, 8, 29] : [1900, 1, 0], i = 6;
                else {
                    a > 60 && --a;
                    var c = new Date(1900, 0, 1);
                    c.setDate(c.getDate() + a - 1), s = [c.getFullYear(), c.getMonth() + 1, c.getDate()], i = c.getDay(), a < 60 && (i = (i + 6) % 7), r && (i = function Gc(e, t) {
                        t[0] -= 581;
                        var r = e.getDay();
                        return e < 60 && (r = (r + 6) % 7), r
                    }(c, s))
                }
                return f.y = s[0], f.m = s[1], f.d = s[2], f.S = n % 60, n = Math.floor(n / 60), f.M = n % 60, n = Math.floor(n / 60), f.H = n, f.q = i, f
            }
            var xi = new Date(1899, 11, 31, 0, 0, 0),
                Uc = xi.getTime(),
                Wc = new Date(1900, 2, 1, 0, 0, 0);

            function di(e, t) {
                var r = e.getTime();
                return t ? r -= 1262304e5 : e >= Wc && (r += 864e5), (r - (Uc + 6e4 * (e.getTimezoneOffset() - xi.getTimezoneOffset()))) / 864e5
            }

            function Kn(e) {
                return -1 == e.indexOf(".") ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1")
            }

            function Vt(e, t) {
                switch (typeof e) {
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "TRUE" : "FALSE";
                    case "number":
                        return (0 | e) === e ? e.toString(10) : function Ca(e) {
                            var r, t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E);
                            return r = t >= -4 && t <= -1 ? e.toPrecision(10 + t) : Math.abs(t) <= 9 ? function Vc(e) {
                                var t = e < 0 ? 12 : 11,
                                    r = Kn(e.toFixed(12));
                                return r.length <= t || (r = e.toPrecision(10)).length <= t ? r : e.toExponential(5)
                            }(e) : 10 === t ? e.toFixed(10).substr(0, 12) : function Xc(e) {
                                var t = Kn(e.toFixed(11));
                                return t.length > (e < 0 ? 12 : 11) || "0" === t || "-0" === t ? e.toPrecision(6) : t
                            }(e), Kn(function Hc(e) {
                                return -1 == e.indexOf("E") ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2")
                            }(r.toUpperCase()))
                        }(e);
                    case "undefined":
                        return "";
                    case "object":
                        if (null == e) return "";
                        if (e instanceof Date) return Mr(14, di(e, t && t.date1904), t)
                }
                throw new Error("unsupported value in General format: " + e)
            }

            function zc(e, t, r, a) {
                var c, n = "",
                    i = 0,
                    s = 0,
                    f = r.y,
                    o = 0;
                switch (e) {
                    case 98:
                        f = r.y + 543;
                    case 121:
                        switch (t.length) {
                            case 1:
                            case 2:
                                c = f % 100, o = 2;
                                break;
                            default:
                                c = f % 1e4, o = 4
                        }
                        break;
                    case 109:
                        switch (t.length) {
                            case 1:
                            case 2:
                                c = r.m, o = t.length;
                                break;
                            case 3:
                                return jn[r.m - 1][1];
                            case 5:
                                return jn[r.m - 1][0];
                            default:
                                return jn[r.m - 1][2]
                        }
                        break;
                    case 100:
                        switch (t.length) {
                            case 1:
                            case 2:
                                c = r.d, o = t.length;
                                break;
                            case 3:
                                return ui[r.q][0];
                            default:
                                return ui[r.q][1]
                        }
                        break;
                    case 104:
                        switch (t.length) {
                            case 1:
                            case 2:
                                c = 1 + (r.H + 11) % 12, o = t.length;
                                break;
                            default:
                                throw "bad hour format: " + t
                        }
                        break;
                    case 72:
                        switch (t.length) {
                            case 1:
                            case 2:
                                c = r.H, o = t.length;
                                break;
                            default:
                                throw "bad hour format: " + t
                        }
                        break;
                    case 77:
                        switch (t.length) {
                            case 1:
                            case 2:
                                c = r.M, o = t.length;
                                break;
                            default:
                                throw "bad minute format: " + t
                        }
                        break;
                    case 115:
                        if ("s" != t && "ss" != t && ".0" != t && ".00" != t && ".000" != t) throw "bad second format: " + t;
                        return 0 !== r.u || "s" != t && "ss" != t ? (s = a >= 2 ? 3 === a ? 1e3 : 100 : 1 === a ? 10 : 1, (i = Math.round(s * (r.S + r.u))) >= 60 * s && (i = 0), "s" === t ? 0 === i ? "0" : "" + i / s : (n = Qr(i, 2 + a), "ss" === t ? n.substr(0, 2) : "." + n.substr(2, t.length - 1))) : Qr(r.S, t.length);
                    case 90:
                        switch (t) {
                            case "[h]":
                            case "[hh]":
                                c = 24 * r.D + r.H;
                                break;
                            case "[m]":
                            case "[mm]":
                                c = 60 * (24 * r.D + r.H) + r.M;
                                break;
                            case "[s]":
                            case "[ss]":
                                c = 60 * (60 * (24 * r.D + r.H) + r.M) + Math.round(r.S + r.u);
                                break;
                            default:
                                throw "bad abstime format: " + t
                        }
                        o = 3 === t.length ? 1 : 2;
                        break;
                    case 101:
                        c = f, o = 1
                }
                return o > 0 ? Qr(c, o) : ""
            }

            function At(e) {
                if (e.length <= 3) return e;
                for (var r = e.length % 3, a = e.substr(0, r); r != e.length; r += 3) a += (a.length > 0 ? "," : "") + e.substr(r, 3);
                return a
            }
            var pi = /%/g;

            function mi(e, t) {
                var r, a = e.indexOf("E") - e.indexOf(".") - 1;
                if (e.match(/^#+0.0E\+0$/)) {
                    if (0 == t) return "0.0E+0";
                    if (t < 0) return "-" + mi(e, -t);
                    var n = e.indexOf("."); - 1 === n && (n = e.indexOf("E"));
                    var i = Math.floor(Math.log(t) * Math.LOG10E) % n;
                    if (i < 0 && (i += n), -1 === (r = (t / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n)).indexOf("e")) {
                        var s = Math.floor(Math.log(t) * Math.LOG10E);
                        for (-1 === r.indexOf(".") ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i) : r += "E+" + (s - i);
                            "0." === r.substr(0, 2);) r = (r = r.charAt(0) + r.substr(2, n) + "." + r.substr(2 + n)).replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
                        r = r.replace(/\+-/, "-")
                    }
                    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, c, o, l) {
                        return c + o + l.substr(0, (n + i) % n) + "." + l.substr(i) + "E"
                    })
                } else r = t.toExponential(a);
                return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E")
            }
            var vi = /# (\?+)( ?)\/( ?)(\d+)/,
                gi = /^#*0*\.([0#]+)/,
                _i = /\).*[0#]/,
                wi = /\(###\) ###\\?-####/;

            function Cr(e) {
                for (var r, t = "", a = 0; a != e.length; ++a) switch (r = e.charCodeAt(a)) {
                    case 35:
                        break;
                    case 63:
                        t += " ";
                        break;
                    case 48:
                        t += "0";
                        break;
                    default:
                        t += String.fromCharCode(r)
                }
                return t
            }

            function ki(e, t) {
                var r = Math.pow(10, t);
                return "" + Math.round(e * r) / r
            }

            function Ei(e, t) {
                var r = e - Math.floor(e),
                    a = Math.pow(10, t);
                return t < ("" + Math.round(r * a)).length ? 0 : Math.round(r * a)
            }

            function Xr(e, t, r) {
                if (40 === e.charCodeAt(0) && !t.match(_i)) {
                    var a = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
                    return r >= 0 ? Xr("n", a, r) : "(" + Xr("n", a, -r) + ")"
                }
                if (44 === t.charCodeAt(t.length - 1)) return function jc(e, t, r) {
                    for (var a = t.length - 1; 44 === t.charCodeAt(a - 1);) --a;
                    return dt(e, t.substr(0, a), r / Math.pow(10, 3 * (t.length - a)))
                }(e, t, r);
                if (-1 !== t.indexOf("%")) return function $c(e, t, r) {
                    var a = t.replace(pi, ""),
                        n = t.length - a.length;
                    return dt(e, a, r * Math.pow(10, 2 * n)) + Ye("%", n)
                }(e, t, r);
                if (-1 !== t.indexOf("E")) return mi(t, r);
                if (36 === t.charCodeAt(0)) return "$" + Xr(e, t.substr(" " == t.charAt(1) ? 2 : 1), r);
                var n, i, s, f, c = Math.abs(r),
                    o = r < 0 ? "-" : "";
                if (t.match(/^00+$/)) return o + oa(c, t.length);
                if (t.match(/^[#?]+$/)) return "0" === (n = oa(r, 0)) && (n = ""), n.length > t.length ? n : Cr(t.substr(0, t.length - n.length)) + n;
                if (i = t.match(vi)) return function Kc(e, t, r) {
                    var a = parseInt(e[4], 10),
                        n = Math.round(t * a),
                        i = Math.floor(n / a),
                        s = n - i * a,
                        f = a;
                    return r + (0 === i ? "" : "" + i) + " " + (0 === s ? Ye(" ", e[1].length + 1 + e[4].length) : $n(s, e[1].length) + e[2] + "/" + e[3] + Qr(f, e[4].length))
                }(i, c, o);
                if (t.match(/^#+0+$/)) return o + oa(c, t.length - t.indexOf("0"));
                if (i = t.match(gi)) return n = ki(r, i[1].length).replace(/^([^\.]+)$/, "$1." + Cr(i[1])).replace(/\.$/, "." + Cr(i[1])).replace(/\.(\d*)$/, function(p, u) {
                    return "." + u + Ye("0", Cr(i[1]).length - u.length)
                }), -1 !== t.indexOf("0.") ? n : n.replace(/^0\./, ".");
                if (t = t.replace(/^#+([0.])/, "$1"), i = t.match(/^(0*)\.(#*)$/)) return o + ki(c, i[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
                if (i = t.match(/^#{1,3},##0(\.?)$/)) return o + At(oa(c, 0));
                if (i = t.match(/^#,##0\.([#0]*0)$/)) return r < 0 ? "-" + Xr(e, t, -r) : At("" + (Math.floor(r) + function Jc(e, t) {
                    return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0
                }(r, i[1].length))) + "." + Qr(Ei(r, i[1].length), i[1].length);
                if (i = t.match(/^#,#*,#0/)) return Xr(e, t.replace(/^#,#*,/, ""), r);
                if (i = t.match(/^([0#]+)(\\?-([0#]+))+$/)) return n = ca(Xr(e, t.replace(/[\\-]/g, ""), r)), s = 0, ca(ca(t.replace(/\\/g, "")).replace(/[0#]/g, function(p) {
                    return s < n.length ? n.charAt(s++) : "0" === p ? "0" : ""
                }));
                if (t.match(wi)) return "(" + (n = Xr(e, "##########", r)).substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
                var l = "";
                if (i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(i[4].length, 7), f = un(c, Math.pow(10, s) - 1, !1), n = "" + o, " " == (l = dt("n", i[1], f[1])).charAt(l.length - 1) && (l = l.substr(0, l.length - 1) + "0"), n += l + i[2] + "/" + i[3], (l = on(f[2], s)).length < i[4].length && (l = Cr(i[4].substr(i[4].length - l.length)) + l), n += l;
                if (i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(Math.max(i[1].length, i[4].length), 7), o + ((f = un(c, Math.pow(10, s) - 1, !0))[0] || (f[1] ? "" : "0")) + " " + (f[1] ? $n(f[1], s) + i[2] + "/" + i[3] + on(f[2], s) : Ye(" ", 2 * s + 1 + i[2].length + i[3].length));
                if (i = t.match(/^[#0?]+$/)) return n = oa(r, 0), t.length <= n.length ? n : Cr(t.substr(0, t.length - n.length)) + n;
                if (i = t.match(/^([#0?]+)\.([#0]+)$/)) {
                    n = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
                    var h = t.indexOf(".") - s,
                        x = t.length - n.length - h;
                    return Cr(t.substr(0, h) + n + t.substr(t.length - x))
                }
                if (i = t.match(/^00,000\.([#0]*0)$/)) return s = Ei(r, i[1].length), r < 0 ? "-" + Xr(e, t, -r) : At(function Zc(e) {
                    return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? 0 | e : e - 1 | 0) : "" + Math.floor(e)
                }(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(p) {
                    return "00," + (p.length < 3 ? Qr(0, 3 - p.length) : "") + p
                }) + "." + Qr(s, i[1].length);
                switch (t) {
                    case "###,##0.00":
                        return Xr(e, "#,##0.00", r);
                    case "###,###":
                    case "##,###":
                    case "#,###":
                        var d = At(oa(c, 0));
                        return "0" !== d ? o + d : "";
                    case "###,###.00":
                        return Xr(e, "###,##0.00", r).replace(/^0\./, ".");
                    case "#,###.00":
                        return Xr(e, "#,##0.00", r).replace(/^0\./, ".")
                }
                throw new Error("unsupported format |" + t + "|")
            }

            function Ti(e, t) {
                var r, a = e.indexOf("E") - e.indexOf(".") - 1;
                if (e.match(/^#+0.0E\+0$/)) {
                    if (0 == t) return "0.0E+0";
                    if (t < 0) return "-" + Ti(e, -t);
                    var n = e.indexOf("."); - 1 === n && (n = e.indexOf("E"));
                    var i = Math.floor(Math.log(t) * Math.LOG10E) % n;
                    if (i < 0 && (i += n), !(r = (t / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n)).match(/[Ee]/)) {
                        var s = Math.floor(Math.log(t) * Math.LOG10E); - 1 === r.indexOf(".") ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i) : r += "E+" + (s - i), r = r.replace(/\+-/, "-")
                    }
                    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, c, o, l) {
                        return c + o + l.substr(0, (n + i) % n) + "." + l.substr(i) + "E"
                    })
                } else r = t.toExponential(a);
                return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E")
            }

            function at(e, t, r) {
                if (40 === e.charCodeAt(0) && !t.match(_i)) {
                    var a = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
                    return r >= 0 ? at("n", a, r) : "(" + at("n", a, -r) + ")"
                }
                if (44 === t.charCodeAt(t.length - 1)) return function qc(e, t, r) {
                    for (var a = t.length - 1; 44 === t.charCodeAt(a - 1);) --a;
                    return dt(e, t.substr(0, a), r / Math.pow(10, 3 * (t.length - a)))
                }(e, t, r);
                if (-1 !== t.indexOf("%")) return function Qc(e, t, r) {
                    var a = t.replace(pi, ""),
                        n = t.length - a.length;
                    return dt(e, a, r * Math.pow(10, 2 * n)) + Ye("%", n)
                }(e, t, r);
                if (-1 !== t.indexOf("E")) return Ti(t, r);
                if (36 === t.charCodeAt(0)) return "$" + at(e, t.substr(" " == t.charAt(1) ? 2 : 1), r);
                var n, i, s, f, c = Math.abs(r),
                    o = r < 0 ? "-" : "";
                if (t.match(/^00+$/)) return o + Qr(c, t.length);
                if (t.match(/^[#?]+$/)) return n = "" + r, 0 === r && (n = ""), n.length > t.length ? n : Cr(t.substr(0, t.length - n.length)) + n;
                if (i = t.match(vi)) return function Yc(e, t, r) {
                    return r + (0 === t ? "" : "" + t) + Ye(" ", e[1].length + 2 + e[4].length)
                }(i, c, o);
                if (t.match(/^#+0+$/)) return o + Qr(c, t.length - t.indexOf("0"));
                if (i = t.match(gi)) return n = (n = ("" + r).replace(/^([^\.]+)$/, "$1." + Cr(i[1])).replace(/\.$/, "." + Cr(i[1]))).replace(/\.(\d*)$/, function(p, u) {
                    return "." + u + Ye("0", Cr(i[1]).length - u.length)
                }), -1 !== t.indexOf("0.") ? n : n.replace(/^0\./, ".");
                if (t = t.replace(/^#+([0.])/, "$1"), i = t.match(/^(0*)\.(#*)$/)) return o + ("" + c).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
                if (i = t.match(/^#{1,3},##0(\.?)$/)) return o + At("" + c);
                if (i = t.match(/^#,##0\.([#0]*0)$/)) return r < 0 ? "-" + at(e, t, -r) : At("" + r) + "." + Ye("0", i[1].length);
                if (i = t.match(/^#,#*,#0/)) return at(e, t.replace(/^#,#*,/, ""), r);
                if (i = t.match(/^([0#]+)(\\?-([0#]+))+$/)) return n = ca(at(e, t.replace(/[\\-]/g, ""), r)), s = 0, ca(ca(t.replace(/\\/g, "")).replace(/[0#]/g, function(p) {
                    return s < n.length ? n.charAt(s++) : "0" === p ? "0" : ""
                }));
                if (t.match(wi)) return "(" + (n = at(e, "##########", r)).substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
                var l = "";
                if (i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(i[4].length, 7), f = un(c, Math.pow(10, s) - 1, !1), n = "" + o, " " == (l = dt("n", i[1], f[1])).charAt(l.length - 1) && (l = l.substr(0, l.length - 1) + "0"), n += l + i[2] + "/" + i[3], (l = on(f[2], s)).length < i[4].length && (l = Cr(i[4].substr(i[4].length - l.length)) + l), n += l;
                if (i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(Math.max(i[1].length, i[4].length), 7), o + ((f = un(c, Math.pow(10, s) - 1, !0))[0] || (f[1] ? "" : "0")) + " " + (f[1] ? $n(f[1], s) + i[2] + "/" + i[3] + on(f[2], s) : Ye(" ", 2 * s + 1 + i[2].length + i[3].length));
                if (i = t.match(/^[#0?]+$/)) return t.length <= (n = "" + r).length ? n : Cr(t.substr(0, t.length - n.length)) + n;
                if (i = t.match(/^([#0]+)\.([#0]+)$/)) {
                    n = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
                    var h = t.indexOf(".") - s,
                        x = t.length - n.length - h;
                    return Cr(t.substr(0, h) + n + t.substr(t.length - x))
                }
                if (i = t.match(/^00,000\.([#0]*0)$/)) return r < 0 ? "-" + at(e, t, -r) : At("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(p) {
                    return "00," + (p.length < 3 ? Qr(0, 3 - p.length) : "") + p
                }) + "." + Qr(0, i[1].length);
                switch (t) {
                    case "###,###":
                    case "##,###":
                    case "#,###":
                        var d = At("" + c);
                        return "0" !== d ? o + d : "";
                    default:
                        if (t.match(/\.[0#?]*$/)) return at(e, t.slice(0, t.lastIndexOf(".")), r) + Cr(t.slice(t.lastIndexOf(".")))
                }
                throw new Error("unsupported format |" + t + "|")
            }

            function dt(e, t, r) {
                return (0 | r) === r ? at(e, t, r) : Xr(e, t, r)
            }
            var Si = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;

            function la(e) {
                for (var t = 0, r = "", a = ""; t < e.length;) switch (r = e.charAt(t)) {
                    case "G":
                        ln(e, t) && (t += 6), t++;
                        break;
                    case '"':
                        for (; 34 !== e.charCodeAt(++t) && t < e.length;);
                        ++t;
                        break;
                    case "\\":
                    case "_":
                        t += 2;
                        break;
                    case "@":
                        ++t;
                        break;
                    case "B":
                    case "b":
                        if ("1" === e.charAt(t + 1) || "2" === e.charAt(t + 1)) return !0;
                    case "M":
                    case "D":
                    case "Y":
                    case "H":
                    case "S":
                    case "E":
                    case "m":
                    case "d":
                    case "y":
                    case "h":
                    case "s":
                    case "e":
                    case "g":
                        return !0;
                    case "A":
                    case "a":
                    case "\u4e0a":
                        if ("A/P" === e.substr(t, 3).toUpperCase() || "AM/PM" === e.substr(t, 5).toUpperCase() || "\u4e0a\u5348/\u4e0b\u5348" === e.substr(t, 5).toUpperCase()) return !0;
                        ++t;
                        break;
                    case "[":
                        for (a = r;
                            "]" !== e.charAt(t++) && t < e.length;) a += e.charAt(t);
                        if (a.match(Si)) return !0;
                        break;
                    case ".":
                    case "0":
                    case "#":
                        for (; t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || "\\" == r && "-" == e.charAt(t + 1) && "0#".indexOf(e.charAt(t + 2)) > -1););
                        break;
                    case "?":
                        for (; e.charAt(++t) === r;);
                        break;
                    case "*":
                        ++t, (" " == e.charAt(t) || "*" == e.charAt(t)) && ++t;
                        break;
                    case "(":
                    case ")":
                        ++t;
                        break;
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        for (; t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1;);
                        break;
                    default:
                        ++t
                }
                return !1
            }
            var Fi = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;

            function yi(e, t) {
                if (null == t) return !1;
                var r = parseFloat(t[2]);
                switch (t[1]) {
                    case "=":
                        if (e == r) return !0;
                        break;
                    case ">":
                        if (e > r) return !0;
                        break;
                    case "<":
                        if (e < r) return !0;
                        break;
                    case "<>":
                        if (e != r) return !0;
                        break;
                    case ">=":
                        if (e >= r) return !0;
                        break;
                    case "<=":
                        if (e <= r) return !0
                }
                return !1
            }

            function Mr(e, t, r) {
                null == r && (r = {});
                var a = "";
                switch (typeof e) {
                    case "string":
                        a = "m/d/yy" == e && r.dateNF ? r.dateNF : e;
                        break;
                    case "number":
                        null == (a = 14 == e && r.dateNF ? r.dateNF : (null != r.table ? r.table : pe)[e]) && (a = r.table && r.table[hi[e]] || pe[hi[e]]), null == a && (a = Mc[e] || "General")
                }
                if (ln(a, 0)) return Vt(t, r);
                t instanceof Date && (t = di(t, r.date1904));
                var n = function to(e, t) {
                    var r = function eo(e) {
                            for (var t = [], r = !1, a = 0, n = 0; a < e.length; ++a) switch (e.charCodeAt(a)) {
                                case 34:
                                    r = !r;
                                    break;
                                case 95:
                                case 42:
                                case 92:
                                    ++a;
                                    break;
                                case 59:
                                    t[t.length] = e.substr(n, a - n), n = a + 1
                            }
                            if (t[t.length] = e.substr(n), !0 === r) throw new Error("Format |" + e + "| unterminated string ");
                            return t
                        }(e),
                        a = r.length,
                        n = r[a - 1].indexOf("@");
                    if (a < 4 && n > -1 && --a, r.length > 4) throw new Error("cannot find right format for |" + r.join("|") + "|");
                    if ("number" != typeof t) return [4, 4 === r.length || n > -1 ? r[r.length - 1] : "@"];
                    switch (r.length) {
                        case 1:
                            r = n > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
                            break;
                        case 2:
                            r = n > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
                            break;
                        case 3:
                            r = n > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"]
                    }
                    var i = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
                    if (-1 === r[0].indexOf("[") && -1 === r[1].indexOf("[")) return [a, i];
                    if (null != r[0].match(/\[[=<>]/) || null != r[1].match(/\[[=<>]/)) {
                        var s = r[0].match(Fi),
                            f = r[1].match(Fi);
                        return yi(t, s) ? [a, r[0]] : yi(t, f) ? [a, r[1]] : [a, r[null != s && null != f ? 2 : 1]]
                    }
                    return [a, i]
                }(a, t);
                if (ln(n[1])) return Vt(t, r);
                if (!0 === t) t = "TRUE";
                else if (!1 === t) t = "FALSE";
                else if ("" === t || null == t) return "";
                return function ro(e, t, r, a) {
                    for (var o, l, h, n = [], i = "", s = 0, f = "", c = "t", x = "H"; s < e.length;) switch (f = e.charAt(s)) {
                        case "G":
                            if (!ln(e, s)) throw new Error("unrecognized character " + f + " in " + e);
                            n[n.length] = {
                                t: "G",
                                v: "General"
                            }, s += 7;
                            break;
                        case '"':
                            for (i = ""; 34 !== (h = e.charCodeAt(++s)) && s < e.length;) i += String.fromCharCode(h);
                            n[n.length] = {
                                t: "t",
                                v: i
                            }, ++s;
                            break;
                        case "\\":
                            var d = e.charAt(++s);
                            n[n.length] = {
                                t: "(" === d || ")" === d ? d : "t",
                                v: d
                            }, ++s;
                            break;
                        case "_":
                            n[n.length] = {
                                t: "t",
                                v: " "
                            }, s += 2;
                            break;
                        case "@":
                            n[n.length] = {
                                t: "T",
                                v: t
                            }, ++s;
                            break;
                        case "B":
                        case "b":
                            if ("1" === e.charAt(s + 1) || "2" === e.charAt(s + 1)) {
                                if (null == o && null == (o = yt(t, r, "2" === e.charAt(s + 1)))) return "";
                                n[n.length] = {
                                    t: "X",
                                    v: e.substr(s, 2)
                                }, c = f, s += 2;
                                break
                            }
                        case "M":
                        case "D":
                        case "Y":
                        case "H":
                        case "S":
                        case "E":
                            f = f.toLowerCase();
                        case "m":
                        case "d":
                        case "y":
                        case "h":
                        case "s":
                        case "e":
                        case "g":
                            if (t < 0 || null == o && null == (o = yt(t, r))) return "";
                            for (i = f; ++s < e.length && e.charAt(s).toLowerCase() === f;) i += f;
                            "m" === f && "h" === c.toLowerCase() && (f = "M"), "h" === f && (f = x), n[n.length] = {
                                t: f,
                                v: i
                            }, c = f;
                            break;
                        case "A":
                        case "a":
                        case "\u4e0a":
                            var u = {
                                t: f,
                                v: f
                            };
                            if (null == o && (o = yt(t, r)), "A/P" === e.substr(s, 3).toUpperCase() ? (null != o && (u.v = o.H >= 12 ? "P" : "A"), u.t = "T", x = "h", s += 3) : "AM/PM" === e.substr(s, 5).toUpperCase() ? (null != o && (u.v = o.H >= 12 ? "PM" : "AM"), u.t = "T", s += 5, x = "h") : "\u4e0a\u5348/\u4e0b\u5348" === e.substr(s, 5).toUpperCase() ? (null != o && (u.v = o.H >= 12 ? "\u4e0b\u5348" : "\u4e0a\u5348"), u.t = "T", s += 5, x = "h") : (u.t = "t", ++s), null == o && "T" === u.t) return "";
                            n[n.length] = u, c = f;
                            break;
                        case "[":
                            for (i = f;
                                "]" !== e.charAt(s++) && s < e.length;) i += e.charAt(s);
                            if ("]" !== i.slice(-1)) throw 'unterminated "[" block: |' + i + "|";
                            if (i.match(Si)) {
                                if (null == o && null == (o = yt(t, r))) return "";
                                n[n.length] = {
                                    t: "Z",
                                    v: i.toLowerCase()
                                }, c = i.charAt(1)
                            } else i.indexOf("$") > -1 && (i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$", la(e) || (n[n.length] = {
                                t: "t",
                                v: i
                            }));
                            break;
                        case ".":
                            if (null != o) {
                                for (i = f; ++s < e.length && "0" === (f = e.charAt(s));) i += f;
                                n[n.length] = {
                                    t: "s",
                                    v: i
                                };
                                break
                            }
                        case "0":
                        case "#":
                            for (i = f; ++s < e.length && "0#?.,E+-%".indexOf(f = e.charAt(s)) > -1;) i += f;
                            n[n.length] = {
                                t: "n",
                                v: i
                            };
                            break;
                        case "?":
                            for (i = f; e.charAt(++s) === f;) i += f;
                            n[n.length] = {
                                t: f,
                                v: i
                            }, c = f;
                            break;
                        case "*":
                            ++s, (" " == e.charAt(s) || "*" == e.charAt(s)) && ++s;
                            break;
                        case "(":
                        case ")":
                            n[n.length] = {
                                t: 1 === a ? "t" : f,
                                v: f
                            }, ++s;
                            break;
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                            for (i = f; s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1;) i += e.charAt(s);
                            n[n.length] = {
                                t: "D",
                                v: i
                            };
                            break;
                        case " ":
                            n[n.length] = {
                                t: f,
                                v: f
                            }, ++s;
                            break;
                        case "$":
                            n[n.length] = {
                                t: "t",
                                v: "$"
                            }, ++s;
                            break;
                        default:
                            if (-1 === ",$-+/():!^&'~{}<>=\u20acacfijklopqrtuvwxzP".indexOf(f)) throw new Error("unrecognized character " + f + " in " + e);
                            n[n.length] = {
                                t: "t",
                                v: f
                            }, ++s
                    }
                    var k, m = 0,
                        E = 0;
                    for (s = n.length - 1, c = "t"; s >= 0; --s) switch (n[s].t) {
                        case "h":
                        case "H":
                            n[s].t = x, c = "h", m < 1 && (m = 1);
                            break;
                        case "s":
                            (k = n[s].v.match(/\.0+$/)) && (E = Math.max(E, k[0].length - 1)), m < 3 && (m = 3);
                        case "d":
                        case "y":
                        case "M":
                        case "e":
                            c = n[s].t;
                            break;
                        case "m":
                            "s" === c && (n[s].t = "M", m < 2 && (m = 2));
                            break;
                        case "X":
                            break;
                        case "Z":
                            m < 1 && n[s].v.match(/[Hh]/) && (m = 1), m < 2 && n[s].v.match(/[Mm]/) && (m = 2), m < 3 && n[s].v.match(/[Ss]/) && (m = 3)
                    }
                    switch (m) {
                        case 0:
                            break;
                        case 1:
                            o.u >= .5 && (o.u = 0, ++o.S), o.S >= 60 && (o.S = 0, ++o.M), o.M >= 60 && (o.M = 0, ++o.H);
                            break;
                        case 2:
                            o.u >= .5 && (o.u = 0, ++o.S), o.S >= 60 && (o.S = 0, ++o.M)
                    }
                    var I, _ = "";
                    for (s = 0; s < n.length; ++s) switch (n[s].t) {
                        case "t":
                        case "T":
                        case " ":
                        case "D":
                            break;
                        case "X":
                            n[s].v = "", n[s].t = ";";
                            break;
                        case "d":
                        case "m":
                        case "y":
                        case "h":
                        case "H":
                        case "M":
                        case "s":
                        case "e":
                        case "b":
                        case "Z":
                            n[s].v = zc(n[s].t.charCodeAt(0), n[s].v, o, E), n[s].t = "t";
                            break;
                        case "n":
                        case "?":
                            for (I = s + 1; null != n[I] && ("?" === (f = n[I].t) || "D" === f || (" " === f || "t" === f) && null != n[I + 1] && ("?" === n[I + 1].t || "t" === n[I + 1].t && "/" === n[I + 1].v) || "(" === n[s].t && (" " === f || "n" === f || ")" === f) || "t" === f && ("/" === n[I].v || " " === n[I].v && null != n[I + 1] && "?" == n[I + 1].t));) n[s].v += n[I].v, n[I] = {
                                v: "",
                                t: ";"
                            }, ++I;
                            _ += n[s].v, s = I - 1;
                            break;
                        case "G":
                            n[s].t = "t", n[s].v = Vt(t, r)
                    }
                    var H, C, P = "";
                    if (_.length > 0) {
                        40 == _.charCodeAt(0) ? (H = t < 0 && 45 === _.charCodeAt(0) ? -t : t, C = dt("n", _, H)) : (C = dt("n", _, H = t < 0 && a > 1 ? -t : t), H < 0 && n[0] && "t" == n[0].t && (C = C.substr(1), n[0].v = "-" + n[0].v)), I = C.length - 1;
                        var N = n.length;
                        for (s = 0; s < n.length; ++s)
                            if (null != n[s] && "t" != n[s].t && n[s].v.indexOf(".") > -1) {
                                N = s;
                                break
                            }
                        var R = n.length;
                        if (N === n.length && -1 === C.indexOf("E")) {
                            for (s = n.length - 1; s >= 0; --s) null == n[s] || -1 === "n?".indexOf(n[s].t) || (I >= n[s].v.length - 1 ? n[s].v = C.substr(1 + (I -= n[s].v.length), n[s].v.length) : I < 0 ? n[s].v = "" : (n[s].v = C.substr(0, I + 1), I = -1), n[s].t = "t", R = s);
                            I >= 0 && R < n.length && (n[R].v = C.substr(0, I + 1) + n[R].v)
                        } else if (N !== n.length && -1 === C.indexOf("E")) {
                            for (I = C.indexOf(".") - 1, s = N; s >= 0; --s)
                                if (null != n[s] && -1 !== "n?".indexOf(n[s].t)) {
                                    for (l = n[s].v.indexOf(".") > -1 && s === N ? n[s].v.indexOf(".") - 1 : n[s].v.length - 1, P = n[s].v.substr(l + 1); l >= 0; --l) I >= 0 && ("0" === n[s].v.charAt(l) || "#" === n[s].v.charAt(l)) && (P = C.charAt(I--) + P);
                                    n[s].v = P, n[s].t = "t", R = s
                                }
                            for (I >= 0 && R < n.length && (n[R].v = C.substr(0, I + 1) + n[R].v), I = C.indexOf(".") + 1, s = N; s < n.length; ++s)
                                if (null != n[s] && (-1 !== "n?(".indexOf(n[s].t) || s === N)) {
                                    for (l = n[s].v.indexOf(".") > -1 && s === N ? n[s].v.indexOf(".") + 1 : 0, P = n[s].v.substr(0, l); l < n[s].v.length; ++l) I < C.length && (P += C.charAt(I++));
                                    n[s].v = P, n[s].t = "t", R = s
                                }
                        }
                    }
                    for (s = 0; s < n.length; ++s) null != n[s] && "n?".indexOf(n[s].t) > -1 && (n[s].v = dt(n[s].t, n[s].v, H = a > 1 && t < 0 && s > 0 && "-" === n[s - 1].v ? -t : t), n[s].t = "t");
                    var V = "";
                    for (s = 0; s !== n.length; ++s) null != n[s] && (V += n[s].v);
                    return V
                }(n[1], t, r, n[0])
            }

            function nt(e, t) {
                if ("number" != typeof t) {
                    t = +t || -1;
                    for (var r = 0; r < 392; ++r)
                        if (null != pe[r]) {
                            if (pe[r] == e) {
                                t = r;
                                break
                            }
                        } else t < 0 && (t = r);
                    t < 0 && (t = 391)
                }
                return pe[t] = e, t
            }

            function Da(e) {
                for (var t = 0; 392 != t; ++t) void 0 !== e[t] && nt(e[t], t)
            }

            function ua() {
                pe = function Bc(e) {
                    return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"\u4e0a\u5348/\u4e0b\u5348 "hh"\u6642"mm"\u5206"ss"\u79d2 "', e
                }()
            }
            var Ai = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g,
                fo = function() {
                    var e = {
                            version: "1.2.0"
                        },
                        r = function t() {
                            for (var C = 0, N = new Array(256), R = 0; 256 != R; ++R) N[R] = C = 1 & (C = 1 & (C = 1 & (C = 1 & (C = 1 & (C = 1 & (C = 1 & (C = 1 & (C = R) ? -306674912 ^ C >>> 1 : C >>> 1) ? -306674912 ^ C >>> 1 : C >>> 1) ? -306674912 ^ C >>> 1 : C >>> 1) ? -306674912 ^ C >>> 1 : C >>> 1) ? -306674912 ^ C >>> 1 : C >>> 1) ? -306674912 ^ C >>> 1 : C >>> 1) ? -306674912 ^ C >>> 1 : C >>> 1) ? -306674912 ^ C >>> 1 : C >>> 1;
                            return typeof Int32Array < "u" ? new Int32Array(N) : N
                        }(),
                        n = function a(C) {
                            var N = 0,
                                R = 0,
                                V = 0,
                                X = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
                            for (V = 0; 256 != V; ++V) X[V] = C[V];
                            for (V = 0; 256 != V; ++V)
                                for (R = C[V], N = 256 + V; N < 4096; N += 256) R = X[N] = R >>> 8 ^ C[255 & R];
                            var b = [];
                            for (V = 1; 16 != V; ++V) b[V - 1] = typeof Int32Array < "u" ? X.subarray(256 * V, 256 * V + 256) : X.slice(256 * V, 256 * V + 256);
                            return b
                        }(r),
                        i = n[0],
                        s = n[1],
                        f = n[2],
                        c = n[3],
                        o = n[4],
                        l = n[5],
                        h = n[6],
                        x = n[7],
                        d = n[8],
                        p = n[9],
                        u = n[10],
                        m = n[11],
                        E = n[12],
                        k = n[13],
                        _ = n[14];
                    return e.table = r, e.bstr = function I(C, N) {
                        for (var R = -1 ^ N, V = 0, X = C.length; V < X;) R = R >>> 8 ^ r[255 & (R ^ C.charCodeAt(V++))];
                        return ~R
                    }, e.buf = function P(C, N) {
                        for (var R = -1 ^ N, V = C.length - 15, X = 0; X < V;) R = _[C[X++] ^ 255 & R] ^ k[C[X++] ^ R >> 8 & 255] ^ E[C[X++] ^ R >> 16 & 255] ^ m[C[X++] ^ R >>> 24] ^ u[C[X++]] ^ p[C[X++]] ^ d[C[X++]] ^ x[C[X++]] ^ h[C[X++]] ^ l[C[X++]] ^ o[C[X++]] ^ c[C[X++]] ^ f[C[X++]] ^ s[C[X++]] ^ i[C[X++]] ^ r[C[X++]];
                        for (V += 15; X < V;) R = R >>> 8 ^ r[255 & (R ^ C[X++])];
                        return ~R
                    }, e.str = function H(C, N) {
                        for (var R = -1 ^ N, V = 0, X = C.length, b = 0, te = 0; V < X;)(b = C.charCodeAt(V++)) < 128 ? R = R >>> 8 ^ r[255 & (R ^ b)] : b < 2048 ? R = (R = R >>> 8 ^ r[255 & (R ^ (192 | b >> 6 & 31))]) >>> 8 ^ r[255 & (R ^ (128 | 63 & b))] : b >= 55296 && b < 57344 ? (b = 64 + (1023 & b), te = 1023 & C.charCodeAt(V++), R = (R = (R = (R = R >>> 8 ^ r[255 & (R ^ (240 | b >> 8 & 7))]) >>> 8 ^ r[255 & (R ^ (128 | b >> 2 & 63))]) >>> 8 ^ r[255 & (R ^ (128 | te >> 6 & 15 | (3 & b) << 4))]) >>> 8 ^ r[255 & (R ^ (128 | 63 & te))]) : R = (R = (R = R >>> 8 ^ r[255 & (R ^ (224 | b >> 12 & 15))]) >>> 8 ^ r[255 & (R ^ (128 | b >> 6 & 63))]) >>> 8 ^ r[255 & (R ^ (128 | 63 & b))];
                        return ~R
                    }, e
                }(),
                de = function() {
                    var c, t = {};

                    function a(v) {
                        if ("/" == v.charAt(v.length - 1)) return -1 === v.slice(0, -1).indexOf("/") ? v : a(v.slice(0, -1));
                        var T = v.lastIndexOf("/");
                        return -1 === T ? v : v.slice(0, T + 1)
                    }

                    function n(v) {
                        if ("/" == v.charAt(v.length - 1)) return n(v.slice(0, -1));
                        var T = v.lastIndexOf("/");
                        return -1 === T ? v : v.slice(T + 1)
                    }

                    function i(v, T) {
                        "string" == typeof T && (T = new Date(T));
                        var g = T.getHours();
                        g = (g = g << 6 | T.getMinutes()) << 5 | T.getSeconds() >>> 1, v.write_shift(2, g);
                        var w = T.getFullYear() - 1980;
                        w = (w = w << 4 | T.getMonth() + 1) << 5 | T.getDate(), v.write_shift(2, w)
                    }

                    function f(v) {
                        vr(v, 0);
                        for (var T = {}, g = 0; v.l <= v.length - 4;) {
                            var w = v.read_shift(2),
                                S = v.read_shift(2),
                                F = v.l + S,
                                L = {};
                            21589 === w && (1 & (g = v.read_shift(1)) && (L.mtime = v.read_shift(4)), S > 5 && (2 & g && (L.atime = v.read_shift(4)), 4 & g && (L.ctime = v.read_shift(4))), L.mtime && (L.mt = new Date(1e3 * L.mtime))), v.l = F, T[w] = L
                        }
                        return T
                    }

                    function o() {
                        return c || (c = {})
                    }

                    function l(v, T) {
                        if (80 == v[0] && 75 == v[1]) return Ic(v, T);
                        if (109 == (32 | v[0]) && 105 == (32 | v[1])) return function Bg(v, T) {
                            if ("mime-version:" != oe(v.slice(0, 13)).toLowerCase()) throw new Error("Unsupported MAD header");
                            var g = T && T.root || "",
                                w = (Ae && Buffer.isBuffer(v) ? v.toString("binary") : oe(v)).split("\r\n"),
                                S = 0,
                                F = "";
                            for (S = 0; S < w.length; ++S)
                                if (/^Content-Location:/i.test(F = w[S]) && (F = F.slice(F.indexOf("file")), g || (g = F.slice(0, F.lastIndexOf("/") + 1)), F.slice(0, g.length) != g))
                                    for (; g.length > 0 && (g = (g = g.slice(0, g.length - 1)).slice(0, g.lastIndexOf("/") + 1), F.slice(0, g.length) != g););
                            var L = (w[1] || "").match(/boundary="(.*?)"/);
                            if (!L) throw new Error("MAD cannot find boundary");
                            var z = "--" + (L[1] || ""),
                                W = {
                                    FileIndex: [],
                                    FullPaths: []
                                };
                            C(W);
                            var Z, ae = 0;
                            for (S = 0; S < w.length; ++S) {
                                var ue = w[S];
                                ue !== z && ue !== z + "--" || (ae++ && Lg(W, w.slice(Z, S), g), Z = S)
                            }
                            return W
                        }(v, T);
                        if (v.length < 512) throw new Error("CFB file size " + v.length + " < 512");
                        var g, S, F, L, z, M, w = 512,
                            B = [],
                            W = v.slice(0, 512);
                        vr(W, 0);
                        var Z = function h(v) {
                            if (80 == v[v.l] && 75 == v[v.l + 1]) return [0, 0];
                            v.chk(le, "Header Signature: "), v.l += 16;
                            var T = v.read_shift(2, "u");
                            return [v.read_shift(2, "u"), T]
                        }(W);
                        switch (g = Z[0]) {
                            case 3:
                                w = 512;
                                break;
                            case 4:
                                w = 4096;
                                break;
                            case 0:
                                if (0 == Z[1]) return Ic(v, T);
                            default:
                                throw new Error("Major Version: Expected 3 or 4 saw " + g)
                        }
                        512 !== w && vr(W = v.slice(0, w), 28);
                        var ae = v.slice(0, w);
                        ! function x(v, T) {
                            var g;
                            switch (v.l += 2, g = v.read_shift(2)) {
                                case 9:
                                    if (3 != T) throw new Error("Sector Shift: Expected 9 saw " + g);
                                    break;
                                case 12:
                                    if (4 != T) throw new Error("Sector Shift: Expected 12 saw " + g);
                                    break;
                                default:
                                    throw new Error("Sector Shift: Expected 9 or 12 saw " + g)
                            }
                            v.chk("0600", "Mini Sector Shift: "), v.chk("000000000000", "Reserved: ")
                        }(W, g);
                        var ue = W.read_shift(4, "i");
                        if (3 === g && 0 !== ue) throw new Error("# Directory Sectors: Expected 0 saw " + ue);
                        W.l += 4, L = W.read_shift(4, "i"), W.l += 4, W.chk("00100000", "Mini Stream Cutoff Size: "), z = W.read_shift(4, "i"), S = W.read_shift(4, "i"), M = W.read_shift(4, "i"), F = W.read_shift(4, "i");
                        for (var ne = -1, se = 0; se < 109 && !((ne = W.read_shift(4, "i")) < 0); ++se) B[se] = ne;
                        var _e = function d(v, T) {
                            for (var g = Math.ceil(v.length / T) - 1, w = [], S = 1; S < g; ++S) w[S - 1] = v.slice(S * T, (S + 1) * T);
                            return w[g - 1] = v.slice(g * T), w
                        }(v, w);
                        m(M, F, _e, w, B);
                        var Ge = function k(v, T, g, w) {
                            var S = v.length,
                                F = [],
                                L = [],
                                z = [],
                                M = [],
                                B = w - 1,
                                W = 0,
                                Z = 0,
                                ae = 0,
                                ue = 0;
                            for (W = 0; W < S; ++W)
                                if (z = [], (ae = W + T) >= S && (ae -= S), !L[ae]) {
                                    M = [];
                                    var ne = [];
                                    for (Z = ae; Z >= 0;) {
                                        ne[Z] = !0, L[Z] = !0, z[z.length] = Z, M.push(v[Z]);
                                        var se = g[Math.floor(4 * Z / w)];
                                        if (w < 4 + (ue = 4 * Z & B)) throw new Error("FAT boundary crossed: " + Z + " 4 " + w);
                                        if (!v[se] || ne[Z = Gt(v[se], ue)]) break
                                    }
                                    F[ae] = {
                                        nodes: z,
                                        data: Yi([M])
                                    }
                                }
                            return F
                        }(_e, L, B, w);
                        Ge[L].name = "!Directory", S > 0 && z !== te && (Ge[z].name = "!MiniFAT"), Ge[B[0]].name = "!FAT", Ge.fat_addrs = B, Ge.ssz = w;
                        var cr = [],
                            Vr = [],
                            nn = [];
                        (function _(v, T, g, w, S, F, L, z) {
                            for (var ue, M = 0, B = w.length ? 2 : 0, W = T[v].data, Z = 0, ae = 0; Z < W.length; Z += 128) {
                                var ne = W.slice(Z, Z + 128);
                                vr(ne, 64), ae = ne.read_shift(2), ue = mn(ne, 0, ae - B), w.push(ue);
                                var se = {
                                    name: ue,
                                    type: ne.read_shift(1),
                                    color: ne.read_shift(1),
                                    L: ne.read_shift(4, "i"),
                                    R: ne.read_shift(4, "i"),
                                    C: ne.read_shift(4, "i"),
                                    clsid: ne.read_shift(16),
                                    state: ne.read_shift(4, "i"),
                                    start: 0,
                                    size: 0
                                };
                                0 !== ne.read_shift(2) + ne.read_shift(2) + ne.read_shift(2) + ne.read_shift(2) && (se.ct = I(ne, ne.l - 8)), 0 !== ne.read_shift(2) + ne.read_shift(2) + ne.read_shift(2) + ne.read_shift(2) && (se.mt = I(ne, ne.l - 8)), se.start = ne.read_shift(4, "i"), se.size = ne.read_shift(4, "i"), se.size < 0 && se.start < 0 && (se.size = se.type = 0, se.start = te, se.name = ""), 5 === se.type ? (M = se.start, S > 0 && M !== te && (T[M].name = "!StreamData")) : se.size >= 4096 ? (se.storage = "fat", void 0 === T[se.start] && (T[se.start] = E(g, se.start, T.fat_addrs, T.ssz)), T[se.start].name = se.name, se.content = T[se.start].data.slice(0, se.size)) : (se.storage = "minifat", se.size < 0 ? se.size = 0 : M !== te && se.start !== te && T[M] && (se.content = u(se, T[M].data, (T[z] || {}).data))), se.content && vr(se.content, 0), F[ue] = se, L.push(se)
                            }
                        })(L, Ge, _e, cr, S, {}, Vr, z),
                        function p(v, T, g) {
                            for (var w = 0, S = 0, F = 0, L = 0, z = 0, M = g.length, B = [], W = []; w < M; ++w) B[w] = W[w] = w, T[w] = g[w];
                            for (; z < W.length; ++z) S = v[w = W[z]].L, F = v[w].R, L = v[w].C, B[w] === w && (-1 !== S && B[S] !== S && (B[w] = B[S]), -1 !== F && B[F] !== F && (B[w] = B[F])), -1 !== L && (B[L] = w), -1 !== S && w != B[w] && (B[S] = B[w], W.lastIndexOf(S) < z && W.push(S)), -1 !== F && w != B[w] && (B[F] = B[w], W.lastIndexOf(F) < z && W.push(F));
                            for (w = 1; w < M; ++w) B[w] === w && (-1 !== F && B[F] !== F ? B[w] = B[F] : -1 !== S && B[S] !== S && (B[w] = B[S]));
                            for (w = 1; w < M; ++w)
                                if (0 !== v[w].type) {
                                    if ((z = w) != B[z])
                                        do {
                                            T[w] = T[z = B[z]] + "/" + T[w]
                                        } while (0 !== z && -1 !== B[z] && z != B[z]);
                                    B[w] = -1
                                }
                            for (T[0] += "/", w = 1; w < M; ++w) 2 !== v[w].type && (T[w] += "/")
                        }(Vr, nn, cr), cr.shift();
                        var sn = {
                            FileIndex: Vr,
                            FullPaths: nn
                        };
                        return T && T.raw && (sn.raw = {
                            header: ae,
                            sectors: _e
                        }), sn
                    }

                    function u(v, T, g) {
                        for (var S = v.size, F = [], L = v.start; g && S > 0 && L >= 0;) F.push(T.slice(L * b, L * b + b)), S -= b, L = Gt(g, 4 * L);
                        return 0 === F.length ? G(0) : lr(F).slice(0, v.size)
                    }

                    function m(v, T, g, w, S) {
                        var F = te;
                        if (v === te) {
                            if (0 !== T) throw new Error("DIFAT chain shorter than expected")
                        } else if (-1 !== v) {
                            var L = g[v],
                                z = (w >>> 2) - 1;
                            if (!L) return;
                            for (var M = 0; M < z && (F = Gt(L, 4 * M)) !== te; ++M) S.push(F);
                            m(Gt(L, w - 4), T - 1, g, w, S)
                        }
                    }

                    function E(v, T, g, w, S) {
                        var F = [],
                            L = [];
                        S || (S = []);
                        var z = w - 1,
                            M = 0,
                            B = 0;
                        for (M = T; M >= 0;) {
                            S[M] = !0, F[F.length] = M, L.push(v[M]);
                            var W = g[Math.floor(4 * M / w)];
                            if (w < 4 + (B = 4 * M & z)) throw new Error("FAT boundary crossed: " + M + " 4 " + w);
                            if (!v[W]) break;
                            M = Gt(v[W], B)
                        }
                        return {
                            nodes: F,
                            data: Yi([L])
                        }
                    }

                    function I(v, T) {
                        return new Date(1e3 * (hr(v, T + 4) / 1e7 * Math.pow(2, 32) + hr(v, T) / 1e7 - 11644473600))
                    }

                    function C(v, T) {
                        var g = T || {},
                            w = g.root || "Root Entry";
                        if (v.FullPaths || (v.FullPaths = []), v.FileIndex || (v.FileIndex = []), v.FullPaths.length !== v.FileIndex.length) throw new Error("inconsistent CFB structure");
                        0 === v.FullPaths.length && (v.FullPaths[0] = w + "/", v.FileIndex[0] = {
                                name: w,
                                type: 5
                            }), g.CLSID && (v.FileIndex[0].clsid = g.CLSID),
                            function N(v) {
                                var T = "\x01Sh33tJ5";
                                if (!de.find(v, "/" + T)) {
                                    var g = G(4);
                                    g[0] = 55, g[1] = g[3] = 50, g[2] = 54, v.FileIndex.push({
                                        name: T,
                                        type: 2,
                                        content: g,
                                        size: 4,
                                        L: 69,
                                        R: 69,
                                        C: 69
                                    }), v.FullPaths.push(v.FullPaths[0] + T), R(v)
                                }
                            }(v)
                    }

                    function R(v, T) {
                        C(v);
                        for (var g = !1, w = !1, S = v.FullPaths.length - 1; S >= 0; --S) {
                            var F = v.FileIndex[S];
                            switch (F.type) {
                                case 0:
                                    w ? g = !0 : (v.FileIndex.pop(), v.FullPaths.pop());
                                    break;
                                case 1:
                                case 2:
                                case 5:
                                    w = !0, isNaN(F.R * F.L * F.C) && (g = !0), F.R > -1 && F.L > -1 && F.R == F.L && (g = !0);
                                    break;
                                default:
                                    g = !0
                            }
                        }
                        if (g || T) {
                            var L = new Date(1987, 1, 19),
                                z = 0,
                                M = Object.create ? Object.create(null) : {},
                                B = [];
                            for (S = 0; S < v.FullPaths.length; ++S) M[v.FullPaths[S]] = !0, 0 !== v.FileIndex[S].type && B.push([v.FullPaths[S], v.FileIndex[S]]);
                            for (S = 0; S < B.length; ++S) {
                                var W = a(B[S][0]);
                                (w = M[W]) || (B.push([W, {
                                    name: n(W).replace("/", ""),
                                    type: 1,
                                    clsid: me,
                                    ct: L,
                                    mt: L,
                                    content: null
                                }]), M[W] = !0)
                            }
                            for (B.sort(function(ue, ne) {
                                    return function r(v, T) {
                                        for (var g = v.split("/"), w = T.split("/"), S = 0, F = 0, L = Math.min(g.length, w.length); S < L; ++S) {
                                            if (F = g[S].length - w[S].length) return F;
                                            if (g[S] != w[S]) return g[S] < w[S] ? -1 : 1
                                        }
                                        return g.length - w.length
                                    }(ue[0], ne[0])
                                }), v.FullPaths = [], v.FileIndex = [], S = 0; S < B.length; ++S) v.FullPaths[S] = B[S][0], v.FileIndex[S] = B[S][1];
                            for (S = 0; S < B.length; ++S) {
                                var Z = v.FileIndex[S],
                                    ae = v.FullPaths[S];
                                if (Z.name = n(ae).replace("/", ""), Z.L = Z.R = Z.C = -(Z.color = 1), Z.size = Z.content ? Z.content.length : 0, Z.start = 0, Z.clsid = Z.clsid || me, 0 === S) Z.C = B.length > 1 ? 1 : -1, Z.size = 0, Z.type = 5;
                                else if ("/" == ae.slice(-1)) {
                                    for (z = S + 1; z < B.length && a(v.FullPaths[z]) != ae; ++z);
                                    for (Z.C = z >= B.length ? -1 : z, z = S + 1; z < B.length && a(v.FullPaths[z]) != a(ae); ++z);
                                    Z.R = z >= B.length ? -1 : z, Z.type = 1
                                } else a(v.FullPaths[S + 1] || "") == a(ae) && (Z.R = S + 1), Z.type = 2
                            }
                        }
                    }

                    function V(v, T) {
                        var g = T || {};
                        if ("mad" == g.fileType) return function Mg(v, T) {
                            for (var g = T || {}, w = g.boundary || "SheetJS", S = ["MIME-Version: 1.0", 'Content-Type: multipart/related; boundary="' + (w = "------=" + w).slice(2) + '"', "", "", ""], F = v.FullPaths[0], L = F, z = v.FileIndex[0], M = 1; M < v.FullPaths.length; ++M)
                                if (L = v.FullPaths[M].slice(F.length), (z = v.FileIndex[M]).size && z.content && "\x01Sh33tJ5" != L) {
                                    L = L.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(_e) {
                                        return "_x" + _e.charCodeAt(0).toString(16) + "_"
                                    }).replace(/[\u0080-\uFFFF]/g, function(_e) {
                                        return "_u" + _e.charCodeAt(0).toString(16) + "_"
                                    });
                                    for (var B = z.content, W = Ae && Buffer.isBuffer(B) ? B.toString("binary") : oe(B), Z = 0, ae = Math.min(1024, W.length), ue = 0, ne = 0; ne <= ae; ++ne)(ue = W.charCodeAt(ne)) >= 32 && ue < 128 && ++Z;
                                    var se = Z >= 4 * ae / 5;
                                    S.push(w), S.push("Content-Location: " + (g.root || "file:///C:/SheetJS/") + L), S.push("Content-Transfer-Encoding: " + (se ? "quoted-printable" : "base64")), S.push("Content-Type: " + Rg(z, L)), S.push(""), S.push(se ? Ng(W) : bg(W))
                                }
                            return S.push(w + "--\r\n"), S.join("\r\n")
                        }(v, g);
                        if ("zip" === (R(v), g.fileType)) return function Ig(v, T) {
                            var g = T || {},
                                w = [],
                                S = [],
                                F = G(1),
                                L = g.compression ? 8 : 0,
                                z = 0,
                                B = 0,
                                W = 0,
                                Z = 0,
                                ae = 0,
                                ue = v.FullPaths[0],
                                ne = ue,
                                se = v.FileIndex[0],
                                _e = [],
                                Ge = 0;
                            for (B = 1; B < v.FullPaths.length; ++B)
                                if (ne = v.FullPaths[B].slice(ue.length), (se = v.FileIndex[B]).size && se.content && "\x01Sh33tJ5" != ne) {
                                    var Pr = Z,
                                        cr = G(ne.length);
                                    for (W = 0; W < ne.length; ++W) cr.write_shift(1, 127 & ne.charCodeAt(W));
                                    cr = cr.slice(0, cr.l), _e[ae] = fo.buf(se.content, 0);
                                    var Vr = se.content;
                                    8 == L && (Vr = O(Vr)), (F = G(30)).write_shift(4, 67324752), F.write_shift(2, 20), F.write_shift(2, z), F.write_shift(2, L), se.mt ? i(F, se.mt) : F.write_shift(4, 0), F.write_shift(-4, 8 & z ? 0 : _e[ae]), F.write_shift(4, 8 & z ? 0 : Vr.length), F.write_shift(4, 8 & z ? 0 : se.content.length), F.write_shift(2, cr.length), F.write_shift(2, 0), Z += F.length, w.push(F), Z += cr.length, w.push(cr), Z += Vr.length, w.push(Vr), 8 & z && ((F = G(12)).write_shift(-4, _e[ae]), F.write_shift(4, Vr.length), F.write_shift(4, se.content.length), Z += F.l, w.push(F)), (F = G(46)).write_shift(4, 33639248), F.write_shift(2, 0), F.write_shift(2, 20), F.write_shift(2, z), F.write_shift(2, L), F.write_shift(4, 0), F.write_shift(-4, _e[ae]), F.write_shift(4, Vr.length), F.write_shift(4, se.content.length), F.write_shift(2, cr.length), F.write_shift(2, 0), F.write_shift(2, 0), F.write_shift(2, 0), F.write_shift(2, 0), F.write_shift(4, 0), F.write_shift(4, Pr), Ge += F.l, S.push(F), Ge += cr.length, S.push(cr), ++ae
                                }
                            return (F = G(22)).write_shift(4, 101010256), F.write_shift(2, 0), F.write_shift(2, 0), F.write_shift(2, ae), F.write_shift(2, ae), F.write_shift(4, Ge), F.write_shift(4, Z), F.write_shift(2, 0), lr([lr(w), lr(S), F])
                        }(v, g);
                        var w = function(ue) {
                                for (var ne = 0, se = 0, _e = 0; _e < ue.FileIndex.length; ++_e) {
                                    var Ge = ue.FileIndex[_e];
                                    if (Ge.content) {
                                        var Pr = Ge.content.length;
                                        Pr > 0 && (Pr < 4096 ? ne += Pr + 63 >> 6 : se += Pr + 511 >> 9)
                                    }
                                }
                                for (var cr = ue.FullPaths.length + 3 >> 2, nn = ne + 127 >> 7, sn = (ne + 7 >> 3) + se + cr + nn, ia = sn + 127 >> 7, ci = ia <= 109 ? 0 : Math.ceil((ia - 109) / 127); sn + ia + ci + 127 >> 7 > ia;) ci = ++ia <= 109 ? 0 : Math.ceil((ia - 109) / 127);
                                var Et = [1, ci, ia, nn, cr, se, ne, 0];
                                return ue.FileIndex[0].size = ne << 6, Et[7] = (ue.FileIndex[0].start = Et[0] + Et[1] + Et[2] + Et[3] + Et[4] + Et[5]) + (Et[6] + 7 >> 3), Et
                            }(v),
                            S = G(w[7] << 9),
                            F = 0,
                            L = 0;
                        for (F = 0; F < 8; ++F) S.write_shift(1, ie[F]);
                        for (F = 0; F < 8; ++F) S.write_shift(2, 0);
                        for (S.write_shift(2, 62), S.write_shift(2, 3), S.write_shift(2, 65534), S.write_shift(2, 9), S.write_shift(2, 6), F = 0; F < 3; ++F) S.write_shift(2, 0);
                        for (S.write_shift(4, 0), S.write_shift(4, w[2]), S.write_shift(4, w[0] + w[1] + w[2] + w[3] - 1), S.write_shift(4, 0), S.write_shift(4, 4096), S.write_shift(4, w[3] ? w[0] + w[1] + w[2] - 1 : te), S.write_shift(4, w[3]), S.write_shift(-4, w[1] ? w[0] - 1 : te), S.write_shift(4, w[1]), F = 0; F < 109; ++F) S.write_shift(-4, F < w[2] ? w[1] + F : -1);
                        if (w[1])
                            for (L = 0; L < w[1]; ++L) {
                                for (; F < 236 + 127 * L; ++F) S.write_shift(-4, F < w[2] ? w[1] + F : -1);
                                S.write_shift(-4, L === w[1] - 1 ? te : L + 1)
                            }
                        var z = function(ue) {
                            for (L += ue; F < L - 1; ++F) S.write_shift(-4, F + 1);
                            ue && (++F, S.write_shift(-4, te))
                        };
                        for (L = F = 0, L += w[1]; F < L; ++F) S.write_shift(-4, he.DIFSECT);
                        for (L += w[2]; F < L; ++F) S.write_shift(-4, he.FATSECT);
                        z(w[3]), z(w[4]);
                        for (var M = 0, B = 0, W = v.FileIndex[0]; M < v.FileIndex.length; ++M)(W = v.FileIndex[M]).content && !((B = W.content.length) < 4096) && (W.start = L, z(B + 511 >> 9));
                        for (z(w[6] + 7 >> 3); 511 & S.l;) S.write_shift(-4, he.ENDOFCHAIN);
                        for (L = F = 0, M = 0; M < v.FileIndex.length; ++M)(W = v.FileIndex[M]).content && (B = W.content.length) && !(B >= 4096) && (W.start = L, z(B + 63 >> 6));
                        for (; 511 & S.l;) S.write_shift(-4, he.ENDOFCHAIN);
                        for (F = 0; F < w[4] << 2; ++F) {
                            var Z = v.FullPaths[F];
                            if (Z && 0 !== Z.length) {
                                W = v.FileIndex[F], 0 === F && (W.start = W.size ? W.start - 1 : te);
                                var ae = 0 === F && g.root || W.name;
                                if (B = 2 * (ae.length + 1), S.write_shift(64, ae, "utf16le"), S.write_shift(2, B), S.write_shift(1, W.type), S.write_shift(1, W.color), S.write_shift(-4, W.L), S.write_shift(-4, W.R), S.write_shift(-4, W.C), W.clsid) S.write_shift(16, W.clsid, "hex");
                                else
                                    for (M = 0; M < 4; ++M) S.write_shift(4, 0);
                                S.write_shift(4, W.state || 0), S.write_shift(4, 0), S.write_shift(4, 0), S.write_shift(4, 0), S.write_shift(4, 0), S.write_shift(4, W.start), S.write_shift(4, W.size), S.write_shift(4, 0)
                            } else {
                                for (M = 0; M < 17; ++M) S.write_shift(4, 0);
                                for (M = 0; M < 3; ++M) S.write_shift(4, -1);
                                for (M = 0; M < 12; ++M) S.write_shift(4, 0)
                            }
                        }
                        for (F = 1; F < v.FileIndex.length; ++F)
                            if ((W = v.FileIndex[F]).size >= 4096)
                                if (S.l = W.start + 1 << 9, Ae && Buffer.isBuffer(W.content)) W.content.copy(S, S.l, 0, W.size), S.l += W.size + 511 & -512;
                                else {
                                    for (M = 0; M < W.size; ++M) S.write_shift(1, W.content[M]);
                                    for (; 511 & M; ++M) S.write_shift(1, 0)
                                }
                        for (F = 1; F < v.FileIndex.length; ++F)
                            if ((W = v.FileIndex[F]).size > 0 && W.size < 4096)
                                if (Ae && Buffer.isBuffer(W.content)) W.content.copy(S, S.l, 0, W.size), S.l += W.size + 63 & -64;
                                else {
                                    for (M = 0; M < W.size; ++M) S.write_shift(1, W.content[M]);
                                    for (; 63 & M; ++M) S.write_shift(1, 0)
                                }
                        if (Ae) S.l = S.length;
                        else
                            for (; S.l < S.length;) S.write_shift(1, 0);
                        return S
                    }
                    t.version = "1.2.1";
                    var J, b = 64,
                        te = -2,
                        le = "d0cf11e0a1b11ae1",
                        ie = [208, 207, 17, 224, 161, 177, 26, 225],
                        me = "00000000000000000000000000000000",
                        he = {
                            MAXREGSECT: -6,
                            DIFSECT: -4,
                            FATSECT: -3,
                            ENDOFCHAIN: te,
                            FREESECT: -1,
                            HEADER_SIGNATURE: le,
                            HEADER_MINOR_VERSION: "3e00",
                            MAXREGSID: -6,
                            NOSTREAM: -1,
                            HEADER_CLSID: me,
                            EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
                        };

                    function oe(v) {
                        for (var T = new Array(v.length), g = 0; g < v.length; ++g) T[g] = String.fromCharCode(v[g]);
                        return T.join("")
                    }

                    function O(v) {
                        return J ? J.deflateRawSync(v) : Ce(v)
                    }
                    for (var v, T, D = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], j = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], fe = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], ee = typeof Uint8Array < "u", Y = ee ? new Uint8Array(256) : [], ye = 0; ye < 256; ++ye) Y[ye] = (void 0, 255 & ((T = 139536 & ((v = ye) << 1 | v << 11) | 558144 & (v << 5 | v << 15)) >> 16 | T >> 8 | T));

                    function y(v, T) {
                        var g = Y[255 & v];
                        return T <= 8 ? g >>> 8 - T : (g = g << 8 | Y[v >> 8 & 255], T <= 16 ? g >>> 16 - T : (g = g << 8 | Y[v >> 16 & 255]) >>> 24 - T)
                    }

                    function Ue(v, T) {
                        var g = 7 & T,
                            w = T >>> 3;
                        return (v[w] | (g <= 6 ? 0 : v[w + 1] << 8)) >>> g & 3
                    }

                    function Oe(v, T) {
                        var g = 7 & T,
                            w = T >>> 3;
                        return (v[w] | (g <= 5 ? 0 : v[w + 1] << 8)) >>> g & 7
                    }

                    function Ie(v, T) {
                        var g = 7 & T,
                            w = T >>> 3;
                        return (v[w] | (g <= 3 ? 0 : v[w + 1] << 8)) >>> g & 31
                    }

                    function ce(v, T) {
                        var g = 7 & T,
                            w = T >>> 3;
                        return (v[w] | (g <= 1 ? 0 : v[w + 1] << 8)) >>> g & 127
                    }

                    function tr(v, T, g) {
                        var w = 7 & T,
                            S = T >>> 3,
                            L = v[S] >>> w;
                        return g < 8 - w || (L |= v[S + 1] << 8 - w, g < 16 - w) || (L |= v[S + 2] << 16 - w, g < 24 - w) || (L |= v[S + 3] << 24 - w), L & (1 << g) - 1
                    }

                    function Jr(v, T, g) {
                        var w = 7 & T,
                            S = T >>> 3;
                        return w <= 5 ? v[S] |= (7 & g) << w : (v[S] |= g << w & 255, v[S + 1] = (7 & g) >> 8 - w), T + 3
                    }

                    function ut(v, T, g) {
                        return v[T >>> 3] |= g = (1 & g) << (7 & T), T + 1
                    }

                    function wt(v, T, g) {
                        var S = T >>> 3;
                        return v[S] |= 255 & (g <<= 7 & T), v[S + 1] = g >>>= 8, T + 8
                    }

                    function tn(v, T, g) {
                        var S = T >>> 3;
                        return v[S] |= 255 & (g <<= 7 & T), v[S + 1] = 255 & (g >>>= 8), v[S + 2] = g >>> 8, T + 16
                    }

                    function Lt(v, T) {
                        var g = v.length,
                            w = 2 * g > T ? 2 * g : T + 5,
                            S = 0;
                        if (g >= T) return v;
                        if (Ae) {
                            var F = oi(w);
                            if (v.copy) v.copy(F);
                            else
                                for (; S < v.length; ++S) F[S] = v[S];
                            return F
                        }
                        if (ee) {
                            var L = new Uint8Array(w);
                            if (L.set) L.set(v);
                            else
                                for (; S < g; ++S) L[S] = v[S];
                            return L
                        }
                        return v.length = w, v
                    }

                    function Hr(v) {
                        for (var T = new Array(v), g = 0; g < v; ++g) T[g] = 0;
                        return T
                    }

                    function kt(v, T, g) {
                        var w = 1,
                            S = 0,
                            F = 0,
                            L = 0,
                            z = 0,
                            M = v.length,
                            B = ee ? new Uint16Array(32) : Hr(32);
                        for (F = 0; F < 32; ++F) B[F] = 0;
                        for (F = M; F < g; ++F) v[F] = 0;
                        M = v.length;
                        var W = ee ? new Uint16Array(M) : Hr(M);
                        for (F = 0; F < M; ++F) B[S = v[F]]++, w < S && (w = S), W[F] = 0;
                        for (B[0] = 0, F = 1; F <= w; ++F) B[F + 16] = z = z + B[F - 1] << 1;
                        for (F = 0; F < M; ++F) 0 != (z = v[F]) && (W[F] = B[z + 16]++);
                        var Z = 0;
                        for (F = 0; F < M; ++F)
                            if (0 != (Z = v[F]))
                                for (z = y(W[F], w) >> w - Z, L = (1 << w + 4 - Z) - 1; L >= 0; --L) T[z | L << Z] = 15 & Z | F << 4;
                        return w
                    }
                    var Bt = ee ? new Uint16Array(512) : Hr(512),
                        an = ee ? new Uint16Array(32) : Hr(32);
                    if (!ee) {
                        for (var Rr = 0; Rr < 512; ++Rr) Bt[Rr] = 0;
                        for (Rr = 0; Rr < 32; ++Rr) an[Rr] = 0
                    }! function() {
                        for (var v = [], T = 0; T < 32; T++) v.push(5);
                        kt(v, an, 32);
                        var g = [];
                        for (T = 0; T <= 143; T++) g.push(8);
                        for (; T <= 255; T++) g.push(9);
                        for (; T <= 279; T++) g.push(7);
                        for (; T <= 287; T++) g.push(8);
                        kt(g, Bt, 288)
                    }();
                    var ht = function() {
                        for (var T = ee ? new Uint8Array(32768) : [], g = 0, w = 0; g < fe.length - 1; ++g)
                            for (; w < fe[g + 1]; ++w) T[w] = g;
                        for (; w < 32768; ++w) T[w] = 29;
                        var S = ee ? new Uint8Array(259) : [];
                        for (g = 0, w = 0; g < j.length - 1; ++g)
                            for (; w < j[g + 1]; ++w) S[w] = g;
                        return function(M, B) {
                            return M.length < 8 ? function F(z, M) {
                                for (var B = 0; B < z.length;) {
                                    var W = Math.min(65535, z.length - B);
                                    for (M.write_shift(1, +(B + W == z.length)), M.write_shift(2, W), M.write_shift(2, 65535 & ~W); W-- > 0;) M[M.l++] = z[B++]
                                }
                                return M.l
                            }(M, B) : function L(z, M) {
                                for (var B = 0, W = 0, Z = ee ? new Uint16Array(32768) : []; W < z.length;) {
                                    var ae = Math.min(65535, z.length - W);
                                    if (ae < 10) {
                                        for (7 & (B = Jr(M, B, +(W + ae == z.length))) && (B += 8 - (7 & B)), M.l = B / 8 | 0, M.write_shift(2, ae), M.write_shift(2, 65535 & ~ae); ae-- > 0;) M[M.l++] = z[W++];
                                        B = 8 * M.l
                                    } else {
                                        B = Jr(M, B, +(W + ae == z.length) + 2);
                                        for (var ue = 0; ae-- > 0;) {
                                            var ne = z[W],
                                                se = -1,
                                                _e = 0;
                                            if ((se = Z[ue = 32767 & (ue << 5 ^ ne)]) && ((se |= -32768 & W) > W && (se -= 32768), se < W))
                                                for (; z[se + _e] == z[W + _e] && _e < 250;) ++_e;
                                            if (_e > 2) {
                                                (ne = S[_e]) <= 22 ? B = wt(M, B, Y[ne + 1] >> 1) - 1 : (wt(M, B, 3), wt(M, B += 5, Y[ne - 23] >> 5), B += 3);
                                                var Ge = ne < 8 ? 0 : ne - 4 >> 2;
                                                Ge > 0 && (tn(M, B, _e - j[ne]), B += Ge), B = wt(M, B, Y[ne = T[W - se]] >> 3), B -= 3;
                                                var Pr = ne < 4 ? 0 : ne - 2 >> 1;
                                                Pr > 0 && (tn(M, B, W - se - fe[ne]), B += Pr);
                                                for (var cr = 0; cr < _e; ++cr) Z[ue] = 32767 & W, ue = 32767 & (ue << 5 ^ z[W]), ++W;
                                                ae -= _e - 1
                                            } else ne <= 143 ? ne += 48 : B = ut(M, B, 1), B = wt(M, B, Y[ne]), Z[ue] = 32767 & W, ++W
                                        }
                                        B = wt(M, B, 0) - 1
                                    }
                                }
                                return M.l = (B + 7) / 8 | 0, M.l
                            }(M, B)
                        }
                    }();

                    function Ce(v) {
                        var T = G(50 + Math.floor(1.1 * v.length)),
                            g = ht(v, T);
                        return T.slice(0, g)
                    }
                    var ar = ee ? new Uint16Array(32768) : Hr(32768),
                        Zr = ee ? new Uint16Array(32768) : Hr(32768),
                        or = ee ? new Uint16Array(128) : Hr(128),
                        na = 1,
                        Cc = 1;

                    function Cg(v, T) {
                        var g = Ie(v, T) + 257,
                            w = Ie(v, T += 5) + 1,
                            S = function We(v, T) {
                                var g = 7 & T,
                                    w = T >>> 3;
                                return (v[w] | (g <= 4 ? 0 : v[w + 1] << 8)) >>> g & 15
                            }(v, T += 5) + 4;
                        T += 4;
                        for (var F = 0, L = ee ? new Uint8Array(19) : Hr(19), z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], M = 1, B = ee ? new Uint8Array(8) : Hr(8), W = ee ? new Uint8Array(8) : Hr(8), Z = L.length, ae = 0; ae < S; ++ae) L[D[ae]] = F = Oe(v, T), M < F && (M = F), B[F]++, T += 3;
                        var ue = 0;
                        for (B[0] = 0, ae = 1; ae <= M; ++ae) W[ae] = ue = ue + B[ae - 1] << 1;
                        for (ae = 0; ae < Z; ++ae) 0 != (ue = L[ae]) && (z[ae] = W[ue]++);
                        var ne = 0;
                        for (ae = 0; ae < Z; ++ae)
                            if (0 != (ne = L[ae])) {
                                ue = Y[z[ae]] >> 8 - ne;
                                for (var se = (1 << 7 - ne) - 1; se >= 0; --se) or[ue | se << ne] = 7 & ne | ae << 3
                            }
                        var _e = [];
                        for (M = 1; _e.length < g + w;) switch (ue = or[ce(v, T)], T += 7 & ue, ue >>>= 3) {
                            case 16:
                                for (F = 3 + Ue(v, T), T += 2, ue = _e[_e.length - 1]; F-- > 0;) _e.push(ue);
                                break;
                            case 17:
                                for (F = 3 + Oe(v, T), T += 3; F-- > 0;) _e.push(0);
                                break;
                            case 18:
                                for (F = 11 + ce(v, T), T += 7; F-- > 0;) _e.push(0);
                                break;
                            default:
                                _e.push(ue), M < ue && (M = ue)
                        }
                        var Ge = _e.slice(0, g),
                            Pr = _e.slice(g);
                        for (ae = g; ae < 286; ++ae) Ge[ae] = 0;
                        for (ae = w; ae < 30; ++ae) Pr[ae] = 0;
                        return na = kt(Ge, ar, 286), Cc = kt(Pr, Zr, 30), T
                    }

                    function Dc(v, T) {
                        var w = function Dg(v, T) {
                            if (3 == v[0] && !(3 & v[1])) return [St(T), 2];
                            for (var g = 0, w = 0, S = oi(T || 1 << 18), F = 0, L = S.length >>> 0, z = 0, M = 0; !(1 & w);)
                                if (w = Oe(v, g), g += 3, w >>> 1)
                                    for (w >> 1 == 1 ? (z = 9, M = 5) : (g = Cg(v, g), z = na, M = Cc);;) {
                                        !T && L < F + 32767 && (L = (S = Lt(S, F + 32767)).length);
                                        var W = tr(v, g, z),
                                            Z = w >>> 1 == 1 ? Bt[W] : ar[W];
                                        if (g += 15 & Z, (Z >>>= 4) >>> 8 & 255) {
                                            if (256 == Z) break;
                                            var ae = (Z -= 257) < 8 ? 0 : Z - 4 >> 2;
                                            ae > 5 && (ae = 0);
                                            var ue = F + j[Z];
                                            ae > 0 && (ue += tr(v, g, ae), g += ae), W = tr(v, g, M), g += 15 & (Z = w >>> 1 == 1 ? an[W] : Zr[W]);
                                            var ne = (Z >>>= 4) < 4 ? 0 : Z - 2 >> 1,
                                                se = fe[Z];
                                            for (ne > 0 && (se += tr(v, g, ne), g += ne), !T && L < ue && (L = (S = Lt(S, ue + 100)).length); F < ue;) S[F] = S[F - se], ++F
                                        } else S[F++] = Z
                                    } else {
                                        7 & g && (g += 8 - (7 & g));
                                        var B = v[g >>> 3] | v[1 + (g >>> 3)] << 8;
                                        if (g += 32, B > 0)
                                            for (!T && L < F + B && (L = (S = Lt(S, F + B)).length); B-- > 0;) S[F++] = v[g >>> 3], g += 8
                                    }
                            return T ? [S, g + 7 >>> 3] : [S.slice(0, F), g + 7 >>> 3]
                        }(v.slice(v.l || 0), T);
                        return v.l += w[1], w[0]
                    }

                    function Oc(v, T) {
                        if (!v) throw new Error(T);
                        typeof console < "u" && console.error(T)
                    }

                    function Ic(v, T) {
                        var g = v;
                        vr(g, 0);
                        var F = {
                            FileIndex: [],
                            FullPaths: []
                        };
                        C(F, {
                            root: T.root
                        });
                        for (var L = g.length - 4;
                            (80 != g[L] || 75 != g[L + 1] || 5 != g[L + 2] || 6 != g[L + 3]) && L >= 0;) --L;
                        g.l = L + 4, g.l += 4;
                        var z = g.read_shift(2);
                        g.l += 6;
                        var M = g.read_shift(4);
                        for (g.l = M, L = 0; L < z; ++L) {
                            g.l += 20;
                            var B = g.read_shift(4),
                                W = g.read_shift(4),
                                Z = g.read_shift(2),
                                ae = g.read_shift(2),
                                ue = g.read_shift(2);
                            g.l += 8;
                            var ne = g.read_shift(4),
                                se = f(g.slice(g.l + Z, g.l + Z + ae));
                            g.l += Z + ae + ue;
                            var _e = g.l;
                            g.l = ne + 4, Og(g, B, W, F, se), g.l = _e
                        }
                        return F
                    }

                    function Og(v, T, g, w, S) {
                        v.l += 2;
                        var F = v.read_shift(2),
                            L = v.read_shift(2),
                            z = function s(v) {
                                var T = 65535 & v.read_shift(2),
                                    g = 65535 & v.read_shift(2),
                                    w = new Date,
                                    S = 31 & g,
                                    F = 15 & (g >>>= 5);
                                g >>>= 4, w.setMilliseconds(0), w.setFullYear(g + 1980), w.setMonth(F - 1), w.setDate(S);
                                var L = 31 & T,
                                    z = 63 & (T >>>= 5);
                                return w.setHours(T >>>= 6), w.setMinutes(z), w.setSeconds(L << 1), w
                            }(v);
                        if (8257 & F) throw new Error("Unsupported ZIP encryption");
                        v.read_shift(4);
                        for (var B = v.read_shift(4), W = v.read_shift(4), Z = v.read_shift(2), ae = v.read_shift(2), ue = "", ne = 0; ne < Z; ++ne) ue += String.fromCharCode(v[v.l++]);
                        if (ae) {
                            var se = f(v.slice(v.l, v.l + ae));
                            (se[21589] || {}).mt && (z = se[21589].mt), ((S || {})[21589] || {}).mt && (z = S[21589].mt)
                        }
                        v.l += ae;
                        var _e = v.slice(v.l, v.l + B);
                        switch (L) {
                            case 8:
                                _e = function U(v, T) {
                                    if (!J) return Dc(v, T);
                                    var w = new(0, J.InflateRaw),
                                        S = w._processChunk(v.slice(v.l), w._finishFlushFlag);
                                    return v.l += w.bytesRead, S
                                }(v, W);
                                break;
                            case 0:
                                break;
                            default:
                                throw new Error("Unsupported ZIP Compression method " + L)
                        }
                        var Ge = !1;
                        8 & F && (134695760 == v.read_shift(4) && (v.read_shift(4), Ge = !0), B = v.read_shift(4), W = v.read_shift(4)), B != T && Oc(Ge, "Bad compressed size: " + T + " != " + B), W != g && Oc(Ge, "Bad uncompressed size: " + g + " != " + W), fi(w, ue, _e, {
                            unsafe: !0,
                            mt: z
                        })
                    }
                    var Hn = {
                        htm: "text/html",
                        xml: "text/xml",
                        gif: "image/gif",
                        jpg: "image/jpeg",
                        png: "image/png",
                        mso: "application/x-mso",
                        thmx: "application/vnd.ms-officetheme",
                        sh33tj5: "application/octet-stream"
                    };

                    function Rg(v, T) {
                        if (v.ctype) return v.ctype;
                        var g = v.name || "",
                            w = g.match(/\.([^\.]+)$/);
                        return w && Hn[w[1]] || T && (w = (g = T).match(/[\.\\]([^\.\\])+$/)) && Hn[w[1]] ? Hn[w[1]] : "application/octet-stream"
                    }

                    function bg(v) {
                        for (var T = Fa(v), g = [], w = 0; w < T.length; w += 76) g.push(T.slice(w, w + 76));
                        return g.join("\r\n") + "\r\n"
                    }

                    function Ng(v) {
                        var T = v.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(B) {
                            var W = B.charCodeAt(0).toString(16).toUpperCase();
                            return "=" + (1 == W.length ? "0" + W : W)
                        });
                        "\n" == (T = T.replace(/ $/gm, "=20").replace(/\t$/gm, "=09")).charAt(0) && (T = "=0D" + T.slice(1));
                        for (var g = [], w = (T = T.replace(/\r(?!\n)/gm, "=0D").replace(/\n\n/gm, "\n=0A").replace(/([^\r\n])\n/gm, "$1=0A")).split("\r\n"), S = 0; S < w.length; ++S) {
                            var F = w[S];
                            if (0 != F.length)
                                for (var L = 0; L < F.length;) {
                                    var z = 76,
                                        M = F.slice(L, L + z);
                                    "=" == M.charAt(z - 1) ? z-- : "=" == M.charAt(z - 2) ? z -= 2 : "=" == M.charAt(z - 3) && (z -= 3), M = F.slice(L, L + z), (L += z) < F.length && (M += "="), g.push(M)
                                } else g.push("")
                        }
                        return g.join("\r\n")
                    }

                    function Lg(v, T, g) {
                        for (var L, w = "", S = "", F = "", z = 0; z < 10; ++z) {
                            var M = T[z];
                            if (!M || M.match(/^\s*$/)) break;
                            var B = M.match(/^(.*?):\s*([^\s].*)$/);
                            if (B) switch (B[1].toLowerCase()) {
                                case "content-location":
                                    w = B[2].trim();
                                    break;
                                case "content-type":
                                    F = B[2].trim();
                                    break;
                                case "content-transfer-encoding":
                                    S = B[2].trim()
                            }
                        }
                        switch (++z, S.toLowerCase()) {
                            case "base64":
                                L = Br(Lr(T.slice(z).join("")));
                                break;
                            case "quoted-printable":
                                L = function Pg(v) {
                                    for (var T = [], g = 0; g < v.length; ++g) {
                                        for (var w = v[g]; g <= v.length && "=" == w.charAt(w.length - 1);) w = w.slice(0, w.length - 1) + v[++g];
                                        T.push(w)
                                    }
                                    for (var S = 0; S < T.length; ++S) T[S] = T[S].replace(/[=][0-9A-Fa-f]{2}/g, function(F) {
                                        return String.fromCharCode(parseInt(F.slice(1), 16))
                                    });
                                    return Br(T.join("\r\n"))
                                }(T.slice(z));
                                break;
                            default:
                                throw new Error("Unsupported Content-Transfer-Encoding " + S)
                        }
                        var W = fi(v, w.slice(g.length), L, {
                            unsafe: !0
                        });
                        F && (W.ctype = F)
                    }

                    function fi(v, T, g, w) {
                        var S = w && w.unsafe;
                        S || C(v);
                        var F = !S && de.find(v, T);
                        if (!F) {
                            var L = v.FullPaths[0];
                            T.slice(0, L.length) == L ? L = T : ("/" != L.slice(-1) && (L += "/"), L = (L + T).replace("//", "/")), F = {
                                name: n(T),
                                type: 2
                            }, v.FileIndex.push(F), v.FullPaths.push(L), S || de.utils.cfb_gc(v)
                        }
                        return F.content = g, F.size = g ? g.length : 0, w && (w.CLSID && (F.clsid = w.CLSID), w.mt && (F.mt = w.mt), w.ct && (F.ct = w.ct)), F
                    }
                    return t.find = function X(v, T) {
                        var g = v.FullPaths.map(function(M) {
                                return M.toUpperCase()
                            }),
                            w = g.map(function(M) {
                                var B = M.split("/");
                                return B[B.length - ("/" == M.slice(-1) ? 2 : 1)]
                            }),
                            S = !1;
                        47 === T.charCodeAt(0) ? (S = !0, T = g[0].slice(0, -1) + T) : S = -1 !== T.indexOf("/");
                        var F = T.toUpperCase(),
                            L = !0 === S ? g.indexOf(F) : w.indexOf(F);
                        if (-1 !== L) return v.FileIndex[L];
                        var z = !F.match(Aa);
                        for (F = F.replace(_r, ""), z && (F = F.replace(Aa, "!")), L = 0; L < g.length; ++L)
                            if ((z ? g[L].replace(Aa, "!") : g[L]).replace(_r, "") == F || (z ? w[L].replace(Aa, "!") : w[L]).replace(_r, "") == F) return v.FileIndex[L];
                        return null
                    }, t.read = function H(v, T) {
                        var g = T && T.type;
                        switch (g || Ae && Buffer.isBuffer(v) && (g = "buffer"), g || "base64") {
                            case "file":
                                return function P(v, T) {
                                    return o(), l(c.readFileSync(v), T)
                                }(v, T);
                            case "base64":
                                return l(Br(Lr(v)), T);
                            case "binary":
                                return l(Br(v), T)
                        }
                        return l(v, T)
                    }, t.parse = l, t.write = function ge(v, T) {
                        var g = V(v, T);
                        switch (T && T.type || "buffer") {
                            case "file":
                                return o(), c.writeFileSync(T.filename, g), g;
                            case "binary":
                                return "string" == typeof g ? g : oe(g);
                            case "base64":
                                return Fa("string" == typeof g ? g : oe(g));
                            case "buffer":
                                if (Ae) return Buffer.isBuffer(g) ? g : xt(g);
                            case "array":
                                return "string" == typeof g ? Br(g) : g
                        }
                        return g
                    }, t.writeFile = function De(v, T, g) {
                        o();
                        var w = V(v, g);
                        c.writeFileSync(T, w)
                    }, t.utils = {
                        cfb_new: function Ug(v) {
                            var T = {};
                            return C(T, v), T
                        },
                        cfb_add: fi,
                        cfb_del: function Wg(v, T) {
                            C(v);
                            var g = de.find(v, T);
                            if (g)
                                for (var w = 0; w < v.FileIndex.length; ++w)
                                    if (v.FileIndex[w] == g) return v.FileIndex.splice(w, 1), v.FullPaths.splice(w, 1), !0;
                            return !1
                        },
                        cfb_mov: function Hg(v, T, g) {
                            C(v);
                            var w = de.find(v, T);
                            if (w)
                                for (var S = 0; S < v.FileIndex.length; ++S)
                                    if (v.FileIndex[S] == w) return v.FileIndex[S].name = n(g), v.FullPaths[S] = g, !0;
                            return !1
                        },
                        cfb_gc: function Vg(v) {
                            R(v, !0)
                        },
                        ReadShift: Na,
                        CheckField: fs,
                        prep_blob: vr,
                        bconcat: lr,
                        use_zlib: function A(v) {
                            try {
                                var g = new(0, v.InflateRaw);
                                if (g._processChunk(new Uint8Array([3, 0]), g._finishFlushFlag), !g.bytesRead) throw new Error("zlib does not expose bytesRead");
                                J = v
                            } catch (w) {
                                console.error("cannot use native zlib: " + (w.message || w))
                            }
                        },
                        _deflateRaw: Ce,
                        _inflateRaw: Dc,
                        consts: he
                    }, t
                }();
            let Ct;

            function co(e) {
                return "string" == typeof e ? ya(e) : Array.isArray(e) ? function bc(e) {
                    if (typeof Uint8Array > "u") throw new Error("Unsupported");
                    return new Uint8Array(e)
                }(e) : e
            }

            function Oa(e, t, r) {
                if (typeof Ct < "u" && Ct.writeFileSync) return r ? Ct.writeFileSync(e, t, r) : Ct.writeFileSync(e, t);
                if (typeof Deno < "u") {
                    if (r && "string" == typeof t) switch (r) {
                        case "utf8":
                            t = new TextEncoder(r).encode(t);
                            break;
                        case "binary":
                            t = ya(t);
                            break;
                        default:
                            throw new Error("Unsupported encoding " + r)
                    }
                    return Deno.writeFileSync(e, t)
                }
                var a = "utf8" == r ? st(t) : t;
                if (typeof IE_SaveFile < "u") return IE_SaveFile(a, e);
                if (typeof Blob < "u") {
                    var n = new Blob([co(a)], {
                        type: "application/octet-stream"
                    });
                    if (typeof navigator < "u" && navigator.msSaveBlob) return navigator.msSaveBlob(n, e);
                    if (typeof saveAs < "u") return saveAs(n, e);
                    if (typeof URL < "u" && typeof document < "u" && document.createElement && URL.createObjectURL) {
                        var i = URL.createObjectURL(n);
                        if ("object" == typeof chrome && "function" == typeof(chrome.downloads || {}).download) return URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
                            URL.revokeObjectURL(i)
                        }, 6e4), chrome.downloads.download({
                            url: i,
                            filename: e,
                            saveAs: !0
                        });
                        var s = document.createElement("a");
                        if (null != s.download) return s.download = e, s.href = i, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
                            URL.revokeObjectURL(i)
                        }, 6e4), i
                    }
                }
                if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
                    var f = File(e);
                    return f.open("w"), f.encoding = "binary", Array.isArray(t) && (t = Ft(t)), f.write(t), f.close(), t
                } catch (c) {
                    if (!c.message || !c.message.match(/onstruct/)) throw c
                }
                throw new Error("cannot save file " + e)
            }

            function Ke(e) {
                for (var t = Object.keys(e), r = [], a = 0; a < t.length; ++a) Object.prototype.hasOwnProperty.call(e, t[a]) && r.push(t[a]);
                return r
            }

            function Ci(e, t) {
                for (var r = [], a = Ke(e), n = 0; n !== a.length; ++n) null == r[e[a[n]][t]] && (r[e[a[n]][t]] = a[n]);
                return r
            }

            function hn(e) {
                for (var t = [], r = Ke(e), a = 0; a !== r.length; ++a) t[e[r[a]]] = r[a];
                return t
            }

            function xn(e) {
                for (var t = [], r = Ke(e), a = 0; a !== r.length; ++a) t[e[r[a]]] = parseInt(r[a], 10);
                return t
            }
            var dn = new Date(1899, 11, 30, 0, 0, 0);

            function ur(e, t) {
                var r = e.getTime();
                return t && (r -= 1263168e5), (r - (dn.getTime() + 6e4 * (e.getTimezoneOffset() - dn.getTimezoneOffset()))) / 864e5
            }
            var Di = new Date,
                uo = dn.getTime() + 6e4 * (Di.getTimezoneOffset() - dn.getTimezoneOffset()),
                Oi = Di.getTimezoneOffset();

            function Yn(e) {
                var t = new Date;
                return t.setTime(24 * e * 60 * 60 * 1e3 + uo), t.getTimezoneOffset() !== Oi && t.setTime(t.getTime() + 6e4 * (t.getTimezoneOffset() - Oi)), t
            }
            var Ii = new Date("2017-02-19T19:06:09.000Z"),
                Ri = isNaN(Ii.getFullYear()) ? new Date("2/19/17") : Ii,
                xo = 2017 == Ri.getFullYear();

            function $e(e, t) {
                var r = new Date(e);
                if (xo) return t > 0 ? r.setTime(r.getTime() + 60 * r.getTimezoneOffset() * 1e3) : t < 0 && r.setTime(r.getTime() - 60 * r.getTimezoneOffset() * 1e3), r;
                if (e instanceof Date) return e;
                if (1917 == Ri.getFullYear() && !isNaN(r.getFullYear())) {
                    var a = r.getFullYear();
                    return e.indexOf("" + a) > -1 || r.setFullYear(r.getFullYear() + 100), r
                }
                var n = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"],
                    i = new Date(+n[0], +n[1] - 1, +n[2], +n[3] || 0, +n[4] || 0, +n[5] || 0);
                return e.indexOf("Z") > -1 && (i = new Date(i.getTime() - 60 * i.getTimezoneOffset() * 1e3)), i
            }

            function Xt(e, t) {
                if (Ae && Buffer.isBuffer(e)) {
                    if (t) {
                        if (255 == e[0] && 254 == e[1]) return st(e.slice(2).toString("utf16le"));
                        if (254 == e[1] && 255 == e[2]) return st(function cn(e) {
                            for (var t = [], r = 0; r < e.length >> 1; ++r) t[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
                            return t.join("")
                        }(e.slice(2).toString("binary")))
                    }
                    return e.toString("binary")
                }
                if (typeof TextDecoder < "u") try {
                    if (t) {
                        if (255 == e[0] && 254 == e[1]) return st(new TextDecoder("utf-16le").decode(e.slice(2)));
                        if (254 == e[0] && 255 == e[1]) return st(new TextDecoder("utf-16be").decode(e.slice(2)))
                    }
                    var r = {
                        "\u20ac": "\x80",
                        "\u201a": "\x82",
                        \u0192: "\x83",
                        "\u201e": "\x84",
                        "\u2026": "\x85",
                        "\u2020": "\x86",
                        "\u2021": "\x87",
                        \u02c6: "\x88",
                        "\u2030": "\x89",
                        \u0160: "\x8a",
                        "\u2039": "\x8b",
                        \u0152: "\x8c",
                        \u017d: "\x8e",
                        "\u2018": "\x91",
                        "\u2019": "\x92",
                        "\u201c": "\x93",
                        "\u201d": "\x94",
                        "\u2022": "\x95",
                        "\u2013": "\x96",
                        "\u2014": "\x97",
                        "\u02dc": "\x98",
                        "\u2122": "\x99",
                        \u0161: "\x9a",
                        "\u203a": "\x9b",
                        \u0153: "\x9c",
                        \u017e: "\x9e",
                        \u0178: "\x9f"
                    };
                    return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[\u20ac\u201a\u0192\u201e\u2026\u2020\u2021\u02c6\u2030\u0160\u2039\u0152\u017d\u2018\u2019\u201c\u201d\u2022\u2013\u2014\u02dc\u2122\u0161\u203a\u0153\u017e\u0178]/g, function(i) {
                        return r[i] || i
                    })
                } catch {}
                for (var a = [], n = 0; n != e.length; ++n) a.push(String.fromCharCode(e[n]));
                return a.join("")
            }

            function He(e) {
                if (typeof JSON < "u" && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
                if ("object" != typeof e || null == e) return e;
                if (e instanceof Date) return new Date(e.getTime());
                var t = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = He(e[r]));
                return t
            }

            function Ye(e, t) {
                for (var r = ""; r.length < t;) r += e;
                return r
            }

            function et(e) {
                var t = Number(e);
                if (!isNaN(t)) return isFinite(t) ? t : NaN;
                if (!/\d/.test(e)) return t;
                var r = 1,
                    a = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
                        return r *= 100, ""
                    });
                return isNaN(t = Number(a)) && (a = a.replace(/[(](.*)[)]/, function(n, i) {
                    return r = -r, i
                }), isNaN(t = Number(a))) ? t : t / r
            }
            var po = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

            function ha(e) {
                var t = new Date(e),
                    r = new Date(NaN),
                    a = t.getYear(),
                    n = t.getMonth(),
                    i = t.getDate();
                if (isNaN(i)) return r;
                var s = e.toLowerCase();
                if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
                    if ((s = s.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "")).length > 3 && -1 == po.indexOf(s)) return r
                } else if (s.match(/[a-z]/)) return r;
                return a < 0 || a > 8099 ? r : (n > 0 || i > 1) && 101 != a ? t : e.match(/[^-0-9:,\/\\]/) ? r : t
            }

            function Se(e, t, r) {
                if (e.FullPaths) {
                    var a;
                    if ("string" == typeof r) return a = Ae ? xt(r) : function Nc(e) {
                        for (var t = [], r = 0, a = e.length + 250, n = St(e.length + 255), i = 0; i < e.length; ++i) {
                            var s = e.charCodeAt(i);
                            if (s < 128) n[r++] = s;
                            else if (s < 2048) n[r++] = 192 | s >> 6 & 31, n[r++] = 128 | 63 & s;
                            else if (s >= 55296 && s < 57344) {
                                s = 64 + (1023 & s);
                                var f = 1023 & e.charCodeAt(++i);
                                n[r++] = 240 | s >> 8 & 7, n[r++] = 128 | s >> 2 & 63, n[r++] = 128 | f >> 6 & 15 | (3 & s) << 4, n[r++] = 128 | 63 & f
                            } else n[r++] = 224 | s >> 12 & 15, n[r++] = 128 | s >> 6 & 63, n[r++] = 128 | 63 & s;
                            r > a && (t.push(n.slice(0, r)), r = 0, n = St(65535), a = 65530)
                        }
                        return t.push(n.slice(0, r)), lr(t)
                    }(r), de.utils.cfb_add(e, t, a);
                    de.utils.cfb_add(e, t, r)
                } else e.file(t, r)
            }

            function Zn() {
                return de.utils.cfb_new()
            }
            var Je = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n',
                qn = hn({
                    "&quot;": '"',
                    "&apos;": "'",
                    "&gt;": ">",
                    "&lt;": "<",
                    "&amp;": "&"
                }),
                Qn = /[&<>'"]/g,
                To = /[\u0000-\u0008\u000b-\u001f]/g;

            function Me(e) {
                return (e + "").replace(Qn, function(r) {
                    return qn[r]
                }).replace(To, function(r) {
                    return "_x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + "_"
                })
            }

            function Ui(e) {
                return Me(e).replace(/ /g, "_x0020_")
            }
            var Wi = /[\u0000-\u001f]/g;

            function Hi(e) {
                return (e + "").replace(Qn, function(r) {
                    return qn[r]
                }).replace(/\n/g, "<br/>").replace(Wi, function(r) {
                    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";"
                })
            }

            function e0(e) {
                for (var t = "", r = 0, a = 0, n = 0, i = 0, s = 0, f = 0; r < e.length;)(a = e.charCodeAt(r++)) < 128 ? t += String.fromCharCode(a) : (n = e.charCodeAt(r++), a > 191 && a < 224 ? (s = (31 & a) << 6, s |= 63 & n, t += String.fromCharCode(s)) : (i = e.charCodeAt(r++), a < 240 ? t += String.fromCharCode((15 & a) << 12 | (63 & n) << 6 | 63 & i) : (f = ((7 & a) << 18 | (63 & n) << 12 | (63 & i) << 6 | 63 & (s = e.charCodeAt(r++))) - 65536, t += String.fromCharCode(55296 + (f >>> 10 & 1023)), t += String.fromCharCode(56320 + (1023 & f)))));
                return t
            }

            function Xi(e) {
                var r, a, f, t = St(2 * e.length),
                    n = 1,
                    i = 0,
                    s = 0;
                for (a = 0; a < e.length; a += n) n = 1, (f = e.charCodeAt(a)) < 128 ? r = f : f < 224 ? (r = 64 * (31 & f) + (63 & e.charCodeAt(a + 1)), n = 2) : f < 240 ? (r = 4096 * (15 & f) + 64 * (63 & e.charCodeAt(a + 1)) + (63 & e.charCodeAt(a + 2)), n = 3) : (n = 4, r = 262144 * (7 & f) + 4096 * (63 & e.charCodeAt(a + 1)) + 64 * (63 & e.charCodeAt(a + 2)) + (63 & e.charCodeAt(a + 3)), s = 55296 + ((r -= 65536) >>> 10 & 1023), r = 56320 + (1023 & r)), 0 !== s && (t[i++] = 255 & s, t[i++] = s >>> 8, s = 0), t[i++] = r % 256, t[i++] = r >>> 8;
                return t.slice(0, i).toString("ucs2")
            }

            function Gi(e) {
                return xt(e, "binary").toString("utf8")
            }
            var pn = "foo bar baz\xe2\x98\x83\xf0\x9f\x8d\xa3",
                Ve = Ae && (Gi(pn) == e0(pn) && Gi || Xi(pn) == e0(pn) && Xi) || e0,
                st = Ae ? function(e) {
                    return xt(e, "utf8").toString("binary")
                } : function(e) {
                    for (var t = [], r = 0, a = 0, n = 0; r < e.length;) switch (a = e.charCodeAt(r++), !0) {
                        case a < 128:
                            t.push(String.fromCharCode(a));
                            break;
                        case a < 2048:
                            t.push(String.fromCharCode(192 + (a >> 6))), t.push(String.fromCharCode(128 + (63 & a)));
                            break;
                        case a >= 55296 && a < 57344:
                            a -= 55296, n = e.charCodeAt(r++) - 56320 + (a << 10), t.push(String.fromCharCode(240 + (n >> 18 & 7))), t.push(String.fromCharCode(144 + (n >> 12 & 63))), t.push(String.fromCharCode(128 + (n >> 6 & 63))), t.push(String.fromCharCode(128 + (63 & n)));
                            break;
                        default:
                            t.push(String.fromCharCode(224 + (a >> 12))), t.push(String.fromCharCode(128 + (a >> 6 & 63))), t.push(String.fromCharCode(128 + (63 & a)))
                    }
                    return t.join("")
                },
                zi = function() {
                    var e = [
                        ["nbsp", " "],
                        ["middot", "\xb7"],
                        ["quot", '"'],
                        ["apos", "'"],
                        ["gt", ">"],
                        ["lt", "<"],
                        ["amp", "&"]
                    ].map(function(t) {
                        return [new RegExp("&" + t[0] + ";", "ig"), t[1]]
                    });
                    return function(r) {
                        for (var a = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, "\n").replace(/<[^>]*>/g, ""), n = 0; n < e.length; ++n) a = a.replace(e[n][0], e[n][1]);
                        return a
                    }
                }(),
                ji = /(^\s|\s$|\n)/;

            function mr(e, t) {
                return "<" + e + (t.match(ji) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e + ">"
            }

            function Ra(e) {
                return Ke(e).map(function(t) {
                    return " " + t + '="' + e[t] + '"'
                }).join("")
            }

            function q(e, t, r) {
                return "<" + e + (null != r ? Ra(r) : "") + (null != t ? (t.match(ji) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e : "/") + ">"
            }

            function r0(e, t) {
                try {
                    return e.toISOString().replace(/\.\d*/, "")
                } catch (r) {
                    if (t) throw r
                }
                return ""
            }
            var ir = {
                    CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
                    CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
                    EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
                    CT: "http://schemas.openxmlformats.org/package/2006/content-types",
                    RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
                    TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
                    dc: "http://purl.org/dc/elements/1.1/",
                    dcterms: "http://purl.org/dc/terms/",
                    dcmitype: "http://purl.org/dc/dcmitype/",
                    mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
                    r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
                    sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
                    vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
                    xsi: "http://www.w3.org/2001/XMLSchema-instance",
                    xsd: "http://www.w3.org/2001/XMLSchema"
                },
                Dt = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"],
                Wr = {
                    o: "urn:schemas-microsoft-com:office:office",
                    x: "urn:schemas-microsoft-com:office:excel",
                    ss: "urn:schemas-microsoft-com:office:spreadsheet",
                    dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
                    mv: "http://macVmlSchemaUri",
                    v: "urn:schemas-microsoft-com:vml",
                    html: "http://www.w3.org/TR/REC-html40"
                },
                Ki = function(e) {
                    for (var t = [], a = 0; a < e[0].length; ++a)
                        if (e[0][a])
                            for (var n = 0, i = e[0][a].length; n < i; n += 10240) t.push.apply(t, e[0][a].slice(n, n + 10240));
                    return t
                },
                Yi = Ae ? function(e) {
                    return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(t) {
                        return Buffer.isBuffer(t) ? t : xt(t)
                    })) : Ki(e)
                } : Ki,
                Ji = function(e, t, r) {
                    for (var a = [], n = t; n < r; n += 2) a.push(String.fromCharCode(pt(e, n)));
                    return a.join("").replace(_r, "")
                },
                mn = Ae ? function(e, t, r) {
                    return Buffer.isBuffer(e) ? e.toString("utf16le", t, r).replace(_r, "") : Ji(e, t, r)
                } : Ji,
                Zi = function(e, t, r) {
                    for (var a = [], n = t; n < t + r; ++n) a.push(("0" + e[n].toString(16)).slice(-2));
                    return a.join("")
                },
                qi = Ae ? function(e, t, r) {
                    return Buffer.isBuffer(e) ? e.toString("hex", t, t + r) : Zi(e, t, r)
                } : Zi,
                Qi = function(e, t, r) {
                    for (var a = [], n = t; n < r; n++) a.push(String.fromCharCode(da(e, n)));
                    return a.join("")
                },
                xa = Ae ? function(t, r, a) {
                    return Buffer.isBuffer(t) ? t.toString("utf8", r, a) : Qi(t, r, a)
                } : Qi,
                es = function(e, t) {
                    var r = hr(e, t);
                    return r > 0 ? xa(e, t + 4, t + 4 + r - 1) : ""
                },
                a0 = es,
                rs = function(e, t) {
                    var r = hr(e, t);
                    return r > 0 ? xa(e, t + 4, t + 4 + r - 1) : ""
                },
                n0 = rs,
                ts = function(e, t) {
                    var r = 2 * hr(e, t);
                    return r > 0 ? xa(e, t + 4, t + 4 + r - 1) : ""
                },
                i0 = ts,
                as = function(t, r) {
                    var a = hr(t, r);
                    return a > 0 ? mn(t, r + 4, r + 4 + a) : ""
                },
                s0 = as,
                ns = function(e, t) {
                    var r = hr(e, t);
                    return r > 0 ? xa(e, t + 4, t + 4 + r) : ""
                },
                f0 = ns,
                is = function(e, t) {
                    return function Io(e, t) {
                        for (var r = 1 - 2 * (e[t + 7] >>> 7), a = ((127 & e[t + 7]) << 4) + (e[t + 6] >>> 4 & 15), n = 15 & e[t + 6], i = 5; i >= 0; --i) n = 256 * n + e[t + i];
                        return 2047 == a ? 0 == n ? r * (1 / 0) : NaN : (0 == a ? a = -1022 : (a -= 1023, n += Math.pow(2, 52)), r * Math.pow(2, a - 52) * n)
                    }(e, t)
                },
                vn = is,
                c0 = function(t) {
                    return Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array
                };
            Ae && (a0 = function(t, r) {
                if (!Buffer.isBuffer(t)) return es(t, r);
                var a = t.readUInt32LE(r);
                return a > 0 ? t.toString("utf8", r + 4, r + 4 + a - 1) : ""
            }, n0 = function(t, r) {
                if (!Buffer.isBuffer(t)) return rs(t, r);
                var a = t.readUInt32LE(r);
                return a > 0 ? t.toString("utf8", r + 4, r + 4 + a - 1) : ""
            }, i0 = function(t, r) {
                if (!Buffer.isBuffer(t)) return ts(t, r);
                var a = 2 * t.readUInt32LE(r);
                return t.toString("utf16le", r + 4, r + 4 + a - 1)
            }, s0 = function(t, r) {
                if (!Buffer.isBuffer(t)) return as(t, r);
                var a = t.readUInt32LE(r);
                return t.toString("utf16le", r + 4, r + 4 + a)
            }, f0 = function(t, r) {
                if (!Buffer.isBuffer(t)) return ns(t, r);
                var a = t.readUInt32LE(r);
                return t.toString("utf8", r + 4, r + 4 + a)
            }, vn = function(t, r) {
                return Buffer.isBuffer(t) ? t.readDoubleLE(r) : is(t, r)
            }, c0 = function(t) {
                return Buffer.isBuffer(t) || Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array
            }), typeof ke < "u" && function ss() {
                mn = function(e, t, r) {
                    return ke.utils.decode(1200, e.slice(t, r)).replace(_r, "")
                }, xa = function(e, t, r) {
                    return ke.utils.decode(65001, e.slice(t, r))
                }, a0 = function(e, t) {
                    var r = hr(e, t);
                    return r > 0 ? ke.utils.decode(qr, e.slice(t + 4, t + 4 + r - 1)) : ""
                }, n0 = function(e, t) {
                    var r = hr(e, t);
                    return r > 0 ? ke.utils.decode(gr, e.slice(t + 4, t + 4 + r - 1)) : ""
                }, i0 = function(e, t) {
                    var r = 2 * hr(e, t);
                    return r > 0 ? ke.utils.decode(1200, e.slice(t + 4, t + 4 + r - 1)) : ""
                }, s0 = function(e, t) {
                    var r = hr(e, t);
                    return r > 0 ? ke.utils.decode(1200, e.slice(t + 4, t + 4 + r)) : ""
                }, f0 = function(e, t) {
                    var r = hr(e, t);
                    return r > 0 ? ke.utils.decode(65001, e.slice(t + 4, t + 4 + r)) : ""
                }
            }();
            var da = function(e, t) {
                    return e[t]
                },
                pt = function(e, t) {
                    return 256 * e[t + 1] + e[t]
                },
                bo = function(e, t) {
                    var r = 256 * e[t + 1] + e[t];
                    return r < 32768 ? r : -1 * (65535 - r + 1)
                },
                hr = function(e, t) {
                    return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t]
                },
                Gt = function(e, t) {
                    return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
                },
                No = function(e, t) {
                    return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
                };

            function Na(e, t) {
                var a, n, s, f, c, o, r = "",
                    i = [];
                switch (t) {
                    case "dbcs":
                        if (o = this.l, Ae && Buffer.isBuffer(this)) r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
                        else
                            for (c = 0; c < e; ++c) r += String.fromCharCode(pt(this, o)), o += 2;
                        e *= 2;
                        break;
                    case "utf8":
                        r = xa(this, this.l, this.l + e);
                        break;
                    case "utf16le":
                        r = mn(this, this.l, this.l + (e *= 2));
                        break;
                    case "wstr":
                        if (!(typeof ke < "u")) return Na.call(this, e, "dbcs");
                        r = ke.utils.decode(gr, this.slice(this.l, this.l + 2 * e)), e *= 2;
                        break;
                    case "lpstr-ansi":
                        r = a0(this, this.l), e = 4 + hr(this, this.l);
                        break;
                    case "lpstr-cp":
                        r = n0(this, this.l), e = 4 + hr(this, this.l);
                        break;
                    case "lpwstr":
                        r = i0(this, this.l), e = 4 + 2 * hr(this, this.l);
                        break;
                    case "lpp4":
                        e = 4 + hr(this, this.l), r = s0(this, this.l), 2 & e && (e += 2);
                        break;
                    case "8lpp4":
                        e = 4 + hr(this, this.l), r = f0(this, this.l), 3 & e && (e += 4 - (3 & e));
                        break;
                    case "cstr":
                        for (e = 0, r = ""; 0 !== (s = da(this, this.l + e++));) i.push(Ht(s));
                        r = i.join("");
                        break;
                    case "_wstr":
                        for (e = 0, r = ""; 0 !== (s = pt(this, this.l + e));) i.push(Ht(s)), e += 2;
                        e += 2, r = i.join("");
                        break;
                    case "dbcs-cont":
                        for (r = "", o = this.l, c = 0; c < e; ++c) {
                            if (this.lens && -1 !== this.lens.indexOf(o)) return s = da(this, o), this.l = o + 1, f = Na.call(this, e - c, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
                            i.push(Ht(pt(this, o))), o += 2
                        }
                        r = i.join(""), e *= 2;
                        break;
                    case "cpstr":
                        if (typeof ke < "u") {
                            r = ke.utils.decode(gr, this.slice(this.l, this.l + e));
                            break
                        }
                    case "sbcs-cont":
                        for (r = "", o = this.l, c = 0; c != e; ++c) {
                            if (this.lens && -1 !== this.lens.indexOf(o)) return s = da(this, o), this.l = o + 1, f = Na.call(this, e - c, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
                            i.push(Ht(da(this, o))), o += 1
                        }
                        r = i.join("");
                        break;
                    default:
                        switch (e) {
                            case 1:
                                return a = da(this, this.l), this.l++, a;
                            case 2:
                                return a = ("i" === t ? bo : pt)(this, this.l), this.l += 2, a;
                            case 4:
                            case -4:
                                return "i" !== t && 128 & this[this.l + 3] ? (n = hr(this, this.l), this.l += 4, n) : (a = (e > 0 ? Gt : No)(this, this.l), this.l += 4, a);
                            case 8:
                            case -8:
                                if ("f" === t) return n = 8 == e ? vn(this, this.l) : vn([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, n;
                                e = 8;
                            case 16:
                                r = qi(this, this.l, e)
                        }
                }
                return this.l += e, r
            }
            var Po = function(e, t, r) {
                    e[r] = 255 & t, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24 & 255
                },
                Lo = function(e, t, r) {
                    e[r] = 255 & t, e[r + 1] = t >> 8 & 255, e[r + 2] = t >> 16 & 255, e[r + 3] = t >> 24 & 255
                },
                Bo = function(e, t, r) {
                    e[r] = 255 & t, e[r + 1] = t >>> 8 & 255
                };

            function Mo(e, t, r) {
                var a = 0,
                    n = 0;
                if ("dbcs" === r) {
                    for (n = 0; n != t.length; ++n) Bo(this, t.charCodeAt(n), this.l + 2 * n);
                    a = 2 * t.length
                } else if ("sbcs" === r) {
                    if (typeof ke < "u" && 874 == qr)
                        for (n = 0; n != t.length; ++n) {
                            var i = ke.utils.encode(qr, t.charAt(n));
                            this[this.l + n] = i[0]
                        } else
                            for (t = t.replace(/[^\x00-\x7F]/g, "_"), n = 0; n != t.length; ++n) this[this.l + n] = 255 & t.charCodeAt(n);
                    a = t.length
                } else {
                    if ("hex" === r) {
                        for (; n < e; ++n) this[this.l++] = parseInt(t.slice(2 * n, 2 * n + 2), 16) || 0;
                        return this
                    }
                    if ("utf16le" === r) {
                        var s = Math.min(this.l + e, this.length);
                        for (n = 0; n < Math.min(t.length, e); ++n) {
                            var f = t.charCodeAt(n);
                            this[this.l++] = 255 & f, this[this.l++] = f >> 8
                        }
                        for (; this.l < s;) this[this.l++] = 0;
                        return this
                    }
                    switch (e) {
                        case 1:
                            a = 1, this[this.l] = 255 & t;
                            break;
                        case 2:
                            a = 2, this[this.l] = 255 & t, this[this.l + 1] = 255 & (t >>>= 8);
                            break;
                        case 3:
                            a = 3, this[this.l] = 255 & t, this[this.l + 1] = 255 & (t >>>= 8), this[this.l + 2] = 255 & (t >>>= 8);
                            break;
                        case 4:
                            a = 4, Po(this, t, this.l);
                            break;
                        case 8:
                            if (a = 8, "f" === r) {
                                ! function Ro(e, t, r) {
                                    var a = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7,
                                        n = 0,
                                        i = 0,
                                        s = a ? -t : t;
                                    isFinite(s) ? 0 == s ? n = i = 0 : (n = Math.floor(Math.log(s) / Math.LN2), i = s * Math.pow(2, 52 - n), n <= -1023 && (!isFinite(i) || i < Math.pow(2, 52)) ? n = -1022 : (i -= Math.pow(2, 52), n += 1023)) : (n = 2047, i = isNaN(t) ? 26985 : 0);
                                    for (var f = 0; f <= 5; ++f, i /= 256) e[r + f] = 255 & i;
                                    e[r + 6] = (15 & n) << 4 | 15 & i, e[r + 7] = n >> 4 | a
                                }(this, t, this.l);
                                break
                            }
                        case 16:
                            break;
                        case -4:
                            a = 4, Lo(this, t, this.l)
                    }
                }
                return this.l += a, this
            }

            function fs(e, t) {
                var r = qi(this, this.l, e.length >> 1);
                if (r !== e) throw new Error(t + "Expected " + e + " saw " + r);
                this.l += e.length >> 1
            }

            function vr(e, t) {
                e.l = t, e.read_shift = Na, e.chk = fs, e.write_shift = Mo
            }

            function kr(e, t) {
                e.l += t
            }

            function G(e) {
                var t = St(e);
                return vr(t, 0), t
            }

            function Dr() {
                var e = [],
                    t = Ae ? 256 : 2048,
                    r = function(o) {
                        var l = G(o);
                        return vr(l, 0), l
                    },
                    a = r(t),
                    n = function() {
                        a && (a.length > a.l && ((a = a.slice(0, a.l)).l = a.length), a.length > 0 && e.push(a), a = null)
                    },
                    i = function(o) {
                        return a && o < a.length - a.l ? a : (n(), a = r(Math.max(o + 1, t)))
                    };
                return {
                    next: i,
                    push: function(o) {
                        n(), null == (a = o).l && (a.l = a.length), i(t)
                    },
                    end: function() {
                        return n(), lr(e)
                    },
                    _bufs: e
                }
            }

            function K(e, t, r, a) {
                var i, n = +t;
                if (!isNaN(n)) {
                    a || (a = qa[n].p || (r || []).length || 0), i = 1 + (n >= 128 ? 1 : 0) + 1, a >= 128 && ++i, a >= 16384 && ++i, a >= 2097152 && ++i;
                    var s = e.next(i);
                    n <= 127 ? s.write_shift(1, n) : (s.write_shift(1, 128 + (127 & n)), s.write_shift(1, n >> 7));
                    for (var f = 0; 4 != f; ++f) {
                        if (!(a >= 128)) {
                            s.write_shift(1, a);
                            break
                        }
                        s.write_shift(1, 128 + (127 & a)), a >>= 7
                    }
                    a > 0 && c0(r) && e.push(r)
                }
            }

            function Pa(e, t, r) {
                var a = He(e);
                if (t.s ? (a.cRel && (a.c += t.s.c), a.rRel && (a.r += t.s.r)) : (a.cRel && (a.c += t.c), a.rRel && (a.r += t.r)), !r || r.biff < 12) {
                    for (; a.c >= 256;) a.c -= 256;
                    for (; a.r >= 65536;) a.r -= 65536
                }
                return a
            }

            function cs(e, t, r) {
                var a = He(e);
                return a.s = Pa(a.s, t.s, r), a.e = Pa(a.e, t.s, r), a
            }

            function La(e, t) {
                if (e.cRel && e.c < 0)
                    for (e = He(e); e.c < 0;) e.c += t > 8 ? 16384 : 256;
                if (e.rRel && e.r < 0)
                    for (e = He(e); e.r < 0;) e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
                var r = ve(e);
                return !e.cRel && null != e.cRel && (r = function Ho(e) {
                    return e.replace(/^([A-Z])/, "$$$1")
                }(r)), !e.rRel && null != e.rRel && (r = function Uo(e) {
                    return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2")
                }(r)), r
            }

            function o0(e, t) {
                return 0 != e.s.r || e.s.rRel || e.e.r != (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) || e.e.rRel ? 0 != e.s.c || e.s.cRel || e.e.c != (t.biff >= 12 ? 16383 : 255) || e.e.cRel ? La(e.s, t.biff) + ":" + La(e.e, t.biff) : (e.s.rRel ? "" : "$") + Ze(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Ze(e.e.r) : (e.s.cRel ? "" : "$") + Xe(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Xe(e.e.c)
            }

            function l0(e) {
                return parseInt(function Wo(e) {
                    return e.replace(/\$(\d+)$/, "$1")
                }(e), 10) - 1
            }

            function Ze(e) {
                return "" + (e + 1)
            }

            function u0(e) {
                for (var t = function Vo(e) {
                        return e.replace(/^\$([A-Z])/, "$1")
                    }(e), r = 0, a = 0; a !== t.length; ++a) r = 26 * r + t.charCodeAt(a) - 64;
                return r - 1
            }

            function Xe(e) {
                if (e < 0) throw new Error("invalid column " + e);
                var t = "";
                for (++e; e; e = Math.floor((e - 1) / 26)) t = String.fromCharCode((e - 1) % 26 + 65) + t;
                return t
            }

            function er(e) {
                for (var t = 0, r = 0, a = 0; a < e.length; ++a) {
                    var n = e.charCodeAt(a);
                    n >= 48 && n <= 57 ? t = 10 * t + (n - 48) : n >= 65 && n <= 90 && (r = 26 * r + (n - 64))
                }
                return {
                    c: r - 1,
                    r: t - 1
                }
            }

            function ve(e) {
                for (var t = e.c + 1, r = ""; t; t = (t - 1) / 26 | 0) r = String.fromCharCode((t - 1) % 26 + 65) + r;
                return r + (e.r + 1)
            }

            function Or(e) {
                var t = e.indexOf(":");
                return -1 == t ? {
                    s: er(e),
                    e: er(e)
                } : {
                    s: er(e.slice(0, t)),
                    e: er(e.slice(t + 1))
                }
            }

            function Ee(e, t) {
                return typeof t > "u" || "number" == typeof t ? Ee(e.s, e.e) : ("string" != typeof e && (e = ve(e)), "string" != typeof t && (t = ve(t)), e == t ? e : e + ":" + t)
            }

            function Re(e) {
                var t = {
                        s: {
                            c: 0,
                            r: 0
                        },
                        e: {
                            c: 0,
                            r: 0
                        }
                    },
                    r = 0,
                    a = 0,
                    n = 0,
                    i = e.length;
                for (r = 0; a < i && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a) r = 26 * r + n;
                for (t.s.c = --r, r = 0; a < i && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a) r = 10 * r + n;
                if (t.s.r = --r, a === i || 10 != n) return t.e.c = t.s.c, t.e.r = t.s.r, t;
                for (++a, r = 0; a != i && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a) r = 26 * r + n;
                for (t.e.c = --r, r = 0; a != i && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a) r = 10 * r + n;
                return t.e.r = --r, t
            }

            function ft(e, t, r) {
                return null == e || null == e.t || "z" == e.t ? "" : void 0 !== e.w ? e.w : ("d" == e.t && !e.z && r && r.dateNF && (e.z = r.dateNF), "e" == e.t ? vt[e.v] || e.v : function os(e, t) {
                    var r = "d" == e.t && t instanceof Date;
                    if (null != e.z) try {
                        return e.w = Mr(e.z, r ? ur(t) : t)
                    } catch {}
                    try {
                        return e.w = Mr((e.XF || {}).numFmtId || (r ? 14 : 0), r ? ur(t) : t)
                    } catch {
                        return "" + t
                    }
                }(e, null == t ? e.v : t))
            }

            function Ot(e, t) {
                var r = t && t.sheet ? t.sheet : "Sheet1",
                    a = {};
                return a[r] = e, {
                    SheetNames: [r],
                    Sheets: a
                }
            }

            function ls(e, t, r) {
                var a = r || {},
                    n = e ? Array.isArray(e) : a.dense;
                null != Fe && null == n && (n = Fe);
                var i = e || (n ? [] : {}),
                    s = 0,
                    f = 0;
                if (i && null != a.origin) {
                    if ("number" == typeof a.origin) s = a.origin;
                    else {
                        var c = "string" == typeof a.origin ? er(a.origin) : a.origin;
                        s = c.r, f = c.c
                    }
                    i["!ref"] || (i["!ref"] = "A1:A1")
                }
                var o = {
                    s: {
                        c: 1e7,
                        r: 1e7
                    },
                    e: {
                        c: 0,
                        r: 0
                    }
                };
                if (i["!ref"]) {
                    var l = Re(i["!ref"]);
                    o.s.c = l.s.c, o.s.r = l.s.r, o.e.c = Math.max(o.e.c, l.e.c), o.e.r = Math.max(o.e.r, l.e.r), -1 == s && (o.e.r = s = l.e.r + 1)
                }
                for (var h = 0; h != t.length; ++h)
                    if (t[h]) {
                        if (!Array.isArray(t[h])) throw new Error("aoa_to_sheet expects an array of arrays");
                        for (var x = 0; x != t[h].length; ++x)
                            if (!(typeof t[h][x] > "u")) {
                                var d = {
                                        v: t[h][x]
                                    },
                                    p = s + h,
                                    u = f + x;
                                if (o.s.r > p && (o.s.r = p), o.s.c > u && (o.s.c = u), o.e.r < p && (o.e.r = p), o.e.c < u && (o.e.c = u), !t[h][x] || "object" != typeof t[h][x] || Array.isArray(t[h][x]) || t[h][x] instanceof Date)
                                    if (Array.isArray(d.v) && (d.f = t[h][x][1], d.v = d.v[0]), null === d.v)
                                        if (d.f) d.t = "n";
                                        else if (a.nullError) d.t = "e", d.v = 0;
                                else {
                                    if (!a.sheetStubs) continue;
                                    d.t = "z"
                                } else "number" == typeof d.v ? d.t = "n" : "boolean" == typeof d.v ? d.t = "b" : d.v instanceof Date ? (d.z = a.dateNF || pe[14], a.cellDates ? (d.t = "d", d.w = Mr(d.z, ur(d.v))) : (d.t = "n", d.v = ur(d.v), d.w = Mr(d.z, d.v))) : d.t = "s";
                                else d = t[h][x];
                                if (n) i[p] || (i[p] = []), i[p][u] && i[p][u].z && (d.z = i[p][u].z), i[p][u] = d;
                                else {
                                    var m = ve({
                                        c: u,
                                        r: p
                                    });
                                    i[m] && i[m].z && (d.z = i[m].z), i[m] = d
                                }
                            }
                    }
                return o.s.c < 1e7 && (i["!ref"] = Ee(o)), i
            }

            function pa(e, t) {
                return ls(null, e, t)
            }

            function rt(e, t) {
                return t || (t = G(4)), t.write_shift(4, e), t
            }

            function Er(e) {
                var t = e.read_shift(4);
                return 0 === t ? "" : e.read_shift(t, "dbcs")
            }

            function xr(e, t) {
                var r = !1;
                return null == t && (r = !0, t = G(4 + 2 * e.length)), t.write_shift(4, e.length), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t
            }

            function zo(e) {
                return {
                    ich: e.read_shift(2),
                    ifnt: e.read_shift(2)
                }
            }

            function h0(e, t) {
                var r = e.l,
                    a = e.read_shift(1),
                    n = Er(e),
                    i = [],
                    s = {
                        t: n,
                        h: n
                    };
                if (1 & a) {
                    for (var f = e.read_shift(4), c = 0; c != f; ++c) i.push(zo(e));
                    s.r = i
                } else s.r = [{
                    ich: 0,
                    ifnt: 0
                }];
                return e.l = r + t, s
            }
            var Ko = h0;

            function zr(e) {
                var t = e.read_shift(4),
                    r = e.read_shift(2);
                return r += e.read_shift(1) << 16, e.l++, {
                    c: t,
                    iStyleRef: r
                }
            }

            function zt(e, t) {
                return null == t && (t = G(8)), t.write_shift(-4, e.c), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t
            }

            function $t(e) {
                var t = e.read_shift(2);
                return t += e.read_shift(1) << 16, e.l++, {
                    c: -1,
                    iStyleRef: t
                }
            }

            function jt(e, t) {
                return null == t && (t = G(4)), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t
            }
            var Jo = Er,
                us = xr;

            function x0(e) {
                var t = e.read_shift(4);
                return 0 === t || 4294967295 === t ? "" : e.read_shift(t, "dbcs")
            }

            function gn(e, t) {
                var r = !1;
                return null == t && (r = !0, t = G(127)), t.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t
            }
            var Zo = Er,
                d0 = x0,
                p0 = gn;

            function m0(e) {
                var t = e.slice(e.l, e.l + 4),
                    r = 1 & t[0],
                    a = 2 & t[0];
                e.l += 4;
                var n = 0 === a ? vn([0, 0, 0, 0, 252 & t[0], t[1], t[2], t[3]], 0) : Gt(t, 0) >> 2;
                return r ? n / 100 : n
            }

            function hs(e, t) {
                null == t && (t = G(4));
                var r = 0,
                    a = 0,
                    n = 100 * e;
                if (e == (0 | e) && e >= -(1 << 29) && e < 1 << 29 ? a = 1 : n == (0 | n) && n >= -(1 << 29) && n < 1 << 29 && (a = 1, r = 1), !a) throw new Error("unsupported RkNumber " + e);
                t.write_shift(-4, ((r ? n : e) << 2) + (r + 2))
            }

            function xs(e) {
                var t = {
                    s: {},
                    e: {}
                };
                return t.s.r = e.read_shift(4), t.e.r = e.read_shift(4), t.s.c = e.read_shift(4), t.e.c = e.read_shift(4), t
            }
            var Kt = xs,
                ma = function qo(e, t) {
                    return t || (t = G(16)), t.write_shift(4, e.s.r), t.write_shift(4, e.e.r), t.write_shift(4, e.s.c), t.write_shift(4, e.e.c), t
                };

            function Tr(e) {
                if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
                return e.read_shift(8, "f")
            }

            function Yt(e, t) {
                return (t || G(8)).write_shift(8, e, "f")
            }

            function _n(e, t) {
                if (t || (t = G(8)), !e || e.auto) return t.write_shift(4, 0), t.write_shift(4, 0), t;
                null != e.index ? (t.write_shift(1, 2), t.write_shift(1, e.index)) : null != e.theme ? (t.write_shift(1, 6), t.write_shift(1, e.theme)) : (t.write_shift(1, 5), t.write_shift(1, 0));
                var r = e.tint || 0;
                if (r > 0 ? r *= 32767 : r < 0 && (r *= 32768), t.write_shift(2, r), e.rgb && null == e.theme) {
                    var a = e.rgb || "FFFFFF";
                    "number" == typeof a && (a = ("000000" + a.toString(16)).slice(-6)), t.write_shift(1, parseInt(a.slice(0, 2), 16)), t.write_shift(1, parseInt(a.slice(2, 4), 16)), t.write_shift(1, parseInt(a.slice(4, 6), 16)), t.write_shift(1, 255)
                } else t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
                return t
            }
            var g0 = {
                    1: {
                        n: "CodePage",
                        t: 2
                    },
                    2: {
                        n: "Category",
                        t: 80
                    },
                    3: {
                        n: "PresentationFormat",
                        t: 80
                    },
                    4: {
                        n: "ByteCount",
                        t: 3
                    },
                    5: {
                        n: "LineCount",
                        t: 3
                    },
                    6: {
                        n: "ParagraphCount",
                        t: 3
                    },
                    7: {
                        n: "SlideCount",
                        t: 3
                    },
                    8: {
                        n: "NoteCount",
                        t: 3
                    },
                    9: {
                        n: "HiddenCount",
                        t: 3
                    },
                    10: {
                        n: "MultimediaClipCount",
                        t: 3
                    },
                    11: {
                        n: "ScaleCrop",
                        t: 11
                    },
                    12: {
                        n: "HeadingPairs",
                        t: 4108
                    },
                    13: {
                        n: "TitlesOfParts",
                        t: 4126
                    },
                    14: {
                        n: "Manager",
                        t: 80
                    },
                    15: {
                        n: "Company",
                        t: 80
                    },
                    16: {
                        n: "LinksUpToDate",
                        t: 11
                    },
                    17: {
                        n: "CharacterCount",
                        t: 3
                    },
                    19: {
                        n: "SharedDoc",
                        t: 11
                    },
                    22: {
                        n: "HyperlinksChanged",
                        t: 11
                    },
                    23: {
                        n: "AppVersion",
                        t: 3,
                        p: "version"
                    },
                    24: {
                        n: "DigSig",
                        t: 65
                    },
                    26: {
                        n: "ContentType",
                        t: 80
                    },
                    27: {
                        n: "ContentStatus",
                        t: 80
                    },
                    28: {
                        n: "Language",
                        t: 80
                    },
                    29: {
                        n: "Version",
                        t: 80
                    },
                    255: {},
                    2147483648: {
                        n: "Locale",
                        t: 19
                    },
                    2147483651: {
                        n: "Behavior",
                        t: 19
                    },
                    1919054434: {}
                },
                _0 = {
                    1: {
                        n: "CodePage",
                        t: 2
                    },
                    2: {
                        n: "Title",
                        t: 80
                    },
                    3: {
                        n: "Subject",
                        t: 80
                    },
                    4: {
                        n: "Author",
                        t: 80
                    },
                    5: {
                        n: "Keywords",
                        t: 80
                    },
                    6: {
                        n: "Comments",
                        t: 80
                    },
                    7: {
                        n: "Template",
                        t: 80
                    },
                    8: {
                        n: "LastAuthor",
                        t: 80
                    },
                    9: {
                        n: "RevNumber",
                        t: 80
                    },
                    10: {
                        n: "EditTime",
                        t: 64
                    },
                    11: {
                        n: "LastPrinted",
                        t: 64
                    },
                    12: {
                        n: "CreatedDate",
                        t: 64
                    },
                    13: {
                        n: "ModifiedDate",
                        t: 64
                    },
                    14: {
                        n: "PageCount",
                        t: 3
                    },
                    15: {
                        n: "WordCount",
                        t: 3
                    },
                    16: {
                        n: "CharCount",
                        t: 3
                    },
                    17: {
                        n: "Thumbnail",
                        t: 71
                    },
                    18: {
                        n: "Application",
                        t: 80
                    },
                    19: {
                        n: "DocSecurity",
                        t: 3
                    },
                    255: {},
                    2147483648: {
                        n: "Locale",
                        t: 19
                    },
                    2147483651: {
                        n: "Behavior",
                        t: 19
                    },
                    1919054434: {}
                };

            function ll(e) {
                return e.map(function(t) {
                    return [t >> 16 & 255, t >> 8 & 255, 255 & t]
                })
            }
            var Jt = He(ll([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                vt = {
                    0: "#NULL!",
                    7: "#DIV/0!",
                    15: "#VALUE!",
                    23: "#REF!",
                    29: "#NAME?",
                    36: "#NUM!",
                    42: "#N/A",
                    43: "#GETTING_DATA",
                    255: "#WTF?"
                },
                w0 = {
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
                    "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
                    "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
                    "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
                    "application/vnd.ms-excel.worksheet": "sheets",
                    "application/vnd.ms-excel.binIndexWs": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
                    "application/vnd.ms-excel.chartsheet": "charts",
                    "application/vnd.ms-excel.macrosheet+xml": "macros",
                    "application/vnd.ms-excel.macrosheet": "macros",
                    "application/vnd.ms-excel.intlmacrosheet": "TODO",
                    "application/vnd.ms-excel.binIndexMs": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
                    "application/vnd.ms-excel.dialogsheet": "dialogs",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
                    "application/vnd.ms-excel.sharedStrings": "strs",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
                    "application/vnd.ms-excel.styles": "styles",
                    "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
                    "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
                    "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
                    "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
                    "application/vnd.ms-excel.comments": "comments",
                    "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
                    "application/vnd.ms-excel.person+xml": "people",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
                    "application/vnd.ms-excel.sheetMetadata": "metadata",
                    "application/vnd.ms-excel.pivotTable": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
                    "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
                    "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
                    "application/vnd.ms-office.chartstyle+xml": "TODO",
                    "application/vnd.ms-office.chartex+xml": "TODO",
                    "application/vnd.ms-excel.calcChain": "calcchains",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
                    "application/vnd.ms-office.activeX": "TODO",
                    "application/vnd.ms-office.activeX+xml": "TODO",
                    "application/vnd.ms-excel.attachedToolbars": "TODO",
                    "application/vnd.ms-excel.connections": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
                    "application/vnd.ms-excel.externalLink": "links",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
                    "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
                    "application/vnd.ms-excel.pivotCacheRecords": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
                    "application/vnd.ms-excel.queryTable": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
                    "application/vnd.ms-excel.userNames": "TODO",
                    "application/vnd.ms-excel.revisionHeaders": "TODO",
                    "application/vnd.ms-excel.revisionLog": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
                    "application/vnd.ms-excel.tableSingleCells": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
                    "application/vnd.ms-excel.slicer": "TODO",
                    "application/vnd.ms-excel.slicerCache": "TODO",
                    "application/vnd.ms-excel.slicer+xml": "TODO",
                    "application/vnd.ms-excel.slicerCache+xml": "TODO",
                    "application/vnd.ms-excel.wsSortMap": "TODO",
                    "application/vnd.ms-excel.table": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
                    "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
                    "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
                    "application/vnd.ms-excel.Timeline+xml": "TODO",
                    "application/vnd.ms-excel.TimelineCache+xml": "TODO",
                    "application/vnd.ms-office.vbaProject": "vba",
                    "application/vnd.ms-office.vbaProjectSignature": "TODO",
                    "application/vnd.ms-office.volatileDependencies": "TODO",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
                    "application/vnd.ms-excel.controlproperties+xml": "TODO",
                    "application/vnd.openxmlformats-officedocument.model+data": "TODO",
                    "application/vnd.ms-excel.Survey+xml": "TODO",
                    "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
                    "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
                    "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
                    "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
                    "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
                    "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
                    "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
                    "application/vnd.openxmlformats-package.relationships+xml": "rels",
                    "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
                    "image/png": "TODO",
                    sheet: "js"
                },
                Tn = {
                    workbooks: {
                        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
                        xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
                        xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
                        xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
                        xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
                    },
                    strs: {
                        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
                        xlsb: "application/vnd.ms-excel.sharedStrings"
                    },
                    comments: {
                        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
                        xlsb: "application/vnd.ms-excel.comments"
                    },
                    sheets: {
                        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
                        xlsb: "application/vnd.ms-excel.worksheet"
                    },
                    charts: {
                        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
                        xlsb: "application/vnd.ms-excel.chartsheet"
                    },
                    dialogs: {
                        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
                        xlsb: "application/vnd.ms-excel.dialogsheet"
                    },
                    macros: {
                        xlsx: "application/vnd.ms-excel.macrosheet+xml",
                        xlsb: "application/vnd.ms-excel.macrosheet"
                    },
                    metadata: {
                        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
                        xlsb: "application/vnd.ms-excel.sheetMetadata"
                    },
                    styles: {
                        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
                        xlsb: "application/vnd.ms-excel.styles"
                    }
                };

            function gs(e, t) {
                var n, r = function lo(e) {
                        for (var t = [], r = Ke(e), a = 0; a !== r.length; ++a) null == t[e[r[a]]] && (t[e[r[a]]] = []), t[e[r[a]]].push(r[a]);
                        return t
                    }(w0),
                    a = [];
                a[a.length] = Je, a[a.length] = q("Types", null, {
                    xmlns: ir.CT,
                    "xmlns:xsd": ir.xsd,
                    "xmlns:xsi": ir.xsi
                }), a = a.concat([
                    ["xml", "application/xml"],
                    ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
                    ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
                    ["data", "application/vnd.openxmlformats-officedocument.model+data"],
                    ["bmp", "image/bmp"],
                    ["png", "image/png"],
                    ["gif", "image/gif"],
                    ["emf", "image/x-emf"],
                    ["wmf", "image/x-wmf"],
                    ["jpg", "image/jpeg"],
                    ["jpeg", "image/jpeg"],
                    ["tif", "image/tiff"],
                    ["tiff", "image/tiff"],
                    ["pdf", "application/pdf"],
                    ["rels", "application/vnd.openxmlformats-package.relationships+xml"]
                ].map(function(c) {
                    return q("Default", null, {
                        Extension: c[0],
                        ContentType: c[1]
                    })
                }));
                var i = function(c) {
                        e[c] && e[c].length > 0 && (a[a.length] = q("Override", null, {
                            PartName: ("/" == (n = e[c][0])[0] ? "" : "/") + n,
                            ContentType: Tn[c][t.bookType] || Tn[c].xlsx
                        }))
                    },
                    s = function(c) {
                        (e[c] || []).forEach(function(o) {
                            a[a.length] = q("Override", null, {
                                PartName: ("/" == o[0] ? "" : "/") + o,
                                ContentType: Tn[c][t.bookType] || Tn[c].xlsx
                            })
                        })
                    },
                    f = function(c) {
                        (e[c] || []).forEach(function(o) {
                            a[a.length] = q("Override", null, {
                                PartName: ("/" == o[0] ? "" : "/") + o,
                                ContentType: r[c][0]
                            })
                        })
                    };
                return i("workbooks"), s("sheets"), s("charts"), f("themes"), ["strs", "styles"].forEach(i), ["coreprops", "extprops", "custprops"].forEach(f), f("vba"), f("comments"), f("threadedcomments"), f("drawings"), s("metadata"), f("people"), a.length > 2 && (a[a.length] = "</Types>", a[1] = a[1].replace("/>", ">")), a.join("")
            }
            var Te = {
                WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
                SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
                HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
                VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
                XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
                XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
                XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
                CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
                CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
                CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
                CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
                EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
                CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
                SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
                STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
                THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
                CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
                CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
                CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
                WS: ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],
                DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
                MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
                IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
                DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
                XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
                TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
                PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
                VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
            };

            function Ba(e) {
                var t = e.lastIndexOf("/");
                return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels"
            }

            function va(e) {
                var t = [Je, q("Relationships", null, {
                    xmlns: ir.RELS
                })];
                return Ke(e["!id"]).forEach(function(r) {
                    t[t.length] = q("Relationship", null, e["!id"][r])
                }), t.length > 2 && (t[t.length] = "</Relationships>", t[1] = t[1].replace("/>", ">")), t.join("")
            }

            function Ne(e, t, r, a, n, i) {
                if (n || (n = {}), e["!id"] || (e["!id"] = {}), e["!idx"] || (e["!idx"] = 1), t < 0)
                    for (t = e["!idx"]; e["!id"]["rId" + t]; ++t);
                if (e["!idx"] = t + 1, n.Id = "rId" + t, n.Type = a, n.Target = r, i ? n.TargetMode = i : [Te.HLINK, Te.XPATH, Te.XMISS].indexOf(n.Type) > -1 && (n.TargetMode = "External"), e["!id"][n.Id]) throw new Error("Cannot rewrite rId " + t);
                return e["!id"][n.Id] = n, e[("/" + n.Target).replace("//", "/")] = n, t
            }

            function _s(e, t, r) {
                return ['  <rdf:Description rdf:about="' + e + '">\n', '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (r || "odf") + "#" + t + '"/>\n', "  </rdf:Description>\n"].join("")
            }

            function vl(e, t) {
                return ['  <rdf:Description rdf:about="' + e + '">\n', '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + t + '"/>\n', "  </rdf:Description>\n"].join("")
            }

            function ws() {
                return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + xe.version + "</meta:generator></office:meta></office:document-meta>"
            }
            var gt = [
                ["cp:category", "Category"],
                ["cp:contentStatus", "ContentStatus"],
                ["cp:keywords", "Keywords"],
                ["cp:lastModifiedBy", "LastAuthor"],
                ["cp:lastPrinted", "LastPrinted"],
                ["cp:revision", "RevNumber"],
                ["cp:version", "Version"],
                ["dc:creator", "Author"],
                ["dc:description", "Comments"],
                ["dc:identifier", "Identifier"],
                ["dc:language", "Language"],
                ["dc:subject", "Subject"],
                ["dc:title", "Title"],
                ["dcterms:created", "CreatedDate", "date"],
                ["dcterms:modified", "ModifiedDate", "date"]
            ];

            function E0(e, t, r, a, n) {
                null != n[e] || null == t || "" === t || (n[e] = t, t = Me(t), a[a.length] = r ? q(e, t, r) : mr(e, t))
            }

            function Es(e, t) {
                var r = t || {},
                    a = [Je, q("cp:coreProperties", null, {
                        "xmlns:cp": ir.CORE_PROPS,
                        "xmlns:dc": ir.dc,
                        "xmlns:dcterms": ir.dcterms,
                        "xmlns:dcmitype": ir.dcmitype,
                        "xmlns:xsi": ir.xsi
                    })],
                    n = {};
                if (!e && !r.Props) return a.join("");
                e && (null != e.CreatedDate && E0("dcterms:created", "string" == typeof e.CreatedDate ? e.CreatedDate : r0(e.CreatedDate, r.WTF), {
                    "xsi:type": "dcterms:W3CDTF"
                }, a, n), null != e.ModifiedDate && E0("dcterms:modified", "string" == typeof e.ModifiedDate ? e.ModifiedDate : r0(e.ModifiedDate, r.WTF), {
                    "xsi:type": "dcterms:W3CDTF"
                }, a, n));
                for (var i = 0; i != gt.length; ++i) {
                    var s = gt[i],
                        f = r.Props && null != r.Props[s[1]] ? r.Props[s[1]] : e ? e[s[1]] : null;
                    !0 === f ? f = "1" : !1 === f ? f = "0" : "number" == typeof f && (f = String(f)), null != f && E0(s[0], f, null, a, n)
                }
                return a.length > 2 && (a[a.length] = "</cp:coreProperties>", a[1] = a[1].replace("/>", ">")), a.join("")
            }
            var Zt = [
                    ["Application", "Application", "string"],
                    ["AppVersion", "AppVersion", "string"],
                    ["Company", "Company", "string"],
                    ["DocSecurity", "DocSecurity", "string"],
                    ["Manager", "Manager", "string"],
                    ["HyperlinksChanged", "HyperlinksChanged", "bool"],
                    ["SharedDoc", "SharedDoc", "bool"],
                    ["LinksUpToDate", "LinksUpToDate", "bool"],
                    ["ScaleCrop", "ScaleCrop", "bool"],
                    ["HeadingPairs", "HeadingPairs", "raw"],
                    ["TitlesOfParts", "TitlesOfParts", "raw"]
                ],
                Ts = ["Worksheets", "SheetNames", "NamedRanges", "DefinedNames", "Chartsheets", "ChartNames"];

            function Fs(e) {
                var t = [],
                    r = q;
                return e || (e = {}), e.Application = "SheetJS", t[t.length] = Je, t[t.length] = q("Properties", null, {
                    xmlns: ir.EXT_PROPS,
                    "xmlns:vt": ir.vt
                }), Zt.forEach(function(a) {
                    if (void 0 !== e[a[1]]) {
                        var n;
                        switch (a[2]) {
                            case "string":
                                n = Me(String(e[a[1]]));
                                break;
                            case "bool":
                                n = e[a[1]] ? "true" : "false"
                        }
                        void 0 !== n && (t[t.length] = r(a[0], n))
                    }
                }), t[t.length] = r("HeadingPairs", r("vt:vector", r("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + r("vt:variant", r("vt:i4", String(e.Worksheets))), {
                    size: 2,
                    baseType: "variant"
                })), t[t.length] = r("TitlesOfParts", r("vt:vector", e.SheetNames.map(function(a) {
                    return "<vt:lpstr>" + Me(a) + "</vt:lpstr>"
                }).join(""), {
                    size: e.Worksheets,
                    baseType: "lpstr"
                })), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("")
            }

            function ys(e) {
                var t = [Je, q("Properties", null, {
                    xmlns: ir.CUST_PROPS,
                    "xmlns:vt": ir.vt
                })];
                if (!e) return t.join("");
                var r = 1;
                return Ke(e).forEach(function(n) {
                    ++r, t[t.length] = q("property", function Oo(e, t) {
                        switch (typeof e) {
                            case "string":
                                var r = q("vt:lpwstr", Me(e));
                                return t && (r = r.replace(/&quot;/g, "_x0022_")), r;
                            case "number":
                                return q((0 | e) == e ? "vt:i4" : "vt:r8", Me(String(e)));
                            case "boolean":
                                return q("vt:bool", e ? "true" : "false")
                        }
                        if (e instanceof Date) return q("vt:filetime", r0(e));
                        throw new Error("Unable to serialize " + e)
                    }(e[n], !0), {
                        fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
                        pid: r,
                        name: Me(n)
                    })
                }), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("")
            }
            var T0 = {
                Title: "Title",
                Subject: "Subject",
                Author: "Author",
                Keywords: "Keywords",
                Comments: "Description",
                LastAuthor: "LastAuthor",
                RevNumber: "Revision",
                Application: "AppName",
                LastPrinted: "LastPrinted",
                CreatedDate: "Created",
                ModifiedDate: "LastSaved",
                Category: "Category",
                Manager: "Manager",
                Company: "Company",
                AppVersion: "Version",
                ContentStatus: "ContentStatus",
                Identifier: "Identifier",
                Language: "Language"
            };

            function Rs(e, t) {
                var r = G(4),
                    a = G(4);
                switch (r.write_shift(4, 80 == e ? 31 : e), e) {
                    case 3:
                        a.write_shift(-4, t);
                        break;
                    case 5:
                        (a = G(8)).write_shift(8, t, "f");
                        break;
                    case 11:
                        a.write_shift(4, t ? 1 : 0);
                        break;
                    case 64:
                        a = function yl(e) {
                            var r = ("string" == typeof e ? new Date(Date.parse(e)) : e).getTime() / 1e3 + 11644473600,
                                a = r % Math.pow(2, 32),
                                n = (r - a) / Math.pow(2, 32);
                            n *= 1e7;
                            var i = (a *= 1e7) / Math.pow(2, 32) | 0;
                            i > 0 && (a %= Math.pow(2, 32), n += i);
                            var s = G(8);
                            return s.write_shift(4, a), s.write_shift(4, n), s
                        }(t);
                        break;
                    case 31:
                    case 80:
                        for ((a = G(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2))).write_shift(4, t.length + 1), a.write_shift(0, t, "dbcs"); a.l != a.length;) a.write_shift(1, 0);
                        break;
                    default:
                        throw new Error("TypedPropertyValue unrecognized type " + e + " " + t)
                }
                return lr([r, a])
            }
            var Ns = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];

            function bl(e) {
                switch (typeof e) {
                    case "boolean":
                        return 11;
                    case "number":
                        return (0 | e) == e ? 3 : 5;
                    case "string":
                        return 31;
                    case "object":
                        if (e instanceof Date) return 64
                }
                return -1
            }

            function Ps(e, t, r) {
                var a = G(8),
                    n = [],
                    i = [],
                    s = 8,
                    f = 0,
                    c = G(8),
                    o = G(8);
                if (c.write_shift(4, 2), c.write_shift(4, 1200), o.write_shift(4, 1), i.push(c), n.push(o), s += 8 + c.length, !t) {
                    (o = G(8)).write_shift(4, 0), n.unshift(o);
                    var l = [G(4)];
                    for (l[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
                        var h = e[f][0];
                        for ((c = G(8 + 2 * (h.length + 1) + (h.length % 2 ? 0 : 2))).write_shift(4, f + 2), c.write_shift(4, h.length + 1), c.write_shift(0, h, "dbcs"); c.l != c.length;) c.write_shift(1, 0);
                        l.push(c)
                    }
                    c = lr(l), i.unshift(c), s += 8 + c.length
                }
                for (f = 0; f < e.length; ++f)
                    if ((!t || t[e[f][0]]) && !(Ns.indexOf(e[f][0]) > -1 || Ts.indexOf(e[f][0]) > -1) && null != e[f][1]) {
                        var x = e[f][1],
                            d = 0;
                        if (t) {
                            var p = r[d = +t[e[f][0]]];
                            if ("version" == p.p && "string" == typeof x) {
                                var u = x.split(".");
                                x = (+u[0] << 16) + (+u[1] || 0)
                            }
                            c = Rs(p.t, x)
                        } else {
                            var m = bl(x); - 1 == m && (m = 31, x = String(x)), c = Rs(m, x)
                        }
                        i.push(c), (o = G(8)).write_shift(4, t ? d : 2 + f), n.push(o), s += 8 + c.length
                    }
                var E = 8 * (i.length + 1);
                for (f = 0; f < i.length; ++f) n[f].write_shift(4, E), E += i[f].length;
                return a.write_shift(4, s), a.write_shift(4, i.length), lr([a].concat(n).concat(i))
            }

            function Bs(e, t, r, a, n, i) {
                var s = G(n ? 68 : 48),
                    f = [s];
                s.write_shift(2, 65534), s.write_shift(2, 0), s.write_shift(4, 842412599), s.write_shift(16, de.utils.consts.HEADER_CLSID, "hex"), s.write_shift(4, n ? 2 : 1), s.write_shift(16, t, "hex"), s.write_shift(4, n ? 68 : 48);
                var c = Ps(e, r, a);
                if (f.push(c), n) {
                    var o = Ps(n, null, null);
                    s.write_shift(16, i, "hex"), s.write_shift(4, 68 + c.length), f.push(o)
                }
                return lr(f)
            }

            function Ir(e, t) {
                return t || (t = G(2)), t.write_shift(2, +!!e), t
            }

            function sr(e) {
                return e.read_shift(2, "u")
            }

            function $r(e, t) {
                return t || (t = G(2)), t.write_shift(2, e), t
            }

            function Us(e, t, r) {
                return r || (r = G(2)), r.write_shift(1, "e" == t ? +e : +!!e), r.write_shift(1, "e" == t ? 1 : 0), r
            }

            function Ua(e, t, r) {
                var a = e.read_shift(r && r.biff >= 12 ? 2 : 1),
                    n = "sbcs-cont",
                    i = gr;
                r && r.biff >= 8 && (gr = 1200), r && 8 != r.biff ? 12 == r.biff && (n = "wstr") : e.read_shift(1) && (n = "dbcs-cont"), r.biff >= 2 && r.biff <= 5 && (n = "cpstr");
                var f = a ? e.read_shift(a, n) : "";
                return gr = i, f
            }

            function Ml(e) {
                var t = e.t || "",
                    a = G(3);
                a.write_shift(2, t.length), a.write_shift(1, 1);
                var n = G(2 * t.length);
                return n.write_shift(2 * t.length, t, "utf16le"), lr([a, n])
            }

            function Ws(e, t, r) {
                return r || (r = G(3 + 2 * e.length)), r.write_shift(2, e.length), r.write_shift(1, 1), r.write_shift(31, e, "utf16le"), r
            }

            function Hs(e, t) {
                t || (t = G(6 + 2 * e.length)), t.write_shift(4, 1 + e.length);
                for (var r = 0; r < e.length; ++r) t.write_shift(2, e.charCodeAt(r));
                return t.write_shift(2, 0), t
            }

            function Gl(e) {
                var t = G(512),
                    r = 0,
                    a = e.Target;
                "file://" == a.slice(0, 7) && (a = a.slice(7));
                var n = a.indexOf("#"),
                    i = n > -1 ? 31 : 23;
                switch (a.charAt(0)) {
                    case "#":
                        i = 28;
                        break;
                    case ".":
                        i &= -3
                }
                t.write_shift(4, 2), t.write_shift(4, i);
                var s = [8, 6815827, 6619237, 4849780, 83];
                for (r = 0; r < s.length; ++r) t.write_shift(4, s[r]);
                if (28 == i) Hs(a = a.slice(1), t);
                else if (2 & i) {
                    for (s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), r = 0; r < s.length; ++r) t.write_shift(1, parseInt(s[r], 16));
                    var f = n > -1 ? a.slice(0, n) : a;
                    for (t.write_shift(4, 2 * (f.length + 1)), r = 0; r < f.length; ++r) t.write_shift(2, f.charCodeAt(r));
                    t.write_shift(2, 0), 8 & i && Hs(n > -1 ? a.slice(n + 1) : "", t)
                } else {
                    for (s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), r = 0; r < s.length; ++r) t.write_shift(1, parseInt(s[r], 16));
                    for (var c = 0;
                        "../" == a.slice(3 * c, 3 * c + 3) || "..\\" == a.slice(3 * c, 3 * c + 3);) ++c;
                    for (t.write_shift(2, c), t.write_shift(4, a.length - 3 * c + 1), r = 0; r < a.length - 3 * c; ++r) t.write_shift(1, 255 & a.charCodeAt(r + 3 * c));
                    for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), r = 0; r < 6; ++r) t.write_shift(4, 0)
                }
                return t.slice(0, t.l)
            }

            function ea(e, t, r, a) {
                return a || (a = G(6)), a.write_shift(2, e), a.write_shift(2, t), a.write_shift(2, r || 0), a
            }

            function jl(e, t, r) {
                var a = r.biff > 8 ? 4 : 2;
                return [e.read_shift(a), e.read_shift(a, "i"), e.read_shift(a, "i")]
            }

            function yn(e) {
                var t = e.read_shift(2),
                    r = e.read_shift(2);
                return {
                    s: {
                        c: e.read_shift(2),
                        r: t
                    },
                    e: {
                        c: e.read_shift(2),
                        r
                    }
                }
            }

            function zs(e, t) {
                return t || (t = G(8)), t.write_shift(2, e.s.r), t.write_shift(2, e.e.r), t.write_shift(2, e.s.c), t.write_shift(2, e.e.c), t
            }

            function A0(e, t, r) {
                var a = 1536,
                    n = 16;
                switch (r.bookType) {
                    case "biff8":
                    case "xla":
                        break;
                    case "biff5":
                        a = 1280, n = 8;
                        break;
                    case "biff4":
                        a = 4, n = 6;
                        break;
                    case "biff3":
                        a = 3, n = 6;
                        break;
                    case "biff2":
                        a = 2, n = 4;
                        break;
                    default:
                        throw new Error("unsupported BIFF version")
                }
                var i = G(n);
                return i.write_shift(2, a), i.write_shift(2, t), n > 4 && i.write_shift(2, 29282), n > 6 && i.write_shift(2, 1997), n > 8 && (i.write_shift(2, 49161), i.write_shift(2, 1), i.write_shift(2, 1798), i.write_shift(2, 0)), i
            }

            function iu(e, t) {
                var r = !t || t.biff >= 8 ? 2 : 1,
                    a = G(8 + r * e.name.length);
                a.write_shift(4, e.pos), a.write_shift(1, e.hs || 0), a.write_shift(1, e.dt), a.write_shift(1, e.name.length), t.biff >= 8 && a.write_shift(1, 1), a.write_shift(r * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
                var n = a.slice(0, a.l);
                return n.l = a.l, n
            }

            function Su(e, t, r, a) {
                var n = r && 5 == r.biff;
                a || (a = G(n ? 3 + t.length : 5 + 2 * t.length)), a.write_shift(2, e), a.write_shift(n ? 1 : 2, t.length), n || a.write_shift(1, 1), a.write_shift((n ? 1 : 2) * t.length, t, n ? "sbcs" : "utf16le");
                var i = a.length > a.l ? a.slice(0, a.l) : a;
                return null == i.l && (i.l = i.length), i
            }

            function Js(e, t, r, a) {
                var n = r && 5 == r.biff;
                a || (a = G(n ? 16 : 20)), a.write_shift(2, 0), e.style ? (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, 65524)) : (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, t << 4));
                var i = 0;
                return e.numFmtId > 0 && n && (i |= 1024), a.write_shift(4, i), a.write_shift(4, 0), n || a.write_shift(4, 0), a.write_shift(2, 0), a
            }

            function qu(e) {
                var t = G(24),
                    r = er(e[0]);
                t.write_shift(2, r.r), t.write_shift(2, r.r), t.write_shift(2, r.c), t.write_shift(2, r.c);
                for (var a = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), n = 0; n < 16; ++n) t.write_shift(1, parseInt(a[n], 16));
                return lr([t, Gl(e[1])])
            }

            function eh(e) {
                var t = e[1].Tooltip,
                    r = G(10 + 2 * (t.length + 1));
                r.write_shift(2, 2048);
                var a = er(e[0]);
                r.write_shift(2, a.r), r.write_shift(2, a.r), r.write_shift(2, a.c), r.write_shift(2, a.c);
                for (var n = 0; n < t.length; ++n) r.write_shift(2, t.charCodeAt(n));
                return r.write_shift(2, 0), r
            }
            var C0 = function() {
                    var e = {
                            1: 437,
                            2: 850,
                            3: 1252,
                            4: 1e4,
                            100: 852,
                            101: 866,
                            102: 865,
                            103: 861,
                            104: 895,
                            105: 620,
                            106: 737,
                            107: 857,
                            120: 950,
                            121: 949,
                            122: 936,
                            123: 932,
                            124: 874,
                            125: 1255,
                            126: 1256,
                            150: 10007,
                            151: 10029,
                            152: 10006,
                            200: 1250,
                            201: 1251,
                            202: 1254,
                            203: 1253,
                            0: 20127,
                            8: 865,
                            9: 437,
                            10: 850,
                            11: 437,
                            13: 437,
                            14: 850,
                            15: 437,
                            16: 850,
                            17: 437,
                            18: 850,
                            19: 932,
                            20: 850,
                            21: 437,
                            22: 850,
                            23: 865,
                            24: 437,
                            25: 437,
                            26: 850,
                            27: 437,
                            28: 863,
                            29: 850,
                            31: 852,
                            34: 852,
                            35: 852,
                            36: 860,
                            37: 850,
                            38: 866,
                            55: 850,
                            64: 852,
                            77: 936,
                            78: 949,
                            79: 950,
                            80: 874,
                            87: 1252,
                            88: 1252,
                            89: 1252,
                            108: 863,
                            134: 737,
                            135: 852,
                            136: 857,
                            204: 1257,
                            255: 16969
                        },
                        t = hn({
                            1: 437,
                            2: 850,
                            3: 1252,
                            4: 1e4,
                            100: 852,
                            101: 866,
                            102: 865,
                            103: 861,
                            104: 895,
                            105: 620,
                            106: 737,
                            107: 857,
                            120: 950,
                            121: 949,
                            122: 936,
                            123: 932,
                            124: 874,
                            125: 1255,
                            126: 1256,
                            150: 10007,
                            151: 10029,
                            152: 10006,
                            200: 1250,
                            201: 1251,
                            202: 1254,
                            203: 1253,
                            0: 20127
                        });

                    function a(f, c) {
                        var o = c || {};
                        o.dateNF || (o.dateNF = "yyyymmdd");
                        var l = pa(function r(f, c) {
                            var o = [],
                                l = St(1);
                            switch (c.type) {
                                case "base64":
                                    l = Br(Lr(f));
                                    break;
                                case "binary":
                                    l = Br(f);
                                    break;
                                case "buffer":
                                case "array":
                                    l = f
                            }
                            vr(l, 0);
                            var h = l.read_shift(1),
                                x = !!(136 & h),
                                d = !1,
                                p = !1;
                            switch (h) {
                                case 2:
                                case 3:
                                case 131:
                                case 139:
                                case 245:
                                    break;
                                case 48:
                                case 49:
                                    d = !0, x = !0;
                                    break;
                                case 140:
                                    p = !0;
                                    break;
                                default:
                                    throw new Error("DBF Unsupported Version: " + h.toString(16))
                            }
                            var u = 0,
                                m = 521;
                            2 == h && (u = l.read_shift(2)), l.l += 3, 2 != h && (u = l.read_shift(4)), u > 1048576 && (u = 1e6), 2 != h && (m = l.read_shift(2));
                            var E = l.read_shift(2),
                                k = c.codepage || 1252;
                            2 != h && (l.l += 16, l.read_shift(1), 0 !== l[l.l] && (k = e[l[l.l]]), l.l += 1, l.l += 2), p && (l.l += 36);
                            for (var _ = [], I = {}, P = Math.min(l.length, 2 == h ? 521 : m - 10 - (d ? 264 : 0)), H = p ? 32 : 11; l.l < P && 13 != l[l.l];) switch (I = {}, I.name = ke.utils.decode(k, l.slice(l.l, l.l + H)).replace(/[\u0000\r\n].*$/g, ""), l.l += H, I.type = String.fromCharCode(l.read_shift(1)), 2 != h && !p && (I.offset = l.read_shift(4)), I.len = l.read_shift(1), 2 == h && (I.offset = l.read_shift(2)), I.dec = l.read_shift(1), I.name.length && _.push(I), 2 != h && (l.l += p ? 13 : 14), I.type) {
                                case "B":
                                    (!d || 8 != I.len) && c.WTF && console.log("Skipping " + I.name + ":" + I.type);
                                    break;
                                case "G":
                                case "P":
                                    c.WTF && console.log("Skipping " + I.name + ":" + I.type);
                                    break;
                                case "+":
                                case "0":
                                case "@":
                                case "C":
                                case "D":
                                case "F":
                                case "I":
                                case "L":
                                case "M":
                                case "N":
                                case "O":
                                case "T":
                                case "Y":
                                    break;
                                default:
                                    throw new Error("Unknown Field Type: " + I.type)
                            }
                            if (13 !== l[l.l] && (l.l = m - 1), 13 !== l.read_shift(1)) throw new Error("DBF Terminator not found " + l.l + " " + l[l.l]);
                            l.l = m;
                            var C = 0,
                                N = 0;
                            for (o[0] = [], N = 0; N != _.length; ++N) o[0][N] = _[N].name;
                            for (; u-- > 0;)
                                if (42 !== l[l.l])
                                    for (++l.l, o[++C] = [], N = 0, N = 0; N != _.length; ++N) {
                                        var R = l.slice(l.l, l.l + _[N].len);
                                        l.l += _[N].len, vr(R, 0);
                                        var V = ke.utils.decode(k, R);
                                        switch (_[N].type) {
                                            case "C":
                                                V.trim().length && (o[C][N] = V.replace(/\s+$/, ""));
                                                break;
                                            case "D":
                                                o[C][N] = 8 === V.length ? new Date(+V.slice(0, 4), +V.slice(4, 6) - 1, +V.slice(6, 8)) : V;
                                                break;
                                            case "F":
                                                o[C][N] = parseFloat(V.trim());
                                                break;
                                            case "+":
                                            case "I":
                                                o[C][N] = p ? 2147483648 ^ R.read_shift(-4, "i") : R.read_shift(4, "i");
                                                break;
                                            case "L":
                                                switch (V.trim().toUpperCase()) {
                                                    case "Y":
                                                    case "T":
                                                        o[C][N] = !0;
                                                        break;
                                                    case "N":
                                                    case "F":
                                                        o[C][N] = !1;
                                                        break;
                                                    case "":
                                                    case "?":
                                                        break;
                                                    default:
                                                        throw new Error("DBF Unrecognized L:|" + V + "|")
                                                }
                                                break;
                                            case "M":
                                                if (!x) throw new Error("DBF Unexpected MEMO for type " + h.toString(16));
                                                o[C][N] = "##MEMO##" + (p ? parseInt(V.trim(), 10) : R.read_shift(4));
                                                break;
                                            case "N":
                                                (V = V.replace(/\u0000/g, "").trim()) && "." != V && (o[C][N] = +V || 0);
                                                break;
                                            case "@":
                                                o[C][N] = new Date(R.read_shift(-8, "f") - 621356832e5);
                                                break;
                                            case "T":
                                                o[C][N] = new Date(864e5 * (R.read_shift(4) - 2440588) + R.read_shift(4));
                                                break;
                                            case "Y":
                                                o[C][N] = R.read_shift(4, "i") / 1e4 + R.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
                                                break;
                                            case "O":
                                                o[C][N] = -R.read_shift(-8, "f");
                                                break;
                                            case "B":
                                                if (d && 8 == _[N].len) {
                                                    o[C][N] = R.read_shift(8, "f");
                                                    break
                                                }
                                            case "G":
                                            case "P":
                                                R.l += _[N].len;
                                                break;
                                            case "0":
                                                if ("_NullFlags" === _[N].name) break;
                                            default:
                                                throw new Error("DBF Unsupported data type " + _[N].type)
                                        }
                                    } else l.l += E;
                            if (2 != h && l.l < l.length && 26 != l[l.l++]) throw new Error("DBF EOF Marker missing " + (l.l - 1) + " of " + l.length + " " + l[l.l - 1].toString(16));
                            return c && c.sheetRows && (o = o.slice(0, c.sheetRows)), c.DBF = _, o
                        }(f, o), o);
                        return l["!cols"] = o.DBF.map(function(h) {
                            return {
                                wch: h.len,
                                DBF: h
                            }
                        }), delete o.DBF, l
                    }
                    var i = {
                        B: 8,
                        C: 250,
                        L: 1,
                        D: 8,
                        "?": 0,
                        "": 0
                    };
                    return {
                        to_workbook: function n(f, c) {
                            try {
                                return Ot(a(f, c), c)
                            } catch (o) {
                                if (c && c.WTF) throw o
                            }
                            return {
                                SheetNames: [],
                                Sheets: {}
                            }
                        },
                        to_sheet: a,
                        from_sheet: function s(f, c) {
                            var o = c || {};
                            if (+o.codepage >= 0 && br(+o.codepage), "string" == o.type) throw new Error("Cannot write DBF to JS string");
                            var l = Dr(),
                                h = Un(f, {
                                    header: 1,
                                    raw: !0,
                                    cellDates: !0
                                }),
                                x = h[0],
                                d = h.slice(1),
                                p = f["!cols"] || [],
                                u = 0,
                                m = 0,
                                E = 0,
                                k = 1;
                            for (u = 0; u < x.length; ++u)
                                if (((p[u] || {}).DBF || {}).name) x[u] = p[u].DBF.name, ++E;
                                else if (null != x[u]) {
                                if (++E, "number" == typeof x[u] && (x[u] = x[u].toString(10)), "string" != typeof x[u]) throw new Error("DBF Invalid column name " + x[u] + " |" + typeof x[u] + "|");
                                if (x.indexOf(x[u]) !== u)
                                    for (m = 0; m < 1024; ++m)
                                        if (-1 == x.indexOf(x[u] + "_" + m)) {
                                            x[u] += "_" + m;
                                            break
                                        }
                            }
                            var _ = Re(f["!ref"]),
                                I = [],
                                P = [],
                                H = [];
                            for (u = 0; u <= _.e.c - _.s.c; ++u) {
                                var C = "",
                                    N = "",
                                    R = 0,
                                    V = [];
                                for (m = 0; m < d.length; ++m) null != d[m][u] && V.push(d[m][u]);
                                if (0 != V.length && null != x[u]) {
                                    for (m = 0; m < V.length; ++m) {
                                        switch (typeof V[m]) {
                                            case "number":
                                                N = "B";
                                                break;
                                            case "string":
                                            default:
                                                N = "C";
                                                break;
                                            case "boolean":
                                                N = "L";
                                                break;
                                            case "object":
                                                N = V[m] instanceof Date ? "D" : "C"
                                        }
                                        R = Math.max(R, String(V[m]).length), C = C && C != N ? "C" : N
                                    }
                                    R > 250 && (R = 250), "C" == (N = ((p[u] || {}).DBF || {}).type) && p[u].DBF.len > R && (R = p[u].DBF.len), "B" == C && "N" == N && (C = "N", H[u] = p[u].DBF.dec, R = p[u].DBF.len), P[u] = "C" == C || "N" == N ? R : i[C] || 0, k += P[u], I[u] = C
                                } else I[u] = "?"
                            }
                            var X = l.next(32);
                            for (X.write_shift(4, 318902576), X.write_shift(4, d.length), X.write_shift(2, 296 + 32 * E), X.write_shift(2, k), u = 0; u < 4; ++u) X.write_shift(4, 0);
                            for (X.write_shift(4, 0 | (+t[qr] || 3) << 8), u = 0, m = 0; u < x.length; ++u)
                                if (null != x[u]) {
                                    var b = l.next(32),
                                        te = (x[u].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
                                    b.write_shift(1, te, "sbcs"), b.write_shift(1, "?" == I[u] ? "C" : I[u], "sbcs"), b.write_shift(4, m), b.write_shift(1, P[u] || i[I[u]] || 0), b.write_shift(1, H[u] || 0), b.write_shift(1, 2), b.write_shift(4, 0), b.write_shift(1, 0), b.write_shift(4, 0), b.write_shift(4, 0), m += P[u] || i[I[u]] || 0
                                }
                            var le = l.next(264);
                            for (le.write_shift(4, 13), u = 0; u < 65; ++u) le.write_shift(4, 0);
                            for (u = 0; u < d.length; ++u) {
                                var ie = l.next(k);
                                for (ie.write_shift(1, 0), m = 0; m < x.length; ++m)
                                    if (null != x[m]) switch (I[m]) {
                                        case "L":
                                            ie.write_shift(1, null == d[u][m] ? 63 : d[u][m] ? 84 : 70);
                                            break;
                                        case "B":
                                            ie.write_shift(8, d[u][m] || 0, "f");
                                            break;
                                        case "N":
                                            var me = "0";
                                            for ("number" == typeof d[u][m] && (me = d[u][m].toFixed(H[m] || 0)), E = 0; E < P[m] - me.length; ++E) ie.write_shift(1, 32);
                                            ie.write_shift(1, me, "sbcs");
                                            break;
                                        case "D":
                                            d[u][m] ? (ie.write_shift(4, ("0000" + d[u][m].getFullYear()).slice(-4), "sbcs"), ie.write_shift(2, ("00" + (d[u][m].getMonth() + 1)).slice(-2), "sbcs"), ie.write_shift(2, ("00" + d[u][m].getDate()).slice(-2), "sbcs")) : ie.write_shift(8, "00000000", "sbcs");
                                            break;
                                        case "C":
                                            var he = String(null != d[u][m] ? d[u][m] : "").slice(0, P[m]);
                                            for (ie.write_shift(1, he, "sbcs"), E = 0; E < P[m] - he.length; ++E) ie.write_shift(1, 32)
                                    }
                            }
                            return l.next(1).write_shift(1, 26), l.end()
                        }
                    }
                }(),
                nf = function() {
                    var e = {
                            AA: "\xc0",
                            BA: "\xc1",
                            CA: "\xc2",
                            DA: 195,
                            HA: "\xc4",
                            JA: 197,
                            AE: "\xc8",
                            BE: "\xc9",
                            CE: "\xca",
                            HE: "\xcb",
                            AI: "\xcc",
                            BI: "\xcd",
                            CI: "\xce",
                            HI: "\xcf",
                            AO: "\xd2",
                            BO: "\xd3",
                            CO: "\xd4",
                            DO: 213,
                            HO: "\xd6",
                            AU: "\xd9",
                            BU: "\xda",
                            CU: "\xdb",
                            HU: "\xdc",
                            Aa: "\xe0",
                            Ba: "\xe1",
                            Ca: "\xe2",
                            Da: 227,
                            Ha: "\xe4",
                            Ja: 229,
                            Ae: "\xe8",
                            Be: "\xe9",
                            Ce: "\xea",
                            He: "\xeb",
                            Ai: "\xec",
                            Bi: "\xed",
                            Ci: "\xee",
                            Hi: "\xef",
                            Ao: "\xf2",
                            Bo: "\xf3",
                            Co: "\xf4",
                            Do: 245,
                            Ho: "\xf6",
                            Au: "\xf9",
                            Bu: "\xfa",
                            Cu: "\xfb",
                            Hu: "\xfc",
                            KC: "\xc7",
                            Kc: "\xe7",
                            q: "\xe6",
                            z: "\u0153",
                            a: "\xc6",
                            j: "\u0152",
                            DN: 209,
                            Dn: 241,
                            Hy: 255,
                            S: 169,
                            c: 170,
                            R: 174,
                            "B ": 180,
                            0: 176,
                            1: 177,
                            2: 178,
                            3: 179,
                            5: 181,
                            6: 182,
                            7: 183,
                            Q: 185,
                            k: 186,
                            b: 208,
                            i: 216,
                            l: 222,
                            s: 240,
                            y: 248,
                            "!": 161,
                            '"': 162,
                            "#": 163,
                            "(": 164,
                            "%": 165,
                            "'": 167,
                            "H ": 168,
                            "+": 171,
                            ";": 187,
                            "<": 188,
                            "=": 189,
                            ">": 190,
                            "?": 191,
                            "{": 223
                        },
                        t = new RegExp("\x1bN(" + Ke(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"),
                        r = function(x, d) {
                            var p = e[d];
                            return "number" == typeof p ? Qe(p) : p
                        },
                        a = function(x, d, p) {
                            var u = d.charCodeAt(0) - 32 << 4 | p.charCodeAt(0) - 48;
                            return 59 == u ? x : Qe(u)
                        };

                    function i(x, d) {
                        var X, p = x.split(/[\n\r]+/),
                            u = -1,
                            m = -1,
                            E = 0,
                            k = 0,
                            _ = [],
                            I = [],
                            P = null,
                            H = {},
                            C = [],
                            N = [],
                            R = [],
                            V = 0;
                        for (+d.codepage >= 0 && br(+d.codepage); E !== p.length; ++E) {
                            V = 0;
                            var ie, b = p[E].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a).replace(t, r),
                                te = b.replace(/;;/g, "\0").split(";").map(function(D) {
                                    return D.replace(/\u0000/g, ";")
                                });
                            if (b.length > 0) switch (te[0]) {
                                case "ID":
                                case "E":
                                case "B":
                                case "O":
                                case "W":
                                    break;
                                case "P":
                                    "P" == te[1].charAt(0) && I.push(b.slice(3).replace(/;;/g, ";"));
                                    break;
                                case "C":
                                    var me = !1,
                                        he = !1,
                                        De = !1,
                                        oe = !1,
                                        ge = -1,
                                        J = -1;
                                    for (k = 1; k < te.length; ++k) switch (te[k].charAt(0)) {
                                        case "A":
                                        case "G":
                                            break;
                                        case "X":
                                            m = parseInt(te[k].slice(1)) - 1, he = !0;
                                            break;
                                        case "Y":
                                            for (u = parseInt(te[k].slice(1)) - 1, he || (m = 0), X = _.length; X <= u; ++X) _[X] = [];
                                            break;
                                        case "K":
                                            '"' === (ie = te[k].slice(1)).charAt(0) ? ie = ie.slice(1, ie.length - 1) : "TRUE" === ie ? ie = !0 : "FALSE" === ie ? ie = !1 : isNaN(et(ie)) ? isNaN(ha(ie).getDate()) || (ie = $e(ie)) : (ie = et(ie), null !== P && la(P) && (ie = Yn(ie))), typeof ke < "u" && "string" == typeof ie && "string" != (d || {}).type && (d || {}).codepage && (ie = ke.utils.decode(d.codepage, ie)), me = !0;
                                            break;
                                        case "E":
                                            oe = !0;
                                            var A = wa(te[k].slice(1), {
                                                r: u,
                                                c: m
                                            });
                                            _[u][m] = [_[u][m], A];
                                            break;
                                        case "S":
                                            De = !0, _[u][m] = [_[u][m], "S5S"];
                                            break;
                                        case "R":
                                            ge = parseInt(te[k].slice(1)) - 1;
                                            break;
                                        case "C":
                                            J = parseInt(te[k].slice(1)) - 1;
                                            break;
                                        default:
                                            if (d && d.WTF) throw new Error("SYLK bad record " + b)
                                    }
                                    if (me && (_[u][m] && 2 == _[u][m].length ? _[u][m][0] = ie : _[u][m] = ie, P = null), De) {
                                        if (oe) throw new Error("SYLK shared formula cannot have own formula");
                                        var U = ge > -1 && _[ge][J];
                                        if (!U || !U[1]) throw new Error("SYLK shared formula cannot find base");
                                        _[u][m][1] = yf(U[1], {
                                            r: u - ge,
                                            c: m - J
                                        })
                                    }
                                    break;
                                case "F":
                                    var O = 0;
                                    for (k = 1; k < te.length; ++k) switch (te[k].charAt(0)) {
                                        case "X":
                                            m = parseInt(te[k].slice(1)) - 1, ++O;
                                            break;
                                        case "Y":
                                            for (u = parseInt(te[k].slice(1)) - 1, X = _.length; X <= u; ++X) _[X] = [];
                                            break;
                                        case "M":
                                            V = parseInt(te[k].slice(1)) / 20;
                                            break;
                                        case "F":
                                        case "G":
                                        case "S":
                                        case "D":
                                        case "N":
                                            break;
                                        case "P":
                                            P = I[parseInt(te[k].slice(1))];
                                            break;
                                        case "W":
                                            for (R = te[k].slice(1).split(" "), X = parseInt(R[0], 10); X <= parseInt(R[1], 10); ++X) V = parseInt(R[2], 10), N[X - 1] = 0 === V ? {
                                                hidden: !0
                                            } : {
                                                wch: V
                                            }, Rt(N[X - 1]);
                                            break;
                                        case "C":
                                            N[m = parseInt(te[k].slice(1)) - 1] || (N[m] = {});
                                            break;
                                        case "R":
                                            C[u = parseInt(te[k].slice(1)) - 1] || (C[u] = {}), V > 0 ? (C[u].hpt = V, C[u].hpx = On(V)) : 0 === V && (C[u].hidden = !0);
                                            break;
                                        default:
                                            if (d && d.WTF) throw new Error("SYLK bad record " + b)
                                    }
                                    O < 1 && (P = null);
                                    break;
                                default:
                                    if (d && d.WTF) throw new Error("SYLK bad record " + b)
                            }
                        }
                        return C.length > 0 && (H["!rows"] = C), N.length > 0 && (H["!cols"] = N), d && d.sheetRows && (_ = _.slice(0, d.sheetRows)), [_, H]
                    }

                    function s(x, d) {
                        var p = function n(x, d) {
                                switch (d.type) {
                                    case "base64":
                                        return i(Lr(x), d);
                                    case "binary":
                                        return i(x, d);
                                    case "buffer":
                                        return i(Ae && Buffer.isBuffer(x) ? x.toString("binary") : Ft(x), d);
                                    case "array":
                                        return i(Xt(x), d)
                                }
                                throw new Error("Unrecognized type " + d.type)
                            }(x, d),
                            m = p[1],
                            E = pa(p[0], d);
                        return Ke(m).forEach(function(k) {
                            E[k] = m[k]
                        }), E
                    }

                    function c(x, d, p, u) {
                        var m = "C;Y" + (p + 1) + ";X" + (u + 1) + ";K";
                        switch (x.t) {
                            case "n":
                                m += x.v || 0, x.f && !x.F && (m += ";E" + P0(x.f, {
                                    r: p,
                                    c: u
                                }));
                                break;
                            case "b":
                                m += x.v ? "TRUE" : "FALSE";
                                break;
                            case "e":
                                m += x.w || x.v;
                                break;
                            case "d":
                                m += '"' + (x.w || x.v) + '"';
                                break;
                            case "s":
                                m += '"' + x.v.replace(/"/g, "").replace(/;/g, ";;") + '"'
                        }
                        return m
                    }
                    return e["|"] = 254, {
                        to_workbook: function f(x, d) {
                            return Ot(s(x, d), d)
                        },
                        to_sheet: s,
                        from_sheet: function h(x, d) {
                            var E, p = ["ID;PWXL;N;E"],
                                u = [],
                                m = Re(x["!ref"]),
                                k = Array.isArray(x),
                                _ = "\r\n";
                            p.push("P;PGeneral"), p.push("F;P0;DG0G8;M255"), x["!cols"] && function o(x, d) {
                                d.forEach(function(p, u) {
                                    var m = "F;W" + (u + 1) + " " + (u + 1) + " ";
                                    p.hidden ? m += "0" : ("number" == typeof p.width && !p.wpx && (p.wpx = Va(p.width)), "number" == typeof p.wpx && !p.wch && (p.wch = Xa(p.wpx)), "number" == typeof p.wch && (m += Math.round(p.wch))), " " != m.charAt(m.length - 1) && x.push(m)
                                })
                            }(p, x["!cols"]), x["!rows"] && function l(x, d) {
                                d.forEach(function(p, u) {
                                    var m = "F;";
                                    p.hidden ? m += "M0;" : p.hpt ? m += "M" + 20 * p.hpt + ";" : p.hpx && (m += "M" + 20 * Ga(p.hpx) + ";"), m.length > 2 && x.push(m + "R" + (u + 1))
                                })
                            }(p, x["!rows"]), p.push("B;Y" + (m.e.r - m.s.r + 1) + ";X" + (m.e.c - m.s.c + 1) + ";D" + [m.s.c, m.s.r, m.e.c, m.e.r].join(" "));
                            for (var I = m.s.r; I <= m.e.r; ++I)
                                for (var P = m.s.c; P <= m.e.c; ++P) {
                                    var H = ve({
                                        r: I,
                                        c: P
                                    });
                                    (E = k ? (x[I] || [])[P] : x[H]) && (null != E.v || E.f && !E.F) && u.push(c(E, 0, I, P))
                                }
                            return p.join(_) + _ + u.join(_) + _ + "E" + _
                        }
                    }
                }(),
                sf = function() {
                    function t(i, s) {
                        for (var f = i.split("\n"), c = -1, o = -1, l = 0, h = []; l !== f.length; ++l)
                            if ("BOT" !== f[l].trim()) {
                                if (!(c < 0)) {
                                    for (var x = f[l].trim().split(","), d = x[0], p = x[1], u = f[++l] || ""; 1 & (u.match(/["]/g) || []).length && l < f.length - 1;) u += "\n" + f[++l];
                                    switch (u = u.trim(), +d) {
                                        case -1:
                                            if ("BOT" === u) {
                                                h[++c] = [], o = 0;
                                                continue
                                            }
                                            if ("EOD" !== u) throw new Error("Unrecognized DIF special command " + u);
                                            break;
                                        case 0:
                                            h[c][o] = "TRUE" === u || "FALSE" !== u && (isNaN(et(p)) ? isNaN(ha(p).getDate()) ? p : $e(p) : et(p)), ++o;
                                            break;
                                        case 1:
                                            u = (u = u.slice(1, u.length - 1)).replace(/""/g, '"'), je && u && u.match(/^=".*"$/) && (u = u.slice(2, -1)), h[c][o++] = "" !== u ? u : null
                                    }
                                    if ("EOD" === u) break
                                }
                            } else h[++c] = [], o = 0;
                        return s && s.sheetRows && (h = h.slice(0, s.sheetRows)), h
                    }

                    function r(i, s) {
                        return pa(function e(i, s) {
                            switch (s.type) {
                                case "base64":
                                    return t(Lr(i), s);
                                case "binary":
                                    return t(i, s);
                                case "buffer":
                                    return t(Ae && Buffer.isBuffer(i) ? i.toString("binary") : Ft(i), s);
                                case "array":
                                    return t(Xt(i), s)
                            }
                            throw new Error("Unrecognized type " + s.type)
                        }(i, s), s)
                    }
                    return {
                        to_workbook: function a(i, s) {
                            return Ot(r(i, s), s)
                        },
                        to_sheet: r,
                        from_sheet: function() {
                            var i = function(c, o, l, h, x) {
                                    c.push(o), c.push(l + "," + h), c.push('"' + x.replace(/"/g, '""') + '"')
                                },
                                s = function(c, o, l, h) {
                                    c.push(o + "," + l), c.push(1 == o ? '"' + h.replace(/"/g, '""') + '"' : h)
                                };
                            return function(c) {
                                var h, o = [],
                                    l = Re(c["!ref"]),
                                    x = Array.isArray(c);
                                i(o, "TABLE", 0, 1, "sheetjs"), i(o, "VECTORS", 0, l.e.r - l.s.r + 1, ""), i(o, "TUPLES", 0, l.e.c - l.s.c + 1, ""), i(o, "DATA", 0, 0, "");
                                for (var d = l.s.r; d <= l.e.r; ++d) {
                                    s(o, -1, 0, "BOT");
                                    for (var p = l.s.c; p <= l.e.c; ++p) {
                                        var u = ve({
                                            r: d,
                                            c: p
                                        });
                                        if (h = x ? (c[d] || [])[p] : c[u]) switch (h.t) {
                                            case "n":
                                                var m = je ? h.w : h.v;
                                                !m && null != h.v && (m = h.v), null == m ? s(o, 1, 0, je && h.f && !h.F ? "=" + h.f : "") : s(o, 0, m, "V");
                                                break;
                                            case "b":
                                                s(o, 0, h.v ? 1 : 0, h.v ? "TRUE" : "FALSE");
                                                break;
                                            case "s":
                                                s(o, 1, 0, !je || isNaN(h.v) ? h.v : '="' + h.v + '"');
                                                break;
                                            case "d":
                                                h.w || (h.w = Mr(h.z || pe[14], ur($e(h.v)))), je ? s(o, 0, h.w, "V") : s(o, 1, 0, h.w);
                                                break;
                                            default:
                                                s(o, 1, 0, "")
                                        } else s(o, 1, 0, "")
                                    }
                                }
                                return s(o, -1, 0, "EOD"), o.join("\r\n")
                            }
                        }()
                    }
                }(),
                ff = function() {
                    function e(h) {
                        return h.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, "\n")
                    }

                    function t(h) {
                        return h.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n")
                    }

                    function a(h, x) {
                        return pa(function r(h, x) {
                            for (var d = h.split("\n"), p = -1, u = -1, m = 0, E = []; m !== d.length; ++m) {
                                var k = d[m].trim().split(":");
                                if ("cell" === k[0]) {
                                    var _ = er(k[1]);
                                    if (E.length <= _.r)
                                        for (p = E.length; p <= _.r; ++p) E[p] || (E[p] = []);
                                    switch (p = _.r, u = _.c, k[2]) {
                                        case "t":
                                            E[p][u] = e(k[3]);
                                            break;
                                        case "v":
                                            E[p][u] = +k[3];
                                            break;
                                        case "vtf":
                                            var I = k[k.length - 1];
                                        case "vtc":
                                            E[p][u] = "nl" === k[3] ? !!+k[4] : +k[4], "vtf" == k[2] && (E[p][u] = [E[p][u], I])
                                    }
                                }
                            }
                            return x && x.sheetRows && (E = E.slice(0, x.sheetRows)), E
                        }(h, x), x)
                    }
                    var i = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join("\n"),
                        s = ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join("\n") + "\n",
                        f = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join("\n"),
                        c = "--SocialCalcSpreadsheetControlSave--";

                    function o(h) {
                        if (!h || !h["!ref"]) return "";
                        for (var p, x = [], d = [], u = "", m = Or(h["!ref"]), E = Array.isArray(h), k = m.s.r; k <= m.e.r; ++k)
                            for (var _ = m.s.c; _ <= m.e.c; ++_)
                                if (u = ve({
                                        r: k,
                                        c: _
                                    }), (p = E ? (h[k] || [])[_] : h[u]) && null != p.v && "z" !== p.t) {
                                    switch (d = ["cell", u, "t"], p.t) {
                                        case "s":
                                        case "str":
                                            d.push(t(p.v));
                                            break;
                                        case "n":
                                            p.f ? (d[2] = "vtf", d[3] = "n", d[4] = p.v, d[5] = t(p.f)) : (d[2] = "v", d[3] = p.v);
                                            break;
                                        case "b":
                                            d[2] = "vt" + (p.f ? "f" : "c"), d[3] = "nl", d[4] = p.v ? "1" : "0", d[5] = t(p.f || (p.v ? "TRUE" : "FALSE"));
                                            break;
                                        case "d":
                                            var I = ur($e(p.v));
                                            d[2] = "vtc", d[3] = "nd", d[4] = "" + I, d[5] = p.w || Mr(p.z || pe[14], I);
                                            break;
                                        case "e":
                                            continue
                                    }
                                    x.push(d.join(":"))
                                }
                        return x.push("sheet:c:" + (m.e.c - m.s.c + 1) + ":r:" + (m.e.r - m.s.r + 1) + ":tvf:1"), x.push("valueformat:1:text-wiki"), x.join("\n")
                    }
                    return {
                        to_workbook: function n(h, x) {
                            return Ot(a(h, x), x)
                        },
                        to_sheet: a,
                        from_sheet: function l(h) {
                            return [i, s, f, s, o(h), c].join("\n")
                        }
                    }
                }(),
                ga = function() {
                    function e(l, h, x, d, p) {
                        p.raw ? h[x][d] = l : "" === l || (h[x][d] = "TRUE" === l || "FALSE" !== l && (isNaN(et(l)) ? isNaN(ha(l).getDate()) ? l : $e(l) : et(l)))
                    }
                    var r = {
                            44: ",",
                            9: "\t",
                            59: ";",
                            124: "|"
                        },
                        a = {
                            44: 3,
                            9: 2,
                            59: 1,
                            124: 0
                        };

                    function n(l) {
                        for (var h = {}, x = !1, d = 0, p = 0; d < l.length; ++d) 34 == (p = l.charCodeAt(d)) ? x = !x : !x && p in r && (h[p] = (h[p] || 0) + 1);
                        for (d in p = [], h) Object.prototype.hasOwnProperty.call(h, d) && p.push([h[d], d]);
                        if (!p.length)
                            for (d in h = a) Object.prototype.hasOwnProperty.call(h, d) && p.push([h[d], d]);
                        return p.sort(function(u, m) {
                            return u[0] - m[0] || a[u[1]] - a[m[1]]
                        }), r[p.pop()[1]] || 44
                    }

                    function s(l, h) {
                        return !h || !h.PRN || h.FS || "sep=" == l.slice(0, 4) || l.indexOf("\t") >= 0 || l.indexOf(",") >= 0 || l.indexOf(";") >= 0 ? function i(l, h) {
                            var x = h || {},
                                d = "";
                            null != Fe && null == x.dense && (x.dense = Fe);
                            var p = x.dense ? [] : {},
                                u = {
                                    s: {
                                        c: 0,
                                        r: 0
                                    },
                                    e: {
                                        c: 0,
                                        r: 0
                                    }
                                };
                            "sep=" == l.slice(0, 4) ? 13 == l.charCodeAt(5) && 10 == l.charCodeAt(6) ? (d = l.charAt(4), l = l.slice(7)) : 13 == l.charCodeAt(5) || 10 == l.charCodeAt(5) ? (d = l.charAt(4), l = l.slice(6)) : d = n(l.slice(0, 1024)) : d = x && x.FS ? x.FS : n(l.slice(0, 1024));
                            var m = 0,
                                E = 0,
                                k = 0,
                                _ = 0,
                                I = 0,
                                P = d.charCodeAt(0),
                                H = !1,
                                C = 0,
                                N = l.charCodeAt(0);
                            l = l.replace(/\r\n/gm, "\n");
                            var R = null != x.dateNF ? function io(e) {
                                var t = "number" == typeof e ? pe[e] : e;
                                return t = t.replace(Ai, "(\\d+)"), new RegExp("^" + t + "$")
                            }(x.dateNF) : null;

                            function V() {
                                var X = l.slice(_, I),
                                    b = {};
                                if ('"' == X.charAt(0) && '"' == X.charAt(X.length - 1) && (X = X.slice(1, -1).replace(/""/g, '"')), 0 === X.length) b.t = "z";
                                else if (x.raw) b.t = "s", b.v = X;
                                else if (0 === X.trim().length) b.t = "s", b.v = X;
                                else if (61 == X.charCodeAt(0)) 34 == X.charCodeAt(1) && 34 == X.charCodeAt(X.length - 1) ? (b.t = "s", b.v = X.slice(2, -1).replace(/""/g, '"')) : function Ox(e) {
                                    return 1 != e.length
                                }(X) ? (b.t = "n", b.f = X.slice(1)) : (b.t = "s", b.v = X);
                                else if ("TRUE" == X) b.t = "b", b.v = !0;
                                else if ("FALSE" == X) b.t = "b", b.v = !1;
                                else if (isNaN(k = et(X)))
                                    if (!isNaN(ha(X).getDate()) || R && X.match(R)) {
                                        b.z = x.dateNF || pe[14];
                                        var te = 0;
                                        R && X.match(R) && (X = function so(e, t, r) {
                                            var a = -1,
                                                n = -1,
                                                i = -1,
                                                s = -1,
                                                f = -1,
                                                c = -1;
                                            (t.match(Ai) || []).forEach(function(h, x) {
                                                var d = parseInt(r[x + 1], 10);
                                                switch (h.toLowerCase().charAt(0)) {
                                                    case "y":
                                                        a = d;
                                                        break;
                                                    case "d":
                                                        i = d;
                                                        break;
                                                    case "h":
                                                        s = d;
                                                        break;
                                                    case "s":
                                                        c = d;
                                                        break;
                                                    case "m":
                                                        s >= 0 ? f = d : n = d
                                                }
                                            }), c >= 0 && -1 == f && n >= 0 && (f = n, n = -1);
                                            var o = ("" + (a >= 0 ? a : (new Date).getFullYear())).slice(-4) + "-" + ("00" + (n >= 1 ? n : 1)).slice(-2) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2);
                                            7 == o.length && (o = "0" + o), 8 == o.length && (o = "20" + o);
                                            var l = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2);
                                            return -1 == s && -1 == f && -1 == c ? o : -1 == a && -1 == n && -1 == i ? l : o + "T" + l
                                        }(0, x.dateNF, X.match(R) || []), te = 1), x.cellDates ? (b.t = "d", b.v = $e(X, te)) : (b.t = "n", b.v = ur($e(X, te))), !1 !== x.cellText && (b.w = Mr(b.z, b.v instanceof Date ? ur(b.v) : b.v)), x.cellNF || delete b.z
                                    } else b.t = "s", b.v = X;
                                else b.t = "n", !1 !== x.cellText && (b.w = X), b.v = k;
                                if ("z" == b.t || (x.dense ? (p[m] || (p[m] = []), p[m][E] = b) : p[ve({
                                        c: E,
                                        r: m
                                    })] = b), N = l.charCodeAt(_ = I + 1), u.e.c < E && (u.e.c = E), u.e.r < m && (u.e.r = m), C == P) ++E;
                                else if (E = 0, ++m, x.sheetRows && x.sheetRows <= m) return !0
                            }
                            e: for (; I < l.length; ++I) switch (C = l.charCodeAt(I)) {
                                case 34:
                                    34 === N && (H = !H);
                                    break;
                                case P:
                                case 10:
                                case 13:
                                    if (!H && V()) break e
                            }
                            return I - _ > 0 && V(), p["!ref"] = Ee(u), p
                        }(l, h) : pa(function t(l, h) {
                            var x = h || {},
                                d = [];
                            if (!l || 0 === l.length) return d;
                            for (var p = l.split(/[\r\n]/), u = p.length - 1; u >= 0 && 0 === p[u].length;) --u;
                            for (var m = 10, E = 0, k = 0; k <= u; ++k) - 1 == (E = p[k].indexOf(" ")) ? E = p[k].length : E++, m = Math.max(m, E);
                            for (k = 0; k <= u; ++k) {
                                d[k] = [];
                                var _ = 0;
                                for (e(p[k].slice(0, m).trim(), d, k, _, x), _ = 1; _ <= (p[k].length - m) / 10 + 1; ++_) e(p[k].slice(m + 10 * (_ - 1), m + 10 * _).trim(), d, k, _, x)
                            }
                            return x.sheetRows && (d = d.slice(0, x.sheetRows)), d
                        }(l, h), h)
                    }

                    function f(l, h) {
                        var x = "",
                            d = "string" == h.type ? [0, 0, 0, 0] : function q0(e, t) {
                                var r = "";
                                switch ((t || {}).type || "base64") {
                                    case "buffer":
                                    case "array":
                                        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
                                    case "base64":
                                        r = Lr(e.slice(0, 12));
                                        break;
                                    case "binary":
                                        r = e;
                                        break;
                                    default:
                                        throw new Error("Unrecognized type " + (t && t.type || "undefined"))
                                }
                                return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)]
                            }(l, h);
                        switch (h.type) {
                            case "base64":
                                x = Lr(l);
                                break;
                            case "binary":
                            case "string":
                                x = l;
                                break;
                            case "buffer":
                                x = 65001 == h.codepage ? l.toString("utf8") : h.codepage && typeof ke < "u" ? ke.utils.decode(h.codepage, l) : Ae && Buffer.isBuffer(l) ? l.toString("binary") : Ft(l);
                                break;
                            case "array":
                                x = Xt(l);
                                break;
                            default:
                                throw new Error("Unrecognized type " + h.type)
                        }
                        return 239 == d[0] && 187 == d[1] && 191 == d[2] ? x = Ve(x.slice(3)) : "string" != h.type && "buffer" != h.type && 65001 == h.codepage ? x = Ve(x) : "binary" == h.type && typeof ke < "u" && h.codepage && (x = ke.utils.decode(h.codepage, ke.utils.encode(28591, x))), "socialcalc:version:" == x.slice(0, 19) ? ff.to_sheet("string" == h.type ? x : Ve(x), h) : s(x, h)
                    }
                    return {
                        to_workbook: function c(l, h) {
                            return Ot(f(l, h), h)
                        },
                        to_sheet: f,
                        from_sheet: function o(l) {
                            for (var d, h = [], x = Re(l["!ref"]), p = Array.isArray(l), u = x.s.r; u <= x.e.r; ++u) {
                                for (var m = [], E = x.s.c; E <= x.e.c; ++E) {
                                    var k = ve({
                                        r: u,
                                        c: E
                                    });
                                    if ((d = p ? (l[u] || [])[E] : l[k]) && null != d.v) {
                                        for (var _ = (d.w || (ft(d), d.w) || "").slice(0, 10); _.length < 10;) _ += " ";
                                        m.push(_ + (0 === E ? " " : ""))
                                    } else m.push("          ")
                                }
                                h.push(m.join(""))
                            }
                            return h.join("\n")
                        }
                    }
                }(),
                ra = function() {
                    function e(A, U, O) {
                        if (A) {
                            vr(A, A.l || 0);
                            for (var D = O.Enum || ge; A.l < A.length;) {
                                var j = A.read_shift(2),
                                    fe = D[j] || D[65535],
                                    Q = A.read_shift(2),
                                    ee = A.l + Q,
                                    Y = fe.f && fe.f(A, Q, O);
                                if (A.l = ee, U(Y, fe, j)) return
                            }
                        }
                    }

                    function r(A, U) {
                        if (!A) return A;
                        var O = U || {};
                        null != Fe && null == O.dense && (O.dense = Fe);
                        var D = O.dense ? [] : {},
                            j = "Sheet1",
                            fe = "",
                            Q = 0,
                            ee = {},
                            Y = [],
                            ye = [],
                            y = {
                                s: {
                                    r: 0,
                                    c: 0
                                },
                                e: {
                                    r: 0,
                                    c: 0
                                }
                            },
                            Ue = O.sheetRows || 0;
                        if (0 == A[2] && (8 == A[3] || 9 == A[3]) && A.length >= 16 && 5 == A[14] && 108 === A[15]) throw new Error("Unsupported Works 3 for Mac file");
                        if (2 == A[2]) O.Enum = ge, e(A, function(ce, tr, Jr) {
                            switch (Jr) {
                                case 0:
                                    O.vers = ce, ce >= 4096 && (O.qpro = !0);
                                    break;
                                case 6:
                                    y = ce;
                                    break;
                                case 204:
                                    ce && (fe = ce);
                                    break;
                                case 222:
                                    fe = ce;
                                    break;
                                case 15:
                                case 51:
                                    O.qpro || (ce[1].v = ce[1].v.slice(1));
                                case 13:
                                case 14:
                                case 16:
                                    14 == Jr && 112 == (112 & ce[2]) && (15 & ce[2]) > 1 && (15 & ce[2]) < 15 && (ce[1].z = O.dateNF || pe[14], O.cellDates && (ce[1].t = "d", ce[1].v = Yn(ce[1].v))), O.qpro && ce[3] > Q && (D["!ref"] = Ee(y), ee[j] = D, Y.push(j), D = O.dense ? [] : {}, y = {
                                        s: {
                                            r: 0,
                                            c: 0
                                        },
                                        e: {
                                            r: 0,
                                            c: 0
                                        }
                                    }, Q = ce[3], j = fe || "Sheet" + (Q + 1), fe = "");
                                    var ut = O.dense ? (D[ce[0].r] || [])[ce[0].c] : D[ve(ce[0])];
                                    if (ut) {
                                        ut.t = ce[1].t, ut.v = ce[1].v, null != ce[1].z && (ut.z = ce[1].z), null != ce[1].f && (ut.f = ce[1].f);
                                        break
                                    }
                                    O.dense ? (D[ce[0].r] || (D[ce[0].r] = []), D[ce[0].r][ce[0].c] = ce[1]) : D[ve(ce[0])] = ce[1]
                            }
                        }, O);
                        else {
                            if (26 != A[2] && 14 != A[2]) throw new Error("Unrecognized LOTUS BOF " + A[2]);
                            O.Enum = J, 14 == A[2] && (O.qpro = !0, A.l = 0), e(A, function(ce, tr, Jr) {
                                switch (Jr) {
                                    case 204:
                                        j = ce;
                                        break;
                                    case 22:
                                        ce[1].v = ce[1].v.slice(1);
                                    case 23:
                                    case 24:
                                    case 25:
                                    case 37:
                                    case 39:
                                    case 40:
                                        if (ce[3] > Q && (D["!ref"] = Ee(y), ee[j] = D, Y.push(j), D = O.dense ? [] : {}, y = {
                                                s: {
                                                    r: 0,
                                                    c: 0
                                                },
                                                e: {
                                                    r: 0,
                                                    c: 0
                                                }
                                            }, j = "Sheet" + ((Q = ce[3]) + 1)), Ue > 0 && ce[0].r >= Ue) break;
                                        O.dense ? (D[ce[0].r] || (D[ce[0].r] = []), D[ce[0].r][ce[0].c] = ce[1]) : D[ve(ce[0])] = ce[1], y.e.c < ce[0].c && (y.e.c = ce[0].c), y.e.r < ce[0].r && (y.e.r = ce[0].r);
                                        break;
                                    case 27:
                                        ce[14e3] && (ye[ce[14e3][0]] = ce[14e3][1]);
                                        break;
                                    case 1537:
                                        ye[ce[0]] = ce[1], ce[0] == Q && (j = ce[1])
                                }
                            }, O)
                        }
                        if (D["!ref"] = Ee(y), ee[fe || j] = D, Y.push(fe || j), !ye.length) return {
                            SheetNames: Y,
                            Sheets: ee
                        };
                        for (var Oe = {}, We = [], Ie = 0; Ie < ye.length; ++Ie) ee[Y[Ie]] ? (We.push(ye[Ie] || Y[Ie]), Oe[ye[Ie]] = ee[ye[Ie]] || ee[Y[Ie]]) : (We.push(ye[Ie]), Oe[ye[Ie]] = {
                            "!ref": "A1"
                        });
                        return {
                            SheetNames: We,
                            Sheets: Oe
                        }
                    }

                    function o(A, U, O) {
                        var D = [{
                            c: 0,
                            r: 0
                        }, {
                            t: "n",
                            v: 0
                        }, 0, 0];
                        return O.qpro && 20768 != O.vers ? (D[0].c = A.read_shift(1), D[3] = A.read_shift(1), D[0].r = A.read_shift(2), A.l += 2) : (D[2] = A.read_shift(1), D[0].c = A.read_shift(2), D[0].r = A.read_shift(2)), D
                    }

                    function l(A, U, O) {
                        var D = A.l + U,
                            j = o(A, 0, O);
                        if (j[1].t = "s", 20768 == O.vers) {
                            A.l++;
                            var fe = A.read_shift(1);
                            return j[1].v = A.read_shift(fe, "utf8"), j
                        }
                        return O.qpro && A.l++, j[1].v = A.read_shift(D - A.l, "cstr"), j
                    }

                    function h(A, U, O) {
                        var D = G(7 + O.length);
                        D.write_shift(1, 255), D.write_shift(2, U), D.write_shift(2, A), D.write_shift(1, 39);
                        for (var j = 0; j < D.length; ++j) {
                            var fe = O.charCodeAt(j);
                            D.write_shift(1, fe >= 128 ? 95 : fe)
                        }
                        return D.write_shift(1, 0), D
                    }

                    function d(A, U, O) {
                        var D = G(7);
                        return D.write_shift(1, 255), D.write_shift(2, U), D.write_shift(2, A), D.write_shift(2, O, "i"), D
                    }

                    function u(A, U, O) {
                        var D = G(13);
                        return D.write_shift(1, 255), D.write_shift(2, U), D.write_shift(2, A), D.write_shift(8, O, "f"), D
                    }

                    function E(A, U, O) {
                        var D = 32768 & U;
                        return U = (D ? A : 0) + ((U &= -32769) >= 8192 ? U - 16384 : U), (D ? "" : "$") + (O ? Xe(U) : Ze(U))
                    }
                    var k = {
                            51: ["FALSE", 0],
                            52: ["TRUE", 0],
                            70: ["LEN", 1],
                            80: ["SUM", 69],
                            81: ["AVERAGEA", 69],
                            82: ["COUNTA", 69],
                            83: ["MINA", 69],
                            84: ["MAXA", 69],
                            111: ["T", 1]
                        },
                        _ = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];

                    function P(A) {
                        var U = [{
                            c: 0,
                            r: 0
                        }, {
                            t: "n",
                            v: 0
                        }, 0];
                        return U[0].r = A.read_shift(2), U[3] = A[A.l++], U[0].c = A[A.l++], U
                    }

                    function C(A, U, O, D) {
                        var j = G(6 + D.length);
                        j.write_shift(2, A), j.write_shift(1, O), j.write_shift(1, U), j.write_shift(1, 39);
                        for (var fe = 0; fe < D.length; ++fe) {
                            var Q = D.charCodeAt(fe);
                            j.write_shift(1, Q >= 128 ? 95 : Q)
                        }
                        return j.write_shift(1, 0), j
                    }

                    function R(A, U) {
                        var O = P(A),
                            D = A.read_shift(4),
                            j = A.read_shift(4),
                            fe = A.read_shift(2);
                        if (65535 == fe) return 0 === D && 3221225472 === j ? (O[1].t = "e", O[1].v = 15) : 0 === D && 3489660928 === j ? (O[1].t = "e", O[1].v = 42) : O[1].v = 0, O;
                        var Q = 32768 & fe;
                        return fe = (32767 & fe) - 16446, O[1].v = (1 - 2 * Q) * (j * Math.pow(2, fe + 32) + D * Math.pow(2, fe)), O
                    }

                    function V(A, U, O, D) {
                        var j = G(14);
                        if (j.write_shift(2, A), j.write_shift(1, O), j.write_shift(1, U), 0 == D) return j.write_shift(4, 0), j.write_shift(4, 0), j.write_shift(2, 65535), j;
                        var fe = 0,
                            Q = 0,
                            Y = 0;
                        return D < 0 && (fe = 1, D = -D), Q = 0 | Math.log2(D), 2147483648 & (Y = (D /= Math.pow(2, Q - 31)) >>> 0) || (++Q, Y = (D /= 2) >>> 0), D -= Y, Y |= 2147483648, Y >>>= 0, D *= Math.pow(2, 32), j.write_shift(4, D >>> 0), j.write_shift(4, Y), j.write_shift(2, Q += 16383 + (fe ? 32768 : 0)), j
                    }

                    function te(A, U) {
                        var O = P(A),
                            D = A.read_shift(8, "f");
                        return O[1].v = D, O
                    }

                    function ie(A, U) {
                        return 0 == A[A.l + U - 1] ? A.read_shift(U, "cstr") : ""
                    }

                    function oe(A, U) {
                        var O = G(5 + A.length);
                        O.write_shift(2, 14e3), O.write_shift(2, U);
                        for (var D = 0; D < A.length; ++D) {
                            var j = A.charCodeAt(D);
                            O[O.l++] = j > 127 ? 95 : j
                        }
                        return O[O.l++] = 0, O
                    }
                    var ge = {
                            0: {
                                n: "BOF",
                                f: sr
                            },
                            1: {
                                n: "EOF"
                            },
                            2: {
                                n: "CALCMODE"
                            },
                            3: {
                                n: "CALCORDER"
                            },
                            4: {
                                n: "SPLIT"
                            },
                            5: {
                                n: "SYNC"
                            },
                            6: {
                                n: "RANGE",
                                f: function f(A, U, O) {
                                    var D = {
                                        s: {
                                            c: 0,
                                            r: 0
                                        },
                                        e: {
                                            c: 0,
                                            r: 0
                                        }
                                    };
                                    return 8 == U && O.qpro ? (D.s.c = A.read_shift(1), A.l++, D.s.r = A.read_shift(2), D.e.c = A.read_shift(1), A.l++, D.e.r = A.read_shift(2), D) : (D.s.c = A.read_shift(2), D.s.r = A.read_shift(2), 12 == U && O.qpro && (A.l += 2), D.e.c = A.read_shift(2), D.e.r = A.read_shift(2), 12 == U && O.qpro && (A.l += 2), 65535 == D.s.c && (D.s.c = D.e.c = D.s.r = D.e.r = 0), D)
                                }
                            },
                            7: {
                                n: "WINDOW1"
                            },
                            8: {
                                n: "COLW1"
                            },
                            9: {
                                n: "WINTWO"
                            },
                            10: {
                                n: "COLW2"
                            },
                            11: {
                                n: "NAME"
                            },
                            12: {
                                n: "BLANK"
                            },
                            13: {
                                n: "INTEGER",
                                f: function x(A, U, O) {
                                    var D = o(A, 0, O);
                                    return D[1].v = A.read_shift(2, "i"), D
                                }
                            },
                            14: {
                                n: "NUMBER",
                                f: function p(A, U, O) {
                                    var D = o(A, 0, O);
                                    return D[1].v = A.read_shift(8, "f"), D
                                }
                            },
                            15: {
                                n: "LABEL",
                                f: l
                            },
                            16: {
                                n: "FORMULA",
                                f: function m(A, U, O) {
                                    var D = A.l + U,
                                        j = o(A, 0, O);
                                    if (j[1].v = A.read_shift(8, "f"), O.qpro) A.l = D;
                                    else {
                                        var fe = A.read_shift(2);
                                        (function I(A, U) {
                                            vr(A, 0);
                                            for (var O = [], D = 0, j = "", fe = "", Q = "", ee = ""; A.l < A.length;) {
                                                var Y = A[A.l++];
                                                switch (Y) {
                                                    case 0:
                                                        O.push(A.read_shift(8, "f"));
                                                        break;
                                                    case 1:
                                                        fe = E(U[0].c, A.read_shift(2), !0), j = E(U[0].r, A.read_shift(2), !1), O.push(fe + j);
                                                        break;
                                                    case 2:
                                                        var ye = E(U[0].c, A.read_shift(2), !0),
                                                            y = E(U[0].r, A.read_shift(2), !1);
                                                        fe = E(U[0].c, A.read_shift(2), !0), j = E(U[0].r, A.read_shift(2), !1), O.push(ye + y + ":" + fe + j);
                                                        break;
                                                    case 3:
                                                        if (A.l < A.length) return void console.error("WK1 premature formula end");
                                                        break;
                                                    case 4:
                                                        O.push("(" + O.pop() + ")");
                                                        break;
                                                    case 5:
                                                        O.push(A.read_shift(2));
                                                        break;
                                                    case 6:
                                                        for (var Ue = ""; Y = A[A.l++];) Ue += String.fromCharCode(Y);
                                                        O.push('"' + Ue.replace(/"/g, '""') + '"');
                                                        break;
                                                    case 8:
                                                        O.push("-" + O.pop());
                                                        break;
                                                    case 23:
                                                        O.push("+" + O.pop());
                                                        break;
                                                    case 22:
                                                        O.push("NOT(" + O.pop() + ")");
                                                        break;
                                                    case 20:
                                                    case 21:
                                                        ee = O.pop(), Q = O.pop(), O.push(["AND", "OR"][Y - 20] + "(" + Q + "," + ee + ")");
                                                        break;
                                                    default:
                                                        if (Y < 32 && _[Y]) ee = O.pop(), Q = O.pop(), O.push(Q + _[Y] + ee);
                                                        else {
                                                            if (!k[Y]) return Y <= 7 ? console.error("WK1 invalid opcode " + Y.toString(16)) : Y <= 24 ? console.error("WK1 unsupported op " + Y.toString(16)) : Y <= 30 ? console.error("WK1 invalid opcode " + Y.toString(16)) : Y <= 115 ? console.error("WK1 unsupported function opcode " + Y.toString(16)) : console.error("WK1 unrecognized opcode " + Y.toString(16));
                                                            if (69 == (D = k[Y][1]) && (D = A[A.l++]), D > O.length) return void console.error("WK1 bad formula parse 0x" + Y.toString(16) + ":|" + O.join("|") + "|");
                                                            var Oe = O.slice(-D);
                                                            O.length -= D, O.push(k[Y][0] + "(" + Oe.join(",") + ")")
                                                        }
                                                }
                                            }
                                            1 == O.length ? U[1].f = "" + O[0] : console.error("WK1 bad formula parse |" + O.join("|") + "|")
                                        })(A.slice(A.l, A.l + fe), j), A.l += fe
                                    }
                                    return j
                                }
                            },
                            24: {
                                n: "TABLE"
                            },
                            25: {
                                n: "ORANGE"
                            },
                            26: {
                                n: "PRANGE"
                            },
                            27: {
                                n: "SRANGE"
                            },
                            28: {
                                n: "FRANGE"
                            },
                            29: {
                                n: "KRANGE1"
                            },
                            32: {
                                n: "HRANGE"
                            },
                            35: {
                                n: "KRANGE2"
                            },
                            36: {
                                n: "PROTEC"
                            },
                            37: {
                                n: "FOOTER"
                            },
                            38: {
                                n: "HEADER"
                            },
                            39: {
                                n: "SETUP"
                            },
                            40: {
                                n: "MARGINS"
                            },
                            41: {
                                n: "LABELFMT"
                            },
                            42: {
                                n: "TITLES"
                            },
                            43: {
                                n: "SHEETJS"
                            },
                            45: {
                                n: "GRAPH"
                            },
                            46: {
                                n: "NGRAPH"
                            },
                            47: {
                                n: "CALCCOUNT"
                            },
                            48: {
                                n: "UNFORMATTED"
                            },
                            49: {
                                n: "CURSORW12"
                            },
                            50: {
                                n: "WINDOW"
                            },
                            51: {
                                n: "STRING",
                                f: l
                            },
                            55: {
                                n: "PASSWORD"
                            },
                            56: {
                                n: "LOCKED"
                            },
                            60: {
                                n: "QUERY"
                            },
                            61: {
                                n: "QUERYNAME"
                            },
                            62: {
                                n: "PRINT"
                            },
                            63: {
                                n: "PRINTNAME"
                            },
                            64: {
                                n: "GRAPH2"
                            },
                            65: {
                                n: "GRAPHNAME"
                            },
                            66: {
                                n: "ZOOM"
                            },
                            67: {
                                n: "SYMSPLIT"
                            },
                            68: {
                                n: "NSROWS"
                            },
                            69: {
                                n: "NSCOLS"
                            },
                            70: {
                                n: "RULER"
                            },
                            71: {
                                n: "NNAME"
                            },
                            72: {
                                n: "ACOMM"
                            },
                            73: {
                                n: "AMACRO"
                            },
                            74: {
                                n: "PARSE"
                            },
                            102: {
                                n: "PRANGES??"
                            },
                            103: {
                                n: "RRANGES??"
                            },
                            104: {
                                n: "FNAME??"
                            },
                            105: {
                                n: "MRANGES??"
                            },
                            204: {
                                n: "SHEETNAMECS",
                                f: ie
                            },
                            222: {
                                n: "SHEETNAMELP",
                                f: function me(A, U) {
                                    var O = A[A.l++];
                                    O > U - 1 && (O = U - 1);
                                    for (var D = ""; D.length < O;) D += String.fromCharCode(A[A.l++]);
                                    return D
                                }
                            },
                            65535: {
                                n: ""
                            }
                        },
                        J = {
                            0: {
                                n: "BOF"
                            },
                            1: {
                                n: "EOF"
                            },
                            2: {
                                n: "PASSWORD"
                            },
                            3: {
                                n: "CALCSET"
                            },
                            4: {
                                n: "WINDOWSET"
                            },
                            5: {
                                n: "SHEETCELLPTR"
                            },
                            6: {
                                n: "SHEETLAYOUT"
                            },
                            7: {
                                n: "COLUMNWIDTH"
                            },
                            8: {
                                n: "HIDDENCOLUMN"
                            },
                            9: {
                                n: "USERRANGE"
                            },
                            10: {
                                n: "SYSTEMRANGE"
                            },
                            11: {
                                n: "ZEROFORCE"
                            },
                            12: {
                                n: "SORTKEYDIR"
                            },
                            13: {
                                n: "FILESEAL"
                            },
                            14: {
                                n: "DATAFILLNUMS"
                            },
                            15: {
                                n: "PRINTMAIN"
                            },
                            16: {
                                n: "PRINTSTRING"
                            },
                            17: {
                                n: "GRAPHMAIN"
                            },
                            18: {
                                n: "GRAPHSTRING"
                            },
                            19: {
                                n: "??"
                            },
                            20: {
                                n: "ERRCELL"
                            },
                            21: {
                                n: "NACELL"
                            },
                            22: {
                                n: "LABEL16",
                                f: function H(A, U) {
                                    var O = P(A);
                                    return O[1].t = "s", O[1].v = A.read_shift(U - 4, "cstr"), O
                                }
                            },
                            23: {
                                n: "NUMBER17",
                                f: R
                            },
                            24: {
                                n: "NUMBER18",
                                f: function N(A, U) {
                                    var O = P(A);
                                    O[1].v = A.read_shift(2);
                                    var D = O[1].v >> 1;
                                    if (1 & O[1].v) switch (7 & D) {
                                        case 0:
                                            D = 5e3 * (D >> 3);
                                            break;
                                        case 1:
                                            D = 500 * (D >> 3);
                                            break;
                                        case 2:
                                            D = (D >> 3) / 20;
                                            break;
                                        case 3:
                                            D = (D >> 3) / 200;
                                            break;
                                        case 4:
                                            D = (D >> 3) / 2e3;
                                            break;
                                        case 5:
                                            D = (D >> 3) / 2e4;
                                            break;
                                        case 6:
                                            D = (D >> 3) / 16;
                                            break;
                                        case 7:
                                            D = (D >> 3) / 64
                                    }
                                    return O[1].v = D, O
                                }
                            },
                            25: {
                                n: "FORMULA19",
                                f: function X(A, U) {
                                    var O = R(A);
                                    return A.l += U - 14, O
                                }
                            },
                            26: {
                                n: "FORMULA1A"
                            },
                            27: {
                                n: "XFORMAT",
                                f: function De(A, U) {
                                    for (var O = {}, D = A.l + U; A.l < D;) {
                                        var j = A.read_shift(2);
                                        if (14e3 == j) {
                                            for (O[j] = [0, ""], O[j][0] = A.read_shift(2); A[A.l];) O[j][1] += String.fromCharCode(A[A.l]), A.l++;
                                            A.l++
                                        }
                                    }
                                    return O
                                }
                            },
                            28: {
                                n: "DTLABELMISC"
                            },
                            29: {
                                n: "DTLABELCELL"
                            },
                            30: {
                                n: "GRAPHWINDOW"
                            },
                            31: {
                                n: "CPA"
                            },
                            32: {
                                n: "LPLAUTO"
                            },
                            33: {
                                n: "QUERY"
                            },
                            34: {
                                n: "HIDDENSHEET"
                            },
                            35: {
                                n: "??"
                            },
                            37: {
                                n: "NUMBER25",
                                f: function b(A, U) {
                                    var O = P(A),
                                        D = A.read_shift(4);
                                    return O[1].v = D >> 6, O
                                }
                            },
                            38: {
                                n: "??"
                            },
                            39: {
                                n: "NUMBER27",
                                f: te
                            },
                            40: {
                                n: "FORMULA28",
                                f: function le(A, U) {
                                    var O = te(A);
                                    return A.l += U - 10, O
                                }
                            },
                            142: {
                                n: "??"
                            },
                            147: {
                                n: "??"
                            },
                            150: {
                                n: "??"
                            },
                            151: {
                                n: "??"
                            },
                            152: {
                                n: "??"
                            },
                            153: {
                                n: "??"
                            },
                            154: {
                                n: "??"
                            },
                            155: {
                                n: "??"
                            },
                            156: {
                                n: "??"
                            },
                            163: {
                                n: "??"
                            },
                            174: {
                                n: "??"
                            },
                            175: {
                                n: "??"
                            },
                            176: {
                                n: "??"
                            },
                            177: {
                                n: "??"
                            },
                            184: {
                                n: "??"
                            },
                            185: {
                                n: "??"
                            },
                            186: {
                                n: "??"
                            },
                            187: {
                                n: "??"
                            },
                            188: {
                                n: "??"
                            },
                            195: {
                                n: "??"
                            },
                            201: {
                                n: "??"
                            },
                            204: {
                                n: "SHEETNAMECS",
                                f: ie
                            },
                            205: {
                                n: "??"
                            },
                            206: {
                                n: "??"
                            },
                            207: {
                                n: "??"
                            },
                            208: {
                                n: "??"
                            },
                            256: {
                                n: "??"
                            },
                            259: {
                                n: "??"
                            },
                            260: {
                                n: "??"
                            },
                            261: {
                                n: "??"
                            },
                            262: {
                                n: "??"
                            },
                            263: {
                                n: "??"
                            },
                            265: {
                                n: "??"
                            },
                            266: {
                                n: "??"
                            },
                            267: {
                                n: "??"
                            },
                            268: {
                                n: "??"
                            },
                            270: {
                                n: "??"
                            },
                            271: {
                                n: "??"
                            },
                            384: {
                                n: "??"
                            },
                            389: {
                                n: "??"
                            },
                            390: {
                                n: "??"
                            },
                            393: {
                                n: "??"
                            },
                            396: {
                                n: "??"
                            },
                            512: {
                                n: "??"
                            },
                            514: {
                                n: "??"
                            },
                            513: {
                                n: "??"
                            },
                            516: {
                                n: "??"
                            },
                            517: {
                                n: "??"
                            },
                            640: {
                                n: "??"
                            },
                            641: {
                                n: "??"
                            },
                            642: {
                                n: "??"
                            },
                            643: {
                                n: "??"
                            },
                            644: {
                                n: "??"
                            },
                            645: {
                                n: "??"
                            },
                            646: {
                                n: "??"
                            },
                            647: {
                                n: "??"
                            },
                            648: {
                                n: "??"
                            },
                            658: {
                                n: "??"
                            },
                            659: {
                                n: "??"
                            },
                            660: {
                                n: "??"
                            },
                            661: {
                                n: "??"
                            },
                            662: {
                                n: "??"
                            },
                            665: {
                                n: "??"
                            },
                            666: {
                                n: "??"
                            },
                            768: {
                                n: "??"
                            },
                            772: {
                                n: "??"
                            },
                            1537: {
                                n: "SHEETINFOQP",
                                f: function he(A, U, O) {
                                    if (O.qpro && !(U < 21)) {
                                        var D = A.read_shift(1);
                                        return A.l += 17, A.l += 1, A.l += 2, [D, A.read_shift(U - 21, "cstr")]
                                    }
                                }
                            },
                            1600: {
                                n: "??"
                            },
                            1602: {
                                n: "??"
                            },
                            1793: {
                                n: "??"
                            },
                            1794: {
                                n: "??"
                            },
                            1795: {
                                n: "??"
                            },
                            1796: {
                                n: "??"
                            },
                            1920: {
                                n: "??"
                            },
                            2048: {
                                n: "??"
                            },
                            2049: {
                                n: "??"
                            },
                            2052: {
                                n: "??"
                            },
                            2688: {
                                n: "??"
                            },
                            10998: {
                                n: "??"
                            },
                            12849: {
                                n: "??"
                            },
                            28233: {
                                n: "??"
                            },
                            28484: {
                                n: "??"
                            },
                            65535: {
                                n: ""
                            }
                        };
                    return {
                        sheet_to_wk1: function a(A, U) {
                            var O = U || {};
                            if (+O.codepage >= 0 && br(+O.codepage), "string" == O.type) throw new Error("Cannot write WK1 to JS string");
                            var D = Dr(),
                                j = Re(A["!ref"]),
                                fe = Array.isArray(A),
                                Q = [];
                            re(D, 0, function i(A) {
                                var U = G(2);
                                return U.write_shift(2, A), U
                            }(1030)), re(D, 6, function c(A) {
                                var U = G(8);
                                return U.write_shift(2, A.s.c), U.write_shift(2, A.s.r), U.write_shift(2, A.e.c), U.write_shift(2, A.e.r), U
                            }(j));
                            for (var ee = Math.min(j.e.r, 8191), Y = j.s.r; Y <= ee; ++Y)
                                for (var ye = Ze(Y), y = j.s.c; y <= j.e.c; ++y) {
                                    Y === j.s.r && (Q[y] = Xe(y));
                                    var Oe = fe ? (A[Y] || [])[y] : A[Q[y] + ye];
                                    Oe && "z" != Oe.t && ("n" == Oe.t ? (0 | Oe.v) == Oe.v && Oe.v >= -32768 && Oe.v <= 32767 ? re(D, 13, d(Y, y, Oe.v)) : re(D, 14, u(Y, y, Oe.v)) : re(D, 15, h(Y, y, ft(Oe).slice(0, 239))))
                                }
                            return re(D, 1), D.end()
                        },
                        book_to_wk3: function n(A, U) {
                            var O = U || {};
                            if (+O.codepage >= 0 && br(+O.codepage), "string" == O.type) throw new Error("Cannot write WK3 to JS string");
                            var D = Dr();
                            re(D, 0, function s(A) {
                                var U = G(26);
                                U.write_shift(2, 4096), U.write_shift(2, 4), U.write_shift(4, 0);
                                for (var O = 0, D = 0, j = 0, fe = 0; fe < A.SheetNames.length; ++fe) {
                                    var ee = A.Sheets[A.SheetNames[fe]];
                                    if (ee && ee["!ref"]) {
                                        ++j;
                                        var Y = Or(ee["!ref"]);
                                        O < Y.e.r && (O = Y.e.r), D < Y.e.c && (D = Y.e.c)
                                    }
                                }
                                return O > 8191 && (O = 8191), U.write_shift(2, O), U.write_shift(1, j), U.write_shift(1, D), U.write_shift(2, 0), U.write_shift(2, 0), U.write_shift(1, 1), U.write_shift(1, 2), U.write_shift(4, 0), U.write_shift(4, 0), U
                            }(A));
                            for (var j = 0, fe = 0; j < A.SheetNames.length; ++j)(A.Sheets[A.SheetNames[j]] || {})["!ref"] && re(D, 27, oe(A.SheetNames[j], fe++));
                            var Q = 0;
                            for (j = 0; j < A.SheetNames.length; ++j) {
                                var ee = A.Sheets[A.SheetNames[j]];
                                if (ee && ee["!ref"]) {
                                    for (var Y = Re(ee["!ref"]), ye = Array.isArray(ee), y = [], Ue = Math.min(Y.e.r, 8191), Oe = Y.s.r; Oe <= Ue; ++Oe)
                                        for (var We = Ze(Oe), Ie = Y.s.c; Ie <= Y.e.c; ++Ie) {
                                            Oe === Y.s.r && (y[Ie] = Xe(Ie));
                                            var tr = ye ? (ee[Oe] || [])[Ie] : ee[y[Ie] + We];
                                            tr && "z" != tr.t && ("n" == tr.t ? re(D, 23, V(Oe, Ie, Q, tr.v)) : re(D, 22, C(Oe, Ie, Q, ft(tr).slice(0, 239))))
                                        }++Q
                                }
                            }
                            return re(D, 1), D.end()
                        },
                        to_workbook: function t(A, U) {
                            switch (U.type) {
                                case "base64":
                                    return r(Br(Lr(A)), U);
                                case "binary":
                                    return r(Br(A), U);
                                case "buffer":
                                case "array":
                                    return r(A, U)
                            }
                            throw "Unsupported type " + U.type
                        }
                    }
                }(),
                bh = /^\s|\s$|[\t\n\r]/;

            function of (e, t) {
                if (!t.bookSST) return "";
                var r = [Je];
                r[r.length] = q("sst", null, {
                    xmlns: Dt[0],
                    count: e.Count,
                    uniqueCount: e.Unique
                });
                for (var a = 0; a != e.length; ++a)
                    if (null != e[a]) {
                        var n = e[a],
                            i = "<si>";
                        n.r ? i += n.r : (i += "<t", n.t || (n.t = ""), n.t.match(bh) && (i += ' xml:space="preserve"'), i += ">" + Me(n.t) + "</t>"), r[r.length] = i += "</si>"
                    }
                return r.length > 2 && (r[r.length] = "</sst>", r[1] = r[1].replace("/>", ">")), r.join("")
            }
            var Bh = function jo(e, t) {
                var r = !1;
                return null == t && (r = !0, t = G(15 + 4 * e.t.length)), t.write_shift(1, 0), xr(e.t, t), r ? t.slice(0, t.l) : t
            };

            function Mh(e) {
                var t = Dr();
                K(t, 159, function Lh(e, t) {
                    return t || (t = G(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t
                }(e));
                for (var r = 0; r < e.length; ++r) K(t, 19, Bh(e[r]));
                return K(t, 160), t.end()
            }

            function D0(e) {
                var r, i, t = 0,
                    a = function lf(e) {
                        if (typeof ke < "u") return ke.utils.encode(qr, e);
                        for (var t = [], r = e.split(""), a = 0; a < r.length; ++a) t[a] = r[a].charCodeAt(0);
                        return t
                    }(e),
                    n = a.length + 1;
                for ((r = St(n))[0] = a.length, i = 1; i != n; ++i) r[i] = a[i - 1];
                for (i = n - 1; i >= 0; --i) t = ((16384 & t ? 1 : 0) | t << 1 & 32767) ^ r[i];
                return 52811 ^ t
            }
            var df = function() {
                function e(n, i) {
                    switch (i.type) {
                        case "base64":
                            return t(Lr(n), i);
                        case "binary":
                            return t(n, i);
                        case "buffer":
                            return t(Ae && Buffer.isBuffer(n) ? n.toString("binary") : Ft(n), i);
                        case "array":
                            return t(Xt(n), i)
                    }
                    throw new Error("Unrecognized type " + i.type)
                }

                function t(n, i) {
                    var f = (i || {}).dense ? [] : {},
                        c = n.match(/\\trowd.*?\\row\b/g);
                    if (!c.length) throw new Error("RTF missing table");
                    var o = {
                        s: {
                            c: 0,
                            r: 0
                        },
                        e: {
                            c: 0,
                            r: c.length - 1
                        }
                    };
                    return c.forEach(function(l, h) {
                        Array.isArray(f) && (f[h] = []);
                        for (var p, x = /\\\w+\b/g, d = 0, u = -1; p = x.exec(l);) {
                            if ("\\cell" === p[0]) {
                                var m = l.slice(d, x.lastIndex - p[0].length);
                                if (" " == m[0] && (m = m.slice(1)), ++u, m.length) {
                                    var E = {
                                        v: m,
                                        t: "s"
                                    };
                                    Array.isArray(f) ? f[h][u] = E : f[ve({
                                        r: h,
                                        c: u
                                    })] = E
                                }
                            }
                            d = x.lastIndex
                        }
                        u > o.e.c && (o.e.c = u)
                    }), f["!ref"] = Ee(o), f
                }
                return {
                    to_workbook: function r(n, i) {
                        return Ot(e(n, i), i)
                    },
                    to_sheet: e,
                    from_sheet: function a(n) {
                        for (var f, i = ["{\\rtf1\\ansi"], s = Re(n["!ref"]), c = Array.isArray(n), o = s.s.r; o <= s.e.r; ++o) {
                            i.push("\\trowd\\trautofit1");
                            for (var l = s.s.c; l <= s.e.c; ++l) i.push("\\cellx" + (l + 1));
                            for (i.push("\\pard\\intbl"), l = s.s.c; l <= s.e.c; ++l) {
                                var h = ve({
                                    r: o,
                                    c: l
                                });
                                (f = c ? (n[o] || [])[l] : n[h]) && (null != f.v || f.f && !f.F) && (i.push(" " + (f.w || (ft(f), f.w))), i.push("\\cell"))
                            }
                            i.push("\\pard\\intbl\\row")
                        }
                        return i.join("") + "}"
                    }
                }
            }();

            function Ha(e) {
                for (var t = 0, r = 1; 3 != t; ++t) r = 256 * r + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
                return r.toString(16).toUpperCase().slice(1)
            }
            var Fr = 6;

            function Va(e) {
                return Math.floor((e + Math.round(128 / Fr) / 256) * Fr)
            }

            function Xa(e) {
                return Math.floor((e - 5) / Fr * 100 + .5) / 100
            }

            function Dn(e) {
                return Math.round((e * Fr + 5) / Fr * 256) / 256
            }

            function Rt(e) {
                e.width ? (e.wpx = Va(e.width), e.wch = Xa(e.wpx), e.MDW = Fr) : e.wpx ? (e.wch = Xa(e.wpx), e.width = Dn(e.wch), e.MDW = Fr) : "number" == typeof e.wch && (e.width = Dn(e.wch), e.wpx = Va(e.width), e.MDW = Fr), e.customWidth && delete e.customWidth
            }
            var mf = 96;

            function Ga(e) {
                return 96 * e / mf
            }

            function On(e) {
                return e * mf / 96
            }

            function vf(e, t) {
                var a, r = [Je, q("styleSheet", null, {
                    xmlns: Dt[0],
                    "xmlns:vt": ir.vt
                })];
                return e.SSF && null != (a = function o1(e) {
                    var t = ["<numFmts>"];
                    return [
                        [5, 8],
                        [23, 26],
                        [41, 44],
                        [50, 392]
                    ].forEach(function(r) {
                        for (var a = r[0]; a <= r[1]; ++a) null != e[a] && (t[t.length] = q("numFmt", null, {
                            numFmtId: a,
                            formatCode: Me(e[a])
                        }))
                    }), 1 === t.length ? "" : (t[t.length] = "</numFmts>", t[0] = q("numFmts", null, {
                        count: t.length - 2
                    }).replace("/>", ">"), t.join(""))
                }(e.SSF)) && (r[r.length] = a), r[r.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', r[r.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', r[r.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', r[r.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (a = function l1(e) {
                    var t = [];
                    return t[t.length] = q("cellXfs", null), e.forEach(function(r) {
                        t[t.length] = q("xf", null, r)
                    }), t[t.length] = "</cellXfs>", 2 === t.length ? "" : (t[0] = q("cellXfs", null, {
                        count: t.length - 2
                    }).replace("/>", ">"), t.join(""))
                }(t.cellXfs)) && (r[r.length] = a), r[r.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', r[r.length] = '<dxfs count="0"/>', r[r.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', r.length > 2 && (r[r.length] = "</styleSheet>", r[1] = r[1].replace("/>", ">")), r.join("")
            }

            function x1(e, t, r) {
                r || (r = G(6 + 4 * t.length)), r.write_shift(2, e), xr(t, r);
                var a = r.length > r.l ? r.slice(0, r.l) : r;
                return null == r.l && (r.l = r.length), a
            }
            var R0, m1 = ["none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"],
                v1 = kr;

            function gf(e, t) {
                t || (t = G(84)), R0 || (R0 = hn(m1));
                var r = R0[e.patternType];
                null == r && (r = 40), t.write_shift(4, r);
                var a = 0;
                if (40 != r)
                    for (_n({
                            auto: 1
                        }, t), _n({
                            auto: 1
                        }, t); a < 12; ++a) t.write_shift(4, 0);
                else {
                    for (; a < 4; ++a) t.write_shift(4, 0);
                    for (; a < 12; ++a) t.write_shift(4, 0)
                }
                return t.length > t.l ? t.slice(0, t.l) : t
            }

            function _f(e, t, r) {
                return r || (r = G(16)), r.write_shift(2, t || 0), r.write_shift(2, e.numFmtId || 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r
            }

            function za(e, t) {
                return t || (t = G(10)), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(4, 0), t
            }
            var _1 = kr;

            function b1(e, t) {
                var r = Dr();
                return K(r, 278),
                    function S1(e, t) {
                        if (t) {
                            var r = 0;
                            [
                                [5, 8],
                                [23, 26],
                                [41, 44],
                                [50, 392]
                            ].forEach(function(a) {
                                for (var n = a[0]; n <= a[1]; ++n) null != t[n] && ++r
                            }), 0 != r && (K(e, 615, rt(r)), [
                                [5, 8],
                                [23, 26],
                                [41, 44],
                                [50, 392]
                            ].forEach(function(a) {
                                for (var n = a[0]; n <= a[1]; ++n) null != t[n] && K(e, 44, x1(n, t[n]))
                            }), K(e, 616))
                        }
                    }(r, e.SSF),
                    function F1(e) {
                        K(e, 611, rt(1)), K(e, 43, function p1(e, t) {
                            t || (t = G(153)), t.write_shift(2, 20 * e.sz),
                                function rl(e, t) {
                                    t || (t = G(2)), t.write_shift(1, (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0)), t.write_shift(1, 0)
                                }(e, t), t.write_shift(2, e.bold ? 700 : 400);
                            var r = 0;
                            "superscript" == e.vertAlign ? r = 1 : "subscript" == e.vertAlign && (r = 2), t.write_shift(2, r), t.write_shift(1, e.underline || 0), t.write_shift(1, e.family || 0), t.write_shift(1, e.charset || 0), t.write_shift(1, 0), _n(e.color, t);
                            var a = 0;
                            return "major" == e.scheme && (a = 1), "minor" == e.scheme && (a = 2), t.write_shift(1, a), xr(e.name, t), t.length > t.l ? t.slice(0, t.l) : t
                        }({
                            sz: 12,
                            color: {
                                theme: 1
                            },
                            name: "Calibri",
                            family: 2,
                            scheme: "minor"
                        })), K(e, 612)
                    }(r),
                    function y1(e) {
                        K(e, 603, rt(2)), K(e, 45, gf({
                            patternType: "none"
                        })), K(e, 45, gf({
                            patternType: "gray125"
                        })), K(e, 604)
                    }(r),
                    function A1(e) {
                        K(e, 613, rt(1)), K(e, 46, function w1(e, t) {
                            return t || (t = G(51)), t.write_shift(1, 0), za(0, t), za(0, t), za(0, t), za(0, t), za(0, t), t.length > t.l ? t.slice(0, t.l) : t
                        }()), K(e, 614)
                    }(r),
                    function C1(e) {
                        K(e, 626, rt(1)), K(e, 47, _f({
                            numFmtId: 0,
                            fontId: 0,
                            fillId: 0,
                            borderId: 0
                        }, 65535)), K(e, 627)
                    }(r),
                    function D1(e, t) {
                        K(e, 617, rt(t.length)), t.forEach(function(r) {
                            K(e, 47, _f(r, 0))
                        }), K(e, 618)
                    }(r, t.cellXfs),
                    function O1(e) {
                        K(e, 619, rt(1)), K(e, 48, function k1(e, t) {
                            return t || (t = G(52)), t.write_shift(4, e.xfId), t.write_shift(2, 1), t.write_shift(1, +e.builtinId), t.write_shift(1, 0), gn(e.name || "", t), t.length > t.l ? t.slice(0, t.l) : t
                        }({
                            xfId: 0,
                            builtinId: 0,
                            name: "Normal"
                        })), K(e, 620)
                    }(r),
                    function I1(e) {
                        K(e, 505, rt(0)), K(e, 506)
                    }(r),
                    function R1(e) {
                        K(e, 508, function E1(e, t, r) {
                            var a = G(2052);
                            return a.write_shift(4, e), gn(t, a), gn(r, a), a.length > a.l ? a.slice(0, a.l) : a
                        }(0, "TableStyleMedium9", "PivotStyleMedium4")), K(e, 509)
                    }(r), K(r, 279), r.end()
            }

            function b0(e, t) {
                if (t && t.themeXLSX) return t.themeXLSX;
                if (e && "string" == typeof e.raw) return e.raw;
                var r = [Je];
                return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af"/>', r[r.length] = '<a:font script="Hang" typeface="\ub9d1\uc740 \uace0\ub515"/>', r[r.length] = '<a:font script="Hans" typeface="\u5b8b\u4f53"/>', r[r.length] = '<a:font script="Hant" typeface="\u65b0\u7d30\u660e\u9ad4"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af"/>', r[r.length] = '<a:font script="Hang" typeface="\ub9d1\uc740 \uace0\ub515"/>', r[r.length] = '<a:font script="Hans" typeface="\u5b8b\u4f53"/>', r[r.length] = '<a:font script="Hant" typeface="\u65b0\u7d30\u660e\u9ad4"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("")
            }

            function ix() {
                var e = Dr();
                return K(e, 332), K(e, 334, rt(1)), K(e, 335, function q1(e) {
                    var t = G(12 + 2 * e.name.length);
                    return t.write_shift(4, e.flags), t.write_shift(4, e.version), xr(e.name, t), t.slice(0, t.l)
                }({
                    name: "XLDAPR",
                    version: 12e4,
                    flags: 3496657072
                })), K(e, 336), K(e, 339, function rx(e, t) {
                    var r = G(8 + 2 * t.length);
                    return r.write_shift(4, e), xr(t, r), r.slice(0, r.l)
                }(1, "XLDAPR")), K(e, 52), K(e, 35, rt(514)), K(e, 4096, rt(0)), K(e, 4097, $r(1)), K(e, 36), K(e, 53), K(e, 340), K(e, 337, function ax(e, t) {
                    var r = G(8);
                    return r.write_shift(4, e), r.write_shift(4, t ? 1 : 0), r
                }(1, !0)), K(e, 51, function ex(e) {
                    var t = G(4 + 8 * e.length);
                    t.write_shift(4, e.length);
                    for (var r = 0; r < e.length; ++r) t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1]);
                    return t
                }([
                    [1, 0]
                ])), K(e, 338), K(e, 333), e.end()
            }

            function kf() {
                var e = [Je];
                return e.push('<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">\n  <metadataTypes count="1">\n    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>\n  </metadataTypes>\n  <futureMetadata name="XLDAPR" count="1">\n    <bk>\n      <extLst>\n        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">\n          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>\n        </ext>\n      </extLst>\n    </bk>\n  </futureMetadata>\n  <cellMetadata count="1">\n    <bk>\n      <rc t="1" v="0"/>\n    </bk>\n  </cellMetadata>\n</metadata>'), e.join("")
            }
            var _a = 1024;

            function Ef(e, t) {
                for (var r = [21600, 21600], a = ["m0,0l0", r[1], r[0], r[1], r[0], "0xe"].join(","), n = [q("xml", null, {
                        "xmlns:v": Wr.v,
                        "xmlns:o": Wr.o,
                        "xmlns:x": Wr.x,
                        "xmlns:mv": Wr.mv
                    }).replace(/\/>/, ">"), q("o:shapelayout", q("o:idmap", null, {
                        "v:ext": "edit",
                        data: e
                    }), {
                        "v:ext": "edit"
                    }), q("v:shapetype", [q("v:stroke", null, {
                        joinstyle: "miter"
                    }), q("v:path", null, {
                        gradientshapeok: "t",
                        "o:connecttype": "rect"
                    })].join(""), {
                        id: "_x0000_t202",
                        "o:spt": 202,
                        coordsize: r.join(","),
                        path: a
                    })]; _a < 1e3 * e;) _a += 1e3;
                return t.forEach(function(i) {
                    var s = er(i[0]),
                        f = {
                            color2: "#BEFF82",
                            type: "gradient"
                        };
                    "gradient" == f.type && (f.angle = "-180");
                    var c = "gradient" == f.type ? q("o:fill", null, {
                            type: "gradientUnscaled",
                            "v:ext": "view"
                        }) : null,
                        o = q("v:fill", c, f);
                    ++_a, n = n.concat(["<v:shape" + Ra({
                        id: "_x0000_s" + _a,
                        type: "#_x0000_t202",
                        style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (i[1].hidden ? ";visibility:hidden" : ""),
                        fillcolor: "#ECFAD4",
                        strokecolor: "#edeaa1"
                    }) + ">", o, q("v:shadow", null, {
                        on: "t",
                        obscured: "t"
                    }), q("v:path", null, {
                        "o:connecttype": "none"
                    }), '<v:textbox><div style="text-align:left"></div></v:textbox>', '<x:ClientData ObjectType="Note">', "<x:MoveWithCells/>", "<x:SizeWithCells/>", mr("x:Anchor", [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(",")), mr("x:AutoFill", "False"), mr("x:Row", String(s.r)), mr("x:Column", String(s.c)), i[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>"])
                }), n.push("</xml>"), n.join("")
            }

            function Sf(e) {
                var t = [Je, q("comments", null, {
                        xmlns: Dt[0]
                    })],
                    r = [];
                return t.push("<authors>"), e.forEach(function(a) {
                    a[1].forEach(function(n) {
                        var i = Me(n.a); - 1 == r.indexOf(i) && (r.push(i), t.push("<author>" + i + "</author>")), n.T && n.ID && -1 == r.indexOf("tc=" + n.ID) && (r.push("tc=" + n.ID), t.push("<author>tc=" + n.ID + "</author>"))
                    })
                }), 0 == r.length && (r.push("SheetJ5"), t.push("<author>SheetJ5</author>")), t.push("</authors>"), t.push("<commentList>"), e.forEach(function(a) {
                    var n = 0,
                        i = [];
                    if (a[1][0] && a[1][0].T && a[1][0].ID ? n = r.indexOf("tc=" + a[1][0].ID) : a[1].forEach(function(c) {
                            c.a && (n = r.indexOf(Me(c.a))), i.push(c.t || "")
                        }), t.push('<comment ref="' + a[0] + '" authorId="' + n + '"><text>'), i.length <= 1) t.push(mr("t", Me(i[0] || "")));
                    else {
                        for (var s = "Comment:\n    " + i[0] + "\n", f = 1; f < i.length; ++f) s += "Reply:\n    " + i[f] + "\n";
                        t.push(mr("t", Me(s)))
                    }
                    t.push("</text></comment>")
                }), t.push("</commentList>"), t.length > 2 && (t[t.length] = "</comments>", t[1] = t[1].replace("/>", ">")), t.join("")
            }

            function dx(e, t, r) {
                var a = [Je, q("ThreadedComments", null, {
                    xmlns: ir.TCMNT
                }).replace(/[\/]>/, ">")];
                return e.forEach(function(n) {
                    var i = "";
                    (n[1] || []).forEach(function(s, f) {
                        if (s.T) {
                            s.a && -1 == t.indexOf(s.a) && t.push(s.a);
                            var c = {
                                ref: n[0],
                                id: "{54EE7951-7262-4200-6969-" + ("000000000000" + r.tcid++).slice(-12) + "}"
                            };
                            0 == f ? i = c.id : c.parentId = i, s.ID = c.id, s.a && (c.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + t.indexOf(s.a)).slice(-12) + "}"), a.push(q("threadedComment", mr("text", s.t || ""), c))
                        } else delete s.ID
                    })
                }), a.push("</ThreadedComments>"), a.join("")
            }
            var _x = Er;

            function Ex(e) {
                var t = Dr(),
                    r = [];
                return K(t, 628), K(t, 630), e.forEach(function(a) {
                    a[1].forEach(function(n) {
                        r.indexOf(n.a) > -1 || (r.push(n.a.slice(0, 54)), K(t, 632, function wx(e) {
                            return xr(e.slice(0, 54))
                        }(n.a)))
                    })
                }), K(t, 631), K(t, 633), e.forEach(function(a) {
                    a[1].forEach(function(n) {
                        n.iauthor = r.indexOf(n.a);
                        var i = {
                            s: er(a[0]),
                            e: er(a[0])
                        };
                        K(t, 635, function gx(e, t) {
                            return null == t && (t = G(36)), t.write_shift(4, e[1].iauthor), ma(e[0], t), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t
                        }([i, n])), n.t && n.t.length > 0 && K(t, 637, function Yo(e, t) {
                            var r = !1;
                            return null == t && (r = !0, t = G(23 + 4 * e.t.length)), t.write_shift(1, 1), xr(e.t, t), t.write_shift(4, 1),
                                function $o(e, t) {
                                    t || (t = G(4)), t.write_shift(2, e.ich || 0), t.write_shift(2, e.ifnt || 0)
                                }({
                                    ich: 0,
                                    ifnt: 0
                                }, t), r ? t.slice(0, t.l) : t
                        }(n)), K(t, 636), delete n.iauthor
                    })
                }), K(t, 634), K(t, 629), t.end()
            }
            var Ff = ["xlsb", "xlsm", "xlam", "biff8", "xla"],
                wa = function() {
                    var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
                        t = {
                            r: 0,
                            c: 0
                        };

                    function r(a, n, i, s) {
                        var f = !1,
                            c = !1;
                        0 == i.length ? c = !0 : "[" == i.charAt(0) && (c = !0, i = i.slice(1, -1)), 0 == s.length ? f = !0 : "[" == s.charAt(0) && (f = !0, s = s.slice(1, -1));
                        var o = i.length > 0 ? 0 | parseInt(i, 10) : 0,
                            l = s.length > 0 ? 0 | parseInt(s, 10) : 0;
                        return f ? l += t.c : --l, c ? o += t.r : --o, n + (f ? "" : "$") + Xe(l) + (c ? "" : "$") + Ze(o)
                    }
                    return function(n, i) {
                        return t = i, n.replace(e, r)
                    }
                }(),
                N0 = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
                P0 = function() {
                    return function(t, r) {
                        return t.replace(N0, function(a, n, i, s, f, c) {
                            var o = u0(s) - (i ? 0 : r.c),
                                l = l0(c) - (f ? 0 : r.r);
                            return n + "R" + (0 == l ? "" : f ? l + 1 : "[" + l + "]") + "C" + (0 == o ? "" : i ? o + 1 : "[" + o + "]")
                        })
                    }
                }();

            function yf(e, t) {
                return e.replace(N0, function(r, a, n, i, s, f) {
                    return a + ("$" == n ? n + i : Xe(u0(i) + t.c)) + ("$" == s ? s + f : Ze(l0(f) + t.r))
                })
            }

            function fr(e) {
                e.l += 1
            }

            function bt(e, t) {
                var r = e.read_shift(1 == t ? 1 : 2);
                return [16383 & r, r >> 14 & 1, r >> 15 & 1]
            }

            function Af(e, t, r) {
                var a = 2;
                if (r) {
                    if (r.biff >= 2 && r.biff <= 5) return Cf(e);
                    12 == r.biff && (a = 4)
                }
                var n = e.read_shift(a),
                    i = e.read_shift(a),
                    s = bt(e, 2),
                    f = bt(e, 2);
                return {
                    s: {
                        r: n,
                        c: s[0],
                        cRel: s[1],
                        rRel: s[2]
                    },
                    e: {
                        r: i,
                        c: f[0],
                        cRel: f[1],
                        rRel: f[2]
                    }
                }
            }

            function Cf(e) {
                var t = bt(e, 2),
                    r = bt(e, 2),
                    a = e.read_shift(1),
                    n = e.read_shift(1);
                return {
                    s: {
                        r: t[0],
                        c: a,
                        cRel: t[1],
                        rRel: t[2]
                    },
                    e: {
                        r: r[0],
                        c: n,
                        cRel: r[1],
                        rRel: r[2]
                    }
                }
            }

            function Df(e, t, r) {
                if (r && r.biff >= 2 && r.biff <= 5) return function Rx(e) {
                    var t = bt(e, 2),
                        r = e.read_shift(1);
                    return {
                        r: t[0],
                        c: r,
                        cRel: t[1],
                        rRel: t[2]
                    }
                }(e);
                var a = e.read_shift(r && 12 == r.biff ? 4 : 2),
                    n = bt(e, 2);
                return {
                    r: a,
                    c: n[0],
                    cRel: n[1],
                    rRel: n[2]
                }
            }

            function bx(e) {
                var t = e.read_shift(2),
                    r = e.read_shift(2);
                return {
                    r: t,
                    c: 255 & r,
                    fQuoted: !!(16384 & r),
                    cRel: r >> 15,
                    rRel: r >> 15
                }
            }

            function Of(e) {
                var t = 1 & e[e.l + 1];
                return e.l += 4, [t, 1]
            }

            function If(e) {
                return [e.read_shift(1), e.read_shift(1)]
            }

            function cd(e, t) {
                var r = [e.read_shift(1)];
                if (12 == t) switch (r[0]) {
                    case 2:
                        r[0] = 4;
                        break;
                    case 4:
                        r[0] = 16;
                        break;
                    case 0:
                        r[0] = 1;
                        break;
                    case 1:
                        r[0] = 2
                }
                switch (r[0]) {
                    case 4:
                        r[1] = function rr(e, t) {
                            return 1 === e.read_shift(t)
                        }(e, 1) ? "TRUE" : "FALSE", 12 != t && (e.l += 7);
                        break;
                    case 37:
                    case 16:
                        r[1] = vt[e[e.l]], e.l += 12 == t ? 4 : 8;
                        break;
                    case 0:
                        e.l += 8;
                        break;
                    case 1:
                        r[1] = Tr(e);
                        break;
                    case 2:
                        r[1] = function Qt(e, t, r) {
                            if (r.biff > 5) return function Wa(e, t, r) {
                                var a = e.read_shift(r && 2 == r.biff ? 1 : 2);
                                return 0 === a ? (e.l++, "") : function qt(e, t, r) {
                                    if (r) {
                                        if (r.biff >= 2 && r.biff <= 5) return e.read_shift(t, "cpstr");
                                        if (r.biff >= 12) return e.read_shift(t, "dbcs-cont")
                                    }
                                    var n = e.read_shift(1);
                                    return e.read_shift(t, 0 === n ? "sbcs-cont" : "dbcs-cont")
                                }(e, a, r)
                            }(e, 0, r);
                            var a = e.read_shift(1);
                            return 0 === a ? (e.l++, "") : e.read_shift(a, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont")
                        }(e, 0, {
                            biff: t > 0 && t < 8 ? 2 : t
                        });
                        break;
                    default:
                        throw new Error("Bad SerAr: " + r[0])
                }
                return r
            }

            function od(e, t, r) {
                for (var a = e.read_shift(12 == r.biff ? 4 : 2), n = [], i = 0; i != a; ++i) n.push((12 == r.biff ? Kt : yn)(e, 8));
                return n
            }

            function ld(e, t, r) {
                var a = 0,
                    n = 0;
                12 == r.biff ? (a = e.read_shift(4), n = e.read_shift(4)) : (n = 1 + e.read_shift(1), a = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--a, 0 == --n && (n = 256));
                for (var i = 0, s = []; i != a && (s[i] = []); ++i)
                    for (var f = 0; f != n; ++f) s[i][f] = cd(e, r.biff);
                return s
            }

            function $a(e, t, r) {
                return e.l += 2, [bx(e)]
            }

            function L0(e) {
                return e.l += 6, []
            }

            function Rf(e) {
                return e.l += 2, [sr(e), 1 & e.read_shift(2)]
            }
            var Od = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"],
                bf = {
                    1: {
                        n: "PtgExp",
                        f: function td(e, t, r) {
                            return e.l++, r && 12 == r.biff ? [e.read_shift(4, "i"), 0] : [e.read_shift(2), e.read_shift(r && 2 == r.biff ? 1 : 2)]
                        }
                    },
                    2: {
                        n: "PtgTbl",
                        f: kr
                    },
                    3: {
                        n: "PtgAdd",
                        f: fr
                    },
                    4: {
                        n: "PtgSub",
                        f: fr
                    },
                    5: {
                        n: "PtgMul",
                        f: fr
                    },
                    6: {
                        n: "PtgDiv",
                        f: fr
                    },
                    7: {
                        n: "PtgPower",
                        f: fr
                    },
                    8: {
                        n: "PtgConcat",
                        f: fr
                    },
                    9: {
                        n: "PtgLt",
                        f: fr
                    },
                    10: {
                        n: "PtgLe",
                        f: fr
                    },
                    11: {
                        n: "PtgEq",
                        f: fr
                    },
                    12: {
                        n: "PtgGe",
                        f: fr
                    },
                    13: {
                        n: "PtgGt",
                        f: fr
                    },
                    14: {
                        n: "PtgNe",
                        f: fr
                    },
                    15: {
                        n: "PtgIsect",
                        f: fr
                    },
                    16: {
                        n: "PtgUnion",
                        f: fr
                    },
                    17: {
                        n: "PtgRange",
                        f: fr
                    },
                    18: {
                        n: "PtgUplus",
                        f: fr
                    },
                    19: {
                        n: "PtgUminus",
                        f: fr
                    },
                    20: {
                        n: "PtgPercent",
                        f: fr
                    },
                    21: {
                        n: "PtgParen",
                        f: fr
                    },
                    22: {
                        n: "PtgMissArg",
                        f: fr
                    },
                    23: {
                        n: "PtgStr",
                        f: function fd(e, t, r) {
                            return e.l++, Ua(e, 0, r)
                        }
                    },
                    26: {
                        n: "PtgSheet",
                        f: function bd(e, t, r) {
                            return e.l += 5, e.l += 2, e.l += 2 == r.biff ? 1 : 4, ["PTGSHEET"]
                        }
                    },
                    27: {
                        n: "PtgEndSheet",
                        f: function Nd(e, t, r) {
                            return e.l += 2 == r.biff ? 4 : 5, ["PTGENDSHEET"]
                        }
                    },
                    28: {
                        n: "PtgErr",
                        f: function ad(e) {
                            return e.l++, vt[e.read_shift(1)]
                        }
                    },
                    29: {
                        n: "PtgBool",
                        f: function id(e) {
                            return e.l++, 0 !== e.read_shift(1)
                        }
                    },
                    30: {
                        n: "PtgInt",
                        f: function nd(e) {
                            return e.l++, e.read_shift(2)
                        }
                    },
                    31: {
                        n: "PtgNum",
                        f: function sd(e) {
                            return e.l++, Tr(e)
                        }
                    },
                    32: {
                        n: "PtgArray",
                        f: function Hx(e, t, r) {
                            var a = (96 & e[e.l++]) >> 5;
                            return e.l += 2 == r.biff ? 6 : 12 == r.biff ? 14 : 7, [a]
                        }
                    },
                    33: {
                        n: "PtgFunc",
                        f: function qx(e, t, r) {
                            var a = (96 & e[e.l]) >> 5;
                            e.l += 1;
                            var n = e.read_shift(r && r.biff <= 3 ? 1 : 2);
                            return [rp[n], Lf[n], a]
                        }
                    },
                    34: {
                        n: "PtgFuncVar",
                        f: function Qx(e, t, r) {
                            var a = e[e.l++],
                                n = e.read_shift(1),
                                i = r && r.biff <= 3 ? [88 == a ? -1 : 0, e.read_shift(1)] : function ed(e) {
                                    return [e[e.l + 1] >> 7, 32767 & e.read_shift(2)]
                                }(e);
                            return [n, (0 === i[0] ? Lf : ep)[i[1]]]
                        }
                    },
                    35: {
                        n: "PtgName",
                        f: function ud(e, t, r) {
                            var a = e.read_shift(1) >>> 5 & 3,
                                i = e.read_shift(!r || r.biff >= 8 ? 4 : 2);
                            switch (r.biff) {
                                case 2:
                                    e.l += 5;
                                    break;
                                case 3:
                                case 4:
                                    e.l += 8;
                                    break;
                                case 5:
                                    e.l += 12
                            }
                            return [a, 0, i]
                        }
                    },
                    36: {
                        n: "PtgRef",
                        f: function Yx(e, t, r) {
                            var a = (96 & e[e.l]) >> 5;
                            return e.l += 1, [a, Df(e, 0, r)]
                        }
                    },
                    37: {
                        n: "PtgArea",
                        f: function Lx(e, t, r) {
                            return [(96 & e[e.l++]) >> 5, Af(e, 0, r)]
                        }
                    },
                    38: {
                        n: "PtgMemArea",
                        f: function dd(e, t, r) {
                            var a = e.read_shift(1) >>> 5 & 3;
                            return e.l += r && 2 == r.biff ? 3 : 4, [a, e.read_shift(r && 2 == r.biff ? 1 : 2)]
                        }
                    },
                    39: {
                        n: "PtgMemErr",
                        f: kr
                    },
                    40: {
                        n: "PtgMemNoMem",
                        f: kr
                    },
                    41: {
                        n: "PtgMemFunc",
                        f: function pd(e, t, r) {
                            return [e.read_shift(1) >>> 5 & 3, e.read_shift(r && 2 == r.biff ? 1 : 2)]
                        }
                    },
                    42: {
                        n: "PtgRefErr",
                        f: function md(e, t, r) {
                            var a = e.read_shift(1) >>> 5 & 3;
                            return e.l += 4, r.biff < 8 && e.l--, 12 == r.biff && (e.l += 2), [a]
                        }
                    },
                    43: {
                        n: "PtgAreaErr",
                        f: function Mx(e, t, r) {
                            var a = (96 & e[e.l++]) >> 5;
                            return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [a]
                        }
                    },
                    44: {
                        n: "PtgRefN",
                        f: function Jx(e, t, r) {
                            var a = (96 & e[e.l]) >> 5;
                            e.l += 1;
                            var n = function Nx(e, t, r) {
                                var a = r && r.biff ? r.biff : 8;
                                if (a >= 2 && a <= 5) return function Px(e) {
                                    var t = e.read_shift(2),
                                        r = e.read_shift(1),
                                        a = (32768 & t) >> 15,
                                        n = (16384 & t) >> 14;
                                    return t &= 16383, 1 == a && t >= 8192 && (t -= 16384), 1 == n && r >= 128 && (r -= 256), {
                                        r: t,
                                        c: r,
                                        cRel: n,
                                        rRel: a
                                    }
                                }(e);
                                var n = e.read_shift(a >= 12 ? 4 : 2),
                                    i = e.read_shift(2),
                                    s = (16384 & i) >> 14,
                                    f = (32768 & i) >> 15;
                                if (i &= 16383, 1 == f)
                                    for (; n > 524287;) n -= 1048576;
                                if (1 == s)
                                    for (; i > 8191;) i -= 16384;
                                return {
                                    r: n,
                                    c: i,
                                    cRel: s,
                                    rRel: f
                                }
                            }(e, 0, r);
                            return [a, n]
                        }
                    },
                    45: {
                        n: "PtgAreaN",
                        f: function Wx(e, t, r) {
                            var a = (96 & e[e.l++]) >> 5,
                                n = function Ix(e, t, r) {
                                    if (r.biff < 8) return Cf(e);
                                    var a = e.read_shift(12 == r.biff ? 4 : 2),
                                        n = e.read_shift(12 == r.biff ? 4 : 2),
                                        i = bt(e, 2),
                                        s = bt(e, 2);
                                    return {
                                        s: {
                                            r: a,
                                            c: i[0],
                                            cRel: i[1],
                                            rRel: i[2]
                                        },
                                        e: {
                                            r: n,
                                            c: s[0],
                                            cRel: s[1],
                                            rRel: s[2]
                                        }
                                    }
                                }(e, 0, r);
                            return [a, n]
                        }
                    },
                    46: {
                        n: "PtgMemAreaN",
                        f: function Pd(e) {
                            return [e.read_shift(1) >>> 5 & 3, e.read_shift(2)]
                        }
                    },
                    47: {
                        n: "PtgMemNoMemN",
                        f: function Ld(e) {
                            return [e.read_shift(1) >>> 5 & 3, e.read_shift(2)]
                        }
                    },
                    57: {
                        n: "PtgNameX",
                        f: function hd(e, t, r) {
                            return 5 == r.biff ? function xd(e) {
                                var t = e.read_shift(1) >>> 5 & 3,
                                    r = e.read_shift(2, "i");
                                e.l += 8;
                                var a = e.read_shift(2);
                                return e.l += 12, [t, r, a]
                            }(e) : [e.read_shift(1) >>> 5 & 3, e.read_shift(2), e.read_shift(4)]
                        }
                    },
                    58: {
                        n: "PtgRef3d",
                        f: function Zx(e, t, r) {
                            var a = (96 & e[e.l]) >> 5;
                            e.l += 1;
                            var n = e.read_shift(2);
                            return r && 5 == r.biff && (e.l += 12), [a, n, Df(e, 0, r)]
                        }
                    },
                    59: {
                        n: "PtgArea3d",
                        f: function Bx(e, t, r) {
                            var a = (96 & e[e.l++]) >> 5,
                                n = e.read_shift(2, "i");
                            if (r && 5 === r.biff) e.l += 12;
                            return [a, n, Af(e, 0, r)]
                        }
                    },
                    60: {
                        n: "PtgRefErr3d",
                        f: function vd(e, t, r) {
                            var a = (96 & e[e.l++]) >> 5,
                                n = e.read_shift(2),
                                i = 4;
                            if (r) switch (r.biff) {
                                case 5:
                                    i = 15;
                                    break;
                                case 12:
                                    i = 6
                            }
                            return e.l += i, [a, n]
                        }
                    },
                    61: {
                        n: "PtgAreaErr3d",
                        f: function Ux(e, t, r) {
                            var a = (96 & e[e.l++]) >> 5,
                                n = e.read_shift(2),
                                i = 8;
                            if (r) switch (r.biff) {
                                case 5:
                                    e.l += 12, i = 6;
                                    break;
                                case 12:
                                    i = 12
                            }
                            return e.l += i, [a, n]
                        }
                    },
                    255: {}
                },
                Md = {
                    64: 32,
                    96: 32,
                    65: 33,
                    97: 33,
                    66: 34,
                    98: 34,
                    67: 35,
                    99: 35,
                    68: 36,
                    100: 36,
                    69: 37,
                    101: 37,
                    70: 38,
                    102: 38,
                    71: 39,
                    103: 39,
                    72: 40,
                    104: 40,
                    73: 41,
                    105: 41,
                    74: 42,
                    106: 42,
                    75: 43,
                    107: 43,
                    76: 44,
                    108: 44,
                    77: 45,
                    109: 45,
                    78: 46,
                    110: 46,
                    79: 47,
                    111: 47,
                    88: 34,
                    120: 34,
                    89: 57,
                    121: 57,
                    90: 58,
                    122: 58,
                    91: 59,
                    123: 59,
                    92: 60,
                    124: 60,
                    93: 61,
                    125: 61
                },
                Ud = {
                    1: {
                        n: "PtgElfLel",
                        f: Rf
                    },
                    2: {
                        n: "PtgElfRw",
                        f: $a
                    },
                    3: {
                        n: "PtgElfCol",
                        f: $a
                    },
                    6: {
                        n: "PtgElfRwV",
                        f: $a
                    },
                    7: {
                        n: "PtgElfColV",
                        f: $a
                    },
                    10: {
                        n: "PtgElfRadical",
                        f: $a
                    },
                    11: {
                        n: "PtgElfRadicalS",
                        f: L0
                    },
                    13: {
                        n: "PtgElfColS",
                        f: L0
                    },
                    15: {
                        n: "PtgElfColSV",
                        f: L0
                    },
                    16: {
                        n: "PtgElfRadicalLel",
                        f: Rf
                    },
                    25: {
                        n: "PtgList",
                        f: function Id(e) {
                            e.l += 2;
                            var t = e.read_shift(2),
                                r = e.read_shift(2),
                                a = e.read_shift(4),
                                n = e.read_shift(2),
                                i = e.read_shift(2);
                            return {
                                ixti: t,
                                coltype: 3 & r,
                                rt: Od[r >> 2 & 31],
                                idx: a,
                                c: n,
                                C: i
                            }
                        }
                    },
                    29: {
                        n: "PtgSxName",
                        f: function Rd(e) {
                            return e.l += 2, [e.read_shift(4)]
                        }
                    },
                    255: {}
                },
                Wd = {
                    0: {
                        n: "PtgAttrNoop",
                        f: function Bd(e) {
                            return e.l += 4, [0, 0]
                        }
                    },
                    1: {
                        n: "PtgAttrSemi",
                        f: function $x(e, t, r) {
                            var a = 255 & e[e.l + 1] ? 1 : 0;
                            return e.l += r && 2 == r.biff ? 3 : 4, [a]
                        }
                    },
                    2: {
                        n: "PtgAttrIf",
                        f: function Gx(e, t, r) {
                            var a = 255 & e[e.l + 1] ? 1 : 0;
                            return e.l += 2, [a, e.read_shift(r && 2 == r.biff ? 1 : 2)]
                        }
                    },
                    4: {
                        n: "PtgAttrChoose",
                        f: function Vx(e, t, r) {
                            e.l += 2;
                            for (var a = e.read_shift(r && 2 == r.biff ? 1 : 2), n = [], i = 0; i <= a; ++i) n.push(e.read_shift(r && 2 == r.biff ? 1 : 2));
                            return n
                        }
                    },
                    8: {
                        n: "PtgAttrGoto",
                        f: function Xx(e, t, r) {
                            var a = 255 & e[e.l + 1] ? 1 : 0;
                            return e.l += 2, [a, e.read_shift(r && 2 == r.biff ? 1 : 2)]
                        }
                    },
                    16: {
                        n: "PtgAttrSum",
                        f: function rd(e, t, r) {
                            e.l += r && 2 == r.biff ? 3 : 4
                        }
                    },
                    32: {
                        n: "PtgAttrBaxcel",
                        f: Of
                    },
                    33: {
                        n: "PtgAttrBaxcel",
                        f: Of
                    },
                    64: {
                        n: "PtgAttrSpace",
                        f: function jx(e) {
                            return e.read_shift(2), If(e)
                        }
                    },
                    65: {
                        n: "PtgAttrSpaceSemi",
                        f: function Kx(e) {
                            return e.read_shift(2), If(e)
                        }
                    },
                    128: {
                        n: "PtgAttrIfError",
                        f: function zx(e) {
                            var t = 255 & e[e.l + 1] ? 1 : 0;
                            return e.l += 2, [t, e.read_shift(2)]
                        }
                    },
                    255: {}
                };

            function ja(e, t, r, a) {
                if (a.biff < 8) return kr(e, t);
                for (var n = e.l + t, i = [], s = 0; s !== r.length; ++s) switch (r[s][0]) {
                    case "PtgArray":
                        r[s][1] = ld(e, 0, a), i.push(r[s][1]);
                        break;
                    case "PtgMemArea":
                        r[s][2] = od(e, 0, a), i.push(r[s][2]);
                        break;
                    case "PtgExp":
                        a && 12 == a.biff && (r[s][1][1] = e.read_shift(4), i.push(r[s][1]));
                        break;
                    case "PtgList":
                    case "PtgElfRadicalS":
                    case "PtgElfColS":
                    case "PtgElfColSV":
                        throw "Unsupported " + r[s][0]
                }
                return 0 != (t = n - e.l) && i.push(kr(e, t)), i
            }

            function Hd(e) {
                for (var t = [], r = 0; r < e.length; ++r) {
                    for (var a = e[r], n = [], i = 0; i < a.length; ++i) {
                        var s = a[i];
                        n.push(s ? 2 === s[0] ? '"' + s[1].replace(/"/g, '""') + '"' : s[1] : "")
                    }
                    t.push(n.join(","))
                }
                return t.join(";")
            }
            var Vd = {
                PtgAdd: "+",
                PtgConcat: "&",
                PtgDiv: "/",
                PtgEq: "=",
                PtgGe: ">=",
                PtgGt: ">",
                PtgLe: "<=",
                PtgLt: "<",
                PtgMul: "*",
                PtgNe: "<>",
                PtgPower: "^",
                PtgSub: "-"
            };

            function Nf(e, t, r) {
                if (!e) return "SH33TJSERR0";
                if (r.biff > 8 && (!e.XTI || !e.XTI[t])) return e.SheetNames[t];
                if (!e.XTI) return "SH33TJSERR6";
                var a = e.XTI[t];
                if (r.biff < 8) return t > 1e4 && (t -= 65536), t < 0 && (t = -t), 0 == t ? "" : e.XTI[t - 1];
                if (!a) return "SH33TJSERR1";
                var n = "";
                if (r.biff > 8) switch (e[a[0]][0]) {
                    case 357:
                        return n = -1 == a[1] ? "#REF" : e.SheetNames[a[1]], a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
                    case 358:
                        return null != r.SID ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[a[0]][0];
                    default:
                        return "SH33TJSSRC" + e[a[0]][0]
                }
                switch (e[a[0]][0][0]) {
                    case 1025:
                        return n = -1 == a[1] ? "#REF" : e.SheetNames[a[1]] || "SH33TJSERR3", a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
                    case 14849:
                        return e[a[0]].slice(1).map(function(i) {
                            return i.Name
                        }).join(";;");
                    default:
                        return e[a[0]][0][3] ? (n = -1 == a[1] ? "#REF" : e[a[0]][0][3][a[1]] || "SH33TJSERR4", a[1] == a[2] ? n : n + ":" + e[a[0]][0][3][a[2]]) : "SH33TJSERR2"
                }
            }

            function Pf(e, t, r) {
                var a = Nf(e, t, r);
                return "#REF" == a ? a : function Xd(e, t) {
                    if (!(e || t && t.biff <= 5 && t.biff >= 2)) throw new Error("empty sheet name");
                    return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e
                }(a, r)
            }

            function yr(e, t, r, a, n) {
                var c, o, l, d, i = n && n.biff || 8,
                    s = {
                        s: {
                            c: 0,
                            r: 0
                        },
                        e: {
                            c: 0,
                            r: 0
                        }
                    },
                    f = [],
                    h = 0,
                    x = 0,
                    p = "";
                if (!e[0] || !e[0][0]) return "";
                for (var u = -1, m = "", E = 0, k = e[0].length; E < k; ++E) {
                    var _ = e[0][E];
                    switch (_[0]) {
                        case "PtgUminus":
                            f.push("-" + f.pop());
                            break;
                        case "PtgUplus":
                            f.push("+" + f.pop());
                            break;
                        case "PtgPercent":
                            f.push(f.pop() + "%");
                            break;
                        case "PtgAdd":
                        case "PtgConcat":
                        case "PtgDiv":
                        case "PtgEq":
                        case "PtgGe":
                        case "PtgGt":
                        case "PtgLe":
                        case "PtgLt":
                        case "PtgMul":
                        case "PtgNe":
                        case "PtgPower":
                        case "PtgSub":
                            if (c = f.pop(), o = f.pop(), u >= 0) {
                                switch (e[0][u][1][0]) {
                                    case 0:
                                        m = Ye(" ", e[0][u][1][1]);
                                        break;
                                    case 1:
                                        m = Ye("\r", e[0][u][1][1]);
                                        break;
                                    default:
                                        if (m = "", n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][u][1][0])
                                }
                                o += m, u = -1
                            }
                            f.push(o + Vd[_[0]] + c);
                            break;
                        case "PtgIsect":
                            c = f.pop(), o = f.pop(), f.push(o + " " + c);
                            break;
                        case "PtgUnion":
                            c = f.pop(), o = f.pop(), f.push(o + "," + c);
                            break;
                        case "PtgRange":
                            c = f.pop(), o = f.pop(), f.push(o + ":" + c);
                            break;
                        case "PtgAttrChoose":
                        case "PtgAttrGoto":
                        case "PtgAttrIf":
                        case "PtgAttrIfError":
                        case "PtgAttrBaxcel":
                        case "PtgAttrSemi":
                        case "PtgMemArea":
                        case "PtgTbl":
                        case "PtgMemErr":
                        case "PtgMemAreaN":
                        case "PtgMemNoMemN":
                        case "PtgAttrNoop":
                        case "PtgSheet":
                        case "PtgEndSheet":
                        case "PtgMemFunc":
                        case "PtgMemNoMem":
                            break;
                        case "PtgRef":
                            l = Pa(_[1][1], s, n), f.push(La(l, i));
                            break;
                        case "PtgRefN":
                            l = r ? Pa(_[1][1], r, n) : _[1][1], f.push(La(l, i));
                            break;
                        case "PtgRef3d":
                            h = _[1][1], l = Pa(_[1][2], s, n), p = Pf(a, h, n), f.push(p + "!" + La(l, i));
                            break;
                        case "PtgFunc":
                        case "PtgFuncVar":
                            var P = _[1][0],
                                H = _[1][1];
                            P || (P = 0);
                            var C = 0 == (P &= 127) ? [] : f.slice(-P);
                            f.length -= P, "User" === H && (H = C.shift()), f.push(H + "(" + C.join(",") + ")");
                            break;
                        case "PtgBool":
                            f.push(_[1] ? "TRUE" : "FALSE");
                            break;
                        case "PtgInt":
                        case "PtgErr":
                            f.push(_[1]);
                            break;
                        case "PtgNum":
                            f.push(String(_[1]));
                            break;
                        case "PtgStr":
                            f.push('"' + _[1].replace(/"/g, '""') + '"');
                            break;
                        case "PtgAreaN":
                            d = cs(_[1][1], r ? {
                                s: r
                            } : s, n), f.push(o0(d, n));
                            break;
                        case "PtgArea":
                            d = cs(_[1][1], s, n), f.push(o0(d, n));
                            break;
                        case "PtgArea3d":
                            d = _[1][2], p = Pf(a, h = _[1][1], n), f.push(p + "!" + o0(d, n));
                            break;
                        case "PtgAttrSum":
                            f.push("SUM(" + f.pop() + ")");
                            break;
                        case "PtgName":
                            var N = (a.names || [])[(x = _[1][2]) - 1] || (a[0] || [])[x],
                                R = N ? N.Name : "SH33TJSNAME" + String(x);
                            R && "_xlfn." == R.slice(0, 6) && !n.xlfn && (R = R.slice(6)), f.push(R);
                            break;
                        case "PtgNameX":
                            var X, V = _[1][1];
                            if (x = _[1][2], !(n.biff <= 5)) {
                                var b = "";
                                if (14849 == ((a[V] || [])[0] || [])[0] || (1025 == ((a[V] || [])[0] || [])[0] ? a[V][x] && a[V][x].itab > 0 && (b = a.SheetNames[a[V][x].itab - 1] + "!") : b = a.SheetNames[x - 1] + "!"), a[V] && a[V][x]) b += a[V][x].Name;
                                else if (a[0] && a[0][x]) b += a[0][x].Name;
                                else {
                                    var te = (Nf(a, V, n) || "").split(";;");
                                    te[x - 1] ? b = te[x - 1] : b += "SH33TJSERRX"
                                }
                                f.push(b);
                                break
                            }
                            V < 0 && (V = -V), a[V] && (X = a[V][x]), X || (X = {
                                Name: "SH33TJSERRY"
                            }), f.push(X.Name);
                            break;
                        case "PtgParen":
                            var le = "(",
                                ie = ")";
                            if (u >= 0) {
                                switch (m = "", e[0][u][1][0]) {
                                    case 2:
                                        le = Ye(" ", e[0][u][1][1]) + le;
                                        break;
                                    case 3:
                                        le = Ye("\r", e[0][u][1][1]) + le;
                                        break;
                                    case 4:
                                        ie = Ye(" ", e[0][u][1][1]) + ie;
                                        break;
                                    case 5:
                                        ie = Ye("\r", e[0][u][1][1]) + ie;
                                        break;
                                    default:
                                        if (n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][u][1][0])
                                }
                                u = -1
                            }
                            f.push(le + f.pop() + ie);
                            break;
                        case "PtgRefErr":
                        case "PtgRefErr3d":
                        case "PtgAreaErr":
                        case "PtgAreaErr3d":
                            f.push("#REF!");
                            break;
                        case "PtgExp":
                            var me = {
                                c: r.c,
                                r: r.r
                            };
                            if (a.sharedf[ve(l = {
                                    c: _[1][1],
                                    r: _[1][0]
                                })]) {
                                var he = a.sharedf[ve(l)];
                                f.push(yr(he, 0, me, a, n))
                            } else {
                                var De = !1;
                                for (c = 0; c != a.arrayf.length; ++c)
                                    if (!(l.c < (o = a.arrayf[c])[0].s.c || l.c > o[0].e.c || l.r < o[0].s.r || l.r > o[0].e.r)) {
                                        f.push(yr(o[1], 0, me, a, n)), De = !0;
                                        break
                                    }
                                De || f.push(_[1])
                            }
                            break;
                        case "PtgArray":
                            f.push("{" + Hd(_[1]) + "}");
                            break;
                        case "PtgAttrSpace":
                        case "PtgAttrSpaceSemi":
                            u = E;
                            break;
                        case "PtgMissArg":
                            f.push("");
                            break;
                        case "PtgList":
                            f.push("Table" + _[1].idx + "[#" + _[1].rt + "]");
                            break;
                        case "PtgElfCol":
                        case "PtgElfColS":
                        case "PtgElfColSV":
                        case "PtgElfColV":
                        case "PtgElfLel":
                        case "PtgElfRadical":
                        case "PtgElfRadicalLel":
                        case "PtgElfRadicalS":
                        case "PtgElfRw":
                        case "PtgElfRwV":
                            throw new Error("Unsupported ELFs");
                        default:
                            throw new Error("Unrecognized Formula Token: " + String(_))
                    }
                    if (3 != n.biff && u >= 0 && -1 == ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"].indexOf(e[0][E][0])) {
                        var ge = !0;
                        switch ((_ = e[0][u])[1][0]) {
                            case 4:
                                ge = !1;
                            case 0:
                                m = Ye(" ", _[1][1]);
                                break;
                            case 5:
                                ge = !1;
                            case 1:
                                m = Ye("\r", _[1][1]);
                                break;
                            default:
                                if (m = "", n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + _[1][0])
                        }
                        f.push((ge ? m : "") + f.pop() + (ge ? "" : m)), u = -1
                    }
                }
                if (f.length > 1 && n.WTF) throw new Error("bad formula stack");
                return f[0]
            }

            function bn(e, t, r) {
                var a = e.read_shift(4),
                    n = function Ka(e, t, r) {
                        for (var n, i, a = e.l + t, s = []; a != e.l;) t = a - e.l, n = bf[i = e[e.l]] || bf[Md[i]], (24 === i || 25 === i) && (n = (24 === i ? Ud : Wd)[e[e.l + 1]]), n && n.f ? s.push([n.n, n.f(e, t, r)]) : kr(e, t);
                        return s
                    }(e, a, r),
                    i = e.read_shift(4);
                return [n, i > 0 ? ja(e, i, n, r) : null]
            }
            var Zd = bn,
                Nn = bn,
                qd = bn,
                Qd = bn,
                ep = {
                    0: "BEEP",
                    1: "OPEN",
                    2: "OPEN.LINKS",
                    3: "CLOSE.ALL",
                    4: "SAVE",
                    5: "SAVE.AS",
                    6: "FILE.DELETE",
                    7: "PAGE.SETUP",
                    8: "PRINT",
                    9: "PRINTER.SETUP",
                    10: "QUIT",
                    11: "NEW.WINDOW",
                    12: "ARRANGE.ALL",
                    13: "WINDOW.SIZE",
                    14: "WINDOW.MOVE",
                    15: "FULL",
                    16: "CLOSE",
                    17: "RUN",
                    22: "SET.PRINT.AREA",
                    23: "SET.PRINT.TITLES",
                    24: "SET.PAGE.BREAK",
                    25: "REMOVE.PAGE.BREAK",
                    26: "FONT",
                    27: "DISPLAY",
                    28: "PROTECT.DOCUMENT",
                    29: "PRECISION",
                    30: "A1.R1C1",
                    31: "CALCULATE.NOW",
                    32: "CALCULATION",
                    34: "DATA.FIND",
                    35: "EXTRACT",
                    36: "DATA.DELETE",
                    37: "SET.DATABASE",
                    38: "SET.CRITERIA",
                    39: "SORT",
                    40: "DATA.SERIES",
                    41: "TABLE",
                    42: "FORMAT.NUMBER",
                    43: "ALIGNMENT",
                    44: "STYLE",
                    45: "BORDER",
                    46: "CELL.PROTECTION",
                    47: "COLUMN.WIDTH",
                    48: "UNDO",
                    49: "CUT",
                    50: "COPY",
                    51: "PASTE",
                    52: "CLEAR",
                    53: "PASTE.SPECIAL",
                    54: "EDIT.DELETE",
                    55: "INSERT",
                    56: "FILL.RIGHT",
                    57: "FILL.DOWN",
                    61: "DEFINE.NAME",
                    62: "CREATE.NAMES",
                    63: "FORMULA.GOTO",
                    64: "FORMULA.FIND",
                    65: "SELECT.LAST.CELL",
                    66: "SHOW.ACTIVE.CELL",
                    67: "GALLERY.AREA",
                    68: "GALLERY.BAR",
                    69: "GALLERY.COLUMN",
                    70: "GALLERY.LINE",
                    71: "GALLERY.PIE",
                    72: "GALLERY.SCATTER",
                    73: "COMBINATION",
                    74: "PREFERRED",
                    75: "ADD.OVERLAY",
                    76: "GRIDLINES",
                    77: "SET.PREFERRED",
                    78: "AXES",
                    79: "LEGEND",
                    80: "ATTACH.TEXT",
                    81: "ADD.ARROW",
                    82: "SELECT.CHART",
                    83: "SELECT.PLOT.AREA",
                    84: "PATTERNS",
                    85: "MAIN.CHART",
                    86: "OVERLAY",
                    87: "SCALE",
                    88: "FORMAT.LEGEND",
                    89: "FORMAT.TEXT",
                    90: "EDIT.REPEAT",
                    91: "PARSE",
                    92: "JUSTIFY",
                    93: "HIDE",
                    94: "UNHIDE",
                    95: "WORKSPACE",
                    96: "FORMULA",
                    97: "FORMULA.FILL",
                    98: "FORMULA.ARRAY",
                    99: "DATA.FIND.NEXT",
                    100: "DATA.FIND.PREV",
                    101: "FORMULA.FIND.NEXT",
                    102: "FORMULA.FIND.PREV",
                    103: "ACTIVATE",
                    104: "ACTIVATE.NEXT",
                    105: "ACTIVATE.PREV",
                    106: "UNLOCKED.NEXT",
                    107: "UNLOCKED.PREV",
                    108: "COPY.PICTURE",
                    109: "SELECT",
                    110: "DELETE.NAME",
                    111: "DELETE.FORMAT",
                    112: "VLINE",
                    113: "HLINE",
                    114: "VPAGE",
                    115: "HPAGE",
                    116: "VSCROLL",
                    117: "HSCROLL",
                    118: "ALERT",
                    119: "NEW",
                    120: "CANCEL.COPY",
                    121: "SHOW.CLIPBOARD",
                    122: "MESSAGE",
                    124: "PASTE.LINK",
                    125: "APP.ACTIVATE",
                    126: "DELETE.ARROW",
                    127: "ROW.HEIGHT",
                    128: "FORMAT.MOVE",
                    129: "FORMAT.SIZE",
                    130: "FORMULA.REPLACE",
                    131: "SEND.KEYS",
                    132: "SELECT.SPECIAL",
                    133: "APPLY.NAMES",
                    134: "REPLACE.FONT",
                    135: "FREEZE.PANES",
                    136: "SHOW.INFO",
                    137: "SPLIT",
                    138: "ON.WINDOW",
                    139: "ON.DATA",
                    140: "DISABLE.INPUT",
                    142: "OUTLINE",
                    143: "LIST.NAMES",
                    144: "FILE.CLOSE",
                    145: "SAVE.WORKBOOK",
                    146: "DATA.FORM",
                    147: "COPY.CHART",
                    148: "ON.TIME",
                    149: "WAIT",
                    150: "FORMAT.FONT",
                    151: "FILL.UP",
                    152: "FILL.LEFT",
                    153: "DELETE.OVERLAY",
                    155: "SHORT.MENUS",
                    159: "SET.UPDATE.STATUS",
                    161: "COLOR.PALETTE",
                    162: "DELETE.STYLE",
                    163: "WINDOW.RESTORE",
                    164: "WINDOW.MAXIMIZE",
                    166: "CHANGE.LINK",
                    167: "CALCULATE.DOCUMENT",
                    168: "ON.KEY",
                    169: "APP.RESTORE",
                    170: "APP.MOVE",
                    171: "APP.SIZE",
                    172: "APP.MINIMIZE",
                    173: "APP.MAXIMIZE",
                    174: "BRING.TO.FRONT",
                    175: "SEND.TO.BACK",
                    185: "MAIN.CHART.TYPE",
                    186: "OVERLAY.CHART.TYPE",
                    187: "SELECT.END",
                    188: "OPEN.MAIL",
                    189: "SEND.MAIL",
                    190: "STANDARD.FONT",
                    191: "CONSOLIDATE",
                    192: "SORT.SPECIAL",
                    193: "GALLERY.3D.AREA",
                    194: "GALLERY.3D.COLUMN",
                    195: "GALLERY.3D.LINE",
                    196: "GALLERY.3D.PIE",
                    197: "VIEW.3D",
                    198: "GOAL.SEEK",
                    199: "WORKGROUP",
                    200: "FILL.GROUP",
                    201: "UPDATE.LINK",
                    202: "PROMOTE",
                    203: "DEMOTE",
                    204: "SHOW.DETAIL",
                    206: "UNGROUP",
                    207: "OBJECT.PROPERTIES",
                    208: "SAVE.NEW.OBJECT",
                    209: "SHARE",
                    210: "SHARE.NAME",
                    211: "DUPLICATE",
                    212: "APPLY.STYLE",
                    213: "ASSIGN.TO.OBJECT",
                    214: "OBJECT.PROTECTION",
                    215: "HIDE.OBJECT",
                    216: "SET.EXTRACT",
                    217: "CREATE.PUBLISHER",
                    218: "SUBSCRIBE.TO",
                    219: "ATTRIBUTES",
                    220: "SHOW.TOOLBAR",
                    222: "PRINT.PREVIEW",
                    223: "EDIT.COLOR",
                    224: "SHOW.LEVELS",
                    225: "FORMAT.MAIN",
                    226: "FORMAT.OVERLAY",
                    227: "ON.RECALC",
                    228: "EDIT.SERIES",
                    229: "DEFINE.STYLE",
                    240: "LINE.PRINT",
                    243: "ENTER.DATA",
                    249: "GALLERY.RADAR",
                    250: "MERGE.STYLES",
                    251: "EDITION.OPTIONS",
                    252: "PASTE.PICTURE",
                    253: "PASTE.PICTURE.LINK",
                    254: "SPELLING",
                    256: "ZOOM",
                    259: "INSERT.OBJECT",
                    260: "WINDOW.MINIMIZE",
                    265: "SOUND.NOTE",
                    266: "SOUND.PLAY",
                    267: "FORMAT.SHAPE",
                    268: "EXTEND.POLYGON",
                    269: "FORMAT.AUTO",
                    272: "GALLERY.3D.BAR",
                    273: "GALLERY.3D.SURFACE",
                    274: "FILL.AUTO",
                    276: "CUSTOMIZE.TOOLBAR",
                    277: "ADD.TOOL",
                    278: "EDIT.OBJECT",
                    279: "ON.DOUBLECLICK",
                    280: "ON.ENTRY",
                    281: "WORKBOOK.ADD",
                    282: "WORKBOOK.MOVE",
                    283: "WORKBOOK.COPY",
                    284: "WORKBOOK.OPTIONS",
                    285: "SAVE.WORKSPACE",
                    288: "CHART.WIZARD",
                    289: "DELETE.TOOL",
                    290: "MOVE.TOOL",
                    291: "WORKBOOK.SELECT",
                    292: "WORKBOOK.ACTIVATE",
                    293: "ASSIGN.TO.TOOL",
                    295: "COPY.TOOL",
                    296: "RESET.TOOL",
                    297: "CONSTRAIN.NUMERIC",
                    298: "PASTE.TOOL",
                    302: "WORKBOOK.NEW",
                    305: "SCENARIO.CELLS",
                    306: "SCENARIO.DELETE",
                    307: "SCENARIO.ADD",
                    308: "SCENARIO.EDIT",
                    309: "SCENARIO.SHOW",
                    310: "SCENARIO.SHOW.NEXT",
                    311: "SCENARIO.SUMMARY",
                    312: "PIVOT.TABLE.WIZARD",
                    313: "PIVOT.FIELD.PROPERTIES",
                    314: "PIVOT.FIELD",
                    315: "PIVOT.ITEM",
                    316: "PIVOT.ADD.FIELDS",
                    318: "OPTIONS.CALCULATION",
                    319: "OPTIONS.EDIT",
                    320: "OPTIONS.VIEW",
                    321: "ADDIN.MANAGER",
                    322: "MENU.EDITOR",
                    323: "ATTACH.TOOLBARS",
                    324: "VBAActivate",
                    325: "OPTIONS.CHART",
                    328: "VBA.INSERT.FILE",
                    330: "VBA.PROCEDURE.DEFINITION",
                    336: "ROUTING.SLIP",
                    338: "ROUTE.DOCUMENT",
                    339: "MAIL.LOGON",
                    342: "INSERT.PICTURE",
                    343: "EDIT.TOOL",
                    344: "GALLERY.DOUGHNUT",
                    350: "CHART.TREND",
                    352: "PIVOT.ITEM.PROPERTIES",
                    354: "WORKBOOK.INSERT",
                    355: "OPTIONS.TRANSITION",
                    356: "OPTIONS.GENERAL",
                    370: "FILTER.ADVANCED",
                    373: "MAIL.ADD.MAILER",
                    374: "MAIL.DELETE.MAILER",
                    375: "MAIL.REPLY",
                    376: "MAIL.REPLY.ALL",
                    377: "MAIL.FORWARD",
                    378: "MAIL.NEXT.LETTER",
                    379: "DATA.LABEL",
                    380: "INSERT.TITLE",
                    381: "FONT.PROPERTIES",
                    382: "MACRO.OPTIONS",
                    383: "WORKBOOK.HIDE",
                    384: "WORKBOOK.UNHIDE",
                    385: "WORKBOOK.DELETE",
                    386: "WORKBOOK.NAME",
                    388: "GALLERY.CUSTOM",
                    390: "ADD.CHART.AUTOFORMAT",
                    391: "DELETE.CHART.AUTOFORMAT",
                    392: "CHART.ADD.DATA",
                    393: "AUTO.OUTLINE",
                    394: "TAB.ORDER",
                    395: "SHOW.DIALOG",
                    396: "SELECT.ALL",
                    397: "UNGROUP.SHEETS",
                    398: "SUBTOTAL.CREATE",
                    399: "SUBTOTAL.REMOVE",
                    400: "RENAME.OBJECT",
                    412: "WORKBOOK.SCROLL",
                    413: "WORKBOOK.NEXT",
                    414: "WORKBOOK.PREV",
                    415: "WORKBOOK.TAB.SPLIT",
                    416: "FULL.SCREEN",
                    417: "WORKBOOK.PROTECT",
                    420: "SCROLLBAR.PROPERTIES",
                    421: "PIVOT.SHOW.PAGES",
                    422: "TEXT.TO.COLUMNS",
                    423: "FORMAT.CHARTTYPE",
                    424: "LINK.FORMAT",
                    425: "TRACER.DISPLAY",
                    430: "TRACER.NAVIGATE",
                    431: "TRACER.CLEAR",
                    432: "TRACER.ERROR",
                    433: "PIVOT.FIELD.GROUP",
                    434: "PIVOT.FIELD.UNGROUP",
                    435: "CHECKBOX.PROPERTIES",
                    436: "LABEL.PROPERTIES",
                    437: "LISTBOX.PROPERTIES",
                    438: "EDITBOX.PROPERTIES",
                    439: "PIVOT.REFRESH",
                    440: "LINK.COMBO",
                    441: "OPEN.TEXT",
                    442: "HIDE.DIALOG",
                    443: "SET.DIALOG.FOCUS",
                    444: "ENABLE.OBJECT",
                    445: "PUSHBUTTON.PROPERTIES",
                    446: "SET.DIALOG.DEFAULT",
                    447: "FILTER",
                    448: "FILTER.SHOW.ALL",
                    449: "CLEAR.OUTLINE",
                    450: "FUNCTION.WIZARD",
                    451: "ADD.LIST.ITEM",
                    452: "SET.LIST.ITEM",
                    453: "REMOVE.LIST.ITEM",
                    454: "SELECT.LIST.ITEM",
                    455: "SET.CONTROL.VALUE",
                    456: "SAVE.COPY.AS",
                    458: "OPTIONS.LISTS.ADD",
                    459: "OPTIONS.LISTS.DELETE",
                    460: "SERIES.AXES",
                    461: "SERIES.X",
                    462: "SERIES.Y",
                    463: "ERRORBAR.X",
                    464: "ERRORBAR.Y",
                    465: "FORMAT.CHART",
                    466: "SERIES.ORDER",
                    467: "MAIL.LOGOFF",
                    468: "CLEAR.ROUTING.SLIP",
                    469: "APP.ACTIVATE.MICROSOFT",
                    470: "MAIL.EDIT.MAILER",
                    471: "ON.SHEET",
                    472: "STANDARD.WIDTH",
                    473: "SCENARIO.MERGE",
                    474: "SUMMARY.INFO",
                    475: "FIND.FILE",
                    476: "ACTIVE.CELL.FONT",
                    477: "ENABLE.TIPWIZARD",
                    478: "VBA.MAKE.ADDIN",
                    480: "INSERTDATATABLE",
                    481: "WORKGROUP.OPTIONS",
                    482: "MAIL.SEND.MAILER",
                    485: "AUTOCORRECT",
                    489: "POST.DOCUMENT",
                    491: "PICKLIST",
                    493: "VIEW.SHOW",
                    494: "VIEW.DEFINE",
                    495: "VIEW.DELETE",
                    509: "SHEET.BACKGROUND",
                    510: "INSERT.MAP.OBJECT",
                    511: "OPTIONS.MENONO",
                    517: "MSOCHECKS",
                    518: "NORMAL",
                    519: "LAYOUT",
                    520: "RM.PRINT.AREA",
                    521: "CLEAR.PRINT.AREA",
                    522: "ADD.PRINT.AREA",
                    523: "MOVE.BRK",
                    545: "HIDECURR.NOTE",
                    546: "HIDEALL.NOTES",
                    547: "DELETE.NOTE",
                    548: "TRAVERSE.NOTES",
                    549: "ACTIVATE.NOTES",
                    620: "PROTECT.REVISIONS",
                    621: "UNPROTECT.REVISIONS",
                    647: "OPTIONS.ME",
                    653: "WEB.PUBLISH",
                    667: "NEWWEBQUERY",
                    673: "PIVOT.TABLE.CHART",
                    753: "OPTIONS.SAVE",
                    755: "OPTIONS.SPELL",
                    808: "HIDEALL.INKANNOTS"
                },
                Lf = {
                    0: "COUNT",
                    1: "IF",
                    2: "ISNA",
                    3: "ISERROR",
                    4: "SUM",
                    5: "AVERAGE",
                    6: "MIN",
                    7: "MAX",
                    8: "ROW",
                    9: "COLUMN",
                    10: "NA",
                    11: "NPV",
                    12: "STDEV",
                    13: "DOLLAR",
                    14: "FIXED",
                    15: "SIN",
                    16: "COS",
                    17: "TAN",
                    18: "ATAN",
                    19: "PI",
                    20: "SQRT",
                    21: "EXP",
                    22: "LN",
                    23: "LOG10",
                    24: "ABS",
                    25: "INT",
                    26: "SIGN",
                    27: "ROUND",
                    28: "LOOKUP",
                    29: "INDEX",
                    30: "REPT",
                    31: "MID",
                    32: "LEN",
                    33: "VALUE",
                    34: "TRUE",
                    35: "FALSE",
                    36: "AND",
                    37: "OR",
                    38: "NOT",
                    39: "MOD",
                    40: "DCOUNT",
                    41: "DSUM",
                    42: "DAVERAGE",
                    43: "DMIN",
                    44: "DMAX",
                    45: "DSTDEV",
                    46: "VAR",
                    47: "DVAR",
                    48: "TEXT",
                    49: "LINEST",
                    50: "TREND",
                    51: "LOGEST",
                    52: "GROWTH",
                    53: "GOTO",
                    54: "HALT",
                    55: "RETURN",
                    56: "PV",
                    57: "FV",
                    58: "NPER",
                    59: "PMT",
                    60: "RATE",
                    61: "MIRR",
                    62: "IRR",
                    63: "RAND",
                    64: "MATCH",
                    65: "DATE",
                    66: "TIME",
                    67: "DAY",
                    68: "MONTH",
                    69: "YEAR",
                    70: "WEEKDAY",
                    71: "HOUR",
                    72: "MINUTE",
                    73: "SECOND",
                    74: "NOW",
                    75: "AREAS",
                    76: "ROWS",
                    77: "COLUMNS",
                    78: "OFFSET",
                    79: "ABSREF",
                    80: "RELREF",
                    81: "ARGUMENT",
                    82: "SEARCH",
                    83: "TRANSPOSE",
                    84: "ERROR",
                    85: "STEP",
                    86: "TYPE",
                    87: "ECHO",
                    88: "SET.NAME",
                    89: "CALLER",
                    90: "DEREF",
                    91: "WINDOWS",
                    92: "SERIES",
                    93: "DOCUMENTS",
                    94: "ACTIVE.CELL",
                    95: "SELECTION",
                    96: "RESULT",
                    97: "ATAN2",
                    98: "ASIN",
                    99: "ACOS",
                    100: "CHOOSE",
                    101: "HLOOKUP",
                    102: "VLOOKUP",
                    103: "LINKS",
                    104: "INPUT",
                    105: "ISREF",
                    106: "GET.FORMULA",
                    107: "GET.NAME",
                    108: "SET.VALUE",
                    109: "LOG",
                    110: "EXEC",
                    111: "CHAR",
                    112: "LOWER",
                    113: "UPPER",
                    114: "PROPER",
                    115: "LEFT",
                    116: "RIGHT",
                    117: "EXACT",
                    118: "TRIM",
                    119: "REPLACE",
                    120: "SUBSTITUTE",
                    121: "CODE",
                    122: "NAMES",
                    123: "DIRECTORY",
                    124: "FIND",
                    125: "CELL",
                    126: "ISERR",
                    127: "ISTEXT",
                    128: "ISNUMBER",
                    129: "ISBLANK",
                    130: "T",
                    131: "N",
                    132: "FOPEN",
                    133: "FCLOSE",
                    134: "FSIZE",
                    135: "FREADLN",
                    136: "FREAD",
                    137: "FWRITELN",
                    138: "FWRITE",
                    139: "FPOS",
                    140: "DATEVALUE",
                    141: "TIMEVALUE",
                    142: "SLN",
                    143: "SYD",
                    144: "DDB",
                    145: "GET.DEF",
                    146: "REFTEXT",
                    147: "TEXTREF",
                    148: "INDIRECT",
                    149: "REGISTER",
                    150: "CALL",
                    151: "ADD.BAR",
                    152: "ADD.MENU",
                    153: "ADD.COMMAND",
                    154: "ENABLE.COMMAND",
                    155: "CHECK.COMMAND",
                    156: "RENAME.COMMAND",
                    157: "SHOW.BAR",
                    158: "DELETE.MENU",
                    159: "DELETE.COMMAND",
                    160: "GET.CHART.ITEM",
                    161: "DIALOG.BOX",
                    162: "CLEAN",
                    163: "MDETERM",
                    164: "MINVERSE",
                    165: "MMULT",
                    166: "FILES",
                    167: "IPMT",
                    168: "PPMT",
                    169: "COUNTA",
                    170: "CANCEL.KEY",
                    171: "FOR",
                    172: "WHILE",
                    173: "BREAK",
                    174: "NEXT",
                    175: "INITIATE",
                    176: "REQUEST",
                    177: "POKE",
                    178: "EXECUTE",
                    179: "TERMINATE",
                    180: "RESTART",
                    181: "HELP",
                    182: "GET.BAR",
                    183: "PRODUCT",
                    184: "FACT",
                    185: "GET.CELL",
                    186: "GET.WORKSPACE",
                    187: "GET.WINDOW",
                    188: "GET.DOCUMENT",
                    189: "DPRODUCT",
                    190: "ISNONTEXT",
                    191: "GET.NOTE",
                    192: "NOTE",
                    193: "STDEVP",
                    194: "VARP",
                    195: "DSTDEVP",
                    196: "DVARP",
                    197: "TRUNC",
                    198: "ISLOGICAL",
                    199: "DCOUNTA",
                    200: "DELETE.BAR",
                    201: "UNREGISTER",
                    204: "USDOLLAR",
                    205: "FINDB",
                    206: "SEARCHB",
                    207: "REPLACEB",
                    208: "LEFTB",
                    209: "RIGHTB",
                    210: "MIDB",
                    211: "LENB",
                    212: "ROUNDUP",
                    213: "ROUNDDOWN",
                    214: "ASC",
                    215: "DBCS",
                    216: "RANK",
                    219: "ADDRESS",
                    220: "DAYS360",
                    221: "TODAY",
                    222: "VDB",
                    223: "ELSE",
                    224: "ELSE.IF",
                    225: "END.IF",
                    226: "FOR.CELL",
                    227: "MEDIAN",
                    228: "SUMPRODUCT",
                    229: "SINH",
                    230: "COSH",
                    231: "TANH",
                    232: "ASINH",
                    233: "ACOSH",
                    234: "ATANH",
                    235: "DGET",
                    236: "CREATE.OBJECT",
                    237: "VOLATILE",
                    238: "LAST.ERROR",
                    239: "CUSTOM.UNDO",
                    240: "CUSTOM.REPEAT",
                    241: "FORMULA.CONVERT",
                    242: "GET.LINK.INFO",
                    243: "TEXT.BOX",
                    244: "INFO",
                    245: "GROUP",
                    246: "GET.OBJECT",
                    247: "DB",
                    248: "PAUSE",
                    251: "RESUME",
                    252: "FREQUENCY",
                    253: "ADD.TOOLBAR",
                    254: "DELETE.TOOLBAR",
                    255: "User",
                    256: "RESET.TOOLBAR",
                    257: "EVALUATE",
                    258: "GET.TOOLBAR",
                    259: "GET.TOOL",
                    260: "SPELLING.CHECK",
                    261: "ERROR.TYPE",
                    262: "APP.TITLE",
                    263: "WINDOW.TITLE",
                    264: "SAVE.TOOLBAR",
                    265: "ENABLE.TOOL",
                    266: "PRESS.TOOL",
                    267: "REGISTER.ID",
                    268: "GET.WORKBOOK",
                    269: "AVEDEV",
                    270: "BETADIST",
                    271: "GAMMALN",
                    272: "BETAINV",
                    273: "BINOMDIST",
                    274: "CHIDIST",
                    275: "CHIINV",
                    276: "COMBIN",
                    277: "CONFIDENCE",
                    278: "CRITBINOM",
                    279: "EVEN",
                    280: "EXPONDIST",
                    281: "FDIST",
                    282: "FINV",
                    283: "FISHER",
                    284: "FISHERINV",
                    285: "FLOOR",
                    286: "GAMMADIST",
                    287: "GAMMAINV",
                    288: "CEILING",
                    289: "HYPGEOMDIST",
                    290: "LOGNORMDIST",
                    291: "LOGINV",
                    292: "NEGBINOMDIST",
                    293: "NORMDIST",
                    294: "NORMSDIST",
                    295: "NORMINV",
                    296: "NORMSINV",
                    297: "STANDARDIZE",
                    298: "ODD",
                    299: "PERMUT",
                    300: "POISSON",
                    301: "TDIST",
                    302: "WEIBULL",
                    303: "SUMXMY2",
                    304: "SUMX2MY2",
                    305: "SUMX2PY2",
                    306: "CHITEST",
                    307: "CORREL",
                    308: "COVAR",
                    309: "FORECAST",
                    310: "FTEST",
                    311: "INTERCEPT",
                    312: "PEARSON",
                    313: "RSQ",
                    314: "STEYX",
                    315: "SLOPE",
                    316: "TTEST",
                    317: "PROB",
                    318: "DEVSQ",
                    319: "GEOMEAN",
                    320: "HARMEAN",
                    321: "SUMSQ",
                    322: "KURT",
                    323: "SKEW",
                    324: "ZTEST",
                    325: "LARGE",
                    326: "SMALL",
                    327: "QUARTILE",
                    328: "PERCENTILE",
                    329: "PERCENTRANK",
                    330: "MODE",
                    331: "TRIMMEAN",
                    332: "TINV",
                    334: "MOVIE.COMMAND",
                    335: "GET.MOVIE",
                    336: "CONCATENATE",
                    337: "POWER",
                    338: "PIVOT.ADD.DATA",
                    339: "GET.PIVOT.TABLE",
                    340: "GET.PIVOT.FIELD",
                    341: "GET.PIVOT.ITEM",
                    342: "RADIANS",
                    343: "DEGREES",
                    344: "SUBTOTAL",
                    345: "SUMIF",
                    346: "COUNTIF",
                    347: "COUNTBLANK",
                    348: "SCENARIO.GET",
                    349: "OPTIONS.LISTS.GET",
                    350: "ISPMT",
                    351: "DATEDIF",
                    352: "DATESTRING",
                    353: "NUMBERSTRING",
                    354: "ROMAN",
                    355: "OPEN.DIALOG",
                    356: "SAVE.DIALOG",
                    357: "VIEW.GET",
                    358: "GETPIVOTDATA",
                    359: "HYPERLINK",
                    360: "PHONETIC",
                    361: "AVERAGEA",
                    362: "MAXA",
                    363: "MINA",
                    364: "STDEVPA",
                    365: "VARPA",
                    366: "STDEVA",
                    367: "VARA",
                    368: "BAHTTEXT",
                    369: "THAIDAYOFWEEK",
                    370: "THAIDIGIT",
                    371: "THAIMONTHOFYEAR",
                    372: "THAINUMSOUND",
                    373: "THAINUMSTRING",
                    374: "THAISTRINGLENGTH",
                    375: "ISTHAIDIGIT",
                    376: "ROUNDBAHTDOWN",
                    377: "ROUNDBAHTUP",
                    378: "THAIYEAR",
                    379: "RTD",
                    380: "CUBEVALUE",
                    381: "CUBEMEMBER",
                    382: "CUBEMEMBERPROPERTY",
                    383: "CUBERANKEDMEMBER",
                    384: "HEX2BIN",
                    385: "HEX2DEC",
                    386: "HEX2OCT",
                    387: "DEC2BIN",
                    388: "DEC2HEX",
                    389: "DEC2OCT",
                    390: "OCT2BIN",
                    391: "OCT2HEX",
                    392: "OCT2DEC",
                    393: "BIN2DEC",
                    394: "BIN2OCT",
                    395: "BIN2HEX",
                    396: "IMSUB",
                    397: "IMDIV",
                    398: "IMPOWER",
                    399: "IMABS",
                    400: "IMSQRT",
                    401: "IMLN",
                    402: "IMLOG2",
                    403: "IMLOG10",
                    404: "IMSIN",
                    405: "IMCOS",
                    406: "IMEXP",
                    407: "IMARGUMENT",
                    408: "IMCONJUGATE",
                    409: "IMAGINARY",
                    410: "IMREAL",
                    411: "COMPLEX",
                    412: "IMSUM",
                    413: "IMPRODUCT",
                    414: "SERIESSUM",
                    415: "FACTDOUBLE",
                    416: "SQRTPI",
                    417: "QUOTIENT",
                    418: "DELTA",
                    419: "GESTEP",
                    420: "ISEVEN",
                    421: "ISODD",
                    422: "MROUND",
                    423: "ERF",
                    424: "ERFC",
                    425: "BESSELJ",
                    426: "BESSELK",
                    427: "BESSELY",
                    428: "BESSELI",
                    429: "XIRR",
                    430: "XNPV",
                    431: "PRICEMAT",
                    432: "YIELDMAT",
                    433: "INTRATE",
                    434: "RECEIVED",
                    435: "DISC",
                    436: "PRICEDISC",
                    437: "YIELDDISC",
                    438: "TBILLEQ",
                    439: "TBILLPRICE",
                    440: "TBILLYIELD",
                    441: "PRICE",
                    442: "YIELD",
                    443: "DOLLARDE",
                    444: "DOLLARFR",
                    445: "NOMINAL",
                    446: "EFFECT",
                    447: "CUMPRINC",
                    448: "CUMIPMT",
                    449: "EDATE",
                    450: "EOMONTH",
                    451: "YEARFRAC",
                    452: "COUPDAYBS",
                    453: "COUPDAYS",
                    454: "COUPDAYSNC",
                    455: "COUPNCD",
                    456: "COUPNUM",
                    457: "COUPPCD",
                    458: "DURATION",
                    459: "MDURATION",
                    460: "ODDLPRICE",
                    461: "ODDLYIELD",
                    462: "ODDFPRICE",
                    463: "ODDFYIELD",
                    464: "RANDBETWEEN",
                    465: "WEEKNUM",
                    466: "AMORDEGRC",
                    467: "AMORLINC",
                    468: "CONVERT",
                    724: "SHEETJS",
                    469: "ACCRINT",
                    470: "ACCRINTM",
                    471: "WORKDAY",
                    472: "NETWORKDAYS",
                    473: "GCD",
                    474: "MULTINOMIAL",
                    475: "LCM",
                    476: "FVSCHEDULE",
                    477: "CUBEKPIMEMBER",
                    478: "CUBESET",
                    479: "CUBESETCOUNT",
                    480: "IFERROR",
                    481: "COUNTIFS",
                    482: "SUMIFS",
                    483: "AVERAGEIF",
                    484: "AVERAGEIFS"
                },
                rp = {
                    2: 1,
                    3: 1,
                    10: 0,
                    15: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 0,
                    20: 1,
                    21: 1,
                    22: 1,
                    23: 1,
                    24: 1,
                    25: 1,
                    26: 1,
                    27: 2,
                    30: 2,
                    31: 3,
                    32: 1,
                    33: 1,
                    34: 0,
                    35: 0,
                    38: 1,
                    39: 2,
                    40: 3,
                    41: 3,
                    42: 3,
                    43: 3,
                    44: 3,
                    45: 3,
                    47: 3,
                    48: 2,
                    53: 1,
                    61: 3,
                    63: 0,
                    65: 3,
                    66: 3,
                    67: 1,
                    68: 1,
                    69: 1,
                    70: 1,
                    71: 1,
                    72: 1,
                    73: 1,
                    74: 0,
                    75: 1,
                    76: 1,
                    77: 1,
                    79: 2,
                    80: 2,
                    83: 1,
                    85: 0,
                    86: 1,
                    89: 0,
                    90: 1,
                    94: 0,
                    95: 0,
                    97: 2,
                    98: 1,
                    99: 1,
                    101: 3,
                    102: 3,
                    105: 1,
                    106: 1,
                    108: 2,
                    111: 1,
                    112: 1,
                    113: 1,
                    114: 1,
                    117: 2,
                    118: 1,
                    119: 4,
                    121: 1,
                    126: 1,
                    127: 1,
                    128: 1,
                    129: 1,
                    130: 1,
                    131: 1,
                    133: 1,
                    134: 1,
                    135: 1,
                    136: 2,
                    137: 2,
                    138: 2,
                    140: 1,
                    141: 1,
                    142: 3,
                    143: 4,
                    144: 4,
                    161: 1,
                    162: 1,
                    163: 1,
                    164: 1,
                    165: 2,
                    172: 1,
                    175: 2,
                    176: 2,
                    177: 3,
                    178: 2,
                    179: 1,
                    184: 1,
                    186: 1,
                    189: 3,
                    190: 1,
                    195: 3,
                    196: 3,
                    197: 1,
                    198: 1,
                    199: 3,
                    201: 1,
                    207: 4,
                    210: 3,
                    211: 1,
                    212: 2,
                    213: 2,
                    214: 1,
                    215: 1,
                    225: 0,
                    229: 1,
                    230: 1,
                    231: 1,
                    232: 1,
                    233: 1,
                    234: 1,
                    235: 3,
                    244: 1,
                    247: 4,
                    252: 2,
                    257: 1,
                    261: 1,
                    271: 1,
                    273: 4,
                    274: 2,
                    275: 2,
                    276: 2,
                    277: 3,
                    278: 3,
                    279: 1,
                    280: 3,
                    281: 3,
                    282: 3,
                    283: 1,
                    284: 1,
                    285: 2,
                    286: 4,
                    287: 3,
                    288: 2,
                    289: 4,
                    290: 3,
                    291: 3,
                    292: 3,
                    293: 4,
                    294: 1,
                    295: 3,
                    296: 1,
                    297: 3,
                    298: 1,
                    299: 2,
                    300: 3,
                    301: 3,
                    302: 4,
                    303: 2,
                    304: 2,
                    305: 2,
                    306: 2,
                    307: 2,
                    308: 2,
                    309: 3,
                    310: 2,
                    311: 2,
                    312: 2,
                    313: 2,
                    314: 2,
                    315: 2,
                    316: 4,
                    325: 2,
                    326: 2,
                    327: 2,
                    328: 2,
                    331: 2,
                    332: 2,
                    337: 2,
                    342: 1,
                    343: 1,
                    346: 2,
                    347: 1,
                    350: 4,
                    351: 3,
                    352: 1,
                    353: 2,
                    360: 1,
                    368: 1,
                    369: 1,
                    370: 1,
                    371: 1,
                    372: 1,
                    373: 1,
                    374: 1,
                    375: 1,
                    376: 1,
                    377: 1,
                    378: 1,
                    382: 3,
                    385: 1,
                    392: 1,
                    393: 1,
                    396: 2,
                    397: 2,
                    398: 2,
                    399: 1,
                    400: 1,
                    401: 1,
                    402: 1,
                    403: 1,
                    404: 1,
                    405: 1,
                    406: 1,
                    407: 1,
                    408: 1,
                    409: 1,
                    410: 1,
                    414: 4,
                    415: 1,
                    416: 1,
                    417: 2,
                    420: 1,
                    421: 1,
                    422: 2,
                    424: 1,
                    425: 2,
                    426: 2,
                    427: 2,
                    428: 2,
                    430: 3,
                    438: 3,
                    439: 3,
                    440: 3,
                    443: 2,
                    444: 2,
                    445: 2,
                    446: 2,
                    447: 6,
                    448: 6,
                    449: 2,
                    450: 2,
                    464: 2,
                    468: 3,
                    476: 2,
                    479: 1,
                    480: 2,
                    65535: 0
                };

            function tp(e) {
                return ("of:=" + e.replace(N0, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":")).replace(/;/g, "|").replace(/,/g, ";")
            }

            function ap(e) {
                return e.replace(/\./, "!")
            }
            var Ya = typeof Map < "u";

            function U0(e, t, r) {
                var a = 0,
                    n = e.length;
                if (r) {
                    if (Ya ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t))
                        for (var i = Ya ? r.get(t) : r[t]; a < i.length; ++a)
                            if (e[i[a]].t === t) return e.Count++, i[a]
                } else
                    for (; a < n; ++a)
                        if (e[a].t === t) return e.Count++, a;
                return e[n] = {
                    t
                }, e.Count++, e.Unique++, r && (Ya ? (r.has(t) || r.set(t, []), r.get(t).push(n)) : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []), r[t].push(n))), n
            }

            function Ln(e, t) {
                var r = {
                        min: e + 1,
                        max: e + 1
                    },
                    a = -1;
                return t.MDW && (Fr = t.MDW), null != t.width ? r.customWidth = 1 : null != t.wpx ? a = Xa(t.wpx) : null != t.wch && (a = t.wch), a > -1 ? (r.width = Dn(a), r.customWidth = 1) : null != t.width && (r.width = t.width), t.hidden && (r.hidden = !0), null != t.level && (r.outlineLevel = r.level = t.level), r
            }

            function ta(e, t) {
                if (e) {
                    var r = [.7, .7, .75, .75, .3, .3];
                    "xlml" == t && (r = [1, 1, 1, 1, .5, .5]), null == e.left && (e.left = r[0]), null == e.right && (e.right = r[1]), null == e.top && (e.top = r[2]), null == e.bottom && (e.bottom = r[3]), null == e.header && (e.header = r[4]), null == e.footer && (e.footer = r[5])
                }
            }

            function Nt(e, t, r) {
                var a = r.revssf[null != t.z ? t.z : "General"],
                    n = 60,
                    i = e.length;
                if (null == a && r.ssf)
                    for (; n < 392; ++n)
                        if (null == r.ssf[n]) {
                            nt(t.z, n), r.ssf[n] = t.z, r.revssf[t.z] = a = n;
                            break
                        }
                for (n = 0; n != i; ++n)
                    if (e[n].numFmtId === a) return n;
                return e[i] = {
                    numFmtId: a,
                    fontId: 0,
                    fillId: 0,
                    borderId: 0,
                    xfId: 0,
                    applyNumberFormat: 1
                }, i
            }

            function ip(e, t, r) {
                if (e && e["!ref"]) {
                    var a = Re(e["!ref"]);
                    if (a.e.c < a.s.c || a.e.r < a.s.r) throw new Error("Bad range (" + r + "): " + e["!ref"])
                }
            }
            var wp = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"],
                kp = ["formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables"];

            function bp(e, t, r, a) {
                if (e.c && r["!comments"].push([t, e.c]), void 0 === e.v && "string" != typeof e.f || "z" === e.t && !e.f) return "";
                var n = "",
                    i = e.t,
                    s = e.v;
                if ("z" !== e.t) switch (e.t) {
                    case "b":
                        n = e.v ? "1" : "0";
                        break;
                    case "n":
                        n = "" + e.v;
                        break;
                    case "e":
                        n = vt[e.v];
                        break;
                    case "d":
                        a && a.cellDates ? n = $e(e.v, -1).toISOString() : ((e = He(e)).t = "n", n = "" + (e.v = ur($e(e.v)))), typeof e.z > "u" && (e.z = pe[14]);
                        break;
                    default:
                        n = e.v
                }
                var f = mr("v", Me(n)),
                    c = {
                        r: t
                    },
                    o = Nt(a.cellXfs, e, a);
                switch (0 !== o && (c.s = o), e.t) {
                    case "n":
                    case "z":
                        break;
                    case "d":
                        c.t = "d";
                        break;
                    case "b":
                        c.t = "b";
                        break;
                    case "e":
                        c.t = "e";
                        break;
                    default:
                        if (null == e.v) {
                            delete e.t;
                            break
                        }
                        if (e.v.length > 32767) throw new Error("Text length must not exceed 32767 characters");
                        if (a && a.bookSST) {
                            f = mr("v", "" + U0(a.Strings, e.v, a.revStrings)), c.t = "s";
                            break
                        }
                        c.t = "str"
                }
                if (e.t != i && (e.t = i, e.v = s), "string" == typeof e.f && e.f) {
                    var l = e.F && e.F.slice(0, t.length) == t ? {
                        t: "array",
                        ref: e.F
                    } : null;
                    f = q("f", Me(e.f), l) + (null != e.v ? f : "")
                }
                return e.l && r["!links"].push([t, e.l]), e.D && (c.cm = 1), q("c", f, c)
            }

            function Uf(e, t, r, a) {
                var s, n = [Je, q("worksheet", null, {
                        xmlns: Dt[0],
                        "xmlns:r": ir.r
                    })],
                    f = "",
                    c = r.Sheets[r.SheetNames[e]];
                null == c && (c = {});
                var o = c["!ref"] || "A1",
                    l = Re(o);
                if (l.e.c > 16383 || l.e.r > 1048575) {
                    if (t.WTF) throw new Error("Range " + o + " exceeds format limit A1:XFD1048576");
                    l.e.c = Math.min(l.e.c, 16383), l.e.r = Math.min(l.e.c, 1048575), o = Ee(l)
                }
                a || (a = {}), c["!comments"] = [];
                var h = [];
                (function _p(e, t, r, a, n) {
                    var i = !1,
                        s = {},
                        f = null;
                    if ("xlsx" !== a.bookType && t.vbaraw) {
                        var c = t.SheetNames[r];
                        try {
                            t.Workbook && (c = t.Workbook.Sheets[r].CodeName || c)
                        } catch {}
                        i = !0, s.codeName = st(Me(c))
                    }
                    if (e && e["!outline"]) {
                        var o = {
                            summaryBelow: 1,
                            summaryRight: 1
                        };
                        e["!outline"].above && (o.summaryBelow = 0), e["!outline"].left && (o.summaryRight = 0), f = (f || "") + q("outlinePr", null, o)
                    }!i && !f || (n[n.length] = q("sheetPr", f, s))
                })(c, r, e, t, n), n[n.length] = q("dimension", null, {
                    ref: o
                }), n[n.length] = function Rp(e, t, r, a) {
                    var n = {
                        workbookViewId: "0"
                    };
                    return (((a || {}).Workbook || {}).Views || [])[0] && (n.rightToLeft = a.Workbook.Views[0].RTL ? "1" : "0"), q("sheetViews", q("sheetView", null, n), {})
                }(0, 0, 0, r), t.sheetFormat && (n[n.length] = q("sheetFormatPr", null, {
                    defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
                    baseColWidth: t.sheetFormat.baseColWidth || "10",
                    outlineLevelRow: t.sheetFormat.outlineLevelRow || "7"
                })), null != c["!cols"] && c["!cols"].length > 0 && (n[n.length] = function Ap(e, t) {
                    for (var a, r = ["<cols>"], n = 0; n != t.length; ++n)(a = t[n]) && (r[r.length] = q("col", null, Ln(n, a)));
                    return r[r.length] = "</cols>", r.join("")
                }(0, c["!cols"])), n[s = n.length] = "<sheetData/>", c["!links"] = [], null != c["!ref"] && (f = function Pp(e, t, r, a) {
                    var c, m, n = [],
                        i = [],
                        s = Re(e["!ref"]),
                        f = "",
                        o = "",
                        l = [],
                        h = 0,
                        x = 0,
                        d = e["!rows"],
                        p = Array.isArray(e),
                        u = {
                            r: o
                        },
                        E = -1;
                    for (x = s.s.c; x <= s.e.c; ++x) l[x] = Xe(x);
                    for (h = s.s.r; h <= s.e.r; ++h) {
                        for (i = [], o = Ze(h), x = s.s.c; x <= s.e.c; ++x) {
                            c = l[x] + o;
                            var k = p ? (e[h] || [])[x] : e[c];
                            void 0 !== k && null != (f = bp(k, c, e, t)) && i.push(f)
                        }(i.length > 0 || d && d[h]) && (u = {
                            r: o
                        }, d && d[h] && ((m = d[h]).hidden && (u.hidden = 1), E = -1, m.hpx ? E = Ga(m.hpx) : m.hpt && (E = m.hpt), E > -1 && (u.ht = E, u.customHeight = 1), m.level && (u.outlineLevel = m.level)), n[n.length] = q("row", i.join(""), u))
                    }
                    if (d)
                        for (; h < d.length; ++h) d && d[h] && (u = {
                            r: h + 1
                        }, (m = d[h]).hidden && (u.hidden = 1), E = -1, m.hpx ? E = Ga(m.hpx) : m.hpt && (E = m.hpt), E > -1 && (u.ht = E, u.customHeight = 1), m.level && (u.outlineLevel = m.level), n[n.length] = q("row", "", u));
                    return n.join("")
                }(c, t), f.length > 0 && (n[n.length] = f)), n.length > s + 1 && (n[n.length] = "</sheetData>", n[s] = n[s].replace("/>", ">")), c["!protect"] && (n[n.length] = function Ep(e) {
                    var t = {
                        sheet: 1
                    };
                    return wp.forEach(function(r) {
                        null != e[r] && e[r] && (t[r] = "1")
                    }), kp.forEach(function(r) {
                        null != e[r] && !e[r] && (t[r] = "0")
                    }), e.password && (t.password = D0(e.password).toString(16).toUpperCase()), q("sheetProtection", null, t)
                }(c["!protect"])), null != c["!autofilter"] && (n[n.length] = function Dp(e, t, r, a) {
                    var n = "string" == typeof e.ref ? e.ref : Ee(e.ref);
                    r.Workbook || (r.Workbook = {
                        Sheets: []
                    }), r.Workbook.Names || (r.Workbook.Names = []);
                    var i = r.Workbook.Names,
                        s = Or(n);
                    s.s.r == s.e.r && (s.e.r = Or(t["!ref"]).e.r, n = Ee(s));
                    for (var f = 0; f < i.length; ++f) {
                        var c = i[f];
                        if ("_xlnm._FilterDatabase" == c.Name && c.Sheet == a) {
                            c.Ref = "'" + r.SheetNames[a] + "'!" + n;
                            break
                        }
                    }
                    return f == i.length && i.push({
                        Name: "_xlnm._FilterDatabase",
                        Sheet: a,
                        Ref: "'" + r.SheetNames[a] + "'!" + n
                    }), q("autoFilter", null, {
                        ref: n
                    })
                }(c["!autofilter"], c, r, e)), null != c["!merges"] && c["!merges"].length > 0 && (n[n.length] = function vp(e) {
                    if (0 === e.length) return "";
                    for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r) t += '<mergeCell ref="' + Ee(e[r]) + '"/>';
                    return t + "</mergeCells>"
                }(c["!merges"]));
                var d, x = -1,
                    p = -1;
                return c["!links"].length > 0 && (n[n.length] = "<hyperlinks>", c["!links"].forEach(function(u) {
                    u[1].Target && (d = {
                        ref: u[0]
                    }, "#" != u[1].Target.charAt(0) && (p = Ne(a, -1, Me(u[1].Target).replace(/#.*$/, ""), Te.HLINK), d["r:id"] = "rId" + p), (x = u[1].Target.indexOf("#")) > -1 && (d.location = Me(u[1].Target.slice(x + 1))), u[1].Tooltip && (d.tooltip = Me(u[1].Tooltip)), n[n.length] = q("hyperlink", null, d))
                }), n[n.length] = "</hyperlinks>"), delete c["!links"], null != c["!margins"] && (n[n.length] = function Fp(e) {
                    return ta(e), q("pageMargins", null, e)
                }(c["!margins"])), (!t || t.ignoreEC || null == t.ignoreEC) && (n[n.length] = mr("ignoredErrors", q("ignoredError", null, {
                    numberStoredAsText: 1,
                    sqref: o
                }))), h.length > 0 && (p = Ne(a, -1, "../drawings/drawing" + (e + 1) + ".xml", Te.DRAW), n[n.length] = q("drawing", null, {
                    "r:id": "rId" + p
                }), c["!drawing"] = h), c["!comments"].length > 0 && (p = Ne(a, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", Te.VML), n[n.length] = q("legacyDrawing", null, {
                    "r:id": "rId" + p
                }), c["!legacy"] = p), n.length > 1 && (n[n.length] = "</worksheet>", n[1] = n[1].replace("/>", ">")), n.join("")
            }

            function Mp(e, t, r, a) {
                var n = function Bp(e, t, r) {
                    var a = G(145),
                        n = (r["!rows"] || [])[e] || {};
                    a.write_shift(4, e), a.write_shift(4, 0);
                    var i = 320;
                    n.hpx ? i = 20 * Ga(n.hpx) : n.hpt && (i = 20 * n.hpt), a.write_shift(2, i), a.write_shift(1, 0);
                    var s = 0;
                    n.level && (s |= n.level), n.hidden && (s |= 16), (n.hpx || n.hpt) && (s |= 32), a.write_shift(1, s), a.write_shift(1, 0);
                    var f = 0,
                        c = a.l;
                    a.l += 4;
                    for (var o = {
                            r: e,
                            c: 0
                        }, l = 0; l < 16; ++l)
                        if (!(t.s.c > l + 1 << 10 || t.e.c < l << 10)) {
                            for (var h = -1, x = -1, d = l << 10; d < l + 1 << 10; ++d) o.c = d, (Array.isArray(r) ? (r[o.r] || [])[o.c] : r[ve(o)]) && (h < 0 && (h = d), x = d);
                            h < 0 || (++f, a.write_shift(4, h), a.write_shift(4, x))
                        }
                    var u = a.l;
                    return a.l = c, a.write_shift(4, f), a.l = u, a.length > a.l ? a.slice(0, a.l) : a
                }(a, r, t);
                (n.length > 17 || (t["!rows"] || [])[a]) && K(e, 0, n)
            }
            var Up = Kt,
                Wp = ma;
            var Em = Kt,
                Tm = ma,
                Hf = ["left", "right", "top", "bottom", "header", "footer"];

            function Wm(e, t, r, a, n, i, s) {
                if (void 0 === t.v) return !1;
                var f = "";
                switch (t.t) {
                    case "b":
                        f = t.v ? "1" : "0";
                        break;
                    case "d":
                        (t = He(t)).z = t.z || pe[14], t.v = ur($e(t.v)), t.t = "n";
                        break;
                    case "n":
                    case "e":
                        f = "" + t.v;
                        break;
                    default:
                        f = t.v
                }
                var c = {
                    r,
                    c: a
                };
                switch (c.s = Nt(n.cellXfs, t, n), t.l && i["!links"].push([ve(c), t.l]), t.c && i["!comments"].push([ve(c), t.c]), t.t) {
                    case "s":
                    case "str":
                        return n.bookSST ? (f = U0(n.Strings, t.v, n.revStrings), c.t = "s", c.v = f, s ? K(e, 18, function im(e, t, r) {
                            return null == r && (r = G(8)), jt(t, r), r.write_shift(4, t.v), r
                        }(0, c)) : K(e, 7, function am(e, t, r) {
                            return null == r && (r = G(12)), zt(t, r), r.write_shift(4, t.v), r
                        }(0, c))) : (c.t = "str", s ? K(e, 17, function vm(e, t, r) {
                            return null == r && (r = G(8 + 4 * e.v.length)), jt(t, r), xr(e.v, r), r.length > r.l ? r.slice(0, r.l) : r
                        }(t, c)) : K(e, 6, function pm(e, t, r) {
                            return null == r && (r = G(12 + 4 * e.v.length)), zt(t, r), xr(e.v, r), r.length > r.l ? r.slice(0, r.l) : r
                        }(t, c))), !0;
                    case "n":
                        return t.v == (0 | t.v) && t.v > -1e3 && t.v < 1e3 ? s ? K(e, 13, function hm(e, t, r) {
                            return null == r && (r = G(8)), jt(t, r), hs(e.v, r), r
                        }(t, c)) : K(e, 2, function lm(e, t, r) {
                            return null == r && (r = G(12)), zt(t, r), hs(e.v, r), r
                        }(t, c)) : s ? K(e, 16, function cm(e, t, r) {
                            return null == r && (r = G(12)), jt(t, r), Yt(e.v, r), r
                        }(t, c)) : K(e, 5, function fm(e, t, r) {
                            return null == r && (r = G(16)), zt(t, r), Yt(e.v, r), r
                        }(t, c)), !0;
                    case "b":
                        return c.t = "b", s ? K(e, 15, function Zp(e, t, r) {
                            return null == r && (r = G(5)), jt(t, r), r.write_shift(1, e.v ? 1 : 0), r
                        }(t, c)) : K(e, 4, function Yp(e, t, r) {
                            return null == r && (r = G(9)), zt(t, r), r.write_shift(1, e.v ? 1 : 0), r
                        }(t, c)), !0;
                    case "e":
                        return c.t = "e", s ? K(e, 14, function rm(e, t, r) {
                            return null == r && (r = G(8)), jt(t, r), r.write_shift(1, e.v), r.write_shift(2, 0), r.write_shift(1, 0), r
                        }(t, c)) : K(e, 3, function Qp(e, t, r) {
                            return null == r && (r = G(9)), zt(t, r), r.write_shift(1, e.v), r
                        }(t, c)), !0
                }
                return s ? K(e, 12, function jp(e, t, r) {
                    return null == r && (r = G(4)), jt(t, r)
                }(0, c)) : K(e, 1, function zp(e, t, r) {
                    return null == r && (r = G(8)), zt(t, r)
                }(0, c)), !0
            }

            function Jm(e, t, r, a) {
                var n = Dr(),
                    i = r.SheetNames[e],
                    s = r.Sheets[i] || {},
                    f = i;
                try {
                    r && r.Workbook && (f = r.Workbook.Sheets[e].CodeName || f)
                } catch {}
                var c = Re(s["!ref"] || "A1");
                if (c.e.c > 16383 || c.e.r > 1048575) {
                    if (t.WTF) throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
                    c.e.c = Math.min(c.e.c, 16383), c.e.r = Math.min(c.e.c, 1048575)
                }
                return s["!links"] = [], s["!comments"] = [], K(n, 129), (r.vbaraw || s["!outline"]) && K(n, 147, function Xp(e, t, r) {
                        null == r && (r = G(84 + 4 * e.length));
                        var a = 192;
                        t && (t.above && (a &= -65), t.left && (a &= -129)), r.write_shift(1, a);
                        for (var n = 1; n < 3; ++n) r.write_shift(1, 0);
                        return _n({
                            auto: 1
                        }, r), r.write_shift(-4, -1), r.write_shift(-4, -1), us(e, r), r.slice(0, r.l)
                    }(f, s["!outline"])), K(n, 148, Wp(c)),
                    function Km(e, t, r) {
                        K(e, 133), K(e, 137, function Nm(e, t, r) {
                            null == r && (r = G(30));
                            var a = 924;
                            return (((t || {}).Views || [])[0] || {}).RTL && (a |= 32), r.write_shift(2, a), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 100), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(4, 0), r
                        }(0, r)), K(e, 138), K(e, 134)
                    }(n, 0, r.Workbook),
                    function Xm(e, t) {
                        !t || !t["!cols"] || (K(e, 390), t["!cols"].forEach(function(r, a) {
                            r && K(e, 60, function Om(e, t, r) {
                                null == r && (r = G(18));
                                var a = Ln(e, t);
                                r.write_shift(-4, e), r.write_shift(-4, e), r.write_shift(4, 256 * (a.width || 10)), r.write_shift(4, 0);
                                var n = 0;
                                return t.hidden && (n |= 1), "number" == typeof a.width && (n |= 2), t.level && (n |= t.level << 8), r.write_shift(2, n), r
                            }(a, r))
                        }), K(e, 391))
                    }(n, s),
                    function Hm(e, t, r, a) {
                        var n = Re(t["!ref"] || "A1"),
                            s = "",
                            f = [];
                        K(e, 145);
                        var c = Array.isArray(t),
                            o = n.e.r;
                        t["!rows"] && (o = Math.max(n.e.r, t["!rows"].length - 1));
                        for (var l = n.s.r; l <= o; ++l) {
                            s = Ze(l), Mp(e, t, n, l);
                            var h = !1;
                            if (l <= n.e.r)
                                for (var x = n.s.c; x <= n.e.c; ++x) {
                                    l === n.s.r && (f[x] = Xe(x));
                                    var d = c ? (t[l] || [])[x] : t[f[x] + s];
                                    h = !!d && Wm(e, d, l, x, a, t, h)
                                }
                        }
                        K(e, 146)
                    }(n, s, 0, t),
                    function Ym(e, t) {
                        t["!protect"] && K(e, 535, function Lm(e, t) {
                            return null == t && (t = G(66)), t.write_shift(2, e.password ? D0(e.password) : 0), t.write_shift(4, 1), [
                                ["objects", !1],
                                ["scenarios", !1],
                                ["formatCells", !0],
                                ["formatColumns", !0],
                                ["formatRows", !0],
                                ["insertColumns", !0],
                                ["insertRows", !0],
                                ["insertHyperlinks", !0],
                                ["deleteColumns", !0],
                                ["deleteRows", !0],
                                ["selectLockedCells", !1],
                                ["sort", !0],
                                ["autoFilter", !0],
                                ["pivotTables", !0],
                                ["selectUnlockedCells", !1]
                            ].forEach(function(r) {
                                t.write_shift(4, r[1] ? null == e[r[0]] || e[r[0]] ? 0 : 1 : null != e[r[0]] && e[r[0]] ? 0 : 1)
                            }), t
                        }(t["!protect"]))
                    }(n, s),
                    function jm(e, t, r, a) {
                        if (t["!autofilter"]) {
                            var n = t["!autofilter"],
                                i = "string" == typeof n.ref ? n.ref : Ee(n.ref);
                            r.Workbook || (r.Workbook = {
                                Sheets: []
                            }), r.Workbook.Names || (r.Workbook.Names = []);
                            var s = r.Workbook.Names,
                                f = Or(i);
                            f.s.r == f.e.r && (f.e.r = Or(t["!ref"]).e.r, i = Ee(f));
                            for (var c = 0; c < s.length; ++c) {
                                var o = s[c];
                                if ("_xlnm._FilterDatabase" == o.Name && o.Sheet == a) {
                                    o.Ref = "'" + r.SheetNames[a] + "'!" + i;
                                    break
                                }
                            }
                            c == s.length && s.push({
                                Name: "_xlnm._FilterDatabase",
                                Sheet: a,
                                Ref: "'" + r.SheetNames[a] + "'!" + i
                            }), K(e, 161, ma(Re(i))), K(e, 162)
                        }
                    }(n, s, r, e),
                    function Vm(e, t) {
                        !t || !t["!merges"] || (K(e, 177, function Sm(e, t) {
                            return null == t && (t = G(4)), t.write_shift(4, e), t
                        }(t["!merges"].length)), t["!merges"].forEach(function(r) {
                            K(e, 176, Tm(r))
                        }), K(e, 178))
                    }(n, s),
                    function zm(e, t, r) {
                        t["!links"].forEach(function(a) {
                            if (a[1].Target) {
                                var n = Ne(r, -1, a[1].Target.replace(/#.*$/, ""), Te.HLINK);
                                K(e, 494, function ym(e, t) {
                                    var r = G(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
                                    ma({
                                        s: er(e[0]),
                                        e: er(e[0])
                                    }, r), p0("rId" + t, r);
                                    var a = e[1].Target.indexOf("#");
                                    return xr((-1 == a ? "" : e[1].Target.slice(a + 1)) || "", r), xr(e[1].Tooltip || "", r), xr("", r), r.slice(0, r.l)
                                }(a, n))
                            }
                        }), delete t["!links"]
                    }(n, s, a), s["!margins"] && K(n, 476, function Rm(e, t) {
                        return null == t && (t = G(48)), ta(e), Hf.forEach(function(r) {
                            Yt(e[r], t)
                        }), t
                    }(s["!margins"])), (!t || t.ignoreEC || null == t.ignoreEC) && function Gm(e, t) {
                        !t || !t["!ref"] || (K(e, 648), K(e, 649, function Pm(e) {
                            var t = G(24);
                            return t.write_shift(4, 4), t.write_shift(4, 1), ma(e, t), t
                        }(Re(t["!ref"]))), K(e, 650))
                    }(n, s),
                    function $m(e, t, r, a) {
                        if (t["!comments"].length > 0) {
                            var n = Ne(a, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", Te.VML);
                            K(e, 551, p0("rId" + n)), t["!legacy"] = n
                        }
                    }(n, s, e, a), K(n, 130), n.end()
            }
            var H0 = [
                    ["allowRefreshQuery", !1, "bool"],
                    ["autoCompressPictures", !0, "bool"],
                    ["backupFile", !1, "bool"],
                    ["checkCompatibility", !1, "bool"],
                    ["CodeName", ""],
                    ["date1904", !1, "bool"],
                    ["defaultThemeVersion", 0, "int"],
                    ["filterPrivacy", !1, "bool"],
                    ["hidePivotFieldList", !1, "bool"],
                    ["promptedSolutions", !1, "bool"],
                    ["publishItems", !1, "bool"],
                    ["refreshAllConnections", !1, "bool"],
                    ["saveExternalLinkValues", !0, "bool"],
                    ["showBorderUnselectedTables", !0, "bool"],
                    ["showInkAnnotation", !0, "bool"],
                    ["showObjects", "all"],
                    ["showPivotChartFilter", !1, "bool"],
                    ["updateLinks", "userSet"]
                ],
                cv = "][*?/\\".split("");

            function zf(e, t) {
                if (e.length > 31) {
                    if (t) return !1;
                    throw new Error("Sheet names cannot exceed 31 chars")
                }
                var r = !0;
                return cv.forEach(function(a) {
                    if (-1 != e.indexOf(a)) {
                        if (!t) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
                        r = !1
                    }
                }), r
            }

            function jf(e) {
                var t = [Je];
                t[t.length] = q("workbook", null, {
                    xmlns: Dt[0],
                    "xmlns:r": ir.r
                });
                var r = e.Workbook && (e.Workbook.Names || []).length > 0,
                    a = {
                        codeName: "ThisWorkbook"
                    };
                e.Workbook && e.Workbook.WBProps && (H0.forEach(function(f) {
                    null != e.Workbook.WBProps[f[0]] && e.Workbook.WBProps[f[0]] != f[1] && (a[f[0]] = e.Workbook.WBProps[f[0]])
                }), e.Workbook.WBProps.CodeName && (a.codeName = e.Workbook.WBProps.CodeName, delete a.CodeName)), t[t.length] = q("workbookPr", null, a);
                var n = e.Workbook && e.Workbook.Sheets || [],
                    i = 0;
                if (n && n[0] && n[0].Hidden) {
                    for (t[t.length] = "<bookViews>", i = 0; i != e.SheetNames.length && n[i] && n[i].Hidden; ++i);
                    i == e.SheetNames.length && (i = 0), t[t.length] = '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>', t[t.length] = "</bookViews>"
                }
                for (t[t.length] = "<sheets>", i = 0; i != e.SheetNames.length; ++i) {
                    var s = {
                        name: Me(e.SheetNames[i].slice(0, 31))
                    };
                    if (s.sheetId = "" + (i + 1), s["r:id"] = "rId" + (i + 1), n[i]) switch (n[i].Hidden) {
                        case 1:
                            s.state = "hidden";
                            break;
                        case 2:
                            s.state = "veryHidden"
                    }
                    t[t.length] = q("sheet", null, s)
                }
                return t[t.length] = "</sheets>", r && (t[t.length] = "<definedNames>", e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach(function(f) {
                    var c = {
                        name: f.Name
                    };
                    f.Comment && (c.comment = f.Comment), null != f.Sheet && (c.localSheetId = "" + f.Sheet), f.Hidden && (c.hidden = "1"), f.Ref && (t[t.length] = q("definedName", Me(f.Ref), c))
                }), t[t.length] = "</definedNames>"), t.length > 2 && (t[t.length] = "</workbook>", t[1] = t[1].replace("/>", ">")), t.join("")
            }

            function xv(e, t) {
                return t || (t = G(127)), t.write_shift(4, e.Hidden), t.write_shift(4, e.iTabID), p0(e.strRelID, t), xr(e.name.slice(0, 31), t), t.length > t.l ? t.slice(0, t.l) : t
            }

            function Tv(e, t) {
                var r = Dr();
                return K(r, 131), K(r, 128, function wv(e, t) {
                        t || (t = G(127));
                        for (var r = 0; 4 != r; ++r) t.write_shift(4, 0);
                        return xr("SheetJS", t), xr(xe.version, t), xr(xe.version, t), xr("7262", t), t.length > t.l ? t.slice(0, t.l) : t
                    }()), K(r, 153, function pv(e, t) {
                        t || (t = G(72));
                        var r = 0;
                        return e && e.filterPrivacy && (r |= 8), t.write_shift(4, r), t.write_shift(4, 0), us(e && e.CodeName || "ThisWorkbook", t), t.slice(0, t.l)
                    }(e.Workbook && e.Workbook.WBProps || null)),
                    function Ev(e, t) {
                        if (t.Workbook && t.Workbook.Sheets) {
                            for (var r = t.Workbook.Sheets, a = 0, n = -1, i = -1; a < r.length; ++a) !r[a] || !r[a].Hidden && -1 == n ? n = a : 1 == r[a].Hidden && -1 == i && (i = a);
                            i > n || (K(e, 135), K(e, 158, function kv(e, t) {
                                return t || (t = G(29)), t.write_shift(-4, 0), t.write_shift(-4, 460), t.write_shift(4, 28800), t.write_shift(4, 17600), t.write_shift(4, 500), t.write_shift(4, e), t.write_shift(4, e), t.write_shift(1, 120), t.length > t.l ? t.slice(0, t.l) : t
                            }(n)), K(e, 136))
                        }
                    }(r, e),
                    function _v(e, t) {
                        K(e, 143);
                        for (var r = 0; r != t.SheetNames.length; ++r) K(e, 156, xv({
                            Hidden: t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden || 0,
                            iTabID: r + 1,
                            strRelID: "rId" + (r + 1),
                            name: t.SheetNames[r]
                        }));
                        K(e, 144)
                    }(r, e), K(r, 132), r.end()
            }

            function Bv(e, t, r, a, n) {
                return (".bin" === t.slice(-4) ? Jm : Uf)(e, r, a, n)
            }

            function Wv(e, t, r) {
                return (".bin" === t.slice(-4) ? Ex : Sf)(e, r)
            }

            function Jf(e) {
                return q("NamedRange", null, {
                    "ss:Name": e.Name,
                    "ss:RefersTo": "=" + P0(e.Ref, {
                        r: 0,
                        c: 0
                    })
                })
            }

            function t2(e, t, r, a, n, i, s) {
                if (!e || null == e.v && null == e.f) return "";
                var f = {};
                if (e.f && (f["ss:Formula"] = "=" + Me(P0(e.f, s))), e.F && e.F.slice(0, t.length) == t) {
                    var c = er(e.F.slice(t.length + 1));
                    f["ss:ArrayRange"] = "RC:R" + (c.r == s.r ? "" : "[" + (c.r - s.r) + "]") + "C" + (c.c == s.c ? "" : "[" + (c.c - s.c) + "]")
                }
                if (e.l && e.l.Target && (f["ss:HRef"] = Me(e.l.Target), e.l.Tooltip && (f["x:HRefScreenTip"] = Me(e.l.Tooltip))), r["!merges"])
                    for (var o = r["!merges"], l = 0; l != o.length; ++l) o[l].s.c != s.c || o[l].s.r != s.r || (o[l].e.c > o[l].s.c && (f["ss:MergeAcross"] = o[l].e.c - o[l].s.c), o[l].e.r > o[l].s.r && (f["ss:MergeDown"] = o[l].e.r - o[l].s.r));
                var h = "",
                    x = "";
                switch (e.t) {
                    case "z":
                        if (!a.sheetStubs) return "";
                        break;
                    case "n":
                        h = "Number", x = String(e.v);
                        break;
                    case "b":
                        h = "Boolean", x = e.v ? "1" : "0";
                        break;
                    case "e":
                        h = "Error", x = vt[e.v];
                        break;
                    case "d":
                        h = "DateTime", x = new Date(e.v).toISOString(), null == e.z && (e.z = e.z || pe[14]);
                        break;
                    case "s":
                        h = "String", x = function So(e) {
                            return (e + "").replace(Qn, function(r) {
                                return qn[r]
                            }).replace(Wi, function(r) {
                                return "&#x" + r.charCodeAt(0).toString(16).toUpperCase() + ";"
                            })
                        }(e.v || "")
                }
                var d = Nt(a.cellXfs, e, a);
                f["ss:StyleID"] = "s" + (21 + d), f["ss:Index"] = s.c + 1;
                var u = "z" == e.t ? "" : '<Data ss:Type="' + h + '">' + (null != e.v ? x : "") + "</Data>";
                return (e.c || []).length > 0 && (u += function r2(e) {
                    return e.map(function(t) {
                        var r = function Fo(e) {
                                return e.replace(/(\r\n|[\r\n])/g, "&#10;")
                            }(t.t || ""),
                            a = q("ss:Data", r, {
                                xmlns: "http://www.w3.org/TR/REC-html40"
                            });
                        return q("Comment", a, {
                            "ss:Author": t.a
                        })
                    }).join("")
                }(e.c)), q("Cell", u, f)
            }

            function a2(e, t) {
                var r = '<Row ss:Index="' + (e + 1) + '"';
                return t && (t.hpt && !t.hpx && (t.hpx = On(t.hpt)), t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'), t.hidden && (r += ' ss:Hidden="1"')), r + ">"
            }

            function i2(e, t, r) {
                var a = [],
                    i = r.Sheets[r.SheetNames[e]],
                    s = i ? function Qv(e, t, r, a) {
                        if (!e || !((a || {}).Workbook || {}).Names) return "";
                        for (var n = a.Workbook.Names, i = [], s = 0; s < n.length; ++s) {
                            var f = n[s];
                            f.Sheet == r && (f.Name.match(/^_xlfn\./) || i.push(Jf(f)))
                        }
                        return i.join("")
                    }(i, 0, e, r) : "";
                return s.length > 0 && a.push("<Names>" + s + "</Names>"), s = i ? function n2(e, t, r, a) {
                    if (!e["!ref"]) return "";
                    var n = Re(e["!ref"]),
                        i = e["!merges"] || [],
                        s = 0,
                        f = [];
                    e["!cols"] && e["!cols"].forEach(function(m, E) {
                        Rt(m);
                        var k = !!m.width,
                            _ = Ln(E, m),
                            I = {
                                "ss:Index": E + 1
                            };
                        k && (I["ss:Width"] = Va(_.width)), m.hidden && (I["ss:Hidden"] = "1"), f.push(q("Column", null, I))
                    });
                    for (var c = Array.isArray(e), o = n.s.r; o <= n.e.r; ++o) {
                        for (var l = [a2(o, (e["!rows"] || [])[o])], h = n.s.c; h <= n.e.c; ++h) {
                            var x = !1;
                            for (s = 0; s != i.length; ++s)
                                if (!(i[s].s.c > h || i[s].s.r > o || i[s].e.c < h || i[s].e.r < o)) {
                                    (i[s].s.c != h || i[s].s.r != o) && (x = !0);
                                    break
                                }
                            if (!x) {
                                var d = {
                                        r: o,
                                        c: h
                                    },
                                    p = ve(d);
                                l.push(t2(c ? (e[o] || [])[h] : e[p], p, e, t, 0, 0, d))
                            }
                        }
                        l.push("</Row>"), l.length > 2 && f.push(l.join(""))
                    }
                    return f.join("")
                }(i, t) : "", s.length > 0 && a.push("<Table>" + s + "</Table>"), a.push(function e2(e, t, r, a) {
                    if (!e) return "";
                    var n = [];
                    if (e["!margins"] && (n.push("<PageSetup>"), e["!margins"].header && n.push(q("Header", null, {
                            "x:Margin": e["!margins"].header
                        })), e["!margins"].footer && n.push(q("Footer", null, {
                            "x:Margin": e["!margins"].footer
                        })), n.push(q("PageMargins", null, {
                            "x:Bottom": e["!margins"].bottom || "0.75",
                            "x:Left": e["!margins"].left || "0.7",
                            "x:Right": e["!margins"].right || "0.7",
                            "x:Top": e["!margins"].top || "0.75"
                        })), n.push("</PageSetup>")), a && a.Workbook && a.Workbook.Sheets && a.Workbook.Sheets[r])
                        if (a.Workbook.Sheets[r].Hidden) n.push(q("Visible", 1 == a.Workbook.Sheets[r].Hidden ? "SheetHidden" : "SheetVeryHidden", {}));
                        else {
                            for (var i = 0; i < r && (!a.Workbook.Sheets[i] || a.Workbook.Sheets[i].Hidden); ++i);
                            i == r && n.push("<Selected/>")
                        }
                    return ((((a || {}).Workbook || {}).Views || [])[0] || {}).RTL && n.push("<DisplayRightToLeft/>"), e["!protect"] && (n.push(mr("ProtectContents", "True")), e["!protect"].objects && n.push(mr("ProtectObjects", "True")), e["!protect"].scenarios && n.push(mr("ProtectScenarios", "True")), null == e["!protect"].selectLockedCells || e["!protect"].selectLockedCells ? null != e["!protect"].selectUnlockedCells && !e["!protect"].selectUnlockedCells && n.push(mr("EnableSelection", "UnlockedCells")) : n.push(mr("EnableSelection", "NoSelection")), [
                        ["formatCells", "AllowFormatCells"],
                        ["formatColumns", "AllowSizeCols"],
                        ["formatRows", "AllowSizeRows"],
                        ["insertColumns", "AllowInsertCols"],
                        ["insertRows", "AllowInsertRows"],
                        ["insertHyperlinks", "AllowInsertHyperlinks"],
                        ["deleteColumns", "AllowDeleteCols"],
                        ["deleteRows", "AllowDeleteRows"],
                        ["sort", "AllowSort"],
                        ["autoFilter", "AllowFilter"],
                        ["pivotTables", "AllowUsePivotTables"]
                    ].forEach(function(s) {
                        e["!protect"][s[0]] && n.push("<" + s[1] + "/>")
                    })), 0 == n.length ? "" : q("WorksheetOptions", n.join(""), {
                        xmlns: Wr.x
                    })
                }(i, 0, e, r)), a.join("")
            }

            function s2(e, t) {
                t || (t = {}), e.SSF || (e.SSF = He(pe)), e.SSF && (ua(), Da(e.SSF), t.revssf = xn(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF, t.cellXfs = [], Nt(t.cellXfs, {}, {
                    revssf: {
                        General: 0
                    }
                }));
                var r = [];
                r.push(function Yv(e, t) {
                    var r = [];
                    return e.Props && r.push(function Sl(e, t) {
                        var r = [];
                        return Ke(T0).map(function(a) {
                            for (var n = 0; n < gt.length; ++n)
                                if (gt[n][1] == a) return gt[n];
                            for (n = 0; n < Zt.length; ++n)
                                if (Zt[n][1] == a) return Zt[n];
                            throw a
                        }).forEach(function(a) {
                            if (null != e[a[1]]) {
                                var n = t && t.Props && null != t.Props[a[1]] ? t.Props[a[1]] : e[a[1]];
                                "date" === a[2] && (n = new Date(n).toISOString().replace(/\.\d*Z/, "Z")), "number" == typeof n ? n = String(n) : !0 === n || !1 === n ? n = n ? "1" : "0" : n instanceof Date && (n = new Date(n).toISOString().replace(/\.\d*Z/, "")), r.push(mr(T0[a[1]] || a[1], n))
                            }
                        }), q("DocumentProperties", r.join(""), {
                            xmlns: Wr.o
                        })
                    }(e.Props, t)), e.Custprops && r.push(function Fl(e, t) {
                        var r = ["Worksheets", "SheetNames"],
                            a = "CustomDocumentProperties",
                            n = [];
                        return e && Ke(e).forEach(function(i) {
                            if (Object.prototype.hasOwnProperty.call(e, i)) {
                                for (var s = 0; s < gt.length; ++s)
                                    if (i == gt[s][1]) return;
                                for (s = 0; s < Zt.length; ++s)
                                    if (i == Zt[s][1]) return;
                                for (s = 0; s < r.length; ++s)
                                    if (i == r[s]) return;
                                var f = e[i],
                                    c = "string";
                                "number" == typeof f ? (c = "float", f = String(f)) : !0 === f || !1 === f ? (c = "boolean", f = f ? "1" : "0") : f = String(f), n.push(q(Ui(i), f, {
                                    "dt:dt": c
                                }))
                            }
                        }), t && Ke(t).forEach(function(i) {
                            if (Object.prototype.hasOwnProperty.call(t, i) && (!e || !Object.prototype.hasOwnProperty.call(e, i))) {
                                var s = t[i],
                                    f = "string";
                                "number" == typeof s ? (f = "float", s = String(s)) : !0 === s || !1 === s ? (f = "boolean", s = s ? "1" : "0") : s instanceof Date ? (f = "dateTime.tz", s = s.toISOString()) : s = String(s), n.push(q(Ui(i), s, {
                                    "dt:dt": f
                                }))
                            }
                        }), "<" + a + ' xmlns="' + Wr.o + '">' + n.join("") + "</" + a + ">"
                    }(e.Props, e.Custprops)), r.join("")
                }(e, t)), r.push(""), r.push(""), r.push("");
                for (var a = 0; a < e.SheetNames.length; ++a) r.push(q("Worksheet", i2(a, t, e), {
                    "ss:Name": Me(e.SheetNames[a])
                }));
                return r[2] = function Zv(e, t) {
                    var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
                    return t.cellXfs.forEach(function(a, n) {
                        var i = [];
                        i.push(q("NumberFormat", null, {
                            "ss:Format": Me(pe[a.numFmtId])
                        }));
                        var s = {
                            "ss:ID": "s" + (21 + n)
                        };
                        r.push(q("Style", i.join(""), s))
                    }), q("Styles", r.join(""))
                }(0, t), r[3] = function qv(e) {
                    if (!((e || {}).Workbook || {}).Names) return "";
                    for (var t = e.Workbook.Names, r = [], a = 0; a < t.length; ++a) {
                        var n = t[a];
                        null == n.Sheet && (n.Name.match(/^_xlfn\./) || r.push(Jf(n)))
                    }
                    return q("Names", r.join(""))
                }(e), Je + q("Workbook", r.join(""), {
                    xmlns: Wr.ss,
                    "xmlns:o": Wr.o,
                    "xmlns:x": Wr.x,
                    "xmlns:ss": Wr.ss,
                    "xmlns:dt": Wr.dt,
                    "xmlns:html": Wr.html
                })
            }
            var Za = {
                SI: "e0859ff2f94f6810ab9108002b27b3d9",
                DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
                UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
            };
            var qa = {
                0: {
                    f: function Lp(e, t) {
                        var r = {},
                            a = e.l + t;
                        r.r = e.read_shift(4), e.l += 4;
                        var n = e.read_shift(2);
                        e.l += 1;
                        var i = e.read_shift(1);
                        return e.l = a, 7 & i && (r.level = 7 & i), 16 & i && (r.hidden = !0), 32 & i && (r.hpt = n / 20), r
                    }
                },
                1: {
                    f: function Gp(e) {
                        return [zr(e)]
                    }
                },
                2: {
                    f: function om(e) {
                        return [zr(e), m0(e), "n"]
                    }
                },
                3: {
                    f: function qp(e) {
                        return [zr(e), e.read_shift(1), "e"]
                    }
                },
                4: {
                    f: function Kp(e) {
                        return [zr(e), e.read_shift(1), "b"]
                    }
                },
                5: {
                    f: function sm(e) {
                        return [zr(e), Tr(e), "n"]
                    }
                },
                6: {
                    f: function dm(e) {
                        return [zr(e), Er(e), "str"]
                    }
                },
                7: {
                    f: function tm(e) {
                        return [zr(e), e.read_shift(4), "s"]
                    }
                },
                8: {
                    f: function km(e, t, r) {
                        var a = e.l + t,
                            n = zr(e);
                        n.r = r["!row"];
                        var s = [n, Er(e), "str"];
                        if (r.cellFormula) {
                            e.l += 2;
                            var f = Nn(e, a - e.l, r);
                            s[3] = yr(f, 0, n, r.supbooks, r)
                        } else e.l = a;
                        return s
                    }
                },
                9: {
                    f: function wm(e, t, r) {
                        var a = e.l + t,
                            n = zr(e);
                        n.r = r["!row"];
                        var s = [n, Tr(e), "n"];
                        if (r.cellFormula) {
                            e.l += 2;
                            var f = Nn(e, a - e.l, r);
                            s[3] = yr(f, 0, n, r.supbooks, r)
                        } else e.l = a;
                        return s
                    }
                },
                10: {
                    f: function gm(e, t, r) {
                        var a = e.l + t,
                            n = zr(e);
                        n.r = r["!row"];
                        var s = [n, e.read_shift(1), "b"];
                        if (r.cellFormula) {
                            e.l += 2;
                            var f = Nn(e, a - e.l, r);
                            s[3] = yr(f, 0, n, r.supbooks, r)
                        } else e.l = a;
                        return s
                    }
                },
                11: {
                    f: function _m(e, t, r) {
                        var a = e.l + t,
                            n = zr(e);
                        n.r = r["!row"];
                        var s = [n, e.read_shift(1), "e"];
                        if (r.cellFormula) {
                            e.l += 2;
                            var f = Nn(e, a - e.l, r);
                            s[3] = yr(f, 0, n, r.supbooks, r)
                        } else e.l = a;
                        return s
                    }
                },
                12: {
                    f: function $p(e) {
                        return [$t(e)]
                    }
                },
                13: {
                    f: function um(e) {
                        return [$t(e), m0(e), "n"]
                    }
                },
                14: {
                    f: function em(e) {
                        return [$t(e), e.read_shift(1), "e"]
                    }
                },
                15: {
                    f: function Jp(e) {
                        return [$t(e), e.read_shift(1), "b"]
                    }
                },
                16: {
                    f: function Wf(e) {
                        return [$t(e), Tr(e), "n"]
                    }
                },
                17: {
                    f: function mm(e) {
                        return [$t(e), Er(e), "str"]
                    }
                },
                18: {
                    f: function nm(e) {
                        return [$t(e), e.read_shift(4), "s"]
                    }
                },
                19: {
                    f: h0
                },
                20: {},
                21: {},
                22: {},
                23: {},
                24: {},
                25: {},
                26: {},
                27: {},
                28: {},
                29: {},
                30: {},
                31: {},
                32: {},
                33: {},
                34: {},
                35: {
                    T: 1
                },
                36: {
                    T: -1
                },
                37: {
                    T: 1
                },
                38: {
                    T: -1
                },
                39: {
                    f: function vv(e, t, r) {
                        var a = e.l + t;
                        e.l += 4, e.l += 1;
                        var n = e.read_shift(4),
                            i = Zo(e),
                            s = qd(e, 0, r),
                            f = x0(e);
                        e.l = a;
                        var c = {
                            Name: i,
                            Ptg: s
                        };
                        return n < 268435455 && (c.Sheet = n), f && (c.Comment = f), c
                    }
                },
                40: {},
                42: {},
                43: {
                    f: function d1(e, t, r) {
                        var a = {};
                        a.sz = e.read_shift(2) / 20;
                        var n = function el(e) {
                            var t = e.read_shift(1);
                            return e.l++, {
                                fBold: 1 & t,
                                fItalic: 2 & t,
                                fUnderline: 4 & t,
                                fStrikeout: 8 & t,
                                fOutline: 16 & t,
                                fShadow: 32 & t,
                                fCondense: 64 & t,
                                fExtend: 128 & t
                            }
                        }(e);
                        switch (n.fItalic && (a.italic = 1), n.fCondense && (a.condense = 1), n.fExtend && (a.extend = 1), n.fShadow && (a.shadow = 1), n.fOutline && (a.outline = 1), n.fStrikeout && (a.strike = 1), 700 === e.read_shift(2) && (a.bold = 1), e.read_shift(2)) {
                            case 1:
                                a.vertAlign = "superscript";
                                break;
                            case 2:
                                a.vertAlign = "subscript"
                        }
                        var s = e.read_shift(1);
                        0 != s && (a.underline = s);
                        var f = e.read_shift(1);
                        f > 0 && (a.family = f);
                        var c = e.read_shift(1);
                        switch (c > 0 && (a.charset = c), e.l++, a.color = function Qo(e) {
                            var t = {},
                                a = e.read_shift(1) >>> 1,
                                n = e.read_shift(1),
                                i = e.read_shift(2, "i"),
                                s = e.read_shift(1),
                                f = e.read_shift(1),
                                c = e.read_shift(1);
                            switch (e.l++, a) {
                                case 0:
                                    t.auto = 1;
                                    break;
                                case 1:
                                    t.index = n;
                                    var o = Jt[n];
                                    o && (t.rgb = Ha(o));
                                    break;
                                case 2:
                                    t.rgb = Ha([s, f, c]);
                                    break;
                                case 3:
                                    t.theme = n
                            }
                            return 0 != i && (t.tint = i > 0 ? i / 32767 : i / 32768), t
                        }(e), e.read_shift(1)) {
                            case 1:
                                a.scheme = "major";
                                break;
                            case 2:
                                a.scheme = "minor"
                        }
                        return a.name = Er(e), a
                    }
                },
                44: {
                    f: function h1(e, t) {
                        return [e.read_shift(2), Er(e)]
                    }
                },
                45: {
                    f: v1
                },
                46: {
                    f: _1
                },
                47: {
                    f: function g1(e, t) {
                        var r = e.l + t,
                            a = e.read_shift(2),
                            n = e.read_shift(2);
                        return e.l = r, {
                            ixfe: a,
                            numFmtId: n
                        }
                    }
                },
                48: {},
                49: {
                    f: function Go(e) {
                        return e.read_shift(4, "i")
                    }
                },
                50: {},
                51: {
                    f: function Q1(e) {
                        for (var t = [], r = e.read_shift(4); r-- > 0;) t.push([e.read_shift(4), e.read_shift(4)]);
                        return t
                    }
                },
                52: {
                    T: 1
                },
                53: {
                    T: -1
                },
                54: {
                    T: 1
                },
                55: {
                    T: -1
                },
                56: {
                    T: 1
                },
                57: {
                    T: -1
                },
                58: {},
                59: {},
                60: {
                    f: function af(e, t, r) {
                        if (!r.cellStyles) return kr(e, t);
                        var a = r && r.biff >= 12 ? 4 : 2,
                            n = e.read_shift(a),
                            i = e.read_shift(a),
                            s = e.read_shift(a),
                            f = e.read_shift(a),
                            c = e.read_shift(2);
                        2 == a && (e.l += 2);
                        var o = {
                            s: n,
                            e: i,
                            w: s,
                            ixfe: f,
                            flags: c
                        };
                        return (r.biff >= 5 || !r.biff) && (o.level = c >> 8 & 7), o
                    }
                },
                62: {
                    f: function xm(e) {
                        return [zr(e), h0(e), "is"]
                    }
                },
                63: {
                    f: function cx(e) {
                        var t = {};
                        t.i = e.read_shift(4);
                        var r = {};
                        r.r = e.read_shift(4), r.c = e.read_shift(4), t.r = ve(r);
                        var a = e.read_shift(1);
                        return 2 & a && (t.l = "1"), 8 & a && (t.a = "1"), t
                    }
                },
                64: {
                    f: function Bm() {}
                },
                65: {},
                66: {},
                67: {},
                68: {},
                69: {},
                70: {},
                128: {},
                129: {
                    T: 1
                },
                130: {
                    T: -1
                },
                131: {
                    T: 1,
                    f: kr,
                    p: 0
                },
                132: {
                    T: -1
                },
                133: {
                    T: 1
                },
                134: {
                    T: -1
                },
                135: {
                    T: 1
                },
                136: {
                    T: -1
                },
                137: {
                    T: 1,
                    f: function bm(e) {
                        var t = e.read_shift(2);
                        return e.l += 28, {
                            RTL: 32 & t
                        }
                    }
                },
                138: {
                    T: -1
                },
                139: {
                    T: 1
                },
                140: {
                    T: -1
                },
                141: {
                    T: 1
                },
                142: {
                    T: -1
                },
                143: {
                    T: 1
                },
                144: {
                    T: -1
                },
                145: {
                    T: 1
                },
                146: {
                    T: -1
                },
                147: {
                    f: function Vp(e, t) {
                        var r = {},
                            a = e[e.l];
                        return ++e.l, r.above = !(64 & a), r.left = !(128 & a), e.l += 18, r.name = Jo(e, t - 19), r
                    }
                },
                148: {
                    f: Up,
                    p: 16
                },
                151: {
                    f: function Am() {}
                },
                152: {},
                153: {
                    f: function dv(e, t) {
                        var r = {},
                            a = e.read_shift(4);
                        r.defaultThemeVersion = e.read_shift(4);
                        var n = t > 8 ? Er(e) : "";
                        return n.length > 0 && (r.CodeName = n), r.autoCompressPictures = !!(65536 & a), r.backupFile = !!(64 & a), r.checkCompatibility = !!(4096 & a), r.date1904 = !!(1 & a), r.filterPrivacy = !!(8 & a), r.hidePivotFieldList = !!(1024 & a), r.promptedSolutions = !!(16 & a), r.publishItems = !!(2048 & a), r.refreshAllConnections = !!(262144 & a), r.saveExternalLinkValues = !!(128 & a), r.showBorderUnselectedTables = !!(4 & a), r.showInkAnnotation = !!(32 & a), r.showObjects = ["all", "placeholders", "none"][a >> 13 & 3], r.showPivotChartFilter = !!(32768 & a), r.updateLinks = ["userSet", "never", "always"][a >> 8 & 3], r
                    }
                },
                154: {},
                155: {},
                156: {
                    f: function hv(e, t) {
                        var r = {};
                        return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = d0(e, t - 8), r.name = Er(e), r
                    }
                },
                157: {},
                158: {},
                159: {
                    T: 1,
                    f: function Nh(e) {
                        return [e.read_shift(4), e.read_shift(4)]
                    }
                },
                160: {
                    T: -1
                },
                161: {
                    T: 1,
                    f: Kt
                },
                162: {
                    T: -1
                },
                163: {
                    T: 1
                },
                164: {
                    T: -1
                },
                165: {
                    T: 1
                },
                166: {
                    T: -1
                },
                167: {},
                168: {},
                169: {},
                170: {},
                171: {},
                172: {
                    T: 1
                },
                173: {
                    T: -1
                },
                174: {},
                175: {},
                176: {
                    f: Em
                },
                177: {
                    T: 1
                },
                178: {
                    T: -1
                },
                179: {
                    T: 1
                },
                180: {
                    T: -1
                },
                181: {
                    T: 1
                },
                182: {
                    T: -1
                },
                183: {
                    T: 1
                },
                184: {
                    T: -1
                },
                185: {
                    T: 1
                },
                186: {
                    T: -1
                },
                187: {
                    T: 1
                },
                188: {
                    T: -1
                },
                189: {
                    T: 1
                },
                190: {
                    T: -1
                },
                191: {
                    T: 1
                },
                192: {
                    T: -1
                },
                193: {
                    T: 1
                },
                194: {
                    T: -1
                },
                195: {
                    T: 1
                },
                196: {
                    T: -1
                },
                197: {
                    T: 1
                },
                198: {
                    T: -1
                },
                199: {
                    T: 1
                },
                200: {
                    T: -1
                },
                201: {
                    T: 1
                },
                202: {
                    T: -1
                },
                203: {
                    T: 1
                },
                204: {
                    T: -1
                },
                205: {
                    T: 1
                },
                206: {
                    T: -1
                },
                207: {
                    T: 1
                },
                208: {
                    T: -1
                },
                209: {
                    T: 1
                },
                210: {
                    T: -1
                },
                211: {
                    T: 1
                },
                212: {
                    T: -1
                },
                213: {
                    T: 1
                },
                214: {
                    T: -1
                },
                215: {
                    T: 1
                },
                216: {
                    T: -1
                },
                217: {
                    T: 1
                },
                218: {
                    T: -1
                },
                219: {
                    T: 1
                },
                220: {
                    T: -1
                },
                221: {
                    T: 1
                },
                222: {
                    T: -1
                },
                223: {
                    T: 1
                },
                224: {
                    T: -1
                },
                225: {
                    T: 1
                },
                226: {
                    T: -1
                },
                227: {
                    T: 1
                },
                228: {
                    T: -1
                },
                229: {
                    T: 1
                },
                230: {
                    T: -1
                },
                231: {
                    T: 1
                },
                232: {
                    T: -1
                },
                233: {
                    T: 1
                },
                234: {
                    T: -1
                },
                235: {
                    T: 1
                },
                236: {
                    T: -1
                },
                237: {
                    T: 1
                },
                238: {
                    T: -1
                },
                239: {
                    T: 1
                },
                240: {
                    T: -1
                },
                241: {
                    T: 1
                },
                242: {
                    T: -1
                },
                243: {
                    T: 1
                },
                244: {
                    T: -1
                },
                245: {
                    T: 1
                },
                246: {
                    T: -1
                },
                247: {
                    T: 1
                },
                248: {
                    T: -1
                },
                249: {
                    T: 1
                },
                250: {
                    T: -1
                },
                251: {
                    T: 1
                },
                252: {
                    T: -1
                },
                253: {
                    T: 1
                },
                254: {
                    T: -1
                },
                255: {
                    T: 1
                },
                256: {
                    T: -1
                },
                257: {
                    T: 1
                },
                258: {
                    T: -1
                },
                259: {
                    T: 1
                },
                260: {
                    T: -1
                },
                261: {
                    T: 1
                },
                262: {
                    T: -1
                },
                263: {
                    T: 1
                },
                264: {
                    T: -1
                },
                265: {
                    T: 1
                },
                266: {
                    T: -1
                },
                267: {
                    T: 1
                },
                268: {
                    T: -1
                },
                269: {
                    T: 1
                },
                270: {
                    T: -1
                },
                271: {
                    T: 1
                },
                272: {
                    T: -1
                },
                273: {
                    T: 1
                },
                274: {
                    T: -1
                },
                275: {
                    T: 1
                },
                276: {
                    T: -1
                },
                277: {},
                278: {
                    T: 1
                },
                279: {
                    T: -1
                },
                280: {
                    T: 1
                },
                281: {
                    T: -1
                },
                282: {
                    T: 1
                },
                283: {
                    T: 1
                },
                284: {
                    T: -1
                },
                285: {
                    T: 1
                },
                286: {
                    T: -1
                },
                287: {
                    T: 1
                },
                288: {
                    T: -1
                },
                289: {
                    T: 1
                },
                290: {
                    T: -1
                },
                291: {
                    T: 1
                },
                292: {
                    T: -1
                },
                293: {
                    T: 1
                },
                294: {
                    T: -1
                },
                295: {
                    T: 1
                },
                296: {
                    T: -1
                },
                297: {
                    T: 1
                },
                298: {
                    T: -1
                },
                299: {
                    T: 1
                },
                300: {
                    T: -1
                },
                301: {
                    T: 1
                },
                302: {
                    T: -1
                },
                303: {
                    T: 1
                },
                304: {
                    T: -1
                },
                305: {
                    T: 1
                },
                306: {
                    T: -1
                },
                307: {
                    T: 1
                },
                308: {
                    T: -1
                },
                309: {
                    T: 1
                },
                310: {
                    T: -1
                },
                311: {
                    T: 1
                },
                312: {
                    T: -1
                },
                313: {
                    T: -1
                },
                314: {
                    T: 1
                },
                315: {
                    T: -1
                },
                316: {
                    T: 1
                },
                317: {
                    T: -1
                },
                318: {
                    T: 1
                },
                319: {
                    T: -1
                },
                320: {
                    T: 1
                },
                321: {
                    T: -1
                },
                322: {
                    T: 1
                },
                323: {
                    T: -1
                },
                324: {
                    T: 1
                },
                325: {
                    T: -1
                },
                326: {
                    T: 1
                },
                327: {
                    T: -1
                },
                328: {
                    T: 1
                },
                329: {
                    T: -1
                },
                330: {
                    T: 1
                },
                331: {
                    T: -1
                },
                332: {
                    T: 1
                },
                333: {
                    T: -1
                },
                334: {
                    T: 1
                },
                335: {
                    f: function Z1(e, t) {
                        return {
                            flags: e.read_shift(4),
                            version: e.read_shift(4),
                            name: Er(e)
                        }
                    }
                },
                336: {
                    T: -1
                },
                337: {
                    f: function tx(e) {
                        return e.l += 4, 0 != e.read_shift(4)
                    },
                    T: 1
                },
                338: {
                    T: -1
                },
                339: {
                    T: 1
                },
                340: {
                    T: -1
                },
                341: {
                    T: 1
                },
                342: {
                    T: -1
                },
                343: {
                    T: 1
                },
                344: {
                    T: -1
                },
                345: {
                    T: 1
                },
                346: {
                    T: -1
                },
                347: {
                    T: 1
                },
                348: {
                    T: -1
                },
                349: {
                    T: 1
                },
                350: {
                    T: -1
                },
                351: {},
                352: {},
                353: {
                    T: 1
                },
                354: {
                    T: -1
                },
                355: {
                    f: d0
                },
                357: {},
                358: {},
                359: {},
                360: {
                    T: 1
                },
                361: {},
                362: {
                    f: function rf(e, t, r) {
                        if (r.biff < 8) return function Uu(e, t, r) {
                            3 == e[e.l + 1] && e[e.l]++;
                            var a = Ua(e, 0, r);
                            return 3 == a.charCodeAt(0) ? a.slice(1) : a
                        }(e, 0, r);
                        for (var a = [], n = e.l + t, i = e.read_shift(r.biff > 8 ? 4 : 2); 0 != i--;) a.push(jl(e, 0, r));
                        if (e.l != n) throw new Error("Bad ExternSheet: " + e.l + " != " + n);
                        return a
                    }
                },
                363: {},
                364: {},
                366: {},
                367: {},
                368: {},
                369: {},
                370: {},
                371: {},
                372: {
                    T: 1
                },
                373: {
                    T: -1
                },
                374: {
                    T: 1
                },
                375: {
                    T: -1
                },
                376: {
                    T: 1
                },
                377: {
                    T: -1
                },
                378: {
                    T: 1
                },
                379: {
                    T: -1
                },
                380: {
                    T: 1
                },
                381: {
                    T: -1
                },
                382: {
                    T: 1
                },
                383: {
                    T: -1
                },
                384: {
                    T: 1
                },
                385: {
                    T: -1
                },
                386: {
                    T: 1
                },
                387: {
                    T: -1
                },
                388: {
                    T: 1
                },
                389: {
                    T: -1
                },
                390: {
                    T: 1
                },
                391: {
                    T: -1
                },
                392: {
                    T: 1
                },
                393: {
                    T: -1
                },
                394: {
                    T: 1
                },
                395: {
                    T: -1
                },
                396: {},
                397: {},
                398: {},
                399: {},
                400: {},
                401: {
                    T: 1
                },
                403: {},
                404: {},
                405: {},
                406: {},
                407: {},
                408: {},
                409: {},
                410: {},
                411: {},
                412: {},
                413: {},
                414: {},
                415: {},
                416: {},
                417: {},
                418: {},
                419: {},
                420: {},
                421: {},
                422: {
                    T: 1
                },
                423: {
                    T: 1
                },
                424: {
                    T: -1
                },
                425: {
                    T: -1
                },
                426: {
                    f: function Cm(e, t, r) {
                        var a = e.l + t,
                            n = xs(e),
                            i = e.read_shift(1),
                            s = [n];
                        if (s[2] = i, r.cellFormula) {
                            var f = Zd(e, a - e.l, r);
                            s[1] = f
                        } else e.l = a;
                        return s
                    }
                },
                427: {
                    f: function Dm(e, t, r) {
                        var a = e.l + t,
                            i = [Kt(e, 16)];
                        if (r.cellFormula) {
                            var s = Qd(e, a - e.l, r);
                            i[1] = s, e.l = a
                        } else e.l = a;
                        return i
                    }
                },
                428: {},
                429: {
                    T: 1
                },
                430: {
                    T: -1
                },
                431: {
                    T: 1
                },
                432: {
                    T: -1
                },
                433: {
                    T: 1
                },
                434: {
                    T: -1
                },
                435: {
                    T: 1
                },
                436: {
                    T: -1
                },
                437: {
                    T: 1
                },
                438: {
                    T: -1
                },
                439: {
                    T: 1
                },
                440: {
                    T: -1
                },
                441: {
                    T: 1
                },
                442: {
                    T: -1
                },
                443: {
                    T: 1
                },
                444: {
                    T: -1
                },
                445: {
                    T: 1
                },
                446: {
                    T: -1
                },
                447: {
                    T: 1
                },
                448: {
                    T: -1
                },
                449: {
                    T: 1
                },
                450: {
                    T: -1
                },
                451: {
                    T: 1
                },
                452: {
                    T: -1
                },
                453: {
                    T: 1
                },
                454: {
                    T: -1
                },
                455: {
                    T: 1
                },
                456: {
                    T: -1
                },
                457: {
                    T: 1
                },
                458: {
                    T: -1
                },
                459: {
                    T: 1
                },
                460: {
                    T: -1
                },
                461: {
                    T: 1
                },
                462: {
                    T: -1
                },
                463: {
                    T: 1
                },
                464: {
                    T: -1
                },
                465: {
                    T: 1
                },
                466: {
                    T: -1
                },
                467: {
                    T: 1
                },
                468: {
                    T: -1
                },
                469: {
                    T: 1
                },
                470: {
                    T: -1
                },
                471: {},
                472: {},
                473: {
                    T: 1
                },
                474: {
                    T: -1
                },
                475: {},
                476: {
                    f: function Im(e) {
                        var t = {};
                        return Hf.forEach(function(r) {
                            t[r] = Tr(e)
                        }), t
                    }
                },
                477: {},
                478: {},
                479: {
                    T: 1
                },
                480: {
                    T: -1
                },
                481: {
                    T: 1
                },
                482: {
                    T: -1
                },
                483: {
                    T: 1
                },
                484: {
                    T: -1
                },
                485: {
                    f: function Hp() {}
                },
                486: {
                    T: 1
                },
                487: {
                    T: -1
                },
                488: {
                    T: 1
                },
                489: {
                    T: -1
                },
                490: {
                    T: 1
                },
                491: {
                    T: -1
                },
                492: {
                    T: 1
                },
                493: {
                    T: -1
                },
                494: {
                    f: function Fm(e, t) {
                        var r = e.l + t,
                            a = Kt(e, 16),
                            n = x0(e),
                            i = Er(e),
                            s = Er(e),
                            f = Er(e);
                        e.l = r;
                        var c = {
                            rfx: a,
                            relId: n,
                            loc: i,
                            display: f
                        };
                        return s && (c.Tooltip = s), c
                    }
                },
                495: {
                    T: 1
                },
                496: {
                    T: -1
                },
                497: {
                    T: 1
                },
                498: {
                    T: -1
                },
                499: {},
                500: {
                    T: 1
                },
                501: {
                    T: -1
                },
                502: {
                    T: 1
                },
                503: {
                    T: -1
                },
                504: {},
                505: {
                    T: 1
                },
                506: {
                    T: -1
                },
                507: {},
                508: {
                    T: 1
                },
                509: {
                    T: -1
                },
                510: {
                    T: 1
                },
                511: {
                    T: -1
                },
                512: {},
                513: {},
                514: {
                    T: 1
                },
                515: {
                    T: -1
                },
                516: {
                    T: 1
                },
                517: {
                    T: -1
                },
                518: {
                    T: 1
                },
                519: {
                    T: -1
                },
                520: {
                    T: 1
                },
                521: {
                    T: -1
                },
                522: {},
                523: {},
                524: {},
                525: {},
                526: {},
                527: {},
                528: {
                    T: 1
                },
                529: {
                    T: -1
                },
                530: {
                    T: 1
                },
                531: {
                    T: -1
                },
                532: {
                    T: 1
                },
                533: {
                    T: -1
                },
                534: {},
                535: {},
                536: {},
                537: {},
                538: {
                    T: 1
                },
                539: {
                    T: -1
                },
                540: {
                    T: 1
                },
                541: {
                    T: -1
                },
                542: {
                    T: 1
                },
                548: {},
                549: {},
                550: {
                    f: d0
                },
                551: {},
                552: {},
                553: {},
                554: {
                    T: 1
                },
                555: {
                    T: -1
                },
                556: {
                    T: 1
                },
                557: {
                    T: -1
                },
                558: {
                    T: 1
                },
                559: {
                    T: -1
                },
                560: {
                    T: 1
                },
                561: {
                    T: -1
                },
                562: {},
                564: {},
                565: {
                    T: 1
                },
                566: {
                    T: -1
                },
                569: {
                    T: 1
                },
                570: {
                    T: -1
                },
                572: {},
                573: {
                    T: 1
                },
                574: {
                    T: -1
                },
                577: {},
                578: {},
                579: {},
                580: {},
                581: {},
                582: {},
                583: {},
                584: {},
                585: {},
                586: {},
                587: {},
                588: {
                    T: -1
                },
                589: {},
                590: {
                    T: 1
                },
                591: {
                    T: -1
                },
                592: {
                    T: 1
                },
                593: {
                    T: -1
                },
                594: {
                    T: 1
                },
                595: {
                    T: -1
                },
                596: {},
                597: {
                    T: 1
                },
                598: {
                    T: -1
                },
                599: {
                    T: 1
                },
                600: {
                    T: -1
                },
                601: {
                    T: 1
                },
                602: {
                    T: -1
                },
                603: {
                    T: 1
                },
                604: {
                    T: -1
                },
                605: {
                    T: 1
                },
                606: {
                    T: -1
                },
                607: {},
                608: {
                    T: 1
                },
                609: {
                    T: -1
                },
                610: {},
                611: {
                    T: 1
                },
                612: {
                    T: -1
                },
                613: {
                    T: 1
                },
                614: {
                    T: -1
                },
                615: {
                    T: 1
                },
                616: {
                    T: -1
                },
                617: {
                    T: 1
                },
                618: {
                    T: -1
                },
                619: {
                    T: 1
                },
                620: {
                    T: -1
                },
                625: {},
                626: {
                    T: 1
                },
                627: {
                    T: -1
                },
                628: {
                    T: 1
                },
                629: {
                    T: -1
                },
                630: {
                    T: 1
                },
                631: {
                    T: -1
                },
                632: {
                    f: _x
                },
                633: {
                    T: 1
                },
                634: {
                    T: -1
                },
                635: {
                    T: 1,
                    f: function vx(e) {
                        var t = {};
                        t.iauthor = e.read_shift(4);
                        var r = Kt(e, 16);
                        return t.rfx = r.s, t.ref = ve(r.s), e.l += 16, t
                    }
                },
                636: {
                    T: -1
                },
                637: {
                    f: Ko
                },
                638: {
                    T: 1
                },
                639: {},
                640: {
                    T: -1
                },
                641: {
                    T: 1
                },
                642: {
                    T: -1
                },
                643: {
                    T: 1
                },
                644: {},
                645: {
                    T: -1
                },
                646: {
                    T: 1
                },
                648: {
                    T: 1
                },
                649: {},
                650: {
                    T: -1
                },
                651: {
                    f: function rv(e, t) {
                        return e.l += 10, {
                            name: Er(e)
                        }
                    }
                },
                652: {},
                653: {
                    T: 1
                },
                654: {
                    T: -1
                },
                655: {
                    T: 1
                },
                656: {
                    T: -1
                },
                657: {
                    T: 1
                },
                658: {
                    T: -1
                },
                659: {},
                660: {
                    T: 1
                },
                661: {},
                662: {
                    T: -1
                },
                663: {},
                664: {
                    T: 1
                },
                665: {},
                666: {
                    T: -1
                },
                667: {},
                668: {},
                669: {},
                671: {
                    T: 1
                },
                672: {
                    T: -1
                },
                673: {
                    T: 1
                },
                674: {
                    T: -1
                },
                675: {},
                676: {},
                677: {},
                678: {},
                679: {},
                680: {},
                681: {},
                1024: {},
                1025: {},
                1026: {
                    T: 1
                },
                1027: {
                    T: -1
                },
                1028: {
                    T: 1
                },
                1029: {
                    T: -1
                },
                1030: {},
                1031: {
                    T: 1
                },
                1032: {
                    T: -1
                },
                1033: {
                    T: 1
                },
                1034: {
                    T: -1
                },
                1035: {},
                1036: {},
                1037: {},
                1038: {
                    T: 1
                },
                1039: {
                    T: -1
                },
                1040: {},
                1041: {
                    T: 1
                },
                1042: {
                    T: -1
                },
                1043: {},
                1044: {},
                1045: {},
                1046: {
                    T: 1
                },
                1047: {
                    T: -1
                },
                1048: {
                    T: 1
                },
                1049: {
                    T: -1
                },
                1050: {},
                1051: {
                    T: 1
                },
                1052: {
                    T: 1
                },
                1053: {
                    f: function Mm() {}
                },
                1054: {
                    T: 1
                },
                1055: {},
                1056: {
                    T: 1
                },
                1057: {
                    T: -1
                },
                1058: {
                    T: 1
                },
                1059: {
                    T: -1
                },
                1061: {},
                1062: {
                    T: 1
                },
                1063: {
                    T: -1
                },
                1064: {
                    T: 1
                },
                1065: {
                    T: -1
                },
                1066: {
                    T: 1
                },
                1067: {
                    T: -1
                },
                1068: {
                    T: 1
                },
                1069: {
                    T: -1
                },
                1070: {
                    T: 1
                },
                1071: {
                    T: -1
                },
                1072: {
                    T: 1
                },
                1073: {
                    T: -1
                },
                1075: {
                    T: 1
                },
                1076: {
                    T: -1
                },
                1077: {
                    T: 1
                },
                1078: {
                    T: -1
                },
                1079: {
                    T: 1
                },
                1080: {
                    T: -1
                },
                1081: {
                    T: 1
                },
                1082: {
                    T: -1
                },
                1083: {
                    T: 1
                },
                1084: {
                    T: -1
                },
                1085: {},
                1086: {
                    T: 1
                },
                1087: {
                    T: -1
                },
                1088: {
                    T: 1
                },
                1089: {
                    T: -1
                },
                1090: {
                    T: 1
                },
                1091: {
                    T: -1
                },
                1092: {
                    T: 1
                },
                1093: {
                    T: -1
                },
                1094: {
                    T: 1
                },
                1095: {
                    T: -1
                },
                1096: {},
                1097: {
                    T: 1
                },
                1098: {},
                1099: {
                    T: -1
                },
                1100: {
                    T: 1
                },
                1101: {
                    T: -1
                },
                1102: {},
                1103: {},
                1104: {},
                1105: {},
                1111: {},
                1112: {},
                1113: {
                    T: 1
                },
                1114: {
                    T: -1
                },
                1115: {
                    T: 1
                },
                1116: {
                    T: -1
                },
                1117: {},
                1118: {
                    T: 1
                },
                1119: {
                    T: -1
                },
                1120: {
                    T: 1
                },
                1121: {
                    T: -1
                },
                1122: {
                    T: 1
                },
                1123: {
                    T: -1
                },
                1124: {
                    T: 1
                },
                1125: {
                    T: -1
                },
                1126: {},
                1128: {
                    T: 1
                },
                1129: {
                    T: -1
                },
                1130: {},
                1131: {
                    T: 1
                },
                1132: {
                    T: -1
                },
                1133: {
                    T: 1
                },
                1134: {
                    T: -1
                },
                1135: {
                    T: 1
                },
                1136: {
                    T: -1
                },
                1137: {
                    T: 1
                },
                1138: {
                    T: -1
                },
                1139: {
                    T: 1
                },
                1140: {
                    T: -1
                },
                1141: {},
                1142: {
                    T: 1
                },
                1143: {
                    T: -1
                },
                1144: {
                    T: 1
                },
                1145: {
                    T: -1
                },
                1146: {},
                1147: {
                    T: 1
                },
                1148: {
                    T: -1
                },
                1149: {
                    T: 1
                },
                1150: {
                    T: -1
                },
                1152: {
                    T: 1
                },
                1153: {
                    T: -1
                },
                1154: {
                    T: -1
                },
                1155: {
                    T: -1
                },
                1156: {
                    T: -1
                },
                1157: {
                    T: 1
                },
                1158: {
                    T: -1
                },
                1159: {
                    T: 1
                },
                1160: {
                    T: -1
                },
                1161: {
                    T: 1
                },
                1162: {
                    T: -1
                },
                1163: {
                    T: 1
                },
                1164: {
                    T: -1
                },
                1165: {
                    T: 1
                },
                1166: {
                    T: -1
                },
                1167: {
                    T: 1
                },
                1168: {
                    T: -1
                },
                1169: {
                    T: 1
                },
                1170: {
                    T: -1
                },
                1171: {},
                1172: {
                    T: 1
                },
                1173: {
                    T: -1
                },
                1177: {},
                1178: {
                    T: 1
                },
                1180: {},
                1181: {},
                1182: {},
                2048: {
                    T: 1
                },
                2049: {
                    T: -1
                },
                2050: {},
                2051: {
                    T: 1
                },
                2052: {
                    T: -1
                },
                2053: {},
                2054: {},
                2055: {
                    T: 1
                },
                2056: {
                    T: -1
                },
                2057: {
                    T: 1
                },
                2058: {
                    T: -1
                },
                2060: {},
                2067: {},
                2068: {
                    T: 1
                },
                2069: {
                    T: -1
                },
                2070: {},
                2071: {},
                2072: {
                    T: 1
                },
                2073: {
                    T: -1
                },
                2075: {},
                2076: {},
                2077: {
                    T: 1
                },
                2078: {
                    T: -1
                },
                2079: {},
                2080: {
                    T: 1
                },
                2081: {
                    T: -1
                },
                2082: {},
                2083: {
                    T: 1
                },
                2084: {
                    T: -1
                },
                2085: {
                    T: 1
                },
                2086: {
                    T: -1
                },
                2087: {
                    T: 1
                },
                2088: {
                    T: -1
                },
                2089: {
                    T: 1
                },
                2090: {
                    T: -1
                },
                2091: {},
                2092: {},
                2093: {
                    T: 1
                },
                2094: {
                    T: -1
                },
                2095: {},
                2096: {
                    T: 1
                },
                2097: {
                    T: -1
                },
                2098: {
                    T: 1
                },
                2099: {
                    T: -1
                },
                2100: {
                    T: 1
                },
                2101: {
                    T: -1
                },
                2102: {},
                2103: {
                    T: 1
                },
                2104: {
                    T: -1
                },
                2105: {},
                2106: {
                    T: 1
                },
                2107: {
                    T: -1
                },
                2108: {},
                2109: {
                    T: 1
                },
                2110: {
                    T: -1
                },
                2111: {
                    T: 1
                },
                2112: {
                    T: -1
                },
                2113: {
                    T: 1
                },
                2114: {
                    T: -1
                },
                2115: {},
                2116: {},
                2117: {},
                2118: {
                    T: 1
                },
                2119: {
                    T: -1
                },
                2120: {},
                2121: {
                    T: 1
                },
                2122: {
                    T: -1
                },
                2123: {
                    T: 1
                },
                2124: {
                    T: -1
                },
                2125: {},
                2126: {
                    T: 1
                },
                2127: {
                    T: -1
                },
                2128: {},
                2129: {
                    T: 1
                },
                2130: {
                    T: -1
                },
                2131: {
                    T: 1
                },
                2132: {
                    T: -1
                },
                2133: {
                    T: 1
                },
                2134: {},
                2135: {},
                2136: {},
                2137: {
                    T: 1
                },
                2138: {
                    T: -1
                },
                2139: {
                    T: 1
                },
                2140: {
                    T: -1
                },
                2141: {},
                3072: {},
                3073: {},
                4096: {
                    T: 1
                },
                4097: {
                    T: -1
                },
                5002: {
                    T: 1
                },
                5003: {
                    T: -1
                },
                5081: {
                    T: 1
                },
                5082: {
                    T: -1
                },
                5083: {},
                5084: {
                    T: 1
                },
                5085: {
                    T: -1
                },
                5086: {
                    T: 1
                },
                5087: {
                    T: -1
                },
                5088: {},
                5089: {},
                5090: {},
                5092: {
                    T: 1
                },
                5093: {
                    T: -1
                },
                5094: {},
                5095: {
                    T: 1
                },
                5096: {
                    T: -1
                },
                5097: {},
                5099: {},
                65535: {
                    n: ""
                }
            };

            function re(e, t, r, a) {
                var n = t;
                if (!isNaN(n)) {
                    var i = a || (r || []).length || 0,
                        s = e.next(4);
                    s.write_shift(2, n), s.write_shift(2, i), i > 0 && c0(r) && e.push(r)
                }
            }

            function Qa(e, t, r) {
                return e || (e = G(7)), e.write_shift(2, t), e.write_shift(2, r), e.write_shift(2, 0), e.write_shift(1, 0), e
            }

            function v2(e, t, r, a) {
                if (null != t.v) switch (t.t) {
                    case "d":
                    case "n":
                        var n = "d" == t.t ? ur($e(t.v)) : t.v;
                        return void(n == (0 | n) && n >= 0 && n < 65536 ? re(e, 2, function gh(e, t, r) {
                            var a = G(9);
                            return Qa(a, e, t), a.write_shift(2, r), a
                        }(r, a, n)) : re(e, 3, function mh(e, t, r) {
                            var a = G(15);
                            return Qa(a, e, t), a.write_shift(8, r, "f"), a
                        }(r, a, n)));
                    case "b":
                    case "e":
                        return void re(e, 5, function p2(e, t, r, a) {
                            var n = G(9);
                            return Qa(n, e, t), Us(r, a || "b", n), n
                        }(r, a, t.v, t.t));
                    case "s":
                    case "str":
                        return void re(e, 4, function m2(e, t, r) {
                            var a = G(8 + 2 * r.length);
                            return Qa(a, e, t), a.write_shift(1, r.length), a.write_shift(r.length, r, "sbcs"), a.l < a.length ? a.slice(0, a.l) : a
                        }(r, a, (t.v || "").slice(0, 255)))
                }
                re(e, 1, Qa(null, r, a))
            }

            function y2(e, t, r, a, n) {
                var i = 16 + Nt(n.cellXfs, t, n);
                if (null != t.v || t.bf)
                    if (t.bf) re(e, 6, function Jd(e, t, r, a, n) {
                        var i = ea(t, r, n),
                            s = function Yd(e) {
                                if (null == e) {
                                    var t = G(8);
                                    return t.write_shift(1, 3), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 65535), t
                                }
                                return Yt("number" == typeof e ? e : 0)
                            }(e.v),
                            f = G(6);
                        f.write_shift(2, 33), f.write_shift(4, 0);
                        for (var o = G(e.bf.length), l = 0; l < e.bf.length; ++l) o[l] = e.bf[l];
                        return lr([i, s, f, o])
                    }(t, r, a, 0, i));
                    else switch (t.t) {
                        case "d":
                        case "n":
                            re(e, 515, function Lu(e, t, r, a) {
                                var n = G(14);
                                return ea(e, t, a, n), Yt(r, n), n
                            }(r, a, "d" == t.t ? ur($e(t.v)) : t.v, i));
                            break;
                        case "b":
                        case "e":
                            re(e, 517, function Nu(e, t, r, a, n, i) {
                                var s = G(8);
                                return ea(e, t, a, s), Us(r, i, s), s
                            }(r, a, t.v, i, 0, t.t));
                            break;
                        case "s":
                        case "str":
                            n.bookSST ? re(e, 253, function wu(e, t, r, a) {
                                var n = G(10);
                                return ea(e, t, a, n), n.write_shift(4, r), n
                            }(r, a, U0(n.Strings, t.v, n.revStrings), i)) : re(e, 516, function Eu(e, t, r, a, n) {
                                var i = !n || 8 == n.biff,
                                    s = G(+i + 8 + (1 + i) * r.length);
                                return ea(e, t, a, s), s.write_shift(2, r.length), i && s.write_shift(1, 1), s.write_shift((1 + i) * r.length, r, i ? "utf16le" : "sbcs"), s
                            }(r, a, (t.v || "").slice(0, 255), i, n));
                            break;
                        default:
                            re(e, 513, ea(r, a, i))
                    } else re(e, 513, ea(r, a, i))
            }

            function A2(e, t, r) {
                var l, a = Dr(),
                    n = r.SheetNames[e],
                    i = r.Sheets[n] || {},
                    s = (r || {}).Workbook || {},
                    f = (s.Sheets || [])[e] || {},
                    c = Array.isArray(i),
                    o = 8 == t.biff,
                    h = "",
                    x = [],
                    d = Re(i["!ref"] || "A1"),
                    p = o ? 65536 : 16384;
                if (d.e.c > 255 || d.e.r >= p) {
                    if (t.WTF) throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV16384");
                    d.e.c = Math.min(d.e.c, 255), d.e.r = Math.min(d.e.c, p - 1)
                }
                re(a, 2057, A0(0, 16, t)), re(a, 13, $r(1)), re(a, 12, $r(100)), re(a, 15, Ir(!0)), re(a, 17, Ir(!1)), re(a, 16, Yt(.001)), re(a, 95, Ir(!0)), re(a, 42, Ir(!1)), re(a, 43, Ir(!1)), re(a, 130, $r(1)), re(a, 128, function bu(e) {
                    var t = G(8);
                    return t.write_shift(4, 0), t.write_shift(2, e[0] ? e[0] + 1 : 0), t.write_shift(2, e[1] ? e[1] + 1 : 0), t
                }([0, 0])), re(a, 131, Ir(!1)), re(a, 132, Ir(!1)), o && function F2(e, t) {
                    if (t) {
                        var r = 0;
                        t.forEach(function(a, n) {
                            ++r <= 256 && a && re(e, 125, function sh(e, t) {
                                var r = G(12);
                                r.write_shift(2, t), r.write_shift(2, t), r.write_shift(2, 256 * e.width), r.write_shift(2, 0);
                                var a = 0;
                                return e.hidden && (a |= 1), r.write_shift(1, a), r.write_shift(1, a = e.level || 0), r.write_shift(2, 0), r
                            }(Ln(n, a), n))
                        })
                    }
                }(a, i["!cols"]), re(a, 512, function yu(e, t) {
                    var r = 8 != t.biff && t.biff ? 2 : 4,
                        a = G(2 * r + 6);
                    return a.write_shift(r, e.s.r), a.write_shift(r, e.e.r + 1), a.write_shift(2, e.s.c), a.write_shift(2, e.e.c + 1), a.write_shift(2, 0), a
                }(d, t)), o && (i["!links"] = []);
                for (var u = d.s.r; u <= d.e.r; ++u) {
                    h = Ze(u);
                    for (var m = d.s.c; m <= d.e.c; ++m) {
                        u === d.s.r && (x[m] = Xe(m)), l = x[m] + h;
                        var E = c ? (i[u] || [])[m] : i[l];
                        E && (y2(a, E, u, m, t), o && E.l && i["!links"].push([l, E.l]))
                    }
                }
                var k = f.CodeName || f.name || n;
                return o && re(a, 574, function pu(e) {
                    var t = G(18),
                        r = 1718;
                    return e && e.RTL && (r |= 64), t.write_shift(2, r), t.write_shift(4, 0), t.write_shift(4, 64), t.write_shift(4, 0), t.write_shift(4, 0), t
                }((s.Views || [])[0])), o && (i["!merges"] || []).length && re(a, 229, function $u(e) {
                    var t = G(2 + 8 * e.length);
                    t.write_shift(2, e.length);
                    for (var r = 0; r < e.length; ++r) zs(e[r], t);
                    return t
                }(i["!merges"])), o && function S2(e, t) {
                    for (var r = 0; r < t["!links"].length; ++r) {
                        var a = t["!links"][r];
                        re(e, 440, qu(a)), a[1].Tooltip && re(e, 2048, eh(a))
                    }
                    delete t["!links"]
                }(a, i), re(a, 442, Ws(k)), o && function E2(e, t) {
                    var r = G(19);
                    r.write_shift(4, 2151), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 1), r.write_shift(4, 0), re(e, 2151, r), (r = G(39)).write_shift(4, 2152), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(2, 1), r.write_shift(4, 4), r.write_shift(2, 0), zs(Re(t["!ref"] || "A1"), r), r.write_shift(4, 4), re(e, 2152, r)
                }(a, i), re(a, 10), a.end()
            }

            function C2(e, t, r) {
                var a = Dr(),
                    n = (e || {}).Workbook || {},
                    i = n.Sheets || [],
                    s = n.WBProps || {},
                    f = 8 == r.biff,
                    c = 5 == r.biff;
                re(a, 2057, A0(0, 5, r)), "xla" == r.bookType && re(a, 135), re(a, 225, f ? $r(1200) : null), re(a, 193, function Nl(e, t) {
                        t || (t = G(e));
                        for (var r = 0; r < e; ++r) t.write_shift(1, 0);
                        return t
                    }(2)), c && re(a, 191), c && re(a, 192), re(a, 226), re(a, 92, function tu(e, t) {
                        var r = !t || 8 == t.biff,
                            a = G(r ? 112 : 54);
                        for (a.write_shift(8 == t.biff ? 2 : 1, 7), r && a.write_shift(1, 0), a.write_shift(4, 859007059), a.write_shift(4, 5458548 | (r ? 0 : 536870912)); a.l < a.length;) a.write_shift(1, r ? 0 : 32);
                        return a
                    }(0, r)), re(a, 66, $r(f ? 1200 : 1252)), f && re(a, 353, $r(0)), f && re(a, 448), re(a, 317, function oh(e) {
                        for (var t = G(2 * e), r = 0; r < e; ++r) t.write_shift(2, r + 1);
                        return t
                    }(e.SheetNames.length)), f && e.vbaraw && re(a, 211), f && e.vbaraw && re(a, 442, Ws(s.CodeName || "ThisWorkbook")), re(a, 156, $r(17)), re(a, 25, Ir(!1)), re(a, 18, Ir(!1)), re(a, 19, $r(0)), f && re(a, 431, Ir(!1)), f && re(a, 444, $r(0)), re(a, 61, function xu() {
                        var e = G(18);
                        return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e
                    }()), re(a, 64, Ir(!1)), re(a, 141, $r(0)), re(a, 34, Ir("true" == function fv(e) {
                        return e.Workbook && e.Workbook.WBProps && function ze(e) {
                            switch (e) {
                                case 1:
                                case !0:
                                case "1":
                                case "true":
                                case "TRUE":
                                    return !0;
                                default:
                                    return !1
                            }
                        }(e.Workbook.WBProps.date1904) ? "true" : "false"
                    }(e))), re(a, 14, Ir(!0)), f && re(a, 439, Ir(!1)), re(a, 218, $r(0)),
                    function w2(e, t, r) {
                        re(e, 49, function gu(e, t) {
                            var r = e.name || "Arial",
                                a = t && 5 == t.biff,
                                i = G(a ? 15 + r.length : 16 + 2 * r.length);
                            return i.write_shift(2, 20 * (e.sz || 12)), i.write_shift(4, 0), i.write_shift(2, 400), i.write_shift(4, 0), i.write_shift(2, 0), i.write_shift(1, r.length), a || i.write_shift(1, 1), i.write_shift((a ? 1 : 2) * r.length, r, a ? "sbcs" : "utf16le"), i
                        }({
                            sz: 12,
                            color: {
                                theme: 1
                            },
                            name: "Arial",
                            family: 2,
                            scheme: "minor"
                        }, r))
                    }(a, 0, r),
                    function k2(e, t, r) {
                        t && [
                            [5, 8],
                            [23, 26],
                            [41, 44],
                            [50, 392]
                        ].forEach(function(a) {
                            for (var n = a[0]; n <= a[1]; ++n) null != t[n] && re(e, 1054, Su(n, t[n], r))
                        })
                    }(a, e.SSF, r),
                    function T2(e, t) {
                        for (var r = 0; r < 16; ++r) re(e, 224, Js({
                            numFmtId: 0,
                            style: !0
                        }, 0, t));
                        t.cellXfs.forEach(function(a) {
                            re(e, 224, Js(a, 0, t))
                        })
                    }(a, r), f && re(a, 352, Ir(!1));
                var l = a.end(),
                    h = Dr();
                f && re(h, 140, function th(e) {
                    return e || (e = G(4)), e.write_shift(2, 1), e.write_shift(2, 1), e
                }()), f && r.Strings && function d2(e, t, r, a) {
                    var n = a || (r || []).length || 0;
                    if (n <= 8224) return re(e, t, r, n);
                    var i = t;
                    if (!isNaN(i)) {
                        for (var s = r.parts || [], f = 0, c = 0, o = 0; o + (s[f] || 8224) <= 8224;) o += s[f] || 8224, f++;
                        var l = e.next(4);
                        for (l.write_shift(2, i), l.write_shift(2, o), e.push(r.slice(c, c + o)), c += o; c < n;) {
                            for ((l = e.next(4)).write_shift(2, 60), o = 0; o + (s[f] || 8224) <= 8224;) o += s[f] || 8224, f++;
                            l.write_shift(2, o), e.push(r.slice(c, c + o)), c += o
                        }
                    }
                }(h, 252, function fu(e, t) {
                    var r = G(8);
                    r.write_shift(4, e.Count), r.write_shift(4, e.Unique);
                    for (var a = [], n = 0; n < e.length; ++n) a[n] = Ml(e[n]);
                    var i = lr([r].concat(a));
                    return i.parts = [r.length].concat(a.map(function(s) {
                        return s.length
                    })), i
                }(r.Strings)), re(h, 10);
                var x = h.end(),
                    d = Dr(),
                    p = 0,
                    u = 0;
                for (u = 0; u < e.SheetNames.length; ++u) p += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[u].length;
                var m = l.length + p + x.length;
                for (u = 0; u < e.SheetNames.length; ++u) re(d, 133, iu({
                    pos: m,
                    hs: (i[u] || {}).Hidden || 0,
                    dt: 0,
                    name: e.SheetNames[u]
                }, r)), m += t[u].length;
                var k = d.end();
                if (p != k.length) throw new Error("BS8 " + p + " != " + k.length);
                var _ = [];
                return l.length && _.push(l), k.length && _.push(k), x.length && _.push(x), lr(_)
            }

            function qf(e, t) {
                for (var r = 0; r <= e.SheetNames.length; ++r) {
                    var a = e.Sheets[e.SheetNames[r]];
                    a && a["!ref"] && Or(a["!ref"]).e.c > 255 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[r] + "' extends beyond column IV (255).  Data may be lost.")
                }
                var i = t || {};
                switch (i.biff || 2) {
                    case 8:
                    case 5:
                        return function D2(e, t) {
                            var r = t || {},
                                a = [];
                            e && !e.SSF && (e.SSF = He(pe)), e && e.SSF && (ua(), Da(e.SSF), r.revssf = xn(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, Z0(r), r.cellXfs = [], Nt(r.cellXfs, {}, {
                                revssf: {
                                    General: 0
                                }
                            }), e.Props || (e.Props = {});
                            for (var n = 0; n < e.SheetNames.length; ++n) a[a.length] = A2(n, r, e);
                            return a.unshift(C2(e, a, r)), lr(a)
                        }(e, t);
                    case 4:
                    case 3:
                    case 2:
                        return function _2(e, t) {
                            var r = t || {};
                            null != Fe && null == r.dense && (r.dense = Fe);
                            for (var a = Dr(), n = 0, i = 0; i < e.SheetNames.length; ++i) e.SheetNames[i] == r.sheet && (n = i);
                            if (0 == n && r.sheet && e.SheetNames[0] != r.sheet) throw new Error("Sheet not found: " + r.sheet);
                            return re(a, 4 == r.biff ? 1033 : 3 == r.biff ? 521 : 9, A0(0, 16, r)),
                                function g2(e, t, r, a) {
                                    var s, n = Array.isArray(t),
                                        i = Re(t["!ref"] || "A1"),
                                        f = "",
                                        c = [];
                                    if (i.e.c > 255 || i.e.r > 16383) {
                                        if (a.WTF) throw new Error("Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384");
                                        i.e.c = Math.min(i.e.c, 255), i.e.r = Math.min(i.e.c, 16383), s = Ee(i)
                                    }
                                    for (var o = i.s.r; o <= i.e.r; ++o) {
                                        f = Ze(o);
                                        for (var l = i.s.c; l <= i.e.c; ++l) {
                                            o === i.s.r && (c[l] = Xe(l)), s = c[l] + f;
                                            var h = n ? (t[o] || [])[l] : t[s];
                                            h && v2(e, h, o, l)
                                        }
                                    }
                                }(a, e.Sheets[e.SheetNames[n]], 0, r), re(a, 10), a.end()
                        }(e, t)
                }
                throw new Error("invalid type " + i.bookType + " for BIFF")
            }

            function ec(e, t, r, a) {
                for (var n = e["!merges"] || [], i = [], s = t.s.c; s <= t.e.c; ++s) {
                    for (var f = 0, c = 0, o = 0; o < n.length; ++o)
                        if (!(n[o].s.r > r || n[o].s.c > s || n[o].e.r < r || n[o].e.c < s)) {
                            if (n[o].s.r < r || n[o].s.c < s) {
                                f = -1;
                                break
                            }
                            f = n[o].e.r - n[o].s.r + 1, c = n[o].e.c - n[o].s.c + 1;
                            break
                        }
                    if (!(f < 0)) {
                        var l = ve({
                                r,
                                c: s
                            }),
                            h = a.dense ? (e[r] || [])[s] : e[l],
                            x = h && null != h.v && (h.h || Hi(h.w || (ft(h), h.w) || "")) || "",
                            d = {};
                        f > 1 && (d.rowspan = f), c > 1 && (d.colspan = c), a.editable ? x = '<span contenteditable="true">' + x + "</span>" : h && (d["data-t"] = h && h.t || "z", null != h.v && (d["data-v"] = h.v), null != h.z && (d["data-z"] = h.z), h.l && "#" != (h.l.Target || "#").charAt(0) && (x = '<a href="' + h.l.Target + '">' + x + "</a>")), d.id = (a.id || "sjs") + "-" + l, i.push(q("td", x, d))
                    }
                }
                return "<tr>" + i.join("") + "</tr>"
            }
            var rc = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
                tc = "</body></html>";

            function nc(e, t) {
                var r = t || {},
                    n = null != r.footer ? r.footer : tc,
                    i = [null != r.header ? r.header : rc],
                    s = Or(e["!ref"]);
                r.dense = Array.isArray(e), i.push(function ac(e, t, r) {
                    return [].join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">"
                }(0, 0, r));
                for (var f = s.s.r; f <= s.e.r; ++f) i.push(ec(e, s, f, r));
                return i.push("</table>" + n), i.join("")
            }

            function ic(e, t, r) {
                var a = r || {};
                null != Fe && (a.dense = Fe);
                var n = 0,
                    i = 0;
                if (null != a.origin)
                    if ("number" == typeof a.origin) n = a.origin;
                    else {
                        var s = "string" == typeof a.origin ? er(a.origin) : a.origin;
                        n = s.r, i = s.c
                    }
                var f = t.getElementsByTagName("tr"),
                    c = Math.min(a.sheetRows || 1e7, f.length),
                    o = {
                        s: {
                            r: 0,
                            c: 0
                        },
                        e: {
                            r: n,
                            c: i
                        }
                    };
                if (e["!ref"]) {
                    var l = Or(e["!ref"]);
                    o.s.r = Math.min(o.s.r, l.s.r), o.s.c = Math.min(o.s.c, l.s.c), o.e.r = Math.max(o.e.r, l.e.r), o.e.c = Math.max(o.e.c, l.e.c), -1 == n && (o.e.r = n = l.e.r + 1)
                }
                var h = [],
                    x = 0,
                    d = e["!rows"] || (e["!rows"] = []),
                    p = 0,
                    u = 0,
                    m = 0,
                    E = 0,
                    k = 0,
                    _ = 0;
                for (e["!cols"] || (e["!cols"] = []); p < f.length && u < c; ++p) {
                    var I = f[p];
                    if (fc(I)) {
                        if (a.display) continue;
                        d[u] = {
                            hidden: !0
                        }
                    }
                    var P = I.children;
                    for (m = E = 0; m < P.length; ++m) {
                        var H = P[m];
                        if (!a.display || !fc(H)) {
                            var C = H.hasAttribute("data-v") ? H.getAttribute("data-v") : H.hasAttribute("v") ? H.getAttribute("v") : zi(H.innerHTML),
                                N = H.getAttribute("data-z") || H.getAttribute("z");
                            for (x = 0; x < h.length; ++x) {
                                var R = h[x];
                                R.s.c == E + i && R.s.r < u + n && u + n <= R.e.r && (E = R.e.c + 1 - i, x = -1)
                            }
                            _ = +H.getAttribute("colspan") || 1, ((k = +H.getAttribute("rowspan") || 1) > 1 || _ > 1) && h.push({
                                s: {
                                    r: u + n,
                                    c: E + i
                                },
                                e: {
                                    r: u + n + (k || 1) - 1,
                                    c: E + i + (_ || 1) - 1
                                }
                            });
                            var V = {
                                    t: "s",
                                    v: C
                                },
                                X = H.getAttribute("data-t") || H.getAttribute("t") || "";
                            null != C && (0 == C.length ? V.t = X || "z" : a.raw || 0 == C.trim().length || "s" == X || ("TRUE" === C ? V = {
                                t: "b",
                                v: !0
                            } : "FALSE" === C ? V = {
                                t: "b",
                                v: !1
                            } : isNaN(et(C)) ? isNaN(ha(C).getDate()) || (V = {
                                t: "d",
                                v: $e(C)
                            }, a.cellDates || (V = {
                                t: "n",
                                v: ur(V.v)
                            }), V.z = a.dateNF || pe[14]) : V = {
                                t: "n",
                                v: et(C)
                            })), void 0 === V.z && null != N && (V.z = N);
                            var b = "",
                                te = H.getElementsByTagName("A");
                            if (te && te.length)
                                for (var le = 0; le < te.length && (!te[le].hasAttribute("href") || "#" == (b = te[le].getAttribute("href")).charAt(0)); ++le);
                            b && "#" != b.charAt(0) && (V.l = {
                                Target: b
                            }), a.dense ? (e[u + n] || (e[u + n] = []), e[u + n][E + i] = V) : e[ve({
                                c: E + i,
                                r: u + n
                            })] = V, o.e.c < E + i && (o.e.c = E + i), E += _
                        }
                    }++u
                }
                return h.length && (e["!merges"] = (e["!merges"] || []).concat(h)), o.e.r = Math.max(o.e.r, u - 1 + n), e["!ref"] = Ee(o), u >= c && (e["!fullref"] = Ee((o.e.r = f.length - p + u - 1 + n, o))), e
            }

            function sc(e, t) {
                return ic((t || {}).dense ? [] : {}, e, t)
            }

            function fc(e) {
                var t = "",
                    r = function R2(e) {
                        return e.ownerDocument.defaultView && "function" == typeof e.ownerDocument.defaultView.getComputedStyle ? e.ownerDocument.defaultView.getComputedStyle : "function" == typeof getComputedStyle ? getComputedStyle : null
                    }(e);
                return r && (t = r(e).getPropertyValue("display")), t || (t = e.style && e.style.display), "none" === t
            }
            var N2 = function() {
                    var e = ["<office:master-styles>", '<style:master-page style:name="mp1" style:page-layout-name="mp1">', "<style:header/>", '<style:header-left style:display="false"/>', "<style:footer/>", '<style:footer-left style:display="false"/>', "</style:master-page>", "</office:master-styles>"].join(""),
                        t = "<office:document-styles " + Ra({
                            "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                            "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
                            "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
                            "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
                            "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
                            "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                            "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
                            "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
                            "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
                            "office:version": "1.2"
                        }) + ">" + e + "</office:document-styles>";
                    return function() {
                        return Je + t
                    }
                }(),
                hc = function() {
                    var e = function(i) {
                            return Me(i).replace(/  +/g, function(s) {
                                return '<text:s text:c="' + s.length + '"/>'
                            }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>")
                        },
                        t = "          <table:table-cell />\n",
                        a = function(i, s, f) {
                            var c = [];
                            c.push('      <table:table table:name="' + Me(s.SheetNames[f]) + '" table:style-name="ta1">\n');
                            var o = 0,
                                l = 0,
                                h = Or(i["!ref"] || "A1"),
                                x = i["!merges"] || [],
                                d = 0,
                                p = Array.isArray(i);
                            if (i["!cols"])
                                for (l = 0; l <= h.e.c; ++l) c.push("        <table:table-column" + (i["!cols"][l] ? ' table:style-name="co' + i["!cols"][l].ods + '"' : "") + "></table:table-column>\n");
                            var m = i["!rows"] || [];
                            for (o = 0; o < h.s.r; ++o) c.push("        <table:table-row" + (m[o] ? ' table:style-name="ro' + m[o].ods + '"' : "") + "></table:table-row>\n");
                            for (; o <= h.e.r; ++o) {
                                for (c.push("        <table:table-row" + (m[o] ? ' table:style-name="ro' + m[o].ods + '"' : "") + ">\n"), l = 0; l < h.s.c; ++l) c.push(t);
                                for (; l <= h.e.c; ++l) {
                                    var E = !1,
                                        k = {},
                                        _ = "";
                                    for (d = 0; d != x.length; ++d)
                                        if (!(x[d].s.c > l || x[d].s.r > o || x[d].e.c < l || x[d].e.r < o)) {
                                            (x[d].s.c != l || x[d].s.r != o) && (E = !0), k["table:number-columns-spanned"] = x[d].e.c - x[d].s.c + 1, k["table:number-rows-spanned"] = x[d].e.r - x[d].s.r + 1;
                                            break
                                        }
                                    if (E) c.push("          <table:covered-table-cell/>\n");
                                    else {
                                        var I = ve({
                                                r: o,
                                                c: l
                                            }),
                                            P = p ? (i[o] || [])[l] : i[I];
                                        if (P && P.f && (k["table:formula"] = Me(tp(P.f)), P.F && P.F.slice(0, I.length) == I)) {
                                            var H = Or(P.F);
                                            k["table:number-matrix-columns-spanned"] = H.e.c - H.s.c + 1, k["table:number-matrix-rows-spanned"] = H.e.r - H.s.r + 1
                                        }
                                        if (P) {
                                            switch (P.t) {
                                                case "b":
                                                    _ = P.v ? "TRUE" : "FALSE", k["office:value-type"] = "boolean", k["office:boolean-value"] = P.v ? "true" : "false";
                                                    break;
                                                case "n":
                                                    _ = P.w || String(P.v || 0), k["office:value-type"] = "float", k["office:value"] = P.v || 0;
                                                    break;
                                                case "s":
                                                case "str":
                                                    _ = null == P.v ? "" : P.v, k["office:value-type"] = "string";
                                                    break;
                                                case "d":
                                                    _ = P.w || $e(P.v).toISOString(), k["office:value-type"] = "date", k["office:date-value"] = $e(P.v).toISOString(), k["table:style-name"] = "ce1";
                                                    break;
                                                default:
                                                    c.push(t);
                                                    continue
                                            }
                                            var C = e(_);
                                            if (P.l && P.l.Target) {
                                                var N = P.l.Target;
                                                "#" != (N = "#" == N.charAt(0) ? "#" + ap(N.slice(1)) : N).charAt(0) && !N.match(/^\w+:/) && (N = "../" + N), C = q("text:a", C, {
                                                    "xlink:href": N.replace(/&/g, "&amp;")
                                                })
                                            }
                                            c.push("          " + q("table:table-cell", q("text:p", C, {}), k) + "\n")
                                        } else c.push(t)
                                    }
                                }
                                c.push("        </table:table-row>\n")
                            }
                            return c.push("      </table:table>\n"), c.join("")
                        };
                    return function(s, f) {
                        var c = [Je],
                            o = Ra({
                                "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                                "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
                                "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
                                "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
                                "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
                                "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                                "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
                                "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
                                "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
                                "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
                                "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
                                "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
                                "xmlns:math": "http://www.w3.org/1998/Math/MathML",
                                "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
                                "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
                                "xmlns:ooo": "http://openoffice.org/2004/office",
                                "xmlns:ooow": "http://openoffice.org/2004/writer",
                                "xmlns:oooc": "http://openoffice.org/2004/calc",
                                "xmlns:dom": "http://www.w3.org/2001/xml-events",
                                "xmlns:xforms": "http://www.w3.org/2002/xforms",
                                "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
                                "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                                "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
                                "xmlns:rpt": "http://openoffice.org/2005/report",
                                "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
                                "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
                                "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
                                "xmlns:tableooo": "http://openoffice.org/2009/table",
                                "xmlns:drawooo": "http://openoffice.org/2010/draw",
                                "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
                                "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
                                "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
                                "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
                                "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
                                "office:version": "1.2"
                            }),
                            l = Ra({
                                "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
                                "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
                            });
                        "fods" == f.bookType ? (c.push("<office:document" + o + l + ">\n"), c.push(ws().replace(/office:document-meta/g, "office:meta"))) : c.push("<office:document-content" + o + ">\n"),
                            function(i, s) {
                                i.push(" <office:automatic-styles>\n"), i.push('  <number:date-style style:name="N37" number:automatic-order="true">\n'), i.push('   <number:month number:style="long"/>\n'), i.push("   <number:text>/</number:text>\n"), i.push('   <number:day number:style="long"/>\n'), i.push("   <number:text>/</number:text>\n"), i.push("   <number:year/>\n"), i.push("  </number:date-style>\n");
                                var f = 0;
                                s.SheetNames.map(function(o) {
                                    return s.Sheets[o]
                                }).forEach(function(o) {
                                    if (o && o["!cols"])
                                        for (var l = 0; l < o["!cols"].length; ++l)
                                            if (o["!cols"][l]) {
                                                var h = o["!cols"][l];
                                                if (null == h.width && null == h.wpx && null == h.wch) continue;
                                                Rt(h), h.ods = f;
                                                var x = o["!cols"][l].wpx + "px";
                                                i.push('  <style:style style:name="co' + f + '" style:family="table-column">\n'), i.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + x + '"/>\n'), i.push("  </style:style>\n"), ++f
                                            }
                                });
                                var c = 0;
                                s.SheetNames.map(function(o) {
                                    return s.Sheets[o]
                                }).forEach(function(o) {
                                    if (o && o["!rows"])
                                        for (var l = 0; l < o["!rows"].length; ++l)
                                            if (o["!rows"][l]) {
                                                o["!rows"][l].ods = c;
                                                var h = o["!rows"][l].hpx + "px";
                                                i.push('  <style:style style:name="ro' + c + '" style:family="table-row">\n'), i.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + h + '"/>\n'), i.push("  </style:style>\n"), ++c
                                            }
                                }), i.push('  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">\n'), i.push('   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>\n'), i.push("  </style:style>\n"), i.push('  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n'), i.push(" </office:automatic-styles>\n")
                            }(c, s), c.push("  <office:body>\n"), c.push("    <office:spreadsheet>\n");
                        for (var h = 0; h != s.SheetNames.length; ++h) c.push(a(s.Sheets[s.SheetNames[h]], s, h));
                        return c.push("    </office:spreadsheet>\n"), c.push("  </office:body>\n"), c.push("fods" == f.bookType ? "</office:document>" : "</office:document-content>"), c.join("")
                    }
                }();

            function xc(e, t) {
                if ("fods" == t.bookType) return hc(e, t);
                var r = Zn(),
                    a = "",
                    n = [],
                    i = [];
                return Se(r, a = "mimetype", "application/vnd.oasis.opendocument.spreadsheet"), Se(r, a = "content.xml", hc(e, t)), n.push([a, "text/xml"]), i.push([a, "ContentFile"]), Se(r, a = "styles.xml", N2(e, t)), n.push([a, "text/xml"]), i.push([a, "StylesFile"]), Se(r, a = "meta.xml", Je + ws()), n.push([a, "text/xml"]), i.push([a, "MetadataFile"]), Se(r, a = "manifest.rdf", function gl(e) {
                    var t = [Je];
                    t.push('<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n');
                    for (var r = 0; r != e.length; ++r) t.push(_s(e[r][0], e[r][1])), t.push(vl("", e[r][0]));
                    return t.push(_s("", "Document", "pkg")), t.push("</rdf:RDF>"), t.join("")
                }(i)), n.push([a, "application/rdf+xml"]), Se(r, a = "META-INF/manifest.xml", function ml(e) {
                    var t = [Je];
                    t.push('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n'), t.push('  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n');
                    for (var r = 0; r < e.length; ++r) t.push('  <manifest:file-entry manifest:full-path="' + e[r][0] + '" manifest:media-type="' + e[r][1] + '"/>\n');
                    return t.push("</manifest:manifest>"), t.join("")
                }(n)), r
            }

            function aa(e) {
                return new DataView(e.buffer, e.byteOffset, e.byteLength)
            }

            function P2(e) {
                return typeof TextEncoder < "u" ? (new TextEncoder).encode(e) : Br(st(e))
            }

            function Pt(e) {
                var t = e.reduce(function(n, i) {
                        return n + i.length
                    }, 0),
                    r = new Uint8Array(t),
                    a = 0;
                return e.forEach(function(n) {
                    r.set(n, a), a += n.length
                }), r
            }

            function en(e, t) {
                var r = t ? t[0] : 0,
                    a = 127 & e[r];
                e: if (e[r++] >= 128 && (a |= (127 & e[r]) << 7, e[r++] < 128 || (a |= (127 & e[r]) << 14, e[r++] < 128) || (a |= (127 & e[r]) << 21, e[r++] < 128) || (a += (127 & e[r]) * Math.pow(2, 28), ++r, e[r++] < 128) || (a += (127 & e[r]) * Math.pow(2, 35), ++r, e[r++] < 128) || (a += (127 & e[r]) * Math.pow(2, 42), ++r, e[r++] < 128))) break e;
                return t && (t[0] = r), a
            }

            function Pe(e) {
                var t = new Uint8Array(7);
                t[0] = 127 & e;
                var r = 1;
                e: if (e > 127) {
                    if (t[r - 1] |= 128, t[r] = e >> 7 & 127, ++r, e <= 16383 || (t[r - 1] |= 128, t[r] = e >> 14 & 127, ++r, e <= 2097151) || (t[r - 1] |= 128, t[r] = e >> 21 & 127, ++r, e <= 268435455) || (t[r - 1] |= 128, t[r] = e / 256 >>> 21 & 127, ++r, e <= 34359738367) || (t[r - 1] |= 128, t[r] = e / 65536 >>> 21 & 127, ++r, e <= 4398046511103)) break e;
                    t[r - 1] |= 128, t[r] = e / 16777216 >>> 21 & 127, ++r
                }
                return t.slice(0, r)
            }

            function qe(e) {
                var t = 0,
                    r = 127 & e[t];
                e: if (e[t++] >= 128) {
                    if (r |= (127 & e[t]) << 7, e[t++] < 128 || (r |= (127 & e[t]) << 14, e[t++] < 128) || (r |= (127 & e[t]) << 21, e[t++] < 128)) break e;
                    r |= (127 & e[t]) << 28
                }
                return r
            }

            function be(e) {
                for (var t = [], r = [0]; r[0] < e.length;) {
                    var f, a = r[0],
                        n = en(e, r),
                        i = 7 & n,
                        s = 0;
                    if (0 == (n = Math.floor(n / 8))) break;
                    switch (i) {
                        case 0:
                            for (var c = r[0]; e[r[0]++] >= 128;);
                            f = e.slice(c, r[0]);
                            break;
                        case 5:
                            f = e.slice(r[0], r[0] + (s = 4)), r[0] += s;
                            break;
                        case 1:
                            f = e.slice(r[0], r[0] + (s = 8)), r[0] += s;
                            break;
                        case 2:
                            s = en(e, r), f = e.slice(r[0], r[0] + s), r[0] += s;
                            break;
                        default:
                            throw new Error("PB Type ".concat(i, " for Field ").concat(n, " at offset ").concat(a))
                    }
                    var o = {
                        data: f,
                        type: i
                    };
                    null == t[n] ? t[n] = [o] : t[n].push(o)
                }
                return t
            }

            function pr(e) {
                var t = [];
                return e.forEach(function(r, a) {
                    r.forEach(function(n) {
                        n.data && (t.push(Pe(8 * a + n.type)), 2 == n.type && t.push(Pe(n.data.length)), t.push(n.data))
                    })
                }), Pt(t)
            }

            function jr(e) {
                for (var t, r = [], a = [0]; a[0] < e.length;) {
                    var n = en(e, a),
                        i = be(e.slice(a[0], a[0] + n));
                    a[0] += n;
                    var s = {
                        id: qe(i[1][0].data),
                        messages: []
                    };
                    i[2].forEach(function(f) {
                        var c = be(f.data),
                            o = qe(c[3][0].data);
                        s.messages.push({
                            meta: c,
                            data: e.slice(a[0], a[0] + o)
                        }), a[0] += o
                    }), null != (t = i[3]) && t[0] && (s.merge = qe(i[3][0].data) >>> 0 > 0), r.push(s)
                }
                return r
            }

            function Ea(e) {
                var t = [];
                return e.forEach(function(r) {
                    var a = [];
                    a[1] = [{
                        data: Pe(r.id),
                        type: 0
                    }], a[2] = [], null != r.merge && (a[3] = [{
                        data: Pe(+!!r.merge),
                        type: 0
                    }]);
                    var n = [];
                    r.messages.forEach(function(s) {
                        n.push(s.data), s.meta[3] = [{
                            type: 0,
                            data: Pe(s.data.length)
                        }], a[2].push({
                            data: pr(s.meta),
                            type: 2
                        })
                    });
                    var i = pr(a);
                    t.push(Pe(i.length)), t.push(i), n.forEach(function(s) {
                        return t.push(s)
                    })
                }), Pt(t)
            }

            function U2(e, t) {
                if (0 != e) throw new Error("Unexpected Snappy chunk type ".concat(e));
                for (var r = [0], a = en(t, r), n = []; r[0] < t.length;) {
                    var i = 3 & t[r[0]];
                    if (0 != i) {
                        var c = 0,
                            o = 0;
                        if (1 == i ? (o = 4 + (t[r[0]] >> 2 & 7), c = (224 & t[r[0]++]) << 3, c |= t[r[0]++]) : (o = 1 + (t[r[0]++] >> 2), 2 == i ? (c = t[r[0]] | t[r[0] + 1] << 8, r[0] += 2) : (c = (t[r[0]] | t[r[0] + 1] << 8 | t[r[0] + 2] << 16 | t[r[0] + 3] << 24) >>> 0, r[0] += 4)), n = [Pt(n)], 0 == c) throw new Error("Invalid offset 0");
                        if (c > n[0].length) throw new Error("Invalid offset beyond length");
                        if (o >= c)
                            for (n.push(n[0].slice(-c)), o -= c; o >= n[n.length - 1].length;) n.push(n[n.length - 1]), o -= n[n.length - 1].length;
                        n.push(n[0].slice(-c, -c + o))
                    } else {
                        var s = t[r[0]++] >> 2;
                        if (s < 60) ++s;
                        else {
                            var f = s - 59;
                            s = t[r[0]], f > 1 && (s |= t[r[0] + 1] << 8), f > 2 && (s |= t[r[0] + 2] << 16), f > 3 && (s |= t[r[0] + 3] << 24), s >>>= 0, s++, r[0] += f
                        }
                        n.push(t.slice(r[0], r[0] + s)), r[0] += s
                    }
                }
                var l = Pt(n);
                if (l.length != a) throw new Error("Unexpected length: ".concat(l.length, " != ").concat(a));
                return l
            }

            function Kr(e) {
                for (var t = [], r = 0; r < e.length;) {
                    var a = e[r++],
                        n = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
                    t.push(U2(a, e.slice(r += 3, r + n))), r += n
                }
                if (r !== e.length) throw new Error("data is not a valid framed stream!");
                return Pt(t)
            }

            function Ta(e) {
                for (var t = [], r = 0; r < e.length;) {
                    var a = Math.min(e.length - r, 268435455),
                        n = new Uint8Array(4);
                    t.push(n);
                    var i = Pe(a),
                        s = i.length;
                    t.push(i), a <= 60 ? (s++, t.push(new Uint8Array([a - 1 << 2]))) : a <= 256 ? (s += 2, t.push(new Uint8Array([240, a - 1 & 255]))) : a <= 65536 ? (s += 3, t.push(new Uint8Array([244, a - 1 & 255, a - 1 >> 8 & 255]))) : a <= 16777216 ? (s += 4, t.push(new Uint8Array([248, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255]))) : a <= 4294967296 && (s += 5, t.push(new Uint8Array([252, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255, a - 1 >>> 24 & 255]))), t.push(e.slice(r, r + a)), s += a, n[0] = 0, n[1] = 255 & s, n[2] = s >> 8 & 255, n[3] = s >> 16 & 255, r += a
                }
                return Pt(t)
            }

            function j0(e, t) {
                var r = new Uint8Array(32),
                    a = aa(r),
                    n = 12,
                    i = 0;
                switch (r[0] = 5, e.t) {
                    case "n":
                        r[1] = 2,
                            function M2(e, t, r) {
                                var a = Math.floor(0 == r ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20,
                                    n = r / Math.pow(10, a - 6176);
                                e[t + 15] |= a >> 7, e[t + 14] |= (127 & a) << 1;
                                for (var i = 0; n >= 1; ++i, n /= 256) e[t + i] = 255 & n;
                                e[t + 15] |= r >= 0 ? 0 : 128
                            }(r, n, e.v), i |= 1, n += 16;
                        break;
                    case "b":
                        r[1] = 6, a.setFloat64(n, e.v ? 1 : 0, !0), i |= 2, n += 8;
                        break;
                    case "s":
                        if (-1 == t.indexOf(e.v)) throw new Error("Value ".concat(e.v, " missing from SST!"));
                        r[1] = 3, a.setUint32(n, t.indexOf(e.v), !0), i |= 8, n += 4;
                        break;
                    default:
                        throw "unsupported cell type " + e.t
                }
                return a.setUint32(8, i, !0), r.slice(0, n)
            }

            function K0(e, t) {
                var r = new Uint8Array(32),
                    a = aa(r),
                    n = 12,
                    i = 0;
                switch (r[0] = 3, e.t) {
                    case "n":
                        r[2] = 2, a.setFloat64(n, e.v, !0), i |= 32, n += 8;
                        break;
                    case "b":
                        r[2] = 6, a.setFloat64(n, e.v ? 1 : 0, !0), i |= 32, n += 8;
                        break;
                    case "s":
                        if (-1 == t.indexOf(e.v)) throw new Error("Value ".concat(e.v, " missing from SST!"));
                        r[2] = 3, a.setUint32(n, t.indexOf(e.v), !0), i |= 16, n += 4;
                        break;
                    default:
                        throw "unsupported cell type " + e.t
                }
                return a.setUint32(4, i, !0), r.slice(0, n)
            }

            function Ar(e) {
                return en(be(e)[1][0].data)
            }

            function Y2(e, t, r) {
                var a, n, i, s;
                if (null == (a = e[6]) || !a[0] || null == (n = e[7]) || !n[0]) throw "Mutation only works on post-BNC storages!";
                if ((null == (s = null == (i = e[8]) ? void 0 : i[0]) ? void 0 : s.data) && qe(e[8][0].data) > 0) throw "Math only works with normal offsets";
                for (var c = 0, o = aa(e[7][0].data), l = 0, h = [], x = aa(e[4][0].data), d = 0, p = [], u = 0; u < t.length; ++u)
                    if (null != t[u]) {
                        var m, E;
                        switch (o.setUint16(2 * u, l, !0), x.setUint16(2 * u, d, !0), typeof t[u]) {
                            case "string":
                                m = j0({
                                    t: "s",
                                    v: t[u]
                                }, r), E = K0({
                                    t: "s",
                                    v: t[u]
                                }, r);
                                break;
                            case "number":
                                m = j0({
                                    t: "n",
                                    v: t[u]
                                }, r), E = K0({
                                    t: "n",
                                    v: t[u]
                                }, r);
                                break;
                            case "boolean":
                                m = j0({
                                    t: "b",
                                    v: t[u]
                                }, r), E = K0({
                                    t: "b",
                                    v: t[u]
                                }, r);
                                break;
                            default:
                                throw new Error("Unsupported value " + t[u])
                        }
                        h.push(m), l += m.length, p.push(E), d += E.length, ++c
                    } else o.setUint16(2 * u, 65535, !0), x.setUint16(2 * u, 65535);
                for (e[2][0].data = Pe(c); u < e[7][0].data.length / 2; ++u) o.setUint16(2 * u, 65535, !0), x.setUint16(2 * u, 65535, !0);
                return e[6][0].data = Pt(h), e[3][0].data = Pt(p), c
            }

            function Z0(e) {
                ! function mc(e) {
                    return function(r) {
                        for (var a = 0; a != e.length; ++a) {
                            var n = e[a];
                            void 0 === r[n[0]] && (r[n[0]] = n[1]), "n" === n[2] && (r[n[0]] = Number(r[n[0]]))
                        }
                    }
                }([
                    ["cellDates", !1],
                    ["bookSST", !1],
                    ["bookType", "xlsx"],
                    ["compression", !1],
                    ["WTF", !1]
                ])(e)
            }

            function tg(e, t) {
                return "ods" == t.bookType ? xc(e, t) : "numbers" == t.bookType ? function J2(e, t) {
                    if (!t || !t.numbers) throw new Error("Must pass a `numbers` option -- check the README");
                    var r = e.Sheets[e.SheetNames[0]];
                    e.SheetNames.length > 1 && console.error("The Numbers writer currently writes only the first table");
                    var a = Or(r["!ref"]);
                    a.s.r = a.s.c = 0;
                    var n = !1;
                    a.e.c > 9 && (n = !0, a.e.c = 9), a.e.r > 49 && (n = !0, a.e.r = 49), n && console.error("The Numbers writer is currently limited to ".concat(Ee(a)));
                    var i = Un(r, {
                            range: a,
                            header: 1
                        }),
                        s = ["~Sh33tJ5~"];
                    i.forEach(function(O) {
                        return O.forEach(function(D) {
                            "string" == typeof D && s.push(D)
                        })
                    });
                    var f = {},
                        c = [],
                        o = de.read(t.numbers, {
                            type: "base64"
                        });
                    o.FileIndex.map(function(O, D) {
                        return [O, o.FullPaths[D]]
                    }).forEach(function(O) {
                        var D = O[0],
                            j = O[1];
                        2 == D.type && D.name.match(/\.iwa/) && jr(Kr(D.content)).forEach(function(Y) {
                            c.push(Y.id), f[Y.id] = {
                                deps: [],
                                location: j,
                                type: qe(Y.messages[0].meta[1][0].data)
                            }
                        })
                    }), c.sort(function(O, D) {
                        return O - D
                    });
                    var l = c.filter(function(O) {
                        return O > 1
                    }).map(function(O) {
                        return [O, Pe(O)]
                    });
                    o.FileIndex.map(function(O, D) {
                        return [O, o.FullPaths[D]]
                    }).forEach(function(O) {
                        var D = O[0];
                        D.name.match(/\.iwa/) && jr(Kr(D.content)).forEach(function(Q) {
                            Q.messages.forEach(function(ee) {
                                l.forEach(function(Y) {
                                    Q.messages.some(function(ye) {
                                        return 11006 != qe(ye.meta[1][0].data) && function L2(e, t) {
                                            e: for (var r = 0; r <= e.length - t.length; ++r) {
                                                for (var a = 0; a < t.length; ++a)
                                                    if (e[r + a] != t[a]) continue e;
                                                return !0
                                            }
                                            return !1
                                        }(ye.data, Y[1])
                                    }) && f[Y[0]].deps.push(Q.id)
                                })
                            })
                        })
                    });
                    for (var p, x = de.find(o, f[1].location), d = jr(Kr(x.content)), u = 0; u < d.length; ++u) {
                        var m = d[u];
                        1 == m.id && (p = m)
                    }
                    var E = Ar(be(p.messages[0].data)[1][0].data);
                    for (d = jr(Kr((x = de.find(o, f[E].location)).content)), u = 0; u < d.length; ++u)(m = d[u]).id == E && (p = m);
                    for (E = Ar(be(p.messages[0].data)[2][0].data), d = jr(Kr((x = de.find(o, f[E].location)).content)), u = 0; u < d.length; ++u)(m = d[u]).id == E && (p = m);
                    for (E = Ar(be(p.messages[0].data)[2][0].data), d = jr(Kr((x = de.find(o, f[E].location)).content)), u = 0; u < d.length; ++u)(m = d[u]).id == E && (p = m);
                    var k = be(p.messages[0].data);
                    k[6][0].data = Pe(a.e.r + 1), k[7][0].data = Pe(a.e.c + 1);
                    for (var _ = Ar(k[46][0].data), I = de.find(o, f[_].location), P = jr(Kr(I.content)), H = 0; H < P.length && P[H].id != _; ++H);
                    if (P[H].id != _) throw "Bad ColumnRowUIDMapArchive";
                    var C = be(P[H].messages[0].data);
                    C[1] = [], C[2] = [], C[3] = [];
                    for (var N = 0; N <= a.e.c; ++N) {
                        var R = [];
                        R[1] = R[2] = [{
                            type: 0,
                            data: Pe(N + 420690)
                        }], C[1].push({
                            type: 2,
                            data: pr(R)
                        }), C[2].push({
                            type: 0,
                            data: Pe(N)
                        }), C[3].push({
                            type: 0,
                            data: Pe(N)
                        })
                    }
                    C[4] = [], C[5] = [], C[6] = [];
                    for (var V = 0; V <= a.e.r; ++V)(R = [])[1] = R[2] = [{
                        type: 0,
                        data: Pe(V + 726270)
                    }], C[4].push({
                        type: 2,
                        data: pr(R)
                    }), C[5].push({
                        type: 0,
                        data: Pe(V)
                    }), C[6].push({
                        type: 0,
                        data: Pe(V)
                    });
                    P[H].messages[0].data = pr(C), I.content = Ta(Ea(P)), I.size = I.content.length, delete k[46];
                    var X = be(k[4][0].data);
                    X[7][0].data = Pe(a.e.r + 1);
                    var te = Ar(be(X[1][0].data)[2][0].data);
                    if ((P = jr(Kr((I = de.find(o, f[te].location)).content)))[0].id != te) throw "Bad HeaderStorageBucket";
                    var le = be(P[0].messages[0].data);
                    for (V = 0; V < i.length; ++V) {
                        var ie = be(le[2][0].data);
                        ie[1][0].data = Pe(V), ie[4][0].data = Pe(i[V].length), le[2][V] = {
                            type: le[2][0].type,
                            data: pr(ie)
                        }
                    }
                    P[0].messages[0].data = pr(le), I.content = Ta(Ea(P)), I.size = I.content.length;
                    var me = Ar(X[2][0].data);
                    if ((P = jr(Kr((I = de.find(o, f[me].location)).content)))[0].id != me) throw "Bad HeaderStorageBucket";
                    for (le = be(P[0].messages[0].data), N = 0; N <= a.e.c; ++N)(ie = be(le[2][0].data))[1][0].data = Pe(N), ie[4][0].data = Pe(a.e.r + 1), le[2][N] = {
                        type: le[2][0].type,
                        data: pr(ie)
                    };
                    P[0].messages[0].data = pr(le), I.content = Ta(Ea(P)), I.size = I.content.length;
                    var he = Ar(X[4][0].data);
                    ! function() {
                        for (var j, O = de.find(o, f[he].location), D = jr(Kr(O.content)), fe = 0; fe < D.length; ++fe) {
                            var Q = D[fe];
                            Q.id == he && (j = Q)
                        }
                        var ee = be(j.messages[0].data);
                        ee[3] = [];
                        var Y = [];
                        s.forEach(function(Ue, Oe) {
                            Y[1] = [{
                                type: 0,
                                data: Pe(Oe)
                            }], Y[2] = [{
                                type: 0,
                                data: Pe(1)
                            }], Y[3] = [{
                                type: 2,
                                data: P2(Ue)
                            }], ee[3].push({
                                type: 2,
                                data: pr(Y)
                            })
                        }), j.messages[0].data = pr(ee);
                        var y = Ta(Ea(D));
                        O.content = y, O.size = O.content.length
                    }();
                    var De = be(X[3][0].data),
                        oe = De[1][0];
                    delete De[2];
                    var ge = be(oe.data),
                        J = Ar(ge[2][0].data);
                    ! function() {
                        for (var j, O = de.find(o, f[J].location), D = jr(Kr(O.content)), fe = 0; fe < D.length; ++fe) {
                            var Q = D[fe];
                            Q.id == J && (j = Q)
                        }
                        var ee = be(j.messages[0].data);
                        delete ee[6], delete De[7];
                        var Y = new Uint8Array(ee[5][0].data);
                        ee[5] = [];
                        for (var ye = 0, y = 0; y <= a.e.r; ++y) {
                            var Ue = be(Y);
                            ye += Y2(Ue, i[y], s), Ue[1][0].data = Pe(y), ee[5].push({
                                data: pr(Ue),
                                type: 2
                            })
                        }
                        ee[1] = [{
                            type: 0,
                            data: Pe(a.e.c + 1)
                        }], ee[2] = [{
                            type: 0,
                            data: Pe(a.e.r + 1)
                        }], ee[3] = [{
                            type: 0,
                            data: Pe(ye)
                        }], ee[4] = [{
                            type: 0,
                            data: Pe(a.e.r + 1)
                        }], j.messages[0].data = pr(ee);
                        var We = Ta(Ea(D));
                        O.content = We, O.size = O.content.length
                    }(), oe.data = pr(ge), X[3][0].data = pr(De), k[4][0].data = pr(X), p.messages[0].data = pr(k);
                    var U = Ta(Ea(d));
                    return x.content = U, x.size = x.content.length, o
                }(e, t) : "xlsb" == t.bookType ? function ag(e, t) {
                    _a = 1024, e && !e.SSF && (e.SSF = He(pe)), e && e.SSF && (ua(), Da(e.SSF), t.revssf = xn(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, Ya ? t.revStrings = new Map : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
                    var r = "xlsb" == t.bookType ? "bin" : "xml",
                        a = Ff.indexOf(t.bookType) > -1,
                        n = {
                            workbooks: [],
                            sheets: [],
                            charts: [],
                            dialogs: [],
                            macros: [],
                            rels: [],
                            strs: [],
                            comments: [],
                            threadedcomments: [],
                            links: [],
                            coreprops: [],
                            extprops: [],
                            custprops: [],
                            themes: [],
                            styles: [],
                            calcchains: [],
                            vba: [],
                            drawings: [],
                            metadata: [],
                            people: [],
                            TODO: [],
                            xmlns: ""
                        };
                    Z0(t = t || {});
                    var i = Zn(),
                        s = "",
                        f = 0;
                    if (t.cellXfs = [], Nt(t.cellXfs, {}, {
                            revssf: {
                                General: 0
                            }
                        }), e.Props || (e.Props = {}), Se(i, s = "docProps/core.xml", Es(e.Props, t)), n.coreprops.push(s), Ne(t.rels, 2, s, Te.CORE_PROPS), s = "docProps/app.xml", !e.Props || !e.Props.SheetNames)
                        if (e.Workbook && e.Workbook.Sheets) {
                            for (var c = [], o = 0; o < e.SheetNames.length; ++o) 2 != (e.Workbook.Sheets[o] || {}).Hidden && c.push(e.SheetNames[o]);
                            e.Props.SheetNames = c
                        } else e.Props.SheetNames = e.SheetNames;
                    for (e.Props.Worksheets = e.Props.SheetNames.length, Se(i, s, Fs(e.Props)), n.extprops.push(s), Ne(t.rels, 3, s, Te.EXT_PROPS), e.Custprops !== e.Props && Ke(e.Custprops || {}).length > 0 && (Se(i, s = "docProps/custom.xml", ys(e.Custprops)), n.custprops.push(s), Ne(t.rels, 4, s, Te.CUST_PROPS)), f = 1; f <= e.SheetNames.length; ++f) {
                        var l = {
                                "!id": {}
                            },
                            h = e.Sheets[e.SheetNames[f - 1]];
                        if (Se(i, s = "xl/worksheets/sheet" + f + "." + r, Bv(f - 1, s, t, e, l)), n.sheets.push(s), Ne(t.wbrels, -1, "worksheets/sheet" + f + "." + r, Te.WS[0]), h) {
                            var d = h["!comments"],
                                p = !1,
                                u = "";
                            d && d.length > 0 && (Se(i, u = "xl/comments" + f + "." + r, Wv(d, u, t)), n.comments.push(u), Ne(l, -1, "../comments" + f + "." + r, Te.CMNT), p = !0), h["!legacy"] && p && Se(i, "xl/drawings/vmlDrawing" + f + ".vml", Ef(f, h["!comments"])), delete h["!comments"], delete h["!legacy"]
                        }
                        l["!id"].rId1 && Se(i, Ba(s), va(l))
                    }
                    return null != t.Strings && t.Strings.length > 0 && (Se(i, s = "xl/sharedStrings." + r, function Uv(e, t, r) {
                        return (".bin" === t.slice(-4) ? Mh : of )(e, r)
                    }(t.Strings, s, t)), n.strs.push(s), Ne(t.wbrels, -1, "sharedStrings." + r, Te.SST)), Se(i, s = "xl/workbook." + r, function Lv(e, t, r) {
                        return (".bin" === t.slice(-4) ? Tv : jf)(e, r)
                    }(e, s, t)), n.workbooks.push(s), Ne(t.rels, 1, s, Te.WB), Se(i, s = "xl/theme/theme1.xml", b0(e.Themes, t)), n.themes.push(s), Ne(t.wbrels, -1, "theme/theme1.xml", Te.THEME), Se(i, s = "xl/styles." + r, function Mv(e, t, r) {
                        return (".bin" === t.slice(-4) ? b1 : vf)(e, r)
                    }(e, s, t)), n.styles.push(s), Ne(t.wbrels, -1, "styles." + r, Te.STY), e.vbaraw && a && (Se(i, s = "xl/vbaProject.bin", e.vbaraw), n.vba.push(s), Ne(t.wbrels, -1, "vbaProject.bin", Te.VBA)), Se(i, s = "xl/metadata." + r, function Hv(e) {
                        return (".bin" === e.slice(-4) ? ix : kf)()
                    }(s)), n.metadata.push(s), Ne(t.wbrels, -1, "metadata." + r, Te.XLMETA), Se(i, "[Content_Types].xml", gs(n, t)), Se(i, "_rels/.rels", va(t.rels)), Se(i, "xl/_rels/workbook." + r + ".rels", va(t.wbrels)), delete t.revssf, delete t.ssf, i
                }(e, t) : function vc(e, t) {
                    _a = 1024, e && !e.SSF && (e.SSF = He(pe)), e && e.SSF && (ua(), Da(e.SSF), t.revssf = xn(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, Ya ? t.revStrings = new Map : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
                    var r = "xml",
                        a = Ff.indexOf(t.bookType) > -1,
                        n = {
                            workbooks: [],
                            sheets: [],
                            charts: [],
                            dialogs: [],
                            macros: [],
                            rels: [],
                            strs: [],
                            comments: [],
                            threadedcomments: [],
                            links: [],
                            coreprops: [],
                            extprops: [],
                            custprops: [],
                            themes: [],
                            styles: [],
                            calcchains: [],
                            vba: [],
                            drawings: [],
                            metadata: [],
                            people: [],
                            TODO: [],
                            xmlns: ""
                        };
                    Z0(t = t || {});
                    var i = Zn(),
                        s = "",
                        f = 0;
                    if (t.cellXfs = [], Nt(t.cellXfs, {}, {
                            revssf: {
                                General: 0
                            }
                        }), e.Props || (e.Props = {}), Se(i, s = "docProps/core.xml", Es(e.Props, t)), n.coreprops.push(s), Ne(t.rels, 2, s, Te.CORE_PROPS), s = "docProps/app.xml", !e.Props || !e.Props.SheetNames)
                        if (e.Workbook && e.Workbook.Sheets) {
                            for (var c = [], o = 0; o < e.SheetNames.length; ++o) 2 != (e.Workbook.Sheets[o] || {}).Hidden && c.push(e.SheetNames[o]);
                            e.Props.SheetNames = c
                        } else e.Props.SheetNames = e.SheetNames;
                    e.Props.Worksheets = e.Props.SheetNames.length, Se(i, s, Fs(e.Props)), n.extprops.push(s), Ne(t.rels, 3, s, Te.EXT_PROPS), e.Custprops !== e.Props && Ke(e.Custprops || {}).length > 0 && (Se(i, s = "docProps/custom.xml", ys(e.Custprops)), n.custprops.push(s), Ne(t.rels, 4, s, Te.CUST_PROPS));
                    var l = ["SheetJ5"];
                    for (t.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
                        var h = {
                                "!id": {}
                            },
                            x = e.Sheets[e.SheetNames[f - 1]];
                        if (Se(i, s = "xl/worksheets/sheet" + f + "." + r, Uf(f - 1, t, e, h)), n.sheets.push(s), Ne(t.wbrels, -1, "worksheets/sheet" + f + "." + r, Te.WS[0]), x) {
                            var p = x["!comments"],
                                u = !1,
                                m = "";
                            if (p && p.length > 0) {
                                var E = !1;
                                p.forEach(function(k) {
                                    k[1].forEach(function(_) {
                                        1 == _.T && (E = !0)
                                    })
                                }), E && (Se(i, m = "xl/threadedComments/threadedComment" + f + "." + r, dx(p, l, t)), n.threadedcomments.push(m), Ne(h, -1, "../threadedComments/threadedComment" + f + "." + r, Te.TCMNT)), Se(i, m = "xl/comments" + f + "." + r, Sf(p)), n.comments.push(m), Ne(h, -1, "../comments" + f + "." + r, Te.CMNT), u = !0
                            }
                            x["!legacy"] && u && Se(i, "xl/drawings/vmlDrawing" + f + ".vml", Ef(f, x["!comments"])), delete x["!comments"], delete x["!legacy"]
                        }
                        h["!id"].rId1 && Se(i, Ba(s), va(h))
                    }
                    return null != t.Strings && t.Strings.length > 0 && (Se(i, s = "xl/sharedStrings." + r, of (t.Strings, t)), n.strs.push(s), Ne(t.wbrels, -1, "sharedStrings." + r, Te.SST)), Se(i, s = "xl/workbook." + r, jf(e)), n.workbooks.push(s), Ne(t.rels, 1, s, Te.WB), Se(i, s = "xl/theme/theme1.xml", b0(e.Themes, t)), n.themes.push(s), Ne(t.wbrels, -1, "theme/theme1.xml", Te.THEME), Se(i, s = "xl/styles." + r, vf(e, t)), n.styles.push(s), Ne(t.wbrels, -1, "styles." + r, Te.STY), e.vbaraw && a && (Se(i, s = "xl/vbaProject.bin", e.vbaraw), n.vba.push(s), Ne(t.wbrels, -1, "vbaProject.bin", Te.VBA)), Se(i, s = "xl/metadata." + r, kf()), n.metadata.push(s), Ne(t.wbrels, -1, "metadata." + r, Te.XLMETA), l.length > 1 && (Se(i, s = "xl/persons/person.xml", function mx(e) {
                        var t = [Je, q("personList", null, {
                            xmlns: ir.TCMNT,
                            "xmlns:x": Dt[0]
                        }).replace(/[\/]>/, ">")];
                        return e.forEach(function(r, a) {
                            t.push(q("person", null, {
                                displayName: r,
                                id: "{54EE7950-7262-4200-6969-" + ("000000000000" + a).slice(-12) + "}",
                                userId: r,
                                providerId: "None"
                            }))
                        }), t.push("</personList>"), t.join("")
                    }(l)), n.people.push(s), Ne(t.wbrels, -1, "persons/person.xml", Te.PEOPLE)), Se(i, "[Content_Types].xml", gs(n, t)), Se(i, "_rels/.rels", va(t.rels)), Se(i, "xl/_rels/workbook.xml.rels", va(t.wbrels)), delete t.revssf, delete t.ssf, i
                }(e, t)
            }

            function _c(e, t) {
                switch (t.type) {
                    case "base64":
                    case "binary":
                        break;
                    case "buffer":
                    case "array":
                        t.type = "";
                        break;
                    case "file":
                        return Oa(t.file, de.write(e, {
                            type: Ae ? "buffer" : ""
                        }));
                    case "string":
                        throw new Error("'string' output type invalid for '" + t.bookType + "' files");
                    default:
                        throw new Error("Unrecognized type " + t.type)
                }
                return de.write(e, t)
            }

            function lt(e, t, r) {
                r || (r = "");
                var a = r + e;
                switch (t.type) {
                    case "base64":
                        return Fa(st(a));
                    case "binary":
                        return st(a);
                    case "string":
                        return e;
                    case "file":
                        return Oa(t.file, a, "utf8");
                    case "buffer":
                        return Ae ? xt(a, "utf8") : typeof TextEncoder < "u" ? (new TextEncoder).encode(a) : lt(a, {
                            type: "binary"
                        }).split("").map(function(n) {
                            return n.charCodeAt(0)
                        })
                }
                throw new Error("Unrecognized type " + t.type)
            }

            function Mn(e, t) {
                switch (t.type) {
                    case "string":
                    case "base64":
                    case "binary":
                        for (var r = "", a = 0; a < e.length; ++a) r += String.fromCharCode(e[a]);
                        return "base64" == t.type ? Fa(r) : "string" == t.type ? Ve(r) : r;
                    case "file":
                        return Oa(t.file, e);
                    case "buffer":
                        return e;
                    default:
                        throw new Error("Unrecognized type " + t.type)
                }
            }

            function ri(e, t) {
                (function fa() {
                    br(1200),
                        function Xn() {
                            sa(1252)
                        }()
                })(),
                function $f(e) {
                    if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
                    if (!e.SheetNames.length) throw new Error("Workbook is empty");
                    ! function ov(e, t, r) {
                        e.forEach(function(a, n) {
                            zf(a);
                            for (var i = 0; i < n; ++i)
                                if (a == e[i]) throw new Error("Duplicate Sheet Name: " + a);
                            if (r) {
                                var s = t && t[n] && t[n].CodeName || a;
                                if (95 == s.charCodeAt(0) && s.length > 22) throw new Error("Bad Code Name: Worksheet" + s)
                            }
                        })
                    }(e.SheetNames, e.Workbook && e.Workbook.Sheets || [], !!e.vbaraw);
                    for (var r = 0; r < e.SheetNames.length; ++r) ip(e.Sheets[e.SheetNames[r]], 0, r)
                }(e);
                var r = He(t || {});
                if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), "array" == r.type) {
                    r.type = "binary";
                    var a = ri(e, r);
                    return r.type = "array", ya(a)
                }
                var n = 0;
                if (r.sheet && (n = "number" == typeof r.sheet ? r.sheet : e.SheetNames.indexOf(r.sheet), !e.SheetNames[n])) throw new Error("Sheet not found: " + r.sheet + " : " + typeof r.sheet);
                switch (r.bookType || "xlsb") {
                    case "xml":
                    case "xlml":
                        return lt(s2(e, r), r);
                    case "slk":
                    case "sylk":
                        return lt(nf.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
                    case "htm":
                    case "html":
                        return lt(nc(e.Sheets[e.SheetNames[n]], r), r);
                    case "txt":
                        return function hg(e, t) {
                            switch (t.type) {
                                case "base64":
                                    return Fa(e);
                                case "binary":
                                case "string":
                                    return e;
                                case "file":
                                    return Oa(t.file, e, "binary");
                                case "buffer":
                                    return Ae ? xt(e, "binary") : e.split("").map(function(r) {
                                        return r.charCodeAt(0)
                                    })
                            }
                            throw new Error("Unrecognized type " + t.type)
                        }(Fc(e.Sheets[e.SheetNames[n]], r), r);
                    case "csv":
                        return lt(ai(e.Sheets[e.SheetNames[n]], r), r, "\ufeff");
                    case "dif":
                        return lt(sf.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
                    case "dbf":
                        return Mn(C0.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
                    case "prn":
                        return lt(ga.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
                    case "rtf":
                        return lt(df.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
                    case "eth":
                        return lt(ff.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
                    case "fods":
                        return lt(xc(e, r), r);
                    case "wk1":
                        return Mn(ra.sheet_to_wk1(e.Sheets[e.SheetNames[n]], r), r);
                    case "wk3":
                        return Mn(ra.book_to_wk3(e, r), r);
                    case "biff2":
                        r.biff || (r.biff = 2);
                    case "biff3":
                        r.biff || (r.biff = 3);
                    case "biff4":
                        return r.biff || (r.biff = 4), Mn(qf(e, r), r);
                    case "biff5":
                        r.biff || (r.biff = 5);
                    case "biff8":
                    case "xla":
                    case "xls":
                        return r.biff || (r.biff = 8),
                            function ug(e, t) {
                                var r = t || {};
                                return _c(function x2(e, t) {
                                    var r = t || {},
                                        a = de.utils.cfb_new({
                                            root: "R"
                                        }),
                                        n = "/Workbook";
                                    switch (r.bookType || "xls") {
                                        case "xls":
                                            r.bookType = "biff8";
                                        case "xla":
                                            r.bookType || (r.bookType = "xla");
                                        case "biff8":
                                            n = "/Workbook", r.biff = 8;
                                            break;
                                        case "biff5":
                                            n = "/Book", r.biff = 5;
                                            break;
                                        default:
                                            throw new Error("invalid type " + r.bookType + " for XLS CFB")
                                    }
                                    return de.utils.cfb_add(a, n, qf(e, r)), 8 == r.biff && (e.Props || e.Custprops) && function h2(e, t) {
                                        var s, r = [],
                                            a = [],
                                            n = [],
                                            i = 0,
                                            f = Ci(g0, "n"),
                                            c = Ci(_0, "n");
                                        if (e.Props)
                                            for (s = Ke(e.Props), i = 0; i < s.length; ++i)(Object.prototype.hasOwnProperty.call(f, s[i]) ? r : Object.prototype.hasOwnProperty.call(c, s[i]) ? a : n).push([s[i], e.Props[s[i]]]);
                                        if (e.Custprops)
                                            for (s = Ke(e.Custprops), i = 0; i < s.length; ++i) Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) || (Object.prototype.hasOwnProperty.call(f, s[i]) ? r : Object.prototype.hasOwnProperty.call(c, s[i]) ? a : n).push([s[i], e.Custprops[s[i]]]);
                                        var o = [];
                                        for (i = 0; i < n.length; ++i) Ns.indexOf(n[i][0]) > -1 || Ts.indexOf(n[i][0]) > -1 || null != n[i][1] && o.push(n[i]);
                                        a.length && de.utils.cfb_add(t, "/\x05SummaryInformation", Bs(a, Za.SI, c, _0)), (r.length || o.length) && de.utils.cfb_add(t, "/\x05DocumentSummaryInformation", Bs(r, Za.DSI, f, g0, o.length ? o : null, Za.UDI))
                                    }(e, a), 8 == r.biff && e.vbaraw && function Fx(e, t) {
                                        t.FullPaths.forEach(function(r, a) {
                                            if (0 != a) {
                                                var n = r.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
                                                "/" !== n.slice(-1) && de.utils.cfb_add(e, n, t.FileIndex[a].content)
                                            }
                                        })
                                    }(a, de.read(e.vbaraw, {
                                        type: "string" == typeof e.vbaraw ? "binary" : "buffer"
                                    })), a
                                }(e, r), r)
                            }(e, r);
                    case "xlsx":
                    case "xlsm":
                    case "xlam":
                    case "xlsb":
                    case "numbers":
                    case "ods":
                        return function og(e, t) {
                            var r = He(t || {});
                            return function wc(e, t) {
                                var r = {},
                                    a = Ae ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
                                if (t.compression && (r.compression = "DEFLATE"), t.password) r.type = a;
                                else switch (t.type) {
                                    case "base64":
                                        r.type = "base64";
                                        break;
                                    case "binary":
                                        r.type = "string";
                                        break;
                                    case "string":
                                        throw new Error("'string' output type invalid for '" + t.bookType + "' files");
                                    case "buffer":
                                    case "file":
                                        r.type = a;
                                        break;
                                    default:
                                        throw new Error("Unrecognized type " + t.type)
                                }
                                var n = e.FullPaths ? de.write(e, {
                                    fileType: "zip",
                                    type: {
                                        nodebuffer: "buffer",
                                        string: "binary"
                                    }[r.type] || r.type,
                                    compression: !!t.compression
                                }) : e.generate(r);
                                if (typeof Deno < "u" && "string" == typeof n) {
                                    if ("binary" == t.type || "base64" == t.type) return n;
                                    n = new Uint8Array(ya(n))
                                }
                                return t.password && typeof encrypt_agile < "u" ? _c(encrypt_agile(n, t.password), t) : "file" === t.type ? Oa(t.file, n) : "string" == t.type ? Ve(n) : n
                            }(tg(e, r), r)
                        }(e, r);
                    default:
                        throw new Error("Unrecognized bookType |" + r.bookType + "|")
                }
            }

            function Ec(e, t, r, a, n, i, s, f) {
                var c = Ze(r),
                    o = f.defval,
                    l = f.raw || !Object.prototype.hasOwnProperty.call(f, "raw"),
                    h = !0,
                    x = 1 === n ? [] : {};
                if (1 !== n)
                    if (Object.defineProperty) try {
                        Object.defineProperty(x, "__rowNum__", {
                            value: r,
                            enumerable: !1
                        })
                    } catch {
                        x.__rowNum__ = r
                    } else x.__rowNum__ = r;
                if (!s || e[r])
                    for (var d = t.s.c; d <= t.e.c; ++d) {
                        var p = s ? e[r][d] : e[a[d] + c];
                        if (void 0 !== p && void 0 !== p.t) {
                            var u = p.v;
                            switch (p.t) {
                                case "z":
                                    if (null == u) break;
                                    continue;
                                case "e":
                                    u = 0 == u ? null : void 0;
                                    break;
                                case "s":
                                case "d":
                                case "b":
                                case "n":
                                    break;
                                default:
                                    throw new Error("unrecognized type " + p.t)
                            }
                            if (null != i[d]) {
                                if (null == u)
                                    if ("e" == p.t && null === u) x[i[d]] = null;
                                    else if (void 0 !== o) x[i[d]] = o;
                                else {
                                    if (!l || null !== u) continue;
                                    x[i[d]] = null
                                } else x[i[d]] = l && ("n" !== p.t || "n" === p.t && !1 !== f.rawNumbers) ? u : ft(p, u, f);
                                null != u && (h = !1)
                            }
                        } else {
                            if (void 0 === o) continue;
                            null != i[d] && (x[i[d]] = o)
                        }
                    }
                return {
                    row: x,
                    isempty: h
                }
            }

            function Un(e, t) {
                if (null == e || null == e["!ref"]) return [];
                var r = {
                        t: "n",
                        v: 0
                    },
                    a = 0,
                    n = 1,
                    i = [],
                    s = 0,
                    f = "",
                    c = {
                        s: {
                            r: 0,
                            c: 0
                        },
                        e: {
                            r: 0,
                            c: 0
                        }
                    },
                    o = t || {},
                    l = null != o.range ? o.range : e["!ref"];
                switch (1 === o.header ? a = 1 : "A" === o.header ? a = 2 : Array.isArray(o.header) ? a = 3 : null == o.header && (a = 0), typeof l) {
                    case "string":
                        c = Re(l);
                        break;
                    case "number":
                        (c = Re(e["!ref"])).s.r = l;
                        break;
                    default:
                        c = l
                }
                a > 0 && (n = 0);
                var h = Ze(c.s.r),
                    x = [],
                    d = [],
                    p = 0,
                    u = 0,
                    m = Array.isArray(e),
                    E = c.s.r,
                    k = 0,
                    _ = {};
                m && !e[E] && (e[E] = []);
                var I = o.skipHidden && e["!cols"] || [],
                    P = o.skipHidden && e["!rows"] || [];
                for (k = c.s.c; k <= c.e.c; ++k)
                    if (!(I[k] || {}).hidden) switch (x[k] = Xe(k), r = m ? e[E][k] : e[x[k] + h], a) {
                        case 1:
                            i[k] = k - c.s.c;
                            break;
                        case 2:
                            i[k] = x[k];
                            break;
                        case 3:
                            i[k] = o.header[k - c.s.c];
                            break;
                        default:
                            if (null == r && (r = {
                                    w: "__EMPTY",
                                    t: "s"
                                }), f = s = ft(r, null, o), u = _[s] || 0) {
                                do {
                                    f = s + "_" + u++
                                } while (_[f]);
                                _[s] = u, _[f] = 1
                            } else _[s] = 1;
                            i[k] = f
                    }
                for (E = c.s.r + n; E <= c.e.r; ++E)
                    if (!(P[E] || {}).hidden) {
                        var H = Ec(e, c, E, x, a, i, m, o);
                        (!1 === H.isempty || (1 === a ? !1 !== o.blankrows : o.blankrows)) && (d[p++] = H.row)
                    }
                return d.length = p, d
            }
            var Tc = /"/g;

            function Sc(e, t, r, a, n, i, s, f) {
                for (var c = !0, o = [], l = "", h = Ze(r), x = t.s.c; x <= t.e.c; ++x)
                    if (a[x]) {
                        var d = f.dense ? (e[r] || [])[x] : e[a[x] + h];
                        if (null == d) l = "";
                        else if (null != d.v) {
                            c = !1, l = "" + (f.rawNumbers && "n" == d.t ? d.v : ft(d, null, f));
                            for (var p = 0, u = 0; p !== l.length; ++p)
                                if ((u = l.charCodeAt(p)) === n || u === i || 34 === u || f.forceQuotes) {
                                    l = '"' + l.replace(Tc, '""') + '"';
                                    break
                                }
                            "ID" == l && (l = '"ID"')
                        } else null == d.f || d.F ? l = "" : (c = !1, (l = "=" + d.f).indexOf(",") >= 0 && (l = '"' + l.replace(Tc, '""') + '"'));
                        o.push(l)
                    }
                return !1 === f.blankrows && c ? null : o.join(s)
            }

            function ai(e, t) {
                var r = [],
                    a = t ? ? {};
                if (null == e || null == e["!ref"]) return "";
                var n = Re(e["!ref"]),
                    i = void 0 !== a.FS ? a.FS : ",",
                    s = i.charCodeAt(0),
                    f = void 0 !== a.RS ? a.RS : "\n",
                    c = f.charCodeAt(0),
                    o = new RegExp(("|" == i ? "\\|" : i) + "+$"),
                    l = "",
                    h = [];
                a.dense = Array.isArray(e);
                for (var x = a.skipHidden && e["!cols"] || [], d = a.skipHidden && e["!rows"] || [], p = n.s.c; p <= n.e.c; ++p)(x[p] || {}).hidden || (h[p] = Xe(p));
                for (var u = 0, m = n.s.r; m <= n.e.r; ++m)(d[m] || {}).hidden || null != (l = Sc(e, n, m, h, s, c, i, a)) && (a.strip && (l = l.replace(o, "")), (l || !1 !== a.blankrows) && r.push((u++ ? f : "") + l));
                return delete a.dense, r.join("")
            }

            function Fc(e, t) {
                t || (t = {}), t.FS = "\t", t.RS = "\n";
                var r = ai(e, t);
                if (typeof ke > "u" || "string" == t.type) return r;
                var a = ke.utils.encode(1200, r, "str");
                return String.fromCharCode(255) + String.fromCharCode(254) + a
            }

            function yc(e, t, r) {
                var a = r || {},
                    n = +!a.skipHeader,
                    i = e || {},
                    s = 0,
                    f = 0;
                if (i && null != a.origin)
                    if ("number" == typeof a.origin) s = a.origin;
                    else {
                        var c = "string" == typeof a.origin ? er(a.origin) : a.origin;
                        s = c.r, f = c.c
                    }
                var o, l = {
                    s: {
                        c: 0,
                        r: 0
                    },
                    e: {
                        c: f,
                        r: s + t.length - 1 + n
                    }
                };
                if (i["!ref"]) {
                    var h = Re(i["!ref"]);
                    l.e.c = Math.max(l.e.c, h.e.c), l.e.r = Math.max(l.e.r, h.e.r), -1 == s && (l.e.r = (s = h.e.r + 1) + t.length - 1 + n)
                } else -1 == s && (s = 0, l.e.r = t.length - 1 + n);
                var x = a.header || [],
                    d = 0;
                t.forEach(function(u, m) {
                    Ke(u).forEach(function(E) {
                        -1 == (d = x.indexOf(E)) && (x[d = x.length] = E);
                        var k = u[E],
                            _ = "z",
                            I = "",
                            P = ve({
                                c: f + d,
                                r: s + m + n
                            });
                        o = rn(i, P), !k || "object" != typeof k || k instanceof Date ? ("number" == typeof k ? _ = "n" : "boolean" == typeof k ? _ = "b" : "string" == typeof k ? _ = "s" : k instanceof Date ? (_ = "d", a.cellDates || (_ = "n", k = ur(k)), I = a.dateNF || pe[14]) : null === k && a.nullError && (_ = "e", k = 0), o ? (o.t = _, o.v = k, delete o.w, delete o.R, I && (o.z = I)) : i[P] = o = {
                            t: _,
                            v: k
                        }, I && (o.z = I)) : i[P] = k
                    })
                }), l.e.c = Math.max(l.e.c, f + x.length - 1);
                var p = Ze(s);
                if (n)
                    for (d = 0; d < x.length; ++d) i[Xe(d + f) + p] = {
                        t: "s",
                        v: x[d]
                    };
                return i["!ref"] = Ee(l), i
            }

            function rn(e, t, r) {
                if ("string" == typeof t) {
                    if (Array.isArray(e)) {
                        var a = er(t);
                        return e[a.r] || (e[a.r] = []), e[a.r][a.c] || (e[a.r][a.c] = {
                            t: "z"
                        })
                    }
                    return e[t] || (e[t] = {
                        t: "z"
                    })
                }
                return rn(e, ve("number" != typeof t ? t : {
                    r: t,
                    c: r || 0
                }))
            }

            function Ac(e, t, r) {
                return t ? (e.l = {
                    Target: t
                }, r && (e.l.Tooltip = r)) : delete e.l, e
            }
            var si = {
                encode_col: Xe,
                encode_row: Ze,
                encode_cell: ve,
                encode_range: Ee,
                decode_col: u0,
                decode_row: l0,
                split_cell: function Xo(e) {
                    return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",")
                },
                decode_cell: er,
                decode_range: Or,
                format_cell: ft,
                sheet_add_aoa: ls,
                sheet_add_json: yc,
                sheet_add_dom: ic,
                aoa_to_sheet: pa,
                json_to_sheet: function pg(e, t) {
                    return yc(null, e, t)
                },
                table_to_sheet: sc,
                table_to_book: function I2(e, t) {
                    return Ot(sc(e, t), t)
                },
                sheet_to_csv: ai,
                sheet_to_txt: Fc,
                sheet_to_json: Un,
                sheet_to_html: nc,
                sheet_to_formulae: function dg(e) {
                    var r, t = "",
                        a = "";
                    if (null == e || null == e["!ref"]) return [];
                    var f, n = Re(e["!ref"]),
                        i = "",
                        s = [],
                        c = [],
                        o = Array.isArray(e);
                    for (f = n.s.c; f <= n.e.c; ++f) s[f] = Xe(f);
                    for (var l = n.s.r; l <= n.e.r; ++l)
                        for (i = Ze(l), f = n.s.c; f <= n.e.c; ++f)
                            if (t = s[f] + i, a = "", void 0 !== (r = o ? (e[l] || [])[f] : e[t])) {
                                if (null != r.F) {
                                    if (t = r.F, !r.f) continue;
                                    a = r.f, -1 == t.indexOf(":") && (t = t + ":" + t)
                                }
                                if (null != r.f) a = r.f;
                                else {
                                    if ("z" == r.t) continue;
                                    if ("n" == r.t && null != r.v) a = "" + r.v;
                                    else if ("b" == r.t) a = r.v ? "TRUE" : "FALSE";
                                    else if (void 0 !== r.w) a = "'" + r.w;
                                    else {
                                        if (void 0 === r.v) continue;
                                        a = "s" == r.t ? "'" + r.v : "" + r.v
                                    }
                                }
                                c[c.length] = t + "=" + a
                            }
                    return c
                },
                sheet_to_row_object_array: Un,
                sheet_get_cell: rn,
                book_new: function ni() {
                    return {
                        SheetNames: [],
                        Sheets: {}
                    }
                },
                book_append_sheet: function ii(e, t, r, a) {
                    var n = 1;
                    if (!r)
                        for (; n <= 65535 && -1 != e.SheetNames.indexOf(r = "Sheet" + n); ++n, r = void 0);
                    if (!r || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
                    if (a && e.SheetNames.indexOf(r) >= 0) {
                        var i = r.match(/(^.*?)(\d+)$/);
                        n = i && +i[2] || 0;
                        var s = i && i[1] || r;
                        for (++n; n <= 65535 && -1 != e.SheetNames.indexOf(r = s + n); ++n);
                    }
                    if (zf(r), e.SheetNames.indexOf(r) >= 0) throw new Error("Worksheet with name |" + r + "| already exists!");
                    return e.SheetNames.push(r), e.Sheets[r] = t, r
                },
                book_set_sheet_visibility: function vg(e, t, r) {
                    e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
                    var a = function mg(e, t) {
                        if ("number" == typeof t) {
                            if (t >= 0 && e.SheetNames.length > t) return t;
                            throw new Error("Cannot find sheet # " + t)
                        }
                        if ("string" == typeof t) {
                            var r = e.SheetNames.indexOf(t);
                            if (r > -1) return r;
                            throw new Error("Cannot find sheet name |" + t + "|")
                        }
                        throw new Error("Cannot find sheet |" + t + "|")
                    }(e, t);
                    switch (e.Workbook.Sheets[a] || (e.Workbook.Sheets[a] = {}), r) {
                        case 0:
                        case 1:
                        case 2:
                            break;
                        default:
                            throw new Error("Bad sheet visibility setting " + r)
                    }
                    e.Workbook.Sheets[a].Hidden = r
                },
                cell_set_number_format: function gg(e, t) {
                    return e.z = t, e
                },
                cell_set_hyperlink: Ac,
                cell_set_internal_link: function _g(e, t, r) {
                    return Ac(e, "#" + t, r)
                },
                cell_add_comment: function wg(e, t, r) {
                    e.c || (e.c = []), e.c.push({
                        t,
                        a: r || "SheetJS"
                    })
                },
                sheet_set_array_formula: function kg(e, t, r, a) {
                    for (var n = "string" != typeof t ? t : Re(t), i = "string" == typeof t ? t : Ee(t), s = n.s.r; s <= n.e.r; ++s)
                        for (var f = n.s.c; f <= n.e.c; ++f) {
                            var c = rn(e, s, f);
                            c.t = "n", c.F = i, delete c.v, s == n.s.r && f == n.s.c && (c.f = r, a && (c.D = !0))
                        }
                    return e
                },
                consts: {
                    SHEET_VISIBLE: 0,
                    SHEET_HIDDEN: 1,
                    SHEET_VERY_HIDDEN: 2
                }
            };
            class Ag {
                static exportToExcel(t, r) {
                    const {
                        sheetName: a,
                        fileName: n
                    } = (e => {
                        const r = e || "ExportResult";
                        return {
                            sheetName: r,
                            fileName: `${r}-${(new Date).toISOString()}`
                        }
                    })(r), i = si.book_new(), s = si.json_to_sheet(t);
                    si.book_append_sheet(i, s, a),
                        function xg(e, t, r) {
                            var a = r || {};
                            a.type = "file", a.file = t,
                                function ti(e) {
                                    if (!e.bookType) {
                                        var r = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
                                        r.match(/^\.[a-z]+$/) && (e.bookType = r.slice(1)), e.bookType = {
                                            xls: "biff8",
                                            htm: "html",
                                            slk: "sylk",
                                            socialcalc: "eth",
                                            Sh33tJS: "WTF"
                                        }[e.bookType] || e.bookType
                                    }
                                }(a), ri(e, a)
                        }(i, `${n}.xlsx`)
                }
            }
        },
        1572: (Rc, Vn, Mt) => {
            Mt.d(Vn, {
                Cq: () => Ht,
                Ou: () => cn
            });
            var xe = Mt(4650),
                gr = Mt(3238),
                qr = Mt(1281),
                fn = Mt(6895);
            const Sa = ["determinateSpinner"];

            function sa(Qe, ke) {
                if (1 & Qe && (xe.O4$(), xe.TgZ(0, "svg", 11), xe._UZ(1, "circle", 12), xe.qZA()), 2 & Qe) {
                    const Le = xe.oxw();
                    xe.uIk("viewBox", Le._viewBox()), xe.xp6(1), xe.Udp("stroke-dasharray", Le._strokeCircumference(), "px")("stroke-dashoffset", Le._strokeCircumference() / 2, "px")("stroke-width", Le._circleStrokeWidth(), "%"), xe.uIk("r", Le._circleRadius())
                }
            }
            const Xn = (0, gr.pj)(class {
                    constructor(Qe) {
                        this._elementRef = Qe
                    }
                }, "primary"),
                br = new xe.OlP("mat-progress-spinner-default-options", {
                    providedIn: "root",
                    factory: function fa() {
                        return {
                            diameter: Ut
                        }
                    }
                }),
                Ut = 100;
            let cn = (() => {
                    class Qe extends Xn {
                        constructor(Le, Fe, je) {
                            super(Le), this.mode = "mat-spinner" === this._elementRef.nativeElement.nodeName.toLowerCase() ? "indeterminate" : "determinate", this._value = 0, this._diameter = Ut, this._noopAnimations = "NoopAnimations" === Fe && !!je && !je._forceAnimations, je && (je.color && (this.color = this.defaultColor = je.color), je.diameter && (this.diameter = je.diameter), je.strokeWidth && (this.strokeWidth = je.strokeWidth))
                        }
                        get value() {
                            return "determinate" === this.mode ? this._value : 0
                        }
                        set value(Le) {
                            this._value = Math.max(0, Math.min(100, (0, qr.su)(Le)))
                        }
                        get diameter() {
                            return this._diameter
                        }
                        set diameter(Le) {
                            this._diameter = (0, qr.su)(Le)
                        }
                        get strokeWidth() {
                            return this._strokeWidth ? ? this.diameter / 10
                        }
                        set strokeWidth(Le) {
                            this._strokeWidth = (0, qr.su)(Le)
                        }
                        _circleRadius() {
                            return (this.diameter - 10) / 2
                        }
                        _viewBox() {
                            const Le = 2 * this._circleRadius() + this.strokeWidth;
                            return `0 0 ${Le} ${Le}`
                        }
                        _strokeCircumference() {
                            return 2 * Math.PI * this._circleRadius()
                        }
                        _strokeDashOffset() {
                            return "determinate" === this.mode ? this._strokeCircumference() * (100 - this._value) / 100 : null
                        }
                        _circleStrokeWidth() {
                            return this.strokeWidth / this.diameter * 100
                        }
                    }
                    return Qe.\u0275fac = function(Le) {
                        return new(Le || Qe)(xe.Y36(xe.SBq), xe.Y36(xe.QbO, 8), xe.Y36(br))
                    }, Qe.\u0275cmp = xe.Xpm({
                        type: Qe,
                        selectors: [
                            ["mat-progress-spinner"],
                            ["mat-spinner"]
                        ],
                        viewQuery: function(Le, Fe) {
                            if (1 & Le && xe.Gf(Sa, 5), 2 & Le) {
                                let je;
                                xe.iGM(je = xe.CRH()) && (Fe._determinateCircle = je.first)
                            }
                        },
                        hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"],
                        hostVars: 12,
                        hostBindings: function(Le, Fe) {
                            2 & Le && (xe.uIk("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", "determinate" === Fe.mode ? Fe.value : null)("mode", Fe.mode), xe.Udp("width", Fe.diameter, "px")("height", Fe.diameter, "px"), xe.ekj("_mat-animation-noopable", Fe._noopAnimations)("mdc-circular-progress--indeterminate", "indeterminate" === Fe.mode))
                        },
                        inputs: {
                            color: "color",
                            mode: "mode",
                            value: "value",
                            diameter: "diameter",
                            strokeWidth: "strokeWidth"
                        },
                        exportAs: ["matProgressSpinner"],
                        features: [xe.qOj],
                        decls: 14,
                        vars: 11,
                        consts: [
                            ["circle", ""],
                            ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"],
                            ["determinateSpinner", ""],
                            ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"],
                            ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"],
                            ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"],
                            [1, "mdc-circular-progress__spinner-layer"],
                            [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"],
                            [3, "ngTemplateOutlet"],
                            [1, "mdc-circular-progress__gap-patch"],
                            [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"],
                            ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"],
                            ["cx", "50%", "cy", "50%"]
                        ],
                        template: function(Le, Fe) {
                            if (1 & Le && (xe.YNc(0, sa, 2, 8, "ng-template", null, 0, xe.W1O), xe.TgZ(2, "div", 1, 2), xe.O4$(), xe.TgZ(4, "svg", 3), xe._UZ(5, "circle", 4), xe.qZA()(), xe.kcU(), xe.TgZ(6, "div", 5)(7, "div", 6)(8, "div", 7), xe.GkF(9, 8), xe.qZA(), xe.TgZ(10, "div", 9), xe.GkF(11, 8), xe.qZA(), xe.TgZ(12, "div", 10), xe.GkF(13, 8), xe.qZA()()()), 2 & Le) {
                                const je = xe.MAs(1);
                                xe.xp6(4), xe.uIk("viewBox", Fe._viewBox()), xe.xp6(1), xe.Udp("stroke-dasharray", Fe._strokeCircumference(), "px")("stroke-dashoffset", Fe._strokeDashOffset(), "px")("stroke-width", Fe._circleStrokeWidth(), "%"), xe.uIk("r", Fe._circleRadius()), xe.xp6(4), xe.Q6J("ngTemplateOutlet", je), xe.xp6(2), xe.Q6J("ngTemplateOutlet", je), xe.xp6(2), xe.Q6J("ngTemplateOutlet", je)
                            }
                        },
                        dependencies: [fn.tP],
                        styles: ["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, transparent)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],
                        encapsulation: 2,
                        changeDetection: 0
                    }), Qe
                })(),
                Ht = (() => {
                    class Qe {}
                    return Qe.\u0275fac = function(Le) {
                        return new(Le || Qe)
                    }, Qe.\u0275mod = xe.oAB({
                        type: Qe
                    }), Qe.\u0275inj = xe.cJS({
                        imports: [fn.ez, gr.BQ]
                    }), Qe
                })()
        }
    }
]);