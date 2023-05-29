import React from "react"
import Signform from "./Signform";

export default function Signup (){
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
                <app-signup _nghost-oko-c480 className="ng-star-inserted">
                  <div _ngcontent-oko-c480 className="auth-container">
                    <div _ngcontent-oko-c480 className="row auth-main">
                      <div _ngcontent-oko-c480 className="col-sm-6 px-0 d-none d-sm-block">
                        <div _ngcontent-oko-c480 className="left-img" style={{backgroundImage: 'url(/assets/images/pages/bg-02.png)'}} />
                      </div>
                      <div _ngcontent-oko-c480 className="col-sm-6 auth-form-section">
                        <div _ngcontent-oko-c480 className="form-section ">
                          <div _ngcontent-oko-c480 className="auth-wrapper ">
                            <h2 _ngcontent-oko-c480 className="welcome-msg">
                              Sign Up
                            </h2>
                            <p _ngcontent-oko-c480 className="auth-signup-text text-muted">
                              Enter details to create your account
                            </p>
                            <Signform/>
                            <h6 _ngcontent-oko-c480 className="social-login-title">
                              OR
                            </h6>
                            <ul _ngcontent-oko-c480 className="list-unstyled social-icon mb-0 mt-3">
                              <li _ngcontent-oko-c480 className="list-inline-item">
                                <a _ngcontent-oko-c480 className="rounded" href="javascript:void(0)">
                                  <i _ngcontent-oko-c480 className="fab fa-google">
                                  </i>
                                </a>
                              </li>
                              <li _ngcontent-oko-c480 className="list-inline-item">
                                <a _ngcontent-oko-c480 className="rounded flex-c-m" href="javascript:void(0)">
                                  <i _ngcontent-oko-c480 className="fab fa-facebook-f">
                                  </i>
                                </a>
                              </li>
                              <li _ngcontent-oko-c480 className="list-inline-item">
                                <a _ngcontent-oko-c480 className="rounded" href="javascript:void(0)">
                                  <i _ngcontent-oko-c480 className="fab fa-twitter">
                                  </i>
                                </a>
                              </li>
                              <li _ngcontent-oko-c480 className="list-inline-item">
                                <a _ngcontent-oko-c480 className="rounded" href="javascript:void(0)">
                                  <i _ngcontent-oko-c480 className="fab fa-linkedin-in">
                                  </i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </app-signup>
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
  