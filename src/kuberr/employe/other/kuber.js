import React from "react";
import "./kuber.css"

export function KuberComponent() {
    
    return (
        <app-root _nghost-sds-c137="" ng-version="15.2.0">
            <app-page-loader _ngcontent-sds-c137="" _nghost-sds-c136="">
                <ngx-loading-bar
                    _ngcontent-sds-c136=""
                    _nghost-sds-c135=""
                    color="#3173D6"
                    fixed="true"
                    style={{ color: "rgb(49, 115, 214)" }}
                >
                   
                </ngx-loading-bar>
            </app-page-loader>
            <router-outlet _ngcontent-sds-c137=""></router-outlet>
            <app-auth-layout className="ng-star-inserted">
                <div dir="ltr">
                    <router-outlet></router-outlet>
                    <app-signin _nghost-sds-c138="" className="ng-star-inserted">
                        <div _ngcontent-sds-c138="" className="auth-container">
                            <div _ngcontent-sds-c138="" className="row auth-main">
                                <div
                                    _ngcontent-sds-c138=""
                                    className="col-sm-6 px-0 d-none d-sm-block"
                                >
                                    <div
                                        _ngcontent-sds-c138=""
                                        className="left-img"
                                        style={{
                                            backgroundImage: "url(bg-01.png)"
                                        }}
                                    ></div>
                                </div>
                                <div _ngcontent-sds-c138="" className="col-sm-6 auth-form-section">
                                    <div _ngcontent-sds-c138="" className="form-section">
                                        <div _ngcontent-sds-c138="" className="auth-wrapper">
                                            <h2 _ngcontent-sds-c138="" className="welcome-msg">
                                                Welcome to Kuber
                                            </h2>
                                            <p
                                                _ngcontent-sds-c138=""
                                                className="auth-signup-text text-muted"
                                            >
                                                Need an account?
                                                <a
                                                    _ngcontent-sds-c138=""
                                                    className="sign-up-link"
                                                    href="#/authentication/signup"
                                                    routerlink="/authentication/signup"
                                                >
                                                    Sign Up
                                                </a>
                                            </p>
                                            <div
                                                _ngcontent-sds-c138=""
                                                className="d-flex justify-content-between lbl-alert mb-3"
                                            >
                                                <div _ngcontent-sds-c138="">
                                                    <button
                                                        _ngcontent-sds-c138=""
                                                        className="mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base"
                                                        color="primary"
                                                        mat-raised-button=""
                                                        type="button"
                                                    >
                                                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                                        <span className="mdc-button__label">Admin</span>
                                                        <span className="mat-mdc-focus-indicator"></span>
                                                        <span
                                                            className="mat-ripple mat-mdc-button-ripple"
                                                            matripple=""
                                                        ></span>
                                                        <span className="mat-mdc-button-touch-target"></span>
                                                    </button>
                                                </div>
                                                <div _ngcontent-sds-c138="">
                                                    <button
                                                        _ngcontent-sds-c138=""
                                                        className="mdc-button mdc-button--raised mat-mdc-raised-button mat-accent mat-mdc-button-base"
                                                        color="accent"
                                                        mat-raised-button=""
                                                        type="button"
                                                    >
                                                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                                        <span className="mdc-button__label">Employee</span>
                                                        <span className="mat-mdc-focus-indicator"></span>
                                                        <span
                                                            className="mat-ripple mat-mdc-button-ripple"
                                                            matripple=""
                                                        ></span>
                                                        <span className="mat-mdc-button-touch-target"></span>
                                                    </button>
                                                </div>
                                                <div _ngcontent-sds-c138="">
                                                    <button
                                                        _ngcontent-sds-c138=""
                                                        className="mdc-button mdc-button--raised mat-mdc-raised-button mat-warn mat-mdc-button-base"
                                                        color="warn"
                                                        mat-raised-button=""
                                                        type="button"
                                                    >
                                                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                                        <span className="mdc-button__label">Client</span>
                                                        <span className="mat-mdc-focus-indicator"></span>
                                                        <span
                                                            className="mat-ripple mat-mdc-button-ripple"
                                                            matripple=""
                                                        ></span>
                                                        <span className="mat-mdc-button-touch-target"></span>
                                                    </button>
                                                </div>
                                            </div>
                                            <h2 _ngcontent-sds-c138="" className="login-title">
                                                Sign in
                                            </h2>
                                            <form
                                                _ngcontent-sds-c138=""
                                                className="validate-form ng-untouched ng-pristine ng-valid"
                                                noValidate=""
                                            >
                                                <div _ngcontent-sds-c138="" className="row">
                                                    <div
                                                        _ngcontent-sds-c138=""
                                                        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2"
                                                    >
                                                        <mat-form-field
                                                            _ngcontent-sds-c138=""
                                                            appearance="outline"
                                                            className="mat-mdc-form-field example-full-width ng-tns-c67-5 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted"
                                                        >
                                                           
                                                            <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-5 mdc-text-field--outlined">
                                                               
                                                                <div className="mat-mdc-form-field-flex ng-tns-c67-5">
                                                                    <div
                                                                        className="mdc-notched-outline ng-tns-c67-5 mdc-notched-outline--notched mdc-notched-outline--upgraded ng-star-inserted"
                                                                        matformfieldnotchedoutline=""
                                                                    >
                                                                        <div className="mdc-notched-outline__leading"></div>
                                                                        <div
                                                                            className="mdc-notched-outline__notch"
                                                                            style={{
                                                                                width:
                                                                                    "calc(85px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)"
                                                                            }}
                                                                        >
                                                                            <label
                                                                                aria-owns="mat-input-2"
                                                                                className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-5 mdc-floating-label--float-above ng-star-inserted"
                                                                                htmlFor="mat-input-2"
                                                                                id="mat-mdc-form-field-label-4"
                                                                                matformfieldfloatinglabel=""
                                                                                style={{}}
                                                                            >
                                                                                <mat-label
                                                                                    _ngcontent-sds-c138=""
                                                                                    className="ng-tns-c67-5"
                                                                                >
                                                                                    Username
                                                                                </mat-label>
                                                                                <span
                                                                                    aria-hidden="true"
                                                                                    className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-5 ng-star-inserted"
                                                                                ></span>
                                                                               
                                                                            </label>
                                                                           
                                                                           
                                                                           
                                                                        </div>
                                                                        <div className="mdc-notched-outline__trailing"></div>
                                                                    </div>
                                                                   
                                                                   
                                                                   
                                                                    <div className="mat-mdc-form-field-infix ng-tns-c67-5">
                                                                       
                                                                        <input
                                                                            _ngcontent-sds-c138=""
                                                                            aria-invalid="false"
                                                                            aria-required="true"
                                                                            className="mat-mdc-input-element ng-tns-c67-5 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored"
                                                                            formcontrolname="username"
                                                                            id="mat-input-2"
                                                                            matinput=""
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                   
                                                                    <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-5 ng-star-inserted">
                                                                        <mat-icon
                                                                            _ngcontent-sds-c138=""
                                                                            aria-hidden="true"
                                                                            className="mat-icon notranslate face-icon material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-5"
                                                                            data-mat-icon-type="font"
                                                                            matsuffix=""
                                                                            role="img"
                                                                        >
                                                                            face
                                                                        </mat-icon>
                                                                    </div>
                                                                   
                                                                </div>
                                                               
                                                            </div>
                                                            <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-5">
                                                               
                                                                <div
                                                                    className="mat-mdc-form-field-hint-wrapper ng-tns-c67-5 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                                                    style={{
                                                                        opacity: 1,
                                                                        transform: "translateY(0%)"
                                                                    }}
                                                                >
                                                                   
                                                                    <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-5"></div>
                                                                </div>
                                                               
                                                            </div>
                                                        </mat-form-field>
                                                    </div>
                                                </div>
                                                <div _ngcontent-sds-c138="" className="row">
                                                    <div
                                                        _ngcontent-sds-c138=""
                                                        className="col-xl-12col-lg-12 col-md-12 col-sm-12 mb-2"
                                                    >
                                                        <mat-form-field
                                                            _ngcontent-sds-c138=""
                                                            appearance="outline"
                                                            className="mat-mdc-form-field example-full-width ng-tns-c67-6 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted"
                                                        >
                                                           
                                                            <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-6 mdc-text-field--outlined">
                                                               
                                                                <div className="mat-mdc-form-field-flex ng-tns-c67-6">
                                                                    <div
                                                                        className="mdc-notched-outline ng-tns-c67-6 mdc-notched-outline--notched mdc-notched-outline--upgraded ng-star-inserted"
                                                                        matformfieldnotchedoutline=""
                                                                    >
                                                                        <div className="mdc-notched-outline__leading"></div>
                                                                        <div
                                                                            className="mdc-notched-outline__notch"
                                                                            style={{
                                                                                width:
                                                                                    "calc(83px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)"
                                                                            }}
                                                                        >
                                                                            <label
                                                                                aria-owns="mat-input-3"
                                                                                className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-6 mdc-floating-label--float-above ng-star-inserted"
                                                                                htmlFor="mat-input-3"
                                                                                id="mat-mdc-form-field-label-6"
                                                                                matformfieldfloatinglabel=""
                                                                                style={{}}
                                                                            >
                                                                                <mat-label
                                                                                    _ngcontent-sds-c138=""
                                                                                    className="ng-tns-c67-6"
                                                                                >
                                                                                    Password
                                                                                </mat-label>
                                                                                <span
                                                                                    aria-hidden="true"
                                                                                    className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-6 ng-star-inserted"
                                                                                ></span>
                                                                               
                                                                            </label>
                                                                           
                                                                        </div>
                                                                        <div className="mdc-notched-outline__trailing"></div>
                                                                    </div>
                                                                   
                                                                    <div className="mat-mdc-form-field-infix ng-tns-c67-6">
                                                                     
                                                                        <input
                                                                            _ngcontent-sds-c138=""
                                                                            aria-invalid="false"
                                                                            aria-required="true"
                                                                            className="mat-mdc-input-element ng-tns-c67-6 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored"
                                                                            formcontrolname="password"
                                                                            id="mat-input-3"
                                                                            matinput=""
                                                                            required=""
                                                                            type="password"
                                                                        />
                                                                    </div>
                                                                   
                                                                    <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-6 ng-star-inserted">
                                                                        <a
                                                                            _ngcontent-sds-c138=""
                                                                            aria-label="Hide password"
                                                                            aria-pressed="true"
                                                                            className="show-pwd-icon ng-tns-c67-6"
                                                                            href="#"
                                                                            matsuffix=""
                                                                            onclick="return false;"
                                                                        >
                                                                            <mat-icon
                                                                                _ngcontent-sds-c138=""
                                                                                aria-hidden="true"
                                                                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                                                                data-mat-icon-type="font"
                                                                                matsuffix=""
                                                                                role="img"
                                                                            >
                                                                                visibility_off
                                                                            </mat-icon>
                                                                        </a>
                                                                    </div>
                                                                   
                                                                </div>
                                                               
                                                            </div>
                                                            <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-6">
                                                               
                                                                <div
                                                                    className="mat-mdc-form-field-hint-wrapper ng-tns-c67-6 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                                                    style={{
                                                                        opacity: 1,
                                                                        transform: "translateY(0%)"
                                                                    }}
                                                                >
                                                                   
                                                                    <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-6"></div>
                                                                </div>
                                                               
                                                            </div>
                                                        </mat-form-field>
                                                    </div>
                                                </div>
                                                <div
                                                    _ngcontent-sds-c138=""
                                                    className="d-flex justify-content-between align-items-center mb-5"
                                                >
                                                    <div _ngcontent-sds-c138="" className="form-check">
                                                        <label
                                                            _ngcontent-sds-c138=""
                                                            className="form-check-label"
                                                        >
                                                            <input
                                                                _ngcontent-sds-c138=""
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                            />
                                                            Remember me
                                                            <span
                                                                _ngcontent-sds-c138=""
                                                                className="form-check-sign"
                                                            >
                                                                <span
                                                                    _ngcontent-sds-c138=""
                                                                    className="check"
                                                                ></span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <a
                                                        _ngcontent-sds-c138=""
                                                        className="txt1"
                                                        href="#/authentication/forgot-password"
                                                        routerlink="/authentication/forgot-password"
                                                    >
                                                        Forgot Password?
                                                    </a>
                                                </div>
                                               
                                                <div
                                                    _ngcontent-sds-c138=""
                                                    className="container-auth-form-btn"
                                                >
                                                    <div
                                                        _ngcontent-sds-c138=""
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <button
                                                            _ngcontent-sds-c138=""
                                                            className="auth-form-btn mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base"
                                                            color="primary"
                                                            mat-raised-button=""
                                                            type="submit"
                                                        >
                                                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                                            <span className="mdc-button__label">Login</span>
                                                            <span className="mat-mdc-focus-indicator"></span>
                                                            <span
                                                                className="mat-ripple mat-mdc-button-ripple"
                                                                matripple=""
                                                            ></span>
                                                            <span className="mat-mdc-button-touch-target"></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                            <h6 _ngcontent-sds-c138="" className="social-login-title">
                                                OR
                                            </h6>
                                            <ul
                                                _ngcontent-sds-c138=""
                                                className="list-unstyled social-icon mb-0 mt-3"
                                            >
                                                <li _ngcontent-sds-c138="" className="list-inline-item">
                                                    <a
                                                        _ngcontent-sds-c138=""
                                                        className="rounded"
                                                        href="javascript:void(0)"
                                                    >
                                                        <i _ngcontent-sds-c138="" className="fab fa-google"></i>
                                                    </a>
                                                </li>
                                                <li _ngcontent-sds-c138="" className="list-inline-item">
                                                    <a
                                                        _ngcontent-sds-c138=""
                                                        className="rounded flex-c-m"
                                                        href="javascript:void(0)"
                                                    >
                                                        <i
                                                            _ngcontent-sds-c138=""
                                                            className="fab fa-facebook-f"
                                                        ></i>
                                                    </a>
                                                </li>
                                                <li _ngcontent-sds-c138="" className="list-inline-item">
                                                    <a
                                                        _ngcontent-sds-c138=""
                                                        className="rounded"
                                                        href="javascript:void(0)"
                                                    >
                                                        <i
                                                            _ngcontent-sds-c138=""
                                                            className="fab fa-twitter"
                                                        ></i>
                                                    </a>
                                                </li>
                                                <li _ngcontent-sds-c138="" className="list-inline-item">
                                                    <a
                                                        _ngcontent-sds-c138=""
                                                        className="rounded"
                                                        href="javascript:void(0)"
                                                    >
                                                        <i
                                                            _ngcontent-sds-c138=""
                                                            className="fab fa-linkedin-in"
                                                        ></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </app-signin>
                   
                </div>
            </app-auth-layout>
           
        </app-root>

    )


}