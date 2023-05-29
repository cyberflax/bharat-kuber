import React from "react"
import Drop from "../../../../Drop";

export default function formcantrol (){
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
                <app-form-controls _nghost-oko-c427 className="ng-star-inserted">
                  <section _ngcontent-oko-c427 className="content">
                    <div _ngcontent-oko-c427 className="content-block">
                      <div _ngcontent-oko-c427 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c427 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Form Controls
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
                                    Form Controls
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c427 className="row">
                        <div _ngcontent-oko-c427 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c427 className="card">
                            <div _ngcontent-oko-c427 className="header">
                              <h2 _ngcontent-oko-c427>Fill Input Style</h2>
                            </div>
                            <div _ngcontent-oko-c427 className="body">
                              <div _ngcontent-oko-c427 className="example-container">
                                <mat-form-field _ngcontent-oko-c427 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-375 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                  {/* */}
                                  <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-375 mdc-text-field--filled">
                                    <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-375 ng-star-inserted" />
                                    {/* */}
                                    <div className="mat-mdc-form-field-flex ng-tns-c67-375">
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                      <div className="mat-mdc-form-field-infix ng-tns-c67-375">
                                        <label aria-owns="mat-input-82" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-375 ng-star-inserted" htmlFor="mat-input-82" id="mat-mdc-form-field-label-232" matformfieldfloatinglabel>
                                          <mat-label _ngcontent-oko-c427 className="ng-tns-c67-375">
                                            Input
                                          </mat-label>
                                          {/* */}
                                        </label>
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <input _ngcontent-oko-c427 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-375 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-82" matinput />
                                      </div>
                                      {/* */}
                                      {/* */}
                                    </div>
                                    <div className="mdc-line-ripple ng-tns-c67-375 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                    {/* */}
                                  </div>
                                  <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-375">
                                    {/* */}
                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-375 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-375" />
                                    </div>
                                    {/* */}
                                  </div>
                                </mat-form-field>
                                <br _ngcontent-oko-c427 />
                                <mat-form-field _ngcontent-oko-c427 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-376 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                  {/* */}
                                  <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-376 mdc-text-field--filled">
                                    <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-376 ng-star-inserted" />
                                    {/* */}
                                    <div className="mat-mdc-form-field-flex ng-tns-c67-376">
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                      <div className="mat-mdc-form-field-infix ng-tns-c67-376">
                                        <label aria-owns="mat-select-66" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-376 ng-star-inserted" htmlFor="mat-select-66" id="mat-mdc-form-field-label-234" matformfieldfloatinglabel>
                                          <mat-label _ngcontent-oko-c427 className="ng-tns-c67-376">
                                            Select
                                          </mat-label>
                                          {/* */}
                                        </label>
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <mat-select _ngcontent-oko-c427 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-234 mat-select-value-67" aria-required="false" className="mat-mdc-select ng-tns-c175-377 ng-tns-c67-376 mat-mdc-select-empty ng-star-inserted" id="mat-select-66" role="combobox" tabIndex={0}>
                                          <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-377">
                                            <div className="mat-mdc-select-value ng-tns-c175-377" id="mat-select-value-67">
                                              <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-377 ng-star-inserted">
                                              </span>
                                              {/* */}
                                              {/* */}
                                            </div>
                                            <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-377">
                                              <div className="mat-mdc-select-arrow ng-tns-c175-377">
                                                <svg className="ng-tns-c175-377" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                  <path className="ng-tns-c175-377" d="M7 10l5 5 5-5z" />
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
                                    <div className="mdc-line-ripple ng-tns-c67-376 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                    {/* */}
                                  </div>
                                  <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-376">
                                    {/* */}
                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-376 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-376" />
                                    </div>
                                    {/* */}
                                  </div>
                                </mat-form-field>
                                <br _ngcontent-oko-c427 />
                                <mat-form-field _ngcontent-oko-c427 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-378 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                  {/* */}
                                  <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-378 mdc-text-field--filled">
                                    <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-378 ng-star-inserted" />
                                    {/* */}
                                    <div className="mat-mdc-form-field-flex ng-tns-c67-378">
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                      <div className="mat-mdc-form-field-infix ng-tns-c67-378">
                                        <label aria-owns="mat-input-83" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-378 ng-star-inserted" htmlFor="mat-input-83" id="mat-mdc-form-field-label-236" matformfieldfloatinglabel>
                                          <mat-label _ngcontent-oko-c427 className="ng-tns-c67-378">
                                            Textarea
                                          </mat-label>
                                          {/* */}
                                        </label>
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <textarea _ngcontent-oko-c427 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-378 mat-mdc-form-field-textarea-control mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-83" matinput defaultValue={""} />
                                      </div>
                                      {/* */}
                                      {/* */}
                                    </div>
                                    <div className="mdc-line-ripple ng-tns-c67-378 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                    {/* */}
                                  </div>
                                  <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-378">
                                    {/* */}
                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-378 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-378" />
                                    </div>
                                    {/* */}
                                  </div>
                                </mat-form-field>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c427 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c427 className="card">
                            <div _ngcontent-oko-c427 className="header">
                              <h2 _ngcontent-oko-c427>Outline Input Style</h2>
                            </div>
                            <div _ngcontent-oko-c427 className="body">
                              <div _ngcontent-oko-c427 className="example-container">
                                <mat-form-field _ngcontent-oko-c427 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-379 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                  {/* */}
                                  <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-379 mdc-text-field--outlined">
                                    {/* */}
                                    <div className="mat-mdc-form-field-flex ng-tns-c67-379">
                                      <div className="mdc-notched-outline ng-tns-c67-379 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                        <div className="mdc-notched-outline__leading" />
                                        <div className="mdc-notched-outline__notch">
                                          <label aria-owns="mat-input-84" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-379 ng-star-inserted" htmlFor="mat-input-84" id="mat-mdc-form-field-label-238" matformfieldfloatinglabel style={{}}>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-379">
                                              Input
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                        </div>
                                        <div className="mdc-notched-outline__trailing" />
                                      </div>
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                      <div className="mat-mdc-form-field-infix ng-tns-c67-379">
                                        {/* */}
                                        <input _ngcontent-oko-c427 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-379 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-84" matinput />
                                      </div>
                                      {/* */}
                                      {/* */}
                                    </div>
                                    {/* */}
                                  </div>
                                  <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-379">
                                    {/* */}
                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-379 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-379" />
                                    </div>
                                    {/* */}
                                  </div>
                                </mat-form-field>
                                <br _ngcontent-oko-c427 />
                                <mat-form-field _ngcontent-oko-c427 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-380 mat-mdc-form-field-type-mat-select mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                  {/* */}
                                  <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-380 mdc-text-field--outlined">
                                    {/* */}
                                    <div className="mat-mdc-form-field-flex ng-tns-c67-380">
                                      <div className="mdc-notched-outline ng-tns-c67-380 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                        <div className="mdc-notched-outline__leading" />
                                        <div className="mdc-notched-outline__notch">
                                          <label aria-owns="mat-select-68" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-380 ng-star-inserted" htmlFor="mat-select-68" id="mat-mdc-form-field-label-240" matformfieldfloatinglabel style={{}}>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-380">
                                              Select
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                        </div>
                                        <div className="mdc-notched-outline__trailing" />
                                      </div>
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                      <div className="mat-mdc-form-field-infix ng-tns-c67-380">
                                        {/* */}
                                        <mat-select _ngcontent-oko-c427 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-240 mat-select-value-69" aria-required="false" className="mat-mdc-select ng-tns-c175-381 ng-tns-c67-380 mat-mdc-select-empty ng-star-inserted" id="mat-select-68" role="combobox" tabIndex={0}>
                                          <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-381">
                                            <div className="mat-mdc-select-value ng-tns-c175-381" id="mat-select-value-69">
                                              <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-381 ng-star-inserted">
                                              </span>
                                              {/* */}
                                              {/* */}
                                            </div>
                                            <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-381">
                                              <div className="mat-mdc-select-arrow ng-tns-c175-381">
                                                <svg className="ng-tns-c175-381" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                  <path className="ng-tns-c175-381" d="M7 10l5 5 5-5z" />
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
                                  <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-380">
                                    {/* */}
                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-380 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-380" />
                                    </div>
                                    {/* */}
                                  </div>
                                </mat-form-field>
                                <br _ngcontent-oko-c427 />
                                <mat-form-field _ngcontent-oko-c427 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-382 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                  {/* */}
                                  <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-382 mdc-text-field--outlined">
                                    {/* */}
                                    <div className="mat-mdc-form-field-flex ng-tns-c67-382">
                                      <div className="mdc-notched-outline ng-tns-c67-382 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                        <div className="mdc-notched-outline__leading" />
                                        <div className="mdc-notched-outline__notch">
                                          <label aria-owns="mat-input-85" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-382 ng-star-inserted" htmlFor="mat-input-85" id="mat-mdc-form-field-label-242" matformfieldfloatinglabel style={{}}>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-382">
                                              Textarea
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                        </div>
                                        <div className="mdc-notched-outline__trailing" />
                                      </div>
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                      <div className="mat-mdc-form-field-infix ng-tns-c67-382">
                                        {/* */}
                                        <textarea _ngcontent-oko-c427 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-382 mat-mdc-form-field-textarea-control mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-85" matinput defaultValue={""} />
                                      </div>
                                      {/* */}
                                      {/* */}
                                    </div>
                                    {/* */}
                                  </div>
                                  <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-382">
                                    {/* */}
                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-382 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-382" />
                                    </div>
                                    {/* */}
                                  </div>
                                </mat-form-field>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c427 className="row">
                        <div _ngcontent-oko-c427 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c427 className="card">
                            <div _ngcontent-oko-c427 className="header">
                              <h2 _ngcontent-oko-c427>Form field with label</h2>
                            </div>
                            <div _ngcontent-oko-c427 className="body">
                              <div _ngcontent-oko-c427 className="example-container">
                                <form _ngcontent-oko-c427 className="ng-untouched ng-pristine ng-valid" noValidate>
                                  <div _ngcontent-oko-c427 className="row">
                                    <div _ngcontent-oko-c427 className="col-4">
                                      <mat-form-field _ngcontent-oko-c427 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-383 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-primary ng-star-inserted">
                                        {/* */}
                                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-383 mdc-text-field--filled mdc-text-field--no-label">
                                          <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-383 ng-star-inserted" />
                                          {/* */}
                                          <div className="mat-mdc-form-field-flex ng-tns-c67-383">
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <div className="mat-mdc-form-field-infix ng-tns-c67-383">
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              <input _ngcontent-oko-c427 aria-required="true" className="mat-mdc-input-element ng-tns-c67-383 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-86" matinput placeholder="Simple placeholder" required />
                                            </div>
                                            {/* */}
                                            {/* */}
                                          </div>
                                          <div className="mdc-line-ripple ng-tns-c67-383 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                          {/* */}
                                        </div>
                                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-383">
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-383 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                            {/* */}
                                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-383" />
                                          </div>
                                          {/* */}
                                        </div>
                                      </mat-form-field>
                                    </div>
                                    <div _ngcontent-oko-c427 className="col-4">
                                      <mat-form-field _ngcontent-oko-c427 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-384 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                        {/* */}
                                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-384 mdc-text-field--filled">
                                          <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-384 ng-star-inserted" />
                                          {/* */}
                                          <div className="mat-mdc-form-field-flex ng-tns-c67-384">
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <div className="mat-mdc-form-field-infix ng-tns-c67-384">
                                              <label aria-owns="mat-input-87" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-384 ng-star-inserted" htmlFor="mat-input-87" id="mat-mdc-form-field-label-246" matformfieldfloatinglabel>
                                                <mat-label _ngcontent-oko-c427 className="ng-tns-c67-384">
                                                  Both a label and a placeholder
                                                </mat-label>
                                                {/* */}
                                              </label>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              <input _ngcontent-oko-c427 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-384 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-87" matinput placeholder="Simple placeholder" />
                                            </div>
                                            {/* */}
                                            {/* */}
                                          </div>
                                          <div className="mdc-line-ripple ng-tns-c67-384 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                          {/* */}
                                        </div>
                                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-384">
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-384 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                            {/* */}
                                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-384" />
                                          </div>
                                          {/* */}
                                        </div>
                                      </mat-form-field>
                                    </div>
                                    <div _ngcontent-oko-c427 className="col-4">
                                      <mat-form-field _ngcontent-oko-c427 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-385 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                        {/* */}
                                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-385 mdc-text-field--filled">
                                          <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-385 ng-star-inserted" />
                                          {/* */}
                                          <div className="mat-mdc-form-field-flex ng-tns-c67-385">
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <div className="mat-mdc-form-field-infix ng-tns-c67-385">
                                              <label aria-owns="mat-select-70" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-385 ng-star-inserted" htmlFor="mat-select-70" id="mat-mdc-form-field-label-248" matformfieldfloatinglabel>
                                                <mat-label _ngcontent-oko-c427 className="ng-tns-c67-385">
                                                  <mat-icon _ngcontent-oko-c427 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                    favorite
                                                  </mat-icon>
                                                  <b _ngcontent-oko-c427>
                                                    Fancy
                                                  </b>
                                                  <i _ngcontent-oko-c427>
                                                    label
                                                  </i>
                                                </mat-label>
                                                <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-385 ng-star-inserted">
                                                </span>
                                                {/* */}
                                              </label>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              <mat-select _ngcontent-oko-c427 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-248 mat-select-value-71" aria-required="true" className="mat-mdc-select ng-tns-c175-386 ng-tns-c67-385 mat-mdc-select-required mat-mdc-select-empty ng-star-inserted" id="mat-select-70" required role="combobox" tabIndex={0}>
                                                <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-386">
                                                  <div className="mat-mdc-select-value ng-tns-c175-386" id="mat-select-value-71">
                                                    <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-386 ng-star-inserted">
                                                    </span>
                                                    {/* */}
                                                    {/* */}
                                                  </div>
                                                  <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-386">
                                                    <div className="mat-mdc-select-arrow ng-tns-c175-386">
                                                      <svg className="ng-tns-c175-386" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                        <path className="ng-tns-c175-386" d="M7 10l5 5 5-5z" />
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
                                          <div className="mdc-line-ripple ng-tns-c67-385 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                          {/* */}
                                        </div>
                                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-385">
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-385 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                            {/* */}
                                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-385" />
                                          </div>
                                          {/* */}
                                        </div>
                                      </mat-form-field>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c427 className="row">
                        <div _ngcontent-oko-c427 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c427 className="card">
                            <div _ngcontent-oko-c427 className="header">
                              <h2 _ngcontent-oko-c427>File Upload</h2>
                            </div>
                            <div _ngcontent-oko-c427 className="body">
                              <div _ngcontent-oko-c427 className="example-container">
                                <form _ngcontent-oko-c427 className="ng-untouched ng-pristine ng-valid" noValidate>
                                  <div _ngcontent-oko-c427 className="row">
                                    <div _ngcontent-oko-c427 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                      <mat-label _ngcontent-oko-c427>
                                        Upload Files
                                      </mat-label>
                                      <app-file-upload _ngcontent-oko-c427 _nghost-oko-c235 className="ng-untouched ng-pristine ng-valid" formcontrolname="fileUpload">
                                        <div _ngcontent-oko-c235 className="file-drop-area">
                                          <button _ngcontent-oko-c235 className="mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base" color="primary" mat-raised-button>
                                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                            </span>
                                            <span className="mdc-button__label">
                                              Choose file
                                            </span>
                                            <span className="mat-mdc-focus-indicator">
                                            </span>
                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                            </span>
                                            <span className="mat-mdc-button-touch-target">
                                            </span>
                                          </button>
                                          <span _ngcontent-oko-c235>
                                            or drag and drop file here
                                          </span>
                                          <input _ngcontent-oko-c235 className="file-input" type="file" />
                                        </div>
                                      </app-file-upload>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c427 className="row">
                        <div _ngcontent-oko-c427 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c427 className="card">
                            <div _ngcontent-oko-c427 className="header">
                              <h2 _ngcontent-oko-c427>Check Box</h2>
                            </div>
                            <div _ngcontent-oko-c427 className="body">
                              <h6 _ngcontent-oko-c427>Checkbox configuration</h6>
                              <section _ngcontent-oko-c427 className="example-section">
                                <mat-checkbox _ngcontent-oko-c427 className="mat-mdc-checkbox example-margin mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-187">
                                  <div className="mdc-form-field">
                                    <div className="mdc-checkbox">
                                      <div className="mat-mdc-checkbox-touch-target" />
                                      <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-187-input" tabIndex={0} type="checkbox" />
                                      <div className="mdc-checkbox__ripple" />
                                      <div className="mdc-checkbox__background">
                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                          <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                        </svg>
                                        <div className="mdc-checkbox__mixedmark" />
                                      </div>
                                      <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                    </div>
                                    <label htmlFor="mat-mdc-checkbox-187-input">
                                      Checked
                                    </label>
                                  </div>
                                </mat-checkbox>
                                <mat-checkbox _ngcontent-oko-c427 className="mat-mdc-checkbox example-margin mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-188">
                                  <div className="mdc-form-field">
                                    <div className="mdc-checkbox">
                                      <div className="mat-mdc-checkbox-touch-target" />
                                      <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-188-input" tabIndex={0} type="checkbox" />
                                      <div className="mdc-checkbox__ripple" />
                                      <div className="mdc-checkbox__background">
                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                          <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                        </svg>
                                        <div className="mdc-checkbox__mixedmark" />
                                      </div>
                                      <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                    </div>
                                    <label htmlFor="mat-mdc-checkbox-188-input">
                                      Indeterminate
                                    </label>
                                  </div>
                                </mat-checkbox>
                              </section>
                              <section _ngcontent-oko-c427 className="example-section">
                                <label _ngcontent-oko-c427 className="example-margin">
                                  Align:
                                </label>
                                <mat-radio-group _ngcontent-oko-c427 className="mat-mdc-radio-group ng-untouched ng-pristine ng-valid" role="radiogroup">
                                  <mat-radio-button _ngcontent-oko-c427 className="mat-mdc-radio-button example-margin mat-accent mat-mdc-radio-checked" id="mat-radio-9" value="after">
                                    <div className="mdc-form-field">
                                      <div className="mdc-radio">
                                        <div className="mat-mdc-radio-touch-target" />
                                        <input className="mdc-radio__native-control" id="mat-radio-9-input" name="mat-radio-group-7" tabIndex={0} type="radio" defaultValue="after" />
                                        <div className="mdc-radio__background">
                                          <div className="mdc-radio__outer-circle" />
                                          <div className="mdc-radio__inner-circle" />
                                        </div>
                                        <div className="mat-ripple mat-radio-ripple mat-mdc-focus-indicator" mat-ripple>
                                          <div className="mat-ripple-element mat-radio-persistent-ripple" />
                                        </div>
                                      </div>
                                      <label htmlFor="mat-radio-9-input"> After </label>
                                    </div>
                                  </mat-radio-button>
                                  <mat-radio-button _ngcontent-oko-c427 className="mat-mdc-radio-button example-margin mat-accent" id="mat-radio-10" value="before">
                                    <div className="mdc-form-field">
                                      <div className="mdc-radio">
                                        <div className="mat-mdc-radio-touch-target" />
                                        <input className="mdc-radio__native-control" id="mat-radio-10-input" name="mat-radio-group-7" tabIndex={-1} type="radio" defaultValue="before" />
                                        <div className="mdc-radio__background">
                                          <div className="mdc-radio__outer-circle" />
                                          <div className="mdc-radio__inner-circle" />
                                        </div>
                                        <div className="mat-ripple mat-radio-ripple mat-mdc-focus-indicator" mat-ripple>
                                          <div className="mat-ripple-element mat-radio-persistent-ripple" />
                                        </div>
                                      </div>
                                      <label htmlFor="mat-radio-10-input"> Before </label>
                                    </div>
                                  </mat-radio-button>
                                </mat-radio-group>
                              </section>
                              <section _ngcontent-oko-c427 className="example-section">
                                <mat-checkbox _ngcontent-oko-c427 className="mat-mdc-checkbox example-margin mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-189">
                                  <div className="mdc-form-field">
                                    <div className="mdc-checkbox">
                                      <div className="mat-mdc-checkbox-touch-target" />
                                      <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-189-input" tabIndex={0} type="checkbox" />
                                      <div className="mdc-checkbox__ripple" />
                                      <div className="mdc-checkbox__background">
                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                          <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                        </svg>
                                        <div className="mdc-checkbox__mixedmark" />
                                      </div>
                                      <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                    </div>
                                    <label htmlFor="mat-mdc-checkbox-189-input">
                                      Disabled
                                    </label>
                                  </div>
                                </mat-checkbox>
                              </section>
                              <h6 _ngcontent-oko-c427 className="example-h4">
                                Result
                              </h6>
                              <section _ngcontent-oko-c427 className="example-section">
                                <mat-checkbox _ngcontent-oko-c427 className="mat-mdc-checkbox example-margin mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-190">
                                  <div className="mdc-form-field">
                                    <div className="mdc-checkbox">
                                      <div className="mat-mdc-checkbox-touch-target" />
                                      <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-190-input" tabIndex={0} type="checkbox" />
                                      <div className="mdc-checkbox__ripple" />
                                      <div className="mdc-checkbox__background">
                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                          <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                        </svg>
                                        <div className="mdc-checkbox__mixedmark" />
                                      </div>
                                      <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                    </div>
                                    <label htmlFor="mat-mdc-checkbox-190-input">
                                      I'm a checkbox
                                    </label>
                                  </div>
                                </mat-checkbox>
                              </section>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c427 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c427 className="card">
                            <div _ngcontent-oko-c427 className="header">
                              <h2 _ngcontent-oko-c427>Radio Buttons</h2>
                            </div>
                            <div _ngcontent-oko-c427 className="body">
                              <label _ngcontent-oko-c427 id="example-radio-group-label">
                                Pick your favorite season
                              </label>
                              <mat-radio-group _ngcontent-oko-c427 aria-labelledby="example-radio-group-label" className="mat-mdc-radio-group example-radio-group ng-untouched ng-pristine ng-valid" role="radiogroup">
                                <mat-radio-button _ngcontent-oko-c427 className="mat-mdc-radio-button example-radio-button ms-0 mat-accent ng-star-inserted" id="mat-radio-16">
                                  <div className="mdc-form-field">
                                    <div className="mdc-radio">
                                      <div className="mat-mdc-radio-touch-target" />
                                      <input className="mdc-radio__native-control" id="mat-radio-16-input" name="mat-radio-group-10" tabIndex={0} type="radio" defaultValue="Winter" />
                                      <div className="mdc-radio__background">
                                        <div className="mdc-radio__outer-circle" />
                                        <div className="mdc-radio__inner-circle" />
                                      </div>
                                      <div className="mat-ripple mat-radio-ripple mat-mdc-focus-indicator" mat-ripple>
                                        <div className="mat-ripple-element mat-radio-persistent-ripple" />
                                      </div>
                                    </div>
                                    <label htmlFor="mat-radio-16-input"> Winter </label>
                                  </div>
                                </mat-radio-button>
                                <mat-radio-button _ngcontent-oko-c427 className="mat-mdc-radio-button example-radio-button ms-0 mat-accent ng-star-inserted" id="mat-radio-17">
                                  <div className="mdc-form-field">
                                    <div className="mdc-radio">
                                      <div className="mat-mdc-radio-touch-target" />
                                      <input className="mdc-radio__native-control" id="mat-radio-17-input" name="mat-radio-group-10" tabIndex={0} type="radio" defaultValue="Spring" />
                                      <div className="mdc-radio__background">
                                        <div className="mdc-radio__outer-circle" />
                                        <div className="mdc-radio__inner-circle" />
                                      </div>
                                      <div className="mat-ripple mat-radio-ripple mat-mdc-focus-indicator" mat-ripple>
                                        <div className="mat-ripple-element mat-radio-persistent-ripple" />
                                      </div>
                                    </div>
                                    <label htmlFor="mat-radio-17-input"> Spring </label>
                                  </div>
                                </mat-radio-button>
                                <mat-radio-button _ngcontent-oko-c427 className="mat-mdc-radio-button example-radio-button ms-0 mat-accent ng-star-inserted" id="mat-radio-18">
                                  <div className="mdc-form-field">
                                    <div className="mdc-radio">
                                      <div className="mat-mdc-radio-touch-target" />
                                      <input className="mdc-radio__native-control" id="mat-radio-18-input" name="mat-radio-group-10" tabIndex={0} type="radio" defaultValue="Summer" />
                                      <div className="mdc-radio__background">
                                        <div className="mdc-radio__outer-circle" />
                                        <div className="mdc-radio__inner-circle" />
                                      </div>
                                      <div className="mat-ripple mat-radio-ripple mat-mdc-focus-indicator" mat-ripple>
                                        <div className="mat-ripple-element mat-radio-persistent-ripple" />
                                      </div>
                                    </div>
                                    <label htmlFor="mat-radio-18-input"> Summer </label>
                                  </div>
                                </mat-radio-button>
                                <mat-radio-button _ngcontent-oko-c427 className="mat-mdc-radio-button example-radio-button ms-0 mat-accent ng-star-inserted" id="mat-radio-19">
                                  <div className="mdc-form-field">
                                    <div className="mdc-radio">
                                      <div className="mat-mdc-radio-touch-target" />
                                      <input className="mdc-radio__native-control" id="mat-radio-19-input" name="mat-radio-group-10" tabIndex={0} type="radio" defaultValue="Autumn" />
                                      <div className="mdc-radio__background">
                                        <div className="mdc-radio__outer-circle" />
                                        <div className="mdc-radio__inner-circle" />
                                      </div>
                                      <div className="mat-ripple mat-radio-ripple mat-mdc-focus-indicator" mat-ripple>
                                        <div className="mat-ripple-element mat-radio-persistent-ripple" />
                                      </div>
                                    </div>
                                    <label htmlFor="mat-radio-19-input"> Autumn </label>
                                  </div>
                                </mat-radio-button>
                                {/* */}
                              </mat-radio-group>
                              <div _ngcontent-oko-c427>
                                Your favorite season is:
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c427 className="row">
                        <div _ngcontent-oko-c427 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c427 className="card">
                            <div _ngcontent-oko-c427 className="header">
                              <h2 _ngcontent-oko-c427>Datepicker</h2>
                            </div>
                            <div _ngcontent-oko-c427 className="body">
                              <div _ngcontent-oko-c427 className="row">
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>Basic datepicker</h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-387 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-387 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-387 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-387">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-387">
                                          <label aria-owns="mat-input-88" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-387 ng-star-inserted" htmlFor="mat-input-88" id="mat-mdc-form-field-label-250" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-387">
                                              Choose a date
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c427 aria-haspopup="dialog" aria-invalid="false" aria-required="false" className="mat-datepicker-input mat-mdc-input-element ng-tns-c67-387 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" data-mat-calendar="mat-datepicker-13" id="mat-input-88" matinput />
                                          <mat-datepicker _ngcontent-oko-c427 className="ng-tns-c67-387">
                                          </mat-datepicker>
                                          {/* */}
                                        </div>
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-387 ng-star-inserted">
                                          <mat-datepicker-toggle _ngcontent-oko-c427 className="mat-datepicker-toggle ng-tns-c67-387" data-mat-calendar="mat-datepicker-13" matsuffix>
                                            <button aria-haspopup="dialog" aria-label="Open calendar" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button tabIndex={0} type="button">
                                              <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                              </span>
                                              <svg className="mat-datepicker-toggle-default-icon ng-star-inserted" fill="currentColor" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                                              </svg>
                                              {/* */}
                                              <span className="mat-mdc-focus-indicator">
                                              </span>
                                              <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                              </span>
                                              <span className="mat-mdc-button-touch-target">
                                              </span>
                                            </button>
                                          </mat-datepicker-toggle>
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-387 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-387">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-387 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-387" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c427 className="col-2" />
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>
                                    Datepicker start date
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-388 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-388 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-388 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-388">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-388">
                                          <label aria-owns="mat-input-89" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-388 ng-star-inserted" htmlFor="mat-input-89" id="mat-mdc-form-field-label-252" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-388">
                                              Choose a date
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c427 aria-haspopup="dialog" aria-invalid="false" aria-required="false" className="mat-datepicker-input mat-mdc-input-element ng-tns-c67-388 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" data-mat-calendar="mat-datepicker-14" id="mat-input-89" matinput />
                                          <mat-datepicker _ngcontent-oko-c427 className="ng-tns-c67-388" startview="year">
                                          </mat-datepicker>
                                          {/* */}
                                        </div>
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-388 ng-star-inserted">
                                          <mat-datepicker-toggle _ngcontent-oko-c427 className="mat-datepicker-toggle ng-tns-c67-388" data-mat-calendar="mat-datepicker-14" matsuffix>
                                            <button aria-haspopup="dialog" aria-label="Open calendar" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button tabIndex={0} type="button">
                                              <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                              </span>
                                              <svg className="mat-datepicker-toggle-default-icon ng-star-inserted" fill="currentColor" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                                              </svg>
                                              {/* */}
                                              <span className="mat-mdc-focus-indicator">
                                              </span>
                                              <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                              </span>
                                              <span className="mat-mdc-button-touch-target">
                                              </span>
                                            </button>
                                          </mat-datepicker-toggle>
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-388 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-388">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-388 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-388" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c427 className="row mt-5">
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>
                                    Datepicker selected value
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-389 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-389 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-389 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-389">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-389">
                                          <label aria-owns="mat-input-90" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-389 mdc-floating-label--float-above ng-star-inserted" htmlFor="mat-input-90" id="mat-mdc-form-field-label-254" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-389">
                                              Angular forms
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c427 aria-haspopup="dialog" aria-invalid="false" aria-required="false" className="mat-datepicker-input mat-mdc-input-element ng-tns-c67-389 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" data-mat-calendar="mat-datepicker-15" id="mat-input-90" matinput />
                                          <mat-datepicker _ngcontent-oko-c427 className="ng-tns-c67-389">
                                          </mat-datepicker>
                                          {/* */}
                                        </div>
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-389 ng-star-inserted">
                                          <mat-datepicker-toggle _ngcontent-oko-c427 className="mat-datepicker-toggle ng-tns-c67-389" data-mat-calendar="mat-datepicker-15" matsuffix>
                                            <button aria-haspopup="dialog" aria-label="Open calendar" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button tabIndex={0} type="button">
                                              <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                              </span>
                                              <svg className="mat-datepicker-toggle-default-icon ng-star-inserted" fill="currentColor" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                                              </svg>
                                              {/* */}
                                              <span className="mat-mdc-focus-indicator">
                                              </span>
                                              <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                              </span>
                                              <span className="mat-mdc-button-touch-target">
                                              </span>
                                            </button>
                                          </mat-datepicker-toggle>
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-389 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-389">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-389 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-389" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c427 className="col-2" />
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>
                                    Datepicker with min &amp; max validation
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-390 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-390 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-390 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-390">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-390">
                                          <label aria-owns="mat-input-91" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-390 ng-star-inserted" htmlFor="mat-input-91" id="mat-mdc-form-field-label-256" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-390">
                                              Choose a date
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c427 aria-haspopup="dialog" aria-invalid="false" aria-required="false" className="mat-datepicker-input mat-mdc-input-element ng-tns-c67-390 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" data-mat-calendar="mat-datepicker-16" id="mat-input-91" matinput max="2024-12-30" min="2017-12-31" />
                                          <mat-datepicker _ngcontent-oko-c427 className="ng-tns-c67-390">
                                          </mat-datepicker>
                                          {/* */}
                                        </div>
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-390 ng-star-inserted">
                                          <mat-datepicker-toggle _ngcontent-oko-c427 className="mat-datepicker-toggle ng-tns-c67-390" data-mat-calendar="mat-datepicker-16" matsuffix>
                                            <button aria-haspopup="dialog" aria-label="Open calendar" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button tabIndex={0} type="button">
                                              <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                              </span>
                                              <svg className="mat-datepicker-toggle-default-icon ng-star-inserted" fill="currentColor" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                                              </svg>
                                              {/* */}
                                              <span className="mat-mdc-focus-indicator">
                                              </span>
                                              <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                              </span>
                                              <span className="mat-mdc-button-touch-target">
                                              </span>
                                            </button>
                                          </mat-datepicker-toggle>
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-390 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-390">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-390 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-390" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c427 className="row mt-5">
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>
                                    Datepicker with filter validation
                                  </h6>
                                  <p _ngcontent-oko-c427>
                                    Prevent Saturday and Sunday from being selected
                                  </p>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-391 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-391 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-391 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-391">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-391">
                                          <label aria-owns="mat-input-92" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-391 ng-star-inserted" htmlFor="mat-input-92" id="mat-mdc-form-field-label-258" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-391">
                                              Choose a date
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c427 aria-haspopup="dialog" aria-invalid="false" aria-required="false" className="mat-datepicker-input mat-mdc-input-element ng-tns-c67-391 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" data-mat-calendar="mat-datepicker-17" id="mat-input-92" matinput />
                                          <mat-datepicker _ngcontent-oko-c427 className="ng-tns-c67-391">
                                          </mat-datepicker>
                                          {/* */}
                                        </div>
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-391 ng-star-inserted">
                                          <mat-datepicker-toggle _ngcontent-oko-c427 className="mat-datepicker-toggle ng-tns-c67-391" data-mat-calendar="mat-datepicker-17" matsuffix>
                                            <button aria-haspopup="dialog" aria-label="Open calendar" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button tabIndex={0} type="button">
                                              <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                              </span>
                                              <svg className="mat-datepicker-toggle-default-icon ng-star-inserted" fill="currentColor" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                                              </svg>
                                              {/* */}
                                              <span className="mat-mdc-focus-indicator">
                                              </span>
                                              <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                              </span>
                                              <span className="mat-mdc-button-touch-target">
                                              </span>
                                            </button>
                                          </mat-datepicker-toggle>
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-391 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-391">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-391 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-391" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c427 className="col-2" />
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>
                                    Open Datepicker on button click
                                  </h6>
                                  <p _ngcontent-oko-c427>
                                    Open date picket on button click
                                  </p>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field ng-tns-c67-392 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-392 mdc-text-field--filled mdc-text-field--no-label">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-392 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-392">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-392">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c427 aria-haspopup="dialog" aria-invalid="false" aria-required="false" className="mat-datepicker-input mat-mdc-input-element ng-tns-c67-392 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" data-mat-calendar="mat-datepicker-18" id="mat-input-93" matinput placeholder="Choose a date" />
                                          <mat-datepicker _ngcontent-oko-c427 className="ng-tns-c67-392">
                                          </mat-datepicker>
                                          {/* */}
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-392 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-392">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-392 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-392" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                  <button _ngcontent-oko-c427 className="msl-3 mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-primary mat-mdc-button-base" color="primary" mat-flat-button>
                                    <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                    </span>
                                    <span className="mdc-button__label"> Open </span>
                                    <span className="mat-mdc-focus-indicator"> </span>
                                    <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                    </span>
                                    <span className="mat-mdc-button-touch-target"> </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c427 className="row">
                        <div _ngcontent-oko-c427 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c427 className="card">
                            <div _ngcontent-oko-c427 className="header">
                              <h2 _ngcontent-oko-c427>Datetime picker</h2>
                            </div>
                            <div _ngcontent-oko-c427 className="body">
                              <div _ngcontent-oko-c427 className="row">
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>Basic datepicker</h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-393 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-393 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-393 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-393">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-393">
                                          <label aria-owns="mat-input-94" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-393 ng-star-inserted" htmlFor="mat-input-94" id="mat-mdc-form-field-label-262" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-393">
                                              Choose a date
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c427 aria-haspopup="true" aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-393 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-94" matinput />
                                          <owl-date-time _ngcontent-oko-c427 _nghost-oko-c346 className="ng-tns-c67-393">
                                          </owl-date-time>
                                          {/* */}
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-393 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-393">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-393 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-393" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c427 className="col-2" />
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>
                                    Datetime picker with icon
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-394 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-394 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-394 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-394">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-394">
                                          <label aria-owns="mat-input-95" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-394 ng-star-inserted" htmlFor="mat-input-95" id="mat-mdc-form-field-label-264" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-394">
                                              Choose a date
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c427 aria-haspopup="true" aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-394 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-95" matinput />
                                          <owl-date-time _ngcontent-oko-c427 _nghost-oko-c346 className="ng-tns-c67-394">
                                          </owl-date-time>
                                          {/* */}
                                        </div>
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-394 ng-star-inserted">
                                          <mat-icon _ngcontent-oko-c427 aria-hidden="true" className="mat-icon notranslate date-icon material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-394" data-mat-icon-type="font" matsuffix role="img">
                                            today
                                          </mat-icon>
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-394 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-394">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-394 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-394" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c427 className="row mt-5">
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>Time Picker</h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-395 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-395 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-395 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-395">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-395">
                                          <label aria-owns="mat-input-96" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-395 ng-star-inserted" htmlFor="mat-input-96" id="mat-mdc-form-field-label-266" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-395">
                                              Choose a time
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c427 aria-haspopup="true" aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-395 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-96" matinput />
                                          <owl-date-time _ngcontent-oko-c427 _nghost-oko-c346 className="ng-tns-c67-395">
                                          </owl-date-time>
                                          {/* */}
                                        </div>
                                        {/* */}
                                        <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-395 ng-star-inserted">
                                          <mat-icon _ngcontent-oko-c427 aria-hidden="true" className="mat-icon notranslate date-icon material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-395" data-mat-icon-type="font" matsuffix role="img">
                                            schedule
                                          </mat-icon>
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-395 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-395">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-395 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-395" />
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
                      <div _ngcontent-oko-c427 className="row">
                        <div _ngcontent-oko-c427 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c427 className="card">
                            <div _ngcontent-oko-c427 className="header">
                              <h2 _ngcontent-oko-c427>Select Item</h2>
                            </div>
                            <div _ngcontent-oko-c427 className="body">
                              <div _ngcontent-oko-c427 className="row">
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>Basic mat-select</h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-396 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-396 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-396 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-396">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-396">
                                          <label aria-owns="mat-select-72" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-396 ng-star-inserted" htmlFor="mat-select-72" id="mat-mdc-form-field-label-268" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-396">
                                              Favorite food
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <mat-select _ngcontent-oko-c427 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-268 mat-select-value-73" aria-required="false" className="mat-mdc-select ng-tns-c175-397 ng-tns-c67-396 mat-mdc-select-empty ng-star-inserted" id="mat-select-72" role="combobox" tabIndex={0}>
                                            <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-397">
                                              <div className="mat-mdc-select-value ng-tns-c175-397" id="mat-select-value-73">
                                                <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-397 ng-star-inserted">
                                                </span>
                                                {/* */}
                                                {/* */}
                                              </div>
                                              <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-397">
                                                <div className="mat-mdc-select-arrow ng-tns-c175-397">
                                                  <svg className="ng-tns-c175-397" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                    <path className="ng-tns-c175-397" d="M7 10l5 5 5-5z" />
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
                                      <div className="mdc-line-ripple ng-tns-c67-396 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-396">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-396 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-396" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c427 className="col-2" />
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>Basic native select</h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-398 mat-mdc-form-field-type-mat-native-select mat-form-field-appearance-fill mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-398 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-398 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-398">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-398">
                                          <label aria-owns="mat-input-97" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-398 mdc-floating-label--float-above ng-star-inserted" htmlFor="mat-input-97" id="mat-mdc-form-field-label-270" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-398">
                                              Cars
                                            </mat-label>
                                            <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-398 ng-star-inserted">
                                            </span>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <select _ngcontent-oko-c427 aria-invalid="false" aria-required="true" className="mat-mdc-input-element ng-tns-c67-398 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-97" matnativecontrol required>
                                            <option _ngcontent-oko-c427 value="volvo">
                                              Volvo
                                            </option>
                                            <option _ngcontent-oko-c427 value="saab">
                                              Saab
                                            </option>
                                            <option _ngcontent-oko-c427 value="mercedes">
                                              Mercedes
                                            </option>
                                            <option _ngcontent-oko-c427 value="audi">
                                              Audi
                                            </option>
                                          </select>
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-398 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-398">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-398 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-398" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c427 className="row mt-5">
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>Select Binding</h6>
                                  <form _ngcontent-oko-c427 className="ng-untouched ng-pristine ng-valid" noValidate>
                                    <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-399 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-399 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-399 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-399">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-399">
                                            <label aria-owns="mat-select-74" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-399 ng-star-inserted" htmlFor="mat-select-74" id="mat-mdc-form-field-label-272" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c427 className="ng-tns-c67-399">
                                                Favorite food
                                              </mat-label>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <mat-select _ngcontent-oko-c427 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-272 mat-select-value-75" aria-required="false" className="mat-mdc-select ng-tns-c175-400 ng-tns-c67-399 mat-mdc-select-empty ng-untouched ng-pristine ng-valid ng-star-inserted" id="mat-select-74" name="food" role="combobox" tabIndex={0}>
                                              <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-400">
                                                <div className="mat-mdc-select-value ng-tns-c175-400" id="mat-select-value-75">
                                                  <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-400 ng-star-inserted">
                                                  </span>
                                                  {/* */}
                                                  {/* */}
                                                </div>
                                                <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-400">
                                                  <div className="mat-mdc-select-arrow ng-tns-c175-400">
                                                    <svg className="ng-tns-c175-400" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                      <path className="ng-tns-c175-400" d="M7 10l5 5 5-5z" />
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
                                        <div className="mdc-line-ripple ng-tns-c67-399 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-399">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-399 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-399" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                    <p _ngcontent-oko-c427>Selected food:</p>
                                  </form>
                                </div>
                                <div _ngcontent-oko-c427 className="col-2" />
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>
                                    Native select binding
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-401 mat-mdc-form-field-type-mat-native-select mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-401 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-401 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-401">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-401">
                                          <label aria-owns="mat-input-98" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-401 ng-star-inserted" htmlFor="mat-input-98" id="mat-mdc-form-field-label-274" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-401">
                                              Favorite car
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <select _ngcontent-oko-c427 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-401 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-98" matnativecontrol name="car">
                                            <option _ngcontent-oko-c427 selected value />
                                            <option _ngcontent-oko-c427 className="ng-star-inserted" value="volvo">
                                              Volvo
                                            </option>
                                            <option _ngcontent-oko-c427 className="ng-star-inserted" value="saab">
                                              Saab
                                            </option>
                                            <option _ngcontent-oko-c427 className="ng-star-inserted" value="mercedes">
                                              Mercedes
                                            </option>
                                            {/* */}
                                          </select>
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-401 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-401">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-401 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-401" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                  <p _ngcontent-oko-c427>Selected car:</p>
                                </div>
                              </div>
                              <div _ngcontent-oko-c427 className="row mt-5">
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>
                                    Select Item Validation
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-402 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-402 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-402 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-402">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-402">
                                          <label aria-owns="mat-select-76" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-402 ng-star-inserted" htmlFor="mat-select-76" id="mat-mdc-form-field-label-276" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-402">
                                              Favorite animal
                                            </mat-label>
                                            <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-402 ng-star-inserted">
                                            </span>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <mat-select _ngcontent-oko-c427 aria-autocomplete="none" aria-describedby="mat-mdc-hint-0" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-276 mat-select-value-77" aria-required="true" className="mat-mdc-select ng-tns-c175-403 ng-tns-c67-402 mat-mdc-select-required mat-mdc-select-empty ng-untouched ng-pristine ng-invalid ng-star-inserted" id="mat-select-76" required role="combobox" tabIndex={0}>
                                            <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-403">
                                              <div className="mat-mdc-select-value ng-tns-c175-403" id="mat-select-value-77">
                                                <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-403 ng-star-inserted">
                                                </span>
                                                {/* */}
                                                {/* */}
                                              </div>
                                              <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-403">
                                                <div className="mat-mdc-select-arrow ng-tns-c175-403">
                                                  <svg className="ng-tns-c175-403" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                    <path className="ng-tns-c175-403" d="M7 10l5 5 5-5z" />
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
                                      <div className="mdc-line-ripple ng-tns-c67-402 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-402">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-402 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <mat-hint _ngcontent-oko-c427 className="mat-mdc-form-field-hint mat-mdc-form-field-bottom-align ng-tns-c67-402" id="mat-mdc-hint-0">
                                        </mat-hint>
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-402" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c427 className="col-2" />
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>
                                    Native select item validation
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-404 mat-mdc-form-field-type-mat-native-select mat-form-field-appearance-fill mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-404 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-404 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-404">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-404">
                                          <label aria-owns="mat-input-99" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-404 mdc-floating-label--float-above ng-star-inserted" htmlFor="mat-input-99" id="mat-mdc-form-field-label-278" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-404">
                                              Select your car (required)
                                            </mat-label>
                                            <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-404 ng-star-inserted">
                                            </span>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <select _ngcontent-oko-c427 aria-describedby="mat-mdc-hint-1" aria-required="true" className="mat-mdc-input-element ng-tns-c67-404 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-99" matnativecontrol required>
                                            <option _ngcontent-oko-c427 label="--select something --" />
                                            <option _ngcontent-oko-c427 value="saab">
                                              Saab
                                            </option>
                                            <option _ngcontent-oko-c427 value="mercedes">
                                              Mercedes
                                            </option>
                                            <option _ngcontent-oko-c427 value="audi">
                                              Audi
                                            </option>
                                          </select>
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-404 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-404">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-404 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <mat-hint _ngcontent-oko-c427 className="mat-mdc-form-field-hint mat-mdc-form-field-bottom-align ng-tns-c67-404" id="mat-mdc-hint-1">
                                          Select your favorite car here
                                        </mat-hint>
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-404" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c427 className="row mt-5">
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>
                                    Disable Select Item Option
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-405 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-405 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-405 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-405">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-405">
                                          <label aria-owns="mat-select-78" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-405 ng-star-inserted" htmlFor="mat-select-78" id="mat-mdc-form-field-label-280" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-405">
                                              Choose an option
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <mat-select _ngcontent-oko-c427 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-280 mat-select-value-79" aria-required="false" className="mat-mdc-select ng-tns-c175-406 ng-tns-c67-405 mat-mdc-select-empty ng-star-inserted" id="mat-select-78" role="combobox" tabIndex={0}>
                                            <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-406">
                                              <div className="mat-mdc-select-value ng-tns-c175-406" id="mat-select-value-79">
                                                <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-406 ng-star-inserted">
                                                </span>
                                                {/* */}
                                                {/* */}
                                              </div>
                                              <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-406">
                                                <div className="mat-mdc-select-arrow ng-tns-c175-406">
                                                  <svg className="ng-tns-c175-406" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                    <path className="ng-tns-c175-406" d="M7 10l5 5 5-5z" />
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
                                      <div className="mdc-line-ripple ng-tns-c67-405 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-405">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-405 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-405" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c427 className="col-2" />
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>
                                    Native Disable Select Item Option
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-407 mat-mdc-form-field-type-mat-native-select mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-407 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-407 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-407">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-407">
                                          <label aria-owns="mat-input-100" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-407 ng-star-inserted" htmlFor="mat-input-100" id="mat-mdc-form-field-label-282" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-407">
                                              Choose an option
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <select _ngcontent-oko-c427 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-407 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-100" matnativecontrol>
                                            <option _ngcontent-oko-c427 selected value />
                                            <option _ngcontent-oko-c427 value="volvo">
                                              Volvo
                                            </option>
                                            <option _ngcontent-oko-c427 disabled value="saab">
                                              Saab
                                            </option>
                                            <option _ngcontent-oko-c427 value="mercedes">
                                              Mercedes
                                            </option>
                                            <option _ngcontent-oko-c427 value="audi">
                                              Audi
                                            </option>
                                          </select>
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-407 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-407">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-407 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-407" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c427 className="row mt-5">
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>Multiple Select Item</h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-408 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-408 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-408 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-408">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-408">
                                          <label aria-owns="mat-select-80" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-408 ng-star-inserted" htmlFor="mat-select-80" id="mat-mdc-form-field-label-284" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-408">
                                              Toppings
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <mat-select _ngcontent-oko-c427 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-284 mat-select-value-81" aria-required="false" className="mat-mdc-select ng-tns-c175-409 ng-tns-c67-408 mat-mdc-select-empty mat-mdc-select-multiple ng-untouched ng-pristine ng-valid ng-star-inserted" id="mat-select-80" multiple role="combobox" tabIndex={0}>
                                            <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-409">
                                              <div className="mat-mdc-select-value ng-tns-c175-409" id="mat-select-value-81">
                                                <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-409 ng-star-inserted">
                                                </span>
                                                {/* */}
                                                {/* */}
                                              </div>
                                              <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-409">
                                                <div className="mat-mdc-select-arrow ng-tns-c175-409">
                                                  <svg className="ng-tns-c175-409" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                    <path className="ng-tns-c175-409" d="M7 10l5 5 5-5z" />
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
                                      <div className="mdc-line-ripple ng-tns-c67-408 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-408">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-408 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-408" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c427 className="col-2" />
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>
                                    Select with option groups
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-410 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-410 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-410 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-410">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-410">
                                          <label aria-owns="mat-select-82" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-410 ng-star-inserted" htmlFor="mat-select-82" id="mat-mdc-form-field-label-286" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-410">
                                              Pokemon
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <mat-select _ngcontent-oko-c427 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-286 mat-select-value-83" aria-required="false" className="mat-mdc-select ng-tns-c175-411 ng-tns-c67-410 mat-mdc-select-empty ng-untouched ng-pristine ng-valid ng-star-inserted" id="mat-select-82" role="combobox" tabIndex={0}>
                                            <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-411">
                                              <div className="mat-mdc-select-value ng-tns-c175-411" id="mat-select-value-83">
                                                <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-411 ng-star-inserted">
                                                </span>
                                                {/* */}
                                                {/* */}
                                              </div>
                                              <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-411">
                                                <div className="mat-mdc-select-arrow ng-tns-c175-411">
                                                  <svg className="ng-tns-c175-411" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                    <path className="ng-tns-c175-411" d="M7 10l5 5 5-5z" />
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
                                      <div className="mdc-line-ripple ng-tns-c67-410 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-410">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-410 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-410" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c427 className="row mt-5">
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>
                                    Select with custom trigger text
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-412 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-412 mdc-text-field--filled mdc-text-field--no-label">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-412 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-412">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-412">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <mat-select _ngcontent-oko-c427 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-select-value-85" aria-required="false" className="mat-mdc-select ng-tns-c175-413 ng-tns-c67-412 mat-mdc-select-empty mat-mdc-select-multiple ng-untouched ng-pristine ng-valid ng-star-inserted" id="mat-select-84" multiple placeholder="Toppings" role="combobox" tabIndex={0}>
                                            <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-413">
                                              <div className="mat-mdc-select-value ng-tns-c175-413" id="mat-select-value-85">
                                                <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-413 ng-star-inserted">
                                                  Toppings
                                                </span>
                                                {/* */}
                                                {/* */}
                                              </div>
                                              <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-413">
                                                <div className="mat-mdc-select-arrow ng-tns-c175-413">
                                                  <svg className="ng-tns-c175-413" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                    <path className="ng-tns-c175-413" d="M7 10l5 5 5-5z" />
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
                                      <div className="mdc-line-ripple ng-tns-c67-412 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-412">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-412 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-412" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c427 className="col-2" />
                                <div _ngcontent-oko-c427 className="col-5">
                                  <h6 _ngcontent-oko-c427>
                                    Select with a custom ErrorStateMatcher
                                  </h6>
                                  <mat-form-field _ngcontent-oko-c427 className="mat-mdc-form-field example-full-width ng-tns-c67-414 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-414 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-414 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-414">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-414">
                                          <label aria-owns="mat-select-86" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-414 ng-star-inserted mdc-floating-label--float-above" htmlFor="mat-select-86" id="mat-mdc-form-field-label-290" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c427 className="ng-tns-c67-414">
                                              Choose one
                                            </mat-label>
                                            <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-414 ng-star-inserted">
                                            </span>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <mat-select _ngcontent-oko-c427 aria-autocomplete="none" aria-describedby="mat-mdc-hint-2" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-290 mat-select-value-87" aria-required="true" className="mat-mdc-select ng-tns-c175-415 ng-tns-c67-414 mat-mdc-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" id="mat-select-86" role="combobox" tabIndex={0}>
                                            <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-415">
                                              <div className="mat-mdc-select-value ng-tns-c175-415" id="mat-select-value-87">
                                                {/* */}
                                                <span className="mat-mdc-select-value-text ng-tns-c175-415 ng-star-inserted">
                                                  <span className="mat-mdc-select-min-line ng-tns-c175-415 ng-star-inserted">
                                                    Valid option
                                                  </span>
                                                  {/* */}
                                                  {/* */}
                                                </span>
                                                {/* */}
                                              </div>
                                              <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-415">
                                                <div className="mat-mdc-select-arrow ng-tns-c175-415">
                                                  <svg className="ng-tns-c175-415" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                    <path className="ng-tns-c175-415" d="M7 10l5 5 5-5z" />
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
                                      <div className="mdc-line-ripple ng-tns-c67-414 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-414">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-414 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <mat-hint _ngcontent-oko-c427 className="mat-mdc-form-field-hint mat-mdc-form-field-bottom-align ng-tns-c67-414" id="mat-mdc-hint-2">
                                          Errors appear instantly!
                                        </mat-hint>
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-414" />
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
                      <div _ngcontent-oko-c427 className="row">
                        <div _ngcontent-oko-c427 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c427 className="card">
                            <div _ngcontent-oko-c427 className="header">
                              <h2 _ngcontent-oko-c427>Slide Toggle</h2>
                            </div>
                            <div _ngcontent-oko-c427 className="body">
                              <div _ngcontent-oko-c427 className="row">
                                <div _ngcontent-oko-c427 className="col-6">
                                  <h6 _ngcontent-oko-c427>Basic slide-toggles</h6>
                                  <mat-slide-toggle _ngcontent-oko-c427 className="mat-mdc-slide-toggle mat-accent" id="mat-mdc-slide-toggle-2">
                                    <div className="mdc-form-field">
                                      <button aria-checked="false" aria-labelledby="mat-mdc-slide-toggle-2-label" className="mdc-switch mdc-switch--unselected" id="mat-mdc-slide-toggle-2-button" role="switch" tabIndex={0} type="button">
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
                                      <label htmlFor="mat-mdc-slide-toggle-2-button" id="mat-mdc-slide-toggle-2-label">
                                        Slide me!
                                      </label>
                                    </div>
                                  </mat-slide-toggle>
                                </div>
                              </div>
                              <div _ngcontent-oko-c427 className="row mt-5">
                                <div _ngcontent-oko-c427 className="col-6">
                                  <h6 _ngcontent-oko-c427>Color slide-toggles</h6>
                                  <section _ngcontent-oko-c427 className="example-section">
                                    <label _ngcontent-oko-c427 className="example-margin">
                                      Color:
                                    </label>
                                    <mat-radio-group _ngcontent-oko-c427 className="mat-mdc-radio-group ng-untouched ng-pristine ng-valid" role="radiogroup">
                                      <mat-radio-button _ngcontent-oko-c427 className="mat-mdc-radio-button example-margin mat-accent" id="mat-radio-13" value="primary">
                                        <div className="mdc-form-field">
                                          <div className="mdc-radio">
                                            <div className="mat-mdc-radio-touch-target" />
                                            <input className="mdc-radio__native-control" id="mat-radio-13-input" name="mat-radio-group-11" tabIndex={-1} type="radio" defaultValue="primary" />
                                            <div className="mdc-radio__background">
                                              <div className="mdc-radio__outer-circle" />
                                              <div className="mdc-radio__inner-circle" />
                                            </div>
                                            <div className="mat-ripple mat-radio-ripple mat-mdc-focus-indicator" mat-ripple>
                                              <div className="mat-ripple-element mat-radio-persistent-ripple" />
                                            </div>
                                          </div>
                                          <label htmlFor="mat-radio-13-input">
                                            Primary
                                          </label>
                                        </div>
                                      </mat-radio-button>
                                      <mat-radio-button _ngcontent-oko-c427 className="mat-mdc-radio-button example-margin mat-accent mat-mdc-radio-checked" id="mat-radio-14" value="accent">
                                        <div className="mdc-form-field">
                                          <div className="mdc-radio">
                                            <div className="mat-mdc-radio-touch-target" />
                                            <input className="mdc-radio__native-control" id="mat-radio-14-input" name="mat-radio-group-11" tabIndex={0} type="radio" defaultValue="accent" />
                                            <div className="mdc-radio__background">
                                              <div className="mdc-radio__outer-circle" />
                                              <div className="mdc-radio__inner-circle" />
                                            </div>
                                            <div className="mat-ripple mat-radio-ripple mat-mdc-focus-indicator" mat-ripple>
                                              <div className="mat-ripple-element mat-radio-persistent-ripple" />
                                            </div>
                                          </div>
                                          <label htmlFor="mat-radio-14-input">
                                            Accent
                                          </label>
                                        </div>
                                      </mat-radio-button>
                                      <mat-radio-button _ngcontent-oko-c427 className="mat-mdc-radio-button example-margin mat-accent" id="mat-radio-15" value="warn">
                                        <div className="mdc-form-field">
                                          <div className="mdc-radio">
                                            <div className="mat-mdc-radio-touch-target" />
                                            <input className="mdc-radio__native-control" id="mat-radio-15-input" name="mat-radio-group-11" tabIndex={-1} type="radio" defaultValue="warn" />
                                            <div className="mdc-radio__background">
                                              <div className="mdc-radio__outer-circle" />
                                              <div className="mdc-radio__inner-circle" />
                                            </div>
                                            <div className="mat-ripple mat-radio-ripple mat-mdc-focus-indicator" mat-ripple>
                                              <div className="mat-ripple-element mat-radio-persistent-ripple" />
                                            </div>
                                          </div>
                                          <label htmlFor="mat-radio-15-input">
                                            Warn
                                          </label>
                                        </div>
                                      </mat-radio-button>
                                    </mat-radio-group>
                                  </section>
                                  <section _ngcontent-oko-c427 className="example-section">
                                    <mat-checkbox _ngcontent-oko-c427 className="mat-mdc-checkbox example-margin mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-191">
                                      <div className="mdc-form-field">
                                        <div className="mdc-checkbox">
                                          <div className="mat-mdc-checkbox-touch-target" />
                                          <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-191-input" tabIndex={0} type="checkbox" />
                                          <div className="mdc-checkbox__ripple" />
                                          <div className="mdc-checkbox__background">
                                            <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                              <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                            </svg>
                                            <div className="mdc-checkbox__mixedmark" />
                                          </div>
                                          <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                        </div>
                                        <label htmlFor="mat-mdc-checkbox-191-input">
                                          Checked
                                        </label>
                                      </div>
                                    </mat-checkbox>
                                  </section>
                                  <section _ngcontent-oko-c427 className="example-section">
                                    <mat-checkbox _ngcontent-oko-c427 className="mat-mdc-checkbox example-margin mat-accent ng-untouched ng-pristine ng-valid" id="mat-mdc-checkbox-192">
                                      <div className="mdc-form-field">
                                        <div className="mdc-checkbox">
                                          <div className="mat-mdc-checkbox-touch-target" />
                                          <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-192-input" tabIndex={0} type="checkbox" />
                                          <div className="mdc-checkbox__ripple" />
                                          <div className="mdc-checkbox__background">
                                            <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                              <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                            </svg>
                                            <div className="mdc-checkbox__mixedmark" />
                                          </div>
                                          <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                        </div>
                                        <label htmlFor="mat-mdc-checkbox-192-input">
                                          Disabled
                                        </label>
                                      </div>
                                    </mat-checkbox>
                                  </section>
                                  <h4 _ngcontent-oko-c427 className="example-h2">
                                    Result
                                  </h4>
                                  <section _ngcontent-oko-c427 className="example-section">
                                    <mat-slide-toggle _ngcontent-oko-c427 className="mat-mdc-slide-toggle example-margin mat-accent" id="mat-mdc-slide-toggle-3">
                                      <div className="mdc-form-field">
                                        <button aria-checked="false" aria-labelledby="mat-mdc-slide-toggle-3-label" className="mdc-switch mdc-switch--unselected" id="mat-mdc-slide-toggle-3-button" role="switch" tabIndex={0} type="button">
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
                                        <label htmlFor="mat-mdc-slide-toggle-3-button" id="mat-mdc-slide-toggle-3-label">
                                          Slide me!
                                        </label>
                                      </div>
                                    </mat-slide-toggle>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </app-form-controls>
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
  