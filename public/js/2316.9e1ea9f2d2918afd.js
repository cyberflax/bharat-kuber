"use strict";
(self.webpackChunkmain = self.webpackChunkmain || []).push([
    [2316], {
        8739: (Pe, ee, f) => {
            f.d(ee, {
                NW: () => re,
                TU: () => le
            });
            var a = f(6895),
                s = f(4650),
                O = f(7579),
                b = f(4859),
                U = f(4385),
                z = f(266),
                A = f(3238),
                v = f(1281),
                te = f(9549);

            function F(c, w) {
                if (1 & c && (s.TgZ(0, "mat-option", 19), s._uU(1), s.qZA()), 2 & c) {
                    const l = w.$implicit;
                    s.Q6J("value", l), s.xp6(1), s.hij(" ", l, " ")
                }
            }

            function ae(c, w) {
                if (1 & c) {
                    const l = s.EpF();
                    s.TgZ(0, "mat-form-field", 16)(1, "mat-select", 17), s.NdJ("selectionChange", function(_) {
                        s.CHM(l);
                        const R = s.oxw(2);
                        return s.KtG(R._changePageSize(_.value))
                    }), s.YNc(2, F, 2, 2, "mat-option", 18), s.qZA()()
                }
                if (2 & c) {
                    const l = s.oxw(2);
                    s.Q6J("appearance", l._formFieldAppearance)("color", l.color), s.xp6(1), s.Q6J("value", l.pageSize)("disabled", l.disabled)("aria-labelledby", l._pageSizeLabelId)("panelClass", l.selectConfig.panelClass || "")("disableOptionCentering", l.selectConfig.disableOptionCentering), s.xp6(1), s.Q6J("ngForOf", l._displayedPageSizeOptions)
                }
            }

            function I(c, w) {
                if (1 & c && (s.TgZ(0, "div", 20), s._uU(1), s.qZA()), 2 & c) {
                    const l = s.oxw(2);
                    s.xp6(1), s.Oqu(l.pageSize)
                }
            }

            function E(c, w) {
                if (1 & c && (s.TgZ(0, "div", 12)(1, "div", 13), s._uU(2), s.qZA(), s.YNc(3, ae, 3, 8, "mat-form-field", 14), s.YNc(4, I, 2, 1, "div", 15), s.qZA()), 2 & c) {
                    const l = s.oxw();
                    s.xp6(1), s.s9C("id", l._pageSizeLabelId), s.xp6(1), s.hij(" ", l._intl.itemsPerPageLabel, " "), s.xp6(1), s.Q6J("ngIf", l._displayedPageSizeOptions.length > 1), s.xp6(1), s.Q6J("ngIf", l._displayedPageSizeOptions.length <= 1)
                }
            }

            function j(c, w) {
                if (1 & c) {
                    const l = s.EpF();
                    s.TgZ(0, "button", 21), s.NdJ("click", function() {
                        s.CHM(l);
                        const _ = s.oxw();
                        return s.KtG(_.firstPage())
                    }), s.O4$(), s.TgZ(1, "svg", 7), s._UZ(2, "path", 22), s.qZA()()
                }
                if (2 & c) {
                    const l = s.oxw();
                    s.Q6J("matTooltip", l._intl.firstPageLabel)("matTooltipDisabled", l._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", l._previousButtonsDisabled()), s.uIk("aria-label", l._intl.firstPageLabel)
                }
            }

            function oe(c, w) {
                if (1 & c) {
                    const l = s.EpF();
                    s.O4$(), s.kcU(), s.TgZ(0, "button", 23), s.NdJ("click", function() {
                        s.CHM(l);
                        const _ = s.oxw();
                        return s.KtG(_.lastPage())
                    }), s.O4$(), s.TgZ(1, "svg", 7), s._UZ(2, "path", 24), s.qZA()()
                }
                if (2 & c) {
                    const l = s.oxw();
                    s.Q6J("matTooltip", l._intl.lastPageLabel)("matTooltipDisabled", l._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", l._nextButtonsDisabled()), s.uIk("aria-label", l._intl.lastPageLabel)
                }
            }
            let B = (() => {
                class c {
                    constructor() {
                        this.changes = new O.x, this.itemsPerPageLabel = "Items per page:", this.nextPageLabel = "Next page", this.previousPageLabel = "Previous page", this.firstPageLabel = "First page", this.lastPageLabel = "Last page", this.getRangeLabel = (l, h, _) => {
                            if (0 == _ || 0 == h) return `0 of ${_}`;
                            const R = l * h;
                            return `${R+1} \u2013 ${R<(_=Math.max(_,0))?Math.min(R+h,_):R+h} of ${_}`
                        }
                    }
                }
                return c.\u0275fac = function(l) {
                    return new(l || c)
                }, c.\u0275prov = s.Yz7({
                    token: c,
                    factory: c.\u0275fac,
                    providedIn: "root"
                }), c
            })();
            const ne = {
                    provide: B,
                    deps: [
                        [new s.FiY, new s.tp0, B]
                    ],
                    useFactory: function ie(c) {
                        return c || new B
                    }
                },
                se = new s.OlP("MAT_PAGINATOR_DEFAULT_OPTIONS"),
                k = (0, A.Id)((0, A.dB)(class {}));
            let M = (() => {
                    class c extends k {
                        get pageIndex() {
                            return this._pageIndex
                        }
                        set pageIndex(l) {
                            this._pageIndex = Math.max((0, v.su)(l), 0), this._changeDetectorRef.markForCheck()
                        }
                        get length() {
                            return this._length
                        }
                        set length(l) {
                            this._length = (0, v.su)(l), this._changeDetectorRef.markForCheck()
                        }
                        get pageSize() {
                            return this._pageSize
                        }
                        set pageSize(l) {
                            this._pageSize = Math.max((0, v.su)(l), 0), this._updateDisplayedPageSizeOptions()
                        }
                        get pageSizeOptions() {
                            return this._pageSizeOptions
                        }
                        set pageSizeOptions(l) {
                            this._pageSizeOptions = (l || []).map(h => (0, v.su)(h)), this._updateDisplayedPageSizeOptions()
                        }
                        get hidePageSize() {
                            return this._hidePageSize
                        }
                        set hidePageSize(l) {
                            this._hidePageSize = (0, v.Ig)(l)
                        }
                        get showFirstLastButtons() {
                            return this._showFirstLastButtons
                        }
                        set showFirstLastButtons(l) {
                            this._showFirstLastButtons = (0, v.Ig)(l)
                        }
                        constructor(l, h, _) {
                            if (super(), this._intl = l, this._changeDetectorRef = h, this._pageIndex = 0, this._length = 0, this._pageSizeOptions = [], this._hidePageSize = !1, this._showFirstLastButtons = !1, this.selectConfig = {}, this.page = new s.vpe, this._intlChanges = l.changes.subscribe(() => this._changeDetectorRef.markForCheck()), _) {
                                const {
                                    pageSize: R,
                                    pageSizeOptions: S,
                                    hidePageSize: H,
                                    showFirstLastButtons: de
                                } = _;
                                null != R && (this._pageSize = R), null != S && (this._pageSizeOptions = S), null != H && (this._hidePageSize = H), null != de && (this._showFirstLastButtons = de)
                            }
                        }
                        ngOnInit() {
                            this._initialized = !0, this._updateDisplayedPageSizeOptions(), this._markInitialized()
                        }
                        ngOnDestroy() {
                            this._intlChanges.unsubscribe()
                        }
                        nextPage() {
                            if (!this.hasNextPage()) return;
                            const l = this.pageIndex;
                            this.pageIndex = this.pageIndex + 1, this._emitPageEvent(l)
                        }
                        previousPage() {
                            if (!this.hasPreviousPage()) return;
                            const l = this.pageIndex;
                            this.pageIndex = this.pageIndex - 1, this._emitPageEvent(l)
                        }
                        firstPage() {
                            if (!this.hasPreviousPage()) return;
                            const l = this.pageIndex;
                            this.pageIndex = 0, this._emitPageEvent(l)
                        }
                        lastPage() {
                            if (!this.hasNextPage()) return;
                            const l = this.pageIndex;
                            this.pageIndex = this.getNumberOfPages() - 1, this._emitPageEvent(l)
                        }
                        hasPreviousPage() {
                            return this.pageIndex >= 1 && 0 != this.pageSize
                        }
                        hasNextPage() {
                            const l = this.getNumberOfPages() - 1;
                            return this.pageIndex < l && 0 != this.pageSize
                        }
                        getNumberOfPages() {
                            return this.pageSize ? Math.ceil(this.length / this.pageSize) : 0
                        }
                        _changePageSize(l) {
                            const _ = this.pageIndex;
                            this.pageIndex = Math.floor(this.pageIndex * this.pageSize / l) || 0, this.pageSize = l, this._emitPageEvent(_)
                        }
                        _nextButtonsDisabled() {
                            return this.disabled || !this.hasNextPage()
                        }
                        _previousButtonsDisabled() {
                            return this.disabled || !this.hasPreviousPage()
                        }
                        _updateDisplayedPageSizeOptions() {
                            this._initialized && (this.pageSize || (this._pageSize = 0 != this.pageSizeOptions.length ? this.pageSizeOptions[0] : 50), this._displayedPageSizeOptions = this.pageSizeOptions.slice(), -1 === this._displayedPageSizeOptions.indexOf(this.pageSize) && this._displayedPageSizeOptions.push(this.pageSize), this._displayedPageSizeOptions.sort((l, h) => l - h), this._changeDetectorRef.markForCheck())
                        }
                        _emitPageEvent(l) {
                            this.page.emit({
                                previousPageIndex: l,
                                pageIndex: this.pageIndex,
                                pageSize: this.pageSize,
                                length: this.length
                            })
                        }
                    }
                    return c.\u0275fac = function(l) {
                        s.$Z()
                    }, c.\u0275dir = s.lG2({
                        type: c,
                        inputs: {
                            color: "color",
                            pageIndex: "pageIndex",
                            length: "length",
                            pageSize: "pageSize",
                            pageSizeOptions: "pageSizeOptions",
                            hidePageSize: "hidePageSize",
                            showFirstLastButtons: "showFirstLastButtons",
                            selectConfig: "selectConfig"
                        },
                        outputs: {
                            page: "page"
                        },
                        features: [s.qOj]
                    }), c
                })(),
                N = 0,
                re = (() => {
                    class c extends M {
                        constructor(l, h, _) {
                            super(l, h, _), this._pageSizeLabelId = "mat-paginator-page-size-label-" + N++, this._formFieldAppearance = _ ? .formFieldAppearance || "outline"
                        }
                    }
                    return c.\u0275fac = function(l) {
                        return new(l || c)(s.Y36(B), s.Y36(s.sBO), s.Y36(se, 8))
                    }, c.\u0275cmp = s.Xpm({
                        type: c,
                        selectors: [
                            ["mat-paginator"]
                        ],
                        hostAttrs: ["role", "group", 1, "mat-mdc-paginator"],
                        inputs: {
                            disabled: "disabled"
                        },
                        exportAs: ["matPaginator"],
                        features: [s.qOj],
                        decls: 14,
                        vars: 14,
                        consts: [
                            [1, "mat-mdc-paginator-outer-container"],
                            [1, "mat-mdc-paginator-container"],
                            ["class", "mat-mdc-paginator-page-size", 4, "ngIf"],
                            [1, "mat-mdc-paginator-range-actions"],
                            ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"],
                            ["mat-icon-button", "", "type", "button", "class", "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"],
                            ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"],
                            ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-mdc-paginator-icon"],
                            ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],
                            ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"],
                            ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],
                            ["mat-icon-button", "", "type", "button", "class", "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"],
                            [1, "mat-mdc-paginator-page-size"],
                            [1, "mat-mdc-paginator-page-size-label", 3, "id"],
                            ["class", "mat-mdc-paginator-page-size-select", 3, "appearance", "color", 4, "ngIf"],
                            ["class", "mat-mdc-paginator-page-size-value", 4, "ngIf"],
                            [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"],
                            [3, "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering", "selectionChange"],
                            [3, "value", 4, "ngFor", "ngForOf"],
                            [3, "value"],
                            [1, "mat-mdc-paginator-page-size-value"],
                            ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"],
                            ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],
                            ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"],
                            ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]
                        ],
                        template: function(l, h) {
                            1 & l && (s.TgZ(0, "div", 0)(1, "div", 1), s.YNc(2, E, 5, 4, "div", 2), s.TgZ(3, "div", 3)(4, "div", 4), s._uU(5), s.qZA(), s.YNc(6, j, 3, 5, "button", 5), s.TgZ(7, "button", 6), s.NdJ("click", function() {
                                return h.previousPage()
                            }), s.O4$(), s.TgZ(8, "svg", 7), s._UZ(9, "path", 8), s.qZA()(), s.kcU(), s.TgZ(10, "button", 9), s.NdJ("click", function() {
                                return h.nextPage()
                            }), s.O4$(), s.TgZ(11, "svg", 7), s._UZ(12, "path", 10), s.qZA()(), s.YNc(13, oe, 3, 5, "button", 11), s.qZA()()()), 2 & l && (s.xp6(2), s.Q6J("ngIf", !h.hidePageSize), s.xp6(3), s.hij(" ", h._intl.getRangeLabel(h.pageIndex, h.pageSize, h.length), " "), s.xp6(1), s.Q6J("ngIf", h.showFirstLastButtons), s.xp6(1), s.Q6J("matTooltip", h._intl.previousPageLabel)("matTooltipDisabled", h._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", h._previousButtonsDisabled()), s.uIk("aria-label", h._intl.previousPageLabel), s.xp6(3), s.Q6J("matTooltip", h._intl.nextPageLabel)("matTooltipDisabled", h._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", h._nextButtonsDisabled()), s.uIk("aria-label", h._intl.nextPageLabel), s.xp6(3), s.Q6J("ngIf", h.showFirstLastButtons))
                        },
                        dependencies: [a.sg, a.O5, b.RK, te.KE, U.gD, A.ey, z.gM],
                        styles: [".mat-mdc-paginator{display:block}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"],
                        encapsulation: 2,
                        changeDetection: 0
                    }), c
                })(),
                le = (() => {
                    class c {}
                    return c.\u0275fac = function(l) {
                        return new(l || c)
                    }, c.\u0275mod = s.oAB({
                        type: c
                    }), c.\u0275inj = s.cJS({
                        providers: [ne],
                        imports: [a.ez, b.ot, U.LD, z.AV]
                    }), c
                })()
        },
        671: (Pe, ee, f) => {
            f.d(ee, {
                ev: () => De,
                Dz: () => ge,
                w1: () => be,
                ge: () => ye,
                fO: () => we,
                XQ: () => Te,
                as: () => Me,
                Gk: () => Oe,
                nj: () => Se,
                BZ: () => ke,
                by: () => et,
                p0: () => Xe
            });
            var a = f(4650),
                s = f(445),
                O = f(1281),
                b = f(5017),
                U = f(3353),
                z = f(7376),
                A = f(6895),
                v = f(7579),
                te = f(2076),
                F = f(1135),
                ae = f(5191),
                I = f(9646),
                E = f(2722),
                j = f(5698);
            const oe = [
                    [
                        ["caption"]
                    ],
                    [
                        ["colgroup"],
                        ["col"]
                    ]
                ],
                B = ["caption", "colgroup, col"];

            function L(t) {
                return class extends t {
                    get sticky() {
                        return this._sticky
                    }
                    set sticky(i) {
                        const e = this._sticky;
                        this._sticky = (0, O.Ig)(i), this._hasStickyChanged = e !== this._sticky
                    }
                    hasStickyChanged() {
                        const i = this._hasStickyChanged;
                        return this._hasStickyChanged = !1, i
                    }
                    resetStickyChanged() {
                        this._hasStickyChanged = !1
                    }
                    constructor(...i) {
                        super(...i), this._sticky = !1, this._hasStickyChanged = !1
                    }
                }
            }
            const P = new a.OlP("CDK_TABLE");
            let k = (() => {
                    class t {
                        constructor(e) {
                            this.template = e
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(a.Rgc))
                    }, t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "cdkCellDef", ""]
                        ]
                    }), t
                })(),
                M = (() => {
                    class t {
                        constructor(e) {
                            this.template = e
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(a.Rgc))
                    }, t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "cdkHeaderCellDef", ""]
                        ]
                    }), t
                })(),
                N = (() => {
                    class t {
                        constructor(e) {
                            this.template = e
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(a.Rgc))
                    }, t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "cdkFooterCellDef", ""]
                        ]
                    }), t
                })();
            class re {}
            const le = L(re);
            let c = (() => {
                class t extends le {
                    get name() {
                        return this._name
                    }
                    set name(e) {
                        this._setNameInput(e)
                    }
                    get stickyEnd() {
                        return this._stickyEnd
                    }
                    set stickyEnd(e) {
                        const o = this._stickyEnd;
                        this._stickyEnd = (0, O.Ig)(e), this._hasStickyChanged = o !== this._stickyEnd
                    }
                    constructor(e) {
                        super(), this._table = e, this._stickyEnd = !1
                    }
                    _updateColumnCssClassName() {
                        this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`]
                    }
                    _setNameInput(e) {
                        e && (this._name = e, this.cssClassFriendlyName = e.replace(/[^a-z0-9_-]/gi, "-"), this._updateColumnCssClassName())
                    }
                }
                return t.\u0275fac = function(e) {
                    return new(e || t)(a.Y36(P, 8))
                }, t.\u0275dir = a.lG2({
                    type: t,
                    selectors: [
                        ["", "cdkColumnDef", ""]
                    ],
                    contentQueries: function(e, o, n) {
                        if (1 & e && (a.Suo(n, k, 5), a.Suo(n, M, 5), a.Suo(n, N, 5)), 2 & e) {
                            let r;
                            a.iGM(r = a.CRH()) && (o.cell = r.first), a.iGM(r = a.CRH()) && (o.headerCell = r.first), a.iGM(r = a.CRH()) && (o.footerCell = r.first)
                        }
                    },
                    inputs: {
                        sticky: "sticky",
                        name: ["cdkColumnDef", "name"],
                        stickyEnd: "stickyEnd"
                    },
                    features: [a._Bn([{
                        provide: "MAT_SORT_HEADER_COLUMN_DEF",
                        useExisting: t
                    }]), a.qOj]
                }), t
            })();
            class w {
                constructor(i, e) {
                    e.nativeElement.classList.add(...i._columnCssClassName)
                }
            }
            let l = (() => {
                    class t extends w {
                        constructor(e, o) {
                            super(e, o)
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(c), a.Y36(a.SBq))
                    }, t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["cdk-header-cell"],
                            ["th", "cdk-header-cell", ""]
                        ],
                        hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
                        features: [a.qOj]
                    }), t
                })(),
                _ = (() => {
                    class t extends w {
                        constructor(e, o) {
                            if (super(e, o), 1 === e._table ? ._elementRef.nativeElement.nodeType) {
                                const n = e._table._elementRef.nativeElement.getAttribute("role");
                                o.nativeElement.setAttribute("role", "grid" === n || "treegrid" === n ? "gridcell" : "cell")
                            }
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(c), a.Y36(a.SBq))
                    }, t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["cdk-cell"],
                            ["td", "cdk-cell", ""]
                        ],
                        hostAttrs: [1, "cdk-cell"],
                        features: [a.qOj]
                    }), t
                })();
            class R {
                constructor() {
                    this.tasks = [], this.endTasks = []
                }
            }
            const S = new a.OlP("_COALESCED_STYLE_SCHEDULER");
            let H = (() => {
                    class t {
                        constructor(e) {
                            this._ngZone = e, this._currentSchedule = null, this._destroyed = new v.x
                        }
                        schedule(e) {
                            this._createScheduleIfNeeded(), this._currentSchedule.tasks.push(e)
                        }
                        scheduleEnd(e) {
                            this._createScheduleIfNeeded(), this._currentSchedule.endTasks.push(e)
                        }
                        ngOnDestroy() {
                            this._destroyed.next(), this._destroyed.complete()
                        }
                        _createScheduleIfNeeded() {
                            this._currentSchedule || (this._currentSchedule = new R, this._getScheduleObservable().pipe((0, E.R)(this._destroyed)).subscribe(() => {
                                for (; this._currentSchedule.tasks.length || this._currentSchedule.endTasks.length;) {
                                    const e = this._currentSchedule;
                                    this._currentSchedule = new R;
                                    for (const o of e.tasks) o();
                                    for (const o of e.endTasks) o()
                                }
                                this._currentSchedule = null
                            }))
                        }
                        _getScheduleObservable() {
                            return this._ngZone.isStable ? (0, te.D)(Promise.resolve(void 0)) : this._ngZone.onStable.pipe((0, j.q)(1))
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.LFG(a.R0b))
                    }, t.\u0275prov = a.Yz7({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })(),
                ce = (() => {
                    class t {
                        constructor(e, o) {
                            this.template = e, this._differs = o
                        }
                        ngOnChanges(e) {
                            if (!this._columnsDiffer) {
                                const o = e.columns && e.columns.currentValue || [];
                                this._columnsDiffer = this._differs.find(o).create(), this._columnsDiffer.diff(o)
                            }
                        }
                        getColumnsDiff() {
                            return this._columnsDiffer.diff(this.columns)
                        }
                        extractCellTemplate(e) {
                            return this instanceof G ? e.headerCell.template : this instanceof Y ? e.footerCell.template : e.cell.template
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(a.Rgc), a.Y36(a.ZZ4))
                    }, t.\u0275dir = a.lG2({
                        type: t,
                        features: [a.TTD]
                    }), t
                })();
            class Fe extends ce {}
            const Ie = L(Fe);
            let G = (() => {
                class t extends Ie {
                    constructor(e, o, n) {
                        super(e, o), this._table = n
                    }
                    ngOnChanges(e) {
                        super.ngOnChanges(e)
                    }
                }
                return t.\u0275fac = function(e) {
                    return new(e || t)(a.Y36(a.Rgc), a.Y36(a.ZZ4), a.Y36(P, 8))
                }, t.\u0275dir = a.lG2({
                    type: t,
                    selectors: [
                        ["", "cdkHeaderRowDef", ""]
                    ],
                    inputs: {
                        columns: ["cdkHeaderRowDef", "columns"],
                        sticky: ["cdkHeaderRowDefSticky", "sticky"]
                    },
                    features: [a.qOj, a.TTD]
                }), t
            })();
            class Be extends ce {}
            const Ne = L(Be);
            let Y = (() => {
                    class t extends Ne {
                        constructor(e, o, n) {
                            super(e, o), this._table = n
                        }
                        ngOnChanges(e) {
                            super.ngOnChanges(e)
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(a.Rgc), a.Y36(a.ZZ4), a.Y36(P, 8))
                    }, t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "cdkFooterRowDef", ""]
                        ],
                        inputs: {
                            columns: ["cdkFooterRowDef", "columns"],
                            sticky: ["cdkFooterRowDefSticky", "sticky"]
                        },
                        features: [a.qOj, a.TTD]
                    }), t
                })(),
                $ = (() => {
                    class t extends ce {
                        constructor(e, o, n) {
                            super(e, o), this._table = n
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(a.Rgc), a.Y36(a.ZZ4), a.Y36(P, 8))
                    }, t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "cdkRowDef", ""]
                        ],
                        inputs: {
                            columns: ["cdkRowDefColumns", "columns"],
                            when: ["cdkRowDefWhen", "when"]
                        },
                        features: [a.qOj]
                    }), t
                })(),
                x = (() => {
                    class t {
                        constructor(e) {
                            this._viewContainer = e, t.mostRecentCellOutlet = this
                        }
                        ngOnDestroy() {
                            t.mostRecentCellOutlet === this && (t.mostRecentCellOutlet = null)
                        }
                    }
                    return t.mostRecentCellOutlet = null, t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(a.s_b))
                    }, t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "cdkCellOutlet", ""]
                        ]
                    }), t
                })(),
                ue = (() => {
                    class t {}
                    return t.\u0275fac = function(e) {
                        return new(e || t)
                    }, t.\u0275cmp = a.Xpm({
                        type: t,
                        selectors: [
                            ["cdk-header-row"],
                            ["tr", "cdk-header-row", ""]
                        ],
                        hostAttrs: ["role", "row", 1, "cdk-header-row"],
                        decls: 1,
                        vars: 0,
                        consts: [
                            ["cdkCellOutlet", ""]
                        ],
                        template: function(e, o) {
                            1 & e && a.GkF(0, 0)
                        },
                        dependencies: [x],
                        encapsulation: 2
                    }), t
                })(),
                fe = (() => {
                    class t {}
                    return t.\u0275fac = function(e) {
                        return new(e || t)
                    }, t.\u0275cmp = a.Xpm({
                        type: t,
                        selectors: [
                            ["cdk-row"],
                            ["tr", "cdk-row", ""]
                        ],
                        hostAttrs: ["role", "row", 1, "cdk-row"],
                        decls: 1,
                        vars: 0,
                        consts: [
                            ["cdkCellOutlet", ""]
                        ],
                        template: function(e, o) {
                            1 & e && a.GkF(0, 0)
                        },
                        dependencies: [x],
                        encapsulation: 2
                    }), t
                })(),
                q = (() => {
                    class t {
                        constructor(e) {
                            this.templateRef = e, this._contentClassName = "cdk-no-data-row"
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(a.Rgc))
                    }, t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["ng-template", "cdkNoDataRow", ""]
                        ]
                    }), t
                })();
            const Ce = ["top", "bottom", "left", "right"];
            class ze {
                constructor(i, e, o, n, r = !0, d = !0, u) {
                    this._isNativeHtmlTable = i, this._stickCellCss = e, this.direction = o, this._coalescedStyleScheduler = n, this._isBrowser = r, this._needsPositionStickyOnElement = d, this._positionListener = u, this._cachedCellWidths = [], this._borderCellCss = {
                        top: `${e}-border-elem-top`,
                        bottom: `${e}-border-elem-bottom`,
                        left: `${e}-border-elem-left`,
                        right: `${e}-border-elem-right`
                    }
                }
                clearStickyPositioning(i, e) {
                    const o = [];
                    for (const n of i)
                        if (n.nodeType === n.ELEMENT_NODE) {
                            o.push(n);
                            for (let r = 0; r < n.children.length; r++) o.push(n.children[r])
                        }
                    this._coalescedStyleScheduler.schedule(() => {
                        for (const n of o) this._removeStickyStyle(n, e)
                    })
                }
                updateStickyColumns(i, e, o, n = !0) {
                    if (!i.length || !this._isBrowser || !e.some(g => g) && !o.some(g => g)) return void(this._positionListener && (this._positionListener.stickyColumnsUpdated({
                        sizes: []
                    }), this._positionListener.stickyEndColumnsUpdated({
                        sizes: []
                    })));
                    const r = i[0],
                        d = r.children.length,
                        u = this._getCellWidths(r, n),
                        m = this._getStickyStartColumnPositions(u, e),
                        y = this._getStickyEndColumnPositions(u, o),
                        p = e.lastIndexOf(!0),
                        D = o.indexOf(!0);
                    this._coalescedStyleScheduler.schedule(() => {
                        const g = "rtl" === this.direction,
                            T = g ? "right" : "left",
                            tt = g ? "left" : "right";
                        for (const Z of i)
                            for (let C = 0; C < d; C++) {
                                const Ee = Z.children[C];
                                e[C] && this._addStickyStyle(Ee, T, m[C], C === p), o[C] && this._addStickyStyle(Ee, tt, y[C], C === D)
                            }
                        this._positionListener && (this._positionListener.stickyColumnsUpdated({
                            sizes: -1 === p ? [] : u.slice(0, p + 1).map((Z, C) => e[C] ? Z : null)
                        }), this._positionListener.stickyEndColumnsUpdated({
                            sizes: -1 === D ? [] : u.slice(D).map((Z, C) => o[C + D] ? Z : null).reverse()
                        }))
                    })
                }
                stickRows(i, e, o) {
                    if (!this._isBrowser) return;
                    const n = "bottom" === o ? i.slice().reverse() : i,
                        r = "bottom" === o ? e.slice().reverse() : e,
                        d = [],
                        u = [],
                        m = [];
                    for (let p = 0, D = 0; p < n.length; p++) {
                        if (!r[p]) continue;
                        d[p] = D;
                        const g = n[p];
                        m[p] = this._isNativeHtmlTable ? Array.from(g.children) : [g];
                        const T = g.getBoundingClientRect().height;
                        D += T, u[p] = T
                    }
                    const y = r.lastIndexOf(!0);
                    this._coalescedStyleScheduler.schedule(() => {
                        for (let p = 0; p < n.length; p++) {
                            if (!r[p]) continue;
                            const D = d[p],
                                g = p === y;
                            for (const T of m[p]) this._addStickyStyle(T, o, D, g)
                        }
                        "top" === o ? this._positionListener ? .stickyHeaderRowsUpdated({
                            sizes: u,
                            offsets: d,
                            elements: m
                        }) : this._positionListener ? .stickyFooterRowsUpdated({
                            sizes: u,
                            offsets: d,
                            elements: m
                        })
                    })
                }
                updateStickyFooterContainer(i, e) {
                    if (!this._isNativeHtmlTable) return;
                    const o = i.querySelector("tfoot");
                    this._coalescedStyleScheduler.schedule(() => {
                        e.some(n => !n) ? this._removeStickyStyle(o, ["bottom"]) : this._addStickyStyle(o, "bottom", 0, !1)
                    })
                }
                _removeStickyStyle(i, e) {
                    for (const n of e) i.style[n] = "", i.classList.remove(this._borderCellCss[n]);
                    Ce.some(n => -1 === e.indexOf(n) && i.style[n]) ? i.style.zIndex = this._getCalculatedZIndex(i) : (i.style.zIndex = "", this._needsPositionStickyOnElement && (i.style.position = ""), i.classList.remove(this._stickCellCss))
                }
                _addStickyStyle(i, e, o, n) {
                    i.classList.add(this._stickCellCss), n && i.classList.add(this._borderCellCss[e]), i.style[e] = `${o}px`, i.style.zIndex = this._getCalculatedZIndex(i), this._needsPositionStickyOnElement && (i.style.cssText += "position: -webkit-sticky; position: sticky; ")
                }
                _getCalculatedZIndex(i) {
                    const e = {
                        top: 100,
                        bottom: 10,
                        left: 1,
                        right: 1
                    };
                    let o = 0;
                    for (const n of Ce) i.style[n] && (o += e[n]);
                    return o ? `${o}` : ""
                }
                _getCellWidths(i, e = !0) {
                    if (!e && this._cachedCellWidths.length) return this._cachedCellWidths;
                    const o = [],
                        n = i.children;
                    for (let r = 0; r < n.length; r++) o.push(n[r].getBoundingClientRect().width);
                    return this._cachedCellWidths = o, o
                }
                _getStickyStartColumnPositions(i, e) {
                    const o = [];
                    let n = 0;
                    for (let r = 0; r < i.length; r++) e[r] && (o[r] = n, n += i[r]);
                    return o
                }
                _getStickyEndColumnPositions(i, e) {
                    const o = [];
                    let n = 0;
                    for (let r = i.length; r > 0; r--) e[r] && (o[r] = n, n += i[r]);
                    return o
                }
            }
            const me = new a.OlP("CDK_SPL");
            let W = (() => {
                    class t {
                        constructor(e, o) {
                            this.viewContainer = e, this.elementRef = o
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(a.s_b), a.Y36(a.SBq))
                    }, t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "rowOutlet", ""]
                        ]
                    }), t
                })(),
                Q = (() => {
                    class t {
                        constructor(e, o) {
                            this.viewContainer = e, this.elementRef = o
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(a.s_b), a.Y36(a.SBq))
                    }, t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "headerRowOutlet", ""]
                        ]
                    }), t
                })(),
                J = (() => {
                    class t {
                        constructor(e, o) {
                            this.viewContainer = e, this.elementRef = o
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(a.s_b), a.Y36(a.SBq))
                    }, t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "footerRowOutlet", ""]
                        ]
                    }), t
                })(),
                X = (() => {
                    class t {
                        constructor(e, o) {
                            this.viewContainer = e, this.elementRef = o
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(a.s_b), a.Y36(a.SBq))
                    }, t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "noDataRowOutlet", ""]
                        ]
                    }), t
                })(),
                K = (() => {
                    class t {
                        get trackBy() {
                            return this._trackByFn
                        }
                        set trackBy(e) {
                            this._trackByFn = e
                        }
                        get dataSource() {
                            return this._dataSource
                        }
                        set dataSource(e) {
                            this._dataSource !== e && this._switchDataSource(e)
                        }
                        get multiTemplateDataRows() {
                            return this._multiTemplateDataRows
                        }
                        set multiTemplateDataRows(e) {
                            this._multiTemplateDataRows = (0, O.Ig)(e), this._rowOutlet && this._rowOutlet.viewContainer.length && (this._forceRenderDataRows(), this.updateStickyColumnStyles())
                        }
                        get fixedLayout() {
                            return this._fixedLayout
                        }
                        set fixedLayout(e) {
                            this._fixedLayout = (0, O.Ig)(e), this._forceRecalculateCellWidths = !0, this._stickyColumnStylesNeedReset = !0
                        }
                        constructor(e, o, n, r, d, u, m, y, p, D, g, T) {
                            this._differs = e, this._changeDetectorRef = o, this._elementRef = n, this._dir = d, this._platform = m, this._viewRepeater = y, this._coalescedStyleScheduler = p, this._viewportRuler = D, this._stickyPositioningListener = g, this._ngZone = T, this._onDestroy = new v.x, this._columnDefsByName = new Map, this._customColumnDefs = new Set, this._customRowDefs = new Set, this._customHeaderRowDefs = new Set, this._customFooterRowDefs = new Set, this._headerRowDefChanged = !0, this._footerRowDefChanged = !0, this._stickyColumnStylesNeedReset = !0, this._forceRecalculateCellWidths = !0, this._cachedRenderRowsMap = new Map, this.stickyCssClass = "cdk-table-sticky", this.needsPositionStickyOnElement = !0, this._isShowingNoDataRow = !1, this._multiTemplateDataRows = !1, this._fixedLayout = !1, this.contentChanged = new a.vpe, this.viewChange = new F.X({
                                start: 0,
                                end: Number.MAX_VALUE
                            }), r || this._elementRef.nativeElement.setAttribute("role", "table"), this._document = u, this._isNativeHtmlTable = "TABLE" === this._elementRef.nativeElement.nodeName
                        }
                        ngOnInit() {
                            this._setupStickyStyler(), this._isNativeHtmlTable && this._applyNativeTableSections(), this._dataDiffer = this._differs.find([]).create((e, o) => this.trackBy ? this.trackBy(o.dataIndex, o.data) : o), this._viewportRuler.change().pipe((0, E.R)(this._onDestroy)).subscribe(() => {
                                this._forceRecalculateCellWidths = !0
                            })
                        }
                        ngAfterContentChecked() {
                            this._cacheRowDefs(), this._cacheColumnDefs();
                            const o = this._renderUpdatedColumns() || this._headerRowDefChanged || this._footerRowDefChanged;
                            this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || o, this._forceRecalculateCellWidths = o, this._headerRowDefChanged && (this._forceRenderHeaderRows(), this._headerRowDefChanged = !1), this._footerRowDefChanged && (this._forceRenderFooterRows(), this._footerRowDefChanged = !1), this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription ? this._observeRenderChanges() : this._stickyColumnStylesNeedReset && this.updateStickyColumnStyles(), this._checkStickyStates()
                        }
                        ngOnDestroy() {
                            [this._rowOutlet.viewContainer, this._headerRowOutlet.viewContainer, this._footerRowOutlet.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach(e => {
                                e.clear()
                            }), this._headerRowDefs = [], this._footerRowDefs = [], this._defaultRowDef = null, this._onDestroy.next(), this._onDestroy.complete(), (0, b.Z9)(this.dataSource) && this.dataSource.disconnect(this)
                        }
                        renderRows() {
                            this._renderRows = this._getAllRenderRows();
                            const e = this._dataDiffer.diff(this._renderRows);
                            if (!e) return this._updateNoDataRow(), void this.contentChanged.next();
                            const o = this._rowOutlet.viewContainer;
                            this._viewRepeater.applyChanges(e, o, (n, r, d) => this._getEmbeddedViewArgs(n.item, d), n => n.item.data, n => {
                                1 === n.operation && n.context && this._renderCellTemplateForItem(n.record.item.rowDef, n.context)
                            }), this._updateRowIndexContext(), e.forEachIdentityChange(n => {
                                o.get(n.currentIndex).context.$implicit = n.item.data
                            }), this._updateNoDataRow(), this._ngZone && a.R0b.isInAngularZone() ? this._ngZone.onStable.pipe((0, j.q)(1), (0, E.R)(this._onDestroy)).subscribe(() => {
                                this.updateStickyColumnStyles()
                            }) : this.updateStickyColumnStyles(), this.contentChanged.next()
                        }
                        addColumnDef(e) {
                            this._customColumnDefs.add(e)
                        }
                        removeColumnDef(e) {
                            this._customColumnDefs.delete(e)
                        }
                        addRowDef(e) {
                            this._customRowDefs.add(e)
                        }
                        removeRowDef(e) {
                            this._customRowDefs.delete(e)
                        }
                        addHeaderRowDef(e) {
                            this._customHeaderRowDefs.add(e), this._headerRowDefChanged = !0
                        }
                        removeHeaderRowDef(e) {
                            this._customHeaderRowDefs.delete(e), this._headerRowDefChanged = !0
                        }
                        addFooterRowDef(e) {
                            this._customFooterRowDefs.add(e), this._footerRowDefChanged = !0
                        }
                        removeFooterRowDef(e) {
                            this._customFooterRowDefs.delete(e), this._footerRowDefChanged = !0
                        }
                        setNoDataRow(e) {
                            this._customNoDataRow = e
                        }
                        updateStickyHeaderRowStyles() {
                            const e = this._getRenderedRows(this._headerRowOutlet),
                                n = this._elementRef.nativeElement.querySelector("thead");
                            n && (n.style.display = e.length ? "" : "none");
                            const r = this._headerRowDefs.map(d => d.sticky);
                            this._stickyStyler.clearStickyPositioning(e, ["top"]), this._stickyStyler.stickRows(e, r, "top"), this._headerRowDefs.forEach(d => d.resetStickyChanged())
                        }
                        updateStickyFooterRowStyles() {
                            const e = this._getRenderedRows(this._footerRowOutlet),
                                n = this._elementRef.nativeElement.querySelector("tfoot");
                            n && (n.style.display = e.length ? "" : "none");
                            const r = this._footerRowDefs.map(d => d.sticky);
                            this._stickyStyler.clearStickyPositioning(e, ["bottom"]), this._stickyStyler.stickRows(e, r, "bottom"), this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, r), this._footerRowDefs.forEach(d => d.resetStickyChanged())
                        }
                        updateStickyColumnStyles() {
                            const e = this._getRenderedRows(this._headerRowOutlet),
                                o = this._getRenderedRows(this._rowOutlet),
                                n = this._getRenderedRows(this._footerRowOutlet);
                            (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) && (this._stickyStyler.clearStickyPositioning([...e, ...o, ...n], ["left", "right"]), this._stickyColumnStylesNeedReset = !1), e.forEach((r, d) => {
                                this._addStickyColumnStyles([r], this._headerRowDefs[d])
                            }), this._rowDefs.forEach(r => {
                                const d = [];
                                for (let u = 0; u < o.length; u++) this._renderRows[u].rowDef === r && d.push(o[u]);
                                this._addStickyColumnStyles(d, r)
                            }), n.forEach((r, d) => {
                                this._addStickyColumnStyles([r], this._footerRowDefs[d])
                            }), Array.from(this._columnDefsByName.values()).forEach(r => r.resetStickyChanged())
                        }
                        _getAllRenderRows() {
                            const e = [],
                                o = this._cachedRenderRowsMap;
                            this._cachedRenderRowsMap = new Map;
                            for (let n = 0; n < this._data.length; n++) {
                                let r = this._data[n];
                                const d = this._getRenderRowsForData(r, n, o.get(r));
                                this._cachedRenderRowsMap.has(r) || this._cachedRenderRowsMap.set(r, new WeakMap);
                                for (let u = 0; u < d.length; u++) {
                                    let m = d[u];
                                    const y = this._cachedRenderRowsMap.get(m.data);
                                    y.has(m.rowDef) ? y.get(m.rowDef).push(m) : y.set(m.rowDef, [m]), e.push(m)
                                }
                            }
                            return e
                        }
                        _getRenderRowsForData(e, o, n) {
                            return this._getRowDefs(e, o).map(d => {
                                const u = n && n.has(d) ? n.get(d) : [];
                                if (u.length) {
                                    const m = u.shift();
                                    return m.dataIndex = o, m
                                }
                                return {
                                    data: e,
                                    rowDef: d,
                                    dataIndex: o
                                }
                            })
                        }
                        _cacheColumnDefs() {
                            this._columnDefsByName.clear(), V(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs).forEach(o => {
                                this._columnDefsByName.has(o.name), this._columnDefsByName.set(o.name, o)
                            })
                        }
                        _cacheRowDefs() {
                            this._headerRowDefs = V(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs), this._footerRowDefs = V(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs), this._rowDefs = V(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
                            const e = this._rowDefs.filter(o => !o.when);
                            this._defaultRowDef = e[0]
                        }
                        _renderUpdatedColumns() {
                            const e = (d, u) => d || !!u.getColumnsDiff(),
                                o = this._rowDefs.reduce(e, !1);
                            o && this._forceRenderDataRows();
                            const n = this._headerRowDefs.reduce(e, !1);
                            n && this._forceRenderHeaderRows();
                            const r = this._footerRowDefs.reduce(e, !1);
                            return r && this._forceRenderFooterRows(), o || n || r
                        }
                        _switchDataSource(e) {
                            this._data = [], (0, b.Z9)(this.dataSource) && this.dataSource.disconnect(this), this._renderChangeSubscription && (this._renderChangeSubscription.unsubscribe(), this._renderChangeSubscription = null), e || (this._dataDiffer && this._dataDiffer.diff([]), this._rowOutlet.viewContainer.clear()), this._dataSource = e
                        }
                        _observeRenderChanges() {
                            if (!this.dataSource) return;
                            let e;
                            (0, b.Z9)(this.dataSource) ? e = this.dataSource.connect(this): (0, ae.b)(this.dataSource) ? e = this.dataSource : Array.isArray(this.dataSource) && (e = (0, I.of)(this.dataSource)), this._renderChangeSubscription = e.pipe((0, E.R)(this._onDestroy)).subscribe(o => {
                                this._data = o || [], this.renderRows()
                            })
                        }
                        _forceRenderHeaderRows() {
                            this._headerRowOutlet.viewContainer.length > 0 && this._headerRowOutlet.viewContainer.clear(), this._headerRowDefs.forEach((e, o) => this._renderRow(this._headerRowOutlet, e, o)), this.updateStickyHeaderRowStyles()
                        }
                        _forceRenderFooterRows() {
                            this._footerRowOutlet.viewContainer.length > 0 && this._footerRowOutlet.viewContainer.clear(), this._footerRowDefs.forEach((e, o) => this._renderRow(this._footerRowOutlet, e, o)), this.updateStickyFooterRowStyles()
                        }
                        _addStickyColumnStyles(e, o) {
                            const n = Array.from(o.columns || []).map(u => this._columnDefsByName.get(u)),
                                r = n.map(u => u.sticky),
                                d = n.map(u => u.stickyEnd);
                            this._stickyStyler.updateStickyColumns(e, r, d, !this._fixedLayout || this._forceRecalculateCellWidths)
                        }
                        _getRenderedRows(e) {
                            const o = [];
                            for (let n = 0; n < e.viewContainer.length; n++) {
                                const r = e.viewContainer.get(n);
                                o.push(r.rootNodes[0])
                            }
                            return o
                        }
                        _getRowDefs(e, o) {
                            if (1 == this._rowDefs.length) return [this._rowDefs[0]];
                            let n = [];
                            if (this.multiTemplateDataRows) n = this._rowDefs.filter(r => !r.when || r.when(o, e));
                            else {
                                let r = this._rowDefs.find(d => d.when && d.when(o, e)) || this._defaultRowDef;
                                r && n.push(r)
                            }
                            return n
                        }
                        _getEmbeddedViewArgs(e, o) {
                            return {
                                templateRef: e.rowDef.template,
                                context: {
                                    $implicit: e.data
                                },
                                index: o
                            }
                        }
                        _renderRow(e, o, n, r = {}) {
                            const d = e.viewContainer.createEmbeddedView(o.template, r, n);
                            return this._renderCellTemplateForItem(o, r), d
                        }
                        _renderCellTemplateForItem(e, o) {
                            for (let n of this._getCellTemplates(e)) x.mostRecentCellOutlet && x.mostRecentCellOutlet._viewContainer.createEmbeddedView(n, o);
                            this._changeDetectorRef.markForCheck()
                        }
                        _updateRowIndexContext() {
                            const e = this._rowOutlet.viewContainer;
                            for (let o = 0, n = e.length; o < n; o++) {
                                const d = e.get(o).context;
                                d.count = n, d.first = 0 === o, d.last = o === n - 1, d.even = o % 2 == 0, d.odd = !d.even, this.multiTemplateDataRows ? (d.dataIndex = this._renderRows[o].dataIndex, d.renderIndex = o) : d.index = this._renderRows[o].dataIndex
                            }
                        }
                        _getCellTemplates(e) {
                            return e && e.columns ? Array.from(e.columns, o => {
                                const n = this._columnDefsByName.get(o);
                                return e.extractCellTemplate(n)
                            }) : []
                        }
                        _applyNativeTableSections() {
                            const e = this._document.createDocumentFragment(),
                                o = [{
                                    tag: "thead",
                                    outlets: [this._headerRowOutlet]
                                }, {
                                    tag: "tbody",
                                    outlets: [this._rowOutlet, this._noDataRowOutlet]
                                }, {
                                    tag: "tfoot",
                                    outlets: [this._footerRowOutlet]
                                }];
                            for (const n of o) {
                                const r = this._document.createElement(n.tag);
                                r.setAttribute("role", "rowgroup");
                                for (const d of n.outlets) r.appendChild(d.elementRef.nativeElement);
                                e.appendChild(r)
                            }
                            this._elementRef.nativeElement.appendChild(e)
                        }
                        _forceRenderDataRows() {
                            this._dataDiffer.diff([]), this._rowOutlet.viewContainer.clear(), this.renderRows()
                        }
                        _checkStickyStates() {
                            const e = (o, n) => o || n.hasStickyChanged();
                            this._headerRowDefs.reduce(e, !1) && this.updateStickyHeaderRowStyles(), this._footerRowDefs.reduce(e, !1) && this.updateStickyFooterRowStyles(), Array.from(this._columnDefsByName.values()).reduce(e, !1) && (this._stickyColumnStylesNeedReset = !0, this.updateStickyColumnStyles())
                        }
                        _setupStickyStyler() {
                            this._stickyStyler = new ze(this._isNativeHtmlTable, this.stickyCssClass, this._dir ? this._dir.value : "ltr", this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener), (this._dir ? this._dir.change : (0, I.of)()).pipe((0, E.R)(this._onDestroy)).subscribe(o => {
                                this._stickyStyler.direction = o, this.updateStickyColumnStyles()
                            })
                        }
                        _getOwnDefs(e) {
                            return e.filter(o => !o._table || o._table === this)
                        }
                        _updateNoDataRow() {
                            const e = this._customNoDataRow || this._noDataRow;
                            if (!e) return;
                            const o = 0 === this._rowOutlet.viewContainer.length;
                            if (o === this._isShowingNoDataRow) return;
                            const n = this._noDataRowOutlet.viewContainer;
                            if (o) {
                                const r = n.createEmbeddedView(e.templateRef),
                                    d = r.rootNodes[0];
                                1 === r.rootNodes.length && d ? .nodeType === this._document.ELEMENT_NODE && (d.setAttribute("role", "row"), d.classList.add(e._contentClassName))
                            } else n.clear();
                            this._isShowingNoDataRow = o
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new(e || t)(a.Y36(a.ZZ4), a.Y36(a.sBO), a.Y36(a.SBq), a.$8M("role"), a.Y36(s.Is, 8), a.Y36(A.K0), a.Y36(U.t4), a.Y36(b.k), a.Y36(S), a.Y36(z.rL), a.Y36(me, 12), a.Y36(a.R0b, 8))
                    }, t.\u0275cmp = a.Xpm({
                        type: t,
                        selectors: [
                            ["cdk-table"],
                            ["table", "cdk-table", ""]
                        ],
                        contentQueries: function(e, o, n) {
                            if (1 & e && (a.Suo(n, q, 5), a.Suo(n, c, 5), a.Suo(n, $, 5), a.Suo(n, G, 5), a.Suo(n, Y, 5)), 2 & e) {
                                let r;
                                a.iGM(r = a.CRH()) && (o._noDataRow = r.first), a.iGM(r = a.CRH()) && (o._contentColumnDefs = r), a.iGM(r = a.CRH()) && (o._contentRowDefs = r), a.iGM(r = a.CRH()) && (o._contentHeaderRowDefs = r), a.iGM(r = a.CRH()) && (o._contentFooterRowDefs = r)
                            }
                        },
                        viewQuery: function(e, o) {
                            if (1 & e && (a.Gf(W, 7), a.Gf(Q, 7), a.Gf(J, 7), a.Gf(X, 7)), 2 & e) {
                                let n;
                                a.iGM(n = a.CRH()) && (o._rowOutlet = n.first), a.iGM(n = a.CRH()) && (o._headerRowOutlet = n.first), a.iGM(n = a.CRH()) && (o._footerRowOutlet = n.first), a.iGM(n = a.CRH()) && (o._noDataRowOutlet = n.first)
                            }
                        },
                        hostAttrs: [1, "cdk-table"],
                        hostVars: 2,
                        hostBindings: function(e, o) {
                            2 & e && a.ekj("cdk-table-fixed-layout", o.fixedLayout)
                        },
                        inputs: {
                            trackBy: "trackBy",
                            dataSource: "dataSource",
                            multiTemplateDataRows: "multiTemplateDataRows",
                            fixedLayout: "fixedLayout"
                        },
                        outputs: {
                            contentChanged: "contentChanged"
                        },
                        exportAs: ["cdkTable"],
                        features: [a._Bn([{
                            provide: P,
                            useExisting: t
                        }, {
                            provide: b.k,
                            useClass: b.yy
                        }, {
                            provide: S,
                            useClass: H
                        }, {
                            provide: me,
                            useValue: null
                        }])],
                        ngContentSelectors: B,
                        decls: 6,
                        vars: 0,
                        consts: [
                            ["headerRowOutlet", ""],
                            ["rowOutlet", ""],
                            ["noDataRowOutlet", ""],
                            ["footerRowOutlet", ""]
                        ],
                        template: function(e, o) {
                            1 & e && (a.F$t(oe), a.Hsn(0), a.Hsn(1, 1), a.GkF(2, 0)(3, 1)(4, 2)(5, 3))
                        },
                        dependencies: [W, Q, J, X],
                        styles: [".cdk-table-fixed-layout{table-layout:fixed}"],
                        encapsulation: 2
                    }), t
                })();

            function V(t, i) {
                return t.concat(Array.from(i))
            }
            let Le = (() => {
                class t {}
                return t.\u0275fac = function(e) {
                    return new(e || t)
                }, t.\u0275mod = a.oAB({
                    type: t
                }), t.\u0275inj = a.cJS({
                    imports: [z.Cl]
                }), t
            })();
            var ve = f(3238),
                xe = f(6451),
                _e = f(9841),
                pe = f(4004);
            const He = [
                    [
                        ["caption"]
                    ],
                    [
                        ["colgroup"],
                        ["col"]
                    ]
                ],
                Ge = ["caption", "colgroup, col"];
            let ke = (() => {
                    class t extends K {
                        constructor() {
                            super(...arguments), this.stickyCssClass = "mat-mdc-table-sticky", this.needsPositionStickyOnElement = !1
                        }
                        ngOnInit() {
                            super.ngOnInit(), this._isNativeHtmlTable && this._elementRef.nativeElement.querySelector("tbody").classList.add("mdc-data-table__content")
                        }
                    }
                    return t.\u0275fac = function() {
                        let i;
                        return function(o) {
                            return (i || (i = a.n5z(t)))(o || t)
                        }
                    }(), t.\u0275cmp = a.Xpm({
                        type: t,
                        selectors: [
                            ["mat-table"],
                            ["table", "mat-table", ""]
                        ],
                        hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
                        hostVars: 2,
                        hostBindings: function(e, o) {
                            2 & e && a.ekj("mdc-table-fixed-layout", o.fixedLayout)
                        },
                        exportAs: ["matTable"],
                        features: [a._Bn([{
                            provide: K,
                            useExisting: t
                        }, {
                            provide: P,
                            useExisting: t
                        }, {
                            provide: S,
                            useClass: H
                        }, {
                            provide: b.k,
                            useClass: b.yy
                        }, {
                            provide: me,
                            useValue: null
                        }]), a.qOj],
                        ngContentSelectors: Ge,
                        decls: 6,
                        vars: 0,
                        consts: [
                            ["headerRowOutlet", ""],
                            ["rowOutlet", ""],
                            ["noDataRowOutlet", ""],
                            ["footerRowOutlet", ""]
                        ],
                        template: function(e, o) {
                            1 & e && (a.F$t(He), a.Hsn(0), a.Hsn(1, 1), a.GkF(2, 0)(3, 1)(4, 2)(5, 3))
                        },
                        dependencies: [W, Q, J, X],
                        styles: [".mdc-data-table{border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table{-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__pagination{box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table-sticky{position:sticky !important}.mat-mdc-table{table-layout:auto;white-space:normal}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table .mat-mdc-row:hover,.mat-mdc-table .mat-mdc-footer-row:hover{background-color:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"],
                        encapsulation: 2
                    }), t
                })(),
                ge = (() => {
                    class t extends k {}
                    return t.\u0275fac = function() {
                        let i;
                        return function(o) {
                            return (i || (i = a.n5z(t)))(o || t)
                        }
                    }(), t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "matCellDef", ""]
                        ],
                        features: [a._Bn([{
                            provide: k,
                            useExisting: t
                        }]), a.qOj]
                    }), t
                })(),
                we = (() => {
                    class t extends M {}
                    return t.\u0275fac = function() {
                        let i;
                        return function(o) {
                            return (i || (i = a.n5z(t)))(o || t)
                        }
                    }(), t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "matHeaderCellDef", ""]
                        ],
                        features: [a._Bn([{
                            provide: M,
                            useExisting: t
                        }]), a.qOj]
                    }), t
                })(),
                be = (() => {
                    class t extends c {
                        get name() {
                            return this._name
                        }
                        set name(e) {
                            this._setNameInput(e)
                        }
                        _updateColumnCssClassName() {
                            super._updateColumnCssClassName(), this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)
                        }
                    }
                    return t.\u0275fac = function() {
                        let i;
                        return function(o) {
                            return (i || (i = a.n5z(t)))(o || t)
                        }
                    }(), t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "matColumnDef", ""]
                        ],
                        inputs: {
                            sticky: "sticky",
                            name: ["matColumnDef", "name"]
                        },
                        features: [a._Bn([{
                            provide: c,
                            useExisting: t
                        }, {
                            provide: "MAT_SORT_HEADER_COLUMN_DEF",
                            useExisting: t
                        }]), a.qOj]
                    }), t
                })(),
                ye = (() => {
                    class t extends l {}
                    return t.\u0275fac = function() {
                        let i;
                        return function(o) {
                            return (i || (i = a.n5z(t)))(o || t)
                        }
                    }(), t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["mat-header-cell"],
                            ["th", "mat-header-cell", ""]
                        ],
                        hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"],
                        features: [a.qOj]
                    }), t
                })(),
                De = (() => {
                    class t extends _ {}
                    return t.\u0275fac = function() {
                        let i;
                        return function(o) {
                            return (i || (i = a.n5z(t)))(o || t)
                        }
                    }(), t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["mat-cell"],
                            ["td", "mat-cell", ""]
                        ],
                        hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
                        features: [a.qOj]
                    }), t
                })(),
                Me = (() => {
                    class t extends G {}
                    return t.\u0275fac = function() {
                        let i;
                        return function(o) {
                            return (i || (i = a.n5z(t)))(o || t)
                        }
                    }(), t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "matHeaderRowDef", ""]
                        ],
                        inputs: {
                            columns: ["matHeaderRowDef", "columns"],
                            sticky: ["matHeaderRowDefSticky", "sticky"]
                        },
                        features: [a._Bn([{
                            provide: G,
                            useExisting: t
                        }]), a.qOj]
                    }), t
                })(),
                Se = (() => {
                    class t extends $ {}
                    return t.\u0275fac = function() {
                        let i;
                        return function(o) {
                            return (i || (i = a.n5z(t)))(o || t)
                        }
                    }(), t.\u0275dir = a.lG2({
                        type: t,
                        selectors: [
                            ["", "matRowDef", ""]
                        ],
                        inputs: {
                            columns: ["matRowDefColumns", "columns"],
                            when: ["matRowDefWhen", "when"]
                        },
                        features: [a._Bn([{
                            provide: $,
                            useExisting: t
                        }]), a.qOj]
                    }), t
                })(),
                Te = (() => {
                    class t extends ue {}
                    return t.\u0275fac = function() {
                        let i;
                        return function(o) {
                            return (i || (i = a.n5z(t)))(o || t)
                        }
                    }(), t.\u0275cmp = a.Xpm({
                        type: t,
                        selectors: [
                            ["mat-header-row"],
                            ["tr", "mat-header-row", ""]
                        ],
                        hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"],
                        exportAs: ["matHeaderRow"],
                        features: [a._Bn([{
                            provide: ue,
                            useExisting: t
                        }]), a.qOj],
                        decls: 1,
                        vars: 0,
                        consts: [
                            ["cdkCellOutlet", ""]
                        ],
                        template: function(e, o) {
                            1 & e && a.GkF(0, 0)
                        },
                        dependencies: [x],
                        encapsulation: 2
                    }), t
                })(),
                Oe = (() => {
                    class t extends fe {}
                    return t.\u0275fac = function() {
                        let i;
                        return function(o) {
                            return (i || (i = a.n5z(t)))(o || t)
                        }
                    }(), t.\u0275cmp = a.Xpm({
                        type: t,
                        selectors: [
                            ["mat-row"],
                            ["tr", "mat-row", ""]
                        ],
                        hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
                        exportAs: ["matRow"],
                        features: [a._Bn([{
                            provide: fe,
                            useExisting: t
                        }]), a.qOj],
                        decls: 1,
                        vars: 0,
                        consts: [
                            ["cdkCellOutlet", ""]
                        ],
                        template: function(e, o) {
                            1 & e && a.GkF(0, 0)
                        },
                        dependencies: [x],
                        encapsulation: 2
                    }), t
                })(),
                Xe = (() => {
                    class t {}
                    return t.\u0275fac = function(e) {
                        return new(e || t)
                    }, t.\u0275mod = a.oAB({
                        type: t
                    }), t.\u0275inj = a.cJS({
                        imports: [ve.BQ, Le, ve.BQ]
                    }), t
                })();
            class Ve extends b.o2 {
                get data() {
                    return this._data.value
                }
                set data(i) {
                    i = Array.isArray(i) ? i : [], this._data.next(i), this._renderChangesSubscription || this._filterData(i)
                }
                get filter() {
                    return this._filter.value
                }
                set filter(i) {
                    this._filter.next(i), this._renderChangesSubscription || this._filterData(this.data)
                }
                get sort() {
                    return this._sort
                }
                set sort(i) {
                    this._sort = i, this._updateChangeSubscription()
                }
                get paginator() {
                    return this._paginator
                }
                set paginator(i) {
                    this._paginator = i, this._updateChangeSubscription()
                }
                constructor(i = []) {
                    super(), this._renderData = new F.X([]), this._filter = new F.X(""), this._internalPageChanges = new v.x, this._renderChangesSubscription = null, this.sortingDataAccessor = (e, o) => {
                        const n = e[o];
                        if ((0, O.t6)(n)) {
                            const r = Number(n);
                            return r < 9007199254740991 ? r : n
                        }
                        return n
                    }, this.sortData = (e, o) => {
                        const n = o.active,
                            r = o.direction;
                        return n && "" != r ? e.sort((d, u) => {
                            let m = this.sortingDataAccessor(d, n),
                                y = this.sortingDataAccessor(u, n);
                            const p = typeof m,
                                D = typeof y;
                            p !== D && ("number" === p && (m += ""), "number" === D && (y += ""));
                            let g = 0;
                            return null != m && null != y ? m > y ? g = 1 : m < y && (g = -1) : null != m ? g = 1 : null != y && (g = -1), g * ("asc" == r ? 1 : -1)
                        }) : e
                    }, this.filterPredicate = (e, o) => {
                        const n = Object.keys(e).reduce((d, u) => d + e[u] + "\u25ec", "").toLowerCase(),
                            r = o.trim().toLowerCase();
                        return -1 != n.indexOf(r)
                    }, this._data = new F.X(i), this._updateChangeSubscription()
                }
                _updateChangeSubscription() {
                    const i = this._sort ? (0, xe.T)(this._sort.sortChange, this._sort.initialized) : (0, I.of)(null),
                        e = this._paginator ? (0, xe.T)(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : (0, I.of)(null),
                        n = (0, _e.a)([this._data, this._filter]).pipe((0, pe.U)(([u]) => this._filterData(u))),
                        r = (0, _e.a)([n, i]).pipe((0, pe.U)(([u]) => this._orderData(u))),
                        d = (0, _e.a)([r, e]).pipe((0, pe.U)(([u]) => this._pageData(u)));
                    this._renderChangesSubscription ? .unsubscribe(), this._renderChangesSubscription = d.subscribe(u => this._renderData.next(u))
                }
                _filterData(i) {
                    return this.filteredData = null == this.filter || "" === this.filter ? i : i.filter(e => this.filterPredicate(e, this.filter)), this.paginator && this._updatePaginator(this.filteredData.length), this.filteredData
                }
                _orderData(i) {
                    return this.sort ? this.sortData(i.slice(), this.sort) : i
                }
                _pageData(i) {
                    if (!this.paginator) return i;
                    const e = this.paginator.pageIndex * this.paginator.pageSize;
                    return i.slice(e, e + this.paginator.pageSize)
                }
                _updatePaginator(i) {
                    Promise.resolve().then(() => {
                        const e = this.paginator;
                        if (e && (e.length = i, e.pageIndex > 0)) {
                            const o = Math.ceil(e.length / e.pageSize) - 1 || 0,
                                n = Math.min(e.pageIndex, o);
                            n !== e.pageIndex && (e.pageIndex = n, this._internalPageChanges.next())
                        }
                    })
                }
                connect() {
                    return this._renderChangesSubscription || this._updateChangeSubscription(), this._renderData
                }
                disconnect() {
                    this._renderChangesSubscription ? .unsubscribe(), this._renderChangesSubscription = null
                }
            }
            class et extends Ve {}
        }
    }
]);