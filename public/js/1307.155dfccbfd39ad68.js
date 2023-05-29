"use strict";
(self.webpackChunkmain = self.webpackChunkmain || []).push([
    [1307], {
        4385: (he, L, s) => {
            s.d(L, {
                $L: () => ie,
                LD: () => ae,
                gD: () => ne
            });
            var m = s(8184),
                f = s(6895),
                t = s(4650),
                o = s(3238),
                C = s(9549),
                E = s(7376),
                D = s(2687),
                B = s(445),
                y = s(1281),
                K = s(5017),
                c = s(9521),
                v = s(4006),
                b = s(7579),
                F = s(9770),
                M = s(6451),
                I = s(8675),
                w = s(3900),
                T = s(5698),
                x = s(9300),
                A = s(4004),
                W = s(1884),
                g = s(2722),
                d = s(7340);
            const V = ["trigger"],
                U = ["panel"];

            function H(a, l) {
                if (1 & a && (t.TgZ(0, "span", 10), t._uU(1), t.qZA()), 2 & a) {
                    const e = t.oxw();
                    t.xp6(1), t.Oqu(e.placeholder)
                }
            }

            function Y(a, l) {
                if (1 & a && (t.TgZ(0, "span", 14), t._uU(1), t.qZA()), 2 & a) {
                    const e = t.oxw(2);
                    t.xp6(1), t.Oqu(e.triggerValue)
                }
            }

            function G(a, l) {
                1 & a && t.Hsn(0, 0, ["*ngSwitchCase", "true"])
            }

            function j(a, l) {
                if (1 & a && (t.TgZ(0, "span", 11), t.YNc(1, Y, 2, 1, "span", 12), t.YNc(2, G, 1, 0, "ng-content", 13), t.qZA()), 2 & a) {
                    const e = t.oxw();
                    t.Q6J("ngSwitch", !!e.customTrigger), t.xp6(2), t.Q6J("ngSwitchCase", !0)
                }
            }

            function N(a, l) {
                if (1 & a) {
                    const e = t.EpF();
                    t.O4$(), t.kcU(), t.TgZ(0, "div", 15, 16), t.NdJ("@transformPanel.done", function(n) {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r._panelDoneAnimatingStream.next(n.toState))
                    })("keydown", function(n) {
                        t.CHM(e);
                        const r = t.oxw();
                        return t.KtG(r._handleKeydown(n))
                    }), t.Hsn(2, 1), t.qZA()
                }
                if (2 & a) {
                    const e = t.oxw();
                    t.Gre("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ", e._getPanelTheme(), ""), t.Q6J("ngClass", e.panelClass)("@transformPanel", "showing"), t.uIk("id", e.id + "-panel")("aria-multiselectable", e.multiple)("aria-label", e.ariaLabel || null)("aria-labelledby", e._getPanelAriaLabelledby())
                }
            }
            const Z = [
                    [
                        ["mat-select-trigger"]
                    ], "*"
                ],
                z = ["mat-select-trigger", "*"],
                J = {
                    transformPanelWrap: (0, d.X$)("transformPanelWrap", [(0, d.eR)("* => void", (0, d.IO)("@transformPanel", [(0, d.pV)()], {
                        optional: !0
                    }))]),
                    transformPanel: (0, d.X$)("transformPanel", [(0, d.SB)("void", (0, d.oB)({
                        opacity: 0,
                        transform: "scale(1, 0.8)"
                    })), (0, d.eR)("void => showing", (0, d.jt)("120ms cubic-bezier(0, 0, 0.2, 1)", (0, d.oB)({
                        opacity: 1,
                        transform: "scale(1, 1)"
                    }))), (0, d.eR)("* => void", (0, d.jt)("100ms linear", (0, d.oB)({
                        opacity: 0
                    })))])
                };
            let k = 0;
            const R = new t.OlP("mat-select-scroll-strategy"),
                $ = new t.OlP("MAT_SELECT_CONFIG"),
                X = {
                    provide: R,
                    deps: [m.aV],
                    useFactory: function Q(a) {
                        return () => a.scrollStrategies.reposition()
                    }
                },
                P = new t.OlP("MatSelectTrigger");
            class q {
                constructor(l, e) {
                    this.source = l, this.value = e
                }
            }
            const ee = (0, o.Kr)((0, o.sb)((0, o.Id)((0, o.FD)(class {
                constructor(a, l, e, i, n) {
                    this._elementRef = a, this._defaultErrorStateMatcher = l, this._parentForm = e, this._parentFormGroup = i, this.ngControl = n, this.stateChanges = new b.x
                }
            }))));
            let te = (() => {
                    class a extends ee {
                        get focused() {
                            return this._focused || this._panelOpen
                        }
                        get placeholder() {
                            return this._placeholder
                        }
                        set placeholder(e) {
                            this._placeholder = e, this.stateChanges.next()
                        }
                        get required() {
                            return this._required ? ? this.ngControl ? .control ? .hasValidator(v.kI.required) ? ? !1
                        }
                        set required(e) {
                            this._required = (0, y.Ig)(e), this.stateChanges.next()
                        }
                        get multiple() {
                            return this._multiple
                        }
                        set multiple(e) {
                            this._multiple = (0, y.Ig)(e)
                        }
                        get disableOptionCentering() {
                            return this._disableOptionCentering
                        }
                        set disableOptionCentering(e) {
                            this._disableOptionCentering = (0, y.Ig)(e)
                        }
                        get compareWith() {
                            return this._compareWith
                        }
                        set compareWith(e) {
                            this._compareWith = e, this._selectionModel && this._initializeSelection()
                        }
                        get value() {
                            return this._value
                        }
                        set value(e) {
                            this._assignValue(e) && this._onChange(e)
                        }
                        get typeaheadDebounceInterval() {
                            return this._typeaheadDebounceInterval
                        }
                        set typeaheadDebounceInterval(e) {
                            this._typeaheadDebounceInterval = (0, y.su)(e)
                        }
                        get id() {
                            return this._id
                        }
                        set id(e) {
                            this._id = e || this._uid, this.stateChanges.next()
                        }
                        constructor(e, i, n, r, p, u, h, se, le, re, oe, ce, de, O) {
                            super(p, r, h, se, re), this._viewportRuler = e, this._changeDetectorRef = i, this._ngZone = n, this._dir = u, this._parentFormField = le, this._liveAnnouncer = de, this._defaultOptions = O, this._panelOpen = !1, this._compareWith = (_, S) => _ === S, this._uid = "mat-select-" + k++, this._triggerAriaLabelledBy = null, this._destroy = new b.x, this._onChange = () => {}, this._onTouched = () => {}, this._valueId = "mat-select-value-" + k++, this._panelDoneAnimatingStream = new b.x, this._overlayPanelClass = this._defaultOptions ? .overlayPanelClass || "", this._focused = !1, this.controlType = "mat-select", this._multiple = !1, this._disableOptionCentering = this._defaultOptions ? .disableOptionCentering ? ? !1, this.ariaLabel = "", this.optionSelectionChanges = (0, F.P)(() => {
                                const _ = this.options;
                                return _ ? _.changes.pipe((0, I.O)(_), (0, w.w)(() => (0, M.T)(..._.map(S => S.onSelectionChange)))) : this._ngZone.onStable.pipe((0, T.q)(1), (0, w.w)(() => this.optionSelectionChanges))
                            }), this.openedChange = new t.vpe, this._openedStream = this.openedChange.pipe((0, x.h)(_ => _), (0, A.U)(() => {})), this._closedStream = this.openedChange.pipe((0, x.h)(_ => !_), (0, A.U)(() => {})), this.selectionChange = new t.vpe, this.valueChange = new t.vpe, this.ngControl && (this.ngControl.valueAccessor = this), null != O ? .typeaheadDebounceInterval && (this._typeaheadDebounceInterval = O.typeaheadDebounceInterval), this._scrollStrategyFactory = ce, this._scrollStrategy = this._scrollStrategyFactory(), this.tabIndex = parseInt(oe) || 0, this.id = this.id
                        }
                        ngOnInit() {
                            this._selectionModel = new K.Ov(this.multiple), this.stateChanges.next(), this._panelDoneAnimatingStream.pipe((0, W.x)(), (0, g.R)(this._destroy)).subscribe(() => this._panelDoneAnimating(this.panelOpen))
                        }
                        ngAfterContentInit() {
                            this._initKeyManager(), this._selectionModel.changed.pipe((0, g.R)(this._destroy)).subscribe(e => {
                                e.added.forEach(i => i.select()), e.removed.forEach(i => i.deselect())
                            }), this.options.changes.pipe((0, I.O)(null), (0, g.R)(this._destroy)).subscribe(() => {
                                this._resetOptions(), this._initializeSelection()
                            })
                        }
                        ngDoCheck() {
                            const e = this._getTriggerAriaLabelledby(),
                                i = this.ngControl;
                            if (e !== this._triggerAriaLabelledBy) {
                                const n = this._elementRef.nativeElement;
                                this._triggerAriaLabelledBy = e, e ? n.setAttribute("aria-labelledby", e) : n.removeAttribute("aria-labelledby")
                            }
                            i && (this._previousControl !== i.control && (void 0 !== this._previousControl && null !== i.disabled && i.disabled !== this.disabled && (this.disabled = i.disabled), this._previousControl = i.control), this.updateErrorState())
                        }
                        ngOnChanges(e) {
                            (e.disabled || e.userAriaDescribedBy) && this.stateChanges.next(), e.typeaheadDebounceInterval && this._keyManager && this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)
                        }
                        ngOnDestroy() {
                            this._keyManager ? .destroy(), this._destroy.next(), this._destroy.complete(), this.stateChanges.complete()
                        }
                        toggle() {
                            this.panelOpen ? this.close() : this.open()
                        }
                        open() {
                            this._canOpen() && (this._panelOpen = !0, this._keyManager.withHorizontalOrientation(null), this._highlightCorrectOption(), this._changeDetectorRef.markForCheck())
                        }
                        close() {
                            this._panelOpen && (this._panelOpen = !1, this._keyManager.withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr"), this._changeDetectorRef.markForCheck(), this._onTouched())
                        }
                        writeValue(e) {
                            this._assignValue(e)
                        }
                        registerOnChange(e) {
                            this._onChange = e
                        }
                        registerOnTouched(e) {
                            this._onTouched = e
                        }
                        setDisabledState(e) {
                            this.disabled = e, this._changeDetectorRef.markForCheck(), this.stateChanges.next()
                        }
                        get panelOpen() {
                            return this._panelOpen
                        }
                        get selected() {
                            return this.multiple ? this._selectionModel ? .selected || [] : this._selectionModel ? .selected[0]
                        }
                        get triggerValue() {
                            if (this.empty) return "";
                            if (this._multiple) {
                                const e = this._selectionModel.selected.map(i => i.viewValue);
                                return this._isRtl() && e.reverse(), e.join(", ")
                            }
                            return this._selectionModel.selected[0].viewValue
                        }
                        _isRtl() {
                            return !!this._dir && "rtl" === this._dir.value
                        }
                        _handleKeydown(e) {
                            this.disabled || (this.panelOpen ? this._handleOpenKeydown(e) : this._handleClosedKeydown(e))
                        }
                        _handleClosedKeydown(e) {
                            const i = e.keyCode,
                                n = i === c.JH || i === c.LH || i === c.oh || i === c.SV,
                                r = i === c.K5 || i === c.L_,
                                p = this._keyManager;
                            if (!p.isTyping() && r && !(0, c.Vb)(e) || (this.multiple || e.altKey) && n) e.preventDefault(), this.open();
                            else if (!this.multiple) {
                                const u = this.selected;
                                p.onKeydown(e);
                                const h = this.selected;
                                h && u !== h && this._liveAnnouncer.announce(h.viewValue, 1e4)
                            }
                        }
                        _handleOpenKeydown(e) {
                            const i = this._keyManager,
                                n = e.keyCode,
                                r = n === c.JH || n === c.LH,
                                p = i.isTyping();
                            if (r && e.altKey) e.preventDefault(), this.close();
                            else if (p || n !== c.K5 && n !== c.L_ || !i.activeItem || (0, c.Vb)(e))
                                if (!p && this._multiple && n === c.A && e.ctrlKey) {
                                    e.preventDefault();
                                    const u = this.options.some(h => !h.disabled && !h.selected);
                                    this.options.forEach(h => {
                                        h.disabled || (u ? h.select() : h.deselect())
                                    })
                                } else {
                                    const u = i.activeItemIndex;
                                    i.onKeydown(e), this._multiple && r && e.shiftKey && i.activeItem && i.activeItemIndex !== u && i.activeItem._selectViaInteraction()
                                }
                            else e.preventDefault(), i.activeItem._selectViaInteraction()
                        }
                        _onFocus() {
                            this.disabled || (this._focused = !0, this.stateChanges.next())
                        }
                        _onBlur() {
                            this._focused = !1, this._keyManager ? .cancelTypeahead(), !this.disabled && !this.panelOpen && (this._onTouched(), this._changeDetectorRef.markForCheck(), this.stateChanges.next())
                        }
                        _onAttached() {
                            this._overlayDir.positionChange.pipe((0, T.q)(1)).subscribe(() => {
                                this._changeDetectorRef.detectChanges(), this._positioningSettled()
                            })
                        }
                        _getPanelTheme() {
                            return this._parentFormField ? `mat-${this._parentFormField.color}` : ""
                        }
                        get empty() {
                            return !this._selectionModel || this._selectionModel.isEmpty()
                        }
                        _initializeSelection() {
                            Promise.resolve().then(() => {
                                this.ngControl && (this._value = this.ngControl.value), this._setSelectionByValue(this._value), this.stateChanges.next()
                            })
                        }
                        _setSelectionByValue(e) {
                            if (this.options.forEach(i => i.setInactiveStyles()), this._selectionModel.clear(), this.multiple && e) Array.isArray(e), e.forEach(i => this._selectOptionByValue(i)), this._sortValues();
                            else {
                                const i = this._selectOptionByValue(e);
                                i ? this._keyManager.updateActiveItem(i) : this.panelOpen || this._keyManager.updateActiveItem(-1)
                            }
                            this._changeDetectorRef.markForCheck()
                        }
                        _selectOptionByValue(e) {
                            const i = this.options.find(n => {
                                if (this._selectionModel.isSelected(n)) return !1;
                                try {
                                    return null != n.value && this._compareWith(n.value, e)
                                } catch {
                                    return !1
                                }
                            });
                            return i && this._selectionModel.select(i), i
                        }
                        _assignValue(e) {
                            return !!(e !== this._value || this._multiple && Array.isArray(e)) && (this.options && this._setSelectionByValue(e), this._value = e, !0)
                        }
                        _initKeyManager() {
                            this._keyManager = new D.s1(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]), this._keyManager.tabOut.subscribe(() => {
                                this.panelOpen && (!this.multiple && this._keyManager.activeItem && this._keyManager.activeItem._selectViaInteraction(), this.focus(), this.close())
                            }), this._keyManager.change.subscribe(() => {
                                this._panelOpen && this.panel ? this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0) : !this._panelOpen && !this.multiple && this._keyManager.activeItem && this._keyManager.activeItem._selectViaInteraction()
                            })
                        }
                        _resetOptions() {
                            const e = (0, M.T)(this.options.changes, this._destroy);
                            this.optionSelectionChanges.pipe((0, g.R)(e)).subscribe(i => {
                                this._onSelect(i.source, i.isUserInput), i.isUserInput && !this.multiple && this._panelOpen && (this.close(), this.focus())
                            }), (0, M.T)(...this.options.map(i => i._stateChanges)).pipe((0, g.R)(e)).subscribe(() => {
                                this._changeDetectorRef.detectChanges(), this.stateChanges.next()
                            })
                        }
                        _onSelect(e, i) {
                            const n = this._selectionModel.isSelected(e);
                            null != e.value || this._multiple ? (n !== e.selected && (e.selected ? this._selectionModel.select(e) : this._selectionModel.deselect(e)), i && this._keyManager.setActiveItem(e), this.multiple && (this._sortValues(), i && this.focus())) : (e.deselect(), this._selectionModel.clear(), null != this.value && this._propagateChanges(e.value)), n !== this._selectionModel.isSelected(e) && this._propagateChanges(), this.stateChanges.next()
                        }
                        _sortValues() {
                            if (this.multiple) {
                                const e = this.options.toArray();
                                this._selectionModel.sort((i, n) => this.sortComparator ? this.sortComparator(i, n, e) : e.indexOf(i) - e.indexOf(n)), this.stateChanges.next()
                            }
                        }
                        _propagateChanges(e) {
                            let i = null;
                            i = this.multiple ? this.selected.map(n => n.value) : this.selected ? this.selected.value : e, this._value = i, this.valueChange.emit(i), this._onChange(i), this.selectionChange.emit(this._getChangeEvent(i)), this._changeDetectorRef.markForCheck()
                        }
                        _highlightCorrectOption() {
                            this._keyManager && (this.empty ? this._keyManager.setFirstItemActive() : this._keyManager.setActiveItem(this._selectionModel.selected[0]))
                        }
                        _canOpen() {
                            return !this._panelOpen && !this.disabled && this.options ? .length > 0
                        }
                        focus(e) {
                            this._elementRef.nativeElement.focus(e)
                        }
                        _getPanelAriaLabelledby() {
                            if (this.ariaLabel) return null;
                            const e = this._parentFormField ? .getLabelId();
                            return this.ariaLabelledby ? (e ? e + " " : "") + this.ariaLabelledby : e
                        }
                        _getAriaActiveDescendant() {
                            return this.panelOpen && this._keyManager && this._keyManager.activeItem ? this._keyManager.activeItem.id : null
                        }
                        _getTriggerAriaLabelledby() {
                            if (this.ariaLabel) return null;
                            const e = this._parentFormField ? .getLabelId();
                            let i = (e ? e + " " : "") + this._valueId;
                            return this.ariaLabelledby && (i += " " + this.ariaLabelledby), i
                        }
                        _panelDoneAnimating(e) {
                            this.openedChange.emit(e)
                        }
                        setDescribedByIds(e) {
                            e.length ? this._elementRef.nativeElement.setAttribute("aria-describedby", e.join(" ")) : this._elementRef.nativeElement.removeAttribute("aria-describedby")
                        }
                        onContainerClick() {
                            this.focus(), this.open()
                        }
                        get shouldLabelFloat() {
                            return this._panelOpen || !this.empty || this._focused && !!this._placeholder
                        }
                    }
                    return a.\u0275fac = function(e) {
                        return new(e || a)(t.Y36(E.rL), t.Y36(t.sBO), t.Y36(t.R0b), t.Y36(o.rD), t.Y36(t.SBq), t.Y36(B.Is, 8), t.Y36(v.F, 8), t.Y36(v.sg, 8), t.Y36(C.G_, 8), t.Y36(v.a5, 10), t.$8M("tabindex"), t.Y36(R), t.Y36(D.Kd), t.Y36($, 8))
                    }, a.\u0275dir = t.lG2({
                        type: a,
                        viewQuery: function(e, i) {
                            if (1 & e && (t.Gf(V, 5), t.Gf(U, 5), t.Gf(m.pI, 5)), 2 & e) {
                                let n;
                                t.iGM(n = t.CRH()) && (i.trigger = n.first), t.iGM(n = t.CRH()) && (i.panel = n.first), t.iGM(n = t.CRH()) && (i._overlayDir = n.first)
                            }
                        },
                        inputs: {
                            userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"],
                            panelClass: "panelClass",
                            placeholder: "placeholder",
                            required: "required",
                            multiple: "multiple",
                            disableOptionCentering: "disableOptionCentering",
                            compareWith: "compareWith",
                            value: "value",
                            ariaLabel: ["aria-label", "ariaLabel"],
                            ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
                            errorStateMatcher: "errorStateMatcher",
                            typeaheadDebounceInterval: "typeaheadDebounceInterval",
                            sortComparator: "sortComparator",
                            id: "id"
                        },
                        outputs: {
                            openedChange: "openedChange",
                            _openedStream: "opened",
                            _closedStream: "closed",
                            selectionChange: "selectionChange",
                            valueChange: "valueChange"
                        },
                        features: [t.qOj, t.TTD]
                    }), a
                })(),
                ie = (() => {
                    class a {}
                    return a.\u0275fac = function(e) {
                        return new(e || a)
                    }, a.\u0275dir = t.lG2({
                        type: a,
                        selectors: [
                            ["mat-select-trigger"]
                        ],
                        features: [t._Bn([{
                            provide: P,
                            useExisting: a
                        }])]
                    }), a
                })(),
                ne = (() => {
                    class a extends te {
                        constructor() {
                            super(...arguments), this._positions = [{
                                originX: "start",
                                originY: "bottom",
                                overlayX: "start",
                                overlayY: "top"
                            }, {
                                originX: "start",
                                originY: "top",
                                overlayX: "start",
                                overlayY: "bottom",
                                panelClass: "mat-mdc-select-panel-above"
                            }], this._hideSingleSelectionIndicator = this._defaultOptions ? .hideSingleSelectionIndicator ? ? !1
                        }
                        get shouldLabelFloat() {
                            return this.panelOpen || !this.empty || this.focused && !!this.placeholder
                        }
                        ngOnInit() {
                            super.ngOnInit(), this._viewportRuler.change().pipe((0, g.R)(this._destroy)).subscribe(() => {
                                this.panelOpen && (this._overlayWidth = this._getOverlayWidth(), this._changeDetectorRef.detectChanges())
                            })
                        }
                        ngAfterViewInit() {
                            this._parentFormField && (this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin())
                        }
                        open() {
                            this._overlayWidth = this._getOverlayWidth(), super.open(), this.stateChanges.next()
                        }
                        close() {
                            super.close(), this.stateChanges.next()
                        }
                        _scrollOptionIntoView(e) {
                            const i = this.options.toArray()[e];
                            if (i) {
                                const n = this.panel.nativeElement,
                                    r = (0, o.CB)(e, this.options, this.optionGroups),
                                    p = i._getHostElement();
                                n.scrollTop = 0 === e && 1 === r ? 0 : (0, o.jH)(p.offsetTop, p.offsetHeight, n.scrollTop, n.offsetHeight)
                            }
                        }
                        _positioningSettled() {
                            this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0)
                        }
                        _getChangeEvent(e) {
                            return new q(this, e)
                        }
                        _getOverlayWidth() {
                            return (this._preferredOverlayOrigin instanceof m.xu ? this._preferredOverlayOrigin.elementRef : this._preferredOverlayOrigin || this._elementRef).nativeElement.getBoundingClientRect().width
                        }
                        get hideSingleSelectionIndicator() {
                            return this._hideSingleSelectionIndicator
                        }
                        set hideSingleSelectionIndicator(e) {
                            this._hideSingleSelectionIndicator = (0, y.Ig)(e), this._syncParentProperties()
                        }
                        _syncParentProperties() {
                            if (this.options)
                                for (const e of this.options) e._changeDetectorRef.markForCheck()
                        }
                    }
                    return a.\u0275fac = function() {
                        let l;
                        return function(i) {
                            return (l || (l = t.n5z(a)))(i || a)
                        }
                    }(), a.\u0275cmp = t.Xpm({
                        type: a,
                        selectors: [
                            ["mat-select"]
                        ],
                        contentQueries: function(e, i, n) {
                            if (1 & e && (t.Suo(n, P, 5), t.Suo(n, o.ey, 5), t.Suo(n, o.K7, 5)), 2 & e) {
                                let r;
                                t.iGM(r = t.CRH()) && (i.customTrigger = r.first), t.iGM(r = t.CRH()) && (i.options = r), t.iGM(r = t.CRH()) && (i.optionGroups = r)
                            }
                        },
                        hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "listbox", 1, "mat-mdc-select"],
                        hostVars: 19,
                        hostBindings: function(e, i) {
                            1 & e && t.NdJ("keydown", function(r) {
                                return i._handleKeydown(r)
                            })("focus", function() {
                                return i._onFocus()
                            })("blur", function() {
                                return i._onBlur()
                            }), 2 & e && (t.uIk("id", i.id)("tabindex", i.tabIndex)("aria-controls", i.panelOpen ? i.id + "-panel" : null)("aria-expanded", i.panelOpen)("aria-label", i.ariaLabel || null)("aria-required", i.required.toString())("aria-disabled", i.disabled.toString())("aria-invalid", i.errorState)("aria-activedescendant", i._getAriaActiveDescendant()), t.ekj("mat-mdc-select-disabled", i.disabled)("mat-mdc-select-invalid", i.errorState)("mat-mdc-select-required", i.required)("mat-mdc-select-empty", i.empty)("mat-mdc-select-multiple", i.multiple))
                        },
                        inputs: {
                            disabled: "disabled",
                            disableRipple: "disableRipple",
                            tabIndex: "tabIndex",
                            hideSingleSelectionIndicator: "hideSingleSelectionIndicator"
                        },
                        exportAs: ["matSelect"],
                        features: [t._Bn([{
                            provide: C.Eo,
                            useExisting: a
                        }, {
                            provide: o.HF,
                            useExisting: a
                        }]), t.qOj],
                        ngContentSelectors: z,
                        decls: 11,
                        vars: 11,
                        consts: [
                            ["cdk-overlay-origin", "", 1, "mat-mdc-select-trigger", 3, "click"],
                            ["fallbackOverlayOrigin", "cdkOverlayOrigin", "trigger", ""],
                            [1, "mat-mdc-select-value", 3, "ngSwitch"],
                            ["class", "mat-mdc-select-placeholder mat-mdc-select-min-line", 4, "ngSwitchCase"],
                            ["class", "mat-mdc-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"],
                            [1, "mat-mdc-select-arrow-wrapper"],
                            [1, "mat-mdc-select-arrow"],
                            ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "focusable", "false"],
                            ["d", "M7 10l5 5 5-5z"],
                            ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayWidth", "backdropClick", "attach", "detach"],
                            [1, "mat-mdc-select-placeholder", "mat-mdc-select-min-line"],
                            [1, "mat-mdc-select-value-text", 3, "ngSwitch"],
                            ["class", "mat-mdc-select-min-line", 4, "ngSwitchDefault"],
                            [4, "ngSwitchCase"],
                            [1, "mat-mdc-select-min-line"],
                            ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"],
                            ["panel", ""]
                        ],
                        template: function(e, i) {
                            if (1 & e && (t.F$t(Z), t.TgZ(0, "div", 0, 1), t.NdJ("click", function() {
                                    return i.toggle()
                                }), t.TgZ(3, "div", 2), t.YNc(4, H, 2, 1, "span", 3), t.YNc(5, j, 3, 2, "span", 4), t.qZA(), t.TgZ(6, "div", 5)(7, "div", 6), t.O4$(), t.TgZ(8, "svg", 7), t._UZ(9, "path", 8), t.qZA()()()(), t.YNc(10, N, 3, 9, "ng-template", 9), t.NdJ("backdropClick", function() {
                                    return i.close()
                                })("attach", function() {
                                    return i._onAttached()
                                })("detach", function() {
                                    return i.close()
                                })), 2 & e) {
                                const n = t.MAs(1);
                                t.uIk("aria-owns", i.panelOpen ? i.id + "-panel" : null), t.xp6(3), t.Q6J("ngSwitch", i.empty), t.uIk("id", i._valueId), t.xp6(1), t.Q6J("ngSwitchCase", !0), t.xp6(1), t.Q6J("ngSwitchCase", !1), t.xp6(5), t.Q6J("cdkConnectedOverlayPanelClass", i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", i._scrollStrategy)("cdkConnectedOverlayOrigin", i._preferredOverlayOrigin || n)("cdkConnectedOverlayOpen", i.panelOpen)("cdkConnectedOverlayPositions", i._positions)("cdkConnectedOverlayWidth", i._overlayWidth)
                            }
                        },
                        dependencies: [f.mk, f.RF, f.n9, f.ED, m.pI, m.xu],
                        styles: ['.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.mat-mdc-select{display:inline-block;width:100%;outline:none}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:translateY(-8px)}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-select-arrow{width:10px;height:5px;position:relative}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}.mdc-menu-surface.mat-mdc-select-panel{width:100%;max-height:275px;position:static;outline:0;margin:0;padding:8px 0;list-style-type:none}.mdc-menu-surface.mat-mdc-select-panel:focus{outline:none}.cdk-high-contrast-active .mdc-menu-surface.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) .mdc-menu-surface.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above .mdc-menu-surface.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}'],
                        encapsulation: 2,
                        data: {
                            animation: [J.transformPanel]
                        },
                        changeDetection: 0
                    }), a
                })(),
                ae = (() => {
                    class a {}
                    return a.\u0275fac = function(e) {
                        return new(e || a)
                    }, a.\u0275mod = t.oAB({
                        type: a
                    }), a.\u0275inj = t.cJS({
                        providers: [X],
                        imports: [f.ez, m.U8, o.Ng, o.BQ, E.ZD, C.lN, o.Ng, o.BQ]
                    }), a
                })()
        }
    }
]);