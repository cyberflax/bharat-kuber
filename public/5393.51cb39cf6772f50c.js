"use strict";
(self.webpackChunkmain = self.webpackChunkmain || []).push([
    [5393], {
        5393: (L, U, u) => {
            u.r(U), u.d(U, {
                AuthenticationModule: () => c
            });
            var g = u(6895),
                r = u(4006),
                s = u(9132),
                l = u(8252),
                S = u(9186),
                e = u(4650),
                q = u(3330),
                a = u(9549),
                h = u(4144),
                f = u(7392),
                d = u(4859);

            function y(o, i) {
                1 & o && (e.TgZ(0, "mat-error"), e._uU(1, " Username is required "), e.qZA())
            }

            function k(o, i) {
                1 & o && (e.TgZ(0, "mat-error"), e._uU(1, " Password is required "), e.qZA())
            }

            function F(o, i) {
                if (1 & o && (e.TgZ(0, "div", 46), e._uU(1), e.qZA()), 2 & o) {
                    const t = e.oxw();
                    e.xp6(1), e.Oqu(t.error)
                }
            }
            class Z extends S.n {
                constructor(i, t, n, m) {
                    super(), this.formBuilder = i, this.route = t, this.router = n, this.authService = m, this.submitted = !1, this.loading = !1, this.error = "", this.hide = !0
                }
                ngOnInit() {
                    this.authForm = this.formBuilder.group({
                        username: ["admin@software.com", r.kI.required],
                        password: ["admin@123", r.kI.required]
                    })
                }
                get f() {
                    return this.authForm.controls
                }
                adminSet() {
                    this.authForm.get("username") ? .setValue("admin@software.com"), this.authForm.get("password") ? .setValue("admin@123")
                }
                employeeSet() {
                    this.authForm.get("username") ? .setValue("employee@software.com"), this.authForm.get("password") ? .setValue("employee@123")
                }
                clientSet() {
                    this.authForm.get("username") ? .setValue("client@software.com"), this.authForm.get("password") ? .setValue("client@123")
                }
                onSubmit() {
                    this.submitted = !0, this.loading = !0, this.error = "", this.authForm.invalid ? this.error = "Username and Password not valid !" : this.subs.sink = this.authService.login(this.f.username.value, this.f.password.value).subscribe(i => {
                        i ? setTimeout(() => {
                            const t = this.authService.currentUserValue.role;
                            this.router.navigate(t === l.u.All || t === l.u.Admin ? ["/admin/dashboard/main"] : t === l.u.Employee ? ["/employee/dashboard"] : t === l.u.Client ? ["/client/dashboard"] : ["/authentication/signin"]), this.loading = !1
                        }, 1e3) : this.error = "Invalid Login"
                    }, i => {
                        this.error = i, this.submitted = !1, this.loading = !1
                    })
                }
            }

            function C(o, i) {
                1 & o && (e.TgZ(0, "mat-error"), e._uU(1, " Username is required "), e.qZA())
            }

            function J(o, i) {
                1 & o && (e.TgZ(0, "mat-error"), e._uU(1, " Please enter a valid email address "), e.qZA())
            }

            function x(o, i) {
                1 & o && (e.TgZ(0, "mat-error"), e._uU(1, " Password is required "), e.qZA())
            }

            function I(o, i) {
                1 & o && (e.TgZ(0, "mat-error"), e._uU(1, " Confirm Password is required "), e.qZA())
            }
            Z.\u0275fac = function(i) {
                return new(i || Z)(e.Y36(r.QS), e.Y36(s.gz), e.Y36(s.F0), e.Y36(q.e))
            }, Z.\u0275cmp = e.Xpm({
                type: Z,
                selectors: [
                    ["app-signin"]
                ],
                features: [e.qOj],
                decls: 74,
                vars: 12,
                consts: [
                    [1, "auth-container"],
                    [1, "row", "auth-main"],
                    [1, "col-sm-6", "px-0", "d-none", "d-sm-block"],
                    [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-01.png)"],
                    [1, "col-sm-6", "auth-form-section"],
                    [1, "form-section"],
                    [1, "auth-wrapper"],
                    [1, "welcome-msg"],
                    [1, "auth-signup-text", "text-muted"],
                    ["routerLink", "/authentication/signup", 1, "sign-up-link"],
                    [1, "d-flex", "justify-content-between", "lbl-alert", "mb-3"],
                    ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"],
                    ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click"],
                    ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"],
                    [1, "login-title"],
                    [1, "validate-form", 3, "formGroup", "ngSubmit"],
                    [1, "row"],
                    [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"],
                    ["appearance", "outline", 1, "example-full-width"],
                    ["matInput", "", "formControlName", "username"],
                    ["matSuffix", "", 1, "face-icon"],
                    [4, "ngIf"],
                    [1, "col-xl-12col-lg-12", "col-md-12", "col-sm-12", "mb-2"],
                    ["matInput", "", "formControlName", "password", 3, "type"],
                    ["href", "#", "onClick", "return false;", "matSuffix", "", 1, "show-pwd-icon", 3, "click"],
                    ["matSuffix", ""],
                    [1, "d-flex", "justify-content-between", "align-items-center", "mb-5"],
                    [1, "form-check"],
                    [1, "form-check-label"],
                    ["type", "checkbox", "value", "", 1, "form-check-input"],
                    [1, "form-check-sign"],
                    [1, "check"],
                    ["routerLink", "/authentication/forgot-password", 1, "txt1"],
                    ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"],
                    [1, "container-auth-form-btn"],
                    [2, "text-align", "center"],
                    ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"],
                    [1, "social-login-title"],
                    [1, "list-unstyled", "social-icon", "mb-0", "mt-3"],
                    [1, "list-inline-item"],
                    ["href", "javascript:void(0)", 1, "rounded"],
                    [1, "fab", "fa-google"],
                    ["href", "javascript:void(0)", 1, "rounded", "flex-c-m"],
                    [1, "fab", "fa-facebook-f"],
                    [1, "fab", "fa-twitter"],
                    [1, "fab", "fa-linkedin-in"],
                    [1, "alert", "alert-danger", "mt-3", "mb-0"]
                ],
                template: function(i, t) {
                    if (1 & i && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "div", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2", 7), e._uU(8, " Welcome to Kuber "), e.qZA(), e.TgZ(9, "p", 8), e._uU(10, "Need an account?"), e.TgZ(11, "a", 9), e._uU(12, "Sign Up "), e.qZA()(), e.TgZ(13, "div", 10)(14, "div")(15, "button", 11), e.NdJ("click", function() {
                            return t.adminSet()
                        }), e._uU(16, "Admin"), e.qZA()(), e.TgZ(17, "div")(18, "button", 12), e.NdJ("click", function() {
                            return t.employeeSet()
                        }), e._uU(19, "Employee"), e.qZA()(), e.TgZ(20, "div")(21, "button", 13), e.NdJ("click", function() {
                            return t.clientSet()
                        }), e._uU(22, "Client"), e.qZA()()(), e.TgZ(23, "h2", 14), e._uU(24, "Sign in"), e.qZA(), e.TgZ(25, "form", 15), e.NdJ("ngSubmit", function() {
                            return t.onSubmit()
                        }), e.TgZ(26, "div", 16)(27, "div", 17)(28, "mat-form-field", 18)(29, "mat-label"), e._uU(30, "Username"), e.qZA(), e._UZ(31, "input", 19), e.TgZ(32, "mat-icon", 20), e._uU(33, "face"), e.qZA(), e.YNc(34, y, 2, 0, "mat-error", 21), e.qZA()()(), e.TgZ(35, "div", 16)(36, "div", 22)(37, "mat-form-field", 18)(38, "mat-label"), e._uU(39, "Password"), e.qZA(), e._UZ(40, "input", 23), e.TgZ(41, "a", 24), e.NdJ("click", function() {
                            return t.hide = !t.hide
                        }), e.TgZ(42, "mat-icon", 25), e._uU(43), e.qZA()(), e.YNc(44, k, 2, 0, "mat-error", 21), e.qZA()()(), e.TgZ(45, "div", 26)(46, "div", 27)(47, "label", 28), e._UZ(48, "input", 29), e._uU(49, " Remember me "), e.TgZ(50, "span", 30), e._UZ(51, "span", 31), e.qZA()()(), e.TgZ(52, "a", 32), e._uU(53, "Forgot Password?"), e.qZA()(), e.YNc(54, F, 2, 1, "div", 33), e.TgZ(55, "div", 34)(56, "div", 35)(57, "button", 36), e._uU(58, "Login"), e.qZA()()()(), e.TgZ(59, "h6", 37), e._uU(60, "OR"), e.qZA(), e.TgZ(61, "ul", 38)(62, "li", 39)(63, "a", 40), e._UZ(64, "i", 41), e.qZA()(), e.TgZ(65, "li", 39)(66, "a", 42), e._UZ(67, "i", 43), e.qZA()(), e.TgZ(68, "li", 39)(69, "a", 40), e._UZ(70, "i", 44), e.qZA()(), e.TgZ(71, "li", 39)(72, "a", 40), e._UZ(73, "i", 45), e.qZA()()()()()()()()), 2 & i) {
                        let n, m;
                        e.xp6(25), e.Q6J("formGroup", t.authForm), e.xp6(9), e.Q6J("ngIf", null == (n = t.authForm.get("username")) ? null : n.hasError("required")), e.xp6(6), e.Q6J("type", t.hide ? "password" : "text"), e.xp6(1), e.uIk("aria-label", "Hide password")("aria-pressed", t.hide), e.xp6(2), e.Oqu(t.hide ? "visibility_off" : "visibility"), e.xp6(1), e.Q6J("ngIf", null == (m = t.authForm.get("password")) ? null : m.hasError("required")), e.xp6(10), e.Q6J("ngIf", t.error), e.xp6(3), e.ekj("auth-spinner", t.loading), e.Q6J("disabled", t.loading)("disabled", !t.authForm.valid)
                    }
                },
                dependencies: [g.O5, r._Y, r.Fj, r.JJ, r.JL, r.sg, r.u, s.rH, a.KE, a.hX, a.TO, a.R9, h.Nt, f.Hw, d.lW]
            });
            class b {
                constructor(i, t, n) {
                    this.formBuilder = i, this.route = t, this.router = n, this.submitted = !1, this.hide = !0, this.chide = !0
                }
                ngOnInit() {
                    this.authForm = this.formBuilder.group({
                        username: ["", r.kI.required],
                        email: ["", [r.kI.required, r.kI.email, r.kI.minLength(5)]],
                        password: ["", r.kI.required],
                        cpassword: ["", r.kI.required]
                    }), this.returnUrl = this.route.snapshot.queryParams.returnUrl || "/"
                }
                get f() {
                    return this.authForm.controls
                }
                onSubmit() {
                    this.submitted = !0, !this.authForm.invalid && this.router.navigate(["/admin/dashboard/main"])
                }
            }

            function N(o, i) {
                1 & o && (e.TgZ(0, "mat-error"), e._uU(1, " Please enter a valid email address "), e.qZA())
            }
            b.\u0275fac = function(i) {
                return new(i || b)(e.Y36(r.QS), e.Y36(s.gz), e.Y36(s.F0))
            }, b.\u0275cmp = e.Xpm({
                type: b,
                selectors: [
                    ["app-signup"]
                ],
                decls: 73,
                vars: 10,
                consts: [
                    [1, "auth-container"],
                    [1, "row", "auth-main"],
                    [1, "col-sm-6", "px-0", "d-none", "d-sm-block"],
                    [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-02.png)"],
                    [1, "col-sm-6", "auth-form-section"],
                    [1, "form-section"],
                    [1, "auth-wrapper"],
                    [1, "welcome-msg"],
                    [1, "auth-signup-text", "text-muted"],
                    [1, "validate-form", 3, "formGroup", "ngSubmit"],
                    [1, "row"],
                    [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"],
                    ["appearance", "outline", 1, "example-full-width"],
                    ["matInput", "", "formControlName", "username", "required", ""],
                    ["matSuffix", ""],
                    [4, "ngIf"],
                    [1, "col-xl-12col-lg-12", "col-md-12", "col-sm-12", "mb-2"],
                    ["matInput", "", "formControlName", "email", "required", ""],
                    ["matInput", "", "formControlName", "password", "required", "", 3, "type"],
                    ["matSuffix", "", 3, "click"],
                    ["matInput", "", "formControlName", "cpassword", "required", "", 3, "type"],
                    [1, "flex-sb-m", "w-full", "p-b-20"],
                    ["routerLink", "/authentication/signin"],
                    [1, "container-auth-form-btn"],
                    [2, "text-align", "center"],
                    ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"],
                    [1, "social-login-title"],
                    [1, "list-unstyled", "social-icon", "mb-0", "mt-3"],
                    [1, "list-inline-item"],
                    ["href", "javascript:void(0)", 1, "rounded"],
                    [1, "fab", "fa-google"],
                    ["href", "javascript:void(0)", 1, "rounded", "flex-c-m"],
                    [1, "fab", "fa-facebook-f"],
                    [1, "fab", "fa-twitter"],
                    [1, "fab", "fa-linkedin-in"]
                ],
                template: function(i, t) {
                    if (1 & i && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "div", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2", 7), e._uU(8, " Sign Up "), e.qZA(), e.TgZ(9, "p", 8), e._uU(10, "Enter details to create your account"), e.qZA(), e.TgZ(11, "form", 9), e.NdJ("ngSubmit", function() {
                            return t.onSubmit()
                        }), e.TgZ(12, "div", 10)(13, "div", 11)(14, "mat-form-field", 12)(15, "mat-label"), e._uU(16, "Username"), e.qZA(), e._UZ(17, "input", 13), e.TgZ(18, "mat-icon", 14), e._uU(19, "face"), e.qZA(), e.YNc(20, C, 2, 0, "mat-error", 15), e.qZA()()(), e.TgZ(21, "div", 10)(22, "div", 16)(23, "mat-form-field", 12)(24, "mat-label"), e._uU(25, "Email"), e.qZA(), e._UZ(26, "input", 17), e.TgZ(27, "mat-icon", 14), e._uU(28, "mail"), e.qZA(), e.YNc(29, J, 2, 0, "mat-error", 15), e.qZA()()(), e.TgZ(30, "div", 10)(31, "div", 16)(32, "mat-form-field", 12)(33, "mat-label"), e._uU(34, "Password"), e.qZA(), e._UZ(35, "input", 18), e.TgZ(36, "mat-icon", 19), e.NdJ("click", function() {
                            return t.hide = !t.hide
                        }), e._uU(37), e.qZA(), e.YNc(38, x, 2, 0, "mat-error", 15), e.qZA()()(), e.TgZ(39, "div", 10)(40, "div", 16)(41, "mat-form-field", 12)(42, "mat-label"), e._uU(43, "Confirm Password"), e.qZA(), e._UZ(44, "input", 20), e.TgZ(45, "mat-icon", 19), e.NdJ("click", function() {
                            return t.chide = !t.chide
                        }), e._uU(46), e.qZA(), e.YNc(47, I, 2, 0, "mat-error", 15), e.qZA()()(), e.TgZ(48, "div", 21)(49, "div")(50, "span"), e._uU(51, "Already Registered? "), e.TgZ(52, "a", 22), e._uU(53, " Login "), e.qZA()()()(), e.TgZ(54, "div", 23)(55, "div", 24)(56, "button", 25), e._uU(57, "Register"), e.qZA()()()(), e.TgZ(58, "h6", 26), e._uU(59, "OR"), e.qZA(), e.TgZ(60, "ul", 27)(61, "li", 28)(62, "a", 29), e._UZ(63, "i", 30), e.qZA()(), e.TgZ(64, "li", 28)(65, "a", 31), e._UZ(66, "i", 32), e.qZA()(), e.TgZ(67, "li", 28)(68, "a", 29), e._UZ(69, "i", 33), e.qZA()(), e.TgZ(70, "li", 28)(71, "a", 29), e._UZ(72, "i", 34), e.qZA()()()()()()()()), 2 & i) {
                        let n, m, A, w;
                        e.xp6(11), e.Q6J("formGroup", t.authForm), e.xp6(9), e.Q6J("ngIf", null == (n = t.authForm.get("username")) ? null : n.hasError("required")), e.xp6(9), e.Q6J("ngIf", (null == (m = t.authForm.get("email")) ? null : m.hasError("required")) || (null == (m = t.authForm.get("email")) ? null : m.touched)), e.xp6(6), e.Q6J("type", t.hide ? "password" : "text"), e.xp6(2), e.hij(" ", t.hide ? "visibility_off" : "visibility", ""), e.xp6(1), e.Q6J("ngIf", null == (A = t.authForm.get("password")) ? null : A.hasError("required")), e.xp6(6), e.Q6J("type", t.chide ? "password" : "text"), e.xp6(2), e.hij(" ", t.chide ? "visibility_off" : "visibility", ""), e.xp6(1), e.Q6J("ngIf", null == (w = t.authForm.get("cpassword")) ? null : w.hasError("required")), e.xp6(9), e.Q6J("disabled", !t.authForm.valid)
                    }
                },
                dependencies: [g.O5, r._Y, r.Fj, r.JJ, r.JL, r.Q7, r.sg, r.u, s.rH, a.KE, a.hX, a.TO, a.R9, h.Nt, f.Hw, d.lW]
            });
            class _ {
                constructor(i, t, n) {
                    this.formBuilder = i, this.route = t, this.router = n, this.submitted = !1
                }
                ngOnInit() {
                    this.authForm = this.formBuilder.group({
                        email: ["", [r.kI.required, r.kI.email, r.kI.minLength(5)]]
                    }), this.returnUrl = this.route.snapshot.queryParams.returnUrl || "/"
                }
                get f() {
                    return this.authForm.controls
                }
                onSubmit() {
                    this.submitted = !0, !this.authForm.invalid && this.router.navigate(["/dashboard/main"])
                }
            }

            function P(o, i) {
                1 & o && (e.TgZ(0, "mat-error"), e._uU(1, " Password is required "), e.qZA())
            }
            _.\u0275fac = function(i) {
                return new(i || _)(e.Y36(r.QS), e.Y36(s.gz), e.Y36(s.F0))
            }, _.\u0275cmp = e.Xpm({
                type: _,
                selectors: [
                    ["app-forgot-password"]
                ],
                decls: 30,
                vars: 3,
                consts: [
                    [1, "auth-container"],
                    [1, "row", "auth-main"],
                    [1, "col-sm-6", "px-0", "d-none", "d-sm-block"],
                    [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-03.png)"],
                    [1, "col-sm-6", "auth-form-section"],
                    [1, "form-section"],
                    [1, "auth-wrapper"],
                    [1, "welcome-msg"],
                    [1, "auth-signup-text", "text-muted"],
                    [1, "validate-form", 3, "formGroup", "ngSubmit"],
                    [1, "row"],
                    [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"],
                    [1, "error-subheader2", "p-t-20", "p-b-15"],
                    ["appearance", "outline", 1, "example-full-width"],
                    ["matInput", "", "formControlName", "email", "required", ""],
                    ["matSuffix", ""],
                    [4, "ngIf"],
                    [1, "container-auth-form-btn", "mt-5"],
                    ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"],
                    [1, "w-full", "p-t-25", "text-center"],
                    ["routerLink", "/authentication/signin", 1, "txt1"]
                ],
                template: function(i, t) {
                    if (1 & i && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "div", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2", 7), e._uU(8, " Reset Password "), e.qZA(), e.TgZ(9, "p", 8), e._uU(10, "Let Us Help You"), e.qZA(), e.TgZ(11, "form", 9), e.NdJ("ngSubmit", function() {
                            return t.onSubmit()
                        }), e.TgZ(12, "div", 10)(13, "div", 11)(14, "span", 12), e._uU(15, " Enter your registered email address. "), e.qZA(), e.TgZ(16, "mat-form-field", 13)(17, "mat-label"), e._uU(18, "Email"), e.qZA(), e._UZ(19, "input", 14), e.TgZ(20, "mat-icon", 15), e._uU(21, "mail"), e.qZA(), e.YNc(22, N, 2, 0, "mat-error", 16), e.qZA()()(), e.TgZ(23, "div", 17)(24, "button", 18), e._uU(25, " Reset My Password "), e.qZA()(), e.TgZ(26, "div", 19)(27, "div")(28, "a", 20), e._uU(29, " Login? "), e.qZA()()()()()()()()()), 2 & i) {
                        let n;
                        e.xp6(11), e.Q6J("formGroup", t.authForm), e.xp6(11), e.Q6J("ngIf", (null == (n = t.authForm.get("email")) ? null : n.hasError("required")) || (null == (n = t.authForm.get("email")) ? null : n.touched)), e.xp6(2), e.Q6J("disabled", !t.authForm.valid)
                    }
                },
                dependencies: [g.O5, r._Y, r.Fj, r.JJ, r.JL, r.Q7, r.sg, r.u, s.rH, a.KE, a.hX, a.TO, a.R9, h.Nt, f.Hw, d.lW]
            });
            class v {
                constructor(i, t, n) {
                    this.formBuilder = i, this.router = t, this.authService = n, this.submitted = !1, this.hide = !0
                }
                ngOnInit() {
                    this.authForm = this.formBuilder.group({
                        password: ["", r.kI.required]
                    }), this.userImg = this.authService.currentUserValue.img, this.userFullName = this.authService.currentUserValue.firstName + " " + this.authService.currentUserValue.lastName
                }
                get f() {
                    return this.authForm.controls
                }
                onSubmit() {
                    if (this.submitted = !0, !this.authForm.invalid) {
                        const i = this.authService.currentUserValue.role;
                        this.router.navigate(i === l.u.All || i === l.u.Admin ? ["/admin/dashboard/main"] : i === l.u.Employee ? ["/employee/dashboard"] : i === l.u.Client ? ["/client/dashboard"] : ["/authentication/signin"])
                    }
                }
            }
            v.\u0275fac = function(i) {
                return new(i || v)(e.Y36(r.QS), e.Y36(s.F0), e.Y36(q.e))
            }, v.\u0275cmp = e.Xpm({
                type: v,
                selectors: [
                    ["app-locked"]
                ],
                decls: 34,
                vars: 7,
                consts: [
                    [1, "auth-container"],
                    [1, "row", "auth-main"],
                    [1, "col-sm-6", "px-0", "d-none", "d-sm-block"],
                    [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-01.png)"],
                    [1, "col-sm-6", "auth-form-section"],
                    [1, "form-section"],
                    [1, "auth-wrapper"],
                    [1, "validate-form", 3, "formGroup", "ngSubmit"],
                    [1, "auth-locked"],
                    [1, "image"],
                    ["alt", "User", 3, "src"],
                    [1, "auth-locked-title", "p-b-34", "p-t-27"],
                    [1, "text-center"],
                    [1, "txt1", "p-b-20"],
                    [1, "row"],
                    [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"],
                    [1, "error-subheader2", "p-t-20", "p-b-15"],
                    ["appearance", "outline", 1, "example-full-width"],
                    ["matInput", "", "formControlName", "password", "required", "", 3, "type"],
                    ["matSuffix", "", 3, "click"],
                    [4, "ngIf"],
                    [1, "container-auth-form-btn", "mt-5"],
                    ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"],
                    [1, "w-full", "p-t-15", "p-b-15", "text-center"],
                    ["routerLink", "/authentication/signin", 1, "txt1"]
                ],
                template: function(i, t) {
                    if (1 & i && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "div", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "form", 7), e.NdJ("ngSubmit", function() {
                            return t.onSubmit()
                        }), e.TgZ(8, "div", 8)(9, "div", 9), e._UZ(10, "img", 10), e.qZA()(), e.TgZ(11, "span", 11), e._uU(12), e.qZA(), e.TgZ(13, "div", 12)(14, "p", 13), e._uU(15, " Locked "), e.qZA()(), e.TgZ(16, "div", 14)(17, "div", 15)(18, "span", 16), e._uU(19, " Enter your password here. "), e.qZA(), e.TgZ(20, "mat-form-field", 17)(21, "mat-label"), e._uU(22, "Password"), e.qZA(), e._UZ(23, "input", 18), e.TgZ(24, "mat-icon", 19), e.NdJ("click", function() {
                            return t.hide = !t.hide
                        }), e._uU(25), e.qZA(), e.YNc(26, P, 2, 0, "mat-error", 20), e.qZA()()(), e.TgZ(27, "div", 21)(28, "button", 22), e._uU(29, " Reset My Password "), e.qZA()(), e.TgZ(30, "div", 23)(31, "div")(32, "a", 24), e._uU(33, " Need Help? "), e.qZA()()()()()()()()()), 2 & i) {
                        let n;
                        e.xp6(7), e.Q6J("formGroup", t.authForm), e.xp6(3), e.s9C("src", t.userImg, e.LSH), e.xp6(2), e.hij(" ", t.userFullName, " "), e.xp6(11), e.Q6J("type", t.hide ? "password" : "text"), e.xp6(2), e.hij(" ", t.hide ? "visibility_off" : "visibility", ""), e.xp6(1), e.Q6J("ngIf", null == (n = t.authForm.get("password")) ? null : n.hasError("required")), e.xp6(2), e.Q6J("disabled", !t.authForm.valid)
                    }
                },
                dependencies: [g.O5, r._Y, r.Fj, r.JJ, r.JL, r.Q7, r.sg, r.u, s.rH, a.KE, a.hX, a.TO, a.R9, h.Nt, f.Hw, d.lW]
            });
            var Q = u(1991);
            class T {
                constructor() {}
            }
            T.\u0275fac = function(i) {
                return new(i || T)
            }, T.\u0275cmp = e.Xpm({
                type: T,
                selectors: [
                    ["app-page500"]
                ],
                decls: 19,
                vars: 0,
                consts: [
                    [1, "auth-container"],
                    [1, "row", "auth-main"],
                    [1, "col-sm-6", "px-0", "d-none", "d-sm-block"],
                    [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-05.png)"],
                    [1, "col-sm-6", "auth-form-section"],
                    [1, "form-section"],
                    [1, "auth-wrapper"],
                    [1, "error-header", "p-b-45"],
                    [1, "error-subheader2", "p-b-5"],
                    [1, "container-auth-form-btn", "mt-5"],
                    ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn"],
                    [1, "w-full", "p-t-15", "p-b-15", "text-center"],
                    ["routerLink", "/authentication/signin", 1, "txt1"]
                ],
                template: function(i, t) {
                    1 & i && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), e._UZ(3, "div", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "form")(8, "span", 7), e._uU(9, " 500 "), e.qZA(), e.TgZ(10, "span", 8), e._uU(11, " Oops, Something went wrong. Please try after some times. "), e.qZA(), e.TgZ(12, "div", 9)(13, "button", 10), e._uU(14, " Go To Home Page "), e.qZA()(), e.TgZ(15, "div", 11)(16, "div")(17, "a", 12), e._uU(18, " Need Help? "), e.qZA()()()()()()()()())
                },
                dependencies: [r._Y, r.JL, r.F, s.rH, d.lW]
            });
            const Y = [{
                path: "",
                redirectTo: "signin",
                pathMatch: "full"
            }, {
                path: "signin",
                component: Z
            }, {
                path: "signup",
                component: b
            }, {
                path: "forgot-password",
                component: _
            }, {
                path: "locked",
                component: v
            }, {
                path: "page404",
                component: Q.J
            }, {
                path: "page500",
                component: T
            }];
            class p {}
            p.\u0275fac = function(i) {
                return new(i || p)
            }, p.\u0275mod = e.oAB({
                type: p
            }), p.\u0275inj = e.cJS({
                imports: [s.Bz.forChild(Y), s.Bz]
            });
            class c {}
            c.\u0275fac = function(i) {
                return new(i || c)
            }, c.\u0275mod = e.oAB({
                type: c
            }), c.\u0275inj = e.cJS({
                imports: [g.ez, r.u5, r.UX, p, a.lN, h.c, f.Ps, d.ot]
            })
        }
    }
]);