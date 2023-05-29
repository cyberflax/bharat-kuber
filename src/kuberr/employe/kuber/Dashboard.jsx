import React from "react"
import { Link } from "react-router-dom";
import Drop from "../../../Drop";

export default function Dashboard (){
      return (
        <div>
          <app-root _nghost-sas-c137 ng-version="15.2.0">
            <app-page-loader _ngcontent-sas-c137 _nghost-sas-c136>
              <ngx-loading-bar _ngcontent-sas-c136 _nghost-sas-c135 color="#3173D6" fixed="true" style={{color: 'rgb(49, 115, 214)'}}>
                {/* */}
              </ngx-loading-bar>
            </app-page-loader>
            <router-outlet _ngcontent-sas-c137> </router-outlet>
            <app-main-layout className="ng-star-inserted">
              <app-header _nghost-sas-c131>
                <nav _ngcontent-sas-c131 className="navbar active">
                  <div _ngcontent-sas-c131 className="container-fluid">
                    <div _ngcontent-sas-c131 className="navbar-header">
                      <a _ngcontent-sas-c131 aria-expanded="false" className="navbar-toggle collapsed" href="/" onclick="return false;">
                      </a>
                      <a _ngcontent-sas-c131 className="bars" href="/" onclick="return false;">
                      </a>
                      <a _ngcontent-sas-c131 className="navbar-brand" href="#/admin/dashboard/main">
                        <img _ngcontent-sas-c131 alt="" src="assets/images/logo.png" />
                        <span _ngcontent-sas-c131 className="logo-name"> Cyber-Instant </span>
                      </a>
                    </div>
                    <div _ngcontent-sas-c131 className="collapse navbar-collapse">
                      <ul _ngcontent-sas-c131 className="float-start collapse-menu-icon">
                        <li _ngcontent-sas-c131>
                          <button _ngcontent-sas-c131 className="sidemenu-collapse nav-notification-icons mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base" mat-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              <app-feather-icons _ngcontent-sas-c131 _nghost-sas-c130>
                                <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="header-icon">
                                  <svg className="feather feather-menu" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <line x1={3} x2={21} y1={12} y2={12} />
                                    <line x1={3} x2={21} y1={6} y2={6} />
                                    <line x1={3} x2={21} y1={18} y2={18} />
                                  </svg>
                                </i-feather>
                              </app-feather-icons>
                            </span>
                            <span className="mat-mdc-focus-indicator"> </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target"> </span>
                          </button>
                        </li>
                      </ul>
                      <ul _ngcontent-sas-c131 className="nav navbar-nav navbar-right">
                        <li _ngcontent-sas-c131 className="fullscreen">
                          <button _ngcontent-sas-c131 className="nav-notification-icons mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base" mat-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              <app-feather-icons _ngcontent-sas-c131 _nghost-sas-c130>
                                <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="header-icon">
                                  <svg className="feather feather-maximize" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                                  </svg>
                                </i-feather>
                              </app-feather-icons>
                            </span>
                            <span className="mat-mdc-focus-indicator"> </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target"> </span>
                          </button>
                        </li>
                        <li _ngcontent-sas-c131 className="nav-item">
                          <button _ngcontent-sas-c131 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger lang-dropdown nav-notification-icons mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base" mat-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              {/* */}
                              <img _ngcontent-sas-c131 className="ng-star-inserted" height={16} src="assets/images/flags/us.jpg" />
                              {/* */}
                            </span>
                            <span className="mat-mdc-focus-indicator"> </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target"> </span>
                          </button>
                          {/* */}
                          <mat-menu _ngcontent-sas-c131 className="ng-star-inserted">
                            {/* */}
                          </mat-menu>
                        </li>
                        <li _ngcontent-sas-c131 className="nav-item btnNotification" ngbdropdown>
                          <button _ngcontent-sas-c131 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger nav-notification-icons mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base" mat-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              <app-feather-icons _ngcontent-sas-c131 _nghost-sas-c130>
                                <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="header-icon">
                                  <svg className="feather feather-bell" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                  </svg>
                                </i-feather>
                              </app-feather-icons>
                              <span _ngcontent-sas-c131 className="label-count bg-orange">
                              </span>
                            </span>
                            <span className="mat-mdc-focus-indicator"> </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target"> </span>
                          </button>
                          {/* */}
                          <mat-menu _ngcontent-sas-c131 className="ng-star-inserted">
                            {/* */}
                          </mat-menu>
                        </li>
                        <li _ngcontent-sas-c131 className="nav-item user_profile">
                          <button _ngcontent-sas-c131 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base" mat-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              <div _ngcontent-sas-c131 ngbdropdowntoggle>
                                <span _ngcontent-sas-c131> Ella Jones </span>
                                <img _ngcontent-sas-c131 alt="User" className="user_img" height={32} src="assets/images/user/admin.jpg" width={32} />
                              </div>
                            </span>
                            <span className="mat-mdc-focus-indicator"> </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target"> </span>
                          </button>
                          {/* */}
                          <mat-menu _ngcontent-sas-c131 className="ng-star-inserted">
                            {/* */}
                          </mat-menu>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </app-header>
              <app-sidebar _nghost-sas-c132>
                <div _ngcontent-sas-c132>
                  <aside _ngcontent-sas-c132 className="sidebar" id="leftsidebar">
                    <div _ngcontent-sas-c132 className="menu">
                      <ng-scrollbar _ngcontent-sas-c132 _nghost-sas-c129 className="ng-scrollbar" style={{height: '543px'}} visibility="hover">
                      <li
                              _ngcontent-sas-c132=""
                              class="sidebar-user-panel"
                            >
                              <div _ngcontent-sas-c132="" class="user-panel">
                                <div _ngcontent-sas-c132="" class="image">
                                  <img
                                    _ngcontent-sas-c132=""
                                    alt="User Image"
                                    class="img-circle user-img-circle"
                                    src="/assets/images/user/admin.jpg"
                                  />
                                </div>
                              </div>
                              <div
                                _ngcontent-sas-c132=""
                                class="profile-usertitle"
                              >
                                <div
                                  _ngcontent-sas-c132=""
                                  class="sidebar-userpic-name"
                                >
                                  Sarah Smith
                                </div>
                                <div
                                  _ngcontent-sas-c132=""
                                  class="profile-usertitle-job"
                                >
                                  Admin
                                </div>
                              </div>
                            </li>
                      <li _ngcontent-sas-c132="" class="ng-star-inserted">
                              <div
                                _ngcontent-sas-c132=""
                                class="header ng-star-inserted"
                              >
                                Main
                              </div>                        
                            </li>
                       <Drop/>
                      </ng-scrollbar>
                    </div>
                  </aside>
                </div>
              </app-sidebar>
              <app-right-sidebar _nghost-sas-c133>
                <div _ngcontent-sas-c133 className="settingSidebar">
                  <a _ngcontent-sas-c133 className="settingPanelToggle" href="javascript:void(0)">
                    <app-feather-icons _ngcontent-sas-c133 _nghost-sas-c130>
                      <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="setting-sidebar-icon">
                        <svg className="feather feather-settings" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <circle cx={12} cy={12} r={3} />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                      </i-feather>
                    </app-feather-icons>
                  </a>
                  <ng-scrollbar _ngcontent-sas-c133 _nghost-sas-c129 class="ng-scrollbar" style={{height: '588px'}} visibility="hover">
                    <div _ngcontent-sas-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="true" pointereventsmethod="viewport" position="native" track="vertical" verticalused="true" visibility="hover">
                      <div _ngcontent-sas-c129 className="ng-scroll-viewport-wrapper">
                        <div _ngcontent-sas-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{nativeScrollbarSize: '0px'}}>
                          <div _ngcontent-sas-c129 className="ng-scroll-content">
                            <div _ngcontent-sas-c133 className="settingSidebar-body ps-container ps-theme-default">
                              <div _ngcontent-sas-c133 className="fade show active">
                                <div _ngcontent-sas-c133 className="setting-panel-header">
                                  Setting Panel
                                </div>
                                <div _ngcontent-sas-c133 className="p-15 border-bottom">
                                  <h6 _ngcontent-sas-c133 className="font-medium m-b-10">
                                    Select Layout
                                  </h6>
                                  <div _ngcontent-sas-c133 className="flex flex-wrap hiddenradio">
                                    <div _ngcontent-sas-c133 className="flex flex-col">
                                      <label _ngcontent-sas-c133>
                                        <input _ngcontent-sas-c133 name="value" type="radio" defaultValue="light" />
                                        <img _ngcontent-sas-c133 src="assets/images/light.png" />
                                      </label>
                                      <div _ngcontent-sas-c133 className="mt-1 text-md text-center">
                                        Light
                                      </div>
                                    </div>
                                    <div _ngcontent-sas-c133 className="flex flex-col mt-3">
                                      <label _ngcontent-sas-c133>
                                        <input _ngcontent-sas-c133 name="value" type="radio" defaultValue="dark" />
                                        <img _ngcontent-sas-c133 src="assets/images/dark.png" />
                                      </label>
                                      <div _ngcontent-sas-c133 className="mt-1 text-md text-center">
                                        Dark
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div _ngcontent-sas-c133 className="rightSetting">
                                  <h6 _ngcontent-sas-c133 className="font-medium m-b-10">
                                    Sidebar Menu Color
                                  </h6>
                                  <mat-button-toggle-group _ngcontent-sas-c133 aria-disabled="false" className="mat-button-toggle-group mt-2 mat-button-toggle-group-appearance-standard" role="group">
                                    <mat-button-toggle _ngcontent-sas-c133 className="mat-button-toggle mat-button-toggle-checked mat-button-toggle-appearance-standard" id="mat-button-toggle-1" role="presentation" value="light">
                                      <button aria-pressed="true" className="mat-button-toggle-button mat-focus-indicator" id="mat-button-toggle-1-button" name="mat-button-toggle-group-0" tabIndex={0} type="button">
                                        <span className="mat-button-toggle-label-content">
                                          Light
                                        </span>
                                      </button>
                                      <span className="mat-button-toggle-focus-overlay">
                                      </span>
                                      <span className="mat-ripple mat-button-toggle-ripple" matripple>
                                      </span>
                                    </mat-button-toggle>
                                    <mat-button-toggle _ngcontent-sas-c133 className="mat-button-toggle mat-button-toggle-appearance-standard" id="mat-button-toggle-2" role="presentation" value="dark">
                                      <button aria-pressed="false" className="mat-button-toggle-button mat-focus-indicator" id="mat-button-toggle-2-button" name="mat-button-toggle-group-0" tabIndex={0} type="button">
                                        <span className="mat-button-toggle-label-content">
                                          Dark
                                        </span>
                                      </button>
                                      <span className="mat-button-toggle-focus-overlay">
                                      </span>
                                      <span className="mat-ripple mat-button-toggle-ripple" matripple>
                                      </span>
                                    </mat-button-toggle>
                                  </mat-button-toggle-group>
                                </div>
                                <div _ngcontent-sas-c133 className="p-15 border-bottom">
                                  <h6 _ngcontent-sas-c133 className="font-medium m-b-10">
                                    Color Theme
                                  </h6>
                                  <div _ngcontent-sas-c133 className="theme-setting-options">
                                    <ul _ngcontent-sas-c133 className="choose-theme list-unstyled mb-0">
                                      <li _ngcontent-sas-c133 className="active" data-theme="white">
                                        <div _ngcontent-sas-c133 className="white" />
                                      </li>
                                      <li _ngcontent-sas-c133 data-theme="black">
                                        <div _ngcontent-sas-c133 className="black" />
                                      </li>
                                      <li _ngcontent-sas-c133 data-theme="purple">
                                        <div _ngcontent-sas-c133 className="purple" />
                                      </li>
                                      <li _ngcontent-sas-c133 data-theme="orange">
                                        <div _ngcontent-sas-c133 className="orange" />
                                      </li>
                                      <li _ngcontent-sas-c133 data-theme="cyan">
                                        <div _ngcontent-sas-c133 className="cyan" />
                                      </li>
                                      <li _ngcontent-sas-c133 data-theme="green">
                                        <div _ngcontent-sas-c133 className="green" />
                                      </li>
                                      <li _ngcontent-sas-c133 data-theme="blue">
                                        <div _ngcontent-sas-c133 className="blue" />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div _ngcontent-sas-c133 className="rightSetting">
                                  <h6 _ngcontent-sas-c133 className="font-medium m-b-10">
                                    RTL Layout
                                  </h6>
                                  <mat-slide-toggle _ngcontent-sas-c133 className="mat-mdc-slide-toggle mt-2 mat-accent" id="mat-mdc-slide-toggle-1">
                                    <div className="mdc-form-field">
                                      <button aria-checked="false" aria-labelledby="mat-mdc-slide-toggle-1-label" className="mdc-switch mdc-switch--unselected" id="mat-mdc-slide-toggle-1-button" role="switch" tabIndex={0} type="button">
                                        <div className="mdc-switch__track" />
                                        <div className="mdc-switch__handle-track">
                                          <div className="mdc-switch__handle">
                                            <div className="mdc-switch__shadow">
                                              <div className="mdc-elevation-overlay" />
                                            </div>
                                            <div className="mdc-switch__ripple">
                                              <div className="mat-ripple mat-mdc-slide-toggle-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <div className="mdc-switch__icons">
                                              <svg className="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">
                                                <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
                                              </svg>
                                              <svg className="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">
                                                <path d="M20 13H4v-2h16v2z" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </button>
                                      <label htmlFor="mat-mdc-slide-toggle-1-button" id="mat-mdc-slide-toggle-1-label">
                                      </label>
                                    </div>
                                  </mat-slide-toggle>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* */}
                      <scrollbar-y _ngcontent-sas-c129 _nghost-sas-c127 className="scrollbar-control ng-star-inserted" fit="false" scrollable="true">
                        <div _ngcontent-sas-c127 className="ng-scrollbar-track" scrollbartracky>
                          <div _ngcontent-sas-c127 className="ng-scrollbar-thumb" scrollbarthumby style={{height: '494px', transform: 'translate3d(0px, 0px, 0px)'}} />
                        </div>
                      </scrollbar-y>
                      {/* */}
                      {/* */}
                      {/* */}
                    </div>
                  </ng-scrollbar>
                </div>
              </app-right-sidebar>
              <div dir="ltr">
                <router-outlet> </router-outlet>
                <app-main _nghost-sas-c142 className="ng-star-inserted">
                  <section _ngcontent-sas-c142 className="content">
                    <div _ngcontent-sas-c142 className="content-block">
                      <div _ngcontent-sas-c142 className="block-header">
                        <app-breadcrumb _ngcontent-sas-c142 _nghost-sas-c141>
                          <div _ngcontent-sas-c141 className="breadcrumb-main">
                            <div _ngcontent-sas-c141 className="row">
                              <div _ngcontent-sas-c141 className="col-6">
                                <div _ngcontent-sas-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-sas-c141 className="page-title">
                                    Dashboad
                                  </h4>
                                </div>
                              </div>
                              <div _ngcontent-sas-c141 className="col-6">
                                <ul _ngcontent-sas-c141 className="breadcrumb-list">
                                  <li _ngcontent-sas-c141 className="breadcrumb-item bcrumb-1">
                                    <a _ngcontent-sas-c141 href="#/admin/dashboard/main">
                                      <app-feather-icons _ngcontent-sas-c141 _nghost-sas-c130>
                                        <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="breadcrumb-icon">
                                          <svg className="feather feather-home" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                            <polyline points="9 22 9 12 15 12 15 22" />
                                          </svg>
                                        </i-feather>
                                      </app-feather-icons>
                                    </a>
                                  </li>
                                  <li _ngcontent-sas-c141 className="breadcrumb-item ng-star-inserted">
                                    Home
                                  </li>
                                  {/* */}
                                  <li _ngcontent-sas-c141 className="breadcrumb-item active">
                                    Dashboad
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-sas-c142 className="row">
                        <div _ngcontent-sas-c142 className="col-xl-8">
                          <div _ngcontent-sas-c142 className="card">
                            <div _ngcontent-sas-c142 className="header">
                              <h2 _ngcontent-sas-c142>Project Survay</h2>
                              <button _ngcontent-sas-c142 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger header-dropdown mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-sas-c142 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  more_vert
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator"> </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target"> </span>
                              </button>
                              {/* */}
                              <mat-menu _ngcontent-sas-c142 className="ng-tns-c105-3 ng-star-inserted">
                                {/* */}
                              </mat-menu>
                            </div>
                            <div _ngcontent-sas-c142 className="body p-5">
                              <apx-chart _ngcontent-sas-c142 _nghost-sas-c139>
                                <div _ngcontent-sas-c139 style={{minHeight: '415px'}}>
                                  <div className="apexcharts-canvas apexchartseag3cbe2 apexcharts-theme-light" id="apexchartseag3cbe2" style={{width: '542px', height: '400px'}}>
                                    <svg className="apexcharts-svg apexcharts-zoomable" height={400} id="SvgjsSvg1859" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={542} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                      <foreignObject height={400} width={542} x={0} y={0}>
                                        <div className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" style={{inset: 'auto 0px 1px', position: 'absolute', maxHeight: '200px'}} xmlns="http://www.w3.org/1999/xhtml">
                                          <div className="apexcharts-legend-series" data-collapsed="false" rel={1} seriesname="ProjectxA" style={{margin: '2px 5px'}}>
                                            <span className="apexcharts-legend-marker" data-collapsed="false" rel={1} style={{background: 'rgb(127,125,127) !important', color: 'rgb(127, 125, 127)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                            <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Project%20A" i={0} rel={1} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                              Project A
                                            </span>
                                          </div>
                                          <div className="apexcharts-legend-series" data-collapsed="false" rel={2} seriesname="ProjectxB" style={{margin: '2px 5px'}}>
                                            <span className="apexcharts-legend-marker" data-collapsed="false" rel={2} style={{background: 'rgb(172,147,229) !important', color: 'rgb(172, 147, 229)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                            <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Project%20B" i={1} rel={2} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                              Project B
                                            </span>
                                          </div>
                                          <div className="apexcharts-legend-series" data-collapsed="false" rel={3} seriesname="ProjectxC" style={{margin: '2px 5px'}}>
                                            <span className="apexcharts-legend-marker" data-collapsed="false" rel={3} style={{background: 'rgb(254,168,97) !important', color: 'rgb(254, 168, 97)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                            <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Project%20C" i={2} rel={3} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                              Project C
                                            </span>
                                          </div>
                                        </div>
                                        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                    .apexcharts-legend {\n                                      display: flex;\n                                      overflow: auto;\n                                      padding: 0 10px;\n                                    }\n                                    .apexcharts-legend.apx-legend-position-bottom,\n                                    .apexcharts-legend.apx-legend-position-top {\n                                      flex-wrap: wrap;\n                                    }\n                                    .apexcharts-legend.apx-legend-position-right,\n                                    .apexcharts-legend.apx-legend-position-left {\n                                      flex-direction: column;\n                                      bottom: 0;\n                                    }\n                                    .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                                    .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                                    .apexcharts-legend.apx-legend-position-right,\n                                    .apexcharts-legend.apx-legend-position-left {\n                                      justify-content: flex-start;\n                                    }\n                                    .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                                    .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                                      justify-content: center;\n                                    }\n                                    .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                                    .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                                      justify-content: flex-end;\n                                    }\n                                    .apexcharts-legend-series {\n                                      cursor: pointer;\n                                      line-height: normal;\n                                    }\n                                    .apexcharts-legend.apx-legend-position-bottom\n                                      .apexcharts-legend-series,\n                                    .apexcharts-legend.apx-legend-position-top\n                                      .apexcharts-legend-series {\n                                      display: flex;\n                                      align-items: center;\n                                    }\n                                    .apexcharts-legend-text {\n                                      position: relative;\n                                      font-size: 14px;\n                                    }\n                                    .apexcharts-legend-text *,\n                                    .apexcharts-legend-marker * {\n                                      pointer-events: none;\n                                    }\n                                    .apexcharts-legend-marker {\n                                      position: relative;\n                                      display: inline-block;\n                                      cursor: pointer;\n                                      margin-right: 3px;\n                                      border-style: solid;\n                                    }\n\n                                    .apexcharts-legend.apexcharts-align-right\n                                      .apexcharts-legend-series,\n                                    .apexcharts-legend.apexcharts-align-left\n                                      .apexcharts-legend-series {\n                                      display: inline-block;\n                                    }\n                                    .apexcharts-legend-series.apexcharts-no-click {\n                                      cursor: auto;\n                                    }\n                                    .apexcharts-legend\n                                      .apexcharts-hidden-zero-series,\n                                    .apexcharts-legend\n                                      .apexcharts-hidden-null-series {\n                                      display: none !important;\n                                    }\n                                    .apexcharts-inactive-legend {\n                                      opacity: 0.45;\n                                    }\n                                  " }} />
                                      </foreignObject>
                                      <rect fill="#fefefe" height={0} id="SvgjsRect1867" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                      <g className="apexcharts-annotations" id="SvgjsG1862" />
                                      <g className="apexcharts-yaxis" id="SvgjsG1981" rel={0} transform="translate(16.23958396911621, 0)">
                                        <g className="apexcharts-yaxis-texts-g" id="SvgjsG1982">
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1984" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y={32}>
                                            <tspan id="SvgjsTspan1985">67</tspan>
                                            <title>67</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1987" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="64.09999992370605">
                                            <tspan id="SvgjsTspan1988">60</tspan>
                                            <title>60</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1990" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="96.1999998474121">
                                            <tspan id="SvgjsTspan1991">54</tspan>
                                            <title>54</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1993" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="128.29999977111817">
                                            <tspan id="SvgjsTspan1994">47</tspan>
                                            <title>47</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1996" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="160.3999996948242">
                                            <tspan id="SvgjsTspan1997">40</tspan>
                                            <title>40</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1999" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="192.49999961853024">
                                            <tspan id="SvgjsTspan2000">34</tspan>
                                            <title>34</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2002" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="224.59999954223628">
                                            <tspan id="SvgjsTspan2003">27</tspan>
                                            <title>27</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2005" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="256.6999994659423">
                                            <tspan id="SvgjsTspan2006">20</tspan>
                                            <title>20</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2008" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="288.79999938964835">
                                            <tspan id="SvgjsTspan2009">13</tspan>
                                            <title>13</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2011" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="320.8999993133544">
                                            <tspan id="SvgjsTspan2012">7</tspan>
                                            <title>7</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2014" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="352.9999992370604">
                                            <tspan id="SvgjsTspan2015">0</tspan>
                                            <title>0</title>
                                          </text>
                                        </g>
                                        <g className="apexcharts-yaxis-title" id="SvgjsG2016">
                                          <text className="apexcharts-text apexcharts-yaxis-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={900} id="SvgjsText2017" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" transform="rotate(-90 -6.584800720214844 186.1666669845581)" x="18.65030860900879" y="190.49999961853027">
                                            Revenue
                                          </text>
                                        </g>
                                      </g>
                                      <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG1861" transform="translate(70.15328095252053, 30)">
                                        <defs id="SvgjsDefs1860">
                                          <clipPath id="gridRectMaskeag3cbe2">
                                            <rect fill="#fff" height="325.99999923706054" id="SvgjsRect1882" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="494.76041603088385" x="-24.41369698340433" y="-2.5" />
                                          </clipPath>
                                          <clipPath id="forecastMaskeag3cbe2" />
                                          <clipPath id="nonForecastMaskeag3cbe2" />
                                          <clipPath id="gridRectMarkerMaskeag3cbe2">
                                            <rect fill="#fff" height="324.99999923706054" id="SvgjsRect1883" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="449.93302206407515" x={-2} y={-2} />
                                          </clipPath>
                                        </defs>
                                        <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height="320.99999923706054" id="SvgjsLine1868" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2="320.99999923706054" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1926" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="1.4668849410002471" x2="1.4668849410002471" y1="321.99999923706054" y2="327.99999923706054" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1928" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="46.94031811200791" x2="46.94031811200791" y1="321.99999923706054" y2="327.99999923706054" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1930" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="133.48652963102248" x2="133.48652963102248" y1="321.99999923706054" y2="327.99999923706054" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1932" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="222.96651103203754" x2="222.96651103203754" y1="321.99999923706054" y2="327.99999923706054" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1934" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="312.44649243305264" x2="312.44649243305264" y1="321.99999923706054" y2="327.99999923706054" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1936" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="401.92647383406774" x2="401.92647383406774" y1="321.99999923706054" y2="327.99999923706054" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1938" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="447.3999070050754" x2="447.3999070050754" y1="321.99999923706054" y2="327.99999923706054" />
                                        <g className="apexcharts-grid" id="SvgjsG1921">
                                          <g className="apexcharts-gridlines-horizontal" id="SvgjsG1922">
                                            <line className="apexcharts-gridline" id="SvgjsLine1940" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="-19.91369698340433" x2="465.8467190474795" y1="32.09999992370605" y2="32.09999992370605" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1941" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="-19.91369698340433" x2="465.8467190474795" y1="64.1999998474121" y2="64.1999998474121" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1942" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="-19.91369698340433" x2="465.8467190474795" y1="96.29999977111815" y2="96.29999977111815" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1943" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="-19.91369698340433" x2="465.8467190474795" y1="128.3999996948242" y2="128.3999996948242" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1944" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="-19.91369698340433" x2="465.8467190474795" y1="160.49999961853024" y2="160.49999961853024" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1945" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="-19.91369698340433" x2="465.8467190474795" y1="192.59999954223628" y2="192.59999954223628" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1946" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="-19.91369698340433" x2="465.8467190474795" y1="224.6999994659423" y2="224.6999994659423" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1947" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="-19.91369698340433" x2="465.8467190474795" y1="256.79999938964835" y2="256.79999938964835" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1948" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="-19.91369698340433" x2="465.8467190474795" y1="288.8999993133544" y2="288.8999993133544" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1949" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="-19.91369698340433" x2="465.8467190474795" y1="320.9999992370604" y2="320.9999992370604" />
                                          </g>
                                          <g className="apexcharts-gridlines-vertical" id="SvgjsG1923">
                                            <line className="apexcharts-gridline" id="SvgjsLine1925" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="1.4668849410002471" x2="1.4668849410002471" y1={0} y2="320.99999923706054" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1927" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="46.94031811200791" x2="46.94031811200791" y1={0} y2="320.99999923706054" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1929" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="133.48652963102248" x2="133.48652963102248" y1={0} y2="320.99999923706054" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1931" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="222.96651103203754" x2="222.96651103203754" y1={0} y2="320.99999923706054" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1933" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="312.44649243305264" x2="312.44649243305264" y1={0} y2="320.99999923706054" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1935" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="401.92647383406774" x2="401.92647383406774" y1={0} y2="320.99999923706054" />
                                            <line className="apexcharts-gridline" id="SvgjsLine1937" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="447.3999070050754" x2="447.3999070050754" y1={0} y2="320.99999923706054" />
                                          </g>
                                          <line id="SvgjsLine1951" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="445.93302206407515" y1="320.99999923706054" y2="320.99999923706054" />
                                          <line id="SvgjsLine1950" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="320.99999923706054" />
                                        </g>
                                        <g className="apexcharts-grid-borders" id="SvgjsG1924">
                                          <line className="apexcharts-gridline" id="SvgjsLine1939" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="-19.91369698340433" x2="465.8467190474795" y1={0} y2={0} />
                                          <line id="SvgjsLine1980" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1="-19.91369698340433" x2="465.8467190474795" y1="321.99999923706054" y2="321.99999923706054" />
                                        </g>
                                        <g className="apexcharts-area-series apexcharts-plot-series" id="SvgjsG1884">
                                          <g className="apexcharts-series" data-longestseries="true" data-realindex={1} id="SvgjsG1885" rel={1} seriesname="ProjectxB">
                                            <path className="apexcharts-area" clipPath="url(#gridRectMaskeag3cbe2)" d="M 0 320.99999923706054 L 0 110.19402958884172C 15.91570160985268 110.19402958884172 29.55773156115498 57.49253717678704 45.47343317100766 57.49253717678704C 59.848905592810084 57.49253717678704 72.17073909721216 124.56716388303846 86.54621151901459 124.56716388303846C 102.46191312886728 124.56716388303846 116.10394308016957 5.684341886080802e-14 132.01964469002226 5.684341886080802e-14C 147.42193657052485 5.684341886080802e-14 160.62390103952708 215.59701441295113 176.02619292002967 215.59701441295113C 191.94189452988235 215.59701441295113 205.58392448118465 114.98507435357396 221.49962609103733 114.98507435357396C 236.90191797153992 114.98507435357396 250.10388244054215 220.38805917768337 265.50617432104474 220.38805917768337C 281.42187593089744 220.38805917768337 295.0639058821997 124.56716388303846 310.9796074920524 124.56716388303846C 326.8953091019051 124.56716388303846 340.5373390532074 52.70149241205479 356.4530406630601 52.70149241205479C 371.8553325435627 52.70149241205479 385.0572970125649 191.6417905892899 400.4595888930675 191.6417905892899C 416.37529050292017 191.6417905892899 430.0173204542225 114.98507435357396 445.93302206407515 114.98507435357396C 445.93302206407515 114.98507435357396 445.93302206407515 114.98507435357396 445.93302206407515 320.99999923706054M 445.93302206407515 114.98507435357396z" fill="rgba(172,147,229,0.25)" fillOpacity={1} id="SvgjsPath1888" index={1} pathfrom="M -1 320.99999923706054 L -1 320.99999923706054 L 45.47343317100766 320.99999923706054 L 86.54621151901459 320.99999923706054 L 132.01964469002226 320.99999923706054 L 176.02619292002967 320.99999923706054 L 221.49962609103733 320.99999923706054 L 265.50617432104474 320.99999923706054 L 310.9796074920524 320.99999923706054 L 356.4530406630601 320.99999923706054 L 400.4595888930675 320.99999923706054 L 445.93302206407515 320.99999923706054" pathto="M 0 320.99999923706054 L 0 110.19402958884172C 15.91570160985268 110.19402958884172 29.55773156115498 57.49253717678704 45.47343317100766 57.49253717678704C 59.848905592810084 57.49253717678704 72.17073909721216 124.56716388303846 86.54621151901459 124.56716388303846C 102.46191312886728 124.56716388303846 116.10394308016957 5.684341886080802e-14 132.01964469002226 5.684341886080802e-14C 147.42193657052485 5.684341886080802e-14 160.62390103952708 215.59701441295113 176.02619292002967 215.59701441295113C 191.94189452988235 215.59701441295113 205.58392448118465 114.98507435357396 221.49962609103733 114.98507435357396C 236.90191797153992 114.98507435357396 250.10388244054215 220.38805917768337 265.50617432104474 220.38805917768337C 281.42187593089744 220.38805917768337 295.0639058821997 124.56716388303846 310.9796074920524 124.56716388303846C 326.8953091019051 124.56716388303846 340.5373390532074 52.70149241205479 356.4530406630601 52.70149241205479C 371.8553325435627 52.70149241205479 385.0572970125649 191.6417905892899 400.4595888930675 191.6417905892899C 416.37529050292017 191.6417905892899 430.0173204542225 114.98507435357396 445.93302206407515 114.98507435357396C 445.93302206407515 114.98507435357396 445.93302206407515 114.98507435357396 445.93302206407515 320.99999923706054M 445.93302206407515 114.98507435357396z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                            <path className="apexcharts-area" clipPath="url(#gridRectMaskeag3cbe2)" d="M 0 110.19402958884172C 15.91570160985268 110.19402958884172 29.55773156115498 57.49253717678704 45.47343317100766 57.49253717678704C 59.848905592810084 57.49253717678704 72.17073909721216 124.56716388303846 86.54621151901459 124.56716388303846C 102.46191312886728 124.56716388303846 116.10394308016957 5.684341886080802e-14 132.01964469002226 5.684341886080802e-14C 147.42193657052485 5.684341886080802e-14 160.62390103952708 215.59701441295113 176.02619292002967 215.59701441295113C 191.94189452988235 215.59701441295113 205.58392448118465 114.98507435357396 221.49962609103733 114.98507435357396C 236.90191797153992 114.98507435357396 250.10388244054215 220.38805917768337 265.50617432104474 220.38805917768337C 281.42187593089744 220.38805917768337 295.0639058821997 124.56716388303846 310.9796074920524 124.56716388303846C 326.8953091019051 124.56716388303846 340.5373390532074 52.70149241205479 356.4530406630601 52.70149241205479C 371.8553325435627 52.70149241205479 385.0572970125649 191.6417905892899 400.4595888930675 191.6417905892899C 416.37529050292017 191.6417905892899 430.0173204542225 114.98507435357396 445.93302206407515 114.98507435357396" fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath1889" index={1} pathfrom="M -1 320.99999923706054 L -1 320.99999923706054 L 45.47343317100766 320.99999923706054 L 86.54621151901459 320.99999923706054 L 132.01964469002226 320.99999923706054 L 176.02619292002967 320.99999923706054 L 221.49962609103733 320.99999923706054 L 265.50617432104474 320.99999923706054 L 310.9796074920524 320.99999923706054 L 356.4530406630601 320.99999923706054 L 400.4595888930675 320.99999923706054 L 445.93302206407515 320.99999923706054" pathto="M 0 110.19402958884172C 15.91570160985268 110.19402958884172 29.55773156115498 57.49253717678704 45.47343317100766 57.49253717678704C 59.848905592810084 57.49253717678704 72.17073909721216 124.56716388303846 86.54621151901459 124.56716388303846C 102.46191312886728 124.56716388303846 116.10394308016957 5.684341886080802e-14 132.01964469002226 5.684341886080802e-14C 147.42193657052485 5.684341886080802e-14 160.62390103952708 215.59701441295113 176.02619292002967 215.59701441295113C 191.94189452988235 215.59701441295113 205.58392448118465 114.98507435357396 221.49962609103733 114.98507435357396C 236.90191797153992 114.98507435357396 250.10388244054215 220.38805917768337 265.50617432104474 220.38805917768337C 281.42187593089744 220.38805917768337 295.0639058821997 124.56716388303846 310.9796074920524 124.56716388303846C 326.8953091019051 124.56716388303846 340.5373390532074 52.70149241205479 356.4530406630601 52.70149241205479C 371.8553325435627 52.70149241205479 385.0572970125649 191.6417905892899 400.4595888930675 191.6417905892899C 416.37529050292017 191.6417905892899 430.0173204542225 114.98507435357396 445.93302206407515 114.98507435357396" stroke="#ac93e5" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={2} />
                                            <g className="apexcharts-series-markers-wrap" data-realindex={1} id="SvgjsG1886">
                                              <g className="apexcharts-series-markers">
                                                <circle className="apexcharts-marker wx1ox9bxoi" cx={0} cy={0} default-marker-size={0} fill="#ac93e5" fillOpacity={1} id="SvgjsCircle2018" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="apexcharts-bar-series apexcharts-plot-series" id="SvgjsG1890">
                                          <g className="apexcharts-series" data-realindex={0} id="SvgjsG1891" rel={1} seriesname="ProjectxA">
                                            <path barheight="110.19402958884166" barwidth="20.53638917400346" className="apexcharts-bar-area" clipPath="url(#gridRectMaskeag3cbe2)" cx="10.26819458700173" cy="210.80596964821888" d="M -10.26819458700173 321.0009992370605 L -10.26819458700173 210.80696964821888 L 10.26819458700173 210.80696964821888 L 10.26819458700173 321.0009992370605 Z" fill="rgba(127,125,127,0.85)" fillOpacity={1} id="SvgjsPath1895" index={0} j={0} pathfrom="M -10.26819458700173 321.0009992370605 L -10.26819458700173 321.0009992370605 L 10.26819458700173 321.0009992370605 L 10.26819458700173 321.0009992370605 L 10.26819458700173 321.0009992370605 L 10.26819458700173 321.0009992370605 L 10.26819458700173 321.0009992370605 L -10.26819458700173 321.0009992370605 Z" pathto="M -10.26819458700173 321.0009992370605 L -10.26819458700173 210.80696964821888 L 10.26819458700173 210.80696964821888 L 10.26819458700173 321.0009992370605 Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} val={23} />
                                            <path barheight="52.701492412054705" barwidth="20.53638917400346" className="apexcharts-bar-area" clipPath="url(#gridRectMaskeag3cbe2)" cx="55.74162775800939" cy="268.2985068250058" d="M 35.20523858400593 321.0009992370605 L 35.20523858400593 268.2995068250058 L 55.74162775800939 268.2995068250058 L 55.74162775800939 321.0009992370605 Z" fill="rgba(127,125,127,0.85)" fillOpacity={1} id="SvgjsPath1897" index={0} j={1} pathfrom="M 35.20523858400593 321.0009992370605 L 35.20523858400593 321.0009992370605 L 55.74162775800939 321.0009992370605 L 55.74162775800939 321.0009992370605 L 55.74162775800939 321.0009992370605 L 55.74162775800939 321.0009992370605 L 55.74162775800939 321.0009992370605 L 35.20523858400593 321.0009992370605 Z" pathto="M 35.20523858400593 321.0009992370605 L 35.20523858400593 268.2995068250058 L 55.74162775800939 268.2995068250058 L 55.74162775800939 321.0009992370605 Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} val={11} />
                                            <path barheight="105.40298482410941" barwidth="20.53638917400346" className="apexcharts-bar-area" clipPath="url(#gridRectMaskeag3cbe2)" cx="96.81440610601632" cy="215.59701441295113" d="M 76.27801693201286 321.0009992370605 L 76.27801693201286 215.59801441295113 L 96.81440610601632 215.59801441295113 L 96.81440610601632 321.0009992370605 Z" fill="rgba(127,125,127,0.85)" fillOpacity={1} id="SvgjsPath1899" index={0} j={2} pathfrom="M 76.27801693201286 321.0009992370605 L 76.27801693201286 321.0009992370605 L 96.81440610601632 321.0009992370605 L 96.81440610601632 321.0009992370605 L 96.81440610601632 321.0009992370605 L 96.81440610601632 321.0009992370605 L 96.81440610601632 321.0009992370605 L 76.27801693201286 321.0009992370605 Z" pathto="M 76.27801693201286 321.0009992370605 L 76.27801693201286 215.59801441295113 L 96.81440610601632 215.59801441295113 L 96.81440610601632 321.0009992370605 Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} val={22} />
                                            <path barheight="129.35820864777062" barwidth="20.53638917400346" className="apexcharts-bar-area" clipPath="url(#gridRectMaskeag3cbe2)" cx="142.28783927702398" cy="191.6417905892899" d="M 121.75145010302053 321.0009992370605 L 121.75145010302053 191.64279058928992 L 142.28783927702398 191.64279058928992 L 142.28783927702398 321.0009992370605 Z" fill="rgba(127,125,127,0.85)" fillOpacity={1} id="SvgjsPath1901" index={0} j={3} pathfrom="M 121.75145010302053 321.0009992370605 L 121.75145010302053 321.0009992370605 L 142.28783927702398 321.0009992370605 L 142.28783927702398 321.0009992370605 L 142.28783927702398 321.0009992370605 L 142.28783927702398 321.0009992370605 L 142.28783927702398 321.0009992370605 L 121.75145010302053 321.0009992370605 Z" pathto="M 121.75145010302053 321.0009992370605 L 121.75145010302053 191.64279058928992 L 142.28783927702398 191.64279058928992 L 142.28783927702398 321.0009992370605 Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} val={27} />
                                            <path barheight="62.283581941519195" barwidth="20.53638917400346" className="apexcharts-bar-area" clipPath="url(#gridRectMaskeag3cbe2)" cx="186.29438750703142" cy="258.71641729554136" d="M 165.75799833302796 321.0009992370605 L 165.75799833302796 258.71741729554134 L 186.29438750703142 258.71741729554134 L 186.29438750703142 321.0009992370605 Z" fill="rgba(127,125,127,0.85)" fillOpacity={1} id="SvgjsPath1903" index={0} j={4} pathfrom="M 165.75799833302796 321.0009992370605 L 165.75799833302796 321.0009992370605 L 186.29438750703142 321.0009992370605 L 186.29438750703142 321.0009992370605 L 186.29438750703142 321.0009992370605 L 186.29438750703142 321.0009992370605 L 186.29438750703142 321.0009992370605 L 165.75799833302796 321.0009992370605 Z" pathto="M 165.75799833302796 321.0009992370605 L 165.75799833302796 258.71741729554134 L 186.29438750703142 258.71741729554134 L 186.29438750703142 321.0009992370605 Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} val={13} />
                                            <path barheight="105.40298482410941" barwidth="20.53638917400346" className="apexcharts-bar-area" clipPath="url(#gridRectMaskeag3cbe2)" cx="231.76782067803904" cy="215.59701441295113" d="M 211.23143150403558 321.0009992370605 L 211.23143150403558 215.59801441295113 L 231.76782067803904 215.59801441295113 L 231.76782067803904 321.0009992370605 Z" fill="rgba(127,125,127,0.85)" fillOpacity={1} id="SvgjsPath1905" index={0} j={5} pathfrom="M 211.23143150403558 321.0009992370605 L 211.23143150403558 321.0009992370605 L 231.76782067803904 321.0009992370605 L 231.76782067803904 321.0009992370605 L 231.76782067803904 321.0009992370605 L 231.76782067803904 321.0009992370605 L 231.76782067803904 321.0009992370605 L 211.23143150403558 321.0009992370605 Z" pathto="M 211.23143150403558 321.0009992370605 L 211.23143150403558 215.59801441295113 L 231.76782067803904 215.59801441295113 L 231.76782067803904 321.0009992370605 Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} val={22} />
                                            <path barheight="177.26865629509308" barwidth="20.53638917400346" className="apexcharts-bar-area" clipPath="url(#gridRectMaskeag3cbe2)" cx="275.7743689080464" cy="143.73134294196745" d="M 255.237979734043 321.0009992370605 L 255.237979734043 143.73234294196746 L 275.7743689080464 143.73234294196746 L 275.7743689080464 321.0009992370605 Z" fill="rgba(127,125,127,0.85)" fillOpacity={1} id="SvgjsPath1907" index={0} j={6} pathfrom="M 255.237979734043 321.0009992370605 L 255.237979734043 321.0009992370605 L 275.7743689080464 321.0009992370605 L 275.7743689080464 321.0009992370605 L 275.7743689080464 321.0009992370605 L 275.7743689080464 321.0009992370605 L 275.7743689080464 321.0009992370605 L 255.237979734043 321.0009992370605 Z" pathto="M 255.237979734043 321.0009992370605 L 255.237979734043 143.73234294196746 L 275.7743689080464 143.73234294196746 L 275.7743689080464 321.0009992370605 Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} val={37} />
                                            <path barheight="100.61194005937716" barwidth="20.53638917400346" className="apexcharts-bar-area" clipPath="url(#gridRectMaskeag3cbe2)" cx="321.24780207905417" cy="220.38805917768337" d="M 300.7114129050507 321.0009992370605 L 300.7114129050507 220.38905917768338 L 321.24780207905417 220.38905917768338 L 321.24780207905417 321.0009992370605 Z" fill="rgba(127,125,127,0.85)" fillOpacity={1} id="SvgjsPath1909" index={0} j={7} pathfrom="M 300.7114129050507 321.0009992370605 L 300.7114129050507 321.0009992370605 L 321.24780207905417 321.0009992370605 L 321.24780207905417 321.0009992370605 L 321.24780207905417 321.0009992370605 L 321.24780207905417 321.0009992370605 L 321.24780207905417 321.0009992370605 L 300.7114129050507 321.0009992370605 Z" pathto="M 300.7114129050507 321.0009992370605 L 300.7114129050507 220.38905917768338 L 321.24780207905417 220.38905917768338 L 321.24780207905417 321.0009992370605 Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} val={21} />
                                            <path barheight="210.80596964821882" barwidth="20.53638917400346" className="apexcharts-bar-area" clipPath="url(#gridRectMaskeag3cbe2)" cx="366.7212352500618" cy="110.19402958884172" d="M 346.18484607605836 321.0009992370605 L 346.18484607605836 110.19502958884172 L 366.7212352500618 110.19502958884172 L 366.7212352500618 321.0009992370605 Z" fill="rgba(127,125,127,0.85)" fillOpacity={1} id="SvgjsPath1911" index={0} j={8} pathfrom="M 346.18484607605836 321.0009992370605 L 346.18484607605836 321.0009992370605 L 366.7212352500618 321.0009992370605 L 366.7212352500618 321.0009992370605 L 366.7212352500618 321.0009992370605 L 366.7212352500618 321.0009992370605 L 366.7212352500618 321.0009992370605 L 346.18484607605836 321.0009992370605 Z" pathto="M 346.18484607605836 321.0009992370605 L 346.18484607605836 110.19502958884172 L 366.7212352500618 110.19502958884172 L 366.7212352500618 321.0009992370605 Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} val={44} />
                                            <path barheight="105.40298482410941" barwidth="20.53638917400346" className="apexcharts-bar-area" clipPath="url(#gridRectMaskeag3cbe2)" cx="410.7277834800692" cy="215.59701441295113" d="M 390.1913943060658 321.0009992370605 L 390.1913943060658 215.59801441295113 L 410.7277834800692 215.59801441295113 L 410.7277834800692 321.0009992370605 Z" fill="rgba(127,125,127,0.85)" fillOpacity={1} id="SvgjsPath1913" index={0} j={9} pathfrom="M 390.1913943060658 321.0009992370605 L 390.1913943060658 321.0009992370605 L 410.7277834800692 321.0009992370605 L 410.7277834800692 321.0009992370605 L 410.7277834800692 321.0009992370605 L 410.7277834800692 321.0009992370605 L 410.7277834800692 321.0009992370605 L 390.1913943060658 321.0009992370605 Z" pathto="M 390.1913943060658 321.0009992370605 L 390.1913943060658 215.59801441295113 L 410.7277834800692 215.59801441295113 L 410.7277834800692 321.0009992370605 Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} val={22} />
                                            <path barheight="143.73134294196737" barwidth="20.53638917400346" className="apexcharts-bar-area" clipPath="url(#gridRectMaskeag3cbe2)" cx="456.20121665107683" cy="177.26865629509317" d="M 435.6648274770734 321.0009992370605 L 435.6648274770734 177.26965629509317 L 456.20121665107683 177.26965629509317 L 456.20121665107683 321.0009992370605 Z" fill="rgba(127,125,127,0.85)" fillOpacity={1} id="SvgjsPath1915" index={0} j={10} pathfrom="M 435.6648274770734 321.0009992370605 L 435.6648274770734 321.0009992370605 L 456.20121665107683 321.0009992370605 L 456.20121665107683 321.0009992370605 L 456.20121665107683 321.0009992370605 L 456.20121665107683 321.0009992370605 L 456.20121665107683 321.0009992370605 L 435.6648274770734 321.0009992370605 Z" pathto="M 435.6648274770734 321.0009992370605 L 435.6648274770734 177.26965629509317 L 456.20121665107683 177.26965629509317 L 456.20121665107683 321.0009992370605 Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} val={30} />
                                            <g className="apexcharts-bar-goals-markers" id="SvgjsG1893" style={{pointerEvents: 'none'}}>
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG1894" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG1896" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG1898" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG1900" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG1902" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG1904" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG1906" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG1908" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG1910" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG1912" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG1914" />
                                            </g>
                                          </g>
                                        </g>
                                        <g className="apexcharts-line-series apexcharts-plot-series" id="SvgjsG1916">
                                          <g className="apexcharts-series" data-longestseries="true" data-realindex={2} id="SvgjsG1917" rel={1} seriesname="ProjectxC">
                                            <path className="apexcharts-line" clipPath="url(#gridRectMaskeag3cbe2)" d="M 0 177.26865629509317C 15.91570160985268 177.26865629509317 29.55773156115498 201.22388011875438 45.47343317100766 201.22388011875438C 59.848905592810084 201.22388011875438 72.17073909721216 148.52238770669967 86.54621151901459 148.52238770669967C 102.46191312886728 148.52238770669967 116.10394308016957 177.26865629509317 132.01964469002226 177.26865629509317C 147.42193657052485 177.26865629509317 160.62390103952708 105.40298482410947 176.02619292002967 105.40298482410947C 191.94189452988235 105.40298482410947 205.58392448118465 153.31343247143192 221.49962609103733 153.31343247143192C 236.90191797153992 153.31343247143192 250.10388244054215 14.373134294196802 265.50617432104474 14.373134294196802C 281.42187593089744 14.373134294196802 295.0639058821997 71.86567147098376 310.9796074920524 71.86567147098376C 326.8953091019051 71.86567147098376 340.5373390532074 38.328358117858045 356.4530406630601 38.328358117858045C 371.8553325435627 38.328358117858045 385.0572970125649 148.52238770669967 400.4595888930675 148.52238770669967C 416.37529050292017 148.52238770669967 430.0173204542225 134.14925341250296 445.93302206407515 134.14925341250296" fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath1920" index={2} pathfrom="M -1 320.99999923706054 L -1 320.99999923706054 L 45.47343317100766 320.99999923706054 L 86.54621151901459 320.99999923706054 L 132.01964469002226 320.99999923706054 L 176.02619292002967 320.99999923706054 L 221.49962609103733 320.99999923706054 L 265.50617432104474 320.99999923706054 L 310.9796074920524 320.99999923706054 L 356.4530406630601 320.99999923706054 L 400.4595888930675 320.99999923706054 L 445.93302206407515 320.99999923706054" pathto="M 0 177.26865629509317C 15.91570160985268 177.26865629509317 29.55773156115498 201.22388011875438 45.47343317100766 201.22388011875438C 59.848905592810084 201.22388011875438 72.17073909721216 148.52238770669967 86.54621151901459 148.52238770669967C 102.46191312886728 148.52238770669967 116.10394308016957 177.26865629509317 132.01964469002226 177.26865629509317C 147.42193657052485 177.26865629509317 160.62390103952708 105.40298482410947 176.02619292002967 105.40298482410947C 191.94189452988235 105.40298482410947 205.58392448118465 153.31343247143192 221.49962609103733 153.31343247143192C 236.90191797153992 153.31343247143192 250.10388244054215 14.373134294196802 265.50617432104474 14.373134294196802C 281.42187593089744 14.373134294196802 295.0639058821997 71.86567147098376 310.9796074920524 71.86567147098376C 326.8953091019051 71.86567147098376 340.5373390532074 38.328358117858045 356.4530406630601 38.328358117858045C 371.8553325435627 38.328358117858045 385.0572970125649 148.52238770669967 400.4595888930675 148.52238770669967C 416.37529050292017 148.52238770669967 430.0173204542225 134.14925341250296 445.93302206407515 134.14925341250296" stroke="rgba(254,168,97,1)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={5} />
                                            <g className="apexcharts-series-markers-wrap" data-realindex={2} id="SvgjsG1918">
                                              <g className="apexcharts-series-markers">
                                                <circle className="apexcharts-marker w0upzb83gg" cx={0} cy={0} default-marker-size={0} fill="#fea861" fillOpacity={1} id="SvgjsCircle2019" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                              </g>
                                            </g>
                                          </g>
                                          <g className="apexcharts-datalabels" data-realindex={1} id="SvgjsG1887" />
                                          <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG1892" />
                                          <g className="apexcharts-datalabels" data-realindex={2} id="SvgjsG1919" />
                                        </g>
                                        <line className="apexcharts-ycrosshairs" id="SvgjsLine1952" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1="-19.91369698340433" x2="465.8467190474795" y1={0} y2={0} />
                                        <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine1953" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1="-19.91369698340433" x2="465.8467190474795" y1={0} y2={0} />
                                        <g className="apexcharts-yaxis-annotations" id="SvgjsG1954" />
                                        <g className="apexcharts-xaxis-annotations" id="SvgjsG1955" />
                                        <g className="apexcharts-point-annotations" id="SvgjsG1956" />
                                        <g className="apexcharts-xaxis" id="SvgjsG1957" transform="translate(0, 0)">
                                          <g className="apexcharts-xaxis-texts-g" id="SvgjsG1958" transform="translate(0, -4)">
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1960" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="1.4668849410002471" y="349.99999923706054">
                                              <tspan id="SvgjsTspan1961">2003</tspan>
                                              <title>2003</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1963" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="46.94031811200791" y="349.99999923706054">
                                              <tspan id="SvgjsTspan1964">
                                                Feb '03
                                              </tspan>
                                              <title>Feb '03</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1966" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="133.48652963102248" y="349.99999923706054">
                                              <tspan id="SvgjsTspan1967">
                                                Apr '03
                                              </tspan>
                                              <title>Apr '03</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1969" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="222.96651103203754" y="349.99999923706054">
                                              <tspan id="SvgjsTspan1970">
                                                Jun '03
                                              </tspan>
                                              <title>Jun '03</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1972" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="312.44649243305264" y="349.99999923706054">
                                              <tspan id="SvgjsTspan1973">
                                                Aug '03
                                              </tspan>
                                              <title>Aug '03</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1975" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="401.92647383406774" y="349.99999923706054">
                                              <tspan id="SvgjsTspan1976">
                                                Oct '03
                                              </tspan>
                                              <title>Oct '03</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1978" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="447.3999070050754" y="349.99999923706054">
                                              <tspan id="SvgjsTspan1979">
                                                Nov '03
                                              </tspan>
                                              <title>Nov '03</title>
                                            </text>
                                          </g>
                                        </g>
                                        <rect className="apexcharts-zoom-rect" fill="#fefefe" height={0} id="SvgjsRect2020" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        <rect className="apexcharts-selection-rect" fill="#fefefe" height={0} id="SvgjsRect2021" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                      </g>
                                    </svg>
                                    <div className="apexcharts-tooltip apexcharts-theme-dark">
                                      <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                      <div className="apexcharts-tooltip-series-group" style={{order: 1}}>
                                        <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(127, 125, 127)'}}>
                                        </span>
                                        <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}}>
                                          <div className="apexcharts-tooltip-y-group">
                                            <span className="apexcharts-tooltip-text-y-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-y-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-goals-group">
                                            <span className="apexcharts-tooltip-text-goals-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-goals-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-z-group">
                                            <span className="apexcharts-tooltip-text-z-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-z-value">
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="apexcharts-tooltip-series-group" style={{order: 2}}>
                                        <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(172, 147, 229)'}}>
                                        </span>
                                        <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}}>
                                          <div className="apexcharts-tooltip-y-group">
                                            <span className="apexcharts-tooltip-text-y-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-y-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-goals-group">
                                            <span className="apexcharts-tooltip-text-goals-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-goals-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-z-group">
                                            <span className="apexcharts-tooltip-text-z-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-z-value">
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="apexcharts-tooltip-series-group" style={{order: 3}}>
                                        <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(254, 168, 97)'}}>
                                        </span>
                                        <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}}>
                                          <div className="apexcharts-tooltip-y-group">
                                            <span className="apexcharts-tooltip-text-y-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-y-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-goals-group">
                                            <span className="apexcharts-tooltip-text-goals-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-goals-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-z-group">
                                            <span className="apexcharts-tooltip-text-z-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-z-value">
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-dark">
                                      <div className="apexcharts-xaxistooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                    </div>
                                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                                      <div className="apexcharts-yaxistooltip-text" />
                                    </div>
                                    <div className="apexcharts-toolbar" style={{top: '0px', right: '3px'}}>
                                      <div className="apexcharts-zoomin-icon" title="Zoom In">
                                        <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0 0h24v24H0z" fill="none" />
                                          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                        </svg>
                                      </div>
                                      <div className="apexcharts-zoomout-icon" title="Zoom Out">
                                        <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0 0h24v24H0z" fill="none" />
                                          <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                        </svg>
                                      </div>
                                      <div className="apexcharts-zoom-icon apexcharts-selected" title="Selection Zoom">
                                        <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                          <path d="M0 0h24v24H0V0z" fill="none" />
                                          <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                                        </svg>
                                      </div>
                                      <div className="apexcharts-pan-icon" title="Panning">
                                        <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                          <defs>
                                            <path d="M0 0h24v24H0z" id="a" />
                                          </defs>
                                          <clipPath id="b">
                                            <use overflow="visible" xlinkHref="#a" />
                                          </clipPath>
                                          <path clipPath="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" />
                                        </svg>
                                      </div>
                                      <div className="apexcharts-reset-icon" title="Reset Zoom">
                                        <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                          <path d="M0 0h24v24H0z" fill="none" />
                                        </svg>
                                      </div>
                                      <div className="apexcharts-menu-icon" title="Menu">
                                        <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0 0h24v24H0V0z" fill="none" />
                                          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                                        </svg>
                                      </div>
                                      <div className="apexcharts-menu">
                                        <div className="apexcharts-menu-item exportSVG" title="Download SVG">
                                          Download SVG
                                        </div>
                                        <div className="apexcharts-menu-item exportPNG" title="Download PNG">
                                          Download PNG
                                        </div>
                                        <div className="apexcharts-menu-item exportCSV" title="Download CSV">
                                          Download CSV
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </apx-chart>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-sas-c142 className="col-xl-4">
                          <div _ngcontent-sas-c142 className="row">
                            <div _ngcontent-sas-c142 className="col-lg-6">
                              <div _ngcontent-sas-c142 className="card card-statistic-2">
                                <div _ngcontent-sas-c142 className="clearfix">
                                  <div _ngcontent-sas-c142 className="card-right">
                                    <div _ngcontent-sas-c142>
                                      <h5 _ngcontent-sas-c142 className="float-end">
                                        Earning
                                      </h5>
                                    </div>
                                    <div _ngcontent-sas-c142 className="m-r-10 m-l-10">
                                      <h3 _ngcontent-sas-c142 className="font-weight-bold float-end mb-0">
                                        $20,125
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                                <apx-chart _ngcontent-sas-c142 _nghost-sas-c139>
                                  <div _ngcontent-sas-c139 style={{minHeight: '70px'}}>
                                    <div className="apexcharts-canvas apexchartsob5vx87p apexcharts-theme-light" id="apexchartsob5vx87p" style={{width: '140px', height: '70px'}}>
                                      <svg className="apexcharts-svg" height={70} id="SvgjsSvg2023" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={140} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG2025" transform="translate(0, 0)">
                                          <defs id="SvgjsDefs2024">
                                            <clipPath id="gridRectMaskob5vx87p">
                                              <rect fill="#fff" height={74} id="SvgjsRect2031" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={148} x={-4} y={-2} />
                                            </clipPath>
                                            <clipPath id="forecastMaskob5vx87p" />
                                            <clipPath id="nonForecastMaskob5vx87p" />
                                            <clipPath id="gridRectMarkerMaskob5vx87p">
                                              <rect fill="#fff" height={74} id="SvgjsRect2032" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={144} x={-2} y={-2} />
                                            </clipPath>
                                            <linearGradient id="SvgjsLinearGradient2037" x1={0} x2={0} y1={0} y2={1}>
                                              <stop id="SvgjsStop2038" offset={0} stopColor="rgba(111,66,193,0.65)" stopOpacity="0.65" />
                                              <stop id="SvgjsStop2039" offset={1} stopColor="rgba(183,161,224,0.5)" stopOpacity="0.5" />
                                              <stop id="SvgjsStop2040" offset={1} stopColor="rgba(183,161,224,0.5)" stopOpacity="0.5" />
                                            </linearGradient>
                                          </defs>
                                          <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height={70} id="SvgjsLine2030" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2={70} />
                                          <g className="apexcharts-grid" id="SvgjsG2043">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG2044" style={{display: 'none'}}>
                                              <line className="apexcharts-gridline" id="SvgjsLine2064" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1="17.5" y2="17.5" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2065" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={35} y2={35} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2066" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1="52.5" y2="52.5" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG2045" style={{display: 'none'}}>
                                              <line className="apexcharts-gridline" id="SvgjsLine2047" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2048" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="9.333333333333334" x2="9.333333333333334" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2049" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="18.666666666666668" x2="18.666666666666668" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2050" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={28} x2={28} y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2051" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="37.333333333333336" x2="37.333333333333336" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2052" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="46.66666666666667" x2="46.66666666666667" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2053" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="56.00000000000001" x2="56.00000000000001" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2054" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="65.33333333333334" x2="65.33333333333334" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2055" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="74.66666666666667" x2="74.66666666666667" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2056" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={84} x2={84} y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2057" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="93.33333333333333" x2="93.33333333333333" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2058" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="102.66666666666666" x2="102.66666666666666" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2059" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="111.99999999999999" x2="111.99999999999999" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2060" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="121.33333333333331" x2="121.33333333333331" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2061" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="130.66666666666666" x2="130.66666666666666" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2062" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={140} x2={140} y1={0} y2={70} />
                                            </g>
                                            <line id="SvgjsLine2069" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={70} y2={70} />
                                            <line id="SvgjsLine2068" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2={70} />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG2046" style={{display: 'none'}}>
                                            <line className="apexcharts-gridline" id="SvgjsLine2063" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine2067" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={70} y2={70} />
                                          </g>
                                          <g className="apexcharts-area-series apexcharts-plot-series" id="SvgjsG2033">
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG2034" rel={1} seriesname="Appointments">
                                              <path className="apexcharts-area" clipPath="url(#gridRectMaskob5vx87p)" d="M 0 70 L 0 43.75C 3.2666666666666666 43.75 6.066666666666667 34.125 9.333333333333334 34.125C 12.600000000000001 34.125 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 24.5 37.333333333333336 24.5C 40.6 24.5 43.400000000000006 42 46.66666666666667 42C 49.93333333333334 42 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 51.625 65.33333333333334 51.625C 68.60000000000001 51.625 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 48.125 84 48.125C 87.26666666666667 48.125 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 6.125 112 6.125C 115.26666666666667 6.125 118.06666666666668 32.375 121.33333333333334 32.375C 124.60000000000001 32.375 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 33.25 140 33.25C 140 33.25 140 33.25 140 70M 140 33.25z" fill="url(#SvgjsLinearGradient2037)" fillOpacity={1} id="SvgjsPath2041" index={0} pathfrom="M -1 87.5 L -1 87.5 L 9.333333333333334 87.5 L 18.666666666666668 87.5 L 28 87.5 L 37.333333333333336 87.5 L 46.66666666666667 87.5 L 56 87.5 L 65.33333333333334 87.5 L 74.66666666666667 87.5 L 84 87.5 L 93.33333333333334 87.5 L 102.66666666666667 87.5 L 112 87.5 L 121.33333333333334 87.5 L 130.66666666666669 87.5 L 140 87.5" pathto="M 0 70 L 0 43.75C 3.2666666666666666 43.75 6.066666666666667 34.125 9.333333333333334 34.125C 12.600000000000001 34.125 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 24.5 37.333333333333336 24.5C 40.6 24.5 43.400000000000006 42 46.66666666666667 42C 49.93333333333334 42 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 51.625 65.33333333333334 51.625C 68.60000000000001 51.625 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 48.125 84 48.125C 87.26666666666667 48.125 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 6.125 112 6.125C 115.26666666666667 6.125 118.06666666666668 32.375 121.33333333333334 32.375C 124.60000000000001 32.375 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 33.25 140 33.25C 140 33.25 140 33.25 140 70M 140 33.25z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                              <path className="apexcharts-area" clipPath="url(#gridRectMaskob5vx87p)" d="M 0 43.75C 3.2666666666666666 43.75 6.066666666666667 34.125 9.333333333333334 34.125C 12.600000000000001 34.125 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 24.5 37.333333333333336 24.5C 40.6 24.5 43.400000000000006 42 46.66666666666667 42C 49.93333333333334 42 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 51.625 65.33333333333334 51.625C 68.60000000000001 51.625 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 48.125 84 48.125C 87.26666666666667 48.125 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 6.125 112 6.125C 115.26666666666667 6.125 118.06666666666668 32.375 121.33333333333334 32.375C 124.60000000000001 32.375 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 33.25 140 33.25" fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath2042" index={0} pathfrom="M -1 87.5 L -1 87.5 L 9.333333333333334 87.5 L 18.666666666666668 87.5 L 28 87.5 L 37.333333333333336 87.5 L 46.66666666666667 87.5 L 56 87.5 L 65.33333333333334 87.5 L 74.66666666666667 87.5 L 84 87.5 L 93.33333333333334 87.5 L 102.66666666666667 87.5 L 112 87.5 L 121.33333333333334 87.5 L 130.66666666666669 87.5 L 140 87.5" pathto="M 0 43.75C 3.2666666666666666 43.75 6.066666666666667 34.125 9.333333333333334 34.125C 12.600000000000001 34.125 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 24.5 37.333333333333336 24.5C 40.6 24.5 43.400000000000006 42 46.66666666666667 42C 49.93333333333334 42 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 51.625 65.33333333333334 51.625C 68.60000000000001 51.625 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 48.125 84 48.125C 87.26666666666667 48.125 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 6.125 112 6.125C 115.26666666666667 6.125 118.06666666666668 32.375 121.33333333333334 32.375C 124.60000000000001 32.375 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 33.25 140 33.25" stroke="#6f42c1" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={4} />
                                              <g className="apexcharts-series-markers-wrap" data-realindex={0} id="SvgjsG2035">
                                                <g className="apexcharts-series-markers">
                                                  <circle className="apexcharts-marker wm35rad84 no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#6f42c1" fillOpacity={1} id="SvgjsCircle2094" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG2036" />
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine2070" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2={140} y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine2071" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2={140} y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations" id="SvgjsG2072" />
                                          <g className="apexcharts-xaxis-annotations" id="SvgjsG2073" />
                                          <g className="apexcharts-point-annotations" id="SvgjsG2074" />
                                          <g className="apexcharts-xaxis" id="SvgjsG2075" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG2076" transform="translate(0, 4)" />
                                          </g>
                                        </g>
                                        <g className="apexcharts-annotations" id="SvgjsG2026" />
                                        <g className="apexcharts-yaxis" id="SvgjsG2093" rel={0} transform="translate(-18, 0)" />
                                        <rect fill="#fefefe" height={0} id="SvgjsRect2029" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                      </svg>
                                      <div className="apexcharts-legend" style={{maxHeight: '35px'}} />
                                      <div className="apexcharts-tooltip apexcharts-theme-dark">
                                        <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                        <div className="apexcharts-tooltip-series-group" style={{order: 1}}>
                                          <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(111, 66, 193)'}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial,sans-serif', fontSize: '12px'}}>
                                            <div className="apexcharts-tooltip-y-group">
                                              <span className="apexcharts-tooltip-text-y-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-y-value">
                                              </span>
                                            </div>
                                            <div className="apexcharts-tooltip-goals-group">
                                              <span className="apexcharts-tooltip-text-goals-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-goals-value">
                                              </span>
                                            </div>
                                            <div className="apexcharts-tooltip-z-group">
                                              <span className="apexcharts-tooltip-text-z-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-z-value">
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                                        <div className="apexcharts-yaxistooltip-text" />
                                      </div>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                            </div>
                            <div _ngcontent-sas-c142 className="col-lg-6">
                              <div _ngcontent-sas-c142 className="card card-statistic-2">
                                <div _ngcontent-sas-c142 className="clearfix">
                                  <div _ngcontent-sas-c142 className="card-right">
                                    <div _ngcontent-sas-c142>
                                      <h5 _ngcontent-sas-c142 className="float-end">
                                        New Clients
                                      </h5>
                                    </div>
                                    <div _ngcontent-sas-c142 className="m-r-10 m-l-10">
                                      <h3 _ngcontent-sas-c142 className="font-weight-bold float-end mb-0">
                                        129
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                                <apx-chart _ngcontent-sas-c142 _nghost-sas-c139>
                                  <div _ngcontent-sas-c139 style={{minHeight: '70px'}}>
                                    <div className="apexcharts-canvas apexchartshk4zlukv apexcharts-theme-light" id="apexchartshk4zlukv" style={{width: '140px', height: '70px'}}>
                                      <svg className="apexcharts-svg" height={70} id="SvgjsSvg2096" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={140} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG2098" transform="translate(0, 0)">
                                          <defs id="SvgjsDefs2097">
                                            <clipPath id="gridRectMaskhk4zlukv">
                                              <rect fill="#fff" height={74} id="SvgjsRect2104" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={148} x={-4} y={-2} />
                                            </clipPath>
                                            <clipPath id="forecastMaskhk4zlukv" />
                                            <clipPath id="nonForecastMaskhk4zlukv" />
                                            <clipPath id="gridRectMarkerMaskhk4zlukv">
                                              <rect fill="#fff" height={74} id="SvgjsRect2105" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={144} x={-2} y={-2} />
                                            </clipPath>
                                            <linearGradient id="SvgjsLinearGradient2110" x1={0} x2={0} y1={0} y2={1}>
                                              <stop id="SvgjsStop2111" offset={0} stopColor="rgba(253,126,20,0.65)" stopOpacity="0.65" />
                                              <stop id="SvgjsStop2112" offset={1} stopColor="rgba(254,191,138,0.5)" stopOpacity="0.5" />
                                              <stop id="SvgjsStop2113" offset={1} stopColor="rgba(254,191,138,0.5)" stopOpacity="0.5" />
                                            </linearGradient>
                                          </defs>
                                          <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height={70} id="SvgjsLine2103" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2={70} />
                                          <g className="apexcharts-grid" id="SvgjsG2116">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG2117" style={{display: 'none'}}>
                                              <line className="apexcharts-gridline" id="SvgjsLine2137" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1="17.5" y2="17.5" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2138" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={35} y2={35} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2139" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1="52.5" y2="52.5" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG2118" style={{display: 'none'}}>
                                              <line className="apexcharts-gridline" id="SvgjsLine2120" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2121" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="9.333333333333334" x2="9.333333333333334" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2122" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="18.666666666666668" x2="18.666666666666668" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2123" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={28} x2={28} y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2124" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="37.333333333333336" x2="37.333333333333336" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2125" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="46.66666666666667" x2="46.66666666666667" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2126" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="56.00000000000001" x2="56.00000000000001" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2127" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="65.33333333333334" x2="65.33333333333334" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2128" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="74.66666666666667" x2="74.66666666666667" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2129" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={84} x2={84} y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2130" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="93.33333333333333" x2="93.33333333333333" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2131" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="102.66666666666666" x2="102.66666666666666" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2132" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="111.99999999999999" x2="111.99999999999999" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2133" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="121.33333333333331" x2="121.33333333333331" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2134" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="130.66666666666666" x2="130.66666666666666" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2135" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={140} x2={140} y1={0} y2={70} />
                                            </g>
                                            <line id="SvgjsLine2142" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={70} y2={70} />
                                            <line id="SvgjsLine2141" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2={70} />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG2119" style={{display: 'none'}}>
                                            <line className="apexcharts-gridline" id="SvgjsLine2136" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine2140" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={70} y2={70} />
                                          </g>
                                          <g className="apexcharts-area-series apexcharts-plot-series" id="SvgjsG2106">
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG2107" rel={1} seriesname="Operations">
                                              <path className="apexcharts-area" clipPath="url(/gridRectMaskhk4zlukv)" d="M 0 70 L 0 43.75C 3.2666666666666666 43.75 6.066666666666667 35 9.333333333333334 35C 12.600000000000001 35 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 26.25 37.333333333333336 26.25C 40.6 26.25 43.400000000000006 43.75 46.66666666666667 43.75C 49.93333333333334 43.75 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 52.5 65.33333333333334 52.5C 68.60000000000001 52.5 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 52.5 84 52.5C 87.26666666666667 52.5 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 8.75 112 8.75C 115.26666666666667 8.75 118.06666666666668 35 121.33333333333334 35C 124.60000000000001 35 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 35 140 35C 140 35 140 35 140 70M 140 35z" fill="url(#SvgjsLinearGradient2110)" fillOpacity={1} id="SvgjsPath2114" index={0} pathfrom="M -1 87.5 L -1 87.5 L 9.333333333333334 87.5 L 18.666666666666668 87.5 L 28 87.5 L 37.333333333333336 87.5 L 46.66666666666667 87.5 L 56 87.5 L 65.33333333333334 87.5 L 74.66666666666667 87.5 L 84 87.5 L 93.33333333333334 87.5 L 102.66666666666667 87.5 L 112 87.5 L 121.33333333333334 87.5 L 130.66666666666669 87.5 L 140 87.5" pathto="M 0 70 L 0 43.75C 3.2666666666666666 43.75 6.066666666666667 35 9.333333333333334 35C 12.600000000000001 35 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 26.25 37.333333333333336 26.25C 40.6 26.25 43.400000000000006 43.75 46.66666666666667 43.75C 49.93333333333334 43.75 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 52.5 65.33333333333334 52.5C 68.60000000000001 52.5 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 52.5 84 52.5C 87.26666666666667 52.5 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 8.75 112 8.75C 115.26666666666667 8.75 118.06666666666668 35 121.33333333333334 35C 124.60000000000001 35 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 35 140 35C 140 35 140 35 140 70M 140 35z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                              <path className="apexcharts-area" clipPath="url(/gridRectMaskhk4zlukv)" d="M 0 43.75C 3.2666666666666666 43.75 6.066666666666667 35 9.333333333333334 35C 12.600000000000001 35 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 26.25 37.333333333333336 26.25C 40.6 26.25 43.400000000000006 43.75 46.66666666666667 43.75C 49.93333333333334 43.75 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 52.5 65.33333333333334 52.5C 68.60000000000001 52.5 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 52.5 84 52.5C 87.26666666666667 52.5 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 8.75 112 8.75C 115.26666666666667 8.75 118.06666666666668 35 121.33333333333334 35C 124.60000000000001 35 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 35 140 35" fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath2115" index={0} pathfrom="M -1 87.5 L -1 87.5 L 9.333333333333334 87.5 L 18.666666666666668 87.5 L 28 87.5 L 37.333333333333336 87.5 L 46.66666666666667 87.5 L 56 87.5 L 65.33333333333334 87.5 L 74.66666666666667 87.5 L 84 87.5 L 93.33333333333334 87.5 L 102.66666666666667 87.5 L 112 87.5 L 121.33333333333334 87.5 L 130.66666666666669 87.5 L 140 87.5" pathto="M 0 43.75C 3.2666666666666666 43.75 6.066666666666667 35 9.333333333333334 35C 12.600000000000001 35 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 26.25 37.333333333333336 26.25C 40.6 26.25 43.400000000000006 43.75 46.66666666666667 43.75C 49.93333333333334 43.75 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 52.5 65.33333333333334 52.5C 68.60000000000001 52.5 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 52.5 84 52.5C 87.26666666666667 52.5 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 8.75 112 8.75C 115.26666666666667 8.75 118.06666666666668 35 121.33333333333334 35C 124.60000000000001 35 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 35 140 35" stroke="#fd7e14" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={4} />
                                              <g className="apexcharts-series-markers-wrap" data-realindex={0} id="SvgjsG2108">
                                                <g className="apexcharts-series-markers">
                                                  <circle className="apexcharts-marker wi2gxnaglk no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#fd7e14" fillOpacity={1} id="SvgjsCircle2167" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG2109" />
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine2143" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2={140} y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine2144" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2={140} y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations" id="SvgjsG2145" />
                                          <g className="apexcharts-xaxis-annotations" id="SvgjsG2146" />
                                          <g className="apexcharts-point-annotations" id="SvgjsG2147" />
                                          <g className="apexcharts-xaxis" id="SvgjsG2148" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG2149" transform="translate(0, 4)" />
                                          </g>
                                        </g>
                                        <g className="apexcharts-annotations" id="SvgjsG2099" />
                                        <g className="apexcharts-yaxis" id="SvgjsG2166" rel={0} transform="translate(-18, 0)" />
                                        <rect fill="#fefefe" height={0} id="SvgjsRect2102" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                      </svg>
                                      <div className="apexcharts-legend" style={{maxHeight: '35px'}} />
                                      <div className="apexcharts-tooltip apexcharts-theme-dark">
                                        <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                        <div className="apexcharts-tooltip-series-group" style={{order: 1}}>
                                          <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(253, 126, 20)'}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial,sans-serif', fontSize: '12px'}}>
                                            <div className="apexcharts-tooltip-y-group">
                                              <span className="apexcharts-tooltip-text-y-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-y-value">
                                              </span>
                                            </div>
                                            <div className="apexcharts-tooltip-goals-group">
                                              <span className="apexcharts-tooltip-text-goals-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-goals-value">
                                              </span>
                                            </div>
                                            <div className="apexcharts-tooltip-z-group">
                                              <span className="apexcharts-tooltip-text-z-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-z-value">
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                                        <div className="apexcharts-yaxistooltip-text" />
                                      </div>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                            </div>
                            <div _ngcontent-sas-c142 className="col-lg-6">
                              <div _ngcontent-sas-c142 className="card card-statistic-2">
                                <div _ngcontent-sas-c142 className="clearfix">
                                  <div _ngcontent-sas-c142 className="card-right">
                                    <div _ngcontent-sas-c142>
                                      <h5 _ngcontent-sas-c142 className="float-end">
                                        Projects
                                      </h5>
                                    </div>
                                    <div _ngcontent-sas-c142 className="m-r-10 m-l-10">
                                      <h3 _ngcontent-sas-c142 className="font-weight-bold float-end mb-0">
                                        154
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                                <apx-chart _ngcontent-sas-c142 _nghost-sas-c139>
                                  <div _ngcontent-sas-c139 style={{minHeight: '70px'}}>
                                    <div className="apexcharts-canvas apexchartsstnqchbq apexcharts-theme-light" id="apexchartsstnqchbq" style={{width: '140px', height: '70px'}}>
                                      <svg className="apexcharts-svg" height={70} id="SvgjsSvg2169" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={140} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG2171" transform="translate(0, 0)">
                                          <defs id="SvgjsDefs2170">
                                            <clipPath id="gridRectMaskstnqchbq">
                                              <rect fill="#fff" height={74} id="SvgjsRect2177" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={148} x={-4} y={-2} />
                                            </clipPath>
                                            <clipPath id="forecastMaskstnqchbq" />
                                            <clipPath id="nonForecastMaskstnqchbq" />
                                            <clipPath id="gridRectMarkerMaskstnqchbq">
                                              <rect fill="#fff" height={74} id="SvgjsRect2178" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={144} x={-2} y={-2} />
                                            </clipPath>
                                            <linearGradient id="SvgjsLinearGradient2183" x1={0} x2={0} y1={0} y2={1}>
                                              <stop id="SvgjsStop2184" offset={0} stopColor="rgba(76,175,80,0.65)" stopOpacity="0.65" />
                                              <stop id="SvgjsStop2185" offset={1} stopColor="rgba(166,215,168,0.5)" stopOpacity="0.5" />
                                              <stop id="SvgjsStop2186" offset={1} stopColor="rgba(166,215,168,0.5)" stopOpacity="0.5" />
                                            </linearGradient>
                                          </defs>
                                          <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height={70} id="SvgjsLine2176" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2={70} />
                                          <g className="apexcharts-grid" id="SvgjsG2189">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG2190" style={{display: 'none'}}>
                                              <line className="apexcharts-gridline" id="SvgjsLine2210" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1="17.5" y2="17.5" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2211" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={35} y2={35} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2212" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1="52.5" y2="52.5" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG2191" style={{display: 'none'}}>
                                              <line className="apexcharts-gridline" id="SvgjsLine2193" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2194" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="9.333333333333334" x2="9.333333333333334" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2195" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="18.666666666666668" x2="18.666666666666668" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2196" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={28} x2={28} y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2197" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="37.333333333333336" x2="37.333333333333336" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2198" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="46.66666666666667" x2="46.66666666666667" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2199" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="56.00000000000001" x2="56.00000000000001" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2200" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="65.33333333333334" x2="65.33333333333334" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2201" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="74.66666666666667" x2="74.66666666666667" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2202" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={84} x2={84} y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2203" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="93.33333333333333" x2="93.33333333333333" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2204" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="102.66666666666666" x2="102.66666666666666" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2205" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="111.99999999999999" x2="111.99999999999999" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2206" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="121.33333333333331" x2="121.33333333333331" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2207" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="130.66666666666666" x2="130.66666666666666" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2208" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={140} x2={140} y1={0} y2={70} />
                                            </g>
                                            <line id="SvgjsLine2215" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={70} y2={70} />
                                            <line id="SvgjsLine2214" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2={70} />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG2192" style={{display: 'none'}}>
                                            <line className="apexcharts-gridline" id="SvgjsLine2209" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine2213" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={70} y2={70} />
                                          </g>
                                          <g className="apexcharts-area-series apexcharts-plot-series" id="SvgjsG2179">
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG2180" rel={1} seriesname="NewxPatients">
                                              <path className="apexcharts-area" clipPath="url(#gridRectMaskstnqchbq)" d="M 0 70 L 0 43.75C 3.2666666666666666 43.75 6.066666666666667 34.125 9.333333333333334 34.125C 12.600000000000001 34.125 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 24.5 37.333333333333336 24.5C 40.6 24.5 43.400000000000006 42 46.66666666666667 42C 49.93333333333334 42 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 51.625 65.33333333333334 51.625C 68.60000000000001 51.625 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 48.125 84 48.125C 87.26666666666667 48.125 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 6.125 112 6.125C 115.26666666666667 6.125 118.06666666666668 32.375 121.33333333333334 32.375C 124.60000000000001 32.375 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 33.25 140 33.25C 140 33.25 140 33.25 140 70M 140 33.25z" fill="url(#SvgjsLinearGradient2183)" fillOpacity={1} id="SvgjsPath2187" index={0} pathfrom="M -1 87.5 L -1 87.5 L 9.333333333333334 87.5 L 18.666666666666668 87.5 L 28 87.5 L 37.333333333333336 87.5 L 46.66666666666667 87.5 L 56 87.5 L 65.33333333333334 87.5 L 74.66666666666667 87.5 L 84 87.5 L 93.33333333333334 87.5 L 102.66666666666667 87.5 L 112 87.5 L 121.33333333333334 87.5 L 130.66666666666669 87.5 L 140 87.5" pathto="M 0 70 L 0 43.75C 3.2666666666666666 43.75 6.066666666666667 34.125 9.333333333333334 34.125C 12.600000000000001 34.125 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 24.5 37.333333333333336 24.5C 40.6 24.5 43.400000000000006 42 46.66666666666667 42C 49.93333333333334 42 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 51.625 65.33333333333334 51.625C 68.60000000000001 51.625 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 48.125 84 48.125C 87.26666666666667 48.125 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 6.125 112 6.125C 115.26666666666667 6.125 118.06666666666668 32.375 121.33333333333334 32.375C 124.60000000000001 32.375 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 33.25 140 33.25C 140 33.25 140 33.25 140 70M 140 33.25z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                              <path className="apexcharts-area" clipPath="url(#gridRectMaskstnqchbq)" d="M 0 43.75C 3.2666666666666666 43.75 6.066666666666667 34.125 9.333333333333334 34.125C 12.600000000000001 34.125 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 24.5 37.333333333333336 24.5C 40.6 24.5 43.400000000000006 42 46.66666666666667 42C 49.93333333333334 42 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 51.625 65.33333333333334 51.625C 68.60000000000001 51.625 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 48.125 84 48.125C 87.26666666666667 48.125 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 6.125 112 6.125C 115.26666666666667 6.125 118.06666666666668 32.375 121.33333333333334 32.375C 124.60000000000001 32.375 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 33.25 140 33.25" fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath2188" index={0} pathfrom="M -1 87.5 L -1 87.5 L 9.333333333333334 87.5 L 18.666666666666668 87.5 L 28 87.5 L 37.333333333333336 87.5 L 46.66666666666667 87.5 L 56 87.5 L 65.33333333333334 87.5 L 74.66666666666667 87.5 L 84 87.5 L 93.33333333333334 87.5 L 102.66666666666667 87.5 L 112 87.5 L 121.33333333333334 87.5 L 130.66666666666669 87.5 L 140 87.5" pathto="M 0 43.75C 3.2666666666666666 43.75 6.066666666666667 34.125 9.333333333333334 34.125C 12.600000000000001 34.125 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 24.5 37.333333333333336 24.5C 40.6 24.5 43.400000000000006 42 46.66666666666667 42C 49.93333333333334 42 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 51.625 65.33333333333334 51.625C 68.60000000000001 51.625 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 48.125 84 48.125C 87.26666666666667 48.125 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 6.125 112 6.125C 115.26666666666667 6.125 118.06666666666668 32.375 121.33333333333334 32.375C 124.60000000000001 32.375 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 33.25 140 33.25" stroke="#4caf50" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={4} />
                                              <g className="apexcharts-series-markers-wrap" data-realindex={0} id="SvgjsG2181">
                                                <g className="apexcharts-series-markers">
                                                  <circle className="apexcharts-marker w6ekuvahe no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#4caf50" fillOpacity={1} id="SvgjsCircle2240" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG2182" />
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine2216" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2={140} y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine2217" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2={140} y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations" id="SvgjsG2218" />
                                          <g className="apexcharts-xaxis-annotations" id="SvgjsG2219" />
                                          <g className="apexcharts-point-annotations" id="SvgjsG2220" />
                                          <g className="apexcharts-xaxis" id="SvgjsG2221" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG2222" transform="translate(0, 4)" />
                                          </g>
                                        </g>
                                        <g className="apexcharts-annotations" id="SvgjsG2172" />
                                        <g className="apexcharts-yaxis" id="SvgjsG2239" rel={0} transform="translate(-18, 0)" />
                                        <rect fill="#fefefe" height={0} id="SvgjsRect2175" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                      </svg>
                                      <div className="apexcharts-legend" style={{maxHeight: '35px'}} />
                                      <div className="apexcharts-tooltip apexcharts-theme-dark">
                                        <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                        <div className="apexcharts-tooltip-series-group" style={{order: 1}}>
                                          <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(76, 175, 80)'}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial,sans-serif', fontSize: '12px'}}>
                                            <div className="apexcharts-tooltip-y-group">
                                              <span className="apexcharts-tooltip-text-y-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-y-value">
                                              </span>
                                            </div>
                                            <div className="apexcharts-tooltip-goals-group">
                                              <span className="apexcharts-tooltip-text-goals-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-goals-value">
                                              </span>
                                            </div>
                                            <div className="apexcharts-tooltip-z-group">
                                              <span className="apexcharts-tooltip-text-z-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-z-value">
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                                        <div className="apexcharts-yaxistooltip-text" />
                                      </div>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                            </div>
                            <div _ngcontent-sas-c142 className="col-lg-6">
                              <div _ngcontent-sas-c142 className="card card-statistic-2">
                                <div _ngcontent-sas-c142 className="clearfix">
                                  <div _ngcontent-sas-c142 className="card-right">
                                    <div _ngcontent-sas-c142>
                                      <h5 _ngcontent-sas-c142 className="float-end">
                                        Employees
                                      </h5>
                                    </div>
                                    <div _ngcontent-sas-c142 className="m-r-10 m-l-10">
                                      <h3 _ngcontent-sas-c142 className="font-weight-bold float-end mb-0">
                                        650
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                                <apx-chart _ngcontent-sas-c142 _nghost-sas-c139>
                                  <div _ngcontent-sas-c139 style={{minHeight: '70px'}}>
                                    <div className="apexcharts-canvas apexchartspf0tl3uh apexcharts-theme-light" id="apexchartspf0tl3uh" style={{width: '140px', height: '70px'}}>
                                      <svg className="apexcharts-svg" height={70} id="SvgjsSvg2242" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={140} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG2244" transform="translate(0, 0)">
                                          <defs id="SvgjsDefs2243">
                                            <clipPath id="gridRectMaskpf0tl3uh">
                                              <rect fill="#fff" height={74} id="SvgjsRect2250" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={148} x={-4} y={-2} />
                                            </clipPath>
                                            <clipPath id="forecastMaskpf0tl3uh" />
                                            <clipPath id="nonForecastMaskpf0tl3uh" />
                                            <clipPath id="gridRectMarkerMaskpf0tl3uh">
                                              <rect fill="#fff" height={74} id="SvgjsRect2251" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={144} x={-2} y={-2} />
                                            </clipPath>
                                            <linearGradient id="SvgjsLinearGradient2256" x1={0} x2={0} y1={0} y2={1}>
                                              <stop id="SvgjsStop2257" offset={0} stopColor="rgba(33,150,243,0.65)" stopOpacity="0.65" />
                                              <stop id="SvgjsStop2258" offset={1} stopColor="rgba(144,203,249,0.5)" stopOpacity="0.5" />
                                              <stop id="SvgjsStop2259" offset={1} stopColor="rgba(144,203,249,0.5)" stopOpacity="0.5" />
                                            </linearGradient>
                                          </defs>
                                          <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height={70} id="SvgjsLine2249" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2={70} />
                                          <g className="apexcharts-grid" id="SvgjsG2262">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG2263" style={{display: 'none'}}>
                                              <line className="apexcharts-gridline" id="SvgjsLine2283" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1="17.5" y2="17.5" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2284" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={35} y2={35} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2285" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1="52.5" y2="52.5" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG2264" style={{display: 'none'}}>
                                              <line className="apexcharts-gridline" id="SvgjsLine2266" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2267" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="9.333333333333334" x2="9.333333333333334" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2268" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="18.666666666666668" x2="18.666666666666668" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2269" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={28} x2={28} y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2270" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="37.333333333333336" x2="37.333333333333336" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2271" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="46.66666666666667" x2="46.66666666666667" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2272" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="56.00000000000001" x2="56.00000000000001" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2273" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="65.33333333333334" x2="65.33333333333334" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2274" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="74.66666666666667" x2="74.66666666666667" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2275" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={84} x2={84} y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2276" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="93.33333333333333" x2="93.33333333333333" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2277" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="102.66666666666666" x2="102.66666666666666" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2278" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="111.99999999999999" x2="111.99999999999999" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2279" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="121.33333333333331" x2="121.33333333333331" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2280" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="130.66666666666666" x2="130.66666666666666" y1={0} y2={70} />
                                              <line className="apexcharts-gridline" id="SvgjsLine2281" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={140} x2={140} y1={0} y2={70} />
                                            </g>
                                            <line id="SvgjsLine2288" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={70} y2={70} />
                                            <line id="SvgjsLine2287" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2={70} />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG2265" style={{display: 'none'}}>
                                            <line className="apexcharts-gridline" id="SvgjsLine2282" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine2286" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={140} y1={70} y2={70} />
                                          </g>
                                          <g className="apexcharts-area-series apexcharts-plot-series" id="SvgjsG2252">
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG2253" rel={1} seriesname="Earning">
                                              <path className="apexcharts-area" clipPath="url(#gridRectMaskpf0tl3uh)" d="M 0 70 L 0 43.75C 3.2666666666666666 43.75 6.066666666666667 34.125 9.333333333333334 34.125C 12.600000000000001 34.125 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 24.5 37.333333333333336 24.5C 40.6 24.5 43.400000000000006 42 46.66666666666667 42C 49.93333333333334 42 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 51.625 65.33333333333334 51.625C 68.60000000000001 51.625 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 48.125 84 48.125C 87.26666666666667 48.125 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 6.125 112 6.125C 115.26666666666667 6.125 118.06666666666668 32.375 121.33333333333334 32.375C 124.60000000000001 32.375 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 33.25 140 33.25C 140 33.25 140 33.25 140 70M 140 33.25z" fill="url(#SvgjsLinearGradient2256)" fillOpacity={1} id="SvgjsPath2260" index={0} pathfrom="M -1 175 L -1 175 L 9.333333333333334 175 L 18.666666666666668 175 L 28 175 L 37.333333333333336 175 L 46.66666666666667 175 L 56 175 L 65.33333333333334 175 L 74.66666666666667 175 L 84 175 L 93.33333333333334 175 L 102.66666666666667 175 L 112 175 L 121.33333333333334 175 L 130.66666666666669 175 L 140 175" pathto="M 0 70 L 0 43.75C 3.2666666666666666 43.75 6.066666666666667 34.125 9.333333333333334 34.125C 12.600000000000001 34.125 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 24.5 37.333333333333336 24.5C 40.6 24.5 43.400000000000006 42 46.66666666666667 42C 49.93333333333334 42 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 51.625 65.33333333333334 51.625C 68.60000000000001 51.625 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 48.125 84 48.125C 87.26666666666667 48.125 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 6.125 112 6.125C 115.26666666666667 6.125 118.06666666666668 32.375 121.33333333333334 32.375C 124.60000000000001 32.375 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 33.25 140 33.25C 140 33.25 140 33.25 140 70M 140 33.25z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                              <path className="apexcharts-area" clipPath="url(#gridRectMaskpf0tl3uh)" d="M 0 43.75C 3.2666666666666666 43.75 6.066666666666667 34.125 9.333333333333334 34.125C 12.600000000000001 34.125 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 24.5 37.333333333333336 24.5C 40.6 24.5 43.400000000000006 42 46.66666666666667 42C 49.93333333333334 42 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 51.625 65.33333333333334 51.625C 68.60000000000001 51.625 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 48.125 84 48.125C 87.26666666666667 48.125 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 6.125 112 6.125C 115.26666666666667 6.125 118.06666666666668 32.375 121.33333333333334 32.375C 124.60000000000001 32.375 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 33.25 140 33.25" fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath2261" index={0} pathfrom="M -1 175 L -1 175 L 9.333333333333334 175 L 18.666666666666668 175 L 28 175 L 37.333333333333336 175 L 46.66666666666667 175 L 56 175 L 65.33333333333334 175 L 74.66666666666667 175 L 84 175 L 93.33333333333334 175 L 102.66666666666667 175 L 112 175 L 121.33333333333334 175 L 130.66666666666669 175 L 140 175" pathto="M 0 43.75C 3.2666666666666666 43.75 6.066666666666667 34.125 9.333333333333334 34.125C 12.600000000000001 34.125 15.400000000000002 17.5 18.666666666666668 17.5C 21.933333333333334 17.5 24.733333333333334 43.75 28 43.75C 31.266666666666666 43.75 34.06666666666667 24.5 37.333333333333336 24.5C 40.6 24.5 43.400000000000006 42 46.66666666666667 42C 49.93333333333334 42 52.733333333333334 35 56 35C 59.26666666666667 35 62.06666666666667 51.625 65.33333333333334 51.625C 68.60000000000001 51.625 71.4 61.25 74.66666666666667 61.25C 77.93333333333334 61.25 80.73333333333333 48.125 84 48.125C 87.26666666666667 48.125 90.06666666666668 26.25 93.33333333333334 26.25C 96.60000000000001 26.25 99.4 52.5 102.66666666666667 52.5C 105.93333333333334 52.5 108.73333333333333 6.125 112 6.125C 115.26666666666667 6.125 118.06666666666668 32.375 121.33333333333334 32.375C 124.60000000000001 32.375 127.40000000000002 43.75 130.66666666666669 43.75C 133.93333333333334 43.75 136.73333333333335 33.25 140 33.25" stroke="#2196f3" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={4} />
                                              <g className="apexcharts-series-markers-wrap" data-realindex={0} id="SvgjsG2254">
                                                <g className="apexcharts-series-markers">
                                                  <circle className="apexcharts-marker w6z3dw5ui no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#2196f3" fillOpacity={1} id="SvgjsCircle2313" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG2255" />
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine2289" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2={140} y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine2290" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2={140} y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations" id="SvgjsG2291" />
                                          <g className="apexcharts-xaxis-annotations" id="SvgjsG2292" />
                                          <g className="apexcharts-point-annotations" id="SvgjsG2293" />
                                          <g className="apexcharts-xaxis" id="SvgjsG2294" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG2295" transform="translate(0, 4)" />
                                          </g>
                                        </g>
                                        <g className="apexcharts-annotations" id="SvgjsG2245" />
                                        <g className="apexcharts-yaxis" id="SvgjsG2312" rel={0} transform="translate(-18, 0)" />
                                        <rect fill="#fefefe" height={0} id="SvgjsRect2248" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                      </svg>
                                      <div className="apexcharts-legend" style={{maxHeight: '35px'}} />
                                      <div className="apexcharts-tooltip apexcharts-theme-dark">
                                        <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                        <div className="apexcharts-tooltip-series-group" style={{order: 1}}>
                                          <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(33, 150, 243)'}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial,sans-serif', fontSize: '12px'}}>
                                            <div className="apexcharts-tooltip-y-group">
                                              <span className="apexcharts-tooltip-text-y-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-y-value">
                                              </span>
                                            </div>
                                            <div className="apexcharts-tooltip-goals-group">
                                              <span className="apexcharts-tooltip-text-goals-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-goals-value">
                                              </span>
                                            </div>
                                            <div className="apexcharts-tooltip-z-group">
                                              <span className="apexcharts-tooltip-text-z-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-z-value">
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                                        <div className="apexcharts-yaxistooltip-text" />
                                      </div>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-sas-c142 className="card-bnner">
                            <div _ngcontent-sas-c142 className="row">
                              <div _ngcontent-sas-c142 className="col-lg-6">
                                <img _ngcontent-sas-c142 alt="" src="assets/images/pages/home-1.png" />
                              </div>
                              <div _ngcontent-sas-c142 className="col-lg-6">
                                <h4 _ngcontent-sas-c142>Download Reports</h4>
                                <p _ngcontent-sas-c142>
                                  Download employee salary reports.
                                </p>
                                <a _ngcontent-sas-c142 href="#/admin/dashboard/main">
                                  Download
                                  <i _ngcontent-sas-c142 className="fas fa-arrow-down">
                                  </i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-sas-c142 className="row">
                        <div _ngcontent-sas-c142 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div _ngcontent-sas-c142 className="card">
                            <div _ngcontent-sas-c142 className="header">
                              <h2 _ngcontent-sas-c142>Product Report</h2>
                              <button _ngcontent-sas-c142 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger header-dropdown mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-sas-c142 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  more_vert
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator"> </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target"> </span>
                              </button>
                              {/* */}
                              <mat-menu _ngcontent-sas-c142 className="ng-tns-c105-4 ng-star-inserted">
                                {/* */}
                              </mat-menu>
                            </div>
                            <div _ngcontent-sas-c142 className="body">
                              <div _ngcontent-sas-c142 className="row">
                                <div _ngcontent-sas-c142 className="col-md-12 col-xl-4 d-flex flex-column justify-content-center">
                                  <div _ngcontent-sas-c142 className="m-l-10 m-b-20">
                                    <h1 _ngcontent-sas-c142>$1,17,289</h1>
                                    <h4 _ngcontent-sas-c142 className="font-weight-light col-green">
                                      Total Income
                                    </h4>
                                    <p _ngcontent-sas-c142 className="mb-2">
                                      Lorem ipsum dolor sit amet, consectetuer
                                      adipiscing elit. Aenean commodo ligula eget
                                      dolor.
                                    </p>
                                  </div>
                                  <div _ngcontent-sas-c142 className="m-l-10">
                                    <h1 _ngcontent-sas-c142>$65,984</h1>
                                    <h4 _ngcontent-sas-c142 className="font-weight-light col-orange">
                                      Total Expense
                                    </h4>
                                    <p _ngcontent-sas-c142 className="mb-2">
                                      Cras dapibus. Vivamus elementum semper nisi.
                                      Aenean vulputate eleifend tellus.
                                    </p>
                                  </div>
                                </div>
                                <div _ngcontent-sas-c142 className="col-md-12 col-xl-8">
                                  <div _ngcontent-sas-c142 className="row">
                                    <div _ngcontent-sas-c142 className="col-md-6">
                                      <h5 _ngcontent-sas-c142 className="tx-primary m-b-30">
                                        Country Wise Sales
                                      </h5>
                                      <div _ngcontent-sas-c142 className="mb-3 mt-3">
                                        <table _ngcontent-sas-c142 className="table table-borderless">
                                          <tbody _ngcontent-sas-c142>
                                            <tr _ngcontent-sas-c142 className="tr-height-m">
                                              <td _ngcontent-sas-c142 className="text-muted">
                                                India
                                              </td>
                                              <td _ngcontent-sas-c142 className="w-100 px-0">
                                                <mat-progress-bar _ngcontent-sas-c142 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="mat-mdc-progress-bar mdc-linear-progress progress-m progress-round progress-shadow mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={40}>
                                                  <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                    <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                                    <div className="mdc-linear-progress__buffer-dots" />
                                                  </div>
                                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.4)'}}>
                                                    <span className="mdc-linear-progress__bar-inner">
                                                    </span>
                                                  </div>
                                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                    <span className="mdc-linear-progress__bar-inner">
                                                    </span>
                                                  </div>
                                                </mat-progress-bar>
                                              </td>
                                              <td _ngcontent-sas-c142>
                                                <h5 _ngcontent-sas-c142 className="font-weight-bold mb-0">
                                                  154
                                                </h5>
                                              </td>
                                            </tr>
                                            <tr _ngcontent-sas-c142 className="tr-height-m">
                                              <td _ngcontent-sas-c142 className="text-muted">
                                                USA
                                              </td>
                                              <td _ngcontent-sas-c142 className="w-100 px-0">
                                                <mat-progress-bar _ngcontent-sas-c142 aria-valuemax={100} aria-valuemin={0} aria-valuenow={90} className="mat-mdc-progress-bar mdc-linear-progress progress-m progress-round green-progress progress-shadow mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={90}>
                                                  <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                    <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                                    <div className="mdc-linear-progress__buffer-dots" />
                                                  </div>
                                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.9)'}}>
                                                    <span className="mdc-linear-progress__bar-inner">
                                                    </span>
                                                  </div>
                                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                    <span className="mdc-linear-progress__bar-inner">
                                                    </span>
                                                  </div>
                                                </mat-progress-bar>
                                              </td>
                                              <td _ngcontent-sas-c142>
                                                <h5 _ngcontent-sas-c142 className="font-weight-bold mb-0">
                                                  423
                                                </h5>
                                              </td>
                                            </tr>
                                            <tr _ngcontent-sas-c142 className="tr-height-m">
                                              <td _ngcontent-sas-c142 className="text-muted">
                                                Shrilanka
                                              </td>
                                              <td _ngcontent-sas-c142 className="w-100 px-0">
                                                <mat-progress-bar _ngcontent-sas-c142 aria-valuemax={100} aria-valuemin={0} aria-valuenow={65} className="mat-mdc-progress-bar mdc-linear-progress progress-m progress-round sky-progress progress-shadow mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={65}>
                                                  <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                    <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                                    <div className="mdc-linear-progress__buffer-dots" />
                                                  </div>
                                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.65)'}}>
                                                    <span className="mdc-linear-progress__bar-inner">
                                                    </span>
                                                  </div>
                                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                    <span className="mdc-linear-progress__bar-inner">
                                                    </span>
                                                  </div>
                                                </mat-progress-bar>
                                              </td>
                                              <td _ngcontent-sas-c142>
                                                <h5 _ngcontent-sas-c142 className="font-weight-bold mb-0">
                                                  265
                                                </h5>
                                              </td>
                                            </tr>
                                            <tr _ngcontent-sas-c142 className="tr-height-m">
                                              <td _ngcontent-sas-c142 className="text-muted">
                                                Australia
                                              </td>
                                              <td _ngcontent-sas-c142 className="w-100 px-0">
                                                <mat-progress-bar _ngcontent-sas-c142 aria-valuemax={100} aria-valuemin={0} aria-valuenow={50} className="mat-mdc-progress-bar mdc-linear-progress progress-m progress-round orange-progress progress-shadow mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={50}>
                                                  <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                    <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                                    <div className="mdc-linear-progress__buffer-dots" />
                                                  </div>
                                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.5)'}}>
                                                    <span className="mdc-linear-progress__bar-inner">
                                                    </span>
                                                  </div>
                                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                    <span className="mdc-linear-progress__bar-inner">
                                                    </span>
                                                  </div>
                                                </mat-progress-bar>
                                              </td>
                                              <td _ngcontent-sas-c142>
                                                <h5 _ngcontent-sas-c142 className="font-weight-bold mb-0">
                                                  341
                                                </h5>
                                              </td>
                                            </tr>
                                            <tr _ngcontent-sas-c142 className="tr-height-m">
                                              <td _ngcontent-sas-c142 className="text-muted">
                                                Japan
                                              </td>
                                              <td _ngcontent-sas-c142 className="w-100 px-0">
                                                <mat-progress-bar _ngcontent-sas-c142 aria-valuemax={100} aria-valuemin={0} aria-valuenow={58} className="mat-mdc-progress-bar mdc-linear-progress progress-m progress-round red-progress progress-shadow mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={58}>
                                                  <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                    <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                                    <div className="mdc-linear-progress__buffer-dots" />
                                                  </div>
                                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.58)'}}>
                                                    <span className="mdc-linear-progress__bar-inner">
                                                    </span>
                                                  </div>
                                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                    <span className="mdc-linear-progress__bar-inner">
                                                    </span>
                                                  </div>
                                                </mat-progress-bar>
                                              </td>
                                              <td _ngcontent-sas-c142>
                                                <h5 _ngcontent-sas-c142 className="font-weight-bold mb-0">
                                                  238
                                                </h5>
                                              </td>
                                            </tr>
                                            <tr _ngcontent-sas-c142 className="tr-height-m">
                                              <td _ngcontent-sas-c142 className="text-muted">
                                                Itely
                                              </td>
                                              <td _ngcontent-sas-c142 className="w-100 px-0">
                                                <mat-progress-bar _ngcontent-sas-c142 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="mat-mdc-progress-bar mdc-linear-progress progress-m progress-round progress-shadow mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={40}>
                                                  <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                    <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                                    <div className="mdc-linear-progress__buffer-dots" />
                                                  </div>
                                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.4)'}}>
                                                    <span className="mdc-linear-progress__bar-inner">
                                                    </span>
                                                  </div>
                                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                    <span className="mdc-linear-progress__bar-inner">
                                                    </span>
                                                  </div>
                                                </mat-progress-bar>
                                              </td>
                                              <td _ngcontent-sas-c142>
                                                <h5 _ngcontent-sas-c142 className="font-weight-bold mb-0">
                                                  153
                                                </h5>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <div _ngcontent-sas-c142 className="col-md-6 mt-3">
                                      <div _ngcontent-sas-c142 className="recent-report__chart">
                                        <canvas _ngcontent-sas-c142 basechart className="chart" height={225} style={{display: 'block', boxSizing: 'border-box', height: '150px', width: '292px'}} width={439}>
                                        </canvas>
                                      </div>
                                      <div _ngcontent-sas-c142 className="country-chart">
                                        <div _ngcontent-sas-c142 className="d-flex justify-content-between mx-xl-5 mt-3">
                                          <div _ngcontent-sas-c142 className="chart-note">
                                            <span _ngcontent-sas-c142 className="dot dot-product bg-green">
                                            </span>
                                            <span _ngcontent-sas-c142>
                                              Itely
                                            </span>
                                          </div>
                                          <p _ngcontent-sas-c142 className="mb-0">
                                            $30,289
                                          </p>
                                        </div>
                                        <div _ngcontent-sas-c142 className="d-flex justify-content-between mx-xl-5 mt-3">
                                          <div _ngcontent-sas-c142 className="chart-note">
                                            <span _ngcontent-sas-c142 className="dot dot-product bg-orange">
                                            </span>
                                            <span _ngcontent-sas-c142> USA </span>
                                          </div>
                                          <p _ngcontent-sas-c142 className="mb-0">
                                            $25,968
                                          </p>
                                        </div>
                                        <div _ngcontent-sas-c142 className="d-flex justify-content-between mx-xl-5 mt-3">
                                          <div _ngcontent-sas-c142 className="chart-note">
                                            <span _ngcontent-sas-c142 className="dot dot-product bg-purple">
                                            </span>
                                            <span _ngcontent-sas-c142>
                                              India
                                            </span>
                                          </div>
                                          <p _ngcontent-sas-c142 className="mb-0">
                                            $45,278
                                          </p>
                                        </div>
                                        <div _ngcontent-sas-c142 className="d-flex justify-content-between mx-xl-5 mt-3">
                                          <div _ngcontent-sas-c142 className="chart-note">
                                            <span _ngcontent-sas-c142 className="dot dot-product bg-red">
                                            </span>
                                            <span _ngcontent-sas-c142>
                                              Shrilanka
                                            </span>
                                          </div>
                                          <p _ngcontent-sas-c142 className="mb-0">
                                            $21,376
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-sas-c142 className="row clearfix">
                        <div _ngcontent-sas-c142 className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                          <div _ngcontent-sas-c142 className="card">
                            <div _ngcontent-sas-c142 className="header">
                              <h2 _ngcontent-sas-c142>Invoices</h2>
                              <button _ngcontent-sas-c142 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger header-dropdown mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-sas-c142 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  more_vert
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator"> </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target"> </span>
                              </button>
                              {/* */}
                              <mat-menu _ngcontent-sas-c142 className="ng-tns-c105-5 ng-star-inserted">
                                {/* */}
                              </mat-menu>
                            </div>
                            <div _ngcontent-sas-c142 className="tableBody">
                              <div _ngcontent-sas-c142 className="responsive_table">
                                <table _ngcontent-sas-c142 className="table table-hover">
                                  <thead _ngcontent-sas-c142>
                                    <tr _ngcontent-sas-c142>
                                      <th _ngcontent-sas-c142>Invoice No</th>
                                      <th _ngcontent-sas-c142>Client Name</th>
                                      <th _ngcontent-sas-c142>Due Date</th>
                                      <th _ngcontent-sas-c142>Status</th>
                                      <th _ngcontent-sas-c142>Total</th>
                                    </tr>
                                  </thead>
                                  <tbody _ngcontent-sas-c142>
                                    <tr _ngcontent-sas-c142>
                                      <td _ngcontent-sas-c142>
                                        <a _ngcontent-sas-c142 href="#/admin/accounts/invoice">
                                          #IN7865
                                        </a>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <img _ngcontent-sas-c142 alt="" className="user_img" src="assets/images/user/user1.jpg" />
                                        John Doe
                                      </td>
                                      <td _ngcontent-sas-c142>12/05/2016</td>
                                      <td _ngcontent-sas-c142>
                                        <div _ngcontent-sas-c142 className="badge badge-solid-green">
                                          Paid
                                        </div>
                                      </td>
                                      <td _ngcontent-sas-c142>$500</td>
                                    </tr>
                                    <tr _ngcontent-sas-c142>
                                      <td _ngcontent-sas-c142>
                                        <a _ngcontent-sas-c142 href="#/admin/accounts/invoice">
                                          #IN2301
                                        </a>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <img _ngcontent-sas-c142 alt="" className="user_img" src="assets/images/user/user2.jpg" />
                                        Sarah Smith
                                      </td>
                                      <td _ngcontent-sas-c142>31/03/2016</td>
                                      <td _ngcontent-sas-c142>
                                        <div _ngcontent-sas-c142 className="badge badge-solid-red">
                                          Unpaid
                                        </div>
                                      </td>
                                      <td _ngcontent-sas-c142>$372</td>
                                    </tr>
                                    <tr _ngcontent-sas-c142>
                                      <td _ngcontent-sas-c142>
                                        <a _ngcontent-sas-c142 href="#/admin/accounts/invoice">
                                          #IN7239
                                        </a>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <img _ngcontent-sas-c142 alt="" className="user_img" src="assets/images/user/user3.jpg" />
                                        Airi Satou
                                      </td>
                                      <td _ngcontent-sas-c142>14/04/2017</td>
                                      <td _ngcontent-sas-c142>
                                        <div _ngcontent-sas-c142 className="badge badge-solid-orange">
                                          Partially Paid
                                        </div>
                                      </td>
                                      <td _ngcontent-sas-c142>$1038</td>
                                    </tr>
                                    <tr _ngcontent-sas-c142>
                                      <td _ngcontent-sas-c142>
                                        <a _ngcontent-sas-c142 href="#/admin/accounts/invoice">
                                          #IN1482
                                        </a>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <img _ngcontent-sas-c142 alt="" className="user_img" src="assets/images/user/user4.jpg" />
                                        Angelica Ramos
                                      </td>
                                      <td _ngcontent-sas-c142>11/08/2017</td>
                                      <td _ngcontent-sas-c142>
                                        <div _ngcontent-sas-c142 className="badge badge-solid-green">
                                          Paid
                                        </div>
                                      </td>
                                      <td _ngcontent-sas-c142>$872</td>
                                    </tr>
                                    <tr _ngcontent-sas-c142>
                                      <td _ngcontent-sas-c142>
                                        <a _ngcontent-sas-c142 href="#/admin/accounts/invoice">
                                          #IN8526
                                        </a>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <img _ngcontent-sas-c142 alt="" className="user_img" src="assets/images/user/user5.jpg" />
                                        Ashton Cox
                                      </td>
                                      <td _ngcontent-sas-c142>15/02/2018</td>
                                      <td _ngcontent-sas-c142>
                                        <div _ngcontent-sas-c142 className="badge badge-solid-red">
                                          Unpaid
                                        </div>
                                      </td>
                                      <td _ngcontent-sas-c142>$2398</td>
                                    </tr>
                                    <tr _ngcontent-sas-c142>
                                      <td _ngcontent-sas-c142>
                                        <a _ngcontent-sas-c142 href="#/admin/accounts/invoice">
                                          #IN2473
                                        </a>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <img _ngcontent-sas-c142 alt="" className="user_img" src="assets/images/user/user6.jpg" />
                                        Cara Stevens
                                      </td>
                                      <td _ngcontent-sas-c142>28/01/2017</td>
                                      <td _ngcontent-sas-c142>
                                        <div _ngcontent-sas-c142 className="badge badge-solid-green">
                                          Paid
                                        </div>
                                      </td>
                                      <td _ngcontent-sas-c142>$834</td>
                                    </tr>
                                    <tr _ngcontent-sas-c142>
                                      <td _ngcontent-sas-c142>
                                        <a _ngcontent-sas-c142 href="#/admin/accounts/invoice">
                                          #IN7366
                                        </a>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <img _ngcontent-sas-c142 alt="" className="user_img" src="assets/images/user/user7.jpg" />
                                        Jacob Ryan
                                      </td>
                                      <td _ngcontent-sas-c142>11/03/2017</td>
                                      <td _ngcontent-sas-c142>
                                        <div _ngcontent-sas-c142 className="badge badge-solid-orange">
                                          Partially Paid
                                        </div>
                                      </td>
                                      <td _ngcontent-sas-c142>$147</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-sas-c142 className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                          <div _ngcontent-sas-c142 className="card">
                            <div _ngcontent-sas-c142 className="card-body">
                              <div _ngcontent-sas-c142 className="float-start">
                                <h6 _ngcontent-sas-c142>Average Daily Bill</h6>
                                <h5 _ngcontent-sas-c142>
                                  129 Dollar
                                  <span _ngcontent-sas-c142 className="text-muted font-12">
                                    (Average)
                                  </span>
                                </h5>
                              </div>
                              <div _ngcontent-sas-c142 className="mb-5">
                                <apx-chart _ngcontent-sas-c142 _nghost-sas-c139>
                                  <div _ngcontent-sas-c139 style={{minHeight: '395px'}}>
                                    <div className="apexcharts-canvas apexchartszz4d65r1 apexcharts-theme-light" id="apexchartszz4d65r1" style={{width: '274px', height: '380px'}}>
                                      <svg className="apexcharts-svg apexcharts-zoomable" height={380} id="SvgjsSvg2314" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={274} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG2316" transform="translate(52.35416793823242, 30)">
                                          <defs id="SvgjsDefs2315">
                                            <clipPath id="gridRectMaskzz4d65r1">
                                              <rect fill="#fff" height="296.8533312759399" id="SvgjsRect2324" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="220.64583206176758" x="-4.5" y="-2.5" />
                                            </clipPath>
                                            <clipPath id="forecastMaskzz4d65r1" />
                                            <clipPath id="nonForecastMaskzz4d65r1" />
                                            <clipPath id="gridRectMarkerMaskzz4d65r1">
                                              <rect fill="#fff" height="327.8533312759399" id="SvgjsRect2325" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="247.64583206176758" x={-18} y={-18} />
                                            </clipPath>
                                            <filter filterUnits="userSpaceOnUse" height="200%" id="SvgjsFilter2364" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity="0.2" id="SvgjsFeFlood2365" in="SourceGraphic" result="SvgjsFeFlood2365Out" />
                                              <feComposite id="SvgjsFeComposite2366" in="SvgjsFeFlood2365Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite2366Out" />
                                              <feOffset dx={7} dy={18} id="SvgjsFeOffset2367" in="SvgjsFeComposite2366Out" result="SvgjsFeOffset2367Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur2368" in="SvgjsFeOffset2367Out" result="SvgjsFeGaussianBlur2368Out" stdDeviation={10 } />
                                              <feMerge id="SvgjsFeMerge2369" in="SourceGraphic" result="SvgjsFeMerge2369Out">
                                                <feMergeNode id="SvgjsFeMergeNode2370" in="SvgjsFeGaussianBlur2368Out" />
                                                <feMergeNode id="SvgjsFeMergeNode2371" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend2372" in="SourceGraphic" in2="SvgjsFeMerge2369Out" mode="normal" result="SvgjsFeBlend2372Out" />
                                            </filter>
                                          </defs>
                                          <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height="291.8533312759399" id="SvgjsLine2323" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2="291.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine2385" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1="292.8533312759399" y2="298.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine2387" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="35.27430534362793" x2="35.27430534362793" y1="292.8533312759399" y2="298.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine2389" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="70.54861068725586" x2="70.54861068725586" y1="292.8533312759399" y2="298.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine2391" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="105.82291603088379" x2="105.82291603088379" y1="292.8533312759399" y2="298.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine2393" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="141.09722137451172" x2="141.09722137451172" y1="292.8533312759399" y2="298.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine2395" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="176.37152671813965" x2="176.37152671813965" y1="292.8533312759399" y2="298.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine2397" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="211.64583206176758" x2="211.64583206176758" y1="292.8533312759399" y2="298.8533312759399" />
                                          <g className="apexcharts-grid" id="SvgjsG2380">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG2381">
                                              <line className="apexcharts-gridline" id="SvgjsLine2399" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="211.64583206176758" y1="58.370666255187984" y2="58.370666255187984" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2400" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="211.64583206176758" y1="116.74133251037597" y2="116.74133251037597" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2401" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="211.64583206176758" y1="175.11199876556395" y2="175.11199876556395" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2402" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="211.64583206176758" y1="233.48266502075194" y2="233.48266502075194" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG2382">
                                              <line className="apexcharts-gridline" id="SvgjsLine2384" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2={0} y1={0} y2="291.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2386" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="35.27430534362793" x2="35.27430534362793" y1={0} y2="291.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2388" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="70.54861068725586" x2="70.54861068725586" y1={0} y2="291.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2390" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="105.82291603088379" x2="105.82291603088379" y1={0} y2="291.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2392" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="141.09722137451172" x2="141.09722137451172" y1={0} y2="291.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2394" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="176.37152671813965" x2="176.37152671813965" y1={0} y2="291.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2396" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="211.64583206176758" x2="211.64583206176758" y1={0} y2="291.8533312759399" />
                                            </g>
                                            <line id="SvgjsLine2405" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="211.64583206176758" y1="291.8533312759399" y2="291.8533312759399" />
                                            <line id="SvgjsLine2404" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="291.8533312759399" />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG2383">
                                            <line className="apexcharts-gridline" id="SvgjsLine2398" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="211.64583206176758" y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine2403" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="211.64583206176758" y1="291.8533312759399" y2="291.8533312759399" />
                                            <line id="SvgjsLine2436" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="211.64583206176758" y1="292.8533312759399" y2="292.8533312759399" />
                                          </g>
                                          <g className="apexcharts-line-series apexcharts-plot-series" id="SvgjsG2326">
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG2327" rel={1} seriesname="BillxAmount">
                                              <path className="apexcharts-line" clipPath="url(/gridRectMaskzz4d65r1)" d="M 0 256.8309315228271C 12.346006870269775 256.8309315228271 22.928298473358154 175.11199876556384 35.27430534362793 175.11199876556384C 47.620312213897705 175.11199876556384 58.202603816986084 58.37066625518787 70.54861068725586 58.37066625518787C 82.89461755752563 58.37066625518787 93.47690916061401 175.11199876556384 105.82291603088379 175.11199876556384C 118.16892290115356 175.11199876556384 128.75121450424194 116.74133251037574 141.09722137451172 116.74133251037574C 153.4432282447815 116.74133251037574 164.02551984786987 186.7861320166014 176.37152671813965 186.7861320166014C 188.71753358840942 186.7861320166014 199.2998251914978 105.06719925933817 211.64583206176758 105.06719925933817" fill="none" fillOpacity={1} fillRule="evenodd" filter="url(#SvgjsFilter2364)" id="SvgjsPath2363" index={0} pathfrom="M -1 1576.0079888900755 L -1 1576.0079888900755 L 35.27430534362793 1576.0079888900755 L 70.54861068725586 1576.0079888900755 L 105.82291603088379 1576.0079888900755 L 141.09722137451172 1576.0079888900755 L 176.37152671813965 1576.0079888900755 L 211.64583206176758 1576.0079888900755" pathto="M 0 256.8309315228271C 12.346006870269775 256.8309315228271 22.928298473358154 175.11199876556384 35.27430534362793 175.11199876556384C 47.620312213897705 175.11199876556384 58.202603816986084 58.37066625518787 70.54861068725586 58.37066625518787C 82.89461755752563 58.37066625518787 93.47690916061401 175.11199876556384 105.82291603088379 175.11199876556384C 118.16892290115356 175.11199876556384 128.75121450424194 116.74133251037574 141.09722137451172 116.74133251037574C 153.4432282447815 116.74133251037574 164.02551984786987 186.7861320166014 176.37152671813965 186.7861320166014C 188.71753358840942 186.7861320166014 199.2998251914978 105.06719925933817 211.64583206176758 105.06719925933817" stroke="rgba(84,84,84,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={5} />
                                              <g className="apexcharts-series-markers-wrap" data-realindex={0} id="SvgjsG2328">
                                                <g className="apexcharts-series-markers" clipPath="url(/gridRectMarkerMaskzz4d65r1)" id="SvgjsG2330">
                                                  <circle className="apexcharts-marker no-pointer-events wt75xc12xh" cx={0} cy="256.8309315228271" default-marker-size={1} fill="#545454" fillOpacity={1} id="SvgjsCircle2331" index={0} j={0} r={1} rel={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                  <circle className="apexcharts-marker no-pointer-events wm0jydkxj" cx="35.27430534362793" cy="175.11199876556384" default-marker-size={1} fill="#545454" fillOpacity={1} id="SvgjsCircle2332" index={0} j={1} r={1} rel={1} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskzz4d65r1)" id="SvgjsG2338">
                                                  <circle className="apexcharts-marker no-pointer-events w7nub299h" cx="70.54861068725586" cy="58.37066625518787" default-marker-size={1} fill="#545454" fillOpacity={1} id="SvgjsCircle2339" index={0} j={2} r={1} rel={2} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskzz4d65r1)" id="SvgjsG2343">
                                                  <circle className="apexcharts-marker no-pointer-events wge88qpxbj" cx="105.82291603088379" cy="175.11199876556384" default-marker-size={1} fill="#545454" fillOpacity={1} id="SvgjsCircle2344" index={0} j={3} r={1} rel={3} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskzz4d65r1)" id="SvgjsG2348">
                                                  <circle className="apexcharts-marker no-pointer-events wviqopj04" cx="141.09722137451172" cy="116.74133251037574" default-marker-size={1} fill="#545454" fillOpacity={1} id="SvgjsCircle2349" index={0} j={4} r={1} rel={4} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskzz4d65r1)" id="SvgjsG2353">
                                                  <circle className="apexcharts-marker no-pointer-events wtquu53tw" cx="176.37152671813965" cy="186.7861320166014" default-marker-size={1} fill="#545454" fillOpacity={1} id="SvgjsCircle2354" index={0} j={5} r={1} rel={5} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskzz4d65r1)" id="SvgjsG2358">
                                                  <circle className="apexcharts-marker no-pointer-events wdciafxx6j" cx="211.64583206176758" cy="105.06719925933817" default-marker-size={1} fill="#545454" fillOpacity={1} id="SvgjsCircle2359" index={0} j={6} r={1} rel={6} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG2329">
                                              <g className="apexcharts-data-labels" id="SvgjsG2333">
                                                <rect fill="#545454" height="15.333333969116211" id="SvgjsRect2373" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="27.36458396911621" x="-13.682291984558105" y="247.16427612304688" />
                                                <text className="apexcharts-datalabel" cx={0} cy="258.8309315228271" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText2335" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x={0} y="258.8309315228271">
                                                  113
                                                </text>
                                                <rect fill="#545454" height="15.333333969116211" id="SvgjsRect2374" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="28.03125" x="21.258682250976562" y="165.44534301757812" />
                                                <text className="apexcharts-datalabel" cx="35.27430534362793" cy="177.11199876556384" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText2337" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="35.27430534362793" y="177.11199876556384">
                                                  120
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG2340">
                                                <rect fill="#545454" height="15.333333969116211" id="SvgjsRect2375" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="28.03125" x="56.532989501953125" y="48.704002380371094" />
                                                <text className="apexcharts-datalabel" cx="70.54861068725586" cy="60.37066625518787" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText2342" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="70.54861068725586" y="60.37066625518787">
                                                  130
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG2345">
                                                <rect fill="#545454" height="15.333333969116211" id="SvgjsRect2376" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="28.03125" x="91.80729675292969" y="165.44534301757812" />
                                                <text className="apexcharts-datalabel" cx="105.82291603088379" cy="177.11199876556384" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText2347" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="105.82291603088379" y="177.11199876556384">
                                                  120
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG2350">
                                                <rect fill="#545454" height="15.333333969116211" id="SvgjsRect2377" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="28.03125" x="127.08160400390625" y="107.07466888427734" />
                                                <text className="apexcharts-datalabel" cx="141.09722137451172" cy="118.74133251037574" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText2352" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="141.09722137451172" y="118.74133251037574">
                                                  125
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG2355">
                                                <rect fill="#545454" height="15.333333969116211" id="SvgjsRect2378" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="27.36458396911621" x="162.68923950195312" y="177.11947631835938" />
                                                <text className="apexcharts-datalabel" cx="176.37152671813965" cy="188.7861320166014" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText2357" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="176.37152671813965" y="188.7861320166014">
                                                  119
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG2360">
                                                <rect fill="#545454" height="15.333333969116211" id="SvgjsRect2379" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="28.03125" x="197.63021850585938" y="95.4005355834961" />
                                                <text className="apexcharts-datalabel" cx="211.64583206176758" cy="107.06719925933817" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText2362" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="211.64583206176758" y="107.06719925933817">
                                                  126
                                                </text>
                                              </g>
                                            </g>
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine2406" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="211.64583206176758" y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine2407" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="211.64583206176758" y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations" id="SvgjsG2408" />
                                          <g className="apexcharts-xaxis-annotations" id="SvgjsG2409" />
                                          <g className="apexcharts-point-annotations" id="SvgjsG2410" />
                                          <g className="apexcharts-xaxis" id="SvgjsG2411" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG2412" transform="translate(0, -4)">
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2414" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x={0} y="320.8533312759399">
                                                <tspan id="SvgjsTspan2415">Sun</tspan>
                                                <title>Sun</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2417" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="35.27430534362793" y="320.8533312759399">
                                                <tspan id="SvgjsTspan2418">Mon</tspan>
                                                <title>Mon</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2420" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="70.54861068725586" y="320.8533312759399">
                                                <tspan id="SvgjsTspan2421">Tue</tspan>
                                                <title>Tue</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2423" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="105.82291603088379" y="320.8533312759399">
                                                <tspan id="SvgjsTspan2424">Wed</tspan>
                                                <title>Wed</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2426" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="141.09722137451172" y="320.8533312759399">
                                                <tspan id="SvgjsTspan2427">Thu</tspan>
                                                <title>Thu</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2429" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="176.37152671813965" y="320.8533312759399">
                                                <tspan id="SvgjsTspan2430">Fri</tspan>
                                                <title>Fri</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2432" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="211.64583206176758" y="320.8533312759399">
                                                <tspan id="SvgjsTspan2433">Sat</tspan>
                                                <title>Sat</title>
                                              </text>
                                            </g>
                                            <g className="apexcharts-xaxis-title" id="SvgjsG2434">
                                              <text className="apexcharts-text apexcharts-xaxis-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={900} id="SvgjsText2435" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="105.82291603088379" y="344.6666660308838">
                                                Weekday
                                              </text>
                                            </g>
                                          </g>
                                          <rect className="apexcharts-zoom-rect" fill="#fefefe" height={0} id="SvgjsRect2459" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                          <rect className="apexcharts-selection-rect" fill="#fefefe" height={0} id="SvgjsRect2460" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        </g>
                                        <g className="apexcharts-annotations" id="SvgjsG2317" />
                                        <g className="apexcharts-yaxis" id="SvgjsG2437" rel={0} transform="translate(22.354167938232422, 0)">
                                          <g className="apexcharts-yaxis-texts-g" id="SvgjsG2438">
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2440" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="31.5">
                                              <tspan id="SvgjsTspan2441">135</tspan>
                                              <title>135</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2443" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="89.87066625518798">
                                              <tspan id="SvgjsTspan2444">130</tspan>
                                              <title>130</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2446" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="148.24133251037597">
                                              <tspan id="SvgjsTspan2447">125</tspan>
                                              <title>125</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2449" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="206.61199876556395">
                                              <tspan id="SvgjsTspan2450">120</tspan>
                                              <title>120</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2452" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="264.98266502075194">
                                              <tspan id="SvgjsTspan2453">115</tspan>
                                              <title>115</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2455" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="323.3533312759399">
                                              <tspan id="SvgjsTspan2456">110</tspan>
                                              <title>110</title>
                                            </text>
                                          </g>
                                          <g className="apexcharts-yaxis-title" id="SvgjsG2457">
                                            <text className="apexcharts-text apexcharts-yaxis-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={900} id="SvgjsText2458" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" transform="rotate(-90 -13.354167938232422 171.5933485031128)" x="29.427082061767578" y="175.92666563796996">
                                              Bill Amount($)
                                            </text>
                                          </g>
                                        </g>
                                        <rect fill="#fefefe" height={0} id="SvgjsRect2322" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                      </svg>
                                      <div className="apexcharts-legend" style={{maxHeight: '190px'}} />
                                      <div className="apexcharts-tooltip apexcharts-theme-dark">
                                        <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                        <div className="apexcharts-tooltip-series-group" style={{order: 1}}>
                                          <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(84, 84, 84)'}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial,sans-serif', fontSize: '12px'}}>
                                            <div className="apexcharts-tooltip-y-group">
                                              <span className="apexcharts-tooltip-text-y-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-y-value">
                                              </span>
                                            </div>
                                            <div className="apexcharts-tooltip-goals-group">
                                              <span className="apexcharts-tooltip-text-goals-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-goals-value">
                                              </span>
                                            </div>
                                            <div className="apexcharts-tooltip-z-group">
                                              <span className="apexcharts-tooltip-text-z-label">
                                              </span>
                                              <span className="apexcharts-tooltip-text-z-value">
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-dark">
                                        <div className="apexcharts-xaxistooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                      </div>
                                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                                        <div className="apexcharts-yaxistooltip-text" />
                                      </div>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-sas-c142 className="row">
                        <div _ngcontent-sas-c142 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-sas-c142 className="card">
                            <div _ngcontent-sas-c142 className="header">
                              <h2 _ngcontent-sas-c142>Client Survay</h2>
                              <button _ngcontent-sas-c142 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger header-dropdown mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-sas-c142 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  more_vert
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator"> </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target"> </span>
                              </button>
                              {/* */}
                              <mat-menu _ngcontent-sas-c142 className="ng-tns-c105-6 ng-star-inserted">
                                {/* */}
                              </mat-menu>
                            </div>
                            <div _ngcontent-sas-c142 className="body">
                              <apx-chart _ngcontent-sas-c142 _nghost-sas-c139>
                                <div _ngcontent-sas-c139 style={{minHeight: '365px'}}>
                                  <div className="apexcharts-canvas apexchartsnxist88m apexcharts-theme-light" id="apexchartsnxist88m" style={{width: '434px', height: '350px'}}>
                                    <svg className="apexcharts-svg apexcharts-zoomable" height={350} id="SvgjsSvg2463" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={434} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                      <foreignObject height={350} width={434} x={0} y={0}>
                                        <div className="apexcharts-legend apexcharts-align-center apx-legend-position-top" style={{right: '0px', position: 'absolute', left: '20px', top: '0px', maxHeight: '175px'}} xmlns="http://www.w3.org/1999/xhtml">
                                          <div className="apexcharts-legend-series" data-collapsed="false" rel={1} seriesname="NewxClients" style={{margin: '2px 5px'}}>
                                            <span className="apexcharts-legend-marker" data-collapsed="false" rel={1} style={{background: 'rgb(252,131,128) !important', color: 'rgb(252, 131, 128)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                            <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="New%20Clients" i={0} rel={1} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                              New Clients
                                            </span>
                                          </div>
                                          <div className="apexcharts-legend-series" data-collapsed="false" rel={2} seriesname="OldxClients" style={{margin: '2px 5px'}}>
                                            <span className="apexcharts-legend-marker" data-collapsed="false" rel={2} style={{background: 'rgb(105,115,198) !important', color: 'rgb(105, 115, 198)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                            <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Old%20Clients" i={1} rel={2} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                              Old Clients
                                            </span>
                                          </div>
                                        </div>
                                        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                    .apexcharts-legend {\n                                      display: flex;\n                                      overflow: auto;\n                                      padding: 0 10px;\n                                    }\n                                    .apexcharts-legend.apx-legend-position-bottom,\n                                    .apexcharts-legend.apx-legend-position-top {\n                                      flex-wrap: wrap;\n                                    }\n                                    .apexcharts-legend.apx-legend-position-right,\n                                    .apexcharts-legend.apx-legend-position-left {\n                                      flex-direction: column;\n                                      bottom: 0;\n                                    }\n                                    .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                                    .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                                    .apexcharts-legend.apx-legend-position-right,\n                                    .apexcharts-legend.apx-legend-position-left {\n                                      justify-content: flex-start;\n                                    }\n                                    .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                                    .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                                      justify-content: center;\n                                    }\n                                    .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                                    .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                                      justify-content: flex-end;\n                                    }\n                                    .apexcharts-legend-series {\n                                      cursor: pointer;\n                                      line-height: normal;\n                                    }\n                                    .apexcharts-legend.apx-legend-position-bottom\n                                      .apexcharts-legend-series,\n                                    .apexcharts-legend.apx-legend-position-top\n                                      .apexcharts-legend-series {\n                                      display: flex;\n                                      align-items: center;\n                                    }\n                                    .apexcharts-legend-text {\n                                      position: relative;\n                                      font-size: 14px;\n                                    }\n                                    .apexcharts-legend-text *,\n                                    .apexcharts-legend-marker * {\n                                      pointer-events: none;\n                                    }\n                                    .apexcharts-legend-marker {\n                                      position: relative;\n                                      display: inline-block;\n                                      cursor: pointer;\n                                      margin-right: 3px;\n                                      border-style: solid;\n                                    }\n\n                                    .apexcharts-legend.apexcharts-align-right\n                                      .apexcharts-legend-series,\n                                    .apexcharts-legend.apexcharts-align-left\n                                      .apexcharts-legend-series {\n                                      display: inline-block;\n                                    }\n                                    .apexcharts-legend-series.apexcharts-no-click {\n                                      cursor: auto;\n                                    }\n                                    .apexcharts-legend\n                                      .apexcharts-hidden-zero-series,\n                                    .apexcharts-legend\n                                      .apexcharts-hidden-null-series {\n                                      display: none !important;\n                                    }\n                                    .apexcharts-inactive-legend {\n                                      opacity: 0.45;\n                                    }\n                                  " }} />
                                      </foreignObject>
                                      <rect fill="#fefefe" height={0} id="SvgjsRect2470" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                      <g className="apexcharts-annotations" id="SvgjsG2466" />
                                      <g className="apexcharts-yaxis" id="SvgjsG2549" rel={0} transform="translate(15.354167938232422, 0)">
                                        <g className="apexcharts-yaxis-texts-g" id="SvgjsG2550">
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2552" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="49.5">
                                            <tspan id="SvgjsTspan2553">100</tspan>
                                            <title>100</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2555" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="103.6999998474121">
                                            <tspan id="SvgjsTspan2556">80</tspan>
                                            <title>80</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2558" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="157.8999996948242">
                                            <tspan id="SvgjsTspan2559">60</tspan>
                                            <title>60</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2561" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="212.0999995422363">
                                            <tspan id="SvgjsTspan2562">40</tspan>
                                            <title>40</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2564" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="266.2999993896484">
                                            <tspan id="SvgjsTspan2565">20</tspan>
                                            <title>20</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2567" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="320.49999923706054">
                                            <tspan id="SvgjsTspan2568">0</tspan>
                                            <title>0</title>
                                          </text>
                                        </g>
                                      </g>
                                      <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG2465" transform="translate(45.35416793823242, 48)">
                                        <defs id="SvgjsDefs2464">
                                          <clipPath id="gridRectMasknxist88m">
                                            <rect fill="#fff" height="274.99999923706054" id="SvgjsRect2475" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="386.6458320617676" x={-4} y={-2} />
                                          </clipPath>
                                          <clipPath id="forecastMasknxist88m" />
                                          <clipPath id="nonForecastMasknxist88m" />
                                          <clipPath id="gridRectMarkerMasknxist88m">
                                            <rect fill="#fff" height="274.99999923706054" id="SvgjsRect2476" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="382.6458320617676" x={-2} y={-2} />
                                          </clipPath>
                                          <linearGradient id="SvgjsLinearGradient2481" x1={0} x2={0} y1={0} y2={1}>
                                            <stop id="SvgjsStop2482" offset={0} stopColor="rgba(252,131,128,0.65)" stopOpacity="0.65" />
                                            <stop id="SvgjsStop2483" offset={1} stopColor="rgba(254,193,192,0.5)" stopOpacity="0.5" />
                                            <stop id="SvgjsStop2484" offset={1} stopColor="rgba(254,193,192,0.5)" stopOpacity="0.5" />
                                          </linearGradient>
                                          <linearGradient id="SvgjsLinearGradient2490" x1={0} x2={0} y1={0} y2={1}>
                                            <stop id="SvgjsStop2491" offset={0} stopColor="rgba(105,115,198,0.65)" stopOpacity="0.65" />
                                            <stop id="SvgjsStop2492" offset={1} stopColor="rgba(180,185,227,0.5)" stopOpacity="0.5" />
                                            <stop id="SvgjsStop2493" offset={1} stopColor="rgba(180,185,227,0.5)" stopOpacity="0.5" />
                                          </linearGradient>
                                        </defs>
                                        <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height="270.99999923706054" id="SvgjsLine2471" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2="270.99999923706054" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine2501" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1="271.99999923706054" y2="277.99999923706054" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine2503" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="63.10763867696126" x2="63.10763867696126" y1="271.99999923706054" y2="277.99999923706054" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine2505" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="126.21527735392252" x2="126.21527735392252" y1="271.99999923706054" y2="277.99999923706054" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine2507" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="189.3229160308838" x2="189.3229160308838" y1="271.99999923706054" y2="277.99999923706054" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine2509" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="252.43055470784503" x2="252.43055470784503" y1="271.99999923706054" y2="277.99999923706054" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine2511" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="315.5381933848063" x2="315.5381933848063" y1="271.99999923706054" y2="277.99999923706054" />
                                        <g className="apexcharts-grid" id="SvgjsG2496">
                                          <g className="apexcharts-gridlines-horizontal" id="SvgjsG2497">
                                            <line className="apexcharts-gridline" id="SvgjsLine2513" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="54.19999984741211" y2="54.19999984741211" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2514" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="108.39999969482422" y2="108.39999969482422" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2515" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="162.59999954223633" y2="162.59999954223633" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2516" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="216.79999938964843" y2="216.79999938964843" />
                                          </g>
                                          <g className="apexcharts-gridlines-vertical" id="SvgjsG2498">
                                            <line className="apexcharts-gridline" id="SvgjsLine2502" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="63.10763867696126" x2="63.10763867696126" y1={0} y2="270.99999923706054" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2504" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="126.21527735392252" x2="126.21527735392252" y1={0} y2="270.99999923706054" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2506" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="189.3229160308838" x2="189.3229160308838" y1={0} y2="270.99999923706054" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2508" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="252.43055470784503" x2="252.43055470784503" y1={0} y2="270.99999923706054" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2510" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="315.5381933848063" x2="315.5381933848063" y1={0} y2="270.99999923706054" />
                                          </g>
                                          <line id="SvgjsLine2519" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="270.99999923706054" y2="270.99999923706054" />
                                          <line id="SvgjsLine2518" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="270.99999923706054" />
                                        </g>
                                        <g className="apexcharts-grid-borders" id="SvgjsG2499">
                                          <line className="apexcharts-gridline" id="SvgjsLine2500" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2={0} y1={0} y2="270.99999923706054" />
                                          <line className="apexcharts-gridline" id="SvgjsLine2512" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1={0} y2={0} />
                                          <line className="apexcharts-gridline" id="SvgjsLine2517" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="270.99999923706054" y2="270.99999923706054" />
                                          <line id="SvgjsLine2548" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="378.6458320617676" y1="271.99999923706054" y2="271.99999923706054" />
                                        </g>
                                        <g className="apexcharts-area-series apexcharts-plot-series" id="SvgjsG2477">
                                          <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG2478" rel={1} seriesname="NewxClients">
                                            <path className="apexcharts-area" clipPath="url(#gridRectMasknxist88m)" d="M 0 270.99999923706054 L 0 186.98999947357177C 22.087673536936443 186.98999947357177 41.01996514002482 162.59999954223633 63.107638676961265 162.59999954223633C 85.19531221389771 162.59999954223633 104.1276038169861 195.11999945068357 126.21527735392253 195.11999945068357C 148.30295089085897 195.11999945068357 167.23524249394734 132.78999962615967 189.3229160308838 132.78999962615967C 211.41058956782024 132.78999962615967 230.3428811709086 157.1799995574951 252.43055470784506 157.1799995574951C 274.5182282447815 157.1799995574951 293.4505198478699 40.64999988555908 315.53819338480633 40.64999988555908C 337.6258669217428 40.64999988555908 356.55815852483113 62.329999824523924 378.6458320617676 62.329999824523924C 378.6458320617676 62.329999824523924 378.6458320617676 62.329999824523924 378.6458320617676 270.99999923706054M 378.6458320617676 62.329999824523924z" fill="url(#SvgjsLinearGradient2481)" fillOpacity={1} id="SvgjsPath2485" index={0} pathfrom="M -1 270.99999923706054 L -1 270.99999923706054 L 63.107638676961265 270.99999923706054 L 126.21527735392253 270.99999923706054 L 189.3229160308838 270.99999923706054 L 252.43055470784506 270.99999923706054 L 315.53819338480633 270.99999923706054 L 378.6458320617676 270.99999923706054" pathto="M 0 270.99999923706054 L 0 186.98999947357177C 22.087673536936443 186.98999947357177 41.01996514002482 162.59999954223633 63.107638676961265 162.59999954223633C 85.19531221389771 162.59999954223633 104.1276038169861 195.11999945068357 126.21527735392253 195.11999945068357C 148.30295089085897 195.11999945068357 167.23524249394734 132.78999962615967 189.3229160308838 132.78999962615967C 211.41058956782024 132.78999962615967 230.3428811709086 157.1799995574951 252.43055470784506 157.1799995574951C 274.5182282447815 157.1799995574951 293.4505198478699 40.64999988555908 315.53819338480633 40.64999988555908C 337.6258669217428 40.64999988555908 356.55815852483113 62.329999824523924 378.6458320617676 62.329999824523924C 378.6458320617676 62.329999824523924 378.6458320617676 62.329999824523924 378.6458320617676 270.99999923706054M 378.6458320617676 62.329999824523924z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                            <path className="apexcharts-area" clipPath="url(#gridRectMasknxist88m)" d="M 0 186.98999947357177C 22.087673536936443 186.98999947357177 41.01996514002482 162.59999954223633 63.107638676961265 162.59999954223633C 85.19531221389771 162.59999954223633 104.1276038169861 195.11999945068357 126.21527735392253 195.11999945068357C 148.30295089085897 195.11999945068357 167.23524249394734 132.78999962615967 189.3229160308838 132.78999962615967C 211.41058956782024 132.78999962615967 230.3428811709086 157.1799995574951 252.43055470784506 157.1799995574951C 274.5182282447815 157.1799995574951 293.4505198478699 40.64999988555908 315.53819338480633 40.64999988555908C 337.6258669217428 40.64999988555908 356.55815852483113 62.329999824523924 378.6458320617676 62.329999824523924" fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath2486" index={0} pathfrom="M -1 270.99999923706054 L -1 270.99999923706054 L 63.107638676961265 270.99999923706054 L 126.21527735392253 270.99999923706054 L 189.3229160308838 270.99999923706054 L 252.43055470784506 270.99999923706054 L 315.53819338480633 270.99999923706054 L 378.6458320617676 270.99999923706054" pathto="M 0 186.98999947357177C 22.087673536936443 186.98999947357177 41.01996514002482 162.59999954223633 63.107638676961265 162.59999954223633C 85.19531221389771 162.59999954223633 104.1276038169861 195.11999945068357 126.21527735392253 195.11999945068357C 148.30295089085897 195.11999945068357 167.23524249394734 132.78999962615967 189.3229160308838 132.78999962615967C 211.41058956782024 132.78999962615967 230.3428811709086 157.1799995574951 252.43055470784506 157.1799995574951C 274.5182282447815 157.1799995574951 293.4505198478699 40.64999988555908 315.53819338480633 40.64999988555908C 337.6258669217428 40.64999988555908 356.55815852483113 62.329999824523924 378.6458320617676 62.329999824523924" stroke="#fc8380" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={4} />
                                            <g className="apexcharts-series-markers-wrap" data-realindex={0} id="SvgjsG2479">
                                              <g className="apexcharts-series-markers">
                                                <circle className="apexcharts-marker wtivjwmz4f no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#fc8380" fillOpacity={1} id="SvgjsCircle2569" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                              </g>
                                            </g>
                                          </g>
                                          <g className="apexcharts-series" data-longestseries="true" data-realindex={1} id="SvgjsG2487" rel={2} seriesname="OldxClients">
                                            <path className="apexcharts-area" clipPath="url(#gridRectMasknxist88m)" d="M 0 270.99999923706054 L 0 241.18999932098387C 22.087673536936443 241.18999932098387 41.01996514002482 184.27999948120117 63.107638676961265 184.27999948120117C 85.19531221389771 184.27999948120117 104.1276038169861 149.04999958038331 126.21527735392253 149.04999958038331C 148.30295089085897 149.04999958038331 167.23524249394734 184.27999948120117 189.3229160308838 184.27999948120117C 211.41058956782024 184.27999948120117 230.3428811709086 178.85999949645995 252.43055470784506 178.85999949645995C 274.5182282447815 178.85999949645995 293.4505198478699 130.07999963378904 315.53819338480633 130.07999963378904C 337.6258669217428 130.07999963378904 356.55815852483113 159.8899995498657 378.6458320617676 159.8899995498657C 378.6458320617676 159.8899995498657 378.6458320617676 159.8899995498657 378.6458320617676 270.99999923706054M 378.6458320617676 159.8899995498657z" fill="url(#SvgjsLinearGradient2490)" fillOpacity={1} id="SvgjsPath2494" index={1} pathfrom="M -1 270.99999923706054 L -1 270.99999923706054 L 63.107638676961265 270.99999923706054 L 126.21527735392253 270.99999923706054 L 189.3229160308838 270.99999923706054 L 252.43055470784506 270.99999923706054 L 315.53819338480633 270.99999923706054 L 378.6458320617676 270.99999923706054" pathto="M 0 270.99999923706054 L 0 241.18999932098387C 22.087673536936443 241.18999932098387 41.01996514002482 184.27999948120117 63.107638676961265 184.27999948120117C 85.19531221389771 184.27999948120117 104.1276038169861 149.04999958038331 126.21527735392253 149.04999958038331C 148.30295089085897 149.04999958038331 167.23524249394734 184.27999948120117 189.3229160308838 184.27999948120117C 211.41058956782024 184.27999948120117 230.3428811709086 178.85999949645995 252.43055470784506 178.85999949645995C 274.5182282447815 178.85999949645995 293.4505198478699 130.07999963378904 315.53819338480633 130.07999963378904C 337.6258669217428 130.07999963378904 356.55815852483113 159.8899995498657 378.6458320617676 159.8899995498657C 378.6458320617676 159.8899995498657 378.6458320617676 159.8899995498657 378.6458320617676 270.99999923706054M 378.6458320617676 159.8899995498657z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                            <path className="apexcharts-area" clipPath="url(#gridRectMasknxist88m)" d="M 0 241.18999932098387C 22.087673536936443 241.18999932098387 41.01996514002482 184.27999948120117 63.107638676961265 184.27999948120117C 85.19531221389771 184.27999948120117 104.1276038169861 149.04999958038331 126.21527735392253 149.04999958038331C 148.30295089085897 149.04999958038331 167.23524249394734 184.27999948120117 189.3229160308838 184.27999948120117C 211.41058956782024 184.27999948120117 230.3428811709086 178.85999949645995 252.43055470784506 178.85999949645995C 274.5182282447815 178.85999949645995 293.4505198478699 130.07999963378904 315.53819338480633 130.07999963378904C 337.6258669217428 130.07999963378904 356.55815852483113 159.8899995498657 378.6458320617676 159.8899995498657" fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath2495" index={1} pathfrom="M -1 270.99999923706054 L -1 270.99999923706054 L 63.107638676961265 270.99999923706054 L 126.21527735392253 270.99999923706054 L 189.3229160308838 270.99999923706054 L 252.43055470784506 270.99999923706054 L 315.53819338480633 270.99999923706054 L 378.6458320617676 270.99999923706054" pathto="M 0 241.18999932098387C 22.087673536936443 241.18999932098387 41.01996514002482 184.27999948120117 63.107638676961265 184.27999948120117C 85.19531221389771 184.27999948120117 104.1276038169861 149.04999958038331 126.21527735392253 149.04999958038331C 148.30295089085897 149.04999958038331 167.23524249394734 184.27999948120117 189.3229160308838 184.27999948120117C 211.41058956782024 184.27999948120117 230.3428811709086 178.85999949645995 252.43055470784506 178.85999949645995C 274.5182282447815 178.85999949645995 293.4505198478699 130.07999963378904 315.53819338480633 130.07999963378904C 337.6258669217428 130.07999963378904 356.55815852483113 159.8899995498657 378.6458320617676 159.8899995498657" stroke="#6973c6" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={4} />
                                            <g className="apexcharts-series-markers-wrap" data-realindex={1} id="SvgjsG2488">
                                              <g className="apexcharts-series-markers">
                                                <circle className="apexcharts-marker wlbsa2s9wj no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#6973c6" fillOpacity={1} id="SvgjsCircle2570" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                              </g>
                                            </g>
                                          </g>
                                          <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG2480" />
                                          <g className="apexcharts-datalabels" data-realindex={1} id="SvgjsG2489" />
                                        </g>
                                        <line className="apexcharts-ycrosshairs" id="SvgjsLine2520" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="378.6458320617676" y1={0} y2={0} />
                                        <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine2521" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="378.6458320617676" y1={0} y2={0} />
                                        <g className="apexcharts-yaxis-annotations" id="SvgjsG2522" />
                                        <g className="apexcharts-xaxis-annotations" id="SvgjsG2523" />
                                        <g className="apexcharts-point-annotations" id="SvgjsG2524" />
                                        <g className="apexcharts-xaxis" id="SvgjsG2525" transform="translate(0, 0)">
                                          <g className="apexcharts-xaxis-texts-g" id="SvgjsG2526" transform="translate(0, -4)">
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2528" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x={0} y="299.99999923706054">
                                              <tspan id="SvgjsTspan2529">
                                                19 Sep
                                              </tspan>
                                              <title>19 Sep</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2531" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="63.10763867696126" y="299.99999923706054">
                                              <tspan id="SvgjsTspan2532">
                                                20 Sep
                                              </tspan>
                                              <title>20 Sep</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2534" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="126.21527735392252" y="299.99999923706054">
                                              <tspan id="SvgjsTspan2535">
                                                21 Sep
                                              </tspan>
                                              <title>21 Sep</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2537" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="189.3229160308838" y="299.99999923706054">
                                              <tspan id="SvgjsTspan2538">
                                                22 Sep
                                              </tspan>
                                              <title>22 Sep</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2540" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="252.43055470784503" y="299.99999923706054">
                                              <tspan id="SvgjsTspan2541">
                                                23 Sep
                                              </tspan>
                                              <title>23 Sep</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2543" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="315.5381933848063" y="299.99999923706054">
                                              <tspan id="SvgjsTspan2544">
                                                24 Sep
                                              </tspan>
                                              <title>24 Sep</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2546" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="378.6458320617675" y="299.99999923706054">
                                              <tspan id="SvgjsTspan2547" />
                                              <title />
                                            </text>
                                          </g>
                                        </g>
                                        <rect className="apexcharts-zoom-rect" fill="#fefefe" height={0} id="SvgjsRect2571" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        <rect className="apexcharts-selection-rect" fill="#fefefe" height={0} id="SvgjsRect2572" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                      </g>
                                    </svg>
                                    <div className="apexcharts-tooltip apexcharts-theme-dark">
                                      <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                      <div className="apexcharts-tooltip-series-group" style={{order: 1}}>
                                        <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(252, 131, 128)'}}>
                                        </span>
                                        <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}}>
                                          <div className="apexcharts-tooltip-y-group">
                                            <span className="apexcharts-tooltip-text-y-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-y-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-goals-group">
                                            <span className="apexcharts-tooltip-text-goals-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-goals-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-z-group">
                                            <span className="apexcharts-tooltip-text-z-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-z-value">
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="apexcharts-tooltip-series-group" style={{order: 2}}>
                                        <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(105, 115, 198)'}}>
                                        </span>
                                        <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}}>
                                          <div className="apexcharts-tooltip-y-group">
                                            <span className="apexcharts-tooltip-text-y-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-y-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-goals-group">
                                            <span className="apexcharts-tooltip-text-goals-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-goals-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-z-group">
                                            <span className="apexcharts-tooltip-text-z-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-z-value">
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-dark">
                                      <div className="apexcharts-xaxistooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                    </div>
                                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                                      <div className="apexcharts-yaxistooltip-text" />
                                    </div>
                                  </div>
                                </div>
                              </apx-chart>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-sas-c142 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-sas-c142 className="card">
                            <div _ngcontent-sas-c142 className="header">
                              <h2 _ngcontent-sas-c142>Support Tickets Survay</h2>
                              <button _ngcontent-sas-c142 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger header-dropdown mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-sas-c142 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  more_vert
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator"> </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target"> </span>
                              </button>
                              {/* */}
                              <mat-menu _ngcontent-sas-c142 className="ng-tns-c105-7 ng-star-inserted">
                                {/* */}
                              </mat-menu>
                            </div>
                            <div _ngcontent-sas-c142 className="body">
                              <apx-chart _ngcontent-sas-c142 _nghost-sas-c139>
                                <div _ngcontent-sas-c139 style={{minHeight: '365px'}}>
                                  <div className="apexcharts-canvas apexchartsj4wvm7kz apexcharts-theme-light" id="apexchartsj4wvm7kz" style={{width: '434px', height: '350px'}}>
                                    <svg className="apexcharts-svg" height={350} id="SvgjsSvg2573" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={434} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                      <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG2575" transform="translate(45.35416793823242, 30)">
                                        <defs id="SvgjsDefs2574">
                                          <linearGradient id="SvgjsLinearGradient2579" x1={0} x2={0} y1={0} y2={1}>
                                            <stop id="SvgjsStop2580" offset={0} stopColor="rgba(216,227,240,0.4)" stopOpacity="0.4" />
                                            <stop id="SvgjsStop2581" offset={1} stopColor="rgba(190,209,230,0.5)" stopOpacity="0.5" />
                                            <stop id="SvgjsStop2582" offset={1} stopColor="rgba(190,209,230,0.5)" stopOpacity="0.5" />
                                          </linearGradient>
                                          <clipPath id="gridRectMaskj4wvm7kz">
                                            <rect fill="#fff" height="283.42666563796996" id="SvgjsRect2584" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="382.6458320617676" x={-2} y={0} />
                                          </clipPath>
                                          <clipPath id="forecastMaskj4wvm7kz" />
                                          <clipPath id="nonForecastMaskj4wvm7kz" />
                                          <clipPath id="gridRectMarkerMaskj4wvm7kz">
                                            <rect fill="#fff" height="287.42666563796996" id="SvgjsRect2585" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="382.6458320617676" x={-2} y={-2} />
                                          </clipPath>
                                        </defs>
                                        <rect className="apexcharts-xcrosshairs" fill="url(#SvgjsLinearGradient2579)" fillOpacity="0.9" filter="none" height="283.42666563796996" id="SvgjsRect2583" opacity={1} rx={0} ry={0} strokeDasharray={3} strokeWidth={0} width="18.93229160308838" x={0} y={0} y2="283.42666563796996" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine2652" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1="284.42666563796996" y2="290.42666563796996" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine2654" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="63.107638676961265" x2="63.107638676961265" y1="284.42666563796996" y2="290.42666563796996" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine2656" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="126.21527735392253" x2="126.21527735392253" y1="284.42666563796996" y2="290.42666563796996" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine2658" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="189.3229160308838" x2="189.3229160308838" y1="284.42666563796996" y2="290.42666563796996" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine2660" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="252.43055470784506" x2="252.43055470784506" y1="284.42666563796996" y2="290.42666563796996" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine2662" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="315.53819338480633" x2="315.53819338480633" y1="284.42666563796996" y2="290.42666563796996" />
                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine2664" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="378.6458320617676" x2="378.6458320617676" y1="284.42666563796996" y2="290.42666563796996" />
                                        <g className="apexcharts-grid" id="SvgjsG2647">
                                          <g className="apexcharts-gridlines-horizontal" id="SvgjsG2648">
                                            <line className="apexcharts-gridline" id="SvgjsLine2666" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="70.85666640949249" y2="70.85666640949249" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2667" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="141.71333281898498" y2="141.71333281898498" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2668" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="212.56999922847746" y2="212.56999922847746" />
                                          </g>
                                          <g className="apexcharts-gridlines-vertical" id="SvgjsG2649">
                                            <line className="apexcharts-gridline" id="SvgjsLine2651" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2={0} y1={0} y2="283.42666563796996" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2653" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="63.107638676961265" x2="63.107638676961265" y1={0} y2="283.42666563796996" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2655" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="126.21527735392253" x2="126.21527735392253" y1={0} y2="283.42666563796996" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2657" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="189.3229160308838" x2="189.3229160308838" y1={0} y2="283.42666563796996" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2659" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="252.43055470784506" x2="252.43055470784506" y1={0} y2="283.42666563796996" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2661" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="315.53819338480633" x2="315.53819338480633" y1={0} y2="283.42666563796996" />
                                            <line className="apexcharts-gridline" id="SvgjsLine2663" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="378.6458320617676" x2="378.6458320617676" y1={0} y2="283.42666563796996" />
                                          </g>
                                          <line id="SvgjsLine2671" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="283.42666563796996" y2="283.42666563796996" />
                                          <line id="SvgjsLine2670" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="283.42666563796996" />
                                        </g>
                                        <g className="apexcharts-grid-borders" id="SvgjsG2650">
                                          <line className="apexcharts-gridline" id="SvgjsLine2665" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1={0} y2={0} />
                                          <line className="apexcharts-gridline" id="SvgjsLine2669" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="283.42666563796996" y2="283.42666563796996" />
                                          <line id="SvgjsLine2697" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="378.6458320617676" y1="284.42666563796996" y2="284.42666563796996" />
                                        </g>
                                        <g className="apexcharts-bar-series apexcharts-plot-series" id="SvgjsG2586">
                                          <g className="apexcharts-series" data-realindex={0} id="SvgjsG2587" rel={1} seriesname="NewxErrors">
                                            <path barheight="103.92311073392231" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="85.19531221389771" cy="179.50355490404763" d="M 22.087673536936443 283.42766563796994 L 22.087673536936443 179.50455490404764 L 41.01996514002482 179.50455490404764 L 41.01996514002482 283.42766563796994 Z" fill="rgba(1,184,170,0.8)" fillOpacity={1} id="SvgjsPath2591" index={0} j={0} pathfrom="M 22.087673536936443 283.42766563796994 L 22.087673536936443 283.42766563796994 L 41.01996514002482 283.42766563796994 L 41.01996514002482 283.42766563796994 L 41.01996514002482 283.42766563796994 L 41.01996514002482 283.42766563796994 L 41.01996514002482 283.42766563796994 L 22.087673536936443 283.42766563796994 Z" pathto="M 22.087673536936443 283.42766563796994 L 22.087673536936443 179.50455490404764 L 41.01996514002482 179.50455490404764 L 41.01996514002482 283.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={44} />
                                            <path barheight="129.9038884174029" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="148.30295089085897" cy="153.52277722056706" d="M 85.19531221389771 283.42766563796994 L 85.19531221389771 153.52377722056707 L 104.1276038169861 153.52377722056707 L 104.1276038169861 283.42766563796994 Z" fill="rgba(1,184,170,0.8)" fillOpacity={1} id="SvgjsPath2593" index={0} j={1} pathfrom="M 85.19531221389771 283.42766563796994 L 85.19531221389771 283.42766563796994 L 104.1276038169861 283.42766563796994 L 104.1276038169861 283.42766563796994 L 104.1276038169861 283.42766563796994 L 104.1276038169861 283.42766563796994 L 104.1276038169861 283.42766563796994 L 85.19531221389771 283.42766563796994 Z" pathto="M 85.19531221389771 283.42766563796994 L 85.19531221389771 153.52377722056707 L 104.1276038169861 153.52377722056707 L 104.1276038169861 283.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={55} />
                                            <path barheight="96.83744409297307" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="211.41058956782024" cy="186.5892215449969" d="M 148.30295089085897 283.42766563796994 L 148.30295089085897 186.5902215449969 L 167.23524249394734 186.5902215449969 L 167.23524249394734 283.42766563796994 Z" fill="rgba(1,184,170,0.8)" fillOpacity={1} id="SvgjsPath2595" index={0} j={2} pathfrom="M 148.30295089085897 283.42766563796994 L 148.30295089085897 283.42766563796994 L 167.23524249394734 283.42766563796994 L 167.23524249394734 283.42766563796994 L 167.23524249394734 283.42766563796994 L 167.23524249394734 283.42766563796994 L 167.23524249394734 283.42766563796994 L 148.30295089085897 283.42766563796994 Z" pathto="M 148.30295089085897 283.42766563796994 L 148.30295089085897 186.5902215449969 L 167.23524249394734 186.5902215449969 L 167.23524249394734 283.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={41} />
                                            <path barheight="158.2465549811999" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="274.5182282447815" cy="125.18011065677007" d="M 211.41058956782024 283.42766563796994 L 211.41058956782024 125.18111065677007 L 230.3428811709086 125.18111065677007 L 230.3428811709086 283.42766563796994 Z" fill="rgba(1,184,170,0.8)" fillOpacity={1} id="SvgjsPath2597" index={0} j={3} pathfrom="M 211.41058956782024 283.42766563796994 L 211.41058956782024 283.42766563796994 L 230.3428811709086 283.42766563796994 L 230.3428811709086 283.42766563796994 L 230.3428811709086 283.42766563796994 L 230.3428811709086 283.42766563796994 L 230.3428811709086 283.42766563796994 L 211.41058956782024 283.42766563796994 Z" pathto="M 211.41058956782024 283.42766563796994 L 211.41058956782024 125.18111065677007 L 230.3428811709086 125.18111065677007 L 230.3428811709086 283.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={67} />
                                            <path barheight="51.96155536696116" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="337.6258669217427" cy="231.4651102710088" d="M 274.5182282447815 283.42766563796994 L 274.5182282447815 231.4661102710088 L 293.4505198478699 231.4661102710088 L 293.4505198478699 283.42766563796994 Z" fill="rgba(1,184,170,0.8)" fillOpacity={1} id="SvgjsPath2599" index={0} j={4} pathfrom="M 274.5182282447815 283.42766563796994 L 274.5182282447815 283.42766563796994 L 293.4505198478699 283.42766563796994 L 293.4505198478699 283.42766563796994 L 293.4505198478699 283.42766563796994 L 293.4505198478699 283.42766563796994 L 293.4505198478699 283.42766563796994 L 274.5182282447815 283.42766563796994 Z" pathto="M 274.5182282447815 283.42766563796994 L 274.5182282447815 231.4661102710088 L 293.4505198478699 231.4661102710088 L 293.4505198478699 283.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={22} />
                                            <path barheight="101.5612218536059" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="400.73350559870397" cy="181.86544378436406" d="M 337.6258669217427 283.42766563796994 L 337.6258669217427 181.86644378436407 L 356.55815852483113 181.86644378436407 L 356.55815852483113 283.42766563796994 Z" fill="rgba(1,184,170,0.8)" fillOpacity={1} id="SvgjsPath2601" index={0} j={5} pathfrom="M 337.6258669217427 283.42766563796994 L 337.6258669217427 283.42766563796994 L 356.55815852483113 283.42766563796994 L 356.55815852483113 283.42766563796994 L 356.55815852483113 283.42766563796994 L 356.55815852483113 283.42766563796994 L 356.55815852483113 283.42766563796994 L 337.6258669217427 283.42766563796994 Z" pathto="M 337.6258669217427 283.42766563796994 L 337.6258669217427 181.86644378436407 L 356.55815852483113 181.86644378436407 L 356.55815852483113 283.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={43} />
                                            <g className="apexcharts-bar-goals-markers" id="SvgjsG2589" style={{pointerEvents: 'none'}}>
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2590" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2592" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2594" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2596" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2598" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2600" />
                                            </g>
                                          </g>
                                          <g className="apexcharts-series" data-realindex={1} id="SvgjsG2602" rel={2} seriesname="Bugs">
                                            <path barheight="30.70455544411341" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="85.19531221389771" cy="148.7999994599342" d="M 22.087673536936443 179.50555490404764 L 22.087673536936443 148.80099945993422 L 41.01996514002482 148.80099945993422 L 41.01996514002482 179.50555490404764 Z" fill="rgba(55,70,73,0.8)" fillOpacity={1} id="SvgjsPath2606" index={1} j={0} pathfrom="M 22.087673536936443 179.50555490404764 L 22.087673536936443 179.50555490404764 L 41.01996514002482 179.50555490404764 L 41.01996514002482 179.50555490404764 L 41.01996514002482 179.50555490404764 L 41.01996514002482 179.50555490404764 L 41.01996514002482 179.50555490404764 L 22.087673536936443 179.50555490404764 Z" pathto="M 22.087673536936443 179.50555490404764 L 22.087673536936443 148.80099945993422 L 41.01996514002482 148.80099945993422 L 41.01996514002482 179.50555490404764 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={13} />
                                            <path barheight="54.32344424727757" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="148.30295089085897" cy="99.2003329732895" d="M 85.19531221389771 153.52477722056707 L 85.19531221389771 99.20133297328951 L 104.1276038169861 99.20133297328951 L 104.1276038169861 153.52477722056707 Z" fill="rgba(55,70,73,0.8)" fillOpacity={1} id="SvgjsPath2608" index={1} j={1} pathfrom="M 85.19531221389771 153.52477722056707 L 85.19531221389771 153.52477722056707 L 104.1276038169861 153.52477722056707 L 104.1276038169861 153.52477722056707 L 104.1276038169861 153.52477722056707 L 104.1276038169861 153.52477722056707 L 104.1276038169861 153.52477722056707 L 85.19531221389771 153.52477722056707 Z" pathto="M 85.19531221389771 153.52477722056707 L 85.19531221389771 99.20133297328951 L 104.1276038169861 99.20133297328951 L 104.1276038169861 153.52477722056707 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={23} />
                                            <path barheight="47.23777760632832" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="211.41058956782024" cy="139.35244393866856" d="M 148.30295089085897 186.5912215449969 L 148.30295089085897 139.35344393866856 L 167.23524249394734 139.35344393866856 L 167.23524249394734 186.5912215449969 Z" fill="rgba(55,70,73,0.8)" fillOpacity={1} id="SvgjsPath2610" index={1} j={2} pathfrom="M 148.30295089085897 186.5912215449969 L 148.30295089085897 186.5912215449969 L 167.23524249394734 186.5912215449969 L 167.23524249394734 186.5912215449969 L 167.23524249394734 186.5912215449969 L 167.23524249394734 186.5912215449969 L 167.23524249394734 186.5912215449969 L 148.30295089085897 186.5912215449969 Z" pathto="M 148.30295089085897 186.5912215449969 L 148.30295089085897 139.35344393866856 L 167.23524249394734 139.35344393866856 L 167.23524249394734 186.5912215449969 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={20} />
                                            <path barheight="18.89511104253133" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="274.5182282447815" cy="106.28599961423875" d="M 211.41058956782024 125.18211065677008 L 211.41058956782024 106.28699961423875 L 230.3428811709086 106.28699961423875 L 230.3428811709086 125.18211065677008 Z" fill="rgba(55,70,73,0.8)" fillOpacity={1} id="SvgjsPath2612" index={1} j={3} pathfrom="M 211.41058956782024 125.18211065677008 L 211.41058956782024 125.18211065677008 L 230.3428811709086 125.18211065677008 L 230.3428811709086 125.18211065677008 L 230.3428811709086 125.18211065677008 L 230.3428811709086 125.18211065677008 L 230.3428811709086 125.18211065677008 L 211.41058956782024 125.18211065677008 Z" pathto="M 211.41058956782024 125.18211065677008 L 211.41058956782024 106.28699961423875 L 230.3428811709086 106.28699961423875 L 230.3428811709086 125.18211065677008 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={8} />
                                            <path barheight="30.70455544411341" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="337.6258669217427" cy="200.7615548268954" d="M 274.5182282447815 231.4671102710088 L 274.5182282447815 200.7625548268954 L 293.4505198478699 200.7625548268954 L 293.4505198478699 231.4671102710088 Z" fill="rgba(55,70,73,0.8)" fillOpacity={1} id="SvgjsPath2614" index={1} j={4} pathfrom="M 274.5182282447815 231.4671102710088 L 274.5182282447815 231.4671102710088 L 293.4505198478699 231.4671102710088 L 293.4505198478699 231.4671102710088 L 293.4505198478699 231.4671102710088 L 293.4505198478699 231.4671102710088 L 293.4505198478699 231.4671102710088 L 274.5182282447815 231.4671102710088 Z" pathto="M 274.5182282447815 231.4671102710088 L 274.5182282447815 200.7625548268954 L 293.4505198478699 200.7625548268954 L 293.4505198478699 231.4671102710088 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={13} />
                                            <path barheight="63.77099976854324" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="400.73350559870397" cy="118.09544401582082" d="M 337.6258669217427 181.86744378436407 L 337.6258669217427 118.09644401582082 L 356.55815852483113 118.09644401582082 L 356.55815852483113 181.86744378436407 Z" fill="rgba(55,70,73,0.8)" fillOpacity={1} id="SvgjsPath2616" index={1} j={5} pathfrom="M 337.6258669217427 181.86744378436407 L 337.6258669217427 181.86744378436407 L 356.55815852483113 181.86744378436407 L 356.55815852483113 181.86744378436407 L 356.55815852483113 181.86744378436407 L 356.55815852483113 181.86744378436407 L 356.55815852483113 181.86744378436407 L 337.6258669217427 181.86744378436407 Z" pathto="M 337.6258669217427 181.86744378436407 L 337.6258669217427 118.09644401582082 L 356.55815852483113 118.09644401582082 L 356.55815852483113 181.86744378436407 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={27} />
                                            <g className="apexcharts-bar-goals-markers" id="SvgjsG2604" style={{pointerEvents: 'none'}}>
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2605" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2607" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2609" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2611" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2613" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2615" />
                                            </g>
                                          </g>
                                          <g className="apexcharts-series" data-realindex={2} id="SvgjsG2617" rel={3} seriesname="Development">
                                            <path barheight="25.98077768348058" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="85.19531221389771" cy="122.82022177645364" d="M 22.087673536936443 148.80199945993422 L 22.087673536936443 122.82122177645364 L 41.01996514002482 122.82122177645364 L 41.01996514002482 148.80199945993422 Z" fill="rgba(253,98,94,0.8)" fillOpacity={1} id="SvgjsPath2621" index={2} j={0} pathfrom="M 22.087673536936443 148.80199945993422 L 22.087673536936443 148.80199945993422 L 41.01996514002482 148.80199945993422 L 41.01996514002482 148.80199945993422 L 41.01996514002482 148.80199945993422 L 41.01996514002482 148.80199945993422 L 41.01996514002482 148.80199945993422 L 22.087673536936443 148.80199945993422 Z" pathto="M 22.087673536936443 148.80199945993422 L 22.087673536936443 122.82122177645364 L 41.01996514002482 122.82122177645364 L 41.01996514002482 148.80199945993422 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={11} />
                                            <path barheight="40.15211096537907" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="148.30295089085897" cy="59.04922200791044" d="M 85.19531221389771 99.20233297328951 L 85.19531221389771 59.050222007910435 L 104.1276038169861 59.050222007910435 L 104.1276038169861 99.20233297328951 Z" fill="rgba(253,98,94,0.8)" fillOpacity={1} id="SvgjsPath2623" index={2} j={1} pathfrom="M 85.19531221389771 99.20233297328951 L 85.19531221389771 99.20233297328951 L 104.1276038169861 99.20233297328951 L 104.1276038169861 99.20233297328951 L 104.1276038169861 99.20233297328951 L 104.1276038169861 99.20233297328951 L 104.1276038169861 99.20233297328951 L 85.19531221389771 99.20233297328951 Z" pathto="M 85.19531221389771 99.20233297328951 L 85.19531221389771 59.050222007910435 L 104.1276038169861 59.050222007910435 L 104.1276038169861 99.20233297328951 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={17} />
                                            <path barheight="35.428333204746245" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="211.41058956782024" cy="103.92511073392231" d="M 148.30295089085897 139.35444393866857 L 148.30295089085897 103.92611073392231 L 167.23524249394734 103.92611073392231 L 167.23524249394734 139.35444393866857 Z" fill="rgba(253,98,94,0.8)" fillOpacity={1} id="SvgjsPath2625" index={2} j={2} pathfrom="M 148.30295089085897 139.35444393866857 L 148.30295089085897 139.35444393866857 L 167.23524249394734 139.35444393866857 L 167.23524249394734 139.35444393866857 L 167.23524249394734 139.35444393866857 L 167.23524249394734 139.35444393866857 L 167.23524249394734 139.35444393866857 L 148.30295089085897 139.35444393866857 Z" pathto="M 148.30295089085897 139.35444393866857 L 148.30295089085897 103.92611073392231 L 167.23524249394734 103.92611073392231 L 167.23524249394734 139.35444393866857 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={15} />
                                            <path barheight="35.428333204746245" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="274.5182282447815" cy="70.85866640949251" d="M 211.41058956782024 106.28799961423876 L 211.41058956782024 70.85966640949252 L 230.3428811709086 70.85966640949252 L 230.3428811709086 106.28799961423876 Z" fill="rgba(253,98,94,0.8)" fillOpacity={1} id="SvgjsPath2627" index={2} j={3} pathfrom="M 211.41058956782024 106.28799961423876 L 211.41058956782024 106.28799961423876 L 230.3428811709086 106.28799961423876 L 230.3428811709086 106.28799961423876 L 230.3428811709086 106.28799961423876 L 230.3428811709086 106.28799961423876 L 230.3428811709086 106.28799961423876 L 211.41058956782024 106.28799961423876 Z" pathto="M 211.41058956782024 106.28799961423876 L 211.41058956782024 70.85966640949252 L 230.3428811709086 70.85966640949252 L 230.3428811709086 106.28799961423876 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={15} />
                                            <path barheight="49.59966648664474" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="337.6258669217427" cy="151.16288834025067" d="M 274.5182282447815 200.76355482689542 L 274.5182282447815 151.16388834025068 L 293.4505198478699 151.16388834025068 L 293.4505198478699 200.76355482689542 Z" fill="rgba(253,98,94,0.8)" fillOpacity={1} id="SvgjsPath2629" index={2} j={4} pathfrom="M 274.5182282447815 200.76355482689542 L 274.5182282447815 200.76355482689542 L 293.4505198478699 200.76355482689542 L 293.4505198478699 200.76355482689542 L 293.4505198478699 200.76355482689542 L 293.4505198478699 200.76355482689542 L 293.4505198478699 200.76355482689542 L 274.5182282447815 200.76355482689542 Z" pathto="M 274.5182282447815 200.76355482689542 L 274.5182282447815 151.16388834025068 L 293.4505198478699 151.16388834025068 L 293.4505198478699 200.76355482689542 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={21} />
                                            <path barheight="33.066444324429824" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="400.73350559870397" cy="85.029999691391" d="M 337.6258669217427 118.09744401582083 L 337.6258669217427 85.030999691391 L 356.55815852483113 85.030999691391 L 356.55815852483113 118.09744401582083 Z" fill="rgba(253,98,94,0.8)" fillOpacity={1} id="SvgjsPath2631" index={2} j={5} pathfrom="M 337.6258669217427 118.09744401582083 L 337.6258669217427 118.09744401582083 L 356.55815852483113 118.09744401582083 L 356.55815852483113 118.09744401582083 L 356.55815852483113 118.09744401582083 L 356.55815852483113 118.09744401582083 L 356.55815852483113 118.09744401582083 L 337.6258669217427 118.09744401582083 Z" pathto="M 337.6258669217427 118.09744401582083 L 337.6258669217427 85.030999691391 L 356.55815852483113 85.030999691391 L 356.55815852483113 118.09744401582083 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={14} />
                                            <g className="apexcharts-bar-goals-markers" id="SvgjsG2619" style={{pointerEvents: 'none'}}>
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2620" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2622" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2624" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2626" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2628" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2630" />
                                            </g>
                                          </g>
                                          <g className="apexcharts-series" data-realindex={3} id="SvgjsG2632" rel={4} seriesname="Payment">
                                            <path barheight="49.59966648664474" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="85.19531221389771" cy="73.22155528980889" d="M 22.087673536936443 122.82222177645365 L 22.087673536936443 73.2225552898089 L 41.01996514002482 73.2225552898089 L 41.01996514002482 122.82222177645365 Z" fill="rgba(242,200,15,0.8)" fillOpacity={1} id="SvgjsPath2636" index={3} j={0} pathfrom="M 22.087673536936443 122.82222177645365 L 22.087673536936443 122.82222177645365 L 41.01996514002482 122.82222177645365 L 41.01996514002482 122.82222177645365 L 41.01996514002482 122.82222177645365 L 41.01996514002482 122.82222177645365 L 41.01996514002482 122.82222177645365 L 22.087673536936443 122.82222177645365 Z" pathto="M 22.087673536936443 122.82222177645365 L 22.087673536936443 73.2225552898089 L 41.01996514002482 73.2225552898089 L 41.01996514002482 122.82222177645365 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={21} />
                                            <path barheight="16.533222162214912" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="148.30295089085897" cy="42.51699984569552" d="M 85.19531221389771 59.05122200791043 L 85.19531221389771 42.51799984569552 L 104.1276038169861 42.51799984569552 L 104.1276038169861 59.05122200791043 Z" fill="rgba(242,200,15,0.8)" fillOpacity={1} id="SvgjsPath2638" index={3} j={1} pathfrom="M 85.19531221389771 59.05122200791043 L 85.19531221389771 59.05122200791043 L 104.1276038169861 59.05122200791043 L 104.1276038169861 59.05122200791043 L 104.1276038169861 59.05122200791043 L 104.1276038169861 59.05122200791043 L 104.1276038169861 59.05122200791043 L 85.19531221389771 59.05122200791043 Z" pathto="M 85.19531221389771 59.05122200791043 L 85.19531221389771 42.51799984569552 L 104.1276038169861 42.51799984569552 L 104.1276038169861 59.05122200791043 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={7} />
                                            <path barheight="59.047222007910406" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="211.41058956782024" cy="44.87888872601191" d="M 148.30295089085897 103.92711073392232 L 148.30295089085897 44.879888726011906 L 167.23524249394734 44.879888726011906 L 167.23524249394734 103.92711073392232 Z" fill="rgba(242,200,15,0.8)" fillOpacity={1} id="SvgjsPath2640" index={3} j={2} pathfrom="M 148.30295089085897 103.92711073392232 L 148.30295089085897 103.92711073392232 L 167.23524249394734 103.92711073392232 L 167.23524249394734 103.92711073392232 L 167.23524249394734 103.92711073392232 L 167.23524249394734 103.92711073392232 L 167.23524249394734 103.92711073392232 L 148.30295089085897 103.92711073392232 Z" pathto="M 148.30295089085897 103.92711073392232 L 148.30295089085897 44.879888726011906 L 167.23524249394734 44.879888726011906 L 167.23524249394734 103.92711073392232 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={25} />
                                            <path barheight="30.70455544411341" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="274.5182282447815" cy="40.15511096537911" d="M 211.41058956782024 70.86066640949252 L 211.41058956782024 40.156110965379106 L 230.3428811709086 40.156110965379106 L 230.3428811709086 70.86066640949252 Z" fill="rgba(242,200,15,0.8)" fillOpacity={1} id="SvgjsPath2642" index={3} j={3} pathfrom="M 211.41058956782024 70.86066640949252 L 211.41058956782024 70.86066640949252 L 230.3428811709086 70.86066640949252 L 230.3428811709086 70.86066640949252 L 230.3428811709086 70.86066640949252 L 230.3428811709086 70.86066640949252 L 230.3428811709086 70.86066640949252 L 211.41058956782024 70.86066640949252 Z" pathto="M 211.41058956782024 70.86066640949252 L 211.41058956782024 40.156110965379106 L 230.3428811709086 40.156110965379106 L 230.3428811709086 70.86066640949252 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={13} />
                                            <path barheight="51.96155536696116" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="337.6258669217427" cy="99.20233297328951" d="M 274.5182282447815 151.16488834025068 L 274.5182282447815 99.20333297328952 L 293.4505198478699 99.20333297328952 L 293.4505198478699 151.16488834025068 Z" fill="rgba(242,200,15,0.8)" fillOpacity={1} id="SvgjsPath2644" index={3} j={4} pathfrom="M 274.5182282447815 151.16488834025068 L 274.5182282447815 151.16488834025068 L 293.4505198478699 151.16488834025068 L 293.4505198478699 151.16488834025068 L 293.4505198478699 151.16488834025068 L 293.4505198478699 151.16488834025068 L 293.4505198478699 151.16488834025068 L 274.5182282447815 151.16488834025068 Z" pathto="M 274.5182282447815 151.16488834025068 L 274.5182282447815 99.20333297328952 L 293.4505198478699 99.20333297328952 L 293.4505198478699 151.16488834025068 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={22} />
                                            <path barheight="18.89511104253133" barwidth="18.93229160308838" className="apexcharts-bar-area" clipPath="url(#gridRectMaskj4wvm7kz)" cx="400.73350559870397" cy="66.13588864885968" d="M 337.6258669217427 85.03199969139101 L 337.6258669217427 66.13688864885968 L 356.55815852483113 66.13688864885968 L 356.55815852483113 85.03199969139101 Z" fill="rgba(242,200,15,0.8)" fillOpacity={1} id="SvgjsPath2646" index={3} j={5} pathfrom="M 337.6258669217427 85.03199969139101 L 337.6258669217427 85.03199969139101 L 356.55815852483113 85.03199969139101 L 356.55815852483113 85.03199969139101 L 356.55815852483113 85.03199969139101 L 356.55815852483113 85.03199969139101 L 356.55815852483113 85.03199969139101 L 337.6258669217427 85.03199969139101 Z" pathto="M 337.6258669217427 85.03199969139101 L 337.6258669217427 66.13688864885968 L 356.55815852483113 66.13688864885968 L 356.55815852483113 85.03199969139101 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={8} />
                                            <g className="apexcharts-bar-goals-markers" id="SvgjsG2634" style={{pointerEvents: 'none'}}>
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2635" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2637" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2639" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2641" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2643" />
                                              <g classname="apexcharts-bar-goals-groups" id="SvgjsG2645" />
                                            </g>
                                          </g>
                                          <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG2588" />
                                          <g className="apexcharts-datalabels" data-realindex={1} id="SvgjsG2603" />
                                          <g className="apexcharts-datalabels" data-realindex={2} id="SvgjsG2618" />
                                          <g className="apexcharts-datalabels" data-realindex={3} id="SvgjsG2633" />
                                        </g>
                                        <line className="apexcharts-ycrosshairs" id="SvgjsLine2672" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="378.6458320617676" y1={0} y2={0} />
                                        <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine2673" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="378.6458320617676" y1={0} y2={0} />
                                        <g className="apexcharts-yaxis-annotations" id="SvgjsG2674" />
                                        <g className="apexcharts-xaxis-annotations" id="SvgjsG2675" />
                                        <g className="apexcharts-point-annotations" id="SvgjsG2676" />
                                        <g className="apexcharts-xaxis" id="SvgjsG2677" transform="translate(0, 0)">
                                          <g className="apexcharts-xaxis-texts-g" id="SvgjsG2678" transform="translate(0, -4)">
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2680" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="31.553819338480633" y="312.42666563796996">
                                              <tspan id="SvgjsTspan2681">Mon</tspan>
                                              <title>Mon</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2683" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="94.6614580154419" y="312.42666563796996">
                                              <tspan id="SvgjsTspan2684">Tue</tspan>
                                              <title>Tue</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2686" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="157.76909669240317" y="312.42666563796996">
                                              <tspan id="SvgjsTspan2687">Wed</tspan>
                                              <title>Wed</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2689" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="220.87673536936444" y="312.42666563796996">
                                              <tspan id="SvgjsTspan2690">Thu</tspan>
                                              <title>Thu</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2692" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="283.9843740463257" y="312.42666563796996">
                                              <tspan id="SvgjsTspan2693">Fri</tspan>
                                              <title>Fri</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2695" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="347.0920127232869" y="312.42666563796996">
                                              <tspan id="SvgjsTspan2696">Sat</tspan>
                                              <title>Sat</title>
                                            </text>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="apexcharts-yaxis" id="SvgjsG2698" rel={0} transform="translate(15.354167938232422, 0)">
                                        <g className="apexcharts-yaxis-texts-g" id="SvgjsG2699">
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2701" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="31.4">
                                            <tspan id="SvgjsTspan2702">120</tspan>
                                            <title>120</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2704" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="102.2566664094925">
                                            <tspan id="SvgjsTspan2705">90</tspan>
                                            <title>90</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2707" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="173.113332818985">
                                            <tspan id="SvgjsTspan2708">60</tspan>
                                            <title>60</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2710" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="243.96999922847746">
                                            <tspan id="SvgjsTspan2711">30</tspan>
                                            <title>30</title>
                                          </text>
                                          <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2713" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="314.82666563796994">
                                            <tspan id="SvgjsTspan2714">0</tspan>
                                            <title>0</title>
                                          </text>
                                        </g>
                                      </g>
                                      <g className="apexcharts-annotations" id="SvgjsG2576" />
                                    </svg>
                                    <div className="apexcharts-legend" style={{maxHeight: '175px'}} />
                                    <div className="apexcharts-tooltip apexcharts-theme-dark">
                                      <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                      <div className="apexcharts-tooltip-series-group" style={{order: 1}}>
                                        <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(0, 143, 251)'}}>
                                        </span>
                                        <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}}>
                                          <div className="apexcharts-tooltip-y-group">
                                            <span className="apexcharts-tooltip-text-y-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-y-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-goals-group">
                                            <span className="apexcharts-tooltip-text-goals-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-goals-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-z-group">
                                            <span className="apexcharts-tooltip-text-z-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-z-value">
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="apexcharts-tooltip-series-group" style={{order: 2}}>
                                        <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(0, 227, 150)'}}>
                                        </span>
                                        <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}}>
                                          <div className="apexcharts-tooltip-y-group">
                                            <span className="apexcharts-tooltip-text-y-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-y-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-goals-group">
                                            <span className="apexcharts-tooltip-text-goals-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-goals-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-z-group">
                                            <span className="apexcharts-tooltip-text-z-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-z-value">
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="apexcharts-tooltip-series-group" style={{order: 3}}>
                                        <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(254, 176, 25)'}}>
                                        </span>
                                        <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}}>
                                          <div className="apexcharts-tooltip-y-group">
                                            <span className="apexcharts-tooltip-text-y-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-y-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-goals-group">
                                            <span className="apexcharts-tooltip-text-goals-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-goals-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-z-group">
                                            <span className="apexcharts-tooltip-text-z-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-z-value">
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="apexcharts-tooltip-series-group" style={{order: 4}}>
                                        <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(255, 69, 96)'}}>
                                        </span>
                                        <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}}>
                                          <div className="apexcharts-tooltip-y-group">
                                            <span className="apexcharts-tooltip-text-y-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-y-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-goals-group">
                                            <span className="apexcharts-tooltip-text-goals-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-goals-value">
                                            </span>
                                          </div>
                                          <div className="apexcharts-tooltip-z-group">
                                            <span className="apexcharts-tooltip-text-z-label">
                                            </span>
                                            <span className="apexcharts-tooltip-text-z-value">
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                                      <div className="apexcharts-yaxistooltip-text" />
                                    </div>
                                  </div>
                                </div>
                              </apx-chart>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-sas-c142 className="row clearfix">
                        <div _ngcontent-sas-c142 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div _ngcontent-sas-c142 className="card">
                            <div _ngcontent-sas-c142 className="header">
                              <h2 _ngcontent-sas-c142>Projects</h2>
                              <button _ngcontent-sas-c142 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger header-dropdown mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-sas-c142 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  more_vert
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator"> </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target"> </span>
                              </button>
                              {/* */}
                              <mat-menu _ngcontent-sas-c142 className="ng-tns-c105-8 ng-star-inserted">
                                {/* */}
                              </mat-menu>
                            </div>
                            <div _ngcontent-sas-c142 className="tableBody">
                              <div _ngcontent-sas-c142 className="responsive_table">
                                <table _ngcontent-sas-c142 className="table">
                                  <thead _ngcontent-sas-c142>
                                    <tr _ngcontent-sas-c142>
                                      <th _ngcontent-sas-c142>Project Name</th>
                                      <th _ngcontent-sas-c142>Employees Team</th>
                                      <th _ngcontent-sas-c142>Team Leader</th>
                                      <th _ngcontent-sas-c142>Priority</th>
                                      <th _ngcontent-sas-c142>Open Task</th>
                                      <th _ngcontent-sas-c142>Completed Task</th>
                                      <th _ngcontent-sas-c142>Status</th>
                                      <th _ngcontent-sas-c142>Documents</th>
                                      <th _ngcontent-sas-c142>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody _ngcontent-sas-c142>
                                    <tr _ngcontent-sas-c142>
                                      <td _ngcontent-sas-c142>Project A</td>
                                      <td _ngcontent-sas-c142 className="text-truncate">
                                        <ul _ngcontent-sas-c142 className="list-unstyled order-list">
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user1.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user2.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user3.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <span _ngcontent-sas-c142 className="badge">
                                              +4
                                            </span>
                                          </li>
                                        </ul>
                                      </td>
                                      <td _ngcontent-sas-c142>John Doe</td>
                                      <td _ngcontent-sas-c142>
                                        <div _ngcontent-sas-c142 className="badge col-blue">
                                          Medium
                                        </div>
                                      </td>
                                      <td _ngcontent-sas-c142>19</td>
                                      <td _ngcontent-sas-c142>10</td>
                                      <td _ngcontent-sas-c142>
                                        <mat-progress-bar _ngcontent-sas-c142 aria-valuemax={100} aria-valuemin={0} aria-valuenow={37} className="mat-mdc-progress-bar mdc-linear-progress progress-xs progress-round sky-progress progress-shadow mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={37}>
                                          <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                            <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                            <div className="mdc-linear-progress__buffer-dots" />
                                          </div>
                                          <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.37)'}}>
                                            <span className="mdc-linear-progress__bar-inner">
                                            </span>
                                          </div>
                                          <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                            <span className="mdc-linear-progress__bar-inner">
                                            </span>
                                          </div>
                                        </mat-progress-bar>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <i _ngcontent-sas-c142 className="far fa-file-pdf tbl-pdf">
                                        </i>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <button _ngcontent-sas-c142 aria-describedby="cdk-describedby-message-sas-1-2" cdk-describedby-host="sas-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-sas-c142 _nghost-sas-c130>
                                            <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="tbl-fav-edit">
                                              <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                              </svg>
                                            </i-feather>
                                          </app-feather-icons>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                        <button _ngcontent-sas-c142 aria-describedby="cdk-describedby-message-sas-1-3" cdk-describedby-host="sas-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-sas-c142 _nghost-sas-c130>
                                            <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="tbl-fav-delete">
                                              <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                <line x1={10} x2={10} y1={11} y2={17} />
                                                <line x1={14} x2={14} y1={11} y2={17} />
                                              </svg>
                                            </i-feather>
                                          </app-feather-icons>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                      </td>
                                    </tr>
                                    <tr _ngcontent-sas-c142>
                                      <td _ngcontent-sas-c142>Project B</td>
                                      <td _ngcontent-sas-c142 className="text-truncate">
                                        <ul _ngcontent-sas-c142 className="list-unstyled order-list">
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user7.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user2.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <span _ngcontent-sas-c142 className="badge">
                                              +3
                                            </span>
                                          </li>
                                        </ul>
                                      </td>
                                      <td _ngcontent-sas-c142>Sarah Smith</td>
                                      <td _ngcontent-sas-c142>
                                        <div _ngcontent-sas-c142 className="badge col-green">
                                          Low
                                        </div>
                                      </td>
                                      <td _ngcontent-sas-c142>25</td>
                                      <td _ngcontent-sas-c142>18</td>
                                      <td _ngcontent-sas-c142>
                                        <mat-progress-bar _ngcontent-sas-c142 aria-valuemax={100} aria-valuemin={0} aria-valuenow={73} className="mat-mdc-progress-bar mdc-linear-progress progress-xs progress-round green-progress progress-shadow mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={73}>
                                          <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                            <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                            <div className="mdc-linear-progress__buffer-dots" />
                                          </div>
                                          <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.73)'}}>
                                            <span className="mdc-linear-progress__bar-inner">
                                            </span>
                                          </div>
                                          <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                            <span className="mdc-linear-progress__bar-inner">
                                            </span>
                                          </div>
                                        </mat-progress-bar>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <i _ngcontent-sas-c142 className="far fa-file-pdf tbl-pdf">
                                        </i>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <button _ngcontent-sas-c142 aria-describedby="cdk-describedby-message-sas-1-2" cdk-describedby-host="sas-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-sas-c142 _nghost-sas-c130>
                                            <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="tbl-fav-edit">
                                              <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                              </svg>
                                            </i-feather>
                                          </app-feather-icons>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                        <button _ngcontent-sas-c142 aria-describedby="cdk-describedby-message-sas-1-3" cdk-describedby-host="sas-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-sas-c142 _nghost-sas-c130>
                                            <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="tbl-fav-delete">
                                              <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                <line x1={10} x2={10} y1={11} y2={17} />
                                                <line x1={14} x2={14} y1={11} y2={17} />
                                              </svg>
                                            </i-feather>
                                          </app-feather-icons>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                      </td>
                                    </tr>
                                    <tr _ngcontent-sas-c142>
                                      <td _ngcontent-sas-c142>Project C</td>
                                      <td _ngcontent-sas-c142 className="text-truncate">
                                        <ul _ngcontent-sas-c142 className="list-unstyled order-list">
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user2.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user1.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user8.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <span _ngcontent-sas-c142 className="badge">
                                              +2
                                            </span>
                                          </li>
                                        </ul>
                                      </td>
                                      <td _ngcontent-sas-c142>Airi Satou</td>
                                      <td _ngcontent-sas-c142>
                                        <div _ngcontent-sas-c142 className="badge col-blue">
                                          Medium
                                        </div>
                                      </td>
                                      <td _ngcontent-sas-c142>33</td>
                                      <td _ngcontent-sas-c142>21</td>
                                      <td _ngcontent-sas-c142>
                                        <mat-progress-bar _ngcontent-sas-c142 aria-valuemax={100} aria-valuemin={0} aria-valuenow={52} className="mat-mdc-progress-bar mdc-linear-progress progress-xs progress-round sky-progress progress-shadow mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={52}>
                                          <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                            <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                            <div className="mdc-linear-progress__buffer-dots" />
                                          </div>
                                          <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.52)'}}>
                                            <span className="mdc-linear-progress__bar-inner">
                                            </span>
                                          </div>
                                          <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                            <span className="mdc-linear-progress__bar-inner">
                                            </span>
                                          </div>
                                        </mat-progress-bar>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <i _ngcontent-sas-c142 className="far fa-file-pdf tbl-pdf">
                                        </i>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <button _ngcontent-sas-c142 aria-describedby="cdk-describedby-message-sas-1-2" cdk-describedby-host="sas-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-sas-c142 _nghost-sas-c130>
                                            <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="tbl-fav-edit">
                                              <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                              </svg>
                                            </i-feather>
                                          </app-feather-icons>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                        <button _ngcontent-sas-c142 aria-describedby="cdk-describedby-message-sas-1-3" cdk-describedby-host="sas-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-sas-c142 _nghost-sas-c130>
                                            <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="tbl-fav-delete">
                                              <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                <line x1={10} x2={10} y1={11} y2={17} />
                                                <line x1={14} x2={14} y1={11} y2={17} />
                                              </svg>
                                            </i-feather>
                                          </app-feather-icons>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                      </td>
                                    </tr>
                                    <tr _ngcontent-sas-c142>
                                      <td _ngcontent-sas-c142>Project D</td>
                                      <td _ngcontent-sas-c142 className="text-truncate">
                                        <ul _ngcontent-sas-c142 className="list-unstyled order-list">
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user5.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user3.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user9.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <span _ngcontent-sas-c142 className="badge">
                                              +4
                                            </span>
                                          </li>
                                        </ul>
                                      </td>
                                      <td _ngcontent-sas-c142>Angelica Ramos</td>
                                      <td _ngcontent-sas-c142>
                                        <div _ngcontent-sas-c142 className="badge col-orange">
                                          High
                                        </div>
                                      </td>
                                      <td _ngcontent-sas-c142>26</td>
                                      <td _ngcontent-sas-c142>15</td>
                                      <td _ngcontent-sas-c142>
                                        <mat-progress-bar _ngcontent-sas-c142 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="mat-mdc-progress-bar mdc-linear-progress progress-xs progress-round orange-progress progress-shadow mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={40}>
                                          <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                            <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                            <div className="mdc-linear-progress__buffer-dots" />
                                          </div>
                                          <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.4)'}}>
                                            <span className="mdc-linear-progress__bar-inner">
                                            </span>
                                          </div>
                                          <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                            <span className="mdc-linear-progress__bar-inner">
                                            </span>
                                          </div>
                                        </mat-progress-bar>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <i _ngcontent-sas-c142 className="far fa-file-pdf tbl-pdf">
                                        </i>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <button _ngcontent-sas-c142 aria-describedby="cdk-describedby-message-sas-1-2" cdk-describedby-host="sas-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-sas-c142 _nghost-sas-c130>
                                            <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="tbl-fav-edit">
                                              <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                              </svg>
                                            </i-feather>
                                          </app-feather-icons>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                        <button _ngcontent-sas-c142 aria-describedby="cdk-describedby-message-sas-1-3" cdk-describedby-host="sas-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-sas-c142 _nghost-sas-c130>
                                            <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="tbl-fav-delete">
                                              <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                <line x1={10} x2={10} y1={11} y2={17} />
                                                <line x1={14} x2={14} y1={11} y2={17} />
                                              </svg>
                                            </i-feather>
                                          </app-feather-icons>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                      </td>
                                    </tr>
                                    <tr _ngcontent-sas-c142>
                                      <td _ngcontent-sas-c142>Project E</td>
                                      <td _ngcontent-sas-c142 className="text-truncate">
                                        <ul _ngcontent-sas-c142 className="list-unstyled order-list">
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user2.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user4.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <span _ngcontent-sas-c142 className="badge">
                                              +3
                                            </span>
                                          </li>
                                        </ul>
                                      </td>
                                      <td _ngcontent-sas-c142>Ashton Cox</td>
                                      <td _ngcontent-sas-c142>
                                        <div _ngcontent-sas-c142 className="badge col-green">
                                          Low
                                        </div>
                                      </td>
                                      <td _ngcontent-sas-c142>12</td>
                                      <td _ngcontent-sas-c142>11</td>
                                      <td _ngcontent-sas-c142>
                                        <mat-progress-bar _ngcontent-sas-c142 aria-valuemax={100} aria-valuemin={0} aria-valuenow={88} className="mat-mdc-progress-bar mdc-linear-progress progress-xs progress-round green-progress progress-shadow mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={88}>
                                          <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                            <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                            <div className="mdc-linear-progress__buffer-dots" />
                                          </div>
                                          <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.88)'}}>
                                            <span className="mdc-linear-progress__bar-inner">
                                            </span>
                                          </div>
                                          <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                            <span className="mdc-linear-progress__bar-inner">
                                            </span>
                                          </div>
                                        </mat-progress-bar>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <i _ngcontent-sas-c142 className="far fa-file-pdf tbl-pdf">
                                        </i>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <button _ngcontent-sas-c142 aria-describedby="cdk-describedby-message-sas-1-2" cdk-describedby-host="sas-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-sas-c142 _nghost-sas-c130>
                                            <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="tbl-fav-edit">
                                              <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                              </svg>
                                            </i-feather>
                                          </app-feather-icons>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                        <button _ngcontent-sas-c142 aria-describedby="cdk-describedby-message-sas-1-3" cdk-describedby-host="sas-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-sas-c142 _nghost-sas-c130>
                                            <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="tbl-fav-delete">
                                              <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                <line x1={10} x2={10} y1={11} y2={17} />
                                                <line x1={14} x2={14} y1={11} y2={17} />
                                              </svg>
                                            </i-feather>
                                          </app-feather-icons>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                      </td>
                                    </tr>
                                    <tr _ngcontent-sas-c142>
                                      <td _ngcontent-sas-c142>Project F</td>
                                      <td _ngcontent-sas-c142 className="text-truncate">
                                        <ul _ngcontent-sas-c142 className="list-unstyled order-list">
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user6.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user9.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <img _ngcontent-sas-c142 alt="user" className="rounded-circle" src="assets/images/user/user4.jpg" />
                                          </li>
                                          <li _ngcontent-sas-c142 className="avatar avatar-sm">
                                            <span _ngcontent-sas-c142 className="badge">
                                              +2
                                            </span>
                                          </li>
                                        </ul>
                                      </td>
                                      <td _ngcontent-sas-c142>Cara Stevens</td>
                                      <td _ngcontent-sas-c142>
                                        <div _ngcontent-sas-c142 className="badge col-orange">
                                          High
                                        </div>
                                      </td>
                                      <td _ngcontent-sas-c142>43</td>
                                      <td _ngcontent-sas-c142>22</td>
                                      <td _ngcontent-sas-c142>
                                        <mat-progress-bar _ngcontent-sas-c142 aria-valuemax={100} aria-valuemin={0} aria-valuenow={67} className="mat-mdc-progress-bar mdc-linear-progress progress-xs progress-round oragne-progress progress-shadow text-left mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={67}>
                                          <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                            <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                            <div className="mdc-linear-progress__buffer-dots" />
                                          </div>
                                          <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.67)'}}>
                                            <span className="mdc-linear-progress__bar-inner">
                                            </span>
                                          </div>
                                          <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                            <span className="mdc-linear-progress__bar-inner">
                                            </span>
                                          </div>
                                        </mat-progress-bar>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <i _ngcontent-sas-c142 className="far fa-file-pdf tbl-pdf">
                                        </i>
                                      </td>
                                      <td _ngcontent-sas-c142>
                                        <button _ngcontent-sas-c142 aria-describedby="cdk-describedby-message-sas-1-2" cdk-describedby-host="sas-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-sas-c142 _nghost-sas-c130>
                                            <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="tbl-fav-edit">
                                              <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                              </svg>
                                            </i-feather>
                                          </app-feather-icons>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                        <button _ngcontent-sas-c142 aria-describedby="cdk-describedby-message-sas-1-3" cdk-describedby-host="sas-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-sas-c142 _nghost-sas-c130>
                                            <i-feather _ngcontent-sas-c130 _nghost-sas-c112 className="tbl-fav-delete">
                                              <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                <line x1={10} x2={10} y1={11} y2={17} />
                                                <line x1={14} x2={14} y1={11} y2={17} />
                                              </svg>
                                            </i-feather>
                                          </app-feather-icons>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </app-main>
                {/* */}
              </div>
            </app-main-layout>
            {/* */}
          </app-root>
          <svg height={0} id="SvgjsSvg1001" style={{overflow: 'hidden', top: '-100%', left: '-100%', position: 'absolute', opacity: 0}} version="1.1" width={2} xmlns="http://www.w3.org/2000/svg" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs id="SvgjsDefs1002" />
            <polyline id="SvgjsPolyline1003" points="0,0" />
            <path d="M0 0 " id="SvgjsPath1004" />
          </svg>
          <div className="cdk-describedby-message-container cdk-visually-hidden" style={{visibility: 'hidden'}}>
            <div id="cdk-describedby-message-sas-1-2" role="tooltip">Edit</div>
            <div id="cdk-describedby-message-sas-1-3" role="tooltip">Delete</div>
          </div>
          <svg height={0} id="SvgjsSvg1852" style={{overflow: 'hidden', top: '-100%', left: '-100%', position: 'absolute', opacity: 0}} version="1.1" width={2} xmlns="http://www.w3.org/2000/svg" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs id="SvgjsDefs1853" />
            <polyline id="SvgjsPolyline1854" points="0,0" />
            <path d="M-1 270.99999923706054L-1 270.99999923706054C-1 270.99999923706054 63.107638676961265 270.99999923706054 63.107638676961265 270.99999923706054C63.107638676961265 270.99999923706054 126.21527735392253 270.99999923706054 126.21527735392253 270.99999923706054C126.21527735392253 270.99999923706054 189.3229160308838 270.99999923706054 189.3229160308838 270.99999923706054C189.3229160308838 270.99999923706054 252.43055470784506 270.99999923706054 252.43055470784506 270.99999923706054C252.43055470784506 270.99999923706054 315.53819338480633 270.99999923706054 315.53819338480633 270.99999923706054C315.53819338480633 270.99999923706054 378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054C378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054 " id="SvgjsPath1855" />
          </svg>
        </div>
      );
    }
  