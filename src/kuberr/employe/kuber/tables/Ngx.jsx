import React from "react"
import Drop from "../../../../Drop";

export default function Ngx (){
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
                <app-ngx-datatable _nghost-oko-c458 className="ng-star-inserted">
                  <section _ngcontent-oko-c458 className="content">
                    <div _ngcontent-oko-c458 className="content-block">
                      <div _ngcontent-oko-c458 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c458 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    ngx Datatable
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
                                    Tables
                                  </li>
                                  {/* */}
                                  <li _ngcontent-oko-c141 className="breadcrumb-item active">
                                    ngx Datatable
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c458 className="row clearfix">
                        <div _ngcontent-oko-c458 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div _ngcontent-oko-c458 className="card">
                            <div _ngcontent-oko-c458 className="body">
                              <div _ngcontent-oko-c458 className="row">
                                <div _ngcontent-oko-c458 className="col-sm-12">
                                  <div _ngcontent-oko-c458 className="ngxTableHeader">
                                    <ul _ngcontent-oko-c458 className="header-buttons-left ms-0 mb-0">
                                      <li _ngcontent-oko-c458 className="dropdown">
                                        <h2 _ngcontent-oko-c458>
                                          <strong _ngcontent-oko-c458>
                                            Advance Table
                                          </strong>
                                        </h2>
                                      </li>
                                      <li _ngcontent-oko-c458 className="dropdown m-l-20">
                                        <label _ngcontent-oko-c458 htmlFor="search-input">
                                          <i _ngcontent-oko-c458 className="material-icons search-icon">
                                            search
                                          </i>
                                        </label>
                                        <input _ngcontent-oko-c458 aria-label="Search box" className="browser-default search-field" placeholder="Search" type="text" />
                                      </li>
                                    </ul>
                                    <ul _ngcontent-oko-c458 className="header-buttons">
                                      <li _ngcontent-oko-c458>
                                        <button _ngcontent-oko-c458 className="mdc-fab mdc-fab--mini mat-mdc-mini-fab mat-primary mat-mdc-button-base" color="primary" mat-mini-fab>
                                          <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple">
                                          </span>
                                          <mat-icon _ngcontent-oko-c458 aria-hidden="true" className="mat-icon notranslate col-white material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                            add
                                          </mat-icon>
                                          <span className="mdc-button__label"> </span>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                  <ngx-datatable _ngcontent-oko-c458 className="ngx-datatable material fixed-header fixed-row virtualized">
                                    <div className="visible" role="table" visibilityobserver>
                                      <datatable-header className="datatable-header ng-star-inserted" role="rowgroup" style={{"height":"50px","width":"100%"}}>
                                        <div className="datatable-header-inner" orderable role="row" style={{"width":"920px"}}>
                                          <div className="datatable-row-left ng-star-inserted" style={{"width":"0px"}}>
                                            {/* */}
                                          </div>
                                          <div className="datatable-row-center ng-star-inserted" style={{"-webkit-transform":"translate3d(0px, 0px, 0px)","-ms-transform":"translate3d(0px, 0px, 0px)","transform":"translate3d(0px, 0px, 0px)","backface-visibility":"hidden","width":"920px"}}>
                                            <datatable-header-cell className="datatable-header-cell resizeable ng-star-inserted" draggable long-press resizeable role="columnheader" style={{"width":"65px"}} title="Image">
                                              <div className="datatable-header-cell-template-wrap">
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-header-cell-wrapper ng-star-inserted">
                                                  <span className="datatable-header-cell-label draggable">
                                                    Image
                                                  </span>
                                                </span>
                                                {/* */}
                                                {/* */}
                                                <span> </span>
                                              </div>
                                              <span className="resize-handle"> </span>
                                            </datatable-header-cell>
                                            <datatable-header-cell className="datatable-header-cell resizeable sortable ng-star-inserted" draggable long-press resizeable role="columnheader" style={{"width":"95px"}} title="First Name">
                                              <div className="datatable-header-cell-template-wrap">
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-header-cell-wrapper ng-star-inserted">
                                                  <span className="datatable-header-cell-label draggable">
                                                    First Name
                                                  </span>
                                                </span>
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-icon-sort-unset sort-btn">
                                                </span>
                                              </div>
                                              <span className="resize-handle"> </span>
                                            </datatable-header-cell>
                                            <datatable-header-cell className="datatable-header-cell resizeable sortable ng-star-inserted" draggable long-press resizeable role="columnheader" style={{"width":"95px"}} title="Last Name">
                                              <div className="datatable-header-cell-template-wrap">
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-header-cell-wrapper ng-star-inserted">
                                                  <span className="datatable-header-cell-label draggable">
                                                    Last Name
                                                  </span>
                                                </span>
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-icon-sort-unset sort-btn">
                                                </span>
                                              </div>
                                              <span className="resize-handle"> </span>
                                            </datatable-header-cell>
                                            <datatable-header-cell className="datatable-header-cell resizeable sortable ng-star-inserted" draggable long-press resizeable role="columnheader" style={{"width":"85px"}} title="Gender">
                                              <div className="datatable-header-cell-template-wrap">
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-header-cell-wrapper ng-star-inserted">
                                                  <span className="datatable-header-cell-label draggable">
                                                    Gender
                                                  </span>
                                                </span>
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-icon-sort-unset sort-btn">
                                                </span>
                                              </div>
                                              <span className="resize-handle"> </span>
                                            </datatable-header-cell>
                                            <datatable-header-cell className="datatable-header-cell resizeable sortable ng-star-inserted" draggable long-press resizeable role="columnheader" style={{"width":"165px"}} title="Phone">
                                              <div className="datatable-header-cell-template-wrap">
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-header-cell-wrapper ng-star-inserted">
                                                  <span className="datatable-header-cell-label draggable">
                                                    Phone
                                                  </span>
                                                </span>
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-icon-sort-unset sort-btn">
                                                </span>
                                              </div>
                                              <span className="resize-handle"> </span>
                                            </datatable-header-cell>
                                            <datatable-header-cell className="datatable-header-cell resizeable sortable ng-star-inserted" draggable long-press resizeable role="columnheader" style={{"width":"165px"}} title="Email">
                                              <div className="datatable-header-cell-template-wrap">
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-header-cell-wrapper ng-star-inserted">
                                                  <span className="datatable-header-cell-label draggable">
                                                    Email
                                                  </span>
                                                </span>
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-icon-sort-unset sort-btn">
                                                </span>
                                              </div>
                                              <span className="resize-handle"> </span>
                                            </datatable-header-cell>
                                            <datatable-header-cell className="datatable-header-cell resizeable sortable ng-star-inserted" draggable long-press resizeable role="columnheader" style={{"width":"165px"}} title="Address">
                                              <div className="datatable-header-cell-template-wrap">
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-header-cell-wrapper ng-star-inserted">
                                                  <span className="datatable-header-cell-label draggable">
                                                    Address
                                                  </span>
                                                </span>
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-icon-sort-unset sort-btn">
                                                </span>
                                              </div>
                                              <span className="resize-handle"> </span>
                                            </datatable-header-cell>
                                            <datatable-header-cell className="datatable-header-cell resizeable ng-star-inserted" draggable long-press resizeable role="columnheader" style={{"width":"85px"}} title="Actions">
                                              <div className="datatable-header-cell-template-wrap">
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-header-cell-wrapper ng-star-inserted">
                                                  <span className="datatable-header-cell-label draggable">
                                                    Actions
                                                  </span>
                                                </span>
                                                {/* */}
                                                {/* */}
                                                <span> </span>
                                              </div>
                                              <span className="resize-handle"> </span>
                                            </datatable-header-cell>
                                            {/* */}
                                          </div>
                                          <div className="datatable-row-right ng-star-inserted" style={{"-webkit-transform":"translate3d(0px, 0px, 0px)","-ms-transform":"translate3d(0px, 0px, 0px)","transform":"translate3d(0px, 0px, 0px)","backface-visibility":"hidden","width":"0px"}}>
                                            {/* */}
                                          </div>
                                          {/* */}
                                        </div>
                                      </datatable-header>
                                      {/* */}
                                      <datatable-body className="datatable-body" role="rowgroup" style={{"width":"100%","height":"auto"}}>
                                        {/* */}
                                        <datatable-selection>
                                          <datatable-scroller className="datatable-scroll ng-star-inserted" style={{"width":"920px"}}>
                                            {/* */}
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-even ng-star-inserted" role="row" style={{"height":"60px","width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"65px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <img _ngcontent-oko-c458 src="../assets/images/user/user6.jpg" width={40} />
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Darlene">
                                                        Darlene
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Riggs">
                                                        Riggs
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="female">
                                                        female
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="+1 (811) 538-3408">
                                                        +1 (811) 538-3408
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="example@test.com">
                                                        example@test.com
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="406 Mill Avenue">
                                                        406 Mill Avenue
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <span _ngcontent-oko-c458 className="ng-star-inserted">
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            mode_edit
                                                          </i>
                                                        </button>
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            delete
                                                          </i>
                                                        </button>
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-odd ng-star-inserted" role="row" style={{"height":"60px","width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"65px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <img _ngcontent-oko-c458 src="../assets/images/user/user3.jpg" width={40} />
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Head">
                                                        Head
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Newton">
                                                        Newton
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="male">
                                                        male
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="+1 (847) 585-2042">
                                                        +1 (847) 585-2042
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="example@test.com">
                                                        example@test.com
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="316 Monitor Street">
                                                        316 Monitor Street
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <span _ngcontent-oko-c458 className="ng-star-inserted">
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            mode_edit
                                                          </i>
                                                        </button>
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            delete
                                                          </i>
                                                        </button>
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-even ng-star-inserted" role="row" style={{"height":"60px","width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"65px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <img _ngcontent-oko-c458 src="../assets/images/user/user8.jpg" width={40} />
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Desiree">
                                                        Desiree
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Schneider">
                                                        Schneider
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="female">
                                                        female
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="+1 (995) 549-2754">
                                                        +1 (995) 549-2754
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="example@test.com">
                                                        example@test.com
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="267 Pacific Street">
                                                        267 Pacific Street
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <span _ngcontent-oko-c458 className="ng-star-inserted">
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            mode_edit
                                                          </i>
                                                        </button>
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            delete
                                                          </i>
                                                        </button>
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-odd ng-star-inserted" role="row" style={{"height":"60px","width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"65px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <img _ngcontent-oko-c458 src="../assets/images/user/user5.jpg" width={40} />
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Holman">
                                                        Holman
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Mann">
                                                        Mann
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="male">
                                                        male
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="+1 (975) 430-3063">
                                                        +1 (975) 430-3063
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="example@test.com">
                                                        example@test.com
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="268 Taaffe Place">
                                                        268 Taaffe Place
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <span _ngcontent-oko-c458 className="ng-star-inserted">
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            mode_edit
                                                          </i>
                                                        </button>
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            delete
                                                          </i>
                                                        </button>
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-even ng-star-inserted" role="row" style={{"height":"60px","width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"65px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <img _ngcontent-oko-c458 src="../assets/images/user/user3.jpg" width={40} />
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Stephens">
                                                        Stephens
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Vega">
                                                        Vega
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="male">
                                                        male
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="+1 (841) 561-3826">
                                                        +1 (841) 561-3826
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="example@test.com">
                                                        example@test.com
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="315 Dahl Court">
                                                        315 Dahl Court
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <span _ngcontent-oko-c458 className="ng-star-inserted">
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            mode_edit
                                                          </i>
                                                        </button>
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            delete
                                                          </i>
                                                        </button>
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-odd ng-star-inserted" role="row" style={{"height":"60px","width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"65px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <img _ngcontent-oko-c458 src="../assets/images/user/user10.jpg" width={40} />
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Cassie">
                                                        Cassie
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Abbott">
                                                        Abbott
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="female">
                                                        female
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="+1 (874) 592-2349">
                                                        +1 (874) 592-2349
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="example@test.com">
                                                        example@test.com
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="944 Clark Street">
                                                        944 Clark Street
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <span _ngcontent-oko-c458 className="ng-star-inserted">
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            mode_edit
                                                          </i>
                                                        </button>
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            delete
                                                          </i>
                                                        </button>
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-even ng-star-inserted" role="row" style={{"height":"60px","width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"65px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <img _ngcontent-oko-c458 src="../assets/images/user/user9.jpg" width={40} />
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Romero">
                                                        Romero
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Pierce">
                                                        Pierce
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="male">
                                                        male
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="+1 (954) 511-2933">
                                                        +1 (954) 511-2933
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="example@test.com">
                                                        example@test.com
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="898 Irving Place">
                                                        898 Irving Place
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <span _ngcontent-oko-c458 className="ng-star-inserted">
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            mode_edit
                                                          </i>
                                                        </button>
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            delete
                                                          </i>
                                                        </button>
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-odd ng-star-inserted" role="row" style={{"height":"60px","width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"65px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <img _ngcontent-oko-c458 src="../assets/images/user/user3.jpg" width={40} />
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Juanita">
                                                        Juanita
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Norris">
                                                        Norris
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="female">
                                                        female
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="+1 (914) 512-2265">
                                                        +1 (914) 512-2265
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="example@test.com">
                                                        example@test.com
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="474 Wakeman Place">
                                                        474 Wakeman Place
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <span _ngcontent-oko-c458 className="ng-star-inserted">
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            mode_edit
                                                          </i>
                                                        </button>
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            delete
                                                          </i>
                                                        </button>
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-even ng-star-inserted" role="row" style={{"height":"60px","width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"65px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <img _ngcontent-oko-c458 src="../assets/images/user/user6.jpg" width={40} />
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Duke">
                                                        Duke
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Sargent">
                                                        Sargent
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="male">
                                                        male
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="+1 (916) 556-3683">
                                                        +1 (916) 556-3683
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="example@test.com">
                                                        example@test.com
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="818 Bragg Street">
                                                        818 Bragg Street
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <span _ngcontent-oko-c458 className="ng-star-inserted">
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            mode_edit
                                                          </i>
                                                        </button>
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            delete
                                                          </i>
                                                        </button>
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-odd ng-star-inserted" role="row" style={{"height":"60px","width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"65px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <img _ngcontent-oko-c458 src="../assets/images/user/user9.jpg" width={40} />
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Selena">
                                                        Selena
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"95px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="West">
                                                        West
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="female">
                                                        female
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="+1 (878) 551-2618">
                                                        +1 (878) 551-2618
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="example@test.com">
                                                        example@test.com
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"165px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="364 Greenwood">
                                                        364 Greenwood
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"85px","height":"60px"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      {/* */}
                                                      <span _ngcontent-oko-c458 className="ng-star-inserted">
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            mode_edit
                                                          </i>
                                                        </button>
                                                        <button _ngcontent-oko-c458 className="btn tblActnBtn h-auto">
                                                          <i _ngcontent-oko-c458 className="material-icons">
                                                            delete
                                                          </i>
                                                        </button>
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            {/* */}
                                            {/* */}
                                          </datatable-scroller>
                                          {/* */}
                                          {/* */}
                                        </datatable-selection>
                                      </datatable-body>
                                      <datatable-footer className="datatable-footer ng-star-inserted">
                                        <div className="datatable-footer-inner" style={{"height":"50px"}}>
                                          {/* */}
                                          <div className="page-count ng-star-inserted">
                                            {/* */}
                                            47 total
                                          </div>
                                          {/* */}
                                          <datatable-pager className="datatable-pager ng-star-inserted">
                                            <ul className="pager">
                                              <li className="disabled">
                                                <a aria-label="go to first page" href="javascript:void(0)" role="button">
                                                  <i className="datatable-icon-prev"> </i>
                                                </a>
                                              </li>
                                              <li className="disabled">
                                                <a aria-label="go to previous page" href="javascript:void(0)" role="button">
                                                  <i className="datatable-icon-left"> </i>
                                                </a>
                                              </li>
                                              <li aria-label="page 1" className="pages active ng-star-inserted" role="button">
                                                <a href="javascript:void(0)"> 1 </a>
                                              </li>
                                              <li aria-label="page 2" className="pages ng-star-inserted" role="button">
                                                <a href="javascript:void(0)"> 2 </a>
                                              </li>
                                              <li aria-label="page 3" className="pages ng-star-inserted" role="button">
                                                <a href="javascript:void(0)"> 3 </a>
                                              </li>
                                              <li aria-label="page 4" className="pages ng-star-inserted" role="button">
                                                <a href="javascript:void(0)"> 4 </a>
                                              </li>
                                              <li aria-label="page 5" className="pages ng-star-inserted" role="button">
                                                <a href="javascript:void(0)"> 5 </a>
                                              </li>
                                              {/* */}
                                              <li className>
                                                <a aria-label="go to next page" href="javascript:void(0)" role="button">
                                                  <i className="datatable-icon-right">
                                                  </i>
                                                </a>
                                              </li>
                                              <li className>
                                                <a aria-label="go to last page" href="javascript:void(0)" role="button">
                                                  <i className="datatable-icon-skip"> </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </datatable-pager>
                                          {/* */}
                                        </div>
                                      </datatable-footer>
                                      {/* */}
                                    </div>
                                  </ngx-datatable>
                                  {/* */}
                                  {/* */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c458 className="row clearfix">
                        <div _ngcontent-oko-c458 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div _ngcontent-oko-c458 className="card">
                            <div _ngcontent-oko-c458 className="header">
                              <h2 _ngcontent-oko-c458>
                                <strong _ngcontent-oko-c458> ngx </strong>
                                Simple Example
                              </h2>
                            </div>
                            <div _ngcontent-oko-c458 className="body">
                              <div _ngcontent-oko-c458 className="row">
                                <div _ngcontent-oko-c458 className="col-sm-12">
                                  <mat-form-field _ngcontent-oko-c458 appearance="fill" className="mat-mdc-form-field ng-tns-c67-482 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                    {/* */}
                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-482 mdc-text-field--filled">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-482 ng-star-inserted" />
                                      {/* */}
                                      <div className="mat-mdc-form-field-flex ng-tns-c67-482">
                                        {/* */}
                                        {/* */}
                                        {/* */}
                                        <div className="mat-mdc-form-field-infix ng-tns-c67-482">
                                          <label aria-owns="mat-input-152" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-482 ng-star-inserted" htmlFor="mat-input-152" id="mat-mdc-form-field-label-406" matformfieldfloatinglabel>
                                            <mat-label _ngcontent-oko-c458 className="ng-tns-c67-482">
                                              Search Here...
                                            </mat-label>
                                            {/* */}
                                          </label>
                                          {/* */}
                                          {/* */}
                                          {/* */}
                                          <input _ngcontent-oko-c458 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-482 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-152" matinput />
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-482 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                      {/* */}
                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-482">
                                      {/* */}
                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-482 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1"}}>
                                        {/* */}
                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-482" />
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-form-field>
                                  <ngx-datatable _ngcontent-oko-c458 className="ngx-datatable material fixed-header virtualized">
                                    <div className="visible" role="table" visibilityobserver>
                                      <datatable-header className="datatable-header ng-star-inserted" role="rowgroup" style={{"height":"50px","width":"100%"}}>
                                        <div className="datatable-header-inner" orderable role="row" style={{"width":"920px"}}>
                                          <div className="datatable-row-left ng-star-inserted" style={{"width":"0px"}}>
                                            {/* */}
                                          </div>
                                          <div className="datatable-row-center ng-star-inserted" style={{"-webkit-transform":"translate3d(0px, 0px, 0px)","-ms-transform":"translate3d(0px, 0px, 0px)","transform":"translate3d(0px, 0px, 0px)","backface-visibility":"hidden","width":"920px"}}>
                                            <datatable-header-cell className="datatable-header-cell resizeable sortable ng-star-inserted" draggable long-press resizeable role="columnheader" style={{"width":"306.667px"}} title="First Name">
                                              <div className="datatable-header-cell-template-wrap">
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-header-cell-wrapper ng-star-inserted">
                                                  <span className="datatable-header-cell-label draggable">
                                                    First Name
                                                  </span>
                                                </span>
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-icon-sort-unset sort-btn">
                                                </span>
                                              </div>
                                              <span className="resize-handle"> </span>
                                            </datatable-header-cell>
                                            <datatable-header-cell className="datatable-header-cell resizeable sortable ng-star-inserted" draggable long-press resizeable role="columnheader" style={{"width":"306.667px"}} title="Last Name">
                                              <div className="datatable-header-cell-template-wrap">
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-header-cell-wrapper ng-star-inserted">
                                                  <span className="datatable-header-cell-label draggable">
                                                    Last Name
                                                  </span>
                                                </span>
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-icon-sort-unset sort-btn">
                                                </span>
                                              </div>
                                              <span className="resize-handle"> </span>
                                            </datatable-header-cell>
                                            <datatable-header-cell className="datatable-header-cell resizeable sortable ng-star-inserted" draggable long-press resizeable role="columnheader" style={{"width":"306.667px"}} title="Address">
                                              <div className="datatable-header-cell-template-wrap">
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-header-cell-wrapper ng-star-inserted">
                                                  <span className="datatable-header-cell-label draggable">
                                                    Address
                                                  </span>
                                                </span>
                                                {/* */}
                                                {/* */}
                                                <span className="datatable-icon-sort-unset sort-btn">
                                                </span>
                                              </div>
                                              <span className="resize-handle"> </span>
                                            </datatable-header-cell>
                                            {/* */}
                                          </div>
                                          <div className="datatable-row-right ng-star-inserted" style={{"-webkit-transform":"translate3d(0px, 0px, 0px)","-ms-transform":"translate3d(0px, 0px, 0px)","transform":"translate3d(0px, 0px, 0px)","backface-visibility":"hidden","width":"0px"}}>
                                            {/* */}
                                          </div>
                                          {/* */}
                                        </div>
                                      </datatable-header>
                                      {/* */}
                                      <datatable-body className="datatable-body" role="rowgroup" style={{"width":"100%","height":"auto"}}>
                                        {/* */}
                                        <datatable-selection>
                                          <datatable-scroller className="datatable-scroll ng-star-inserted" style={{"width":"920px"}}>
                                            {/* */}
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-even ng-star-inserted" role="row" style={{"width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Cortez">
                                                        Cortez
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Gaines">
                                                        Gaines
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="423 Bay Parkway">
                                                        423 Bay Parkway
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-odd ng-star-inserted" role="row" style={{"width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Reba">
                                                        Reba
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Bowen">
                                                        Bowen
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="663 Hale Avenue">
                                                        663 Hale Avenue
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-even ng-star-inserted" role="row" style={{"width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Wallace">
                                                        Wallace
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Bush">
                                                        Bush
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="955 Lawn Court">
                                                        955 Lawn Court
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-odd ng-star-inserted" role="row" style={{"width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Angel">
                                                        Angel
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Dawson">
                                                        Dawson
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="919 Lott Street">
                                                        919 Lott Street
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-even ng-star-inserted" role="row" style={{"width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Mclaughlin">
                                                        Mclaughlin
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Norton">
                                                        Norton
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="228 Kossuth Place">
                                                        228 Kossuth Place
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-odd ng-star-inserted" role="row" style={{"width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Poole">
                                                        Poole
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Ware">
                                                        Ware
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="560 Gerald Court">
                                                        560 Gerald Court
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-even ng-star-inserted" role="row" style={{"width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Howard">
                                                        Howard
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Mack">
                                                        Mack
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="887 George Street">
                                                        887 George Street
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-odd ng-star-inserted" role="row" style={{"width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="John">
                                                        John
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Hewitt">
                                                        Hewitt
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="494 Amber Street">
                                                        494 Amber Street
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-even ng-star-inserted" role="row" style={{"width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Flossie">
                                                        Flossie
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Grimes">
                                                        Grimes
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="436 Ridge Court">
                                                        436 Ridge Court
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            <datatable-row-wrapper className="datatable-row-wrapper ng-star-inserted">
                                              {/* */}
                                              <datatable-body-row className="datatable-body-row datatable-row-odd ng-star-inserted" role="row" style={{"width":"920px"}} tabIndex={-1}>
                                                <div className="datatable-row-group datatable-row-left ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                0px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-center datatable-row-group ng-star-inserted" style={{"width":"920px"}}>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Donaldson">
                                                        Donaldson
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="Johnston">
                                                        Johnston
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  <datatable-body-cell className="datatable-body-cell sort-active ng-star-inserted" role="cell" style={{"width":"306.667px","height":"auto"}} tabIndex={-1}>
                                                    <div className="datatable-body-cell-label" style={{"margin-left":"0px"}}>
                                                      {/* */}
                                                      {/* */}
                                                      <span className="ng-star-inserted" title="553 Albemarle Road">
                                                        553 Albemarle Road
                                                      </span>
                                                      {/* */}
                                                      {/* */}
                                                    </div>
                                                  </datatable-body-cell>
                                                  {/* */}
                                                </div>
                                                <div className="datatable-row-group datatable-row-right ng-star-inserted" style={{"width":"0px","-webkit-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","-ms-transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","transform":"translate3d(                                                -17px,                                                0px,                                                0px                                              )","backface-visibility":"hidden"}}>
                                                  {/* */}
                                                </div>
                                                {/* */}
                                              </datatable-body-row>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                            </datatable-row-wrapper>
                                            {/* */}
                                            {/* */}
                                          </datatable-scroller>
                                          {/* */}
                                          {/* */}
                                        </datatable-selection>
                                      </datatable-body>
                                      <datatable-footer className="datatable-footer ng-star-inserted">
                                        <div className="datatable-footer-inner" style={{"height":"50px"}}>
                                          {/* */}
                                          <div className="page-count ng-star-inserted">
                                            {/* */}
                                            28 total
                                          </div>
                                          {/* */}
                                          <datatable-pager className="datatable-pager ng-star-inserted">
                                            <ul className="pager">
                                              <li className="disabled">
                                                <a aria-label="go to first page" href="javascript:void(0)" role="button">
                                                  <i className="datatable-icon-prev"> </i>
                                                </a>
                                              </li>
                                              <li className="disabled">
                                                <a aria-label="go to previous page" href="javascript:void(0)" role="button">
                                                  <i className="datatable-icon-left"> </i>
                                                </a>
                                              </li>
                                              <li aria-label="page 1" className="pages active ng-star-inserted" role="button">
                                                <a href="javascript:void(0)"> 1 </a>
                                              </li>
                                              <li aria-label="page 2" className="pages ng-star-inserted" role="button">
                                                <a href="javascript:void(0)"> 2 </a>
                                              </li>
                                              <li aria-label="page 3" className="pages ng-star-inserted" role="button">
                                                <a href="javascript:void(0)"> 3 </a>
                                              </li>
                                              {/* */}
                                              <li className>
                                                <a aria-label="go to next page" href="javascript:void(0)" role="button">
                                                  <i className="datatable-icon-right">
                                                  </i>
                                                </a>
                                              </li>
                                              <li className>
                                                <a aria-label="go to last page" href="javascript:void(0)" role="button">
                                                  <i className="datatable-icon-skip"> </i>
                                                </a>
                                              </li>
                                            </ul>
                                          </datatable-pager>
                                          {/* */}
                                        </div>
                                      </datatable-footer>
                                      {/* */}
                                    </div>
                                  </ngx-datatable>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </app-ngx-datatable>
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
