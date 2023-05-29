"use strict";
(self.webpackChunkmain = self.webpackChunkmain || []).push([
    [1206], {
        1206: (Kt, yt, _) => {
            _.d(yt, {
                Zt: () => bt,
                Bh: () => mt,
                Hk: () => vt,
                Wj: () => ft,
                Fd: () => pt,
                _t: () => Ut,
                bA: () => lt,
                EA: () => Ht
            });
            var l = _(4650),
                L = _(6895),
                O = _(7376),
                D = _(3353),
                g = _(1281),
                $ = _(2687),
                p = _(7579),
                w = _(727),
                Rt = _(4986),
                xt = _(5963),
                Ct = _(6406),
                K = _(9751),
                M = _(6451),
                E = _(2722),
                A = _(8675),
                It = _(4004),
                W = _(5698),
                Tt = _(8505),
                kt = _(3900),
                j = _(445);

            function H(n, e, t) {
                for (let i in e)
                    if (e.hasOwnProperty(i)) {
                        const s = e[i];
                        s ? n.setProperty(i, s, t ? .has(i) ? "important" : "") : n.removeProperty(i)
                    }
                return n
            }

            function b(n, e) {
                const t = e ? "" : "none";
                H(n.style, {
                    "touch-action": e ? "" : "none",
                    "-webkit-user-drag": e ? "" : "none",
                    "-webkit-tap-highlight-color": e ? "" : "transparent",
                    "user-select": t,
                    "-ms-user-select": t,
                    "-webkit-user-select": t,
                    "-moz-user-select": t
                })
            }

            function Q(n, e, t) {
                H(n.style, {
                    position: e ? "" : "fixed",
                    top: e ? "" : "0",
                    opacity: e ? "" : "0",
                    left: e ? "" : "-999em"
                }, t)
            }

            function C(n, e) {
                return e && "none" != e ? n + " " + e : n
            }

            function J(n) {
                const e = n.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
                return parseFloat(n) * e
            }

            function z(n, e) {
                return n.getPropertyValue(e).split(",").map(i => i.trim())
            }

            function F(n) {
                const e = n.getBoundingClientRect();
                return {
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom,
                    left: e.left,
                    width: e.width,
                    height: e.height,
                    x: e.x,
                    y: e.y
                }
            }

            function G(n, e, t) {
                const {
                    top: i,
                    bottom: s,
                    left: r,
                    right: o
                } = n;
                return t >= i && t <= s && e >= r && e <= o
            }

            function y(n, e, t) {
                n.top += e, n.bottom = n.top + n.height, n.left += t, n.right = n.left + n.width
            }

            function X(n, e, t, i) {
                const {
                    top: s,
                    right: r,
                    bottom: o,
                    left: a,
                    width: h,
                    height: c
                } = n, d = h * e, u = c * e;
                return i > s - u && i < o + u && t > a - d && t < r + d
            }
            class q {
                constructor(e) {
                    this._document = e, this.positions = new Map
                }
                clear() {
                    this.positions.clear()
                }
                cache(e) {
                    this.clear(), this.positions.set(this._document, {
                        scrollPosition: this.getViewportScrollPosition()
                    }), e.forEach(t => {
                        this.positions.set(t, {
                            scrollPosition: {
                                top: t.scrollTop,
                                left: t.scrollLeft
                            },
                            clientRect: F(t)
                        })
                    })
                }
                handleScroll(e) {
                    const t = (0, D.sA)(e),
                        i = this.positions.get(t);
                    if (!i) return null;
                    const s = i.scrollPosition;
                    let r, o;
                    if (t === this._document) {
                        const c = this.getViewportScrollPosition();
                        r = c.top, o = c.left
                    } else r = t.scrollTop, o = t.scrollLeft;
                    const a = s.top - r,
                        h = s.left - o;
                    return this.positions.forEach((c, d) => {
                        c.clientRect && t !== d && t.contains(d) && y(c.clientRect, a, h)
                    }), s.top = r, s.left = o, {
                        top: a,
                        left: h
                    }
                }
                getViewportScrollPosition() {
                    return {
                        top: window.scrollY,
                        left: window.scrollX
                    }
                }
            }

            function tt(n) {
                const e = n.cloneNode(!0),
                    t = e.querySelectorAll("[id]"),
                    i = n.nodeName.toLowerCase();
                e.removeAttribute("id");
                for (let s = 0; s < t.length; s++) t[s].removeAttribute("id");
                return "canvas" === i ? st(n, e) : ("input" === i || "select" === i || "textarea" === i) && it(n, e), et("canvas", n, e, st), et("input, textarea, select", n, e, it), e
            }

            function et(n, e, t, i) {
                const s = e.querySelectorAll(n);
                if (s.length) {
                    const r = t.querySelectorAll(n);
                    for (let o = 0; o < s.length; o++) i(s[o], r[o])
                }
            }
            let Ot = 0;

            function it(n, e) {
                "file" !== e.type && (e.value = n.value), "radio" === e.type && e.name && (e.name = `mat-clone-${e.name}-${Ot++}`)
            }

            function st(n, e) {
                const t = e.getContext("2d");
                if (t) try {
                    t.drawImage(n, 0, 0)
                } catch {}
            }
            const nt = (0, D.i$)({
                    passive: !0
                }),
                I = (0, D.i$)({
                    passive: !1
                }),
                N = new Set(["position"]);
            class At {
                get disabled() {
                    return this._disabled || !(!this._dropContainer || !this._dropContainer.disabled)
                }
                set disabled(e) {
                    const t = (0, g.Ig)(e);
                    t !== this._disabled && (this._disabled = t, this._toggleNativeDragInteractions(), this._handles.forEach(i => b(i, t)))
                }
                constructor(e, t, i, s, r, o) {
                    this._config = t, this._document = i, this._ngZone = s, this._viewportRuler = r, this._dragDropRegistry = o, this._passiveTransform = {
                        x: 0,
                        y: 0
                    }, this._activeTransform = {
                        x: 0,
                        y: 0
                    }, this._hasStartedDragging = !1, this._moveEvents = new p.x, this._pointerMoveSubscription = w.w0.EMPTY, this._pointerUpSubscription = w.w0.EMPTY, this._scrollSubscription = w.w0.EMPTY, this._resizeSubscription = w.w0.EMPTY, this._boundaryElement = null, this._nativeInteractionsEnabled = !0, this._handles = [], this._disabledHandles = new Set, this._direction = "ltr", this.dragStartDelay = 0, this._disabled = !1, this.beforeStarted = new p.x, this.started = new p.x, this.released = new p.x, this.ended = new p.x, this.entered = new p.x, this.exited = new p.x, this.dropped = new p.x, this.moved = this._moveEvents, this._pointerDown = a => {
                        if (this.beforeStarted.next(), this._handles.length) {
                            const h = this._getTargetHandle(a);
                            h && !this._disabledHandles.has(h) && !this.disabled && this._initializeDragSequence(h, a)
                        } else this.disabled || this._initializeDragSequence(this._rootElement, a)
                    }, this._pointerMove = a => {
                        const h = this._getPointerPositionOnPage(a);
                        if (!this._hasStartedDragging) {
                            if (Math.abs(h.x - this._pickupPositionOnPage.x) + Math.abs(h.y - this._pickupPositionOnPage.y) >= this._config.dragStartThreshold) {
                                const v = Date.now() >= this._dragStartTime + this._getDragStartDelay(a),
                                    S = this._dropContainer;
                                if (!v) return void this._endDragSequence(a);
                                (!S || !S.isDragging() && !S.isReceiving()) && (a.preventDefault(), this._hasStartedDragging = !0, this._ngZone.run(() => this._startDragSequence(a)))
                            }
                            return
                        }
                        a.preventDefault();
                        const c = this._getConstrainedPointerPosition(h);
                        if (this._hasMoved = !0, this._lastKnownPointerPosition = h, this._updatePointerDirectionDelta(c), this._dropContainer) this._updateActiveDropContainer(c, h);
                        else {
                            const d = this.constrainPosition ? this._initialClientRect : this._pickupPositionOnPage,
                                u = this._activeTransform;
                            u.x = c.x - d.x + this._passiveTransform.x, u.y = c.y - d.y + this._passiveTransform.y, this._applyRootElementTransform(u.x, u.y)
                        }
                        this._moveEvents.observers.length && this._ngZone.run(() => {
                            this._moveEvents.next({
                                source: this,
                                pointerPosition: c,
                                event: a,
                                distance: this._getDragDistance(c),
                                delta: this._pointerDirectionDelta
                            })
                        })
                    }, this._pointerUp = a => {
                        this._endDragSequence(a)
                    }, this._nativeDragStart = a => {
                        if (this._handles.length) {
                            const h = this._getTargetHandle(a);
                            h && !this._disabledHandles.has(h) && !this.disabled && a.preventDefault()
                        } else this.disabled || a.preventDefault()
                    }, this.withRootElement(e).withParent(t.parentDragRef || null), this._parentPositions = new q(i), o.registerDragItem(this)
                }
                getPlaceholderElement() {
                    return this._placeholder
                }
                getRootElement() {
                    return this._rootElement
                }
                getVisibleElement() {
                    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement()
                }
                withHandles(e) {
                    this._handles = e.map(i => (0, g.fI)(i)), this._handles.forEach(i => b(i, this.disabled)), this._toggleNativeDragInteractions();
                    const t = new Set;
                    return this._disabledHandles.forEach(i => {
                        this._handles.indexOf(i) > -1 && t.add(i)
                    }), this._disabledHandles = t, this
                }
                withPreviewTemplate(e) {
                    return this._previewTemplate = e, this
                }
                withPlaceholderTemplate(e) {
                    return this._placeholderTemplate = e, this
                }
                withRootElement(e) {
                    const t = (0, g.fI)(e);
                    return t !== this._rootElement && (this._rootElement && this._removeRootElementListeners(this._rootElement), this._ngZone.runOutsideAngular(() => {
                        t.addEventListener("mousedown", this._pointerDown, I), t.addEventListener("touchstart", this._pointerDown, nt), t.addEventListener("dragstart", this._nativeDragStart, I)
                    }), this._initialTransform = void 0, this._rootElement = t), typeof SVGElement < "u" && this._rootElement instanceof SVGElement && (this._ownerSVGElement = this._rootElement.ownerSVGElement), this
                }
                withBoundaryElement(e) {
                    return this._boundaryElement = e ? (0, g.fI)(e) : null, this._resizeSubscription.unsubscribe(), e && (this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize())), this
                }
                withParent(e) {
                    return this._parentDragRef = e, this
                }
                dispose() {
                    this._removeRootElementListeners(this._rootElement), this.isDragging() && this._rootElement ? .remove(), this._anchor ? .remove(), this._destroyPreview(), this._destroyPlaceholder(), this._dragDropRegistry.removeDragItem(this), this._removeSubscriptions(), this.beforeStarted.complete(), this.started.complete(), this.released.complete(), this.ended.complete(), this.entered.complete(), this.exited.complete(), this.dropped.complete(), this._moveEvents.complete(), this._handles = [], this._disabledHandles.clear(), this._dropContainer = void 0, this._resizeSubscription.unsubscribe(), this._parentPositions.clear(), this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null
                }
                isDragging() {
                    return this._hasStartedDragging && this._dragDropRegistry.isDragging(this)
                }
                reset() {
                    this._rootElement.style.transform = this._initialTransform || "", this._activeTransform = {
                        x: 0,
                        y: 0
                    }, this._passiveTransform = {
                        x: 0,
                        y: 0
                    }
                }
                disableHandle(e) {
                    !this._disabledHandles.has(e) && this._handles.indexOf(e) > -1 && (this._disabledHandles.add(e), b(e, !0))
                }
                enableHandle(e) {
                    this._disabledHandles.has(e) && (this._disabledHandles.delete(e), b(e, this.disabled))
                }
                withDirection(e) {
                    return this._direction = e, this
                }
                _withDropContainer(e) {
                    this._dropContainer = e
                }
                getFreeDragPosition() {
                    const e = this.isDragging() ? this._activeTransform : this._passiveTransform;
                    return {
                        x: e.x,
                        y: e.y
                    }
                }
                setFreeDragPosition(e) {
                    return this._activeTransform = {
                        x: 0,
                        y: 0
                    }, this._passiveTransform.x = e.x, this._passiveTransform.y = e.y, this._dropContainer || this._applyRootElementTransform(e.x, e.y), this
                }
                withPreviewContainer(e) {
                    return this._previewContainer = e, this
                }
                _sortFromLastPointerPosition() {
                    const e = this._lastKnownPointerPosition;
                    e && this._dropContainer && this._updateActiveDropContainer(this._getConstrainedPointerPosition(e), e)
                }
                _removeSubscriptions() {
                    this._pointerMoveSubscription.unsubscribe(), this._pointerUpSubscription.unsubscribe(), this._scrollSubscription.unsubscribe()
                }
                _destroyPreview() {
                    this._preview ? .remove(), this._previewRef ? .destroy(), this._preview = this._previewRef = null
                }
                _destroyPlaceholder() {
                    this._placeholder ? .remove(), this._placeholderRef ? .destroy(), this._placeholder = this._placeholderRef = null
                }
                _endDragSequence(e) {
                    if (this._dragDropRegistry.isDragging(this) && (this._removeSubscriptions(), this._dragDropRegistry.stopDragging(this), this._toggleNativeDragInteractions(), this._handles && (this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight), this._hasStartedDragging))
                        if (this.released.next({
                                source: this,
                                event: e
                            }), this._dropContainer) this._dropContainer._stopScrolling(), this._animatePreviewToPlaceholder().then(() => {
                            this._cleanupDragArtifacts(e), this._cleanupCachedDimensions(), this._dragDropRegistry.stopDragging(this)
                        });
                        else {
                            this._passiveTransform.x = this._activeTransform.x;
                            const t = this._getPointerPositionOnPage(e);
                            this._passiveTransform.y = this._activeTransform.y, this._ngZone.run(() => {
                                this.ended.next({
                                    source: this,
                                    distance: this._getDragDistance(t),
                                    dropPoint: t,
                                    event: e
                                })
                            }), this._cleanupCachedDimensions(), this._dragDropRegistry.stopDragging(this)
                        }
                }
                _startDragSequence(e) {
                    R(e) && (this._lastTouchEventTime = Date.now()), this._toggleNativeDragInteractions();
                    const t = this._dropContainer;
                    if (t) {
                        const i = this._rootElement,
                            s = i.parentNode,
                            r = this._placeholder = this._createPlaceholderElement(),
                            o = this._anchor = this._anchor || this._document.createComment(""),
                            a = this._getShadowRoot();
                        s.insertBefore(o, i), this._initialTransform = i.style.transform || "", this._preview = this._createPreviewElement(), Q(i, !1, N), this._document.body.appendChild(s.replaceChild(r, i)), this._getPreviewInsertionPoint(s, a).appendChild(this._preview), this.started.next({
                            source: this,
                            event: e
                        }), t.start(), this._initialContainer = t, this._initialIndex = t.getItemIndex(this)
                    } else this.started.next({
                        source: this,
                        event: e
                    }), this._initialContainer = this._initialIndex = void 0;
                    this._parentPositions.cache(t ? t.getScrollableParents() : [])
                }
                _initializeDragSequence(e, t) {
                    this._parentDragRef && t.stopPropagation();
                    const i = this.isDragging(),
                        s = R(t),
                        r = !s && 0 !== t.button,
                        o = this._rootElement,
                        a = (0, D.sA)(t),
                        h = !s && this._lastTouchEventTime && this._lastTouchEventTime + 800 > Date.now(),
                        c = s ? (0, $.yG)(t) : (0, $.X6)(t);
                    if (a && a.draggable && "mousedown" === t.type && t.preventDefault(), i || r || h || c) return;
                    if (this._handles.length) {
                        const f = o.style;
                        this._rootElementTapHighlight = f.webkitTapHighlightColor || "", f.webkitTapHighlightColor = "transparent"
                    }
                    this._hasStartedDragging = this._hasMoved = !1, this._removeSubscriptions(), this._initialClientRect = this._rootElement.getBoundingClientRect(), this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove), this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp), this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(f => this._updateOnScroll(f)), this._boundaryElement && (this._boundaryRect = F(this._boundaryElement));
                    const d = this._previewTemplate;
                    this._pickupPositionInElement = d && d.template && !d.matchSize ? {
                        x: 0,
                        y: 0
                    } : this._getPointerPositionInElement(this._initialClientRect, e, t);
                    const u = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(t);
                    this._pointerDirectionDelta = {
                        x: 0,
                        y: 0
                    }, this._pointerPositionAtLastDirectionChange = {
                        x: u.x,
                        y: u.y
                    }, this._dragStartTime = Date.now(), this._dragDropRegistry.startDragging(this, t)
                }
                _cleanupDragArtifacts(e) {
                    Q(this._rootElement, !0, N), this._anchor.parentNode.replaceChild(this._rootElement, this._anchor), this._destroyPreview(), this._destroyPlaceholder(), this._initialClientRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0, this._ngZone.run(() => {
                        const t = this._dropContainer,
                            i = t.getItemIndex(this),
                            s = this._getPointerPositionOnPage(e),
                            r = this._getDragDistance(s),
                            o = t._isOverContainer(s.x, s.y);
                        this.ended.next({
                            source: this,
                            distance: r,
                            dropPoint: s,
                            event: e
                        }), this.dropped.next({
                            item: this,
                            currentIndex: i,
                            previousIndex: this._initialIndex,
                            container: t,
                            previousContainer: this._initialContainer,
                            isPointerOverContainer: o,
                            distance: r,
                            dropPoint: s,
                            event: e
                        }), t.drop(this, i, this._initialIndex, this._initialContainer, o, r, s, e), this._dropContainer = this._initialContainer
                    })
                }
                _updateActiveDropContainer({
                    x: e,
                    y: t
                }, {
                    x: i,
                    y: s
                }) {
                    let r = this._initialContainer._getSiblingContainerFromPosition(this, e, t);
                    !r && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(e, t) && (r = this._initialContainer), r && r !== this._dropContainer && this._ngZone.run(() => {
                        this.exited.next({
                            item: this,
                            container: this._dropContainer
                        }), this._dropContainer.exit(this), this._dropContainer = r, this._dropContainer.enter(this, e, t, r === this._initialContainer && r.sortingDisabled ? this._initialIndex : void 0), this.entered.next({
                            item: this,
                            container: r,
                            currentIndex: r.getItemIndex(this)
                        })
                    }), this.isDragging() && (this._dropContainer._startScrollingIfNecessary(i, s), this._dropContainer._sortItem(this, e, t, this._pointerDirectionDelta), this.constrainPosition ? this._applyPreviewTransform(e, t) : this._applyPreviewTransform(e - this._pickupPositionInElement.x, t - this._pickupPositionInElement.y))
                }
                _createPreviewElement() {
                    const e = this._previewTemplate,
                        t = this.previewClass,
                        i = e ? e.template : null;
                    let s;
                    if (i && e) {
                        const r = e.matchSize ? this._initialClientRect : null,
                            o = e.viewContainer.createEmbeddedView(i, e.context);
                        o.detectChanges(), s = ot(o, this._document), this._previewRef = o, e.matchSize ? at(s, r) : s.style.transform = T(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y)
                    } else s = tt(this._rootElement), at(s, this._initialClientRect), this._initialTransform && (s.style.transform = this._initialTransform);
                    return H(s.style, {
                        "pointer-events": "none",
                        margin: "0",
                        position: "fixed",
                        top: "0",
                        left: "0",
                        "z-index": `${this._config.zIndex||1e3}`
                    }, N), b(s, !1), s.classList.add("cdk-drag-preview"), s.setAttribute("dir", this._direction), t && (Array.isArray(t) ? t.forEach(r => s.classList.add(r)) : s.classList.add(t)), s
                }
                _animatePreviewToPlaceholder() {
                    if (!this._hasMoved) return Promise.resolve();
                    const e = this._placeholder.getBoundingClientRect();
                    this._preview.classList.add("cdk-drag-animating"), this._applyPreviewTransform(e.left, e.top);
                    const t = function Lt(n) {
                        const e = getComputedStyle(n),
                            t = z(e, "transition-property"),
                            i = t.find(a => "transform" === a || "all" === a);
                        if (!i) return 0;
                        const s = t.indexOf(i),
                            r = z(e, "transition-duration"),
                            o = z(e, "transition-delay");
                        return J(r[s]) + J(o[s])
                    }(this._preview);
                    return 0 === t ? Promise.resolve() : this._ngZone.runOutsideAngular(() => new Promise(i => {
                        const s = o => {
                                (!o || (0, D.sA)(o) === this._preview && "transform" === o.propertyName) && (this._preview ? .removeEventListener("transitionend", s), i(), clearTimeout(r))
                            },
                            r = setTimeout(s, 1.5 * t);
                        this._preview.addEventListener("transitionend", s)
                    }))
                }
                _createPlaceholderElement() {
                    const e = this._placeholderTemplate,
                        t = e ? e.template : null;
                    let i;
                    return t ? (this._placeholderRef = e.viewContainer.createEmbeddedView(t, e.context), this._placeholderRef.detectChanges(), i = ot(this._placeholderRef, this._document)) : i = tt(this._rootElement), i.style.pointerEvents = "none", i.classList.add("cdk-drag-placeholder"), i
                }
                _getPointerPositionInElement(e, t, i) {
                    const s = t === this._rootElement ? null : t,
                        r = s ? s.getBoundingClientRect() : e,
                        o = R(i) ? i.targetTouches[0] : i,
                        a = this._getViewportScrollPosition();
                    return {
                        x: r.left - e.left + (o.pageX - r.left - a.left),
                        y: r.top - e.top + (o.pageY - r.top - a.top)
                    }
                }
                _getPointerPositionOnPage(e) {
                    const t = this._getViewportScrollPosition(),
                        i = R(e) ? e.touches[0] || e.changedTouches[0] || {
                            pageX: 0,
                            pageY: 0
                        } : e,
                        s = i.pageX - t.left,
                        r = i.pageY - t.top;
                    if (this._ownerSVGElement) {
                        const o = this._ownerSVGElement.getScreenCTM();
                        if (o) {
                            const a = this._ownerSVGElement.createSVGPoint();
                            return a.x = s, a.y = r, a.matrixTransform(o.inverse())
                        }
                    }
                    return {
                        x: s,
                        y: r
                    }
                }
                _getConstrainedPointerPosition(e) {
                    const t = this._dropContainer ? this._dropContainer.lockAxis : null;
                    let {
                        x: i,
                        y: s
                    } = this.constrainPosition ? this.constrainPosition(e, this, this._initialClientRect, this._pickupPositionInElement) : e;
                    if ("x" === this.lockAxis || "x" === t ? s = this._pickupPositionOnPage.y : ("y" === this.lockAxis || "y" === t) && (i = this._pickupPositionOnPage.x), this._boundaryRect) {
                        const {
                            x: r,
                            y: o
                        } = this._pickupPositionInElement, a = this._boundaryRect, {
                            width: h,
                            height: c
                        } = this._getPreviewRect(), d = a.top + o, u = a.bottom - (c - o);
                        i = rt(i, a.left + r, a.right - (h - r)), s = rt(s, d, u)
                    }
                    return {
                        x: i,
                        y: s
                    }
                }
                _updatePointerDirectionDelta(e) {
                    const {
                        x: t,
                        y: i
                    } = e, s = this._pointerDirectionDelta, r = this._pointerPositionAtLastDirectionChange, o = Math.abs(t - r.x), a = Math.abs(i - r.y);
                    return o > this._config.pointerDirectionChangeThreshold && (s.x = t > r.x ? 1 : -1, r.x = t), a > this._config.pointerDirectionChangeThreshold && (s.y = i > r.y ? 1 : -1, r.y = i), s
                }
                _toggleNativeDragInteractions() {
                    if (!this._rootElement || !this._handles) return;
                    const e = this._handles.length > 0 || !this.isDragging();
                    e !== this._nativeInteractionsEnabled && (this._nativeInteractionsEnabled = e, b(this._rootElement, e))
                }
                _removeRootElementListeners(e) {
                    e.removeEventListener("mousedown", this._pointerDown, I), e.removeEventListener("touchstart", this._pointerDown, nt), e.removeEventListener("dragstart", this._nativeDragStart, I)
                }
                _applyRootElementTransform(e, t) {
                    const i = T(e, t),
                        s = this._rootElement.style;
                    null == this._initialTransform && (this._initialTransform = s.transform && "none" != s.transform ? s.transform : ""), s.transform = C(i, this._initialTransform)
                }
                _applyPreviewTransform(e, t) {
                    const i = this._previewTemplate ? .template ? void 0 : this._initialTransform,
                        s = T(e, t);
                    this._preview.style.transform = C(s, i)
                }
                _getDragDistance(e) {
                    const t = this._pickupPositionOnPage;
                    return t ? {
                        x: e.x - t.x,
                        y: e.y - t.y
                    } : {
                        x: 0,
                        y: 0
                    }
                }
                _cleanupCachedDimensions() {
                    this._boundaryRect = this._previewRect = void 0, this._parentPositions.clear()
                }
                _containInsideBoundaryOnResize() {
                    let {
                        x: e,
                        y: t
                    } = this._passiveTransform;
                    if (0 === e && 0 === t || this.isDragging() || !this._boundaryElement) return;
                    const i = this._rootElement.getBoundingClientRect(),
                        s = this._boundaryElement.getBoundingClientRect();
                    if (0 === s.width && 0 === s.height || 0 === i.width && 0 === i.height) return;
                    const r = s.left - i.left,
                        o = i.right - s.right,
                        a = s.top - i.top,
                        h = i.bottom - s.bottom;
                    s.width > i.width ? (r > 0 && (e += r), o > 0 && (e -= o)) : e = 0, s.height > i.height ? (a > 0 && (t += a), h > 0 && (t -= h)) : t = 0, (e !== this._passiveTransform.x || t !== this._passiveTransform.y) && this.setFreeDragPosition({
                        y: t,
                        x: e
                    })
                }
                _getDragStartDelay(e) {
                    const t = this.dragStartDelay;
                    return "number" == typeof t ? t : R(e) ? t.touch : t ? t.mouse : 0
                }
                _updateOnScroll(e) {
                    const t = this._parentPositions.handleScroll(e);
                    if (t) {
                        const i = (0, D.sA)(e);
                        this._boundaryRect && i !== this._boundaryElement && i.contains(this._boundaryElement) && y(this._boundaryRect, t.top, t.left), this._pickupPositionOnPage.x += t.left, this._pickupPositionOnPage.y += t.top, this._dropContainer || (this._activeTransform.x -= t.left, this._activeTransform.y -= t.top, this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y))
                    }
                }
                _getViewportScrollPosition() {
                    return this._parentPositions.positions.get(this._document) ? .scrollPosition || this._parentPositions.getViewportScrollPosition()
                }
                _getShadowRoot() {
                    return void 0 === this._cachedShadowRoot && (this._cachedShadowRoot = (0, D.kV)(this._rootElement)), this._cachedShadowRoot
                }
                _getPreviewInsertionPoint(e, t) {
                    const i = this._previewContainer || "global";
                    if ("parent" === i) return e;
                    if ("global" === i) {
                        const s = this._document;
                        return t || s.fullscreenElement || s.webkitFullscreenElement || s.mozFullScreenElement || s.msFullscreenElement || s.body
                    }
                    return (0, g.fI)(i)
                }
                _getPreviewRect() {
                    return (!this._previewRect || !this._previewRect.width && !this._previewRect.height) && (this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialClientRect), this._previewRect
                }
                _getTargetHandle(e) {
                    return this._handles.find(t => e.target && (e.target === t || t.contains(e.target)))
                }
            }

            function T(n, e) {
                return `translate3d(${Math.round(n)}px, ${Math.round(e)}px, 0)`
            }

            function rt(n, e, t) {
                return Math.max(e, Math.min(t, n))
            }

            function R(n) {
                return "t" === n.type[0]
            }

            function ot(n, e) {
                const t = n.rootNodes;
                if (1 === t.length && t[0].nodeType === e.ELEMENT_NODE) return t[0];
                const i = e.createElement("div");
                return t.forEach(s => i.appendChild(s)), i
            }

            function at(n, e) {
                n.style.width = `${e.width}px`, n.style.height = `${e.height}px`, n.style.transform = T(e.left, e.top)
            }

            function lt(n, e, t) {
                const i = x(e, n.length - 1),
                    s = x(t, n.length - 1);
                if (i === s) return;
                const r = n[i],
                    o = s < i ? -1 : 1;
                for (let a = i; a !== s; a += o) n[a] = n[a + o];
                n[s] = r
            }

            function Ht(n, e, t, i) {
                const s = x(t, n.length - 1),
                    r = x(i, e.length);
                n.length && e.splice(r, 0, n.splice(s, 1)[0])
            }

            function x(n, e) {
                return Math.max(0, Math.min(e, n))
            }
            class zt {
                constructor(e, t) {
                    this._element = e, this._dragDropRegistry = t, this._itemPositions = [], this.orientation = "vertical", this._previousSwap = {
                        drag: null,
                        delta: 0,
                        overlaps: !1
                    }
                }
                start(e) {
                    this.withItems(e)
                }
                sort(e, t, i, s) {
                    const r = this._itemPositions,
                        o = this._getItemIndexFromPointerPosition(e, t, i, s);
                    if (-1 === o && r.length > 0) return null;
                    const a = "horizontal" === this.orientation,
                        h = r.findIndex(m => m.drag === e),
                        c = r[o],
                        u = c.clientRect,
                        f = h > o ? 1 : -1,
                        v = this._getItemOffsetPx(r[h].clientRect, u, f),
                        S = this._getSiblingOffsetPx(h, r, f),
                        P = r.slice();
                    return lt(r, h, o), r.forEach((m, $t) => {
                        if (P[$t] === m) return;
                        const Pt = m.drag === e,
                            U = Pt ? v : S,
                            wt = Pt ? e.getPlaceholderElement() : m.drag.getRootElement();
                        m.offset += U, a ? (wt.style.transform = C(`translate3d(${Math.round(m.offset)}px, 0, 0)`, m.initialTransform), y(m.clientRect, 0, U)) : (wt.style.transform = C(`translate3d(0, ${Math.round(m.offset)}px, 0)`, m.initialTransform), y(m.clientRect, U, 0))
                    }), this._previousSwap.overlaps = G(u, t, i), this._previousSwap.drag = c.drag, this._previousSwap.delta = a ? s.x : s.y, {
                        previousIndex: h,
                        currentIndex: o
                    }
                }
                enter(e, t, i, s) {
                    const r = null == s || s < 0 ? this._getItemIndexFromPointerPosition(e, t, i) : s,
                        o = this._activeDraggables,
                        a = o.indexOf(e),
                        h = e.getPlaceholderElement();
                    let c = o[r];
                    if (c === e && (c = o[r + 1]), !c && (null == r || -1 === r || r < o.length - 1) && this._shouldEnterAsFirstChild(t, i) && (c = o[0]), a > -1 && o.splice(a, 1), c && !this._dragDropRegistry.isDragging(c)) {
                        const d = c.getRootElement();
                        d.parentElement.insertBefore(h, d), o.splice(r, 0, e)
                    } else(0, g.fI)(this._element).appendChild(h), o.push(e);
                    h.style.transform = "", this._cacheItemPositions()
                }
                withItems(e) {
                    this._activeDraggables = e.slice(), this._cacheItemPositions()
                }
                withSortPredicate(e) {
                    this._sortPredicate = e
                }
                reset() {
                    this._activeDraggables.forEach(e => {
                        const t = e.getRootElement();
                        if (t) {
                            const i = this._itemPositions.find(s => s.drag === e) ? .initialTransform;
                            t.style.transform = i || ""
                        }
                    }), this._itemPositions = [], this._activeDraggables = [], this._previousSwap.drag = null, this._previousSwap.delta = 0, this._previousSwap.overlaps = !1
                }
                getActiveItemsSnapshot() {
                    return this._activeDraggables
                }
                getItemIndex(e) {
                    return ("horizontal" === this.orientation && "rtl" === this.direction ? this._itemPositions.slice().reverse() : this._itemPositions).findIndex(i => i.drag === e)
                }
                updateOnScroll(e, t) {
                    this._itemPositions.forEach(({
                        clientRect: i
                    }) => {
                        y(i, e, t)
                    }), this._itemPositions.forEach(({
                        drag: i
                    }) => {
                        this._dragDropRegistry.isDragging(i) && i._sortFromLastPointerPosition()
                    })
                }
                _cacheItemPositions() {
                    const e = "horizontal" === this.orientation;
                    this._itemPositions = this._activeDraggables.map(t => {
                        const i = t.getVisibleElement();
                        return {
                            drag: t,
                            offset: 0,
                            initialTransform: i.style.transform || "",
                            clientRect: F(i)
                        }
                    }).sort((t, i) => e ? t.clientRect.left - i.clientRect.left : t.clientRect.top - i.clientRect.top)
                }
                _getItemOffsetPx(e, t, i) {
                    const s = "horizontal" === this.orientation;
                    let r = s ? t.left - e.left : t.top - e.top;
                    return -1 === i && (r += s ? t.width - e.width : t.height - e.height), r
                }
                _getSiblingOffsetPx(e, t, i) {
                    const s = "horizontal" === this.orientation,
                        r = t[e].clientRect,
                        o = t[e + -1 * i];
                    let a = r[s ? "width" : "height"] * i;
                    if (o) {
                        const h = s ? "left" : "top",
                            c = s ? "right" : "bottom"; - 1 === i ? a -= o.clientRect[h] - r[c] : a += r[h] - o.clientRect[c]
                    }
                    return a
                }
                _shouldEnterAsFirstChild(e, t) {
                    if (!this._activeDraggables.length) return !1;
                    const i = this._itemPositions,
                        s = "horizontal" === this.orientation;
                    if (i[0].drag !== this._activeDraggables[0]) {
                        const o = i[i.length - 1].clientRect;
                        return s ? e >= o.right : t >= o.bottom
                    } {
                        const o = i[0].clientRect;
                        return s ? e <= o.left : t <= o.top
                    }
                }
                _getItemIndexFromPointerPosition(e, t, i, s) {
                    const r = "horizontal" === this.orientation,
                        o = this._itemPositions.findIndex(({
                            drag: a,
                            clientRect: h
                        }) => a !== e && ((!s || a !== this._previousSwap.drag || !this._previousSwap.overlaps || (r ? s.x : s.y) !== this._previousSwap.delta) && (r ? t >= Math.floor(h.left) && t < Math.floor(h.right) : i >= Math.floor(h.top) && i < Math.floor(h.bottom))));
                    return -1 !== o && this._sortPredicate(o, e) ? o : -1
                }
            }
            const ct = .05;
            class Ft {
                constructor(e, t, i, s, r) {
                    this._dragDropRegistry = t, this._ngZone = s, this._viewportRuler = r, this.disabled = !1, this.sortingDisabled = !1, this.autoScrollDisabled = !1, this.autoScrollStep = 2, this.enterPredicate = () => !0, this.sortPredicate = () => !0, this.beforeStarted = new p.x, this.entered = new p.x, this.exited = new p.x, this.dropped = new p.x, this.sorted = new p.x, this.receivingStarted = new p.x, this.receivingStopped = new p.x, this._isDragging = !1, this._draggables = [], this._siblings = [], this._activeSiblings = new Set, this._viewportScrollSubscription = w.w0.EMPTY, this._verticalScrollDirection = 0, this._horizontalScrollDirection = 0, this._stopScrollTimers = new p.x, this._cachedShadowRoot = null, this._startScrollInterval = () => {
                        this._stopScrolling(),
                            function Et(n = 0, e = Rt.z) {
                                return n < 0 && (n = 0), (0, xt.H)(n, n, e)
                            }(0, Ct.Z).pipe((0, E.R)(this._stopScrollTimers)).subscribe(() => {
                                const o = this._scrollNode,
                                    a = this.autoScrollStep;
                                1 === this._verticalScrollDirection ? o.scrollBy(0, -a) : 2 === this._verticalScrollDirection && o.scrollBy(0, a), 1 === this._horizontalScrollDirection ? o.scrollBy(-a, 0) : 2 === this._horizontalScrollDirection && o.scrollBy(a, 0)
                            })
                    }, this.element = (0, g.fI)(e), this._document = i, this.withScrollableParents([this.element]), t.registerDropContainer(this), this._parentPositions = new q(i), this._sortStrategy = new zt(this.element, t), this._sortStrategy.withSortPredicate((o, a) => this.sortPredicate(o, a, this))
                }
                dispose() {
                    this._stopScrolling(), this._stopScrollTimers.complete(), this._viewportScrollSubscription.unsubscribe(), this.beforeStarted.complete(), this.entered.complete(), this.exited.complete(), this.dropped.complete(), this.sorted.complete(), this.receivingStarted.complete(), this.receivingStopped.complete(), this._activeSiblings.clear(), this._scrollNode = null, this._parentPositions.clear(), this._dragDropRegistry.removeDropContainer(this)
                }
                isDragging() {
                    return this._isDragging
                }
                start() {
                    this._draggingStarted(), this._notifyReceivingSiblings()
                }
                enter(e, t, i, s) {
                    this._draggingStarted(), null == s && this.sortingDisabled && (s = this._draggables.indexOf(e)), this._sortStrategy.enter(e, t, i, s), this._cacheParentPositions(), this._notifyReceivingSiblings(), this.entered.next({
                        item: e,
                        container: this,
                        currentIndex: this.getItemIndex(e)
                    })
                }
                exit(e) {
                    this._reset(), this.exited.next({
                        item: e,
                        container: this
                    })
                }
                drop(e, t, i, s, r, o, a, h = {}) {
                    this._reset(), this.dropped.next({
                        item: e,
                        currentIndex: t,
                        previousIndex: i,
                        container: this,
                        previousContainer: s,
                        isPointerOverContainer: r,
                        distance: o,
                        dropPoint: a,
                        event: h
                    })
                }
                withItems(e) {
                    const t = this._draggables;
                    return this._draggables = e, e.forEach(i => i._withDropContainer(this)), this.isDragging() && (t.filter(s => s.isDragging()).every(s => -1 === e.indexOf(s)) ? this._reset() : this._sortStrategy.withItems(this._draggables)), this
                }
                withDirection(e) {
                    return this._sortStrategy.direction = e, this
                }
                connectedTo(e) {
                    return this._siblings = e.slice(), this
                }
                withOrientation(e) {
                    return this._sortStrategy.orientation = e, this
                }
                withScrollableParents(e) {
                    const t = (0, g.fI)(this.element);
                    return this._scrollableElements = -1 === e.indexOf(t) ? [t, ...e] : e.slice(), this
                }
                getScrollableParents() {
                    return this._scrollableElements
                }
                getItemIndex(e) {
                    return this._isDragging ? this._sortStrategy.getItemIndex(e) : this._draggables.indexOf(e)
                }
                isReceiving() {
                    return this._activeSiblings.size > 0
                }
                _sortItem(e, t, i, s) {
                    if (this.sortingDisabled || !this._clientRect || !X(this._clientRect, .05, t, i)) return;
                    const r = this._sortStrategy.sort(e, t, i, s);
                    r && this.sorted.next({
                        previousIndex: r.previousIndex,
                        currentIndex: r.currentIndex,
                        container: this,
                        item: e
                    })
                }
                _startScrollingIfNecessary(e, t) {
                    if (this.autoScrollDisabled) return;
                    let i, s = 0,
                        r = 0;
                    if (this._parentPositions.positions.forEach((o, a) => {
                            a === this._document || !o.clientRect || i || X(o.clientRect, .05, e, t) && ([s, r] = function Gt(n, e, t, i) {
                                const s = dt(e, i),
                                    r = gt(e, t);
                                let o = 0,
                                    a = 0;
                                if (s) {
                                    const h = n.scrollTop;
                                    1 === s ? h > 0 && (o = 1) : n.scrollHeight - h > n.clientHeight && (o = 2)
                                }
                                if (r) {
                                    const h = n.scrollLeft;
                                    1 === r ? h > 0 && (a = 1) : n.scrollWidth - h > n.clientWidth && (a = 2)
                                }
                                return [o, a]
                            }(a, o.clientRect, e, t), (s || r) && (i = a))
                        }), !s && !r) {
                        const {
                            width: o,
                            height: a
                        } = this._viewportRuler.getViewportSize(), h = {
                            width: o,
                            height: a,
                            top: 0,
                            right: o,
                            bottom: a,
                            left: 0
                        };
                        s = dt(h, t), r = gt(h, e), i = window
                    }
                    i && (s !== this._verticalScrollDirection || r !== this._horizontalScrollDirection || i !== this._scrollNode) && (this._verticalScrollDirection = s, this._horizontalScrollDirection = r, this._scrollNode = i, (s || r) && i ? this._ngZone.runOutsideAngular(this._startScrollInterval) : this._stopScrolling())
                }
                _stopScrolling() {
                    this._stopScrollTimers.next()
                }
                _draggingStarted() {
                    const e = (0, g.fI)(this.element).style;
                    this.beforeStarted.next(), this._isDragging = !0, this._initialScrollSnap = e.msScrollSnapType || e.scrollSnapType || "", e.scrollSnapType = e.msScrollSnapType = "none", this._sortStrategy.start(this._draggables), this._cacheParentPositions(), this._viewportScrollSubscription.unsubscribe(), this._listenToScrollEvents()
                }
                _cacheParentPositions() {
                    const e = (0, g.fI)(this.element);
                    this._parentPositions.cache(this._scrollableElements), this._clientRect = this._parentPositions.positions.get(e).clientRect
                }
                _reset() {
                    this._isDragging = !1;
                    const e = (0, g.fI)(this.element).style;
                    e.scrollSnapType = e.msScrollSnapType = this._initialScrollSnap, this._siblings.forEach(t => t._stopReceiving(this)), this._sortStrategy.reset(), this._stopScrolling(), this._viewportScrollSubscription.unsubscribe(), this._parentPositions.clear()
                }
                _isOverContainer(e, t) {
                    return null != this._clientRect && G(this._clientRect, e, t)
                }
                _getSiblingContainerFromPosition(e, t, i) {
                    return this._siblings.find(s => s._canReceive(e, t, i))
                }
                _canReceive(e, t, i) {
                    if (!this._clientRect || !G(this._clientRect, t, i) || !this.enterPredicate(e, this)) return !1;
                    const s = this._getShadowRoot().elementFromPoint(t, i);
                    if (!s) return !1;
                    const r = (0, g.fI)(this.element);
                    return s === r || r.contains(s)
                }
                _startReceiving(e, t) {
                    const i = this._activeSiblings;
                    !i.has(e) && t.every(s => this.enterPredicate(s, this) || this._draggables.indexOf(s) > -1) && (i.add(e), this._cacheParentPositions(), this._listenToScrollEvents(), this.receivingStarted.next({
                        initiator: e,
                        receiver: this,
                        items: t
                    }))
                }
                _stopReceiving(e) {
                    this._activeSiblings.delete(e), this._viewportScrollSubscription.unsubscribe(), this.receivingStopped.next({
                        initiator: e,
                        receiver: this
                    })
                }
                _listenToScrollEvents() {
                    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(e => {
                        if (this.isDragging()) {
                            const t = this._parentPositions.handleScroll(e);
                            t && this._sortStrategy.updateOnScroll(t.top, t.left)
                        } else this.isReceiving() && this._cacheParentPositions()
                    })
                }
                _getShadowRoot() {
                    if (!this._cachedShadowRoot) {
                        const e = (0, D.kV)((0, g.fI)(this.element));
                        this._cachedShadowRoot = e || this._document
                    }
                    return this._cachedShadowRoot
                }
                _notifyReceivingSiblings() {
                    const e = this._sortStrategy.getActiveItemsSnapshot().filter(t => t.isDragging());
                    this._siblings.forEach(t => t._startReceiving(this, e))
                }
            }

            function dt(n, e) {
                const {
                    top: t,
                    bottom: i,
                    height: s
                } = n, r = s * ct;
                return e >= t - r && e <= t + r ? 1 : e >= i - r && e <= i + r ? 2 : 0
            }

            function gt(n, e) {
                const {
                    left: t,
                    right: i,
                    width: s
                } = n, r = s * ct;
                return e >= t - r && e <= t + r ? 1 : e >= i - r && e <= i + r ? 2 : 0
            }
            const k = (0, D.i$)({
                passive: !1,
                capture: !0
            });
            let Nt = (() => {
                class n {
                    constructor(t, i) {
                        this._ngZone = t, this._dropInstances = new Set, this._dragInstances = new Set, this._activeDragInstances = [], this._globalListeners = new Map, this._draggingPredicate = s => s.isDragging(), this.pointerMove = new p.x, this.pointerUp = new p.x, this.scroll = new p.x, this._preventDefaultWhileDragging = s => {
                            this._activeDragInstances.length > 0 && s.preventDefault()
                        }, this._persistentTouchmoveListener = s => {
                            this._activeDragInstances.length > 0 && (this._activeDragInstances.some(this._draggingPredicate) && s.preventDefault(), this.pointerMove.next(s))
                        }, this._document = i
                    }
                    registerDropContainer(t) {
                        this._dropInstances.has(t) || this._dropInstances.add(t)
                    }
                    registerDragItem(t) {
                        this._dragInstances.add(t), 1 === this._dragInstances.size && this._ngZone.runOutsideAngular(() => {
                            this._document.addEventListener("touchmove", this._persistentTouchmoveListener, k)
                        })
                    }
                    removeDropContainer(t) {
                        this._dropInstances.delete(t)
                    }
                    removeDragItem(t) {
                        this._dragInstances.delete(t), this.stopDragging(t), 0 === this._dragInstances.size && this._document.removeEventListener("touchmove", this._persistentTouchmoveListener, k)
                    }
                    startDragging(t, i) {
                        if (!(this._activeDragInstances.indexOf(t) > -1) && (this._activeDragInstances.push(t), 1 === this._activeDragInstances.length)) {
                            const s = i.type.startsWith("touch");
                            this._globalListeners.set(s ? "touchend" : "mouseup", {
                                handler: r => this.pointerUp.next(r),
                                options: !0
                            }).set("scroll", {
                                handler: r => this.scroll.next(r),
                                options: !0
                            }).set("selectstart", {
                                handler: this._preventDefaultWhileDragging,
                                options: k
                            }), s || this._globalListeners.set("mousemove", {
                                handler: r => this.pointerMove.next(r),
                                options: k
                            }), this._ngZone.runOutsideAngular(() => {
                                this._globalListeners.forEach((r, o) => {
                                    this._document.addEventListener(o, r.handler, r.options)
                                })
                            })
                        }
                    }
                    stopDragging(t) {
                        const i = this._activeDragInstances.indexOf(t);
                        i > -1 && (this._activeDragInstances.splice(i, 1), 0 === this._activeDragInstances.length && this._clearGlobalListeners())
                    }
                    isDragging(t) {
                        return this._activeDragInstances.indexOf(t) > -1
                    }
                    scrolled(t) {
                        const i = [this.scroll];
                        return t && t !== this._document && i.push(new K.y(s => this._ngZone.runOutsideAngular(() => {
                            const o = a => {
                                this._activeDragInstances.length && s.next(a)
                            };
                            return t.addEventListener("scroll", o, !0), () => {
                                t.removeEventListener("scroll", o, !0)
                            }
                        }))), (0, M.T)(...i)
                    }
                    ngOnDestroy() {
                        this._dragInstances.forEach(t => this.removeDragItem(t)), this._dropInstances.forEach(t => this.removeDropContainer(t)), this._clearGlobalListeners(), this.pointerMove.complete(), this.pointerUp.complete()
                    }
                    _clearGlobalListeners() {
                        this._globalListeners.forEach((t, i) => {
                            this._document.removeEventListener(i, t.handler, t.options)
                        }), this._globalListeners.clear()
                    }
                }
                return n.\u0275fac = function(t) {
                    return new(t || n)(l.LFG(l.R0b), l.LFG(L.K0))
                }, n.\u0275prov = l.Yz7({
                    token: n,
                    factory: n.\u0275fac,
                    providedIn: "root"
                }), n
            })();
            const Bt = {
                dragStartThreshold: 5,
                pointerDirectionChangeThreshold: 5
            };
            let B = (() => {
                class n {
                    constructor(t, i, s, r) {
                        this._document = t, this._ngZone = i, this._viewportRuler = s, this._dragDropRegistry = r
                    }
                    createDrag(t, i = Bt) {
                        return new At(t, i, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry)
                    }
                    createDropList(t) {
                        return new Ft(t, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler)
                    }
                }
                return n.\u0275fac = function(t) {
                    return new(t || n)(l.LFG(L.K0), l.LFG(l.R0b), l.LFG(O.rL), l.LFG(Nt))
                }, n.\u0275prov = l.Yz7({
                    token: n,
                    factory: n.\u0275fac,
                    providedIn: "root"
                }), n
            })();
            const V = new l.OlP("CDK_DRAG_PARENT"),
                Y = new l.OlP("CdkDropListGroup");
            let pt = (() => {
                class n {
                    constructor() {
                        this._items = new Set, this._disabled = !1
                    }
                    get disabled() {
                        return this._disabled
                    }
                    set disabled(t) {
                        this._disabled = (0, g.Ig)(t)
                    }
                    ngOnDestroy() {
                        this._items.clear()
                    }
                }
                return n.\u0275fac = function(t) {
                    return new(t || n)
                }, n.\u0275dir = l.lG2({
                    type: n,
                    selectors: [
                        ["", "cdkDropListGroup", ""]
                    ],
                    inputs: {
                        disabled: ["cdkDropListGroupDisabled", "disabled"]
                    },
                    exportAs: ["cdkDropListGroup"],
                    standalone: !0,
                    features: [l._Bn([{
                        provide: Y,
                        useExisting: n
                    }])]
                }), n
            })();
            const _t = new l.OlP("CDK_DRAG_CONFIG");
            let Vt = 0;
            const ut = new l.OlP("CdkDropList");
            let ft = (() => {
                class n {
                    get disabled() {
                        return this._disabled || !!this._group && this._group.disabled
                    }
                    set disabled(t) {
                        this._dropListRef.disabled = this._disabled = (0, g.Ig)(t)
                    }
                    constructor(t, i, s, r, o, a, h) {
                        this.element = t, this._changeDetectorRef = s, this._scrollDispatcher = r, this._dir = o, this._group = a, this._destroyed = new p.x, this.connectedTo = [], this.id = "cdk-drop-list-" + Vt++, this.enterPredicate = () => !0, this.sortPredicate = () => !0, this.dropped = new l.vpe, this.entered = new l.vpe, this.exited = new l.vpe, this.sorted = new l.vpe, this._unsortedItems = new Set, this._dropListRef = i.createDropList(t), this._dropListRef.data = this, h && this._assignDefaults(h), this._dropListRef.enterPredicate = (c, d) => this.enterPredicate(c.data, d.data), this._dropListRef.sortPredicate = (c, d, u) => this.sortPredicate(c, d.data, u.data), this._setupInputSyncSubscription(this._dropListRef), this._handleEvents(this._dropListRef), n._dropLists.push(this), a && a._items.add(this)
                    }
                    addItem(t) {
                        this._unsortedItems.add(t), this._dropListRef.isDragging() && this._syncItemsWithRef()
                    }
                    removeItem(t) {
                        this._unsortedItems.delete(t), this._dropListRef.isDragging() && this._syncItemsWithRef()
                    }
                    getSortedItems() {
                        return Array.from(this._unsortedItems).sort((t, i) => t._dragRef.getVisibleElement().compareDocumentPosition(i._dragRef.getVisibleElement()) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1)
                    }
                    ngOnDestroy() {
                        const t = n._dropLists.indexOf(this);
                        t > -1 && n._dropLists.splice(t, 1), this._group && this._group._items.delete(this), this._unsortedItems.clear(), this._dropListRef.dispose(), this._destroyed.next(), this._destroyed.complete()
                    }
                    _setupInputSyncSubscription(t) {
                        this._dir && this._dir.change.pipe((0, A.O)(this._dir.value), (0, E.R)(this._destroyed)).subscribe(i => t.withDirection(i)), t.beforeStarted.subscribe(() => {
                            const i = (0, g.Eq)(this.connectedTo).map(s => "string" == typeof s ? n._dropLists.find(o => o.id === s) : s);
                            if (this._group && this._group._items.forEach(s => {
                                    -1 === i.indexOf(s) && i.push(s)
                                }), !this._scrollableParentsResolved) {
                                const s = this._scrollDispatcher.getAncestorScrollContainers(this.element).map(r => r.getElementRef().nativeElement);
                                this._dropListRef.withScrollableParents(s), this._scrollableParentsResolved = !0
                            }
                            t.disabled = this.disabled, t.lockAxis = this.lockAxis, t.sortingDisabled = (0, g.Ig)(this.sortingDisabled), t.autoScrollDisabled = (0, g.Ig)(this.autoScrollDisabled), t.autoScrollStep = (0, g.su)(this.autoScrollStep, 2), t.connectedTo(i.filter(s => s && s !== this).map(s => s._dropListRef)).withOrientation(this.orientation)
                        })
                    }
                    _handleEvents(t) {
                        t.beforeStarted.subscribe(() => {
                            this._syncItemsWithRef(), this._changeDetectorRef.markForCheck()
                        }), t.entered.subscribe(i => {
                            this.entered.emit({
                                container: this,
                                item: i.item.data,
                                currentIndex: i.currentIndex
                            })
                        }), t.exited.subscribe(i => {
                            this.exited.emit({
                                container: this,
                                item: i.item.data
                            }), this._changeDetectorRef.markForCheck()
                        }), t.sorted.subscribe(i => {
                            this.sorted.emit({
                                previousIndex: i.previousIndex,
                                currentIndex: i.currentIndex,
                                container: this,
                                item: i.item.data
                            })
                        }), t.dropped.subscribe(i => {
                            this.dropped.emit({
                                previousIndex: i.previousIndex,
                                currentIndex: i.currentIndex,
                                previousContainer: i.previousContainer.data,
                                container: i.container.data,
                                item: i.item.data,
                                isPointerOverContainer: i.isPointerOverContainer,
                                distance: i.distance,
                                dropPoint: i.dropPoint,
                                event: i.event
                            }), this._changeDetectorRef.markForCheck()
                        }), (0, M.T)(t.receivingStarted, t.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck())
                    }
                    _assignDefaults(t) {
                        const {
                            lockAxis: i,
                            draggingDisabled: s,
                            sortingDisabled: r,
                            listAutoScrollDisabled: o,
                            listOrientation: a
                        } = t;
                        this.disabled = s ? ? !1, this.sortingDisabled = r ? ? !1, this.autoScrollDisabled = o ? ? !1, this.orientation = a || "vertical", i && (this.lockAxis = i)
                    }
                    _syncItemsWithRef() {
                        this._dropListRef.withItems(this.getSortedItems().map(t => t._dragRef))
                    }
                }
                return n._dropLists = [], n.\u0275fac = function(t) {
                    return new(t || n)(l.Y36(l.SBq), l.Y36(B), l.Y36(l.sBO), l.Y36(O.mF), l.Y36(j.Is, 8), l.Y36(Y, 12), l.Y36(_t, 8))
                }, n.\u0275dir = l.lG2({
                    type: n,
                    selectors: [
                        ["", "cdkDropList", ""],
                        ["cdk-drop-list"]
                    ],
                    hostAttrs: [1, "cdk-drop-list"],
                    hostVars: 7,
                    hostBindings: function(t, i) {
                        2 & t && (l.uIk("id", i.id), l.ekj("cdk-drop-list-disabled", i.disabled)("cdk-drop-list-dragging", i._dropListRef.isDragging())("cdk-drop-list-receiving", i._dropListRef.isReceiving()))
                    },
                    inputs: {
                        connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
                        data: ["cdkDropListData", "data"],
                        orientation: ["cdkDropListOrientation", "orientation"],
                        id: "id",
                        lockAxis: ["cdkDropListLockAxis", "lockAxis"],
                        disabled: ["cdkDropListDisabled", "disabled"],
                        sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
                        enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
                        sortPredicate: ["cdkDropListSortPredicate", "sortPredicate"],
                        autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
                        autoScrollStep: ["cdkDropListAutoScrollStep", "autoScrollStep"]
                    },
                    outputs: {
                        dropped: "cdkDropListDropped",
                        entered: "cdkDropListEntered",
                        exited: "cdkDropListExited",
                        sorted: "cdkDropListSorted"
                    },
                    exportAs: ["cdkDropList"],
                    standalone: !0,
                    features: [l._Bn([{
                        provide: Y,
                        useValue: void 0
                    }, {
                        provide: ut,
                        useExisting: n
                    }])]
                }), n
            })();
            const Z = new l.OlP("CdkDragHandle");
            let mt = (() => {
                class n {
                    get disabled() {
                        return this._disabled
                    }
                    set disabled(t) {
                        this._disabled = (0, g.Ig)(t), this._stateChanges.next(this)
                    }
                    constructor(t, i) {
                        this.element = t, this._stateChanges = new p.x, this._disabled = !1, this._parentDrag = i
                    }
                    ngOnDestroy() {
                        this._stateChanges.complete()
                    }
                }
                return n.\u0275fac = function(t) {
                    return new(t || n)(l.Y36(l.SBq), l.Y36(V, 12))
                }, n.\u0275dir = l.lG2({
                    type: n,
                    selectors: [
                        ["", "cdkDragHandle", ""]
                    ],
                    hostAttrs: [1, "cdk-drag-handle"],
                    inputs: {
                        disabled: ["cdkDragHandleDisabled", "disabled"]
                    },
                    standalone: !0,
                    features: [l._Bn([{
                        provide: Z,
                        useExisting: n
                    }])]
                }), n
            })();
            const Dt = new l.OlP("CdkDragPlaceholder");
            let vt = (() => {
                class n {
                    constructor(t) {
                        this.templateRef = t
                    }
                }
                return n.\u0275fac = function(t) {
                    return new(t || n)(l.Y36(l.Rgc))
                }, n.\u0275dir = l.lG2({
                    type: n,
                    selectors: [
                        ["ng-template", "cdkDragPlaceholder", ""]
                    ],
                    inputs: {
                        data: "data"
                    },
                    standalone: !0,
                    features: [l._Bn([{
                        provide: Dt,
                        useExisting: n
                    }])]
                }), n
            })();
            const St = new l.OlP("CdkDragPreview");
            let bt = (() => {
                    class n {
                        get disabled() {
                            return this._disabled || this.dropContainer && this.dropContainer.disabled
                        }
                        set disabled(t) {
                            this._disabled = (0, g.Ig)(t), this._dragRef.disabled = this._disabled
                        }
                        constructor(t, i, s, r, o, a, h, c, d, u, f) {
                            this.element = t, this.dropContainer = i, this._ngZone = r, this._viewContainerRef = o, this._dir = h, this._changeDetectorRef = d, this._selfHandle = u, this._parentDrag = f, this._destroyed = new p.x, this.started = new l.vpe, this.released = new l.vpe, this.ended = new l.vpe, this.entered = new l.vpe, this.exited = new l.vpe, this.dropped = new l.vpe, this.moved = new K.y(v => {
                                const S = this._dragRef.moved.pipe((0, It.U)(P => ({
                                    source: this,
                                    pointerPosition: P.pointerPosition,
                                    event: P.event,
                                    delta: P.delta,
                                    distance: P.distance
                                }))).subscribe(v);
                                return () => {
                                    S.unsubscribe()
                                }
                            }), this._dragRef = c.createDrag(t, {
                                dragStartThreshold: a && null != a.dragStartThreshold ? a.dragStartThreshold : 5,
                                pointerDirectionChangeThreshold: a && null != a.pointerDirectionChangeThreshold ? a.pointerDirectionChangeThreshold : 5,
                                zIndex: a ? .zIndex
                            }), this._dragRef.data = this, n._dragInstances.push(this), a && this._assignDefaults(a), i && (this._dragRef._withDropContainer(i._dropListRef), i.addItem(this)), this._syncInputs(this._dragRef), this._handleEvents(this._dragRef)
                        }
                        getPlaceholderElement() {
                            return this._dragRef.getPlaceholderElement()
                        }
                        getRootElement() {
                            return this._dragRef.getRootElement()
                        }
                        reset() {
                            this._dragRef.reset()
                        }
                        getFreeDragPosition() {
                            return this._dragRef.getFreeDragPosition()
                        }
                        setFreeDragPosition(t) {
                            this._dragRef.setFreeDragPosition(t)
                        }
                        ngAfterViewInit() {
                            this._ngZone.runOutsideAngular(() => {
                                this._ngZone.onStable.pipe((0, W.q)(1), (0, E.R)(this._destroyed)).subscribe(() => {
                                    this._updateRootElement(), this._setupHandlesListener(), this.freeDragPosition && this._dragRef.setFreeDragPosition(this.freeDragPosition)
                                })
                            })
                        }
                        ngOnChanges(t) {
                            const i = t.rootElementSelector,
                                s = t.freeDragPosition;
                            i && !i.firstChange && this._updateRootElement(), s && !s.firstChange && this.freeDragPosition && this._dragRef.setFreeDragPosition(this.freeDragPosition)
                        }
                        ngOnDestroy() {
                            this.dropContainer && this.dropContainer.removeItem(this);
                            const t = n._dragInstances.indexOf(this);
                            t > -1 && n._dragInstances.splice(t, 1), this._ngZone.runOutsideAngular(() => {
                                this._destroyed.next(), this._destroyed.complete(), this._dragRef.dispose()
                            })
                        }
                        _updateRootElement() {
                            const t = this.element.nativeElement;
                            let i = t;
                            this.rootElementSelector && (i = void 0 !== t.closest ? t.closest(this.rootElementSelector) : t.parentElement ? .closest(this.rootElementSelector)), this._dragRef.withRootElement(i || t)
                        }
                        _getBoundaryElement() {
                            const t = this.boundaryElement;
                            return t ? "string" == typeof t ? this.element.nativeElement.closest(t) : (0, g.fI)(t) : null
                        }
                        _syncInputs(t) {
                            t.beforeStarted.subscribe(() => {
                                if (!t.isDragging()) {
                                    const i = this._dir,
                                        s = this.dragStartDelay,
                                        r = this._placeholderTemplate ? {
                                            template: this._placeholderTemplate.templateRef,
                                            context: this._placeholderTemplate.data,
                                            viewContainer: this._viewContainerRef
                                        } : null,
                                        o = this._previewTemplate ? {
                                            template: this._previewTemplate.templateRef,
                                            context: this._previewTemplate.data,
                                            matchSize: this._previewTemplate.matchSize,
                                            viewContainer: this._viewContainerRef
                                        } : null;
                                    t.disabled = this.disabled, t.lockAxis = this.lockAxis, t.dragStartDelay = "object" == typeof s && s ? s : (0, g.su)(s), t.constrainPosition = this.constrainPosition, t.previewClass = this.previewClass, t.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(r).withPreviewTemplate(o).withPreviewContainer(this.previewContainer || "global"), i && t.withDirection(i.value)
                                }
                            }), t.beforeStarted.pipe((0, W.q)(1)).subscribe(() => {
                                if (this._parentDrag) return void t.withParent(this._parentDrag._dragRef);
                                let i = this.element.nativeElement.parentElement;
                                for (; i;) {
                                    if (i.classList.contains("cdk-drag")) {
                                        t.withParent(n._dragInstances.find(s => s.element.nativeElement === i) ? ._dragRef || null);
                                        break
                                    }
                                    i = i.parentElement
                                }
                            })
                        }
                        _handleEvents(t) {
                            t.started.subscribe(i => {
                                this.started.emit({
                                    source: this,
                                    event: i.event
                                }), this._changeDetectorRef.markForCheck()
                            }), t.released.subscribe(i => {
                                this.released.emit({
                                    source: this,
                                    event: i.event
                                })
                            }), t.ended.subscribe(i => {
                                this.ended.emit({
                                    source: this,
                                    distance: i.distance,
                                    dropPoint: i.dropPoint,
                                    event: i.event
                                }), this._changeDetectorRef.markForCheck()
                            }), t.entered.subscribe(i => {
                                this.entered.emit({
                                    container: i.container.data,
                                    item: this,
                                    currentIndex: i.currentIndex
                                })
                            }), t.exited.subscribe(i => {
                                this.exited.emit({
                                    container: i.container.data,
                                    item: this
                                })
                            }), t.dropped.subscribe(i => {
                                this.dropped.emit({
                                    previousIndex: i.previousIndex,
                                    currentIndex: i.currentIndex,
                                    previousContainer: i.previousContainer.data,
                                    container: i.container.data,
                                    isPointerOverContainer: i.isPointerOverContainer,
                                    item: this,
                                    distance: i.distance,
                                    dropPoint: i.dropPoint,
                                    event: i.event
                                })
                            })
                        }
                        _assignDefaults(t) {
                            const {
                                lockAxis: i,
                                dragStartDelay: s,
                                constrainPosition: r,
                                previewClass: o,
                                boundaryElement: a,
                                draggingDisabled: h,
                                rootElementSelector: c,
                                previewContainer: d
                            } = t;
                            this.disabled = h ? ? !1, this.dragStartDelay = s || 0, i && (this.lockAxis = i), r && (this.constrainPosition = r), o && (this.previewClass = o), a && (this.boundaryElement = a), c && (this.rootElementSelector = c), d && (this.previewContainer = d)
                        }
                        _setupHandlesListener() {
                            this._handles.changes.pipe((0, A.O)(this._handles), (0, Tt.b)(t => {
                                const i = t.filter(s => s._parentDrag === this).map(s => s.element);
                                this._selfHandle && this.rootElementSelector && i.push(this.element), this._dragRef.withHandles(i)
                            }), (0, kt.w)(t => (0, M.T)(...t.map(i => i._stateChanges.pipe((0, A.O)(i))))), (0, E.R)(this._destroyed)).subscribe(t => {
                                const i = this._dragRef,
                                    s = t.element.nativeElement;
                                t.disabled ? i.disableHandle(s) : i.enableHandle(s)
                            })
                        }
                    }
                    return n._dragInstances = [], n.\u0275fac = function(t) {
                        return new(t || n)(l.Y36(l.SBq), l.Y36(ut, 12), l.Y36(L.K0), l.Y36(l.R0b), l.Y36(l.s_b), l.Y36(_t, 8), l.Y36(j.Is, 8), l.Y36(B), l.Y36(l.sBO), l.Y36(Z, 10), l.Y36(V, 12))
                    }, n.\u0275dir = l.lG2({
                        type: n,
                        selectors: [
                            ["", "cdkDrag", ""]
                        ],
                        contentQueries: function(t, i, s) {
                            if (1 & t && (l.Suo(s, St, 5), l.Suo(s, Dt, 5), l.Suo(s, Z, 5)), 2 & t) {
                                let r;
                                l.iGM(r = l.CRH()) && (i._previewTemplate = r.first), l.iGM(r = l.CRH()) && (i._placeholderTemplate = r.first), l.iGM(r = l.CRH()) && (i._handles = r)
                            }
                        },
                        hostAttrs: [1, "cdk-drag"],
                        hostVars: 4,
                        hostBindings: function(t, i) {
                            2 & t && l.ekj("cdk-drag-disabled", i.disabled)("cdk-drag-dragging", i._dragRef.isDragging())
                        },
                        inputs: {
                            data: ["cdkDragData", "data"],
                            lockAxis: ["cdkDragLockAxis", "lockAxis"],
                            rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
                            boundaryElement: ["cdkDragBoundary", "boundaryElement"],
                            dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
                            freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"],
                            disabled: ["cdkDragDisabled", "disabled"],
                            constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"],
                            previewClass: ["cdkDragPreviewClass", "previewClass"],
                            previewContainer: ["cdkDragPreviewContainer", "previewContainer"]
                        },
                        outputs: {
                            started: "cdkDragStarted",
                            released: "cdkDragReleased",
                            ended: "cdkDragEnded",
                            entered: "cdkDragEntered",
                            exited: "cdkDragExited",
                            dropped: "cdkDragDropped",
                            moved: "cdkDragMoved"
                        },
                        exportAs: ["cdkDrag"],
                        standalone: !0,
                        features: [l._Bn([{
                            provide: V,
                            useExisting: n
                        }]), l.TTD]
                    }), n
                })(),
                Ut = (() => {
                    class n {}
                    return n.\u0275fac = function(t) {
                        return new(t || n)
                    }, n.\u0275mod = l.oAB({
                        type: n
                    }), n.\u0275inj = l.cJS({
                        providers: [B],
                        imports: [O.ZD]
                    }), n
                })()
        }
    }
]);