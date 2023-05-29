import React from "react";

function Invoice ()
{
    return (
        <>
        <>
  <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
  <meta charSet="utf-8" />
  <title>Kuber - Angular 15+ HR &amp; Company Management Admin Template</title>
  <base href="/templates/admin/kuber/source/light/" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <link href="assets/images/favicon.ico" rel="icon" type="image/x-icon" />

  <app-root _nghost-woo-c137="" ng-version="15.2.0">
    <app-page-loader _ngcontent-woo-c137="" _nghost-woo-c136="">
      <ngx-loading-bar
        _ngcontent-woo-c136=""
        _nghost-woo-c135=""
        color="#3173D6"
        fixed="true"
        style={{ color: "rgb(49, 115, 214)" }}
      >
        {/* */}
      </ngx-loading-bar>
    </app-page-loader>
    <router-outlet _ngcontent-woo-c137=""></router-outlet>
    <app-auth-layout className="ng-star-inserted">
      <div dir="ltr">
        <router-outlet></router-outlet>
        <app-signin _nghost-woo-c227="" className="ng-star-inserted">
          <div _ngcontent-woo-c227="" className="auth-container">
            <div _ngcontent-woo-c227="" className="row auth-main">
              <div
                _ngcontent-woo-c227=""
                className="col-sm-6 px-0 d-none d-sm-block"
              >
                <div
                  _ngcontent-woo-c227=""
                  className="left-img"
                  style={{
                    backgroundImage: "url(assets/images/pages/bg-01.png)"
                  }}
                ></div>
              </div>
              <div
                _ngcontent-woo-c227=""
                className="col-sm-6 auth-form-section"
              >
                <div _ngcontent-woo-c227="" className="form-section">
                  <div _ngcontent-woo-c227="" className="auth-wrapper">
                    <h2 _ngcontent-woo-c227="" className="welcome-msg">
                      Welcome to Kuber
                    </h2>
                    <p
                      _ngcontent-woo-c227=""
                      className="auth-signup-text text-muted"
                    >
                      Need an account?
                      <a
                        _ngcontent-woo-c227=""
                        className="sign-up-link"
                        href="#/authentication/signup"
                        routerlink="/authentication/signup"
                      >
                        Sign Up
                      </a>
                    </p>
                    <div
                      _ngcontent-woo-c227=""
                      className="d-flex justify-content-between lbl-alert mb-3"
                    >
                      <div _ngcontent-woo-c227="">
                        <button
                          _ngcontent-woo-c227=""
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
                      <div _ngcontent-woo-c227="">
                        <button
                          _ngcontent-woo-c227=""
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
                      <div _ngcontent-woo-c227="">
                        <button
                          _ngcontent-woo-c227=""
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
                    <h2 _ngcontent-woo-c227="" className="login-title">
                      Sign in
                    </h2>
                    <form
                      _ngcontent-woo-c227=""
                      className="validate-form ng-untouched ng-pristine ng-valid"
                      noValidate=""
                    >
                      <div _ngcontent-woo-c227="" className="row">
                        <div
                          _ngcontent-woo-c227=""
                          className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2"
                        >
                          <mat-form-field
                            _ngcontent-woo-c227=""
                            appearance="outline"
                            className="mat-mdc-form-field example-full-width ng-tns-c67-39 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted"
                          >
                            {/* */}
                            <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-39 mdc-text-field--outlined">
                              {/* */}
                              <div className="mat-mdc-form-field-flex ng-tns-c67-39">
                                <div
                                  className="mdc-notched-outline ng-tns-c67-39 mdc-notched-outline--notched mdc-notched-outline--upgraded ng-star-inserted"
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
                                      aria-owns="mat-input-12"
                                      className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-39 mdc-floating-label--float-above ng-star-inserted"
                                      htmlFor="mat-input-12"
                                      id="mat-mdc-form-field-label-30"
                                      matformfieldfloatinglabel=""
                                      style={{}}
                                    >
                                      <mat-label
                                        _ngcontent-woo-c227=""
                                        className="ng-tns-c67-39"
                                      >
                                        Username
                                      </mat-label>
                                      <span
                                        aria-hidden="true"
                                        className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-39 ng-star-inserted"
                                      ></span>
                                      {/* */}
                                    </label>
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                  </div>
                                  <div className="mdc-notched-outline__trailing"></div>
                                </div>
                                {/* */}
                                {/* */}
                                {/* */}
                                <div className="mat-mdc-form-field-infix ng-tns-c67-39">
                                  {/* */}
                                  <input
                                    _ngcontent-woo-c227=""
                                    aria-invalid="false"
                                    aria-required="true"
                                    className="mat-mdc-input-element ng-tns-c67-39 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored"
                                    formcontrolname="username"
                                    id="mat-input-12"
                                    matinput=""
                                    required=""
                                  />
                                </div>
                                {/* */}
                                <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-39 ng-star-inserted">
                                  <mat-icon
                                    _ngcontent-woo-c227=""
                                    aria-hidden="true"
                                    className="mat-icon notranslate face-icon material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-39"
                                    data-mat-icon-type="font"
                                    matsuffix=""
                                    role="img"
                                  >
                                    face
                                  </mat-icon>
                                </div>
                                {/* */}
                              </div>
                              {/* */}
                            </div>
                            <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-39">
                              {/* */}
                              <div
                                className="mat-mdc-form-field-hint-wrapper ng-tns-c67-39 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                style={{
                                  opacity: 1,
                                  transform: "translateY(0%)"
                                }}
                              >
                                {/* */}
                                <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-39"></div>
                              </div>
                              {/* */}
                            </div>
                          </mat-form-field>
                        </div>
                      </div>
                      <div _ngcontent-woo-c227="" className="row">
                        <div
                          _ngcontent-woo-c227=""
                          className="col-xl-12col-lg-12 col-md-12 col-sm-12 mb-2"
                        >
                          <mat-form-field
                            _ngcontent-woo-c227=""
                            appearance="outline"
                            className="mat-mdc-form-field example-full-width ng-tns-c67-40 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted"
                          >
                            {/* */}
                            <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-40 mdc-text-field--outlined">
                              {/* */}
                              <div className="mat-mdc-form-field-flex ng-tns-c67-40">
                                <div
                                  className="mdc-notched-outline ng-tns-c67-40 mdc-notched-outline--notched mdc-notched-outline--upgraded ng-star-inserted"
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
                                      aria-owns="mat-input-13"
                                      className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-40 mdc-floating-label--float-above ng-star-inserted"
                                      htmlFor="mat-input-13"
                                      id="mat-mdc-form-field-label-32"
                                      matformfieldfloatinglabel=""
                                      style={{}}
                                    >
                                      <mat-label
                                        _ngcontent-woo-c227=""
                                        className="ng-tns-c67-40"
                                      >
                                        Password
                                      </mat-label>
                                      <span
                                        aria-hidden="true"
                                        className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-40 ng-star-inserted"
                                      ></span>
                                      {/* */}
                                    </label>
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                  </div>
                                  <div className="mdc-notched-outline__trailing"></div>
                                </div>
                                {/* */}
                                {/* */}
                                {/* */}
                                <div className="mat-mdc-form-field-infix ng-tns-c67-40">
                                  {/* */}
                                  <input
                                    _ngcontent-woo-c227=""
                                    aria-invalid="false"
                                    aria-required="true"
                                    className="mat-mdc-input-element ng-tns-c67-40 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored"
                                    formcontrolname="password"
                                    id="mat-input-13"
                                    matinput=""
                                    required=""
                                    type="password"
                                  />
                                </div>
                                {/* */}
                                <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-40 ng-star-inserted">
                                  <a
                                    _ngcontent-woo-c227=""
                                    aria-label="Hide password"
                                    aria-pressed="true"
                                    className="show-pwd-icon ng-tns-c67-40"
                                    href="#"
                                    matsuffix=""
                                    onclick="return false;"
                                  >
                                    <mat-icon
                                      _ngcontent-woo-c227=""
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
                                {/* */}
                              </div>
                              {/* */}
                            </div>
                            <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-40">
                              {/* */}
                              <div
                                className="mat-mdc-form-field-hint-wrapper ng-tns-c67-40 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                style={{
                                  opacity: 1,
                                  transform: "translateY(0%)"
                                }}
                              >
                                {/* */}
                                <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-40"></div>
                              </div>
                              {/* */}
                            </div>
                          </mat-form-field>
                        </div>
                      </div>
                      <div
                        _ngcontent-woo-c227=""
                        className="d-flex justify-content-between align-items-center mb-5"
                      >
                        <div _ngcontent-woo-c227="" className="form-check">
                          <label
                            _ngcontent-woo-c227=""
                            className="form-check-label"
                          >
                            <input
                              _ngcontent-woo-c227=""
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                            />
                            Remember me
                            <span
                              _ngcontent-woo-c227=""
                              className="form-check-sign"
                            >
                              <span
                                _ngcontent-woo-c227=""
                                className="check"
                              ></span>
                            </span>
                          </label>
                        </div>
                        <a
                          _ngcontent-woo-c227=""
                          className="txt1"
                          href="#/authentication/forgot-password"
                          routerlink="/authentication/forgot-password"
                        >
                          Forgot Password?
                        </a>
                      </div>
                      {/* */}
                      <div
                        _ngcontent-woo-c227=""
                        className="container-auth-form-btn"
                      >
                        <div
                          _ngcontent-woo-c227=""
                          style={{ textAlign: "center" }}
                        >
                          <button
                            _ngcontent-woo-c227=""
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
                    <h6 _ngcontent-woo-c227="" className="social-login-title">
                      OR
                    </h6>
                    <ul
                      _ngcontent-woo-c227=""
                      className="list-unstyled social-icon mb-0 mt-3"
                    >
                      <li _ngcontent-woo-c227="" className="list-inline-item">
                        <a
                          _ngcontent-woo-c227=""
                          className="rounded"
                          href="javascript:void(0)"
                        >
                          <i
                            _ngcontent-woo-c227=""
                            className="fab fa-google"
                          ></i>
                        </a>
                      </li>
                      <li _ngcontent-woo-c227="" className="list-inline-item">
                        <a
                          _ngcontent-woo-c227=""
                          className="rounded flex-c-m"
                          href="javascript:void(0)"
                        >
                          <i
                            _ngcontent-woo-c227=""
                            className="fab fa-facebook-f"
                          ></i>
                        </a>
                      </li>
                      <li _ngcontent-woo-c227="" className="list-inline-item">
                        <a
                          _ngcontent-woo-c227=""
                          className="rounded"
                          href="javascript:void(0)"
                        >
                          <i
                            _ngcontent-woo-c227=""
                            className="fab fa-twitter"
                          ></i>
                        </a>
                      </li>
                      <li _ngcontent-woo-c227="" className="list-inline-item">
                        <a
                          _ngcontent-woo-c227=""
                          className="rounded"
                          href="javascript:void(0)"
                        >
                          <i
                            _ngcontent-woo-c227=""
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
        {/* */}
      </div>
    </app-auth-layout>
    {/* */}
  </app-root>
  <svg
    height={0}
    id="SvgjsSvg1001"
    style={{
      overflow: "hidden",
      top: "-100%",
      left: "-100%",
      position: "absolute",
      opacity: 0
    }}
    version="1.1"
    width={2}
    xmlns="http://www.w3.org/2000/svg"
    xmlns-svgjs="http://svgjs.dev"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs id="SvgjsDefs1002"></defs>
    <polyline id="SvgjsPolyline1003" points="0,0"></polyline>
    <path d="M0 0 " id="SvgjsPath1004"></path>
  </svg>
  <div
    aria-atomic="true"
    aria-live="polite"
    className="cdk-live-announcer-element cdk-visually-hidden"
    id="cdk-live-announcer-0"
  ></div>
  <div
    className="cdk-describedby-message-container cdk-visually-hidden"
    style={{ visibility: "hidden" }}
  >
    <div id="cdk-describedby-message-woo-1-6">Sort</div>
  </div>
</>

        </>
    )
}

export default Invoice