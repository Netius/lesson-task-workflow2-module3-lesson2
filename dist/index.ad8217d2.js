!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.axios = t() : e.axios = t();
}(this, function() {
    return function(e1) {
        var t1 = {};
        function n(r) {
            if (t1[r]) return t1[r].exports;
            var o = t1[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e1[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
        }
        return n.m = e1, n.c = t1, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            });
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, n.t = function(e, t2) {
            if (1 & t2 && (e = n(e)), 8 & t2) return e;
            if (4 & t2 && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t2 && "string" != typeof e) for(var o in e)n.d(r, o, (function(t) {
                return e[t];
            }).bind(null, o));
            return r;
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t, "a", t), t;
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "", n(n.s = 12);
    }([
        function(e2, t3, n1) {
            "use strict";
            var r1 = n1(3), o1 = Object.prototype.toString;
            function i(e) {
                return Array.isArray(e);
            }
            function s(e) {
                return void 0 === e;
            }
            function a(e) {
                return "[object ArrayBuffer]" === o1.call(e);
            }
            function u(e) {
                return null !== e && "object" == typeof e;
            }
            function c(e) {
                if ("[object Object]" !== o1.call(e)) return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype;
            }
            function f(e) {
                return "[object Function]" === o1.call(e);
            }
            function l(e, t) {
                if (null != e) {
                    if ("object" != typeof e && (e = [
                        e
                    ]), i(e)) for(var n = 0, r = e.length; n < r; n++)t.call(null, e[n], n, e);
                    else for(var o in e)Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
                }
            }
            e2.exports = {
                isArray: i,
                isArrayBuffer: a,
                isBuffer: function(e) {
                    return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
                },
                isFormData: function(e) {
                    return "[object FormData]" === o1.call(e);
                },
                isArrayBufferView: function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && a(e.buffer);
                },
                isString: function(e) {
                    return "string" == typeof e;
                },
                isNumber: function(e) {
                    return "number" == typeof e;
                },
                isObject: u,
                isPlainObject: c,
                isUndefined: s,
                isDate: function(e) {
                    return "[object Date]" === o1.call(e);
                },
                isFile: function(e) {
                    return "[object File]" === o1.call(e);
                },
                isBlob: function(e) {
                    return "[object Blob]" === o1.call(e);
                },
                isFunction: f,
                isStream: function(e) {
                    return u(e) && f(e.pipe);
                },
                isURLSearchParams: function(e) {
                    return "[object URLSearchParams]" === o1.call(e);
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
                },
                forEach: l,
                merge: function e() {
                    var t = {};
                    function n2(n, r) {
                        c(t[r]) && c(n) ? t[r] = e(t[r], n) : c(n) ? t[r] = e({}, n) : i(n) ? t[r] = n.slice() : t[r] = n;
                    }
                    for(var r2 = 0, o = arguments.length; r2 < o; r2++)l(arguments[r2], n2);
                    return t;
                },
                extend: function(e, t4, n) {
                    return l(t4, function(t, o) {
                        e[o] = n && "function" == typeof t ? r1(t, n) : t;
                    }), e;
                },
                trim: function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                },
                stripBOM: function(e) {
                    return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
                }
            };
        },
        function(e3, t, n) {
            "use strict";
            function r(e) {
                this.message = e;
            }
            r.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "");
            }, r.prototype.__CANCEL__ = !0, e3.exports = r;
        },
        function(e4, t5, n3) {
            "use strict";
            var r = n3(0), o2 = n3(18), i = n3(5), s1 = n3(6), a = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            function u(e, t) {
                !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
            }
            var c, f = {
                transitional: s1,
                adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (c = n3(7)), c),
                transformRequest: [
                    function(e5, t6) {
                        return o2(t6, "Accept"), o2(t6, "Content-Type"), r.isFormData(e5) || r.isArrayBuffer(e5) || r.isBuffer(e5) || r.isStream(e5) || r.isFile(e5) || r.isBlob(e5) ? e5 : r.isArrayBufferView(e5) ? e5.buffer : r.isURLSearchParams(e5) ? (u(t6, "application/x-www-form-urlencoded;charset=utf-8"), e5.toString()) : r.isObject(e5) || t6 && "application/json" === t6["Content-Type"] ? (u(t6, "application/json"), function(e, t, n) {
                            if (r.isString(e)) try {
                                return (t || JSON.parse)(e), r.trim(e);
                            } catch (e6) {
                                if ("SyntaxError" !== e6.name) throw e6;
                            }
                            return (n || JSON.stringify)(e);
                        }(e5)) : e5;
                    }
                ],
                transformResponse: [
                    function(e) {
                        var t = this.transitional || f.transitional, n = t && t.silentJSONParsing, o = t && t.forcedJSONParsing, s = !n && "json" === this.responseType;
                        if (s || o && r.isString(e) && e.length) try {
                            return JSON.parse(e);
                        } catch (e7) {
                            if (s) {
                                if ("SyntaxError" === e7.name) throw i(e7, this, "E_JSON_PARSE");
                                throw e7;
                            }
                        }
                        return e;
                    }
                ],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300;
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            r.forEach([
                "delete",
                "get",
                "head"
            ], function(e) {
                f.headers[e] = {};
            }), r.forEach([
                "post",
                "put",
                "patch"
            ], function(e) {
                f.headers[e] = r.merge(a);
            }), e4.exports = f;
        },
        function(e8, t7, n4) {
            "use strict";
            e8.exports = function(e, t) {
                return function() {
                    for(var n = new Array(arguments.length), r = 0; r < n.length; r++)n[r] = arguments[r];
                    return e.apply(t, n);
                };
            };
        },
        function(e9, t8, n5) {
            "use strict";
            var r = n5(0);
            function o(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
            }
            e9.exports = function(e10, t9, n) {
                if (!t9) return e10;
                var i;
                if (n) i = n(t9);
                else if (r.isURLSearchParams(t9)) i = t9.toString();
                else {
                    var s = [];
                    r.forEach(t9, function(e11, t) {
                        null != e11 && (r.isArray(e11) ? t += "[]" : e11 = [
                            e11
                        ], r.forEach(e11, function(e) {
                            r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e));
                        }));
                    }), i = s.join("&");
                }
                if (i) {
                    var a = e10.indexOf("#");
                    -1 !== a && (e10 = e10.slice(0, a)), e10 += (-1 === e10.indexOf("?") ? "?" : "&") + i;
                }
                return e10;
            };
        },
        function(e12, t10, n6) {
            "use strict";
            e12.exports = function(e, t, n, r, o) {
                return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    };
                }, e;
            };
        },
        function(e, t, n) {
            "use strict";
            e.exports = {
                silentJSONParsing: !0,
                forcedJSONParsing: !0,
                clarifyTimeoutError: !1
            };
        },
        function(e13, t11, n7) {
            "use strict";
            var r3 = n7(0), o = n7(19), i1 = n7(20), s = n7(4), a = n7(21), u = n7(24), c = n7(25), f = n7(8), l = n7(6), p = n7(1);
            e13.exports = function(e14) {
                return new Promise(function(t12, n) {
                    var d, h = e14.data, m = e14.headers, v = e14.responseType;
                    function y() {
                        e14.cancelToken && e14.cancelToken.unsubscribe(d), e14.signal && e14.signal.removeEventListener("abort", d);
                    }
                    r3.isFormData(h) && delete m["Content-Type"];
                    var g = new XMLHttpRequest;
                    if (e14.auth) {
                        var b = e14.auth.username || "", x = e14.auth.password ? unescape(encodeURIComponent(e14.auth.password)) : "";
                        m.Authorization = "Basic " + btoa(b + ":" + x);
                    }
                    var w = a(e14.baseURL, e14.url);
                    function E() {
                        if (g) {
                            var r = "getAllResponseHeaders" in g ? u(g.getAllResponseHeaders()) : null, i = {
                                data: v && "text" !== v && "json" !== v ? g.response : g.responseText,
                                status: g.status,
                                statusText: g.statusText,
                                headers: r,
                                config: e14,
                                request: g
                            };
                            o(function(e) {
                                t12(e), y();
                            }, function(e) {
                                n(e), y();
                            }, i), g = null;
                        }
                    }
                    if (g.open(e14.method.toUpperCase(), s(w, e14.params, e14.paramsSerializer), !0), g.timeout = e14.timeout, "onloadend" in g ? g.onloadend = E : g.onreadystatechange = function() {
                        g && 4 === g.readyState && (0 !== g.status || g.responseURL && 0 === g.responseURL.indexOf("file:")) && setTimeout(E);
                    }, g.onabort = function() {
                        g && (n(f("Request aborted", e14, "ECONNABORTED", g)), g = null);
                    }, g.onerror = function() {
                        n(f("Network Error", e14, null, g)), g = null;
                    }, g.ontimeout = function() {
                        var t = e14.timeout ? "timeout of " + e14.timeout + "ms exceeded" : "timeout exceeded", r = e14.transitional || l;
                        e14.timeoutErrorMessage && (t = e14.timeoutErrorMessage), n(f(t, e14, r.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", g)), g = null;
                    }, r3.isStandardBrowserEnv()) {
                        var O = (e14.withCredentials || c(w)) && e14.xsrfCookieName ? i1.read(e14.xsrfCookieName) : void 0;
                        O && (m[e14.xsrfHeaderName] = O);
                    }
                    "setRequestHeader" in g && r3.forEach(m, function(e, t) {
                        void 0 === h && "content-type" === t.toLowerCase() ? delete m[t] : g.setRequestHeader(t, e);
                    }), r3.isUndefined(e14.withCredentials) || (g.withCredentials = !!e14.withCredentials), v && "json" !== v && (g.responseType = e14.responseType), "function" == typeof e14.onDownloadProgress && g.addEventListener("progress", e14.onDownloadProgress), "function" == typeof e14.onUploadProgress && g.upload && g.upload.addEventListener("progress", e14.onUploadProgress), (e14.cancelToken || e14.signal) && (d = function(e) {
                        g && (n(!e || e && e.type ? new p("canceled") : e), g.abort(), g = null);
                    }, e14.cancelToken && e14.cancelToken.subscribe(d), e14.signal && (e14.signal.aborted ? d() : e14.signal.addEventListener("abort", d))), h || (h = null), g.send(h);
                });
            };
        },
        function(e15, t13, n8) {
            "use strict";
            var r = n8(5);
            e15.exports = function(e, t, n, o, i) {
                var s = new Error(e);
                return r(s, t, n, o, i);
            };
        },
        function(e16, t, n) {
            "use strict";
            e16.exports = function(e) {
                return !(!e || !e.__CANCEL__);
            };
        },
        function(e17, t14, n9) {
            "use strict";
            var r = n9(0);
            e17.exports = function(e18, t15) {
                t15 = t15 || {};
                var n10 = {};
                function o3(e, t) {
                    return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t;
                }
                function i(n) {
                    return r.isUndefined(t15[n]) ? r.isUndefined(e18[n]) ? void 0 : o3(void 0, e18[n]) : o3(e18[n], t15[n]);
                }
                function s(e) {
                    if (!r.isUndefined(t15[e])) return o3(void 0, t15[e]);
                }
                function a(n) {
                    return r.isUndefined(t15[n]) ? r.isUndefined(e18[n]) ? void 0 : o3(void 0, e18[n]) : o3(void 0, t15[n]);
                }
                function u(n) {
                    return n in t15 ? o3(e18[n], t15[n]) : n in e18 ? o3(void 0, e18[n]) : void 0;
                }
                var c = {
                    url: s,
                    method: s,
                    data: s,
                    baseURL: a,
                    transformRequest: a,
                    transformResponse: a,
                    paramsSerializer: a,
                    timeout: a,
                    timeoutMessage: a,
                    withCredentials: a,
                    adapter: a,
                    responseType: a,
                    xsrfCookieName: a,
                    xsrfHeaderName: a,
                    onUploadProgress: a,
                    onDownloadProgress: a,
                    decompress: a,
                    maxContentLength: a,
                    maxBodyLength: a,
                    transport: a,
                    httpAgent: a,
                    httpsAgent: a,
                    cancelToken: a,
                    socketPath: a,
                    responseEncoding: a,
                    validateStatus: u
                };
                return r.forEach(Object.keys(e18).concat(Object.keys(t15)), function(e) {
                    var t = c[e] || i, o = t(e);
                    r.isUndefined(o) && t !== u || (n10[e] = o);
                }), n10;
            };
        },
        function(e, t) {
            e.exports = {
                version: "0.26.1"
            };
        },
        function(e, t, n) {
            e.exports = n(13);
        },
        function(e19, t16, n11) {
            "use strict";
            var r = n11(0), o = n11(3), i = n11(14), s = n11(10);
            var a1 = function e(t) {
                var n12 = new i(t), a = o(i.prototype.request, n12);
                return r.extend(a, i.prototype, n12), r.extend(a, n12), a.create = function(n) {
                    return e(s(t, n));
                }, a;
            }(n11(2));
            a1.Axios = i, a1.Cancel = n11(1), a1.CancelToken = n11(27), a1.isCancel = n11(9), a1.VERSION = n11(11).version, a1.all = function(e) {
                return Promise.all(e);
            }, a1.spread = n11(28), a1.isAxiosError = n11(29), e19.exports = a1, e19.exports.default = a1;
        },
        function(e20, t17, n13) {
            "use strict";
            var r4 = n13(0), o4 = n13(4), i2 = n13(15), s = n13(16), a = n13(10), u = n13(26), c = u.validators;
            function f1(e) {
                this.defaults = e, this.interceptors = {
                    request: new i2,
                    response: new i2
                };
            }
            f1.prototype.request = function(e21, t) {
                "string" == typeof e21 ? (t = t || {}).url = e21 : t = e21 || {}, (t = a(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                var n = t.transitional;
                void 0 !== n && u.assertOptions(n, {
                    silentJSONParsing: c.transitional(c.boolean),
                    forcedJSONParsing: c.transitional(c.boolean),
                    clarifyTimeoutError: c.transitional(c.boolean)
                }, !1);
                var r = [], o = !0;
                this.interceptors.request.forEach(function(e) {
                    "function" == typeof e.runWhen && !1 === e.runWhen(t) || (o = o && e.synchronous, r.unshift(e.fulfilled, e.rejected));
                });
                var i, f = [];
                if (this.interceptors.response.forEach(function(e) {
                    f.push(e.fulfilled, e.rejected);
                }), !o) {
                    var l = [
                        s,
                        void 0
                    ];
                    for(Array.prototype.unshift.apply(l, r), l = l.concat(f), i = Promise.resolve(t); l.length;)i = i.then(l.shift(), l.shift());
                    return i;
                }
                for(var p = t; r.length;){
                    var d = r.shift(), h = r.shift();
                    try {
                        p = d(p);
                    } catch (e) {
                        h(e);
                        break;
                    }
                }
                try {
                    i = s(p);
                } catch (e) {
                    return Promise.reject(e);
                }
                for(; f.length;)i = i.then(f.shift(), f.shift());
                return i;
            }, f1.prototype.getUri = function(e) {
                return e = a(this.defaults, e), o4(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
            }, r4.forEach([
                "delete",
                "get",
                "head",
                "options"
            ], function(e) {
                f1.prototype[e] = function(t, n) {
                    return this.request(a(n || {}, {
                        method: e,
                        url: t,
                        data: (n || {}).data
                    }));
                };
            }), r4.forEach([
                "post",
                "put",
                "patch"
            ], function(e) {
                f1.prototype[e] = function(t, n, r) {
                    return this.request(a(r || {}, {
                        method: e,
                        url: t,
                        data: n
                    }));
                };
            }), e20.exports = f1;
        },
        function(e22, t18, n14) {
            "use strict";
            var r = n14(0);
            function o() {
                this.handlers = [];
            }
            o.prototype.use = function(e, t, n) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }), this.handlers.length - 1;
            }, o.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null);
            }, o.prototype.forEach = function(e) {
                r.forEach(this.handlers, function(t) {
                    null !== t && e(t);
                });
            }, e22.exports = o;
        },
        function(e23, t19, n) {
            "use strict";
            var r = n(0), o = n(17), i = n(9), s = n(2), a = n(1);
            function u(e) {
                if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new a("canceled");
            }
            e23.exports = function(e) {
                return u(e), e.headers = e.headers || {}, e.data = o.call(e, e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach([
                    "delete",
                    "get",
                    "head",
                    "post",
                    "put",
                    "patch",
                    "common"
                ], function(t) {
                    delete e.headers[t];
                }), (e.adapter || s.adapter)(e).then(function(t) {
                    return u(e), t.data = o.call(e, t.data, t.headers, e.transformResponse), t;
                }, function(t) {
                    return i(t) || (u(e), t && t.response && (t.response.data = o.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
                });
            };
        },
        function(e24, t20, n15) {
            "use strict";
            var r = n15(0), o = n15(2);
            e24.exports = function(e, t, n16) {
                var i = this || o;
                return r.forEach(n16, function(n) {
                    e = n.call(i, e, t);
                }), e;
            };
        },
        function(e25, t21, n17) {
            "use strict";
            var r5 = n17(0);
            e25.exports = function(e, t) {
                r5.forEach(e, function(n, r) {
                    r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
                });
            };
        },
        function(e26, t22, n18) {
            "use strict";
            var r = n18(8);
            e26.exports = function(e, t, n) {
                var o = n.config.validateStatus;
                n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
            };
        },
        function(e27, t23, n19) {
            "use strict";
            var r = n19(0);
            e27.exports = r.isStandardBrowserEnv() ? {
                write: function(e, t, n, o, i, s) {
                    var a = [];
                    a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ");
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null;
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5);
                }
            } : {
                write: function() {},
                read: function() {
                    return null;
                },
                remove: function() {}
            };
        },
        function(e28, t24, n) {
            "use strict";
            var r = n(22), o = n(23);
            e28.exports = function(e, t) {
                return e && !r(t) ? o(e, t) : t;
            };
        },
        function(e29, t, n) {
            "use strict";
            e29.exports = function(e) {
                return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
            };
        },
        function(e30, t25, n) {
            "use strict";
            e30.exports = function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
            };
        },
        function(e31, t26, n20) {
            "use strict";
            var r = n20(0), o = [
                "age",
                "authorization",
                "content-length",
                "content-type",
                "etag",
                "expires",
                "from",
                "host",
                "if-modified-since",
                "if-unmodified-since",
                "last-modified",
                "location",
                "max-forwards",
                "proxy-authorization",
                "referer",
                "retry-after",
                "user-agent"
            ];
            e31.exports = function(e32) {
                var t, n, i, s = {};
                return e32 ? (r.forEach(e32.split("\n"), function(e) {
                    if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                        if (s[t] && o.indexOf(t) >= 0) return;
                        s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([
                            n
                        ]) : s[t] ? s[t] + ", " + n : n;
                    }
                }), s) : s;
            };
        },
        function(e33, t27, n21) {
            "use strict";
            var r6 = n21(0);
            e33.exports = r6.isStandardBrowserEnv() ? function() {
                var e34, t28 = /(msie|trident)/i.test(navigator.userAgent), n22 = document.createElement("a");
                function o(e) {
                    var r = e;
                    return t28 && (n22.setAttribute("href", r), r = n22.href), n22.setAttribute("href", r), {
                        href: n22.href,
                        protocol: n22.protocol ? n22.protocol.replace(/:$/, "") : "",
                        host: n22.host,
                        search: n22.search ? n22.search.replace(/^\?/, "") : "",
                        hash: n22.hash ? n22.hash.replace(/^#/, "") : "",
                        hostname: n22.hostname,
                        port: n22.port,
                        pathname: "/" === n22.pathname.charAt(0) ? n22.pathname : "/" + n22.pathname
                    };
                }
                return e34 = o(window.location.href), function(t) {
                    var n = r6.isString(t) ? o(t) : t;
                    return n.protocol === e34.protocol && n.host === e34.host;
                };
            }() : function() {
                return !0;
            };
        },
        function(e35, t29, n23) {
            "use strict";
            var r7 = n23(11).version, o5 = {};
            [
                "object",
                "boolean",
                "number",
                "function",
                "string",
                "symbol"
            ].forEach(function(e, t) {
                o5[e] = function(n) {
                    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
                };
            });
            var i3 = {};
            o5.transitional = function(e36, t30, n24) {
                function o(e, t) {
                    return "[Axios v" + r7 + "] Transitional option '" + e + "'" + t + (n24 ? ". " + n24 : "");
                }
                return function(n, r, s) {
                    if (!1 === e36) throw new Error(o(r, " has been removed" + (t30 ? " in " + t30 : "")));
                    return t30 && !i3[r] && (i3[r] = !0, console.warn(o(r, " has been deprecated since v" + t30 + " and will be removed in the near future"))), !e36 || e36(n, r, s);
                };
            }, e35.exports = {
                assertOptions: function(e, t, n) {
                    if ("object" != typeof e) throw new TypeError("options must be an object");
                    for(var r = Object.keys(e), o = r.length; o-- > 0;){
                        var i = r[o], s = t[i];
                        if (s) {
                            var a = e[i], u = void 0 === a || s(a, i, e);
                            if (!0 !== u) throw new TypeError("option " + i + " must be " + u);
                        } else if (!0 !== n) throw Error("Unknown option " + i);
                    }
                },
                validators: o5
            };
        },
        function(e37, t31, n25) {
            "use strict";
            var r8 = n25(1);
            function o(e38) {
                if ("function" != typeof e38) throw new TypeError("executor must be a function.");
                var t32;
                this.promise = new Promise(function(e) {
                    t32 = e;
                });
                var n = this;
                this.promise.then(function(e) {
                    if (n._listeners) {
                        var t, r = n._listeners.length;
                        for(t = 0; t < r; t++)n._listeners[t](e);
                        n._listeners = null;
                    }
                }), this.promise.then = function(e39) {
                    var t, r = new Promise(function(e) {
                        n.subscribe(e), t = e;
                    }).then(e39);
                    return r.cancel = function() {
                        n.unsubscribe(t);
                    }, r;
                }, e38(function(e) {
                    n.reason || (n.reason = new r8(e), t32(n.reason));
                });
            }
            o.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason;
            }, o.prototype.subscribe = function(e) {
                this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [
                    e
                ];
            }, o.prototype.unsubscribe = function(e) {
                if (this._listeners) {
                    var t = this._listeners.indexOf(e);
                    -1 !== t && this._listeners.splice(t, 1);
                }
            }, o.source = function() {
                var e;
                return {
                    token: new o(function(t) {
                        e = t;
                    }),
                    cancel: e
                };
            }, e37.exports = o;
        },
        function(e40, t33, n) {
            "use strict";
            e40.exports = function(e) {
                return function(t) {
                    return e.apply(null, t);
                };
            };
        },
        function(e41, t, n) {
            "use strict";
            var r = n(0);
            e41.exports = function(e) {
                return r.isObject(e) && !0 === e.isAxiosError;
            };
        }
    ]);
});

//# sourceMappingURL=index.ad8217d2.js.map
