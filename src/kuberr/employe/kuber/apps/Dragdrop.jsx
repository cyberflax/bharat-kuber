import React from "react"
import Drop from "../../../../Drop";

export default function Dragdrop (){
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
                <app-drag-drop _nghost-oko-c371 className="ng-star-inserted">
                  <section _ngcontent-oko-c371 className="content">
                    <div _ngcontent-oko-c371 className="content-block">
                      <div _ngcontent-oko-c371 className="block-header">
                        <div _ngcontent-oko-c371 className="row">
                          <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <ul _ngcontent-oko-c371 className="breadcrumb">
                              <li _ngcontent-oko-c371>
                                <h4 _ngcontent-oko-c371 className="page-title">
                                  Drag &amp; Drop
                                  <i _ngcontent-oko-c371 className="fas fa-angle-right">
                                  </i>
                                </h4>
                              </li>
                              <li _ngcontent-oko-c371 className="breadcrumb-item bcrumb-1">
                                <a _ngcontent-oko-c371 href="#/admin/dashboard/main" routerlink="/admin/dashboard/main">
                                  <i _ngcontent-oko-c371 className="fas fa-home"> </i>
                                </a>
                              </li>
                              <li _ngcontent-oko-c371 className="breadcrumb-item bcrumb-2">
                                Apps
                              </li>
                              <li _ngcontent-oko-c371 className="breadcrumb-item active">
                                Drag &amp; Drop
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c371 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c371 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Drag &amp; Drop
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
                                    Drag &amp; Drop
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c371 className="row clearfix">
                        <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div _ngcontent-oko-c371 className="card">
                            <div _ngcontent-oko-c371 className="header">
                              <h2 _ngcontent-oko-c371>
                                Drag&amp;Drop position locking
                              </h2>
                            </div>
                            <div _ngcontent-oko-c371 className="body">
                              <div _ngcontent-oko-c371 className="row">
                                <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                  <div _ngcontent-oko-c371 cdkdrag cdkdraglockaxis="y" className="cdk-drag example-box">
                                    I can only be dragged up/down
                                  </div>
                                  {/* */}
                                  <div _ngcontent-oko-c371 cdkdrag cdkdraglockaxis="x" className="cdk-drag example-box">
                                    I can only be dragged left/right
                                  </div>
                                  {/* */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c371 className="row clearfix">
                        <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div _ngcontent-oko-c371 className="card">
                            <div _ngcontent-oko-c371 className="header">
                              <h2 _ngcontent-oko-c371>Drag&amp;Drop boundary</h2>
                            </div>
                            <div _ngcontent-oko-c371 className="body">
                              <div _ngcontent-oko-c371 className="row">
                                <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                  <div _ngcontent-oko-c371 className="example-boundary">
                                    <div _ngcontent-oko-c371 cdkdrag cdkdragboundary=".example-boundary" className="cdk-drag example-box">
                                      I can only be dragged within the dotted
                                      container
                                    </div>
                                    {/* */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c371 className="row clearfix">
                        <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div _ngcontent-oko-c371 className="card">
                            <div _ngcontent-oko-c371 className="header">
                              <h2 _ngcontent-oko-c371>
                                Drag&amp;Drop connected sorting group
                              </h2>
                            </div>
                            <div _ngcontent-oko-c371 className="body">
                              <div _ngcontent-oko-c371 className="row">
                                <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                  <div _ngcontent-oko-c371 cdkdroplistgroup>
                                    <div _ngcontent-oko-c371 className="example-container2">
                                      <h2 _ngcontent-oko-c371>To do</h2>
                                      <div _ngcontent-oko-c371 cdkdroplist className="cdk-drop-list example-list" id="cdk-drop-list-9">
                                        <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                          Get to work
                                        </div>
                                        {/* */}
                                        <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                          Pick up groceries
                                        </div>
                                        {/* */}
                                        <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                          Go home
                                        </div>
                                        {/* */}
                                        <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                          Fall asleep
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                    </div>
                                    <div _ngcontent-oko-c371 className="example-container2">
                                      <h2 _ngcontent-oko-c371>Done</h2>
                                      <div _ngcontent-oko-c371 cdkdroplist className="cdk-drop-list example-list" id="cdk-drop-list-10">
                                        <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                          Get up
                                        </div>
                                        {/* */}
                                        <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                          Brush teeth
                                        </div>
                                        {/* */}
                                        <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                          Take a shower
                                        </div>
                                        {/* */}
                                        <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                          Check e-mail
                                        </div>
                                        {/* */}
                                        <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                          Walk dog
                                        </div>
                                        {/* */}
                                        {/* */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c371 className="row clearfix">
                        <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div _ngcontent-oko-c371 className="card">
                            <div _ngcontent-oko-c371 className="header">
                              <h2 _ngcontent-oko-c371>
                                Drag&amp;Drop connected sorting
                              </h2>
                            </div>
                            <div _ngcontent-oko-c371 className="body">
                              <div _ngcontent-oko-c371 className="row">
                                <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                  <div _ngcontent-oko-c371 className="example-container2">
                                    <h2 _ngcontent-oko-c371>To do</h2>
                                    <div _ngcontent-oko-c371 cdkdroplist className="cdk-drop-list example-list" id="cdk-drop-list-11">
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        Get to work
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        Pick up groceries
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        Go home
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        Fall asleep
                                      </div>
                                      {/* */}
                                      {/* */}
                                    </div>
                                  </div>
                                  <div _ngcontent-oko-c371 className="example-container2">
                                    <h2 _ngcontent-oko-c371>Done</h2>
                                    <div _ngcontent-oko-c371 cdkdroplist className="cdk-drop-list example-list" id="cdk-drop-list-12">
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        Get up
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        Brush teeth
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        Take a shower
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        Check e-mail
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        Walk dog
                                      </div>
                                      {/* */}
                                      {/* */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c371 className="row clearfix">
                        <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div _ngcontent-oko-c371 className="card">
                            <div _ngcontent-oko-c371 className="header">
                              <h2 _ngcontent-oko-c371>
                                Drag&amp;Drop custom placeholder
                              </h2>
                            </div>
                            <div _ngcontent-oko-c371 className="body">
                              <div _ngcontent-oko-c371 className="row">
                                <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                  <div _ngcontent-oko-c371 cdkdroplist className="cdk-drop-list example-list2" id="cdk-drop-list-13">
                                    <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box2 ng-star-inserted">
                                      {/* */}
                                      Episode I - The Phantom Menace
                                    </div>
                                    {/* */}
                                    <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box2 ng-star-inserted">
                                      {/* */}
                                      Episode II - Attack of the Clones
                                    </div>
                                    {/* */}
                                    <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box2 ng-star-inserted">
                                      {/* */}
                                      Episode III - Revenge of the Sith
                                    </div>
                                    {/* */}
                                    <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box2 ng-star-inserted">
                                      {/* */}
                                      Episode IV - A New Hope
                                    </div>
                                    {/* */}
                                    <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box2 ng-star-inserted">
                                      {/* */}
                                      Episode V - The Empire Strikes Back
                                    </div>
                                    {/* */}
                                    <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box2 ng-star-inserted">
                                      {/* */}
                                      Episode VI - Return of the Jedi
                                    </div>
                                    {/* */}
                                    <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box2 ng-star-inserted">
                                      {/* */}
                                      Episode VII - The Force Awakens
                                    </div>
                                    {/* */}
                                    <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box2 ng-star-inserted">
                                      {/* */}
                                      Episode VIII - The Last Jedi
                                    </div>
                                    {/* */}
                                    <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box2 ng-star-inserted">
                                      {/* */}
                                      Episode IX - The Rise of Skywalker
                                    </div>
                                    {/* */}
                                    {/* */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c371 className="row clearfix">
                        <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div _ngcontent-oko-c371 className="card">
                            <div _ngcontent-oko-c371 className="header">
                              <h2 _ngcontent-oko-c371>Drag&amp;Drop disabled</h2>
                            </div>
                            <div _ngcontent-oko-c371 className="body">
                              <div _ngcontent-oko-c371 className="row">
                                <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                  <div _ngcontent-oko-c371 cdkdroplist className="cdk-drop-list example-list" id="cdk-drop-list-14">
                                    <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                      I can be dragged
                                    </div>
                                    {/* */}
                                    <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small cdk-drag-disabled ng-star-inserted">
                                      I cannot be dragged
                                    </div>
                                    {/* */}
                                    <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                      I can also be dragged
                                    </div>
                                    {/* */}
                                    {/* */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c371 className="row clearfix">
                        <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div _ngcontent-oko-c371 className="card">
                            <div _ngcontent-oko-c371 className="header">
                              <h2 _ngcontent-oko-c371>
                                Drag&amp;Drop with a handle
                              </h2>
                            </div>
                            <div _ngcontent-oko-c371 className="body">
                              <div _ngcontent-oko-c371 className="row">
                                <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                  <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box">
                                    I can only be dragged using the handle
                                    <div _ngcontent-oko-c371 cdkdraghandle className="cdk-drag-handle example-handle" style={{touchAction: 'none', WebkitUserDrag: 'none', WebkitTapHighlightColor: 'transparent', userSelect: 'none'}}>
                                      <svg _ngcontent-oko-c371 fill="currentColor" viewBox="0 0 24 24" width="24px">
                                        <path _ngcontent-oko-c371 d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z" />
                                        <path _ngcontent-oko-c371 d="M0 0h24v24H0z" fill="none" />
                                      </svg>
                                    </div>
                                  </div>
                                  {/* */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c371 className="row clearfix">
                        <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div _ngcontent-oko-c371 className="card">
                            <div _ngcontent-oko-c371 className="header">
                              <h2 _ngcontent-oko-c371>
                                Drag&amp;Drop enter predicate
                              </h2>
                            </div>
                            <div _ngcontent-oko-c371 className="body">
                              <div _ngcontent-oko-c371 className="row">
                                <div _ngcontent-oko-c371 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                  <div _ngcontent-oko-c371 className="example-container2">
                                    <h2 _ngcontent-oko-c371>Available numbers</h2>
                                    <div _ngcontent-oko-c371 cdkdroplist cdkdroplistconnectedto="even" className="cdk-drop-list example-list" id="all">
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        1
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        2
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        3
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        4
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        5
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        6
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        7
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        8
                                      </div>
                                      {/* */}
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        9
                                      </div>
                                      {/* */}
                                      {/* */}
                                    </div>
                                  </div>
                                  <div _ngcontent-oko-c371 className="example-container2">
                                    <h2 _ngcontent-oko-c371>Even numbers</h2>
                                    <div _ngcontent-oko-c371 cdkdroplist cdkdroplistconnectedto="all" className="cdk-drop-list example-list" id="even">
                                      <div _ngcontent-oko-c371 cdkdrag className="cdk-drag example-box-small ng-star-inserted">
                                        10
                                      </div>
                                      {/* */}
                                      {/* */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </app-drag-drop>
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
          </div>
        </div>
      );
    }
  