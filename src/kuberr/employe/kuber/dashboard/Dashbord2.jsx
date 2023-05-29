import React from "react"
// import { Link } from "react-router-dom";
import Drop from "../../../../Drop";

export default function Dashboard2 (){
      return (
        <div>
          <app-root _nghost-oko-c137 ng-version="15.2.0">
            <app-page-loader _ngcontent-oko-c137 _nghost-oko-c136>
              <ngx-loading-bar _ngcontent-oko-c136 _nghost-oko-c135 color="#3173D6" fixed="true" style={{color: 'rgb(49, 115, 214)'}}>
                {/* */}
              </ngx-loading-bar>
            </app-page-loader>
            <router-outlet _ngcontent-oko-c137> </router-outlet>
            <app-main-layout className="ng-star-inserted">
              <app-header _nghost-oko-c131>
                <nav _ngcontent-oko-c131 className="navbar active">
                  <div _ngcontent-oko-c131 className="container-fluid">
                    <div _ngcontent-oko-c131 className="navbar-header">
                      <a _ngcontent-oko-c131 aria-expanded="false" className="navbar-toggle collapsed" href="#" onclick="return false;">
                      </a>
                      <a _ngcontent-oko-c131 className="bars" href="#" onclick="return false;">
                      </a>
                      <a _ngcontent-oko-c131 className="navbar-brand" href="#/admin/dashboard/main">
                        <img _ngcontent-oko-c131 alt="" src="../../assets/images/logo.png" />
                        <span _ngcontent-oko-c131 className="logo-name"> Cyber-Instant </span>
                      </a>
                    </div>
                    <div _ngcontent-oko-c131 className="collapse navbar-collapse">
                      <ul _ngcontent-oko-c131 className="float-start collapse-menu-icon">
                        <li _ngcontent-oko-c131>
                          <button _ngcontent-oko-c131 className="sidemenu-collapse nav-notification-icons mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base" mat-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              <app-feather-icons _ngcontent-oko-c131 _nghost-oko-c130>
                                <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="header-icon">
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
                      <ul _ngcontent-oko-c131 className="nav navbar-nav navbar-right">
                        <li _ngcontent-oko-c131 className="fullscreen">
                          <button _ngcontent-oko-c131 className="nav-notification-icons mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base" mat-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              <app-feather-icons _ngcontent-oko-c131 _nghost-oko-c130>
                                <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="header-icon">
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
                        <li _ngcontent-oko-c131 className="nav-item">
                          <button _ngcontent-oko-c131 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger lang-dropdown nav-notification-icons mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base" mat-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              {/* */}
                              <img _ngcontent-oko-c131 className="ng-star-inserted" height={16} src="../../assets/images/flags/us.jpg" />
                              {/* */}
                            </span>
                            <span className="mat-mdc-focus-indicator"> </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target"> </span>
                          </button>
                          {/* */}
                          <mat-menu _ngcontent-oko-c131 className="ng-star-inserted">
                            {/* */}
                          </mat-menu>
                        </li>
                        <li _ngcontent-oko-c131 className="nav-item btnNotification" ngbdropdown>
                          <button _ngcontent-oko-c131 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger nav-notification-icons mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base" mat-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              <app-feather-icons _ngcontent-oko-c131 _nghost-oko-c130>
                                <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="header-icon">
                                  <svg className="feather feather-bell" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                  </svg>
                                </i-feather>
                              </app-feather-icons>
                              <span _ngcontent-oko-c131 className="label-count bg-orange">
                              </span>
                            </span>
                            <span className="mat-mdc-focus-indicator"> </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target"> </span>
                          </button>
                          {/* */}
                          <mat-menu _ngcontent-oko-c131 className="ng-star-inserted">
                            {/* */}
                          </mat-menu>
                        </li>
                        <li _ngcontent-oko-c131 className="nav-item user_profile">
                          <button _ngcontent-oko-c131 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base" mat-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              <div _ngcontent-oko-c131 ngbdropdowntoggle>
                                <span _ngcontent-oko-c131> Ella Jones </span>
                                <img _ngcontent-oko-c131 alt="User" className="user_img" height={32} src="../../assets/images/user/admin.jpg" width={32} />
                              </div>
                            </span>
                            <span className="mat-mdc-focus-indicator"> </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target"> </span>
                          </button>
                          {/* */}
                          <mat-menu _ngcontent-oko-c131 className="ng-star-inserted">
                            {/* */}
                          </mat-menu>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </app-header>
              <app-sidebar _nghost-oko-c132>
                <div _ngcontent-oko-c132>
                  <aside _ngcontent-oko-c132 className="sidebar" id="leftsidebar">
                    <div _ngcontent-oko-c132 className="menu">
                      <ng-scrollbar _ngcontent-oko-c132 _nghost-oko-c129 className="ng-scrollbar" style={{height: '543px'}} visibility="hover">
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
              <app-right-sidebar _nghost-oko-c133>
                <div _ngcontent-oko-c133 className="settingSidebar">
                  <a _ngcontent-oko-c133 className="settingPanelToggle" href="javascript:void(0)">
                    <app-feather-icons _ngcontent-oko-c133 _nghost-oko-c130>
                      <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="setting-sidebar-icon">
                        <svg className="feather feather-settings" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <circle cx={12} cy={12} r={3} />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                      </i-feather>
                    </app-feather-icons>
                  </a>
                  <ng-scrollbar _ngcontent-oko-c133 _nghost-oko-c129 className="ng-scrollbar" style={{height: '588px'}} visibility="hover">
                    <div _ngcontent-oko-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="true" pointereventsmethod="viewport" position="native" track="vertical" verticalused="true" visibility="hover">
                      <div _ngcontent-oko-c129 className="ng-scroll-viewport-wrapper">
                        <div _ngcontent-oko-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{nativeScrollbarSize: '0px'}}>
                          <div _ngcontent-oko-c129 className="ng-scroll-content">
                            <div _ngcontent-oko-c133 className="settingSidebar-body ps-container ps-theme-default">
                              <div _ngcontent-oko-c133 className="fade show active">
                                <div _ngcontent-oko-c133 className="setting-panel-header">
                                  Setting Panel
                                </div>
                                <div _ngcontent-oko-c133 className="p-15 border-bottom">
                                  <h6 _ngcontent-oko-c133 className="font-medium m-b-10">
                                    Select Layout
                                  </h6>
                                  <div _ngcontent-oko-c133 className="flex flex-wrap hiddenradio">
                                    <div _ngcontent-oko-c133 className="flex flex-col">
                                      <label _ngcontent-oko-c133>
                                        <input _ngcontent-oko-c133 name="value" type="radio" defaultValue="light" />
                                        <img _ngcontent-oko-c133 src="../../assets/images/light.png" />
                                      </label>
                                      <div _ngcontent-oko-c133 className="mt-1 text-md text-center">
                                        Light
                                      </div>
                                    </div>
                                    <div _ngcontent-oko-c133 className="flex flex-col mt-3">
                                      <label _ngcontent-oko-c133>
                                        <input _ngcontent-oko-c133 name="value" type="radio" defaultValue="dark" />
                                        <img _ngcontent-oko-c133 src="../../assets/images/dark.png" />
                                      </label>
                                      <div _ngcontent-oko-c133 className="mt-1 text-md text-center">
                                        Dark
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c133 className="rightSetting">
                                  <h6 _ngcontent-oko-c133 className="font-medium m-b-10">
                                    Sidebar Menu Color
                                  </h6>
                                  <mat-button-toggle-group _ngcontent-oko-c133 aria-disabled="false" className="mat-button-toggle-group mt-2 mat-button-toggle-group-appearance-standard" role="group">
                                    <mat-button-toggle _ngcontent-oko-c133 className="mat-button-toggle mat-button-toggle-checked mat-button-toggle-appearance-standard" id="mat-button-toggle-1" role="presentation" value="light">
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
                                    <mat-button-toggle _ngcontent-oko-c133 className="mat-button-toggle mat-button-toggle-appearance-standard" id="mat-button-toggle-2" role="presentation" value="dark">
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
                                <div _ngcontent-oko-c133 className="p-15 border-bottom">
                                  <h6 _ngcontent-oko-c133 className="font-medium m-b-10">
                                    Color Theme
                                  </h6>
                                  <div _ngcontent-oko-c133 className="theme-setting-options">
                                    <ul _ngcontent-oko-c133 className="choose-theme list-unstyled mb-0">
                                      <li _ngcontent-oko-c133 className="active" data-theme="white">
                                        <div _ngcontent-oko-c133 className="white" />
                                      </li>
                                      <li _ngcontent-oko-c133 data-theme="black">
                                        <div _ngcontent-oko-c133 className="black" />
                                      </li>
                                      <li _ngcontent-oko-c133 data-theme="purple">
                                        <div _ngcontent-oko-c133 className="purple" />
                                      </li>
                                      <li _ngcontent-oko-c133 data-theme="orange">
                                        <div _ngcontent-oko-c133 className="orange" />
                                      </li>
                                      <li _ngcontent-oko-c133 data-theme="cyan">
                                        <div _ngcontent-oko-c133 className="cyan" />
                                      </li>
                                      <li _ngcontent-oko-c133 data-theme="green">
                                        <div _ngcontent-oko-c133 className="green" />
                                      </li>
                                      <li _ngcontent-oko-c133 data-theme="blue">
                                        <div _ngcontent-oko-c133 className="blue" />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c133 className="rightSetting">
                                  <h6 _ngcontent-oko-c133 className="font-medium m-b-10">
                                    RTL Layout
                                  </h6>
                                  <mat-slide-toggle _ngcontent-oko-c133 className="mat-mdc-slide-toggle mt-2 mat-accent" id="mat-mdc-slide-toggle-1">
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
                      <scrollbar-y _ngcontent-oko-c129 _nghost-oko-c127 className="scrollbar-control ng-star-inserted" fit="false" scrollable="true">
                        <div _ngcontent-oko-c127 className="ng-scrollbar-track" scrollbartracky>
                          <div _ngcontent-oko-c127 className="ng-scrollbar-thumb" scrollbarthumby style={{height: '494px', transform: 'translate3d(0px, 0px, 0px)'}} />
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
                <app-dashboard2 _nghost-oko-c143 className="ng-star-inserted">
                  <section _ngcontent-oko-c143 className="content">
                    <div _ngcontent-oko-c143 className="content-block">
                      <div _ngcontent-oko-c143 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c143 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Dashboad 2
                                  </h4>
                                </div>
                              </div>
                              <div _ngcontent-oko-c141 className="col-6">
                                <ul _ngcontent-oko-c141 className="breadcrumb-list">
                                  <li _ngcontent-oko-c141 className="breadcrumb-item bcrumb-1">
                                    <a _ngcontent-oko-c141 href="#/admin/dashboard/main">
                                      <app-feather-icons _ngcontent-oko-c141 _nghost-oko-c130>
                                        <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="breadcrumb-icon">
                                          <svg className="feather feather-home" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                            <polyline points="9 22 9 12 15 12 15 22" />
                                          </svg>
                                        </i-feather>
                                      </app-feather-icons>
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c141 className="breadcrumb-item ng-star-inserted">
                                    Home
                                  </li>
                                  {/* */}
                                  <li _ngcontent-oko-c141 className="breadcrumb-item active">
                                    Dashboad 2
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c143 className="row">
                        <div _ngcontent-oko-c143 className="col-xl-3 col-lg-6">
                          <div _ngcontent-oko-c143 className="card l-bg-green-dark">
                            <div _ngcontent-oko-c143 className="card-statistic-3">
                              <div _ngcontent-oko-c143 className="card-icon card-icon-large">
                                <i _ngcontent-oko-c143 className="fa fa-briefcase">
                                </i>
                              </div>
                              <div _ngcontent-oko-c143 className="card-content">
                                <h4 _ngcontent-oko-c143 className="card-title">
                                  New Projects
                                </h4>
                                <span _ngcontent-oko-c143 className="data-1">
                                  102
                                </span>
                                <mat-progress-bar _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="mat-mdc-progress-bar mdc-linear-progress progress-m progress-round progress-shadow orange-progress mt-2 mb-2 mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={40}>
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
                                <p _ngcontent-oko-c143 className="mb-0 text-sm">
                                  <span _ngcontent-oko-c143 className="mr-2">
                                    <i _ngcontent-oko-c143 className="fa fa-arrow-up">
                                    </i>
                                    10%
                                  </span>
                                  <span _ngcontent-oko-c143 className="text-nowrap">
                                    Since last month
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c143 className="col-xl-3 col-lg-6">
                          <div _ngcontent-oko-c143 className="card l-bg-cyan-dark">
                            <div _ngcontent-oko-c143 className="card-statistic-3">
                              <div _ngcontent-oko-c143 className="card-icon card-icon-large">
                                <i _ngcontent-oko-c143 className="fas fa-users"> </i>
                              </div>
                              <div _ngcontent-oko-c143 className="card-content">
                                <h4 _ngcontent-oko-c143 className="card-title">
                                  New Customers
                                </h4>
                                <span _ngcontent-oko-c143 className="data-1">
                                  154
                                </span>
                                <mat-progress-bar _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="mat-mdc-progress-bar mdc-linear-progress progress-m progress-round progress-shadow purple-progress mt-2 mb-2 mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={40}>
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
                                <p _ngcontent-oko-c143 className="mb-0 text-sm">
                                  <span _ngcontent-oko-c143 className="mr-2">
                                    <i _ngcontent-oko-c143 className="fa fa-arrow-up">
                                    </i>
                                    04%
                                  </span>
                                  <span _ngcontent-oko-c143 className="text-nowrap">
                                    Since last month
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c143 className="col-xl-3 col-lg-6">
                          <div _ngcontent-oko-c143 className="card l-bg-purple-dark">
                            <div _ngcontent-oko-c143 className="card-statistic-3">
                              <div _ngcontent-oko-c143 className="card-icon card-icon-large">
                                <i _ngcontent-oko-c143 className="fa fa-globe"> </i>
                              </div>
                              <div _ngcontent-oko-c143 className="card-content">
                                <h4 _ngcontent-oko-c143 className="card-title">
                                  Inquiry
                                </h4>
                                <span _ngcontent-oko-c143 className="data-1">
                                  524
                                </span>
                                <mat-progress-bar _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="mat-mdc-progress-bar mdc-linear-progress progress-m progress-round progress-shadow green-progress mt-2 mb-2 mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={40}>
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
                                <p _ngcontent-oko-c143 className="mb-0 text-sm">
                                  <span _ngcontent-oko-c143 className="mr-2">
                                    <i _ngcontent-oko-c143 className="fa fa-arrow-up">
                                    </i>
                                    23%
                                  </span>
                                  <span _ngcontent-oko-c143 className="text-nowrap">
                                    Since last month
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c143 className="col-xl-3 col-lg-6">
                          <div _ngcontent-oko-c143 className="card l-bg-orange-dark">
                            <div _ngcontent-oko-c143 className="card-statistic-3">
                              <div _ngcontent-oko-c143 className="card-icon card-icon-large">
                                <i _ngcontent-oko-c143 className="fa fa-money-bill-alt">
                                </i>
                              </div>
                              <div _ngcontent-oko-c143 className="card-content">
                                <h4 _ngcontent-oko-c143 className="card-title">
                                  Earning
                                </h4>
                                <span _ngcontent-oko-c143 className="data-1">
                                  $2,453
                                </span>
                                <mat-progress-bar _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="mat-mdc-progress-bar mdc-linear-progress progress-m progress-round progress-shadow sky-progress mt-2 mb-2 mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={40}>
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
                                <p _ngcontent-oko-c143 className="mb-0 text-sm">
                                  <span _ngcontent-oko-c143 className="mr-2">
                                    <i _ngcontent-oko-c143 className="fa fa-arrow-down">
                                    </i>
                                    06%
                                  </span>
                                  <span _ngcontent-oko-c143 className="text-nowrap">
                                    Since last month
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c143 className="row clearfix">
                        <div _ngcontent-oko-c143 className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c143 className="card">
                            <div _ngcontent-oko-c143 className="header">
                              <h2 _ngcontent-oko-c143>Employee Performance</h2>
                            </div>
                            <div _ngcontent-oko-c143 className="body">
                              <div _ngcontent-oko-c143 className="recent-report__chart">
                                <apx-chart _ngcontent-oko-c143 _nghost-oko-c139>
                                  <div _ngcontent-oko-c139 style={{minHeight: '365px'}}>
                                    <div className="apexcharts-canvas apexchartsddcwn48h apexcharts-theme-light" id="apexchartsddcwn48h" style={{width: '596px', height: '350px'}}>
                                      <svg className="apexcharts-svg apexcharts-zoomable hovering-zoom" height={350} id="SvgjsSvg2760" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={596} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <foreignObject height={350} width={596} x={0} y={0}>
                                          <div className="apexcharts-legend apexcharts-align-right apx-legend-position-top" style={{right: '0px', position: 'absolute', left: '15px', top: '-25px', maxHeight: '175px'}} xmlns="http://www.w3.org/1999/xhtml">
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={1} seriesname="Employeex1" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={1} style={{background: 'rgb(165,165,165) !important', color: 'rgb(165, 165, 165)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Employee%201" i={0} rel={1} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                Employee 1
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={2} seriesname="Employeex2" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={2} style={{background: 'rgb(135,86,146) !important', color: 'rgb(135, 86, 146)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                              <span className="apexcharts-legend-text" datac-ollapsed="false" data-default-text="Employee%202" i={1} rel={2} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                Employee 2
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={3} seriesname="Employeex3" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={3} style={{background: 'rgb(76,181,172) !important', color: 'rgb(76, 181, 172)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />  
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Employee%203" i={2} rel={3} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                Employee 3
                                              </span>
                                            </div>
                                          </div>
                                          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                      .apexcharts-legend {\n                                        display: flex;\n                                        overflow: auto;\n                                        padding: 0 10px;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom,\n                                      .apexcharts-legend.apx-legend-position-top {\n                                        flex-wrap: wrap;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        flex-direction: column;\n                                        bottom: 0;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        justify-content: flex-start;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                                        justify-content: center;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                                        justify-content: flex-end;\n                                      }\n                                      .apexcharts-legend-series {\n                                        cursor: pointer;\n                                        line-height: normal;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apx-legend-position-top\n                                        .apexcharts-legend-series {\n                                        display: flex;\n                                        align-items: center;\n                                      }\n                                      .apexcharts-legend-text {\n                                        position: relative;\n                                        font-size: 14px;\n                                      }\n                                      .apexcharts-legend-text *,\n                                      .apexcharts-legend-marker * {\n                                        pointer-events: none;\n                                      }\n                                      .apexcharts-legend-marker {\n                                        position: relative;\n                                        display: inline-block;\n                                        cursor: pointer;\n                                        margin-right: 3px;\n                                        border-style: solid;\n                                      }\n\n                                      .apexcharts-legend.apexcharts-align-right\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apexcharts-align-left\n                                        .apexcharts-legend-series {\n                                        display: inline-block;\n                                      }\n                                      .apexcharts-legend-series.apexcharts-no-click {\n                                        cursor: auto;\n                                      }\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-zero-series,\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-null-series {\n                                        display: none !important;\n                                      }\n                                      .apexcharts-inactive-legend {\n                                        opacity: 0.45;\n                                      }\n                                    " }} />
                                        </foreignObject>
                                        <rect fill="#fefefe" height={0} id="SvgjsRect2768" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        <g className="apexcharts-annotations" id="SvgjsG2763" />
                                        <g className="apexcharts-yaxis" id="SvgjsG2908" rel={0} transform="translate(22.354167938232422, 0)">
                                          <g className="apexcharts-yaxis-texts-g" id="SvgjsG2909">
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2911" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="31.5">
                                              <tspan id="SvgjsTspan2912">300</tspan>
                                              <title>300</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2914" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="83.87066625518798">
                                              <tspan id="SvgjsTspan2915">240</tspan>
                                              <title>240</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2917" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="136.24133251037597">
                                              <tspan id="SvgjsTspan2918">180</tspan>
                                              <title>180</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2920" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="188.61199876556395">
                                              <tspan id="SvgjsTspan2921">120</tspan>
                                              <title>120</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2923" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="240.98266502075194">
                                              <tspan id="SvgjsTspan2924">60</tspan>
                                              <title>60</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText2926" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="293.3533312759399">
                                              <tspan id="SvgjsTspan2927">0</tspan>
                                              <title>0</title>
                                            </text>
                                          </g>
                                          <g className="apexcharts-yaxis-title" id="SvgjsG2928">
                                            <text className="apexcharts-text apexcharts-yaxis-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={900} id="SvgjsText2929" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" transform="rotate(-90 -12.7490234375 156.59333324432373)" x="8.03173828125" y="160.92666563796996">
                                              Clients
                                            </text>
                                          </g>
                                        </g>
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG2762" transform="translate(52.35416793823242, 30)">
                                          <defs id="SvgjsDefs2761">
                                            <clipPath id="gridRectMaskddcwn48h">
                                              <rect fill="#fff" height="266.8533312759399" id="SvgjsRect2770" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="542.6458320617676" x="-4.5" y="-2.5" />
                                            </clipPath>
                                            <clipPath id="forecastMaskddcwn48h" />
                                            <clipPath id="nonForecastMaskddcwn48h" />
                                            <clipPath id="gridRectMarkerMaskddcwn48h">
                                              <rect fill="#fff" height="305.8533312759399" id="SvgjsRect2771" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="577.6458320617676" x={-22} y={-22} />
                                            </clipPath>
                                            <filter filterUnits="userSpaceOnUse" height="200%" id="SvgjsFilter2790" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity="0.2" id="SvgjsFeFlood2791" in="SourceGraphic" result="SvgjsFeFlood2791Out" />
                                              <feComposite id="SvgjsFeComposite2792" in="SvgjsFeFlood2791Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite2792Out" />
                                              <feOffset dx={7} dy={18} id="SvgjsFeOffset2793" in="SvgjsFeComposite2792Out" result="SvgjsFeOffset2793Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur2794" in="SvgjsFeOffset2793Out" result="SvgjsFeGaussianBlur2794Out" stdDeviation={10 } />
                                              <feMerge id="SvgjsFeMerge2795" in="SourceGraphic" result="SvgjsFeMerge2795Out">
                                                <feMergeNode id="SvgjsFeMergeNode2796" in="SvgjsFeGaussianBlur2794Out" />
                                                <feMergeNode id="SvgjsFeMergeNode2797" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend2798" in="SourceGraphic" in2="SvgjsFeMerge2795Out" mode="normal" result="SvgjsFeBlend2798Out" />
                                            </filter>
                                            <filter filterUnits="userSpaceOnUse" height="200%" id="SvgjsFilter2816" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity="0.2" id="SvgjsFeFlood2817" in="SourceGraphic" result="SvgjsFeFlood2817Out" />
                                              <feComposite id="SvgjsFeComposite2818" in="SvgjsFeFlood2817Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite2818Out" />
                                              <feOffset dx={7} dy={18} id="SvgjsFeOffset2819" in="SvgjsFeComposite2818Out" result="SvgjsFeOffset2819Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur2820" in="SvgjsFeOffset2819Out" result="SvgjsFeGaussianBlur2820Out" stdDeviation={10 } />
                                              <feMerge id="SvgjsFeMerge2821" in="SourceGraphic" result="SvgjsFeMerge2821Out">
                                                <feMergeNode id="SvgjsFeMergeNode2822" in="SvgjsFeGaussianBlur2820Out" />
                                                <feMergeNode id="SvgjsFeMergeNode2823" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend2824" in="SourceGraphic" in2="SvgjsFeMerge2821Out" mode="normal" result="SvgjsFeBlend2824Out" />
                                            </filter>
                                            <filter filterUnits="userSpaceOnUse" height="200%" id="SvgjsFilter2842" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity="0.2" id="SvgjsFeFlood2843" in="SourceGraphic" result="SvgjsFeFlood2843Out" />
                                              <feComposite id="SvgjsFeComposite2844" in="SvgjsFeFlood2843Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite2844Out" />
                                              <feOffset dx={7} dy={18} id="SvgjsFeOffset2845" in="SvgjsFeComposite2844Out" result="SvgjsFeOffset2845Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur2846" in="SvgjsFeOffset2845Out" result="SvgjsFeGaussianBlur2846Out" stdDeviation={10 } />
                                              <feMerge id="SvgjsFeMerge2847" in="SourceGraphic" result="SvgjsFeMerge2847Out">
                                                <feMergeNode id="SvgjsFeMergeNode2848" in="SvgjsFeGaussianBlur2846Out" />
                                                <feMergeNode id="SvgjsFeMergeNode2849" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend2850" in="SourceGraphic" in2="SvgjsFeMerge2847Out" mode="normal" result="SvgjsFeBlend2850Out" />
                                            </filter>
                                          </defs>
                                          <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height="261.8533312759399" id="SvgjsLine2769" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x="177.3819440205892" x1="177.3819440205892" x2="177.3819440205892" y={0} y1={0} y2="261.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine2856" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1="262.8533312759399" y2="268.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine2858" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="88.9409720102946" x2="88.9409720102946" y1="262.8533312759399" y2="268.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine2860" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="177.8819440205892" x2="177.8819440205892" y1="262.8533312759399" y2="268.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine2862" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="266.8229160308838" x2="266.8229160308838" y1="262.8533312759399" y2="268.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine2864" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="355.7638880411784" x2="355.7638880411784" y1="262.8533312759399" y2="268.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine2866" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="444.704860051473" x2="444.704860051473" y1="262.8533312759399" y2="268.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine2868" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="533.6458320617676" x2="533.6458320617676" y1="262.8533312759399" y2="268.8533312759399" />
                                          <g className="apexcharts-grid" id="SvgjsG2851">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG2852">
                                              <line className="apexcharts-gridline" id="SvgjsLine2870" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="533.6458320617676" y1="52.370666255187984" y2="52.370666255187984" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2871" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="533.6458320617676" y1="104.74133251037597" y2="104.74133251037597" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2872" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="533.6458320617676" y1="157.11199876556395" y2="157.11199876556395" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2873" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="533.6458320617676" y1="209.48266502075194" y2="209.48266502075194" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG2853">
                                              <line className="apexcharts-gridline" id="SvgjsLine2855" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2={0} y1={0} y2="261.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2857" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="88.9409720102946" x2="88.9409720102946" y1={0} y2="261.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2859" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="177.8819440205892" x2="177.8819440205892" y1={0} y2="261.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2861" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="266.8229160308838" x2="266.8229160308838" y1={0} y2="261.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2863" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="355.7638880411784" x2="355.7638880411784" y1={0} y2="261.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2865" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="444.704860051473" x2="444.704860051473" y1={0} y2="261.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine2867" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="533.6458320617676" x2="533.6458320617676" y1={0} y2="261.8533312759399" />
                                            </g>
                                            <line id="SvgjsLine2876" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="533.6458320617676" y1="261.8533312759399" y2="261.8533312759399" />
                                            <line id="SvgjsLine2875" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="261.8533312759399" />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG2854">
                                            <line className="apexcharts-gridline" id="SvgjsLine2869" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="533.6458320617676" y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine2874" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="533.6458320617676" y1="261.8533312759399" y2="261.8533312759399" />
                                            <line id="SvgjsLine2907" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="533.6458320617676" y1="262.8533312759399" y2="262.8533312759399" />
                                          </g>
                                          <g className="apexcharts-line-series apexcharts-plot-series" id="SvgjsG2772">
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG2773" rel={1} seriesname="Employeex1">
                                              <path className="apexcharts-line" clipPath="url(#gridRectMaskddcwn48h)" d="M0 200.75422064488728C31.129340203603107 200.75422064488728 57.811631806691494 87.28444375864663 88.9409720102946 87.28444375864663C120.07031221389771 87.28444375864663 146.7526038169861 192.02577626902263 177.8819440205892 192.02577626902263C209.0112842241923 192.02577626902263 235.69357582728068 104.74133251037597 266.8229160308838 104.74133251037597C297.9522562344869 104.74133251037597 324.63454783757527 113.46977688624062 355.7638880411784 113.46977688624062C386.8932282447815 113.46977688624062 413.5755198478699 170.20466532936095 444.70486005147296 170.20466532936095C475.8342002550761 170.20466532936095 502.51649185816444 78.55599938278198 533.6458320617676 78.55599938278198C533.6458320617676 78.55599938278198 533.6458320617676 78.55599938278198 533.6458320617676 78.55599938278198 " fill="none" fillOpacity={1} fillRule="evenodd" filter="url(#SvgjsFilter2790)" id="SvgjsPath2789" index={0} pathfrom="M -1 261.8533312759399 L -1 261.8533312759399 L 88.9409720102946 261.8533312759399 L 177.8819440205892 261.8533312759399 L 266.8229160308838 261.8533312759399 L 355.7638880411784 261.8533312759399 L 444.70486005147296 261.8533312759399 L 533.6458320617676 261.8533312759399" pathto="M 0 200.75422064488728C 31.129340203603107 200.75422064488728 57.811631806691494 87.28444375864663 88.9409720102946 87.28444375864663C 120.07031221389771 87.28444375864663 146.7526038169861 192.02577626902263 177.8819440205892 192.02577626902263C 209.0112842241923 192.02577626902263 235.69357582728068 104.74133251037597 266.8229160308838 104.74133251037597C 297.9522562344869 104.74133251037597 324.63454783757527 113.46977688624062 355.7638880411784 113.46977688624062C 386.8932282447815 113.46977688624062 413.5755198478699 170.20466532936095 444.70486005147296 170.20466532936095C 475.8342002550761 170.20466532936095 502.51649185816444 78.55599938278198 533.6458320617676 78.55599938278198" stroke="rgba(165,165,165,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={5} />
                                              <g className="apexcharts-series-markers-wrap" data-realindex={0} id="SvgjsG2774">
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2776">
                                                  <circle className="apexcharts-marker no-pointer-events wou1djtk9j" cx={0} cy="200.75422064488728" default-marker-size={3} fill="#a5a5a5" fillOpacity={1} id="SvgjsCircle2777" index={0} j={0} r={3} rel={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                  <circle className="apexcharts-marker no-pointer-events wfj7hyji5k" cx="88.9409720102946" cy="87.28444375864663" default-marker-size={3} fill="#a5a5a5" fillOpacity={1} id="SvgjsCircle2778" index={0} j={1} r={3} rel={1} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2779">
                                                  <circle className="apexcharts-marker no-pointer-events wdr29t371g" cx="177.8819440205892" cy="192.02577626902263" default-marker-size={3} fill="#a5a5a5" fillOpacity={1} id="SvgjsCircle2780" index={0} j={2} r={3} rel={2} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2781">
                                                  <circle className="apexcharts-marker no-pointer-events wfs22jbzj" cx="266.8229160308838" cy="104.74133251037597" default-marker-size={3} fill="#a5a5a5" fillOpacity={1} id="SvgjsCircle2782" index={0} j={3} r={3} rel={3} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2783">
                                                  <circle className="apexcharts-marker no-pointer-events w7933kqdy" cx="355.7638880411784" cy="113.46977688624062" default-marker-size={3} fill="#a5a5a5" fillOpacity={1} id="SvgjsCircle2784" index={0} j={4} r={3} rel={4} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2785">
                                                  <circle className="apexcharts-marker no-pointer-events ws6h0frtw" cx="444.70486005147296" cy="170.20466532936095" default-marker-size={3} fill="#a5a5a5" fillOpacity={1} id="SvgjsCircle2786" index={0} j={5} r={3} rel={5} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2787">
                                                  <circle className="apexcharts-marker no-pointer-events w4zku09ze" cx="533.6458320617676" cy="78.55599938278198" default-marker-size={3} fill="#a5a5a5" fillOpacity={1} id="SvgjsCircle2788" index={0} j={6} r={3} rel={6} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={1} id="SvgjsG2799" rel={2} seriesname="Employeex2">
                                              <path className="apexcharts-line" clipPath="url(#gridRectMaskddcwn48h)" d="M0 192.02577626902263C31.129340203603107 192.02577626902263 57.811631806691494 43.64222187932333 88.9409720102946 43.64222187932333C120.07031221389771 43.64222187932333 146.7526038169861 235.66799814834593 177.8819440205892 235.66799814834593C209.0112842241923 235.66799814834593 235.69357582728068 157.11199876556395 266.8229160308838 157.11199876556395C297.9522562344869 157.11199876556395 324.63454783757527 34.913777503458675 355.7638880411784 34.913777503458675C386.8932282447815 34.913777503458675 413.5755198478699 174.56888751729326 444.70486005147296 174.56888751729326C475.8342002550761 174.56888751729326 502.51649185816444 104.74133251037597 533.6458320617676 104.74133251037597C533.6458320617676 104.74133251037597 533.6458320617676 104.74133251037597 533.6458320617676 104.74133251037597 " fill="none" fillOpacity={1} fillRule="evenodd" filter="url(#SvgjsFilter2816)" id="SvgjsPath2815" index={1} pathfrom="M -1 261.8533312759399 L -1 261.8533312759399 L 88.9409720102946 261.8533312759399 L 177.8819440205892 261.8533312759399 L 266.8229160308838 261.8533312759399 L 355.7638880411784 261.8533312759399 L 444.70486005147296 261.8533312759399 L 533.6458320617676 261.8533312759399" pathto="M 0 192.02577626902263C 31.129340203603107 192.02577626902263 57.811631806691494 43.64222187932333 88.9409720102946 43.64222187932333C 120.07031221389771 43.64222187932333 146.7526038169861 235.66799814834593 177.8819440205892 235.66799814834593C 209.0112842241923 235.66799814834593 235.69357582728068 157.11199876556395 266.8229160308838 157.11199876556395C 297.9522562344869 157.11199876556395 324.63454783757527 34.913777503458675 355.7638880411784 34.913777503458675C 386.8932282447815 34.913777503458675 413.5755198478699 174.56888751729326 444.70486005147296 174.56888751729326C 475.8342002550761 174.56888751729326 502.51649185816444 104.74133251037597 533.6458320617676 104.74133251037597" stroke="rgba(135,86,146,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={5} />
                                              <g className="apexcharts-series-markers-wrap" data-realindex={1} id="SvgjsG2800">
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2802">
                                                  <circle className="apexcharts-marker no-pointer-events wkbfrqxh9" cx={0} cy="192.02577626902263" default-marker-size={3} fill="#875692" fillOpacity={1} id="SvgjsCircle2803" index={1} j={0} r={3} rel={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                  <circle className="apexcharts-marker no-pointer-events wwts7bn4bh" cx="88.9409720102946" cy="43.64222187932333" default-marker-size={3} fill="#875692" fillOpacity={1} id="SvgjsCircle2804" index={1} j={1} r={3} rel={1} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2805">
                                                  <circle className="apexcharts-marker no-pointer-events w7wvpqrvog" cx="177.8819440205892" cy="235.66799814834593" default-marker-size={3} fill="#875692" fillOpacity={1} id="SvgjsCircle2806" index={1} j={2} r={3} rel={2} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2807">
                                                  <circle className="apexcharts-marker no-pointer-events wcq8c4lz5" cx="266.8229160308838" cy="157.11199876556395" default-marker-size={3} fill="#875692" fillOpacity={1} id="SvgjsCircle2808" index={1} j={3} r={3} rel={3} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2809">
                                                  <circle className="apexcharts-marker no-pointer-events wxamb9bba" cx="355.7638880411784" cy="34.913777503458675" default-marker-size={3} fill="#875692" fillOpacity={1} id="SvgjsCircle2810" index={1} j={4} r={3} rel={4} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2811">
                                                  <circle className="apexcharts-marker no-pointer-events wsf58rfpbj" cx="444.70486005147296" cy="174.56888751729326" default-marker-size={3} fill="#875692" fillOpacity={1} id="SvgjsCircle2812" index={1} j={5} r={3} rel={5} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2813">
                                                  <circle className="apexcharts-marker no-pointer-events w9aqoeqnv" cx="533.6458320617676" cy="104.74133251037597" default-marker-size={3} fill="#875692" fillOpacity={1} id="SvgjsCircle2814" index={1} j={6} r={3} rel={6} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={2} id="SvgjsG2825" rel={3} seriesname="Employeex3">
                                              <path className="apexcharts-line" clipPath="url(#gridRectMaskddcwn48h)" d="M0 187.6615540810903C31.129340203603107 187.6615540810903 57.811631806691494 148.3835543896993 88.9409720102946 148.3835543896993C120.07031221389771 148.3835543896993 146.7526038169861 187.6615540810903 177.8819440205892 187.6615540810903C209.0112842241923 187.6615540810903 235.69357582728068 65.46333281898498 266.8229160308838 65.46333281898498C297.9522562344869 65.46333281898498 324.63454783757527 192.02577626902263 355.7638880411784 192.02577626902263C386.8932282447815 192.02577626902263 413.5755198478699 96.01288813451131 444.70486005147296 96.01288813451131C475.8342002550761 96.01288813451131 502.51649185816444 157.11199876556395 533.6458320617676 157.11199876556395C533.6458320617676 157.11199876556395 533.6458320617676 157.11199876556395 533.6458320617676 157.11199876556395 " fill="none" fillOpacity={1} fillRule="evenodd" filter="url(#SvgjsFilter2842)" id="SvgjsPath2841" index={2} pathfrom="M -1 261.8533312759399 L -1 261.8533312759399 L 88.9409720102946 261.8533312759399 L 177.8819440205892 261.8533312759399 L 266.8229160308838 261.8533312759399 L 355.7638880411784 261.8533312759399 L 444.70486005147296 261.8533312759399 L 533.6458320617676 261.8533312759399" pathto="M 0 187.6615540810903C 31.129340203603107 187.6615540810903 57.811631806691494 148.3835543896993 88.9409720102946 148.3835543896993C 120.07031221389771 148.3835543896993 146.7526038169861 187.6615540810903 177.8819440205892 187.6615540810903C 209.0112842241923 187.6615540810903 235.69357582728068 65.46333281898498 266.8229160308838 65.46333281898498C 297.9522562344869 65.46333281898498 324.63454783757527 192.02577626902263 355.7638880411784 192.02577626902263C 386.8932282447815 192.02577626902263 413.5755198478699 96.01288813451131 444.70486005147296 96.01288813451131C 475.8342002550761 96.01288813451131 502.51649185816444 157.11199876556395 533.6458320617676 157.11199876556395" stroke="rgba(76,181,172,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={5} />
                                              <g className="apexcharts-series-markers-wrap" data-realindex={2} id="SvgjsG2826">
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2828">
                                                  <circle className="apexcharts-marker no-pointer-events wgy8o287ph" cx={0} cy="187.6615540810903" default-marker-size={3} fill="#4cb5ac" fillOpacity={1} id="SvgjsCircle2829" index={2} j={0} r={3} rel={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                  <circle className="apexcharts-marker no-pointer-events wwdpd18h4i" cx="88.9409720102946" cy="148.3835543896993" default-marker-size={3} fill="#4cb5ac" fillOpacity={1} id="SvgjsCircle2830" index={2} j={1} r={3} rel={1} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2831">
                                                  <circle className="apexcharts-marker no-pointer-events wkvkvv4i7" cx="177.8819440205892" cy="187.6615540810903" default-marker-size={3} fill="#4cb5ac" fillOpacity={1} id="SvgjsCircle2832" index={2} j={2} r={3} rel={2} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2833">
                                                  <circle className="apexcharts-marker no-pointer-events we9gfpvr3" cx="266.8229160308838" cy="65.46333281898498" default-marker-size={3} fill="#4cb5ac" fillOpacity={1} id="SvgjsCircle2834" index={2} j={3} r={3} rel={3} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2835">
                                                  <circle className="apexcharts-marker no-pointer-events w6f75cchf" cx="355.7638880411784" cy="192.02577626902263" default-marker-size={3} fill="#4cb5ac" fillOpacity={1} id="SvgjsCircle2836" index={2} j={4} r={3} rel={4} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2837">
                                                  <circle className="apexcharts-marker no-pointer-events wp3cc6v4tl" cx="444.70486005147296" cy="96.01288813451131" default-marker-size={3} fill="#4cb5ac" fillOpacity={1} id="SvgjsCircle2838" index={2} j={5} r={3} rel={5} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskddcwn48h)" id="SvgjsG2839">
                                                  <circle className="apexcharts-marker no-pointer-events wwm3emuci" cx="533.6458320617676" cy="157.11199876556395" default-marker-size={3} fill="#4cb5ac" fillOpacity={1} id="SvgjsCircle2840" index={2} j={6} r={3} rel={6} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG2775" />
                                            <g className="apexcharts-datalabels" data-realindex={1} id="SvgjsG2801" />
                                            <g className="apexcharts-datalabels" data-realindex={2} id="SvgjsG2827" />
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine2877" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="533.6458320617676" y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine2878" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="533.6458320617676" y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations" id="SvgjsG2879" />
                                          <g className="apexcharts-xaxis-annotations" id="SvgjsG2880" />
                                          <g className="apexcharts-point-annotations" id="SvgjsG2881" />
                                          <g className="apexcharts-xaxis" id="SvgjsG2882" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG2883" transform="translate(0, -4)">
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2885" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x={0} y="290.8533312759399">
                                                <tspan id="SvgjsTspan2886">Jan</tspan>
                                                <title>Jan</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2888" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="88.94097201029459" y="290.8533312759399">
                                                <tspan id="SvgjsTspan2889">Feb</tspan>
                                                <title>Feb</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2891" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="177.8819440205892" y="290.8533312759399">
                                                <tspan id="SvgjsTspan2892">Mar</tspan>
                                                <title>Mar</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2894" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="266.82291603088385" y="290.8533312759399">
                                                <tspan id="SvgjsTspan2895">Apr</tspan>
                                                <title>Apr</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2897" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="355.76388804117846" y="290.8533312759399">
                                                <tspan id="SvgjsTspan2898">May</tspan>
                                                <title>May</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2900" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="444.7048600514731" y="290.8533312759399">
                                                <tspan id="SvgjsTspan2901">Jun</tspan>
                                                <title>Jun</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText2903" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="533.6458320617676" y="290.8533312759399">
                                                <tspan id="SvgjsTspan2904">Jul</tspan>
                                                <title>Jul</title>
                                              </text>
                                            </g>
                                            <g className="apexcharts-xaxis-title" id="SvgjsG2905">
                                              <text className="apexcharts-text apexcharts-xaxis-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={900} id="SvgjsText2906" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="266.8229160308838" y="314.6666660308838">
                                                Month
                                              </text>
                                            </g>
                                          </g>
                                          <rect className="apexcharts-zoom-rect" fill="#fefefe" height={0} id="SvgjsRect2930" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                          <rect className="apexcharts-selection-rect" fill="#fefefe" height={0} id="SvgjsRect2931" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        </g>
                                      </svg>
                                      <div className="apexcharts-tooltip apexcharts-theme-dark" style={{left: '244.236px', top: '192.162px'}}>
                                        <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}}>
                                          Mar
                                        </div>
                                        <div className="apexcharts-tooltip-series-group apexcharts-active" style={{order: 1, display: 'flex'}}>
                                          <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(165, 165, 165)'}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial,sans-serif', fontSize: '12px'}}>
                                            <div className="apexcharts-tooltip-y-group">
                                              <span className="apexcharts-tooltip-text-y-label">
                                                Employee 1:
                                              </span>
                                              <span className="apexcharts-tooltip-text-y-value">
                                                80
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
                                        <div className="apexcharts-tooltip-series-group apexcharts-active" style={{order: 2, display: 'flex'}}>
                                          <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(135, 86, 146)'}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial,sans-serif', fontSize: '12px'}}>
                                            <div className="apexcharts-tooltip-y-group">
                                              <span className="apexcharts-tooltip-text-y-label">
                                                Employee 2:
                                              </span>
                                              <span className="apexcharts-tooltip-text-y-value">
                                                30
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
                                        <div className="apexcharts-tooltip-series-group apexcharts-active" style={{order: 3, display: 'flex'}}>
                                          <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(76, 181, 172)'}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial,sans-serif', fontSize: '12px'}}>
                                            <div className="apexcharts-tooltip-y-group">
                                              <span className="apexcharts-tooltip-text-y-label">
                                                Employee 3:
                                              </span>
                                              <span className="apexcharts-tooltip-text-y-value">
                                                85
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
                                      <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-dark" style={{left: '208.736px', top: '293.853px'}}>
                                        <div className="apexcharts-xaxistooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px', minWidth: '19.9474px'}}>
                                          Mar
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
                        <div _ngcontent-oko-c143 className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c143 className="card">
                            <div _ngcontent-oko-c143 className="header">
                              <h2 _ngcontent-oko-c143>Country Wise Clients</h2>
                            </div>
                            <div _ngcontent-oko-c143 className="body">
                              <div _ngcontent-oko-c143 id="chart">
                                <apx-chart _ngcontent-oko-c143 _nghost-oko-c139 className="apex-pie-center">
                                  <div _ngcontent-oko-c139 style={{minHeight: '166.2px'}}>
                                    <div className="apexcharts-canvas apexchartsc2okc2pp apexcharts-theme-light" id="apexchartsc2okc2pp" style={{width: '225px', height: '166.2px'}}>
                                      <svg className="apexcharts-svg" height="166.20000000000002" id="SvgjsSvg2932" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={225} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG2934" transform="translate(31.75, 0)">
                                          <defs id="SvgjsDefs2933">
                                            <clipPath id="gridRectMaskc2okc2pp">
                                              <rect fill="#fff" height="187.5" id="SvgjsRect2936" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="169.5" x={-3} y={-1} />
                                            </clipPath>
                                            <clipPath id="forecastMaskc2okc2pp" />
                                            <clipPath id="nonForecastMaskc2okc2pp" />
                                            <clipPath id="gridRectMarkerMaskc2okc2pp">
                                              <rect fill="#fff" height="189.5" id="SvgjsRect2937" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="167.5" x={-2} y={-2} />
                                            </clipPath>
                                          </defs>
                                          <g className="apexcharts-pie" id="SvgjsG2938">
                                            <g id="SvgjsG2939" transform="translate(0, 0) scale(1)">
                                              <circle cx="81.75" cy="81.75" fill="transparent" id="SvgjsCircle2940" r="47.94146341463416" />
                                              <g className="apexcharts-slices" id="SvgjsG2941">
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={0} id="SvgjsG2942" rel={1} seriesname="Science">
                                                  <path className="apexcharts-pie-area apexcharts-donut-slice-0" d="M 81.75 7.993902439024382 A 73.75609756097562 73.75609756097562 0 0 1 155.5031931484205 81.09545600917144 L 129.68957554647335 81.32454640596143 A 47.94146341463416 47.94146341463416 0 0 0 81.75 33.80853658536584 L 81.75 7.993902439024382 z" data-angle="89.49152542372882" data-pathorig="M 81.75 7.993902439024382 A 73.75609756097562 73.75609756097562 0 0 1 155.5031931484205 81.09545600917144 L 129.68957554647335 81.32454640596143 A 47.94146341463416 47.94146341463416 0 0 0 81.75 33.80853658536584 L 81.75 7.993902439024382 z" data-startangle={0} data-strokewidth={2} data-value={44} fill="rgba(0,143,251,1)" fillOpacity={1} id="SvgjsPath2943" index={0} j={0} stroke="#ffffff" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={1} id="SvgjsG2944" rel={2} seriesname="Mathes">
                                                  <path className="apexcharts-pie-area apexcharts-donut-slice-1" d="M 155.5031931484205 81.09545600917144 A 73.75609756097562 73.75609756097562 0 0 1 54.890937083791826 150.44172196624078 L 64.29160910446468 126.3996192780565 A 47.94146341463416 47.94146341463416 0 0 0 129.68957554647335 81.32454640596143 L 155.5031931484205 81.09545600917144 z" data-angle="111.86440677966102" data-pathorig="M 155.5031931484205 81.09545600917144 A 73.75609756097562 73.75609756097562 0 0 1 54.890937083791826 150.44172196624078 L 64.29160910446468 126.3996192780565 A 47.94146341463416 47.94146341463416 0 0 0 129.68957554647335 81.32454640596143 L 155.5031931484205 81.09545600917144 z" data-startangle="89.49152542372882" data-strokewidth={2} data-value={55} fill="rgba(0,227,150,1)" fillOpacity={1} id="SvgjsPath2945" index={0} j={1} stroke="#ffffff" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={2} id="SvgjsG2946" rel={3} seriesname="Economics">
                                                  <path className="apexcharts-pie-area apexcharts-donut-slice-2" d="M 54.890937083791826 150.44172196624078 A 73.75609756097562 73.75609756097562 0 0 1 27.114075194591344 131.2967218701892 L 46.23664887648437 113.955369215623 A 47.94146341463416 47.94146341463416 0 0 0 64.29160910446468 126.3996192780565 L 54.890937083791826 150.44172196624078 z" data-angle="26.440677966101703" data-athorig="M 54.890937083791826 150.44172196624078 A 73.75609756097562 73.75609756097562 0 0 1 27.114075194591344 131.2967218701892 L 46.23664887648437 113.955369215623 A 47.94146341463416 47.94146341463416 0 0 0 64.29160910446468 126.3996192780565 L 54.890937083791826 150.44172196624078 z" data-startangle="201.35593220338984" data-strokewidth={2} data-value={13} fill="rgba(254,176,25,1)" fillOpacity={1} id="SvgjsPath2947" index={0} j={2} stroke="#ffffff" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={3} id="SvgjsG2948" rel={4} seriesname="History">
                                                  <path className="apexcharts-pie-area apexcharts-donut-slice-3" d="M 27.114075194591344 131.2967218701892 A 73.75609756097562 73.75609756097562 0 0 1 29.8284952212542 29.365658170262073 L 48.00102189381523 47.70017781067035 A 47.94146341463416 47.94146341463416 0 0 0 46.23664887648437 113.955369215623 L 27.114075194591344 131.2967218701892 z" data-angle="87.4576271186441" data-pathorig="M 27.114075194591344 131.2967218701892 A 73.75609756097562 73.75609756097562 0 0 1 29.8284952212542 29.365658170262073 L 48.00102189381523 47.70017781067035 A 47.94146341463416 47.94146341463416 0 0 0 46.23664887648437 113.955369215623 L 27.114075194591344 131.2967218701892 z" data-startangle="227.79661016949154" data-strokewidth={2} data-value={43} fill="rgba(255,69,96,1)" fillOpacity={1} id="SvgjsPath2949" index={0} j={3} stroke="#ffffff" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={4} id="SvgjsG2950" rel={5} seriesname="Music">
                                                  <path className="apexcharts-pie-area apexcharts-donut-slice-4" d="M 29.8284952212542 29.365658170262073 A 73.75609756097562 73.75609756097562 0 0 1 81.73712713260673 7.993903562393982 L 81.74163263619438 33.80853731555608 A 47.94146341463416 47.94146341463416 0 0 0 48.00102189381523 47.70017781067035 L 29.8284952212542 29.365658170262073 z" data-angle="44.745762711864415" data-pathorig="M 29.8284952212542 29.365658170262073 A 73.75609756097562 73.75609756097562 0 0 1 81.73712713260673 7.993903562393982 L 81.74163263619438 33.80853731555608 A 47.94146341463416 47.94146341463416 0 0 0 48.00102189381523 47.70017781067035 L 29.8284952212542 29.365658170262073 z" data-startangle="315.25423728813564" data-strokewidth={2} data-value={22} fill="rgba(119,93,208,1)" fillOpacity={1} id="SvgjsPath2951" index={0} j={4} stroke="#ffffff" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine2952" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="163.5" y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine2953" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="163.5" y1={0} y2={0} />
                                        </g>
                                        <g className="apexcharts-annotations" id="SvgjsG2935" />
                                      </svg>
                                      <div className="apexcharts-legend" />
                                      <div className="apexcharts-tooltip apexcharts-theme-dark">
                                        <div className="apexcharts-tooltip-series-group" style={{order: 1}}>
                                          <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(0, 143, 251)'}}>
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
                                        <div className="apexcharts-tooltip-series-group" style={{order: 2}}>
                                          <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(0, 227, 150)'}}>
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
                                        <div className="apexcharts-tooltip-series-group" style={{order: 3}}>
                                          <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(254, 176, 25)'}}>
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
                                        <div className="apexcharts-tooltip-series-group" style={{order: 4}}>
                                          <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(255, 69, 96)'}}>
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
                                        <div className="apexcharts-tooltip-series-group" style={{order: 5}}>
                                          <span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(119, 93, 208)'}}>
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
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                              <div _ngcontent-oko-c143 className="table-responsive m-t-15">
                                <table _ngcontent-oko-c143 className="table align-items-center">
                                  <tbody _ngcontent-oko-c143>
                                    <tr _ngcontent-oko-c143>
                                      <td _ngcontent-oko-c143>
                                        <i _ngcontent-oko-c143 className="fa fa-circle col-cyan msr-2">
                                        </i>
                                        India
                                      </td>
                                      <td _ngcontent-oko-c143>23</td>
                                      <td _ngcontent-oko-c143 className="col-green">
                                        +32%
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c143>
                                      <td _ngcontent-oko-c143>
                                        <i _ngcontent-oko-c143 className="fa fa-circle col-blue msr-2">
                                        </i>
                                        USA
                                      </td>
                                      <td _ngcontent-oko-c143>32</td>
                                      <td _ngcontent-oko-c143 className="col-green">
                                        +12%
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c143>
                                      <td _ngcontent-oko-c143>
                                        <i _ngcontent-oko-c143 className="fa fa-circle col-orange msr-2">
                                        </i>
                                        Shrilanka
                                      </td>
                                      <td _ngcontent-oko-c143>12</td>
                                      <td _ngcontent-oko-c143 className="col-orange">
                                        -12%
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c143>
                                      <td _ngcontent-oko-c143>
                                        <i _ngcontent-oko-c143 className="fa fa-circle col-green msr-2">
                                        </i>
                                        Australia
                                      </td>
                                      <td _ngcontent-oko-c143>32</td>
                                      <td _ngcontent-oko-c143 className="col-green">
                                        +3%
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c143 className="row clearfix">
                        <div _ngcontent-oko-c143 className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                          <div _ngcontent-oko-c143 className="card">
                            <div _ngcontent-oko-c143 className="header">
                              <h2 _ngcontent-oko-c143>Notice Board</h2>
                              <button _ngcontent-oko-c143 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger header-dropdown mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-oko-c143 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  more_vert
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator"> </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target"> </span>
                              </button>
                              {/* */}
                              <mat-menu _ngcontent-oko-c143 className="ng-tns-c105-9 ng-star-inserted">
                                {/* */}
                              </mat-menu>
                            </div>
                            <div _ngcontent-oko-c143 className="body">
                              <ng-scrollbar _ngcontent-oko-c143 _nghost-oko-c129 className="ng-scrollbar" style={{height: '380px'}} visibility="hover">
                                <div _ngcontent-oko-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="true" pointereventsmethod="viewport" position="native" track="vertical" verticalused="true" visibility="hover">
                                  <div _ngcontent-oko-c129 className="ng-scroll-viewport-wrapper">
                                    <div _ngcontent-oko-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{nativeScrollbarSize: '0px'}}>
                                      <div _ngcontent-oko-c129 className="ng-scroll-content">
                                        <div _ngcontent-oko-c143 className="recent-comment">
                                          <div _ngcontent-oko-c143 className="notice-board">
                                            <div _ngcontent-oko-c143 className="table-img">
                                              <img _ngcontent-oko-c143 alt="..." className="notice-object" src="../../assets/images/user/user6.jpg" />
                                            </div>
                                            <div _ngcontent-oko-c143 className="notice-body">
                                              <h6 _ngcontent-oko-c143 className="notice-heading col-green">
                                                Airi Satou
                                              </h6>
                                              <p _ngcontent-oko-c143>
                                                Lorem ipsum dolor sit amet, id quo
                                                eruditi eloquentiam.
                                              </p>
                                              <small _ngcontent-oko-c143 className="text-muted">
                                                7 hours ago
                                              </small>
                                            </div>
                                          </div>
                                          <div _ngcontent-oko-c143 className="notice-board">
                                            <div _ngcontent-oko-c143 className="table-img">
                                              <img _ngcontent-oko-c143 alt="..." className="notice-object" src="../../assets/images/user/user4.jpg" />
                                            </div>
                                            <div _ngcontent-oko-c143 className="notice-body">
                                              <h6 _ngcontent-oko-c143 className="notice-heading color-primary col-indigo">
                                                Sarah Smith
                                              </h6>
                                              <p _ngcontent-oko-c143>
                                                Lorem ipsum dolor sit amet, id quo
                                                eruditi eloquentiam.
                                              </p>
                                              <p _ngcontent-oko-c143 className="comment-date">
                                                1 hour ago
                                              </p>
                                            </div>
                                          </div>
                                          <div _ngcontent-oko-c143 className="notice-board">
                                            <div _ngcontent-oko-c143 className="table-img">
                                              <img _ngcontent-oko-c143 alt="..." className="notice-object" src="../../assets/images/user/user3.jpg" />
                                            </div>
                                            <div _ngcontent-oko-c143 className="notice-body">
                                              <h6 _ngcontent-oko-c143 className="notice-heading color-danger col-cyan">
                                                Cara Stevens
                                              </h6>
                                              <p _ngcontent-oko-c143>
                                                Lorem ipsum dolor sit amet, id quo
                                                eruditi eloquentiam.
                                              </p>
                                              <div _ngcontent-oko-c143 className="comment-date">
                                                Yesterday
                                              </div>
                                            </div>
                                          </div>
                                          <div _ngcontent-oko-c143 className="notice-board no-border">
                                            <div _ngcontent-oko-c143 className="table-img">
                                              <img _ngcontent-oko-c143 alt="..." className="notice-object" src="../../assets/images/user/user7.jpg" />
                                            </div>
                                            <div _ngcontent-oko-c143 className="notice-body">
                                              <h6 _ngcontent-oko-c143 className="notice-heading color-info col-orange">
                                                Ashton Cox
                                              </h6>
                                              <p _ngcontent-oko-c143>
                                                Lorem ipsum dolor sit amet, id quo
                                                eruditi eloquentiam.
                                              </p>
                                              <div _ngcontent-oko-c143 className="comment-date">
                                                Yesterday
                                              </div>
                                            </div>
                                          </div>
                                          <div _ngcontent-oko-c143 className="notice-board">
                                            <div _ngcontent-oko-c143 className="table-img">
                                              <img _ngcontent-oko-c143 alt="..." className="notice-object" src="../../assets/images/user/user9.jpg" />
                                            </div>
                                            <div _ngcontent-oko-c143 className="notice-body">
                                              <h6 _ngcontent-oko-c143 className="notice-heading color-primary col-red">
                                                Mark Hay
                                              </h6>
                                              <p _ngcontent-oko-c143>
                                                Lorem ipsum dolor sit amet, id quo
                                                eruditi eloquentiam.
                                              </p>
                                              <p _ngcontent-oko-c143 className="comment-date">
                                                1 hour ago
                                              </p>
                                            </div>
                                          </div>
                                          <div _ngcontent-oko-c143 className="notice-board">
                                            <div _ngcontent-oko-c143 className="table-img">
                                              <img _ngcontent-oko-c143 alt="..." className="notice-object" src="../../assets/images/user/user8.jpg" />
                                            </div>
                                            <div _ngcontent-oko-c143 className="notice-body">
                                              <h6 _ngcontent-oko-c143 className="notice-heading color-primary col-green">
                                                Jay Pandya
                                              </h6>
                                              <p _ngcontent-oko-c143>
                                                Lorem ipsum dolor sit amet, id quo
                                                eruditi eloquentiam.
                                              </p>
                                              <p _ngcontent-oko-c143 className="comment-date">
                                                3 hour ago
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* */}
                                  <scrollbar-y _ngcontent-oko-c129 _nghost-oko-c127 className="scrollbar-control ng-star-inserted" fit="false" scrollable="true">
                                    <div _ngcontent-oko-c127 className="ng-scrollbar-track" scrollbartracky>
                                      <div _ngcontent-oko-c127 className="ng-scrollbar-thumb" scrollbarthumby style={{height: '270px', transform: 'translate3d(0px, 0px, 0px)'}} />
                                    </div>
                                  </scrollbar-y>
                                  {/* */}
                                  {/* */}
                                  {/* */}
                                </div>
                              </ng-scrollbar>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c143 className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c143 className="card">
                            <div _ngcontent-oko-c143 className="header">
                              <h2 _ngcontent-oko-c143>Project Status</h2>
                            </div>
                            <ng-scrollbar _ngcontent-oko-c143 _nghost-oko-c129 className="ng-scrollbar" style={{height: '410px'}} visibility="hover">
                              <div _ngcontent-oko-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="true" pointereventsmethod="viewport" position="native" track="vertical" verticalused="true" visibility="hover">
                                <div _ngcontent-oko-c129 className="ng-scroll-viewport-wrapper">
                                  <div _ngcontent-oko-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{nativeScrollbarSize: '0px'}}>
                                    <div _ngcontent-oko-c129 className="ng-scroll-content">
                                      <div _ngcontent-oko-c143 className="tableBody">
                                        <div _ngcontent-oko-c143 className="responsive_table">
                                          <table _ngcontent-oko-c143 className="table table-hover">
                                            <thead _ngcontent-oko-c143>
                                              <tr _ngcontent-oko-c143>
                                                <th _ngcontent-oko-c143>
                                                  Project Name
                                                </th>
                                                <th _ngcontent-oko-c143>
                                                  Progress
                                                </th>
                                                <th _ngcontent-oko-c143>
                                                  Duration
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody _ngcontent-oko-c143>
                                              <tr _ngcontent-oko-c143>
                                                <td _ngcontent-oko-c143>
                                                  Project A
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  30%
                                                  <mat-progress-bar _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={30} className="mat-mdc-progress-bar mdc-linear-progress progress-round mat-warn mdc-linear-progress--animation-ready" color="warn" mode="determinate" role="progressbar" tabIndex={-1} value={30}>
                                                    <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                      <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                                      <div className="mdc-linear-progress__buffer-dots" />
                                                    </div>
                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.3)'}}>
                                                      <span className="mdc-linear-progress__bar-inner">
                                                      </span>
                                                    </div>
                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                      <span className="mdc-linear-progress__bar-inner">
                                                      </span>
                                                    </div>
                                                  </mat-progress-bar>
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  2 Months
                                                </td>
                                              </tr>
                                              <tr _ngcontent-oko-c143>
                                                <td _ngcontent-oko-c143>
                                                  Project B
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  55%
                                                  <mat-progress-bar _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={55} className="mat-mdc-progress-bar mdc-linear-progress progress-round mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={55}>
                                                    <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                      <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                                      <div className="mdc-linear-progress__buffer-dots" />
                                                    </div>
                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.55)'}}>
                                                      <span className="mdc-linear-progress__bar-inner">
                                                      </span>
                                                    </div>
                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                      <span className="mdc-linear-progress__bar-inner">
                                                      </span>
                                                    </div>
                                                  </mat-progress-bar>
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  3 Months
                                                </td>
                                              </tr>
                                              <tr _ngcontent-oko-c143>
                                                <td _ngcontent-oko-c143>
                                                  Project C
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  67%
                                                  <mat-progress-bar _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={67} className="mat-mdc-progress-bar mdc-linear-progress progress-round orange-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={67}>
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
                                                <td _ngcontent-oko-c143>
                                                  1 Months
                                                </td>
                                              </tr>
                                              <tr _ngcontent-oko-c143>
                                                <td _ngcontent-oko-c143>
                                                  Project D
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  70%
                                                  <mat-progress-bar _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={70} className="mat-mdc-progress-bar mdc-linear-progress progress-round green-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={70}>
                                                    <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                      <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                                      <div className="mdc-linear-progress__buffer-dots" />
                                                    </div>
                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.7)'}}>
                                                      <span className="mdc-linear-progress__bar-inner">
                                                      </span>
                                                    </div>
                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                      <span className="mdc-linear-progress__bar-inner">
                                                      </span>
                                                    </div>
                                                  </mat-progress-bar>
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  2 Months
                                                </td>
                                              </tr>
                                              <tr _ngcontent-oko-c143>
                                                <td _ngcontent-oko-c143>
                                                  Project E
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  24%
                                                  <mat-progress-bar _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={24} className="mat-mdc-progress-bar mdc-linear-progress progress-round red-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={24}>
                                                    <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                      <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                                      <div className="mdc-linear-progress__buffer-dots" />
                                                    </div>
                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.24)'}}>
                                                      <span className="mdc-linear-progress__bar-inner">
                                                      </span>
                                                    </div>
                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                      <span className="mdc-linear-progress__bar-inner">
                                                      </span>
                                                    </div>
                                                  </mat-progress-bar>
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  3 Months
                                                </td>
                                              </tr>
                                              <tr _ngcontent-oko-c143>
                                                <td _ngcontent-oko-c143>
                                                  Project F
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  77%
                                                  <mat-progress-bar _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={77} className="mat-mdc-progress-bar mdc-linear-progress progress-round green-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={77}>
                                                    <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                      <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                                      <div className="mdc-linear-progress__buffer-dots" />
                                                    </div>
                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.77)'}}>
                                                      <span className="mdc-linear-progress__bar-inner">
                                                      </span>
                                                    </div>
                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                      <span className="mdc-linear-progress__bar-inner">
                                                      </span>
                                                    </div>
                                                  </mat-progress-bar>
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  4 Months
                                                </td>
                                              </tr>
                                              <tr _ngcontent-oko-c143>
                                                <td _ngcontent-oko-c143>
                                                  Project G
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  41%
                                                  <mat-progress-bar _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={41} className="mat-mdc-progress-bar mdc-linear-progress progress-round cyan-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={41}>
                                                    <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                      <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                                      <div className="mdc-linear-progress__buffer-dots" />
                                                    </div>
                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.41)'}}>
                                                      <span className="mdc-linear-progress__bar-inner">
                                                      </span>
                                                    </div>
                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                      <span className="mdc-linear-progress__bar-inner">
                                                      </span>
                                                    </div>
                                                  </mat-progress-bar>
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  2 Months
                                                </td>
                                              </tr>
                                              <tr _ngcontent-oko-c143>
                                                <td _ngcontent-oko-c143>
                                                  Project H
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  41%
                                                  <mat-progress-bar _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={41} className="mat-mdc-progress-bar mdc-linear-progress progress-round orange-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={41}>
                                                    <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                      <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                                      <div className="mdc-linear-progress__buffer-dots" />
                                                    </div>
                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.41)'}}>
                                                      <span className="mdc-linear-progress__bar-inner">
                                                      </span>
                                                    </div>
                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                      <span className="mdc-linear-progress__bar-inner">
                                                      </span>
                                                    </div>
                                                  </mat-progress-bar>
                                                </td>
                                                <td _ngcontent-oko-c143>
                                                  2 Months
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* */}
                                <scrollbar-y _ngcontent-oko-c129 _nghost-oko-c127 className="scrollbar-control ng-star-inserted" fit="false" scrollable="true">
                                  <div _ngcontent-oko-c127 className="ng-scrollbar-track" scrollbartracky>
                                    <div _ngcontent-oko-c127 className="ng-scrollbar-thumb" scrollbarthumby style={{height: '371px', transform: 'translate3d(0px, 0px, 0px)'}} />
                                  </div>
                                </scrollbar-y>
                                {/* */}
                                {/* */}
                                {/* */}
                              </div>
                            </ng-scrollbar>
                          </div>
                        </div>
                        <div _ngcontent-oko-c143 className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                          <div _ngcontent-oko-c143 className="card">
                            <div _ngcontent-oko-c143 className="header">
                              <h2 _ngcontent-oko-c143>Earning Source</h2>
                            </div>
                            <div _ngcontent-oko-c143 className="body">
                              <div _ngcontent-oko-c143 className="totalEarning">
                                <h2 _ngcontent-oko-c143>$90,808</h2>
                              </div>
                              <div _ngcontent-oko-c143 className="tab-pane body" id="skills">
                                <ul _ngcontent-oko-c143 className="list-unstyled">
                                  <li _ngcontent-oko-c143>
                                    <div _ngcontent-oko-c143 className="mb-2">
                                      <span _ngcontent-oko-c143 className="progress-label">
                                        envato.com
                                      </span>
                                      <span _ngcontent-oko-c143 className="float-end progress-percent label label-info m-b-5">
                                        17%
                                      </span>
                                    </div>
                                    <div _ngcontent-oko-c143 className="progress skill-progress m-b-20 w-100">
                                      <div _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={45} className="progress-bar l-bg-green width-per-45" role="progressbar" />
                                    </div>
                                  </li>
                                  <li _ngcontent-oko-c143>
                                    <div _ngcontent-oko-c143 className="mb-2">
                                      <span _ngcontent-oko-c143 className="float-start progress-label">
                                        google.com
                                      </span>
                                      <span _ngcontent-oko-c143 className="float-end progress-percent label label-danger m-b-5">
                                        27%
                                      </span>
                                    </div>
                                    <div _ngcontent-oko-c143 className="progress skill-progress m-b-20 w-100">
                                      <div _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={27} className="progress-bar l-bg-purple width-per-27" role="progressbar" />
                                    </div>
                                  </li>
                                  <li _ngcontent-oko-c143>
                                    <div _ngcontent-oko-c143 className="mb-2">
                                      <span _ngcontent-oko-c143 className="float-start progress-label">
                                        yahoo.com
                                      </span>
                                      <span _ngcontent-oko-c143 className="float-end progress-percent label label-primary m-b-5">
                                        25%
                                      </span>
                                    </div>
                                    <div _ngcontent-oko-c143 className="progress skill-progress m-b-20 w-100">
                                      <div _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress-bar l-bg-orange width-per-25" role="progressbar" />
                                    </div>
                                  </li>
                                  <li _ngcontent-oko-c143>
                                    <div _ngcontent-oko-c143 className="mb-2">
                                      <span _ngcontent-oko-c143 className="float-start progress-label">
                                        store
                                      </span>
                                      <span _ngcontent-oko-c143 className="float-end progress-percent label label-success m-b-5">
                                        18%
                                      </span>
                                    </div>
                                    <div _ngcontent-oko-c143 className="progress skill-progress m-b-20 w-100">
                                      <div _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={18} className="progress-bar l-bg-cyan width-per-18" role="progressbar" />
                                    </div>
                                  </li>
                                  <li _ngcontent-oko-c143>
                                    <div _ngcontent-oko-c143 className="mb-2">
                                      <span _ngcontent-oko-c143 className="float-start progress-label">
                                        Others
                                      </span>
                                      <span _ngcontent-oko-c143 className="float-end progress-percent label label-warning m-b-5">
                                        13%
                                      </span>
                                    </div>
                                    <div _ngcontent-oko-c143 className="progress skill-progress m-b-20 w-100">
                                      <div _ngcontent-oko-c143 aria-valuemax={100} aria-valuemin={0} aria-valuenow={13} className="progress-bar l-bg-red width-per-13" role="progressbar" />
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c143 className="row clearfix">
                        <div _ngcontent-oko-c143 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div _ngcontent-oko-c143 className="card">
                            <div _ngcontent-oko-c143 className="header">
                              <h2 _ngcontent-oko-c143>Leave Requests</h2>
                              <button _ngcontent-oko-c143 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger header-dropdown mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-oko-c143 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  more_vert
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator"> </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target"> </span>
                              </button>
                              {/* */}
                              <mat-menu _ngcontent-oko-c143 className="ng-tns-c105-10 ng-star-inserted">
                                {/* */}
                              </mat-menu>
                            </div>
                            <div _ngcontent-oko-c143 className="tableBody">
                              <div _ngcontent-oko-c143 className="responsive_table">
                                <table _ngcontent-oko-c143 className="table display product-overview mb-30" id="support_table">
                                  <thead _ngcontent-oko-c143>
                                    <tr _ngcontent-oko-c143>
                                      <th _ngcontent-oko-c143>ID</th>
                                      <th _ngcontent-oko-c143>Employee Name</th>
                                      <th _ngcontent-oko-c143>Leave Type</th>
                                      <th _ngcontent-oko-c143>Leave From</th>
                                      <th _ngcontent-oko-c143>Leave To</th>
                                      <th _ngcontent-oko-c143>Days</th>
                                      <th _ngcontent-oko-c143>Status</th>
                                      <th _ngcontent-oko-c143>Details</th>
                                    </tr>
                                  </thead>
                                  <tbody _ngcontent-oko-c143>
                                    <tr _ngcontent-oko-c143>
                                      <td _ngcontent-oko-c143>ID7865</td>
                                      <td _ngcontent-oko-c143>
                                        <img _ngcontent-oko-c143 alt="" className="user_img" src="../../assets/images/user/user1.jpg" />
                                        Jens Brincker
                                      </td>
                                      <td _ngcontent-oko-c143>Sick Leave</td>
                                      <td _ngcontent-oko-c143>22/05/2021</td>
                                      <td _ngcontent-oko-c143>27/05/2021</td>
                                      <td _ngcontent-oko-c143>6</td>
                                      <td _ngcontent-oko-c143>
                                        <div _ngcontent-oko-c143 className="badge badge-solid-green">
                                          Approve
                                        </div>
                                      </td>
                                      <td _ngcontent-oko-c143>
                                        <button _ngcontent-oko-c143 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                          </span>
                                          <span className="mdc-button__label">
                                            Details
                                          </span>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c143>
                                      <td _ngcontent-oko-c143>ID9357</td>
                                      <td _ngcontent-oko-c143>
                                        <img _ngcontent-oko-c143 alt="" className="user_img" src="../../assets/images/user/user2.jpg" />
                                        Mark Harry
                                      </td>
                                      <td _ngcontent-oko-c143>Casual Leave</td>
                                      <td _ngcontent-oko-c143>12/06/2021</td>
                                      <td _ngcontent-oko-c143>15/06/2021</td>
                                      <td _ngcontent-oko-c143>4</td>
                                      <td _ngcontent-oko-c143>
                                        <div _ngcontent-oko-c143 className="badge badge-solid-orange">
                                          Reject
                                        </div>
                                      </td>
                                      <td _ngcontent-oko-c143>
                                        <button _ngcontent-oko-c143 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                          </span>
                                          <span className="mdc-button__label">
                                            Details
                                          </span>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c143>
                                      <td _ngcontent-oko-c143>ID3987</td>
                                      <td _ngcontent-oko-c143>
                                        <img _ngcontent-oko-c143 alt="" className="user_img" src="../../assets/images/user/user3.jpg" />
                                        Anthony Davie
                                      </td>
                                      <td _ngcontent-oko-c143>Marriage Leave</td>
                                      <td _ngcontent-oko-c143>02/02/2021</td>
                                      <td _ngcontent-oko-c143>12/02/2021</td>
                                      <td _ngcontent-oko-c143>6</td>
                                      <td _ngcontent-oko-c143>
                                        <div _ngcontent-oko-c143 className="badge badge-solid-blue">
                                          Pending
                                        </div>
                                      </td>
                                      <td _ngcontent-oko-c143>
                                        <button _ngcontent-oko-c143 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                          </span>
                                          <span className="mdc-button__label">
                                            Details
                                          </span>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c143>
                                      <td _ngcontent-oko-c143>ID2483</td>
                                      <td _ngcontent-oko-c143>
                                        <img _ngcontent-oko-c143 alt="" className="user_img" src="../../assets/images/user/user4.jpg" />
                                        David Perry
                                      </td>
                                      <td _ngcontent-oko-c143>Maternity leave</td>
                                      <td _ngcontent-oko-c143>10/01/2021</td>
                                      <td _ngcontent-oko-c143>10/03/2021</td>
                                      <td _ngcontent-oko-c143>90</td>
                                      <td _ngcontent-oko-c143>
                                        <div _ngcontent-oko-c143 className="badge badge-solid-green">
                                          Approve
                                        </div>
                                      </td>
                                      <td _ngcontent-oko-c143>
                                        <button _ngcontent-oko-c143 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                          </span>
                                          <span className="mdc-button__label">
                                            Details
                                          </span>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c143>
                                      <td _ngcontent-oko-c143>ID2986</td>
                                      <td _ngcontent-oko-c143>
                                        <img _ngcontent-oko-c143 alt="" className="user_img" src="../../assets/images/user/user5.jpg" />
                                        John Doe
                                      </td>
                                      <td _ngcontent-oko-c143>Unpaid Leave</td>
                                      <td _ngcontent-oko-c143>20/05/2021</td>
                                      <td _ngcontent-oko-c143>22/05/2021</td>
                                      <td _ngcontent-oko-c143>3</td>
                                      <td _ngcontent-oko-c143>
                                        <div _ngcontent-oko-c143 className="badge badge-solid-orange">
                                          Reject
                                        </div>
                                      </td>
                                      <td _ngcontent-oko-c143>
                                        <button _ngcontent-oko-c143 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                          </span>
                                          <span className="mdc-button__label">
                                            Details
                                          </span>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c143>
                                      <td _ngcontent-oko-c143>ID1267</td>
                                      <td _ngcontent-oko-c143>
                                        <img _ngcontent-oko-c143 alt="" className="user_img" src="../../assets/images/user/user6.jpg" />
                                        Sarah Smith
                                      </td>
                                      <td _ngcontent-oko-c143>Sick Leave</td>
                                      <td _ngcontent-oko-c143>10/07/2021</td>
                                      <td _ngcontent-oko-c143>11/07/2021</td>
                                      <td _ngcontent-oko-c143>2</td>
                                      <td _ngcontent-oko-c143>
                                        <div _ngcontent-oko-c143 className="badge badge-solid-green">
                                          Approve
                                        </div>
                                      </td>
                                      <td _ngcontent-oko-c143>
                                        <button _ngcontent-oko-c143 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                          </span>
                                          <span className="mdc-button__label">
                                            Details
                                          </span>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c143>
                                      <td _ngcontent-oko-c143>ID3398</td>
                                      <td _ngcontent-oko-c143>
                                        <img _ngcontent-oko-c143 alt="" className="user_img" src="../../assets/images/user/user7.jpg" />
                                        Cara Stevens
                                      </td>
                                      <td _ngcontent-oko-c143>Casual leave</td>
                                      <td _ngcontent-oko-c143>11/04/2021</td>
                                      <td _ngcontent-oko-c143>13/04/2021</td>
                                      <td _ngcontent-oko-c143>3</td>
                                      <td _ngcontent-oko-c143>
                                        <div _ngcontent-oko-c143 className="badge badge-solid-blue">
                                          Pending
                                        </div>
                                      </td>
                                      <td _ngcontent-oko-c143>
                                        <button _ngcontent-oko-c143 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                          </span>
                                          <span className="mdc-button__label">
                                            Details
                                          </span>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c143>
                                      <td _ngcontent-oko-c143>ID9965</td>
                                      <td _ngcontent-oko-c143>
                                        <img _ngcontent-oko-c143 alt="" className="user_img" src="../../assets/images/user/user8.jpg" />
                                        Ashton Cox
                                      </td>
                                      <td _ngcontent-oko-c143>Sick Leave</td>
                                      <td _ngcontent-oko-c143>14/05/2021</td>
                                      <td _ngcontent-oko-c143>15/05/2021</td>
                                      <td _ngcontent-oko-c143>2</td>
                                      <td _ngcontent-oko-c143>
                                        <div _ngcontent-oko-c143 className="badge badge-solid-green">
                                          Approve
                                        </div>
                                      </td>
                                      <td _ngcontent-oko-c143>
                                        <button _ngcontent-oko-c143 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                          </span>
                                          <span className="mdc-button__label">
                                            Details
                                          </span>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
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
                </app-dashboard2>
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
          <svg height={0} id="SvgjsSvg1851" style={{overflow: 'hidden', top: '-100%', left: '-100%', position: 'absolute', opacity: 0}} version="1.1" width={2} xmlns="http://www.w3.org/2000/svg" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs id="SvgjsDefs1852" />
            <polyline id="SvgjsPolyline1853" points="0,0" />
            <path d="M-1 270.99999923706054L-1 270.99999923706054C-1 270.99999923706054 63.107638676961265 270.99999923706054 63.107638676961265 270.99999923706054C63.107638676961265 270.99999923706054 126.21527735392253 270.99999923706054 126.21527735392253 270.99999923706054C126.21527735392253 270.99999923706054 189.3229160308838 270.99999923706054 189.3229160308838 270.99999923706054C189.3229160308838 270.99999923706054 252.43055470784506 270.99999923706054 252.43055470784506 270.99999923706054C252.43055470784506 270.99999923706054 315.53819338480633 270.99999923706054 315.53819338480633 270.99999923706054C315.53819338480633 270.99999923706054 378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054C378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054 " id="SvgjsPath1854" />
          </svg>
        </div>
      );
    }
  