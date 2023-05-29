import React from "react"
import Drop from "../../Drop";

export default function Expansion (){
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
                <app-expansion-panel _nghost-oko-c408 className="ng-star-inserted">
                  <section _ngcontent-oko-c408 className="content">
                    <div _ngcontent-oko-c408 className="content-block">
                      <div _ngcontent-oko-c408 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c408 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Expansion
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
                                    Expansion
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c408 className="row">
                        <div _ngcontent-oko-c408 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div _ngcontent-oko-c408 className="card">
                            <div _ngcontent-oko-c408 className="header">
                              <h2 _ngcontent-oko-c408>Basic expansion panel</h2>
                            </div>
                            <div _ngcontent-oko-c408 className="body">
                              <mat-accordion _ngcontent-oko-c408 className="mat-accordion">
                                <mat-expansion-panel _ngcontent-oko-c408 className="mat-expansion-panel ng-tns-c402-341 ng-star-inserted">
                                  <mat-expansion-panel-header _ngcontent-oko-c408 aria-controls="cdk-accordion-child-0" aria-disabled="false" aria-expanded="false" className="mat-expansion-panel-header mat-focus-indicator ng-tns-c404-342 ng-tns-c402-341 mat-expansion-toggle-indicator-after ng-star-inserted" id="mat-expansion-panel-header-0" role="button" tabIndex={0}>
                                    <span className="mat-content ng-tns-c404-342">
                                      <mat-panel-title _ngcontent-oko-c408 className="mat-expansion-panel-header-title ng-tns-c404-342">
                                        Personal data
                                      </mat-panel-title>
                                      <mat-panel-description _ngcontent-oko-c408 className="mat-expansion-panel-header-description ng-tns-c404-342">
                                        Type your name and age
                                      </mat-panel-description>
                                    </span>
                                    <span className="mat-expansion-indicator ng-tns-c404-342 ng-trigger ng-trigger-indicatorRotate ng-star-inserted" style={{}}>
                                    </span>
                                    {/* */}
                                  </mat-expansion-panel-header>
                                  <div aria-labelledby="mat-expansion-panel-header-0" className="mat-expansion-panel-content ng-tns-c402-341 ng-trigger ng-trigger-bodyExpansion" id="cdk-accordion-child-0" role="region" style={{"height":"0px","visibility":"hidden"}}>
                                    <div className="mat-expansion-panel-body ng-tns-c402-341">
                                      <div _ngcontent-oko-c408 className="row ng-tns-c402-341">
                                        <div _ngcontent-oko-c408 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                                          <mat-form-field _ngcontent-oko-c408 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-343 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted" style={{}}>
                                            {/* */}
                                            <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-343 mdc-text-field--filled">
                                              <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-343 ng-star-inserted" />
                                              {/* */}
                                              <div className="mat-mdc-form-field-flex ng-tns-c67-343">
                                                {/* */}
                                                {/* */}
                                                {/* */}
                                                <div className="mat-mdc-form-field-infix ng-tns-c67-343">
                                                  <label aria-owns="mat-input-75" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-343 ng-star-inserted" htmlFor="mat-input-75" id="mat-mdc-form-field-label-218" matformfieldfloatinglabel>
                                                    <mat-label _ngcontent-oko-c408 className="ng-tns-c67-343">
                                                      First name
                                                    </mat-label>
                                                    {/* */}
                                                  </label>
                                                  {/* */}
                                                  {/* */}
                                                  {/* */}
                                                  <input _ngcontent-oko-c408 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-343 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-75" matinput />
                                                </div>
                                                {/* */}
                                                {/* */}
                                              </div>
                                              <div className="mdc-line-ripple ng-tns-c67-343 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                              {/* */}
                                            </div>
                                            <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-343">
                                              {/* */}
                                              <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-343 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                                {/* */}
                                                <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-343" />
                                              </div>
                                              {/* */}
                                            </div>
                                          </mat-form-field>
                                        </div>
                                        <div _ngcontent-oko-c408 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                                          <mat-form-field _ngcontent-oko-c408 appearance="fill" className="mat-mdc-form-field example-full-width ng-tns-c67-344 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted" style={{}}>
                                            {/* */}
                                            <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-344 mdc-text-field--filled">
                                              <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-344 ng-star-inserted" />
                                              {/* */}
                                              <div className="mat-mdc-form-field-flex ng-tns-c67-344">
                                                {/* */}
                                                {/* */}
                                                {/* */}
                                                <div className="mat-mdc-form-field-infix ng-tns-c67-344">
                                                  <label aria-owns="mat-input-76" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-344 ng-star-inserted" htmlFor="mat-input-76" id="mat-mdc-form-field-label-220" matformfieldfloatinglabel>
                                                    <mat-label _ngcontent-oko-c408 className="ng-tns-c67-344">
                                                      Age
                                                    </mat-label>
                                                    {/* */}
                                                  </label>
                                                  {/* */}
                                                  {/* */}
                                                  {/* */}
                                                  <input _ngcontent-oko-c408 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-344 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-76" matinput min={1} type="number" />
                                                </div>
                                                {/* */}
                                                {/* */}
                                              </div>
                                              <div className="mdc-line-ripple ng-tns-c67-344 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                              {/* */}
                                            </div>
                                            <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-344">
                                              {/* */}
                                              <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-344 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                                {/* */}
                                                <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-344" />
                                              </div>
                                              {/* */}
                                            </div>
                                          </mat-form-field>
                                        </div>
                                      </div>
                                      {/* */}
                                    </div>
                                  </div>
                                </mat-expansion-panel>
                                {/* */}
                                <mat-expansion-panel _ngcontent-oko-c408 className="mat-expansion-panel ng-tns-c402-345 ng-star-inserted">
                                  <mat-expansion-panel-header _ngcontent-oko-c408 aria-controls="cdk-accordion-child-1" aria-disabled="false" aria-expanded="false" className="mat-expansion-panel-header mat-focus-indicator ng-tns-c404-346 ng-tns-c402-345 mat-expansion-toggle-indicator-after ng-star-inserted" id="mat-expansion-panel-header-1" role="button" tabIndex={0}>
                                    <span className="mat-content ng-tns-c404-346">
                                      <mat-panel-title _ngcontent-oko-c408 className="mat-expansion-panel-header-title ng-tns-c404-346">
                                        Self aware panel
                                      </mat-panel-title>
                                      <mat-panel-description _ngcontent-oko-c408 className="mat-expansion-panel-header-description ng-tns-c404-346">
                                        Currently I am closed
                                      </mat-panel-description>
                                    </span>
                                    <span className="mat-expansion-indicator ng-tns-c404-346 ng-trigger ng-trigger-indicatorRotate ng-star-inserted" style={{}}>
                                    </span>
                                    {/* */}
                                  </mat-expansion-panel-header>
                                  <div aria-labelledby="mat-expansion-panel-header-1" className="mat-expansion-panel-content ng-tns-c402-345 ng-trigger ng-trigger-bodyExpansion" id="cdk-accordion-child-1" role="region" style={{"height":"0px","visibility":"hidden"}}>
                                    <div className="mat-expansion-panel-body ng-tns-c402-345">
                                      <p _ngcontent-oko-c408 className="ng-tns-c402-345">
                                        I'm visible because I am open
                                      </p>
                                      {/* */}
                                    </div>
                                  </div>
                                </mat-expansion-panel>
                                {/* */}
                              </mat-accordion>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c408 className="row">
                        <div _ngcontent-oko-c408 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div _ngcontent-oko-c408 className="card">
                            <div _ngcontent-oko-c408 className="header">
                              <h2 _ngcontent-oko-c408>
                                Expansion panel as accordion
                              </h2>
                            </div>
                            <div _ngcontent-oko-c408 className="body">
                              <mat-accordion _ngcontent-oko-c408 className="mat-accordion example-headers-align">
                                <mat-expansion-panel _ngcontent-oko-c408 className="mat-expansion-panel ng-tns-c402-347 mat-expanded mat-expansion-panel-spacing ng-star-inserted" hidetoggle>
                                  <mat-expansion-panel-header _ngcontent-oko-c408 aria-controls="cdk-accordion-child-2" aria-disabled="false" aria-expanded="true" className="mat-expansion-panel-header mat-focus-indicator ng-tns-c404-348 ng-tns-c402-347 mat-expanded mat-expansion-toggle-indicator-after ng-star-inserted" id="mat-expansion-panel-header-2" role="button" tabIndex={0}>
                                    <span className="mat-content ng-tns-c404-348 mat-content-hide-toggle">
                                      <mat-panel-title _ngcontent-oko-c408 className="mat-expansion-panel-header-title ng-tns-c404-348">
                                        Personal data
                                      </mat-panel-title>
                                      <mat-panel-description _ngcontent-oko-c408 className="mat-expansion-panel-header-description ng-tns-c404-348">
                                        Type your name and age
                                        <mat-icon _ngcontent-oko-c408 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                          account_circle
                                        </mat-icon>
                                      </mat-panel-description>
                                    </span>
                                    {/* */}
                                  </mat-expansion-panel-header>
                                  <div aria-labelledby="mat-expansion-panel-header-2" className="mat-expansion-panel-content ng-tns-c402-347 ng-trigger ng-trigger-bodyExpansion" id="cdk-accordion-child-2" role="region" style={{"visibility":"visible"}}>
                                    <div className="mat-expansion-panel-body ng-tns-c402-347">
                                      <mat-form-field _ngcontent-oko-c408 appearance="fill" className="mat-mdc-form-field ng-tns-c67-349 ng-tns-c402-347 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted" style={{}}>
                                        {/* */}
                                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-349 mdc-text-field--filled">
                                          <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-349 ng-star-inserted" />
                                          {/* */}
                                          <div className="mat-mdc-form-field-flex ng-tns-c67-349">
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <div className="mat-mdc-form-field-infix ng-tns-c67-349">
                                              <label aria-owns="mat-input-77" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-349 ng-star-inserted" htmlFor="mat-input-77" id="mat-mdc-form-field-label-222" matformfieldfloatinglabel>
                                                <mat-label _ngcontent-oko-c408 className="ng-tns-c67-349">
                                                  First name
                                                </mat-label>
                                                {/* */}
                                              </label>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              <input _ngcontent-oko-c408 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-349 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-77" matinput />
                                            </div>
                                            {/* */}
                                            {/* */}
                                          </div>
                                          <div className="mdc-line-ripple ng-tns-c67-349 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                          {/* */}
                                        </div>
                                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-349">
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-349 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                            {/* */}
                                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-349" />
                                          </div>
                                          {/* */}
                                        </div>
                                      </mat-form-field>
                                      <mat-form-field _ngcontent-oko-c408 appearance="fill" className="mat-mdc-form-field ng-tns-c67-350 ng-tns-c402-347 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted" style={{}}>
                                        {/* */}
                                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-350 mdc-text-field--filled">
                                          <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-350 ng-star-inserted" />
                                          {/* */}
                                          <div className="mat-mdc-form-field-flex ng-tns-c67-350">
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <div className="mat-mdc-form-field-infix ng-tns-c67-350">
                                              <label aria-owns="mat-input-78" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-350 ng-star-inserted" htmlFor="mat-input-78" id="mat-mdc-form-field-label-224" matformfieldfloatinglabel>
                                                <mat-label _ngcontent-oko-c408 className="ng-tns-c67-350">
                                                  Age
                                                </mat-label>
                                                {/* */}
                                              </label>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              <input _ngcontent-oko-c408 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-350 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-78" matinput min={1} type="number" />
                                            </div>
                                            {/* */}
                                            {/* */}
                                          </div>
                                          <div className="mdc-line-ripple ng-tns-c67-350 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                          {/* */}
                                        </div>
                                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-350">
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-350 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                            {/* */}
                                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-350" />
                                          </div>
                                          {/* */}
                                        </div>
                                      </mat-form-field>
                                      {/* */}
                                    </div>
                                    <mat-action-row _ngcontent-oko-c408 className="mat-action-row ng-tns-c402-347">
                                      <button _ngcontent-oko-c408 className="mdc-button mat-mdc-button mat-primary mat-mdc-button-base" color="primary" mat-button>
                                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                        </span>
                                        <span className="mdc-button__label"> Next </span>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                    </mat-action-row>
                                  </div>
                                </mat-expansion-panel>
                                {/* */}
                                <mat-expansion-panel _ngcontent-oko-c408 className="mat-expansion-panel ng-tns-c402-351 ng-star-inserted" hidetoggle>
                                  <mat-expansion-panel-header _ngcontent-oko-c408 aria-controls="cdk-accordion-child-3" aria-disabled="false" aria-expanded="false" className="mat-expansion-panel-header mat-focus-indicator ng-tns-c404-352 ng-tns-c402-351 mat-expansion-toggle-indicator-after ng-star-inserted" id="mat-expansion-panel-header-3" role="button" tabIndex={0}>
                                    <span className="mat-content ng-tns-c404-352 mat-content-hide-toggle">
                                      <mat-panel-title _ngcontent-oko-c408 className="mat-expansion-panel-header-title ng-tns-c404-352">
                                        Destination
                                      </mat-panel-title>
                                      <mat-panel-description _ngcontent-oko-c408 className="mat-expansion-panel-header-description ng-tns-c404-352">
                                        Type the country name
                                        <mat-icon _ngcontent-oko-c408 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                          map
                                        </mat-icon>
                                      </mat-panel-description>
                                    </span>
                                    {/* */}
                                  </mat-expansion-panel-header>
                                  <div aria-labelledby="mat-expansion-panel-header-3" className="mat-expansion-panel-content ng-tns-c402-351 ng-trigger ng-trigger-bodyExpansion" id="cdk-accordion-child-3" role="region" style={{"height":"0px","visibility":"hidden"}}>
                                    <div className="mat-expansion-panel-body ng-tns-c402-351">
                                      <mat-form-field _ngcontent-oko-c408 appearance="fill" className="mat-mdc-form-field ng-tns-c67-353 ng-tns-c402-351 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted" style={{}}>
                                        {/* */}
                                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-353 mdc-text-field--filled">
                                          <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-353 ng-star-inserted" />
                                          {/* */}
                                          <div className="mat-mdc-form-field-flex ng-tns-c67-353">
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <div className="mat-mdc-form-field-infix ng-tns-c67-353">
                                              <label aria-owns="mat-input-79" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-353 ng-star-inserted" htmlFor="mat-input-79" id="mat-mdc-form-field-label-226" matformfieldfloatinglabel>
                                                <mat-label _ngcontent-oko-c408 className="ng-tns-c67-353">
                                                  Country
                                                </mat-label>
                                                {/* */}
                                              </label>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              <input _ngcontent-oko-c408 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-353 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-79" matinput />
                                            </div>
                                            {/* */}
                                            {/* */}
                                          </div>
                                          <div className="mdc-line-ripple ng-tns-c67-353 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                          {/* */}
                                        </div>
                                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-353">
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-353 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                            {/* */}
                                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-353" />
                                          </div>
                                          {/* */}
                                        </div>
                                      </mat-form-field>
                                      {/* */}
                                    </div>
                                    <mat-action-row _ngcontent-oko-c408 className="mat-action-row ng-tns-c402-351">
                                      <button _ngcontent-oko-c408 className="mdc-button mat-mdc-button mat-warn mat-mdc-button-base" color="warn" mat-button>
                                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                        </span>
                                        <span className="mdc-button__label">
                                          Previous
                                        </span>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                      <button _ngcontent-oko-c408 className="mdc-button mat-mdc-button mat-primary mat-mdc-button-base" color="primary" mat-button>
                                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                        </span>
                                        <span className="mdc-button__label"> Next </span>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                    </mat-action-row>
                                  </div>
                                </mat-expansion-panel>
                                {/* */}
                                <mat-expansion-panel _ngcontent-oko-c408 className="mat-expansion-panel ng-tns-c402-354 ng-star-inserted" hidetoggle>
                                  <mat-expansion-panel-header _ngcontent-oko-c408 aria-controls="cdk-accordion-child-4" aria-disabled="false" aria-expanded="false" className="mat-expansion-panel-header mat-focus-indicator ng-tns-c404-355 ng-tns-c402-354 mat-expansion-toggle-indicator-after ng-star-inserted" id="mat-expansion-panel-header-4" role="button" tabIndex={0}>
                                    <span className="mat-content ng-tns-c404-355 mat-content-hide-toggle">
                                      <mat-panel-title _ngcontent-oko-c408 className="mat-expansion-panel-header-title ng-tns-c404-355">
                                        Day of the trip
                                      </mat-panel-title>
                                      <mat-panel-description _ngcontent-oko-c408 className="mat-expansion-panel-header-description ng-tns-c404-355">
                                        Inform the date you wish to travel
                                        <mat-icon _ngcontent-oko-c408 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                          date_range
                                        </mat-icon>
                                      </mat-panel-description>
                                    </span>
                                    {/* */}
                                  </mat-expansion-panel-header>
                                  <div aria-labelledby="mat-expansion-panel-header-4" className="mat-expansion-panel-content ng-tns-c402-354 ng-trigger ng-trigger-bodyExpansion" id="cdk-accordion-child-4" role="region" style={{"height":"0px","visibility":"hidden"}}>
                                    <div className="mat-expansion-panel-body ng-tns-c402-354">
                                      <mat-form-field _ngcontent-oko-c408 appearance="fill" className="mat-mdc-form-field ng-tns-c67-356 ng-tns-c402-354 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-primary ng-star-inserted" style={{}}>
                                        {/* */}
                                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-356 mdc-text-field--filled">
                                          <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-356 ng-star-inserted" />
                                          {/* */}
                                          <div className="mat-mdc-form-field-flex ng-tns-c67-356">
                                            {/* */}
                                            {/* */}
                                            {/* */}
                                            <div className="mat-mdc-form-field-infix ng-tns-c67-356">
                                              <label aria-owns="mat-input-80" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-356 ng-star-inserted" htmlFor="mat-input-80" id="mat-mdc-form-field-label-228" matformfieldfloatinglabel>
                                                <mat-label _ngcontent-oko-c408 className="ng-tns-c67-356">
                                                  Date
                                                </mat-label>
                                                {/* */}
                                              </label>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              <input _ngcontent-oko-c408 aria-haspopup="dialog" aria-invalid="false" aria-required="false" className="mat-mdc-input-element mat-datepicker-input ng-tns-c67-356 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" data-mat-calendar="mat-datepicker-12" id="mat-input-80" matinput readOnly="true" />
                                            </div>
                                            {/* */}
                                            {/* */}
                                          </div>
                                          <div className="mdc-line-ripple ng-tns-c67-356 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                          {/* */}
                                        </div>
                                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-356">
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-356 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                            {/* */}
                                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-356" />
                                          </div>
                                          {/* */}
                                        </div>
                                      </mat-form-field>
                                      <mat-datepicker _ngcontent-oko-c408 className="ng-tns-c402-354">
                                      </mat-datepicker>
                                      {/* */}
                                      {/* */}
                                    </div>
                                    <mat-action-row _ngcontent-oko-c408 className="mat-action-row ng-tns-c402-354">
                                      <button _ngcontent-oko-c408 className="mdc-button mat-mdc-button mat-warn mat-mdc-button-base" color="warn" mat-button>
                                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                        </span>
                                        <span className="mdc-button__label">
                                          Previous
                                        </span>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                      <button _ngcontent-oko-c408 className="mdc-button mat-mdc-button mat-primary mat-mdc-button-base" color="primary" mat-button>
                                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                        </span>
                                        <span className="mdc-button__label"> End </span>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                    </mat-action-row>
                                  </div>
                                </mat-expansion-panel>
                                {/* */}
                              </mat-accordion>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </app-expansion-panel>
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
  