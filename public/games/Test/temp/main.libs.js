var __reflect = this && this.__reflect || function (t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
}, __extends = this && this.__extends || function () {
    var t = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function (t, e) {
        t.__proto__ = e
    }
     || function (t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    };
    return function (e, n) {
        function i() {
            this.constructor = e
        }
        t(e, n),
        e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
    }
}
(), egret;
!function (t) {
    var e = function () {
        function e() {
            t.$error(1014)
        }
        return e.get = function (t) {
            return -1 > t && (t = -1),
            t > 1 && (t = 1),
            function (e) {
                return 0 == t ? e : 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
            }
        },
        e.getPowIn = function (t) {
            return function (e) {
                return Math.pow(e, t)
            }
        },
        e.getPowOut = function (t) {
            return function (e) {
                return 1 - Math.pow(1 - e, t)
            }
        },
        e.getPowInOut = function (t) {
            return function (e) {
                return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t))
            }
        },
        e.sineIn = function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        e.sineOut = function (t) {
            return Math.sin(t * Math.PI / 2)
        },
        e.sineInOut = function (t) {
            return  - .5 * (Math.cos(Math.PI * t) - 1)
        },
        e.getBackIn = function (t) {
            return function (e) {
                return e * e * ((t + 1) * e - t)
            }
        },
        e.getBackOut = function (t) {
            return function (e) {
                return --e * e * ((t + 1) * e + t) + 1
            }
        },
        e.getBackInOut = function (t) {
            return t *= 1.525,
            function (e) {
                return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
            }
        },
        e.circIn = function (t) {
            return  - (Math.sqrt(1 - t * t) - 1)
        },
        e.circOut = function (t) {
            return Math.sqrt(1 - --t * t)
        },
        e.circInOut = function (t) {
            return (t *= 2) < 1 ?  - .5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        },
        e.bounceIn = function (t) {
            return 1 - e.bounceOut(1 - t)
        },
        e.bounceOut = function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        },
        e.bounceInOut = function (t) {
            return .5 > t ? .5 * e.bounceIn(2 * t) : .5 * e.bounceOut(2 * t - 1) + .5
        },
        e.getElasticIn = function (t, e) {
            var n = 2 * Math.PI;
            return function (i) {
                if (0 == i || 1 == i)
                    return i;
                var r = e / n * Math.asin(1 / t);
                return  - (t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - r) * n / e))
            }
        },
        e.getElasticOut = function (t, e) {
            var n = 2 * Math.PI;
            return function (i) {
                if (0 == i || 1 == i)
                    return i;
                var r = e / n * Math.asin(1 / t);
                return t * Math.pow(2, -10 * i) * Math.sin((i - r) * n / e) + 1
            }
        },
        e.getElasticInOut = function (t, e) {
            var n = 2 * Math.PI;
            return function (i) {
                var r = e / n * Math.asin(1 / t);
                return (i *= 2) < 1 ?  - .5 * (t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - r) * n / e)) : t * Math.pow(2, -10 * (i -= 1)) * Math.sin((i - r) * n / e) * .5 + 1
            }
        },
        e.quadIn = e.getPowIn(2),
        e.quadOut = e.getPowOut(2),
        e.quadInOut = e.getPowInOut(2),
        e.cubicIn = e.getPowIn(3),
        e.cubicOut = e.getPowOut(3),
        e.cubicInOut = e.getPowInOut(3),
        e.quartIn = e.getPowIn(4),
        e.quartOut = e.getPowOut(4),
        e.quartInOut = e.getPowInOut(4),
        e.quintIn = e.getPowIn(5),
        e.quintOut = e.getPowOut(5),
        e.quintInOut = e.getPowInOut(5),
        e.backIn = e.getBackIn(1.7),
        e.backOut = e.getBackOut(1.7),
        e.backInOut = e.getBackInOut(1.7),
        e.elasticIn = e.getElasticIn(1, .3),
        e.elasticOut = e.getElasticOut(1, .3),
        e.elasticInOut = e.getElasticInOut(1, .3 * 1.5),
        e
    }
    ();
    t.Ease = e,
    __reflect(e.prototype, "egret.Ease")
}
(egret || (egret = {}));
var egret;
!function (t) {
    var e = function (e) {
        function n(t, n, i) {
            var r = e.call(this) || this;
            return r._target = null,
            r._useTicks = !1,
            r.ignoreGlobalPause = !1,
            r.loop = !1,
            r.pluginData = null,
            r._steps = null,
            r.paused = !1,
            r.duration = 0,
            r._prevPos = -1,
            r.position = null,
            r._prevPosition = 0,
            r._stepPosition = 0,
            r.passive = !1,
            r.initialize(t, n, i),
            r
        }
        return __extends(n, e),
        n.get = function (t, e, i, r) {
            return void 0 === i && (i = null),
            void 0 === r && (r = !1),
            r && n.removeTweens(t),
            new n(t, e, i)
        },
        n.removeTweens = function (t) {
            if (t.tween_count) {
                for (var e = n._tweens, i = e.length - 1; i >= 0; i--)
                    e[i]._target == t && (e[i].paused = !0, e.splice(i, 1));
                t.tween_count = 0
            }
        },
        n.pauseTweens = function (e) {
            if (e.tween_count)
                for (var n = t.Tween._tweens, i = n.length - 1; i >= 0; i--)
                    n[i]._target == e && (n[i].paused = !0)
        },
        n.resumeTweens = function (e) {
            if (e.tween_count)
                for (var n = t.Tween._tweens, i = n.length - 1; i >= 0; i--)
                    n[i]._target == e && (n[i].paused = !1)
        },
        n.tick = function (t, e) {
            void 0 === e && (e = !1);
            var i = t - n._lastTime;
            n._lastTime = t;
            for (var r = n._tweens.concat(), s = r.length - 1; s >= 0; s--) {
                var o = r[s];
                e && !o.ignoreGlobalPause || o.paused || o.$tick(o._useTicks ? 1 : i)
            }
            return !1
        },
        n._register = function (e, i) {
            var r = e._target,
            s = n._tweens;
            if (i)
                r && (r.tween_count = r.tween_count > 0 ? r.tween_count + 1 : 1), s.push(e), n._inited || (n._lastTime = t.getTimer(), t.ticker.$startTick(n.tick, null), n._inited = !0);
            else {
                r && r.tween_count--;
                for (var o = s.length; o--; )
                    if (s[o] == e)
                        return void s.splice(o, 1)
            }
        },
        n.removeAllTweens = function () {
            for (var t = n._tweens, e = 0, i = t.length; i > e; e++) {
                var r = t[e];
                r.paused = !0,
                r._target.tweenjs_count = 0
            }
            t.length = 0
        },
        n.prototype.initialize = function (t, e, i) {
            this._target = t,
            e && (this._useTicks = e.useTicks, this.ignoreGlobalPause = e.ignoreGlobalPause, this.loop = e.loop, e.onChange && this.addEventListener("change", e.onChange, e.onChangeObj), e.override && n.removeTweens(t)),
            this.pluginData = i || {},
            this._curQueueProps = {},
            this._initQueueProps = {},
            this._steps = [],
            e && e.paused ? this.paused = !0 : n._register(this, !0),
            e && null != e.position && this.setPosition(e.position, n.NONE)
        },
        n.prototype.setPosition = function (t, e) {
            void 0 === e && (e = 1),
            0 > t && (t = 0);
            var n = t,
            i = !1;
            if (n >= this.duration)
                if (this.loop) {
                    var r = n % this.duration;
                    n = n > 0 && 0 === r ? this.duration : r
                } else
                    n = this.duration, i = !0;
            if (n == this._prevPos)
                return i;
            i && this.setPaused(!0);
            var s = this._prevPos;
            if (this.position = this._prevPos = n, this._prevPosition = t, this._target && this._steps.length > 0) {
                for (var o = this._steps.length, u = -1, a = 0; o > a && !("step" == this._steps[a].type && (u = a, this._steps[a].t <= n && this._steps[a].t + this._steps[a].d >= n)); a++);
                for (var a = 0; o > a; a++)
                    if ("action" == this._steps[a].type)
                        0 != e && (this._useTicks ? this._runAction(this._steps[a], n, n) : 1 == e && s > n ? (s != this.duration && this._runAction(this._steps[a], s, this.duration), this._runAction(this._steps[a], 0, n, !0)) : this._runAction(this._steps[a], s, n));
                    else if ("step" == this._steps[a].type && u == a) {
                        var p = this._steps[u];
                        this._updateTargetProps(p, Math.min((this._stepPosition = n - p.t) / p.d, 1))
                    }
            }
            return this.dispatchEventWith("change"),
            i
        },
        n.prototype._runAction = function (t, e, n, i) {
            void 0 === i && (i = !1);
            var r = e,
            s = n;
            e > n && (r = n, s = e);
            var o = t.t;
            (o == s || o > r && s > o || i && o == e) && t.f.apply(t.o, t.p)
        },
        n.prototype._updateTargetProps = function (t, e) {
            var i,
            r,
            s,
            o,
            u,
            a;
            if (t || 1 != e) {
                if (this.passive = !!t.v, this.passive)
                    return;
                t.e && (e = t.e(e, 0, 1, 1)),
                i = t.p0,
                r = t.p1
            } else
                this.passive = !1, i = r = this._curQueueProps;
            for (var p in this._initQueueProps) {
                null == (o = i[p]) && (i[p] = o = this._initQueueProps[p]),
                null == (u = r[p]) && (r[p] = u = o),
                s = o == u || 0 == e || 1 == e || "number" != typeof o ? 1 == e ? u : o : o + (u - o) * e;
                var h = !1;
                if (a = n._plugins[p])
                    for (var c = 0, _ = a.length; _ > c; c++) {
                        var f = a[c].tween(this, p, s, i, r, e, !!t && i == r, !t);
                        f == n.IGNORE ? h = !0 : s = f
                    }
                h || (this._target[p] = s)
            }
        },
        n.prototype.setPaused = function (t) {
            return this.paused == t ? this : (this.paused = t, n._register(this, !t), this)
        },
        n.prototype._cloneProps = function (t) {
            var e = {};
            for (var n in t)
                e[n] = t[n];
            return e
        },
        n.prototype._addStep = function (t) {
            return t.d > 0 && (t.type = "step", this._steps.push(t), t.t = this.duration, this.duration += t.d),
            this
        },
        n.prototype._appendQueueProps = function (t) {
            var e,
            i,
            r,
            s,
            o;
            for (var u in t)
                if (void 0 === this._initQueueProps[u]) {
                    if (i = this._target[u], e = n._plugins[u])
                        for (r = 0, s = e.length; s > r; r++)
                            i = e[r].init(this, u, i);
                    this._initQueueProps[u] = this._curQueueProps[u] = void 0 === i ? null : i
                } else
                    i = this._curQueueProps[u];
            for (var u in t) {
                if (i = this._curQueueProps[u], e = n._plugins[u])
                    for (o = o || {}, r = 0, s = e.length; s > r; r++)
                        e[r].step && e[r].step(this, u, i, t[u], o);
                this._curQueueProps[u] = t[u]
            }
            return o && this._appendQueueProps(o),
            this._curQueueProps
        },
        n.prototype._addAction = function (t) {
            return t.t = this.duration,
            t.type = "action",
            this._steps.push(t),
            this
        },
        n.prototype._set = function (t, e) {
            for (var n in t)
                e[n] = t[n]
        },
        n.prototype.wait = function (t, e) {
            if (null == t || 0 >= t)
                return this;
            var n = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: t,
                p0: n,
                p1: n,
                v: e
            })
        },
        n.prototype.to = function (t, e, n) {
            return void 0 === n && (n = void 0),
            (isNaN(e) || 0 > e) && (e = 0),
            this._addStep({
                d: e || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: n,
                p1: this._cloneProps(this._appendQueueProps(t))
            }),
            this.set(t)
        },
        n.prototype.call = function (t, e, n) {
            return void 0 === e && (e = void 0),
            void 0 === n && (n = void 0),
            this._addAction({
                f: t,
                p: n ? n : [],
                o: e ? e : this._target
            })
        },
        n.prototype.set = function (t, e) {
            return void 0 === e && (e = null),
            this._appendQueueProps(t),
            this._addAction({
                f: this._set,
                o: this,
                p: [t, e ? e : this._target]
            })
        },
        n.prototype.play = function (t) {
            return t || (t = this),
            this.call(t.setPaused, t, [!1])
        },
        n.prototype.pause = function (t) {
            return t || (t = this),
            this.call(t.setPaused, t, [!0])
        },
        n.prototype.$tick = function (t) {
            this.paused || this.setPosition(this._prevPosition + t)
        },
        n.NONE = 0,
        n.LOOP = 1,
        n.REVERSE = 2,
        n._tweens = [],
        n.IGNORE = {},
        n._plugins = {},
        n._inited = !1,
        n._lastTime = 0,
        n
    }
    (t.EventDispatcher);
    t.Tween = e,
    __reflect(e.prototype, "egret.Tween")
}
(egret || (egret = {}));
var egret;
!function (t) {
    var e;
    !function (e) {
        function n(e) {
            if ("function" == typeof e)
                return e;
            var n = t.Ease[e];
            return "function" == typeof n ? n : null
        }
        function i(t, e, n, i) {
            var r = t.prototype;
            r.__meta__ = r.__meta__ || {},
            r.__meta__[e] = n,
            i && (r.__defaultProperty__ = e)
        }
        var r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "",
                e
            }
            return __extends(e, t),
            e
        }
        (t.EventDispatcher);
        e.BasePath = r,
        __reflect(r.prototype, "egret.tween.BasePath");
        var s = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.props = void 0,
                e.duration = 500,
                e.ease = void 0,
                e
            }
            return __extends(e, t),
            e
        }
        (r);
        e.To = s,
        __reflect(s.prototype, "egret.tween.To");
        var o = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.duration = 500,
                e.passive = void 0,
                e
            }
            return __extends(e, t),
            e
        }
        (r);
        e.Wait = o,
        __reflect(o.prototype, "egret.tween.Wait");
        var u = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.props = void 0,
                e
            }
            return __extends(e, t),
            e
        }
        (r);
        e.Set = u,
        __reflect(u.prototype, "egret.tween.Set");
        var a = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.delta = 0,
                e
            }
            return __extends(e, t),
            e
        }
        (r);
        e.Tick = a,
        __reflect(a.prototype, "egret.tween.Tick");
        var p = function (e) {
            function i() {
                var t = e.call(this) || this;
                return t.isStop = !1,
                t
            }
            return __extends(i, e),
            Object.defineProperty(i.prototype, "props", {
                get: function () {
                    return this._props
                },
                set: function (t) {
                    this._props = t
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(i.prototype, "target", {
                get: function () {
                    return this._target
                },
                set: function (t) {
                    this._target = t
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(i.prototype, "paths", {
                get: function () {
                    return this._paths
                },
                set: function (t) {
                    this._paths = t || []
                },
                enumerable: !0,
                configurable: !0
            }),
            i.prototype.play = function (t) {
                this.tween ? (this.tween.setPaused(!1), this.isStop && void 0 == t && (t = 0, this.isStop = !1), void 0 !== t && null !== t && this.tween.setPosition(t)) : this.createTween(t)
            },
            i.prototype.pause = function () {
                this.tween && this.tween.setPaused(!0)
            },
            i.prototype.stop = function () {
                this.pause(),
                this.isStop = !0
            },
            i.prototype.createTween = function (e) {
                this.tween = t.Tween.get(this._target, this._props),
                this._paths && this.applyPaths(),
                void 0 !== e && null !== e && this.tween.setPosition(e)
            },
            i.prototype.applyPaths = function () {
                for (var t = 0; t < this._paths.length; t++) {
                    var e = this._paths[t];
                    this.applyPath(e)
                }
            },
            i.prototype.applyPath = function (t) {
                var e = this;
                t instanceof s ? this.tween.to(t.props, t.duration, n(t.ease)) : t instanceof o ? this.tween.wait(t.duration, t.passive) : t instanceof u ? this.tween.set(t.props) : t instanceof a && this.tween.$tick(t.delta),
                this.tween.call(function () {
                    return e.pathComplete(t)
                })
            },
            i.prototype.pathComplete = function (t) {
                t.dispatchEventWith("complete"),
                this.dispatchEventWith("pathComplete", !1, t);
                var e = this._paths.indexOf(t);
                e >= 0 && e === this._paths.length - 1 && this.dispatchEventWith("complete")
            },
            i
        }
        (t.EventDispatcher);
        e.TweenItem = p,
        __reflect(p.prototype, "egret.tween.TweenItem"),
        i(p, "paths", "Array", !0);
        var h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.completeCount = 0,
                e
            }
            return __extends(e, t),
            Object.defineProperty(e.prototype, "items", {
                get: function () {
                    return this._items
                },
                set: function (t) {
                    this.completeCount = 0,
                    this.registerEvent(!1),
                    this._items = t,
                    this.registerEvent(!0)
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.registerEvent = function (t) {
                var e = this;
                this._items && this._items.forEach(function (n) {
                    t ? n.addEventListener("complete", e.itemComplete, e) : n.removeEventListener("complete", e.itemComplete, e)
                })
            },
            e.prototype.play = function (t) {
                if (this._items)
                    for (var e = 0; e < this._items.length; e++) {
                        var n = this._items[e];
                        n.play(t)
                    }
            },
            e.prototype.pause = function () {
                if (this._items)
                    for (var t = 0; t < this._items.length; t++) {
                        var e = this._items[t];
                        e.pause()
                    }
            },
            e.prototype.stop = function () {
                if (this._items)
                    for (var t = 0; t < this._items.length; t++) {
                        var e = this._items[t];
                        e.stop()
                    }
            },
            e.prototype.itemComplete = function (t) {
                var e = t.currentTarget;
                this.completeCount++,
                this.dispatchEventWith("itemComplete", !1, e),
                this.completeCount === this.items.length && (this.dispatchEventWith("complete"), this.completeCount = 0)
            },
            e
        }
        (t.EventDispatcher);
        e.TweenGroup = h,
        __reflect(h.prototype, "egret.tween.TweenGroup"),
        i(h, "items", "Array", !0)
    }
    (e = t.tween || (t.tween = {}))
}
(egret || (egret = {}));
window['tweenkey'] = "6b";
var __reflect = this && this.__reflect || function (t, e, o) {
    t.__class__ = e,
    o ? o.push(e) : o = [e],
    t.__types__ = t.__types__ ? o.concat(t.__types__) : o
}, __extends = this && this.__extends || function () {
    var t = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function (t, e) {
        t.__proto__ = e
    }
     || function (t, e) {
        for (var o in e)
            e.hasOwnProperty(o) && (t[o] = e[o])
    };
    return function (e, o) {
        function n() {
            this.constructor = e
        }
        t(e, o),
        e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
    }
}
(), egret;
!function (t) {}
(egret || (egret = {}));
var egret;
!function (t) {
    var e = function (e) {
        function o(n, i) {
            void 0 === n && (n = ""),
            void 0 === i && (i = 0);
            var s = e.call(this) || this;
            return s._writeMessage = "",
            s._readMessage = "",
            s._connected = !1,
            s._connecting = !1,
            s._isReadySend = !1,
            s._bytesWrite = !1,
            s._type = o.TYPE_STRING,
            s._connected = !1,
            s._writeMessage = "",
            s._readMessage = "",
            s.socket = new t.ISocket,
            s.socket.addCallBacks(s.onConnect, s.onClose, s.onSocketData, s.onError, s),
            s
        }
        return __extends(o, e),
        o.prototype.connect = function (t, e) {
            this._connecting || this._connected || (this._connecting = !0, this.socket.connect(t, e))
        },
        o.prototype.connectByUrl = function (t) {
            this._connecting || this._connected || (this._connecting = !0, this.socket.connectByUrl(t))
        },
        o.prototype.close = function () {
            this._connected && this.socket.close()
        },
        o.prototype.onConnect = function () {
            this._connected = !0,
            this._connecting = !1,
            this.dispatchEventWith(t.Event.CONNECT)
        },
        o.prototype.onClose = function () {
            this._connected = !1,
            this.dispatchEventWith(t.Event.CLOSE)
        },
        o.prototype.onError = function () {
            this._connecting && (this._connecting = !1),
            this.dispatchEventWith(t.IOErrorEvent.IO_ERROR)
        },
        o.prototype.onSocketData = function (e) {
            "string" == typeof e ? this._readMessage += e : this._readByte._writeUint8Array(new Uint8Array(e)),
            t.ProgressEvent.dispatchProgressEvent(this, t.ProgressEvent.SOCKET_DATA)
        },
        o.prototype.flush = function () {
            return this._connected ? (this._writeMessage && (this.socket.send(this._writeMessage), this._writeMessage = ""), this._bytesWrite && (this.socket.send(this._writeByte.buffer), this._bytesWrite = !1, this._writeByte.clear()), void(this._isReadySend = !1)) : void t.$warn(3101)
        },
        o.prototype.writeUTF = function (e) {
            return this._connected ? (this._type == o.TYPE_BINARY ? (this._bytesWrite = !0, this._writeByte.writeUTF(e)) : this._writeMessage += e, void this.flush()) : void t.$warn(3101)
        },
        o.prototype.readUTF = function () {
            var t;
            return this._type == o.TYPE_BINARY ? (this._readByte.position = 0, t = this._readByte.readUTF(), this._readByte.clear()) : (t = this._readMessage, this._readMessage = ""),
            t
        },
        o.prototype.writeBytes = function (e, o, n) {
            return void 0 === o && (o = 0),
            void 0 === n && (n = 0),
            this._connected ? this._writeByte ? (this._bytesWrite = !0, this._writeByte.writeBytes(e, o, n), void this.flush()) : void t.$warn(3102) : void t.$warn(3101)
        },
        o.prototype.readBytes = function (e, o, n) {
            return void 0 === o && (o = 0),
            void 0 === n && (n = 0),
            this._readByte ? (this._readByte.position = 0, this._readByte.readBytes(e, o, n), void this._readByte.clear()) : void t.$warn(3102)
        },
        Object.defineProperty(o.prototype, "connected", {
            get: function () {
                return this._connected
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "type", {
            get: function () {
                return this._type
            },
            set: function (e) {
                this._type = e,
                e != o.TYPE_BINARY || this._writeByte || (this._readByte = new t.ByteArray, this._writeByte = new t.ByteArray)
            },
            enumerable: !0,
            configurable: !0
        }),
        o.TYPE_STRING = "webSocketTypeString",
        o.TYPE_BINARY = "webSocketTypeBinary",
        o
    }
    (t.EventDispatcher);
    t.WebSocket = e,
    __reflect(e.prototype, "egret.WebSocket")
}
(egret || (egret = {}));
var egret;
!function (t) {
    var e;
    !function (e) {
        var o = function () {
            function t() {
                this.host = "",
                this.port = 0
            }
            return t.prototype.addCallBacks = function (t, e, o, n, i) {
                this.onConnect = t,
                this.onClose = e,
                this.onSocketData = o,
                this.onError = n,
                this.thisObject = i
            },
            t.prototype.connect = function (t, e) {
                this.host = t,
                this.port = e;
                var o = "ws://" + this.host + ":" + this.port;
                this.socket = new __global.egret_native.WebSocket(o),
                this._bindEvent()
            },
            t.prototype.connectByUrl = function (t) {
                this.socket = new __global.egret_native.WebSocket(t),
                this._bindEvent()
            },
            t.prototype._bindEvent = function () {
                var t = this,
                e = this.socket;
                e.onOpen = function () {
                    t.onConnect && t.onConnect.call(t.thisObject)
                },
                e.onClose = function () {
                    t.onClose && t.onClose.call(t.thisObject)
                },
                e.onError = function (e) {
                    t.onError && t.onError.call(t.thisObject)
                },
                e.onMessage = function (e) {
                    t.onSocketData && t.onSocketData.call(t.thisObject, e)
                }
            },
            t.prototype.send = function (t) {
                this.socket.send(t)
            },
            t.prototype.close = function () {
                this.socket.close()
            },
            t.prototype.disconnect = function () {
                this.socket.disconnect && this.socket.disconnect()
            },
            t
        }
        ();
        e.NativeSocket = o,
        __reflect(o.prototype, "egret.native.NativeSocket", ["egret.ISocket"]),
        t.Capabilities.runtimeType == t.RuntimeType.NATIVE && (t.ISocket = o)
    }
    (e = t["native"] || (t["native"] = {}))
}
(egret || (egret = {}));
var egret;
!function (t) {
    var e;
    !function (e) {
        var o = function () {
            function e() {
                this.host = "",
                this.port = 0,
                window.WebSocket || t.$error(3100)
            }
            return e.prototype.addCallBacks = function (t, e, o, n, i) {
                this.onConnect = t,
                this.onClose = e,
                this.onSocketData = o,
                this.onError = n,
                this.thisObject = i
            },
            e.prototype.connect = function (t, e) {
                this.host = t,
                this.port = e;
                var o = "ws://" + this.host + ":" + this.port;
                this.socket = new window.WebSocket(o),
                this.socket.binaryType = "arraybuffer",
                this._bindEvent()
            },
            e.prototype.connectByUrl = function (t) {
                this.socket = new window.WebSocket(t),
                this.socket.binaryType = "arraybuffer",
                this._bindEvent()
            },
            e.prototype._bindEvent = function () {
                var t = this,
                e = this.socket;
                e.onopen = function () {
                    t.onConnect && t.onConnect.call(t.thisObject)
                },
                e.onclose = function (e) {
                    t.onClose && t.onClose.call(t.thisObject)
                },
                e.onerror = function (e) {
                    t.onError && t.onError.call(t.thisObject)
                },
                e.onmessage = function (e) {
                    t.onSocketData && t.onSocketData.call(t.thisObject, e.data)
                }
            },
            e.prototype.send = function (t) {
                this.socket.send(t)
            },
            e.prototype.close = function () {
                this.socket.close()
            },
            e.prototype.disconnect = function () {
                this.socket.disconnect && this.socket.disconnect()
            },
            e
        }
        ();
        e.HTML5WebSocket = o,
        __reflect(o.prototype, "egret.web.HTML5WebSocket", ["egret.ISocket"]),
        t.Capabilities.runtimeType == t.RuntimeType.WEB && (t.ISocket = o)
    }
    (e = t.web || (t.web = {}))
}
(egret || (egret = {}));
var __reflect = this && this.__reflect || function (e, t, r) {
    e.__class__ = t,
    r ? r.push(t) : r = [t],
    e.__types__ = e.__types__ ? r.concat(e.__types__) : r
}, __extends = this && this.__extends || function () {
    var e = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function (e, t) {
        e.__proto__ = t
    }
     || function (e, t) {
        for (var r in t)
            t.hasOwnProperty(r) && (e[r] = t[r])
    };
    return function (t, r) {
        function i() {
            this.constructor = t
        }
        e(t, r),
        t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
    }
}
(), RES;
!function (e) {
    var t = function (t) {
        function r() {
            var r = t.call(this) || this;
            return r.resourceConfig = null,
            r.resourceConfig = e.configInstance,
            r
        }
        return __extends(r, t),
        r.prototype.addSubkey = function (e, t) {
            this.resourceConfig.addSubkey(e, t)
        },
        r.prototype.loadFile = function (e, t, r) {},
        r.prototype.getRes = function (e) {},
        r.prototype.destroyRes = function (e) {
            return !1
        },
        r.getStringPrefix = function (e) {
            if (!e)
                return "";
            var t = e.indexOf(".");
            return -1 != t ? e.substring(0, t) : ""
        },
        r.getStringTail = function (e) {
            if (!e)
                return "";
            var t = e.indexOf(".");
            return -1 != t ? e.substring(t + 1) : ""
        },
        r
    }
    (egret.HashObject);
    e.AnalyzerBase = t,
    __reflect(t.prototype, "RES.AnalyzerBase")
}
(RES || (RES = {}));
var RES;
!function (e) {
    var t = function (t) {
        function r() {
            var e = t.call(this) || this;
            return e.fileDic = {},
            e.resItemDic = [],
            e._dataFormat = egret.HttpResponseType.ARRAY_BUFFER,
            e.recycler = [],
            e
        }
        return __extends(r, t),
        r.prototype.loadFile = function (t, r, i) {
            if (this.fileDic[t.name])
                return void r.call(i, t);
            var n = this.getRequest();
            this.resItemDic[n.hashCode] = {
                item: t,
                func: r,
                thisObject: i
            },
            n.open(e.$getVirtualUrl(t.url)),
            n.send()
        },
        r.prototype.getRequest = function () {
            var e = this.recycler.pop();
            return e || (e = new egret.HttpRequest, e.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this)),
            e.responseType = this._dataFormat,
            e
        },
        r.prototype.onLoadFinish = function (e) {
            var t = e.target,
            r = this.resItemDic[t.hashCode];
            delete this.resItemDic[t.hashCode];
            var i = r.item,
            n = r.func;
            i.loaded = e.type == egret.Event.COMPLETE,
            i.loaded && this.analyzeData(i, t.response),
            this.recycler.push(t),
            n.call(r.thisObject, i)
        },
        r.prototype.analyzeData = function (e, t) {
            var r = e.name;
            this.fileDic[r] || "" != t && !t || (this.fileDic[r] = t)
        },
        r.prototype.getRes = function (e) {
            return this.fileDic[e]
        },
        r.prototype.hasRes = function (e) {
            var t = this.getRes(e);
            return null != t
        },
        r.prototype.destroyRes = function (e) {
            return this.fileDic[e] ? (this.onResourceDestroy(this.fileDic[e]), delete this.fileDic[e], !0) : !1
        },
        r.prototype.onResourceDestroy = function (e) {},
        r
    }
    (e.AnalyzerBase);
    e.BinAnalyzer = t,
    __reflect(t.prototype, "RES.BinAnalyzer")
}
(RES || (RES = {}));
var RES;
!function (e) {
    var t = function () {
        function e(e, t, r) {
            this.groupName = "",
            this.data = null,
            this._loaded = !1,
            this.name = e,
            this.url = t,
            this.type = r
        }
        return Object.defineProperty(e.prototype, "loaded", {
            get: function () {
                return this.data ? this.data.loaded : this._loaded
            },
            set: function (e) {
                this.data && (this.data.loaded = e),
                this._loaded = e
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.toString = function () {
            return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
        },
        e.TYPE_XML = "xml",
        e.TYPE_IMAGE = "image",
        e.TYPE_BIN = "bin",
        e.TYPE_TEXT = "text",
        e.TYPE_JSON = "json",
        e.TYPE_SHEET = "sheet",
        e.TYPE_FONT = "font",
        e.TYPE_SOUND = "sound",
        e
    }
    ();
    e.ResourceItem = t,
    __reflect(t.prototype, "RES.ResourceItem")
}
(RES || (RES = {}));
var RES;
!function (e) {
    var t = function (t) {
        function r() {
            var e = t.call(this) || this;
            return e.sheetMap = {},
            e.textureMap = {},
            e.recyclerIamge = [],
            e._dataFormat = egret.HttpResponseType.TEXT,
            e
        }
        return __extends(r, t),
        r.prototype.getRes = function (t) {
            var r = this.fileDic[t];
            if (r || (r = this.textureMap[t]), !r) {
                var i = e.AnalyzerBase.getStringPrefix(t);
                if (r = this.fileDic[i]) {
                    var n = e.AnalyzerBase.getStringTail(t);
                    r = r.getTexture(n)
                }
            }
            return r
        },
        r.prototype.onLoadFinish = function (e) {
            var t = e.target,
            r = this.resItemDic[t.$hashCode];
            delete this.resItemDic[t.hashCode];
            var i = r.item,
            n = r.func;
            if (i.loaded = e.type == egret.Event.COMPLETE, i.loaded)
                if (t instanceof egret.HttpRequest) {
                    i.loaded = !1;
                    var o = this.analyzeConfig(i, t.response);
                    if (o)
                        return this.loadImage(o, r), void this.recycler.push(t)
                } else {
                    var s = new egret.Texture;
                    s._setBitmapData(t.data),
                    this.analyzeBitmap(i, s)
                }
            t instanceof egret.HttpRequest ? this.recycler.push(t) : this.recyclerIamge.push(t),
            n.call(r.thisObject, i)
        },
        r.prototype.analyzeConfig = function (e, t) {
            var r,
            i = e.name,
            n = "";
            try {
                var o = t;
                r = JSON.parse(o)
            } catch (s) {
                egret.$warn(1017, e.url, t)
            }
            return r && (this.sheetMap[i] = r, n = this.getRelativePath(e.url, r.file)),
            n
        },
        r.prototype.analyzeBitmap = function (e, t) {
            var r = e.name;
            if (!this.fileDic[r] && t) {
                var i = this.sheetMap[r];
                delete this.sheetMap[r];
                var n = e.data && e.data.subkeys ? "" : r,
                o = this.parseSpriteSheet(t, i, n);
                this.fileDic[r] = o
            }
        },
        r.prototype.getRelativePath = function (e, t) {
            e = e.split("\\").join("/");
            var r = e.match(/#.*|\?.*/),
            i = "";
            r && (i = r[0]);
            var n = e.lastIndexOf("/");
            return e = -1 != n ? e.substring(0, n + 1) + t : t,
            e + i
        },
        r.prototype.parseSpriteSheet = function (e, t, r) {
            var i = t.frames;
            if (!i)
                return null;
            var n = new egret.SpriteSheet(e),
            o = this.textureMap;
            for (var s in i) {
                var a = i[s],
                u = n.createTexture(s, a.x, a.y, a.w, a.h, a.offX, a.offY, a.sourceW, a.sourceH);
                if (a.scale9grid) {
                    var c = a.scale9grid,
                    l = c.split(",");
                    u.scale9Grid = new egret.Rectangle(parseInt(l[0]), parseInt(l[1]), parseInt(l[2]), parseInt(l[3]))
                }
                null == o[s] && (o[s] = u, r && this.addSubkey(s, r))
            }
            return n
        },
        r.prototype.destroyRes = function (e) {
            var t = this.fileDic[e];
            if (t) {
                delete this.fileDic[e];
                var r = void 0;
                for (var i in t._textureMap)
                    null == r && (r = t._textureMap[i], this.onResourceDestroy(r), r = null), delete this.textureMap[i];
                return t.dispose && t.dispose(),
                !0
            }
            return !1
        },
        r.prototype.loadImage = function (t, r) {
            var i = this.getImageLoader();
            this.resItemDic[i.hashCode] = r,
            i.load(e.$getVirtualUrl(t))
        },
        r.prototype.getImageLoader = function () {
            var e = this.recyclerIamge.pop();
            return e || (e = new egret.ImageLoader, e.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this)),
            e
        },
        r.prototype.onResourceDestroy = function (e) {
            e && e.dispose()
        },
        r
    }
    (e.BinAnalyzer);
    e.SheetAnalyzer = t,
    __reflect(t.prototype, "RES.SheetAnalyzer")
}
(RES || (RES = {}));
var RES;
!function (e) {}
(RES || (RES = {}));
var RES;
!function (e) {
    var t = function (t) {
        function r() {
            var e = t.call(this) || this;
            return e.fileDic = {},
            e.resItemDic = [],
            e.recycler = [],
            e
        }
        return __extends(r, t),
        r.prototype.loadFile = function (t, r, i) {
            if (this.fileDic[t.name])
                return void r.call(i, t);
            var n = this.getLoader();
            this.resItemDic[n.$hashCode] = {
                item: t,
                func: r,
                thisObject: i
            },
            n.load(e.$getVirtualUrl(t.url))
        },
        r.prototype.getLoader = function () {
            var e = this.recycler.pop();
            return e || (e = new egret.ImageLoader, e.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this)),
            e
        },
        r.prototype.onLoadFinish = function (e) {
            var t = e.$target,
            r = this.resItemDic[t.$hashCode];
            delete this.resItemDic[t.$hashCode];
            var i = r.item,
            n = r.func;
            if (i.loaded = e.$type == egret.Event.COMPLETE, i.loaded) {
                var o = new egret.Texture;
                o._setBitmapData(t.data),
                this.analyzeData(i, o)
            }
            this.recycler.push(t),
            n.call(r.thisObject, i)
        },
        r.prototype.analyzeData = function (e, t) {
            var r = e.name;
            if (!this.fileDic[r] && t) {
                this.fileDic[r] = t;
                var i = e.data;
                if (i && i.scale9grid) {
                    var n = i.scale9grid,
                    o = n.split(",");
                    t.scale9Grid = new egret.Rectangle(parseInt(o[0]), parseInt(o[1]), parseInt(o[2]), parseInt(o[3]))
                }
            }
        },
        r.prototype.getRes = function (e) {
            return this.fileDic[e]
        },
        r.prototype.hasRes = function (e) {
            var t = this.getRes(e);
            return null != t
        },
        r.prototype.destroyRes = function (e) {
            return this.fileDic[e] ? (this.onResourceDestroy(this.fileDic[e]), delete this.fileDic[e], !0) : !1
        },
        r.prototype.onResourceDestroy = function (e) {
            e.dispose()
        },
        r
    }
    (e.AnalyzerBase);
    e.ImageAnalyzer = t,
    __reflect(t.prototype, "RES.ImageAnalyzer")
}
(RES || (RES = {}));
var RES;
!function (e) {
    var t = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t._dataFormat = egret.HttpResponseType.TEXT,
            t
        }
        return __extends(t, e),
        t
    }
    (e.BinAnalyzer);
    e.TextAnalyzer = t,
    __reflect(t.prototype, "RES.TextAnalyzer")
}
(RES || (RES = {}));
var RES;
!function (e) {
    var t = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t._dataFormat = egret.HttpResponseType.TEXT,
            t
        }
        return __extends(t, e),
        t.prototype.analyzeData = function (e, t) {
            var r = e.name;
            if (!this.fileDic[r] && t)
                try {
                    var i = t;
                    this.fileDic[r] = JSON.parse(i)
                } catch (n) {
                    egret.$warn(1017, e.url, t)
                }
        },
        t
    }
    (e.BinAnalyzer);
    e.JsonAnalyzer = t,
    __reflect(t.prototype, "RES.JsonAnalyzer")
}
(RES || (RES = {}));
var RES;
!function (e) {
    var t = function (t) {
        function r() {
            var e = t.call(this) || this;
            return e.thread = 2,
            e.loadingCount = 0,
            e.callBack = null,
            e.resInstance = null,
            e.groupTotalDic = {},
            e.numLoadedDic = {},
            e.itemListDic = {},
            e.groupErrorDic = {},
            e.retryTimesDic = {},
            e.maxRetryTimes = 3,
            e.failedList = new Array,
            e.priorityQueue = {},
            e.lazyLoadList = new Array,
            e.analyzerDic = {},
            e.queueIndex = 0,
            e
        }
        return __extends(r, t),
        r.prototype.isGroupInLoading = function (e) {
            return void 0 !== this.itemListDic[e]
        },
        r.prototype.loadGroup = function (t, r, i) {
            if (void 0 === i && (i = 0), !this.itemListDic[r] && r) {
                if (!t || 0 == t.length) {
                    egret.$warn(3201, r);
                    var n = new e.ResourceEvent(e.ResourceEvent.GROUP_LOAD_ERROR);
                    return n.groupName = r,
                    void this.dispatchEvent(n)
                }
                this.priorityQueue[i] ? this.priorityQueue[i].push(r) : this.priorityQueue[i] = [r],
                this.itemListDic[r] = t;
                for (var o = t.length, s = 0; o > s; s++) {
                    var a = t[s];
                    a.groupName = r
                }
                this.groupTotalDic[r] = t.length,
                this.numLoadedDic[r] = 0,
                this.next()
            }
        },
        r.prototype.loadItem = function (e) {
            this.lazyLoadList.push(e),
            e.groupName = "",
            this.next()
        },
        r.prototype.next = function () {
            for (; this.loadingCount < this.thread; ) {
                var e = this.getOneResourceItem();
                if (!e)
                    break;
                if (this.loadingCount++, e.loaded)
                    this.onItemComplete(e);
                else {
                    var t = this.resInstance.$getAnalyzerByType(e.type);
                    t.loadFile(e, this.onItemComplete, this)
                }
            }
        },
        r.prototype.getOneResourceItem = function () {
            if (this.failedList.length > 0)
                return this.failedList.shift();
            var e = Number.NEGATIVE_INFINITY;
            for (var t in this.priorityQueue)
                e = Math.max(e, t);
            var r = this.priorityQueue[e];
            if (!r || 0 == r.length)
                return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
            for (var i, n = r.length, o = 0; n > o && (this.queueIndex >= n && (this.queueIndex = 0), i = this.itemListDic[r[this.queueIndex]], !(i.length > 0)); o++)
                this.queueIndex++;
            return 0 == i.length ? null : i.shift()
        },
        r.prototype.onItemComplete = function (t) {
            this.loadingCount--;
            var r = t.groupName;
            if (!t.loaded) {
                var i = this.retryTimesDic[t.name] || 1;
                if (!(i > this.maxRetryTimes))
                    return this.retryTimesDic[t.name] = i + 1, this.failedList.push(t), void this.next();
                delete this.retryTimesDic[t.name],
                e.ResourceEvent.dispatchResourceEvent(this.resInstance, e.ResourceEvent.ITEM_LOAD_ERROR, r, t)
            }
            if (r) {
                this.numLoadedDic[r]++;
                var n = this.numLoadedDic[r],
                o = this.groupTotalDic[r];
                if (t.loaded || (this.groupErrorDic[r] = !0), e.ResourceEvent.dispatchResourceEvent(this.resInstance, e.ResourceEvent.GROUP_PROGRESS, r, t, n, o), n == o) {
                    var s = this.groupErrorDic[r];
                    this.removeGroupName(r),
                    delete this.groupTotalDic[r],
                    delete this.numLoadedDic[r],
                    delete this.itemListDic[r],
                    delete this.groupErrorDic[r],
                    s ? e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.GROUP_LOAD_ERROR, r) : e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.GROUP_COMPLETE, r)
                }
            } else
                this.callBack.call(this.resInstance, t);
            this.next()
        },
        r.prototype.removeGroupName = function (e) {
            for (var t in this.priorityQueue) {
                for (var r = this.priorityQueue[t], i = 0, n = !1, o = r.length, s = 0; o > s; s++) {
                    var a = r[s];
                    if (a == e) {
                        r.splice(i, 1),
                        n = !0;
                        break
                    }
                    i++
                }
                if (n) {
                    0 == r.length && delete this.priorityQueue[t];
                    break
                }
            }
        },
        r
    }
    (egret.EventDispatcher);
    e.ResourceLoader = t,
    __reflect(t.prototype, "RES.ResourceLoader")
}
(RES || (RES = {}));
var RES;
!function (e) {
    var t = function (e) {
        function t() {
            return e.call(this) || this
        }
        return __extends(t, e),
        t.prototype.analyzeConfig = function (e, t) {
            var r,
            i = e.name,
            n = "";
            try {
                var o = t;
                r = JSON.parse(o)
            } catch (s) {}
            return r ? n = this.getRelativePath(e.url, r.file) : (r = t, n = this.getTexturePath(e.url, r)),
            this.sheetMap[i] = r,
            n
        },
        t.prototype.analyzeBitmap = function (e, t) {
            var r = e.name;
            if (!this.fileDic[r] && t) {
                var i = this.sheetMap[r];
                delete this.sheetMap[r];
                var n = new egret.BitmapFont(t, i);
                this.fileDic[r] = n
            }
        },
        t.prototype.getTexturePath = function (e, t) {
            var r = "",
            i = t.split("\n"),
            n = i[2],
            o = n.indexOf('file="');
            return -1 != o && (n = n.substring(o + 6), o = n.indexOf('"'), r = n.substring(0, o)),
            e = e.split("\\").join("/"),
            o = e.lastIndexOf("/"),
            e = -1 != o ? e.substring(0, o + 1) + r : r
        },
        t.prototype.onResourceDestroy = function (e) {
            e && e.dispose()
        },
        t
    }
    (e.SheetAnalyzer);
    e.FontAnalyzer = t,
    __reflect(t.prototype, "RES.FontAnalyzer")
}
(RES || (RES = {}));
var RES;
!function (e) {
    var t = function () {
        function t() {
            this.keyMap = {},
            this.groupDic = {},
            e.configInstance = this
        }
        return t.prototype.getGroupByName = function (e) {
            var t = new Array;
            if (!this.groupDic[e])
                return t;
            for (var r = this.groupDic[e], i = r.length, n = 0; i > n; n++) {
                var o = r[n];
                t.push(this.parseResourceItem(o))
            }
            return t
        },
        t.prototype.getRawGroupByName = function (e) {
            return this.groupDic[e] ? this.groupDic[e] : []
        },
        t.prototype.createGroup = function (e, t, r) {
            if (void 0 === r && (r = !1), !r && this.groupDic[e] || !t || 0 == t.length)
                return !1;
            for (var i = this.groupDic, n = [], o = t.length, s = 0; o > s; s++) {
                var a = t[s],
                u = i[a];
                if (u)
                    for (var c = u.length, l = 0; c > l; l++) {
                        var p = u[l];
                        -1 == n.indexOf(p) && n.push(p)
                    }
                else {
                    var p = this.keyMap[a];
                    p ? -1 == n.indexOf(p) && n.push(p) : egret.$warn(3200, a)
                }
            }
            return 0 == n.length ? !1 : (this.groupDic[e] = n, !0)
        },
        t.prototype.parseConfig = function (e, t) {
            if (e) {
                var r = e.resources;
                if (r)
                    for (var i = r.length, n = 0; i > n; n++) {
                        var o = r[n],
                        s = o.url;
                        s && -1 == s.indexOf("://") && (o.url = t + s),
                        this.addItemToKeyMap(o)
                    }
                var a = e.groups;
                if (a)
                    for (var u = a.length, n = 0; u > n; n++) {
                        for (var c = a[n], l = [], p = c.keys.split(","), h = p.length, f = 0; h > f; f++) {
                            var d = p[f].trim(),
                            o = this.keyMap[d];
                            o && -1 == l.indexOf(o) && l.push(o)
                        }
                        this.groupDic[c.name] = l
                    }
            }
        },
        t.prototype.addSubkey = function (e, t) {
            var r = this.keyMap[t];
            r && !this.keyMap[e] && (this.keyMap[e] = r)
        },
        t.prototype.addItemToKeyMap = function (e) {
            if (this.keyMap[e.name] || (this.keyMap[e.name] = e), e.hasOwnProperty("subkeys")) {
                var t = e.subkeys.split(",");
                e.subkeys = t;
                for (var r = t.length, i = 0; r > i; i++) {
                    var n = t[i];
                    null == this.keyMap[n] && (this.keyMap[n] = e)
                }
            }
        },
        t.prototype.getName = function (e) {
            var t = this.keyMap[e];
            return t ? t.name : ""
        },
        t.prototype.getType = function (e) {
            var t = this.keyMap[e];
            return t ? t.type : ""
        },
        t.prototype.getRawResourceItem = function (e) {
            return this.keyMap[e]
        },
        t.prototype.getResourceItem = function (e) {
            var t = this.keyMap[e];
            return t ? this.parseResourceItem(t) : null
        },
        t.prototype.parseResourceItem = function (t) {
            var r = new e.ResourceItem(t.name, t.url, t.type);
            return r.data = t,
            r
        },
        t
    }
    ();
    e.ResourceConfig = t,
    __reflect(t.prototype, "RES.ResourceConfig")
}
(RES || (RES = {}));
var RES;
!function (e) {
    var t = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t._dataFormat = egret.HttpResponseType.TEXT,
            t
        }
        return __extends(t, e),
        t.prototype.analyzeData = function (e, t) {
            var r = e.name;
            if (!this.fileDic[r] && t)
                try {
                    var i = t,
                    n = egret.XML.parse(i);
                    this.fileDic[r] = n
                } catch (o) {}
        },
        t
    }
    (e.BinAnalyzer);
    e.XMLAnalyzer = t,
    __reflect(t.prototype, "RES.XMLAnalyzer")
}
(RES || (RES = {}));
var RES;
!function (e) {
    var t = function (e) {
        function t(t, r, i) {
            void 0 === r && (r = !1),
            void 0 === i && (i = !1);
            var n = e.call(this, t, r, i) || this;
            return n.itemsLoaded = 0,
            n.itemsTotal = 0,
            n.groupName = "",
            n.resItem = null,
            n
        }
        return __extends(t, e),
        t.dispatchResourceEvent = function (e, r, i, n, o, s) {
            void 0 === i && (i = ""),
            void 0 === n && (n = null),
            void 0 === o && (o = 0),
            void 0 === s && (s = 0);
            var a = egret.Event.create(t, r);
            a.groupName = i,
            a.resItem = n,
            a.itemsLoaded = o,
            a.itemsTotal = s;
            var u = e.dispatchEvent(a);
            return egret.Event.release(a),
            u
        },
        t.ITEM_LOAD_ERROR = "itemLoadError",
        t.CONFIG_COMPLETE = "configComplete",
        t.CONFIG_LOAD_ERROR = "configLoadError",
        t.GROUP_PROGRESS = "groupProgress",
        t.GROUP_COMPLETE = "groupComplete",
        t.GROUP_LOAD_ERROR = "groupLoadError",
        t
    }
    (egret.Event);
    e.ResourceEvent = t,
    __reflect(t.prototype, "RES.ResourceEvent")
}
(RES || (RES = {}));
var RES;
!function (e) {
    var t;
    !function (t) {
        var r = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t._versionInfo = {},
                t
            }
            return __extends(t, e),
            t.prototype.fetchVersion = function (e) {
                e.onSuccess(null)
            },
            t.prototype.getChangeList = function () {
                return []
            },
            t.prototype.getVirtualUrl = function (e) {
                return e
            },
            t
        }
        (egret.EventDispatcher);
        t.Html5VersionController = r,
        __reflect(r.prototype, "RES.web.Html5VersionController", ["RES.VersionController", "RES.IVersionController"]),
        egret.Capabilities.runtimeType == egret.RuntimeType.WEB && (e.VersionController = r)
    }
    (t = e.web || (e.web = {}))
}
(RES || (RES = {}));
var RES;
!function (e) {
    var t;
    !function (t) {
        var r = function () {
            function e() {
                this._versionInfo = {},
                this._versionPath = "",
                this._localFileArr = []
            }
            return e.prototype.fetchVersion = function (e) {
                var t = this;
                if (t._versionPath = "all.manifest", t._versionInfo = t.getLocalData(t._versionPath), null == t._versionInfo)
                    return void egret.callLater(function () {
                        e.onFail(1, null)
                    }, t);
                var r = 0,
                i = function (i) {
                    if (i)
                        for (var n = 0; n < i.length; n++)
                            i[n] && "" != i[n] && t._localFileArr.push("resource/" + i[n]);
                    r++,
                    2 == r && e.onSuccess(null)
                };
                t.getList(i, "assets", "resource"),
                t.getList(i, "update", "resource")
            },
            e.prototype.getList = function (e, t, r) {
                void 0 === r && (r = "");
                var i = egret.PromiseObject.create();
                i.onSuccessFunc = function (t) {
                    e(t)
                },
                i.onErrorFunc = function () {
                    console.error("list files error")
                },
                "assets" == t ? egret_native.Game.listResource(r, i) : egret_native.Game.listUpdate(r, i)
            },
            e.prototype.getChangeList = function () {
                var e = [],
                t = this._localFileArr;
                for (var r in this._versionInfo)
                    t.indexOf(this.getVirtualUrl(r)) < 0 && e.push({
                        url: this.getVirtualUrl(r),
                        size: this._versionInfo[r].s
                    });
                return e
            },
            e.prototype.getVirtualUrl = function (e) {
                return this._versionInfo && this._versionInfo[e] ? "resource/" + this._versionInfo[e].v.substring(0, 2) + "/" + this._versionInfo[e].v + "_" + this._versionInfo[e].s + "." + e.substring(e.lastIndexOf(".") + 1) : e
            },
            e.prototype.getLocalData = function (e) {
                if (egret_native.readUpdateFileSync && egret_native.readResourceFileSync) {
                    var t = egret_native.readUpdateFileSync(e);
                    if (null != t)
                        return JSON.parse(t);
                    if (t = egret_native.readResourceFileSync(e), null != t)
                        return JSON.parse(t)
                }
                return null
            },
            e
        }
        ();
        t.NativeVersionController = r,
        __reflect(r.prototype, "RES.native.NativeVersionController", ["RES.VersionController", "RES.IVersionController"]),
        egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE && (e.VersionController = r)
    }
    (t = e["native"] || (e["native"] = {}))
}
(RES || (RES = {}));
var RES;
!function (e) {
    var t = function (t) {
        function r() {
            var e = t.call(this) || this;
            return e.soundDic = {},
            e.resItemDic = [],
            e
        }
        return __extends(r, t),
        r.prototype.loadFile = function (t, r, i) {
            if (this.soundDic[t.name])
                return void r.call(i, t);
            var n = new egret.Sound;
            n.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this),
            n.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this),
            this.resItemDic[n.$hashCode] = {
                item: t,
                func: r,
                thisObject: i
            },
            n.load(e.$getVirtualUrl(t.url)),
            t.data && (n.type = t.data.soundType)
        },
        r.prototype.onLoadFinish = function (e) {
            var t = e.$target;
            t.removeEventListener(egret.Event.COMPLETE, this.onLoadFinish, this),
            t.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this);
            var r = this.resItemDic[t.$hashCode];
            delete this.resItemDic[t.$hashCode];
            var i = r.item,
            n = r.func;
            i.loaded = e.$type == egret.Event.COMPLETE,
            i.loaded && this.analyzeData(i, t),
            n.call(r.thisObject, i)
        },
        r.prototype.analyzeData = function (e, t) {
            var r = e.name;
            !this.soundDic[r] && t && (this.soundDic[r] = t)
        },
        r.prototype.getRes = function (e) {
            return this.soundDic[e]
        },
        r.prototype.hasRes = function (e) {
            return !!this.getRes(e)
        },
        r.prototype.destroyRes = function (e) {
            return this.soundDic[e] ? (delete this.soundDic[e], !0) : !1
        },
        r
    }
    (e.AnalyzerBase);
    e.SoundAnalyzer = t,
    __reflect(t.prototype, "RES.SoundAnalyzer")
}
(RES || (RES = {}));
var RES;
!function (e) {
    function t(e, t) {
        I.registerAnalyzer(e, t)
    }
    function r(e) {
        return I.$getAnalyzerByType(e)
    }
    function i(e) {
        I.$registerVersionController(e)
    }
    function n() {
        return I.vcs
    }
    function o(e, t, r) {
        void 0 === t && (t = ""),
        void 0 === r && (r = "json"),
        I.loadConfig(e, t, r)
    }
    function s(e, t) {
        void 0 === t && (t = 0),
        I.loadGroup(e, t)
    }
    function a(e) {
        return I.isGroupLoaded(e)
    }
    function u(e) {
        return I.getGroupByName(e)
    }
    function c(e, t, r) {
        return void 0 === r && (r = !1),
        I.createGroup(e, t, r)
    }
    function l(e) {
        return I.hasRes(e)
    }
    function p(e, t) {
        void 0 === t && (t = ""),
        I.parseConfig(e, t)
    }
    function h(e) {
        return I.getRes(e)
    }
    function f(e, t, r) {
        I.getResAsync(e, t, r)
    }
    function d(e, t, r, i) {
        void 0 === i && (i = ""),
        I.getResByUrl(e, t, r, i)
    }
    function y(e, t) {
        return I.destroyRes(e, t)
    }
    function g(e) {
        I.setMaxLoadingThread(e)
    }
    function v(e) {
        I.setMaxRetryTimes(e)
    }
    function R(e, t, r, i, n) {
        void 0 === i && (i = !1),
        void 0 === n && (n = 0),
        I.addEventListener(e, t, r, i, n)
    }
    function E(e, t, r, i) {
        void 0 === i && (i = !1),
        I.removeEventListener(e, t, r, i)
    }
    function m(e) {
        return I.vcs ? I.vcs.getVirtualUrl(e) : e
    }
    e.registerAnalyzer = t,
    e.getAnalyzer = r,
    e.registerVersionController = i,
    e.getVersionController = n,
    e.loadConfig = o,
    e.loadGroup = s,
    e.isGroupLoaded = a,
    e.getGroupByName = u,
    e.createGroup = c,
    e.hasRes = l,
    e.parseConfig = p,
    e.getRes = h,
    e.getResAsync = f,
    e.getResByUrl = d,
    e.destroyRes = y,
    e.setMaxLoadingThread = g,
    e.setMaxRetryTimes = v,
    e.addEventListener = R,
    e.removeEventListener = E,
    e.$getVirtualUrl = m;
    var _ = function (t) {
        function r() {
            var e = t.call(this) || this;
            return e.analyzerDic = {},
            e.analyzerClassMap = {},
            e.configItemList = [],
            e.callLaterFlag = !1,
            e.configComplete = !1,
            e.loadedGroups = [],
            e.groupNameList = [],
            e.asyncDic = {},
            e._loadedUrlTypes = {},
            e.init(),
            e
        }
        return __extends(r, t),
        r.prototype.$getAnalyzerByType = function (e) {
            var t = this.analyzerDic[e];
            if (!t) {
                var r = this.analyzerClassMap[e];
                if (!r)
                    return null;
                t = this.analyzerDic[e] = new r
            }
            return t
        },
        r.prototype.registerAnalyzer = function (e, t) {
            this.analyzerClassMap[e] = t
        },
        r.prototype.$registerVersionController = function (e) {
            this.vcs = e
        },
        r.prototype.init = function () {
            this.vcs = new e.VersionController;
            var t = this.analyzerClassMap;
            t[e.ResourceItem.TYPE_BIN] = e.BinAnalyzer,
            t[e.ResourceItem.TYPE_IMAGE] = e.ImageAnalyzer,
            t[e.ResourceItem.TYPE_TEXT] = e.TextAnalyzer,
            t[e.ResourceItem.TYPE_JSON] = e.JsonAnalyzer,
            t[e.ResourceItem.TYPE_SHEET] = e.SheetAnalyzer,
            t[e.ResourceItem.TYPE_FONT] = e.FontAnalyzer,
            t[e.ResourceItem.TYPE_SOUND] = e.SoundAnalyzer,
            t[e.ResourceItem.TYPE_XML] = e.XMLAnalyzer,
            this.resConfig = new e.ResourceConfig,
            this.resLoader = new e.ResourceLoader,
            this.resLoader.callBack = this.onResourceItemComp,
            this.resLoader.resInstance = this,
            this.resLoader.addEventListener(e.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this),
            this.resLoader.addEventListener(e.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupError, this)
        },
        r.prototype.loadConfig = function (e, t, r) {
            void 0 === r && (r = "json");
            var i = {
                url: e,
                resourceRoot: t,
                type: r
            };
            this.configItemList.push(i),
            this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
        },
        r.prototype.startLoadConfig = function () {
            var t = this;
            this.callLaterFlag = !1;
            var i = this.configItemList;
            this.configItemList = [],
            this.loadingConfigList = i;
            for (var n = i.length, o = [], s = 0; n > s; s++) {
                var a = i[s],
                u = new e.ResourceItem(a.url, a.url, a.type);
                o.push(u)
            }
            var c = {
                onSuccess: function (e) {
                    t.resLoader.loadGroup(o, r.GROUP_CONFIG, Number.MAX_VALUE)
                },
                onFail: function (r, i) {
                    e.ResourceEvent.dispatchResourceEvent(t, e.ResourceEvent.CONFIG_LOAD_ERROR)
                }
            };
            this.vcs ? this.vcs.fetchVersion(c) : this.resLoader.loadGroup(o, r.GROUP_CONFIG, Number.MAX_VALUE)
        },
        r.prototype.isGroupLoaded = function (e) {
            return -1 != this.loadedGroups.indexOf(e)
        },
        r.prototype.getGroupByName = function (e) {
            return this.resConfig.getGroupByName(e)
        },
        r.prototype.loadGroup = function (t, r) {
            if (void 0 === r && (r = 0), -1 != this.loadedGroups.indexOf(t))
                return void e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.GROUP_COMPLETE, t);
            if (!this.resLoader.isGroupInLoading(t))
                if (this.configComplete) {
                    var i = this.resConfig.getGroupByName(t);
                    this.resLoader.loadGroup(i, t, r)
                } else
                    this.groupNameList.push({
                        name: t,
                        priority: r
                    })
        },
        r.prototype.createGroup = function (e, t, r) {
            if (void 0 === r && (r = !1), r) {
                var i = this.loadedGroups.indexOf(e);
                -1 != i && this.loadedGroups.splice(i, 1)
            }
            return this.resConfig.createGroup(e, t, r)
        },
        r.prototype.onGroupComp = function (t) {
            if (t.groupName == r.GROUP_CONFIG) {
                for (var i = this.loadingConfigList.length, n = 0; i > n; n++) {
                    var o = this.loadingConfigList[n],
                    s = this.$getAnalyzerByType(o.type),
                    a = s.getRes(o.url);
                    s.destroyRes(o.url),
                    this.resConfig.parseConfig(a, o.resourceRoot)
                }
                this.configComplete = !0,
                this.loadingConfigList = null,
                e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.CONFIG_COMPLETE),
                this.loadDelayGroups()
            } else
                this.loadedGroups.push(t.groupName), this.dispatchEvent(t)
        },
        r.prototype.loadDelayGroups = function () {
            var e = this.groupNameList;
            this.groupNameList = [];
            for (var t = e.length, r = 0; t > r; r++) {
                var i = e[r];
                this.loadGroup(i.name, i.priority)
            }
        },
        r.prototype.onGroupError = function (t) {
            t.groupName == r.GROUP_CONFIG ? (this.loadingConfigList = null, e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.CONFIG_LOAD_ERROR)) : this.dispatchEvent(t)
        },
        r.prototype.hasRes = function (t) {
            var r = this.resConfig.getType(t);
            if ("" == r) {
                var i = e.AnalyzerBase.getStringTail(t);
                if (r = this.resConfig.getType(i), "" == r)
                    return !1
            }
            return !0
        },
        r.prototype.parseConfig = function (e, t) {
            this.resConfig.parseConfig(e, t),
            this.configComplete || this.loadingConfigList || (this.configComplete = !0, this.loadDelayGroups())
        },
        r.prototype.getRes = function (t) {
            var r = this.resConfig.getType(t);
            if ("" == r) {
                var i = e.AnalyzerBase.getStringPrefix(t);
                if (r = this.resConfig.getType(i), "" == r)
                    return null
            }
            var n = this.$getAnalyzerByType(r);
            return n.getRes(t)
        },
        r.prototype.getResAsync = function (t, r, i) {
            var n = this.resConfig.getType(t),
            o = this.resConfig.getName(t);
            if ("" == n && (o = e.AnalyzerBase.getStringPrefix(t), n = this.resConfig.getType(o), "" == n))
                return void egret.$callAsync(r, i);
            var s = this.$getAnalyzerByType(n),
            a = s.getRes(t);
            if (a)
                return void egret.$callAsync(r, i, a, t);
            var u = {
                key: t,
                compFunc: r,
                thisObject: i
            };
            if (this.asyncDic[o])
                this.asyncDic[o].push(u);
            else {
                this.asyncDic[o] = [u];
                var c = this.resConfig.getResourceItem(o);
                this.resLoader.loadItem(c)
            }
        },
        r.prototype.getResByUrl = function (t, r, i, n) {
            if (void 0 === n && (n = ""), !t)
                return void egret.$callAsync(r, i);
            n || (n = this.getTypeByUrl(t)),
            null != this._loadedUrlTypes[t] && this._loadedUrlTypes[t] != n && egret.$warn(3202),
            this._loadedUrlTypes[t] = n;
            var o = this.$getAnalyzerByType(n),
            s = t,
            a = o.getRes(s);
            if (a)
                return void egret.$callAsync(r, i, a, t);
            var u = {
                key: s,
                compFunc: r,
                thisObject: i
            };
            if (this.asyncDic[s])
                this.asyncDic[s].push(u);
            else {
                this.asyncDic[s] = [u];
                var c = new e.ResourceItem(s, t, n);
                this.resLoader.loadItem(c)
            }
        },
        r.prototype.getTypeByUrl = function (t) {
            var r = t.substr(t.lastIndexOf(".") + 1);
            r && (r = r.toLowerCase());
            var i;
            switch (r) {
            case e.ResourceItem.TYPE_XML:
            case e.ResourceItem.TYPE_JSON:
            case e.ResourceItem.TYPE_SHEET:
                i = r;
                break;
            case "png":
            case "jpg":
            case "gif":
            case "jpeg":
            case "bmp":
                i = e.ResourceItem.TYPE_IMAGE;
                break;
            case "fnt":
                i = e.ResourceItem.TYPE_FONT;
                break;
            case "txt":
                i = e.ResourceItem.TYPE_TEXT;
                break;
            case "mp3":
            case "ogg":
            case "mpeg":
            case "wav":
            case "m4a":
            case "mp4":
            case "aiff":
            case "wma":
            case "mid":
                i = e.ResourceItem.TYPE_SOUND;
                break;
            default:
                i = e.ResourceItem.TYPE_BIN
            }
            return i
        },
        r.prototype.onResourceItemComp = function (e) {
            var t = this.asyncDic[e.name];
            delete this.asyncDic[e.name];
            for (var r = this.$getAnalyzerByType(e.type), i = t.length, n = 0; i > n; n++) {
                var o = t[n],
                s = r.getRes(o.key);
                o.compFunc.call(o.thisObject, s, o.key)
            }
        },
        r.prototype.destroyRes = function (e, t) {
            void 0 === t && (t = !0);
            var r = this.resConfig.getRawGroupByName(e);
            if (r && r.length > 0) {
                var i = this.loadedGroups.indexOf(e);
                -1 != i && this.loadedGroups.splice(i, 1);
                for (var n = r.length, o = 0; n > o; o++) {
                    var s = r[o];
                    if (!t && this.isResInLoadedGroup(s.name));
                    else {
                        s.loaded = !1;
                        var a = this.$getAnalyzerByType(s.type);
                        a.destroyRes(s.name),
                        this.removeLoadedGroupsByItemName(s.name)
                    }
                }
                return !0
            }
            var u = this.resConfig.getType(e);
            if ("" == u) {
                if (u = this._loadedUrlTypes[e], null == u || "" == u)
                    return !1;
                delete this._loadedUrlTypes[e];
                var c = this.$getAnalyzerByType(u);
                return c.destroyRes(e),
                !0
            }
            var s = this.resConfig.getRawResourceItem(e);
            s.loaded = !1;
            var a = this.$getAnalyzerByType(u),
            l = a.destroyRes(e);
            return this.removeLoadedGroupsByItemName(s.name),
            l
        },
        r.prototype.removeLoadedGroupsByItemName = function (e) {
            for (var t = this.loadedGroups, r = t.length, i = 0; r > i; i++)
                for (var n = this.resConfig.getRawGroupByName(t[i]), o = n.length, s = 0; o > s; s++) {
                    var a = n[s];
                    if (a.name == e) {
                        t.splice(i, 1),
                        i--,
                        r = t.length;
                        break
                    }
                }
        },
        r.prototype.isResInLoadedGroup = function (e) {
            for (var t = this.loadedGroups, r = t.length, i = 0; r > i; i++)
                for (var n = this.resConfig.getRawGroupByName(t[i]), o = n.length, s = 0; o > s; s++) {
                    var a = n[s];
                    if (a.name == e)
                        return !0
                }
            return !1
        },
        r.prototype.setMaxLoadingThread = function (e) {
            1 > e && (e = 1),
            this.resLoader.thread = e
        },
        r.prototype.setMaxRetryTimes = function (e) {
            e = Math.max(e, 0),
            this.resLoader.maxRetryTimes = e
        },
        r.GROUP_CONFIG = "RES__CONFIG",
        r
    }
    (egret.EventDispatcher);
    __reflect(_.prototype, "Resource");
    var I = new _
}
(RES || (RES = {}));
var RES;
!function (e) {
    var t = function (t) {
        function r() {
            var e = t.call(this) || this;
            return e.sheetMap = {},
            e.recyclerIamge = [],
            e._dataFormat = egret.HttpResponseType.TEXT,
            e
        }
        return __extends(r, t),
        r.prototype.onLoadFinish = function (e) {
            var t = e.target,
            r = this.resItemDic[t.$hashCode];
            delete this.resItemDic[t.hashCode];
            var i = r.item,
            n = r.func;
            if (i.loaded = e.type == egret.Event.COMPLETE, i.loaded)
                if (t instanceof egret.HttpRequest) {
                    i.loaded = !1;
                    var o = this.analyzeConfig(i, t.response);
                    if (o)
                        return this.loadImage(o, r), void this.recycler.push(t)
                } else
                    this.analyzeBitmap(i, t.data);
            t instanceof egret.HttpRequest ? this.recycler.push(t) : this.recyclerIamge.push(t),
            n.call(r.thisObject, i)
        },
        r.prototype.analyzeConfig = function (e, t) {
            var r,
            i = e.name,
            n = "";
            try {
                var o = t;
                r = JSON.parse(o)
            } catch (s) {
                egret.$warn(1017, e.url, t)
            }
            if (r)
                if (this.sheetMap[i] = r, r.file)
                    n = this.getRelativePath(e.url, r.file);
                else {
                    var a = e.url.split("?"),
                    u = a[0].split("/");
                    u[u.length - 1] = u[u.length - 1].split(".")[0] + ".png",
                    n = "";
                    for (var c = 0; c < u.length; c++)
                        n += u[c] + (c < u.length - 1 ? "/" : "");
                    2 == a.length && (n += a[2])
                }
            return n
        },
        r.prototype.analyzeBitmap = function (e, t) {
            var r = e.name;
            if (!this.fileDic[r] && t) {
                var i = this.sheetMap[r];
                delete this.sheetMap[r];
                var n = e.data && e.data.subkeys ? "" : r,
                o = this.parseAnimation(t, i, n);
                this.fileDic[r] = o
            }
        },
        r.prototype.getRelativePath = function (e, t) {
            e = e.split("\\").join("/");
            var r = e.lastIndexOf("/");
            return e = -1 != r ? e.substring(0, r + 1) + t : t
        },
        r.prototype.parseAnimation = function (e, t, r) {
            for (var i, n = Object.keys(t.mc), o = t.mc[n[0]].frames, s = o.length, a = [], u = 0; s > u; u++) {
                i = t.res[o[u].res];
                var c = new egret.Texture;
                c._bitmapData = e,
                c.$initData(i.x, i.y, i.w, i.h, o[u].x, o[u].y, o[u].sourceW, o[u].sourceH, e.width, e.height)
            }
            return a
        },
        r.prototype.destroyRes = function (e) {
            var t = this.fileDic[e];
            return t ? (delete this.fileDic[e], !0) : !1
        },
        r.prototype.loadImage = function (t, r) {
            var i = this.getImageLoader();
            this.resItemDic[i.hashCode] = r,
            i.load(e.$getVirtualUrl(t))
        },
        r.prototype.getImageLoader = function () {
            var e = this.recyclerIamge.pop();
            return e || (e = new egret.ImageLoader, e.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this)),
            e
        },
        r
    }
    (e.BinAnalyzer);
    e.AnimationAnalyzer = t,
    __reflect(t.prototype, "RES.AnimationAnalyzer")
}
(RES || (RES = {}));
var egret;
!function (e) {
    e.$locale_strings = e.$locale_strings || {},
    e.$locale_strings.en_US = e.$locale_strings.en_US || {};
    var t = e.$locale_strings.en_US;
    t[3200] = "RES.createGroup() passed in non-existed key value in configuration: {0}",
    t[3201] = 'RES loaded non-existed or empty resource group:"{0}"',
    t[3202] = "Do not use the different types of ways to load the same material!",
    t[3203] = "Can't find the analyzer of the specified file type:{0}。 Please register the specified analyzer in the initialization of the project first,then start the resource loading process。"
}
(egret || (egret = {}));
var egret;
!function (e) {
    e.$locale_strings = e.$locale_strings || {},
    e.$locale_strings.zh_CN = e.$locale_strings.zh_CN || {};
    var t = e.$locale_strings.zh_CN;
    t[3200] = "RES.createGroup()传入了配置中不存在的键值: {0}",
    t[3201] = 'RES加载了不存在或空的资源组:"{0}"',
    t[3202] = "请不要使用不同的类型方式来加载同一个素材！",
    t[3203] = "找不到指定文件类型的解析器:{0}。 请先在项目初始化里注册指定文件类型的解析器，再启动资源加载。"
}
(egret || (egret = {}));
