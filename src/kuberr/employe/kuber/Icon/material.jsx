import React from "react"
import Drop from "../../../../Drop";

export default function Material (){
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
                <app-material _nghost-oko-c477 className="ng-star-inserted">
                  <section _ngcontent-oko-c477 className="content">
                    <div _ngcontent-oko-c477 className="content-block">
                      <div _ngcontent-oko-c477 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c477 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Material Icons
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
                                    Icons
                                  </li>
                                  {/* */}
                                  <li _ngcontent-oko-c141 className="breadcrumb-item active">
                                    Material Icons
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c477 className="row">
                        <div _ngcontent-oko-c477 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>ACTION</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      3d_rotation
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      accessibility
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      accessibility
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      accessible
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      accessible
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      account_balance
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      account_balance
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      account_balance_wallet
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      account_balance_wallet
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      account_box
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      account_box
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      account_circle
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      account_circle
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      add_shopping_cart
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      add_shopping_cart
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      alarm
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      alarm
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      alarm_add
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      alarm_add
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      alarm_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      alarm_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      alarm_on
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      alarm_on
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      all_out
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      all_out
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      android
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      android
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      announcement
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      announcement
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      aspect_ratio
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      aspect_ratio
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      assessment
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      assessment
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      assignment
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      assignment
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      assignment_ind
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      assignment_ind
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      assignment_late
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      assignment_late
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      assignment_return
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      assignment_return
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      assignment_returned
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      assignment_returned
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      assignment_turned_in
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      assignment_turned_in
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      autorenew
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      autorenew
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      backup
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      backup
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      book
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      book
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      bookmark
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      bookmark
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      bookmark_border
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      bookmark_border
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      bug_report
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      bug_report
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      build
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      build
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      cached
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      cached
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      camera_enhance
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      camera_enhance
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      card_giftcard
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      card_giftcard
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      card_membership
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      card_membership
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      card_travel
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      card_travel
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      change_history
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      change_history
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      check_circle
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      check_circle
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      chrome_reader_mode
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      chrome_reader_mode
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      class
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      class
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      code
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      code
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      compare_arrows
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      compare_arrows
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      copyright
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      copyright
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      credit_card
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      credit_card
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      dashboard
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      dashboard
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      date_range
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      date_range
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      delete
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      delete
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      delete_forever
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      delete_forever
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      description
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      description
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      dns
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      dns
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      done
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      done
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      done_all
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      done_all
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      donut_large
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      donut_large
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      donut_small
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      donut_small
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      eject
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      eject
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      euro_symbol
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      euro_symbol
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      event
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      event
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      event_seat
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      event_seat
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      exit_to_app
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      exit_to_app
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      explore
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      explore
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      extension
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      extension
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      face
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      face
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      favorite
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      favorite
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      favorite_border
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      favorite_border
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      feedback
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      feedback
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      find_in_page
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      find_in_page
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      find_replace
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      find_replace
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      fingerprint
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      fingerprint
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      flight_land
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      flight_land
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      flight_takeoff
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      flight_takeoff
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      flip_to_back
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      flip_to_back
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      flip_to_front
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      flip_to_front
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      g_translate
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      g_translate
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      gavel
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      gavel
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      get_app
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      get_app
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      gif
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      gif
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      grade
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      grade
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      group_work
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      group_work
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      help
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      help
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      help_outline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      help_outline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      highlight_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      highlight_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      history
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      history
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      home
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      home
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      hourglass_empty
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      hourglass_empty
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      hourglass_full
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      hourglass_full
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      http
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      http
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      https
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      https
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      important_devices
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      important_devices
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      info
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      info
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      info_outline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      info_outline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      input
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      input
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      invert_colors
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      invert_colors
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      label
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      label
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      label_outline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      label_outline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      language
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      language
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      launch
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      launch
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      lightbulb_outline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      lightbulb_outline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      line_style
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      line_style
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      line_weight
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      line_weight
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      list
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      list
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      lock
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      lock
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      lock_open
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      lock_open
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      lock_outline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      lock_outline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      loyalty
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      loyalty
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      markunread_mailbox
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      markunread_mailbox
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      motorcycle
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      motorcycle
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      note_add
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      note_add
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      offline_pin
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      offline_pin
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      opacity
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      opacity
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      open_in_browser
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      open_in_browser
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      open_in_new
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      open_in_new
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      open_with
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      open_with
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      pageview
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      pageview
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      pan_tool
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      pan_tool
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      payment
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      payment
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      perm_camera_mic
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      perm_camera_mic
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      perm_contact_calendar
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      perm_contact_calendar
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      perm_data_setting
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      perm_data_setting
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      perm_device_information
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      perm_device_information
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      perm_identity
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      perm_identity
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      perm_media
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      perm_media
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      perm_phone_msg
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      perm_phone_msg
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      perm_scan_wifi
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      perm_scan_wifi
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      pets
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      pets
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      picture_in_picture
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      picture_in_picture
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      picture_in_picture_alt
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      picture_in_picture_alt
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      play_for_work
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      play_for_work
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      polymer
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      polymer
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      power_settings_new
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      power_settings_new
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      pregnant_woman
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      pregnant_woman
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      print
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      print
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      query_builder
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      query_builder
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      question_answer
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      question_answer
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      receipt
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      receipt
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      record_voice_over
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      record_voice_over
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      redeem
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      redeem
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      remove_shopping_cart
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      remove_shopping_cart
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      reorder
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      reorder
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      report_problem
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      report_problem
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      restore
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      restore
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      restore_page
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      restore_page
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      room
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      room
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      rounded_corner
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      rounded_corner
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      rowing
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      rowing
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      schedule
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      schedule
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      search
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      search
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_applications
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_applications
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_backup_restore
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_backup_restore
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_bluetooth
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_bluetooth
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_brightness
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_brightness
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_cell
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_cell
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_ethernet
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_ethernet
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_input_antenna
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_input_antenna
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_input_component
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_input_component
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_input_composite
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_input_composite
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_input_hdmi
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_input_hdmi
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_input_svideo
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_input_svideo
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_overscan
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_overscan
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_phone
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_phone
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_power
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_power
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_remote
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_remote
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_voice
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_voice
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      shop
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      shop
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      shop_two
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      shop_two
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      shopping_basket
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      shopping_basket
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      shopping_cart
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      shopping_cart
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      speaker_notes
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      speaker_notes
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      speaker_notes_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      speaker_notes_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      spellcheck
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      spellcheck
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      star_rate
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      star_rate
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      stars
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      stars
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      store
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      store
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      subject
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      subject
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      supervisor_account
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      supervisor_account
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      swap_horiz
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      swap_horiz
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      swap_vert
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      swap_vert
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      swap_vertical_circle
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      swap_vertical_circle
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      system_update_alt
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      system_update_alt
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      tab
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      tab
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      tab_unselected
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      tab_unselected
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      theaters
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      theaters
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      thumb_down
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      thumb_down
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      thumb_up
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      thumb_up
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      thumbs_up_down
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      thumbs_up_down
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      timeline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      timeline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      toc
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      toc
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      today
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      today
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      toll
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      toll
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      touch_app
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      touch_app
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      track_changes
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      track_changes
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      translate
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      translate
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      trending_down
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      trending_down
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      trending_flat
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      trending_flat
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      trending_up
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      trending_up
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      turned_in
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      turned_in
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      turned_in_not
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      turned_in_not
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      update
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      update
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      verified_user
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      verified_user
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      view_agenda
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      view_agenda
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      view_array
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      view_array
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      view_carousel
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      view_carousel
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      view_column
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      view_column
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      view_day
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      view_day
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      view_headline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      view_headline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      view_list
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      view_list
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      view_module
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      view_module
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      view_quilt
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      view_quilt
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      view_stream
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      view_stream
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      view_week
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      view_week
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      visibility
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      visibility
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      visibility_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      visibility_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      watch_later
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      watch_later
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      work
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      work
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      youtube_searched_for
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      youtube_searched_for
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      zoom_in
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      zoom_in
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      zoom_out
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      zoom_out
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>ALERT</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      add_alert
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      add_alert
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      error
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      error
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      error_outline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      error_outline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      warning
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      warning
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>AV</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      add_to_queue
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      add_to_queue
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      airplay
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      airplay
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      album
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      album
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      art_track
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      art_track
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      av_timer
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      av_timer
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      branding_watermark
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      branding_watermark
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      call_to_action
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      call_to_action
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      closed_caption
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      closed_caption
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      equalizer
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      equalizer
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      explicit
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      explicit
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      fast_forward
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      fast_forward
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      fast_rewind
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      fast_rewind
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      featured_play_list
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      featured_play_list
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      featured_video
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      featured_video
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      fiber_dvr
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      fiber_dvr
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      fiber_manual_record
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      fiber_manual_record
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      fiber_new
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      fiber_new
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      fiber_pin
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      fiber_pin
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      fiber_smart_record
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      fiber_smart_record
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      forward_10
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      forward_10
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      forward_30
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      forward_30
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      forward_5
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      forward_5
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      games
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      games
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      hd
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      hd
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      hearing
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      hearing
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      high_quality
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      high_quality
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      library_add
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      library_add
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      library_books
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      library_books
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      library_music
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      library_music
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      loop
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      loop
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      mic
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      mic
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      mic_none
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      mic_none
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      mic_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      mic_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      movie
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      movie
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      music_video
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      music_video
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      new_releases
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      new_releases
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      not_interested
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      not_interested
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      note
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      note
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      pause
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      pause
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      pause_circle_filled
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      pause_circle_filled
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      pause_circle_outline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      pause_circle_outline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      play_arrow
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      play_arrow
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      play_circle_filled
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      play_circle_filled
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      play_circle_outline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      play_circle_outline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      playlist_add
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      playlist_add
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      playlist_add_check
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      playlist_add_check
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      playlist_play
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      playlist_play
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      queue
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      queue
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      queue_music
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      queue_music
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      queue_play_next
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      queue_play_next
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      radio
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      radio
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      recent_actors
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      recent_actors
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      remove_from_queue
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      remove_from_queue
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      repeat
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      repeat
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      repeat_one
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      repeat_one
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      replay
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      replay
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      replay_10
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      replay_10
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      replay_30
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      replay_30
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      replay_5
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      replay_5
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      shuffle
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      shuffle
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      skip_next
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      skip_next
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      skip_previous
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      skip_previous
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      slow_motion_video
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      slow_motion_video
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      snooze
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      snooze
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sort_by_alpha
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sort_by_alpha
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      stop
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      stop
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      subscriptions
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      subscriptions
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      subtitles
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      subtitles
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      surround_sound
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      surround_sound
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      video_call
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      video_call
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      video_label
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      video_label
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      video_library
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      video_library
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      videocam
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      videocam
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      videocam_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      videocam_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      volume_down
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      volume_down
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      volume_mute
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      volume_mute
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      volume_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      volume_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      volume_up
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      volume_up
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      web
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      web
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      web_asset
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      web_asset
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>COMMUNICATION</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      business
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      business
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      call
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      call
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      call_end
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      call_end
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      call_made
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      call_made
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      call_merge
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      call_merge
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      call_missed
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      call_missed
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      call_missed_outgoing
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      call_missed_outgoing
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      call_received
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      call_received
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      call_split
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      call_split
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      chat
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      chat
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      chat_bubble
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      chat_bubble
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      chat_bubble_outline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      chat_bubble_outline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      clear_all
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      clear_all
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      comment
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      comment
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      contact_mail
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      contact_mail
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      contact_phone
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      contact_phone
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      contacts
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      contacts
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      dialer_sip
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      dialer_sip
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      dialpad
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      dialpad
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      email
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      email
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      forum
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      forum
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      import_contacts
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      import_contacts
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      import_export
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      import_export
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      invert_colors_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      invert_colors_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      live_help
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      live_help
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      location_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      location_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      location_on
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      location_on
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      mail_outline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      mail_outline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      message
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      message
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      no_sim
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      no_sim
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phone
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phone
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phonelink_erase
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phonelink_erase
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phonelink_lock
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phonelink_lock
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phonelink_ring
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phonelink_ring
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phonelink_setup
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phonelink_setup
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      portable_wifi_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      portable_wifi_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      present_to_all
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      present_to_all
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      ring_volume
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      ring_volume
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      rss_feed
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      rss_feed
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      screen_share
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      screen_share
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      speaker_phone
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      speaker_phone
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      stay_current_landscape
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      stay_current_landscape
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      stay_current_portrait
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      stay_current_portrait
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      stay_primary_landscape
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      stay_primary_landscape
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      stay_primary_portrait
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      stay_primary_portrait
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      stop_screen_share
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      stop_screen_share
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      swap_calls
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      swap_calls
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      textsms
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      textsms
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      voicemail
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      voicemail
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      vpn_key
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      vpn_key
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>CONTENT</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      add
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      add
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      add_box
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      add_box
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      add_circle
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      add_circle
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      add_circle_outline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      add_circle_outline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      archive
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      archive
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      backspace
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      backspace
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      block
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      block
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      clear
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      clear
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      content_copy
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      content_copy
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      content_cut
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      content_cut
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      content_paste
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      content_paste
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      create
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      create
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      delete_sweep
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      delete_sweep
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      drafts
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      drafts
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_list
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_list
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      flag
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      flag
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      font_download
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      font_download
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      forward
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      forward
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      gesture
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      gesture
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      inbox
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      inbox
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      link
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      link
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      low_priority
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      low_priority
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      mail
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      mail
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      markunread
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      markunread
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      move_to_inbox
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      move_to_inbox
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      next_week
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      next_week
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      redo
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      redo
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      remove
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      remove
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      remove_circle
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      remove_circle
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      remove_circle_outline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      remove_circle_outline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      reply
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      reply
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      reply_all
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      reply_all
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      report
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      report
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      save
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      save
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      select_all
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      select_all
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      send
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      send
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sort
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sort
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      text_format
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      text_format
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      unarchive
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      unarchive
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      undo
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      undo
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      weekend
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      weekend
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>DEVICE</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      access_alarm
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      access_alarm
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      access_alarms
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      access_alarms
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      access_time
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      access_time
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      add_alarm
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      add_alarm
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      airplanemode_active
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      airplanemode_active
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      airplanemode_inactive
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      airplanemode_inactive
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      battery_alert
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      battery_alert
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      battery_charging_full
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      battery_charging_full
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      battery_full
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      battery_full
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      battery_std
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      battery_std
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      battery_unknown
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      battery_unknown
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      bluetooth
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      bluetooth
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      bluetooth_connected
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      bluetooth_connected
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      bluetooth_disabled
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      bluetooth_disabled
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      bluetooth_searching
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      bluetooth_searching
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      brightness_auto
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      brightness_auto
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      brightness_high
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      brightness_high
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      brightness_low
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      brightness_low
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      brightness_medium
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      brightness_medium
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      data_usage
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      data_usage
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      developer_mode
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      developer_mode
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      devices
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      devices
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      dvr
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      dvr
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      gps_fixed
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      gps_fixed
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      gps_not_fixed
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      gps_not_fixed
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      gps_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      gps_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      graphic_eq
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      graphic_eq
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      location_disabled
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      location_disabled
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      location_searching
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      location_searching
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      network_cell
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      network_cell
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      network_wifi
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      network_wifi
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      nfc
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      nfc
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      screen_lock_landscape
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      screen_lock_landscape
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      screen_lock_portrait
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      screen_lock_portrait
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      screen_lock_rotation
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      screen_lock_rotation
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      screen_rotation
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      screen_rotation
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sd_storage
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sd_storage
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      settings_system_daydream
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      settings_system_daydream
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      signal_cellular_4_bar
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      signal_cellular_4_bar
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      signal_cellular_connected_no_internet_4_bar
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      signal_cellular_connected_no_internet_4_bar
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      signal_cellular_no_sim
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      signal_cellular_no_sim
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      signal_cellular_null
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      signal_cellular_null
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      signal_cellular_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      signal_cellular_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      signal_wifi_4_bar
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      signal_wifi_4_bar
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      signal_wifi_4_bar_lock
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      signal_wifi_4_bar_lock
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      signal_wifi_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      signal_wifi_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      storage
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      storage
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      usb
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      usb
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      wallpaper
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      wallpaper
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      widgets
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      widgets
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      wifi_lock
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      wifi_lock
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      wifi_tethering
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      wifi_tethering
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>EDITOR</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      attach_file
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      attach_file
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      attach_money
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      attach_money
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      border_all
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      border_all
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      border_bottom
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      border_bottom
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      border_clear
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      border_clear
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      border_color
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      border_color
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      border_horizontal
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      border_horizontal
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      border_inner
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      border_inner
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      border_left
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      border_left
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      border_outer
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      border_outer
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      border_right
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      border_right
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      border_style
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      border_style
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      border_top
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      border_top
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      border_vertical
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      border_vertical
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      bubble_chart
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      bubble_chart
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      drag_handle
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      drag_handle
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_align_center
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_align_center
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_align_justify
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_align_justify
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_align_left
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_align_left
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_align_right
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_align_right
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_bold
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_bold
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_clear
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_clear
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_color_fill
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_color_fill
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_color_reset
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_color_reset
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_color_text
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_color_text
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_indent_decrease
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_indent_decrease
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_indent_increase
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_indent_increase
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_italic
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_italic
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_line_spacing
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_line_spacing
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_list_bulleted
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_list_bulleted
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_list_numbered
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_list_numbered
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_paint
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_paint
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_quote
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_quote
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_shapes
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_shapes
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_size
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_size
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_strikethrough
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_strikethrough
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_textdirection_l_to_r
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_textdirection_l_to_r
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_textdirection_r_to_l
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_textdirection_r_to_l
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      format_underlined
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      format_underlined
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      functions
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      functions
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      highlight
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      highlight
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      insert_chart
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      insert_chart
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      insert_comment
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      insert_comment
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      insert_drive_file
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      insert_drive_file
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      insert_emoticon
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      insert_emoticon
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      insert_invitation
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      insert_invitation
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      insert_link
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      insert_link
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      insert_photo
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      insert_photo
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      linear_scale
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      linear_scale
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      merge_type
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      merge_type
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      mode_comment
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      mode_comment
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      mode_edit
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      mode_edit
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      monetization_on
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      monetization_on
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      money_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      money_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      multiline_chart
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      multiline_chart
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      pie_chart
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      pie_chart
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      pie_chart_outlined
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      pie_chart_outlined
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      publish
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      publish
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      short_text
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      short_text
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      show_chart
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      show_chart
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      space_bar
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      space_bar
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      strikethrough_s
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      strikethrough_s
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      text_fields
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      text_fields
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      title
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      title
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      vertical_align_bottom
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      vertical_align_bottom
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      vertical_align_center
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      vertical_align_center
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      vertical_align_top
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      vertical_align_top
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      wrap_text
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      wrap_text
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>FILE</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      attachment
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      attachment
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      cloud
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      cloud
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      cloud_circle
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      cloud_circle
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      cloud_done
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      cloud_done
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      cloud_download
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      cloud_download
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      cloud_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      cloud_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      cloud_queue
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      cloud_queue
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      cloud_upload
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      cloud_upload
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      create_new_folder
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      create_new_folder
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      file_download
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      file_download
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      file_upload
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      file_upload
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      folder
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      folder
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      folder_open
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      folder_open
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      folder_shared
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      folder_shared
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>HARDWARE</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      cast
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      cast
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      cast_connected
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      cast_connected
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      computer
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      computer
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      desktop_mac
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      desktop_mac
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      desktop_windows
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      desktop_windows
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      developer_board
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      developer_board
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      device_hub
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      device_hub
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      devices_other
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      devices_other
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      dock
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      dock
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      gamepad
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      gamepad
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      headset
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      headset
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      headset_mic
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      headset_mic
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      keyboard
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      keyboard
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      keyboard_arrow_down
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      keyboard_arrow_down
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      keyboard_arrow_left
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      keyboard_arrow_left
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      keyboard_arrow_right
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      keyboard_arrow_right
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      keyboard_arrow_up
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      keyboard_arrow_up
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      keyboard_backspace
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      keyboard_backspace
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      keyboard_capslock
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      keyboard_capslock
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      keyboard_hide
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      keyboard_hide
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      keyboard_return
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      keyboard_return
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      keyboard_tab
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      keyboard_tab
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      keyboard_voice
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      keyboard_voice
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      laptop
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      laptop
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      laptop_chromebook
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      laptop_chromebook
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      laptop_mac
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      laptop_mac
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      laptop_windows
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      laptop_windows
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      memory
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      memory
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      mouse
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      mouse
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phone_android
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phone_android
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phone_iphone
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phone_iphone
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phonelink
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phonelink
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phonelink_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phonelink_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      power_input
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      power_input
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      router
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      router
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      scanner
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      scanner
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      security
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      security
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sim_card
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sim_card
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      smartphone
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      smartphone
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      speaker
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      speaker
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      speaker_group
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      speaker_group
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      tablet
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      tablet
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      tablet_android
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      tablet_android
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      tablet_mac
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      tablet_mac
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      toys
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      toys
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      tv
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      tv
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      videogame_asset
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      videogame_asset
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      watch
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      watch
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>IMAGE</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      add_a_photo
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      add_a_photo
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      add_to_photos
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      add_to_photos
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      adjust
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      adjust
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      assistant
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      assistant
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      assistant_photo
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      assistant_photo
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      audiotrack
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      audiotrack
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      blur_circular
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      blur_circular
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      blur_linear
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      blur_linear
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      blur_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      blur_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      blur_on
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      blur_on
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      brightness_1
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      brightness_1
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      brightness_2
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      brightness_2
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      brightness_3
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      brightness_3
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      brightness_4
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      brightness_4
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      brightness_5
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      brightness_5
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      brightness_6
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      brightness_6
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      brightness_7
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      brightness_7
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      broken_image
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      broken_image
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      brush
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      brush
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      burst_mode
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      burst_mode
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      camera
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      camera
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      camera_alt
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      camera_alt
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      camera_front
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      camera_front
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      camera_rear
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      camera_rear
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      camera_roll
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      camera_roll
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      center_focus_strong
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      center_focus_strong
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      center_focus_weak
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      center_focus_weak
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      collections
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      collections
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      collections_bookmark
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      collections_bookmark
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      color_lens
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      color_lens
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      colorize
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      colorize
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      compare
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      compare
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      control_point
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      control_point
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      control_point_duplicate
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      control_point_duplicate
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      crop
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      crop
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      crop_16_9
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      crop_16_9
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      crop_3_2
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      crop_3_2
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      crop_5_4
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      crop_5_4
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      crop_7_5
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      crop_7_5
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      crop_din
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      crop_din
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      crop_free
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      crop_free
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      crop_landscape
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      crop_landscape
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      crop_original
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      crop_original
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      crop_portrait
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      crop_portrait
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      crop_rotate
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      crop_rotate
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      crop_square
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      crop_square
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      dehaze
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      dehaze
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      details
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      details
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      edit
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      edit
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      exposure
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      exposure
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      exposure_neg_1
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      exposure_neg_1
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      exposure_neg_2
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      exposure_neg_2
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      exposure_plus_1
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      exposure_plus_1
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      exposure_plus_2
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      exposure_plus_2
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      exposure_zero
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      exposure_zero
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_1
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_1
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_2
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_2
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_3
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_3
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_4
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_4
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_5
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_5
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_6
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_6
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_7
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_7
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_8
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_8
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_9
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_9
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_9_plus
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_9_plus
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_b_and_w
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_b_and_w
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_center_focus
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_center_focus
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_drama
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_drama
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_frames
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_frames
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_hdr
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_hdr
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_none
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_none
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_tilt_shift
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_tilt_shift
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      filter_vintage
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      filter_vintage
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      flare
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      flare
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      flash_auto
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      flash_auto
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      flash_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      flash_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      flash_on
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      flash_on
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      flip
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      flip
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      gradient
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      gradient
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      grain
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      grain
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      grid_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      grid_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      grid_on
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      grid_on
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      hdr_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      hdr_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      hdr_on
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      hdr_on
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      hdr_strong
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      hdr_strong
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      hdr_weak
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      hdr_weak
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      healing
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      healing
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      image
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      image
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      image_aspect_ratio
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      image_aspect_ratio
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      iso
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      iso
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      landscape
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      landscape
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      leak_add
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      leak_add
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      leak_remove
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      leak_remove
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      lens
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      lens
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      linked_camera
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      linked_camera
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      looks
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      looks
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      looks_3
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      looks_3
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      looks_4
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      looks_4
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      looks_5
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      looks_5
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      looks_6
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      looks_6
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      looks_one
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      looks_one
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      looks_two
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      looks_two
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      loupe
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      loupe
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      monochrome_photos
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      monochrome_photos
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      movie_creation
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      movie_creation
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      movie_filter
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      movie_filter
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      music_note
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      music_note
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      nature
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      nature
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      nature_people
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      nature_people
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      navigate_before
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      navigate_before
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      navigate_next
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      navigate_next
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      palette
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      palette
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      panorama
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      panorama
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      panorama_fish_eye
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      panorama_fish_eye
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      panorama_horizontal
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      panorama_horizontal
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      panorama_vertical
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      panorama_vertical
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      panorama_wide_angle
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      panorama_wide_angle
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      photo
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      photo
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      photo_album
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      photo_album
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      photo_camera
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      photo_camera
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      photo_filter
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      photo_filter
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      photo_library
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      photo_library
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      photo_size_select_actual
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      photo_size_select_actual
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      photo_size_select_large
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      photo_size_select_large
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      photo_size_select_small
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      photo_size_select_small
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      picture_as_pdf
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      picture_as_pdf
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      portrait
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      portrait
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      remove_red_eye
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      remove_red_eye
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      rotate_90_degrees_ccw
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      rotate_90_degrees_ccw
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      rotate_left
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      rotate_left
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      rotate_right
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      rotate_right
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      slideshow
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      slideshow
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      straighten
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      straighten
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      style
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      style
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      switch_camera
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      switch_camera
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      switch_video
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      switch_video
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      tag_faces
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      tag_faces
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      texture
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      texture
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      timelapse
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      timelapse
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      timer
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      timer
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      timer_10
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      timer_10
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      timer_3
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      timer_3
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      timer_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      timer_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      tonality
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      tonality
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      transform
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      transform
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      tune
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      tune
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      view_comfy
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      view_comfy
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      view_compact
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      view_compact
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      vignette
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      vignette
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      wb_auto
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      wb_auto
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      wb_cloudy
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      wb_cloudy
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      wb_incandescent
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      wb_incandescent
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      wb_iridescent
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      wb_iridescent
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      wb_sunny
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      wb_sunny
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>MAPS</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      add_location
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      add_location
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      beenhere
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      beenhere
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      directions
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      directions
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      directions_bike
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      directions_bike
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      directions_boat
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      directions_boat
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      directions_bus
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      directions_bus
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      directions_car
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      directions_car
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      directions_railway
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      directions_railway
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      directions_run
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      directions_run
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      directions_subway
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      directions_subway
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      directions_transit
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      directions_transit
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      directions_walk
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      directions_walk
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      edit_location
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      edit_location
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      ev_station
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      ev_station
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      flight
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      flight
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      hotel
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      hotel
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      layers
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      layers
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      layers_clear
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      layers_clear
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_activity
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_activity
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_airport
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_airport
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_atm
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_atm
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_bar
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_bar
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_cafe
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_cafe
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_car_wash
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_car_wash
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_convenience_store
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_convenience_store
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_dining
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_dining
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_drink
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_drink
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_florist
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_florist
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_gas_station
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_gas_station
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_grocery_store
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_grocery_store
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_hospital
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_hospital
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_hotel
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_hotel
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_laundry_service
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_laundry_service
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_library
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_library
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_mall
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_mall
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_movies
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_movies
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_offer
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_offer
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_parking
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_parking
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_pharmacy
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_pharmacy
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_phone
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_phone
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_pizza
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_pizza
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_play
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_play
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_post_office
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_post_office
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_printshop
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_printshop
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_see
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_see
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_shipping
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_shipping
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      local_taxi
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      local_taxi
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      map
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      map
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      my_location
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      my_location
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      navigation
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      navigation
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      near_me
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      near_me
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      person_pin
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      person_pin
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      person_pin_circle
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      person_pin_circle
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      pin_drop
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      pin_drop
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      place
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      place
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      rate_review
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      rate_review
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      restaurant
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      restaurant
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      restaurant_menu
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      restaurant_menu
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      satellite
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      satellite
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      store_mall_directory
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      store_mall_directory
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      streetview
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      streetview
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      subway
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      subway
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      terrain
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      terrain
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      traffic
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      traffic
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      train
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      train
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      tram
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      tram
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      transfer_within_a_station
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      transfer_within_a_station
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      zoom_out_map
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      zoom_out_map
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>NAVIGATION</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      apps
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      apps
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      arrow_back
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      arrow_back
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      arrow_downward
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      arrow_downward
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      arrow_drop_down
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      arrow_drop_down
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      arrow_drop_down_circle
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      arrow_drop_down_circle
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      arrow_drop_up
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      arrow_drop_up
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      arrow_forward
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      arrow_forward
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      arrow_upward
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      arrow_upward
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      cancel
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      cancel
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      check
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      check
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      chevron_left
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      chevron_left
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      chevron_right
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      chevron_right
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      close
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      close
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      expand_less
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      expand_less
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      expand_more
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      expand_more
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      first_page
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      first_page
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      fullscreen
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      fullscreen
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      fullscreen_exit
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      fullscreen_exit
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      last_page
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      last_page
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      menu
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      menu
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      more_horiz
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      more_horiz
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      more_vert
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      more_vert
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      refresh
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      refresh
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      subdirectory_arrow_left
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      subdirectory_arrow_left
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      subdirectory_arrow_right
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      subdirectory_arrow_right
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>NOTIFICATION</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      adb
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      adb
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      airline_seat_flat
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      airline_seat_flat
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      airline_seat_flat_angled
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      airline_seat_flat_angled
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      airline_seat_individual_suite
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      airline_seat_individual_suite
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      airline_seat_legroom_extra
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      airline_seat_legroom_extra
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      airline_seat_legroom_normal
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      airline_seat_legroom_normal
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      airline_seat_legroom_reduced
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      airline_seat_legroom_reduced
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      airline_seat_recline_extra
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      airline_seat_recline_extra
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      airline_seat_recline_normal
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      airline_seat_recline_normal
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      bluetooth_audio
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      bluetooth_audio
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      confirmation_number
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      confirmation_number
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      disc_full
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      disc_full
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      do_not_disturb
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      do_not_disturb
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      do_not_disturb_alt
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      do_not_disturb_alt
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      do_not_disturb_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      do_not_disturb_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      do_not_disturb_on
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      do_not_disturb_on
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      drive_eta
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      drive_eta
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      enhanced_encryption
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      enhanced_encryption
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      event_available
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      event_available
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      event_busy
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      event_busy
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      event_note
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      event_note
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      folder_special
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      folder_special
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      live_tv
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      live_tv
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      mms
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      mms
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      more
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      more
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      network_check
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      network_check
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      network_locked
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      network_locked
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      no_encryption
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      no_encryption
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      ondemand_video
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      ondemand_video
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      personal_video
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      personal_video
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phone_bluetooth_speaker
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phone_bluetooth_speaker
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phone_forwarded
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phone_forwarded
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phone_in_talk
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phone_in_talk
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phone_locked
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phone_locked
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phone_missed
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phone_missed
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      phone_paused
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      phone_paused
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      power
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      power
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      priority_high
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      priority_high
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sd_card
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sd_card
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sim_card_alert
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sim_card_alert
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sms
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sms
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sms_failed
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sms_failed
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sync
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sync
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sync_disabled
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sync_disabled
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sync_problem
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sync_problem
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      system_update
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      system_update
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      tap_and_play
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      tap_and_play
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      time_to_leave
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      time_to_leave
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      vibration
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      vibration
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      voice_chat
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      voice_chat
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      vpn_lock
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      vpn_lock
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      wc
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      wc
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      wifi
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      wifi
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>PLACES</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      ac_unit
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      ac_unit
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      airport_shuttle
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      airport_shuttle
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      all_inclusive
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      all_inclusive
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      beach_access
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      beach_access
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      business_center
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      business_center
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      casino
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      casino
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      child_care
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      child_care
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      child_friendly
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      child_friendly
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      fitness_center
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      fitness_center
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      free_breakfast
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      free_breakfast
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      golf_course
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      golf_course
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      hot_tub
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      hot_tub
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      kitchen
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      kitchen
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      pool
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      pool
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      room_service
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      room_service
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      rv_hookup
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      rv_hookup
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      smoke_free
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      smoke_free
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      smoking_rooms
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      smoking_rooms
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      spa
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      spa
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>SOCIAL</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      cake
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      cake
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      domain
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      domain
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      group
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      group
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      group_add
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      group_add
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      location_city
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      location_city
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      mood
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      mood
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      mood_bad
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      mood_bad
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      notifications
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      notifications
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      notifications_active
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      notifications_active
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      notifications_none
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      notifications_none
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      notifications_off
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      notifications_off
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      notifications_paused
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      notifications_paused
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      pages
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      pages
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      party_mode
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      party_mode
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      people
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      people
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      people_outline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      people_outline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      person
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      person
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      person_add
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      person_add
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      person_outline
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      person_outline
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      plus_one
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      plus_one
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      poll
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      poll
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      public
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      public
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      school
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      school
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sentiment_dissatisfied
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sentiment_dissatisfied
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sentiment_neutral
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sentiment_neutral
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sentiment_satisfied
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sentiment_satisfied
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sentiment_very_dissatisfied
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sentiment_very_dissatisfied
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      sentiment_very_satisfied
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      sentiment_very_satisfied
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      share
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      share
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      whatshot
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      whatshot
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c477 className="card">
                            <div _ngcontent-oko-c477 className="header">
                              <h2 _ngcontent-oko-c477>TOGGLE</h2>
                            </div>
                            <div _ngcontent-oko-c477 className="body">
                              <div _ngcontent-oko-c477 className="row clearfix demo-icon-container">
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      check_box
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      check_box
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      check_box_outline_blank
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      check_box_outline_blank
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      indeterminate_check_box
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      indeterminate_check_box
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      radio_button_checked
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      radio_button_checked
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      radio_button_unchecked
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      radio_button_unchecked
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      star
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      star
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      star_border
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      star_border
                                    </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c477 className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <div _ngcontent-oko-c477 className="demo-google-material-icon">
                                    <i _ngcontent-oko-c477 className="material-icons">
                                      star_half
                                    </i>
                                    <span _ngcontent-oko-c477 className="icon-name">
                                      star_half
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </app-material>
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
            <path d="M-1 270.99999923706054L-1 270.99999923706054C-1 270.99999923706054 87.37980739886945 270.99999923706054 87.37980739886945 270.99999923706054C87.37980739886945 270.99999923706054 145.63301233144907 270.99999923706054 145.63301233144907 270.99999923706054C145.63301233144907 270.99999923706054 203.88621726402872 270.99999923706054 203.88621726402872 270.99999923706054C203.88621726402872 270.99999923706054 262.13942219660834 270.99999923706054 262.13942219660834 270.99999923706054C262.13942219660834 270.99999923706054 320.392627129188 270.99999923706054 320.392627129188 270.99999923706054C320.392627129188 270.99999923706054 378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054C378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054 " id="SvgjsPath1854" />
          </svg>
          <div aria-atomic="true" aria-live="polite" className="cdk-live-announcer-element cdk-visually-hidden" id="cdk-live-announcer-0" />
          <div className="cdk-describedby-message-container cdk-visually-hidden" style={{"visibility":"hidden"}}>
            <div id="cdk-describedby-message-oko-1-8">Sort</div>
          </div>
        </div>
      );
    }
  