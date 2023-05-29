import React from "react"
import { Link } from "react-router-dom";

export default function Page500 (){
      return (
        <div>
          <app-root _nghost-oko-c137 ng-version="15.2.0">
            <app-page-loader _ngcontent-oko-c137 _nghost-oko-c136>
              <ngx-loading-bar _ngcontent-oko-c136 _nghost-oko-c135 color="#3173D6" fixed="true" style={{color: 'rgb(49, 115, 214)'}}>
                {/* */}
              </ngx-loading-bar>
            </app-page-loader>
            <router-outlet _ngcontent-oko-c137> </router-outlet>
            <app-auth-layout className="ng-star-inserted">
              <div dir="ltr">
                <router-outlet> </router-outlet>
                <app-page500 _nghost-oko-c483 className="ng-star-inserted">
                  <div _ngcontent-oko-c483 className="auth-container">
                    <div _ngcontent-oko-c483 className="row auth-main">
                      <div _ngcontent-oko-c483 className="col-sm-6 px-0 d-none d-sm-block">
                        <div _ngcontent-oko-c483 className="left-img" style={{backgroundImage: 'url(/assets/images/pages/bg-03.png)'}} />
                      </div>
                      <div _ngcontent-oko-c483 className="col-sm-6 auth-form-section">
                        <div _ngcontent-oko-c483 className="form-section">
                          <div _ngcontent-oko-c483 className="auth-wrapper">
                            <form _ngcontent-oko-c483 className="ng-untouched ng-pristine ng-valid" noValidate>
                              <span _ngcontent-oko-c483 className="error-header p-b-45">
                                500
                              </span>
                              <span _ngcontent-oko-c483 className="error-subheader2 p-b-5">
                                Oops, Something went wrong. Please try after some
                                times.
                              </span>
                              <div _ngcontent-oko-c483 className="container-auth-form-btn mt-5">
                                <button _ngcontent-oko-c483 className="auth-form-btn mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base" color="primary" mat-raised-button type="submit">
                                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                  </span>
                                  <span className="mdc-button__label">
                                  <Link to="/Signin" style={{color:"white",textDecoration:"none"}}  >Go To Home Page</Link>
                                  </span>
                                  <span className="mat-mdc-focus-indicator"> </span>
                                  <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                  </span>
                                  <span className="mat-mdc-button-touch-target"> </span>
                                </button>
                              </div>
                              <div _ngcontent-oko-c483 className="w-full p-t-15 p-b-15 text-center">
                                <div _ngcontent-oko-c483>
                                  <a _ngcontent-oko-c483 className="txt1" href="/Signin" routerlink="/Signin">
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
                </app-page500>
                {/* */}
              </div>
            </app-auth-layout>
            {/* */}
          </app-root>
          <svg height={0} id="SvgjsSvg1001" style={{overflow: 'hidden', top: '-100%', left: '-100%', position: 'absolute', opacity: 0}} version="1.1" width={2} xmlns="http://www.w3.org/2000/svg" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs id="SvgjsDefs1002" />
            <polyline id="SvgjsPolyline1003" points="0,0" />
            <path d="M0 0 " id="SvgjsPath1004" />
          </svg>
          <svg height={0} id="SvgjsSvg1851" style={{overflow: 'hidden', top: '-100%', left: '-100%', position: 'absolute', opacity: 0}} version="1.1" width={2} xmlns="http://www.w3.org/2000/svg" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs id="SvgjsDefs1852" />
            <polyline id="SvgjsPolyline1853" points="0,0" />
            <path d="M-1 270.99999923706054L-1 270.99999923706054C-1 270.99999923706054 87.37980739886945 270.99999923706054 87.37980739886945 270.99999923706054C87.37980739886945 270.99999923706054 145.63301233144907 270.99999923706054 145.63301233144907 270.99999923706054C145.63301233144907 270.99999923706054 203.88621726402872 270.99999923706054 203.88621726402872 270.99999923706054C203.88621726402872 270.99999923706054 262.13942219660834 270.99999923706054 262.13942219660834 270.99999923706054C262.13942219660834 270.99999923706054 320.392627129188 270.99999923706054 320.392627129188 270.99999923706054C320.392627129188 270.99999923706054 378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054C378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054 " id="SvgjsPath1854" />
          </svg>
          <div aria-atomic="true" aria-live="polite" className="cdk-live-announcer-element cdk-visually-hidden" id="cdk-live-announcer-0" />
          <div className="cdk-describedby-message-container cdk-visually-hidden" style={{visibility: 'hidden'}}>
            <div id="cdk-describedby-message-oko-1-8">Sort</div>
          </div>
        </div>
      );
    }
  