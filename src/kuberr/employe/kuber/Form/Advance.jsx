import React from "react"
import Drop from "../../../../Drop";

export default function Advance (){
      return (
        <div>
          <app-root _nghost-oko-c137 ng-version="15.2.0">
            <app-page-loader _ngcontent-oko-c137 _nghost-oko-c136>
              <ngx-loading-bar _ngcontent-oko-c136 _nghost-oko-c135 color="#3173D6" fixed="true" style={{}}>
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
                        <img _ngcontent-oko-c131 alt src="../assets/images/logo.png" />
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
                      <ng-scrollbar _ngcontent-oko-c132 _nghost-oko-c129 className="ng-scrollbar" style={{"height":"543px"}} visibility="hover">
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
                  <ng-scrollbar _ngcontent-oko-c133 _nghost-oko-c129 className="ng-scrollbar" style={{"height":"588px"}} visibility="hover">
                    <div _ngcontent-oko-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="true" pointereventsmethod="viewport" position="native" track="vertical" verticalused="true" visibility="hover">
                      <div _ngcontent-oko-c129 className="ng-scroll-viewport-wrapper">
                        <div _ngcontent-oko-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{"--native-scrollbar-size":"0px"}}>
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
                          <div _ngcontent-oko-c127 className="ng-scrollbar-thumb" scrollbarthumby style={{"height":"494px","-webkit-transform":"translate3d(0px, 0px, 0px)","-ms-transform":"translate3d(0px, 0px, 0px)","transform":"translate3d(0px, 0px, 0px)"}} />
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
                <app-advance-controls _nghost-oko-c428 className="ng-star-inserted">
                  <section _ngcontent-oko-c428 className="content">
                    <div _ngcontent-oko-c428 className="content-block">
                      <div _ngcontent-oko-c428 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c428 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Advance Controls
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
                                  <li _ngcontent-oko-c141 className="breadcrumb-item ng-star-inserted">
                                    Forms
                                  </li>
                                  {/* */}
                                  <li _ngcontent-oko-c141 className="breadcrumb-item active">
                                    Advance Controls
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c428 className="row">
                        <div _ngcontent-oko-c428 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c428 className="card">
                            <div _ngcontent-oko-c428 className="header">
                              <h2 _ngcontent-oko-c428>Input mask</h2>
                            </div>
                            <div _ngcontent-oko-c428 className="body">
                              <div _ngcontent-oko-c428 className="row">
                                <div _ngcontent-oko-c428 className="col-4">
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-416 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-prefix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-416 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-416 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-416">
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-prefix ng-tns-c67-416 ng-star-inserted">
                                          <span _ngcontent-oko-c428 className="ng-tns-c67-416" matprefix>
                                            <mat-icon _ngcontent-oko-c428 aria-hidden="true" className="mat-icon notranslate msr-2 material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                              date_range
                                            </mat-icon>
                                          </span>
                                        </div>
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-416">
                                          <label aria-owns="mat-input-101" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-416 ng-star-inserted" htmlFor="mat-input-101" id="mat-mdc-form-field-label-292" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-416">
                                              Date Format
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c428 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-416 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-101" mask="00/00/0000" matinput placeholder="EX: 10/07/2020" />
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-416 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-416">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-416 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-416" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c428 className="col-4">
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-417 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-prefix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-417 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-417 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-417">
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-prefix ng-tns-c67-417 ng-star-inserted">
                                          <span _ngcontent-oko-c428 className="ng-tns-c67-417" matprefix>
                                            <mat-icon _ngcontent-oko-c428 aria-hidden="true" className="mat-icon notranslate msr-2 material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                              date_range
                                            </mat-icon>
                                          </span>
                                        </div>
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-417">
                                          <label aria-owns="mat-input-102" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-417 ng-star-inserted" htmlFor="mat-input-102" id="mat-mdc-form-field-label-294" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-417">
                                              Date and hour
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c428 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-417 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-102" mask="00/00/00 00:00:00" matinput placeholder="EX: 10/07/20 11:05:29 " />
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-417 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-417">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-417 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-417" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c428 className="col-4">
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-418 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-prefix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-418 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-418 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-418">
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-prefix ng-tns-c67-418 ng-star-inserted">
                                          <span _ngcontent-oko-c428 className="ng-tns-c67-418" matprefix>
                                            <mat-icon _ngcontent-oko-c428 aria-hidden="true" className="mat-icon notranslate msr-2 material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                              access_time
                                            </mat-icon>
                                          </span>
                                        </div>
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-418">
                                          <label aria-owns="mat-input-103" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-418 ng-star-inserted" htmlFor="mat-input-103" id="mat-mdc-form-field-label-296" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-418">
                                              Valid 24 hour format
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c428 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-418 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-103" mask="Hh:m0:s0" matinput placeholder="EX: 23:05:29 " />
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-418 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-418">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-418 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-418" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c428 className="row mt-3">
                                <div _ngcontent-oko-c428 className="col-4">
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-419 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-prefix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-419 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-419 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-419">
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-prefix ng-tns-c67-419 ng-star-inserted">
                                          <span _ngcontent-oko-c428 className="ng-tns-c67-419" matprefix>
                                            <mat-icon _ngcontent-oko-c428 aria-hidden="true" className="mat-icon notranslate msr-2 material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                              phone
                                            </mat-icon>
                                          </span>
                                        </div>
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-419">
                                          <label aria-owns="mat-input-104" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-419 ng-star-inserted" htmlFor="mat-input-104" id="mat-mdc-form-field-label-298" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-419">
                                              Prefix
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c428 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-419 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-104" mask="(000) 000 00 00" matinput placeholder="EX: (435) 345 34 54" prefix={+91 } />
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-419 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-419">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-419 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-419" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c428 className="col-4">
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-420 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-prefix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-420 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-420 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-420">
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-prefix ng-tns-c67-420 ng-star-inserted">
                                          <span _ngcontent-oko-c428 className="ng-tns-c67-420" matprefix>
                                            <mat-icon _ngcontent-oko-c428 aria-hidden="true" className="mat-icon notranslate msr-2 material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                              attach_money
                                            </mat-icon>
                                          </span>
                                        </div>
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-420">
                                          <label aria-owns="mat-input-105" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-420 ng-star-inserted" htmlFor="mat-input-105" id="mat-mdc-form-field-label-300" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-420">
                                              Suffix
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          {/* <input _ngcontent-oko-c428 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-420 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-105" mask={0000} matinput placeholder="EX: 6762 " suffix=" $" /> */}
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-420 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-420">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-420 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-420" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c428 className="col-4">
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-421 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-prefix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-421 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-421 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-421">
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-prefix ng-tns-c67-421 ng-star-inserted">
                                          <span _ngcontent-oko-c428 className="ng-tns-c67-421" matprefix>
                                            <mat-icon _ngcontent-oko-c428 aria-hidden="true" className="mat-icon notranslate msr-2 material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                              error_outline
                                            </mat-icon>
                                          </span>
                                        </div>
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-421">
                                          <label aria-owns="mat-input-106" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-421 ng-star-inserted" htmlFor="mat-input-106" id="mat-mdc-form-field-label-302" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-421">
                                              Drop Special Character
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c428 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-421 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-106" mask="000-000.00" matinput placeholder="EX: 565-656.55" />
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-421 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-421">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-421 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-421" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c428 className="row mt-3">
                                <div _ngcontent-oko-c428 className="col-4">
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-422 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-prefix mat-form-field-appearance-fill mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-422 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-422 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-422">
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-prefix ng-tns-c67-422 ng-star-inserted">
                                          <span _ngcontent-oko-c428 className="ng-tns-c67-422" matprefix>
                                            <mat-icon _ngcontent-oko-c428 aria-hidden="true" className="mat-icon notranslate msr-2 material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                              phone
                                            </mat-icon>
                                          </span>
                                        </div>
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-422">
                                          <label aria-owns="mat-input-107" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-422 ng-star-inserted mdc-floating-label--float-above" htmlFor="mat-input-107" id="mat-mdc-form-field-label-304" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-422">
                                              Show Mask Type
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c428 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-422 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-107" mask="(000) 000-0000" matinput placeholder="EX: (435) 345 34 54" />
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-422 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-422">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-422 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-422" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c428 className="col-4">
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-423 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-prefix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-423 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-423 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-423">
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-prefix ng-tns-c67-423 ng-star-inserted">
                                          <span _ngcontent-oko-c428 className="ng-tns-c67-423" matprefix>
                                            <mat-icon _ngcontent-oko-c428 aria-hidden="true" className="mat-icon notranslate msr-2 material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                              attach_money
                                            </mat-icon>
                                          </span>
                                        </div>
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-423">
                                          <label aria-owns="mat-input-108" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-423 ng-star-inserted" htmlFor="mat-input-108" id="mat-mdc-form-field-label-306" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-423">
                                              Thousand separator
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c428 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-423 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-108" mask="separator" matinput placeholder="EX: 125 897 854 " />
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-423 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-423">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-423 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-423" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c428 className="col-4">
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-424 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-prefix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-424 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-424 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-424">
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-prefix ng-tns-c67-424 ng-star-inserted">
                                          <span _ngcontent-oko-c428 className="ng-tns-c67-424" matprefix>
                                            <mat-icon _ngcontent-oko-c428 aria-hidden="true" className="mat-icon notranslate msr-2 material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                              create
                                            </mat-icon>
                                          </span>
                                        </div>
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-424">
                                          <label aria-owns="mat-input-109" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-424 ng-star-inserted" htmlFor="mat-input-109" id="mat-mdc-form-field-label-308" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-424">
                                              Dot separator
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c428 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-424 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-109" mask="separator" matinput placeholder="EX: 125.878.754" thousandseparator="." />
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-424 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-424">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-424 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-424" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c428 className="row mt-3">
                                <div _ngcontent-oko-c428 className="col-4">
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-425 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-prefix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-425 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-425 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-425">
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-prefix ng-tns-c67-425 ng-star-inserted">
                                          <span _ngcontent-oko-c428 className="ng-tns-c67-425" matprefix>
                                            <mat-icon _ngcontent-oko-c428 aria-hidden="true" className="mat-icon notranslate msr-2 material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                              credit_card
                                            </mat-icon>
                                          </span>
                                        </div>
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-425">
                                          <label aria-owns="mat-input-110" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-425 ng-star-inserted" htmlFor="mat-input-110" id="mat-mdc-form-field-label-310" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-425">
                                              Secure input
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c428 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-425 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-110" mask="XXX/X0/0000" matinput placeholder="EX: ***/*4/4354" />
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-425 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-425">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-425 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-425" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c428 className="col-4">
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-426 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-prefix mat-form-field-appearance-fill mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-426 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-426 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-426">
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-prefix ng-tns-c67-426 ng-star-inserted">
                                          <span _ngcontent-oko-c428 className="ng-tns-c67-426" matprefix>
                                            <mat-icon _ngcontent-oko-c428 aria-hidden="true" className="mat-icon notranslate msr-2 material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                              desktop_mac
                                            </mat-icon>
                                          </span>
                                        </div>
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-426">
                                          <label aria-owns="mat-input-111" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-426 ng-star-inserted mdc-floating-label--float-above" htmlFor="mat-input-111" id="mat-mdc-form-field-label-312" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-426">
                                              IP Address
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c428 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-426 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-111" mask="IP" matinput placeholder="EX: 443.543.534.535" />
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-426 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-426">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-426 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-426" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c428 className="row">
                        <div _ngcontent-oko-c428 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c428 className="card">
                            <div _ngcontent-oko-c428 className="header">
                              <h2 _ngcontent-oko-c428>Autocomplete</h2>
                            </div>
                            <div _ngcontent-oko-c428 className="body">
                              <div _ngcontent-oko-c428 className="row">
                                <div _ngcontent-oko-c428 className="col-6">
                                  <h6 _ngcontent-oko-c428>
                                    Display value autocomplete
                                  </h6>
                                  <form _ngcontent-oko-c428 className="example-form ng-untouched ng-pristine ng-valid" noValidate>
                                    <mat-form-field _ngcontent-oko-c428 className="mat-mdc-form-field example-full-width ng-tns-c67-427 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-427 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-427 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-427">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-427">
                                            <label aria-owns="mat-input-112" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-427 ng-star-inserted" htmlFor="mat-input-112" id="mat-mdc-form-field-label-314" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c428 className="ng-tns-c67-427">
                                                Assignee
                                              </mat-label>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <input _ngcontent-oko-c428 aria-autocomplete="list" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-required="false" autoComplete="off" className="mat-mdc-autocomplete-trigger mat-mdc-input-element ng-tns-c67-427 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-112" matinput role="combobox" type="text" />
                                            {/* */}
                                            <mat-autocomplete _ngcontent-oko-c428 className="mat-mdc-autocomplete ng-tns-c391-428 ng-tns-c67-427 ng-star-inserted">
                                              {/* */}
                                            </mat-autocomplete>
                                          </div>
                                          {/* */}
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-427 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-427">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-427 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-427" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c428 className="row">
                        <div _ngcontent-oko-c428 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c428 className="card">
                            <div _ngcontent-oko-c428 className="header">
                              <h2 _ngcontent-oko-c428>Hint Label</h2>
                            </div>
                            <div _ngcontent-oko-c428 className="body">
                              <div _ngcontent-oko-c428 className="row">
                                <div _ngcontent-oko-c428 className="col-6">
                                  <h6 _ngcontent-oko-c428>
                                    Form field with hints
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-429 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted" hintlabel="Max 10 characters">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-429 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-429 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-429">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-429">
                                          <label aria-owns="mat-input-113" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-429 ng-star-inserted" htmlFor="mat-input-113" id="mat-mdc-form-field-label-316" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-429">
                                              Enter some input
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c428 aria-describedby="mat-mdc-hint-317 mat-mdc-hint-3" aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-429 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-113" matinput maxLength={10} placeholder="Ex. Nougat" />
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-429 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-429">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-429 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        <mat-hint className="mat-mdc-form-field-hint mat-mdc-form-field-bottom-align ng-tns-c67-429 ng-star-inserted" id="mat-mdc-hint-317" style={{}}>
                                          Max 10 characters
                                        </mat-hint>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-429" />
                                        <mat-hint _ngcontent-oko-c428 className="mat-mdc-form-field-hint mat-mdc-form-field-bottom-align mat-mdc-form-field-hint-end ng-tns-c67-429" id="mat-mdc-hint-3">
                                          0/10
                                        </mat-hint>
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c428 className="col-6">
                                  <h6 _ngcontent-oko-c428>
                                    Form field with hints
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-430 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-430 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-430 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-430">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-430">
                                          <label aria-owns="mat-select-88" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-430 ng-star-inserted" htmlFor="mat-select-88" id="mat-mdc-form-field-label-318" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-430">
                                              Select me
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <mat-select _ngcontent-oko-c428 aria-autocomplete="none" aria-describedby="mat-mdc-hint-4" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-318 mat-select-value-89" aria-required="false" className="mat-mdc-select ng-tns-c175-431 ng-tns-c67-430 mat-mdc-select-empty ng-star-inserted" id="mat-select-88" role="combobox" tabIndex={0}>
                                            <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-431">
                                              <div className="mat-mdc-select-value ng-tns-c175-431" id="mat-select-value-89">
                                                <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-431 ng-star-inserted">
                                                </span>
                                                {/* */}
                                                {/* */}
                                              </div>
                                              <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-431">
                                                <div className="mat-mdc-select-arrow ng-tns-c175-431">
                                                  <svg className="ng-tns-c175-431" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                    <path className="ng-tns-c175-431" d="M7 10l5 5 5-5z" />
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
                                      <div className="mdc-line-ripple ng-tns-c67-430 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-430">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-430 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-430" />
                                        <mat-hint _ngcontent-oko-c428 className="mat-mdc-form-field-hint mat-mdc-form-field-bottom-align mat-mdc-form-field-hint-end ng-tns-c67-430" id="mat-mdc-hint-4">
                                          Here's the dropdown arrow ^
                                        </mat-hint>
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c428 className="row">
                        <div _ngcontent-oko-c428 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c428 className="card">
                            <div _ngcontent-oko-c428 className="header">
                              <h2 _ngcontent-oko-c428>Error Message</h2>
                            </div>
                            <div _ngcontent-oko-c428 className="body">
                              <div _ngcontent-oko-c428 className="row">
                                <div _ngcontent-oko-c428 className="col-6">
                                  <h6 _ngcontent-oko-c428>
                                    Form field with error messages
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-432 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-432 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-432 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-432">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-432">
                                          <label aria-owns="mat-input-114" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-432 ng-star-inserted" htmlFor="mat-input-114" id="mat-mdc-form-field-label-320" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-432">
                                              Enter your email
                                            </mat-label>
                                            <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-432 ng-star-inserted">
                                            </span>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c428 aria-required="true" className="mat-mdc-input-element ng-tns-c67-432 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-114" matinput placeholder="pat@example.com" required />
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-432 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-432">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-432 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-432" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c428 className="row">
                        <div _ngcontent-oko-c428 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c428 className="card">
                            <div _ngcontent-oko-c428 className="header">
                              <h2 _ngcontent-oko-c428>Prefix &amp; suffix</h2>
                            </div>
                            <div _ngcontent-oko-c428 className="body">
                              <div _ngcontent-oko-c428 className="row">
                                <div _ngcontent-oko-c428 className="col-6">
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-433 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-433 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-433 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-433">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-433">
                                          <label aria-owns="mat-input-115" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-433 ng-star-inserted" htmlFor="mat-input-115" id="mat-mdc-form-field-label-322" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-433">
                                              Enter your password
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c428 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-433 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-115" matinput type="password" />
                                        </div>
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-433 ng-star-inserted">
                                          <button _ngcontent-oko-c428 aria-label="Hide password" aria-pressed="true" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base ng-tns-c67-433" mat-icon-button matsuffix>
                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                            </span>
                                            <mat-icon _ngcontent-oko-c428 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                              visibility_off
                                            </mat-icon>
                                            <span className="mat-mdc-focus-indicator">
                                            </span>
                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                            </span>
                                            <span className="mat-mdc-button-touch-target">
                                            </span>
                                          </button>
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-433 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-433">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-433 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-433" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c428 className="col-6">
                                  <mat-form-field _ngcontent-oko-c428 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-434 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-prefix mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-434 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-434 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-434">
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-prefix ng-tns-c67-434 ng-star-inserted">
                                          <span _ngcontent-oko-c428 className="ng-tns-c67-434" matprefix>
                                            $
                                          </span>
                                        </div>
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-434">
                                          <label aria-owns="mat-input-116" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-434 ng-star-inserted" htmlFor="mat-input-116" id="mat-mdc-form-field-label-324" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c428 className="ng-tns-c67-434">
                                              Amount
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c428 aria-invalid="false" aria-required="false" className="mat-mdc-input-element example-right-align ng-tns-c67-434 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-116" matinput type="number" />
                                        </div>
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-434 ng-star-inserted">
                                          <span _ngcontent-oko-c428 className="ng-tns-c67-434" matsuffix>
                                            .00
                                          </span>
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-434 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-434">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-434 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-434" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </app-advance-controls>
                {/* */}
              </div>
            </app-main-layout>
            {/* */}
          </app-root>
          <svg height={0} id="SvgjsSvg1001" style={{"overflow":"hidden","top":"-100%","left":"-100%","position":"absolute","opacity":"0"}} version="1.1" width={2} xmlns="http://www.w3.org/2000/svg" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs id="SvgjsDefs1002" />
            <polyline id="SvgjsPolyline1003" points="0,0" />
            <path d="M0 0 " id="SvgjsPath1004" />
          </svg>
          <svg height={0} id="SvgjsSvg1851" style={{"overflow":"hidden","top":"-100%","left":"-100%","position":"absolute","opacity":"0"}} version="1.1" width={2} xmlns="http://www.w3.org/2000/svg" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs id="SvgjsDefs1852" />
            <polyline id="SvgjsPolyline1853" points="0,0" />
            <path d="M-1 270.99999923706054L-1 270.99999923706054C-1 270.99999923706054 63.107638676961265 270.99999923706054 63.107638676961265 270.99999923706054C63.107638676961265 270.99999923706054 126.21527735392253 270.99999923706054 126.21527735392253 270.99999923706054C126.21527735392253 270.99999923706054 189.3229160308838 270.99999923706054 189.3229160308838 270.99999923706054C189.3229160308838 270.99999923706054 252.43055470784506 270.99999923706054 252.43055470784506 270.99999923706054C252.43055470784506 270.99999923706054 315.53819338480633 270.99999923706054 315.53819338480633 270.99999923706054C315.53819338480633 270.99999923706054 378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054C378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054 " id="SvgjsPath1854" />
          </svg>
          <div aria-atomic="true" aria-live="polite" className="cdk-live-announcer-element cdk-visually-hidden" id="cdk-live-announcer-0" />
          <div className="cdk-describedby-message-container cdk-visually-hidden" style={{"visibility":"hidden"}}>
            <div id="cdk-describedby-message-oko-1-8">Sort</div>
          </div>
        </div>
      );
    }
  