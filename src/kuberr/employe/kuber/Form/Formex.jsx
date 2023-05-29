import React from "react"
import Drop from "../../../../Drop";

export default function Formex (){
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
                <app-form-examples _nghost-oko-c409 className="ng-star-inserted">
                  <section _ngcontent-oko-c409 className="content">
                    <div _ngcontent-oko-c409 className="content-block">
                      <div _ngcontent-oko-c409 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c409 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Form Examples
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
                                    Form Examples
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c409 className="row clearfix">
                        <div _ngcontent-oko-c409 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c409 className="card">
                            <div _ngcontent-oko-c409 className="header">
                              <h2 _ngcontent-oko-c409>Reactive Forms (Outline)</h2>
                            </div>
                            <div _ngcontent-oko-c409 className="body">
                              <form _ngcontent-oko-c409 className="register-form m-4 ng-untouched ng-pristine ng-invalid" noValidate>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-435 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-435 mdc-text-field--outlined">
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-435">
                                          <div className="mdc-notched-outline ng-tns-c67-435 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                            <div className="mdc-notched-outline__leading" />
                                            <div className="mdc-notched-outline__notch">
                                              <label aria-owns="mat-input-117" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-435 ng-star-inserted" htmlFor="mat-input-117" id="mat-mdc-form-field-label-326" matformfieldfloatinglabel style={{}}>
                                                <mat-label _ngcontent-oko-c409 className="ng-tns-c67-435">
                                                  First name
                                                </mat-label>
                                                <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-435 ng-star-inserted">
                                                </span>
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
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-435">
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-435 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="first" id="mat-input-117" matinput required />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-435 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-435" data-mat-icon-type="font" matsuffix role="img">
                                              face
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-435">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-435 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-435" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                  <div _ngcontent-oko-c409 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-436 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-436 mdc-text-field--outlined">
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-436">
                                          <div className="mdc-notched-outline ng-tns-c67-436 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                            <div className="mdc-notched-outline__leading" />
                                            <div className="mdc-notched-outline__notch">
                                              <label aria-owns="mat-input-118" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-436 ng-star-inserted" htmlFor="mat-input-118" id="mat-mdc-form-field-label-328" matformfieldfloatinglabel style={{}}>
                                                <mat-label _ngcontent-oko-c409 className="ng-tns-c67-436">
                                                  Last name
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
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-436">
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-436 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="last" id="mat-input-118" matinput />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-436 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-436" data-mat-icon-type="font" matsuffix role="img">
                                              face
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-436">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-436 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-436" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-437 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-437 mdc-text-field--outlined">
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-437">
                                          <div className="mdc-notched-outline ng-tns-c67-437 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                            <div className="mdc-notched-outline__leading" />
                                            <div className="mdc-notched-outline__notch">
                                              <label aria-owns="mat-input-119" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-437 ng-star-inserted" htmlFor="mat-input-119" id="mat-mdc-form-field-label-330" matformfieldfloatinglabel style={{}}>
                                                <mat-label _ngcontent-oko-c409 className="ng-tns-c67-437">
                                                  Password
                                                </mat-label>
                                                <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-437 ng-star-inserted">
                                                </span>
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
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-437">
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-437 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="password" id="mat-input-119" matinput required type="password" />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-437 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-437" data-mat-icon-type="font" matsuffix role="img">
                                              visibility_off
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-437">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-437 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-437" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-438 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-438 mdc-text-field--outlined">
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-438">
                                          <div className="mdc-notched-outline ng-tns-c67-438 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                            <div className="mdc-notched-outline__leading" />
                                            <div className="mdc-notched-outline__notch">
                                              <label aria-owns="mat-input-120" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-438 ng-star-inserted" htmlFor="mat-input-120" id="mat-mdc-form-field-label-332" matformfieldfloatinglabel style={{}}>
                                                <mat-label _ngcontent-oko-c409 className="ng-tns-c67-438">
                                                  Email
                                                </mat-label>
                                                <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-438 ng-star-inserted">
                                                </span>
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
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-438">
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-438 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="email" id="mat-input-120" matinput required />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-438 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-438" data-mat-icon-type="font" matsuffix role="img">
                                              email
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-438">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-438 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-438" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-439 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-439 mdc-text-field--outlined">
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-439">
                                          <div className="mdc-notched-outline ng-tns-c67-439 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                            <div className="mdc-notched-outline__leading" />
                                            <div className="mdc-notched-outline__notch">
                                              <label aria-owns="mat-input-121" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-439 ng-star-inserted" htmlFor="mat-input-121" id="mat-mdc-form-field-label-334" matformfieldfloatinglabel style={{}}>
                                                <mat-label _ngcontent-oko-c409 className="ng-tns-c67-439">
                                                  Address
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
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-439">
                                            {/* */}
                                            <textarea _ngcontent-oko-c409 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-439 ng-untouched ng-pristine ng-valid mat-mdc-form-field-textarea-control mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="address" id="mat-input-121" matinput defaultValue={""} />
                                          </div>
                                          {/* */}
                                          {/* */}
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-439">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-439 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-439" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-440 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-440 mdc-text-field--outlined">
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-440">
                                          <div className="mdc-notched-outline ng-tns-c67-440 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                            <div className="mdc-notched-outline__leading" />
                                            <div className="mdc-notched-outline__notch">
                                              <label aria-owns="mat-input-122" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-440 ng-star-inserted" htmlFor="mat-input-122" id="mat-mdc-form-field-label-336" matformfieldfloatinglabel style={{}}>
                                                <mat-label _ngcontent-oko-c409 className="ng-tns-c67-440">
                                                  City
                                                </mat-label>
                                                <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-440 ng-star-inserted">
                                                </span>
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
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-440">
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-440 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="city" id="mat-input-122" matinput required />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-440 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-440" data-mat-icon-type="font" matsuffix role="img">
                                              location_city
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-440">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-440 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-440" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                  <div _ngcontent-oko-c409 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-441 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-441 mdc-text-field--outlined">
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-441">
                                          <div className="mdc-notched-outline ng-tns-c67-441 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                            <div className="mdc-notched-outline__leading" />
                                            <div className="mdc-notched-outline__notch">
                                              <label aria-owns="mat-input-123" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-441 ng-star-inserted" htmlFor="mat-input-123" id="mat-mdc-form-field-label-338" matformfieldfloatinglabel style={{}}>
                                                <mat-label _ngcontent-oko-c409 className="ng-tns-c67-441">
                                                  State
                                                </mat-label>
                                                <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-441 ng-star-inserted">
                                                </span>
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
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-441">
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-441 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="state" id="mat-input-123" matinput required />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-441 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-441" data-mat-icon-type="font" matsuffix role="img">
                                              business
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-441">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-441 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-441" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-442 mat-mdc-form-field-type-mat-select mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-442 mdc-text-field--outlined">
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-442">
                                          <div className="mdc-notched-outline ng-tns-c67-442 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                            <div className="mdc-notched-outline__leading" />
                                            <div className="mdc-notched-outline__notch">
                                              <label aria-owns="mat-select-90" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-442 ng-star-inserted" htmlFor="mat-select-90" id="mat-mdc-form-field-label-340" matformfieldfloatinglabel style={{}}>
                                                <mat-label _ngcontent-oko-c409 className="ng-tns-c67-442">
                                                  Country
                                                </mat-label>
                                                <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-442 ng-star-inserted">
                                                </span>
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
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-442">
                                            {/* */}
                                            <mat-select _ngcontent-oko-c409 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-340 mat-select-value-91" aria-required="true" className="mat-mdc-select ng-tns-c175-443 ng-tns-c67-442 mat-mdc-select-required mat-mdc-select-empty ng-untouched ng-pristine ng-invalid ng-star-inserted" formcontrolname="country" id="mat-select-90" required role="combobox" tabIndex={0}>
                                              <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-443">
                                                <div className="mat-mdc-select-value ng-tns-c175-443" id="mat-select-value-91">
                                                  <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-443 ng-star-inserted">
                                                  </span>
                                                  {/* */}
                                                  {/* */}
                                                </div>
                                                <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-443">
                                                  <div className="mat-mdc-select-arrow ng-tns-c175-443">
                                                    <svg className="ng-tns-c175-443" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                      <path className="ng-tns-c175-443" d="M7 10l5 5 5-5z" />
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                              {/* */}
                                            </mat-select>
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-442 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-442" data-mat-icon-type="font" matsuffix role="img">
                                              flag
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-442">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-442 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-442" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                                    <mat-checkbox _ngcontent-oko-c409 className="mat-mdc-checkbox example-margin mat-accent ng-untouched ng-pristine ng-invalid" formcontrolname="termcondition" id="mat-mdc-checkbox-193">
                                      <div className="mdc-form-field">
                                        <div className="mdc-checkbox">
                                          <div className="mat-mdc-checkbox-touch-target" />
                                          <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-193-input" tabIndex={0} type="checkbox" />
                                          <div className="mdc-checkbox__ripple" />
                                          <div className="mdc-checkbox__background">
                                            <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                              <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                            </svg>
                                            <div className="mdc-checkbox__mixedmark" />
                                          </div>
                                          <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                        </div>
                                        <label htmlFor="mat-mdc-checkbox-193-input">
                                          I accept terms and conditions
                                        </label>
                                      </div>
                                    </mat-checkbox>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                                    <button _ngcontent-oko-c409 className="btn-space mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base" color="primary" disabled="true" mat-raised-button>
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                      </span>
                                      <span className="mdc-button__label"> Submit </span>
                                      <span className="mat-mdc-focus-indicator"> </span>
                                      <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                      </span>
                                      <span className="mat-mdc-button-touch-target">
                                      </span>
                                    </button>
                                    <button _ngcontent-oko-c409 className="mdc-button mdc-button--raised mat-mdc-raised-button mat-warn mat-mdc-button-base" color="warn" mat-raised-button type="button">
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                      </span>
                                      <span className="mdc-button__label"> Cancel </span>
                                      <span className="mat-mdc-focus-indicator"> </span>
                                      <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                      </span>
                                      <span className="mat-mdc-button-touch-target">
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c409 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c409 className="card">
                            <div _ngcontent-oko-c409 className="header">
                              <h2 _ngcontent-oko-c409>Reactive Forms (Fill)</h2>
                            </div>
                            <div _ngcontent-oko-c409 className="body">
                              <form _ngcontent-oko-c409 className="m-4 ng-untouched ng-pristine ng-invalid" noValidate>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-444 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-444 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-444 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-444">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-444">
                                            <label aria-owns="mat-input-124" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-444 ng-star-inserted" htmlFor="mat-input-124" id="mat-mdc-form-field-label-342" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-444">
                                                First name
                                              </mat-label>
                                              <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-444 ng-star-inserted">
                                              </span>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-444 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="first" id="mat-input-124" matinput required />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-444 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-444" data-mat-icon-type="font" matsuffix role="img">
                                              face
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-444 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-444">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-444 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-444" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                  <div _ngcontent-oko-c409 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-445 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-445 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-445 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-445">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-445">
                                            <label aria-owns="mat-input-125" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-445 ng-star-inserted" htmlFor="mat-input-125" id="mat-mdc-form-field-label-344" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-445">
                                                Last name
                                              </mat-label>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-445 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="last" id="mat-input-125" matinput />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-445 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-445" data-mat-icon-type="font" matsuffix role="img">
                                              face
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-445 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-445">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-445 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-445" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-446 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-446 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-446 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-446">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-446">
                                            <label aria-owns="mat-input-126" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-446 ng-star-inserted" htmlFor="mat-input-126" id="mat-mdc-form-field-label-346" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-446">
                                                Password
                                              </mat-label>
                                              <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-446 ng-star-inserted">
                                              </span>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-446 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="password" id="mat-input-126" matinput required type="password" />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-446 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-446" data-mat-icon-type="font" matsuffix role="img">
                                              visibility_off
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-446 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-446">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-446 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-446" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-447 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-447 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-447 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-447">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-447">
                                            <label aria-owns="mat-input-127" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-447 ng-star-inserted" htmlFor="mat-input-127" id="mat-mdc-form-field-label-348" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-447">
                                                Email
                                              </mat-label>
                                              <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-447 ng-star-inserted">
                                              </span>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-447 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="email" id="mat-input-127" matinput required />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-447 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-447" data-mat-icon-type="font" matsuffix role="img">
                                              email
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-447 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-447">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-447 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-447" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-448 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-448 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-448 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-448">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-448">
                                            <label aria-owns="mat-input-128" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-448 ng-star-inserted" htmlFor="mat-input-128" id="mat-mdc-form-field-label-350" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-448">
                                                Address
                                              </mat-label>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <textarea _ngcontent-oko-c409 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-448 ng-untouched ng-pristine ng-valid mat-mdc-form-field-textarea-control mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="address" id="mat-input-128" matinput defaultValue={""} />
                                          </div>
                                          {/* */}
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-448 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-448">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-448 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-448" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-449 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-449 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-449 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-449">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-449">
                                            <label aria-owns="mat-input-129" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-449 ng-star-inserted" htmlFor="mat-input-129" id="mat-mdc-form-field-label-352" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-449">
                                                City
                                              </mat-label>
                                              <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-449 ng-star-inserted">
                                              </span>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-449 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="city" id="mat-input-129" matinput required />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-449 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-449" data-mat-icon-type="font" matsuffix role="img">
                                              location_city
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-449 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-449">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-449 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-449" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                  <div _ngcontent-oko-c409 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-450 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-450 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-450 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-450">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-450">
                                            <label aria-owns="mat-input-130" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-450 ng-star-inserted" htmlFor="mat-input-130" id="mat-mdc-form-field-label-354" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-450">
                                                State
                                              </mat-label>
                                              <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-450 ng-star-inserted">
                                              </span>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-450 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="state" id="mat-input-130" matinput required />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-450 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-450" data-mat-icon-type="font" matsuffix role="img">
                                              business
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-450 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-450">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-450 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-450" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                                    <mat-form-field _ngcontent-oko-c409 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-451 mat-mdc-form-field-type-mat-select mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-451 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-451 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-451">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-451">
                                            <label aria-owns="mat-select-92" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-451 ng-star-inserted" htmlFor="mat-select-92" id="mat-mdc-form-field-label-356" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-451">
                                                Country
                                              </mat-label>
                                              <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-451 ng-star-inserted">
                                              </span>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <mat-select _ngcontent-oko-c409 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-356 mat-select-value-93" aria-required="true" className="mat-mdc-select ng-tns-c175-452 ng-tns-c67-451 mat-mdc-select-required mat-mdc-select-empty ng-untouched ng-pristine ng-invalid ng-star-inserted" formcontrolname="country" id="mat-select-92" required role="combobox" tabIndex={0}>
                                              <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-452">
                                                <div className="mat-mdc-select-value ng-tns-c175-452" id="mat-select-value-93">
                                                  <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-452 ng-star-inserted">
                                                  </span>
                                                  {/* */}
                                                  {/* */}
                                                </div>
                                                <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-452">
                                                  <div className="mat-mdc-select-arrow ng-tns-c175-452">
                                                    <svg className="ng-tns-c175-452" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                      <path className="ng-tns-c175-452" d="M7 10l5 5 5-5z" />
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                              {/* */}
                                            </mat-select>
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-451 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-451" data-mat-icon-type="font" matsuffix role="img">
                                              flag
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-451 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-451">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-451 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-451" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                                    <mat-checkbox _ngcontent-oko-c409 className="mat-mdc-checkbox example-margin mat-accent ng-untouched ng-pristine ng-invalid" formcontrolname="termcondition" id="mat-mdc-checkbox-194">
                                      <div className="mdc-form-field">
                                        <div className="mdc-checkbox">
                                          <div className="mat-mdc-checkbox-touch-target" />
                                          <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-194-input" tabIndex={0} type="checkbox" />
                                          <div className="mdc-checkbox__ripple" />
                                          <div className="mdc-checkbox__background">
                                            <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                              <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                            </svg>
                                            <div className="mdc-checkbox__mixedmark" />
                                          </div>
                                          <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                        </div>
                                        <label htmlFor="mat-mdc-checkbox-194-input">
                                          I accept terms and conditions
                                        </label>
                                      </div>
                                    </mat-checkbox>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                                    <button _ngcontent-oko-c409 className="btn-space mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base" color="primary" disabled="true" mat-raised-button>
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                      </span>
                                      <span className="mdc-button__label"> Submit </span>
                                      <span className="mat-mdc-focus-indicator"> </span>
                                      <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                      </span>
                                      <span className="mat-mdc-button-touch-target">
                                      </span>
                                    </button>
                                    <button _ngcontent-oko-c409 className="mdc-button mdc-button--raised mat-mdc-raised-button mat-warn mat-mdc-button-base" color="warn" mat-raised-button type="button">
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                      </span>
                                      <span className="mdc-button__label"> Cancel </span>
                                      <span className="mat-mdc-focus-indicator"> </span>
                                      <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                      </span>
                                      <span className="mat-mdc-button-touch-target">
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c409 className="row clearfix">
                        <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c409 className="card">
                            <div _ngcontent-oko-c409 className="header">
                              <h2 _ngcontent-oko-c409>
                                Reactive Forms (Standard)
                              </h2>
                            </div>
                            <div _ngcontent-oko-c409 className="body">
                              <form _ngcontent-oko-c409 className="m-4 ng-untouched ng-pristine ng-invalid" noValidate>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
                                    <mat-form-field _ngcontent-oko-c409 className="mat-mdc-form-field example-full-width ng-tns-c67-453 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-453 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-453 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-453">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-453">
                                            <label aria-owns="mat-input-131" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-453 ng-star-inserted" htmlFor="mat-input-131" id="mat-mdc-form-field-label-358" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-453">
                                                First name
                                              </mat-label>
                                              <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-453 ng-star-inserted">
                                              </span>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-453 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="first" id="mat-input-131" matinput required />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-453 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-453" data-mat-icon-type="font" matsuffix role="img">
                                              face
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-453 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-453">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-453 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-453" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                  <div _ngcontent-oko-c409 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
                                    <mat-form-field _ngcontent-oko-c409 className="mat-mdc-form-field example-full-width ng-tns-c67-454 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-454 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-454 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-454">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-454">
                                            <label aria-owns="mat-input-132" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-454 ng-star-inserted" htmlFor="mat-input-132" id="mat-mdc-form-field-label-360" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-454">
                                                Last name
                                              </mat-label>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-454 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="last" id="mat-input-132" matinput />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-454 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-454" data-mat-icon-type="font" matsuffix role="img">
                                              face
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-454 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-454">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-454 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-454" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                    <mat-form-field _ngcontent-oko-c409 className="mat-mdc-form-field example-full-width ng-tns-c67-455 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-455 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-455 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-455">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-455">
                                            <label aria-owns="mat-input-133" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-455 ng-star-inserted" htmlFor="mat-input-133" id="mat-mdc-form-field-label-362" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-455">
                                                Password
                                              </mat-label>
                                              <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-455 ng-star-inserted">
                                              </span>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-455 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="password" id="mat-input-133" matinput required type="password" />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-455 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-455" data-mat-icon-type="font" matsuffix role="img">
                                              visibility_off
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-455 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-455">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-455 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-455" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                    <mat-form-field _ngcontent-oko-c409 className="mat-mdc-form-field example-full-width ng-tns-c67-456 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-456 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-456 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-456">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-456">
                                            <label aria-owns="mat-input-134" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-456 ng-star-inserted" htmlFor="mat-input-134" id="mat-mdc-form-field-label-364" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-456">
                                                Email
                                              </mat-label>
                                              <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-456 ng-star-inserted">
                                              </span>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-456 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="email" id="mat-input-134" matinput required />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-456 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-456" data-mat-icon-type="font" matsuffix role="img">
                                              email
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-456 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-456">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-456 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-456" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                    <mat-form-field _ngcontent-oko-c409 className="mat-mdc-form-field example-full-width ng-tns-c67-457 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-457 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-457 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-457">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-457">
                                            <label aria-owns="mat-input-135" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-457 ng-star-inserted" htmlFor="mat-input-135" id="mat-mdc-form-field-label-366" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-457">
                                                Address
                                              </mat-label>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <textarea _ngcontent-oko-c409 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-457 ng-untouched ng-pristine ng-valid mat-mdc-form-field-textarea-control mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="address" id="mat-input-135" matinput defaultValue={""} />
                                          </div>
                                          {/* */}
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-457 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-457">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-457 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-457" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
                                    <mat-form-field _ngcontent-oko-c409 className="mat-mdc-form-field example-full-width ng-tns-c67-458 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-458 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-458 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-458">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-458">
                                            <label aria-owns="mat-input-136" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-458 ng-star-inserted" htmlFor="mat-input-136" id="mat-mdc-form-field-label-368" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-458">
                                                City
                                              </mat-label>
                                              <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-458 ng-star-inserted">
                                              </span>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-458 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="city" id="mat-input-136" matinput required />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-458 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-458" data-mat-icon-type="font" matsuffix role="img">
                                              location_city
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-458 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-458">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-458 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-458" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                  <div _ngcontent-oko-c409 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
                                    <mat-form-field _ngcontent-oko-c409 className="mat-mdc-form-field example-full-width ng-tns-c67-459 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-459 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-459 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-459">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-459">
                                            <label aria-owns="mat-input-137" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-459 ng-star-inserted" htmlFor="mat-input-137" id="mat-mdc-form-field-label-370" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-459">
                                                State
                                              </mat-label>
                                              <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-459 ng-star-inserted">
                                              </span>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <input _ngcontent-oko-c409 aria-required="true" className="mat-mdc-input-element ng-tns-c67-459 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="state" id="mat-input-137" matinput required />
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-459 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-459" data-mat-icon-type="font" matsuffix role="img">
                                              business
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-459 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-459">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-459 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-459" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                    <mat-form-field _ngcontent-oko-c409 className="mat-mdc-form-field example-full-width ng-tns-c67-460 mat-mdc-form-field-type-mat-select mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted">
                                      {/* */}
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-460 mdc-text-field--filled">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-460 ng-star-inserted" />
                                        {/* */}
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-460">
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-460">
                                            <label aria-owns="mat-select-94" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-460 ng-star-inserted" htmlFor="mat-select-94" id="mat-mdc-form-field-label-372" matformfieldfloatinglabel>
                                              <mat-label _ngcontent-oko-c409 className="ng-tns-c67-460">
                                                Country
                                              </mat-label>
                                              <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-460 ng-star-inserted">
                                              </span>
                                              {/* */}
                                            </label>
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <mat-select _ngcontent-oko-c409 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-372 mat-select-value-95" aria-required="true" className="mat-mdc-select ng-tns-c175-461 ng-tns-c67-460 mat-mdc-select-required mat-mdc-select-empty ng-untouched ng-pristine ng-invalid ng-star-inserted" formcontrolname="country" id="mat-select-94" required role="combobox" tabIndex={0}>
                                              <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-461">
                                                <div className="mat-mdc-select-value ng-tns-c175-461" id="mat-select-value-95">
                                                  <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-461 ng-star-inserted">
                                                  </span>
                                                  {/* */}
                                                  {/* */}
                                                </div>
                                                <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-461">
                                                  <div className="mat-mdc-select-arrow ng-tns-c175-461">
                                                    <svg className="ng-tns-c175-461" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                      <path className="ng-tns-c175-461" d="M7 10l5 5 5-5z" />
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                              {/* */}
                                            </mat-select>
                                          </div>
                                          {/* */}
                                          <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-460 ng-star-inserted">
                                            <mat-icon _ngcontent-oko-c409 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-460" data-mat-icon-type="font" matsuffix role="img">
                                              flag
                                            </mat-icon>
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-460 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                        {/* */}
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-460">
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-460 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-460" />
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                    <mat-checkbox _ngcontent-oko-c409 className="mat-mdc-checkbox example-margin mat-accent ng-untouched ng-pristine ng-invalid" formcontrolname="termcondition" id="mat-mdc-checkbox-195">
                                      <div className="mdc-form-field">
                                        <div className="mdc-checkbox">
                                          <div className="mat-mdc-checkbox-touch-target" />
                                          <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-195-input" tabIndex={0} type="checkbox" />
                                          <div className="mdc-checkbox__ripple" />
                                          <div className="mdc-checkbox__background">
                                            <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                              <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                            </svg>
                                            <div className="mdc-checkbox__mixedmark" />
                                          </div>
                                          <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                        </div>
                                        <label htmlFor="mat-mdc-checkbox-195-input">
                                          I accept terms and conditions
                                        </label>
                                      </div>
                                    </mat-checkbox>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c409 className="row">
                                  <div _ngcontent-oko-c409 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                    <button _ngcontent-oko-c409 className="btn-space mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base" color="primary" disabled="true" mat-raised-button>
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                      </span>
                                      <span className="mdc-button__label"> Submit </span>
                                      <span className="mat-mdc-focus-indicator"> </span>
                                      <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                      </span>
                                      <span className="mat-mdc-button-touch-target">
                                      </span>
                                    </button>
                                    <button _ngcontent-oko-c409 className="mdc-button mdc-button--raised mat-mdc-raised-button mat-warn mat-mdc-button-base" color="warn" mat-raised-button type="button">
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                      </span>
                                      <span className="mdc-button__label"> Cancel </span>
                                      <span className="mat-mdc-focus-indicator"> </span>
                                      <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                      </span>
                                      <span className="mat-mdc-button-touch-target">
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </app-form-examples>
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
  