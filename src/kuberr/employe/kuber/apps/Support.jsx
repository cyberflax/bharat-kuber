import React from "react"
import Drop from "../../../../Drop";

export default function Support (){
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
                        <img _ngcontent-oko-c131 alt="" src="../assets/images/logo.png" />
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
                              <img _ngcontent-oko-c131 className="ng-star-inserted" height={16} src="../assets/images/flags/us.jpg" />
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
                                <img _ngcontent-oko-c131 alt="User" className="user_img" height={32} src="../assets/images/user/admin.jpg" width={32} />
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
                                        <img _ngcontent-oko-c133 src="../assets/images/light.png" />
                                      </label>
                                      <div _ngcontent-oko-c133 className="mt-1 text-md text-center">
                                        Light
                                      </div>
                                    </div>
                                    <div _ngcontent-oko-c133 className="flex flex-col mt-3">
                                      <label _ngcontent-oko-c133>
                                        <input _ngcontent-oko-c133 name="value" type="radio" defaultValue="dark" />
                                        <img _ngcontent-oko-c133 src="../assets/images/dark.png" />
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
                <app-support _nghost-oko-c370 className="ng-star-inserted">
                  <section _ngcontent-oko-c370 className="content">
                    <div _ngcontent-oko-c370 className="content-block">
                      <div _ngcontent-oko-c370 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c370 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Support
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
                                    Support
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c370 className="row">
                        <div _ngcontent-oko-c370 className="col-lg-12 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c370 className="card">
                            <div _ngcontent-oko-c370 className="header">
                              <h2 _ngcontent-oko-c370>
                                <strong _ngcontent-oko-c370> Support </strong>
                                Tickets
                              </h2>
                            </div>
                            <div _ngcontent-oko-c370 className="body">
                              <div _ngcontent-oko-c370 className="row">
                                <div _ngcontent-oko-c370 className="col-lg-3 col-sm-6">
                                  <div _ngcontent-oko-c370 className="info-box7 bg-c-blue order-info-box7">
                                    <div _ngcontent-oko-c370 className="info-box7-block">
                                      <h4 _ngcontent-oko-c370 className="m-b-20">
                                        Total Tickets
                                      </h4>
                                      <h2 _ngcontent-oko-c370 className="text-end">
                                        <i _ngcontent-oko-c370 className="fas fa-ticket-alt float-start">
                                        </i>
                                        <span _ngcontent-oko-c370> 1,276 </span>
                                      </h2>
                                      <p _ngcontent-oko-c370 className="m-b-0">
                                        18% Higher Then Last Month
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c370 className="col-lg-3 col-sm-6">
                                  <div _ngcontent-oko-c370 className="info-box7 bg-c-green order-info-box7">
                                    <div _ngcontent-oko-c370 className="info-box7-block">
                                      <h4 _ngcontent-oko-c370 className="m-b-20">
                                        Reply
                                      </h4>
                                      <h2 _ngcontent-oko-c370 className="text-end">
                                        <i _ngcontent-oko-c370 className="fas fa-reply float-start">
                                        </i>
                                        <span _ngcontent-oko-c370> 865 </span>
                                      </h2>
                                      <p _ngcontent-oko-c370 className="m-b-0">
                                        21% Higher Then Last Month
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c370 className="col-lg-3 col-sm-6">
                                  <div _ngcontent-oko-c370 className="info-box7 bg-c-yellow order-info-box7">
                                    <div _ngcontent-oko-c370 className="info-box7-block">
                                      <h4 _ngcontent-oko-c370 className="m-b-20">
                                        Resolve
                                      </h4>
                                      <h2 _ngcontent-oko-c370 className="text-end">
                                        <i _ngcontent-oko-c370 className="fas fa-clipboard-check float-start">
                                        </i>
                                        <span _ngcontent-oko-c370> 457 </span>
                                      </h2>
                                      <p _ngcontent-oko-c370 className="m-b-0">
                                        37% Higher Then Last Month
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c370 className="col-lg-3 col-sm-6">
                                  <div _ngcontent-oko-c370 className="info-box7 bg-c-pink order-info-box7">
                                    <div _ngcontent-oko-c370 className="info-box7-block">
                                      <h4 _ngcontent-oko-c370 className="m-b-20">
                                        Pending
                                      </h4>
                                      <h2 _ngcontent-oko-c370 className="text-end">
                                        <i _ngcontent-oko-c370 className="fas fa-clipboard-list float-start">
                                        </i>
                                        <span _ngcontent-oko-c370> 239 </span>
                                      </h2>
                                      <p _ngcontent-oko-c370 className="m-b-0">
                                        10% Higher Then Last Month
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div _ngcontent-oko-c370 className="responsive_table">
                                <table _ngcontent-oko-c370 className="mat-mdc-table mdc-data-table__table cdk-table w-100" mat-table role="table">
                                  <thead role="rowgroup">
                                    <tr _ngcontent-oko-c370 className="mat-mdc-header-row mdc-data-table__header-row cdk-header-row ng-star-inserted" mat-header-row role="row">
                                      <th _ngcontent-oko-c370 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-checked mat-column-checked ng-star-inserted" mat-header-cell role="columnheader" width="10%">
                                        #
                                      </th>
                                      <th _ngcontent-oko-c370 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-imageUrl mat-column-imageUrl ng-star-inserted" mat-header-cell role="columnheader" width="8%">
                                        User
                                      </th>
                                      <th _ngcontent-oko-c370 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-name mat-column-name ng-star-inserted" mat-header-cell role="columnheader" width="10%">
                                        Opened By
                                      </th>
                                      <th _ngcontent-oko-c370 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-email mat-column-email ng-star-inserted" mat-header-cell role="columnheader">
                                        Email
                                      </th>
                                      <th _ngcontent-oko-c370 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-subject mat-column-subject ng-star-inserted" mat-header-cell role="columnheader">
                                        Subject
                                      </th>
                                      <th _ngcontent-oko-c370 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-status mat-column-status ng-star-inserted" mat-header-cell role="columnheader">
                                        Status
                                      </th>
                                      <th _ngcontent-oko-c370 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-assignTo mat-column-assignTo ng-star-inserted" mat-header-cell role="columnheader" width="10%">
                                        Assign To
                                      </th>
                                      <th _ngcontent-oko-c370 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-date mat-column-date ng-star-inserted" mat-header-cell role="columnheader" width="10%">
                                        Date
                                      </th>
                                      <th _ngcontent-oko-c370 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-action mat-column-action ng-star-inserted" mat-header-cell role="columnheader" width="15%">
                                        Actions
                                      </th>
                                      {/* */}
                                    </tr>
                                    {/* */}
                                  </thead>
                                  <tbody className="mdc-data-table__content" role="rowgroup">
                                    <tr _ngcontent-oko-c370 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" mat-row role="row">
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-checked mat-column-checked ng-star-inserted" mat-cell role="cell">
                                        <mat-checkbox _ngcontent-oko-c370 className="mat-mdc-checkbox mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-167">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-167-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-167-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img cdk-column-imageUrl mat-column-imageUrl ng-star-inserted" mat-cell role="cell">
                                        <img _ngcontent-oko-c370 src="../assets/images/user/user1.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" mat-cell role="cell">
                                        Tim Hank
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" mat-cell role="cell">
                                        test@example.com
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-subject mat-column-subject ng-star-inserted" mat-cell role="cell">
                                        Image not Proper
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                        closed
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-assignTo mat-column-assignTo ng-star-inserted" mat-cell role="cell">
                                        John Deo
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" mat-cell role="cell">
                                        27/05/2016
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-action mat-column-action ng-star-inserted" mat-cell role="cell">
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-123" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
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
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-124" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
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
                                      {/* */}
                                    </tr>
                                    <tr _ngcontent-oko-c370 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" mat-row role="row">
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-checked mat-column-checked ng-star-inserted" mat-cell role="cell">
                                        <mat-checkbox _ngcontent-oko-c370 className="mat-mdc-checkbox mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-168">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-168-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-168-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img cdk-column-imageUrl mat-column-imageUrl ng-star-inserted" mat-cell role="cell">
                                        <img _ngcontent-oko-c370 src="../assets/images/user/user2.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" mat-cell role="cell">
                                        Tim Hank
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" mat-cell role="cell">
                                        test@example.com
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-subject mat-column-subject ng-star-inserted" mat-cell role="cell">
                                        Image not Proper
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                        closed
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-assignTo mat-column-assignTo ng-star-inserted" mat-cell role="cell">
                                        John Deo
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" mat-cell role="cell">
                                        27/05/2016
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-action mat-column-action ng-star-inserted" mat-cell role="cell">
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-123" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
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
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-124" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
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
                                      {/* */}
                                    </tr>
                                    <tr _ngcontent-oko-c370 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" mat-row role="row">
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-checked mat-column-checked ng-star-inserted" mat-cell role="cell">
                                        <mat-checkbox _ngcontent-oko-c370 className="mat-mdc-checkbox mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-169">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-169-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-169-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img cdk-column-imageUrl mat-column-imageUrl ng-star-inserted" mat-cell role="cell">
                                        <img _ngcontent-oko-c370 src="../assets/images/user/user3.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" mat-cell role="cell">
                                        Tim Hank
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" mat-cell role="cell">
                                        test@example.com
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-subject mat-column-subject ng-star-inserted" mat-cell role="cell">
                                        Image not Proper
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                        open
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-assignTo mat-column-assignTo ng-star-inserted" mat-cell role="cell">
                                        John Deo
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" mat-cell role="cell">
                                        27/05/2016
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-action mat-column-action ng-star-inserted" mat-cell role="cell">
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-123" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
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
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-124" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
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
                                      {/* */}
                                    </tr>
                                    <tr _ngcontent-oko-c370 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" mat-row role="row">
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-checked mat-column-checked ng-star-inserted" mat-cell role="cell">
                                        <mat-checkbox _ngcontent-oko-c370 className="mat-mdc-checkbox mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-170">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-170-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-170-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img cdk-column-imageUrl mat-column-imageUrl ng-star-inserted" mat-cell role="cell">
                                        <img _ngcontent-oko-c370 src="../assets/images/user/user4.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" mat-cell role="cell">
                                        Tim Hank
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" mat-cell role="cell">
                                        test@example.com
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-subject mat-column-subject ng-star-inserted" mat-cell role="cell">
                                        Image not Proper
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                        closed
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-assignTo mat-column-assignTo ng-star-inserted" mat-cell role="cell">
                                        John Deo
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" mat-cell role="cell">
                                        27/05/2016
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-action mat-column-action ng-star-inserted" mat-cell role="cell">
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-123" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
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
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-124" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
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
                                      {/* */}
                                    </tr>
                                    <tr _ngcontent-oko-c370 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" mat-row role="row">
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-checked mat-column-checked ng-star-inserted" mat-cell role="cell">
                                        <mat-checkbox _ngcontent-oko-c370 className="mat-mdc-checkbox mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-171">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-171-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-171-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img cdk-column-imageUrl mat-column-imageUrl ng-star-inserted" mat-cell role="cell">
                                        <img _ngcontent-oko-c370 src="../assets/images/user/user5.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" mat-cell role="cell">
                                        Tim Hank
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" mat-cell role="cell">
                                        test@example.com
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-subject mat-column-subject ng-star-inserted" mat-cell role="cell">
                                        Image not Proper
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                        open
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-assignTo mat-column-assignTo ng-star-inserted" mat-cell role="cell">
                                        John Deo
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" mat-cell role="cell">
                                        27/05/2016
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-action mat-column-action ng-star-inserted" mat-cell role="cell">
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-123" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
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
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-124" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
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
                                      {/* */}
                                    </tr>
                                    <tr _ngcontent-oko-c370 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" mat-row role="row">
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-checked mat-column-checked ng-star-inserted" mat-cell role="cell">
                                        <mat-checkbox _ngcontent-oko-c370 className="mat-mdc-checkbox mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-172">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-172-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-172-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img cdk-column-imageUrl mat-column-imageUrl ng-star-inserted" mat-cell role="cell">
                                        <img _ngcontent-oko-c370 src="../assets/images/user/user6.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" mat-cell role="cell">
                                        Tim Hank
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" mat-cell role="cell">
                                        test@example.com
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-subject mat-column-subject ng-star-inserted" mat-cell role="cell">
                                        Image not Proper
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                        closed
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-assignTo mat-column-assignTo ng-star-inserted" mat-cell role="cell">
                                        John Deo
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" mat-cell role="cell">
                                        27/05/2016
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-action mat-column-action ng-star-inserted" mat-cell role="cell">
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-123" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
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
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-124" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
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
                                      {/* */}
                                    </tr>
                                    <tr _ngcontent-oko-c370 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" mat-row role="row">
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-checked mat-column-checked ng-star-inserted" mat-cell role="cell">
                                        <mat-checkbox _ngcontent-oko-c370 className="mat-mdc-checkbox mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-173">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-173-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-173-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img cdk-column-imageUrl mat-column-imageUrl ng-star-inserted" mat-cell role="cell">
                                        <img _ngcontent-oko-c370 src="../assets/images/user/user7.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" mat-cell role="cell">
                                        Tim Hank
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" mat-cell role="cell">
                                        test@example.com
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-subject mat-column-subject ng-star-inserted" mat-cell role="cell">
                                        Image not Proper
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                        open
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-assignTo mat-column-assignTo ng-star-inserted" mat-cell role="cell">
                                        John Deo
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" mat-cell role="cell">
                                        27/05/2016
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-action mat-column-action ng-star-inserted" mat-cell role="cell">
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-123" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
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
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-124" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
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
                                      {/* */}
                                    </tr>
                                    <tr _ngcontent-oko-c370 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" mat-row role="row">
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-checked mat-column-checked ng-star-inserted" mat-cell role="cell">
                                        <mat-checkbox _ngcontent-oko-c370 className="mat-mdc-checkbox mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-174">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-174-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-174-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img cdk-column-imageUrl mat-column-imageUrl ng-star-inserted" mat-cell role="cell">
                                        <img _ngcontent-oko-c370 src="../assets/images/user/user8.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" mat-cell role="cell">
                                        Tim Hank
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" mat-cell role="cell">
                                        test@example.com
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-subject mat-column-subject ng-star-inserted" mat-cell role="cell">
                                        Image not Proper
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                        pending
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-assignTo mat-column-assignTo ng-star-inserted" mat-cell role="cell">
                                        John Deo
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" mat-cell role="cell">
                                        27/05/2016
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-action mat-column-action ng-star-inserted" mat-cell role="cell">
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-123" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
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
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-124" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
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
                                      {/* */}
                                    </tr>
                                    <tr _ngcontent-oko-c370 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" mat-row role="row">
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-checked mat-column-checked ng-star-inserted" mat-cell role="cell">
                                        <mat-checkbox _ngcontent-oko-c370 className="mat-mdc-checkbox mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-175">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-175-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-175-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img cdk-column-imageUrl mat-column-imageUrl ng-star-inserted" mat-cell role="cell">
                                        <img _ngcontent-oko-c370 src="../assets/images/user/user9.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" mat-cell role="cell">
                                        Tim Hank
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" mat-cell role="cell">
                                        test@example.com
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-subject mat-column-subject ng-star-inserted" mat-cell role="cell">
                                        Image not Proper
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                        closed
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-assignTo mat-column-assignTo ng-star-inserted" mat-cell role="cell">
                                        John Deo
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" mat-cell role="cell">
                                        27/05/2016
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-action mat-column-action ng-star-inserted" mat-cell role="cell">
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-123" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
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
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-124" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
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
                                      {/* */}
                                    </tr>
                                    <tr _ngcontent-oko-c370 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" mat-row role="row">
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-checked mat-column-checked ng-star-inserted" mat-cell role="cell">
                                        <mat-checkbox _ngcontent-oko-c370 className="mat-mdc-checkbox mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-176">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-176-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-176-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img cdk-column-imageUrl mat-column-imageUrl ng-star-inserted" mat-cell role="cell">
                                        <img _ngcontent-oko-c370 src="../assets/images/user/user10.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" mat-cell role="cell">
                                        Tim Hank
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" mat-cell role="cell">
                                        test@example.com
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-subject mat-column-subject ng-star-inserted" mat-cell role="cell">
                                        Image not Proper
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                        closed
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-assignTo mat-column-assignTo ng-star-inserted" mat-cell role="cell">
                                        John Deo
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" mat-cell role="cell">
                                        27/05/2016
                                      </td>
                                      <td _ngcontent-oko-c370 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-action mat-column-action ng-star-inserted" mat-cell role="cell">
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-123" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
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
                                        <button _ngcontent-oko-c370 aria-describedby="cdk-describedby-message-oko-1-124" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <app-feather-icons _ngcontent-oko-c370 _nghost-oko-c130>
                                            <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
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
                                      {/* */}
                                    </tr>
                                    {/* */}
                                    {/* */}
                                  </tbody>
                                  <tfoot className="mat-mdc-table-sticky" role="rowgroup" style={{display: 'none', bottom: '0px', zIndex: 10}}>
                                    {/* */}
                                  </tfoot>
                                </table>
                                <mat-paginator _ngcontent-oko-c370 className="mat-mdc-paginator" role="group" showfirstlastbuttons>
                                  <div className="mat-mdc-paginator-outer-container">
                                    <div className="mat-mdc-paginator-container">
                                      <div className="mat-mdc-paginator-page-size ng-star-inserted">
                                        <div className="mat-mdc-paginator-page-size-label" id="mat-paginator-page-size-label-18">
                                          Items per page:
                                        </div>
                                        <mat-form-field className="mat-mdc-form-field mat-mdc-paginator-page-size-select ng-tns-c67-333 mat-mdc-form-field-type-mat-select mat-form-field-appearance-outline mat-primary ng-star-inserted">
                                          {/* */}
                                          <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-333 mdc-text-field--outlined mdc-text-field--no-label">
                                            {/* */}
                                            <div className="mat-mdc-form-field-flex ng-tns-c67-333">
                                              <div className="mdc-notched-outline ng-tns-c67-333 mdc-notched-outline--no-label ng-star-inserted mdc-notched-outline--notched" matformfieldnotchedoutline>
                                                <div className="mdc-notched-outline__leading" />
                                                <div className="mdc-notched-outline__notch" style={{width: '0px'}}>
                                                  {/* */}
                                                  {/* */}
                                                  {/* */}
                                                </div>
                                                <div className="mdc-notched-outline__trailing" />
                                              </div>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              <div className="mat-mdc-form-field-infix ng-tns-c67-333">
                                                {/* */}
                                                <mat-select aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-select-value-65 mat-paginator-page-size-label-18" aria-required="false" className="mat-mdc-select ng-tns-c175-334 ng-tns-c67-333 ng-star-inserted" id="mat-select-64" role="combobox" tabIndex={0}>
                                                  <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-334">
                                                    <div className="mat-mdc-select-value ng-tns-c175-334" id="mat-select-value-65">
                                                      {/* */}
                                                      <span className="mat-mdc-select-value-text ng-tns-c175-334 ng-star-inserted">
                                                        <span className="mat-mdc-select-min-line ng-tns-c175-334 ng-star-inserted">
                                                          10
                                                        </span>
                                                        {/* */}
                                                        {/* */}
                                                      </span>
                                                      {/* */}
                                                    </div>
                                                    <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-334">
                                                      <div className="mat-mdc-select-arrow ng-tns-c175-334">
                                                        <svg className="ng-tns-c175-334" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                          <path className="ng-tns-c175-334" d="M7 10l5 5 5-5z" />
                                                        </svg>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  {/* */}
                                                </mat-select>
                                              </div>
                                              {/* */}
                                              {/* */}
                                            </div>
                                            {/* */}
                                          </div>
                                          <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-333">
                                            {/* */}
                                            <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-333 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{opacity: 1, transform: 'translateY(0%)'}}>
                                              {/* */}
                                              <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-333" />
                                            </div>
                                            {/* */}
                                          </div>
                                        </mat-form-field>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      {/* */}
                                      <div className="mat-mdc-paginator-range-actions">
                                        <div aria-live="polite" className="mat-mdc-paginator-range-label">
                                          1 – 10 of 18
                                        </div>
                                        <button aria-label="First page" className="mat-mdc-tooltip-trigger mat-mdc-paginator-navigation-first mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base ng-star-inserted" disabled="true" mat-icon-button type="button">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <svg className="mat-mdc-paginator-icon" focusable="false" viewBox="0 0 24 24">
                                            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
                                          </svg>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                        {/* */}
                                        <button aria-label="Previous page" className="mat-mdc-tooltip-trigger mat-mdc-paginator-navigation-previous mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" disabled="true" mat-icon-button type="button">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <svg className="mat-mdc-paginator-icon" focusable="false" viewBox="0 0 24 24">
                                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                          </svg>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                        <button aria-label="Next page" className="mat-mdc-tooltip-trigger mat-mdc-paginator-navigation-next mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button type="button">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <svg className="mat-mdc-paginator-icon" focusable="false" viewBox="0 0 24 24">
                                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                          </svg>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                        <button aria-label="Last page" className="mat-mdc-tooltip-trigger mat-mdc-paginator-navigation-last mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base ng-star-inserted" mat-icon-button type="button">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <svg className="mat-mdc-paginator-icon" focusable="false" viewBox="0 0 24 24">
                                            <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
                                          </svg>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                        {/* */}
                                        {/* */}
                                      </div>
                                    </div>
                                  </div>
                                </mat-paginator>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </app-support>
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
          <div aria-atomic="true" aria-live="polite" className="cdk-live-announcer-element cdk-visually-hidden" id="cdk-live-announcer-0" />
          <div className="cdk-describedby-message-container cdk-visually-hidden" style={{visibility: 'hidden'}}>
            <div id="cdk-describedby-message-oko-1-8">Sort</div>
            <div id="cdk-describedby-message-oko-1-123" role="tooltip">Edit</div>
            <div id="cdk-describedby-message-oko-1-124" role="tooltip">Delete</div>
          </div>
        </div>
      );
    }
  