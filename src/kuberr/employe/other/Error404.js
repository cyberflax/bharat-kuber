import React from "react";

function Error() {
    return (
        <>
            <>
                <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
                <meta charSet="utf-8" />
                <title>Kuber - Angular 15+ HR &amp; Company Management Admin Template</title>
                <base href="/templates/admin/kuber/source/light/" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link href="assets/images/favicon.ico" rel="icon" type="image/x-icon" />
    
                <app-root _nghost-ciw-c137="" ng-version="15.2.0">
                    <app-page-loader _ngcontent-ciw-c137="" _nghost-ciw-c136="">
                        <ngx-loading-bar
                            _ngcontent-ciw-c136=""
                            _nghost-ciw-c135=""
                            color="#3173D6"
                            fixed="true"
                            style={{ color: "rgb(49, 115, 214)" }}
                        >
                            {/* */}
                        </ngx-loading-bar>
                    </app-page-loader>
                    <router-outlet _ngcontent-ciw-c137=""></router-outlet>
                    <app-page404 _nghost-ciw-c113="">
                        <div _ngcontent-ciw-c113="" className="auth-container">
                            <div _ngcontent-ciw-c113="" className="row auth-main">
                                <div
                                    _ngcontent-ciw-c113=""
                                    className="col-sm-6 px-0 d-none d-sm-block"
                                >
                                    <div
                                        _ngcontent-ciw-c113=""
                                        className="left-img"
                                        style={{ backgroundImage: "url(assets/images/pages/bg-04.png)" }}
                                    ></div>
                                </div>
                                <div _ngcontent-ciw-c113="" className="col-sm-6 auth-form-section">
                                    <div _ngcontent-ciw-c113="" className="form-section">
                                        <div _ngcontent-ciw-c113="" className="auth-wrapper">
                                            <form
                                                _ngcontent-ciw-c113=""
                                                className="ng-untouched ng-pristine ng-valid"
                                                noValidate=""
                                            >
                                                <span _ngcontent-ciw-c113="" className="error-header p-b-45">
                                                    404
                                                </span>
                                                <span
                                                    _ngcontent-ciw-c113=""
                                                    className="error-subheader p-b-5"
                                                >
                                                    Looks Like You're Lost
                                                </span>
                                                <span
                                                    _ngcontent-ciw-c113=""
                                                    className="error-subheader2 p-b-5"
                                                >
                                                    The Page You Are Looking For Not Available!
                                                </span>
                                                <div
                                                    _ngcontent-ciw-c113=""
                                                    className="container-auth-form-btn mt-5"
                                                >
                                                    <button
                                                        _ngcontent-ciw-c113=""
                                                        className="auth-form-btn mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base"
                                                        color="primary"
                                                        mat-raised-button=""
                                                        type="submit"
                                                    >
                                                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                                        <span className="mdc-button__label">Go To Home Page</span>
                                                        <span className="mat-mdc-focus-indicator"></span>
                                                        <span
                                                            className="mat-ripple mat-mdc-button-ripple"
                                                            matripple=""
                                                        ></span>
                                                        <span className="mat-mdc-button-touch-target"></span>
                                                    </button>
                                                </div>
                                                <div
                                                    _ngcontent-ciw-c113=""
                                                    className="w-full p-t-15 p-b-15 text-center"
                                                >
                                                    <div _ngcontent-ciw-c113="">
                                                        <a
                                                            _ngcontent-ciw-c113=""
                                                            className="txt1"
                                                            href="#/authentication/signin"
                                                            routerlink="/authentication/signin"
                                                        >
                                                            Need Help?
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </app-page404>
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
            </>

        </>
    )
}
export default Error