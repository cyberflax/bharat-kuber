import React from "react"
import Drop from "../../Drop";

export default function Tabs (){
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
                <app-tabs _nghost-oko-c379 className="ng-star-inserted">
                  <section _ngcontent-oko-c379 className="content">
                    <div _ngcontent-oko-c379 className="content-block">
                      <div _ngcontent-oko-c379 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c379 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Tabs
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
                                    UI
                                  </li>
                                  {/* */}
                                  <li _ngcontent-oko-c141 className="breadcrumb-item active">
                                    Tabs
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c379 className="row">
                        <div _ngcontent-oko-c379 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div _ngcontent-oko-c379 className="card">
                            <div _ngcontent-oko-c379 className="header">
                              <h2 _ngcontent-oko-c379>Basic Tab Examples</h2>
                            </div>
                            <div _ngcontent-oko-c379 className="body">
                              <mat-tab-group _ngcontent-oko-c379 className="mat-mdc-tab-group mat-primary mat-mdc-tab-group-stretch-tabs">
                                <mat-tab-header className="mat-mdc-tab-header">
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                  <div className="mat-mdc-tab-label-container">
                                    <div className="mat-mdc-tab-list" role="tablist" style={{}}>
                                      <div className="mat-mdc-tab-labels">
                                        <div aria-controls="mat-tab-content-5-0" aria-disabled="false" aria-posinset={1} aria-selected="true" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted mdc-tab-indicator--active" id="mat-tab-label-5-0" mattablabelwrapper role="tab" tabIndex={0}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              First
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        <div aria-controls="mat-tab-content-5-1" aria-disabled="false" aria-posinset={2} aria-selected="false" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-5-1" mattablabelwrapper role="tab" tabIndex={-1}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              Second
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        <div aria-controls="mat-tab-content-5-2" aria-disabled="false" aria-posinset={3} aria-selected="false" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-5-2" mattablabelwrapper role="tab" tabIndex={-1}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              Third
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        {/* */}
                                      </div>
                                    </div>
                                  </div>
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                </mat-tab-header>
                                <div className="mat-mdc-tab-body-wrapper">
                                  <mat-tab-body aria-labelledby="mat-tab-label-5-0" className="mat-mdc-tab-body ng-tns-c218-358 mat-mdc-tab-body-active ng-star-inserted" id="mat-tab-content-5-0" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-358 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"none","-ms-transform":"none","transform":"none"}}>
                                      <br _ngcontent-oko-c379 className="ng-star-inserted" style={{}} />
                                      <b _ngcontent-oko-c379 className="ng-star-inserted" style={{}}>
                                        Home Content
                                      </b>
                                      <p _ngcontent-oko-c379 className="ng-star-inserted" style={{}}>
                                        Lorem ipsum dolor sit amet, ut duo atqui
                                        exerci dicunt, ius impedit mediocritatem an.
                                        Pri ut tation electram moderatius. Per te
                                        suavitate democritum. Duis nemore probatus ne
                                        quo, ad liber essent aliquid pro. Et eos
                                        nusquam accumsan, vide mentitum fabellas ne
                                        est, eu munere gubergren sadipscing mel.
                                      </p>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  <mat-tab-body aria-labelledby="mat-tab-label-5-1" className="mat-mdc-tab-body ng-tns-c218-359 ng-star-inserted" id="mat-tab-content-5-1" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-359 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"translate3d(100%, 0px, 0px)","-ms-transform":"translate3d(100%, 0px, 0px)","transform":"translate3d(100%, 0px, 0px)","min-height":"1px","visibility":"hidden"}}>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  <mat-tab-body aria-labelledby="mat-tab-label-5-2" className="mat-mdc-tab-body ng-tns-c218-360 ng-star-inserted" id="mat-tab-content-5-2" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-360 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"translate3d(100%, 0px, 0px)","-ms-transform":"translate3d(100%, 0px, 0px)","transform":"translate3d(100%, 0px, 0px)","min-height":"1px","visibility":"hidden"}}>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  {/* */}
                                </div>
                              </mat-tab-group>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c379 className="row">
                        <div _ngcontent-oko-c379 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div _ngcontent-oko-c379 className="card">
                            <div _ngcontent-oko-c379 className="header">
                              <h2 _ngcontent-oko-c379>Tab With Icons</h2>
                            </div>
                            <div _ngcontent-oko-c379 className="body">
                              <mat-tab-group _ngcontent-oko-c379 className="mat-mdc-tab-group mat-primary mat-mdc-tab-group-stretch-tabs">
                                <mat-tab-header className="mat-mdc-tab-header">
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                  <div className="mat-mdc-tab-label-container">
                                    <div className="mat-mdc-tab-list" role="tablist" style={{}}>
                                      <div className="mat-mdc-tab-labels">
                                        <div aria-controls="mat-tab-content-6-0" aria-disabled="false" aria-posinset={1} aria-selected="true" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted mdc-tab-indicator--active" id="mat-tab-label-6-0" mattablabelwrapper role="tab" tabIndex={0}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              <mat-icon _ngcontent-oko-c379 aria-hidden="true" className="mat-icon notranslate example-tab-icon msr-2 material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" role="img">
                                                thumb_up
                                              </mat-icon>
                                              First
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        <div aria-controls="mat-tab-content-6-1" aria-disabled="false" aria-posinset={2} aria-selected="false" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-6-1" mattablabelwrapper role="tab" tabIndex={-1}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              <mat-icon _ngcontent-oko-c379 aria-hidden="true" className="mat-icon notranslate example-tab-icon msr-2 material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" role="img">
                                                thumb_up
                                              </mat-icon>
                                              Second
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        <div aria-controls="mat-tab-content-6-2" aria-disabled="false" aria-posinset={3} aria-selected="false" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-6-2" mattablabelwrapper role="tab" tabIndex={-1}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              <mat-icon _ngcontent-oko-c379 aria-hidden="true" className="mat-icon notranslate example-tab-icon msr-2 material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" role="img">
                                                thumb_up
                                              </mat-icon>
                                              Third
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        {/* */}
                                      </div>
                                    </div>
                                  </div>
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                </mat-tab-header>
                                <div className="mat-mdc-tab-body-wrapper">
                                  <mat-tab-body aria-labelledby="mat-tab-label-6-0" className="mat-mdc-tab-body ng-tns-c218-361 mat-mdc-tab-body-active ng-star-inserted" id="mat-tab-content-6-0" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-361 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"none","-ms-transform":"none","transform":"none"}}>
                                      {/* */}
                                      <br _ngcontent-oko-c379 className="ng-star-inserted" style={{}} />
                                      <b _ngcontent-oko-c379 className="ng-star-inserted" style={{}}>
                                        Home Content
                                      </b>
                                      <p _ngcontent-oko-c379 className="ng-star-inserted" style={{}}>
                                        Lorem ipsum dolor sit amet, ut duo atqui
                                        exerci dicunt, ius impedit mediocritatem an.
                                        Pri ut tation electram moderatius. Per te
                                        suavitate democritum. Duis nemore probatus ne
                                        quo, ad liber essent aliquid pro. Et eos
                                        nusquam accumsan, vide mentitum fabellas ne
                                        est, eu munere gubergren sadipscing mel.
                                      </p>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  <mat-tab-body aria-labelledby="mat-tab-label-6-1" className="mat-mdc-tab-body ng-tns-c218-362 ng-star-inserted" id="mat-tab-content-6-1" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-362 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"translate3d(100%, 0px, 0px)","-ms-transform":"translate3d(100%, 0px, 0px)","transform":"translate3d(100%, 0px, 0px)","min-height":"1px","visibility":"hidden"}}>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  <mat-tab-body aria-labelledby="mat-tab-label-6-2" className="mat-mdc-tab-body ng-tns-c218-363 ng-star-inserted" id="mat-tab-content-6-2" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-363 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"translate3d(100%, 0px, 0px)","-ms-transform":"translate3d(100%, 0px, 0px)","transform":"translate3d(100%, 0px, 0px)","min-height":"1px","visibility":"hidden"}}>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  {/* */}
                                </div>
                              </mat-tab-group>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c379 className="row">
                        <div _ngcontent-oko-c379 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div _ngcontent-oko-c379 className="card">
                            <div _ngcontent-oko-c379 className="header">
                              <h2 _ngcontent-oko-c379>
                                Tab group with dynamic height based on tab contents
                              </h2>
                            </div>
                            <div _ngcontent-oko-c379 className="body">
                              <mat-tab-group _ngcontent-oko-c379 className="mat-mdc-tab-group mat-primary mat-mdc-tab-group-dynamic-height mat-mdc-tab-group-stretch-tabs" dynamicheight>
                                <mat-tab-header className="mat-mdc-tab-header">
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                  <div className="mat-mdc-tab-label-container">
                                    <div className="mat-mdc-tab-list" role="tablist" style={{}}>
                                      <div className="mat-mdc-tab-labels">
                                        <div aria-controls="mat-tab-content-7-0" aria-disabled="false" aria-posinset={1} aria-selected="true" aria-setsize={2} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted mdc-tab-indicator--active" id="mat-tab-label-7-0" mattablabelwrapper role="tab" tabIndex={0}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              Short tab
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        <div aria-controls="mat-tab-content-7-1" aria-disabled="false" aria-posinset={2} aria-selected="false" aria-setsize={2} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-7-1" mattablabelwrapper role="tab" tabIndex={-1}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              Long tab
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        {/* */}
                                      </div>
                                    </div>
                                  </div>
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                </mat-tab-header>
                                <div className="mat-mdc-tab-body-wrapper">
                                  <mat-tab-body aria-labelledby="mat-tab-label-7-0" className="mat-mdc-tab-body ng-tns-c218-364 mat-mdc-tab-body-active ng-star-inserted" id="mat-tab-content-7-0" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-364 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"none","-ms-transform":"none","transform":"none"}}>
                                      <div _ngcontent-oko-c379 className="example-small-box mat-elevation-z4 ng-star-inserted" style={{}}>
                                        Small content
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  <mat-tab-body aria-labelledby="mat-tab-label-7-1" className="mat-mdc-tab-body ng-tns-c218-365 ng-star-inserted" id="mat-tab-content-7-1" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-365 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"translate3d(100%, 0px, 0px)","-ms-transform":"translate3d(100%, 0px, 0px)","transform":"translate3d(100%, 0px, 0px)","min-height":"1px","visibility":"hidden"}}>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  {/* */}
                                </div>
                              </mat-tab-group>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c379 className="row">
                        <div _ngcontent-oko-c379 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div _ngcontent-oko-c379 className="card">
                            <div _ngcontent-oko-c379 className="header">
                              <h2 _ngcontent-oko-c379>
                                Tab group with dynamically changing tabs
                              </h2>
                            </div>
                            <div _ngcontent-oko-c379 className="body">
                              <mat-form-field _ngcontent-oko-c379 className="mat-mdc-form-field ng-tns-c67-357 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                                {/* */}
                                <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-357 mdc-text-field--filled">
                                  <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-357 ng-star-inserted" />
                                  {/* */}
                                  <div className="mat-mdc-form-field-flex ng-tns-c67-357">
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                    <div className="mat-mdc-form-field-infix ng-tns-c67-357">
                                      <label aria-owns="mat-input-81" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-357 mdc-floating-label--float-above ng-star-inserted" htmlFor="mat-input-81" id="mat-mdc-form-field-label-230" matformfieldfloatinglabel>
                                        <mat-label _ngcontent-oko-c379 className="ng-tns-c67-357">
                                          Selected tab index
                                        </mat-label>
                                        {/* */}
                                      </label>
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                      <input _ngcontent-oko-c379 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-357 mat-mdc-form-field-input-control mdc-text-field__input ng-untouched ng-pristine ng-valid cdk-text-field-autofill-monitored" id="mat-input-81" matinput type="number" />
                                    </div>
                                    {/* */}
                                    {/* */}
                                  </div>
                                  <div className="mdc-line-ripple ng-tns-c67-357 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                  {/* */}
                                </div>
                                <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-357">
                                  {/* */}
                                  <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-357 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                    {/* */}
                                    <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-357" />
                                  </div>
                                  {/* */}
                                </div>
                              </mat-form-field>
                              <div _ngcontent-oko-c379 className="mb-3">
                                <button _ngcontent-oko-c379 className="example-add-tab-button msr-2 mdc-button mdc-button--raised mat-mdc-raised-button mat-unthemed mat-mdc-button-base" mat-raised-button>
                                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                  </span>
                                  <span className="mdc-button__label"> Add new tab </span>
                                  <span className="mat-mdc-focus-indicator"> </span>
                                  <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                  </span>
                                  <span className="mat-mdc-button-touch-target"> </span>
                                </button>
                                <mat-checkbox _ngcontent-oko-c379 className="mat-mdc-checkbox mat-accent" id="mat-mdc-checkbox-186">
                                  <div className="mdc-form-field">
                                    <div className="mdc-checkbox">
                                      <div className="mat-mdc-checkbox-touch-target" />
                                      <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-186-input" tabIndex={0} type="checkbox" />
                                      <div className="mdc-checkbox__ripple" />
                                      <div className="mdc-checkbox__background">
                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                          <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                        </svg>
                                        <div className="mdc-checkbox__mixedmark" />
                                      </div>
                                      <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                    </div>
                                    <label htmlFor="mat-mdc-checkbox-186-input">
                                      Select tab after adding
                                    </label>
                                  </div>
                                </mat-checkbox>
                              </div>
                              <mat-tab-group _ngcontent-oko-c379 className="mat-mdc-tab-group mat-primary mat-mdc-tab-group-stretch-tabs">
                                <mat-tab-header className="mat-mdc-tab-header">
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                  <div className="mat-mdc-tab-label-container">
                                    <div className="mat-mdc-tab-list" role="tablist" style={{}}>
                                      <div className="mat-mdc-tab-labels">
                                        <div aria-controls="mat-tab-content-8-0" aria-disabled="false" aria-posinset={1} aria-selected="true" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted mdc-tab-indicator--active" id="mat-tab-label-8-0" mattablabelwrapper role="tab" tabIndex={0}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              First
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        <div aria-controls="mat-tab-content-8-1" aria-disabled="false" aria-posinset={2} aria-selected="false" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-8-1" mattablabelwrapper role="tab" tabIndex={-1}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              Second
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        <div aria-controls="mat-tab-content-8-2" aria-disabled="false" aria-posinset={3} aria-selected="false" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-8-2" mattablabelwrapper role="tab" tabIndex={-1}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              Third
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        {/* */}
                                      </div>
                                    </div>
                                  </div>
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                </mat-tab-header>
                                <div className="mat-mdc-tab-body-wrapper">
                                  <mat-tab-body aria-labelledby="mat-tab-label-8-0" className="mat-mdc-tab-body ng-tns-c218-366 mat-mdc-tab-body-active ng-star-inserted" id="mat-tab-content-8-0" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-366 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"none","-ms-transform":"none","transform":"none"}}>
                                      <br _ngcontent-oko-c379 className="ng-star-inserted" style={{}} />
                                      Contents for First tab
                                      <button _ngcontent-oko-c379 className="example-delete-tab-button mdc-button mdc-button--raised mat-mdc-raised-button mat-unthemed mat-mdc-button-base ng-star-inserted" mat-raised-button style={{}}>
                                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                        </span>
                                        <span className="mdc-button__label">
                                          Delete Tab
                                        </span>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  <mat-tab-body aria-labelledby="mat-tab-label-8-1" className="mat-mdc-tab-body ng-tns-c218-367 ng-star-inserted" id="mat-tab-content-8-1" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-367 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"translate3d(100%, 0px, 0px)","-ms-transform":"translate3d(100%, 0px, 0px)","transform":"translate3d(100%, 0px, 0px)","min-height":"1px","visibility":"hidden"}}>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  <mat-tab-body aria-labelledby="mat-tab-label-8-2" className="mat-mdc-tab-body ng-tns-c218-368 ng-star-inserted" id="mat-tab-content-8-2" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-368 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"translate3d(100%, 0px, 0px)","-ms-transform":"translate3d(100%, 0px, 0px)","transform":"translate3d(100%, 0px, 0px)","min-height":"1px","visibility":"hidden"}}>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  {/* */}
                                </div>
                              </mat-tab-group>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c379 className="row">
                        <div _ngcontent-oko-c379 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div _ngcontent-oko-c379 className="card">
                            <div _ngcontent-oko-c379 className="header">
                              <h2 _ngcontent-oko-c379>
                                Tab group with the headers on the bottom
                              </h2>
                            </div>
                            <div _ngcontent-oko-c379 className="body">
                              <mat-tab-group _ngcontent-oko-c379 className="mat-mdc-tab-group mat-primary mat-mdc-tab-group-inverted-header mat-mdc-tab-group-stretch-tabs" headerposition="below">
                                <mat-tab-header className="mat-mdc-tab-header">
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                  <div className="mat-mdc-tab-label-container">
                                    <div className="mat-mdc-tab-list" role="tablist" style={{}}>
                                      <div className="mat-mdc-tab-labels">
                                        <div aria-controls="mat-tab-content-9-0" aria-disabled="false" aria-posinset={1} aria-selected="true" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted mdc-tab-indicator--active" id="mat-tab-label-9-0" mattablabelwrapper role="tab" tabIndex={0}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              First
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        <div aria-controls="mat-tab-content-9-1" aria-disabled="false" aria-posinset={2} aria-selected="false" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-9-1" mattablabelwrapper role="tab" tabIndex={-1}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              Second
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        <div aria-controls="mat-tab-content-9-2" aria-disabled="false" aria-posinset={3} aria-selected="false" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-9-2" mattablabelwrapper role="tab" tabIndex={-1}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              Third
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        {/* */}
                                      </div>
                                    </div>
                                  </div>
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                </mat-tab-header>
                                <div className="mat-mdc-tab-body-wrapper">
                                  <mat-tab-body aria-labelledby="mat-tab-label-9-0" className="mat-mdc-tab-body ng-tns-c218-369 mat-mdc-tab-body-active ng-star-inserted" id="mat-tab-content-9-0" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-369 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"none","-ms-transform":"none","transform":"none"}}>
                                      Content 1
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  <mat-tab-body aria-labelledby="mat-tab-label-9-1" className="mat-mdc-tab-body ng-tns-c218-370 ng-star-inserted" id="mat-tab-content-9-1" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-370 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"translate3d(100%, 0px, 0px)","-ms-transform":"translate3d(100%, 0px, 0px)","transform":"translate3d(100%, 0px, 0px)","min-height":"1px","visibility":"hidden"}}>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  <mat-tab-body aria-labelledby="mat-tab-label-9-2" className="mat-mdc-tab-body ng-tns-c218-371 ng-star-inserted" id="mat-tab-content-9-2" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-371 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"translate3d(100%, 0px, 0px)","-ms-transform":"translate3d(100%, 0px, 0px)","transform":"translate3d(100%, 0px, 0px)","min-height":"1px","visibility":"hidden"}}>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  {/* */}
                                </div>
                              </mat-tab-group>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c379 className="row">
                        <div _ngcontent-oko-c379 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div _ngcontent-oko-c379 className="card">
                            <div _ngcontent-oko-c379 className="header">
                              <h2 _ngcontent-oko-c379>
                                Tab group with stretched labels
                              </h2>
                            </div>
                            <div _ngcontent-oko-c379 className="body">
                              <mat-tab-group _ngcontent-oko-c379 className="mat-mdc-tab-group example-stretched-tabs mat-elevation-z4 mat-primary mat-mdc-tab-group-stretch-tabs" mat-stretch-tabs>
                                <mat-tab-header className="mat-mdc-tab-header">
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                  <div className="mat-mdc-tab-label-container">
                                    <div className="mat-mdc-tab-list" role="tablist" style={{}}>
                                      <div className="mat-mdc-tab-labels">
                                        <div aria-controls="mat-tab-content-10-0" aria-disabled="false" aria-posinset={1} aria-selected="true" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted mdc-tab-indicator--active" id="mat-tab-label-10-0" mattablabelwrapper role="tab" tabIndex={0}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              First
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        <div aria-controls="mat-tab-content-10-1" aria-disabled="false" aria-posinset={2} aria-selected="false" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-10-1" mattablabelwrapper role="tab" tabIndex={-1}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              Second
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        <div aria-controls="mat-tab-content-10-2" aria-disabled="false" aria-posinset={3} aria-selected="false" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-10-2" mattablabelwrapper role="tab" tabIndex={-1}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              Third
                                              {/* */}
                                              {/* */}
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        {/* */}
                                      </div>
                                    </div>
                                  </div>
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                </mat-tab-header>
                                <div className="mat-mdc-tab-body-wrapper">
                                  <mat-tab-body aria-labelledby="mat-tab-label-10-0" className="mat-mdc-tab-body ng-tns-c218-372 mat-mdc-tab-body-active ng-star-inserted" id="mat-tab-content-10-0" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-372 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"none","-ms-transform":"none","transform":"none"}}>
                                      Content 1
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  <mat-tab-body aria-labelledby="mat-tab-label-10-1" className="mat-mdc-tab-body ng-tns-c218-373 ng-star-inserted" id="mat-tab-content-10-1" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-373 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"translate3d(100%, 0px, 0px)","-ms-transform":"translate3d(100%, 0px, 0px)","transform":"translate3d(100%, 0px, 0px)","min-height":"1px","visibility":"hidden"}}>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  <mat-tab-body aria-labelledby="mat-tab-label-10-2" className="mat-mdc-tab-body ng-tns-c218-374 ng-star-inserted" id="mat-tab-content-10-2" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-374 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"translate3d(100%, 0px, 0px)","-ms-transform":"translate3d(100%, 0px, 0px)","transform":"translate3d(100%, 0px, 0px)","min-height":"1px","visibility":"hidden"}}>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  {/* */}
                                </div>
                              </mat-tab-group>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </app-tabs>
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
  